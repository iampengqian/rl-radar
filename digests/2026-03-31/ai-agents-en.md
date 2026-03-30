# OpenClaw Ecosystem Digest 2026-03-31

> Issues: 500 | PRs: 500 | Projects covered: 11 | Generated: 2026-03-30 22:07 UTC

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

# OpenClaw Project Digest: 2026-03-31

## 1. Today's Overview
OpenClaw is experiencing **extreme activity** with 500 issues and 500 pull requests updated in the last 24 hours, indicating a rapidly evolving codebase with high community engagement. The high ratio of open issues (437 open vs. 63 closed) suggests the project is struggling to keep pace with bug reports and feature requests in the current cycle. With 307 open PRs against 193 merged/closed, the maintainers are actively processing contributions, but a significant backlog remains. No new stable releases were cut today, implying the team is likely stabilizing the codebase for a future milestone. Overall, the project is in a "high-velocity development" phase with a focus on bug fixing and platform stability.

## 2. Releases
No new releases were recorded for this reporting period.

## 3. Project Progress
Development activity focused heavily on infrastructure stability, channel integrations, and fixing regressions from recent builds. Over 190 PRs were actioned.

**Merged/Closed Highlights:**
*   **Gateway & Streaming:** Hardened chat stream idempotency and effective-run cleanup ([#50923](https://github.com/openclaw/openclaw/pull/50923)), fixed Windows test hangs ([#57710](https://github.com/openclaw/openclaw/pull/57710)), and fixed config file opening without shell interpolation ([#57921](https://github.com/openclaw/openclaw/pull/57921)).
*   **Channels:** Fixed Discord post-reset startup queue race ([#49001](https://github.com/openclaw/openclaw/pull/49001)) and restored Matrix E2EE for one-off CLI sends ([#57936](https://github.com/openclaw/openclaw/pull/57936)).
*   **Agent Behavior:** Fixed mid-turn 429 rate limit silent failures ([#50930](https://github.com/openclaw/openclaw/pull/50930)) and resolved context engine registration failures.

**Advanced Features (Open/In-Review):**
*   **Migration Tools:** A new CLI feature for cross-device migration (`openclaw migrate export/import`) is in progress ([#53520](https://github.com/openclaw/openclaw/pull/53520)).
*   **Security:** "RubberBand" static command pattern detection for preventing prompt injection is being reviewed ([#24958](https://github.com/openclaw/openclaw/pull/24958)).
*   **Attention System:** Phase 2 of the "Attention Governor" for salience scoring has been proposed ([#51651](https://github.com/openclaw/openclaw/pull/51651)).

## 4. Community Hot Topics
The community is currently focused on **plugin security**, **multi-model support**, and **authentication reliability**.

1.  **Security Scanning Blockage (15 comments):** Issue [#53870](https://github.com/openclaw/openclaw/issues/53870) reports that the official `@openclaw/matrix` plugin is pending a VirusTotal scan, preventing installation. Users are currently blocked from deploying Matrix connectivity.
2.  **OAuth Token Persistence (10 comments):** Issue [#52037](https://github.com/openclaw/openclaw/issues/52037) highlights a critical failure where OpenAI Codex OAuth tokens do not persist to disk after refresh, forcing repeated re-authentications.
3.  **Provider Authentication (10 comments):** Users are frustrated by "401 Missing Authentication" errors with OpenRouter despite valid keys ([#51056](https://github.com/openclaw/openclaw/issues/51056)), indicating a regression in how headers are constructed.
4.  **Vision/Media "Blind Spots" (7 comments):** A detailed issue titled "The Blind Spot Problem" ([#51857](https://github.com/openclaw/openclaw/issues/51857)) discusses agents silently failing to process images while reporting success.

## 5. Bugs & Stability
Stability is currently the biggest concern, with multiple reports of **crash loops**, **installation failures**, and **regressions** in core functionality.

| Severity | Issue | Details | Fix Status |
| :--- | :--- | :--- | :--- |
| **Critical** | [#52445](https://github.com/openclaw/openclaw/issues/52445) | **Gateway Crash Loop:** Gateway crashes on startup if any extension (including built-ins) is missing entry points. | **Closed** (Likely fixed in recent merges) |
| **Critical** | [#51144](https://github.com/openclaw/openclaw/issues/51144) | **Docker Restart Loop:** Official Docker container consistently restarts; gateway closes immediately. | Open |
| **High** | [#51083](https://github.com/openclaw/openclaw/issues/51083) | **CLI Initialization Crash:** `ReferenceError: Cannot access 'ANTHROPIC_MODEL_ALIASES' before initialization` on every command. | Open |
| **High** | [#50800](https://github.com/openclaw/openclaw/issues/50800) | **Module Not Found:** Self-built Docker images fail with `ERR_MODULE_NOT_FOUND` for `axios`. | Open |
| **Medium** | [#52024](https://github.com/openclaw/openclaw/issues/52024) | **Context Trimming Bug:** Trimmer splits `tool_use`/`tool_result` pairs, causing API rejections. | Open |
| **Medium** | [#52474](https://github.com/openclaw/openclaw/issues/52474) | **UI Bug:** Desktop UI prepends `anthropic/` to all models, breaking non-Anthropic providers. | Open |

## 6. Feature Requests & Roadmap Signals
User needs are trending toward **cost optimization**, **self-hosting**, and **proactive automation**.

*   **Gemini Context Caching ([#51372](https://github.com/openclaw/openclaw/issues/51372)):** Strong request to implement `cachedContents` API for Gemini to reduce costs for agents with large system instructions.
*   **Self-Hosted Search ([#13665](https://github.com/openclaw/openclaw/pull/13665)):** Integration of **SearXNG** as a search provider is a highly anticipated PR, moving away from API-key-dependent providers.
*   **Watchdog/Self-Healing ([#52196](https://github.com/openclaw/openclaw/issues/52196)):** Users are discussing "The Watchdog Problem"—the need for the agent to detect and recover from its own gateway failures without human intervention.
*   **TTS Expansion ([#10356](https://github.com/openclaw/openclaw/pull/10356)):** Adding **Typecast** as a TTS provider with emotion presets indicates a push toward more expressive voice agents.

## 7. User Feedback Summary
*   **Pain Points:** Users are expressing frustration with **installation friction** (Docker/CLI crashes) and **silent failures** (vision processing, tool calls hanging). The "Blind Spot" issue ([#51857](https://github.com/openclaw/openclaw/issues/51857)) specifically notes that the agent reports success while failing to execute tasks, eroding trust.
*   **Use Cases:** High interest in **multi-channel deployments** (WhatsApp, Telegram, Matrix) and **cost management** via context caching.
*   **Sentiment:** While activity is high, the volume of "regression" and "crash" tags suggests the current build (2026.3.x) is perceived as unstable by a segment of the user base.

## 8. Backlog Watch
The following items require immediate maintainer attention due to impact or longevity:

1.  **Security Credential Leak ([#51164](https://github.com/openclaw/openclaw/issues/51164)):** A live API key was found in a skill archive (`skills/maherucifer/mersal/.env`). This is a critical security hygiene issue.
2.  **Gateway Crash Loop ([#51144](https://github.com/openclaw/openclaw/issues/51144)):** Docker usability is currently broken for new users.
3.  **Session Reset Logic ([#50891](https://github.com/openclaw/openclaw/issues/50891)):** Idle and daily resets do not trigger `session-memory` hooks, causing data loss for long-running agents.

---

## Cross-Ecosystem Comparison

# Cross-Project Analysis: AI Agent & Personal Assistant Ecosystem
**Report Date:** 2026-03-31
**Analyst:** Senior Ecosystem Analyst

---

## 1. Ecosystem Overview
The open-source AI agent ecosystem on March 31, 2026, is characterized by **extreme velocity and architectural maturation**. Projects are rapidly transitioning from experimental frameworks to production-grade platforms, evidenced by major version releases (CoPaw v1.0.0) and aggressive security hardening (IronClaw, OpenClaw). A clear bifurcation is emerging between "heavyweight" platforms integrating enterprise channels (Slack, Feishu, DingTalk) and "lightweight" autonomous agents focusing on local execution and containerization. The primary technical bottleneck across the ecosystem has shifted from model capability to **infrastructure reliability** (Docker stability, context management, and memory persistence).

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Assessment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | No Release | ⚠️ **6/10** | High velocity but struggling with backlog; critical stability regressions. |
| **CoPaw** | High | 43 Merged | **v1.0.0** (Stable) | 🟢 **9/10** | Major milestone reached; excellent maintenance velocity. |
| **NanoBot** | 20 | 46 | No Release | 🟡 **7/10** | High innovation (memory systems) but rising technical debt. |
| **LobsterAI** | 27 | 50 | **2026.3.30** | 🟡 **6.5/10** | Rapid iteration ("move fast, break things"); stability concerns. |
| **IronClaw** | 10 | 50 | v0.24.0 Prep | 🟢 **8.5/10** | Strong CI/CD; focus on security and financial infrastructure. |
| **PicoClaw** | 29 | 80 | Nightly | 🟢 **8/10** | High responsiveness; fixed critical CPU regression immediately. |
| **NanoClaw** | 17 | 50 | No Release | 🔴 **5/10** | High community engagement but **maintainer bottleneck** (0 issues closed). |
| **Moltis** | 1 Closed | 5 Merged | No Release | 🟢 **8.5/10** | Healthy maintenance; responsive bug triage. |
| **TinyClaw** | 0 | 2 Merged | No Release | 🟢 **8/10** | Stable/Maintenance mode; low noise. |
| **ZeptoClaw** | 1 | 0 | No Release | 🟢 **7.5/10** | Stable; strategic architectural discussions. |
| **EasyClaw** | 0 (2 Closed) | 0 | No Release | 🟢 **7/10** | Low activity; maintenance focus. |

## 3. OpenClaw's Position

**Advantages vs. Peers:**
*   **Ecosystem Gravity:** With 500+ issue/PR updates, OpenClaw commands the largest mindshare, serving as the "core reference" implementation.
*   **Advanced Security R&D:** The "RubberBand" anti-injection and "Attention Governor" proposals place it ahead of peers in cognitive architecture and safety.
*   **Integration Breadth:** Leading in channel diversity (Matrix E2EE, Discord, WhatsApp), outpacing smaller competitors.

**Technical Approach Differences:**
*   **Vs. CoPaw/LobsterAI:** OpenClaw appears more focused on **underlying runtime stability** (gateway crash loops) whereas CoPaw is focused on **workflow orchestration** (multi-agent swarms).
*   **Vs. NanoBot:** Both face token/context challenges, but OpenClaw is tackling this via "Attention/Governance" systems, while NanoBot is pursuing "Dream/Memory" consolidation.

**Community Size:**
*   **Scale:** ~10x the raw activity of competitors, but **signal-to-noise ratio is lower**. The backlog of open issues (437) suggests the community is generating work faster than maintainers can absorb it, unlike Moltis or IronClaw which have tighter feedback loops.

## 4. Shared Technical Focus Areas

**1. Context & Memory Management (Critical)**
*   **Projects:** NanoBot, CoPaw, OpenClaw.
*   **Need:** Unbounded context growth is breaking production deployments (NanoBot's 560k token heartbeat, CoPaw's `MEMORY.md` pollution). "Context pruning" and "summarization" are top user requests.

**2. Docker & Deployment Stability**
*   **Projects:** OpenClaw, NanoClaw, PicoClaw.
*   **Need:** Crash loops in containers (OpenClaw #51144, NanoClaw #1487) are the #1 adoption blocker. Users demand robust self-healing and upgrade mechanisms (PicoClaw's self-updater).

**3. Security Hardening**
*   **Projects:** IronClaw, LobsterAI, OpenClaw.
*   **Need:** SSRF vulnerabilities, credential leaks (OpenClaw #51164), and supply chain risks (NanoClaw's curl scripts) are driving a shift toward sandboxed execution and audited permissions.

**4. Provider Interoperability**
*   **Projects:** LobsterAI, IronClaw, EasyClaw.
*   **Need:** Fragility in connecting to diverse LLMs (Gemini, Qwen, Ollama, OpenRouter). Users need standardized provider layers that handle auth and parameter mapping gracefully.

## 5. Differentiation Analysis

| Segment | Projects | Strategy | Target User |
| :--- | :--- | :--- | :--- |
| **Enterprise Orchestrators** | **CoPaw, IronClaw** | Focus on multi-agent collaboration, financial execution layers, and channel compliance (Feishu/Slack). | Enterprise Devs, Fintech |
| **Personal Autonomous Agents** | **OpenClaw, NanoBot, PicoClaw** | High customizability, local execution, bleeding-edge features (MCP, E2EE). | Power Users, Hobbyists |
| **Lightweight/Embedded** | **TinyClaw, ZeptoClaw** | Minimal footprint, UI-focused, or specific utility (tooling). | Edge devices, specific workflows |
| **Consumer Desktop** | **LobsterAI, EasyClaw** | Desktop app focus, packaged experience, local-first. | General Consumers |

**Architectural Divergence:**
*   **MCP (Model Context Protocol):** Heavily adopted by OpenClaw, CoPaw, and LobsterAI as the standard for tool integration, while NanoClaw is experimenting with containerized skills.

## 6. Community Momentum & Maturity

*   **Tier 1 (Hyper-Growth/Release):** **CoPaw** (v1.0.0 release) and **IronClaw** (v0.24 prep) show the healthiest balance of velocity and stability.
*   **Tier 2 (High Velocity/Stabilizing):** **OpenClaw** and **PicoClaw** are moving fast but fighting friction. PicoClaw's fix for CPU usage shows maturity; OpenClaw's backlog shows growing pains.
*   **Tier 3 (Stalled/Risk):** **NanoClaw** is the outlier with high PR volume but zero maintainer merges/closures, signaling a potential governance bottleneck or abandonment risk.
*   **Tier 4 (Stable/Maintenance):** **TinyClaw, EasyClaw, ZeptoClaw** are in low-activity maintenance modes, serving stable niches.

## 7. Trend Signals

1.  **The "Idle" Cost Crisis:** Community feedback (NanoBot #2375) reveals that autonomous agents are prohibitively expensive when idle due to "heartbeat" token consumption. **Trend:** Expect a shift toward event-driven architectures rather than polling/heartbeat loops.
2.  **Containerization as Default:** The volume of Docker-related bugs indicates users overwhelmingly prefer deploying agents as containers. **Trend:** "Works in Docker" is becoming the primary definition of "done" for these projects.
3.  **Security Scanning as a Gatekeeper:** OpenClaw's plugin scanning blockage (#53870) highlights that security scanners (VirusTotal) are now critical infrastructure for plugin ecosystems. **Trend:** Agent app stores will require automated security auditing.
4.  **Self-Healing Infrastructure:** Users are moving from wanting "error logs" to wanting "auto-recovery" (OpenClaw #52196). **Trend:** Agents that can detect and fix their own gateway failures will define the next generation of reliability.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-03-31

## 1. Today's Overview
NanoBot is demonstrating **extremely high active development velocity** with 66 total update events (20 issues, 46 PRs) in the last 24 hours. The project is in a rapid iteration phase with significant architectural work happening in parallel across memory systems, multi-tenant isolation, and channel integrations. However, this speed is accompanied by **emerging stability concerns** around token consumption (heartbeat issues), memory leaks, and provider compatibility breaks. The community is highly engaged with quality bug reports and feature proposals, though the lack of recent releases suggests the team is accumulating changes for a significant milestone.

## 2. Releases
No new releases were published today. The latest tagged version remains `v0.1.4.post6`, though commits are advancing past this tag (e.g., `c15f63a`).

## 3. Project Progress

**Merged/Closed PRs (14 total):**
- **[PR #2654](https://github.com/HKUDS/nanobot/pull/2654)** - Fixed ZhipuAI compatibility by stripping non-standard message keys (`reasoning_content`, etc.) that caused error 1214
- **[PR #2615](https://github.com/HKUDS/nanobot/pull/2615)** - Added `CompositeHook` for composable lifecycle hooks, addressing extensibility blockers
- **[PR #1362](https://github.com/HKUDS/nanobot/pull/1362)** - Introduced OpenAI-compatible HTTP API (`/v1/chat/completions`, `/v1/models`) with session isolation
- **[PR #3](https://github.com/HKUDS/nanobot/pull/3)** - Added Zhipu API support with `glm-4.7-flash` as default model
- **[PR #1150](https://github.com/HKUDS/nanobot/pull/1150)** - Enabled file upload support for Discord channel (20MB limit)
- **[PR #2268](https://github.com/HKUDS/nanobot/pull/2268)** - Implemented LLM tracing via LiteLLM callback system

**Key Advancing Features (Open PRs):**
- **[PR #2649](https://github.com/HKUDS/nanobot/pull/2649)** - Two-stage memory system with "Dream" consolidation (HISTORY.md → SOUL.md/USER.md/MEMORY.md)
- **[PR #2653](https://github.com/HKUDS/nanobot/pull/2653)** - Python SDK facade with per-session isolation (`Nanobot.from_config()`)
- **[PR #2394](https://github.com/HKUDS/nanobot/pull/2394)** - Architectural fix for consecutive message role coalescing
- **[PR #2628](https://github.com/HKUDS/nanobot/pull/2628)** - Telegram forum topic threads support

## 4. Community Hot Topics

| Issue/PR | Engagement | Core Topic |
|----------|------------|------------|
| **[#235](https://github.com/HKUDS/nanobot/issues/235)** | 10 comments, 8 👍 | Bot responds with "no response to give" after extended use with Telegram/DeepSeek |
| **[#2375](https://github.com/HKUDS/nanobot/issues/2375)** | 10 comments, 1 👍 | Heartbeat session history causing 560k token consumption per cycle |
| **[#2406](https://github.com/HKUDS/nanobot/issues/2406)** | 2 comments, 2 👍 | Request to skip heartbeat LLM calls when no active tasks |

**Analysis:** The community is deeply concerned about **token efficiency and cost control**. The heartbeat mechanism, designed for autonomous operation, is becoming a financial burden when session histories grow unbounded. Users want smarter resource management—only invoking LLMs when meaningful work exists.

## 5. Bugs & Stability

**Critical Severity:**
1. **[Issue #2375](https://github.com/HKUDS/nanobot/issues/2375)** - Heartbeat consumes 560k tokens per run due to unbounded `heartbeat.jsonl` growth. *Fix signal: [PR #2649](https://github.com/HKUDS/nanobot/pull/2649) proposes memory consolidation overhaul*
2. **[Issue #2638](https://github.com/HKUDS/nanobot/issues/2638)** - Session history grows unbounded when memory consolidation fails, causing agent unresponsiveness
3. **[Issue #2635](https://github.com/HKUDS/nanobot/issues/2635)** - Memory leak in `_active_tasks` due to callback logic error (task never removed from tracking dict)

**High Severity:**
4. **[Issue #2639](https://github.com/HKUDS/nanobot/issues/2639)** - Breaking change with OpenRouter after updating to post6; API key misrouting to OpenAI endpoint
5. **[Issue #2613](https://github.com/HKUDS/nanobot/issues/2613)** - Agent stops mid-command with `NoneType` error from agent loop
6. **[Issue #235](https://github.com/HKUDS/nanobot/issues/235)** - Bot silently returns "no response" after prolonged use (8 👍 indicates widespread impact)

**Medium Severity:**
7. **[Issue #2570](https://github.com/HKUDS/nanobot/issues/2570)** - Ollama local model returns 404; gateway not listening on port 18790
8. **[Issue #2651](https://github.com/HKUDS/nanobot/issues/2651)** - MCP SSE client missing `Accept: text/event-stream` header

## 6. Feature Requests & Roadmap Signals

| Feature Request | Signals | Likelihood |
|-----------------|---------|------------|
| **Disable/configure heartbeat** ([#2647](https://github.com/HKUDS/nanobot/issues/2647), [#2406](https://github.com/HKUDS/nanobot/issues/2406)) | Multiple users requesting; aligns with token efficiency push | **High** - Simple config addition |
| **Multi-tenant data isolation** ([#2102](https://github.com/HKUDS/nanobot/issues/2102)) | Closed issue suggests implementation; [PR #2653](https://github.com/HKUDS/nanobot/pull/2653) adds session isolation | **High** - SDK PR addresses this |
| **Official subagent configuration** ([#2599](https://github.com/HKUDS/nanobot/issues/2599)) | User demand for multi-model subagent setup; [PR #2368](https://github.com/HKUDS/nanobot/pull/2368) in progress | **Medium** - PR exists but not merged |
| **Matrix E2EE emoji verification** ([#2641](https://github.com/HKUDS/nanobot/issues/2641)) | Tracking issue created for post-PR #2596 work | **Medium** - Explicitly tracked |

## 7. User Feedback Summary

**Pain Points:**
- **Token cost anxiety:** Users running autonomous agents are experiencing unexpected high costs from heartbeat mechanisms that invoke LLMs even when idle
- **Silent failures:** The "no response to give" error provides no debugging information, leaving users stranded
- **Configuration complexity:** Adding subagents with different models lacks official documentation, requiring reverse-engineering
- **Provider fragility:** Updates break compatibility with specific providers (OpenRouter, ZhipuAI, Ollama, Gemini)

**Positive Signals:**
- Users successfully running NanoBot on Raspberry Pi with Ollama (when working)
- Active contribution of high-quality bug reports with code analysis (e.g., #2635's memory leak diagnosis)
- Community proposing architectural solutions (PRs #2649, #2394, #2615)

**Use Cases Observed:**
- Email monitoring every 30 minutes via heartbeat
- Telegram bot for personal assistance
- WeChat/Feishu enterprise integrations
- Multi-model agent orchestration

## 8. Backlog Watch

| Item | Age | Concern |
|------|-----|---------|
| **[Issue #87](https://github.com/HKUDS/nanobot/issues/87)** | ~2 months | Docker build hangs on Windows during `npm install` - blocks Windows adoption |
| **[Issue #235](https://github.com/HKUDS/nanobot/issues/235)** | ~2 months | "No response" bug with 8 👍 but no resolution; affects Telegram/DeepSeek users |
| **[PR #1627](https://github.com/HKUDS/nanobot/pull/1627)** | 25 days | Memory decoupling refactor to prevent data loss from truncated responses - critical for production use |
| **[PR #2368](https://github.com/HKUDS/nanobot/pull/2368)** | 9 days | Configured subagents feature - addresses documented user need but awaiting review |

**Recommendation:** The memory consolidation and session isolation work (PRs #2649, #2653, #1627) should be prioritized for the next release as they address multiple critical issues (#2375, #2638, #2102). A release documenting breaking changes for provider configurations is overdue given #2639 reports.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-03-31

## 1. Today's Overview
PicoClaw demonstrates **high velocity and active development** with 80 pull requests updated and 29 issues processed in the last 24 hours. The project is currently iterating rapidly on its `v0.2.4` release cycle, evidenced by the new nightly build and a significant focus on bug fixes (45 merged/closed PRs). Key areas of focus include expanding channel integrations (Chatmail, WhatsApp, Mattermost), refining the provider architecture (Rate Limiting, LM Studio), and hardening security. However, the high volume of changes coincides with several stability reports regarding CPU usage and configuration bugs, suggesting a maturation phase where new features are being stabilized.

## 2. Releases
- **Nightly Build: `v0.2.4-nightly.20260330.93f4c4a8`**
  - **Status**: Automated build (use with caution).
  - **Significance**: This nightly follows the recent `v0.2.4` stable tag and includes the latest merged fixes, specifically addressing high CPU usage and provider configurations.
  - **Full Changelog**: [v0.2.4...main](https://github.com/sipeed/picoclaw/compare/v0.2.4...main)

## 3. Project Progress
Significant advancements were merged today, focusing on stability and extensensibility:
- **Performance Fix**: A critical fix for high CPU usage when idle (PR [#2044](https://github.com/sipeed/picoclaw/pull/2044)) was merged, resolving a major regression in v0.2.4.
- **Self-Upgrade Mechanism**: PR [#2201](https://github.com/sipeed/picoclaw/pull/2201) introduced robust self-update selection and extraction logic, advancing the long-awaited auto-update feature.
- **Security Hardening**: Merged PR [#2088](https://github.com/sipeed/picoclaw/pull/2088) added security audits for open-by-default bots to prevent accidental exposure of private agents.
- **Docker Stability**: PR [#1826](https://github.com/sipeed/picoclaw/pull/1826) fixed an issue where containers persisted despite the app stopping on SIGINT/SIGTERM.
- **New Channels**: Integration for **Chatmail (Delta Chat)** ([#2167](https://github.com/sipeed/picoclaw/pull/2167)) and **Mattermost** ([#1586](https://github.com/sipeed/picoclaw/pull/1586)) is progressing via open PRs.

## 4. Community Hot Topics
- **Self-Upgrade Support (Issue [#618](https://github.com/sipeed/picoclaw/issues/618))**: Highly upvoted (👍 2) and recently closed. The community strongly desires a native auto-updater for continuous deployment of features and security patches across Debian, Windows, and embedded devices.
- **High CPU Usage (Issue [#2001](https://github.com/sipeed/picoclaw/issues/2001))**: Users reported v0.2.4 consuming excessive CPU (10%+) while idle. This generated significant discussion regarding runtime efficiency, leading to the merged fix in PR #2044.
- **Configuration Friction (Issue [#1883](https://github.com/sipeed/picoclaw/issues/1883))**: A proposal to refactor the provider/protocol field to resolve model name ambiguity. Users find the current `{vendor}/{model_id}` parsing logic confusing for local servers.
- **Web UI History Visibility (Issue [#1996](https://github.com/sipeed/picoclaw/issues/1996))**: Developers are discussing why the Web UI history API only shows "pico" sessions, rendering sessions from Telegram/Discord invisible in the dashboard.

## 5. Bugs & Stability
- **[HIGH] High CPU Usage (Fixed)**: Issue [#2001](https://github.com/sipeed/picoclaw/issues/2001) reported 10% CPU usage at idle caused by a blocking function in the agent loop. **Status**: Fixed in PR [#2044](https://github.com/sipeed/picoclaw/pull/2044).
- **[HIGH] Config Save Failures**: Users are reporting tokens/configs fail to save in the Web UI.
    - Discord Token: Issue [#2072](https://github.com/sipeed/picoclaw/issues/2072) (Closed).
    - Telegram Token: Issue [#2195](https://github.com/sipeed/picoclaw/issues/2195) (Open - needs verification).
- **[HIGH] Provider Polling Loop**: Issue [#2172](https://github.com/sipeed/picoclaw/issues/2172) reports PicoClaw invoking `/v1/models` every second, potentially overwhelming local inference servers (vLLM).
- **[MEDIUM] Anthropic Prompt Caching**: Issue [#2191](https://github.com/sipeed/picoclaw/issues/2191) notes that the `anthropic_messages` provider ignores `SystemParts`, breaking prompt caching features.

## 6. Feature Requests & Roadmap Signals
- **Rate Limiting**: PR [#2198](https://github.com/sipeed/picoclaw/pull/2198) and Issue [#2194](https://github.com/sipeed/picoclaw/issues/2194) propose dynamic rate limiting to prevent 429 errors. This is likely to be a core feature soon.
- **Advanced Observability**: Request for **LangSmith** integration (Issue [#2173](https://github.com/sipeed/picoclaw/issues/2173)) to debug multi-step agent loops.
- **Authentication UI**: Issue [#2179](https://github.com/sipeed/picoclaw/issues/2179) requests a login page to pair with recent backend changes, indicating a shift toward multi-user or secured access.
- **New Provider Support**: Requests for **SiliconFlow** (Issue [#2045](https://github.com/sipeed/picoclaw/issues/2045)) and **LM Studio** (PR [#2193](https://github.com/sipeed/picoclaw/pull/2193)) show strong demand for diverse local and cloud LLM support.

## 7. User Feedback Summary
Users are excited about the breadth of channel support (Feishu, Telegram, Discord) but are currently facing friction with **configuration reliability** (specifically saving tokens) and **resource management** (CPU usage). There is a clear divide between "power users" requesting advanced features (LangSmith, custom auth headers in Issue #2169) and "casual users" struggling with initial setup (Web UI tour in PR #2196). The shift toward requiring authentication (Issue #2179) has surprised some users, indicating a need for better communication regarding security changes.

## 8. Backlog Watch
- **Issue #571**: *Progress feedback during tool execution*. Users find the "Thinking..." state unresponsive during long tasks. This is crucial for user retention but remains open.
- **Issue #1589**: *Telegram multi-bot collision*. Running multiple bots in one group causes them all to reply. This is a significant UX flaw for power users running specialized agents.
- **Issue #1830**: *Documentation & i18n*. A persistent call for better user guidance. The submitter notes the project lacks "user-friendly design and stronger guidance," which is critical for adoption beyond developers.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-03-31

## 1. Today's Overview
NanoClaw demonstrates **extremely high community engagement** today with **67 total update events** (17 Issues, 50 PRs) but shows signs of **maintainer bottlenecks** with zero releases and zero closed issues. The project is in active development phase with strong interest in containerization, security enhancements, and multi-platform integrations. However, the complete absence of issue closures and the backlog of 39 open PRs suggest the core team may be overwhelmed or focused internally. The community is driving significant innovation through feature proposals and integrations while critical bugs remain unaddressed.

---

## 2. Releases
**No new releases** were published today. The project appears to be in an accumulation phase with numerous open PRs awaiting review/merge.

---

## 3. Project Progress

### Merged/Closed PRs (11 total)
| PR | Description | Impact |
|---|---|---|
| [#1552](https://github.com/qwibitai/nanoclaw/pull/1552) | Fix npm audit errors | Security hygiene - resolved 4 vulnerabilities (2 moderate, 2 high) |
| [#1556](https://github.com/qwibitai/nanoclaw/pull/1556) | Feat/docs | Documentation improvements |
| [#1544](https://github.com/qwibitai/nanoclaw/pull/1544) | Emoji status tracker with non-main group support | Feature enhancement for status tracking |
| [#1555](https://github.com/qwibitai/nanoclaw/pull/1555) | Idea Maze — Reddit pipeline, Tavily enrichment | New research/ideation skill |
| [#1551](https://github.com/qwibitai/nanoclaw/pull/1551) | Dev | Merged development work |

### Key Advancing Features (Open PRs with momentum)
- **[#1514](https://github.com/qwibitai/nanoclaw/pull/1514)** - Web Dashboard on port 3333 with SQLite read-only access (significant UX improvement)
- **[#700](https://github.com/qwibitai/nanoclaw/pull/700)** - Session rotation to prevent container timeouts (critical stability fix, blocked)
- **[#1343](https://github.com/qwibitai/nanoclaw/pull/1343)** - CLI backend replacing Agent SDK for TOS compliance with subscription tokens

---

## 4. Community Hot Topics

| Issue/PR | Engagement | Analysis |
|---|---|---|
| [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) - Invalid SSL cert on nanoclaw.dev | 4 comments | **Infrastructure urgency** - Production site security issue affecting users immediately |
| [#1492](https://github.com/qwibitai/nanoclaw/issues/1492) - AWS Bedrock auth backend | 2 comments, 3 👍 | **Enterprise adoption blocker** - Organizations using AWS Bedrock cannot use NanoClaw without migration. High enterprise demand signal. |
| [#1554](https://github.com/qwibitai/nanoclaw/issues/1554) - Unbounded log file growth | 2 👍 | **Operational pain point** - 600MB+ log files indicate missing log rotation, affecting production deployments |
| [#1522](https://github.com/qwibitai/nanoclaw/issues/1522) - WhatsApp media inaccessible | 1 👍 | **Channel capability gap** - Agents cannot process photos/voice notes from WhatsApp users |

**Underlying Need**: Community strongly wants **enterprise-grade features** (Bedrock, log management, container isolation) and **full-channel media support** for production deployments.

---

## 5. Bugs & Stability

### Critical Severity
| Issue | Description | Fix Status |
|---|---|---|
| [#1487](https://github.com/qwibitai/nanoclaw/issues/1487) | NanoClaw crashes when run inside container, kills its own container | No fix PR - **Regression from previous working state** |
| [#1531](https://github.com/qwibitai/nanoclaw/issues/1531) | Stale session ID causes infinite retry loop | Fix approach identified in issue; PR [#1546](https://github.com/qwibitai/nanoclaw/pull/1546) addresses related session recovery |

### High Severity
| Issue | Description | Fix Status |
|---|---|---|
| [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) | Invalid SSL certificate on nanoclaw.dev | **Infrastructure issue** - needs maintainer action |
| [#1485](https://github.com/qwibitai/nanoclaw/issues/1485) | Curl install scripts on host OS vulnerable to supply chain attacks | PR [#1089](https://github.com/qwibitai/nanoclaw/pull/1089) proposes containerized deployment |
| [#1500](https://github.com/qwibitai/nanoclaw/issues/1500) | Gmail/Calendar OAuth tokens exposed to prompt injection | No fix PR - **Security architecture concern** |

### Medium Severity
| Issue | Description | Fix Status |
|---|---|---|
| [#1554](https://github.com/qwibitai/nanoclaw/issues/1554) | Log file grows unbounded (600MB+) | No fix PR |
| [#1454](https://github.com/qwibitai/nanoclaw/issues/1454) | Sidecar exits when WATCH vars unset | Root cause identified in issue |
| [#1482](https://github.com/qwibitai/nanoclaw/issues/1482) | Container idle state detection conflates result emission with IPC readiness | Architectural clarification needed |

---

## 6. Feature Requests & Roadmap Signals

### High Probability for Next Version
| Feature | Issue | Signal Strength |
|---|---|---|
| **AWS Bedrock Authentication** | [#1492](https://github.com/qwibitai/nanoclaw/issues/1492) | Strong (3 👍, enterprise demand, SDK already supports it) |
| **Log Rotation/Management** | [#1554](https://github.com/qwibitai/nanoclaw/issues/1554) | Strong (operational necessity) |
| **Container-in-Container Deployment** | [#1485](https://github.com/qwibitai/nanoclaw/issues/1485), [#1089](https://github.com/qwibitai/nanoclaw/pull/1089) | Strong (security + existing PR) |
| **WhatsApp Media Processing** | [#1522](https://github.com/qwibitai/nanoclaw/issues/1522) | Medium (channel completeness) |

### Research/Integration Proposals
| Topic | Issue | Notes |
|---|---|---|
| Headroom (context compression proxy) | [#1493](https://github.com/qwibitai/nanoclaw/issues/1493) | API-level compression, transparent to agents |
| RTK (CLI output compression) | [#1494](https://github.com/qwibitai/nanoclaw/issues/1494) | 60-90% compression, <10ms overhead |
| MemStack (persistent memory) | [#1495](https://github.com/qwibitai/nanoclaw/issues/1495) | Semantic search over past work |
| Graphiti knowledge graph | [#1458](https://github.com/qwibitai/nanoclaw/issues/1458) | Replace file-based memory system |

### Community Skills Awaiting Merge
- **[#1362](https://github.com/qwibitai/nanoclaw/pull/1362)** - Quad inbox for async container→host handoff
- **[#1382](https://github.com/qwibitai/nanoclaw/pull/1382)** - Instacart grocery automation
- **[#1327](https://github.com/qwibitai/nanoclaw/pull/1327)** - Home Assistant MCP integration
- **[#1260](https://github.com/qwibitai/nanoclaw/pull/1260)** - Tailscale API integration
- **[#1369](https://github.com/qwibitai/nanoclaw/pull/1369)** - changedetection.io web monitoring

---

## 7. User Feedback Summary

### Pain Points
1. **Installation Security**: Users concerned about "curl | bash" patterns running directly on host OS ([#1485](https://github.com/qwibitai/nanoclaw/issues/1485))
2. **Container Stability**: Multiple reports of NanoClaw crashing when containerized ([#1487](https://github.com/qwibitai/nanoclaw/issues/1487))
3. **Operational Hygiene**: Log files growing to 600MB+ without rotation mechanism ([#1554](https://github.com/qwibitai/nanoclaw/issues/1554))
4. **Enterprise Auth Lock-in**: AWS Bedrock users unable to adopt NanoClaw ([#1492](https://github.com/qwibitai/nanoclaw/issues/1492))
5. **Remote Agent Permissions**: No approval flow for agents accessed via Telegram/WhatsApp ([#1537](https://github.com/qwibitai/nanoclaw/issues/1537))

### Use Cases Emerging
- **Multi-group isolation deployments** with strict security boundaries ([#1490](https://github.com/qwibitai/nanoclaw/issues/1490))
- **YouTube history search** via browser automation ([#1547](https://github.com/qwibitai/nanoclaw/issues/1547))
- **Grocery automation** via Instacart API ([#1382](https://github.com/qwibitai/nanoclaw/pull/1382))
- **Home automation** control via Home Assistant ([#1327](https://github.com/qwibitai/nanoclaw/pull/1327))

### Satisfaction Indicators
- Strong community contribution velocity (50 PR updates)
- Active research into optimizations (context compression, memory systems)
- Multiple integration proposals indicate healthy extensibility

### Dissatisfaction Indicators
- Zero issues closed today despite 17 active
- Critical SSL issue unresolved for 3+ days ([#1503](https://github.com/qwibitai/nanoclaw/issues/1503))
- Blocked PR [#700](https://github.com/qwibitai/nanoclaw/pull/700) for critical session timeout fix

---

## 8. Backlog Watch

### Urgent Maintainer Attention Needed
| Item | Days Open | Why Critical |
|---|---|---|
| [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) - SSL cert invalid | 3 | Production site security, blocks new users |
| [#700](https://github.com/qwibitai/nanoclaw/pull/700) - Session rotation fix | 27 | **Blocked** status, prevents container timeouts |
| [#1487](https://github.com/qwibitai/nanoclaw/issues/1487) - Container crash regression | 4 | Core functionality broken, worked previously |

### Long-Standing PRs Needing Review
| PR | Days Open | Status |
|---|---|---|
| [#1188](https://github.com/qwibitai/nanoclaw/pull/1188) - UnraidClaw integration | 14 | Needs review |
| [#1090](https://github.com/qwibitai/nanoclaw/pull/1090) - Mount fix for EROFS crash | 15 | Needs review |
| [#1089](https://github.com/qwibitai/nanoclaw/pull/1089) - Linux/Docker deployment | 16 | Needs review |
| [#1290](https://github.com/qwibitai/nanoclaw/pull/1290) - Pre-flight credential validation | 11 | Needs review |

### Strategic Decisions Pending
- **[#1490](https://github.com/qwibitai/nanoclaw/issues/1490)**: Architecture decision on host-level security enforcement (core changes vs. skills)
- **[#1343](https://github.com/qwibitai/nanoclaw/pull/1343)**: TOS-compliant CLI backend vs. Agent SDK (legal/licensing implications)

---

**Project Health Assessment**: ⚠️ **Moderate Concern** - High community engagement and innovation but maintainer responsiveness appears insufficient for current activity levels. Infrastructure issues (SSL) and blocked critical fixes need immediate attention. Recommend maintainers prioritize issue triage and PR reviews to prevent community frustration.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-31

## 1. Today's Overview
IronClaw demonstrates **very high development velocity** with 50 pull requests updated in the last 24 hours (52% merge/close rate) and active iteration across core agent architecture, security, and integrations. The project is in an active release cycle, with PR #1745 preparing version **v0.24.0** which introduces documented API breaking changes. The focus is clearly on hardening the platform—security sanitization, OAuth flows, and financial execution layers—while expanding integration capabilities (Aliyun, WalletConnect). Activity is dominated by core contributors (`henrypark133`, `ironclaw-ci[bot]`) with meaningful community contributions in tooling and provider support.

---

## 2. Releases

### Upcoming: v0.24.0 (PR #1745)
- **Status**: Open release PR
- **Breaking Changes**: Externally-constructible struct adds new public field (API contract change)
- **Migration Note**: Consumers using struct literals for configuration will need to add the new field
- **Link**: [PR #1745](https://github.com/nearai/ironclaw/pull/1745)

*No stable releases tagged in this 24h window.*

---

## 3. Project Progress

### Merged/Closed PRs (26 total)
| PR | Scope | Summary |
|----|-------|---------|
| [#1698](https://github.com/nearai/ironclaw/pull/1698) | Core (staging→main promotion) | Major batch promotion with high-risk scope across agent, channels, tools, DB, LLM, extensions, sandbox |
| [#1716](https://github.com/nearai/ironclaw/pull/1716) | Routines | **Routine verification state tracking** — persists verification in `routine.state`, surfaces `unverified` status in UI/API |
| [#1766](https://github.com/nearai/ironclaw/pull/1766) | Channels | Discord/Slack registry version bumps (0.2.1→0.2.2) |
| [#1765](https://github.com/nearai/ironclaw/pull/1765) | Channels | Feishu registry version bump (0.1.3→0.1.4) |
| [#1724-#1732](https://github.com/nearai/ironclaw/pulls) | CI/CD | Multiple staging promotion batches |

### Key Features Advanced
1. **Financial Execution Layer** — Issue #1712 proposes secure custody, signing, and policy enforcement for crypto actions
2. **Async Transaction Approval** — PR #1759 adds WalletConnect integration with `ToolCallbackRegistry` for async tool results
3. **Agent Review for Routines** — PR #1738 injects routine results into agentic loop for LLM processing
4. **Security Hardening** — PR #1719 adds API response sanitization; PR #1598 blocks Telegram bot tokens in chat
5. **MCP OAuth Refresh** — PR #1767 fixes hosted MCP OAuth token refresh flow

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|------|------------|----------|
| [#1673 Feishu/Lark Stuck in "Awaiting Pairing"](https://github.com/nearai/ironclaw/issues/1673) | 👍 2, 2 comments | **Critical onboarding blocker** for Feishu users — pairing code never appears despite correct credentials. Indicates integration gap in channel setup flow. |
| [#1712 Secure Financial Execution Layer](https://github.com/nearai/ironclaw/issues/1712) | High priority labels, 1 comment | **Strategic architecture discussion** for crypto/financial actions — custody, signing, cross-app actions. Signals IronClaw's direction toward DeFi/enterprise financial automation. |
| [#1750 Workplace Simulation Benchmark](https://github.com/nearai/ironclaw/issues/1750) | Closed (implemented) | **Testing infrastructure** for executive AI assistance (CEO, CMO, CFO roles) — HTTP interceptor injection for realistic Slack/email simulation. |

---

## 5. Bugs & Stability

### Critical/High Severity
| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| [#1510 Gemini function call missing `thought_signature`](https://github.com/nearai/ironclaw/issues/1510) | **High** — LLM provider failure | OPEN (10 days) | None visible |
| [#1672 Ollama + Qwen3.5:9b HttpError](https://github.com/nearai/ironclaw/issues/1672) | **High** — Local deployment blocker on Windows | OPEN (5 days) | None visible |
| [#1500 Google auth fails on second tool](https://github.com/nearai/ironclaw/issues/1500) | **Medium-High** — Multi-tool auth regression | CLOSED | Fixed in recent promotion |

### Medium Severity
| Issue | Description | Status |
|-------|-------------|--------|
| [#1754 Cannot use model in private network](https://github.com/nearai/ironclaw/issues/1753) | HTTP-only endpoints rejected for non-localhost | OPEN (new) |
| [#1404 Slack ignores thread replies](https://github.com/nearai/ironclaw/issues/1404) | Requires @mention on every thread message | CLOSED |

### Stability Note
Multiple **staging promotion PRs** (#1698, #1724-#1732) indicate active CI/CD pipeline with batched releases — suggests healthy QA process but also frequent merge activity requiring promotion tracking.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood | Rationale |
|---------|--------|------------|-----------|
| **Financial Execution Layer** | Issue #1712 | **High** | Already has initial read-only NEAR intents (PR #1622); natural progression |
| **Skill Repair Missions** | Issue #1760 | **High** | Follow-up to v2 architecture PR #1557; self-improvement loop extension |
| **WalletConnect Integration** | PR #1759 | **Very High** | Open PR with active development |
| **Aliyun BaiLian Support** | PR #1446 | **Medium** | Open PR from new contributor; awaiting review |
| **Email/Password Signup** | Issue #1494 | **Medium** | User-requested auth alternative; no maintainer response yet |
| **HTTP for Private Networks** | Issue #1754 | **Medium** | Security vs. usability tradeoff; may require config flag |

---

## 7. User Feedback Summary

### Pain Points
1. **Channel Configuration Friction** — Feishu/Lark users stuck at pairing stage (#1673); unclear UX feedback
2. **Local/Private Deployment Restrictions** — HTTP-only endpoints rejected for non-localhost (#1754); enterprise proxy scenarios blocked
3. **Provider Compatibility Gaps** — Gemini function calling (#1510) and Ollama/Qwen local models (#1672) failing
4. **Multi-Tool Auth Fatigue** — Google auth requiring manual link regeneration for each tool (#1500)

### Positive Signals
- Active community PRs for **Aliyun provider** (#1446) and **tool discovery summaries** (#1758)
- Engagement with benchmark development (#1750) shows enterprise interest
- Quick resolution of Slack thread handling (#1404) and Google auth (#1500)

---

## 8. Backlog Watch

| Item | Age | Concern | Recommended Action |
|------|-----|---------|-------------------|
| [#1510 Gemini function call bug](https://github.com/nearai/ironclaw/issues/1510) | 10 days | No maintainer response on LLM provider failure | **Needs triage** — assign to LLM scope owner |
| [#1494 Email/password signup](https://github.com/nearai/ironclaw/issues/1494) | 11 days | Zero comments on auth feature request | **Needs response** — clarify if on roadmap |
| [#1446 Aliyun Coding Plan PR](https://github.com/nearai/ironclaw/pull/1446) | 11 days | Large-scoped contributor PR with no merge activity | **Needs review** — may be blocked on scope/quality concerns |
| [#1599 Extension state to LLM](https://github.com/nearai/ironclaw/pull/1599) | 8 days | XL-sized core PR still open | **Monitor** — complex change requiring thorough review |

---

**Digest compiled from 10 issues and 50 PRs updated 2026-03-30. Project health: 🟢 Active development, strong CI/CD, addressing security/financial features. Watch: Provider compatibility bugs and contributor PR backlog.**

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest (2026-03-31)

## 1. Today's Overview
LobsterAI is exhibiting **extremely high development velocity**, characterized by a massive volume of 50 pull requests updated in the last 24 hours (41 open) and 27 active issues. The project released version **2026.3.30**, focusing on enhancing scheduled tasks (hourly/weekly granularity) and fixing critical model provider compatibility issues. However, the high issue count—particularly regarding security vulnerabilities, data persistence, and stability—suggests the project is in a "move fast and break things" phase, urgently requiring stabilization. The community is actively contributing architectural improvements and bug fixes, indicating a healthy but stressed open-source ecosystem.

## 2. Releases
**LobsterAI 2026.3.30** (Released 2026-03-30)
*   **New Features**:
    *   **Enhanced Scheduled Tasks**: Added hourly-level selection and specific day-of-week execution options.
    *   **Model Selection**: Added the ability to select specific models for scheduled tasks.
    *   **Skill Management**: Implemented logic for one-click skill updates.
*   **Bug Fixes**:
    *   Fixed compatibility bugs with **OpenAI** and **Gemini** model providers.
*   **Impact**: This release provides finer control over automation but appears to coincide with new reports of configuration resets.

## 3. Project Progress
Significant progress was made in architectural refactoring and feature expansion, though most changes are currently in the review (Open PR) stage.
*   **UI & UX Enhancements**: A major refactor of `CoworkSessionDetail` (PR [#1069](https://github.com/netease-youdao/LobsterAI/pull/1069)) split a 2100+ line file to improve maintainability and rendering performance.
*   **MCP Ecosystem**: Added per-session MCP server toggles (PR [#1070](https://github.com/netease-youdao/LobsterAI/pull/1070)) and sticky UI elements for better navigation (PR [#1073](https://github.com/netease-youdao/LobsterAI/pull/1073)).
*   **Model Support**: Integrated **GitHub Copilot** as a new provider with OAuth support (PR [#707](https://github.com/netease-youdao/LobsterAI/pull/707)).
*   **Quality of Life**: Added a "Current Process" panel to visualize tool execution and diffs (PR [#1079](https://github.com/netease-youdao/LobsterAI/pull/1079)) and improved error boundaries to prevent white screens (PR [#1074](https://github.com/netease-youdao/LobsterAI/pull/1074)).

## 4. Community Hot Topics
The community is deeply engaged in security and architectural integrity.
*   **Security Vulnerabilities (High Impact)**:
    *   Issue [#1041](https://github.com/netease-youdao/LobsterAI/issues/1041) and [#1031](https://github.com/netease-youdao/LobsterAI/issues/1031) highlighted SSRF risks and unvalidated protocol handling (`shell:openExternal`), raising concerns about the safety of the IPC layer.
    *   *Analysis*: Users are performing deep code audits, indicating a sophisticated user base concerned with enterprise-grade security.
*   **Architectural Debt**:
    *   Issue [#1024](https://github.com/netease-youdao/LobsterAI/issues/1024) (Refactoring `main.ts`) sparked discussion on the maintainability of the Electron main process.
    *   *Analysis*: The monolithic main process is becoming a bottleneck for contributors trying to add features or fix bugs.
*   **Provider Stability**:
    *   Issues [#1080](https://github.com/netease-youdao/LobsterAI/issues/1080) (Qwen "no body") and [#1023](https://github.com/netease-youdao/LobsterAI/issues/1023) (Xunfei token limits) reflect ongoing struggles with third-party LLM provider compatibility.

## 5. Bugs & Stability
Several high-severity bugs were reported today, many with corresponding fix PRs.
*   **Critical - Data Loss/Persistence**:
    *   **Config Reset on Restart**: Users report custom configs (e.g., `openclaw.json`) are overwritten on restart (Issue [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006)).
    *   **SQLite Integrity**: Foreign key cascade failures leading to orphaned data (Issue [#1071](https://github.com/netease-youdao/LobsterAI/issues/1071)). *Fix available in PR [#1072](https://github.com/netease-youdao/LobsterAI/pull/1072).*
    *   **Migration Data Loss**: Scheduled task history migration failure can cause silent data loss (Issue [#1076](https://github.com/netease-youdao/LobsterAI/pull/1076)).
*   **High - Crashing/Blocking**:
    *   **Login Failure**: Corporate login (NetEase Portal) fails to pass auth token to the client (Issue [#1016](https://github.com/netease-youdao/LobsterAI/issues/1016)).
    *   **Auth Race Condition**: Concurrent 401s causing forced logout (Issue [#1048](https://github.com/netease-youdao/LobsterAI/issues/1048)).
*   **Medium - UI/Functional**:
    *   Agent icon selection only allows text input (Issue [#1022](https://github.com/netease-youdao/LobsterAI/issues/1022)).
    *   Heartbeat conversations visible to users (Issue [#1066](https://github.com/netease-youdao/LobsterAI/issues/1066)). *Fix available in PR [#1067](https://github.com/netease-youdao/LobsterAI/pull/1067).*

## 6. Feature Requests & Roadmap Signals
*   **Customizable Engine Parameters**: Users want to override hardcoded limits, specifically requesting the ability to use Qwen's 1M context window instead of the app's 200K limit (Issue [#1046](https://github.com/netease-youdao/LobsterAI/issues/1046)).
*   **Better Configuration Persistence**: The aggressive config reset logic needs an official solution for persisting user customizations (Issue [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006)).
*   **Enhanced Scheduled Tasks**: The ability to bind scheduled tasks to existing cowork sessions (PR [#1065](https://github.com/netease-youdao/LobsterAI/pull/1065)) is a strong signal for more persistent automation workflows.
*   **Prediction**: The next version will likely focus on security patches (SSRF) and stabilizing the SQLite storage layer based on the volume of related PRs.

## 7. User Feedback Summary
Users appreciate the rapid feature iteration but are frustrated by **environmental stability**.
*   **Pain Points**:
    *   **Build Failures**: External developers face 5-minute freezes due to unreachable internal NetEase registries (Issue [#1025](https://github.com/netease-youdao/LobsterAI/issues/1025), [#1015](https://github.com/netease-youdao/LobsterAI/issues/1015)).
    *   **Provider Connectivity**: "Test connection" succeeds, but actual usage fails (401 errors or "no body") is a recurring theme (Issues [#248](https://github.com/netease-youdao/LobsterAI/issues/248), [#1080](https://github.com/netease-youdao/LobsterAI/issues/1080)).
    *   **UI Polish**: Modal buttons becoming unclickable due to layout shifts (Issue [#1053](https://github.com/netease-youdao/LobsterAI/issues/1053)).
*   **Satisfaction**: High interest in new features (Copilot support, MCP), but trust is eroding by basic bugs like configuration resets and white screen crashes.

## 8. Backlog Watch
*   **Issue #205 (Installation Failure)**: An installation bug from early March was closed today, but the user expressed frustration ("such a problem can drag on for so long"). This suggests a need for better installer QA.
*   **Issue #1016 (Login Loop)**: A critical auth bug preventing corporate users from logging in needs immediate verification.
*   **PR #707 (Copilot Integration)**: This is a large feature PR that has been open for a week; maintaining momentum is key to merging this high-value integration.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest: 2026-03-31

## 1. Today's Overview
TinyClaw shows focused, low-volume maintenance activity as of March 31, 2026. With zero active issues and two recently closed Pull Requests, the repository is currently in a stable state with no outstanding community bug reports. The activity is centered entirely around internal refactoring and UI improvements rather than feature expansion. This suggests the core development team is focusing on code quality and user experience optimization for the "tinyoffice" environment.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Project Progress
Development activity focused on stabilizing the UI and improving the structural organization of the office suite:

*   **UI Refactoring & Navigation ([PR #269](https://github.com/TinyAGI/tinyagi/pull/269))**: A significant refactor was merged that simplifies the `tinyoffice` app shell to a sidebar-only layout. This update reorganizes routes for better consistency, improves the visual design of agent and team cards using ReactFlow tree visualizations, and enhances the pixel office scene with agent name tags.
*   **Bug Fix for Teams Interface ([PR #270](https://github.com/TinyAGI/tinyagi/pull/270))**: A maintenance fix was merged addressing the Edge type in the Teams feature. The invalid `pathOptions` prop was removed, ensuring type safety and likely resolving console warnings or potential rendering errors in the graph view.

## 4. Community Hot Topics
There were no active discussions in the Issues section or on Pull Requests today. With 0 comments and 0 reactions across the board, community engagement appears quiet, or development is currently driven solely by core maintainers without external contribution requests.

## 5. Bugs & Stability
*   **Type Error in Teams Edge Component**: A specific bug regarding an invalid `pathOptions` prop was identified and fixed in [PR #270](https://github.com/TinyAGI/tinyagi/pull/270). While likely minor (Severity: Low), this fix prevents potential prop-type warnings or crashes in the team graph visualization.

## 6. Feature Requests & Roadmap Signals
While no explicit feature requests were opened today, the merged code provides signals on the product direction:
*   **Visual Agent Topology**: The integration of "ReactFlow tree visualizations" in [PR #269](https://github.com/TinyAGI/tinyagi/pull/269) signals a move toward more visual, node-based management of AI agents and teams.
*   **UI Simplification**: The move to a "sidebar-only layout" indicates a roadmap focus on minimizing screen clutter and maximizing workspace area for agent tasks.

## 7. User Feedback Summary
No direct user feedback, bug reports, or feature requests were submitted via Issues in the last 24 hours. Consequently, no specific pain points or satisfaction metrics can be derived from today's data stream.

## 8. Backlog Watch
The backlog is currently clear of immediate blockers based on today's data dump (0 open issues). However, the continuous refinement of the "tinyoffice" UI suggests that previous UX complexity might have been a latent issue that maintainers are proactively addressing.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-03-31

## 1. Today's Overview
The Moltis project demonstrates **high development velocity and active maintenance**, with maintainers closing 5 issues and merging 5 PRs in the last 24 hours. Activity centers on expanding platform integrations (Matrix, OpenAI alternatives) and fixing several Web UI bugs affecting usability over LAN and proxy setups. The single open issue and two open PRs suggest the team is actively iterating on new channel integrations and provider options. Overall, the project appears healthy with responsive bug triaging and a clear focus on connectivity and infrastructure reliability.

---

## 2. Releases
No new releases were published today.

---

## 3. Project Progress
Merged/closed PRs today (5 total):

| PR | Type | Summary |
|----|------|---------|
| [#522](https://github.com/moltis-org/moltis/pull/522) | fix | **Web UI fix for plain HTTP** — resolved `crypto.randomUUID()` failure over HTTP/LAN by falling back to `crypto.getRandomValues()`-based UUID v4. Fixes [#520](https://github.com/moltis-org/moltis/issues/520). |
| [#487](https://github.com/moltis-org/moltis/pull/487) | feat | **Alternative OpenAI provider** — added `openai-oxide` v0.10.1 behind a feature flag, replacing 5300+ lines with ~888 lines while supporting full tool calling, vision, reasoning effort, and WebSocket streaming. |
| [#519](https://github.com/moltis-org/moltis/pull/519) | fix | **Proxy node join URL fix** — corrected node join URLs showing internal Docker ports when behind reverse proxy; now uses `location.port`. Fixes [#426](https://github.com/moltis-org/moltis/issues/426). |
| [#503](https://github.com/moltis-org/moltis/pull/503) | feat | **Session recall, SSH runtime UX, skill portability** — added cross-session recall with automatic checkpoints, hardened project context ingestion (Cursor compatibility), and portable skill bundle export/import. |
| [#518](https://github.com/moltis-org/moltis/pull/518) | fix | **Sealed vault behavior refinement** — narrowed the sealed-vault HTTP guard to keep unencrypted bootstrap/session endpoints accessible, removed misleading UI placeholder. Fixes [#428](https://github.com/moltis-org/moltis/issues/428). |

**What advanced:** Web client robustness (HTTP/LAN access), provider flexibility (OpenAI alternatives), and session management features (recall, checkpoints, skill portability).

---

## 4. Community Hot Topics
| Item | Engagement | Analysis |
|------|------------|----------|
| [#313 — Tool search](https://github.com/moltis-org/moltis/issues/313) | 7 comments, 2 👍 | Closed feature request for tool search capabilities. The discussion likely shaped how tools are indexed and retrieved, potentially tied to the broader provider/tooling refactoring in recent PRs. |
| [#185 — Add Z.AI Coding Plan](https://github.com/moltis-org/moltis/issues/185) | 5 comments, 5 👍 | Highly upvoted request for a "Z.AI Coding Plan" feature. Closure suggests either implementation planning or deferral; signals community interest in structured AI-assisted coding workflows. |
| [#500 — Matrix channel integration](https://github.com/moltis-org/moltis/pull/500) | Open, active | Cherry-picked PR adding Matrix support (DMs, rooms, OTP gating, reactions, typing indicators). Strong signal that multi-platform chat is a roadmap priority. |
| [#521 — openai-oxide provider](https://github.com/moltis-org/moltis/pull/521) | Open | Iteration on alternative OpenAI provider, showing continued investment in provider modularity. |

**Underlying needs:** Users want flexible LLM backends and multi-platform chat integrations (Matrix, Discord naming per [#523](https://github.com/moltis-org/moltis/issues/523)).

---

## 5. Bugs & Stability
Bugs reported/closed today, ranked by severity:

| Issue | Severity | Status | Fix PR | Notes |
|-------|----------|--------|--------|-------|
| [#520 — Cannot create session over HTTP](https://github.com/moltis-org/moltis/issues/520) | **High** | Closed | [#522](https://github.com/moltis-org/moltis/pull/522) | Blocked LAN users from creating sessions; fixed with UUID fallback. |
| [#426 — Wrong address in nodes behind proxy](https://github.com/moltis-org/moltis/issues/426) | **Medium** | Closed | [#519](https://github.com/moltis-org/moltis/pull/519) | Internal Docker ports exposed in join URLs; fixed by using browser port. |
| [#428 — Chat history accessible despite sealed vault](https://github.com/moltis-org/moltis/issues/428) | **Medium (security UX)** | Closed | [#518](https://github.com/moltis-org/moltis/pull/518) | UI suggested sealed vault hid history; fixed HTTP guard and UI behavior. |

**Stability assessment:** All reported bugs were triaged and fixed same-day, indicating strong maintainer responsiveness. No open crash/regression reports remain.

---

## 6. Feature Requests & Roadmap Signals
| Issue/PR | Signal | Next Version Likelihood |
|----------|--------|------------------------|
| [#523 — Rename Channel-based (Discord) sessions](https://github.com/moltis-org/moltis/issues/523) | UX improvement for multi-platform chat naming | **High** — small scope, aligns with Matrix/Discord work |
| [#500 — Matrix integration](https://github.com/moltis-org/moltis/pull/500) | Major new channel type | **High** — already in review |
| [#521 — openai-oxide provider](https://github.com/moltis-org/moltis/pull/521) | Alternative OpenAI backend | **Medium-High** — follow-up to merged #487 |
| [#185 — Z.AI Coding Plan](https://github.com/moltis-org/moltis/issues/185) | Structured coding workflows | **Medium** — requires design; community demand evident (5 👍) |
| [#313 — Tool search](https://github.com/moltis-org/moltis/issues/313) | Tool discovery/indexing | **Medium** — closed but may inform future tooling improvements |

**Prediction:** Next release likely includes Matrix channel support, refined channel naming, and openai-oxide as a provider option.

---

## 7. User Feedback Summary
**Pain points identified:**
- **LAN/HTTP access broken** for session creation ([#520](https://github.com/moltis-org/moltis/issues/520)) — users self-hosting without HTTPS were blocked.
- **Proxy misconfiguration** exposing internal ports ([#426](https://github.com/moltis-org/moltis/issues/426)) — common for Docker/reverse-proxy deployments.
- **Confusing sealed vault UX** ([#428](https://github.com/moltis-org/moltis/issues/428)) — security messaging didn't match actual behavior.

**Use cases emerging:**
- Multi-platform chat orchestration (Matrix, Discord) for AI assistants.
- Alternative OpenAI-compatible providers for cost/performance flexibility.
- Session recall and skill portability for complex workflows.

**Satisfaction indicators:** Rapid bug fixes and merged feature PRs suggest maintainers are attuned to user needs. No negative sentiment in recent issue comments.

---

## 8. Backlog Watch
| Item | Age | Status | Concern |
|------|-----|--------|---------|
| [#185 — Z.AI Coding Plan](https://github.com/moltis-org/moltis/issues/185) | ~6 weeks | Closed | Highly upvoted (5 👍) but unclear if implemented; clarification on resolution would help users understand roadmap. |
| [#313 — Tool search](https://github.com/moltis-org/moltis/issues/313) | ~4 weeks | Closed | No linked PR; was this addressed implicitly or deferred? |
| [#500 — Matrix integration](https://github.com/moltis-org/moltis/pull/500) | 3 days | Open | Large feature PR; may need reviewer attention to avoid stalling. |
| [#521 — openai-oxide provider](https://github.com/moltis-org/moltis/pull/521) | 1 day | Open | Follow-up to #487; ensure consistency in provider architecture decisions. |

**Recommendation:** Maintainers should add closure comments to closed feature issues (#185, #313) linking to implementing PRs or explaining deferral, improving roadmap transparency.

---

*Digest generated from GitHub activity data for 2026-03-31. Links: [Moltis Repository](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest (2026-03-31)

## 1. Today's Overview
The CoPaw project has reached a significant **milestone** with the official release of **v1.0.0**. This transition from beta to stable is marked by high maintenance activity, evidenced by **4 releases** in a single day and a high volume of merged PRs (43 total), indicating a strong focus on stabilization and documentation. The community engagement is robust, with active discussions around multi-agent workflows, memory management, and UI/UX improvements. Overall, the project appears healthy and is aggressively iterating on its multi-agent architecture.

## 2. Releases
**Major Release: v1.0.0**
*   **Status:** Stable release following a rapid series of beta iterations (v1.0.0-beta.1 to beta.3).
*   **Key Highlights:**
    *   **Background Task Support:** Implemented background execution for inter-agent communication. Includes task tracking, status polling, and cancellation via CLI flag `--background` ([#2345](https://github.com/agentscope-ai/CoPaw/pull/2345)).
    *   **Agent Enable/Disable Toggle:** Added functionality to toggle agent status (likely for managing multi-agent swarms).
*   **Migration Note:** Users on `0.2.0.post1` reported issues seeing the v1.0.0-beta updates ([#2537](https://github.com/agentscope-ai/CoPaw/issues/2537)). It is recommended to check installation channels or force upgrade to ensure the move to the stable v1.0.0 branch.

## 3. Project Progress
The team merged/closed **43 PRs** today, focusing heavily on polishing the v1.0.0 release and fixing integration issues.
*   **Core Architecture:**
    *   Enhanced memory retrieval by prepending summary memory to chat history ([#2574](https://github.com/agentscope-ai/CoPaw/pull/2574)).
    *   Fixed a critical `recent_max_bytes` configuration path issue in the React Agent ([#2526](https://github.com/agentscope-ai/CoPaw/pull/2526)).
*   **Channel Integrations:**
    *   **DingTalk:** Fixed cron task message delivery by saving `conversation_id` ([#2566](https://github.com/agentscope-ai/CoPaw/pull/2566)).
    *   **WeCom (Enterprise WeChat):** Implemented automatic image compression to handle API size limits ([#2568](https://github.com/agentscope-ai/CoPaw/pull/2568)).
    *   **WeChat:** Fixed file upload encoding issues ([#2576](https://github.com/agentscope-ai/CoPaw/pull/2576)).
*   **Documentation & Infra:** Multiple updates to the project website and documentation links ([#2588](https://github.com/agentscope-ai/CoPaw/pull/2588), [#2575](https://github.com/agentscope-ai/CoPaw/pull/2575)).

## 4. Community Hot Topics
1.  **Open Tasks & Contribution Drive:** The "Help Wanted" board ([#2291](https://github.com/agentscope-ai/CoPaw/issues/2291)) remains the most active hub (38 comments), signaling a structured approach to community contributions for S1 goals.
2.  **Context & Memory Management:** A highly upvoted discussion ([#2482](https://github.com/agentscope-ai/CoPaw/issues/2482) / [#2289](https://github.com/agentscope-ai/CoPaw/issues/2289)) highlights "pain points" for power users. The main requests are:
    *   Physical deletion of specific conversations to clear context "pollution".
    *   AI-assisted context compression (vs. simple truncation).
    *   Solutions for the growing `MEMORY.md` file affecting retrieval efficiency.
3.  **Model Provider Support:** Users are actively requesting/discussing support for specific Chinese providers like SCNet ([#2312](https://github.com/agentscope-ai/CoPaw/issues/2312)) and Xiaomi Mimo via OpenRouter ([#2405](https://github.com/agentscope-ai/CoPaw/issues/2405)).

## 5. Bugs & Stability
*   **Critical: Multi-Agent Approval Flow:** Users report that `/approve` commands fail in inter-agent communication scenarios ([#2459](https://github.com/agentscope-ai/CoPaw/issues/2459)), blocking execution in complex workflows. *No fix PR noted in today's list.*
*   **Critical: MCP Server Initialization:** Failure to initialize local stdio MCP servers prevents tool loading ([#2591](https://github.com/agentscope-ai/CoPaw/issues/2591)).
*   **High: Agent Instability:** Reports of agents automatically interrupting during large tasks (e.g., reading 1500 files) ([#2377](https://github.com/agentscope-ai/CoPaw/issues/2377)).
*   **Medium: Configuration Regressions:**
    *   `AgentsRunningConfig` missing `recent_max_bytes` attribute ([#2527](https://github.com/agentscope-ai/CoPaw/issues/2527)) - *Likely addressed by PR [#2526](https://github.com/agentscope-ai/CoPaw/pull/2526).*
    *   Gemini model failures after image upload ([#2406](https://github.com/agentscope-ai/CoPaw/issues/2406)).

## 6. Feature Requests & Roadmap Signals
*   **File Operation Rollback:** A contributor has claimed "Task 6" to add file operation rollback/recovery features ([#2590](https://github.com/agentscope-ai/CoPaw/issues/2590)). This is a strong candidate for `v1.1`.
*   **Magic Commands:** Request for `/break` commands to forcibly stop agents in channels like Feishu/DingTalk ([#2456](https://github.com/agentscope-ai/CoPaw/issues/2456)).
*   **Full-Duplex UI:** Request to support message insertion during task execution (stopping the backend, not just the UI) ([#2548](https://github.com/agentscope-ai/CoPaw/issues/2548)).
*   **Context Strategy:** Proposal for pluggable context compaction strategies for long-running AIOps workflows ([#2521](https://github.com/agentscope-ai/CoPaw/issues/2521)).

## 7. User Feedback Summary
Users are generally enthusiastic about the v1.0.0 release but express frustration with **context window management**.
*   **Pain Point:** "One bad conversation ruins the whole context" – users desire granular control over history deletion rather than starting fresh.
*   **Pain Point:** **Updatability** – users find upgrading difficult and request a "one-click update" button ([#2301](https://github.com/agentscope-ai/CoPaw/issues/2301)).
*   **Use Case:** CoPaw is being used heavily as a coding assistant and for automated office tasks (DingTalk/Feishu integration), with specific needs for handling large file batches and long-running scheduled tasks.

## 8. Backlog Watch
*   **[#2384](https://github.com/agentscope-ai/CoPaw/issues/2384) [Question]: CLI for Bot Skill Installation**
    *   *Status:* Open
    *   *Reason:* Bots often install skills in the wrong directory. A CLI encapsulation is requested. This is a "Good First Issue" candidate that hasn't been picked up yet.
*   **[#2323](https://github.com/agentscope-ai/CoPaw/issues/2323) [Feature]: Tag-based Indexing for Skills**
    *   *Status:* Open
    *   *Reason:* Reduces reliance on LLM semantic understanding for skill selection. High value for multi-agent precision.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

Here is the project digest for ZeptoClaw on 2026-03-31.

### 1. Today's Overview
ZeptoClaw is currently experiencing low-volume but strategically significant activity, focusing on architectural refinement rather than feature expansion. No new code was merged today, but the community interaction suggests a maturing codebase where users are identifying gaps between static definitions and dynamic runtime behavior. The single active discussion highlights a critical visibility issue regarding the toolchain system. Overall, the project appears stable but requires structural updates to support its growing extensibility.

### 2. Releases
No new releases were recorded for this period.

### 3. Project Progress
No pull requests were merged or closed in the last 24 hours. There is no visible progress on new features or bug fixes via code contributions today.

### 4. Community Hot Topics
The sole focus of community activity centers on the disconnect between the CLI interface and the agent's runtime capabilities.

*   **[#465 [OPEN] rfc(cli): tools list should use runtime registry instead of hardcoded array](https://github.com/qhkm/zeptoclaw/issues/465)**
    *   **Analysis:** This issue addresses a significant usability and architectural flaw. The author points out that the command `zeptoclaw tools list` relies on a hardcoded static array, rendering it blind to any dynamic capabilities like plugins, MCP (Model Context Protocol) tools, or composed tools.
    *   **Underlying Need:** As ZeptoClaw moves toward a more plugin-centric architecture, users need a CLI that accurately reflects the *actual* state of the agent. The current limitation hinders debugging and environment verification for advanced users utilizing external tool integrations.

### 5. Bugs & Stability
No crashes or critical runtime bugs were reported today.

*   **Low Severity:** Issue [#465](https://github.com/qhkm/zeptoclaw/issues/465) identifies a "functional bug" regarding inaccurate CLI output. While not causing a crash, it provides incorrect information to the user, which classifies as a UX defect.

### 6. Feature Requests & Roadmap Signals
*   **Runtime Registry Integration (CLI):** Issue [#465](https://github.com/qhkm/zeptoclaw/issues/465) acts as both a bug report and a feature request (RFC). It signals a strong need for the CLI to interface with the `ToolRegistry` singleton rather than static structs.
*   **Prediction:** This refactoring is likely a prerequisite for the next major version or minor point release, especially if MCP and external plugin support is a key value proposition for ZeptoClaw.

### 7. User Feedback Summary
*   **Pain Points:** Advanced users are frustrated by the "opaque" nature of the toolchain. They expect the CLI to serve as a source of truth for what the agent can do, but currently, it only displays default capabilities.
*   **Use Cases:** Users are actively utilizing custom tools, plugins, and MCP integrations. The fact that these are "invisible" suggests the user base is pushing the tool beyond its out-of-the-box functionality.

### 8. Backlog Watch
*   **Issue [#465](https://github.com/qhkm/zeptoclaw/issues/465):** Although created recently (March 29), this issue requires maintainer attention. It proposes a structural change to `src/cli/tools.rs`. If the project maintainers are planning a release soon, this discrepancy between static display and dynamic runtime should be resolved to prevent user confusion.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest
**Date:** 2026-03-31
**Analyst:** AI Open Source Analyst

## 1. Today's Overview
The EasyClaw project (repository: `gaoyangz77/easyclaw`) is currently exhibiting low development activity, with zero new Pull Requests or code releases recorded in the last 24 hours. However, the maintainers remain active in triage and support, evidenced by the closure of two user-reported issues within the last day. The project appears to be in a maintenance phase, focusing on stability and compatibility for existing users rather than active feature expansion. The lack of open issues suggests a stable but quiet codebase, though the nature of the closed bugs points to specific environmental and configuration edge cases.

## 2. Releases
No new releases were recorded for this date. The last identified version in use by the community is **V1.7.7** (referenced in Issue #28).

## 3. Project Progress
No code-level progress was made today as there were no merged or closed Pull Requests. Activity was limited to issue resolution.
*   **Issue Triage:** Two existing issues were closed, indicating that the maintainers reviewed and likely resolved or identified workarounds for the reported problems.

## 4. Community Hot Topics
Due to the low volume of discussion (0 comments on recent items), distinct "hot topics" are absent. However, the closed issues highlight two specific areas of user concern:
*   **Software Conflicts:** Users attempting to run EasyClaw (specifically the `rivonclaw` component) alongside other network tools.
    *   Link: [Issue #30](https://github.com/gaoyangz77/rivonclaw/issues/30)
*   **Model Compatibility:** Users switching between different LLM providers (Alibaba Cloud "Bailian"套餐) within the tool.
    *   Link: [Issue #28](https://github.com/gaoyangz77/rivonclaw/issues/28)

## 5. Bugs & Stability
Two distinct bugs were reported and closed recently. While no fix PRs were linked, the closure suggests a resolution (potentially configuration-based or documented).
*   **High Severity - Network Conflict (Windows):**
    *   **Issue:** [Issue #30](https://github.com/gaoyangz77/rivonclaw/issues/30)
    *   **Details:** Running `rivonclaw` concurrently with Tencent's QClaw causes a complete network disconnect for both applications on Windows. This suggests a possible port conflict or driver-level collision in how the agents manage local networking.
    *   **Status:** Closed.
*   **Medium Severity - API Parameter Error:**
    *   **Issue:** [Issue #28](https://github.com/gaoyangz77/rivonclaw/issues/28)
    *   **Details:** Switching the backend model from `qwen3.5` to `KIMI2.5` or `GLM5` triggers an `HTTP 400 InvalidParameter` error regarding input length range. This indicates EasyClaw may not be correctly normalizing context window sizes when switching between models with different token limits.
    *   **Status:** Closed.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were made in the last 24 hours.
*   **Implicit Signal:** The errors in Issue #28 suggest a need for **dynamic context window management**. A robust roadmap item would be the automatic detection of model limits to prevent `InvalidParameter` errors during model switching.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by interoperability issues; specifically, not being able to run multiple AI agent tools (EasyClaw + QClaw) simultaneously. Additionally, users expect seamless model switching within the "Bailian" package but are encountering token limit errors.
*   **Use Cases:** The project is being used as a desktop assistant (Windows 11) to interface with various LLMs (Qwen, Kimi, GLM) via unified API access.

## 8. Backlog Watch
There are no long-unanswered items based on the provided data set (only recent items were listed). The backlog appears clear, but the maintainers should monitor for recurring patterns in model switching errors (Issue #28) to see if a code fix is required rather than just user guidance.

</details>