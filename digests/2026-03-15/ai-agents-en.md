# OpenClaw Ecosystem Digest 2026-03-15

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-03-14 22:01 UTC

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

# OpenClaw Project Digest: 2026-03-15

## 1. Today's Overview
OpenClaw is currently experiencing **extremely high volatility** following the `v2026.3.13` release, with 500 issues and 500 PRs updated in the last 24 hours alone. The project is in a **critical stabilization phase**, as the recent release introduced significant regressions in memory management and core tool reliability. While developer activity is intense (90 merged PRs), the ratio of open issues (452) to closed (48) suggests the new version has outpaced the maintainer team's capacity to triage incoming bug reports. The community is actively engaged but frustrated by stability dips in the `2026.3.x` branch.

## 2. Releases

### **v2026.3.13-1 (Recovery Release)**
*   **Type:** Patch / Recovery
*   **Notes:** This release serves as a hotfix to restore the broken release path for `v2026.3`. Due to GitHub's immutable tags, the version was bumped to `-1`. The underlying npm package remains `2026.3.13`.
*   **Changes:** No new functional changes; strictly a deployment pipeline fix.

### **v2026.3.13-beta.1**
*   **Type:** Pre-release
*   **Changes:**
    *   **Android/Chat Settings:** Redesign of the chat settings sheet.
    *   **macOS:** Assets are built against stable `2026.3.13` for reuse.

## 3. Project Progress
Despite the turmoil, significant engineering work was merged (90 PRs), focusing on architectural refactoring and stability fixes:

*   **Browser & MCP Architecture:** Major refactoring in PR [#46596](https://github.com/openclaw/openclaw/pull/46596) simplifies the browser profile management by removing auto-creation of `chrome-relay`, consolidating on the `user` profile for Chrome MCP. This aims to reduce configuration complexity for Linux/Docker environments.
*   **Agent Orchestration:** Merged PR [#40176](https://github.com/openclaw/openclaw/pull/40176) fixed a critical logic error where sub-agents spawned via `sessions_spawn` inherited the caller's workspace instead of the target agent's workspace.
*   **Slack Mux Integration:** PR [#45132](https://github.com/openclaw/openclaw/pull/45132) introduces a new `mux` receiver mode, enabling multi-gateway Slack deployments—a key feature for enterprise scaling.
*   **UI/UX Fixes:** PR [#46594](https://github.com/openclaw/openclaw/pull/46594) fixed a frustrating UI bug where manual scrolling was overridden by auto-follow during streaming.
*   **Sub-agent Backend:** PR [#46586](https://github.com/openclaw/openclaw/pull/46586) added support for external worker backends (e.g., "loa") for `sessions_spawn`, moving sub-agents out of process to improve stability.

## 4. Community Hot Topics
The community is currently focused on the stability of the `2026.3.x` release line.

1.  **Critical UI Failure ([#45471](https://github.com/openclaw/openclaw/issues/45471) - 66 comments):** Users are reporting that the Chat UI fails to open after the latest update, rendering the application unusable for many. This is the most active discussion today.
2.  **Tool Reliability Regression ([#45074](https://github.com/openclaw/openclaw/issues/45074) - 19 comments):** A "Critical" issue where core tools (`read`, `exec`) intermittently return "Tool not found" after upgrading to `2026.3.11+`.
3.  **Memory/Performance Collapse ([#45064](https://github.com/openclaw/openclaw/issues/45064) - 17 comments):** Users on `2026.3.12` are experiencing JavaScript heap OOM crashes even on simple commands like `gateway status`.
4.  **WhatsApp Integration Breakage ([#45171](https://github.com/openclaw/openclaw/issues/45171) - 15 comments):** Outbound WhatsApp messages via CLI/Tools are failing with "No active WhatsApp Web listener," though auto-replies work fine.

## 5. Bugs & Stability
The `2026.3.12`/`2026.3.13` updates introduced several high-severity regressions affecting core functionality.

| Severity | Issue | Description | Status/Fix |
| :--- | :--- | :--- | :--- |
| **Critical** | **[#45064](https://github.com/openclaw/openclaw/issues/45064)** | **Memory Leak/OOM:** CLI crashes on basic commands due to heap exhaustion. | **Open** - Under investigation |
| **Critical** | **[#45471](https://github.com/openclaw/openclaw/issues/45471)** | **UI Crash:** Chat UI not opening post-update. | **Open** |
| **High** | **[#45074](https://github.com/openclaw/openclaw/issues/45074)** | **Tool Dispatch:** Intermittent "Tool not found" errors. | **Closed** (likely fixed in .13, but users still reporting issues) |
| **High** | **[#45227](https://github.com/openclaw/openclaw/issues/45227)** | **Mistral API:** 422 status code errors with empty bodies. | **Open** |
| **Medium** | **[#45513](https://github.com/openclaw/openclaw/issues/45513)** | **UI Logic:** Chat input hidden behind context warning overlay. | **Fix Merged** in [#46606](https://github.com/openclaw/openclaw/pull/46606) |
| **Medium** | **[#45759](https://github.com/openclaw/openclaw/issues/45759)** | **Gateway Crash:** Telegram typing keepalive loop lacks circuit breaker. | **Open** |

**Analysis:** The volume of "Regression" tagged issues suggests that recent optimizations (potentially related to context handling or gateway lifecycle) created cascading instability. Users on 4GB RAM servers are specifically struggling with the new memory footprint ([#41778](https://github.com/openclaw/openclaw/issues/41778)).

## 6. Feature Requests & Roadmap Signals
*   **Roadmap Signal (Scaling):** The merge of Slack `mux` support ([#45132](https://github.com/openclaw/openclaw/pull/45132)) indicates a strategic push toward multi-gateway and high-availability deployments.
*   **Roadmap Signal (Modularity):** Support for external worker backends for sub-agents ([#46586](https://github.com/openclaw/openclaw/pull/46586)) suggests a move toward a distributed agent architecture rather than monolithic gateway processes.
*   **Feature Request:** Users are requesting the ability to set stable IDs for cron jobs ([#40218](https://github.com/openclaw/openclaw/pull/40218)) to support "config-as-code" workflows.
*   **Prediction:** The next patch version (likely `v2026.3.14`) will almost certainly focus exclusively on addressing the OOM issues and tool dispatch instabilities before adding new features.

## 7. User Feedback Summary
*   **Pain Points:** Users are expressing frustration with "death spirals" where the agent retries failed tasks with oversized context windows until crashing ([#46417](https://github.com/openclaw/openclaw/pull/46417)). The breaking of the WhatsApp outbound path has also impacted production bots relying on OpenClaw for messaging.
*   **Sentiment:** The sentiment is currently **cautious/negative** regarding the latest stable release. Users actively recommend downgrading to `2026.3.8` or earlier to avoid OOM and tool dispatch errors.
*   **Positive Note:** The speed of UI fixes (e.g., scroll behavior, context banners) is being appreciated, and the active PR queue shows maintainers are aggressively attacking the backlog.

## 8. Backlog Watch
*   **Long-Standing Bug:** Issue **[#7116](https://github.com/openclaw/openclaw/issues/7116)** (Telegram bot cannot receive PDF attachments) has been open since February and remains unresolved. It gained traction again today (+2 votes) but needs maintainer assignment.
*   **Architectural Debt:** Issue **[#12092](https://github.com/openclaw/openclaw/issues/12092)** regarding skills added post-session creation not being visible without a restart highlights a stale prompt caching issue that affects workflow flexibility.
*   **Stale PR:** PR **[#34942](https://github.com/openclaw/openclaw/pull/34942)** (Batch Telegram attachments) has been open since March 4th. With the current focus on stability, this feature improvement risks being delayed.

---

## Cross-Ecosystem Comparison

# AI Agent & Personal Assistant Ecosystem Report: 2026-03-15

## 1. Ecosystem Overview

The open-source AI agent landscape is experiencing a **high-velocity, high-volatility growth phase** characterized by aggressive feature shipping and, in several cases, significant stability regressions. Projects are bifurcating into two distinct tiers: "platform" frameworks (OpenClaw, Zeroclaw, CoPaw) rapidly expanding channel integrations and enterprise features, and "specialized" runtimes (PicoClaw, ZeptoClaw, NanoClaw) focusing on architectural refinements like event-driven loops and containerized security. A clear industry-wide pivot is underway from single-agent chatbots toward **multi-agent architectures, advanced memory systems (RAG/hybrid search), and "self-evolving" autonomy**, with security hardening emerging as a critical competitive differentiator.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health/Status |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | v2026.3.13-1 | ⚠️ **Volatile** - Critical regressions, intense dev activity |
| **NanoBot** | 27 | 56 | None | 🟢 **Active** - High velocity, stable development |
| **ZeroClaw** | 32 | 50 | **v0.3.0** | 🟢 **Excellent** - High merge rate (41/9), stable release |
| **PicoClaw** | 25 | 65 | Nightly | 🟢 **Active** - Refactoring & security hardening |
| **NanoClaw** | High | 46 Open | None | 🟡 **Bottlenecked** - High inflow, review queue growing |
| **IronClaw** | 34 | 16 | None | 🟢 **Stable** - Production hardening focus |
| **LobsterAI** | 3 | 3 | None | 🟡 **Moderate** - Focused on OpenClaw integration |
| **TinyClaw** | 1 | 8 | **v0.0.13** | 🟢 **Active** - UI overhaul, rebranding |
| **Moltis** | 11 | 9 | None | 🟢 **Healthy** - Steady fixes, sustained momentum |
| **CoPaw** | 50 | 29 | None | 🟢 **Active** - High closure rate, community-driven |
| **ZeptoClaw** | Medium | High | None | 🟢 **Robust** - Balanced feature/security focus |
| **EasyClaw** | 0 | 0 | None | 🔴 **Inactive** - No activity |

## 3. OpenClaw's Position

**Advantages vs Peers:**
*   **Ecosystem Gravity:** As the core reference, OpenClaw has the largest community engagement (500+ issues/PRs daily), making it the de-facto standard for feature discovery.
*   **Enterprise Features:** The Slack `mux` receiver and sub-agent worker backends place it ahead in high-availability and distributed architecture readiness compared to smaller peers (NanoBot, ZeptoClaw).

**Technical Approach Differences:**
*   **Contrast with ZeroClaw:** OpenClaw prioritizes feature velocity and flexibility but currently suffers from stability issues (OOM, tool dispatch). ZeroClaw, conversely, enforces a strict "security-first" architecture (causing usability friction) but maintains a cleaner, more stable merge queue (41 merged vs 9 open).
*   **Contrast with PicoClaw/ZeptoClaw:** OpenClaw remains a monolithic gateway, whereas PicoClaw is actively refactoring into an event-driven architecture, and NanoClaw is pursuing a "tiny auditable core" with containerized isolation.

**Community Size Comparison:**
*   OpenClaw operates at a scale ~10x larger than nearest peers (NanoBot, CoPaw). However, this scale has become a liability; the ratio of open issues (452) to closed (48) indicates maintainers are overwhelmed, whereas ZeroClaw and IronClaw demonstrate superior triage efficiency.

## 4. Shared Technical Focus Areas

| Focus Area | Requirement | Projects Involved | Specific Needs |
| :--- | :--- | :--- | :--- |
| **Multi-Agent Systems** | Orchestration & Visibility | **OpenClaw, NanoBot, ZeroClaw, PicoClaw** | "Black box" sub-agents are a top complaint; need for `SpawnStatus` tools, context isolation, and inter-agent channels. |
| **Security Hardening** | "Secure by Default" | **PicoClaw, NanoClaw, CoPaw, ZeroClaw** | Disabling remote exec by default; sandboxing (bubblewrap/containers); preventing symlink escapes and destructive commands. |
| **Memory Evolution** | Persistence & RAG | **NanoClaw, Moltis, TinyClaw, LobsterAI** | Moving from simple context windows to LanceDB (hybrid search), self-writing `USER.md` profiles, and hierarchical memory. |
| **Channel Integration** | Enterprise & Social | **NanoBot, CoPaw, PicoClaw** | Intense focus on Feishu/Lark, QQ, and WhatsApp; specifically fixing file upload bugs and formatting issues in these APIs. |
| **Local LLM Support** | Offline/Privacy | **LobsterAI, Moltis, CoPaw** | Reliable tool calling for local models (Ollama, GGUF); fixing "hallucinated tool calls" and structured output parsing. |

## 5. Differentiation Analysis

*   **OpenClaw (The Monolithic Hub):** Focuses on being the comprehensive reference implementation with the widest feature set (MCP, Slack Mux, WhatsApp). *Best for:* Users needing maximum integration options immediately, accepting higher instability risk.
*   **ZeroClaw (The Security Platform):** Differentiates via rigorous security and a stable release engineering process (Channel Matrix tests). *Best for:* Enterprise deployments where safety and auditability outweigh ease of use.
*   **NanoBot / NanoClaw (The Research/Specialist Runtimes):** Focus on "Team Mode," self-evolution, and minimal attack surfaces. *Best for:* Developers building custom multi-agent systems and researching agent autonomy.
*   **TinyClaw / Moltis (The User-First Tools):** Focus on UI/UX (TinyOffice), easy onboarding, and session persistence. *Best for:* End-users wanting a local personal assistant rather than a dev framework.
*   **IronClaw (The Production Hardener):** Prioritizes eliminating `panic!` paths and optimizing database queries. *Best for:* Infrastructure engineers requiring high reliability.

## 6. Community Momentum & Maturity

*   **Tier 1 (Rapid Iteration/High Scale):** **OpenClaw, CoPaw.** High velocity but showing signs of strain. OpenClaw is currently in a negative feedback loop (regressions > fixes), while CoPaw relies on a high volume of community patches to maintain stability.
*   **Tier 2 (Stabilizing & Professionalizing):** **ZeroClaw, IronClaw.** These projects show the best health signals—high merge rates, systematic testing (Channel Matrix, Staging CI), and focused roadmaps. They are transitioning from "experimental" to "production-ready."
*   **Tier 3 (Architectural R&D):** **PicoClaw, NanoClaw, NanoBot.** These groups are deep in refactoring (event loops, memory systems). Activity is high, but releases are delayed pending these major structural changes.
*   **Tier 4 (Niche/Stalled):** **LobsterAI, EasyClaw.** Low activity or dependency on core projects (LobsterAI integrating OpenClaw memory) rather than independent core innovation.

## 7. Trend Signals

1.  **The "Context Crisis" & Memory Shift:** The industry is moving away from purely sliding-window context. There is a surge in demand for **structured, persistent memory** (`USER.md`, LanceDB, hierarchical profiles) to prevent agents from "forgetting" or "hallucinating" during long sessions (seen in NanoClaw, Moltis, TinyClaw).
2.  **Security Usability Gap:** A major conflict is emerging between "security-first" (ZeroClaw, PicoClaw) and "ease-of-use" (OpenClaw). Users are frustrated by secure defaults that render agents unable to perform basic tasks (file access, shell exec) without complex configuration. The winning architecture will likely be **tiered security profiles** (e.g., "Developer Mode" vs "Production Mode").
3.  **Sub-Agent Observability is Non-Negotiable:** As multi-agent systems (Team Mode, ACP protocol) gain traction, the "black box" problem is the #1 blocker. Developers demand visibility into sub-agent reasoning, leading to rapid adoption of event hooks and status tools (PicoClaw, ZeptoClaw).
4.  **Platform Divergence (Protocol Wars):** Fragmentation is increasing. ZeroClaw is building comprehensive channel test suites, ZeptoClaw is adopting ACP (Agent Client Protocol), and OpenClaw is doubling down on MCP (Model Context Protocol). Interoperability between these agent frameworks is becoming a strategic concern.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-03-15

## 1. Today's Overview
NanoBot is demonstrating **very high active development velocity** with 27 updated issues and 56 pull requests in the last 24 hours. The community is highly engaged in expanding channel support (WhatsApp, QQ, Feishu) and enhancing multi-agent capabilities. The maintainer team is actively merging bug fixes while reviewing significant architectural additions like "Team Mode" and sandbox security improvements. No new official release was tagged today, suggesting current development is focused on stabilizing the `nightly` branch for a future `v0.1.5` release.

## 2. Releases
**No new releases** were recorded today. The project appears to be in an active development phase following `v0.1.4.post4`, with efforts concentrated on merging feature PRs into the main branch.

## 3. Project Progress
Significant advancements were made in **channel integrations, security, and agent architecture**:
*   **Security (Merged/Closed):** PR [#1940](https://github.com/HKUDS/nanobot/pull/1940) introduced `bubblewrap` sandboxing for exec calls (fixing #1873), and PR [#1684](https://github.com/HKUDS/nanobot/pull/1684) fixed a cron store path vulnerability.
*   **Core Stability (Merged/Closed):** PR [#1796](https://github.com/HKUDS/nanobot/pull/1796) fixed media filename collisions in Telegram, and PR [#2024](https://github.com/HKUDS/nanobot/pull/2024) fixed agent loops caused by empty LLM responses.
*   **New Features (Open/Pending):** Major PRs opened include [#2013](https://github.com/HKUDS/nanobot/pull/2013) (Nano Team Mode for multi-agent collaboration), [#2016](https://github.com/HKUDS/nanobot/pull/2016) (NapCat QQ support), and [#2002](https://github.com/HKUDS/nanobot/pull/2002) (Inter-agent communication channel).

## 4. Community Hot Topics
The most active discussions center on **usability and multi-agent observability**:
*   **Issue [#1955](https://github.com/HKUDS/nanobot/issues/1955)** (10 comments): Users are demanding visibility into "sub-agent" execution processes. Currently, sub-agents act as black boxes, hindering debugging and trust. This signals a strong need for better agent orchestration tooling.
*   **Issue [#1692](https://github.com/HKUDS/nanobot/issues/1692)** (6 comments): Telegram users continue to report duplicate message rendering (one raw, one Markdown), causing confusion in chat interfaces.
*   **PR [#2013](https://github.com/HKUDS/nanobot/pull/2013)**: The proposal for "Nano Team Mode" has excited developers looking for autonomous multi-agent collaboration frameworks.

## 5. Bugs & Stability
Several high-impact bugs affecting user experience were reported:
1.  **Critical Logic Blockers:**
    *   **Issue [#1174](https://github.com/HKUDS/nanobot/issues/1174)**: Memory consolidation failure forces users to restart sessions. *(Mitigation: PR [#1961](https://github.com/HKUDS/nanobot/pull/1961) proposes async background consolidation).*
    *   **Issue [#1765](https://github.com/HKUDS/nanobot/issues/1765)**: Source code upgrade path from `post3` to `post4` is broken.
2.  **Channel/Integration Bugs:**
    *   **Issue [#1998](https://github.com/HKUDS/nanobot/issues/1998)**: Incompatibility with "coder" models (GLM5, Qwen3.5) causing `function.arguments` format errors. *(Fix: PR [#1989](https://github.com/HKUDS/nanobot/pull/1989) adds fallback XML parsing).*
    *   **Issue [#2003](https://github.com/HKUDS/nanobot/issues/2003)**: QQ channel fails to send files.
    *   **Issue [#2007](https://github.com/HKUDS/nanobot/issues/2007)**: Feishu channel crashes after long conversations due to orphaned tool messages. *(Fix: PR [#2015](https://github.com/HKUDS/nanobot/pull/2015) fixes history slicing).*

## 6. Feature Requests & Roadmap Signals
Recent activity suggests the following roadmap priorities:
*   **Multi-Agent & Observability:** Strong push for sub-agent visibility ([#1955](https://github.com/HKUDS/nanobot/issues/1955)) and inter-agent communication ([#2002](https://github.com/HKUDS/nanobot/pull/2002)).
*   **UX & Onboarding:** Introduction of an interactive configuration wizard (`nanobot onboard`) in PR [#2006](https://github.com/HKUDS/nanobot/pull/2006) and Issue [#2018](https://github.com/HKUDS/nanobot/issues/2018).
*   **Cost Control:** Request for usage/token logging ([#2020](https://github.com/HKUDS/nanobot/issues/2020)) is addressed by PR [#2022](https://github.com/HKUDS/nanobot/pull/2022).
*   **Flexibility:** Requests for skill toggling ([#1932](https://github.com/HKUDS/nanobot/issues/1932)) and multiple custom model profiles ([#1991](https://github.com/HKUDS/nanobot/issues/1991)).

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by "black box" sub-agents and fragile memory consolidation that blocks new sessions. Upgrade consistency (source vs. package) is also a concern.
*   **Use Cases:** Users are actively deploying NanoBot on **QQ and Feishu** for personal assistance and attempting to connect it to local LLMs (Ollama/Qwen) for cost savings, though compatibility remains spotty.
*   **Satisfaction:** High enthusiasm for the project's velocity and the new `onboard` wizard, but stability on non-OpenAI models needs improvement.

## 8. Backlog Watch
*   **Issue [#1174](https://github.com/HKUDS/nanobot/issues/1174) (Memory Consolidation):** Open since Feb 25, this critical bug is blocking users. Needs urgent review/merge of PR [#1961](https://github.com/HKUDS/nanobot/pull/1961).
*   **PR [#126](https://github.com/HKUDS/nanobot/pull/126) (Docker Actions):** Open since Feb 5, this CI/CD improvement has not been merged, potentially stalling official Docker image distribution.
*   **Issue [#1829](https://github.com/HKUDS/nanobot/issues/1829) (Docker Command Persistence):** Commands fail to persist/work in Docker environments, indicating a potential volume mounting or state management issue in the Docker setup.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-03-15

## 1. Today's Overview

ZeroClaw demonstrates **exceptionally high velocity** today, marking a major milestone with the release of **v0.3.0**. The project saw **41 PRs merged** against only 9 remaining open, indicating a highly efficient review and deployment pipeline. Activity was dominated by hardening the platform's stability—fixing critical issues with the Anthropic provider, web dashboard, and installation scripts—while simultaneously shipping a comprehensive channel integration test suite. The ratio of closed to open issues (20:12) suggests active maintenance, though several new high-priority bugs emerged alongside the release.

---

## 2. Releases

### **v0.3.0** (Stable)
**Key Changes:**
- **Channel Matrix Test Suite**: 50 new integration tests covering the full `Channel` trait contract across all 16 supported platforms (Discord, Slack, Telegram, Matrix, Feishu, WeCom, Signal, etc.). Validates identity semantics, threading, drafts, reactions, pinning, and concurrency.
- **CI Automation**: Auto-sync workflow for README "What's New" and "Contributors" sections on release.
- **Crates.io Publishing**: Automated publish workflow and package configuration.

### **v0.2.1** (Previous Stable)
Notable features now in stable:
- `tool_filter_groups` for per-turn MCP tool schema filtering
- Interactive session state persistence and recovery (支持交互会话状态持久化与恢复)
- WeCom (WeChat Enterprise) Bot Webhook channel
- `ack_reactions` channel configuration

**Migration Note**: No breaking changes reported between v0.2.x → v0.3.0, but users building from source with `--features channel-matrix` must use Rust 1.94+ with increased recursion limit.

---

## 3. Project Progress

**Merged PR Highlights (41 merged today):**

| PR | Area | Summary |
|---|---|---|
| [#3507](https://github.com/zeroclaw-labs/zeroclaw/pull/3507) | Channels | 50 comprehensive channel matrix tests + v0.2.2 bump |
| [#3505](https://github.com/zeroclaw-labs/zeroclaw/pull/3505) | CI | Auto-sync README What's New and Contributors on release |
| [#3501](https://github.com/zeroclaw-labs/zeroclaw/pull/3501) | Provider | Merge consecutive same-role messages to prevent Anthropic 500 errors |
| [#3510](https://github.com/zeroclaw-labs/zeroclaw/pull/3510) | Dashboard | Fix web dashboard 404 on static assets and SPA fallback |
| [#3511](https://github.com/zeroclaw-labs/zeroclaw/pull/3511) | Channel | Wire Signal channel into scheduled announcement delivery |
| [#3512](https://github.com/zeroclaw-labs/zeroclaw/pull/3512) | Build | Increase recursion limit for matrix-sdk 0.16 on Rust 1.94+ |
| [#3515](https://github.com/zeroclaw-labs/zeroclaw/pull/3515) | Provider | Skip empty text content blocks in Anthropic API requests |
| [#3514](https://github.com/zeroclaw-labs/zeroclaw/pull/3514) | Install | Fix /dev/stdin permission denied in guided installer |
| [#3516](https://github.com/zeroclaw-labs/zeroclaw/pull/3516) | Docs | Remove stale onboarding flags after CLI changes |
| [#3503](https://github.com/zeroclaw-labs/zeroclaw/pull/3503) | CI | Bump Docker timeout to 60m, skip duplicate crates.io publish |

**Open PRs of Interest:**
- [#3506](https://github.com/zeroclaw-labs/zeroclaw/pull/3506) — Google Vertex AI Provider support (enterprise Gemini)
- [#3400](https://github.com/zeroclaw-labs/zeroclaw/pull/3400) — LinkedIn tool, WhatsApp voice notes, Anthropic OAuth fix

---

## 4. Community Hot Topics

| Issue | Comments | Engagement | Theme |
|---|---|---|---|
| [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) | 35 | 👍 3 | **Security vs Usability** — User frustration that aggressive security defaults make ZeroClaw unusable as anything beyond a chatbot. Requests "full permission unlock" mode for personal/hobbyist use. |
| [#1857](https://github.com/zeroclaw-labs/zeroclaw/issues/1857) | 5 | — | **Environment Variables** — Agent cannot access env vars in shell/http_request tools within Docker. |
| [#2494](https://github.com/zeroclaw-labs/zeroclaw/issues/2494) | 5 | — | **Feishu Channel** — Connection failures due to WebSocket config issues. |
| [#1889](https://github.com/zeroclaw-labs/zeroclaw/issues/1889) | 4 | — | **Skills Security** — Shell scripts in skills blocked with no config option to allow. |

**Analysis**: The #1478 debate highlights a core tension—ZeroClaw's security-first design alienates casual users who want a "just works" experience. Competitors like OpenClaw are perceived as more flexible. A tiered security model or "developer mode" toggle could address this without compromising enterprise safety.

---

## 5. Bugs & Stability

**Critical (S0/S1) — Fixed Today:**
| Issue | Severity | Status | Fix PR |
|---|---|---|---|
| [#3493](https://github.com/zeroclaw-labs/zeroclaw/issues/3493) — Anthropic 500 errors | S1 | CLOSED | [#3501](https://github.com/zeroclaw-labs/zeroclaw/pull/3501), [#3515](https://github.com/zeroclaw-labs/zeroclaw/pull/3515) |
| [#3454](https://github.com/zeroclaw-labs/zeroclaw/issues/3454), [#3508](https://github.com/zeroclaw-labs/zeroclaw/issues/3508) — Web Dashboard 404 | S2 | CLOSED | [#3510](https://github.com/zeroclaw-labs/zeroclaw/pull/3510) |
| [#3476](https://github.com/zeroclaw-labs/zeroclaw/issues/3476) — Signal channel can receive but not send | S1 | CLOSED | [#3511](https://github.com/zeroclaw-labs/zeroclaw/pull/3511) |
| [#3468](https://github.com/zeroclaw-labs/zeroclaw/issues/3468) — matrix-sdk build failure on Rust 1.94+ | S2 | CLOSED | [#3512](https://github.com/zeroclaw-labs/zeroclaw/pull/3512) |

**Critical (S0/S1) — Still Open:**
| Issue | Severity | Description |
|---|---|---|
| [#3491](https://github.com/zeroclaw-labs/zeroclaw/issues/3491) | S0 | Nextcloud Talk channel still broken (regression from #2698) |
| [#3460](https://github.com/zeroclaw-labs/zeroclaw/issues/3460) | S0 | Context window exceeded on Feishu + Zhipu GLM-4.5-Air |
| [#3487](https://github.com/zeroclaw-labs/zeroclaw/issues/3487) | S1 | Channel-driven runs bypass ApprovalManager (security gap) |
| [#3477](https://github.com/zeroclaw-labs/zeroclaw/issues/3477) | S1 | Matrix replies silently drop due to channel key mismatch |
| [#3513](https://github.com/zeroclaw-labs/zeroclaw/issues/3513) | S3 | Agent sends multiple messages instead of single consolidated response |

**Installation/Docs Issues:**
- [#3463](https://github.com/zeroclaw-labs/zeroclaw/issues/3463) — install.sh 404 from zeroclawlabs.ai domain
- [#3464](https://github.com/zeroclaw-labs/zeroclaw/issues/3464) — Homebrew service fails on first start (missing /opt/homebrew/var/zeroclaw)
- [#3466](https://github.com/zeroclaw-labs/zeroclaw/issues/3466) — Homebrew workspace path mismatch

---

## 6. Feature Requests & Roadmap Signals

**User-Requested Features:**
| Issue | Request | Likelihood |
|---|---|---|
| [#3502](https://github.com/zeroclaw-labs/zeroclaw/issues/3502) | Real Multi-Agent System with Context Engineering (per-agent skill isolation, primary/secondary folders) | High — detailed spec provided, aligns with v0.3.x direction |
| [#3478](https://github.com/zeroclaw-labs/zeroclaw/issues/3478) | SQLite memory 9-stage scoring pipeline + 3-tier lifecycle management | Medium — zero-dependency proposal, well-specified |
| [#1458](https://github.com/zeroclaw-labs/zeroclaw/issues/1458) | Local CA certificate support for custom inference providers | Medium — enterprise use case |
| [#1800](https://github.com/zeroclaw-labs/zeroclaw/issues/1800) | Configurable allowlist (CIDR/domain) for local/overlay network access | Medium — addresses TUN/fake-IP scenarios |
| [#3093](https://github.com/zeroclaw-labs/zeroclaw/issues/3093) | Dynamic Node Discovery (OpenClaw-compatible peripheral devices) | Low — requires architectural changes |

**Predictions for v0.3.1/v0.4.0:**
1. **Multi-agent context isolation** — Active community PR discussion
2. **Google Vertex AI support** — PR [#3506](https://github.com/zeroclaw-labs/zeroclaw/pull/3506) pending review
3. **Security tier simplification** — Response to #1478 backlash

---

## 7. User Feedback Summary

**Pain Points:**
1. **Security Complexity**: Users find security configuration overwhelming and overly restrictive. One user stated ZeroClaw is "so secure it can only be a chatbot" (#1478).
2. **Channel Reliability**: Feishu, Nextcloud Talk, Signal, and Matrix all reported issues today—channel integrations remain a stability hotspot.
3. **Installation Friction**: Multiple 404s, Docker config issues, and Homebrew path mismatches reported.
4. **Anthropic Provider Instability**: Multiple 500/400 errors due to empty content blocks and consecutive same-role messages (now fixed).

**Positive Signals:**
- Strong community engagement on roadmap features (#3502 multi-agent proposal)
- Fast maintainer response—issues opened and closed same-day
- Claude Opus 4.6 credited as contributor, indicating AI-assisted development

**Use Cases Emerging:**
- Enterprise chatbot deployment via WeCom/Feishu
- Personal AI assistant with Telegram/Matrix
- Multi-model routing with local inference providers

---

## 8. Backlog Watch

| Item | Type | Status | Concern |
|---|---|---|---|
| [#1889](https://github.com/zeroclaw-labs/zeroclaw/issues/1889) | Feature | OPEN (Feb 26) | Shell scripts in skills blocked—no config override. Blocks community skill sharing. |
| [#1458](https://github.com/zeroclaw-labs/zeroclaw/issues/1458) | Feature | OPEN (Feb 23) | Local CA certs for enterprise inference endpoints. |
| [#1800](https://github.com/zeroclaw-labs/zeroclaw/issues/1800) | Enhancement | OPEN (Feb 25) | URL validation allowlist for internal networks. |
| [#3093](https://github.com/zeroclaw-labs/zeroclaw/issues/3093) | Feature | OPEN (Mar 10) | OpenClaw node compatibility—strategic ecosystem question. |
| [#3400](https://github.com/zeroclaw-labs/zeroclaw/pull/3400) | PR | OPEN (Mar 13) | LinkedIn + WhatsApp voice + Anthropic OAuth fix—needs review. |

**Recommendation**: Prioritize #1889 (skills security bypass) to address the #1478 usability complaints. The tension between security and usability is the loudest community signal right now.

---

*Digest generated from 32 issues and 50 PRs updated on 2026-03-15.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-03-15

## 1. Today's Overview
The PicoClaw project is currently undergoing a **high-intensity development phase**, evidenced by significant activity in both Issues (25) and Pull Requests (65) within the last 24 hours. The release of `v0.2.3-nightly` indicates an imminent stable release, serving as a candidate for validation. Development is heavily focused on **architectural refactoring** of the agent loop to support event-driven hooks and "steering," alongside a major push for **security hardening** regarding default configurations and file permissions. The community is highly active in expanding provider support (Azure OpenAI, Kimi) and fixing channel-specific bugs (Feishu, WhatsApp).

## 2. Releases
### **Nightly Build: v0.2.3-nightly.20260314**
- **Status**: Automated build (Use with caution).
- **Changes**: Includes all changes merged into `main` up to commit `c68b4f39`.
- **Migration Note**: Users testing this build should be aware of potential instabilities in the new agent loop architecture and security configuration defaults.
- **Link**: [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)

## 3. Project Progress
**Security Hardening (Major Theme):**
- A series of PRs by @yzxlr have been opened or merged to tighten security defaults:
  - **Merged/Fixed**: [PR #1576](https://github.com/sipeed/picoclaw/pull/1576) (fix(config): disable remote exec by default) closes the vulnerability where remote channels could execute shell commands by default.
  - **Open/Fix**: [PR #1580](https://github.com/sipeed/picoclaw/pull/1580) (fix(tools): block symlink operand escapes in exec) addresses directory traversal via symlinks.
  - **Open/Fix**: [PR #1572](https://github.com/sipeed/picoclaw/pull/1572) (fix(memory): tighten jsonl session store permissions) restricts session file permissions to `0600`.

**New Features & Enhancements:**
- **Agent Steering**: [PR #1517](https://github.com/sipeed/picoclaw/pull/1517) introduces the ability to redirect or stop the agent during tool execution, a critical UX improvement.
- **Provider Expansion**:
  - [PR #1422](https://github.com/sipeed/picoclaw/pull/1422) (Closed/Merged) adds support for **Azure OpenAI**.
  - [PR #1575](https://github.com/sipeed/picoclaw/pull/1575) adds support for the **Kimi For Coding** model with specific User-Agent headers.
- **Subagent Monitoring**: [PR #1540](https://github.com/sipeed/picoclaw/pull/1540) adds a `SpawnStatusTool` to query the status of background agents.
- **Credential Management**: [PR #1521](https://github.com/sipeed/picoclaw/pull/1521) proposes a secure store with AES-256-GCM encryption.

## 4. Community Hot Topics
1.  **Agent Loop Refactoring ([Issue #1316](https://github.com/sipeed/picoclaw/issues/1316))**
    *   **Activity**: 10 comments, high engagement.
    *   **Analysis**: The core proposal to shift from a "black box" loop to an event-driven architecture is the most debated topic. Users and devs are aligning on the need for hooks, interrupts, and better observability.
2.  **Feishu (Lark) Integration Improvements**
    *   **Activity**: High volume of PRs ([#1577](https://github.com/sipeed/picoclaw/pull/1577), [#1537](https://github.com/sipeed/picoclaw/pull/1537), [#1534](https://github.com/sipeed/picoclaw/pull/1534)).
    *   **Analysis**: Significant interest in the Asian market (Feishu/Lark) with fixes for video uploads, thread replies, and card parsing. This suggests a strong enterprise/user adoption wave in China.
3.  **Default Security Posture ([Issue #1525](https://github.com/sipeed/picoclaw/issues/1525) & [#1530](https://github.com/sipeed/picoclaw/issues/1530))**
    *   **Activity**: Multiple issues raised by @SebastianBoehler regarding "fail-open" defaults (remote exec, public web mode).
    *   **Analysis**: The community is actively auditing the project for production safety, pushing for "secure by default" configurations.

## 5. Bugs & Stability
*   **Critical: Cron Command Parsing ([Issue #1532](https://github.com/sipeed/picoclaw/issues/1532))**
    *   **Severity**: High.
    *   **Details**: The `picoclaw cron add` command has a "severe bug" preventing task creation.
    *   **Status**: Open, awaiting fix.
*   **High: Gateway Deadlock ([Issue #1150](https://github.com/sipeed/picoclaw/issues/1150))**
    *   **Severity**: High (Stability).
    *   **Details**: Factory panics in the routing pool leave inflight entries orphaned, causing permanent deadlocks for specific targets.
*   **Medium: Image Model Routing ([Issue #1578](https://github.com/sipeed/picoclaw/issues/1578))**
    *   **Severity**: Medium.
    *   **Details**: The `image_model` config field is ignored; all images route to the primary model.
*   **Medium: Tool Name Resolution ([Issue #1533](https://github.com/sipeed/picoclaw/issues/1533))**
    *   **Severity**: Medium.
    *   **Details**: Hyphens in skill names (e.g., `skill-vetter`) are auto-converted to underscores, causing "Tool not found" errors.

## 6. Feature Requests & Roadmap Signals
- **Multi-Agent Collaboration Framework ([Issue #294](https://github.com/sipeed/picoclaw/issues/294))**: A long-term roadmap item to transition from single-agent to multi-agent architectures with shared context. This aligns with the recent `SpawnStatusTool` PR.
- **Privacy Controls ([Issue #1528](https://github.com/sipeed/picoclaw/issues/1528))**: Request for a switch to disable transcript persistence for privacy-sensitive environments.
- **Model-side Search & FastEmbed ([Issue #1498](https://github.com/sipeed/picoclaw/issues/1498))**: Users are requesting integrated embedding and search capabilities (RAG) directly within the provider layer.
- **Feishu File Exposure ([Issue #1506](https://github.com/sipeed/picoclaw/issues/1506))**: Feature request (now closed/merged) to expose local file paths in Feishu messages to enable the agent to process non-image files.

## 7. User Feedback Summary
- **Pain Point**: **Operational Control**. Users feel the agent is currently a "black box" once it starts running. The ability to "steer" or interrupt it mid-process is a highly desired UX feature.
- **Pain Point**: **Configuration Complexity vs. Safety**. Users appreciate the ease of setup but are concerned that default settings (like `allow_remote` exec) are too permissive for public exposure.
- **Use Case**: **Scheduled Tasks**. The bugs reported in `cron` indicate users are actively trying to use PicoClaw as an autonomous scheduler (e.g., "touch file every 5 mins"), but are hitting parsing bugs.
- **Adoption**: The volume of Feishu-related fixes suggests PicoClaw is gaining traction as a personal assistant integrated into enterprise chat platforms.

## 8. Backlog Watch
- **[Issue #1216](https://github.com/sipeed/picoclaw/issues/1216): Meta: Agent refactor**. This is the master tracking issue for the architectural shift. It needs continuous attention as PR #1316 (Event-driven loop) is a massive change that requires careful merging to avoid breaking existing providers.
- **[Issue #407](https://github.com/sipeed/picoclaw/issues/407): Feishu not support armv7 32bit**. This issue has been open for ~1 month. With no immediate fix in the latest PRs, ARM users (e.g., Raspberry Pi legacy) are still blocked from using the Feishu channel.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-15

## 1. Today's Overview
NanoClaw is experiencing a surge of community-driven development activity, characterized by a high volume of new feature proposals and critical bug reports. The project shows no sign of release stagnation despite zero official releases today; instead, the team is managing a massive influx of 46 open PRs, indicating a robust but potentially bottlenecked review pipeline. The issue tracker is dominated by strategic enhancements to agent memory and self-evolution capabilities, alongside critical stability fixes for container runtimes and channel integrations. Overall, the project is in a high-growth, high-churn phase as it scales its "tiny, auditable core" philosophy.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Project Progress
Four PRs were merged/closed recently, focusing on stability and integration:
- **PR #1078 (Closed):** Fixed a bug where the Discord message cursor wasn't rolled back on send failures, preventing message loss. ([Link](https://github.com/qwibitai/nanoclaw/pull/1078))
- **PR #1077 (Closed):** Added Notion MCP integration, expanding the agent's external tool capabilities. ([Link](https://github.com/qwibitai/nanoclaw/pull/1077))
- **PR #851 (Closed):** Expanded the `CONTRIBUTING` guide with skill structure documentation, lowering the barrier for new developers. ([Link](https://github.com/qwibitai/nanoclaw/pull/851))
- **PR #944 (Closed):** Implemented immediate acknowledgment messages when the agent starts processing, improving UX for long tasks. ([Link](https://github.com/qwibitai/nanoclaw/pull/944))

Active development is heavily focused on **memory systems** and **channel skills**, with significant work on LanceDB integration (#1043) and Telegram improvements (#1014).

## 4. Community Hot Topics
The most engaging discussions revolve around the project's core architecture versus usability:
- **Issue #384 (👍 14):** The "Skill Marketplace/Registry" proposal is the most popular topic. Users are strongly aligned with the idea that NanoClaw's security model (minimal attack surface) relies on a robust, installable skill ecosystem rather than a monolithic core. ([Link](https://github.com/qwibitai/nanoclaw/issues/384))
- **Issue #829:** "Hallucinated Tool Calls" has sparked deep interest regarding agent reliability. The discussion highlights a need for stricter constraints in `SOUL.md` to prevent the agent from fabricating execution logs. ([Link](https://github.com/qwibitai/nanoclaw/issues/829))
- **Memory & Learning:** Issues #910, #911, #912, and #913 form a cohesive cluster focused on "Self-Evolving Agents." The community is actively designing mechanisms for agents to write to `USER.md`, create their own skills, and manage persistent context.

## 5. Bugs & Stability
Several high-priority stability issues have surfaced, particularly regarding container runtimes and authentication:
1.  **Critical: WhatsApp Crash (#1047):** The WhatsApp channel triggers a `process.exit()` on QR scan (non-macOS) and session logout, making the service unrecoverable. ([Link](https://github.com/qwibitai/nanoclaw/issues/1047))
2.  **Critical: Startup Race Condition (#1067):** NanoClaw fails to start on reboot due to a race condition with the Apple Container runtime services. ([Link](https://github.com/qwibitai/nanoclaw/issues/1067))
3.  **High: Scheduled Tasks Credential Gap (#1046):** Scheduled tasks do not receive MCP credential mounts (Gmail, Calendar, etc.), rendering them unable to access secured tools. ([Link](https://github.com/qwibitai/nanoclaw/issues/1046))
4.  **Medium: OAuth Token Validation (#1045):** The setup process accepts invalid API keys, leading to confusing failures only when the first message is sent. ([Link](https://github.com/qwibitai/nanoclaw/issues/1045))

## 6. Feature Requests & Roadmap Signals
The roadmap is clearly trending toward **agent autonomy and architectural portability**:
-   **Skill Self-Creation (#911, #912):** The infrastructure allowing agents to propose and create their own skills is being actively drafted. This is a strong candidate for the next major version.
-   **Advanced Memory (#1043, #1063):** Replacing basic vector search with hybrid BM25+vector retrieval (LanceDB) and structured `USER.md` profiles suggests the next release will focus heavily on context retention and personalization.
-   **Admin Mode (#926):** Proposals for a dedicated admin command channel indicate a move toward production-grade manageability.
-   **Platform Expansion:** Requests for Intel Mac support (#1079) and a QQBot channel (#852) signal growing demand for broader platform compatibility.

## 7. User Feedback Summary
User sentiment is mixed: enthusiasm for the architecture is tempered by friction in the setup and sandbox experience.
-   **Pain Point:** The sandbox migration is described as "hellish" by one user (#1080), specifically regarding the configuration of directory access post-creation. Users feel trapped if they miss initial configuration steps.
-   **Confusion:** There is a mismatch in documentation regarding Linux support (#1075), causing frustration for users trying to install on unsupported platforms.
-   **Positive Signal:** Despite the rough edges, new users are praising the utility of the containerized agent concept, specifically noting it was "super useful" once running (#1080).

## 8. Backlog Watch
-   **Issue #384 (Skill Marketplace):** With 14 upvotes and significant discussion, this is the highest-impact item awaiting formal implementation planning. It is foundational to the project's security model.
-   **Blocked PRs:** A significant number of PRs (#519, #522, #525, #560) have been sitting in a "Blocked" status since late February. These include critical features like context compaction, Slack threading, and semantic memory. These need maintainer attention to prevent contributor attrition.
-   **Skill Branch Conflicts:** Automated merge-forward workflows are failing for `skill/apple-container` and `skill/compact` (#1073, #1074), indicating these development branches are drifting from `main` and may require manual intervention.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-15

## Today's Overview
IronClaw demonstrates **very high development velocity** with a clear focus on production hardening and stability. The team merged 16 PRs against 34 open, aggressively closing critical bugs identified by their Staging CI review bot. Activity is dominated by core contributors (`@ilblackdragon`, `@G7CNF`, `@nickpismenkov`) implementing safety fixes, performance optimizations, and enhanced MCP/Channel support. The project is in a "stabilization phase," prioritizing the elimination of panic paths and race conditions over new feature development.

## Releases
No new releases were published today. The significant volume of merged fixes (security, performance, correctness) suggests a patch or minor version release is likely imminent.

## Project Progress
Development is heavily focused on infrastructure reliability and correctness:

*   **Production Safety & Stability:** The largest PR (#1184) systematically eliminates `panic!` paths and `.unwrap()` calls, replacing them with proper `Result` error handling. This addresses a class of critical bugs where invalid user input could crash the runtime.
*   **Routine Engine Optimization:** Merged PR #1163 fixed a critical **N+1 database query pattern** in the event trigger loop, and PR #1172 fixed a performance regression where the full message history was cloned on every tool iteration.
*   **MCP & Auth Hardening:** PR #1158 adds robustness to the Model Context Protocol (MCP) implementation by handling non-standard HTTP 400 errors (instead of just 401) during auth flows, improving compatibility with various providers.
*   **Channel Fixes:**
    *   **Slack:** Work is ongoing for Socket Mode support (Issue #1155).
    *   **WASM:** Fixed a bug where hot-activated channels reverted to "awaiting pairing" (PR #1171).
    *   **Google Sheets:** Fixed a 403 PERMISSION_DENIED error occurring post-OAuth (PR #1164).
*   **UX:** Routines UI now displays human-readable cron summaries (e.g., "Every Monday at 9am") instead of raw expressions (PR #1154).

## Community Hot Topics
1.  **Documentation Deficit (Issue #1174):** Users are struggling to find configuration guides for tools, limits, and skills. The user noted only seeing four sparse `.md` files.
    *   *Underlying Need:* The project lacks comprehensive user/admin documentation, which is a barrier to adoption for self-hosters.
2.  **Slack Socket Mode Support (Issue #1155):** A highly requested feature for users running IronClaw in restricted networks (no inbound traffic allowed for webhooks).
3.  **Security & Standards:** Discussion around webhook secret handling (Issue #722) highlights security-conscious users reviewing implementation details.

## Bugs & Stability
The day was dominated by high-severity bugs caught by the **Staging CI Review Bot**, indicating a mature testing infrastructure.

| Severity | Issue | Description | Fix Status |
| :--- | :--- | :--- | :--- |
| **CRITICAL** | [#823] | **N+1 Query Pattern:** Routine engine created DB bottleneck. | **Fixed** (PR #1163) |
| **CRITICAL** | [#869] | **Async Lock:** Lock held across I/O boundary blocked webhook processing. | **Fixed** (PR #1168) |
| **CRITICAL** | [#813] | **Atomicity:** Non-transactional context updates risk data corruption. | **Fixed** (PR #1161) |
| **CRITICAL** | [#1178] | **CI Bypass:** AWK linting logic in CI workflows was flawed. | **Open** (Part of staging review) |
| **HIGH** | [#827] | **Performance:** Full message `Vec` cloned 5x per routine loop. | **Fixed** (PR #1172) |
| **HIGH** | [#1052] | **State Mgmt:** WASM channels forgot pairing state on hot-reload. | **Fixed** (PR #1171) |

## Feature Requests & Roadmap Signals
*   **Slack Socket Mode (#1155):** Requested for network-isolated deployments. *Prediction: High likelihood of inclusion in next minor version due to clear enterprise use case.*
*   **Documentation Expansion (#1174):** Users need guides for configuration and "Skills."
*   **Builder Enhancements (PR #1129):** Auto-registration of built WASM tools is in progress, signaling a push toward easier tool extensibility.

## User Feedback Summary
*   **Pain Point - Onboarding:** Users find the project difficult to configure without proper documentation (#1174).
*   **Pain Point - Network Constraints:** The default Slack integration requires inbound HTTP access, which is problematic for secure/restricted environments (#1155).
*   **Pain Point - OAuth Flows:** Several fixes (Google Sheets, MCP) related to OAuth token handling suggest auth flows were fragile.
*   **Positive Signal:** The automated Staging CI bot is highly effective, catching complex issues (race conditions, N+1 queries) before production release.

## Backlog Watch
*   **Issue #1174 (Documentation):** Critical for adoption. Needs a dedicated documentation effort or wiki update.
*   **Issue #1155 (Slack Socket Mode):** Awaiting maintainer triage. High community value for self-hosted scenarios.
*   **PR #1184 (Panic Elimination):** A massive refactor open for review. It blocks other work and needs careful merging to avoid regressions.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest (2026-03-15)

## 1. Today's Overview
LobsterAI demonstrated strong development momentum today with **3 merged PRs** focusing on architectural refactoring and feature enrichment, specifically regarding "OpenClaw" memory integration and Agent profile management. Conversely, community engagement indicates active troubleshooting, with **3 open issues** updated in the last 24 hours concerning platform-specific bugs and integration difficulties. The project appears to be in a phase of aggressively integrating local memory capabilities (OpenClaw) while addressing stability issues in peripheral modules like QQ bots and version detection. The high ratio of merged PRs to open issues suggests a reactive and active maintenance cycle.

## 2. Releases
No new official releases were recorded today. The community is currently anticipating a resolution to the version detection bug affecting v0.2.2 users trying to update to v0.2.3.

## 3. Project Progress
Significant progress was made in refactoring the Agent configuration UI and enhancing memory integration. Three key PRs were merged:
*   **Agent Configuration Refactor ([PR #416](https://github.com/netease-youdao/LobsterAI/pull/416)):** The Agent definition (IDENTITY.md/SOUL.md/USER.md) has been separated from the "Memory" Tab into a dedicated new Tab. This update also fixed type mismatches and improved internationalization (i18n) for engine status messages.
*   **OpenClaw Memory Association ([PR #415](https://github.com/netease-youdao/LobsterAI/pull/415)):** Merged support for associating OpenClaw memory, indicating a strategic move towards deeper integration with local memory/storage solutions.
*   **Notification System Fix ([PR #414](https://github.com/netease-youdao/LobsterAI/pull/414)):** Optimized the extraction of the `to` field for QQ channel notifications in scheduled tasks.

## 4. Community Hot Topics
The most active discussions revolve around local model integration and update mechanisms:
*   **Local Ollama Tool Execution ([Issue #405](https://github.com/netease-youdao/LobsterAI/issues/405)):** Users are struggling to get local Ollama models (qwen2.5-coder, deepseek-r1) to execute commands (e.g., listing files), despite configuring `openclaw.json`. This suggests a gap in documentation or a configuration mismatch between local and cloud models regarding tool use.
*   **Apple Silicon Update Bug ([Issue #390](https://github.com/netease-youdao/LobsterAI/issues/390)):** A persistent discussion regarding the v0.2.2 client failing to detect the v0.2.3 update on ARM64 architecture.

## 5. Bugs & Stability
*   **Critical: Update Mechanism Failure on ARM64 ([Issue #390](https://github.com/netease-youdao/LobsterAI/issues/390)):** The built-in "Check for Updates" feature is broken for Apple Silicon users on v0.2.2, falsely reporting the software is up to date. *No fix PR has been merged yet.*
*   **High: QQ Bot Disconnection ([Issue #413](https://github.com/netease-youdao/LobsterAI/issues/413)):** Users report frequent disconnections with the QQBOT integration. The issue lacks details but affects reliability for users relying on this notification channel.
*   **Medium: Local Ollama Tool Calling ([Issue #405](https://github.com/netease-youdao/LobsterAI/issues/405)):** Tool execution fails silently or is ignored when using local models compared to cloud models.

## 6. Feature Requests & Roadmap Signals
*   **Deep OpenClaw Integration:** The merged PRs ([#415](https://github.com/netease-youdao/LobsterAI/pull/415), [#416](https://github.com/netease-youdao/LobsterAI/pull/416)) signal a major roadmap push towards "OpenClaw" as a core component for memory and agent identity management.
*   **Enhanced Local Model Support:** The user struggles in Issue #405 highlight a demand for seamless "local-first" experiences where local models have the same tool capabilities as cloud models.

## 7. User Feedback Summary
Users are actively testing the boundaries of local deployment but face friction:
*   **Pain Point:** The distinction between "Chat" and "Command Execution" for local models is confusing (Issue #405). Users expect local models to inherently possess file-system access.
*   **Pain Point:** Stability of notification bridges (QQ Bot) is inconsistent (Issue #413).
*   **Friction:** Manual installation is required for Apple Silicon users due to the update checker bug (Issue #390).

## 8. Backlog Watch
*   **[ATTENTION NEEDED] Apple Silicon Update Bug ([Issue #390](https://github.com/netease-youdao/LobsterAI/issues/390)):** Open since 2026-03-12 with 2 comments. As this affects the update pipeline for a specific hardware architecture, it prevents users from easily patching to the latest version.
*   **[NEEDS INFO] QQ Bot Stability ([Issue #413](https://github.com/netease-youdao/LobsterAI/issues/413)):** Created yesterday with 0 comments. Maintainer input is required to diagnose if this is an API token issue or a library defect.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest: 2026-03-15

## 1. Today's Overview
The project is experiencing a period of high velocity and significant architectural evolution, marked by the release of version **v0.0.13**. Activity is currently dominated by infrastructure improvements and UI overhauls, with **8 pull requests** updated against **1 active issue**. The team is clearly focused on refining the user experience through "TinyOffice" while simultaneously simplifying the underlying agent communication layer. This suggests a strategic shift toward a more web-accessible, user-friendly product rather than just a CLI tool.

## 2. Releases
### **v0.0.13**
The latest release introduces significant UX and architectural upgrades, solidifying "TinyOffice" as the central interface for agent management.
*   **Agent Configuration UI**: A new interface allowing users to manage Skills, System Prompts, Memory, and Heartbeats via tabbed navigation.
*   **Provisioning Refactor**: Workspace creation has been consolidated, now utilizing symlinks for skill management, likely to reduce code duplication and improve modularity.
*   **Hierarchical Memory**: Implementation of a structured memory system for agents, improving context retention.
*   **AGENTS.md**: Introduction of a markdown file (likely for agent instructions/state), replacing previous configuration methods.

[View Release](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.13)

## 3. Project Progress
The primary advancement today is the completion of the **Agent Configuration UI** ([PR #207](https://github.com/TinyAGI/tinyclaw/pull/207)), which was merged/closed, delivering the features seen in v0.0.13.

Active development is aggressively targeting architectural simplification and onboarding:
*   **Architecture**: [PR #213](https://github.com/TinyAGI/tinyclaw/pull/213) proposes flattening the communication layer by removing conversation state trackers in favor of direct flat DMs. This is a major refactor aimed at reducing complexity.
*   **Onboarding**: [PR #214](https://github.com/TinyAGI/tinyclaw/pull/214) is building out the "First Run" experience by adding a `--skip-setup` flag for API-only mode and a `/connect` page for custom API URLs.
*   **Customization**: [PR #215](https://github.com/TinyAGI/tinyclaw/pull/215) advances agent flexibility by allowing system prompts to be defined at creation time.

## 4. Community Hot Topics
The most significant discussion is happening in **[Issue #193](https://github.com/TinyAGI/tinyclaw/issues/193)** (👍 0, 10 comments).
*   **Topic**: *TinyOffice: add first-run web onboarding for initial setup*.
*   **Analysis**: Users (and maintainers) identify that the current CLI-reliant setup is a barrier to entry. The discussion highlights a strong demand for a "zero-config" web UI that handles API key setup and workspace initialization immediately after installation. This aligns directly with the open PR #214.

## 5. Bugs & Stability
No explicit bug reports or crashes were flagged in today's data. However, potential instability risks are present in the open Pull Requests:
*   **Architectural Risk**: [PR #213](https://github.com/TinyAGI/tinyclaw/pull/213) (removing conversation state) and [PR #191](https://github.com/TinyAGI/tinyclaw/pull/191) (complete rebrand to TinyAGI) are high-impact changes. Merging these may introduce regressions in message handling or configuration loading.

## 6. Feature Requests & Roadmap Signals
*   **Model Expansion**: [PR #217](https://github.com/TinyAGI/tinyclaw/pull/217) signals an imminent expansion of LLM providers, specifically adding support for **Google Gemini** and its CLI.
*   **Branding Pivot**: [PR #191](https://github.com/TinyAGI/tinyclaw/pull/191) indicates a potential project-wide rename from "TinyClaw" to "TinyAGI", suggesting a rebranding effort is underway to broaden the project's scope or identity.
*   **Prediction**: The **next version (likely v0.0.14)** will almost certainly include the Gemini provider integration and the simplified "flat DM" queue system if PRs #217 and #213 pass review.

## 7. User Feedback Summary
User sentiment is currently focused on **accessibility and ease of use**. The discussion in Issue #193 reveals frustration with "raw config editing." Users appear to prefer managing agents through a GUI (TinyOffice) rather than editing files manually. The addition of specific features like "custom API URL configuration" (PR #214) suggests a user base that frequently switches between different LLM backends or local models.

## 8. Backlog Watch
*   **[PR #191: Rebrand to TinyAGI](https://github.com/TinyAGI/tinyclaw/pull/191)**: This is a massive pull request affecting the entire codebase. It was updated recently but remains open. It requires careful review to ensure no broken links or package references occur.
*   **[PR #212: Redesign Live Office Workspace](https://github.com/TinyAGI/tinyclaw/pull/212)**: A significant UI overhaul that appears to be pending review. This is critical for the "First Run" experience outlined in Issue #193.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-03-15

## 1. Today's Overview

Moltis demonstrates **healthy, sustained momentum** with 11 issues and 9 PRs updated in the last 24 hours. The project is in an active stabilization and feature-refinement phase, with maintainers merging 4 PRs that address session persistence, local LLM support, cron delivery, and tool reliability. No new releases were cut today, but the volume of merged fixes suggests a patch release may be imminent. Community engagement is solid, with 6 open issues actively discussed and several contributor-submitted PRs in the review queue.

---

## 2. Releases

**No new releases** were published today. The last release version is not available in the provided data. Given the 4 merged PRs addressing bugs and regressions, users can expect a patch release soon.

---

## 3. Project Progress

### Merged/Closed PRs (4)
| PR | Summary | Impact |
|---|---|---|
| [#417](https://github.com/moltis-org/moltis/pull/417) | **fix(local-llm): restore custom GGUF setup without restart** | Fixes #132 — custom HuggingFace GGUF models now download/register asynchronously and restore at gateway startup without requiring restart. |
| [#411](https://github.com/moltis-org/moltis/pull/411) | **test(cron): add delivery regressions and sync docs** | Adds regression tests for cron `payload.deliver`, `channel`, and `to` flows; extracts delivery helper with unit tests. |
| [#410](https://github.com/moltis-org/moltis/pull/410) | **fix(agents): retry empty structured tool names** | Fixes #179 — instead of failing on `unknown tool: `, the runner now retries structured tool calls with blank names. |
| [#418](https://github.com/moltis-org/moltis/pull/418) | **fix(chat): persist aborted partial history** | Fixes #186 — interrupted runs now preserve visible assistant text, reasoning, and tool-call frames in session history. |

### Open PRs Advancing Features (5)
- **[#412](https://github.com/moltis-org/moltis/pull/412)** — Scopes browser sessions per chat, preventing stale state leakage between sessions.
- **[#436](https://github.com/moltis-org/moltis/pull/436)** — Fixes Windows file locking (`LockFileEx` error 5) by replacing `append(true)` with `write(true)+seek`.
- **[#435](https://github.com/moltis-org/moltis/pull/435)** — Hides `node` parameter in exec tool when no nodes are configured, reducing LLM confusion.
- **[#432](https://github.com/moltis-org/moltis/pull/432)** — Similar approach: only expose `exec node` parameter when nodes are actually connected.
- **[#433](https://github.com/moltis-org/moltis/pull/433)** — Dependabot bump for `undici` in `/website` (security/maintenance).

---

## 4. Community Hot Topics

| Issue/PR | Engagement | Theme |
|---|---|---|
| **[#261](https://github.com/moltis-org/moltis/issues/261)** — `[Bug]: Github Copilot provider errors` | 👍 2, 💬 4 | **Provider Integration** — Users report errors when using GitHub Copilot as a provider; indicates growing demand for first-class Copilot support. |
| **[#264](https://github.com/moltis-org/moltis/issues/264)** — `Agents should know what channel they're in + message any channel/user` | 👍 2, 💬 1 | **Multi-Channel Awareness** — Users want agents to have context about their operating channel and ability to send messages to arbitrary channels/users. Closed, suggesting roadmap inclusion. |
| **[#235](https://github.com/moltis-org/moltis/issues/235)** — `PTY-based interactive Claude Code CLI control` | 👍 1, 💬 3 | **Autonomous Orchestration** — Feature request for PTY-based control so Claude Code can run interactively when spawned by agent frameworks; critical for multi-agent orchestration use cases. |
| **[#233](https://github.com/moltis-org/moltis/issues/233)** — `[Feature]: Matrix Support` | 👍 1, 💬 1 | **Channel Expansion** — Community requests Matrix protocol as a new channel integration. |

**Underlying Needs:**
- **Provider flexibility** — Users want more LLM provider options (Copilot, local GGUF).
- **Agent autonomy** — Multi-agent orchestration and channel-aware messaging are high-value features.
- **Platform reach** — Matrix support signals demand for decentralized/federated communication channels.

---

## 5. Bugs & Stability

### Critical/New Bugs Reported Today
| Issue | Severity | Status | Fix PR |
|---|---|---|---|
| **[#437](https://github.com/moltis-org/moltis/issues/437)** — Expandable "Reasoning" is only response in chat (affects Channels) | 🟠 Medium | OPEN | — |
| **[#434](https://github.com/moltis-org/moltis/issues/434)** — `file lock failed: Access is denied` on Windows session persist | 🟡 Medium | OPEN | **[#436](https://github.com/moltis-org/moltis/pull/436)** ✅ |
| **[#426](https://github.com/moltis-org/moltis/issues/426)** — Wrong address in nodes | 🟡 Medium | OPEN | — |
| **[#261](https://github.com/moltis-org/moltis/issues/261)** — GitHub Copilot provider errors (since 2026-02-28) | 🟠 Medium | OPEN | — |

### Bugs Fixed Today (via merged PRs)
- **#132** — GGUF models not downloading (fixed by #417)
- **#179** — Kimi model cannot activate cron jobs (fixed by #410)
- **#186** — Aborted agent runs lose all context (fixed by #418)
- **#195** — Agents can't set channel targets for crons (closed, possibly addressed by #411)

**Stability Assessment:** Windows support is actively being improved (#434 → #436). The team is responsive to platform-specific issues.

---

## 6. Feature Requests & Roadmap Signals

| Feature Request | Signals | Likelihood |
|---|---|---|
| **Channel-aware agents** (#264 — closed) | Closed issue + cron delivery tests in #411 | 🔴 High — likely in next minor release |
| **Matrix protocol support** (#233) | Active discussion, +1 reaction | 🟡 Medium — community-driven, awaiting maintainer stance |
| **PTY-based Claude Code control** (#235) | 3 comments, use case well-articulated | 🟡 Medium — architectural change, may require design discussion |
| **Exec node parameter visibility** (#435, #432) | Two PRs addressing same root cause | 🔴 High — one will likely merge soon |

**Predicted Next Version Focus:** Multi-channel messaging, exec tool UX refinement, Windows stability, provider expansion (Copilot/local GGUF).

---

## 7. User Feedback Summary

### Pain Points
1. **Windows compatibility** — File locking errors persist; #436 is a direct response.
2. **Provider reliability** — GitHub Copilot errors (#261) and local GGUF setup friction (#132) are top concerns.
3. **Agent context loss** — Interrupted runs losing history (#186) frustrated users; now fixed.
4. **Tool schema confusion** — Empty `node` parameter causes LLMs to hallucinate values (#427, #435, #432).

### Use Cases Emerging
- **Autonomous multi-agent orchestration** — Users want Claude Code spawned as subprocess with PTY support (#235).
- **Cross-channel agent communication** — Agents need to know their channel context and message other channels/users (#264).
- **Local/offline LLM deployment** — GGUF/HuggingFace model integration is a key use case (#132, #417).

### Satisfaction Indicators
- Quick maintainer response to bugs (4 fixes merged today).
- Community contributing PRs (#435, #432, #436) — healthy contributor ecosystem.
- Clear issue triage with labels and preflight checklists.

---

## 8. Backlog Watch

| Item | Age | Status | Concern |
|---|---|---|---|
| **[#261](https://github.com/moltis-org/moltis/issues/261)** — GitHub Copilot provider errors | 15 days | OPEN, 👍 2 | High-impact provider issue with no assigned fix yet. |
| **[#235](https://github.com/moltis-org/moltis/issues/235)** — PTY-based Claude Code CLI control | 18 days | OPEN, 👍 1 | Architectural feature request needing maintainer design input. |
| **[#233](https://github.com/moltis-org/moltis/issues/233)** — Matrix Support | 18 days | OPEN, 👍 1 | No maintainer response yet; community awaiting roadmap signal. |

**Recommendation:** Maintainers should triage #261 (Copilot) as it affects a growing user segment. A design comment on #235 (PTY) would clarify feasibility and timeline.

---

*Digest generated from GitHub activity data for 2026-03-15. Links: [Moltis Repository](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-03-15

## 1. Today's Overview
The CoPaw project is currently exhibiting **very high activity**, evidenced by 50 updated issues and 29 updated pull requests in the last 24 hours. The open source community is highly engaged, contributing significant patches ranging from new channel integrations to critical security enhancements. The maintainers are actively merging fixes, resulting in a high closure rate (32 closed issues). While no new official release was tagged today, the volume of merged "fix" PRs suggests a patch release (likely v0.0.8) is imminent to address stability issues in v0.0.7.

## 2. Releases
No new releases were published today. The project remains on version **v0.0.7** (based on issue context).

## 3. Project Progress
Significant progress was made in stabilizing the platform and expanding integration capabilities. Key merged contributions include:
*   **Security Hardening:** Merged PR #1484, adding detection rules for destructive shell commands (e.g., `mkfs`, `dd`, fork bombs), significantly improving agent safety.
*   **UI/UX Fixes:** Merged PR #1471, fixing a complaint where copying assistant replies resulted in raw JSON instead of readable Markdown text.
*   **Platform Stability:** Merged PR #1483, which resolves a critical Windows bug where configuration files could not be moved across different disk drives.
*   **Model Support:** Merged PR #626 and #1331, improving support for OpenAI-compatible models (specifically thinking tags) and fixing DingTalk rich text parsing errors.
*   **Testing:** Merged PR #1495, fixing integration test failures on Windows caused by proxy environment settings.

## 4. Community Hot Topics
The most active discussions centered on channel integrations and file handling capabilities:
*   **[Issue #981]** **File Transfer in Feishu/QQ:** Users are actively discussing (12 comments) the inability of bots to send files via Feishu and QQ channels. This highlights a critical gap in the "personal assistant" use case where document handling is essential.
*   **[Issue #282]** **Remote Protocol Errors:** A highly commented (13 comments) bug regarding `pptxgenjs` tool calls causing the agent to crash due to incomplete HTTP reads. This affects reliability for users generating Office documents.
*   **[PR #1478] Nextcloud Talk Integration:** A new PR adding Nextcloud Talk support is open, indicating strong community demand for self-hosted, privacy-focused communication channels.
*   **[PR #1329] Web Authentication:** A substantial PR adding optional single-user authentication is under review, signaling a move towards more secure, multi-tenant or public-facing deployments.

## 5. Bugs & Stability
Several critical bugs were identified, with fixes already merged or in progress:
*   **Critical (Fixed):** **Windows Cross-Disk IO Error ([Issue #1431](github.com/agentscope-ai/CoPaw/issues/1431))**: Users on Windows encountered `WinError 17` when the app tried to save configuration files. **Status:** Fixed by [PR #1483](github.com/agentscope-ai/CoPaw/pull/1483) using `shutil.move`.
*   **High Severity:** **Mac M4 Stability ([Issue #1087](github.com/agentscope-ai/CoPaw/issues/1087))**: Users report the agent stops answering completely on Mac mini M4. Investigation is ongoing.
*   **High Severity:** **Windows Port Conflict ([Issue #1485](github.com/agentscope-ai/CoPaw/issues/1485))**: The default port 8088 is reserved by Windows Hyper-V, causing startup failures. Users are requesting a change to the default port.
*   **Medium Severity:** **Copy as JSON ([Issue #1457](github.com/agentscope-ai/CoPaw/issues/1457))**: UI copied Markdown as JSON. **Status:** Fixed by [PR #1471](github.com/agentscope-ai/CoPaw/pull/1471).
*   **Medium Severity:** **Docker Timezone ([Issue #1501](github.com/agentscope-ai/CoPaw/issues/1501))**: Users cannot modify the timezone in the official Docker image, leading to incorrect timestamps in logs.

## 6. Feature Requests & Roadmap Signals
*   **Webhook Support ([Issue #338](github.com/agentscope-ai/CoPaw/issues/338)):** High demand for a webhook interface to allow external software to query CoPaw programmatically (returning a key to poll for results).
*   **DeepSeek Provider ([PR #1498](github.com/agentscope-ai/CoPaw/pull/1498)):** A contributor has added native support for the DeepSeek provider, likely to be merged soon given the popularity of this model.
*   **Permission System ([Issue #524](github.com/agentscope-ai/CoPaw/issues/524)):** Request to restrict `write_file` permissions to specific directories to prevent agents from corrupting system files.
*   **Ollama UX Improvements ([PR #1482](github.com/agentscope-ai/CoPaw/pull/1482)):** Proposed enhancements to auto-detect and fill Ollama endpoints, lowering the barrier for local model usage.

## 7. User Feedback Summary
Users are enthusiastic about the rapid development but frustrated by deployment friction. **Pain points** focus heavily on the **v0.0.7 Docker upgrade path** (skills duplicating, config loss mentioned in [Issue #1413](github.com/agentscope-ai/CoPaw/issues/1413)) and **channel limitations** (specifically file handling in Feishu/DingTalk). **Positive sentiment** is directed at the project's openness to external providers (DeepSeek, OpenRouter) and the quick turnaround on UI bugs like the copy-paste issue.

## 8. Backlog Watch
*   **[Issue #338]** **Webhook Feature:** Labeled `good first issue` and highly requested (7 comments), but not yet assigned or implemented. This is a prime candidate for community contribution.
*   **[Issue #902]** **Discord Voice (Ogg):** While [PR #1476](github.com/agentscope-ai/CoPaw/pull/1476) is open, the issue has lingered, indicating complexity in audio format handling for Discord bots.
*   **[Issue #1087]** **Mac M4 Stability:** This issue is closed but relies on user feedback for verification; maintainers should monitor for recurrence as M4 adoption grows.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-03-15

## 1. Today's Overview
ZeptoClaw demonstrates **highly active development** with a balanced focus on expanding integration capabilities and hardening system security. The project saw significant progress in channel implementations, specifically with the introduction of the Agent Client Protocol (ACP) and fixes for Discord image processing. Maintainer @qhkm is aggressively iterating on the developer experience via containerization improvements (Podman/Docker) and internal agent templates. With a 66% closure rate on issues and multiple substantial features in the PR queue, the project health appears robust and velocity is accelerating.

## 2. Releases
**No new releases** were recorded in the last 24 hours. The focus remains on merging incremental features and fixes, likely staging for a future minor or patch version bump.

## 3. Project Progress
Several key pull requests were merged or advanced, significantly improving the agent's extensibility and reliability:

*   **[MERGED] Discord Image Handling Fixed:** [PR #346](https://github.com/qhkm/zeptoclaw/pull/346) (Author: @rafaellin) successfully resolved an issue where Discord messages containing only images were silently dropped. This fix ensures multimodal inputs are preserved throughout the agent loop.
*   **[MERGED] Zhipu API Integration:** [PR #335](https://github.com/qhkm/zeptoclaw/pull/335) added explicit validation for Zhipu/GLM API keys during onboarding, improving the "first run" experience for users of alternative LLM providers.
*   **[MERGED] Security Hardening:** [Issue #347](https://github.com/qhkm/zeptoclaw/issues/347) was closed, indicating that default agent modes and approval policies have been hardened to prevent unsafe defaults.
*   **[IN REVIEW] ACP Protocol Support:** [PR #356](https://github.com/qhkm/zeptoclaw/pull/356) (Author: @starsy) is a major new feature adding support for the Agent Client Protocol (ACP) via stdio and HTTP, positioning ZeptoClaw as a subprocess agent for external orchestrators.
*   **[IN REVIEW] Developer Experience:** [PR #358](https://github.com/qhkm/zeptoclaw/pull/358) introduced `Dockerfile.dev` with BuildKit cache mounts to speed up container builds.

## 4. Community Hot Topics
*   **Telegram UX Improvements:** [Issue #331](https://github.com/qhkm/zeptoclaw/issues/331) (Author: @ilovethensa) is gaining traction. The user highlights a critical gap in the Telegram channel: lack of Markdown rendering and missing "typing" indicators.
    *   *Analysis:* This signals a strong user need for "UI polish" in chat interfaces. Users expect ZeptoClaw to match the responsiveness of native chatbots (like ChatGPT's Telegram bots), suggesting the current integration feels "robotic" or broken.
*   **Directory Listing:** [Issue #334](https://github.com/qhkm/zeptoclaw/issues/334) requested adding ZeptoClaw to "Shelldex." While closed, it indicates community desire for better discoverability of ZeptoClaw as a tool/shell agent.

## 5. Bugs & Stability
*   **[Medium Severity] Podman Build Failures:** [Issue #333](https://github.com/qhkm/zeptoclaw/issues/333) reports that `Dockerfile.dev` fails on Podman 5.7 legacy builders due to `--mount=type=cache` syntax.
    *   *Fix Status:* A fix is actively being reviewed in [PR #358](https://github.com/qhkm/zeptoclaw/pull/358), which adds auto-detection and fallbacks for Podman environments.
*   **[Low Severity] Coder Template Regression:** [PR #359](https://github.com/qhkm/zeptoclaw/pull/359) addresses a workflow issue where the "coder" template failed to check for existing test files, potentially overwriting code or duplicating tests.
*   **[Fixed] Image Content Loss:** As noted in Progress, the bug causing image-only messages to vanish in Discord ([Issue #357](https://github.com/qhkm/zeptoclaw/issues/357)) has been patched in [PR #346](https://github.com/qhkm/zeptoclaw/pull/346).

## 6. Feature Requests & Roadmap Signals
*   **Agent Client Protocol (ACP):** The open [PR #356](https://github.com/qhkm/zeptoclaw/pull/356) suggests the next major version will likely treat ZeptoClaw as a headless worker that can be controlled by other applications, moving beyond simple chatbot usage.
*   **Telegram Rich UI:** The request for typing indicators and formatting in [Issue #331](https://github.com/qhkm/zeptoclaw/issues/331) is a strong candidate for the next channel update.
*   **Improved Coder Workflow:** [PR #359](https://github.com/qhkm/zeptoclaw/pull/359) hints at a roadmap focusing on making ZeptoClaw a better autonomous developer assistant (using `edit_file` and running existing tests).

## 7. User Feedback Summary
*   **Pain Point:** Users running non-Docker environments (specifically Podman) are hitting build walls due to strict BuildKit assumptions.
*   **Pain Point:** Telegram users feel the current integration is visually "messy" and unresponsive (lack of typing indicators), reducing the perceived quality of the agent.
*   **Satisfaction:** The quick closure of the Discord image bug and the proactive security hardening suggest a highly responsive security posture, which is a strong trust signal for enterprise or power users.

## 8. Backlog Watch
*   **[PR #355](https://github.com/qhkm/zeptoclaw/pull/355) (Image Content Handling):** This PR is currently open and relates to [PR #346](https://github.com/qhkm/zeptoclaw/pull/346). It appears to be a dependency or related fix for handling image content in the main agent loop. It requires reviewer attention to ensure the multimodal fixes are complete.
*   **[Issue #331](https://github.com/qhkm/zeptoclaw/issues/331) (Telegram):** With only 1 comment so far, this feature request risks stalling. Given the user demand for better chat UI, maintaining momentum here is advised.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

No activity in the last 24 hours.

</details>