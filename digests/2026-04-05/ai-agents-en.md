# OpenClaw Ecosystem Digest 2026-04-05

> Issues: 500 | PRs: 500 | Projects covered: 11 | Generated: 2026-04-04 22:03 UTC

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

# OpenClaw Project Digest: 2026-04-05

## 1. Today's Overview
OpenClaw is experiencing **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a rapidly evolving codebase and highly engaged community. The project shows signs of **growing pains** typical of a popular open-source AI agent framework—while new features and platform support expand, regression bugs and configuration complexity are top user concerns. The volume of merged PRs (212) suggests the maintainers are actively shipping fixes, though 279 open issues indicate the bug backlog is accumulating faster than it's being closed. Key themes for the day include multi-channel stability (Discord, Telegram, WhatsApp), execution security UX friction, and the ongoing demand for internationalization.

## 2. Releases
**No new releases** were recorded today. The project appears to be in an active development cycle with changes landing on the main branch, but no tagged stable version was published on 2026-04-05.

## 3. Project Progress
Significant progress was made across multiple subsystems through merged PRs:

*   **Plugin Architecture Hardening:** A major refactor ([PR #61023](https://github.com/openclaw/openclaw/pull/61023)) introduced stricter TypeScript project boundaries for extensions, improving long-term maintainability.
*   **Web Search Unification:** Credential wiring for various web search providers (Moonshot, Tavily, DuckDuckGo, etc.) was unified in [PR #53148](https://github.com/openclaw/openclaw/pull/53148), reducing code duplication and configuration drift.
*   **Channel & Comms Fixes:**
    *   WhatsApp infinite self-reply loop fixed ([PR #61045](https://github.com/openclaw/openclaw/pull/61045)).
    *   Discord "thinking" leak prevention implemented ([PR #60982](https://github.com/openclaw/openclaw/pull/60982)).
    *   Heartbeat task batching added ([PR #59923](https://github.com/openclaw/openclaw/pull/59923)), allowing multiple periodic checks in a single run.
    *   Signal quote reply support added ([PR #57806](https://github.com/openclaw/openclaw/pull/57806)).
*   **UI/UX:** Mobile chat layout improved ([PR #60220](https://github.com/openclaw/openclaw/pull/60220)), and the Cron refresh button received a dedicated loading state ([PR #60394](https://github.com/openclaw/openclaw/pull/60394)).
*   **Platform Support:** Chrome 146+ screenshot compatibility fixed ([PR #60682](https://github.com/openclaw/openclaw/pull/60682)), and Docker/Mac setup was hardened ([PR #61044](https://github.com/openclaw/openclaw/pull/61044)).

## 4. Community Hot Topics
The most discussed issues highlight community priorities around accessibility and platform expansion:

1.  **Internationalization (i18n) Demand ([Issue #3460](https://github.com/openclaw/openclaw/issues/3460), 119 comments, 👍 7):**
    *   **Topic:** Strong community push for multi-language support.
    *   **Analysis:** The maintainers acknowledge the request but cite bandwidth constraints. Users are submitting PRs, suggesting a decentralized effort might be the only path forward. This is a top user experience blocker for non-English speakers.

2.  **Linux/Windows Native Apps ([Issue #75](https://github.com/openclaw/openclaw/issues/75), 69 comments, 👍 67):**
    *   **Topic:** Requests for desktop apps on Linux and Windows comparable to the existing macOS app.
    *   **Analysis:** With 67 upvotes, this is the most "wanted" feature. It limits adoption for developers and users on non-Apple platforms who want a native GUI experience outside the terminal/web.

3.  **MCP Client Support ([Issue #29053](https://github.com/openclaw/openclaw/issues/29053), 14 comments, 👍 16):**
    *   **Topic:** Native support for the Model Context Protocol (MCP) to connect to external tool servers.
    *   **Analysis:** Users want OpenClaw to align with emerging industry standards (MCP) to ensure interoperability with the broader AI agent ecosystem, moving beyond OpenClaw-specific tooling.

## 5. Bugs & Stability
Several critical regressions and behavior bugs are affecting stability, particularly for users who recently upgraded:

*   **Critical Regressions:**
    *   **Tool Execution Failure:** [Issue #53959](https://github.com/openclaw/openclaw/issues/53959) reports GPT-5.3-codex stops executing tools (exec, web search) after updating to `2026.3.23-2`.
    *   **Telegram Channel Failure:** [Issue #55304](https://github.com/openclaw/openclaw/issues/55304) reports Telegram channels silently fail to initialize after gateway restarts on `v2026.3.24`.
    *   **Discord Exec Approvals:** [Issue #58941](https://github.com/openclaw/openclaw/issues/58941) notes exec approvals stopped working in `2026.3.31` (rollback to `2026.3.28` fixes it).
    *   **Cron Model Override:** [Issue #57250](https://github.com/openclaw/openclaw/issues/57250) indicates cron jobs ignore the `payload.model` field, potentially causing unexpected costs.

*   **Security & UX Friction:**
    *   **Security Plugin Block:** [Issue #59085](https://github.com/openclaw/openclaw/issues/59085) reports the `@openclaw/matrix` plugin was blocked due to dangerous code patterns (credential harvesting risk).
    *   **Obfuscation Detection Overreach:** [Issue #50295](https://github.com/openclaw/openclaw/issues/50295) highlights that the hardcoded obfuscation detection is flagging legitimate complex commands, rendering some skills unusable.
    *   **Approval Process Complexity:** [Issue #59510](https://github.com/openclaw/openclaw/issues/59510) and [Issue #27843](https://github.com/openclaw/openclaw/issues/27843) detail how the exec approval system is tedious and buggy (allowlisted commands still prompting).

*   **Embedded Agent Issues:**
    *   [Issue #59098](https://github.com/openclaw/openclaw/issues/59098): Embedded agent times out with Ollama while direct API works.
    *   [Issue #40631](https://github.com/openclaw/openclaw/issues/40631): Recurring stall where the agent confirms tasks but performs no actions.

*   **Fix PRs Available:** Several fixes are open and pending review, including ones for the approval process ([PR #59336](https://github.com/openclaw/openclaw/pull/59336)), context display ([PR #61024](https://github.com/openclaw/openclaw/pull/61024)), and Ollama timeouts ([Issue #34644](https://github.com/openclaw/openclaw/issues/34644) proposes configurable timeouts).

## 6. Feature Requests & Roadmap Signals
User requests signal a desire for more robust, interoperable, and configurable systems:

*   **Adaptive Memory ([Issue #59095](https://github.com/openclaw/openclaw/issues/59095)):** Proposal for built-in hierarchical memory management (short-term/long-term). **Prediction:** High likelihood of adoption as memory management is critical for agent autonomy.
*   **MCP Support ([Issue #29053](https://github.com/openclaw/openclaw/issues/29053)):** Native Model Context Protocol client. **Prediction:** Likely a roadmap priority given the industry momentum behind MCP.
*   **Gemini Context Caching ([Issue #51372](https://github.com/openclaw/openclaw/issues/51372)):** Support for Gemini's `cachedContents` API to reduce costs.
*   **Configurable Fallbacks & Timeouts:** Requests for per-candidate retry counts ([Issue #59413](https://github.com/openclaw/openclaw/issues/59413)) and configurable LLM timeouts ([Issue #34644](https://github.com/openclaw/openclaw/issues/34644)) suggest users are running OpenClaw in high-load or constrained environments.

## 7. User Feedback Summary
**Pain Points:**
*   **Security vs. Usability:** Users appreciate security layers (obfuscation detection, exec approvals) but find them currently too aggressive or buggy, breaking legitimate workflows.
*   **Upgrade Stability:** Multiple reports of features breaking between minor versions (e.g., `.3.28` to `.3.31`), causing hesitation to update.
*   **Documentation & Onboarding:** Missing docs for specific setups (iMessage relay on Linux, Google auth changes) and confusing errors (Kimi 401) create friction for new users.

**Satisfaction:**
*   Despite bugs, the high volume of PRs and issues shows strong engagement.
*   The breadth of channel support (Discord, WhatsApp, Slack, Signal, iMessage, etc.) is a major draw.
*   Users are actively contributing fixes and proposals (e.g., Typecast TTS PR, memory proposals), indicating a healthy, invested community.

## 8. Backlog Watch
*   **[Issue #75](https://github.com/openclaw/openclaw/issues/75) (Linux/Windows Apps):** Open since Jan 1, 2026, with 67 upvotes. Needs maintainer roadmap commitment.
*   **[Issue #3460](https://github.com/openclaw/openclaw/issues/3460) (i18n):** Open since Jan 28, 2026. Maintainers cite bandwidth issues; community coordination is needed.
*   **[Issue #40631](https://github.com/openclaw/openclaw/issues/40631) (Execution Stalls):** A "wont-fix" or "needs more info" risk exists, but it describes a critical intermittent failure (1-2 times/month) that disrupts autonomous operation.
*   **[PR #56457](https://github.com/openclaw/openclaw/pull/56457) (Discord Chunking):** An XL-sized PR open since March 28. Needs review to improve Discord message handling.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Analysis: 2026-04-05

## 1. Ecosystem Overview
The open-source AI agent ecosystem is currently undergoing a **major architectural transition from single-model chatbots to multi-modal, multi-agent orchestrators**. Projects are uniformly shifting focus from basic LLM integration to solving complex infrastructure challenges: persistent memory management, cross-platform channel synchronization, and security containment for autonomous tool execution. There is a palpable tension between **velocity and stability**; as frameworks race to support new models (GPT-5, Gemini) and channels (Matrix, WhatsApp), regression bugs and configuration complexity are emerging as the primary bottlenecks to enterprise adoption. Additionally, **"Vendor Lock-in Anxiety"** is driving a surge in demand for model-agnostic backends and standardized protocols like MCP (Model Context Protocol).

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score & Notes |
| :--- | :---: | :---: | :--- | :--- |
| **OpenClaw** | **500** | **500** (212 Merged) | No Release | **High Velocity / High Risk**. Massive engagement but accumulating bug backlog (279 open). Growing pains evident. |
| **NanoBot** | 4 Closed | 12 Merged | No Release | **High Quality / Focused**. Efficient PR throughput; praised for stability but facing context management scaling issues. |
| **NanoClaw** | 4 Active | 21 Active (15 Open) | No Release | **Diversifying**. Heavy focus on multi-architecture support (OpenAI/Matrix); currently blocked by critical Docker security flaws. |
| **IronClaw** | 1 Closed | 13 Merged (31 Open) | No Release | **Bottlenecked**. High innovation (ZK proofs, DID) but review pipeline is clogged; critical Engine v2 regressions blocking production use. |
| **LobsterAI** | 6 New | 15 Active | No Release | **UI/UX Refinement**. Focused on "silent data loss" fixes; high community demand for multi-agent orchestration. |
| **CoPaw** | High | 8 Merged | `v1.0.2` Imminent | **Expansive**. Rapidly adding channels (WhatsApp, QQ) but struggling with resource hygiene (CPU loops, zombie processes). |
| **Moltis** | 6 New | 2 Open | No Release | **Stagnant / Fragile**. Zero merges; active bug reports regarding provider management and OAuth blocking users. |
| **TinyClaw / ZeptoClaw / EasyClaw** | 0 | 0 | N/A | **Dormant**. No activity detected. |

## 3. OpenClaw's Position

**Advantages vs. Peers:**
*   **Ecosystem Gravity:** With 500 issues/PRs in 24h, OpenClaw is the de facto standard for feature breadth. It supports more channels (Discord, WhatsApp, Signal, iMessage) and has a larger plugin marketplace than smaller competitors like NanoBot or CoPaw.
*   **Innovation Pace:** The unification of web search providers and hardening of plugin architectures (TS boundaries) shows a mature approach to technical debt that faster-moving forks often ignore.

**Technical & Community Differentiation:**
*   **Approach:** OpenClaw prioritizes **extensibility** (plugins, skills) over **security determinism** (unlike IronClaw) or **lightweight efficiency** (unlike NanoBot). However, this comes at the cost of stability; users frequently cite "growing pains" and regressions between versions (e.g., `.3.28` to `.3.31`).
*   **Community Size:** It commands the largest mindshare but suffers from "tragedy of the commons" with a massive open issue backlog (279 issues). In contrast, NanoBot users explicitly praise its stability *relative* to OpenClaw.

## 4. Shared Technical Focus Areas

**1. Memory & Context Management (Critical Bottleneck)**
*   **Projects:** OpenClaw, NanoBot, CoPaw.
*   **Details:** As agents run longer, "unbounded session history" is causing crashes and token limit errors.
    *   *NanoBot* users are demanding "smarter pruning" rather than crashing.
    *   *OpenClaw* users are proposing "adaptive hierarchical memory."
    *   *CoPaw* is seeing context symmetry issues in multi-agent teams.

**2. Multi-Agent Orchestration (The Next Frontier)**
*   **Projects:** LobsterAI, IronClaw, CoPaw.
*   **Details:** Users are moving past "single bot" use cases.
    *   *LobsterAI* users want "Manager/Group" modes to dispatch tasks to specialized sub-agents.
    *   *IronClaw* is building "Deterministic SOP Engines" and ZK-proof verifiable execution for multi-agent workflows.

**3. Security vs. Usability Friction**
*   **Projects:** OpenClaw, NanoBot, NanoClaw.
*   **Details:** Security defaults are blocking legitimate power users.
    *   *NanoBot* and *NanoClaw* are blocking localhost/Tailscale access via SSRF protections (whitelists needed).
    *   *OpenClaw* users report "obfuscation detection" is flagging legitimate code, and exec approvals are "buggy and tedious."

**4. Vendor Agnosticism (Exit Strategy)**
*   **Projects:** NanoClaw, OpenClaw, CoPaw.
*   **Details:** Fear of API bans or pricing changes is driving a shift to "Model Agnosticism."
    *   *NanoClaw* (PR #963, #1628) is actively merging OpenAI/Codex backends.
    *   *OpenClaw* users are demanding MCP (Model Context Protocol) support to decouple tools from the core LLM.

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architecture Style |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **Breadth & Channels** | Early Adopters / Hobbyists | Monolithic Core + Plugin System |
| **NanoBot** | **Stability & Efficiency** | Power Users (Local/Windows) | Streamlined, Optimized Hooks |
| **IronClaw** | **Verifiable Execution** | Enterprise / Web3 | Sandbox-focused (Docker/WASM) + ZK |
| **LobsterAI** | **Desktop UX** | Desktop Productivity Users | Electron/React Frontend + Local DB |
| **NanoClaw** | **Multi-Model Runtime** | Hybrid Cloud/Local Users | Modular Backend (Anthropic/OpenAI/Local) |
| **CoPaw** | **Connectivity** | Community / Chat-App Users | Channel-Heavy (Discord/Telegram/QQ) |

## 6. Community Momentum & Maturity

*   **Tier 1: Rapid Iteration (OpenClaw, NanoBot):** High velocity. OpenClaw is "chaotic good"—fast features but rough edges. NanoBot is "disciplined"—high merge rate, positive user sentiment regarding stability.
*   **Tier 2: Stabilization Struggles (IronClaw, CoPaw, NanoClaw):** Active development but fighting specific headwinds. IronClaw is blocked by Engine v2 bugs; CoPaw by resource leaks; NanoClaw by Docker security holes.
*   **Tier 3: Niche/Refinement (LobsterAI, Moltis):** Slower pace. LobsterAI is polishing UI details (data loss fixes). Moltis appears stalled with zero PR merges despite active bug reports.
*   **Tier 4: Dormant:** TinyClaw, ZeptoClaw, EasyClaw.

## 7. Trend Signals

1.  **The "Context Wall" is Here:** The shift from RAG (search) to long-context models (Gemini 2.5/GPT-5) is breaking existing agent loops. Projects that don't implement intelligent context pruning/summarization (like the "Dream" consolidator in NanoBot) will face stability crises as users try to run 24/7 agents.
2.  **Standardization via MCP:** The demand for Model Context Protocol (MCP) support in OpenClaw and Moltis signals that developers want **interoperable tooling**. They no longer want to write a "OpenClaw tool" or "IronClaw skill"; they want a universal tool server that works everywhere.
3.  **Desktop is Underserved:** Despite LobsterAI's efforts and OpenClaw's massive issue #75 (67 upvotes), there is a severe lack of stable, native desktop applications (Linux/Windows) for local-first AI agents. This remains a blue ocean for developers.
4.  **Security as a Feature, Not an Afterthought:** The backlash against "over-blocking" security features (SSRF, obfuscation detection) indicates that security implementations must be **configurable**. "Secure by default" is failing in power-user scenarios (localhost access, Tailscale), driving users toward forks or patches.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-04-05

## 1. Today's Overview
NanoBot demonstrates **high velocity** development activity with **12 merged PRs** in the last 24 hours, significantly outpacing the 4 closed issues. The project is in an active optimization phase, focusing on architectural refactoring (tools, hooks, templates) and expanding model support (GPT-5 family). While the community is highly engaged—praising the bot's stability compared to competitors like OpenClaw—maintainers are grappling with "growing pains" related to context management and security defaults blocking legitimate use cases.

## 2. Releases
**No new releases** were recorded today. The project appears to be accumulating features and fixes on the `main` branch (post `v0.1.4.post6`) for a potential future release.

## 3. Project Progress
Significant advancements were merged today, focusing on architecture, compatibility, and memory systems:

*   **Architectural Refactoring:**
    *   **Tool System:** Unified tool registration via `build_default_tool_registry` ([PR #2787](https://github.com/HKUDS/nanobot/pull/2787)) and streamlined Tool class methods ([PR #2780](https://github.com/HKUDS/nanobot/pull/2780)) to reduce redundancy.
    *   **Hooks & Templating:** Merged Jinja2 templating support for responses and memory consolidation ([PR #2779](https://github.com/HKUDS/nanobot/pull/2779)) and refactored hook method calls for better error logging ([PR #2794](https://github.com/HKUDS/nanobot/pull/2794)).
*   **Model & Provider Support:**
    *   **GPT-5 Support:** Added support for the GPT-5 model family, including specific handling for `max_completion_tokens` and reasoning model temperature quirks ([PR #2788](https://github.com/HKUDS/nanobot/pull/2788)).
    *   **Bug Fix:** Restored `reasoning_content` handling accidentally dropped in a previous refactor ([PR #2786](https://github.com/HKUDS/nanobot/pull/2786)).
*   **Platform Features:**
    *   **Telegram:** Fixed support for threaded DMs (a new Oct 2025 feature) ensuring replies land in the correct conversation ([PR #2793](https://github.com/HKUDS/nanobot/pull/2793), [PR #2789](https://github.com/HKUDS/nanobot/pull/2789)).
    *   **Security:** Added `ssrfWhitelist` config to allow legitimate private network access (e.g., Tailscale) ([PR #2715](https://github.com/HKUDS/nanobot/pull/2715)).
    *   **Memory:** Integrated a two-stage "Consolidator + Dream" memory system ([PR #2717](https://github.com/HKUDS/nanobot/pull/2717)).

## 4. Community Hot Topics
*   **Context Window & Memory Management** ([Issue #2343](https://github.com/HKUDS/nanobot/issues/2343)): The most discussed issue (15 comments). Users are hitting token limits (`contextWindowTokens`) causing crashes. There is a strong demand for smarter context pruning or summarization strategies rather than just crashing.
*   **Stability vs. Competitors** ([Issue #2774](https://github.com/HKUDS/nanobot/issues/2774)): A highly praised thread where users compared NanoBot favorably against "OpenClaw," citing NanoBot's "set and forget" stability on Windows versus frequent crashes/reinstalls in competing projects.
*   **Retry Amplification** ([Issue #2760](https://github.com/HKUDS/nanobot/issues/2760)): Technical discussion on SDK-level retries stacking with application retries, potentially DDOSing upstream providers.

## 5. Bugs & Stability
*   **[Critical] Unbounded Session History** ([Issue #2638](https://github.com/HKUDS/nanobot/issues/2638)): Agent becomes unresponsive if memory consolidation fails and history grows unchecked. No fix PR is explicitly linked to this specific issue in today's log, though [PR #2717](https://github.com/HKUDS/nanobot/pull/2717) (Memory System refactor) may address the root cause.
*   **[High] Upgrade Regression (Thinking leakage)** ([Issue #2795](https://github.com/HKUDS/nanobot/issues/2795)): After upgrading, the bot exposes internal "thinking" steps (e.g., "the user is asking...") to the end user in Telegram. This is a UX regression affecting user trust.
*   **[Medium] SSRF Blocking Localhost** ([Issue #2796](https://github.com/HKUDS/nanobot/issues/2796)): New security measures are blocking access to `localhost`, breaking integrations with local browser automation tools. (Note: [PR #2715](https://github.com/HKUDS/nanobot/pull/2715) merged a whitelist fix that might mitigate this if configurable).
*   **[Low] Tool Execution Failure** ([Issue #2775](https://github.com/HKUDS/nanobot/issues/2775)): Agent outputs text promising to use a tool but fails to actually execute the `spawn` command.

## 6. Feature Requests & Roadmap Signals
*   **Provider Fallback Logic** ([PR #2800](https://github.com/HKUDS/nanobot/pull/2800)): An open PR suggesting that 429 (Rate Limit) errors should trigger a switch to a fallback provider rather than retrying the same failing provider. This signals a move toward high-availability architectures.
*   **Ask User Tool** ([PR #2791](https://github.com/HKUDS/nanobot/pull/2791)): Open PR to allow the agent to pause and ask for clarification/confirmation, moving toward more agentic workflows.
*   **Unified Session** ([Issue #2798](https://github.com/HKUDS/nanobot/issues/2798)): Request for a "cross-platform session" where a conversation started on Telegram can be continued on Discord.
*   **Dedicated Vision Provider** ([Issue #2339](https://github.com/HKUDS/nanobot/issues/2339)): Request to decouple the "brain" (text model) from the "eyes" (vision model) to optimize costs and performance.

## 7. User Feedback Summary
Users are **extremely satisfied with core stability**, specifically highlighting reliability on Windows compared to alternatives. However, **frustration is mounting regarding "smart" context management**; users find the bot crashes when context fills up rather than gracefully summarizing or forgetting old data. There is also confusion regarding security defaults (blocking localhost/Tailscale) which hinders "power user" setups (e.g., connecting to local APIs).

## 8. Backlog Watch
*   **Heartbeat Loop Bug** ([Issue #2797](https://github.com/HKUDS/nanobot/issues/2797)): A newly reported but critical logic flaw where heartbeat tasks never mark as "completed," causing infinite execution loops.
*   **Config Documentation Mismatch** ([Issue #2799](https://github.com/HKUDS/nanobot/issues/2799)): Documentation references `groupAllowFrom` which is missing from the codebase. Needs immediate doc update or code fix.
*   **Vietnamese Localization** ([PR #1164](https://github.com/HKUDS/nanobot/pull/1164)): A documentation PR open for over a month; requires maintainer review to merge community translation efforts.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-04-05

## 1. Today's Overview
NanoClaw is experiencing a period of **intense diversification and hardening**, shifting from a single-provider architecture to a multi-model, multi-channel ecosystem. The project saw high activity with **21 updated Pull Requests** (15 open) and **4 active Issues**, indicating a strong community drive to expand capabilities beyond the default Anthropic backend. Development is currently bifurcated between adding major new integrations (OpenAI, Matrix, security policies) and addressing critical stability/security flaws in the existing Docker and OAuth implementations. While no new releases were cut today, the volume of code changes suggests a significant milestone is approaching.

## 2. Releases
**None.**
*No new stable or beta releases were published on 2026-04-05. The project remains on a development cycle focused on integrating new agent runtimes and channel skills.*

## 3. Project Progress
Today's merged/closed PRs focused on maintenance, skill migration, and resolving technical debt:

*   **Session Maintenance (PR [#1632](https://github.com/qwibitai/nanoclaw/pull/1632)):** Merged a feature to **auto-prune stale session artifacts**. This introduces a cleanup script (`scripts/cleanup-sessions.sh`) to manage disk usage by removing old JSONL logs and telemetry data while protecting active sessions.
*   **Architecture Refactoring (Issue [#1627](https://github.com/qwibitai/nanoclaw/issues/1627)):** Closed the planning issue for rebasing the NanoClaw fork on upstream, signaling a major architectural sync is complete or ready for execution.
*   **Skill Consolidation (PRs [#1633](https://github.com/qwibitai/nanoclaw/pull/1633), [#1634](https://github.com/qwibitai/nanoclaw/pull/1634)):** Closed/Merged PRs related to migrating skills (specifically "migrate from openclaw" and "migrate nanoclaw"), streamlining the transition path for users moving between harnesses.
*   **Type System Enhancements (PR [#1625](https://github.com/qwibitai/nanoclaw/pull/1625)):** Merged a feature backporting `PlaceType` and `ActorRole` types from VRC-AI-Bot to improve context handling (identifying private threads/owners) in channel logic.

## 4. Community Hot Topics
The community is actively discussing provider independence and authentication friction:

*   **Provider Lock-in vs. Agnosticism (Issue [#80](https://github.com/qwibitai/nanoclaw/issues/80)):**
    *   **Activity:** 31 comments, 56 👍
    *   **Analysis:** This highly popular enhancement request asks for support for alternative runtimes (OpenCode, Codex, Gemini). The high engagement (56 reactions) reflects significant user anxiety regarding Anthropic's rumored crackdown on third-party harnesses (OpenClaw). Users are actively seeking "exit strategies" to preserve their setups if API access is revoked.
*   **OAuth Confusion & Billing Shock (Issues [#1608](https://github.com/qwibitai/nanoclaw/issues/1608) & [#1620](https://github.com/qwibitai/nanoclaw/issues/1620)):**
    *   **Activity:** 3 comments total.
    *   **Analysis:** Users report that **OAuth tokens now incur extra usage billing** rather than drawing from subscriptions. This has caused unexpected charges. Additionally, the setup process is marred by `OneCLI` injecting placeholder API keys (`ANTHROPIC_API_KEY=placeholder`), which breaks credential file copying.

## 5. Bugs & Stability
Several high-severity security and stability issues were identified, with fixes currently in PR review:

*   **Critical Security: Public Port Exposure (PR [#1629](https://github.com/qwibitai/nanoclaw/pull/1629)):**
    *   **Severity:** High
    *   **Details:** The OneCLI installer exposes PostgreSQL (5432) and Gateway (10254/10255) ports on `0.0.0.0`. Because Docker bypasses UFW/iptables, these ports are open to the internet on public servers with default credentials (`onecli:onecli`).
    *   **Status:** **Fix Available (Open PR).**
*   **Stability: Message Deadlocks (PR [#1623](https://github.com/qwibitai/nanoclaw/pull/1623)):**
    *   **Severity:** Medium
    *   **Details:** Piping messages to an active container causes a 30-minute deadlock where the SDK waits indefinitely for a stream that cannot close.
    *   **Status:** **Fix Available (Open PR).**
*   **Security: Container Escape Vector (PR [#1630](https://github.com/qwibitai/nanoclaw/pull/1630)):**
    *   **Severity:** Medium
    *   **Details:** The agent-runner source is mounted read-write, allowing an agent with `bypassPermissions` to modify its own runner code persistently on the host.
    *   **Status:** **Fix Available (Open PR).**

## 6. Feature Requests & Roadmap Signals
A clear trend toward "Model Agnosticism" and "Channel Expansion" is visible in the open PRs:

*   **Alternative Agent Backends (Likely Next Major Feature):**
    *   PR [#963](https://github.com/qwibitai/nanoclaw/pull/963): Adds **OpenAI Codex SDK** as an opt-in engine.
    *   PR [#1628](https://github.com/qwibitai/nanoclaw/pull/1628): Adds **OpenCode SDK** as a backend.
    *   PR [#954](https://github.com/qwibitai/nanoclaw/pull/954): Fixes OpenRouter routing for non-Anthropic models.
*   **New Communication Channels:**
    *   PR [#1624](https://github.com/qwibitai/nanoclaw/pull/1624): Full **Matrix** channel support with E2EE.
    *   PR [#1121](https://github.com/qwibitai/nanoclaw/pull/1121): **Signal** channel integration.
    *   PR [#821](https://github.com/qwibitai/nanoclaw/pull/821): **QQ (NapCat)** channel via OneBot 11.
*   **Enterprise/Security Features:**
    *   PR [#1605](https://github.com/qwibitai/nanoclaw/pull/1605): A deterministic **Security Policy Engine** for user gating and tool restrictions (Supersedes #1360).

## 7. User Feedback Summary
*   **Pain Point - Authentication:** Users find the switch from API Key to OAuth "confusing and undocumented," specifically regarding how `OneCLI` handles environment variables.
*   **Pain Point - Cost:** Users are unhappy that using OAuth (the easier setup method) triggers "extra usage" billing rather than consuming their existing subscription allowance.
*   **Use Case - Portability:** There is strong demand for a "write once, run anywhere" capability where users can switch the underlying AI model (Claude vs. GPT vs. OpenCode) without rewriting their agent logic.

## 8. Backlog Watch
*   **Issue [#80](https://github.com/qwibitai/nanoclaw/issues/80) (Support alternative runtimes):** With 56 upvotes and active PRs (#963, #1628) addressing it, this needs a definitive roadmap comment from maintainers to merge these disparate efforts into a unified strategy.
*   **PR [#1283](https://github.com/qwibitai/nanoclaw/pull/1283) (Memory Upgrade):** An open PR since March 19 proposing to upgrade the memory system to `memory-lancedb-pro`. This seems stalled and risks becoming conflict-heavy as active development continues on the main branch.
*   **PR [#546](https://github.com/qwibitai/nanoclaw/pull/546) (Mattermost):** A channel skill PR that has been open since Feb 26. It is currently "Blocked" but recently updated, suggesting it may need maintainer intervention to unblock.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-04-05

## 1. Today's Overview
IronClaw is experiencing a **high-intensity development cycle**, characterized by a significant disparity between open and merged work. While the project saw 13 merged PRs, the open PR count (31) is exceptionally high relative to the closed count (1), indicating a **bottleneck in the review and merging pipeline** or a surge in external contributions. The issue tracker is dominated by a "bug_bash" initiative, revealing stability regressions in production routines and OAuth integrations. This suggests the project is in a **feature-freeze/stabilization phase**, actively trying to patch critical flaws in the new "Engine v2" and routine execution systems before a broader release.

## 2. Releases
No new releases were recorded today. The high volume of open PRs and critical bug reports suggests the team is accumulating changes for a future minor or patch version (likely `v0.x.x`) rather than releasing incremental daily builds.

## 3. Project Progress
The development focus is split between **architectural expansion** and **deep stability fixes**.

*   **New Capabilities:** A native **Matrix channel** ([PR #2019](https://github.com/nearai/ironclaw/pull/2019)) was introduced, featuring E2EE support, and the **WeChat channel** ([PR #1666](https://github.com/nearai/ironclaw/pull/1666)) continues development. Additionally, **Zero-Knowledge (ZK) proof infrastructure** ([PR #2016](https://github.com/nearai/ironclaw/pull/2016), [PR #2021](https://github.com/nearai/ironclaw/pull/2021)) is being integrated, signaling a move toward provable agent execution.
*   **Routine & Workspace Fixes:** Merged PRs include fixes for **routine notification summaries** ([PR #1470](https://github.com/nearai/ironclaw/pull/1470)) and **WASM workspace reader injection** ([PR #1619](https://github.com/nearai/ironclaw/pull/1619)).
*   **Security Hardening:** Work continues on **approval thread safety** (TOCTOU fixes) in [PR #1591](https://github.com/nearai/ironclaw/pull/1591) and credential pattern blocking in [PR #1675](https://github.com/nearai/ironclaw/pull/1675).

## 4. Community Hot Topics
*   **Infrastructure & Isolation ([Issue #2023](https://github.com/nearai/ironclaw/issues/2023)):** Users are actively discussing the need for **Kubernetes runtime support**. The current hard-coded Docker dependency is a major pain point for enterprise/non-desktop deployments, highlighting a need for architectural flexibility in sandboxing.
*   **Orchestration & Determinism ([Issue #2017](https://github.com/nearai/ironclaw/issues/2017), [Issue #2018](https://github.com/nearai/ironclaw/issues/2018)):** There is strong interest in "Secure-by-Default" orchestration and **Deterministic SOP Engines**. Users want IronClaw to move beyond single-task execution to structured, multi-agent workflows with verifiable identities (DID).
*   **Tool Governance ([Issue #2002](https://github.com/nearai/ironclaw/issues/2002)):** A request for **external HTTP callbacks in the preflight pipeline** indicates that operators need more control/intervention capabilities before tools execute, aiming for compliance and custom policy enforcement.

## 5. Bugs & Stability
The project is currently suffering from **regressions in Engine v2 and Routine execution contexts**, likely due to recent refactors.

*   **Critical: Routine Tools Disabled ([Issue #1996](https://github.com/nearai/ironclaw/issues/1996)):** Routines fail in PROD because tools are disabled in the execution context. This is a functional breakdown of the core automation feature.
*   **Critical: Engine v2 Auto-Approve Broken ([Issue #2010](https://github.com/nearai/ironclaw/issues/2010)):** `AGENT_AUTO_APPROVE_TOOLS=true` is ignored in Engine v2, blocking autonomous workflows.
*   **High: Integration Failures:** **Google OAuth** ([Issue #1992](https://github.com/nearai/ironclaw/issues/1992)) and **Slack** ([Issue #1998](https://github.com/nearai/ironclaw/issues/1998)) connections are broken (OAuth errors and missing apps).
*   **High: LLM Reliability ([Issue #1994](https://github.com/nearai/ironclaw/issues/1994)):** Reports of **HTTP 502 Bad Gateway** from the LLM provider suggest upstream instability or misconfiguration in the NEAR AI Cloud.
*   **Medium: Hallucinations:** Agents report false task completions after errors ([Issue #1993](https://github.com/nearai/ironclaw/issues/1993)).

## 6. Feature Requests & Roadmap Signals
Based on the open PRs and Issues, the roadmap is heavily weighted toward **enterprise readiness and security**:
1.  **Identity & ZK Proofs:** With [PR #2016](https://github.com/nearai/ironclaw/pull/2016) (Closed/Ready) and [Issue #2018](https://github.com/nearai/ironclaw/issues/2018), **DID-based identity and provable execution** are imminent features.
2.  **Workspace Multitenancy:** [PR #1734](https://github.com/nearai/ironclaw/pull/1734) (First-class workspace entities) suggests a move toward **team-based isolation** rather than single-user scope.
3.  **Alternative Runtimes:** Support for Kubernetes ([Issue #2023](https://github.com/nearai/ironclaw/issues/2023)) is likely to be prioritized given the "fragility" of Docker-in-Docker noted by users.

## 7. User Feedback Summary
Users are excited about the **Agent Teams and Orchestration** capabilities but are currently frustrated by **fragility in the automation layer**.
*   **Pain Points:** "Tools disabled" errors and broken OAuth flows make the agent difficult to deploy for actual work. The lack of a first-party Slack app ([Issue #1997](https://github.com/nearai/ironclaw/issues/1997)) creates a poor onboarding experience.
*   **Satisfaction:** High engagement with the *concept* of skills and routines, but low satisfaction with their *reliability* (e.g., [Issue #1999](https://github.com/nearai/ironclaw/issues/1999) regarding skill names with spaces).

## 8. Backlog Watch
*   **[PR #1591](https://github.com/nearai/ironclaw/pull/1591) (Security Hardening):** This "Medium Risk" PR addresses a critical TOCTOU race condition. It has been open since 2026-03-23 and needs urgent review given the security focus of the project.
*   **[PR #1734](https://github.com/nearai/ironclaw/pull/1734) (Workspace Entities):** A massive "High Risk" refactor that has been open since 2026-03-29. It blocks multi-user scenarios and needs visibility.
*   **[Issue #1996](https://github.com/nearai/ironclaw/issues/1996) & [Issue #2010](https://github.com/nearai/ironclaw/issues/2010):** These Engine v2 bugs effectively break headless/automation usage and require immediate maintainer attention.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-04-05

## 1. Today's Overview
LobsterAI is demonstrating high development velocity with a focused sprint on user interface stability and data integrity. The project saw **15 active Pull Requests** and **6 new Issues** in the last 24 hours, indicating a robust "fix-it" phase rather than feature expansion. The bulk of engineering effort today concentrated on refining the Electron/React frontend, specifically addressing "silent data loss" scenarios where user inputs (drafts, configurations) were discarded without warning. While community engagement remains active, the lack of new releases suggests the team is stabilizing the codebase for a significant upcoming milestone.

## 2. Releases
**No new releases** were recorded today. The development focus remains on patching UI/UX friction points and backend synchronization logic.

## 3. Project Progress
Today's merged/closed activity (1 PR closed) was outpaced by new contributions. Key advancements include:
*   **UI/UX Robustness:** A series of PRs by `MaoQianTu` introduced "Unsaved Changes" confirmation dialogs across the application (Agent Creation, Settings, MCP Config). This prevents users from accidentally losing complex configurations by clicking outside a modal.
*   **Data Persistence:** Fixes were submitted to ensure input drafts are saved immediately during navigation events (PR #1476), mitigating race conditions with debouncing logic.
*   **Platform Specifics:** PR #1467 fixed keyboard shortcut displays for macOS (showing ⌘ instead of Ctrl), and PR #1466 resolved layout issues in the MCP configuration modal.

## 4. Community Hot Topics
The most active discussions center on architectural evolution and operational stability:
*   **Multi-Agent Orchestration (Issue #1462):** User `orion0608` requested a "Manager/Group" mode where a main agent can dispatch tasks to specialized sub-agents. This signals a strong user desire to move beyond single-instance chat toward complex agentic workflows. The user explicitly noted this as a differentiator from competitors like Ali's HiClaw.
*   **Model Binding per Agent (Issue #1462):** Coupled with orchestration, users want granular control to bind specific models (e.g., GPT-4 for reasoning, Haiku for speed) to individual agents within the same workflow.

## 5. Bugs & Stability
Several **Critical** data integrity bugs were identified, though fixes appear to be pending review immediately:
1.  **Draft Content Loss (Issue #1471):** Input text is lost if the user switches views within 300ms (the debounce window).
    *   *Status:* **Fix Available** (PR #1476).
2.  **Configuration Overwrite (Issue #1472):** "Re-editing" a historical message silently overwrites the current prompt draft.
    *   *Status:* **Fix Available** (PR #1477).
3.  **Ghost Sessions (Issue #1359/PR #1465):** Deleted scheduled tasks reappear as empty "ghost" sessions after app restart due to incomplete SQLite cleanup.
    *   *Status:* **Fix Available** (PR #1465).
4.  **IM Integration Stability (PR #797 - Closed):** A fix was merged/closed regarding OpenClaw gateway crashes when the WeChat plugin is missing, improving resilience for IM channels.

## 6. Feature Requests & Roadmap Signals
*   **Agent-Level Model Selection:** Users are pushing for decoupling model selection from the global setting to the individual agent level (Issue #1462). This is likely a high-priority roadmap item given the trend toward "Mixture of Agents" architectures.
*   **Hierarchical Agent Teams:** The request for "Rooms/Groups" with a Manager Agent (Issue #1462) suggests users are treating LobsterAI as an orchestration layer rather than just a chat client.
*   **IM Multi-Instance Validation:** PR #1464 introduces validation to prevent duplicate IM bot configurations, tightening the multi-channel capabilities introduced in v4.3.

## 7. User Feedback Summary
Users appreciate the **v4.3 multi-instance IM support** but are encountering friction in the "Cowork" interface:
*   **Frustration:** Users report anxiety about losing work. Multiple issues (#1468, #1469, #1470, #1471) highlight that the current UI is too "volatile"—accidental clicks or rapid navigation destroys data.
*   **Satisfaction:** The comparison to Ali's HiClaw in Issue #1462 indicates that LobsterAI is currently preferred for its interaction design, provided it can scale to multi-agent capabilities.

## 8. Backlog Watch
*   **Memory Leak in Copy Button (PR #1478):** A fix for a memory leak in the `CopyButton` component is open. This addresses React warnings during rapid session switching and needs maintainer review.
*   **Skill Installation Feedback (PR #1480):** An open PR to add toast notifications and list refreshing after skill installation addresses a usability gap (#1426) that likely confuses new users installing plugins.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest (2026-04-05)

## 1. Today's Overview
The Moltis project is currently exhibiting high signal-to-noise ratio activity, characterized by a complete lack of resolved issues or merged PRs in the last 24 hours contrasted against a surge of 6 new bug reports and 2 feature-expanding Pull Requests. The community appears to be in a "breakage discovery" phase, heavily testing the boundaries of the Desktop application and Provider management systems. While contributor input is active via new code submissions for MCP and Telegram proxies, the maintainer cadence for closing loops (merging/answering) appears stagnant for this snapshot period. This suggests the project is likely in a turbulent post-release stabilization phase or facing resource constraints on triage.

## 2. Releases
No new releases were recorded for 2026-04-05.

## 3. Project Progress
Despite zero merges today, active development is evident in two significant open Pull Requests:
*   **MCP Infrastructure:** PR [#555](https://github.com/moltis-org/moltis/pull/555) by `volfco` introduces support for Streamable HTTP MCP servers. This addresses Issue #294, signaling a major architectural upgrade to how Moltis handles Model Context Protocol servers.
*   **Communication Channels:** PR [#550](https://github.com/moltis-org/moltis/pull/550) by `BLumia` proposes optional channel-level proxy support for Telegram. This directly addresses user needs for network flexibility in restricted regions.

## 4. Community Hot Topics
The most engaged items revolve around platform-specific integrations and API reliability.
*   **MacOS Integration Issues:** Issue [#549](https://github.com/moltis-org/moltis/issues/549) regarding the OAuth flow failure for Codex on the MacOS Desktop app generated discussion (1 comment). This highlights a critical usability blocker for the Apple ecosystem.
*   **Provider Reliability:** Issue [#554](https://github.com/moltis-org/moltis/issues/554) reports a "Service Unavailable" error despite valid API keys. This suggests underlying issues in how Moltis probes or connects to third-party LLM providers, causing significant friction for users trying to configure their environments.

## 5. Bugs & Stability
Stability is the primary concern today, with 5 distinct bugs reported. No fix PRs were identified for these issues in the current snapshot.
1.  **Critical / Blocking:**
    *   [Bug]: MacOS Desktop App doesn't do oauth flow for Codex ([#549](https://github.com/moltis-org/moltis/issues/549)).
    *   [Bug]: "Service unavailable" error when probing existing provider ([#554](https://github.com/moltis-org/moltis/issues/554)).
2.  **High / Feature Limitation:**
    *   [Bug]: Mistral and Qwen models support vision but Moltis doesnt respect this ([#556](https://github.com/moltis-org/moltis/issues/556)). This limits the utility of multimodal models.
3.  **Medium / UX Logic:**
    *   [Bug]: Cannot add multiple models from one provider, forced to select one ([#552](https://github.com/moltis-org/moltis/issues/552)).
    *   [Bug]: "Detect all models" doesn't detect all models, just probing existing ones ([#551](https://github.com/moltis-org/moltis/issues/551)).

## 6. Feature Requests & Roadmap Signals
Users are demanding deeper granular control over agent configurations and provider management.
*   **Advanced Configuration:** Request for **per-agent loopback and timeout settings** ([#553](https://github.com/moltis-org/moltis/issues/553)). This indicates power users are running into execution limits during complex tasks.
*   **Provider Management:** The ability to define multiple models per single provider connection (noted in Bug #552) is a strong signal that the current "one provider = one model" abstraction is too restrictive for the user base.

## 7. User Feedback Summary
The sentiment today leans towards **frustration with Provider Management**. Users feel constrained by the current logic for adding and detecting models (Issues #551, #552). There is a clear disconnect between the user's mental model of "I have an API Key, give me access to all models" and the application's current behavior of limiting selection or failing to probe correctly. Additionally, the lack of vision support for specific OpenAI-compatible providers (Mistral/Qwen) suggests the client is hardcoding capabilities rather than querying model metadata dynamically.

## 8. Backlog Watch
*   **Issue [#294](https://github.com/moltis-org/moltis/issues/294):** This issue is referenced by the open PR #555. If PR #555 remains unmerged for an extended period, this item needs attention as it blocks "Streamable HTTP MCP server" functionality.
*   **Issue [#548](https://github.com/moltis-org/moltis/issues/548):** Referenced by PR #550, this implies a pending request for Telegram proxy support that has yet to be officially resolved in the main branch.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest (2026-04-05)

## 1. Today's Overview
The CoPaw project is currently exhibiting **high community engagement** with a significant volume of bug reports and feature requests following the recent `v1.0.1` release. Activity is focused on stability fixes for the core event loop and shell execution environments, alongside rapid expansion of third-party channel integrations. The maintainers are actively merging community contributions, evidenced by a 67% merge rate for PRs updated today. However, the lack of a stable release (despite a version bump PR) suggests the team is stabilizing `1.0.2` to address critical performance and compatibility regressions.

## 2. Releases
No new official releases were tagged today. However, **PR #2942** indicates a version bump to `1.0.2b1`, implying a patch release is imminent.

## 3. Project Progress
Developers merged 8 PRs today, focusing heavily on expanding communication channels and refining UI/backend stability:
*   **Channel Ecosystem Expansion:** Significant progress with the merge of **PR #2946** (WhatsApp via neonize), **PR #2870** (OneBot v11/QQ integration), and **PR #2940** (Multi-message splitting via `[SPLIT]` delimiter).
*   **Local Model Support:** **PR #2889** added support for updating Llama.cpp directly within CoPaw Local, fixing parsing errors for high repetition thresholds.
*   **UI/UX Polish:** **PR #2804** resolved dark mode rendering issues on the Cron Jobs table, and **PR #2938** restricted model discovery to local providers to prevent cloud API errors.

## 4. Community Hot Topics
*   **[#2888 High CPU Usage (AnyIO Busy Loop)](https://github.com/agentscope-ai/CoPaw/issues/2888):** The most critical discussion involves the assistant consuming 100% CPU while idle due to an `anyio` cancellation loop. This has garnered significant attention as it affects core usability.
*   **[#2922 Agent Team Collaboration](https://github.com/agentscope-ai/CoPaw/issues/2922):** Users are actively requesting sophisticated multi-agent orchestration features similar to "Claude Code," specifically noting current issues with context symmetry and information sharing.
*   **[#2947 Gemma4 Infinite Tool Loops](https://github.com/agentscope-ai/CoPaw/issues/2947):** Users report that the Gemma 4 model family gets stuck in recursive tool-calling loops, highlighting compatibility issues with specific open-weight models.

## 5. Bugs & Stability
*   **Critical - Performance:**
    *   **[#2888](https://github.com/agentscope-ai/CoPaw/issues/2888):** 100% CPU usage on idle (Busy loop in AnyIO). No fix PR linked yet.
*   **High - Model Compatibility:**
    *   **[#2947](https://github.com/agentscope-ai/CoPaw/issues/2947):** Gemma 4 models trapped in infinite tool calling loops.
    *   **[#2919](https://github.com/agentscope-ai/CoPaw/issues/2919):** `volcengine-plan` provider fails with `TypeError` (Unexpected Keyword Argument).
*   **Medium - Environment/Process:**
    *   **[#2934](https://github.com/agentscope-ai/CoPaw/issues/2934):** `browser_use` leaks Chromium processes; closing the tab does not terminate the backend process.
    *   **[#2943](https://github.com/agentscope-ai/CoPaw/issues/2943):** `copaw init` hangs on Windows/Python 3.13 during security prompt.
*   **Fixed (PRs Merged):**
    *   **[#2923](https://github.com/agentscope-ai/CoPaw/issues/2923):** Feishu message newlines not rendering (Fixed by [PR #2924](https://github.com/agentscope-ai/CoPaw/pull/2924)).

## 6. Feature Requests & Roadmap Signals
*   **Agent Orchestration:** Strong signal for **Multi-Agent Teams** ([#2922](https://github.com/agentscope-ai/CoPaw/issues/2922)) with better context management.
*   **UI/UX Improvements:** Requests for a **"Download Button" for audio** ([#2948](https://github.com/agentscope-ai/CoPaw/issues/2948)) and changing the GUI approval mechanism from text input to **buttons** ([#2945](https://github.com/agentscope-ai/CoPaw/issues/2945)).
*   **Session Management:** Requests for **conversation pinning** ([#2936](https://github.com/agentscope-ai/CoPaw/issues/2936)) and **merging agent windows** ([#2937](https://github.com/agentscope-ai/CoPaw/issues/2937)) suggest the current UI feels cluttered during complex multi-step tasks.

## 7. User Feedback Summary
Users are enthusiastic about the breadth of model support but frustrated by **stability in edge cases** (idle loops, specific model providers like VolcEngine/Gemma). A recurring pain point is **process hygiene** (zombie chromium processes, hanging CLI prompts). The Chinese-speaking user base is specifically vocal about **proxy configuration difficulties** ([#2941](https://github.com/agentscope-ai/CoPaw/issues/2941)) and Feishu integration quirks. Overall sentiment: High potential, but current version requires better resource management.

## 8. Backlog Watch
*   **[#2888 (High CPU)](https://github.com/agentscope-ai/CoPaw/issues/2888):** Needs immediate maintainer triage as it drains laptop batteries and affects idle usage.
*   **[PR #1192 (OpenRouter)](https://github.com/agentscope-ai/CoPaw/pull/1192):** Open since March 10, this PR adds OpenRouter provider support. It is updated but remains unmerged, potentially blocked by the model filtering logic refactoring.
*   **[PR #2432 (Chat History)](https://github.com/agentscope-ai/CoPaw/pull/2432):** A UI enhancement for chat history timestamps/senders that has been open since March 27; needs review to improve UX.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

No activity in the last 24 hours.

</details>