# OpenClaw Ecosystem Digest 2026-03-12

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-03-12 03:19 UTC

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

## Today's Overview
OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours. The project is in a critical stabilization phase following the recent **2026.3.8 release**, with a significant portion of community effort focused on identifying and patching regressions. The open/closed ratio suggests active triage, but the volume of new bugs indicates the latest release may have been pushed out with insufficient QA. Multiple fix PRs are already in flight, showing a responsive maintainer team.

## Releases
**No new releases today.** The current stable version remains **2026.3.8**. However, based on the volume of regression fixes being merged, a **2026.3.9 patch release** is highly likely within the next 24-48 hours.

---

## Project Progress

### Merged/Closed PRs (Key Fixes)
Several important fixes were merged today, addressing critical regressions from 2026.3.8:

| PR | Area | Summary |
|----|------|---------|
| [#43615](https://github.com/openclaw/openclaw/pull/43615) | Agents | Fixed crash/polling stall when Claude API returns `stop_reason: "sensitive"` (content policy rejection) |
| [#43285](https://github.com/openclaw/openclaw/pull/43285) | ACP | Fixed rehydration of restarted ACP sessions by canonicalizing aliases |
| [#43336](https://github.com/openclaw/openclaw/pull/43336) | Nodes | Fixed `nodes` tool triggering unnecessary approval UI when `security=full, ask=off` |
| [#43265](https://github.com/openclaw/openclaw/pull/43265) | Providers | Fixed `opencode-go` provider API key resolution from environment |
| [#28396](https://github.com/openclaw/openclaw/pull/28396) | Docker | Made Chromium entry point version-agnostic for Playwright upgrades |

### Features Advancing (Open PRs)
- **[#41345](https://github.com/openclaw/openclaw/pull/41345)** — Major backup overhaul: encrypted folder-backed snapshots with setup/run/restore flow
- **[#43016](https://github.com/openclaw/openclaw/pull/43016)** — New HarmonyOS node app (bridge + chat UI)
- **[#41496](https://github.com/openclaw/openclaw/pull/41496)** — Plugin hooks for AI provider capabilities (TTS/ASR/Embedding/Image/Video)
- **[#42989](https://github.com/openclaw/openclaw/pull/42989)** — Added "Model Hub" as new Chinese-market aggregated provider

---

## Community Hot Topics

### Most Discussed Issues (by comment count)

| Issue | Comments | Topic |
|-------|----------|-------|
| [#32828](https://github.com/openclaw/openclaw/issues/32828) | 51 | False "API rate limit reached" errors despite functional APIs |
| [#26534](https://github.com/openclaw/openclaw/issues/26534) | 48 | Request: DingTalk in first-install channel options |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | 16 | Request: Prebuilt Android APK releases |
| [#9899](https://github.com/openclaw/openclaw/issues/9899) | 15 | Include day of week in system prompt date/time injection |
| [#39907](https://github.com/openclaw/openclaw/issues/39907) | 15 | Kimi K2.5 emits literal `exec(...)` text instead of tool calls |

### Analysis of Underlying Needs
1. **Reliability in Error Handling**: The top issue (#32828) reveals users are frustrated by false-positive error messages that block usage even when APIs work fine. This points to a need for better error detection heuristics.
2. **Enterprise Integration**: DingTalk integration (#26534) with 48 comments and 12 👍 reflects strong enterprise demand in the Chinese market.
3. **Model Compatibility**: Multiple issues around Kimi models suggest the `kimi-coding/k2p5` integration is problematic — users want reliable tool-calling behavior from Chinese models.
4. **Mobile Deployment**: Request for prebuilt Android APKs (#9443) indicates demand for easier mobile companion app deployment.

---

## Bugs & Stability

### Critical Regressions (2026.3.8)

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 **Critical** | [#41405](https://github.com/openclaw/openclaw/issues/41405), [#41798](https://github.com/openclaw/openclaw/issues/41798), [#41266](https://github.com/openclaw/openclaw/issues/41266) | **Cron jobs completely broken** — jobs enqueue but never execute (isolated sessions deadlock) | PRs [#43594](https://github.com/openclaw/openclaw/pull/43594), [#42579](https://github.com/openclaw/openclaw/pull/42579) open |
| 🔴 **Critical** | [#40977](https://github.com/openclaw/openclaw/issues/40977), [#41285](https://github.com/openclaw/openclaw/issues/41285) | Control UI "disconnected (4008)" — gateway token auth failures | Under investigation |
| 🔴 **Critical** | [#40818](https://github.com/openclaw/openclaw/issues/40818) | `config.get` throws `RangeError: Invalid string length` — breaks Agents page | Under investigation |
| 🟠 **High** | [#39907](https://github.com/openclaw/openclaw/issues/39907), [#41445](https://github.com/openclaw/openclaw/issues/41445), [#41690](https://github.com/openclaw/openclaw/issues/41690) | **Kimi K2.5 model failures** — config validation errors + tool calls emit as text | PR [#43623](https://github.com/openclaw/openclaw/pull/43623), [#43138](https://github.com/openclaw/openclaw/pull/43138) open |
| 🟠 **High** | [#42270](https://github.com/openclaw/openclaw/issues/42270) | Empty agent payloads + WebSocket 1006 closures with LM Studio | Under investigation |
| 🟡 **Medium** | [#41083](https://github.com/openclaw/openclaw/issues/41083) | XAI requests always timeout | Under investigation |

### Stability Assessment
The **2026.3.8 release introduced significant regressions**, particularly in:
- Cron job execution (multiple deadlock scenarios)
- Kimi model integration
- Gateway authentication flow
- Control UI connectivity

**Users on 2026.3.7 or earlier should consider waiting for 2026.3.9 before upgrading if they rely on cron jobs or Kimi models.**

---

## Feature Requests & Roadmap Signals

### Active Feature Requests

| Issue | 👍 Votes | Feature | Likelihood |
|-------|----------|---------|------------|
| [#26534](https://github.com/openclaw/openclaw/issues/26534) | 12 | DingTalk as first-install channel option | **High** — implementation exists, needs UI wiring |
| [#28744](https://github.com/openclaw/openclaw/issues/28744) | 0 | Image vision support for agents (Feishu/MiniMax) | Medium — architectural change required |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | 1 | Prebuilt Android APK releases | Medium — CI/CD enhancement |
| [#9899](https://github.com/openclaw/openclaw/issues/9899) | 4 | Day of week in system prompt datetime | **High** — simple fix, high impact |
| [#28930](https://github.com/openclaw/openclaw/issues/28930) | 0 | Memory v2: associative traversal, salience weighting | Low — research/experimental phase |
| [#39979](https://github.com/openclaw/openclaw/issues/39979) | 0 | Path-scoped RWX permissions for exec/file tools | Medium — security enhancement |

### Predictions for Next Release
1. **DingTalk onboarding** likely to land (already implemented, needs config exposure)
2. **Day-of-week datetime injection** is a quick win
3. **Kimi model fixes** are prioritized given multiple related issues
4. **Cron deadlock fixes** will be cherry-picked as hotfix

---

## User Feedback Summary

### Pain Points
1. **"My cron jobs silently fail"** — Multiple users report cron jobs showing `enqueued: true` but never executing. This is a trust-eroding bug for automation use cases.
2. **"Kimi model doesn't work"** — Chinese users relying on Kimi K2.5 are blocked by validation errors and broken tool calls.
3. **"I can't connect to my own gateway"** — Authentication token issues causing Control UI disconnections.
4. **"Session context grows until API limits hit"** (#13938) — No automatic context trimming causes silent failures.

### Positive Signals
- Active community engagement (500 issues/PRs in 24h)
- Fast maintainer response to regressions
- Rich ecosystem integration (Feishu, DingTalk, Signal, Discord, WhatsApp, Telegram)
- Innovative uses like "AI dating platform" (#42938) showcase platform flexibility

### Use Cases Emerging
- **Long-running autonomous agents** (memory management is critical)
- **Enterprise messaging integration** (DingTalk, Feishu demand)
- **Local model deployment** (LM Studio, Ollama compatibility issues)
- **Scheduled automation** (cron reliability is essential)

---

## Backlog Watch

### Long-Unanswered Critical Items

| Issue | Age | Status | Concern |
|-------|-----|--------|---------|
| [#3092](https://github.com/openclaw/openclaw/issues/3092) | ~6 weeks | Stale | Session lock timeout during long operations — affects reliability |
| [#18282](https://github.com/openclaw/openclaw/issues/18282) | ~4 weeks | Open | GPT-5.2 reasoning items cause recurring 400 errors — blocks OpenAI advanced models |
| [#8367](https://github.com/openclaw/openclaw/issues/8367) | ~6 weeks | Stale | GitHub Copilot Claude models return "not supported" |
| [#8366](https://github.com/openclaw/openclaw/issues/8366) | ~6 weeks | Open | GitHub Copilot GPT-5+ fails with 421 routing error |
| [#25692](https://github.com/openclaw/openclaw/issues/25692) | ~3 weeks | Closed | "Tool not found" after gateway restart — **was closed but may need verification** |
| [#13938](https://github.com/openclaw/openclaw/issues/13938) | ~4 weeks | Open | Infinite session context growth — **no maintainer response** |

### PRs Needing Review
| PR | Size | Days Open | Description |
|----|------|-----------|-------------|
| [#41345](https://github.com/openclaw/openclaw/pull/41345) | XL | 3 | Backup encrypted snapshot flow |
| [#41496](https://github.com/openclaw/openclaw/pull/41496) | XL | 3 | Plugin media provider hooks |
| [#43016](https://github.com/openclaw/openclaw/pull/43016) | XL | 1 | HarmonyOS node app |

---

**Summary**: OpenClaw is experiencing growing pains with the 2026.3.8 release. While the project shows healthy community engagement and rapid maintainer response, users should **wait for 2026.3.9** if they depend on cron jobs or Kimi models. The backlog contains several high-impact items that deserve prioritization, particularly around session management and OpenAI/GitHub Copilot advanced model support.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Analysis Report
**Date:** 2026-03-12 | **Analyst:** Senior AI Agent Ecosystem Analyst

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is experiencing **intense hypergrowth and fragmentation**, with 11+ active projects collectively processing over 1,000 issues and PRs daily. Projects are rapidly converging on a core feature set—multi-channel messaging (Telegram, Discord, Feishu, WeChat), local LLM support (Ollama, LM Studio), and Model Context Protocol (MCP) integration—while differentiating on architecture (monolithic vs. modular), target market (China vs. global), and deployment complexity. The ecosystem shows clear stratification between **enterprise-focused platforms** (OpenClaw, CoPaw), **lightweight/personal assistants** (NanoClaw, ZeptoClaw), and **research/experimental frameworks** (TinyClaw/TinyAGI, Moltis). A notable trend is the emergence of "Claw" branding across multiple independent projects, suggesting either a shared ancestral codebase or successful open-source meme status.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Tier |
|---------|-------------|-----------|----------|--------------|------|
| **OpenClaw** | 500 | 500 | None (3.8 stable) | 🟡 Moderate | Reference |
| **NanoBot** | 54 | 89 | None | 🟢 Healthy | Mature |
| **ZeroClaw** | 50 | 50 | 2 (beta.28, beta.30) | 🟢 Healthy | Growing |
| **PicoClaw** | 16 | 103 | 3 (v0.2.2 + nightlies) | 🟢 Very Healthy | Rapid Growth |
| **NanoClaw** | 16 | 40 | None | 🟢 Healthy | Active |
| **IronClaw** | ~35 | ~40 | v0.18.0 (yesterday) | 🟡 Moderate | Growth |
| **LobsterAI** | 11 | 11 | v0.2.3 | 🟡 Moderate | Emerging |
| **TinyClaw** | 9 | 6+ | v0.0.10 | 🟢 Healthy | Emerging |
| **Moltis** | 32 | 25 | None | 🟡 Moderate | Experimental |
| **CoPaw** | 50 | 50 | None | 🟡 Moderate | Growing |
| **ZeptoClaw** | 14 | 13 | 2 (v0.7.5, v0.7.6) | 🟢 Very Healthy | Mature |
| **EasyClaw** | 2 | 1 | v1.6.6 | 🟢 Healthy | Stable |

**Health Score Criteria:** 🟢 = Active merges, responsive triage, stable releases | 🟡 = High volume but quality/stability concerns

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw Advantage | Peer Comparison |
|-----------|-------------------|-----------------|
| **Ecosystem Size** | 500 issues/PRs daily (10x most peers) | Largest community by volume |
| **Channel Breadth** | Feishu, DingTalk, Signal, Discord, WhatsApp, Telegram | Most comprehensive IM integration |
| **Enterprise Features** | Cron scheduling, gateway auth, backup/restore | Only IronClaw and CoPaw comparable |
| **Model Hub Support** | Model Hub (China), Kimi, Claude, GPT | Broadest provider ecosystem |

### Technical Approach Differences
- **Monolithic Core:** OpenClaw maintains a tightly integrated core vs. TinyClaw's workspaces monorepo or Moltis's federated node approach
- **Release Velocity:** Rapid releases (2026.3.8) but with regressions vs. ZeptoClaw's disciplined security-first iterations
- **Configuration:** Complex multi-provider setup vs. NanoClaw's token-optimized, cost-conscious approach

### Community Size Comparison
```
OpenClaw:    ████████████████████████████████████████ (500/day - Reference)
PicoClaw:    ████████ (103/day)
NanoBot:     ███████ (89/day)
CoPaw:       ████ (50/day)
Others:      ██-███ (10-40/day)
```

**Assessment:** OpenClaw is the ecosystem reference implementation but is experiencing **scaling pains** with quality assurance. Projects like ZeptoClaw and PicoClaw are capturing mindshare through stability and rapid iteration.

---

## 4. Shared Technical Focus Areas

### A. Token Cost Optimization (Critical Trend)
| Project | Signal | Approach |
|---------|--------|----------|
| **NanoClaw** | PR #988 | Inline compaction within context window |
| **NanoBot** | PR #47 | Auto-summarization at 40 messages |
| **CoPaw** | Issue #1243 | `/compact` command (broken) |
| **OpenClaw** | Issue #13938 | Infinite context growth (unaddressed) |

**Emerging Requirement:** Zero-overhead context management without external API calls.

### B. Local LLM Integration (Ollama, vLLM, LM Studio)
| Project | Status | Key Issue |
|---------|--------|-----------|
| **ZeptoClaw** | ✅ Fixed | Keyless auth for local (PR #316) |
| **PicoClaw** | 🟡 Partial | Groq API formatting failures |
| **ZeroClaw** | 🔴 Broken | Ollama+Qwen tool-calling regression |
| **NanoBot** | 🟡 Confusion | Ollama vs. vLLM architecture |
| **Moltis** | ✅ Fixed | MLX token stripping (PR #397) |

**Emerging Requirement:** Provider-agnostic tool calling protocol.

### C. Multi-Channel Messaging (China Focus)
| Channel | Projects Supporting |
|---------|-------------------|
| **Feishu/Lark** | OpenClaw, ZeroClaw, CoPaw, LobsterAI |
| **DingTalk** | OpenClaw (high demand), LobsterAI, CoPaw |
| **WeChat** | NanoBot (requested), LobsterAI |
| **QQ Bot** | NanoClaw, CoPaw (NapCat), LobsterAI |

**Emerging Requirement:** First-class Chinese enterprise IM integration with proper naming/discoverability.

### D. Model Context Protocol (MCP)
| Project | MCP Status |
|---------|------------|
| **PicoClaw** | Fixed in agent mode (nightly) |
| **Moltis** | Configurable timeout, remote URLs (PRs #416, #419) |
| **OpenClaw** | Session issues |
| **NanoClaw** | Env var leakage (Issue #960) |

**Emerging Requirement:** MCP as the standard tool-calling protocol across providers.

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architecture | Key Differentiator |
|---------|--------------|-------------|--------------|-------------------|
| **OpenClaw** | Full-stack enterprise | Enterprises, power users | Monolithic | Comprehensive channel/provider support |
| **ZeptoClaw** | Security-first | Compliance/enterprise | Rust CLI | Audit trails, hardened boundaries |
| **PicoClaw** | Multi-agent teams | Developers, researchers | Modular (Teams) | Agent orchestration, nightlies |
| **NanoClaw** | Cost optimization | Budget-conscious | Lightweight | Token efficiency, inline compaction |
| **IronClaw** | Migration/import | OpenClaw refugees | Podman/Docker | OpenClaw data import |
| **CoPaw** | Enterprise UI | Corporate IT | Web Console | Multi-channel management UI |
| **LobsterAI** | China localization | Chinese SMBs | Desktop app | Native DingTalk/QQ/WeChat |
| **TinyClaw** | Multi-agent research | Researchers | NPM workspaces | SQLite queue, no Redis |
| **Moltis** | Distributed agents | Advanced users | Federated nodes | Node-advertised tools (RFC #391) |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (High Velocity)
- **PicoClaw:** 3 releases/day, 41 merged PRs — exceptional dev speed
- **ZeptoClaw:** 2 releases, 13 merged PRs, zero open issues — disciplined security shipping
- **IronClaw:** 33 merged PRs via CI/CD automation

### Tier 2: Active but Quality Concerns
- **OpenClaw:** Highest volume but 2026.3.8 regressions damaging trust
- **CoPaw:** Active community but 36 open vs 14 closed issues (triage backlog)
- **Moltis:** High PR volume (25) but mostly single contributor

### Tier 3: Stabilizing
- **NanoBot:** Steady 65% merge rate, balanced issue resolution
- **ZeroClaw:** Infrastructure focus (branch migration), 36 open PRs suggest review bottleneck
- **NanoClaw:** Feature consolidation phase, major architectural PRs pending

### Tier 4: Niche/Stable
- **EasyClaw:** Low activity, maintenance mode
- **LobsterAI:** Feature shipping but performance complaints

---

## 7. Trend Signals

### A. Security Hardening is Maturing
**Signal:** ZeptoClaw's same-day P1/P2 fixes, filesystem boundary validation, webhook auth hardening
**Implication:** Enterprise adoption requires compliance-grade security. Projects without sandboxing (NanoBot Issue #1873) will face adoption barriers.

### B. Agent "Memory" is the Critical Bottleneck
**Signal:** 6+ projects have open issues about context/memory (OpenClaw #13938, CoPaw #1243, TinyClaw #66, LobsterAI #186)
**Implication:** Long-term agent autonomy requires **semantic memory** (LanceDB in NanoClaw PR #979, Engram in PicoClaw #175), not just context windowing.

### C. China Market is a Strategic Priority
**Signal:** DingTalk integration high-demand across OpenClaw (48 comments), NanoBot, LobsterAI, CoPaw
**Implication:** Projects that don't localize for Chinese IM platforms and LLM providers (Kimi, GLM-4, Qwen) will miss the largest growth market.

### D. "Zero-Dependency" Deployment is Expected
**Signal:** TinyClaw removing Redis, Moltis simplifying Docker, ZeptoClaw keyless local auth
**Implication:** Users reject complex infrastructure. Single-binary or SQLite-backed deployments are the default expectation.

### E. Provider Agnosticism > Vendor Lock-in
**Signal:** 8+ projects supporting OpenAI-compatible endpoints, Ollama, or custom Anthropic proxies
**Implication:** The winning platforms will be **model-agnostic orchestrators**, not Claude/OpenAI-specific clients.

### F. Multi-Agent Orchestration is the Next Frontier
**Signal:** PicoClaw Teams (#976), TinyClaw teams package, Moltis node-advertised tools
**Implication:** Single-agent use cases are saturated. The competitive arena is now **coordinated agent swarms** with specialized sub-agents.

---

## Strategic Recommendations

| For | Recommendation |
|-----|----------------|
| **AI Agent Developers** | Build on MCP protocol; prioritize token optimization; support OpenAI-compatible endpoints |
| **Enterprise Adopters** | Consider ZeptoClaw (security) or PicoClaw (teams) over OpenClaw until 2026.3.9 stabilizes |
| **China Market Entry** | DingTalk + Feishu + Kimi/GLM support is table stakes |
| **OpenClaw Maintainers** | Prioritize cron deadlock fixes, context management, and QA before new features |

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-03-12

## 1. Today's Overview
NanoBot demonstrates **high velocity** development activity with 89 pull requests updated and 54 issues processed in the last 24 hours. The project is in an active iteration phase, evidenced by a merge rate of ~65% (58 closed/merged PRs) and a balanced issue resolution ratio (26 closed vs 28 open). The community is highly engaged, focusing heavily on **model provider compatibility** (Zhipu AI, Ollama, Groq) and **communication channel expansion** (Telegram, Discord, WeChat, Matrix). Despite the lack of a formal tagged release today, the volume of merged bug fixes and enhancement PRs suggests the team is likely preparing for a stability-focused minor release.

## 2. Releases
No new official releases were published today. The community continues to reference version `v0.1.4.post3` as the latest stable benchmark.

## 3. Project Progress
Significant advancements were merged into the main branch, focusing on stability and extensibility:

*   **Context & Memory Management:**
    *   [PR #1909](https://github.com/HKUDS/nanobot/pull/1909) (Merged): Fixed a critical memory consolidation bug where LLMs could skip the `save_memory` tool call by forcing `tool_choice="required"`.
    *   [PR #1894](https://github.com/HKUDS/nanobot/pull/1894) (Merged): Corrected a `get_history` slicing error where `max_messages=0` incorrectly returned the entire history instead of an empty list.
    *   [PR #47](https://github.com/HKUDS/nanobot/pull/47) (Merged): Implemented automatic session summarization to prevent context window overflow when sessions exceed 40 messages.
*   **Model Provider Support:**
    *   [PR #41](https://github.com/HKUDS/nanobot/pull/41) (Merged): Added support for custom Anthropic-compatible API endpoints (e.g., for MiniMax or proxy services).
    *   [PR #1901](https://github.com/HKUDS/nanobot/pull/1901) (Open): Proposed filtering `image_url` content at the provider layer for non-vision models, moving away from session-level filtering.
*   **Configuration & Tools:**
    *   [PR #1906](https://github.com/HKUDS/nanobot/pull/1906) (Merged): Added configurable truncation for `exec` tool output (`max_output` and `truncate_mode`) to prevent context flooding.
    *   [PR #1581](https://github.com/HKUDS/nanobot/pull/1581) (Merged): Introduced multi-instance support via the `--config` parameter, enabling isolated deployments for multi-tenant scenarios.
    *   [PR #44](https://github.com/HKUDS/nanobot/pull/44) (Merged): Improved cross-platform installation documentation for the `uv` package manager.

## 4. Community Hot Topics
*   **Chinese Localization (Language & Platforms):** There is strong demand for full Chinese support.
    *   [Issue #1617](https://github.com/HKUDS/nanobot/issues/1617) (10 comments): Users are requesting Chinese documentation (README).
    *   [Issue #1819](https://github.com/HKUDS/nanobot/issues/1819) (5 comments): High demand for **WeChat APP** integration, cited as "critical for Chinese users."
*   **Local LLM Support:** Users are actively trying to decouple from cloud providers.
    *   [Issue #193](https://github.com/HKUDS/nanobot/issues/193) (13 comments): Confusion and feature requests regarding **Ollama** integration vs. the currently supported vLLM.
    *   [Issue #855](https://github.com/HKUDS/nanobot/issues/855) (9 comments): Detailed user experience running NanoBot locally with LMStudio, highlighting performance struggles on consumer hardware (RTX 3050).
*   **Cloud Provider Diversity:**
    *   [Issue #2](https://github.com/HKUDS/nanobot/issues/2) (19 comments): Continued interest in native **Zhipu AI (GLM-4.x)** support.

## 5. Bugs & Stability
*   **Critical Security Risk:** [Issue #1873](https://github.com/HKUDS/nanobot/issues/1873) reports that NanoBot's agent loop can access `config.json` via `exec()`, potentially leaking API keys. The user suggests sandboxing the agent loop. **(No fix PR linked yet)**.
*   **Stability Regressions:**
    *   [Issue #1833](https://github.com/HKUDS/nanobot/issues/1833): Frequent crashes with `SIGTERM` signals during operation.
    *   [Issue #1577](https://github.com/HKUDS/nanobot/issues/1577) (Fixed in commit): `AttributeError: module 'signal' has no attribute 'SIGHUP'` on the main branch (likely Windows incompatibility).
*   **Functional Bugs:**
    *   [Issue #1905](https://github.com/HKUDS/nanobot/issues/1905): Skill content loaded via `read_file` is truncated to 500 characters, breaking complex multi-turn skills.
    *   [Issue #1557](https://github.com/HKUDS/nanobot/issues/1557): Feishu (Lark) channel crashing with "Event loop is already running."
    *   [Issue #1300](https://github.com/HKUDS/nanobot/issues/1300): Matrix channel fails to start.

## 6. Feature Requests & Roadmap Signals
Based on open issues and PR activity, the following features are likely priorities:
1.  **Provider Expansion:** Native integrations for **Zhipu AI**, **Ollama**, and **Aliyun Coding Plan** are highly requested. [PR #41](https://github.com/HKUDS/nanobot/pull/41) (Anthropic endpoints) sets a precedent for custom provider endpoints.
2.  **Channel Expansion:** **Discord** ([Issue #123](https://github.com/HKUDS/nanobot/issues/123)) and **WeChat** ([Issue #1819](https://github.com/HKUDS/nanobot/issues/1819)) are the top requested platforms. A zero-NPM Web UI is also pending in [PR #1707](https://github.com/HKUDS/nanobot/pull/1707).
3.  **Voice Capabilities:** [Issue #1106](https://github.com/HKUDS/nanobot/issues/1106) requests voice-to-voice interaction loops.
4.  **Telegram Enhancements:** [PR #1900](https://github.com/HKUDS/nanobot/pull/1900) (Open) adds support for `reply_to_message` context, improving conversational awareness.

## 7. User Feedback Summary
*   **Pain Points:** Users find local deployment difficult ([Issue #855](https://github.com/HKUDS/nanobot/issues/855)), configuration of custom providers (Groq/OpenRouter) error-prone ([Issue #25](https://github.com/HKUDS/nanobot/issues/25)), and the lack of Chinese documentation/platform integration a major barrier ([Issue #1617](https://github.com/HKUDS/nanobot/issues/1617)).
*   **Satisfaction:** The project is described as a "Good project" ([Issue #1819](https://github.com/HKUDS/nanobot/issues/1819)), but users emphasize that it needs to be "easier to secure" ([Issue #1873](https://github.com/HKUDS/nanobot/issues/1873)) and more stable (complaints about `SIGTERM` crashes).
*   **Use Cases:** Users are attempting to run NanoBot as a personal assistant on mid-range gaming laptops and deploy it as a multi-tenant service for teams ([PR #1581](https://github.com/HKUDS/nanobot/pull/1581)).

## 8. Backlog Watch
*   **Security Architecture:** [Issue #1873](https://github.com/HKUDS/nanobot/issues/1873) (API Key Leakage risk) requires architectural input from maintainers regarding sandboxing.
*   **OpenRouter Compatibility:** [Issue #1157](https://github.com/HKUDS/nanobot/issues/1157) & [Issue #842](https://github.com/HKUDS/nanobot/issues/842) report persistent 400/401 errors with OpenRouter, affecting reliability for users relying on model aggregation.
*   **Docker Automation:** [PR #126](https://github.com/HKUDS/nanobot/pull/126) (Docker build actions) remains open; merging this would significantly ease deployment for the community.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-03-12

## 1. Today's Overview
ZeroClaw demonstrates **high velocity** with significant infrastructure updates and active community engagement. The project released two new beta versions (v0.1.7-beta.28 and v0.1.7-beta.30), primarily focused on CI/CD simplification and a strategic migration to a single `master` branch model. Activity levels are robust, with 50 issues and 50 PRs updated in the last 24 hours. However, the high volume of open PRs (36) against merged ones (14) suggests a bottleneck in review throughput or a surge in external contributions that the core team is processing.

## 2. Releases

### **v0.1.7-beta.30** & **v0.1.7-beta.28**
The latest releases focus on project infrastructure rather than user-facing features.
*   **CI/CD Overhaul:** Replaced existing workflows with a simplified pipeline ([PR #2895](https://github.com/zeroclaw-labs/zeroclaw/pull/2895)).
*   **Branch Strategy:** Migrated to a single `master` branch model to streamline maintenance ([PR #2928](https://github.com/zeroclaw-labs/zeroclaw/pull/2928)).
*   **Migration Note:** Users and contributors should ensure they are tracking the `master` branch, as the legacy `main` branch is now considered stale and is scheduled for deletion.

## 3. Project Progress

**Merged/Closed PRs (14 total):**
While specific merged PR details beyond the release notes are limited in the provided data set, the closure of 29 issues indicates a responsive triage process. Key merged work includes the cleanup of the stale `main` branch ([Issue #3061](https://github.com/zeroclaw-labs/zeroclaw/issues/3061)) and various bug fixes that have been backported or resolved in the beta releases.

**Open PRs Advancing Features (36 total):**
The community is actively contributing major features:
*   **New Providers:** Support for **Azure OpenAI** ([PR #3246](https://github.com/zeroclaw-labs/zeroclaw/pull/3246), [PR #3007](https://github.com/zeroclaw-labs/zeroclaw/pull/3007)) and **Alibaba Cloud Bailian** ([PR #3158](https://github.com/zeroclaw-labs/zeroclaw/pull/3158)).
*   **UI Enhancements:** Auto-expanding chat composer ([PR #3185](https://github.com/zeroclaw-labs/zeroclaw/pull/3185)) and per-message copy buttons ([PR #3178](https://github.com/zeroclaw-labs/zeroclaw/pull/3178)).
*   **Security & Config:** Fixes for channel secret encryption/decryption ([PR #3255](https://github.com/zeroclaw-labs/zeroclaw/pull/3255), [PR #3256](https://github.com/zeroclaw-labs/zeroclaw/pull/3256)) and a path traversal vulnerability patch in Rollup ([PR #3258](https://github.com/zeroclaw-labs/zeroclaw/pull/3258)).

## 4. Community Hot Topics

*   **[Issue #3012] channel-lark feature misnamed:** (9 comments, 1 reaction)
    Users are confused by the `channel-lark` feature name when trying to integrate **Feishu**. The feature is not enabled by default and lacks documentation, creating a barrier for Chinese users.
    *Underlying Need:* Better discoverability and localization for the Feishu integration. A fix is proposed in [PR #3105](https://github.com/zeroclaw-labs/zeroclaw/pull/3105).
    [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/3012)

*   **[Issue #3070] GLIBC_2.39 not found:** (9 comments, 2 reactions)
    Users on older Linux distributions cannot run the pre-built binaries due to a `GLIBC_2.39` dependency mismatch. This is blocking deployment for users on standard enterprise Linux versions.
    *Underlying Need:* Broader binary compatibility or static linking. A fix is being addressed in [PR #3257](https://github.com/zeroclaw-labs/zeroclaw/pull/3257).
    [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/3070)

*   **[Issue #2929] Branch strategy confusion:** (6 comments, 2 reactions)
    Contributors were confused by the discrepancy between `master` (default) and `main` references in docs. This issue was resolved by the migration to the single `master` branch model in the latest release.
    [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/2929)

## 5. Bugs & Stability

*   **S0 - Critical (Runtime):**
    *   **[Issue #3070] GLIBC Error:** Binary incompatibility on Linux systems. ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/3070)) | **Fix:** [PR #3257](https://github.com/zeroclaw-labs/zeroclaw/pull/3257).
*   **S1 - Blocker (Deployment):**
    *   **[Issue #3207] Docker Build Fail:** Rust 1.94 bump breaking Docker builds. ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/3207)) | Status: Closed (likely rolled back).
    *   **[Issue #2930] MacOS Docker Init:** `Unbound variable` error in bootstrap script. ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/2930)).
    *   **[Issue #2947] Web Config Save:** HTTP 500 error when saving `config.toml` via WSL Docker. ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/2947)).
*   **S2 - Degraded Behavior:**
    *   **[Issue #2494] Feishu Connection Failure:** Config syntax issues preventing connection. ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/2494)).
    *   **[Issue #2953] Missing Matrix Feature:** Official builds missing the `channel-matrix` flag. ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/2953)).
    *   **[Issue #2960] Browser Pairing:** Pairing persistence broken, requiring re-pairing every session. ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/2960)).
*   **Security & Correctness:**
    *   **[Issue #3083] API Key Leakage:** Embedding provider incorrectly sends the default provider's key. ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/3083)).
    *   **[PR #3258] Vulnerability:** Patch for Rollup path traversal vulnerability. ([Link](https://github.com/zeroclaw-labs/zeroclaw/pull/3258)).

## 6. Feature Requests & Roadmap Signals

*   **MCP (Model Context Protocol) Integration:** Strong signal for expanding MCP support, including on-demand loading ([Issue #3095](https://github.com/zeroclaw-labs/zeroclaw/issues/3095)) and exposing tools to subagents ([Issue #3069](https://github.com/zeroclaw-labs/zeroclaw/issues/3069)).
*   **Cloud Provider Expansion:** High demand for **Azure OpenAI** ([Issue #3176](https://github.com/zeroclaw-labs/zeroclaw/issues/3176), [Issue #3059](https://github.com/zeroclaw-labs/zeroclaw/issues/3059) for Aliyun). With PRs already open, these are likely to land in the next release.
*   **Granular Control:** Request for context-aware tool allow-lists ([Issue #2355](https://github.com/zeroclaw-labs/zeroclaw/issues/2355)), moving away from global permissions.
*   **Internationalization (i18n):** Specific request for Chinese language support in the WebUI ([Issue #3152](https://github.com/zeroclaw-labs/zeroclaw/issues/3152)).

## 7. User Feedback Summary
Users are enthusiastic about the project's breadth (supporting Feishu, Matrix, Ollama) but frustrated by **deployment friction**.
*   **Pain Points:** The GLIBC mismatch creates a "doesn't work out of the box" experience for Linux users. Configuration handling (specifically regarding Feishu/Lark naming and file encryption) is a recurring source of confusion.
*   **Satisfaction:** Users appreciate the "Claw" ecosystem tools (e.g., a user built an uninstaller, [Issue #3169](https://github.com/zeroclaw-labs/zeroclaw/issues/3169)), indicating a loyal power-user base.
*   **Use Cases:** Heavy usage in automated environments (Docker/K8s) and integration with local LLMs (Ollama/Qwen), though the latter has reported regressions in tool-calling stability ([Issue #3079](https://github.com/zeroclaw-labs/zeroclaw/issues/3079)).

## 8. Backlog Watch
*   **[Issue #2930] MacOS Docker Bootstrap Error:** A workflow-blocking issue open since March 6 with no apparent assignee or PR fix yet. High priority for developer onboarding. ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/2930))
*   **[Issue #3079] Ollama+Qwen Regression:** Significant regression in local LLM tool-calling capabilities. While closed, users may reopen if not fully resolved in beta. ([Link](https://github.com/zeroclaw-labs/zeroclaw/issues/3079))
*   **[PR #3212] Webhook Audit Hook:** A security-relevant feature PR that needs review. ([Link](https://github.com/zeroclaw-labs/zeroclaw/pull/3212))

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-03-12

## 1. Today's Overview
PicoClaw demonstrates **extremely high active development velocity** today, characterized by 103 pull request updates and 3 concurrent releases (v0.2.2 stable and two nightly tracks). The project is in a **feature consolidation phase**, aggressively merging bug fixes and refining the UI/Web experience while iterating on the core "Agent" architecture. With 16 open issues against 62 open PRs, the ratio suggests maintainers are prioritizing code integration over triage, likely preparing for a broader stable rollout of the v0.2.x series.

## 2. Releases
Three releases were published today, indicating rapid iteration:

*   **[v0.2.2](https://github.com/sipeed/picoclaw/releases/tag/v0.2.2) (Stable)**
    *   **Key Changes**: Adds web settings support for `exec allow_remote`, merges voice transcription features (#1214), and stabilization fixes.
    *   **Migration Note**: Administrators using the Web UI can now configure remote execution permissions directly via the settings interface.
*   **[v0.2.2-nightly.20260312.6612ca09](https://github.com/sipeed/picoclaw/releases/tag/v0.2.2-nightly.20260312.6612ca09) (Nightly)**
    *   **Key Changes**:
        *   **Matrix Channel**: Enabled rich-text messages (#1370).
        *   **New Provider**: Added `LongCat` model provider support (#1317).
        *   **Agent Core**: Fixed initialization of MCP (Model Context Protocol) in direct agent mode.
    *   **Warning**: Automated build; may be unstable.

## 3. Project Progress
Today saw **41 merged/closed PRs**, focusing heavily on stability and user experience:

*   **Agent Architecture**: Continued progress on multi-agent systems with the "Teams" architecture PR (#976) seeing activity, aiming to enable coordinator agents delegating tasks to specialized sub-agents.
*   **Web UI & UX**: Merged fixes for horizontal scrolling in the JSON editor (#1386) and restoration of the last active chat session (#1385), directly addressing user complaints about lost context.
*   **Documentation & Cleanup**: Removed stale `TOOLS.md` references (#1388) and fixed workspace template embedding for clean checkouts (#1393).
*   **Channels**: Implemented a stop mechanism for stale typing loops in channels (#1392), improving UI responsiveness.

## 4. Community Hot Topics
The community is focused on architectural transparency and extensibility:

1.  **[Agent Refactor: What is an Agent? (#1218)](https://github.com/sipeed/picoclaw/issues/1218)**
    *   **Activity**: 13 comments.
    *   **Analysis**: This proposal to standardize Agent definition via `SOUL.md` (personality) and `AGENT.md` (structure) files is gaining traction. It signals a user desire for **modular, shareable agent personalities** decoupled from hard-coded logic.
2.  **[Event-driven Agent Loop (#1316)](https://github.com/sipeed/picoclaw/issues/1316)**
    *   **Activity**: 7 comments.
    *   **Analysis**: Users and contributors are pushing to dismantle the "black box" agent loop. The request for hooks, interrupts, and steering indicates a sophisticated use case where external systems (dashboards, orchestrators) need real-time control over the agent's thought process.
3.  **[Groq API Compatibility (#748)](https://github.com/sipeed/picoclaw/issues/748)**
    *   **Activity**: 6 comments (Reopened/Active).
    *   **Analysis**: Persistent pain point regarding tool call formatting. The Groq API rejects the model's native function format, causing hard failures. This highlights the friction in supporting diverse LLM providers with non-standard tooling protocols.

## 5. Bugs & Stability
Stability is the primary focus of the current patch cycle, with several high-priority bugs identified and fixes merged:

*   **[P0: MCP Not Working in Agent Mode (#1299)](https://github.com/sipeed/picoclaw/issues/1299)**
    *   **Status**: Closed (Fixed in Nightly).
    *   **Summary**: The `picoclaw agent` command was completely ignoring MCP tools.
    *   **Fix**: Addressed in release v0.2.2-nightly.20260312.6612ca09.
*   **[P1: Tool Calling Fails (JSON Unmarshal Error) (#1287)](https://github.com/sipeed/picoclaw/issues/1287)**
    *   **Status**: Closed.
    *   **Summary**: Generic failure in parsing tool call arguments.
*   **[P2: Telegram Typing Indicator Hangs (#1323 / PR #1390)](https://github.com/sipeed/picoclaw/pull/1390)**
    *   **Status**: Fix Merged.
    *   **Summary**: If the LLM timed out, the "typing..." indicator would run indefinitely.
*   **[P3: Firefox UI Collapse (#1364)](https://github.com/sipeed/picoclaw/issues/1364)**
    *   **Status**: Open.
    *   **Summary**: The JSON config textarea collapses to 200px height in Firefox (works in Chrome/Safari).
*   **[P3: Docker Manifest Missing (#1350)](https://github.com/sipeed/picoclaw/issues/1350)**
    *   **Status**: Open.
    *   **Summary**: `sipeed/picoclaw-launcher` image manifest not found during `docker compose up`.

## 6. Feature Requests & Roadmap Signals
The roadmap shows a trend toward **multi-modality** and **ecosystem expansion**:

*   **[GitHub Copilot Integration (#1347)](https://github.com/sipeed/picoclaw/issues/1347)**: Request for native Device Code Authentication to use Copilot as a backend provider. High value for developer-focused workflows.
*   **[Telegram Realtime Streaming (#1098)](https://github.com/sipeed/picoclaw/issues/1098)**: Request to support Telegram's new streaming API for token-by-token responses.
*   **[Engram Persistent Memory (#175)](https://github.com/sipeed/picoclaw/issues/175)**: Proposal to move beyond `MEMORY.md` files to a searchable database backend (Engram) for long-term agent memory.
*   **[Agent Teams (#976)](https://github.com/sipeed/picoclaw/pull/976)**: A massive open PR implementing multi-agent orchestration. This is likely a **top priority for the next major version**.

## 7. User Feedback Summary
*   **Pain Points**: Users are frustrated by **brittle provider compatibility** (specifically Groq and Volcengine SSL issues) and **Web UI state management** (chat history resetting, JSON editors breaking).
*   **Use Cases**: There is significant interest in **Headless/CLI agent usage** (issues with MCP in agent mode) and **Self-Hosting** (Docker compose issues, config race conditions).
*   **Sentiment**: Generally positive regarding the pace of fixes (users seeing issues closed within 24h), but concerned about architectural rigidity (requests for event-driven loops).

## 8. Backlog Watch
*   **[Agent Teams PR (#976)](https://github.com/sipeed/picoclaw/pull/976)**: Open since March 2nd, this massive feature PR needs urgent review/merging as it blocks complex orchestration use cases.
*   **[Replace Hard Iteration Limit (#440)](https://github.com/sipeed/picoclaw/issues/440)**: Open since Feb 18th. Users are hitting the `max_tool_iterations: 20` wall during legitimate complex tasks. This requires an architectural fix (context-window bounding) rather than a simple config change.
*   **[Config Race Condition (#1151)](https://github.com/sipeed/picoclaw/issues/1151)**: High-priority bug involving read-modify-write races in the TUI/Config system. Still open and affects reliability.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-12

## 1. Today's Overview
NanoClaw demonstrates **extremely high activity** with 40 pull requests updated in the last 24 hours (33 open) and 16 issues updated. The project is in a phase of rapid community-driven expansion, focusing heavily on **token optimization**, **alternative agent engines**, and **new communication channels**. While no official releases occurred today, the volume of feature PRs suggests a significant consolidation release may be approaching. The high PR count relative to issues indicates a healthy, contribution-heavy community.

## 2. Releases
No new releases were recorded for 2026-03-12. The latest development activity is concentrated in the `main` branch via open Pull Requests.

## 3. Project Progress
Significant advancements were made in performance optimization and platform extensibility:

*   **Token Optimization Strategy:** A comprehensive "Smart Token Cost Reduction" initiative (tracked in closed Issue [#983](https://github.com/qwibitai/nanoclaw/issues/983)) has resulted in PR [#988](https://github.com/qwibitai/nanoclaw/pull/988). This feature implements "Inline Compaction" to reduce token costs by summarizing history within the context window, rather than using separate API calls.
*   **Session Stability:** PR [#987](https://github.com/qwibitai/nanoclaw/pull/987) addresses critical memory management for long-running sessions, introducing rotation and "pre-death memory flush" to prevent crashes when session transcripts grow too large (observed at 55MB).
*   **Authentication Reliability:** Progress on fixing OAuth token refresh issues continued with PR [#969](https://github.com/qwibitai/nanoclaw/pull/969), which adds locking and caching mechanisms to prevent race conditions during token renewal.
*   **New Channel Support:** Developers are expanding reach with PRs for **Discord** (vision/voice in [#974](https://github.com/qwibitai/nanoclaw/pull/974)), **QQ Bot** ([#966](https://github.com/qwibitai/nanoclaw/pull/966), [#836](https://github.com/qwibitai/nanoclaw/pull/836)), and **Telegram Reactions** ([#818](https://github.com/qwibitai/nanoclaw/pull/818)).

## 4. Community Hot Topics
*   **Token Economics (High Interest):** The most sophisticated discussion revolves around the **Token Optimization** proposals ([#983](https://github.com/qwibitai/nanoclaw/issues/983), [#980](https://github.com/qwibitai/nanoclaw/issues/980)). Users and contributors are deeply concerned about the cost of "unbounded context growth" and are devising "zero-overhead" solutions (e.g., injecting compression instructions into existing turns rather than new API calls).
*   **Security Architecture (High Priority):** Issue [#865](https://github.com/qwibitai/nanoclaw/issues/865) sparked a debate on container trust. The community argues that scripts should not live at the agent level, challenging the current "trusted container" assumption.
*   **Alternative Runtimes:** PR [#963](https://github.com/qwibitai/nanoclaw/pull/963) (OpenAI Codex SDK support) indicates strong user demand for decoupling the agent logic from the underlying LLM provider, moving NanoClaw toward a "model-agnostic" orchestrator.

## 5. Bugs & Stability
*   **Critical: No Response from Agent:** Issue [#958](https://github.com/qwibitai/nanoclaw/issues/958) reports a total failure to respond despite successful setup. This is a blocking usability bug requiring immediate attention.
*   **Critical: Environment Variable Leakage:** Issue [#960](https://github.com/qwibitai/nanoclaw/issues/960) reveals that MCP environment variables (e.g., tokens) are no longer passed to containers after a recent migration. **No fix PR is linked yet.**
*   **High: WhatsApp Message Flooding:** Bug [#732](https://github.com/qwibitai/nanoclaw/issues/732) reports streaming chunks flooding WhatsApp. A fix is proposed in PR [#965](https://github.com/qwibitai/nanoclaw/pull/965) (buffer output until completion).
*   **Medium: Setup Latency:** Users report setup is "incredibly slow" ([#973](https://github.com/qwibitai/nanoclaw/issues/973)), pointing to potential inefficiencies in the initialization scripts.

## 6. Feature Requests & Roadmap Signals
*   **Semantic Memory:** PR [#979](https://github.com/qwibitai/nanoclaw/pull/979) (LanceDB integration) suggests a shift from stateless interactions to persistent, searchable long-term memory for agents.
*   **Podman Support:** Issue [#957](https://github.com/qwibitai/nanoclaw/issues/957) requests Podman as a Docker alternative, specifically for rootless/daemonless benefits on macOS/Linux.
*   **Multi-Instance Support:** PR [#970](https://github.com/qwibitai/nanoclaw/pull/970) adds resource namespacing, signaling a roadmap towards multi-tenant or high-availability deployments.

## 7. User Feedback Summary
Users are technically sophisticated but currently frustrated by **deployment stability**.
*   **Pain Points:** The "setup" process is perceived as overly complex and fragile. The divergence between expected config (`.json`) and actual behavior causes confusion. The "silent failure" (agent runs but doesn't reply) erodes trust.
*   **Positive Signals:** The community is actively solving its own problems, contributing high-quality PRs for token optimization and memory management, indicating strong investment in the project's success.

## 8. Backlog Watch
*   **Needs Maintainer Attention:** PR [#963](https://github.com/qwibitai/nanoclaw/pull/963) (Codex SDK) and PR [#988](https://github.com/qwibitai/nanoclaw/pull/988) (Token Optimization) are substantial architectural changes that require core maintainer review.
*   **Unresolved Critical Bug:** Issue [#960](https://github.com/qwibitai/nanoclaw/issues/960) (MCP env vars not passed) needs a fix PR immediately, as it breaks existing integrations relying on `.env` interpolation.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-03-12

## 1. Today's Overview
IronClaw demonstrates **very high velocity** with an automated staging-to-main CI/CD pipeline driving 33 merged PRs in the last 24 hours. Activity is heavily focused on stability fixes, onboarding improvements, and extending platform compatibility (Linux musl fallback, Podman support). A new version **v0.18.0** was released yesterday. The project is in an active "bug bash" and stabilization phase, with community contributors submitting significant features like OpenClaw data import and memory system improvements.

## 2. Releases

### **v0.18.0** (Released 2026-03-11)
- **Promotion:** Latest staging changes promoted to main production branch.
- **Key Update:** Update to WASM `arti` (likely Tor/anonymous networking component).
- **Note:** No explicit breaking changes listed in the release notes, but multiple high-severity bugs reported against this version suggest caution for upgrading.

---

## 3. Project Progress

**Major Merged PRs:**
- **[#388](https://github.com/nearai/ironclaw/pull/388) feat: Import OpenClaw data:** Massive migration feature to import memory, history, settings, and credentials from OpenClaw installations.
- **[#551](https://github.com/nearai/ironclaw/pull/551) feat(sandbox): Support Podman:** Alternative to Docker for containerized sandbox execution.
- **[#262](https://github.com/nearai/ironclaw/pull/262) & [#203](https://github.com/nearai/ironclaw/pull/203):** Memory system overhaul—new embedding providers (Gemini), citation support, chunk size reduction (800→300 words) for improved recall.
- **[#737](https://github.com/nearai/ironclaw/pull/737) 汉化v0.1.0:** Chinese localization contributed by community.
- **[#455](https://github.com/nearai/ironclaw/pull/455):** DOMPurify sanitizer integration for web UI security.

**Open PRs Seeking Attention:**
- **[#1013](https://github.com/nearai/ironclaw/pull/1013):** Linux musl fallback installer for older glibc systems.
- **[#1011](https://github.com/nearai/ironclaw/pull/1011):** Bedrock credential validation fix.

---

## 4. Community Hot Topics

| Issue | Engagement | Summary |
|-------|------------|---------|
| **[#142](https://github.com/nearai/ironclaw/issues/142)** | 9 comments, 1 👍 | **NEAR AI Auth Friction:** User frustration about mandatory authentication. Reflects tension between project's commercial backing and open-source user expectations for self-hosting without external accounts. |
| **[#733](https://github.com/nearai/ironclaw/issues/733)** | 5 comments | **Ngrok Zombie Process:** Tunnel reliability issue affecting remote access deployments. |
| **[#840](https://github.com/nearai/ironclaw/issues/840)** | 4 comments | **WASM Tool Incompatibility:** Fresh installs fail due to WIT version mismatch (0.2.0 vs 0.3.0). Critical onboarding blocker. |
| **[#875](https://github.com/nearai/ironclaw/issues/875)** | 2 comments, 1 👍 | **Onboard Checksum Failure:** Dependency installation fails verification step. |

---

## 5. Bugs & Stability

### 🔴 Critical / High Severity
| Bug | Severity | Status | Fix PR |
|-----|----------|--------|--------|
| **[#875](https://github.com/nearai/ironclaw/issues/875)** Onboard fails dependency checksum | High | Closed | Likely addressed in v0.18.0 |
| **[#840](https://github.com/nearai/ironclaw/issues/840)** WASM WIT version mismatch on fresh install | High | Open | Under investigation |
| **[#1008](https://github.com/nearai/ironclaw/issues/1008)** Installer fails on Linux glibc < 2.35 | High | Open | **[#1013](https://github.com/nearai/ironclaw/pull/1013)** submitted |
| **[#1009](https://github.com/nearai/ironclaw/issues/1009)** Bedrock backend startup validation fail | High | Open | **[#1011](https://github.com/nearai/ironclaw/pull/1011)** submitted |

### 🟠 Medium Severity (Bug Bash Findings)
- **[#992](https://github.com/nearai/ironclaw/issues/992)**: Google OAuth URL malformed (`clientid` vs `client_id`) when initiated from Telegram
- **[#994](https://github.com/nearai/ironclaw/issues/994)**: Routine notifications to Telegram fail with invalid `chat_id='default'`
- **[#738](https://github.com/nearai/ironclaw/issues/738)**: Tunnel binds wrong port (3000 vs 8080), breaking webhooks
- **[#299](https://github.com/nearai/ironclaw/issues/299)**: Unable to configure MCP servers—JSON config not exposed
- **[#942](https://github.com/nearai/ironclaw/issues/942)**: Missing `User-Agent` header causes some LLM providers to reject requests

### 🟡 Low Severity / UX Issues
- **[#997](https://github.com/nearai/ironclaw/issues/997)**: "Error: Waiting for approval" misleading for normal pending states
- **[#1000](https://github.com/nearai/ironclaw/issues/1000)**: Rate limiter shows "retry after None" instead of duration
- **[#996](https://github.com/nearai/ironclaw/issues/996)**: Tool approval modal requires page reload

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Prediction |
|--------|--------|------------|
| **Podman sandbox support** | Merged PR [#551](https://github.com/nearai/ironclaw/pull/551) | ✅ Available in v0.18.0+ |
| **OpenClaw migration tooling** | Merged PR [#388](https://github.com/nearai/ironclaw/pull/388) | ✅ Available in v0.18.0+ |
| **MCP server configuration UI** | Issue [#299](https://github.com/nearai/ironclaw/issues/299) | Likely next minor release |
| **Optional/offline auth mode** | Issue [#142](https://github.com/nearai/ironclaw/issues/142) | Community demand high, may require architectural discussion |
| **Alibaba/Qwen coding plan support** | Issue [#1012](https://github.com/nearai/ironclaw/issues/1012) | Medium priority—OpenAI-compatible endpoint enhancement |

---

## 7. User Feedback Summary

**Pain Points:**
1. **Authentication friction** (#142): Users expect fully local, offline-capable agents without mandatory cloud auth.
2. **Onboarding reliability**: Multiple reports of failed dependency installs and WASM tool mismatches.
3. **Google Sheets/Telegram integrations**: OAuth flows, parameter passing, and cross-channel visibility broken.
4. **Linux compatibility**: Older distros (Amazon Linux 2023, CentOS 7) cannot run installer.

**Positive Signals:**
- Strong community contribution: Chinese localization, Podman support, memory improvements.
- Active bug bash event generating detailed, actionable issue reports.
- Community-built uninstaller **[ByeByeClaw](https://github.com/wanikia/byebyeclaw)** referenced in [#919](https://github.com/nearai/ironclaw/issues/919) shows ecosystem engagement.

---

## 8. Backlog Watch

| Issue | Age | Concern |
|-------|-----|---------|
| **[#142](https://github.com/nearai/ironclaw/issues/142)** | ~1 month | Closed but user frustration unresolved—auth requirement remains controversial. Needs product-level decision on optional local mode. |
| **[#299](https://github.com/nearai/ironclaw/issues/299)** | ~18 days | MCP server JSON configuration still blocked. Critical for users integrating third-party tools like Browserbase. |
| **[#840](https://github.com/nearai/ironclaw/issues/840)** | 2 days | WIT version mismatch breaking fresh installs—urgent for adoption. |

---

**Summary:** IronClaw is shipping features rapidly via automated CI/CD, but quality assurance appears strained with multiple onboarding and integration bugs surfacing. The team should prioritize stabilizing v0.18.x before adding new features, particularly around WASM tool versioning and cross-channel (Telegram/Google) integrations.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-03-12

## 1. Today's Overview
LobsterAI demonstrates high velocity in development today, marked by the release of **v0.2.3** and significant activity in both Pull Requests (11 updated) and Issues (11 updated). The team is aggressively expanding platform integration, merging support for OpenClaw across DingTalk, QQ, and Enterprise WeChat. However, the user base is reporting critical usability regressions, specifically regarding update persistence and core performance (UI freezing and execution latency), suggesting a maturity gap between new feature shipping and stability maintenance.

## 2. Releases
### **v0.2.3**
The latest release focuses on UI enhancements and platform integration fixes.
*   **Changes**:
    *   **Multi-file Support**: Added multi-file selection for attachments in the main interface ([PR #371](https://github.com/netease-youdao/LobsterAI/pull/371)).
    *   **Integration Fixes**: Resolved issues with QQ integration and chat paging ([PR #348](https://github.com/netease-youdao/LobsterAI/pull/348), [PR #355](https://github.com/netease-youdao/LobsterAI/pull/355)).
*   **Migration Note**: Users updating to v0.2.3 should verify their settings post-update due to reports of configuration resets (see Issue #382).

## 3. Project Progress
Today's merged PRs indicate a strategic push towards third-party Instant Messaging (IM) platform support and environmental stability.
*   **Platform Expansion**: Merged support for "OpenClaw" implementation on DingTalk ([PR #378](https://github.com/netease-youdao/LobsterAI/pull/378)), QQ ([PR #381](https://github.com/netease-youdao/LobsterAI/pull/381)), and Enterprise WeChat ([PR #383](https://github.com/netease-youdao/LobsterAI/pull/383)).
*   **Stability Fixes**: Resolved a Mac-specific Node.js environment pollution issue ([PR #375](https://github.com/netease-youdao/LobsterAI/pull/375)).
*   **Open PRs**: Contributions are pending for hourly scheduled tasks ([PR #376](https://github.com/netease-youdao/LobsterAI/pull/376)) and custom URI protocol support in markdown ([PR #380](https://github.com/netease-youdao/LobsterAI/pull/380)).

## 4. Community Hot Topics
*   **Critical Formatting Bug ([Issue #344](https://github.com/netease-youdao/LobsterAI/issues/344))**: A highly active issue (5 comments) where users report the AI stubbornly inserting spaces between Chinese characters and numbers. This is blocking adoption for users migrating from other tools (e.g., "OpenClaw").
*   **Configuration Persistence ([Issue #382](https://github.com/netease-youdao/LobsterAI/issues/382))**: Users are frustrated by frequent updates that wipe settings, forcing manual reconfiguration.
*   **Deployment Flexibility**: Strong community interest in Docker support ([Issue #386](https://github.com/netease-youdao/LobsterAI/issues/386)) and Ubuntu/Linux clients ([Issue #273](https://github.com/netease-youdao/LobsterAI/issues/273)).

## 5. Bugs & Stability
*   **Severity: High - UI Freezing**: Users report the application freezes/crashes specifically when reading images ([Issue #357](https://github.com/netease-youdao/LobsterAI/issues/357)).
*   **Severity: High - Performance Latency**: Significant lag in Bash command execution, with the agent waiting for output that arrives instantly natively ([Issue #350](https://github.com/netease-youdao/LobsterAI/issues/350)).
*   **Severity: Medium - Logic Error**: The "Chinese+Number" space insertion bug ([Issue #344](https://github.com/netease-youdao/LobsterAI/issues/344)).
*   **Severity: Medium - Runtime Error**: Connection errors with iFlytek CodePlanning causing process exits ([Issue #385](https://github.com/netease-youdao/LobsterAI/issues/385)).
*   **Fix Status**: No open PRs appear to address the image freeze or bash latency issues yet.

## 6. Feature Requests & Roadmap Signals
*   **Agent Teams**: Users are requesting an update to the Claude Agent SDK to enable "Agent Teams" functionality ([Issue #384](https://github.com/netease-youdao/LobsterAI/issues/384)).
*   **Environment Variables**: A request to support `.env` configuration for skills/scripts that require API keys ([Issue #377](https://github.com/netease-youdao/LobsterAI/issues/377)).
*   **File System Navigation**: Request to add an icon to open the file location path directly from the chat ([Issue #379](https://github.com/netease-youdao/LobsterAI/issues/379)).
*   **Prediction**: The "Workflow Enhancement" PR ([PR #240](https://github.com/netease-youdao/LobsterAI/pull/240)) suggests the team is actively exploring advanced multi-agent orchestration.

## 7. User Feedback Summary
Users appreciate the rapid feature iteration but are experiencing "update fatigue" due to configuration resets. The comparison to "OpenClaw" (likely the underlying or competing engine) is frequent; users feel LobsterAI's memory capabilities and output formatting (specifically the space bug) are inferior to the base engine. There is a clear demographic of power users requesting deeper system integration (Docker, Env Vars, Local File Access).

## 8. Backlog Watch
*   **Memory Issues ([Issue #186](https://github.com/netease-youdao/LobsterAI/issues/186))**: Open since late February, users report poor memory retention across models compared to the base engine. This requires architectural attention.
*   **Linux Support ([Issue #273](https://github.com/netease-youdao/LobsterAI/issues/273))**: A recurring request from the community that remains unaddressed in the current release cycle.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest: 2026-03-12

## 1. Today's Overview
TinyClaw exhibits **high velocity and significant architectural maturity** today, transitioning from a monolithic structure to a streamlined npm workspaces monorepo. The development team is aggressively closing technical debt (migrating from Redis/BullMQ to SQLite) while simultaneously expanding provider support (Avian, local models via OpenAI endpoints) and refining the user interface. A major strategic pivot is visible in the open Pull Request to rebrand the project from "TinyClaw" to "TinyAGI," signaling a shift in brand identity. The closure of 9 issues and merge of 6 PRs indicates a highly active maintenance cycle focused on stability, multi-agent orchestration, and user experience.

## 2. Releases
**v0.0.10** was released today. Key changes include:
*   **Simplified Operations:** Removed the dedicated logs pane from the `tmux` session (`daemon.sh`) to reduce clutter.
*   **Stability:** Increased the Telegram polling watchdog timeout from 2m to 5m to prevent premature timeouts.
*   **Architecture:** Moved `Task/TaskStatus` types to a shared scope and simplified `TINYCLAW_HOME` detection.

**Migration Note:** Users relying on the logs pane in `tmux` should switch to standard log file viewing methods (`tail -f`).

## 3. Project Progress
*   **Architectural Overhaul ([PR #186](https://github.com/TinyAGI/tinyclaw/pull/186)):** The project was split into 5 npm workspace packages (`core`, `teams`, `channels`, `server`, `visualizer`) and replaced the Redis/BullMQ dependency with a lightweight SQLite queue. This significantly lowers the barrier to entry by removing external infrastructure dependencies.
*   **UX & Automation ([PR #182](https://github.com/TinyAGI/tinyclaw/pull/182), [PR #183](https://github.com/TinyAGI/tinyclaw/pull/183)):** The Kanban UI now auto-triggers agents when tasks are moved to "In Progress," and the chat UI was simplified by removing redundant events.
*   **Team Orchestration ([PR #190](https://github.com/TinyAGI/tinyclaw/pull/190)):** Fixed team communication logic to ensure agents properly route through orchestration layers and stream responses in real-time.
*   **Provider Expansion ([PR #143](https://github.com/TinyAGI/tinyclaw/pull/143)):** Added Avian AI as a provider option.
*   **CLI Modernization ([PR #185](https://github.com/TinyAGI/tinyclaw/pull/185)):** Replaced legacy bash prompts with `@clack/prompts` for a better interactive setup experience.

## 4. Community Hot Topics
*   **Traceability & Observability ([Issue #66](https://github.com/TinyAGI/tinyclaw/issues/66)):** The most discussed issue involves "Mission Control" UIs with graph-based traceability (similar to Claude-trace or Azire Phoenix). Users want to visualize agent interaction graphs, tool usage, and memory pooling.
    *   *Analysis:* As TinyClaw moves toward multi-agent teams, observability is becoming the primary user bottleneck.
*   **Uninstallation Tools ([Issue #189](https://github.com/TinyAGI/tinyclaw/issues/189)):** A community member released **ByeByeClaw**, an unofficial uninstaller.
    *   *Analysis:* While helpful, the existence of a third-party uninstaller suggests users may be struggling with manual cleanup or testing the tool in "dirty" environments.
*   **Bracing for Rebrand ([PR #191](https://github.com/TinyAGI/tinyclaw/pull/191)):** The open PR for rebranding to "TinyAGI" is likely to generate discussion regarding backward compatibility and project scope.

## 5. Bugs & Stability
*   **Agent Acknowledgement Failure ([Issue #91](https://github.com/TinyAGI/tinyclaw/issues/91)) [MED]:** Agents on WhatsApp/Telegram show "typing" indicators but fail to send the final response until explicitly queried for status.
    *   *Status:* Closed, likely resolved by the real-time streaming fixes in [PR #190](https://github.com/TinyAGI/tinyclaw/pull/190).
*   **Shutdown Race Condition ([Issue #63](https://github.com/TinyAGI/tinyclaw/issues/63)) [LOW]:** Intervals in `queue-processor.ts` persisted after shutdown signals.
    *   *Status:* Closed, likely resolved by the queue refactor in [PR #186](https://github.com/TinyAGI/tinyclaw/pull/186) which replaced the old queue logic.

## 6. Feature Requests & Roadmap Signals
*   **Model Flexibility ([Issue #111](https://github.com/TinyAGI/tinyclaw/issues/111), [Issue #41](https://github.com/TinyAGI/tinyclaw/issues/41)):** Strong demand for Ollama, local models, and generic OpenAI-compatible endpoints.
    *   *Prediction:* With the Avian provider added and architecture refactored, generic endpoint support is highly likely in v0.0.11.
*   **Web-First Experience ([Issue #193](https://github.com/TinyAGI/tinyclaw/issues/193), [Issue #194](https://github.com/TinyAGI/tinyclaw/issues/194)):** Requests to move daemon control and initial setup entirely to the TinyOffice web portal, reducing reliance on CLI.
    *   *Prediction:* This aligns with the recent UI refactors; a "control panel" feature is the logical next step for the TinyOffice component.

## 7. User Feedback Summary
Users are enthusiastic about the move toward multi-agent teams but are currently experiencing friction regarding **observability** and **reliability** in messaging channels (WhatsApp/Telegram). The "typing... but no response" bug was a significant pain point that appears to be addressed in today's release. There is a clear trend of users wanting to use **local models** (Ollama/GLM) to reduce costs and increase privacy, moving away from purely cloud-based Anthropic/OpenAI solutions.

## 8. Backlog Watch
*   **Rebranding Strategy ([PR #191](https://github.com/TinyAGI/tinyclaw/pull/191)):** The open PR to rename everything to "TinyAGI" needs monitoring. A full rebrand carries risks of breaking community tutorials and documentation links.
*   **Mission Control ([Issue #66](https://github.com/TinyAGI/tinyclaw/issues/66)):** This issue was closed, but the digest data does not show a specific PR implementing "graph trace." It may have been closed as "planned" or "stale," but the user need remains high. Maintainers should ensure this isn't lost in the refactoring shuffle.
*   **Zellij Support ([Issue #87](https://github.com/TinyAGI/tinyclaw/issues/87)):** Request for Zellij terminal multiplexer support as an alternative to tmux was closed. With the move to simplify operations (removing log panes in v0.0.10), terminal attachment methods are in flux.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-03-12

## 1. Today's Overview
The Moltis project is exhibiting **extremely high development velocity**, with a massive batch of 25 pull requests updated in the last 24 hours (20 open, 5 merged) contrasted against 32 updated issues. The majority of activity stems from prolific contributor **@penso**, who is executing a sweeping set of patches targeting user onboarding, local LLM stability, and core tool fixes. While there are no new version releases, the volume of open PRs suggests a significant consolidating release is imminent. The project is actively stabilizing recent features—particularly local models and sandbox environments—based on rapid community feedback.

## 2. Releases
**None.** (No new releases tagged in this period. The project appears to be in a heavy integration phase pending the merge of the current PR queue.)

## 3. Project Progress
Five PRs were successfully merged, significantly improving local model support and chat reliability:

*   **[MR] fix(providers): strip stop tokens from MLX streaming output** ([#397](https://github.com/moltis-org/moltis/pull/397)) - Fixes an annoying bug where raw tokens like `<|im_end|>` leaked into user chat.
*   **[MR] fix(chat): compact the active channel session** ([#399](https://github.com/moltis-org/moltis/pull/399)) - Fixes a logic error where Discord/Telegram auto-compact targeted the wrong session.

In addition, over **20 new PRs** were opened, indicating rapid feature iteration. Key active proposals include:
*   **feat(mcp) make MCP request timeout configurable** ([#419](https://github.com/moltis-org/moltis/pull/419))
*   **feat: support secret remote MCP URLs and headers** ([#416](https://github.com/moltis-org/moltis/pull/416))
*   **fix(chat): persist aborted partial history** ([#418](https://github.com/moltis-org/moltis/pull/418)) - Addresses data loss during user interruptions.

## 4. Community Hot Topics
The most engaging discussions focus on extending the agent's capabilities and ecosystem integration:

1.  **[RFC] Node-Advertised Tools** ([Issue #391](https://github.com/moltis-org/moltis/issues/391))
    *   **Analysis**: With 2 comments in 24h, this proposal to allow remote nodes to advertise specific tools (moving beyond basic `exec`) is a critical architectural evolution. It signals a shift toward a more distributed, plugin-rich agent network.
2.  **Cron & Heartbeat Issues** ([Issue #181](https://github.com/moltis-org/moltis/issues/181))
    *   **Analysis**: The most commented issue (8 comments). Users are struggling with reliable background task execution. The volume of discussion here validates the recent slew of Cron-related PRs (#409, #411).
3.  **Docker-in-Docker Pathing** ([Issue #102](https://github.com/moltis-org/moltis/issues/102))
    *   **Analysis**: High engagement (4 👍). Advanced users running sandboxed agents are hitting volume mount issues, highlighting the complexity of secure, containerized tool execution.

## 5. Bugs & Stability
Several high-severity bugs were identified today, many already with pending fix PRs:

*   **[Critical] Network/Proxy Failures** ([Issue #407](https://github.com/moltis-org/moltis/issues/407)): Web search functionality is broken for some users immediately after start. *No linked PR yet.*
*   **[High] Github Copilot & z.ai Provider Errors** ([Issue #261](https://github.com/moltis-org/moltis/issues/261), [Issue #414](https://github.com/moltis-org/moltis/issues/414)): Users report specific providers are failing or giving network errors "out of the box."
*   **[High] z.ai Configuration Issues** ([Issue #414](https://github.com/moltis-org/moltis/issues/414)): Network errors preventing usage.
*   **[Fixed] Raw Token Leakage in Local LLM** ([Issue #306](https://github.com/moltis-org/moltis/issues/306)): Special tokens were visible in MLX outputs. *Resolved by merged PR #397.*
*   **[Fixed] Docker Login Issues** ([Issue #129](https://github.com/moltis-org/moltis/issues/129)): Password auth failed in Docker setups. *Likely resolved by generic provider bootstrap PR #401.*

## 6. Feature Requests & Roadmap Signals
User demand is clearly trending toward **integration** and **protocol extension**:

*   **Webhook Support** ([Issue #272](https://github.com/moltis-org/moltis/issues/272)): 2 👍. Users want to trigger agents via HTTP webhooks.
*   **Discord & Matrix Support** ([Issue #221](https://github.com/moltis-org/moltis/issues/221), [Issue #233](https://github.com/moltis-org/moltis/issues/233)): Continued demand for alternative chat interfaces beyond Telegram/WhatsApp.
*   **OpenAI-Compatible Endpoints** ([Issue #114](https://github.com/moltis-org/moltis/issues/114)): 2 👍. Users want to plug LM Studio or local servers into the "Custom LLM" provider easily.
*   **Prediction**: The "Node-Advertised Tools" RFC ([#391](https://github.com/moltis-org/moltis/issues/391)) and "Secret Remote MCP" PR ([#416](https://github.com/moltis-org/moltis/pull/416)) are likely the top priorities for the next version, pushing Moltis toward a federated tool-calling architecture.

## 7. User Feedback Summary
The user base is technically sophisticated (running Docker-in-Docker, NixOS, custom endpoints) but is currently friction-heavy during setup.
*   **Pain Points**: "Out of the box" experience for cloud providers (z.ai, Copilot) and Docker networking is rough. Users are frustrated by config leaks (double `/v1` in URLs) and UI state persistence bugs (vault sealed UX).
*   **Positive Signal**: High engagement on RFCs suggests a strong developer community eager to extend the platform rather than just use it passively.

## 8. Backlog Watch
*   **[Bug] Soul changes do not persist** ([Issue #348](https://github.com/moltis-org/moltis/issues/348)): Users editing "Soul" (persona) in the Web UI lose changes. This is a core UX bug that needs verification if addressed by recent chat persistence PRs.
*   **[Enhancement] Webhook Function** ([Issue #272](https://github.com/moltis-org/moltis/issues/272)): An older, upvoted request that has not yet seen an official "planned" status or PR, despite being a logical extension of the Node system.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-03-12

## 1. Today's Overview
The CoPaw project is experiencing **very high activity** with 50 Issues and 50 PRs updated in the last 24 hours. Despite no new software releases, the development team is aggressively merging fixes and iterating on the Web UI (Console) and backend stability. The community is heavily engaged in testing the `v0.0.6` and `v0.0.6.post1` versions, revealing significant stability challenges with new features like context compression and multi-channel support (Feishu/DingTalk). The ratio of open to closed issues (36 vs 14) suggests a backlog of reports accumulating faster than the team can resolve them, typical for a project in active feature development.

## 2. Releases
**No new releases** were recorded today.
*   **Context:** The project appears to be stabilizing the `v0.0.6.post1` iteration. The high volume of bug fixes merged today (see Section 3) indicates a patch release (likely `v0.0.6.post2` or `v0.0.7`) is imminent.

## 3. Project Progress
Significant progress was made on the **Console (Web UI)** and **Platform Channels**. A total of **24 PRs** were merged/closed.

*   **Console/UI Enhancements:** The UI received substantial updates, including a new **Chat Model Selector** ([PR #1140](https://github.com/agentscope-ai/CoPaw/pull/1140)), internationalization routing support ([PR #1221](https://github.com/agentscope-ai/CoPaw/pull/1221)), and improved workspace drag-and-drop functionality ([PR #1121](https://github.com/agentscope-ai/CoPaw/pull/1121)).
*   **Critical Bug Fixes:** Merged fixes for duplicate chat requests ([PR #1307](https://github.com/agentscope-ai/CoPaw/pull/1307)) and API-induced child component update loops ([PR #1242](https://github.com/agentscope-ai/CoPaw/pull/1242)).
*   **Channel Expansion:** Merged PRs include improvements for Telegram threads/media ([PR #1210](https://github.com/agentscope-ai/CoPaw/pull/1210)) and Feishu formatting ([PR #1030](https://github.com/agentscope-ai/CoPaw/pull/1030)). A new QQ Bot channel (NapCat) is in review ([PR #1290](https://github.com/agentscope-ai/CoPaw/pull/1290)).

## 4. Community Hot Topics
The most active discussions center on **Context Management** and **Channel Stability**.

1.  **Context Compression Failure ([Issue #1243](https://github.com/agentscope-ai/CoPaw/issues/1243))**
    *   **Topic:** Users report that the `/compact` command in Feishu creates summaries but fails to clear message history, causing token limits to be exceeded.
    *   **Underlying Need:** Users need reliable autonomous memory management to handle long-running sessions without manual intervention.
2.  **Feishu Channel Instability ([Issue #1100](https://github.com/agentscope-ai/CoPaw/issues/1100))**
    *   **Topic:** Reports of duplicate messages and unresponsive 500 errors in the Feishu channel.
    *   **Underlying Need:** Enterprise users rely on Feishu for production workflows; reliability is currently the biggest blocker.
3.  **Installation Script Errors ([Issue #1291](https://github.com/agentscope-ai/CoPaw/issues/1291))**
    *   **Topic:** A bug in the `install.sh` script (`line 22: info: command not found`) is preventing macOS users from installing the tool.

## 5. Bugs & Stability
The `v0.0.6.post1` version is showing growing pains, particularly regarding token limits and tool execution.

*   **Severity: High**
    *   **Session Crashes due to Token Limits:** Users are hitting `max bytes` limits (6MB) because the context compression tools are failing ([Issue #1243](https://github.com/agentscope-ai/CoPaw/issues/1243), [Issue #1277](https://github.com/agentscope-ai/CoPaw/issues/1277)).
    *   **Windows Shell Execution Deadlock:** The `execute_shell_command` tool causes the agent to freeze entirely on Windows systems ([Issue #1136](https://github.com/agentscope-ai/CoPaw/issues/1136)).
    *   **Installation Failure:** The one-line install script is broken for some bash environments ([Issue #1291](https://github.com/agentscope-ai/CoPaw/issues/1291)).
*   **Severity: Medium**
    *   **Provider Connection Issues:** Failures connecting to "Silicon Flow" ([Issue #1292](https://github.com/agentscope-ai/CoPaw/issues/1292)) and Cline API ([Issue #1287](https://github.com/agentscope-ai/CoPaw/issues/1287)).
    *   **UI Issues:** Model selection dropdown closing on hover ([Issue #1280](https://github.com/agentscope-ai/CoPaw/issues/1280)) - **Fix Merged** in [PR #1309](https://github.com/agentscope-ai/CoPaw/pull/1309).

## 6. Feature Requests & Roadmap Signals
*   **OpenClaw Integration:** Request to support Feishu's official open-source plugin for document/calendar manipulation ([Issue #1297](https://github.com/agentscope-ai/CoPaw/issues/1297)). *Prediction: High likelihood of adoption given the focus on Feishu.*
*   **Session Management:** Users want the ability to manually reset/create new chat sessions in Feishu to clear context without history ([Issue #1288](https://github.com/agentscope-ai/CoPaw/issues/1288)).
*   **User Whitelists:** Request for `allowed_users` configuration in channels for permission control ([Issue #411](https://github.com/agentscope-ai/CoPaw/issues/411)).
*   **Hook/Plugin System:** Developers are asking for a pre-inference hook system to handle data (like local images) before the model processes it ([Issue #1283](https://github.com/agentscope-ai/CoPaw/issues/1283)).

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Context Window:** "Context too long" errors are rampant. Users feel the auto-compression features are non-functional.
    *   **Model Support:** Struggles with setting up non-standard providers (e.g., Silicon Flow, Kimi models with image input issues) indicate the Provider configuration UX needs refinement.
    *   **File Visibility:** Users report images/files sent by the bot are visible in Feishu/DingTalk but not in the Web UI ([Issue #1068](https://github.com/agentscope-ai/CoPaw/issues/1068)).
*   **Satisfaction:** Users are enthusiastic about the *concept* (multi-channel, local agent), as evidenced by the high volume of PR contributions from the community (email skills, NapCat QQ channel). However, frustration is rising regarding basic stability in the latest release.

## 8. Backlog Watch
*   **Windows Shell Deadlock ([Issue #1136](https://github.com/agentscope-ai/CoPaw/issues/1136)):** Critical bug reported 2 days ago with a reproducible script provided by the user. Needs urgent maintainer validation.
*   **Web UI Media Visibility ([Issue #1068](https://github.com/agentscope-ai/CoPaw/issues/1068)):** Affects the core user experience of the "Console" component.
*   **Provider Manager Attribute Error ([Issue #1248](https://github.com/agentscope-ai/CoPaw/issues/1248)):** `AttributeError: 'ProviderManager' object has no attribute 'get_default_provider'` suggests a regression in the internal API that needs verification.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-03-12

## 1. Today's Overview
ZeptoClaw demonstrates **exceptionally high velocity** today with a strong focus on security hardening and UX improvements. The project merged 13 PRs and closed 13 issues, releasing two versions (v0.7.5 and v0.7.6) in rapid succession. The primary thematic push is **security boundary hardening** across filesystem operations, inbound authentication, and channel trust models. Additionally, CLI usability received significant attention with new slash command autocomplete and lifecycle management commands. With only 1 open issue remaining from today's activity, the project maintains a healthy "zero inbox" discipline for its security-focused release cycle.

---

## 2. Releases

### **v0.7.6** ([Release Notes](https://github.com/qhkm/zeptoclaw/releases/tag/v0.7.6))
**Focus:** Bug fixes and CLI UX enhancement

| Change | PR | Description |
|--------|-----|-------------|
| Fix: Deduplicate Claude subscription token warning | [#320](https://github.com/qhkm/zeptoclaw/pull/320) | Wrapped warning in `std::sync::Once` to prevent triple-logging during startup |
| Feat: Slash command suggestions in CLI | [#323](https://github.com/qhkm/zeptoclaw/pull/323) | Tab-complete for 12 commands (`/model`, `/persona`, `/tools`, etc.) via rustyline |
| Fix: Harden inbound auth and filesystem boundaries | Direct commit | Security hardening backports |

### **v0.7.5** ([Release Notes](https://github.com/qhkm/zeptoclaw/releases/tag/v0.7.5))
**Focus:** CLI lifecycle management and provider compatibility

| Change | PR | Description |
|--------|-----|-------------|
| Feat: Config reset command | [#306](https://github.com/qhkm/zeptoclaw/pull/306) | `zeptoclaw config reset` for cleaning state |
| Feat: Model-provider compatibility validation | [#311](https://github.com/qhkm/zeptoclaw/pull/311) | Prevents misconfigured model/provider combos |
| Feat: Uninstall command | Truncated in data | Self-removal capability |

**Migration Notes:** No breaking changes in these releases. Users on v0.7.4 can upgrade directly.

---

## 3. Project Progress

### Major Merged PRs

| PR | Area | Impact |
|-----|------|--------|
| [#324](https://github.com/qhkm/zeptoclaw/pull/324) | **Security** | **Critical hardening** — webhook auth, filesystem write validation (symlink/TOCTOU/hardlink bypasses), Telegram username allowlist deprecation |
| [#323](https://github.com/qhkm/zeptoclaw/pull/323) | CLI/UX | Interactive slash-command autocomplete with rustyline |
| [#316](https://github.com/qhkm/zeptoclaw/pull/316) | Providers | **Ollama/vLLM keyless auth** — local instances no longer require dummy API keys |
| [#320](https://github.com/qhkm/zeptoclaw/pull/320) | UX | Fixed noisy startup logs for Claude subscription users |

### Dependency Updates (10 merged via Dependabot)
- **jsonwebtoken** 9.3.1 → **10.3.0** (manual migration tracked in [#185](https://github.com/qhkm/zeptoclaw/issues/185))
- **rustls** 0.23.36 → 0.23.37
- **anyhow**, **chrono**, **chromiumoxide**, **@types/node**
- GitHub Actions: **upload/download-artifact** v7 → v8

**Assessment:** The team is aggressively addressing technical debt alongside security, with automated dependency hygiene.

---

## 4. Community Hot Topics

| Issue/PR | Engagement | Analysis |
|----------|-----------|----------|
| [#221](https://github.com/qhkm/zeptoclaw/issues/221) — Merkle hash-chain audit trail | 1 comment, **OPEN** | User requests tamper-evident logging for tool execution. Signals **enterprise/compliance** use case demand. Maintainer engagement suggests interest but not immediate priority. |
| [#185](https://github.com/qhkm/zeptoclaw/issues/185) — jsonwebtoken 9→10 migration | 1 comment | Breaking API changes require manual work in `src/api/auth.rs`. Dependency was auto-bumped (#296) but migration still pending — coordination gap. |
| [#284](https://github.com/qhkm/zeptoclaw/issues/284) — Ollama cloud model support | 0 comments, CLOSED | User pain point: cloud Ollama setups failing. **Resolved by PR #316** (keyless auth). |

**Underlying Needs:**
1. **Trust/compliance** features for enterprise deployments (audit trails)
2. **Cloud provider flexibility** beyond local-first assumptions

---

## 5. Bugs & Stability

### Critical (P1) — All Fixed
| Issue | Severity | Status | Fix |
|-------|----------|--------|-----|
| [#319](https://github.com/qhkm/zeptoclaw/issues/319) — Filesystem path hardening gaps | **Critical** | ✅ Closed | PR [#324](https://github.com/qhkm/zeptoclaw/pull/324) |
| [#321](https://github.com/qhkm/zeptoclaw/issues/321) — Telegram username allowlist identity drift risk | **Critical** | ✅ Closed | Staged deprecation in PR [#324](https://github.com/qhkm/zeptoclaw/pull/324) |
| [#318](https://github.com/qhkm/zeptoclaw/issues/318) — Webhook authentication hardening | **Critical** | ✅ Closed | PR [#324](https://github.com/qhkm/zeptoclaw/pull/324) |

### High (P2) — All Fixed
| Issue | Severity | Status | Fix |
|-------|----------|--------|-----|
| [#317](https://github.com/qhkm/zeptoclaw/issues/317) — WhatsApp Cloud webhook signature verification | **High** | ✅ Closed | Part of security hardening |
| [#325](https://github.com/qhkm/zeptoclaw/issues/325) — Email header-trust limitation | High | ✅ Closed | Config warnings + runtime logs |
| [#327](https://github.com/qhkm/zeptoclaw/issues/327), [#328](https://github.com/qhkm/zeptoclaw/issues/328) — Channel setup clearing gaps | High | ✅ Closed | Fix included |
| [#329](https://github.com/qhkm/zeptoclaw/issues/329), [#330](https://github.com/qhkm/zeptoclaw/issues/330) — Unix dirfd-relative filesystem ops | High | ✅ Closed | Hardening completed |
| [#326](https://github.com/qhkm/zeptoclaw/issues/326) — WhatsApp Bridge advisory triage | High | ✅ Closed | Confirmed not affected (typed events, not raw HTTP) |

**Stability Verdict:** All reported vulnerabilities addressed within 24 hours. **Excellent security response cadence.**

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Priority Signal | Next Version Likelihood |
|---------|--------|-----------------|------------------------|
| **Merkle hash-chain audit trail** | [#221](https://github.com/qhkm/zeptoclaw/issues/221) | P3-normal, OPEN | Medium — spec exists, awaiting implementation |
| Slash command autocomplete | [#322](https://github.com/qhkm/zeptoclaw/issues/322) | ✅ Implemented | Shipped in v0.7.6 |
| Ollama cloud/keyless auth | [#284](https://github.com/qhkm/zeptoclaw/issues/284) | ✅ Implemented | Shipped via PR [#316](https://github.com/qhkm/zeptoclaw/pull/316) |

**Roadmap Prediction:** The open audit trail issue (#221) with its detailed spec suggests the next major feature focus may be **compliance/enterprise trust features**. The staged Telegram username deprecation indicates a future breaking change (v0.8.0?) for channel identity handling.

---

## 7. User Feedback Summary

### Pain Points Resolved
- **Ollama cloud configuration failures** ([#284](https://github.com/qhkm/zeptoclaw/issues/284)) — Users couldn't use cloud-hosted Ollama without API key workarounds. Fixed by making auth optional for local and supporting explicit keys for cloud.
- **Noisy Claude subscription warnings** — Triple-logged at every startup. Fixed with singleton pattern.
- **CLI discoverability** — Users unaware of available commands. Addressed with slash autocomplete.

### Use Cases Emerging
1. **Multi-channel AI assistant** with Telegram, WhatsApp Cloud, Email, and webhooks
2. **Local-first LLM usage** with Ollama/vLLM without cloud API keys
3. **Self-hosted compliance-sensitive deployments** (audit trail demand)

### Satisfaction Indicators
- Rapid security response (same-day fixes for multiple P1/P2 issues)
- User-reported issues resolved within 24h (e.g., #284 → #316)
- Proactive deprecation staging with backward compatibility

---

## 8. Backlog Watch

| Item | Age | Status | Concern |
|------|-----|--------|---------|
| [#185](https://github.com/qhkm/zeptoclaw/issues/185) — jsonwebtoken 10 migration | 14 days | OPEN | **Risk:** Dependency PR [#296](https://github.com/qhkm/zeptoclaw/pull/296) merged code bump, but manual API migration still pending. Potential auth breakage if code uses deprecated patterns. Needs explicit owner assignment. |
| [#221](https://github.com/qhkm/zeptoclaw/issues/221) — Merkle audit trail | 9 days | OPEN | Active discussion but no PR yet. Spec-complete; awaiting implementation priority decision. |

**Recommendation:** Issue #185 should block next minor release until `src/api/auth.rs` migration is verified complete.

---

## Summary
ZeptoClaw is in a **security maturation phase**, rapidly hardening trust boundaries while improving CLI ergonomics. The v0.7.5→v0.7.6 double-release demonstrates disciplined iterative shipping. With all reported security issues closed and a clear enterprise-compliance feature on the horizon, the project shows strong health. The only actionable concern is the pending jsonwebtoken v10 API migration which requires manual completion to prevent latent auth bugs.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest
**Date:** 2026-03-12
**Project:** EasyClaw (gaoyangz77/easyclaw)

## 1. Today's Overview
EasyClaw demonstrates active maintenance with a focus on platform-specific stability and UI consistency. The project released version **v1.6.6** today, addressing deployment hurdles for macOS users regarding Gatekeeper security protocols. Community engagement is currently centered on authentication reliability, specifically with OpenAI integration, while external contributors are actively working on refining the macOS user interface. The ratio of open issues to active PRs suggests a healthy iteration cycle, though immediate attention is required for reported OAuth blockers.

## 2. Releases
### **v1.6.6** (Released 2026-03-12)
This version appears to be a maintenance release primarily focused on distribution and platform compatibility rather than new feature introduction.

*   **Key Changes:** The release explicitly addresses **macOS Gatekeeper** issues. It provides documentation/workarounds for the "App is damaged and can't be opened" error, which commonly affects unsigned or notarized applications on macOS.
*   **Migration Notes:** Users on macOS do not need to downgrade; instead, they should follow the documented Terminal command (likely `xattr -cr ...` based on standard macOS fixes) to bypass the quarantine attribute.
*   **Installation:** Updated guidance provided for both portable and installed versions.

## 3. Project Progress
Progress today is characterized by UI refinement and release management.
*   **[PR #15](https://github.com/gaoyangz77/easyclaw/pull/15):** A fix regarding the App Icon display in the macOS Dock and System Tray remains **Open** but active. This indicates the project is polishing the desktop client experience for Mac users.
*   **General Maintenance:** The release of v1.6.6 suggests the codebase has been stabilized for distribution, though specific code changes beyond the release notes were not detailed in the provided dataset.

## 4. Community Hot Topics
The most significant active discussion involves core functionality failure in authentication.

*   **[Issue #16: OpenAI Oauth Error](https://github.com/gaoyangz77/easyclaw/issues/16)**
    *   **Activity:** Created yesterday, updated today.
    *   **Analysis:** A user reported that the OpenAI OAuth mechanism fails across both portable and installed versions. The inclusion of a screenshot suggests a reproducible, consistent error.
    *   **Underlying Need:** Users are utilizing EasyClaw as a client for OpenAI services. The failure of OAuth blocks the primary utility of the application for this user segment. This is a critical usability blocker.

## 5. Bugs & Stability
*   **🔴 High Severity: OpenAI OAuth Failure ([Issue #16](https://github.com/gaoyangz77/easyclaw/issues/16))**
    *   **Description:** Users are experiencing an OAuth error when attempting to connect to OpenAI services.
    *   **Impact:** Blocks login and usage for affected users.
    *   **Status:** Open. No linked fix PRs detected in the current data.
*   **🟠 Medium Severity: macOS Gatekeeper False Positive (v1.6.6 Release)**
    *   **Description:** macOS flags the app as "damaged."
    *   **Impact:** Prevents launch for users unfamiliar with macOS security workarounds.
    *   **Status:** Addressed via documentation in v1.6.6 release notes; requires a code-signing certificate for a permanent fix.

## 6. Feature Requests & Roadmap Signals
*   **Platform Polish:** The activity around [PR #15](https://github.com/gaoyangz77/easyclaw/pull/15) (macOS Icon Fix) indicates a roadmap focus on improving the native desktop experience and visual consistency for Mac users.
*   **Authentication Diversification:** The OAuth issue highlights a reliance on specific authentication flows. Future updates may need to include fallback mechanisms or more robust token handling for third-party logins.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Installation Friction:** Users on macOS are struggling with security prompts ("file is damaged"), indicating a need for proper code signing.
    *   **Connection Reliability:** Users expect seamless OAuth with OpenAI, and current failures are causing immediate friction.
*   **Usage Context:** Users are deploying the app on both portable and installed modes, suggesting a need for flexibility in how the assistant is used (e.g., USB drives vs. local installs).

## 8. Backlog Watch
*   **[PR #15](https://github.com/gaoyangz77/easyclaw/pull/15):** This PR fixes visual bugs on macOS. It has been updated recently but remains **Open**. Maintainer review is recommended to merge this improvement and enhance the desktop experience for the upcoming patch versions.
*   **[Issue #16](https://github.com/gaoyangz77/easyclaw/issues/16):** Requires immediate triage. As an authentication issue, it is a high priority for user retention.

</details>