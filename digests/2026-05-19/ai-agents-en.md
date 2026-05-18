# OpenClaw Ecosystem Digest 2026-05-19

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-18 22:16 UTC

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

# OpenClaw Project Digest: 2026-05-19

## 1. Today's Overview
OpenClaw is experiencing a period of exceptionally high community engagement and issue volume, maintaining a highly active open-source velocity. The project saw a massive influx of 500 updated issues (with 448 remaining open) and 500 updated pull requests within the last 24 hours, indicating rapid iteration alongside a growing backlog of community-reported bugs and feature requests. Four new releases were cut over the weekend, including a stable release and several beta iterations focusing on dependency updates and UI overhauls. A significant portion of the current open issues relates to core architectural stability, specifically concerning agent memory management, session state handling, and multi-agent orchestration reliability.

## 2. Releases
**Stable Release:**
*   **[v2026.5.18](https://github.com/openclaw/openclaw/releases/tag/v2026.5.18)**
    *   *Changes:* Enforced a new architectural standard where agent fixes should default to clean bounded refactors and explicit plugin SDK deprecation paths. Updated `@openclaw/proxyline` to 0.3.3 and Pi packages to 0.75.1. Raised the minimum supported Node.js 22 line.

**Beta Releases:**
*   **[v2026.5.18-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.18-beta.1)**: Included the same core updates as the stable release regarding agent refactoring guidelines and dependency bumps.
*   **[v2026.5.16-beta.7](https://github.com/openclaw/openclaw/releases/tag/v2026.5.16-beta.7)**: Added `OPENCLAW_IMAGE_APT_PACKAGES` as a runtime-neutral Docker/Podman image build argument for injecting extra apt packages.
*   **[v2026.5.16-beta.6](https://github.com/openclaw/openclaw/releases/tag/v2026.5.16-beta.6)**: Redesigned the Mac app Settings pages with consistent card layouts, improved caching, and cleaner panes for permissions, voice, skills, and cron tasks. Renamed the repo-local Codex closeout review skill to `autoreview`.

## 3. Project Progress
Of the 500 PRs updated in the last 24 hours, 68 were merged or closed, demonstrating active merging by the core team. Key advancements include:
*   **Security Boundaries:** Merged/Closed PRs introduced configurable `tools.exec.deniedPaths` as an exec preflight guard, fixing a security roadmap gap ([PR #83729](https://github.com/openclaw/openclaw/pull/83729)).
*   **LLM Provider Support:** Fixed critical model capability bugs, notably restoring Claude image inputs ([PR #83756](https://github.com/openclaw/openclaw/pull/83756)).
*   **Workspace & Memory:** Prevented subagent spawns from recreating duplicate bootstrap files in repo roots ([PR #83787](https://github.com/openclaw/openclaw/pull/83787)) and implemented event loop yielding during fallback vector searches to prevent blocking ([PR #83758](https://github.com/openclaw/openclaw/pull/83758)).
*   **UI & CLI:** Fixed CLI config behaviors where numeric config set record keys (like Discord guild IDs) were erroneously parsed ([PR #83769](https://github.com/openclaw/openclaw/pull/83769)).

## 4. Community Hot Topics
The community is highly focused on multi-agent reliability and memory management.
*   **Multi-Encoding Attachments:** [Issue #48788](https://github.com/openclaw/openclaw/issues/48788) (17 comments) is driving a proposal for a centralized filename encoding utility. This stems from users discovering that UTF-8 misreads as Latin-1 in Feishu integrations, highlighting a need for broader encoding standardization across channel adapters.
*   **Feishu Memory Leaks:** [Issue #48183](https://github.com/openclaw/openclaw/issues/48183) (17 comments) details a potentially severe memory leak in the Feishu plugin's `httpServers` Map. The community is actively discussing how the monitor state cleanup deletes entries prematurely before server closure completes.
*   **Security Vulnerabilities in Skills:** [Issue #45740](https://github.com/openclaw/openclaw/issues/45740) (12 comments) exposes an attack vector where untrusted GitHub issue bodies are injected directly into sub-agent prompts without sanitization. This has sparked broad discussion about requiring built-in security scanning for skills via `clawhub install` ([Issue #45031](https://github.com/openclaw/openclaw/issues/45031)).

## 5. Bugs & Stability
Several high-severity bugs affecting message delivery and session state were reported today.
*   **RSS/Memory Spikes (P2):** [Issue #83752](https://github.com/openclaw/openclaw/issues/83752) reports Gateway RSS growing aggressively up to 1.0 GB after Telegram turns using Active Memory full-context preflight. No fix PR is currently linked.
*   **Subagent Silent Losses (P1):** [Issue #44925](https://github.com/openclaw/openclaw/issues/44925) reports that subagent task completions are silently lost on timeout with no retry or notification. No fix PR is linked yet.
*   **Schema Incompatibility & Truncated Replies (P1):** [Issue #83615](https://github.com/openclaw/openclaw/issues/83615) notes that upgrading to the latest beta causes `EmbeddedAttemptSessionTakeoverError` and breaks Kimi-k2.6 compatibility. 
*   **Compaction Deadlocks (P1):** [Issue #43661](https://github.com/openclaw/openclaw/issues/43661) highlights sessions hanging indefinitely when compaction times out, resulting in spamming the user with duplicate messages.
*   **Discord Data Leaks (P1):** [Issue #44905](https://github.com/openclaw/openclaw/issues/44905) notes internal tool-call traces (`NO_REPLY`, raw JSON arguments) are occasionally leaking directly into Discord channels.
*   **Tool Policy Regression (P1):** [Issue #45269](https://github.com/openclaw/openclaw/issues/45269) notes that `apply_patch` is currently stripped from allowlists, breaking agent-routed runs. 

## 6. Feature Requests & Roadmap Signals
User requests heavily trend toward better operational control and LLM orchestration capabilities.
*   **Per-Agent Cost Budgets:** [Issue #42475](https://github.com/openclaw/openclaw/issues/42475) requests per-agent spend caps enforced at the gateway level before dispatching model calls, indicating that enterprise users are deploying multi-tenant setups and need strict cost controls.
*   **Per-Skill Model Routing:** [Issue #43260](https://github.com/openclaw/openclaw/issues/43260) suggests adding a `model` field in `SKILL.md` frontmatter. This would allow lightweight skills to run on cheaper, faster models while reserving heavy reasoning for premium models within the same agent.
*   **YAML Configuration Support:** [Issue #45758](https://github.com/openclaw/openclaw/issues/45758) requests YAML as an alternative to JSON5 for `openclaw.json`, a highly requested quality-of-life improvement for DevOps practitioners.
*   **WebSocket Client SDK:** [Issue #49178](https://github.com/openclaw/openclaw/issues/49178) proposes extracting a universal `@openclaw/gateway-client` to standardize WebSocket communication between the CLI, UI, and gateway.

## 7. User Feedback Summary
Users are actively pushing OpenClaw into complex production environments but are encountering friction with state management.
*   **Pain Points:** Memory management was bluntly described as "in chaos" ([Issue #43747](https://github.com/openclaw/openclaw/issues/43747)) due to inconsistent chunking/embedding strategies across different users and agents. Additionally, gateway lifecycle warnings (e.g., memory search failures) bleeding into active Discord channels is causing significant UX frustration ([Issue #45565](https://github.com/openclaw/openclaw/issues/45565)).
*   **Use Cases:** Users are building complex parallel coding batches via CLI and using OpenClaw for long-running autonomous tasks on Telegram using forum mode. The `steer` mode is actively used by power users to inject messages mid-turn ([Issue #48003](https://github.com/openclaw/openclaw/issues/48003)).
*   **Dissatisfaction:** Users are frustrated by "Live Docs" being ahead of actual releases, where documented features like `IsolatedSessions` for heartbeat configs fail because they are not actually in the latest stable release ([Issue #48920](https://github.com/openclaw/openclaw/issues/48920)).

## 8. Backlog Watch
Several critical issues with widespread impact have remained open for over two months without a concrete fix or are stuck awaiting core maintainer decisions.
*   **[Issue #45740](https://github.com/openclaw/openclaw/issues/45740) (Prompt Injection Risk):** Open since March 14. This security vulnerability needs an immediate triage response to implement sub-agent prompt sanitization.
*   **[Issue #44925](https://github.com/openclaw/openclaw/issues/44925) & [Issue #47975](https://github.com/openclaw/openclaw/issues/47975) (Subagent Unresponsiveness):** Core multi-agent orchestration reliability issues open since mid-March. Overlapping PRs are attempting to address subagent state takeovers, but they need core maintainer architectural guidance to merge successfully.
*   **[Issue #40001](https://github.com/openclaw/openclaw/issues/40001) (Write Tool Append Mode):** Open since March 8. Isolated cron sessions continuously overwrite shared memory files instead of appending. This is a high-impact data loss bug that blocks reliable autonomous scheduling.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report analyzing the open-source AI agent and personal assistant ecosystem based on the May 19, 2026 community digests.

### 1. Ecosystem Overview
The open-source AI personal assistant and agent ecosystem is currently characterized by rapid, high-velocity iteration, driven primarily by the demands of multi-agent orchestration and multi-model routing. Projects are aggressively expanding LLM provider support and platform integrations to capture power users, but this explosive feature growth is currently outpacing stability, leading to significant regressions in memory management and state handling across the board. The overarching industry shift is moving from simple chatbot interfaces toward complex, containerized, and autonomous agentic workflows, forcing open-source projects to prioritize enterprise-grade features like fine-grained cost controls, observability, and robust security boundaries.

### 2. Activity Comparison
*Note: The "Health Score" is a qualitative assessment (1-10) based on release cadence, bug-fix velocity, and the ratio of open vs. closed/merged items.*

| Project | Issues (Updated) | PRs (Updated) | Latest Release Status | Health Score (1-10) |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (448 open) | 500 (68 merged) | **Active** (Stable + Betas) | 8 (High velocity, growing backlog) |
| **CoPaw** | 31 (12 closed) | 24 (7 merged) | **Active** (v1.1.8-beta.1) | 6 (High velocity, severe regressions) |
| **Hermes Agent**| 50 (8 closed) | 50 (6 merged) | Stalled (No release) | 7 (Burst activity, needs triage) |
| **ZeroClaw** | 26 (15 open) | 50 (11 merged) | Stalled (Iterating v0.7.6) | 7 (High open PR volume) |
| **PicoClaw** | ~10 | 26 (8 merged) | **Active** (Nightly builds) | 8 (Healthy momentum) |
| **NanoClaw** | ~10 | 38 (7 merged) | **Active** (v2.0.64) | 8 (Tight feedback loop) |
| **NanoBot** | 7 | 21 (10 merged) | Stalled (No release) | 8 (Contributor-driven) |
| **LobsterAI** | 0 | 12 (12 merged) | **Active** (2026.5.18) | 9 (High internal stability) |
| **Moltis** | 7 (7 closed) | 8 (6 merged) | Stalled (No release) | 8 (Rapid bug squashing) |
| **NullClaw** | 1 | 1 | Stalled (No release) | 5 (Low activity/maintenance) |
| **TinyClaw / ZeptoClaw**| 0 | 0 | Inactive | N/A |
| **IronClaw** | N/A | N/A | Digest Generation Failed | N/A |

### 3. OpenClaw's Position
*   **Advantages:** OpenClaw remains the unchallenged core reference implementation with massive community engagement (500+ PRs/Issues updated daily). It leads in multi-agent orchestration (subagents, tool fleets) and channel integrations (Feishu, Telegram, Discord).
*   **Technical Approach Differences:** Unlike many peers relying on standard monolithic routing, OpenClaw is heavily invested in agentic state compaction, dynamic tool policies (e.g., `apply_patch` allowlists), and plugin SDK deprecation paths. 
*   **Community Size Comparison:** OpenClaw's community volume is an order of magnitude larger than closest peers like Hermes and ZeroClaw. However, OpenClaw is showing signs of scaling friction, suffering from a massive backlog of P1 bugs (e.g., compaction deadlocks, subagent silent losses) that peer projects with tighter core teams (like NanoClaw or Moltis) are currently managing more swiftly.

### 4. Shared Technical Focus Areas
Several critical requirements are emerging simultaneously across entirely different projects, highlighting universal growing pains in the AI agent space:
*   **Memory & Context Compaction:** Memory management is the ecosystem's biggest bottleneck. OpenClaw reports "chaos" in chunking and compaction deadlocks; PicoClaw is hitting context overflow limits in its "Seahorse" system; CoPaw users are crashing the app via context failures; and Hermes/Moltis are actively refactoring lifecycle hooks to prevent context loss. 
*   **LLM Provider & Tool Routing:** The "one-size-fits-all" LLM approach is dead. *OpenClaw* (Issue #43260), *Moltis* (Issue #1011), and *NanoClaw* (PR #2406) are all developing dynamic routing logic to use cheap/fast models for simple tasks and heavy models for complex reasoning, often requiring per-skill or per-turn model routing.
*   **Security & Execution Sandboxing:** As agents execute OS-level commands, sandboxing is critical. *Hermes* (PR #28214), *OpenClaw* (PR #83729), *NanoBot* (PR #3898), and *Moltis* (PR #1019) are all actively merging or requesting hardened exec guards, path traversal blocks, and tool isolation modes.
*   **Deployment & Networking Friction:** Connecting agents to external channels or custom endpoints is a universal pain point. *NanoBot* and *NullClaw* report critical failures with WebUI/DNS on Docker/Windows; *NanoClaw* and *CoPaw* are fighting webhook and token-refresh errors on WhatsApp/WeChat.

### 5. Differentiation Analysis
*   **Target Audience:** **OpenClaw**, **Hermes**, and **ZeroClaw** target power users and enterprise setups requiring multi-agent orchestration and complex tool integrations. **NanoBot**, **LobsterAI**, and **CoPaw** target the broader consumer/prosumer market with heavy focuses on UI/UX, WebUI features, and out-of-the-box multi-model support. **PicoClaw** uniquely targets embedded/edge hardware (RISC-V, Yocto).
*   **Architecture:** **NanoClaw** stands out with its "container isolation" model, treating agents as distinct containerized entities, though this causes file-access desyncs. **OpenClaw** relies on a monolithic but highly extensible gateway/proxy architecture. **Moltis** is heavily differentiating via an agnostic hook lifecycle system (`BeforeAgentStart`).
*   **Feature Focus:** **Hermes** is heavily focused on "silent failure" diagnostics and system observability. **ZeroClaw** is hyper-focused on the Skills ecosystem and plugin standardization.

### 6. Community Momentum & Maturity
*   **Tier 1: Rapid Iteration & Scaling (OpenClaw, Hermes, ZeroClaw):** These projects have massive community engagement and are pushing features rapidly. However, they are currently paying a "stability tax," evidenced by P1 bugs outpacing core maintainer capacity to merge fixes.
*   **Tier 2: Healthy Maturation & Stabilization (CoPaw, NanoBot, PicoClaw, NanoClaw):** These projects are growing quickly and shipping features but are actively squashing critical regressions (e.g., CoPaw's global rate limiter fix, NanoClaw's routing fixes). They demonstrate tight, healthy feedback loops.
*   **Tier 3: Stable Maintenance (LobsterAI, Moltis, NullClaw):** **LobsterAI** shows high internal maturity (core team merging 12 PRs for UI/ perf polish with zero community bug reports). **Moltis** is in a highly reactive, healthy bug-squashing phase. **NullClaw** is stagnant, handling only edge-case patches.

### 7. Trend Signals
*   **End of Infinite Context:** The immediate failure of agents to gracefully handle context limits is forcing the industry toward automated compaction and "memory summarization" tools. Developers building on these frameworks must implement fallback vector search and context budgeting to prevent crashes.
*   **The "Bring Your Own Endpoint" (BYOE) Standard:** Users are aggressively shunning hardcoded vendor constraints (NanoClaw Issue #1984, ZeroClaw Issue #6558). Framework developers must ensure all LLM integrations accept generic OpenAI-compatible endpoints without strict URL parsing or header constraints.
*   **Multi-Tenant Cost Control:** As agents become long-running autonomous workers, token costs are spiraling. The demand for per-agent spend caps (OpenClaw Issue #42475) and reasoning-effort routing (NanoClaw PR #2406) indicates that cost-observability will be a primary driver of enterprise adoption moving forward.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-19

## 1. Today's Overview
NanoBot experienced **highly active development** over the past 24 hours, with a strong focus on expanding provider support (image generation and LLMs), refactoring core agent architecture, and improving WebUI deployment flexibility. The community contributed a substantial **21 Pull Requests** (10 merged/closed) alongside 7 active issues, indicating a healthy, contributor-driven project. The main themes for the day were broadening AI model compatibility (Ant Ling, MiniMax, Gemini, Qiniu), hardening security and tool execution for Docker deployments, and optimizing the agent's memory and execution loop. There were no new official version releases today.

## 2. Releases
No new official releases were recorded today.

## 3. Project Progress
The day saw 10 PRs merged or closed, pushing forward several critical features and fixes:
*   **Architecture & Refactoring:** The monolithic 330-line `AgentRunner.run()` method was broken down into 9 focused methods, introducing a `RunContext` dataclass and `LoopAction` enum ([PR #3892](https://github.com/HKUDS/nanobot/pull/3892)).
*   **New LLM Providers:** Added "Ant Ling" as a first-class OpenAI-compatible provider ([PR #3900](https://github.com/HKUDS/nanobot/pull/3900)).
*   **Image Generation:** The framework was significantly enhanced with a new `ImageGenerationProvider` base class/registry ([PR #3893](https://github.com/HKUDS/nanobot/pull/3893)). Support for **Gemini** (Imagen 4/Flash) ([PR #3886](https://github.com/HKUDS/nanobot/pull/3886)) and **MiniMax** ([PR #3879](https://github.com/HKUDS/nanobot/pull/3879)) were successfully merged.
*   **WebUI Enhancements:** Live file edit activity events were added to the WebUI ([PR #3899](https://github.com/HKUDS/nanobot/pull/3899)), and a bug breaking single-newline markdown rendering was fixed ([PR #3889](https://github.com/HKUDS/nanobot/pull/3889)).
*   **Deployment & Docs:** Docker docs were updated to fix WebUI 403 errors and `bwrap` sandbox execution issues ([PR #3875](https://github.com/HKUDS/nanobot/pull/3875)).

## 4. Community Hot Topics
*   **Docker / WebUI Remote Access Issues:** Users and contributors are actively discussing how to resolve WebUI deployment issues where the bootstrap endpoint rejects non-localhost requests. 
    *   *Root Cause/Pain Point:* Hardcoded localhost checks break Docker/reverse proxy setups.
    *   *Active PRs:* [PR #3904](https://github.com/HKUDS/nanobot/pull/3904) and [PR #3891](https://github.com/HKUDS/nanobot/pull/3891) propose introducing configurable `bootstrap_allow_from` CIDR/IP lists.
*   **Memory & Context Persistence:** The community is actively looking for ways to prevent the agent from losing context across sessions.
    *   *Highlight:* The integration of **Mnemon** (a lightweight CLI for persistent memory) was proposed and highlighted in [Issue #3888](https://github.com/HKUDS/nanobot/issues/3888).

## 5. Bugs & Stability
*   **[Medium/High] WeChat QR Login Failure:** Users report being unable to log in via WeChat channels due to a "low version" error, even on the latest WeChat app. This blocks Chinese social channel integrations ([Issue #3863](https://github.com/HKUDS/nanobot/issues/3863)).
*   **[Medium] Image Generation MIME & HTTP bypass:** Following the merge of the image generation registry, follow-up bugs were noted where MiniMax/AIHubMix hardcode `image/png` instead of using `detect_image_mime`, and improperly bypass the base HTTP client ([Issue #3903](https://github.com/HKUDS/nanobot/issues/3903)).
*   **[Medium] Cron/X-API Loops:** Setting up a simple X (Twitter) checking cron job causes the agent to hit the maximum tool call iterations, indicating tool-loop regressions ([Issue #3901](https://github.com/HKUDS/nanobot/issues/3901)).

## 6. Feature Requests & Roadmap Signals
*   **User Authorization for Sensitive Commands:** Users are requesting a mechanism to authorize commands flagged by the `exec` tool's safety guard (e.g., bypassing `rm -rf` when explicitly needed) ([Issue #3887](https://github.com/HKUDS/nanobot/issues/3887)).
*   **Dream System Controls:** A request to add a global toggle to disable the "Dream" cron job (used for memory consolidation) entirely, rather than just disabling the memory skill ([Issue #3885](https://github.com/HKUDS/nanobot/issues/3885)).
*   **Tool Isolation / Restricted Mode:** A sophisticated PR is in progress to add restricted mode tool isolation, allowing admins to filter admin/MCP tools for unprivileged requests, hiding workspace/skill context ([PR #3898](https://github.com/HKUDS/nanobot/pull/3898)). *This is a strong candidate for the next major release.*

## 7. User Feedback Summary
Users are heavily utilizing NanoBot for **multi-channel deployment** (Dockerized WebUI, WeChat, X/Twitter) and **multi-provider image generation**. The main points of user friction stem from deploying WebUI behind reverse proxies (403 bootstrap errors) and managing agent memory/context over long periods. Users appreciate the fast provider integrations but desire more granular control over background cron jobs and command execution safety guards.

## 8. Backlog Watch
The following high-impact items have been open for a while and require maintainer review:
*   **[PR #3621](https://github.com/HKUDS/nanobot/pull/3621) (Open since May 4):** Introduces production-ready multi-role agent squad deployment for HF Spaces. A massive architectural addition that needs core team validation.
*   **[PR #3847](https://github.com/HKUDS/nanobot/pull/3847) (Open since May 15):** Proposes a `skill_load` tool to prevent skill content loss in multi-turn conversations. Solves a critical agent context issue.
*   **[PR #3568](https://github.com/HKUDS/nanobot/pull/3568) & [PR #3643](https://github.com/HKUDS/nanobot/pull/3643):** Outstanding PRs adding Manifest LLM router and Qiniu AI provider support, respectively, awaiting final merge.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-19

## 1. Today's Overview
Hermes Agent experienced a high-volume, high-intensity day on May 19, 2026, driven entirely by active community engagement rather than official release cycles. The project saw 50 issues updated (42 open, 8 closed) and 50 pull requests updated (44 open, 6 merged/closed) with zero new releases, indicating that contributors are rapidly iterating on bug fixes and features for an eventual upcoming version. The high ratio of open items suggests a "burst contribution" pattern—likely a community hackathon or synchronized weekend sprint—where multiple contributors are pushing new diagnostics, security fixes, and platform improvements simultaneously. Overall, the project is highly active with strong community involvement, though maintainers may face a triage bottleneck given the surge.

## 2. Releases
No new releases were published today. The project remains on the latest stable version, with contributors actively resolving edge-case bugs and platform integrations that will likely culminate in a future patch or minor release.

## 3. Project Progress
Six PRs were merged or closed today, focusing on packaging, operational reliability, and security hardening:

- **fix(packaging): include hermes_cli subpackages in wheel** ([PR #28231](https://github.com/NousResearch/hermes-agent/pull/28231)) — Resolved a critical `ModuleNotFoundError: No module named 'hermes_cli.proxy'` affecting pip-installed deployments. This was a packaging regression in v0.14.0.
- **fix(gateway): exit code 75 on service restart so launchd relaunches** ([PR #28200](https://github.com/NousResearch/hermes-agent/pull/28200)) — Fixed macOS launchd service not restarting after graceful restart signals (SIGUSR1), a high-impact fix for macOS daemon deployments.
- **fix(security): harden TUI shell exec with centralized guarded command helper** ([PR #28214](https://github.com/NousResearch/hermes-agent/pull/28214)) — Addressed two command injection vectors in `tui_gateway/server.py`, replacing dangerous `shell=True` patterns with a hardened exec helper.
- **fix: detect macOS PID reuse in gateway locks** ([PR #28203](https://github.com/NousResearch/hermes-agent/pull/28203)) — Added psutil-based fallback for PID reuse detection on macOS, preventing stale gateway locks from blocking startup.
- **fix: include hermes_plugins in gateway.log component filter** ([PR #28196](https://github.com/NousResearch/hermes-agent/pull/28196)) — Fixed plugin log messages being silently dropped from `gateway.log`, improving operational observability.
- **Add multi-tenant namespace isolation tests with Alice/Bob/Core fixtures** ([PR #28225](https://github.com/NousResearch/hermes-agent/pull/28225)) — Closed after adding comprehensive test coverage for multi-tenant memory isolation, advancing enterprise readiness.

Active PRs receiving attention today include security hardening for path traversal ([PR #27418](https://github.com/NousResearch/hermes-agent/pull/27418)), Azure APIM gateway support ([PR #28233](https://github.com/NousResearch/hermes-agent/pull/28233)), and WhatsApp bridge restart logic ([PR #28228](https://github.com/NousResearch/hermes-agent/pull/28228)).

## 4. Community Hot Topics
The most actively discussed issues reveal underlying community needs around multi-provider reliability and provider-specific authentication:

- **Gemini CLI OAuth 429 errors** ([Issue #15895](https://github.com/NousResearch/hermes-agent/issues/15895), 13 comments, 3 👍) — Users with valid Gemini quotas are hitting rate limits via Hermes CLI OAuth flow. This highlights a gap in how Hermes handles Google OAuth token refresh and quota headers, likely requiring upstream API coordination.
- **Custom provider max_output_tokens silently dropped** ([Issue #21498](https://github.com/NousResearch/hermes-agent/issues/21498), 6 comments) — Config normalizer drops `max_output_tokens` for custom providers, silently capping outputs to 2048 tokens. This affects power users extending Hermes with non-standard LLM backends.
- **Ollama cloud provider errors** ([Issue #12703](https://github.com/NousResearch/hermes-agent/issues/12703), 5 comments, closed) — Telegram-based Ollama integration returning HTTP 400 errors. Closed but represents ongoing demand for local LLM integration reliability.
- **OpenClaw fleet respawn memory leak** ([Issue #23799](https://github.com/NousResearch/hermes-agent/issues/23799), 5 comments) — Heavy users running multi-agent tool orchestration are hitting resource exhaustion, signaling a need for better lifecycle management in MCP tool fleets.
- **In-run quality gates for cron/agent runs** ([Issue #28056](https://github.com/NousResearch/hermes-agent/issues/28056), 4 comments) — Advanced users want bounded retry with explicit completion criteria for automated workflows, indicating enterprise production use.
- **Agent Migration System** ([Issue #524](https://github.com/NousResearch/hermes-agent/issues/524), 4 comments) — Strong demand for first-install migration from competing agents (Claude Code, Codex, Gemini CLI, Cursor), reducing onboarding friction for new users.

## 5. Bugs & Stability
Bugs reported today ranked by severity:

**P1 — Critical (broken core functionality):**
- Vision fallback_chain silently broken due to wrong kwargs in `_resolve_single_provider` ([Issue #27555](https://github.com/NousResearch/hermes-agent/issues/27555)) — Entire vision fallback chain returns `None`, disabling multi-provider vision resilience. No fix PR yet.
- Anthropic streaming hangs for 15 minutes on stuck streams ([Issue #28161](https://github.com/NousResearch/hermes-agent/issues/28161)) — `_replace_primary_openai_client` called unnecessarily for Anthropic-native streams. No fix PR yet.
- Telegram group reply-derived thread IDs misroute human-handoff replies ([Issue #28153](https://github.com/NousResearch/hermes-agent/issues/28153)) — Session routing broken in group chat handoff workflows. No fix PR yet.
- Command injection via shell=True in TUI gateway ([Issue #16560](https://github.com/NousResearch/hermes-agent/issues/16560)) — Two exploitable injection vectors. **Fix available in [PR #28214](https://github.com/NousResearch/hermes-agent/pull/28214).**

**P2 — High (feature degradation):**
- Custom provider `max_output_tokens` silently dropped ([Issue #21498](https://github.com/NousResearch/hermes-agent/issues/21498)) — No fix PR yet.
- Hermes Desktop SSH tunnel session error ([Issue #27455](https://github.com/NousResearch/hermes-agent/issues/27455)) — Remote gateway connections fail on message send. No fix PR.
- Kanban workers stuck in zombie state after SIGTERM ([Issue #28181](https://github.com/NousResearch/hermes-agent/issues/28181)) — Task claims never released. No fix PR.
- `computer_use` toolset: 5 bugs on macOS Tahoe ([Issue #24170](https://github.com/NousResearch/hermes-agent/issues/24170)) — Multiple failures in computer interaction tooling. No fix PR.
- WhatsApp gateway sends diagnostic spam instead of intentional silence ([Issue #28208](https://github.com/NousResearch/hermes-agent/issues/28208)) — Group chat UX broken. **Fix PR available: [PR #28228](https://github.com/NousResearch/hermes-agent/pull/28228).**
- Bedrock+Claude auth wizard fails at runtime ([Issue #28156](https://github.com/NousResearch/hermes-agent/issues/28156)) — Accepts invalid credentials then crashes. No fix PR.
- WeChat voice STT garbles non-Chinese languages ([Issue #27300](https://github.com/NousResearch/hermes-agent/issues/27300)) — Internationalization gap. No fix PR.
- Gemini 503 doesn't trigger vision fallback ([Issue #25822](https://github.com/NousResearch/hermes-agent/issues/25822)) — No fix PR.
- Windows installer broken by malformed PowerShell param block ([Issue #28141](https://github.com/NousResearch/hermes-agent/issues/28141)) — Blocks Windows adoption. No fix PR.

**P3 — Medium (quality-of-life):**
- Empty credential pool entries show phantom providers ([Issue #28140](https://github.com/NousResearch/hermes-agent/issues/28140))
- Dashboard modal renders behind sidebar in Teal Large theme ([Issue #28103](https://github.com/NousResearch/hermes-agent/issues/28103))
- Plugin discover failures silently swallowed ([Issue #28137](https://github.com/NousResearch/hermes-agent/issues/28137)) — **Fix available in [PR #28196](https://github.com/NousResearch/hermes-agent/pull/28196).**
- `hermes update` leaves launchd service unrestarted ([Issue #28135](https://github.com/NousResearch/hermes-agent/issues/28135)) — **Fix available in [PR #28200](https://github.com/NousResearch/hermes-agent/pull/28200).**

## 6. Feature Requests & Roadmap Signals
Feature requests signal an ecosystem maturing toward production and multi-agent orchestration:

- **`hermes doctor` — one-command system health diagnostics** ([Issue #28223](https://github.com/NousResearch/hermes-agent/issues/28223)) — Directly addresses the "silent failure" pattern seen in multiple P2/P3 bugs. Likely to be prioritized given it would reduce support burden.
- **In-run quality gates with bounded retry** ([Issue #28056](https://github.com/NousResearch/hermes-agent/issues/28056)) — Enterprise users need explicit completion criteria for automated workflows. Aligns with enterprise adoption trajectory.
- **Agent Migration System** ([Issue #524](https://github.com/NousResearch/hermes-agent/issues/524)) — First-install import from 8+ competing agents. High strategic value for user acquisition; likely to appear in next minor release.
- **Idle-triggered context compression** ([Issue #27579](https://github.com/NousResearch/hermes-agent/issues/27579)) — Addresses UX pain where compression fires mid-query. Smart optimization likely to be picked up soon.
- **Gateway tool-use hardening: skill preload, loop-guard recovery** ([Issue #28204](https://github.com/NousResearch/hermes-agent/issues/28204)) — Directly improves multi-agent reliability.

**Predictions for next release:** `hermes doctor` diagnostics, agent migration system, and the idle-triggered context compression feature are strong candidates based on community traction and strategic value.

## 7. User Feedback Summary
Real user pain points reveal a pattern of **silent failures** and **multi-provider complexity**:

- **Provider authentication is fragile:** Bedrock credentials accepted then rejected at runtime ([Issue #28156](https://github.com/NousResearch/hermes-agent/issues/28156)), Gemini OAuth shows quotas but returns 429 ([Issue #15895](https://github.com/NousResearch/hermes-agent/issues/15895)), xAI OAuth has macOS race conditions ([PR #27677](https://github.com/NousResearch/hermes-agent/pull/27677)), and empty credential entries show phantom availability ([Issue #28140](https://github.com/NousResearch/hermes-agent/issues/28140)). Users are frustrated by setup flows that appear to succeed but fail silently.
- **Silent failures erode trust:** Plugin discovery errors swallowed at DEBUG level ([Issue #28137](https://github.com/NousResearch/hermes-agent/issues/28137)), config normalizer dropping settings without warning ([Issue #21498](https://github.com/NousResearch/hermes-agent/issues/21498)), and vision fallback returning None ([Issue #27555](https://github.com/NousResearch/hermes-agent/issues/27555)). Users discover problems only when behavior is wrong, not during configuration.
- **Multi-agent orchestration is demanding but brittle:** OpenClaw fleet respawn leaks ([Issue #23799](https://github.com/NousResearch/hermes-agent/issues/23799)) and Kanban zombie workers ([Issue #28181](https://github.com/NousResearch/hermes-agent/issues/28181)) show advanced users pushing Hermes hard in production, hitting resource management limits.
- **Platform integrations need maturity:** WhatsApp silent-message handling ([Issue #28208](https://github.com/NousResearch/hermes-agent/issues/28208)), WeChat non-Chinese STT ([Issue #27300](https://github.com/NousResearch/hermes-agent/issues/27300)), and Telegram session misrouting ([Issue #28153](https://github.com/NousResearch/hermes-agent/issues/28153)) indicate growing pains in messaging platform coverage.
- **Positive signals:** Users are deeply invested, with detailed bug reports including root cause analysis and proposed fixes (e.g., [Issue #27555](https://github.com/NousResearch/hermes-agent/issues/27555) identifies exact line numbers). The Agent Migration System request ([Issue #524](https://github.com/NousResearch/hermes-agent/issues/524)) confirms users are actively switching to Hermes from competitors.

## 8. Backlog Watch
Items requiring maintainer attention:

- **Path traversal security fix** ([PR #27418](https://github.com/NousResearch/hermes-agent/pull/27418), P1) — Open since May 17 with zero comments. Addresses critical file tool security gaps. Needs review and merge.
- **Per-message busy-session controls** ([PR #21080](https://github.com/NousResearch/hermes-agent/pull/21080), P2) — Open since May 7, resolves two linked issues (#11639, #11118), but no maintainer feedback. Significant UX improvement for Telegram/Discord/Slack.
- **Camofox API key auth** ([PR #20479](https://github.com/NousResearch/hermes-agent/pull/20479), P2) — Open since May 6, zero comments. All Camofox operations fail with 403 when API key is set.
- **Infinite retry loop on local LLM prefill timeout** ([Issue #7069](https://github.com/NousResearch/hermes-agent/issues/7069), P2) — Open since April 10 with 2 👍. Critical for local LLM users running large models. No fix PR.
- **Hermes needs extra "just do it" prompt** ([Issue #6204](https://github.com/NousResearch/hermes-agent/issues/6204), P2) — Open since April 8. Users report trust-breaking reluctance to execute explicit instructions in Telegram. Likely a system prompt or instruction-following tuning issue.
- **Ollama cloud provider errors** ([Issue #12703](https://github.com/NousResearch/hermes-agent/issues/12703)) — Closed but represents unresolved local LLM integration demand.
- **Windows installer broken** ([Issue #28141](https://github.com/NousResearch/hermes-agent/issues/28141)) — Blocks all Windows one-line installs. No fix PR yet.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-19

## 1. Today's Overview
PicoClaw is experiencing a high-velocity development phase, demonstrating strong momentum with **26 active Pull Requests** and a steady stream of community contributions. The team and community are heavily focused on expanding integration capabilities, evidenced by new channel support and a major push towards real-time streaming features. Additionally, core architectural systems, such as the biologically-inspired "Seahorse" memory agent, are maturing, with active bug squashing to stabilize the `main` branch. Project health is robust, showing a healthy balance of core maintainer oversight and third-party ecosystem growth.

## 2. Releases
- **[nightly: Nightly Build v0.2.8-nightly.20260518.0df050ff](https://github.com/sipeed/picoclaw/releases/tag/v0.2.8-nightly.20260518.0df050ff)**
  - **Changes**: Automated build synced with the `main` branch. Includes recent merges such as the SiliconFlow provider support and Web UI enhancements.
  - **Migration/Breaking Changes**: None explicitly stated in this automated release, but users should note the ongoing architectural shifts in channel identification and memory budgeting.

## 3. Project Progress
Today saw **8 PRs merged/closed**, indicating active merging in preparation for the next stable release. Key advancements include:
- **New Provider Support:** Merged [PR #2885](https://github.com/sipeed/picoclaw/pull/2885), adding SiliconFlow as a first-class OpenAI-compatible provider.
- **Web UI Enhancements:** Merged [PR #2882](https://github.com/sipeed/picoclaw/pull/2882) (independent copy/collapse controls for code blocks) and [PR #2886](https://github.com/sipeed/picoclaw/pull/2886) (four-state visibility selector for reasoning/tool calls).
- **Streaming Architecture:** Active work is advancing in [PR #2892](https://github.com/sipeed/picoclaw/pull/2892) (configuration-driven provider streaming) and [PR #2853](https://github.com/sipeed/picoclaw/pull/2853) (real-time ChatStream support via WebSocket).

## 4. Community Hot Topics
- **[Issue #1919](https://github.com/sipeed/picoclaw/issues/1919): [Feature] Seahorse Memory System.** (11 comments). This biologically-inspired memory system for AI agents remains a focal point of discussion. The underlying need is to give AI agents human-like short and long-term memory with lossless context compaction.
- **[Issue #2674](https://github.com/sipeed/picoclaw/issues/2674): Codex OAuth empty response.** (4 comments, 👍 4). A highly-upvoted ongoing bug where ChatGPT backend streams via `response.output_item.done` result in empty assistant responses. Users are heavily relying on the OpenAI Codex OAuth provider and are blocked by this streaming handshake issue.

## 5. Bugs & Stability
- **High Severity - Memory Overflow:** [Issue #2894](https://github.com/sipeed/picoclaw/issues/2894) reports that the Seahorse Assembler's `FreshTail` bypasses budget limits, causing `400 BadRequestError` when the context window is exceeded. **Fix PR exists:** [PR #2895](https://github.com/sipeed/picoclaw/pull/2895) has been opened to enforce budget constraints on fresh tails and rebuild paths.
- **Medium Severity - Tool Configuration:** [Issue #2878](https://github.com/sipeed/picoclaw/issues/2878) prevents the `load_image` tool from being configured via `config.json`. (Closed, likely addressed in recent commits).
- **Low/Medium Severity - Platform Specific:** [Issue #2887](https://github.com/sipeed/picoclaw/issues/2887) reports the `.deb` version on RISC-V fails when using OpenAI models, pointing to potential architecture-specific compilation or dependency issues.
- **Low Severity - Path Validation:** [PR #2890](https://github.com/sipeed/picoclaw/pull/2890) fixes a path validation failure on macOS caused by `/var` symlink inconsistencies.

## 6. Feature Requests & Roadmap Signals
- **AI Agent Steering & Rendering:** [Issue #2843](https://github.com/sipeed/picoclaw/issues/2843) and [PR #2844](https://github.com/sipeed/picoclaw/pull/2844) suggest adding a `final_turn_render_mode` using an extra LLM pass to summarize tool-heavy turns. This signals a strong roadmap focus on autonomous agent UX.
- **Ecosystem Integrations:** Users are actively requesting native integrations for popular platforms. Notable requests include [Issue #2884](https://github.com/sipeed/picoclaw/issues/2884) (SiliconFlow, now merged) and [PR #2893](https://github.com/sipeed/picoclaw/pull/2893) (Server酱³ Bot). 
- **Resilience Features:** [PR #2891](https://github.com/sipeed/picoclaw/pull/2891) introduces a "Reset to Factory Defaults" feature, indicating an upcoming focus on making the assistant more resilient to configuration errors during version upgrades.

## 7. User Feedback Summary
- **Pain Points:** Users are experiencing friction with history compaction; [Issue #2796](https://github.com/sipeed/picoclaw/issues/2796) notes that message compression intended for LLM context is hiding previous user messages in the UI. Additionally, setting up tools like `load_image` lacks UI/config discoverability.
- **Use Cases:** PicoClaw is being actively deployed on edge and embedded hardware (RISC-V, Yocto/OpenEmbedded environments via [PR #2851](https://github.com/sipeed/picoclaw/pull/2851)), confirming its positioning as a lightweight, hardware-friendly AI agent.
- **General Sentiment:** Highly positive. Developers are enthusiastically building out the ecosystem (new channels, Yocto layers, streaming), though they occasionally hit snags with the complexities of the new agent memory budgets.

## 8. Backlog Watch
The following critical/complex items have been marked as `[stale]` and urgently require core maintainer triage to keep the community unblocked:
- **[PR #2551](https://github.com/sipeed/picoclaw/pull/2551):** A major architectural refactor to standardize channel identification and allow multi-instance providers. This is crucial for scaling channel support.
- **[PR #2840](https://github.com/sipeed/picoclaw/pull/2840) & [PR #2844](https://github.com/sipeed/picoclaw/pull/2844):** Both relate to fixing message rendering in complex, tool-heavy "steering" turns. These need reviews to improve the agent's core reliability.
- **[PR #2750](https://github.com/sipeed/picoclaw/pull/2750):** A long-standing fix for the `exec` guard treating relative paths as root-absolute, which is a security/safety boundary issue for tool execution.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-19

## 1. Today's Overview
NanoClaw is experiencing a highly active development cycle, demonstrating strong momentum in both project maintenance and feature expansion. With 38 pull requests updated in the last 24 hours and a fresh patch release, the maintainer team is aggressively iterating on the platform's core stability, particularly around agent routing, database constraints, and container lifecycles. The open-source community is highly engaged, contributing significant structural features like new agent protocols, CLI enhancements, and crucial security hardening. Overall, the project's health appears robust, characterized by a tight feedback loop between issue reporting and patch submission.

## 2. Releases
- **[v2.0.64](https://github.com/qwibitai/nanoclaw/releases/tag/v2.0.64)**
  - **Changes:** Fixed a bug where `ncl destinations add` and `remove` modifications routed through the approval flow did not reflect in the receiving agent's local session state immediately. 
  - **Impact:** Previously, attempting to use a freshly approved destination would result in a silent failure (`unknown destination`). This fix ensures destination state synchronization is immediate.

## 3. Project Progress
Seven pull requests were merged/closed today, advancing the project's stability and developer experience:
*   **v2.0.64 Changelog:** [PR #2536](https://github.com/nanocoai/nanoclaw/pull/2536) successfully merged the documentation for the latest patch.
*   **Agent Session Isolation:** [PR #2375](https://github.com/nanocoai/nanoclaw/pull/2375) fixed a critical routing bug where `per-thread` sessions (like GitHub PRs) would hijack messages meant for `agent-shared` channels (like Telegram/Signal).
*   **GitHub Integration Overhaul:** [PR #2301](https://github.com/nanocoai/nanoclaw/pull/2301) and [PR #1874](https://github.com/nanocoai/nanoclaw/pull/1874) laid groundwork for safer GitHub integrations, though older pre-commit hook approaches were closed in favor of newer paradigms.
*   **Container State Management:** [PR #2376](https://github.com/nanocoai/nanoclaw/pull/2376) merged documentation warnings regarding complex multi-channel routing setups.
*   **Documentation & CLI Fixes:** [PR #1310](https://github.com/nanocoai/nanoclaw/pull/1310) and [PR #867](https://github.com/nanocoai/nanoclaw/pull/867) closed out older backlog items related to credentials and scheduled task routing.

## 4. Community Hot Topics
*   **Local/Custom AI Provider Support ([Issue #1984](https://github.com/nanocoai/nanoclaw/issues/1984)):** With 6 comments, this is the most discussed issue of the day. Users are actively trying to route NanoClaw through custom, non-blessed OpenAI-compatible endpoints (like local Codex/OpenCode setups). The friction indicates a strong community desire for modular, self-hosted LLM provider support free from hardcoded vendor constraints.
*   **Multi-Agent Network Orchestration ([PR #2497](https://github.com/nanocoai/nanoclaw/pull/2497)):** A major feature PR introducing an "Agent Network" architecture. This signals that advanced users are pushing NanoClaw beyond simple 1-to-1 assistant setups into complex, multi-agent swarm topologies.
*   **ACP Client Protocol Integration ([PR #2542](https://github.com/nanocoai/nanoclaw/pull/2542)):** High community interest in standardizing external agent communication via the addition of an ACP (Agent Client Protocol) JSON-RPC 2.0 provider.

## 5. Bugs & Stability
Several high-severity bugs were reported today, but the community response has been swift, with fix PRs already submitted for most of them:
1.  **FOREIGN KEY constraint failure on `ncl groups delete`** [Issue #2525](https://github.com/nanocoai/nanoclaw/issues/2525) | Priority: High. Deleting used agent groups fails due to a lack of cascading deletes in the SQLite database. 
    * *Fix available:* [PR #2540](https://github.com/nanocoai/nanoclaw/pull/2540).
2.  **Missing Container Configs for New Groups** [Issue #2525](https://github.com/nanocoai/nanoclaw/issues/2525) / [PR #2539](https://github.com/nanocoai/nanoclaw/pull/2539) | Priority: High. `createAgentGroup` was not initializing `container_configs`, causing infinite errors when trying to spawn agents for newly created groups.
    * *Fix available:* [PR #2539](https://github.com/nanocoai/nanoclaw/pull/2539).
3.  **Stale Docker Container Status** [Issue #2533](https://github.com/nanocoai/nanoclaw/issues/2533) | Priority: Medium. After server restarts or deployments, the database isn't reconciling the state of crashed/stopped Docker containers.
4.  **Message Parsing Vulnerability** [PR #2541](https://github.com/nanocoai/nanoclaw/pull/2541) | Priority: Medium. The poll-loop parser prematurely terminates messages if the agent outputs the literal string `</message>` in code blocks or text.
5.  **Messaging Channel Attachment Desyncs:**
    * [Issue #2535](https://github.com/nanocoai/nanoclaw/issues/2535): LID encryption desync on WhatsApp causes group messages to show as "Waiting for this message".
    * [Issue #2528](https://github.com/nanocoai/nanoclaw/issues/2528): Signal channel images/PDFs are trapped on the host and unreachable by the agent container.

## 6. Feature Requests & Roadmap Signals
*   **Reasoning Effort Routing ([PR #2406](https://github.com/nanocoai/nanoclaw/pull/2406)):** Moving away from static compute effort to per-message dynamic routing. This signals a shift toward cost-optimizing multi-model agent setups (e.g., using heavy reasoning only when necessary).
*   **Free/Voice Transcription Skill ([PR #2317](https://github.com/nanocoai/nanoclaw/pull/2317)):** Adding local whisper.cpp/openai-whisper integration natively. This points to a roadmap focused on making NanoClaw a fully featured, privacy-first voice assistant.
*   **Security & CI Hardening ([PR #2538](https://github.com/nanocoai/nanoclaw/pull/2538), [PR #2537](https://github.com/nanocoai/nanoclaw/pull/2537)):** Input validation for Dockerfile interpolation (preventing CWE-78 OS command injection) and the addition of pre-commit hooks suggest the project is maturing and locking down its supply chain ahead of broader enterprise adoption.

## 7. User Feedback Summary
Users are utilizing NanoClaw as a highly integrated, multi-platform personal/agent framework, heavily leveraging WhatsApp, Signal, and Telegram. However, friction remains around the "container isolation" model—users are experiencing environment disconnects where the host receives files or messages, but the agent container itself is blind to them (e.g., [Issue #2528](https://github.com/nanocoai/nanoclaw/issues/2528)). Furthermore, power users are pushing the boundaries of the CLI and database architecture, occasionally hitting SQLite limitations and identifier formatting rules (e.g., [Issue #2525](https://github.com/nanocoai/nanoclaw/issues/2525)). Overall satisfaction seems high, evidenced by the fact that users are actively developing complex skills and providers for the ecosystem rather than abandoning the tool.

## 8. Backlog Watch
*   **[Issue #1984](https://github.com/nanocoai/nanoclaw/issues/1984):** Open since April 24th, this issue regarding BYO OpenAI-compatible endpoints is gaining traction but lacks a definitive timeline or assigned maintainer. As local LLM usage grows, resolving this will unblock a significant portion of the self-hosting user base.
*   **[PR #1845](https://github.com/nanocoai/nanoclaw/pull/1845):** Open since April 18th, this vital PR normalizes SQLite timestamps to ISO 8601. It requires maintainer attention, as non-standard timestamps can cause subtle synchronization bugs across distributed agent nodes.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-05-19

## 1. Today's Overview
NullClaw is experiencing a low-activity, steady maintenance phase, with one new issue and one new pull request opened in the last 24 hours and no releases published. The project's current development focus is split between improving core system flexibility and squashing platform-specific networking bugs. Activity is entirely driven by external community contributions, indicating ongoing user engagement despite the absence of recent official releases. Overall project health remains stable, with contributors actively identifying and addressing edge cases in memory management and OS-level networking. 

## 2. Releases
*Omitted.* No new releases were recorded today.

## 3. Project Progress
No PRs were merged and no issues were closed today. However, an important platform-specific fix was proposed. 
*   **Windows Networking Fix Proposed:** PR [#920](https://github.com/nullclaw/nullclaw/pull/920) by `chenhlSH` addresses a critical DNS resolution flaw on Windows, advancing the project's cross-platform reliability. 

## 4. Community Hot Topics
Community activity is currently quiet, with both the latest issue and PR lacking comments or reactions. However, the newly opened topics highlight specific technical demands:
*   **Granular Memory Control:** Issue [#919](https://github.com/nullclaw/nullclaw/issues/919) by `weissfl` requests the ability to disable automatic FTS5 + BM25 memory recall on a per-message basis. This indicates a growing underlying need among users for finer-grained control over context injection, token usage optimization, and deterministic agent behavior. 
*   **Windows OS Support:** PR [#920](https://github.com/nullclaw/nullclaw/pull/920) highlights that Windows users are actively trying to utilize NullClaw to connect to remote AI providers, pushing the project to mature its non-Unix networking implementations.

## 5. Bugs & Stability
*   **[High Severity] Windows DNS Resolution Failure:** Users on Windows are completely unable to connect to remote AI providers if using non-localhost hostnames. `getAddressList()` in `net.zig` unconditionally returns `UnknownHostName` for external domains, causing `error.HostResolutionFailed`. 
    *   *Status:* A fix is currently pending in PR [#920](https://github.com/nullclaw/nullclaw/pull/920).

## 6. Feature Requests & Roadmap Signals
*   **Configurable Memory Retrieval:** In Issue [#919](https://github.com/nullclaw/nullclaw/issues/919), the user points out that `enrichMessageWithRuntime()` hardcodes memory recall limits (e.g., `DEFAULT_RECALL_LIMIT = 5`, `MAX_CONTEXT_BYTES = 4000`). Requesting a toggle to bypass this automatic enrichment suggests that power users might be hitting context window limits or experiencing latency issues during basic chat interactions.
    *   *Prediction:* Given the relatively small scope of adding a bypass flag to `enrichMessageWithRuntime()`, this feature has a strong likelihood of being picked up and included in an upcoming minor release or patch.

## 7. User Feedback Summary
User feedback today revolves around advanced configuration and platform compatibility. 
*   **Pain Points:** Hardcoded parameters in the AI's memory enrichment pipeline are forcing a "one-size-fits-all" context retrieval process, which may not suit complex agentic workflows. Additionally, Windows users continue to face friction when attempting standard network calls outside of localhost environments.
*   **Use Cases:** Users are attempting to run highly customized local instances (evidenced by tweaking FTS5 recall limits) while relying on remote, third-party LLM providers (evidenced by the DNS resolution bug). 

## 8. Backlog Watch
While long-term historical data is not available for this 24-hour window, maintainers should prioritize reviewing the two items opened yesterday to prevent stale backlog:
*   **Review Requested:** Issue [#919](https://github.com/nullclaw/nullclaw/issues/919) needs maintainer input on whether to introduce a simple boolean flag or a more complex configuration struct for memory recall limits.
*   **Review Requested:** PR [#920](https://github.com/nullclaw/nullclaw/pull/920) is a critical bug fix for Windows users and requires code review and CI testing to be merged promptly.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-05-19

## 1. Today's Overview
LobsterAI is experiencing a highly active development phase, evidenced by the release of version `2026.5.18` and a substantial merge of 12 pull requests within the last 24 hours. The development team is heavily focused on UI/UX polish, architectural refactoring, and expanding model context capabilities. While maintainer and core contributor activity is exceptionally high, community engagement via new issues remains at zero for the day. Overall, the project is in a state of rapid, healthy iteration, stabilizing recent features before advancing to the next development cycle.

## 2. Releases
**Version: 2026.5.18** (Released 2026-05-18)
*   **Channel Attribution:** Introduced channel attribution packaging and request context (`keyfrom`).
*   **Model Context Expansion:** Added a per-model context window slider in model settings, allowing users to configure context sizes up to a 2M token upper bound.
*   *No explicit breaking changes or migration notes were detailed in the release PR, indicating a backward-compatible feature update.*

## 3. Project Progress
The project saw significant forward momentum today with 12 merged/closed PRs, focusing on UI unification, bug fixes, and performance improvements:
*   **Core Features:** Implemented a per-model context window slider ([PR #2001](https://github.com/netease-youdao/LobsterAI/pull/2001)) and integrated it into the release branch.
*   **UI/UX Refactoring:** Extracted model settings into a dedicated component ([PR #2004](https://github.com/netease-youdao/LobsterAI/pull/2004)) to reduce technical debt, replaced the dreaming toggle with a standard switch component ([PR #2005](https://github.com/netease-youdao/LobsterAI/pull/2005)), updated cron UI, and refreshed icons.
*   **Bug Fixes:** Resolved a theme regression where the new-task page background was mistakenly whitened ([PR #2007](https://github.com/netease-youdao/LobsterAI/pull/2007)), fixed markdown preview local resource path resolution ([PR #2002](https://github.com/netease-youdao/LobsterAI/pull/2002)), fixed compatibility issues with the mimo model's Anthropic format ([PR #2000](https://github.com/netease-youdao/LobsterAI/pull/2000)), and hashed non-ASCII MCP server names for OpenClaw compatibility ([PR #2006](https://github.com/netease-youdao/LobsterAI/pull/2006)).
*   **Performance:** Merged an optimization for cowork session streaming, reducing message update lookup complexity from O(n) to O(1) ([PR #811](https://github.com/netease-youdao/LobsterAI/pull/811)).
*   **Dependencies:** Upgraded the moltbot-popo plugin to 2.1.8 ([PR #2003](https://github.com/netease-youdao/LobsterAI/pull/2003)).

## 4. Community Hot Topics
There are no new community issues or heavily commented threads today, as activity was dominated by core maintainer merge commits. However, based on historical traffic, Dependabot continues to actively track the project:
*   **Dependency Tracking:** [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (Open) proposes bumping `electron` (40.2.1 to 42.1.0) and `electron-builder`. While this is a major version bump, it currently lacks maintainer approval and requires validation before merging.

## 5. Bugs & Stability
Several non-critical but user-impacting bugs were identified and immediately resolved in this cycle:
1.  **UI Regression (Fixed):** A previous commit accidentally changed the background color of the new-task page from a theme-aware beige to stark white ([PR #2007](https://github.com/netease-youdao/LobsterAI/pull/2007)).
2.  **Localization/CJK Bug (Fixed):** Non-ASCII (Chinese/CJK) MCP server names were being sanitized to hyphens, breaking recognition. Fixed by implementing deterministic md5-based key generation ([PR #2006](https://github.com/netease-youdao/LobsterAI/pull/2006)).
3.  **Artifacts/Rendering (Fixed):** Local relative image paths were failing to render in markdown preview due to improper `localfile://` resolution ([PR #2002](https://github.com/netease-youdao/LobsterAI/pull/2002)).
4.  **Model Compatibility (Fixed):** Addressed Anthropic format compatibility issues specifically affecting the mimo model ([PR #2000](https://github.com/netease-youdao/LobsterAI/pull/2000)).

## 6. Feature Requests & Roadmap Signals
While no new user requests were filed today, several open PRs indicate the project's near-term roadmap:
*   **Data Export:** [PR #755](https://github.com/netease-youdao/LobsterAI/pull/755) (Open) introduces exporting chat history to Markdown/JSON, signaling a push toward better user data portability.
*   **Context Compaction:** [PR #752](https://github.com/netease-youdao/LobsterAI/pull/752) (Open) implements a `/compact` command and auto-compression mechanism for long conversations. Given the new 2M context window slider, this feature is highly likely to be prioritized for the next release to manage token limits effectively.
*   **Performance Tweaks:** [PR #749](https://github.com/netease-youdao/LobsterAI/pull/749) (Open) and [PR #748](https://github.com/netease-youdao/LobsterAI/pull/748) (Open) suggest upcoming architectural optimizations for rendering and IM platform handling.

## 7. User Feedback Summary
Direct user feedback is absent from today' data feed (no new issues). However, the nature of the merged PRs reflects an ongoing demand for:
*   **Highly customizable LLM configurations:** Users need granular control over different models, evidenced by the new per-model context window sliders.
*   **Better local file integration:** Fixes to the markdown image paths show users are actively using the app to interact with local documents and artifacts.
*   **Seamless multi-platform integrations:** Continuous fixes for OpenClaw, IM platforms (POPO), and external model APIs (Anthropic, mimo) indicate an enterprise-oriented user base relying on LobsterAI as a central multi-model hub.

## 8. Backlog Watch
Several valuable community contributions have been sitting in the backlog (marked as stale) and urgently require maintainer review to prevent bitrot:
*   **Performance Optimizations:** [PR #749](https://github.com/netease-youdao/LobsterAI/pull/749) (Memoizing React components) and [PR #760](https://github.com/netease-youdao/LobsterAI/pull/760) (Removing redundant session status updates) are low-risk, high-value PRs that should be merged to improve Electron app responsiveness.
*   **Major Dependency Upgrades:** [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (Electron 40 -> 42) needs a definitive review to ensure the app stays up-to-date with the latest security patches and rendering capabilities.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-19

## 1. Today's Overview
Moltis experienced a highly active bug-squashing day, with maintainers merging six pull requests to resolve seven reported issues. The development focus was heavily concentrated on system stability, rectifying regressions from an April codebase refactor, and improving provider-specific compatibility (such as for Gemma models). Two new open pull requests indicate that active feature development is proceeding in parallel, targeting memory subsystem enhancements and infrastructure reliability. Overall, the project demonstrates a healthy, responsive maintenance cycle with rapid turnaround on community-reported bugs.

## 2. Releases
No new official releases were published today. The merged pull requests represent fixes merged into the main development branch, likely staging for an upcoming patch or minor version release.

## 3. Project Progress
Six PRs were merged/closed today, driving significant advancements in agent execution reliability, LLM provider compatibility, and configuration management:
*   **Agent Lifecycle & Hooks:** PR [#1017](https://github.com/moltis-org/moltis/pull/1017) and PR [#1018](https://github.com/moltis-org/moltis/pull/1018) resolved critical regressions from an April refactor, ensuring `BeforeAgentStart` and `BeforeLLMCall` hooks fire and modify payloads correctly.
*   **Provider Support:** PR [#1016](https://github.com/moltis-org/moltis/pull/1016) improved LLM response parsing by properly handling `<thought>` reasoning tags, explicitly benefiting Gemma-4-31b-it models.
*   **Security & Execution:** PR [#1019](https://github.com/moltis-org/moltis/pull/1019) fixed an issue where the dangerous command scanner incorrectly flagged heredoc body content. PR [#1021](https://github.com/moltis-org/moltis/pull/1021) updated sandbox module paths.
*   **Configuration:** PR [#1015](https://github.com/moltis-org/moltis/pull/1015) stopped the startup sequence from auto-compacting config files, preventing Voice Coqui TTS configurations from "disappearing."

## 4. Community Hot Topics
Community activity today was heavily focused on identifying specific technical edge cases rather than broad philosophical discussions. 
*   **Hook Reliability:** User `dmitriikeler` opened a rapid succession of high-quality bug reports regarding agent hooks (Issues [#1012](https://github.com/moltis-org/moltis/issues/1012), [#1013](https://github.com/moltis-org/moltis/issues/1013), [#1014](https://github.com/moltis-org/moltis/issues/1014)), pinpointing exact commit hashes where regressions occurred. This underscores the community's reliance on Moltis hooks for custom agent behaviors.
*   **LLM Tool Routing:** Issue [#1011](https://github.com/moltis-org/moltis/issues/1011) sparked discussion on the practical limitations of using smaller, cheaper models (like Claude 3.5 Haiku) for complex routing, proposing a per-turn tool filtering mechanism.
*   **QMD/Memory Infrastructure:** The open PRs from maintainer `gmoigneu` (PR [#1009](https://github.com/moltis-org/moltis/pull/1009) and PR [#1010](https://github.com/moltis-org/moltis/pull/1010)) highlight an ongoing push to mature the QMD memory backend.

## 5. Bugs & Stability
Today's closed issues reflect several high-impact stability bugs, all of which now have corresponding merged fix PRs:
1.  **Severity: High** - **Child Process Leaks:** `QmdManager::run_with_timeout` leaked Node child processes on timeout due to missing `kill_on_drop` flags. (Fixed in open PR [#1009](https://github.com/moltis-org/moltis/pull/1009)).
2.  **Severity: High** - **Hook Dispatch Lost:** `BeforeAgentStart` event failed to fire entirely due to a refactor in commit `e9674b2a` (Issue [#1012](https://github.com/moltis-org/moltis/issues/1012) | Fixed in PR [#1017](https://github.com/moltis-org/moltis/pull/1017)).
3.  **Severity: High** - **Tight Agent Loops:** Agents utilizing `exec` during a heartbeat turn triggered tight infinite loops (Issue [#858](https://github.com/moltis-org/moltis/issues/858) - closed today).
4.  **Severity: Medium** - **Silent Payload Discarding:** `BeforeLLMCall` hook silently failed to pass modified payloads to the LLM (Issue [#1013](https://github.com/moltis-org/moltis/issues/1013) | Fixed in PR [#1018](https://github.com/moltis-org/moltis/pull/1018)).
5.  **Severity: Medium** - **Reasoning Tag Leakage:** `<thought>` tags from Gemma models were outputted as plain text instead of being parsed as reasoning blocks, causing broken UI/TTS rendering (Issue [#1007](https://github.com/moltis-org/moltis/issues/1007) | Fixed in PR [#1016](https://github.com/moltis-org/moltis/pull/1016)).
6.  **Severity: Low** - **Regex False Positives:** `DANGEROUS_PATTERN_DEFS` incorrectly flagged `rm -r` commands inside heredoc strings (Issue [#1014](https://github.com/moltis-org/moltis/issues/1014) | Fixed in PR [#1019](https://github.com/moltis-org/moltis/pull/1019)).

## 6. Feature Requests & Roadmap Signals
Two notable feature requests/advancements signal the project's near-term trajectory:
*   **Drift-Resistant Agent Routing:** Issue [#1011](https://github.com/moltis-org/moltis/issues/1011) proposes `Per-turn tool_choice + active_tools filtering`. This indicates a strong community need to use cheaper LLMs reliably by limiting their available tools context and preventing tool-selection "drift."
*   **Advanced Memory Collections:** PR [#1010](https://github.com/moltis-org/moltis/pull/1010) introduces nested subfolders and collection-aware writes for the `memory_save` tool. Once merged, this will allow users and agents to build highly organized, hierarchical long-term memory architectures rather than relying on flat file storage.

## 7. User Feedback Summary
Users are actively pushing Moltis into production environments involving complex orchestration (hooks, memory backends, diverse LLM providers). Feedback reveals frustration with configuration loss during auto-compaction (Issue [#1006](https://github.com/moltis-org/moltis/issues/1006)) and undocumented regressions introduced during spring refactors. However, the promptness and quality of maintainer fixes (often merged the same day) is generating positive engagement. Users clearly appreciate the expandability of Moltis but require better contract guarantees around hook lifecycles and tool execution security.

## 8. Backlog Watch
Maintainers should monitor the following open items moving forward:
*   **PR [#1010](https://github.com/moltis-org/moltis/pull/1010) (Open):** Memory subfolder support requires maintainer review to merge this highly requested memory subsystem upgrade.
*   **PR [#1009](https://github.com/moltis-org/moltis/pull/1009) (Open):** The QMD child process kill fix is critical for users running heavy memory operations; this should be prioritized for merge to prevent server resource leaks.
*   **Issue [#1011](https://github.com/moltis-org/moltis/issues/1011) (Open):** Requires core team discussion on implementing per-turn tool filtering, which could be a significant architectural enhancement for routing smaller models.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-19

## 1. Today's Overview
CoPaw is experiencing **very high activity**, with 31 issues and 24 pull requests updated in the past 24 hours. The community is highly engaged, submitting numerous bug reports regarding recent stability regressions while actively proposing new features. Maintainers are responsive, having merged/closed 12 issues and 7 PRs, and shipping a new beta release. The focus of current development is clearly on **stability, rate limiting, and channel reliability**, as the team prepares for the next stable release. 

## 2. Releases
**v1.1.8-beta.1** was released today, indicating the project is actively testing patches for the current v1.1.7 stable version.
* **Version bump:** Bumped version to 1.1.8b1 ([PR #4346](https://github.com/agentscope-ai/QwenPaw/pull/4346))
* **Features:** Strengthened plan reaffirmation from user messages in plan mode ([PR #4198](https://github.com/agentscope-ai/QwenPaw/pull/4198))
* **Fixes:** Initial fixes applied to the browser implementation tool.

## 3. Project Progress
Today saw 7 merged or closed PRs focusing heavily on critical bug fixes and performance improvements:
* **Rate Limiting Fixed:** Replaced the global LLM rate limiter with per-model instances ([PR #4487](https://github.com/agentscope-ai/QwenPaw/pull/4487)). This directly resolves the widespread "three dots spinning" issue.
* **UI Performance:** Fixed a critical SSE connection leak that occurred during page navigation by upgrading the chat library ([PR #4488](https://github.com/agentscope-ai/QwenPaw/pull/4488)).
* **Provider Compatibility:** Bumped `max_tokens` minimum to 20 to satisfy model API constraints for newer models like `qwen3.5-omni-plus` ([PR #4489](https://github.com/agentscope-ai/QwenPaw/pull/4489)).
* **Token Tracking:** Added per-model token usage aggregation ([PR #4476](https://github.com/agentscope-ai/QwenPaw/pull/4476)).
* **Backup & Security:** Hardened backup restore trust mechanisms ([PR #4429](https://github.com/agentscope-ai/QwenPaw/pull/4429)).

## 4. Community Hot Topics
* **Catastrophic Chat Stalling / "Three Dots" Spinning:** The most discussed issue today is the chat window completely failing to respond. Users report that switching models, restarting Docker, or reinstalling does not fix it.
  * [Issue #4469](https://github.com/agentscope-ai/QwenPaw/issues/4469) (17 comments)
  * [Issue #4453](https://github.com/agentscope-ai/QwenPaw/issues/4453) (10 comments)
  * *Analysis:* This is deeply tied to the global rate limiter bug. Users are highly frustrated because standard troubleshooting fails; the recent PR #4487 targets this directly.
* **Open Task Bounties:** The pinned help-wanted issue ([Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291)) continues to attract heavy traffic (62 comments total), showing a healthy, growing contributor base.
* **DeepSeek v4 Integration:** Users are reporting parsing issues with DeepSeek's "thinking" content ([Issue #4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) - 8 comments), highlighting a need for better third-party reasoning-model compatibility.

## 5. Bugs & Stability
Stability is currently the project's weakest point, with several critical bugs reported today:
1. **Critical - Remote Code Execution (RCE):** An unauthorized RCE vulnerability was reported in the plugin interface ([Issue #4470](https://github.com/agentscope-ai/QwenPaw/issues/4470)). *Maintainer action required immediately.*
2. **Critical - Global LLM Frequency Limit:** Operations fail with "please retry after 300 seconds" across Feishu and Console channels ([Issue #4468](https://github.com/agentscope-ai/QwenPaw/issues/4468), [Issue #4478](https://github.com/agentscope-ai/QwenPaw/issues/4478)). *(Fix merged in PR #4487).*
3. **High - Context Compaction Failure:** Long conversations frequently crash with "missing ## header" ([Issue #4448](https://github.com/agentscope-ai/QwenPaw/issues/4448)).
4. **High - Plugin Tool Injection:** Tools written to `agent.json` are not being imported into the Agent's actual runtime toolkit ([Issue #4485](https://github.com/agentscope-ai/QwenPaw/issues/4485)).
5. **Medium - WeChat iLink Push Failures:** Scheduled tasks fail silently when `context_token` expires overnight without retry logic ([Issue #4477](https://github.com/agentscope-ai/QwenPaw/issues/4477)). *(Fix proposed in PR #4490).*
6. **Medium - Private LAN Deployment:** Icons fail to load in air-gapped environments due to hardcoded CDN dependencies ([Issue #2908](https://github.com/agentscope-ai/QwenPaw/issues/2908)).

## 6. Feature Requests & Roadmap Signals
The community is actively shaping the roadmap around UX and session management:
* **Session Management:** Strong demand for granular conversation control, including deleting specific messages ([Issue #4437](https://github.com/agentscope-ai/QwenPaw/issues/4437)), splitting conversations ([Issue #4436](https://github.com/agentscope-ai/QwenPaw/issues/4436)), and displaying turn/token counts ([Issue #4435](https://github.com/agentscope-ai/QwenPaw/issues/4435)).
* **Desktop App / Isolation:** A significant PR adding Tauri 2.x desktop support is under active review ([PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)), alongside a user request for Flathub/Flatpak packaging ([Issue #4486](https://github.com/agentscope-ai/QwenPaw/issues/4486)).
* **Upcoming in Next Release:** Based on open PRs, the next version will likely feature a lightweight Goal mode ([PR #4443](https://github.com/agentscope-ai/QwenPaw/pull/4443)), Feishu streaming card outputs ([PR #4480](https://github.com/agentscope-ai/QwenPaw/pull/4480)), and cron-context clearing options ([PR #4434](https://github.com/agentscope-ai/QwenPaw/pull/4434)).

## 7. User Feedback Summary
Users are generally excited about the project's rapid feature expansion (e.g., new skills like the World Cup companion [PR #4407](https://github.com/agentscope-ai/QwenPaw/pull/4407)), but **frustration is mounting regarding core chat stability**. A segment of users deploying via Docker on Windows faces persistent encoding (GBK) and runtime issues, leading to public complaints ([Issue #4475](https://github.com/agentscope-ai/QwenPaw/issues/4475)). Users heavily utilize multi-model setups (e.g., ChatGPT-5.5, DeepSeek v4, local providers) and are hitting provider-compatibility boundaries. 

## 8. Backlog Watch
* **Unresolved RCE Vulnerability ([Issue #4470](https://github.com/agentscope-ai/QwenPaw/issues/4470)):** Flagged today, this requires immediate maintainer validation and patching.
* **System-wide Windows GBK Encoding ([Issue #4481](https://github.com/agentscope-ai/QwenPaw/issues/4481)):** Users are requesting an architecture-level fix rather than scattered patches, as Unicode errors are breaking Windows CLI workflows daily.
* **AGENTS.md Template Overwrite ([Issue #4496](https://github.com/agentscope-ai/QwenPaw/issues/4496)):** A v1.1.7 regression where upgrades overwrite custom agent configurations with default templates. This affects core usability for advanced users.
* **Sub-agent Config Inheritance ([Issue #4491](https://github.com/agentscope-ai/QwenPaw/issues/4491)):** An architectural design question regarding how new sub-agents fetch global configurations. Requires maintainer input to unblock related PRs.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-19

## 1. Today's Overview
ZeroClaw experienced a highly active development day, with 50 pull requests updated and 26 issues seeing activity. The project is clearly in a heavy iteration phase, likely stabilizing the `v0.7.6` release (focused on Skills UX) while simultaneously laying the groundwork for `v0.8.0`. Activity is heavily tilted toward open work (39 open PRs, 15 open issues), indicating concurrent feature development in providers, desktop environment integrations, and core runtime stability. The volume of community-driven PRs and bug reports points to a healthy, engaged userbase actively testing edge cases across diverse deployments.

## 2. Releases
No new releases were published today. Development remains focused on merging upstream features and stabilizing bugs for the upcoming milestones.

## 3. Project Progress
Eleven pull requests were merged/closed today, advancing several core capabilities:
*   **Provider & API Integrations:** Fixes for multimodal image resolution failures ([PR #6743](https://github.com/zeroclaw-labs/zeroclaw/pull/6743)) and streaming payload tracing tests ([PR #6744](https://github.com/zeroclaw-labs/zeroclaw/pull/6744)) were merged. 
*   **Skills & Tooling:** The Tavily web search routing tests were finalized ([PR #6616](https://github.com/zeroclaw-labs/zeroclaw/pull/6616)), officially closing the Tavily implementation gap. The latent bug where `SkillForge` auto-integrator emitted non-schema fields was resolved ([Issue #6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210)), and `SkillMeta` now denies unknown fields to prevent silent typo drops ([Issue #6128](https://github.com/zeroclaw-labs/zeroclaw/issues/6128)).
*   **Observability & Gateway:** A critical fix for gateway broadcast hook lifetimes was merged ([PR #6757](https://github.com/zeroclaw-labs/zeroclaw/pull/6757)), and error-path parity for config patching was established ([Issue #6252](https://github.com/zeroclaw-labs/zeroclaw/issues/6252)).

## 4. Community Hot Topics
*   **The Great Commit Recovery & CI Fixes:** The ongoing audit to recover 153 commits lost in a bulk revert ([Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074), 2 comments) continues to be a major tracker. Closely related is the realization that the `Validate PR title` workflow has silently failing since its introduction, prompting immediate community PRs to replace it with an inline bash script ([PR #6752](https://github.com/zeroclaw-labs/zeroclaw/pull/6752), [Issue #6751](https://github.com/zeroclaw-labs/zeroclaw/issues/6751)).
*   **Skills UX Coordination:** The `v0.7.6` "Skills Support and UX" meta-tracker ([Issue #6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253)) is actively gathering community feedback for CLI, loader, and sandbox improvements.
*   **Platform Support Demand:** The closed feature request for FreeBSD platform support ([Issue #1924](https://github.com/zeroclaw-labs/zeroclaw/issues/1924), 7 comments) highlights a strong user need for pre-built binaries on server and TrueNAS systems.

## 5. Bugs & Stability
Several high-severity bugs were identified today, many lacking immediate PR fixes:
1.  **S1 - Runtime Panic (Fix PR Exists):** Installing skills via `clawhub:*` causes an immediate panic due to a `reqwest::blocking` call inside a `tokio` async context ([Issue #6681](https://github.com/zeroclaw-labs/zeroclaw/issues/6681)). 
2.  **S2 - Channels Crashloop (No PR):** The channels supervisor enters a crashloop if all configured channels are set to `enabled = false` ([Issue #6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724)).
3.  **S2 - Provider Setup Failure (No PR):** The `models list` command fails for custom providers because the `doctor` path ignores the stored API key ([Issue #6756](https://github.com/zeroclaw-labs/zeroclaw/issues/6756)).
4.  **S2 - Cron Integrity (No PR):** Timezone contract for Cron tools is inconsistent across the CLI and API ([Issue #6739](https://github.com/zeroclaw-labs/zeroclaw/issues/6739)), and manual `cron_run` incorrectly persists delivery failures as "ok" ([Issue #6632](https://github.com/zeroclaw-labs/zeroclaw/issues/6632)).

## 6. Feature Requests & Roadmap Signals
*   **Workspace Security (v0.8.0):** Maintainers are discussing per-agent capability flags to prevent workspace escapes and govern access to the host-wide `<install>/shared/` directory, slated for `v0.8.0` ([Issue #6729](https://github.com/zeroclaw-labs/zeroclaw/issues/6729)).
*   **New Provider Support:** There is strong momentum for expanding compatible providers, with active requests for GitHub Models ([Issue #6444](https://github.com/zeroclaw-labs/zeroclaw/issues/6444)) and Morph Fast Apply ([Issue #6439](https://github.com/zeroclaw-labs/zeroclaw/issues/6439)).
*   **Advanced RAG/Parsing:** Users are heavily requesting native PDF support for tool calls to process scholarly articles and journals ([Issue #5745](https://github.com/zeroclaw-labs/zeroclaw/issues/5745)).

## 7. User Feedback Summary
Users are actively deploying ZeroClaw in complex, multi-platform environments, leading to friction around configuration and provider setup. A primary pain point is provider routing—for example, custom Qwen endpoints returning 405 errors due to strict URL handling ([Issue #6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558)), and DeepSeek silently ignoring user-defined `base_url` overrides ([PR #6753](https://github.com/zeroclaw-labs/zeroclaw/pull/6753)). On the positive side, community contributors like `Project516` are proactively addressing repo hygiene, optimizing CI build matrices, and providing working Docker documentation for Rootless deployments ([Issue #6760](https://github.com/zeroclaw-labs/zeroclaw/issues/6760)).

## 8. Backlog Watch
*   **ACP Session Persistence (XL PR):** [PR #6649](https://github.com/zeroclaw-labs/zeroclaw/pull/6649) introduces SQLite-backed persistence for ACP sessions. It's a massive PR that requires thorough review to ensure editor sessions survive reconnects safely.
*   **OTel Instrumentation (L PR):** [PR #6190](https://github.com/zeroclaw-labs/zeroclaw/pull/6190) (stacked on the aging [PR #6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009)) has been waiting for author action since late April. It's crucial for production observability but is currently blocked.
*   **WebSocket Steering Integrity:** [Issue #6661](https://github.com/zeroclaw-labs/zeroclaw/issues/6661) highlights a complex problem where mid-turn websocket steering invalidates already-streamed text. This needs architectural discussion to prevent transcript corruption.

</details>