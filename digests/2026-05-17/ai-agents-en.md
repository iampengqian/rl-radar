# OpenClaw Ecosystem Digest 2026-05-17

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-16 22:13 UTC

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

# OpenClaw Project Digest — 2026-05-17

## 1. Today's Overview
OpenClaw is currently experiencing an extremely high volume of community activity and issue tracker traffic, evidenced by 500 issues and 500 pull requests updated in the last 24 hours. Out of these, 446 issues remain open alongside 432 active PRs, suggesting that the open-source community is heavily stress-testing the newly released beta versions. The maintainers recently shipped three new beta releases, indicating a rapid, iterative development cycle focused on expanding provider support and CLI capabilities. However, the massive discrepancy between incoming bug reports and closed issues highlights potential bottlenecks in maintainer triage and review capacity, a common friction point for fast-growing open-source AI projects.

## 2. Releases
Three new beta versions were released yesterday, rapidly iterating on provider integration and CLI tooling:
*   **v2026.5.16-beta.3** & **v2026.5.16-beta.2**: Added xAI Grok OAuth login for SuperGrok subscribers, allowing `xai/*` models to authenticate without API keys. Also introduced `openclaw cron run --wait` with timeout controls and exact run ID filtering for better cron job orchestration.
*   **v2026.5.16-beta.1**: Upgraded maintainer tooling to route Crabbox skill defaults via brokered AWS config and localized the CLI setup wizard for English and Simplified Chinese.

## 3. Project Progress
Of the 500 active PRs updated today, 68 were merged or closed. Key advancements include critical stability and security enhancements:
*   **Stability & Fixes:** PR [#82748](https://github.com/openclaw/openclaw/pull/82748) normalizes malformed assistant content to prevent transport crashes, and PR [#82754](https://github.com/openclaw/openclaw/pull/82754) fixes context overflow fallback to automatically route to larger models when primary models are exhausted. PR [#82737](https://github.com/openclaw/openclaw/pull/82737) resolves an annoying UI bug showing `?/ctx` instead of accurate token counts.
*   **Security & Config:** PR [#81974](https://github.com/openclaw/openclaw/pull/81974) and PR [#81981](https://github.com/openclaw/openclaw/pull/81981) introduced Policy 1.0 checks for secrets/auth provenance and gateway exposure, hardening the gateway against unauthorized access. PR [#82341](https://github.com/openclaw/openclaw/pull/82341) implemented memory catch-up for stale sessions on startup.

## 4. Community Hot Topics
The most actively discussed issues revolve around system stability, agent orchestration, and data durability—highlighting that users are pushing OpenClaw hard in production environments:
*   **Gateway Daemon Race Conditions:** Issue [#22676](https://github.com/openclaw/openclaw/issues/22676) (17 comments) details a critical signal daemon restart bug leaving orphaned processes and causing send failures.
*   **Context Overflow Loops:** Issue [#63216](https://github.com/openclaw/openclaw/issues/63216) (10 comments) highlights repeated hard context-overflow resets in group sessions, even with high token floors configured.
*   **Data Durability & Concurrency:** Issue [#40001](https://github.com/openclaw/openclaw/issues/40001) (8 comments) points out that the `write` tool lacks an append mode, causing isolated cron sessions to overwrite shared memory files. 
*   **Multi-Agent Instability:** Issue [#43367](https://github.com/openclaw/openclaw/issues/43367) (8 comments) reports that concurrent agent configurations overwrite each other and suffer session-lock failures.
*   **Security Gaps in Web Fetch:** Issue [#39604](https://github.com/openclaw/openclaw/issues/39604) (12 comments, 7 👍) requests an opt-in to allow `web_fetch` to access private networks, indicating enterprise users are deploying OpenClaw behind firewalls.

## 5. Bugs & Stability
Stability remains a primary concern, with several P1 regressions and session hangs reported. Key bugs currently tracked include:
*   **P1 - Session Hangs & Infinite Loops:** 
    *   Stuck processing sessions detected but never aborted, requiring external restarts ([#71127](https://github.com/openclaw/openclaw/issues/71127)). 
    *   Gateway compaction timeouts causing repeated duplicate messages to users ([#43661](https://github.com/openclaw/openclaw/issues/43661)).
*   **P1 - Silently Dropped Media & Completions:** Subagent completions are silently lost without retries ([#44925](https://github.com/openclaw/openclaw/issues/44925)), and Feishu integrations drop media payloads before delivery ([#41744](https://github.com/openclaw/openclaw/issues/41744)).
*   **P1 - Provider & Auth Regressions:** The Control UI is incorrectly requiring device identity on non-localhost HTTP setups ([#32473](https://github.com/openclaw/openclaw/issues/32473)), and local memory embeddings on Apple Silicon are crashing the gateway ([#44202](https://github.com/openclaw/openclaw/issues/44202)).
*   *Note on Fixes:* Fix PRs are already in progress for many core loop crashes, such as PR [#82748](https://github.com/openclaw/openclaw/pull/82748) addressing the `v.content is not iterable` regression ([#43795](https://github.com/openclaw/openclaw/issues/43795)).

## 6. Feature Requests & Roadmap Signals
The community is pushing for more sophisticated multi-agent infrastructure and security controls. 
*   **Per-Agent Resource Isolation:** Highly requested features include per-agent memory-wiki vault configuration ([#63829](https://github.com/openclaw/openclaw/issues/63829)) and per-agent cost budget enforcement at the gateway level ([#42475](https://github.com/openclaw/openclaw/issues/42475)).
*   **Advanced Tool Routing:** Users want the ability to route specific models to specific skills via SKILL.md frontmatter ([#43260](https://github.com/openclaw/openclaw/issues/43260)), rather than relying on global model settings. 
*   **Built-in Skill Security:** Request for automated security scanning during `clawhub install` ([#45031](https://github.com/openclaw/openclaw/issues/45031)) to prevent supply chain attacks.
*   **Roadmap Prediction:** Based on current open PRs and maintainers's focus, the upcoming stable release will likely focus heavily on security hardening (PRs [#81974](https://github.com/openclaw/openclaw/pull/81974), [#81981](https://github.com/openclaw/openclaw/pull/81981)), durable multi-agent session orchestration, and transitioning newly added provider support (xAI OAuth, Anthropic 1M context) to stable.

## 7. User Feedback Summary
Users are generally enthusiastic about the rapid addition of new providers (like xAI OAuth) and localized setups. However, there is noticeable frustration regarding **memory management regressions**, where updates unpredictably change chunking and storage behaviors ([#43747](https://github.com/openclaw/openclaw/issues/43747)). Developers deploying via Docker complain about path binding issues ([#31331](https://github.com/openclaw/openclaw/issues/31331)) and path whitespace bugs ([#44599](https://github.com/openclaw/openclaw/issues/44599)). Additionally, channel-specific bugs (like Discord leaking raw internal tool-call JSON to users in [#44905](https://github.com/openclaw/openclaw/issues/44905)) indicate that while new features are shipping fast, polish and QA on existing integrations are lagging behind.

## 8. Backlog Watch
Several critical issues still bear the `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision` tags, indicating a stalled consensus on important architectural decisions:
*   **Sandbox Isolation vs. Usability:** The debate on how to handle sandbox `workspaceAccess: "none"` while keeping workspaces writable has been active since early March without resolution ([#37634](https://github.com/openclaw/openclaw/issues/37634)).
*   **Multi-Agent Completion Routing:** Implementing a robust `announceTarget` for parent-child agent workflows ([#27445](https://github.com/openclaw/openclaw/issues/27445)) desperately needs a product decision to move forward.
*   **Real-time Streaming UX:** The request for a reasoning stream (overwriting text lines for thinking processes) ([#42276](https://github.com/openclaw/openclaw/issues/42276)) remains unaddressed, a standard feature in rival proprietary AI chat UIs.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digests from May 17, 2026.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently experiencing a phase of rapid architectural maturation and intense community stress-testing. Projects are evolving from basic chatbot wrappers into sophisticated, multi-agent orchestration platforms, heavily focused on context management, memory persistence, and enterprise security. However, this explosive growth is creating shared friction points: projects are struggling to balance rapid feature iteration with gateway stability, safe upgrade paths, and non-blocking sub-agent execution.

### 2. Activity Comparison
*Health Score is rated 1-5 based on issue triage speed, PR merge ratios, and release stability.*

| Project | Active Issues | Active PRs | Release Status (May 16/17) | Health Score | Primary Focus |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (446 open) | 500 (68 merged) | **Active** (3 Betas) | 3.5/5 (Triage bottlenecks) | Provider expansion, security hardening |
| **Hermes Agent**| 50 (46 open) | 50 (3 merged) | **Major Release** (v0.14.0) | 3.0/5 (Post-release bugs) | Massive "Foundation" overhaul, memory |
| **ZeroClaw** | 50 (39 open) | 50 (11 merged) | No Release (v0.7.6 milestone)| 4.0/5 (Active development) | Skills UX, desktop app, memory |
| **IronClaw** | 14 open | 25 (12 merged) | No Release | 4.5/5 (Structured build phase)| "Reborn" runtime architecture |
| **NanoBot** | 7 open | 26 (16 merged) | **Major Release** (v0.2.0) | 4.5/5 (High velocity) | Context efficiency, multi-agent |
| **CoPaw** | 12 open | 12 open | No Release (v1.1.7 current)| 3.5/5 (Review bottleneck) | Context compaction, channel UI |
| **NanoClaw** | 7 open | 7 open | No Release (v2 stabilizing) | 3.5/5 (State/infra bugs) | Container orchestration, health checks|
| **LobsterAI** | Low volume | 22 (10 merged) | Imminent (2026.5.16 cut) | 4.0/5 (Stale backlog) | UI/UX updates, enterprise IM integrations|
| **PicoClaw** | 4 open | 3 open | **Nightly** (v0.2.8) | 3.5/5 (Deployment bugs) | Mobile/WeChat multi-account |
| **Moltis** | Low volume | 3 open | No Release | 4.5/5 (Stable/Low friction) | Enterprise remote access, sub-agents |
| **NullClaw** | *No Activity* | *No Activity* | N/A | N/A | N/A |
| **TinyClaw** | *No Activity* | *No Activity* | N/A | N/A | N/A |
| **ZeptoClaw**| *No Activity* | *No Activity* | N/A | N/A | N/A |

### 3. OpenClaw's Position
*   **Advantages vs. Peers:** OpenClaw commands the largest raw community engagement by a massive margin (500 daily active issues/PRs). It serves as a "batteries-included" reference implementation, moving faster than almost any other project in integrating diverse LLM providers (e.g., rapid deployment of xAI Grok OAuth and Anthropic 1M context).
*   **Technical Approach Differences:** Unlike highly modular or research-focused projects (like IronClaw's "Reborn" monorepo restructuring or NanoBot's architectural refactoring), OpenClaw operates on a rapid, iterative beta-release cadence. 
*   **Community Size Comparison:** While its community is exponentially larger than projects like Moltis or PicoClaw, OpenClaw is currently a victim of its own scale. The ratio of incoming bug reports to closed issues highlights a severe maintainer triage bottleneck, resulting in a much higher P1 bug backlog than its smaller, more agile competitors.

### 4. Shared Technical Focus Areas
Several unified requirements are emerging across the ecosystem:
*   **Context Window & Memory Management:** The highest priority across the board. Projects like **OpenClaw**, **Hermes Agent**, **CoPaw**, and **NanoBot** are all actively battling context overflow loops, compaction failures, and state.db corruption. Developers require better context-clearing tools and persistent memory schemas.
*   **Non-Blocking Multi-Agent Orchestration:** **Moltis**, **NanoBot**, **OpenClaw**, and **Hermes Agent** are heavily focused on parent-child agent workflows. Developers urgently need asynchronous sub-agent spawning to prevent parent agents from freezing during long tool executions.
*   **Security & Access Control:** Enterprise users are demanding granular security. **OpenClaw** (web fetch private networks), **Moltis** (Cloudflare tunnels), **LobsterAI** (URL allowlists), and **ZeroClaw** (per-skill permissions) all indicate a shift toward zero-trust, sandboxed agent architectures.
*   **Desktop & Mobile Deployment:** **ZeroClaw**, **PicoClaw**, **LobsterAI**, and **CoPaw** highlight a strong push to move agents out of the browser and into native desktop system trays and mobile OS environments.

### 5. Differentiation Analysis
*   **Architecture & Modularity:** **IronClaw** is differentiated by its highly systematic, "Configuration-as-Code" enterprise rewrite. In contrast, **NanoBot** and **CoPaw** focus on lightweight, chat-loop optimizations (e.g., BM25 skill routers to reduce prompt tokens).
*   **Target Users:** **LobsterAI** and **PicoClaw** heavily target Asian consumer/enterprise messaging markets (WeChat, DingTalk, QQ), focusing heavily on IM channel stability. **Moltis** and **IronClaw** target enterprise operators requiring robust infrastructure (NetBird tunnels, system tray daemons).
*   **Provider Strategy:** **OpenClaw** and **LobsterAI** differentiate by acting as universal adapters, rapidly merging support for fringe or regional models (MiMo, Qwen, Grok) to capture a wide user base, whereas others rely more heavily on standard OpenAI-compatible endpoints.

### 6. Community Momentum & Maturity
*   **Tier 1: Hyper-Growth & Scaling (OpenClaw, Hermes Agent, ZeroClaw):** Extremely high momentum but facing growing pains. They are shipping features rapidly but accumulating deep technical debt (e.g., Hermes' destructive 0.14.0 upgrade path, OpenClaw's orphaned processes).
*   **Tier 2: Rapid Iteration & Maturation (NanoBot, IronClaw, CoPaw):** Highly active but more controlled. NanoBot and IronClaw are executing well-scoped architectural refactors with strong community consensus.
*   **Tier 3: Stabilizing & Niche (LobsterAI, NanoClaw, PicoClaw, Moltis):** Mature but lower volume. These projects are focused on fixing deployment bugs (Docker networking) and refining specific verticals (e.g., PicoClaw's mobile focus) rather than rewriting core architectures.
*   **Stalled (NullClaw, TinyClaw, ZeptoClaw):** Zero community activity recorded.

### 7. Trend Signals
*   **The Shift from Chatbots to Autonomous Daemons:** Community requests for "System Tray Daemons" (CoPaw), "Cron state managers" (OpenClaw, CoPaw), and "Dream Mode background tasks" (ZeroClaw) indicate that agents are transitioning from reactive chat interfaces to proactively running background services.
*   **Enterprise Onboarding Friction:** A recurring theme across **NanoClaw**, **OpenClaw**, and **CoPaw** is user frustration with Docker networking, silent failures, and complex `.env` configurations. For AI agent developers, zero-touch deployment (Configuration-as-Code, safe migration scripts) will soon become a primary competitive differentiator.
*   **MCP Protocol Modernization:** **PicoClaw's** community highlights the urgent need to upgrade from legacy SSE to Streamable HTTP for MCP. As agentic tool-calling standards mature, agent frameworks that do not update their transport protocols will quickly lose interoperability with modern local tools.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-17

## 1. Today's Overview
The NanoBot project is experiencing exceptionally high developer momentum, characterized by the major `v0.2.0` release and robust daily community engagement (7 issues, 26 PRs). The core architectural focus has shifted toward sustained, long-running agent objectives and optimizing token efficiency through improved context management. A significant portion of today's activity involves hardening provider integrations (especially for DeepSeek, OpenRouter, and Xiaomi's MiMo) and refactoring the monolithic agent loop into modular components. Overall, project health appears robust, with a healthy ratio of merged PRs and active, constructive community contributions. 

## 2. Releases
- **v0.2.0**: Released recently and dominating current integration efforts.
  - **Headline Feature:** Introduction of the `/goal` command. Agents can now mark a thread as a sustained objective using `long_task`. The active goal stays pinned in the Runtime Context every turn, surviving compaction and long tool-execution phases.
  - **Scale:** 105 PRs merged for this release, with 20 new contributors.

## 3. Project Progress
Today saw 16 merged or closed PRs, indicating rapid integration cycles. Key advancements include:
- **Architecture & Refactoring:** Significant refactoring of the agent loop by extracting `checkpoint.py` and `turn_writer.py` from `loop.py` ([PR #3856](https://github.com/HKUDS/nanobot/pull/3856)), and consolidating context building into a public `ContextBuilder.build_user_content()` method ([PR #3858](https://github.com/HKUDS/nanobot/pull/3858)).
- **Multi-Agent & Subagents:** Merged `spawn_status`, `spawn_cancel`, and configurable spawn parameters for better subagent management ([PR #3223](https://github.com/HKUDS/nanobot/pull/3223)), alongside a file-system-based mailbox channel for inter-agent communication ([PR #3461](https://github.com/HKUDS/nanobot/pull/3461)).
- **Optimization:** Fixed duplicate runtime context injection in mid-turn drains, saving thousands of wasted tokens per run ([PR #3859](https://github.com/HKUDS/nanobot/pull/3859)), and implemented dynamic LLM timeout re-evaluation for `long_task` goal states ([PR #3861](https://github.com/HKUDS/nanobot/pull/3861)).
- **Documentation:** `CLAUDE.md` was updated to reflect current channels, providers, and tools ([PR #3860](https://github.com/HKUDS/nanobot/pull/3860)).

## 4. Community Hot Topics
The community is highly active in discussing multi-agent scaling, security, and context optimization:
- **Security and Configurations:** Following the closure of the plaintext secret issue ([Issue #2172](https://github.com/HKUDS/nanobot/issues/2172)), maintainers quickly drafted expanded documentation for secret management ([PR #3866](https://github.com/HKUDS/nanobot/pull/3866)).
- **Multi-Instance Orchestration:** [PR #3854](https://github.com/HKUDS/nanobot/pull/3854) introduces a peer discovery injection point for the WebUI bootstrap endpoint, driven by user needs to run federated NanoBot containers (e.g., on Hugging Face Spaces).
- **Context Window Optimization:** [PR #3865](https://github.com/HKUDS/nanobot/pull/3865) proposes a BM25-lite skill router to reduce the system prompt by ~60% (from 3,000+ tokens to top-5 relevant skills), addressing a common pain point for users with extensive skill libraries.

## 5. Bugs & Stability
Several bugs related to UI, providers, and tool execution were identified, with most immediately addressed by PRs:
1. **WebUI Display Bug (High):** Users report severe display scrambling when printing content in the WebUI session, requiring a hard refresh ([Issue #3790](https://github.com/HKUDS/nanobot/issues/3790)). *Status: Open, no fix PR yet.*
2. **Docker Build Failure (High):** Docker builds failing due to a missing `hatch_build.py` file copy. Addressed immediately by the community ([PR #3870](https://github.com/Hkuds/nanobot/pull/3870)).
3. **Provider Hardening (Medium):** DeepSeek API throwing 400s due to null content handling ([PR #3869](https://github.com/HKUDS/nanobot/pull/3869)) and MiMo thinking controls not functioning via OpenRouter ([Issue #3845](https://github.com/HKUDS/nanobot/issues/3845), fixed in [PR #3851](https://github.com/HKUDS/nanobot/pull/3851), follow-up [PR #3867](https://github.com/HKUDS/nanobot/pull/3867)).
4. **Exec Tool Blocklist (Medium):** The security block for the `format` command accidentally blocked legitimate URL parameters like `?format=json` ([PR #3853](https://github.com/HKUDS/nanobot/pull/3853)).
5. **Gateway HTTP 500 (Medium):** Bootstrap failures when accessing the frontend ([Issue #3857](https://github.com/HKUDS/nanobot/issues/3857)). *Status: Open.*
6. **WeChat Login (Low):** Users unable to log in via WeChat QR code due to version mismatch errors ([Issue #3863](https://github.com/HKUDS/nanobot/issues/3863)). *Status: Open.*

## 6. Feature Requests & Roadmap Signals
Recent issues and PRs strongly signal the project's near-term trajectory:
- **Self-Correcting Agents:** [PR #3728](https://github.com/HKUDS/nanobot/pull/3728) introduces `LoopDetectHook` and `ReflectRetryHook` to prevent agents from repeating identical failing tool calls.
- **Persistent Skill Routing:** [Issue #3846](https://github.com/HKUDS/nanobot/issues/3846) requests better retention of skill definitions in multi-turn conversations, strongly backing the BM25-lite router proposed in PR #3865.
- **Expanded Channels:** [PR #3852](https://github.com/HKUDS/nanobot/pull/3852) adds support for the Signal messenger protocol via `signal-cli`.
- *Prediction:* The next minor release will likely formalize multi-agent orchestration (mailbox channels + subagent management) and integrate the BM25 skill router as a core feature to manage expanding token limits.

## 7. User Feedback Summary
Users are heavily utilizing NanoBot across diverse messaging platforms (WeChat, Signal, DingTalk) and LLM providers, leading to friction around provider-specific API quirks (like DeepSeek's null content handling and regional rate limits). The user base is technically adept, often submitting one-line fixes, cherry-picks, and architectural refactors rather than just bug reports. However, daily users are experiencing UI friction, notably the WebUI printing scramble, and backend timeout issues during the new `long_task` goals. Overall sentiment is highly positive, evidenced by rapid collaboration (e.g., immediate follow-ups on MiMo thinking control and secret management).

## 8. Backlog Watch
- **Linter Configuration Debt:** [Issue #3849](https://github.com/HKUDS/nanobot/issues/3849) notes that `CONTRIBUTING.md` instructs `ruff format`, but running it produces an 80-file unrelated diff because the codebase predates the formatter. This needs maintainer alignment to prevent merge conflicts.
- **Agent Memory Leak / Cleanup:** While automatic cleanup of expired sessions was proposed ([PR #3516](https://github.com/HKUDS/nanobot/pull/3516)), it was closed/invalidated. Given the new `long_task` goal features, automated session lifecycle management remains an unaddressed gap.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-17

## 1. Today's Overview
Hermes Agent is experiencing explosive community engagement following the monumental **v0.14.0 "Foundation Release,"** which introduced 165,000+ lines of changes across nearly 1,400 files. The project saw 50 active issues and 50 active pull requests updated in the last 24 hours, with a massive influx of new bug reports (46 open issues) related to the new release. Only a few PRs have been merged/closed today, suggesting maintainers are likely still triaging the post-release flood. Overall project health remains highly active and collaborative, though the team is clearly navigating a heavy technical debt and stabilization phase.

## 2. Releases
**v2026.5.16: Hermes Agent v0.14.0**
Tagged as the **"Foundation Release,"** this is a massive milestone.
* **Scope:** 808 commits, 633 merged PRs, 215 community contributors.
* **Highlights:** Focuses on getting the core agent installable and runnable as a foundational layer. Includes a massive overhaul of memory, context handling, providers, and tooling.
* **Migration/Breaking Risks:** Given the bug reports surfacing today (Docker image missing dependencies, `.env` files being stripped during updates, and configuration migrations breaking), users upgrading to `v0.14.0` should test their gateways (especially Telegram/Docker) and back up their local configurations before running `hermes update`.

## 3. Project Progress
While most PRs today were new submissions, 3 PRs were merged/closed, indicating targeted patching:
* **Stabilizing CLI updates:** `hermes update` hangups during Node.js dependencies (specifically Camofox postinstall) were addressed ([PR #27129](https://github.com/NousResearch/hermes-agent/pull/27129)).
* **Gateway Vision fixes:** An issue where OpenAI-compat clients bypassed `auxiliary.vision` routing was closed ([Issue #27020](https://github.com/NousResearch/hermes-agent/issues/27020)).

Newly opened PRs are heavily focused on fixing broken provider adapters and gateway reliability (e.g., fixing Gemini's `systemInstruction` for Gemma models in [PR #27123](https://github.com/NousResearch/hermes-agent/pull/27123) and Codex replay errors in [PR #27143](https://github.com/NousResearch/hermes-agent/pull/27143)).

## 4. Community Hot Topics
The community is actively discussing architectural improvements, multi-user identities, and system governance.
* **Self-Improving Agent Governance (11 comments):** [Issue #11692](https://github.com/NousResearch/hermes-agent/issues/11692) discusses the "provenance problem" of Hermes's self-modifying capabilities. The user proposes cryptographic receipts to track which skill versions produce specific outputs.
* **Telegram Auth & Identity Security (6 comments):** [Issue #21574](https://github.com/NousResearch/hermes-agent/issues/21574) highlights a prompt injection vulnerability via the Telegram gateway. The user's girlfriend successfully impersonated them, sparking a serious RFC for per-user agent isolation and identity-based permissions.
* **Heavy Production Memory Issues (4 comments):** [Issue #5563](https://github.com/NousResearch/hermes-agent/issues/5563) provides a deep-dive field report from a heavy production user praising Hermes's capabilities but highlighting critical UX issues with `state.db` corruption, session replay token waste, and environment hallucination.

## 5. Bugs & Stability
The v0.14.0 release introduced several critical (P1/P2) bugs, particularly affecting Docker deployments and memory handling.
* **P1: Telegram Docker Image Broken ([Issue #24698](https://github.com/NousResearch/hermes-agent/issues/24698) 👍5):** The official v0.13.0/v0.14.0 Docker image is missing the `python-telegram-bot` dependency, crashing the gateway on launch. A related P1 bug ([Issue #27100](https://github.com/NousResearch/hermes-agent/issues/27100)) notes failures with the `--user` flag in the new image.
* **P1: Destructive Context Compression ([Issue #25585](https://github.com/NousResearch/hermes-agent/issues/25585)):** If the LLM summary fails, the compressor drops middle turns of the conversation and inserts a "summary unavailable" marker, causing irreversible data loss.
* **P1: `.env` Stripped on Update ([Issue #26804](https://github.com/NousResearch/hermes-agent/issues/26804)):** `hermes update` silently deletes custom environment variables.
* **P2: Tool Result Contamination ([Issue #27033](https://github.com/NousResearch/hermes-agent/issues/27033)):** Error loops persist in the session database when a tool returns an HTTP 400.
* **P2: Codex Session Replay Error ([Issue #27038](https://github.com/NousResearch/hermes-agent/issues/27038)) & Fix ([PR #27143](https://github.com/NousResearch/hermes-agent/pull/27143)):** Codex rejects replayed assistant messages with IDs over 64 chars. A fix PR is already open.

## 6. Feature Requests & Roadmap Signals
Several distinct feature requests signal where the community wants Hermes to expand next:
* **Provider Expansion:** Native Google Cloud Vertex AI support ([Issue #13484](https://github.com/NousResearch/hermes-agent/issues/13484)) and Alibaba/Qwen vision tool support ([Issue #27117](https://github.com/NousResearch/hermes-agent/issues/27117)). *Prediction: xAI/Grok OAuth and Vertex AI support are highly likely to land in v0.14.1.*
* **Multi-Tenant Memory:** Per-user memory isolation in group chats ([Issue #11430](https://github.com/NousResearch/hermes-agent/issues/11430)) to prevent cross-contamination of user contexts.
* **Performance:** API server agent pooling for lower Time-To-First-Token (TTFT) ([PR #27074](https://github.com/NousResearch/hermes-agent/pull/27074)).

## 7. User Feedback Summary
Users remain highly impressed by Hermes's core capabilities—particularly the skill system, CLI interface, and delegate_task subagents. However, the user experience for long-running agents and upgrades is causing friction:
* **Upgrades are fragile:** Multiple users reported that upgrading via `hermes update` silently breaks environments (stripping `.env`, hanging on Node dependencies).
* **Provider quirks are frustrating:** Users utilizing non-OpenAI providers (like Xiaomi's MiMo, Qwen, and Gemini) are running into context-window mismatches and dropped reasoning tokens (e.g., [Issue #24443](https://github.com/NousResearch/hermes-agent/issues/24443) and [Issue #27008](https://github.com/NousResearch/hermes-agent/issues/27008)).
* **TUI needs polish:** Basic CLI UX, such as `Shift+Enter` triggering a send instead of a newline ([Issue #25568](https://github.com/NousResearch/hermes-agent/issues/25568)), remains a persistent annoyance.

## 8. Backlog Watch
Several high-impact bugs and architectural discussions need maintainer triage:
* **[Issue #5563](https://github.com/NousResearch/hermes-agent/issues/5563) (P1):** Memory persistence and `state.db` corruption during heavy production use. Open since early April, this is a critical blocker for enterprise/power users.
* **[PR #25968](https://github.com/NousResearch/hermes-agent/pull/25968) & [PR #27144](https://github.com/NousResearch/hermes-agent/pull/27144):** Two competing PRs exist for xAI (Grok) OAuth provider implementation. Maintainers need to merge or coordinate these efforts.
* **[Issue #26804](https://github.com/NousResearch/hermes-agent/issues/26804) (P1):** The config migration silently stripping `.env` files needs an immediate hotfix before more users upgrade to v0.14.0.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the PicoClaw project digest for 2026-05-17:

### 1. Today's Overview
PicoClaw demonstrates active and healthy development momentum, characterized by a steady flow of community contributions and ongoing nightly releases. The project currently shows 4 active issues and 3 open pull requests, indicating a robust community engagement cycle. Activity is heavily focused on expanding channel integrations—specifically WeChat multi-account support and native email requests—as well as refining the MCP (Model Context Protocol) client capabilities. While the release of the `v0.2.8` nightly build shows continuous iteration, the issue tracker suggests that the recent stable release introduced some deployment regressions that require attention.

### 2. Releases
*   **nightly: v0.2.8-nightly.20260516.0df050ff**
    *   **Type:** Automated Nightly Build
    *   **Notes:** Marked as potentially unstable. This build tracks the `main` branch heading towards the next stable iteration.
    *   **Full Changelog**: [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

### 3. Project Progress
Development advanced significantly in UI/UX improvements and platform versatility.
*   **Closed/Merged:** 
    *   [PR #2881](https://github.com/sipeed/picoclaw/pull/2881) (Closed) - An initial attempt to introduce WeChat multi-account configuration, which was superseded by a more comprehensive follow-up PR.
*   **Active Advancements:**
    *   [PR #2883](https://github.com/sipeed/picoclaw/pull/2883) (Open) - Successfully implements WeChat multi-account configuration (`weixin_*` mapping), complete with frontend CRUD interfaces and backend optimizations. Notably, the contributor disclosed significant AI-assisted code generation for this draft.
    *   [PR #2882](https://github.com/sipeed/picoclaw/pull/2882) (Open) - Enhances the web UI chat experience by adding independent copy and collapse controls for code blocks, alongside JSON syntax highlighting for tool call arguments.
    *   [PR #2835](https://github.com/sipeed/picoclaw/pull/2835) (Open) - Fixes an agent logic issue where normal final replies were incorrectly suppressed if an interim `message` tool was used earlier in the turn.

### 4. Community Hot Topics
The most engaging community discussions revolve around channel integration flexibility and protocol modernization.
*   **Native Email Channel:** [Issue #2421](https://github.com/sipeed/picoclaw/issues/2421) (6 comments, 1 👍) remains highly relevant. Users operating in corporate, scientific, or conservative environments are strongly requesting native email support to bypass traditional chat platforms.
*   **MCP Protocol Modernization:** [Issue #2782](https://github.com/sipeed/picoclaw/issues/2782) (3 comments) highlights a critical architectural need. Users are pointing out that PicoClaw's MCP client currently relies on legacy SSE transport and cannot connect to newer MCP servers that strictly use the "Streamable HTTP" protocol (now the standard in the official Go SDK).

### 5. Bugs & Stability
Stability challenges have been reported concerning the `v0.2.8` release cycle and specific runtime environments.
1.  **Critical / Startup Failure:** [Issue #2742](https://github.com/sipeed/picoclaw/issues/2742) - Users report that the PicoClaw gateway starts with no channels active in `v0.2.8`, effectively breaking the deployment. *No fix PR is currently linked.*
2.  **High / Mobile Permissions:** [Issue #2880](https://github.com/sipeed/picoclaw/issues/2880) - On Android 10 (Xiaomi Pocophone F1), attempting to "Start Service" crashes the app with a permission denied error when creating the `Downloads/picoclaw` directory, despite standard storage permissions being granted. *No fix PR is currently linked.*

### 6. Feature Requests & Roadmap Signals
The community is pushing PicoClaw to be a more versatile, multi-platform hub.
*   **WeChat Multi-Account Support:** The progression from [PR #2881](https://github.com/sipeed/picoclaw/pull/2881) to [PR #2883](https://github.com/sipeed/picoclaw/pull/2883) signals that official support for managing multiple WeChat accounts simultaneously is highly likely to land in the next feature release.
*   **Agent UX Improvements:** The submission of [PR #2835](https://github.com/sipeed/picoclaw/pull/2835) indicates ongoing refinement of how AI agents emit progress updates versus final replies, aiming for a less cluttered user experience.
*   **Predictions for Next Version:** Given current open PRs, the next stable release will likely feature major upgrades to the WebUI (code block handling) and backend channel routing (WeChat multi-account).

### 7. User Feedback Summary
User feedback reveals distinct operational pain points. First-time users and self-hosters express frustration with deployment basics, as seen in [Issue #2834](https://github.com/sipeed/picoclaw/issues/2834), where a user had to explicitly request a tutorial for updating/removing old versions from source. Mobile users on older Android versions are experiencing hard blocks regarding basic file system permissions ([Issue #2880](https://github.com/sipeed/picoclaw/issues/2880)). Conversely, power users are focused on advanced interoperability—specifically the urgent need to upgrade MCP transport protocols to Streamable HTTP ([Issue #2782](https://github.com/sipeed/picoclaw/issues/2782)).

### 8. Backlog Watch
The following important items are growing stale and require maintainer triage to keep the project healthy:
*   **Long-Standing Enhancement:** [Issue #2421](https://github.com/sipeed/picoclaw/issues/2421) (Native Email Channel) has been open since April 2026 and is marked as `stale`. Given its 6 comments and user upvotes, it deserves a formal roadmap status update.
*   **Unclear UX Fix:** [PR #2835](https://github.com/sipeed/picoclaw/pull/2835) (fixing interim message suppression) has been open since May 9th with no comments or maintainer review. Because this alters core agent reply logic, it needs architectural eyes on it.
*   **Critical v0.2.8 Bug:** [Issue #2742](https://github.com/sipeed/picoclaw/issues/2742) (Gateway starts with no channels) is actively blocking upgrades for users on `v0.2.8` and should be prioritized for the nightly build diagnostics.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-17

## 1. Today's Overview
NanoClaw is experiencing a highly active development cycle, heavily focused on platform stability, operational tooling, and container orchestration. Over the past 24 hours, the project saw a surge in bug reports related to container runtimes and inter-process communication, indicating a growing and diverse user base deploying the framework in real-world production environments. Concurrently, maintainers and contributors are iterating rapidly on a comprehensive health-monitoring and auto-recovery system. With 7 open issues and 7 open pull requests, the current focus is clearly on hardening the v2 ecosystem rather than releasing new versions.

## 2. Releases
No new releases were recorded today. The repository has not published a new version recently, suggesting the current development phase is focused on stabilizing the core architecture, merging bug fixes, and refining the v2 branch before a formal release.

## 3. Project Progress
Two pull requests were merged/closed today, and several major feature PRs advanced through active review:
* **Changelog Maintenance:** PR [#2509](https://github.com/qwibitai/nanoclaw/pull/2509) was merged to align the v2.0.63 rollup line with documentation standards, ensuring clean release notes.
* **PR Closed (Unmerged):** PR [#2515](https://github.com/qwibitai/nanoclaw/pull/2515) (Telegram inline keyboard support) was closed, representing a deferral or rejection of this specific implementation.
* **Operational Tooling Advancement:** Contributor `alexli-77` pushed forward a suite of interconnected PRs aimed at system resilience, including host-side silent-fail detection ([#2498](https://github.com/qwibitai/nanoclaw/pull/2498)), OAuth token refresh ([#2505](https://github.com/qwibitai/nanoclaw/pull/2505)), and a sweeping 5-minute health monitor ([#2508](https://github.com/qwibitai/nanoclaw/pull/2508)).
* **v2 Skill Compatibility:** PR [#2507](https://github.com/qwibitai/nanoclaw/pull/2507) was opened to prevent the system from pulling in legacy v1.x skill branches, actively protecting the v2 codebase from breaking changes.

## 4. Community Hot Topics
The most actively discussed item is an older, recently updated request for alternative container runtimes. 
* **Podman Support ([#957](https://github.com/qwibitai/nanoclaw/issues/957)):** With 8 comments and 6 thumbs-up, this is a highly requested enhancement. The underlying need is that users (especially on macOS and Linux) are seeking lighter, daemon-less alternatives to Docker. 
* **Network & Setup Failures:** A cluster of new issues highlights friction during initial setup and deployment, specifically surrounding Docker networking and container communication (e.g., PostgreSQL connectivity issues in [#2512](https://github.com/qwibitai/nanoclaw/issues/2512) and Colima CA cert failures in [#2513](https://github.com/qwibitai/nanoclaw/issues/2513)). This indicates that while the project is maturing, the initial developer onboarding experience for specific environments still lacks smooth edge-case handling.

## 5. Bugs & Stability
Today's bug reports highlight critical edge cases in state management and container orchestration:
1. **High Severity - Silent Data Loss / Deduplication Bug ([#2506](https://github.com/qwibitai/nanoclaw/issues/2506)):** Agent responses are silently dropped if turns complete within 60 seconds of each other. This directly impacts core functionality, as the `send_message` dedup logic treats rapid sequential responses as duplicates. No fix PR is currently tracked.
2. **High Severity - Inter-process Communication Failure ([#2512](https://github.com/qwibitai/nanoclaw/issues/2512)):** Default Ubuntu installations are failing to connect OneCLI and PostgreSQL across Docker bridge networks. This is a blocking issue for default setups.
3. **Medium Severity - State Journal Corruption ([#2516](https://github.com/qwibitai/nanoclaw/issues/2516)):** Container hard kills (exit code 137) leave stale `outbound.db-journal` files, crashing the host delivery poll. *(Fix exists: PR [#2510](https://github.com/qwibitai/nanoclaw/pull/2510) addresses receiver hydration on the approval path).*
4. **Low Severity - Setup Stuck on Dialog ([#2514](https://github.com/qwibitai/nanoclaw/issues/2514)):** The `needrestart` whiptail dialog halts headless or automated setups. 

## 6. Feature Requests & Roadmap Signals
* **Operational Health Dashboard / CLI ([#2504](https://github.com/qwibitai/nanoclaw/issues/2504)):** A request for an `ncl status` command to provide lightweight health checks (container alive, recent errors). Given that PRs [#2498](https://github.com/qwibitai/nanoclaw/pull/2498) and [#2508](https://github.com/qwibitai/nanoclaw/pull/2508) are already building the underlying health-monitor infrastructure, it is highly probable this user request will be integrated into the next release.
* **Multi-Agent Networking ([#2497](https://github.com/qwibitai/nanoclaw/pull/2497)):** An open PR introducing an "agent network" skill. This suggests a strong roadmap signal toward decentralized, multi-agent collaboration in upcoming versions.

## 7. User Feedback Summary
User feedback today is largely technical and environment-specific, carrying a mix of frustration and appreciation. Users are impressed by the core design (as noted in [#957](https://github.com/qwibitai/nanoclaw/issues/957)) but express operational friction when deploying on non-standard or specific setups (like Colima on macOS or standard Ubuntu bridges). The main pain points revolve around opaque failure modes—such as messages silently failing ([#2506](https://github.com/qwibitai/nanoclaw/issues/2506)) or setup processes hanging without CLI feedback ([#2514](https://github.com/qwibitai/nanoclaw/issues/2514)). Users are actively relying on NanoClaw for continuous, high-frequency task execution, making race conditions and container state management their primary concerns.

## 8. Backlog Watch
Maintainers should direct their attention to the following areas:
* **Telegram PR Abandonment:** The closure of PR [#2515](https://github.com/qwibitai/nanoclaw/pull/2515) (Inline Keyboards) requires a comment or updated issue to let the community know if this feature is being reworked or permanently deprioritized.
* **Networking Onboarding:** The clustering of issues regarding Postgres ([#2512](https://github.com/qwibitai/nanoclaw/issues/2512)) and Colima ([#2513](https://github.com/qwibitai/nanoclaw/issues/2513)) needs triage. Ensuring the `docker-compose` / network defaults work flawlessly out-of-the-box should be a priority before the next release.
* **Agent Deduplication Logic:** The silent drop bug ([#2506](https://github.com/qwibitai/nanoclaw/issues/2506)) fundamentally undermines agent reliability for fast-executing tasks and requires architectural triage.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-17

## 1. Today's Overview
IronClaw experienced a high-velocity development day, characterized by heavy architectural work on the "Reborn" runtime and 25 updated pull requests (12 merged/closed, 13 open). Activity is strongly dominated by core contributors (`serrrfirat`, `ilblackdragon`, `henrypark133`) who are rapidly landing the foundational subsystems for the next-generation agent loop. The maintainers are doing an excellent job splitting the massive "Reborn" cutover into well-scoped, heavily documented issues and PRs. The ratio of active issues (14 open, 1 closed) to merged PRs indicates a project in a heavy, systematic building phase rather than a feature-freeze or bug-fixing phase, though a few notable stability concerns regarding nightly E2E tests and macOS gateway bindings did surface today.

## 2. Releases
No new releases were cut today. The project remains on its current public version while the core team integrates the "Reborn" architectural changes.

## 3. Project Progress
Significant forward momentum occurred today, particularly in structural refactoring and the new "Reborn" runtime:
*   **Workspace Reorganization:** A massive refactoring effort ([PR #3575](https://github.com/nearai/ironclaw/pull/3575)) was merged, grouping workspace crates into semantic domain folders (foundation, policy, runtime, etc.) to improve monorepo navigation.
*   **Reborn Composition Root & Live Binary:** The team merged the WS-17 product live planned-runtime cutover ([PR #3653](https://github.com/nearai/ironclaw/pull/3653)), proving the new inbound path works. This was followed up by opening the new Reborn composition root binary ([PR #3695](https://github.com/nearai/ironclaw/pull/3695)) and boot config files ([PR #3704](https://github.com/nearai/ironclaw/pull/3704)).
*   **Web UI & Tooling:** Merged the new Cmd+K omnisearch command palette ([PR #2335](https://github.com/nearai/ironclaw/pull/2335)), the design system visual language overhaul ([PR #2715](https://github.com/nearai/ironclaw/pull/2715)), and a fix for the chat image picker ([PR #2759](https://github.com/nearai/ironclaw/pull/2759)). A frontend-only logs download button was also closed ([PR #3588](https://github.com/nearai/ironclaw/pull/3588)).
*   **Architecture & Security:** The universal filesystem dispatch fabric was applied across consumer crates ([PR #3679](https://github.com/nearai/ironclaw/pull/3679)), and a new `WebUI` service facade was added to the product workflow with ported security checks ([PR #3691](https://github.com/nearai/ironclaw/pull/3691)).

## 4. Community Hot Topics
The most heavily discussed items revolve around the architectural boundaries and ingress routing of the "Reborn" engine:
*   **Configuration-as-Code Epic ([Issue #3036](https://github.com/nearai/ironclaw/issues/3036)):** With 4 comments and 1 reaction, this is a highly anticipated epic. The community and maintainers are actively discussing how operators will declaratively configure tenant blueprints without hand-editing `.env` and JSON files.
*   **Production Ingress & Identity Wiring ([Issue #3616](https://github.com/nearai/ironclaw/issues/3616), [Issue #3692](https://github.com/nearai/ironclaw/issues/3692)):** henrypark133 opened detailed discussions (4 and 3 comments respectively) on how to safely route production traffic into the Reborn loop and manage policy-gated personal identity prompts. This signals that the core team is deeply focused on enterprise-grade reliability before routing real traffic.

## 5. Bugs & Stability
Three notable stability issues were identified today:
1.  **Nightly E2E Failure ([Issue #3447](https://github.com/nearai/ironclaw/issues/3447)):** The scheduled E2E test run failed. This requires immediate maintainer attention to prevent regressions in the main branch.
2.  **macOS Gateway Binding Bug ([Issue #3701](https://github.com/nearai/ironclaw/issues/3701)):** A user reported that the v0.28.2 prebuilt binary for macOS fails to bind the gateway, despite config and `ironclaw doctor` reporting it as enabled. *Status: Open, no fix PR yet.*
3.  **Missing Run-Profile Resolver ([Issue #3696](https://github.com/nearai/ironclaw/issues/3696)):** Production composition factories are currently missing the explicit run-profile resolver merged in a previous PR, which could cause issues in production environments if not addressed before the Reborn cutover.

## 6. Feature Requests & Roadmap Signals
Today's issues provide a clear map of immediate short-term roadmap targets:
*   **Tool Call Roundtripping:** [Issue #3620](https://github.com/nearai/ironclaw/issues/3620) and [Issue #3622](https://github.com/nearai/ironclaw/issues/3622) request converting provider tool calls into the new loop protocol and verifying tool-result evidence.
*   **Reborn Web Ingress Rollout:** [Issue #3700](https://github.com/nearai/ironclaw/issues/3700) outlines the exact feature flag (`REBORN_PRODUCT_LIVE`) needed to start routing web chat through the new runtime.
*   **Multi-Channel Support:** [Issue #3699](https://github.com/nearai/ironclaw/issues/3699) tracks the rollout of the Reborn workflow to CLI, Telegram, and webhooks, which is currently deferred until web proves stable.
*   **Tool Disabling:** [PR #3548](https://github.com/nearai/ironclaw/pull/3548) introduces a `DISABLE_TOOLS_LIST` flag, signaling a push for more granular administrative and security controls over the agent's capabilities.

## 7. User Feedback Summary
User feedback today highlights a mix of advanced operational needs and typical end-user troubleshooting:
*   **Operator Pain Points:** Operators are feeling the burden of fragmented configuration (`.env`, workspace docs, JSONs). The demand for Configuration-as-Code ([Issue #3036](https://github.com/nearai/ironclaw/issues/3036)) underscores a need for better deployment scalability.
*   **Platform Friction:** The macOS gateway bug ([Issue #3701](https://github.com/nearai/ironclaw/issues/3701)) represents annoying platform-specific friction for local developers.
*   **Agent Persona Needs:** The discussion around personal identity context ([Issue #3692](https://github.com/nearai/ironclaw/issues/3692)) highlights that users want consistent, stateful AI personas, requiring the backend to maintain strict policy-gated heartbeat prompts.

## 8. Backlog Watch
*   **Externally-Provided Tools ([PR #3122](https://github.com/nearai/ironclaw/pull/3122)):** This large XL-sized PR replacing prompt-level external tools with engine v2 native tool calls has been open since April 30th. It is highly active but requires continued core reviewer attention to merge without disrupting the new Reborn architecture.
*   **Host Kernel Composition Blocker ([Issue #3026](https://github.com/nearai/ironclaw/issues/3026)):** Flagged as a `suggested_P0` and `reborn` cutover blocker, this issue is critical for defining the production startup graph. It needs to remain a top priority for the core team to prevent delays in the Reborn launch.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the project digest for LobsterAI based on the provided GitHub activity data for May 17, 2026.

### 1. Today's Overview
LobsterAI is currently demonstrating high development velocity with a focused push towards UI enhancements and multi-model support. In the last 24 hours, the project saw a significant ratio of merged pull requests (10 closed/merged vs. 12 open), indicating an active and responsive maintainer team merging a consolidated release train. Activity was primarily driven by core contributors finalizing the `release/2026.5.15` integration branch, which brings artifacts UX upgrades and IM onboarding improvements. Despite the strong development momentum, a critical desktop connectivity bug has surfaced in the community, which warrants immediate attention. Overall, the project's open-source health is highly active, though several older community PRs remain stalled.

### 2. Releases
**No new official releases were published in the last 24 hours.** 
However, core maintainers finalized the release cut via [PR #1998](https://github.com/netease-youdao/LobsterAI/pull/1998), merging the `release/2026.5.15` branch into `main`. This bundles the upcoming `2026.5.16` app version, which includes product fixes, artifacts UX right-side preview updates, IM onboarding, and OpenClaw/Cowork changes. A formal GitHub release tag is expected imminently.

### 3. Project Progress
Significant structural and feature advancements were merged today, spearheaded by maintainers `fisherdaddy` and `liuzhq1986`:
*   **Release Integration:** [PR #1998](https://github.com/netease-youdao/LobsterAI/pull/1998) successfully merged the latest bi-weekly release train.
*   **Model Support Updates:** [PR #1997](https://github.com/netease-youdao/LobsterAI/pull/1997) updated the default models for providers, and [PR #813](https://github.com/netease-youdao/LobsterAI/pull/813) successfully added Xiaomi's MiMo V2 Pro and MiMo V2 Omni models.
*   **UI & UX Improvements:** The "Dream UI" received multiple optimizations across renderer, main, OpenClaw, and Cowork modules ([PR #1995](https://github.com/netease-youdao/LobsterAI/pull/1995), [PR #1996](https://github.com/netease-youdao/LobsterAI/pull/1996)).
*   **Bug Fixes:** Maintainers squashed a bug where default model options incorrectly displayed in the model list ([PR #1992](https://github.com/netease-youdao/LobsterAI/pull/1992)) and fixed reasoning content handling for the mimo model in multi-turn sessions ([PR #1994](https://github.com/netease-youdao/LobsterAI/pull/1994), [PR #1999](https://github.com/netease-youdao/LobsterAI/pull/1999)).

### 4. Community Hot Topics
The most active items by recent activity are core contributor merges and dependency updates, alongside a highly impactful community issue:
*   **Major Vite Dependency Bump:** [PR #1766](https://github.com/netease-youdao/LobsterAI/pull/1766) is an automated dependabot PR attempting to bump Vite from v5.4.21 to v8.0.13. This represents a major framework upgrade that likely requires careful testing before merging.
*   **Desktop Connectivity Failure:** [Issue #1993](https://github.com/netease-youdao/LobsterAI/issues/1993) has quickly gained traction as a fresh user-reported problem where the desktop client persistently loses its AI engine connection, whereas IM Bot connections remain stable. 

### 5. Bugs & Stability
*   🔴 **P0: AI Engine Connection Lost ([Issue #1993](https://github.com/netease-youdao/LobsterAI/issues/1993)):** Users are completely blocked from using the desktop application directly. The engine drops connections, forcing users to rely on IM Bot workarounds. *No fix PR is currently noted.*
*   🟠 **P1: API Authentication Regressions:** [PR #798](https://github.com/netease-youdao/LobsterAI/pull/798) highlights that DashScope/Volcengine/Zhipu Anthropic compatibility modes are returning `401` errors due to incorrect header implementations (`x-api-key` vs `Authorization: Bearer`).
*   🟠 **P1: Zombie Sessions:** [PR #805](https://github.com/netease-youdao/LobsterAI/pull/805) points out a critical resource leak where deleting a running session does not abort the backend gateway run, silently burning user tokens.

### 6. Feature Requests & Roadmap Signals
Recent merges and open PRs signal a strong roadmap focus on expanding LLM provider options and enterprise collaboration tools:
*   **Conversation Export:** [PR #789](https://github.com/netease-youdao/LobsterAI/pull/789) introduces a highly requested native capability to export sessions to Markdown and PDF directly from the UI.
*   **Omnichannel LLM Integration:** The successful merge of [PR #813](https://github.com/netease-youdao/LobsterAI/pull/813) (Xiaomi models) and updates in [PR #1997](https://github.com/netease-youdao/LobsterAI/pull/1997) indicate that the team is actively broadening official model provider support.
*   **Security Hardening:** [PR #790](https://github.com/netease-youdao/LobsterAI/pull/790) and [PR #794](https://github.com/netease-youdao/LobsterAI/pull/794) suggest upcoming releases will feature better local security (removal of hardcoded export passwords and URL scheme allowlists).

### 7. User Feedback Summary
The core user base consists of power users leveraging the desktop application alongside IM integrations (like DingTalk). Users appreciate the agentic "Cowork" features but experience friction with client stability and UI responsiveness. A major pain point is reliability differences across platforms (e.g., desktop crashing while IM bots stay connected). Furthermore, community members like `zlx` and `coderliguoqing` have provided extensive, high-quality root-cause analyses for bugs (e.g., duplicate session submissions, disabled skills still running), showing a deeply engaged technical community willing to assist in triaging.

### 8. Backlog Watch
There are several highly valuable, older PRs that have gone stale and urgently require maintainer review:
*   **Security Vulnerability:** [PR #794](https://github.com/netease-youdao/LobsterAI/pull/794) (URL scheme allowlist) is a critical security fix that has been open since March 25.
*   **Agent Logic Fixes:** [PR #793](https://github.com/netease-youdao/LobsterAI/pull/793) and [PR #801](https://github.com/netease-youdao/LobsterAI/pull/801) address a severe bug where disabled skills continue to be invoked by the AI model because the gateway fails to restart.
*   **UX State Bugs:** [PR #799](https://github.com/netease-youdao/LobsterAI/pull/799) (missing streaming state on continue) and [PR #804](https://github.com/netease-youdao/LobsterAI/pull/804) (lack of debounce causing double submissions) are low-risk, high-reward fixes ready for review.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Based on the provided GitHub data for Moltis, here is the structured project digest for 2026-05-17:

### 1. Today's Overview
The Moltis project maintained a healthy and active development pace over the last 24 hours, characterized by a strong focus on multi-agent orchestration and enterprise infrastructure. The community and contributors remain highly engaged, pushing three pull requests and opening a strategic feature request. Activity is currently focused on expanding LLM provider capabilities, adding secure networking tunnels, and improving the responsiveness of parent agent sessions. Overall, the project demonstrates robust forward momentum with clear enterprise-readiness signals.

### 2. Releases
**No new releases** were recorded in the last 24 hours. The project is currently operating on its previously published stable version.

### 3. Project Progress
One pull request was closed today, indicating ongoing reviews and repository maintenance:
*   **Closed:** [PR #1003 feat(skills): add agent system builder skill](https://github.com/moltis-org/moltis/pull/1003) by `kyungw00k`. This PR aimed to introduce a bundled skill for designing multi-user, distributed agent systems using Moltis-derived patterns. While it was closed (likely unmerged based on standard Git flows), it shows active community interest in agent-architecture tooling. 

Two significant infrastructure and provider PRs remain open and under active review:
*   **Open:** [PR #1002 feat(remote-access): add NetBird and Cloudflare Tunnel support](https://github.com/moltis-org/moltis/pull/1002) by `penso`. This is a major infrastructure addition that brings managed loopback-preserving TCP forwarding and zero-trust remote access to the assistant.
*   **Open:** [PR #1005 feat(openai-codex): add reasoning effort support](https://github.com/moltis-org/moltis/pull/1005) by `PeterDaveHello`. This advances the project's GPT-5 Codex integration by allowing configurable reasoning efforts while ensuring existing encrypted reasoning blobs remain intact for follow-up turns.

### 4. Community Hot Topics
Activity in the last 24 hours was primarily driven by contributors rather than widespread community discussion, with zero comments recorded on the latest issues and PRs. However, the open issues and PRs highlight what the community values most: secure, remote accessibility and advanced LLM context handling. 

### 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. Project stability appears to be steady. The most stability-adjacent work today comes from PR #1005, which specifically focuses on maintaining state integrity (keeping `reasoning.encrypted_content` intact) during Codex API calls, ensuring existing multi-turn agent workflows do not break.

### 6. Feature Requests & Roadmap Signals
A major architectural feature was requested today that signals where users want to take the agent framework:
*   **Non-blocking Sub-Agent Orchestration:** [Issue #1004 [Feature]: Non-blocking spawn_agent](https://github.com/moltis-org/moltis/issues/1004) opened by `dmitriikeler`. 
    *   **Analysis:** Currently, `spawn_agent` blocks the parent LLM turn. The user is requesting asynchronous sub-agent spawning so the parent session remains responsive. Given the open PRs focusing on remote access and multi-agent builder skills, asynchronous agent orchestration is a highly probable feature inclusion in an upcoming release.

### 7. User Feedback Summary
User feedback today is encapsulated entirely in feature requests and contributions, pointing to advanced, enterprise-level use cases:
*   **Pain Point:** Developers are experiencing workflow bottlenecks when parent agents freeze while waiting for long-running sub-agents to complete their tasks (Issue #1004).
*   **Use Cases:** Users are actively building distributed, multi-channel agent systems (PR #1003) and require secure remote access to their local AI assistants over private meshes and tunnels (PR #1002). Satisfaction is high, evidenced by sophisticated, production-ready pull requests rather than basic troubleshooting.

### 8. Backlog Watch
While no long-dormant items surfaced today, the newly opened items require maintainer attention to prevent future backlog:
*   **Maintainer Action Needed:** [PR #1002](https://github.com/moltis-org/moltis/pull/1002) and [PR #1005](https://github.com/moltis-org/moltis/pull/1005) currently show `undefined` comment counts and need initial architectural reviews.
*   **Discussion Needed:** [Issue #1004](https://github.com/moltis-org/moltis/issues/1004) has 0 comments and 0 reactions. Because implementing non-blocking `spawn_agent` logic requires restructuring the core event loop, maintainers should weigh in on the feasibility and roadmap alignment soon.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-05-17

## 1. Today's Overview
The CoPaw (QwenPaw) project is experiencing a highly active development phase with a strong focus on enhancing context management, expanding third-party provider integrations, and improving the user experience for multi-channel deployments. The community remains highly engaged, submitting 12 new or updated issues and 12 active pull requests within the last 24 hours, predominantly focusing on architectural refinements and new features. Notably, activity is heavily concentrated on optimizing long-term memory (context compaction and session splitting) and integrating new capabilities like xAI's Grok. However, the lack of closed issues and merged PRs today suggests a temporary review bottleneck or accumulation phase before the next release.

## 2. Releases
No new releases were recorded today. The latest referenced version in current bug reports is `v1.1.7`.

## 3. Project Progress
Although no PRs were merged today, 11 open PRs are actively under review, representing significant upcoming project progress:
*   **Architectural Refactoring:** PR [#4446](https://github.com/agentscope-ai/QwenPaw/pull/4446) addresses dependency boundaries by making the `qwenpaw.app.runner` package lightweight, fixing import issues in partial dev environments. 
*   **New Provider Integration:** PR [#4444](https://github.com/agentscope-ai/QwenPaw/pull/4444) introduces a comprehensive xAI OAuth flow and Grok chat provider, expanding model diversity.
*   **Context & Session Management:** PR [#4443](https://github.com/agentscope-ai/QwenPaw/pull/4443) implements a lightweight `/goal` mode for session objectives, while PR [#4223](https://github.com/agentscope-ai/QwenPaw/pull/4223) fixes "zombie sessions" with soft deletes. PR [#4434](https://github.com/agentscope-ai/QwenPaw/pull/4434) adds a context-clearing option for cron tasks.
*   **Tooling & Environment:** PR [#4438](https://github.com/agentscope-ai/QwenPaw/pull/4438) improves the `browser_use` tool by adding tab URLs and titles. PR [#4173](https://github.com/agentscope-ai/QwenPaw/pull/4173) and [#4331](https://github.com/agentscope-ai/QwenPaw/pull/4331) enhance the `execute_shell_command` tool, fixing Unix pipe hanging issues and injecting request context for better attribution.

## 4. Community Hot Topics
The most actively discussed topics revolve around UI/UX improvements and context length management:
*   **Context & Cost Control:** Proposed by user *hyper0x*, Issues [#4435](https://github.com/agentscope-ai/QwenPaw/issues/4435) (displaying chat turn counts/token estimations) and [#4436](https://github.com/agentscope-ai/QwenPaw/issues/4436) (splitting conversations to new sessions) address the growing pain point of context window膨胀 (bloat) and associated API costs.
*   **Channel Interactivity:** Issue [#4451](https://github.com/agentscope-ai/QwenPaw/issues/4451) suggests bringing interactive approval buttons to Telegram and QQ channels, moving away from plain-text command reliance.
*   **Approval Workflows:** Building on recently implemented short commands, Issue [#4450](https://github.com/agentscope-ai/QwenPaw/issues/4450) requests session/always scopes for `/approve` and `/deny` commands to reduce user friction.

## 5. Bugs & Stability
Two critical stability issues were reported, highlighting risks in long-running or heavily loaded agent instances:
*   **Critical - Model 429 Freeze:** Issue [#4449](https://github.com/agentscope-ai/QwenPaw/issues/4449) reports that during HTTP 429 (TPM limit) errors, the `zero_downtime_reload` mechanism permanently clears the message queue, causing the agent to freeze entirely without replying. No fix PR is currently attached to this issue, making it a high-priority target.
*   **High - Context Compaction Failure:** Issues [#4448](https://github.com/agentscope-ai/QwenPaw/pull/4448) and [#4447](https://github.com/agentscope-ai/QwenPaw/issues/4447) report frequent failures in context compaction during long conversations due to an "invalid format (missing ## header)" error. 
*   **Medium - Cron State Leaks:** PR [#4084](https://github.com/agentscope-ai/QwenPaw/pull/4084) is open to fix concurrency state leaks in `CronManager`, a crucial fix for scheduled autonomous agents.

## 6. Feature Requests & Roadmap Signals
The community is clearly pushing CoPaw toward becoming a more robust, multi-interface personal assistant. Key signals include:
*   **Desktop Reliability:** PR [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) introduces a Windows system tray startup item, allowing agents to run continuously in the background.
*   **External Memory Systems:** Issue [#4439](https://github.com/agentscope-ai/QwenPaw/issues/4439) discusses integrating external memory systems (like Hindsight) via plugins, signaling a demand for better long-term memory architectures.
*   **Simplified Model Configurations:** Issue [#4441](https://github.com/agentscope-ai/QwenPaw/issues/4441) requests one-click model setups (specifically mentioning OpenCode Go), showing a desire for lower barriers to entry.

## 7. User Feedback Summary
Users are actively using CoPaw for complex, long-running autonomous tasks (via Cron and Unix shells) and multi-channel deployments. The primary sources of dissatisfaction stem from **context management failures** (compaction bugs) and **silent agent freezes** during rate-limiting. However, users are highly engaged in proposing structural UI enhancements, such as conversation splitting and better visibility into token usage, indicating a sophisticated user base that is mindful of context limits and API costs.

## 8. Backlog Watch
*   **Long-standing PRs needing maintainer attention:** 
    *   PR [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) (System tray startup) and PR [#4084](https://github.com/agentscope-ai/QwenPaw/pull/4084) (`CronManager` state leaks) have been open for over 10 days and require merging to significantly improve desktop and cron stability.
    *   PR [#3246](https://github.com/agentscope-ai/QwenPaw/pull/3246) (QQ instant acknowledgment message) has been open since April 10th and was closed today without merging; the status should be clarified for the contributor.
*   **Critical Issue needing triage:** Issue [#4449](https://github.com/agentscope-ai/QwenPaw/issues/4449) (Agent freeze on 429 errors) requires immediate maintainer response, as the current `zero_downtime_reload` logic fundamentally breaks the user experience during traffic spikes.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-17

## 1. Today's Overview
ZeroClaw is currently experiencing a period of exceptionally high activity, driven primarily by an ambitious pull request volume focused on core architectural improvements, memory consolidation, and desktop/UI expansion. With 50 issues and 50 pull requests updated in the last 24 hours (39 of which remain open), the project is in a heavy development and iteration phase, though no new stable release was cut today. Contributors are heavily focused on maturing the "skills" system and fixing systemic stability issues in the gateway and provider layers. While community engagement remains high, there is a growing backlog of `status:blocked` and `needs-maintainer-review` items that require core team triage.

## 2. Releases
**No new releases** were published today. The project appears to be actively working toward the **v0.7.6 milestone**, which is themed around improving skills support and user experience (UX).

## 3. Project Progress
Although 11 PRs were closed/merged today, the most significant progress is visible in the major open PRs advancing the project's core capabilities:
*   **Skills Management UX & API:** PR [#6700](https://github.com/zeroclaw-labs/zeroclaw/pull/6700) introduces a new Gateway skills management API with enable/disable toggles and a companion web dashboard.
*   **Agent Memory & Background Tasks:** PR [#6693](https://github.com/zeroclaw-labs/zeroclaw/pull/6693) introduces a "Dream Mode" for periodic memory consolidation, while PR [#6667](https://github.com/zeroclaw-labs/zeroclaw/pull/6667) adds a background review fork and `skill_manage` tool, heavily inspired by Hermes-Agent.
*   **Desktop & Channel Expansion:** PR [#6710](https://github.com/zeroclaw-labs/zeroclaw/pull/6710) extends the Tauri desktop app with robust support for Linux and Windows permission models, and PR [#6649](https://github.com/zeroclaw-labs/zeroclaw/pull/6649) adds SQLite-backed persistence for editor ACP (Agent Communication Protocol) sessions.
*   **Observability & Recovery:** Core infrastructural fixes include restoring broken SSE log streams and health pulses for Docker deployments ([#6553](https://github.com/zeroclaw-labs/zeroclaw/pull/6553)), fixing localizations for runtime command replies ([#6550](https://github.com/zeroclaw-labs/zeroclaw/pull/6550)), and tracking the recovery of 153 previously lost commits ([#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)).

## 4. Community Hot Topics
*   **Fresh Install Provider Bug ([#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123), 18 comments):** A critical S1 bug preventing fresh installations from properly configuring the default model. This generated the most discussion today, highlighting onboarding friction for new users. 
*   **Webhook & Agent Loops ([#3542](https://github.com/zeroclaw-labs/zeroclaw/issues/3542) & [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467), 9 combined comments):** Users are heavily requesting that the Gateway's webhook ingress support full agent workflows and custom payload transforms, rather than acting as a simple chat proxy.
*   **Native OAuth for Providers ([#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601), 5 comments):** A highly requested feature to add subscription-native OAuth for providers like Ollama Cloud, Kimi, and MiniMax to free users from managing static API keys.
*   **Mattermost Private Messaging ([#5604](https://github.com/zeroclaw-labs/zeroclaw/issues/5604), 3 comments):** Strong community demand for 1-on-1 bot interactions in Mattermost, pointing to ZeroClaw's increasing usage as an internal team assistant.

## 5. Bugs & Stability
Several high-severity bugs were reported today, though contributors have been quick to draft fixes:
*   **Risk: High - `tool_search` & Webhook Silent Hang ([#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721)):** `tool_search` is omitted from the default auto-approve list, causing deferred loading via webhooks to silently hang for 120s and crash. No PR is linked yet.
*   **Risk: High - `model_switch` Doesn't Persist ([#6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173)):** The model switch tool resets across conversation turns. **Fix available:** PR [#6719](https://github.com/zeroclaw-labs/zeroclaw/pull/6719) has been opened to persist route selection properly.
*   **Risk: High - Context Compressor Drops Reasoning ([#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269)):** Context compression strips `reasoning_content` from assistant messages, severely degrading performance on reasoning models like DeepSeek.
*   **Risk: Medium - OpenAI Timeout Ignored ([#6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723)):** The native OpenAI provider ignores the `timeout_secs` config, hardcoding a 120s timeout that fails on long-running generation tasks.
*   **Risk: Low - Channels Crashloop ([#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724)):** If all configured channels are disabled, the channels orchestrator enters a 2-second crashloop. 
*   **Risk: Low - Codex Stream Panic ([#6712](https://github.com/zeroclaw-labs/zeroclaw/pull/6712)):** Leftover bytes during stream cleanup could cause a panic; PR opened to gracefully propagate an error instead.

## 6. Feature Requests & Roadmap Signals
Looking at the v0.7.6 milestone and user demand, several strong roadmap signals are emerging:
*   **Skills & Security Overhaul:** Users want per-skill security permissions ([#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775)) and a lighter core footprint by replacing ad-hoc integrations with skills ([#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)).
*   **Advanced Agent Interfaces:** The community is pushing for a Ratatui-based TUI to rival Claude Code ([#5882](https://github.com/zeroclaw-labs/zeroclaw/issues/5882)) and native Language Server Protocol (LSP) support to reduce coding hallucinations ([#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)).
*   **Model Configuration Granularity:** Users are requesting model-specific reasoning configurations ([#5843](https://github.com/zeroclaw-labs/zeroclaw/issues/5843)) instead of relying on global runtime settings.
*   **Automated Deliverables:** Scheduled reporting via SMTP email ([#5573](https://github.com/zeroclaw-labs/zeroclaw/issues/5573)) and pre-hook skip gates for cron jobs ([#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607)) are highly requested, indicating ZeroClaw is being adopted for automated task-runner use cases.

## 7. User Feedback Summary
User feedback indicates that ZeroClaw is being adopted for sophisticated, multi-channel enterprise and power-user setups (e.g., remote vLLM backends, Raspberry Pi deployments, Mattermost integrations). 
*   **Pain Points:** Users are frustrated by configuration persistence bugs (like model switching and default provider setups) and silent failures (webhook timeouts, ignored timeout configs). The lack of a cohesive documentation site is also slowing down onboarding ([#5994](https://github.com/zeroclaw-labs/zeroclaw/issues/5994)).
*   **Satisfaction:** Users are highly enthusiastic about the plugin/skills ecosystem and the "Dream Mode" memory consolidation concept, viewing ZeroClaw as a highly customizable alternative to locked-down SaaS agents.

## 8. Backlog Watch
A large cluster of critical issues and PRs are currently sitting in `status:blocked` or `needs-maintainer-review`, requiring immediate core-team attention to keep the v0.7.6 release on track:
*   **CI/CD & Releases:** PR [#5908](https://github.com/zeroclaw-labs/zeroclaw/issues/5908) requesting GitHub Actions for container builds is stalled.
*   **Architecture RFCs:** Critical architectural decisions like LSP support ([#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)), webhook agent mode ([#3542](https://github.com/zeroclaw-labs/zeroclaw/issues/3542)), and security-scoped skills ([#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775)) are awaiting maintainer review.
*   **Security Audits:** The prompt manifest audit follow-up ([#6132](https://github.com/zeroclaw-labs/zeroclaw/issues/6132)) and `extra_args` validation for Codex CLI ([#5842](https://github.com/zeroclaw-labs/zeroclaw/issues/5842)) need priority reviews before the next release candidate is cut.

</details>