# OpenClaw Ecosystem Digest 2026-05-21

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-20 22:27 UTC

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

# OpenClaw Project Digest: 2026-05-21

## 1. Today's Overview
OpenClaw is experiencing an exceptionally high volume of community activity, evidenced by 500 issues and 500 pull requests updated in the last 24 hours. While the issue backlog remains heavily active with 306 open issues versus 194 closed, the maintainers and community are clearly driving hard on iteration. However, only 17 PRs were merged out of 483 open, suggesting that the core team is currently bottlenecked or rigorously reviewing incoming contributions. Two fresh releases were cut recently (`v2026.5.19` and `v2026.5.19-alpha.1`), indicating a healthy, continuous deployment cadence alongside active feature development and dependency upgrades.

## 2. Releases
- **[v2026.5.19](https://github.com/openclaw/openclaw/releases/tag/v2026.5.19)** & ** **[v2026.5.19-alpha.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.19-alpha.1)**
  - **Changes:** Clarified agent fix guidelines to default to clean bounded refactors, lean internals, and explicit plugin SDK/API deprecation paths.
  - **Dependencies:** Updated `@openclaw/proxyline` to 0.3.3. Updated Pi packages to 0.75.1.
  - **Migration/Breaking Notes:** This release raises the minimum supported Node.js version to the `22.x` line. Users on older Node.js versions will need to upgrade their runtime environments prior to updating OpenClaw.

## 3. Project Progress
Although only 17 PRs were merged today, the open pipeline is massive, with maintainers actively pushing major infrastructure and policy changes. Key areas of progress include:
- **TUI / Startup Performance:** Maintainer `RomneyDa` submitted a series of stacked PRs ([#84686](https://github.com/openclaw/openclaw/pull/84686), [#84701](https://github.com/openclaw/openclaw/pull/84701), [#84649](https://github.com/openclaw/openclaw/pull/84649)) that drastically cut down plugin-system thrash and deferred imports during TUI/Gateway cold starts.
- **Security & Policy Conformance:** Huge structural PRs are nearing review, such as [#80783](https://github.com/openclaw/openclaw/pull/80783) (Model, network, and MCP conformance checks) and [#80056](https://github.com/openclaw/openclaw/pull/80056) (Tool metadata conformance).
- **Channel Reliability:** Several core fixes are ready for maintainers, including [#84711](https://github.com/openclaw/openclaw/pull/84711) (restoring symlink rejection for secret files across LINE/Telegram/IRC) and [#71738](https://github.com/openclaw/openclaw/pull/71738) (isolating Matrix thread history).

## 4. Community Hot Topics
The community is highly focused on runtime stability, silent failures, and multi-model setups:
- **Slack Connectivity Drops:** [Issue #72808](https://github.com/openclaw/openclaw/issues/72808) (18 comments) highlights a persistent bug where the Slack connection drops silently. This is a major pain point for users demoing or relying on OpenClaw in active Slack workspaces.
- **Security Roadmap for API Keys:** [Issue #11829](https://github.com/openclaw/openclaw/issues/11829) (17 comments) outlines a comprehensive community RFC to protect LLM provider keys from leaking into agent prompts or chat contexts.
- **MCP Tool Delivery Failure:** [Issue #80909](https://github.com/openclaw/openclaw/issues/80909) (11 comments) reports a severe regression where MCP server tools silently fail to reach the LLM's outbound request payload, completely breaking custom tool usage across multiple stable versions.
- **Codex Runtime Token Inflation:** [Issue #84038](https://github.com/openclaw/openclaw/issues/84038) (11 comments, 3 👍) discusses a bug where a `doctor --fix` migrates configs and silently triggers 3-4x token inflation when using OpenAI Codex.

## 5. Bugs & Stability
Several critical (`P1`) bugs impacting gateway stability and agent sessions were reported or active today. 
- **Session Takeover Errors:** [Issue #84059](https://github.com/openclaw/openclaw/issues/84059) (6 👍). Upgrading to `2026.5.18` causes all embedded agent runs to fail with `EmbeddedAttemptSessionTakeoverError` due to lock release race conditions. 
- **Gateway Crash Loops:** 
  - [Issue #72015](https://github.com/openclaw/openclaw/issues/72015): The `active-memory` plugin can block replies and overload multi-agent gateways during QMD boot initialization.
  - [Issue #57349](https://github.com/openclaw/openclaw/issues/57349): Heap exhaustion / OOM during filesystem directory scans after extended uptime (~17-20 hours).
- **Codex App-Server Stalls & Timeouts:** [Issue #84076](https://github.com/openclaw/openclaw/issues/84076) details how the Codex integration stalls after an `item/completed` event and aborts without status recovery. Additionally, [Issue #81114](https://github.com/openclaw/openclaw/issues/81114) notes that large context assemblies can hit OpenClaw's fixed timeout, causing an unintended fallback to older models.
- **Authentication & Provider Breakage:** [Issue #84604](https://github.com/openclaw/openclaw/issues/84604) notes that upgrading from `4.x` to `5.18` breaks `claude-cli` harnesses due to non-migrated auth-profiles.

## 6. Feature Requests & Roadmap Signals
The community is actively shaping the project's extensibility and UI capabilities:
- **Speech-to-Speech Parity:** [Issue #71195](https://github.com/openclaw/openclaw/issues/71195) requests OpenAI Realtime API integration for Mac Talk Mode to achieve sub-second voice latencies (similar to the existing Twilio plugin).
- **UI Plugin Slots:** [Issue #71736](https://github.com/openclaw/openclaw/issues/71736) proposes data-driven contribution slots in the Control UI for approval cards, input guards, and chat modes, signaling a strong desire for a more extensible front-end.
- **Configurable Upload Limits:** [Issue #71142](https://github.com/openclaw/openclaw/issues/71142) requests lifting the hardcoded 5MB file upload limit in the Control UI webchat to support advanced multimodal tasks.
- *Roadmap Prediction:* Given recent commits, the next versions will likely focus heavily on TUI performance optimizations, stricter security boundaries for secrets, and fixing the ongoing session-state regressions.

## 7. User Feedback Summary
Users are enthusiastically adopting advanced features (multiple providers, embedded agents, complex memory setups) but are frequently blocked by silent regressions. The overarching pain points revolve around **state and session management**—users report duplicate messages in Control UI ([Issue #71992](https://github.com/openclaw/openclaw/issues/71992)), phantom "no visible response" chatters in Telegram ([Issue #70628](https://github.com/openclaw/openclaw/issues/70628)), and TTS audio cut-offs in remote access ([Issue #84629](https://github.com/openclaw/openclaw/issues/84629)). Additionally, users operating multi-agent or multi-tenant environments are running into scaling bottlenecks (like OOM crashes and CPU spikes), indicating that the core gateway event loop needs hardening for heavy, sustained workloads.

## 8. Backlog Watch
Several highly-upvoted or critical issues are accumulating in the backlog, currently tagged with `clawsweeper:no-new-fix-pr` or waiting on core maintainer product decisions:
- **High-Impact Regressions Lacking Fix PRs:**
  - [Issue #72015](https://github.com/openclaw/openclaw/issues/72015) (P1, crash-loop): `active-memory` overloading gateway.
  - [Issue #68944](https://github.com/openclaw/openclaw/issues/68944) (P1): CLI commands hanging indefinitely at WebSocket handshake.
  - [Issue #84076](https://github.com/openclaw/openclaw/issues/84076) (P1): Codex stalls on `item/completed`.
- **Architectural Decisions Needed:**
  - [Issue #69066](https://github.com/openclaw/openclaw/issues/69066) (RFC): Separation of internal service identity from user auth in the gateway.
  - [Issue #71736](https://github.com/openclaw/openclaw/issues/71736) (RFC): Control UI plugin contribution slots.
- **Stale PRs Needing Maintainer Merge/Review:**
  - [PR #72224](https://github.com/openclaw/openclaw/pull/72224): Gateway restart fixes outside systemd.
  - [PR #67579](https://github.com/openclaw/openclaw/pull/67579): Multi-provider API key system with curated model catalogs (v2).

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digests from May 21, 2026.

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently experiencing a phase of rapid, heavily funded iteration, characterized by a shift from single-model wrappers to complex, multi-model, and multi-agent orchestrations. Frameworks are aggressively competing to support the latest frontier models (e.g., ChatGPT-5.5, DeepSeek-V4, Claude CLI, xAI Grok) while grappling with the operational overhead of diverse authentication methods, including a massive push towards OAuth integrations. Meanwhile, a growing "homelab" and self-hosting demographic is forcing projects to optimize for edge deployments (ARM64, Raspberry Pi) and lightweight local inference. The primary technical bottlenecks across the industry have shifted from basic LLM integration to session/context management, secure containerized execution, and gateway stability.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged PRs (24h) | Latest Release / Cadence | Health Score |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | 17 | `v2026.5.19` (Active) | **A** (Massive scale, bottlenecked) |
| **Hermes Agent** | 50 | 50 | 8 | None (`v0.14.0` stable) | **A-** (High engagement, P1 bugs) |
| **IronClaw** | 30 | 40 | 15 | None (Reborn refactor) | **A-** (High internal velocity) |
| **CoPaw** | 38 | 37 | 17 | `v1.1.8.post1` (Active) | **A** (Rapid iteration & patching) |
| **ZeroClaw** | 19 | 50 | 3 | None (`v0.8.0` integration) | **B+** (Severe review bottleneck) |
| **NanoBot** | 11 | 40 | 27 | None | **A** (Excellent throughput) |
| **PicoClaw** | 8 | 27 | 11 | `v0.2.8-nightly` (Active) | **A** (Healthy, focused iteration) |
| **LobsterAI** | 4 | 24 | 7 | None | **B+** (Active but stale backlog) |
| **Moltis** | Low | Low | 3 | None | **B+** (Stable, core-focused) |
| **NanoClaw** | Low | 23 | 6 | None | **B** (Good quality, low volume) |
| **NullClaw** | 0 | 2 | 0 | None | **B** (Mature, low activity) |
| **ZeptoClaw** | 0 | 1 | 0 | None | **C+** (Maintenance mode) |
| **TinyClaw** | 0 | 0 | 0 | N/A | **C** (Dormant) |

## 3. OpenClaw's Position
*   **Advantages vs. Peers:** OpenClaw remains the undisputed core reference implementation with unparalleled scale. It operates at 10x the volume of its nearest competitors (500 daily updates). Its plugin SDK, channel support (Slack, LINE, Telegram, IRC, Matrix), and TUI/Gateway architecture are far more mature than most projects attempting v0.x releases.
*   **Technical Approach:** OpenClaw is built around a Node.js event-loop gateway, requiring robust process management to avoid heap exhaustion (a current pain point). This contrasts with PicoClaw (Go/Rust, focused on compiled ARM binaries) and LobsterAI/CoPaw (Python). OpenClaw is currently uniquely focused on TUI performance and strict security boundaries.
*   **Community Size:** OpenClaw has a massive, almost unwieldy community. However, the 17-to-483 merged-to-open PR ratio suggests the core team is acting as a severe bottleneck, struggling to triage community contributions as rigorously as smaller, faster-moving projects like NanoBot or CoPaw.

## 4. Shared Technical Focus Areas
*   **DeepSeek-V4 API Handling:** Multiple ecosystems are struggling with DeepSeek's specific API parameters. *Projects:* **ZeroClaw** (thinking mode API format), **NanoBot** (`reasoning_effort` + `thinking` conflicts).
*   **Provider OAuth Integrations:** There is a massive demand to move away from static API keys toward native OAuth flows. *Projects:* **PicoClaw** (ChatGPT Plus/Codex OAuth), **Hermes Agent** (xAI Grok OAuth 403 errors), **NanoBot** (xAI Grok OAuth).
*   **Container & Sandbox Security:** Users want agents to safely execute code and browse the web without breaking out of Docker/Podman/LXC environments. *Projects:* **Moltis** (Docker browser sandboxing), **PicoClaw** (workspace sandbox escapes), **NanoClaw** (rootless Podman/LXC fixes).
*   **Multi-Tenant Memory Isolation:** As agents move from single-user CLI tools to group chats, isolating memory is critical. *Projects:* **NanoBot** (`USER.md` collisions in shared IMs), **Hermes Agent** (per-user isolation), **ZeroClaw** (per-alias workspaces).
*   **Context Window Management:** Agents routinely crash or loop when hitting context limits. *Projects:* **NanoClaw** (infinite loops post-compaction), **LobsterAI** (`contextWindow` additions).

## 5. Differentiation Analysis
*   **OpenClaw:** Focused on the enterprise/workspace gateway. It acts as a central hub routing multiple agents to various messaging platforms (Slack, Teams, IRC).
*   **Hermes Agent:** Heavily focused on UI/UX parity (TUI) and local model support, attempting to mirror the "Claude Code" experience while maintaining an open-source, multi-model approach.
*   **IronClaw:** Currently undergoing a massive "Reborn" refactor. It is highly maintainer-driven, focusing heavily on low-level WASM capabilities, strict security policies, and a centralized "IronHub" marketplace.
*   **PicoClaw & NanoClaw:** Targeted firmly at the self-hosting, homelab, and edge-computing demographic. PicoClaw specifically optimizes for ARM64/Termux, while NanoClaw focuses heavily on rootless container deployments (Podman).
*   **CoPaw & LobsterAI:** Oriented towards Chinese enterprise integrations (DingTalk, Feishu) with a strong emphasis on desktop GUI/WebUI features, including niche additions like desktop pet plugins.

## 6. Community Momentum & Maturity
*   **Rapid Iterators:** **CoPaw**, **NanoBot**, and **PicoClaw** are shipping features and merging community PRs at an exceptional rate. They are in the "land and expand" phase, quickly adapting to new provider APIs.
*   **Architectural Phase:** **IronClaw** and **ZeroClaw** are currently weighed down by major architectural refactors. ZeroClaw is experiencing a severe review bottleneck (47 open PRs), indicating that internal velocity has outpaced triage capacity.
*   **Stabilizing/Mature:** **OpenClaw** and **Hermes Agent** are mature but facing scaling issues. OpenClaw's maintainers must address silent gateway crashes and memory leaks, while Hermes needs to fix brittle multi-provider auth precedence.

## 7. Trend Signals
*   **Token Cost Optimization over Raw Capability:** Developers are actively seeking ways to reduce API costs. This is evidenced by NanoClaw's development of `rtk` proxying for 60-90% token savings and IronClaw's per-task model override for subagents. Agents must be cost-efficient to run continuously.
*   **The Rise of the Agent Client Protocol (ACP):** NanoClaw's integration of ACP signals a coming standardization where local AI agents act as headless backends for traditional IDEs (WebStorm, Zed) rather than standalone chat apps.
*   **Self-Healing Infrastructure:** Users expect local AI to manage its own environment. Moltis's request for self-ingesting documentation and PicoClaw's "factory reset" feature show that the industry recognizes configuration drift as a major barrier to long-term agent deployment.
*   **Autonomous Scheduling:** The era of on-demand chat is giving way to persistent, scheduled agent tasks. NullClaw's DB-backed Cron subagent and CoPaw's routine notifications highlight a trend toward agents acting as continuous background workers.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-21

## 1. Today's Overview
NanoBot is experiencing a highly active development phase, demonstrating robust project health with **40 Pull Requests updated** (27 merged/closed) and **11 Issues updated** in the last 24 hours. The core team and community contributors are heavily focused on expanding the platform's interoperability—adding new LLM providers (Novita AI, xAI Grok OAuth) and communication channels (Signal). Significant architectural improvements are also being merged, ranging from coding workflow optimizations to session lifecycle management. Despite the rapid feature velocity, users are actively reporting edge-case bugs related to provider-specific API parameters and tool execution environments, indicating an engaged and technically proficient user base. 

## 2. Releases
No new official releases were recorded today. Development appears to be aggregating into the main branch for a potential future release.

## 3. Project Progress
A substantial number of PRs were merged or closed today, indicating rapid integration cycles and active code review. Key advancements include:
*   **New Channels & Providers:** The foundation for the Signal messaging channel ([PR #3935](https://github.com/HKUDS/nanobot/pull/3935)) was integrated, and Novita AI ([PR #3927](https://github.com/HKUDS/nanobot/pull/3927)) was added as an LLM provider.
*   **Coding Tooling Upgrades:** Merged [PR #3923](https://github.com/HKUDS/nanobot/pull/3923) introduced a structured `apply_patch` tool for multi-file code edits with rollback capabilities and workspace validation.
*   **Agent & Session Architecture:** Multiple foundational PRs by core contributor `JackLuguibin` were closed today, significantly upgrading the agent's internals. Highlights include append-only session transcripts ([PR #3224](https://github.com/HKUDS/nanobot/pull/3224)), WebSocket session lifecycle & delta streaming ([PR #3286](https://github.com/HKUDS/nanobot/pull/3286)), and streamlined context/heartbeat services ([PR #2813](https://github.com/HKUDS/nanobot/pull/2813)).
*   **Message Bus & Deduplication:** [PR #2981](https://github.com/HKUDS/nanobot/pull/2981) successfully introduced message deduplication for inbound queues, improving stability in high-traffic scenarios.

## 4. Community Hot Topics
The community is actively discussing multi-user deployments and secure communications:
*   **Signal Integration Demand ([Issue #49](https://github.com/HKUDS/nanobot/issues/49)):** With 5 upvotes and ongoing discussion, the request for a Signal channel via `signal-cli` remains highly requested. Recent activity suggests it is nearing realization following the merging of Signal-related PRs.
*   **Multi-User Memory & Session Management ([Issue #3744](https://github.com/HKUDS/nanobot/issues/3744)):** A highly discussed topic regarding how `USER.md` and `MEMORY.md` are generated when multiple IM users share the same agent instance. This highlights an underlying need for better session isolation and multi-tenant memory architecture as NanoBot moves from single-user CLI tools to shared team assistants.
*   **Group Chat Message Buffering ([Issue #3938](https://github.com/HKUDS/nanobot/issues/3938)):** Users running NanoBot in Feishu and Telegram groups are experiencing pain points with rapid-fire messages triggering isolated, out-of-context agent responses.

## 5. Bugs & Stability
Several critical bugs were reported today concerning third-party provider compatibility and the execution environment:
1.  **API Parameter Conflicts (High):** [Issue #3939](https://github.com/HKUDS/nanobot/issues/3939) reports that Moonshot API rejects kimi-k2.5/k2.6 when both `reasoning_effort` and `thinking` are sent simultaneously. **Fix:** [PR #3940](https://github.com/HKUDS/nanobot/pull/3940) is already open to resolve this.
2.  **Execution Environment Pathing (Medium):** [Issue #3934](https://github.com/HKUDS/nanobot/issues/3934) highlights that users cannot install third-party Python packages via `pip` in the `exec` tool because custom paths are appended after the system path in the `$PATH` variable. 
3.  **Workspace Safety Overreach (Medium):** [Issue #3931](https://github.com/HKUDS/nanobot/issues/3931) notes that setting `restrictToWorkspace=true` inadvertently blocks standard web requests (like `curl`), limiting agent web-interaction capabilities. 
4.  **WebUI Disconnects (Medium):** [Issue #3884](https://github.com/HKUDS/nanobot/issues/3884) states the WebSocket WebUI closes conversations after the first response.

## 6. Feature Requests & Roadmap Signals
User requests today heavily skew toward localized integrations, image generation variety, and safety mechanisms:
*   **Ollama Image Generation ([Issue #3941](https://github.com/HKUDS/nanobot/issues/3941)):** Users want to leverage Ollama not just for text LLMs, but for local image generation models like `x/z-image-turbo`. This is a strong candidate for an upcoming feature.
*   **Command Confirmation ([PR #3937](https://github.com/HKUDS/nanobot/pull/3937)):** A PR was opened to implement an `ask/deny/auto` user confirmation mechanism for potentially dangerous `exec` commands, reflecting a maturing focus on operational safety.
*   **xAI Grok OAuth ([PR #3936](https://github.com/HKUDS/nanobot/pull/3936)):** Adding PKCE-based OAuth for xAI removes the friction of manual API key pasting. 

## 7. User Feedback Summary
Users are utilizing NanoBot in complex, multi-model setups and pushing the boundaries of its tool-use capabilities. There is notable friction with China-specific services (e.g., 163.com IMAP "Unsafe Login" restrictions in [Issue #1123](https://github.com/HKUDS/nanobot/issues/1123)). Developers appreciate the wide variety of LLM and channel integrations but express dissatisfaction with rigid execution environments (specifically `exec` pip installations) and overly aggressive safety guards that break legitimate web-interaction tools. 

## 8. Backlog Watch
Maintainers should review the following stale or complex items requiring architectural decisions:
*   **163.com IMAP Support ([Issue #1123](https://github.com/HKUDS/nanobot/issues/1123)):** Open since February 2026. This requires upstream or custom handling for the `ID` command before `SELECT` to unblock users relying on Chinese email providers.
*   **Image Generation MimeType Hardcoding ([Issue #3903](https://github.com/HKUDS/nanobot/issues/3903)):** MiniMax and AIHubMix integrations incorrectly assume all images are PNG. Needs a quick fix using `detect_image_mime`.
*   **DeepSeek Reasoning Rendering ([Issue #3907](https://github.com/HKUDS/nanobot/issues/3907)):** Although recently closed, the `IncrementalThinkExtractor` needs continued monitoring to ensure smooth, line-buffered reasoning outputs when using DeepSeek-v4-pro in the CLI.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-21

## 1. Today's Overview
Hermes Agent experienced a highly active day with 50 issues and 50 pull requests updated within the last 24 hours, demonstrating strong community engagement and rapid development iteration. The project currently has 49 open issues and 42 open PRs, indicating a heavy inbound pipeline that maintainer bandwidth will need to address. No new releases were cut today, but the open PR pool includes critical security and stability fixes nearing merge. Activity spans the entire stack—gateway adapters (Discord, Feishu, WhatsApp, Nostr), the TUI, authentication providers, memory systems, and the plugin/skills ecosystem—reflecting a maturing, multi-platform AI agent framework under diverse real-world stress.

## 2. Releases
No new releases were published today. The latest issues reference `v0.14.0`, suggesting the current release line is stable but accumulating fixes that will likely ship in a near-future patch or minor version.

## 3. Project Progress
Eight PRs were merged or closed today, advancing several areas:

| PR | Area | Contribution |
|---|---|---|
| [#16230](https://github.com/NousResearch/hermes-agent/pull/16230) | STT/Config | Fixed `stt.local_command` config being silently ignored in favor of env var only |
| [#29441](https://github.com/NousResearch/hermes-agent/pull/29441) + [#29490](https://github.com/NousResearch/hermes-agent/pull/29490) | Skills Hub | Deduplicated skill search results by identifier instead of name, preventing cross-site skill loss (e.g., Airbnb vs Zillow "search-listings") |
| [#29516](https://github.com/NousResearch/hermes-agent/pull/29516) | Memory/Graphiti | Added local-first Graphiti brain workflow with Kuzu graph backend (closed, may be superseded) |

Key open PRs progressing toward merge include the **P1 security fix** [#27432](https://github.com/NousResearch/hermes-agent/pull/27432) (sanitize resumed session history to prevent context leak), the **cron recurring-interval fix** [#29455](https://github.com/NousResearch/hermes-agent/pull/29455), the **smart-approval token budget fix** [#29517](https://github.com/NousResearch/hermes-agent/pull/29517), and the **CI Nix security isolation** [#29519](https://github.com/NousResearch/hermes-agent/pull/29519). The Feishu adapter received two targeted fixes ([#29510](https://github.com/NousResearch/hermes-agent/pull/29510), markdown table rendering; [#29514](https://github.com/NousResearch/hermes-agent/pull/29514), kanban sort order), and the SSH doctor false-negative fix is in review ([#29509](https://github.com/NousResearch/hermes-agent/pull/29509)).

## 4. Community Hot Topics

**Most-discussed issues (by comment count):**

1. **[Issue #28419](https://github.com/NousResearch/hermes-agent/issues/28419)** (4 comments, P2 bug): TUI input box floods with ANSI escape sequences after a gateway pipe break. Users report needing to restart the entire TUI session—core usability blocker for long-running terminal users.

2. **[Issue #4438](https://github.com/NousResearch/hermes-agent/issues/4438)** (4 comments, feature request): Rich spreadsheet skill (xlsx/csv). Long-running request (since April) for structured Excel/spreadsheet abstraction instead of raw `openpyxl`/`pandas` calls. High utility for enterprise/data workflows.

3. **[Issue #21910](https://github.com/NousResearch/hermes-agent/issues/21910)** (3 comments, 👍 4): Rewind/edit-and-resubmit feature (Claude Code's double-Esc equivalent). Highest reaction count today—users clearly want the ability to rewind bad conversation turns. Strong UX alignment with competitive tools.

4. **[Issue #29285](https://github.com/NousResearch/hermes-agent/issues/29285)** (2 comments, **P1 bug**): `auth.json` `active_provider` silently overrides `config.yaml` `model.provider` at runtime. Critical configuration precedence bug that breaks deterministic model selection.

5. **[Issue #26847](https://github.com/NousResearch/hermes-agent/issues/26847)** (2 comments, 👍 1): xAI OAuth returns 403 for standard SuperGrok subscribers. Tied to the newly announced Grok/Hermes integration—promptly reported, indicates a fast-growing xAI user base.

6. **[Issue #29125](https://github.com/NousResearch/hermes-agent/issues/29125)** (1 comment, 👍 2): Hermes doesn't work through Claude CLI. Multiple users hitting auth/setup friction with Anthropic's subscription token flow.

**Underlying needs:** The community is pushing for (a) **multi-provider reliability** (xAI, Anthropic, Azure auth paths all have bugs), (b) **TUI/UX parity with competitors** (rewind, title toggle), and (c) **gateway robustness across platforms** (Feishu, WhatsApp, Discord).

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Description | Fix Status |
|---|---|---|---|
| **P1** | [#29285](https://github.com/NousResearch/hermes-agent/issues/29285) | `auth.json` silently overrides `model.provider` in config.yaml | No fix PR yet |
| **P1** | [#27432](https://github.com/NousResearch/hermes-agent/pull/27432) | Resumed session leaks prior tool/debug context (security) | **PR open** |
| **P2** | [#28419](https://github.com/NousResearch/hermes-agent/issues/28419) | TUI ANSI flood after gateway pipe break | No fix PR yet |
| **P2** | [#5358](https://github.com/NousResearch/hermes-agent/issues/5358) | Gateway ignores `model.provider`, falls back to OpenRouter when env key present | No fix PR yet |
| **P2** | [#29415](https://github.com/NousResearch/hermes-agent/issues/29415) | Kanban swarm references missing `avoid-ai-writing` skill, synthesizer crashes | No fix PR yet |
| **P2** | [#26058](https://github.com/NousResearch/hermes-agent/issues/26058) | Discord `auto_thread` disabled for `free_response_channels` breaks legitimate threading | No fix PR yet |
| **P2** | [#29466](https://github.com/NousResearch/hermes-agent/issues/29466) + [#29471](https://github.com/NousResearch/hermes-agent/issues/29471) | Feishu DM replies misrouted to threads; first chunk breaks markdown | PR [#29510](https://github.com/NousResearch/hermes-agent/pull/29510) addresses markdown |
| **P3** | [#29344](https://github.com/NousResearch/hermes-agent/issues/29344) | xAI 403 over-matching prevents OAuth auto-refresh in long TUI sessions | No fix PR yet |
| **P3** | [#29442](https://github.com/NousResearch/hermes-agent/issues/29442) | `hermes doctor` falsely reports Copilot as unconfigured | No fix PR yet |
| **P3** | [#29414](https://github.com/NousResearch/hermes-agent/issues/29414) | Azure Foundry sends wrong auth header (`x-api-key` vs `Bearer`) | No fix PR yet |

**Pattern:** Configuration precedence and provider auth are systemic weak spots. Multiple bugs stem from settings being silently ignored (SSH config in doctor, `model.provider` override, STT local command, `api_mode` on fallback providers). This suggests the codebase needs a config-layer priority audit.

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Signals |
|---|---|---|
| Rewind/edit-and-resubmit | [#21910](https://github.com/NousResearch/hermes-agent/issues/21910) (👍 4) | Highest community demand; directly competitive with Claude Code |
| Rich Spreadsheet Skill | [#4438](https://github.com/NousResearch/hermes-agent/issues/4438) | Enterprise/data use case; 4 comments since April |
| Per-task model override for subagents | [#18591](https://github.com/NousResearch/hermes-agent/issues/18591) | Critical for multi-model cost optimization; relates to rate-limit handling |
| Memory via MCP server | [#10835](https://github.com/NousResearch/hermes-agent/issues/10835) | Cross-agent memory sharing (Claude Code, Cursor); MCP ecosystem play |
| Hermes-to-Hermes delegation via MCP | [#1265](https://github.com/NousResearch/hermes-agent/issues/1265) | Multi-agent orchestration; forward-looking |
| Immutable/protected skills | [#25083](https://github.com/NousResearch/hermes-agent/issues/25083) | Safety/governance; prevents agent from self-modifying critical skills |
| Persistent background task history | [#16946](https://github.com/NousResearch/hermes-agent/issues/16946) | Reliability; currently lost on restart |
| Dreaming plugin (auto memory consolidation) | [#29431](https://github.com/NousResearch/hermes-agent/issues/29431) | Experimental but notable; biological-sleep-inspired memory |
| Toggle title generation | [#29456](https://github.com/NousResearch/hermes-agent/issues/29456) | Quick win for local-model users |
| Per-user USER.md isolation | [#27182](https://github.com/NousResearch/hermes-agent/issues/27182) | Multi-tenant platform deployment blocker |

**Prediction for next version:** The concentration of provider-auth and config-precedence fixes (multiple PRs open) strongly suggests `v0.14.1` will be a stability/auth patch. The rewind feature (#21910) and title toggle (#29456) are strong candidates given community momentum.

## 7. User Feedback Summary

**Pain points:**
- **Provider auth fragility** is the top frustration: xAI OAuth 403s ([#26847](https://github.com/NousResearch/hermes-agent/issues/26847)), Claude CLI setup failures ([#29125](https://github.com/NousResearch/hermes-agent/issues/29125)), Azure header mismatches ([#29414](https://github.com/NousResearch/hermes-agent/issues/29414)), and silent config overrides ([#29285](https://github.com/NousResearch/hermes-agent/issues/29285)) collectively paint a picture of brittle multi-provider onboarding.
- **Gateway platform gaps**: WhatsApp silent-no-reply ([#18848](https://github.com/NousResearch/hermes-agent/issues/18848), [#28208](https://github.com/NousResearch/hermes-agent/issues/28208)), Feishu thread routing ([#29466](https://github.com/NousResearch/hermes-agent/issues/29466)), and Discord auto-thread breakage ([#26058](https://github.com/NousResearch/hermes-agent/issues/26058)) show that multi-platform gateway support is still maturing.
- **Local model users** are penalized by title-generation latency ([#29456](https://github.com/NousResearch/hermes-agent/issues/29456)) and lack of vision fallback for `computer_use` ([#29407](https://github.com/NousResearch/hermes-agent/issues/29407)).

**Positive signals:**
- Users are deploying Hermes in production multi-user contexts (Slack, Discord, Feishu, WhatsApp), indicating genuine operational adoption beyond hobbyist use.
- The skills/plugin ecosystem is active with third-party proposals (Dreaming plugin [#29431](https://github.com/NousResearch/hermes-agent/issues/29431), Graphiti brain [#29516](https://github.com/NousResearch/hermes-agent/pull/29516)).
- The Nostr adapter PR ([#16769](https://github.com/NousResearch/hermes-agent/pull/16769)) signals the community is extending Hermes to privacy-focused messaging platforms.

## 8. Backlog Watch

| Item | Why it needs attention |
|---|---|
| [#5358](https://github.com/NousResearch/hermes-agent/issues/5358) (P2, open since April) | Gateway silently ignores `model.provider` config when OpenRouter key exists. Affects all gateway deployments. No fix PR. |
| [#4438](https://github.com/NousResearch/hermes-agent/issues/4438) (feature, open since April) | Rich spreadsheet skill—4 comments, broad demand, no PR. |
| [#21910](https://github.com/NousResearch/hermes-agent/issues/21910) (👍 4, open since May 8) | Rewind feature—highest community reaction, no PR or maintainer response yet. |
| [#10835](https://github.com/NousResearch/hermes-agent/issues/10835) (open since April 16) | MCP memory exposure—strategic for cross-agent ecosystem, no PR. |
| [#29285](https://github.com/NousResearch/hermes-agent/issues/29285) (P1, opened yesterday) | Auth.json config override—**highest severity open issue with no fix PR**. Needs immediate maintainer triage. |
| [#28419](https://github.com/NousResearch/hermes-agent/issues/28419) (P2, open since May 19) | TUI ANSI flood—core TUI usability blocker with no PR. |
| [#24631](https://github.com/NousResearch/hermes-agent/pull/24631) (P2, open since May 12) | Fallback provider `api_mode` fix—still unmerged after 9 days. |
| [#26464](https://github.com/NousResearch/hermes-agent/pull/26464) (P2, open since May 15) | ISO reset timestamp parsing for 429 errors—improves rate-limit resilience, awaiting review. |

**Critical callout:** The **P1 auth.json config override** ([#29285](https://github.com/NousResearch/hermes-agent/issues/29285)) and **P1 session context leak** ([#27432](https://github.com/NousResearch/hermes-agent/pull/27432)) should be the top merge priorities before any next release.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-21

## 1. Today's Overview
PicoClaw is experiencing a highly active development phase, evidenced by 27 pull requests updated and 8 issues processed in the last 24 hours. The project recently cut a new nightly build (`v0.2.8-nightly.20260520`), indicating that the team is aggressively iterating towards a stable `v0.2.8` release. Current contributions are heavily focused on hardening the agent runtime, improving message bus stability, and patching security vulnerabilities in the web backend and channel integrations. Overall project health appears robust, with community members actively submitting both bug reports and substantial feature PRs.

## 2. Releases
*   **[nightly] Nightly Build (v0.2.8-nightly.20260520.639b3270)**
    *   **Summary:** An automated build tracking the `main` branch. This release incorporates the latest merged bug fixes and feature PRs. 
    *   **Migration/Breaking Changes:** None explicitly stated in the release notes, but users should be aware of recently merged changes like MCP initialization becoming non-fatal ([PR #2725](https://github.com/sipeed/picoclaw/pull/2725)) and new security headers ([PR #2900](https://github.com/sipeed/picoclaw/pull/2900)) which might affect custom reverse proxy setups.
    *   **Full Changelog:** `https://github.com/sipeed/picoclaw/compare/v0.2.8...main`

## 3. Project Progress
11 PRs were merged or closed today, showing strong momentum in expanding provider support and core tooling:
*   **Agent Recovery & Tools:** Merged `feat(tools): add get_current_time tool` ([PR #2691](https://github.com/sipeed/picoclaw/pull/2691)) and crucially, `fix(agent): make MCP initialization failure non-fatal` ([PR #2725](https://github.com/sipeed/picoclaw/pull/2725)), which resolves a zombie-state bug where agents would silently fail if external servers were offline.
*   **New Features:** Merged `feat(tools): port update_plan tool from OpenClaw` ([PR #2765](https://github.com/sipeed/picoclaw/pull/2765)) for structured multi-step task management, and `feat(providers): add provider-backed image generation tool` ([PR #2760](https://github.com/sipeed/picoclaw/pull/2760)).
*   **Provider Support:** Merged `fix(providers): support OpenAI OAuth for Codex and transcription` ([PR #2757](https://github.com/sipeed/picoclaw/pull/2757)) and `fix: enable ChatGPT subscription (OAuth) in picoclaw` ([PR #2679](https://github.com/sipeed/picoclaw/pull/2679)), bringing native ChatGPT Plus/Codex support via OAuth tokens.
*   **System Resilience:** Closed `feat: add reset to factory defaults` ([PR #2891](https://github.com/sipeed/picoclaw/pull/2891)), addressing configuration drift.

## 4. Community Hot Topics
The most actively discussed items revolve around streaming outputs and channel-specific support:
*   **Streaming Output Demands:** [Issue #1950](https://github.com/sipeed/picoclaw/issues/1950) (9 comments) and [Issue #2404](https://github.com/sipeed/picoclaw/issues/2404) (7 comments) highlight a strong community desire for native HTTP streaming capabilities in Web Chat and provider configurations. Users find current buffered responses suboptimal for interactive use.
*   **Authentication Troubles:** [Issue #2769](https://github.com/sipeed/picoclaw/issues/2769) (3 comments, closed) sparked discussion regarding `401 Invalid API Key` errors across Groq, OpenRouter, and Nvidia, emphasizing the complexity of provider token management.
*   **Edge Hardware Deployment:** [Issue #2625](https://github.com/sipeed/picoclaw/issues/2625) (5 comments) discusses compiling WhatsApp support by default for ARM64 devices (like Raspberry Pi Zero 2), reflecting PicoClaw's popularity among lightweight hardware/homelab enthusiasts.

## 5. Bugs & Stability
Several critical stability issues were identified today, with corresponding PRs already in flight:
*   **HIGH - Stale PID Crash Loop:** [Issue #2720](https://github.com/sipeed/picoclaw/issues/2720) reports the gateway crashing on startup if an unrelated process reuses a stale PID. *Fix:* [PR #2813](https://github.com/sipeed/picoclaw/pull/2813) introduces proper process identity verification.
*   **HIGH - Agent Loop Resource Leaks:** [PR #2904](https://github.com/sipeed/picoclaw/pull/2904) addresses a leaked goroutine bug in `ReloadProviderAndConfig` and cleans up panics in the agent loop.
*   **HIGH - Memory/Bus Blocking:** [PR #2906](https://github.com/sipeed/picoclaw/pull/2906) fixes an issue where full message bus buffers could indefinitely block goroutines, preventing memory accumulation under high load.
*   **MEDIUM - JSONL Crash Consistency:** [PR #2907](https://github.com/sipeed/picoclaw/pull/2907) fixes a data drift gap where `.meta.json` fails to update if the app crashes mid-write.
*   **MEDIUM - Web Security:** [PR #2900](https://github.com/sipeed/picoclaw/pull/2900) and [PR #2899](https://github.com/sipeed/picoclaw/pull/2899) address significant security flaws, including path traversal in the skill deletion API, missing CSRF protection, and hardcoded `InsecureSkipVerify` in MQTT channels.
*   **LOW - Sandbox Bypass:** [PR #2693](https://github.com/sipeed/picoclaw/pull/2693) patches a workspace sandbox escape via `find /` and `ls /`.

## 6. Feature Requests & Roadmap Signals
User requests today indicate a push for broader provider support and richer multi-modal interactions:
*   **DeepSeek Thinking Mode:** [Issue #2903](https://github.com/sipeed/picoclaw/issues/2903) requests mapping `thinking_level` to DeepSeek's native reasoning fields, a likely candidate for the `v0.2.8` stable release given the current focus on provider compatibility.
*   **GPT4Free Support:** [Issue #2901](https://github.com/sipeed/picoclaw/issues/2901) requests native `g4f` integration for cost-free local homelab inference. 
*   **Rich Media Messaging:** [Issue #2855](https://github.com/sipeed/picoclaw/issues/2855) requests native media attachment support. This is already actively being developed in [PR #2856](https://github.com/sipeed/picoclaw/pull/2856), which implements Telegram rich delivery, and is highly likely to merge soon.

## 7. User Feedback Summary
*   **Use Cases:** Users are heavily deploying PicoClaw on ARM64 SBCs (Raspberry Pi) and Android Termux ([PR #2902](https://github.com/sipeed/picoclaw/pull/2902)) as always-on personal assistants connected via WhatsApp and Telegram.
*   **Pain Points:** Users express frustration with configuration breaking between software versions, mitigated by today's "Factory Reset" PR. Furthermore, the lack of streaming output for web interfaces makes the AI feel sluggish.
*   **Satisfaction:** Community engagement is highly positive; users are actively developing advanced integrations (OAuth for ChatGPT, multi-modal tools) and submitting security patches, indicating a high level of technical trust and project investment.

## 8. Backlog Watch
The following high-value items are currently marked as `[stale]` or lack recent maintainer engagement and require prioritization:
*   **[PR #2768](https://github.com/sipeed/picoclaw/pull/2768):** `fix(agent): retry transient LLM HTTP errors` is crucial for agent robustness but has stalled since May 4th.
*   **[PR #2858](https://github.com/sipeed/picoclaw/pull/2858):** `fix(exec): allow quoted heredoc markdown bodies` is awaiting review to improve the agent's bash execution capabilities.
*   **[Issue #2769](https://github.com/sipeed/picoclaw/issues/2769):** The closed `401` API key authentication bug might need a clearer documented root-cause for users experiencing lingering provider issues.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-21

## 1. Today's Overview
NanoClaw experienced a high level of open-source activity over the past 24 hours, driven primarily by a substantial influx of 23 active pull requests, 17 of which remain open. The maintainers successfully merged several critical infrastructure and bug-fix PRs, demonstrating a healthy and responsive project pipeline, even though no new official versioned releases were cut today. The community remains highly focused on hardening the platform's multi-channel capabilities, specifically targeting messaging integration behaviors (such as WhatsApp groups) and container security boundaries. Overall, the project is in an active, iterative development phase, prioritizing system stability, agent context management, and deployment flexibility.

## 2. Releases
No new releases were published today. 

## 3. Project Progress
Six pull requests were merged or closed today, representing significant forward momentum in platform stability, setup reliability, and channel integrations:
*   **WhatsApp Group Mentions Fixed:** [PR #2565 (CLOSED)](https://github.com/qwibitai/nanoclaw/pull/2565) resolved a critical issue where group @-mentions failed to trigger the onboarding flow. 
*   **Setup and Deployment Reliability:** A series of dependent setup PRs were closed/merged, significantly smoothing the first-time installation experience: [PR #2052 (CLOSED)](https://github.com/qwibitai/nanoclaw/pull/2052) (auto-bootstrap admin), [PR #2054 (CLOSED)](https://github.com/qwibitai/nanoclaw/pull/2054) (invisible-sudo hangs), [PR #2056 (CLOSED)](https://github.com/qwibitai/nanoclaw/pull/2056) (LXC/Polkit fixes), and [PR #2057 (CLOSED)](https://github.com/qwibitai/nanoclaw/pull/2057) (systemd on LXC).
*   **Agent Administration:** [PR #2143 (CLOSED)](https://github.com/qwibitai/nanoclaw/pull/2143) introduced admin cancel commands for active agent runs.

Additionally, the open pipeline is rich with expanding capabilities. Notable new open PRs include an Agent Client Protocol (ACP) server integration ([PR #2575](https://github.com/qwibitai/nanoclaw/pull/2575)), agent context window introspection ([PR #2573](https://github.com/qwibitai/nanoclaw/pull/2573)), and rootless Podman support ([PR #2572](https://github.com/qwibitai/nanoclaw/pull/2572)).

## 4. Community Hot Topics
The most active community discussions center around messaging channel behavior and deployment architecture.
*   **WhatsApp Integration Quirks:** Users are actively discussing edge cases in WhatsApp routing. [Issue #2560](https://github.com/qwibitai/nanoclaw/issues/2560) highlights the aforementioned @-mention bug. Meanwhile, [Issue #2570](https://github.com/qwibitai/nanoclaw/issues/2570) raises concerns about shared-number mode falsely triggering the agent when the human operator is tagged, pointing to a need for stricter origin-entity resolution.
*   **Agent Context Awareness:** [PR #2573](https://github.com/qwibitai/nanoclaw/pull/2573) is drawing attention for addressing a core AI limitation: allowing the agent to monitor its own token usage to prevent incomplete tasks.
*   **Container Infrastructural Decay:** [Issue #2574](https://github.com/qwibitai/nanoclaw/issues/2574) points out that the Apple Container skill branch is dangerously stale, warning users that merging it rolls back critical infrastructure updates. 

## 5. Bugs & Stability
Several high-priority bugs were reported today, with varying degrees of immediate fix availability:
1.  **Infinite Retry Loop after Context Compaction:** [Issue #2561](https://github.com/qwibitai/nanoclaw/issues/2561) - Agents get stuck in an infinite loop producing unparseable output post-compaction (~165k tokens). *No fix PR is currently available.*
2.  **WhatsApp Shared-Number False Triggers:** [Issue #2570](https://github.com/qwibitai/nanoclaw/issues/2570) - Agents wake up incorrectly when the human operator is mentioned. *No fix PR is currently available.*
3.  **Emoji Reaction Schema Mismatch:** [Issue #2569](https://github.com/qwibitai/nanoclaw/issues/2569) - The handler passes raw emoji characters instead of the shortcodes required by the schema, breaking reactions on WhatsApp and Discord. *No fix PR is currently available.*
4.  **Group @-Mention Blocking Onboarding:** [Issue #2560](https://github.com/qwibitai/nanoclaw/issues/2560) - Hardcoded `isMention: undefined` dropped unknown chat events. *Resolved/Closed via [PR #2565](https://github.com/qwibitai/nanoclaw/pull/2565).*

## 6. Feature Requests & Roadmap Signals
Analysis of today's PRs and Issues reveals clear roadmap signals for upcoming versions:
*   **Enhanced IDE Interoperability:** [PR #2575](https://github.com/qwibitai/nanoclaw/pull/2575) introduces the Agent Client Protocol (ACP), signaling an intent to position NanoClaw as a backend for major IDEs like WebStorm and Zed.
*   **Optimized CLI Token Usage:** [PR #2571](https://github.com/qwibitai/nanoclaw/pull/2571) proposes integrating `rtk` to proxy dev commands, targeting 60–90% token savings—a massive cost-efficiency feature for users.
*   **Pluggable Central Database:** The ongoing work in [PR #1723](https://github.com/qwibitai/nanoclaw/pull/1723) suggests the next major version will abstract the central DB to support SQLite and optional SeekDB, catering to enterprise scalability needs.

## 7. User Feedback Summary
Real user pain points currently revolve around platform opacity and infrastructure friction. Users deploying NanoClaw in complex group-chat environments (like WhatsApp shared-mode) express frustration with unpredictable agent routing and wake triggers. Furthermore, the silent failures of the agent during context compaction ([Issue #2561](https://github.com/qwibitai/nanoclaw/issues/2561)) and silent DB write rejections ([PR #2496](https://github.com/qwibitai/nanoclaw/pull/2496)) indicate that users desire much better error visibility and circuit-breaking mechanisms. On the positive side, community contributions fixing LXC setups and Podman support show strong satisfaction among self-hosting power users looking to run agents in rootless environments.

## 8. Backlog Watch
Several crucial infrastructure and security PRs need maintainer attention to prevent stagnation:
*   **Database Write Bug:** [PR #2496](https://github.com/qwibitai/nanoclaw/pull/2496) (open since May 15) fixes a silent `SQLITE_READONLY` failure in outbound messaging and should be prioritized.
*   **Security Hardening:** Multiple vital security PRs by `Hinotoi-agent` are awaiting review, including symlink rejection for host directories ([PR #1999](https://github.com/qwibitai/nanoclaw/pull/1999), open since April 25), channel installer trust boundaries ([PR #2004](https://github.com/qwibitai/nanoclaw/pull/2004)), and agent-to-agent authorization ([PR #2383](https://github.com/qwibitai/nanoclaw/pull/2383)). Merging these is critical before the next release.
*   **Stale Skill Branches:** Maintainers must address [Issue #2574](https://github.com/qwibitai/nanoclaw/issues/2574) by rebasing the `skill/apple-container` branch against `main` to prevent users from accidentally regressing their container infrastructure.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-05-21

## 1. Today's Overview
NullClaw experienced a low-volume but strategically significant day, with zero new releases, closed issues, or merged pull requests. Activity was confined to updates on two existing open PRs, suggesting ongoing development and code review cycles. The lack of new issues indicates a stable project state, while the open PRs highlight concurrent efforts to improve cross-platform compatibility and introduce significant new automation features. Overall, the project appears to be in a mature, heads-down development phase.

## 2. Releases
No new releases were recorded today.

## 3. Project Progress
No PRs were merged today, but two substantial open PRs saw updates, indicating active review or iteration:

- **Windows Compatibility Testing ([PR #892](https://github.com/nullclaw/nullclaw/pull/892)):** Updated yesterday, this PR adds regression tests for the `getAddressList` function on Windows. This supports a recent fix on `main` that replaced a localhost-only stub with a proper resolver, which had previously caused `HostResolutionFailed` errors for provider chat completions.

- **Cron Automation Engine ([PR #783](https://github.com/nullclaw/nullclaw/pull/783)):** Also updated recently, this long-running feature branch introduces a DB-backed cron subagent. It represents a major architectural addition, including a scheduler, history tracking, and CLI improvements.

## 4. Community Hot Topics
Community engagement metrics (comments and reactions) are currently at zero for the active PRs. However, based on the PR summaries, the underlying development focus is clear:

- **Cross-Platform Stability:** The work in [PR #892](https://github.com/nullclaw/nullclaw/pull/892) addresses a critical need for Windows users, ensuring network operations work correctly across different operating systems.
- **Task Automation:** [PR #783](https://github.com/nullclaw/nullclaw/pull/783) signals a strong demand for autonomous scheduling. The implementation of a cron subagent with a history table and routing suggests users want reliable, persistent background tasks.

## 5. Bugs & Stability
No new bugs or regressions were reported in the last 24 hours.

**Previous Bug Addressed:**
- A significant Windows network resolution bug was recently resolved on the `main` branch (addressed by tests in [PR #892](https://github.com/nullclaw/nullclaw/pull/892)). Previously, the `getAddressList` implementation was a stub that only returned localhost, causing `HostResolutionFailed` crashes during hostname pre-resolution.

## 6. Feature Requests & Roadmap Signals
The most prominent roadmap signal is the upcoming Cron integration:

- **Cron Subagent ([PR #783](https://github.com/nullclaw/nullclaw/pull/783)):** This feature will likely be a cornerstone of the next major release. Key components include:
    -   **Scheduler Engine:** DB-backed with history (`cron_runs`) and queue (`cron_run_queue`) tables.
    -   **Job Types:** Support for skill, agent, and shell executions.
    -   **Security:** Timezone offsets and delivery routing hardening.
    -   **CLI Enhancements:** JSON output for `cron list` and `cron schedule`.

## 7. User Feedback Summary
No direct user feedback (issues or comments) was recorded today. The developer activity suggests internal priorities are focused on hardening network code for Windows and building out autonomous scheduling capabilities.

## 8. Backlog Watch
- **[PR #783](https://github.com/nullclaw/nullclaw/pull/783):** Open since April 7, 2026, this large feature PR requires careful review due to its scope (DB schema changes, security implications of shell jobs). It is the primary candidate for maintainer attention.
- **[PR #892](https://github.com/nullclaw/nullclaw/pull/892):** Open since May 5, 2026, this testing PR should be prioritized to ensure the recent Windows fixes are locked in before the next release.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-21

## 1. Today's Overview
IronClaw is experiencing an intense phase of architectural iteration, primarily focused on the "Reborn" initiative—a major refactor of the agent loop, runtime, and tool composition layers. Activity is exceptionally high, with 40 pull requests updated and 30 issues actively discussed or closed in the last 24 hours. Almost all core development is driven by a small group of prolific maintainers (especially `serrrfiat`), indicating a coordinated, milestone-driven push rather than organic community contribution. No new releases shipped today, but the volume of merged PRs signals that a significant beta or release candidate is likely imminent.

## 2. Releases
No new releases were published today.

## 3. Project Progress
A substantial amount of foundational and infrastructural work landed today, with 15 PRs merged/closed. Key advancements include:

- **Reborn Built-in Capabilities & Runtime Composition:** Several PRs land the first-party "built-in" tooling (shell, coding tools like file/glob/grep) into the new Reborn host runtime. The shell built-in is now ported ([PR #3816](https://github.com/nearai/ironclaw/pull/3816)), and coding built-ins are routed through Reborn's new capability/manifest system ([PR #3817](https://github.com/nearai/ironclaw/pull/3817)).
- **Security & Policy Enforcement:** Runtime policy is now enforced before host capability dispatch ([PR #3820](https://github.com/nearai/ironclaw/pull/3820)), production egress requires staged credentials ([PR #3818](https://github.com/nearai/ironclaw/pull/3818)), and the Reborn live runtime fails closed if no policy is resolved ([PR #3825](https://github.com/nearai/ironclaw/pull/3825)). These form a coherent security hardening stack.
- **WebUI & CLI Foundations:** The CLI `serve` handoff for Reborn WebUI is merged ([PR #3782](https://github.com/nearai/ironclaw/pull/3782)), and skill context source wiring is complete ([PR #3823](https://github.com/nearai/ironclaw/pull/3823)).

## 4. Community Hot Topics
The most actively discussed issues are technical design and planning threads driven by core maintainers, with limited but focused external engagement:

- **[Issue #3702](https://github.com/nearai/ironclaw/issues/3702) — [reborn] Reborn: revise and implement binary-E2E test framework plan** (4 comments). This is a deep technical planning issue for end-to-end testing of the new agent loop. Underlying need: ensure test parity and reliability during the Reborn migration.
- **[Issue #1519](https://github.com/nearai/ironclaw/issues/1519) — Routine notifications lack context in user's chat thread** (1 comment, originally from March). A long-standing UX issue where routine notifications are isolated from main chat, reducing context. Signals demand for better multi-turn conversational continuity.
- **[Issue #3798](https://github.com/nearai/ironclaw/issues/3798) — Design: subagent spawn for the Reborn agent loop** (0 comments so far, but broad scope). A proposed design for subagent orchestration within Reborn, indicating roadmap direction toward multi-agent workflows.

## 5. Bugs & Stability
- **[Issue #3734](https://github.com/nearai/ironclaw/issues/3734) — v0.28.2 regression: provider config missing API Key and Fetch available models controls.** A user-reported regression in the Non-TEE agent settings UI. Severity: medium (config-breaking for some users). No fix PR is visible in today's data; may need attention.
- **[Issue #3447](https://github.com/nearai/ironclaw/issues/3447) — Nightly E2E failed.** A CI reliability issue; the scheduled end-to-end test suite is failing. Severity: high if it persists, as it blocks confidence in merges.
- **[Issue #3821](https://github.com/nearai/ironclaw/issues/3821) — `Thread::restore_from_messages` drops orphan assistant rows, preventing out-of-band context injection.** A data integrity bug in session restoration. Severity: medium-high, potentially affecting context accuracy in long sessions.

## 6. Feature Requests & Roadmap Signals
- **Extension & Tool Ecosystem Expansion:** Multiple "Lane" issues map out the integration of concrete tools into Reborn: Notion MCP ([Issue #3805](https://github.com/nearai/ironclaw/issues/3805)), GitHub WASM ([Issue #3806](https://github.com/nearai/ironclaw/issues/3806)), Google Calendar/Gmail ([Issue #3829](https://github.com/nearai/ironclaw/issues/3829)), and Native Memory ([Issue #3804](https://github.com/nearai/ironclaw/issues/3804)). These are likely targets for the next major feature release.
- **WebUI Beta & Event Streaming:** The WebUI is being ported to Reborn ([Issue #3580](https://github.com/nearai/ironclaw/issues/3580)), and an `EventStreamManager` for durable streaming is planned ([Issue #3281](https://github.com/nearai/ironclaw/issues/3281), [Issue #3809](https://github.com/nearai/ironclaw/issues/3809)).
- **IronHub Integration:** [PR #3737](https://github.com/nearai/ironclaw/pull/3737) adds CLI and agent-tooling for installing tools/skills from IronHub, pointing to a future marketplace or registry model.
- **Benchmarking Infrastructure:** [PR #3808](https://github.com/nearai/ironclaw/pull/3808) introduces a `/benchmark` slash-command for running benchmarks on PRs, indicating a maturing CI/quality process.

## 7. User Feedback Summary
- **Pain Point:** The regression in provider config controls ([Issue #3734](https://github.com/nearai/ironclaw/issues/3734)) is a direct usability blocker for users configuring custom inference providers.
- **Use Case:** The request for routine notifications to include context in the main chat thread ([Issue #1519](https://github.com/nearai/ironclaw/issues/1519)) highlights that users rely on IronClaw for long-running, multi-channel workflows and need better context continuity.
- **Satisfaction:** Community engagement is minimal in issue comments; the project appears maintainer-driven with strong internal velocity but limited public design discussion.

## 8. Backlog Watch
- **[Issue #3094](https://github.com/nearai/ironclaw/issues/3094) — [Reborn] Add approval/auth interaction services.** Open since late April, labeled P0, but still awaiting core implementation. Critical for any production Reborn deployment.
- **[Issue #1519](https://github.com/nearai/ironclaw/issues/1519) — Routine notifications lack context.** Open since March, with no visible progress or assignee. Affects user experience for routine/automation users.
- **[Issue #3610](https://github.com/nearai/ironclaw/issues/3610) — Preserve typed filesystem errors in ProcessError.** A P0 code-quality issue that prevents brittle string matching downstream; small scope but high importance for robustness.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-21

## 1. Today's Overview
LobsterAI is exhibiting a **highly active and healthy development cadence**. Over the last 24 hours, the project saw a significant spike in contribution activity, with 24 pull requests updated—7 of which were successfully merged/closed, alongside 4 active issues. This indicates an ongoing, focused engineering effort to harden the platform's core infrastructure and refine the user experience. The complete absence of new releases today suggests the team is likely in an intensive feature integration and testing phase, potentially preparing for a substantial future milestone. 

## 2. Releases
No new releases were published today. The merging of several foundational PRs suggests the team is accumulating changes for an upcoming minor or major version bump.

## 3. Project Progress
Today's merged/closed PRs (7 total) represent significant improvements to stability, cross-platform compatibility, and core UI/UX:
*   **Model Context & Customization:** Merged PR [#2019](https://github.com/netease-youdao/LobsterAI/pull/2019) introduced highly anticipated support for per-model custom parameter pass-through (e.g., `temperature`, `thinking` blocks) and a dedicated UI for viewing AI thinking processes. PR [#2021](https://github.com/netease-youdao/LobsterAI/pull/2021) added `contextWindow` support for package models, allowing better context length management.
*   **UI/UX Refinements:** Merged PR [#2022](https://github.com/netease-youdao/LobsterAI/pull/2022) optimized the HTML/Source code preview experience by implementing lazy loading for large files and fixing theme adaptation issues.
*   **Cross-Platform & Stability Fixes:** PR [#2020](https://github.com/netease-youdao/LobsterAI/pull/2020) resolved a frustrating Windows UI bug where the window would render very small on cross-DPI multi-monitor setups.
*   **Networking & Tooling:** PR [#2023](https://github.com/netease-youdao/LobsterAI/pull/2023) improved the stability and success rate of web fetching and browser tools, while PR [#2018](https://github.com/netease-youdao/LobsterAI/pull/2018) fixed an OpenClaw gateway restart issue triggered during token refreshes.

## 4. Community Hot Topics
Community discussions over the last 24 hours have centered heavily on ecosystem compatibility and third-party integrations:
*   **Gateway Port Conflicts:** The most active issue is [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) (2 comments). Users are reporting a guaranteed port conflict and gateway authentication failure when running LobsterAI alongside "Emperor Crab" (智企帝王蟹), another enterprise tool. This highlights a strong user need to run multiple localized AI agents simultaneously without network port collisions.
*   **Third-Party Connector Setup:** Issue [#1568](https://github.com/netease-youdao/LobsterAI/issues/1568) (1 comment) shows users struggling to configure DingTalk (钉钉) streaming messages via an external OpenClaw connector. It indicates that documentation for IM integrations and CLI tooling needs improvement.

## 5. Bugs & Stability
Several high-impact bugs were reported today, mostly related to environmental setup and runtime conflicts:
1.  **Critical (Gateway Conflict):** [Issue #1698](https://github.com/netease-youdao/LobsterAI/issues/1698) - Guaranteed gateway crash when installed alongside another local AI agent. *No fix PR identified yet.*
2.  **High (Runtime Initialization):** [Issue #2017](https://github.com/netease-youdao/LobsterAI/issues/2017) - Users are completely unable to input text or create tasks locally due to a missing "built-in OpenClaw runtime (cfmind)". This represents a friction point in the local deployment pipeline. *No fix PR identified yet.*
3.  **Medium (UI/Theming):** [PR #2022](https://github.com/netease-youdao/LobsterAI/pull/2022) - Vertical scrolling and theme adaptation bugs in the Artifact source code preview. *Status: Fixed and Merged.*

## 6. Feature Requests & Roadmap Signals
The community is actively shaping the roadmap, pushing for deeper integrations and enhanced local capabilities:
*   **Alternative Engines:** [Issue #2016](https://github.com/netease-youdao/LobsterAI/issues/2016) requests the integration of the "openhuman" engine, signaling user desire for varied backend AI engines.
*   **Quality of Life & IM Features:** Several open PRs from April saw renewed activity today, suggesting they are being reviewed for upcoming releases. These include adding slash commands for IM channels ([PR #1573](https://github.com/netease-youdao/LobsterAI/pull/1573)), input box image thumbnails ([PR #1580](https://github.com/netease-youdao/LobsterAI/pull/1580)), and a "recently used" tab for AI skills ([PR #1583](https://github.com/netease-youdao/LobsterAI/pull/1583)).

## 7. User Feedback Summary
Users are heavily utilizing LobsterAI for local desktop deployment and enterprise IM integration (DingTalk, etc.). The overall satisfaction with the feature velocity is high, but **local environment configuration remains a major pain point**. Users express frustration when transitioning from older versions to new ones (e.g., residual files breaking Python/pip setups as seen in [PR #1582](https://github.com/netease-youdao/LobsterAI/pull/1582)) and encountering missing runtime dependencies ([Issue #2017](https://github.com/netease-youdao/LobsterAI/issues/2017)). The desire for a more self-healing, robust installation process is evident.

## 8. Backlog Watch
The maintainer team should address a growing backlog of high-quality community PRs that have been sitting open (and marked `[stale]`) since early April. Key items requiring maintainer attention include:
*   [PR #1576](https://github.com/netease-youdao/LobsterAI/pull/1576): A critical fix for an SSE stream race condition that causes silent data loss.
*   [PR #1555](https://github.com/netease-youdao/LobsterAI/pull/1555): A fix for macOS x64 packaging failures.
*   [PR #1550](https://github.com/netease-youdao/LobsterAI/pull/1550): A backend correction for scheduled tasks failing when notifications are disabled.
Addressing these stale PRs would significantly bolster the application's stability and encourage further community contributions.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-21

## 1. Today's Overview
The Moltis project experienced a highly productive day, characterized by three significant pull requests being merged while maintaining steady community engagement through two newly opened feature requests. The core development team appears focused on fortifying the platform's foundational systems, specifically targeting critical stability and security patches in the memory management, code execution (QMD), and secure vault subsystems. While the closed issue rate indicates healthy bug-triage behavior, the absence of a new software release today suggests these merged foundational improvements are being staged for a larger, upcoming release. Overall, project health is robust, with active contributors successfully shipping deep architectural fixes.

## 2. Releases
No new releases were recorded today. 

## 3. Project Progress
Development momentum was strong today with three substantial PRs merged into the main branch:
* **PR [#1010](https://github.com/moltis-org/moltis/pull/1010) (feat: memory):** Advanced the memory management subsystem to support nested subfolders and collection-aware writes. This moves the QMD backend from a flat-file structure to a highly flexible directory layout (`memory/**`, `agents/**`, etc.), unlocking more complex, organized AI memory architectures.
* **PR [#1009](https://github.com/moltis-org/moltis/pull/1009) (fix: qmd):** Resolved a critical resource leak where the `QmdManager::run_with_timeout` failed to kill underlying Node.js child processes upon timeout expiration. This fix ensures proper `kill_on_drop` behavior, significantly improving the long-term stability of the agent's code execution environments.
* **PR [#1026](https://github.com/moltis-org/moltis/pull/1026) (fix: vault):** Addressed a synchronization vulnerability in secure password rotations. Auth password changes are now kept strictly atomic with vault password rotations, and mismatched reset flows are actively rejected, hardening the platform's security posture.

## 4. Community Hot Topics
The most actively discussed item today is the older, recently updated **[Bug] Browser sandbox fails when Moltis runs in Docker ([#977](https://github.com/moltis-org/moltis/issues/977))**. With 3 comments, it highlights a persistent user pain point regarding containerization.
* **Underlying Need:** Users are increasingly deploying Moltis via Docker (often nested via LXC on Proxmox for homelab setups). The failure of the browser sandbox tool in these restricted environments indicates a strong community need for robust, out-of-the-box privileged/unprivileged container execution support for automated web-browsing tasks.

## 5. Bugs & Stability
* **High Severity (Active):** **Issue [#977](https://github.com/moltis-org/moltis/issues/977)** - Docker Browser Sandbox Failure. Running Moltis in an LXC/Docker container causes the browser tool to crash during directory creation (`/data/browser`). *No active fix PR is currently listed.*
* **Critical Severity (Patched):** **PR [#1009](https://github.com/moltis-org/moltis/pull/1009)** - Leaked QMD child processes. Dropping the in-flight future previously left zombie processes running, which would degrade host performance over time. Merged today.
* **Medium Severity (Patched):** **PR [#1026](https://github.com/moltis-org/moltis/pull/1026)** - Vault password desync. Best-effort logging previously allowed vault rotation to occur without verifying auth passwords, leading to mismatch errors. Merged today.

## 6. Feature Requests & Roadmap Signals
Two new enhancement requests were opened today, signaling user desires for broader integration and ease of use:
* **Issue [#1028](https://github.com/moltis-org/moltis/issues/1028):** Support for Moltis docs OOTB (Out-Of-The-Box). Users want the agent to natively ingest and query its own documentation. This is a strong signal that users want the AI to be entirely self-sufficient and capable of troubleshooting its own configuration.
* **Issue [#1027](https://github.com/moltis-org/moltis/issues/1027):** Support for Google Antigravity SDK as a provider. This indicates a growing demand for Moltis to interface with next-generation compute/LLM SDKs. Given the rapid iteration of provider SDKs, this is a prime candidate for inclusion in an upcoming release once the core memory/vault refactoring settles.

## 7. User Feedback Summary
User feedback today heavily emphasizes advanced homelabbing and edge-case deployments. The Docker/LXC deployment model is highly popular among the open-source community, but sandboxing incompatibilities are causing friction. On the positive side, community developers (such as `gmoigneu`) are actively contributing sophisticated fixes for memory and process management, indicating a highly technical and engaged power-user base. There is a clear expectation that the AI assistant should be capable of complex file management (nested memory) and self-documentation. 

## 8. Backlog Watch
* **Issue [#977](https://github.com/moltis-org/moltis/issues/977):** This bug was opened on May 6th and has accrued 3 comments without a PR resolution. Given the prevalence of Docker deployments, this requires maintainer attention to unblock homelab users.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-05-21

## 1. Today's Overview
CoPaw is experiencing exceptionally high development velocity and community engagement today, operating at a mature and highly active open-source project scale. With 38 issues and 37 pull requests updated within the last 24 hours, the repository shows a strong balance between rapid feature iteration and community bug-triage. The project recently shipped version `v1.1.8.post1`, demonstrating the maintainers' commitment to rapid patching. Current development is heavily focused on UI/UX refinements, expanding LLM provider support, and stabilizing peripheral features like the desktop Pet plugin and WeChat/Feishu channel integrations. 

## 2. Releases
**Latest Release: `v1.1.8.post1`**
*   **What's Changed:**
    *   `docs(install)`: Added backup directory documentation ([PR #4534](https://github.com/agentscope-ai/QwenPaw/pull/4534)).
    *   `feat(provider)`: Integrated OpenCode Go into the opencode provider via `meta.base_url_options` ([PR #4536](https://github.com/agentscope-ai/QwenPaw/pull/4536)).
    *   `chore(version)`: Patch version bump to post-release.

## 3. Project Progress
Significant headway was made across the frontend and backend today, with 17 PRs merged/closed. Key areas of progress include:
*   **Backup & Security:** Fixed a critical HTTP 403 bug when accessing backups from localhost by removing the backup host gate, greatly improving Docker bridge deployments ([PR #4563](https://github.com/agentscope-ai/QwenPaw/pull/4563)).
*   **Console UI:** Resolved an infinite auto-switching loop when changing sessions rapidly ([PR #4573](https://github.com/agentscope-ai/QwenPaw/pull/4573)). Assistant file previews were also improved for better file name display and image sizing ([PR #4288](https://github.com/agentscope-ai/QwenPaw/pull/4288)). 
*   **Desktop App:** Fixed file links so they open correctly in the system's default handler ([PR #4298](https://github.com/agentscope-ai/QwenPaw/pull/4298)).
*   **Plugin Stability:** Addressed severe crashes related to the `qwenpaw-pet` desktop plugin by improving Windows process termination and lifecycle management ([PR #4564](https://github.com/agentscope-ai/QwenPaw/pull/4564)).
*   **Channel Integrations:** Merged streaming typewriter card support for the Feishu channel ([PR #2862](https://github.com/agentscope-ai/QwenPaw/pull/2862)).

## 4. Community Hot Topics
*   **WeChat iLink Push Failures ([Issue #4477](https://github.com/agentscope-ai/QwenPaw/issues/4477)):** Accumulated 13 comments. Users are frustrated by the lack of retry logic for expired `context_token` in scheduled tasks. Maintainers are actively addressing this via [PR #4576](https://github.com/agentscope-ai/QwenPaw/pull/4576).
*   **AGENTS.md Default Template Overwrite ([Issue #4496](https://github.com/agentscope-ai/QwenPaw/issues/4496)):** 13 comments. A major discussion regarding the v1.1.7 regression where system prompts ignore workspace files and load built-in defaults instead. 
*   **Performance Degradation over 40+ Agents ([Issue #4559](https://github.com/agentscope-ai/QwenPaw/issues/4559)):** 7 comments. Enterprise/advanced users are experiencing noticeable UI lag when managing large agent fleets, highlighting a need for frontend pagination or virtualization.
*   **ChatGPT-5.5 Support Inquiries ([Issue #4474](https://github.com/agentscope-ai/QwenPaw/issues/4474)):** 7 comments. High user interest in integrating the latest frontier models immediately upon release.

## 5. Bugs & Stability
*   **[Critical] Desktop Pet Process Crash (Windows):** Sending a message while the Pet plugin is active causes the main process to crash with a `Task has been cancelled!`/`ConnectTimeout` error. ([Issue #4541](https://github.com/agentscope-ai/QwenPaw/issues/4541), [Issue #4575](https://github.com/agentscope-ai/QwenPaw/issues/4575)). *Fix Status: Addressed in [PR #4564](https://github.com/agentscope-ai/QwenPaw/pull/4564).*
*   **[High] Feishu CardKit Streaming Failure:** Stream output fails because the sequence initial value is hardcoded to `0` instead of `1`. ([Issue #4572](https://github.com/agentscope-ai/QwenPaw/issues/4572)).
*   **[High] Long-term Memory Loss on Model Switch:** Switching models clears `MEMORY.md` and persistent history. ([Issue #4581](https://github.com/agentscope-ai/QwenPaw/issues/4581)).
*   **[Medium] API Streaming Truncation:** The first API call for a new `session_id` returns truncated stream data. ([Issue #4543](https://github.com/agentscope-ai/QwenPaw/issues/4543)).
*   **[Medium] Backup Secrets Restoration:** Users cannot restore secrets from full backups when running in a container environment. ([Issue #4583](https://github.com/agentscope-ai/QwenPaw/issues/4583)). 

## 6. Feature Requests & Roadmap Signals
*   **Coding Mode ([PR #4578](https://github.com/agentscope-ai/QwenPaw/pull/4578)):** A proposed in-browser IDE embedded alongside the chat UI, signaling a strategic move toward competing with AI coding environments like Cursor.
*   **Multimodal Auto-Routing ([Issue #4539](https://github.com/agentscope-ai/QwenPaw/issues/4539)):** Strong demand for the system to automatically detect media (image/video/voice) and seamlessly route the request to a capable vision/audio model without manual user switching.
*   **Skill Market & httpx Refactor ([PR #4518](https://github.com/agentscope-ai/QwenPaw/pull/4518)):** Introduction of an asynchronous "Skill Market" to discover and install plugins.
*   **Lightweight Goal Mode ([PR #4443](https://github.com/agentscope-ai/QwenPaw/pull/4443)):** Adds session-scoped standing objectives (`/goal` commands) to keep agents aligned with long-term user intent.
*   **Browser Automation Stability ([Issue #4584](https://github.com/agentscope-ai/QwenPaw/issues/4584)):** Users want a shift from CDP to Playwright for scheduled browser tasks due to connection instability.

## 7. User Feedback Summary
Users love the rapid iteration and vast channel support but are feeling growing pains associated with scaling. The transition from v1.1.7 to v1.1.8 has introduced frustrating edge cases, particularly regarding system prompt file loading and configuration persistence. Offline/air-gapped enterprise users report persistent friction with features that attempt to phone home (like the Pet plugin). Finally, users with large configurations (40+ agents) are hitting UI performance walls, indicating that the frontend needs architectural optimization for power users.

## 8. Backlog Watch
*   **Tauri 2.x Desktop App Support ([PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)):** Open since April 24th. A massive architectural PR submitted by a first-time contributor that needs maintainer review to prevent contributor fatigue.
*   **Sub-Agent MCP Config Inheritance ([Issue #4491](https://github.com/agentscope-ai/QwenPaw/issues/4491)):** Needs official maintainer input on the intended configuration semantics for sub-agents.
*   **MCP Dynamic Auth Token Passing ([Issue #3475](https://github.com/agentscope-ai/QwenPaw/issues/3475)):** Open since mid-April. This is a crucial blocker for enterprise users looking to integrate CoPaw securely into internal platforms via MCP.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-05-21

## 1. Today's Overview
ZeptoClaw is currently experiencing a period of low activity, with no newly opened or closed issues and no new software releases within the past 24 hours. The project's development momentum is primarily sustained by ongoing community contributions, highlighted by a single active pull request addressing a provider resolution bug. While the overall issue tracker remains quiet, the targeted nature of the current open PR suggests that maintainers and contributors are focused on strengthening the platform's underlying infrastructure and model routing logic. Overall project health appears stable, relying on iterative bug fixes rather than rapid feature expansion at the moment.

## 2. Releases
No new releases were recorded today. 

## 3. Project Progress
There was no merged or closed Pull Request activity today. However, progress is being made on bug resolution through PR [#592](https://github.com/qhkm/zeptoclaw/pull/592) (`fix(providers): keyword fallback must not claim unconfigured provider`). This PR aims to fix a critical routing logic flaw where unconfigured providers were being incorrectly returned during model inference. If merged, this will represent a significant stability improvement for users utilizing self-hosted or non-default model providers.

## 4. Community Hot Topics
The most notable community discussion is currently surrounding PR [#592](https://github.com/qhkm/zeptoclaw/pull/592), authored by Sisuthros. Although it currently has 0 reactions and standard comments, the PR's detailed summary reveals a significant real-world pain point. The underlying need discussed is **fail-safe routing**: users expect ZeptoClaw to strictly adhere to configured provider lists rather than attempting "best-effort" keyword matches that lead to application-breaking errors. 

## 5. Bugs & Stability
*   **[High Severity] Invalid Provider Fallback during Model Inference:** Author Sisuthros identified a bug in the `infer_provider_name_for_model` function. The keyword-based fallback mechanism ignores the `available_providers` list, leading to unhandled exceptions.
    *   *Manifestation:* This resulted in a 100% error rate in a production environment for a NIM-served Photon instance (specifically when resolving the model ID `openai/gpt-oss-120b`).
    *   *Status:* A fix is currently pending review in PR [#592](https://github.com/qhkm/zeptoclaw/pull/592). 

## 6. Feature Requests & Roadmap Signals
There are no explicit new feature requests or roadmap signals to report today based on the recent issue/PR activity. However, the aforementioned bug fix implies that future iterations of the AI agent should—and likely will—focus on implementing stricter configuration validation and more robust fallback mechanisms for LLM providers.

## 7. User Feedback Summary
Direct user feedback is minimal today, but the context provided in PR [#592](https://github.com/qhkm/zeptoclaw/pull/592) highlights a specific operational pain point. Users deploying complex, multi-provider setups (such as NIM-served Photon instances) experience acute frustration when ZeptoClaw's "smart" keyword matching overrides explicit configurations. This indicates that enterprise or advanced users prioritize predictable, strict routing over the system's attempts to guess user intentions.

## 8. Backlog Watch
Given the 0 new issues opened today, the backlog is not growing. However, maintainer attention is required to review and merge PR [#592](https://github.com/qhkm/zeptoclaw/pull/592). Because this PR addresses a condition that causes a 100% failure rate for specific third-party model deployments, moving it from "Open" to "Merged" and issuing a patch release should be treated as a high priority to restore stability for affected users.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-21

## 1. Today's Overview
ZeroClaw is currently experiencing a high volume of community activity, characterized by a massive influx of new pull requests (50 updated in the last 24h, 47 of which remain open) and a relatively low merge cadence (only 3 PRs merged/closed). This suggests that while developer interest and contributions are robust, the project may be facing a review bottleneck. The open issues (19 active in the last 24h) are heavily focused on the upcoming `v0.8.0` release, specifically centering around the complex schema v3 migrations, multi-agent architectures, and the resolution of technical debt from a previous bulk commit revert. Overall, the project's health is active but requires significant maintainer bandwidth to stabilize the integration branch for the next major release.

## 2. Releases
There have been **no new releases** recorded in the last 24 hours. The repository activity remains strictly focused on preparing the `integration/v0.8.0` branch.

## 3. Project Progress
Due to the low merge rate, most progress is currently distributed across open PRs rather than integrated code. Key advancements include:
*   **Infrastructure & Deployments:** Several forward-facing PRs are updating deployment scripts for v0.8.0, such as parametrizing the hardcoded `pi` user in Raspberry Pi deployment scripts ([PR #6804](https://github.com/zeroclaw-labs/zeroclaw/pull/6804)) and updating systemd service templates to remove deprecated `--host` and `--port` CLI flags ([PR #6805](https://github.com/zeroclaw-labs/zeroclaw/pull/6805)).
*   **Tooling & Security:** The security leak scanner is being updated to detect Groq API keys that were previously lost in a bulk revert ([PR #6812](https://github.com/zeroclaw-labs/zeroclaw/pull/6812)). 
*   **Runtime Enhancements:** Work has been submitted to add strict tool parsing modes for mixed-provider environments ([PR #6675](https://github.com/zeroclaw-labs/zeroclaw/pull/6675)) and to introduce a `file_upload_bundle` tool for atomic multi-file uploads ([PR #6775](https://github.com/zeroclaw-labs/zeroclaw/pull/6775)).
*   **Observability:** Significant work has gone into enriching OpenTelemetry tool spans to better track gen_ai semantic conventions ([PR #6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009)).

## 4. Community Hot Topics
The most actively discussed items revolve around project governance, multi-agent architecture, and provider compatibility:
*   **DeepSeek-V4 API Compatibility ([Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)):** With 11 comments and 4 thumbs-up, this is the most pressing user-facing issue. Users are experiencing degraded behavior (S2) when using DeepSeek-V4 Pro/Flash due to changes in the model's "thinking mode" API format.
*   **Multi-Agent UX & Runtime RFCs:** The accepted RFC for Multi-agent UX flow ([Issue #5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890), 9 comments) and the per-alias workspace isolation tracker ([Issue #6272](https://github.com/zeroclaw-labs/zeroclaw/issues/6272), 3 comments) are generating heavy discussion as core contributors realign the system for nested agent configurations.
*   **Governance and Board Cleanup:** An RFC to streamline PR lanes, board automation, and label cleanup ([Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)) has sparked 2 comments, directly addressing the current backlog and PR routing issues highlighted by today's 47 open PRs.

## 5. Bugs & Stability
Several high-severity bugs have been reported, mostly related to the `v0.8.0` integration branch and configuration dead-ends:
*   **Data Loss / Memory Bug (S2):** `purge_namespace` on SQLite was incorrectly deleting by category rather than namespace, risking broad data loss. (Issue: [Issue #6801](https://github.com/zeroclaw-labs/zeroclaw/issues/6801) | Fix PR: [PR #6777](https://github.com/zeroclaw-labs/zeroclaw/pull/6777)).
*   **Security Policy / Workflow Block (S1):** ZeroClaw's security policy is incorrectly blocking multiline heredocs, ironically preventing the agent from using its own prescribed PR-creation skill (Issue: [Issue #6771](https://github.com/zeroclaw-labs/zeroclaw/issues/6771)).
*   **MCP Tooling Dead Code (S2):** Several high-risk configuration fields, such as `tool_filter_groups` ([Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)) and `context_aware_tools` ([Issue #6720](https://github.com/zeroclaw-labs/zeroclaw/issues/6720)), parse cleanly but have zero effect on the runtime because they are hooked up to nothing. 
*   **Timeout Bug:** The native OpenAI provider ignores the `timeout_secs` config, hardcoding a 120s timeout that silently fails long-running requests ([Issue #6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723)).
*   **Provider Leakage:** Qwen 3.6 tool-call envelopes are leaking raw protocol payloads into user-facing Matrix channel replies ([Issue #6734](https://github.com/zeroclaw-labs/zeroclaw/issues/6734)).

## 6. Feature Requests & Roadmap Signals
The roadmap is heavily signaling a massive shift toward V3 configuration schemas and multi-agent isolation:
*   **Multi-Agent Workspaces ([Issue #6272](https://github.com/zeroclaw-labs/zeroclaw/issues/6272)):** The push for per-alias workspaces and shared resources indicates the next version will treat agents as fully isolated entities rather than shared-state instances.
*   **Configuration Macros ([Issue #6270](https://github.com/zeroclaw-labs/zeroclaw/issues/6270)):** Upcoming changes will introduce configurable macros to handle V3 nested config shapes, which is currently blocking seamless onboarding.
*   **Lighter ZeroClaw Core ([Issue #6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)):** A proposed RFC to rip out dedicated integration code (like Jira, GitHub) in favor of universal MCP skills, pointing toward a more modular, plugin-driven future.

## 7. User Feedback Summary
Users are expressing friction regarding edge cases in configuration and channel management. 
*   **Config Friction:** Users are frustrated that out-of-the-box features like `web_search` fail on fresh Linux installs while `web_fetch` works ([Issue #6373](https://github.com/zeroclaw-labs/zeroclaw/issues/6373)). Furthermore, users deploying via Homebrew are encountering broken config directory paths ([PR #6639](https://github.com/zeroclaw-labs/zeroclaw/pull/6639)).
*   **Channel Instability:** Dashboards currently allow adding channels without credentials, resulting in a supervisor crash loop every 2 seconds ([Issue #6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724)). Users are also requesting custom Telegram API endpoints to bypass 400 errors from the official API ([Issue #6807](https://github.com/zeroclaw-labs/zeroclaw/issues/6807)).
*   **Satisfaction:** The community is highly engaged in the RFC process and enthusiastic about contributing, though many are noting the overwhelming ratio of open PRs to open Issues (currently ~3:1).

## 8. Backlog Watch
The repository is exhibiting signs of review bottlenecks, with several high-priority items needing maintainer attention:
*   **Lost Commits ([Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)):** 153 commits lost in a March bulk revert are still awaiting tracking and manual recovery. 
*   **PR Review Queue:** With 47 open PRs updated in the last 24 hours, substantial community contributions are awaiting triage. Notable high-impact PRs sitting with `needs-author-action` or awaiting final review include the WhatsApp protocol update ([PR #6706](https://github.com/zeroclaw-labs/zeroclaw/pull/6706)) and the new interactive Channel API for Signal/WhatsApp ([PR #6297](https://github.com/zeroclaw-labs/zeroclaw/pull/6297)).
*   **Dead Configs:** Fixing the scaffolded but unimplemented memory reranking configuration ([Issue #6722](https://github.com/zeroclaw-labs/zeroclaw/issues/6722)) needs prioritization to prevent user confusion ahead of v0.8.0.

</details>