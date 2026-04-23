# OpenClaw Ecosystem Digest 2026-03-12

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-03-12 15:28 UTC

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

# OpenClaw Project Digest — 2026-03-12

## 1. Today's Overview

OpenClaw is experiencing **very high activity** with 500 issues and 500 PRs updated in the last 24 hours. The project released a critical security patch (v2026.3.11) addressing a cross-site WebSocket hijacking vulnerability. The community is highly engaged around internationalization requests and integration improvements (DingTalk, OpenCode Go). A major architectural shift is underway with multiple "XL" sized PRs introducing a comprehensive secrets management system. The ratio of open to closed items suggests rapid iteration but also accumulating technical debt that needs addressing.

## 2. Releases

### v2026.3.11 (Stable) & v2026.3.11-beta.1

**🔒 Critical Security Fix:**
- **GHSA-5wcw-8***: Cross-site WebSocket hijacking vulnerability in `trusted-proxy` mode
- Browser origin validation is now enforced for **all** browser-originated connections, regardless of proxy headers presence
- Previously, untrusted origins could gain `operator.admin` access through this attack vector

**Migration Note:** Users running OpenClaw behind reverse proxies with `trusted-proxy` mode enabled should upgrade immediately. No configuration changes required—the fix is enforced at the Gateway/WebSocket layer.

---

## 3. Project Progress

### Major Features Advanced:

**Secrets Management System (5 PRs by @akoscz):**
- [#43640](https://github.com/openclaw/openclaw/pull/43640) - Foundation: `EnvSecretProvider` with `${provider:key}` reference syntax
- [#43641](https://github.com/openclaw/openclaw/pull/43641) - Keyring + 1Password integration for local/desktop credential storage
- [#43643](https://github.com/openclaw/openclaw/pull/43643) - AWS Secrets Manager provider (lazy-loaded SDK)
- [#43644](https://github.com/openclaw/openclaw/pull/43644) - Azure Key Vault provider with DefaultAzureCredential
- [#43645](https://github.com/openclaw/openclaw/pull/43645) - HashiCorp Vault KV v2 provider (native fetch, no SDK)
- [#43646](https://github.com/openclaw/openclaw/pull/43646) - Secret rotation reminders and auto-rotation system

**Backup & Recovery:**
- [#44111](https://github.com/openclaw/openclaw/pull/44111) - Encrypted snapshot backup flow with `backup setup/run/status/list/restore` CLI commands

**Agent Capabilities:**
- [#44126](https://github.com/openclaw/openclaw/pull/44126) - Adaptive thinking level controls with `set_thinking_level` tool
- [#36537](https://github.com/openclaw/openclaw/pull/36537) - `sessions_yield` tool for cooperative turn-ending in subagent orchestration
- [#43498](https://github.com/openclaw/openclaw/pull/43498) - `memory_refresh` tool for atomic replace operations in LanceDB

**Channel Improvements:**
- [#40946](https://github.com/openclaw/openclaw/pull/40946) - Matrix channel rewritten with official `matrix-js-sdk` (replaces deprecated `@vector-im/matrix-bot-sdk`)
- [#43360](https://github.com/openclaw/openclaw/pull/43360) - Slack `session.threadIsolation` config for thread-aware session handling

### Key Fixes Merged/Closing:
- [#43529](https://github.com/openclaw/openclaw/pull/43529) - Reset sessions after all-model timeout failures
- [#44161](https://github.com/openclaw/openclaw/pull/44161) - macOS: fail fast when gateway startup fails (fixes #6156)
- [#44167](https://github.com/openclaw/openclaw/pull/44167) - Retry transient embedding fetch failures
- [#44168](https://github.com/openclaw/openclaw/pull/44168) - Guard OpenAI WebSocket first response timeouts
- [#43258](https://github.com/openclaw/openclaw/pull/43258) - Retry inbound debounce flush after lock contention (all channels)
- [#43512](https://github.com/openclaw/openclaw/pull/43512) - Feishu: bypass queue for control commands

---

## 4. Community Hot Topics

| Issue | Comments | Reactions | Topic Analysis |
|-------|----------|-----------|----------------|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | 97 | 2👍 | **i18n/Localization** — Community demand for multi-language support. Maintainers acknowledge bandwidth constraints but PRs keep coming. Strong indicator of international adoption. |
| [#26534](https://github.com/openclaw/openclaw/issues/26534) | 60 | 19👍 | **DingTalk Integration** — Users want DingTalk as first-install channel option. Already implemented (#10347) but missing from onboarding wizard. Low-hanging fruit. |
| [#32828](https://github.com/openclaw/openclaw/issues/32828) | 53 | 10👍 | **False Rate Limit Errors** — Users report OpenClaw shows rate limit warnings when APIs work fine externally. Points to overly aggressive client-side rate detection. **CLOSED** — likely fixed. |
| [#75](https://github.com/openclaw/openclaw/issues/75) | 39 | 60👍 | **Linux/Windows Desktop Apps** — High demand (most 👍). Only macOS/iOS/Android have native apps. Community volunteers wanted (`help wanted` label). |
| [#27009](https://github.com/openclaw/openclaw/issues/27009) | 22 | 25👍 | **OpenCode Go Subscription** — Request to support new $10 subscription for Kimi K2.5, GLM-5, Minimax M2.5. **CLOSED** — suggests implementation or rejection. |

**Underlying Needs:**
- Enterprise users need Chinese platform integrations (DingTalk, Feishu)
- Desktop parity across all major OS platforms
- More affordable model options via alternative subscriptions
- Production-ready multi-language support

---

## 5. Bugs & Stability

### 🔴 Critical (Data Loss/Security):

1. **[#43858](https://github.com/openclaw/openclaw/issues/43858)** — `Edit` tool silently wipes files to 0 bytes while reporting success
   - Severity: High (data loss)
   - Fix: No PR yet

2. **[#40631](https://github.com/openclaw/openclaw/issues/40631)** — Recurring execution stall: assistant confirms task but performs no actions
   - Severity: High (trust/reliability)
   - Frequency: ~1-2 times per month
   - Fix: No PR yet

### 🟠 Regressions (Recent Versions):

| Issue | Version | Description | Fix Status |
|-------|---------|-------------|------------|
| [#42883](https://github.com/openclaw/openclaw/issues/42883) | 2026.3.8 | Cron jobs broken after update | No PR |
| [#40868](https://github.com/openclaw/openclaw/issues/40868) | 2026.3.8 | Cron isolated sessions timing out | No PR |
| [#40396](https://github.com/openclaw/openclaw/issues/40396) | 2026.3.7 | Infinite loop on tool calls (WhatsApp) | No PR |
| [#40941](https://github.com/openclaw/openclaw/issues/40941) | 2026.3.7 | Context length/tokens not showing | No PR |
| [#34830](https://github.com/openclaw/openclaw/issues/34830) | 2026.3.2 | OpenRouter 401 authentication errors | No PR |

### 🟡 Gateway/Infrastructure Issues:

- **[#41315](https://github.com/openclaw/openclaw/issues/41315)** + **[#40905](https://github.com/openclaw/openclaw/issues/40905)** (CLOSED) — macOS LaunchAgent restart instability, `service not loaded` state
- **[#6156](https://github.com/openclaw/openclaw/issues/6156)** — macOS Gateway never becomes ready → **Fix PR:** [#44161](https://github.com/openclaw/openclaw/pull/44161)
- **[#36822](https://github.com/openclaw/openclaw/issues/36822)** (CLOSED) — Config-change restart fails, memory indexes stuck at zero

### 🟡 Provider Integration Issues:

- **[#41293](https://github.com/openclaw/openclaw/issues/41293)** — Mistral 422 errors (provider-specific)
- **[#8366](https://github.com/openclaw/openclaw/issues/8366)** — GitHub Copilot GPT-5+ returns 421 (Responses API routing)
- **[#8367](https://github.com/openclaw/openclaw/issues/8367)** — GitHub Copilot Claude models fail with `model_not_supported`
- **[#36647](https://github.com/openclaw/openclaw/pull/36647)** — Kimi-coding ignores user `baseUrl` (Fix PR exists)

### 🟡 Channel-Specific:

- **[#28744](https://github.com/openclaw/openclaw/issues/28744)** — Feishu/Lark: Images not passed to vision-capable models
- **[#22608](https://github.com/openclaw/openclaw/issues/22608)** — Feishu: Bot-sent images show as attachments, not previews
- **[#41885](https://github.com/openclaw/openclaw/issues/41885)** — OpenAI Codex OAuth hangs in VPS/SSH flow

---

## 6. Feature Requests & Roadmap Signals

**Likely Near-Term (Active PRs Exist):**
- ✅ **Secrets Management System** — 6 PRs in flight, comprehensive provider coverage
- ✅ **Encrypted Backups** — [#44111](https://github.com/openclaw/openclaw/pull/44111) ready for review
- ✅ **Matrix Channel Rewrite** — [#40946](https://github.com/openclaw/openclaw/pull/44146) addresses SDK debt

**Strong Community Signals (High Engagement):**
- 📊 **Internationalization (#3460)** — 97 comments, maintainer acknowledged but deferred
- 📊 **Linux/Windows Desktop Apps (#75)** — 60👍, labeled `help wanted`
- 📊 **DingTalk Onboarding (#26534)** — 60 comments, 19👍, straightforward implementation

**Predicted for Next Release:**
1. Secrets management with HashiCorp Vault, AWS, Azure, 1Password support
2. macOS gateway stability fixes
3. Cron job regression fixes (if identified)
4. OpenCode Go subscription support (based on closed issue)

---

## 7. User Feedback Summary

**Pain Points:**
- **Update Stability:** Multiple users report 2026.3.7-2026.3.8 introduced regressions (cron, context display, infinite loops)
- **Gateway Reliability on macOS:** LaunchAgent management is fragile; restarts often leave gateway in broken state
- **Provider Integration Gaps:** GitHub Copilot, Mistral, and some OpenRouter configurations failing
- **Vision Capabilities:** Feishu users frustrated that images aren't processed by vision models
- **File Operations:** Edit tool data loss is a critical trust issue

**Positive Signals:**
- High community engagement (500+ issues/PRs active)
- Multiple community-contributed PRs for features
- Third-party ecosystem emerging (e.g., "虾缘" AI dating platform built on OpenClaw)

**Use Cases Emerging:**
- Multi-channel customer support (Telegram, Discord, Slack, Feishu, DingTalk)
- Automated cron-based tasks
- Subagent orchestration for complex workflows
- Self-hosted AI assistant with enterprise secret management

---

## 8. Backlog Watch

| Item | Age | Status | Concern |
|------|-----|--------|---------|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) i18n Support | 43 days | OPEN | 97 comments, no maintainer assignment. Blocking international adoption. |
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Apps | 70 days | OPEN | `help wanted` label, 60👍. Platform parity gap. |
| [#7200](https://github.com/openclaw/openclaw/issues/7200) Real-time Voice | 38 days | OPEN | 9 comments, 10👍. Strategic feature for competitive positioning. |
| [#10386](https://github.com/openclaw/openclaw/issues/10386) Workspace Skills Discovery | 34 days | OPEN | Skills not loading from `extraDirs`. Blocks customization. |
| [#13938](https://github.com/openclaw/openclaw/issues/13938) Infinite Context Accumulation | 29 days | OPEN | No context limit management, causes API errors. Production blocker. |
| [#14143](https://github.com/openclaw/openclaw/issues/14143) Memory Compaction Never Triggers | 29 days | OPEN | Feature exists but `compactionCount: 0`. Silent failure. |
| [#25145](https://github.com/openclaw/openclaw/issues/25145) Outbound Message Approval Gate | 16 days | OPEN | Security feature request for enterprise use cases. |

**Maintainer Attention Needed:**
- The secrets management PR stack (#43640-#43646) requires review coordination
- v2026.3.8 cron regression investigation is urgent
- Edit tool data loss (#43858) needs immediate triage

---

## Cross-Ecosystem Comparison

# AI Agent & Personal Assistant Open-Source Ecosystem Report
**Date:** 2026-03-12

## 1. Ecosystem Overview
The open-source personal AI assistant landscape is currently characterized by **extreme velocity and architectural maturation**. Projects are rapidly shifting from basic chat interfaces to complex, multi-channel agentic systems capable of autonomous task execution, memory retention, and tool orchestration. A clear "platform war" is emerging around **enterprise integrations** (DingTalk, Feishu, WeCom, Microsoft 365) as projects race to capture the corporate productivity market. Simultaneously, there is a strong ecosystem-wide trend toward **security hardening** and **token optimization**, reflecting a transition from experimental prototypes to production-grade deployments concerned with safety and API costs.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | **v2026.3.11** (Security Patch) | ⭐⭐⭐⭐⭐ | **Sector Leader**; Massive velocity, critical security focus. |
| **PicoClaw** | 30 | 121 | **v0.2.2-nightly** | ⭐⭐⭐⭐ | **High Innovation**; Heavy architectural refactoring (Agent "Souls"). |
| **CoPaw** | 50 | 50 | **v0.0.7** (Tool Guard) | ⭐⭐⭐⭐ | **Rapid Expansion**; Adding multi-agent architecture & safety layers. |
| **IronClaw** | 50 | 50 | **v0.18.0** | ⭐⭐⭐⭐ | **Enterprise Focus**; High automation (CI bot), modularizing safety. |
| **ZeroClaw** | 50 | 50 | **v0.1.7-beta.30** | ⭐⭐⭐ | **High Risk/High Reward**; Major branching refactor, critical S0 bugs open. |
| **NanoBot** | 49 | 80 | No Release (0.1.4.post2) | ⭐⭐⭐ | **Community Driven**; Strong provider expansion, but versioning lag. |
| **NanoClaw** | 23 | 30 | No Release | ⭐⭐⭐ | **Niche/Technical**; Focus on token optimization & container security. |
| **Moltis** | 36 (26 closed) | 7 | No Release | ⭐⭐⭐ | **Stabilizing**; High closure rate, focus on deployment fixes. |
| **LobsterAI** | Low | 9 | **v0.2.3** | ⭐⭐ | **Lagging**; Update mechanism failures, trailing core features. |
| **TinyClaw** | 5 | 6 | **v0.0.11** | ⭐⭐ | **Early Stage**; Rebranding to "TinyAGI", fixing basic install flows. |
| **ZeptoClaw** | 11 | 4 | **v0.7.6** | ⭐⭐⭐ | **Security Focus**; Hardening filesystem/auth, CLI improvements. |
| **EasyClaw** | Low | 1 | **v1.6.7** | ⭐⭐ | **Deployment Fixes**; Focused on macOS signing issues. |

## 3. OpenClaw's Position

**Advantages vs. Peers:**
*   **Ecosystem Gravity:** With 500 issues and PRs updated, OpenClaw operates at a scale roughly **10x larger** than most competitors. It is the clear reference implementation for the sector.
*   **Enterprise Readiness:** It leads in **Secrets Management** (HashiCorp, Azure, AWS integrations) and **Security** (WebSocket hijacking fixes), making it the most viable option for corporate deployment compared to the consumer-focused NanoBot or experimental PicoClaw.

**Technical Approach:**
*   Unlike **CoPaw** or **IronClaw**, which are adding "guardrails" (Tool Guard, Safety Modules) as separate layers, OpenClaw is integrating security deeply into the Gateway/WebSocket layer.
*   OpenClaw is pursuing a **unified channel architecture**, whereas **ZeroClaw** and **Moltis** are struggling with channel-specific stability issues (Discord silence, Docker networking).

**Community Comparison:**
*   OpenClaw's community is large enough to generate "crowd-sourced" QA at scale, but shows signs of **technical debt accumulation** (regressions in Cron jobs, macOS Gateway). Competitors like **Moltis** and **ZeptoClaw** are faster at closing specific bug reports but lack OpenClaw's breadth of features.

## 4. Shared Technical Focus Areas

### A. Enterprise Communication Channels (Critical)
*   **Need:** Native support for Chinese enterprise tools (DingTalk, Feishu/Lark, WeCom).
*   **Projects:** **OpenClaw** (DingTalk requests high), **ZeroClaw** (WeCom/Feishu PRs), **PicoClaw** (DingTalk/WeCom active PRs), **IronClaw** (Feishu merged).
*   **Insight:** This is the primary battleground for adoption. Projects without these integrations will likely remain hobbyist tools.

### B. Security Isolation & Credential Management
*   **Need:** Preventing agents from leaking their own API keys (Self-access) and enforcing strict filesystem boundaries.
*   **Projects:**
    *   **OpenClaw:** Secrets Management System (Vault, 1Password).
    *   **NanoBot/NanoClaw:** Heated discussions on preventing `exec()` from reading `config.json`.
    *   **ZeptoClaw:** Hardened filesystem against TOCTOU attacks.

### C. Token Optimization & Context Management
*   **Need:** Reducing API costs via intelligent context compaction and summarization.
*   **Projects:**
    *   **NanoClaw:** "Smart token optimization suite" (Flagship feature).
    *   **OpenClaw:** Adaptive thinking levels, memory refresh tools.
    *   **CoPaw:** Fixing message count mismatches during compression.

## 5. Differentiation Analysis

| Project Type | Projects | Key Differentiator |
| :--- | :--- | :--- |
| **Enterprise Platforms** | OpenClaw, IronClaw | Focus on compliance, secrets management, and role-based access. |
| **Agentic Frameworks** | PicoClaw, CoPaw | Focus on *architecture*: "Agent Souls", multi-agent orchestration, and recursive loops. |
| **Lightweight/Local** | ZeptoClaw, EasyClaw, TinyClaw | Focus on local CLI UX, minimal resource usage, and simple deployment. |
| **Modular/Experimental** | NanoBot, ZeroClaw | High pace of provider integration (VolcEngine, Zhipu AI) and community plugins, but lower stability. |

*   **OpenClaw** differentiates by acting as a comprehensive **Hub**, whereas **PicoClaw** is experimenting with a **Modular Agent Identity** (`SOUL.md`), and **NanoClaw** is optimizing specifically for **Containerized Deployments**.

## 6. Community Momentum & Maturity

*   **Tier 1 (Mature / Rapid Iteration): OpenClaw.**
    *   Sustaining massive throughput. The main risk is regression management (Cron bugs, Edit tool data loss) rather than lack of development.
*   **Tier 2 (Aggressive Chasers): PicoClaw, IronClaw, CoPaw.**
    *   **PicoClaw:** High innovation speed; redefining agent architecture ("What is an Agent?").
    *   **IronClaw:** Maturing via automation (CI bots flagging security flaws), indicating a professionalization of the dev process.
    *   **CoPaw:** "Breaking things to build things" phase (v0.0.6 -> v0.0.7 upgrade failures).
*   **Tier 3 (Stabilizing / Niche): Moltis, NanoClaw, ZeptoClaw.**
    *   Focused on specific fixes (Docker paths, token counting) rather than explosive feature growth.
*   **Tier 4 (Lagging): LobsterAI, TinyClaw.**
    *   Struggling with basic deployment issues (Apple Silicon updates, missing setup files) which erodes user trust.

## 7. Trend Signals

1.  **The "Self-Access" Security Crisis:**
    *   Multiple projects (NanoBot, NanoClaw, CoPaw) report issues where agents can `cat` their own config files to leak credentials.
    *   *Signal:* The industry must move toward **Credential Proxies** (passing tokens via environment variables or sidecars) rather than storing keys in accessible config files. **NanoClaw** is currently leading the solution here.

2.  **"Desktop Parity" Demand:**
    *   **OpenClaw** users are clamoring for Linux/Windows desktop apps (Issue #75).
    *   **LobsterAI** and **EasyClaw** users are frustrated by macOS-specific bugs.
    *   *Signal:* The era of "Web UI only" is ending; users want native OS integration for assistants.

3.  **Memory is becoming "Active":**
    *   Static "Memory Banks" are insufficient. Projects are moving toward **Layered Memory** (L0/L1/L2) and **Compaction/Rotation** systems (OpenClaw, PicoClaw, Moltis).
    *   *Signal:* Agents need to forget irrelevant data to stay efficient (cost/speed), driving the need for sophisticated "forgetting" algorithms.

4.  **Upgrade Friction:**
    *   A recurring theme across **CoPaw**, **LobsterAI**, and **NanoBot** is broken update paths (pip vs frontend versions, auto-updater failures).
    *   *Signal:* Projects need to invest more in **release engineering**; the current "move fast" approach is stranding users on older versions.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-03-12

## 1. Today's Overview
NanoBot demonstrates **high velocity** development activity today, characterized by a massive volume of 80 pull requests (nearly 60% merged/closed) and 49 updated issues. The project is clearly in an aggressive feature expansion and stabilization phase, heavily driven by community contributions. The focus is shifting from core functionality to **ecosystem integration** (new providers, platforms like DingTalk/Matrix) and **quality of life improvements** (WebUI, skill management). The high merge rate suggests maintainers are actively engaging with the community to integrate new capabilities.

## 2. Releases
**No new official releases** were published today (Latest remains `0.1.4.post2`).
*   **Note:** Several Issues (#1059, #842) indicate users are struggling with version discrepancies between PyPI, GitHub, and Docker, often encountering breaking changes between `0.1.3` and `0.1.4`.

## 3. Project Progress
A significant number of PRs were closed, indicating rapid integration of community code:
*   **New Provider Support:** Merged/Closed PRs include support for **VolcEngine/BytePlus** (#1608) and **MiniMax** (#214), expanding the LLM backend options.
*   **Skill Management:** PR #1933 (and related #1934) introduced the ability to **disable skills** via an `enabled: false` flag, addressing a key usability limitation where users previously had to delete files to turn off skills.
*   **Long-term Memory:** Closed PR #137 indicates work on a **Mem0-inspired adaptive long-term memory system**, suggesting a major architectural upgrade for persistent context is being integrated.
*   **Security & Stability:** PR #1926 addressed memory consolidation logic, and PR #1844 improved cron job scheduling.

## 4. Community Hot Topics
*   **Self-Hosted Web UI (Issue #1922):** The community is excited about `[nanobot-webui]`, a third-party management panel. This highlights a strong demand for a GUI to manage configuration, channels, and skills, as the current CLI/TOML workflow has a steep learning curve.
    *   Link: [HKUDS/nanobot Issue #1922](https://github.com/HKUDS/nanobot/issues/1922)
*   **Security Architecture (Issue #1873):** A critical discussion is ongoing regarding the agent's ability to access its own `config.json` (containing API keys) via the `exec()` tool. Users are requesting a container-level security refactor to prevent the agent from leaking its own credentials.
    *   Link: [HKUDS/nanobot Issue #1873](https://github.com/HKUDS/nanobot/issues/1873)
*   **Web Search Modularity (Issue #1719):** With 10+ upvotes, users are pushing for a standardized interface for web search backends (decoupling from Brave) to allow easy integration of Tavily, SearXNG, and DuckDuckGo without forking the core code.
    *   Link: [HKUDS/nanobot Issue #1719](https://github.com/HKUDS/nanobot/issues/1719)

## 5. Bugs & Stability
*   **Configuration Migration & Auth Errors (High Severity):** Multiple reports (#842, #680, #1157) cite failures with OpenRouter and general API setups after upgrading to `0.1.4`. Users are encountering `401 User not found` and `litellm.BadRequestError`.
    *   Link: [HKUDS/nanobot Issue #842](https://github.com/HKUDS/nanobot/issues/842)
*   **CLI Encoding Bug (Issue #1904):** Subagent outputs are displaying garbled text (Mojibake) in the command line interface.
    *   *Fix Available:* PR #1930 addresses this by fixing interactive CLI formatting for async output.
    *   Link: [HKUDS/nanobot Issue #1904](https://github.com/HKUDS/nanobot/issues/1904)
*   **Channel Specific Bugs:**
    *   **DingTalk:** Unable to upload files (#1864) - *Fix in PR #1925*.
    *   **QQ:** Markdown formatting breaks legacy clients (#1936).
    *   **Matrix:** Channel fails to start (#1300).

## 6. Feature Requests & Roadmap Signals
*   **Modular Backend Architecture:** The demand for swappable web search (#1719) and custom API support (#83) signals a roadmap towards **plugin-based architecture** for tools and providers.
*   **Voice Capabilities:** Issue #1106 requests voice-in/voice-out support, moving NanoBot towards a multi-modal personal assistant role.
*   **Browser Automation:** Request #1017 (merged/closed status in data implies work done or rejected, but request exists) suggests users want NanoBot to control web browsers, similar to Selenium/Playwright agents.
*   **Predicted for Next Release:** The "disable skills" feature (PR #1934) and DingTalk file support (PR #1925) are likely candidates for the next patch release given they are fully implemented PRs.

## 7. User Feedback Summary
*   **Pain Points:** Users find the **configuration documentation** lagging behind the codebase (#680, #1617). The lack of Chinese documentation is a specific point of friction for a large user segment.
*   **Deployment:** Docker users are experiencing "configuration drift" where commands/skills added in containers do not persist or activate correctly after restarts (#1829).
*   **Satisfaction:** The community is highly engaged in *extending* the platform. The creation of a dedicated WebUI and WeChat groups (#1907) shows a healthy, self-sustaining user base forming around the project.

## 8. Backlog Watch
*   **PyPI Release Gap (Issue #1059):** This remains unresolved. The latest code is not reflected on PyPI, forcing users to install via Git, which complicates dependency management.
    *   Link: [HKUDS/nanobot Issue #1059](https://github.com/HKUDS/nanobot/issues/1059)
*   **Security Isolation (Issue #1873):** This architectural flaw (agent reading its own keys) is a ticking time bomb for security-conscious users and requires maintainer input on the roadmap.
*   **Model Support Drift (Issue #1822):** Reports that support for Nvidia models has recently broken suggests undetected regressions in the provider layer that need automated testing.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-03-12

## 1. Today's Overview
ZeroClaw is currently exhibiting **very high velocity** with 50 issues and 50 pull requests updated in the last 24 hours. The project is in a major transition phase, recently consolidating 574 branches down to a single `master` branch and shipping two beta releases (`v0.1.7-beta.28` and `v0.1.7-beta.30`) within 24 hours to fix CI/CD pipelines. The community is highly engaged, focusing heavily on expanding channel integrations (WeCom, Feishu, Matrix) and resolving infrastructure friction (GLIBC compatibility, Docker initialization). The sheer volume of open PRs (38) suggests a rapid expansion of capabilities but also indicates potential integration risks that require careful maintainer review.

## 2. Releases
Two new beta versions were released today, primarily focusing on internal infrastructure and distribution:

*   **[v0.1.7-beta.30](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.7-beta.30)**
*   **[v0.1.7-beta.28](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.7-beta.28)**

**Key Changes:**
*   **CI/CD Overhaul:** Replaced all workflows with a simplified pipeline ([PR #2895](https://github.com/zeroclaw-labs/zeroclaw/pull/2895)).
*   **Branch Consolidation:** Migrated to a single `master` branch model ([PR #2928](https://github.com/zeroclaw-labs/zeroclaw/pull/2928)).
*   **Migration Note:** Users and contributors must ensure local clones are tracking the new `master` branch, as the dual-branch system (main/master) has been retired.

## 3. Project Progress
Significant features are moving through the pipeline, with a heavy focus on enterprise integrations and agent extensibility.

*   **WeCom Integration (Enterprise):** A major PR ([#3305](https://github.com/zeroclaw-labs/zeroclaw/pull/3305)) was opened to support WeCom AI bot long-connection delivery, signaling a push into enterprise chat automation markets.
*   **Multi-Provider Support:** PR [#2993](https://github.com/zeroclaw-labs/zeroclaw/pull/2993) adds support for `claude-code`, `gemini-cli`, and `kilocli` subprocess providers, alongside existing Cursor support.
*   **Agent Tooling:** PR [#3323](https://github.com/zeroclaw-labs/zeroclaw/pull/3323) introduces `tool_filter_groups` for MCP tools to reduce token overhead by loading only relevant tools per turn.
*   **Memory Enhancements:** PR [#2948](https://github.com/zeroclaw-labs/zeroclaw/pull/2948) proposes integrating Cortex-Memory for advanced L0/L1/L2 layered memory architecture.
*   **Microsoft 365:** PR [#3042](https://github.com/zeroclaw-labs/zeroclaw/pull/3042) adds extensive Graph API support for Teams, Outlook, and OneDrive.

## 4. Community Hot Topics
The community is actively discussing operational stability and configuration ergonomics.

*   **Branch Consolidation Confusion:** Issue [#3247](https://github.com/zeroclaw-labs/zeroclaw/issues/3247) (1 comment) and the related community update [#2922](https://github.com/zeroclaw-labs/zeroclaw/issues/2922) (12 reactions, 3 comments) discuss the cleanup of 574 branches. Users are generally supportive but adjusting to the new `master`-only workflow.
*   **GLIBC Compatibility Crisis:** Issue [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) (9 comments, 2 reactions) highlights a critical blocker where the compiled binary requires `GLIBC_2.39`, preventing execution on many standard Linux distributions.
*   **Feishu/Lark Naming:** Issue [#3012](https://github.com/zeroclaw-labs/zeroclaw/issues/3012) (9 comments) sparked a debate about the naming convention of the `channel-lark` feature (vs. `channel-feishu`) and its default availability.
*   **Agent MCP Support:** Issue [#3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153) (4 comments) discusses the need for the `zeroclaw agent` subcommand to respect MCP configs, currently a limitation in the CLI.

## 5. Bugs & Stability
Several high-severity bugs have been identified, with fixes already proposed for some.

| Severity | Issue | Description | Fix Status |
| :--- | :--- | :--- | :--- |
| **S0 (Critical)** | [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) | **GLIBC_2.39 not found**. Binary incompatible with older Linux distros. | Open |
| **S0 (Critical)** | [#2896](https://github.com/zeroclaw-labs/zeroclaw/issues/2896) | **Discord Gateway Silence**. Websocket stops receiving events after first msg. | **Fix PR** [#3332](https://github.com/zeroclaw-labs/zeroclaw/pull/3332) |
| **S0 (Critical)** | [#2910](https://github.com/zeroclaw-labs/zeroclaw/issues/2910) | **WebUI Agent Disconnect**. Connection errors on v0.1.8. | Open |
| **S1 (Blocker)** | [#2884](https://github.com/zeroclaw-labs/zeroclaw/issues/2884) | **WebSocket Auth Failure**. Frontend sends `?token=` but backend only checks headers. | **Fix PR** [#3330](https://github.com/zeroclaw-labs/zeroclaw/pull/3330) |
| **S1 (Blocker)** | [#2930](https://github.com/zeroclaw-labs/zeroclaw/issues/2930) | **Docker Init Fail**. `Unbound variable` error in `bootstrap.sh` on macOS. | Open |
| **S2 (Degraded)** | [#3024](https://github.com/zeroclaw-labs/zeroclaw/issues/3024) | **Chinese Char Panic**. String slicing crash in `loop_.rs` (byte index error). | Closed (Likely in beta.30) |

## 6. Feature Requests & Roadmap Signals
Requests are trending toward deeper enterprise integration and local/privacy-focused usage.

*   **Azure OpenAI Support:** Explicitly requested in [#3176](https://github.com/zeroclaw-labs/zeroclaw/issues/3176) to leverage corporate Azure subscriptions.
*   **Matrix Improvements:** Request for password-based login and recovery keys ([#2916](https://github.com/zeroclaw-labs/zeroclaw/issues/2916)) to simplify onboarding; PR [#3325](https://github.com/zeroclaw-labs/zeroclaw/pull/3325) is already open.
*   **Local LLM Pacing:** Request for configurable pacing controls ([#2963](https://github.com/zeroclaw-labs/zeroclaw/issues/2963)) for slow local inference engines (Ollama/llama.cpp).
*   **Channel Proxies:** Request for HTTP/SOCKS5 proxy support for channels ([#3262](https://github.com/zeroclaw-labs/zeroclaw/issues/3262)) to bypass network restrictions.

**Prediction for Next Version:** Focus will likely remain on stability fixes for the WebUI and Discord/Feishu channels, alongside the formal inclusion of WeCom support.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by binary portability (GLIBC issues) and WebUI connection stability. The friction between the frontend (Electric Blue dashboard) and backend authentication logic is a recurring theme.
*   **Use Cases:** Heavy interest in using ZeroClaw as an automation hub for corporate tools (Teams, Outlook, WeCom, Feishu). There is also a strong segment using local LLMs, requiring better timeout and pacing configurations.
*   **Sentiment:** Generally positive regarding the pace of development ("Moving Forward Together"), but technical trust is slightly eroded by S0 bugs in core connectivity (Discord/WebUI).

## 8. Backlog Watch
*   **Security Headers ([Issue #8](https://github.com/zeroclaw-labs/zeroclaw/issues/8)):** A MEDIUM severity security issue regarding missing CORS/CSRF headers in the Gateway has been open since Feb 14 and updated today. This needs prioritization before a stable release.
*   **Code Quality Gates ([Issue #2442](https://github.com/zeroclaw-labs/zeroclaw/issues/2442)):** Formatting violations are blocking the quality gate; PR [#3333](https://github.com/zeroclaw-labs/zeroclaw/pull/3333) is attempting to resolve this.
*   **Sub-Agent Context ([Issue #3046](https://github.com/zeroclaw-labs/zeroclaw/issues/3046)):** A feature request to enrich sub-agent prompts with tool/skill context remains unaddressed, which limits the effectiveness of multi-agent setups.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-03-12

## 1. Today's Overview
PicoClaw demonstrates **very high velocity** with 121 pull requests updated and 30 issues processed in the last 24 hours. The project is in an active refactoring phase ("Agent refactor"), fundamentally redefining its agentic architecture with proposals for event-driven loops and persistent "soul" definitions. Significant efforts were directed toward hardening security (DoS vulnerabilities in Matrix/LINE) and expanding provider compatibility (Azure, LongCat). Two new nightly releases were pushed, confirming a rapid integration cycle.

## 2. Releases
### **v0.2.2-nightly.20260312.6612ca09**
*   **New Features:**
    *   **LongCat Provider:** Added support for the LongCat model provider ([#1317](https://github.com/sipeed/picoclaw/pull/1317)).
    *   **Matrix Rich Text:** Enabled rich-text messages in the Matrix channel ([#1370](https://github.com/sipeed/picoclaw/pull/1370)).
*   **Bug Fixes:**
    *   Fixed MCP initialization in direct agent mode (Commit `9b0a48a`).
*   **Note:** This is a nightly build and may be unstable.

### **nightly (v0.2.2-nightly.20260312.6460a0a7)**
*   Automated build corresponding to the `main` branch state.

## 3. Project Progress
**Merged/Closed PRs (47 items):**
*   **Security Fixes (Critical):** Addressed memory exhaustion vulnerabilities in the **Matrix** channel by switching to streaming downloads for media ([#1427](https://github.com/sipeed/picoclaw/pull/1427)) and fixed MIME type handling for SVGs ([#1429](https://github.com/sipeed/picoclaw/pull/1429)).
*   **Provider Support:** Merged support for **Anthropic Messages API** format, fixing compatibility with native Anthropic endpoints ([#1158](https://github.com/sipeed/picoclaw/pull/1158)).
*   **Channel Capabilities:** Added outbound media delivery (send_file tool) for **Feishu** ([#1156](https://github.com/sipeed/picoclaw/pull/1156)).

**Open/Active PRs (74 items):**
*   **Architecture:** Ongoing work on "Agent Teams" to enable multi-agent orchestration ([#976](https://github.com/sipeed/picoclaw/pull/976)).
*   **Connectivity:** Implementation of long-connection mode for **WeCom** (WeChat Work) AI Bots ([#1295](https://github.com/sipeed/picoclaw/pull/1295)) and a refactored **DingTalk** client ([#1251](https://github.com/sipeed/picoclaw/pull/1251)).
*   **New Providers:** Open PR to add **Azure OpenAI** support ([#1422](https://github.com/sipeed/picoclaw/pull/1422)).

## 4. Community Hot Topics
1.  **[Agent Refactor] What an Agent is** ([#1218](https://github.com/sipeed/picoclaw/issues/1218))
    *   **Activity:** 16 comments.
    *   **Analysis:** The core architectural debate is defining the "Identity" of an agent. The community/maintainers are proposing `SOUL.md` (personality/character) and `AGENT.md` (configuration), moving away from purely config-based definitions to a more anthropomorphic or modular design.
2.  **Local Ollama Configuration Failures** ([#1161](https://github.com/sipeed/picoclaw/issues/1161))
    *   **Activity:** 15 comments.
    *   **Analysis:** Users struggle to get PicoClaw to emit final responses when connected to local Ollama instances. This highlights a pain point in provider abstraction—local models often behave differently (streaming, stop tokens) than cloud APIs, and current configuration defaults may not accommodate them well.
3.  **Event-Driven Agent Loop** ([#1316](https://github.com/sipeed/picoclaw/issues/1316))
    *   **Activity:** 7 comments, 1 reaction.
    *   **Analysis:** A proposal to move from a "black box" loop to an observable, interruptible, event-driven architecture. This signals a maturity shift from "making it work" to "making it debuggable and controllable" for complex workflows.

## 5. Bugs & Stability
*   **[Critical] Memory Exhaustion DoS (Matrix & LINE):**
    *   **Matrix:** Downloading media loaded entire files into memory without limits ([#1405](https://github.com/sipeed/picoclaw/issues/1405)). **Fix:** PR [#1431](https://github.com/sipeed/picoclaw/pull/1431) implements streaming and size limits.
    *   **LINE:** Webhook handler read unlimited body sizes ([#1407](https://github.com/sipeed/picoclaw/issues/1407)). **Fix:** PR [#1428](https://github.com/sipeed/picoclaw/pull/1428) adds a 1MB body limit.
*   **[High] Groq API Incompatibility:** Tool calls fail because the model generates non-standard formats rejected by the API ([#748](https://github.com/sipeed/picoclaw/issues/748)). (Open)
*   **[High] OpenRouter Transport Errors:** The fallback chain aborts on "connection reset by peer" instead of retrying ([#1419](https://github.com/sipeed/picoclaw/issues/1419)). **Fix:** PR [#1430](https://github.com/sipeed/picoclaw/pull/1430) classifies these as retriable errors.
*   **[Medium] MCP Initialization:** "picoclaw agent" ignored MCP tools in direct mode ([#1299](https://github.com/sipeed/picoclaw/issues/1299)). **Status:** Fixed in latest nightly.
*   **[Medium] Telegram "Typing..." Stuck:** Users report endless "typing" indicators even after replies are sent ([#1212](https://github.com/sipeed/picoclaw/issues/1212), [#1323](https://github.com/sipeed/picoclaw/issues/1323)). **Status:** Closed (likely fixed in recent commits).

## 6. Feature Requests & Roadmap Signals
*   **Azure OpenAI Support:** Highly requested ([#1424](https://github.com/sipeed/picoclaw/issues/1424)) with an active PR ([#1422](https://github.com/sipeed/picoclaw/pull/1422)). **Prediction:** High probability of merging in the next release.
*   **Telegram Native Reactions:** Request for low-noise emoji feedback instead of text replies ([#1328](https://github.com/sipeed/picoclaw/issues/1328)). Aligns with the "human-like interaction" roadmap.
*   **Engram Persistent Memory:** Proposal to replace file-based `MEMORY.md` with a database/searchable backend for long-term memory ([#175](https://github.com/sipeed/picoclaw/issues/175)).
*   **Docker Node.js Support:** Request to include Node.js 22 in the Docker image to support tool execution dependencies ([#1371](https://github.com/sipeed/picoclaw/issues/1371)).

## 7. User Feedback Summary
*   **Pain Point - Configuration Complexity:** Users find bridging local models (Ollama) and specific cloud providers (Groq, Volcengine) difficult due to protocol nuances and SSL issues ([#1161](https://github.com/sipeed/picoclaw/issues/1161), [#1375](https://github.com/sipeed/picoclaw/issues/1375)).
*   **Pain Point - Iteration Limits:** The hard cap of 20 tool iterations is frustrating users running complex agents, leading to "no response" errors ([#440](https://github.com/sipeed/picoclaw/issues/440)).
*   **Use Case - Enterprise Integration:** Strong demand for official **DingTalk** and **WeCom** (WeChat) integration improvements, indicating PicoClaw is being used as an internal enterprise assistant.
*   **Satisfaction:** Rapid response to security vulnerabilities (DoS fixes) is a strong positive signal for project health.

## 8. Backlog Watch
*   **[CRITICAL] Iteration Limit Architecture:** Issue [#440](https://github.com/sipeed/picoclaw/issues/440) (Replace hard iteration limit) needs maintainer attention. The current hard limit breaks legitimate long-horizon tasks.
*   **[FEATURE] Agent Identity Definition:** Issue [#1218](https://github.com/sipeed/picoclaw/issues/1218) (`SOUL.md` concept) is a major architectural shift that is currently open and receiving active design comments.
*   **[BUG] Groq API Tool Calling:** Issue [#748](https://github.com/sipeed/picoclaw/issues/748) has been open since Feb 25. It blocks a major provider (Groq) from functioning correctly with tools.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-12

## 1. Today's Overview
NanoClaw shows **high development velocity** with 30 PRs and 23 Issues updated in the last 24 hours. The project is in an active refinement phase, focusing heavily on **token optimization** (4+ interconnected issues/PRs), **multi-platform deployment support**, and **credential security**. No official releases were cut today, suggesting the team is iterating toward a significant stability milestone. Community engagement is robust with multiple contributors submitting fixes for long-standing bugs in agent orchestration and messaging integrations.

---

## 2. Releases
**No new releases** were published today. The last tagged version information was not provided in the dataset.

---

## 3. Project Progress

### Merged/Closed PRs (6 total)
| PR | Description | Impact |
|---|---|---|
| [#1004](https://github.com/qwibitai/nanoclaw/pull/1004) | **Dokploy & Docker Compose deployment support** | Major infra addition — DooD pattern, production-ready deployment |
| [#1000](https://github.com/qwibitai/nanoclaw/pull/1000) | **Google Chat thread-scoped conversation history** | Fixes cross-thread context pollution via `thread_id` columns |
| [#1001](https://github.com/qwibitai/nanoclaw/pull/1001) | **Fix Google Chat warm container thread_id propagation** | Bugfix for incorrect thread tagging in reused containers |
| [#977](https://github.com/qwibitai/nanoclaw/pull/977) | **Semantic memory with LanceDB + Gemini embeddings** | Major feature — vector memory for container agents |
| [#998](https://github.com/qwibitai/nanoclaw/pull/998) | Cursor/Docker VPS config | Minor/unclear scope |

### Key Open PRs Advancing Features
- **[#988](https://github.com/qwibitai/nanoclaw/pull/988)** — Smart token optimization suite (inline compaction + length control + CLAUDE.md compression). Most impactful pending feature.
- **[#999](https://github.com/qwibitai/nanoclaw/pull/999)** — Credential proxy extension to Groq/OpenAI APIs.
- **[#979](https://github.com/qwibitai/nanoclaw/pull/979)** — LanceDB long-term memory skill for container agents.
- **[#976](https://github.com/qwibitai/nanoclaw/pull/976)** — GitHub MCP server integration for agents.

---

## 4. Community Hot Topics

### Most Discussed Issues/PRs
| Item | Activity | Theme |
|---|---|---|
| [#730](https://github.com/qwibitai/nanoclaw/issues/730) | 3 comments, created Mar 5, ongoing | **OAuth token expiration** — CLAUDE_CODE_OAUTH_TOKEN expires overnight, breaking background services. Fundamental auth model issue. |
| [#865](https://github.com/qwibitai/nanoclaw/issues/865) | 3 comments | **Security architecture critique** — Containers are over-trusted; scripts should move to host level. Deep architectural debate. |
| [#983](https://github.com/qwibitai/nanoclaw/issues/983) | Token optimization tracking issue | **Token cost reduction** — Community coalescing around 3-mechanism optimization strategy. |

### Underlying Needs Analysis
1. **Authentication resilience** — Users running NanoClaw as headless services need non-interactive credential refresh mechanisms.
2. **Security hardening** — The community is pushing for zero-trust container boundaries and credential proxying.
3. **Cost efficiency** — Multiple contributors independently tackling token waste, indicating real pain from API costs at scale.

---

## 5. Bugs & Stability

### High Severity (Fix PRs Available/Awaiting Review)
| Bug | Description | Fix PR |
|---|---|---|
| [#827](https://github.com/qwibitai/nanoclaw/issues/827) | Agent accepts `FinishReason::ToolUse` with 0 tool calls — protocol violation | [#1003](https://github.com/qwibitai/nanoclaw/pull/1003) ✅ |
| [#830](https://github.com/qwibitai/nanoclaw/issues/830) | Scheduled tasks silently dropped when session busy | [#996](https://github.com/qwibitai/nanoclaw/pull/996) ✅ |
| [#989](https://github.com/qwibitai/nanoclaw/issues/989) | Gemini Pro container latency ~3.5 min for simple tasks | [#994](https://github.com/qwibitai/nanoclaw/pull/994) ✅ |
| [#730](https://github.com/qwibitai/nanoclaw/issues/730) | OAuth token expires overnight — 401 errors each morning | No PR yet ⚠️ |

### Medium Severity
| Bug | Description | Status |
|---|---|---|
| [#341](https://github.com/qwibitai/nanoclaw/issues/341) | add-discord skill has Apple Container-only code, breaks Docker | Open since Feb 21 |
| [#853](https://github.com/qwibitai/nanoclaw/issues/853) | Setup verification doesn't recognize `ANTHROPIC_AUTH_TOKEN` | Open |
| [#595/#596](https://github.com/qwibitai/nanoclaw/pull/596) | Baileys socket OOM crash after ~40 hours | PR blocked, needs review |

### Infrastructure/Platform Issues
- [#993](https://github.com/qwibitai/nanoclaw/issues/993) — Podman SSH dies after macOS sleep/wake (workaround exists)
- [#992](https://github.com/qwibitai/nanoclaw/issues/992) — Matrix/conduwuit 500 errors on federated rooms

---

## 6. Feature Requests & Roadmap Signals

### Strong Momentum (Likely Next Version)
1. **Token Optimization Suite** [#988](https://github.com/qwibitai/nanoclaw/pull/988) — Comprehensive PR covering mechanisms 1-3. Schema changes [#990](https://github.com/qwibitai/nanoclaw/issues/990), recording logic [#991](https://github.com/qwibitai/nanoclaw/issues/991) already closed.
2. **Credential Proxy Expansion** [#999](https://github.com/qwibitai/nanoclaw/pull/999) — Extends security model to Groq/OpenAI.
3. **Agent Long-term Memory** [#979](https://github.com/qwibitai/nanoclaw/pull/979) — LanceDB skill with MCP tools.

### Emerging Requests
- [#957](https://github.com/qwibitai/nanoclaw/issues/957) — Official Podman documentation/support
- [#818](https://github.com/qwibitai/nanoclaw/pull/818) — Telegram reactions skill
- [#878](https://github.com/qwibitai/nanoclaw/issues/878) — Credential proxy for Groq/OpenAI (matches PR #999)

---

## 7. User Feedback Summary

### Pain Points (Real User Reports)
| Issue | User Experience |
|---|---|
| [#958](https://github.com/qwibitai/nanoclaw/issues/958) | "I run /setup and followed all steps... never get reply... every time it promises nanoclaw is running" — Silent failure, poor debugging UX |
| [#973](https://github.com/qwibitai/nanoclaw/issues/973) | "Setup takes ages" — Performance complaint about setup complexity |
| [#833](https://github.com/qwibitai/nanoclaw/issues/833) | Win11 configuration confusion (Chinese user) — Documentation gap |
| [#730](https://github.com/qwibitai/nanoclaw/issues/730) | Daily container failures requiring manual re-auth |

### Positive Signals
- Users investing significant effort in security hardening ([#865](https://github.com/qwibitai/nanoclaw/issues/865)) indicates production-grade usage intent
- Multiple contributors building skills (LanceDB, GitHub MCP, Telegram reactions) shows healthy extensibility ecosystem

### Use Cases Emerging
- **M365 migration context management** (from Google Chat thread issue)
- **Federated Matrix homeserver deployment** (Poseidon/conduwuit)
- **Long-running background agents** (scheduled tasks, memory persistence)

---

## 8. Backlog Watch

### Long-Unanswered Critical Items
| Item | Age | Why Urgent |
|---|---|---|
| [#341](https://github.com/qwibitai/nanoclaw/issues/341) | ~3 weeks | Docker users completely broken for add-discord skill |
| [#730](https://github.com/qwibitai/nanoclaw/issues/730) | 7 days | Fundamental auth model issue affecting all OAuth users |
| [#596](https://github.com/qwibitai/nanoclaw/pull/596) | ~2 weeks | OOM crash fix blocked — reliability issue for 24/7 deployments |

### PRs Needing Maintainer Attention
| PR | Status | Note |
|---|---|---|
| [#988](https://github.com/qwibitai/nanoclaw/pull/988) | Needs Review | Large feature PR, core to cost optimization roadmap |
| [#596](https://github.com/qwibitai/nanoclaw/pull/596) | Blocked | Critical OOM fix stuck |
| [#965](https://github.com/qwibitai/nanoclaw/pull/965) | Needs Review | WhatsApp message flooding fix |

---

**Summary**: NanoClaw is maturing rapidly with strong community contributions in security, memory systems, and token optimization. The most pressing concerns are **OAuth token lifecycle management** and **reviewing the backlog of critical bugfix PRs**. The token optimization initiative (#988) appears to be the flagship feature for the next release.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest (2026-03-12)

## 1. Today's Overview
IronClaw demonstrates **extremely high development velocity** with a balanced workflow of 50 issues updated and 50 PRs processed in the last 24 hours. The project released **v0.18.0** yesterday, signaling a stable cadence. Activity is dominated by the core team (`@ilblackdragon`, `@reidliu41`) pushing significant architectural refactors (safety module extraction) and new features (Feishu channel, Composio integration), while an automated **staging CI bot** is aggressively identifying security and code quality regressions. The project is in a phase of rapid expansion—adding new channels, LLM providers, and internal infrastructure—while simultaneously tightening quality controls through automated code review.

## 2. Releases
**v0.18.0** (Released 2026-03-11)
*   **Key Changes:** Promotion of staging updates to main; updates to WASM `arti` (Tor client library) dependencies.
*   **Migration Notes:** No explicit breaking changes listed in the release notes, but the promotion includes underlying dependency updates. Users on older versions should update to benefit from the latest WASM improvements.

## 3. Project Progress
Significant advancements were merged or closed today, focusing on extensibility and user experience:

*   **New Integrations & Channels:**
    *   **Feishu/Lark & Gemini:** [PR #854](https://github.com/nearai/ironclaw/pull/854) (Merged) added a native Feishu WebSocket channel and a native Gemini LLM provider with restart resilience.
    *   **Z.AI Provider:** [PR #938](https://github.com/nearai/ironclaw/pull/938) (Merged) added support for GLM-5 via Z.AI.
    *   **Composio Tools:** [PR #920](https://github.com/nearai/ironclaw/pull/920) (Open) introduces native integration for 3rd party apps via Composio.
*   **CLI Enhancements:** [PR #933](https://github.com/nearai/ironclaw/pull/933) (Merged) added `ironclaw channels list` for better introspection.
*   **Infrastructure:** [PR #1024](https://github.com/nearai/ironclaw/pull/1024) (Open) began extracting the safety module into a standalone `ironclaw_safety` crate for better modularity.

## 4. Community Hot Topics
The most engaging discussions center on third-party model support and core API capabilities:

*   **Search Capabilities ([Issue #548](https://github.com/nearai/ironclaw/issues/548)):** A highly active request (3 comments, ongoing since Mar 4) to add a native Search endpoint to the Chat API. Users want IronClaw to have default web access rather than relying on complex tool configurations.
*   **Ngrok Stability ([Issue #733](https://github.com/nearai/ironclaw/issues/733)):** A detailed bug report (5 comments) regarding zombie processes when using ngrok tunnels. This affects users trying to expose their local IronClaw instance publicly, indicating a pain point in the networking/setup layer.
*   **Onboarding Failures ([Issue #875](https://github.com/nearai/ironclaw/issues/875)):** Users are frustrated by checksum verification failures during the `ironclaw onboard` process (2 comments, 1 👍), highlighting fragility in the initial setup experience.

## 5. Bugs & Stability
The **`ironclaw-ci[bot]`** automatically flagged multiple **CRITICAL** and **HIGH** severity issues in the current staging promotion cycle ([PR #1032](https://github.com/nearai/ironclaw/pull/1032)), indicating a strong focus on preventing regressions:

*   **[CRITICAL] Webhook Auth Bypass ([Issue #1033](https://github.com/nearai/ironclaw/issues/1033)):** Potential authentication bypass when secrets are unconfigured.
*   **[HIGH] Cryptographic Flaws ([Issue #1034](https://github.com/nearai/ironclaw/issues/1034), [Issue #1035](https://github.com/nearai/ironclaw/issues/1035)):** Issues with HMAC signature verification order and timing safety.
*   **[HIGH] Performance ([Issue #1039](https://github.com/nearai/ironclaw/issues/1039)):** Per-request HTTP client creation in hot paths identified as a bottleneck.
*   **User-Reported Bugs:**
    *   **DeepSeek Auth ([Issue #1047](https://github.com/nearai/ironclaw/issues/1047)):** Users report inability to use DeepSeek models due to 401 errors.
    *   **Bedrock Startup ([Issue #1009](https://github.com/nearai/ironclaw/issues/1009)):** Startup validation fails for AWS Bedrock backend.

## 6. Feature Requests & Roadmap Signals
Roadmap signals point heavily toward **Omnisearch** and **Enterprise/Platform readiness**:

*   **Omnisearch & Memory:** A cluster of requests ([#1020](https://github.com/nearai/ironclaw/issues/1020), [#1021](https://github.com/nearai/ironclaw/issues/1021), [#1022](https://github.com/nearai/ironclaw/issues/1022)) proposes a unified search aggregation endpoint and a command-palette UI to search across threads, files, and MCP servers. This appears to be the next major UX priority.
*   **BYOK (Bring Your Own Key):** [Issue #1027](https://github.com/nearai/ironclaw/issues/1027) requests formal documentation and support for user-provided model keys, moving beyond implicit support.
*   **E2E Testing:** [Issue #1044](https://github.com/nearai/ironclaw/issues/1044) and [#1045](https://github.com/nearai/ironclaw/issues/1045) suggest a move toward natural language-based end-to-end testing using Claude Code, aiming for automated quality assurance.

## 7. User Feedback Summary
User feedback highlights friction in **setup** and **provider diversity**:
*   **Pain Points:** The `onboard` command fails on Linux systems with older glibc ([Issue #1008](https://github.com/nearai/ironclaw/issues/1008)) and checksum errors ([Issue #875](https://github.com/nearai/ironclaw/issues/875)).
*   **Provider Demand:** There is strong demand for "OpenAI-compatible" support for diverse providers like Alibaba Qwen ([Issue #1012](https://github.com/nearai/ironclaw/issues/1012)), DeepSeek ([Issue #1047](https://github.com/nearai/ironclaw/issues/1047)), and Feishu ([Issue #1046](https://github.com/nearai/ironclaw/issues/1046)).
*   **Tool Reliability:** Users report silent failures in tools like Google Sheets (creating spreadsheets but not populating them) ([Issue #1002](https://github.com/nearai/ironclaw/issues/1002)).

## 8. Backlog Watch
*   **ChatGPT OAuth Reuse ([PR #693](https://github.com/nearai/ironclaw/pull/693)):** A large feature PR (Open since Mar 7) allowing reuse of ChatGPT tokens. It needs review to unblock users without API keys.
*   **Safety Module Refactor ([PR #1024](https://github.com/nearai/ironclaw/pull/1024)):** A high-risk, core architectural change currently open. Its merge will likely block other changes and requires careful scrutiny.
*   **Security Audit Findings:** The backlog of 10+ issues opened by `ironclaw-ci[bot]` today (e.g., [Issue #1033](https://github.com/nearai/ironclaw/issues/1033)) regarding auth and crypto safety needs immediate triage before the next release.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest (2026-03-12)

## 1. Today's Overview
LobsterAI is experiencing a period of high velocity development, marked by the release of **v0.2.3** and significant activity surrounding the "OpenClaw" subsystem. The team successfully merged 9 Pull Requests, focusing heavily on optimizing the gateway startup speed and fixing critical connection bugs. However, user friction remains high regarding the update mechanism on Apple Silicon and persistent memory/formatting issues. Overall, the project is iterating rapidly, shifting focus from feature expansion to stability and performance tuning.

## 2. Releases
### **v0.2.3**
The latest release introduces several UI enhancements and critical integrations.
*   **UI:** Added support for multiple file selection in the main interface attachments.
*   **Chat:** Implemented chat paging to handle long conversations better.
*   **Integrations:** Fixes for QQ integration (`Liuzhq/im qq fix`).
*   **Note:** Users report that the internal update checker on macOS ARM64 (v0.2.2) fails to see this update.

## 3. Project Progress
Significant engineering effort was merged today, predominantly targeting the "OpenClaw" backend and cross-platform stability:
*   **Performance Optimization:** **PR #395** implemented esbuild bundling and compile caches for the OpenClaw gateway, drastically reducing startup times from potential timeouts (>180s) to ~15s on subsequent runs.
*   **Platform Support:** **PR #387** resolved macOS code signing failures by fixing `@electron/osx-sign` dependency issues, ensuring continued support for Apple devices.
*   **Bug Fixes:** **PR #393** fixed connectivity bugs in IM (Instant Messaging) channels, and **PR #396** resolved an infinite loading state on app startup.
*   **Extensibility:** **PR #380** added support for custom URI protocols (e.g., `obsidian://`, `vscode://`) in markdown links.

## 4. Community Hot Topics
*   **Memory & Context Issues ([#186](https://github.com/netease-youdao/LobsterAI/issues/186)):** Users are actively discussing a regression in memory capabilities compared to the original "OpenClaw," noting that the AI forgets context even when configured explicitly.
*   **Apple Silicon Update Failure ([#390](https://github.com/netease-youdao/LobsterAI/issues/390)):** A highly visible issue where the auto-updater fails to recognize the new v0.2.3, forcing manual downloads.
*   **Docker Support Request ([#386](https://github.com/netease-youdao/LobsterAI/issues/386)):** A strong signal from the community for self-hosting capabilities via Docker containers, currently not supported.

## 5. Bugs & Stability
*   **Critical: Bash Execution Latency ([#350](https://github.com/netease-youdao/LobsterAI/issues/350)):** Users report severe delays in executing shell commands. Simple commands take minutes, and the system hangs waiting for output on commands that return nothing.
*   **High: Image Reading Freeze ([#357](https://github.com/netease-youdao/LobsterAI/issues/357)):** The application consistently freezes/crashes when attempting to process images.
*   **Medium: Formatting Bug ([#344](https://github.com/netease-youdao/LobsterAI/issues/344)):** A persistent bug where the AI forces spaces between Chinese characters and numbers, breaking code/string integrity.
*   **Medium: Settings Persistence ([#382](https://github.com/netease-youdao/LobsterAI/issues/382)):** Frequent updates are wiping user configurations, causing frustration.

## 6. Feature Requests & Roadmap Signals
*   **Docker Deployment ([#386](https://github.com/netease-youdao/LobsterAI/issues/386)):** Highly requested for enterprise/self-hosted use cases.
*   **Prompt Optimization UI ([#391](https://github.com/netease-youdao/LobsterAI/issues/391)):** A request for a "magic button" to refine user prompts for better AI responses, targeting non-technical users.
*   **Hourly Scheduling ([PR #376](https://github.com/netease-youdao/LobsterAI/pull/376)):** An open PR suggesting a shift towards more granular automation capabilities.
*   **Memory Management:** Requests to clear memory in Feishu bot integrations ([#398](https://github.com/netease-youdao/LobsterAI/issues/398)).

## 7. User Feedback Summary
Users appreciate the frequent updates but are frustrated by **instability during updates** (settings wiping, failed auto-detection). There is a sentiment that the fork (LobsterAI) currently lags behind the original "OpenClaw" in terms of **core reliability**, specifically regarding **memory retention** and **bash execution speed**. The "Apple Silicon" experience is currently degraded due to update checker bugs.

## 8. Backlog Watch
*   **Issue [#344](https://github.com/netease-youdao/LobsterAI/issues/344) (Formatting Bug):** Open for 3 days with high user frustration ("Unable to replace OpenClaw because of this"). Needs dev attention.
*   **Issue [#186](https://github.com/netease-youdao/LobsterAI/issues/186) (Poor Memory):** Open since late Feb. This is a fundamental functionality complaint that remains unresolved.
*   **PR #240 (Workflow Enhancement):** A substantial feature PR open since March 3rd involving agent "souls" and complex workflows; seems stalled and needs review.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest — 2026-03-12

## 1. Today's Overview

TinyClaw shows **high development velocity** today with 6 pull requests and 5 issues updated within 24 hours. The project released two patch versions (v0.0.10 and v0.0.11), indicating rapid iteration on stability fixes. A significant **rebranding effort to "TinyAGI"** is in progress (PR #191), suggesting a strategic pivot or expansion of the project's scope. The community is actively engaged with the new **TinyOffice web portal**, submitting multiple enhancement requests for improved UX and functionality.

---

## 2. Releases

### v0.0.11
- **Changes:** Version bump release with no functional changes.
- **Note:** Authored by Claude Opus 4.6, indicating AI-assisted development workflow.

### v0.0.10
- **Changes:**
  - Removed dedicated logs pane from tmux session (`daemon.sh`)
  - Simplified `TINYCLAW_HOME` detection in `heartbeat-cron.sh`
  - Increased Telegram polling watchdog timeout from 2m to 5m
  - Moved Task/TaskStatus types to a new location
- **Breaking Change:** References to `lib/setup-wizard.sh` are now invalid (migrated to TypeScript), causing first-time install failures (see Issue #197).

---

## 3. Project Progress

| PR | Status | Summary |
|----|--------|---------|
| [#198](https://github.com/TinyAGI/tinyclaw/pull/198) | ✅ Merged | Fixed stale `setup-wizard.sh` references breaking fresh installs |
| [#195](https://github.com/TinyAGI/tinyclaw/pull/195) | ✅ Merged | Converted `send_message` skill from TypeScript to plain Node.js to resolve `@types/node` compilation failures |

**Key Advancements:**
- **Installation stability:** Critical fix for first-time users merged within hours of report
- **Skill execution:** Resolved ts-node compilation issues affecting the `send_message` skill
- **Ongoing work:** Real-time agent streaming (PR #196), Telegram reconnection fixes (PR #200), TinyOffice chat rooms (PR #199), and full rebrand to TinyAGI (PR #191)

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Engagement | Analysis |
|-------|------------|----------|
| [#126](https://github.com/TinyAGI/tinyclaw/issues/126) — Telegram Bot Auto-Reconnect Failure | 5 comments | Long-standing connectivity issue (created Feb 19) still active. Users experience dropped Telegram Bot API connections that don't auto-recover. **PR #200** appears to address this. |
| [#197](https://github.com/TinyAGI/tinyclaw/issues/197) — Missing setup-wizard.sh | 2 comments | Critical installation blocker reported and **fixed same day** (PR #198). |

### Emerging Themes
- **TinyOffice UX:** Three enhancement issues (#192, #193, #194) from user @mczabca-boop indicate strong interest in web-based control and onboarding
- **Chat persistence:** Users expect Slack-like conversation history and room structure
- **First-run experience:** Desire for web-based setup wizard instead of CLI flows

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available |
|----------|-------|--------|---------------|
| 🔴 **Critical** | [#197](https://github.com/TinyAGI/tinyclaw/issues/197) — First-time install fails (`setup-wizard.sh` missing) | ✅ Closed | [PR #198](https://github.com/TinyAGI/tinyclaw/pull/198) merged |
| 🟡 **Medium** | [#126](https://github.com/TinyAGI/tinyclaw/issues/126) — Telegram Bot doesn't auto-reconnect after network drops | 🟠 Open | [PR #200](https://github.com/TinyAGI/tinyclaw/pull/200) pending review |
| 🟢 **Low** | TypeScript compilation failure in `send_message` skill | ✅ Fixed | [PR #195](https://github.com/TinyAGI/tinyclaw/pull/195) merged |

---

## 6. Feature Requests & Roadmap Signals

### Requested Features (Last 24h)

| Feature | Issue | Priority Signals |
|---------|-------|------------------|
| Runtime control panel for daemon/queue/channels | [#194](https://github.com/TinyAGI/tinyclaw/issues/194) | 👍 1 reaction |
| Chat room persistence & history | [#192](https://github.com/TinyAGI/tinyclaw/issues/192) | Already in PR [#199](https://github.com/TinyAGI/tinyclaw/pull/199) |
| Web-based first-run onboarding | [#193](https://github.com/TinyAGI/tinyclaw/issues/193) | Aligns with rebrand effort |

### Predicted Next Version (v0.0.12 or v0.1.0)
Based on open PRs and community demand:
1. **Telegram reconnection fix** (PR #200) — likely merge imminent
2. **TinyOffice chat rooms & projects** (PR #199) — significant UX enhancement
3. **Real-time agent streaming** (PR #196) — core functionality improvement
4. **TinyAGI rebrand** (PR #191) — large-scale change, may target milestone release

---

## 7. User Feedback Summary

### Pain Points Identified
- **Installation fragility:** Users report broken first-time setup due to file path changes
- **Chat ephemerality:** TinyOffice chat sessions don't persist across navigation, confusing users expecting conversation history
- **CLI dependency:** Users want web-based alternatives to CLI workflows for daemon control and initial configuration
- **Telegram reliability:** Connection drops require manual intervention despite watchdog mechanism

### Positive Signals
- Rapid maintainer response to critical bugs (same-day fix for #197)
- Active feature development aligned with user requests (PR #199 addresses #192 directly)
- Clear engagement from community on TinyOffice direction

---

## 8. Backlog Watch

| Item | Age | Concern |
|------|-----|---------|
| [#126](https://github.com/TinyAGI/tinyclaw/issues/126) — Telegram Auto-Reconnect | ~3 weeks | Medium severity but affects production reliability. PR #200 now available and should be prioritized for review/merge. |
| [#191](https://github.com/TinyAGI/tinyclaw/pull/191) — Rebrand to TinyAGI | Open | Large-scale change affecting all package names, CLI commands, and configs. Needs careful review before merge to avoid breaking downstream users. |

---

**Summary:** TinyClaw is in an active development phase with strong maintainer responsiveness. The project is transitioning toward a more web-centric user experience (TinyOffice) while addressing core reliability issues (Telegram connectivity, installation flow). The upcoming rebrand to TinyAGI signals potential scope expansion beyond the original assistant focus.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-03-12

## 1. Today's Overview
Moltis demonstrates **high velocity development activity** with 26 closed issues and 7 merged PRs in the last 24 hours, significantly outpacing new bug reports (10 open). The project is in an active stabilization and feature-enrichment phase, heavily focused on fixing deployment edge-cases (Docker, macOS, providers) and extending the Node/MCP protocol capabilities. While no new official releases were tagged today, the volume of merged fixes suggests a patch release is imminent. The ratio of open (19) to merged (7) PRs indicates a large pipeline of enhancements currently under review.

## 2. Releases
**No new releases** were published on 2026-03-12.

## 3. Project Progress
Today's merged PRs focused heavily on **configuration compatibility, provider support, and chat stability**:

*   **MCP & Provider Security:** [PR #416](https://github.com/moltis-org/moltis/pull/416) added support for secret remote MCP URLs and headers, enhancing security for external tool integrations.
*   **Local LLM Support:** [PR #397](https://github.com/moltis-org/moltis/pull/397) fixed stop-token stripping for MLX streaming output, and [PR #400](https://github.com/moltis-org/moltis/pull/400) added backward compatibility for legacy memory embedding keys, smoothing the upgrade path.
*   **Chat UX:** [PR #399](https://github.com/moltis-org/moltis/pull/399) fixed session compaction for active channels, ensuring context management works correctly across different interfaces (Discord/Web).
*   **Onboarding:** [PR #398](https://github.com/moltis-org/moltis/pull/398) resolved multiple user-testing feedback items regarding Tailscale and installation flows.

## 4. Community Hot Topics
The most discussed items revolve around **extensibility and context awareness**:

*   **[Issue #176](https://github.com/moltis-org/moltis/issues/176) [13 comments]:** A request to add `datetime` to the system prompt context. This highlights a gap in the agent's "self-awareness" regarding time, which is critical for scheduling and temporal reasoning tasks.
*   **[Issue #181](https://github.com/moltis-org/moltis/issues/181) [8 comments]:** Users struggling with Cron and Heartbeat activation. This points to friction in setting up autonomous background tasks.
*   **[Issue #391](https://github.com/moltis-org/moltis/issues/391) [2 comments]:** An RFC for "Node-Advertised Tools." This is a strategic architectural discussion about allowing remote nodes to expose specific tools beyond basic `exec`, signaling a push toward a more distributed agent mesh architecture.

## 5. Bugs & Stability
Several **critical infrastructure bugs** were identified, particularly around containerization:

1.  **Trusted Network Proxy Crash:** [Issue #367](https://github.com/moltis-org/moltis/issues/367) reports the proxy shutting down immediately, blocking all HTTP tools. *(Fix likely related to general sandbox hardening efforts in open PRs)*.
2.  **Docker-in-Docker Path Mapping:** [Issue #102](https://github.com/moltis-org/moltis/issues/102) (Closed) highlighted a critical mount failure where sandboxes saw empty workspaces. This was a severe blocker for users running Moltis itself in a container.
3.  **Web Fetch Panics:** [Issue #420](https://github.com/moltis-org/moltis/issues/420) (New) reports a panic on non-UTF8 legacy pages, causing the tool to crash rather than fail gracefully.
4.  **Sandbox Networking:** [Issue #423](https://github.com/moltis-org/moltis/issues/423) (New) indicates ongoing stability issues with the Docker sandbox network stack.

## 6. Feature Requests & Roadmap Signals
The community is clearly pushing for **broader integration and autonomy**:

*   **Webhooks:** [Issue #272](https://github.com/moltis-org/moltis/issues/272) requests webhook functionality, essential for integrating Moltis into external CI/CD or automation pipelines.
*   **Platform Expansion:** Requests for [Discord support](https://github.com/moltis-org/moltis/issues/221) and [WhatsApp support](https://github.com/moltis-org/moltis/issues/111) indicate a strong desire for multi-channel presence.
*   **Model Flexibility:** [Issue #114](https://github.com/moltis-org/moltis/issues/114) (Closed) and [Issue #156](https://github.com/moltis-org/moltis/issues/156) show users want to easily swap in LMStudio, OpenRouter, and MiniMax models.
*   **Symphony/Workflows:** [PR #421](https://github.com/moltis-org/moltis/pull/421) (Open) introduces a "workflow daemon," signaling the core team is actively building structured, file-based automation capabilities.

## 7. User Feedback Summary
User sentiment today reflects **installation friction but satisfaction with responsiveness**:
*   **Pain Points:** Users are struggling with Docker network complexities ([#423](https://github.com/moltis-org/moltis/issues/423), [#102](https://github.com/moltis-org/moltis/issues/102)) and password/OAuth onboarding flows. Several bugs involve URLs with double `/v1/v1` prefixes ([#113](https://github.com/moltis-org/moltis/issues/113)), indicating the API client logic needs robustness for different provider URL styles.
*   **Use Cases:** Users are attempting to deploy Moltis as a backend service for Telegram bots and as a distributed compute grid (remote nodes).
*   **Satisfaction:** The rapid closure of 26 issues suggests the maintainers are highly responsive to bug reports, which is positively received by the community.

## 8. Backlog Watch
*   **[Issue #176](https://github.com/moltis-org/moltis/issues/176) (System Datetime):** Despite being opened a month ago and having high engagement, this has not been marked as "in progress." It is a low-complexity, high-impact feature that should be prioritized.
*   **[PR #401](https://github.com/moltis-org/moltis/pull/401) (Generic Provider Bootstrap):** This open PR fixes critical provider setup flows but awaits review/merge to unblock users using custom providers.
*   **[Issue #334](https://github.com/moltis-org/moltis/issues/334) (Model Behavior):** A generic report about "Every model" needs maintainer triage to determine if it's a prompt engineering issue or a backend routing bug.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest (2026-03-12)

## 1. Today's Overview
CoPaw is exhibiting **high-velocity development** with significant architectural expansion alongside intense debugging efforts. The project released version **v0.0.7**, introducing critical security features ("Tool Guard"), while simultaneously tackling a wave of upgrade-related bugs (v0.0.6 -> v0.0.7 transition issues) reported by the community. Activity is robust with 50 issues and 50 PRs updated, indicating a "move fast and break things" phase. The emergence of a "Multi-agent/multi-workspace" draft PR suggests a major architectural pivot is on the horizon.

## 2. Releases
### **v0.0.7**
*   **Security Added:** Introduced **Tool Guard**, a pre-execution security layer. It scans tool parameters for risky patterns (e.g., `rm`, `mv` in shell commands). Risky calls are blocked pending user approval via `/approve`.
*   **Management:** Added a new **Security** settings page to manage these rules.
*   **Note:** This release appears to be a direct response to safety concerns regarding agent autonomy, adding necessary guardrails for production use.

## 3. Project Progress
**Merged/Closed PR Highlights:**
*   **Skill UI Improvements ([PR #1235](https://github.com/agentscope-ai/CoPaw/pull/1235)):** Unified card layout for skills, now displaying metadata descriptions directly from `SKILL.md` frontmatter.
*   **Skill Import Fix ([PR #1369](https://github.com/agentscope-ai/CoPaw/pull/1369)):** Fixed an importing failure that occurred when skill names contained a `/` character.
*   **Context Preservation ([PR #1262](https://github.com/agentscope-ai/CoPaw/pull/1262)):** Fixed a bug where Cron jobs would overwrite `request.user_id/session_id` during execution.

**Open PRs advancing features:**
*   **Multi-Agent Architecture ([PR #1375](https://github.com/agentscope-ai/CoPaw/pull/1375)):** A massive "Work In Progress" PR proposing a complete multi-agent/multi-workspace architecture to run isolated AI agents simultaneously.
*   **Update Command ([PR #1278](https://github.com/agentscope-ai/CoPaw/pull/1278)):** Added a `copaw update` CLI command to automate the upgrade process (currently painful via `pip`).
*   **MCP OAuth 2.1 ([PR #1012](https://github.com/agentscope-ai/CoPaw/pull/1012)):** Implemented OAuth 2.1 auto-discovery support for MCP servers.
*   **MiniMax Provider ([PR #1376](https://github.com/agentscope-ai/CoPaw/pull/1376)):** Added MiniMax as a built-in LLM provider.

## 4. Community Hot Topics
1.  **Built-in Skills & MCPs Discussion ([Issue #280](https://github.com/agentscope-ai/CoPaw/issues/280))**
    *   **Activity:** 18 comments.
    *   **Analysis:** Users are discussing which skills and MCPs should be pre-installed. The community seems to agree that "out-of-the-box" functionality needs improvement, reducing the friction of initial setup.
2.  **Upgrade Mechanism Failures ([Issue #1195](https://github.com/agentscope-ai/CoPaw/issues/1195), [Issue #1315](https://github.com/agentscope-ai/CoPaw/issues/1315))**
    *   **Activity:** 14 and 8 comments respectively.
    *   **Analysis:** A significant pain point is the disconnect between backend upgrades (via `pip`) and frontend updates. Users report updating the package but the Web UI remains on the old version, causing confusion and operational failures.
3.  **Model Configuration Complexity ([Issue #1377](https://github.com/agentscope-ai/CoPaw/issues/1377))**
    *   **Activity:** High engagement/rant.
    *   **Analysis:** User frustration regarding model setup (inability to auto-fetch models, manual base_url issues). This highlights a need for better onboarding or auto-configuration for third-party model providers.

## 5. Bugs & Stability
*   **Critical: Version Mismatch / Update Failures**
    *   [Issue #1195](https://github.com/agentscope-ai/CoPaw/issues/1195), [Issue #1315](https://github.com/agentscope-ai/CoPaw/issues/1315): Frontend fails to update or reflects wrong version after `pip` upgrade.
    *   *Status:* Active discussion; [PR #1278](https://github.com/agentscope-ai/CoPaw/pull/1278) (CLI update command) is a proposed mitigation.
*   **High: Context & Memory Errors**
    *   [Issue #1222](https://github.com/agentscope-ai/CoPaw/issues/1222): Message count mismatch after compression leads to API failure.
    *   [Issue #1277](https://github.com/agentscope-ai/CoPaw/issues/1277): "Exceeded limit on max bytes" error, suggesting context management isn't trimming effectively.
*   **Medium: Model Provider Configuration**
    *   [Issue #1358](https://github.com/agentscope-ai/CoPaw/issues/1358): v0.0.6 users unable to fill in `base_url`.
    *   [Issue #1292](https://github.com/agentscope-ai/CoPaw/issues/1292): Connection failures with specific providers (SiliconFlow).
*   **Medium: Channel Stability**
    *   [Issue #1345](https://github.com/agentscope-ai/CoPaw/issues/1345): Feishu channel "delayed reply" (answering previous questions).
    *   [Issue #1304](https://github.com/agentscope-ai/CoPaw/issues/1304): DingTalk session expiration issues during Cron jobs.

## 6. Feature Requests & Roadmap Signals
*   **Upgrade Automation:** The presence of [PR #1278](https://github.com/agentscope-ai/CoPaw/pull/1278) strongly suggests the next version will prioritize fixing the update experience.
*   **Multi-Workspace:** [PR #1375](https://github.com/agentscope-ai/CoPaw/pull/1375) signals a strategic shift toward supporting multiple isolated agents, likely aiming for enterprise/team scenarios.
*   **Richer Channel Support:** Requests for [Feishu Card V2](https://github.com/agentscope-ai/CoPaw/pull/1231) (Rich Text/Image) and Enterprise WeChat ([Issue #51](https://github.com/agentscope-ai/CoPaw/issues/51)) indicate a push for better corporate messaging integration.
*   **Copilot Integration:** [Issue #934](https://github.com/agentscope-ai/CoPaw/issues/934) requests GitHub Copilot support, suggesting developers want to use existing subscriptions within CoPaw.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Upgrading is broken:** Users dread updating versions because the frontend often fails to refresh or cache clears are required.
    *   **Model Setup is Opaque:** Manual configuration of base URLs and API keys is error-prone, with unhelpful error messages.
    *   **Context Stability:** Long conversations or batch tasks often crash due to memory/context handling errors.
*   **Satisfaction:**
    *   Positive sentiment exists around the **Skill system** and **MCP support**, though users want more built-in options.
    *   The new **Security (Tool Guard)** feature in v0.0.7 addresses safety concerns, which is well-received conceptually.

## 8. Backlog Watch
*   **[Issue #280](https://github.com/agentscope-ai/CoPaw/issues/280) (Discussion: Built-in Skills):** High comment count but needs a definitive roadmap/maintainer decision on which skills make the cut.
*   **[PR #1012](https://github.com/agentscope-ai/CoPaw/pull/1012) (MCP OAuth 2.1):** A valuable contribution (First Time Contributor) that has been open for ~3 days. Needs review to unblock advanced MCP integrations.
*   **[PR #1375](https://github.com/agentscope-ai/CoPaw/pull/1375) (Multi-Agent Architecture):** A massive architectural change currently marked "WIP". Needs community testing and maintainer alignment to prevent merge conflicts with other ongoing works.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-03-12

## 1. Today's Overview
ZeptoClaw demonstrates high velocity today with the release of **version 0.7.6**, which significantly hardens security boundaries and improves CLI usability. The project saw 11 issues updated and 4 pull requests active, with the maintainer (@qhkm) closing out a cluster of security-related tasks derived from recent filesystem and authentication hardening efforts (PR #324). While the maintainer focuses heavily on backend stability and provider integration (adding Zhipu AI support), community contributors are flagging build compatibility issues and requesting UX improvements for messaging channels.

## 2. Releases

### **v0.7.6** (Released 2026-03-12)
This minor release focuses on stability, security, and CLI quality-of-life improvements.

*   **CLI Improvements:** Added interactive slash command suggestions (via `rustyline`). Users can now type `/` and press Tab to see commands like `/model`, `/persona`, `/tools`, etc.
*   **Security Fixes:** Hardened inbound authentication for webhooks and enforced stricter filesystem boundaries to prevent symlink/TOCTOU attacks.
*   **Bug Fix:** Deduplicated warning messages regarding Claude subscription tokens.

**Migration Notes:** No breaking API changes in this release, but users utilizing the Telegram `allow_usernames` environment variable should note the staged deprecation in favor of numeric IDs as per the underlying security hardening.

## 3. Project Progress

**Merged/Closed Work (Functional Advancements):**
*   **Security Hardening (PR #324):** A major refactor was merged and closed. It improved filesystem write validation (preventing hardlink/symlink escapes) and tightened inbound webhook authentication. This work resolved several follow-up tickets (#327, #328, #329, #330) by establishing a secure baseline.
*   **CLI UX (PR #323):** Merged interactive slash command autocomplete, making the local agent shell significantly more navigable.
*   **Dependencies (Issue #185):** The upgrade path for `jsonwebtoken` v10 (a breaking change) was manually resolved and closed.

**In-Progress Work (Open PRs):**
*   **Provider Expansion (PR #335):** Actively adding explicit support for **Zhipu (GLM)** API key validation during onboarding, moving beyond generic error handling.

## 4. Community Hot Topics

The most active discussions centered on channel integrations and developer experience:

1.  **Telegram UX Improvements (Issue #331):** A community member requested formatting rendering (Markdown/HTML) and typing indicators for the Telegram bot.
    *   *Analysis:* Users feel the current Telegram integration is "plain" and lacks the responsiveness expected of modern AI bots.
    *   [Issue #331](https://github.com/qhkm/zeptoclaw/issues/331)
2.  **Build Environment Consistency (PR #287):** Contributor @taqtiqa-mark is driving a discussion on standardizing dev tools (lint-container scripts) to ensure local tests pass before PRs are submitted.
    *   *Analysis:* This highlights a need for better "out-of-the-box" developer setup to reduce friction for new contributors.
    *   [PR #287](https://github.com/qhkm/zeptoclaw/pull/287)

## 5. Bugs & Stability

*   **[P2-High] Docker/Podman Build Failure (Issue #333):**
    *   **Details:** The `Dockerfile.dev` fails on Podman 5.7 legacy builder due to `--mount=type=cache` syntax incompatibility.
    *   **Impact:** Blocks contributors using Podman from building the dev environment.
    *   **Status:** Open, no fix PR linked yet.
    *   [Issue #333](https://github.com/qhkm/zeptoclaw/issues/333)
*   **[P2-High] Filesystem & Auth Hardening (Resolved):**
    *   A cluster of bugs (#326, #327, #329, #330) regarding TOCTOU race conditions and webhook auth gaps were resolved via the merged PR #324.

## 6. Feature Requests & Roadmap Signals

*   **Provider Roadmap (Zhipu AI):** With Issue #332 closed and PR #335 open, the immediate roadmap clearly includes formalizing **Zhipu GLM** as a first-class provider alongside OpenAI and Anthropic. Expect this to land in the next patch release.
*   **Directory Listing (Issue #334):** A request to list ZeptoClaw on "Shelldex." This indicates growing market visibility and demand for distribution.
*   **Telegram Enhancements:** The feature request in #331 (typing indicators/formatting) is a strong signal that the next major focus for the *channels* subsystem might be rich-media support.

## 7. User Feedback Summary

*   **Pain Point:** Users running **Podman** (an alternative to Docker) are currently blocked by build syntax issues (#333).
*   **Pain Point:** Telegram users find the bot "messy" and unresponsive due to lack of formatting and typing indicators (#331).
*   **Satisfaction:** The release of slash command suggestions (v0.7.6) indicates the project is maturing in its CLI "creature comforts," which is likely to improve satisfaction for power users running the agent locally.

## 8. Backlog Watch

*   **PR #287 (Dev Tools Consistency):** This PR has been open for 3 days (since March 9). It addresses a critical need for contributor consistency but seems to be stalled or awaiting final review.
*   **Issue #333 (Podman Build):** Opened today, but blocks a specific segment of the developer base. Needs triage to decide if `--build-arg` or specific BuildKit flags should be added to the documentation or the Dockerfile itself.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest: 2026-03-12

## 1. Today's Overview
EasyClaw demonstrates high operational tempo today with rapid iteration, evidenced by the release of two consecutive patch versions (v1.6.6 and v1.6.7) within a single day. While core development activity is moderate with one active pull request, the maintainers are highly responsive to deployment issues, specifically addressing macOS Gatekeeper warnings. The project shows a healthy "user-driven" maintenance cycle where immediate deployment blockers are prioritized over new feature integration.

## 2. Releases
*   **v1.6.7** (Released 2026-03-12)
    *   **Focus:** macOS Deployment & Security.
    *   **Changes:** The update primarily addresses installation friction on macOS. It includes detailed instructions for bypassing the **"'EasyClaw' is damaged and can't be opened"** error, which is caused by macOS Gatekeeper blocking unsigned applications. The release notes provide a Terminal command fix, suggesting the binary itself may not have changed significantly, or the change involves packaging adjustments not detailed in the changelog.
    *   **Migration Notes:** Users do not need to migrate data but may need to run `xattr -cr` or similar commands as per the release instructions if they encounter the "damaged" error.
*   **v1.6.6** (Released 2026-03-12)
    *   **Focus:** Identical content to v1.6.7 regarding macOS instructions.
    *   **Analysis:** The immediate succession of v1.6.7 suggests a quick patch or a documentation/build process correction immediately following the v1.6.6 release.

## 3. Project Progress
*   **UI/UX Refinement:** Work is underway to improve the desktop client's visual integration. PR #15 (fix: app icon in macos dock and system tray) saw activity today.
*   **Status:** The PR is currently **Open** but updated, indicating it is under active review or undergoing final testing before merge.
*   **Impact:** Once merged, this will likely resolve inconsistencies in how the application appears in the Dock and System Tray on macOS, enhancing the native feel of the client.

## 4. Community Hot Topics
*   **Issue [#16](https://github.com/gaoyangz77/easyclaw/issues/16) - OpenAI OAuth Malfunction:**
    *   **Activity:** Closed within 24 hours (Created 2026-03-11, Closed 2026-03-12).
    *   **Analysis:** A user reported persistent errors with OpenAI OAuth in both portable and installed versions. The rapid closure suggests a confirmed fix or an identified user-side configuration issue.
    *   **Underlying Need:** Users heavily rely on the "Bring Your Own Key" or integrated login features for LLM providers. Stability in OAuth is critical for user retention.

## 5. Bugs & Stability
1.  **[High] macOS Gatekeeper Block (Resolved):**
    *   **Description:** Users reported the app as "damaged" upon launching on macOS.
    *   **Status:** Addressed explicitly in v1.6.6 and v1.6.7 release notes. The project currently relies on user-side workarounds (Terminal commands) rather than code signing, which is a stability/UX trade-off for open-source projects.
2.  **[High] OpenAI Authentication Failure (Resolved):**
    *   **Description:** Issue [#16](https://github.com/gaoyangz77/easyclaw/issues/16) reported OAuth failures. The error message suggested a token validation or callback issue.
    *   **Status:** Issue closed. Likely resolved in the recent patches or clarified via support.

## 6. Feature Requests & Roadmap Signals
*   **Prediction:** The next logical step following the macOS icon fix (PR #15) is a merge into the `main` branch, likely resulting in a v1.6.8 release focused on desktop client polish.
*   **Signal:** The focus on "portable vs installed" versions in Issue #16 indicates a demand for a robust portable app experience, likely from users utilizing EasyClaw as a "carry-on" digital assistant on USB drives or cloud sync.

## 7. User Feedback Summary
*   **Pain Point:** The unsigned nature of the macOS app is a significant friction point for non-technical users, requiring them to interact with the Terminal to "un-quarantine" the file.
*   **Pain Point:** OAuth reliability is sensitive; users expect seamless authentication flows similar to commercial products.
*   **Satisfaction:** The quick turnaround on Issue #16 suggests high responsiveness from the maintainer (@gaoyangz77), which mitigates frustration from bugs.

## 8. Backlog Watch
*   **PR [#15](https://github.com/gaoyangz77/easyclaw/pull/15):** Currently Open. This UI fix is critical for the professional appearance of the app on macOS. It requires maintainer attention for final approval and merge to clear the backlog.
*   **Observation:** No long-dormant issues were updated today, but the high frequency of releases suggests the project is in a stabilization phase rather than feature expansion.

</details>