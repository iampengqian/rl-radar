# OpenClaw Ecosystem Digest 2026-05-03

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-02 22:09 UTC

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

# OpenClaw Project Digest — 2026-05-03

## 1. Today's Overview
OpenClaw is experiencing an immense volume of community activity, underscored by 500 updated issues and 500 updated pull requests in the last 24 hours. However, the ratio of open to closed items (465 open vs. 35 closed issues; 467 open vs. 33 merged/closed PRs) reveals a massive backlog and suggests that the core maintainers are struggling to keep pace with incoming triage. The project's immediate health is currently challenged by severe performance regressions introduced in the recent `v4.29` release, dominating user reports. Despite this, the release of the `v2026.5.2-beta.2` milestone and active development on user experience enhancements (like WebChat dictation and TTS) indicate aggressive forward momentum.

## 2. Releases
- **v2026.5.2-beta.2**
  - **Highlights:** This beta release significantly expands external plugin installation capabilities, now encompassing diagnostics, onboarding, doctor repair, channel setup, install/update records, and artifact metadata. It maintains bare package installs on npm for the initial cutover (Thanks to @vincentkoc). 
  - **Migration Notes:** No explicit breaking changes listed, but given the severe regressions identified in `v4.29` (see Bugs & Stability), administrators upgrading to this beta should closely monitor gateway startup times, event loop health, and session latency.

## 3. Project Progress
While today saw a low closure rate for the overall backlog, maintainers and community contributors pushed several high-value PRs forward, focusing heavily on performance recovery and UI/UX improvements:
- **Web UI Enhancements:** A large PR by Copilot introduced a TTS toggle, provider selector, and voice picker to Quick Settings ([PR #75479](https://github.com/openclaw/openclaw/pull/75479)). Additionally, server-side microphone dictation was added to Control UI ([PR #76021](https://github.com/openclaw/openclaw/pull/76021)).
- **Performance Fixes:** To address severe CPU and latency issues, PRs like `perf(routing): reuse evaluated bindings cache` ([PR #74084](https://github.com/openclaw/openclaw/pull/74084)) and `fix: reduce WebUI session latency churn` ([PR #76277](https://github.com/openclaw/openclaw/pull/76277)) were actively updated.
- **Session Stability:** Advanced work was done on main session durable delivery ([PR #75280](https://github.com/openclaw/openclaw/pull/75280)) and ingesting CLI turns into the context engine to prevent blank compaction no-ops ([PR #76279](https://github.com/openclaw/openclaw/pull/76279)).
- **Tooling & Auth:** Auth profile pruning was introduced via `models auth clean` ([PR #66911](https://github.com/openclaw/openclaw/pull/66911)), and fixes for OAuth token race conditions with Claude Code CLI were proposed ([PR #74004](https://github.com/openclaw/openclaw/pull/74004)).

## 4. Community Hot Topics
The community is highly vocal about system stability, cost management, and expanding integration capabilities:
- **Critical Performance Regressions:** The most urgent discussions revolve around gateway CPU pinning at 100% and massive event loop delays (e.g., [Issue #76123](https://github.com/openclaw/openclaw/issues/76123) with 11 comments / 7 👍, and [Issue #75707](https://github.com/openclaw/openclaw/issues/75707) with 10 comments / 5 👍).
- **Community Ecosystem:** Users are highly interested in expanding OpenClaw's capabilities. [Issue #50090](https://github.com/openclaw/openclaw/issues/50090) (14 comments) discusses bridging the gap between the promise of `SKILL.md` and the reality of the ClawHub ecosystem.
- **Rich Channel Integrations:** There is strong demand for Slack Block Kit support ([Issue #12602](https://github.com/openclaw/openclaw/issues/12602) - 13 comments) to enable richer CRM summaries and interactive database query results.
- **Cost Control & Safety:** Users are frustrated by silent flips in model reasoning defaults that double Anthropic spend ([Issue #73182](https://github.com/openclaw/openclaw/issues/73182)) and are actively requesting hard-gate enforcement hooks to mechanically prevent policy violations ([Issue #13583](https://github.com/openclaw/openclaw/issues/13583) - 10 comments).

## 5. Bugs & Stability
The system is currently suffering from acute stability and performance bugs, primarily regressions introduced in the `v4.27` to `v4.29` window:
1. **Severe CPU & Event Loop Blocking (Critical):** Dispatch prep stages take ~73s of synchronous CPU work, blocking the event loop ([Issue #75999](https://github.com/openclaw/openclaw/issues/75999)). Gateway CPU pins at 100-130% idle ([Issue #75707](https://github.com/openclaw/openclaw/issues/75707)). Fix efforts are visible in [PR #73841](https://github.com/openclaw/openclaw/pull/73841) and [PR #76278](https://github.com/openclaw/openclaw/pull/76278).
2. **Latency & Timeout Regressions (High):** Request latency spiked by 43% in v4.29 ([Issue #76123](https://github.com/openclaw/openclaw/issues/76123)), with some users reporting timeouts and endless reconnects ([Issue #75944](https://github.com/openclaw/openclaw/issues/75944) - 5 comments / 4 👍). 
3. **Setup & Installation Stalls (High):** Clean installs/upgrades are reportedly taking over 2 hours or completely failing in `v4.29` ([Issue #76042](https://github.com/openclaw/openclaw/issues/76042)).
4. **Client CPU Busy-Loops (Medium):** The local TUI client consumes 89-99% CPU at idle ([Issue #75137](https://github.com/openclaw/openclaw/issues/75137)).
5. **Cloud Provider Regressions (Medium):** Windows/Docker setups are experiencing HTTP/WS dispatch deadlocks ([Issue #73874](https://github.com/openclaw/openclaw/issues/73874)).

## 6. Feature Requests & Roadmap Signals
Based on active issues and PR movement, future versions will likely focus on:
- **Advanced Session Management:** Requests for session snapshots (`/session save|load`) to allow A/B testing and rollback ([Issue #13700](https://github.com/openclaw/openclaw/issues/13700)) and standardized backup/restore utilities for config and cron jobs ([Issue #13616](https://github.com/openclaw/openclaw/issues/13616)). 
- **Multi-Platform Web Search:** Native `web_search` passthrough for Google (Gemini) and ZAI (GLM) is actively requested ([Issue #17925](https://github.com/openclaw/openclaw/issues/17925) - 5 👍).
- **Granular Command Safety:** Introduction of denylists for `exec-approvals` to block specific dangerous commands while allowing all others ([Issue #6615](https://github.com/openclaw/openclaw/issues/6615) - 7 👍).
- **Microsoft Teams Multi-Bot Support:** Requests to support multiple Teams bots on a single gateway instance ([Issue #71058](https://github.com/openclaw/openclaw/issues/71058)).

## 7. User Feedback Summary
Operators are expressing high frustration regarding recent regressions, specifically calling out the reliability of the gateway on low-power Proxmox environments and Windows servers. Trust is currently eroded due to silent reasoning defaults inflating API bills and cron sessions hallucinating outputs instead of failing cleanly when tools error ([Issue #49876](https://github.com/openclaw/openclaw/issues/49876)). On the positive side, users remain deeply invested in the OpenClaw ecosystem, heavily utilizing advanced configurations like subagents, the context engine, and multi-channel routing (Telegram, Slack, iMessage, Feishu), showing strong enterprise/studio adoption.

## 8. Backlog Watch
Several crucial issues and PRs are languishing and require immediate core-team attention to prevent user churn:
- **Performance:** Core plugin prep stages taking 11+ seconds ([Issue #75290](https://github.com/openclaw/openclaw/issues/75290)) and gateway startup taking 4 minutes due to blocking hooks ([Issue #61278](https://github.com/openclaw/openclaw/issues/61278) - 11 comments).
- **Database/Context Degradation:** Memory sync utilizing a highly inefficient full delete-reinsert pattern ([Issue #40919](https://github.com/openclaw/openclaw/issues/40919)) and overflow recovery duplicating `role=user` messages in JSONL files ([Issue #66443](https://github.com/openclaw/openclaw/issues/66443)).
- **Long-standing Channel Issues:** Feishu channel config validation failures ([Issue #63101](https://github.com/openclaw/openclaw/issues/63101) - 10 comments) and Mattermost slash commands returning 503 errors ([Issue #68113](https://github.com/openclaw/openclaw/issues/68113) - 10 comments) have been open for weeks without resolution.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report for the AI agent and personal AI assistant open-source ecosystem based on the May 3, 2026 community digests.

### 1. Ecosystem Overview
The open-source AI agent and personal assistant ecosystem is currently characterized by rapid architectural iteration and a strong push toward production readiness. Projects are uniformly navigating the complexities of integrating diverse, cutting-edge LLM providers—especially those offering new "reasoning" and "thinking" models—while aggressively patching gateway stability and event-loop bottlenecks. There is a pronounced, ecosystem-wide shift from simple chat interfaces toward complex, multi-channel, and multi-modal autonomous systems. Consequently, maintainers across the board are struggling to triage massive influxes of community feedback, highlighting both the intense global demand for these tools and the operational scaling challenges facing open-source core teams.

### 2. Activity Comparison

| Project | Issues (Updated / Closed) | PRs (Updated / Merged) | Release Status (May 3) | Health Score / Status |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 / 35 | 500 / 33 | `v2026.5.2-beta.2` | **Strained** (Massive backlog, severe perf regressions) |
| **NullClaw** | 7 / 4 | ~40 / 37 | None | **Excellent** (High velocity, rapid bug resolution) |
| **IronClaw** | 20 / ~3 | 43 / 7 | None (v0.26.0 latest) | **Active/Healthy** (Heavy architectural iteration) |
| **ZeroClaw** | 50 / 2 | 39 / 8 | Staging v0.7.5/v0.8.0 | **Bottlenecked** (High intake, low closure rate) |
| **NanoClaw** | 11 / 2 | 16 / 8 | None | **Excellent** (Rapid community-driven patching) |
| **Hermes Agent**| 50 / ~1 | 50 / 4 | None | **Bottlenecked** (High intake, security PRs stalling) |
| **CoPaw** | 14 / 0 | 6 / 0 | None | **Stalled** (High activity, zero resolutions today) |
| **PicoClaw** | 6 / ~2 | 4 / 4 | `v0.2.8-nightly` | **Healthy** (Steady iteration, good bug closure) |
| **NanoBot** | 5 / 0 | 20 / 8 | None | **Healthy** (Strong core infrastructure focus) |
| **Moltis** | 5 / 1 | 4 / 2 | None | **Healthy** (Stable, focused on UX and i18n) |
| **LobsterAI** | 0 / 0 | 4 / 0 | None | **Stale** (Updates, but no merges/closures) |
| **TinyClaw** | 0 / 0 | 0 / 0 | None | **Dormant** |

### 3. OpenClaw's Position
*   **Advantages vs. Peers:** OpenClaw remains the undisputed core reference implementation with by far the largest volume of community interaction (500+ issues and PRs daily). Its ecosystem of multi-channel routing (Telegram, Slack, iMessage, Feishu) and advanced context engine configurations is vastly superior to smaller projects, making it the de facto choice for complex enterprise/studio deployments.
*   **Technical Approach Differences:** Unlike lightweight frameworks (like NullClaw or NanoClaw) that prioritize minimal overhead, OpenClaw relies on a heavy, plugin-driven gateway architecture (evidenced by Node/npm package cutoffs and CLI compaction issues). 
*   **Community Size & Risks:** While its community dwarfs others, OpenClaw is currently a victim of its own scale. With 465 open issues and only 35 closures, it is experiencing severe maintainer bottlenecks. Acute CPU pinning and latency regressions in `v4.29` are actively eroding user trust, a stark contrast to the highly stable, rapid patching seen in NanoClaw and NullClaw.

### 4. Shared Technical Focus Areas
*   **Handling "Thinking/Reasoning" Models:** Almost every project is struggling to correctly parse streaming tokens for models like DeepSeek R1/V4, Claude Opus, and OpenAI derivatives. Specific issues exist in **NanoBot, PicoClaw, CoPaw, Moltis**, and **ZeroClaw** where `reasoning_content` is dropped, causes API 400 errors, or bloats context windows.
*   **Strict JSON Schemas & MCP Friction:** Integrating the Model Context Protocol (MCP) and strict tool-calling is causing HTTP 400 failures across diverse providers (Gemini, MiniMax). **PicoClaw, IronClaw**, and **CoPaw** users are actively reporting friction with complex `$ref` schemas and provider validation.
*   **Multi-Platform Authentication:** Standardizing identity across platforms is a universal pain point. **Hermes Agent, PicoClaw**, and **ZeroClaw** are actively dealing with broken OAuth token handling, WhatsApp LID resolution, and expired Google/Microsoft tokens.
*   **Cost/Token Efficiency:** Users are aggressively seeking ways to curb API costs. **OpenClaw** users are frustrated by silent reasoning defaults doubling bills; **NanoClaw** and **CoPaw** users are requesting dynamic context window sizing and model fallback chains to optimize token usage.

### 5. Differentiation Analysis
*   **Architecture & Runtimes:** Projects are diverging based on execution environments. **NullClaw** is uniquely targeting low-level, edge-friendly deployments by migrating to Zig (removing curl subprocesses entirely). **ZeroClaw** and **IronClaw** are leaning into WebAssembly (WASM) for safe, sandboxed execution kernels. Conversely, **OpenClaw** and **CoPaw** remain firmly in high-level Node.js/Python territories.
*   **Target Users:** **OpenClaw** and **Hermes Agent** target enterprise users needing complex multi-channel routing (Slack Block Kit, MS Teams, CRM integrations). **NullClaw** and **PicoClaw** cater to self-hosters and hardware hackers (e.g., Termux, Raspberry Pi 5). **IronClaw** is distinctly targeting financial/autonomous use cases with deterministic backtesting for NEAR Intents trading.
*   **Security Postures:** **NullClaw** is differentiating with a 3-tier risk classification for tool execution, whereas **Hermes Agent** is focused heavily on P0/P1 cross-chat authorization to prevent unauthorized gateway access.

### 6. Community Momentum & Maturity
*   **Tier 1: Rapid Iterators (High Velocity, High Health):** **NullClaw, NanoClaw,** and **NanoBot**. These projects demonstrate healthy ratios of community reporting to maintainer merges. They are swiftly closing critical bugs (e.g., NullClaw's 37 merged PRs) and stabilizing core infrastructure.
*   **Tier 2: Heavy Architects (High Activity, Transitioning):** **OpenClaw, Hermes Agent, ZeroClaw,** and **IronClaw**. These projects have immense community momentum but are weighed down by massive open backlogs and sprawling architectural rewrites (e.g., ZeroClaw's V3 config, IronClaw's "Reborn" initiative). They risk contributor fatigue if triage bottlenecks are not addressed.
*   **Tier 3: Stable Maturers:** **PicoClaw** and **Moltis**. These projects are steadily patching bugs, expanding i18n, and supporting new models without drastic architectural upheaval.
*   **Tier 4: Stalled/Dormant:** **CoPaw, LobsterAI,** and **TinyClaw**. **CoPaw** saw 14 active issues but zero merges today, indicating a potential maintainer absence or weekend lull.

### 7. Trend Signals
*   **The Rise of the "Microkernel" Agent:** To combat event-loop blocking (as seen in OpenClaw), the industry is shifting toward asynchronous, concurrent agent loops. **ZeroClaw's** WASM microkernel approach and **NullClaw's** turn-preemption daemon indicate that future agents will isolate tool execution from the main gateway thread.
*   **Multi-Agent Memory & "Dreaming":** Developers are realizing that simple context windows are insufficient for long-term autonomy. **ZeroClaw's** proposed "Dream Mode" for memory consolidation and **OpenClaw's** session snapshot requests signal an industry push toward persistent, self-evaluative agent memory systems.
*   **Demand for High-Availability Fallbacks:** As agents move into production, developers are demanding fail-safes. Feature requests in **CoPaw** (model fallback chains), **NanoBot** (dynamic timeouts), and **Moltis** (remote sandboxes) show a clear trend toward building self-healing, resilient autonomous pipelines rather than single-point-of-failure chat wrappers.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-03

## 1. Today's Overview
NanoBot experienced a highly active development day, processing 20 pull requests (8 merged/closed) and 5 issues. The merged PRs signal a strong focus on hardening the agent's core infrastructure—addressing context management, memory resilience, DeepSeek API compatibility, and command execution security. The high ratio of open PRs (12) indicates a healthy influx of community contributions, ranging from Discord interactive components to local Whisper transcription support. No new software releases were cut today, but the volume of merged fixes and features suggests a release may be on the horizon.

## 2. Releases
No new releases were published today.

## 3. Project Progress
Significant architectural improvements and bug fixes landed in the main branch today. Key merged PRs include:
*   **DeepSeek Reasoning Fix ([PR #3419](https://github.com/HKUDS/nanobot/pull/3419)):** Fixed a critical 400 API error with DeepSeek models by preserving `reasoning_content` during message history enforcement.
*   **Context Window Protection ([PR #3414](https://github.com/HKUDS/nanobot/pull/3414)):** Capped the "Recent History" section in the system prompt at 32K characters to prevent bloating and unexpected token limit errors.
*   **Memory Resilience ([PR #3247](https://github.com/HKUDS/nanobot/pull/3247)):** Added a fallback mechanism for the `/new` archive command so that LLM failures (e.g., provider rate limits) don't cause silent data loss.
*   **Exec Security & Configuration ([PR #3594](https://github.com/HKUDS/nanobot/pull/3594)):** Fixed the `ExecTool` sandbox logic so that user-defined `allow_patterns` now properly override `deny_patterns`.
*   **Instance Management ([PR #3456](https://github.com/HKUDS/nanobot/pull/3456)):** Introduced a `create-instance` built-in skill and a remote backend for WebUI, allowing agents to spin up new bot instances dynamically.
*   **CLI/UX & Channel Updates ([PR #2218](https://github.com/HKUDS/nanobot/pull/2218), [PR #3176](https://github.com/HKUDS/nanobot/pull/3176), [PR #2010](https://github.com/HKUDS/nanobot/pull/2010)):** Added `{env:VAR}` syntax for secure config secrets, implemented thread-scoped sessions for Feishu, and added media support for WhatsApp.

## 4. Community Hot Topics
*   **DeepSeek API Validation ([Issue #3584](https://github.com/HKUDS/nanobot/issues/3584)):** A user identified and provided a patch for strict API validation errors occurring with recent DeepSeek models. This highlights the ongoing community need for robust handling of varied third-party LLM provider schemas.
*   **Xiaomi Model Integration ([Issue #3518](https://github.com/HKUDS/nanobot/issues/3518)):** The most discussed issue (3 comments) is a request to support Xiaomi's new MiMo models, indicating growing user interest in diversifying NanoBot's supported LLM providers beyond the standard OpenAI/Anthropic ecosystem.
*   **Plugin Architecture Evolution ([PR #3564](https://github.com/HKUDS/nanobot/pull/3564)):** A community PR proposing a new `HookCenter` typed-event system to replace the older method-override pattern. This is a major architectural discussion aiming to make NanoBot more extensible for third-party plugin developers.

## 5. Bugs & Stability
*   **Critical: Workspace/File System Confusion ([Issue #3597](https://github.com/HKUDS/nanobot/issues/3597)):** The agent failed to save a file to the workspace root, resulting in an inability to complete autonomous tasks. (No fix PR yet; requires attention).
*   **High: Xiaomi MiMo Reasoning Failure ([Issue #3585](https://github.com/HKUDS/nanobot/issues/3585)):** Setting `reasoning_effort: null` fails to disable thinking on Xiaomi models. *A corresponding fix PR is already open ([PR #3587](https://github.com/HKUDS/nanobot/pull/3587)).*
*   **Medium: Public Deploy Footguns ([PR #3492](https://github.com/HKUDS/nanobot/pull/3492)):** Highlights severe security risks when deploying via reverse proxies (Cloudflare/ngrok) where bootstrap tokens could be leaked. A hardening fix is currently under review.

## 6. Feature Requests & Roadmap Signals
Today's open PRs and issues reveal a clear trajectory toward **flexible timeouts, interactive UIs, and self-hosting capabilities**:
*   **Dynamic Timeouts ([Issue #3595](https://github.com/HKUDS/nanobot/issues/3595) / [PR #3596](https://github.com/HKUDS/nanobot/pull/3596)):** Users are running time-consuming local scripts (downloads, automation). The hardcoded 600s cap is being replaced with activity-aware timeout controls, likely landing in the next release.
*   **Rich Channel UIs ([PR #3589](https://github.com/HKUDS/nanobot/pull/3589)):** Interactive components (buttons, modals) for Discord are actively being developed, signaling a shift from text-only bot responses to app-like interfaces.
*   **Local Audio Processing ([PR #3513](https://github.com/HKUDS/nanobot/pull/3513), [PR #3588](https://github.com/HKUDS/nanobot/pull/3588)):** Strong push towards supporting local Whisper servers for voice transcription, appealing to privacy-focused users.

## 7. User Feedback Summary
Users are pushing NanoBot into production environments but are encountering friction with **sandbox constraints and memory reliability**. Specifically:
*   **Use Case:** Users are actively trying to use NanoBot for recurring automated tasks (e.g., drafting and saving daily social media posts). The file-access bug ([Issue #3597](https://github.com/HKUDS/nanobot/issues/3597)) shows this workflow is currently fragile.
*   **Pain Point:** Strict hardcoded limits (like the 600s timeout) frustrate power users attempting complex automation.
*   **Satisfaction:** The community is highly engaged in solving its own problems, as seen by the detailed root-cause analysis and patches provided in [Issue #3584](https://github.com/HKUDS/nanobot/issues/3584) and [Issue #3585](https://github.com/HKUDS/nanobot/issues/3585).

## 8. Backlog Watch
*   **WebUI UX & Streaming ([PR #3583](https://github.com/HKUDS/nanobot/pull/3583)):** Tagged as WIP, this PR aims to fix chat isolation and streaming states in the beta WebUI. Maintainer review is needed to stabilize the frontend experience.
*   **Security Hardening ([PR #3492](https://github.com/HKUDS/nanobot/pull/3492)):** Open since late April, this addresses critical security flaws for public-facing deployments. This should be prioritized before the next major release to prevent user breaches.
*   **Audio Transcription Rework ([PR #3513](https://github.com/HKUDS/nanobot/pull/3513)):** A large structural PR that unifies voice providers. Needs maintainer bandwidth to review and merge, as it closes significant gaps in multi-modal capabilities.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-03

## 1. Today's Overview
Hermes Agent is experiencing a period of extremely high iterative activity, primarily driven by active community issue reporting and a substantial backlog of open Pull Requests. Over the past 24 hours, the project saw 50 issues updated (with 49 remaining open) and 50 PRs updated (46 open, 4 merged/closed). The overwhelming ratio of open issues and PRs to closed ones suggests that while community engagement and external contributions are very high, the core maintainer team may currently be bottlenecked on code reviews and issue triage. There were no new stable releases today, but the pipeline is packed with significant feature expansions, provider integrations, and critical security fixes awaiting merge.

## 2. Releases
**No new releases were published today.** The latest merged code remains in the main development branch, with several open PRs currently serving as the de-facto staging ground for the next version.

## 3. Project Progress
While the majority of today's activity revolves around new bug reports and existing PR discussions, **4 PRs were successfully merged/closed** in the last 24 hours. Key progress includes:
*   **CLI Updates & Bug Fixes:** PR [#16414](https://github.com/NousResearch/hermes-agent/pull/16414) was verified and closed, fixing the `hermes update` branch restoration flow and stash mechanisms.
*   **Security Patching:** Significant progress is being made on gateway security. PR [#15307](https://github.com/NousResearch/hermes-agent/pull/15307) (P0/P1) and [#18125](https://github.com/NousResearch/hermes-agent/pull/18125) (P0) are actively being updated, representing a major architectural push to require authorization on Discord slash commands and mandate tracked approval for cross-chat messaging.
*   **New Integrations:** The community is driving expansion into the hardware and OS space, with PRs like [#9846](https://github.com/NousResearch/hermes-agent/pull/9846) pushing forward Termux compatibility, and [#10565](https://github.com/NousResearch/hermes-agent/pull/10565) advancing native Windows CMD/PowerShell installs.

## 4. Community Hot Topics
The most actively discussed items revolve around provider authentication, CLI stability, and agent architecture:
*   **Cache & Config Errors (8 Comments):** [Issue #6207](https://github.com/NousResearch/hermes-agent/issues/6207) highlights a persistent problem where stale `.pyc` caches crash the gateway after code updates. This points to a widespread friction point in self-updating local deployments.
*   **Google Gemini 429 Errors (6 Comments):** [Issue #15895](https://github.com/NousResearch/hermes-agent/issues/15895) indicates users hitting rate limits (HTTP 429) despite having valid quotas when using the Gemini CLI via OAuth.
*   **Anthropic OAuth Rejections (5 Comments):** [Issue #15080](https://github.com/NousResearch/hermes-agent/issues/15080) details a high-severity issue where Claude Max subscriptions with valid OAuth tokens are universally rejected (HTTP 400) by the native Anthropic API.
*   **Conversational Cron Jobs (6 Comments):** [Issue #2990](https://github.com/NousResearch/hermes-agent/issues/2990) is generating strong interest, proposing that cron jobs should trigger actual agent responses rather than just firing static broadcasts into messaging platforms like Telegram or Discord.

## 5. Bugs & Stability
Several high-severity bugs are currently impacting user stability, particularly concerning messaging gateways and local environments:
*   **P2 - Silent Failure on macOS Install:** [Issue #3000](https://github.com/NousResearch/hermes-agent/issues/3000). The `install.sh` script silently aborts on macOS if the `uv`-managed Python path contains spaces (e.g., in `~/Library/Application Support/...`).
*   **P1 - Telegram DM Failures:** [Issue #3206](https://github.com/NousResearch/hermes-agent/issues/3206). Replies in non-forum Telegram DMs attach a spurious `thread_id`, causing the gateway to fail with 'Message thread not found'.
*   **P2 - WhatsApp LID Auth Failure:** [Issue #2991](https://github.com/NousResearch/hermes-agent/issues/2991). The gateway fails to resolve WhatsApp Linked Identity Device (LID) formats to phone numbers, incorrectly rejecting authorized users. No active fix PR is linked yet.
*   **P1 - Tool Invocation Failure:** [Issue #2936](https://github.com/NousResearch/hermes-agent/issues/2936). Hermes-4 models hallucinate tool outputs instead of executing them when operating via the Telegram gateway.
*   **P3 - Termux TUI Refresh:** [Issue #18390](https://github.com/NousResearch/hermes-agent/issues/18390). Agent responses disappear in Termux when the keyboard is closed or the app is backgrounded.
*   **P1 - Plan Command Crash (Fix Merged):** [Issue #16248](https://github.com/NousResearch/hermes-agent/issues/16248). Using `/plan` with long text caused a crash due to filename length limits. *Status: Closed/Fixed.*

## 6. Feature Requests & Roadmap Signals
The open PR pool reveals a clear roadmap trajectory focused on enterprise features, tool routing, and accessibility:
*   **Advanced Tool Routing:** PR [#2913](https://github.com/NousResearch/hermes-agent/pull/2913) introduces `tiny-router` for per-turn routing, dynamic policy adjustment, and smarter approval routing.
*   **ACP & IDE Integration:** Users are pushing for deeper AI Coding Protocol integration. [Issue #18326](https://github.com/NousResearch/hermes-agent/issues/18326) requests dynamic `reasoning_effort` control for ACP mode, while [Issue #18333](https://github.com/NousResearch/hermes-agent/issues/18333) requests custom model list files for ACP.
*   **Agent Memory & Caching:** [Issue #2918](https://github.com/NousResearch/hermes-agent/issues/2918) proposes tool result caching for read-only tools to save API credits and reduce latency.
*   **Native Payments:** [Issue #2919](https://github.com/NousResearch/hermes-agent/issues/2919) proposes native x402/agentpay-mcp execution, allowing the agent to autonomously handle API micro-transactions.

## 7. User Feedback Summary
**User Pain Points:**
*   **Local Environment Friction:** Users running local CLI setups on macOS, Termux, and Windows (without WSL) are experiencing silent crashes, broken updates, and TUI bugs. 
*   **Provider Auth Complexities:** There is a distinct frustration surrounding OAuth token handling, particularly with Anthropic and Google Gemini CLI integrations, where valid local tokens are frequently rejected or misinterpreted.
*   **Kanban & Task Delegation Confusion:** Users utilizing Hermes for complex task management are hindered by Kanban tools not appearing for orchestrator profiles ([Issue #18968](https://github.com/NousResearch/hermes-agent/issues/18968)) and config changes requiring full process restarts ([Issue #18946](https://github.com/NousResearch/hermes-agent/issues/18946)).

**User Satisfaction:**
*   The community is highly engaged in expanding Hermes's capabilities. The number of feature-rich PRs submitted by non-maintainers (e.g., Xiaomi TTS provider, Slack Block Kit rendering, Windows installer) indicates a healthy, technically capable, and invested user base that actively codes solutions for the project.

## 8. Backlog Watch
Several critical issues and complex PRs appear stalled and urgently require maintainer triage:
*   **Stale Security PRs (P0/P1):** PR [#15307](https://github.com/NousResearch/hermes-agent/pull/15307) (Cross-chat approval) and PR [#18125](https://github.com/NousResearch/hermes-agent/pull/18125) (Discord slash command auth) are high-priority security fixes that have been open for several days and must be merged to prevent unauthorized gateway access.
*   **Docker Stability:** [Issue #18935](https://github.com/NousResearch/hermes-agent/issues/18935) (HTTP 500 on gateway.lock) and [Issue #18966](https://github.com/NousResearch/hermes-agent/issues/18966) (Extended build times) are severely impacting users deploying Hermes via Docker.
*   **Long-standing P2 Bugs:** [Issue #2914](https://github.com/NousResearch/hermes-agent/issues/2914) (Silent SQLite failure locking session search) and [Issue #3014](https://github.com/NousResearch/hermes-agent/issues/3014) (OpenCode model routing regression) have been open since March 2026 and continue to attract user comments without core resolution.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-03

## 1. Today's Overview
PicoClaw maintains a healthy and highly active development cadence, merging 4 pull requests and triaging 6 active issues in the last 24 hours. The project is currently iterating heavily on provider compatibility, specifically addressing the nuances of reasoning models (DeepSeek, OpenRouter) and standardizing multi-channel outputs (Telegram). The release of the `v0.2.8-nightly` build indicates that the team is actively staging recent fixes for an upcoming stable release. Overall, the project shows strong responsiveness to community-reported bugs and a steady march toward broader LLM provider and channel support.

## 2. Releases
- **[nightly: Nightly Build](https://github.com/sipeed/picoclaw/releases/tag/nightly)**: `v0.2.8-nightly.20260502.6e1fab80`
  - **Details**: Automated nightly build cutting from the `main` branch.
  - **Breaking Changes / Migration Notes**: None explicitly stated in the release payload, but users should be aware of ongoing provider-level changes to reasoning model handling being introduced in recent PRs. Standard nightly instability warnings apply.

## 3. Project Progress
Four PRs were merged/closed today, highlighting a strong focus on fixing provider-specific edge cases and UI/channel formatting:
- **DeepSeek Proxied Routing Fixed**: [PR #2743](https://github.com/sipeed/picoclaw/pull/2743) resolved an issue where DeepSeek models routed through third-party proxies (like opencode.ai) weren't triggering DeepSeek-specific reasoning logic.
- **Telegram Table Formatting**: [PR #2739](https://github.com/sipeed/picoclaw/pull/2739) merged a fix to automatically wrap Markdown pipe tables in fenced code blocks to prevent rendering bugs in Telegram's MarkdownV2 parser.
- **OpenRouter Documentation**: [PR #2746](https://github.com/sipeed/picoclaw/pull/2746) closed after adding necessary documentation and presets for suppressing unwanted reasoning text from OpenRouter models.
- **Community Management**: [PR #2747](https://github.com/sipeed/picoclaw/pull/2747) updated the WeChat group QR code.

## 4. Community Hot Topics
The most actively discussed items center around enterprise authentication and complex MCP (Model Context Protocol) integrations:
- **MCP OAuth Support**: [Issue #2546](https://github.com/sipeed/picoclaw/issues/2546) (3 comments) is generating significant interest. Users are requesting a no-code dashboard experience to add OAuth 2.1 + PKCE protected MCP servers, mirroring the UX of commercial platforms like Claude.ai.
- **Native Email Channel**: [Issue #2421](https://github.com/sipeed/picoclaw/issues/2421) (4 comments) continues to see traction. The community is advocating for an official email channel to support corporate, scientific, and offline-first environments.
- **Complex JSON Schemas in MCP**: [Issue #2668](https://github.com/sipeed/picoclaw/issues/2668) (1 comment, 1 👍) highlights a critical friction point where advanced MCP tool definitions (using `$ref`, `anyOf`) cause HTTP 400 errors on strict providers like Google Gemini.

## 5. Bugs & Stability
Several high-priority bugs were reported or actively addressed today, primarily围绕围绕 around gateway stability and LLM provider parsing:
1. **Gateway Crash Loop**: [Issue #2720](https://github.com/sipeed/picoclaw/issues/2720) *(High Priority)*. A stale PID file causes the PicoClaw gateway to crash on startup if the PID has been reassigned to an unrelated system process (e.g., `systemd-resolved`). No fix PR is listed yet.
2. **DeepSeek Streaming Drops "Thinking" Tokens**: [PR #2740](https://github.com/sipeed/picoclaw/pull/2740) (Open). Addresses a parser bug where DeepSeek's `reasoning_content` was silently dropped during streaming.
3. **OpenRouter Reasoning Leak**: [Issue #2745](https://github.com/sipeed/picoclaw/issues/2745). Newly reported bug where reasoning preambles are leaked directly into the assistant content for models like Nemotron via OpenRouter. (Documentation workaround was merged today in PR #2746, but an upstream or code-level parsing fix may be required).
4. **Anthropic Model ID Bug**: [Issue #2665](https://github.com/sipeed/picoclaw/issues/2665). The UI dropdown uses dots (`claude-sonnet-4.6`) instead of the dashes required by the API (`claude-sonnet-4-6`), causing API rejections.

## 6. Feature Requests & Roadmap Signals
Based on open PRs and issues, clear roadmap signals are emerging for v0.2.8 and beyond:
- **Expanding Provider Roster**: The open [PR #2260](https://github.com/sipeed/picoclaw/pull/2260) indicates imminent native-style support for Elon Musk's **xAI** models via the OpenAI-compatible pathway.
- **Reasoning Model Standardization**: The project is heavily investing in ensuring "thinking/reasoning" models (DeepSeek, OpenRouter, etc.) have their internal monologues properly captured and hidden from the end-user. 
- **Enterprise Readiness**: The push for OAuth 2.1/PKCE ([Issue #2546](https://github.com/sipeed/picoclaw/issues/2546)) and native Email channels ([Issue #2421](https://github.com/sipeed/picoclaw/issues/2421)) suggests the community is pushing PicoClaw deeper into enterprise and self-hosted workflows.

## 7. User Feedback Summary
Users are actively deploying PicoClaw in complex, multi-provider setups but are experiencing friction with strict API validations. The bug reports regarding Anthropic dots vs. dashes and Gemini's rejection of complex `$ref` JSON schemas indicate that users are heavily utilizing advanced tool-calling features. Furthermore, the need for proxies ([PR #2743](https://github.com/sipeed/picoclaw/pull/2743)) shows a sophisticated user base that relies on API aggregators or custom routing. Overall satisfaction remains high, but users clearly desire a more robust UI (full datetimes in [PR #2630](https://github.com/sipeed/picoclaw/pull/2630)) and seamless channel integrations without Markdown rendering bugs.

## 8. Backlog Watch
Several significant contributions and issues have gone stale and require core maintainer attention:
- **Google Antigravity OAuth Scopes**: [PR #2163](https://github.com/sipeed/picoclaw/pull/2163) (Open since March 29). A critical fix for Google Cloud Code Assist tokens expiring and throwing `PERMISSION_DENIED` errors. This needs a review to ensure enterprise Google integrations remain stable.
- **Web Chat UI Datetime**: [PR #2630](https://github.com/sipeed/picoclaw/pull/2630) (Open since April 23). A UI improvement to display full datetimes in the web client.
- **xAI Provider Support**: [PR #2260](https://github.com/sipeed/picoclaw/pull/2260) (Open since April 2). A fully featured PR adding xAI compatibility that appears ready for maintainer review.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-03

## 1. Today's Overview
NanoClaw experienced a highly active day with significant community engagement, processing 11 issues (9 open) and 16 pull requests (8 merged/closed). The day was characterized by rapid bug reporting and immediate community-driven patches, indicating a highly responsive and healthy open-source ecosystem. Most of the activity focused on core infrastructure reliability—specifically database handling and routing—and advancing new channel adapters. The project currently has no new official releases, but the volume of closed PRs suggests a patch release may be imminent.

## 2. Releases
No new releases were recorded today.

## 3. Project Progress
Today saw 8 pull requests merged or closed, representing solid progress in core system stability and developer experience:
*   **Core Bug Fixes:** PR [#2183](https://github.com/qwibitai/nanoclaw/pull/2183) fixed a critical host-sweep crash where the outbound database was incorrectly opened in read-only mode during orphan claim cleanup. PR [#2181](https://github.com/qwibitai/nanoclaw/pull/2181) resolved an issue where slash commands silently failed on warm containers.
*   **Platform Support:** PR [#2179](https://github.com/qwibitai/nanoclaw/pull/2179) fixed a 400 error with OneCLI agent identifiers by sanitizing underscores to hyphens. PR [#2190](https://github.com/qwibitai/nanoclaw/pull/2190) fixed an Atom feed parsing crash for YouTube integrations.
*   **Major Merges:** The experimental v1 to v2 setup migration flow ([#1931](https://github.com/qwibitai/nanoclaw/pull/1931)) and a comprehensive package of 10 operational fixes ([#2178](https://github.com/qwibitai/nanoclaw/pull/2178)) were closed, marking significant maturation of the platform's operational tooling.
*   **Active Developments:** Long-running PRs like the Matrix E2EE channel ([#1624](https://github.com/qwibitai/nanoclaw/pull/1624)), Webchat skill ([#2069](https://github.com/qwibitai/nanoclaw/pull/2069)), and Home Assistant MCP integration ([#1327](https://github.com/qwibitai/nanoclaw/pull/1327)) saw updates, signaling active integration work.

## 4. Community Hot Topics
*   **Multi-Platform Routing & Identifiers:** A recurring theme today involved platform identification breaking due to prefixes or unsupported characters. This was highlighted in Issue [#2186](https://github.com/qwibitai/nanoclaw/issues/2186) (CLI channel routing failure) and Issue [#2193](https://github.com/qwibitai/nanoclaw/issues/2193) (WhatsApp prefix causing silent routing failures). The underlying need is for a more unified, robust ID normalization strategy across all adapters.
*   **Token Efficiency:** Issue [#2189](https://github.com/qwibitai/nanoclaw/issues/2189) raised a highly relevant concern regarding LLM token bloat. The user highlighted that token inefficiency not only increases costs but also degrades non-coding agent performance.
*   **Local Memory Loading:** Issue [#2185](https://github.com/qwibitai/nanoclaw/issues/2185) pointed out that `CLAUDE.local.md` isn't being imported during composition, meaning per-group memory is being dropped, fundamentally limiting the SDK's agent context capabilities.

## 5. Bugs & Stability
Several high-severity bugs were reported today, but the community response was exceptionally swift:
1.  **Critical - Database Lock / Data Loss:** Issue [#2188](https://github.com/qwibitai/nanoclaw/issues/2188) (and duplicate [#2196](https://github.com/qwibitai/nanoclaw/issues/2196)) reported crashes on every host-sweep tick due to read-only database constraints, stalling sessions. *(Fixed immediately by PR [#2183](https://github.com/qwibitai/nanoclaw/pull/2183))*.
2.  **High - State / Memory Loss:** Issue [#2194](https://github.com/qwibitai/nanoclaw/issues/2194) noted WhatsApp LID-to-phone mappings are not persisted across restarts, causing message routing failures. Issue [#2185](https://github.com/qwibitai/nanoclaw/issues/2185) highlighted a regression where local agent memory was failing to load.
3.  **Medium - Authentication & Scripts:** Issue [#2046](https://github.com/qwibitai/nanoclaw/issues/2046) (/OneCLI 400 errors on container spawn) was closed today after PR [#2179](https://github.com/qwibitai/nanoclaw/pull/2179) provided a fix. Additionally, Issue [#2191](https://github.com/qwibitai/nanoclaw/issues/2191) flagged that migration scripts fail with a misleading error if the host lacks the `sqlite3` CLI binary.

## 6. Feature Requests & Roadmap Signals
*   **Multi-Account Support:** A request in Issue [#2195](https://github.com/qwibitai/nanoclaw/issues/2195) asked for multi-account Gmail support, noting the current OneCLI OAuth architecture assumes a single active connection per channel. This signals a need for a more robust multi-tenant or multi-account OAuth strategy.
*   **New Channel Adapters:** PR [#2192](https://github.com/qwibitai/nanoclaw/pull/2192) (DeltaChat) shows ongoing community interest in expanding privacy-focused communication channels.
*   **UI/UX Improvements:** Issue [#1017](https://github.com/qwibitai/nanoclaw/issues/1017) requested a UI tweak for repo-token badges. PR [#2198](https://github.com/qwibitai/nanoclaw/pull/2198) is already addressing this.

## 7. User Feedback Summary
Users are actively pushing NanoClaw into complex, real-world production environments (CRM integrations, multi-channel routing, Matrix, WhatsApp). While enthusiastic—evidenced by one user stating, *"Really enjoying playing with it"* ([#2189](https://github.com/qwibitai/nanoclaw/issues/2189))—they are hitting scaling friction points. Specifically, users operating multi-account setups or running continuous container sessions are exposing gaps in state persistence (in-memory routing maps) and platform-specific adapter assumptions. The promptness of user-submitted PRs (e.g., [#2187](https://github.com/qwibitai/nanoclaw/pull/2187)) shows a high level of technical capability within the user base.

## 8. Backlog Watch
*   **PR [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) (Matrix E2EE channel):** This is a massive and highly requested feature PR that has been open since early April. Given the ongoing routing issues discovered with WhatsApp/CLI today, merging this will require careful review of the platform ID namespacing.
*   **Issue [#1017](https://github.com/qwibitai/nanoclaw/issues/1017) (Badge Percentage):** A low-priority UI enhancement that has been open since mid-March. A PR ([#2198](https://github.com/qwibitai/nanoclaw/pull/2198)) was finally opened today and needs maintainer review.
*   **PR [#1327](https://github.com/qwibitai/nanoclaw/pull/1327) (Home Assistant Skill):** Open since March, this represents a key "smart home/AI agent" use case that is awaiting integration into the main branch.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-03

## 1. Today's Overview
NullClaw demonstrated exceptionally high development velocity over the past 24 hours, merging an impressive 37 pull requests while actively tracking 7 issues (3 open, 4 closed). The project is currently in a rigorous stabilization and hardening phase, heavily focused on fixing high-severity regressions introduced by a recent migration to Zig 0.16, particularly concerning its networking and gateway components. Simultaneously, maintainers are expanding NullClaw's architectural boundaries by introducing new REST Admin APIs, enhancing concurrency models, and tightening AI security boundaries. The high merge rate and targeted bug fixes indicate a healthy, highly active project pushing toward a major stability milestone.

## 2. Releases
No new releases were recorded today. Given the sheer volume of recent merges—particularly the critical networking and daemon fixes—this likely indicates that the project is accumulating changes for a consolidated beta or stable release tag in the near future.

## 3. Project Progress
Development over the last 24 hours was heavily concentrated on infrastructure reliability, API expansion, and security:

*   **Networking & Daemon Architecture:** Several foundational fixes landed to stabilize HTTP keep-alive clients and gateway CPU spinning ([PR #876](https://github.com/nullclaw/nullclaw/pull/876), [PR #873](https://github.com/nullclaw/nullclaw/pull/873)). The daemon's inbound handling was refactored from single-thread serial processing to bounded concurrent processing with turn preemption ([PR #855](https://github.com/nullclaw/nullclaw/pull/855)).
*   **REST Admin API:** A massive multi-part effort introducing a comprehensive REST Admin API for lightweight clients was merged. This includes runtime status/config endpoints ([PR #770](https://github.com/nullclaw/nullclaw/pull/770)), channel/skill management ([PR #771](https://github.com/nullclaw/nullclaw/pull/771)), and full config mutation/history/MCP endpoints ([PR #780](https://github.com/nullclaw/nullclaw/pull/780)).
*   **Security & Permissions:** Security was enhanced with a new 3-tier risk classification system separating network commands from destructive ones ([PR #875](https://github.com/nullclaw/nullclaw/pull/875)), alongside anti-spoofing boundaries for external web content ([PR #880](https://github.com/nullclaw/nullclaw/pull/880)).
*   **Multi-Modal & A2A:** Advanced AI interoperability took a step forward with multi-modal vision support for the A2A protocol ([PR #686](https://github.com/nullclaw/nullclaw/pull/686)).
*   **CLI & UX:** The `nullclaw capabilities` command received a major UX upgrade with colored, sorted tables ([PR #863](https://github.com/nullclaw/nullclaw/pull/863)), and leaked tool-call markup in the CLI was fixed ([PR #761](https://github.com/nullclaw/nullclaw/pull/761)).

## 4. Community Hot Topics
The most actively discussed items revolve around user friction with the CLI and agent framework limitations:

*   **Issue #832 ([enhancement] Concurrent/non blocking interactivity):** With 0 comments but significant implied interest, this issue highlights the struggle users face when AI agents run long tasks, locking the main thread. The prompt fulfillment of this via [PR #855](https://github.com/nullclaw/nullclaw/pull/855) shows highly responsive alignment between community needs and core development.
*   **Issue #820 ([documentation] How to install Zig on Debian?):** Generating 4 comments, users are experiencing friction simply installing the Zig toolchain on Debian without Docker. This indicates a need for better onboarding documentation for the target audience.
*   **Issue #865 ([bug] CLI shows ctrl characters for up/down/left/right keys) & Issue #851 ([bug] gateway: Busy-loop on accept4()):** Both generated 4 and 1 comments respectively, reflecting active troubleshooting between maintainers and users regarding terminal I/O handling and low-level system calls on ARM architectures.

## 5. Bugs & Stability
The project addressed several high-severity bugs today, primarily related to the Zig 0.16 migration:

1.  **Critical - Gateway CPU Spin:** The gateway process was hitting 100% CPU utilization on idle (specifically noted on Raspberry Pi 5 / aarch64) due to a busy-loop on `accept4()` returning `EAGAIN`. ([Issue #851](https://github.com/nullclaw/nullclaw/issues/851)). *Fix merged:* [PR #873](https://github.com/nullclaw/nullclaw/pull/873) and [PR #878](https://github.com/nullclaw/nullclaw/pull/878) (open).
2.  **Critical - Mattermost Empty Body POST:** Silent messaging failures occurred in Mattermost integrations because an allocating writer wasn't flushed before `curlPost` was called. ([Issue #849](https://github.com/nullclaw/nullclaw/issues/849)). *Fix merged:* [PR #877](https://github.com/nullclaw/nullclaw/pull/877).
3.  **Medium - Subagent Result Returns:** Subagents spawned via the spawn tool execute tasks (like writing files) but fail to return the result to the parent agent. ([Issue #849](https://github.com/nullclaw/nullclaw/issues/849)).
4.  **Medium - CLI Keybinding Breakage:** Native up/down/left/right keys display CTRL character garbage in the CLI. ([Issue #865](https://github.com/nullclaw/nullclaw/issues/865)).
5.  **Medium - HTTP/1.1 Keep-Alive Hangs:** Clients using keep-alive (like `curl`) caused the gateway to block infinitely on `readSliceShort`. *Fix merged:* [PR #876](https://github.com/nullclaw/nullclaw/pull/876).

## 6. Feature Requests & Roadmap Signals
Analysis of recent issues and PRs reveals clear trajectory signals for the project:

*   **Native HTTP De-escalation:** An open pull request aims to completely remove curl subprocesses from the runtime, replacing them with native `std.http` wrappers ([PR #881](https://github.com/nullclaw/nullclaw/pull/881)). This signals a massive upcoming shift toward a safer, single-binary, low-dependency architecture.
*   **CLI & Operator UX:** Requests for better formatted output ([Issue #860](https://github.com/nullclaw/nullclaw/issues/860)) have already been merged ([PR #863](https://github.com/nullclaw/nullclaw/pull/863)).
*   **Expanded Network Tool Access:** Users want to use tools like `curl` without triggering high-risk security blocks. The newly merged 3-tier risk classification ([PR #875](https://github.com/nullclaw/nullclaw/pull/875)) directly enables this, potentially setting the stage for more complex autonomous web interactions in the next release.

## 7. User Feedback Summary
Users are pushing NullClaw into production environments across diverse hardware (e.g., Raspberry Pi 5 running Debian trixie), leading to the discovery of low-level platform-specific I/O bugs. A major pain point is session blocking—users are frustrated by frameworks that cannot handle background tasks without freezing the interactive prompt. On the security side, users executing outbound web requests via allowlisted tools find the current binary "allow/deny" security model too rigid. Overall, users are engaging deeply with the tool's advanced features (subagents, tool spawning) but need better documentation for environment setup (Zig installation) and smoother CLI interactivity.

## 8. Backlog Watch
Maintainers should prioritize the following open items to maintain project momentum:

*   **[PR #881](https://github.com/nullclaw/nullclaw/pull/881) (refactor(http): remove runtime curl subprocesses):** As an open PR addressing a core architectural component, this requires careful review as it affects providers, channels, gateway, and tools.
*   **[Issue #865](https://github.com/nullclaw/nullclaw/issues/865) (CLI shows ctrl characters):** A seemingly open bug that severely degrades the CLI user experience and likely needs an immediate patch.
*   **[Issue #866](https://github.com/nullclaw/nullclaw/issues/866) (curl post fails even if on allowlist):** While the security tier was recently changed via PR, users are still reporting execution friction between the agent and allowlisted tools.
*   **[Issue #820](https://github.com/nullclaw/nullclaw/issues/820) (How to install Zig on Debian?):** Needs official documentation or a wiki update to prevent user drop-off during the initial setup phase.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-05-03

## 1. Today's Overview
The IronClaw project is currently experiencing a high-velocity phase of architectural expansion and active community contribution. The repository saw a significant volume of activity over the last 24 hours, with 43 pull requests updated and 20 issues touched. The core development team is heavily focused on the "Reborn" initiative—a major substrate refactor introducing new kernel-level coordination and runtime boundaries. Concurrently, external contributors are rapidly shipping new features, bug fixes, and a commercial "NEAR Intents" trading agent layer. The ratio of open to merged/closed PRs (36 open vs. 7 closed) indicates a heavy work-in-progress pipeline as the Reborn architecture takes shape.

## 2. Releases
No new releases were published today. The project's latest stable version remains `v0.26.0` / `v0.27.0` (pre-release tags observed in issue reports).

## 3. Project Progress
Today's merged and closed PRs reflect steady maintenance and the completion of foundational architectural work:
*   **Reborn Obligation Lifecycle Wired:** High-risk issues [#3144](https://github.com/nearai/ironclaw/pull/3144) (runtime resource ceilings) and [#3147](https://github.com/nearai/ironclaw/pull/3147) (audit event sinks) were closed, indicating the new host-runtime obligation framework is now integrated.
*   **Local LLM Thinking Enabled:** PR [#2372](https://github.com/nearai/ironclaw/pull/2372) was merged, ensuring Ollama models (Qwen3, DeepSeek-R1) default to `think: true` to properly utilize their extended reasoning capabilities.
*   **CI/Testing Stabilization:** A flaky MCP auth environment test was fixed and closed via [PR #3205](https://github.com/nearai/ironclaw/pull/3205), resolving merge queue blockages.
*   **WASM Channel Staging:** [PR #3105](https://github.com/nearai/ironclaw/pull/3105) was closed after addressing Telegram polling issues during headless onboard via WASM channel fallbacks.

## 4. Community Hot Topics
The most heavily discussed and foundational topics revolve around architectural planning and core infrastructure upgrades, driven heavily by contributor **serrrfirat** and maintainer **zmanian**:
*   **Reborn Turn Coordinator Architecture:** The host-layer coordination system is being actively defined. Key active trackers include [Issue #3016](https://github.com/nearai/ironclaw/issues/3016) (AgentLoopHost facade) and [Issue #3013](https://github.com/nearai/ironclaw/issues/3013) (Kernel TurnCoordinator), which outline how the agent will handle thread admission and concurrent execution safely.
*   **Reborn Memory Stack:** Maintainer **nickpismenkov** is executing a massive 5-PR stack ([PR #3180](https://github.com/nearai/ironclaw/pull/3180) through [PR #3184](https://github.com/nearai/ironclaw/pull/3184)) to implement native Postgres and LibSQL memory document repositories.
*   **Descriptive Chat Titles:** [PR #2700](https://github.com/nearai/ironclaw/pull/2700) by **zmanian** is an XL-sized PR replacing hex hashes with actual titles in the Web UI sidebar, indicating a strong focus on UX improvements.

## 5. Bugs & Stability
Several high-impact bugs were reported today, highlighting some regressions and multi-model compatibility issues:
*   **P1 - Linux x86 Installer Failure:** [Issue #2818](https://github.com/nearai/ironclaw/issues/2818) reports that the `v0.26.0` installer is broken on `x86_64-unknown-linux-gnu`. *(Awaiting dedicated fix PR)*.
*   **P1 - Gemini 3.x Tool Call Failure:** [Issue #3214](https://github.com/nearai/ironclaw/issues/3214) exposes an `INVALID_ARGUMENT` HTTP 400 error with Gemini models during tool calls. Previous fixes (#1565, #1752) failed to address the root cause in the SSE handler. 
*   **P2 - DeepSeek Tool Use Fails:** [Issue #3201](https://github.com/nearai/ironclaw/issues/3201) confirms tool usage is currently broken for the DeepSeek provider. 
*   **P3 - Web UI Console Errors:** [Issue #2344](https://github.com/nearai/ironclaw/issues/2344) details CSP violations and TypeErrors on the staging web app load. 

*(Good news: string-serialization bugs causing issues with tools are actively being patched in [PR #3206](https://github.com/nearai/ironclaw/pull/3206), which may solve related DeepSeek quirks).*

## 6. Feature Requests & Roadmap Signals
The roadmap shows strong signals toward multi-platform support, enterprise onboarding, and autonomous financial agents:
*   **ARM64 Docker Support:** [Issue #3168](https://github.com/nearai/ironclaw/issues/3168) requests ARM64 builds, which is actively being fulfilled by [PR #3208](https://github.com/nearai/ironclaw/pull/3208). This will natively support Apple Silicon and AWS Graviton.
*   **Magic-Link Invitations:** [PR #3187](https://github.com/nearai/ironclaw/pull/3187) introduces a V27 DB migration for admin-only magic-link user creation, signaling an upcoming managed/cloud offering.
*   **Audio Pipeline (STT/TTS):** [Issue #90](https://github.com/nearai/ironclaw/issues/90) remains highly prioritized for WhatsApp voice note handling, though no active PR is linked yet.
*   **Codex / NEAR Intents Trading:** Contributor **abbyshekit** opened an aggressive series of PRs ([PR #3207](https://github.com/nearai/ironclaw/pull/3207), [PR #3211](https://github.com/nearai/ironclaw/pull/3211)) building a deterministic backtesting and paid-research layer for NEAR trading agents.

## 7. User Feedback Summary
Users are excited about local, extensible AI but are currently struggling with model provider compatibility. The prevalence of issues like DeepSeek tool failures ([#3201](https://github.com/nearai/ironclaw/issues/3201)) and Gemini SSE handler drops ([#3214](https://github.com/nearai/ironclaw/issues/3214)) indicates that while IronClaw aims to be model-agnostic, strict JSON-schema enforcement and varied API behaviors are causing friction. On the UX side, users are relieved to see hex-UUIDs disappearing from the UI ([PR #2700](https://github.com/nearai/ironclaw/pull/2700)), and the community clearly values hardware flexibility, heavily upvoting ARM64 Docker image requests.

## 8. Backlog Watch
*   **Web UI Stability:** [Issue #2344](https://github.com/nearai/ironclaw/issues/2344) (Staging Web UI console errors) has been open since April 11 and needs frontend attention before the next release.
*   **Installer Broken on Linux x86:** [Issue #2818](https://github.com/nearai/ironclaw/issues/2818) is a critical blocker for standard Linux users downloading `v0.26.0` and should be treated as a release blocker.
*   **Core Audio Infrastructure:** [Issue #90](https://github.com/nearai/ironclaw/issues/90) is foundational for feature parity, yet remains in the planning phase. Maintainers should clarify timelines for STT/TTS integration.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the project digest for LobsterAI based on the provided GitHub data for May 3, 2026.

### 1. Today's Overview
As of May 3, 2026, the LobsterAI project is experiencing a period of feature refinement and issue triage rather than active deployments. The repository saw no new releases, no closed issues, and no merged pull requests in the last 24 hours. However, developer activity remains steady, with four distinct pull requests receiving updates—two of which were recently opened, addressing specific platform stability and configuration bugs. The overall project health appears stable, with current development focused on polishing existing systems like the OpenClaw agent framework and improving user experience (UX) in notification routing.

### 2. Releases
There were no new releases recorded for this date.

### 3. Project Progress
No pull requests were merged and no issues were closed today. The only forward movement consists of four open PRs receiving updates. While no code was officially shipped to the main branch, maintainers are actively revisiting stalled contributions and reviewing new architectural fixes related to the OpenClaw cowork feature and UI configurations. 

### 4. Community Hot Topics
Due to a lack of recent comments and reactions (all listed PRs have `0` thumbs up and `undefined` comments), there are no highly active community debates within the last 24 hours. However, based on the open PRs receiving maintainer attention, the underlying focus of the community is currently centered on:
*   **Custom Plugin Ecosystem:** Users want assurance that their manual configurations (`pm install`) will persist through automated config syncs ([PR #1879](https://github.com/netease-youdao/LobsterAI/pull/1879)).
*   **Notification Channel Clarity:** Developers are actively trying to resolve confusing UI elements where raw technical codes were shown to users instead of recognizable platform names ([PR #1191](https://github.com/netease-youdao/LobsterAI/pull/1191)).

### 5. Bugs & Stability
Several bug fixes are currently queued in open PRs, ranked by severity below:
1.  **High (Configuration Overwrite):** [PR #1879](https://github.com/netease-youdao/LobsterAI/pull/1879) addresses a critical bug where `OpenClawConfigSync.sync()` silently overwrites and discards manually added plugin load paths. This severely impacts users relying on custom community plugins like `memory-lancedb-pro`. *Status: Fix PR opened.*
2.  **Medium (UI/UX Regression):** [PR #1191](https://github.com/netease-youdao/LobsterAI/pull/1191) highlights defects in the scheduled tasks notification selector. IM platforms (POPO, WeCom) were being incorrectly filtered, WeChat was incorrectly marked as unsupported, and raw code strings were exposed to users. *Status: Fix PR opened.*
3.  **Low (Agent Session Clutter):** [PR #1181](https://github.com/netease-youdao/LobsterAI/pull/1181) fixes a bug where internal OpenClaw heartbeat/cron routing sessions leaked into the user-facing Cowork session list, causing confusion. *Status: Fix PR opened.*

### 6. Feature Requests & Roadmap Signals
*   **Third-Party LLM Expansion:** [PR #813](https://github.com/netease-youdao/LobsterAI/pull/813) signals an ongoing effort to expand model provider options. The PR requests the addition of Xiaomi's `MiMo V2 Pro` and `MiMo V2 Omni` (both supporting image inputs) to the Xiaomi provider channel. 
*   *Prediction:* Because PR #813 involves simple configuration file additions (`src/renderer/config.ts`), it is a strong candidate to be bundled into the next minor release, provided maintainainers resolve the current stale status.

### 7. User Feedback Summary
User pain points deduced from the current active PRs point to friction in two main areas:
*   **Ecosystem Flexibility:** Users utilizing the command line to install third-party extensions are frustrated by automated system syncs that wipe out their custom setups.
*   **Enterprise Integration Usability:** Enterprise users relying on IM integrations (WeChat, WeCom, POPO, Feishu) for scheduled tasks are encountering a disjointed experience, hampered by overly defensive legacy code and unrefined UI selectors that display raw backend keys. 

### 8. Backlog Watch
Maintainer attention is required for two specific PRs that have slipped into a `[stale]` state but were recently bumped:
*   **[PR #813](https://github.com/netease-youdao/LobsterAI/pull/813):** Open since March 25, 2026. This is a straightforward configuration PR adding Xiaomi MiMo models. It needs a final review to be merged.
*   **[PR #1191](https://github.com/netease-youdao/LobsterAI/pull/1191):** Open since April 1, 2026. This comprehensive fix for the notification channel selector involves replacing hardcoded if-else mappings with a dynamic `PlatformRegistry`. It requires architectural review to ensure it doesn't break existing notification pipelines.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-03

Here is the daily project digest for the open-source AI agent/personal assistant framework, **Moltis** (`moltis-org/moltis`). 

## 1. Today's Overview
Moltis demonstrates a healthy, moderately active development cycle, with 5 issues updated (4 opened, 1 closed) and 4 pull requests updated (2 opened, 2 closed) over the past 24 hours. The project is currently focused on expanding its infrastructure flexibility and squashing UI/terminal bugs. Open pull requests indicate that the core team is actively investing in remote sandbox environments and authentication flows, positioning Moltis for smoother cloud deployments. Meanwhile, the community is engaging with cutting-edge model features like DeepSeek's reasoning mode and OpenAI's image generation. No new software versions were released today.

## 2. Releases
**No new releases were published today (2026-05-03).** 
*There are no breaking changes, migration notes, or version bumps to report.*

## 3. Project Progress
The development team made solid progress today by closing two community/external pull requests, improving platform stability and internationalization:
*   **[CLOSED] [fix(terminal): prevent spurious "window does not exist" error on tab creation](https://github.com/moltis-org/moltis/pull/955)**: Authored by `gaarf`, this PR successfully resolves a frontend race condition occurring when creating new `tmux` windows. It ensures the UI gracefully handles the REST API response even if the newly created terminal window exits instantly.
*   **[CLOSED] [feat(i18n): add zh-TW Traditional Chinese locale support](https://github.com/moltis-org/moltis/pull/339)**: Authored by `PeterDaveHello`, this long-running PR (open since March) was finally merged, bringing full Traditional Chinese (Taiwan) localization to both the macOS and web apps. 

## 4. Community Hot Topics
The most notable community interactions currently revolve around integration with third-party models and out-of-the-box trust/reputation systems for AI agents:
*   **DeepSeek Reasoning Mode Handling ([#959](https://github.com/moltis-org/moltis/issues/959))**: This is the most active issue of the day, highlighting user demand for seamless integration with DeepSeek's advanced "thinking mode." The underlying need is for Moltis to natively support and relay specific API parameters like `reasoning_content` without throwing errors.
*   **Agent Reputation System Proposal ([#960](https://github.com/moltis-org/moltis/issues/960))**: A community member (`bkauto3`) proposed integrating "SwarmScore," a portable trust rating system for AI agents based on execution history. This signals a growing user need for security, accountability, and verifiable trust in autonomous multi-agent networks.

## 5. Bugs & Stability
Several bugs were reported today, primarily concerning external API integrations and local infrastructure setups. 
1.  **High: DeepSeek API Crash ([#959](https://github.com/moltis-org/moltis/issues/959))**: Throwing an error when using DeepSeek in thinking mode because `reasoning_content` is dropped. *No fix PR is currently listed.*
2.  **Medium: Matrix OIDC Registration Failure ([#957](https://github.com/moltis-org/moltis/pull/957))**: Operators are experiencing `invalid_redirect_uri` failures during the Matrix OIDC flow. *A fix PR is currently open.*
3.  **Low: Outdated Local TTS Docs ([#958](https://github.com/moltis-org/moltis/issues/958))**: Documentation for setting up a local TTS provider points to unmaintained/archived repositories (like Coqui), causing setup confusion. *No fix PR is currently listed.*
*(Note: The `tmux` error reported in [#937](https://github.com/moltis-org/moltis/issues/937) was officially closed today following the merging of [PR #955](https://github.com/moltis-org/moltis/pull/955)).*

## 6. Feature Requests & Roadmap Signals
Analyzing the open issues and PRs provides clear signals about the project's near-term roadmap and user expectations:
*   **Advanced AI Modalities & Models**: Users are eagerly requesting support for the latest AI capabilities. [Issue #956](https://github.com/moltis-org/moltis/issues/956) requests image generation support via `gpt-image-2` using OpenAI Codex OAuth, showing a desire to turn Moltis into a multimodal interface.
*   **Cloud & Remote Sandboxing**: [PR #942](https://github.com/moltis-org/moltis/pull/942) introduces remote and multi-backend sandbox support (Vercel, Daytona, Firecracker). This suggests the next major architectural update will heavily focus on enabling Moltis to run seamlessly on cloud platforms (DigitalOcean, Fly.io, Render) where standard Docker-in-Docker setups fail.

## 7. User Feedback Summary
Users are actively pushing Moltis beyond standard chat interfaces into complex autonomous territory. Satisfaction appears high regarding the project's expandability, but pain points exist around **environment setup** (outdated TTS docs) and **provider API fragility** (DeepSeek reasoning errors breaking the chat session). The terminal/tmux fix closing out today shows the maintainers are responsive to UX friction, successfully resolving backend timing issues that caused confusing UI errors. 

## 8. Backlog Watch
*   **[PR #942: Remote & Multi-backend sandbox support](https://github.com/moltis-org/moltis/pull/942)**: Open since April 30th, this is a massive architectural addition. Because it affects core sandbox execution, it requires heavy maintainer review before merging to ensure security and stability on cloud platforms.
*   **[Issue #956: Add image generation support](https://github.com/moltis-org/moltis/issues/956)**: A highly requested feature enhancement that currently has zero comments from core maintainers. It requires discussion regarding OAuth implementation and security scopes.
*   **[PR #339: zh-TW Locale Support](https://github.com/moltis-org/moltis/pull/339)**: While officially marked as closed today, maintainers should ensure this massive localization effort is fully synced with the newest UI strings to prevent immediate translation debt. *(Update: Confirmed merged/closed today, but serves as a reminder to audit new PRs for i18n compliance).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for CoPaw (agentscope-ai/CoPaw) for May 3, 2026.

### 1. Today's Overview
CoPaw (referenced internally as QwenPaw) experienced a high-volume community interaction day with **14 active issues and 6 pull requests**, but zero resolutions or releases. The project is currently in a phase of rapid feature expansion and community testing, particularly around local model integrations (Ollama) and MCP (Model Context Protocol) configurations. However, the complete lack of merged PRs or closed issues over the last 24 hours suggests a potential maintainer bottleneck or a weekend lull in core team reviews. The community remains highly engaged, submitting multiple "first-time contributor" PRs and detailed bug reports.

### 2. Releases
No new releases were recorded today. The project's latest stable versions remain unaffected by new deployments.

### 3. Project Progress
While no PRs were merged today, several active open PRs indicate ongoing development in localization, memory management, and developer tooling:
*   **i18n Expansion:** PR [#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009) adds Brazilian Portuguese (pt-BR) locale support to the Console and Website, submitted by a first-time contributor.
*   **Memory Enhancements:** PR [#4007](https://github.com/agentscope-ai/QwenPaw/pull/4007) aims to fix critical memory bugs (#3182, #3828) by introducing a new `MemoryHook` for long-term memory enhancement, similar to OpenClaw's `memory-lancedb-pro`.
*   **Developer Tooling:** PR [#3999](https://github.com/agentscope-ai/QwenPaw/pull/3999) introduces a CLI entrypoint (`qwenpaw skills test`) to validate individual skills before assigning them to agents.
*   **Platform Integrations:** PRs under review include adding a vector model connection test ([#3831](https://github.com/agentscope-ai/QwenPaw/pull/3831)) and improving Discord cron-job threading ([#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525)).

### 4. Community Hot Topics
The most actively discussed issues revolve around model resilience and local deployment configurations:
*   **Model Fallback Mechanisms:** Issue [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) (6 comments) details an Agent deadlock caused by MCP TaskGroup exceptions. Issue [#1327](https://github.com/agentscope-ai/QwenPaw/issues/1327) (5 comments) requests a model fallback chain for rate limit handling. This strong consensus indicates users are heavily relying on CoPaw for production-grade tasks where API limits frequently interrupt workflows.
*   **Ollama Context Loss:** Issue [#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991) (2 comments) highlights a significant pain point where the Ollama channel fails to carry conversation history, causing session memory loss. 

### 5. Bugs & Stability
Several medium-to-high severity bugs were reported today, highlighting stability issues with third-party provider integrations:
1.  **MCP Internal Deadlock (High):** [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) - MCP client TaskGroup exceptions cause the Agent to become unresponsive ("zombie state") without throwing errors. *No fix PR is currently open for this specific core issue.*
2.  **Reasoning Content Leakage (Medium):** [#4006](https://github.com/agentscope-ai/QwenPaw/issues/4006) - The OpenAI-Compatible Provider (specifically MiniMax) fails to filter out reasoning content.
3.  **MCP Timeout Limit (Medium):** [#3997](https://github.com/agentscope-ai/QwenPaw/issues/3997) - `MCPClientConfig` silently discards custom timeout settings due to Pydantic's unknown field filtering, leaving users stuck at a 30s default.
4.  **Architecture/Subprocess Bug:** [#4003](https://github.com/agentscope-ai/QwenPaw/issues/4003) - On Apple M5 Pro, bundled Python spawns i386 (x86_64) subprocesses via Rosetta, breaking native ARM tools like Ollama.

### 6. Feature Requests & Roadmap Signals
A clear trend emerged from today's feature requests, signaling what the community wants in the next version:
*   **Model Fallback / High Availability:** Multiple requests ([#4011](https://github.com/agentscope-ai/QwenPaw/issues/4011), [#3789](https://github.com/agentscope-ai/QwenPaw/issues/3789), [#1327](https://github.com/agentscope-ai/QwenPaw/issues/1327)) are begging for a UI toggle to set backup models. This is highly likely to be picked up in the next release.
*   **Dynamic Context Length:** [#4004](https://github.com/agentscope-ai/QwenPaw/issues/4004) requests auto-deriving `max_input_length` from the model's actual context window rather than using a static 128K hardcoded value.
*   **Execution Control:** [#4010](https://github.com/agentscope-ai/QwenPaw/issues/4010) requests the ability to manually interrupt or terminate ongoing agent tasks via channels like Feishu or WeChat.
*   **UI/UX Enhancements:** Requests for visual shared workspaces ([#4002](https://github.com/agentscope-ai/QwenPaw/issues/4002)), single-message deletion ([#4001](https://github.com/agentscope-ai/QwenPaw/issues/4001)), and agent evaluation metrics ([#4008](https://github.com/agentscope-ai/QwenPaw/issues/4008)) show a maturing user base wanting enterprise-grade controls.

### 7. User Feedback Summary
Users are actively trying to deploy CoPaw in multi-channel, multi-model production environments but are facing friction. 
*   **Pain Points:** Local model (Ollama) users are frustrated by context window handling and architecture bugs on Apple Silicon. WeChat/Feishu users feel a loss of control because they cannot stop run-away agents ([#4010](https://github.com/agentscope-ai/QwenPaw/issues/4010)) or see browser operations synced to their chat ([#4000](https://github.com/agentscope-ai/QwenPaw/issues/4000)). 
*   **Enterprise Needs:** Users specifically mentioned needing full chat logs and evaluation tools to pitch CoPaw as an enterprise Agent platform to management ([#4008](https://github.com/agentscope-ai/QwenPaw/issues/4008)).

### 8. Backlog Watch
Maintainers need to address several critical areas that are piling up:
*   **The Fallback Model Cluster:** The team should consolidate #1327, #3789, and #4011 into a unified epic. The demand for an automatic model failover switch is overwhelming.
*   **Agent Deadlock (#3640):** Open since April 21st with 6 comments, this "zombie state" bug is highly detrimental to production reliability and requires urgent core-team triage.
*   **PR Reviews:** There are currently 6 open PRs, many from first-time contributors (e.g., the crucial memory fix in [#4007](https://github.com/agentscope-ai/QwenPaw/pull/4007)). Maintainer review is required to keep community momentum alive.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-03

## 1. Today's Overview
ZeroClaw experienced a high volume of community activity over the past 24 hours, with 50 issues updated (48 open) and 39 pull requests updated (31 open). The project is in a heavy architectural transition phase, evidenced by a coordinated batch of V3 configuration schema PRs and a massive push to consolidate first-party skills directly into the main repository. Although there are no new official releases today, maintainers are clearly laying the groundwork for the upcoming `v0.7.5` and `v0.7.6` milestones, alongside an integration branch for `v0.8.0`. The high ratio of open issues to closed ones (48:2) suggests that while community engagement and feature proposals are surging, maintainer review bandwidth is currently stretched thin.

## 2. Releases
No new official releases were published today. 

However, maintainers are actively tracking the **v0.7.5** milestone (Release Automation) via Issue [#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878) and the **v0.7.6** milestone (Skills UX) via Issue [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253). A massive configuration schema migration is also being prepared behind an `integration/v0.8.0` branch (PR [#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266)), indicating that a major breaking-change release is on the horizon.

## 3. Project Progress
While only 8 PRs were closed/merged today, a massive pipeline of 31 open PRs shows rapid active development. Key advancements include:
*   **Configuration & Schema V3:** A coordinated effort led by maintainer `singlerider` to introduce V3 nested config shapes, agent filesystem layouts (`agents/<alias>/`), and `SwarmConfig` (Issues [#6270](https://github.com/zeroclaw-labs/zeroclaw/issues/6270), [#6271](https://github.com/zeroclaw-labs/zeroclaw/issues/6271), [#6272](https://github.com/zeroclaw-labs/zeroclaw/issues/6272)).
*   **Skills Consolidation:** PR [#6274](https://github.com/zeroclaw-labs/zeroclaw/pull/6274) moves first-party skills into the main repo, eliminating the need for a separate registry and simplifying the user experience.
*   **Internationalization (i18n):** Significant progress on localization, with French, Japanese, Spanish, and new Simplified Chinese (`zh-CN`) translations landing in PR [#6170](https://github.com/zeroclaw-labs/zeroclaw/pull/6170), and WeChat CLI strings updated in PR [#6242](https://github.com/zeroclaw-labs/zeroclaw/pull/6242).
*   **Channel Improvements:** WhatsApp was added to the cron delivery channels (PR [#6261](https://github.com/zeroclaw-labs/zeroclaw/pull/6261)), and Matrix attachment uploads were fixed for partial drafts (PR [#6200](https://github.com/zeroclaw-labs/zeroclaw/pull/6200)).

## 4. Community Hot Topics
The most actively discussed issues revolve around advanced provider support, cognitive architecture, and developer experience:
*   **"Dream Mode" Memory Consolidation (9 comments):** Issue [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) proposes a background "Dream Mode" for idle periods to consolidate memories and learn. This signals strong community desire for agentic long-term memory capabilities.
*   **Shell Sandbox blocks Python Skills (6 comments):** Issue [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) (opened by Jason Perlow regarding his FINOS CDM-compliant skill) highlights that the default v0.6.9 shell sandbox is too restrictive for realistic data analysis scripts.
*   **Provider Reasoning Content Drops (6 comments):** Issue [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) and [#6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233) reveal deep frustrations among users of thinking-mode models (like Kimi and DeepSeek V4) where `reasoning_content` is lost during multi-turn conversations.
*   **Channel Reply Intent (4 comments, 3 👍):** Issue [#5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) highlights a core UX flaw where the bot's "should I reply" gate ignores users in 1:1 private chats.

## 5. Bugs & Stability
Several high-priority bugs affecting core agent workflows were reported today, but maintainers have reacted swiftly with targeted PRs:
*   **P0/S1: Provider "Thinking" Drops:** The context compressor drops `reasoning_content` for models like DeepSeek. **Fix:** PR [#6285](https://github.com/zeroclaw-labs/zeroclaw/pull/6285) directly addresses this.
*   **P1/S1: Bedrock Opus 4-7 Temp Failures:** Issue [#6095](https://github.com/zeroclaw-labs/zeroclaw/issues/6095) reports 400 errors due to the temperature field not being optional for the newest Claude model. 
*   **P1/S1: Slack Tokens & Env Variables:** Issue [#6237](https://github.com/zeroclaw-labs/zeroclaw/issues/6237) notes Slack crashes if `bot_token` isn't hardcoded. **Fix:** Resolved swiftly via PR [#6287](https://github.com/zeroclaw-labs/zeroclaw/pull/6287).
*   **P1/S1: Telegram Encrypted Config:** Issue [#5654](https://github.com/zeroclaw-labs/zeroclaw/issues/5654) reports that using encrypted `config.json` breaks the Telegram channel.
*   **P1: WASM Plugin Path Divergence:** Issue [#6254](https://github.com/zeroclaw-labs/zeroclaw/issues/6254) notes that plugins installed via CLI become invisible to the agent due to path mismatches.
*   **P2: Multi-instance Status Bug:** `zeroclaw status` reports named instances as stopped. **Fix:** PR [#6288](https://github.com/zeroclaw-labs/zeroclaw/pull/6288) corrects the systemd unit name derivation.

## 6. Feature Requests & Roadmap Signals
Looking at the current open issues and PRs, the `v0.7.6` and `v0.8.0` releases are shaping up to be massive architectural upgrades:
*   **Microkernel Architecture:** The progression of WIT interface files (Issue [#5586](https://github.com/zeroclaw-labs/zeroclaw/issues/5586)) and core tool reduction (Issue [#5617](https://github.com/zeroclaw-labs/zeroclaw/issues/5617)) signals a shift toward a highly pluggable, WASM-driven microkernel core.
*   **Oauth for AI Providers:** Issue [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) requests native OAuth login for Ollama Cloud, Zhipu, Kimi, and MiniMax. This would be a massive UX upgrade, freeing users from managing static API keys.
*   **High-Performance Memory:** Issue [#5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570) suggests replacing SQLite's O(n) vector scan with Approximate Nearest Neighbor (ANN) indexing, which is necessary for agentic memory scalability.

## 7. User Feedback Summary
User feedback indicates that while the project's feature set is rapidly expanding, operational friction is a major pain point. Users deploying multi-instance setups or utilizing the newer "thinking" AI models are hitting persistent walls. Specifically:
*   **Developer Friction:** Developers building skills (like InvestorClaw) are severely hindered by the default sandbox configurations. 
*   **Channel UX:** Users expect the bot to behave like a standard chat client in 1:1 DMs, but the current intent-classification logic causes it to ignore messages. (Issue [#5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674)).
*   **Hosted Model Compatibility:** The rapid release of new thinking models (Claude Opus 4-7, DeepSeek V4, Gemini 3) is outpacing ZeroClaw's provider implementations, causing broken streaming and context compression for power users relying on cutting-edge models.

## 8. Backlog Watch
Several critical issues and ambitious PRs require immediate maintainer attention to prevent stalling:
*   **Issue [#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605):** Marked S0 (Data loss/security risk), this bug involves hardcoded configuration paths that break multi-instance deployments. It is accepted but lacks an open fix PR.
*   **Issue [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) & [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849):** Both are high-impact, community-driven proposals (Sandbox fixes and Dream Mode) with extensive discussion but awaiting final approval/implementation.
*   **PR [#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266) (V3 Config Schema):** A massive, high-risk PR labeled "DO NOT MERGE YET" that blocks the V3 ecosystem roadmap. This requires intensive review to prevent breaking the entire configuration layer for `v0.8.0`.

</details>