# OpenClaw Ecosystem Digest 2026-04-30

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-29 22:15 UTC

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

# OpenClaw Project Digest — 2026-04-30

## 1. Today's Overview
OpenClaw is experiencing massive community engagement, with 500 issues and 500 pull requests updated in the last 24 hours alone. The vast majority of issues remain open (478 open vs. 22 closed), indicating that the maintainers are struggling to keep pace with community bug reports and feature requests. Meanwhile, PR throughput is healthier (115 merged/closed), suggesting active development, largely driven by automated bots (clawsweeper) and dedicated community contributors. The release of `v2026.4.27` introduces critical infrastructure updates like Docker GPU passthrough, but the high volume of stability regressions across multi-platform environments (Windows, Node 24, Telegram) signals growing pains as the agent framework scales.

## 2. Releases

### openclaw `v2026.4.27`
The sole release of the day focuses on sandbox capabilities and iOS gateway improvements.
* **New Features:** Added opt-in `sandbox.docker.gpus` passthrough. This allows local GPU workloads to run inside sandboxed agents if the host Docker runtime supports `--gpus`. This is a critical enhancement for AI agents requiring local accelerated compute.
* **Fixes:** Resolves Issue [#57976](https://github.com/openclaw/openclaw/issues/57976) and carries forward PR [#58124](https://github.com/openclaw/openclaw/pull/58124).
* **Breaking Changes/Migration Notes:** None explicitly listed, though users leveraging Docker sandboxes will need to manually opt-in to the new GPU configuration.

## 3. Project Progress
Significant progress was made today on fixing platform-specific edge cases, cleaning up tech debt, and expanding the SDK surface.

* **SDK and Plugin Architecture:** The largest PR of the day, [PR #74610](https://github.com/openclaw/openclaw/pull/74610), introduces the public `@openclaw/sdk` package, enabling developers to programmatically manage Gateway-backed agent runs, sessions, and events.
* **Agent Reliability:** Several PRs landed to improve agent stability. [PR #74390](https://github.com/openclaw/openclaw/pull/74390) prevents wasteful preflight compaction locks when users run `/new` or `/reset`, and [PR #74340](https://github.com/openclaw/openclaw/pull/74340) fixes a bug where raw tool output was mistakenly treated as a completion payload for subagents.
* **Multi-channel Messaging:** Bugs in Telegram, Feishu, and Matrix were addressed. Notable merges include [PR #73735](https://github.com/openclaw/openclaw/pull/73735) (fail-soft on benign Telegram delete message errors) and [PR #73972](https://github.com/openclaw/openclaw/pull/73972) (fixing Feishu P2P direct message thread routing).
* **Security and Media:** [PR #67509](https://github.com/openclaw/openclaw/pull/67509) added a root guard to the CLI to prevent state corruption when run as root (e.g., in DigitalOcean droplets). Additionally, [PR #69312](https://github.com/openclaw/openclaw/pull/69312) fixed an issue where `MEDIA:` directives were incorrectly extracted from indented code blocks.

## 4. Community Hot Topics
The community is highly focused on multi-platform parity, context management, and ecosystem scaling.

* **Desktop Apps Demand ([Issue #75](https://github.com/openclaw/openclaw/issues/75), 101 comments, 73 👍):** The oldest and most active issue is a plea for native Linux and Windows Clawdbot Apps. Users want feature parity with the macOS app, highlighting OpenClaw's transition from a developer tool to a ubiquitous desktop assistant.
* **Memory and Context Reliability:** [Issue #12590](https://github.com/openclaw/openclaw/issues/12590) (19 comments) reports that `memoryFlush` only fires on every other compaction cycle, while [Issue #43747](https://github.com/openclaw/openclaw/issues/43747) (8 comments) complains that memory management is "in chaos," behaving inconsistently across different users.
* **ClawHub and Skills Ecosystem ([Issue #50090](https://github.com/openclaw/openclaw/issues/50090), 13 comments):** Community members are discussing the gap between the promise of ClawHub (a living ecosystem of skills) and reality. Users are struggling with skill discoverability and loading ([Issue #43735](https://github.com/openclaw/openclaw/issues/43735)).
* **Direct Exec Mode for Crons ([Issue #18160](https://github.com/openclaw/openclaw/issues/18160), 9 comments, 9 👍):** Users are frustrated that cron jobs require a full `agentTurn` (LLM interpretation) even for simple commands, causing unnecessary latency, API costs, and timeouts.

## 5. Bugs & Stability
OpenClaw is facing notable stability challenges on Windows and with long-running gateway processes.

**Critical Regressions & Performance:**
* **Native Memory Leak ([Issue #45438](https://github.com/openclaw/openclaw/issues/45438), 3 👍):** The Gateway leaks ~1GB/min of native memory due to `structuredClone` in the session store cache. *Fix Status: No PR linked yet.*
* **Gateway Runtime Degradation on Windows ([Issue #73323](https://github.com/openclaw/openclaw/issues/73323), 13 comments):** Users on Windows 11 + Node 24 are experiencing chronic 60s timeouts for pricing fetches, Telegram polling stalls, and slow RPC.
* **Inter-agent Communication Failure ([Issue #52875](https://github.com/openclaw/openclaw/issues/52875), 20 comments):** A recent update broke inter-agent communication; `session_list` now only returns crons, preventing the main agent from contacting sub-agents.

**Platform / Channel Bugs:**
* **Telegram Delivery Loss ([Issue #50040](https://github.com/openclaw/openclaw/issues/50040)):** Telegram polling stalls are causing silent outbound message loss.
* **Windows Path Issues ([Issue #39038](https://github.com/openclaw/openclaw/issues/39038)):** OpenClaw nodes on Windows 11 24H2 hang on startup after displaying PATH info. ([PR #73798](https://github.com/openclaw/openclaw/pull/73798) addresses a related media path issue).
* **Discord Leaks ([Issue #44905](https://github.com/openclaw/openclaw/issues/44905)):** Internal LLM tool-call artifacts (e.g., `NO_REPLY`, raw JSON) are occasionally leaking into public Discord channels.

## 6. Feature Requests & Roadmap Signals
Based on user demand and recent PRs, the immediate roadmap appears focused on context optimization, agent autonomy, and developer experience.

* **Tiered Bootstrap Loading ([Issue #22438](https://github.com/openclaw/openclaw/issues/22438)):** Users want to load bootstrap files based on context tier (e.g., cron jobs don't get all files) to save tokens.
* **Pre-response Enforcement Hooks ([Issue #13583](https://github.com/openclaw/openclaw/issues/13583)):** High-stakes users want mechanical "hard gates" preventing agents from responding before mandatory tool calls are executed.
* **Native File Transfer Plugin ([PR #74134](https://github.com/openclaw/openclaw/pull/74134)):** A new bundled plugin allowing agents to bypass bash limits and read/write binary files directly on paired nodes. This is likely to drop in the next release.
* **Session Snapshots ([Issue #13700](https://github.com/openclaw/openclaw/issues/13700)):** A highly requested feature for saving/loading context checkpoints to allow branching conversations and A/B testing without losing progress.
* **ClawHub Security Scanning ([Issue #45031](https://github.com/openclaw/openclaw/issues/45031)):** Automated security scanning for skills installed via `clawhub` to prevent supply-chain attacks.

## 7. User Feedback Summary
User sentiment is a mix of excitement for the project's capabilities and deep frustration with operational stability and documentation drift.

* **Pain Points:**
    * **Windows is a Second-Class Citizen:** Multiple bugs ([#40540](https://github.com/openclaw/openclaw/issues/40540), [#73323](https://github.com/openclaw/openclaw/issues/73323), [#39038](https://github.com/openclaw/openclaw/issues/39038)) indicate that Windows users face update failures, path issues, and runtime degradation.
    * **Docs vs. Reality:** Users are frustrated when features documented in live docs fail to work in the latest stable release ([Issue #48920](https://github.com/openclaw/openclaw/issues/48920)).
    * **Cron Reliability:** Crons are currently viewed as unreliable. They timeout easily ([Issue #18160](https://github.com/openclaw/openclaw/issues/18160)) and use stale timestamps ([Issue #44993](https://github.com/openclaw/openclaw/issues/44993)).
* **Satisfaction:** Users love the multi-channel integration (Telegram, Discord, iMessage, Feishu) and are highly enthusiastic about the expanding Skills/ClawHub ecosystem. The project's ambition is clearly resonating with power users looking to build persistent, autonomous agents.

## 8. Backlog Watch
The following high-impact items require immediate maintainer attention:

* **Infrastructure:** The memory leak in the session store ([Issue #45438](https://github.com/openclaw/openclaw/issues/45438)) is a ticking time bomb for self-hosters.
* **Open, High-Activity PRs:** Crucial fixes like the Hyprland/Wayland screenshot fallback ([PR #71940](https://github.com/openclaw/openclaw/pull/71940)) and the shared workspace deletion protection ([PR #53809](https://github.com/openclaw/openclaw/pull/53809)) have been open for days and need review.
* **Long-Standing Core Bugs:**
    * Subagent completion states are unreliable and sometimes lost ([Issue #44925](https://github.com/openclaw/openclaw/issues/44925)).
    * `apply_patch` is incorrectly stripped by agent policy pipelines ([Issue #45269](https://github.com/openclaw/openclaw/issues/45269)).
    * Steer queue mode silently degrades, ignoring mid-turn injections ([Issue #50880](https://github.com/openclaw/openclaw/issues/50880)).

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report for the AI agent and personal AI assistant open-source ecosystem as of April 30, 2026.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is experiencing a phase of hyper-active iteration, driven by the need to integrate agentic workflows into everyday multi-platform communication channels. Projects are rapidly evolving from simple chatbots into complex, autonomous orchestrators capable of multi-modal communication, memory management, and tool-calling. However, this breakneck velocity is exposing severe growing pains: memory leaks, context window mismanagement, cross-platform synchronization bugs, and security vulnerabilities are rampant across the board. The landscape is currently splitting into two distinct tiers: comprehensive, resource-heavy frameworks aiming for universal platform coverage, and lightweight, edge-optimized agents focused on highly specific hardware or localized use cases.

### 2. Activity Comparison
*Health Score (1-10) is estimated based on issue triage rate, PR merge velocity, stability reports, and maintainer responsiveness.*

| Project | Issues (Updated) | PRs (Updated/Merged) | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (478 open) | 500 (~115 merged) | `v2026.4.27` | **6/10** (Massive scale, but struggling with triage & regressions) |
| **IronClaw** | 28 | 50 (35 merged) | `v0.27.0` | **8/10** (Highly coordinated arch overhaul, good PR strategy) |
| **CoPaw** | 30 | 22 (10 merged) | `v1.1.5` | **8/10** (Strong community engagement, rapid patching) |
| **NanoBot** | 12 (8 closed) | 39 (26 merged) | `v0.1.5.post3` | **9/10** (High velocity, excellent issue resolution) |
| **NanoClaw** | 3 | 50 (21 merged) | None | **8/10** (Focused internal sprint, strong stability focus) |
| **LobsterAI** | 28 open PRs | Multiple merged | `2026.4.29` | **7/10** (Active dev, but stale critical security PRs) |
| **Hermes Agent**| 50 (41 open) | 50 (12 merged) | None | **6/10** (CI instability, critical pipeline bugs) |
| **ZeroClaw** | 50 (21 closed) | 50 (0 merged) | None | **5/10** (Code freeze, massive review backlog) |
| **Moltis** | 8 | 7 merged | `20260429.02` | **9/10** (Agile, swift security patching) |
| **PicoClaw** | 11 | 20 (5 merged) | Nightly | **8/10** (Healthy edge/IoT focus) |
| **NullClaw** | 2 | 0 | None | **5/10** (Quiet, documentation/triage phase) |
| **TinyClaw / ZeptoClaw**| 0 | 0 | None | **N/A** (Dormant) |

### 3. OpenClaw's Position
**Advantages vs Peers:** OpenClaw serves as the core reference implementation and boasts unparalleled ecosystem scale. With hundreds of issues and PRs updated daily, its community testing volume dwarfs most competitors. Its `@openclaw/sdk` and ClawHub ecosystem provide the most mature framework for third-party developer integrations.
**Technical Approach Differences:** Unlike newer projects that are cleanly decoupling UI from runtime (e.g., IronClaw's "Reborn" architecture), OpenClaw appears to be carrying significant legacy technical debt as it patches a monolithic architecture. It relies heavily on automated bots (`clawsweeper`) to manage PR throughput, contrasting with the highly manual, grouped-PR strategies used by IronClaw's core team.
**Community Size Comparison:** OpenClaw's community is the largest but is currently buckling under its own weight. While NanoBot and CoPaw are rapidly closing bugs to achieve stability, OpenClaw is facing a backlog of 478 open issues, indicating a disconnect between the core maintainers' capacity and the community's demands, leading to user frustration regarding Windows parity and memory leaks.

### 4. Shared Technical Focus Areas
*   **Context Window Management (OpenClaw, NanoClaw, CoPaw, ZeroClaw):** As LLMs scale to 1M+ tokens (e.g., Opus 4.7), projects are racing to fix premature context compaction and "Lost in the Middle" degradation. Fine-grained control over compaction thresholds is becoming a standard requirement.
*   **Interoperability with DeepSeek Reasoning (CoPaw, PicoClaw):** Integrating "thinking" or "reasoning_content" from advanced models is breaking standard chat histories and API payloads, requiring urgent architectural patches across the ecosystem.
*   **Robust Sandbox/Security Boundaries (IronClaw, Moltis, OpenClaw, Hermes):** Securing agent execution is critical. Projects are heavily focused on preventing host escapes (e.g., Moltis applying Linux Landlock, OpenClaw fixing root guards) and mitigating indirect prompt injection across disparate user bases.
*   **Session & Memory Reliability (ZeroClaw, Hermes, NanoBot):** Isolating conversational context is a major hurdle. Projects are actively fixing cross-thread contamination in platforms like Discord and Feishu, and implementing atomic database writes to prevent memory corruption during crashes (LobsterAI, NanoBot).

### 5. Differentiation Analysis
*   **Architecture vs. Feature Bloat:** IronClaw differentiates itself through a rigorous architectural overhaul ("Reborn"), focusing on capability status vocabularies and clean separation. Conversely, OpenClaw and Hermes are prioritizing raw feature expansion (TUI improvements, multi-channel support), leading to more frequent pipeline regressions.
*   **Target Environments:** PicoClaw and NullClaw explicitly target low-resource, edge, and IoT environments (e.g., Raspberry Pi, MQTT integrations, local CPU/NPU via OpenVINO). In contrast, projects like LobsterAI, CoPaw, and NanoBot are heavily focused on enterprise integrations (Feishu, QQ, WeChat) and WebUI dashboarding.
*   **Voice and Telephony:** Moltis is uniquely pushing into telephony (Twilio integration) and deterministic voice personas, moving beyond the text/CLI standard of the broader ecosystem.

### 6. Community Momentum & Maturity
*   **Tier 1: Rapid Iteration & Maturity (NanoBot, CoPaw, Moltis, IronClaw):** These projects show the healthiest ratios of PR merges to opens, indicating strong maintainer responsiveness. IronClaw is managing a massive V2 transition without losing CI stability, while NanoBot and CoPaw are efficiently closing community-reported bugs.
*   **Tier 2: High Velocity, High Friction (OpenClaw, Hermes):** These projects have massive community momentum but are experiencing severe growing pains. CI instability and critical path bugs (e.g., tool-calling pipeline corruption in Hermes, native memory leaks in OpenClaw) are stalling progress.
*   **Tier 3: Stabilizing/Review Cycles (ZeroClaw, LobsterAI, NanoClaw):** These teams are currently in integration phases, characterized by code freezes or backlog clearing. NanoClaw is smoothing out "rough edges" from a v2 release, while ZeroClaw has a massive queue of unmerged PRs awaiting review.
*   **Tier 4: Stagnant/Niche (NullClaw, PicoClaw, ZeptoClaw, TinyClaw):** Either experiencing low activity or highly focused, incremental updates targeting very specific hardware niches.

### 7. Trend Signals
*   **The "Deterministic vs. Probabilistic" Divide:** Users are increasingly frustrated by LLM inference overhead for simple tasks. ZeroClaw users want pre-LLM shortcuts for known intents, and OpenClaw users want direct execution for crons. *Value for devs:* Develop hybrid architectures that bypass LLM inference for deterministic API calls and strict cron jobs to reduce latency and API costs.
*   **Multimodal and CJK UX Fatigue:** Users expect consumer-grade UI/UX, but open-source projects are failing at language rendering. Hermes is struggling with CJK text ghosting in TUI, while CoPaw had to patch CJK memory tokenization. *Value for devs:* Standardize robust i18n and multilingual tokenization in memory engines from day one.
*   **Security and State Integrity over Features:** The prevalence of high-severity bugs (SQLite non-atomic writes in LobsterAI, WeChat token drops in NanoBot, context spillage in ZeroClaw) highlights that state persistence is the most critical challenge in agentic AI. *Value for devs:* Prioritize atomic operations and strict session boundaries over building new tool integrations.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-30

## 1. Today's Overview
NanoBot demonstrates exceptionally high development velocity today, with **39 pull requests** updated (26 merged/closed) and **12 issues** processed (8 closed) in the last 24 hours. The project released **v0.1.5.post3**, a significant update focusing on conversation thread isolation across messaging platforms. Activity is heavily concentrated in channel integrations (WeChat, Feishu, Matrix), agent workflow enhancements, and developer tooling. The high merge rate (~67%) indicates an active and responsive maintainer team driving toward platform maturity.

## 2. Releases
**[v0.1.5.post3](https://github.com/HKUDS/nanobot/releases/tag/v0.1.5.post3)** was released today.
*   **Key Changes:** 57 PRs were merged, introducing 12 new contributors. The core theme is "conversations becoming first-class citizens." Feishu group topics now get isolated sessions, preventing context cross-contamination in busy group chats.
*   **Migration Notes:** Users running group chats on Feishu should be aware that session isolation will change how the bot remembers context within specific topic threads.

## 3. Project Progress
A massive amount of code was merged today, significantly advancing the project's capabilities:
*   **Per-Channel Configurations:** [PR #3487](https://github.com/HKUDS/nanobot/pull/3487) was merged, allowing `sendProgress` and `sendToolHints` to be configured on a per-channel basis rather than just globally.
*   **Data Integrity:** [PR #3508](https://github.com/HKUDS/nanobot/pull/3508) implemented atomic writes (`temp file` + `os.replace()`) for `history.jsonl` to prevent memory corruption during crashes or power losses.
*   **Tooling & Infrastructure:** 
    *   [PR #3505](https://github.com/HKUDS/nanobot/pull/3505) added "Olostep" as a supported web search provider.
    *   [PR #3457](https://github.com/HKUDS/nanobot/pull/3457) introduced a `create-instance` built-in skill, allowing users to spawn new bot instances conversationally.
*   **Bug Fixes:** [PR #3510](https://github.com/HKUDS/nanobot/pull/3510) fixed an issue where the Matrix channel failed to initialize on Windows due to invalid file path characters (`:`).

## 4. Community Hot Topics
*   **Custom Provider Configuration ([Issue #3095](https://github.com/HKUDS/nanobot/issues/3095)):** With 6 comments, this closed issue highlights user demand for pointing NanoBot to custom/third-party endpoints that use the Anthropic API schema. This signals a strong community need for flexible LLM backend routing.
*   **Minimax Provider Regression ([Issue #2590](https://github.com/HKUDS/nanobot/issues/2590)):** An open issue with 5 comments regarding the built-in MiniMax provider breaking after an upgrade. Users are struggling with `apiBase` configurations.
*   **Gateway Management ([PR #3538](https://github.com/HKUDS/nanobot/pull/3538)):** An open PR adding `start`, `stop`, `restart`, and `status` commands to the NanoBot gateway, indicating a push toward better production deployment lifecycle management.
*   **Multi-Account WeChat ([PR #3542](https://github.com/HKUDS/nanobot/pull/3542)):** A new open PR attempting to refactor the WeChat channel to support multiple personal accounts under a single NanoBot instance—a highly requested feature for heavy automation users.

## 5. Bugs & Stability
*   **Critical - Group Chat Thread Override ([Issue #3533](https://github.com/HKUDS/nanobot/issues/3533)):** In `feishu.py`, group chats force `reply_in_thread=True`, ignoring user configs. *No fix PR is linked yet.*
*   **High - WeChat Cron Job Silent Failures ([PR #3517](https://github.com/HKUDS/nanobot/pull/3517)):** Scheduled messages via WeChat are dropped due to a missing `context_token`. A fix PR is currently open and awaiting merge.
*   **Medium - Local Model Hallucinations ([Issue #1068](https://github.com/HKUDS/nanobot/issues/1068)):** An ongoing stale issue where local models begin to loop or hallucinate tool calls after functioning correctly for a while.
*   **Low - Web Fetch Formatting ([PR #3528](https://github.com/HKUDS/nanobot/pull/3528)):** The WebFetch tool fails if the LLM wraps URLs in markdown backticks. An open PR sanitizes these inputs.

## 6. Feature Requests & Roadmap Signals
*   **Centralized Hooks System ([PR #3541](https://github.com/HKUDS/nanobot/pull/3541)):** A proposed `HookCenter` allowing external plugins to attach via Python `entry_points`. If merged, this will transform NanoBot into a highly extensible platform.
*   **Xiaomi Model Support ([Issue #3518](https://github.com/HKUDS/nanobot/issues/3518)):** Users are requesting native integration for Xiaomi's LLMs, showing expanding interest in regional AI models.
*   **Subagent Iteration Limits ([PR #3532](https://github.com/HKUDS/nanobot/pull/3532)):** An open PR fixing hardcoded iteration limits for sub-agents. This suggests the roadmap includes more complex, multi-agent orchestration.
*   **AI Contributor Guidelines ([PR #3534](https://github.com/HKUDS/nanobot/pull/3534)):** Addition of `CLAUDE.md` to help AI coding assistants contribute to the repo, signaling the team is embracing AI-assisted open-source development.

## 7. User Feedback Summary
Users are enthusiastic about the project's rapid evolution but express frustration with **provider configuration flexibility** (specifically routing custom API endpoints) and **regressions in channel providers** (like MiniMax). The thread isolation feature in the new release directly addresses user desires for cleaner group chat interactions. The push for features like multi-account WeChat and gateway management commands indicates that a significant portion of the user base is deploying NanoBot in production or multi-tenant environments.

## 8. Backlog Watch
*   **Cron Job Connection Pool Exhaustion ([Issue #1099](https://github.com/HKUDS/nanobot/issues/1099)):** Created in February and still open, this issue reports connection pool filling up during Telegram cron jobs (👍 2). Requires maintainer attention for the next release.
*   **Agent Incessant Questioning ([Issue #877](https://github.com/HKUDS/nanobot/issues/877)):** A user complains that an unreleased version made the agent "ask too many questions" and become incapable. A deeper review of agent planning prompts is needed here.
*   **WebFetch Privacy Concern ([Issue #2341](https://github.com/HKUDS/nanobot/issues/2341)):** An issue noting that `WebFetchTool` proxies all URLs through `jina.ai` by default, regardless of API key settings. This poses a potential privacy/data leak risk for enterprise users and needs to be addressed.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-30

## 1. Today's Overview
The Hermes Agent project is currently experiencing very high community engagement, with 50 issues and 50 pull requests updated in the last 24 hours. The open-source contributor base is actively expanding the agent's capabilities while simultaneously stress-testing its existing infrastructure across diverse platforms (WhatsApp, Slack, Discord, WeChat, Feishu, Telegram, and Nostr). Although there is a significant backlog of active issues (41 open) and PRs (38 open), maintainers are actively reviewing and merging community contributions. The lack of a new release today suggests the team is likely stabilizing the main branch—which has reportedly been experiencing CI failures—before cutting a new version. Overall, project health is robust, characterized by rapid iteration, active bug reporting, and a highly participatory open-source community.

## 2. Releases
There were **0 new releases** published today. 

## 3. Project Progress
Maintainers and contributors closed 12 pull requests today, focusing heavily on fixing CI stability, terminal UI (TUI) enhancements, and security patches:
*   **CI Stabilization:** PR [#17618](https://github.com/NousResearch/hermes-agent/pull/17618) fixed base test failures blocking the merge train, and PR [#17642](https://github.com/NousResearch/hermes-agent/pull/17642) recovered 38 failing tests on the main branch, restoring CI health.
*   **TUI Improvements:** Merged PRs include persisting global details mode sections ([#17638](https://github.com/NousResearch/hermes-agent/pull/17638)), rendering explicit prompt gaps ([#17626](https://github.com/NousResearch/hermes-agent/pull/17626)), and implementing automatic copying for mouse selections ([#17627](https://github.com/NousResearch/hermes-agent/pull/17627)).
*   **Security Fixes:** Advanced security patches were opened and updated for credential leaks in browser CDP URLs ([#6668](https://github.com/NousResearch/hermes-agent/pull/6668)), cross-user prompt injection prevention ([#6662](https://github.com/NousResearch/hermes-agent/pull/6662)), and thread-safe interactive approvals for concurrent ACP sessions ([#15653](https://github.com/NousResearch/hermes-agent/pull/15653)).

## 4. Community Hot Topics
The community is highly focused on interoperability, platform-specific bugs, and performance scaling:
*   **Token Overhead Optimization:** Issue [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) (👍 7) proposes a "Two-Pass Tool Injection" to reduce token overhead. Since Hermes injects full schemas for 50+ tools, local models struggle. This highlights the community's need for the agent to run efficiently on smaller, localized contexts.
*   **Unified Migration:** Issue [#6078](https://github.com/NousResearch/hermes-agent/issues/6078) (👍 2, 5 comments) advocates for a single command to migrate Hermes setups across OS environments. Users currently juggle multiple fragmented commands, indicating a strong need for better multi-device synchronization.
*   **Platform Context Loss:** A highly discussed topic is context loss in gateway platforms. Issue [#6708](https://github.com/NousResearch/hermes-agent/issues/6708) (👍 2) notes that the Discord bot loses thread history on first mention, while [#6731](https://github.com/NousResearch/hermes-agent/issues/6731) highlights Feishu ignoring custom `SOUL.md` identities. Users expect seamless context and identity retention across all chat platforms.
*   **Markdown Rendering Conflicts:** Issue [#17641](https://github.com/NousResearch/hermes-agent/issues/17641) (3 comments) reveals an ironic bug where the WhatsApp prompt tells the AI not to use Markdown, but the underlying adapter auto-converts it anyway.

## 5. Bugs & Stability
Several high-priority bugs affecting data integrity, security, and core pipelines were reported today:
*   **P1 - Tool-Calling Pipeline Corruption:** Issue [#6841](https://github.com/NousResearch/hermes-agent/issues/6841) reports that malformed payloads are corrupting tool names and JSON arguments. This is a critical pipeline bug causing generic tool-call failures across the board.
*   **P1 - Patch Parser Data Loss:** Issue [#6831](https://github.com/NousResearch/hermes-agent/issues/6831) details 9 bugs in the V4A patch parser and fuzzy match logic, including silent data truncation for files over 2000 lines.
*   **P1 - Approval Gate Violations:** Issue [#17619](https://github.com/NousResearch/hermes-agent/issues/17619) reports an external behavioral audit showing Hermes violates its own safety approval gates 92% of the time. 
*   **P2 - CJK Rendering in TUI:** Issues [#17603](https://github.com/NousResearch/hermes-agent/issues/17603) and [#17602](https://github.com/NousResearch/hermes-agent/issues/17602) report severe character scattering and ghosting when rendering Chinese text in the TUI.
*   **P2 - WhatsApp Empty Responses:** Issue [#17284](https://github.com/NousResearch/hermes-agent/issues/17284) notes that the Copilot-acp provider returns empty responses when tool-call permissions are denied. *(No fix PRs currently mapped to the P1 pipeline bugs).*

## 6. Feature Requests & Roadmap Signals
Based on today's active PRs and Issues, upcoming releases will likely focus on enhanced model routing and CLI quality-of-life features:
*   **Model Picker Enhancements:** PR [#17634](https://github.com/NousResearch/hermes-agent/pull/17634) introduces fuzzy search and provider ranking to the `/model` command, streamlining the UX for users with extensive custom provider lists.
*   **Nostr NIP-17 Integration:** PR [#16769](https://github.com/NousResearch/hermes-agent/pull/16769) adds a decentralized private DM platform adapter, signaling a strong push towards privacy-centric communication platforms.
*   **Fast Mode for Telegram:** Issue [#7011](https://github.com/NousResearch/hermes-agent/issues/7011) requests Priority Processing routing for Telegram, aiming to bring feature parity between CLI and gateway users.
*   **Advanced Session Tracing:** Feature request [#6741](https://github.com/NousResearch/hermes-agent/issues/6741) advocates for structured session tracing with timestamps, pointing toward future observability and performance profiling tools.

## 7. User Feedback Summary
Users are heavily utilizing Hermes in multi-platform and containerized environments, but friction exists:
*   **Use Cases:** Users are deploying Hermes via WSL2 ([#17573](https://github.com/NousResearch/hermes-agent/issues/17573)), Docker ([#12534](https://github.com/NousResearch/hermes-agent/issues/12534)), and interacting via Discord, Slack, WeChat, and Feishu. The plugin ecosystem is actively used to bridge external memory systems ([#6715](https://github.com/NousResearch/hermes-agent/issues/6715)) and event buses ([#17640](https://github.com/NousResearch/hermes-agent/pull/17640)).
*   **Pain Points:** Users express frustration with environment variable forwarding in Docker sandboxes ([#12534](https://github.com/NousResearch/hermes-agent/issues/12534)) and provider routing syntax confusion ([#6242](https://github.com/NousResearch/hermes-agent/issues/6242), [#6669](https://github.com/NousResearch/hermes-agent/issues/6669)). Additionally, WSL2 users note poor audio routing for TTS, indicating OS-level hardware passthrough remains a challenge.

## 8. Backlog Watch
The following critical and high-impact items require immediate maintainer attention:
*   **Smart Model Router Bug:** Issue [#7024](https://github.com/NousResearch/hermes-agent/issues/7024) (Stale) highlights a missing `credential_pool` key in `_build_cheap_route()`, which quietly breaks fallback routing.
*   **Cron Worker Restart Flaw:** Issue [#6702](https://github.com/NousResearch/hermes-agent/issues/6702) reports that `hermes update` auto-restarts and kills in-process cron workers without an opt-out flag, disrupting scheduled tasks.
*   **Lockfile Desync:** PR [#17644](https://github.com/NousResearch/hermes-agent/pull/17644) points out that the main branch `uv.lock` has been out of sync with `pyproject.toml`, breaking clean checkouts for the `[google]` extra.
*   **macOS Matrix/E2EE Dependency Hell:** Issue [#6931](https://github.com/NousResearch/hermes-agent/issues/6931) notes that `hermes-agent[all]` fails to resolve on macOS arm64 / Python 3.11 due to conflicting HTTP dependencies, blocking Mac users from full installations.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-30

## 1. Today's Overview
PicoClaw is experiencing a highly active and dynamic development phase, evidenced by 11 updated issues and 20 pull requests in the past 24 hours. The merging of 5 PRs alongside a new nightly release indicates a healthy iteration velocity. Today's activity is heavily concentrated on expanding provider compatibility (specifically DeepSeek and local inference) and hardening channel integrations (DingTalk, Telegram, Feishu). The community is highly engaged in both submitting targeted bug reports and contributing feature-rich PRs, signaling a robust and collaborative open-source ecosystem.

## 2. Releases
*   **nightly:** `v0.2.7-nightly.20260429.db1bc6a1`
    *   **Type:** Automated Nightly Build
    *   **Notes:** Includes the latest merged changes from the main branch. As an automated build, it is intended for testing and may be unstable.
    *   **Full Changelog:** [v0.2.7...main](https://github.com/sipeed/picoclaw/compare/v0.2.7...main)

## 3. Project Progress
Significant headway was made today in merging crucial bug fixes and project infrastructure updates:
*   **TUI Deprecation Initiated:** PR [#2710](https://github.com/sipeed/picoclaw/pull/2710) was merged, officially beginning the migration of core features from the TUI (Terminal User Interface) to the CLI, aligning with the community RFC ([#2208](https://github.com/sipeed/picoclaw/issues/2208)).
*   **Docker Build Restored:** A critical infrastructure patch ([#2700](https://github.com/sipeed/picoclaw/pull/2700)) was merged, fixing a nonexistent Go version reference in the Dockerfile and restoring `make docker-build` functionality.
*   **WebUI Fixes:** Multiple patches ([#2711](https://github.com/sipeed/picoclaw/pull/2711), [#2709](https://github.com/sipeed/picoclaw/pull/2709)) addressing WebUI copy-button failures in non-secure (HTTP) contexts were closed/merged, culminating in the active PR [#2712](https://github.com/sipeed/picoclaw/pull/2712).
*   **Multi-user Context Tracking:** A highly structured PR ([#2715](https://github.com/sipeed/picoclaw/pull/2715)) is under active review to attribute history messages per sender in group chats (Discord, Telegram, Slack).

## 4. Community Hot Topics
*   **The Great TUI Debate ([#2208](https://github.com/sipeed/picoclaw/issues/2208)):** With 8 thumbs-up and active discussion, maintainers and users are aligning on the RFC to deprecate the TUI version. The underlying need is to reduce maintainer burden and focus resources on the rapidly advancing WebUI.
*   **DeepSeek V4 Thinking Mode ([#2706](https://github.com/sipeed/picoclaw/issues/2706)):** With 1 like and immediate community traction, users are actively discussing workarounds for DeepSeek's `reasoning_content` API requirements. The underlying need is seamless support for advanced reasoning models without sacrificing context history.
*   **Exec Tool Security Overreach ([#1042](https://github.com/sipeed/picoclaw/issues/1042)):** A long-standing issue (updated today) where the `guardCommand` safety feature blocks benign internet requests (like `curl wttr.in`) due to overly aggressive path regex parsing.

## 5. Bugs & Stability
*   **P1: DingTalk Gateway Crash ([#2704](https://github.com/sipeed/picoclaw/issues/2704)):** The DingTalk SDK causes a fatal panic `send on closed channel` during connection timeouts, completely stopping the PicoClaw gateway. *No fix PR is currently available.*
*   **P1: Session Context Loss ([#2621](https://github.com/sipeed/picoclaw/issues/2621)):** API timeouts cause the agent to lose its current session and create a duplicate default session, breaking the user experience.
*   **P2: DeepSeek Vision API 400 Errors ([#2718](https://github.com/sipeed/picoclaw/issues/2706)):** DeepSeek fails when image messages are persisted in history. *Fix PR exists: [#2717](https://github.com/sipeed/picoclaw/pull/2717) adds error detection for unsupported `image_url` variants.*
*   **P3: Telegram SVG Failure ([#2716](https://github.com/sipeed/picoclaw/issues/2716)):** The `inferMediaType` function incorrectly maps SVG files to `SendPhoto`, causing Telegram to reject them.

## 6. Feature Requests & Roadmap Signals
*   **Local/Edge Inference Expansion:** PR [#2703](https://github.com/sipeed/picoclaw/pull/2703) adds Intel OpenVINO Model Server support, signaling a strong push toward local CPU/GPU/NPU inference capabilities.
*   **IoT Integration:** PR [#2705](https://github.com/sipeed/picoclaw/pull/2705) introduces an MQTT channel, pointing to use cases in IoT and smart-home integrations.
*   **New Channel Support:** PR [#2719](https://github.com/sipeed/picoclaw/pull/2719) proposes a Slack Webhook output channel, expanding enterprise communication capabilities.
*   **Provider Flexibility:** Request for `.env` file support ([#2623](https://github.com/sipeed/picoclaw/issues/2623)) and requests to support new provider subscriptions like OpenCode ([#2671](https://github.com/sipeed/picoclaw/issues/2671)).

*Prediction for Next Release:* Expect merges for OpenVINO support ([#2703](https://github.com/sipeed/picoclaw/pull/2703)), DeepSeek reasoning persistence ([#2707](https://github.com/sipeed/picoclaw/pull/2707)), and the WebUI HTTP clipboard fix ([#2712](https://github.com/sipeed/picoclaw/pull/2712)).

## 7. User Feedback Summary
**Pain Points:** Users are experiencing friction with strict LLM providers (like DeepSeek) failing on multimodal data, and safety guards blocking legitimate CLI tools. Docker users recently faced broken builds due to upstream image issues. 

**Use Cases:** The project is being actively deployed on edge devices (e.g., Raspberry Pi Zero 2 running WhatsApp ([#2625](https://github.com/sipeed/picoclaw/issues/2625))) and as automated local assistants. The demand for Slack, MQTT, and OpenVINO highlights a user base heavily focused on automation, self-hosting, and hardware integration.

**Sentiment:** Generally positive and collaborative. Users are submitting high-quality bug reports with detailed stack traces, and contributors are responding quickly with targeted PRs.

## 8. Backlog Watch
*   **[Stale] Anthropic Prompt Caching ([#2192](https://github.com/sipeed/picoclaw/pull/2192)):** A critical fix for the `anthropic_messages` provider that currently sends system prompts as flat strings, defeating prompt caching and increasing API costs. Needs maintainer review.
*   **[Stale] Pre-compiled WhatsApp Builds ([#2625](https://github.com/sipeed/picoclaw/issues/2625)):** A highly requested quality-of-life feature for ARM64 edge users.
*   **[Stale] OpenAI-Compatible Embeddings ([#2624](https://github.com/sipeed/picoclaw/pull/2624)):** A valuable enhancement to support vLLM-style endpoints without forwarding dimensions upstream. Stale since April 22.
*   **Channel Identification Refactor ([#2551](https://github.com/sipeed/picoclaw/pull/2551)):** A deep architectural refactor to decouple channel names from provider types. Stale since April 16, requires careful maintainer review before merging.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-30

## 1. Today's Overview

NanoClaw is experiencing a **very high-velocity development day**, with 50 pull requests updated (29 open, 21 merged/closed) and 3 issues touched, signaling an intense feature-stabilization or sprint cycle. The bulk of today's activity is driven by core contributor **andrebrov**, who opened nearly a dozen targeted PRs addressing agent-runtime reliability, provider extensibility, and operational robustness. No new releases were cut today, but the volume and cohesion of the merged/closed PRs suggest one is likely being staged. Community contributions include a significant new provider integration (Google Gemini) and several bug fixes from external contributors. Overall project health appears **strong and active**, with clear architectural intent behind the changes.

---

## 2. Releases

No new releases were published today.

---

## 3. Project Progress

**21 PRs were merged or closed today**, advancing several key areas:

- **Google Gemini Provider Integration** — PRs [#2137](https://github.com/qwibitai/nanoclaw/pull/2137) (closed) and [#2135](https://github.com/qwibitai/nanoclaw/pull/2135) (closed) were earlier iterations; the active one is now [#2136](https://github.com/qwibitai/nanoclaw/pull/2136) (open). This adds a first-class Gemini CLI-based agent provider following the Codex provider pattern. *(by farooqu)*
- **MCP Server Extensibility** — [#2131](https://github.com/qwibitai/nanoclaw/pull/2131) extends `container.json` schema to support remote HTTP/SSE MCP servers alongside existing stdio ones, with auth header support.
- **Agent Model Flexibility** — [#2129](https://github.com/qwibitai/nanoclaw/pull/2129) introduces per-group model override and `AGENT_MODEL` env passthrough into containers, enabling multi-model deployments.
- **Context Compaction Controls** — [#2138](https://github.com/qwibitai/nanoclaw/pull/2138) forwards `AGENT_AUTO_COMPACT_WINDOW` to spawned containers, directly addressing [Issue #1820](https://github.com/qwibitai/nanoclaw/issues/1820) and [#2109](https://github.com/qwibitai/nanoclaw/issues/2109).
- **Opus 4.7 Compatibility** — [#2132](https://github.com/qwibitai/nanoclaw/pull/2132) pins `thinking.display='summarized'` to prevent silent thinking blocks in Opus 4.7.
- **Empty-Turn Loop Fix** — [#2130](https://github.com/qwibitai/nanoclaw/pull/2130) detects thinking-only `end_turn` results that cause infinite continuation loops.
- **Scheduled Task Reliability** — [#2127](https://github.com/qwibitai/nanoclaw/pull/2127) prevents SDK session resumption across scheduled task batches, eliminating silent cross-task output contamination.
- **Message Delivery Hardening** — [#2126](https://github.com/qwibitai/nanoclaw/pull/2126) adds exponential backoff for failed deliveries and closes leaked DB handles. [#2123](https://github.com/qwibitai/nanoclaw/pull/2123) suppresses duplicate text when `send_message` fires.
- **Database Concurrency** — [#2125](https://github.com/qwibitai/nanoclaw/pull/2125) serializes sequence allocation in `writeMessageOut` across the MCP server child process and parent poll-loop, fixing a race condition causing duplicate sequence numbers.
- **Image Handling** — [#2124](https://github.com/qwibitai/nanoclaw/pull/2124) resizes large camera images (4–8 MB) before base64-encoding into the session inbox, reducing memory footprint.
- **Fail-Fast on MCP Remote Failure** — [#2121](https://github.com/qwibitai/nanoclaw/pull/2121) (closed/merged) ensures the agent stops gracefully when required MCP servers return errors instead of silently degrading.
- **Knowledge Base Scaffolding** — [#2133](https://github.com/qwibitai/nanoclaw/pull/2133) introduces a `knowledge/raw/` ingest directory for future LLM wiki compilation — an early signal of a RAG/knowledge feature.
- **Setup & UX Fixes** — [#2134](https://github.com/qwibitai/nanoclaw/pull/2134) adds Apple Silicon + Colima env vars to launchd plist; [#2128](https://github.com/qwibitai/nanoclaw/pull/2128) improves headless-host sign-in hints.
- **Discord Router Fix** — [#2093](https://github.com/qwibitai/nanoclaw/pull/2093) enforces per-thread sessions for DMs on threaded adapters, fixing cross-thread reply misrouting.
- **Dashboard Skill Repair** — [#2090](https://github.com/qwibitai/nanoclaw/pull/2090) fixes `/add-dashboard` install after source refactors.

---

## 4. Community Hot Topics

Activity today is high in volume but **low in comment counts** (all items show 0 comments), making it difficult to identify deeply debated threads. However, the following stand out by significance:

- **[Issue #2109](https://github.com/qwibitai/nanoclaw/issues/2109) — Context compacting at 200K with Opus 4.7**: User Aswinmcw reports that context compacts at 200K tokens despite Opus 4.7 supporting 1M. This directly maps to the `AGENT_AUTO_COMPACT_WINDOW` passthrough work in [PR #2138](https://github.com/qwibitai/nanoclaw/pull/2138) and the closed [Issue #1820](https://github.com/qwibitai/nanoclaw/issues/1820). Underlying need: **users want control over context window utilization for high-token models**.
- **[Issue #2088](https://github.com/qwibitai/nanoclaw/issues/2088) — iMessage outbound silent failure on macOS**: JBenAnderson reports that launchd-managed Node processes cannot obtain Apple Automation permissions, causing silent outbound message failures. This is a **platform-specific permissions architecture issue** with no fix PR yet.
- **[PR #2136](https://github.com/qwibitai/nanoclaw/pull/2136) — Google Gemini provider**: The most significant community-contributed feature today, with multiple iterations (PRs #2135, #2137 closed in favor of this one), showing contributor responsiveness to review feedback.

---

## 5. Bugs & Stability

| Severity | Issue | Details | Fix Status |
|----------|-------|---------|------------|
| **High** | [DB race condition in `writeMessageOut`](https://github.com/qwibitai/nanoclaw/pull/2125) | Concurrent writes from MCP child process and poll-loop produce duplicate sequence numbers, potentially corrupting outbound message ordering | ✅ Fix PR [#2125](https://github.com/qwibitai/nanoclaw/pull/2125) open |
| **High** | [Scheduled task cross-contamination](https://github.com/qwibitai/nanoclaw/pull/2127) | Resuming SDK sessions across scheduled tasks causes Task B to silently receive Task A's output | ✅ Fix PR [#2127](https://github.com/qwibitai/nanoclaw/pull/2127) open |
| **High** | [iMessage outbound silent failure](https://github.com/qwibitai/nanoclaw/issues/2088) | launchd-managed Node can't get Automation permission on macOS Tahoe; messages silently dropped | ❌ No fix PR yet |
| **Medium** | [Context compaction too aggressive for Opus 4.7](https://github.com/qwibitai/nanoclaw/issues/2109) | Hardcoded threshold compacts at 200K instead of leveraging 1M context | ✅ Fix PR [#2138](https://github.com/qwibitai/nanoclaw/pull/2138) open |
| **Medium** | [Duplicate message text on `send_message`](https://github.com/qwibitai/nanoclaw/pull/2123) | Users see agent replies twice when `send_message` tool is invoked | ✅ Fix PR [#2123](https://github.com/qwibitai/nanoclaw/pull/2123) open |
| **Medium** | [Thinking-only end_turn loop](https://github.com/qwibitai/nanoclaw/pull/2130) | Empty Result with `end_turn` causes infinite continuation loop | ✅ Fix PR [#2130](https://github.com/qwibitai/nanoclaw/pull/2130) open |
| **Medium** | [Discord cross-thread reply misrouting](https://github.com/qwibitai/nanoclaw/pull/2093) | Bot replies in wrong thread/channel on Discord | ✅ Fix PR [#2093](https://github.com/qwibitai/nanoclaw/pull/2093) open |
| **Low** | [Large image attachments bloat inbox](https://github.com/qwibitai/nanoclaw/pull/2124) | 4–8 MB camera images base64-encoded at full size | ✅ Fix PR [#2124](https://github.com/qwibitai/nanoclaw/pull/2124) open |
| **Low** | [Unconditional CLAUDE_CODE_AUTO_COMPACT_WINDOW overwrite](https://github.com/qwibitai/nanoclaw/issues/1820) | Container agent-runner ignores host-set env var | ✅ Fix PR [#2138](https://github.com/qwibitai/nanoclaw/pull/2138) open |

---

## 6. Feature Requests & Roadmap Signals

Based on today's issues and PRs, the following roadmap signals emerge:

1. **Google Gemini as a first-class provider** ([PR #2136](https://github.com/qwibitai/nanoclaw/pull/2136)) — Nearly ready; likely landing in the next release as a major headline feature.
2. **Knowledge base / RAG pipeline** ([PR #2133](https://github.com/qwibitai/nanoclaw/pull/2133)) — The `knowledge/raw/` ingest directory is explicitly the "first piece" of a wiki feature. Expect follow-on PRs for compilation, indexing, and retrieval.
3. **Remote MCP server support** ([PR #2131](https://github.com/qwibitai/nanoclaw/pull/2131)) — HTTP/SSE transport for MCP servers signals a move beyond local-only tool integrations, enabling cloud-hosted tool services.
4. **Per-group model overrides** ([PR #2129](https://github.com/qwibitai/nanoclaw/pull/2129)) — Allows different conversation groups to use different models, a prerequisite for cost-optimized or task-specialized deployments.
5. **Tunable auto-compact thresholds** ([PR #2138](https://github.com/qwibitai/nanoclaw/pull/2138)) — Gives operators control over context compaction, essential as models scale to 1M+ tokens.

**Prediction for next release**: Google Gemini provider, remote MCP servers, auto-compact configurability, and the bundle of reliability fixes (DB race, scheduled tasks, duplicate messages).

---

## 7. User Feedback Summary

- **Opus 4.7 users are frustrated by premature context compaction** ([#2109](https://github.com/qwibitai/nanoclaw/issues/2109)) — they expect to leverage the full 1M token window but are capped at ~200K. The inability to override thresholds has been a recurring theme since [Issue #1820](https://github.com/qwibitai/nanoclaw/issues/1820) (opened April 17, still unresolved until today's PRs).
- **macOS local-mode iMessage users hit a platform wall** ([#2088](https://github.com/qwibitai/nanoclaw/issues/2088)) — the silent failure mode (no logs, no errors) is particularly painful. The root cause (launchd sandboxing vs. Apple Automation permissions) suggests this may require architectural changes or documentation workarounds rather than a simple patch.
- **Discord users experience confusing cross-thread replies** ([#2093](https://github.com/qwibitai/nanoclaw/pull/2093)) — a usability bug that erodes trust in bot interactions.
- **Headless Linux operators** ([#2128](https://github.com/qwibitai/nanoclaw/pull/2128)) are misdirected by sign-in UX that assumes a browser is available — a niche but real pain point for self-hosters.

Overall, satisfaction appears **moderately positive** — the project is actively addressing pain points, but the volume of reliability fixes suggests the v2 release may have shipped with rough edges that are now being polished.

---

## 8. Backlog Watch

- **[Issue #2088](https://github.com/qwibitai/nanoclaw/issues/2088) — iMessage outbound silent failure on macOS**: Opened and updated today with 0 comments. This is a **complete functionality blocker** for iMessage local mode on macOS and has no associated fix PR. High priority for maintainer response.
- **[Issue #1820](https://github.com/qwibitai/nanoclaw/issues/1820) — Unconditional CLAUDE_CODE_AUTO_COMPACT_WINDOW overwrite**: Opened April 17, closed today (likely by [PR #2138](https://github.com/qwibitai/nanoclaw/pull/2138)), but sat for 12 days with 0 maintainer comments before resolution. Suggests a **triage backlog** for non-critical issues.
- **[PR #2090](https://github.com/qwibitai/nanoclaw/pull/2090) — Dashboard skill repair**: Open since earlier, still awaiting review. Community-contributed fix for a broken installation path — a relatively quick review candidate.
- **[PR #2093](https://github.com/qwibitai/nanoclaw/pull/2093) — Discord per-thread session fix**: Community-contributed with clear bug description and reproduction. Awaiting review.

**Recommendation**: The maintainers should prioritize responding to Issue #2088 (iMessage blocker) and reviewing the two community bug-fix PRs (#2090, #2093) to maintain contributor engagement.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-04-30

## 1. Today's Overview
Project activity for NullClaw over the last 24 hours indicates a moderately active community primarily focused on bug tracking and documentation triage rather than active code merges. With two issues updated and zero pull requests or new releases, the development pipeline is currently experiencing a quiet period. The lack of merged PRs suggests that maintainers may be gathering context or focusing on internal planning. Overall, the project remains stable, with current community efforts directed towards identifying compatibility bottlenecks for low-resource environments and addressing documentation gaps. 

## 2. Releases
No new releases were recorded today. There are no immediate breaking changes, features, or migration notes to report.

## 3. Project Progress
No pull requests were created, merged, or closed in the last 24 hours. Active code development appears to be paused or happening behind the scenes. One documentation issue ([#874](https://github.com/nullclaw/nullclaw/issues/874)) was closed, indicating that maintainers are actively triaging the repository and keeping documentation aligned with the codebase. 

## 4. Community Hot Topics
The most active discussion is occurring around Issue [#871](https://github.com/nullclaw/nullclaw/issues/871) (1 comment). 
* **Analysis:** The core underlying need highlighted by the community is a frictionless, zero-configuration out-of-the-box experience. Users drawn to NullClaw explicitly want to run AI agents on weak, cheap, low-resource hardware. Relying on external, API-key-gated services like Brave Search undermines this core value proposition, prompting requests for native, lightweight alternatives like DuckDuckGo. 

## 5. Bugs & Stability
One bug was reported recently and is currently active:
* **[High Severity] [#871](https://github.com/nullclaw/nullclaw/issues/871) - `web_search` impractical on low-resource devices:** The current web search implementation lacks native DuckDuckGo support, making the feature functionally useless for the project's target demographic without paid external APIs. *Status: Open, no fix PRs currently available.*

## 6. Feature Requests & Roadmap Signals
Based on the current issue tracker, the strongest signal for the upcoming roadmap is the integration of native web-search capabilities. 
* **Predicted Next Features:** To resolve [#871](https://github.com/nullclaw/nullclaw/issues/871), it is highly likely that contributors or maintainers will introduce a direct, API-key-free search provider (such as DuckDuckGo or Searx) to ensure compatibility with the project's low-resource ethos. 

## 7. User Feedback Summary
Real-world user feedback points to a clear use case: deploying NullClaw on cheap, resource-constrained edge devices. 
* **Pain Points:** There is notable dissatisfaction regarding "heavy" or commercial API requirements (like Brave Search) for basic agent tools. Users expect built-in, lightweight alternatives that respect the constraints of their hardware environments. 
* **Documentation Satisfaction:** A user successfully identified a missing documentation snippet regarding security policies, showing that the user base is actively reviewing the codebase and values comprehensive, up-to-date security documentation.

## 8. Backlog Watch
* **Requires Maintainer Attention:** Bug [#871](https://github.com/nullclaw/nullclaw/issues/871) needs prioritization. Because it is marked as a critical bug affecting the project's primary use case (low-resource devices), it should ideally be claimed by a contributor or a maintainer soon to prevent user drop-off.
* **Completed:** Issue [#874](https://github.com/nullclaw/nullclaw/issues/874) was efficiently handled, proving maintainers are watching the repository, though the lack of PR activity implies development bandwidth may currently be limited.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-30

## 1. Today's Overview
IronClaw is experiencing exceptionally high development activity, characterized by the rapid execution of a major architectural overhaul known as "Reborn." In the last 24 hours, the project saw 50 updated pull requests (35 of which were merged or closed) alongside 28 active issues and a new official release (`v0.27.0`). The maintainers are heavily focused on landing the Reborn infrastructure—decomposing a massive architectural change into highly structured, dependency-gated PRs. However, alongside this impressive engineering velocity, today's data shows emerging stability concerns: the release triggered multiple P2 bug reports and live canary test failures, indicating that the current iteration may be prone to UI hangs and integration edge cases under load.

## 2. Releases
**[ironclaw-v0.27.0](https://github.com/nearai/ironclaw/releases/tag/v0.27.0)** (Released 2026-04-29)
*   **Changes:** Introduced the canonical capability status vocabulary for the v2 runtime contract (`engine-v2`). Centralized the action-vs-capability surface policy across the prompt, runtime, bridge projection, and tool surfaces. 
*   **Migration/Breaking Notes:** Teams relying on the previous V1 tool-surface policies will need to align with the newly centralized capability status vocabulary.

## 3. Project Progress
Development is completely dominated by the "Reborn" architecture landing. Maintainers are successfully executing a highly coordinated, grouped-PR strategy to overhaul the runtime without creating an unreviewable monolithic diff. 
*   **Reborn Infrastructure Advances:** The core team merged 15+ foundational PRs for Reborn. Key merges include adding script and MCP runtime lanes ([#3027](https://github.com/nearai/ironclaw/pull/3027)), the runtime dispatcher substrate ([#3023](https://github.com/nearai/ironclaw/pull/3023)), secrets and network boundaries ([#3077](https://github.com/nearai/ironclaw/pull/3077)), and making authorization trust-aware ([#3070](https://github.com/nearai/ironclaw/pull/3070)).
*   **V1 Feature Additions:** Community contributors made progress on visual assets, with an open PR to persist inline image artifacts for attachments and tool results ([#3065](https://github.com/nearai/ironclaw/pull/3065)). 

## 4. Community Hot Topics
The most active discussions revolve around the planning and safety of the new architecture, driven almost entirely by core maintainers.
*   **[EPIC] Track Reborn architecture landing strategy ([#2987](https://github.com/nearai/ironclaw/issues/2987))** - 38 comments. This is the nerve center of the project right now. It tracks the grouped PR plan for the Reborn integration branch. It shows a rigorous engineering culture, ensuring reviewers aren't overwhelmed by the V2 migration.
*   **Reborn Runtime Profiles ([#3045](https://github.com/nearai/ironclaw/issues/3045) & [#3044](https://github.com/nearai/ironclaw/issues/3044))** - Active discussions on how to abstract low-level system grants and policies into simple user/developer experiences (e.g., "local dev mode" vs. "production mode") once Reborn lands.
*   **WeChat Channel Support ([#1666](https://github.com/nearai/ironclaw/pull/1666))** - A substantial community contribution adding a WASM-based WeChat channel, signaling strong external interest in expanding IronClaw's communication gateways.

## 5. Bugs & Stability
The QA cycle for `v0.27.0` has revealed several P2 bugs and test failures that require immediate attention.
1.  **Live Canary Failures (Critical Infrastructure):** Multiple automated canary lanes failed on the latest commit (`2a65da7`), including `public-smoke` ([#3075](https://github.com/nearai/ironclaw/issues/3075), [#3064](https://github.com/nearai/ironclaw/issues/3064)), `persona-rotating` ([#3074](https://github.com/nearai/ironclaw/issues/3074)), and `private-oauth` ([#3052](https://github.com/nearai/ironclaw/issues/3052)). 
2.  **UI Hang on Restart ([#3082](https://github.com/nearai/ironclaw/issues/3082))** - The application hangs on "Restarting IronClaw" after enabling Auto Approvals for tools in settings. *No fix PR exists yet.*
3.  **Duplicate User Creation ([#3083](https://github.com/nearai/ironclaw/issues/3083))** - Missing loading states and submission debounce in User Management allows duplicate entries. *No fix PR exists yet.*
4.  **UX Misdirection ([#3081](https://github.com/nearai/ironclaw/issues/3081))** - The Portfolio extension displays a "Configure" button when no configuration is actually needed. *No fix PR exists yet.*

## 6. Feature Requests & Roadmap Signals
*   **Non-Image File Attachments ([#1341](https://github.com/nearai/ironclaw/issues/1341)):** A highly requested P1 feature to allow PDFs, audio, and documents in the web gateway (currently limited to images). Given the recent work on image persistence in PR #3065, multimedia expansion is a strong candidate for V1's near-term roadmap.
*   **Distributed Tracing ([#233](https://github.com/nearai/ironclaw/issues/233)):** Propagation of W3C `traceparent` headers across the worker/orchestrator boundary. As the agent becomes more distributed, observability is becoming a pressing need.
*   **Ship `ironclaw-reborn` binary ([#3069](https://github.com/nearai/ironclaw/issues/3069)):** A newly scoped plan to ship the Reborn architecture as a separate executable alongside the main binary, ensuring a safe, non-breaking transition for users.

## 7. User Feedback Summary
User feedback today is largely confined to bug reports from the `hosted-staging (crab shack)` environment. Users are experiencing friction with state management in the UI—specifically, forms lacking submission debouncing (leading to duplicate users) and missing async loading states causing the app to hang during setup. While core functionality (like tool execution) is advancing rapidly, the polish on the administrator and user-facing settings UI appears to be lagging behind the backend architectural upgrades.

## 8. Backlog Watch
*   **[Abound demo — Responses API, credential injection, skills, guardrails ([#1764](https://github.com/nearai/ironclaw/pull/1764))):** An XL-sized, high-risk PR opened on March 30th. It remains open and seems stalled or undergoing lengthy review. It overlaps somewhat with Reborn's new credential injection boundary, which may be causing it to wait on the new architecture.
*   **[Support non-image file attachments ([#1341](https://github.com/nearai/ironclaw/issues/1341))**: Tagged as `suggested_P1`, this issue was opened over a month ago and has had no recent maintainer comments. With users actively working on related media features (PR #3065), this needs an official triage decision.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-04-30

## 1. Today's Overview
LobsterAI is currently demonstrating **highly active development** and robust project health, characterized by a fresh release and significant repository activity. In the last 24 hours, the maintainers pushed 1 new release version and managed 28 updated Pull Requests, indicating aggressive feature iteration and issue resolution. The influx of 24 currently open PRs heavily features external community contributions, reflecting a highly engaged open-source ecosystem. Activity is heavily concentrated around expanding provider support (like Volcengine and Qwen), refining the AI gateway/cowork architecture, and addressing data persistence and UI enhancements.

## 2. Releases
A new stable version was released yesterday, focusing on configuration compatibility and user experience:
*   **Release:** [LobsterAI 2026.4.29](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.29)
    *   **Changes:** Updated default model configurations for Volcengine and Qwen providers. 
    *   **UI Fix:** Removed an inaccurate auto-restart hint that displayed during the "installing" state.

## 3. Project Progress
The core team merged several significant PRs today, advancing the project's core feature set:
*   **[PR #1876](https://github.com/netease-youdao/LobsterAI/pull/1876) [CLOSED]:** A major release merge (`release/2026.04.27` into `main`). This advanced several critical features:
    *   *New Auth:* Added OAuth login support for ChatGPT.
    *   *New Providers:* Integrated Xiaomi Mimo and Baidu Qianfan coding plan support.
    *   *Upgrades:* Enhanced the Youdaonote skill.
    *   *Bug Fixes:* Resolved a gateway forced-restart issue triggered by plan model list updates.
*   **[PR #1874](https://github.com/netease-youdao/LobsterAI/pull/1874) & [PR #1875](https://github.com/netease-youdao/LobsterAI/pull/1875) [CLOSED]:** Restructured and optimized the `spec` documentation framework to improve developer onboarding and architectural clarity.
*   **[PR #1873](https://github.com/netease-youdao/LobsterAI/pull/1873) [CLOSED]:** Improved the UI layout by making the cowork bootstrap textarea dynamically fill the available height in the settings menu.

## 4. Community Hot Topics
The open PR list is currently dominated by a massive wave of community contributions aiming to enhance data export, UI customization, and protocol support. 
*   **Advanced Exporting & Sharing:** [PR #880](https://github.com/netease-youdao/LobsterAI/pull/880) proposes granular message-level selection for sharing, complete with image preview and branding capabilities. Similarly, [PR #853](https://github.com/netease-youdao/LobsterAI/pull/853) aims to introduce Markdown, JSON, and JSONL export formats for cowork sessions.
*   **Protocol Support:** [PR #857](https://github.com/netease-youdao/LobsterAI/pull/857) adds HTTP streaming support for MCP (Model Context Protocol), a highly requested feature for advanced agent integrations.
*   **Theme Customization:** [PR #862](https://github.com/netease-youdao/LobsterAI/pull/862) introduces custom UI themes with user-selectable accent colors, achieving this purely through smart CSS variable overrides.
*   *Underlying Needs:* The community is heavily focused on **data portability** (getting data out of the app in usable formats) and **visual personalization**.

## 5. Bugs & Stability
Several critical stability and security bugs were identified by the community, with fixes currently sitting in open PRs:
1.  **High Severity - Security (RCE Risk):** [PR #869](https://github.com/netease-youdao/LobsterAI/pull/869) and [PR #877](https://github.com/netease-youdao/LobsterAI/pull/877) highlight that `shell.openExternal` is currently vulnerable to executing dangerous URL schemes (`file://`, `smb://`, etc.). Fixes involve implementing a strict `https:`, `http:`, `mailto:` whitelist.
2.  **High Severity - Database Persistence:** [PR #863](https://github.com/netease-youdao/LobsterAI/pull/863) points out that non-atomic writes to the SQLite database can cause total file corruption during a crash. Fix involves implementing atomic write-then-rename. 
3.  **Medium Severity - Long Context Degradation:** [PR #866](https://github.com/netease-youdao/LobsterAI/pull/866) addresses the "Lost in the Middle" effect in long LLM conversations, proposing better context management to prevent the AI from repeating tasks or forgetting early instructions.
4.  **Low/Medium Severity - UI Freezes:** [PR #864](https://github.com/netease-youdao/LobsterAI/pull/864) fixes an annoying bug where switching models triggers a gateway restart mask, causing messages to get stuck in the input box.

## 6. Feature Requests & Roadmap Signals
Based on the accumulation of open community PRs, clear signals are being sent for the next iteration of LobsterAI:
*   **Robust Memory/State Management:** Features like context management to mitigate "lost in the middle" ([PR #866](https://github.com/netease-youdao/LobsterAI/pull/866)) and transactional memory deletion ([PR #868](https://github.com/netease-youdao/LobsterAI/pull/868)) indicate a strong roadmap signal toward making the AI's long-term memory reliable.
*   **MCP Expansion:** The push for HTTP streaming in MCP ([PR #857](https://github.com/netease-youdao/LobsterAI/pull/857)) suggests that the team plans to heavily leverage MCP for external tool-use capabilities in upcoming versions.
*   **Enterprise/Prosumer Features:** Features like brand-customizable image exports ([PR #880](https://github.com/netease-youdao/LobsterAI/pull/880)) point toward a roadmap targeting professional and enterprise users who share AI conversational outputs.

## 7. User Feedback Summary
*   **Authentication Frustrations:** A major pain point flagged today is [Issue #1877](https://github.com/netease-youdao/LobsterAI/issues/1877). A user reported that ChatGPT OAuth sign-in fails with a `403 unsupported_country_region_territory` error, even though local workarounds (like Codex) function properly. This indicates an immediate need for maintainers to adjust the backend proxy or OAuth flow for global regions.
*   **Reliability Expectations:** Users are expressing frustration over UI hangups (messages getting stuck) and token-refresh race conditions ([PR #874](https://github.com/netease-youdao/LobsterAI/pull/874)). The feedback heavily leans toward a desire for "invisible infrastructure"—users want the AI to smoothly handle model switching and token limits without throwing visual errors or getting stuck.

## 8. Backlog Watch
The repository currently has a large number of **stale community PRs** (many created around 2026-03-25) that require maintainer triage and code review:
*   **Critical Security Fixes sitting idle:** The `shell.openExternal` security patches ([PR #869](https://github.com/netease-youdao/LobsterAI/pull/869), [PR #877](https://github.com/netease-youdao/LobsterAI/pull/877)) and SQLite persistence fixes ([PR #863](https://github.com/netease-youdao/LobsterAI/pull/863)) are vital for application health and should be prioritized for review.
*   **Database Bloat:** [PR #881](https://github.com/netease-youdao/LobsterAI/pull/881) highlights that foreign key constraints are disabled by default in SQLite, meaning deleted sessions do not cascade delete their messages, leading to silent database bloat over time.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-04-30

## 1. Today's Overview
Moltis is experiencing a period of highly accelerated development and active community engagement, primarily focused on expanding its AI agent capabilities and hardening security. The project merged 7 pull requests and resolved critical bugs within the last 24 hours, indicating a robust and responsive maintainer workflow. Activity is heavily skewed toward feature expansion—including telephony, advanced command controls, and UI enhancements—while actively addressing high-severity security escapes in its sandbox environments. With two new releases pushed yesterday, the project is iterating rapidly toward a more comprehensive, multi-modal personal AI assistant platform.

## 2. Releases
*   **[20260429.02](https://github.com/moltis-org/moltis/releases/tag/20260429.02)**
*   **[20260429.01](https://github.com/moltis-org/moltis/releases/tag/20260429.01)**

*Note: Specific changelogs were not provided in the data, but given the merged PRs addressing security escapes and chat scrolling regressions, these releases likely serve as critical patches stabilizing the WebUI and sandbox environments.*

## 3. Project Progress
Significant milestones were achieved today, merging 7 PRs that introduce major functional upgrades and security hardening:
*   **Telephony Integration:** PR [#920](https://github.com/moltis-org/moltis/pull/920) introduced a new `moltis-telephony` crate with Twilio support, call state machines, and audio conversion, moving Moltis toward voice/phone agent capabilities.
*   **Sandbox Security Hardening:** PR [#866](https://github.com/moltis-org/moltis/pull/866) successfully merged Linux Landlock LSM filesystem isolation. Additionally, PR [#924](https://github.com/moltis-org/moltis/pull/924) fixed critical host-escape bugs in `RestrictedHostSandbox`.
*   **Web UI & Chat UX:** PR [#876](https://github.com/moltis-org/moltis/pull/876) added a file upload button to web chat, bringing the UX to parity with major LLM providers.
*   **Agent Identity & Imports:** PR [#916](https://github.com/moltis-org/moltis/pull/916) merged deterministic voice personas for TTS, and PR [#917](https://github.com/moltis-org/moltis/pull/917) added Claude Code and Hermes import support.
*   **Backend Optimization:** PR [#826](https://github.com/moltis-org/moltis/pull/826) configured auxiliary providers for chat compaction, and PR [#903](https://github.com/moltis-org/moltis/pull/903) was closed in favor of a cleaner implementation for auto-triggered code indexing.

## 4. Community Hot Topics
*   **Docker Deployment Stability:** [Issue #918](https://github.com/moltis-org/moltis/issues/918) (Closed) reported Telegram breaking in Docker. With 3 comments and 1 thumbs-up, it highlights a significant pain point for self-hosters relying on containerized deployments.
*   **Chat UX Friction:** [Issue #922](https://github.com/moltis-org/moltis/issues/922) (Open) regarding broken chat scrolling gathered 3 comments. Users are actively discussing UI regressions, underscoring the need for smooth streaming experiences.
*   **Agentic Capabilities:** [PR #926](https://github.com/moltis-org/moltis/pull/926) introduces new slash commands (`/btw`, `/insights`, `/steer`), signaling strong community/developer interest in granular agent control during sessions.

## 5. Bugs & Stability
Today's bug reports were identified swiftly, with fix PRs opened almost immediately, showing excellent issue-to-PR turnaround:
1.  **CRITICAL: Sandbox Host Escape - [Issue #923](https://github.com/moltis-org/moltis/issues/923)** (Closed). Sandboxed commands executed on the host environment. **Status:** Fix implemented in [PR #924](https://github.com/moltis-org/moltis/pull/924) (Closed).
2.  **HIGH: UI Regression - [Issue #922](https://github.com/moltis-org/moltis/issues/922)** (Open). A `ResizeObserver` auto-scroll feature fights user scroll intent during streaming. **Status:** Fix proposed in [PR #925](https://github.com/moltis-org/moltis/pull/925) (Open).
3.  **MEDIUM: Deployment Failure - [Issue #918](https://github.com/moltis-org/moltis/issues/918)** (Closed). Telegram integration broken in Docker environment `v20260428.03`.
4.  **LOW: Integration Auth - [Issue #927](https://github.com/moltis-org/moltis/issues/927)** (Open). MCP page missing re-authenticate button for expired OAuth tokens.
5.  **LOW: Performance - [Issue #919](https://github.com/moltis-org/moltis/issues/919)** (Open). Model discovery fails after 30-second timeout.

## 6. Feature Requests & Roadmap Signals
*   **Sub-Agent Management:** User [bsarkisov](https://github.com/moltis-org/moltis/issues/906) opened [Issue #906](https://github.com/moltis-org/moltis/issues/906) requesting WebUI configurability for sub-agents. This signals a strong user desire to manage complex, multi-agent architectures visually. Given the current momentum, this could be targeted for an upcoming minor release.
*   **Proactive Indexing:** [PR #921](https://github.com/moltis-org/moltis/pull/921) is currently open and replaces previous attempts to auto-trigger project indexing based on file changes. This indicates the roadmap is heavily focused on making Moltis a proactive, fully-context-aware coding assistant.

## 7. User Feedback Summary
Users are actively pushing Moltis into complex, multi-modal deployments, but are encountering friction in specific areas. Self-hosting users (particularly Docker-based) are vocal about deployment stability and integration breaks (e.g., Telegram). Power users are utilizing advanced sandboxing features and are quick to report security escapes, indicating a technically proficient user base. The overarching sentiment is positive, with users heavily utilizing new features (file uploads, voice personas, imports), though they demand high UX standards (scrolling behavior, UI buttons for OAuth tokens).

## 8. Backlog Watch
*   **[PR #920](https://github.com/moltis-org/moltis/pull/920) (Telephony via Twilio) & [PR #926](https://github.com/moltis-org/moltis/pull/926) (Auxiliary Commands):** Both are major architectural feature PRs opened by the same contributor. They require immediate maintainer review to prevent merge conflicts and ensure they align with the core roadmap.
*   **[PR #921](https://github.com/moltis-org/moltis/pull/921) (Auto-trigger Code Indexing):** A follow-up to a previous PR, currently open and awaiting review. A crucial feature for developer-focused agentic workflows.
*   **[Issue #927](https://github.com/moltis-org/moltis/issues/927) & [Issue #919](https://github.com/moltis-org/moltis/issues/919):** Both opened yesterday with zero maintainer comments. These need triage to ensure MCP integrations and model discovery remain stable.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-04-30

## 1. Today's Overview
CoPaw (GitHub alias QwenPaw) is experiencing exceptionally high community engagement, evidenced by 30 issues and 22 pull requests updated in the last 24 hours. The project's momentum is heavily driven by a highly active open-source community, with several "first-time-contributor" PRs successfully merging today. Following the recent rollout of version 1.1.5, user testing has intensified, bringing critical concurrency bugs and UI/UX limitations to the forefront. Overall, the project is in a highly active state, with rapid iteration in messaging channel integrations (Feishu, WeCom, QQ, DingTalk) and frontend stability. 

## 2. Releases
*   **v1.1.5**
    *   **✨ Added:** 
        *   **CJK-Aware Memory Search:** Memory search now accurately tokenizes CJK queries at the character level while seamlessly preserving Latin/digit runs ([PR #3811](https://github.com/agentscope-ai/QwenPaw/pull/3811)).
        *   **Context Compaction Fallback:** Added a reliable fallback mechanism when LLM-based context compaction fails or is disabled.
    *   **Migration Notes:** Users utilizing the local memory engine should notice significantly improved recall accuracy for Chinese, Japanese, and Korean queries without requiring configuration changes.

## 3. Project Progress
Development today focused heavily on patching frontend instability and refining messaging channel integrations:
*   **Merged PRs (10):**
    *   **Frontend Fixes:** Resolved an issue where Chinese IME couldn't be used when renaming conversations in the right-side panel ([PR #3934](https://github.com/agentscope-ai/QwenPaw/pull/3934)). Fixed a CSS line-wrapping bug for tool call blocks ([PR #3960](https://github.com/agentscope-ai/QwenPaw/pull/3960)).
    *   **Channel Integrations:** Fixed QQ channel audio type mapping to correctly distinguish voice messages from standard audio files ([PR #3887](https://github.com/agentscope-ai/QwenPaw/pull/3887), [PR #3845](https://github.com/agentscope-ai/QwenPaw/pull/3845)).
    *   **Core Logic:** Fixed an indentation bug in `rebuild_sys_prompt` that caused premature loop exits and failed system message updates ([PR #3793](https://github.com/agentscope-ai/QwenPaw/pull/3793)).
*   **Open PRs Advancing (12):**
    *   Notable open PRs include adding Tauri 2.x desktop app support ([PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)), live inter-agent task progress observation ([PR #3889](https://github.com/agentscope-ai/QwenPaw/pull/3889)), and GitHub Copilot model provider integration ([PR #3846](https://github.com/agentscope-ai/QwenPaw/pull/3846)).

## 4. Community Hot Topics
The most discussed issues revolve around multi-agent management, file handling, and enterprise adoption:
*   **Agent Workspace Isolation ([Issue #3936](https://github.com/agentscope-ai/QwenPaw/issues/3936) - 8 comments):** Users are struggling with agents accessing each other's workspaces. The community is actively discussing the need for per-agent file access whitelists/blacklists. 
*   **File Sending Limitations in Feishu/QQ ([Issue #981](https://github.com/agentscope-ai/QwenPaw/issues/981) - 14 comments):** A long-standing frustration where bots cannot send files via Feishu and QQ channels.
*   **UI/UX Enhancements ([Issue #2720](https://github.com/agentscope-ai/QwenPaw/issues/2720) - 8 comments, 👍 2):** A highly upvoted request to convert the text-based `/Approve` command into a clickable UI button. This is currently being addressed by an open PR for Feishu card handlers ([PR #3941](https://github.com/agentscope-ai/QwenPaw/pull/3941)).
*   **DeepSeek Integration Issues ([Issue #3949](https://github.com/agentscope-ai/QwenPaw/issues/3949)):** Developers are reporting `400 BadRequest` errors when using DeepSeek's "thinking mode" due to `reasoning_content` payload handling.

## 5. Bugs & Stability
Several high-severity bugs have emerged, particularly concerning resource limits and concurrency:
1.  **Critical - Memory Exhaustion Vulnerability ([Issue #3955](https://github.com/agentscope-ai/QwenPaw/issues/3955)):** A reported arbitrary file traversal vulnerability in v1.1.5. *No fix PR yet.*
2.  **Critical - 1GB File Read Causes MemoryError ([Issue #3932](https://github.com/agentscope-ai/QwenPaw/issues/3932)):** `read_file_safe` passes a 1GB `MAX_FILE_READ_BYTES` limit as character length to `TextIOWrapper.read()`, crashing low-memory systems. *No fix PR yet.*
3.  **High - Context Sync Race Condition ([Issue #3893](https://github.com/agentscope-ai/QwenPaw/issues/3893)):** Dropped tool results prior to LLM calls are causing infinite agent loops under high iterations. *No fix PR yet.*
4.  **High - WeCom "Thinking..." Stuck ([Issue #3947](https://github.com/agentscope-ai/QwenPaw/issues/3947)):** WeCom drops streams not refreshed quickly enough, losing complex replies. *Fix proposed in [PR #3950](https://github.com/agentscope-ai/QwenPaw/pull/3950).*
5.  **High - Console Tab Isolation ([Issue #3935](https://github.com/agentscope-ai/QwenPaw/issues/3935)):** Opening multiple browser tabs causes agent selection and chat sessions to overwrite each other. *Fix proposed in [PR #3958](https://github.com/agentscope-ai/QwenPaw/pull/3958) and [PR #3959](https://github.com/agentscope-ai/QwenPaw/pull/3959).*
6.  **Medium - BOOTSTRAP.md Regeneration ([Issue #3953](https://github.com/agentscope-ai/QwenPaw/issues/3953)):** File continuously reappears in initialized workspaces. *Fix proposed in [PR #3954](https://github.com/agentscope-ai/QwenPaw/pull/3954).*

## 6. Feature Requests & Roadmap Signals
User needs are trending heavily towards enterprise-grade resilience and advanced multi-modal routing:
*   **Automatic Model Fallback/Failover ([Issue #3956](https://github.com/agentscope-ai/QwenPaw/issues/3956)):** Strong demand for per-agent model auto-switching upon hitting API rate limits or task failures.
*   **Separate Vision Model Routing ([Issue #3940](https://github.com/agentscope-ai/QwenPaw/issues/3940)):** Users want to automatically route image inputs to a vision-capable model without manually switching the entire chat model context.
*   **Heartbeat & Cron Exclusion from Auto-Memory ([Issue #3944](https://github.com/agentscope-ai/QwenPaw/issues/3944)):** A clear signal that users are deploying autonomous background tasks, and need automated "thought" cleaning so bots don't memorize system health checks as user experiences.
*   **Next Version Prediction:** Given current PRs, v1.1.6 will likely feature major messaging channel upgrades (Interactive Feishu cards, WeCom session isolation in [PR #3948](https://github.com/agentscope-ai/QwenPaw/pull/3948)), a Tauri-based desktop app, and stricter workspace initialization.

## 7. User Feedback Summary
*   **Pain Points:** Enterprise users are frustrated by channel limitations (inability to send files in Feishu/QQ) and identity confusion when routing multiple agents through a single DingTalk/WeCom bot. Frontend state management (losing chat history when switching agents or navigating to settings) is another major friction point.
*   **Use Cases:** Users are actively pushing CoPaw into autonomous continuous workflows—setting up 5-minute cron jobs for news aggregation, utilizing multi-agent collaboration, and hooking up external MCP services (like Yunxiao DevOps and Jin10 Data).
*   **Satisfaction:** The community is highly engaged and actively submitting complex bug reports (like race conditions), showing a strong developer-grade adoption rate. However, the influx of UI/UX complaints suggests the project is transitioning from early adopters to less technical users who expect smoother visual interactions.

## 8. Backlog Watch
The following important issues and PRs require immediate maintainer attention:
*   **[Security] Arbitrary File Traversal ([Issue #3955](https://github.com/agentscope-ai/QwenPaw/issues/3955)):** Requires immediate triage and patching.
*   **[Feature] Plan and Task Monitoring ([Issue #600](https://github.com/agentscope-ai/QwenPaw/issues/600)):** Open since March, users are heavily requesting continuous task execution monitoring. 
*   **[Feature] llama.cpp Provider Support ([Issue #3920](https://github.com/agentscope-ai/QwenPaw/issues/3920)):** With Ollama and LM Studio supported, users are requesting native `llama.cpp` support for tighter local GPU control.
*   **[PR Under Review] Tauri Desktop App ([PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)):** A massive architectural PR replacing the old desktop app structure; needs core maintainer code review to proceed.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-04-30

## 1. Today's Overview
ZeroClaw is currently experiencing a high-velocity development phase characterized by heavy community contribution and active issue triage, though it is presently in a code-freeze or integration gap between releases. Over the last 24 hours, the project saw an impressive 50 issue updates (29 open, 21 closed) alongside 50 active pull requests, indicating a highly active open-source community. However, zero PRs were merged today, and no new software releases were cut, suggesting maintainers are likely conducting a broad review or holding merges for an upcoming stabilization window. The focus of the development pipeline is heavily skewed toward fixing multi-channel messaging bugs (specifically Telegram, Discord, and Matrix), improving security sandboxing, and expanding the web dashboard capabilities. 

## 2. Releases
No new releases were recorded today. The latest tracked versions remain v0.6.8 and v0.6.9.

## 3. Project Progress
While **0 PRs were merged** in the last 24 hours, maintainers actively closed 21 issues and are currently reviewing a massive queue of 50 open PRs. Key advancements waiting in the PR pipeline include:
*   **Web UI & Onboarding:** A significant overhaul of the configuration API ([PR #6179](https://github.com/zeroclaw-labs/zeroclaw/pull/6179)) introducing per-property CRUD endpoints to standardize dashboard, CLI, and third-party tool configuration.
*   **Voice Capabilities:** Substantial progress on real-time voice interactions via [PR #5978](https://github.com/zeroclaw-labs/zeroclaw/pull/5978), which introduces a speech capture buffer and STT dispatch.
*   **Security & Sandboxing:** Critical fixes for DockerSandbox workspace bind-mounts ([PR #5905](https://github.com/zeroclaw-labs/zeroclaw/pull/5905)) and command security policies ([PR #5939](https://github.com/zeroclaw-labs/zeroclaw/pull/5939)).
*   **Observability:** Introduction of OpenTelemetry semantic conventions for tool spans ([PR #6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009)), greatly enhancing enterprise tracing capabilities.

## 4. Community Hot Topics
The most actively discussed issues revolve around AI efficiency, core memory functionality, and channel reliability:
*   **Token Minimization:** [Issue #5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) (6 comments, accepted status) proposes "skill compilation" to stop sending massive 400+ line SKILL.md files to LLMs for simple requests. This highlights a strong community need to reduce latency and API costs.
*   **Memory Session Bugs:** [Issue #5550](https://github.com/zeroclaw-labs/zeroclaw/issues/5550) (6 comments) details a critical flaw where autosaved conversation memories become invisible due to a `session_id` mismatch in Rust code paths.
*   **Matrix Transcription:** [Issue #6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) (5 comments) notes that Matrix voice transcription fails with Element clients. 
*   **Telegram Voice Parity:** [Issue #5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) (7 comments, closed) successfully pushed for Telegram voice message transcription to match the TypeScript counterpart, OpenClaw.

## 5. Bugs & Stability
Several high-severity bugs are affecting users, though patches are currently pending in the PR queue:
*   **S0 - Security / Data Loss:** 
    *   [Issue #5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415): Context spillage from Discord chats into scheduled cron executions. 
    *   [Issue #5518](https://github.com/zeroclaw-labs/zeroclaw/issues/5518): Overly aggressive security scanners blocking safe shell redirects (like `2>/dev/null`).
*   **S1 - Workflow Blocked:**
    *   [Issue #5475](https://github.com/zeroclaw-labs/zeroclaw/issues/5475): Copilot + Telegram integration returning "Invalid parameter" errors.
    *   [Issue #5553](https://github.com/zeroclaw-labs/zeroclaw/issues/5553) (Closed): Telegram returning raw JSON instead of executing shell tool calls. Addressed by provider fixes like [PR #6114](https://github.com/zeroclaw-labs/zeroclaw/pull/6114).
*   **Multimodal Instability:** A cluster of bugs and fixes ([PR #6183](https://github.com/zeroclaw-labs/zeroclaw/pull/6183), [PR #6184](https://github.com/zeroclaw-labs/zeroclaw/pull/6184)) reveals that image attachments and markers were being silently dropped in Discord and tool-execution histories.

## 6. Feature Requests & Roadmap Signals
User feedback is actively shaping the roadmap, with a clear demand for deterministic actions and better UX:
*   **Deterministic Shortcuts:** [Issue #5503](https://github.com/zeroclaw-labs/zeroclaw/issues/5503) requests pre-LLM command shortcuts for known intents (e.g., "open door") to bypass LLM inference, saving ~8 seconds of latency.
*   **Manual Cron Triggers:** [Issue #5501](https://github.com/zeroclaw-labs/zeroclaw/issues/5501) requests a UI button to test cron prompts without altering the schedule.
*   **Smart Telegram Truncation:** [Issue #6225](https://github.com/zeroclaw-labs/zeroclaw/issues/6225) proposes markdown-aware message splitting to stop code blocks from being sliced awkwardly across multiple messages.

*Prediction for Next Version:* The next release will likely be a heavy patch (v0.6.10 or v0.7.0) heavily focused on fixing the identified security context spillages, merging the massive voice/STT PRs, and deploying the new Web UI CRUD config APIs.

## 7. User Feedback Summary
Users are pushing ZeroClaw into complex, multi-channel production environments, which is exposing friction in session management and provider diversity. A major pain point is **provider-specific quirks**—users are struggling to integrate local models via Ollama ([Issue #5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) - hardcoded tool counts) and AWS Bedrock ([Issue #5289](https://github.com/zeroclaw-labs/zeroclaw/issues/5289) - API key vs. SigV4 auth). Furthermore, users relying on ZeroClaw for IoT and automation are frustrated by the overhead of full LLM inference for simple deterministic tasks. Overall, satisfaction with the feature set is high, but reliability across non-OpenAI providers needs stabilization.

## 8. Backlog Watch
The following high-priority issues require immediate maintainer attention to unblock the community:
*   **Dashboard Crash:** [Issue #5244](https://github.com/zeroclaw-labs/zeroclaw/issues/5244) (Priority P1, In Progress) causes the frontend Channels tab to crash entirely on the latest Debian Docker image.
*   **Codex CLI Integration:** [Issue #5360](https://github.com/zeroclaw-labs/zeroclaw/issues/5360) / [PR #5361](https://github.com/zeroclaw-labs/zeroclaw/pull/5361) breaks the `codex_cli` tool for newer versions. A fix PR has been open since April 5th and needs review.
*   **Web Onboarding Parity:** [PR #6179](https://github.com/zeroclaw-labs/zeroclaw/pull/6179) is an XL-sized PR touching core gateway APIs. It requires thorough maintainer review to proceed.

</details>