# OpenClaw Ecosystem Digest 2026-06-27

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-26 22:22 UTC

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

Here is the structured project digest for OpenClaw based on the GitHub data provided for June 27, 2026.

### 1. Today's Overview
OpenClaw is currently experiencing a period of exceptionally high volatility and community engagement, processing 500 issue updates and 500 PR updates in the last 24 hours alone. The vast majority of this activity is inbound and pending triage, with 470 open issues and 468 open PRs actively vying for maintainer attention. The ecosystem appears to be undergoing growing pains related to its multi-agent orchestration and session management architectures, evidenced by a high density of P1 bug reports regarding state loss, memory leaks, and deadlocks. Despite the immense workload, the community remains highly active in submitting detailed bug reports, reproduction steps, and targeted fixes, indicating strong project health and user investment.

### 2. Releases
No new releases were recorded today. The project remains on its latest internal versions (`2026.5.3` and `2026.5.4` beta tags referenced in issue metadata).

### 3. Project Progress
Progress today is characterized by a massive volume of community-submitted fixes rather than merged core updates, as only 32 PRs were closed/merged compared to 468 left open. 
Key advancements in the pipeline include several sophisticated fixes by contributor `Jerry-Xin`, such as recovering stranded replies in `message_tool_only` mode ([PR #88992](https://github.com/openclaw/openclaw/pull/88992)) and preserving cron job counters during manual runs ([PR #83933](https://github.com/openclaw/openclaw/pull/83933)). Security and reliability enhancements are also seeing progress, notably a fix for cross-process lost-update races in bootstrap token issuance ([PR #78277](https://github.com/openclaw/openclaw/pull/78277)) and a critical fix to cap `agentRunCache` to prevent unbounded memory growth under fan-out ([PR #77973](https://github.com/openclaw/openclaw/pull/77973)).

### 4. Community Hot Topics
*   **Long-term Agent Reliability:** The most active item is a 24-hour observational tracking issue for a live dev agent ([Issue #77598](https://github.com/openclaw/openclaw/issues/77598)), highlighting the community's deep focus on autonomous long-haul stability.
*   **Multi-Agent Orchestration:** Developers are heavily discussing instability when running parallel agents. A core issue points out concurrent config overwrites and session-lock failures ([Issue #43367](https://github.com/openclaw/openclaw/issues/43367)).
*   **Session State Management:** High engagement is centered around JSONL write-lock timeouts that block subagent delivery lanes ([Issue #86538](https://github.com/openclaw/openclaw/issues/86538)) and duplicate transcript/context assembly bugs across channels ([Issue #69208](https://github.com/openclaw/openclaw/issues/69208)).
*   **Underlying Needs:** The community is pushing OpenClaw from a single-user assistant into a robust, enterprise-grade multi-agent orchestrator, demanding higher concurrency reliability, better state isolation, and deeper observability hooks.

### 5. Bugs & Stability
*   🔴 **P1 - WebChat Transcripts Overwritten ([Issue #77012](https://github.com/openclaw/openclaw/issues/77012)):** In a severe `2026.5.2` regression, WebChat session JSONL files are overwritten on every turn, causing massive data loss. Only the latest message survives.
*   🔴 **P1 - Stale Worker Process Accumulation ([Issue #76171](https://github.com/openclaw/openclaw/issues/76171)):** On `2026.4.29`, response times degrade to 2-3+ minutes because stale worker processes pile up, driving host load averages to 25-31. 
*   🟠 **P1 - Anthropic Provider Bricking ([Issue #94228](https://github.com/openclaw/openclaw/issues/94228)):** On the native Anthropic path, long-lived multi-turn tool-use sessions eventually brick permanently due to `Invalid signature in thinking block` errors.
*   🟠 **P1 - Silent Reasoning Flipped ([Issue #73182](https://github.com/openclaw/openclaw/issues/73182)):** A recent update silently enabled extended reasoning for Claude models by default, doubling API spend and leaking "thinking" blocks into the chat UI.
*   🟡 **P2 - Setup Instability ([Issue #76042](https://github.com/openclaw/openclaw/issues/76042)):** A regression in `2026.5.xx` versions makes clean installations hang for 5+ minutes, severely impacting onboarding. 

### 6. Feature Requests & Roadmap Signals
*   **MCP Consent Envelopes:** Users want MCP servers to opt into a channel-mediated approval pipeline for secure, gated state mutations ([Issue #78308](https://github.com/openclaw/openclaw/issues/78308)).
*   **SDK Stabilization:** There is a strong push to stabilize the `@openclaw/sdk` happy path for real external app clients, specifically focusing on Gateway connection and agent discovery ([Issue #74704](https://github.com/openclaw/openclaw/issues/74704)).
*   **User-Specific Memory Isolation:** A massive PR aiming to add per-user memory files in multi-user environments is underway ([PR #47277](https://github.com/openclaw/openclaw/pull/47277)).
*   *Roadmap Prediction:* Based on PR activity, the next version will likely focus heavily on cron reliability, `message_tool_only` fallbacks, and strict memory caching caps.

### 7. User Feedback Summary
Users are expressing significant frustration with recent regressions in core stability, particularly surrounding the `2026.5.x` release cycle. Latency and resource mismanagement are major pain points—users report gateway crashes due to lazy-spawned duplicate MCP children ([Issue #75621](https://github.com/openclaw/openclaw/issues/75621)) and hard-coded 60-second timeouts ignoring provider rate limits ([Issue #75648](https://github.com/openclaw/openclaw/issues/75648)). However, satisfaction remains high regarding OpenClaw's plugin architecture, multi-channel capabilities (Telegram, Discord, Feishu), and the responsiveness of the community in diagnosing complex, multi-agent race conditions.

### 8. Backlog Watch
*   **Multi-Agent Orchestration Overhaul ([Issue #43367](https://github.com/openclaw/openclaw/issues/43367)):** Open since March, this fundamental flaw where concurrent agents overwrite configs needs immediate architectural review.
*   **Plugin Loader Silent Failures ([Issue #78301](https://github.com/openclaw/openclaw/issues/78301)):** Users are losing hours of debugging time because the plugin loader silently tolerates authoring bugs instead of failing fast at load time.
*   **TrustChain Agent Verification ([Issue #33106](https://github.com/openclaw/openclaw/issues/33106)):** An older, highly-upvoted feature request for runtime ID/audit trails for agent-to-agent interactions is going stale and needs a product decision. 
*   **Tool Lifecycle Boundaries ([PR #18889](https://github.com/openclaw/openclaw/pull/18889)):** A fundamental infrastructure PR from February adding observability boundaries around tool execution has sat idle for months and risks rotting on the vine.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the June 27, 2026 community digests.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently experiencing a massive phase of maturation, shifting from single-user prompt interfaces to complex, multi-agent, multi-channel architectures. Projects are actively battling the "growing pains" of enterprise adoption, with community efforts heavily concentrated on resolving state isolation, concurrency deadlocks, and security vulnerabilities (such as SSRF, rogue executions, and supply chain integrity). Cross-platform deployment—specifically bridging desktop environments with messaging apps like Telegram, WhatsApp, and Discord—remains the primary use case, driving demand for robust session management and asynchronous background task execution. 

### 2. Activity Comparison
*Health Score is inferred from PR/Issue ratios, release cadence, and community engagement described in the digests.*

| Project | Issues (24h Activity) | PRs (24h Activity) | Recent Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 updates (470 open) | 500 updates (468 open) | No release (Beta 2026.5.4) | High (Overloaded but highly active) |
| **NanoBot** | High activity | 39 open | No release | High (Bottlenecked by review backlog) |
| **Hermes Agent**| 50 updates (43 open) | 50 active | No release | High (Stable iteration) |
| **PicoClaw** | 5 updates | 18 updates (14 merged) | No release | Excellent (High merge rate) |
| **NanoClaw** | Moderate | 11 updates (2 merged) | No release | High (Prepping major release) |
| **IronClaw** | 33 updates | 50 updates (15 merged) | Imminent (v0.5.0 API breaks) | High (High-velocity refactor) |
| **LobsterAI** | Moderate | 8 merged | Shipped (2026.6.26) | Excellent (Healthy feature velocity) |
| **CoPaw** | 30 updates | 50 active (24 merged) | Shipped (v2.0.0-beta.1) | High (Rapid beta stabilization) |
| **ZeroClaw** | 48 open | 39 active | Shipped (v0.8.2) | High (Scaling governance) |
| **NullClaw** | 1 update | 0 | No release | Static (Niche/Stalled) |
| **Moltis** | 0 | 1 open | No release | Static (Quiet/Low intensity) |

*(Note: TinyClaw and ZeptoClaw recorded zero activity in the last 24 hours.)*

### 3. OpenClaw's Position
**OpenClaw is the undeniable anchor of this ecosystem**, processing up to 10x the raw volume of issues and PRs compared to the next most active projects. It acts as a foundational technology, evidenced by LobsterAI explicitly upgrading its internal runtime to OpenClaw's latest version, and IronClaw building migration tools for it. 

*   **Advantages:** Unmatched community engagement and plugin architecture. It is the de facto reference implementation for multi-channel (Telegram, Discord, Feishu) and multi-agent orchestration.
*   **Technical Approach Differences:** While newer projects (like IronClaw and ZeroClaw) are aggressively refactoring for WebAssembly (WASM), Rust-based multi-tenancy, and strict enterprise security postures, OpenClaw is currently absorbing scale through community-submitted hotfixes (e.g., capping memory growth in fan-outs, cron counter preservation). 
*   **Vulnerabilities:** OpenClaw's sheer scale has made it a victim of its own success. It is currently facing severe maintainer bottlenecks (468 open PRs) and P1 regressions (memory leaks, overwritten JSONL transcripts) that newer, leaner codebases like PicoClaw or NanoClaw are currently avoiding.

### 4. Shared Technical Focus Areas
Several universal requirements have emerged across the ecosystem:
*   **Multi-Agent Orchestration & Isolation:** Projects are struggling to run parallel agents safely. OpenClaw, NanoBot, IronClaw, and LobsterAI are all actively working on isolating memory, preventing config overwrites, and routing context (e.g., per-conversation model binding).
*   **Unattended Background Execution:** There is a massive push for reliable "fire-and-forget" agents. NanoBot (Heartbeat), CoPaw, IronClaw, and OpenClaw are all patching cron jobs, scheduled automations, and background tasks to prevent silent failures, timeouts, and context duplication.
*   **Platform-Specific Gateway Friction:** Bridging AI to standard chat applications remains universally painful. PicoClaw, NanoClaw, and Hermes Agent share identical pain points regarding WhatsApp websocket timeouts, Telegram polling freezes, and Signal encryption/logging leaks.
*   **Security & Sandboxing:** As agents gain autonomous execution powers, security is paramount. PicoClaw patched SSRF bypasses, NanoBot patched critical API allowlist bypasses, ZeroClaw fixed a confused deputy vulnerability, and Hermes Agent is grappling with agent impersonation risks.

### 5. Differentiation Analysis
*   **Enterprise & Security-First (ZeroClaw, IronClaw):** These projects are differentiating through enterprise features—WASM plugins, Software Bills of Materials (SBOMs), hardware-backed CI pipelines, and strict capability scoping (admin vs. user tool control).
*   **Lightweight & Mobile-First (PicoClaw, NullClaw, NanoBot):** These projects target edge deployments. PicoClaw and NullClaw focus heavily on Android/Termux compilation and lightweight resource footprints, while NanoBot emphasizes decoupling monolithic models for cheaper background processing.
*   **Desktop & UI-Centric (CoPaw, LobsterAI):** These projects differentiate via the local desktop user experience. CoPaw is heavily optimizing UI rendering for agent workflows (Tauri/pywebview instant starts), while LobsterAI focuses on visual multi-agent "plan mode" collaboration.

### 6. Community Momentum & Maturity
*   **Tier 1: High-Velocity Titans (OpenClaw, IronClaw, CoPaw, NanoBot):** Experiencing explosive growth but facing severe integration friction. They are merging dozens of PRs daily but fighting regressions, architectural bottlenecks, and maintainer review fatigue.
*   **Tier 2: Stabilizing Scaleups (ZeroClaw, Hermes Agent, NanoClaw, LobsterAI):** Highly active but more controlled momentum. These communities are successfully shipping targeted releases (v0.8.2, 2026.6.26) and actively debating governance, RFCs, and UX polish rather than fighting core infrastructure fires.
*   **Tier 3: Niche or Dormant (PicoClaw, NullClaw, Moltis, ZeptoClaw, TinyClaw):** Low raw volume, but highly targeted. PicoClaw maintains an excellent merge-to-open ratio for fundamental fixes, while NullClaw and Moltis represent quiet, specialized tools with low community noise.

### 7. Trend Signals
*   **The "Agentic Spam" UX Problem:** As agents chain tool calls, they flood chat interfaces. CoPaw and Hermes users are actively demanding visual aggregation of these steps. Developers must shift from streaming raw JSON tool calls to rendering summarized, high-level agent timelines.
*   **Cognitive Escalation & Cost Routing:** The era of binding an agent to a single LLM is over. NanoBot and LobsterAI users are demanding per-task model routing—using cheap models (like DeepSeek) for background memory consolidation, and escalating to expensive reasoning models only when tasks fail or require deep logic.
*   **Death of the Node.js Dependency:** A strong architectural signal from ZeroClaw (and reflected in NanoBot's community debates) indicates a impending move away from Node.js and Python dependencies toward hermetic, WASM-based, or strictly compiled binaries to ensure secure, immutable agent deployments.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the structured project digest for NanoBot based on the provided GitHub data.

# NanoBot Project Digest - 2026-06-27

## 1. Today's Overview
NanoBot is currently exhibiting an exceptionally high velocity of open-source development, characterized by a massive spike in community-driven pull requests (39 open) addressing long-standing feature requests and platform-specific bugs. The project is actively maturing its core infrastructure, with significant community focus on enhancing the "Heartbeat" autonomous agent loop, improving Windows OS compatibility, and expanding multi-agent and plugin capabilities. However, the project faces underlying stability and security concerns, as evidenced by multiple critical vulnerabilities patched today and a historical supply chain malware issue that still resonates in the community. Overall project health is highly active, though maintainers need to manage a growing PR review backlog.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
Development activity today was heavily skewed towards routing and model optimization, particularly revolving around the "Heartbeat" (autonomous background agent) and "Dream" (memory consolidation) systems. Key advancements include:
*   **Routing & Context Isolation:** Cron jobs and Heartbeat tasks are receiving major architectural updates to fix session context isolation. [PR #4550](https://github.com/HKUDS/nanobot/pull/4550) fixes cron jobs reusing fixed sessions, while [PR #4551](https://github.com/HKUDS/nanobot/pull/4551) and [PR #4553](https://github.com/HKUDS/nanobot/pull/4553) allow heartbeat tasks to share main sessions or route to specific channels.
*   **Model Overriding:** The monolithic model binding is being decoupled. Progress was made on allowing per-conversation model presets ([PR #4555](https://github.com/HKUDS/nanobot/pull/4555)), cheaper models for Dream memory consolidation ([PR #4556](https://github.com/HKUDS/nanobot/pull/4556)), and cost-saving models for Heartbeat tasks ([PR #4549](https://github.com/HKUDS/nanobot/pull/4549)).
*   **Extensibility:** Notable structural additions include a new plugin system manifest loader ([PR #4558](https://github.com/HKUDS/nanobot/pull/4558)) and an `agent_delegate` tool to allow NanoBot to call external AI CLIs like Claude Code or Codex ([PR #4559](https://github.com/HKUDS/nanobot/pull/4559)). 
*   **Parallel Processing:** Performance optimization is underway via [PR #4557](https://github.com/HKUDS/nanobot/pull/4557), which batches LLM parallel tool calls instead of forcing serialization.

## 4. Community Hot Topics
*   **Dependency Bloat vs. Lightweight Vision:** [Issue #660](https://github.com/HKUDS/nanobot/issues/660) (12 comments, 5 thumbs up) sparked debate over NanoBot's claim of being "ultra-lightweight" due to its reliance on both Python and Node.js in the Dockerfile. This highlights the community's strong preference for lean, easily deployable CLI tools.
*   **Historical Security Incident:** [Issue #2439](https://github.com/HKUDS/nanobot/issues/2439) (6 comments, 4 thumbs up) continues to generate attention. It involves a critical data-exfiltration malware found in a PyPI release (`v0.1.4.post5`), indicating users are highly sensitive—and actively investigating—NanoBot's supply chain security.
*   **Autonomous Task Delivery:** [Issue #4418](https://github.com/HKUDS/nanobot/issues/4418) and [Issue #1899](https://github.com/HKUDS/nanobot/issues/1899) show heavy user engagement with the Heartbeat system. Users are demanding more granular control over where and how background tasks deliver their results, pointing to a strong use case for NanoBot as an asynchronous, multi-channel assistant.

## 5. Bugs & Stability
*   **Critical (Security Bypasses):** Several critical allowlist bypasses in the `exec` tool and filesystem API were closed today. These vulnerabilities allowed unauthorized shell command executions via the OpenAI-compatible API ([Issue #4514](https://github.com/HKUDS/nanobot/issues/4514), [Issue #4516](https://github.com/HKUDS/nanobot/issues/4516), [Issue #4519](https://github.com/HKUDS/nanobot/issues/4519)). 
*   **Medium (Windows Compatibility):** A major pain point for Windows users was resolved today. The `exec` tool had inconsistent shell semantics, jumping between `cmd.exe` and PowerShell ([Issue #4544](https://github.com/HKUDS/nanobot/issues/4544)), which has a fix pending in [PR #4545](https://github.com/HKUDS/nanobot/pull/4545). Additionally, severe service lifecycle bugs when running NanoBot via NSSM or using `--background` on Windows are actively being patched ([Issue #4511](https://github.com/HKUDS/nanobot/issues/4511), [Issue #4513](https://github.com/HKUDS/nanobot/issues/4513)).
*   **Low (Memory/Duplication):** The "Dream" subsystem was found creating duplicate skills during memory consolidation, now addressed by a write guard in [PR #4554](https://github.com/HKUDS/nanobot/pull/4554).

## 6. Feature Requests & Roadmap Signals
Based on today's issue tracker and PR pipeline, the immediate roadmap signals point towards **multi-modal and multi-agent architecture**. 
*   **Voice I/O:** Users want a closed conversational loop. [Issue #4010](https://github.com/HKUDS/nanobot/issues/4010) requests TTS output, which was immediately actioned in [PR #4560](https://github.com/HKUDS/nanobot/pull/4560).
*   **Cognitive Escalation:** [Issue #4419](https://github.com/HKUDS/nanobot/issues/4419) requests automatic reasoning effort escalation (thinking harder when a task gets complex). This is currently being integrated via [PR #4552](https://github.com/HKUDS/nanobot/pull/4552).
*   **Better Web Scraping:** The community is moving past simple Python fetching, with [PR #4561](https://github.com/HKUDS/nanobot/pull/4561) adding native Crawl4AI support for robust data extraction.
*   *Prediction for Next Release:* The next version will likely heavily feature Windows reliability fixes, the new TUI interface ([PR #4329](https://github.com/HKUDS/nanobot/pull/4329)), and deep per-session model configurations.

## 7. User Feedback Summary
**Pain Points:** Windows users have been severely struggling with process management and shell execution consistency, almost to the point of un usability for automated background tasks. Additionally, power users are finding NanoBot's memory and background task routing too "magical" (e.g., delivering messages to the wrong channels, or reusing stale cron contexts), desiring strict, deterministic isolation.
**Satisfaction:** The community is highly engaged and technically capable. Rather than simply complaining about bugs, users and contributors like `dajiaohuang` and `YLChen-007` are providing deep architectural fixes and security audits. The rapid implementation of niche features (like TTS and Crawl4AI) shows an incredibly responsive development loop.

## 8. Backlog Watch
*   **Maintainer Bottleneck:** There are currently 39 open PRs, the vast majority submitted today by prolific contributor `dajiaohuang` addressing major feature requests and bugs. Maintainers urgently need to review these to prevent merge conflicts and contributor burnout.
*   **Unaddressed Security Feeds:** [Issue #4490](https://github.com/HKUDS/nanobot/issues/4490) highlights that the OpenAI-compatible API server binds to all interfaces without authentication. While a PR exists ([PR #4548](https://github.com/HKUDS/nanobot/pull/4548)), this critical exposure needs fast-tracked merging.
*   **Stale Core Architecture:** [Issue #3096](https://github.com/HKUDS/nanobot/issues/3096) (opened in April) points out that the internal tool scheduling design is flawed and forces serial execution. It is finally being addressed today by [PR #4557](https://github.com/HKUDS/nanobot/pull/4557), but represents a long-standing bottleneck in agent performance.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest (2026-06-27)

## 1. Today's Overview
The Hermes Agent project exhibits exceptionally high active development and community engagement, processing 50 issue updates and 50 active pull requests in the last 24 hours. The maintainers and community contributors are currently focused on fortifying platform stability, particularly addressing gateway message delivery, OS-level integration quirks, and dashboard reliability. While a large volume of issues remain open (43), the steady stream of highly targeted PRs—ranging from Windows UI fixes to provider authentication syncs—demonstrates a healthy, responsive development cycle.

## 2. Releases
*No new releases were recorded in this reporting period. The project remains on its current active development branch.*

## 3. Project Progress
Today's PR activity was heavily skewed toward cross-platform compatibility, UX improvements in the dashboard, and fixing provider integrations. Key merged and closed PRs include:
*   **Dashboard & UI Advancements:** [PR #53290](https://github.com/NousResearch/hermes-agent/pull/53290) fixed state persistence for the Mixture-of-Agents (MoA) presets in the Desktop app. Additionally, infrastructure for the dashboard was expanded with [PR #32587](https://github.com/NousResearch/hermes-agent/pull/32587), introducing an AG-UI bridge and event replay for live operator control.
*   **Windows Stability:** A major pain point—flashing console windows during tool execution—was systematically resolved via a global subprocess patch in [PR #53291](https://github.com/NousResearch/hermes-agent/pull/53291). 
*   **Configuration & Providers:** [PR #32602](https://github.com/NousResearch/hermes-agent/pull/32602) fixed a destructive dashboard bug where saving configs wiped out custom providers. The codebase was also future-proofed by updating default Gemini models to `gemini-3.5-flash` ahead of Google's Oct 2026 shutdown ([PR #32603](https://github.com/NousResearch/hermes-agent/pull/32603)).

## 4. Community Hot Topics
*   **Anthropic OAuth & Billing Drain ([Issue #40014](https://github.com/NousResearch/hermes-agent/issues/40014)):** The most discussed bug today involves Claude Code OAuth routing pay-per-token endpoints instead of using Max/Pro subscription quotas, burning through "extra usage" credits. This highlights a strong user demand for native, billing-aware OAuth handling for Anthropic.
*   **Security & Impersonation Risks ([Issue #25839](https://github.com/NousResearch/hermes-agent/issues/25839)):** A highly sensitive issue where the system disguised automated skill-updater prompts as `role: "user"`, tricking parallel agents into unauthorized modifications. This reveals the community's growing concern over autonomous agent guardrails and secure role injection.
*   **Cryptographic Audit Trails ([Issue #487](https://github.com/NousResearch/hermes-agent/issues/487)):** A highly supported feature request inspired by OpenFang, asking for a SHA-256 hash-chained action log to ensure tamper-proof agent accountability.

## 5. Bugs & Stability
Stability is currently being challenged by platform-specific gateway routing and desktop execution issues. Ranked by severity:
*   **[P1] Message Delivery Failures:** [Issue #52805](https://github.com/NousResearch/hermes-agent/issues/52805) reports that WeChat/Telegram gateties receive and process messages, but responses silently fail to deliver, leaving users stuck on the "typing" indicator. 
*   **[P1] Desktop Execution Segfaults:** [Issue #46789](https://github.com/NousResearch/hermes-agent/issues/46789) documents `terminal` and `execute_code` tools segfaulting (exit code -11) immediately on macOS Desktop.
*   **[P1] Telegram Polling Freezes:** [Issue #40691](https://github.com/NousResearch/hermes-agent/issues/40691) shows the Telegram gateway freezing completely after recovering from an HTTP 409 polling conflict.
*   **[P2] Dashboard Memory Leak:** [Issue #46082](https://github.com/NousResearch/hermes-agent/issues/46082) flags the Hermes Dashboard process leaking memory up to 5.2GB, resulting in OOM kills on Linux.

## 6. Feature Requests & Roadmap Signals
Based on recent PRs and Issues, the upcoming roadmap will likely emphasize **enterprise security** and **multi-modal integrations**. 
*   **Advanced Sandboxing:** [PR #53292](https://github.com/NousResearch/hermes-agent/pull/53292) expanding `HERMES_WRITE_SAFE_ROOT` to support multiple directories signals a strong push toward secure, Dockerized enterprise deployments.
*   **Provider Expansions:** [PR #8427](https://github.com/NousResearch/hermes-agent/pull/8427) adding Google Vertex AI support indicates a move to capture enterprise GCP users who need service-account-level authentication for Gemini models.
*   **Memory and Context Controls:** [PR #33043](https://github.com/NousResearch/hermes-agent/pull/33043) adding a visual Dashboard Memory view, and [Issue #9404](https://github.com/NousResearch/hermes-agent/issues/9404) requesting session-write dedup, show that "memory management" is a massive priority for personal AI users.

## 7. User Feedback Summary
Users are enthusiastically adopting Hermes as an omnipresent personal assistant across messaging platforms (Telegram, Discord, QQ), but they are experiencing friction with platform-specific quirks. A notable pain point is the TUI/CLI reliability when changing models or providers, as seen in [Issue #53286](https://github.com/NousResearch/hermes-agent/issues/53286) (filter desync causing failed API keys). Windows users are specifically pleading for better UX, particularly regarding background process execution (flashing CMD windows). Furthermore, users utilizing local or custom providers (Ollama, Azure AI Foundry, LM Studio) frequently encounter rigid API normalization issues that break their workflows.

## 8. Backlog Watch
*   **[Issue #38240](https://github.com/NousResearch/hermes-agent/issues/38240) - Skills Index Watchdog:** Automated probes indicate the `/docs/api/skills-index.json` is degraded and going stale. This breaks a core value proposition (dynamic skill loading) and needs CI/CD attention.
*   **[Issue #49858](https://github.com/NousResearch/hermes-agent/issues/49858) - Photon iMessage Death Spiral:** When the Photon sidecar crashes, the adapter enters a silent reconnect loop without respawning the sidecar. This completely kills iMessage routing until manual restart and has been open since June 21.
*   **[Issue #27178](https://github.com/NousResearch/hermes-agent/issues/27178) - Kanban Protocol Violation:** A long-standing issue since May where the Kanban worker fails to cleanly exit if the agent responds with text instead of the expected tool call (`kanban_complete`), causing automated task loops to break without fallback.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the structured project digest for PicoClaw based on the GitHub data provided for 2026-06-27.

### 1. Today's Overview
PicoClaw is currently experiencing a highly active maintenance and stabilization phase. Over the past 24 hours, the project saw a massive influx of pull request activity (18 updated PRs, with 14 merged/closed), heavily focused on error handling hygiene, security fixes, and dependency updates. Issue activity remains steady at 5 updates, with developers and the community actively addressing channel connectivity bugs (WhatsApp, Android) and core agent behavior. The high merge rate of low-level system fixes suggests the team is likely preparing the codebase for an upcoming release, emphasizing long-term stability and resource management.

### 2. Releases
No new releases were published today. The project remains on its current version (with users reporting usage of v0.2.9).

### 3. Project Progress
Today's development was primarily driven by robust refactoring and security enhancements. Key advancements include:
*   **Code & Resource Hygiene:** Developer `chengzhichao-xydt` submitted and merged a series of PRs ([#3172](https://github.com/sipeed/picoclaw/pull/3172), [#3186](https://github.com/sipeed/picoclaw/pull/3186), [#3185](https://github.com/sipeed/picoclaw/pull/3185), [#3184](https://github.com/sipeed/picoclaw/pull/3184), [#3183](https://github.com/sipeed/picoclaw/pull/3183), [#3188](https://github.com/sipeed/picoclaw/pull/3188), [#3170](https://github.com/sipeed/picoclaw/pull/3170)) to explicitly handle `Close()` errors and prevent resource leaks in error paths.
*   **Security Patching:** Merged [PR #3143](https://github.com/sipeed/picoclaw/pull/3143) which blocks an SSRF bypass via ISATAP IPv6 literals in the `web_fetch` tool.
*   **System Stability:** Merged [PR #3181](https://github.com/sipeed/picoclaw/pull/3181) to guard gateway startup info assertions, and [PR #3094](https://github.com/sipeed/picoclaw/pull/3094) fixed a bug causing duplicate messages from async sub-agents. 
*   **Dependency Updates:** Merged 5 Dependabot PRs, updating critical SDKs including SQLite, Fyne (systray), Telego, and Line-bot-sdk.

### 4. Community Hot Topics
*   **End-to-End Encryption Security ([Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)):** With 2 upvotes and high priority, the community is requesting a shift from the unmaintained `libolm` to `vodozemac` for Matrix/E2EE. This highlights a strong user need for secure, future-proof messaging channels.
*   **Agent Memory and Reliability ([Issue #3150](https://github.com/sipeed/picoclaw/issues/3150)):** A user reported the agent "giving itself amnesia," indicating that context handling and memory persistence remain critical focal points for AI agent reliability.
*   **New Channel Integration ([PR #3063](https://github.com/sipeed/picoclaw/pull/3063)):** The open PR to add a DeltaChat gateway shows active community interest in expanding PicoClaw's supported messaging platforms.

### 5. Bugs & Stability
Reported bugs today point to platform-specific edge cases and agent orchestration issues:
1.  **[HIGH] WhatsApp Websocket Timeout ([Issue #3178](https://github.com/sipeed/picoclaw/issues/3178)):** Users report scheduling/connectivity drops over WhatsApp websockets. **Fix Status:** Actively being addressed in open [PR #3179](https://github.com/sipeed/picoclaw/pull/3179), which introduces asynchronous message dispatching and stale connection detection.
2.  **[HIGH] Android Service Launch Failure ([Issue #3182](https://github.com/sipeed/picoclaw/issues/3182)):** A crash/blocker bug preventing the Android background service from launching, tied to path permission settings.
3.  **[MEDIUM] Sub-agent Duplicate Messages ([Issue #3094](https://github.com/sipeed/picoclaw/issues/3094)):** Async sub-agents (spawn) previously caused duplicate messages by pushing raw data while the main agent also pushed formatted data. **Fix Status:** Resolved/Closed.
4.  **[LOW] CLI Tool Call Arguments ([PR #3180](https://github.com/sipeed/picoclaw/pull/3180)):** Open PR to skip malformed JSON arguments in CLI tool calls to prevent entire batch drops.

### 6. Feature Requests & Roadmap Signals
Based on current activities, the immediate roadmap appears focused on **Connection Resiliency and Security**. 
We can predict that the next version (v0.3.0 or v0.2.10) will heavily feature:
*   Robust auto-reconnect logic for WebSocket channels (specifically WhatsApp).
*   Stricter security guards for IP classification (SSRF prevention).
*   Potential integration of `vodozemac` if the maintainers adopt the proposal in Issue #3088.
*   Possible inclusion of the DeltaChat gateway (PR #3063) if it passes review soon.

### 7. User Feedback Summary
Users are actively deploying PicoClaw in varied environments, from Docker containers using advanced models (`deepseek-v4-pro`) to Android Termux setups. The primary pain points are currently centered around environmental stability rather than core AI logic—specifically, keeping background services alive on Android and maintaining stable bridge connections for WhatsApp. Users also desire cleaner outputs from sub-agents, expressing frustration when raw, unformatted data bypasses the main agent's summarization logic. 

### 8. Backlog Watch
*   **[Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) (Created: Jun 9):** The high-priority request to replace `libolm` with `vodozemac` is marked as `help wanted`. It urgently needs a maintainer to champion or assign the implementation.
*   **[PR #3063](https://github.com/sipeed/picoclaw/pull/3063) (Created: Jun 8):** The DeltaChat gateway feature PR has been open for nearly 3 weeks. It requires a code review or status update from maintainers to avoid contributor drop-off.
*   **[PR #3180](https://github.com/sipeed/picoclaw/pull/3180) & [PR #3179](https://github.com/sipeed/picoclaw/pull/3179):** Both opened today, addressing critical CLI execution and WhatsApp drop fixes. They are highly relevant to open issues and should be prioritized for review and merge.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the structured project digest for the NanoClaw project based on the provided GitHub data.

# NanoClaw Project Digest - 2026-06-27

## 1. Today's Overview
The NanoClaw project exhibits **high and healthy development activity**, driven largely by prolific contributor `grantland`, who submitted 6 structured PRs in a single day. The community is actively stress-testing the platform's multi-channel capabilities, with a strong focus on messaging integrations (WhatsApp, Discord, Telegram, Signal) and v2 database migrations. Core maintainers are successfully triaging inbound issues, closing invalid reports while addressing complex infrastructure bugs. Overall, project momentum is strongly positive, indicating active preparation for an upcoming major release or version bump. 

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Project Progress
Significant advancements were made today in system stability, environment variable handling, and agent scheduling. Out of 11 updated PRs, 2 were closed/merged, and several new foundational features were proposed:
*   **V2 Migration Stability ([PR #2859](https://github.com/nanocoai/nanoclaw/pull/2859)):** A critical fix was closed/merged today, patching a database migration crash that affected older v1 installs by improperly querying a non-existent `is_main` column.
*   **Agent Operations ([PR #2862](https://github.com/nanocoai/nanoclaw/pull/2862)):** Introduced new operational skills (`/manage-agents` and `/manage-schedules`), expanding NanoClaw's autonomous capabilities.
*   **System Reporting ([PR #2863](https://github.com/nanocoai/nanoclaw/pull/2863)):** Added `/setup-system-digest` and `/system-digest` utility skills.
*   **MCP Environment Variables ([PR #2861](https://github.com/nanocoai/nanoclaw/pull/2861)):** Improved environment variable expansion (`${VAR_NAME}`) for MCP servers at spawn time, increasing deployment flexibility.

## 4. Community Hot Topics
The most notable community activity revolves around adapter failures and session management:
*   **WhatsApp Group Reply Failure ([PR #2870](https://github.com/nanocoai/nanoclaw/pull/2870)):** Opened by `elancode`, this highlights a significant issue where group replies were marked as delivered by Baileys but never actually appeared in the chat. This reveals a community need for flawless native messaging protocol support, specifically regarding group encryption and participant addressing.
*   **Signal Session Spam ([PR #2860](https://github.com/nanocoai/nanoclaw/pull/2860)):** Opened by `caburi00`, this PR addresses a bundled `libsignal` dependency leaking sensitive debug information (including session keys) on every open/close cycle. This shows the community's vigilance regarding operational security and log hygiene.

## 5. Bugs & Stability
Bugs reported today range from critical infrastructure failures to channel-specific adapter quirks. *(Ranked by severity)*
1.  **[CRITICAL] Signal Log Leak & Key Material Exposure:** `libsignal` debug logging prints sensitive session/key material to standard logs. Fix proposed in [PR #2860](https://github.com/nanocoai/nanoclaw/pull/2860).
2.  **[HIGH] WhatsApp Group Encryption Silent Failures:** Group replies silently fail due to caching hook issues in Baileys. Fix proposed in [PR #2870](https://github.com/nanocoai/nanoclaw/pull/2870).
3.  **[HIGH] Skill Update Silent No-op:** Running `/update-skills` on an installed channel skips refreshing adapter code and pinned dependencies, leaving users stranded on old versions. Reported in [Issue #2868](https://github.com/nanocoai/nanoclaw/issues/2868). No fix PR yet.
4.  **[MEDIUM] Discord Attachment Parsing:** Inbound attachments expose only URLs and never reach the agent in a readable format. Fix proposed in [PR #2752](https://github.com/nanocoai/nanoclaw/pull/2752).
5.  **[LOW] Telegram Markdown Rendering:** Legacy sanitizers conflict with the new MarkdownV2 adapter. Fix proposed in [PR #2866](https://github.com/nanocoai/nanoclaw/pull/2866).

## 6. Feature Requests & Roadmap Signals
The issue tracker and PR queue signal a clear roadmap push toward **self-management and autonomous session recovery**. 
*   **Session Rotation:** Three separate PRs ([#2864](https://github.com/nanocoai/nanoclaw/pull/2864), [#2865](https://github.com/nanocoai/nanoclaw/pull/2865)) were opened to rotate stale provider sessions on "ceiling-kill" or age thresholds, strongly hinting that the next version will feature robust, unattended long-running agent execution.
*   **Auto-Registration:** [Issue #1275](https://github.com/nanocoai/nanoclaw/issues/1275) requests that the bot auto-register and send a prompt when added to new Telegram groups, rather than silently failing. This indicates a desire for better out-of-the-box UX for non-technical users deploying the bot.

## 7. User Feedback Summary
Users are heavily utilizing NanoClaw across diverse messaging platforms, but they are encountering friction at the boundaries between the core engine and third-party platform APIs (like Baileys and Discord's chat-sdk bridge). There is slight dissatisfaction regarding migration documentation (e.g., instructions to "re-run `/add-<channel>`" failing due to [Issue #2868](https://github.com/nanocoai/nanoclaw/issues/2868)). However, user satisfaction remains high regarding the project's extensibility, as evidenced by contributors actively building custom skills and operational commands rather than merely requesting them from core maintainers. 

## 8. Backlog Watch
*   **[Issue #1275](https://github.com/nanocoai/nanoclaw/issues/1275) (Auto-prompt registration):** Created in mid-March, this highly practical UX improvement has sat unanswered for over 3 months. As multi-channel deployment scales, this feature becomes critical to prevent user confusion.
*   **[PR #2752](https://github.com/nanocoai/nanoclaw/pull/2752) (Discord Attachment Fix):** Opened two weeks ago, this fix for unreadable Discord attachments is a vital blocker for agents that rely on ingesting images or pasted text. It needs a maintainer review and merge to restore full Discord functionality.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the structured project digest for NullClaw based on the provided GitHub data.

# NullClaw Project Digest
**Date:** 2026-06-27

### 1. Today's Overview
The NullClaw project is currently experiencing a period of low development activity, with zero pull requests merged, closed, or updated in the last 24 hours, and no new releases published. The repository shows minimal immediate engagement, with only one issue updated recently. However, a deeper look at the issue tracker reveals an ongoing, highly specific technical discussion that has sustained community interest over several months. Overall project health appears static from a code contribution standpoint, though the project maintains a dedicated user base actively testing edge-case environments.

### 2. Releases
*No new releases or version tags have been published recently. The project remains on its latest tracked state.*

### 3. Project Progress
No direct project progress was made today in the form of merged pull requests, closed issues, or new code commits. The development pipeline is currently empty, with no active PRs awaiting review or merge. 

### 4. Community Hot Topics
The primary focal point of the community today is an ongoing compilation bug in non-standard environments. 
*   **[Issue #868](https://github.com/nullclaw/nullclaw/issues/868) [OPEN]**: Authored by `NOTJuangamer10` on 2026-04-23, this issue has accumulated 3 comments and was last updated on 2026-06-26. 
*   **Underlying Needs**: The sustained activity on this issue highlights a strong user demand for NullClaw to be easily compiltable and fully functional on mobile and lightweight ARM architectures (specifically Android/Termux). Users want to deploy or interact with NullClaw directly from mobile devices without requiring traditional desktop server environments.

### 5. Bugs & Stability
*   **[HIGH] Compilation Access Denied on Android/Termux** - **[Issue #868](https://github.com/nullclaw/nullclaw/issues/868)**
    *   **Details:** Running `zig build -Doptimize=ReleaseSmall` fails on Android (LineageOS 22.2 / aarch64) via Termux, throwing an `AccessDenied` error when attempting to link a temporary file via `linkat` in `options.zig`.
    *   **Status:** No fix PRs currently exist. The bug remains open and unresolved. This completely blocks deployment for mobile/Termux users.

### 6. Feature Requests & Roadmap Signals
While no explicit feature requests were filed in the last 24 hours, the bug report in Issue #868 serves as a strong roadmap signal. The core maintainers should consider prioritizing **cross-platform build compatibility**, specifically ensuring that the Zig build scripts properly handle file system permissions and temporary directory structures inherent to Android/Termux sandboxes. Fixing this could implicitly unlock a "mobile deployment" use-case for NullClaw.

### 7. User Feedback Summary
User feedback currently centers around the pain points of edge-case deployments. 
*   **Pain Points:** The Zig build system's interaction with Termux file permissions is a major blocker. 
*   **Use Cases:** Users are actively trying to run optimized (`ReleaseSmall`) AI agent instances locally on smartphones (e.g., Xiaomi Redmi Note 9). 
*   **Satisfaction:** There is mild frustration regarding the lack of an immediate workaround, but the detailed bug reporting shows a highly technical, invested user base willing to troubleshoot.

### 8. Backlog Watch
The following item requires immediate maintainer attention as it represents the only active issue but has seen slow resolution:
*   **[Issue #868](https://github.com/nullclaw/nullclaw/issues/868)**: Open since April 2026, this Android compilation bug has lingered in the backlog for over two months. Because it is a hard blocker for Termux users and lacks a linked Pull Request, maintainers should triage this issue to determine if it is a flaw in NullClaw's build configuration or an upstream limitation of the Zig compiler on Android.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the project digest for IronClaw based on the provided GitHub data.

# IronClaw Project Digest — 2026-06-27

## 1. Today's Overview
The IronClaw project is exhibiting exceptionally high development velocity, characterized by the rapid merging of foundational architectural PRs and intensive dogfooding of the "Reborn" stack. Over the last 24 hours, the team processed 50 PRs (merging 15) and triaged 33 issues, indicating a massive engineering push. Activity is heavily dominated by core contributors (like `serrrfirat`, `henrypark133`, and `zetyquickly`) who are closing out long-standing structural refactors, while simultaneous stress-testing has uncovered a cluster of critical UI/UX bugs in the upcoming Reborn Web UI. Overall project health is robust but transitioning through a high-friction stabilization phase.

## 2. Releases
*(No finalized GitHub releases were published in the last 24 hours. However, PR [#5311](https://github.com/nearai/ironclaw/pull/5311) indicates an automated release is actively in progress).*
**Upcoming Version Bumps (via PR #5311):**
*   `ironclaw_common`: 0.4.2 -> 0.5.0 (**⚠️ API breaking changes**)
*   `ironclaw_skills`: 0.3.0 -> 0.4.0 (**⚠️ API breaking changes**)
*   `ironclaw`: 0.24.0 -> 0.29.1
*   `ironclaw_safety`: 0.2.2 -> 0.2.3 (API compatible)

## 3. Project Progress
Massive architectural milestones were achieved today, particularly regarding security, multi-tenancy, and engine architecture:
*   **Security & Dispatch Authority:** Hardened core dispatch mechanics by sealing authority via `AuthorizedDispatchRequest` in [PR #3766](https://github.com/nearai/ironclaw/pull/3766). 
*   **Multi-Tenancy & Isolation:** Delivered contract tests for multi-tenant isolation ([PR #3890](https://github.com/nearai/ironclaw/pull/3890)) and introduced a lean host `NoExposureGuard` to prevent data leaks across boundaries ([PR #3767](https://github.com/nearai/ironclaw/pull/3767)).
*   **Engine v2 & Configuration-as-Code (CaC):** Advanced Engine v2 capabilities with CodeAct host shims ([PR #2854](https://github.com/nearai/ironclaw/pull/2854)) and reshaped the RebornRuntime surface to prepare for tenant blueprints ([PR #3703](https://github.com/nearai/ironclaw/pull/3703)).
*   **Migration Tooling:** Shipped a unified `ironclaw migrate` CLI to streamline transitions from legacy systems like OpenClaw and Hermes ([PR #2728](https://github.com/nearai/ironclaw/pull/2728)).

## 4. Community Hot Topics
*   **Tool Approval Loops & Friction:** The most actively discussed issues center around tool execution permissions. Users are highly engaged in troubleshooting persistent state failures, such as "always allow" not auto-approving subsequent calls ([Issue #5331](https://github.com/nearai/ironclaw/issues/5331)) and duplicate authorization flows breaking the chat experience ([Issue #5196](https://github.com/nearai/ironclaw/issues/5196), [Issue #5283](https://github.com/nearai/ironclaw/issues/5283)).
*   **Scheduled Automation Reliability:** Developers are actively testing IronClaw's autonomous task capabilities. Issues like automations failing with "No thread attached" ([Issue #5276](https://github.com/nearai/ironclaw/issues/5276)) and runner lease expirations ([Issue #5323](https://github.com/nearai/ironclaw/issues/5323)) show the community pushing the boundaries of background agent execution.

## 5. Bugs & Stability
*   **[Critical] Chat Blocking from Tool Approvals:** Unresolved tool approval dialogs in one conversation completely block message sending in other conversations until a manual refresh occurs. ([Issue #5302](https://github.com/nearai/ironclaw/issues/5302) - Reborn Web UI).
*   **[High] Automation Creation Failures:** Multiple reports indicate that automations are highly unreliable, frequently timing out ([Issue #5322](https://github.com/nearai/ironclaw/issues/5322)), aborting post-planning ([Issue #5320](https://github.com/nearai/ironclaw/issues/5320)), or failing completely in scheduled runs ([Issue #5276](https://github.com/nearai/ironclaw/issues/5276)).
*   **[Medium] Wasm OAuth Initialization:** Fresh OAuth setups for wasm channels fail to seed auth descriptors, causing an initialization deadlock. ([Issue #5337](https://github.com/nearai/ironclaw/issues/5337)).
*   **[Medium] Security Test Gating:** A structural gating bug auto-enables forward-feature gates, accidentally running deferred-work tests like `memory_write_to_soul_md`. ([Issue #5332](https://github.com/nearai/ironclaw/issues/5332)).

## 6. Feature Requests & Roadmap Signals
*   **Smarter Tool Defaults:** A request to flip "Always allow eligible tools" to default ON aims to reduce out-of-the-box friction for new users ([Issue #5364](https://github.com/nearai/ironclaw/issues/5364)).
*   **Advanced Multi-Identity Browsing:** Epic [#2355](https://github.com/nearai/ironclaw/issues/2355) tracks a major upcoming capability: persistent, multi-identity browser automation via Chrome + CDP, allowing the agent to maintain encrypted profiles and navigate/authenticate on behalf of the user.
*   **Admin-Shared Tools & Capability Policy:** Epic [#5261](https://github.com/nearai/ironclaw/issues/5261) outlines a major roadmap signal for enterprise users—a four-dimension capability model enabling per-user auth and admin-scoped tool control, currently being actively developed in PRs [#5349](https://github.com/nearai/ironclaw/pull/5349) and [#5355](https://github.com/nearai/ironclaw/pull/5355).

## 7. User Feedback Summary
Real-world testing (via Railway CI Previews and PinchBench/ClawBench) reveals a mixed satisfaction environment. Users are thrilled by the rapid architectural leaps and automation potential, but frustrated by UI jank and agent loop failures. Pain points include the agent attempting to use unrelated tools when a target tool is disabled ([Issue #5197](https://github.com/nearai/ironclaw/issues/5197)), misleading error messages hiding actual `invalid_input` failures ([Issue #5289](https://github.com/nearai/ironclaw/issues/5289)), and confusing UI states where failure logs attach to the wrong chat turns ([Issue #5227](https://github.com/nearai/ironclaw/issues/5227)) or the composer lags ([Issue #5333](https://github.com/nearai/ironclaw/issues/5333)).

## 8. Backlog Watch
*   **Nightly E2E Pipeline Failures:** The automated Nightly E2E run has failed ([Issue #4108](https://github.com/nearai/ironclaw/issues/4108)) and requires immediate attention from CI/CD owners to unblock reliable testing.
*   **Massive Dependency Group Update:** [PR #5271](https://github.com/nearai/ironclaw/pull/5271) is an XL-sized, high-risk dependabot bump updating 45+ Rust crates simultaneously. It risks stalling the merge queue if not carefully reviewed or split up.
*   **Benchmark & Harness Debt:** Core contributors have flagged a growing backlog of harness fixes required for optimal benchmarking with `deepseek-v4-flash` ([Issue #5221](https://github.com/nearai/ironclaw/issues/5221)) and general test-harness stale fixes ([Issue #5329](https://github.com/nearai/ironclaw/issues/5329)).

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the project digest for LobsterAI based on the provided GitHub data.

# 📊 LobsterAI Project Digest 
**Date:** 2026-06-27

### 1. Today's Overview
LobsterAI is demonstrating highly active and healthy development, driven primarily by recent significant runtime and infrastructure upgrades. The project shipped a major release yesterday (`2026.6.26`), which successfully merged 8 Pull Requests focused on upgrading the internal OpenClaw runtime and refining the multi-agent cowork experience. While the development team is aggressively closing older stale issues and pushing new features, the community reported a critical stability bug in the desktop client regarding data backups. Overall, project momentum is strongly positive, though immediate attention is needed for recently surfaced high-severity bugs.

### 2. Releases
**[LobsterAI 2026.6.26](https://github.com/netease-youdao/LobsterAI/releases)** (Released 2026.6.26)
*   **Core Upgrades:** Upgraded the OpenClaw runtime to `v2026.6.1` from `v2026.4.14`, including necessary runtime patches, plugin upgrades, and build script updates.
*   **New Features:** Added a new "plan mode" workflow for multi-agent collaboration (Cowork).
*   **UI & Integrations:** Fixed and supported upgraded IM (Instant Messaging) plugin instances.
*   *Migration Note:* Users utilizing custom IM plugins or relying heavily on the Cowork architecture should test their workflows to ensure compatibility with the new OpenClaw runtime.

### 3. Project Progress
Development velocity was exceptionally high, with 8 PRs successfully merged into the main branch. Key advancements include:
*   **Multi-Agent Cowork Stabilization:** Fixed progress tracking for subagents ([PR #2207](https://github.com/netease-youdao/LobsterAI/pull/2207)) and froze duration metrics for terminal subagents so they no longer inflate runtime estimates ([PR #2208](https://github.com/netease-youdao/LobsterAI/pull/2208)).
*   **UI & Renderer Fixes:** Resolved issues with Mermaid diagram rendering by validating syntax and preventing error SVGs from leaking into the DOM ([PR #2210](https://github.com/netease-youdao/LobsterAI/pull/2210), [PR #2213](https://github.com/netease-youdao/LobsterAI/pull/2213)).
*   **UX Improvements:** Stabilized the prompt tools skill search popover, ensuring the submenu remains open while typing ([PR #2212](https://github.com/netease-youdao/LobsterAI/pull/2212), [PR #2213](https://github.com/netease-youdao/LobsterAI/pull/2213)).
*   **Code Quality:** Sorted test imports for final patch decision tests to maintain linting standards ([PR #2211](https://github.com/netease-youdao/LobsterAI/pull/2211)).

### 4. Community Hot Topics
*   **[Issue #1462](https://github.com/netease-youdao/LobsterAI/issues/1462) (Closed):** A highly supported feature request from April asking for the ability for each agent to individually bind to specific models, as well as a formal multi-agent collaboration capability (e.g., a "manager" agent directing other agents in a room). The user explicitly noted that LobsterAI's interaction experience is already superior to competitor "hiclaw". *Underlying need: Users want deeper orchestration and model routing flexibility for complex workflows.*

### 5. Bugs & Stability
*   🔴 **High Severity:** [Issue #2214](https://github.com/netease-youdao/LobsterAI/issues/2214) - Desktop "Data Backup" causes the main process to freeze (Not Responding). 
    *   *Context:* 100% reproducible on Windows 11 (version 2026.6.1). The app completely hangs when attempting to backup a 71.6 MB SQLite database (WAL mode) to a local drive, forcing users to kill the process via Task Manager. 
    *   *Status:* **No fix PR exists yet.** This needs immediate maintainer attention as it blocks a core data safety feature for heavy daily users.
*   🟡 **Medium Severity (UI/Artifacts):** Mermaid rendering errors leaking raw SVG error codes into the document. 
    *   *Status:* **Fixed** in [PR #2210](https://github.com/netease-youdao/LobsterAI/pull/2210) and [PR #2213](https://github.com/netease-youdao/LobsterAI/pull/2213).

### 6. Feature Requests & Roadmap Signals
Based on the latest release and community feedback, the clear roadmap signal is **Advanced Multi-Agent Orchestration**. 
*   The integration of "plan mode workflow" in the latest release shows the dev team is actively building the manager/subagent routing requested by users in Issue #1462. 
*   *Prediction for next version:* Given the recent focus on subagent tracking ([PR #2207](https://github.com/netease-youdao/LobsterAI/pull/2207) & [PR #2208](https://github.com/netease-youdao/LobsterAI/pull/2208)), the next iteration will likely feature a visual UI dashboard for this multi-agent "room" concept, alongside the ability to assign distinct LLMs to distinct agents.

### 7. User Feedback Summary
*   **Praise:** Users highly value the multi-instance capabilities for IM channels introduced in v4.3. The overall UX of the AI agents is considered superior to competing commercial products in the market.
*   **Pain Points:** Heavy users (hundreds of daily messages) are experiencing significant I/O blocking issues during local database operations (specifically backups). Additionally, users desire more granular control over LLM model assignment rather than using a global default.

### 8. Backlog Watch
*   **[Issue #2214](https://github.com/netease-youdao/LobsterAI/issues/2214) (Database Backup Freeze):** Brand new but highly critical. Needs immediate investigation into `better-sqlite3` WAL file locking and UI thread blocking during migrations.
*   **[Issue #1462](https://github.com/netease-youdao/LobsterAI/issues/1462) & [PR #1459](https://github.com/netease-youdao/LobsterAI/pull/1459):** Both were created in early April and sat in an open/stale state until yesterday's cleanup. While #1459 (Skill hover tooltips) was merged, the core request for "per-agent model binding" in #1462 is a recurring community desire that has not yet been explicitly addressed in a PR.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest (2026-06-27)

Here is the structured daily digest for the Moltis open-source project based on GitHub data metrics.

### 1. Today's Overview
Moltis is currently experiencing a period of low-intensity, focused development, with minimal administrative or community noise. Over the last 24 hours, project activity has been extremely concentrated, featuring zero new issues and exactly one open Pull Request. There were no bug reports or version releases, suggesting a stable codebase or a quiet period in community engagement. However, the single open PR indicates that core contributors are actively working on refining the agent's browser interaction capabilities.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
*No Pull Requests or Issues were merged or closed today.* However, a new feature implementation was introduced in an open PR:
*   **Browser State Visibility:** The project is actively advancing its browser automation UX. A new PR introduces automated visual feedback for browser-based actions, which will allow AI agents to build a more robust timeline of visual context. (See PR #1135).

### 4. Community Hot Topics
Given the absence of new issues and active discussions, the primary focus of the community today revolves around a single development update:
*   **[PR #1135: browser: optional auto-screenshot after each action](https://github.com/moltis-org/moltis/pull/1135)** by `resumeparseval` (0 reactions).
    *   **Underlying Needs:** This PR addresses a critical need for observability in AI web browsing. When agents interact with web pages, debugging failed actions or understanding the AI's "view" of the page can be difficult. By capturing screenshots at the single dispatch chokepoint (`BrowserManager::execute_action`), this feature enables chat clients to render step-by-step visual timelines, greatly enhancing agent transparency and debuggability.

### 5. Bugs & Stability
*No bugs, crashes, or regressions were reported in the last 24 hours.* The issue tracker remains clear of new defects, indicating stable current performance.

### 6. Feature Requests & Roadmap Signals
While no formal feature requests were submitted by the community today, the open PR provides a strong signal regarding the near-term roadmap:
*   **Signal - Enhanced Agent Observability:** The push for per-step screenshot timelines suggests the next iteration of Moltis will prioritize multi-modal context and debugging tools. Allowing chat clients to seamlessly render agent actions visually is a stepping stone to more reliable autonomous web browsing agents. 

### 7. User Feedback Summary
*No direct user feedback, satisfaction metrics, or pain points were recorded today.* With 0 issues opened, there is no new quantitative or qualitative data regarding user friction. 

### 8. Backlog Watch
*No long-unanswered issues or stalled PRs have triggered alerts today.* The repository's issue and PR backlog appears to be well-managed or naturally quiet, with current development effort strictly focused on pushing new features (like PR #1135) through the review pipeline.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for CoPaw (QwenPaw) based on the provided GitHub data for 2026-06-27.

### 1. Today's Overview
The CoPaw (QwenPaw) project is exhibiting **explosive activity and rapid iteration**, heavily focused on stabilizing its recent **v2.0.0-beta.1** release. The community is highly engaged, generating 30 updated issues and 50 active PRs in the last 24 hours alone, with a healthy ratio of merged PRs (24) indicating active maintainer involvement. Much of today's engineering effort is dedicated to fixing post-migration regressions from AgentScope 2.x, specifically targeting plugin compatibility, memory management, and UI bugs. Overall project health is robust, though the backend migration has introduced edge-case instabilities that are actively being triaged.

### 2. Releases
*   **[v2.0.0-beta.1: v2.0.0-beta.1](https://github.com/agentscope-ai/CoPaw/releases/tag/v2.0.0-beta.1)**
    *   **Status:** Early Beta (Intended for developers and early adopters only; not recommended for production).
    *   **Changes:** Includes a major architectural refactor (`refactor: migrate agent`) transitioning the core backend to AgentScope 2.x (which now utilizes ReMe4 for memory management).
    *   **Migration Notes/Breaking Changes:** The migration breaks all 5 official plugins (tool-type plugins and CloudPaw bundle) and fundamentally rewrites the memory manager. Users will need to wait for plugin updates before upgrading if they rely on the official plugin ecosystem.

### 3. Project Progress
The development team and community contributors merged 24 PRs today, making substantial progress on UI, desktop app stability, and backend refactoring:
*   **AgentScope 2.0 Cleanup & Compatibility:** 
    *   [PR #5440](https://github.com/agentscope-ai/CoPaw/pull/5440): Cleaned up post-merge bugs from the AgentScope 2.0 migration (removed redundant `CancelledError` swallowing, deleted ~1493 lines of legacy code).
    *   [PR #5568](https://github.com/agentscope-ai/CoPaw/pull/5568) (Open): Actively fixing the 5 official plugins failing to install on v2.0 due to breaking changes.
*   **Desktop App Optimizations:** 
    *   [PR #5153](https://github.com/agentscope-ai/CoPaw/pull/5153): Replicated Tauri's instant-window startup to the pywebview client, eliminating a 10-30s blank screen on launch.
    *   [PR #5569](https://github.com/agentscope-ai/CoPaw/pull/5569): Introduced a two-phase seamless loading experience (tkinter splash screen) to permanently eliminate startup white screens.
*   **Frontend & UI Enhancements:**
    *   [PR #5436](https://github.com/agentscope-ai/CoPaw/pull/5436): Enabled drag-and-drop file upload directly onto the chat sender area.
    *   [PR #5297](https://github.com/agentscope-ai/CoPaw/pull/5297): Added batch test and batch delete functionalities for models in the provider management dialog.

### 4. Community Hot Topics
The most highly debated items revolve around agent UX friction and native model compatibility:
*   **Message Spam & Aggregation ([Issue #5563](https://github.com/agentscope-ai/CoPaw/issues/5563)):** With 5 comments in 24 hours, users are highly frustrated by multi-step agent tasks flooding the chat interface with fragmented message cards. *Underlying need:* A cleaner, aggregated UI for complex agent workflows. (Actively addressed in [PR #5577](https://github.com/agentscope-ai/CoPaw/pull/5577)).
*   **Disabled Built-in Skills Re-enabling on Upgrade ([Issue #5262](https://github.com/agentscope-ai/CoPaw/issues/5262)):** A 12-comment thread showing persistent user frustration that upgrading overrides their preferences (e.g., re-enabling unused `docx`/`xlsx` skills), posing risks of accidental tool calls.
*   **Third-Party LLM Compatibility (DeepSeek & OpenAI endpoints):** Multiple issues (e.g., [Issue #5573](https://github.com/agentscope-ai/CoPaw/issues/5573), [Issue #5472](https://github.com/agentscope-ai/CoPaw/issues/5472)) highlight failures when using OpenAI-compatible relays for models like GLM-5.x and DeepSeek V4, specifically regarding schema parsing and reasoning content streaming.

### 5. Bugs & Stability
Several critical regressions and bugs have been reported, many tied to the v2.0 beta or v1.1.12:
1.  **Critical: Desktop App Resource Exhaustion / Fork-Bomb ([Issue #5550](https://github.com/agentscope-ai/CoPaw/issues/5550)):** The Remote SSH plugin dependency installation loops infinitely without a lock, stacking `pip install` and backend processes, eventually exhausting system memory.
    *   *Fix Status:* Fix submitted in [PR #5570](https://github.com/agentscope-ai/CoPaw/pull/5570).
2.  **High: Chrome Renderer Memory Leak ([Issue #5520](https://github.com/agentscope-ai/CoPaw/issues/5520)):** `browser_use stop()` fails to kill Chrome/Chromium processes, leaving orphaned renderers (~150-210MB each) that accumulate over cycles.
    *   *Fix Status:* Fix submitted in [PR #5536](https://github.com/agentscope-ai/CoPaw/pull/5536).
3.  **High: DeepSeek V4 Thinking Mode 400 Errors ([Issue #5573](https://github.com/agentscope-ai/CoPaw/issues/5573)):** DeepSeek V4 throws 400 errors on OpenAI-compatible endpoints due to missing streaming `reasoning_content` fallbacks and un-sanitized `null` types in tool schemas.
    *   *Fix Status:* Partly addressed by [PR #5549](https://github.com/agentscope-ai/CoPaw/pull/5549) (sanitizing nullable tool schemas).
4.  **Medium: Enterprise WeCom File Handling Interruption ([Issue #5554](https://github.com/agentscope-ai/CoPaw/issues/5554)):** Sending a file via WeCom downloads the file locally but triggers a channel restart, interrupting agent processing and resulting in no reply.

### 6. Feature Requests & Roadmap Signals
Based on recent issues and PRs, the immediate roadmap leans heavily into **UX refinement, multi-agent collaboration, and enterprise integration**:
*   **Model Auto-Fallback ([Issue #5572](https://github.com/agentscope-ai/CoPaw/issues/5572)):** Users want automatic switching to backup models if the primary model hits a quota, fails, or times out. *Prediction: Highly likely to be integrated into the v2.0.0 stable release core.*
*   **Advanced Multi-Agent Notification Controls ([Issue #5564](https://github.com/agentscope-ai/CoPaw/issues/5564)):** Request for `@mention` support in DingTalk via CLI/API to trigger specific agents in multi-agent group chat scenarios.
*   **Native Computer Use ([Issue #5551](https://github.com/agentscope-ai/CoPaw/issues/5551)):** Direct user inquiry about implementing Computer Use (GUI interaction) capabilities.
*   **Slack Integration ([Issue #5152](https://github.com/agentscope-ai/CoPaw/issues/5152)):** Persistent request for a native Slack channel integration.

### 7. User Feedback Summary
**General Sentiment:** Mixed but optimistic. Users love the deep functionality (desktop apps, multi-channel support, plugins) but are experiencing growing pains with UI fluidity and the v2.0 migration.
*   **Pain Point - "Hanging" UX:** Users report that the UI feels "stuck" or "frozen" during long file generations or multi-step tasks because the UI doesn't stream tool arguments or aggregate messages smoothly ([Issue #4865](https://github.com/agentscope-ai/CoPaw/issues/4865), [Issue #5555](https://github.com/agentscope-ai/CoPaw/issues/5555)).
*   **Pain Point - Agentic Reliability:** Background tasks like Cron and Heartbeat are prone to silent failures, hard-coded timeouts ([Issue #5539](https://github.com/agentscope-ai/CoPaw/issues/5539)), or loop infinitely on empty agent outputs ([Issue #5566](https://github.com/agentscope-ai/CoPaw/issues/5566)).
*   **Positive Use Cases:** The desktop app (M5 Max Mac environment) is heavily used for local file parsing and remote SSH operations. The recent UI betas ([PR #5515](https://github.com/agentscope-ai/CoPaw/pull/5515)) are eagerly anticipated to solve layout and rendering bugs.

### 8. Backlog Watch
The following items require immediate attention from project maintainers:
*   **Missing PyPI Dependency ([Issue #5556](https://github.com/agentscope-ai/CoPaw/issues/5556)):** Installing from the latest source fails because `reme-ai 0.4.0.4` is not published on PyPI. This completely blocks developer setup and needs a release/publish action.
*   **Console Rendering Crashes on Large Tool Histories ([Issue #5401](https://github.com/agentscope-ai/CoPaw/issues/5401)):** Console frontend completely crashes (white screen) when opening chats with large tool-use histories due to a `type: "data"` vs `type: "tool_use"` mismatch between backend API and frontend components.
*   **Advanced Context Management ([PR #5321](https://github.com/agentscope-ai/CoPaw/pull/5321)):** A substantial first-time contributor PR proposing a "scroll" context-management strategy using durable SQLite history and REPL recall. It has been under review for a week and requires maintainer feedback to proceed.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the project digest for ZeroClaw on June 27, 2026.

### 1. Today's Overview
ZeroClaw is experiencing a highly active and healthy development cycle, driven by the recent launch of v0.8.2 and heavy preparation for the v0.8.3 milestone. The community is highly engaged in governance and architectural RFCs, particularly concerning supply chain security, multi-tenancy, and overhauling the channel adapters. With 48 open issues and 39 active PRs updated in the last 24 hours, maintainers are processing a massive influx of feature implementations and regression tests. The project's current focus is clearly split between hardening security postures (WASM, signing, tool isolation) and expanding agent-to-agent / human-to-agent communication channels. 

### 2. Releases
**v0.8.2** ([Release Notes](https://github.com/zeroclaw-labs/zeroclaw/releases))
*   **Core Changes:** Introduced **A2A (Agent-to-Agent) discovery** for better interoperability and expanded the **Skills** system to support user-configured extra registries and typed slash-command options.
*   **Security:** Sharpened the security posture across plugins and channels.

### 3. Project Progress
*   **Telemetry & Observability:** Fixed an issue where CLI one-shot runs lost telemetry and token totals on exit ([PR #8146](https://github.com/zeroclaw-labs/zeroclaw/pull/8146)).
*   **Supply Chain Transparency:** Added CycloneDX SBOM (Software Bill of Materials) generation for Rust and npm packages to enhance security tracking ([PR #8158](https://github.com/zeroclaw-labs/zeroclaw/pull/8158)).
*   **Test Coverage Expansion:** The community merged a wave of test-only PRs to lock in current behaviors, including tests for channel wildcard matchers ([PR #8299](https://github.com/zeroclaw-labs/zeroclaw/pull/8299)), Discord custom ID escaping ([PR #8300](https://github.com/zeroclaw-labs/zeroclaw/pull/8300)), provider aliases ([PR #8241](https://github.com/zeroclaw-labs/zeroclaw/pull/8241)), and hardware serial paths ([PR #8245](https://github.com/zeroclaw-labs/zeroclaw/pull/8245)).
*   **CI/Release Pipeline Fixes:** Repaired Nix builds and automated hash updates ([PR #8336](https://github.com/zeroclaw-labs/zeroclaw/pull/8336)), fixed documentation deploy failures related to version tagging ([PR #8344](https://github.com/zeroclaw-labs/zeroclaw/pull/8344)), and unified release artifacts via the canonical feature registry ([PR #8343](https://github.com/zeroclaw-labs/zeroclaw/pull/8343)).

### 4. Community Hot Topics
*   **Supply Chain Security Overhaul:** The most active discussion centers around an RFC for hardened CI pipelines, proposing hardware-backed PGP keys, multi-party quorums, hermetic builds, and SLSA provenance ([Issue #8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)). This indicates a mature, enterprise-driven user base demanding verifiable security.
*   **Project Governance:** An ongoing, heavily commented RFC regarding Work Lanes, Board Automation, and Label Cleanup shows the team is actively restructuring how community contributions are triaged and routed ([Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)).
*   **Pre-Submission Gates:** A proposal for a local `zerocode` pre-submission gate ([Issue #8078](https://github.com/zeroclaw-labs/zeroclaw/issues/8078)) is gaining traction, showing a community desire to shift CI testing left and reduce build failures on the main repository. 

### 5. Bugs & Stability
*   **[S0 / Critical] Confused Deputy Vulnerability:** `execute_pipeline` currently bypasses per-agent tool gating, authorizing sub-tool steps globally instead of checking agent-specific policies ([Issue #7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947)). 
*   **[S0 / Critical] Quickstart UI Bug:** Adding the Anthropic provider via Quickstart makes it unavailable in the chat window until a manual reset occurs, causing immediate onboarding friction ([Issue #8094](https://github.com/zeroclaw-labs/zeroclaw/issues/8094)).
*   **[S2 / Degraded] Silent Security No-op:** `mcp_bundles` are parsed and shown in the config but never actually enforced at runtime, leaving per-agent MCP scoping completely insecure ([Issue #7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733)).
*   **[S2 / Degraded] Localization Data Leak:** A bug in `fill-translations` leaves stale map entries, accidentally re-shipping leaked text via `write_po` ([Issue #8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312)).
*   **[S2 / Degraded] Runtime Routing:** Channel turns are ignoring runtime-profile `strict` and `parallel` tool flags ([Issue #7809](https://github.com/zeroclaw-labs/zeroclaw/issues/7809)).

### 6. Feature Requests & Roadmap Signals
The newly created **v0.8.3 Trackers** ([Issue #8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071) and [#8362](https://github.com/zeroclaw-labs/zeroclaw/issues/8362)) explicitly outline the immediate roadmap: runtime execution stability, daemon reliability, and channel adapter parity. 
Expected to land in the next cycle:
*   **Goal Mode ([Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)):** A durable mode for pursuing a user objective until completion or budget exhaustion.
*   **Specialist Delegation ([Issue #8238](https://github.com/zeroclaw-labs/zeroclaw/issues/8238)):** Independent delegate mode for agents to hand off tasks under their own policy/toolset.
*   **Session Auto-Truncation ([Issue #8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134)):** Implementing `session_ttl_hours` to truncate stale history and reduce token consumption in channels like Slack/Telegram.
*   **ACP Bridge Improvements:** Moving away from fragile one-time-use pairing codes for local bridges ([Issue #6754](https://github.com/zeroclaw-labs/zeroclaw/issues/6754)) and fully implementing ACP elicitation for multiple-choice prompts ([PR #8338](https://github.com/zeroclaw-labs/zeroclaw/pull/8338)).

### 7. User Feedback Summary
Users are actively pushing ZeroClaw into complex, multi-platform enterprise environments, leading to pain points around multi-tenancy and UI consistency. For instance, users operating specialized agents via different channels need isolated environments and custom variables per-agent, which the current config struggles with ([Issue #8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)). On the UX side, developers on macOS report confusing and unreachable keybindings in the ZeroCode TUI ([Issue #7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800)), and there is a strong desire to manage gateway upgrades and supervised restarts directly from the web dashboard rather than the CLI ([Issue #8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170)). 

### 8. Backlog Watch
*   **SkillForge Orphaning:** An auto-discovery engine for skills merged months ago is completely disconnected from the running daemon. Maintainers need to decide whether to wire it up safely or remove it entirely ([Issue #8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309)).
*   **WASM-First Plugin Migration:** A massive architectural RFC to eliminate Node.js from the build and runtime, replacing it with a default-on WebAssembly runtime, is currently blocked and awaiting maintainer review ([Issue #8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135), [Issue #8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)).
*   **Telegram Channel Bug:** A workflow-blocking bug where the Telegram bot ignores direct replies unless explicitly mentioned has been open since April and requires attention ([Issue #5866](https://github.com/zeroclaw-labs/zeroclaw/issues/5866)).

</details>