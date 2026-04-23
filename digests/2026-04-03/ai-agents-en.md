# OpenClaw Ecosystem Digest 2026-04-03

> Issues: 500 | PRs: 500 | Projects covered: 11 | Generated: 2026-04-02 22:07 UTC

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

# OpenClaw Project Digest: 2026-04-03

## 1. Today's Overview
OpenClaw demonstrates **extremely high velocity** with 500 issues and 500 PRs updated in the last 24 hours. The project is in a phase of aggressive iteration following the `v2026.4.2` release, which introduced significant architectural refactoring (notably the xAI plugin migration). While the feature set is expanding rapidly—evidenced by new platform support (Linux GTK app) and enhanced agent capabilities (TTS, Heartbeat batching)—the velocity appears to be outpacing stability assurance. A substantial portion of community activity revolves around regression reports and configuration breaking changes, suggesting the project is currently prioritizing feature shipping over stability refinement.

## 2. Releases

### **v2026.4.2**
*   **Type:** Minor Release / Stability & Refactor
*   **Key Change:** Plugins/xAI configuration migration.
*   **Breaking Changes:**
    *   **Config Migration:** Moved `x_search` settings from legacy core `tools.web.x_search.*` to plugin-owned path `plugins.entries.xai.config.xSearch.*`.
    *   **Auth Standardization:** `x_search` authentication now standardized on `plugins.entries.xai.config.webSearch.apiKey` / `XAI_API_KEY`.
    *   **Action Required:** Users must run the provided config migration command (truncated in log as `openc...`) or manually update their configuration files to restore xAI web search functionality.

## 3. Project Progress

Significant advancements were merged or proposed today, focusing on platform expansion and execution reliability:

*   **Linux Desktop Support ([PR #59859](https://github.com/openclaw/openclaw/pull/59859)):** A major gap is being addressed with a "cute GTK-native Linux App," fulfilling a long-standing user request ([Issue #75](https://github.com/openclaw/openclaw/issues/75)) to match the macOS experience.
*   **Agent Reliability & Prompts:**
    *   [PR #58955](https://github.com/openclaw/openclaw/pull/58955) is refactoring deferred delivery to prevent internal execution logs from leaking to users (fixing "text between tool calls" leaks).
    *   [PR #59898](https://github.com/openclaw/openclaw/pull/59898) fixed system prompt generation to handle explicit empty tool lists correctly.
*   **Voice & Media:**
    *   [PR #59891](https://github.com/openclaw/openclaw/pull/59891) added per-agent Text-to-Speech (TTS) configuration, allowing different voices/providers per agent persona.
    *   [PR #50051](https://github.com/openclaw/openclaw/pull/50051) introduced on-device ExecuTorch STT for macOS Talk Mode.
*   **Integrations:**
    *   [PR #59899](https://github.com/openclaw/openclaw/pull/59899) added Databricks support as an external ClawHub-ready plugin.
    *   [PR #54099](https://github.com/openclaw/openclaw/pull/54099) enabled group/channel support for Synology Chat.

## 4. Community Hot Topics

1.  **Cross-Platform Desktop Clients ([Issue #75](https://github.com/openclaw/openclaw/issues/75)):**
    *   **Activity:** 65 comments, 66 thumbs up.
    *   **Analysis:** The demand for Linux and Windows apps is the top user request. The appearance of PR #59859 (Linux GTK app) directly addresses this, signaling a major win for the community.
2.  **Native Agent Identity & Trust ([Issue #49971](https://github.com/openclaw/openclaw/issues/49971)):**
    *   **Activity:** 53 comments.
    *   **Analysis:** A high-level RFC proposing the integration of W3C DID/VC standards and ERC-8004 for agent verification. This suggests a sophisticated user base looking for enterprise-grade security and decentralized identity features.
3.  **Vision/Multimodal Support Gaps ([Issue #28744](https://github.com/openclaw/openclaw/issues/28744)):**
    *   **Activity:** 21 comments.
    *   **Analysis:** Users are frustrated that despite models (like MiniMax-Vision) supporting image input, the OpenClaw platform (specifically Feishu/Slack channels) often fails to pass image data to the model.

## 5. Bugs & Stability

The "Latest Issues" list is heavily populated by regressions and configuration issues, indicating **instability in the current release branch**.

*   **Critical/Stability Regressions:**
    *   **Dashboard Failure ([Issue #58814](https://github.com/openclaw/openclaw/issues/58814)):** v2026.3.31 returns 500 errors on the dashboard root path (`/`).
    *   **Execution Approval Loop ([Issue #58691](https://github.com/openclaw/openclaw/issues/58691)):** Config for `exec.ask='off'` is ignored after upgrading, forcing manual approval for every command.
    *   **Infinite Retry Loops ([Issue #57551](https://github.com/openclaw/openclaw/issues/57551)):** Kimi model integration enters infinite recursion, exhausting user tokens. (Fix attempted in [PR #59920](https://github.com/openclaw/openclaw/pull/59920) via CLI JSONL parser update).
    *   **Teams Webhook Failure ([Issue #58249](https://github.com/openclaw/openclaw/issues/58249)):** Breaking change in v2026.3.24+ removed `publicUrl`, breaking JWT validation.
*   **Configuration & Runtime:**
    *   **NPM Package Dependencies ([Issue #58701](https://github.com/openclaw/openclaw/issues/58701)):** The npm tarball appears missing runtime dependencies for bundled plugins (Telegram/Bedrock).
    *   **Browser CLI Failures ([Issue #57084](https://github.com/openclaw/openclaw/issues/57084)):** Browser commands fail with `unknown method: browser.request`.

## 6. Feature Requests & Roadmap Signals

*   **Async/Background Execution:** Strong demand for non-blocking operations. [Issue #18237](https://github.com/openclaw/openclaw/issues/18237) requests async exec callbacks, and [PR #59923](https://github.com/openclaw/openclaw/pull/59923) introduces heartbeat task batching. Expect more robust background task management soon.
*   **Granular Security:** [Issue #52621](https://github.com/openclaw/openclaw/issues/52621) requests filesystem access control (`allowedPaths` / `denyPaths`), moving beyond simple exec allowlists. This is likely to be implemented given the focus on enterprise readiness.
*   **Agent-to-Agent (A2A) Protocol:** [Issue #6842](https://github.com/openclaw/openclaw/issues/6842) continues to gain traction (9 thumbs up), indicating interest in multi-agent orchestration standards.

## 7. User Feedback Summary

**Pain Points:**
*   **Configuration Drift:** Users are struggling to keep configurations valid across frequent updates. One user expressed extreme frustration: *"ARE YOU GOING TO FRIGGING KEEP BREAKING THIS THING OR WE CAN GET A STABLE VERSION???????"* ([Issue #57898](https://github.com/openclaw/openclaw/issues/57898)).
*   **Broken Toolchains:** Simple things like `exec` commands and dashboard views are breaking unexpectedly, disrupting daily workflows.
*   **UX Leakage:** Internal agent thoughts/narration leaking into chat channels ([Issue #25592](https://github.com/openclaw/openclaw/issues/25592)) creates confusion for end-users.

**Positive Signals:**
*   High engagement on the Linux app PR shows appreciation for platform parity.
*   Excitement regarding advanced features like TTS per agent and on-device STT.

## 8. Backlog Watch

*   **Stale Vision Capabilities:** [Issue #28744](https://github.com/openclaw/openclaw/issues/28744) (Vision support) and [Issue #24662](https://github.com/openclaw/openclaw/issues/24662) (Webchat image paste) are marked stale but have high user need. The architecture needs to consistently pass binary/image data across all channels.
*   **Session/Thread Isolation:** [Issue #23414](https://github.com/openclaw/openclaw/issues/23414) highlights that persistent sub-agent sessions (orchestrator pattern) are broken on non-Discord channels. This blocks advanced automation use cases on Slack/Telegram.
*   **Timeout Handling:** [Issue #46049](https://github.com/openclaw/openclaw/issues/46049) reports that configured timeouts are ignored, leading to crashes. This needs architectural attention.

---

## Cross-Ecosystem Comparison

# AI Agent Open-Source Ecosystem Cross-Project Report
**Analysis Date:** 2026-04-03

## 1. Ecosystem Overview

The open-source personal AI assistant landscape is experiencing a phase of aggressive architectural evolution and feature expansion. Projects are moving beyond simple chat interfaces toward multi-modal, multi-agent systems capable of autonomous execution and tool orchestration. There is a clear industry-wide push for **platform parity** (desktop/mobile expansion), **execution reliability** (improved memory and retry mechanisms), and **enterprise readiness** (security hardening, auth standardization). The ecosystem remains fragmented but highly active, with established players like OpenClaw and NanoBot iterating rapidly on core architectures while newer entrants like NanoClaw and IronClaw push the boundaries of multi-agent orchestration and decentralized identity. Overall, the velocity is high, but stability varies significantly across projects.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score |
|---------|-------------|-----------|----------------|--------------|
| **OpenClaw** | 500 | 500 | `v2026.4.2` (Stable) | ⚠️ Active but Unstable |
| **NanoBot** | 21 | 41 | None (post v0.1.4.post6) | 🟡 Consolidating |
| **PicoClaw** | 22 | 68 | `v0.2.4-nightly` | 🟡 Active/Risky |
| **NanoClaw** | 7 | 35 | None | 🟢 Healthy Growth |
| **IronClaw** | 28 | 50 | None (v2 prep) | 🟢 Strong Momentum |
| **LobsterAI** | 34 | 50 | None | 🟢 Active Development |
| **Moltis** | 3 | 2 | None | 🟢 Stable |
| **CoPaw** | 50 | 41 | `v1.0.1-beta.1` | 🟢 Beta Growth |
| **ZeptoClaw** | 10 | 1 | None (Migration) | 🟡 Restructuring |
| **EasyClaw** | 0 | 0 | `v1.7.8` | 🟢 Stable/Quiet |
| **TinyClaw** | 0 | 0 | None | 🔴 Inactive |

**Health Score Methodology:** 🟢 = stable releases, active community, manageable bug volume; 🟡 = high activity but significant regressions or restructuring; ⚠️ = high velocity with stability concerns; 🔴 = dormant.

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Scale Leadership:** With 500 issues and 500 PRs updated daily, OpenClaw has the largest active community by an order of magnitude.
- **Platform Parity:** The Linux GTK app (PR #59859) fulfills a top user request, matching macOS and potentially Windows.
- **Feature Velocity:** New capabilities like per-agent TTS, ExecuTorch STT, and Databricks plugin integration ship faster than competitors.

### Technical Approach Differences
- **Plugin Architecture:** OpenClaw's migration of xAI config to a plugin-owned path (`plugins.entries.xai.*`) contrasts with NanoBot's provider-level abstraction and IronClaw's centralized ownership model.
- **Configuration Drift:** Frequent breaking config changes (e.g., `x_search` migration) create user friction not seen in more conservative projects like EasyClaw or Moltis.

### Community Size Comparison
OpenClaw dominates in engagement volume. However, user sentiment is mixed—frustration with regression frequency is rising. NanoClaw and IronClaw show higher enthusiasm per capita, with strong engagement on roadmap items like multi-provider support and agent identity standards.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects Involved | Specific Needs |
|------------|-------------------|----------------|
| **Memory Systems** | NanoBot, PicoClaw, NanoClaw | Persistent, versioned, hybrid (BM25+vector) memory; "dream consolidation" and DAG-based context compression |
| **Multi-Agent Orchestration** | NanoClaw (CTO delegation), CoPaw (meeting system), OpenClaw (A2A protocol) | Role-based agent teams, inter-agent communication standards |
| **Provider Flexibility** | NanoClaw, IronClaw, CoPaw, NanoBot | Multi-provider support (Gemini, Vertex AI, Qianfan, Goose local) to reduce lock-in risk |
| **Channel/Platform Expansion** | OpenClaw, PicoClaw, NanoClaw, LobsterAI | WeChat, QQ, Teams, Synology, DingTalk; unified channel abstraction |
| **Security Hardening** | PicoClaw, IronClaw, CoPaw | Credential encryption (AES-GCM), exec allowlists, prompt injection shields |
| **Desktop Clients** | OpenClaw, CoPaw, LobsterAI | Linux GTK, auto-update mechanisms, native OS integration |
| **Voice/Multimodal** | OpenClaw (TTS/STT), Moltis (browser CDP) | Per-agent TTS, on-device STT, visual browser interaction |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | NanoClaw | IronClaw | CoPaw |
|-----------|----------|---------|----------|----------|-------|
| **Primary Focus** | General-purpose assistant with plugin ecosystem | Research-grade agent runtime | Multi-agent orchestration | Enterprise Web3/ACP delegation | Developer tooling & skills |
| **Target User** | Power users, enterprises | Researchers, AI engineers | Teams, advanced users | Enterprise, Web3 | Developers, hobbyists |
| **Architecture** | Plugin-centric, modular | Provider abstraction, hardened runtime | CTO delegation, memory-lancedb | Unified v2 engine, ownership model | Skill-based, auto-improvement |
| **Stability Posture** | Ship fast, fix later | Consolidation after regressions | Healthy growth | High velocity, security watch | Beta iteration |
| **Unique Feature** | xAI plugin, Linux GTK | Dream memory, Qianfan | Agent team profiles | NEAR wallet, ACP job delegation | Autonomous skill creation |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid Iteration (High Activity + Growth):**
- **OpenClaw:** Extreme velocity (1000 events/day), but user frustration with regressions is elevated.
- **IronClaw:** Strong momentum with landmark v2 engine merge; security vulnerabilities flagged require attention.
- **NanoClaw:** Healthy growth; multi-provider and multi-agent features merging quickly.
- **CoPaw:** Post-beta "gold rush"; 91 updates in 24 hours show strong engagement.

**Tier 2 — Active Development (Moderate Activity, Controlled):**
- **LobsterAI:** Focused UI/UX polish; 40% PR merge rate indicates responsive maintainers.
- **NanoBot:** Consolidating after v0.1.4.post6 regressions; memory system innovations in pipeline.
- **PicoClaw:** High velocity but nightly builds show instability; security hardening in progress.

**Tier 3 — Stabilizing/Quiet:**
- **Moltis:** Moderate activity; UX improvements merged, browser UI pending.
- **EasyClaw:** Stable releases, quiet community; localization expansion in review.
- **ZeptoClaw:** Restructuring for Crucible migration; functional changes paused.
- **TinyClaw:** Inactive.

---

## 7. Trend Signals

### Industry Trends Extracted

| Trend | Evidence | Value for AI Agent Developers |
|-------|----------|-------------------------------|
| **Provider Lock-in Anxiety** | NanoClaw #80 (56 👍), IronClaw multi-auth, CoPaw Ollama issues | Build abstraction layers early; users demand fallback options beyond Anthropic/OpenAI |
| **Self-Improving Agents** | CoPaw PR #2860 (auto-skill creation), PicoClaw self-rewriting `SOUL.md` | Agents that learn from past tasks will reduce manual configuration overhead |
| **Hybrid Memory Systems** | NanoClaw (LanceDB BM25+vector), PicoClaw (DAG compression), NanoBot (dream consolidation) | Pure vector search insufficient; combine lexical, semantic, and temporal signals |
| **Desktop-First Experience** | OpenClaw Linux GTK, CoPaw auto-update, LobsterAI native integrations | Users want native apps with OS integration, not just web interfaces |
| **Security Hardening** | PicoClaw Security Shield, IronClaw CRITICAL CI findings, CoPaw auth bypass PR | Supply chain and runtime security becoming mandatory for enterprise adoption |
| **Agent Identity & Trust** | OpenClaw DID/VC RFC, IronClaw ownership model | Verifiable agent identity will be critical for A2A commerce and enterprise governance |
| **Multimodal Gaps Persist** | OpenClaw vision failures, LobsterAI image crashes | Even mature projects struggle with consistent image/vision handling across channels |

### Strategic Recommendations for Developers
1. **Design for Provider Portability:** Abstract LLM calls to support multiple backends from day one.
2. **Invest in Memory Architecture:** Plan for hybrid retrieval and context compression early.
3. **Prioritize Desktop/Native UX:** Web-only assistants face increasing competition from native apps.
4. **Embed Security by Design:** Run vulnerability scans in CI; supply chain attacks are a rising concern.
5. **Standardize Agent Identity:** W3C DID/VC standards are emerging; early adoption may future-proof A2A interactions.

---

*Report generated from 10 active project digests dated 2026-04-03.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-04-03

## 1. Today's Overview
NanoBot demonstrates high development velocity with **41 PRs updated** (30 open) and **21 Issues active** in the last 24 hours. The community is heavily focused on stabilizing the recent `v0.1.4.post6` release, which appears to have introduced performance regressions and retry logic issues. Significant engineering effort is directed toward hardening the agent runtime for long-running tasks and overhauling the retry mechanisms to prevent upstream API spam. No new stable releases were cut today, suggesting a consolidation phase before the next version.

## 2. Releases
**No new releases** were recorded today.
*   **Context:** The project is currently iterating on the `nightly` branch following the `v0.1.4.post6` release. Current development focuses on patching regressions introduced in `.post6` before a potential `.post7` or minor version bump.

## 3. Project Progress
Several key PRs were closed or advanced, focusing on extensibility and stability:

*   **[PR #2733] feat: harden agent runtime for long-running tasks [CLOSED]**: A critical merge that stabilizes the core agent loop against large tool outputs, long tool chains, and provider hiccups.
    *   *Link:* [HKUDS/nanobot PR #2733](https://github.com/HKUDS/nanobot/pull/2733)
*   **[PR #2699] feat(provider): add Qianfan provider support [CLOSED]**: Successfully integrated support for Baidu's Qianfan models.
    *   *Link:* [HKUDS/nanobot PR #2699](https://github.com/HKUDS/nanobot/pull/2699)
*   **[PR #2740] feat(cli): add --config option to channels login [CLOSED]**: Improves UX by allowing specific config files for channel management commands.
    *   *Link:* [HKUDS/nanobot PR #2740](https://github.com/HKUDS/nanobot/pull/2740)

## 4. Community Hot Topics
The most engaging discussions center on architectural limitations and post-release performance:

1.  **Architectural Integrity of Prompt Prefixes ([Issue #2463](https://github.com/HKUDS/nanobot/issues/2463))**
    *   **Activity:** 10 comments.
    *   **Analysis:** A technical deep-dive alleging that NanoBot's conversation history persistence doesn't match the actual prompt sent to LLMs. This creates friction with OpenAI APIs and suggests a need for refactoring the context management layer to ensure exact fidelity between state and wire format.
2.  **DeepSeek Integration Tutorials ([Issue #2714](https://github.com/HKUDS/nanobot/issues/2714))**
    *   **Activity:** 4 comments.
    *   **Analysis:** High demand for localized (Chinese) documentation regarding DeepSeek model configuration on Windows. This signals a specific user demographic growth vector.
3.  **Github Copilot Login Failure ([Issue #2573](https://github.com/HKUDS/nanobot/issues/2573))**
    *   **Activity:** 9 upvotes, 3 comments.
    *   **Analysis:** Widespread authentication failure with GitHub Copilot following the replacement of `litellm`. Users are blocked from using this specific provider.

## 5. Bugs & Stability
Several high-severity regressions were reported for `v0.1.4.post6`:

*   **Critical: Memory Consolidation Failure ([Issue #2737](https://github.com/HKUDS/nanobot/issues/2737))**
    *   **Details:** LLM fails to call `save_memory` after upgrading to `.post6` with MiniMax, effectively breaking the agent's memory loop.
    *   **Status:** Open, no fix PR linked yet.
*   **Critical: Severe Performance Regression ([Issue #2713](https://github.com/HKUDS/nanobot/issues/2713))**
    *   **Details:** Response time degraded from ~1s to ~3min after upgrading to `.post6`.
    *   **Status:** Open.
*   **High: Retry Amplification Risk ([Issue #2760](https://github.com/HKUDS/nanobot/issues/2760))**
    *   **Details:** Stacked retries (App + SDK) threaten to triple upstream API load.
    *   **Fix:** Addressed in [PR #2759](https://github.com/HKUDS/nanobot/pull/2759) (Open).
*   **High: OpenAI Token Parameter Issue ([Issue #2757](https://github.com/HKUDS/nanobot/issues/2757))**
    *   **Details:** Provider sends deprecated `max_tokens` instead of `max_completion_tokens` for specific models.
    *   **Fix:** Addressed in [PR #2758](https://github.com/HKUDS/nanobot/pull/2758) (Open).

## 6. Feature Requests & Roadmap Signals
Development is trending toward enterprise-grade reliability and enhanced file interaction:

*   **Advanced Memory Systems:** [PR #2717](https://github.com/HKUDS/nanobot/pull/2717) proposes a "Two-stage memory system with Dream consolidation," and [PR #2753](https://github.com/HKUDS/nanobot/pull/2753) adds git-backed version control for memory. This indicates a major roadmap push for persistent, versioned agent memory.
*   **Native Search Tools:** [PR #2754](https://github.com/HKUDS/nanobot/pull/2754) adds built-in `grep` and `glob` tools to reduce reliance on shell execution, improving security and portability.
*   **Multi-Account Support:** [PR #2705](https://github.com/HKUDS/nanobot/pull/2705) introduces multi-account capability for channels, signaling a move toward multi-tenant or heavy-user workloads.
*   **Microsoft Teams Channel:** [PR #2600](https://github.com/HKUDS/nanobot/pull/2600) is nearing completion, expanding enterprise communication platform support.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by **speed regressions** in the latest version and **authentication breaks** (GitHub Copilot). There is also confusion regarding file access permissions when `restrictToWorkspace` is enabled ([Issue #2660](https://github.com/HKUDS/nanobot/issues/2660)).
*   **Satisfaction:** Strong community engagement in providing localized guides (Chinese/Windows) shows a dedicated user base.
*   **Use Cases:** Users are attempting to integrate diverse local models (Meituan LongCat, DeepSeek) and utilize NanoBot as a gateway, but encounter formatting inconsistencies (e.g., tool call parsing in [Issue #2749](https://github.com/HKUDS/nanobot/issues/2749)).

## 8. Backlog Watch
*   **[Issue #2463] Architectural issue: prompt prefix preservation:** This is a long-running technical debate (created March 25) with significant implications for API fidelity. It requires core maintainer arbitration.
    *   *Link:* [HKUDS/nanobot Issue #2463](https://github.com/HKUDS/nanobot/issues/2463)
*   **[Issue #1851] Matrix auth error spam:** A persistent issue dating back to March 10 regarding `M_UNKNOWN_TOKEN` spamming logs, which remains unresolved.
    *   *Link:* [HKUDS/nanobot Issue #1851](https://github.com/HKUDS/nanobot/issues/1851)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-04-03

## 1. Today's Overview
The PicoClaw project is experiencing a **high-velocity development phase**, evidenced by 68 updated Pull Requests and a balanced 50% closure rate on 22 active Issues within the last 24 hours. The release of **v0.2.4-nightly** indicates aggressive iteration towards the next stable baseline, focusing heavily on architecture refactoring (memory, security) and channel expansions. While the merge activity suggests a robust engineering pace, the volume of new bug reports regarding configuration and channel connectivity indicates that the rapid feature additions are currently outpacing stability assurance.

## 2. Releases
- **Version:** `v0.2.4-nightly.20260402.415abc8c`
- **Type:** Nightly Build (Automated)
- **Status:** Unstable / Caution Advised
- **Changes:** [Full Changelog vs v0.2.4](https://github.com/sipeed/picoclaw/compare/v0.2.4...main)
- **Notes:** This build aggregates recent refactors, including the new short-term memory engine and dependency bumps. It is intended for testing the upcoming v0.2.4 stable release.

## 3. Project Progress
Significant advancements were merged today, shifting the project towards a more modular and secure architecture.

*   **Memory Architecture:** PR [#2285](https://github.com/sipeed/picoclaw/pull/2285) introduced a short-term memory engine (LCM) using SQLite and DAG-based context compression. This is a critical step towards long-context handling.
*   **Security Hardening:** PR [#2138](https://github.com/sipeed/picoclaw/pull/2138) (Security Shield) and [#2298](https://github.com/sipeed/picoclaw/pull/2298) (Exec script preflight hardening) were active, focusing on preventing prompt injection and validating interpreter commands.
*   **Credential Management:** Merged PR [#1521](https://github.com/sipeed/picoclaw/pull/1521) added AES-GCM encryption and a secure store, significantly improving local security for API keys.
*   **UX Improvements:** PR [#1032](https://github.com/sipeed/picoclaw/pull/1032) merged, adding `/new` and `/clear` commands to allow users to reset conversation context dynamically without restarting the service.
*   **UI Modernization:** PR [#924](https://github.com/sipeed/picoclaw/pull/924) rebuilt the launcher UI using Bulma and offline CodeMirror, improving the configuration experience.

## 4. Community Hot Topics
*   **WebUI Connectivity Failures:** The most active discussion is in Issue [#2213](https://github.com/sipeed/picoclaw/issues/2213) (7 comments). Users are frustrated by the WebUI failing to connect to its own gateway process, indicating a regression in the launcher/networking stack.
*   **File Tool Refactoring:** Issue [#1974](https://github.com/sipeed/picoclaw/issues/1974) (6 comments) sparked a debate on switching `ReadFileTool` from byte-based to line-based pagination. This highlights a user need for better handling of text/log files rather than binary streams.
*   **Android Roadmap:** High-priority Issue [#292](https://github.com/sipeed/picoclaw/issues/292) (4 comments) discusses enabling PicoClaw to control Android devices (Botdrop-style). This aligns with the project's goal to be a bridge between LLMs and physical/digital interfaces.

## 5. Bugs & Stability
Several critical bugs have surfaced, primarily related to the configuration and channel layers:

*   **High Severity - Model Routing Failure:** Issue [#2286](https://github.com/sipeed/picoclaw/issues/2286) reports that `thinking_level` cannot be read when model names differ from IDs, breaking model selection logic. **No fix PR yet.**
*   **High Severity - Silent Model Downgrade:** Issue [#2268](https://github.com/sipeed/picoclaw/issues/2268) reveals that even when "light model" routing is selected, the system silently uses the primary model.
*   **Medium Severity - Cron Job Misrouting:** Issue [#2275](https://github.com/sipeed/picoclaw/issues/2275) notes that Cron jobs route messages to internal sessions, failing to notify users on Telegram/Dingtalk.
*   **Medium Severity - Script Handling:** Issue [#2283](https://github.com/sipeed/picoclaw/issues/2283) highlights a parsing bug where `\n` literals in generated Python scripts are converted to newlines, causing syntax errors.
*   **Channel Instability:** Issues [#2080](https://github.com/sipeed/picoclaw/issues/2080) (Windows QQ) and [#2265](https://github.com/sipeed/picoclaw/issues/2265) (Dingtalk) report channel-specific failures.

## 6. Feature Requests & Roadmap Signals
*   **Agent Self-Improvement:** Closed issue [#1756](https://github.com/sipeed/picoclaw/issues/1756) and [#1754](https://github.com/sipeed/picoclaw/issues/1754) suggest the roadmap includes giving the agent the ability to rewrite its own `SOUL.md` and `USER.md` files, enabling recursive self-improvement.
*   **Cost Optimization:** Issue [#2271](https://github.com/sipeed/picoclaw/issues/2271) requests support for OpenAI "Flex" processing tiers for non-time-sensitive cron jobs, indicating a maturing focus on operational costs.
*   **Channel Expansion:** Feature request [#2261](https://github.com/sipeed/picoclaw/issues/2261) asks for a Zalo channel, and PR [#2244](https://github.com/sipeed/picoclaw/pull/2244) adds Microsoft Teams webhook support.

## 7. User Feedback Summary
*   **Pain Point - Configuration Complexity:** Users report significant friction in setting up providers, specifically regarding `model` vs `model_name` mapping (Issue [#2286](https://github.com/sipeed/picoclaw/issues/2286)) and Docker volume hardcoding (Issue [#2269](https://github.com/sipeed/picoclaw/issues/2269)).
*   **Pain Point - Debugging Opacity:** The "silent fallback" to primary models (Issue [#2268](https://github.com/sipeed/picoclaw/issues/2268)) is a major source of dissatisfaction, as it hides cost implications from the user.
*   **Use Case - Automation:** There is a strong push for PicoClaw to serve as an autonomous mobile operator (Android control) and a reliable scheduler (Cron/Teams/Dingtalk), moving beyond simple chat interfaces.

## 8. Backlog Watch
*   **Agent Documentation:** Issue [#547](https://github.com/sipeed/picoclaw/issues/547) (Agent guidelines for `AGENT.md`) remains open. As the "self-modifying agent" features merge, clear documentation on how the agent should behave is critical and currently lagging.
*   **Connection Reset Instability:** Issue [#1653](https://github.com/sipeed/picoclaw/issues/1653) regarding intermittent "connection reset by peer" on Linux boards remains a blocker for edge deployment and needs maintainer attention.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-03

## 1. Today's Overview
NanoClaw is experiencing **very high development velocity** with 35 pull requests updated in the last 24 hours (27 open, 8 merged), indicating an active, contribution-heavy community. The project continues to expand its ecosystem with new channels (WeChat, QQ), integrations (Goose local models), and infrastructure improvements (Docker containerization, SELinux support). While no new official releases were published today, the merge activity suggests preparation for a substantial future release. The ratio of open to merged PRs shows maintainers are actively reviewing, but the backlog of community contributions is growing faster than it's being processed.

---

## 2. Releases
**No new releases** were published today. The last release information is not available in the current data.

---

## 3. Project Progress

### Merged/Closed PRs (8):
| PR | Title | Impact |
|----|-------|--------|
| [#1602](https://github.com/qwibitai/nanoclaw/pull/1602) | **Agent Team Profiles & CTO Delegation (Phase 1)** | Major feature: transforms single assistant into orchestrating CTO with 11 specialist roles (PM, Architect, Researcher, Builder, Designer, etc.) |
| [#1600](https://github.com/qwibitai/nanoclaw/pull/1600) | **MCP tools and image support for local model (Goose)** | Adds HTTP MCP server wrapping NanoClaw IPC tools for Goose sessions with send_message, send_image, task scheduling tools |
| [#1283](https://github.com/qwibitai/nanoclaw/pull/1283) | **Memory upgrade to memory-lancedb-pro** | Replaces basic vector search with hybrid BM25+vector retrieval, reranking, recency weighting, and noise filtering |
| [#1190](https://github.com/qwibitai/nanoclaw/pull/1190) | **Script tasks skill** | Enables scheduled shell commands without AI agent sessions for maintenance tasks |
| [#1595](https://github.com/qwibitai/nanoclaw/pull/1595) | **Contributor Covenant Code of Conduct** | Governance: adds community guidelines |

### Key Advancements:
- **Multi-agent orchestration** is now possible with the CTO delegation system
- **Local model support** expands beyond Anthropic with Goose integration
- **Memory system significantly upgraded** with LanceDB hybrid search

---

## 4. Community Hot Topics

### Most Active Issues (by reactions/comments):

| Issue | Engagement | Summary |
|-------|------------|---------|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) | 👍 56, 29 comments | **Multi-provider support (OpenCode, Codex, Gemini)** — Users report Anthropic is shutting down subscriptions for OpenClaw users; community urgently wants provider flexibility |
| [#1485](https://github.com/qwibitai/nanoclaw/issues/1485) | 2 comments | **Docker/Container security** — Concerns about curl-based host installation being vulnerable to supply chain attacks |
| [#1591](https://github.com/qwibitai/nanoclaw/issues/1591) | 1 comment, CRITICAL priority | **AI co-authorship IP rights** — Claude Code's system prompt auto-appends `Co-Authored-By: Claude` to commits without user consent; raises IP/legal concerns |

### Analysis:
- **Provider lock-in anxiety** is the top community concern (#80) — users want insurance against Anthropic account suspension
- **Security consciousness** is rising (#1485) — the "curl | sh" install pattern faces scrutiny
- **IP/Attribution awareness** (#1591) signals users are thinking about legal implications of AI-assisted development

---

## 5. Bugs & Stability

### Issues Reported Today:

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 High | [#1603](https://github.com/qwibitai/nanoclaw/issues/1603) | **Task scheduler blocks caller group** — When dispatching scheduled tasks with `return_to_caller: true`, the caller group becomes completely unresponsive for the entire task duration. Root cause identified at `task-scheduler.ts:267` | No fix PR yet |
| 🟡 Medium | [#1599](https://github.com/qwibitai/nanoclaw/issues/1599) | **CLI auth mismatch** — `claw cli` doesn't recognize `onecli` authentication; prompts for `/login` despite working in WhatsApp/Discord | No fix PR yet |
| 🟡 Medium | [#1604](https://github.com/qwibitai/nanoclaw/pull/1604) | **Service PATH missing Homebrew/Node** — launchd/systemd services crash on Apple Silicon Macs due to hardcoded PATH | Fix PR OPEN |

### Closed Issues:
- [#1590](https://github.com/qwibitai/nanoclaw/issues/1590) — Multi-phase experiment execution enhancement (closed, likely addressed)
- [#1596](https://github.com/qwibitai/nanoclaw/issues/1596) — Opened on wrong repo (closed as invalid)

---

## 6. Feature Requests & Roadmap Signals

### Highly Requested Features:
| Feature | Issue | Likelihood | Rationale |
|---------|-------|------------|-----------|
| **Multi-provider support** (Gemini, OpenCode, Codex) | [#80](https://github.com/qwibitai/nanoclaw/issues/80) | 🔥 High | 56 👍, active discussion; PR [#478](https://github.com/qwibitai/nanoclaw/pull/478) adds Vertex AI; Goose support [#1600](https://github.com/qwibitai/nanoclaw/pull/1600) already merged |
| **Docker/Container deployment** | [#1485](https://github.com/qwibitai/nanoclaw/issues/1485) | 🟡 Medium | Security-conscious users want isolated deployment |
| **Agent team profiles** | [#1602](https://github.com/qwibitai/nanoclaw/pull/1602) | ✅ Merged | Already integrated |

### Predictions for Next Release:
1. **Expanded provider support** — groundwork is being laid with Vertex AI (#478) and Goose (#1600)
2. **Enhanced memory system** — LanceDB upgrade (#1283) merged
3. **New channels** — WeChat (#1594) and QQ (#966) PRs pending review
4. **Multi-agent orchestration** — CTO delegation (#1602) merged

---

## 7. User Feedback Summary

### Pain Points:
1. **Provider lock-in** — Fear of Anthropic account suspension is driving urgency for multi-provider support
2. **Security concerns** — Users uncomfortable with direct host installation; want containerized deployment
3. **IP/attribution anxiety** — Co-authorship auto-insertion raises legal questions
4. **Task blocking** — Scheduled tasks freeze caller groups, breaking responsiveness

### Positive Signals:
- Strong community contribution velocity (27 open PRs)
- Diverse channel integrations being developed (WhatsApp via Twilio, WeChat, QQ)
- Memory system upgrade shows responsiveness to retrieval quality feedback

### Use Cases Emerging:
- **Team/organizational deployment** — CTO delegation feature suggests enterprise interest
- **Local/air-gapped environments** — Goose integration enables offline operation
- **Multi-platform messaging** — WhatsApp, Discord, WeChat, QQ channels

---

## 8. Backlog Watch

### Items Needing Maintainer Attention:

| Item | Type | Age | Urgency | Reason |
|------|------|-----|---------|--------|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) | Issue | ~2 months | 🔥 Critical | 56 👍, provider lock-in is existential concern for users |
| [#478](https://github.com/qwibitai/nanoclaw/pull/478) | PR | ~6 weeks | 🟡 High | Vertex AI support complements multi-provider push |
| [#1294](https://github.com/qwibitai/nanoclaw/pull/1294) | PR | ~2 weeks | 🟡 Medium | Twilio WhatsApp (official API) awaiting review |
| [#966](https://github.com/qwibitai/nanoclaw/pull/966) | PR | ~3 weeks | 🟡 Medium | QQ channel for Chinese market |
| [#1485](https://github.com/qwibitai/nanoclaw/issues/1485) | Issue | ~1 week | 🟡 Medium | Security concern about installation method |

### Watch Recommendation:
The **multi-provider support** issue (#80) has been open since February with high engagement. With the merged Goose integration and pending Vertex AI PR, the architecture is shifting toward provider abstraction. Maintainers should prioritize formalizing this roadmap to address user anxiety about Anthropic dependency.

---

*Digest generated from 42 GitHub events (7 issues, 35 PRs) on 2026-04-03*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-03

## Today's Overview

IronClaw is experiencing **extremely high development velocity** with a major architectural overhaul underway. The team merged the **v2 execution engine** (#1557) and shipped critical infrastructure including a **centralized ownership model** (#1898), **direct social login authentication** (#1771, #1807), and **ACP job delegation** (#1506). Activity levels are intense: **50 PRs updated** (14 merged) and **28 issues active** in 24 hours. However, a **staging CI review bot flagged multiple CRITICAL security vulnerabilities** (command injection, workflow misconfigurations) in PR #1896, indicating aggressive shipping may be introducing technical debt. The project is clearly in a **rapid iteration phase** with core architectural changes landing alongside security concerns that need immediate attention.

---

## Releases

**No new releases** were tagged today. The last release version is not indicated in the provided data, suggesting the project may be accumulating changes for a significant version bump following the v2 engine merge.

---

## Project Progress

### Major Features Merged/Closed

1. **Unified v2 Execution Engine** ([#1557](https://github.com/nearai/ironclaw/pull/1557)) — **LANDMARK MERGE**
   - Replaces ~10 fragmented abstractions (Session, Job, Routine, Channel, Tool, Skill, Hook, Observer, Extension, LoopDelegate) with 5 unified primitives
   - Runs parallel to v1 via `ENGINE_V2=true` flag for zero-risk migration
   - Touches virtually every scope: agent, channel, tool, db, llm, orchestrator, worker, sandbox

2. **Centralized Ownership Model** ([#1898](https://github.com/nearai/ironclaw/pull/1898))
   - Typed `OwnerId` replaces ad-hoc `user_id: String` / `"default"` pattern
   - DB-backed pairing system with `OwnershipCache`
   - Uniform ownership for single-tenant and multi-tenant deployments
   - **Spawned 3 follow-up issues** (#1919, #1920, #1921) for performance and async improvements

3. **Direct OAuth/Social Login** ([#1771](https://github.com/nearai/ironclaw/pull/1771), [#1807](https://github.com/nearai/ironclaw/pull/1807))
   - Google, Apple, GitHub, email/phone, NEAR wallet authentication without reverse-proxy SSO
   - Coexists with existing Okta/OIDC and API token auth

4. **ACP (Agent Client Protocol) Job Mode** ([#1506](https://github.com/nearai/ironclaw/pull/1506))
   - Delegate sandbox jobs to any ACP-compatible coding agent
   - Standardized communication between AI coding agents and clients

5. **Database Migration Fixes** ([#1928](https://github.com/nearai/ironclaw/pull/1928), [#1931](https://github.com/nearai/ironclaw/pull/1931))
   - Resolved V15/V16/V17 migration numbering conflicts between PostgreSQL and libSQL
   - Aligned refinery migrations with production database state

6. **Docker Workflow Improvements** ([#1925](https://github.com/nearai/ironclaw/pull/1925), [#1930](https://github.com/nearai/ironclaw/pull/1930))
   - Switched from Alpine/musl to Debian/glibc to fix libSQL segfault on restart
   - Proper `:latest` tagging only on release; `:staging` tag support

### Features In Progress

- **Prompt Caching for Bedrock Converse API** ([#1935](https://github.com/nearai/ironclaw/pull/1935), [Issue #1926](https://github.com/nearai/ironclaw/issues/1926)) — Open PR ready for review
- **Aliyun Coding Plan Support** ([#1446](https://github.com/nearai/ironclaw/pull/1446)) — XL-sized PR adding Aliyun BaiLian provider
- **WalletConnect Transaction Approval** ([#1759](https://github.com/nearai/ironclaw/pull/1759)) — Async transaction approval via WalletConnect
- **Persistent Per-User Tool Permission System** ([#1911](https://github.com/nearai/ironclaw/pull/1911)) — Safe tools bypass approval; destructive tools require confirmation

---

## Community Hot Topics

### Most Active Discussions

1. **Tool Schema Discovery Enhancement Series** ([#1338](https://github.com/nearai/ironclaw/issues/1338), [#1337](https://github.com/nearai/ironclaw/issues/1337), [#1334](https://github.com/nearai/ironclaw/issues/1334), [#1331](https://github.com/nearai/ironclaw/issues/1331), [#1330](https://github.com/nearai/ironclaw/issues/1330))
   - 5 related "bug_bash" issues (all on hold) focused on improving how models understand tool schemas
   - **Underlying need:** Better ergonomics for MCP/WASM tools with complex nested schemas
   - Current raw parameter schemas don't communicate HTTP policies, SSRF restrictions, routing semantics

2. **Private Network Model Configuration** ([#1754](https://github.com/nearai/ironclaw/issues/1754)) — 1 👍
   - Self-deployed models in private networks blocked by HTTP-only-localhost restriction
   - Users want `LLM_BASE_URL` for internal endpoints like `litellm-proxy.xxxxx.com`

3. **Feishu Channel Bug** ([#1633](https://github.com/nearai/ironclaw/issues/1633)) — CLOSED but significant
   - WASM `on_respond` fails with "app_id not configured" when replying to Feishu messages
   - Affects enterprise self-hosted apps on Ubuntu Server

---

## Bugs & Stability

### CRITICAL Severity (from Staging CI Bot on PR #1896)

| Issue | Severity | Description |
|-------|----------|-------------|
| [#1901](https://github.com/nearai/ironclaw/issues/1901) | **CRITICAL** | Command injection vulnerability: `VERSION` from Cargo.toml used in shell commands without sanitization |
| [#1899](https://github.com/nearai/ironclaw/issues/1899) | **CRITICAL** | Missing home directory for `ironclaw` user; `adduser -D` creates system user without home |
| [#1900](https://github.com/nearai/ironclaw/issues/1900) | **CRITICAL** | Duplicate `context: .` in Docker build action causes YAML parsing error |

### HIGH Severity

| Issue | Description | Status |
|-------|-------------|--------|
| [#1902](https://github.com/nearai/ironclaw/issues/1902) | Unvalidated user input in Docker tag (`inputs.tag` directly concatenated) | OPEN |
| [#1903](https://github.com/nearai/ironclaw/issues/1903) | `docker.yml` workflow not integrated with release pipeline | OPEN |

### MEDIUM Severity

| Issue | Description |
|-------|-------------|
| [#1906](https://github.com/nearai/ironclaw/issues/1906) | Cargo-chef layer inefficiency: copying entire source tree before dependency hash |
| [#1905](https://github.com/nearai/ironclaw/issues/1905) | Binary path mismatch if `--profile dist` not defined in Cargo.toml |
| [#1904](https://github.com/nearai/ironclaw/issues/1904) | Duplicate permissions block in workflow job ignored by GitHub Actions |

### User-Reported Bugs

| Issue | Description | Status |
|-------|-------------|--------|
| [#1934](https://github.com/nearai/ironclaw/issues/1934) | `LLM_BASE_URL` requires `/v1` suffix after rig-core migration (requests go to `/chat/completions` vs `/v1/chat/completions`) | OPEN |
| [#1915](https://github.com/nearai/ironclaw/issues/1915) | ACP bridge follow-up prompt failures don't mark sandbox job as failed | OPEN |
| [#1921](https://github.com/nearai/ironclaw/issues/1921) | `derive_activation_status` uses wrong proxy for pairing state in multi-tenant | OPEN |

**Fix Available:** [#1930](https://github.com/nearai/ironclaw/pull/1930) (MERGED) — Switched to glibc to fix libSQL segfault on Docker restart

---

## Feature Requests & Roadmap Signals

### User-Requested Features

1. **Conversation/Thread Deletion** ([#1907](https://github.com/nearai/ironclaw/issues/1907))
   - Users can create but not delete conversations in web interface
   - **Prediction:** High likelihood of implementation — basic UX gap, low complexity

2. **Private Network Model Support** ([#1754](https://github.com/nearai/ironclaw/issues/1754))
   - Allow HTTP (non-TLS) for internal network endpoints
   - **Prediction:** Medium priority — security-conscious but legitimate enterprise use case

3. **Unified Workspace VFS** ([#1894](https://github.com/nearai/ironclaw/issues/1894))
   - Merge filesystem, DB, and remote storage behind mount-based abstraction
   - Created by core maintainer (`ilblackdragon`) — **likely roadmap item**

4. **Prompt Caching for Bedrock** ([#1926](https://github.com/nearai/ironclaw/issues/1926))
   - PR [#1935](https://github.com/nearai/ironclaw/pull/1935) already open
   - **Prediction:** Will land in next release

### Roadmap Signals from Labels

- `staging-promotion` PRs (#1936, #1933, #1929, #1927) indicate active deployment pipeline
- `ENGINE_V2=true` flag suggests gradual migration strategy rather than big-bang release
- **Auth epic** completion (Apple Sign In, NEAR wallet) signals multi-tenant SaaS ambitions

---

## User Feedback Summary

### Pain Points

1. **HTTP-Only-Localhost Restriction Too Strict** — Enterprise users with internal model proxies (LiteLLM, vLLM) cannot use non-TLS endpoints
2. **WASM Extension Configuration Confusion** — Feishu channel requires workspace-level `app_id` configuration but error message is unclear
3. **Web UI Missing Basic Features** — No conversation deletion; users accumulate stale threads
4. **OpenAI-Compatible Endpoint Pathing** — `/v1` suffix requirement creates friction with standard model servers

### Positive Signals

- **Fast bug resolution:** Feishu issue (#1633) closed within days
- **Docker stability fix merged same-day** (#1930)
- **Active maintainer engagement:** Core team (`henrypark133`, `ilblackdragon`, `zmanian`) actively commenting and creating issues

### Use Cases Emerging

- **Enterprise self-hosting:** Multiple issues reference Ubuntu Server, internal proxies, multi-tenant deployments
- **Coding agent delegation:** ACP integration suggests IronClaw positioning as orchestration layer for specialized coding agents
- **Web3 integration:** WalletConnect, NEAR wallet auth, transaction approval tools indicate crypto/web3 target market

---

## Backlog Watch

### Long-Unanswered/Important Issues

| Issue | Age | Status | Concern |
|-------|-----|--------|---------|
| [#1338](https://github.com/nearai/ironclaw/issues/1338) | 16 days | `on hold` | Tool schema discovery for extension workflow sequencing — core DX improvement |
| [#1337](https://github.com/nearai/ironclaw/issues/1337) | 16 days | `on hold` | MCP/WASM tool schema discovery — high-value long-term |
| [#1334](https://github.com/nearai/ironclaw/issues/1334) | 16 days | `on hold` | HTTP policy surface in tool schemas |
| [#1754](https://github.com/nearai/ironclaw/issues/1754) | 4 days | OPEN | Private network model support — enterprise blocker |

### PRs Needing Attention

- **[#1895](https://github.com/nearai/ironclaw/pull/1895)** — XL PR to make 49 unit tests pass without network/DNS. High-value for CI reliability but marked `risk: high`
- **[#1446](https://github.com/nearai/ironclaw/pull/1446)** — Aliyun support (contributor: new) awaiting review for 13 days

### Maintainer Attention Required

The **CRITICAL security vulnerabilities** flagged by staging CI (#1899, #1900, #1901) on PR #1896 require immediate triage. These appear to be pre-merge findings and should block promotion until resolved.

---

## Summary Assessment

**Project Health: ACTIVE with CAUTION** ⚠️

IronClaw is shipping transformative features at remarkable speed (v2 engine, ownership model, multi-provider auth, ACP delegation). However, the staging CI bot's discovery of **multiple CRITICAL security vulnerabilities** in the Docker/workflow layer suggests quality controls are under strain. The `on hold` status of 5+ tool schema discovery issues indicates the team is consciously deferring technical debt.

**Next release prediction:** Expect prompt caching for Bedrock, conversation deletion UI, and security hardening patches before v2 engine becomes default.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest (2026-04-03)

## 1. Today's Overview
LobsterAI is experiencing a **high-intensity development phase** with extremely active community engagement. The project saw **34 issues updated** (32 open) and **50 pull requests updated** (30 open, 20 merged/closed) in the last 24 hours, indicating rapid iteration. The majority of activity focuses on UI/UX polish for the Cowork feature, stability improvements for scheduled tasks and agent management, and bug fixes across multiple platform integrations. The high PR merge rate (40%) suggests maintainers are actively reviewing and shipping changes, though the large number of open issues points to growing pains in this personal AI assistant platform.

## 2. Releases
No new releases were published today. The project appears to be in active development toward a future release, likely v2026.4.2 or similar.

## 3. Project Progress

### Merged/Closed PRs (20 total)
Several significant features and fixes were merged today:

| PR | Area | Description |
|----|------|-------------|
| [#1374](https://github.com/netease-youdao/LobsterAI/pull/1374) | Cowork | Per-session AI model binding - each conversation remembers its own model selection |
| [#1368](https://github.com/netease-youdao/LobsterAI/pull/1368) | Qwen | Fixed coding plan endpoint by forcing OpenAI format (avoiding auto-injected tools) |
| [#1363](https://github.com/netease-youdao/LobsterAI/pull/1363) | OpenClaw | Immediate config writes instead of deferring, reducing unnecessary gateway restarts |
| [#1370](https://github.com/netease-youdao/LobsterAI/pull/1370) | Copilot | Updated default models to Free tier only (GPT-5 mini, Claude Haiku 4.5, GPT-4.1, GPT-4o) |
| [#1365](https://github.com/netease-youdao/LobsterAI/pull/1365) | Cowork/IM | Restored disabled input box style for IM sessions |
| [#1371](https://github.com/netease-youdao/LobsterAI/pull/1371) | Cowork | Added AI-generated content disclaimer below responses |

**Note:** PR [#1380](https://github.com/netease-youdao/LobsterAI/pull/1380) was opened to revert #1374 due to session file model snapshot issues affecting IM channels.

### Open PRs Advancing Features (30 total)
- [#1366](https://github.com/netease-youdao/LobsterAI/pull/1366) - Agent import/export functionality (22 unit tests)
- [#1369](https://github.com/netease-youdao/LobsterAI/pull/1369) - Conversation content search (not just titles)
- [#1364](https://github.com/netease-youdao/LobsterAI/pull/1364) - Model selector in Home page input toolbar
- [#1372](https://github.com/netease-youdao/LobsterAI/pull/1372) - Fix multi-file selection losing files
- [#1367](https://github.com/netease-youdao/LobsterAI/pull/1367) - Scheduled task name duplicate validation

## 4. Community Hot Topics

| Issue | Engagement | Analysis |
|-------|------------|----------|
| [#1354](https://github.com/netease-youdao/LobsterAI/issues/1354) | 1 comment, BSOD crash | **Critical stability issue** - Pageant helper causes Windows blue screen |
| [#1299](https://github.com/netease-youdao/LobsterAI/issues/1299) | 1 comment, technical | **Architecture concern** - LLM cache not implementing true LRU eviction |
| [#1295](https://github.com/netease-youdao/LobsterAI/issues/1295) | 1 comment, CLOSED | **Model integration bug** - Paste image not recognized by bundled models (closed, likely fixed) |
| [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | 1 👍, MCP integration | **MCP/Studio pain point** - Custom HTTP MCP servers not usable, only SSE works |

**Underlying Needs:**
- Users heavily utilize the **agent customization** and **scheduled task** features
- **MCP (Model Context Protocol)** integration is a key extensibility path users care about
- System-level integrations (Pageant, file operations) need stability improvements

## 5. Bugs & Stability

### Critical Severity
| Issue | Status | Description | Fix PR |
|-------|--------|-------------|--------|
| [#1354](https://github.com/netease-youdao/LobsterAI/issues/1354) | OPEN | **BSOD** when LobsterAI helps start Pageant | None yet |

### High Severity
| Issue | Status | Description | Fix PR |
|-------|--------|-------------|--------|
| [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | OPEN | 3MB long image upload crashes page, makes app unusable | None yet |
| [#1359](https://github.com/netease-youdao/LobsterAI/issues/1359) | OPEN | Deleted tasks reappear after restart | None yet |
| [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | OPEN | Short input triggers "content too long" error | None yet |
| [#1254](https://github.com/netease-youdao/LobsterAI/issues/1254) | CLOSED | POPO bot messages not responding (gateway error) | Likely addressed |

### Medium Severity
| Issue | Status | Description | Fix PR |
|-------|--------|-------------|--------|
| [#1357](https://github.com/netease-youdao/LobsterAI/issues/1357) | OPEN | Pageant says "started" but actually not | None yet |
| [#1307](https://github.com/netease-youdao/LobsterAI/issues/1307) | OPEN | Cannot edit different model provider after closing panel | None yet |
| [#1352](https://github.com/netease-youdao/LobsterAI/issues/1352) | OPEN | Cannot upload attachments during task execution | None yet |

## 6. Feature Requests & Roadmap Signals

**Strong signals for upcoming features** (based on open PRs with implementations):

1. **Agent Import/Export** - PR [#1366](https://github.com/netease-youdao/LobsterAI/pull/1366) is complete with 22 tests → **High probability for next release**
2. **Conversation Content Search** - PR [#1369](https://github.com/netease-youdao/LobsterAI/pull/1369) implements Issue [#1343](https://github.com/netease-youdao/LobsterAI/issues/1343) → **Likely in next version**
3. **Task Name Validation** - PR [#1367](https://github.com/netease-youdao/LobsterAI/pull/1367) addresses Issue [#1348](https://github.com/netease-youdao/LobsterAI/issues/1348) → **Likely in next version**

**User-requested features without implementation yet:**

| Issue | Request | Signals |
|-------|---------|---------|
| [#1345](https://github.com/netease-youdao/LobsterAI/issues/1345) | Export conversation to Markdown | Detailed implementation proposal provided |
| [#1337](https://github.com/netease-youdao/LobsterAI/issues/1337) | Time-grouped session list | Detailed UI proposal (Today/Yesterday/This Week) |
| [#1314](https://github.com/netease-youdao/LobsterAI/issues/1314) | Resizable sidebar width | Common request for flexibility |
| [#1339](https://github.com/netease-youdao/LobsterAI/issues/1339) | Message timestamps | Basic UX improvement |
| [#1341](https://github.com/netease-youdao/LobsterAI/issues/1341) | Arrow key history navigation | Terminal-like UX request |

## 7. User Feedback Summary

### Pain Points
1. **Agent Management Gaps**: Users cannot prevent duplicate agent names ([#1360](https://github.com/netease-youdao/LobsterAI/issues/1360)), and the delete button shows "delete" instead of Chinese text ([#1361](https://github.com/netease-youdao/LobsterAI/issues/1361)) - localization incomplete
2. **Scheduled Task UX Issues**: No feedback when starting tasks ([#1358](https://github.com/netease-youdao/LobsterAI/issues/1358)), no notification channel options ([#1329](https://github.com/netease-youdao/LobsterAI/issues/1329)), task names not validated ([#1348](https://github.com/netease-youdao/LobsterAI/issues/1348))
3. **Image Handling**: Paste-to-upload doesn't work with bundled models ([#1295](https://github.com/netease-youdao/LobsterAI/issues/1295)), large images crash the app ([#1296](https://github.com/netease-youdao/LobsterAI/issues/1296))
4. **MCP Limitations**: Custom HTTP MCP servers unusable, only SSE supported ([#1293](https://github.com/netease-youdao/LobsterAI/issues/1293))

### Positive Signals
- Active feature requests indicate users are **deeply engaged** with Cowork sessions and agent customization
- Multiple contributors submitting PRs suggests **healthy community participation**
- GitHub Copilot integration being actively maintained (Free tier model updates)

### Use Cases Observed
- **Enterprise IM integration**: POPO, WeCom, DingTalk, Feishu workflows
- **Scheduled automation**: Recurring tasks with notifications
- **Developer workflows**: Pageant (SSH agent), MCP server integration, code analysis

## 8. Backlog Watch

| Item | Type | Age | Concern |
|------|------|-----|---------|
| [#479](https://github.com/netease-youdao/LobsterAI/pull/479) | PR | ~2 weeks | Open PR "最新版更新" appears stale, needs maintainer review |
| [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | Issue | 1 day | MCP HTTP support - core extensibility feature, only 1 reaction but affects power users |
| [#1299](https://github.com/netease-youdao/LobsterAI/issues/1299) | Issue | 1 day | LRU cache bug - affects memory management at scale, technical debt |

---

**Digest Summary:** LobsterAI is in a **rapid development sprint** with strong community contribution momentum. The team shipped 20 PRs today including per-session model binding (though being reconsidered) and Copilot Free tier updates. **Critical attention needed** for the BSOD issue ([#1354](https://github.com/netease-youdao/LobsterAI/issues/1354)) and large image crash ([#1296](https://github.com/netease-youdao/LobsterAI/issues/1296)). The open PR pipeline suggests Agent import/export and conversation search will land soon.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-03

## 1. Today's Overview
Moltis shows **moderate activity** with a focus on bug fixes and UX improvements. The community remains engaged, with 2 new bug reports and active PRs addressing GraphQL session handling and browser UI features. No new releases were published today, indicating a stabilization phase. The mix of bug reports and feature PRs suggests the project is iterating on recent feature additions. Overall, the project appears healthy with responsive maintainer engagement.

---

## 2. Releases
**No new releases** were published in this reporting period.

---

## 3. Project Progress

### Merged/Closed PRs:
- **[#540](https://github.com/moltis-org/moltis/pull/540)** `feat(providers): improve model list UX with collapse, sorting, and inline errors` — **MERGED**
  - **Impact**: Major UX improvement for model selection UI
  - **Changes**:
    - Collapsible model lists (shows top 3 per provider, toggle for more)
    - Smart sorting: Preferred → Recommended → Newest → Version → Alphabetical
    - Inline error display for failed model fetches
  - **Notable**: Addresses significant clutter (e.g., OpenAI's 111 models)

### In-Progress PRs:
- **[#544](https://github.com/moltis-org/moltis/pull/544)** `fix(chat): honor public sessionKey in GraphQL flows` — OPEN
  - Fixes GraphQL session targeting bug (Issue #542)
  - Includes regression tests

- **[#531](https://github.com/moltis-org/moltis/pull/531)** `feat(browser): interactive browser viewing UI with CDP screencast` — OPEN
  - Adds live browser viewing/interaction via Chrome DevTools Protocol
  - Features: session management, mouse/keyboard/scroll interaction, action logs, per-agent cookie isolation

---

## 4. Community Hot Topics

| Issue/PR | Engagement | Topic |
|----------|------------|-------|
| [#536](https://github.com/moltis-org/moltis/issues/536) | 1 comment | Preact signal reactivity in nested modals |
| [#531](https://github.com/moltis-org/moltis/pull/531) | 0 comments (but active updates) | Interactive browser UI feature |

**Analysis**: Low comment volume but targeted, technical discussions. The Preact issue (#536) was quickly resolved, suggesting strong maintainer responsiveness. The browser UI PR (#531) is a significant feature addition with no comments yet—possibly under review.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available |
|----------|-------|--------|---------------|
| 🟡 Medium | [#542](https://github.com/moltis-org/moltis/issues/542): GraphQL `sessionKey` ignored for `chat.send/history` | OPEN | ✅ PR [#544](https://github.com/moltis-org/moltis/pull/544) submitted |
| 🟡 Medium | [#543](https://github.com/moltis-org/moltis/issues/543): Slack Client built without TLS support | OPEN | ❌ No fix yet |
| 🟢 Low | [#536](https://github.com/moltis-org/moltis/issues/536): Channel connect modals not opening | CLOSED | ✅ Fixed |

**Critical Analysis**:
- The **GraphQL sessionKey bug (#542)** affects chat message targeting and could cause messages to go to wrong sessions—**potential data integrity issue**.
- **Slack TLS issue (#543)** may prevent Slack integration in secure environments; requires rebuild with TLS support.
- **Modal bug (#536)** was a Preact signal scoping issue, now resolved.

---

## 6. Feature Requests & Roadmap Signals

| Feature Signal | Source | Likelihood |
|----------------|--------|------------|
| Interactive browser viewing via CDP | PR [#531](https://github.com/moltis-org/moltis/pull/531) | 🔴 Likely next major feature |
| Model list UX improvements (collapse/sort) | PR [#540](https://github.com/moltis-org/moltis/pull/540) | ✅ Already merged |
| Channel connection improvements | Issue #536 | ✅ Bug fixed |

**Prediction**: The **browser viewing UI (#531)** is the most significant pending feature and likely to be the highlight of the next release, enabling agents to visually interact with web content.

---

## 7. User Feedback Summary

**Pain Points Identified**:
1. **Model list overwhelm** — Users faced cluttered UIs (111 OpenAI models visible); addressed by merged PR #540
2. **Session confusion in multi-session workflows** — GraphQL `sessionKey` being ignored (#542) causes messages to go to wrong chat
3. **Channel integration friction** — Modal dialogs not opening (#536), TLS missing for Slack (#543)

**Positive Signals**:
- Quick resolution of reported bugs (Issue #536 closed within 2 days)
- Community contributors submitting fix PRs with tests (PR #544)
- Active development on high-value features (browser UI, model UX)

---

## 8. Backlog Watch

| Item | Age | Concern |
|------|-----|---------|
| **[#543](https://github.com/moltis-org/moltis/issues/543)** Slack TLS | 1 day | Needs triage—could block Slack integration for enterprise users |
| **[#531](https://github.com/moltis-org/moltis/pull/531)** Browser UI PR | 3 days | Large feature PR; may need more review bandwidth |

**Recommendation**: The Slack TLS issue (#543) should be prioritized as it affects a core integration channel. The browser UI PR (#531) appears stalled—maintainer review would unblock a significant feature.

---

*Digest generated: 2026-04-03 | Data source: github.com/moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-04-03

## 1. Today's Overview
The project is currently in a **hyper-active** state, driven by the recent `v1.0.1-beta.1` release. With 91 total updates (50 issues, 41 PRs) in 24 hours, the repository is witnessing a "gold rush" of contributions and user feedback typical of a post-major-release cycle. The maintainers and community are aggressively patching bugs (21 merged PRs) while simultaneously discussing ambitious roadmap items like autonomous self-improvement loops and desktop auto-updates. The high volume of open issues (35) suggests users are rigorously testing the new beta features across diverse environments (Windows, Ubuntu, ARM).

## 2. Releases
### **v1.0.1-beta.1**
This beta release focuses on stability and UI polish following the initial v1.0.0 rollout.
*   **Changes**:
    *   **Version Bump**: Updated internal versioning to `1.0.1b1`.
    *   **UI Fix**: Resolved a bug in the workspace console where file timestamps displayed as "NaNd ago" ([PR #2793](https://github.com/agentscope-ai/CoPaw/pull/2793)).
*   **Migration Note**: Users switching to this beta should clear cache if UI anomalies persist.

## 3. Project Progress
A total of **21 PRs were merged**, highlighting rapid iteration on the core agent loop and tooling.
*   **Tool Parsing & Reliability**: A critical fix was merged to add "lenient parse" for tool calls ([PR #2832](https://github.com/agentscope-ai/CoPaw/pull/2832)), addressing frequent `APIError: Failed to parse input` crashes reported by users.
*   **Shell & Timeout Handling**: Improvements were merged to better handle command timeouts and parameter naming in compact memory processes ([PR #2834](https://github.com/agentscope-ai/CoPaw/pull/2834)).
*   **Internationalization (i18n)**: The console time-display logic was refactored to use `dayjs` for better localization support ([PR #2800](https://github.com/agentscope-ai/CoPaw/pull/2800)).
*   **Documentation**: Instructions for Windows WebView2 and Web Authentication were added ([PR #2836](https://github.com/agentscope-ai/CoPaw/pull/2836)).

## 4. Community Hot Topics
*   **Contributor Drive** ([Issue #2291](https://github.com/agentscope-ai/CoPaw/issues/2291)): The "Help Wanted" board is the most active thread (41 comments), indicating strong community interest in contributing code.
*   **CPU Usage Anomaly** ([Issue #2348](https://github.com/agentscope-ai/CoPaw/issues/2348)): A significant bug where worker processes hit 100% CPU usage while idle is gaining traction (9 comments). Users are frustrated as this renders the agent resource-heavy on limited devices.
*   **Model Compatibility**: Users are discussing the difficulty of configuring Ollama and the lack of LLM selection options in the UI ([Issue #2298](https://github.com/agentscope-ai/CoPaw/issues/2298)), highlighting a need for smoother on-prem model integration.

## 5. Bugs & Stability
Several high-severity bugs were reported, with fixes already in progress for some:
1.  **Workspace Data Loss** ([Issue #2826](https://github.com/agentscope-ai/CoPaw/issues/2826)): *Critical.* Saving a "Skill" file deletes all other files in the folder. **Status:** Closed (Likely fixed or tracked internally).
2.  **Tool Call Parameter Failure** ([Issue #2816](https://github.com/agentscope-ai/CoPaw/issues/2816)): The Agent frequently calls tools without required parameters, causing loops. **Status:** Open; related parsing fixes merged in PR #2832 may address this.
3.  **Local Model GPU Support** ([Issue #2725](https://github.com/agentscope-ai/CoPaw/issues/2725)): CoPaw Local fails to utilize GPU (defaults to CPU) on Nvidia RTX 3060.
4.  **Browser Occupancy** ([Issue #2755](https://github.com/agentscope-ai/CoPaw/issues/2755)): The `browser_use` tool reports the browser as "occupied" on the second call, requiring manual process killing.

## 6. Feature Requests & Roadmap Signals
*   **Autonomous Learning Loop** ([PR #2860](https://github.com/agentscope-ai/CoPaw/pull/2860)): A proposed system where agents analyze past tasks to automatically create and patch "Skills." This signals a move toward self-evolving agents.
*   **Desktop Auto-Update** ([Issue #2846](https://github.com/agentscope-ai/CoPaw/issues/2846)): Request for an auto-updater to avoid manual re-installation.
*   **Multi-Agent Meeting System** ([PR #2785](https://github.com/agentscope-ai/CoPaw/pull/2785)): Architectural design for structured meetings between agents (Host, Reporter, Decider roles).
*   **Browser ARM Support** ([Issue #2655](https://github.com/agentscope-ai/CoPaw/issues/2655)): Feature request to default to ARM64 Chromium on Apple Silicon.

## 7. User Feedback Summary
Users are excited but encountering friction in **local deployment** and **tool reliability**.
*   **Pain Points**: Configuration of local models (Ollama/llama.cpp) remains difficult, often failing to detect GPU or requiring complex manual setup. The "Tool Call" mechanism is brittle, occasionally hallucinating parameters.
*   **Positive Signals**: Enthusiasm for specific model support (e.g., CoPaw-Flash-27B) and the new streaming typewriter cards for Feishu ([PR #2862](https://github.com/agentscope-ai/CoPaw/pull/2862)).
*   **User Experience**: The "Approve" dialog UX is criticized for hiding critical details in "thinking" blocks ([Issue #2845](https://github.com/agentscope-ai/CoPaw/issues/2845)), making it hard to know what the agent is doing.

## 8. Backlog Watch
*   **Security Vulnerability** ([PR #2840](https://github.com/agentscope-ai/CoPaw/pull/2840)): A "First-time contributor" PR removes the localhost API auth bypass. This is a critical security fix that needs immediate maintainer review/merge to prevent unauthorized access in proxy/tunnel scenarios.
*   **Gemini Integration Issues** ([Issue #2033](https://github.com/agentscope-ai/CoPaw/issues/2033)): Persistent "Corrupted thought signature" errors with Gemini models remain unresolved despite being active for weeks.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-04-03

## 1. Today's Overview
ZeptoClaw is currently undergoing a significant architectural transformation, evidenced by a massive volume of closed planning issues (10) within the last 24 hours. The project is actively preparing for a "fork-and-trim" migration to a new environment or version identified as "Crucible," focusing heavily on documentation reconciliation and cleanup. While administrative and refactoring activity is high, functional changes have stalled, with only one older PR remaining active and no new software releases. This indicates the project is likely in a "code freeze" or restructuring phase, prioritizing repository hygiene and migration planning over feature development.

## 2. Releases
No new releases were recorded for this period.

## 3. Project Progress
While no Pull Requests were merged today, the project made substantial progress in planning and stabilization for the **Crucible migration**:
*   **Migration Strategy Defined:** Issues [#477](https://github.com/qhkm/zeptoclaw/issues/477) and [#478](https://github.com/qhkm/zeptoclaw/issues/478) established the OpenSpec program for the fork-and-trim migration.
*   **Codebase Hygiene:** A comprehensive audit was completed ([#483](https://github.com/qhkm/zeptoclaw/issues/483)) to identify unused migration leftovers, and a cleanup plan was finalized ([#479](https://github.com/qhkm/zeptoclaw/issues/479)).
*   **Documentation:** Stale baseline references in the trim plan were reconciled ([#482](https://github.com/qhkm/zeptoclaw/issues/482), [#481](https://github.com/qhkm/zeptoclaw/issues/481)).
*   **Build Stabilization:** Prerequisite fixes were identified to ensure the `crucible-migration` branch can build and pass quality gates ([#484](https://github.com/qhkm/zeptoclaw/issues/484)).

## 4. Community Hot Topics
The "hot" topics are entirely centered on the internal restructuring effort rather than user-driven feature requests.
*   **Crucible Migration:** The most active discussions (though brief) centered on the exact scope and sequencing of the migration ([#480](https://github.com/qhkm/zeptoclaw/issues/480), [#477](https://github.com/qhkm/zeptoclaw/issues/477)).
*   **Telegram Stability (Latent):** While not updated today, [PR #462](https://github.com/qhkm/zeptoclaw/pull/462) remains the sole open PR. It addresses "silent message failures" during long research tasks, representing a critical user-facing fix that is currently pending while the migration planning takes precedence.

## 5. Bugs & Stability
*   **Critical Plugin Bug (Fixed Plan):** [Issue #485](https://github.com/qhkm/zeptoclaw/issues/485) identified that binary plugins were failing with `Unsupported JSON-RPC method: execute` because the system expected `tools/call`. This caused Telegram-triggered tool calls to fail. The issue was closed, likely resolved as part of the preflight stabilization effort.
*   **Build Instability:** [Issue #484](https://github.com/qhkm/zeptoclaw/issues/484) highlighted that the `crucible-migration` branch currently has compile blockers and validation failures. This is actively being addressed as a pre-requisite for the migration.

## 6. Feature Requests & Roadmap Signals
There are no new feature requests from external users. The roadmap is dominated by internal architectural changes:
*   **Platform Hardening:** The primary "feature" for the next version is the completion of the Crucible fork-and-trim migration, which aims to remove unused legacy code ([#476](https://github.com/qhkm/zeptoclaw/issues/476)) and stabilize the distribution posture.
*   **Silent Failure Fix:** The roadmap likely includes merging [PR #462](https://github.com/qhkm/zeptoclaw/pull/462) (chunking/plaintext fallback) once the current restructuring is complete.

## 7. User Feedback Summary
Direct user feedback is minimal in today's log. However, the open PRs and bug reports suggest the following pain points:
*   **Reliability in Long Tasks:** Users executing complex research tasks via Telegram experience "silent failures" where the bot stops responding without error messages ([PR #462](https://github.com/qhkm/zeptoclaw/pull/462)).
*   **Integration Confusion:** The bug in [#485](https://github.com/qhkm/zeptoclaw/issues/485) suggests users attempting to integrate binary plugins or use Telegram tools were hitting immediate JSON-RPC method errors.

## 8. Backlog Watch
*   **[PR #462](https://github.com/qhkm/zeptoclaw/pull/462) (fix(telegram): prevent silent message failures...):** This PR was created on 2026-03-28 and remains open. It addresses a critical usability issue (bot silence on long tasks). With the focus currently on the Crucible migration and build stabilization, this user-facing fix risks being delayed. Maintainer attention is needed to merge this or incorporate it into the migration branch to restore reliability for Telegram users.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest: 2026-04-03

## 1. Today's Overview
The EasyClaw project is currently demonstrating **low operational tempo but high release stability**. With zero issues opened or closed in the last 24 hours, the bug tracker is quiet, suggesting a stable codebase or a temporary lull in user reporting. However, the project shipped a new version (**v1.7.8**) today, indicating ongoing maintenance focused on distribution and platform compatibility. There is currently one active development vector regarding internationalization (PR #21), which appears to be the primary focus for the next update.

## 2. Releases
### **v1.7.8: RivonClaw v1.7.8**
- **Release Date:** 2026-04-03
- **Type:** Patch / Maintenance
- **Key Changes:** This release focuses specifically on **macOS distribution issues**. It addresses the "App is damaged" error caused by macOS Gatekeeper blocking unsigned or unrecognized applications.
- **Action Required:** Users on macOS do not need to update the application binary itself but should be aware of the documented terminal workaround (`xattr -cr` or similar standard fixes usually implied by this error) if they encounter installation blocks. No breaking code changes were indicated.

🔗 [View Release v1.7.8](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.8)

## 3. Project Progress
No Pull Requests were merged today. The only activity is the sustained presence of an open feature PR.

-   **Stalled/In-Progress Feature:**
    -   **PR #21 [OPEN]:** `feat(i18n): add 5 new languages`
    -   **Status:** Created on March 18, updated April 1 (likely via rebase or comment), but not merged.
    -   **Details:** This PR significantly expands the project's reach by adding support for **Traditional Chinese, Japanese, Korean, Vietnamese, and Hindi**. It involves a substantial localization effort (1,333 translation keys per language).
    -   **Assessment:** The delay in merging (approx. 2 weeks) suggests the maintainers may be conducting thorough reviews of the translation quality or are occupied with the release of v1.7.8.

🔗 [PR #21](https://github.com/gaoyangz77/rivonclaw/pull/21)

## 4. Community Hot Topics
There are no active discussions in the Issues section today. The most significant community contribution is currently residing in the Pull Request queue:

-   **Topic:** **Massive Internationalization Expansion (PR #21)**
    -   **Context:** Contributor `chinayin` has provided a comprehensive localization update.
    -   **Underlying Need:** There is a clear demand or contributor intent to make EasyClaw accessible to the Asian market (East and Southeast Asia). The addition of Hindi also signals a push into the South Asian demographic.
    -   **Activity:** While the PR has 0 explicit reactions/comments in the provided data snippet, its scope (5 languages, 1333 keys) makes it the most substantial pending change to the project.

## 5. Bugs & Stability
-   **No New Bugs Reported:** The Issue tracker shows 0 items updated in the last 24 hours.
-   **Platform Stability Note:** The release notes for v1.7.8 implicitly confirm that users have been experiencing **macOS Gatekeeper false positives** (identifying the app as "damaged"). While not a code bug, this is a distribution friction point that the maintainers have addressed via documentation in the latest release notes.

## 6. Feature Requests & Roadmap Signals
-   **Confirmed Roadmap:** **Multi-language Support**. PR #21 confirms that the roadmap includes aggressive localization.
-   **Prediction:** Once PR #21 is merged, the next minor or patch version (likely v1.7.9 or v1.8.0) will formally announce support for Japanese, Korean, Vietnamese, Hindi, and Traditional Chinese.
-   **Missing Signals:** No other feature requests or roadmap indicators appeared in the Issue tracker today.

## 7. User Feedback Summary
*Note: Due to 0 active issues, direct user feedback is inferred from the release notes.*

-   **Pain Point:** **Installation Friction on macOS.** Users attempting to install the app on macOS are encountering security blocks.
-   **Sentiment:** Neutral/Negative regarding installation experience, but likely positive regarding the prompt documentation of the fix.
-   **Silence:** The lack of open issues suggests that existing functionality is stable for current users, or the user base is currently small/quiet.

## 8. Backlog Watch
-   **PR #21:** This item has been open for approximately **16 days** (since March 18). Given the volume of code changes (translation files), a longer review is expected, but the maintainer should acknowledge the contributor's effort soon to prevent staleness.
-   **Stale Issues:** The complete absence of updated issues (0 open, 0 closed) suggests the backlog is either empty or inactive. Maintainers should monitor for new user reports that may be stuck in spam filters or missed due to low visibility.

</details>