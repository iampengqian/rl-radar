# OpenClaw Ecosystem Digest 2026-03-13

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-03-12 22:03 UTC

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

# OpenClaw Project Digest: 2026-03-13

## 1. Today's Overview
OpenClaw is experiencing **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours. The project is in a critical phase following the `v2026.3.11` security release, which addressed a severe Cross-Site WebSocket Hijacking (CSWSH) vulnerability. While the security patch was the primary focus, the community is heavily engaged in debugging a wave of regressions introduced in recent updates (specifically `2026.3.7` through `2026.3.11`), particularly concerning Gateway stability, Cron job execution, and file editing tools. The volume of open issues (408) compared to closed (92) suggests the maintainers are currently flooded with bug reports and support requests.

## 2. Releases

### **v2026.3.11** (Stable) & **v2026.3.11-beta.1**
*   **Security Fix (Critical):** Addressed **GHSA-5wcw-8jjv-m286**.
    *   **Vulnerability:** Cross-Site WebSocket Hijacking (CSWSH) in `trusted-proxy` mode.
    *   **Impact:** Untrusted browser origins could gain `operator.admin` access if proxy headers were missing or ignored.
    *   **Change:** Enforced strict browser origin validation for *all* browser-originated connections, regardless of proxy header presence.
*   **Action Required:** Administrators running OpenClaw behind reverse proxies (nginx, etc.) in `trusted-proxy` mode must ensure origin validation is correctly configured to avoid breaking legitimate connections.

## 3. Project Progress

**Active Development Fronts:**
*   **Sandbox Architecture:** Major work is underway to refactor the sandbox environment using **Firecracker microVMs** and a new Go-based runner service (PRs [#43863](https://github.com/openclaw/openclaw/pull/43863), [#44259](https://github.com/openclaw/openclaw/pull/44259)).
*   **Gateway Resilience:** Significant effort is being placed on fixing restart loops and message recovery. PR [#41597](https://github.com/openclaw/openclaw/pull/41597) introduces an inbound drain queue to prevent message loss during restarts, and [#43961](https://github.com/openclaw/openclaw/pull/43961) hardens the process shutdown sequence with SIGKILL fallbacks.
*   **Media & Voice:** PR [#43501](https://github.com/openclaw/openclaw/pull/43501) adds support for the **OpenAI Realtime API**, aiming to reduce voice conversation latency from seconds to milliseconds.
*   **Tooling & UX:** PR [#44382](https://github.com/openclaw/openclaw/pull/44382) introduces a theming system for the TUI, and [#44399](https://github.com/openclaw/openclaw/pull/44399) adds native image fallback for MiniMax models.

## 4. Community Hot Topics

1.  **Internationalization Demand (Issue [#3460](https://github.com/openclaw/openclaw/issues/3460))**
    *   **Activity:** 97 comments.
    *   **Analysis:** This is the most active thread. Users globally are pushing for i18n support. The maintainers acknowledge the demand but cite bandwidth limitations. The community seems willing to contribute PRs, indicating a need for a localization framework/guideline from the core team.

2.  **DingTalk Integration (Issue [#26534](https://github.com/openclaw/openclaw/issues/26534))**
    *   **Activity:** 60 comments, 19 thumbs up.
    *   **Analysis:** Strong demand from the enterprise/Asian market to include DingTalk in the first-install wizard. Currently supported but hidden, users want seamless onboarding.

3.  **Visual Capabilities for Agents (Issue [#28744](https://github.com/openclaw/openclaw/issues/28744))**
    *   **Activity:** 14 comments.
    *   **Analysis:** Users expect Agents on platforms like Feishu to "see" images. The current limitation (platform strips image data before reaching the model) is a major blocker for multi-modal use cases.

4.  **OpenCode Go Subscription (Issue [#27009](https://github.com/openclaw/openclaw/issues/27009))**
    *   **Activity:** 22 comments, 25 thumbs up.
    *   **Analysis:** High interest in integrating affordable subscription plans for open-weight models (Kimi K2.5, GLM-5) directly into the onboarding flow.

## 5. Bugs & Stability

**Critical Regressions (Requires Immediate Attention):**

1.  **Sandbox File Corruption (Issue [#44122](https://github.com/openclaw/openclaw/issues/44122))**
    *   **Severity:** Critical.
    *   **Symptom:** The v3.11 security hardening introduced a regression where Write/Edit tools silently wipe files to **0 bytes** if `python3` is present in the sandbox.
    *   **Status:** Open, confirmed root cause identified.

2.  **Gateway Restart Instability (Issue [#44093](https://github.com/openclaw/openclaw/issues/44093), [#41315](https://github.com/openclaw/openclaw/issues/41315))**
    *   **Severity:** High.
    *   **Symptom:** `gateway restart` crashes the service or leaves it in a "not loaded" state on macOS, often requiring manual reinstall.
    *   **Fix PR:** [#43961](https://github.com/openclaw/openclaw/pull/43961) (Open).

3.  **Cron Jobs Broken (Issue [#42883](https://github.com/openclaw/openclaw/issues/42883), [#40868](https://github.com/openclaw/openclaw/issues/40868))**
    *   **Severity:** High.
    *   **Symptom:** Update to 2026.3.8+ broke all Cron job execution (timing out or never starting).
    *   **Status:** Open.

4.  **Edit Tool Data Loss (Issue [#43858](https://github.com/openclaw/openclaw/issues/43858))**
    *   **Severity:** High.
    *   **Symptom:** `Edit` tool reports success but wipes file content.
    *   **Status:** Open.

5.  **API Rate Limit False Positives (Issue [#32828](https://github.com/openclaw/openclaw/issues/32828))**
    *   **Severity:** Medium.
    *   **Symptom:** OpenClaw reports "Rate limit reached" even when underlying APIs (Claude, OpenAI) are fully functional.

## 6. Feature Requests & Roadmap Signals

*   **Real-Time Voice:** Strong movement on real-time audio support (PR [#43501](https://github.com/openclaw/openclaw/pull/43501)), likely to land in the next release cycle.
*   **Desktop Apps:** Continued demand for Linux/Windows native apps (Issue [#75](https://github.com/openclaw/openclaw/issues/75)) to match macOS feature parity.
*   **Provider Agnostic Web Tools:** PR [#44388](https://github.com/openclaw/openclaw/pull/44388) suggests a move toward decoupling web search/scrape tools from specific providers, giving users more choice.
*   **Backup/Restore:** Request for a standardized utility for config and history migration (Issue [#13616](https://github.com/openclaw/openclaw/issues/13616)).

## 7. User Feedback Summary

*   **Pain Point - Context Switching:** Users are frustrated by hard crashes when switching models mid-session if context lengths differ (Issue [#44303](https://github.com/openclaw/openclaw/issues/44303)). They desire graceful truncation.
*   **Pain Point - Communication:** Users feel "blind" during gateway restarts or context compaction. PR [#38805](https://github.com/openclaw/openclaw/pull/38805) (notify on compaction) addresses this directly.
*   **Pain Point - Authentication:** OAuth flows on remote VPS/SSH environments are hanging (Issue [#41885](https://github.com/openclaw/openclaw/issues/41885)), hindering remote setups.
*   **Sentiment:** The community is highly active but currently strained by stability issues in the `.7` to `.11` releases. The rapid response to security vulnerabilities is appreciated, but the resulting regressions are causing friction.

## 8. Backlog Watch

*   **Issue [#75](https://github.com/openclaw/openclaw/issues/75) (Linux/Windows Apps):** Created 2026-01-01. High demand (60 thumbs up), but no official movement yet.
*   **Issue [#3460](https://github.com/openclaw/openclaw/issues/3460) (i18n):** Created 2026-01-28. Maintainers marked as "help wanted" but lack bandwidth to orchestrate. Needs a champion.
*   **Issue [#15614](https://github.com/openclaw/openclaw/issues/15614) (WhatsApp QR Code):** Open since Feb 2026, stale. Users still reporting issues with QR recognition.
*   **PR [#41496](https://github.com/openclaw/openclaw/pull/41496) (Plugin Hooks):** A large structural change adding TTS/ASR hooks. Requires maintainer review as it blocks richer plugin development.

---

## Cross-Ecosystem Comparison

# Cross-Project Analysis: AI Agent & Personal Assistant Ecosystem
**Report Date:** 2026-03-13

## 1. Ecosystem Overview
The open-source personal AI assistant ecosystem is currently characterized by **intense fragmentation and rapid iteration**, moving away from monolithic chatbots toward highly customizable, multi-modal agent frameworks. Projects are aggressively competing to define the standard "operating system" for personal AI, resulting in a bifurcation between **heavy, gateway-centric architectures** (OpenClaw, ZeroClaw) designed for robustness and **lightweight, modular frameworks** (NanoBot, ZeptoClaw) prioritizing extensibility. A clear industry-wide shift is visible toward **containerized security sandboxes** and **standardized tool protocols (MCP)**, as developers prioritize data privacy and interoperability with a growing array of LLM providers.

## 2. Activity Comparison

The following table ranks ecosystem projects by raw development velocity and release cadence for 2026-03-13.

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score |
| :--- | :---: | :---: | :--- | :--- |
| **OpenClaw** | **500** | **500** | **Stable (v2026.3.11)** | 🟢 High Velocity / Strained Stability |
| **PicoClaw** | 22 | **95** | **Nightly (v0.2.2)** | 🟢 High Velocity / Expanding |
| **NanoClaw** | 22 | **34** | Pre-release | 🟡 Moderate / Architectural Refactor |
| **NanoBot** | 47 | 75 | No Release | 🟡 High Merge Rate / Documentation Debt |
| **ZeroClaw** | 50 | 35 | **Patch (v0.1.9a)** | 🟡 High Volatility / Stabilizing |
| **IronClaw** | 50 | 50 | No Release | 🟠 Bug Bash Phase / Critical Bugs |
| **ZeptoClaw** | 11 | 6 | No Release | 🟢 Stable / Feature Iteration |
| **Moltis** | 12 | 18 | No Release | 🟡 Moderate / Stabilizing |
| **CoPaw** | 30 | 20 | **Stable (v0.0.7)** | 🟠 High Engagement / Upgrade Friction |
| **TinyClaw** | 5 | 10 | **Patch (v0.0.11)** | 🟢 Rapid Iteration / Rebranding |
| **LobsterAI** | 4 | 11 | **Stable (v0.2.4)** | 🟢 Stable / Maintenance Mode |
| **EasyClaw** | Low | Low | **Stable (v1.6.7)** | 🟢 Low Velocity / Maintenance |

## 3. OpenClaw's Position

As the **core reference implementation**, OpenClaw commands the highest raw activity volume in the ecosystem, serving as the "upstream" for many architectural decisions found in forks and derivatives.

*   **Advantages vs. Peers:** OpenClaw remains the definitive standard for **gateway management** and **enterprise-grade sandboxing** (pioneering Firecracker microVMs). Unlike lighter competitors (ZeptoClaw, NanoBot), it offers a comprehensive out-of-the-box solution for voice, tools, and memory.
*   **Technical Approach:** It uses a strict "gateway proxy" architecture, strictly separating the agent logic from the execution environment. This contrasts with the "batteries-included" monolithic approach of PicoClaw or the "plugin-first" approach of NanoBot.
*   **Community Size:** With 500 daily issues/PRs, OpenClaw's community is an order of magnitude larger than most peers. However, this scale is currently a liability; the project is **flooded** with regression reports following security patches, indicating a "too big to fail" dependency risk compared to leaner alternatives.

## 4. Shared Technical Focus Areas

The community signals reveal three primary technical requirements converging across the ecosystem:

### A. Containerized Security & Sandboxing
*   **Trend:** Moving away from `exec()` calls in the host environment to strict isolation.
*   **Implementations:**
    *   **OpenClaw:** Pivoting to Firecracker microVMs (PR #43863).
    *   **NanoClaw:** Proxying credentials (Groq/OpenAI) to prevent key leakage (PR #999) and debating the "Container Trust Model" (Issue #865).
    *   **NanoBot:** Implementing Bubblewrap execution (PR #1940).
    *   **CoPaw:** Introduction of "Tool Guard" for command scanning (v0.0.7).

### B. Multi-Channel & Enterprise Integration
*   **Trend:** Agents must meet users where they are, specifically in Asian enterprise markets.
*   **High Demand Integrations:**
    *   **Feishu/Lark:** Supported by ZeroClaw, NanoClaw, PicoClaw, LobsterAI, and CoPaw. ZeroClaw specifically noted fixing decryption bugs for this channel.
    *   **DingTalk:** Heavily requested in OpenClaw (Issue #26534) and NanoBot (PR #1925).
    *   **Matrix:** A strong focus for privacy-centric users in ZeroClaw and PicoClaw.

### C. Token Optimization & Context Management
*   **Trend:** Reducing the cost and latency of massive context windows.
*   **Implementations:**
    *   **NanoClaw:** Closing "Token Cost Reduction" issues (#980-#983) focused on compression and inline compaction.
    *   **OpenClaw:** Users demanding graceful context truncation during model switches (Issue #44303).
    *   **Moltis:** Addressing stop-token leakage in local LLMs (PR #397).

## 5. Differentiation Analysis

### Feature Focus: Usability vs. Infrastructure
*   **OpenClaw, IronClaw, ZeroClaw** focus on **Infrastructure**: Stability of the gateway, restart loops, database atomicity, and CI/CD pipelines.
*   **TinyClaw, CoPaw, ZeptoClaw** focus on **Usability**: Setup wizards, web-based management interfaces (TinyOffice), and CLI polish (shimmer spinners).

### Target Users: Power Users vs. Enterprise
*   **NanoBot & ZeptoClaw** target **Developers/Hackers**: Highly modular, "bring your own model," focused on extensibility and custom skills.
*   **OpenClaw & PicoClaw** target **Power Users & SMBs**: Comprehensive feature sets including voice, rich media, and platform-native apps.

### Architectural Philosophy
*   **Mono-repo (OpenClaw, PicoClaw):** Tightly integrated features, harder to debug, higher regression risk.
*   **Modular (NanoBot, Moltis):** Plugin-based skills, cleaner separation of concerns, but higher configuration complexity.

## 6. Community Momentum & Maturity

### Tier 1: High Velocity / Rapid Iteration (Risk of Instability)
*   **OpenClaw, PicoClaw, NanoBot**
    *   These projects are moving fast but accumulating technical debt. OpenClaw's "Critical" regression (Issue #44122) and IronClaw's P1 bugs indicate that speed is currently compromising stability.

### Tier 2: Stabilization / Architectural Refinement
*   **NanoClaw, ZeroClaw, Moltis**
    *   These teams are fixing deployment blockers (GLIBC errors, release pipelines) and refactoring core security (credential proxying). They are likely safer bets for production use cases today than Tier 1.

### Tier 3: Emerging / Niche
*   **TinyClaw, ZeptoClaw**
    *   Small teams shipping distinct, high-value features (e.g., deep-research skills, rebranding to AGI frameworks). High innovation potential but lower resource redundancy.

## 7. Trend Signals

1.  **The "Local First" & Privacy Stack is Maturing:**
    *   Multiple projects (Moltis, NanoBot, PicoClaw) are prioritizing **Ollama connectivity** and **local LLM support** (Vulkan, MLX). The "out of the box" experience for local models is currently the single biggest friction point (OpenClaw Issue #3460, PicoClaw Issue #1161).

2.  **MCP (Model Context Protocol) is Becoming the Standard:**
    *   Support for MCP is no longer optional; it is the baseline for tool interoperability. ZeroClaw (Issue #3153), NanoClaw, and Moltis are integrating this rapidly.

3.  **User Tolerance for "Black Box" Agents is Dropping:**
    *   There is a strong backlash against silent failures and hallucinations. Users are demanding **"Human-in-the-loop" UI** (CoPaw's Tool Guard, ZeptoClaw's `ask_clarification` tool) and **transparency features** (OpenClaw's context compaction notifications).

4.  **Asian Market Dominance in Adoption:**
    *   Support for Chinese platforms (DingTalk, Feishu) and Chinese LLMs (Kimi, GLM, VolcEngine) is a leading driver of feature requests across OpenClaw, NanoBot, and ZeptoClaw, suggesting the primary growth market for these assistants is currently in Asia.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-03-13

## 1. Today's Overview
NanoBot exhibits **high velocity** today with 75 updated Pull Requests and 47 Issues, signaling a rapidly evolving codebase and an active, engaged community. The project is currently in an intense integration phase, seeing a flood of third-party provider additions (Google Vertex AI, VolcEngine) and channel improvements (DingTalk, QQ). However, the high volume of open bugs regarding memory handling and specific provider incompatibilities suggests the rapid expansion is straining stability. With 41 merged PRs, the maintainers are aggressively shipping fixes and features, though no official tagged release has occurred recently.

## 2. Releases
**No new releases** were recorded today. The last tagged version remains absent from GitHub Releases (though available on PyPI), which continues to be a point of friction for users tracking changelogs (Reference: [Issue #88](https://github.com/HKUDS/nanobot/issues/88)).

## 3. Project Progress
Significant strides were made in ecosystem expansion and core tooling:
*   **New Provider Support:** Merged support for **VolcEngine and BytePlus** ([PR #1608](https://github.com/HKUDS/nanobot/pull/1608)) and opened PRs for **Google Vertex AI** ([PR #1943](https://github.com/HKUDS/nanobot/pull/1943)) and **Mistral** transcription services ([PR #1680](https://github.com/HKUDS/nanobot/pull/1680)).
*   **Security Enhancements:** A crucial PR introduced **sandbox execution via Bubblewrap** ([PR #1940](https://github.com/HKUDS/nanobot/pull/1940)), addressing a major vulnerability where the bot could leak its own config keys.
*   **UX & CLI Fixes:** A fix for CLI output corruption when using async subagents was merged ([PR #1930](https://github.com/HKUDS/nanobot/pull/1930)), alongside a feature to allow **disabling skills** without deletion ([PR #1933](https://github.com/HKUDS/nanobot/pull/1933)).
*   **Channel Improvements:** PRs opened for DingTalk file/rich-text support ([PR #1925](https://github.com/HKUDS/nanobot/pull/1925)) and fixing legacy QQ client compatibility ([PR #1941](https://github.com/HKUDS/nanobot/pull/1941)).

## 4. Community Hot Topics
*   **Self-Hosted WebUI:** A community member announced `[nanobot-webui]` ([Issue #1922](https://github.com/HKUDS/nanobot/issues/1922)), a full management panel. This received high engagement (👍 3), indicating a strong demand for a GUI over CLI.
*   **Security Architecture:** A deep-dive discussion on securing `config.json` ([Issue #1873](https://github.com/HKUDS/nanobot/issues/1873)) highlighted risks of the agent accessing its own secrets via `exec()`.
*   **Search Provider Modularity:** Users are pushing for a swappable backend for `web_search` ([Issue #1719](https://github.com/HKUDS/nanobot/issues/1717)), noting that the current hardcoding of Brave blocks integration of SearXNG/Tavily.
*   **Localization:** A request for Chinese documentation ([Issue #1617](https://github.com/HKUDS/nanobot/issues/1617)) sparked debate about inclusivity versus maintenance burden.

## 5. Bugs & Stability
*   **Memory Consolidation Failure (Critical):** Users report the agent failing to save memory, leaving sessions uncleared ([Issue #1931](https://github.com/HKUDS/nanobot/issues/1931)), and similar failures with DashScope models ([Issue #1927](https://github.com/HKUDS/nanobot/issues/1927)) due to `tool_choice` incompatibilities.
*   **Telegram Double Response:** A bug causing the bot to reply twice (Markdown + Plain) affects UX ([Issue #1692](https://github.com/HKUDS/nanobot/issues/1692)).
*   **QQ Client Breakage:** Recent changes broke interaction with legacy QQ clients due to Markdown payloads ([Issue #1936](https://github.com/HKUDS/nanobot/issues/1936)); a fix is already pending in [PR #1941](https://github.com/HKUDS/nanobot/pull/1941).
*   **Matrix Channel:** Still reported as non-functional in the latest version ([Issue #1300](https://github.com/HKUDS/nanobot/issues/1300)).

## 6. Feature Requests & Roadmap Signals
*   **Council of Bots:** A request for a multi-agent orchestrator ("Nanobot Council") suggests users are pushing the tool toward complex agentic workflows ([Issue #1928](https://github.com/HKUDS/nanobot/issues/1928)).
*   **Configurable Memory/Tools:** Users want the ability to toggle memory and specific web tools off when using lower-quality models to prevent hallucination/instability ([Issue #1881](https://github.com/HKUDS/nanobot/issues/1881)).
*   **Voice Support:** Continued interest in voice-to-voice capabilities ([Issue #1106](https://github.com/HKUDS/nanobot/issues/1106)).
*   **Pluggable Web Search:** The high 👍 count (10) on [Issue #1719](https://github.com/HKUDS/nanobot/issues/1719) makes this a likely candidate for future core refactoring.

## 7. User Feedback Summary
Users are enthusiastic about the extensibility but frustrated by **configuration drift** (documentation not matching current `config.json` versions) and **provider-specific quirks**. The "good first issue" label on PyPI releases and documentation updates indicates a need for better release hygiene. The prompt creation of a WebUI by the community underscores that the current CLI/TUI experience is a barrier for non-technical users. Furthermore, users employing non-GPT models (StepFun, DashScope) are hitting consistent roadblocks with tool-calling implementations.

## 8. Backlog Watch
*   **Matrix Channel Support:** [Issue #1300](https://github.com/HKUDS/nanobot/issues/1300) remains open and active with no clear resolution timeline, frustrating users trying to adopt the platform.
*   **PyPI vs GitHub Releases:** [Issue #1059](https://github.com/HKUDS/nanobot/issues/1059) and [Issue #88](https://github.com/HKUDS/nanobot/issues/88) highlight a need for better release synchronization.
*   **WhatsApp Bridge:** [Issue #92](https://github.com/HKUDS/nanobot/issues/92) and [Issue #90](https://github.com/HKUDS/nanobot/issues/90) regarding WhatsApp/Imessage bridges remain partially unresolved.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-03-13

## 1. Today's Overview
ZeroClaw exhibits **high volatility and active remediation** today. The project is aggressively addressing a critical release pipeline failure (`GLIBC_2.39` mismatch) that blocked the distribution of the latest `v0.1.9a` binary for some users. Simultaneously, the engineering team is resolving a backlog of configuration and channel integration bugs—specifically regarding Feishu/Lark and Matrix—following a recent branch consolidation from `main` to `master`. With 50 issues updated and 35 open PRs, the development velocity is high, but stability appears strained as the project integrates complex features like MCP (Model Context Protocol) support and new delivery channels.

## 2. Releases
### **v0.1.9a**
*   **Status:** Released (Recently)
*   **Key Fixes:**
    *   **Memory/Config:** Resolved an issue where the embedding API key lookup used the wrong environment variable (`default_provider` instead of `embedding_provider`). (PR [#3184](https://github.com/zeroclaw-labs/zeroclaw/pull/3184))
    *   **CI/Release:** Downgraded `action-gh-release` to v2.4.2 to fix release finalization errors.

## 3. Project Progress
The core team and contributors focused heavily on **stabilizing the release pipeline** and **fixing configuration regressions** following the `master` branch consolidation.

*   **CI/CD Pipeline Fixes:**
    *   PR [#3365](https://github.com/zeroclaw-labs/zeroclaw/pull/3365) pinned release workflows to `ubuntu-latest` to resolve the critical `GLIBC_2.39` cache mismatch.
    *   PR [#3363](https://github.com/zeroclaw-labs/zeroclaw/pull/3363) implemented "Thin LTO" profiles to speed up CI build times.
*   **Channel & Config Enhancements:**
    *   PR [#3355](https://github.com/zeroclaw-labs/zeroclaw/pull/3355) fixed a bug where Feishu channel secrets were not decrypted on load.
    *   PR [#3356](https://github.com/zeroclaw-labs/zeroclaw/pull/3356) addressed the "system not activated" loop by ensuring existing configs are reported as initialized.
    *   PR [#3324](https://github.com/zeroclaw-labs/zeroclaw/pull/3324) added a new `channel send` CLI command, allowing ZeroClaw to proactively send messages (e.g., for sensor alerts).
*   **Localization & Onboarding:**
    *   PR [#3352](https://github.com/zeroclaw-labs/zeroclaw/pull/3352) and [#3350](https://github.com/zeroclaw-labs/zeroclaw/pull/3350) fixed broken installation paths resulting from the branch migration.

## 4. Community Hot Topics
The most engaged discussions center on **deployment stability** and **channel integration usability**.

1.  **Critical Deployment Blockers (GLIBC):** Issue [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) (9 comments) highlights severe frustration regarding `GLIBC_2.39` errors, preventing users from running the agent on standard Linux distros.
2.  **Feishu/Lark Integration:** Issue [#3012](https://github.com/zeroclaw-labs/zeroclaw/issues/3012) (9 comments) discusses the misnaming of `channel-lark` and the lack of documentation/defaults for Feishu, indicating a strong user base in Chinese markets.
3.  **Matrix Channel Maturity:** Issue [#2916](https://github.com/zeroclaw-labs/zeroclaw/issues/2916) (3 comments) and [#3361](https://github.com/zeroclaw-labs/zeroclaw/issues/3361) request better E2EE support and the ability to use Matrix as a delivery channel for scheduled jobs, showing demand for privacy-focused communication channels.
4.  **Transparency:** Issue [#2922](https://github.com/zeroclaw-labs/zeroclaw/issues/2922) (12 reactions) posted a community update apologizing for recent disruptions, signaling that the project is navigating internal challenges while trying to maintain trust.

## 5. Bugs & Stability
Stability is currently **S1/S0 (Critical/High)** in specific environments due to tooling and encoding issues.

*   **S0 - Data Loss / Security:**
    *   **Discord Silent Failure:** [#2896](https://github.com/zeroclaw-labs/zeroclaw/issues/2896) reports Discord webhooks silently dropping events after the first message. (Status: Closed/Fixed).
    *   **WebUI Connection Failure:** [#2910](https://github.com/zeroclaw-labs/zeroclaw/issues/2910) reports the WebUI agent failing to connect in v0.1.8. (Status: Open).
*   **S1 - Workflow Blocked:**
    *   **GLIBC Error:** [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) - Binary incompatibility with standard libc. Fix likely incoming via PR [#3365](https://github.com/zeroclaw-labs/zeroclaw/pull/3365).
    *   **Tool Call Blocking:** [#2880](https://github.com/zeroclaw-labs/zeroclaw/issues/2880) - Security policy blocks legitimate workspace access.
    *   **CJK Input Crash:** [#3024](https://github.com/zeroclaw-labs/zeroclaw/issues/3024) / [#2984](https://github.com/zeroclaw-labs/zeroclaw/issues/2984) - CLI crashes on Chinese input containing spaces. Fix merged in PR [#3322](https://github.com/zeroclaw-labs/zeroclaw/pull/3322).
    *   **Activation Loop:** [#2510](https://github.com/zeroclaw-labs/zeroclaw/issues/2510) - System claims it is not activated. Fix proposed in PR [#3356](https://github.com/zeroclaw-labs/zeroclaw/pull/3356).

## 6. Feature Requests & Roadmap Signals
Key signals indicate a push toward **enterprise integrations** and **extended agent capabilities**.

*   **MCP Support:** Feature request [#3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153) asks for MCP support in the `agent` subcommand. This is a strong signal that ZeroClaw is moving toward standardized tool interoperability.
*   **Azure OpenAI:** Request [#3176](https://github.com/zeroclaw-labs/zeroclaw/issues/3176) for Azure endpoints is highly active, suggesting enterprise adoption.
*   **Outbound Messaging:** The merge of `channel send` (PR [#3324](https://github.com/zeroclaw-labs/zeroclaw/pull/3324)) and request [#2907](https://github.com/zeroclaw-labs/zeroclaw/issues/2907) (Telegram Channels) indicates a shift from "Chatbot" to "Proactive Assistant" use cases (e.g., IoT alerts).
*   **Docker Usability:** Issue [#3359](https://github.com/zeroclaw-labs/zeroclaw/issues/3359) requests a shell in the Docker image (currently distroless), highlighting a conflict between security best practices and user convenience for debugging/file-ops.

## 7. User Feedback Summary
Users are currently facing **installation friction** and **configuration complexity**.
*   **Pain Points:** The transition from `main` to `master` broke several install scripts and localized docs. Users are frustrated by the lack of default support for major platforms like Feishu/Lark without manual feature flags (`--features channel-lark`).
*   **Satisfaction:** The community appreciates the transparency regarding internal issues (Issue #2922). The rapid fixes for encoding issues (CJK support) have been well received, though the GLIBC issue remains a major pain point for Linux users.
*   **Use Cases:** Users are trying to run ZeroClaw on IoT devices (Raspberry Pi sensors), standard corporate servers (Debian 12), and via privacy-focused networks (Matrix), finding the current "opinionated" defaults (e.g., distroless Docker, hardcoded timeouts) restrictive.

## 8. Backlog Watch
*   **Security Headers (Issue #8):** A MEDIUM severity issue regarding missing CORS/CSRF headers in the Gateway has been open since Feb 14. This needs maintainer attention before a wider public launch.
*   **Slow LLM Pacing (Issue #2963):** Users running local LLMs need configurable timeouts/pacing. This is critical for the "private AI" demographic but remains an open enhancement.
*   **Matrix E2EE Login (Issue #2916):** The login process for Matrix is currently cumbersome (manual token extraction). Improving this is vital for the adoption of ZeroClaw in privacy-centric communities.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-03-13

## 1. Today's Overview
PicoClaw demonstrates **high velocity** development activity today, characterized by a significant disparity between a large volume of new Pull Requests (95) and active Issues (22). The project appears to be in an aggressive **feature expansion and hardening phase**, evidenced by two back-to-back nightly releases (v0.2.2) that introduced substantial new channel capabilities (Matrix rich text) and provider support (LongCat). While the community is actively contributing major enhancements like Azure OpenAI and Mattermost support, the maintainers are simultaneously tackling critical security vulnerabilities (DoS risks) and planning a deep "Agent Refactor" to address architectural technical debt.

## 2. Releases
Two new nightly builds were released, indicating rapid integration of recent commits.

*   **v0.2.2-nightly.20260312.6612ca09**
    *   **Matrix Channel Upgrade:** Enabled rich-text messages, improving UX for Matrix users ([#1370](https://github.com/sipeed/picoclaw/pull/1370)).
    *   **New Provider:** Added support for the **LongCat** model provider ([#1317](https://github.com/sipeed/picoclaw/pull/1317)).
    *   **Agent Fix:** Resolved an initialization bug for MCP (Model Context Protocol) in direct agent mode.
*   **v0.2.2-nightly.20260312.6460a0a7**
    *   Automated nightly build serving as the base for the subsequent patch.

## 3. Project Progress
The merge log indicates a strong focus on **security hardening** and **provider extensibility**.

*   **Security Patches:** Critical fixes were merged to mitigate Denial of Service (DoS) risks.
    *   **Matrix:** Switched to streaming downloads for non-encrypted media to prevent memory exhaustion (PR [#1436](https://github.com/sipeed/picoclaw/pull/1436)).
    *   **LINE:** Limited webhook request body size to 1MB (PR [#1413](https://github.com/sipeed/picoclaw/pull/1413)).
*   **Fallback Logic:** Fixed a bug where the provider fallback chain would abort on transport resets (PR [#1420](https://github.com/sipeed/picoclaw/pull/1420)).
*   **New Providers:** Active PRs are open for **Azure OpenAI** (PR [#1422](https://github.com/sipeed/picoclaw/pull/1422)) and **ModelScope** (PR [#1447](https://github.com/sipeed/picoclaw/pull/1447)) support.
*   **Channel Expansion:** An implementation for **Mattermost** channel support via WebSocket API v4 is in progress (PR [#1288](https://github.com/sipeed/picoclaw/pull/1288)).

## 4. Community Hot Topics
The community is heavily focused on the architectural future of the project and configuration ease of use.

*   **[Agent Refactor Meta-Discussion]**(https://github.com/sipeed/picoclaw/issues/1216) (16 comments): The most active discussion revolves around a major proposed refactor. The core team argues that the current semantic layer is becoming too costly to maintain. The proposal includes defining `SOUL.md` (personality/values) and `AGENT.md` to separate character from configuration.
    *   *Underlying Need:* Users and devs need a more modular, maintainable core that allows for deeper customization without hacking the core logic.
*   **[Ollama Configuration Issues]**(https://github.com/sipeed/picoclaw/issues/1161) (15 comments): Users are struggling to get PicoClaw working with local Ollama instances (agent runs but no response).
    *   *Underlying Need:* There is a clear demand for better documentation or a "zero-config" setup wizard for local model providers.
*   **[Context Management Strategy]**(https://github.com/sipeed/picoclaw/issues/1439) (4 comments): A technical proposal to define hard boundaries for history, summary, and runtime context to optimize token usage.
    *   *Underlying Need:* As tasks get more complex, users are hitting context window limits and need smarter, more predictable context handling.

## 5. Bugs & Stability
Several stability issues were identified, with varying severity.

*   **Critical (DoS Risks) - *FIXED*:**
    *   Memory exhaustion via large file downloads in Matrix ([Issue #1405](https://github.com/sipeed/picoclaw/issues/1405)) - **Fixed in PR #1436**.
    *   Unbounded request bodies in LINE webhooks ([Issue #1407](https://github.com/sipeed/picoclaw/issues/1407)) - **Fixed in PR #1413**.
*   **High (Agent Logic):**
    *   **Fallback Chain Abort:** Connection resets (common with OpenRouter) were crashing the agent instead of triggering fallbacks ([Issue #1419](https://github.com/sipeed/picoclaw/issues/1419)) - **Fixed in PR #1420**.
    *   **Loop Detection:** Hard iteration limits (`max_tool_iterations`) are causing complex workflows to fail silently ([Issue #440](https://github.com/sipeed/picoclaw/issues/440)).
*   **Medium (UI/UX):**
    *   **Telegram Typing Loop:** Agent gets stuck sending "typing..." actions indefinitely ([Issue #1323](https://github.com/sipeed/picoclaw/issues/1323), [Issue #1212](https://github.com/sipeed/picoclaw/issues/1212)).
    *   **Firefox UI Bug:** Raw JSON configuration textarea collapses in Firefox ([Issue #1364](https://github.com/sipeed/picoclaw/issues/1364)).

## 6. Feature Requests & Roadmap Signals
*   **Azure OpenAI Support ([Issue #1424](https://github.com/sipeed/picoclaw/issues/1424)):** High demand for enterprise-grade OpenAI compatibility. PR [#1422](https://github.com/sipeed/picoclaw/pull/1422) is already open, likely to be merged soon.
*   **Telegram Native Reactions ([Issue #1328](https://github.com/sipeed/picoclaw/issues/1328)):** Request to use emoji reactions for "ack" instead of text replies to reduce noise. Aligns with the "Human-like interaction" trend.
*   **OpenWrt Support ([Issue #1132](https://github.com/sipeed/picoclaw/issues/1132)):** A request to optimize the binary/service for embedded router systems, indicating interest in "Edge AI" use cases.

## 7. User Feedback Summary
*   **Pain Point - Local Models:** Users find the configuration for local providers (Ollama) cryptic and error-prone. The agent often initializes successfully but fails to stream responses back to the user.
*   **Pain Point - Tool Safety:** The `exec` tool's safety guard is too aggressive, blocking commands containing URLs (e.g., `curl wttr.in`) because it misinterprets them as file path traversals ([Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)).
*   **Satisfaction:** The project is praised for its wide channel support (QQ, Feishu, Telegram, Matrix), though specific channel implementations (like QQ) still have stability kinks ([Issue #1426](https://github.com/sipeed/picoclaw/issues/1426)).

## 8. Backlog Watch
*   **[Agent Loop Limits]**(https://github.com/sipeed/picoclaw/issues/440): Open since Feb 18, this issue regarding `max_tool_iterations` stifling complex tasks remains critical for power users.
*   **[Guard Command Logic]**(https://github.com/sipeed/picoclaw/issues/1042): The regex-based safety guard for the exec tool needs an overhaul to distinguish between URLs and file paths.
*   **[Meta Agent Refactor]**(https://github.com/sipeed/picoclaw/issues/1216): While active, this is a massive undertaking. The community needs to keep an eye on whether this stalls or continues to receive incremental PRs.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-13

## 1. Today's Overview
NanoClaw demonstrates **extremely high development velocity** with 34 pull requests updated and 22 issues active in the last 24 hours. The project is in a phase of rapid feature expansion and architectural hardening, evidenced by significant work on the credential proxy system and new channel integrations. The merge rate of ~38% (13 merged/closed PRs) suggests an active but selective review process. Key themes for the day include **token cost optimization**, **container security boundaries**, and **multi-platform channel support**.

## 2. Releases
No new releases were recorded for this reporting period. The high volume of merged PRs indicates that changes are accumulating in the main branch, likely targeting an upcoming milestone release.

## 3. Project Progress
Significant architectural and feature advancements were merged or closed today:

*   **Multi-Provider Credential Security:** Merged PR [#999](https://github.com/qwibitai/nanoclaw/pull/999) extended the credential proxy to support **Groq and OpenAI API keys**, preventing these secrets from being exposed to untrusted containers. This complements the existing Anthropic proxy, addressing Issue [#878](https://github.com/qwibitai/nanoclaw/issues/878).
*   **Agent Protocol Hardening:** PR [#1003](https://github.com/qwibitai/nanoclaw/pull/1003) (Open/Fix) addresses Issue [#827](https://github.com/qwibitai/nanoclaw/issues/827) by adding validation for `FinishReason::ToolUse`. This prevents the agent from stalling when the LLM returns a "tool use" stop sequence with zero actual tool calls.
*   **New Channel Integrations:**
    *   **Telegram:** PR [#1014](https://github.com/qwibitai/nanoclaw/pull/1014) adds inline keyboard (callback query) support.
    *   **Feishu/Lark:** PR [#920](https://github.com/qwibitai/nanoclaw/pull/920) (Open) introduces the Feishu channel via WebSocket integration.
    *   **Google Chat:** Merged PRs [#1000](https://github.com/qwibitai/nanoclaw/pull/1000) (thread-scoped history) and [#1001](https://github.com/qwibitai/nanoclaw/pull/1001) (thread ID propagation) significantly improve reliability.
*   **Container Infrastructure:**
    *   Merged PR [#1004](https://github.com/qwibitai/nanoclaw/pull/1004) adds **Dokploy and Docker Compose** deployment support, simplifying production hosting.
    *   PR [#1010](https://github.com/qwibitai/nanoclaw/pull/1010) fixes dynamic gateway mounting for Apple Container compatibility.
*   **Token Optimization Strategy:** A suite of issues ([#980](https://github.com/qwibitai/nanoclaw/issues/980), [#981](https://github.com/qwibitai/nanoclaw/issues/981), [#982](https://github.com/qwibitai/nanoclaw/issues/982), [#983](https://github.com/qwibitai/nanoclaw/issues/983)) related to "Smart Token Cost Reduction" were closed, indicating that the planning phase for this major optimization is complete.

## 4. Community Hot Topics
Discussions are heavily focused on **security architecture** and **latency optimization**:

*   **Security Architecture Debate (Issue [#865](https://github.com/qwibitai/nanoclaw/issues/865)):** A high-priority enhancement request argues that the current container trust model is flawed. The author suggests moving scripts out of the agent level to a more secure boundary. This has sparked discussion about hardening the default sandboxing.
*   **OAuth Token Expiry (Issue [#730](https://github.com/qwibitai/nanoclaw/issues/730)):** Users running NanoClaw as a background service are experiencing 401 errors daily because `CLAUDE_CODE_OAUTH_TOKEN` expires. The community is debating automated token refresh mechanisms versus switching to API keys.
*   **Gemini Latency (Issue [#989](https://github.com/qwibitai/nanoclaw/issues/989)):** A detailed bug report highlights 3.5-minute latency on the Gemini Pro container path, attributed to massive 123K token context payloads. This aligns with the new Token Optimization roadmap.

## 5. Bugs & Stability
Stability issues reported today focus on infrastructure and agent correctness:

| Severity | Issue | Description | Status/Fix |
| :--- | :--- | :--- | :--- |
| **High** | [#341](https://github.com/qwibitai/nanoclaw/issues/341) | `add-discord` skill breaks Docker users with outdated Apple Container code. | **Open** - Needs patch in skill template. |
| **High** | [#827](https://github.com/qwibitai/nanoclaw/issues/827) | Agent accepts `ToolUse` finish reason with 0 tool calls, causing run failures. | **Fix Open** - [PR #1003](https://github.com/qwibitai/nanoclaw/pull/1003) |
| **High** | [#830](https://github.com/qwibitai/nanoclaw/issues/830) | Scheduled tasks are silently dropped if the session is busy (no retry/queue). | **Open** - Architectural fix proposed in issue. |
| **Medium** | [#1009](https://github.com/qwibitai/nanoclaw/pull/1009) | WhatsApp messages with lone Unicode surrogates crash the Claude API call. | **Fix Open** - [PR #1009](https://github.com/qwibitai/nanoclaw/pull/1009) adds sanitization. |
| **Low** | [#993](https://github.com/qwibitai/nanoclaw/issues/993) | Podman SSH connection drops silently on macOS after sleep/wake. | **Closed** - Workaround identified (restart machine). |

## 6. Feature Requests & Roadmap Signals
The roadmap is clearly trending toward **token efficiency** and **long-term memory**:

*   **Token Optimization (Imminent):** Issues [#980](https://github.com/qwibitai/nanoclaw/issues/980), [#981](https://github.com/qwibitai/nanoclaw/issues/981), and [#982](https://github.com/qwibitai/nanoclaw/issues/982) (all closed) define a strategy for "Inline Compaction," response length control, and `CLAUDE.md` compression. Expect implementation PRs for these in the next release to reduce operational costs.
*   **Semantic Memory (High Interest):** PR [#979](https://github.com/qwibitai/nanoclaw/pull/979) (Open) introduces **LanceDB** for persistent semantic memory across sessions. This is a highly anticipated feature to solve the "agent amnesia" problem.
*   **Extended Credential Proxy:** The successful extension of the proxy (PR [#999](https://github.com/qwibitai/nanoclaw/pull/999)) signals a move toward supporting a wider variety of LLM backends (Groq, OpenAI) within the secure container framework.
*   **Deployment Flexibility:** Merged support for Dokploy/Docker Compose ([PR #1004](https://github.com/qwibitai/nanoclaw/pull/1004)) suggests a push to make self-hosting easier for non-enterprise users.

## 7. User Feedback Summary
*   **Pain Point (Setup Complexity):** Issue [#973](https://github.com/qwibitai/nanoclaw/issues/973) notes that setup via Claude Code is "incredibly slow," with users questioning why a simple JSON file cannot be used instead of complex orchestration.
*   **Pain Point (Agent Hallucination):** Issue [#829](https://github.com/qwibitai/nanoclaw/issues/829) highlights that the agent sometimes fabricates tool execution results. Users are requesting stricter `SOUL.md` rules to force tool-result verification.
*   **Positive Signal:** The request for **Podman support** (Issue [#957](https://github.com/qwibitai/nanoclaw/issues/957)) indicates adoption by security-conscious users who prefer rootless container runtimes over Docker.

## 8. Backlog Watch
The following high-priority items require maintainer attention:

*   **Issue [#730](https://github.com/qwibitai/nanoclaw/issues/730) (OAuth Expiry):** This is a critical usability blocker for hosted instances. Despite being open since March 5, no definitive fix has been merged.
*   **Issue [#865](https://github.com/qwibitai/nanoclaw/issues/865) (Container Trust Model):** This architectural critique challenges the core security assumptions. It needs a formal response or a roadmap item for hardening.
*   **PR [#979](https://github.com/qwibitai/nanoclaw/pull/979) (LanceDB Memory):** A high-value feature PR that has been open for a day. This is likely a complex review requiring security and performance validation.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-13

## 1. Today's Overview

IronClaw is experiencing **intense development activity**, likely driven by an active "bug bash" event. With 50 issues and 50 PRs updated in the last 24 hours (88% remain open/active), the community is deeply engaged in stress-testing the platform. The focus is heavily on **integration stability**, particularly regarding **Google Workspace tools**, **Telegram channel connectivity**, and the **Routine engine**. While no new releases were cut today, the high volume of bug reports (many P1) suggests the team is preparing for a significant stability patch. The project appears to be in a "stabilization" phase following recent feature additions.

## 2. Releases

**No new releases** were published today. The last tagged version appears to be causing installation issues for extensions (Issue #1060), indicating a potential mismatch between the registry manifest and released artifacts.

## 3. Project Progress

Several key PRs were merged or closed, advancing the project's robustness:

-   **OpenAI/Ollama Compatibility**: [PR #216](https://github.com/nearai/ironclaw/pull/216) (Merged) significantly hardened the OpenAI-compatible tool flow and added Ollama support for inference and embeddings.
-   **Security Utilities**: [PR #457](https://github.com/nearai/ironclaw/pull/457) (Merged) introduced a reusable sensitive JSON redaction helper, isolating security logic for better maintainability.
-   **Search Customization**: [PR #234](https://github.com/nearai/ironclaw/pull/234) (Merged) implemented a configurable hybrid search fusion strategy, allowing users to tune RRF vs. weighted search.
-   **Smart Routing**: [PR #379](https://github.com/nearai/ironclaw/pull/379) (Merged) generalized the `LLM_CHEAP_MODEL` variable, enabling smart routing (cheap/fast model for simple tasks) across all backends, not just NearAI.

Active development continues on large-scope items like **Programmatic Tool Calling (PTC)** ([PR #625](https://github.com/nearai/ironclaw/pull/625)) and **self-repair mechanisms** for stuck jobs ([PR #712](https://github.com/nearai/ironclaw/pull/712)).

## 4. Community Hot Topics

The most active discussions revolve around **installation failures** and **cross-channel synchronization**:

1.  **Extension Installation Crisis**: [Issue #1060](https://github.com/nearai/ironclaw/issues/1060) (3 comments) reports that extensions (Gmail, etc.) cannot be installed due to `HTTP 404` errors on release assets. This is blocking new users and is likely related to versioning paths in the registry.
2.  **Channel Integration (Telegram/Google)**: A cluster of issues ([#299](https://github.com/nearai/ironclaw/issues/299), [#992](https://github.com/nearai/ironclaw/issues/992)) highlights user struggles to connect external channels. Users specifically want to use IronClaw as a bridge between Telegram and browser automation (Browserbase), but are hitting authentication walls.
3.  **Multi-Channel Context**: Users are reporting that "Routines" and context do not sync properly between the Web UI and Telegram ([Issue #995](https://github.com/nearai/ironclaw/issues/995)), revealing a critical gap in the agent's unified memory across interfaces.

## 5. Bugs & Stability

Today's bug reports are numerous and severe, focusing on the **Routine Engine** and **OAuth flows**. Many are labeled `P1` or `CRITICAL`.

| Severity | Issue | Description | Fix Status |
| :--- | :--- | :--- | :--- |
| **CRITICAL** | [#823](https://github.com/nearai/ironclaw/issues/823) | **N+1 Query Pattern** in event trigger loop causing performance collapse. | Open |
| **CRITICAL** | [#813](https://github.com/nearai/ironclaw/issues/813) | **Non-transactional DB updates** risking data corruption during concurrent metadata/token setup. | Open |
| **P1** | [#1060](https://github.com/nearai/ironclaw/issues/1060) | **Extensions 404**: Cannot download/install tools (Gmail, etc.) due to broken artifact URLs. | Open |
| **P1** | [#992](https://github.com/nearai/ironclaw/issues/992) | **Google OAuth Broken**: `clientid` typo in URL params breaks authentication from Telegram. | Open |
| **P1** | [#999](https://github.com/nearai/ironclaw/issues/999) | **Google Sheets 403**: Permission denied even after successful OAuth. | Open |
| **P1** | [#994](https://github.com/nearai/ironclaw/issues/994) | **Routine Broadcast Failure**: Notifications sent to `chat_id="default"` instead of actual user ID. | Open |
| **P1** | [#996](https://github.com/nearai/ironclaw/issues/996) | **UI Blocking**: Tool approval modal requires manual page reload to appear. | Open |

A comprehensive fix for extension lifecycle bugs is currently in review at [PR #1070](https://github.com/nearai/ironclaw/pull/1070).

## 6. Feature Requests & Roadmap Signals

User needs are clustering around **unified cross-channel experience** and **external tool flexibility**:

-   **Cross-Channel Memory**: [Issue #1062](https://github.com/nearai/ironclaw/issues/1062) and [#1061](https://github.com/nearai/ironclaw/issues/1061) request tools and system prompts to look up and sync conversations across different channels (Web vs. Telegram).
-   **MCP Flexibility**: [Issue #299](https://github.com/nearai/ironclaw/issues/299) underscores a strong desire for users to bring their own MCP servers (like Browserbase), requiring more flexible JSON configuration for `mcpServers`.
-   **E2E Testing**: [Issue #1044](https://github.com/nearai/ironclaw/issues/1044) proposes using Claude Code + Chrome MCP for automated end-to-end testing, signaling a push toward automated quality assurance.

**Prediction**: The next version will likely focus heavily on fixing the **Routine Engine** (caching, broadcast IDs) and **OAuth reliability**, as these are currently breaking core user flows.

## 7. User Feedback Summary

Users are actively testing the boundaries of IronClaw as a multi-modal assistant, leading to specific friction points:

-   **Pain Point - "Siloed" Channels**: Users are frustrated that the agent feels like a different "person" on Telegram vs. Web Chat. Routines created in one are invisible in the other ([#995](https://github.com/nearai/ironclaw/issues/995)).
-   **Pain Point - Silent Failures**: Several issues ([#1002](https://github.com/nearai/ironclaw/issues/1002), [#994](https://github.com/nearai/ironclaw/issues/994)) mention operations that "succeed" technically (sheet created, routine fired) but fail to perform the visible action (no data, no message), eroding trust.
-   **Pain Point - Dark Mode Copy/Paste**: A minor but annoying UX bug ([#1059](https://github.com/nearai/ironclaw/issues/1059)) where copying text from the dark-themed chat results in invisible white text when pasted into white-background apps like Google Sheets.
-   **Positive Signal**: The merge of generic smart routing ([PR #379](https://github.com/nearai/ironclaw/pull/379)) was well-timed, indicating responsiveness to user needs for cost optimization across LLM providers.

## 8. Backlog Watch

-   **Critical Performance Issues**: [Issue #823](https://github.com/nearai/ironclaw/issues/823) (N+1 queries) and [#813](https://github.com/nearai/ironclaw/issues/813) (Non-transactional updates) are flagged by CI as `CRITICAL` and risk system stability under load. These need immediate maintainer attention.
-   **Stale Security Concern**: [Issue #722](https://github.com/nearai/ironclaw/issues/722) (Webhook secret in body vs. header) remains open since March 8th. This is a potential security vulnerability and documentation inconsistency that should be resolved before the next release.
-   **High-Risk Safety PR**: [PR #614](https://github.com/nearai/ironclaw/pull/614) (LLM-as-Judge for tool calls) is a large, high-impact feature that has been open for a week. It introduces latency trade-offs for safety and needs thorough review.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest (2026-03-13)

## 1. Today's Overview
The LobsterAI project demonstrates **high velocity and active maintenance** as of March 13, 2026. The team successfully pushed a new stable release (v0.2.4) addressing critical startup bugs, while simultaneously advancing significant performance optimizations for the "OpenClaw" gateway. With 11 updated Pull Requests (predominantly merged) and active discussions around deployment stability and feature expansion, the project is in a phase of aggressive iteration and stability consolidation.

## 2. Releases
### **v0.2.4**
- **Type:** Patch Release
- **Changelog:**
  - **Bug Fix:** Resolved an application startup issue where the interface would hang in a permanent loading state ([PR #396](https://github.com/netease-youdao/LobsterAI/pull/396)).
  - **Bug Fix:** Fixed connectivity test bugs specifically related to IM (Instant Messaging) channels ([PR #393](https://github.com/netease-youdao/LobsterAI/pull/393)).
- **Migration Note:** Users experiencing startup freezes or IM connection errors should update immediately.
- **Full Changelog:** [v0.2.3...v0.2.4](https://github.com/netease-youdao/LobsterAI/compare/v0.2.3...)

## 3. Project Progress
Today's merged PRs indicate a strong focus on infrastructure stability, build processes, and extensibility:
- **Performance Engineering:** Merged a major optimization for the OpenClaw gateway ([PR #395](https://github.com/netease-youdao/LobsterAI/pull/395)). By implementing `esbuild` bundling and compile caching, gateway startup time in Windows Electron environments was reduced from **>180s (timeout)** to **~15s (subsequent runs)**.
- **Extensibility:** Added support for custom URI protocols (e.g., `obsidian://`, `vscode://`) in markdown links ([PR #380](https://github.com/netease-youdao/LobsterAI/pull/380)), enhancing interoperability with external tools.
- **Build Stability:** Fixed macOS code signing failures by resolving symlink and dependency issues ([PR #387](https://github.com/netease-youdao/LobsterAI/pull/387)).

## 4. Community Hot Topics
- **Gateway Status & Configuration:** Issue [#366](https://github.com/netease-youdao/LobsterAI/issues/366) remains a key discussion point. Users are confused by `openclaw gateway status` failures, specifically regarding port `18789` and PATH configurations. This suggests documentation or CLI feedback needs improvement for the OpenClaw sub-system.
- **Feature - Prompt Optimization:** Issue [#391](https://github.com/netease-youdao/LobsterAI/issues/391) proposed adding a "Prompt Optimization" button to assist novice users in refining their inputs, indicating a demand for more "AI-native" UX assistance within the client.

## 5. Bugs & Stability
- **[Critical] Application Startup Hang:** The bug causing the app to stuck on "Loading" was patched in v0.2.4 ([PR #396](https://github.com/netease-youdao/LobsterAI/pull/396)).
- **[High] Update Detection Failure on Apple Silicon:** Users on ARM64 (v0.2.2) report that the "Check for Updates" feature fails to recognize v0.2.3, leaving them stuck on older versions ([Issue #390](https://github.com/netease-youdao/LobsterAI/issues/390)).
- **[Medium] IM Connectivity:** Bugs affecting IM channel testing were fixed in the latest release ([PR #393](https://github.com/netease-youdao/LobsterAI/pull/393)).

## 6. Feature Requests & Roadmap Signals
The open PRs and Issues highlight the likely direction for v0.2.5 or v0.3:
- **Advanced Scheduling:** [PR #376](https://github.com/netease-youdao/LobsterAI/pull/376) proposes adding "Hourly Schedule" modes for agents, suggesting a move towards more persistent, background-task automation.
- **Model Provider Support:** [PR #388](https://github.com/netease-youdao/LobsterAI/pull/388) is updating the MiniMax provider to support overseas endpoints and new models, indicating continued expansion of LLM backend options.
- **Chat Memory Management:** Users are requesting commands like `/reset` or `/clear` for the Feishu (Lark) bot integration ([Issue #398](https://github.com/netease-youdao/LobsterAI/issues/398)), pointing to a need for better session control in IM plugins.

## 7. User Feedback Summary
- **Pain Point (Update Mechanism):** There is significant frustration regarding the auto-updater on macOS ARM64, which falsely reports "Up to date" ([Issue #390](https://github.com/netease-youdao/LobsterAI/issues/390)).
- **Pain Point (Usability):** Non-technical users struggle with prompt engineering, specifically requesting built-in tools to optimize prompts automatically ([Issue #391](https://github.com/netease-youdao/LobsterAI/issues/391)).
- **Use Case (Integration):** Users utilizing the client as a hub for other tools (Obsidian, VSCode) will benefit greatly from today's merge of custom URI support ([PR #380](https://github.com/netease-youdao/LobsterAI/pull/380)).

## 8. Backlog Watch
- **[Needs Attention] Issue #366 (Gateway Status):** This issue has been open for ~3 days with no resolution. It involves specific environment PATH issues that block users from verifying if the Gateway service is running.
- **[Needs Review] PR #388 (MiniMax) & PR #376 (Hourly Schedule):** Both are significant feature additions currently open; maintainer review is pending to merge these into the main branch.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest — 2026-03-13

## 1. Today's Overview
TinyClaw shows **high development velocity** with 10 pull requests updated in the last 24 hours (7 merged) and a new version release. The project is undergoing a significant **usability transformation**, with heavy investment in the "TinyOffice" web interface—including chat rooms, project management, and onboarding wizards. However, the rapid iteration has introduced **critical installation bugs** in v0.0.10 that required immediate patching, alongside a planned major rebranding effort from "TinyClaw" to "TinyAGI."

---

## 2. Releases

### **v0.0.11** — [View on GitHub](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.11)
- **Type:** Patch release
- **Changes:** Version bump to 0.0.11
- **Notes:** Appears to be a quick release incorporating fixes for the installation issues discovered in v0.0.10. No breaking changes documented, but users upgrading from v0.0.10 should ensure they pull the latest version to avoid the `setup-wizard.sh` missing file error.

---

## 3. Project Progress

### **Merged PRs (7 total)**

| PR | Title | Impact |
|---|---|---|
| [#204](https://github.com/TinyAGI/tinyclaw/pull/204) | **Interactive Setup Wizard** | Adds multi-step guided onboarding for first-time users, replacing blank config pages |
| [#201](https://github.com/TinyAGI/tinyclaw/pull/201) | **Organization Chart Visualization** | New `/office/org-chart` page showing hierarchical agent/team structure |
| [#200](https://github.com/TinyAGI/tinyclaw/pull/200) | **Telegram Polling Fix** | 30-second timeout + improved watchdog to prevent stale connections after network changes |
| [#199](https://github.com/TinyAGI/tinyclaw/pull/199) | **Chat Rooms & Projects** | Slack-style chat rooms with agent history; Projects as higher-level task abstraction with Kanban |
| [#203](https://github.com/TinyAGI/tinyclaw/pull/203) | **Project/Chat Management** | Comprehensive CRUD for projects and chat rooms in TinyOffice |
| [#198](https://github.com/TinyAGI/tinyclaw/pull/198) | **Fix Setup-Wizard References** | Critical fix removing stale `.sh` references breaking fresh installs |
| [#195](https://github.com/TinyAGI/tinyclaw/pull/195) | **Convert send_message to Plain Node.js** | Fixed ts-node compilation failure by removing TypeScript dependency |

**Theme:** Today's merged work strongly focuses on **onboarding UX** and **TinyOffice feature completeness**, transforming it from a dashboard into a full collaboration hub.

### **Open PRs (3 total)**

| PR | Title | Status |
|---|---|---|
| [#191](https://github.com/TinyAGI/tinyclaw/pull/191) | **Rebrand TinyClaw → TinyAGI** | Open — major refactoring of all package names, CLI commands, configs |
| [#202](https://github.com/TinyAGI/tinyclaw/pull/202) | **Agent Message Persistence** | Open — adds `agent_messages` table + SSE events for simplified chat workflows |
| [#196](https://github.com/TinyAGI/tinyclaw/pull/196) | **Real-time Execution Streaming** | Open — `agent_progress` SSE events for live execution feedback |

---

## 4. Community Hot Topics

| Issue/PR | Engagement | Analysis |
|---|---|---|
| [#126 — Telegram Bot Auto-Reconnect](https://github.com/TinyAGI/tinyclaw/issues/126) | 6 comments, Open since Feb 19 | **Persistent pain point** for users running Telegram bots. The issue describes dropped API connections that don't auto-recover. PR [#200](https://github.com/TinyAGI/tinyclaw/pull/200) (merged today) addresses polling stalls, but it's unclear if this fully resolves #126. Users should test and report back. |
| [#197 — Missing setup-wizard.sh](https://github.com/TinyAGI/tinyclaw/issues/197) | 2 comments, Closed | **Critical install blocker** discovered in v0.0.10. Fixed same-day by PR [#198](https://github.com/TinyAGI/tinyclaw/pull/198). Indicates rapid maintainer response but also highlights need for better CI testing of fresh installs. |
| [#193 — Web Onboarding for Initial Setup](https://github.com/TinyAGI/tinyclaw/issues/193) | 1 comment | User request for **web-first setup experience** instead of CLI. Aligned with today's merged PR [#204](https://github.com/TinyAGI/tinyclaw/pull/204), suggesting strong maintainer-user alignment. |

---

## 5. Bugs & Stability

### **Critical (Installation Failure)**
- **[#197](https://github.com/TinyAGI/tinyclaw/issues/197):** v0.0.10 bundle missing `lib/setup-wizard.sh`, causing fresh installs to fail with `chmod: cannot access 'lib/setup-wizard.sh'`
  - **Status:** ✅ Fixed in PR [#198](https://github.com/TinyAGI/tinyclaw/pull/198), included in v0.0.11
  - **Root Cause:** Script was migrated to TypeScript but shell references weren't updated

### **High (Runtime Error)**
- **[#205](https://github.com/TinyAGI/tinyclaw/issues/205):** `@clack/prompts` import failure during `tinyclaw pairing approve`
  - **Status:** ⚠️ Open, no fix PR yet
  - **Symptoms:** `ERR_MODULE_NOT_FOUND` / loader errors
  - **Likely Cause:** Missing dependency or ESM/CJS mismatch

### **Medium (Telegram Reconnect)**
- **[#126](https://github.com/TinyAGI/tinyclaw/issues/126):** Telegram Bot doesn't auto-reconnect after connection drops
  - **Status:** 🔄 Partial fix in PR [#200](https://github.com/TinyAGI/tinyclaw/pull/200) (merged)
  - **Recommendation:** Users experiencing this should test v0.0.11 and report if issue persists

---

## 6. Feature Requests & Roadmap Signals

| Feature Request | Source | Likelihood |
|---|---|---|
| **Web-first onboarding** | [#193](https://github.com/TinyAGI/tinyclaw/issues/193) | ✅ Already delivered in PR [#204](https://github.com/TinyAGI/tinyclaw/pull/204) |
| **Agent message persistence** | PR [#202](https://github.com/TinyAGI/tinyclaw/pull/202) (open) | 🔮 High — enables chat history, foundational for multi-turn conversations |
| **Real-time execution streaming** | PR [#196](https://github.com/TinyAGI/tinyclaw/pull/196) (open) | 🔮 High — improves UX for long-running agents |
| **Project: TinyAGI Rebrand** | PR [#191](https://github.com/TinyAGI/tinyclaw/pull/191) | 📋 Planned — comprehensive rename across all namespaces |

**Predicted v0.1.0 Focus:** If PRs [#191](https://github.com/TinyAGI/tinyclaw/pull/191), [#202](https://github.com/TinyAGI/tinyclaw/pull/202), and [#196](https://github.com/TinyAGI/tinyclaw/pull/196) merge, the next minor version will likely be a **major milestone** featuring the rebrand, persistent chat, and live agent feedback.

---

## 7. User Feedback Summary

### **Pain Points**
1. **Installation reliability** — Fresh install breakage in v0.0.10 caused frustration; users expect `curl | bash` to "just work"
2. **CLI dependency hell** — `@clack/prompts` import error suggests dependency tree issues affecting runtime
3. **Telegram stability** — Long-running bots disconnecting without recovery is a production reliability concern

### **Positive Signals**
- Users are engaging with **TinyOffice features** (chat rooms, projects) as the project evolves beyond CLI-only workflows
- Rapid same-day response to [#197](https://github.com/TinyAGI/tinyclaw/issues/197) demonstrates responsive maintenance
- Feature requests like [#193](https://github.com/TinyAGI/tinyclaw/issues/193) are being **directly addressed**, showing healthy maintainer-community alignment

### **Use Cases Emerging**
- **Team-based agent management** via org charts and project assignments
- **Slack-style monitoring** of agent conversations through chat rooms
- **First-run web setup** for non-technical users avoiding CLI

---

## 8. Backlog Watch

| Item | Age | Concern | Recommendation |
|---|---|---|---|
| [#126 — Telegram Auto-Reconnect](https://github.com/TinyAGI/tinyclaw/issues/126) | 22 days | Still open despite partial fix in PR [#200](https://github.com/TinyAGI/tinyclaw/pull/200) | Maintainers should confirm if #200 fully resolves the issue and close if confirmed |
| [#191 — TinyAGI Rebrand](https://github.com/TinyAGI/tinyclaw/pull/191) | 2 days (open) | Large-scale refactor with potential for merge conflicts | Prioritize review/merge before more feature PRs accumulate to minimize rebasing |
| [#202 — Agent Message Persistence](https://github.com/TinyAGI/tinyclaw/pull/202) | 1 day (open) | Foundational for chat workflows | Fast-track review; blocks downstream chat features |

---

**Digest generated:** 2026-03-13 | **Data source:** GitHub (TinyAGI/TinyClaw) | **Analyst:** AI Project Intelligence

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-03-13

## 1. Today's Overview

Moltis is experiencing **high development velocity** with 18 pull requests updated in the last 24 hours (14 open, 4 merged) and 12 issues processed. The project is clearly in an active stabilization and feature expansion phase, with significant focus on sandbox environments, local LLM support, and MCP (Model Context Protocol) integration. The lack of new releases despite substantial merged PRs suggests the team is accumulating changes for a significant milestone release. Community engagement remains healthy with multiple bug reports and enhancement requests being actively processed.

---

## 2. Releases

**No new releases** were published today. The last release information is not available in the provided data. Given the volume of bug fixes and features being merged (4 PRs closed today), a new release appears imminent.

---

## 3. Project Progress

### Merged/Closed PRs (4 total)

| PR | Title | Impact |
|---|---|---|
| [#416](https://github.com/moltis-org/moltis/pull/416) | **feat: support secret remote MCP URLs and headers** | Major enhancement enabling secure remote MCP connections with OAuth support, addressing long-standing authentication gaps |
| [#398](https://github.com/moltis-org/moltis/pull/398) | **fix(web): address installation feedback from user testing** | Critical UX improvements based on real user testing (Tailscale onboarding, connection status fixes) |
| [#400](https://github.com/moltis-org/moltis/pull/400) | **fix(config): support legacy memory embedding keys** | Backward compatibility fix, closes [#109](https://github.com/moltis-org/moltis/issues/109) |
| [#397](https://github.com/moltis-org/moltis/pull/397) | **fix(providers): strip stop tokens from MLX streaming output** | Fixes raw token leakage in local LLM responses, closes [#306](https://github.com/moltis-org/moltis/issues/306) |

### Key Open PRs Advancing Features

- **[#421](https://github.com/moltis-org/moltis/pull/421)** — New `moltis-symphony` workflow daemon foundation (major new capability)
- **[#408](https://github.com/moltis-org/moltis/pull/408)** — Vulkan GGUF support for local LLMs (GPU acceleration expansion)
- **[#413](https://github.com/moltis-org/moltis/pull/413)** — Agent-written sidecar files for skills (extensibility enhancement)
- **[#422](https://github.com/moltis-org/moltis/pull/422)** — macOS release signing and notarization (distribution readiness)

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|---|---|---|
| [**#176**](https://github.com/moltis-org/moltis/issues/176) — Add datetime to system prompt context | **13 comments, 1 👍** | Long-running enhancement request (created Feb 17). Users need temporal awareness in agents for time-sensitive tasks. High community interest suggests this should be prioritized. |
| [**#391**](https://github.com/moltis-org/moltis/issues/391) — RFC: Node-Advertised Tools | **2 comments** | Architectural proposal for extending node protocol to allow remote nodes to advertise available tools beyond basic `exec`. Signals community interest in distributed agent architectures. |
| [**#423**](https://github.com/moltis-org/moltis/issues/423) — Docker moltis + docker sandbox issues | **1 👍** | Docker-in-Docker deployment challenges gaining traction |

**Underlying Needs:**
- Users want agents with **temporal awareness** (datetime context)
- **Distributed computing** patterns are emerging as a use case
- **Docker sandboxing** in production environments is a common deployment pattern

---

## 5. Bugs & Stability

### Critical Bugs (Functional Failures)

| Issue | Severity | Status | Fix Available |
|---|---|---|---|
| [**#367**](https://github.com/moltis-org/moltis/issues/367) — Trusted-network proxy shuts down immediately | **HIGH** | ✅ CLOSED | Likely addressed in recent sandbox/network PRs |
| [**#407**](https://github.com/moltis-org/moltis/issues/407) — Network-filter Proxy failing, web_search does not work | **HIGH** | 🔴 OPEN | No linked fix PR |
| [**#414**](https://github.com/moltis-org/moltis/issues/414) — z.ai does not work out of the box, network errors | **HIGH** | 🔴 OPEN | Under investigation |
| [**#423**](https://github.com/moltis-org/moltis/issues/423) — Docker moltis + docker sandbox issues | **MEDIUM-HIGH** | 🔴 OPEN | Related to sandbox work in [#405](https://github.com/moltis-org/moltis/pull/405) |

### Medium Severity Bugs

| Issue | Description | Status |
|---|---|---|
| [**#420**](https://github.com/moltis-org/moltis/issues/420) — web_fetch panics on legacy/non-UTF8 pages | Rust panic on byte boundary errors | 🔴 OPEN |
| [**#109**](https://github.com/moltis-org/moltis/issues/109) — Custom endpoint for embeddings not working | Configuration issue | ✅ CLOSED via [#400](https://github.com/moltis-org/moltis/pull/400) |

### Stability Concerns

Multiple reports indicate **network/sandbox proxy reliability issues** are the dominant instability pattern. PR [#405](https://github.com/moltis-org/moltis/pull/405) (harden Apple Container bootstrap execs) and [#403](https://github.com/moltis-org/moltis/pull/403) (browserless timeout alignment) target related infrastructure.

---

## 6. Feature Requests & Roadmap Signals

### Recently Closed Requests (Implemented)
- ✅ [**#140**](https://github.com/moltis-org/moltis/issues/140) — Support remote MCP with key in URL → Implemented in [#416](https://github.com/moltis-org/moltis/pull/416)
- ✅ [**#119**](https://github.com/moltis-org/moltis/issues/119) — Add headers config to MCP's HTTP/SSE transport → Implemented in [#416](https://github.com/moltis-org/moltis/pull/416)

### Active Enhancement Requests

| Issue | Request | Likelihood |
|---|---|---|
| [**#176**](https://github.com/moltis-org/moltis/issues/176) | Datetime in system prompt | **HIGH** — Long-open with sustained interest |
| [**#424**](https://github.com/moltis-org/moltis/issues/424) | Prebuilt Android/Termux binary | **MEDIUM** — Aligns with local-first strategy |
| [**#391**](https://github.com/moltis-org/moltis/issues/391) | Node-Advertised Tools (RFC) | **MEDIUM** — Architectural, requires design consensus |

### Predicted Next Version Features
Based on merged PRs and open work:
1. **Symphony workflow daemon** — Automation capabilities
2. **Vulkan GPU support** — Enhanced local LLM performance
3. **Robust MCP authentication** — Remote MCP with OAuth/headers
4. **macOS notarized builds** — Improved distribution

---

## 7. User Feedback Summary

### Pain Points Identified
1. **Network/sandbox configuration complexity** — Multiple users report proxy failures and Docker sandbox issues (#367, #407, #414, #423)
2. **Out-of-box experience gaps** — "z.ai does not work out of the box" indicates installation friction
3. **Legacy content handling** — web_fetch crashes on non-UTF8 pages (#420)
4. **Local LLM token leakage** — Raw special tokens visible in output (now fixed in #397)

### Positive Signals
- Active maintainer response to user testing feedback ([#398](https://github.com/moltis-org/moltis/pull/398) specifically addresses Discord user feedback)
- Rapid closure of configuration-related issues (legacy key support in #400)
- Strong progress on distribution readiness (macOS signing in #422)

### Use Cases Emerging
- **Docker-based deployments** with nested sandboxing
- **Android/Termux** as a target platform (#424)
- **Remote node orchestration** for distributed agent workloads (#391)

---

## 8. Backlog Watch

| Item | Age | Concern | Recommendation |
|---|---|---|---|
| [**#176**](https://github.com/moltis-org/moltis/issues/176) — Datetime in system prompt | **24 days** | High-interest enhancement with 13 comments but no maintainer assignment | Prioritize for next sprint |
| [**#424**](https://github.com/moltis-org/moltis/issues/424) — Android/Termux support | **1 day** | New request, no response yet | Triage for platform expansion roadmap |
| [**#391**](https://github.com/moltis-org/moltis/issues/391) — Node-Advertised Tools RFC | **2 days** | Architectural RFC needing design feedback | Requires maintainer design review |

### Items Needing Immediate Attention
- **Network proxy stability** (#407, #423) — Multiple users blocked, no fix PRs linked
- **First-run experience** (#414) — z.ai integration failures affecting new users

---

*Digest generated from GitHub activity on 2026-03-13. Data source: moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-03-13

## 1. Today's Overview
CoPaw is experiencing a **period of intense iteration and architectural evolution**, marked by the release of **version 0.0.7** which introduces critical security layers and UI updates. The project shows **very high community engagement** (30 open vs. 20 closed issues), indicating rapid adoption of new features alongside the discovery of regression bugs. A significant strategic shift is visible with the proposal of a **Multi-Agent/Multi-Workspace architecture**, suggesting the project is transitioning from a personal assistant to a multi-tenant platform. However, the rapid pace has led to stability concerns regarding version upgrades and configuration persistence.

## 2. Releases

### **v0.0.7** (Latest)
*   **Security Highlights**: Introduction of **Tool Guard**, a pre-execution security layer that scans tool parameters for risky patterns (e.g., `rm`, `mv`). Risky calls require user approval via `/approve`.
*   **Management**: Added a dedicated **Security** settings page.
*   **Note**: This release focuses on "safety-first" execution, addressing risks associated with autonomous shell commands.

## 3. Project Progress

**Merged/Closed Work (23 PRs closed/merged):**
*   **Architecture (WIP)**: PR #1368 (Multi-agent/multi-workspace architecture) was closed, likely superseded by the updated PR #1375, indicating active development on isolating agent environments.
*   **Channel Improvements**: PR #1389 added Discord streaming responses and typing indicators. PR #1235 improved skill card layouts in the UI.
*   **Bug Fixes**: PR #1262 fixed cron jobs overwriting request contexts; PR #1369 fixed skill importing failures caused by naming issues; PR #1373 fixed page refresh routing.

**Open Work in Progress:**
*   **Core Architectural Change**: PR #1375 is open for a massive refactor supporting multi-workspace isolation.
*   **New Channels**: PR #1290 is implementing a QQ bot channel via OneBot 11 protocol (NapCat); PR #1231 is adding Feishu Card V2 support.
*   **CLI**: PR #1278 proposes a `copaw update` command to solve manual upgrade friction.

## 4. Community Hot Topics

1.  **Discussion: Built-in Skills & MCPs** (Issue #280 - 18 comments)
    *   **Topic**: Users and maintainers are discussing which "Skills" (tools) and "MCPs" (Model Context Protocols) should be pre-installed to improve the out-of-the-box experience without bloating the container.
    *   **Link**: [agentscope-ai/CoPaw Issue #280](https://github.com/agentscope-ai/CoPaw/issues/280)

2.  **Upgrade Issues (v0.0.5 -> 0.0.6/0.0.7)** (Issue #1195 - 14 comments)
    *   **Topic**: Users report that using `pip install --upgrade copaw` successfully updates the backend, but the **Web UI version remains stuck** on the old version, causing functionality mismatches.
    *   **Link**: [agentscope-ai/CoPaw Issue #1195](https://github.com/agentscope-ai/CoPaw/issues/1195)

3.  **Context & Time Perception** (Issue #1346 - 6 comments)
    *   **Topic**: A technical debate on whether CoPaw should embed local time in the system prompt by default or rely on the LLM calling a `get_current_time` tool. The current reliance on tool-calling fails for "weaker" models that lack initiative.
    *   **Link**: [agentscope-ai/CoPaw Issue #1346](https://github.com/agentscope-ai/CoPaw/issues/1346)

## 5. Bugs & Stability

*   **Critical: Configuration Persistence in Docker** (Issue #1382)
    *   **Severity**: High. Running in Kubernetes/Docker without mounting `/app/working` results in **total data loss** (memory, skills, config) upon restart.
    *   **Status**: Open, no immediate fix PR linked yet.
    *   **Link**: [agentscope-ai/CoPaw Issue #1382](https://github.com/agentscope-ai/CoPaw/issues/1382)

*   **High: Frontend/Version Mismatch after Upgrade** (Issue #1195)
    *   **Severity**: High. The frontend fails to update via `pip`, leaving users with a broken UI.
    *   **Link**: [agentscope-ai/CoPaw Issue #1195](https://github.com/agentscope-ai/CoPaw/issues/1195)

*   **Medium: API Failures after Memory Compression** (Issue #1222)
    *   **Severity**: Medium. Message count mismatch after memory compression causes API calls to fail (Error 1210 on Zhipu/GLM).
    *   **Link**: [agentscope-ai/CoPaw Issue #1222](https://github.com/agentscope-ai/CoPaw/issues/1222)

*   **Medium: Model Configuration Loss** (Issue #1384)
    *   **Severity**: Medium. "Deep restart" wipes model configurations, forcing users to re-configure API keys.
    *   **Link**: [agentscope-ai/CoPaw Issue #1384](https://github.com/agentscope-ai/CoPaw/issues/1384)

*   **Low: UI Glitches** (Issue #1370, #1381)
    *   Duplicate skills display in v0.0.7; Model selector dropdown overflow issues.

## 6. Feature Requests & Roadmap Signals

*   **Enterprise & Robustness**:
    *   **WeCom Support**: High demand for Enterprise WeChat integration (Issue #51).
    *   **Browser Control**: Request for CDP (Chrome DevTools Protocol) support to control existing user browsers rather than launching new instances (Issue #1348).
    *   **API Compatibility**: Request to support OpenAI "Responses API" format for specific gateways (Issue #944).
*   **Roadmap Prediction**:
    *   The **Multi-Workspace architecture** (PR #1375) is the clear next major milestone.
    *   A **CLI update command** (PR #1278) is likely to be prioritized to solve the recurring upgrade confusion.

## 7. User Feedback Summary

*   **Pain Points**:
    *   **Upgrade Friction**: Users find upgrading "painful" and buggy (frontend not updating, configs breaking).
    *   **Configuration Complexity**: Setting up custom models (DeepSeek, Ollama, SiliconFlow) is frequently reported as failing or non-intuitive (Issues #1292, #1355). One user noted: "The model settings design... so many unsupported formats..." (Issue #1377).
    *   **Channel Latency**: Feishu users report a "delayed reply" bug where the bot answers the *previous* question instead of the current one (Issue #1345).
*   **Satisfaction**:
    *   High interest in the **NapCat (QQ)** integration and **Tool Guard** security feature.
    *   Appreciation for the project's pace, though stability is a concern.

## 8. Backlog Watch

*   **Multi-Agent Architecture PR** ([PR #1375](https://github.com/agentscope-ai/CoPaw/pull/1375)): Needs maintainer review and community testing. This is a "Breaking Change" PR that solves the data persistence and isolation issues.
*   **Third-Party Model Connectivity** (Issues #1292, #204, #1358): There is a cluster of issues regarding `base_url` and connection failures for local/third-party models. This seems to be a persistent area of friction that needs consolidated fixing.
*   **Docker Image Sync** (Issue #1362): Request for official Docker images to be pushed simultaneously with GitHub releases to support automated deployment tools like 1Panel.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-03-13

## 1. Today's Overview
ZeptoClaw demonstrated **high velocity development** today with 11 issues updated and 6 pull requests moving through the pipeline. The project is in an active feature iteration phase, shipping significant UX improvements and new agent capabilities. Three PRs were merged/closed, focusing on CLI experience and agent tooling, while three new feature PRs remain open for review. With a 3:3 open-to-closed ratio on issues (6 open, 5 closed), the maintainers are effectively balancing new feature intake with backlog resolution.

---

## 2. Releases
**No new releases** were published today. The project appears to be accumulating features for an upcoming release, with streaming-by-default, CLI UX enhancements, and new tools in the pipeline.

---

## 3. Project Progress

### Merged/Closed PRs (3)
| PR | Summary | Impact |
|----|---------|--------|
| [#343](https://github.com/qhkm/zeptoclaw/pull/343) | **ask_clarification tool** — Adds `pause_for_input` flag to `ToolOutput`, enabling agents to halt execution and request user clarification instead of guessing. | **High** — Reduces agent hallucination/autonomous errors in ambiguous scenarios. |
| [#344](https://github.com/qhkm/zeptoclaw/pull/344) | **deep-research skill** — Bundled 4-phase research methodology skill (Broad Exploration → Deep Dive → Diversity Validation → Synthesis Check). Inspired by DeerFlow, adapted for ZeptoClaw with memory integration. | **High** — Zero-cost enhancement for research-heavy workflows; improves agent output quality. |
| [#337](https://github.com/qhkm/zeptoclaw/pull/337) | **CLI UX: shimmer spinner** — Gradient text shimmer animation, step numbering with checkmarks (✓/✗), tool argument hints, and separator lines for better multi-step visibility. | **Medium** — Significant perceived UX polish during agent execution. |

### Open PRs Pending Review (3)
| PR | Summary | Status |
|----|---------|--------|
| [#342](https://github.com/qhkm/zeptoclaw/pull/342) | **Streaming by default + metadata footer** — Inverts streaming default, adds token/tool/time footer after responses. | Open, pairs with closed issue #341 |
| [#335](https://github.com/qhkm/zeptoclaw/pull/335) | **Zhipu API key validation** — Validates Zhipu/GLM keys during onboarding via `/models` endpoint. | Open, addresses closed issue #332 |
| [#287](https://github.com/qhkm/zeptoclaw/pull/287) | **Dev tools for pre-PR consistency** — Containerized dev/test environment for consistent CI checks across contributors. | Open since 2026-03-09, updated today |

---

## 4. Community Hot Topics

| Issue/PR | Engagement | Analysis |
|----------|------------|----------|
| [#332](https://github.com/qhkm/zeptoclaw/issues/332) — Zhipu API key validation | 1 comment, closed fast | **Provider expansion**: Community demand for Chinese LLM provider (Zhipu GLM) first-class support. PR #335 already implements this. |
| [#185](https://github.com/qhkm/zeptoclaw/issues/185) — jsonwebtoken 9→10 upgrade | 1 comment, P3-normal | **Security/dependency hygiene**: Breaking migration for JWT auth. Low urgency but signals maintainer awareness of technical debt. |
| [#334](https://github.com/qhkm/zeptoclaw/issues/334) — Add to Shelldex | External request | **Distribution/discoverability**: User wants ZeptoClaw listed in shell tool directory. Quick win for project visibility. |

**Underlying need**: The community is pushing for **broader LLM provider support** (Zhipu) and **better discoverability** (Shelldex), indicating ZeptoClaw is gaining traction beyond its initial user base.

---

## 5. Bugs & Stability

| Severity | Issue | Details | Fix Status |
|----------|-------|---------|------------|
| 🔴 **P2-High** | [#345](https://github.com/qhkm/zeptoclaw/issues/345) — Coder template LLM writes own tests | Critical agent behavior bug: LLM creates tests matching buggy behavior instead of using existing tests, causing false-positive verifications. | **No fix PR yet** |
| 🟡 **P3-Normal** | [#333](https://github.com/qhkm/zeptoclaw/issues/333) — Podman cache mount build error | Podman 5.7 legacy builder fails on `--mount=type=cache` syntax; blocks containerized lint workflow. Proposed fix: add `--buildkit` flag. | **No fix PR yet** |

**Stability Assessment**: The coder template bug (#345) is concerning for users relying on autonomous bug-fixing workflows — it undermines trust in agent verification. This should be a priority fix before the next release.

---

## 6. Feature Requests & Roadmap Signals

### Newly Requested Features (Open)
| Issue | Feature | Priority | Next Version Likelihood |
|-------|---------|----------|-------------------------|
| [#341](https://github.com/qhkm/zeptoclaw/issues/341) | Streaming by default + metadata footer | P2-High | ✅ **PR #342 open** — Very likely |
| [#340](https://github.com/qhkm/zeptoclaw/issues/340) | Coding benchmark fixture | P3-Normal | Medium — enables agent comparison |
| [#331](https://github.com/qhkm/zeptoclaw/issues/331) | Telegram formatting + typing indicator | Unprioritized | Medium — messaging platform UX |
| [#334](https://github.com/qhkm/zeptoclaw/issues/334) | Shelldex directory listing | — | ✅ Quick administrative task |

### Roadmap Signals
- **CLI UX as competitive advantage**: Multiple issues (#336, #341) focus on perceived performance (streaming) and visual polish (shimmer/spinner) — indicating a push toward consumer-grade UX.
- **Agent reliability investment**: The `ask_clarification` tool (#339, PR #343) and `deep-research` skill (#338, PR #344) show commitment to reducing hallucination and improving output quality.
- **Benchmarking infrastructure**: Issue #340 signals interest in standardized agent evaluation, possibly for marketing or regression testing.

---

## 7. User Feedback Summary

### Pain Points Identified
1. **Agent verification reliability** (#345): The coder template's tendency to write passing tests for buggy code undermines the core value proposition of autonomous bug-fixing.
2. **Telegram UX gaps** (#331): Poor formatting and lack of typing indicators make the Telegram integration feel "messy" and unresponsive.
3. **Container build friction** (#333): Podman users (common in enterprise/RHEL environments) face build failures with current Dockerfile.dev.

### Positive Signals
- Active maintainer responsiveness: 5 issues closed in 24h, including same-day resolution of feature requests (#338, #339).
- Strong feature velocity: 3 merged PRs adding tangible UX and capability improvements.

---

## 8. Backlog Watch

| Item | Age | Concern | Recommended Action |
|------|-----|---------|-------------------|
| [#185](https://github.com/qhkm/zeptoclaw/issues/185) — jsonwebtoken 10 migration | 15 days | Security dependency upgrade with breaking changes. P3 but accumulating debt. | Schedule for next maintenance sprint |
| [#287](https://github.com/qhkm/zeptoclaw/pull/287) — Dev tools PR | 4 days open | Contributor environment standardization. Still open, may need review prioritization. | Merge to reduce "works on my machine" issues |
| [#345](https://github.com/qhkm/zeptoclaw/issues/345) — Coder template bug | New (today) | High-severity agent behavior bug with no fix PR. | **Urgent**: Assign and create fix PR before next release |

---

**Summary**: ZeptoClaw is in a **healthy, high-velocity phase** with strong maintainer engagement. The team should prioritize fixing the coder template test bug (#345) before release, while continuing to merge the UX improvements already in flight. Expanding provider support (Zhipu) and platform integrations (Telegram, Shelldex) will broaden the project's reach.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest
**Date:** 2026-03-13
**Analyst:** AI Project Analyst

## 1. Today's Overview
EasyClaw shows sustained development activity with a focus on platform stability and visual consistency. The project released version v1.6.7 today, which appears to be a patch release addressing documentation and user onboarding friction regarding macOS security warnings. While the merge rate for the single open PR is pending, the repository maintains a healthy rhythm of user feedback and external contributions. Overall, the project is in an active maintenance phase, smoothing out user experience (UX) hurdles for desktop clients.

## 2. Releases
### **v1.6.7** (Released: 2026-03-13)
*   **Highlights:** This release focuses on installation stability for macOS users.
*   **Key Changes:**
    *   **macOS Gatekeeper Workaround:** Added detailed documentation/instructions within the release notes to resolve the common "'EasyClaw' is damaged and can't be opened" error. This error is caused by macOS Gatekeeper blocking unsigned or unsigned-notarized applications.
    *   **User Guidance:** Provides a terminal command solution to bypass the quarantine attribute, ensuring users can run the portable and installed versions immediately.
*   **Breaking Changes:** None reported.
*   **Migration Notes:** Users on macOS may need to manually execute the `xattr` command provided in the release notes if they encounter the "damaged" error prompt.

## 3. Project Progress
*   **Active Development:** Work continues on refining the macOS desktop experience.
    *   **PR [#15](https://github.com/gaoyangz77/easyclaw/pull/15) (Open):** A fix regarding the application icon display in the macOS Dock and System Tray has been updated. This indicates an effort to improve native OS integration and visual branding.
*   **Bug Resolution:**
    *   **Issue [#16](https://github.com/gaoyangz77/easyclaw/issues/16) (Closed):** The team closed the issue regarding "OpenAI Oauth" errors. The prompt resolution suggests a fix was identified or the issue was resolved via user configuration correction.

## 4. Community Hot Topics
The most engaged topic in the last 24 hours was **Issue [#16](https://github.com/gaoyangz77/easyclaw/issues/16)** regarding **OpenAI OAuth functionality**.
*   **Context:** A user reported consistent OAuth errors across both portable and installed versions, accompanied by a screenshot (implied by image attachment).
*   **Analysis:** The swift closure of this issue (opened 2026-03-11, closed 2026-03-12) highlights the community's reliance on EasyClaw for API integration workflows. Authentication stability is critical for users using this as a personal AI assistant wrapper.
*   **Links:** [Issue #16](https://github.com/gaoyangz77/easyclaw/issues/16)

## 5. Bugs & Stability
*   **🔴 High Priority (Resolved):** **OpenAI OAuth Failure ([#16](https://github.com/gaoyangz77/easyclaw/issues/16))**. Users were unable to authenticate, blocking core functionality. Status: **Closed** (likely resolved or identified as a temporary service outage/configuration issue).
*   **🟠 Medium Priority (Active):** **macOS App "Damaged" Error**. While technically a security feature, users perceive the app as broken upon download. Addressed in v1.6.7 release notes as a documentation/workaround fix.
*   **🟢 Low Priority (Pending Fix):** **macOS Icon Display ([PR #15](https://github.com/gaoyangz77/easyclaw/pull/15))**. Incorrect icons in the Dock/Tray affect polish but not core utility. A fix is currently in review.

## 6. Feature Requests & Roadmap Signals
*   **Platform Parity:** The focus on macOS fixes (Dock icons, Gatekeeper instructions) signals a push to normalize the experience for Apple users, who often face stricter security sandboxing.
*   **Authentication Improvements:** The OAuth issue suggests that future updates may need to harden the authentication wrapper or provide better error messages for token failures.

## 7. User Feedback Summary
*   **Pain Points:**
    *   Users are frequently blocked by macOS security prompts ("App is damaged"), causing frustration and a perception of low software quality.
    *   Authentication flows (OAuth) are sensitive points of failure; users expect these to work seamlessly across portable/installed builds.
*   **Satisfaction:** The prompt attention to the OAuth issue and the clear instruction in v1.6.7 suggest a responsive development cycle, which likely maintains user trust despite the technical hiccups.

## 8. Backlog Watch
*   **PR [#15](https://github.com/gaoyangz77/easyclaw/pull/15) (fix: app icon in macos dock and system tray):** Open since 2026-03-10. This PR addresses visual consistency on macOS. **Action Needed:** Maintainer review and merge recommended to close out this UI polish task.

</details>