# OpenClaw Ecosystem Digest 2026-05-05

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-04 22:17 UTC

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

# OpenClaw Project Digest — 2026-05-05

## 1. Today's Overview
OpenClaw is experiencing exceptionally high development velocity and community engagement, as evidenced by **500 issues** and **500 pull requests** updated in the past 24 hours. The core team shipped four new releases, culminating in the **v2026.5.4-beta.1** release, highlighting a strong push toward externalized plugin architectures and secure file-transfer capabilities. While active PR volume remains extremely high (442 open), only 58 PRs were merged/closed, suggesting a possible review bottleneck or that a large number of community PRs are still in progress. The issue tracker is heavily skewed toward open bugs and regressions (442 open vs. 58 closed), indicating that while new features are rapidly developing, maintaining baseline stability across diverse environments remains a primary challenge.

## 2. Releases
Four new versions were published today, showing rapid iteration on the 5.x plugin architecture:

*   **v2026.5.4-beta.1**: Introduced the bundled `file-transfer` plugin. It equips agents with `file_fetch`, `dir_list`, `dir_fetch`, and `file_write` tools for binary file operations on paired nodes. Crucially, it implements a strict **default-deny per-node path policy** requiring explicit operator approval, significantly enhancing inter-node security.
*   **v2026.5.3**: Stable release incorporating the new file-transfer plugin infrastructure.
*   **v2026.5.3-1 (Hotfix)**: Addressed a critical friction point in the 5.x migration. The install scanner was aggressively blocking official bundled plugins due to false positives triggered by distant `process.env` accesses in compiled bundles.
*   **v2026.5.3-beta.3**: Pre-release testing track for the file-transfer plugin.

## 3. Project Progress
Today's merged/closed PRs reflect hardening efforts across the gateway, plugins, and specific channel adapters:

*   **Plugin & Config Stability:** [PR #77487](https://github.com/openclaw/openclaw/pull/77487) fixed channel claim conflicts for built-in aliases (like `wecom`), ensuring plugin IDs are preferred. [PR #77547](https://github.com/openclaw/openclaw/pull/77547) cleaned up Docker images by pruning external plugin dists to match runtime behavior.
*   **Transcript & Reliability:** [PR #77046](https://github.com/openclaw/openclaw/pull/77046) fixed stable mirror idempotency in the Codex app-server to prevent transcript loss. [PR #77554](https://github.com/openclaw/openclaw/pull/77554) improved performance by preserving workspace metadata during model refreshes.
*   **Channel Improvements:** [PR #77543](https://github.com/openclaw/openclaw/pull/77543) wired STT (Speech-to-Text) preflight support for Discord voice channels. [PR #77478](https://github.com/openclaw/openclaw/pull/77478) hardened gateway startup readiness and fixed Discord reply lifecycles.

## 4. Community Hot Topics
The community is highly active in discussing architectural limitations and regressions. The most debated topics include:

*   **Gateway Resource Leaks & Stalls:** [Issue #73655](https://github.com/openclaw/openclaw/issues/73655) (15 comments) outlines a "leak triad" (Manifest EADDRINUSE, signal-handler accumulation, sync I/O) causing Websocket starvation. This compounds with [Issue #75882](https://github.com/openclaw/openclaw/issues/75882) (9 comments) where event-loop stalls cause cross-channel latency. *Underlying need: Operators need a resilient gateway that handles restarts without dropping connections.*
*   **Ecosystem Vision vs. Reality:** [Issue #50090](https://github.com/openclaw/openclaw/issues/50090) (14 comments) discusses the gap between the promise of ClawHub skills and the current reality, while [Issue #50096](https://github.com/openclaw/openclaw/issues/50096) (12 comments) debates Long-Term Memory architecture. *Underlying need: Users want OpenClaw to be a persistent, learning partner rather than a stateless orchestrator.*
*   **Multi-Agent Session Routing:** [Issue #52875](https://github.com/openclaw/openclaw/issues/52875) (20 comments) highlights a critical regression where agents cannot find each other's sessions via `session_list`.

## 5. Bugs & Stability
Several high-severity bugs and regressions have been reported, many surrounding the latest releases:

1.  **Agent Output Truncation:** [Issue #76307](https://github.com/openclaw/openclaw/issues/76307) (Regression, 16 comments). Long replies truncate at ~25-80 chars. Fixes are likely being explored, but it currently blocks verbose agent tasks.
2.  **Memory Vector Search Failure:** [Issue #65156](https://github.com/openclaw/openclaw/issues/65156) reports sqlite-vec ABI mismatches causing total degradation of memory vector search. (Fix PR [PR #55507](https://github.com/openclaw/openclaw/pull/55507) is open).
3.  **SecretRefs Regression:** [Issue #77416](https://github.com/openclaw/openclaw/issues/77416) notes Discord channels are silently skipped when using env-backed SecretRefs following the `2026.5.3-1` hotfix.
4.  **Unbounded Memory Growth:** [Issue #55334](https://github.com/openclaw/openclaw/issues/55334) warns that `sessions.json` unbounded growth causes Gateway OOMs due to duplicated `skillsSnapshot` entries.
5.  **Hardcoded Paths:** [Issue #51429](https://github.com/openclaw/openclaw/issues/51429) (11 comments) reveals a merged PR containing a hardcoded user directory (`/Users/wangtao`), breaking installations globally.
6.  **LLM Provider Compatibility:** [Issue #51593](https://github.com/openclaw/openclaw/issues/51593) highlights HTTP 400 errors with Moonshot/Kimi models due to duplicated tool call IDs.

## 6. Feature Requests & Roadmap Signals
User requests heavily lean into observability, multi-agent orchestration, and messaging UX:

*   **Trace Contexts:** [Issue #50291](https://github.com/openclaw/openclaw/issues/50291) requests `messageId` and `runId` in plugin hooks for distributed tracing. This aligns well with [PR #77542](https://github.com/openclaw/openclaw/pull/77542) (Gateway stall diagnostics) and is highly likely to be incorporated soon.
*   **Dynamic Provider UI:** [PR #55085](https://github.com/openclaw/openclaw/pull/55085) introduces a stable CLI export for dynamic provider configuration. Given the complexity of the new plugin system, this is a strong candidate for the next stable release.
*   **Message Queuing Overhaul:** Discussions on "Steer" mode ([Issue #50880](https://github.com/openclaw/openclaw/issues/50880)) and interrupt queues ([Issue #50145](https://github.com/openclaw/openclaw/issues/50145)) indicate a needed refactor of how inbound messages are injected mid-turn.
*   **Native iMessage Acknowledgments:** [Issue #51088](https://github.com/openclaw/openclaw/issues/51088) requests read receipts/tapbacks for iMessage, highlighting user demand for parity with native messaging UX.

## 7. User Feedback Summary
**Pain Points:** Operators are expressing deep frustration with cross-platform reliability. Silent failures are a recurring theme—whether it's Telegram dropping outbound messages ([Issue #50040](https://github.com/openclaw/openclaw/issues/50040)), Cron sessions hallucinating instead of failing cleanly ([Issue #49876](https://github.com/openclaw/openclaw/issues/49876)), or the agent ignoring media attachments ([Issue #51857](https://github.com/openclaw/openclaw/issues/51857)). The transition to an externalized plugin architecture (5.x) is causing migration friction, particularly around config validation and missing dependencies (like `sharp` for images, noted in [Issue #73148](https://github.com/openclaw/openclaw/issues/73148)).

**Satisfaction & Use Cases:** Despite the bugs, the project is clearly solving complex, real-world orchestration needs. Users are successfully deploying OpenClaw on diverse hardware (including RISC-V64, [Issue #54253](https://github.com/openclaw/openclaw/issues/54253)) and integrating it deeply into enterprise comms (WeCom, Feishu, WhatsApp). The community is highly technical, often submitting detailed root-cause analyses alongside bug reports, indicating a strong, invested user base.

## 8. Backlog Watch
Several impactful issues and PRs require core maintainer intervention:

*   **Long-running Open Architecture PRs:** [PR #55085](https://github.com/openclaw/openclaw/pull/55085) (Dynamic setup surface) and [PR #55507](https://github.com/openclaw/openclaw/pull/55507) (Matryoshka embedding support) have been open for over a month and need final review to unblock downstream integrations.
*   **Session State Management:** [Issue #52249](https://github.com/openclaw/openclaw/issues/52249) (ACP parent sessions stuck) and [Issue #51767](https://github.com/openclaw/openclaw/issues/51767) (Subagent sessions not respecting retention policies) reveal foundational issues in how multi-agent state is cleaned up.
*   **Scope Deadlocks:** [Issue #74484](https://github.com/openclaw/openclaw/issues/74484) describes a scenario where the CLI enters a deadlock during device pairing due to missing scopes, effectively locking users out of their own gateway repair flows.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digests from 2026-05-05.

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently characterized by extreme development velocity and rapid architectural maturation. Projects are aggressively iterating to support multi-agent orchestration, externalized plugin architectures (often MCP or WASM-based), and diverse communication channels (Discord, WhatsApp, WeChat). However, this high velocity is introducing significant stability challenges; maintainers are simultaneously battling gateway resource leaks, silent configuration failures, and API regressions triggered by frequent updates from upstream LLM providers (e.g., Anthropic, DeepSeek). Overall, the landscape is actively transitioning from simple prompt-driven wrappers into complex, enterprise-grade agentic runtimes.

## 2. Activity Comparison
*Health scores are estimated based on issue/PR ratios, merge cadences, and bug triage velocity.*

| Project | Issues (24h) | PRs (24h) | Release Status | Health / Activity Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 (58 merged) | v2026.5.4-beta.1 | 🔴 **High Velocity, High Risk** (Review bottleneck, many open bugs) |
| **NanoBot** | Unspecified (High) | 18 (11 merged) | Stable (v0.1.5.post3) | 🟢 **Healthy & Active** (Strong merge ratio, active triage) |
| **Hermes Agent**| 50 | 50 (23 merged) | Unreleased (v0.12.0 broken)| 🔴 **Critical** (P0 crash in prod, multiple security flaws open) |
| **ZeroClaw** | 50 | 50 (21 merged) | Unreleased (Pre-v0.8.0) | 🟡 **Active but Unstable** (High velocity, but S0 context spillage bugs) |
| **CoPaw** | 14 | 21 (15 merged) | Stable (v1.1.6b1) | 🟢 **Very Healthy** (Excellent merge cadence, community-driven) |
| **NanoClaw** | 3 | 35 (19 merged) | Unreleased (Post-v2 rewrite)| 🟢 **Healthy** (Aggressive, focused regression fixing) |
| **IronClaw** | 2 | 17 (5 merged) | Unreleased (Reborn init) | 🟡 **Architectural Phase** (Deep backend refactoring, low user bug volume) |
| **NullClaw** | 3 | 4 (1 merged) | Stable | 🟢 **Stable / Niche** (Focused on low-resource execution) |
| **LobsterAI** | 1 | 2 (0 merged) | Stable | 🟢 **Maintenance Mode** (Dependency bumps, proxy fixes) |
| **Moltis** | 1 | 1 (0 merged) | Stable | 🟡 **Stable but Stale** (Testing pipelines, parallel execution limits) |
| *Others* | *TinyClaw, ZeptoClaw, PicoClaw* | *0* | *0* | ⚪ **Dormant / Data Unavailable** |

## 3. OpenClaw's Position
**Advantages vs Peers:** OpenClaw remains the undisputed core reference implementation with the largest raw volume of community engagement. It is leading the ecosystem in advanced multi-agent routing (e.g., ACP parent sessions, cross-node file transfer) and enterprise integrations (WeCom, Feishu). 

**Technical Approach Differences:** While projects like NanoBot and CoPaw are focused on accessible CLI/Desktop experiences, OpenClaw is heavily leaning into a distributed, service-oriented architecture (Gateway, Codex app-server). However, its externalized 5.x plugin architecture is currently causing more migration friction compared to peers.

**Community Size Comparison:** OpenClaw's community (500 issues/PRs daily) is an order of magnitude larger than Hermes (100) or NanoBot/NanoClaw (~40). Yet, its operational efficiency is currently lower—442 open issues and 442 open PRs suggest a massive review bottleneck compared to CoPaw's highly responsive 15/21 merge rate.

## 4. Shared Technical Focus Areas
*   **Model Provider Fragility (Universal):** Almost all projects (OpenClaw, NanoBot, ZeroClaw, CoPaw) are fighting upstream API changes. Specifically, adapting to DeepSeek-V4's reasoning content and strict tool-call ID rules is causing silent drops and hangs across the board.
*   **Multi-Agent State & Memory (OpenClaw, NanoBot, IronClaw):** Foundational work is being done to move from stateless chat to persistent, long-term memory and multi-agent "squads." IronClaw is natively rewriting its memory/event store, while NanoBot is adding "mental task boards."
*   **Channel Adapter Parity (NanoClaw, ZeroClaw, CoPaw):** Users demand native UX parity (read receipts, voice STT, media handling) across Discord, Telegram, WhatsApp, and WeChat. DeltaChat and WeChat integrations were actively developed today.
*   **Security & Sandboxing (Hermes, NullClaw, Moltis):** Preventing agents from breaking host systems is a top priority. NullClaw is utilizing Linux Landlock, while Moltis is actively debugging Docker sandbox collisions during parallel tool execution.

## 5. Differentiation Analysis
*   **Enterprise vs. Local-First:** IronClaw and OpenClaw are clearly targeting enterprise deployments (Web3 credential injection, Postgres native memory, compliance). Conversely, NullClaw, NanoClaw, and LobsterAI are optimizing for local-first, low-resource, or consumer-grade desktop experiences (running on RISC-V, respecting local proxy settings, working offline).
*   **Observability Needs:** CoPaw, ZeroClaw, and IronClaw are heavily focused on the operational stack—routing telemetry, cost logging, and token visibility. Hermes and OpenClaw users are currently struggling with "black box" long-running tasks and dropped gateway messages.
*   **Plugin Architecture:** ZeroClaw is pushing the envelope with WebAssembly (WASM) hybrid skills, whereas OpenClaw is standardizing around MCP (Model Context Protocol) and centralized "ClawHub" aliases.

## 6. Community Momentum & Maturity
*   **Rapidly Iterating (Potential Chaos):** OpenClaw, ZeroClaw, and Hermes are pushing massive volumes of code. However, Hermes is paying the price with a P0 startup crash and leaked API keys. OpenClaw and ZeroClaw are accumulating technical debt, evidenced by unmerged architectural PRs and silent data loss bugs.
*   **Stabilizing & Maturing:** NanoBot, CoPaw, and NanoClaw show the healthiest momentum. They are rapidly merging community PRs to tighten setups, fix regressions from recent rewrites, and stabilize existing features before shipping new ones.
*   **Foundational/Incubating:** IronClaw and NullClaw are in deep architectural phases. Their user-facing bug counts are low because they are currently focused on low-level substrate work (Zig builds, Postgres repositories) before scaling out features.

## 7. Trend Signals
1.  **The Shift to "Agentic Ops" (AIOps for Agents):** As agents become autonomous, the community is demanding standard DevOps tooling. There is a massive push for Configuration-as-Code (IronClaw), HMAC tool receipts (ZeroClaw), and distributed tracing (OpenClaw) to manage AI agents like microservices.
2.  **Local/Custom Model Interoperability:** The release of powerful local models (DeepSeek, MiMo, local llama.cpp) has exposed fragility in hardcoded provider layers. Users expect agents to seamlessly failover between cloud and local endpoints (NanoBot) and respect local routing configurations (LobsterAI).
3.  **Self-Policing and Guardrails:** Developers are realizing LLMs cannot be trusted with system state. This is driving feature requests to prevent LLMs from overwriting their own system prompts/personas (CoPaw) and the implementation of strict default-deny file system policies (OpenClaw).

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-05

## 1. Today's Overview
NanoBot demonstrates **highly active and healthy development momentum** today, with 18 pull requests updated and 11 successfully merged, showcasing a strong contributor base and responsive merge process. The project continues to evolve rapidly as a versatile AI agent framework, with notable progress in multi-provider resilience, SDK telemetry, and cross-platform channel support. Bug reports are being actively triaged and fixed, while community demand heavily centers around enterprise-grade reliability features such as failover mechanisms and persistent task focus. The current release version remains `v0.1.5.post3`.

## 2. Releases
No new releases were published today.

## 3. Project Progress
A substantial amount of code was merged today, advancing key features and stability:
*   **SDK Observability & Telemetry:** The long-standing empty `RunResult.tools_used` and `RunResult.messages` properties were finally wired up via `SDKCaptureHook` ([PR #3620](https://github.com/HKUDS/nanobot/pull/3620)), greatly improving programmability for SDK users.
*   **Auth & Provider Management:** A new `nanobot provider logout <provider>` CLI command was added ([PR #3612](https://github.com/HKUDS/nanobot/pull/3612)), resolving a major friction point for OAuth-based providers (OpenAI Codex, GitHub Copilot).
*   **DeepSeek-V4 Stability:** A destructive history trim bug causing `reasoning_content` errors on Windows/WebUI was fixed via a non-destructive backfill mechanism ([PR #3616](https://github.com/HKUDS/nanobot/pull/3616), closing [#3554](https://github.com/HKUDS/nanobot/issues/3554)).
*   **Agent Safety & Guards:** Fix merged to prevent safety guard false positives regarding workspace violations (e.g., allowing `/dev/null` redirections) ([PR #3613](https://github.com/HKUDS/nanobot/pull/3613)).
*   **Channel Support:** WhatsApp voice message downloads are now supported in the bridge ([PR #3607](https://github.com/HKUDS/nanobot/pull/3607)), and Mezon channel support was merged ([PR #1154](https://github.com/HKUDS/nanobot/pull/1154)). 
*   **Search & MCP:** Custom `base_url` configuration for Tavily web search is now available ([PR #3091](https://github.com/HKUDS/nanobot/pull/3091)), and `ImageContent` handling for MCP tools was added ([PR #2438](https://github.com/HKUDS/nanobot/pull/2438)).

## 4. Community Hot Topics
*   **Provider/Model Failover:** [Issue #3376](https://github.com/HKUDS/nanobot/issues/3376) (13 comments, 1 👍) is driving significant discussion. Users deploying NanoBot in production are demanding automatic failover across configured providers instead of single-provider retries. This aligns with the recently closed [PR #1163](https://github.com/HKUDS/nanobot/pull/1163), indicating this core architecture change is actively being integrated.
*   **Session-Level Task Focus:** [Issue #3292](https://github.com/HKUDS/nanobot/issues/3292) (7 comments) highlights the community's need for the agent to maintain a "mental task board" that survives interruptions and context compaction. This sparked active development seen in [PR #3622](https://github.com/HKUDS/nanobot/pull/3622), which attempts to persist focus keys in session metadata.
*   **Configuration Extensibility:** High interest in integrating diverse local/regional models, evidenced by discussions around Xiaomi MiMo integration ([Issue #3617](https://github.com/HKUDS/nanobot/issues/3617), [PR #3619](https://github.com/HKUDS/nanobot/pull/3619)).

## 5. Bugs & Stability
1.  **[Critical] Provider Region/Availability Errors:** Users are experiencing fatal `403 This model is not available in your region` errors ([Issue #3618](https://github.com/HKUDS/nanobot/issues/3618)), which hard-stop the agent and break scheduled tasks. *Status: No linked fix PR yet.*
2.  **[High] DeepSeek-V4 WebUI Crash:** Reasoning content bugs causing agent hangs on Windows/WebUI ([Issue #3554](https://github.com/HKUDS/nanobot/issues/3554)). *Status: Fixed and closed via [PR #3616](https://github.com/HKUDS/nanobot/pull/3616).*
3.  **[Medium] DuckDuckGo Search Blocking:** Async `web_search` hangs indefinitely, blocking the entire session message pipeline ([Issue #2804](https://github.com/HKUDS/nanobot/issues/2804)). *Status: Closed, likely handled by recent search improvements or timeouts.*
4.  **[Low] SDK Facade Empty Returns:** `RunResult` returning empty arrays ([PR #3254](https://github.com/HKUDS/nanobot/pull/3254)). *Status: Superseded and fixed by [PR #3620](https://github.com/HKUDS/nanobot/pull/3620).*

## 6. Feature Requests & Roadmap Signals
The community is clearly pushing NanoBot toward **production-grade reliability and agentic self-awareness**:
*   **Hallucination Guards:** An opt-in tool to detect when LLMs claim an action without actually calling the tool ([PR #3624](https://github.com/HKUDS/nanobot/pull/3624)) is actively being reviewed.
*   **Configurable UI/Truncation:** Users want control over how long commands are truncated in chat UIs ([PR #3623](https://github.com/HKUDS/nanobot/pull/3623)).
*   **Multi-Agent Deployments:** Experimental PRs like [PR #3621](https://github.com/HKUDS/nanobot/pull/3621) are introducing multi-agent squad deployments for Hugging Face Spaces with advanced middleware.
*   *Prediction for next release:* Version `v0.1.6` will likely be released soon, featuring LLM Fallback Chains, persistent task focus, and the new `provider logout` command.

## 7. User Feedback Summary
Users are heavily utilizing NanoBot as a persistent, multi-channel personal assistant but face friction with **single-points-of-failure** when API providers change policies, expire OAuth tokens, or face regional restrictions. The rapid resolution of the DeepSeek-V4 reasoning error and the addition of the WhatsApp voice bridge show that users are deploying NanoBot across diverse hardware (Windows PCs) and messaging platforms. There is strong enthusiasm for local/custom models (GLM-5.1, Xiaomi MiMo) and open-source search providers (DuckDuckGo/Tavily proxies).

## 8. Backlog Watch
*   **[PR #2438](https://github.com/HKUDS/nanobot/pull/2438):** Handling `ImageContent` in MCP tool responses. Open since late March. Needs a maintainer's review as MCP is a critical growing standard.
*   **[PR #3080](https://github.com/HKUDS/nanobot/pull/3080):** Custom provider support and workspace command loading. Open since mid-April, potentially blocked or superseded, but needs official disposition to guide contributors.
*   **[PR #3281](https://github.com/HKUDS/nanobot/pull/3281):** Configurable memory consolidation ratio. Appears to have addressed maintainer feedback but hasn't been merged yet.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-05

## 1. Today's Overview
The Hermes Agent project is experiencing **extremely high community activity**, with 100 total events (50 issues and 50 pull requests) updated in the last 24 hours. The open source community is actively engaging, as seen by the 27 open PRs submitted today. However, the maintainers appear to be struggling to triage this volume, with 38 issues remaining open and only 12 closed. The most urgent event is a **P0 startup crash** affecting all macOS and Linux users on the latest version, which has rapidly spawned multiple duplicate issues and emergency hotfix PRs.

## 2. Releases
**No new releases** were published today. The project's latest stable version remains **v0.12.0** (released 2026-04-30). Given the critical P0 startup bug in the current release, the repository is in urgent need of a patch release (v0.12.1) to address the crashing CLI.

## 3. Project Progress
Maintainers and contributors focused on stability, TUI (Terminal User Interface) refinements, and plugin observability. 23 PRs were merged or closed today:

*   **Critical Startup Fixes:** PR [#19895](https://github.com/NousResearch/hermes-agent/pull/19895) (merged) and PR [#19919](https://github.com/NousResearch/hermes-agent/pull/19919) (merged) laid the groundwork to resolve the critical `c-S-c` crash, with further cleanup proposed in open PRs [#19912](https://github.com/NousResearch/hermes-agent/pull/19912) and [#19918](https://github.com/NousResearch/hermes-agent/pull/19918).
*   **UX / UI Enhancements:** Merged PR [#12982](https://github.com/NousResearch/hermes-agent/pull/12982) fixed aggressive sticky scroll in the TUI, and PR [#19916](https://github.com/NousResearch/hermes-agent/pull/19916) improved the Kanban dashboard UI contrast.
*   **Process & CLI Observability:** Fixed silent drops in TUI process notifications (merged PR [#15329](https://github.com/NousResearch/hermes-agent/pull/15329)) and corrected `hermes status` environment diagnostics (merged PR [#14582](https://github.com/NousResearch/hermes-agent/pull/14582)).
*   **Tooling:** Merged PR [#11916](https://github.com/NousResearch/hermes-agent/pull/11916) to prevent shared live CDP browser tasks from silently hijacking one another.

## 4. Community Hot Topics
The community is currently hyper-focused on a widespread CLI crash and several underlying security vulnerabilities:

*   **The v0.12.0 Startup Crash:** The most active topic today is the immediate crash of the CLI on macOS and Linux. Issue [#19903](https://github.com/NousResearch/hermes-agent/issues/19903) (5 comments, 2 👍) and Issue [#19894](https://github.com/NousResearch/hermes-agent/issues/19894) (6 comments) report that `prompt_toolkit` fails to parse an invalid `Ctrl+Shift+C` keybinding.
*   **Remote Ollama Connectivity:** Issue [#7494](https://github.com/NousResearch/hermes-agent/issues/7494) (6 comments) details a persistent frustration where Hermes cannot interface with remote Ollama instances, restricting users to localhost deployments.
*   **Context & Memory Failures:** Users relying on Hermes for continuous chat are reporting memory loss. Issue [#14420](https://github.com/NousResearch/hermes-agent/issues/14420) (5 comments) highlights the agent's inability to recall basic context from previous turns.
*   **Gateway Reliability:** Discord and Telegram bot operators are noticing dropped messages when auxiliary tasks run (Issue [#19822](https://github.com/NousResearch/hermes-agent/issues/19822), 2 comments) and recurring log noise regarding async cleanup (Issue [#19824](https://github.com/NousResearch/hermes-agent/issues/19824), 3 comments).

## 5. Bugs & Stability
Stability has taken a hit with the latest release, primarily due to TUI keybinding errors and long-standing memory/gateway issues:

*   **P0 - CLI Startup Crash:** `hermes` and `hermes chat` crash instantly on Linux/macOS due to an invalid `c-S-c` keybinding. (Issues [#19903](https://github.com/NousResearch/hermes-agent/issues/19903), [#19896](https://github.com/NousResearch/hermes-agent/issues/19896)). **Fix PRs exist:** [#19912](https://github.com/NousResearch/hermes-agent/pull/19912) and [#19918](https://github.com/NousResearch/hermes-agent/pull/19918) are awaiting merge.
*   **P0 - Security Vulnerabilities:** Several severe security flaws were exposed today:
    *   Subprocess environment blocklists can be bypassed via `/proc/environ` (Issue [#4427](https://github.com/NousResearch/hermes-agent/issues/4427)).
    *   Session capture writes API keys to plaintext JSON files (Issue [#19845](https://github.com/NousResearch/hermes-agent/issues/19845)).
    *   `HERMES_REDACT_SECRETS` is off by default, leaking API keys in Discord/Telegram chats (Issue [#19897](https://github.com/NousResearch/hermes-agent/issues/19897)).
*   **P1 - `mcp add` Broken:** The command `hermes mcp add` silently launches a chat session instead of registering the server (Issue [#19785](https://github.com/NousResearch/hermes-agent/issues/19785)).
*   **P1 - Session Crashes on Deleted Directory:** Gateway sessions crash if a working directory is deleted while active. (Fix proposed in PR [#19925](https://github.com/NousResearch/hermes-agent/pull/19925)).

## 6. Feature Requests & Roadmap Signals
Operators of the Hermes Agent are pushing the project toward more robust multi-agent and enterprise-ready deployments:

*   **Discord Multi-Profile Routing:** Users want to run multiple distinct AI personalities via a single bot/gateway process, routing profiles based on channel IDs (Issue [#19809](https://github.com/NousResearch/hermes-agent/issues/19809)).
*   **Real-time Session Observability:** Long-running agentic runs are currently invisible to external dashboards until completion. Issue [#19816](https://github.com/NousResearch/hermes-agent/issues/19816) requests real-time state database writes, while Issue [#19922](https://github.com/NousResearch/hermes-agent/issues/19922) requests detailed token/cost runtime footers in the UI.
*   **Codex Worker Integration:** PR [#19924](https://github.com/NousResearch/hermes-agent/pull/19924) adds an OpenAI Codex CLI worker lane, signaling a roadmap push toward orchestrating multiple specialized CLI coding agents.
*   **Session Continuity Linkage:** When agents hit `max_turns`, they start new sessions without linking to the parent thread (Issue [#19818](https://github.com/NousResearch/hermes-agent/issues/19818)). Addressing this will drastically improve autonomous task completion.

## 7. User Feedback Summary
Real-world users are expressing frustration with basic operational stability. Dissatisfaction is centered around the fact that a P0 crash made it into the latest release, breaking basic workflows for Mac and Linux users instantly. 

From an operational standpoint, self-hosters are frustrated by remote Ollama bugs (Issue [#7494](https://github.com/NousResearch/hermes-agent/issues/7494)), which prevent distributed home-lab setups. Furthermore, tool-use reliability is currently poor—users note that core tools like `read_file` inject line numbers that silently corrupt files when written back by the agent (Issue [#19798](https://github.com/NousResearch/hermes-agent/issues/19798)). On the positive side, community engagement remains high, with users actively providing detailed stack traces, root cause analyses, and submitting regression tests alongside their bug reports.

## 8. Backlog Watch
Several critical issues require immediate attention from the core maintenance team:

*   **Infrastructure Bypass:** Issue [#18060](https://github.com/NousResearch/hermes-agent/issues/18060) points out that 23 production files bypass the canonical `get_hermes_home()` function, breaking Docker deployments. This has 2 👍 and needs prioritization.
*   **Kanban Security:** PR [#19533](https://github.com/NousResearch/hermes-agent/issues/19533) notes that the plugin API routes bypass dashboard authentication, posing a security risk.
*   **Hindsight Memory Daemon:** Issue [#7149](https://github.com/NousResearch/hermes-agent/issues/7149) (open since April 10) highlights that the local memory backend daemon shuts down after 300s of idle time and fails to restart, permanently breaking long-term memory until manual intervention.
*   **UI State Bug:** Web UI chat fails to auto-refresh new messages, requiring manual browser refreshes to see agent replies (Issue [#19543](https://github.com/NousResearch/hermes-agent/issues/19543)).

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-05

*Based on data from [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)*

---

## 1. Today's Overview

NanoClaw experienced a **very high-activity day**, with 35 pull requests updated (19 merged/closed) and 3 issues active in the last 24 hours. The project is clearly in a post-v2 rewrite phase, with contributors aggressively fixing regressions, tightening the setup flow, and expanding channel integrations. Community engagement is strong, with multiple external contributors submitting feature skills, bug fixes, and platform compatibility patches. The absence of new releases suggests the team is consolidating fixes before tagging a stable v2 release.

---

## 2. Releases

No new releases were published today.

---

## 3. Project Progress

### Merged/Closed PRs (19 today)

**Bug Fixes & Stability:**
- [PR #2242](https://github.com/qwibitai/nanoclaw/pull/2242) — **fix(agent-runner): derive MCP allowedTools from registered mcpServers** (by mashkovtsevlx). Dynamically generates tool allowlist patterns instead of relying on a static entry. Closes #2241.
- [PR #2245](https://github.com/qwibitai/nanoclaw/pull/2245) — **fix(setup): use fmtDuration in the container-build spinner** (by alipgoldberg). Long-delayed polish to display minutes during long builds.
- [PR #2250](https://github.com/qwibitai/nanoclaw/pull/2250) — **Warn when host is below recommended hardware specs** (by Koshkoshinsk). Pre-flight RAM (3700 MB) and disk (20 GB) check with user-facing warning.
- [PR #2252](https://github.com/qwibitai/nanoclaw/pull/2252) — **feat(setup): warn when running on Google Compute Engine VM** (by Koshkoshinsk). DMI-based detection; NanoClaw doesn't work reliably on GCE due to `sudo` restrictions.
- [PR #2055](https://github.com/qwibitai/nanoclaw/pull/2055) — **fix(setup): inject ~/.local/bin into PATH so post-install onecli is reachable** (by dooha333). Lingering 8-day-old fix finally merged.

**New Channel Integrations:**
- [PR #2192](https://github.com/qwibitai/nanoclaw/pull/2192) — **Add DeltaChat channel adapter** (by axxml). Full integration shipping as a feature skill.
- [PR #2251](https://github.com/qwibitai/nanoclaw/pull/2251) — **Add namespacedPlatformId exclusion for DeltaChat** (by axxml). Follow-up fix for the new adapter.

**Closed Without Merge (superseded/rejected):**
- [PR #2258](https://github.com/qwibitai/nanoclaw/pull/2258) — ffmpeg MCP server (v1, superseded by #2261).
- [PR #2253](https://github.com/qwibitai/nanoclaw/pull/2253) — WhatsApp API integration (likely duplicate/invalid).
- [PR #2254](https://github.com/qwibitai/nanoclaw/pull/2254) — WhatsApp business flow via rial-platform (closed, possibly out of scope).

---

## 4. Community Hot Topics

The most actively discussed item is:

- **[Issue #2234](https://github.com/qwibitai/nanoclaw/issues/2234)** — *Can this work with llama.cpp?* (Author: Kwisss, 1 comment). User reports that while Claude Code connects to `llama-server` seamlessly, NanoClaw fails with a timeout despite llama.cpp logging responses. This suggests a **response-format or streaming-protocol mismatch** between NanoClaw's OpenCode provider layer and llama.cpp's OpenAI-compatible endpoint. Underlying need: **local-first / self-hosted LLM support** is clearly in demand, and the OpenCode provider abstraction may not be generic enough for non-Anthropic backends.

- **[PR #2262](https://github.com/qwibitai/nanoclaw/pull/2262)** — *fix(provider): forward ANTHROPIC_BASE_URL into opencode container env* (by hirojinho). Directly addresses the provider discoverability issue for DeepSeek/OpenRouter users. Signals that **multi-provider support is fragile** and being actively patched.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Status |
|----------|----------|-------------|--------|
| 🔴 **High** | [Issue #2257](https://github.com/qwibitai/nanoclaw/issues/2257) | Corrupt `container.json` silently wiped on next container spawn — silent data loss of mounts, MCP servers, packages | **Open, no fix PR yet** |
| 🟠 **High** | [Issue #2241](https://github.com/qwibitai/nanoclaw/issues/2241) / [PR #2242](https://github.com/qwibitai/nanoclaw/pull/2242) | MCP server tools silently dropped by static `allowedTools` filter | **✅ Fixed (PR merged)** |
| 🟠 **Medium** | [Issue #2234](https://github.com/qwibitai/nanoclaw/issues/2234) | llama.cpp timeout — possible provider-layer protocol mismatch | **Open, under investigation** |
| 🟡 **Medium** | [PR #2262](https://github.com/qwibitai/nanoclaw/pull/2262) | Non-Anthropic providers report "no providers found" due to missing env forwarding | **Open PR** |
| 🟡 **Medium** | [PR #2259](https://github.com/qwibitai/nanoclaw/pull/2259) | Baileys v6→v7 upgrade needed; v6 causes split sessions and dropped WhatsApp messages | **Open PR** |
| 🟡 **Medium** | [PR #2260](https://github.com/qwibitai/nanoclaw/pull/2260) | WhatsApp LID dual-row migration creates duplicate `messaging_groups` rows | **Open PR** |
| 🔵 **Low** | [PR #2255](https://github.com/qwibitai/nanoclaw/pull/2255) | Stale `/workspace/group` path references in v2 | **Open PR** |

**Key concern:** Issue #2257 (silent config data loss) has no fix PR and could affect production deployments. This warrants maintainer attention.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood |
|--------|--------|------------|
| **Local LLM support (llama.cpp compatibility)** | [Issue #2234](https://github.com/qwibitai/nanoclaw/issues/2234) | High — provider abstraction fixes (#2262) are already in flight |
| **Per-channel read/write permissions** | [PR #2248](https://github.com/qwibitai/nanoclaw/pull/2248) | Medium — feature skill PR open, needs review |
| **ffmpeg/ffprobe MCP server for media processing** | [PR #2261](https://github.com/qwibitai/nanoclaw/pull/2261) | Medium — second iteration after #2258 was closed |
| **Admin cancel commands for active agent runs** | [PR #2143](https://github.com/qwibitai/nanoclaw/pull/2143) | Medium — open since Apr 30, still active |
| **WhatsApp Business verification flow (rial-platform)** | [PR #2254](https://github.com/qwibitai/nanoclaw/pull/2254) | Low — PR was closed, may be out of scope |
| **Telegram setup UX improvements (QR codes, mobile fallback)** | [PR #2246](https://github.com/qwibitai/nanoclaw/pull/2246), [PR #2249](https://github.com/qwibitai/nanoclaw/pull/2249) | High — iterative polish, likely to merge soon |

**Predicted for next release:** Multi-provider env forwarding fix (#2262), WhatsApp Baileys v7 upgrade (#2259), MCP allowedTools dynamic derivation (#2242 already merged), and setup pre-flight checks (#2250, #2252 already merged).

---

## 7. User Feedback Summary

**Pain Points:**
- **Local LLM users feel second-class.** Issue #2234 highlights that while competitor tools (Claude Code) work seamlessly with llama.cpp, NanoClaw's provider layer introduces friction.
- **Silent failures are eroding trust.** Both #2257 (config wipe) and #2241 (MCP tools silently dropped) involve the system failing without any error message — users lose data or functionality without knowing why.
- **Setup on non-standard hosts (GCE, low-spec VMs) is a minefield.** Multiple PRs today (#2250, #2252) add pre-flight warnings, confirming users have been hitting walls during bootstrap.

**Positive Signals:**
- Active external contributor base (10+ unique authors today) suggests a healthy community.
- Channel integrations are maturing rapidly (DeltaChat merged, Telegram UX improving, WhatsApp being stabilized).
- The v2 rewrite is receiving focused follow-up fixes for path migrations (#2255) and migration script cleanup (#2260).

---

## 8. Backlog Watch

| Item | Age | Concern |
|------|-----|---------|
| [Issue #2257](https://github.com/qwibitai/nanoclaw/issues/2257) — Silent `container.json` data loss | 1 day | **Critical.** No fix PR. Silent data loss of mounts, MCP servers, and packages on container respawn. Needs immediate maintainer response. |
| [PR #2143](https://github.com/qwibitai/nanoclaw/pull/2143) — Admin cancel commands for active agent runs | 5 days | Still open with no comments. Operational necessity for production deployments where agents can get stuck. |
| [PR #2262](https://github.com/qwibitai/nanoclaw/pull/2262) — Forward ANTHROPIC_BASE_URL for non-Anthropic providers | 1 day | Blocks all DeepSeek/OpenRouter users. Should be prioritized for merge. |
| [PR #2259](https://github.com/qwibitai/nanoclaw/pull/2259) + [PR #2260](https://github.com/qwibitai/nanoclaw/pull/2260) — WhatsApp Baileys v7 upgrade + migration cleanup | 1 day | Paired PRs fixing split sessions and message loss. WhatsApp is likely a high-traffic channel; these should be reviewed together. |
| [PR #2248](https://github.com/qwibitai/nanoclaw/pull/2248) — Per-wiring channel permissions (read/write/read+write) | 1 day | Architectural feature PR with no comments yet. Needs design review before the v2 API stabilizes. |

---

*Digest generated on 2026-05-05. Data reflects GitHub activity from the preceding 24 hours.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-05

## 1. Today's Overview
NullClaw is currently experiencing healthy, community-driven development activity, with 3 open issues and 4 active pull requests updated in the past 24 hours. The project saw no new releases today, indicating an ongoing accumulation of improvements before the next stable rollout. Activity is heavily focused on foundational security, system observability, and platform stability. The presence of a hackathon-driven pull request also highlights growing external interest in NullClaw as a platform for data governance. Overall, the project is actively maintained with strong community engagement in the areas of system reliability and sandbox behaviors.

## 2. Releases
* **No new releases** were recorded today. The project maintains its current stable version while pending PRs (such as the Zig v0.16 build fix) are merged.

## 3. Project Progress
* **Merged/Closed:** PR [#884](https://github.com/nullclaw/nullclaw/pull/884) (Fix/add crit tests) was closed. This PR contributed critical Zig test coverage for runtime contracts, ownership, lifecycle, and security routing, resolving a few production issues exposed by the new tests.
* **Open PRs Advancing:** 
  * PR [#887](https://github.com/nullclaw/nullclaw/pull/887) (Fix build with zig v0.16 for win/linux) is in the pipeline to ensure the project builds smoothly on the latest Zig toolchain.
  * PR [#883](https://github.com/nullclaw/nullclaw/pull/883) (probe: resolve executable before spawning child process) directly addresses startup stability by fixing a Zig stdlib bug that left defunct processes on failed `execve` calls.
  * PR [#885](https://github.com/nullclaw/nullclaw/pull/885) (Add NullClaw Data Governance Layer) is a substantial new draft feature submitted by an external team participating in the "WB × OpenSource Hackathon."

## 4. Community Hot Topics
* The most actively discussed item is Issue [#871](https://github.com/nullclaw/nullclaw/issues/871) (5 comments), which debates the practicality of `web_search` on the low-resource devices that NullClaw targets. Users are expressing a strong underlying need for native, API-key-free search integration (like DuckDuckGo) rather than relying on external commercial APIs like Brave Search.
* Issue [#882](https://github.com/nullclaw/nullclaw/issues/882) (2 comments) is sparking conversation around system initialization, specifically regarding the transition from probing external tools (`firejail`, `bwrap`, `docker`) to defaulting to Linux's native Landlock for sandboxing. Users are prioritizing faster, cleaner startups without child process overhead.

## 5. Bugs & Stability
* **[High Severity] Runtime Startup / Probing Crashes:** Issue [#882](https://github.com/nullclaw/nullclaw/issues/882) highlights recurring issues with sandbox auto-detection probing during startup. **Fix available:** PR [#883](https://github.com/nullclaw/nullclaw/pull/883) implements a pre-spawn check to resolve executables before execution, mitigating defunct processes. 
* **[Medium-High Severity] Low-Resource Device Usability:** Issue [#871](https://github.com/nullclaw/nullclaw/issues/871) classifies `web_search` as practically unusable on weak devices due to API requirements and resource constraints. A direct fix PR is not yet submitted, making this a critical pain point to monitor.
* **[Medium Severity] Zig Build Failure:** The upgrade to Zig v0.16 breaks Win/Linux builds. **Fix available:** PR [#887](https://github.com/nullclaw/nullclaw/pull/887).

## 6. Feature Requests & Roadmap Signals
* **Observability / Thinking Mode:** Issue [#886](https://github.com/nullclaw/nullclaw/issues/886) requests an option to display reasoning/thinking steps in the terminal. When running long tasks (like Outlook MCP integrations), users suffer from a "black box" effect and cannot tell if the agent is working or stuck. This is a strong candidate for the next version to improve UX.
* **Data Governance Layer:** PR [#885](https://github.com/nullclaw/nullclaw/pull/885) introduces an enterprise-grade Data Governance Layer. If merged, this signals a roadmap expansion into corporate/compliance use cases.

## 7. User Feedback Summary
Real-world user feedback points to two main themes: **hardware constraints** and **process transparency**. Users trying to run NullClaw as a cheap, lightweight personal assistant are frustrated by API-dependent features (like web search) that violate the premise of local, low-resource execution. Furthermore, users running complex MCP tasks report significant anxiety due to the CLI providing no feedback during long operations (Issue #886). Overall, users are highly technical but demand UX that respects headless, low-end, and long-running terminal environments. 

## 8. Backlog Watch
* **Issue [#871](https://github.com/nullclaw/nullclaw/issues/871) (Opened 2026-04-25):** Although active today, this issue lacks a 👍 reaction from maintainers or an assigned fix PR. Given that low-resource operation is NullClaw's stated use case, the lack of a concrete workaround for DuckDuckGo search needs maintainer prioritization before the next release.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-05

## 1. Today's Overview
IronClaw is currently experiencing a high-velocity, multi-workstream development phase, evidenced by 17 pull requests updated in the last 24 hours (12 open, 5 merged/closed) and sustained core-team activity. The bulk of the engineering effort is concentrated on the "Reborn" initiative—a major architectural overhaul introducing native memory, event stores, and projection services. The project's release velocity appears to be intentionally paused (0 new releases), likely awaiting the stabilization and landing of the core Reborn substrate into the main branch. Community engagement remains steady with 2 active issues focusing on configuration-as-code and capability visibility. Overall, the repository demonstrates a healthy, highly active state dominated by foundational infrastructure work and ambitious architectural upgrades.

## 2. Releases
**No new releases were recorded today.** The project is actively managing a complex stack of cross-dependent PRs, suggesting the next release will likely be a significant milestone incorporating the Reborn architecture updates.

## 3. Project Progress
Significant foundational and architectural progress was made today, highlighted by 5 merged/closed PRs:

*   **Reborn Memory Stack Maturity (PRs [#3184](https://github.com/nearai/ironclaw/pull/3184), [#3185](https://github.com/nearai/ironclaw/pull/3185), and [#3183](https://github.com/nearai/ironclaw/pull/3183)):**
    *   PRs 5 and 6 of the Reborn memory stack were closed/merged, successfully porting pure-behavior contracts and adding vertical integration tests for native repositories.
    *   PR 4 remains open, actively implementing the native Postgres repository behavior (`reborn_memory_*` substrate) which will be crucial for high-performance memory retrieval.
*   **Engine Fixes & CI Stability ([#3157](https://github.com/nearai/ironclaw/pull/3157), [#3235](https://github.com/nearai/ironclaw/pull/3235)):** Progress was made on fixing CodeAct gate-pause bugs that caused runtime errors instead of user pauses, alongside patches to unblock Live Canary authentication tests following an engine-v2 contract change.
*   **Abound Demo & Missions ([#3241](https://github.com/nearai/ironclaw/pull/3241), [#3242](https://github.com/nearai/ironclaw/pull/3242)):** Added missing documentation and support for target rate checking missions, enhancing the Abound demonstration capabilities.
*   **Vision Bug Fix ([#2390](https://github.com/nearai/ironclaw/pull/2390)):** Merged a fix for OpenAI-compatible vision providers that were failing due to missing `detail` on `ImageUrl`. 

## 4. Community Hot Topics
The most actively discussed items center around declarative configuration and system visibility:

*   **[EPIC] Configuration-as-Code ([Issue #3036](https://github.com/nearai/ironclaw/issues/3036)):** With 3 comments and 1 thumbs-up, this is a highly requested enhancement. The community (and core contributors) recognize the pain point of operators having to hand-edit a fragmented mix of `.env`, `.system/` docs, JSON settings, and runtime flags. The underlying need is clear: enterprise-grade IronClaw deployments require schema validation, diffs, and an audit trail for configuration changes via tenant blueprints.
*   **Tool Surface Visibility ([Issue #3090](https://github.com/nearai/ironclaw/issues/3090)):** Discusses the addition of `ToolSurfaceService` and `CapabilityCatalog`. With 3 comments, the focus is on strictly separating *visibility* (what tools the model can see) from *authority* (what tools can actually execute), a critical safety and architectural constraint for agentic AI.

## 5. Bugs & Stability
No explicit crashes or critical regressions were reported in newly opened issues today, but stability is being actively pursued through open PRs:

*   **High Severity - Engine V2 Gate Pauses ([PR #3157](https://github.com/nearai/ironclaw/pull/3157)):** CodeAct scripts were incorrectly throwing `RuntimeError: execution paused by gate 'approval'` instead of pausing gracefully for user input. This is currently being fixed by inlining the gate await logic.
*   **Medium Severity - Canary Auth Failures ([PR #3235](https://github.com/nearai/ironclaw/pull/3235)):** Live Canary E2E tests for authentication have been failing for 3+ days due to a contract change in engine-v2.
*   **Fixed - Vision Provider Errors ([PR #2390](https://github.com/nearai/ironclaw/pull/2390)):** OpenAI-compatible vision providers were crashing with `Message conversion error: OpenAI image URI must have image detail`. This has been successfully patched and closed.

## 6. Feature Requests & Roadmap Signals
The roadmap is heavily signaling a transition to a highly extensible, enterprise-ready agentic runtime:

*   **Reborn Substrate Landing ([PR #3230](https://github.com/nearai/ironclaw/pull/3230)):** The most massive upcoming shift. The core team is preparing to merge the "Reborn" architecture into `main` behind default-off gates. This will likely dominate the next version's release notes.
*   **Web3/Advanced Credential Injection ([PR #3240](https://github.com/nearai/ironclaw/pull/3240)):** A new contributor is adding per-request credential signing (HMAC, EIP-712, NEP-413). This signals IronClaw is gearing up for native Web3/Web2.5 decentralized identity and transaction signing capabilities.
*   **New Communication Channels ([PR #1666](https://github.com/nearai/ironclaw/pull/1666)):** The ongoing development of a WeChat WASM channel shows a strategic push toward dominating non-Western messaging platforms.
*   **Security Governance ([PR #3239](https://github.com/nearai/ironclaw/pull/3239)):** The creation of a formal `SECURITY.md` indicates the project is maturing and preparing for broader enterprise adoption.

## 7. User Feedback Summary
Feedback from the community and regular contributors highlights a strong desire for **better developer and operator ergonomics**. The configuration-as-code epic ([Issue #3036](https://github.com/nearai/ironclaw/issues/3036)) explicitly notes that the current fragmented configuration setup is a major pain point for operators. Furthermore, the bug reports surrounding OpenAI vision compatibility ([PR #2390](https://github.com/nearai/ironclaw/pull/2390)) show that users are actively trying to integrate IronClaw with a diverse array of external LLM providers, and expect seamless compatibility out-of-the-box.

## 8. Backlog Watch
Several massive, high-scope Pull Requests have been open for an extended period and require maintainer attention for final review or merging:

*   **[PR #1764](https://github.com/nearai/ironclaw/pull/1764):** The Abound demo PR (risk: high, scope: massive) has been open since March 30, 2026. It touches almost every scope (agent, channels, tools, llm, docs) and needs a final push to merge.
*   **[PR #1666](https://github.com/nearai/ironclaw/pull/1666):** The WeChat channel integration has also been open since late March. It's a highly requested feature for platform expansion but remains unmerged.
*   **[PR #3230](https://github.com/nearai/ironclaw/pull/3230):** The Reborn substrate landing PR is an XL-sized change that will likely block other Reborn stack PRs once merged. It requires intense scrutiny before landing on `main`.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the project digest for LobsterAI based on the provided data for May 5, 2026.

### 1. Today's Overview
LobsterAI exhibits a moderate level of maintenance and community activity, characterized primarily by backend optimizations and ongoing dependency management. Over the last 24 hours, the project saw one issue resolved and two previously opened pull requests receive renewed attention, though no new code was merged. The absence of recent official releases suggests the project is currently in a steady, iterative development phase rather than an active deployment cycle. Overall, the repository remains active, with core contributors and automated tools ensuring codebase health and performance enhancements. 

### 2. Releases
*No new releases were recorded today. There are no breaking changes, new features, or migration notes to report.*

### 3. Project Progress
While no PRs were merged today, there is notable forward momentum on existing contributions:
*   **Performance Optimization Reviewed:** PR [#811](https://github.com/netease-youdao/LobsterAI/pull/811) saw recent activity. This PR proposes a significant backend/state-management optimization for the cowork feature, upgrading stream message update lookup performance from O(n) to O(1). This indicates the maintainers are actively reviewing and stress-testing long-session capabilities.
*   **Dependency Maintenance:** Automated dependency bot PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) was updated. This suggests maintainers are currently evaluating a major bump of the core Electron framework (from v40.2.1 to v41.5.0).

### 4. Community Hot Topics
The most actively discussed issue recently revolved around **third-party AI authentication and regional restrictions**. 
*   Issue [#1877](https://github.com/netease-youdao/LobsterAI/issues/1877) highlighted a scenario where a user's local Codex CLI functioned normally, but the ChatGPT sign-in via LobsterAI failed. The underlying error (`HTTP 403: unsupported_country_region_territory`) indicates a nuanced user need: the community is utilizing proxy configurations to bypass regional API restrictions locally, and they expect LobsterAI's internal authentication flows to respect these local network configurations. The issue was successfully closed after a 2-comment exchange, indicating responsive troubleshooting by the maintainers.

### 5. Bugs & Stability
*   **Severity: Medium (Closed)**
    *   [Issue #1877](https://github.com/netease-youdao/LobsterAI/issues/1877): Authentication failure due to regional network restrictions (HTTP 403). While the core bug was rooted in geographic API blocking rather than a code defect, the interaction between the app's auth module and local proxy environments was the root cause. This issue has been marked as **Closed**, implying a fix or workaround has been provided.
*   *No critical crashes, data loss regressions, or unpatched bugs were reported in the last 24 hours.*

### 6. Feature Requests & Roadmap Signals
*   **Enhanced Long-Session Performance:** PR [#811](https://github.com/netease-youdao/LobsterAI/pull/811) heavily implies that the team is focusing on optimizing the real-time "cowork" experience. Introducing an indexing table (`messageIndexById`) signals that upcoming versions will likely market heavily on high-performance, infinitely scrolling long-context conversations.
*   **Electron Ecosystem Upgrade:** PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) hints that the next minor or major release will feature a foundational desktop framework upgrade (Electron 41.x), which will likely bring underlying improvements to desktop app speed and security.

### 7. User Feedback Summary
*   **Pain Points:** Users operating from regions with strict AI API limitations experience friction during initial login and token exchange. The expectation is for desktop AI assistants to seamlessly inherit local OS network/proxy settings.
*   **Use Cases:** Users are actively using LobsterAI alongside other local AI tools (like Codex) and expect interoperable network behaviors. 
*   **Satisfaction:** The prompt closure of Issue #1877 demonstrates high user satisfaction regarding maintainer responsiveness and support velocity.

### 8. Backlog Watch
*   **Dependency Bottleneck:** PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) has been open since April 2, 2026. Given that it is a major architectural update (Electron 40.x to 41.x), it requires careful validation. Maintainers should prioritize finalizing this PR to prevent falling behind on security patches.
*   **Stale Performance PR:** PR [#811](https://github.com/netease-youdao/LobsterAI/pull/811) has been in the backlog since March 25, 2026, and was marked as `[stale]`. Despite recent activity, it needs a definitive review. Merging this is highly beneficial for the app's scalability and should be prioritized for the next sprint.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-05-05

## 1. Today's Overview
Moltis exhibits a focused, low-to-moderate level of maintenance activity today, with a clear split between community-reported edge cases and internal CI stability improvements. The project saw one newly opened community bug report and one closed internal pull request, with zero new version releases. Activity over the past 24 hours suggests maintainers are actively diagnosing flaky test pipelines while users begin exploring advanced parallel execution scenarios. Overall project health remains stable, with ongoing work centered around robustness and observability rather than feature expansion.

## 2. Releases
No new releases were recorded today. 

## 3. Project Progress
The primary development progress today centers on improving end-to-end (E2E) testing observability and pipeline reliability.
*   **PR [#965](https://github.com/moltis-org/moltis/pull/965) [CLOSED]:** Authored by `penso`, this PR introduced comprehensive RPC logging and gateway log capturing for CI diagnosis. By logging all WebSocket RPCs at the info level and capturing gateway logs as CI artifacts, the development team is actively trying to isolate the root cause of 30-second timeout hangs that occur in CI but not in local environments. Although closed (possibly in favor of another approach or merged into a specific test branch), this signals a dedicated effort to stabilize the CI pipeline.

## 4. Community Hot Topics
Activity in the community was minimal today, with no high-engagement (high comment/reaction) threads. The only active item is a newly created bug report. 
*   **Issue [#964](https://github.com/moltis-org/moltis/issues/964):** Although it currently has zero comments and zero reactions, it is the focal point of today's community activity. The underlying need highlighted here is that users are actively pushing Moltis's capabilities by running multiple tools in parallel, exposing a need for the agent to handle concurrent sandbox environments smoothly.

## 5. Bugs & Stability
*   **[HIGH] Docker Sandbox Collisions during Parallel Execution:** Reported in **Issue [#964](https://github.com/moltis-org/moltis/issues/964)** by `faevourite`. When Moltis executes tools in parallel, the isolated Docker environments experience name collisions. This is a significant bug as it directly impacts the agent's ability to multitask safely without interfering with itself. 
    *   *Fix Status:* No fix PRs appear to exist yet.
*   **[MEDIUM] CI RPC Timeouts:** While not an end-user bug, maintainer `penso` highlighted CI instability where WebSocket RPCs hang past a 30-second timeout. This flakiness could be masking real bugs in the main branch. 

## 6. Feature Requests & Roadmap Signals
There were no explicit feature requests raised today. However, the community bug report provides a strong roadmap signal: **Enhanced Parallel Tool Execution**. Because Issue #964 shows a user attempting to run tools in parallel, the project's next logical milestone should include first-class support for concurrent agent actions, requiring refactored sandbox naming conventions to support parallelism without collision.

## 7. User Feedback Summary
Real user pain points identified today revolve entirely around deployment and execution environments:
*   **Pain Point:** The current Docker sandbox implementation assumes a more sequential execution model. Users leveraging Moltis for complex automation are hitting a wall when asking the AI to perform concurrent tasks.
*   **Use Case:** Heavy automation workflows requiring the AI agent to multitask.
*   **Satisfaction:** Neutral to slightly dissatisfied; while the feature technically triggers, it fails under parallel loads.

## 8. Backlog Watch
*   **Issue [#964](https://github.com/moltis-org/moltis/issues/964):** Being a brand-new issue, it requires immediate triage from the maintainers to confirm the bug and potentially request a minimum reproducible example from the author (`faevourite`). 
*   **CI Stability (General):** The ongoing efforts seen in PR [#965](https://github.com/moltis-org/moltis/pull/965) indicate that E2E test reliability is currently a bottleneck for the maintainers. Resolving the 30s RPC timeout in the CI pipeline should remain a top priority to ensure future PRs can be merged with confidence.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-05-05

## 1. Today's Overview
The CoPaw (QwenPaw) project is experiencing a highly active period, driven heavily by community contributions and robust issue triaging. Over the past 24 hours, the project saw 21 updated Pull Requests with an impressive 15 merged or closed, indicating a strong, active merge cadence by the maintainers. Meanwhile, 14 new or updated issues were opened, highlighting active community engagement. The focus of the day's activity centers heavily on system stability (fixing session interrupts and streaming bugs), hardening security (preventing file overwrites and addressing unauthenticated gateways), and expanding infrastructure support.

## 2. Releases
No new official releases were recorded today. The latest identified versions in recent issue trackers are `1.1.6b1` and `1.1.5post1`.

## 3. Project Progress
Maintainers merged or closed 15 PRs in the last 24 hours, bringing significant improvements to stability, error handling, and UX:
*   **Streaming & Session Stability:** Merged [PR #2783](https://github.com/agentscope-ai/QwenPaw/pull/2783) to auto-recover from context overflow via memory compaction retries, and [PR #2784](https://github.com/agentscope-ai/QwenPaw/pull/2784) to sanitize leaked "Thinking" prefixes in visible UI text.
*   **MCP & Providers:** Improved MCP teardown and error handling ([PR #1977](https://github.com/agentscope-ai/QwenPaw/pull/1977), [PR #2052](https://github.com/agentscope-ai/QwenPaw/pull/2052)) and ensured OpenAI-compatible provider errors are surfaced accurately ([PR #2520](https://github.com/agentscope-ai/QwenPaw/pull/2520)). 
*   **UX & Connectivity:** Resolved a major issue where packaged desktop apps left orphaned backend processes on Windows ([PR #1479](https://github.com/agentscope-ai/QwenPaw/pull/1479)) and fixed Ollama timeouts caused by IPv6/IPv4 resolution ([PR #1480](https://github.com/agentscope-ai/QwenPaw/pull/1480)).

## 4. Community Hot Topics
The most actively discussed issues revolve around agent stability and community-driven architectural improvements:
*   **Windows Environment Packaging:** [Issue #3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) (3 comments) details a persistent conflict between `conda-pack` and `pip install qwenpaw[full]` which causes build failures and hides stderr/stdout outputs, making debugging difficult.
*   **Multi-Agent Architecture:** [Issue #4031](https://github.com/agentscope-ai/QwenPaw/issues/4031) (1 comment) sparked discussion regarding context loss during multi-agent collaboration. The current architecture causes sub-agents to spawn separate sessions, forcing the primary agent to poll for progress and block the user session.
*   **Console UI Lag:** [Issue #4023](https://github.com/agentscope-ai/QwenPaw/issues/4023) (3 comments) reports severe input box stuttering in the frontend UI, an issue affecting core usability.

## 5. Bugs & Stability
Several high-severity bugs regarding model streaming and tool execution were reported today:
1.  **ReAct Loop Duplication:** [Issue #4034](https://github.com/agentscope-ai/QwenPaw/issues/4034) - Streaming models (MiMo, DeepSeek) cause the ReAct loop to repeatedly call the same tool and duplicate text 2-3 times.
2.  **Session Interrupt & VENV Failures:** [Issue #4027](https://github.com/agentscope-ai/QwenPaw/issues/4027) - Sessions randomly fail to interrupt, and the Python interpreter tool occasionally falls back to the system environment instead of the project's venv. *A fix is currently being reviewed in [PR #4028](https://github.com/agentscope-ai/QwenPaw/pull/4028).*
3.  **MCP Timeouts:** [Issue #4033](https://github.com/agentscope-ai/QwenPaw/issues/4033) - MCP tool calls universally timeout at exactly 30 seconds due to a hardcoded `HttpStatefulClient.timeout` overriding user configurations.
4.  **Local Audio/File Handling:** [Issue #4021](https://github.com/agentscope-ai/QwenPaw/pull/4021) - Fix submitted for `file://` URL audio blocks failing because the HTTP-only downloader overrides local paths. 

## 6. Feature Requests & Roadmap Signals
Users are pushing for more sophisticated agent orchestration and ecosystem integrations:
*   **Security & Guardrails:** [Issue #4020](https://github.com/agentscope-ai/QwenPaw/issues/4020) requests making MEMORY/AGENTS/SOUL files strictly read-only via tool-layer constraints to stop LLMs from accidentally overwriting their own personas. *(Fix PR submitted: [PR #4026](https://github.com/agentscope-ai/QwenPaw/pull/4026))*
*   **Expanded Cloud Provider Support:** [Issue #4030](https://github.com/agentscope-ai/QwenPaw/issues/4030) requests native Vertex AI Gemini support for Google Cloud enterprise users.
*   **Advanced Scheduling:** [Issue #4029](https://github.com/agentscope-ai/QwenPaw/issues/4029) proposes `--at <iso-datetime>` for one-shot cron jobs.
*   **UI Enhancements:** [Issue #4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) points out that adding a new model requires too many clicks, suggesting an upcoming refactor of the settings UI.

## 7. User Feedback Summary
Users are actively utilizing the tool for complex, multi-agent local setups but are hitting friction points in the UI and backend reliability. Satisfaction is high regarding the breadth of features (Ollama integration, desktop app, skills), but dissatisfaction is centered around frontend performance (laggy input boxes) and provider-specific quirks (streaming bugs with DeepSeek/MiMo models). Enterprise and power-users are beginning to heavily scrutinize default security postures, specifically regarding tool execution permissions.

## 8. Backlog Watch
*   **Security Vulnerability:** [Issue #4037](https://github.com/agentscope-ai/QwenPaw/issues/4037) highlights that the HTTP gateway for tools is unauthenticated by default. This allows potential remote execution via `execute_shell_command` if bound to a non-loopback address. Maintainers should prioritize addressing this immediately.
*   **Under Review PRs:** [PR #3729](https://github.com/agentscope-ai/QwenPaw/pull/3729) (Windows taskbar icon fix) and [PR #3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) (Async LLM-generated session titles) have been under review for almost two weeks and need a final maintainer push to merge.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-05

## 1. Today's Overview
ZeroClaw is currently experiencing high development velocity, characterized by a massive volume of issue triage and active feature development, though it is operating without an immediate stable release. In the last 24 hours, the project saw 50 issues updated (with 47 remaining open) and 50 pull requests updated (29 open, 21 merged/closed). The current development cycle is heavily focused on hardening the system's security, fixing provider-specific API regressions (especially with newer LLM releases), and improving the burgeoning "Skills" plugin architecture. The maintainers are actively engaging with the community to stabilize the codebase, likely in preparation for an upcoming major milestone.

## 2. Releases
**No new releases were published today.** The team and contributors are actively merging bug fixes and architectural PRs, indicating that current efforts are likely building toward a `v0.7.6` (focused on Skills UX) or the broader `v0.8.0` milestone.

## 3. Project Progress
A remarkable 21 pull requests were merged or closed today, spanning critical infrastructure, channel integrations, and tooling:
*   **Cost & Observability:** A significant blocker was addressed with the merging of PR [#6356](https://github.com/zeroclaw-labs/zeroclaw/pull/6356) `fix(runtime/cost)`, which fixes silent zero-cost logging for providers outside the default catalog, complementing the open PR [#6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159) for gateway cost recording.
*   **Integrations & Channels:** PR [#6116](https://github.com/zeroclaw-labs/zeroclaw/pull/6116) landed, adding Jira Server/API v2 support via optional email fields. Additionally, WhatsApp integration is advancing rapidly with PR [#6261](https://github.com/zeroclaw-labs/zeroclaw/pull/6261) merging to support cron delivery to WhatsApp.
*   **Memory & Performance:** Performance improvements landed in [#6263](https://github.com/zeroclaw-labs/zeroclaw/pull/6263), which optimized `HandContext.learned_facts` from an O(n²) `Vec` to a `HashSet`. 
*   **Tooling & DevEx:** The Node toolchain was modernized to v24 via [#6212](https://github.com/zeroclaw-labs/zeroclaw/pull/6212), and the memory reindex CLI was implemented in [#6046](https://github.com/zeroclaw-labs/zeroclaw/pull/6046).

## 4. Community Hot Topics
The community is highly active in diagnosing edge cases around external LLM APIs and channel behaviors:
*   **Fresh Install Roadblocks:** Issue [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) (15 comments) highlights a critical workflow blocker on fresh installations regarding `default_model` configurations during onboarding.
*   **DeepSeek API Incompatibility:** Issue [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) (8 comments, 👍 2) reports that ZeroClaw is incompatible with the new DeepSeek-V4 thinking mode API format, pointing to a need for rapid provider updates.
*   **Matrix Transcription Failures:** Issue [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) (6 comments) details how Element Web/Android voice messages fail to transcribe due to an unsupported audio format error.
*   **Skills Schema Development:** A highly active sub-discussion is happening across Issues [#6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) and [#6128](https://github.com/zeroclaw-labs/zeroclaw/issues/6128) regarding strict schema enforcement (`deny_unknown_fields`) to prevent silent typos in the new `SKILL.toml` standard.

## 5. Bugs & Stability
Stability is currently heavily impacted by the rapid iteration of upstream LLM providers and emerging context-management edge cases. Key bugs ranked by severity include:
*   **[S0] Context Spillage (Security):** Issue [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) reports that Discord chat context is leaking into scheduled cron executions. This is a severe data isolation/security risk currently blocked pending a repro.
*   **[S1] LLM Provider Regressions:** Both Anthropic Bedrock ([#6095](https://github.com/zeroclaw-labs/zeroclaw/issues/6095)) and native Anthropic ([#6147](https://github.com/zeroclaw-labs/zeroclaw/issues/6147)) are throwing errors for the new `claude-opus-4-7` model due to deprecated `temperature` fields. 
*   **[S2] Silent Gateway Drops:** Issue [#6127](https://github.com/zeroclaw-labs/zeroclaw/issues/6127) warns of silent fallbacks in the gateway, while [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) notes that the `/api/cost` endpoint stays zero without writing logs. (Fix is incoming via PR [#6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159)).

## 6. Feature Requests & Roadmap Signals
User feedback is clearly shaping the architectural roadmap toward modularity and better self-hosting UX:
*   **Skills / Plugin Architecture:** The trajectory is moving toward WebAssembly (WASM) and hybrid skills. Issue [#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) proposes hybrid plugins (Markdown + `.wasm` binaries), and [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) requests replacing hardcoded tools with external MCP skills.
*   **Security:** The framework is getting serious about cryptographic verification, with Issue [#6182](https://github.com/zeroclaw-labs/zeroclaw/issues/6182) pushing to re-activate HMAC tool receipts. 
*   **Channel UX:** Users want better control over context directly from chat apps ([#6150](https://github.com/zeroclaw-labs/zeroclaw/issues/6150) - `/clear` command for Telegram/Discord).
*   **Version 0.8.0 Prep:** PR [#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266) reveals massive structural migrations are underway, targeting schema v3, channel aliasing, and profile lifting for the `v0.8.0` release.

## 7. User Feedback Summary
Users are deploying ZeroClaw in complex, self-hosted environments (LXC containers, local LLMs) but are frequently running into friction during the initial setup phase. Connecting to local AI servers (like `llama.cpp` and `llama-server`) is still prone to errors, as seen in [#6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180) and [#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002), where routing and intent classification fail. Furthermore, users utilizing ZeroClaw as an always-on assistant are struggling with context management—explicitly asking for better ways to clear memory or prevent context spillage between scheduled tasks and chats. Overall, the community sentiment is highly engaged, with users providing deep, debug-ready repros to help stabilize the project.

## 8. Backlog Watch
Several critical items require immediate maintainer attention:
*   **Lost Commits Audit:** Issue [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) notes that 153 commits were lost in a bulk revert in late March and need manual recovery.
*   **Nextcloud Talk Timing:** Issues [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) and [#6156](https://github.com/zeroclaw-labs/zeroclaw/issues/6156) highlight that Nextcloud Talk integrations are broken due to wrong API usage and a hard-coded ~5-second timeout that kills requests to slower local models.
*   **v0.7.6 Coordination:** Issue [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) is currently accepted and acting as a tracker for `v0.7.6` (Skills UX) and needs continued triage.
*   **Release Management:** Issue [#6279](https://github.com/zeroclaw-labs/zeroclaw/issues/6279) warns that poor milestone triage is leaving essential UX fixes stranded, risking community frustration.

</details>