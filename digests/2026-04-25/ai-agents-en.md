# OpenClaw Ecosystem Digest 2026-04-25

> Issues: 500 | PRs: 500 | Projects covered: 14 | Generated: 2026-04-24 22:11 UTC

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

# OpenClaw Project Digest: 2026-04-25

## 1. Today's Overview
OpenClaw is experiencing exceptionally high project velocity, processing exactly 500 issues and 500 pull requests within the last 24 hours. While the majority of issues (476) were closed, maintainers and contributors are actively pushing foundational architectural changes, shipping multiple PRs dedicated to refactoring the agent runtime (RuntimePlan) and introducing new capabilities like scoped mention patterns and realtime voice consult tools. The high volume of open PRs (191) indicates a massive concurrent development effort, likely preparing the codebase for a major stability and architectural milestone.

## 2. Releases
Four new versions were published today, centered around the `2026.4.23` milestone (stable and 3 betas):
*   **v2026.4.23 (Stable & Betas):** The focal point of this release is enhanced image generation support. 
    *   **OpenAI:** Added image generation and reference-image editing via Codex OAuth. Users can now utilize `openai/gpt-image-2` natively without needing an explicit `OPENAI_API_KEY` (Fixes [#70703](https://github.com/openclaw/openclaw/issues/70703)).
    *   **OpenRouter:** Integrated `image_generate` support for image creation and reference-image editing.

## 3. Project Progress
Significant architectural and feature advancements were merged or actively pushed today:
*   **Agent Runtime Rewrite (RuntimePlan):** A massive concerted effort led by `100yenadmin` to refactor the Pi/Codex agent runtime via a contract-first approach (RFC [#71004](https://github.com/openclaw/openclaw/issues/71004)). PRs [#71196](https://github.com/openclaw/openclaw/pull/71196), [#71238](https://github.com/openclaw/openclaw/pull/71238), [#71223](https://github.com/openclaw/openclaw/pull/71223), [#71220](https://github.com/openclaw/openclaw/pull/71220), [#71222](https://github.com/openclaw/openclaw/pull/71222), and [#71224](https://github.com/openclaw/openclaw/pull/71224) lay the foundation for the Harness V2 lifecycle, centralizing tool policies and transcript resolution.
*   **Gateway & Channel Fixes:** 
    *   Resolved critical plugin HTTP route 404s (Webhook issues) by implementing a `globalThis` registry bridge to fix stale singleton states after reloads ([#45606](https://github.com/openclaw/openclaw/pull/45606), [#52764](https://github.com/openclaw/openclaw/pull/52764)).
    *   Fixed OpenAI WebSocket replay integrity and orphaned tool calls ([#40585](https://github.com/openclaw/openclaw/pull/40585)).
    *   Corrected Slack streaming fallback duplications ([#69063](https://github.com/openclaw/openclaw/pull/69063)) and chunked sender routing ([#71124](https://github.com/openclaw/openclaw/pull/71124)).
*   **New Features:** 
    *   Provider-aware Text-to-Speech expressiveness ([#69051](https://github.com/openclaw/openclaw/pull/69051)).
    *   Scoped mention pattern policy for all chat channels ([#70864](https://github.com/openclaw/openclaw/pull/70864)).

## 4. Community Hot Topics
*   **Real-time Voice Conversation Demand:** [Issue #7200](https://github.com/openclaw/openclaw/issues/7200) (24 comments, 23 👍) remains the most active feature request. The community is heavily requesting native bidirectional streaming audio via Twilio/WebRTC for phone-like interactions, signaling a strong demand for voice-native AI interfaces.
*   **Agent Execution Placebos:** A major user pain point revolves around agents confirming tasks but failing to execute tool calls. [Issue #40631](https://github.com/openclaw/openclaw/issues/40631) (22 comments) and [Issue #40082](https://github.com/openclaw/openclaw/issues/40082) (22 comments) highlight "execution-state" bugs where the system outputs placeholders ("One sec") but remains inactive.
*   **Memory Management:** [Issue #41778](https://github.com/openclaw/openclaw/issues/41778) (14 comments, 5 👍) reports severe memory leaks on constrained hardware, with `openclaw-message` crashing on 4GB servers since `v2026.3.7`.

## 5. Bugs & Stability
The tracker shows a long tail of historical regression bugs being formally closed today, though several critical active bugs persist:
1.  **Infinite Tool Call Loops:** [Issue #41707](https://github.com/openclaw/openclaw/issues/41707) and PR [#71274](https://github.com/openclaw/openclaw/pull/71274) address infinite loops with specific models (like Kimi Code), caused by incorrect `stopReason` rewrites. *Fix is currently open.*
2.  **Compaction Deadlocks:** [Issue #40295](https://github.com/openclaw/openclaw/issues/40295) details an unrecoverable deadlock where compaction timeouts block session recovery commands like `/new` and `/reset`.
3.  **OAuth & Model Configuration:** Users report OpenAI Codex OAuth returning 400 errors ([Issue #39792](https://github.com/openclaw/openclaw/issues/39792)) and local Ollama models hanging indefinitely ([Issue #41871](https://github.com/openclaw/openclaw/issues/41871) - 8 👍).
4.  **Channel Webhook 404s:** Synology ([Issue #45822](https://github.com/openclaw/openclaw/issues/45822)), LINE ([Issue #45888](https://github.com/openclaw/openclaw/issues/45888)), and Google Chat webhooks failing with 404s. *Addressed by recent merged PRs [#45606](https://github.com/openclaw/openclaw/pull/45606) & [#52764](https://github.com/openclaw/openclaw/pull/52764).*

## 6. Feature Requests & Roadmap Signals
*   **Voice Calling & WebRTC:** The high engagement on [Issue #7200](https://github.com/openclaw/openclaw/issues/7200) combined with today's PR [#71272](https://github.com/openclaw/openclaw/pull/71272) (feat(voice-call): share realtime agent consult tool) strongly indicates that realtime voice interaction is the immediate next frontier.
*   **Advanced TTS:** [PR #69051](https://github.com/openclaw/openclaw/pull/69051) introduces provider-aware TTS with optional voice libraries, hinting at highly customizable, expressive AI personalities in upcoming releases.
*   **Agent Reliability (Harness V2):** The RuntimePlan RFC ([#71004](https://github.com/openclaw/openclaw/issues/71004)) and subsequent PR chain clearly map the project's roadmap toward eliminating execution "placebo" bugs and state deadlocks via stricter lifecycle contracts.

## 7. User Feedback Summary
Users love OpenClaw's flexibility and broad channel/plugin support but are currently experiencing friction with reliability and resource management. Specific feedback includes:
*   **Frustration with Agent Execution:** Users are confused when the UI claims actions are taken, but no background tool is actually invoked (the "One sec" bug).
*   **Self-Hosting Constraints:** Enthusiasts running OpenClaw on smaller VPSs (4GB RAM) feel marginalized by recent memory bloat (`v2026.3.7`+), forcing rollbacks.
*   **Configuration Complexity:** Setting up providers like DashScope/Alibaba Cloud ([Issue #40617](https://github.com/openclaw/openclaw/issues/40617)) and proxy configurations for OAuth ([Issue #42176](https://github.com/openclaw/openclaw/issues/42176)) remain non-intuitive, often requiring deep CLI knowledge.

## 8. Backlog Watch
*   **Local Model Hangs:** [Issue #41871](https://github.com/openclaw/openclaw/issues/41871) (Ollama hanging in OpenClaw) has 8 thumbs up but seems unresolved.
*   **Websocket UI Connection Regression:** [Issue #40977](https://github.com/openclaw/openclaw/issues/40977) shows users failing to connect to the Control UI via 4008 errors, blocking basic Docker deployments.
*   **Tailscale Auth Issue:** [Issue #29670](https://github.com/openclaw/openclaw/issues/29670) (Open) details a bug where Tailscale `serve` mode bypasses auth settings and still requires pairing, complicating zero-trust deployments.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report for the AI agent and personal AI assistant open-source ecosystem based on the 2026-04-25 community digests.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently experiencing a phase of aggressive architectural maturation and high development velocity. Projects are rapidly transitioning from simple chat interfaces to complex, multi-channel, multi-agent orchestrators. The dominant themes across the landscape include deep investments in memory management, voice-native capabilities, and strict security sandboxing. While core reference projects like OpenClaw and ZeroClaw are stabilizing foundational runtimes for massive scale, downstream and niche competitors are differentiating by targeting specific environments, such as local lightweight hardware or enterprise messaging platforms. 

### 2. Activity Comparison
Projects are graded on a Health Score from A to D based on issue resolution, PR merge rates, and release stability.

| Project | Issues (24h Activity) | PRs (24h Activity) | Release Status (24h) | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 processed | 500 processed, 191 open | **v2026.4.23** (Stable) | **A+** |
| **CoPaw** | 14 open | 36 merged, 14 open | **v1.1.4 / v1.1.4.post1** | **A** |
| **LobsterAI** | 0 closed, 2 open | 42 merged | **2026.4.23 & 2026.4.24** | **A-** |
| **Moltis** | 7 closed | 29 merged | No release | **A** |
| **ZeroClaw** | 50 updated | 26 merged, 24 open | Stabilizing v0.6.9 | **A** |
| **NanoClaw** | 9 closed, 8 open | 27 merged | Post-v2.x stabilization | **B+** |
| **IronClaw** | 3 closed, 15 open | 6 merged, 44 open | No release (v0.25.0) | **B** |
| **NullClaw** | 3 open | 11 open (0 merged) | No release | **C+** |
| **ZeptoClaw** | 1 open | 1 open | No release | **C** |
| **EasyClaw** | 0 | 0 | **v1.8.9** | **C** |
| *NanoBot / Hermes / Pico / Tiny*| 0 | 0 | No release | **N/A** |

### 3. OpenClaw's Position
*   **Advantages vs Peers:** OpenClaw is the undisputed core reference implementation, processing 10x the volume of issues and PRs compared to any other project. Its gateway reliability, multi-channel support (Slack, Discord, Synology, LINE), and native integration with major providers (OpenAI, OpenRouter) are unmatched. 
*   **Technical Approach:** It is tackling deep distributed systems problems (e.g., compaction deadlocks, Websocket replay integrity) that lightweight alternatives ignore. Its "Harness V2" runtime rewrite uses a strict contract-first approach, setting a standard for agent lifecycle reliability.
*   **Community Size Comparison:** The community is massive but experiencing friction typical of large platforms, such as memory bloat on constrained self-hosted VPS environments and "execution placebo" bugs. In contrast, smaller communities (like NullClaw and Moltis) are highly focused on edge-case hardware and OS-level security, respectively.

### 4. Shared Technical Focus Areas
Several requirements are emerging simultaneously across independent projects, highlighting broader industry needs:
*   **Advanced Routing & Multi-Agent Orchestration:** Projects are moving past single-model setups. NanoClaw (per-agent provider config), NullClaw (trigger-based tool prioritization), ZeroClaw (Multi-agent UX RFC), and CoPaw (scope-aware routing) are all building infrastructure to route tasks to specialized sub-agents or cheaper models.
*   **Security Sandboxing:** Unrestricted tool access is becoming taboo. Moltis is implementing Linux Landlock LSM for kernel-level isolation, CoPaw is adding workspace sandboxing and Windows path protection, and ZeroClaw is iterating heavily on shell security policies.
*   **Voice-Native Interfaces:** Real-time voice is the immediate next frontier. OpenClaw is actively shipping realtime consult tools and WebRTC demand is surging, while Moltis just merged push-to-talk and VAD continuous listening.
*   **Deep Memory & RAG Systems:** CoPaw introduced a massive long-term memory overhaul with pluggable backends; LobsterAI added embedding configuration for remote providers; and Moltis refactored AST-aware chunking for its memory system.

### 5. Differentiation Analysis
*   **Target Users:** OpenClaw and ZeroClaw target developers and self-hosters needing robust, enterprise-grade multi-channel gateways. LobsterAI and CoPaw are heavily focused on the desktop end-user (with CoPaw specifically targeting Chinese enterprise users via DingTalk/Feishu). NullClaw targets tinkerers running lightweight local hardware (RPi, Android/Termux).
*   **Architecture:** Moltis is differentiating by leaning into Rust-based, ultra-secure, OS-level paradigms (Landlock, alternative CDP browsers). IronClaw is exploring a unique modular path using a minimal kernel with WASM tooling. Meanwhile, NanoClaw is establishing a niche in containerized, CLI-driven personal assistant topologies.
*   **Feature Focus:** ZeptoClaw and NullClaw are focusing on highly customizable, deterministic skill discovery and execution, whereas the larger projects rely on LLM inference for tool selection.

### 6. Community Momentum & Maturity
*   **Tier 1: Rapid Iterators (OpenClaw, CoPaw, LobsterAI, Moltis):** These projects are shipping massive PR volumes daily. CoPaw and LobsterAI are aggressively integrating bleeding-edge models (DeepSeek V4, Kimi K2.6) and releasing multiple weekly builds, accepting the trade-off of occasional regressions (e.g., CoPaw's white-screen desktop bug).
*   **Tier 2: Architecture Builders (ZeroClaw, NanoClaw, IronClaw):** These projects are iterating slightly slower but are heavily focused on RFCs and foundational rewrites. ZeroClaw is actively managing an RFC for multi-agent routing and i18n, while NanoClaw is stabilizing its major v2 rewrite.
*   **Tier 3: Stagnant / Low Velocity (NullClaw, ZeptoClaw, EasyClaw):** These projects show minimal maintainer merge activity. NullClaw has 11 open PRs pending review, creating a bottleneck. EasyClaw and ZeptoClaw are mostly quiet or in maintenance modes.

### 7. Trend Signals
*   **Bleeding-Edge Model Integration Brings Friction:** The immediate integration of models like DeepSeek V4 is causing breaking regressions across the ecosystem (e.g., payload rejections, context loss, broken tool schemas). *Value for developers:* Abstracting provider API differences and strictly handling `reasoning_content` is now a critical requirement for agent frameworks.
*   **Local/Edge AI Hardware Friction:** Users are attempting to run agents on constrained systems (4GB VPS, Raspberry Pi 5, Android/Termux), leading to memory leaks and CPU busy-loops. *Value for developers:* Agents must optimize for memory caps, allow for configurable timeouts (to support slower local models like Gemmma/Ollama), and support cross-compilation (e.g., `aarch64`/`x86_64`).
*   **Observability and Auditability:** Agent "hallucinations" and unverified tool executions are no longer acceptable. OpenClaw is fixing "execution placebos," ZeroClaw is discussing cryptographic HMAC-SHA256 receipts for tool execution, and Moltis introduced best-effort witness recording. *Value for developers:* Building verifiable, observable agent loops is critical for enterprise trust.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-25

## 1. Today's Overview
NanoClaw is experiencing a massive surge in community activity as contributors rapidly iterate on the newly released **v2 architectural rewrite**. With 36 pull requests updated (27 merged/closed) and 17 issues updated (9 closed) in the last 24 hours, the project is in a highly active stabilization phase. The development focus is heavily bifurcated between hardening the v2 setup/deployment process on Linux environments and expanding the assistant's integration capabilities (Gmail, Google Calendar, custom OpenAI-compatible endpoints). The strong PR merge rate indicates a healthy, responsive maintainer cycle actively shipping fixes to satisfy early v2 adopters.

## 2. Releases
No new official releases were tagged in the last 24 hours. The project is currently iterating on the **v2.x** baseline (originally released 2026-04-22). The ongoing PRs represent cumulative patches and feature additions that will likely culminate in a v2.1 or v2.0.1 stabilization release.

## 3. Project Progress
The project saw 27 merged/closed PRs today, driven largely by critical v2 bug fixes, documentation updates, and new integrations:
*   **New Integrations:** Merged [PR #1961](https://github.com/qwibitai/nanoclaw/pull/1961) (`/add-gmail-tool`) and [PR #1964](https://github.com/qwibitai/nanoclaw/pull/1964) (`/add-gcal-tool`), introducing OneCLI-native Gmail and Google Calendar MCP tools for containerized personal assistant workflows.
*   **Conversation Reliability:** [PR #1965](https://github.com/qwibitai/nanoclaw/pull/1965) fixed a critical bug where conversational turns could complete silently without delivering a user-visible reply.
*   **Messaging Reliability:** [PR #1963](https://github.com/qwibitai/nanoclaw/pull/1963) resolved a failure in `/manage-channels` that prevented the successful wiring of new messaging channels.
*   **Security:** [PR #4](https://github.com/qwibitai/nanoclaw/pull/4) (open since Feb) was finally closed, having addressed a task data leakage issue by isolating IPC directories per group.
*   **Documentation & Cleanup:** Maintainer `glifocat` merged a blitz of 4 documentation PRs ([PR #1980](https://github.com/qwibitai/nanoclaw/pull/1980), [PR #1979](https://github.com/qwibitai/nanoclaw/pull/1979), [PR #1978](https://github.com/qwibitai/nanoclaw/pull/1978), [PR #1977](https://github.com/qwibitai/nanoclaw/pull/1977)) to update schema terminology and remove pre-v2 legacy prompt files.

## 4. Community Hot Topics
*   **SSL Certificate Outage ([Issue #1503](https://github.com/qwibitai/nanoclaw/issues/1503)):** The most active issue of the day (18 comments) reports that `nanoclaw.dev` has an invalid SSL certificate. This was updated today, indicating it may still be unresolved and is highly visible to the community.
*   **Custom OpenAI Endpoints ([Issue #1984](https://github.com/qwibitai/nanoclaw/issues/1984)):** Author `TeeJS` opened a detailed issue requesting support for BYO OpenAI-compatible endpoints (Codex/OpenCode). This suggests a strong user desire to decouple the agent from default providers, moving toward a true multi-model architecture.
*   **Bulk Retractions ([Issues #1946 - #1952](https://github.com/qwibitai/nanoclaw/issues/1946)):** User `alecburrett` filed and subsequently retracted 7 issues in quick succession, flagging them as filed in error. While a minor anomaly, it suggests an influx of new users testing the issue tracker boundaries following the v2 release.

## 5. Bugs & Stability
The v2 rewrite has exposed several Linux-specific deployment and environment bugs that are currently disrupting fresh installs.
*   **[Medium] Linux Setup Failure - Build Tools ([PR #1987](https://github.com/qwibitai/nanoclaw/pull/1987)):** `pnpm install` crashes on Linux hosts missing `build-essential` due to `better-sqlite3` compilation. *Fix is currently open.*
*   **[Medium] Headless Systemd Misconfiguration ([Issue #1981](https://github.com/qwibitai/nanoclaw/issues/1981)):** Systemd is misdetected as absent on headless Ubuntu/Hetzner setups, breaking service installation. *No fix PR yet.*
*   **[Medium] PATH Propagation Error ([Issue #1973](https://github.com/qwibitai/nanoclaw/issues/1973)):** Fresh Linux installs fail to find `onecli` because bash subprocesses do not inherit the updated PATH. *No fix PR yet.*
*   **[Low] Setup Verify False Failure ([Issue #1971](https://github.com/qwibitai/nanoclaw/issues/1971)):** `setup/verify.ts` reports failure on working CLI-only installs due to missing optional messaging credentials. *Status: Closed, likely addressed in recent PRs.*
*   **[Low] Stale Docker Group ([Issue #414](https://github.com/qwibitai/nanoclaw/issues/414)):** Retained user sessions fail to access Docker even after the script detects a stale group assignment. *No fix PR yet.*

## 6. Feature Requests & Roadmap Signals
*   **Advanced LLM Routing:** [PR #1968](https://github.com/qwibitai/nanoclaw/pull/1968) introduces end-to-end per-agent provider and model configuration. *Status: Open.* If merged, this will allow granular model assignment (e.g., cheaper models for ops, premium models for CEO agents).
*   **Custom Endpoints:** [Issue #1984](https://github.com/qwibitai/nanoclaw/issues/1984) explicitly requests support for custom/local OpenAI-compatible endpoints, highlighting friction with current provider constraints.
*   **Host-Side Agent Observability:** [PR #1985](https://github.com/qwibitai/nanoclaw/pull/1985) and related PRs ([PR #1986](https://github.com/qwibitai/nanoclaw/pull/1986), [PR #1990](https://github.com/qwibitai/nanoclaw/pull/1990), [PR #1993](https://github.com/qwibitai/nanoclaw/pull/1993)) aim to introduce live tool-call logging for host-side CEO/Ops agents. This signals a strong roadmap focus on debuggability and transparency for multi-agent topologies.

## 7. User Feedback Summary
User feedback heavily revolves around **installation friction and multi-channel configuration**. Users deploying NanoClaw v2 on standard cloud VPS environments (e.g., Ubuntu on Hetzner) are running into blocking environment issues (systemd misconfiguration, missing build tools). 
On the positive side, the community is actively extending the agent's utility. The successful merging of Gmail and Google Calendar tools indicates that users are treating NanoClaw as a serious daily-driver personal AI assistant. Furthermore, detailed bug reports regarding Discord routing ([Issue #1959](https://github.com/qwibitai/nanoclaw/issues/1959)) and duplicate Telegram replies ([Issue #1982](https://github.com/qwibitai/nanoclaw/issues/1982)) show that power users are heavily stress-testing multi-platform messaging topologies.

## 8. Backlog Watch
*   **[Issue #1503](https://github.com/qwibitai/nanoclaw/issues/1503) - Invalid SSL Cert:** This has been an active issue with 18 comments and an update as recently as yesterday. The continued presence of an SSL failure on the main project domain needs immediate maintainer attention.
*   **[Issue #414](https://github.com/qwibitai/nanoclaw/issues/414) - Stale Docker Group:** Open for two months. The warning-only approach to stale docker groups causes inevitable service start failures for new users.
*   **[PR #4](https://github.com/qwibitai/nanoclaw/pull/4) - IPC Directory Isolation:** Though closed today, it spent months in the backlog; maintainers should ensure similar isolation standards are proactively applied to the new v2 architecture to prevent future data leakage regressions.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-25

## 1. Today's Overview
NullClaw is currently experiencing a period of high development activity, characterized by a substantial batch of open pull requests and active issue triage. Over the last 24 hours, the project saw 3 open/active issues and 11 newly updated PRs, all currently in an open state with zero merged or closed PRs. This indicates a heavy feature-development and bug-fix phase, largely driven by contributor `manelsen`. The project health appears robust, with contributors actively addressing edge-case platform bugs (like Android/Termux and Raspberry Pi support) while iterating heavily on the agent's core skill discovery and tool customization capabilities. 

## 2. Releases
There have been **0 new releases** recorded in the last 24 hours. With 11 significant feature and bugfix PRs currently queued in the open state, the project appears to be staging up for a substantial consolidated release in the near future.

## 3. Project Progress
While no PRs were merged today, the open pipeline reveals a massive leap forward in the agent's architecture. Contributor `manelsen` has pushed a highly cohesive feature set focused on **Skill Management and Tool Customization**. 
Key advancements include:
* **Skills Architecture:** Updates to support Agent Skills RFC 0.2.0 ([PR #831](https://github.com/nullclaw/nullclaw/pull/831)), nested skill discovery ([PR #840](https://github.com/nullclaw/nullclaw/pull/840)), and CLI flags to activate specific skills at startup ([PR #841](https://github.com/nullclaw/nullclaw/pull/841)).
* **Tool Customization & Routing:** Implementing trigger-based tool prioritization ([PR #836](https://github.com/nullclaw/nullclaw/pull/836)), external tool customization files ([PR #837](https://github.com/nullclaw/nullclaw/pull/837)), and dynamic `system_prompt` and `enabled` overrides ([PR #835](https://github.com/nullclaw/nullclaw/pull/835)).
* **Infrastructure & Channels:** Adding a workspace directory flag ([PR #842](https://github.com/nullclaw/nullclaw/pull/842)), progress hints for A2A streams ([PR #844](https://github.com/nullclaw/nullclaw/pull/844)), and pantalaimon E2EE proxy support for Matrix ([PR #838](https://github.com/nullclaw/nullclaw/pull/838)).

## 4. Community Hot Topics
The most actively discussed issue is **[Issue #167](https://github.com/nullclaw/nullclaw/issues/167)** (*"why cannot use the shell command 'curl and wget'"*), which has accumulated 8 comments and 1 upvote since its creation. Although closed, the longevity of the issue and recent updates suggest users frequently attempt to use arbitrary shell commands via the agent and encounter friction, indicating a need for clearer documentation on tool execution permissions or integrated shell-tool templates.

## 5. Bugs & Stability
Several notable stability issues were reported in the last 24 hours, predominantly concerning edge-case environments:
1. **High Severity / Performance:** **[Issue #851](https://github.com/nullclaw/nullclaw/issues/851)** - Busy-loop on `accept4()` returning `EAGAIN` pegs the CPU core at 100% on a Raspberry Pi 5. This poses a significant risk for users running lightweight gateway servers. 
2. **Medium Severity (Platform Support):** **[Issue #868](https://github.com/nullclaw/nullclaw/issues/868)** - Zig build fails on Android/Termux (aarch64) with an `AccessDenied` error during the `linkat` step.
3. **Medium Severity (Configuration):** **[Issue #869](https://github.com/nullclaw/nullclaw/issues/869)** - Telegram channel fails to load properly from `config.json` despite the config being valid, always showing "not configured".
4. **Low Severity / UX:** **[Issue #763](https://github.com/nullclaw/nullclaw/issues/763)** (Addressed in [PR #843](https://github.com/nullclaw/nullclaw/pull/843)) - Silent crash during onboard when `KeyWriteFailed` occurs due to directory permissions (e.g., in Docker environments).

## 6. Feature Requests & Roadmap Signals
Analyzing the open PRs provides clear signals regarding the project's immediate roadmap:
* **Advanced LLM Routing:** The introduction of trigger-based tool prioritization ([PR #836](https://github.com/nullclaw/nullclaw/pull/836)) suggests the agent is moving towards more deterministic, keyword-driven workflows rather than relying solely on LLM inference for tool selection.
* **Enterprise/Advanced Configurations:** Support for Matrix E2EE via pantalaimon ([PR #838](https://github.com/nullclaw/nullclaw/pull/838)) and external tool customization files ([PR #837](https://github.com/nullclaw/nullclaw/pull/837)) indicates a push toward multi-tenant or complex deployment scenarios.
* **RFC Standardization:** The adoption of Agent Skills RFC 0.2.0 ([PR #831](https://github.com/nullclaw/nullclaw/pull/831)) signals a commitment to standardized interoperability in the broader AI agent ecosystem.

## 7. User Feedback Summary
Real-world user feedback highlights a trend toward deploying NullClaw on diverse, lightweight hardware. Users are actively trying to run the gateway on ARM architecture (Raspberry Pi 5) and mobile environments (Android/Termux). The configuration UX still has friction points, as seen with the Telegram config parsing bug and Docker permission issues during onboarding. Furthermore, the ongoing discussion around `curl`/`wget` implies that users expect robust, built-in web-fetching utilities or transparent shell-access capabilities from the base agent.

## 8. Backlog Watch
* **Maintainer Bottleneck:** The most critical item requiring attention is the queue of **11 open PRs**, almost all authored by `manelsen`. None have been merged or closed. This creates a potential integration bottleneck. Maintainers should review these PRs to prevent massive merge conflicts and ensure contributor morale.
* **Unaddressed Bugs:** [Issue #868](https://github.com/nullclaw/nullclaw/issues/868) (Termux build failure) and [Issue #869](https://github.com/nullclaw/nullclaw/issues/869) (Telegram config bug) currently have 0 comments. As these directly impact platform compatibility and channel integrations, they require triage from maintainers.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-25

## 1. Today's Overview
IronClaw is currently experiencing a massive surge in open source activity, driven largely by a dedicated QA bug bash and active feature development. With 50 pull requests updated and 18 issues moving in the last 24 hours, contributor engagement is exceptionally high. However, the issue resolution rate is struggling to keep pace, as only 3 issues were closed compared to 15 remaining open, alongside 6 merged/closed PRs versus 44 still in review. The project is in a heavy iteration phase, actively working on stabilizing the newly introduced Engine V2, refining its LLM provider architecture, and overhauling its WASM tooling. 

## 2. Releases
**No new releases were published today.** The project is maintaining version `0.25.0` (referenced in recent bug reports). The development focus remains squarely on merging foundational architectural PRs and addressing regressions introduced in recent builds.

## 3. Project Progress
Six pull requests were merged/closed today, signaling targeted progress in LLM provider support and bug fixing:
*   **LLM Provider & Tool Schema Normalization:** PR [#2463](https://github.com/nearai/ironclaw/pull/2463) (merged) fixed tool schemas for the NEAR AI provider, preventing 400 errors from top-level `oneOf`/`anyOf` schemas. This is part of a larger effort accompanying open issue [#2950](https://github.com/nearai/ironclaw/issues/2950).
*   **Web UI Chat Streaming:** PR [#2890](https://github.com/nearai/ironclaw/pull/2890) (merged) fixed an issue where the "Fetch available models" setting returned empty results for regional NEAR AI private endpoints.
*   **CLI Reliability:** PR [#1988](https://github.com/nearai/ironclaw/pull/1988) (merged) resolved a panic caused by byte-index slicing on MCP tool descriptions containing multi-byte UTF-8 characters.

Meanwhile, highly ambitious "Engine V2" and architectural PRs saw active updates:
*   **WASM to Skills Migration:** PR [#2904](https://github.com/nearai/ironclaw/pull/2904) proposes replacing 11 WASM API-proxy tools with skill-based HTTP declarations.
*   **Configuration Decoupling:** PR [#2934](https://github.com/nearai/ironclaw/pull/2934) aims to separate webhook listener binds from HTTP channel enablement.

## 4. Community Hot Topics
The most pressing community topics center around platform compatibility, installation, and major architectural proposals:
*   **MCP stdio Transport Bug:** The most active bug today is [#2923](https://github.com/nearai/ironclaw/issues/2923) (+1 👍), a re-open of an earlier issue. Users are frustrated that stdio MCP servers erroneously trigger an OAuth discovery flow. This indicates a critical need for reliable local tool integrations.
*   **Platform Support Gap:** Issue [#2949](https://github.com/nearai/ironclaw/issues/2949) highlights that the installation script fails for `x86_64-unknown-linux-gnu`, pointing to missing release binaries for standard Linux architectures.
*   **Kernel Architecture Proposal:** Issue [#1741](https://github.com/nearai/ironclaw/issues/1741) discusses moving to an OS-like minimal kernel with DB-backed extension state, reflecting the community's desire for a more modular, compile-time-optional architecture.

## 5. Bugs & Stability
A coordinated QA session on the `hosted-staging` (Crab Shack) environment revealed several P2 stability issues, ranking in severity as follows:

*   **High Severity / Systemic:**
    *   **Config Reset on Startup:** [#2946](https://github.com/nearai/ironclaw/issues/2946) - `llm_backend` overrides env vars and config.toml on every startup, breaking deployments.
    *   **Channel Initialization:** [#2927](https://github.com/nearai/ironclaw/pull/2927) (Open PR) aims to fix clean-install channels failing to activate at boot.
    *   **Rust Version Mismatch:** [#2898](https://github.com/nearai/ironclaw/issues/2898) - Compiling requires `rustc 1.91`, but docs state `1.85`, blocking source builders.
*   **Medium Severity / UX & Integrations:**
    *   **Streaming Stalls:** [#2943](https://github.com/nearai/ironclaw/issues/2943) - Assistant responses post-tool-call require a page refresh to view.
    *   **Hallucinated Success:** [#2944](https://github.com/nearai/ironclaw/issues/2944) - Agent claims successful content creation despite extraction/search steps failing.
    *   **Auth Flow Issues:** [#2945](https://github.com/nearai/ironclaw/issues/2945) - One-time login links return "Unauthorized" immediately.
    *   **Telegram Degradation:** [#2939](https://github.com/nearai/ironclaw/issues/2939) and [#2942](https://github.com/nearai/ironclaw/issues/2942) - Telegram integrations showing raw developer configs or stopping altogether after TEE upgrades.
*   **CI / Infrastructure:**
    *   **Canary Failures:** Automated tests failed for `public-smoke` ([#2929](https://github.com/nearai/ironclaw/issues/2929)) and `openai-compatible` provider matrix ([#2930](https://github.com/nearai/ironclaw/issues/2930)).

## 6. Feature Requests & Roadmap Signals
Several open issues and PRs provide strong signals for the v0.26.0 or v1.0 roadmap:
*   **Expanded LLM Support:** PR [#1446](https://github.com/nearai/ironclaw/pull/1446) adds Aliyun BaiLian Coding Plan support, signaling an push into non-Western cloud AI providers.
*   **Web UX Enhancements:** PR [#2335](https://github.com/nearai/ironclaw/pull/2335) introduces a Cmd+K command palette for the web UI, and Issue [#1344](https://github.com/nearai/ironclaw/issues/1344) outlines a much-needed redesign of the mobile layout with a collapsible hamburger menu.
*   **Decoupled Webhooks & Secrets:** PR [#2934](https://github.com/nearai/ironclaw/pull/2934) decouples webhook listeners, and PR [#2754](https://github.com/nearai/ironclaw/pull/2754) introduces self-service user secrets, showing a focus on enterprise-readiness and security.

## 7. User Feedback Summary
Users are enthusiastic about the platform's expanding capabilities but are currently bearing friction with setup, configuration, and platform edges. 
*   **Pain Points:** Config priority ordering (DB > env > file) is currently broken, causing frustration for self-hosters. The lack of `x86_64-unknown-linux-gnu` binaries and the incorrect Rust minimum version documentation are creating immediate barriers to entry. 
*   **UX Dissatisfaction:** Users note that the Telegram setup flow exposes confusing MTProto configurations rather than a user-friendly flow, and the web chat requires manual page refreshes to see tool results.
*   **Positive Signals:** The rapid addition of skills, WASM replacements, and advanced web features like Omnisearch indicate a highly active project pushing toward a polished, extensible AI assistant.

## 8. Backlog Watch
The following critical items require immediate maintainer attention:
*   **PR [#1989](https://github.com/nearai/ironclaw/pull/1989)**: A fix for shell tool panics when working directories don't exist. It has been open since April 3rd and is highly requested for CLI stability.
*   **PR [#1435](https://github.com/nearai/ironclaw/pull/1435)**: A major dependency overhaul replacing `pdf-extract` with `pdf_oxide`. Open since March 19th, merging this would resolve underlying performance and layout issues in document processing.
*   **Issue [#2949](https://github.com/nearai/ironclaw/issues/2949)**: Missing Linux binary releases needs a swift response to prevent alienating a core segment of the open-source community.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-25

## 1. Today's Overview
The LobsterAI project is experiencing a phase of exceptionally high development velocity, evidenced by **42 merged pull requests** and **2 new releases** published within the last 24 hours. The core team is heavily focused on expanding LLM provider support, refining the desktop client's UI/UX, and stabilizing integration bridges for various Instant Messaging (IM) platforms. While the maintainers are closing issues and merging code at an impressive rate, the lack of closed issues today suggests a slight disconnect between community bug reports and the immediate development pipeline. Overall, the project's health is robust and highly active.

## 2. Releases
Two rapid-fire releases were deployed to production, focusing primarily on new model integrations, IM synchronization fixes, and user experience refinements.

*   **[LobsterAI 2026.4.24](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.24)**
    *   *New Features:* Added **DeepSeek V4 Flash**, **DeepSeek V4 Pro**, and **Kimi K2.6** model support.
    *   *Bug Fixes:* Trimmed and normalized search query whitespace in skills/MCP search; added a clear button.
*   **[LobsterAI 2026.4.23](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.23)**
    *   *Bug Fixes:* Corrected `UserProfile` fields to properly include `userId` in update check requests; resolved IM synchronization algorithm bugs and associated test cases.
    *   *Enhancements:* Added version headers to update requests; added `install-timing.log` to Windows log exports.

## 3. Project Progress
The 42 merged PRs indicate a massive integration effort, heavily driven by core maintainers (`liuzhq1986`, `btc69m979y-dotcom`, and `liugang519`). Key advancements include:

*   **Multi-Platform IM Integrations:** Significant progress in enabling multi-robot support for external platforms, specifically [Telegram (PR #1792)](https://github.com/netease-youdao/LobsterAI/pull/1792) and [Discord (PR #1794)](https://github.com/netease-youdao/LobsterAI/pull/1794). Also, an improved IM synchronization algorithm was merged [(PR #1778)](https://github.com/netease-youdao/LobsterAI/pull/1778).
*   **Desktop App & Cowork UI:** Extensive UI responsive adjustments were made, including widening the tool call summary display and expanding content max-width to 1024px [(PR #1799)](https://github.com/netease-youdao/LobsterAI/pull/1799), and aligning quick action widths [(PR #1816)](https://github.com/netease-youdao/LobsterAI/pull/1816).
*   **Agent Runtime & Stability:** Fixed a critical mismatch where UI skill discovery differed from OpenClaw runtime resolution, preventing "skill not found" errors [(PR #1815)](https://github.com/netease-youdao/LobsterAI/pull/1815). Gateway reliability was improved by preventing unnecessary restarts on focus/blur events [(PR #1798)](https://github.com/netease-youdao/LobsterAI/pull/1798).
*   **Memory Capabilities:** Introduced embedding configuration for memory search, allowing remote providers like OpenAI and Gemini [(PR #1810)](https://github.com/netease-youdao/LobsterAI/pull/1810).

## 4. Community Hot Topics
*   **[Issue #1813: DeepSeek V4 compatibility failure](https://github.com/netease-youdao/LobsterAI/issues/1813)** - A newly opened issue reporting `provider rejected the request schema or tool payload` when using the newly integrated DeepSeek V4 model. This suggests a rapid adjustment may be needed following the V4 release. (1 comment, highly active).
*   **[Issue #38: Strategies for reducing token usage](https://github.com/netease-youdao/LobsterAI/issues/38)** - An older but recently updated stale issue where users are actively seeking ways to optimize token consumption and reduce API request volumes.
*   **[PR #5: ESLint configuration overhaul](https://github.com/netease-youdao/LobsterAI/pull/5)** - An older community PR from February that was suddenly pushed and closed today, addressing 269+ linting errors, indicating a backend cleanup effort by the maintainers.

## 5. Bugs & Stability
*   **Critical: Provider Payload Rejection** - [Issue #1813](https://github.com/netease-youdao/LobsterAI/issues/1813) reports that DeepSeek V4 integration flat-out rejects tool payloads. *Status: Open, no merged fix PR yet, likely high priority given the recent model launch.*
*   **Medium: Cowork DiffView Formatting** - The DiffView component broke when handling the edit tool's array input formats. *Status: Fixed in [PR #1814](https://github.com/netease-youdao/LobsterAI/pull/1814).*
*   **Medium: Gateway Timeout Flakiness** - The `chat.send` RPC was timing out at 30s because the gateway took longer to report ready. *Status: Fixed in [PR #1803](https://github.com/netease-youdao/LobsterAI/pull/1803) by increasing the timeout to 90s and adding monitoring logs.*
*   **Low: Agent Binding Config** - A configuration issue specifically affecting DingTalk (钉钉) agent bindings. *Status: Fixed in [PR #1757](https://github.com/netease-youdao/LobsterAI/pull/1757).*

## 6. Feature Requests & Roadmap Signals
Based on recent PRs and releases, LobsterAI is heavily investing in becoming a unified AI hub rather than just a standalone client:
*   **Expanded Local/Custom Model Support:** The addition of LM Studio configuration support ([PR #1787](https://github.com/netease-youdao/LobsterAI/pull/1787)) signals a strong push toward local, privacy-focused model deployment.
*   **Enhanced RAG / Long-term Memory:** The new embedding configuration settings ([PR #1810](https://github.com/netease-youdao/LobsterAI/pull/1810)) indicate that the next versions will likely feature robust, provider-agnostic memory search capabilities.
*   **Predictions for Next Version:** We can expect further refinements to the Discord/Telegram multi-bot syncing, a fix for the DeepSeek V4 schema issues, and potentially more streamlined UI updates for the "Cowork" feature.

## 7. User Feedback Summary
Users are enthusiastic about bleeding-edge model support (immediate requests/bugs surrounding DeepSeek V4 and Kimi K2.6). However, underlying pain points remain:
*   **Token Costs:** Users are actively looking for ways to minimize API calls and token usage, indicating that operating the agent continuously can become expensive.
*   **Runtime Mismatches:** Users experienced frustration where skills appeared in the UI but failed at runtime ([PR #1815](https://github.com/netease-youdao/LobsterAI/pull/1815)), pointing to a need for stricter integration testing between the configuration interface and the OpenClaw runtime engine.

## 8. Backlog Watch
*   **[Issue #41: Playwright Skill Errors](https://github.com/netease-youdao/LobsterAI/issues/41)** - An open stale issue since February 2026. Users report a mismatch between the documentation (referencing `playwright-cli`) and the script (using `playwright-mcp`). This needs maintainer attention to prevent user frustration with the agent's tooling ecosystem.
*   **[Issue #38: Token Optimization](https://github.com/netease-youdao/LobsterAI/issues/38)** - While technically a feature request/discussion, it has sat idle. Addressing this (e.g., implementing local summarization or prompt caching mechanisms) would greatly improve user satisfaction regarding operational costs.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-25

## 1. Today's Overview
Project activity for Moltis on 2026-04-25 is exceptionally high, indicating a very healthy and rapid development cadence. The maintainers merged 29 pull requests out of the 31 updated in the last 24 hours, resolving 7 issues. The current open PRs and issues focus heavily on hardening OS-level security sandboxing (via Linux Landlock), improving configuration management, and expanding agent communication channels (like Discord). With no new official releases cut today, the repository is currently in an active feature-merging and stabilization phase, likely building up to a significant future release.

## 2. Releases
There were no new releases published today. 

## 3. Project Progress
A massive amount of code was merged today, spanning core architecture, user experience, and deployment:
*   **Architecture & Config:** A major refactoring of the configuration system was merged ([PR #864](https://github.com/moltis-org/moltis/pull/864)), introducing layered configuration with a Moltis-managed `defaults.toml` and an override-only `moltis.toml` for users. 
*   **Agent Orchestration:** Moltis agents can now utilize built-in sub-agent presets (research, coder, reviewer, etc.) thanks to [PR #844](https://github.com/moltis-org/moltis/pull/844).
*   **Platform Expansions:** New Discord channel pattern filtering was added ([PR #865](https://github.com/moltis-org/moltis/pull/865)), and an MCP server management skill was introduced ([PR #840](https://github.com/moltis-org/moltis/pull/840)).
*   **Voice & Web UI:** Long-awaited features like push-to-talk and VAD continuous listening were merged ([PR #303](https://github.com/moltis-org/moltis/pull/303)).
*   **Packaging & Refactoring:** A Nix flake was added ([PR #745](https://github.com/moltis-org/moltis/pull/745)), the memory system was refactored to extract AST-aware chunking into its own crate ([PR #791](https://github.com/moltis-org/moltis/pull/791)), and Traditional Chinese locale support was merged ([PR #339](https://github.com/moltis-org/moltis/pull/339)).

## 4. Community Hot Topics
The most actively discussed item today was an older enhancement that was recently closed:
*   **Datetime in System Prompt ([Issue #176](https://github.com/moltis-org/moltis/issues/176)):** With 18 comments, this highly requested feature (allowing the AI to know the current date/time natively) generated significant community feedback before being resolved.
*   **Task List Bug ([Issue #776](https://github.com/moltis-org/moltis/issues/776)):** A persistent bug in `task_list.list` garnered 3 comments, highlighting how heavily users rely on the agent's built-in task management capabilities for complex workflows.
*   **Tool Witness Recording ([PR #470](https://github.com/moltis-org/moltis/pull/470)):** This merged PR introduced best-effort witness recording for tool executions, indicating a strong community need for audit trails and performance monitoring in automated agent loops.

## 5. Bugs & Stability
Several bugs were identified and immediately addressed today, showing strong issue-to-fix velocity:
*   **Critical (Agent Loop):** The agent heartbeat re-fired in a tight loop when using `exec` during a turn. *Fixed by [PR #863](https://github.com/moltis-org/moltis/pull/863), associated with [Issue #858](https://github.com/moltis-org/moltis/issues/858).*
*   **High (Security):** Voice provider API keys were being stored in plain text in `moltis.toml` ([Issue #867](https://github.com/moltis-org/moltis/issues/867)). This is currently open and poses a security risk for users utilizing TTS/STT integrations.
*   **High (Filesystem):** Silent memory turns were saving with incorrect dates in filenames. *Fixed by closed [Issue #857](https://github.com/moltis-org/moltis/issues/857).*
*   **Medium (Provider Compatibility):** Fireworks AI JSON Schema integration broke due to null enums. *Fixed by [PR #862](https://github.com/moltis-org/moltis/pull/862), associated with [Issue #848](https://github.com/moltis-org/moltis/issues/848).*
*   **Medium (UX):** The chat UI auto-scrolled to the bottom even if the user was reading previous messages. *Fixed by closed [Issue #824](https://github.com/moltis-org/moltis/issues/824).*

## 6. Feature Requests & Roadmap Signals
Today's issues and PRs highlight a clear trajectory toward enterprise readiness, security, and advanced sandboxing:
*   **Kernel-Level Sandboxing:** [Issue #868](https://github.com/moltis-org/moltis/issues/868) and the open [PR #866](https://github.com/moltis-org/moltis/pull/866) show active development integrating Linux Landlock LSM for kernel-level filesystem isolation, ensuring restricted agents cannot access unauthorized files.
*   **Alternative Browser Backends:** [PR #869](https://github.com/moltis-org/moltis/pull/869) proposes adding "Obscura" as a lightweight sidecar browser backend for web automation, moving away from heavy Chromium dependencies.
*   **Improved Voice Privacy:** The community has flagged plain-text API keys as unacceptable ([Issue #867](https://github.com/moltis-org/moltis/issues/867)), signaling that a secure credential vault or OS keychain integration should be on the immediate roadmap.

## 7. User Feedback Summary
Users are actively testing Moltis in complex, real-world environments, leading to practical feedback. Users running Moltis via Docker on WSL2 encountered a sandbox crash ([Issue #828](https://github.com/moltis-org/moltis/issues/828)), which was resolved, showing strong adoption among Windows-based developers. The closure of [Issue #344](https://github.com/moltis-org/moltis/issues/344) (fixing the UX for sealed vaults) indicates that users are utilizing Moltis's secure memory vault features but previously found the locked-state UX confusing. Overall, users seem highly satisfied with the rapid turnaround on provider-specific bugs (like the Fireworks AI schema issue) and the introduction of voice features.

## 8. Backlog Watch
Maintainers should keep an eye on the following open items requiring final review or action:
*   **[Issue #867](https://github.com/moltis-org/moltis/issues/867):** The plain-text storage of Voice API keys is a security gap that needs an architectural decision (e.g., integrating OS-level keychains or moving keys to environment variables exclusively).
*   **[PR #869](https://github.com/moltis-org/moltis/pull/869) (Obscura Browser):** This open PR needs maintainer review to assess the maintenance burden of supporting a secondary browser backend versus the performance benefits of a lightweight CDP client.
*   **[Issue #868](https://github.com/moltis-org/moltis/issues/868) / [PR #866](https://github.com/moltis-org/moltis/pull/866) (Landlock):** The Landlock integration is a massive security win but requires careful review to ensure graceful degradation on older kernels and inside strict Docker containers.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-25

## 1. Today's Overview
CoPaw (referenced internally as QwenPaw) is experiencing a highly active development cycle, marked by the release of **v1.1.4** and a subsequent hotfix **v1.1.4.post1**, alongside heavy merging activity (36 closed/merged PRs against 14 open in the last 24 hours). The maintainers are clearly pushing hard on refining the newly introduced agent memory system, expanding LLM provider support (DeepSeek v4, Anthropic protocol), and stabilizing the multi-channel (DingTalk, Feishu) and desktop client experiences. However, this rapid iteration has introduced a wave of regressions—most notably critical white-screen crashes on the Desktop client and environment-specific breaking bugs—which are currently dominating community support channels. Overall, the project is in a state of aggressive, high-velocity feature maturation with a few growing pains in QA.

## 2. Releases
Two new versions were released today, highlighting rapid iterations on the core agent system:
*   **v1.1.4** (Major Feature Release)
    *   **Agent System Refactor:** Massive overhaul of the long-term memory module, now featuring pluggable backends, automatic summarization every N turns, and automatic memory retrieval. Includes a new context management interface ([#3548](https://github.com/agentscope-ai/QwenPaw/issues/3548)).
*   **v1.1.4.post1** (Hotfix)
    *   **Memory Enhancement:** Added CJK-aware query tokenization for more accurate memory searches in Chinese, Japanese, and Korean ([PR #3811](https://github.com/agentscope-ai/QwenPaw/pull/3811)).
    *   **Build Rollback:** Reverted the Vite v6 to v8 upgrade due to unstated build/performance issues ([PR #3812](https://github.com/agentscope-ai/QwenPaw/pull/3812)).

*(Note: `v1.1.5b1` is already being staged, per [PR #3803](https://github.com/agentscope-ai/QwenPaw/pull/3803))*

## 3. Project Progress
The team merged a massive 36 PRs in the last 24 hours, focusing heavily on multi-model compatibility, security, and channel fixes:
*   **Model Provider Support:** Added support for DeepSeek V4 models ([PR #3797](https://github.com/agentscope-ai/QwenPaw/pull/3797)) and patched empty thinking content handling for them ([PR #3794](https://github.com/agentscope-ai/QwenPaw/pull/3794)). Fixed formatter issues with Anthropic-compatible APIs ([PR #3786](https://github.com/agentscope-ai/QwenPaw/pull/3786)).
*   **Security & Privacy:** Fixed a major privacy leak in DingTalk where local file paths were exposed in messages ([PR #3790](https://github.com/agentscope-ai/QwenPaw/pull/3790)). Merged default shell invasion disablement and Windows path protection in the `FilePathToolGuardian` ([PR #3781](https://github.com/agentscope-ai/QwenPaw/pull/3781)).
*   **Platform Infrastructure:** Added asynchronous buffered token usage recording to improve performance ([PR #3766](https://github.com/agentscope-ai/QwenPaw/pull/3766)). Improved scope-aware effective model routing semantics ([PR #3550](https://github.com/agentscope-ai/QwenPaw/pull/3550)).

## 4. Community Hot Topics
Community engagement is heavily skewed toward the new v1.1.4 features, particularly memory and UI issues:
*   **"Help Wanted: Open Tasks" ([Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291))**: 60 comments. Maintainers are actively soliciting community contributions for P0 to P2 tasks, indicating a healthy open-source pipeline.
*   **Volcano Engine Coding Plan Support ([Issue #3753](https://github.com/agentscope-ai/QwenPaw/issues/3753))**: 7 comments. Users are highly interested in native support for Volcano/ByteDance model endpoints using Anthropic-compatible protocols.
*   **Built-in Skill Update Workflow ([Issue #3672](https://github.com/agentscope-ai/QwenPaw/issues/3672))**: 4 comments. A deep-dive discussion on the pain points of identifying skill changes and handling broadcasts in the current architecture.
*   **Asynchronous Agent Communication ([Issue #2225](https://github.com/agentscope-ai/QwenPaw/issues/2225))**: 3 comments. Users working on complex stock-market analysis agents are frustrated by synchronous blocking, requesting callback/concurrent features for multi-agent orchestration.

## 5. Bugs & Stability
The transition to v1.1.4 has introduced several critical regressions that require immediate user attention:
1.  **Critical: v1.1.4 Desktop Client White Screen / Failure to Launch** - Multiple reports ([Issue #3815](https://github.com/agentscope-ai/QwenPaw/issues/3815), [Issue #3807](https://github.com/agentscope-ai/QwenPaw/issues/3807), [Issue #3805](https://github.com/agentscope-ai/QwenPaw/issues/3805)) confirm the desktop wrapper is crashing or showing blank screens on Windows, sometimes requiring deep manual workspace cleanup. 
2.  **High: v1.1.4 Memory Vector Model Config Wipe** - Docker users report that the new long-term memory vector model config is reset to empty upon container restart ([Issue #3817](https://github.com/agentscope-ai/QwenPaw/issues/3817)).
3.  **High: DeepSeek V4 Reasoning Context Loss** - Multi-turn conversations fail because the framework strips `reasoning_content` instead of mapping it correctly for subsequent API calls ([Issue #3782](https://github.com/agentscope-ai/QwenPaw/issues/3782)). *(Fix merged in [PR #3794](https://github.com/agentscope-ai/QwenPaw/pull/3794))*.
4.  **High: MCP Client TaskGroup Death** - Agent becomes unresponsive (zombie state) without throwing errors when MCP internal tasks fail ([Issue #3640](https://github.com/agentscope-ai/QwenPaw/issues/3640)).
5.  **Medium: Desktop Icon Highjacking** - Enabling MCP clients reassigns the macOS/Windows taskbar icon to Python instead of the app icon ([Issue #3808](https://github.com/agentscope-ai/QwenPaw/issues/3808), [Issue #3405](https://github.com/agentscope-ai/QwenPaw/issues/3405)).

## 6. Feature Requests & Roadmap Signals
Based on open issues and PR staging (like `v1.1.5b1`), the immediate roadmap appears focused on:
*   **Desktop Client Overhaul:** A first-time contributor PR aims to replace the current desktop architecture with **Tauri 2.x** ([PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)), which would inherently solve the current white-screen and Python-icon bugs.
*   **Workspace Sandboxing:** Users are requesting Claude Code-style sandboxing to restrict agent file access strictly to the workspace directory ([Issue #3814](https://github.com/agentscope-ai/QwenPaw/issues/3814)).
*   **UI/UX Enhancements:** High demand for markdown rendering of user inputs ([Issue #2975](https://github.com/agentscope-ai/QwenPaw/issues/2975)) and timestamps in the conversation history ([Issue #3774](https://github.com/agentscope-ai/QwenPaw/issues/3774), being addressed in [PR #3603](https://github.com/agentscope-ai/QwenPaw/pull/3603)).

## 7. User Feedback Summary
Users are actively pushing CoPaw into complex, multi-agent production environments, particularly using DingTalk and Feishu channels. 
*   **Pain Points:** Users are expressing frustration with environment stability, specifically the jump from v1.1.3 to v1.1.4 breaking basic desktop functionality. Furthermore, proxy handling on Windows CLI tools is causing 502 errors due to how `httpx` reads system registries ([Issue #3664](https://github.com/agentscope-ai/QwenPaw/issues/3664)). Privacy concerns were also raised regarding file paths being leaked in chat contexts.
*   **Satisfaction:** Despite the bugs, users are thrilled about the new memory refactoring and built-in skill capabilities. The maintainainer's quick response to the Defender False Positive flag in v1.1.3 ([Issue #3718](https://github.com/agentscope-ai/QwenPaw/issues/3718)) was well received by the community.

## 8. Backlog Watch
*   **Scope-Aware Routing ([PR #3550](https://github.com/agentscope-ai/QwenPaw/pull/3550)):** Open since April 17th, this foundational backend PR needs maintainer review to unblock further model routing features.
*   **Semantic Skill Routing ([PR #3117](https://github.com/agentscope-ai/QwenPaw/pull/3117)):** Open since April 8th with "need discussions" tag. This feature aims to reduce token consumption by using embeddings to filter skills, a vital optimization for agents with large toolsets.
*   **Windows HTTP Hanging ([Issue #3555](https://github.com/agentscope-ai/QwenPaw/issues/3555)):** A significant issue where the desktop app hangs indefinitely on Windows awaiting HTTP readiness. Still open and awaiting a definitive patch.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

Here is the project digest for ZeptoClaw based on the provided data for 2026-04-25.

### 1. Today's Overview
As of 2026-04-25, the ZeptoClaw project is experiencing a period of slow but focused architectural development. Activity over the last 24 hours is light, comprising exactly one open issue and one open pull request, with zero PR merges and zero new releases. Despite the low volume of interactions (no comments or reactions on recent items), the open work indicates a strategic push to expand communication channels and harden the continuous integration (CI) pipeline. The project's current health appears stable but heavily reliant on a small group of core contributors driving foundational updates. 

### 2. Releases
No new releases were recorded in the last 24 hours. The project's latest public distribution remains unchanged.

### 3. Project Progress
No PRs were merged or closed today, meaning no features or fixes officially advanced to the main branch in the last 24 hours. 
* **Active Work:** The open PR [#544](https://github.com/qhkm/zeptoclaw/pull/544) "[codex] expand CI coverage for optional integration features" is currently under review. If merged, it will successfully close the related Issue #545. This PR is crucial for project maintenance, as it broadens the CI feature-matrix to include optional compilation paths (`channel-email`, `google`, `provider-vertex`, `whatsapp-web`) while introducing minor compatibility fixes to ensure the build passes cleanly.

### 4. Community Hot Topics
Community engagement metrics (comments and reactions) are currently at zero for today's active items, suggesting no widespread community debate is occurring around these specific tickets. However, the open tickets highlight key integration themes:
* **Enterprise Communication Expansion:** Issue [#546](https://github.com/qhkm/zeptoclaw/issues/546) requests native Feishu (Lark) integration. The underlying need is for reliable, long-lived connections to an enterprise messaging platform, routing inbound messages to a supervised local subprocess worker (Nanodio) rather than embedding it in-process.
* **Channel Reliability:** PR [#546](https://github.com/qhkm/zeptoclaw/pull/544) and PR [#546](https://github.com/qhkm/zeptoclaw/issues/545) (referenced by the open PR) show that maintainers are actively working to ensure that diverse communication channels (Email, WhatsApp Web) and cloud providers (Vertex) compile without breaking the core application.

### 5. Bugs & Stability
* **Low Severity (CI Compatibility):** The open PR [#544](https://github.com/qhkm/zeptoclaw/pull/544) explicitly mentions including "two small compatibility fixes that were already..." required to make the new CI integration matrix pass cleanly. While the specific bugs aren't detailed in the summary, they represent minor compile-time or dependency conflicts within optional integration paths.
* **No Critical Regressions:** No user-facing crashes, runtime bugs, or critical regressions were reported in the issues or PRs updated within the last 24 hours.

### 6. Feature Requests & Roadmap Signals
* **Feishu/Lark Native Integration:** The primary feature request is found in Issue [#546](https://github.com/qhkm/zeptoclaw/issues/546). The user (CangWolf17) specifically requests implementing a V1 local host path for Nanodio using the native Lark channel with `feishu=true`. 
* **Architectural Decoupling:** Issue [#546](https://github.com/qhkm/zeptoclaw/issues/546)'s request to forward inbound messages to a "supervised local subprocess worker instead of embedding Nanodio in-process" signals a roadmap movement toward better process isolation and architectural modularity.
* **Next Version Predictions:** Given the active PR [#544](https://github.com/qhkm/zeptoclaw/pull/544) expanding CI coverage for email and WhatsApp Web, it is highly likely the next minor release will feature robust support for these channels alongside the potential introduction of the Feishu integration.

### 7. User Feedback Summary
Direct user feedback (pain points, satisfaction, or specific use-case discussions) is absent from the last 24 hours of data, as the open issue lacks comments. However, based on the author of Issue #546, we can infer that advanced users are looking for robust, out-of-process execution models to isolate workloads, suggesting that the current in-process execution model may be limiting resource isolation or stability for specific enterprise use cases.

### 8. Backlog Watch
* **PR [#544](https://github.com/qhkm/zeptoclaw/pull/544) (Open since 2026-04-23):** Needs maintainer attention for review and merging. It is actively expanding CI coverage and carries the `codex` tag. Because it contains necessary compatibility fixes, delaying this PR could bottleneck other contributors working on Vertex, Google, or WhatsApp integrations.
* **Issue [#546](https://github.com/qhkm/zeptoclaw/issues/546) (Open since 2026-04-24):** Awaiting maintainer triage. Because it involves a significant architectural addition (Nanodio subprocess worker routing), it requires initial scoping or an approved design RFC before community development can likely proceed.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest: 2026-04-25

## 1. Today's Overview
Today, the EasyClaw project (gaoyangz77/easyclaw) exhibits **minimal daily development activity**, with zero new or updated Issues and Pull Requests within the last 24 hours. The repository is currently in a maintenance phase, showing no signs of active feature development or bug-fixing efforts from contributors today. However, the project did publish a new release, indicating that maintainers are actively packaging and distributing the software. Overall project health appears stable but dormant for the day, with current efforts seemingly focused on distribution and user onboarding rather than core code iteration. 

## 2. Releases
A new version was published today:
*   **Release:** [v1.8.9: RivonClaw v1.8.9](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.9)
    *   *Release Notes:* The primary focus of this release's documentation is addressing a critical installation blocker for macOS users. The update provides detailed instructions on bypassing the macOS Gatekeeper error ("'RivonClaw' is damaged and can't be opened") for unsigned applications. 
    *   *Migration Notes:* No breaking code changes were documented. However, new macOS users or those updating will need to execute specific terminal commands to bypass Apple's security quarantines before the application can run successfully.

## 3. Project Progress
There was **no visible project progress** via GitHub Issues or Pull Requests today. Zero PRs were merged or closed, and zero Issues were resolved. The only progression was the publication of the v1.8.9 package, suggesting that yesterday's or prior days' developments were formally packaged for release today. 

## 4. Community Hot Topics
There are **no active community hot topics** for today. With zero open, closed, or active Issues and Pull Requests in the last 24 hours, community engagement on the GitHub repository is completely silent for the day. Any current user discussions are likely happening off-platform (e.g., on Discord, WeChat, or other forums).

## 5. Bugs & Stability
*   **No new bugs reported today:** The tracker shows 0 new bug reports in the last 24 hours. 
*   *Contextual Note:* While not raised as a formal GitHub Issue today, the release notes for v1.8.9 highlight a standing stability/friction point: macOS users consistently experiencing false-positive "damaged file" errors due to missing Apple Developer signatures. This remains a usability blocker rather than a core application crash, but it is actively being mitigated via documentation rather than a code fix.

## 6. Feature Requests & Roadmap Signals
There are **no new feature requests** to report today. With an empty Issue tracker for the day, there are no clear signals regarding the immediate next steps or the roadmap for v1.9.0. Maintainers are encouraged to use this downtime to publish an updated public roadmap.

## 7. User Feedback Summary
Direct user feedback via GitHub is unavailable for April 25th due to the lack of activity. However, indirect feedback can be inferred from the v1.8.9 release notes: users downloading the application on macOS are encountering significant friction with system security prompts. The addition of bilingual (English and Chinese) troubleshooting instructions directly in the release notes suggests a highly proactive approach by the maintainers to address this recurring user pain point. 

## 8. Backlog Watch
There are **no items to flag** for backlog watch today. The repository saw a completely clean slate of Issue and PR updates over the last 24 hours. Maintainers may want to review older, stagnant issues in the coming days to ensure long-term community requests are not being lost.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-25

## 1. Today's Overview
ZeroClaw is experiencing a period of high development velocity and active community engagement, as evidenced by 50 issues and 50 pull requests updated in the last 24 hours. The project is currently stabilizing its v0.6.9 release, with no new versions pushed today, allowing the team and contributors to focus on triaging bugs and advancing feature Requests for Comments (RFCs). The maintainers are aggressively reviewing and merging community contributions, having closed 26 PRs while managing 24 open ones. Key themes for the day include hardening the shell sandbox/security policies, improving provider compatibility, and laying the architectural groundwork for highly anticipated multi-agent routing capabilities.

## 2. Releases
No new releases were published today. The project is currently focused on stabilizing the `v0.6.9` release and triaging incoming regressions and bugs associated with it.

## 3. Project Progress
The day saw a massive throughput in PR merges, indicating highly active maintenance. Key advancements include:

*   **Core Configuration & Ergonomics:** Several highly requested configuration PRs were merged or updated. Notably, PR [#6085](https://github.com/zeroclaw-labs/zeroclaw/pull/6085) (defaulting `session_ttl_hours` to 168h to prevent unbounded memory growth) and PR [#6086](https://github.com/zeroclaw-labs/zeroclaw/pull/6086) (adding `allowed_path` aliases for better UX) are making headway.
*   **Desktop & UI:** The Tauri desktop app has successfully transitioned from a full dashboard wrapper into a lightweight menu bar chat agent ([PR #5265](https://github.com/zeroclaw-labs/zeroclaw/pull/5265)), featuring voice/image uploads.
*   **Channel Improvements:** Telegram media handling is getting a major fix by batching media-group images into a single agent request ([PR #6088](https://github.com/zeroclaw-labs/zeroclaw/pull/6088)), and an email dispatch bug in cron jobs was resolved ([PR #5547](https://github.com/zeroclaw-labs/zeroclaw/pull/5547)).
*   **Observability:** Advanced telemetry was added to map tool executions to OpenTelemetry spans ([PR #6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009)).

## 4. Community Hot Topics
Community discussions are heavily centered around multi-agent architectures and channel/provider integrations:

*   **Multi-Agent RFC & Tracker:** The most actively discussed architectural shift is the "Multi-agent UX flow" ([Issue #5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890)) and its corresponding v1 tracker ([Issue #5891](https://github.com/zeroclaw-labs/zeroclaw/issues/5891)). Users want isolated workspaces and multiple channel accounts routed to specific agents in one gateway.
*   **New Channel Requests:** Users are actively requesting integrations for Chinese enterprise and social platforms, notably WeCom/WxWork ([Issue #3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090)) and Napcat/OneBot ([Issue #2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503)). Additionally, there is a push to recover a reverted but functional WeChat iLink channel ([Issue #5259](https://github.com/zeroclaw-labs/zeroclaw/issues/5259)).
*   **Hallucination Detection:** An RFC for adding cryptographic HMAC-SHA256 receipts to tool executions ([Issue #4830](https://github.com/zeroclaw-labs/zeroclaw/issues/4830)) sparked deep discussion on verifiable AI agent behavior.

## 5. Bugs & Stability
Several high-severity bugs have been reported, particularly concerning the security sandbox and provider handling:

*   **High Risk - Sandbox/Shell Blocks Git Commands:** A security policy is inadvertently lowercasing arguments, conflating `git -C <path>` with `git -c`, blocking legitimate operations ([Issue #5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809)).
*   **High Risk - v0.6.9 Sandbox Breaking Python Skills:** A default shell sandbox configuration is blocking realistic Python skill patterns, halting external skill development ([Issue #5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722)). 
*   **S1 - Provider Blocks:** Z.AI provider (`zai-cn`) returns 1214 invalid messages when using `glm-5-turbo` ([Issue #5636](https://github.com/zeroclaw-labs/zeroclaw/issues/5636)), and Bedrock provider sends API keys incorrectly causing 403s ([Issue #5289](https://github.com/zeroclaw-labs/zeroclaw/issues/5289)). (Fix for Gemini/OpenRouter tool-call compatibility is incoming via [PR #5975](https://github.com/zeroclaw-labs/zeroclaw/pull/5975)).
*   **S2 - Duplicate Assistant Messages:** When models return narration alongside tool calls, duplicate messages are sent ([Issue #5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584)).

## 6. Feature Requests & Roadmap Signals
Based on active issues and PRs, the roadmap for v0.7.0 is heavily signaling:

*   **Multi-Agent Routing:** ([Issue #2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767), +8 thumbs up) is actively being tracked and architected.
*   **Advanced LLM Fallbacks:** Users want provider-scoped model fallback chains rather than global fallbacks ([Issue #4647](https://github.com/zeroclaw-labs/zeroclaw/issues/4647)).
*   **Configurable Timeouts:** Hardcoded provider timeouts are being refactored into configurable parameters ([Issue #5752](https://github.com/zeroclaw-labs/zeroclaw/issues/5752)).
*   **i18n Overhaul:** A major RFC to replace TOML internationalization with Mozilla Fluent is under review ([PR #5788](https://github.com/zeroclaw-labs/zeroclaw/pull/5788)).

## 7. User Feedback Summary
Users are generally enthusiastic about the project's expanding capabilities but are experiencing growing pains related to edge cases in configuration and local model timeouts.

*   **Pain Points:** Local model users (e.g., Ollama) are frustrated by hardcoded 60-second summarization timeouts, which cause total context loss when running smaller models like Gemma ([Issue #5556](https://github.com/zeroclaw-labs/zeroclaw/issues/5556)). 
*   **Use Cases:** Developers are actively building sophisticated integrations on top of ZeroClaw, such as FINOS CDM 5.x-compliant portfolio analysis skills.
*   **Configuration Dissatisfaction:** Users reported silent failures due to using intuitive but incorrect config keys (e.g., `allowed_path` instead of `allowed_roots`), a problem now actively being addressed by maintainers.

## 8. Backlog Watch
The following important items require maintainer attention or resolution:

*   **Supervised Mode in Non-CLI Channels:** [Issue #2324](https://github.com/zeroclaw-labs/zeroclaw/issues/2324) remains open. Tools configured in `always_ask` are auto-denied on Telegram/WhatsApp instead of prompting the user, effectively breaking supervised autonomy on mobile.
*   **Memory Recall Wildcards:** [Issue #5170](https://github.com/zeroclaw-labs/zeroclaw/issues/5170) reports that `memory_recall` with `query="*"` fails entirely due to FTS5/LIKE issues, limiting memory debugging.
*   **Agent Awareness of Cron:** A minor but annoying UX bug where the ZeroClaw agent is unaware it can schedule `cron` jobs itself ([Issue #5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)).

</details>