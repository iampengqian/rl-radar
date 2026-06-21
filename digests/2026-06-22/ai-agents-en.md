# OpenClaw Ecosystem Digest 2026-06-22

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-21 22:22 UTC

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

Here is the structured project digest for OpenClaw based on the provided GitHub data for June 22, 2026.

### 1. Today's Overview
OpenClaw is currently experiencing an exceptionally high volume of community engagement, with nearly 1,000 issues and pull requests updated in the last 24 hours. However, the project is exhibiting signs of severe bottlenecking, maintaining an overwhelming ratio of open to closed items (482 open / 18 closed issues; 491 open / 9 closed PRs). The project is in active development amidst a series of rapid monthly releases, but recent updates—particularly the `v2026.6.9` release—have introduced critical state and messaging regressions. Maintainers need to address a growing backlog of P1 bugs related to core agent stability, as user frustration over silent message loss and session crashes is escalating.

### 2. Releases
Two new releases were published recently, with `v2026.6.9` acting as the latest stable baseline:
*   **v2026.6.10-beta.1**: Focuses heavily on agent reliability, preserving pending subagent completion announcements, keeping chat history transcripts non-empty, and resolving compaction model aliases consistently. 
*   **v2026.6.9**: Introduced richer Telegram delivery (HTML rendering, markdown preservation, normalized tables). 
    *   *Migration/Breaking Note:* **High friction reported.** Issue [#95495](https://github.com/openclaw/openclaw/issues/95495) reveals that `v2026.6.9` silently relocates the memory store (`~/.openclaw/memory/main.sqlite` to `~/.openclaw/agents/...`) without a migration tool, forcing a full re-embedding of user databases with zero upgrade warning.

### 3. Project Progress
Progress today was largely focused on architecting fixes for high-security boundaries and agent message delivery pipelines, though very few PRs successfully landed. 
*   **CLI & UI Fixes:** PR [#95559](https://github.com/openclaw/openclaw/pull/95559) resolved a major UX issue where browsers would hold a stale service worker after an update, causing persistent "Protocol Mismatch" errors. PR [#95581](https://github.com/openclaw/openclaw/pull/95581) fixed a transient NPM metadata bug that blocked plugin updates.
*   **Architecture Advancements:** Several massive PRs (Size: XL) are advancing the roadmap, including PR [#93680](https://github.com/openclaw/openclaw/pull/93680) introducing node-anchored turn routing ("My Browser"), and PR [#95132](https://github.com/openclaw/openclaw/pull/95132) which aggressively trims the core bundled skills set from 57 directories down to 14 to streamline the core footprint. 

### 4. Community Hot Topics
The community is highly active, with discussions centered heavily around Telegram delivery issues, subagent orchestration, and context compaction failures.
*   **Telegram Duplicate Replies:** Issue [#86519](https://github.com/openclaw/openclaw/issues/86519) (10 comments) highlights a regression where agents send identical replies 2-10x per message on Telegram following the May updates.
*   **Compaction Timeouts:** Issue [#92043](https://github.com/openclaw/openclaw/issues/92043) (8 comments) discusses a massive design flaw where a 180s compaction timeout acts as a single wall clock over the entire pipeline with zero partial-progress reuse, causing legitimate long summaries to hard-fail.
*   **Topic-Session Families:** Feature request [#90916](https://github.com/openclaw/openclaw/issues/90916) (7 comments) gained traction, asking for multiple named topic lanes with isolated recent transcript context while sharing durable memory—showing a strong enterprise/multi-project user need.

### 5. Bugs & Stability
Stability remains the project's weakest point, with multiple P1 data-loss and crash-loop regressions reported across various channels:
1.  **[P1] Silent Memory Migration / Data Loss:** [#95495](https://github.com/openclaw/openclaw/issues/95495) - 2026.6.9 relocates memory store with no migration path, forcing 1,499 files to be re-embedded. *(Fix Status: None)*
2.  **[P1] Session Write-Lock Timeouts:** [#86538](https://github.com/openclaw/openclaw/issues/86538) - JSONL write-lock timeouts block main, cron, and subagent lanes, causing delivery failures. *(Fix Status: Partially addressed in beta)*
3.  **[P1] Telegram Silent Crash Loop:** [#93375](https://github.com/openclaw/openclaw/issues/93375) - Transient network timeouts cause the Telegram polling worker to silently exit; the health monitor restarts it, but it instantly dies again. *(Fix Status: None)*
4.  **[P1] Codex Tool Relay CPU Stall:** [#91009](https://github.com/openclaw/openclaw/issues/91009) - Codex app-server tool calls spawn multiple CPU-bound `openclaw-hooks` processes, stalling gateway RPCs. *(Fix Status: Fix PR [#95611](https://github.com/openclaw/openclaw/pull/95611) proposed)*
5.  **[P1] Active Memory Cache Collapse:** [#91223](https://github.com/openclaw/openclaw/issues/91223) - Active memory injection breaks prompt cache hit rates, dropping them from 99.9% to 22%, resulting in severe latency and cost spikes. *(Fix Status: None)*

### 6. Feature Requests & Roadmap Signals
Based on recent PRs and highly rated issues, the short-term roadmap signals a shift toward tighter IDE/Provider integrations and robust memory management:
*   **Agent-Assisted Onboarding:** PR [#93265](https://github.com/openclaw/openclaw/pull/93265) introduces a streamlined setup, indicating a push to lower the barrier to entry for new users.
*   **Discord Subagent Visibility:** PR [#95604](https://github.com/openclaw/openclaw/pull/95604) adds visible subagent progress to Discord, addressing user feedback about long-running tasks appearing idle.
*   **Guardrails for Pre-Compaction:** Issue [#90354](https://github.com/openclaw/openclaw/issues/90354) requests bounded/validated append semantics for memory flushes. Expect memory aggregation limits to land in the next stable release to prevent the currently reported oversized/noisy writes.

### 7. User Feedback Summary
Users are expressing significant frustration with the fragility of long-running agent sessions. Specifically, DevOps and enterprise users are complaining about regressions in cross-platform deployment, such as Windows scheduled task daemon failures ([#91144](https://github.com/openclaw/openclaw/issues/91144)) and hard-coded launchd paths hiding vital stderr logs on macOS ([#90711](https://github.com/openclaw/openclaw/issues/90711)). The overarching sentiment is that while the agent's cognitive capabilities and channel integrations are expanding, the foundational infrastructure (session locks, memory compaction, and gateway stability) is eroding, leading one user to abandon their DigitalOcean droplet entirely due to poor UX and silent cron wake failures ([#88087](https://github.com/openclaw/openclaw/issues/88087)).

### 8. Backlog Watch
*   **Long-Standing Regressions:** Issue [#67915](https://github.com/openclaw/openclaw/issues/67915) (opened in April) regarding local assistant attachments showing as "Unavailable" despite correct server configs remains unresolved and is marked `stale`.
*   **Embedding Index Metadata Loss:** Issue [#90414](https://github.com/openclaw/openclaw/issues/90414) has been awaiting maintainer live-reproduction since June 4th. `agentmemory__memory_search` persistently fails with missing index metadata, completely breaking memory recall for affected users.
*   **Stale Gateway Lanes:** PR [#89045](https://github.com/openclaw/openclaw/pull/89045), which fixes group chat sessions stuck in `failed` status silently dropping all subsequent inbound messages, has been waiting on the author/maintainer since June 1st and urgently needs merging to improve core chat reliability.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the June 22, 2026 community digests.

# Open-Source AI Agent Ecosystem Cross-Project Report
**Date:** 2026-06-22

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently experiencing a massive paradigm shift from simple conversational interfaces toward highly autonomous, multi-platform execution frameworks. Projects are rapidly differentiating into two distinct tiers: comprehensive, enterprise-grade orchestrators handling complex workflows (OpenClaw, ZeroClaw, IronClaw) and specialized, lightweight agents focused on constrained environments or specific UI paradigms (ZeptoClaw, NullClaw, CoPaw). A unifying theme across the ecosystem is the aggressive adoption of the Model Context Protocol (MCP) for standardized tool integration, alongside a systemic struggle to maintain core stability—specifically regarding memory management, context compression, and session state locking—amidst rapid feature accumulation. 

## 2. Activity Comparison
*Health Score is graded A-F based on PR/issue throughput, bug responsiveness, and release stability.*

| Project | Active Issues (24h) | Active PRs (24h) | Recent Releases | Project Health Score | Key Bottleneck / Risk |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~1,000 (482 open) | ~500 (491 open) | `v2026.6.9`, `v2026.6.10-beta.1` | **D (Bottlenecked)** | Severe backlog; multiple P1 data-loss and crash bugs. |
| **NanoBot** | 10 | 33 (14 merged) | None | **A (Healthy)** | DeepSeek API compatibility; gateway race conditions. |
| **Hermes Agent** | 50 | 50 | None | **A- (Stabilizing)** | MCP Zombie processes; Desktop boot loops (fixes pending). |
| **ZeroClaw** | 37 | 50 (2 merged) | None | **B+ (Hyper-active)** | S1 Workflow blockers (tool loops, OAuth failures). |
| **CoPaw** | 15 | 28 | None | **B (Unstable)** | UI/Session lockups; DeepSeek "thinking" hangs. |
| **IronClaw** | N/A | 27 (14 merged) | None | **A- (Maturing)** | Nightly E2E CI flakiness; Rust network SSL hiccups. |
| **PicoClaw** | 5 | 4 | Nightly (`v0.3.0`) | **A (Stable)** | CLI parsing bugs; continuous token consumption. |
| **NanoClaw** | 4 | 6 (3 merged) | None | **B (Vulnerable)** | Zero-day A2A security flaws (symlinks, MCP smuggling). |
| **LobsterAI** | 15 (14 stale) | 0 | None | **D (Stalled)** | Critical SSRF security bypass ignored; zero PRs. |
| **ZeptoClaw** | 1 | 1 (1 merged) | None | **A+ (Rock Solid)** | Extreme size constraints limiting feature additions. |
| **NullClaw** | 1 | 0 | None | **F (Abandoned)** | >50% failure rate on core API calls; no dev activity. |
| *TinyClaw / Moltis*| 0 | 0 | None | *N/A* | No recent activity. |

## 3. OpenClaw's Position
**Advantages vs. Peers:**
OpenClaw remains the undeniable anchor of the ecosystem regarding sheer scale and capability, boasting the highest community engagement (nearly 1,500 updates in 24h). It features advanced architectural work that peers are only beginning to approach, such as node-anchored turn routing and complex subagent orchestration. Its integrations are vast, supporting a heavy suite of messaging platforms and IDE integrations out-of-the-box.

**Technical Approach Differences:**
Unlike NanoBot or CoPaw, which are heavily optimizing for web/mobile UI responsiveness, OpenClaw is pushing the boundaries of deep backend infrastructure (memory write-locks, compaction timeouts, CLI subagent delivery). However, unlike ZeroClaw and IronClaw, which are building robust CI gates (WASM plugins, binary size limits, Rust concurrency schedulers), OpenClaw's CI and release pipeline is currently failing to catch P1 regressions before stable releases.

**Community Size Comparison:**
While OpenClaw dwarfs projects like PicoClaw and ZeptoClaw in raw user numbers, its massive community has become a bottleneck. Smaller, agile projects like NanoBot and Hermes Agent are currently out-pacing OpenClaw in bug resolution velocity and stable architectural iterations.

## 4. Shared Technical Focus Areas
Several unified requirements are emerging across the ecosystem:
*   **MCP (Model Context Protocol) Integration & Security:** Almost every active project (NanoBot, Hermes Agent, PicoClaw, NanoClaw, OpenClaw) is dealing with MCP complexities. However, while NanoBot and Hermes are fixing MCP gateway crashes, NanoClaw and Hermes have exposed critical security flaws where MCP `args`/`env` variables can be hidden from users, or stdio servers cause zombie processes.
*   **Context & Memory Management:** As agents handle longer sessions, traditional JSONL and SQLite setups are failing. OpenClaw, NanoBot, and ZeroClaw are all actively implementing eager memory consolidation, strict pre-compaction guardrails, and tool-based memory recall to prevent context window explosions and token waste.
*   **Model Failovers & Provider Parity:** There is a strong push to support Chinese LLM providers (DeepSeek, Zhipu) without breaking native tool calling. CoPaw, NanoBot, and NullClaw all report critical API parsing failures when handling DeepSeek's "thinking" states or null content streams.
*   **Autonomous/Background Triggers:** Cron scheduling and heartbeat models are maturing. NanoBot, IronClaw, and Hermes Agent are all pushing for granular background processing (e.g., cheaper LLM routing for heartbeats, one-shot scheduled triggers).

## 5. Differentiation Analysis
*   **Enterprise & Multi-Platform Heavyweights (OpenClaw, Hermes Agent):** Focus on deep integrations across IM platforms (Telegram, Discord, Matrix, Feishu). Emphasis is on bridging text/E2EE communications to complex agent workflows.
*   **Performance & Infrastructure Innovators (IronClaw, ZeroClaw):** Heavily invested in Rust/WASM architectures, strict CI constraints, and robust concurrency schedulers. They target developers needing high durability and enterprise-grade deployment (PostgreSQL, OIDC, Hosted Single-Tenant).
*   **UI/UX & Consumer-Facing Agents (CoPaw, LobsterAI):** Heavily focused on responsive web panels, mobile-first design, and human-centric features like tagging, bookmarking, and dashboard visualizations.
*   **Edge & Niche Deployments (ZeptoClaw, PicoClaw):** ZeptoClaw strictly optimizes for constrained hardware (enforcing a 7.5MB binary limit). PicoClaw is carving out a niche in privacy-focused networks (SimpleX, Tox) and local iOS/FreeBSD deployments.

## 6. Community Momentum & Maturity
*   **Tier 1: Rapidly Iterating & Maturing (NanoBot, Hermes Agent, IronClaw, ZeroClaw):** These projects show high PR throughput paired with active bug triage. They are actively paying down technical debt (e.g., IronClaw's massive CI refactors, ZeroClaw recovering lost commits, Hermes fixing desktop boot loops).
*   **Tier 2: Feature-Frozen for Stabilization (CoPaw):** CoPaw has explicitly hit a wall where the community is demanding a feature freeze to fix fundamental stability and provider compatibility issues before proceeding.
*   **Tier 3: Bottlenecked / Eroding (OpenClaw, LobsterAI, NullClaw):** OpenClaw is buckling under its own scale, pushing rapid releases that break core functionality (memory migrations). LobsterAI and NullClaw show signs of maintainer abandonment, marked by automated stale-issue closures and critical unpatched security/performance bugs.

## 7. Trend Signals
*   **Security Paradigm Shift to A2A:** As agents begin communicating with each other, the attack surface is shifting from prompt injection to system-level exploits. NanoClaw's discovery of symlink escapes in A2A forwarding and MCP approval smuggling is a critical warning for the industry.
*   **Dynamic Model Routing for Cost Control:** Cost efficiency is paramount. Projects are moving away from static global model assignments toward dynamic LLM routing based on task complexity (e.g., Hermes' dynamic "thinking mode" toggles, NanoBot's heartbeat-specific cheap model overrides).
*   **The "Stable Cron" Milestone:** Scheduled autonomous actions are becoming a baseline requirement for enterprise digital employees rather than a novelty. Robust cron state management (preventing duplicate launches) is a highly competitive feature among mature frameworks.
*   **Value for Developers:** The data signals that building on top of foundational agents like OpenClaw carries high technical debt right now. Developers seeking stability for production workloads should currently pivot to actively maintained, smaller-scope frameworks like NanoBot or Rust-based architectures like IronClaw/ZeroClaw that enforce strict CI and memory safety.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest (2026-06-22)

## 1. Today's Overview
NanoBot exhibits **highly active and robust development** as of June 22, 2026, driven by a strong open-source community. In the last 24 hours, the project processed 33 Pull Requests (merging/closing 14) and updated 10 Issues. The development focus is heavily concentrated on hardening Model Context Protocol (MCP) security, fixing provider streaming edge-cases, and expanding integration capabilities (like Telegram's new API). The high PR throughput alongside zero new releases indicates an ongoing stabilization and feature-accumulation phase, likely preparing for a future major version bump.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Project Progress
The maintainers successfully merged/closed 14 PRs, making significant advancements in stability and developer experience:
*   **Voice & Audio Processing:** [PR #4316](https://github.com/HKUDS/nanobot/pull/4316) was merged, introducing a comprehensive Text-to-Speech (TTS) configuration system with multi-provider support (OpenAI, Groq, ElevenLabs).
*   **Configuration & Deployment Hardening:** Three critical fixes by `tobrien` resolved environment variable template (`${VAR}`) resolution bugs in transcription and WebUI settings ([PR #4323](https://github.com/HKUDS/nanobot/pull/4323), [PR #4324](https://github.com/HKUDS/nanobot/pull/4324), [PR #4325](https://github.com/HKUDS/nanobot/pull/4325)), preventing silent API failures during deployment.
*   **Token & Performance Optimization:** [Issue #4420](https://github.com/HKUDS/nanobot/issues/4420) was closed, addressing a redundant `tiktoken` encoding bottleneck in `estimate_prompt_tokens` that caused significant latency in downstream digital employee applications.
*   **Concurrency Safety:** [Issue #4408](https://github.com/HKUDS/nanobot/issues/4408) was resolved, fixing a race condition where `Nanobot.run()` per-run hooks were not concurrency-safe.

## 4. Community Hot Topics
The community is actively contributing to extending NanoBot's communication channels and context management capabilities:
*   **Rich Messaging Support:** [Issue #4413](https://github.com/HKUDS/nanobot/issues/4413) and [PR #4422](https://github.com/HKUDS/nanobot/pull/4422) generated significant discussion regarding the implementation of Telegram Bot API 10.1's `sendRichMessage`. Users are clearly eager for native rendering of complex markdown elements like tables and task lists.
*   **Advanced Memory Recall:** [PR #4439](https://github.com/HKUDS/nanobot/pull/4439) (and [Issue #4440](https://github.com/HKUDS/nanobot/issues/4440)) proposes a read-only `search_history` tool. This addresses a core limitation in current personal AI assistants: the inability to dynamically query older, out-of-context conversations stored in `history.jsonl` without bloating the active token window.
*   **Self-Hosting Demand:** A highly upvoted, older request for a Mattermost bot integration ([Issue #1011](https://github.com/HKUDS/nanobot/issues/1011)) continues to see activity. The underlying need highlights a strong user base focused on privacy-first, self-hosted enterprise deployments.

## 5. Bugs & Stability
Several critical bugs were reported today, with the community immediately stepping up to provide fixes:

1.  **[CRITICAL] MCP Security Bypass:** Two related advisories, [Issue #4434](https://github.com/HKUDS/nanobot/issues/4434) and [Issue #4435](https://github.com/HKUDS/nanobot/issues/4435), reveal that the MCP `enabledTools` allowlist/deny-all policy is bypassed for resources and prompts. This leaks unintended server capabilities directly to the LLM.
    *   *Fix Status:* Addressed in [PR #4436](https://github.com/HKUDS/nanobot/pull/4436).
2.  **[HIGH] Streamed Session Bricking:** [Issue #4442](https://github.com/HKUDS/nanobot/issues/4442) reports that duplicate `tool_use` IDs in streamed Anthropic responses permanently brick a session with a 400 API error. 
    *   *Fix Status:* Addressed in [PR #4443](https://github.com/HKUDS/nanobot/pull/4443).
3.  **[HIGH] MCP Gateway Crash:** A `RuntimeError` occurs when an MCP server session terminates and attempts to reconnect, crashing the gateway due to `anyio` task group scope violations.
    *   *Fix Status:* Addressed in [PR #4441](https://github.com/HKUDS/nanobot/pull/4441).

## 6. Feature Requests & Roadmap Signals
Based on recent Issue/PR activity, we predict the following will be prioritized for the next major release cycle:
*   **Granular Background Processing:** [Issue #4431](https://github.com/HKUDS/nanobot/issues/4431) requests a heartbeat-specific model override (e.g., using a cheaper LLM for the heartbeat service). Combined with [PR #4225](https://github.com/HKUDS/nanobot/pull/4225) (adding silent mode for cron jobs) and [PR #4437](https://github.com/HKUDS/nanobot/pull/4437) (heartbeat trigger commands), NanoBot is evolving into a highly autonomous, cost-efficient background agent.
*   **Mid-Turn Message Injection:** [PR #4397](https://github.com/HKUDS/nanobot/pull/4397) improves agent responsiveness by forcing the LLM to acknowledge new user messages injected during long tool-execution cycles.
*   **Optimized Memory Consolidation:** [PR #4402](https://github.com/HKUDS/nanobot/pull/4402) introduces opt-in eager memory consolidation, signaling a shift toward more sophisticated, asynchronous session memory management.

## 7. User Feedback Summary
Overall user satisfaction remains high, particularly praising the framework's extensibility. However, developers building on top of NanoBot have highlighted a few pain points:
*   **Latency Overhead:** Downstream developers building "digital employees" noted significant latency due to inefficient token counting ([Issue #4420](https://github.com/HKUDS/nanobot/issues/4420)), showing a need for heavier performance profiling in agent loops.
*   **DeepSeek Compatibility:** Developers using Chinese LLM providers like DeepSeek continue to report brittle API interactions, specifically regarding null content handling and string sanitization ([PR #3869](https://github.com/HKUDS/nanobot/pull/3869)).
*   **WebUI Workflow Constraints:** Users want better ways to display static information without triggering LLM calls, leading to community-driven workarounds for read-only sessions ([PR #4271](https://github.com/HKUDS/nanobot/pull/4271)).

## 8. Backlog Watch
The following significant community contributions require maintainer review or merging:
*   **[PR #4092](https://github.com/HKUDS/nanobot/pull/4092) - OpenAI-compatible tool call parsing:** A crucial fix for handling duplicate provider IDs and parsing text-format `<tool_call>` blocks. Open since late May, this needs priority review as it affects core tool-execution stability.
*   **[PR #3869](https://github.com/HKUDS/nanobot/pull/3869) - DeepSeek message hardening:** Addresses critical 400 errors caused by null content fields. As DeepSeek usage grows, this hardening is vital for the Asian AI market.
*   **[Issue #1011](https://github.com/HKUDS/nanobot/issues/1011) - Mattermost Bot Request:** Open since February with 4 upvotes, this reflects a persistent demand for native integrations tailored to privacy-conscious and enterprise self-hosters.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the project digest for Hermes Agent based on the GitHub data from 2026-06-22.

### 1. Today's Overview
The Hermes Agent project is exhibiting a highly active and healthy development velocity, processing 50 issues and 50 pull requests in the last 24 hours. The maintainers and community are heavily focused on triaging bugs and stabilizing the gateway and desktop UI, as evidenced by the high volume of recently closed P1 and P2 issues. There is also a strong push to harden the Model Context Protocol (MCP) integration and fix ecosystem regressions carried over from OpenClaw. With 42 open PRs currently under review, the project's immediate trajectory is heavily biased toward reliability, security, and platform compatibility. 

### 2. Releases
No new releases were tracked in this 24-hour window.

### 3. Project Progress
Development today was defined by rapid bug fixing and UI consistency improvements. Key merged/closed PRs include:
*   **CLI & Markdown Rendering:** PR [#50436](https://github.com/NousResearch/hermes-agent/pull/50436) improved CLI prompt labels and markdown paragraph flow, while PR [#46729](https://github.com/NousResearch/hermes-agent/pull/46729) fixed Telegram rich-message status notices.
*   **Platform Stability:** PR [#50398](https://github.com/NousResearch/hermes-agent/pull/50398) fixed Windows Node/npm resolution fallbacks, and PR [#48900](https://github.com/NousResearch/hermes-agent/pull/48900) introduced per-chat rich message fallback for Telegram. 
*   **Skill Management:** PR [#50433](https://github.com/NousResearch/hermes-agent/pull/50433) advanced the tooling capabilities by allowing canonical external skill precedence over local directories.
*   **TUI Fixes:** PR [#50440](https://github.com/NousResearch/hermes-agent/pull/50440) fixed the TUI current working directory (cwd) recording bug that caused broken workspace grouping.

### 4. Community Hot Topics
*   **E2EE Security Bypass in Matrix:** Issue [#45500](https://github.com/NousResearch/hermes-agent/issues/45500) garnered significant attention. Users discovered that while file attachments properly check `state_store.is_encrypted()`, text messages do not, resulting in unencrypted texts being sent in E2EE Matrix rooms. This highlights a critical need for stricter default security pathways in messaging bridges.
*   **Missing Messaging Platforms:** Issue [#8950](https://github.com/NousResearch/hermes-agent/issues/8950) (with 2 👍) remains a focal point for users migrating from OpenClaw, requesting the addition of Google Chat, IRC, LINE, Nostr, and others currently unsupported by Hermes.
*   **Per-Platform Model Configuration:** Issue [#14327](https://github.com/NousResearch/hermes-agent/issues/14327) (2 👍) emphasizes the community's desire for granular AI routing. Users want to assign lighter/cheaper models to platforms like Feishu, rather than relying on global defaults or manual per-session overrides.

### 5. Bugs & Stability
Stability issues today were dominated by gateway crashes and desktop boot failures, though many fixes are already in the pipeline:
*   **[P1] Desktop Boot Loop / Freeze (FIXED):** Users reported the desktop app freezing at 94% or completely crashing to a white screen due to session recovery 404s ([#49609](https://github.com/NousResearch/hermes-agent/issues/49609)) and gateway respawns ([#50209](https://github.com/NousResearch/hermes-agent/issues/50209), [#50090](https://github.com/NousResearch/hermes-agent/issues/50090)). This is addressed by PR [#50445](https://github.com/NousResearch/hermes-agent/pull/50445), which stops lazy SDK installs for unconfigured platforms.
*   **[P2] MCP Zombie Processes & Subsystem Destabilization:** Issue [#50169](https://github.com/NousResearch/hermes-agent/issues/50169) reported accumulating orphaned MCP stdio server processes. Furthermore, Issue [#50394](https://github.com/NousResearch/hermes-agent/issues/50394) noted that a single failing MCP server creates a restart storm that breaks healthy servers. 
*   **[P2] Kanban Auto-Decompose Rogue Execution:** Issue [#49638](https://github.com/NousResearch/hermes-agent/issues/49638) is a severe functional bug where the Kanban plugin autonomously decomposed a prompt about "deleting a server" and actually began executing destructive cleanup without permission. (Fix pending in PR [#50443](https://github.com/NousResearch/hermes-agent/pull/50443)).

### 6. Feature Requests & Roadmap Signals
*   **Dynamic LLM Thinking Toggles:** Issues [#50293](https://github.com/NousResearch/hermes-agent/issues/50293) and [#50240](https://github.com/NousResearch/hermes-agent/issues/50240) request a self-escalation mechanism. The agent should self-detect task complexity and dynamically toggle deep-reasoning/thinking mode on/off per turn to save expensive API tokens.
*   **Runtime-Enforced Verification Gates:** Issue [#44637](https://github.com/NousResearch/hermes-agent/issues/44637) requests moving away from prompt-level skill verifications (in `SKILL.md`) to hard, runtime-enforced verification gates for deterministic, high-stakes tasks.
*   *Prediction:* Given the immediate push to clean up the MCP infrastructure (resolving zombie processes) and the large amount of CLI/Desktop boot fixes processed today, the next minor version release will likely be a dedicated "MCP & Desktop Stability" patch.

### 7. User Feedback Summary
**Pain Points:** Windows and macOS native users are extremely frustrated by installation friction and boot-looping desktop apps. Furthermore, advanced users relying on external routing layers are hitting walls with Hermes' static model routing and missing API server adapter overrides ([#16216](https://github.com/NousResearch/hermes-agent/issues/16216)).
**Satisfaction:** Despite the bugs, users are highly engaged and utilizing Hermes in complex, multi-platform production setups (e.g., Discord, Feishu, WhatsApp, Matrix). The rapid turnaround time on P1 bugs—such as the WhatsApp bridge crashing on bare phone numbers ([#8637](https://github.com/NousResearch/hermes-agent/issues/8637))—shows a highly responsive maintainer team, which keeps community sentiment generally positive.

### 8. Backlog Watch
*   **PR [#41478](https://github.com/NousResearch/hermes-agent/pull/41478) (Open since June 7):** Fixes `/goal` state drift across context-compression sessions. Context compression is a sensitive core subsystem, and this PR needs a maintainer review to prevent memory/state loss in long-running agents.
*   **PR [#49351](https://github.com/NousResearch/hermes-agent/pull/49351) (High Risk):** A P1 fix for Nous Portal access token resilience. Tagged with `risk-session-state` and `risk-security-boundary`, this complex auth fix is lingering and causing fallback churn for users.
*   **Issue [#20140](https://github.com/NousResearch/hermes-agent/issues/20140) (Open since May 5):** Feature request to allow opt-in `send_message` tools for Cron jobs. Currently, the cron runner hard-disables the messaging toolset, heavily restricting autonomous scheduled announcements—a use case highly requested by enterprise users.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the structured project digest for PicoClaw based on the provided GitHub data.

# PicoClaw Project Digest
**Date:** 2026-06-22
**Repository:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

### 1. Today's Overview
PicoClaw is demonstrating active and steady development momentum as it progresses through its `v0.3.0` development cycle, marked by today's automated nightly build. The project maintains healthy community engagement, with 5 issues and 4 pull requests updated within the last 24 hours. Bug triaging and closure rates are stable (2 issues and 1 PR closed), reflecting responsive maintainer oversight. However, several newly surfaced bugs indicate that recent feature expansions—such as AI Evolution and MCP (Model Context Protocol) integration—are introducing configuration complexities for end-users. Overall, project health appears robust, balancing new automated releases with necessary stabilization efforts.

### 2. Releases
*   **[nightly: Nightly Build](https://github.com/sipeed/picoclaw/releases/tag/nightly)** (v0.3.0-nightly.20260621.287853ab)
    *   **Details:** Automated nightly build cut from the `main` branch. Standard warning applies: automated builds may be unstable and should be used with caution in production environments.

### 3. Project Progress
Developers merged a targeted bug fix today while advancing usability enhancements and frontend maintenance.
*   **[PR #2565](https://github.com/sipeed/picoclaw/pull/2565) [CLOSED/MERGED]**: Fixed a configuration bug where `GroupTriggerConfig.MentionOnly` was being silently overwritten to `false` due to Go's `omitempty` struct tag behavior. This ensures that explicit `mention_only=false` configurations are preserved.
*   **[PR #3152](https://github.com/sipeed/picoclaw/pull/3152) [OPEN]**: Improved the UX of the CLI by adding installation instructions directly into the `picoclaw skills search` output.
*   **[PR #3103](https://github.com/sipeed/picoclaw/pull/3103) & [PR #3105](https://github.com/sipeed/picoclaw/pull/3105) [OPEN]**: Routine frontend dependency maintenance, bumping `typescript-eslint` and `eslint`.

### 4. Community Hot Topics
Community activity highlights a strong demand for diverse messaging gateways and deeper AI tooling integration.
*   **[Issue #3012](https://github.com/sipeed/picoclaw/issues/3012) [OPEN]** (5 comments): A highly active discussion regarding continuous token consumption when the AI "Evolution" feature is enabled in Draft mode. This indicates users are actively testing advanced agentic behaviors but running into cost-control anxieties.
*   **[Issue #3093](https://github.com/sipeed/picoclaw/issues/3093) [OPEN]** (2 comments, 1 reaction): A request for SimpleX, Wire, or Tox gateways. This signals that PicoClaw is attracting privacy-conscious users and self-hosters who prioritize decentralized and encrypted communication networks.

### 5. Bugs & Stability
Recent updates reveal a few notable stability issues, mostly concentrated around parsing, web UI compatibility, and background processes:
1.  **High Severity - AI Process Loop:** [Issue #3012](https://github.com/sipeed/picoclaw/issues/3012) - Continuous consumption of tokens every minute when Evolution is enabled. *No explicit fix PR yet.* This is high severity as it directly costs users money/API credits.
2.  **Medium Severity - MCP Parsing Broken:** [Issue #3041](https://github.com/sipeed/picoclaw/issues/3041) - The `mcp add` command mis-parses global flags into positionals due to `DisableFlagParsing`, which breaks http/sse additions and misnames stdio servers.
3.  **Medium Severity - Group Trigger Config:** [Issue #2565](https://github.com/sipeed/picoclaw/pull/2565) - `mention_only=false` failed to work due to JSON unmarshaling quirks. *(Status: **FIXED** in today's merged PR).*
4.  **Low/Medium Severity - Legacy iOS Safari Support:** [Issue #3090](https://github.com/sipeed/picoclaw/issues/3090) - Web panel is broken on iOS versions below 16.4.
5.  **Low Severity - Matrix Config Parsing:** [Issue #3044](https://github.com/sipeed/picoclaw/issues/3044) - `allow_from` fails for Matrix user IDs containing colons (`@user:domain`). *(Status: **FIXED/CLOSED**).*

### 6. Feature Requests & Roadmap Signals
*   **Privacy-Focused Gateways:** Users are explicitly asking for integrations like SimpleX and Tox ([Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)). Integrating privacy-centric messaging platforms could be a strong strategic differentiator for PicoClaw.
*   **MCP & Skills CLI UX:** Both an open bug ([Issue #3041](https://github.com/sipeed/picoclaw/issues/3041)) and an open PR ([PR #3152](https://github.com/sipeed/picoclaw/pull/3152)) indicate that managing MCPs and "Skills" via the CLI is currently friction-heavy. Streamlining this workflow is highly likely to be a priority for the upcoming `v0.3.0` stable release.

### 7. User Feedback Summary
Users are deploying PicoClaw in diverse environments, ranging from FreeBSD to Raspberry Pi OS. A significant pain point is silent configuration failures—for example, the CLI ignoring parameters for MCPs ([Issue #3041](https://github.com/sipeed/picoclaw/issues/3041)) or Matrix user IDs being rejected due to colon parsing ([Issue #3044](https://github.com/sipeed/picoclaw/issues/3044)). Furthermore, users experimenting with autonomous agent features (Evolution mode) are experiencing "silent" operational costs via runaway token consumption ([Issue #3012](https://github.com/sipeed/picoclaw/issues/3012)). While satisfaction with the project's breadth of features is high, the UI/UX feedback loops (preventing silent misconfigurations) need tightening.

### 8. Backlog Watch
The project currently has several items flagged as `[stale]` that require maintainer triage to either be officially closed or updated:
*   **[Issue #3090](https://github.com/sipeed/picoclaw/issues/3090) [stale]:** iOS Safari <16.4 bug. Maintainers need to decide if legacy iOS browser support is officially within scope.
*   **[Issue #3044](https://github.com/sipeed/picoclaw/issues/3044) [stale]:** Matrix colon parsing bug. Although marked closed/stale today, it was lingering for weeks.
*   **[PR #3103](https://github.com/sipeed/picoclaw/pull/3103) & [PR #3105](https://github.com/sipeed/picoclaw/pull/3105) [stale]:** Dependabot frontend dependency bumps. Standard automated PRs that need to be merged to keep the frontend secure.
*   **[PR #2565](https://github.com/sipeed/picoclaw/pull/2565) [stale]:** The Go `mention_only` config fix. It was merged today after sitting idle since April, suggesting PR review throughput might be slightly bottlenecked.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the structured project digest for NanoClaw based on the provided GitHub data.

### 1. Today's Overview
As of 2026-06-22, NanoClaw is exhibiting active development with a strong focus on hardening security and refining its containerized infrastructure. The community and maintainers are highly engaged, with 6 pull requests updated and 2 new critical security vulnerability reports filed in the last 24 hours. Activity suggests the project is in a stabilization phase, prioritizing the cleanup of peer-to-peer agent communication flaws and OS-level service lifecycle management over releasing new features. Overall project health appears robust, with contributors actively patching edge-case bugs in container networking and local service configurations.

### 2. Releases
*Omitted. No new releases were published in the last 24 hours.*

### 3. Project Progress
Today's progress was driven by routine maintenance and infrastructure fixes, with 3 PRs merged/closed and 3 new PRs opened.
*   **PR [#2168](https://github.com/nanocoai/nanoclaw/pull/2168)** (Closed): A long-standing fix for rootless Docker environments was finalized, pinning `host.docker.internal` to OneCLI's bridge IP instead of relying on `host-gateway`. 
*   **PR [#2825](https://github.com/nanocoai/nanoclaw/pull/2825)** (Closed): Fixed a race condition during setup where the "first chat" would fail because it pinged the host CLI socket before the host process finished booting.
*   **PR [#2829](https://github.com/nanocoai/nanoclaw/pull/2829)** (Closed): A guideline-following PR that appears to have been closed (likely rejected or merged as a minor cleanup).

### 4. Community Hot Topics
The most impactful topics today revolve around agent-to-agent (A2A) trust boundaries and dynamic tool integration safety.
*   **A2A Attachment Vulnerability (Issue [#2828](https://github.com/nanocoai/nanoclaw/issues/2828))**: A security advisory highlighted that a prompt-injected agent could symlink its `inbox/` directory, causing another agent to write files outside the target session root. This reveals a strong community need for strict, sandboxed filesystem boundaries between agents.
*   **MCP Server Approval Smuggling (Issue [#2827](https://github.com/nanocoai/nanoclaw/issues/2827))**: Reported that the `add_mcp_server` flow hides runtime `args` and `env` variables in the UI approval card. This shows users are heavily utilizing dynamic Model Context Protocol (MCP) integrations but require transparent, granular oversight of environment variables to prevent malicious self-modification by the AI.

### 5. Bugs & Stability
Several distinct bugs were reported today, ranging from high-severity security holes to lower-severity operational annoyances.
1.  **[High Severity] Symlink Escape in A2A Forwarding (Issue [#2828](https://github.com/nanocoai/nanoclaw/issues/2828))**: Allows agents to write outside session roots via symlinks. *No fix PR is currently visible.*
2.  **[High Severity] MCP Approval Smuggling (Issue [#2827](https://github.com/nanocoai/nanoclaw/issues/2827))**: Allows an agent to hide malicious environment variables when requesting to add an MCP server. *No fix PR is currently visible.*
3.  **[Medium Severity] Dead Peer Service Accumulation (PR [#2830](https://github.com/nanocoai/nanoclaw/pull/2830))**: Deleting a NanoClaw checkout without uninstalling leaves orphaned launchd/systemd services trying to launch missing binaries indefinitely. *Fix PR is currently open.*
4.  **[Low Severity] Setup Race Condition (PR [#2825](https://github.com/nanocoai/nanoclaw/pull/2825))**: First chat fails due to socket timing. *Fix PR was closed/completed today.*

### 6. Feature Requests & Roadmap Signals
Analyzing open PRs provides clear signals about the features users want and the immediate roadmap:
*   **CLI-Derived Dashboards (PR [#2795](https://github.com/nanocoai/nanoclaw/pull/2795))**: A community contribution to add a read-only `/add-clidash` skill, signaling a demand for better local observability and UI dashboards for agent states.
*   **Proactive Skill Updates (PR [#2826](https://github.com/nanocoai/nanoclaw/pull/2826))**: A user noticed that skill updates were buried as "optional" during host updates, risking users missing critical upstream fixes. This indicates a roadmap shift toward forced or more prominent notification systems for dependency updates.

### 7. User Feedback Summary
Real user pain points extracted from today's activity center around **local deployment fragility** and **update visibility**.
*   **Deployment Pain**: Users running NanoClaw in rootless Docker setups (PR [#2168](https://github.com/nanocoai/nanoclaw/pull/2168)) and macOS/Linux environments (PR [#2830](https://github.com/nanocoai/nanoclaw/pull/2830)) have struggled with networking mappings and OS service littering. 
*   **Update Fatigue**: The specific complaint that users "silently miss an important upstream fix to an installed skill" (PR [#2826](https://github.com/nanocoai/nanoclaw/pull/2826)) shows dissatisfaction with the current update confidence loop. Users want guarantees that their agent skills are fully patched when they run system updates.

### 8. Backlog Watch
*   **Security Advisories Need Triage**: Issues [#2827](https://github.com/nanocoai/nanoclaw/issues/2827) and [#2828](https://github.com/nanocoai/nanoclaw/issues/2828) currently have zero comments and zero reactions, indicating maintainers have not yet responded. These represent critical security flaws and require immediate attention and patching.
*   **Stalled Feature/Utility PRs**: PR [#2795](https://github.com/nanocoai/nanoclaw/pull/2795) (CLI Dashboard skill) has been open since June 17th and is still awaiting review or merging. PR [#2168](https://github.com/nanocoai/nanoclaw/pull/2168) sat in the backlog for nearly two months before being addressed today, suggesting a need for more community contribution review bandwidth.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-06-22

**Repository:** [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

### 1. Today's Overview
As of June 22, 2026, the NullClaw project is experiencing a period of low development activity, with zero pull requests merged and no new software releases. The repository shows no signs of active code contributions in the past 24 hours, though the community remains engaged in submitting bug reports. The current open issue count stands at 1 active ticket updated within the last day. Overall project momentum appears temporarily stalled at the code level, but user adoption and practical testing are clearly ongoing.

### 2. Releases
*Omitted. No new releases or version tags have been published recently.*

### 3. Project Progress
No visible project progress was made today in terms of code. There were 0 open pull requests and 0 merged pull requests in the last 24 hours. The development focus is currently maintenance-driven rather than feature expansion. 

### 4. Community Hot Topics
The most active community topic revolves around runtime stability on specific architectures. 

*   **[Issue #967](https://github.com/nullclaw/nullclaw/issues/967) - `[bug] error: NoResponseContent`** (Created: 2026-06-20, Comments: 1)
    *   **Analysis:** This report highlights a critical user need for reliability. The user is actively comparing NullClaw's performance and stability against alternative clients (like `picoclaude`). The underlying need here is for NullClaw to provide parity or better stability with popular APIs (like the Agnes-2.0-Flash model) to prevent user churn to competitor tools.

### 5. Bugs & Stability
Based on recent issues, here is the current stability landscape:

*   **High Severity:** [Issue #967](https://github.com/nullclaw/nullclaw/issues/967) - `NoResponseContent` Error.
    *   **Details:** Users on Windows 11 (using the pre-compiled `v2026.5.29` x86_64 build) are experiencing a high failure rate (>50%, 12 out of 21 conversations) when querying the `Agnes-2.0-Flash` model. The model takes ~27 seconds to respond but frequently throws a `NoResponseContent` error, heavily degrading the user experience. 
    *   **Status:** Currently open with no linked fix PRs.

### 6. Feature Requests & Roadmap Signals
While no explicit feature requests were filed in the last 24 hours, bug reports often signal roadmap needs. The high failure rate in Issue #967 signals a strong need for:
1.  **Robust API Error Handling/Retry Mechanisms:** The client should gracefully handle empty model responses rather than crashing or throwing hard errors.
2.  **Timeout Adjustments:** The 27-second response time suggests the client may be struggling with latency thresholds for heavier models. 

*Prediction:* The next version (potentially `v2026.6.x`) will likely include patches to HTTP response parsing and timeout configurations for third-party models.

### 7. User Feedback Summary
*   **Pain Points:** The primary frustration is inconsistent performance on the Windows desktop environment. Users expect a seamless CLI experience (`nullclaw agent -m`) but are encountering frequent execution failures (>50% of the time).
*   **Use Cases:** Users are utilizing NullClaw as a localized CLI AI agent on Windows, hooking it up to external/alternative models (Agnes-2.0-Flash).
*   **Satisfaction/Dissatisfaction:** Currently dissatisfied. The user explicitly noted that utilizing the exact same API key and model in `picoclaude` yields better results, indicating a client-side deficiency in NullClaw that is impacting user retention.

### 8. Backlog Watch
Maintainers need to address [Issue #967](https://github.com/nullclaw/nullclaw/issues/967) urgently. With a >50% failure rate on a mainstream operating system (Windows 11) using a widely adopted model, this bug severely impacts the core utility of the application. Without a swift response or patch, the project risks losing its user base to alternative open-source AI CLI tools.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest
**Date:** 2026-06-22

## 1. Today's Overview
The IronClaw project is currently experiencing a phase of high development velocity and intense infrastructure refinement, as evidenced by 27 pull requests updated in the last 24 hours. The core maintainers are heavily focused on hardening the "Reborn" runtime—specifically its CI pipeline, database durability, and concurrent execution capabilities. While 14 PRs were successfully merged, there is notable friction in the CI pipeline, highlighted by an ongoing nightly E2E test failure. Overall, project health appears strong but transitively complex, with maintainers actively paying down technical debt to support the platform's next generation of features.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Project Progress
Significant architectural and feature milestones were merged today, pushing the "Reborn" runtime closer to production readiness:
*   **Scheduled Triggers Shipped:** [PR #5065](https://github.com/nearai/ironclaw/pull/5065) introduced one-shot scheduled triggers (`TriggerSchedule::Once{at}`), enabling fire-once automations alongside recurring cron jobs.
*   **Channel Initialization Fixed:** [PR #2927](https://github.com/nearai/ironclaw/pull/2927) fixed a critical cold-boot bug where installed WASM channels stayed inactive if the setup wizard hadn't persisted them, wiring up `load_startup_active_channels` for first-run fallback.
*   **MCP State Projection:** [PR #4990](https://github.com/nearai/ironclaw/pull/4990) cleaned up the NEAR AI MCP ready state projection, centralizing host-managed extension identity for smoother onboarding.
*   **Massive CI Refactors:** Core contributor `serrrfirat` merged several CI optimizations, including consolidating Rust caches ([PR #5118](https://github.com/nearai/ironclaw/pull/5118)), adding crates.io retry logic ([PR #5115](https://github.com/nearai/ironclaw/pull/5115)), extracting platform compatibility workflows ([PR #5113](https://github.com/nearai/ironclaw/pull/5113)), and forcing the full 64-crate dependency closure to run on PRs ([PR #5110](https://github.com/nearai/ironclaw/pull/5110)). Additionally, Reborn E2E testing was officially added to the merge queue ([PR #4830](https://github.com/nearai/ironclaw/pull/4830)).

## 4. Community Hot Topics
*As comment counts were undefined in the raw data, activity is assessed by submission recency, authorship, and PR scope (size/complexity).*
*   **Hosted Single-Tenant Previews:** [PR #5081](https://github.com/nearai/ironclaw/pull/5081) (opened by `serrrfirat`) introduces a `hosted-single-tenant` Reborn profile using PostgreSQL. This indicates a major shift toward offering a narrow hosted preview path, retaining local-dev SSO and tool wiring but with durable control-plane state.
*   **Concurrent LLM Execution:** [PR #5085](https://github.com/nearai/ironclaw/pull/5085) (opened by `henrypark133`) attacks a major bottleneck in the Reborn runtime: strictly serial turn execution. It introduces a `TurnRunScheduler` with per-user/per-type caps to allow concurrent LLM inference without overloading the system. 
*   **Composio Integration for Workbench:** [PR #5109](https://github.com/nearai/ironclaw/pull/5109) by new contributor `abbyshekit` adds the Composio read-only and gated-write connector route. This fulfills a core need for populating the IronClaw Desktop Workbench with live data accounts.

## 5. Bugs & Stability
*   🔴 **[High Risk] Google OAuth Token Expiry (FIXED):** [Issue #5071](https://github.com/nearai/ironclaw/issues/5071) reported that Reborn users were being forced to reauthenticate GSuite credentials every hour. This was resolved and closed, with the system now proactively refreshing tokens using the durable Google refresh token.
*   🔴 **Nightly E2E Failures (UNRESOLVED):** [Issue #4108](https://github.com/nearai/ironclaw/issues/4108) tracks the failure of the scheduled Full E2E run (specifically the `extensions` job). This has been an open issue since late May and needs ongoing attention.
*   🟡 **CI Flakiness in Rust Crates:** Transient network/SSL hiccups from `crates.io` were reddening CI runs across the 64-crate closure. This was addressed today via [PR #5115](https://github.com/nearai/ironclaw/pull/5115) using `CARGO_NET_RETRY`.
*   🟡 **Stale Host Runtime Tests:** [PR #5112](https://github.com/nearai/ironclaw/pull/5112) cleared "test debt" in the `ironclaw_host_runtime`, fixing a stale profile test and a flaky scheduler log that were hidden because the old CI matrix didn't run them.

## 6. Feature Requests & Roadmap Signals
Based on today's open PRs and issues, the short-term roadmap heavily features **Agentic Automations** and **Hosted Infrastructure**:
*   **Automations UI Enhancements:** [Issue #5117](https://github.com/nearai/ironclaw/issues/5117) requests a "Completed" summary card with a server-side count to fill out the `/v2/automations` dashboard. This pairs with the newly shipped one-shot triggers.
*   **Memory & Learning Semantics:** [PR #4937](https://github.com/nearai/ironclaw/pull/4937) opens the door to a "learn from mistakes" system. It frames "learning" as a memory document with confidence scoring and an A/B gate, signaling a major upcoming capability for agent reliability.
*   **Dependency Upgrades:** A continuous stream of Dependabot PRs shows active maintenance of core libraries, notably the Tokio ecosystem ([PR #5114](https://github.com/nearai/ironclaw/pull/5114)) and general Rust updates ([PR #5116](https://github.com/nearai/ironclaw/pull/5116)).

## 7. User Feedback Summary
*   **Friction in Third-Party Auth:** The high-priority OAuth bug ([Issue #5071](https://github.com/nearai/ironclaw/issues/5071)) highlights that users actively rely on IronClaw for GSuite integrations and are highly sensitive to session interruptions.
*   **Desire for Better Operational Visibility:** The request for a "Completed" summary card ([Issue #5117](https://github.com/nearai/ironclaw/issues/5117)) indicates that users utilizing automations want clearer, server-side historical data on what the agent has executed, rather than just active or pending states.
*   **Need for Desktop Data Sync:** The Composio integration ([PR #5109](https://github.com/nearai/ironclaw/pull/5109)) points directly to user demand for the Desktop Workbench to natively display live, connected account data securely.

## 8. Backlog Watch
*   **[Issue #4108](https://github.com/nearai/ironclaw/issues/4108) - Nightly E2E failure:** Created on May 27th, this automated report is still open. While the team has drastically overhauled CI in the last 24 hours, explicit confirmation is needed to see if these refactors resolve the `extensions` E2E job failure.
*   **[PR #4002](https://github.com/nearai/ironclaw/pull/4002) - Bump the actions group:** Open since May 24th, this massive 16-package Dependabot update (which includes bumping `actions/checkout` from v4 to v7) needs review or closure to prevent security staleness in the GitHub Actions workflows.
*   **[PR #4032](https://github.com/nearai/ironclaw/pull/4032) - Bump the wasm group:** Open since May 25th. Given the heavy reliance on WASM channels (as seen in today's merged [PR #2927](https://github.com/nearai/ironclaw/pull/2927)), keeping `wit-component` and `wit-parser` up to date should be prioritized.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest (2026-06-22)

## 1. Today's Overview
LobsterAI experienced a high-volume maintenance day, resolving 14 issues with zero new pull requests or releases, indicating an automated or systematic backlog cleanup rather than active feature development. The vast majority of the closed issues were flagged as `[stale]`, addressing historical bug reports and UI/UX suggestions from April 2026. However, project health requires immediate attention, as a critical security vulnerability regarding SSRF protection bypass was reported today and is currently open. The project appears to be in a stabilization phase, though the lack of recent PR activity raises questions about the responsiveness of the core maintainer team to new, critical threats.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Project Progress
No pull requests were merged or closed today. The tracked progress is entirely represented by the closure of 14 stale issues. These closures encompass a wide array of previously reported bugs (e.g., state synchronization, missing UI validation, and OAuth handling) and feature requests (e.g., message bookmarking, conversation tagging). While this successfully reduces the open issue count, the absence of corresponding PRs suggests these were closed due to inactivity rather than confirmed resolution.

## 4. Community Hot Topics
The most significant and actively reported item is a newly opened security vulnerability:
*   **[Security] LobsterAI restores private-network browser access by default and weakens the bundled OpenClaw SSRF guard** ([#2181](https://github.com/netease-youdao/LobsterAI/issues/2181))
    *   *Analysis*: This report highlights a severe architectural risk where default browser settings (`ProxyCompatible` mode) bypass SSRF (Server-Side Request Forgery) guards. This is currently the highest-priority topic in the community, as it exposes users to potential internal network breaches. 
*   Other community discussions were primarily routine triage on older issues, such as the CI pipeline Labeler permission errors ([#1518](https://github.com/netease-youdao/LobsterAI/issues/1518)).

## 5. Bugs & Stability
While the closed bugs were mostly historical, they reveal underlying stability and UX friction points. If not properly patched before being marked stale, these may still affect users. Ranked by historical severity:

1.  **[High] Token & Auth Silent Failures**: Closing the Settings panel during GitHub Copilot OAuth polling caused tokens to be silently lost and background polling to persist indefinitely ([#1516](https://github.com/netease-youdao/LobsterAI/issues/1516)). Silent IM notification failures in scheduled tasks were also flagged ([#1506](https://github.com/netease-youdao/LobsterAI/issues/1506)).
2.  **[Medium] State Management Desyncs**: The Redux state frequently failed to synchronize. Disabling skills did not stop them from being injected into prompts ([#1500](https://github.com/netease-youdao/LobsterAI/issues/1500)), and saving Agent settings required a manual UI refresh to take effect ([#1502](https://github.com/netease-youdao/LobsterAI/issues/1502)).
3.  **[Low] UI/UX Oversights**: Missing required field validations for IM Bot AES Keys ([#1504](https://github.com/netease-youdao/LobsterAI/issues/1504)) and missing input fields for QQ Bot group allow-lists ([#1512](https://github.com/netease-youdao/LobsterAI/issues/1512)) degraded the out-of-box experience.

*Note: The most critical active bug is the open SSRF vulnerability mentioned in section 4.*

## 6. Feature Requests & Roadmap Signals
The community has heavily requested features focused on **data management, organization, and user analytics**. We predict the next version will likely pivot toward these power-user requirements:
*   **Data Organization & Tagging**: Users want to move away from linear chat histories. High demand exists for conversation color-coding ([#1525](https://github.com/netease-youdao/LobsterAI/issues/1525)), multi-dimensional tagging and filtering ([#1541](https://github.com/netease-youdao/LobsterAI/issues/1541)), and bookmarking specific AI replies ([#1537](https://github.com/netease-youdao/LobsterAI/issues/1537)).
*   **Data Portability & Analytics**: Requests for batch exporting of chat histories ([#1528](https://github.com/netease-youdao/LobsterAI/issues/1528)) and local SQLite-based usage statistics panels ([#1532](https://github.com/netease-youdao/LobsterAI/issues/1532)) signal that users are treating LobsterAI as a long-term knowledge repository.
*   **Agent Visibility**: Improved transparency during skill creation, specifically visible "middle-step" thinking processes ([#1509](https://github.com/netease-youdao/LobsterAI/issues/1509)).

## 7. User Feedback Summary
Overall user sentiment leans toward frustration with state management and invisible background processes. Users appreciate the multi-Agent and deep integration capabilities (like IM Bots and Copilot), but they are dissatisfied when changes do not visually or functionally commit (e.g., active skills not updating, OAuth tokens dropping silently). Furthermore, as users accumulate lengthy, complex conversations with the AI, they express a strong pain point regarding information retrieval—clearly evidenced by repeated requests for tagging, coloring, and bookmarking.

## 8. Backlog Watch
*   **[Immediate Action Required]**: Issue [#2181](https://github.com/netease-youdao/LobsterAI/issues/2181) (Open) is a glaring security advisory that needs maintainer verification and an immediate patch. It currently has 0 comments.
*   **[Unverified Resolutions]**: Because 14 issues were closed today with 0 associated PRs, maintainers should verify if these `[stale]` closures accurately reflect patched code, or if the project is simply burying unresolved user pain points. Users who reported issues like the persistent background polling bug ([#1516](https://github.com/netease-youdao/LobsterAI/issues/1516)) may reopen them if the problem persists in the latest builds.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for CoPaw (QwenPaw) based on the GitHub data provided for June 22, 2026.

### 1. Today's Overview
The CoPaw (QwenPaw) project is experiencing a massive surge in community engagement, driven by a coordinated community initiative to achieve full mobile responsiveness. Over the last 24 hours, the project saw 15 active issues and 28 active pull requests, indicating a highly active and contributing developer base. While feature development (like Slack integration and memory enhancements) continues steadily, the maintainers are currently facing a critical juncture regarding overall application stability. A growing chorus of users is reporting severe session management and provider compatibility bugs, prompting formal requests from the community to freeze new features and prioritize core stabilization.

### 2. Releases
*No new releases were published in the last 24 hours. The latest mentioned version in active use is `v1.1.12.post1`.*

### 3. Project Progress
Development today was heavily dominated by UI/UX overhauls, specifically targeting mobile and narrow-viewport layouts. 
*   **Mobile Responsiveness Overhaul:** A large batch of PRs was merged/opened to fix mobile UI constraints. Notable progress includes making the Agent Config page ([PR #5366](https://github.com/agentscope-ai/QwenPaw/pull/5366)), Security page ([PR #5367](https://github.com/agentscope-ai/QwenPaw/pull/5367)), Sessions page ([PR #5364](https://github.com/agentscope-ai/QwenPaw/pull/5364)), and CronJobs ([PR #5362](https://github.com/agentscope-ai/QwenPaw/pull/5362)) fully responsive using card-based layouts and media queries.
*   **Sidebar & Chat Enhancements:** Implemented features to allow agent switching in collapsed sidebar mode ([PR #5334](https://github.com/agentscope-ai/QwenPaw/pull/5334)) and improved the chat header for mobile viewports ([PR #5350](https://github.com/agentscope-ai/QwenPaw/pull/5350)).
*   **Real-Time Notifications:** Added real-time SSE push-message delivery for console/API notifications, replacing polling latency with sub-50ms delivery and adding voice beeps ([PR #5331](https://github.com/agentscope-ai/QwenPaw/pull/5331)).
*   **Backend Fixes:** Addressed an issue where file previews triggered downloads instead of inline viewing ([PR #5324](https://github.com/agentscope-ai/QwenPaw/pull/5324)), and applied a recency-aware ranking system to daily memory searches ([PR #5325](https://github.com/agentscope-ai/QwenPaw/pull/5325)).

### 4. Community Hot Topics
*   **[Issue #5360: Stabilize the core app before adding new features](https://github.com/agentscope-ai/QwenPaw/issues/5360)**: This is a pivotal community discussion. Users are actively requesting a feature freeze to address fundamental stability, mobile reliability, and agent interaction bugs before any new features are merged.
*   **[Issue #5329: Add agent switching button in minimal sidebar mode](https://github.com/agentscope-ai/QwenPaw/issues/5329)**: Highly discussed UI feedback where a user accessing the backend via a mobile browser realized they couldn't switch agents or easily start new chats. This directly inspired the flurry of mobile UI PRs seen today.
*   **[PR #5193: Add Slack channel support](https://github.com/agentscope-ai/QwenPaw/pull/5193)**: A substantial community contribution that continues to receive updates, aiming to integrate Slack via Socket Mode with streaming support.

### 5. Bugs & Stability
The application is currently exhibiting significant stability regressions, particularly around model integration and session management:
1.  **High Severity - DeepSeek Thinking Hangs ([Issue #5328](https://github.com/agentscope-ai/QwenPaw/issues/5328) & [Issue #5333](https://github.com/agentscope-ai/QwenPaw/issues/5333))**: Agents frequently freeze during the "thinking" process when using DeepSeek. The UI fails to register the agent as busy, allowing users to submit conflicting inputs.
2.  **High Severity - Silent API Message Drops ([Issue #5344](https://github.com/agentscope-ai/QwenPaw/issues/5344))**: The `/api/console/chat` endpoint returns a 200 OK but permanently discards messages if the agent is currently busy, creating severe disruptions for automated agent-to-agent workflows.
3.  **Medium Severity - Session Switching Lock ([Issue #5354](https://github.com/agentscope-ai/QwenPaw/issues/5354) & [Issue #5358](https://github.com/agentscope-ai/QwenPaw/issues/5358))**: Users are experiencing UI lockups (conversations greying out and becoming inaccessible) when switching sessions, especially in embedded mode. *A fix is currently pending in [PR #5357](https://github.com/agentscope-ai/QwenPaw/pull/5357).*
4.  **Medium Severity - Feishu Integration Bug ([Issue #5353](https://github.com/agentscope-ai/QwenPaw/issues/5353) CLOSED)**: A bug where agents in Feishu group chats required an `@` mention to respond regardless of configuration settings was reported and quickly closed.

### 6. Feature Requests & Roadmap Signals
Based on today's issue tracker, the community is signaling a strong need for deeper backend resilience and multi-agent management:
*   **Automatic Model Failover ([Issue #5351](https://github.com/agentscope-ai/QwenPaw/issues/5351))**: Users want the unused `llm_routing` configuration in `agent.json` to be activated, allowing automatic switching between local and cloud models if one fails.
*   **Smart Agent Office UI ([Issue #5327](https://github.com/agentscope-ai/QwenPaw/issues/5327))**: Request to add direct "Chat" buttons to agent cards in the "Agent Office" view, allowing operators to instantly intervene and chat with running agents.
*   **Execution-Layer Context Caps ([Issue #5342](https://github.com/agentscope-ai/QwenPaw/issues/5342))**: A defense-in-depth request to hard-cap tool result sizes at the execution layer, preventing context window explosions when LLM calls fail and pruning hooks are bypassed.
*   *Prediction*: The next version (e.g., v1.1.13) will likely focus almost entirely on patching the session/message queue race conditions and finalizing the mobile UI overhaul, potentially delaying the Slack integration.

### 7. User Feedback Summary
Users are generally thrilled with recent efficiency improvements, particularly the newly added message sending queue. However, this feature has introduced a chaotic UX where messages sent in Agent A's queue accidentally transmit to Agent B if the user switches conversations ([Issue #5354](https://github.com/agentscope-ai/QwenPaw/issues/5354)). Furthermore, there is notable frustration regarding third-party provider compatibility; users adding OpenAI-compatible endpoints (like OMLX) are frustrated that native function calling is silently ignored ([Issue #5345](https://github.com/agentscope-ai/QwenPaw/issues/5345)), and Zhipu API integrations are failing model-level routing tests despite passing initial authentication ([Issue #5330](https://github.com/agentscope-ai/QwenPaw/issues/5330)).

### 8. Backlog Watch
*   **[Issue #5345](https://github.com/agentscope-ai/QwenPaw/issues/5345): OpenAI-compatible providers don't support function calling.** This is a critical bug for users utilizing custom local models. It currently lacks a linked PR and requires maintainer attention to debug the `tools` API implementation.
*   **[Issue #5330](https://github.com/agentscope-ai/QwenPaw/issues/5330): Zhipu model connection failures.** This prevents an entire segment of users from utilizing Zhipu's GLM models. Needs routing/name-resolution investigation.
*   **[PR #5346](https://github.com/agentscope-ai/QwenPaw/pull/5346): Tool run in docker.** A highly valuable security-adjacent feature that allows isolated tool execution. It is awaiting review and merging to bolster the agent's safe execution environment.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest (2026-06-22)

## 1. Today's Overview
ZeptoClaw exhibits quiet but highly focused maintenance activity today, characterized by a strict adherence to its core architectural philosophy. The project recorded a single merged Pull Request and one closed Issue, with zero new releases or newly reported bugs. This indicates a maturation phase for the project, where development velocity has shifted from rapid feature expansion to strict quality and constraint management. Overall project health appears highly stable, with maintainers actively reinforcing the project's foundational technical moat.

## 2. Releases
*No new releases were recorded today.*

## 3. Project Progress
The primary development advancement today was the formalization of CI constraints to protect the project's core value proposition. 
*   **PR [#611](https://github.com/qhkm/zeptoclaw/pull/611) [CLOSED/MERGED]**: This PR successfully transitions the `binary-size` check from a passive, post-merge metric into an active, blocking PR gate. By modifying the GitHub Actions workflow to run on every Pull Request and lowering the failure threshold to 7.5MB (stripped), the project ensures no external contributions can quietly introduce binary bloat.

## 4. Community Hot Topics
*Today's community activity was strictly tied to core maintenance rather than broad discussion, with 0 comments/reactions on recent items.*

The most notable topic is the strategic enforcement of ZeptoClaw's footprint. The closure of Issue **[#537](https://github.com/qhkm/zeptoclaw/issues/537)** (authored by `qhkm`) sparks this conversation. The underlying need is clear: ZeptoClaw's identity is fundamentally tied to being deployable on constrained hardware (e.g., robots). The community and maintainers recognize that without automated CI gates, dependency creep will inevitably erode this competitive advantage. 

## 5. Bugs & Stability
*No new bugs, crashes, or regressions were reported in the last 24 hours.* 
Today's activity was entirely preventative. By implementing the binary size budget gate (PR [#611](https://github.com/qhkm/zeptoclaw/pull/611)), the project has actively prevented future performance and deployment stability issues related to software bloat.

## 6. Feature Requests & Roadmap Signals
While no new user-driven feature requests were filed today, the merged CI changes send a strong roadmap signal regarding the project's future direction:
*   **Strict Resource Confinement:** The push to restrict the binary to <7.5MB (and ultimately target a ~6MB baseline per Issue [#537](https://github.com/qhkm/zeptoclaw/issues/537)) implies that future versions will likely focus on memory optimization, WASM or edge-computing compatibility, and aggressive dependency pruning rather than adding heavyweight features.
*   **Predicted Next Steps:** The next logical iterations will likely involve auditing the current codebase to strip the binary down to the 7MB hard limit originally requested in Issue #537.

## 7. User Feedback Summary
User feedback is currently centered entirely around deployment constraints. The primary pain point for the target audience is ensuring the AI agent remains lightweight enough to run on edge devices and robotics hardware. The prompt action by the maintainer to address the lack of a CI size gate (Issue [#537](https://github.com/qhkm/zeptoclaw/issues/537)) demonstrates high satisfaction with the project's direction among developers who prioritize performance and footprint over feature-maximalism.

## 8. Backlog Watch
The development pipeline is highly efficient, with the only updated Issue ([#537](https://github.com/qhkm/zeptoclaw/issues/537)) having been successfully resolved today. There are no visible long-unanswered critical issues or PRs stalling in the queue based on the latest 24-hour data window. Maintainers should ensure they monitor incoming PRs closely, as the new 7.5MB size gate may initially catch external contributors off guard.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the structured project digest for ZeroClaw based on the provided GitHub data.

# ZeroClaw Project Digest — 2026-06-22

## 1. Today's Overview
ZeroClaw is currently experiencing a period of hyper-active development and community engagement, functioning at a highly accelerated velocity. In the last 24 hours alone, the project processed 37 issues and 50 pull requests, signaling intense iterative focus, although PR merge velocity (2 closed/merged) indicates maintainers are rigorously reviewing this massive influx of code. The project's strategic direction is heavily bifurcated between fortifying core infrastructure (config cascading, security, observability) and expanding local-first/cost-effective AI capabilities. With several high-severity bugs currently being triaged alongside massive architectural RFCs, ZeroClaw is in a transitional phase, rapidly maturing its enterprise and local-first feature sets.

## 2. Releases
*No new releases were recorded in the last 24 hours. The project appears to be staging major features for an upcoming milestone (potentially v0.9.0 based on roadmap tracking issues).*

## 3. Project Progress
While merge velocity was low today (2 PRs merged/closed), immense architectural and foundational progress is being pushed through the review pipeline:
*   **Security Foundations:** The foundational spine for pluggable authentication ([PR #8063](https://github.com/zeroclaw-labs/zeroclaw/PR/8063)) has been introduced, landing the `Principal` type and AuthProvider seam for [Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/Issue/7141) (OIDC support).
*   **Plugin Architecture:** Initial WASM component-model plugin host code ([PR #7928](https://github.com/zeroclaw-labs/zeroclaw/PR/7928)) was submitted, targeting `wasm32-wasip2` and defining Channel, Memory, and Tool traits.
*   **System Reliability:** Critical state-management fixes entered review, including safe config alias renaming ([PR #8109](https://github.com/zeroclaw-labs/zeroclaw/PR/8109)), persistent cron trigger history ([PR #7893](https://github.com/zeroclaw-labs/zeroclaw/PR/7893)), and fixes for duplicate cron launches ([PR #8107](https://github.com/zeroclaw-labs/zeroclaw/PR/8107)).
*   **User Onboarding:** A massive conversational, chat-based onboarding flow was revived and modernized ([PR #8033](https://github.com/zeroclaw-labs/zeroclaw/PR/8033)).

## 4. Community Hot Topics
*   **Project Governance & CI Automation ([Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/Issue/6808) - 11 comments):** An accepted RFC regarding "Work Lanes, Board Automation, and Label Cleanup." This shows a community and maintainer base heavily invested in scaling contribution workflows.
*   **Channel Connectivity Requests ([Issue #2503](https://github.com/zeroclaw-labs/zeroclaw/Issue/2503) - 9 comments):** Users are actively requesting native OneBot/Napcat (QQ) channel support, highlighting a strong demand for ZeroClaw integrations within non-Western messaging ecosystems.
*   **Webhook Flexibility ([Issue #2467](https://github.com/zeroclaw-labs/zeroclaw/Issue/2467) - 6 comments):** Robust discussion around adding custom Webhook paths and payload transforms, revealing that users are struggling to connect generic third-party webhooks to the agent.
*   **Identity & Security ([Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/Issue/7141) - 6 comments):** Significant attention on the OIDC Authentication Provider tracking issue, proving enterprise-grade identity management is a top community priority.

## 5. Bugs & Stability
Several high-impact bugs have been reported or triaged, many of which are actively choking agent tool-loops or blocking core workflows:
*   **S1 - Workflow Blocked: Gemini CLI OAuth Failure ([Issue #4879](https://github.com/zeroclaw-labs/zeroclaw/Issue/4879)):** Users report persistent rate-limiting and auth failures with the Gemini provider right after successful CLI authentication.
*   **S1 - Workflow Blocked: Context Compression Braking Tool Loops ([Issue #6361](https://github.com/zeroclaw-labs/zeroclaw/Issue/6361)):** High-risk bug where context compression drops assistant tool calls entirely for OpenAI-compatible providers (e.g., MiniMax), resulting in infinite tool loops and invalid message roles.
*   **S1 - Workflow Blocked: Missing Native/MCP Tools ([Issue #7756](https://github.com/zeroclaw-labs/zeroclaw/Issue/7756)):** MCP tools fail to pass to the model during reasoning turns for OpenAI and Anthropic models. *(Fix currently in progress).*
*   **S1 - Workflow Blocked: Anthropic Provider Ghosting ([Issue #8094](https://github.com/zeroclaw-labs/zeroclaw/Issue/8094)):** Models added via Quickstart do not appear in chat until a system reset is issued.
*   **S1 - Workflow Blocked: Install Script CPU Mismatch ([Issue #8095](https://github.com/zeroclaw-labs/zeroclaw/Issue/8095)):** `install.sh` hardcodes arm64 prebuilt binaries, breaking installations on Intel Macs. *(Fix in progress).*

## 6. Feature Requests & Roadmap Signals
Analyzing the active PRs and Issues reveals heavy preparation for the **v0.9.0 roadmap**:
*   **Developer Ergonomics:** Strong push to create a local pre-submission gate (`zerocode`) that enforces the contributor bar locally before code leaves a developer's machine ([Issue #8078](https://github.com/zeroclaw-labs/zeroclaw/Issue/8078), [PR #6129](https://github.com/zeroclaw-labs/zeroclaw/PR/6129)).
*   **Context Visibility:** Addition of an interactive context window (ctx) usage bar across TUI, Gateway, and CLI ([PR #7946](https://github.com/zeroclaw-labs/zeroclaw/PR/7946)), giving users real-time cost/limit telemetry.
*   **Hardware Consolidation:** Proposal to retire the standalone `aardvark-sys` crate and fold it directly into `zeroclaw-hardware` ([Issue #8043](https://github.com/zeroclaw-labs/zeroclaw/Issue/8043)) to streamline builds.

## 7. User Feedback Summary
*   **Local-First AI is a Priority:** Users are expressing acute pain with prompt bloat and leakage when using local models. [Issue #5287](https://github.com/zeroclaw-labs/zeroclaw/Issue/5287) details the need for a compact, strict-parsing local mode that doesn't leak tool instructions to the user.
*   **Channel Cost Optimization:** [Issue #6360](https://github.com/zeroclaw-labs/zeroclaw/Issue/6360) highlights user frustration that prompt caching works in the CLI but fails in Telegram, resulting in "forcing full prompt re-processing" and increased costs.
*   **Security Posture Awareness:** A community member pointed out that a 6-digit pairing code is dangerously weak, requesting arbitrary-length, alphanumeric defaults ([Issue #6613](https://github.com/zeroclaw-labs/zeroclaw/Issue/6613)).

## 8. Backlog Watch
*   **Lost Commits Recovery Audit ([Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/Issue/6074)):** An ongoing high-risk audit tracking 153 commits lost in a bulk revert from March 2026. This massive technical debt is actively being recovered (as seen in recovered features like [PR #8011](https://github.com/zeroclaw-labs/zeroclaw/PR/8011)) but needs sustained maintainer attention.
*   **Memory Consolidation via Tool Calling ([Issue #4760](https://github.com/zeroclaw-labs/zeroclaw/Issue/4760)):** An older, high-risk accepted issue from March requesting that the AI use an internal tool for memory consolidation (instead of raw JSON parsing) to prevent hallucinated memory states. This has seen recent activity but no merged implementation.
*   **Automated Plugin/Skill Suggestions ([Issue #6289](https://github.com/zeroclaw-labs/zeroclaw/Issue/6289)):** Users want the assistant to suggest installing missing skills mid-prompt. It is accepted but pending execution, representing a major UX milestone for plugin discovery.

</details>