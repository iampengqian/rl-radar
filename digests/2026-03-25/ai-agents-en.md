# OpenClaw Ecosystem Digest 2026-03-25

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-03-24 22:06 UTC

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

# OpenClaw Project Digest: 2026-03-25

## 1. Today's Overview
OpenClaw is experiencing **extreme activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a rapidly iterating project at scale. The high ratio of open issues (429) to closed (71) suggests the community is actively stress-testing the new `v2026.3.23` release, uncovering integration regressions faster than the maintainers can patch them. The release focuses on expanding LLM provider support (Qwen/DashScope) and UI refinements, but appears to have introduced stability challenges in plugin loading and UI asset bundling. Overall, the project health is **active but volatile**, with maintainers and users heavily engaged in stabilization.

## 2. Releases
### **v2026.3.23** (Released 2026-03-23)
*   **Changes:**
    *   **Qwen/Alibaba Cloud Integration:** Added standard (pay-as-you-go) DashScope endpoints for both China and Global regions. The provider group has been relabelled to `Qwen (Alibaba Cloud Model Studio)` to distinguish it from coding plan endpoints ([#43878](https://github.com/openclaw/openclaw/pull/43878)).
    *   **UI/UX:** Consolidated button primitives for better interface consistency.
*   **Migration Note:** No explicit breaking changes listed, but the volume of regression bugs (see Section 5) implies that users upgrading from `2026.3.13` or older should backup configurations before updating, specifically regarding plugins and UI assets.

## 3. Project Progress
While only 38 PRs were merged/closed today (against 462 open), several key structural improvements landed:
*   **Self-Healing & Infrastructure:** A series of "Automated Janitor" features were merged, including a `DoctorHeartbeat` for background environment checks ([PR #54001](https://github.com/openclaw/openclaw/pull/54001)), `LogPruner` for disk maintenance ([PR #54000](https://github.com/openclaw/openclaw/pull/54000)), and `UpdateWatcher` for release tracking ([PR #53999](https://github.com/openclaw/openclaw/pull/53999)).
*   **Memory & Sessions:** Merged `MemorySummaryOptimizer` ([PR #53996](https://github.com/openclaw/openclaw/pull/53996)) and a `FlushGuard` for session state durability ([PR #54009](https://github.com/openclaw/openclaw/pull/54009)).
*   **Security:** Fixed a policy flaw where non-owners could change `/send` policies ([PR #53994](https://github.com/openclaw/openclaw/pull/53994)).
*   **Tooling:** Added recursive skill directory discovery ([PR #54011](https://github.com/openclaw/openclaw/pull/54011)) and sanitized tool names for Anthropic compatibility ([PR #54005](https://github.com/openclaw/openclaw/pull/54005)).

## 4. Community Hot Topics
*   **Platform Expansion Demand:** The most active item is a long-standing request for **Linux and Windows Clawdbot Apps** ([Issue #75](https://github.com/openclaw/openclaw/issues/75)), aiming for feature parity with the macOS client. This indicates a strong user base outside the Apple ecosystem.
*   **Security Alert:** A highly upvoted security notice regarding a **Phishing Scam & Fake Airdrop** ([Issue #49836](https://github.com/openclaw/openclaw/issues/49836)) is drawing community attention (18 👍, 33 comments), highlighting the risks of crypto-wallet integration in AI agents.
*   **Plugin Ecosystem Friction:** Users are frustrated by plugin compatibility breaks, specifically with the **WeChat Plugin** ([Issue #52885](https://github.com/openclaw/openclaw/issues/52885)) which fails to load the SDK in versions `> 2026.3.22`.
*   **Core Stability:** Users are actively discussing the **Long-Term Memory & Knowledge Management** architecture ([Issue #50096](https://github.com/openclaw/openclaw/issues/50096)), signaling that memory persistence is a high-priority feature for advanced users.

## 5. Bugs & Stability
*   **Critical: UI Assets Missing (Regression)**
    *   **Bug:** `Control UI` fails to load, serving a 503 error because `dist/control-ui/` is missing from the npm package in `2026.3.22+`.
    *   **Impact:** Users cannot access the dashboard after update.
    *   **Tracking:** [Issue #52808](https://github.com/openclaw/openclaw/issues/52808) (61 👍), [Issue #52823](https://github.com/openclaw/openclaw/issues/52823).
*   **Critical: WhatsApp Plugin Crash**
    *   **Bug:** The WhatsApp plugin crashes the agent in `v2026.3.23` due to a missing `light-runtime-api`.
    *   **Tracking:** [Issue #53247](https://github.com/openclaw/openclaw/issues/53247) (10 👍).
*   **High: OAuth Token Race Conditions**
    *   **Bug:** Concurrent token refreshes cause "refresh_token_reused" errors, locking users out of providers like OpenAI Codex.
    *   **Tracking:** [Issue #26322](https://github.com/openclaw/openclaw/issues/26322).
*   **High: Memory Index Failure**
    *   **Bug:** QMD Memory Index returns empty results after updating to `2026.3.23-2`.
    *   **Tracking:** [Issue #53955](https://github.com/openclaw/openclaw/issues/53955).
*   **Medium: SSRF False Positives**
    *   **Bug:** `web_fetch` blocks legitimate requests resolving to `198.18.0.0/15` (Clash/mihomo fake-ip range).
    *   **Tracking:** [Issue #25215](https://github.com/openclaw/openclaw/issues/25215).

## 6. Feature Requests & Roadmap Signals
*   **Multi-Modal Auto-Switching:** [PR #52079](https://github.com/openclaw/openclaw/pull/52079) is implementing auto-switching to `imageModel` when images are pasted into the dashboard, a likely candidate for the next patch release.
*   **Plugin Tooling:** A new `tools.exec.denyPatterns` config is being proposed to block specific shell commands via regex ([PR #53736](https://github.com/openclaw/openclaw/pull/53736)), which would enhance security for enterprise users.
*   **Gateway Compatibility:** Work is in progress to add missing OpenAI-compatible endpoints (`/v1/models`, `/v1/embeddings`) to the gateway ([PR #53992](https://github.com/openclaw/openclaw/pull/53992)), aiming to make OpenClaw a drop-in replacement for OpenWebUI/LibreChat backends.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by **installation fragility**—specifically, upgrades breaking UI assets and plugins. The transition from `2026.3.13` to `2026.3.22+` has been particularly rocky due to missing files in the npm distribution.
*   **Use Cases:** There is heavy usage of **multi-channel communication** (WhatsApp, Telegram, Discord, WeChat) with agents, indicating OpenClaw is being used as a central "brain" for chat bots. Memory persistence across these channels is a critical need.
*   **Sentiment:** While enthusiastic about new features (Qwen support, memory), the sentiment is currently cautious due to regressions in basic functionality (UI loading, plugin loading).

## 8. Backlog Watch
*   **Issue #75 (Linux/Windows Apps):** Created Jan 1, 2026, still open. High demand (65 👍) but no official commitment visible yet.
*   **Issue #10386 (Skill Discovery):** Custom skills in `extraDirs` are not being discovered. Marked `stale` but affects users relying on local skill libraries.
*   **Issue #23829 (Fallback Chains):** The model failover system does not traverse across providers (e.g., falling back from OpenAI to Gemini), limiting reliability.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Analysis Report
**Date:** 2026-03-25

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is currently in a phase of **aggressive architectural maturation and platform expansion**. Projects are rapidly pivoting from single-user prototypes to multi-tenant, multi-agent platforms capable of orchestration and inter-agent communication. There is a strong consensus on technical direction: **consolidation of messaging channels** (WeChat/WhatsApp/Telegram), **hardening of security boundaries** (RBAC, sandboxes, supply chain integrity), and the implementation of **persistent, biologically-inspired memory systems**. The ecosystem is characterized by high release velocity but is currently plagued by growing pains related to configuration stability and dependency management.

## 2. Activity Comparison

| Project | Active Issues (24h) | Active PRs (24h) | Releases | Health Score / Status |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | v2026.3.23 | **Volatile** - High regression rate, massive scale |
| **Zeroclaw** | High | 50 | v0.6.0 - v0.6.2 | **High Velocity** - Rapid stabilization, responsive |
| **PicoClaw** | 18 | 69 | Nightly | **Active** - Heavy integration focus (WeCom/Audio) |
| **CoPaw** | 50 | 50 | v0.2.0 | **Expanding** - New multi-agent features, Docker issues |
| **NanoBot** | 19 | 52 | None | **Critical** - Security incident remediation |
| **IronClaw** | 14 | 47 | None | **Maturing** - Enterprise features (SSO/RBAC) |
| **LobsterAI** | 23 | 50 | None | **Optimizing** - UI performance focus |
| **TinyClaw** | 0 | 8 | v0.0.17 - v0.0.19 | **Hardening** - Zero backlog, high stability focus |
| **ZeptoClaw** | Low | 29 | v0.8.1 - v0.8.2 | **Stable/Responsive** - Rapid bug resolution |
| **Moltis** | 4 | 22 | None | **Robust** - Cross-platform & infra focus |
| **NanoClaw** | Low | 50 | None | **Pre-release** - Ecosystem expansion |

## 3. OpenClaw's Position

**Advantages vs. Peers:**
*   **Scale & Ecosystem:** OpenClaw operates at a significantly larger scale (500+ daily issues/PRs) than most peers, indicating a massive user base and contributor community.
*   **Provider Breadth:** It leads in LLM provider integration (e.g., explicit Qwen/DashScope support), positioning it as a universal backend.
*   **Gateway Architecture:** Efforts to make it a drop-in replacement for OpenWebUI/LibreChat suggest a strategic move to become the industry standard "AI Gateway."

**Technical Approach:**
*   **Contrast:** While projects like **NanoBot** are removing middleware (`litellm`) for security, OpenClaw is embracing and configuring complex provider ecosystems. While **Zeroclaw** and **PicoClaw** focus on lightweight or specific hardware deployments, OpenClaw focuses on being a feature-rich "control plane" for agents.

**Community:**
*   **Size:** Unquestionably the largest community in this digest.
*   **Engagement:** Highly active but currently strained by regression bugs (UI assets, plugins), leading to a "volatile" sentiment compared to the happier, smaller communities of **TinyClaw** or **ZeptoClaw**.

## 4. Shared Technical Focus Areas

1.  **Persistent & Efficient Memory (All Projects)**
    *   **Requirement:** Moving beyond simple context windows to long-term memory (LTM).
    *   **Examples:** OpenClaw (`MemorySummaryOptimizer`), Zeroclaw (MuninnDB), PicoClaw ("Seahorse" hippocampus), CoPaw (Memory Compaction).
    *   **Need:** Preventing "forgetting" user preferences and summarizing history efficiently.

2.  **Supply Chain Security & Dependency Management**
    *   **Requirement:** Trust and safety in third-party libraries.
    *   **Examples:** **NanoBot** removed `litellm` due to malware. **CoPaw** also removed it. **OpenClaw** and **IronClaw** are implementing stricter policies and permission boundaries.

3.  **Multi-Channel Connectivity (IM/Chat)**
    *   **Requirement:** Ubiquitous access via user-preferred platforms.
    *   **Examples:** WeChat/WeCom is a massive focus (PicoClaw, CoPaw, IronClaw, LobsterAI). Telegram/WhatsApp support is standard across **Zeroclaw**, **TinyClaw**, and **ZeptoClaw**.

4.  **Multi-Agent Orchestration**
    *   **Requirement:** Agents talking to agents or managing teams.
    *   **Examples:** **Zeroclaw** (A2A protocol), **CoPaw** (Inter-Agent Communication), **Moltis** (Agent Control Protocol).

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architecture Highlight |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **Universal Gateway / Scale** | Power Users / Enterprise | Plugin-heavy, provider-agnostic, reference impl |
| **Zeroclaw** | **Edge / Multi-Agent** | Devs / IoT Enthusiasts | Lightweight (8MB), A2A protocol, MuninnDB memory |
| **PicoClaw** | **Embedded / Mobile** | Hardware Hackers | Biologically-inspired memory, Focus on WeCom |
| **IronClaw** | **Enterprise / Web3** | Enterprise / NEAR Ecosystem | RBAC, SSO, Multi-tenancy, Blockchain intents |
| **LobsterAI** | **Desktop Client** | End Users (GUI) | React/Electron heavy, DingTalk integration |
| **TinyClaw** | **Reliability Core** | Stability Seekers | Queue-based, zero-backlog policy, grammY stack |
| **NanoBot** | **Research / Security** | Researchers | HKUDS-backed, rapidly shedding dependencies |

**Key Insight:** The ecosystem is splitting into **Heavyweights** (OpenClaw, IronClaw) aiming for enterprise feature parity, and **Lightweights/Edge** (Zeroclaw, PicoClaw, TinyClaw) aiming for efficiency and specific hardware integrations.

## 6. Community Momentum & Maturity

*   **Tier 1: Rapid Iteration (Feature Explosion)**
    *   **OpenClaw, CoPaw, PicoClaw:** These projects are shipping features rapidly (Multi-agent, Audio, UIs) but suffering from **instability regressions** (Docker data loss, config wipes, UI crashes). They are in the "Move Fast and Break Things" phase.

*   **Tier 2: Stabilization & Hardening (Production Focus)**
    *   **Zeroclaw, TinyClaw, ZeptoClaw:** These teams are focused on closing bugs, optimizing performance, and releasing patch versions (e.g., Zeroclaw v0.6.0->v0.6.2). They are prioritizing reliability over new features.

*   **Tier 3: Crisis Response / Architectural Shift**
    *   **NanoBot:** Currently in recovery mode from a security breach, shifting architecture to native SDKs.
    *   **IronClaw:** Undergoing a major refactor for multi-tenancy (Engine v2), indicating a move from prototype to enterprise product.

## 7. Trend Signals

1.  **The "Litellm" Divide & Security Awakening:**
    *   The compromise of `litellm` in the **NanoBot** supply chain and its subsequent removal there and in **CoPaw** signals a trend away from "aggregator" SDKs toward direct provider integrations for security-critical applications.
    *   **Value for Devs:** Evaluate dependencies for single points of failure; direct SDK integration is safer than middleware for handling credentials.

2.  **Local-First & KV Cache Optimization:**
    *   **Moltis** optimized system prompts to enable KV caching for local LLMs (Ollama/LM Studio). **Zeroclaw** targets edge devices.
    *   **Value for Devs:** Designing static system prompts (injecting dynamic data elsewhere) significantly reduces latency and cost for local AI users.

3.  **Agentic Standardization (MCP & ACP):**
    *   The rush to support **MCP** (Model Context Protocol) and **ACP** (Agent Client Protocol) across **Zeroclaw**, **IronClaw**, and **Moltis** indicates a standardization of how agents connect to tools and IDEs.
    *   **Value for Devs:** Building agnostic "Tools" or "Skills" that adhere to these protocols ensures interoperability across different agent hosts.

4.  **Memory Hierarchy Implementation:**
    *   Projects are moving from "context window" to "Hippocampus" (PicoClaw) or "MuninnDB" (Zeroclaw).
    *   **Value for Devs:** Start implementing tiered memory strategies (Short-term buffer vs. Long-term vector store) rather than relying on infinite context models.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-03-25

## 1. Today's Overview
NanoBot is currently experiencing **critical turbulence** following a supply chain attack via the `litellm` dependency, which has been quarantined for containing credential-stealing malware. While activity is exceptionally high (52 active PRs, 19 active Issues), the focus has shifted from feature development to damage control and architectural refactoring. The community and maintainers are reacting swiftly to remove the malicious dependency, but users are advised to update immediately and rotate credentials if applicable. Security issues dominate the discourse, overshadowing significant optimizations proposed for memory handling and heartbeat mechanisms.

## 2. Releases
**None recorded in the last 24 hours.**
*Note: A patch release addressing the security vulnerability is expected imminently given the severity of the `litellm` compromise.*

## 3. Project Progress
Progress today is defined by emergency fixes and significant community contributions to stability:
*   **Critical Security Refactor:** PR [#2448](https://github.com/HKUDS/nanobot/pull/2448) (Closed/Merged) removed the compromised `litellm` dependency entirely, replacing it with native OpenAI and Anthropic SDKs. This is a major architectural shift ensuring supply chain safety.
*   **Heartbeat Optimization:** PR [#2430](https://github.com/HKUDS/nanobot/pull/2430) proposed making the heartbeat mechanism stateless by default to prevent context bloating. PR [#2435](https://github.com/HKUDS/nanobot/pull/2435) optimized this further by adding logic to skip LLM calls if no active tasks are detected in `HEARTBEAT.md`.
*   **Channel Enhancements:** PR [#2428](https://github.com/HKUDS/nanobot/pull/2428) (Closed/Merged) adapted the WeChat channel for plugin v1.0.3, and PR [#2324](https://github.com/HKUDS/nanobot/pull/2324) added full media support for QQ and WeCom.

## 4. Community Hot Topics
1.  **Supply Chain Attack (Critical):** The most active topic is the `litellm` compromise. Issue [#2443](https://github.com/HKUDS/nanobot/issues/2443) and [#2439](https://github.com/HKUDS/nanobot/issues/2439) revealed malicious code in the dependency. This has caused widespread alarm regarding credential safety.
2.  **Runaway Token Usage:** Issue [#2375](https://github.com/HKUDS/nanobot/issues/2375) sparked heavy discussion regarding `heartbeat.jsonl` accumulating history and causing **560k token** consumption per run. Users are demanding better context management for background tasks.
3.  **Model Looping:** Issue [#2298](https://github.com/HKUDS/nanobot/issues/2298) highlighted issues with smaller models entering infinite tool-calling loops, requesting logic to detect and break such cycles.

## 5. Bugs & Stability
*   **🔴 Critical: Security Vulnerability (CVE Pending):** The `litellm` package was flagged for credential theft. Users who ran the affected versions should assume keys/credentials may be compromised.
    *   *Fix:* PR [#2448](https://github.com/HKUDS/nanobot/pull/2448) removes the dependency.
*   **🔴 Critical: Heartbeat Token Explosion:** Issue [#2375](https://github.com/HKUDS/nanobot/issues/2375) reports agents consuming 500k+ tokens due to unbounded session history in heartbeat tasks.
    *   *Fix:* Proposed in PR [#2430](https://github.com/HKUDS/nanobot/pull/2430).
*   **🟠 High: Cron Reminders Suppressed:** Issue [#2369](https://github.com/HKUDS/nanobot/issues/2369) reports that the evaluator silently drops scheduled reminders, marking them as "not actionable."
    *   *Fix:* PR [#2449](https://github.com/HKUDS/nanobot/pull/2449).
*   **🟡 Medium: Context Explosion:** Issue [#2437](https://github.com/HKUDS/nanobot/issues/2437) notes that reading large logs via `read_file` blows up the context window, causing request failures due to size limits.

## 6. Feature Requests & Roadmap Signals
*   **Native SDK Migration:** The shift away from `litellm` suggests a roadmap focus on **direct provider integrations** (OpenAI, Anthropic) rather than aggregator proxies.
*   **Long-term Memory:** PR [#2183](https://github.com/HKUDS/nanobot/pull/2183) proposes an opt-in integration with **Honcho** for persistent long-term memory, indicating a push towards "always-on" personal agent capabilities.
*   **Robustness for Local Models:** Multiple issues regarding loops and errors (e.g., [#2450](https://github.com/HKUDS/nanobot/issues/2450), [#2298](https://github.com/HKUDS/nanobot/issues/2298)) signal a need for better "guardrails" when running on weaker/local LLMs.
*   **Gateway Web UI:** PR [#1650](https://github.com/HKUDS/nanobot/pull/1650) is advancing a Web UI for the gateway, suggesting a move towards more user-friendly local hosting interfaces.

## 7. User Feedback Summary
Users are currently **anxious but engaged**. The security incident has eroded trust in third-party dependencies, but the rapid response to native SDKs has been received positively as a necessary hardening step. There is significant frustration regarding **token inefficiency**, specifically how the agent handles background tasks and file reading, which makes running the agent expensive (e.g., the 560k token incident). Users appreciate the flexibility of channels (WeChat, QQ, Discord) but struggle with stability in non-GPT-4 models.

## 8. Backlog Watch
*   **OpenAI Codex Auth in Docker:** Issue [#1358](https://github.com/HKUDS/nanobot/issues/1358) (created Feb 28) remains open. Users are still reporting auth failures when running Codex in Docker environments.
*   **Gemini API Key Handling:** Issue [#144](https://github.com/HKUDS/nanobot/issues/144) (created Feb 5) continues to linger, where the system incorrectly demands a Gemini key even when using OpenRouter. This suggests a gap in provider routing logic that needs cleanup.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest: 2026-03-25

## 1. Today's Overview
Zeroclaw demonstrates **extremely high velocity** with 4 releases (v0.6.0 to v0.6.2) in a single day and a massive merge volume (35 PRs merged vs 15 open). The project is in a rapid iteration cycle focused on stability and polish following the v0.5 feature set. Activity is heavily dominated by maintainer **@theonlyhennygod**, who merged ~15 PRs fixing critical regressions in streaming, security, and cross-platform support. The community is actively stress-testing the new v0.6 line, reporting edge cases in ARM builds, provider streaming, and security policy behavior.

## 2. Releases

### v0.6.2 (Latest)
- **Status**: Stable
- **Changes**: Incremental improvements and polish following v0.6.1.

### v0.6.1
- **Status**: Stable
- **Changes**: Incremental improvements and polish.
- **Note**: Released alongside beta build `v0.6.1-beta.637`, suggesting active CI/testing pipeline refinement.

### v0.6.0
- **Status**: Minor version bump
- **Changes**: Incremental improvements and polish. Marks a stable milestone for the v0.6 series.

**Migration Notes**: No breaking changes documented in release notes, but see Bug section for behavioral regressions in security policy and streaming.

---

## 3. Project Progress

**Merged PRs (35 total)** show focused effort in 4 areas:

| Area | Key Merged PRs | Impact |
|------|----------------|--------|
| **Security & Policy** | [#4615](https://github.com/zeroclaw-labs/zeroclaw/pull/4615), [#4617](https://github.com/zeroclaw-labs/zeroclaw/pull/4617), [#4614](https://github.com/zeroclaw-labs/zeroclaw/pull/4614) | Fixed "AI conservatism" regression, relaxed wildcard policies, exempted media markers from leak detection |
| **Provider/Streaming** | [#4599](https://github.com/zeroclaw-labs/zeroclaw/pull/4599), [#4591](https://github.com/zeroclaw-labs/zeroclaw/pull/4591) | Made `max_tokens` configurable, fixed GLM web search params |
| **Cross-Platform** | [#4613](https://github.com/zeroclaw-labs/zeroclaw/pull/4613), [#4616](https://github.com/zeroclaw-labs/zeroclaw/pull/4616), [#4612](https://github.com/zeroclaw-labs/zeroclaw/pull/4612) | Fixed Windows sync, npm tool paths, added setup.bat |
| **Channels/Features** | [#4611](https://github.com/zeroclaw-labs/zeroclaw/pull/4611), [#4619](https://github.com/zeroclaw-labs/zeroclaw/pull/4619) | Added whatsapp-web to Docker, skill self-improvement system |

**Open PRs (15 total)** include significant expansions:
- **[#4607](https://github.com/zeroclaw-labs/zeroclaw/pull/4607)**: MuninnDB memory backend (Hebbian/Ebbinghaus cognitive features)
- **[#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166)**: A2A (Agent-to-Agent) protocol for multi-agent orchestration
- **[#4603](https://github.com/zeroclaw-labs/zeroclaw/pull/4603)**: Collapsible thinking UI for reasoning models (GLM-5, Qwen3)
- **[#3911](https://github.com/zeroclaw-labs/zeroclaw/pull/3911)**: Claude Code provider upgrade to full agent mode

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

| Issue | Comments | Core Concern |
|-------|----------|--------------|
| [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487) | 7 | Schema validation error with `channel_ack_config` function blocking OpenAI GPT-4.1 usage |
| [#1518](https://github.com/zeroclaw-labs/zeroclaw/issues/1518) | 7 (+2👍) | Inter-process communication for independent ZeroClaw agents via SQLite shared state |
| [#1924](https://github.com/zeroclaw-labs/zeroclaw/issues/1924) | 6 (+1👍) | FreeBSD pre-built binary requests (users currently compile from source) |
| [#3454](https://github.com/zeroclaw-labs/zeroclaw/issues/3454) | 5 | Fresh installation dashboard returning 404 errors |
| [#4093](https://github.com/zeroclaw-labs/zeroclaw/issues/4093) | 4 (+1👍) | Provider streaming code stranded on deleted `dev` branch, never merged to `master` |

**Analysis**: Community focus is split between:
1. **Reliability concerns** (streaming, dashboard, schema validation)
2. **Multi-agent orchestration** (inter-process communication, ACP server mode)
3. **Platform expansion** (FreeBSD, ARMv6 support)

The high engagement on [#1518](https://github.com/zeroclaw-labs/zeroclaw/issues/1518) (agent-to-agent communication) signals strong interest in Zeroclaw as a **multi-agent orchestration platform**, not just a personal assistant.

---

## 5. Bugs & Stability

### Critical (S0/S1) - Workflow Blocking

| Severity | Issue | Status | Fix Available |
|----------|-------|--------|---------------|
| S1 | [#4623](https://github.com/zeroclaw-labs/zeroclaw/issues/4623): ARMv6 binary segfaults on Pi Zero W | OPEN | PR [#4560](https://github.com/zeroclaw-labs/zeroclaw/pull/4560) pending (force ARMv6 codegen) |
| S1 | [#4496](https://github.com/zeroclaw-labs/zeroclaw/issues/4496): "AI conservatism" - agent refuses commands despite full autonomy | CLOSED | Fixed by PR [#4615](https://github.com/zeroclaw-labs/zeroclaw/pull/4615) (prompt rewrite) |
| S1 | [#4485](https://github.com/zeroclaw-labs/zeroclaw/issues/4485): Security policy blocks commands even with `level = "full"` | CLOSED | Fixed by PR [#4617](https://github.com/zeroclaw-labs/zeroclaw/pull/4617) |
| S1 | [#4567](https://github.com/zeroclaw-labs/zeroclaw/issues/4567): Azure AI provider streaming error | CLOSED | Related to #4093 streaming code recovery |
| S1 | [#4550](https://github.com/zeroclaw-labs/zeroclaw/issues/4550): QQ channel websocket connection loop | OPEN | No fix PR yet |
| S0 | [#3664](https://github.com/zeroclaw-labs/zeroclaw/issues/3664): Runtime daemon crash (image attached) | OPEN | Needs triage |
| S0 | [#4445](https://github.com/zeroclaw-labs/zeroclaw/issues/4445): Docker container file read/write denied | OPEN | Related to missing auto_approve UI |

### Moderate (S2) - Degraded Behavior

- **[#4523](https://github.com/zeroclaw-labs/zeroclaw/issues/4523)**: Web chat returns "unknown does not support streaming"
- **[#4604](https://github.com/zeroclaw-labs/zeroclaw/issues/4604)**: Leak detector redacts image markers (fixed by PR [#4614](https://github.com/zeroclaw-labs/zeroclaw/pull/4614))
- **[#3658](https://github.com/zeroclaw-labs/zeroclaw/issues/3658)**: Interactive onboarding broken in v0.3.2 (fixed by PR [#4618](https://github.com/zeroclaw-labs/zeroclaw/pull/4618))

**Stability Assessment**: v0.6.0-0.6.2 appears to be a **stabilization release series** addressing regressions introduced in v0.5. The maintainer is actively closing S1 bugs with targeted PRs.

---

## 6. Feature Requests & Roadmap Signals

### High-Traction Requests

| Feature | Issue | Signals | Likelihood |
|---------|-------|---------|------------|
| **Inter-agent communication** | [#1518](https://github.com/zeroclaw-labs/zeroclaw/issues/1518) | 7 comments, 2👍, aligns with open PR [#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166) (A2A protocol) | **High** - PR already open |
| **ACP Server Mode** | [#2456](https://github.com/zeroclaw-labs/zeroclaw/issues/2456) | Native Agent Control Protocol for IDE integration | Medium - no PR yet |
| **FreeBSD support** | [#1924](https://github.com/zeroclaw-labs/zeroclaw/issues/1924) | 6 comments, user verified compilation works | Medium - CI/release pipeline change |
| **Autonomous skill creation** | [#3683](https://github.com/zeroclaw-labs/zeroclaw/issues/3683) | Self-improving skills, pipeline tool calling | **Implemented** in PR [#4619](https://github.com/zeroclaw-labs/zeroclaw/pull/4619) |
| **MuninnDB memory backend** | PR [#4607](https://github.com/zeroclaw-labs/zeroclaw/pull/4607) | External memory with cognitive features | Under review |

### Predicted for v0.6.3 or v0.7.0
1. **A2A Protocol Support** - PR [#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166) nearing merge
2. **Thinking UI for reasoning models** - PR [#4603](https://github.com/zeroclaw-labs/zeroclaw/pull/4603) ready
3. **ARMv6 fix** - PR [#4560](https://github.com/zeroclaw-labs/zeroclaw/pull/4560) addressing Pi Zero W users
4. **MuninnDB integration** - PR [#4607](https://github.com/zeroclaw-labs/zeroclaw/pull/4607) expands memory capabilities

---

## 7. User Feedback Summary

### Pain Points (Negative Signals)
1. **Security policy overreach** - Users report AI refusing `ls /` despite "full" autonomy ([#4496](https://github.com/zeroclaw-labs/zeroclaw/issues/4496), [#4485](https://github.com/zeroclaw-labs/zeroclaw/issues/4485)). Quote: *"0.3系列版本直接运行，直接验证用户想法。0.5版本：直接上来就是做不到"*
2. **Streaming regression** - Multiple reports of "unknown does not support streaming" errors across providers ([#4567](https://github.com/zeroclaw-labs/zeroclaw/issues/4567), [#4523](https://github.com/zeroclaw-labs/zeroclaw/issues/4523))
3. **Docker usability** - Missing tools in container, file permission issues ([#4445](https://github.com/zeroclaw-labs/zeroclaw/issues/4445), [#4576](https://github.com/zeroclaw-labs/zeroclaw/issues/4576))
4. **Windows friction** - npm path errors, complex setup ([#4494](https://github.com/zeroclaw-labs/zeroclaw/issues/4494), [#3693](https://github.com/zeroclaw-labs/zeroclaw/issues/3693))

### Positive Signals
1. **Multi-agent use cases** - Users running multiple Zeroclaw instances on Raspberry Pi Zero 2 for different personas ([PR #4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166) context)
2. **Lightweight deployment** - "~8 MB per instance" enables edge deployment scenarios
3. **Channel diversity** - Active usage across WhatsApp, QQ, Telegram, Slack, Discord channels

### Use Case Themes
- **Personal coding assistant** with IDE integration (ACP server requests)
- **Multi-agent teams** on resource-constrained hardware (Pi clusters)
- **Cross-platform deployment** (FreeBSD jails, TrueNAS, Docker)

---

## 8. Backlog Watch

### Needs Maintainer Attention

| Item | Type | Age | Why Important |
|------|------|-----|---------------|
| **[#4537](https://github.com/zeroclaw-labs/zeroclaw/issues/4537)** | Bug Report | 1 day | WhatsApp cron delivery broken - PR #2116 merged to wrong branch. **Root cause identified** but needs architectural fix. |
| **[#4093](https://github.com/zeroclaw-labs/zeroclaw/issues/4093)** | Bug Report | 5 days | Streaming code stranded on deleted `dev` branch. **Critical infrastructure debt** affecting multiple providers. |
| **[#4623](https://github.com/zeroclaw-labs/zeroclaw/issues/4623)** | Bug Report | 1 day | ARMv6 segfault - PR [#4560](https://github.com/zeroclaw-labs/zeroclaw/pull/4560) exists but needs review. Blocks Pi Zero W users. |
| **[#4607](https://github.com/zeroclaw-labs/zeroclaw/pull/4607)** | PR | 1 day | MuninnDB memory backend - substantial feature addition, needs architectural review. |
| **[#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166)** | PR | 4 days | A2A protocol - 3,321 additions, major feature. Ready for final review. |

### Process Improvement Suggested
- **[#4363](https://github.com/zeroclaw-labs/zeroclaw/issues/4363)**: Suggests pushing fixups to contributor branches instead of opening superseding PRs. Addresses maintainer workflow friction.

---

**Digest compiled from 50 issues, 50 PRs, and 4 releases updated on 2026-03-25.**

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest (2026-03-25)

## 1. Today's Overview
PicoClaw demonstrates **extremely high development velocity** today, processing **69 Pull Requests** (45 merged/closed) and addressing **18 Issues**. The project is undergoing a significant architectural maturation phase, heavily focusing on **security hardening** (Web UI authentication), **communication channel consolidation** (WeCom), and **multimodal capabilities** (Audio/TTS/ASR). The release of the `v0.2.3-nightly` build suggests the team is preparing for a stable release, integrating numerous community contributions and complex feature refactors.

## 2. Releases
*   **[nightly] Nightly Build (v0.2.3-nightly.20260324.4d7a629b)**
    *   **Type:** Automated Nightly
    *   **Status:** Unstable / Development snapshot
    *   **Summary:** This build aggregates the day's high volume of merges. It likely includes the new WeCom WebSocket integration, Web UI authentication features, and fixes for the config persistence bugs.
    *   **Changelog:** [v0.2.3...main](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)

## 3. Project Progress
Significant advancements were merged today, moving key features from "in-progress" to "main":

*   **Security Hardening:** Merged PR [#1967](https://github.com/sipeed/picoclaw/pull/1967) introduces authentication for the Web UI. This is a critical security fix to prevent LLMs from bypassing the gateway's security sandbox via local HTTP API calls.
*   **WeCom (Enterprise WeChat) Overhaul:** A massive consolidation effort was completed with PRs [#1955](https://github.com/sipeed/picoclaw/pull/1955) and [#1408](https://github.com/sipeed/picoclaw/pull/1408). The team unified legacy `wecom` implementations into a single robust channel backed by the official WebSocket API, including CLI QR onboarding and streaming support.
*   **Config Persistence Fixes:** Multiple fixes (e.g., PR [#1902](https://github.com/sipeed/picoclaw/pull/1902)) resolved issues where UI settings (like "Placeholder Message" toggles) failed to persist.
*   **Tooling Improvements:** PR [#1977](https://github.com/sipeed/picoclaw/pull/1977) fixed a bug where virtual models (multi-key fallbacks) were incorrectly persisted to the database, cleaning up the model list UI.

## 4. Community Hot Topics
*   **[#1648 [OPEN] Adding TTS and ASR Support](https://github.com/sipeed/picoclaw/issues/1648)** (22 comments)
    *   **Analysis:** This is the most discussed issue. The community is eagerly awaiting native voice support. While a PR ([#1939](https://github.com/sipeed/picoclaw/pull/1939)) is open, users are debating the architecture—specifically how to handle voice RTP streams in Discord/Telegram and which ASR/TTS providers to support natively.
*   **[#1941 [OPEN] Picoclaw Config is Wiped](https://github.com/sipeed/picoclaw/issues/1941)** (11 comments)
    *   **Analysis:** A critical pain point where users report configuration loss. This has sparked discussion about the robustness of the config migration system and file locking mechanisms during updates.

## 5. Bugs & Stability
*   **Critical: Config Wipe on Update** (Issue [#1941](https://github.com/sipeed/picoclaw/issues/1941))
    *   Users report configs being reset. Maintainers are investigating interaction between `.security.yml` and standard config files.
*   **High: Cron Tasks Silently Failing** (Issue [#1058](https://github.com/sipeed/picoclaw/issues/1058))
    *   Cron jobs with `deliver=false` discard LLM responses. While a fix is being explored, the silent failure mode is dangerous for automation users.
*   **Medium: Telegram Empty Message Loop** (Issue [#1916](https://github.com/sipeed/picoclaw/issues/1916) - Closed/Fixed)
    *   Agents triggered on empty messages in new Telegram topics, causing spam loops. This was addressed in recent merges.
*   **Medium: Web UI Chat Disabled** (Issue [#1737](https://github.com/sipeed/picoclaw/issues/1737))
    *   Related to PR [#1957](https://github.com/sipeed/picoclaw/pull/1957). Using custom ports breaks the WebSocket connection detection, disabling chat input.

## 6. Feature Requests & Roadmap Signals
*   **Biologically-inspired Memory (Seahorse):** Issue [#1919](https://github.com/sipeed/picoclaw/issues/1919) proposes a "hippocampus" module for agents—splitting memory into short-term (lossless context) and long-term (consolidated) stores. This signals a move toward more autonomous, long-running agent lifecycles.
*   **Line-based File Reading:** Issue [#1974](https://github.com/sipeed/picoclaw/issues/1974) (PR [#1981](https://github.com/sipeed/picoclaw/pull/1981)) requests refactoring `ReadFileTool` from byte-offset to line-offset. This aligns PicoClaw tooling more closely with how LLMs "think" about code (lines) rather than raw byte streams.
*   **Streaming Web Chat:** Issue [#1950](https://github.com/sipeed/picoclaw/issues/1950) requests SSE/WebSocket streaming for the native Web UI, bringing it to parity with typical ChatGPT-like experiences.

## 7. User Feedback Summary
Users are enthusiastic about the rapid expansion of channels (WeCom, Matrix encryption support) but are currently struggling with **stability in the configuration layer**. The transition to a split security config (`.security.yml`) seems to be causing friction, with multiple reports of missing API keys or wiped settings after upgrades (Issue [#1901](https://github.com/sipeed/picoclaw/issues/1901)). Developers deploying via Docker are particularly sensitive to port mapping issues affecting the Web UI.

## 8. Backlog Watch
*   **[#1058 Cron deliver=false failure](https://github.com/sipeed/picoclaw/issues/1058):** Open since March 4th. While comments are recent, a definitive merged fix is still pending. This impacts reliability for background tasks.
*   **[#1648 Audio/Visual Architecture](https://github.com/sipeed/picoclaw/issues/1648):** The "Design Principles" are laid out, but the integration of the massive PR [#1939](https://github.com/sipeed/picoclaw/pull/1939) is the bottleneck. This requires careful review as it touches core I/O streams.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-25

## 1. Today's Overview
NanoClaw is experiencing **high development velocity** with 50 pull requests updated in the last 24 hours, signaling an active contribution cycle focused on expanding the ecosystem. The project remains in a **pre-release phase** (no stable releases yet), with maintainers prioritizing skill integrations and core reliability fixes. The high volume of open PRs (37) versus merged (13) suggests a feature freeze or integration testing period, while the significant bot activity indicates automated merge-forward workflows are struggling to keep certain experimental branches synchronized.

## 2. Releases
**No new releases** were published today. The project appears to be accumulating features and fixes for a future stable milestone. Users should track the `main` branch for the latest changes.

## 3. Project Progress
Today's activity focused on hardening the core architecture and merging documentation updates.
*   **Security & Permissions:** A critical fix for **IPC permission errors** when running the host as root was merged ([PR #1397](https://github.com/qwibitai/nanoclaw/pull/1397)), preventing agent containers from getting stuck in `EACCES` loops.
*   **Documentation:** Multiple documentation PRs were closed, including guidance on managing secrets via the OneCLI gateway ([PR #1400](https://github.com/qwibitai/nanoclaw/pull/1400), [PR #1398](https://github.com/qwibitai/nanoclaw/pull/1398)) and an announcement regarding Docker sandboxes ([PR #1030](https://github.com/qwibitai/nanoclaw/pull/1030)).
*   **Diagnostics:** A fix ensuring diagnostic prompts are actually shown to the agent was merged ([PR #1372](https://github.com/qwibitai/nanoclaw/pull/1372)).
*   **Core Features:** A `/remote-control` command allowing host-level access was closed ([PR #1072](https://github.com/qwibitai/nanoclaw/pull/1072)), indicating potential integration or refinement status.

## 4. Community Hot Topics
The community is actively discussing expanding NanoClaw's accessibility and backend flexibility.
*   **Alternative Interfaces:** A highly appreciated issue ([#1273](https://github.com/qwibitai/nanoclaw/issues/1273), 👍2) proposes a **multi-session web channel**. The author has already built a functional prototype, highlighting a strong user need for interfaces beyond standard messengers (Telegram/Slack).
*   **Backend Agnosticism:** Users are pushing for decoupling from Claude Code. Issue [#1163](https://github.com/qwibitai/nanoclaw/issues/1163) (👍3) discusses integrating **OpenCode** to support multiple AI providers, reflecting enterprise demand for vendor flexibility.
*   **Persistent Memory:** Interest in long-term memory continues with a proposal for **MemOS integration** ([#1130](https://github.com/qwibitai/nanoclaw/issues/1130)).

## 5. Bugs & Stability
Several stability issues were identified, with fixes already pending or merged.
*   **Critical (Fixed):** Root-host IPC permission conflicts causing system hangs were resolved in [PR #1397](https://github.com/qwibitai/nanoclaw/pull/1397).
*   **High Severity (Open):** New group folders created via IPC or setup scripts fail to generate `CLAUDE.md`, leaving agents without identity instructions ([#1391](https://github.com/qwibitai/nanoclaw/issues/1391), [#1390](https://github.com/qwibitai/nanoclaw/issues/1390)). This affects multi-group deployments significantly.
*   **Automation Failures:** The automated merge-forward workflow is consistently failing for `skill/apple-container` and `skill/compact` branches (see [#1406](https://github.com/qwibitai/nanoclaw/issues/1406)), requiring manual intervention to reconcile `main` branch updates.

## 6. Feature Requests & Roadmap Signals
The roadmap is being shaped by "skill" contributions and alternative backend support.
*   **AI Provider Expansion:** Two major PRs aim to break Claude exclusivity: **GitHub Copilot SDK support** ([PR #1351](https://github.com/qwibitai/nanoclaw/pull/1351)) and **OpenCode integration** ([Issue #1163](https://github.com/qwibitai/nanoclaw/issues/1163)). These are likely candidates for the next major version.
*   **New Channels:** Integrations for **Mattermost** ([#1379](https://github.com/qwibitai/nanoclaw/issues/1379)) and **Telegram Emoji Reactions** ([#1407](https://github.com/qwibitai/nanoclaw/issues/1407)) are in demand.
*   **Memory & Security:** A "MemOS" backend ([#1130](https://github.com/qwibitai/nanoclaw/issues/1130)) and an "agentsh" security policy engine ([PR #1380](https://github.com/qwibitai/nanoclaw/pull/1380)) signal a trend toward more autonomous, secure, and memory-capable agents.

## 7. User Feedback Summary
Users are enthusiastic about the architecture but face friction in specific deployment scenarios.
*   **Pain Points:** Setting up new groups is brittle due to missing identity files (`CLAUDE.md`), frustrating users managing multiple agent instances.
*   **Deployment Flexibility:** There is clear demand for running NanoClaw in environments other than Docker or without relying solely on messenger apps (Web UI request).
*   **Security Concerns:** The community is proactively building security layers (agentsh integration, tirith-scan), suggesting NanoClaw is being used in production environments where sandbox escapes are a concern.

## 8. Backlog Watch
*   **Reliability Overhaul:** [PR #967](https://github.com/qwibitai/nanoclaw/pull/967), addressing stuck sessions and runner reliability, has been open since March 11 and remains in "Needs Review." This is critical for production stability.
*   **Web Interface:** [Issue #1273](https://github.com/qwibitai/nanoclaw/issues/1273) (Web Channel) is highly upvoted but seemingly untouched by core maintainers since creation. This represents a significant opportunity to broaden the user base.
*   **Plugin System:** [PR #1387](https://github.com/qwibitai/nanoclaw/pull/1387) proposes a fundamental architectural change (plugin system) that requires urgent maintainer feedback to guide contributors.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-25

## 1. Today's Overview
IronClaw is experiencing a **high-velocity development phase**, marked by a significant push toward enterprise-grade features. Activity surged in the last 24 hours with **47 PRs updated** (14 merged) and **14 issues active**, indicating a robust and responsive engineering cycle. The project is currently transitioning from a single-user focus to a **multi-tenant architecture**, evidenced by a cluster of high-priority PRs addressing database-backed user management, workspaces, and RBAC. No new stable releases were cut today, as the team focuses on merging major architectural refactors and security hardening patches.

## 2. Releases
No new releases were recorded for 2026-03-25. The repository appears to be in a feature-freeze/stabilization sprint leading up to a potential major version bump incorporating the new multi-tenancy and engine v2 features.

## 3. Project Progress
Today's merged PRs focused heavily on **security hardening, performance optimization, and authentication stability**:

*   **Performance & Security Fixes:**
    *   [PR #1592](https://github.com/nearai/ironclaw/pull/1592): Optimized approval thread resolution by reducing redundant UUID parsing and fixing lock contention, directly addressing staging CI alerts.
    *   [PR #1602](https://github.com/nearai/ironclaw/pull/1602): Fixed a critical bug in hosted OAuth refresh routing, ensuring token refreshes correctly proxy through compose-api.
*   **Stability & Refactoring:**
    *   [PR #1623](https://github.com/nearai/ironclaw/pull/1623): Fixed a stale stream token gate blocking channel-relay activation, a regression from previous webhook migrations.
    *   [PR #1483](https://github.com/nearai/ironclaw/pull/1483): Promoted a staging batch containing routine status surface improvements and dependency updates.

Key features advancing in open PRs include **DB-backed user management ([PR #1626](https://github.com/nearai/ironclaw/pull/1626))**, **SSO/OIDC support**, and the **Unified Execution Engine v2 ([PR #1557](https://github.com/nearai/ironclaw/pull/1557))**.

## 4. Community Hot Topics
*   **WeChat Integration Request** ([Issue #1584](https://github.com/nearai/ironclaw/issues/1584)): Users are requesting a WeChat channel plugin for IronClaw, noting its availability in the "OpenClaw" variant. This signals a strong demand for broader messaging platform support in Asian markets.
*   **Authentication Decoupling** ([Issue #99](https://github.com/nearai/ironclaw/issues/99)): A philosophical discussion continues regarding the coupling of authentication to NEAR AI accounts. Users argue that for a security-focused open-source tool, mandatory 3rd party auth is counterintuitive. This aligns with the new SSO/OIDC feature work.
*   **NEAR Intents & MCP** ([PR #1622](https://github.com/nearai/ironclaw/pull/1622), [PR #1240](https://github.com/nearai/ironclaw/pull/1240)): Significant interest in expanding IronClaw's utility via WASM tools for NEAR Intents and Model Context Protocol (MCP) discovery.

## 5. Bugs & Stability
*   **[MEDIUM] Security: Microsoft Defender False Positive** ([Issue #1538](https://github.com/nearai/ironclaw/issues/1538)): Windows builds are being flagged as `Trojan:Win32/Wacatac.C!ml`. This is likely a false positive from the Rust build chain but blocks adoption for Windows users. Status: Closed (likely addressed or confirmed FP, but user impact remains).
*   **[MEDIUM] CI-Flagged Concurrency Issues** ([Issue #1489](https://github.com/nearai/ironclaw/issues/1488), [Issue #1488](https://github.com/nearai/ironclaw/issues/1488)): Automated CI reviews identified lock contention and repeated UUID parsing in hot paths. *Fix:* Addressed in [PR #1592](https://github.com/nearai/ironclaw/pull/1592).
*   **[MEDIUM] Onboarding Database Error** ([Issue #846](https://github.com/nearai/ironclaw/issues/846)): `ironclaw onboard` fails with a PostgreSQL save error, though the app subsequently runs. This suggests a race condition or permission issue in the initial migration/setup phase.
*   **[MEDIUM] Execution Loop Cap** ([Issue #1611](https://github.com/nearai/ironclaw/issues/1611)): Users report hitting the 50-iteration max when using local Ollama models due to empty tool completions.

## 6. Feature Requests & Roadmap Signals
The roadmap clearly points toward **Enterprise Readiness**:
1.  **SSO & Identity Management**: A suite of new issues ([#1610](https://github.com/nearai/ironclaw/issues/1610), [#1605](https://github.com/nearai/ironclaw/issues/1605), [#1608](https://github.com/nearai/ironclaw/issues/1608)) requests Google/Okta/OIDC login, DB-backed user stores, and Role-Based Access Control.
2.  **Multi-Tenancy**: [Issue #59](https://github.com/nearai/ironclaw/issues/59) (Multi-tenancy) and [PR #1614](https://github.com/nearai/ironclaw/pull/1614) (Tenant Isolation) confirm that shared deployments are a top priority for reducing hosting costs.
3.  **Web UI Management**: [Issue #1609](https://github.com/nearai/ironclaw/issues/1609) requests an admin panel for user/workspace management, moving away from API-only ops.
4.  **Channel Expansion**: [Issue #1584](https://github.com/nearai/ironclaw/issues/1584) indicates WeChat is the next requested messaging frontier.

## 7. User Feedback Summary
Users appreciate the open-source nature but feel friction in **onboarding and authentication**. The reliance on NEAR AI credentials ([Issue #99](https://github.com/nearai/ironclaw/issues/99)) is a frequent point of contention for those wanting a purely local/self-hosted experience. Conversely, the rapid addition of "intents" and "MCP" features ([PR #1622](https://github.com/nearai/ironclaw/pull/1622)) is well-received by the developer/agent community looking for agentic capabilities. Windows users face stability/security software conflicts that need better documentation or build hardening.

## 8. Backlog Watch
*   **[Issue #846](https://github.com/nearai/ironclaw/issues/846) (Onboard DB Failure)**: Open since 2026-03-10. While the app works after the error, this creates a poor first-time setup experience.
*   **[Issue #99](https://github.com/nearai/ironclaw/issues/99) (Auth Decoupling)**: Open since 2026-02-15. As the project adds complex SSO/OIDC, it risks further alienating users who simply want "local auth" without external dependencies.
*   **[PR #1451](https://github.com/nearai/ironclaw/pull/1451) & [PR #1240](https://github.com/nearai/ironclaw/pull/1240)**: Several "XL" sized PRs involving major refactors (Engine v2, MCP) have been open for several days and require close monitoring for merge conflicts as the codebase shifts rapidly.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest (2026-03-25)

## 1. Today's Overview
LobsterAI is exhibiting **very high development velocity** with 50 pull requests updated in the last 24 hours (26 open, 24 merged/closed), indicating an active sprint or upcoming release preparation. The project is currently in a **stabilization and optimization phase**, heavily focused on fixing bugs related to the "OpenClaw" (Cowork) agent subsystem and improving UI responsiveness (React memoization, virtual scrolling). However, the **stability of recent builds is a concern**, with 23 new/active issues reported, many blocking users from basic functionality like updates, DingTalk bot integration, and MCP configuration.

## 2. Releases
**None** recorded in the specific "New Releases" data field for today.
*Note: Frequent nightly/beta builds (e.g., v2026.3.24) are referenced in Issues, but no stable tag was cut in this 24h window.*

## 3. Project Progress
Significant progress was made in **performance optimization** and **feature extensibility**.
*   **Performance:** Critical rendering optimizations were merged, including wrapping `MarkdownContent` in `React.memo` ([PR #770](https://github.com/netease-youdao/LobsterAI/pull/770), [PR #736](https://github.com/netease-youdao/LobsterAI/pull/736)) and adding virtual scrolling to chat lists ([PR #764](https://github.com/netease-youdao/LobsterAI/pull/764)) to resolve white-screen crashes during long sessions.
*   **Integrations:** Support for **GitHub Copilot** authentication and models is ready for review ([PR #707](https://github.com/netease-youdao/LobsterAI/pull/707)), and **Novita AI** was added as a provider ([PR #766](https://github.com/netease-youdao/LobsterAI/pull/766)).
*   **UX Improvements:** Merged features include file browsing panels ([PR #773](https://github.com/netease-youdao/LobsterAI/pull/773)), chat export to Markdown/JSON ([PR #755](https://github.com/netease-youdao/LobsterAI/pull/755)), and fixes for Windows startup foreground locking ([PR #690](https://github.com/netease-youdao/LobsterAI/pull/690)).

## 4. Community Hot Topics
*   **MCP Configuration Failures:** Users are struggling to configure Model Context Protocol (MCP) servers, reporting "0 tools" synced despite correct setups ([Issue #724](https://github.com/netease-youdao/LobsterAI/issues/724), [Issue #728](https://github.com/netease-youdao/LobsterAI/issues/728)).
    *   *Analysis:* There is a disconnect between the documentation/UI and the actual runtime requirements (possibly Node.js version or environment path issues).
*   **Update Mechanism Broken:** The Windows updater is stalling significantly (2+ minutes) at specific percentages ([Issue #703](https://github.com/netease-youdao/LobsterAI/issues/703)).
    *   *Analysis:* This suggests a server-side bandwidth throttling issue or a client-side hash verification bottleneck in the Electron updater.
*   **DingTalk Integration Stability:** Enterprise users report integration failures with DingTalk bots (duplicated messages or connection fetch failures) ([Issue #691](https://github.com/netease-youdao/LobsterAI/issues/691), [Issue #751](https://github.com/netease-youdao/LobsterAI/issues/751)).

## 5. Bugs & Stability
*   **Critical / Blocking:**
    *   **DingTalk Bot Failure:** `fetch failed` errors preventing chat on the latest version ([Issue #751](https://github.com/netease-youdao/LobsterAI/issues/751)).
    *   **OpenClaw Gateway Timeout:** Users cannot start agent sessions due to gateway initialization timeouts ([Issue #769](https://github.com/netease-youdao/LobsterAI/issues/769)).
    *   **Execution Mode Reset:** Configuration for `executionMode` (auto/sandbox) is silently reverting to `local`, breaking isolation ([Issue #735](https://github.com/netease-youdao/LobsterAI/issues/735)).
*   **Major:**
    *   **Memory Structure Corruption:** Editing memories via the UI destroys the formatting of `MEMORY.md` ([Issue #754](https://github.com/netease-youdao/LobsterAI/issues/754)).
    *   **Uncontrolled Background Processes:** Deleting a running agent session does not stop the backend execution ([Issue #734](https://github.com/netease-youdao/LobsterAI/issues/734)).
    *   **Context Limit Handling:** WeChat integration hits the 65k token limit and gets stuck in a loop without truncation ([Issue #774](https://github.com/netease-youdao/LobsterAI/issues/774)).
*   **Minor:** UI state issues (Send button not becoming "Stop" after network recovery) ([Issue #743](https://github.com/netease-youdao/LobsterAI/issues/743)).

## 6. Feature Requests & Roadmap Signals
*   **Voice Input:** Requested to reduce typing strain ([Issue #722](https://github.com/netease-youdao/LobsterAI/issues/722)). *Likely to be considered given the trend toward multimodal AI.*
*   **Observability:** A PR for **Opik** integration is open ([PR #768](https://github.com/netease-youdao/LobsterAI/pull/768)), signaling a roadmap focus on debugging agent traces for enterprise users.
*   **Message Management:** A "bulk delete" feature for chats is being developed ([PR #772](https://github.com/netease-youdao/LobsterAI/pull/772)), suggesting a move toward more robust data management tools.

## 7. User Feedback Summary
Users appreciate the rapid feature iteration but are frustrated by **configuration fragility**, particularly regarding MCP and API keys. The **update experience on Windows** is currently a major pain point, deterring users from keeping the software current. Enterprise users (DingTalk/WeChat integration) feel like "second-class citizens" as specific platform bugs persist. The **"Cowork" (Agent)** feature is popular but perceived as unstable due to frequent state synchronization errors.

## 8. Backlog Watch
*   **[Issue #741](https://github.com/netease-youdao/LobsterAI/issues/741) - Performance Bottlenecks:** A detailed technical analysis of SQLite and loading inefficiencies. This needs architectural attention as it affects core UX.
*   **[Issue #732](https://github.com/netease-youdao/LobsterAI/issues/732) - Alibaba Cloud Qwen API Failure:** A regression from v0.2.2 to v2026.3.24 regarding authentication headers. Requires verification if recent provider refactoring broke custom endpoints.
*   **[PR #739](https://github.com/netease-youdao/LobsterAI/pull/739) - MCP Node Runtime Fix:** This open PR might solve the bulk of MCP "0 tools" complaints; it needs urgent review/merge.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest: 2026-03-25

## 1. Today's Overview
TinyClaw demonstrates exceptional development velocity with a focused "stabilization and expansion" sprint, merging **8 Pull Requests** and releasing **3 new versions** (v0.0.17 - v0.0.19) within a single 24-hour window. The project is currently in a heavy engineering phase, prioritizing architectural robustness—specifically regarding message persistence and queue management—over new feature exploration. The primary area of focus has been the event-processing pipeline, ensuring that scheduled, proactive, and user messages are handled reliably without race conditions. With zero open issues remaining from today's activity, the codebase appears to be in a "hardening" phase, likely preparing for a broader beta or stability milestone.

## 2. Releases
Three consecutive patch versions were released today, indicating rapid iteration on the message queue infrastructure:

*   **[v0.0.19](https://github.com/TinyAGI/tinyagi/releases/tag/v0.0.19)**
    *   **Focus:** Critical bug fixes for persistence and process lifecycle.
    *   **Changes:** Fixed scheduled messages failing to persist to the `agent_messages` table (#259) and resolved a race condition in the `signalDone` grace period handler that caused premature process termination (#258).
*   **[v0.0.18](https://github.com/TinyAGI/tinyagi/releases/tag/v0.0.18)**
    *   **Focus:** Output stream cleanup.
    *   **Changes:** Fixed a duplicate response stream issue in `handleTeamResponse` (8dd7f42) that caused users to receive redundant messages.
*   **[v0.0.17](https://github.com/TinyAGI/tinyagi/releases/tag/v0.0.17)**
    *   **Focus:** Major feature addition and platform migration.
    *   **Changes:** Introduced the **Skills Manager** (#254), allowing agents to dynamically search and install skills from a registry. Also executed a significant migration of the Telegram channel from `node-telegram-bot-api` to **grammY**.

## 3. Project Progress
Today's development efforts were almost exclusively driven by core maintainer **jlia0**, focusing on deep infrastructure improvements:

*   **Queue & Persistence Overhaul:** Completed a significant refactor of the message queue ([PR #256](https://github.com/TinyAGI/tinyagi/pull/256), [PR #250](https://github.com/TinyAGI/tinyagi/pull/250)). User messages are now persisted to `agent_messages` immediately upon enqueue, eliminating "ghost messages" and ensuring chat history visibility matches the actual state.
*   **Subprocess Reliability:** Addressed critical reliability issues where agent subprocesses would hang or exit with error codes incorrectly. [PR #251](https://github.com/TinyAGI/tinyagi/pull/251) introduced a result-event-based timeout (30s) to kill zombie processes, and [PR #258](https://github.com/TinyAGI/tinyagi/pull/258) fixed race conditions in the graceful shutdown handler.
*   **Real-time Communication:** Fixed proactive message delivery in [PR #257](https://github.com/TinyAGI/tinyagi/pull/257). Agents can now push messages to users via Telegram/SSE without waiting for a user prompt, enabled by proper SSE event emission.
*   **Dashboard Accuracy:** [PR #255](https://github.com/TinyAGI/tinyagi/pull/255) fixed the admin dashboard to display accurate "queued" vs. "processing" statuses for agent sessions, moving away from heuristic guessing to database-backed state.

## 4. Community Hot Topics
*There is insufficient community discussion data (comments/reactions) from today's feed to analyze specific hot topics. The activity log consists entirely of merged code contributions without associated comment volume.*

## 5. Bugs & Stability
Today's releases addressed several high-impact stability bugs:

1.  **CRITICAL: Subprocess Race Condition & Hangs**
    *   **Issue:** Agent processes were hanging indefinitely or returning exit code 143 (SIGTERM) prematurely, causing generic error responses.
    *   **Fix:** [PR #258](https://github.com/TinyAGI/tinyagi/pull/258) and [PR #251](https://github.com/TinyAGI/tinyagi/pull/251).
    *   **Resolution:** Implemented manual session kill APIs and fixed the timing of `signalDone` to prevent the `close` event from firing before the process settles.
2.  **HIGH: Scheduled Message Data Loss**
    *   **Issue:** Scheduled messages were transient and not stored in the `agent_messages` table, making them irretrievable in history logs.
    *   **Fix:** [PR #259](https://github.com/TinyAGI/tinyagi/pull/259).
3.  **MEDIUM: Duplicate Stream Output**
    *   **Issue:** Team responses triggered duplicate streaming events.
    *   **Fix:** [PR #258](https://github.com/TinyAGI/tinyagi/pull/258) (Release note ref / Commit 8dd7f42).
4.  **MEDIUM: Proactive Message Failure**
    *   **Issue:** Messages sent by the agent (unsolicited) were not reaching Telegram clients.
    *   **Fix:** [PR #257](https://github.com/TinyAGI/tinyagi/pull/257).

## 6. Feature Requests & Roadmap Signals
*   **Dynamic Skill Installation:** The introduction of the `skills-manager` skill in [PR #254](https://github.com/TinyAGI/tinyagi/pull/254) signals a shift toward a plugin-centric architecture. This suggests the roadmap will likely focus on expanding the Skills Registry and enabling agents to autonomously extend their own capabilities.
*   **Platform Modernization:** The migration to **grammY** (in v0.0.17) indicates a strategic move toward more modern, maintainable middleware libraries for communication channels. Future updates may see similar refactors for other communication platforms (e.g., Discord/Slack adapters) if they are deemed legacy.

## 7. User Feedback Summary
*Based on commit messages and PR descriptions, user pain points centered on **synchronization and reliability**.*
*   **Pain Point:** Users experienced a disconnect between sending a message and seeing it in the history (optimistic UI updates failing).
    *   *Outcome:* Immediate persistence logic in [PR #250](https://github.com/TinyAGI/tinyagi/pull/250).
*   **Pain Point:** Agents failing to respond or getting "stuck" (zombie processes).
    *   *Outcome:* Lifecycle management improvements in [PR #251](https://github.com/TinyAGI/tinyagi/pull/251).
*   **Pain Point:** Dashboard UI showing incorrect status for messages.
    *   *Outcome:* Status field fix in [PR #255](https://github.com/TinyAGI/tinyagi/pull/255).

## 8. Backlog Watch
*   **No Stale Items:** All updated issues/PRs from the last 24 hours have been closed and merged. The project appears to have a "zero backlog" policy for the current sprint, with maintainers clearing the queue rapidly. There are no long-unanswered items visible in today's data slice.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-03-25

## 1. Today's Overview
The Moltis project is experiencing a **high-velocity development phase**, characterized by an exceptionally high merge rate of 22 PRs in 24 hours against only 4 remaining open issues. This indicates a focused effort to close backlog items and stabilize the codebase, likely preparing for a future release candidate. The maintainers are aggressively addressing cross-platform support (macOS, Docker), integration channels (Matrix, WhatsApp), and LLM provider compatibility. With a 95% closure rate on recent pull requests, the project health appears robust and highly reactive to community contributions.

## 2. Releases
No new releases were published today (2026-03-25). However, the volume of merged PRs suggests a substantial version bump is imminent.

## 3. Project Progress
Today's development focused heavily on **infrastructure, platform parity, and LLM context handling**.

*   **Platform & Infrastructure:**
    *   **macOS Support:** Advanced significantly with PR [#422](https://github.com/moltis-org/moltis/pull/422) (Open), configuring release signing and notarization.
    *   **IPv6 Support:** Fixed server crashes with IPv6 bind addresses via PR [#481](https://github.com/moltis-org/moltis/pull/481).
    *   **Docker:** Added Node.js/npm runtime to Docker images to support stdio-based MCP servers out-of-the-box (PR [#479](https://github.com/moltis-org/moltis/pull/479)), closing a long-standing user request.
    *   **Refactoring:** Extracted `moltis-httpd` crate to decouple HTTP transport from core logic (PR [#465](https://github.com/moltis-org/moltis/pull/465)).

*   **Integrations & Channels:**
    *   **Matrix:** Added full media support (images, voice, files) in PR [#482](https://github.com/moltis-org/moltis/pull/482).
    *   **WhatsApp:** Fixes for sled persistence and graceful shutdown were merged (PR [#285](https://github.com/moltis-org/moltis/pull/285)).

*   **LLM & Memory Architecture:**
    *   **System Prompt Optimization:** PR [#476](https://github.com/moltis-org/moltis/pull/476) moved datetime injection out of the system prompt. This stabilizes the prompt prefix, enabling **KV cache hits** for local LLMs (Ollama/LM Studio) and saving compute costs.
    *   **Tools:** Fixed cron tool parameter handling for diverse LLM outputs (PR [#480](https://github.com/moltis-org/moltis/pull/480)) and added OpenAI Responses API SSE support (PR [#361](https://github.com/moltis-org/moltis/pull/361)).

## 4. Community Hot Topics
*   **[#176 [Feature]: Add datetime to system prompt context](https://github.com/moltis-org/moltis/issues/176)** (14 comments, +1 👍)
    *   *Analysis:* This open issue discusses adding datetime to the context. Interestingly, PR #476 (merged today) appears to address the architectural side of this by *moving* datetime to preserve cache validity, but the issue remains open, suggesting the user's specific implementation desire or format preference might still be under discussion.
*   **[#414 [Bug]: z.ai does not work out of the box](https://github.com/moltis-org/moltis/issues/414)** (7 comments)
    *   *Analysis:* Users are reporting network errors with specific provider configurations (z.ai), indicating friction in "first run" experiences for non-standard providers.
*   **[#460 [Bug]: WhatsApp Integration is confusing](https://github.com/moltis-org/moltis/issues/460)** (+3 👍)
    *   *Analysis:* Despite code fixes merged today, users highlight that the configuration UX for WhatsApp remains complex.

## 5. Bugs & Stability
The team has been aggressive in fixing bugs, particularly those affecting deployment and tool reliability:

1.  **[Fixed] IPv6 Binding Crash:** High severity. The server crashed when binding to IPv6 addresses (e.g., `:::8080`). Fixed in PR [#481](https://github.com/moltis-org/moltis/pull/481).
2.  **[Fixed] Browser Container Permissions:** Chrome containers failed to write to host-mounted profiles. Fixed by setting world-writable permissions in PR [#477](https://github.com/moltis-org/moltis/pull/477).
3.  **[Fixed] Config Import Data Loss:** Importing from OpenClaw overwrote the 700-line config template with a bare file. Fixed in PR [#478](https://github.com/moltis-org/moltis/pull/478).
4.  **[New] JSON Schema Generation:** Issue [#485](https://github.com/moltis-org/moltis/issues/485) reports that built-in tools generate invalid JSON schemas for "strict" providers (likely OpenAI strict mode), causing tool call failures.
5.  **[New] Cron Tool Confusion:** Issue [#430](https://github.com/moltis-org/moltis/issues/430) (Closed, likely fixed by PR #480) noted agents failing to use cron tools due to parameter formatting issues.

## 6. Feature Requests & Roadmap Signals
*   **Tiered Memory Recall:** Issue [#483](https://github.com/moltis-org/moltis/issues/483) proposes reimplementing tiered recall (prepending `MEMORY.md`) to ensure recent memories aren't truncated. This is a strong signal that memory persistence is a top priority for the next evolution of the agent.
*   **MCP Support in Docker:** The merge of PR [#479](https://github.com/moltis-org/moltis/pull/479) signals a push to make Moltis a universal MCP (Model Context Protocol) host.
*   **MiniMax Models:** Added support for MiniMax M2.7 models (PR [#475](https://github.com/moltis-org/moltis/pull/475)), expanding the provider catalog.

## 7. User Feedback Summary
Users are currently focused on **deployment ease** and **agent reliability**.
*   **Pain Points:** Users find the "out of the box" experience for specific providers (z.ai) and integrations (WhatsApp) difficult to configure. The config import bug (#458, #478) was a significant friction point that has now been addressed.
*   **Performance:** There is a clear demand for better local LLM support, evidenced by the system prompt stabilization (PR #476) aimed at improving KV cache efficiency.
*   **Satisfaction:** The rapid closure of issues regarding Docker MCP support and IPv6 binding suggests high responsiveness to operational needs.

## 8. Backlog Watch
*   **[#422 fix(macos): configure release signing](https://github.com/moltis-org/moltis/pull/422):** This PR is currently *Open* and critical for macOS adoption. It requires review/merge to allow users to run Moltis on macOS without Gatekeeper warnings.
*   **[#485 Built-in tools generate invalid JSON Schema](https://github.com/moltis-org/moltis/issues/485):** A fresh bug report that could break tool usage on strict LLM providers. Needs triage.
*   **[#118 Add node/npx to Docker image](https://github.com/moltis-org/moltis/issues/118):** This was marked *Closed*, but users should verify if PR #479 fully satisfies the requirement for running arbitrary MCPs.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest (2026-03-25)

## 1. Today's Overview
CoPaw is exhibiting **very high velocity** following the release of **v0.2.0**, with 50 issues and 50 PRs updated in the last 24 hours. The project is aggressively pushing new capabilities, notably Inter-Agent Communication and a built-in QA Agent, while simultaneously grappling with "growing pains" from the recent v0.1.0 architectural shift. The community is highly engaged, with significant discussion around deployment stability (Docker) and memory management. While the merge rate is healthy (66% of updated PRs), the volume of new bugs suggests a stabilization period is needed.

## 2. Releases
### **v0.2.0**
*   **Highlights**: Introduction of **Inter-Agent Communication**. This includes new CLI commands (`copaw agents`, `copaw message`) to list agents, push messages to channels, and send requests between agents.
*   **Impact**: Marks a significant evolution from a single-agent assistant to a multi-agent orchestration platform.

## 3. Project Progress
**Merged/Closed PRs (Key Advancements):**
*   **Built-in QA Agent ([#2189](https://github.com/agentscope-ai/CoPaw/pull/2189))**: Added a specialized agent for answering CoPaw-specific questions by reading source code and docs.
*   **Enhanced Search Tools ([#2186](https://github.com/agentscope-ai/CoPaw/pull/2186))**: Improvements to `grep` and `glob` search capabilities.
*   **Dependency Refactor ([#2206](https://github.com/agentscope-ai/CoPaw/pull/2206))**: Removed `litellm` and updated `reme-ai` to `0.3.1.3`.
*   **Heartbeat Fix ([#2217](https://github.com/agentscope-ai/CoPaw/pull/2217))**: Fixed cron expression parsing for heartbeat configs.

**Active Development (Open PRs):**
*   **Model Fallback ([#2199](https://github.com/agentscope-ai/CoPaw/pull/2199))**: Implementing automatic failover for rate-limited or failing models.
*   **WeChat Channel ([#2123](https://github.com/agentscope-ai/CoPaw/pull/2123))**: Native WeChat support via QR login is in progress.
*   **Unified Skill Management ([#2219](https://github.com/agentscope-ai/CoPaw/pull/2219))**: Improving how skills are customized for new agents.

## 4. Community Hot Topics
1.  **Docker Deployment Regression ([#2097](https://github.com/agentscope-ai/CoPaw/issues/2097))**: 12 comments. Users report that updating from v0.07 to v0.1.0 breaks volume mounts, making skills and workspaces invisible in the UI despite data being present in the container.
2.  **Memory Compaction Continuity ([#2047](https://github.com/agentscope-ai/CoPaw/issues/2047))**: 8 comments. Discussion on how memory compaction disrupts user flow; a request for "Context Recovery" to display preserved context after compaction.
3.  **WeChat "ClawBot" Support ([#2043](https://github.com/agentscope-ai/CoPaw/issues/2043))**: 7 comments, 9 thumbs up. High demand for supporting the new WeChat ClawBot API released on March 22.
4.  **Enterprise WeChat (WeCom) Multi-user Issues ([#2152](https://github.com/agentscope-ai/CoPaw/issues/2152))**: 5 comments. Users report that WeCom bots only respond to the creator, not other authorized users.

## 5. Bugs & Stability
*   **Critical: Docker Data Visibility** - As noted in [#2097](https://github.com/agentscope-ai/CoPaw/issues/2097), the v0.1.0 update causes a perceived data loss for Docker users. **No fix PR identified yet.**
*   **High: CPU Spin Loop** - Issue [#2218](https://github.com/agentscope-ai/CoPaw/issues/2218) reports v0.2.0 causes 100% CPU usage at idle due to a busy-polling loop.
*   **High: Task Interruption by Memory Compaction** - Issue [#1974](https://github.com/agentscope-ai/CoPaw/issues/1974) notes that context compression interrupts running tasks and resets the session.
*   **Medium: DingTalk Session Confusion** - Issue [#2175](https://github.com/agentscope-ai/CoPaw/issues/2175) describes a UI bug where group chats merge into a single session view.
*   **Medium: MiniMax Connection** - Issue [#2195](https://github.com/agentscope-ai/CoPaw/issues/2195) notes connection failures with MiniMax Token Plan API Keys. (See fix attempt in PR [#2205](https://github.com/agentscope-ai/CoPaw/pull/2205)).

## 6. Feature Requests & Roadmap Signals
*   **Agent Communication Protocol (ACP)** ([#1059](https://github.com/agentscope-ai/CoPaw/issues/1059)): Request for bidirectional integration with IDE coding agents (Codex, Claude Code). This aligns closely with the v0.2.0 Inter-Agent Communication release and is likely a near-term priority.
*   **Self-Improving Skills** ([#2166](https://github.com/agentscope-ai/CoPaw/issues/2166)): Users want the agent to "remember" successful resolutions of complex tasks automatically (persistent fine-tuning/RAG).
*   **Tool Execution Tracking** ([#2216](https://github.com/agentscope-ai/CoPaw/issues/2216)): Request for built-in analytics on skill success rates and duration.
*   **Markdown Input Support** ([#2214](https://github.com/agentscope-ai/CoPaw/issues/2214)): Request to support Markdown formatting in the console input fields.

## 7. User Feedback Summary
Users are excited about the speed of development but frustrated by **migration stability**.
*   **Pain Points**:
    *   "It forgets what it learned": Users are frustrated that the agent doesn't retain "lessons" from previous failures (Issue [#2166](https://github.com/agentscope-ai/CoPaw/issues/2166)).
    *   "Interrupted tasks": The memory compaction process is intrusive, stopping tasks mid-execution (Issue [#1974](https://github.com/agentscope-ai/CoPaw/issues/1974)).
    *   "Cannot stop": Desktop app lacks a functional stop button for running tasks (Issue [#2190](https://github.com/agentscope-ai/CoPaw/issues/2190)).
*   **Positive Feedback**: Enthusiasm for the new QA Agent and the potential of inter-agent communication.

## 8. Backlog Watch
*   **Issue #2097 (Docker Data Loss)**: With 12 comments and no assignee/fix PR linked in the release notes, this requires immediate maintainer attention to prevent upgrade failures in the user base.
*   **Issue #1974 (Context Compaction)**: This fundamentally affects the "flow" of using the assistant. It needs architectural consideration rather than a patch.
*   **PR #2067 & #1913 (Unified /stop command)**: These open PRs address the "unstoppable task" feedback. Merging this is critical for user control.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-03-25

## 1. Today's Overview

ZeptoClaw demonstrates **high velocity development** with 29 PRs updated and 2 new releases in the last 24 hours. The project is in an active stabilization phase following recent Telegram channel improvements, with multiple critical bug fixes merged in v0.8.1. The maintainers (led by @qhkm) are highly responsive, shipping fixes for concurrency issues and tool execution bugs within 24 hours of identification. Community contributions via @dependabot[bot] and external contributors like @stuartbowness indicate a healthy collaborative ecosystem.

---

## 2. Releases

### v0.8.2 (2026-03-25)
**Type:** Maintenance / Dependency Updates

Key changes:
- **[CI/CD]** Bumped `Swatinem/rust-cache` from 2.8.2 → 2.9.1 ([#412](https://github.com/qhkm/zeptoclaw/pull/412))
- **[CI/CD]** Bumped `docker/metadata-action` from 5.10.0 → 6.0.0 ([#382](https://github.com/qhkm/zeptoclaw/pull/382))

> No breaking changes. Recommended upgrade for CI pipeline stability improvements.

---

### v0.8.1 (2026-03-24)
**Type:** Critical Bug Fixes + Security Enhancements

Key changes:
- **[Security]** Hardened embedded ZeptoAgent tool execution ([#402](https://github.com/qhkm/zeptoclaw/pull/402)) — addresses sandboxing and execution boundary concerns
- **[Tools]** Added conformance fixtures, improved `edit_file` fuzzy matching, output truncation ([#398](https://github.com/qhkm/zeptoclaw/pull/398))
- **[Channels]** Telegram channel improvements + security hardening

> ⚠️ **Note:** The fuzzy matching fix in [#398](https://github.com/qhkm/zeptoclaw/pull/398) introduced two regressions (tracked in [#403](https://github.com/qhkm/zeptoclaw/issues/403)), which were subsequently closed as fixes were identified.

---

## 3. Project Progress

### Merged PRs (21 in last 24h)

| Category | PR | Description |
|----------|-----|-------------|
| **Features** | [#409](https://github.com/qhkm/zeptoclaw/pull/409) | Telegram long message splitting (prevents silent failures at 4096-byte limit) |
| **Dependencies** | [#377](https://github.com/qhkm/zeptoclaw/pull/377), [#381](https://github.com/qhkm/zeptoclaw/pull/381) | Astro 5.17.3 → 5.18.0 (docs sites) |
| **Dependencies** | [#385](https://github.com/qhkm/zeptoclaw/pull/385) | Rustyline 15.0.0 → 17.0.2 (CLI readline) |
| **Dependencies** | [#413](https://github.com/qhkm/zeptoclaw/pull/413) | bcrypt 0.18.0 → 0.19.0 |
| **CI/CD** | [#380](https://github.com/qhkm/zeptoclaw/pull/380) | docker/login-action 3.7.0 → 4.0.0 |
| **CI/CD** | [#375](https://github.com/qhkm/zeptoclaw/pull/375) | docker/build-push-action 6.19.2 → 7.0.0 |

**Progress Assessment:** The team is iterating rapidly on Telegram channel robustness (long messages, photo support pending). Tool execution hardening indicates focus on agent reliability for production workloads.

---

## 4. Community Hot Topics

| Issue/PR | Engagement | Analysis |
|----------|------------|----------|
| [#397](https://github.com/qhkm/zeptoclaw/issues/397) — *Community discussion venue* | 2 comments | User struggles with **Qwen model integration**. Signals need for better onboarding docs and a dedicated community space (Discord/Telegram). |
| [#356](https://github.com/qhkm/zeptoclaw/pull/356) — *ACP Protocol Implementation* | Long-running PR (Mar 13) | Significant architectural addition: **Agent Client Protocol** via stdio + HTTP. Enables ZeptoClaw as a subprocess agent for external orchestrators. Awaiting review. |

**Underlying Need:** Users want **guided setup experiences** for third-party LLM providers (especially Qwen) and **real-time support channels**.

---

## 5. Bugs & Stability

### Critical (P1)

| Bug | Status | Fix Available? |
|-----|--------|----------------|
| [#416](https://github.com/qhkm/zeptoclaw/issues/416) — Provider model discoverability regression (breaks OpenRouter routing) | 🟡 OPEN | ✅ Fix in [#417](https://github.com/qhkm/zeptoclaw/pull/417) |
| [#403](https://github.com/qhkm/zeptoclaw/issues/403) — `edit_file` fuzzy-match range mapping + whitespace hang | 🟢 FIXED | Merged in v0.8.1 |

### High

| Bug | Status | Fix Available? |
|-----|--------|----------------|
| [#415](https://github.com/qhkm/zeptoclaw/issues/415) — Telegram typing indicator race condition (concurrent messages) | 🟡 OPEN | ✅ Fix in [#418](https://github.com/qhkm/zeptoclaw/pull/418) |
| [#419](https://github.com/qhkm/zeptoclaw/issues/419) — Telegram photo messages silently dropped | 🟡 OPEN | ✅ Fix in [#420](https://github.com/qhkm/zeptoclaw/pull/420) |

**Stability Assessment:** Telegram channel has multiple edge-case bugs discovered post-v0.8.1, but fixes are already in PR review. No systemic stability concerns.

---

## 6. Feature Requests & Roadmap Signals

| Feature Signal | Source | Likelihood |
|----------------|--------|------------|
| **Multimodal photo/image support for Telegram** | [#419](https://github.com/qhkm/zeptoclaw/issues/419) + [#420](https://github.com/qhkm/zeptoclaw/pull/420) | 🔴 **High** — PR ready for review |
| **ACP Protocol (stdio + HTTP)** | [#356](https://github.com/qhkm/zeptoclaw/pull/356) | 🟡 **Medium** — Large PR, needs maintainer review |
| **PR guidelines for AI-assisted contributions** | [#421](https://github.com/qhkm/zeptoclaw/pull/421) | 🔴 **High** — Documentation improvement |
| **Discord text attachment handling** | [#414](https://github.com/qhkm/zeptoclaw/pull/414) | 🟡 **Medium** — In progress by @rafaellin |

**Next Version Prediction (v0.8.3 or v0.9.0):** Expect Telegram multimodal support (#420), typing indicator fix (#418), and provider routing fix (#417) to ship soon.

---

## 7. User Feedback Summary

### Pain Points
1. **Model Configuration Complexity** — Users report difficulty configuring Qwen and other non-Anthropic models ([#397](https://github.com/qhkm/zeptoclaw/issues/397))
2. **Silent Failures** — Telegram photos ignored without error feedback ([#419](https://github.com/qhkm/zeptoclaw/issues/419)); long messages silently truncated ([#409](https://github.com/qhkm/zeptoclaw/pull/409) — now fixed)
3. **Lack of Community Support** — No official discussion forum/Discord for troubleshooting

### Positive Signals
- Active external contributions from @stuartbowness (Telegram improvements) and @starsy (ACP protocol)
- Rapid maintainer response to critical bugs (same-day fixes)
- Dependabot hygiene is excellent (21 dependency PRs processed)

---

## 8. Backlog Watch

| Item | Age | Priority | Action Needed |
|------|-----|----------|---------------|
| [#356](https://github.com/qhkm/zeptoclaw/pull/356) — ACP Protocol | 12 days | High | **Maintainer review required** — Large architectural change, blocks users needing stdio/HTTP agent interfaces |
| [#414](https://github.com/qhkm/zeptoclaw/pull/414) — Discord text attachment | 1 day | Medium | Review and test |
| [#397](https://github.com/qhkm/zeptoclaw/issues/397) — Community venue request | 3 days | Low | Consider creating Discord/Telegram community link in README |

---

**Summary:** ZeptoClaw is a rapidly maturing AI agent framework with strong momentum. The v0.8.x series focuses on **channel reliability** (Telegram) and **tool execution hardening**. Immediate priorities should be merging the open Telegram fixes (#417, #418, #420) and reviewing the ACP protocol PR (#356) which unlocks significant integration use cases.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

⚠️ Summary generation failed.

</details>