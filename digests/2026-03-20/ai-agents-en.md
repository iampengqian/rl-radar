# OpenClaw Ecosystem Digest 2026-03-20

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-03-19 22:02 UTC

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

# OpenClaw Project Digest: 2026-03-20

## 1. Today's Overview
OpenClaw demonstrates **extremely high velocity** with 500 issues and 500 PRs updated in the last 24 hours, signaling active development and a bustling community. The bulk of this activity is concentrated on regressions in the WhatsApp channel integration (specifically "No active listener" errors) and significant infrastructure work to introduce a Linux desktop client. Security vigilance is high, with recent phishing attempts identified and pinned in community discussions. While the volume of open issues suggests growing pains in quality assurance, the high merge rate of PRs indicates maintainers are aggressively iterating on the platform.

## 2. Releases
**No new releases** were recorded today. The project appears to be in a heavy development/cycle phase, potentially stabilizing the recent `2026.3.x` series before a broader release given the number of regression reports.

## 3. Project Progress
Significant advancements were made across platform support, memory handling, and provider integration:

*   **Native Linux Companion App (PR #50532):** A major contribution introducing a native GTK4 companion app for Linux (Ubuntu GNOME), fulfilling a long-standing request for desktop parity. This isolates the UI from the tray daemon to prevent runtime conflicts.
*   **Memory & Logging Fixes:** Several PRs targeted core stability, including fixing memory leaks in Vitest testing (PR #50654) and ensuring log transports survive plugin loading (PR #50085).
*   **Provider Expansion:**
    *   **GigaChat (PR #48017):** Full support added for auth, streaming, and onboarding.
    *   **Anthropic Vertex AI (PR #43356):** Integrated support for Claude via GCP Vertex AI.
*   **Usage Tracking Fix (PR #50653):** Corrected a critical calculation error where 85% of token usage (in reset archives) was previously uncounted.

## 4. Community Hot Topics
*   **Linux/Desktop Clients (Issue #75):** The most active discussion (46 comments) focuses on the demand for Linux and Windows apps to match the macOS experience. The opening of PR #50532 (Linux GTK app) is a direct response to this demand.
*   **Security Alert (Issue #49836):** A confirmed phishing scam using a fake repo and "airdrop" lure is alerting users. This high-visibility thread (32 comments) serves as a critical safety bulletin for the community.
*   **MCP Client Support (Issue #29053):** With 10 comments and high engagement, users are pushing for native Model Context Protocol (MCP) client support to standardize tool connections beyond OpenClaw's specific ecosystem.

## 5. Bugs & Stability
The stability focus is dominated by WhatsApp channel regressions introduced in the `2026.3.x` versions:

*   **Critical Regression (WhatsApp):** Multiple high-activity reports (Issues #34741, #45171, #45387) describe "No active WhatsApp Web listener" errors. Users report a split-brain issue where auto-replies work, but CLI/Tool sends fail.
    *   *Status:* Heavily reported; likely linked to listener lifecycle changes in recent builds.
*   **Gateway Handshake Timeouts (Issue #46892, #45560):** Users on constrained networks or busy loops are experiencing connection drops due to an aggressive 3-second WebSocket timeout.
    *   *Fix in Progress:* PR #47533 proposes respecting full timeout configurations for loopback probes.
*   **Auth Failures:** Isolated but persistent auth errors are noted for Anthropic (Issue #23538) and Kimi web search (Issue #44851), possibly related to profile isolation changes.

## 6. Feature Requests & Roadmap Signals
*   **Brave Search Alternatives (Issue #16629):** With the Brave Search API deprecating its free tier, users are requesting native integration for alternatives like DuckDuckGo or Tavily. This is a high priority for self-hosted users.
*   **External Memory Provider API (Issue #49233):** A proposal to reduce agent blackout time during context compaction from ~60s to <100ms via external memory systems.
*   **MiniMax M2.7 Support (Issue #50234):** Request for updated model support as the provider releases new versions.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by the fragility of the WhatsApp integration, specifically the inability to send messages programmatically despite the UI showing "Connected." The desync between the connection state and the listener availability is a major usability blocker for automation.
*   **Satisfaction:** The community response to the Linux app PR is largely positive, indicating strong demand for OS parity.
*   **Deployment:** Installation issues on fresh environments (Issue #39447, #50294) involving SSH keys and dependencies suggest the "one-liner" install experience is currently brittle for edge cases.

## 8. Backlog Watch
*   **Time/Reminder Reliability (Issue #10841):** Open since Feb 2026. Reminders fail because the agent guesses the time instead of knowing it. This is a fundamental UX flaw for an assistant that needs attention before the next stable release.
*   **Matrix E2EE (Issue #7649):** The bot's inability to verify its own session for E2EE channels remains a blocker for privacy-focused Matrix deployments.
*   **Plugin Slot Overrides (Issue #25359):** A "stale" but important feature request for multi-agent setups where different agents need different memory/plugin profiles.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Analysis Report
**Date:** 2026-03-20 | **Analyst:** Senior AI Agent Ecosystem Analyst

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source landscape is experiencing a **maturation phase** marked by aggressive multi-backend support, security-first architecture, and the emergence of "skills-as-repos" extensibility patterns. Projects are rapidly decoupling from single-vendor SDKs (Anthropic, OpenAI) to support interchangeable LLM backends via adapter patterns. A clear divide exists between **platform-focused projects** (OpenClaw, ZeroClaw, IronClaw) offering enterprise-grade stability and **channel-focused projects** (NanoClaw, PicoClaw) prioritizing communication integration breadth. The ecosystem shows strong convergence toward Model Context Protocol (MCP) as the emerging standard for tool connectivity.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Merge Rate | Health Score |
|---------|-------------|-----------|----------|------------|--------------|
| **OpenClaw** | 500 | 500 | 0 | ~60%* | ⚠️ High Velocity / QA Strain |
| **ZeroClaw** | 43 | 50 | 10 (v0.5.1 stable) | 76% | ✅ Excellent |
| **PicoClaw** | 41 | 104 | 1 (nightly) | 52% | ✅ Healthy |
| **NanoBot** | 29 | 53 | 0 | ~23% | 🟡 Active Dev |
| **IronClaw** | 50 | 50 | 1 (v0.20.0) | 46% | ✅ Good |
| **LobsterAI** | 17 | 33 | 1 (2026.3.19) | ~55% | ✅ Good |
| **NanoClaw** | 14 | 32 | 0 | ~31% | 🟡 Active Dev |
| **CoPaw** | 50 | 50 | 2 (v0.1.0 + beta) | ~40% | ⚠️ Turbulent |
| **ZeptoClaw** | 1 | 3 | 0 | 0% | 🟡 Low Activity |
| **Moltis** | 3 | 2 | 0 | 0% | 🟡 Stable/Low |
| **TinyClaw** | 0 | 2 | 0 | 0% | 🟡 Architectural |
| **EasyClaw** | 1 | 3 | 1 (v1.7.2) | 33% | ✅ Focused UI |

*Estimated from digest narrative. Health Score factors: velocity, stability, issue resolution rate, and community engagement.

---

## 3. OpenClaw's Position

### Competitive Advantages
- **Largest Community Scale:** 500+ issues/PRs daily dwarfs all peers, indicating strong adoption and mindshare as the "core reference" implementation
- **Platform Parity Focus:** Linux GTK4 client (PR #50532) addresses the critical desktop gap vs macOS-first competitors
- **Provider Breadth:** Native integrations for GigaChat, Anthropic Vertex AI, and emerging MCP client support

### Technical Approach Differences
| Aspect | OpenClaw | Peers (ZeroClaw, IronClaw, NanoBot) |
|--------|----------|-------------------------------------|
| **Architecture** | Monolithic platform | Modular/skills-based (ZeroClaw, Moltis) |
| **Security Model** | Phishing alerts, reactive | Proactive sandboxing (ZeroClaw), runtime secret resolution (NanoBot) |
| **Memory Management** | External provider API (proposed) | Self-contained LRU caching (IronClaw), context compaction (PicoClaw) |
| **Channel Strategy** | WhatsApp-centric (regressions) | Multi-channel native (NanoClaw: Telegram/Discord/Signal/Email) |

### Concerns
- **QA Bottleneck:** 500 open issues with "growing pains" suggests velocity outpaces quality assurance
- **Channel Fragility:** WhatsApp "split-brain" listener errors are a critical usability blocker for the primary use case
- **No Recent Release:** In heavy development cycle while ZeroClaw ships 10 releases/day

---

## 4. Shared Technical Focus Areas

| Emerging Requirement | Projects Involved | Specific Needs |
|---------------------|-------------------|----------------|
| **Multi-Backend Support** | NanoClaw (#963, #1266), TinyClaw (#242), IronClaw (#744) | OpenAI Codex SDK, Claude CLI, direct API adapters to avoid vendor lock-in |
| **MCP (Model Context Protocol)** | OpenClaw (#29053), NanoBot (#2273), CoPaw (#676) | Native client support, HTTP transport, schema validation fixes |
| **Human-in-the-Loop (HITL)** | ZeroClaw (#1865), NanoBot (#2133), ZeptoClaw (#388) | Mid-execution intervention, approval buttons on Telegram/Discord, steering loops |
| **Runtime Security** | ZeroClaw (#1478), NanoBot (#2212), NanoClaw (#1150) | Secret redaction, sandbox escapes, configurable autonomy levels |
| **Voice/Multimodal** | PicoClaw (#1648), NanoClaw (#1269), CoPaw (#1772) | TTS/ASR integration, Whisper transcription, voice message handling |
| **Context/Token Management** | LobsterAI (#533), CoPaw (#1774), Moltis (#453) | LRU caching, N+1 query elimination, compaction without blackout |

---

## 5. Differentiation Analysis

### By Target User Segment

| Segment | Projects | Key Differentiators |
|---------|----------|---------------------|
| **Enterprise/Self-Hosted** | ZeroClaw, IronClaw | Security-first (ZeroClaw's strict defaults), self-repair mechanisms (IronClaw v0.20.0), Slack Socket Mode, audit trails |
| **Consumer/Personal** | OpenClaw, EasyClaw | WhatsApp dominance, UI polish (EasyClaw v1.7.2 auth modal), one-liner installs |
| **Developer/Research** | NanoBot, TinyClaw | Academic backing (HKUDS), adapter patterns for pluggable backends, observability (Langfuse tracing) |
| **Asian Market** | LobsterAI, NanoBot | WeCom/Feishu/QQ native, Chinese i18n (LobsterAI), Alibaba Cloud Bailian support (ZeroClaw #3882) |
| **Edge/Mobile** | PicoClaw, CoPaw | ARMv7/ARMhf support, Raspberry Pi compatibility, lightweight gateways |

### Architectural Patterns

| Pattern | Example | Trend |
|---------|---------|-------|
| **Skills-as-Repos** | NanoClaw (Signal skill #1121, Discord swarm #1265) | ✅ Rising standard |
| **Monolithic Platform** | OpenClaw, LobsterAI | ⚠️ Legacy, facing scaling issues |
| **Microservices/Gateway** | PicoClaw (Launcher/Gateway split), IronClaw (WASM channels) | ✅ Modern, scalable |
| **Plugin Manifest System** | NanoBot (#2231 request), EasyClaw (Plugin SDK refactor) | 🔮 Emerging |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (Velocity > 100 events/day)
- **ZeroClaw:** Healthiest velocity-to-stability ratio. 10 releases in 24h with 76% merge rate indicates mature CI/CD and confident maintainers.
- **OpenClaw:** Highest raw activity but concerning QA gap. 500 issues open suggests need for triage automation or community moderators.
- **PicoClaw:** Balanced 52% merge rate with 104 PRs shows healthy code review discipline. Nightly builds indicate stable release cadence.

### Tier 2: Stable Development (20-100 events/day)
- **IronClaw:** v0.20.0 milestone with self-repair + fault injection shows architectural maturity. Heavy automation (staging-ci-review) may bury user issues.
- **NanoBot:** Strong academic engagement (HKUDS). Steering Loop PR (#1224) 58+ comments over 1 month indicates thoughtful architectural debate.
- **CoPaw:** Turbulent transition—v0.1.0 multi-agent architecture is breakthrough but introduced critical CPU spike bugs. Needs stabilization sprint.
- **LobsterAI:** Post-release regression fixes (OpenClaw gateway integration). Active i18n push signals international expansion.

### Tier 3: Architectural/Niche (Low velocity, high signal)
- **TinyClaw:** Zero issues but major adapter pattern refactor (#242) signals strategic pivot to modularity.
- **NanoClaw:** Multi-backend PRs (#963, #1266) could reshape project if merged.
- **Moltis, ZeptoClaw, EasyClaw:** Single-feature focus (Windows fix, ACP protocol, UI polish respectively).

---

## 7. Trend Signals

### 🔴 Critical Industry Shifts

1. **Vendor Decoupling Imperative**
   - **Signal:** 4+ projects (NanoClaw, TinyClaw, IronClaw, PicoClaw) have active PRs to add OpenAI Codex or alternative backends
   - **Implication:** Developers are hedging against Anthropic API changes/tos enforcement. Build adapter patterns now or risk obsolescence.

2. **Security-First Default, Usability Tension**
   - **Signal:** ZeroClaw #1478 (42 comments) shows users frustrated by restrictive defaults blocking basic operations
   - **Implication:** Projects need a "developer mode" or "personal use" preset that relaxes sandboxing without requiring deep config edits.

3. **MCP as Emerging Standard**
   - **Signal:** Cross-project demand for MCP client support (OpenClaw #29053, NanoBot #2273, CoPaw #676)
   - **Implication:** Tool connectivity is standardizing on MCP. Projects without native MCP support will face integration friction.

### 🟡 Actionable Insights

| Trend | Signal Source | Recommendation |
|-------|---------------|----------------|
| **HITL on Mobile Channels** | ZeroClaw #1865, NanoBot #2133 | Implement inline approval buttons for Telegram/Discord—users want mid-execution control |
| **Voice-First Agents** | PicoClaw #1648, NanoClaw #1269 | Prioritize Whisper integration; voice is the next interface layer |
| **Asian Market Growth** | LobsterAI WeCom/Feishu, ZeroClaw Bailian request | First-class i18n and local provider support unlocks significant user base |
| **Migration Reliability** | IronClaw #1328, CoPaw #1873 | Database migrations are breaking upgrades—need checksum versioning or rollback tooling |
| **Context Window Crisis** | CoPaw #1774 (infinite loop), ZeroClaw #3987 | Context compaction algorithms need safeguards to prevent CPU/memory runaway |

### 🟢 Strategic Opportunities

- **Plugin Marketplace:** With skills-as-repos becoming standard (NanoClaw, Moltis), a centralized plugin registry/discovery system would capture ecosystem value
- **Observability Layer:** Langfuse tracing (NanoBot #1490), API usage tracking (NanoClaw #1111) indicate unmet need for cost/performance monitoring
- **Local-First Models:** Ollama/OpenRouter compatibility issues across 5+ projects signal need for better local LLM testing infrastructure

---

**Summary:** OpenClaw remains the volume leader but faces quality scaling challenges. ZeroClaw and IronClaw demonstrate the most mature architectures for enterprise adoption. NanoClaw and TinyClaw are leading the multi-backend decoupling trend. The ecosystem is converging on MCP, skills-as-repos, and HITL patterns—projects that operationalize these while solving context management and security-usability tension will define the next generation.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-03-20

## 1. Today's Overview
NanoBot demonstrates **highly active development** with significant community engagement, evidenced by 29 active issues and 53 pull requests updated in the last 24 hours. The project is currently in an intensive iteration phase, focusing heavily on ** extensibility, multi-channel support, and security enhancements**. While no official releases occurred today, the volume of PRs suggests substantial preparation for a future release, alongside active community troubleshooting for channel integrations (Telegram, Feishu, QQ).

---

## 2. Releases
**No new releases** were recorded today.

---

## 3. Project Progress
Today's progress was marked by the closure of 12 PRs (mostly merges) and active development across security, observability, and core agent loop logic.

**Merged/Closed Progress:**
*   **Security Hardening (Runtime Secrets):** PRs [#2212](https://github.com/HKUDS/nanobot/pull/2212) and [#2265](https://github.com/HKUDS/nanobot/pull/2265) were merged, introducing runtime resolution for secret references (e.g., `{env:VAR}`). This prevents sensitive keys from persisting in raw config objects and allows environment variable injection.
*   **Observability:** PR [#1490](https://github.com/HKUDS/nanobot/pull/1490) was merged, adding **Langfuse** tracing support for LiteLLM and custom providers, enhancing debugging and cost tracking capabilities.

**Key Features & Fixes Advancing (Open PRs):**
*   **Agent Loop Stability:** PR [#2271](https://github.com/HKUDS/nanobot/pull/2271) proposes a `CycleDetector` to prevent infinite tool call loops.
*   **Telegram UX:** PR [#2106](https://github.com/HKUDS/nanobot/pull/2106) adds configurable "react to messages" for read receipts.
*   **Discord Channel:** PR [#1341](https://github.com/HKUDS/nanobot/pull/1341) is advancing a complete web-chat channel with SSE streaming, and PR [#2269](https://github.com/HKUDS/nanobot/pull/2269) adds setup documentation.
*   **Logging/Tracing:** PR [#2268](https://github.com/HKUDS/nanobot/pull/2268) introduces `ConversationCallback` for non-invasive LiteLLM call tracing to JSONL.

---

## 4. Community Hot Topics
The community is actively discussing architectural improvements and channel-specific behaviors.

1.  **Real-time Interaction in Agent Loops (18 comments):**
    *   **Issue:** [#2133](https://github.com/HKUDS/nanobot/issues/2133)
    *   **Analysis:** Users want the ability to inject messages *during* complex agent executions (e.g., for approvals) rather than waiting for the loop to finish. This signals a strong need for **asynchronous human-in-the-loop (HITL)** capabilities. This aligns with the open "Steering Loop" architecture proposed in PR [#1224](https://github.com/HKUDS/nanobot/pull/1224).

2.  **Security & Config Isolation (9 comments):**
    *   **Issue:** [#1873](https://github.com/HKUDS/nanobot/issues/1873)
    *   **Analysis:** Concerns about the agent accessing its own `config.json` via `exec()` tools and leaking keys. The recent merge of secret reference PRs ([#2212](https://github.com/HKUDS/nanobot/pull/2212)) addresses part of this, but users are requesting container-level user isolation.

3.  **Telegram Duplicate Responses (7-8 comments):**
    *   **Issues:** [#1692](https://github.com/HKUDS/nanobot/issues/1692), [#2235](https://github.com/HKUDS/nanobot/issues/2235)
    *   **Analysis:** A recurring bug where Telegram shows messages twice (likely Markdown vs. raw). Users suspect issues with "faux streaming" implementation.

---

## 5. Bugs & Stability
Today saw several bug reports, primarily related to channel integrations and the new onboarding wizard.

| Severity | Issue / PR | Description | Status/Fix |
| :--- | :--- | :--- | :--- |
| **High** | **[#2200](https://github.com/HKUDS/nanobot/issues/2200)** | **Anthropic Provider Failure:** `litellm.BadRequestError` blocking all Anthropic usage. | **Unresolved** - Likely an upstream LiteLLM issue. |
| **Medium** | **[#2266](https://github.com/HKUDS/nanobot/pull/2266)** | **Onboard Wizard Crash:** `nanobot onboard` crashes and corrupts config if user selects "N". | **Fix Available** in PR #2266. |
| **Medium** | **[#1692](https://github.com/HKUDS/nanobot/issues/1692)** | **Telegram Duplication:** Bot replies shown twice on mobile/client. | **Open** - Related to streaming logic. |
| **Medium** | **[#2273](https://github.com/HKDS/nanobot/issues/2273)** | **MCP Incompatibility:** Browser-use MCP fails with GPT-5.4/OpenRouter due to schema validation (`oneOf`/`anyOf`). | **Unresolved** - Schema validation issue. |
| **Low** | **[#2250](https://github.com/HKUDS/nanobot/issues/2250)** | **Config Flag Error:** `onboard` command fails with `-c` flag (CLI option missing). | **Open** |

---

## 6. Feature Requests & Roadmap Signals
The community is pushing for more robust control over the agent's execution environment and broader connectivity.

*   **Plugin/Extension System:** Issue [#2231](https://github.com/HKUDS/nanobot/issues/2231) requests a formal plugin system (manifest-based) similar to Copilot CLI. **High likelihood of future adoption** given the trend in agent frameworks.
*   **Dynamic Model Switching:** Issue [#2257](https://github.com/HKUDS/nanobot/issues/2257) requests changing models via Telegram commands. A popular user convenience feature.
*   **Enhanced Feishu/QQ Support:** Requests for handling images ([#2242](https://github.com/HKUDS/nanobot/issues/2242)), topics ([#2256](https://github.com/HKUDS/nanobot/issues/2256)), and file transfers ([#2226](https://github.com/HKUDS/nanobot/issues/2226)) indicate strong enterprise/Asian market usage.
*   **Steering Loop:** PR [#1224](https://github.com/HKUDS/nanobot/pull/1224) remains a critical architectural proposal to allow dynamic task interruption.

---

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by **channel-specific bugs** (Telegram duplicates, Feishu image handling) and **provider instability** (Anthropic/OpenRouter errors). The `onboard` wizard is appreciated but currently fragile (crashes on exit).
*   **Satisfaction:** There is strong approval for the **interactive configuration wizard** concept ([#2018](https://github.com/HKUDS/nanobot/issues/2018)) and the new **security measures** for environment variables.
*   **Use Cases:** Heavy usage in **multi-platform messaging** (Telegram, Feishu, QQ, Discord) and **scheduled tasks** (cron jobs).

---

## 8. Backlog Watch
*   **PR [#1224](https://github.com/HKUDS/nanobot/pull/1224) (Steering Loop):** A massive architectural improvement (58+ comments, active since Feb) that needs maintainer review/merge to resolve the "queue blocking" issues described in #2133.
*   **Issue [#1873](https://github.com/HKUDS/nanobot/issues/1873) (Security):** Critical security concern about `exec()` accessing config. While mitigated by recent PRs, container isolation is still requested.
*   **PR [#1667](https://github.com/HKUDS/nanobot/pull/1667) (QQ File Support):** Open since early March, highly requested by the community to bring QQ channel to feature parity.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-03-20

## 1. Today's Overview
ZeroClaw demonstrates **extremely high development velocity** with 50 PRs updated (76% merged) and 43 issues processed (77% closed) in the last 24 hours. The project shipped **10 new releases**, rapidly iterating from beta builds to the stable **v0.5.1** milestone. Key themes include **autonomous skill creation**, **runtime model flexibility**, **internationalization**, and significant **security architecture refinements**. The contributor base is active and diverse, blending human developers with AI-assisted coding (Claude Opus 4.6 credited as a contributor).

---

## 2. Releases

### **v0.5.1** (Stable)
The headline release introduces major capability expansions:
- **Runtime Model Switching**: New `model_switch` tool allows agents to dynamically swap models mid-session
- **Autonomous Skill Creation**: Agents can now create reusable skills from multi-step tasks automatically
- **Configurable Sub-Agent Timeouts**: `delegate` timeouts now configurable via `config.toml`
- **Heartbeat Optimization**: Default interval reduced from 30→5 minutes; pruned from auto-save to reduce overhead
- **i18n Foundation**: Tool descriptions externalized for translation support

### **Beta Series** (v0.5.1-beta.379 → v0.5.1-beta.403)
Incremental releases focused on:
- `read_skill` tool for compact mode reliability
- Slack `thread_replies` channel option
- Polish and stability improvements

---

## 3. Project Progress

### Merged Feature PRs
| PR | Description | Impact |
|----|-------------|--------|
| [#4002](https://github.com/zeroclaw-labs/zeroclaw/pull/4002) | Inject security policy summary into LLM system prompt | LLM now aware of constraints before tool calls — reduces trial-and-error |
| [#3955](https://github.com/zeroclaw-labs/zeroclaw/pull/3955) | Respect autonomy level in channel prompts | Full-autonomy mode executes directly; supervised mode explains blocks |
| [#3953](https://github.com/zeroclaw-labs/zeroclaw/pull/3953) | Configurable `allow_scripts` audit option | Restores ability to use shell scripts in skills (regression fix) |
| [#3942](https://github.com/zeroclaw-labs/zeroclaw/pull/3942) | TTS voice reply support for Telegram | Parity with WhatsApp voice-chat mode |
| [#3899](https://github.com/zeroclaw-labs/zeroclaw/pull/3899) | OpenRouter timeout respect | Fixes hardcoded 120s timeout; now uses `provider_timeout_secs` |

### Infrastructure & Fixes
- [#3941](https://github.com/zeroclaw-labs/zeroclaw/pull/3941): Fixed `Cargo.toml` manifest warning (moved `include` from `[lib]` to `[package]`)
- [#3840](https://github.com/zeroclaw-labs/zeroclaw/pull/3840): Fixed Docker build failures from `.dockerignore` conflicts
- [#3981](https://github.com/zeroclaw-labs/zeroclaw/pull/3981): Fixed `cargo check --all-features` failure (missing `OtelObserver` match arms)

---

## 4. Community Hot Topics

### Most Discussed Issues
| Issue | Comments | Theme | Analysis |
|-------|----------|-------|----------|
| [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) | 42 | Security vs. Usability | User frustration that strict defaults block even basic operations (installing ffmpeg). Demands "full permission" config toggle for personal/non-production use. |
| [#3882](https://github.com/zeroclaw-labs/zeroclaw/issues/3882) | 8 | Provider Integration | Request for Alibaba Cloud 百炼 (Bailian) Coding Plan support — 401/405 errors currently. Signals strong Chinese market adoption. |
| [#1865](https://github.com/zeroclaw-labs/zeroclaw/issues/1865) | 6 | HITL Expansion | Extend human-in-the-loop approval to Telegram via inline buttons. Currently hardcoded auto-approve for non-CLI channels. |
| [#1889](https://github.com/zeroclaw-labs/zeroclaw/issues/1889) | 5 | Skill Security | Skills with shell scripts blocked with no opt-out. (Now addressed by PR #3953/#4001) |

### Key Insight
The **#1 pain point** (42 comments) reveals a fundamental tension: ZeroClaw's security-first philosophy conflicts with users wanting a "personal toy" experience. The project needs clearer documentation or a "developer mode" preset.

---

## 5. Bugs & Stability

### Critical (S1 - Workflow Blocked)
| Issue | Description | Status |
|-------|-------------|--------|
| [#3786](https://github.com/zeroclaw-labs/zeroclaw/issues/3786) | GPT-5.4/Codex intermittent failures (retry exhaustion) | Open |
| [#3922](https://github.com/zeroclaw-labs/zeroclaw/issues/3922) / [#3999](https://github.com/zeroclaw-labs/zeroclaw/issues/3999) | Ollama tool-calling handshake failure — no security prompts or tool execution | Open — duplicates likely |
| [#3977](https://github.com/zeroclaw-labs/zeroclaw/issues/3977) | Anthropic prompt caching 0% hit rate on Haiku 4.5 | Closed (no resolution noted) |
| [#3991](https://github.com/zeroclaw-labs/zeroclaw/issues/3991) | Homebrew install missing frontend | Closed |
| [#3983](https://github.com/zeroclaw-labs/zeroclaw/issues/3983) | Sandbox config exists but never applied to shell commands | Closed — **severe security gap** |

### Moderate (S2 - Degraded Behavior)
| Issue | Description | Status |
|-------|-------------|--------|
| [#3952](https://github.com/zeroclaw-labs/zeroclaw/issues/3952) | `autonomy.level = "full"` ignored in Telegram/Web UI | Closed — addressed by PR #3955 |
| [#3845](https://github.com/zeroclaw-labs/zeroclaw/issues/3845) | `/new` doesn't refresh skills or system prompt cache | Closed |
| [#3982](https://github.com/zeroclaw-labs/zeroclaw/issues/3982) | Severe hallucination on Raspberry Pi | Open — possibly model/provider-specific |

### Fix PRs Available
- [#4003](https://github.com/zeroclaw-labs/zeroclaw/pull/4003): Jira tool panics and deduplication bugs
- [#4004](https://github.com/zeroclaw-labs/zeroclaw/pull/4004): Delegate agent timeout config regression

---

## 6. Feature Requests & Roadmap Signals

### High-Signal Requests
| Issue | Votes | Prediction |
|-------|-------|------------|
| [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | 👍 2 | "Full" Docker image with all feature flags — likely to be addressed given low barrier to implementation |
| [#2401](https://github.com/zeroclaw-labs/zeroclaw/issues/2401) | 👍 2 | `/reasoning` and `/stop` commands — strong UX improvement, candidate for next minor version |
| [#3887](https://github.com/zeroclaw-labs/zeroclaw/issues/3887) | — | Claude Code + Amazon Bedrock integration — enterprise demand signal |
| [#2602](https://github.com/zeroclaw-labs/zeroclaw/issues/2602) | — | LiteLLM as registered provider alias — already has implementation pattern from vLLM/SGLang |

### Open PRs Likely to Merge Soon
- [#4001](https://github.com/zeroclaw-labs/zeroclaw/pull/4001): `allow_scripts` for skills (conflicts resolved)
- [#4000](https://github.com/zeroclaw-labs/zeroclaw/pull/4000): Calculator tool for arithmetic/statistical accuracy
- [#3997](https://github.com/zeroclaw-labs/zeroclaw/pull/3997): Jira integration tool
- [#3986](https://github.com/zeroclaw-labs/zeroclaw/pull/3986): Theme system and settings modal for Web UI

---

## 7. User Feedback Summary

### Positive Signals
- Users appreciate the **security-first design** but want balance with usability
- **Multi-channel support** (Telegram, Slack, WhatsApp, Matrix) valued highly
- **Skill system** seen as powerful differentiator

### Pain Points
1. **Security friction**: Default policies too restrictive; users want an obvious "relaxed mode" for personal projects
2. **Provider compatibility**: Ollama, local LLM servers, and non-standard providers frequently break tool-calling
3. **Context management**: Several reports of "running out of context almost immediately" ([#3987](https://github.com/zeroclaw-labs/zeroclaw/issues/3987))
4. **Documentation gaps**: Configuration complexity cited as barrier ([#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478))
5. **Platform-specific issues**: Raspberry Pi users report hallucinations and resource constraints

---

## 8. Backlog Watch

### Needs Maintainer Attention
| Item | Age | Why Important |
|------|-----|---------------|
| [#3141](https://github.com/zeroclaw-labs/zeroclaw/pull/3141) | 10 days | Matrix channel E2EE verification — key for enterprise adoption |
| [#3296](https://github.com/zeroclaw-labs/zeroclaw/pull/3296) | 8 days | Expose autonomy constraints to model — overlaps with merged #4002, may need closure |
| [#3911](https://github.com/zeroclaw-labs/zeroclaw/pull/3911) | 2 days | Claude Code full agent mode upgrade — significant capability expansion |
| [#3882](https://github.com/zeroclaw-labs/zeroclaw/issues/3882) | 2 days | Alibaba Cloud Bailian support — strategic for Chinese market |

### Orphaned High-Impact Issues
- [#2404](https://github.com/zeroclaw-labs/zeroclaw/issues/2404): Security policy not exposed to LLM (now addressed by merged #4002)
- [#2400](https://github.com/zeroclaw-labs/zeroclaw/issues/2400): Agent can escalate permissions via config.toml write — **security vulnerability** marked closed but no explicit fix noted

---

*Digest generated from 93 GitHub events (43 issues, 50 PRs) on 2026-03-20*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-03-20

## 1. Today's Overview
PicoClaw demonstrates **high velocity** development activity with a balanced 52% merge rate across 104 pull requests, indicating healthy code review practices despite rapid iteration. The project shipped a new nightly build (`v0.2.3-nightly.20260319`) continuing the march toward the next stable release. Community engagement remains robust with 41 issues updated, primarily focused on expanding **multimodal capabilities (TTS/ASR)** and resolving **provider compatibility** challenges with OpenRouter and Anthropic. The primary areas of focus today are stabilizing the **Launcher/Gateway architecture** and improving the reliability of **Channel integrations** (Feishu, Telegram).

## 2. Releases
- **nightly: Nightly Build (v0.2.3-nightly.20260319)**
  - **Type:** Automated nightly build
  - **Changes:** Snapshot of `main` branch as of commit `e73d9d95`.
  - **Stability Warning:** Marked as potentially unstable; recommended for testing environments only.
  - **Full Changelog**: [v0.2.3...main](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)

## 3. Project Progress
Today's merged PRs (52 total) focused heavily on **stability, documentation, and dependency maintenance**:

-   **Tooling & Subagent Fixes:** Critical fix merged in [PR #1711](https://github.com/sipeed/picoclaw/pull/1711), propagating the tool registry to subagents. This resolves a "tool not found" error in multi-agent workflows.
-   **Channel Stability:** [PR #1390](https://github.com/sipeed/picoclaw/pull/1390) fixed a bug where the Telegram typing indicator persisted indefinitely if the LLM failed or hung.
-   **Documentation:** [PR #1740](https://github.com/sipeed/picoclaw/pull/1740) clarified that workspace markdown files (like `AGENTS.md`) hot-reload without requiring a gateway restart.
-   **CI/Dependencies:** Multiple dependency bumps merged, including `goreleaser-action` (v7) and `docker/setup-qemu-action` (v4).

## 4. Community Hot Topics
High engagement centered on architectural expansion and integration struggles:

1.  **[Issue #1648] [Feature] Adding TTS and ASR Support** - **14 Comments**
    -   **Analysis:** The most active thread discusses adding Text-to-Speech and Speech-to-Text. The community is eager for voice-enabled agents. A related PR exists, but integration into the main gateway is pending.
    -   **Link:** [sipeed/picoclaw Issue #1648](https://github.com/sipeed/picoclaw/issues/1648)
2.  **[Issue #901] I can't add openrouter/free model** - **12 Comments**
    -   **Analysis:** Users are struggling to configure free-tier models via OpenRouter, indicating friction in the default provider setup or model listing logic.
    -   **Link:** [sipeed/picoclaw Issue #901](https://github.com/sipeed/picoclaw/issues/901)
3.  **[Issue #100] "Completed processing but no response"** - **11 Comments**
    -   **Analysis:** A recurring bug where the agent silently fails to output text after thinking. This highlights reliability issues in the response generation pipeline, specifically with third-party providers.
    -   **Link:** [sipeed/picoclaw Issue #100](https://github.com/sipeed/picoclaw/issues/100)

## 5. Bugs & Stability
Several critical bugs affecting usability were reported or addressed today:

-   **Subagent Tool Failure (FIXED):** [PR #1711](https://github.com/sipeed/picoclaw/pull/1711) fixed a regression where subagents could not access tools, essentially breaking multi-agent systems.
-   **Anthropic API 400 Errors:** [Issue #1792](https://github.com/sipeed/picoclaw/issues/1792) reports that PicoClaw sends duplicate/unmerged `tool_result` blocks to Anthropic, causing API rejections. **(High Severity)**
-   **Feishu Channel Instability:** [Issue #1767](https://github.com/sipeed/picoclaw/issues/1767) notes frequent disconnections and silent failures in the Feishu channel.
-   **Gateway/Launcher Detection:** [PR #1811](https://github.com/sipeed/picoclaw/pull/1811) addresses a bug where the launcher fails to recognize an externally managed gateway (e.g., systemd), potentially spawning duplicate processes.

## 6. Feature Requests & Roadmap Signals
User demand is driving the project toward becoming a more comprehensive automation hub:

-   **Multimodal Support:** Strong push for native Audio (TTS/ASR) integration ([Issue #1648](https://github.com/sipeed/picoclaw/issues/1648)).
-   **Event-Driven Architecture:** [Issue #1796](https://github.com/sipeed/picoclaw/issues/1796) proposes a Hooks system for triggering skills based on events (like message received), moving beyond just scheduled (Cron) or manual triggers.
-   **Email Channel:** [Issue #1794](https://github.com/sipeed/picoclaw/issues/1794) requests email-as-a-channel to integrate PicoClaw into legacy workflows.
-   **OpenAI-Compatible Output Channel:** [Issue #1738](https://github.com/sipeed/picoclaw/issues/1738) suggests exposing PicoClaw's agent capabilities via a standard OpenAI-compatible API endpoint, allowing other apps to use PicoClaw as a backend.

## 7. User Feedback Summary
-   **Pain Point - Provider Config:** Users find the `model_list` configuration non-DRY and confusing regarding API key inheritance ([Issue #1635](https://github.com/sipeed/picoclaw/issues/1635)).
-   **Pain Point - Feedback Loop:** Lack of progress indicators during long tool executions leaves users unsure if the bot is working ([Issue #571](https://github.com/sipeed/picoclaw/issues/571)).
-   **Use Case - Mobile/Edge Deployments:** Increased requests for ARMv7/Armhf support ([Issue #1778](https://github.com/sipeed/picoclaw/issues/1778), [Issue #1675](https://github.com/sipeed/picoclaw/issues/1675)), showing PicoClaw is being used on mobile devices (Termux) and Raspberry Pis.
-   **Satisfaction:** The quick fix for subagent tooling was well-received, restoring functionality for advanced users leveraging multi-agent architectures.

## 8. Backlog Watch
-   **[Issue #1648] Audio Support:** While heavily discussed, the integration PR is stalled. This is a high-value feature needing maintainer review to finalize the architecture.
-   **[Issue #1439] Context Management Refactor:** A deep architectural discussion on token budgeting and history compression. This is critical for long-term memory and session cost management but appears complex and needs strategic direction.
-   **[Issue #629] LLM Call Retry Logic:** An older bug (from Feb 2026) regarding missing retry logic on HTTP 500 errors. It is still open and affects reliability for long-running tasks.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-20

## 1. Today's Overview

NanoClaw shows **very high development velocity** today with 32 pull requests updated (22 open, 10 merged/closed) and 14 active issues. The community is driving significant expansion of the platform's communication channels (Discord, Signal, Email, Web) while simultaneously hardening security and refactoring core architecture. Multiple PRs aim to decouple the project from the Anthropic SDK, proposing alternative runtimes like OpenAI Codex and direct Claude CLI integration. This indicates a maturing project transitioning from a single-vendor tool to a multi-backend agent platform.

---

## 2. Releases

No new releases were published today. The project appears to be in an active development phase accumulating features and fixes for a future minor or major version bump.

---

## 3. Project Progress

**Security Hardening:**
- **[#1191](https://github.com/qwibitai/nanoclaw/pull/1191) [MERGED]** — Fixed a high-severity security issue (Issue #1150) where container error logs exposed full user prompts. Logs are now redacted by default.
- **[#1271](https://github.com/qwibitai/nanoclaw/pull/1271) [OPEN]** — Proposed adding a `block-no-verify` hook to prevent agents from bypassing Git hooks during automated commits.

**New Channel Integrations:**
- **[#1269](https://github.com/qwibitai/nanoclaw/pull/1269) [MERGED]** — Added Telegram voice message transcription via local Whisper service.
- **[#1121](https://github.com/qwibitai/nanoclaw/pull/1121) [OPEN]** — Signal channel implementation via `signal-cli`.
- **[#1251](https://github.com/qwibitai/nanoclaw/pull/1251) [OPEN]** — Email support via OpenMail integration.
- **[#1265](https://github.com/qwibitai/nanoclaw/pull/1265) [OPEN]** — Discord "Agent Swarm" support for multi-agent collaboration.

**Core Architecture & Performance:**
- **[#651](https://github.com/qwibitai/nanoclaw/pull/651) [MERGED]** — Reduced Docker stop timeout from 10s to 1s, speeding up service restarts by ~10x.
- **[#1266](https://github.com/qwibitai/nanoclaw/pull/1266) [OPEN]** — Major refactor proposing replacement of `@anthropic-ai/claude-agent-sdk` with direct Claude Code CLI to address TOS compliance.
- **[#963](https://github.com/qwibitai/nanoclaw/pull/963) [OPEN]** — Adding OpenAI Codex SDK as an alternative agent engine (`AGENT_ENGINE=codex`).

---

## 4. Community Hot Topics

| Issue/PR | Activity | Theme | Analysis |
|----------|----------|-------|----------|
| **[#1273](https://github.com/qwibitai/nanoclaw/issues/1273)** | Active discussion | Web Interface | User built a multi-session web channel, highlighting demand for non-messenger interfaces and simpler installation. |
| **[#1263](https://github.com/qwibitai/nanoclaw/issues/1263)** | Closed, implemented | Multi-group Collaboration | Cross-repo agent collaboration via shared Telegram groups addresses enterprise/team workflows. |
| **[#1280](https://github.com/qwibitai/nanoclaw/pull/1280)** | Open | Telemetry | Opt-in diagnostics via PostHog sparked discussion about privacy vs. maintainers' need for usage data. |
| **[#1281](https://github.com/qwibitai/nanoclaw/pull/1281)** | Open | VPS/Headless Support | Fixing headless Linux browser fallback addresses a major pain point for server deployments. |

**Underlying Needs:** The community wants NanoClaw to be a **multi-interface, multi-backend** platform. Users are building their own integrations when official ones don't exist, indicating strong extensibility demand.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 **High** | **[#1150](https://github.com/qwibitai/nanoclaw/issues/1150)** | Security: Container error logs included full user prompt content | ✅ **Fixed** in [PR #1191](https://github.com/qwibitai/nanoclaw/pull/1191) |
| 🟡 **Medium** | **[#853](https://github.com/qwibitai/nanoclaw/issues/853)** | Setup verification doesn't recognize `ANTHROPIC_AUTH_TOKEN` | Open since 2026-03-09 |
| 🟡 **Medium** | **[#413](https://github.com/qwibitai/nanoclaw/issues/413)** | Linux systemd user session fallback always defaults to `nohup` | Open since 2026-02-23 |
| 🟡 **Medium** | **[#1272](https://github.com/qwibitai/nanoclaw/issues/1272)** | DB migration incorrectly marks Telegram DMs as groups (`is_group=1`) | No fix PR yet |
| 🟡 **Medium** | **[#1267](https://github.com/qwibitai/nanoclaw/pull/1267)** | Credential proxy doesn't prepend base URL pathname | Fix PR open |

**Automation Note:** The merge-forward workflow for skill branches (`skill/apple-container`, `skill/compact`) has failed repeatedly (Issues [#1276](https://github.com/qwibitai/nanoclaw/issues/1276)-[#1279](https://github.com/qwibitai/nanoclaw/issues/1279), [#1261](https://github.com/qwibitai/nanoclaw/issues/1261)), requiring manual intervention.

---

## 6. Feature Requests & Roadmap Signals

**Likely Near-Term Additions:**
1. **Telegram Emoji Reactions** ([#1282](https://github.com/qwibitai/nanoclaw/issues/1282)) — Closed issue suggests implementation is planned/ongoing.
2. **Custom API Endpoints** ([#1257](https://github.com/qwibitai/nanoclaw/pull/1257)) — Support for third-party Anthropic-compatible APIs (z.ai, etc.).
3. **API Usage Tracking** ([#1111](https://github.com/qwibitai/nanoclaw/pull/1111)) — SQLite-based cost/token tracking for enterprise observability.
4. **Auto-registration in new groups** ([#1275](https://github.com/qwibitai/nanoclaw/issues/1275)) — Better UX when bot is added to unregistered Telegram groups.

**Strategic Direction Signals:**
- Multiple PRs ([#963](https://github.com/qwibitai/nanoclaw/pull/963), [#1266](https://github.com/qwibitai/nanoclaw/pull/1266)) indicate a roadmap shift toward **multi-backend support** (Claude CLI, OpenAI Codex).
- **Skills-as-repos** architecture is emerging as the standard for extensibility (Signal skill [#1121](https://github.com/qwibitai/nanoclaw/pull/1121), Discord swarm [#1265](https://github.com/qwibitai/nanoclaw/pull/1265)).

---

## 7. User Feedback Summary

**Pain Points:**
- **Headless Linux deployments** are frustrating — `xdg-open` silently fails without `$DISPLAY` ([#1281](https://github.com/qwibitai/nanoclaw/pull/1281)).
- **Authentication configuration** is confusing — multiple token types (`CLAUDE_CODE_OAUTH_TOKEN`, `ANTHROPIC_API_KEY`, `ANTHROPIC_AUTH_TOKEN`) aren't uniformly supported ([#853](https://github.com/qwibitai/nanoclaw/issues/853)).
- **Third-party API users** (z.ai, etc.) struggle with base URL pathname handling ([#1257](https://github.com/qwibitai/nanoclaw/pull/1257), [#1267](https://github.com/qwibitai/nanoclaw/pull/1267)).

**Positive Signals:**
- User in [#1273](https://github.com/qwibitai/nanoclaw/issues/1273) praised the tool as "wonderful" and successfully built their own web channel extension.
- Active community contributions for new channels (Discord, Signal, Email) show high satisfaction and investment.

---

## 8. Backlog Watch

| Item | Age | Concern |
|------|-----|---------|
| **[#413](https://github.com/qwibitai/nanoclaw/issues/413)** | ~1 month | Linux systemd user session handling remains unfixed — impacts VPS/server users significantly. |
| **[#853](https://github.com/qwibitai/nanoclaw/issues/853)** | 11 days | Auth token compatibility gap causes setup failures for users migrating from Claude Code CLI. |
| **[#963](https://github.com/qwibitai/nanoclaw/pull/963)** | 9 days | OpenAI Codex alternative engine PR needs maintainer decision — strategic architecture question. |
| **[#1121](https://github.com/qwibitai/nanoclaw/pull/1121)** | 4 days | Signal channel PR awaiting review — complete implementation with external repo reference. |
| **[#1111](https://github.com/qwibitai/nanoclaw/pull/1111)** | 5 days | API usage tracking feature comprehensive but needs review — valuable for enterprise adoption. |

**Automation Debt:** The repeated merge-forward failures for skill branches (5+ failures in 24h) suggest the branching strategy or automation needs maintenance attention.

---

*Digest generated from 46 GitHub events (14 issues, 32 PRs) on 2026-03-20.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest - 2026-03-20

## Today's Overview
IronClaw shows **very high activity** with the release of **v0.20.0**, a significant milestone introducing self-repair capabilities and a new fault injection testing framework. The project processed 50 issues (37 closed) and 50 PRs (23 merged) in the last 24 hours, indicating strong maintainer engagement and CI automation. The majority of activity centers around the "staging-ci-review" pipeline, where an automated code review bot generated detailed technical feedback on performance, security, and correctness. While the high issue closure rate is positive, it primarily reflects automated triage rather than user-reported bug resolutions.

## Releases

### v0.20.0 (2026-03-19)

**Key Additions:**
- **Self-Repair Mechanism** ([#712](https://github.com/nearai/ironclaw/pull/712)): Wired `stuck_threshold` configuration, persistent store, and builder pattern — enabling agents to detect and recover from stuck states autonomously.
- **Fault Injection Framework** ([#1233](https://github.com/nearai/ironclaw/pull/1233)): Added `FaultInjector` for `StubLlm` to simulate LLM failures, timeouts, and malformed responses in tests.
- **Gateway UI**: Unified settings page with subtabs for improved configuration UX.

**Migration Note:** No explicit migration steps documented in release notes. However, see Issue #1328 regarding migration checksum issues from v0.19.0 that may affect upgraders.

---

## Project Progress

### Merged/Closed PRs (23 total)

| PR | Scope | Summary |
|---|---|---|
| [#333](https://github.com/nearai/ironclaw/pull/333) | channel/wasm | **Slack Socket Mode** — WebSocket-based NAT-friendly Slack connectivity merged after month-long review |
| [#235](https://github.com/nearai/ironclaw/pull/235) / [#1423](https://github.com/nearai/ironclaw/pull/1423) | workspace | **LRU Embedding Cache** — In-memory cache for embedding calls, reduces redundant HTTP requests |
| [#236](https://github.com/nearai/ironclaw/pull/236) | orchestrator | **Fallback Deliverables** — Structured output for failed/stuck jobs instead of opaque errors |
| [#1424](https://github.com/nearai/ironclaw/pull/1424) | ci | Automated WASM artifact checksum updates |

### Active Development (Open PRs advancing)

- **[#1187](https://github.com/nearai/ironclaw/pull/1187)** (XL): Adaptive learning system with skill synthesis and user profiles — 30+ review iterations
- **[#744](https://github.com/nearai/ironclaw/pull/744)** (XL): OpenAI Codex as LLM provider for ChatGPT Pro/Plus subscribers
- **[#1356](https://github.com/nearai/ironclaw/pull/1356)** (XL): Full Gemini CLI OAuth integration
- **[#1375](https://github.com/nearai/ironclaw/pull/1375)** (XL): Generic hosted OAuth/MCP auth refactoring

---

## Community Hot Topics

### Most Discussed Issues

| Issue | Engagement | Topic |
|---|---|---|
| [#826](https://github.com/nearai/ironclaw/issues/826) | 3 comments | Unbounded message Vec growth in tool loops — memory/context bloat risk |
| [#815](https://github.com/nearai/ironclaw/issues/815) | 3 comments | User metadata bypassing token budget validation |
| [#1155](https://github.com/nearai/ironclaw/issues/1155) | 2 comments | **User request**: Slack Socket Mode support (now resolved by merged PR #333) |
| [#1328](https://github.com/nearai/ironclaw/issues/1328) | 2 comments, 2 👍 | **Upgrade blocker**: Migration checksum mismatch on PostgreSQL |

### Analysis
The high comment counts on staging-ci issues reflect maintainer discussion on automated findings rather than community debate. The only genuine user-driven discussion is **#1328** (migration failure) which has community validation (2 👍). Issue #1155 requesting Slack Socket Mode was resolved with PR #333's merge.

---

## Bugs & Stability

### Critical / High Severity Issues

| Severity | Issue | Status | Description | Fix Available |
|---|---|---|---|---|
| **CRITICAL** | [#1414](https://github.com/nearai/ironclaw/issues/1414) | CLOSED | Version mismatch in Telegram artifact URL | Likely fixed in v0.20.0 |
| **HIGH** | [#826](https://github.com/nearai/ironclaw/issues/826) | CLOSED | Unbounded message Vec in tool loop | Closed (presumed fixed) |
| **HIGH** | [#815](https://github.com/nearai/ironclaw/issues/815) | CLOSED | Token budget bypass via metadata | Closed (presumed fixed) |
| **HIGH** | [#814](https://github.com/nearai/ironclaw/issues/814) | CLOSED | Token budget not persisted to DB | Closed (presumed fixed) |
| **HIGH** | [#858](https://github.com/nearai/ironclaw/issues/858) | CLOSED | N+1 query in secrets credential injection | Closed (presumed fixed) |
| **HIGH** | [#1103](https://github.com/nearai/ironclaw/issues/1103) | CLOSED | SSRF via embedding base URL | Closed (presumed fixed) |

### Active/Open Bugs

| Issue | Severity | Description |
|---|---|---|
| [#1328](https://github.com/nearai/ironclaw/issues/1328) | HIGH | **Upgrade failure** — V6__routines migration checksum mismatch blocks v0.19.0 upgrades (2 users affected) |

### Patterns Observed
The staging-ci bot identified systemic issues:
- **Token budget enforcement gaps** (multiple bypass vectors)
- **Stringly-typed configurations** causing maintenance burden
- **Performance anti-patterns** (N+1 queries, unbounded allocations, RwLock on hot paths)
- **Unsafe `.unwrap()` calls** in production code paths

---

## Feature Requests & Roadmap Signals

### In Progress / Likely Near-Term

| Feature | PR | Status | Signals |
|---|---|---|---|
| Adaptive learning / skill synthesis | [#1187](https://github.com/nearai/ironclaw/pull/1187) | OPEN (XL) | Active iteration, maintainer interest |
| Per-channel MCP/tool filtering | [#1378](https://github.com/nearai/ironclaw/pull/1378) | OPEN | Multi-channel deployment need |
| OpenAI Codex provider | [#744](https://github.com/nearai/ironclaw/pull/744) | OPEN | ChatGPT Pro/Plus user demand |
| Gemini OAuth integration | [#1356](https://github.com/nearai/ironclaw/pull/1356) | OPEN | Google ecosystem expansion |
| Per-job MCP server filtering | [#1243](https://github.com/nearai/ironclaw/pull/1243) | OPEN | Fine-grained tool control |

### User-Requested (Issues)

| Request | Issue | Status |
|---|---|---|
| Slack Socket Mode | [#1155](https://github.com/nearai/ironclaw/issues/1155) | ✅ Merged in PR #333 |

---

## User Feedback Summary

### Pain Points
1. **Migration Reliability** ([#1328](https://github.com/nearai/ironclaw/issues/1328)): Users report upgrade failures due to migration checksum changes — indicates need for better migration versioning discipline.
2. **NAT/Firewall Constraints** ([#1155](https://github.com/nearai/ironclaw/issues/1155)): Users running self-hosted instances cannot open inbound ports, driving demand for Socket Mode (now addressed).
3. **Tool Result Bugs** ([#635](https://github.com/nearai/ironclaw/pull/635)): Orphaned tool_results causing empty Anthropic API responses — affects production reliability.

### Positive Signals
- Active community contributions (multiple XL PRs from non-core contributors)
- Thorough CI automation catching deep technical issues
- Responsive maintainer engagement on complex PRs

---

## Backlog Watch

### Needs Maintainer Attention

| Item | Type | Age | Concern |
|---|---|---|---|
| [#635](https://github.com/nearai/ironclaw/pull/635) | PR (M) | 14 days | Fixes critical Anthropic tool_result bug — "contributor: new" tag may indicate review bottleneck |
| [#527](https://github.com/nearai/ironclaw/pull/527) | PR (M) | 16 days | CLI logs v2 feature — experienced contributor, CI blocked by fork limitation |
| [#1328](https://github.com/nearai/ironclaw/issues/1328) | Issue | 3 days | Migration failure blocking upgrades — needs hotfix or migration repair guidance |

### Observation
The "staging-ci-review" automation creates high issue volume (50+ issues tagged), which may bury genuinely urgent user-reported problems. The migration checksum issue (#1328) is the only user-validated blocker and warrants expedited resolution.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest (2026-03-20)

## 1. Today's Overview
LobsterAI is demonstrating **extremely high active development velocity** following its `2026.3.19` release. The project saw a massive surge in community engagement with 17 issues and 33 pull requests updated in the last 24 hours. The core team and contributors are heavily focused on **stabilizing the new OpenClaw gateway** and addressing **internationalization (i18n)** gaps. While the release introduced new enterprise integrations (WeChat/Feishu), it also triggered several regression reports regarding model compatibility and UI consistency, which are being actively addressed in real-time via hotfix PRs.

## 2. Releases
### **Version 2026.3.19** (Released 2026-03-19)
*   **Changelog**:
    *   **Dependencies**: Upgraded WeCom (Enterprise WeChat) related dependencies ([PR #482](https://github.com/netease-youdao/LobsterAI/pull/482)).
    *   **Infrastructure**: Implemented gateway restart logic ([PR #484](https://github.com/netease-youdao/LobsterAI/pull/484)).
    *   **Documentation**: Updated `AGENTS.md` with OpenClaw details, i18n guidelines, and commit conventions ([PR #530](https://github.com/netease-youdao/LobsterAI/pull/530)).

## 3. Project Progress
**Merged/Closed PRs (18 total):**
*   **Stability Fixes**:
    *   [PR #513](https://github.com/netease-youdao/LobsterAI/pull/513): Fixed `EPERM` errors on Windows when the workspace is set to a drive root (e.g., `D:`).
    *   [PR #520](https://github.com/netease-youdao/LobsterAI/pull/520): Fixed macOS code signing failures caused by residual `.bin` broken symlinks after stub package cleanup.
    *   [PR #523](https://github.com/netease-youdao/LobsterAI/pull/523): Removed sandbox functionality (performance/no-sandbox mode).
    *   [PR #527](https://github.com/netease-youdao/LobsterAI/pull/527) & [PR #528](https://github.com/netease-youdao/LobsterAI/pull/528): Optimized Windows OpenClaw gateway startup and fixed process restart race conditions.

**Open PRs Advancing Features (15 total):**
*   **Internationalization (Major Focus)**:
    *   [PR #532](https://github.com/netease-youdao/LobsterAI/pull/532): Global replacement of hardcoded strings with i18n keys.
    *   [PR #535](https://github.com/netease-youdao/LobsterAI/pull/535): Added i18n support for OpenClaw gateway status messages.
    *   [PR #536](https://github.com/netease-youdao/LobsterAI/pull/536): Fixed dark mode adaptation for MCP selectors and language coverage.
*   **New Skills**:
    *   [PR #537](https://github.com/netease-youdao/LobsterAI/pull/537): Added `github-profile` Skill for user/repo stats.
    *   [PR #538](https://github.com/netease-youdao/LobsterAI/pull/538): Added `qrcode` generation Skill.
*   **Core Fixes**:
    *   [PR #515](https://github.com/netease-youdao/LobsterAI/pull/515): Fixed OpenAI compatibility by unifying `max_completion_tokens` usage.
    *   [PR #533](https://github.com/netease-youdao/LobsterAI/pull/533): Performance optimization via batch SQL queries and fixing N+1 delete loops in memory management.

## 4. Community Hot Topics
1.  **OpenAI Model Compatibility ([Issue #501](https://github.com/netease-youdao/LobsterAI/issues/501), [Issue #20](https://github.com/netease-youdao/LobsterAI/issues/20))**
    *   **Context**: Users report errors using the latest OpenAI models (e.g., "Unsupported parameter: 'max_tokens'").
    *   **Underlying Need**: Users expect LobsterAI to automatically handle parameter differences between model versions (legacy vs. new `o`/`gpt-5` series) without manual config tweaking. *Fix currently in PR #515.*
2.  **Feishu (Lark) Bot Latency ([Issue #521](https://github.com/netease-youdao/LobsterAI/issues/521))**
    *   **Context**: Users compare LobsterAI's Feishu integration unfavorably with "ClawX", noting a lack of real-time streaming responses.
    *   **Underlying Need**: Enterprise users require streaming feedback in chat bots to know a task is being processed, rather than receiving a single monolithic reply at the end.
3.  **Engine Switching ([Issue #497](https://github.com/netease-youdao/LobsterAI/issues/497))**
    *   **Context**: Feature request to allow switching between "OpenClaw" and "CoWorker" agent kernels.
    *   **Underlying Need**: Power users want the flexibility to choose different backend engines for different tasks (e.g., one for SDK tasks, one for general logic) within the same UI.

## 5. Bugs & Stability
*   **Critical: Session Freezing ([Issue #512](https://github.com/netease-youdao/LobsterAI/pull/512) / [Issue #446](https://github.com/netease-youdao/LobsterAI/issues/446))**
    *   **Symptom**: Non-Anthropic models (e.g., GLM5) cause the UI to freeze permanently in the "Running" state.
    *   **Status**: **Fix Available in PR #512** (Adds event idle timeout mechanism).
*   **High: OpenAI API Rejection ([Issue #501](https://github.com/netease-youdao/LobsterAI/issues/501))**
    *   **Symptom**: `max_tokens` parameter error blocks usage of newest models.
    *   **Status**: **Fix Available in PR #515**.
*   **High: Feishu Bot Non-responsive ([Issue #511](https://github.com/netease-youdao/LobsterAI/issues/511))**
    *   **Symptom**: Bot works on WeCom but fails to reply on Feishu.
    *   **Status**: Investigating.
*   **Medium: Skill Upgrade Failure ([Issue #526](https://github.com/netease-youdao/LobsterAI/issues/526))**
    *   **Symptom**: Missing `version` fields in bundled skills prevent auto-updates.
    *   **Status**: **Fix Available in PR #534**.
*   **Medium: Scheduled Task Data Corruption ([Issue #318](https://github.com/netease-youdao/LobsterAI/issues/318))**
    *   **Symptom**: Manual editing results in `nan:nan` intervals.
    *   **Status**: **Fix Available in PR #517**.

## 6. Feature Requests & Roadmap Signals
*   **Engine Pluggability**: Request for OpenClaw vs. CoWorker switching ([Issue #497](https://github.com/netease-youdao/LobsterAI/issues/497)) suggests a move towards a more modular backend architecture.
*   **Enhanced Skills**: Community is actively extending the Skill library (QR codes, GitHub profiles), indicating a healthy plugin ecosystem is forming.
*   **UX Polish**: Requests for startup interface optimization ([Issue #519](https://github.com/netease-youdao/LobsterAI/issues/519)) indicate the "Gateway Starting..." phase is a friction point for users.

## 7. User Feedback Summary
*   **Pain Points**: Users are frustrated by **hardcoded Chinese strings** remaining after language switching ([Issue #524](https://github.com/netease-youdao/LobsterAI/issues/524)) and **dark mode inconsistencies** ([Issue #525](https://github.com/netease-youdao/LobsterAI/issues/525)). The transition to the "OpenClaw" gateway seems to have introduced stability jitters on Windows.
*   **Positive Signals**: Users are utilizing the tool for complex automation (scheduled tasks, specific model providers like DeepSeek/GLM).
*   **Migration Issues**: Several users reported losing configurations or functionality (like the "Sandbox" toggle) when upgrading to v3.17+ ([Issue #496](https://github.com/netease-youdao/LobsterAI/issues/496), [Issue #500](https://github.com/netease-youdao/LobsterAI/issues/500)).

## 8. Backlog Watch
*   **Issue #498** ("Bot repeats previous answer"): A potential context/memory corruption bug that hasn't received maintainer comments yet. High priority for investigation as it breaks core conversation trust.
*   **Issue #521** (Feishu Streaming): A specific feature parity request that differentiates the product from competitors.
*   **PR #533** (Performance Fix): A significant database optimization PR that needs review to improve session startup times.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest: 2026-03-20

### 1. Today's Overview
TinyClaw exhibits low-velocity but high-significance architectural activity as of March 20, 2026. While there were no new releases or user-facing bug reports in the last 24 hours, the development team is actively refactoring the core invocation logic to support a more modular future. Two substantial Pull Requests remain in an open state, indicating a focus on code quality and major feature redesigns over rapid patch releases. The project appears to be in a consolidation phase, prioritizing architectural cleanliness before introducing new user features.

### 2. Releases
*   **Status:** No new releases recorded for this period.

### 3. Project Progress
Although no PRs were merged today, two significant open Pull Requests signal active development in core architectural improvements:
*   **Core Architecture Refactoring:** Work continues on **[PR #242](https://github.com/TinyAGI/tinyagi/pull/242)**, which aims to decouple the TinyClaw CLI from specific provider implementations (Claude, Codex, OpenCode). This move towards an adapter pattern suggests the team is preparing the codebase to easily integrate future AI models or providers without modifying the core invocation script.
*   **User Experience Overhaul:** **[PR #212](https://github.com/TinyAGI/tinyagi/pull/212)** involves a complete redesign of the `/office` workspace. While opened earlier (Mar 13), updates today suggest it is undergoing final review or iteration.

### 4. Community Hot Topics
*   **Most Active Topic:** **[PR #242: Extract CLI logic into adapter pattern](https://github.com/TinyAGI/tinyagi/pull/242)**
    *   **Analysis:** This PR indicates a strategic shift toward standardizing how TinyClaw interacts with different AI backends. The community and maintainers are likely focusing on the "extensibility" of the agent framework, ensuring that switching between different LLM providers is seamless for the end-user.
*   **Secondary Topic:** **[PR #212: Redesign the live office workspace](https://github.com/TinyAGI/tinyagi/pull/212)**
    *   **Analysis:** This aligns with a trend in AI assistants moving toward persistent, interactive "workspace" environments rather than simple chat interfaces. The redesign likely aims to improve productivity for long-running tasks.

### 5. Bugs & Stability
*   **Status:** No bugs, crashes, or regressions were reported in the Issues tracker during the last 24 hours.
*   **Assessment:** The lack of bug reports alongside heavy refactoring PRs suggests the main branch is currently stable, or user focus has shifted to awaiting the new feature drops.

### 6. Feature Requests & Roadmap Signals
*   **Roadmap Signal (Modularity):** The adapter pattern introduced in **[PR #242](https://github.com/TinyAGI/tinyagi/pull/242)** is a strong signal that the next major version will likely feature a "Plugin" or "Provider" marketplace, allowing users to switch AI backends dynamically.
*   **Roadmap Signal (Workspaces):** The redesign in **[PR #212](https://github.com/TinyAGI/tinyagi/pull/212)** signals a push toward "Agentic Workflows"—environments where the AI manages files, state, and tasks over a long period, rather than single-turn interactions.

### 7. User Feedback Summary
*   **Observation:** Direct user feedback is minimal in the current dataset (0 issues, 0 comments on PRs). This silence usually implies one of two scenarios:
    1.  The user base is "wait-and-see" regarding the current architectural changes.
    2.  The project is primarily driven by core contributors rather than a broad open-source community at this specific moment.
*   **Implicit Needs:** The architectural changes suggest users are demanding better compatibility with different AI providers (e.g., "Make it work with Claude *and* Codex seamlessly"), which the maintainers are actively addressing.

### 8. Backlog Watch
*   **[PR #212: feat(office): redesign the live office workspace](https://github.com/TinyAGI/tinyagi/pull/212)**: This PR has been open for approximately one week (since Mar 13) and was updated today. It requires maintainer attention to verify if it is ready for a final review or if it is blocked by the ongoing core refactoring in PR #242.
*   **General Issue Backlog:** The tracker shows 0 open issues. While clean, this warrants monitoring to ensure the project isn't suffering from "issue reporting friction" (e.g., users not knowing where to report bugs).

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-03-20

## 1. Today's Overview
The Moltis project is currently experiencing moderate active development with no new official releases in the last 24 hours. Activity is primarily driven by community contributions, evidenced by two open Pull Requests focusing on platform compatibility (Windows file locking) and ecosystem expansion (Novita AI provider). Issue activity (3 open) indicates users are actively testing the "Skills" system and exploring complex multi-agent architectures. The project appears healthy but is currently relying on external contributions for feature expansion while the core team manages the backlog.

## 2. Releases
No new releases were recorded for this period.

## 3. Project Progress
While no PRs were merged today, active development is ongoing in the following areas:
*   **Windows Stability:** Progress is being made on fixing a specific file locking error (LockFileEx) that affects Windows users, currently under review in [PR #436](https://github.com/moltis-org/moltis/pull/436).
*   **Model Provider Expansion:** A new provider integration is underway for Novita AI, aiming to support models like `moonshotai/kimi-k2.5` and `deepseek/deepseek-v3.2` via [PR #451](https://github.com/moltis-org/moltis/pull/451).

## 4. Community Hot Topics
The most engaged discussion is occurring in the **Enhancement** category:
*   **Tool Search Feature ([Issue #313](https://github.com/moltis-org/moltis/issues/313)):** Updated recently with 6 comments and 2 reactions. This suggests a strong user need for better discovery mechanisms within the agent's toolset, likely driven by the increasing number of available skills.
*   There is also emerging interest in **Business Logic Scaling** ([Issue #453](https://github.com/moltis-org/moltis/issues/453)), where users are discussing how the "managerial agent" handles the creation of sub-agents for enterprise workflows.

## 5. Bugs & Stability
*   **Critical/High:**
    *   **Windows File Locking ([Issue #434](https://github.com/moltis-org/moltis/issues/434) / [PR #436](https://github.com/moltis-org/moltis/pull/436)):** A specific issue where `append(true)` causes `LockFileEx` OS Error 5 on Windows. A fix is currently proposed but pending merge.
*   **Medium:**
    *   **Silent Skill Failure ([Issue #452](https://github.com/moltis-org/moltis/issues/452)):** A bug report indicates that skills with valid slugs but invalid names are unpacked but omitted from `skills-manifest.json`. This "silent failure" could lead to confusion regarding why installed skills aren't loading.

## 6. Feature Requests & Roadmap Signals
*   **Tool Search ([Issue #313](https://github.com/moltis-org/moltis/issues/313)):** Given the engagement (6 comments), this feature is likely a high priority for the community to manage tool sprawl.
*   **Multi-Agent Management ([Issue #453](https://github.com/moltis-org/moltis/issues/453)):** A user raised a concern about overloading a single managerial agent. This signals a need for hierarchical agent architectures or improved delegation logic in future versions.
*   **Novita AI Support ([PR #451](https://github.com/moltis-org/moltis/pull/451)):** Signals an expansion of supported LLM backends, specifically targeting cost-effective or specialized models like DeepSeek and Kimi.

## 7. User Feedback Summary
Users are beginning to push the boundaries of the agent system, specifically regarding:
1.  **Scalability:** Concerns about the "Managerial Agent" capacity ([#453](https://github.com/moltis-org/moltis/issues/453)) suggest users are attempting complex, business-grade automations.
2.  **Developer Experience (DX):** The silent failure reported in ([#452](https://github.com/moltis-org/moltis/issues/452)) highlights frustration with opaque error handling during skill installation.
3.  **Model Variety:** The community is actively working to integrate diverse LLM providers ([#451](https://github.com/moltis-org/moltis/pull/451)), indicating a desire for flexibility beyond default providers.

## 8. Backlog Watch
*   **[Issue #313: Feature: Tool search](https://github.com/moltis-org/moltis/issues/313):** Created on March 3rd and still open with active interest. This seems like a "quick win" that would significantly improve usability and should be prioritized.
*   **[PR #436: Windows File Lock Fix](https://github.com/moltis-org/moltis/pull/436):** Open since March 14th. Merging this is critical for Windows adoption to prevent runtime crashes during session logging.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-03-20

## 1. Today's Overview
CoPaw is experiencing a massive surge in activity, marked by the official release of **v0.1.0** and the immediate iteration to **v0.1.0-beta.4**. The project has transitioned into a multi-agent architecture, a significant milestone that has, however, introduced stability challenges. The issue tracker is currently dominated by reports of breaking changes and configuration errors following recent upgrades. Community engagement is high, with 50 issues and 50 PRs updated, indicating a period of rapid but turbulent evolution.

## 2. Releases

### **v0.1.0** (Official Release)
*   **Key Feature:** **Multi-Agent / Multi-Workspace Architecture**. CoPaw now supports running multiple agents simultaneously with isolated workspaces (independent config, memory, skills, and tools).
*   **UI:** Added a console agent selector for seamless switching.
*   **Significance:** This is a major architectural shift from single-instance to multi-tenant/multi-agent capabilities.

### **v0.1.0-beta.4** (Patch Release)
*   **New Feature:** Added multimodal message support (image and file uploads) in the console ([PR #1772](https://github.com/agentscope-ai/CoPaw/pull/1772)).
*   **Bug Fix:** Fixed import logic for `create_local_chat_model` ([PR #1784](https://github.com/agentscope-ai/CoPaw/pull/1784)).

## 3. Project Progress
Significant development effort is visible in the Pull Request activity, focusing on stabilizing the new architecture and expanding channel support.

*   **Architecture Refactoring:**
    *   **Memory Management:** Configuration for tool result compaction was updated in [PR #1867](https://github.com/agentscope-ai/CoPaw/pull/1867) (merged), moving to a more granular threshold system.
    *   **Code Cleanup:** Media path validation logic was removed/refactored in [PR #1879](https://github.com/agentscope-ai/CoPaw/pull/1879) (merged).
*   **New Features (Merged/Open):**
    *   **Console UX:** Support for agent avatars was added ([PR #1791](https://github.com/agentscope-ai/CoPaw/pull/1791)).
    *   **Integrations:** Added file/image support for the XiaoYi channel ([PR #1885](https://github.com/agentscope-ai/CoPaw/pull/1885)).
    *   **Providers:** Local embedding model support (Qwen3-VL, BGE) is being finalized ([PR #1789](https://github.com/agentscope-ai/CoPaw/pull/1789)).

## 4. Community Hot Topics
The community is buzzing about the v0.1.0 release, but significant friction exists regarding the upgrade process.

*   **Is the project dead? ([Issue #1846](https://github.com/agentscope-ai/CoPaw/issues/1846))**
    *   A user expressed concern over a "one-week halt in updates," reflecting high user demand for rapid iteration. The subsequent release of v0.1.0 effectively answered this, but highlights user anxiety about project momentum.
*   **QQ Channel Integration Issues ([Issue #1641](https://github.com/agentscope-ai/CoPaw/issues/1641))**
    *   High interest in using CoPaw with QQ Direct Messages (DMs). Users are finding workarounds for sandbox limitations, indicating a strong demand for QQ platform support.
*   **Local Model Performance ([Issue #1808](https://github.com/agentscope-ai/CoPaw/issues/1808))**
    *   Users running local models (e.g., Qwen3:0.6b via Ollama) are reporting slow response times, sparking discussions on optimization for edge devices.

## 5. Bugs & Stability
Stability is currently the biggest concern, with multiple critical regressions reported after upgrading to v0.1.0bx.

*   **Critical: CPU Spike / Infinite Loop ([Issue #1774](https://github.com/agentscope-ai/CoPaw/issues/1774))**
    *   **Description:** A `MemoryCompactionHook` registered on `pre_reasoning` triggers an infinite loop (ToolResultCompactor <-> ContextChecker), causing 100% CPU usage.
    *   **Status:** Open. No fix PR identified yet.
*   **Critical: v0.1.0 Upgrade Failures ([Issue #1873](https://github.com/agentscope-ai/CoPaw/issues/1873), [Issue #1815](https://github.com/agentscope-ai/CoPaw/issues/1815))**
    *   **Description:** Users upgrading to v0.1.0b3 face "context window exceeds limit" errors or generic "400 Bad Request" issues, likely due to changes in default context handling or model config migration.
*   **High: Channel Failures (Feishu/Lark) ([Issue #1786](https://github.com/agentscope-ai/CoPaw/issues/1786))**
    *   **Description:** Authentication errors (401) occurring on Feishu channels after upgrading to v0.1.0b2/b3, despite correct environment variables.
*   **Medium: Model Config UI Missing ([Issue #1877](https://github.com/agentscope-ai/CoPaw/pull/1877))**
    *   **Description:** Users report the inability to configure models in the v0.1.0b3 UI, blocking usage entirely for some.

## 6. Feature Requests & Roadmap Signals
User needs are coalescing around flexibility in model choice and channel versatility.

*   **Multi-Agent Collaboration ([Issue #153](https://github.com/agentscope-ai/CoPaw/issues/153))**
    *   Users are requesting native agent-to-agent communication and parallel execution. This aligns closely with the v0.1.0 multi-workspace release and will likely be the focus of immediate future enhancements.
*   **Enhanced Channel Routing ([PR #1889](https://github.com/agentscope-ai/CoPaw/pull/1889))**
    *   A proposed feature to route messages from a single channel (e.g., one Feishu bot) to different agents based on metadata. This is a strong candidate for the next version as it maximizes the utility of the new multi-agent architecture.
*   **HTTP Output for Files ([Issue #1831](https://github.com/agentscope-ai/CoPaw/issues/1831))**
    *   Request to change `send_file_to_user` output from `file://` to `http://` for better web compatibility.

## 7. User Feedback Summary
**Pain Points:**
*   **Breaking Upgrades:** The migration from v0.0.7 to v0.1.0 is rough. Users are encountering breaking changes in configuration and environment variable handling (e.g., Tavily keys not being read [Issue #1842](https://github.com/agentscope-ai/CoPaw/issues/1842)).
*   **Documentation Gaps:** Confusion regarding IP whitelisting for QQ [Issue #275](https://github.com/agentscope-ai/CoPaw/issues/275) and local model debugging workflows [Issue #1859](https://github.com/agentscope-ai/CoPaw/issues/1859).

**Positive Sentiment:**
*   Excitement for the Multi-Agent architecture is high, despite the bugs.
*   The addition of multimodal support (image/file) in the console is a welcomed improvement.

## 8. Backlog Watch
*   **MCP HTTP Support ([Issue #676](https://github.com/agentscope-ai/CoPaw/issues/676))**
    *   Status: Open since March 5. Users are trying to add HTTP-based MCP servers but hitting "Unprocessable Entity" errors. This blocks integration with custom HTTP toolchains.
*   **Discord Voice Message Bug ([Issue #902](https://github.com/agentscope-ai/CoPaw/issues/902))**
    *   Status: Open since March 7. `TypeError: Unsupported audio file extension: ogg`. Affects a specific but popular integration channel; needs attention to prevent user churn on Discord.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest (2026-03-20)

## 1. Today's Overview
The ZeptoClaw project is currently demonstrating **high active development velocity**, particularly in expanding its integration capabilities and standardizing development workflows. Activity over the last 24 hours shows a strong focus on **ecosystem expansion**, with a new pull request introducing Novita AI as an LLM provider, signaling a commitment to broadening model compatibility. Simultaneously, core architectural work continues on the Agent Client Protocol (ACP), with active discussions around HTTP implementation semantics. Despite the lack of recent official releases, the volume of open PRs (3 updated today) suggests the team is aggressively iterating on features like channel implementations and dev-tooling before cutting a new version.

## 2. Releases
**No new releases** were recorded in the last 24 hours. The project appears to be in an active development phase, accumulating features and fixes via open pull requests rather than deploying stable builds.

## 3. Project Progress
While no PRs were merged today, significant forward momentum is visible in the following open pull requests:
*   **Provider Expansion:** Work has advanced on integrating **Novita AI** ([PR #390](https://github.com/qhkm/zeptoclaw/pull/390)). This PR implements the provider following established patterns (OpenAI compatibility), suggesting it is nearing readiness pending maintainer review.
*   **Protocol Implementation:** The **ACP (Agent Client Protocol)** implementation ([PR #356](https://github.com/qhkm/zeptoclaw/pull/356)) remains a central focus. Although still open, it is actively being scrutinized, as evidenced by the related bug report regarding its HTTP semantics.
*   **Developer Experience:** The initiative to standardize the pre-PR environment via **Dev Tools** ([PR #287](https://github.com/qhkm/zeptoclaw/pull/287)) saw updates, indicating an ongoing effort to lower the barrier to entry for new contributors and ensure code quality consistency.

## 4. Community Hot Topics
The most critical discussion involves the semantics of the **Agent Client Protocol (ACP)** over HTTP.
*   **Issue:** [bug(channels): fix ACP HTTP initialize and notification semantics #388](https://github.com/qhkm/zeptoclaw/pull/388)
    *   **Analysis:** This issue highlights a architectural debate regarding connection state management. The community/maintainers identified that treating `initialize` as a global flag (rather than session-specific) creates security risks where clients can bypass handshakes. This indicates a strong focus on **protocol compliance and security** within the "Channels" subsystem.

## 5. Bugs & Stability
*   **Severity: Medium/High** - [Issue #388](https://github.com/qhkm/zeptoclaw/issues/388)
    *   **Description:** A protocol logic bug in the ACP HTTP implementation (introduced in PR #356). It allows subsequent clients to skip initialization handshakes if a previous client has already initialized the channel. Additionally, HTTP notifications are incorrectly handling response bodies.
    *   **Status:** Open. No fix PR was explicitly linked in the data, but the detailed report suggests a fix is likely being drafted or reviewed within the context of PR #356.

## 6. Feature Requests & Roadmap Signals
*   **Novita AI Integration:** The submission of [PR #390](https://github.com/qhkm/zeptoclaw/pull/390) signals a roadmap priority for **extending the LLM provider list**. By supporting OpenAI-compatible endpoints like Novita, ZeptoClaw is positioning itself as a versatile backend for diverse AI model providers.
*   **ACP Standardization:** The intense work on ACP (stdio + HTTP) suggests the project is moving towards becoming a protocol-compliant agent host, likely aiming for interoperability with external agent clients or orchestrators (e.g., `acpx`).

## 7. User Feedback Summary
*   **Pain Point:** **Configuration Complexity.** The bug report regarding `initialize` flags implies users or developers are testing complex multi-client scenarios and finding the current state management insufficient for isolated sessions.
*   **Pain Point:** **Dev Environment Consistency.** The existence of [PR #287](https://github.com/qhkm/zeptoclaw/pull/287) (Dev tools for consistent pre-PR state) reflects a user/contributor need for reproducible local build environments to minimize "works on my machine" errors.

## 8. Backlog Watch
*   **[PR #287](https://github.com/qhkm/zeptoclaw/pull/287):** This PR has been open since **2026-03-09** (11 days). While it was updated today, the extended open duration for a "chore/dev-tools" task suggests it may require final approvals or a rebase. It is critical for improving contribution quality and should be prioritized.
*   **[PR #356](https://github.com/qhkm/zeptoclaw/pull/356):** As a large feature PR (ACP implementation) open since March 13, the discovery of bug #388 suggests this PR needs significant review or a follow-up commit to address the handshake logic before merging.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest
**Date:** 2026-03-20
**Repository:** [github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. Today's Overview
EasyClaw demonstrates high velocity in UI/UX refinement with the release of **v1.7.2**, marking a significant step towards a more modular and secure architecture. The project saw substantial activity in the last 24 hours, with 3 pull requests updated and a new release. The development focus is clearly shifting towards user experience modernization, evidenced by two concurrent open PRs (#23, #24) dedicated to overhauling the account management and authentication interfaces. While the codebase is undergoing rapid iteration, community engagement remains steady with continued inquiry into feature capabilities.

### 2. Releases
**Version:** [v1.7.2: RivonClaw v1.7.2](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.2)
This release introduces significant UI enhancements and backend structural changes:
*   **UI & Architecture:** Major component refactoring and theme separation logic have been implemented. The "Skills" page has been redesigned.
*   **Security & Auth:** Added captcha-based authentication and centralized default settings.
*   **Configuration:** Introduction of a channel group-allow-from editor backed by SQLite for account configurations.
*   **Extensibility:** The Plugin SDK has been refactored to support internationalized branding.

### 3. Project Progress
The primary progress today centers on the successful deployment of the UI migration and the immediate follow-up on account interface improvements.
*   **Merged/Closed:** [PR #20 UI Migration: Component Refactor + Theme Separation + Skills Page](https://github.com/gaoyangz77/easyclaw/pull/20)
    *   *Significance:* This PR laid the groundwork for the v1.7.2 release. It successfully extracted sidebar logic into a `<BottomActions>` component and consolidated SVG assets into a reusable `Icon` base class, reducing technical debt.
*   **Advanced Features:**
    *   [PR #23 (Open)](https://github.com/gaoyangz77/easyclaw/pull/23): Introduces a redesigned Auth Modal with modern UX patterns (pill tab switcher, password strength bars) and a split-card layout for the account page.
    *   [PR #24 (Open)](https://github.com/gaoyangz77/easyclaw/pull/24): Proposes replacing the dedicated `/account` route with a popover dropdown triggered by the avatar, streamlining the user flow for logging in/out and checking membership status.

### 4. Community Hot Topics
The community is currently focused on understanding the scope of the project's features and connecting with fellow developers.
*   **[Issue #22 (Open)](https://github.com/gaoyangz77/easyclaw/issues/22) - "Multi-browser" Feature Clarification**
    *   *Context:* User `slowayear` is seeking clarification on whether the "multi-browser" functionality refers to multi-user support or multi-platform synchronization, and how login state affects this.
    *   *Analysis:* This indicates a need for clearer documentation regarding the "Channel/Account" configuration features mentioned in the latest release notes. Users are trying to map the technical features to specific use cases (e.g., multi-account management).
*   **[Issue #12 (Closed)](https://github.com/gaoyangz77/easyclaw/issues/12) - Community Building**
    *   *Context:* User `Geekbruce` expressed strong approval of the project architecture and requested a technical communication group.
    *   *Analysis:* Reflects high satisfaction with the architectural direction (noted in the v1.7.2 refactor) and a desire for real-time support channels outside of GitHub Issues.

### 5. Bugs & Stability
*   **No critical bugs or crashes** were reported in the issues or PRs updated within the last 24 hours.
*   **Potential Migration Note:** The merge of PR #20 and the release of v1.7.2 (Theme Separation) may require theme-related configuration adjustments for users upgrading from older versions, though no user complaints have surfaced yet.

### 6. Feature Requests & Roadmap Signals
*   **User Education:** Issue #22 signals a request for detailed documentation on the "Multi-browser" and "Channel group" features.
*   **UI Polish (Imminent):** PR #23 and #24 suggest the roadmap for the immediate next version (likely v1.7.3) will focus entirely on polishing the authentication flow and user dashboard, moving away from page-based account management to app-like popover interactions.
*   **Social Features:** Issue #12 suggests the maintainers might consider establishing official community channels (Discord/Telegram/WeChat) to capitalize on user interest.

### 7. User Feedback Summary
*   **Satisfaction:** The architecture is highly praised (`Geekbruce` in #12: *"architecture fits my expectations very well"*).
*   **Pain Points:** Confusion regarding feature definitions, specifically the distinction between "multi-browser," "multi-user," and platform consistency (#22).
*   **Use Cases:** Users are looking at EasyClaw as a framework for multi-platform account management, potentially for automation or agent-based tasks.

### 8. Backlog Watch
*   **Attention Required for [Issue #22](https://github.com/gaoyangz77/easyclaw/issues/22):** As an open question regarding core functionality definitions, this should be prioritized to prevent user frustration with the new v1.7.2 settings.
*   **Review Required for [PR #24](https://github.com/gaoyangz77/easyclaw/pull/24) & [PR #23](https://github.com/gaoyangz77/easyclaw/pull/23):** Both PRs are currently open and address overlapping UI areas (Account/Auth). Maintainers need to review these to ensure they are compatible or merge them in the correct sequence to avoid conflicts in the `UserAvatar` and routing logic.

</details>