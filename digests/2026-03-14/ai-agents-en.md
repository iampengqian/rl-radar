# OpenClaw Ecosystem Digest 2026-03-14

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-03-13 22:04 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
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

# OpenClaw Project Digest: 2026-03-14

## 1. Today's Overview
OpenClaw is experiencing **extremely high volatility** following the release of version `2026.3.12`. Activity has surged, with **500 issues and 500 PRs** updated in the last 24 hours alone. While the new release introduced a significant UI overhaul ("Dashboard-v2") and support for GPT-5.4, it appears to have introduced **critical regressions** regarding memory management (OOM crashes) and authentication flows. The maintainers are actively merging fixes, but the ratio of open issues (436 open vs. 64 closed) suggests the release has introduced more problems than it solved in the immediate term.

## 2. Releases
**Version:** `v2026.3.12` (OpenClaw 2026.3.12)
- **Major Feature (Control UI/Dashboard-v2):** A complete refresh of the gateway dashboard featuring a modular overview, chat, config, agent, and session views. Includes a command palette, mobile bottom tabs, and advanced chat tools (slash commands, search, export, pinned messages). (Ref: #41503)
- **Model Support:** Added integration for **OpenAI GPT-5.4**.
- **Migration Note:** Users upgrading to this version have reported critical memory leaks and UI connectivity issues (see Section 5). It is currently flagged as unstable by a significant portion of the user base for low-RAM environments (<4GB).

## 3. Project Progress
Despite the influx of bugs, the team merged **138 PRs**, indicating rapid iteration to stabilize the platform.
- **Memory & Performance:** Merged PRs aimed at deduplicating plugin-sdk chunks to reduce memory footprint, though the OOM issues on the latest release suggest further patching is needed.
- **Browser & Automation:** Improvements to browser `act` batch flows and normalization of dispatch for better selector support.
- **Platforms:** Fixes for macOS LaunchAgent restarts and Google Workspace CLI integration in Docker images.
- **Messaging:** Fixes for Feishu thread context retrieval and Slack interactive reply documentation.

## 4. Community Hot Topics
The most active discussions revolve around the stability of the new release and long-standing integration gaps:

1.  **[OPEN] Internationalization (i18n) Support (#3460):** With **101 comments**, users are heavily requesting multi-language support. Maintainers cite bandwidth constraints, but community interest remains high.
2.  **[OPEN] Linux/Windows Clawdbot Apps (#75):** A highly requested feature (**60 👍**) to bring parity to the desktop experience beyond macOS.
3.  **[OPEN] OpenCode Go Subscription Support (#27009):** Users want native support for the $10 "OpenCode Go" plan to access Kimi K2.5 and GLM-5 models (25 👍).
4.  **[OPEN] xAI / Grok Support (#6872):** Continued debate over better integration for xAI tools (web search, code exec) and fixing "handicapped" performance in Grok 4.1.

## 5. Bugs & Stability
The `2026.3.12` release is currently plagued by **critical memory regressions** and UI authentication errors. The bug tracker is dominated by stability issues:

1.  **CRITICAL: Memory Leak / OOM Crashes (#45064, #45440, #41778):**
    -   Users are experiencing heap out-of-memory crashes on basic commands (`gateway status`, `doctor`) and on hardware with 4GB RAM or less (e.g., Raspberry Pi 4).
    -   Regression appears linked to the new dashboard or plugin loading in `2026.3.12`.
2.  **CRITICAL: WhatsApp Channel Desync (#45171, #45474, #30177):**
    -   Outbound messages fail with "No active WhatsApp Web listener" despite the status showing as connected. This breaks the channel for many production users.
3.  **HIGH: Control UI Auth Regressions (#39611, #44869, #44967):**
    -   Navigating the new Control UI often triggers a "device identity required" error, severing the WebSocket connection. The setting `dangerouslyDisableDeviceAuth` is failing to bypass this for some users.
4.  **HIGH: Tool & Execution Failures (#45074, #44372):**
    -   Intermittent "Tool not found" errors for basic tools (`read`, `exec`) and file write operations producing empty files (0-byte) since `2026.3.11/12`.

## 6. Feature Requests & Roadmap Signals
-   **Web Search Alternatives:** Issue #16629 highlights that the Brave Search API is no longer free. A shift toward **DuckDuckGo** or **MiniMax** (PR #42964) as default providers is likely.
-   **Agent Safety:** Issue #9030 proposes a "Discriminator Layer" middleware to prevent agent hallucinations/jailbreaks. This architectural RFC is gaining traction as a necessary safety layer.
-   **Cron Hooks:** PR #45465 (Lifecycle hooks for cron jobs) suggests a roadmap focus on more robust, scriptable automation workflows.

## 7. User Feedback Summary
Users are excited about the **Dashboard-v2 UI refresh** and **GPT-5.4** support, praising the new "modern" feel. However, sentiment regarding **stability is currently negative** due to the OOM crashes breaking low-spec (e.g., Pi 4) and even standard server deployments.
-   **Pain Point:** The upgrade path from `2026.3.7` to `2026.3.12` is currently risky for production environments.
-   **Pain Point:** Developers using **OpenAI-compatible APIs** (Alibaba Cloud, DeepSeek) are struggling with tool calling failures (Issue #41457 context).
-   **Use Case:** Heavy reliance on **WhatsApp** and **Telegram** for personal automation, making the current channel desyncs highly visible and disruptive.

## 8. Backlog Watch
-   **#3460 (i18n Support):** High demand, but maintainer "bandwidth" is cited as the blocker. Needs a "help wanted" drive.
-   **#16629 (Brave Search API Free Tier Removed):** Immediate action required to keep the "out-of-the-box" web search experience functional for free users.
-   **#24064 (Model Fallback on 429/401):** Fallback models are not triggering correctly on rate limits, potentially leaving agents stranded during high usage.

---

## Cross-Ecosystem Comparison

# AI Agent & Personal Assistant Ecosystem Report
**Date:** 2026-03-14

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing **extreme volatility and rapid maturation** on March 14, 2026. Established players like **OpenClaw** and **NanoBot** are pushing aggressive feature releases (GPT-5.4 integration, Channel Plugin Architectures), but are suffering from critical stability regressions (OOM crashes, memory consolidation failures). Concurrently, newer entrants like **Zeroclaw** and **ZeptoClaw** are capitalizing on this instability by focusing on **safety hardening** and **build reliability**. A clear industry-wide pivot is visible toward **Model Context Protocol (MCP)** standardization, **multi-channel messaging support** (Matrix, Signal, Nostr), and **local-first/privacy-preserving deployments**.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Primary Focus |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | `v2026.3.12` (Unstable) | 🟡 Volatile | UI Overhaul, GPT-5.4, Bug Triage |
| **NanoBot** | 25 | 155 | `v0.1.4.post2` (Stale) | 🟢 High Velocity | Plugin Arch, Memory Fixes |
| **Zeroclaw** | 35 (closed) | 38 (merged) | None (Pending) | 🟢 Stabilizing | Channel Ecosystem, Build Fixes |
| **PicoClaw** | 28 | 108 | `nightly` (Unstable) | 🟢 Active Dev | Agent Refactor, Security |
| **NanoClaw** | 15 | 31 | None (Staging) | 🟡 Moderate | Channel Expansion, Security |
| **IronClaw** | 31 | 50 | None (Staging) | 🟡 Heavy Refactor | Multi-Tenancy, Routines |
| **LobsterAI** | 11 | 9 (merged) | None (Pending) | 🟡 Transitional | OpenClaw Integration |
| **TinyClaw** | Low | 5 (merged) | `v0.0.12` | 🟢 Stable | Memory Persistence, UX |
| **Moltis** | 7 (closed) | 7 (merged) | None (Pending) | 🟢 Stable | Platform Fixes, Telegram |
| **CoPaw** | 50 | 45 | `v0.0.7` (Buggy) | 🟡 Regressed | Enterprise Channels, CPU Spikes |
| **ZeptoClaw** | 6 (closed) | 3 (merged) | None | 🟢 Healthy | Safety, Streaming UX |
| **EasyClaw** | 0 | 0 | None | 🔴 Inactive | N/A |

---

## 3. OpenClaw's Position

**Advantages:**
*   **Feature Leadership:** OpenClaw remains the **reference implementation** for cutting-edge features, being the first to integrate GPT-5.4 and deploy a comprehensive "Dashboard-v2" UI overhaul.
*   **Ecosystem Gravity:** With 500+ issues/PRs in 24 hours, it commands the largest user and contributor base, making it the de facto standard for enterprise adoption.

**Critical Weaknesses vs. Peers:**
*   **Stability Gap:** Unlike **ZeptoClaw** (focused on safety/safer defaults) or **Zeroclaw** (stabilizing builds), OpenClaw's `2026.3.12` release is plagued by critical memory leaks (OOM on 4GB RAM) and authentication regressions.
*   **Maintenance Overhead:** The "support everything" strategy (OpenAI, xAI, Alibaba, etc.) is causing fragmentation. **NanoBot** is explicitly struggling with the same "whack-a-mole" provider support issue, suggesting OpenClaw needs architectural consolidation.

**Technical Differentiation:**
*   OpenClaw is betting on a **monolithic, feature-rich gateway**, whereas projects like **NanoBot** (Channel Plugins via Python entry points) and **ZeptoClaw** (lightweight CLI/ACP protocol) are moving toward **modular/lightweight architectures**.

---

## 4. Shared Technical Focus Areas

1.  **Model Context Protocol (MCP) as Standard:**
    *   **Projects:** Zeroclaw, LobsterAI, IronClaw, NanoClaw.
    *   **Trend:** MCP is no longer optional; it is the standard for tool integration. **Zeroclaw** merged "on-demand MCP loading" to save context window space, and **LobsterAI** completely restructured its backend to bridge OpenClaw's MCP servers.

2.  **Memory System Reliability:**
    *   **Projects:** OpenClaw, NanoBot, TinyClaw, CoPaw.
    *   **Trend:** "Hallucinating memory" (CoPaw) and "skipping consolidation" (NanoBot) are top pain points. **TinyClaw**'s move to SQLite-backed message persistence is being mirrored by others seeking durability beyond file-based `MEMORY.md`.

3.  **Multi-Channel Expansion (Privacy & Enterprise):**
    *   **Projects:** NanoClaw (Signal/Nostr), Zeroclaw (Matrix/WeCom), CoPaw (Nextcloud/Mattermost).
    *   **Trend:** There is a bifurcated demand: enterprise users want **WeCom/Teams/Slack** integration, while privacy-focused users demand **Signal/Nostr/Matrix**. **NanoClaw** specifically sees competing PRs for Signal integration, highlighting urgency.

4.  **Safety & Control Mechanisms:**
    *   **Projects:** ZeptoClaw, PicoClaw, IronClaw.
    *   **Trend:** "Autonomous by default" is being rejected. **ZeptoClaw** implemented mandatory TTY-gated approval prompts, and **IronClaw** is refining "Routines" with human-readable schedules.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw & CoPaw (Enterprise) | NanoBot, Zeroclaw, NanoClaw (Extensible) | ZeptoClaw, TinyClaw (Lightweight) |
| :--- | :--- | :--- | :--- |
| **Architecture** | Monolithic / Docker-heavy | Modular Plugins / Pip-installable | Single Binary / CLI-first |
| **Target User** | Enterprise IT / Production | Devs / Integration Engineers | Individual Devs / Makers |
| **Key Differentiator** | UI Richness, Protocol Support | Channel Flexibility, Agent Swarms | Safety, Speed, Local-First |
| **Current Risk** | Bloat, Memory Leaks | Maintenance Overhead | Feature Gaps |

*   **LobsterAI** is an outlier, effectively becoming a **distribution** of OpenClaw by merging its environment handling directly.

---

## 6. Community Momentum & Maturity

*   **Tier 1: Rapid Iteration / High Risk (OpenClaw, NanoBot, PicoClaw)**
    *   These projects are shipping massive changes daily. **OpenClaw** is currently in a "break-fix" cycle, while **NanoBot** is re-architecting its core. High reward, but currently unstable for production.

*   **Tier 2: Stabilizing / Maturing (Zeroclaw, IronClaw, Moltis)**
    *   These projects have moved past the initial hype and are fixing deep architectural issues (multi-tenancy, build regressions). **Zeroclaw** specifically shows a healthy closed-to-open ratio, indicating strong management.

*   **Tier 3: Emerging / Focused (ZeptoClaw, TinyClaw, NanoClaw)**
    *   Smaller, focused codebases addressing specific needs (safety, memory, messaging). **ZeptoClaw** shows exceptional "health" with immediate responses to safety gaps.

---

## 7. Trend Signals

1.  **The "Context Window" Crisis is Back:**
    *   With users pushing agents to their limits (via GPT-5.4 or complex local models), **context management** has re-emerged as a bottleneck. **CoPaw** (token limits), **NanoBot** (context window crashes), and **Zeroclaw** (on-demand MCP loading) all signal that efficient context handling—not just model intelligence—is the differentiator.

2.  **Rejection of "Black Box" Agents:**
    *   Users across **NanoBot**, **PicoClaw**, and **IronClaw** are demanding "observability" into sub-agents and routines. The "trust but verify" approach (interactive approval in **ZeptoClaw**) is winning over "autonomous magic."

3.  **Local Model Compatibility Fracturing:**
    *   While "OpenAI-Compatible" is the standard, **LobsterAI** and **CoPaw** show that local models (Ollama, Qwen) frequently fail to trigger tools correctly. This suggests a market gap for a **"Tool-Calling Proxy"** middleware that could standardize tool invocation for non-OpenAI models.

4.  **Search API Shift:**
    *   The removal of Brave Search's free tier (**OpenClaw** #16629) is forcing the ecosystem toward **DuckDuckGo** or **MiniMax**. This small change signals a broader vulnerability: reliance on free third-party APIs for core agent capabilities (web browsing) is a strategic risk.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-03-14

## 1. Today's Overview
NanoBot is demonstrating **exceptionally high development velocity**, with 155 pull requests updated in the last 24 hours (76% merged/closed) and active discussions across 25 issues. The project is in a phase of aggressive feature expansion and stabilization, focusing heavily on extensibility (plugin architecture), multi-channel support (XMPP, A2A), and LLM provider compatibility (Mistral, Azure OAuth, Ollama fixes). While the maintainers are merging fixes rapidly, the volume of new bugs related to provider-specific quirks (DashScope, Nvidia, Moonshot) suggests the "support many models" strategy creates significant maintenance overhead.

## 2. Releases
No new official releases were published today. The last tagged version remains `v0.1.4.post2`. Users are encouraged to use the `main` branch or nightly Docker images (`birdxs/nanobot`) to access the latest fixes, particularly for memory consolidation and provider compatibility.

## 3. Project Progress
Significant advancements were merged or closed today:
*   **Architecture Refactoring:** Two major PRs ([#1984](https://github.com/HKUDS/nanobot/pull/1984), [#1982](https://github.com/HKUDS/nanobot/pull/1982)) introduced a **Channel Plugin Architecture** using Python entry points, allowing channels to be installed via `pip` and decoupling configs from the core schema.
*   **Memory Stabilization:** [PR #1909](https://github.com/HKUDS/nanobot/pull/1909) (merged) fixed a critical issue where LLMs could skip memory consolidation by forcing `tool_choice="required"`.
*   **Provider Support:** [PR #1983](https://github.com/HKUDS/nanobot/pull/1983) restored Ollama compatibility, and [PR #1981](https://github.com/HKUDS/nanobot/pull/1981) fixed WeCom stability issues.
*   **Security:** [PR #605](https://github.com/HKUDS/nanobot/pull/605) hardened WhatsApp bridge security with mandatory auth.
*   **New Channels:** [PR #1945](https://github.com/HKUDS/nanobot/pull/1945) (Open) proposes XMPP support, and [PR #1368](https://github.com/HKUDS/nanobot/pull/1368) adds A2A protocol support.

## 4. Community Hot Topics
1.  **Sub-Agent Visibility** ([Issue #1955](https://github.com/HKUDS/nanobot/issues/1955)): The most active discussion (9 comments). Users are frustrated that sub-agents are "black boxes" compared to the main agent. They want to see the reasoning and tool calls of child agents in real-time to debug complex agentic workflows.
2.  **Memory Consolidation Failures** ([Issue #1931](https://github.com/HKUDS/nanobot/issues/1931)): Users reported that the LLM often ignores the `save_memory` call during token consolidation, leading to memory loss. This was directly addressed by [PR #1909](https://github.com/HKUDS/nanobot/pull/1909).
3.  **Multi-Model Support** ([Issue #1822](https://github.com/HKUDS/nanobot/issues/1822)): Users are requesting broader support for niche providers (Nvidia), highlighting the challenge of maintaining LiteLLM compatibility across the ecosystem.

## 5. Bugs & Stability
*   **Critical: Context Window Crash** ([Issue #1979](https://github.com/HKUDS/nanobot/issues/1979)): Long conversations crash the agent with `ContextWindowExceededError` instead of gracefully handling truncation. *No fix PR yet.*
*   **High: DashScope Incompatibility** ([Issue #1927](https://github.com/HKUDS/nanobot/issues/1927)): Alibaba's DashScope does not support `tool_choice="required"`, causing memory archival to fail completely. This conflict between [PR #1909](https://github.com/HKUDS/nanobot/pull/1909) and specific providers needs architectural attention.
*   **High: MCP Stability** ([Issue #1951](https://github.com/HKUDS/nanobot/issues/1951)): The gateway crashes if MCP services are restarted or not ready at startup.
*   **Medium: Windows Restart Bug** ([Issue #1937](https://github.com/HKUDS/nanobot/issues/1937)): The `/restart` command fails on Windows due to path issues.
*   **Fixed:** QQ Channel markdown breaking legacy clients ([Issue #1936](https://github.com/HKUDS/nanobot/issues/1936)) was fixed by [PR #1941](https://github.com/HKUDS/nanobot/pull/1941).

## 6. Feature Requests & Roadmap Signals
*   **Dynamic Provider Switching** ([Issue #1954](https://github.com/HKUDS/nanobot/issues/1954)): Users want to switch models (e.g., to GPT-5.4) mid-conversation via chat commands rather than static config.
*   **Sub-Agent Working Directories** ([PR #1935](https://github.com/HKUDS/nanobot/pull/1935)): A highly requested feature allowing sub-agents to work in specific folders and read `AGENTS.md` context, improving project isolation.
*   **Skill Management** ([PR #1934](https://github.com/HKUDS/nanobot/pull/1934)): Adding `enabled: false` to skills allows disabling them without deletion.
*   **Status Diagnostics** ([PR #1985](https://github.com/HKUDS/nanobot/pull/1985)): A new `/status` command is proposed to check bot health without accessing logs.

## 7. User Feedback Summary
Users appreciate the lightweight, soul-driven design but are currently struggling with **platform fragmentation**. The rush to support every LLM provider (Moonshot, Nvidia, Qwen, DashScope) is causing a "whack-a-mole" effect where fixes for one provider break another. The memory system is a major pain point—users feel it is "brittle," relying too heavily on LLM compliance (`tool_choice`). There is strong demand for **observability** (seeing what sub-agents do) and **graceful degradation** (handling long contexts or API limits without crashing).

## 8. Backlog Watch
*   **Attention Required:** [Issue #1927](https://github.com/HKUDS/nanobot/issues/1927) (DashScope) creates a direct conflict with the recently merged memory fix. This needs a provider-specific configuration override for `tool_choice`.
*   **Long-term Discussion:** [PR #1246](https://github.com/HKUDS/nanobot/pull/1246) (End Turn tool) has been open since Feb 26. It proposes giving the LLM explicit control to end turns, which could solve "laziness" issues, but has not been reviewed by maintainers recently.
*   **CI/CD:** [Issue #1059](https://github.com/HKUDS/nanobot/issues/1059) notes that PyPI releases are lagging behind GitHub. A manual release process or CI failure is blocking updates to `pip install` users.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest: 2026-03-14

## 1. Today's Overview
Zeroclaw demonstrates **extremely high development velocity** today, acting as a clear inflection point for the project's stability and feature set. With **35 issues closed and 38 PRs merged** in the last 24 hours, the maintainers are aggressively triaging the backlog and integrating community contributions. The primary focus has been on remediation following a recent branch migration to `master`, fixing resulting build regressions (specifically regarding missing MCP/IPC features and Matrix support), and broadening platform compatibility (Windows, 32-bit architectures). The project appears to be stabilizing rapidly after a turbulent period of repository restructuring.

## 2. Releases
**No new official releases** were tagged in the last 24 hours.
*   **Note:** The lack of a release is notable given the volume of fixes merged (particularly for the `channel-matrix` flag missing in `v0.1.7`). A patch release (likely `v0.1.8`) is highly recommended to resolve the S0/S1 severity issues currently affecting users on the stable build.

## 3. Project Progress
The merge log indicates a concerted effort to close the gap between the `master` branch and user expectations. Key advancements include:

*   **Channel Ecosystem:** Native support was added for **WeCom (WeChat Enterprise)** ([PR #3439](https://github.com/zeroclaw-labs/zeroclaw/pull/3439)), and the **Matrix** channel received typing notifications/read markers ([PR #3441](https://github.com/zeroclaw-labs/zeroclaw/pull/3441)). The **Slack** adapter was fixed to support threaded replies ([PR #3435](https://github.com/zeroclaw-labs/zeroclaw/pull/3435)).
*   **MCP Architecture:** A significant optimization was merged allowing **on-demand MCP tool loading** via `tool_search` ([PR #3446](https://github.com/zeroclaw-labs/zeroclaw/pull/3446)), which reduces context window waste.
*   **Platform Support:** Windows support is now robust, with fixes for `tool_call` execution ([PR #3442](https://github.com/zeroclaw-labs/zeroclaw/pull/3442)) and test suites ([PR #3390](https://github.com/zeroclaw-labs/zeroclaw/pull/3390)).
*   **Docker:** A new Debian-based Dockerfile variant was added to support shell tools, solving the "distroless limitation" ([PR #3437](https://github.com/zeroclaw-labs/zeroclaw/pull/3437)).

## 4. Community Hot Topics
The most active discussions center on the project's structural changes and configuration depth:

1.  **Branch Policy Confusion & Data Loss Scare ([Issue #3397](https://github.com/zeroclaw-labs/zeroclaw/issues/3397) / [Issue #3131](https://github.com/zeroclaw-labs/zeroclaw/issues/3131)):**
    Users reported that switching the default branch to `master` resulted in "data loss" (missing features like MCP/IPC). This generated significant anxiety ([Issue #3379](https://github.com/zeroclaw-labs/zeroclaw/issues/3379)). The underlying need is for **clear communication regarding branch stability** and ensuring that official releases actually contain the features documented in the main branch.

2.  **Matrix Support Availability ([Issue #2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953)):**
    Users are frustrated that the Matrix flag is missing from builds. This indicates a strong demand for **self-hosted, federated communication channels** within the enterprise user base.

3.  **MCP in Subagents ([Issue #3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153) / [Issue #3069](https://github.com/zeroclaw-labs/zeroclaw/issues/3069)):**
    Technically adept users are pushing for deeper MCP integration, specifically wanting subagents to have full access to MCP tools, not just the root agent.

## 5. Bugs & Stability
Several high-severity bugs were identified and largely resolved via PRs today:

*   **S0 - Data Loss / Feature Missing:** The switch to `master` removed `agent_ipc` and `mcp` configurations ([Issue #3397](https://github.com/zeroclaw-labs/zeroclaw/issues/3397)). *Status: Identified as branch divergence; users directed to correct branch/build.*
*   **S1 - Workflow Blocked (Matrix):** `channel-matrix` flag missing in `v0.1.7` ([Issue #2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953)). *Status: Fix pending release.*
*   **S1 - Workflow Blocked (Builds):** Compilation failures on 32-bit architectures ([Issue #3335](https://github.com/zeroclaw-labs/zeroclaw/issues/3335)) and Matrix SDK issues ([Issue #3425](https://github.com/zeroclaw-labs/zeroclaw/issues/3425)). *Status: Fix merged in PR #3430.*
*   **S2 - Runtime:** A "stale tool_result" injection bug caused hallucinations in new sessions ([Issue #3402](https://github.com/zeroclaw-labs/zeroclaw/issues/3402)). *Status: Closed/Fixed.*
*   **S3 - Minor:** Unwanted `~` folder creation on Windows/Linux ([Issue #3417](https://github.com/zeroclaw-labs/zeroclaw/issues/3417)). *Status: Fixed in PR #3427.*

## 6. Feature Requests & Roadmap Signals
User requests highlight a trend toward **customization and observability**:

*   **UX Customization:** Requests to disable hardcoded emoji reactions (`👀/✅`) ([Issue #3403](https://github.com/zeroclaw-labs/zeroclaw/issues/3403)) were merged ([PR #3438](https://github.com/zeroclaw-labs/zeroclaw/pull/3438)).
*   **Provider Flexibility:** Strong demand for custom API path suffixes to support non-standard LLM endpoints ([Issue #3125](https://github.com/zeroclaw-labs/zeroclaw/issues/3125)) was addressed in [PR #3447](https://github.com/zeroclaw-labs/zeroclaw/pull/3447).
*   **Observability:** A "Verbose Mode" ([Issue #3316](https://github.com/zeroclaw-labs/zeroclaw/issues/3316)) and Cron History Dashboard ([Issue #3299](https://github.com/zeroclaw-labs/zeroclaw/issues/3299)) were requested and merged, indicating users want better debugging tools.

**Prediction:** The next version will likely focus on solidifying these diverse channel integrations (Matrix/WeCom) and refining the MCP loading mechanism.

## 7. User Feedback Summary
*   **Pain Points:** Users are currently struggling with **build stability** and **feature discovery**. The "missing features" panic shows that the release cadence is out of sync with the development velocity.
*   **Use Cases:** Heavy interest in **self-hosted channels** (Matrix, WeCom) and **local models** (via custom endpoints/Ollama env vars).
*   **Sentiment:** Generally positive regarding the speed of fixes, but frustrated by the complexity of the current branch state (`master` vs `main` vs `dev`).

## 8. Backlog Watch
*   **[Issue #1327](https://github.com/zeroclaw-labs/zeroclaw/issues/1327) (Kimi Code Compatibility):** This bug involving `thinking` mode and `reasoning_content` has been open since Feb 22. It has 6 comments but remains closed/resolved or potentially overlooked in the recent merge wave. It needs verification to ensure recent tooling fixes didn't regress this specific provider behavior.
*   **[PR #3366](https://github.com/zeroclaw-labs/zeroclaw/pull/3366) (Release Token):** This open PR addresses the release workflow failure. Its merger is critical for unblocking the next stable release.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-03-14

## 1. Today's Overview
PicoClaw demonstrates **very high active development velocity** with 108 updated Pull Requests and 28 active Issues in the last 24 hours. The project is currently in a major architectural transition phase, specifically refactoring the **Agent Loop** to be event-driven. There is a strong focus on expanding **Provider support** (new models and cloud services) and fixing **configuration stability** issues. The maintainers appear responsive, with a significant number of bug fixes and documentation updates merging alongside large feature branches.

## 2. Releases
- **Version:** `nightly` (Build `v0.2.2-nightly.20260313.19835b2f`)
- **Type:** Automated Nightly
- **Status:** Unstable / Development preview
- **Context:** This build consolidates recent refactoring efforts in the agent loop and provider configuration handling. Users should expect potential instability, particularly around new provider integrations.

## 3. Project Progress
The development team is aggressively merging fixes and enhancements. Notable progress includes:

*   **Configuration & Migration Fixes:** Merged PRs like [PR #1513](https://github.com/sipeed/picoclaw/pull/1513) (fixing legacy provider config inheritance) and [PR #1512](https://github.com/sipeed/picoclaw/pull/1512) (hot reload detection) significantly improve stability for the upcoming v0.2.2 release.
*   **Docker Runtime:** [PR #1520](https://github.com/sipeed/picoclaw/pull/1520) added Node.js runtime to the Docker launcher, enabling better support for npm-based MCP servers.
*   **Agent Capabilities:** Several open PRs are preparing the ground for the "Agent Refactor," specifically implementing **steering** ([PR #1517](https://github.com/sipeed/picoclaw/pull/1517)) and **tool context loading** ([PR #1417](https://github.com/sipeed/picoclaw/pull/1417) fixing `TOOLS.md`).
*   **Security:** A significant new feature for **Credential Encryption** (AES-GCM) is being staged in two parts ([PR #1521](https://github.com/sipeed/picoclaw/pull/1521) and [PR #1522](https://github.com/sipeed/picoclaw/pull/1522)), moving away from plaintext API keys in config.

## 4. Community Hot Topics
*   **Agent "Soul" & Personality Definition ([Issue #1218](https://github.com/sipeed/picoclaw/issues/1218)):**
    *   **Activity:** 24 comments.
    *   **Analysis:** The community is actively discussing how to formalize agent behavior. The proposal to split definition into `SOUL.md` (personality/values) and `AGENT.md` (functional config) resonates strongly, indicating a user desire for deeper customization of agent "character" beyond simple system prompts.
*   **Event-Driven Agent Loop ([Issue #1316](https://github.com/sipeed/picoclaw/issues/1316)):**
    *   **Activity:** 8 comments.
    *   **Analysis:** This technical RFC proposes solving the "black box" problem where the agent loop cannot be observed or interrupted. This is a critical piece of infrastructure for building reliable orchestration layers on top of PicoClaw.
*   **Local Model Support (Ollama) ([Issue #1161](https://github.com/sipeed/picoclaw/issues/1161)):**
    *   **Activity:** 17 comments.
    *   **Analysis:** A persistent pain point. Users running local LLMs via Ollama are experiencing "silent failures" where the agent runs but produces no output. This suggests a gap in error handling or response parsing for non-OpenAI compliant endpoints.

## 5. Bugs & Stability
*   **[High Severity] Config Loading Failure ([Issue #1491](https://github.com/sipeed/picoclaw/issues/1491)):** Users report "no API key configured" errors despite valid `config.json`. This seems linked to legacy config migration issues being addressed in [PR #1513](https://github.com/sipeed/picoclaw/pull/1513).
*   **[High Severity] Silent Failure with Local Models ([Issue #1161](https://github.com/sipeed/picoclaw/issues/1161)):** Ollama integration produces no response. No explicit fix PR is linked yet in the summary, making this a top stability concern for self-hosters.
*   **[Medium Severity] Gateway Requires Restart for New Models ([Issue #1493](https://github.com/sipeed/picoclaw/issues/1493)):** Hot-reloading models fails; requires a manual gateway restart.
*   **[Fixed] Command Safety Guard Over-blocking ([Issue #1203](https://github.com/sipeed/picoclaw/issues/1203)):** Safety guard incorrectly flagged URLs as file paths. This is now Closed/Fixed.

## 6. Feature Requests & Roadmap Signals
The roadmap is heavily influenced by **Extensibility** and **Orchestration**.
*   **Agent Steering & Control:** [Issue #1316](https://github.com/sipeed/picoclaw/issues/1316) (Event-driven loop) and [PR #1517](https://github.com/sipeed/picoclaw/pull/1517) (Steering) signal that the next major version will focus on *controllable* agents rather than just chatbots.
*   **File Handling in Feishu:** [Issue #1506](https://github.com/sipeed/picoclaw/issues/1506) requests exposing local file paths for non-image files to allow agents to "read" documents sent via chat. This is a strong signal for multimodal office automation use cases.
*   **Cloud Provider Expansion:** Requests for **Azure OpenAI** ([Issue #1424](https://github.com/sipeed/picoclaw/issues/1424)) and **ModelScope** ([Issue #1438](https://github.com/sipeed/picoclaw/issues/1438)) indicate a diversifying enterprise user base.
*   **Prediction:** The **Credential Encryption** feature (AES-GCM) and **Agent Steering** are the most likely candidates for inclusion in the next stable release (v0.2.2).

## 7. User Feedback Summary
Users are struggling with **Configuration Drift**—the switch to `model_list` and provider abstractions has left users with legacy configs (using just `providers` blocks) facing cryptic errors. The documentation is lagging behind the code ([Issue #1489](https://github.com/sipeed/picoclaw/issues/1489)), with users having to read source code (`config.go`) to discover available parameters.
On the positive side, the project is praised for its channel support (Feishu, Discord, Telegram), but users want these channels to be more transparent to the agent (e.g., letting the agent know *which* Discord channel it is in, per [Issue #1451](https://github.com/sipeed/picoclaw/issues/1451)).

## 8. Backlog Watch
*   **[CRITICAL] Vector Search & Memory ([PR #90](https://github.com/sipeed/picoclaw/pull/90)):** This large feature PR adds vector search for memory. It is currently closed/updated but seems to be a massive architectural addition that has been in progress since Feb. It needs maintainer review to determine if it is blocked or needs re-targeting.
*   **[FEATURE] WebSocket Gateway ([PR #751](https://github.com/sipeed/picoclaw/pull/751)):** Implemented weeks ago, this PR adds a WebSocket interface essential for orchestration. It remains open, potentially waiting for the Agent Refactor to merge.
*   **[STABILITY] Cron Job Agent Replies ([PR #757](https://github.com/sipeed/picoclaw/pull/757)):** Cron-triggered replies are silently failing. This fix is critical for users relying on scheduled tasks and has been open since Feb 25.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-14

## 1. Today's Overview
NanoClaw demonstrates **high velocity development activity** with 31 pull requests updated (16 merged/closed) and 15 issues active in the last 24 hours. The project is in an active feature expansion phase, focusing heavily on expanding messaging channel integrations (Signal, Nostr, Feishu, Telegram) and hardening security against prompt injection attacks. The ratio of merged PRs (16) to new opens suggests a healthy throughput, while the high number of "good first issue" bugs indicates a maturing codebase with accessible contribution opportunities. No new releases were tagged today, indicating ongoing accumulation of features for a future release.

---

## 2. Releases
**No new releases** were published today. The last release cycle is not detailed in available data; current activity suggests substantial changes are being staged for an upcoming version.

---

## 3. Project Progress

### Merged Features & Enhancements
| PR | Summary | Impact |
|----|---------|--------|
| [#1040](https://github.com/qwibitai/nanoclaw/pull/1040) | Fix message draining to prevent dropping messages when >200 accumulate | **Critical reliability fix** for high-volume deployments |
| [#1037](https://github.com/qwibitai/nanoclaw/pull/1037) | Add typed Tanren API client module | Infrastructure for worker-manager integration |
| [#1036](https://github.com/qwibitai/nanoclaw/pull/1036) | Sanitize WebFetch/WebSearch output via PostToolUse hook | **Security hardening** against prompt injection |
| [#1028](https://github.com/qwibitai/nanoclaw/pull/1028) | Telegram bot pool for agent swarms | Multi-agent Telegram deployments |
| [#1034](https://github.com/qwibitai/nanoclaw/pull/1034) | Trivy security scanning in CI | Supply chain security |
| [#1026](https://github.com/qwibitai/nanoclaw/pull/1026) | Autonomous loop criteria + push/land skill improvements | Developer workflow automation |

### Closed Issues (Fixed)
- **[#1033](https://github.com/qwibitai/nanoclaw/issues/1033)** - Prompt caching exploration (closed after discussion)
- **[#1029](https://github.com/qwibitai/nanoclaw/issues/1029)** - Claude subscription OAuth token issues (likely addressed)
- **[#520](https://github.com/qwibitai/nanoclaw/issues/520)** - BoxLite sandbox backend proposal (closed, possibly declined or deferred)
- **[#960](https://github.com/qwibitai/nanoclaw/issues/960)** - MCP env vars not passed after credential proxy migration (likely fixed)

### Key Open PRs Advancing
- **[#1027](https://github.com/qwibitai/nanoclaw/pull/1027)** - FTS5 conversation search implementation (addresses #908, #909) — **Needs Review**
- **[#920](https://github.com/qwibitai/nanoclaw/pull/920)** - Feishu (Lark) channel integration — **Needs Review**
- **[#879](https://github.com/qwibitai/nanoclaw/pull/879)** - ANTHROPIC_AUTH_TOKEN support — **Needs Review**

---

## 4. Community Hot Topics

### Most Discussed Issues
| Issue | Engagement | Topic Analysis |
|-------|------------|----------------|
| [#908](https://github.com/qwibitai/nanoclaw/issues/908) | 2 comments, High Priority | **FTS5 search** — Strong community need for agent memory/recall capabilities |
| [#829](https://github.com/qwibitai/nanoclaw/issues/829) | 1 comment, Bug | **Agent honesty** — Concerns about LLMs fabricating tool execution claims |

### Most Active PRs (Competing Implementations)
| PR | Status | Topic |
|----|--------|-------|
| [#1041](https://github.com/qwibitai/nanoclaw/pull/1041) | Open/Blocked | **Nostr DM** private messaging via NIP-17 |
| [#1023](https://github.com/qwibitai/nanoclaw/pull/1023) | Open/Blocked | **Signal channel** via signal-cli JSON-RPC |
| [#1016](https://github.com/qwibitai/nanoclaw/pull/1016) | Open/Needs Review | **Signal channel** (alternative implementation) |

**Analysis:** The community is strongly focused on **multi-channel messaging expansion**. Multiple contributors are independently building Signal integrations, suggesting high demand. Security-conscious communication (Nostr with NIP-17 encryption, Signal) is a priority theme.

---

## 5. Bugs & Stability

### High Severity Bugs
| Issue | Severity | Status | Fix Available |
|-------|----------|--------|---------------|
| [#1020](https://github.com/qwibitai/nanoclaw/issues/1020) | **High** | Open | No PR yet |
| [#960](https://github.com/qwibitai/nanoclaw/issues/960) | High | Closed | Likely fixed |
| [#1032](https://github.com/qwibitai/nanoclaw/pull/1032) | Security | Closed | Merged via #1036 |

**#1020 Critical Detail:** Users receive **two different replies** per message due to `processGroupMessages` iterating over SDK results and calling `channel.sendMessage()` for each. This affects all messages consistently — a **user-facing regression** requiring urgent attention.

### Medium Severity Bugs (Good First Issues)
- **[#829](https://github.com/qwibitai/nanoclaw/issues/829)** - Agent fabricates tool call results (needs `SOUL.md` rule addition)
- **[#753](https://github.com/qwibitai/nanoclaw/issues/753)** - Assistant name not updated in `groups/main/CLAUDE.md` during registration
- **[#698](https://github.com/qwibitai/nanoclaw/issues/698)** - Agent cannot determine day of week from ISO timestamps (needs explicit date context)

### Security Fixes Merged
Multiple PRs addressing **prompt injection via WebFetch/WebSearch** were merged (#1036, #1032, #843), implementing PostToolUse hooks to sanitize external content before it reaches the agent context. This was triggered by a real-world incident where adversarial content was embedded in Wikipedia.

---

## 6. Feature Requests & Roadmap Signals

### Strong Signals (Active Development)
| Feature | Evidence | Next Version Likelihood |
|---------|----------|------------------------|
| **FTS5 Conversation Search** | Issue #908/#909 + PR #1027 in review | ⭐⭐⭐⭐⭐ Very High |
| **Signal Integration** | Two competing PRs (#1023, #1016) | ⭐⭐⭐⭐ High |
| **Nostr DM Support** | PR #1041 with NIP-17 | ⭐⭐⭐ Medium |
| **Feishu/Lark Channel** | PR #920 in review | ⭐⭐⭐ Medium |
| **Prompt Caching** | Issue #1033 discussion | ⭐⭐ Low (informational) |

### User-Requested Features
- **[#1033](https://github.com/qwibitai/nanoclaw/issues/1033)** - Prompt caching for 90% Anthropic cost reduction
- **[#520](https://github.com/qwibitai/nanoclaw/issues/520)** - BoxLite micro-VM sandbox option (closed, may be revisited)
- **[#1017](https://github.com/qwibitai/nanoclaw/issues/1017)** - Add percentage to repo-tokens badge (UI enhancement)

### Platform Expansion
- **[#1015](https://github.com/qwibitai/nanoclaw/issues/1015)** - Request for non-Claude LLM provider support (DeepInfra mentioned)

---

## 7. User Feedback Summary

### Pain Points
1. **Authentication Complexity:** Users struggle with Claude subscription OAuth tokens expiring every few hours (#1029)
2. **Message Duplication:** Critical UX issue where every message generates two replies (#1020)
3. **Configuration Confusion:** WhatsApp phone number format, read-only path documentation (#447, #527)
4. **Model Provider Lock-in:** Users want to use alternative providers like DeepInfra but face model validation errors (#1015)

### Positive Signals
- Active contributor base with **first-time contributors** submitting substantial features (#1016)
- Multiple independent implementations of same features (Signal) indicate strong developer interest
- Security-conscious design discussions (Nostr NIP-17, prompt injection defenses)

### Use Case Patterns
- **Multi-channel agent deployment** (Telegram swarms, Discord, Slack, Feishu)
- **Privacy-focused messaging** (Nostr encrypted DMs, Signal)
- **Self-hosted AI assistant** with persistent memory (FTS5 search)

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention
| Issue | Age | Priority | Concern |
|-------|-----|----------|---------|
| **[#411](https://github.com/qwibitai/nanoclaw/issues/411)** | 19 days | Medium | **Security docs missing** — Indirect prompt injection risks not documented |
| **[#527](https://github.com/qwibitai/nanoclaw/issues/527)** | 16 days | Medium | **Documentation bug** — CLAUDE.md instructs writes to read-only paths |
| **[#698](https://github.com/qwibitai/nanoclaw/issues/698)** | 10 days | Medium | **Agent confusion** — Cannot determine day of week without explicit context |

### Blocked PRs Requiring Review
| PR | Status | Blocker |
|----|--------|---------|
| **[#1041](https://github.com/qwibitai/nanoclaw/pull/1041)** | Blocked | Nostr DM — needs security/architecture review |
| **[#1023](https://github.com/qwibitai/nanoclaw/pull/1023)** | Blocked | Signal — competing with #1016, needs decision |
| **[#879](https://github.com/qwibitai/nanoclaw/pull/879)** | Needs Review | ANTHROPIC_AUTH_TOKEN — 5 days old |

### Technical Debt Indicators
- Multiple security-related PRs (#843, #1032, #1036) addressing same issue suggest **reactive security posture**
- Two Signal implementations need **consolidation decision**
- Several "good first issue" bugs remain open (accessible but unfixed)

---

**Summary:** NanoClaw is experiencing rapid growth in messaging channel support and security hardening. The immediate priority should be addressing the duplicate message bug (#1020) and resolving the competing Signal PR implementations. The FTS5 search feature appears ready for merge and would significantly enhance agent memory capabilities.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-14

## 1. Today's Overview
IronClaw demonstrates **very high development velocity** with 50 pull requests updated and 31 issues processed in the last 24 hours. The high ratio of open PRs (42) to merged (8) indicates a massive parallel development push, likely centered around multi-tenancy and registry refactoring efforts. The project is currently in an active stabilization and feature expansion phase, with significant attention paid to the newly introduced "Routines" system and Model Context Protocol (MCP) integration. While no new official release was cut today, the staging branch is active with multiple promotion cycles.

## 2. Releases
**No new stable releases** were published today.
*   *Note:* Several "staging-promote" PRs (#1145, #1149) were opened and closed by CI bots, suggesting internal pre-release validation is actively running. The next tagged release will likely aggregate the numerous refactors and fixes currently in the pipeline.

## 3. Project Progress
Today's development focused on architectural refactoring and fixing high-priority bugs discovered during recent testing ("bug bash").

*   **Tool Parameter Coercion (PR #1143):** A major fix was introduced to guide tool parameter handling via schemas, addressing silent failures in tools like Google Sheets.
*   **Routine System Enhancements (PR #1154, #1147):** Significant work on making routines more robust and user-friendly, including human-readable cron expressions and redesigned request schemas for better LLM compatibility.
*   **Multi-Tenancy Foundation (PR #1118, #1117, #1112):** A series of "XL" sized PRs were opened to implement multi-tenant authentication and workspace isolation, rebased from previous efforts. This represents a major architectural shift.
*   **Registry Refactoring (PR #1144):** Moved hardcoded MCP server definitions to JSON manifests, making the system more modular and data-driven.
*   **Configuration Unification (PR #1124):** Fixed the `ChannelsConfig` resolution priority to ensure environment variables and settings behave predictably.

## 4. Community Hot Topics
The community and core team are focused on compatibility and the new Routines engine.

*   **Kimi-K2.5 Model Compatibility ([Issue #728](https://github.com/nearai/ironclaw/issues/728))** is the most discussed issue. Users are struggling with strict API constraints (temperature limits, reasoning content parsing), highlighting a need for more flexible model provider configurations.
*   **Safari IME Input Bug ([Issue #1139](https://github.com/nearai/ironclaw/issues/1139))** garnered attention for affecting CJK (Chinese/Japanese/Korean) users. A fix was quickly submitted in ([PR #1140](https://github.com/nearai/ironclaw/pull/1140)).
*   **Event-Triggered Routines Not Firing ([Issue #1051](https://github.com/nearai/ironclaw/issues/1051)):** Multiple users reported that the highly anticipated "routines" feature fails to trigger on events, suggesting a critical logic gap in the current implementation.

## 5. Bugs & Stability
Several high-severity bugs were identified by the Staging CI and users, though many have corresponding fix PRs in progress.

*   **[CRITICAL] Webhook Authentication Bypass ([Issue #1033](https://github.com/nearai/ironclaw/issues/1033)) - *Closed/Fixed*:**
    A critical vulnerability where webhooks could bypass authentication if the secret was unconfigured. (Likely addressed in recent patches).
*   **[HIGH] ReDoS Vulnerability ([Issue #825](https://github.com/nearai/ironclaw/issues/825)) - *Closed/Fixed*:**
    Regex patterns in the routine engine were susceptible to Denial of Service attacks.
*   **[HIGH] O(n²) Allocations in SSE Parsing ([Issue #1142](https://github.com/nearai/ironclaw/issues/1142)):**
    Performance issue in HTTP transport. A fix is proposed in ([PR #1153](https://github.com/nearai/ironclaw/pull/1153)).
*   **[HIGH] Event Routines Deadlock/Fail ([Issue #1051](https://github.com/nearai/ironclaw/issues/1051)):**
    Routines created via the UI never fire. This is a P1 functional breakage currently under investigation.
*   **Tool Parameter Failures ([Issue #1126](https://github.com/nearai/ironclaw/issues/1126)):**
    Tools fail when models send empty strings for optional parameters. Addressed by ([PR #1143](https://github.com/nearai/ironclaw/pull/1143)).

## 6. Feature Requests & Roadmap Signals
User requests are trending towards multimodality and BYOK (Bring Your Own Key) flexibility.

*   **Image File Support ([Issue #1122](https://github.com/nearai/ironclaw/issues/1122), #1123):**
    Users are requesting the ability to upload and analyze images (JPEG/PNG), which currently throws an "unsupported document type" error. This is a strong signal for multimodal capability expansion.
*   **BYOK Model Configuration ([Issue #1027](https://github.com/nearai/ironclaw/issues/1027)):**
    A request to formalize support for custom model configurations beyond the standard providers, moving `LLM_BACKEND` from an implementation detail to a supported feature.
*   **Human-Readable Schedules ([Issue #1131](https://github.com/nearai/ironclaw/issues/1131)):**
    Request to translate raw cron strings (e.g., `0 9 * * MON-FRI`) into readable text ("Every weekday at 9am"). Implemented in ([PR #1154](https://github.com/nearai/ironclaw/pull/1154)).

## 7. User Feedback Summary
Users are enthusiastic about the "Routines" and "Builder" features but are currently facing friction with stability and integration nuances.

*   **Pain Points:**
    *   **Integrations are flaky:** Users report silent failures in Google Sheets ([Issue #1002](https://github.com/nearai/ironclaw/issues/1002)) and intermittent 404 errors with Telegram bot tokens ([Issue #991](https://github.com/nearai/ironclaw/issues/991)).
    *   **Model Strictness:** Strict parameter validation (Issue #728) breaks compatibility with popular models like Kimi-K2.5.
    *   **Setup friction:** The `onboard` command fails with database errors for some users, though the app runs afterward ([Issue #846](https://github.com/nearai/ironclaw/issues/846)).
*   **Positive Signals:** Quick response to the Safari IME bug and active engagement on the "Builder" tool PRs show a responsive development cycle.

## 8. Backlog Watch
*   **Multi-Tenancy PRs ([#1118](https://github.com/nearai/ironclaw/pull/1118), [#1117](https://github.com/nearai/ironclaw/pull/1117), [#1112](https://github.com/nearai/ironclaw/pull/1112)):** These massive "XL" PRs were re-filed today. They are critical for the project's architecture but require heavy review. They risk stalling without focused attention from senior maintainers.
*   **Edge Hardware Support ([Issue #134](https://github.com/nearai/ironclaw/issues/134)):** This proposal for GPIO access (Raspberry Pi) via MCP was updated but remains open. It's a unique differentiator for an AI agent that needs traction.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest (2026-03-14)

## 1. Today's Overview
LobsterAI is currently undergoing a significant architectural pivot, heavily integrating the **OpenClaw** environment to handle sandboxing, memory, and agent execution. The project demonstrated high velocity today, merging **9 Pull Requests** focused primarily on refactoring the backend to support OpenClaw, optimizing gateway startup times (reducing startup from >180s to ~15s), and implementing an MCP Bridge. Conversely, user friction is rising, with **11 active issues** opened or updated in the last 24 hours. The community is reporting a disconnect between the rapid integration of OpenClaw and the stability of core features, particularly regarding local LLM tool-calling capabilities and environment setup.

## 2. Releases
**No new releases** were recorded today. The high volume of merged PRs suggests a significant version bump (likely addressing the "OpenClaw" transition) is imminent, but as of 2026-03-14, no tagged release is available.

## 3. Project Progress
Today's development was dominated by the **OpenClaw Integration** initiative, fundamentally changing how the agent executes code and manages memory.

*   **OpenClaw Integration & Sandbox Migration:**
    *   [PR #412](https://github.com/netease-youdao/LobsterAI/pull/412): Forced `executionMode` to local to fix Docker dependency errors for upgrading users.
    *   [PR #403](https://github.com/netease-youdao/LobsterAI/pull/403): Removed the built-in sandbox in favor of OpenClaw.
    *   [PR #409](https://github.com/netease-youdao/LobsterAI/pull/409): Added support for scheduled tasks (cron) within OpenClaw.
    *   [PR #410](https://github.com/netease-youdao/LobsterAI/pull/410): Fixed reference errors in the scheduled task module.
*   **Memory & MCP Bridge:**
    *   [PR #411](https://github.com/netease-youdao/LobsterAI/pull/411): Migrated the memory storage backend to use OpenClaw's `MEMORY.md` file system.
    *   [PR #408](https://github.com/netease-youdao/LobsterAI/pull/408): Implemented an MCP Bridge, allowing OpenClaw's embedded agent to utilize LobsterAI's MCP servers (Tavily, GitHub, etc.) via HTTP proxy.
*   **Performance Optimization:**
    *   [PR #395](https://github.com/netease-youdao/LobsterAI/pull/395): Drastically optimized the OpenClaw gateway startup speed (using esbuild and compile caching), cutting startup time from >180s (timeout) to ~15s.

## 4. Community Hot Topics
The most active discussions highlight user struggles with the transition to OpenClaw and local model limitations.

*   **Local Model Tool Calling Failure ([Issue #112](https://github.com/netease-youdao/LobsterAI/issues/112)):**
    *   **Topic:** Users report that while API models (like GPT/Claude) can invoke local skills, local models (via Ollama/Qwen) fail to trigger tool calls via natural language.
    *   **Analysis:** This is a critical pain point for privacy-focused users. It suggests the prompt engineering or tool schema formatting in LobsterAI is currently too specific to proprietary API formats, alienating the local-first user base.
*   **Performance & Latency Concerns ([Issue #400](https://github.com/netease-youdao/LobsterAI/issues/400)):**
    *   **Topic:** Users complaining about "slow speeds" and "unexplained waiting."
    *   **Analysis:** While PR #395 addressed code-side startup latency, users are experiencing UI/Network latency. This aligns with [Issue #370](https://github.com/netease-youdao/LobsterAI/issues/370), where token counting errors block execution.

## 5. Bugs & Stability
Several high-severity bugs have emerged, likely exacerbated by the recent heavy code refactoring.

*   **Critical: Local Models Cannot Execute Skills**
    *   [Issue #112](https://github.com/netease-youdao/LobsterAI/issues/112) & [Issue #405](https://github.com/netease-youdao/LobsterAI/issues/405): Users confirm that Ollama/Qwen models can chat but cannot execute commands (e.g., listing files), whereas cloud models work fine. No fix PR is visible yet.
*   **High: Token Context Error**
    *   [Issue #370](https://github.com/netease-youdao/LobsterAI/issues/370): API Error 400 on simple inputs (e.g., "Hello") regarding token limits (requesting 32k output tokens for 8k input). This indicates a potential logic error in the token parameter generation.
*   **Medium: Environment/Sandbox Startup Failures**
    *   [Issue #402](https://github.com/netease-youdao/LobsterAI/issues/402): On Debian 12, the application exits automatically during initialization. This may be related to the OpenClaw environment setup or missing dependencies in the Linux build.

## 6. Feature Requests & Roadmap Signals
*   **Skill Selector UI:** [Issue #404](https://github.com/netease-youdao/LobsterAI/issues/404) requests the ability to select custom-created skills from the dialog popup. This signals a user desire for better modularity and workflow management.
*   **Third-Party API Compatibility:** [Issue #399](https://github.com/netease-youdao/LobsterAI/issues/399) (Aliyun/GLM compatibility) and [Issue #406](https://github.com/netease-youdao/LobsterAI/issues/406) (Baidu Qianfan) suggest the next version needs robust generic OpenAI-compatible API handling, as current specific adapters are breaking.
*   **Task Continuity:** [Issue #358](https://github.com/netease-youdao/LobsterAI/issues/358) requests better handling of incomplete tasks (auto-resume), a likely candidate for future agent loop improvements.

## 7. User Feedback Summary
Users are currently polarized. **Positive feedback** acknowledges the project's speed and potential (Issue #353). However, **dissatisfaction** is growing regarding:
1.  **"It just works" factor:** The shift to OpenClaw seems to have broken stability for local model users.
2.  **Complexity:** Users are struggling with configuration (Issue #405 mentions config files) and environment setup (Issue #402).
3.  **Reliability:** "Task complete" triggers firing prematurely (Issue #358) erode trust in the agent's autonomous capabilities.

## 8. Backlog Watch
*   **Local Model Incompatibility ([Issue #112](https://github.com/netease-youdao/LobsterAI/issues/112)):** Open since late Feb, updated today. This is a blocker for a significant segment of the open-source community. It requires immediate attention to prompt formatting or tool definition protocols for local LLMs.
*   **Task Execution Completeness ([Issue #358](https://github.com/netease-youdao/LobsterAI/issues/358)):** Frequent reports of the agent halting early. This fundamentally undermines the utility of an "Agent" vs a standard chatbot.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest — 2026-03-14

## 1. Today's Overview
TinyClaw shows **high velocity development activity** with a significant focus on architectural improvements and UX stability. The team shipped version **v0.0.12**, introducing persistent message history and a simplified event stream API. Activity was dominated by core contributor **@jlia0**, who merged 5 substantial PRs addressing memory systems, agent configuration, and CLI stability. The resolution of critical ESM import bugs signals a push toward stabilizing the runtime environment for developers.

## 2. Releases

### **v0.0.12**
- **Type:** Feature Release
- **Highlight:** Introduction of **Agent Message Persistence**.
- **Changes:**
  - Added `agent_messages` SQLite table for durable storage of chat history.
  - Introduced a simplified `agent_message` Server-Sent Event (SSE) that fires once per agent response, simplifying client-side event handling by removing the need to listen to the granular `chain_step` lifecycle.
- **Migration Note:** Developers consuming the SSE stream should migrate to the new `agent_message` event for simpler chat implementations.
- **Link:** [GitHub Release v0.0.12](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.12) (Based on PR #202)

## 3. Project Progress
Significant architectural refactoring occurred today, moving from file-based configurations to in-memory and database-backed systems.

- **Merged PRs (5):**
  - **[PR #209] feat(core): add hierarchical memory system:** Implemented a persistent file-based memory system (markdown + YAML frontmatter) allowing agents to recall knowledge across sessions.
  - **[PR #208] feat(core): pass AGENTS.md as in-memory system prompt:** Refactored system prompts to be built in-memory rather than via disk I/O, reducing latency and file staleness.
  - **[PR #211] refactor: consolidate agent directory provisioning:** Cleaned up technical debt by centralizing provisioning logic and using symlinks for skills, reducing disk usage.
  - **[PR #202] feat(api): add agent message persistence:** (See v0.0.12 release notes).
  - **[PR #206] fix(cli): convert to ESM:** Fixed critical CLI runtime errors by migrating the CLI package from CommonJS to ESM.

- **Open/In-Progress PRs (2):**
  - **[PR #207] feat(agents): add agent configuration page:** A new UI for managing skills, prompts, and heartbeat monitoring.
  - **[PR #212] feat(office): redesign the live office workspace:** A major UX overhaul of the `/office` interface.

## 4. Community Hot Topics
Activity was driven primarily by internal development rather than broad community discussion, but key requests highlight integration needs.

- **[Issue #57] feat: Add Google chat, API, and MCP comms** [(Link)](https://github.com/TinyAGI/tinyclaw/issues/57)
  - **Status:** Open
  - **Analysis:** This feature request for Google Chat/Slack/Teams integration is the most "active" open issue (updated yesterday). It indicates a strong user need for **TinyClaw to act as a centralized hub for external communication platforms**, moving beyond local CLI or web interfaces.

## 5. Bugs & Stability
Critical runtime stability issues were identified and immediately resolved in this cycle.

1.  **[HIGH - FIXED] [Issue #210] ReferenceError: exports is not defined** [(Link)](https://github.com/TinyAGI/tinyclaw/issues/210)
    - **Details:** A high-severity runtime crash affecting the `tinyclaw pairing approve` command.
    - **Status:** CLOSED. While the issue appears closed, the fix likely stems from the ESM migration in **[PR #206]**, which addressed the root causes of module loading failures.
2.  **[HIGH - FIXED] [Issue #205] problem importing @clack/prompts** [(Link)](https://github.com/TinyAGI/tinyclaw/issues/205)
    - **Details:** CLI crash due to incompatibility with `@clack/prompts` v1.x in a CommonJS environment.
    - **Fix:** Resolved via **[PR #206]**, which migrated the CLI to ESM.

## 6. Feature Requests & Roadmap Signals
- **Enhanced Configurability:** **[PR #207]** (Agent Config Page) suggests the next release will focus heavily on user-facing controls for fine-tuning agent behavior without code changes.
- **External Integrations:** **[Issue #57]** signals a demand for multi-platform messaging wrappers. With the core memory and message systems now stabilized (v0.0.12), adding "connectors" for Slack/Teams seems like a logical next step.
- **Visual UX:** **[PR #212]** (Office Redesign) indicates a push to make the "Live Office" workspace a primary interface for interacting with agent swarms.

## 7. User Feedback Summary
- **Pain Point:** Users experienced broken CLI workflows (`pairing approve`) due to Node.js module system conflicts (ESM vs CommonJS).
- **Satisfaction:** The rapid closure of regression bugs (#205, #210) within 24-48 hours suggests a highly responsive maintenance team.
- **Use Case:** Users are looking to integrate TinyClaw into broader workflows (Google Chat/Slack request), viewing it less as a standalone tool and more as an orchestration engine.

## 8. Backlog Watch
- **[Issue #57] Add Google chat, API, and MCP comms:** While updated recently, it remains open. This is a high-value feature for enterprise adoption that warrants prioritization.
- **[PR #207] & [PR #212:** Both are substantial UI/UX PRs currently open. They need review and merging to finalize the "User Experience" phase of the current development sprint.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest (2026-03-14)

## 1. Today's Overview
The Moltis project is currently demonstrating **high velocity** with a strong focus on stability and bug fixing. The maintainers merged 7 PRs while resolving 7 issues within the last 24 hours, resulting in a net stabilization of the codebase. Activity is heavily centered on refining the user experience (onboarding, UI clarity) and fixing platform-specific execution bugs (Apple Container, Telegram integration). No new version was tagged today, but the volume of merged code suggests a patch release is imminent.

## 2. Releases
*   **No new releases** were published in the last 24 hours.
    *   *Note:* With 7 significant fixes merged (including Apple Container fixes and Telegram improvements), the changes are currently sitting in the main branch awaiting a version tag.

## 3. Project Progress
The project saw substantial progress in hardening existing features rather than introducing new major capabilities. Key merged PRs include:

*   **[Docker & Env Config]** PR [#401](https://github.com/moltis-org/moltis/pull/401) introduced generic environment variable support for Docker deployments (`MOLTIS_PROVIDER`/`MOLTIS_API_KEY`), greatly simplifying self-hosting setups.
*   **[Apple Container]** PR [#405](https://github.com/moltis-org/moltis/pull/405) fixed a critical regression where the sandbox failed to start on macOS due to `WORKDIR` errors.
*   **[Telegram Integration]** PR [#404](https://github.com/moltis-org/moltis/pull/404) fixed an issue where invalid HTML caused the Telegram delivery to fall back to raw, unreadable tags; it now strips formatting correctly.
*   **[Local LLM]** PR [#402](https://github.com/moltis-org/moltis/pull/402) fixed documentation/install instructions for QMD, and PR [#408](https://github.com/moltis-org/moltis/pull/408) (open) is adding Vulkan support for GGUF models.
*   **[UX/UI]** PR [#409](https://github.com/moltis-org/moltis/pull/409) clarified the Cron setup interface, and PR [#406](https://github.com/moltis-org/moltis/pull/406) improved password manager support during onboarding.

## 4. Community Hot Topics
*   **[Lark/Feishu Integration]** Issue [#383](https://github.com/moltis-org/moltis/issues/383) is the most active feature request today (👍 2). Users are signaling a strong need for Moltis to support the Lark/Feishu ecosystem, expanding its utility beyond Telegram/Discord into enterprise workspaces.
*   **[Node Confusion]** A cluster of reports (e.g., Issue [#427](https://github.com/moltis-org/moltis/issues/427)) discusses the agent's inability to correctly identify or address nodes when executing commands. This suggests the "multi-node" or "cluster" feature set may have a steep learning curve or a bug in node auto-discovery logic.

## 5. Bugs & Stability
Stability is the primary focus of the current development cycle. Several high-impact bugs were reported and immediately addressed:

1.  **Critical (Fixed): Apple Container Bootstrap** - Issue [#159](https://github.com/moltis-org/moltis/issues/159) reported a total sandbox failure on macOS. **Fixed** by PR [#405](https://github.com/moltis-org/moltis/pull/405).
2.  **High (Open): Security/Privacy Leak** - Issue [#428](https://github.com/moltis-org/moltis/issues/428) reports that full chat history remains accessible via the "context" button even when a "vault is sealed." This represents a potential UI/UX data leak.
3.  **Medium (Fixed): Jinja Template Errors** - Issue [#317](https://github.com/moltis-org/moltis/issues/317) involved errors with Qwen models where system messages were misplaced. **Fixed** by the open PR [#431](https://github.com/moltis-org/moltis/pull/431).
4.  **Medium (Fixed): Cron Tool Failure** - Issue [#430](https://github.com/moltis-org/moltis/issues/430) noted agents could not use cron tools. A fix for related node/tool parameter logic appears in PR [#432](https://github.com/moltis-org/moltis/pull/432).

## 6. Feature Requests & Roadmap Signals
*   **Lark/Feishu Support (#383):** With explicit user upvotes, this is a candidate for the next community contribution or core roadmap item.
*   **Vulkan Support (#408):** An open PR adds Vulkan GGUF support. Once merged, this will significantly broaden hardware acceleration options for local LLM users on non-CUDA/non-Metal setups.
*   **Password Manager Compatibility (#183):** Closed/Fixed. The onboarding flow now correctly handles password fields, signaling a maturation of the first-run user experience.

## 7. User Feedback Summary
Users are actively testing Moltis in complex, multi-platform environments.
*   **Pain Point:** Users running local LLMs (specifically Qwen via llama.cpp) faced friction with template rendering (Jinja errors), highlighting sensitivity to strict message ordering in prompts.
*   **Pain Point:** The distinction between "System Event" and "Agent Turn" in Cron jobs was confusing; users requested clearer labeling.
*   **Adoption:** Users are integrating Moltis into homelab app stores (e.g., Yantra), praising the "single binary" architecture but requesting easier env-var configuration (addressed in #401).

## 8. Backlog Watch
*   **Issue [#428](https://github.com/moltis-org/moltis/issues/428) (Vault Sealing):** This privacy-related bug ("Full chat history available... despite vault is sealed") has 0 comments and needs maintainer triage to confirm if it is a UI visualization bug or a deeper permission logic error.
*   **PR [#418](https://github.com/moltis-org/moltis/pull/418) (Persist Aborted History):** This open PR attempts to save partial chat history on abort. It touches complex state logic and needs careful review before merging.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-03-14

## 1. Today's Overview
CoPaw is experiencing a period of **high-intensity maintenance and expansion** following the recent `v0.0.7` release. The community is highly active, evidenced by 50 updated issues and 45 PRs in the last 24 hours. The focus is split between stabilizing the new version (addressing CPU spikes and Ollama regressions) and aggressively expanding integration capabilities (Nextcloud, WeCom, Mattermost). While user engagement is strong, the volume of new bug reports regarding resource consumption and context management suggests the `v0.0.7` update introduced stability regressions that require immediate patching.

## 2. Releases
**No new releases** were recorded today.
*   **Current Version:** `v0.0.7` (Released recently, referenced in multiple active bugs).
*   **Note:** Given the severity of reported issues (CPU 100%, Ollama disconnections), a patch release `v0.0.8` is likely imminent.

## 3. Project Progress
Today saw **24 merged/closed PRs**, focusing on extensibility and bug fixes:

*   **New Channel Integrations:**
    *   **Nextcloud Talk:** [PR #1460](https://github.com/agentscope-ai/CoPaw/pull/1460) added full webhook support for Nextcloud Talk.
    *   **Mattermost:** [PR #1071](https://github.com/agentscope-ai/CoPaw/pull/1071) introduced Mattermost channel integration.
    *   **WeCom (Enterprise WeChat):** [PR #1267](https://github.com/agentscope-ai/CoPaw/pull/1267) implemented the long-polling smart bot mode for WeCom.
*   **Core & Skills Fixes:**
    *   **Timezone Logic:** [PR #1432](https://github.com/agentscope-ai/CoPaw/pull/1432) (merged) injected UTC time context to fix cron scheduling mismatches.
    *   **UI Duplication:** [PR #1396](https://github.com/agentscope-ai/CoPaw/pull/1396) fixed the issue where built-in skills appeared duplicated in the console.
    *   **Skill Imports:** [PR #1350](https://github.com/agentscope-ai/CoPaw/pull/1350) enabled importing skills directly from LobeHub.

## 4. Community Hot Topics
The most engaging discussions highlight friction between "weak" models and CoPaw's tool-calling requirements, as well as specific channel needs.

*   **[Question] Contextual Time vs. Tool Calling:** [Issue #1346](https://github.com/agentscope-ai/CoPaw/issues/1346) (7 comments, closed).
    *   **Analysis:** Users report that weaker models fail to autonomously call the `get_current_time` tool, leading to scheduling errors. The community debated whether to hardcode time into the system prompt vs. relying on tool use. The resulting [PR #1432](https://github.com/agentscope-ai/CoPaw/pull/1432) suggests a compromise by injecting context.
*   **[Feature] Enterprise WeChat (WeCom) Support:** [Issue #51](https://github.com/agentscope-ai/CoPaw/issues/51) (7 comments).
    *   **Analysis:** A highly requested feature finally seeing progress. Users are actively asking for robust WeCom integration, driving the recent PR activity.
*   **[Feature] Multi-Agent Parallelism:** [Issue #1298](https://github.com/agentscope-ai/CoPaw/issues/1298) (2 comments).
    *   **Analysis:** Users are pushing CoPaw toward multi-agent orchestration (similar to OpenClaw), requesting the ability to run multiple agents simultaneously.

## 5. Bugs & Stability
`v0.0.7` has introduced several critical stability issues, particularly concerning resource management and local models.

*   **Critical: CPU 100% Usage (Ubuntu):** [Issue #1385](https://github.com/agentscope-ai/CoPaw/issues/1385) (6 comments).
    *   **Details:** CPU spikes to 100% permanently after the first message.
    *   **Status:** Author identified `mcp` or `read_file` as potential causes; a PR has been submitted by the user.
*   **High: Ollama Connection & Tool Regression:** [Issue #1416](https://github.com/agentscope-ai/CoPaw/issues/1416) (1 comment, closed).
    *   **Details:** In `v0.0.7`, Ollama models suffer from "amnesia" (loss of context) and fail to call tools.
    *   **Fix:** Addressed by documentation warning in [PR #1433](https://github.com/agentscope-ai/CoPaw/pull/1433), indicating the root cause is likely user-side context length configuration, though the UI behavior remains confusing.
*   **High: Ollama Local Network Failure:** [Issue #1458](https://github.com/agentscope-ai/CoPaw/issues/1458) (1 comment).
    *   **Details:** Cannot connect to Ollama via LAN IP (e.g., `192.168.x.x`), though the browser works. This blocks local network deployments.
*   **Medium: Feishu Message Lag/Duplication:** [Issue #1345](https://github.com/agentscope-ai/CoPaw/issues/1345) (5 comments).
    *   **Details:** Bot replies to "previous" questions, ignoring the current prompt. Likely a race condition or event ordering issue.
*   **Medium: Memory Compactor Hallucinations:** [Issue #1437](https://github.com/agentscope-ai/CoPaw/issues/1437) (1 comment).
    *   **Details:** The summarization component fabricates messages that users never sent, corrupting long-term memory.

## 6. Feature Requests & Roadmap Signals
*   **Enterprise Channel Expansion:** Strong demand for **WeCom** ([Issue #51](https://github.com/agentscope-ai/CoPaw/issues/51)) and **Xiaoyi (Huawei)** platforms ([Issue #1085](https://github.com/agentscope-ai/CoPaw/issues/1085)). With WeCom PRs already merged, **Xiaoyi** is a likely next target.
*   **ACP Protocol:** [Issue #1059](https://github.com/agentscope-ai/CoPaw/issues/1059) requests support for Agent Communication Protocol to integrate with AI coding agents. This signals a move toward developer-tooling ecosystems.
*   **Advanced Skill Management:** Users want the ability to upload custom Python scripts to Skills ([Issue #1316](https://github.com/agentscope-ai/CoPaw/issues/1316)), moving beyond just prompt-based skills.

## 7. User Feedback Summary
*   **Pain Point - Context Management:** Users are struggling with "Token Limit" errors ([Issue #1293](https://github.com/agentscope-ai/CoPaw/issues/1293)) and the "black box" of how Skills handle their own contexts.
*   **Pain Point - Local Model Setup:** Connecting local LLMs (Ollama/Qwen) is still "rough," with users confused by context length settings and offline deployment complexities ([Issue #1453](https://github.com/agentscope-ai/CoPaw/issues/1453)).
*   **Positive Feedback:** The speed of merging channel integrations (Nextcloud, WeCom) is appreciated, but users are hungry for more stability on the core agent loop (memory and tool execution).

## 8. Backlog Watch
*   **Context/Token Issues:** [Issue #1293](https://github.com/agentscope-ai/CoPaw/issues/1293) (Shell/Write tools failing due to token limits) and [Issue #1332](https://github.com/agentscope-ai/CoPaw/issues/1332) (Skill context isolation questions) remain open and active. These require architectural clarification or refactoring.
*   **Silent Stops:** [Issue #1270](https://github.com/agentscope-ai/CoPaw/issues/1270) reports Agents stopping silently without error logs during long tasks. This is dangerous for production reliability and needs maintainer attention.
*   **Console Features:** [Issue #1045](https://github.com/agentscope-ai/CoPaw/issues/1045) (Image upload in Web UI) remains open; as multimodal models become standard, this is becoming a higher priority gap.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest
**Date:** 2026-03-14

## 1. Today's Overview
ZeptoClaw demonstrates high velocity development with intense focus on safety hardening and user experience improvements. The project shows strong maintainer engagement from @qhkm, who closed 6 issues and merged 3 PRs in a single day. Activity centers on making the CLI safer by default while adding long-requested interactive features. The codebase is maturing rapidly with proper safety gates and streaming support. Community contributions are also active with 3 open PRs adding new communication channels.

## 2. Releases
No new releases published today.

## 3. Project Progress

**Merged PRs (3):**
- **[#342](https://github.com/qhkm/zeptoclaw/pull/342) feat: stream by default + response metadata footer** — Major UX improvement: CLI now streams responses token-by-token by default (configurable via `--no-stream`), plus adds a metadata footer showing token count, tool calls, and wall time.
  
- **[#353](https://github.com/qhkm/zeptoclaw/pull/353) feat: interactive approval prompts, streaming parity, safer defaults** — Significant safety milestone: implements TTY-gated inline `[y/N]` approval prompts for dangerous tools, `/trust on|off` slash command for session-scoped bypass, restores hook parity (`before_tool`/`after_tool`/`on_error`) in streaming mode, and hardens defaults away from autonomous mode.

- **[#349](https://github.com/qhkm/zeptoclaw/pull/349) fix: AgentLoop constructors respect config streaming default** — Bugfix ensuring `AgentLoop::new()` and `with_context_builder()` properly read `config.agents.defaults.streaming` instead of hardcoding `false`.

**Issues Closed (6):**
- [#354](https://github.com/qhkm/zeptoclaw/issues/354) — Filesystem safety carve-out scoping
- [#351](https://github.com/qhkm/zeptoclaw/issues/351) — Streaming tool execution parity
- [#350](https://github.com/qhkm/zeptoclaw/issues/350) — Interactive CLI approval flow
- [#348](https://github.com/qhkm/zeptoclaw/issues/348) — Default agent mode hardening
- [#352](https://github.com/qhkm/zeptoclaw/issues/352) — TTY-based trusted session detection
- [#341](https://github.com/qhkm/zeptoclaw/issues/341) — Streaming by default feature

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| **[#356](https://github.com/qhkm/zeptoclaw/pull/356) ACP stdio + HTTP** | New PR by @starsy | Community contributor adding **Agent Client Protocol** support via stdio subprocess spawning and HTTP streaming. Signals demand for ZeptoClaw integration into multi-agent orchestration frameworks. |
| **[#334](https://github.com/qhkm/zeptoclaw/issues/334) Add to Shelldex** | Open, 1 comment | External directory listing request. Indicates growing ecosystem awareness and user desire for discoverability. Low effort, high visibility opportunity. |

**Underlying Need:** Users want ZeptoClaw to integrate with broader AI agent ecosystems and be discoverable in agent directories.

## 5. Bugs & Stability

| Severity | Issue | Status | Details |
|----------|-------|--------|---------|
| **P1-Critical** | [#354](https://github.com/qhkm/zeptoclaw/issues/354) Safety scan scope too broad | **CLOSED** | `write_file`/`edit_file` safety-gate was scanning more content than intended after PR #342. Taint tracking gap identified. Fixed via subsequent commits. |
| **P2-High** | [#351](https://github.com/qhkm/zeptoclaw/issues/351) Streaming path divergence | **FIXED via #353** | `src/agent/loop.rs` streaming path lacked hooks, usage metrics, and proper logging. Restored parity. |
| **P2-High** | [#352](https://github.com/qhkm/zeptoclaw/issues/352) TTY trust gate missing | **FIXED via #353** | `/trust` command could apply to piped/automated runs. Now requires real terminal interactivity. |

**Open Bug:** [#347](https://github.com/qhkm/zeptoclaw/issues/347) appears to be a duplicate/incomplete version of #348 (same title, truncated summary).

## 6. Feature Requests & Roadmap Signals

**Active Open PRs (likely next merge candidates):**
1. **[#356](https://github.com/qhkm/zeptoclaw/pull/356) ACP Protocol Support** — Adds `zeptoclaw acp` subcommand for multi-agent orchestration. Config keys: `channels.acp.http.enabled`. High ecosystem value.

2. **[#355](https://github.com/qhkm/zeptoclaw/pull/355) Image content handling fix** — Addresses image processing in the agent loop.

3. **[#346](https://github.com/qhkm/zeptoclaw/pull/346) Discord channel image fix** — Discord integration ignoring image-only messages.

**Predicted Next Version Features:**
- ACP protocol integration for multi-agent systems
- Improved multimodal (image) support across channels
- Discord channel robustness improvements

## 7. User Feedback Summary

| Category | Signal |
|----------|--------|
| **UX Satisfaction** | Strong positive signal on streaming-by-default (#341, #342) — "biggest perceived performance improvement" |
| **Safety Concerns** | Users/maintainers identified autonomous-by-default as dangerous; now addressed in #353 |
| **Integration Demand** | Active community PRs for ACP protocol (#356) and Shelldex listing (#334) show desire for ecosystem integration |
| **Multimodal Needs** | Two open PRs (#346, #355) address image handling gaps, indicating real-world usage with visual content |

## 8. Backlog Watch

| Item | Urgency | Reason |
|------|---------|--------|
| **[#334](https://github.com/qhkm/zeptoclaw/issues/334) Shelldex submission** | Low | Quick win for visibility. Requires only submission to external directory. |
| **[#347](https://github.com/qhkm/zeptoclaw/issues/347) Duplicate bug report** | Low | Appears to be malformed duplicate of #348. Should be closed as duplicate. |
| **[#356](https://github.com/qhkm/zeptoclaw/pull/356) ACP implementation** | Medium | Large feature PR from community contributor. Needs thorough review for security implications of stdio/HTTP channels. |
| **[#346](https://github.com/qhkm/zeptoclaw/pull/346) + [#355](https://github.com/qhkm/zeptoclaw/pull/355) Image fixes** | Medium | Both address multimodal gaps. Should be prioritized for comprehensive image support. |

---

**Project Health Indicator:** 🟢 **Active & Healthy** — High merge velocity, safety-first mindset, active community contributions, responsive maintainer engagement.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

No activity in the last 24 hours.

</details>