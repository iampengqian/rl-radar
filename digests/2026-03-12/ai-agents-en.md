# OpenClaw Ecosystem Digest 2026-03-12

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-03-12 02:24 UTC

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

OpenClaw is experiencing **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours. The project is in an active development phase with a high ratio of open issues (420 open vs 80 closed), suggesting the community is actively stress-testing new features and reporting edge cases. The open-to-closed PR ratio (333 open vs 167 merged) indicates substantial changes are in flight but not yet merged. No new releases dropped today, which aligns with the high volume of regression reports against versions 2026.3.7 and 2026.3.8 — the team appears to be stabilizing before cutting a new release.

---

## 2. Releases

**No new releases today.** The last versions appear to be 2026.3.7 and 2026.3.8, both of which have significant regression reports (detailed in Section 5).

---

## 3. Project Progress

### Notable Merged/Closed PRs:
- **[PR #40470](https://github.com/openclaw/openclaw/pull/40470)** — Fixed Telegram group chat media preservation when bot is not mentioned.

### Key In-Flight PRs (Open, substantial work):
| PR | Size | Focus | Summary |
|---|---|---|---|
| **[#43497](https://github.com/openclaw/openclaw/pull/43497)** | XL | Agents | Recover subagent runs after gateway restart |
| **[#41345](https://github.com/openclaw/openclaw/pull/41345)** | XL | Backup | Add folder-backed encrypted snapshot flow with setup/run/restore |
| **[#43016](https://github.com/openclaw/openclaw/pull/43016)** | XL | HarmonyOS | Add HarmonyOS node app (bridge+chat) |
| **[#41640](https://github.com/openclaw/openclaw/pull/41640)** | XL | Auth | Add `models auth clean` command to prune stale auth profiles |
| **[#43573](https://github.com/openclaw/openclaw/pull/43573)** | L | ACP | Persist initial `sessions_spawn` task for ACP sessions |
| **[#36860](https://github.com/openclaw/openclaw/pull/36860)** | L | ACP | Pass abort signal to `runTurn` to prevent stuck sessions |
| **[#43498](https://github.com/openclaw/openclaw/pull/43498)** | L | Memory | Add `memory_refresh` tool for atomic replace and conflict preview |
| **[#41834](https://github.com/openclaw/openclaw/pull/41834)** | M | Search | Add Mistral as `web_search` provider |
| **[#35558](https://github.com/openclaw/openclaw/pull/35558)** | L | Providers | Add built-in AIPing provider support |

**Assessment:** Heavy investment in **agent reliability (ACP/subagent recovery)**, **memory system robustness**, and **platform expansion (HarmonyOS)**.

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count):

| Issue | Comments | 👍 | Theme |
|---|---|---|---|
| **[#32828](https://github.com/openclaw/openclaw/issues/32828)** | 51 | 7 | False "API rate limit reached" error across all models |
| **[#26534](https://github.com/openclaw/openclaw/issues/26534)** | 44 | 11 | Request: DingTalk as first-install channel option |
| **[#9443](https://github.com/openclaw/openclaw/issues/9443)** | 16 | 1 | Request: Prebuilt Android APK releases |
| **[#9899](https://github.com/openclaw/openclaw/issues/9899)** | 15 | 4 | System prompt should include day of week for calendar tasks |
| **[#41445](https://github.com/openclaw/openclaw/issues/41445)** | 15 | 1 | Kimi K2.5 config validation fails with Zod error |
| **[#39907](https://github.com/openclaw/openclaw/issues/39907)** | 15 | 6 | Kimi K2.5 regression: emits literal `exec(...)` text instead of tool calls |

### Analysis of Underlying Needs:
1. **API Error Handling (#32828)** — Users are frustrated by misleading error messages. The false positive "rate limit" blocks usage even when APIs work fine externally. This signals a need for **more accurate error classification and user-facing diagnostics**.

2. **Enterprise/China Market Expansion (#26534, #28744)** — Multiple requests for **DingTalk, Feishu (飞书)** integration reflect strong enterprise adoption in China. Vision/image support for Feishu (#28744) is a blocker for multimodal workflows.

3. **Mobile Deployment Friction (#9443)** — Users want **prebuilt Android APKs** rather than building from source. Mobile companion apps are critical for on-the-go assistant use.

4. **Kimi Model Integration (#41445, #39907, #40157, #41690, #40911)** — At least 5 issues relate to **Kimi K2.5** tool calling failures and config validation errors. Kimi appears to be a popular model choice in the Chinese market, but integration is currently broken.

---

## 5. Bugs & Stability

### Critical Regressions (2026.3.7 / 2026.3.8):

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| 🔴 **Critical** | **[#41445](https://github.com/openclaw/openclaw/issues/41445)**, **[#41690](https://github.com/openclaw/openclaw/issues/41690)**, **[#40911](https://github.com/openclaw/openclaw/issues/40911)** | Kimi K2.5 config validation fails with `Unrecognized key: "requiresOpenAiAnthropicToolPayload"` — blocks all Kimi usage | **[#41852](https://github.com/openclaw/openclaw/pull/41852)** (closed, fix merged) |
| 🔴 **Critical** | **[#39907](https://github.com/openclaw/openclaw/issues/39907)**, **[#40157](https://github.com/openclaw/openclaw/issues/40157)** | Kimi K2.5 returns plain text `exec(...)` instead of structured tool calls — tools never execute | Investigating |
| 🔴 **Critical** | **[#42883](https://github.com/openclaw/openclaw/issues/42883)**, **[#42579](https://github.com/openclaw/openclaw/issues/42579)**, **[#42632](https://github.com/openclaw/openclaw/issues/42632)** | Cron jobs broken in 2026.3.8 — isolated `agentTurn` jobs deadlock/timeout | Investigating |
| 🟠 **High** | **[#32828](https://github.com/openclaw/openclaw/issues/32828)** | False "API rate limit reached" on all models | Needs investigation |
| 🟠 **High** | **[#42270](https://github.com/openclaw/openclaw/issues/42270)** | Empty agent payloads + WebSocket 1006 closures with LM Studio backend (2026.3.8 regression) | Needs investigation |
| 🟠 **High** | **[#35220](https://github.com/openclaw/openclaw/issues/35220)** | OpenAI Codex Responses API `server_error` doesn't trigger fallback model | Variant of #24378 |
| 🟠 **High** | **[#37623](https://github.com/openclaw/openclaw/issues/37623)** | GPT-5.4 configurable but fails at runtime with "Unknown model" | Needs provider wiring |
| 🟡 **Medium** | **[#18282](https://github.com/openclaw/openclaw/issues/18282)** | GPT-5.2 reasoning items cause recurring 400 errors on WhatsApp/Telegram | Session history handling |
| 🟡 **Medium** | **[#13938](https://github.com/openclaw/openclaw/issues/13938)** | Session context accumulates infinitely until API limits exceeded | No auto-trimming |

### Stability Assessment:
- **Kimi K2.5 integration is currently broken** for many users — this is a high-priority fix.
- **Cron job regressions in 2026.3.8** affect automated workflows significantly.
- Multiple **WebSocket/connection issues** (#42270, #17745, #25173) suggest instability in real-time channels.

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests:

| Issue | 👍 | Request | Roadmap Signal |
|---|---|---|---|
| **[#26534](https://github.com/openclaw/openclaw/issues/26534)** | 11 | DingTalk in first-install wizard | China market expansion |
| **[#28930](https://github.com/openclaw/openclaw/issues/28930)** | 0 | Memory v2: Associative traversal, salience weighting, access-based forgetting | Memory system overhaul |
| **[#9443](https://github.com/openclaw/openclaw/issues/9443)** | 1 | Prebuilt Android APK releases | Mobile deployment simplification |
| **[#25145](https://github.com/openclaw/openclaw/issues/25145)** | 1 | Outbound message approval gate (pre-send hook) | Safety/control features |
| **[#22278](https://github.com/openclaw/openclaw/issues/22278)** | 0 | Publish `openclaw.json` JSON Schema for IDE validation | Developer experience |
| **[#39979](https://github.com/openclaw/openclaw/issues/39979)** | 0 | Path-scoped RWX permissions for exec/file tools | Security model enhancement |
| **[#28744](https://github.com/openclaw/openclaw/issues/28744)** | 0 | Vision/image support for Feishu channel | Multimodal expansion |

### Prediction for Next Version:
Based on active PRs and community demand:
1. **Memory v2 improvements** — `memory_refresh` tool ([PR #43498](https://github.com/openclaw/openclaw/pull/43498)) and WAL journal mode fix ([PR #36327](https://github.com/openclaw/openclaw/pull/36327)) suggest memory reliability focus.
2. **ACP/Subagent reliability** — Multiple PRs addressing stuck sessions and recovery.
3. **Provider expansion** — AIPing ([PR #35558](https://github.com/openclaw/openclaw/pull/35558)), Mistral web search ([PR #41834](https://github.com/openclaw/openclaw/pull/41834)).
4. **HarmonyOS support** — New client app ([PR #43016](https://github.com/openclaw/openclaw/pull/43016)).

---

## 7. User Feedback Summary

### Pain Points:
1. **Misleading Error Messages** — Users report confusion when OpenClaw shows "rate limit" or "billing error" while APIs work fine externally. Better error diagnostics are needed.
2. **Model Integration Fragility** — Kimi K2.5 and GPT-5.4 configurations break silently or with cryptic Zod validation errors.
3. **Cron/Session Reliability** — Automated workflows failing silently (deadlocks, timeouts) without clear logs or recovery.
4. **Mobile Deployment Friction** — Building Android app from source is a barrier; prebuilt binaries requested.
5. **Context Overflow** — Sessions grow unbounded until hitting model limits with no auto-trimming or compaction visible to users.

### Positive Signals:
- Active community engagement with detailed bug reports.
- Multiple users running OpenClaw on diverse platforms (Raspberry Pi, macOS, CentOS).
- Innovative use cases emerging (e.g., "虾缘" AI dating platform [#42938](https://github.com/openclaw/openclaw/issues/42938)).

---

## 8. Backlog Watch

### Long-Unanswered/Stale Issues Needing Attention:

| Issue | Created | Status | Why Important |
|---|---|---|---|
| **[#3092](https://github.com/openclaw/openclaw/issues/3092)** | 2026-01-28 | Stale | Session lock timeout blocks channel handlers during long operations — critical for reliability |
| **[#10386](https://github.com/openclaw/openclaw/issues/10386)** | 2026-02-06 | Stale | Workspace/extraDirs skills not discovered — blocks custom skill usage |
| **[#8367](https://github.com/openclaw/openclaw/issues/8367)** | 2026-02-03 | Stale | GitHub Copilot Claude models fail with "model_not_supported" |
| **[#13938](https://github.com/openclaw/openclaw/issues/13938)** | 2026-02-11 | Stale | Infinite context accumulation — no session trimming mechanism |
| **[#8366](https://github.com/openclaw/openclaw/issues/8366)** | 2026-02-03 | Stale | GPT-5+ via GitHub Copilot fails with 421 routing error |

### Stale PRs Worth Reviewing:
| PR | Created | Why Important |
|---|---|---|
| **[#26133](https://github.com/openclaw/openclaw/pull/26133)** | 2026-02-25 | Strip Cortex semantic tags from user-facing text — UX improvement |
| **[#28517](https://github.com/openclaw/openclaw/pull/28517)** | 2026-02-27 | Guard against undefined `toolMetas` in subagent announce — prevents crashes |
| **[#26178](https://github.com/openclaw/openclaw/pull/26178)** | 2026-02-25 | Fix memory flush threshold calculation — memory reliability |

---

## Summary

OpenClaw is in a **high-velocity development phase** with substantial work on agent reliability, memory systems, and platform expansion. However, the **2026.3.7/2026.3.8 releases have introduced regressions** affecting Kimi model integration, cron jobs, and local LLM backends. The maintainers should prioritize:

1. **Kimi K2.5 tool calling fix** — affects a significant user segment.
2. **Cron job deadlock resolution** — blocks automation use cases.
3. **Error message accuracy** — reduce user confusion with better diagnostics.

The community remains highly engaged, with strong signals for **China market expansion (DingTalk, Feishu, Kimi)** and **mobile deployment simplification**.

---

## Cross-Ecosystem Comparison

# AI Agent & Personal Assistant Ecosystem Report
**Date:** 2026-03-12

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is currently experiencing a phase of **hyper-competitive, high-velocity iteration**. Projects are rapidly differentiating into three tiers: a dominant **core reference implementation** (OpenClaw), multiple **fast-follower innovators** (NanoBot, PicoClaw, TinyClaw) pushing architectural boundaries, and several **niche specialists** focusing on specific deployment targets (enterprise, mobile, security). A unifying trend across all projects is the aggressive expansion of **communication channel support** (DingTalk, Feishu, Matrix, Discord) and the integration of **Model Context Protocol (MCP)** as a standard for tool execution. The ecosystem is simultaneously grappling with growing pains related to **stability regressions** and **configuration complexity** as projects scale.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health & Momentum Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | None | **Dominant** (Massive scale, stress-testing phase) |
| **PicoClaw** | 22 | 102 | **v0.2.2** | **High** (Rapid maturation, active architectural debate) |
| **CoPaw** | 50 | 50 | None | **Under Strain** (High velocity, but critical stability issues) |
| **NanoBot** | 53 | 82 | None | **Agile** (High fix velocity, strong community engagement) |
| **ZeroClaw** | 35 | 35 | v0.1.7-beta | **Unstable** (Infrastructure migration friction) |
| **ZeptoClaw** | 12 | 13 | **v0.7.5 / v0.7.6** | **Focused** (Intense security hardening sprint) |
| **NanoClaw** | 39 | 39 | None | **Strategic** (High planning activity, optimization focus) |
| **IronClaw** | 45 | 50 | **v0.18.0** | **Transitional** (Feature rich but regression heavy) |
| **Moltis** | 32 | 24 | None | **Stabilizing** (Active bug fixing) |
| **LobsterAI** | 11 | 11 | **v0.2.3** | **Active** (Integration expansion) |
| **TinyClaw** | 12 | 7 | **v0.0.10** | **Maturing** (Major architectural refactor) |
| **EasyClaw** | 1 | 1 | **v1.6.6** | **Low** (Specialized, platform friction) |

## 3. OpenClaw's Position

**Core Reference Status:** OpenClaw operates at a scale (500+ daily updates) that dwarfs all peers, functioning as the **industry reference implementation** for AI agents.

*   **Advantages:**
    *   **Ecosystem Gravity:** It serves as the upstream dependency or integration target for peers (LobsterAI explicitly builds "via OpenClaw").
    *   **Breadth:** It leads in provider support (HarmonyOS, Mistral, AIPing) and complex agent features (subagent recovery).
    *   **Enterprise Reach:** Strongest signals for enterprise adoption in China (DingTalk/Feishu/Kimi).

*   **Technical Approach:**
    *   **Contrast:** While peers like TinyClaw and NanoClaw are moving toward **lightweight, modular architectures** (SQLite, npm workspaces), OpenClaw maintains a **monolithic, robust core** capable of handling massive concurrent load.
    *   **Risk:** The scale of in-flight changes (333 open PRs) creates regression risks (evident in Kimi K2.5 and Cron failures) that smaller, agile projects can avoid.

## 4. Shared Technical Focus Areas

Several technical requirements are emerging simultaneously across multiple projects, defining the current state of the art:

1.  **Channel Integration for the Chinese Market:**
    *   *Projects:* **OpenClaw, LobsterAI, NanoBot, CoPaw.**
    *   *Need:* Deep integration with **DingTalk, Feishu (Lark), and WeCom (Enterprise WeChat)**. This is no longer optional; it is a requirement for adoption in the Asian market.

2.  **Model Context Protocol (MCP) & Tool Execution:**
    *   *Projects:* **PicoClaw, IronClaw, OpenClaw, ZeptoClaw.**
    *   *Need:* Standardizing how agents use tools. Projects are fixing bugs related to MCP initialization (PicoClaw) and expanding MCP to sub-agents (ZeroClaw).

3.  **Local LLM & Cost Optimization:**
    *   *Projects:* **NanoBot, ZeptoClaw, Moltis, NanoClaw.**
    *   *Need:* Seamless support for **Ollama, vLLM, and MLX** (Apple Silicon). Users are demanding "keyless auth" (ZeptoClaw) and "inline compaction" (NanoClaw) to reduce API costs.

4.  **Multi-Platform Architecture:**
    *   *Projects:* **TinyClaw, ZeroClaw, IronClaw.**
    *   *Need:* Moving away from single-process monoliths toward **WASM (IronClaw)**, **Monorepos (TinyClaw)**, or **Containerized Daemons (ZeroClaw)** to support complex, distributed agent workflows.

## 5. Differentiation Analysis

*   **Architectural Philosophy:**
    *   **Modular/Lightweight:** **TinyClaw** (SQLite, removing Redis) and **NanoClaw** (Token optimization) prioritize lowering infrastructure barriers.
    *   **Enterprise/Secure:** **ZeptoClaw** differentiates entirely on **security hardening** (TOCTOU fixes, audit trails), targeting high-compliance environments.
    *   **WASM-First:** **IronClaw** is betting on WebAssembly for sandboxing and extensibility, distinct from the Python/Node.js dominance of others.

*   **Target User Base:**
    *   **OpenClaw/CoPaw:** Power users and enterprises needing comprehensive channel support.
    *   **ZeptoClaw/IronClaw:** Developers and enterprises prioritizing **safety, auditability, and sandboxing**.
    *   **EasyClaw/LobsterAI:** Desktop users seeking **GUI-first experiences** rather than CLI/Terminal workflows.

## 6. Community Momentum & Maturity

*   **Tier 1: Rapidly Iterating (High Risk/Reward):**
    *   **OpenClaw, PicoClaw, CoPaw, NanoBot.** These projects are merging features aggressively. CoPaw and OpenClaw are currently experiencing stability regressions due to this velocity, while PicoClaw is successfully managing architectural maturation.

*   **Tier 2: Stabilizing & Refining:**
    *   **Moltis, LobsterAI, ZeroClaw.** These teams are focused on fixing deployment frictions (Docker, GLIBC errors, macOS certs) and solidifying their user bases.

*   **Tier 3: Specialized Sprints:**
    *   **ZeptoClaw, TinyClaw, IronClaw.** Activity is focused on specific themes (Security, Rebranding/Refactoring, WASM updates) rather than broad feature sprawl.

## 7. Trend Signals

**1. "Silent Failure" is the New Critical Bug**
Across OpenClaw, NanoClaw, and IronClaw, the most alarming user reports involve agents that hang, deadlock, or return empty payloads without erroring. This indicates agents are becoming complex enough that standard error handling is insufficient; developers need better **observability and lifecycle management**.

**2. Memory Management is Fragmenting**
Projects are splitting on how to handle context limits. **OpenClaw** is building robust server-side memory systems (`memory_refresh`), while **NanoClaw** is pursuing aggressive "inline compaction" to save costs, and **PicoClaw** is debating "Engram" vector backends. There is no standard solution yet for infinite context.

**3. Setup Friction is the Primary Barrier to Entry**
Whether it's OpenClaw's complex auth, ZeroClaw's GLIBC errors, EasyClaw's macOS certs, or IronClaw's WASM checksum failures, **installation and first-run experience** is the single biggest blocker to adoption across the entire ecosystem.

**4. The Rise of "Uninstallers"**
The community creation of "ByeByeClaw" (an uninstall tool referenced in NanoClaw, IronClaw, and TinyClaw digests) signals that users are experimenting heavily but hitting configuration walls. This highlights a need for cleaner teardown and reset capabilities in the official CLIs.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-03-12

## 1. Today's Overview
NanoBot demonstrates **high velocity** development with 82 pull requests updated and 53 issues processed in the last 24 hours. The project is in an active iteration phase, evidenced by a merge rate of ~61% (50 merged/closed PRs) and a balanced issue resolution ratio (25 closed vs. 28 open). Activity is heavily focused on **expanding model compatibility** (fixing vision/non-vision handling) and **stabilizing diverse communication channels** (Telegram, Matrix, Feishu). While no new official release was tagged today, the volume of bug fixes merged into `main` suggests a patch release (likely `0.1.4.post4` or `0.1.5`) is imminent.

## 2. Releases
No new official releases were published today.
*   **Current State:** The repository remains on the `main` branch, incorporating fixes from the post-`0.1.4` series.
*   **Observation:** The high number of merged PRs regarding stability and API handling indicates that the current `main` branch is significantly more stable than the latest tagged release (`0.1.4.post3`).

## 3. Project Progress
Significant advancements were merged today, focusing on architecture and compatibility:

*   **Multi-Instance & Configuration:** PR [#1581](https://github.com/HKUDS/nanobot/pull/1581) (Closed) introduced multi-instance support via the `--config` parameter, a critical feature for scalable deployments.
*   **Model Compatibility:** Merged PR [#1892](https://github.com/HKUDS/nanobot/pull/1892) fixed a major issue where session history containing images would crash non-vision models (e.g., DeepSeek, Qwen). Follow-up PR [#1901](https://github.com/HKUDS/nanobot/pull/1901) proposes moving this logic to the provider layer for better architecture.
*   **Channel Improvements:**
    *   **Matrix:** PR [#1891](https://github.com/HKUDS/nanobot/pull/1891) fixed a CLI bug where the Matrix channel was missing from the status display.
    *   **Telegram:** PR [#1900](https://github.com/HKUDS/nanobot/pull/1900) (Open) adds support for reading `reply_to_message` context, improving conversation continuity.
*   **Local/Offline Support:** PR [#1896](https://github.com/HKUDS/nanobot/pull/1896) added environment variables for configurable shell output truncation, aiding local usage.

## 4. Community Hot Topics
*   **Local LLM Support (#193, #855):** The most active discussion (13 comments) in [Issue #193](https://github.com/HKUDS/nanobot/issues/193) concerns native Ollama support. Users in [Issue #855](https://github.com/HKUDS/nanobot/issues/855) shared detailed experiences running NanoBot locally (e.g., LMStudio, GLM-4.7-Flash), highlighting performance struggles on consumer hardware (RTX 3050/8B models).
*   **Chinese Language & Model Ecosystem (#2, #1617):** There is strong demand for Chinese ecosystem integration. [Issue #2](https://github.com/HKUDS/nanobot/issues/2) (19 comments, +6 👍) requests native Zhipu AI (GLM) support, while [Issue #1617](https://github.com/HKUDS/nanobot/issues/1617) (8 comments) and [Issue #1819](https://github.com/HKUDS/nanobot/issues/1819) request Chinese documentation and WeChat integration, respectively.
*   **Platform Integration (#123):** A well-structured proposal for Discord integration in [Issue #123](https://github.com/HKUDS/nanobot/issues/123) (7 comments) indicates a desire to use NanoBot as a multi-platform community bot.

## 5. Bugs & Stability
*   **[Critical] Security Vulnerability:** [Issue #1873](https://github.com/HKUDS/nanobot/issues/1873) reports that NanoBot can currently access its own `config.json` via `exec()`, creating a risk of API key leakage. The user suggests running the agent loop as a separate user.
    *   *Status:* Open, needs architectural review.
*   **[High] Feishu WebSocket Crash:** [Issue #1557](https://github.com/HKUDS/nanobot/issues/1557) reports "Event loop is already running" errors breaking Feishu integration.
    *   *Status:* Closed (likely fixed in recent commits or config updates).
*   **[High] CLI/Windows Crash:** [Issue #1577](https://github.com/HKUDS/nanobot/issues/1577) identified an `AttributeError: module 'signal' has no attribute 'SIGHUP'` on the `main` branch (affects Windows/WSL).
    *   *Status:* Closed.
*   **[Medium] Non-Vision Model Crashes:** Switching from a vision model to a text-only model caused 400 errors.
    *   *Fix:* Merged in [PR #1892](https://github.com/HKUDS/nanobot/pull/1892).
*   **[Medium] Matrix & WhatsApp Failures:** [Issue #1300](https://github.com/HKUDS/nanobot/issues/1300) (Matrix connection failure) and [Issue #1879](https://github.com/HKUDS/nanobot/issues/1879) (WhatsApp QR code generation failure) remain active pain points.

## 6. Feature Requests & Roadmap Signals
*   **Model Provider Expansion:** Strong signals for **Zhipu AI (GLM)** (#2), **Groq** (#25), and **Ollama** (#193) native support.
*   **Voice Capabilities:** [Issue #1106](https://github.com/HKUDS/nanobot/issues/1106) asks for voice-to-voice interaction, aligning with PR [#1680](https://github.com/HKUDS/nanobot/pull/1680) which aims to introduce Mistral/OpenAI transcription services.
*   **Web UI:** PR [#1707](https://github.com/HKUDS/nanobot/pull/1707) proposes a lightweight, zero-npm Web UI channel, suggesting the team might move beyond CLI/messaging-app-only interfaces soon.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by frequent breaking changes between minor versions (e.g., OpenRouter config changes in #842) and the lack of stability when running local models. The lack of Chinese documentation is a significant barrier for a large portion of the user base.
*   **Use Cases:** Users are deploying NanoBot as a personal assistant integrated with Telegram and Feishu, and as a local coding assistant.
*   **Sentiment:** generally positive regarding the project's potential ("Good project" - #1819), but frustration exists regarding stability ("determine if this version can work normally?" - #1833) and specific regional feature gaps (WeChat/Chinese models).

## 8. Backlog Watch
*   **Security Architecture:** [Issue #1873](https://github.com/HKUDS/nanobot/issues/1873) (API key leakage) requires immediate maintainer attention before the next major release.
*   **Ollama Support:** [Issue #193](https://github.com/HKUDS/nanobot/issues/193) has been open since Feb 6 with high engagement; a definitive roadmap decision is needed.
*   **Connection Pooling:** [Issue #1099](https://github.com/HKUDS/nanobot/issues/1099) highlights a potential resource leak in the Telegram cron service that needs addressing for long-running deployments.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-03-12

## 1. Today's Overview
ZeroClaw exhibits **high velocity** development activity today, with 99 total updates across issues and pull requests, signaling an aggressive iteration cycle following the recent branch strategy migration. The project is currently in a stabilization phase after releasing two beta patches (v0.1.7-beta.28 and v0.1.7-beta.30) focused on CI/CD refactoring. The community is actively addressing the fallout from recent structural changes, including build system bugs (GLIBC, Rust version) and confusion regarding the default branch. A significant portion of today's 35 open PRs is dedicated to expanding provider support (Azure OpenAI) and fixing configuration security flaws.

## 2. Releases
### **v0.1.7-beta.30** & **v0.1.7-beta.28**
These two releases are functionally paired, focusing on infrastructure over feature additions:
- **CI/CD Overhaul:** Replaced legacy workflows with a simplified pipeline ([PR #2895](https://github.com/zeroclaw-labs/zeroclaw/pull/2895)).
- **Branch Migration:** Migrated to a single `master` branch model ([PR #2928](https://github.com/zeroclaw-labs/zeroclaw/pull/2928)). *Note: This has caused widespread confusion and tooling errors due to lingering references to `main`.*

---

## 3. Project Progress
**Closed/Merged Work (15 PRs/Issues):**
- **Configuration & Security:** Fixed critical bugs where channel secrets and pairing tokens were handled incorrectly.
- **Bug Fixes:** Resolved the `default_temperature` bug in the CLI ([PR #3106](https://github.com/zeroclaw-labs/zeroclaw/pull/3106)) and issues with embedding provider API key selection.
- **Provider Support:** Merged fixes for configuration aliases (openai-*) to align docs with code.

**Active Development (35 Open PRs):**
- **Azure OpenAI Support:** Major push with two competing/complementary PRs ([#3007](https://github.com/zeroclaw-labs/zeroclaw/pull/3007), [#3246](https://github.com/zeroclaw-labs/zeroclaw/pull/3246)) adding provider support.
- **Security Patches:** PRs open to encrypt channel secrets on save ([#3255](https://github.com/zeroclaw-labs/zeroclaw/pull/3255)) and decrypt them on load ([#3256](https://github.com/zeroclaw-labs/zeroclaw/pull/3256)).
- **Platform Support:** Proposal to add 32-bit system support via feature gates ([PR #3245](https://github.com/zeroclaw-labs/zeroclaw/pull/3245)).

---

## 4. Community Hot Topics
1.  **[Bug] `GLIBC_2.39` not found** ([Issue #3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070))
    *   **Activity:** 9 comments, 2 reactions.
    *   **Analysis:** Users on standard Linux distros (requiring older GLIBC) cannot run the pre-compiled binaries. This suggests the new CI pipeline is compiling on a bleeding-edge Ubuntu environment.
2.  **[Feature] Azure OpenAI Support** ([Issue #3176](https://github.com/zeroclaw-labs/zeroclaw/issues/3176))
    *   **Activity:** 3 comments, high engagement from enterprise users.
    *   **Analysis:** Strong demand for enterprise-ready LLM backends. This aligns with the open PRs attempting to implement this feature.
3.  **[Bug] Branch Confusion (`master` vs `main`)** ([Issue #2929](https://github.com/zeroclaw-labs/zeroclaw/issues/2929))
    *   **Activity:** 6 comments.
    *   **Analysis:** The migration to `master` left behind documentation and workflow references to `main`, blocking contributors.
4.  **[Feature] MCP for Agents** ([Issue #3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153))
    *   **Activity:** 3 comments.
    *   **Analysis:** Users want Model Context Protocol tools available to sub-agents/delegates, not just the primary channel.

---

## 5. Bugs & Stability
*Ranked by Severity:*
1.  **S0/S1 - Runtime Failure:** **GLIBC_2.39 not found** ([Issue #3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070)). Binaries are incompatible with common Linux environments. *Mitigation:* [PR #3257](https://github.com/zeroclaw-labs/zeroclaw/pull/3257) proposes lowering the build runner baseline.
2.  **S1 - Build Failure:** **Docker build broken with Rust 1.94** ([Issue #3207](https://github.com/zeroclaw-labs/zeroclaw/issues/3207)). Containers fail to build.
3.  **S2 - Security:** **Secrets persisted in plaintext** ([PR #3255](https://github.com/zeroclaw-labs/zeroclaw/pull/3255)). API keys for channels (Slack, Feishu, etc.) are saved unencrypted.
4.  **S2 - Security:** **Embedding Provider uses wrong Key** ([Issue #3083](https://github.com/zeroclaw-labs/zeroclaw/issues/3083)). Sends Gemini keys to OpenAI endpoints.
5.  **S2 - Regression:** **Browser Pairing Broken** ([Issue #2960](https://github.com/zeroclaw-labs/zeroclaw/issues/2960)). Users must re-pair the dashboard every session.
6.  **S2 - Kubernetes:** **SIGTERM ignored** ([Issue #2529](https://github.com/zeroclaw-labs/zeroclaw/issues/2529)). Daemon refuses to shut down gracefully in k8s pods.

---

## 6. Feature Requests & Roadmap Signals
- **Azure OpenAI Support:** High probability of landing in the next release given multiple open PRs and active discussion ([PR #3246](https://github.com/zeroclaw-labs/zeroclaw/pull/3246)).
- **MCP Expansion:** Request to support MCP in `zeroclaw agent` and delegates ([Issue #3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153)).
- **Reasoning Control:** Users want the ability to toggle "reasoning/thinking" output for Ollama models ([Issue #850](https://github.com/zeroclaw-labs/zeroclaw/issues/850)).
- **Dynamic Tool Loading:** Proposal to load MCP tools on-demand rather than eagerly at startup to save context space ([Issue #3095](https://github.com/zeroclaw-labs/zeroclaw/issues/3095)).

---

## 7. User Feedback Summary
**Pain Points:**
- **Deployment Friction:** The combination of GLIBC errors, Docker build failures, and branch confusion is causing significant friction for new users and contributors trying to set up the environment.
- **Configuration Reliability:** Users report that `config.toml` values (like `default_temperature` and `provider_api` aliases) are ignored or incorrectly parsed, undermining trust in the configuration layer.
- **Enterprise Needs:** There is clear demand for Azure and enterprise-grade stability (Kubernetes signal handling).

**Positive Signals:**
- The community is actively stepping up to fix the branch migration issues.
- The "uninstall tool" ([Issue #3169](https://github.com/zeroclaw-labs/zeroclaw/issues/3169)) created by a user indicates a healthy ecosystem of utility creation around the core project.

---

## 8. Backlog Watch
- **[Issue #2529](https://github.com/zeroclaw-labs/zeroclaw/issues/2529) (SIGTERM):** A critical fix for Kubernetes deployments that has been open for 10 days without a linked PR. This blocks production adoption.
- **[Issue #3082](https://github.com/zeroclaw-labs/zeroclaw/issues/3082) (Workspace Paths):** Confusion regarding `workspace_only` and `allowed_roots` logic creates a poor developer experience for file-based agents.
- **[PR #3007](https://github.com/zeroclaw-labs/zeroclaw/pull/3007) (Azure OpenAI):** Open for 4 days. Needs maintainer review to merge or consolidate with newer PR #3246.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest (2026-03-12)

## 1. Today's Overview
PicoClaw demonstrates **extremely high development velocity** today, marked by the release of **v0.2.2** and significant architectural discussions regarding "Agent Refactoring." With **102 pull requests** updated (40 merged) and **22 issues** processed, the project is in a phase of rapid iteration and community expansion. Key focus areas include enhancing the UI experience, fixing bugs in tool execution (MCP), and expanding provider/channel support (Zalo, WeCom, LongCat). The activity level suggests a healthy, maturing open-source ecosystem preparing for broader adoption.

## 2. Releases

### **v0.2.2** (Stable)
*   **Highlights**: This release focuses on usability and execution flexibility.
    *   **Remote Execution**: Added `exec allow_remote` config support in web settings, enabling more flexible command execution policies ([#1363](https://github.com/sipeed/picoclaw/pull/1363)).
    *   **Voice Features**: Merged support for Echo voice audio transcription, enhancing accessibility and multi-modal capabilities ([#1214](https://github.com/sipeed/picoclaw/pull/1214)).

### **v0.2.2-nightly.20260312** (Nightly)
*   **Highlights**: Early access features for power users.
    *   **New Provider**: Support added for **LongCat** model provider ([#1317](https://github.com/sipeed/picoclaw/pull/1317)).
    *   **Matrix Channel**: Enabled rich-text messages for better formatting in Matrix ([#1370](https://github.com/sipeed/picoclaw/pull/1370)).
    *   **Bug Fix**: Critical initialization fix for MCP (Model Context Protocol) in direct agent mode ([9b0a48a](https://github.com/sipeed/picoclaw/commit/9b0a48ac6d0df8ad1862c6f88648cc4dbde4bd50)).

## 3. Project Progress

Development activity today centered on **stabilization, UI refinement, and channel expansion**.

*   **Documentation & Cleanup**: Removed stale `TOOLS.md` references across all README translations and migration code to align with the new JSON Schema tool definition standard ([#1388](https://github.com/sipeed/picoclaw/pull/1388), [#1355](https://github.com/sipeed/picoclaw/pull/1355)).
*   **UI/UX Improvements**:
    *   Fixed a regression where the Web UI would default to a new chat instead of the last active session ([#1385](https://github.com/sipeed/picoclaw/pull/1385)).
    *   Fixed horizontal scrolling in the Raw JSON editor ([#1386](https://github.com/sipeed/picoclaw/pull/1386)).
    *   Fixed height collapse in Firefox configuration panels ([#1364](https://github.com/sipeed/picoclaw/issues/1364)).
*   **New Channels**: A PR to add **Zalo** channel support is under active review ([#1351](https://github.com/sipeed/picoclaw/pull/1351)). WeCom long-connection mode is also being implemented ([#1295](https://github.com/sipeed/picoclaw/pull/1295)).
*   **Agent Architecture**: Continued work on the "Agent Team" feature to support multi-agent concurrency ([#976](https://github.com/sipeed/picoclaw/pull/976)).

## 4. Community Hot Topics

The community is actively debating the **core definition and lifecycle of an Agent**.

1.  **[Agent Refactor] What an Agent is** ([#1218](https://github.com/sipeed/picoclaw/issues/1218))
    *   **Discussion**: Proposed by @alexhoshina, this enhancement suggests splitting agent configuration into `SOUL.md` (personality/character) and `AGENT.md` (logic/instructions).
    *   **Need**: Users and developers seek a cleaner separation between the agent's "identity" and its "operational logic," allowing for easier personality swapping without breaking core functionality.

2.  **[Agent Refactor] Event-driven agent loop** ([#1316](https://github.com/sipeed/picoclaw/issues/1316))
    *   **Discussion**: Proposes re-architecting the agent loop (`pkg/agent/loop.go`) to be event-driven with hooks and interrupts.
    *   **Need**: Power users want the ability to "steer" the agent during execution and allow external tools (UI, logs) to hook into the lifecycle for better observability.

3.  **Design: Create a cute Mantis Shrimp logo** ([#297](https://github.com/sipeed/picoclaw/issues/297))
    *   **Discussion**: A highly active (now closed) thread regarding the project's visual identity.
    *   **Need**: Community desire for a distinct brand identity ("small, fast, powerful") to distinguish PicoClaw from generic AI wrappers.

## 5. Bugs & Stability

Several critical bugs were identified and patches are already in review/progress.

| Severity | Bug | Status | Details |
| :--- | :--- | :--- | :--- |
| **High** | **MCP not working in agent mode** ([#1299](https://github.com/sipeed/picoclaw/issues/1299)) | **Fixed** (Nightly) | Direct agent mode ignored MCP tools completely. Fixed in commit `9b0a48a`. |
| **High** | **Tool calling JSON parsing failure** ([#1287](https://github.com/sipeed/picoclaw/issues/1287)) | Closed | Generic tool calling failures related to JSON unmarshaling. |
| **Medium** | **Telegram typing indicator hang** ([#1390](https://github.com/sipeed/picoclaw/pull/1390)) | **Fix PR Open** | Typing indicator kept running if LLM failed/hung. |
| **Medium** | **Docker Launcher manifest missing** ([#1350](https://github.com/sipeed/picoclaw/issues/1350)) | Open | Users unable to deploy via `docker compose` for the Launcher profile. |
| **Medium** | **Windows source build failure** ([#1348](https://github.com/sipeed/picoclaw/issues/1348)) | Open | `go mod tidy` package errors on Windows 10 source builds. |
| **Low** | **Config race condition in TUI** ([#1151](https://github.com/sipeed/picoclaw/issues/1151)) | Open | Read-modify-write race in PHI tab. |

## 6. Feature Requests & Roadmap Signals

Signals indicate a strong push toward **platform integrations** and **developer ergonomics**.

*   **Telegram Realtime Streaming** ([#1098](https://github.com/sipeed/picoclaw/issues/1098)): Request to support Telegram's new real-time streaming API for AI chatbots. High likelihood of implementation given the platform's focus on channel support.
*   **Engram as Memory Backend** ([#175](https://github.com/sipeed/picoclaw/issues/175)): Proposal to move beyond `MEMORY.md` to a vector-searchable backend (Engram) for long-term memory. Aligns with the "Agent Refactor" discussions.
*   **GitHub Copilot Device Auth** ([#1347](https://github.com/sipeed/picoclaw/issues/1347)): Request for native Device Code Flow to authenticate GitHub Copilot within PicoClaw.
*   **Context-Window Bounding** ([#440](https://github.com/sipeed/picoclaw/issues/440)): Request to replace hard iteration limits (max 20) with context-window limits to prevent premature termination of complex tasks.

## 7. User Feedback Summary

*   **Pain Points**:
    *   **Stability**: Several users reported `tool_use_failed` or JSON parsing errors, indicating fragility in tool-calling implementations across different providers ([#748](https://github.com/sipeed/picoclaw/issues/748), [#1287](https://github.com/sipeed/picoclaw/issues/1287)).
    *   **Web UI**: The default behavior of "New Chat" vs "History" was a significant annoyance, fixed quickly by maintainers ([#1373](https://github.com/sipeed/picoclaw/issues/1373)).
    *   **Deployment**: Windows source builds and Docker compose deployments are currently friction points for new contributors ([#1348](https://github.com/sipeed/picoclaw/issues/1348), [#1350](https://github.com/sipeed/picoclaw/issues/1350)).
*   **Satisfaction**: The rapid merge of PRs fixing UI niggles (scrolling, height, session persistence) suggests a responsive development team. The community is engaged in high-level architectural discussions, indicating a mature user base.

## 8. Backlog Watch

*   **[Feature] Agent Teams** ([#976](https://github.com/sipeed/picoclaw/pull/976)): A large PR implementing multi-agent teams. It has been open for ~10 days. Given the complexity, it needs thorough review to ensure it aligns with the "Agent Refactor" plans ([#1218](https://github.com/sipeed/picoclaw/issues/1218)).
*   **[Bug] TUI Config Race Condition** ([#1151](https://github.com/sipeed/picoclaw/issues/1151)): Flagged 7 days ago with high priority but no PR is linked yet. This affects the terminal UI stability significantly.
*   **[Provider] Groq API Compatibility** ([#748](https://github.com/sipeed/picoclaw/issues/748)): Open for 2 weeks. Groq is a popular provider for fast inference; broken tool support is a blocker for that user segment.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-03-12

## 1. Today's Overview
NanoClaw demonstrates **high velocity development** with 39 active Pull Requests and a strong focus on architectural optimization. The community is heavily prioritizing **cost efficiency**, evidenced by a sophisticated cluster of "Token Optimization" proposals gaining immediate traction. While feature expansion continues (new memory systems, multi-platform support), the project faces a simultaneous wave of **usability and stability reports**, particularly regarding the `/setup` experience and container environment handling. The ratio of open to merged PRs (31:8) suggests a backlog of community contributions awaiting core team review.

## 2. Releases
**None.** No new official releases were tagged in the last 24 hours. The high volume of PRs and optimization tracking issues suggests a significant accumulation of changes likely destined for an upcoming minor or major version bump.

## 3. Project Progress
Merged and closed activity focused on architectural planning and maintenance tools:
*   **Token Optimization Strategy:** A major tracking issue (#983) and three sub-mechanisms (#980, #981, #982) were rapidly closed/created, establishing a roadmap for "Inline Compaction" to reduce API costs without extra LLM calls.
*   **Uninstall Tool:** Issue #955 acknowledged the community tool **ByeByeClaw** for clean removal of NanoClaw and related dependencies.
*   **Security Hardening:** Issue #709 was closed, addressing divergence in environment variable management between containers and subprocesses.
*   **Advancing PRs (Open but active):**
    *   **Semantic Memory (#979, #977):** Integration of LanceDB for persistent vector memory is seeing active revisions.
    *   **Multi-Instance Support (#970):** Feature to run multiple NanoClaw agents on a single host is under review.
    *   **OAuth Refresh (#930, #969):** Critical fixes for token expiration are being refined with improved locking mechanisms.

## 4. Community Hot Topics
*   **Token Cost Reduction (High Engagement):** The most sophisticated discussion revolves around [Issue #983](https://github.com/qwibitai/nanoclaw/issues/983) (Token Optimization). Users and contributors are designing a system to automatically compress context and limit output verbosity "inline" to avoid expensive separate API calls.
    *   *Underlying Need:* As agents run longer sessions, the API costs are becoming prohibitive. Users need "set and forget" cost controls.
*   **Security vs. Usability in Containers:** [Issue #865](https://github.com/qwibitai/nanoclaw/issues/865) argues that the current container architecture is not sufficiently secure ("trusting containers in several places").
    *   *Underlying Need:* Power users want to run NanoClaw in more hostile environments or handle sensitive data without fearing container escape or script injection.
*   **Setup Friction:** Multiple reports ([Issue #958](https://github.com/qwibitai/nanoclaw/issues/958), [Issue #973](https://github.com/qwibitai/nanoclaw/issues/973)) cite the `/setup` process as slow or broken.
    *   *Underlying Need:* New users are hitting a wall during initialization, threatening adoption.

## 5. Bugs & Stability
*   **[HIGH] Silent Failure / No Response:** [Issue #958](https://github.com/qwibitai/nanoclaw/issues/958) reports agents running but failing to reply. *Fix Status:* No PR yet, potentially related to session handling or networking.
*   **[HIGH] Environment Variable Regression:** [Issue #960](https://github.com/qwibitai/nanoclaw/issues/960) notes MCP environment variables are not passed to containers after a recent credential proxy update. *Fix Status:* Investigating.
*   **[HIGH] Message Flooding (WhatsApp):** [Issue #732](https://github.com/qwibitai/nanoclaw/issues/732) describes streaming chunks sending as separate messages. *Fix Status:* [PR #965](https://github.com/qwibitai/nanoclaw/pull/965) is open to buffer output until completion.
*   **[MEDIUM] Authentication Token Support:** [Issue #853](https://github.com/qwibitai/nanoclaw/issues/853) highlights missing support for `ANTHROPIC_AUTH_TOKEN`. *Fix Status:* Likely covered in OAuth refresh PRs (#930, #969).
*   **[MEDIUM] Setup Latency:** [Issue #973](https://github.com/qwibitai/nanoclaw/issues/973) cites setup taking "ages."

## 6. Feature Requests & Roadmap Signals
The roadmap is clearly shifting toward **optimization and integration**.
*   **Inline Compaction:** [Issue #984](https://github.com/qwibitai/nanoclaw/issues/984) and [Issue #986](https://github.com/qwibitai/nanoclaw/issues/986) propose automatic compression of conversation history and system prompts. **Prediction:** High likelihood of inclusion in next release given the dedicated tracking issues.
*   **Multi-Modal Discord:** [PR #974](https://github.com/qwibitai/nanoclaw/pull/974) adds image vision and voice transcription. **Prediction:** Likely merge, fills a gap in Discord capabilities.
*   **Alternative Runtimes:** [PR #963](https://github.com/qwibitai/nanoclaw/pull/963) proposes `OpenAI Codex SDK` as an alternative engine. **Prediction:** May remain experimental/opt-in for now, but signals a move toward model-agnosticism.
*   **Podman Support:** [Issue #957](https://github.com/qwibitai/nanoclaw/issues/957) requests Podman as a Docker alternative.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **"It doesn't reply":** The most critical user complaint ([#958](https://github.com/qwibitai/nanoclaw/issues/958)) is the agent going silent, creating anxiety about reliability.
    *   **Cost Anxiety:** Users are actively calculating token costs and identifying waste, driving the optimization push.
    *   **Setup Complexity:** The move from a simple JSON config to a complex setup flow is frustrating users ([#973](https://github.com/qwibitai/nanoclaw/issues/973)).
*   **Satisfaction:** Community engagement is high and technical. Users like [@calebfaruki](https://github.com/calebfaruki) and [@gm4leejun-stack](https://github.com/gm4leejun-stack) are providing deep architectural feedback and writing design docs, indicating a sophisticated, invested user base.

## 8. Backlog Watch
*   **[NEEDS ATTENTION] PR #930 & #969 (OAuth Token Refresh):** These fixes are critical for long-running stability. The existence of two competing PRs suggests a need for the maintainer to adjudicate the best locking/caching approach.
*   **[NEEDS ATTENTION] Issue #865 (Container Security):** This is a fundamental challenge to the architecture. It requires a clear stance from maintainers on the threat model.
*   **[STALLED] PR #412 (Host Auth Passthrough):** Open since Feb 23, this feature needs a decision to prevent bit-rot.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest (2026-03-12)

## 1. Today's Overview
The IronClaw project exhibits **very high activity**, driven by the release of **v0.18.0** and an ongoing "bug bash" event. The community and maintainers are intensely focused on stability, with **45 issues** updated (highlighting significant bug reporting) and **50 PRs** updated (showing rapid iteration). While the release has introduced new features like staging promotion and updated WASM artifacts, it has also surfaced regressions regarding tool compatibility (WIT version mismatches) and installer reliability. The high ratio of open issues to closed ones today suggests the user base is actively stress-testing the new release.

## 2. Releases
### **v0.18.0** (Released 2026-03-11)
*   **Changes:** This release promotes staging updates to main, including PR #865 and updates to WASM artifacts (Arti).
*   **Migration Notes:** Users are reporting critical issues with `ironclaw onboard` in this version. Specifically, **fresh installs are pulling incompatible WASM artifacts** (Issue [#840]) and failing checksum verifications (Issue [#875]). It is recommended to verify SHA256 sums manually if onboarding fails.

## 3. Project Progress
*   **Security Hardening:** Several security-focused PRs were merged/closed, including **Content-Security-Policy headers** for the web gateway ([PR #514](https://github.com/nearai/ironclaw/pull/514)), **HMAC-SHA256 migration** for webhooks ([PR #513](https://github.com/nearai/ironclaw/pull/513)), and **sandbox policy fixes** ([PR #516](https://github.com/nearai/ironclaw/pull/516)).
*   **CLI Enhancements:** Merged work on **supply chain safety** via `cargo-deny` ([PR #834](https://github.com/nearai/ironclaw/pull/834)) and improvements to **MCP (Model Context Protocol)** session handling ([PR #793](https://github.com/nearai/ironclaw/pull/793)).
*   **Fixes:** Merged a fix to preserve user model selection during setup re-runs ([PR #987](https://github.com/nearai/ironclaw/pull/987)) and corrected CI manifest patching for tools/channels ([PR #945](https://github.com/nearai/ironclaw/pull/945)).
*   **Upcoming:** Open PRs indicate imminent support for **Discord Gateway via WASM** ([PR #944](https://github.com/nearai/ironclaw/pull/944)) and new CLI subcommands for `channels` and `skills`.

## 4. Community Hot Topics
1.  **Authentication Frustrations ([#142](https://github.com/nearai/ironclaw/issues/142)):** The most-discussed issue (9 comments) remains a complaint about the requirement for NEAR AI authentication, which one user described as "actively removed by EVERYONE."
2.  **Google Sheets Integration Failures:** Multiple issues ([#999](https://github.com/nearai/ironclaw/issues/999), [#1002](https://github.com/nearai/ironclaw/issues/1002), [#993](https://github.com/nearai/ironclaw/issues/993)) highlight broken workflows with Google Sheets, ranging from OAuth 403 errors to the LLM passing parameters incorrectly (JSON string vs array).
3.  **Telegram & Routine Bugs:** Users report that **routines created in web chat are invisible on Telegram** ([#995](https://github.com/nearai/ironclaw/issues/995)) and Telegram notifications fail due to invalid `chat_id` usage ([#994](https://github.com/nearai/ironclaw/issues/994)).
4.  **User-Suggested Tools:** A community member released **ByeByeClaw** ([#919](https://github.com/nearai/ironclaw/issues/919)), an unofficial uninstaller, indicating a need for cleaner setup/teardown tooling.

## 5. Bugs & Stability
*   **Critical / Onboarding:**
    *   **[#840](https://github.com/nearai/ironclaw/issues/840):** Fresh installs download WASM tools incompatible with Host WIT 0.3.0 (Shows `WIT version mismatch`).
    *   **[#875](https://github.com/nearai/ironclaw/issues/875):** `ironclaw onboard` fails due to checksum verification errors (Fix likely in [PR #1007](https://github.com/nearai/ironclaw/pull/1007)).
*   **High Severity / Integration:**
    *   **[#738](https://github.com/nearai/ironclaw/issues/738):** Managed Tunnel binds to port 3000 instead of 8080, breaking all webhooks (Root cause identified in `src/main.rs`).
    *   **[#890](https://github.com/nearai/ironclaw/issues/890):** Stdio MCP transport violates spec by skipping handshake, causing Python MCP servers to reject connections.
    *   **[#733](https://github.com/nearai/ironclaw/issues/733):** Ngrok process becomes a zombie (`<defunct>`) after tunnel URL is obtained.
*   **Medium Severity / UI & Logic:**
    *   **[#997](https://github.com/nearai/ironclaw/issues/997):** UI shows "Error: Waiting for approval" for normal pending states, alarming users.
    *   **[#1000](https://github.com/nearai/ironclaw/issues/1000):** Rate limiter returns "retry after None" instead of a valid duration.
    *   **[#942](https://github.com/nearai/ironclaw/issues/942):** Missing `User-Agent` header causes some LLM providers to reject requests (Closed, likely fixed).

## 6. Feature Requests & Roadmap Signals
*   **Channel Expansion:** Work continues on **Discord Gateway** integration via WASM ([PR #944](https://github.com/nearai/ironclaw/pull/944)), signaling a move toward more diverse, real-time messaging platforms.
*   **CLI Control:** New PRs propose CLI management for **Channels** ([PR #933](https://github.com/nearai/ironclaw/pull/933)), **Skills** ([PR #918](https://github.com/nearai/ironclaw/pull/918)), and **Routines** ([PR #844](https://github.com/nearai/ironclaw/pull/844)), suggesting the next version will be much more "headless/automation-friendly."
*   **Provider Support:** Added support for **Z.AI provider** (GLM-5) is in progress ([PR #938](https://github.com/nearai/ironclaw/pull/938)).
*   **MCP Configurability:** Users are asking for the ability to modify `mcpServers` JSON directly via the UI ([#299](https://github.com/nearai/ironclaw/issues/299)).

## 7. User Feedback Summary
Users are finding the agent powerful but currently brittle regarding external integrations.
*   **Pain Points:** The "Bug Bash" revealed significant friction in **OAuth flows** (Google/Twitter/Telegram), specifically broken URLs and misleading UI states. The transition to WIT 0.3.0 has broken the "out-of-the-box" experience for new users.
*   **Satisfaction:** Despite bugs, the rapid community generation of helper scripts (like ByeByeClaw) shows an engaged, technical user base.
*   **Dissatisfaction:** Strong negative feedback persists regarding the mandatory authentication layer (Issue #142), which users feel is unnecessary friction for self-hosted agents.

## 8. Backlog Watch
*   **[#142](https://github.com/nearai/ironclaw/issues/142):** The "Why is NEAR AI auth required?" issue remains a top community grievance and needs an official stance or resolution to reduce fork fragmentation.
*   **[#299](https://github.com/nearai/ironclaw/issues/299):** Users needing custom MCP servers are blocked by the lack of JSON editing capabilities in the UI.
*   **CI Bot Noise:** The Staging CI bot created ~15 issues in the last 24 hours (e.g., [#1005](https://github.com/nearai/ironclaw/issues/1005), [#990](https://github.com/nearai/ironclaw/issues/990)). While valuable, these are flooding the issue tracker and may be drowning out user voices. Maintainers should adjust bot verbosity or triage frequency.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest (2026-03-12)

## 1. Today's Overview
LobsterAI demonstrates high development velocity with **11 PRs updated** (7 merged) and a **new release (v0.2.3)** within the last 24 hours. The project is actively expanding its integration capabilities, specifically adding support for IM platforms (DingTalk, WeCom, QQ) via OpenClaw. However, the rapid iteration has introduced friction for users, evidenced by **11 active issues**, including complaints about lost settings during updates and performance regressions in Bash execution and image processing.

## 2. Releases
### **v0.2.3**
*   **Key Changes**:
    *   **Multi-file Selection**: Users can now select multiple file attachments in the main interface (PR [#371](https://github.com/netease-youdao/LobsterAI/pull/371)).
    *   **IM Integrations**: Fixed issues and merged support for QQ (PR [#348](https://github.com/netease-youdao/LobsterAI/pull/348)), and added paging support for chats (PR [#355](https://github.com/netease-youdao/LobsterAI/pull/355)).
*   **Migration Note**: Users have reported (Issue [#382](https://github.com/netease-youdao/LobsterAI/issues/382)) that updating to this version may reset configuration settings; manual re-configuration might be required.

## 3. Project Progress
Significant progress was made in **Integration & Stability**:
*   **IM Platform Support**: Three key PRs were merged to support DingTalk ([#378](https://github.com/netease-youdao/LobsterAI/pull/378)), WeCom (Enterprise WeChat) ([#383](https://github.com/netease-youdao/LobsterAI/pull/383)), and QQ ([#381](https://github.com/netease-youdao/LobsterAI/pull/381)) via OpenClaw.
*   **Environment Fixes**: Resolved a Mac-specific Node.js environment pollution issue ([#375](https://github.com/netease-youdao/LobsterAI/pull/375)).
*   **Pending Features**: Open PRs suggest upcoming support for **Hourly Scheduled Tasks** ([#376](https://github.com/netease-youdao/LobsterAI/pull/376)) and **Custom URI Protocols** (e.g., `obsidian://`) in markdown ([#380](https://github.com/netease-youdao/LobsterAI/pull/380)).

## 4. Community Hot Topics
*   **Configuration Persistence (Issue [#382](https://github.com/netease-youdao/LobsterAI/issues/382))**: Users are frustrated that frequent updates wipe settings. This indicates a need for robust configuration storage/migration logic.
*   **Bash Execution Latency (Issue [#350](https://github.com/netease-youdao/LobsterAI/issues/350))**: A highly commented thread regarding AI wait times for simple Bash commands. Users want asynchronous handling or better timeouts for commands with no output.
*   **Automated Formatting Bug (Issue [#344](https://github.com/netease-youdao/LobsterAI/issues/344))**: Users report that the AI stubbornly inserts spaces between Chinese characters and numbers, breaking code/variables. This is blocking adoption for some migrating from "openclaw".

## 5. Bugs & Stability
*   **Critical: Image Processing Freeze (Issue [#357](https://github.com/netease-youdao/LobsterAI/issues/357))**: The application freezes when attempting to read images.
*   **High: Bash Execution Timeout (Issue [#350](https://github.com/netease-youdao/LobsterAI/issues/350))**: Commands hang for minutes. *Note: A potential fix is proposed in PR [#374](https://github.com/netease-youdao/LobsterAI/pull/374) which adds async message handlers.*
*   **Medium: Claude Code Process Exit (Issue [#385](https://github.com/netease-youdao/LobsterAI/issues/385))**: Users connecting to iFlyTek CodePlanning encounter `exit code 1` errors with no content return.
*   **Medium: String Formatting (Issue [#344](https://github.com/netease-youdao/LobsterAI/issues/344))**: Undesired space insertion in specific string patterns.

## 6. Feature Requests & Roadmap Signals
Based on open issues and PRs, the community is pushing for:
1.  **Docker Support** (Issue [#386](https://github.com/netease-youdao/LobsterAI/issues/386)): Highly requested for easier deployment.
2.  **Environment Variable Configuration** (Issue [#377](https://github.com/netease-youdao/LobsterAI/issues/377)): Needed for skills/scripts that rely on API keys (e.g., `SERVICE_ID`).
3.  **File Location Shortcut** (Issue [#379](https://github.com/netease-youdao/LobsterAI/issues/379)): Request to add an icon to open the file's directory directly from the chat.
4.  **Agent Teams via SDK** (Issue [#384](https://github.com/netease-youdao/LobsterAI/issues/384)): Request to update the Claude Agent SDK to enable multi-agent collaboration features.

## 7. User Feedback Summary
*   **Pain Points**: Users migrating from "openclaw" find the **memory capabilities** (Issue [#186](https://github.com/netease-youdao/LobsterAI/issues/186)) and **output formatting** (Issue [#344](https://github.com/netease-youdao/LobsterAI/issues/344)) inferior to the original. Frequent updates causing **settings loss** are a major frustration.
*   **Positive Signals**: High engagement with integration features (DingTalk/WeCom/QQ) and strong interest in expanding utility (Docker, Env Vars).
*   **Use Cases**: Users are attempting to use LobsterAI for local script automation (Bash) and visual tasks (Image reading), but currently face stability hurdles.

## 8. Backlog Watch
*   **Issue #186 (Memory Issues)**: An older issue (created Feb 28) regarding poor memory/context retention compared to the original OpenClaw. It remains open and active, indicating a persistent architectural challenge that hasn't been addressed in recent updates.
*   **Issue #273 (Linux Support)**: Closed recently, but highlights a demand for cross-platform support beyond Mac/Windows.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest: 2026-03-12

## 1. Today's Overview
TinyClaw demonstrates **extremely high development velocity** and a significant architectural maturation today. The project successfully merged a major refactor (#186) transitioning the backend to an npm workspaces monorepo with SQLite, and also opened a substantial PR (#191) for a complete rebranding to "TinyAGI." With 12 active issues (75% closed) and 7 PRs (86% merged), the maintainers are aggressively iterating on stability and modularity. The launch of v0.0.10 consolidates these efforts, focusing on daemon stability and improved local development workflows.

## 2. Releases
### **v0.0.10**
This release focuses on operational stability and UI cleanup.
*   **Operational Changes:**
    *   **Simplified Heartbeat:** Improved `TINYCLAW_HOME` detection logic in `heartbeat-cron.sh` for better reliability across different environments.
    *   **Watchdog Update:** Increased the Telegram polling watchdog timeout from 2 minutes to 5 minutes, reducing false-positive timeout alerts.
*   **UI & Refactor:**
    *   **Cleaner Interface:** Removed the dedicated logs pane from the `tmux` session (`daemon.sh`) to reduce visual clutter.
    *   **Type Safety:** Localized `Task` and `TaskStatus` types.

## 3. Project Progress
A total of **6 PRs were merged**, representing a massive shift in project architecture and UX:
*   **Monolith to Monorepo ([PR #186](https://github.com/TinyAGI/tinyclaw/pull/186)):**
    *   **Major Refactor:** The codebase was split into 5 npm workspace packages: `@tinyclaw/core`, `@tinyclaw/teams`, `@tinyclaw/channels`, `@tinyclaw/server`, and `@tinyclaw/visualizer`.
    *   **Database Migration:** Replaced BullMQ/Redis with a lightweight SQLite queue (~160 lines using `better-sqlite3` with WAL mode). This significantly lowers the barrier to entry for local deployment.
*   **Real-Time & Team Orchestration ([PR #190](https://github.com/TinyAGI/tinyclaw/pull/190)):**
    *   Fixed team communication logic to ensure agents route through orchestration layers correctly.
    *   Implemented real-time streaming of team responses to users.
*   **UX Overhaul ([PR #185](https://github.com/TinyAGI/tinyclaw/pull/183), [PR #182](https://github.com/TinyAGI/tinyclaw/pull/182), [PR #185](https://github.com/TinyAGI/tinyclaw/pull/185)):**
    *   **Kanban Automation:** Tasks moved to "In Progress" now automatically trigger the assigned agent.
    *   **CLI Modernization:** Migrated 1500+ lines of Bash prompts to TypeScript using `@clack/prompts`.
    *   **Interface Polish:** Removed redundant `message_received` events for a cleaner UI.
*   **New Provider:** Added Avian AI as a provider option ([PR #143](https://github.com/TinyAGI/tinyclaw/pull/143)).

## 4. Community Hot Topics
*   **Mission Control & Traceability ([Issue #66](https://github.com/TinyAGI/tinyclaw/issues/66)):**
    *   **Context:** User requested a "Mission Control" UI similar to Claude-trace or Azure Phoenix to visualize agent communication graphs, tool usage, and self-improving memory scopes.
    *   **Analysis:** This highlights a growing need for **observability** in autonomous agents. As TinyClaw becomes more capable (teams, multi-provider), users struggle to debug *why* an agent took a specific action.
*   **Local Model Support ([Issue #111](https://github.com/TinyAGI/tinyclaw/issues/111)):**
    *   **Context:** High demand (👍 1) for Ollama and local LLM integration.
    *   **Analysis:** Users want privacy and cost-control. The recent shift to SQLite (PR #186) aligns well with this, moving away from heavy infrastructure dependencies like Redis.
*   **Third-Party Tooling ([Issue #189](https://github.com/TinyAGI/tinyclaw/issues/189)):**
    *   **Context:** A community member released **ByeByeClaw**, an unofficial uninstaller.
    *   **Analysis:** While helpful, the existence of a third-party cleanup tool suggests the official installation/uninstallation flow might leave residues or be complex for some users.

## 5. Bugs & Stability
*   **Agent Unresponsiveness ([Issue #91](https://github.com/TinyAGI/tinyclaw/issues/91)):**
    *   **Severity:** Medium. Agents on WhatsApp show a "typing" indicator but fail to reply until explicitly asked for status.
    *   **Status:** Closed (likely addressed by the real-time streaming fixes in [PR #190](https://github.com/TinyAGI/tinyclaw/pull/190)).
*   **Queue Processor Cleanup ([Issue #63](https://github.com/TinyAGI/tinyclaw/issues/63)):**
    *   **Severity:** Low. Potential for incomplete cleanup on shutdown if intervals aren't cleared.
    *   **Status:** Closed. Addressed during the SQLite refactoring in [PR #186](https://github.com/TinyAGI/tinyclaw/pull/186)).

## 6. Feature Requests & Roadmap Signals
*   **Web-First Onboarding:** [Issue #193](https://github.com/TinyAGI/tinyclaw/issues/193) requests a "first-run" web onboarding experience to replace CLI config editing. This aligns with the recent UX investments ([PR #185](https://github.com/TinyAGI/tinyclaw/pull/185)) and suggests the next major focus is **accessibility**.
*   **Runtime Control Panel:** [Issue #194](https://github.com/TinyAGI/tinyclaw/issues/194) proposes a web UI to manage daemon start/stop/restart, moving away from CLI dependency.
*   **Model Expansion:** Requests for GLM 4.7 ([Issue #103](https://github.com/TinyAGI/tinyclaw/issues/103)) and generic OpenAI-compatible endpoints ([Issue #41](https://github.com/TinyAGI/tinyclaw/issues/41)) indicate the user base is highly heterogeneous regarding model providers.
*   **Rebranding:** [PR #191](https://github.com/TinyAGI/tinyclaw/pull/191) (Open) suggests the project is transitioning identity to **TinyAGI** to reflect a broader scope than just "Claw."

## 7. User Feedback Summary
Users are enthusiastic about the project's capabilities but identify **configuration complexity** and **observability** as the primary friction points.
*   **Pain Points:** Setting up providers is currently too CLI-heavy; users want to manage everything (including setup) via the TinyOffice web portal.
*   **Positive Signals:** The quick adoption of feature requests (like Avian AI support) and the active closing of issues related to core stability (WhatsApp messaging) are well-received.

## 8. Backlog Watch
*   **Branding Transition:** [PR #191](https://github.com/TinyAGI/tinyclaw/pull/191) (Rebrand to TinyAGI) is currently Open. This is a critical blocker for future releases as it affects package names, env variables, and documentation.
*   **UI Persistency:** [Issue #192](https://github.com/TinyAGI/tinyclaw/issues/192) notes that TinyOffice chats appear ephemeral (lost on navigation). This is a critical usability flaw for a "personal assistant" that needs to retain memory.
*   **Alternative Terminal Multiplexers:** [Issue #87](https://github.com/TinyAGI/tinyclaw/issues/87) (Support for Zellij) remains a low-priority but "nice-to-have" quality-of-life feature for power users.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-03-12

## 1. Today's Overview
The Moltis project is experiencing a period of intense development activity and active community engagement. In the last 24 hours, contributor activity has been remarkably high, with 24 pull requests updated—19 of which are new and currently open—alongside 32 updated issues. The focus is heavily on stability and bug fixing, evidenced by 23 closed issues and a suite of PRs addressing Docker deployments, local LLM integrations, and UI onboarding friction. Despite the lack of a new tagged release today, the volume of merged fixes suggests a patch version is imminent.

## 2. Releases
No new releases were published today (2026-03-12). The latest merged PRs appear to be staging for a forthcoming minor patch release focused on installation stability and provider compatibility.

## 3. Project Progress
Developers merged/closed 5 PRs and resolved 23 issues today, significantly improving the project's stability.
*   **Chat & Session Handling:** Fixed a critical bug ([PR #399](https://github.com/moltis-org/moltis/pull/399)) where auto-compact targeted the wrong session for Discord channels, and ensured aborted chat streams persist their partial history via [PR #418](https://github.com/moltis-org/moltis/pull/418).
*   **Local LLM & MLX:** [PR #397](https://github.com/moltis-org/moltis/pull/397) resolved an issue where raw special tokens (e.g., `<|im_end|>`) leaked into user-visible output for local-llm/MLX backends.
*   **Docker & Configuration:** [PR #400](https://github.com/moltis-org/moltis/pull/400) introduced backward compatibility for legacy memory embedding keys, and [PR #401](https://github.com/moltis-org/moltis/pull/401) added generic provider environment bootstrapping to simplify Docker setups.

## 4. Community Hot Topics
The community is actively discussing extensibility and deployment friction.
*   **Node Extensibility:** [Issue #391](https://github.com/moltis-org/moltis/issues/391) (RFC: Node-Advertised Tools) is sparking conversation about allowing remote nodes to advertise specific tools rather than just generic `exec` commands. This indicates a strong user need for modular, distributed agent architectures.
*   **Deployment Issues:** [Issue #181](https://github.com/moltis-org/moltis/issues/181) (Crons/Heartbeat failure) and [Issue #129](https://github.com/moltis-org/moltis/issues/129) (Docker login failure) remain high-activity topics, highlighting persistent challenges in the initial setup experience for self-hosted users.

## 5. Bugs & Stability
Several high-impact bugs were addressed today, though some new regressions were reported.
*   **Docker Networking:** [Issue #102](https://github.com/moltis-org/moltis/issues/102) (Docker-in-Docker path mounting) was closed after identifying the root cause in sandbox workspace mounting logic.
*   **Authentication Loops:** [Issue #310](https://github.com/moltis-org/moltis/issues/310) (Circular 303 response) was resolved, likely aided by the onboarding fixes in [PR #406](https://github.com/moltis-org/moltis/pull/406).
*   **New Regressions:** [Issue #407](https://github.com/moltis-org/moltis/issues/407) reports that the network-filter proxy fails immediately upon start, breaking web search capabilities. This requires immediate attention.
*   **Provider Support:** [Issue #414](https://github.com/moltis-org/moltis/pull/414) notes that `z.ai` fails out of the box with network errors.

## 6. Feature Requests & Roadmap Signals
*   **Remote MCP & Secrets:** [PR #416](https://github.com/moltis-org/moltis/pull/416) (Support secret remote MCP URLs) suggests a move toward more secure, enterprise-ready external integrations.
*   **Communication Channels:** [Issue #272](https://github.com/moltis-org/moltis/issues/272) (Webhooks) and [Issue #233](https://github.com/moltis-org/moltis/issues/233) (Matrix support) are gaining traction, signaling a demand for broader interoperability beyond Telegram/Discord.
*   **Local Inference:** [PR #408](https://github.com/moltis-org/moltis/pull/408) adds opt-in Vulkan GGUF support, reinforcing the project's commitment to high-performance local hardware acceleration.

## 7. User Feedback Summary
Users are enthusiastic about the breadth of features (local LLM support, Telegram integration) but express frustration with the "out-of-the-box" experience, particularly within Docker environments. Pain points specifically center on path mounting, authentication loops, and provider configuration auto-detection. However, satisfaction is high regarding the responsiveness of the development team, who are actively pushing fixes for these specific onboarding hurdles.

## 8. Backlog Watch
*   **Long-Standing Setup Issues:** [Issue #129](https://github.com/moltis-org/moltis/issues/129) and [Issue #181](https://github.com/moltis-org/moltis/issues/181) have been open for nearly a month. While fixes are being attempted in recent PRs, these core stability issues need to remain a priority.
*   **UX Friction:** [Issue #344](https://github.com/moltis-org/moltis/issues/344) highlights a poor user experience when the vault is sealed. This security-feature UX needs refinement to prevent user confusion.
*   **Provider Compatibility:** [Issue #114](https://github.com/moltis-org/moltis/issues/114) (LM Studio/OpenAI compatible endpoints) remains a popular request (+2 votes) that is currently closed but not fully addressed in the current config architecture.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-03-12

## 1. Today's Overview
CoPaw is experiencing **very high engagement**, with 50 Issues and 50 PRs updated in the last 24 hours. The project is in an intense iteration phase following the recent `v0.0.6` release. While the community is actively contributing features (New QQ Channel, WeCom updates), the Issue tracker indicates significant stability challenges with the new version. Users are reporting critical regressions in memory management (`/compact` commands) and connection failures with various model providers (SiliconFlow, Cline). The high ratio of open issues (34 open vs 16 closed) suggests the maintainers are currently struggling to keep up with the bug reports despite active merging of PRs.

## 2. Releases
**No new releases** were recorded today. The project remains on the latest tagged version (likely `v0.0.6` or `v0.0.6.post1` based on user reports).

## 3. Project Progress
Developers merged **24 PRs** today, focusing heavily on frontend UI enhancements and core bug fixes:

*   **Frontend UI Enhancements:**
    *   **Chat Model Selection:** Added model selection capability directly in the chat interface ([PR #1140](https://github.com/agentscope-ai/CoPaw/pull/1140)).
    *   **Workspace UX:** Implemented drag-and-drop functionality and toggle switches for workspace markdowns ([PR #1121](https://github.com/agentscope-ai/CoPaw/pull/1121)).
    *   **Tool Management:** Added "Enable All / Disable All" toggle for tools ([PR #1112](https://github.com/agentscope-ai/CoPaw/pull/1112)).
    *   **Routing:** Added `chatId` routing for internationalization support ([PR #1221](https://github.com/agentscope-ai/CoPaw/pull/1221)).
*   **Backend & Channels:**
    *   **WeCom (Enterprise WeChat):** Merged long-polling support for smart robots ([PR #1267](https://github.com/agentscope-ai/CoPaw/pull/1267)).
    *   **Windows Support:** Fixed bugs for `execute_shell_command` on Windows ([PR #1260](https://github.com/agentscope-ai/CoPaw/pull/1260)).
    *   **Session Management:** Converted session save/read operations to async ([PR #1236](https://github.com/agentscope-ai/CoPaw/pull/1236)).
    *   **Security:** Merged basic Web UI authentication via environment variables ([PR #519](https://github.com/agentscope-ai/CoPaw/pull/519)).

## 4. Community Hot Topics
The most active discussions centered on **v0.0.6 regressions** and **channel stability**:

1.  **SiliconFlow Connection Failures ([Issue #1292](https://github.com/agentscope-ai/CoPaw/issues/1292)):** Users report that despite valid API keys, CoPaw v0.0.6 fails to connect to SiliconFlow models.
2.  **Feishu Context & Duplicate Messages ([Issue #1100](https://github.com/agentscope-ai/CoPaw/issues/1100) & [Issue #1243](https://github.com/agentscope-ai/CoPaw/issues/1243)):** Significant complaints about Feishu channel repeating old answers and the `/compact` command failing to actually clear context (it generates summaries but doesn't delete messages, causing file bloat).
3.  **Websockets Deprecation ([Issue #863](https://github.com/agentscope-ai/CoPaw/issues/863)):** Users are annoyed by `DeprecationWarning` spam in the terminal when running `copaw app`.

## 5. Bugs & Stability
Stability is currently **Critical** for the `v0.0.6` release, particularly regarding memory and context management.

*   **Severe - Context/Memory Corruption:**
    *   **Message Mismatch & Crash:** Compacting messages causes an "Assistant message count mismatch", breaking the API call ([Issue #1222](https://github.com/agentscope-ai/CoPaw/issues/1222)).
    *   **Compact Command Failure:** The `/compact` and `/compact/new` commands in Feishu channels do not delete messages, leading to ever-increasing context size and eventual payload limit errors ([Issue #1243](https://github.com/agentscope-ai/CoPaw/issues/1243)).
*   **High - Connection Errors:**
    *   **Model Providers:** Users unable to add SiliconFlow ([Issue #1292](https://github.com/agentscope-ai/CoPaw/issues/1292)) or Cline API ([Issue #1287](https://github.com/agentscope-ai/CoPaw/issues/1287)).
    *   **Feishu 500 Error:** Sudden stops in response with HTTP 500 errors ([Issue #1218](https://github.com/agentscope-ai/CoPaw/issues/1218)).
*   **Medium - Shell Execution:** `execute_shell_command` freezes sessions on Windows, requiring a restart ([Issue #1136](https://github.com/agentscope-ai/CoPaw/issues/1136)). *Note: A fix was merged in [PR #1260](https://github.com/agentscope-ai/CoPaw/pull/1260) but may not be released yet.*

## 6. Feature Requests & Roadmap Signals
Users are requesting better integration and control over the agent's environment:

*   **Official Plugin Support:** Request for pre-call hooks or plugins to handle specific data types (like local image paths) before the LLM processes them ([Issue #1283](https://github.com/agentscope-ai/CoPaw/issues/1283)).
*   **Feishu OpenClaw Integration:** Strong interest in integrating Feishu's official open-source plugin for document/calendar access ([Issue #1297](https://github.com/agentscope-ai/CoPaw/issues/1297)).
*   **Session Management:** Ability to manually start a "New Chat" in channels like Feishu/DingTalk to reset context without waiting for automatic compaction ([Issue #1288](https://github.com/agentscope-ai/CoPaw/issues/1288)).
*   **User Whitelists:** Request for allowed_users configuration in channels for access control ([Issue #411](https://github.com/agentscope-ai/CoPaw/issues/411)).

## 7. User Feedback Summary
*   **Pain Points:** The "Context Window Exceeded" error is the primary source of frustration. Users feel the memory compression features in v0.0.6 are broken, leading to wasted tokens and crashes. Installation on macOS via script is also broken for some ([Issue #1291](https://github.com/agentscope-ai/CoPaw/issues/1291)).
*   **Use Cases:** Users are attempting to deploy CoPaw as automated assistants in DingTalk/Feishu for tasks like file reading, image saving, and shell command execution.
*   **Sentiment:** Mixed. While users appreciate the new UI features and frequent updates, the breaking bugs in basic functionality (chat memory) are causing operational failures in production-like environments.

## 8. Backlog Watch
*   **Feishu Memory Leak/Corruption ([Issue #1243](https://github.com/agentscope-ai/CoPaw/issues/1243)):** This needs immediate attention as it breaks long-running conversations.
*   **Windows Shell Freeze ([Issue #1136](https://github.com/agentscope-ai/CoPaw/issues/1136)):** Although a fix PR exists, it needs to be verified and released quickly as it "bricks" the agent on Windows.
*   **First-Party Provider Connection Issues ([Issue #1292](https://github.com/agentscope-ai/CoPaw/issues/1292)):** Inability to connect to popular providers like SiliconFlow blocks adoption for cost-conscious users.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-03-12

## 1. Today's Overview
ZeptoClaw demonstrates **exceptionally high velocity** today with a sharp focus on security hardening and platform stability. The project merged 13 PRs and closed 12 issues, releasing two patch versions (v0.7.5 and v0.7.6) in a single day. The primary theme is a comprehensive "defense-in-depth" initiative targeting filesystem boundaries, inbound webhook authentication, and communication channel security. Activity is almost entirely driven by the project creator @qhkm, indicating a focused, solitary sprint to mature the agent's safety boundaries.

## 2. Releases

### **v0.7.6** ([Release Notes](https://github.com/qhkm/zeptoclaw/releases/tag/v0.7.6))
*   **CLI UX:** Added interactive slash command suggestions (autocomplete) for commands like `/model`, `/persona`, `/tools`.
*   **UI Polish:** Fixed duplicate "Claude subscription token" warnings during startup.
*   **Security:** Continued hardening of inbound auth and filesystem boundaries.

### **v0.7.5** ([Release Notes](https://github.com/qhkm/zeptoclaw/releases/tag/v0.7.5))
*   **UX:** Added `zeptoclaw uninstall` and `config reset` commands for easier maintenance.
*   **Compatibility:** Introduced model-provider validation to prevent misconfiguration.
*   **Dependencies:** Multiple library bumps (jsonwebtoken, anyhow, chrono, rustls).

## 3. Project Progress
The project advanced significantly in **security architecture** and **user experience**:
*   **Filesystem Hardening (PR #324):** A major refactor replacing path-based operations with `dirfd`-relative `openat` on Unix. This mitigates TOCTOU (Time-of-Check to Time-of-Use) race conditions and symlink attacks, ensuring the agent cannot be tricked into accessing files outside designated directories.
*   **Channel Security:**
    *   **WhatsApp Cloud (PR #317/Issues):** Implemented mandatory HMAC-SHA256 signature verification for webhooks.
    *   **Telegram (Issue #321):** Began deprecation of username-based allowlists in favor of numeric IDs to prevent identity spoofing.
    *   **Email (Issue #325):** Added warnings for reliance on unauthenticated `From` headers.
*   **Provider Support (PR #316):** Merged "keyless auth" support for Ollama and vLLM, allowing local instances to work without dummy API keys.
*   **CLI Improvements (PR #323):** Implemented rustyline-based slash command autocomplete.

## 4. Community Hot Topics
*   **Ollama Cloud/Local Support (Issue #284):** A user request regarding Ollama cloud model support led to the immediate implementation of keyless authentication (PR #316). This highlights a demand for **seamless local development experiences** where users don't want to manage dummy credentials for local LLMs.
*   **Security Advisory Triage (Issue #326):** Discussion around GHSA-j966-r55r-f865 (WhatsApp Bridge) shows active maintenance of the security posture. The maintainer confirmed the repo consumes typed events, not raw unsafe payloads, closing the advisory as "unconfirmed" for this codebase.

## 5. Bugs & Stability
*   **[P1-Critical] Filesystem Boundary Fixes (Issue #319):** Addressed critical gaps in workspace write paths. **Fix:** Merged in PR #324 using atomic replace and strict mount allowlists.
*   **[P2-High] Webhook Auth Gaps (Issue #318):** Tightened verification for inbound webhooks to reduce trust in caller-supplied identity fields. **Fix:** Merged in recent security updates.
*   **[P2-High] Channel Setup State (Issue #327):** Fixed bugs where interactive setup preserved stale authentication data instead of clearing it.
*   **[P2-High] Deduplication Noise (PR #320):** Fixed non-blocking but annoying UI bug where startup warnings printed 3 times.

## 6. Feature Requests & Roadmap Signals
*   **Merkle Hash-Chain Audit Trail (Issue #221):** *Open.* A proposal for a tamper-evident audit log for all tool executions. This is a strong signal that ZeptoClaw is targeting **enterprise compliance** and high-trust environments.
*   **Interactive CLI (Merged):** The addition of slash command suggestions indicates a push toward a **feature-rich REPL** experience, making the agent feel more like a dedicated shell environment than a simple command-line tool.

## 7. User Feedback Summary
User feedback today centered on **flexibility in model hosting**:
*   **Pain Point:** Users found it cumbersome to configure local Ollama instances because the system demanded an API key (standard for cloud providers).
*   **Resolution:** The immediate addition of keyless auth modes for Ollama/vLLM suggests the maintainer is highly responsive to developer workflow needs.
*   **Trust Signals:** The extensive security hardening (PR #324) addresses implicit user concerns about giving an AI agent filesystem access, signaling that "safety" is a core product feature, not just a technical requirement.

## 8. Backlog Watch
*   **Issue #221 (Merkle Audit Trail):** This feature has been open since 2026-03-03. It is currently the most significant *open* feature request related to agent safety/auditability. While no code has been merged yet, the current intense focus on security (filesystem/webhooks) suggests this audit log feature might be the next logical step in the roadmap.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest
**Date:** 2026-03-12
**Project:** EasyClaw (gaoyangz77/easyclaw)
**Role:** AI/Open-Source Analyst

## 1. Today's Overview
EasyClaw demonstrates moderate activity with a clear focus on cross-platform stability and user onboarding friction. The project released **v1.6.6**, signaling an effort to resolve deployment hurdles, specifically regarding macOS security warnings. Community engagement is currently centered on authentication reliability, with a critical issue regarding OpenAI OAuth flagged on the day of the release. While the release addresses installation barriers, the emergence of a new authentication bug suggests the core API connection layer may need immediate patching in the next iteration.

## 2. Releases
### **v1.6.6** (Released 2026-03-12)
*   **Focus:** Installation experience and platform security compliance.
*   **Key Changes:** This version targets the macOS user experience, specifically addressing the **"EasyClaw is damaged and can't be opened"** error. This is a common issue with unsigned or notarized apps on macOS (Gatekeeper).
*   **Actionable Advice:** The release notes provide a manual Terminal workaround, indicating that while the app is updated, the core code signing certificate issue may not be fully automated yet. Users on macOS should expect to run terminal commands to bypass Gatekeeper.

## 3. Project Progress
*   **Active PR:** [#15 fix: app icon in macos dock and system tray](https://github.com/gaoyangz77/easyclaw/pull/15) by @mylinkedai.
    *   **Status:** Updated today (Open).
    *   **Analysis:** This PR suggests an ongoing refinement of the macOS desktop client. Fixing the dock and system tray icons is vital for professional UI presence and usability. It indicates the project is maturing from a functional tool to a polished desktop application.
*   **Overall Velocity:** With 1 PR and 1 Issue updated, development is steady but specialized, focusing heavily on the macOS client environment today.

## 4. Community Hot Topics
*   **Most Active Issue:** [#16 [OPEN] OpenAI Oauth好像有问题 (OpenAI OAuth seems to have a problem)](https://github.com/gaoyangz77/easyclaw/issues/16)
    *   **Author:** @westisc
    *   **Activity:** Created 2026-03-11, updated 2026-03-11.
    *   **Underlying Need:** Users are relying on EasyClaw for seamless integration with OpenAI services. The failure of OAuth (authentication) blocks the primary utility of the assistant. This issue affects both portable and installed versions, suggesting a systemic configuration or API change rather than a localized environment bug.

## 5. Bugs & Stability
*   **🔴 High Severity:** **[#16 OpenAI OAuth Failure](https://github.com/gaoyangz77/easyclaw/issues/16)**
    *   **Details:** Users are reporting consistent authentication failures ("OAuth problem") across both portable and installed versions. Authentication is a blocker for app usage.
    *   **Visual Evidence:** The user provided a screenshot showing the error state.
    *   **Fix Status:** No linked PRs are addressing this yet. This is likely the top priority for the next patch.
*   **🟡 Medium Severity:** **macOS Gatekeeper Block**
    *   **Details:** Users report the app is "damaged."
    *   **Status:** Partially mitigated by v1.6.6 release notes (workaround provided), but a code-signing fix would be the permanent solution.

## 6. Feature Requests & Roadmap Signals
*   **UI Polish (Imminent):** The existence of PR [#15](https://github.com/gaoyangz77/easyclaw/pull/15) (macOS icon fixes) signals that the next minor release will likely focus on desktop integration quality.
*   **Authentication System Overhaul (Predicted):** Given the OAuth reports, it is highly probable the maintainers will need to refactor the authentication flow in the next version to ensure compatibility with OpenAI's current standards.

## 7. User Feedback Summary
*   **Pain Point:** **Installation Friction.** The release notes explicitly address user confusion regarding macOS security warnings. Users are encountering "damaged file" errors, which creates immediate distrust or frustration.
*   **Pain Point:** **Login Reliability.** The feedback in Issue #16 indicates that once installed, users face hurdles logging in. The OAuth failure suggests the app is currently unusable for new sessions relying on OpenAI auth.
*   **Sentiment:** Mixed. The release shows the maintainers are communicative and helpful (providing fixes), but the presence of a core login bug so close to a release suggests a need for better integration testing.

## 8. Backlog Watch
*   **Requires Attention:** **[#15 fix: app icon in macos dock](https://github.com/gaoyangz77/easyclaw/pull/15)**. While not "unanswered," this PR has been updated but remains *Open*. Merging this PR is essential to improve the visual stability of the macOS client.
*   **Requires Attention:** **[#16 OAuth Issue](https://github.com/gaoyangz77/easyclaw/issues/16)**. Created yesterday, this needs maintainer triage immediately as it is a blocking bug with visual proof provided by the user.

</details>