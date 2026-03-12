# OpenClaw Ecosystem Digest 2026-03-12

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-03-12 04:14 UTC

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

# OpenClaw Project Digest: 2026-03-12

## 1. Today's Overview
OpenClaw is experiencing **intense activity** with 1,000 total updates (500 issues + 500 PRs) in the last 24 hours, indicating a project under rapid development and heavy community usage. However, the lack of new releases suggests the team is in a heavy integration/stabilization phase, likely addressing a significant backlog of regressions before cutting a new version. The high volume of open issues (287) versus closed (213) points to a growing backlog that maintainers are actively triaging but struggling to stay ahead of.

**Activity Assessment:** `Very High` | **Backlog Trend:** `Growing` | **Stability Signal:** `Regention Risk`

---

## 2. Releases
**No new releases** were recorded today.

*Note: The last observed version in active bug reports is `2026.3.8`. The absence of a release despite high regression reports suggests a `2026.3.9` patch is imminent but pending validation of recent fixes.*

---

## 3. Project Progress
While no PRs were explicitly marked as "merged" in the provided data snapshot (which highlights open/pending work), significant **progress is evident in open PRs** preparing for merge:

*   **Security & Secrets Management:** A foundational PR [#43640](https://github.com/openclaw/openclaw/pull/43640) introduces an `EnvSecretProvider` and a universal secret-resolution system, aiming to solve credential leaks.
*   **Session Resilience:** PR [#15050](https://github.com/openclaw/openclaw/pull/15050) targets transcript corruption resilience, critical for fixing the recurring crashes reported in v2026.3.8.
*   **Provider Expansion:** Updates to GitHub Copilot defaults ([#15044](https://github.com/openclaw/openclaw/pull/15044)) and new DuckDuckGo search with Tor support ([#14788](https://github.com/openclaw/openclaw/pull/14788)) show active ecosystem expansion.
*   **Channel Improvements:** Matrix multi-account support ([#14852](https://github.com/openclaw/openclaw/pull/14852)) and Zalo markdown parsing ([#43324](https://github.com/openclaw/openclaw/pull/43324)) are ready for review.

---

## 4. Community Hot Topics
The community is focused on **onboarding friction** and **model reliability**.

1.  **Top Issue: Onboarding Friction** - **[#26534](https://github.com/openclaw/openclaw/issues/26534)** (50 comments, 13 👍)
    *   **Topic:** Users cannot select DingTalk during the initial setup wizard, forcing manual configuration later.
    *   **Analysis:** This highlights a demand for better first-time user experience (FTUE) parity across international messaging platforms.
2.  **Top Bug: Rate Limit False Positives** - **[#32828](https://github.com/openclaw/openclaw/issues/32828)** (51 comments, 7 👍)
    *   **Topic:** OpenClaw erroneously reports "API rate limit reached" on all models when APIs are actually functional.
    *   **Analysis:** This behavior is blocking users entirely, suggesting a critical flaw in the gateway's HTTP status code interpretation or header parsing logic.
3.  **Feature: Android Accessibility** - **[#9443](https://github.com/openclaw/openclaw/issues/9443)** (16 comments, 1 👍)
    *   **Topic:** Request for prebuilt Android APK releases.
    *   **Analysis:** Users want a mobile companion app without needing to compile from source, indicating a shift toward mobile-first usage scenarios.

---

## 5. Bugs & Stability
The current stable version (`2026.3.8`) is suffering from **severe regressions**, particularly in Cron jobs and API handling.

**Critical Regressions (Ranked by Severity):**

1.  **Cron System Failure (Deadlock/Timeout):**
    *   **[#42579](https://github.com/openclaw/openclaw/issues/42579)** & **[#41405](https://github.com/openclaw/openclaw/issues/41405)**: Isolated cron jobs are deadlocking or silently failing to execute. *Status: No fix PR linked yet.*
    *   **Impact:** Automation broken for users relying on scheduled tasks.
2.  **Tool Call Hallucinations (Kimi & Gemini):**
    *   **[#39907](https://github.com/openclaw/openclaw/issues/39907)** (v2026.3.7 regression): `kimi-coding/k2p5` outputs literal `exec(...)` text instead of executing tools.
    *   **[#3344](https://github.com/openclaw/openclaw/issues/3344)**: Gemini models fake tool calls with text descriptions.
    *   **Impact:** Agents become "chatty" but non-functional.
3.  **Gateway & Connection Instability:**
    *   **[#42270](https://github.com/openclaw/openclaw/issues/42270)**: Local LM Studio backends cause WebSocket 1006 closures.
    *   **[#40977](https://github.com/openclaw/openclaw/issues/40977)**: Control UI disconnects with error 4008.
4.  **Config Validation Crash:**
    *   **[#41690](https://github.com/openclaw/openclaw/issues/41690)**: Config validation fails with "Unrecognized key" for Kimi provider settings, blocking setup.

---

## 6. Feature Requests & Roadmap Signals
*   **Mobile Deployment:** Strong signal for **Prebuilt Android APKs** ([#9443](https://github.com/openclaw/openclaw/issues/9443)). This is likely to be prioritized given the existing `apps/android` source code presence.
*   **Multimodal Capabilities:** Request for **Agent Vision** in Feishu/Lark ([#28744](https://github.com/openclaw/openclaw/issues/28744)) suggests users want OpenClaw to act as a multimodal interface, not just text-based.
*   **Memory Architecture:** Advanced suggestions for **Memory v2** ([#28930](https://github.com/openclaw/openclaw/issues/28930)) proposing "Associative Traversal" and "Forgetting" mechanisms indicate power users are pushing the limits of long-running autonomous agents.

---

## 7. User Feedback Summary
**Pain Points:**
*   **"It stopped working after update":** The prevailing sentiment regarding v2026.3.8. Users report Cron and Control UI breaking immediately upon upgrade.
*   **"My API is fine, why is OpenClaw blocking it?":** Confusion over the false "Rate Limit" errors, eroding trust in the gateway's error handling transparency.
*   **Context Window Mismanagement:** Users report context accumulating infinitely until crash ([#13938](https://github.com/openclaw/openclaw/issues/13938)) or compaction never triggering ([#14143](https://github.com/openclaw/openclaw/issues/14143)), causing frustration with long-term memory reliability.

**Satisfaction:**
*   High engagement on specific provider integrations (DingTalk, Zalo, Matrix) shows strong adoption in non-Western markets and privacy-focused communities.

---

## 8. Backlog Watch
The following high-impact items require immediate maintainer attention:

1.  **[#42579](https://github.com/openclaw/openclaw/issues/42579) (Cron Deadlock):** A critical logic flaw preventing scheduled automation. Needs verification if PR [#41798](https://github.com/openclaw/openclaw/issues/41798) fully resolves this.
2.  **[#32828](https://github.com/openclaw/openclaw/issues/32828) (False Rate Limits):** This "closed" issue seems to be recurring or improperly resolved, causing high friction for new users setting up API keys.
3.  **[#9443](https://github.com/openclaw/openclaw/issues/9443) (Android APK):** A low-effort, high-impact delivery (CI/CD pipeline update) that would significantly broaden the user base.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Analysis Report
**Date:** 2026-03-12 | **Projects Analyzed:** 10

---

## 1. Ecosystem Overview

The open-source AI agent ecosystem on 2026-03-12 exhibits **exceptionally high velocity**, characterized by rapid platform expansion, aggressive security hardening, and a strong shift toward multi-channel communication integrations. The market shows clear stratification: mature projects like OpenClaw, PicoClaw, and NanoClaw are optimizing for cost efficiency (token management) and enterprise stability, while emerging players like TinyClaw and ZeptoClaw are aggressively refactoring architectures to lower deployment barriers. A universal trend across all projects is the push for **"Bring Your Own Model"** flexibility, with nearly every framework adding support for local inference (Ollama, vLLM) and alternative LLM providers to reduce API dependency costs.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Assessment |
|---------|-------------|-----------|----------|--------------|------------|
| **OpenClaw** | 500 | 500 | None | 🟡 Moderate | High volume but regression backlog growing; stability risk |
| **NanoBot** | 53 | 95 | None | 🟢 Good | High merge rate (65%); rapid iteration on providers |
| **ZeroClaw** | 50 | 50 | v0.1.7-beta.30 | 🟢 Good | Aggressive maintenance; high closure rate (70%) |
| **PicoClaw** | 22 | 100+ | v0.2.2 | 🟢 Good | Strong momentum; architectural maturation phase |
| **NanoClaw** | 17 | 39 | None | 🟢 Excellent | High merge velocity; focused on token optimization |
| **IronClaw** | 47 | 50 | v0.18.0 | 🟡 Moderate | Fast development but QA gaps; install failures reported |
| **LobsterAI** | 12 | 5 | v0.2.3 | 🟡 Moderate | Feature expansion outpacing stability; memory issues |
| **TinyClaw** | 9 | 15 | v0.0.10 | 🟢 Good | Major architectural overhaul; rebranding to TinyAGI |
| **Moltis** | 23 | 25 | None | 🟢 Good | Aggressive bug-squashing; Docker stabilization |
| **CoPaw** | 50 | 50 | None (v0.0.7 pending) | 🔴 Concerning | High bug volume; critical tool call failures |
| **ZeptoClaw** | 13 | 13 | v0.7.6 | 🟢 Excellent | Zero open bugs; proactive security hardening |
| **EasyClaw** | 3 | 2 | v1.6.7 | 🟡 Moderate | Critical OAuth failures blocking users |

---

## 3. OpenClaw's Position

### Advantages vs. Peers
*   **Ecosystem Reach:** OpenClaw's 1,000 daily updates indicate the largest active user base, providing unmatched real-world testing and feedback loops.
*   **Channel Diversity:** Leading support for international platforms (DingTalk, Zalo, Feishu, Matrix) positions OpenClaw strongly in Asian and privacy-focused markets.
*   **Enterprise Features:** Advanced proposals for Memory v2 architecture and session resilience suggest a roadmap targeting production-grade autonomous agents.

### Technical Approach Differences
*   **Integration Depth:** Unlike NanoBot/TinyClaw which focus on lightweight deployment, OpenClaw pursues a comprehensive gateway model with universal secret resolution and multi-account channel support.
*   **Risk Profile:** Currently carrying higher technical debt than peers—287 open issues vs 213 closed indicates maintainers are struggling to stabilize v2026.3.8 regressions while peers like ZeptoClaw maintain zero open bugs.

### Community Size Comparison
OpenClaw's activity volume (10x most peers) suggests **3-5x larger community engagement**, but the signal-to-noise ratio is deteriorating. Projects like NanoClaw and ZeptoClaw demonstrate more efficient community management with higher merge-to-open ratios.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|------------|----------|----------------|
| **Token Optimization** | OpenClaw, NanoClaw, CoPaw, Moltis | Context compaction, response length control, inline summarization to reduce API costs (5x savings reported) |
| **Local LLM Support** | NanoBot, ZeroClaw, PicoClaw, TinyClaw, Moltis | Ollama/vLLM integration, `api_base` configuration, keyless auth for local instances |
| **Security Hardening** | OpenClaw, ZeroClaw, ZeptoClaw, NanoClaw | Secret management, filesystem boundaries, webhook authentication, container isolation |
| **Mobile/Edge Deployment** | OpenClaw, ZeroClaw | Android APKs, 32-bit system support, IoT compatibility |
| **Multi-Channel Messaging** | OpenClaw, NanoBot, PicoClaw, LobsterAI, CoPaw | DingTalk, QQ, WeCom, Zalo, Matrix, Telegram threading/reactions |
| **MCP (Model Context Protocol)** | PicoClaw, ZeroClaw, Moltis, CoPaw, IronClaw | Tool discovery, on-demand loading, environment variable propagation |
| **Authentication Flexibility** | IronClaw, EasyClaw, LobsterAI | Decoupling from mandatory cloud auth; OAuth token refresh reliability |

---

## 5. Differentiation Analysis

### Feature Focus
| Category | Projects | Key Differentiator |
|----------|----------|-------------------|
| **Enterprise Gateway** | OpenClaw, ZeroClaw | Comprehensive provider routing, cron automation, multi-tenancy |
| **Lightweight/Framework** | NanoBot, NanoClaw | Minimal dependencies, SQLite queues, rapid prototyping |
| **Mobile-First** | PicoClaw, ZeroClaw | Android builds, edge device optimization |
| **Security-First** | ZeptoClaw | Merkle audit trails, HMAC verification, TOCTOU mitigation |
| **Platform-Specific** | LobsterAI (Chinese market), IronClaw (NEAR ecosystem) | Regional/integrated platform focus |

### Target Users
- **Developers/Tinkerers:** NanoBot, TinyClaw, NanoClaw — CLI-focused, BYO infrastructure
- **Enterprise/Production:** OpenClaw, ZeptoClaw, Moltis — Docker-first, security hardened
- **End Users/Consumers:** EasyClaw, LobsterAI, PicoClaw — Desktop apps, GUI-centric

### Technical Architecture
| Architecture | Projects | Characteristics |
|--------------|----------|-----------------|
| **Monolithic Gateway** | OpenClaw, Moltis | All-in-one deployment, heavier footprint |
| **Modular/Monorepo** | TinyClaw, PicoClaw | npm workspaces, pluggable channels/providers |
| **Rust-Native** | ZeptoClaw, ZeroClaw | Performance-critical, memory-safe, single-binary |
| **Python-First** | CoPaw, NanoBot | Rapid iteration, ML ecosystem integration |

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Projects | Velocity Pattern |
|------|----------|-----------------|
| **🚀 Hypergrowth** | OpenClaw, PicoClaw | 500+ daily updates; scaling pains evident |
| **⚡ Rapid Iteration** | NanoClaw, NanoBot, IronClaw | 30-100 daily updates; high merge efficiency |
| **🔧 Stabilization** | ZeroClaw, ZeptoClaw, Moltis | Focused on bug closure; production-hardening |
| **🌱 Emerging** | TinyClaw, EasyClaw, LobsterAI | Architectural pivots; finding product-market fit |
| **⚠️ Struggling** | CoPaw | High bug volume outpacing fixes; v0.0.7 delayed |

### Maturity Indicators
- **Most Mature:** ZeptoClaw (zero open bugs, automated security audits), ZeroClaw (branch consolidation complete)
- **Rapidly Maturing:** NanoClaw (token optimization stack complete), PicoClaw (event-driven architecture proposal)
- **Needs Stabilization:** OpenClaw (regression backlog), CoPaw (critical tool call failures), IronClaw (fresh install breakage)

---

## 7. Trend Signals

### Industry Trends Extracted

| Trend | Evidence | Implication for Developers |
|-------|----------|---------------------------|
| **Cost Sensitivity Dominant** | 4 projects actively implementing token optimization; users reporting 5x cost reduction needs | Prioritize context management features; token-efficient prompting is a competitive advantage |
| **Local Inference Mainstream** | 7+ projects adding Ollama/vLLM support; users demanding privacy + cost control | Build BYO-model flexibility from day one; cloud-only is a adoption barrier |
| **Security Hardening Phase** | ZeptoClaw/ZeroClaw leading with filesystem boundaries, HMAC verification | Enterprise adoption requires provable security; self-hosted ≠ insecure |
| **Multi-Channel Expectation** | DingTalk/QQ/Matrix support appearing across 6+ projects | Western-centric channel support (Slack/Discord) insufficient for global reach |
| **MCP Becoming Standard** | 5+ projects implementing Model Context Protocol for tools | Standardize on MCP for tool interoperability; avoid proprietary tool interfaces |
| **Event-Driven Architecture** | PicoClaw, TinyClaw moving from black-box loops to observable systems | Debuggability and control are production requirements; agent loops must be instrumentable |
| **Authentication Decoupling** | IronClaw users actively removing mandatory cloud auth; EasyClaw OAuth failures blocking adoption | Self-hosted deployments demand optional cloud dependencies; auth flexibility = adoption |

### Strategic Recommendations for AI Agent Developers
1. **Token Management First:** Implement compaction, response length limits, and context pruning early—users are highly cost-sensitive.
2. **Local LLM Parity:** Ensure feature parity between cloud and local models; test with Ollama/Qwen extensively.
3. **Security by Default:** Implement filesystem boundaries, secret encryption, and audit logging before enterprise push.
4. **Global Channel Support:** Asian markets (DingTalk, QQ, WeCom) show strong demand—prioritize alongside Western platforms.
5. **Observable Architecture:** Event-driven loops with trace visibility are becoming table stakes for production use.

---

**Report Generated:** 2026-03-12 | **Analyst Note:** Ecosystem shows signs of maturation with security and cost-efficiency emerging as primary differentiators. OpenClaw maintains volume leadership but faces stability challenges that faster-moving peers may exploit.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-03-12

## 1. Today's Overview
NanoBot demonstrates **high velocity and active community engagement**, with 95 pull requests updated (65% merged/closed) and 53 issues processed in the last 24 hours. The project is in a rapid iteration phase, heavily focused on expanding LLM provider support (Zhipu, Ollama, Groq) and fixing integration bugs. While there are no new official releases today, the merge rate suggests a stable version is imminent. The volume of user feedback regarding local deployments and platform channels indicates the project is transitioning from early adopters to a broader, more diverse user base.

## 2. Releases
No new official releases were recorded today. The project remains on the latest tagged version while development continues aggressively on the `main` branch.

## 3. Project Progress
Significant development activity occurred today, with **62 PRs merged**, focusing on core stability and provider expansion:

*   **Provider & Model Support:**
    *   **[PR #41](https://github.com/HKUDS/nanobot/pull/41)**: Added support for Anthropic-compatible endpoints (e.g., MiniMax Coding Plan).
    *   **[PR #51](https://github.com/HKUDS/nanobot/pull/51)**: Integrated GLM-4.7 models into onboarding and fixed Zhipu AI provider bugs.
    *   **[PR #40](https://github.com/HKUDS/nanobot/pull/40)**: Added LazyLLM provider support for diverse model sources (Qwen, DeepSeek, SiliconFlow).
*   **Core Agent Loop & Memory:**
    *   **[PR #1909](https://github.com/HKUDS/nanobot/pull/1909)**: Fixed memory consolidation by forcing `tool_choice="required"` to prevent the LLM from skipping memory saves.
    *   **[PR #47](https://github.com/HKUDS/nanobot/pull/47)**: Implemented session summarization to prevent context window overflow.
    *   **[PR #65](https://github.com/HKUDS/nanobot/pull/65)**: Implemented tool response offloading to manage large context payloads.
*   **Channel Integrations:**
    *   **[PR #48](https://github.com/HKUDS/nanobot/pull/48)**: Added Google Chat support via HTTP Webhook.

## 4. Community Hot Topics
The most discussed issues highlight specific integration needs and deployment challenges:

*   **Native Zhipu AI / Z.AI Support ([Issue #2](https://github.com/HKUDS/nanobot/issues/2)):**
    *   **Activity:** 19 comments, 6 upvotes.
    *   **Analysis:** Users are eagerly requesting native support for Zhipu's latest GLM models (4.x/4.7). This aligns with merged PR #51, suggesting the community demand is being met.
*   **Local Inference Support (Ollama/vLLM) ([Issue #193](https://github.com/HKUDS/nanobot/issues/193) & [Issue #45](https://github.com/HKUDS/nanobot/issues/45)):**
    *   **Activity:** 13+ comments combined.
    *   **Analysis:** A significant portion of the user base prefers local inference for privacy or cost. Confusion exists regarding `api_base` configuration for local vLLM/Ollama endpoints versus cloud providers.
*   **Localization & Accessibility ([Issue #1617](https://github.com/HKUDS/nanobot/issues/1617) & [Issue #1819](https://github.com/HKUDS/nanobot/issues/1819)):**
    *   **Activity:** High emotional engagement.
    *   **Analysis:** Chinese users are requesting native language documentation and WeChat integration, citing that while the tech is good, accessibility for non-English speakers is lagging.

## 5. Bugs & Stability
Several critical stability and configuration bugs were reported:

*   **Critical Security Risk ([Issue #1873](https://github.com/HKUDS/nanobot/issues/1873)):**
    *   **Severity:** High.
    *   **Details:** The agent can access its own `config.json` via `exec()`, potentially leaking API keys. The user requests a refactor to separate permissions.
*   **Configuration & Connection Issues:**
    *   **[Issue #1157](https://github.com/HKUDS/nanobot/issues/1157) & [Issue #842](https://github.com/HKUDS/nanobot/issues/842):** Users report 400/401 errors with OpenRouter, particularly with the `0.1.4` upgrade.
    *   **[Issue #1300](https://github.com/HKUDS/nanobot/issues/1300):** Matrix channel fails to start.
    *   **[Issue #1833](https://github.com/HKUDS/nanobot/issues/1833):** Unexplained `SIGTERM` crashes after short usage periods.
*   **Recent Fixes:**
    *   **[PR #1894](https://github.com/HKUDS/nanobot/pull/1894)** fixed a history slicing bug where `max_messages=0` returned the full list instead of empty.

## 6. Feature Requests & Roadmap Signals
*   **Voice Capabilities ([Issue #1106](https://github.com/HKUDS/nanobot/issues/1106)):** Request for speech-to-text input and text-to-speech output. High impact for mobile/assistant use cases.
*   **Ollama Integration ([Issue #193](https://github.com/HKUDS/nanobot/issues/193)):** Strong signal for local inference. This is likely a near-term roadmap item given the vLLM support already present.
*   **Telegram Context Awareness ([Issue #1875](https://github.com/HKUDS/nanobot/issues/1875)):** Request to support reading `reply_to_message` content.
    *   *Status:* **Implemented** in [PR #1900](https://github.com/HKUDS/nanobot/pull/1900) (Open). High likelihood of merge.

## 7. User Feedback Summary
*   **Pain Points:** Users find the configuration for `api_base` and custom providers (Groq, local vLLM) confusing. The `0.1.4` upgrade broke several existing OpenRouter configurations.
*   **Positive Sentiment:** Enthusiasm for the project's lightweight nature and potential. One user ([Issue #855](https://github.com/HKUDS/nanobot/issues/855)) shared a detailed successful local setup guide, indicating a dedicated tinkerer community.
*   **Use Cases:** Users are trying to deploy NanoBot as a personal assistant on WhatsApp, Telegram, and Matrix, often attempting to connect it to local LLMs running on modest hardware (e.g., RTX 3050).

## 8. Backlog Watch
*   **Security Architecture ([Issue #1873](https://github.com/HKUDS/nanobot/issues/1873)):** Needs maintainer attention regarding API key isolation and container security.
*   **OpenRouter Stability ([Issue #842](https://github.com/HKUDS/nanobot/issues/842)):** Open since Feb 19, this regression in the latest version needs resolution to prevent user churn.
*   **WeChat Integration ([Issue #1819](https://github.com/HKUDS/nanobot/issues/1819)):** Highly requested by the Chinese community but no official PR or roadmap indication yet.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-03-12

## 1. Today's Overview
ZeroClaw demonstrates **high velocity** and **stabilization** following a recent repository restructuring. The project saw 100 total updates (50 Issues, 50 PRs) with a high closure rate (70% for issues, 68% for PRs), indicating aggressive maintenance. The core focus today was finalizing the migration to a single `master` branch model and releasing beta versions `v0.1.7-beta.28` and `v0.1.7-beta.30`, which introduced CI/CD refinements and critical compatibility fixes for GLIBC and 32-bit systems. The team is actively fixing configuration persistence bugs and expanding provider support (Azure OpenAI).

## 2. Releases
### **v0.1.7-beta.30** & **v0.1.7-beta.28**
The latest releases focus on infrastructure hardening and workflow simplification.
*   **Migration to `master`**: Migrated to a single master branch model to resolve confusion where `main` and `master` competed as default branches ([Issue #3247](https://github.com/zeroclaw-labs/zeroclaw/issues/3247)).
*   **CI/CD Overhaul**: Replaced legacy workflows with a simplified pipeline ([PR #2895](https://github.com/zeroclaw-labs/zeroclaw/pull/2895)).
*   **Compatibility**: Implicitly includes fixes for installation scripts and build baselines (GLIBC) merged during the cycle.

## 3. Project Progress
Significant progress was made on stability, provider expansion, and build support:
*   **Azure OpenAI Support**: Official support was merged via [PR #3246](https://github.com/zeroclaw-labs/zeroclaw/pull/3246), adding deployment-based URL routing and distinct auth headers.
*   **32-Bit System Support**: [PR #3245](https://github.com/zeroclaw-labs/zeroclaw/pull/3245) added feature gates (e.g., gating `nostr-sdk`) and `portable-atomic` to enable builds for legacy/IoT devices.
*   **Config Security Fixes**: Fixed a critical flaw where channel secrets and pairing tokens were serialized to disk in plaintext or not decrypted on load ([PR #3255](https://github.com/zeroclaw-labs/zeroclaw/pull/3255), [PR #3256](https://github.com/zeroclaw-labs/zeroclaw/pull/3256), [PR #3254](https://github.com/zeroclaw-labs/zeroclaw/pull/3254)).
*   **Branch Cleanup**: Fixed multiple scripts (`install.sh`, `cut_release_tag.sh`, CI gates) that were still referencing the deleted `main` branch ([PR #3248](https://github.com/zeroclaw-labs/zeroclaw/pull/3248), [PR #3249](https://github.com/zeroclaw-labs/zeroclaw/pull/3249), [PR #3250](https://github.com/zeroclaw-labs/zeroclaw/pull/3250)).
*   **Linux Builds**: Lowered the GNU Linux build runner baseline to ensure compatibility with systems running older GLIBC versions ([PR #3257](https://github.com/zeroclaw-labs/zeroclaw/pull/3257)).

## 4. Community Hot Topics
*   **[Bug]: GLIBC_2.39 Not Found** ([Issue #3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) - 9 comments, 2 👍): Users reported binary incompatibility with standard Linux distros due to `GLIBC_2.39` dependency. This sparked the CI changes in the release to lower the build baseline.
*   **Community Recovery & Transparency** ([Issue #2922](https://github.com/zeroclaw-labs/zeroclaw/issues/2922) - 3 comments, 12 👍): A highly upvoted post acknowledging recent internal disruptions and reaffirming commitment to the project, signaling strong community goodwill.
*   **Feishu/Lark Integration Confusion** ([Issue #3012](https://github.com/zeroclaw-labs/zeroclaw/issues/3012) - 9 comments): Users flagged the `channel-lark` feature as misnamed and non-default, complicating Feishu setup.
*   **MCP Support for Agents** ([Issue #3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153) - 3 comments): Users requested that Zeroclaw agents (not just channels) support MCP tool configurations, revealing a gap in tool loading logic.

## 5. Bugs & Stability
*   **S1 - Workflow Blocked**: **Docker/MacOS `Unbound variable`** ([Issue #2930](https://github.com/zeroclaw-labs/zeroclaw/issues/2930)). The install script failed on Bash 3.2 (macOS default). **Status:** Fixed in [PR #3248](https://github.com/zeroclaw-labs/zeroclaw/pull/3248).
*   **S1 - Security Risk**: **Plaintext Secrets & Broken Pairing**. Config was saving secrets unencrypted and failing to decrypt pairing tokens on restart. **Status:** Fixed in PRs [#3254](https://github.com/zeroclaw-labs/zeroclaw/pull/3254), [#3255](https://github.com/zeroclaw-labs/zeroclaw/pull/3255), [#3256](https://github.com/zeroclaw-labs/zeroclaw/pull/3256).
*   **S2 - Degraded Behavior**: **Ollama Tool Calling Regression** ([Issue #3079](https://github.com/zeroclaw-labs/zeroclaw/issues/3079)). Models like Qwen output "thinking" text but fail to execute tool calls.
*   **S2 - Degraded Behavior**: **Matrix Channel Missing** ([Issue #2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953)). Official builds are missing the `channel-matrix` flag, blocking Matrix users.
*   **S2 - Regression**: **Broken Rust 1.94 Build** ([Issue #3207](https://github.com/zeroclaw-labs/zeroclaw/issues/3207)). Docker build fails with latest Rust version.

## 6. Feature Requests & Roadmap Signals
*   **Azure OpenAI**: Implemented in [PR #3246](https://github.com/zeroclaw-labs/zeroclaw/pull/3246) (Closed).
*   **JIT Tool Loading**: [PR #3264](https://github.com/zeroclaw-labs/zeroclaw/pull/3264) proposes RAG-based tool injection to reduce token usage—a strong candidate for the next major update.
*   **On-Demand MCP Loading**: [Issue #3095](https://github.com/zeroclaw-labs/zeroclaw/issues/3095) requests deferred tool activation to save context space.
*   **Dynamic Node Discovery**: [Issue #3093](https://github.com/zeroclaw-labs/zeroclaw/issues/3093) requests OpenClaw-style node discovery, suggesting a push toward peripheral device support.
*   **Vision for Anthropic**: [Issue #3163](https://github.com/zeroclaw-labs/zeroclaw/issues/3163) highlights missing image support for Claude, which is currently processed as text.

## 7. User Feedback Summary
Users are appreciative of the "transparent" communication regarding internal restructuring but are struggling with **environmental fragmentation**. The shift to `master` and the existence of stale `main` branches caused significant confusion for contributors rebasing code. There is recurring friction around **channel features** (Feishu, Matrix) being either misnamed, documented poorly, or missing from build flags. Developers using **Ollama + Qwen** are reporting quality regressions in tool calling, indicating a need for prompt engineering or parser adjustments in the Ollama adapter.

## 8. Backlog Watch
*   **[OPEN] Slack Thread Replies** ([Issue #3084](https://github.com/zeroclaw-labs/zeroclaw/issues/3084)): The Slack adapter misses inline thread replies due to missing event subscriptions. High impact for enterprise users.
*   **[OPEN] Workspace Security Logic** ([Issue #3082](https://github.com/zeroclaw-labs/zeroclaw/issues/3082)): The interaction between `workspace_only` and `allowed_roots` is broken, potentially blocking legitimate file access.
*   **[OPEN] Agent MCP Support** ([Issue #3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153)): Currently agents ignore MCP configs; this limits agentic capabilities and should be prioritized.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-03-12

## 1. Today's Overview
PicoClaw demonstrates **extremely high activity** today, marked by the release of stable version **v0.2.2** and a corresponding nightly build. The project is undergoing a significant architectural maturation phase, shifting from simple loops to event-driven systems and expanding integration capabilities (new providers, channels, and multi-agent teams). With over 100 PRs updated and 22 Issues active, the repository shows strong momentum, although the high ratio of open PRs (61 open vs 42 closed) suggests maintainers are potentially gatekeeping quality or managing a large backlog of community contributions.

## 2. Releases

### **v0.2.2 (Stable)**
*   **Highlights:** Adds `exec allow_remote` config support in web settings and merges the **Echo Voice audio transcription** feature.
*   **Migration Note:** Ensure `config.json` is updated if utilizing remote execution settings via the Web UI.

### **v0.2.2-nightly.20260312.6612ca09**
*   **Changelog:**
    *   **feat(providers):** Added **LongCat** model provider support ([#1317](https://github.com/sipeed/picoclaw/pull/1317)).
    *   **feat(channel):** Enabled rich-text messages in the Matrix channel ([#1370](https://github.com/sipeed/picoclaw/pull/1370)).
    *   **fix(agent):** Fixed initialization of MCP (Model Context Protocol) in direct agent mode.

## 3. Project Progress
Merged PRs today focused heavily on **stability, security, and channel expansion**:
*   **Security Hardening:** PR [#1360](https://github.com/sipeed/picoclaw/pull/1360) merged to block unauthenticated remote `exec` usage, a critical security fix.
*   **Web UI Improvements:** PR [#1367](https://github.com/sipeed/picoclaw/pull/1367) fixed the `allow_remote` configuration persistence in the web settings.
*   **Provider Expansion:** Native support for the **Anthropic Messages API** protocol was added via PR [#1284](https://github.com/sipeed/picoclaw/pull/1284), improving compatibility beyond OpenAI standards.
*   **New Channel:** Added **Zalo** channel support ([#1351](https://github.com/sipeed/picoclaw/pull/1351)), expanding the assistant's reach to a new messaging platform.
*   **Multi-Agent Teams:** Work continues on the "Agent Team" architecture ([#976](https://github.com/sipeed/picoclaw/pull/976)), enabling concurrent specialized sub-agents.

## 4. Community Hot Topics
The most engaging discussions center on **Agent Architecture** and **Extensibility**:

1.  **Architectural Refactor: Defining "Agent" Identity** ([Issue #1218](https://github.com/sipeed/picoclaw/issues/1218), 13 comments).
    *   *Context:* The community is actively discussing the introduction of `SOUL.md` (personality/values) and `AGENT.md` (configuration) to decouple character from logic.
    *   *Analysis:* Users want agents that are less generic and more customizable in personality, moving towards a "Digital Twin" concept rather than a pure tool.

2.  **Event-Driven Loop Proposal** ([Issue #1316](https://github.com/sipeed/picoclaw/issues/1316), 7 comments).
    *   *Context:* A proposal to replace the "black box" agent loop with an observable, interruptible, event-driven system.
    *   *Analysis:* This signals a mature need for debugging tools and granular control over the agent's execution flow, essential for production environments.

## 5. Bugs & Stability
Several high-impact bugs were reported today, with varying fix statuses:

*   **[P1 - Provider] Tool Call Failures:** Users report widespread tool calling failures with JSON parsing errors ([Issue #1287](https://github.com/sipeed/picoclaw/issues/1287)) and Groq API incompatibility ([Issue #748](https://github.com/sipeed/picoclaw/issues/748)).
*   **[P1 - Config] Web Backend Gateway Start Failure:** Users cannot start the gateway service from the Web UI on macOS/Windows due to path or binary detection issues ([Issue #1395](https://github.com/sipeed/picoclaw/issues/1395), [Issue #1290](https://github.com/sipeed/picoclaw/issues/1290)).
*   **[P2 - Docker] Manifest Missing:** The Docker Launcher profile fails to deploy ([Issue #1350](https://github.com/sipeed/picoclaw/issues/1350)).
*   **[P2 - UI] Firefox Compatibility:** Raw JSON configuration text area collapses in Firefox ([Issue #1364](https://github.com/sipeed/picoclaw/issues/1364)).

## 6. Feature Requests & Roadmap Signals
Features likely to land in upcoming versions based on open PRs and active issues:

*   **Telegram Realtime Streaming ([#1098](https://github.com/sipeed/picoclaw/issues/1098)):** High demand for streaming responses now that Telegram supports it.
*   **Engram Persistent Memory ([#175](https://github.com/sipeed/picoclaw/issues/175)):** Request to replace `MEMORY.md` with a search-capable database backend for long-term memory.
*   **GitHub Copilot Integration ([#1347](https://github.com/sipeed/picoclaw/issues/1347)):** Request for Device Code Auth flow to use Copilot as a provider.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by **iteration limits** failing complex tasks ([#440](https://github.com/sipeed/picoclaw/issues/440)) and **platform-specific bugs** (Windows source build failures, Firefox UI glitches).
*   **Satisfaction:** The addition of Zalo and the move toward an event-driven architecture are receiving positive engagement.
*   **Use Cases:** Users are trying to deploy PicoClaw as a multi-channel customer service bot (Telegram, Feishu, WeCom, Zalo) and are hitting friction with Web UI management and remote execution configurations.

## 8. Backlog Watch
*   **Critical Provider Bug:** Issue [#748](https://github.com/sipeed/picoclaw/issues/748) (Groq API compatibility) has been open since Feb 25. As a provider bug, this blocks adoption for a specific subset of users.
*   **Agent Loop Refactor:** Issue [#1316](https://github.com/sipeed/picoclaw/issues/1316) is a massive architectural change proposal. It requires maintainer sign-off to proceed, as it affects the core `pkg/agent/loop.go`.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-03-12

## 1. Today's Overview
NanoClaw demonstrates **exceptionally high development velocity** today with 39 active PRs and 17 updated Issues, indicating a rapidly maturing AI agent framework. The community is heavily focused on **token optimization strategies** and **multi-channel integration**, with three major token management proposals (#980, #981, #982) already closed and merged into tracking issue #983. A new wave of PRs introduces **alternative runtimes** (OpenAI Codex), **semantic memory systems** (LanceDB), and **expanded messaging platform support** (QQ Bot, Discord enhancements), positioning NanoClaw as a serious contender in the open-source AI assistant space.

---

## 2. Releases
**No new releases today.** The last release information is unavailable, suggesting the project may be accumulating features for a significant milestone release given the current PR volume.

---

## 3. Project Progress

### Closed Today (Merged/Completed)
| Issue/PR | Description | Impact |
|----------|-------------|--------|
| [#983](https://github.com/qwibitai/nanoclaw/issues/983) | Token Optimization Tracking Issue | Master issue consolidating 3 token-reduction mechanisms |
| [#980](https://github.com/qwibitai/nanoclaw/issues/980) | Inline Compaction Mechanism | Reduces conversation history bloat via inline summarization |
| [#981](https://github.com/qwibitai/nanoclaw/issues/981) | Response Length Control | Soft constraints to reduce verbose output (5x cost savings) |
| [#982](https://github.com/qwibitai/nanoclaw/issues/982) | CLAUDE.md Auto-Compression | Prevents system prompt inflation from auto-memory |
| [#977](https://github.com/qwibitai/nanoclaw/pull/977) | Semantic Memory with LanceDB | Persistent vector memory for container agents |
| [#975](https://github.com/qwibitai/nanoclaw/pull/975) | GitHub MCP Server Integration | Structured GitHub tools without CLI exposure |
| [#955](https://github.com/qwibitai/nanoclaw/issues/955) | ByeByeClaw Uninstaller | Community-contributed cleanup tool |

### Key Open PRs Advancing Today
- **[#988](https://github.com/qwibitai/nanoclaw/pull/988)** - Implementation of the complete token optimization stack
- **[#987](https://github.com/qwibitai/nanoclaw/pull/987)** - Session rotation to prevent 55MB transcript failures
- **[#979](https://github.com/qwibitai/nanoclaw/pull/979)** - LanceDB memory skill extraction for modularity
- **[#963](https://github.com/qwibitai/nanoclaw/pull/963)** - OpenAI Codex SDK as alternative agent engine
- **[#970](https://github.com/qwibitai/nanoclaw/pull/970)** - Multi-instance support via `NANOCLAW_INSTANCE` namespacing

---

## 4. Community Hot Topics

### Most Active Discussions

| Issue/PR | Activity | Core Concern |
|----------|----------|--------------|
| **[#865](https://github.com/qwibitai/nanoclaw/issues/865)** | Security architecture | **Container trust model flawed** — @calebfaruki argues scripts shouldn't live at agent level, advocating zero-trust architecture |
| **[#732](https://github.com/qwibitai/nanoclaw/issues/732)** | WhatsApp UX | **Message flooding** — streaming chunks sent individually, flooding chat with partial responses |
| **[#984](https://github.com/qwibitai/nanoclaw/issues/984)** | Token efficiency | **Inline Compaction feature** — community eagerly awaiting implementation to reduce API costs |
| **[#973](https://github.com/qwibitai/nanoclaw/issues/973)** | Developer experience | **Setup performance** — users frustrated by slow setup process, questioning JSON complexity |

### Analysis of Underlying Needs
1. **Cost Optimization**: The token optimization trilogy (#980, #981, #982) shows users are highly cost-sensitive, seeking zero-overhead solutions
2. **Security Posture**: The container trust discussion (#865) reveals enterprise users evaluating NanoClaw for production workloads
3. **Multi-Platform Reach**: QQ Bot PRs (#966, #836) and Discord enhancements (#974) indicate demand in Asian markets and gaming communities
4. **Operational Reliability**: Session rotation (#987) and OAuth fixes (#930, #969) address production stability concerns

---

## 5. Bugs & Stability

### Critical (P0)
| Bug | Severity | Status | Fix Available |
|-----|----------|--------|---------------|
| **[#958](https://github.com/qwibitai/nanoclaw/issues/958)** - No response after setup | 🔴 High | Open | None yet |
| **[#960](https://github.com/qwibitai/nanoclaw/issues/960)** - MCP env vars not passed to containers | 🔴 High | Open | None yet |

### High (P1)
| Bug | Severity | Status | Fix Available |
|-----|----------|--------|---------------|
| **[#732](https://github.com/qwibitai/nanoclaw/issues/732)** - WhatsApp streaming flood | 🟠 High | Open | **[#965](https://github.com/qwibitai/nanoclaw/pull/965)** by @kianwoon |
| **[#709](https://github.com/qwibitai/nanoclaw/issues/709)** - Secret env var divergence | 🟠 High | Closed | Resolved |

### Medium (P2)
| Bug | Severity | Status | Fix Available |
|-----|----------|--------|---------------|
| **[#853](https://github.com/qwibitai/nanoclaw/issues/853)** - ANTHROPIC_AUTH_TOKEN unsupported | 🟡 Medium | Open | None yet |
| **[#989](https://github.com/qwibitai/nanoclaw/issues/989)** - Gemini Pro 3.5min latency | 🟡 Medium | Open | Diagnosis provided |
| **[#973](https://github.com/qwibitai/nanoclaw/issues/973)** - Slow setup | 🟡 Medium | Open | None yet |

---

## 6. Feature Requests & Roadmap Signals

### Likely Next Version Inclusions
| Feature | Likelihood | Evidence |
|---------|------------|----------|
| **Token Optimization Stack** | ✅ Very High | Tracking issue #983 closed with 3 sub-mechanisms completed, PR #988 pending review |
| **Semantic Memory (LanceDB)** | ✅ Very High | PR #977 merged, #979 modular skill extraction in review |
| **OAuth Token Refresh** | ✅ High | Two PRs (#930, #969) addressing this, likely to merge one |
| **Multi-Instance Support** | 🔄 Medium | PR #970 well-structured, addresses real deployment need |

### Emerging Requests
- **[#957](https://github.com/qwibitai/nanoclaw/issues/957)** — Podman alternative to Docker (enhancement request)
- **[#971](https://github.com/qwibitai/nanoclaw/pull/971)** — Admin command interception for security
- **[#963](https://github.com/qwibitai/nanoclaw/pull/963)** — OpenAI Codex SDK as alternative engine

### Roadmap Prediction
The next release will likely focus on **cost efficiency** (token optimization), **memory persistence** (LanceDB integration), and **deployment flexibility** (multi-instance, alternative runtimes). The security hardening discussions suggest enterprise readiness is a 2026 priority.

---

## 7. User Feedback Summary

### Pain Points
| Category | Feedback | Source |
|----------|----------|--------|
| **Setup Complexity** | "Setup takes ages" — users frustrated by slow, complex configuration | [#973](https://github.com/qwibitai/nanoclaw/issues/973) |
| **Silent Failures** | "Never get reply" with no error output — debugging is difficult | [#958](https://github.com/qwibitai/nanoclaw/issues/958) |
| **Message Flooding** | WhatsApp becomes unusable due to streaming chunk behavior | [#732](https://github.com/qwibitai/nanoclaw/issues/732) |
| **Cost Concerns** | Output tokens cost 5x input — verbosity is expensive | [#985](https://github.com/qwibitai/nanoclaw/issues/985) |
| **Environment Variable Issues** | MCP servers fail silently when env vars not passed | [#960](https://github.com/qwibitai/nanoclaw/issues/960) |

### Positive Signals
- **Community Contributions**: ByeByeClaw uninstaller (#955) shows engaged ecosystem
- **Multi-Platform Demand**: QQ Bot, Discord vision/voice, Telegram reactions indicate broad appeal
- **Security Consciousness**: Users actively hardening deployments (#865)

### Use Cases Emerging
- **Always-on personal assistants** via WhatsApp/Telegram
- **Development assistants** with GitHub integration
- **Multi-user deployments** requiring instance isolation
- **Cost-sensitive production** workloads needing token optimization

---

## 8. Backlog Watch

### Critical Issues Awaiting Maintainer Response
| Issue | Age | Impact | Recommendation |
|-------|-----|--------|----------------|
| **[#865](https://github.com/qwibitai/nanoclaw/issues/865)** | 3 days | Security architecture discussion requires maintainer input on threat model | **Needs architecture decision** |
| **[#958](https://github.com/qwibitai/nanoclaw/issues/958)** | 1 day | User completely blocked, no response from agent | **Urgent troubleshooting needed** |
| **[#960](https://github.com/qwibitai/nanoclaw/issues/960)** | 1 day | MCP servers broken for users with env var interpolation | **Regression from #798 needs fix** |

### PRs Stalled in Review
| PR | Status | Blocker |
|----|--------|---------|
| **[#930](https://github.com/qwibitai/nanoclaw/pull/930)** vs **[#969](https://github.com/qwibitai/nanoclaw/pull/969)** | Duplicate OAuth fixes | Maintainer needs to choose/merge approach |
| **[#836](https://github.com/qwibitai/nanoclaw/pull/836)** vs **[#966](https://github.com/qwibitai/nanoclaw/pull/966)** | Duplicate QQ Bot implementations | Needs consolidation decision |

### Long-Term Watch
- **[#709](https://github.com/qwibitai/nanoclaw/issues/709)** — Secret management divergence (closed but architectural concern remains)
- **[#989](https://github.com/qwibitai/nanoclaw/issues/989)** — Gemini Pro latency (123K input tokens indicates systemic context management issue)

---

**Digest generated**: 2026-03-12 | **Data source**: GitHub qwibitai/nanoclaw | **Analysis period**: Last 24h

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-12

## 1. Today's Overview
IronClaw demonstrates **exceptionally high development velocity** today with 50 PRs updated (35 merged) against 47 active issues. The project shipped **v0.18.0** yesterday, and the team is actively batching fixes through an automated staging-to-main promotion CI pipeline. However, the **signal-to-noise ratio in issues is concerning** — a coordinated "bug bash" generated 15+ new issues in rapid succession, many documenting medium-priority UI/UX friction rather than critical failures. Simultaneously, a significant **platform compatibility gap** emerged around Linux glibc requirements and WASM tool versioning, suggesting v0.18.0 may have been released with incomplete QA coverage for fresh installations.

---

## 2. Releases

### v0.18.0 (Released 2026-03-11)
The latest release is light on documented release notes, listing only promotion merges:
- **Merge #907**: Promote staging to main (2026-03-10 15:19 UTC)
- **Merge #830**: Update WASM artifacts

**Migration Notes**: No explicit breaking changes documented, but community reports indicate fresh `ironclaw onboard` installs may encounter WASM tool incompatibilities (Issue #840) and checksum verification failures (Issue #875). Users on Linux systems with glibc < 2.35 should await the musl fallback fix (PR #1013) before upgrading.

---

## 3. Project Progress

### Key Merged PRs (Today's Staging Promotions)
The team operates a sophisticated **automated CI promotion workflow** where changes batch in `staging` and auto-promote to `main`. Notable merged batches:

| PR | Scope | Summary |
|---|---|---|
| [#1006](https://github.com/nearai/ironclaw/pull/1006) | CLI, MCP, LLM, Setup | Large XL promotion with "high risk" scope touching core agent toolchains |
| [#1004](https://github.com/nearai/ironclaw/pull/1004) | Web, Sandbox | Web channel and sandbox improvements |
| [#965](https://github.com/nearai/ironclaw/pull/965) | Web Channel | Channel-specific fixes |
| [#918](https://github.com/nearai/ironclaw/pull/918) | CLI | **New `ironclaw skills list/search/info` subcommands** — enables skill discovery without running the agent |
| [#972](https://github.com/nearai/ironclaw/pull/972) | WASM Tools | Tool system improvements |

### Active Feature PRs (Open)
| PR | Scope | Status |
|---|---|---|
| [#933](https://github.com/nearai/ironclaw/pull/933) | CLI | `ironclaw channels list` subcommand with verbose/json output |
| [#938](https://github.com/nearai/ironclaw/pull/938) | Providers | Z.AI provider support for GLM-5 model |
| [#921](https://github.com/nearai/ironclaw/pull/921) | Providers | Z.AI Coding API provider (community contribution) |
| [#1017](https://github.com/nearai/ironclaw/pull/1017) | CLI | Cron subcommand for routine management |
| [#1013](https://github.com/nearai/ironclaw/pull/1013) | Deploy/Install | **Critical fix**: musl targets for older Linux compatibility |
| [#1015](https://github.com/nearai/ironclaw/pull/1015) | WASM | UTF-8-safe truncation for emitted messages |

---

## 4. Community Hot Topics

### Most Active Discussions (by comment count)

| Issue | Comments | Theme |
|---|---|---|
| [#142](https://github.com/nearai/ironclaw/issues/142) | 9 | **Authentication friction** — User frustrated that NEAR AI auth is "REQUIRED" and claims "everyone removes this" |
| [#733](https://github.com/nearai/ironclaw/issues/733) | 5 | **Ngrok integration** — Zombie process bug causing tunnel failures |
| [#840](https://github.com/nearai/ironclaw/issues/840) | 4 | **WASM compatibility** — Fresh onboard installs stale tools incompatible with host WIT 0.3.0 |
| [#548](https://github.com/nearai/ironclaw/issues/548) | 3 | **Web search** — Request for native search endpoint in Chat API |
| [#875](https://github.com/nearai/ironclaw/issues/875) | 2 | **Installation reliability** — Checksum verification failures during `onboard` |

### Underlying Needs Analysis
1. **Authentication flexibility (#142)**: The project's tight coupling to NEAR AI's authentication layer is a significant adoption barrier for users wanting a self-hosted agent without external dependencies. This has been an ongoing friction point since February.

2. **Onboarding reliability (#840, #875)**: Multiple reports of broken fresh installations suggest the `ironclaw onboard` workflow lacks robust versioning synchronization between the core binary and its WASM tool artifacts.

3. **Ngrok tunnel stability (#733, #738)**: Users relying on IronClaw for webhook integrations (Slack, etc.) are experiencing infrastructure failures in the managed tunnel feature.

---

## 5. Bugs & Stability

### Critical / High Severity

| Issue | Severity | Description | Fix Status |
|---|---|---|---|
| [#1008](https://github.com/nearai/ironclaw/issues/1008) | **HIGH** | Installer fails on Linux glibc < 2.35 (Amazon Linux 2023, Ubuntu 20.04) — no musl fallback | Fix in PR [#1013](https://github.com/nearai/ironclaw/pull/1013) |
| [#1005](https://github.com/nearai/ironclaw/issues/1005) | **HIGH** | Inconsistent double opt-in enforcement (CI-detected) | Open |
| [#988](https://github.com/nearai/ironclaw/issues/988) | **HIGH** | Hardcoded `CLI_ENABLED=false` env var instead of config abstraction (CI-detected) | Open |
| [#840](https://github.com/nearai/ironclaw/issues/840) | **HIGH** | WASM tools (github, web-search) compiled against WIT 0.2.0, host requires 0.3.0 — fresh installs broken | Open |
| [#875](https://github.com/nearai/ironclaw/issues/875) | **HIGH** | `ironclaw onboard` checksum verification failures for GitHub tool | Closed (fix presumed in recent promotion) |

### Medium Severity (Bug Bash Findings)
A systematic bug bash by @sergeiest identified 15+ issues, primarily around:

| Issue | Area | Problem |
|---|---|---|
| [#994](https://github.com/nearai/ironclaw/issues/994) | Routines | Telegram broadcast fails with "Invalid chat_id 'default'" |
| [#992](https://github.com/nearai/ironclaw/issues/992) | Telegram | OAuth URL malformed (`clientid` vs `client_id`) when initiated from Telegram |
| [#999](https://github.com/nearai/ironclaw/issues/999) | Google Sheets | 403 PERMISSION_DENIED after completing OAuth |
| [#738](https://github.com/nearai/ironclaw/issues/738) | Tunnel | Managed tunnel binds port 3000 (Web Gateway) instead of 8080 (Webhooks), causing 404s |
| [#1009](https://github.com/nearai/ironclaw/issues/1009) | Bedrock | AWS Bedrock backend fails startup validation — missing provider check |

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests
| Issue | Request | Community Signal |
|---|---|---|
| [#548](https://github.com/nearai/ironclaw/issues/548) | Add Search endpoint to Chat API for native web search | 3 comments, open since Mar 4 |
| [#299](https://github.com/nearai/ironclaw/issues/299) | Ability to configure/customize `mcpServers` JSON for third-party MCP servers (Browserbase) | 2 comments, help wanted |
| [#919](https://github.com/nearai/ironclaw/issues/919) | Community tool: **ByeByeClaw** — one-click uninstaller (community ecosystem growing) | 1 comment, closed |

### Predicted Next Version Inclusions
Based on open PRs near completion:
1. **Z.AI Provider Support** — Two PRs (#938, #921) adding GLM-5 and Coding API support; likely in v0.18.1
2. **CLI enhancements** — `channels list` (#933) and `cron` management (#1017) subcommands
3. **Linux musl fallback** — PR #1013 addresses critical installer failures; fast-track likely

---

## 7. User Feedback Summary

### Pain Points
1. **Authentication lock-in (#142)**: Strong sentiment from some users that mandatory NEAR AI auth contradicts open-source philosophy. User quote: *"This has nothing to do with the project and should be removed and is being actively removed by EVERYONE."*
2. **Installation fragility**: Multiple reports of `onboard` failures (checksums, WASM versioning) suggest first-time-user experience is degraded in v0.18.0.
3. **Channel-specific bugs**: Telegram and Google Sheets integrations have multipleOAuth and parameter-handling bugs that erode trust in non-web channels.

### Positive Signals
- Active community contributions (Z.AI providers, ByeByeClaw uninstaller)
- Sophisticated CI/CD pipeline with automated staging promotions
- Comprehensive bug bash indicates internal quality investment

### Use Cases Observed
- Webhook integrations (Slack via ngrok tunnels)
- Google Sheets automation
- Browser automation via MCP (Browserbase)
- Scheduled routines with Telegram notifications
- Multi-provider LLM switching (AWS Bedrock, Alibaba/Qwen, Z.AI)

---

## 8. Backlog Watch

### Long-Unanswered / Needs Maintainer Attention

| Issue | Age | Priority | Concern |
|---|---|---|---|
| [#142](https://github.com/nearai/ironclaw/issues/142) | ~1 month | **HIGH** | Authentication architecture question — core adoption blocker for some users; needs official stance |
| [#299](https://github.com/nearai/ironclaw/issues/299) | 18 days | MEDIUM | MCP server configuration flexibility — users can't easily integrate third-party tools like Browserbase |
| [#548](https://github.com/nearai/ironclaw/issues/548) | 8 days | MEDIUM | Native web search — reasonable feature request with community interest |

### CI-Generated Issues Requiring Triage
The staging CI bot created several issues flagging code quality concerns that need human review:
- [#1005](https://github.com/nearai/ironclaw/issues/1005): Double opt-in enforcement inconsistency
- [#988](https://github.com/nearai/ironclaw/issues/988): Hardcoded env var anti-pattern
- [#990](https://github.com/nearai/ironclaw/issues/990): Undocumented `CLI_ENABLED=false` semantics

---

**Summary**: IronClaw is moving fast with strong engineering velocity, but v0.18.0 appears to have shipped with regression risks around fresh installations (WASM versioning, glibc compatibility). The team should prioritize merging PR #1013 (musl fallback) and addressing Issue #840 (WIT mismatch) before broader promotion. The authentication architecture question (#142) deserves an official response to clarify the project's philosophy on self-hosted deployments.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-03-12

## 1. Today's Overview
LobsterAI demonstrates high development velocity with a new version release (v0.2.3) and significant integration work completed today. The team successfully merged multiple pull requests extending platform support to DingTalk, QQ, and WeCom (Enterprise WeChat), indicating a strategic pivot towards communication platform interoperability. Community engagement remains robust but highlights growing stability concerns, particularly regarding memory retention, environment configuration, and specific UI bugs like text formatting. The influx of 12 active issues against 5 merged PRs suggests a need to balance feature expansion with quality assurance.

## 2. Releases
### **v0.2.3**
*   **Release Notes:** This version focuses on UI enhancements and integration stability.
*   **Key Changes:**
    *   **UI:** Added multi-file selection support for attachments in the main interface ([PR #371](https://github.com/netease-youdao/LobsterAI/pull/371)).
    *   **Integrations:** Merged fixes for QQ and IM implementations, alongside chat paging improvements ([PR #348](https://github.com/netease-youdao/LobsterAI/pull/348), [PR #355](https://github.com/netease-youdao/LobsterAI/pull/355)).
*   **Observations:** The release notes appear truncated in the data feed ("fi"), but the merged commits suggest groundwork for the chat-bot integrations seen in today's PR activity.

## 3. Project Progress
Today's merged PRs (5 total) reflect a concentrated effort to position LobsterAI as a cross-platform agent hub.
*   **Platform Integrations:** The team closed PRs enabling LobsterAI functionality within DingTalk ([PR #378](https://github.com/netease-youdao/LobsterAI/pull/378)), QQ ([PR #381](https://github.com/netease-youdao/LobsterAI/pull/381)), and WeCom ([PR #383](https://github.com/netease-youdao/LobsterAI/pull/383)).
*   **Build Stability:** A critical fix for macOS code signing failures was merged ([PR #387](https://github.com/netease-youdao/LobsterAI/pull/387)), addressing `RangeError` and symlink issues that likely hampered the v0.2.3 distribution on Apple devices.

## 4. Community Hot Topics
*   **Critical Text Formatting Bug ([Issue #344](https://github.com/netease-youdao/LobsterAI/issues/344)):** A highly active thread (5 comments) discusses a severe issue where the AI inserts unwanted spaces between Chinese characters and numbers. Users indicate this prevents them from switching from alternatives like "openclaw" due to data integrity concerns.
*   **Environment Configuration Requests ([Issue #377](https://github.com/netease-youdao/LobsterAI/issues/377)):** With 1 positive reaction, users are requesting the ability to set custom environment variables (e.g., API keys) for skills/scripts. This highlights a need for more complex, secure agent automations.
*   **Gateway Status Confusion ([Issue #366](https://github.com/netease-youdao/LobsterAI/issues/366)):** Users are reporting failures with `openclaw gateway status`, pointing to potential documentation gaps or service configuration bugs regarding default ports.

## 5. Bugs & Stability
*   **High Severity - Memory Retention ([Issue #186](https://github.com/netease-youdao/LobsterAI/issues/186)):** Users report persistent poor memory capabilities across multiple models, a fundamental issue for an AI agent. No fix has been indicated in recent PRs.
*   **High Severity - UI/Processing Freeze ([Issue #357](https://github.com/netease-youdao/LobsterAI/issues/357)):** The application reportedly freezes during image reading tasks.
*   **Medium Severity - Bash Execution Latency ([Issue #350](https://github.com/netease-youdao/LobsterAI/issues/350)):** Significant delays in executing simple bash commands compared to native terminal performance.
*   **Medium Severity - Update Experience ([Issue #382](https://github.com/netease-youdao/LobsterAI/issues/382)):** Frequent updates are currently wiping user settings, causing friction for power users.
*   **Fixed - macOS Code Signing:** Addressed by [PR #387](https://github.com/netease-youdao/LobsterAI/pull/387).

## 6. Feature Requests & Roadmap Signals
*   **Agent Teams & SDK Update:** A request to update the Claude Agent SDK to support "agent teams" ([Issue #384](https://github.com/netease-youdao/LobsterAI/issues/384)) aligns with the multi-agent workflow PR currently open ([PR #240](https://github.com/netease-youdao/LobsterAI/pull/240)).
*   **Deployment Flexibility:** Strong signals for Docker support ([Issue #386](https://github.com/netease-youdao/LobsterAI/issues/386)) and a Linux/Ubuntu version ([Issue #273](https://github.com/netease-youdao/LobsterAI/issues/273)), suggesting users want to run LobsterAI in server/headless environments.
*   **Enhanced File Navigation:** Request to "Open containing folder" directly from chat files ([Issue #379](https://github.com/netease-youdao/LobsterAI/issues/379))—a likely candidate for near-term implementation given its low complexity and high utility.
*   **Provider Support:** An open PR ([PR #388](https://github.com/netease-youdao/LobsterAI/pull/388)) suggests upcoming support for MiniMax's overseas API endpoints.

## 7. User Feedback Summary
Users are excited about the project's potential but frustrated by "blocker" bugs that affect core utility. The comparison to "openclaw" appears frequently, implying users view LobsterAI as a competitor or alternative that currently lacks stability in memory and precise text handling. The sentiment is that the tool is powerful but "rough around the edges," particularly regarding update handling (settings loss) and execution speed (Bash lag).

## 8. Backlog Watch
*   **[Issue #186](https://github.com/netease-youdao/LobsterAI/issues/186) (Memory Ability):** Open since late February with continued comments. This seems to be a fundamental architectural limitation or bug that needs urgent dev attention.
*   **[PR #240](https://github.com/netease-youdao/LobsterAI/pull/240) (Workflow Enhancement):** A substantial open PR regarding "Agent Workflow" and "soul.md" logic. It has been open for over a week and requires a decision on the "PASS/REJECT" workflow logic proposed.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest: 2026-03-12

## 1. Today's Overview
TinyClaw exhibits **extremely high velocity** today, signaling a major pivot and maturation phase. The repository saw a massive consolidation of work with 9 closed issues and 6 merged PRs, primarily focused on architectural refactoring and user experience. The project is currently undergoing a significant **rebranding effort** from "TinyClaw" to "TinyAGI" (PR #191), aiming to reflect a broader scope beyond simple agent "claws." Additionally, the release of **v0.0.10** indicates a stabilization push, removing legacy logging components and hardening the runtime environment.

## 2. Releases
### **v0.0.10**
This release focuses on operational cleanup and reliability improvements.
- **Operational Changes:**
  - **Removed Logs Pane:** The dedicated logs pane in the `tmux` session (managed by `daemon.sh`) has been removed to declutter the interface.
  - **Simplified Home Detection:** Logic for `TINYCLAW_HOME` in `heartbeat-cron.sh` has been simplified for better portability.
  - **Watchdog Timeout:** The Telegram polling watchdog timeout increased from 2m to 5m to prevent false positives on slow networks.
- **Refactoring:**
  - **Type Localization:** `Task` and `TaskStatus` types have been moved/localized to improve type safety across the codebase.

## 3. Project Progress
Today's merged PRs represent a major architectural overhaul, moving from a monolithic structure to a scalable **npm workspaces monorepo**.

- **Monorepo Migration (#186):** The codebase has been split into 5 distinct packages (`core`, `teams`, `channels`, `server`, `visualizer`). Crucially, this PR replaced **BullMQ/Redis** with a lightweight **SQLite queue** (using `better-sqlite3` with WAL mode), significantly reducing infrastructure dependencies for self-hosters.
- **Real-Time Team Orchestration (#190):** Fixed team communication logic to ensure agents route through the team orchestrator. Responses now **stream in real-time** to users as they arrive, rather than waiting for full completion.
- **Kanban Automation (#182):** Implemented "Just-in-Time" agent triggering. Moving a task to the "In Progress" column on the Kanban board now **automatically triggers** the assigned agent, removing the need for a manual "Send" click.
- **CLI Modernization (#185):** Migrated ~1,500 lines of Bash prompts to TypeScript using `@clack/prompts`, resulting in a more robust and visually consistent CLI experience.
- **New Provider: Avian AI (#143):** Added support for the [Avian](https://avian.io) provider (OpenAI-compatible API), expanding model choices for users.

## 4. Community Hot Topics
The most engaging discussions centered on observability and model flexibility.

- **Traceability & UI (Issue #66 - 6 comments):** User @iamvince sparked a detailed discussion requesting "Mission Control" features similar to Claude-trace or Azire Phoenix. The community is asking for **deep observability**—specifically graph traces of agent-to-agent communication, tool usage, and memory retrieval.
- **Local Model Support (Issue #111 - 1 👍):** There is strong demand for "Bring Your Own Model" capabilities, specifically Ollama and local LLM support, to reduce API costs and improve privacy.
- **Uninstall Tool (Issue #189):** A community member (@wanikua) released **ByeByeClaw**, a third-party uninstaller. This highlights a user need for clean system state management, which the core team acknowledged by closing the issue upon review.

## 5. Bugs & Stability
- **Message Acknowledgment Fix (Issue #91):** A significant UX bug was resolved where agents on WhatsApp would show a "typing" indicator but fail to send the final response until explicitly prompted for status. This fix is critical for retention on messaging platforms.
- **Queue Processor Cleanup (Issue #63):** A potential race condition was addressed where intervals persisted after shutdown signals, which previously risked incomplete cleanup or zombie processes.

## 6. Feature Requests & Roadmap Signals
The backlog reveals a clear trend toward a **Web-First Management Experience** and **Model Agnosticism**.

- **TinyOffice Overhaul:** Three new open issues (#192, #193, #194) propose a massive upgrade to the web portal.
  - **Runtime Control Panel (#194):** Users want to manage the daemon, queue, and heartbeat directly from the UI, moving away from CLI reliance.
  - **Web Onboarding (#193):** A request for a "First Run Wizard" to configure API keys and settings via the browser.
  - **Chat Persistence (#192):** Users need persistent chat history; currently, chats appear ephemeral upon navigation.
- **Expanded Model Support:** Requests for GLM 4.7 (#103) and OpenAI Compatible Endpoints (#41) suggest users are treating TinyClaw as a router for multiple specialized models.

**Prediction:** The next version will likely focus on **TinyOffice feature parity** (specifically chat history and daemon controls) and consolidating the new SQLite queue architecture.

## 7. User Feedback Summary
Users are enthusiastic about the project's direction but currently feel the transition between CLI and Web UI is disjointed.
- **Pain Point:** "Split Brain" experience—users configure via CLI but monitor via Web, and the Web UI lacks control features (start/stop).
- **Pain Point:** Chat memory—users are frustrated by the lack of persistent history in the current TinyOffice build.
- **Satisfaction:** High satisfaction with the move to SQLite (#186), as removing Redis significantly lowers the barrier to entry for local deployment.

## 8. Backlog Watch
- **[OPEN] PR #191 (Rebrand to TinyAGI):** This is a massive PR touching the entire codebase. It requires careful review before merging to prevent breaking changes in package imports and environment variables.
- **[OPEN] Issue #194 (Runtime Control Panel):** This is a high-value feature that would solve the "CLI dependency" complaint. It should be prioritized for the next milestone.
- **[OPEN] Issue #87 (Zellij Support):** A specific request for `zellij` layouts as an alternative to `tmux`. As the project rebrands to "TinyAGI," supporting modern terminal multiplexers like Zellij aligns with the "modern stack" philosophy.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-03-12

## 1. Today's Overview
Moltis demonstrates **very high maintenance activity** with a focus on stability and user experience refinements. While no new official releases were cut today, the project saw 25 updated Pull Requests (mostly new fixes and features) and the closure of 23 issues, indicating an aggressive bug-squashing cycle. The maintainers, primarily `@penso`, are actively addressing regressions reported by the community regarding the Docker setup, local LLM providers, and integration channels like Discord and Telegram.

## 2. Releases
**None.** No new tagged releases were recorded in the last 24 hours. The volume of open PRs suggests a stabilization phase likely leading up to a upcoming minor or patch version release.

## 3. Project Progress
Significant progress was made in fixing critical bugs and merging quality-of-life improvements. While only 5 PRs were merged/closed, 20 new PRs were opened, showing rapid iteration.

*   **Merged/Closed PRs:**
    *   **[PR #397](https://github.com/moltis-org/moltis/pull/397)**: Fixed an annoying bug where raw special tokens (like `<|im_end|>`) leaked into the UI when using local MLX models.
    *   **[PR #399](https://github.com/moltis-org/moltis/pull/399)**: Fixed channel session compaction, ensuring Discord/Telegram chats summarize correctly instead of defaulting to the "main" session.

*   **New & Advanced PRs (Open):**
    *   **MCP Enhancements**: [PR #419](https://github.com/moltis-org/moltis/pull/419) makes MCP request timeouts configurable.
    *   **Security**: [PR #416](https://github.com/moltis-org/moltis/pull/416) adds support for secret remote MCP URLs and headers, preventing leakage in logs.
    *   **Local LLM**: [PR #408](https://github.com/moltis-org/moltis/pull/408) introduces opt-in Vulkan support for GGUF models, improving hardware acceleration options.
    *   **Agent Skills**: [PR #413](https://github.com/moltis-org/moltis/pull/413) proposes a safe `write_skill_files` tool, allowing agents to manage their own sidecar files with strict guards.
    *   **Chat History**: [PR #418](https://github.com/moltis-org/moltis/pull/418) ensures that if a user aborts a generation, the partial text is saved to history rather than lost.

## 4. Community Hot Topics
The most engaged discussions revolve around **Docker stability** and **Node Protocol extensibility**.

1.  **[Issue #181](https://github.com/moltis-org/moltis/issues/181) [Bug]: Crons and heartbeat can't be setup and activate!** (8 comments, Closed)
    *   **Topic**: Users struggled to configure automated tasks and health checks. The high comment count indicates this was a blocking issue for self-hosted production use cases. Resolution implies a fix was identified in recent code changes.
2.  **[Issue #129](https://github.com/moltis-org/moltis/issues/129) Unable to login with password after Docker setup** (4 comments, Closed)
    *   **Topic**: Authentication failures post-deployment via Docker. This highlights the complexity of the current onboarding flow, which [PR #406](https://github.com/moltis-org/moltis/pull/406) (improving password autofill) aims to smooth out.
3.  **[Issue #391](https://github.com/moltis-org/moltis/issues/391) RFC: Node-Advertised Tools** (2 comments, Open)
    *   **Topic**: A technical Request for Comments about extending the node protocol so agents can discover and use tools hosted on remote nodes without raw `exec` commands. This is a strategic architectural discussion for scaling agent capabilities.

## 5. Bugs & Stability
Several bugs were reported and immediately addressed by maintainers today.

*   **P1 - Critical/Usability**:
    *   **[Issue #414](https://github.com/moltis-org/moltis/issues/414)**: The `z.ai` integration fails out of the box with network errors. (Open)
    *   **[Issue #407](https://github.com/moltis-org/moltis/issues/407)**: Network-filter proxy crashes immediately after start, breaking web search. (Open)

*   **P2 - Docker/Mounting Issues (Fixed/Pending Merge)**:
    *   **[Issue #102](https://github.com/moltis-org/moltis/issues/102)**: Docker-in-Docker sandbox mounts internal paths instead of host paths (4 👍). This is a high-priority fix for developers running agents in contained environments.
    *   **[Issue #346](https://github.com/moltis-org/moltis/issues/346)**: "Can't add node from docker". (Closed)

*   **P3 - Minor UI/UX**:
    *   **[Issue #344](https://github.com/moltis-org/moltis/issues/344)**: Poor UX when the vault is "sealed" (locked).
    *   **[Issue #348](https://github.com/moltis-org/moltis/issues/348)**: Agent "Soul" (personality) changes in the Web UI do not persist. (Closed)

## 6. Feature Requests & Roadmap Signals
Users are actively requesting more integration channels and model flexibility.

*   **Webhooks**: [Issue #272](https://github.com/moltis-org/moltis/issues/272) requests generic webhook support to trigger agents from external events.
*   **Model Compatibility**: [Issue #114](https://github.com/moltis-org/moltis/issues/114) requests easier support for OpenAI-compatible endpoints (like LM Studio) without complex configuration.
*   **Communication Platforms**: Demand for **WhatsApp** ([Issue #111](https://github.com/moltis-org/moltis/issues/111)) and **Matrix** ([Issue #233](https://github.com/moltis-org/moltis/issues/233)) support remains strong.
*   **Prediction**: The RFC on [Node-Advertised Tools](https://github.com/moltis-org/moltis/issues/391) and the pending [Secret MCP URL](https://github.com/moltis-org/moltis/pull/416) feature suggest the next version will focus heavily on secure, distributed tool usage.

## 7. User Feedback Summary
*   **Pain Point - Docker Onboarding**: Users find the initial Docker setup fragile, specifically regarding password creation ([Issue #129](https://github.com/moltis-org/moltis/issues/129)) and path mounting ([Issue #102](https://github.com/moltis-org/moltis/issues/102)).
*   **Pain Point - Model Switching**: Users want seamless switching between remote (OpenAI) and local (LM Studio/MLX) providers and are frustrated when specific providers like `z.ai` break.
*   **Satisfaction**: The community appears technically engaged (submitting detailed RFCs and bug reports with root cause analysis), suggesting a sophisticated user base invested in the project's success as a serious agent framework.

## 8. Backlog Watch
*   **[Issue #102](https://github.com/moltis-org/moltis/issues/102)**: While marked closed, the issue involves complex Docker-in-Docker behavior. It needs monitoring to ensure the fix covers all edge cases (host vs container path mapping).
*   **[Issue #391](https://github.com/moltis-org/moltis/issues/391)**: This RFC has no maintainer approval yet. It requires architectural feedback as it proposes significant changes to the node protocol.
*   **[Issue #261](https://github.com/moltis-org/moltis/issues/261)**: "GitHub Copilot provider errors" remains open/active. As a popular provider, this should be prioritized to maintain developer productivity.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest (2026-03-12)

## 1. Today's Overview
CoPaw is exhibiting **very high activity** following the recent `v0.0.6` release, with 50 Issues and 50 PRs updated in the last 24 hours. The project is in a stabilization phase, heavily focused on patching regressions in the new version (specifically regarding context management and tool parsing) while advancing UI features like internationalization and model selection. However, the lack of a new tagged release despite a PR to bump version `0.0.7` suggests the maintainers are still consolidating fixes for the current instability. The community is actively engaging, reporting specific bugs in channel integrations (Feishu/DingTalk) and the new `browser_use` skill.

## 2. Releases
No new releases were tagged today.
*   **Current State:** The project is effectively bridging the gap between `v0.0.6.post1` and `v0.0.7`.
*   **Note:** PR #1322 proposes bumping the version to `0.0.7`, indicating a release is imminent but not yet finalized.

## 3. Project Progress
Development velocity is high, with 25 PRs merged/closed today, focusing heavily on frontend refinement and backend stability:
*   **Frontend Enhancements:** Merged features include **Chat model selection** ([PR #1140](https://github.com/agentscope-ai/CoPaw/pull/1140)), **Workspace drag-and-drop** ([PR #1121](https://github.com/agentscope-ai/CoPaw/pull/1121)), and **internationalization support** for chat routing ([PR #1221](https://github.com/agentscope-ai/CoPaw/pull/1221)).
*   **Stability Fixes:** Fixed API call issues causing child component updates ([PR #1242](https://github.com/agentscope-ai/CoPaw/pull/1242)) and UI styling for model selection ([PR #1309](https://github.com/agentscope-ai/CoPaw/pull/1309)).
*   **Infrastructure:** Introduction of `docker-compose.yml` ([PR #1320](https://github.com/agentscope-ai/CoPaw/pull/1320)) to replace `docker run` commands, improving deployment maintainability.
*   **Backend:** A fix for multiple chat request details ([PR #1307](https://github.com/agentscope-ai/CoPaw/pull/1307)) was merged, likely addressing the duplicate message reports.

## 4. Community Hot Topics
The most active discussions center on integration failures and context management:
1.  **Chat Meet Browser Error ([Issue #1163](https://github.com/agentscope-ai/CoPaw/issues/1163)):** Users report `browser_use` failing with missing arguments in v0.0.6. This highlights demand for reliable web-browsing agents.
2.  **SiliconFlow Connection Failure ([Issue #1292](https://github.com/agentscope-ai/CoPaw/issues/1292)):** Users cannot add models from the SiliconFlow (硅基流动) provider. This indicates a regression in provider connection logic or API changes.
3.  **Feishu Context Compression Failure ([Issue #1243](https://github.com/agentscope-ai/CoPaw/issues/1243)):** A deep-dive bug report showing that `/compact` commands in Feishu generate summaries but fail to clear the message history, leading to ballooning context size and costs.

## 5. Bugs & Stability
Several high-severity bugs have been reported regarding the `v0.0.6.post1` version, suggesting the current release is unstable for production use:
*   **Critical: Tool Call Failures ([Issue #1313](https://github.com/agentscope-ai/CoPaw/issues/1313)):** Reports that *all* parameterized tool calls fail with `missing required positional argument`. This effectively breaks the agent's ability to use tools like `write_file` or `execute_shell_command`.
*   **Critical: Shell Command Freezes ([Issue #1136](https://github.com/agentscope-ai/CoPaw/issues/1136)):** Windows users report that `execute_shell_command` causes the entire agent to freeze, requiring a restart. (Fix likely in [PR #1250](https://github.com/agentscope-ai/CoPaw/pull/1250)).
*   **High: Feishu Duplicate Messages ([Issue #1100](https://github.com/agentscope-ai/CoPaw/issues/1100)):** The bot repeats previous answers in Feishu channels.
*   **Medium: Version Mismatch ([Issue #1315](https://github.com/agentscope-ai/CoPaw/issues/1315)):** Even after updating to `0.0.6.post1`, the WebUI displays `v0.0.5b1`, confusing users about whether the upgrade succeeded.
*   **Medium: MCP Connection Error ([Issue #1308](https://github.com/agentscope-ai/CoPaw/issues/1308)):** `RuntimeError: The MCP client is not connected` prevents usage of external tools.

## 6. Feature Requests & Roadmap Signals
User needs are shifting towards better workflow automation and platform support:
*   **Feishu OpenClaw Support ([Issue #1297](https://github.com/agentscope-ai/CoPaw/issues/1297)):** Request to integrate Feishu's official open-source plugin for calendar/drive access.
*   **User Whitelist for Channels ([Issue #411](https://github.com/agentscope-ai/CoPaw/issues/411)):** Demand for `allowed_users` configuration to restrict bot access.
*   **Manual Session Management ([Issue #1288](https://github.com/agentscope-ai/CoPaw/issues/1288)):** Users want the ability to manually reset context/start a new session via command in Feishu to save tokens.
*   **Auto-Update CLI ([PR #1278](https://github.com/agentscope-ai/CoPaw/pull/1278)):** A proposed `copaw update` command aims to solve current painful upgrade experiences.

## 7. User Feedback Summary
*   **Pain Points:** The upgrade process is confusing (WebUI cache/version mismatch), and context management (history compression) is currently broken for Feishu users, leading to unnecessary token consumption.
*   **Positive Signals:** Users are adopting advanced features (MCP, BrowserUse, custom providers) quickly.
*   **Environment:** A significant portion of issues comes from Windows users (shell freezing) and users deploying via domestic Chinese cloud providers (ModelScope/SiliconFlow).

## 8. Backlog Watch
*   **Open PRs Needing Review:**
    *   [PR #419](https://github.com/agentscope-ai/CoPaw/pull/419): "Wire_api + custom headers" has been open since March 3rd and needs final review to unblock advanced provider configurations.
    *   [PR #1250](https://github.com/agentscope-ai/CoPaw/pull/1250): "Shell execution optimization" is critical for fixing the Windows freeze bug ([Issue #1136](https://github.com/agentscope-ai/CoPaw/issues/1136)).
    *   [PR #1322](https://github.com/agentscope-ai/CoPaw/pull/1322): Version bump to `0.0.7` is pending; merging this is crucial to validate the large volume of fixes currently in `main` but not released.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-03-12

## 1. Today's Overview
ZeptoClaw demonstrates **extremely high maintenance velocity** with a focus on security hardening and dependency management. The project shipped **2 patch releases** (v0.7.5 and v0.7.6) resolving 13 issues and merging 13 PRs in a single day—indicating a mature, solo-maintained codebase (by @qhkm) with efficient CI/CD pipelines. The primary theme today is **security boundary hardening** across filesystem operations, inbound webhooks, and channel authentication, alongside quality-of-life CLI improvements.

---

## 2. Releases

### **v0.7.6** ([Release Notes](https://github.com/qhkm/zeptoclaw/releases/tag/v0.7.6))
**Focus:** Security fixes and CLI UX improvements

| Change | Type | Description |
|--------|------|-------------|
| `fix: deduplicate Claude subscription token warning` | Fix | Wraps warning in `std::sync::Once` to prevent duplicate logs during startup ([#320](https://github.com/qhkm/zeptoclaw/pull/320)) |
| `feat: slash command suggestions in CLI interactive mode` | Feature | Adds tab-autocomplete for 12 slash commands via rustyline integration ([#323](https://github.com/qhkm/zeptoclaw/pull/323)) |
| `fix: harden inbound auth and filesystem boundaries` | Security | Comprehensive hardening of webhook auth and filesystem write validation ([#324](https://github.com/qhkm/zeptoclaw/pull/324)) |

**Migration Notes:** No breaking changes; drop-in upgrade.

---

### **v0.7.5** ([Release Notes](https://github.com/qhkm/zeptoclaw/releases/tag/v0.7.5))
**Focus:** CLI tooling and provider compatibility

| Change | Type | Description |
|--------|------|-------------|
| `feat(cli): add config reset command` | Feature | New `zeptoclaw config reset` command ([#306](https://github.com/qhkm/zeptoclaw/pull/306)) |
| `feat: model-provider compatibility validation` | Feature | Validates model/provider combinations at startup ([#311](https://github.com/qhkm/zeptoclaw/pull/311)) |
| `feat(cli): add zeptoclaw uninstall command` | Feature | Self-uninstall capability for CLI |

---

## 3. Project Progress

### Merged Feature PRs
| PR | Area | Impact |
|----|------|--------|
| [#323](https://github.com/qhkm/zeptoclaw/pull/323) | CLI | **Slash command autocomplete** - Adds rustyline-based tab completion for `/model`, `/persona`, `/help`, `/tools`, `/memory`, `/history`, `/template`, `/clear`, `/quit` |
| [#316](https://github.com/qhkm/zeptoclaw/pull/316) | Channels | **Ollama cloud support with keyless auth** - Enables local Ollama/vLLM instances without API keys while preserving cloud auth when configured |

### Closed Security Hardening Issues
| Issue | Severity | Resolution |
|-------|----------|------------|
| [#318](https://github.com/qhkm/zeptoclaw/issues/318) | P1-Critical | Hardened inbound webhook authentication paths |
| [#319](https://github.com/qhkm/zeptoclaw/issues/319) | P1-Critical | Filesystem path hardening for workspace writes |
| [#321](https://github.com/qhkm/zeptoclaw/issues/321) | P1-Critical | Staged Telegram username allowlist deprecation (identity drift risk) |
| [#317](https://github.com/qhkm/zeptoclaw/issues/317) | Bug | WhatsApp Cloud webhook HMAC-SHA256 signature verification |
| [#329](https://github.com/qhkm/zeptoclaw/issues/329), [#330](https://github.com/qhkm/zeptoclaw/issues/330) | P2-High | Unix `dirfd`-relative filesystem operations (TOCTOU mitigation) |
| [#327](https://github.com/qhkm/zeptoclaw/issues/327), [#328](https://github.com/qhkm/zeptoclaw/issues/328) | P2-High | Channel setup credential clearing fixes |

### Dependency Updates (11 PRs merged)
- **Rust:** `jsonwebtoken` 9.3.1 → 10.3.0, `anyhow` 1.0.101 → 1.0.102, `chrono` 0.4.43 → 0.4.44, `rustls` 0.23.36 → 0.23.37, `chromiumoxide` 0.9.0 → 0.9.1
- **GitHub Actions:** `upload-artifact` v7, `download-artifact` v8, `codecov-action` bump
- **TypeScript:** `@types/node` 25.2.0 → 25.3.0

---

## 4. Community Hot Topics

| Issue/PR | Engagement | Analysis |
|----------|------------|----------|
| [#185](https://github.com/qhkm/zeptoclaw/issues/185) - `jsonwebtoken` 9→10 migration | 1 comment, tracked since Feb 26 | **Underlying need:** Breaking API changes in auth library require careful migration. Maintainer tracking manually rather than auto-merging via dependabot. Closed today after [#296](https://github.com/qhkm/zeptoclaw/pull/296) merged. |
| [#284](https://github.com/qhkm/zeptoclaw/issues/284) - Ollama cloud support | External contributor (@rexzhang360) | **Underlying need:** Users running Ollama in cloud environments couldn't authenticate. Resolved via [#316](https://github.com/qhkm/zeptoclaw/pull/316) with keyless auth for local instances. |
| [#221](https://github.com/qhkm/zeptoclaw/issues/221) - Merkle audit trail | Open since Mar 3, active discussion | **Underlying need:** Enterprise/compliance users want tamper-evident logging for agent actions. **Only open issue** in today's batch—indicates this is a planned future feature. |

---

## 5. Bugs & Stability

### Critical (P1) - All Resolved Today ✅
| Bug | Root Cause | Fix Status |
|-----|------------|------------|
| [#318](https://github.com/qhkm/zeptoclaw/issues/318) - Inbound webhook auth gaps | Insufficient authenticity verification | **Fixed** in [#324](https://github.com/qhkm/zeptoclaw/pull/324) |
| [#319](https://github.com/qhkm/zeptoclaw/issues/319) - Filesystem write vulnerabilities | Symlink/hardlink TOCTOU bypasses | **Fixed** in [#324](https://github.com/qhkm/zeptoclaw/pull/324) |
| [#321](https://github.com/qhkm/zeptoclaw/issues/321) - Telegram username identity drift | Username reuse by different users | **Mitigated** - Staged deprecation with warnings |

### High (P2) - All Resolved Today ✅
| Bug | Root Cause | Fix Status |
|-----|------------|------------|
| [#317](https://github.com/qhkm/zeptoclaw/issues/317) - WhatsApp Cloud signature bypass | Missing HMAC validation | **Fixed** - X-Hub-Signature-256 verification added |
| [#326](https://github.com/qhkm/zeptoclaw/issues/326) - WhatsApp Bridge advisory | GHSA-j966-r55r-f865 false positive | **Triaged** - Not affected (uses typed events, not raw HTTP) |
| [#325](https://github.com/qhkm/zeptoclaw/issues/325) - Email header trust | `From` header spoofing risk | **Documented** - Config/runtime warnings added |
| [#327](https://github.com/qhkm/zeptoclaw/issues/327), [#328](https://github.com/qhkm/zeptoclaw/issues/328), [#329](https://github.com/qhkm/zeptoclaw/issues/329), [#330](https://github.com/qhkm/zeptoclaw/issues/330) | Channel setup edge cases | **Fixed** - Credential clearing, dirfd-relative ops |

### Stability Assessment: **Excellent** — Zero open bugs; proactive security hardening completed.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Status | Prediction |
|---------|--------|------------|
| [#221](https://github.com/qhkm/zeptoclaw/issues/221) - Merkle hash-chain audit trail | **Open** (only open issue today) | **Likely v0.8.0 or v0.7.7** — Spec includes detailed design (SHA-256 chaining, `prev_hash` linking). Strong "trust signal" motivation for enterprise adoption. |
| Slash command expansion | Implemented | Future commands may include `/export`, `/debug` based on CLI patterns |
| Multi-channel auth hardening | Completed | Signals focus on production-ready security posture |

**Predicted Next Version Focus:** Audit logging (#221) + potential `jsonwebtoken` API migration cleanup from [#185](https://github.com/qhkm/zeptoclaw/issues/185).

---

## 7. User Feedback Summary

### Pain Points Addressed Today
| User Need | Resolution |
|-----------|------------|
| "Duplicate warning spam during startup" ([#320](https://github.com/qhkm/zeptoclaw/pull/320)) | Single-warning via `std::sync::Once` |
| "Ollama cloud settings don't work" ([#284](https://github.com/qhkm/zeptoclaw/issues/284)) | Keyless auth for local; normal auth for cloud |
| "No autocomplete in CLI" ([#322](https://github.com/qhkm/zeptoclaw/issues/322)) | 12-command rustyline autocomplete |

### User Sentiment: **Positive** — External contributor engagement on Ollama feature; no complaints in today's issues. Security-focused releases signal mature, production-ready project.

---

## 8. Backlog Watch

| Item | Status | Concern |
|------|--------|---------|
| [#221](https://github.com/qhkm/zeptoclaw/issues/221) - Merkle audit trail | Open since Mar 3 | **Needs attention** — Only open issue; 9 days old. Spec exists, awaiting implementation. Enterprise users may be blocked on compliance requirements. |
| [#185](https://github.com/qhkm/zeptoclaw/issues/185) - jsonwebtoken 10 migration | Closed today | **Resolved** — Required manual intervention; completed in [#296](https://github.com/qhkm/zeptoclaw/pull/296) |

---

**Project Health Assessment:** 🟢 **Excellent** — High merge velocity (13 PRs/day), zero open bugs, proactive security posture, responsive to external contributors, clean dependency hygiene. The project is in active hardening phase preparing for enterprise/stable release.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest (2026-03-12)

## 1. Today's Overview
The EasyClaw project is currently exhibiting high deployment activity but faces challenges with platform-specific distribution and third-party authentication integration. The release of versions **v1.6.6** and **v1.6.7** indicates an aggressive push to resolve immediate issues, though the similarity in release notes suggests persistent packaging hurdles on macOS. Community engagement is focused on critical functionality, specifically regarding OpenAI OAuth failures and UI refinement on macOS. While the project is actively iterating, the lack of merged Pull Requests today suggests a bottleneck in code review or a freeze pending quality assurance.

## 2. Releases
Two new versions were released recently, highlighting rapid iteration:
*   **[v1.6.7](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.7)** (Latest)
*   **[v1.6.6](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.6)**

**Key Changes & Notes:**
*   **Focus:** Both releases heavily emphasize **macOS installation troubleshooting**. The documentation addresses the "App is damaged" error caused by macOS Gatekeeper blocking unsigned apps.
*   **Action Required:** Users on macOS must run a specific Terminal command (partially visible in notes) to bypass the security block. This suggests the app is currently distributed without an Apple Developer Certificate signature.

## 3. Project Progress
Progress today is characterized by open development attempts rather than merged code:
*   **UI Refinement (Open):** PR **[#15](https://github.com/gaoyangz77/easyclaw/pull/15)** remains open. It proposes a fix for the application icon display in the macOS Dock and System Tray. This indicates ongoing efforts to improve native integration and visual consistency on Apple platforms.
*   **No Merged Code:** No PRs were merged in the last 24h, implying that the new releases (v1.6.6/7) likely contained fixes committed prior to this window or were configuration/documentation updates.

## 4. Community Hot Topics
*   **OpenAI Authentication Failure (Most Active):**
    *   **Item:** [Issue #16: OpenAI Oauth好像有问题](https://github.com/gaoyangz77/easyclaw/issues/16)
    *   **Analysis:** This is the most pressing user concern. Users report that both the *portable* and *installed* versions fail to authenticate with OpenAI. The error appears to be a hard block rather than a network glitch. This is critical for an AI assistant agent, as it effectively bricks the core functionality for users relying on OpenAI models.

## 5. Bugs & Stability
*   **🔴 High Severity: OpenAI OAuth Broken**
    *   **Details:** [Issue #16](https://github.com/gaoyangz77/easyclaw/issues/16) reports consistent authentication failures across all installation types (portable/install).
    *   **Status:** Open; no official fix PR identified yet.
*   **🟠 Medium Severity: macOS Unsigned App Warnings**
    *   **Details:** Addressed in release notes for v1.6.6/7. Users encounter "EasyClaw is damaged" errors.
    *   **Status:** Workaround provided (Terminal command), but a permanent fix (code signing) is pending.

## 6. Feature Requests & Roadmap Signals
*   **macOS UI Polish:** The open PR **[#15](https://github.com/gaoyangz77/easyclaw/pull/15)** (fixing Dock/Tray icons) signals that the roadmap is currently focused on **platform stability and native user experience** rather than new agent capabilities.
*   **Authentication Infrastructure:** The OAuth issue suggests the next immediate roadmap item must be a refactor or patch of the authentication module to support OpenAI's latest token standards.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Installation Friction:** macOS users are frustrated by having to bypass security settings via Terminal commands to run the app.
    *   **Reliability:** Users are experiencing "brick" scenarios where the primary AI provider (OpenAI) cannot be logged into.
*   **Sentiment:** Currently cautious; while users appreciate frequent releases, the persistence of the OAuth bug and code signing issues are significant barriers to seamless adoption.

## 8. Backlog Watch
*   **PR #15 (macOS Icon Fix):** Created on March 10th and updated today, but still unmerged. This visual fix is low-risk and should be prioritized to improve the desktop experience.
*   **Issue #16 (OAuth):** Created yesterday with high impact. This requires immediate maintainer triage to prevent user churn.

</details>