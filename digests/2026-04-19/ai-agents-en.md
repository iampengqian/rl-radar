# OpenClaw Ecosystem Digest 2026-04-19

> Issues: 500 | PRs: 500 | Projects covered: 11 | Generated: 2026-04-18 22:05 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-04-19

## 1. Today's Overview
OpenClaw experienced exceptionally high community engagement over the past 24 hours, with 500 issues and 500 pull requests updated, indicating a highly active open-source lifecycle. However, a significant imbalance exists between open and closed items—344 open issues versus 156 closed, and 326 open PRs versus 174 merged/closed—suggesting that community demand and bug reports are currently outpacing the core team's capacity to merge resolutions. There were **no new releases** published today, leaving recent high-severity bugs (such as onboarding crashes and OpenRouter connection failures) without an official patched version. Overall, the project is in a state of rapid iteration and expansion, but is experiencing typical open-source growing pains related to stability, provider compatibility, and queue management.

## 2. Releases
No new releases were published today. The project appears to be in an active development phase, accumulating fixes and features for a future release.

## 3. Project Progress
Even without a formal release, maintainers and contributors actively merged several structural fixes and feature advancements. 
*   **Security & Architecture:** A massive cross-channel and cross-extension refactor was merged in [PR #68688](https://github.com/openclaw/openclaw/pull/68688) to pass a safe `cwd` to spawned child processes, fixing a critical path error for users in specific environments. Codex OAuth ownership was centralized in [PR #68284](https://github.com/openclaw/openclaw/pull/68284) to fix state drift.
*   **Stability & Resource Management:** Merged [PR #68645](https://github.com/openclaw/openclaw/pull/68645) introduced a wall-clock kill switch for cron jobs to prevent stale task ledgers. [PR #49174](https://github.com/openclaw/openclaw/pull/49174) (merged) fixed a major security leak where cron jobs were visible across different user sessions.
*   **Analytics:** Merged [PR #49181](https://github.com/openclaw/openclaw/pull/49181) introduced the new `openclaw usage` CLI command, giving operators native cost and usage analytics.
*   **Developer Experience:** Open PRs are targeting a new local TUI mode ([PR #66767](https://github.com/openclaw/openclaw/pull/66767)) and an evaluation framework for skills ([PR #35071](https://github.com/openclaw/openclaw/pull/35071)).

## 4. Community Hot Topics
The community is heavily focused on **agent identity, security, and tooling reliability**.
*   **Agent Identity & Reputation (Hot Debate):** [Issue #49971](https://github.com/openclaw/openclaw/issues/49971) (96 comments) proposes a native Agent Identity & Trust Verification system via ERC-8004 and W3C DID standards. Closely following this is [Issue #55342](https://github.com/openclaw/openclaw/issues/55342) (16 comments), which argues for a "behavioral reputation" layer for OpenClaw skills, citing that 341 malicious skills were found on ClawHub. This signals strong enterprise/user demand for a secure, verified agent ecosystem.
*   **Onboarding Crashes:** [Issue #67353](https://github.com/openclaw/openclaw/issues/67353) (14 comments), [Issue #67074](https://github.com/openclaw/openclaw/issues/67074) (9 comments), and [Issue #67076](https://github.com/openclaw/openclaw/issues/67076) (6 comments) highlight widespread frustration with the `onboard` command crashing with `TypeError: Cannot read properties of undefined (reading 'trim')`.
*   **Platform Containerization:** [Issue #14593](https://github.com/openclaw/openclaw/issues/14593) (24 comments, 17 👍) remains a massive pain point for Docker users, as Linux containers fail to install `brew`-dependent skills.

## 5. Bugs & Stability
Stability is currently the primary concern for users, dominated by crashes, OOM errors, and provider regressions. 
*   **Critical / System Crashes:** 
    *   [Issue #45064](https://github.com/openclaw/openclaw/issues/45064): Version 2026.3.12 suffers from a severe memory leak causing OOM crashes on basic CLI commands.
    *   [Issue #62272](https://github.com/openclaw/openclaw/issues/62272) (7 👍): Update to 2026.4.5 fails completely due to a missing dependency (`@buape/carbon`).
*   **High Severity / Core Feature Regressions:**
    *   **OpenRouter "Payloads=0" failures:** [Issue #67698](https://github.com/openclaw/openclaw/issues/67698), [Issue #67575](https://github.com/openclaw/openclaw/issues/67575), and [Issue #67425](https://github.com/openclaw/openclaw/issues/67425) show OpenRouter responses are silently dropped or abandoned. 
    *   [Issue #40082](https://github.com/openclaw/openclaw/issues/40082): Agents frequently accept tasks but return placeholder replies like "One sec" and fail to execute.
    *   [Issue #67744](https://github.com/openclaw/openclaw/issues/67744): Unconfigured TTS causes infinite tool-call loops, flooding chat (275 messages in 10 minutes).
*   **Active Mitigation PRs:** Fixes are actively being reviewed, including [PR #68700](https://github.com/openclaw/openclaw/pull/68700) (fixing session lock waits masked as timeouts), [PR #68699](https://github.com/openclaw/openclaw/pull/68699) (bounding LM Studio preload memory leaks), and [PR #68698](https://github.com/openclaw/openclaw/pull/68698) (fixing inbound dedupe memory leaks).

## 6. Feature Requests & Roadmap Signals
*   **Local-First TUI Mode:** [PR #66767](https://github.com/openclaw/openclaw/pull/66767) introduces a gateway-free local TUI mode (`openclaw tui --local`). This lowers the barrier to entry for basic users and is a strong candidate for the next major release.
*   **Robust Config Rollback:** [PR #44238](https://github.com/openclaw/openclaw/pull/44238) implements automatic config rollback on startup failure, which directly addresses the update-brickage issues seen across today's issue tracker.
*   **Memory Isolation & Maintenance:** [PR #47277](https://github.com/openclaw/openclaw/pull/47277) adds user-specific memory isolation for multi-user environments. [PR #68534](https://github.com/openclaw/openclaw/pull/68534) fixes "dreaming" narrative subagents from spawning uncontrollably on heartbeats.

## 7. User Feedback Summary
Users are excited about the breadth of integrations (WhatsApp, Discord, iMessage, Matrix, LM Studio, vLLM) but are highly frustrated by **silent tool leaks and incomplete turns**. A recurring theme is that the agent appears to be "thinking" or replies with "let me actually test it" ([Issue #40082](https://github.com/openclaw/openclaw/issues/40082)), but never actually executes. Furthermore, internal monologues and tool traces inappropriately leaking into user-facing channels (Slack, Discord, iMessage) severely degrade the end-user experience ([Issue #25592](https://github.com/openclaw/openclaw/issues/25592), [Issue #44905](https://github.com/openclaw/openclaw/issues/44905)). macOS users continue to struggle with Full Disk Access (FDA) propagation for iMessage ([Issue #5116](https://github.com/openclaw/openclaw/issues/5116)).

## 8. Backlog Watch
*   **Long-Standing Tool Leak:** [Issue #25592](https://github.com/openclaw/openclaw/issues/25592) (Open since Feb 2026, 20 comments) regarding internal text leaking to messaging channels urgently needs a maintainer triage, as it ruins the end-user UX.
*   **Missing Module:** [Issue #62272](https://github.com/openclaw/openclaw/issues/62272) (7 👍) is blocking users from successfully updating to the latest versions and needs immediate maintainer validation.
*   **Docker Experience:** [Issue #14593](https://github.com/openclaw/openclaw/issues/14593) (17 👍, Open since Feb 2026) continues to negatively impact self-hosters relying on Docker.
*   **Subagent Limitations:** [Issue #41577](https://github.com/openclaw/openclaw/issues/41577) (Open since March) highlights that spawned subagents cannot access browser/web tools, actively blocking agentic workflows.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digests from April 19, 2026.

### 1. Ecosystem Overview
The open-source AI agent and personal assistant ecosystem is currently in a phase of rapid, hyper-active iteration, largely driven by the need to integrate diverse LLMs and build reliable long-term memory systems. Leading projects like **OpenClaw**, **NanoBot**, **PicoClaw**, **NanoClaw**, and **CoPaw** are merging architectural overhauls at a high velocity to support multi-platform integrations and tool-calling frameworks. Meanwhile, the ecosystem is actively grappling with open-source growing pains, specifically balancing rapid feature expansion with core stability, provider compatibility (especially for local models), and critical security boundaries for multi-user environments.

### 2. Activity Comparison
*Note: The activity counts reflect updated/opened/closed issues and PRs within the last 24 hours. Health Score is assessed based on issue triage rate, PR merge throughput, and community engagement.*

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status (24h) | Health Score & Status |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (344 open) | 500 (326 open) | No release | 🟡 **Moderate** (Maintainers overwhelmed; open backlog outpacing merges) |
| **NanoBot** | 24 (15 closed) | 50 (38 merged) | No release | 🟢 **High** (Highly healthy; active merging, excellent triage) |
| **NanoClaw** | N/A (High volume) | 22 (15 merged) | No release | 🟢 **High** (Massive architectural progress, responsive maintainers) |
| **PicoClaw** | High volume | 4 merged | Nightly build | 🟡 **Moderate** (Fast iteration, but latest nightly has a critical auth regression) |
| **CoPaw** | 15 (12 open) | 11 (9 open) | No release | 🟡 **Moderate** (High engagement, but Windows/local-LLM stability issues) |
| **LobsterAI** | 0 | 2 (0 merged) | No release | 🔴 **Low** (Stagnant PRs, low community activity) |
| **IronClaw, TinyClaw, Moltis, ZeptoClaw, EasyClaw** | 0 | 0 | No release | ⚪ **Dormant** (No recent activity) |

### 3. OpenClaw's Position
**Advantages:** OpenClaw remains the undeniable core reference implementation and volume leader. Its scale is massive, tackling broad enterprise needs like cross-channel refactoring, native cost analytics (`openclaw usage`), and advanced agent-identity frameworks (ERC-8004, W3C DID). 
**Technical Approach:** Unlike peers that are currently modularizing or focusing on local-first execution, OpenClaw is attempting to solve macro-level distributed agentic problems—such as cross-user memory isolation, cron-job resource management, and global skill security.
**Weaknesses vs. Peers:** OpenClaw is currently buckling under its own weight. While projects like NanoBot and NanoClaw have high PR close rates (maintaining stability), OpenClaw has twice as many *open* PRs and issues as *closed/merged* ones. Furthermore, silent tool leaks and unpatched OOM crashes indicate that OpenClaw's operational stability is currently inferior to its more agile peers.

### 4. Shared Technical Focus Areas
*   **Long-Term Memory & Context Management:** 
    *   *Projects:* NanoBot, CoPaw, NanoClaw.
    *   *Needs:* Standard context windows are failing. NanoBot users are manually configuring consolidation ratios, CoPaw is implementing "auto-dream" and semantic routing, and NanoClaw is working on session-injected strategy memory (`auto-evo`) to prevent context loss during multi-turn tasks.
*   **Local & Open-Weight LLM Integration:**
    *   *Projects:* PicoClaw, CoPaw, LobsterAI.
    *   *Needs:* Users want seamless offline/privacy-focused execution. However, all projects are hitting severe bugs with local providers (Ollama, LM Studio, llama.cpp) specifically regarding context dropping, empty responses, and tool-call parsing errors.
*   **Security & Multi-User Isolation:**
    *   *Projects:* OpenClaw, PicoClaw.
    *   *Needs:* Preventing cross-session data leaks. OpenClaw patched a bug where cron jobs were visible across users, while PicoClaw is pushing an "Agent Shield" architecture for enterprise whitelisting.
*   **Deployment & Lifecycle Management:**
    *   *Projects:* NanoClaw, PicoClaw, NanoBot.
    *   *Needs:* Easier self-hosting (Docker/CasaOS support), auto-updater mechanisms, and standardized gateway lifecycle hooks (`on_start`/`on_stop`) for systemD.

### 5. Differentiation Analysis
*   **OpenClaw:** Targets the *Enterprise & Channel-Rich Ecosystem*. Focuses heavily on breadth of integrations (WhatsApp, Slack, iMessage, Matrix) and maximum customization, at the cost of increased technical friction.
*   **NanoBot / NanoClaw:** Target the *Self-Hosted & Web3 Power User*. Architecturally shifting toward extreme modularity and decentralized protocols (Nostr, Blossom). They prioritize core stability and developer experience (e.g., separating identity facts from behavioral rules).
*   **PicoClaw:** Targets the *Edge & Mobile (IoT/Android) Space*. Unique focus on mobile UI automation (Termux) and resilient edge search fallbacks, aiming to be a lightweight cross-platform bridge.
*   **CoPaw:** Targets the *Local-First Desktop User*. Highly focused on UI parity (Console/Desktop/Web) and easing the onboarding friction for users running local models via GUIs.

### 6. Community Momentum & Maturity
*   **Hyper-Growth / Rapid Iteration (OpenClaw, NanoBot, NanoClaw):** These projects are moving at breakneck speed, merging major structural PRs daily. However, this speed comes with regression risks (e.g., OpenClaw's onboarding crashes, NanoClaw's Linux OAuth bugs).
*   **Active / Stabilizing (PicoClaw, CoPaw):** High community engagement and active PR submissions, but currently bottlenecked by critical bugs in nightly builds (PicoClaw) or UI deadlocks (CoPaw). They are refining features rather than overhauling architecture.
*   **Stagnant / Dormant (LobsterAI, IronClaw, Others):** These projects show little to no momentum, with PRs sitting stale for over a month and zero community discourse.

### 7. Trend Signals
1.  **The "Wrapper" Era is Dead; the "OS" Era is Beginning:** Developers are treating agents less like chat wrappers and more like operating systems. Evidence: OpenClaw building native usage CLIs, NanoClaw extracting schedulers and permissions into isolated registry modules, and massive community demand for system-level lifecycle hooks.
2.  **Silent Failures are the #1 UX Killer:** Across all active projects, users are intensely frustrated by "silent" failures—APIs dropping payloads (OpenRouter in OpenClaw), incomplete streaming treated as successes (NanoBot), and agents "thinking" but not executing tool calls. Robust retry mechanisms and strict tool-call validation are urgently needed.
3.  **Agent Identity & Trust is Becoming a Core Requirement:** The discovery of 341 malicious skills on ClawHub and active debates around ERC-8004 indicate that the community recognizes the existential threat of unvetted agentic capabilities. Verified skill registries and behavioral reputation layers will soon become standard requirements.
4.  **Local Tool-Calling is Highly Unstable:** While text generation works well locally (via Ollama/vLLM), structured outputs (tool calls) and streaming serialization routinely crash open-source agent frameworks. Developers must implement robust client-side schema validation rather than trusting local LLM outputs.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-19

## 1. Today's Overview
NanoBot is exhibiting **highly active and healthy development momentum**, characterized by a robust pull request throughput of 50 updates (38 merged/closed) against 24 issue updates (15 closed) in the last 24 hours. The community is highly engaged in shaping the project's core architecture, particularly surrounding memory management and context window optimization. Contributor focus is heavily bifurcated between hardening existing infrastructure (such as gateway lifecycles, MCP reconnections, and template refactoring) and iterating on memory consolidation. Despite the high velocity of PRs, the maintainers are effectively triaging the backlog, though new users still experience friction with onboarding and basic configurations.

## 2. Releases
No new official releases were recorded today. However, the high volume of merged PRs suggests a potential accumulation of changes for an upcoming release candidate. 

## 3. Project Progress
Significant architectural improvements and bug fixes landed in the repository today:

*   **Memory Consolidation & Prompting:** A major theme was context compression. PRs making the memory consolidation ratio configurable were merged ([#3281](https://github.com/HKUDS/nanobot/pull/3281), [#3278](https://github.com/HKUDS/nanobot/pull/3278)). Additionally, a new feature to guide the LLM to read full session history on demand was introduced ([#3263](https://github.com/HKUDS/nanobot/pull/3263)).
*   **Template Refactoring:** A significant architectural change separated identity facts from behavioral rules by splitting `identity.md` and `SOUL.md` ([#3275](https://github.com/HKUDS/nanobot/pull/3275), [#3276](https://github.com/HKUDS/nanobot/pull/3276)).
*   **Setup & CLI Tooling:** Merged an excellent community contribution to add structured GitHub Issue/PR templates ([#3287](https://github.com/HKUDS/nanobot/pull/3287)). Setup wizard was also enhanced with Channel Common and API Server menus ([#3273](https://github.com/HKUDS/nanobot/pull/3273), [#3277](https://github.com/HKUDS/nanobot/pull/3277)). 
*   **Config & CLI Fixes:** Fixed a bug where CLI cursor-visibility escape sequences polluted non-TTY outputs (like Docker/Pipes) ([#3271](https://github.com/HKUDS/nanobot/pull/3271)), and aligned config resolution for provider API bases ([#3112](https://github.com/HKUDS/nanobot/pull/3112)).
*   **Git & File Storage:** Fixed an annoying bug where `GitStore` created nested repositories and overwrote workspace `.gitignore` files ([#3289](https://github.com/HKUDS/nanobot/pull/3289)).

## 4. Community Hot Topics
The most heavily discussed topics revolve around **long-term memory and context limitations**:

*   **Memory System Limitations:** [Issue #3227](https://github.com/HKUDS/nanobot/issues/3227) (👍 4, 13 comments) sparked a deep discussion on the limitations of `history.jsonl` and `MEMORY.md` in large projects. Users are actively brainstorming how to prevent detail loss during compression.
*   **Consolidation Mechanics:** [Issue #3274](https://github.com/HKUDS/nanobot/issues/3274) (4 comments) digs into the technical differences between `maybe_consolidate_by_tokens()` and `AutoCompact._archive()`, showing a sophisticated user base trying to optimize context injection strategies.
*   **Dream Process Noise:** [Issue #3282](https://github.com/HKUDS/nanobot/issues/3282) highlights user frustration with the new "Dream" process drifting and injecting noise into previously stable skills, pointing to a need for more granular control over autonomous background tasks.

## 5. Bugs & Stability
Several critical bugs affecting agent stability and tool execution were identified:

*   **P0 - Infinite Tool-Call Loop:** [Issue #3220](https://github.com/HKUDS/nanobot/issues/3220) reports the agent entering an infinite loop when non-compliant API gateways inject `tool_calls` under the wrong `finish_reason`. 
*   **P1 - Streaming Truncation Ignored:** [Issue #3256](https://github.com/HKUDS/nanobot/issues/3256) notes that mid-stream LLM response dropouts are treated as successes rather than errors, leading to incomplete replies without retries.
*   **P1 - Web Search Blocking:** [Issue #2804](https://github.com/HKUDS/nanobot/issues/2804) reports that DuckDuckGo web search can hang indefinitely, completely blocking the session's message pipeline.
*   **P1 - MCP Closed Resources:** [PR #3290](https://github.com/HKUDS/nanobot/pull/3290) (Open) addresses a `ClosedResourceError` when cached MCP server sessions drop, proposing an automatic reconnection mechanism.
*   **P2 - Gemini Auth & Sub-Agent Quirks:** Users reported Gemini API key conflicts ([Issue #3206](https://github.com/HKUDS/nanobot/issues/3206)) and a lack of background task completion details for Gemini sub-agents ([Issue #2853](https://github.com/HKUDS/nanobot/issues/2853)).

## 6. Feature Requests & Roadmap Signals
Based on open issues and PRs, the immediate roadmap is leaning toward **flexibility in memory management and infrastructure lifecycle**:

*   **Configurable Compaction (Imminent):** With multiple PRs ([#3285](https://github.com/HKUDS/nanobot/pull/3285), [#3281](https://github.com/HKUDS/nanobot/pull/3281)) addressing [Issue #3270](https://github.com/HKUDS/nanobot/issues/3270), users will soon have granular control over the compaction trigger points.
*   **Gateway Lifecycle Hooks:** [Issue #3279](https://github.com/HKUDS/nanobot/issues/3279) requests `on_start` / `on_stop` configuration hooks for systemD-managed bots, a vital feature for production deployments.
*   **Model Routing:** Merged PR [#3109](https://github.com/HKUDS/nanobot/pull/3109) introduces a lightweight model router to send simple tasks to cheaper models, indicating a strong focus on operational cost reduction.
*   **Agent Checkpointing:** [Issue #3027](https://github.com/HKUDS/nanobot/issues/3027) requests the ability to pause/resume long-running agent loops without losing context, a highly requested feature for complex autonomous tasks.

## 7. User Feedback Summary
User feedback highlights a dichotomy: the core system is praised as "neat, light, and easy to explore," but operational friction points remain. 

*   **Pain Points:** Installing/uninstalling via `uv` leaves lingering processes ([Issue #3267](https://github.com/HKUDS/nanobot/issues/3267)), and environment variable parsing (`${VAR}`) silently fails in `config.json`, causing authentication drops ([Issue #3251](https://github.com/Hkuds/nanobot/issues/3251)). Furthermore, content extraction from complex files like `.pptx` is currently missing data from tables and grouped shapes ([Issue #3250](https://github.com/HKUDS/nanobot/issues/3250)).
*   **Satisfaction:** The community is highly proactive. Instead of just complaining, users are proposing structural fixes, such as standardizing issue templates ([Issue #3283](https://github.com/HKUDS/nanobot/issues/3283)) and contributing direct PRs for complex features like WebSocket delta streaming ([PR #3286](https://github.com/HKUDS/nanobot/pull/3286)) and Discord multi-agent routing ([PR #3280](https://github.com/HKUDS/nanobot/pull/3280)).

## 8. Backlog Watch
*   **Agent Stop Message Preservation:** [PR #2526](https://github.com/HKUDS/nanobot/pull/2526) attempts to fix a critical bug where using `/stop` silently drops the current user message and tool calls. Despite being open since late March, it awaits final maintainer review and merging.
*   **Unified Skill CRUD:** [PR #3137](https://github.com/HKUDS/nanobot/pull/3137) proposes a major architectural shift to a unified `manage_skill` tool. Given the recent "Dream" drift complaints ([Issue #3282](https://github.com/HKUDS/nanobot/issues/3282)), this PR needs urgent attention to secure workspace skill files.
*   **Provider Abstraction:** [Issue #237](https://github.com/HKUDS/nanobot/issues/237) continues to highlight community desire to fully offload LLM integrations to `litellm` rather than building/maintaining bespoke provider integrations.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-19

## 1. Today's Overview
PicoClaw is currently experiencing a high-velocity development phase, evidenced by active nightly releases and a strong daily volume of new issues and pull requests. The project is actively iterating towards its `v0.2.6` stable release, with today's activity heavily focused on expanding tool capabilities (MCP, browser automation) and refining provider communication. However, this rapid iteration has introduced a critical regression in the most recent nightly build regarding API authorization, which has immediately caught the community's attention. Overall, project health remains robust, showing a highly engaged open-source community and responsive integration cycles.

## 2. Releases
- **[nightly: Nightly Build](https://github.com/sipeed/picoclaw/releases/tag/nightly)** (v0.2.6-nightly.20260418.6126ede9)
  - **Changes**: Automated nightly build tracking the `main` branch towards `v0.2.6`.
  - **Migration/Breaking Changes Note**: Users upgrading to this specific nightly build should be aware of a reported critical regression where API keys are being silently dropped for the `openai_compat` provider (See [Issue #2578](https://github.com/sipeed/picoclaw/issues/2578)).

## 3. Project Progress
Today saw 4 PRs merged/closed, primarily focusing on tool standardization and bug fixes:
- **MCP Compatibility Fix**: [PR #2579](https://github.com/sipeed/picoclaw/pull/2579) resolved a bug where `nil` arguments in MCP `CallTool` caused errors with Zod-based TypeScript MCP servers. It normalizes `nil` to an empty map.
- **Security & Multi-User Architectural PR**: [PR #2313](https://github.com/sipeed/picoclaw/pull/2313) (Multi-User Support, Security Hardening, Skills whitelisting) received continued updates. This "Agent Shield" integration is a massive architectural uplift for enterprise readiness.
- **Channel Refactoring**: [PR #2551](https://github.com/sipeed/picoclaw/pull/2551) is actively standardizing channel identification by decoupling channel names from provider types, allowing multiple instances of the same provider.

## 4. Community Hot Topics
The most actively discussed items highlight a strong user demand for **system stability, mobile integration, and security**:
- **Self-Upgrade Mechanism** ([Issue #618](https://github.com/sipeed/picoclaw/issues/618) - 9 comments, 2 👍): Users are heavily requesting a built-in auto-updater for various package managers (deb, winget, opkg) to ensure seamless security patching.
- **Android/Termux Support** ([Issue #286](https://github.com/sipeed/picoclaw/issues/286) - 8 comments, 2 👍) & **Android Automation** ([Issue #292](https://github.com/sipeed/picoclaw/issues/292) - 7 comments, 1 👍): There is massive interest in running PicoClaw directly on Android via Termux and using it to automate mobile UI tasks.
- **Enterprise Observability** ([Issue #1731](https://github.com/sipeed/picoclaw/issues/1731) - 4 comments) & **Auth Integration** ([Issue #1067](https://github.com/sipeed/picoclaw/issues/1067) - 4 comments): Enterprise users are pushing for OpenTelemetry (OTel) GenAI standards for system monitoring and proper authentication protocols to prevent arbitrary command execution on exposed VPS instances.

## 5. Bugs & Stability
The nightly build (`v0.2.6-nightly.20260418`) has introduced significant authentication bugs that require immediate maintainer attention:
1. **Critical: Authorization Header Dropped** ([Issue #2578](https://github.com/sipeed/picoclaw/issues/2578)): The `openai_compat` provider is silently dropping API keys, failing to send the `Authorization` header. This breaks all custom HTTP-based LLM endpoints. *No fix PR is currently listed.*
2. **High: DeepSeek 401 Authentication** ([Issue #2584](https://github.com/sipeed/picoclaw/issues/2584)): DeepSeek provider is returning "Authentication Fails (governor)" despite valid keys, likely related to the above auth-header regression.
3. **High: Ollama Empty Responses** ([Issue #2583](https://github.com/sipeed/picoclaw/issues/2583)): Qwen3.5 and Gemma4 models return empty responses (`{}`) via Ollama, though tokens are actually generated (confirmed via litellm).
4. **Medium: LongCat API Tool Calling Failure** ([Issue #2046](https://github.com/sipeed/picoclaw/issues/2046)): PicoClaw fails to trigger tool calls when utilizing the LongCat API.

## 6. Feature Requests & Roadmap Signals
- **Resilient Search APIs**: [Issue #2582](https://github.com/sipeed/picoclaw/issues/2582) requests an automatic Fallback Chain (Brave → Tavily → Perplexity → DuckDuckGo) when search quotas return 429 Rate Limit errors.
- **Enhanced Feishu (Lark) Integration**: [Issue #2580](https://github.com/sipeed/picoclaw/issues/2580) users are requesting an optimized plugin for the Chinese market, specifically asking for streaming output, status displays, and model info, similar to the official Feishu application.
- **Next Version Predictions**: Given the active PRs, the upcoming `v0.2.6` stable release will likely feature robust MCP slash commands ([PR #2535](https://github.com/sipeed/picoclaw/pull/2535)) and Chrome DevTools Protocol (CDP) browser automation ([PR #2410](https://github.com/sipeed/picoclaw/pull/2410)).

## 7. User Feedback Summary
Users are highly enthusiastic about turning PicoClaw into a multi-platform bridge (specifically targeting Android mobile automation), but they are currently experiencing friction with daily-use stability. The rapid updates in the `v0.2.6` cycle have caused breaking changes in core provider communications, leading to frustration regarding API key management. There is a clear demographic split: individual users want easier deployments, mobile support, and resilient tool-calling, while enterprise/advanced users are heavily focused on security (Auth/OTel).

## 8. Backlog Watch
- **[PR #2410](https://github.com/sipeed/picoclaw/pull/2410)**: The Browser Automation (CDP) PR has been open since April 7th. It's a highly requested feature that needs final maintainer review for merging.
- **[Issue #618](https://github.com/sipeed/picoclaw/issues/618)** & **[Issue #286](https://github.com/sipeed/picoclaw/issues/286)**: Self-upgrade and Android documentation remain high-interest items with ongoing community discussion but no finalized PRs addressing them completely.
- **[Issue #2578](https://github.com/sipeed/picoclaw/issues/2578)**: The silent dropping of the OpenAI compatible auth headers needs an immediate hotfix/PR to prevent the nightly branch from stalling user workflows.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-19

## 1. Today's Overview
NanoClaw is undergoing a period of massive architectural refactoring alongside active feature expansion, indicating a highly healthy and rapidly evolving open-source project. Today saw an exceptionally high commit-to-merge volume, with 22 pull requests updated—15 of which were merged or closed. The development team is primarily focused on modularizing the v2 core codebase, introducing OpenAI Codex as a fallback provider, and expanding channel integrations. Meanwhile, community contributors are actively developing integrations for decentralized protocols like Nostr and Matrix, as well as practical deployment tools like CalDAV and Docker/CasaOS support.

## 2. Releases
**No new releases** were published today. However, the merging of the extensive v2 "module-extraction" refactor suggests that the project is actively paving the way for a major stable release once the architectural transition is complete.

## 3. Project Progress
The project made monumental progress today, cleanly divided between core architectural overhauls and ecosystem expansion:
*   **v2 Modularization (Merged):** Maintainer `gavrielc` successfully merged a massive 8-part PR chain ([#1838](https://github.com/qwibitai/nanoclaw/pull/1838), [#1839](https://github.com/qwibitai/nanoclaw/pull/1839), [#1840](https://github.com/qwibitai/nanoclaw/pull/1840), [#1842](https://github.com/qwibitai/nanoclaw/pull/1842), [#1847](https://github.com/qwibitai/nanoclaw/pull/1847), [#1848](https://github.com/qwibitai/nanoclaw/pull/1848), [#1849](https://github.com/qwibitai/nanoclaw/pull/1849), [#1851](https://github.com/qwibitai/nanoclaw/pull/1851)). This extracted core functions (scheduling, interactive Q&A, permissions, agent-to-agent comms) into isolated, registry-based modules. This is a massive win for NanoClaw's long-term maintainability.
*   **New CLI Channel (Merged):** PR [#1853](https://github.com/qwibitai/nanoclaw/pull/1853) introduced a native CLI channel, allowing users to talk to their agents directly from the terminal via Unix sockets.
*   **Alternative Providers (Merged):** PR [#1852](https://github.com/qwibitai/nanoclaw/pull/1852) added the OpenAI Codex SDK as an automatic fallback when Claude hits rate-limit/auth errors.
*   **Deployment (Merged):** Docker and CasaOS deployment support was finally landed via PR [#1637](https://github.com/qwibitai/nanoclaw/pull/1637), significantly lowering the self-hosting barrier.

## 4. Community Hot Topics
The most active community discussions center around decentralized protocols and self-hosting capabilities:
*   **Matrix Protocol Support:** Issue [#1413](https://github.com/qwibitai/nanoclaw/issues/1413) (4 thumbs up) requests Matrix as a native channel. This highlights a strong underlying need within the NanoClaw user base for privacy-focused, self-hosted communication channels.
*   **Nostr & Decentralized Web:** Contributor `jorgenclaw` opened three interconnected PRs for Nostr integration: posting ([#1833](https://github.com/qwibitai/nanoclaw/pull/1833)), Blossom media hosting ([#1834](https://github.com/qwibitai/nanoclaw/pull/1834)), and a CalDAV skill ([#1835](https://github.com/qwibitai/nanoclaw/pull/1835)). This signals an active, niche community forming around Web3/DeSo integrations.
*   **Paperclip Webhook:** PR [#1837](https://github.com/qwibitai/nanoclaw/pull/1837) by `uniclawassistant` adds a native wake endpoint for Paperclip, showing robust third-party tool integration interest.

## 5. Bugs & Stability
*   **[High Severity] Linux MITM OAuth Token Failure:** Issue [#1850](https://github.com/qwibitai/nanoclaw/issues/1850) reports that the OneCLI MITM proxy fails entirely on Linux environments (Debian/Proxmox), preventing credential injection. Furthermore, OAuth auto-refresh is failing silently. This is a critical blocker for Linux self-hosters.
*   **[Medium Severity] Telegram Large Media Downloads:** Issue [#1831](https://github.com/qwibitai/nanoclaw/issues/1831) highlights that Telegram media downloads silently fail for files >20MB. The issue provides a proposed MTProto fallback solution.
*   **[Medium Severity] Agent Browser State Loss:** Issue [#1829](https://github.com/qwibitai/nanoclaw/issues/1829) notes that Chromium ignores profile flags, causing agent-browser sessions to be lost on container restarts.
*   **Fix PRs:** No linked fix PRs for the Linux or Telegram bugs were merged today, though related database timestamp normalization fixes were closed/updated ([#1844](https://github.com/qwibitai/nanoclaw/pull/1844), [#1845](https://github.com/qwibitai/nanoclaw/pull/1845)).

## 6. Feature Requests & Roadmap Signals
*   **Agent Memory/Strategy:** PR [#1841](https://github.com/qwibitai/nanoclaw/pull/1841) proposes `auto-evo`, a session-injected group strategy memory. If merged, this represents a major leap forward in autonomous, long-term agent memory.
*   **Native OpenAI Codex Support:** Beyond the fallback SDK merged today ([#1852](https://github.com/qwibitai/nanoclaw/pull/1852)), PR [#1843](https://github.com/qwibitai/nanoclaw/pull/1843) aims to integrate Codex as a first-class provider via JSON-RPC.
*   **Public Lead Auto-Registration:** Issue [#1830](https://github.com/qwibitai/nanoclaw/issues/1830) requests public lead auto-registration and container credential isolation to allow agents to safely interact with unregistered users via Telegram Ads.
*   *Roadmap Prediction:* The immediate next version will likely finalize the v2 module refactoring, formally introduce the CLI channel, and resolve the Linux MITM proxy bug that affects the new Docker deployment stack.

## 7. User Feedback Summary
Users are clearly pushing NanoClaw into heavy, persistent personal-assistant roles—requiring robust browser session memory ([#1829](https://github.com/qwibitai/nanoclaw/issues/1829)), large media processing ([#1831](https://github.com/qwibitai/nanoclaw/issues/1831)), and reliable calendar integrations. There is noticeable friction regarding Linux deployments and credential management (specifically MITM proxies for OAuth). However, the successful merging of Docker support and the quick implementation of provider fallbacks (Codex) indicate that the maintainers are highly responsive to self-hoster needs and reliability concerns.

## 8. Backlog Watch
*   **Matrix Integration Request:** Issue [#1413](https://github.com/qwibitai/nanoclaw/issues/1413) has been open since March 25, garnering positive reactions but no official maintainer endorsement or assignment. Given the current appetite for new channels, this needs triaging.
*   **Open Codex Provider PR:** PR [#1843](https://github.com/qwibitai/nanoclaw/pull/1843) is an ambitious open PR attempting to bring Codex up to feature parity with Claude. It requires maintainer review to ensure it aligns with the newly merged v2 modular architecture.
*   **Telegram Auto-Registration:** Issue [#1830](https://github.com/qwibitai/nanoclaw/issues/1830) brings up a critical security/architectural concern (credential isolation in public bots) that must be addressed before agents can safely be used for broad public marketing (Telegram Ads).

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-04-19

## 1. Today's Overview
LobsterAI experienced a quiet day on April 19, 2026, with zero new issues, closed issues, or releases recorded. However, two existing pull requests received recent activity updates, indicating ongoing but low-intensity project maintenance. The absence of new community-created issues suggests a stable user experience, though the lack of progress on the merging front hints at a potential bottleneck in the review and deployment pipeline. Overall, the project is in a state of low-velocity coasting, relying on contributors to push forward pending integrations rather than active core development.

## 2. Releases
No new releases were recorded today. 

## 3. Project Progress
No pull requests were merged or closed today, meaning no features advanced to the main branch. Two open PRs were marked as active or refreshed:
*   **[PR #428](https://github.com/netease-youdao/LobsterAI/pull/428)**: Aims to integrate LM Studio as a local model provider using the OpenAI-compatible API.
*   **[PR #388](https://github.com/netease-youdao/LobsterAI/pull/388)**: Seeks to upgrade the MiniMax default model to M2.7 and update the API base URL.
Both PRs represent important third-party integrations but remain stagnant in the review phase.

## 4. Community Hot Topics
There are no highly active discussions today, as the two recently updated PRs ([#428](https://github.com/netease-youdao/LobsterAI/pull/428) and [#388](https://github.com/netease-youdao/LobsterAI/pull/388)) have zero comments and zero reactions. 
*   *Analysis of underlying needs*: Despite the lack of vocal community debate in these threads, the PRs themselves highlight a strong user demand for **diverse local inference support** (via LM Studio) and **up-to-date cloud model access** (MiniMax's M2.7). Users want seamless, plug-and-play access to both local and cutting-edge SaaS models.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. This aligns with the general low-activity status of the project today and suggests that the current stable release does not have any glaring, newly discovered issues.

## 6. Feature Requests & Roadmap Signals
While no new features were officially requested today, the open PRs serve as strong roadmap signals:
*   **Local Model Expansion**: The addition of LM Studio ([PR #428](https://github.com/netease-youdao/LobsterAI/pull/428)) signals an ongoing effort to cater to privacy-conscious users or those wanting to run models offline without complex configurations. 
*   **Model Upgrades**: The MiniMax M2.7 update ([PR #388](https://github.com/netease-youdao/LobsterAI/pull/388)) indicates a need to keep the application compatible with rapidly evolving LLM APIs. 
*   *Prediction*: If these PRs pass QA, the next minor version will likely focus heavily on "Provider Expansion," giving users more granular control over local vs. cloud model routing.

## 7. User Feedback Summary
There is no direct user feedback (issues or comments) from today to gauge current satisfaction or pain points. Historically, based on the open PRs, the primary use case driving current development is **custom model configuration**—users want the flexibility to drop in local servers (like LM Studio or Ollama) or use specific regional APIs (MiniMax) without waiting for official overarching updates.

## 8. Backlog Watch
Maintainer attention is urgently needed for the following stale PRs, which have been open for over a month without merging:
*   **[PR #428](https://github.com/netease-youdao/LobsterAI/pull/428)**: *Add LM Studio as a model provider*. (Open since March 15). This is a highly requested feature in the AI community; leaving it open risks contributor abandonment.
*   **[PR #388](https://github.com/netease-youdao/LobsterAI/pull/388)**: *Upgrade MiniMax default model to M2.7*. (Open since March 12). Cloud APIs change rapidly; delayed merges mean the default user experience degrades over time. 

Both PRs are currently tagged as `stale` and require code review, conflict resolution, or maintainer feedback to progress.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-04-19

## 1. Today's Overview
The CoPaw (QwenPaw) project is experiencing **high community engagement**, with 15 issues updated (12 open) and 11 pull requests updated (9 open) in the past 24 hours. The open-source contributor base is actively submitting patches, as seen by multiple "first-time-contributor" PRs. Currently, the project has no new releases, but this high volume of open PRs indicates that the maintainers are likely gearing up for a substantial consolidation, potentially a v1.2.0 release. The overall project health is active and growing, with particular focus currently on memory management, local LLM integration, and UI parity.

## 2. Releases
* **No new releases** were recorded in the last 24 hours. The project remains on its latest stable baseline.

## 3. Project Progress
Despite no new version drops, significant architectural progress is being made through active open PRs:
* **Memory & Context Overhaul:** PR [#3548](https://github.com/agentscope-ai/CoPaw/pull/3548) is rebuilding the memory module to support backend switching, auto-summarization, and "auto-dream" features.
* **Console UI & Routing:** PR [#3452](https://github.com/agentscope-ai/CoPaw/pull/3452) and PR [#3550](https://github.com/agentscope-ai/CoPaw/pull/3548) are advancing LLM routing UI and runtime refinements for seamless switching between local and cloud models.
* **Skill Management:** PR [#3558](https://github.com/agentscope-ai/CoPaw/pull/3558) introduced dual-language (EN/ZH) support for built-in skills, and PR [#3117](https://github.com/agentscope-ai/CoPaw/pull/3117) is pushing semantic, embedding-based skill routing to save context tokens.
* **Testing:** PR [#3559](https://github.com/agentscope-ai/CoPaw/pull/3559) established Vitest for frontend unit/component testing, marking a positive step toward long-term stability.

## 4. Community Hot Topics
* **Directory Migration Issues (19 comments):** Issue [#3356](https://github.com/agentscope-ai/CoPaw/issues/3356) is highly active. Users migrating from CoPaw to QwenPaw are frustrated that `WORKING_DIR` still points to `.copaw` instead of `.qwenpaw`, causing data path conflicts.
* **Self-Evolution Inquiries (5 comments):** Issue [#3470](https://github.com/agentscope-ai/CoPaw/issues/3470) reveals strong community interest in autonomous, self-evolving agent capabilities similar to "Hermes Agent."
* **Local Model Context Loss (1+ comments):** Issue [#3562](https://github.com/agentscope-ai/CoPaw/issues/3562) is seeing rapid traffic. Users running local Qwen models via Ollama report context dropping over multi-turn conversations, a critical blocker for power users.

## 5. Bugs & Stability
*(Ranked by severity)*
1. **Streaming/SSE Crash (High):** Malformed Unicode surrogates crash the Console channel during SSE serialization. *Fix available:* PR [#3553](https://github.com/agentscope-ai/CoPaw/pull/3553).
2. **Desktop App Deadlock (High):** `QwenPaw Desktop.bat` hangs indefinitely at "Waiting for HTTP ready..." on Windows. Issue [#3555](https://github.com/agentscope-ai/CoPaw/issues/3555).
3. **CLI Hang on Security Prompt (High):** `copaw init` hangs during the security warning display on Windows. Issue [#2943](https://github.com/agentscope-ai/CoPaw/issues/2943).
4. **VPN/Proxy Breaking Local Inference (Medium):** Local Ollama models fail to call out when a system VPN is active. Issue [#3542](https://github.com/agentscope-ai/CoPaw/issues/3542) (Closed).
5. **Local Tool Call Parsing (Medium):** Custom local llama.cpp backends throw stream parsing errors during tool calls. Issue [#3560](https://github.com/agentscope-ai/CoPaw/issues/3560).

## 6. Feature Requests & Roadmap Signals
* **Context Usage Transparency:** Users want visibility into token usage per context window to know when to trigger the `/compact` command. ([#3563](https://github.com/agentscope-ai/CoPaw/issues/3563))
* **Console Default Agent Modification:** Users request the ability to change or delete the default agent directly from the Web UI, a feature currently limited to the desktop app. ([#3557](https://github.com/agentscope-ai/CoPaw/issues/3557))
* **Model Management Deletion:** A straightforward request to allow deleting hardcoded/unused built-in models from the UI. ([#3545](https://github.com/agentscope-ai/CoPaw/issues/3545) - Closed/Addressed)
* **Voice Channel Support:** Request for skills to support direct voice replies rather than just text-based output. ([#3293](https://github.com/agentscope-ai/CoPaw/issues/3293))
* *Roadmap Prediction:* The next release will likely focus heavily on memory management upgrades, model routing UI, and fixing Windows deployment deadlocks.

## 7. User Feedback Summary
* **Pain Points:** Windows users are experiencing consistent friction regarding process hangs (CLI and Desktop app) and directory pathing confusion. Additionally, users relying on local models (Ollama/llama.cpp) are hitting frequent context loss and parsing bugs.
* **Satisfaction:** The community is actively contributing fixes (e.g., SSE crash PR by Prince-liu), showing high user investment. The upcoming memory and routing features are highly anticipated and viewed positively.

## 8. Backlog Watch
* **[PR #3117](https://github.com/agentscope-ai/CoPaw/pull/3117) (Semantic Skill Routing):** Open since April 8th, tagged "Under Review, need discussions". This is a high-value PR that needs maintainer resolution to proceed.
* **[PR #3268](https://github.com/agentscope-ai/CoPaw/pull/3268) (Timestamp Injection):** Open since April 11th, also waiting on discussion. It addresses a fundamental LLM limitation (time-awareness).
* **[Issue #2943](https://github.com/agentscope-ai/CoPaw/issues/2943) (CLI Init Hang):** Open since April 4th. As an onboarding blocker for Windows users, this needs an urgent patch.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

No activity in the last 24 hours.

</details>