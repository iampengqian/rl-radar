# OpenClaw Ecosystem Digest 2026-06-08

> Issues: 298 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-07 22:19 UTC

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

# OpenClaw Project Digest — 2026-06-08

## 1. Today's Overview
OpenClaw experienced a high volume of activity over the past 24 hours, with nearly 300 issues updated and 500 pull requests touched, indicating a highly active and iterative development cycle. However, the project's merge rate remains relatively low (122 merged/closed out of 500 PRs updated), suggesting that maintainers are currently bottlenecked by review processes or stabilizing recent merges. The ecosystem is heavily focused on messaging channel reliability, memory/state management, and developer tooling, driven by a highly engaged open-source community.

## 2. Releases
### **v2026.6.5-beta.2**
*   **Highlights:** 
    *   **QQBot Security/UX Fix:** Strips model reasoning/thinking scaffolding (e.g., raw `<thinking>` blocks) before native delivery to prevent internal processing text from leaking into channel replies. Thanks to @openperf.
    *   **MCP Tooling:** Coerces `resource_link`, `resource`, `audio`, and malformed image payloads in tool results to prevent downstream parsing errors.
*   **Migration Note:** No explicit breaking changes outlined in the release notes, but the `<thinking>` tag stripping implies that downstream consumers relying on raw reasoning text will no longer receive it via QQBot.

## 3. Project Progress
*   **Diagnostics & Runtime Observability:** PR [#91256](https://github.com/openclaw/openclaw/pull/91256) wires missing producers for OpenTelemetry tool input/output spans, completing the tracing loop for agents.
*   **Channel Reliability (Telegram & iMessage):** iMessage saw crucial fixes for macOS 26 API resilience ([#91041](https://github.com/openclaw/openclaw/pull/91041)) and split-send metadata gating ([#90858](https://github.com/openclaw/openclaw/pull/90858)). Telegram TTS churn was fixed by deferring text settlement ([#83988](https://github.com/openclaw/openclaw/pull/83988)).
*   **State & Memory:** State management received fixes for NFS volumes where SQLite WAL mode is unsupported ([#91247](https://github.com/openclaw/openclaw/pull/91247)). Additionally, memory collection binding was fixed to correctly track workspace root changes ([#91253](https://github.com/openclaw/openclaw/pull/91253), [#91255](https://github.com/openclaw/openclaw/pull/91255)).
*   **Security Boundaries:** A new Slack `trusted-upstream` ingress mode was introduced for deployments behind a verifying sidecar ([#91244](https://github.com/openclaw/openclaw/pull/91244)), and HTTP owner-only tool invocation gating was locked down ([#90261](https://github.com/openclaw/openclaw/pull/90261)).

## 4. Community Hot Topics
*   **Agent Internal Monologue Leaking to Users ([#25592](https://github.com/openclaw/openclaw/issues/25592)):** A "diamond lobster" rated issue with 27 comments detailing how text between tool calls (e.g., error handling, narration) is routed to Slack/iMessage. This highlights a strong community need for strict separation of "internal processing" vs. "final delivery" in agentic workflows.
*   **SQLite Session/Transcript Migration Strategy ([#88838](https://github.com/openclaw/openclaw/issues/88838)):** 18 comments discussing a branch-by-abstraction approach to migrate runtime state to SQLite without high-risk rewrites. Signals heavy architectural iteration under the hood.
*   **Context Wedging & Delivery Recovery Failures:** Highly discussed issues like [#90639](https://github.com/openclaw/openclaw/issues/90639) (sessions hitting 200K context limits due to broken compaction) and [#91212](https://github.com/openclaw/openclaw/issues/91212) (messages silently lost on gateway restart). The community is actively stressing the boundaries of long-running, stateful sessions.

## 5. Bugs & Stability
*   **P1 - Cron Triggers Overloading Gateway ([#90991](https://github.com/openclaw/openclaw/issues/90991)):** Scheduled cron triggers contaminate global runtime state, causing transient system-wide overloads.
*   **P1 - Regression in Codex Turn-Completion ([#88312](https://github.com/openclaw/openclaw/issues/88312)):** Multi-tool agent turns stall reliably since version 2026.5.27.
*   **P1 - Data Loss via Write Tool ([#40001](https://github.com/openclaw/openclaw/issues/40001)):** Isolated cron sessions completely overwrite shared workspace files because the tool lacks an "append" mode.
*   **P1 - WSL2 Gateway SIGTERM ([#90428](https://github.com/openclaw/openclaw/issues/90428)) [FIXED]:** Exec tool kills the gateway via signal bleeding under Node 24. Resolved by PR [#90441](https://github.com/openclaw/openclaw/pull/90441).

## 6. Feature Requests & Roadmap Signals
*   **Topic-Session Families ([#90916](https://github.com/openclaw/openclaw/issues/90916)):** Request for one assistant to have multiple named context lanes (isolated transcripts, shared durable memory). Likely to be adopted soon given the ongoing SQLite state refactors.
*   **Gateway-Lite Mode ([#86881](https://github.com/openclaw/openclaw/issues/86881)):** A deployment mode stripping the AI harness for deterministic webhooks/cron scheduling. Suggests OpenClaw is moving toward being a comprehensive automation hub, not just an AI wrapper.
*   **Runtime Self-Context Config ([PR #90101](https://github.com/openclaw/openclaw/pull/90101)):** Agents becoming aware of their own context limits and pricing. Paired with the fix for absolute token thresholds in compaction ([#87136](https://github.com/openclaw/openclaw/issues/87136)), the next release will likely feature robust, model-agnostic context management.

## 7. User Feedback Summary
*   **Pain Points:** Users are frequently frustrated by "flashing" text in messaging channels, gateway crashes on restart, and sandbox isolation breaking write capabilities. Multi-model setups are particularly painful due to hardcoded absolute token limits.
*   **Satisfaction:** Community members are building highly complex, cross-platform workflows (e.g., Telegram to WebUI to Feishu). The demand for append-only memory files and C2PA notarization skills indicates heavy enterprise/adult-content-creation use cases relying on OpenClaw as core infrastructure.

## 8. Backlog Watch
*   **Bootstrap Files Ignored ([#29387](https://github.com/openclaw/openclaw/issues/29387)):** Open since Feb 2026 with 14 comments. Agent configs are silently ignored if placed in the wrong directory, breaking custom deployments. Labeled as `needs-maintainer-review`.
*   **Subagent Environment Variables ([#31583](https://github.com/openclaw/openclaw/issues/31583)):** Open since March 2026. The `exec` tool fails to pass injected secrets to sub-processes, crippling secure programmatic agent actions.
*   **Tool Progress Visibility on Slack ([#33413](https://github.com/openclaw/openclaw/issues/33413)):** A highly requested feature to update Slack thread status dynamically with the *exact* tool being run, rather than a static "is typing..." indicator.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digest summaries from June 8, 2026.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem on June 8, 2026, is characterized by rapid architectural maturation and a strong focus on enterprise-grade reliability. Projects are heavily pivoting from foundational LLM routing to complex, stateful multi-channel integrations (messaging platforms, desktop UIs) and localized memory management. Community demands are currently dominated by the need for strict context/window governance, seamless self-hosting deployments, and secure sandbox environments. While several frameworks are aggressively merging features to support multi-modal workflows and expanded tool calling, maintainers across the board are facing bottlenecks in CI/CD stability and backlog triage.

### 2. Activity Comparison
*Health Score metric: A = Highly active/Maintained, B = Active but facing bottlenecks, C = Passive/Stale, F = Dormant.*

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~300 | ~500 (122 merged) | **v2026.6.5-beta.2** | A |
| **IronClaw** | 50 | 37 (15 merged) | Pre-release (Pending) | A |
| **ZeroClaw** | High (Historical) | 50 (43 open) | No Release | B |
| **Hermes Agent**| 50 | 50 (9 merged) | No Release | B |
| **PicoClaw** | ~20 | 12+ (12 merged) | **Nightly v0.2.9** | A |
| **NanoBot** | Low-Med | 19 | No Release | B+ |
| **NanoClaw** | 3 | 9 | No Release | B |
| **CoPaw** | 6 | 2 (0 merged) | No Release | C+ |
| **Moltis** | 1 | 3 (0 merged) | No Release | C |
| **LobsterAI** | 15 (Stale bots) | 0 | No Release | D |
| **NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | No Activity | F |

### 3. OpenClaw's Position
**Advantages vs. Peers:** OpenClaw remains the definitive core reference implementation in the ecosystem. Its most significant advantage is its scale and operational velocity; iterating on nearly 500 PRs a day dwarfs most peers. It is uniquely positioned as mission-critical infrastructure (evidenced by C2PA notarization and append-only memory needs). 
**Technical Approach:** Unlike peers that are just beginning to implement basic SQLite state tracking or local memory, OpenClaw is aggressively tackling advanced distributed systems problems. These include OpenTelemetry observability wiring, NFS volume state resilience, and branch-by-abstraction database migrations.
**Community Size:** OpenClaw’s community is an order of magnitude larger and more enterprise-focused. While projects like PicoClaw see excitement around running on a $10 Raspberry Pi, OpenClaw users are deploying cross-platform enterprise workflows (Telegram to WebUI to Feishu) and hitting limits like 200K context wedging.

### 4. Shared Technical Focus Areas
*   **Context & Memory Governance:** A universal pain point across all active projects. 
    *   *OpenClaw*, *NanoBot*, and *ZeroClaw* are all actively dealing with massive context windows breaking compaction or session states. 
    *   *NanoBot* and *CoPaw* are specifically seeing demands for hierarchical/self-evolving memory systems.
*   **Sandbox Isolation & Security Boundaries:** Enforcing strict execution limits is a priority.
    *   *NanoBot* is struggling with `bwrap` permissions on modern Linux kernels; *NanoClaw* is fixing critical MCP permission bypasses; *OpenClaw* and *IronClaw* are both merging advanced security boundaries and auditing sinks.
*   **Multi-Channel/Messenger UX:** Users expect seamless cross-platform deployment.
    *   Telegram and Feishu (Lark) integrations are actively being patched across *OpenClaw*, *Moltis*, *NanoBot*, and *Hermes Agent*.
*   **Local vLLM / OpenAI-Compatible API Stability:** Self-hosters are encountering severe friction.
    *   *CoPaw* and *PicoClaw* are both reporting high-priority bugs where local models via vLLM or OpenAI-compatible proxies cause unresponsiveness or stream parsing failures.

### 5. Differentiation Analysis
*   **Target Architectures:** *IronClaw* is distinctly focused on a complex "Reborn" Rust-based substrate with strict capability mounts, aiming for deep secure enterprise integration. Conversely, *PicoClaw* and *ZeroClaw* differentiate by targeting edge computing and developer hobbyists (Termux/Android support, lightweight WASM plugins, and TUI clients).
*   **Tooling & Ecosystem Growth:** *ZeroClaw* and *Hermes Agent* are heavily leaning into expanding provider routing (Omniroute, free tiers) and custom tool integrations (n8n, music generation). *OpenClaw* differentiates by focusing on deterministic automation (Gateway-Lite, Cron triggers) rather than just conversational AI.
*   **User Base:** *Hermes Agent* and *CoPaw* show signs of catering heavily to power users running heterogeneous local models (e.g., visual relay stations, desktop UI model switching). *NanoClaw* is distinctly targeting developers focused on containerized microservices and CLI workflows.

### 6. Community Momentum & Maturity
*   **Rapid Iteration Tier:** **OpenClaw**, **IronClaw**, and **PicoClaw**. These projects have maintainers aggressively merging PRs, pushing nightly/beta releases, and actively resolving P1/P2 blockers. 
*   **Bottleneck/Feature Sprint Tier:** **ZeroClaw**, **Hermes Agent**, **NanoBot**. These projects have immense community enthusiasm and high issue/PR volume, but maintainers are struggling to clear review backlogs (e.g., ZeroClaw has 43 open PRs, Hermes has 41), leading to integration friction.
*   **Stabilizing/Stalled Tier:** **NanoClaw**, **CoPaw**, **Moltis**, and **LobsterAI**. *NanoClaw*, *CoPaw*, and *Moltis* are experiencing quiet periods with zero merges, focusing on minor hotfixes. *LobsterAI* is effectively stalled, relying entirely on stale-bots to manage a backlog of untriaged bugs and broken CI pipelines.

### 7. Trend Signals
1.  **The Shift to Proactive/Event-Driven Agents:** Users no longer want just reactive chatbots. The high demand for Cron triggers, Gateway-Lite webhooks (OpenClaw), and `send_channel_message` tools (ZeroClaw) signals a shift toward asynchronous, event-driven AI automation.
2.  **Fragmentation of Monolithic LLMs:** There is a massive industry trend toward composable model architectures. Communities across multiple projects are demanding "mixture of experts" routing at the application level—e.g., using free models for background reasoning, heavy models for tool execution, and dedicated vision models strictly for image parsing to control costs.
3.  **Silent Failures are Unacceptable:** A strong recurring theme across *NanoClaw*, *LobsterAI*, and *CoPaw* is user frustration with silent UI hanging, duplicate messages, and dropped tool results. The next phase of agent development requires hardening the "internal monologue" and tool-execution observability to prevent silent context loss.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-08

## 1. Today's Overview
NanoBot is experiencing a highly active and collaborative development phase, demonstrating strong project health with a focus on stability and security. Over the past 24 hours, the project saw a significant spike in pull request submissions (19 total), heavily concentrated on hardening session management, sandbox environments, and expanding test coverage. While maintainers efficiently merged several bug fixes and feature PRs, the community remains highly engaged in reporting edge-case bugs and proposing quality-of-life enhancements. Overall, the current trajectory indicates a maturing codebase prioritizing robust context handling and safe agent execution environments.

## 2. Releases
There were **0 new releases** recorded in the last 24 hours. The current development activity appears to be targeted at an upcoming patch or minor version update, likely focused on stability and security hardening.

## 3. Project Progress
Several important PRs were merged or closed today, directly advancing the project's stability and user experience:
*   **UI Enhancements:** [PR #4240](https://github.com/HKUDS/nanobot/pull/4240) was merged, introducing the ability to render ANSI-colored output in WebUI code blocks, greatly improving the readability of terminal outputs.
*   **Context/Reasoning Fixes:** [PR #4227](https://github.com/HKUDS/nanobot/pull/4227) was merged, fixing a bug where custom providers would incorrectly drop `reasoning_content` if it was an empty string.
*   **Channel Fixes:** [PR #2885](https://github.com/HKUDS/nanobot/pull/2885) was closed/merged, bringing necessary fixes to the Feishu channel regarding access token initialization and mention resolution. 
*   **Messaging Fixes:** [PR #2663](https://github.com/HKUDS/nanobot/pull/2663) was closed/merged, successfully resolving WhatsApp LID group mention detection issues.

## 4. Community Hot Topics
The most actively discussed items revolve around session state management and UI transparency:
*   **Context Management & Message History:** [Issue #4203](https://github.com/HKUDS/nanobot/issues/4203) generated notable discussion (2 comments). It highlights a critical flaw where isolated tool results cause the entire message history to be dropped. This has spawned several community attempts at a fix, including [PR #4229](https://github.com/HKUDS/nanobot/pull/4229) and [PR #4219](https://github.com/HKUDS/nanobot/pull/4219).
*   **Feishu Integration:** [Issue #2256](https://github.com/HKUDS/nanobot/issues/2256) continues to see traction (4 comments), indicating a strong enterprise user need for proper bot threading/reply mechanisms in Feishu topic groups.
*   **Voice Capabilities:** [PR #4232](https://github.com/HKUDS/nanobot/pull/4232) proposes making transcription a shared top-level capability across WebUI and desktop interfaces, moving away from channel-specific limitations.

## 5. Bugs & Stability
Today's bug reports highlight edge cases in context handling and execution environments. Fortunately, fix PRs exist for all major issues reported:
1.  **[Critical] Session History Wiped by Orphaned Tool Results:** [Issue #4203](https://github.com/HKUDS/nanobot/issues/4203) reports that `find_legal_message_start` drops all messages if an orphaned tool result is present. *Fix Status: PRs submitted ([PR #4229](https://github.com/HKODS/nanobot/pull/4229), [PR #4219](https://github.com/HKUDS/nanobot/pull/4219)).*
2.  **[High] Bwrap Sandbox Breaks Tool Writes:** [Issue #4237](https://github.com/HKUDS/nanobot/issues/4237) notes that the `$HOME` variable isn't reset in `bwrap`, causing tool file writes to fail. *Fix Status: Addressed in [PR #4239](https://github.com/HKUDS/nanobot/pull/4239).*
3.  **[High] Bwrap Sandbox Fails entirely on Ubuntu 24.04:** [Issue #4236](https://github.com/HKUDS/nanobot/issues/4236) reports permission/namespace failures on modern Linux kernels. *Fix Status: No PR yet.*
4.  **[Medium] API Duplicates User Turns:** [Issue #4234](https://github.com/HKUDS/nanobot/pull/4234) points out that the OpenAI-compatible API retries empty responses, duplicating the user's message in history. *Fix Status: PR submitted.*
5.  **[Medium] MCP Startup Hangs Indefinitely:** [Issue #4230](https://github.com/HKUDS/nanobot/pull/4230) highlights that `streamableHttp` MCP connections lack an `httpx` timeout, causing infinite hangs. *Fix Status: PR submitted.*

## 6. Feature Requests & Roadmap Signals
Community submissions show a clear demand for better multi-agent orchestration and system observability:
*   **Sub-agent Model Overriding:** [Issue #4231](https://github.com/HKUDS/nanobot/issues/4231) requests adding a `model` parameter to the `spawn` tool. This would allow users to route sub-tasks to cheaper or more capable models dynamically.
*   **Version Visibility:** [Issue #4233](https://github.com/HKUDS/nanobot/issues/4233) requests displaying the current NanoBot version and available updates directly in the WebUI. This is already actively being implemented in [PR #4235](https://github.com/HKUDS/nanobot/pull/4235), making it a highly likely candidate for the next release.
*   **Advanced Context Governance:** [PR #4238](https://github.com/HKUDS/nanobot/pull/4238) proposes gating "microcompaction" based on actual context pressure rather than fixed tool-result counts, signaling a shift toward more intelligent context window management.

## 7. User Feedback Summary
Users are deploying NanoBot in complex, multi-channel environments (Feishu, WhatsApp) and utilizing advanced features like custom model providers (DeepSeek, Kimi) and sandboxes. 
*   **Pain Points:** Users experience friction with "silent failures"—such as the API duplicating turns silently, tools failing to write silently due to sandbox environment variables, or context history disappearing without a trace. 
*   **Use Cases:** Heavy reliance on programmatic API usage via OpenAI-compatible endpoints and strict security requirements (using `bwrap` sandboxing) are prominent among power users. There is a strong desire to keep outputs clean and readable, as evidenced by the community's PR to render ANSI colors.

## 8. Backlog Watch
*   **Sandbox Compatibility:** The `bwrap` failure on Ubuntu 24.04 ([Issue #4236](https://github.com/HKUDS/nanobot/issues/4236)) represents a significant blocker for users on modern Linux distributions. Maintainers should prioritize validating or patching the namespace restrictions.
*   **Tool Call Validation:** [PR #4190](https://github.com/HKUDS/nanobot/pull/4190) (open since 2026-06-04) aims to improve strictness for tool-call validations. Given the recent context-dropping bugs caused by malformed/orphaned tool messages, this PR is highly relevant and needs maintainer review to prevent future session state corruption.
*   **SSRF Protection for MCP:** [PR #4123](https://github.com/HKUDS/nanobot/pull/4123) remains open and is a crucial security enhancement needed to reject unsafe HTTP URLs before probing MCP servers.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-08

## 1. Today's Overview
Hermes Agent is experiencing a **very high volume of community activity**, evidenced by 50 active issues and 50 pull requests updated in the last 24 hours. The project is clearly in a phase of rapid iteration, likely following a recent major release or architectural shift (such as the OAuth refactor mentioned in recent commits). However, the open-source maintainers appear to be slightly overwhelmed by the influx, as 94% of the updated issues remain open, and there are 41 open pull requests awaiting review. With zero new releases published today, the current focus seems to be heavily skewed toward triaging new bugs, addressing platform-specific regressions, and integrating community-driven feature expansions.

## 2. Releases
No new releases were published today.

## 3. Project Progress
Even without a formal release, the maintainer and community teams merged 9 Pull Requests, indicating active backend stabilization and feature grooming:
*   **Auxiliary Model Cost Reduction:** Closed [#36900](https://github.com/NousResearch/hermes-agent/pull/36900) changed the default model for auxiliary tasks (vision, compression) from paid Gemini Flash to `openrouter/free`, significantly lowering the cost of running the agent.
*   **UX and Messaging Improvements:** Merged [#36940](https://github.com/NousResearch/hermes-agent/pull/36940) to clarify the "no auxiliary LLM provider" warning messages. 
*   **Skill Management:** Closed [#36951](https://github.com/NousResearch/hermes-agent/pull/36951) introducing per-skill model overrides, and merged [#36924](https://github.com/NousResearch/hermes-agent/pull/36924) to protect specific skills from being mutated by the agent via a `.protected` dotfile.
*   **Event Loop Fixes:** Merged [#41547](https://github.com/NousResearch/hermes-agent/pull/41547) fixed a critical Discord integration bug where the `/model` command blocked the event loop.

## 4. Community Hot Topics
*   **Native Provider Support & Cost Control:** By far the most active discussion is happening in Issue [#12639](https://github.com/NousResearch/hermes-agent/issues/12639) (7 reactions, 8 comments). Users are highly frustrated by OpenRouter's `HTTP 402` errors and rate limits when utilizing Google/Vertex AI models. The underlying need is a native, direct integration with Google Vertex AI to bypass third-party routing markups.
*   **Desktop UI Flickering:** Users are actively discussing persistent visual bugs in the new Desktop app. Issue [#37997](https://github.com/NousResearch/hermes-agent/issues/37997) details scroll-jumping behavior, and Issue [#38015](https://github.com/NousResearch/hermes-agent/issues/38015) reports extreme flickering on Linux Wayland environments.
*   **Ecosystem Expansion:** Issue [#10356](https://github.com/NousResearch/hermes-agent/issues/10356) proposes a deep integration into the Feishu (Lark) workspace ecosystem, indicating strong enterprise user demand for Hermes to act as a cross-platform office assistant.

## 5. Bugs & Stability
Several high-priority (P1/P2) bugs and regressions were reported today, primarily affecting the Desktop app and Gateway:
*   **Docker Startup Failure (P1):** Issue [#36208](https://github.com/NousResearch/hermes-agent/issues/36208) reports that the official Docker container fails to start entirely from version 2026.5.28. 
*   **Profile Misconfiguration in Gateway (P1):** Issue [#41355](https://github.com/NousResearch/hermes-agent/issues/41355) notes that the `--profile` flag is ignored when running the gateway, loading default configs instead. *Fix in progress: PR [#41474](https://github.com/NousResearch/hermes-agent/pull/41474).*
*   **Shell Hook Security Bypass (P2):** Issue [#41457](https://github.com/NousResearch/hermes-agent/issues/41457) highlights that `pre_tool_call` security hooks are silently ignored in the Desktop and ACP adapters. *Fix submitted: PR [#41555](https://github.com/NousResearch/hermes-agent/pull/41555).*
*   **macOS Regression (P2):** Issue [#41518](https://github.com/NousResearch/hermes-agent/issues/41518) notes a recent OAuth refactor accidentally removed the auto-placement of the app in `/Applications` and Dock pinning.
*   **Kanban Worker Path Resolution (P2):** Issue [#41312](https://github.com/NousResearch/hermes-agent/issues/41312) reveals Kanban workers are resolving relative paths incorrectly, writing files to the gateway home instead of the assigned workspace.

## 6. Feature Requests & Roadmap Signals
The community is heavily pushing for broader platform support and smarter agent loops. 
*   **Smarter Tool Recovery:** Issue [#41314](https://github.com/NousResearch/hermes-agent/issues/41314) proposes classifying tool errors (model vs. environment vs. input) to prevent dumb retry loops. 
*   **Stall Detection:** Directly related to tool loops, Issue [#41313](https://github.com/NousResearch/hermes-agent/issues/41313) requests a stall detector to stop the agent when $N$ consecutive calls yield no progress. This signals that users are running into infinite loop scenarios during complex tasks.
*   **Custom Models via Desktop UI:** PR [#41560](https://github.com/NousResearch/hermes-agent/pull/41560) implements the ability to add custom model IDs directly from the Desktop UI, addressing the heavy demand for routing flexibility.
*   **Self-Hosted Memory:** Issue [#31135](https://github.com/NousResearch/hermes-agent/issues/31135) advocates for self-hosted Mem0 integration, signaling privacy-conscious users want local memory control.

## 7. User Feedback Summary
Users are thrilled with the expanding capabilities (Kanban dispatchers, local models, skill protection) but are experiencing friction with the **Desktop app stability** and **multi-provider routing**. Developers working on macOS are encountering build friction due to code-signing ambiguities ([#41499](https://github.com/NousResearch/hermes-agent/issues/41499)). The overwhelming sentiment is that the CLI/Agent backend is powerful and maturing, but the Electron-based Desktop GUI and platform-specific adapters (WhatsApp, Telegram, Discord) need stability passes. 

## 8. Backlog Watch
The following important items require immediate maintainer attention:
*   **Native Google/Vertex AI Provider ([#12639](https://github.com/NousResearch/hermes-agent/issues/12639)):** Open since April 2026, this has high community demand (7 thumbs up) but no official assignee or linked PR yet.
*   **Docker Startup Failure ([#36208](https://github.com/NousResearch/hermes-agent/issues/36208)):** A P1 blocker for containerized deployments that has been open for a week without a patch.
*   **Kanban Worker Path Resolution ([#41312](https://github.com/NousResearch/hermes-agent/issues/41312)):** Needs review to prevent silent data loss or misplacement when using Kanban automation.
*   **Cached but Unexposed Telegram Videos ([#41366](https://github.com/NousResearch/hermes-agent/issues/41366)):** An architectural oversight where multimodal inputs are downloaded but never passed to the AI model, severely limiting Telegram bot capabilities.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-06-08

## 1. Today's Overview
PicoClaw demonstrates a highly active and robust development cycle today, characterized by a rapid release cadence and a strong focus on bug squashing. The project merged 12 Pull Requests and closed 17 Issues within the last 24 hours, indicating responsive and diligent maintainer engagement. A significant portion of today's codebase improvements consists of defensive programming patches and bug fixes targeting core infrastructure, type assertions, and I/O operations. Community engagement remains healthy, with contributors actively addressing systemic edge cases and expanding platform capabilities.

## 2. Releases
- **nightly: v0.2.9-nightly.20260607.7d2b0c2a**
  - **Overview**: Automated nightly build pushed to the `main` branch. 
  - **Stability Warning**: Marked as potentially unstable. Use with caution in production environments.
  - **Changelog**: [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. Project Progress
Today's merged PRs reveal a concentrated effort to harden the agent's runtime stability, fix configuration errors, and expand integration support:
*   **Configuration & Provider Fixes**: Fixed a critical default configuration issue where Anthropic's API rejected the seeded model ID (`claude-sonnet-4.6` vs. required `claude-sonnet-4-6`) ([PR #3036](https://github.com/sipeed/picoclaw/pull/3036)). Additionally, a native Kagi web search provider was added ([PR #3037](https://github.com/sipeed/picoclaw/pull/3037)).
*   **Runtime & I/O Hardening**: Multiple PRs were merged to fix unchecked `type assertions` (preventing potential runtime panics) and unhandled `Close()` errors during file/media downloads, preventing silent data truncation on disk I/O failures ([PR #3016](https://github.com/sipeed/picoclaw/pull/3016), [PR #3033](https://github.com/sipeed/picoclaw/pull/3033), [PR #3034](https://github.com/sipeed/picoclaw/pull/3034), [PR #3035](https://github.com/sipeed/picoclaw/pull/3035)).
*   **Skill Filtering**: Merged a feature to skip agent skills if their required binaries are missing from the system `$PATH`, preventing hallucinated tool usage by the LLM ([PR #2936](https://github.com/sipeed/picoclaw/pull/2936)).
*   **Documentation**: An official guide for running PicoClaw on Android via Termux was finally merged, resolving a long-standing community request ([PR #2902](https://github.com/sipeed/picoclaw/pull/2902)).

## 4. Community Hot Topics
*   **OpenAI Codex OAuth Empty Response** ([Issue #2674](https://github.com/sipeed/picoclaw/issues/2674)): Boasting 4 upvotes and 8 comments, this is a highly observed issue. Users are experiencing empty assistant responses when using the ChatGPT backend via Codex OAuth during specific streaming events (`response.output_item.done`). This highlights a growing user need for seamless, reverse-proxy/OpenAI-compatible API integrations.
*   **Android / Termux Deployment** ([Issue #286](https://github.com/sipeed/picoclaw/issues/286)): With 8 comments and 2 upvotes, this issue garnered significant attention before being closed today. The underlying need is clear: users want to run lightweight local AI agents on ubiquitous ARM64 mobile devices.
*   **Matrix Channel `allow_from` Parsing** ([Issue #3044](https://github.com/sipeed/picoclaw/issues/3044)): Reports of standard Matrix IDs (`@user:domain`) silently failing access controls. It reveals active enterprise/privacy-conscious usage of PicoClaw behind decentralized communication protocols. 

## 5. Bugs & Stability
*   **Anthropic Default Model HTTP 404** ([Issue #2941](https://github.com/sipeed/picoclaw/issues/2941)): Fresh installs defaulted to an invalid model ID, causing immediate API 404 errors for Anthropic users. **Status**: Fixed and merged in [PR #3036](https://github.com/sipeed/picoclaw/pull/3036).
*   **Matrix `allow_from` Access Control Bypass** ([Issue #3044](https://github.com/sipeed/picoclaw/issues/3044)): The identity parser splits Matrix IDs incorrectly on the colon, blocking authorized users. **Status**: Fix actively proposed in [PR #3045](https://github.com/sipeed/picoclaw/pull/3045).
*   **MCP Server `add` Flag Misinterpretation** ([Issue #3041](https://github.com/sipeed/picoclaw/issues/3041)): Global flags (like `--no-color`) leak into positional arguments due to `DisableFlagParsing`, silently breaking HTTP/SSE MCP integrations. **Status**: Fix proposed in [PR #3048](https://github.com/sipeed/picoclaw/pull/3048).
*   **Web UI JSONL History Gaps** ([Issue #3047](https://github.com/sipeed/picoclaw/pull/3047)): Archived messages are skipped in the session detail API endpoint. **Status**: Fix proposed in [PR #3047](https://github.com/sipeed/picoclaw/pull/3047).
*   **Multiple Runtime Panic Vectors**: Several potential crashes caused by unhandled `type assertions` and `os.Getwd()` errors were systematically patched today, notably in the agent startup and LINE channel modules.

## 6. Feature Requests & Roadmap Signals
*   **Omniroute Provider Support** ([Issue #2978](https://github.com/sipeed/picoclaw/issues/2978)): Users are requesting multi-model routing gateways (like Omniroute). The team will likely need to standardize how generic OpenAI-compatible endpoints are defined in the config to avoid custom code for every gateway.
*   **Telegram Reply-as-Mention** ([PR #2975](https://github.com/sipeed/picoclaw/pull/2975)): An open PR allowing bot replies in groups just by replying to a previous bot message (rather than explicitly @mentioning). This is a strong candidate for the next release as it vastly improves UX in group chats.
*   **ClawTrading / High-Frequency Exchange Agents**: A cluster of issues ([#3024](https://github.com/sipeed/picoclaw/issues/3024) to [#3032](https://github.com/sipeed/picoclaw/issues/3024)) by a contributor outlines building lock-free ring buffers and WebSocket connectors for Binance in Go. This signals a highly specialized, exciting roadmap extension into autonomous DeFi/Crypto trading agents.

## 7. User Feedback Summary
*   **Deployment Friction**: Users express frustration regarding version upgrades and source updates, with some unsure how to cleanly remove old versions ([Issue #2834](https://github.com/sipeed/picoclaw/issues/2834)). 
*   **Model Provider Configuration**: Several issues (Omniroute, Anthropic default ID, Codex OAuth) indicate that while users love the multi-provider capabilities, the configuration UX for custom APIs, key reuse, and testing connections is currently clunky and prone to silent failures.
*   **Overall Satisfaction**: The project maintains strong community buy-in. The ability to run it on cheap hardware ($10 Raspberry Pi/Android devices) is highly valued, as evidenced by the excitement around Termux support and lightweight skill filtering.

## 8. Backlog Watch
*   **[PR #2904](https://github.com/sipeed/picoclaw/pull/2904) - Agent Loop Reload and Panic Cleanup**: This critical architectural PR aims to fix goroutine leaks and panic handling during agent config reloads. Marked as stale, it needs a maintainer review as it deeply impacts long-running agent stability.
*   **[PR #2906](https://github.com/sipeed/picoclaw/pull/2906) - Bus Backpressure and Health Visibility**: Another stale PR addressing bounded waiting for saturated message queues. Given the recent work on I/O and runtime stability, reviewing and merging this would complete the current reliability arc.
*   **[Issue #2674](https://github.com/sipeed/picoclaw/issues/2674) - OpenAI Codex Streaming Bug**: Closed today, but given the popularity of OpenAI endpoints, if the underlying streaming parse fix hasn't been fully addressed in the nightly, it should be prioritized for the main branch.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-08

## 1. Today's Overview
NanoClaw is currently experiencing a highly active development phase, characterized by a robust 9 pull requests updated in the past 24 hours alongside 3 active issues. The community and contributors are heavily focused on hardening the core infrastructure, specifically targeting installation stability, permission gating, and container lifecycle management. While no new official releases were cut today, the high ratio of open PRs to recently closed ones suggests the maintainers are evaluating a substantial batch of upstream changes. Overall project health appears strong, with contributors proactively identifying edge cases in setup flows, agent configurations, and account rotation logic.

## 2. Releases
No new releases were published today. 

## 3. Project Progress
Three pull requests were merged or closed today, indicating targeted progress in operational stability and developer experience:
*   **Infrastructure Safeguards ([PR #2707](https://github.com/qwibitai/nanoclaw/pull/2707)):** A "startup tripwire" was merged to prevent instances from running if a raw `git pull` bypassed required database migrations. This forces sanctioned update paths and provides self-healing error messages.
*   **Account Rotation Calibration ([PR #2706](https://github.com/qwibitai/nanoclaw/pull/2706)):** Merged fixes to account rotation logic, ensuring models like Codex/Gemini do not trigger Anthropic auto-rotation, and implementing a SIGTERM/SIGKILL fallback to prevent zombie agent processes.
*   **Documentation Improvements ([PR #2710](https://github.com/qwibitai/nanoclaw/pull/2710)):** A closed PR (likely merged or superseded) added documentation for Ollama prompt caching, filtering out cache-busting hashes to improve local model performance.

## 4. Community Hot Topics
The most actively discussed issue is an age-old configuration bug regarding global agent instructions:
*   **Global Configuration Deletion ([Issue #2312](https://github.com/qwibitai/nanoclaw/issues/2312)):** Open since May, this issue has accumulated 2 comments. It highlights that `groups/global/CLAUDE.md` is unconditionally deleted on startup by `migrateGroupsToClaudeLocal()`, resulting in a permanently dirty git working tree. 
    *   *Underlying Need:* Developers and self-hosters require stable, version-controlled global prompts that persist across container restarts without causing repository drift.
*   **Telegram Integration ([PR #1626](https://github.com/qwibitai/nanoclaw/pull/1626)):** A long-standing open PR aiming to add Telegram topic isolation and auto-registration. It saw renewed activity today, signaling continued community demand for diverse messaging platform integrations.

## 5. Bugs & Stability
Several notable bugs were reported today, primarily affecting first-time setups and system security boundaries:
1.  **[CRITICAL] Permission Bypass in MCP Tool ([Issue #2711](https://github.com/qwibitai/nanoclaw/issues/2711)):** The `create_agent` MCP tool is documented as admin-only but lacks actual host-level role verification. Any container can currently create new agent groups.
    *   *Fix Status:* No fix PR submitted yet.
2.  **[HIGH] Broken "Recommended" Setup Path ([Issue #2703](https://github.com/qwibitai/nanoclaw/issues/2703)):** A fresh install following the recommended path leaves `cli/local` unwired. The suggested `pnpm run chat hi` command hangs for 120 seconds and times out without explanation.
    *   *Fix Status:* Partially addressed by infrastructure testing in [PR #2704](https://github.com/qwibitai/nanoclaw/pull/2704) and orphan reaping in [PR #2708](https://github.com/qwibitai/nanoclaw/pull/2708).
3.  **[MEDIUM] Duplicate Text in Poll Loop ([PR #2531](https://github.com/qwibitai/nanoclaw/pull/2531)):** An open PR fixing an issue where `send_message` firing mid-turn results in duplicate text outputs.
4.  **[MEDIUM] Credential Proxy Fallback Failure ([PR #2705](https://github.com/qwibitai/nanoclaw/pull/2705)):** A bug where the `use-native-credential-proxy` skill fails to bypass the OneCLI gateway on real installations (launchd/systemd) because it only reads `process.env` rather than the actual system environment.

## 6. Feature Requests & Roadmap Signals
Recent unmerged PRs provide clear signals regarding the project's near-term roadmap:
*   **Database-Backed Container Configs ([PR #2709](https://github.com/qwibitai/nanoclaw/pull/2709)):** Fulfilling maintainer-requested issue #1867, this PR introduces DB-backed JSON columns for `env` and `blocked_hosts`. This suggests the next version will feature highly dynamic, remotely updatable container environment variables.
*   **Container Lifecycle Management ([PR #2708](https://github.com/qwibitai/nanoclaw/pull/2708)):** Feature advancement to automatically reap orphaned agent containers when the service stops, improving local resource management.

## 7. User Feedback Summary
User feedback over the last 24 hours highlights significant friction during the initial setup and onboarding phase. Users express frustration that the default "recommended path" advertises commands that silently hang and time out ([Issue #2703](https://github.com/qwibitai/nanoclaw/issues/2703)), indicating a gap between CI passing and real-world bare-metal usability. Self-hosters utilizing advanced configurations (like native credential proxying or Ollama integration) are running into edge cases where environment variables are not properly passed or parsed. However, the proactive submission of comprehensive unit tests and documentation fixes by the community indicates a highly engaged, developer-leaning user base that is actively trying to lower the barrier to entry for others.

## 8. Backlog Watch
The following items require immediate attention from project maintainers:
*   **[Issue #2312](https://github.com/qwibitai/nanoclaw/issues/2312):** Over a month old with no maintainer confirmation. The persistent deletion of `groups/global/CLAUDE.md` is a nuisance for anyone pulling the repo.
*   **[PR #2531](https://github.com/qwibitai/nanoclaw/pull/2531):** Open since mid-May. It addresses a user-facing UI/UX bug (duplicate text during mid-turn message firing) but has yet to be reviewed or merged.
*   **[PR #1626](https://github.com/qwibitai/nanoclaw/pull/1626):** Open for two months, this Telegram integration PR is a major feature contribution that seems stalled in the review process.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-08

## 1. Today's Overview
The IronClaw project is currently experiencing **very high development activity**, particularly focused on the sweeping "Reborn" architectural overhaul. With 50 issues updated (40 open, 10 closed) and 37 pull requests updated (22 open, 15 merged/closed) in the last 24 hours, the core team is aggressively pushing new code. The development vector is clearly oriented toward building out the WebUI v2, enhancing security boundaries (hooks, sandbox, audit sinks), and expanding multi-channel support (e.g., Slack, Telegram). The high volume of open issues and active PRs indicates a project in a heavy iterative building phase rather than a stabilization phase.

## 2. Releases
No new releases were published today. 

However, it is worth noting that the long-running, API-breaking release PR [#3708 (chore: release)](https://github.com/nearai/ironclaw/pull/3708) remains open and active. This PR tracks upcoming major bumps for core crates, including `ironclaw` (0.24.0 -> 0.29.1), `ironclaw_common`, and `ironclaw_skills`. The team is likely finalizing the Reborn substrate before cutting the official release.

## 3. Project Progress
Today's merged and closed PRs show significant progress in user-facing features, channel integrations, and CI/CD hardening:
*   **WebChat v2 Thread Management:** [PR #4516](https://github.com/nearai/ironclaw/pull/4516) was merged, introducing thread deletion for WebChat v2 scoped securely to the authenticated caller.
*   **Slack Integration & Durable Stores:** [PR #4463](https://github.com/nearai/ironclaw/pull/4463) was merged, wiring Slack's host-beta conversation and idempotency state to filesystem-backed durable stores, ensuring reliable message delivery.
*   **Model Tooling Enhancements:** [PR #4530](https://github.com/nearai/ironclaw/pull/4530) was closed/merged, introducing structured `ModelVisibleToolObservation` to improve how the LLM processes tool outputs safely.
*   **Outbound Preferences:** [PR #4511](https://github.com/nearai/ironclaw/pull/4511) merged, adding Phase 1 outbound delivery preference contracts to the Reborn product workflow.
*   **CI Improvements:** [PR #3298](https://github.com/nearai/ironclaw/pull/3298) (Hermetic local gate for Rust tests) and [PR #3565](https://github.com/nearai/ironclaw/pull/3565) (Extended E2E timeouts) were closed, indicating a push toward more robust testing pipelines.

## 4. Community Hot Topics
The most actively discussed issues center on macro-architecture, configuration, and the new product workflow:
*   **[Issue #3280](https://github.com/nearai/ironclaw/issues/3280) [7 comments]:** Designing the `ProductWorkflow` and `InboundTurnService` facade. This is the core bottleneck connecting product adapters to the host layer in the Reborn architecture.
*   **[Issue #3036](https://github.com/nearai/ironclaw/issues/3036) [5 comments, 1 👍]:** Configuration-as-Code (CaC) for Reborn. Users and operators currently struggle with a mix of `.env`, settings JSON, and CLI flags. The community is actively discussing tenant blueprints to standardize deployments.
*   **[Issue #3044](https://github.com/nearai/ironclaw/issues/3044) [3 comments]:** Local developer runtime profiles. Contributors are demanding a simpler `ironclaw dev` experience that doesn't require manually wiring complex grants and network policies just to test locally.

*Underlying Needs:* The community and core contributors are highly focused on developer experience (DX) and reducing the operational complexity of the new Reborn subsystem.

## 5. Bugs & Stability
There are no explicit user-reported crash bugs in today's digest, but the team is actively tracking and fixing several **high-risk security and stability architectural gaps**:
*   **Security Boundary Auditing:** [Issue #3959](https://github.com/nearai/ironclaw/issues/3959) tracks the adoption of the `SecurityAuditSink` at remaining boundary call sites. This is critical to ensure LLM data isn't accidentally leaked or deleted.
*   **Sandbox Escapes:** [Issue #4042](https://github.com/nearai/ironclaw/issues/4042) is a high-risk enhancement tracking the completion of tenant sandbox process capabilities, as the current Docker execution environment is too limited for safe workspace indexing. 
*   **FS Hardening:** [Issue #3956](https://github.com/nearai/ironclaw/issues/3956) addresses a TOCTOU (Time-of-check to time-of-use) hardening follow-up to prevent mount-point traversal across device boundaries.

## 6. Feature Requests & Roadmap Signals
Based on open issues and active PRs, the immediate roadmap is heavily focused on the **WebUI Beta** and **Channel Expansion**:
*   **WebUI v2 Features:** [PR #4519](https://github.com/nearai/ironclaw/pull/4519) introduces a session capabilities endpoint. [PR #4527](https://github.com/nearai/ironclaw/pull/4527) adds user-scoped skills settings UI. [PR #4532](https://github.com/nearai/ironclaw/pull/4532) introduces a Slack allowed-channel picker for admins.
*   **Extension Capabilities:** [Issue #3829](https://github.com/nearai/ironclaw/issues/3829) (Closed/merged recently) laid the groundwork for native Google Calendar and Gmail extension-v2 capabilities in Reborn.
*   **Predictions for Next Release:** The next version will likely finalize the Slack host-beta integration, introduce the Admin/Settings UI for managing skills and Slack channels, and roll out the much-anticipated local developer runtime profiles.

## 7. User Feedback Summary
User feedback is heavily skewed toward operational friction and UI refinement:
*   **Pain Points:** Setting up Reborn locally is still too difficult, requiring deep knowledge of capability mounts and grants (addressed in [#3044](https://github.com/nearai/ironclaw/issues/3044)). Configuration sprawl is a major complaint among operators ([#3036](https://github.com/nearai/ironclaw/issues/3036)).
*   **Use Cases:** Strong push toward using IronClaw as an agent integrated with communication tools (Slack, Telegram, WebChat) and productivity tools (Google Workspace).
*   **Satisfaction:** Generally positive, evidenced by steady contributions and the closing of major blockers, though the sheer volume of "Reborn" labels indicates the migration is causing temporary cognitive overhead for contributors.

## 8. Backlog Watch
Several high-priority and security-critical issues require ongoing maintainer attention:
*   **Production Wiring:** [Issue #3333](https://github.com/nearai/ironclaw/issues/3333) (Production wiring and missing crates). The Reborn stack still has fake/in-memory seams that need production-grade replacements before launch.
*   **Security Safeguards:** [Issue #3032](https://github.com/nearai/ironclaw/issues/3032) (No-exposure safeguards) and [Issue #3609](https://github.com/nearai/ironclaw/issues/3609) (Re-attenuate approval leases) are marked as P0 and must be aggressively tracked to prevent auth bypasses in the WebUI beta.
*   **Stale Dependency Bots:** [PR #4503](https://github.com/nearai/ironclaw/pull/4503) (38 dependency updates) and [PR #4002](https://github.com/nearai/ironclaw/pull/4002) (16 GitHub Actions updates) are open from Dependabot and require core maintainer review to prevent dependency drift.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the project digest for LobsterAI on 2026-06-08:

### 1. Today's Overview
LobsterAI is currently experiencing a period of low development activity, characterized by a complete standstill in code merges and a lack of recent software releases. The open-source community remains active in highlighting areas for improvement, generating 15 active issues in the past 24 hours (though mostly historical updates). The majority of today's issue activity consists of stale bot updates pinging maintainers on unresolved bugs and feature requests from April 2026. Additionally, a newly created issue indicates that users are actively testing the application and noticing potential performance inefficiencies, signaling a need for the core team to resume maintenance duties.

### 2. Releases
No new releases were recorded today. There is no updated version, migration notes, or breaking changes to report.

### 3. Project Progress
There has been no tangible project progress today. Zero pull requests were opened, closed, or merged within the last 24 hours. The repository's codebase remains unchanged, and the maintainers have not merged any community or internal contributions recently. 

### 4. Community Hot Topics
The most active discussions in the past 24 hours revolve around application stability, resource consumption, and UI/UX enhancements.
*   **Potential Token Waste ([Issue #2121](https://github.com/netease-youdao/LobsterAI/issues/2121))**: A fresh issue created today highlights a severe concern where the agent outputs repeated text. The user is worried about unnecessary token consumption and financial waste, pointing to a potential issue with the underlying LLM integration or prompt handling. 
*   **CI/CD and Contribution Friction ([Issue #1518](https://github.com/netease-youdao/LobsterAI/issues/1518))**: A developer noted that PR checks are consistently failing due to a `labeler.yml` workflow permissions error and linting configuration. This infrastructure issue could be blocking external contributors from successfully submitting PRs.

### 5. Bugs & Stability
Several stability and logic bugs were flagged (and marked stale) today, highlighting persistent friction in the app's core features. No corresponding fix PRs currently exist.
*   **High Severity: OAuth Token Loss ([Issue #1516](https://github.com/netease-youdao/LobsterAI/issues/1516))**: If a user closes the Settings panel while GitHub Copilot OAuth is polling, the authentication silently succeeds in the background but the token is lost instead of being saved.
*   **High Severity: IM Notification Failure ([Issue #1506](https://github.com/netease-youdao/LobsterAI/issues/1506))**: Scheduled tasks allow users to save IM notifications without selecting a target chat. This causes the notification to silently fail at runtime with no error feedback.
*   **Medium Severity: Skills/State Desync ([Issue #1500](https://github.com/netease-youdao/LobsterAI/issues/1500), [Issue #1502](https://github.com/netease-youdao/LobsterAI/issues/1502))**: Disabling a skill does not remove it from the active Redux state (`activeSkillIds`), meaning disabled skills continue to be injected into the system prompt. 
*   **Medium Severity: UI/Configuration Gaps ([Issue #1504](https://github.com/netease-youdao/LobsterAI/issues/1504), [Issue #1512](https://github.com/netease-youdao/LobsterAI/issues/1512))**: Missing required field validation for the POPO AES Key allows saving invalid configurations. Additionally, QQ Bot's group whitelist UI is completely missing an input field, rendering the feature unusable.

### 6. Feature Requests & Roadmap Signals
Power users are clearly pushing LobsterAI toward becoming a more robust productivity and data-management tool, moving beyond simple linear chat. Predicted features for future updates based on recent requests include:
*   **Advanced Session Organization**: Users are desperately requesting better ways to manage long chat histories. Proposed solutions include a color-coding system for visual sorting ([Issue #1525](https://github.com/netease-youdao/LobsterAI/issues/1525)) and a comprehensive tagging/labeling system for multi-dimensional filtering ([Issue #1541](https://github.com/netease-youdao/LobsterAI/issues/1541)).
*   **Data Portability & Bookmarks**: Users want the ability to export multiple sessions simultaneously ([Issue #1528](https://github.com/netease-youdao/LobsterAI/issues/1528)) and a bookmarking feature to highlight and easily retrieve crucial AI responses within long contexts ([Issue #1537](https://github.com/netease-youdao/LobsterAI/issues/1537)).
*   **Local Usage Analytics**: A request to add a local SQLite-driven dashboard in the settings menu to track local conversation metrics and usage patterns ([Issue #1532](https://github.com/netease-youdao/LobsterAI/issues/1532)).

### 7. User Feedback Summary
User feedback indicates a strong appreciation for the application's extensibility but reveals significant frustration with its current polish. Users rely heavily on the application for complex tasks (like custom skill generation) but are encountering roadblocks like hanging processes and a lack of "thinking/intermediate" UI states ([Issue #1509](https://github.com/netease-youdao/LobsterAI/issues/1509)). The UX inconsistency—such as irregular formatting in terms of service pages ([Issue #1513](https://github.com/netease-youdao/LobsterAI/issues/1513)) and missing UI elements compared to other platforms—suggests that the application was rapidly developed across different modules and is in dire need of a unified QA and standardization pass.

### 8. Backlog Watch
There is a critical backlog of unresolved issues that requires immediate maintainer attention. 
*   **Stale Bot Fatigue**: A staggering 14 issues updated today were automatically marked as `[stale]` by GitHub actions because they have sat unanswered since April 2026. 
*   **Urgent Unanswered Bugs**: Critical issues like the broken GitHub Copilot OAuth flow ([Issue #1516](https://github.com/netease-youdao/LobsterAI/issues/1516)), silent IM notification failures ([Issue #1506](https://github.com/netease-youdao/LobsterAI/issues/1506)), and the continuous skills generation blocking bug ([Issue #1509](https://github.com/netease-youdao/LobsterAI/issues/1509)) need triage. 
*   **CI Pipeline Blocked**: Maintainers must address the CI permission errors outlined in ([Issue #1518](https://github.com/netease-youdao/LobsterAI/issues/1518)) to ensure that future bug fixes from the community can actually be tested and merged.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-06-08

## 1. Today's Overview
Moltis is currently maintaining a steady, passive development cadence. Over the past 24 hours, project activity has been entirely concentrated on open issues and pull requests, with no new code merged into the main branch and no new releases published. Three active pull requests were updated, all authored by core contributor `s-salamatov`, indicating ongoing background work in areas of Telegram integration, memory persistence, and user permissions. The only open issue updated recently highlights a community need for improved mobile usability. Overall, project health appears stable but quiet, functioning more as an incremental iteration phase rather than a feature-heavy sprint. 

## 2. Releases
No new releases were recorded today. There are currently no newly published versions or tags to report.

## 3. Project Progress
While there were no merged or closed Pull Requests today, three significant open PRs saw updates, suggesting they are nearing review or final adjustments:

*   **[PR #1113](https://github.com/moltis-org/moltis/pull/1113) `hotfix(telegram): stream final replies without completion notify`**: Focuses on fixing a regression in Telegram's edit-in-place streaming behavior introduced in a previous PR (#1099). 
*   **[PR #1089](https://github.com/moltis-org/moltis/pull/1089) `Cap persisted tool results before rehydration`**: A deep architectural update aimed at optimizing how `tool` and `tool_result` contents are capped when session histories are rehydrated, covering everything from streaming chat to LLM-backed compaction prompts. This is a crucial update for managing context window limits and memory efficiency.
*   **[PR #1093](https://github.com/moltis-org/moltis/pull/1093) `Add channel activity log visibility settings`**: Introduces granular permission levels (`all`, `errors_only`, `off`) for activity logs across accounts, channels, and users, providing better administrative control.

## 4. Community Hot Topics
The most notable community interaction is happening around mobile accessibility. 

*   **[Issue #1107](https://github.com/moltis-org/moltis/issues/1107) `[Feature]: Multiline text input in the mobile web UI`**: Authored by `IlyaBizyaev` on June 5th, this issue has accumulated 1 comment. The underlying need points to a structural limitation in the mobile web interface that currently restricts users from seamlessly typing or pasting multi-line text. For a personal AI assistant, this is a critical UX friction point, as users frequently use multi-line formatting for prompts, code snippets, and structured data entry.

## 5. Bugs & Stability
*   **Telegram Streaming Bug (Medium Severity)**: Identified in [PR #1113](https://github.com/moltis-org/moltis/pull/1113), this bug occurs when Telegram streaming is enabled but completion notifications are disabled. Under these specific settings, the final AI answer fails to render as a streamed final reply. 
    *   *Status*: A hotfix PR is currently open and awaiting merge. 

## 6. Feature Requests & Roadmap Signals
Based on recent activity, the immediate roadmap is heavily focused on **context/memory management** and **administrative controls**, though user requests are pushing for better **mobile interfaces**.

*   **Mobile Web UI Improvements**: [Issue #1107](https://github.com/moltis-org/moltis/issues/1107) strongly signals that the mobile web experience requires modernization, specifically regarding text inputs.
*   **Predictions for Next Release**: Once the open PRs are merged, the next version will likely feature robust context-window management (via tool result capping in [PR #1089](https://github.com/moltis-org/moltis/pull/1089)) and streamlined Telegram integration. A fix for the mobile multiline input may follow shortly after, depending on maintainer bandwidth.

## 7. User Feedback Summary
User feedback currently centers around interface friction. The lack of a multiline text input on the mobile web UI ([Issue #1107](https://github.com/moltis-org/moltis/issues/1107)) suggests that users are actively trying to use Moltis on the go but are encountering input limitations. This indicates a healthy adoption rate for mobile usage, paired with a dissatisfaction with the current web-based text areas. 

## 8. Backlog Watch
*   **[PR #1089](https://github.com/moltis-org/moltis/pull/1089) (Open since 2026-06-01)** and **[PR #1093](https://github.com/moltis-org/moltis/pull/1093) (Open since 2026-06-03)**: Both of these substantial PRs have been open for roughly 5-7 days without comments or merge activity. Given that they introduce vital backend optimizations (memory capping) and complex permission hierarchies (activity logs), they require an architecture-focused review from the maintainers to prevent them from becoming stale.
*   **[Issue #1107](https://github.com/moltis-org/moltis/issues/1107)**: While created recently, this is a basic UX enhancement that should be addressed promptly to maintain a friction-free experience for mobile users.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

## CoPaw (QwenPaw) Project Digest — 2026-06-08

### 1. Today's Overview
The CoPaw (QwenPaw) project is currently experiencing high community engagement but shows signs of execution bottleneck, characterized by 6 actively discussed issues and 2 significant pull requests updated in the last 24 hours, yet zero closures or merges. The complete absence of new releases, merged PRs, or closed issues suggests that maintainers may be currently occupied or intentionally holding back merges for a future milestone. While open-source contributions and feature proposals remain robust, the lack of issue resolution and a stagnation in releases indicate a temporary lag in project momentum.

### 2. Releases
No new releases were recorded today. The community is actively discussing issues primarily related to versions 1.1.9 and 1.1.10, indicating that the last stable release is currently bearing the brunt of user stability tests and feature requests.

### 3. Project Progress
Although no PRs were merged today, active development and architectural improvements are underway in the review pipeline:
*   **ACP (Agent Client Protocol) Enhancements:** [PR #4949](https://github.com/agentscope-ai/QwenPaw/pull/4949) (Under Review) is actively being updated. It aims to extend the ACP server to support command advertising, tool parameters, metadata, and file links, essentially enabling a first-class terminal UI chat experience.
*   **Channel Renderer Fix:** A first-time contributor submitted [PR #4995](https://github.com/agentscope-ai/QwenPaw/pull/4995) to address data loss in channel renderers where tool output attachments and visible text were previously reduced to placeholders.

### 4. Community Hot Topics
The most engaging topics revolve around extending the system's interoperability and multimodal capabilities:
*   **Independent Visual Model Configuration:** [Issue #4992](https://github.com/agentscope-ai/QwenPaw Issue #4992) (2 comments) proposes a "visual relay station" concept. Users want to use lightweight text-only models as their primary LLM while relying on a separate, independent visual model to parse and relay image content. This highlights a strong user need for modular, heterogeneous model deployment.
*   **Adding MAX Messenger Channel:** [Issue #4886](https://github.com/agentscope-ai/QwenPaw Issue #4886) (2 comments) requests the integration of MAX Messenger for Russian-speaking users. This aligns well with QwenPaw's "Every channel" omnichannel philosophy and shows expanding international use cases.

### 5. Bugs & Stability
Several user-facing bugs have been reported, with a critical regression affecting core functionality:
1.  **Critical - Chat Unresponsiveness Regression:** In [Issue #4989](https://github.com/agentscope-ai/QwenPaw Issue #4989), users reported that versions 1.1.9 and 1.1.10 fail to generate responses (infinite loading animation) when connected to local vLLM deployments (e.g., Qwen3.6-27B). Notably, downgrading to version 1.1.5.post2 resolves the issue, indicating a severe regression in OpenAI-compatible API handling. No fix PR has been submitted yet.
2.  **Low - UI Image Preview Jitter:** [Issue #4993](https://github.com/agentscope-ai/QwenPaw Issue #4993) reports abnormal image shaking/dragging behavior in the web console when images are zoomed in (macOS). 

### 6. Feature Requests & Roadmap Signals
User feedback strongly signals a desire for more advanced agent architecture and memory capabilities:
*   **Hierarchical Memory Systems:** [Issue #4994](https://github.com/agentscope-ai/QwenPaw Issue #4994) explicitly requests the implementation of a self-evolving, layered memory framework similar to mainstream AI agents. As agent capabilities mature, memory management is clearly becoming a high-priority requirement for power users.
*   *Roadmap Prediction:* Given the active development in [PR #4949](https://github.com/agentscope-ai/QwenPaw/pull/4949) (ACP server improvements) and the growing demand for multimodal flexibility ([Issue #4992](https://github.com/agentscope-ai/QwenPaw Issue #4992)), the next version will likely focus heavily on external client interoperability and composable model architectures.

### 7. User Feedback Summary
Users are actively pushing QwenPaw into complex, self-hosted environments but are experiencing friction. The reliance on local deployments via tools like Docker and vLLM is high. However, the regression in recent versions regarding standard OpenAI protocol API calls ([Issue #4989](https://github.com/agentscope-ai/QwenPaw Issue #4989)) has caused dissatisfaction, as users are forced to rollback versions. Furthermore, the community views QwenPaw not just as a simple chat interface, but as a complex agent hub, demanding better memory frameworks and modular visual processing capabilities. 

### 8. Backlog Watch
Maintainers urgently need to address the following items to prevent user churn:
*   **Critical Path:** [Issue #4989](https://github.com/agentscope-ai/QwenPaw Issue #4989) (vLLM connection regression) requires immediate triage, as it breaks core chat functionalities for users running local models on the latest versions.
*   **Review Bottleneck:** [PR #4949](https://github.com/agentscope-ai/QwenPaw/pull/4949) has been open since 2026-06-03 and is vital for the ACP ecosystem. It needs maintainer feedback to prevent contributor friction.
*   **Bug Verification:** [PR #4995](https://github.com/agentscope-ai/QwenPaw/pull/4995) submitted by a first-time contributor is awaiting review and represents a low-risk, high-value fix for channel rendering that should be fast-tracked.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-08

## 1. Today's Overview
The ZeroClaw project is experiencing a highly active development phase, characterized by a massive volume of open Pull Requests (43 open vs. 7 closed/merged) and ongoing triage of historical issues. The development team and community contributors are heavily focused on expanding provider support, enhancing the "zerocode" TUI client, and shipping new WASM-based tool plugins. However, the high ratio of open PRs and active older issues suggests that while feature velocity is extremely high, the project is facing integration bottlenecks. Overall project health is robust but demands careful review management to prevent contributor fatigue.

## 2. Releases
There have been **no new releases** in the last 24 hours.

## 3. Project Progress
While only 7 PRs were merged/closed today, several massive architectural and feature PRs are actively under review and advancing the project's capabilities:
* **TUI ("zerocode") Advancements:** Major overhauls are in the pipeline, including an outbound message queue with sidebar injection ([PR #7190](https://github.com/zeroclaw-labs/zeroclaw/pull/7190)), live in-session model/provider switching ([PR #7209](https://github.com/zeroclaw-labs/zeroclaw/pull/7209)), and terminal theme enhancements ([PR #7249](https://github.com/zeroclaw-labs/zeroclaw/pull/7249)). 
* **Provider & Model Support:** Added 7 new OpenAI-compatible providers under schema v3 ([PR #7260](https://github.com/zeroclaw-labs/zeroclaw/pull/7260)) and wired `reasoning_effort` for Azure OpenAI deployments ([PR #7350](https://github.com/zeroclaw-labs/zeroclaw/pull/7350)).
* **Plugin Ecosystem:** New WASM plugins are being introduced for self-hosted music generation via ACE-Step ([PR #7331](https://github.com/zeroclaw-labs/zeroclaw/pull/7331)) and n8n workflow triggering ([PR #7328](https://github.com/zeroclaw-labs/zeroclaw/pull/7328)).
* **Core Fixes:** Addressed missing model names in CLI outputs ([PR #7346](https://github.com/zeroclaw-labs/zeroclaw/pull/7346)), fixed a Bedrock Quen conversation state leak ([PR #7343](https://github.com/zeroclaw-labs/zeroclaw/pull/7343)), and corrected a Bedrock prompt caching crash for unsupported models ([PR #7315](https://github.com/zeroclaw-labs/zeroclaw/pull/7315)).
* **CI/Infra:** Implemented cache warming from the `master` branch to speed up PR validation times ([PR #7355](https://github.com/zeroclaw-labs/zeroclaw/pull/7355)).

## 4. Community Hot Topics
* **Web Dashboard Missing ([Issue #4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)):** With 28 comments, this is the most actively discussed issue. Users are continuously reporting S1 workflow blocks where the Web UI/Tauri app fails to build or locate the dashboard.
* **Multi-Agent Routing ([Issue #2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767)):** Generating significant interest (9 👍, 6 comments), users are actively discussing the need for OpenClaw-style multi-profile workspace management and isolated agent routing.
* **Docker Distribution ([Issue #3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)):** A highly requested issue (3 👍, 9 comments) asking for a "full" Docker image with all feature flags (like WhatsApp) enabled by default to lower the barrier to entry for non-technical users. 
* **A2A Protocol Support ([Issue #3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)):** An accepted feature (7 👍, 6 comments) requesting native Agent-to-Agent communication capabilities, highlighting a community shift towards interoperability.

## 5. Bugs & Stability
Several high-severity bugs are impacting user experience, though fixes appear to be in progress for some:
* **S0 - Data Loss/Security:** `file_write` tool silently fails in Docker environments, with files becoming invisible on the host filesystem ([Issue #4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627)).
* **S1 - Workflow Blocked:** The Gemini CLI OAuth flow is completely broken, locking users out of the provider ([Issue #4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879)). 
* **S1 - Workflow Blocked:** Delegate agents are ignoring prompt injection modes, leading to bloated context windows ([Issue #5155](https://github.com/zeroclaw-labs/zeroclaw/issues/5155)). 
* **S1 - Security Bypass:** The `web_fetch` tool's DNS resolution logic is broken, blocking legitimate domains added to `allowed_private_hosts` if their underlying IPs are private ([Issue #5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122)).

## 6. Feature Requests & Roadmap Signals
* **Token Optimization:** A highly requested feature to compile skills locally instead of passing massive SKILL.md files to LLMs, aiming to drastically reduce token consumption ([Issue #5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146)).
* **Proactive Messaging:** Users want a `send_channel_message` tool to message users directly without hacky scheduled jobs ([Issue #5145](https://github.com/zeroclaw-labs/zeroclaw/issues/5145)).
* **Memory Architecture:** Moving toward structured memory consolidation using internal tool-calling rather than brittle prompt-constrained JSON text ([Issue #4760](https://github.com/zeroclaw-labs/zeroclaw/issues/4760)).
* **Next Release Prediction:** Given the current stack of "zerocode" PRs and provider fallback enhancements ([PR #7178](https://github.com/zeroclaw-labs/zeroclaw/pull/7178)), the next version will likely be heavily focused on UX flexibility, reliable provider routing, and WASM plugin integrations.

## 7. User Feedback Summary
The main pain points for users revolve around deployment friction and operational stability. Self-hosters are frustrated by the incomplete Docker images and complex manual Web UI compilation. Additionally, channel-integration users (QQ, Telegram, Feishu) report a degraded experience due to context compression failing in daemon mode ([Issue #4880](https://github.com/zeroclaw-labs/zeroclaw/issues/4880)) and the `LeakDetector` aggressively redacting valid non-sensitive content like MD5 file hashes ([Issue #4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832)). Despite these growing pains, the community response to the new plugin system and expanded provider support is highly positive.

## 8. Backlog Watch
* **Issue #4866 (Web UI Builds):** An S1 issue open since March 2026 with 28 comments. It needs urgent maintainer triage or documentation updates to resolve the ongoing Tauri/Web dashboard compilation errors.
* **Issue #7184 (i18n Submodule RFC):** Proposed moving `.ftl`/`.po` files to a submodule to reduce repo churn. Open since June 4th, it needs an architectural decision from core maintainers.
* **Issue #4467 (MCP Resource Support):** A highly upvoted (4 👍) issue open since March. While the project integrates with MCP servers as a tool client, it lacks broader resource/prompt support, limiting advanced agentic use cases.

</details>