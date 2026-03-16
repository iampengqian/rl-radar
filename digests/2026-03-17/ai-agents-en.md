# OpenClaw Ecosystem Digest 2026-03-17

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-03-16 22:06 UTC

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

# OpenClaw Project Digest: 2026-03-17

## 1. Today's Overview
OpenClaw is experiencing **extreme activity** with 500 issues and 500 pull requests updated in the last 24 hours, indicating a rapidly evolving codebase and highly engaged community. The project is in a **high-flux stabilization phase**, as evidenced by a high volume of regression reports (`bug:regression` tag) following recent releases (specifically `2026.3.11` through `2026.3.13`). While maintainers are merging fixes aggressively, the sheer volume of open PRs (398) against closed/merged ones (102) suggests a backlog in review capacity relative to the pace of contributions. No new stable releases were cut today, likely as the team focuses on stabilizing the current branch.

## 2. Releases
**No new releases** were recorded today. The project appears to be iterating on the `2026.3.x` release line. The prevalence of regression bugs in the latest versions suggests the team is prioritizing stability over pushing a new release tag.

## 3. Project Progress
Despite the lack of a new version tag, significant integration work and bug fixes were merged (closed PRs):
*   **Plugin & Extension Architecture:** Major refactoring was merged to remove the public `openclaw/extension-api` surface ([PR #48462](https://github.com/openclaw/openclaw/pull/48462)), moving host operations behind an injected API. This is a breaking change for external plugin developers, enforcing stricter boundaries.
*   **Context Compaction:** A fix for stabilizing `toolResult` trimming during context compaction was merged ([PR #44133](https://github.com/openclaw/openclaw/pull/44133)), addressing stability in long-running sessions.
*   **Channel Reliability:**
    *   **WhatsApp:** Fixes for implicit "reply-to-bot" mentions were merged ([PR #48494](https://github.com/openclaw/openclaw/pull/48494)), restoring reliable mention detection in groups.
    *   **Web UI:** Silent `NO_REPLY` tokens are now suppressed in webchat ([PR #16361](https://github.com/openclaw/openclaw/pull/16361)), cleaning up the user interface.

## 4. Community Hot Topics
The community is focused on **channel stability** and **AI model flexibility**.
1.  **DingTalk Onboarding ([Issue #26534](https://github.com/openclaw/openclaw/issues/26534) - 72 comments):** Users are requesting DingTalk as a first-class option in the setup wizard. The underlying need is smoother enterprise deployment in Asian markets where DingTalk is dominant.
2.  **Platform Parity ([Issue #75](https://github.com/openclaw/openclaw/issues/75) - 39 comments):** The demand for Linux and Windows desktop apps remains high (62 👍). Users want feature parity with the macOS client, specifically for local development and server-side control interfaces.
3.  **Vision Capabilities ([Issue #28744](https://github.com/openclaw/openclaw/issues/28744) - 18 comments):** Users are frustrated that image inputs (specifically in Feishu/DingTalk) are not passed to vision-capable models like MiniMax-Vision. This highlights a gap in multi-modal support across the plugin ecosystem.

## 5. Bugs & Stability
The project is currently suffering from **instability in the Gateway and CLI components**, with multiple high-priority regressions.
*   **Critical - Gateway Crash Loop:**
    *   [Issue #48205](https://github.com/openclaw/openclaw/issues/48205): The Gateway restarts every ~50 minutes with "reason=none".
    *   [Issue #45232](https://github.com/openclaw/openclaw/issues/45232): Control UI stuck on "pairing required" after upgrading to 2026.3.13.
*   **Critical - CLI Handshake Failures:**
    *   [Issue #48167](https://github.com/openclaw/openclaw/issues/48167): CLI commands fail with `gateway closed (1000)` while the gateway runs fine. This effectively bricks CLI control for many users.
    *   [Issue #46892](https://github.com/openclaw/openclaw/issues/46892): The 3-second WebSocket handshake timeout is too aggressive for busy event loops.
*   **High - Auth & Provider Issues:**
    *   [Issue #23538](https://github.com/openclaw/openclaw/issues/23538): Anthropic `setup-token` auth returns 401 despite being accepted during setup.
    *   [Issue #47079](https://github.com/openclaw/openclaw/issues/47079): Mistral API returns 422 due to the adapter sending incompatible `max_completion_tokens`.
*   **Fixes in Progress:** Several open PRs target these handshake issues (e.g., [PR #48512](https://github.com/openclaw/openclaw/pull/48512) for runner idle flush, [PR #47901](https://github.com/openclaw/openclaw/pull/47901) for OAuth fallback).

## 6. Feature Requests & Roadmap Signals
*   **Middleware Hooks ([Issue #20416](https://github.com/openclaw/openclaw/issues/20416)):** Strong request (14 comments) to convert `llm_input` / `llm_output` hooks from "observational" to "mutating." This would enable advanced PII redaction and guardrails directly inside the agent flow.
*   **MCP Client Support ([Issue #29053](https://github.com/openclaw/openclaw/issues/29053)):** Request for native Model Context Protocol (MCP) client support. As MCP becomes an industry standard, this is a likely candidate for future integration to ensure OpenClaw remains interoperable with external tool servers.
*   **Linux/Windows Apps ([Issue #75](https://github.com/openclaw/openclaw/issues/75)):** Continued high demand suggests desktop expansion is a critical roadmap item for user adoption.

## 7. User Feedback Summary
*   **Pain Points:** Users are struggling with **deployment fragility**. The local gateway mechanism, central to OpenClaw's architecture, is currently prone to timing out or crashing, causing frustration ("CLI completely dead").
*   **Configuration Drift:** Several users reported that configuration changes (e.g., `model.primary` in [Issue #9754](https://github.com/openclaw/openclaw/issues/9754)) are ignored after restarts, suggesting underlying issues with config persistence.
*   **Use Cases:** Heavy usage in **enterprise messaging** (Slack, WhatsApp Web, DingTalk, Feishu) is evident. Users rely on OpenClaw for automated replies and cron-driven tasks, but "No active listener" errors (e.g., [Issue #30177](https://github.com/openclaw/openclaw/issues/30177)) are undermining trust in these automations.

## 8. Backlog Watch
*   **Sandbox Execution Failure ([Issue #45108](https://github.com/openclaw/openclaw/issues/45108)):** A regression causing `python3: not found` in the sandbox environment was reported 3 days ago. It blocks code execution use cases and awaits a confirmed fix.
*   **Matrix E2EE ([Issue #7649](https://github.com/openclaw/openclaw/issues/7649)):** The inability for the bot to verify its own account for E2EE (open since Feb 2026) remains a blocker for privacy-focused Matrix deployments.
*   **Reminder/Time Awareness ([Issue #10841](https://github.com/openclaw/openclaw/issues/10841)):** The agent's inability to accurately tell time (a fundamental limitation of LLMs) continues to break "remind me in X minutes" workflows. This requires a system-level injection of current time into the context, which is currently missing or failing.

---

## Cross-Ecosystem Comparison

# Open-Source AI Agent Ecosystem Analysis Report
**Date:** 2026-03-17

## 1. Ecosystem Overview
The open-source AI agent landscape is experiencing a period of **hyper-velocity and architectural maturation**, moving rapidly from single-turn chatbots toward complex, multi-modal autonomous systems. Projects are aggressively competing to integrate diverse communication channels (WhatsApp, Discord, DingTalk), native voice capabilities, and standardized tool protocols (MCP). However, this rapid expansion has introduced significant **stability friction**, with most major projects currently battling regressions in gateway connectivity, containerization (Docker/Podman), and context management (memory compaction). The ecosystem is effectively in a "stabilization sprint," trying to harden agentic frameworks for reliable, always-on production use.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Assessment |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | Stabilizing (No new release) | 🟡 **High Flux** (Massive backlog, critical regressive bugs) |
| **NanoBot** | 188 | 253 | **v0.1.4.post5** (Released) | 🟢 **Excellent** (Low open ratio, high responsiveness) |
| **ZeroClaw** | High | 35 | **v0.4.2** (Released) | 🟠 **High Velocity/Risk** (10 releases, broken Docker binaries) |
| **PicoClaw** | 22 | 76 | **v0.2.3-nightly** | 🟢 **Active** (Architectural refactoring) |
| **NanoClaw** | 21 | 50 | Pending (Critical fixes merging) | 🟢 **Active & Healthy** (Security focused) |
| **IronClaw** | 21 | 50 | Pending (v0.19.0 staged) | 🟢 **Healthy** (Active bug bash, CI/CD mature) |
| **LobsterAI** | High | 12 | **v2026.3.16** (Released) | 🟡 **Mixed** (Aggressive fixes vs. usability gap) |
| **CoPaw** | 50 | 50 | Stabilizing (0.0.7.post1) | 🟡 **Growing Pains** (Memory compaction bugs) |
| **TinyClaw** | Low | 3+ | **v0.0.14** (Released) | 🟢 **Focused** (Internal scheduling & Teams features) |
| **Moltis** | Low | 3 | No Release | 🟢 **Stable** (Docker/Tooling focus) |
| **ZeptoClaw** | Low | 2 | No Release | 🟡 **Active Dev** (Protocol expansion) |
| **EasyClaw** | Low | 0 | **v1.7.0** (Released) | 🟡 **Maintenance** (Windows regressions) |

## 3. OpenClaw's Position

**Advantages vs. Peers:**
OpenClaw remains the **ecosystem reference implementation**, evidenced by its massive activity volume (500+ issues/PRs daily), which dwarfs most competitors. Its plugin architecture is becoming more sophisticated with the move to injected APIs (PR #48462), appealing to enterprise developers who need strict boundaries. The explicit focus on "enterprise messaging" (DingTalk, Feishu) positions it strongly for Asian markets compared to Western-centric projects like NanoBot.

**Technical Approach Differences:**
Unlike NanoBot or TinyClaw, which are iterating on internal agent loops and multi-agent teams, OpenClaw is heavily focused on **infrastructure reliability (Gateway/CLI)** and **platform parity** (Linux/Windows apps). While ZeroClaw pursues aggressive feature velocity (SQLite, Caching), OpenClaw appears to be in a **consolidation phase**, prioritizing the stabilization of its core gateway architecture over flashy new features.

**Community Size:**
OpenClaw has the largest but also the most stressed community. The ratio of open PRs to merged ones suggests a review bottleneck that doesn't exist in smaller, more agile projects like IronClaw or NanoClaw.

## 4. Shared Technical Focus Areas

1.  **Model Context Protocol (MCP) Adoption:**
    *   **Trend:** MCP is rapidly becoming the standard for tool integration.
    *   **Projects:** Requested in **OpenClaw** (#29053), **NanoBot** (#359), **ZeroClaw** (#3153), and **CoPaw** (#280).
    *   **Need:** Uniform tool configuration across agents and channels.

2.  **Containerization & Deployment Hardening:**
    *   **Trend:** Users are shifting from local execution to Docker/Podman, exposing environment bugs.
    *   **Projects:** **ZeroClaw** (Broken binaries), **ZeptoClaw** (Podman permissions), **NanoClaw** (Podman requests), **Moltis** (Node/NPX in Docker).

3.  **Context & Memory Management:**
    *   **Trend:** Moving from infinite context windows to active compaction/trimming to manage costs and errors.
    *   **Projects:** **OpenClaw** (ToolResult trimming), **CoPaw** (Memory compaction bugs), **NanoClaw** (Persistent memory).

4.  **Security & Permission Granularity:**
    *   **Trend:** Tension between "Autonomous Agents" and "Safe Chatbots."
    *   **Projects:** **ZeroClaw** (Users demanding "God Mode"), **PicoClaw** (Disabling `exec`), **NanoClaw** (Security disclosures), **OpenClaw** (Middleware hooks for PII).

## 5. Differentiation Analysis

| Segment | Projects | Key Differentiator |
| :--- | :--- | :--- |
| **Enterprise Stalwarts** | **OpenClaw, LobsterAI** | Focus on compliance, enterprise IM (DingTalk/Feishu), and complex channel integrations. High configuration complexity. |
| **Lightweight/Local-first** | **NanoBot, PicoClaw, ZeptoClaw** | Focus on running on consumer hardware (RTX cards), local LLMs (Ollama), and minimal resource footprints. |
| **Research/Multi-Agent** | **TinyClaw, NanoBot** | Experimentation with "Teams" of agents, scheduling, and autonomous loops rather than just reactive chat. |
| **Cloud/Platform Native** | **IronClaw, NanoClaw** | Tight integration with cloud providers (AWS Bedrock, Vertex AI) and modern observability stacks (Logfire). |
| **Security Hardened** | **ZeroClaw, NanoClaw** | Focus on sandboxing (bwrap), permission escalation prevention, and audit trails. |

## 6. Community Momentum & Maturity

*   **Tier 1 (High Velocity / High Risk):** **OpenClaw** and **ZeroClaw** are moving fastest but carrying significant technical debt. OpenClaw is struggling with gateway stability, while ZeroClaw is releasing broken binaries. This indicates "growing pains" where feature velocity outpaces QA.
*   **Tier 2 (Rapid Iteration / Healthy):** **NanoBot**, **IronClaw**, and **NanoClaw** represent the "sweet spot" of high activity but manageable bug counts. They are responsive to community feedback and merging fixes faster than they accumulate them.
*   **Tier 3 (Stabilizing / Specialized):** **TinyClaw**, **PicoClaw**, and **CoPaw** are maturing into specific niches (Teams/Scheduling, Browser Automation, Memory). Their communities are smaller but highly focused on specific architectural improvements.

## 7. Trend Signals

*   **The "Autonomy vs. Safety" Crackup:** Across **ZeroClaw**, **OpenClaw**, and **TinyClaw**, there is vocal user frustration regarding safety guardrails. Users want agents that can execute code and install packages without constant approval ("God Mode"). Projects that solve this via smart permissioning (e.g., trusted folders) will win power users.
*   **OAuth is the New Critical Path:** Almost every major project (**OpenClaw**, **NanoClaw**, **IronClaw**, **LobsterAI**) is currently battling OAuth token refresh bugs. Reliable background authentication is now the primary blocker for "set-and-forget" always-on agents.
*   **Voice & Multimodal as Default:** The request for Voice (TTS/ASR) is shifting from "nice to have" to "core requirement" (seen in **PicoClaw** #1648 and **NanoClaw** #974).
*   **Rise of the "Desktop Aggregator":** Users are asking for unified desktop apps (Linux/Windows) that wrap these agents (**OpenClaw** #75, **EasyClaw**). The CLI is becoming insufficient for the mainstream user base.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date:** 2026-03-17
**Repository:** [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. Today's Overview
NanoBot demonstrates exceptional project health with extremely high activity levels, processing **188 issues** and **253 PRs** in the last 24 hours alone. The project is in a mature, rapid-iteration phase following the release of `v0.1.4.post5`. This maintenance release focused less on new features and more on "careful refinement," smoothing out edges and integrating work from 57 merged PRs and 29 new contributors. The low open-issue ratio (22 open vs. 166 closed) suggests a highly responsive maintainer team and effective community management.

## 2. Releases
### **v0.1.4.post5**
*   **Focus:** Stability, refinement, and trustworthiness.
*   **Summary:** A post-release update emphasizing quality-of-life improvements over new spectacle features.
*   **Highlights:** Integrated 57 PRs; welcomed 29 new contributors.
*   **Notes:** Described by maintainers as a release that makes the project "feel more trustworthy in daily use" by smoothing rough edges.

## 3. Project Progress
Today's development activity was dominated by infrastructure improvements, provider extensibility, and bug fixes.

*   **Extensibility & Providers:** Significant work on decoupling providers. PR [#2116](https://github.com/HKUDS/nanobot/pull/2116) introduced `extras` config for dynamic custom providers without code changes, and [#2121](https://github.com/HKUDS/nanobot/pull/2121) added ordered multi-model provider fallback for resilience.
*   **Channel Support:** The ecosystem is expanding with a new Microsoft Teams channel ([#2081](https://github.com/HKUDS/nanobot/pull/2081)) featuring hardened auth, and fixes for Telegram duplicates ([#2110](https://github.com/HKUDS/nanobot/pull/2110)).
*   **Agent Architecture:** Experimental implementations for Multi-Agent handoff ([#2108](https://github.com/HKUDS/nanobot/pull/2108)) and timezone-aware context reading ([#2083](https://github.com/HKUDS/nanobot/pull/2083)) are in progress.
*   **Security:** PR [#1940](https://github.com/HKUDS/nanobot/pull/1940) proposed sandboxing exec calls with `bwrap` (bubblewrap) to enhance workspace isolation security.

## 4. Community Hot Topics
*   **DeepSeek Provider Configuration ([#336](https://github.com/HKUDS/nanobot/issues/336), 20 comments):** Users are struggling with LiteLLM integration for DeepSeek, specifically regarding "LLM Provider NOT provided" errors. This highlights a need for clearer documentation on third-party provider configuration.
*   **Web Search Usage ([#430](https://github.com/HKUDS/nanobot/issues/430), 14 comments):** High engagement on how to effectively utilize the `web_search` skill, indicating users are eager to move beyond basic chat to live-data retrieval.
*   **Local LLM Integration ([#855](https://github.com/HKUDS/nanobot/issues/855), 10 comments):** Users are actively testing NanoBot on consumer hardware (e.g., RTX 3050) with LM Studio/Ollama. Discussions focus on the reliability of smaller models (4B/8B) and the necessity of stronger models for tool use.
*   **Telegram Double Response ([#1692](https://github.com/HKUDS/nanobot/issues/1692), 8 comments, 4 👍):** A high-impact UX bug where the bot sends both a streaming draft and a final message. A fix is currently pending in PR [#2110](https://github.com/HKUDS/nanobot/pull/2110).
*   **Skill Management ([#1932](https://github.com/HKUDS/nanobot/issues/1932), 8 comments):** Users request the ability to "disable" skills temporarily rather than deleting them, seeking more flexible configuration.

## 5. Bugs & Stability
*   **High Severity - Agent Loops & Reliability:**
    *   **"Reached 20 iterations" ([#659](https://github.com/HKUDS/nanobot/issues/659)):** Agents halting mid-task in complex reasoning chains.
    *   **Tool Pretending ([#594](https://github.com/HKUDS/nanobot/issues/594)):** LLMs "pretending" to execute Python code/SQL rather than actually running it, a critical reliability issue for autonomous agents.
*   **Medium Severity - Integration Issues:**
    *   **Telegram Duplicate Messages ([#1692](https://github.com/HKUDS/nanobot/issues/1692)):** Fixed in theory by [#2110](https://github.com/HKUDS/nanobot/pull/2110), currently a top user complaint.
    *   **WeCom Channel ([#1988](https://github.com/HKUDS/nanobot/issues/1988)):** Configuration not generating correctly, blocking enterprise users on WeChat.
    *   **Proxy Configuration ([#785](https://github.com/HKUDS/nanobot/issues/785)):** Telegram channel fails to start when a proxy is set.
*   **Fixes in Progress:** Hardening for IMAP polling retries ([#2122](https://github.com/HKUDS/nanobot/pull/2122)) and subagent role saving fixes ([#2111](https://github.com/HKUDS/nanobot/pull/2111)).

## 6. Feature Requests & Roadmap Signals
*   **Multi-Agent Routing ([#2072](https://github.com/HKUDS/nanobot/issues/2072)):** Strong demand for native support of multi-agent workflows similar to OpenClaw, currently being addressed by the community in PR [#2108](https://github.com/HKUDS/nanobot/pull/2108).
*   **SearXNG Integration ([#405](https://github.com/HKUDS/nanobot/issues/405)):** Request for privacy-focused, free search alternatives.
*   **OAuth & Aggregator Support ([#397](https://github.com/HKUDS/nanobot/issues/397)):** Users want easier integration with platforms like RouterWay and OAuth-based services (GitHub Copilot, Gemini).
*   **MCP Support ([#359](https://github.com/HKUDS/nanobot/issues/359)):** Continued demand for Model Context Protocol tool support, aligning with broader industry standards.

## 7. User Feedback Summary
*   **Pain Points:** Users find the implicit mapping of model names to providers confusing ([#286](https://github.com/HKUDS/nanobot/issues/286)). Configuring LiteLLM prefixes for non-official APIs is frustrating ([#384](https://github.com/HKUDS/nanobot/issues/384)).
*   **Use Cases:** Users are successfully deploying NanoBot locally on mid-range hardware for personal assistance. However, reliability issues with file operations and tool execution (hallucinating tool use) remain a barrier to "set-and-forget" usage.
*   **Sentiment:** Generally positive regarding the project's lightweight nature and potential, but currently bogged down by "growing pains" related to provider diversity and agent reliability.

## 8. Backlog Watch
*   **Interactive Configuration Wizard ([#2018](https://github.com/HKUDS/nanobot/issues/2018)):** A high-value enhancement to replace manual JSON editing with an interactive CLI (`nanobot onboard`). This needs review/merge priority as it significantly lowers the barrier to entry.
*   **Native Multi-Agent Support ([#2072](https://github.com/HKUDS/nanobot/issues/2072)):** A strategic feature request with active development in PR [#2108](https://github.com/HKUDS/nanobot/pull/2108). Maintainer attention is needed to guide the architectural implementation.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-03-17

## 1. Today's Overview
ZeroClaw exhibits **extremely high development velocity** with a rapid release cadence (10 releases, culminating in v0.4.2) and significant merge activity (35 PRs closed) in the last 24 hours. The project is in a major evolution phase, transitioning from a monolithic structure to a more modular architecture while aggressively expanding channel integrations (X/Twitter, Mochat) and enterprise features (Two-tier caching, SQLite FTS5). However, this speed is introducing **stability friction**, evidenced by a high volume of regression bugs related to Docker binaries, daemon lifecycle, and configuration backward compatibility.

## 2. Releases

### **v0.4.2 (Stable)**
*   **Highlights**:
    *   **Performance**: Introduced a **two-tier response cache** and multi-provider token tracking to optimize LLM costs and latency.
    *   **Infrastructure**: Added **adaptive heartbeat** with health metrics.
    *   **Providers**: Native support for **VolcEngine/ByteDance** gateway; closed integration gaps for AiHubMix and SiliconFlow.
*   **Migration Note**: Users upgrading from older versions (pre-0.3.x) must manually update `config.toml` to include new required fields (e.g., `data_retention`, `cloud_ops`) or the daemon will crash.

### **v0.4.2-beta.281**
*   **Channels**: Added **X/Twitter** and **Mochat** integrations.
*   **Voice**: Support for `initial_prompt` in transcription config to improve proper noun recognition.

### **v0.4.0 (Previous Stable)**
*   **Architecture**: Shifted to **SQLite backend with FTS5** for sessions; added secure **HMAC-SHA256 node transport**.
*   **Agent**: Surface tool call failure reasons; added autonomous knowledge-accumulating agent packages.

## 3. Project Progress

**Merged/Closed Work (35 PRs):**
*   **New Channels**: Merged integrations for **X/Twitter** and **Mochat** ([PR #3735](https://github.com/zeroclaw-labs/zeroclaw/pull/3735)).
*   **Security Fixes**:
    *   Fixed a **self-escalation vulnerability** where agents could rewrite `config.toml` to bypass `always_ask` permissions (implied fix in security hardening).
    *   Fixed **Vision poisoning** in conversation history for non-vision providers ([PR #3734](https://github.com/zeroclaw-labs/zeroclaw/pull/3734)).
    *   Fixed WebSocket authentication by passing the bearer token in the sub-protocol ([PR #3641](https://github.com/zeroclaw-labs/zeroclaw/pull/3641)).
*   **Stability**:
    *   Fixed **"Plain URL" parsing bug** that caused the agent to hallucinate `curl` commands for regular text URLs ([PR #3694](https://github.com/zeroclaw-labs/zeroclaw/pull/3694)).
    *   Fixed **Markdown rendering in QQ channel** ([PR #3732](https://github.com/zeroclaw-labs/zeroclaw/pull/3732)).
    *   Added Docker/Podman restart documentation ([PR #3639](https://github.com/zeroclaw-labs/zeroclaw/pull/3639)).

## 4. Community Hot Topics

1.  **"Security Paralysis" vs. Usability** ([Issue #1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) - 39 comments):
    *   *Topic*: A highly active thread where users complain that ZeroClaw's security defaults are too restrictive, effectively turning the agent into a "chatbot" that refuses to execute commands (like installing packages).
    *   *Underlying Need*: Users demand a clear "God Mode" or "Unrestricted Mode" for local/trusted environments. The current granularity of `always_ask` is seen as a hurdle to autonomous operation.
2.  **Broken Docker Images** ([Issue #3687](https://github.com/zeroclaw-labs/zeroclaw/issues/3687) / [Issue #3714](https://github.com/zeroclaw-labs/zeroclaw/issues/3714)):
    *   *Topic*: Reports of the official Docker image shipping a "dummy binary" (292KB vs 9MB) or exiting immediately on ARM64.
    *   *Underlying Need*: Reliable containerization is critical for the user base; recent CI/CD changes seem to have broken artifact generation.
3.  **MCP Support Consistency** ([Issue #3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153)):
    *   *Topic*: Users want Model Context Protocol (MCP) configs to work uniformly across `channels` and the `agent` subcommand.

## 5. Bugs & Stability

**Critical (S0/S1):**
*   **Dummy Binary in Docker** ([Issue #3687](https://github.com/zeroclaw-labs/zeroclaw/issues/3687)): Latest image is essentially empty. *Status: Active discussion.*
*   **Config Backward Compatibility** ([Issue #3684](https://github.com/zeroclaw-labs/zeroclaw/issues/3684)): v0.3.4+ crashes if `config.toml` is missing new fields (`data_retention`, etc.).
*   **Headless Browser Failure in Service Mode** ([Issue #3584](https://github.com/zeroclaw-labs/zeroclaw/issues/3584)): Browser tools work in `daemon` mode but fail when running as a systemd service (likely environment/display var issue).
*   **GLIBC_2.39 Not Found** ([Issue #3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070)): Binary requires glibc 2.39, breaking compatibility with standard Ubuntu/Debian stable releases.
*   **Fix PR**: [PR #3741](https://github.com/zeroclaw-labs/zeroclaw/pull/3741) attempts to fix Docker build cache issues.

**Moderate (S2/S3):**
*   **Interactive Onboarding Broken** ([Issue #3658](https://github.com/zeroclaw-labs/zeroclaw/issues/3658)): Auto-generates config without prompts. *Fix: [PR #3740](https://github.com/zeroclaw-labs/zeroclaw/pull/3740).*
*   **Vision Error History Poisoning** ([Issue #3674](https://github.com/zeroclaw-labs/zeroclaw/issues/3674)): Sending an image to a non-vision model permanently breaks the conversation history. *Fix: [PR #3734](https://github.com/zeroclaw-labs/zeroclaw/pull/3734) merged.*

## 6. Feature Requests & Roadmap Signals

*   **Multi-Crate Workspace** ([Issue #2263](https://github.com/zeroclaw-labs/zeroclaw/issues/2263)): Formalizing the split of the monolithic crate to improve compile times. Likely a major focus for the next sprint.
*   **Full Docker Image** ([Issue #3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)): Request for a "kitchen-sink" Docker image with all features (like WhatsApp) enabled by default, trading memory for ease of use.
*   **Read_Skill Tool for Compact Mode** ([PR #3739](https://github.com/zeroclaw-labs/zeroclaw/pull/3739)): A proposed mechanism to help lighter LLMs (like Gemini Flash) load skills reliably without complex shell commands.
*   **Local Provider Aliases** ([Issue #3059](https://github.com/zeroclaw-labs/zeroclaw/issues/3059)): Better support for Aliyun Bailian coding plans.

## 7. User Feedback Summary

*   **Pain Point - Complexity vs. Security**: Users feel the project is over-indexing on security at the expense of usability. One user explicitly stated, "You are so safe that this bot can only be a chatbot... I have to install everything manually." ([Issue #1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478)).
*   **Pain Point - Upgrade Friction**: The transition from v0.3 to v0.4 is rough. Users are experiencing crashing daemons and missing web dashboards after upgrades, requiring manual config surgery.
*   **Positive Signal - Feature Velocity**: The addition of Twitter/X, SQLite, and advanced caching is seen as high-value, keeping users engaged despite the stability issues.

## 8. Backlog Watch

*   **Agent Permission Escalation** ([Issue #2400](https://github.com/zeroclaw-labs/zeroclaw/issues/2400)): A security flaw where the agent can edit its own config to grant itself higher permissions. This is a critical trust issue that needs a design fix (e.g., immutable config sections or signed configs).
*   **WebUI Agent Connection Error** ([Issue #2910](https://github.com/zeroclaw-labs/zeroclaw/issues/2910)): Open for 11 days with 5 comments, users still reporting "Connection error" in v0.1.8.
*   **Nextcloud Support** ([Issue #3552](https://github.com/zeroclaw-labs/zeroclaw/issues/3552)): Still flagged as broken; a fix is proposed in [PR #3737](https://github.com/zeroclaw-labs/zeroclaw/pull/3737) but needs review.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-03-17

## 1. Today's Overview
PicoClaw exhibits **extremely high development velocity** with 76 pull requests updated in the last 24 hours (32 merged/closed) and 22 active issues. The project is undergoing a significant architectural transformation from a monolithic agent loop to a modular, event-driven system. The release of **v0.2.3-nightly** indicates preparation for a stable release, while discussions around TTS/ASR support and browser automation suggest an expansion of the project's scope into a multi-modal, autonomous AI assistant platform.

## 2. Releases
### **v0.2.3-nightly.20260316.f2addff0**
- **Status**: Automated Nightly Build (Use with caution).
- **Changes**: Compares against `main` branch. Includes foundational work for the new event-driven agent architecture and numerous bug fixes targeting provider stability.
- **Migration Note**: As this is a nightly build, production environments should stick to stable tags unless testing specific features.

## 3. Project Progress
Significant advancements were merged today, focusing on stability and extensensible architecture:
- **Agent Architecture**: **PR #1636** (SubTurn implementation) and **PR #1490** (Context boundary detection) were pushed, advancing the "Agent Refactor" initiative to support hierarchical execution and better context management.
- **Tooling Security**: **PR #1627** introduced a configuration option to completely disable the `exec` tool, addressing security hardening requirements for restricted environments.
- **Channel Reliability**: **PR #1349** (QQ Channel attachments) and **PR #1536** (Media tempdir fixes) were merged, improving file handling across different chat platforms.
- **Provider Compatibility**: **PR #1570** fixed a critical logic error where cron tasks were echoing text instead of triggering agent processing. **PR #1645** improved security by masking bot tokens in logs.

## 4. Community Hot Topics
The community is actively debating architectural changes and new capabilities:
- **[Issue #1316] Agent Refactor**: The most active discussion (11 comments) centers on redesigning the agent loop to be event-driven. This signals a strong demand from power users for **observability** (hooks, interrupts) to integrate PicoClaw into larger automation workflows.
  - [Link](https://github.com/sipeed/picoclaw/issues/1316)
- **[Issue #293] Autonomous Browser Operations**: A high-priority roadmap item (👍 4) discussing browser automation. Users want the AI to navigate the web like a human, suggesting a shift towards "Agentic Workflows" rather than simple chat responses.
  - [Link](https://github.com/sipeed/picoclaw/issues/293)
- **[Issue #1648] TTS & ASR Support**: A new proposal to add Text-to-Speech and Speech Recognition. This highlights the need for **Voice Mode** to compete with commercial AI assistants.
  - [Link](https://github.com/sipeed/picoclaw/issues/1648)

## 5. Bugs & Stability
Several stability issues regarding provider configuration and long-running processes were identified:
1.  **[Critical] Service Crash Loop [Issue #1650]**: Users report PicoClaw restarting indefinitely on Feishu channel.
    - Link: [Issue #1650](https://github.com/sipeed/picoclaw/issues/1650)
2.  **[High] Config/Provider Inheritance Failure [Issue #1635]**: `model_list` entries fail to inherit `api_key`/`api_base` from the parent provider config, causing deployment friction.
    - Link: [Issue #1635](https://github.com/sipeed/picoclaw/issues/1635)
3.  **[Medium] Anthropic Model ID 404 [Issue #1624]**: Normalizing dots to dashes (e.g., `claude-sonnet-4.6` vs `4-6`) is broken in some provider paths. **PR #1626** is open to fix this.
    - Link: [Issue #1624](https://github.com/sipeed/picoclaw/issues/1624) | [PR #1626](https://github.com/sipeed/picoclaw/pull/1626)
4.  **[Medium] Token Budget Exhaustion [Issue #1641]**: Agent fails after running for several days with `max_tool_iterations` errors, pointing to potential memory/state leaks in long-running sessions.

## 6. Feature Requests & Roadmap Signals
- **Voice Capabilities**: Strong signal for integrating ASR/TTS directly into channels (Issue #1648).
- **Security Controls**: Demand for granular tool disabling (PR #1627) and masking sensitive data in logs (PR #1645).
- **External Orchestration**: Requests for structured event streams (Issue #1475) and HTTP ingress endpoints (PR #1657) indicate PicoClaw is being used as a backend engine for other applications.
- **Prediction**: The next stable release will likely focus on **Agent Observability** (hooks/events) and **Multi-modal** (Voice/File) reliability.

## 7. User Feedback Summary
Users appreciate the rapid feature iteration but are experiencing **configuration complexity** growing pains.
- **Pain Point**: The "magic values" in environment variables and provider inheritance logic (Issue #1638, #1635) make self-hosting difficult.
- **Pain Point**: Stability on low-resource devices (e.g., Linux boards) is hindered by network resets (Issue #1653).
- **Positive**: High engagement in the "Agent Refactor" suggests advanced users are excited about the new extensibility capabilities.

## 8. Backlog Watch
- **[Issue #39] `picoclaw doctor` command**: Open since Feb 11, this feature request for a diagnostic tool is critical given the rising number of configuration-related bugs (API keys, models, paths). It needs maintainer attention to improve user onboarding experience.
  - Link: [Issue #39](https://github.com/sipeed/picoclaw/issues/39)
- **[PR #751] Gateway WebSocket Interface**: Open since late Feb, this PR implements a crucial WebSocket interface for OpenClaw compatibility. It requires a final review/merge to unblock gateway integrations.
  - Link: [PR #751](https://github.com/sipeed/picoclaw/pull/751)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-17

## 1. Today's Overview
NanoClaw is experiencing **intense development velocity** with 21 merged/closed PRs in the last 24 hours against 29 open, indicating a highly active maintenance cycle. The project is in a **stabilization and expansion phase**, with contributors simultaneously fixing critical bugs (OAuth refresh, Chromium crashes) and proposing significant feature expansions (AWS Bedrock, persistent memory, new communication channels). Security has emerged as a focal point today with two responsible disclosure requests and a prompt injection mitigation PR. No new releases were cut, suggesting the team is aggregating fixes for a substantial version bump.

## 2. Releases
**No new releases** were published today. The last release tag is absent from the provided data. Given the volume of critical fixes merged (OAuth token refresh #1102, Chromium crash #1157, remote-control exit #1133), a patch release is anticipated soon.

## 3. Project Progress

### Merged/Closed (21 PRs)
Key advancements merged today:

| PR | Area | Impact |
|---|---|---|
| [#1133](https://github.com/qwibitai/nanoclaw/pull/1133) | Remote Control | Fixed immediate exit by auto-accepting the enablement prompt |
| [#1153](https://github.com/qwibitai/nanoclaw/pull/1153) | Skills | Google Tasks skill localized from marketplace |
| [#1140](https://github.com/qwibitai/nanoclaw/pull/1140) | Observability | Added Logfire APM integration + external services documentation |
| [#1146](https://github.com/qwibitai/nanoclaw/pull/1146) | Skills | WAIaaS crypto wallet skill (EVM + Solana) merged |

Multiple iterations of fixes (#1154, #1155, #1156, #1157, #1158, #1159, #927, #995) suggest active refinement of browser stability and agent response relay mechanisms.

### Open PRs Advancing Features (29)
- **[#1102](https://github.com/qwibitai/nanoclaw/pull/1102)** — OAuth auto-refresh (addresses critical #730)
- **[#1151](https://github.com/qwibitai/nanoclaw/pull/1151)** — Native AWS Bedrock support
- **[#1035](https://github.com/qwibitai/nanoclaw/pull/1035)** — Security: WebFetch/WebSearch output sanitization
- **[#846](https://github.com/qwibitai/nanoclaw/pull/846)** — GitHub CLI skill integration
- **[#974](https://github.com/qwibitai/nanoclaw/pull/974)** — Discord image/voice support

## 4. Community Hot Topics

| Item | Engagement | Underlying Need |
|---|---|---|
| [#730](https://github.com/qwibitai/nanoclaw/issues/730) — OAuth token expiry | 4 comments | Reliable background daemon operation without manual re-auth |
| [#957](https://github.com/qwibitai/nanoclaw/issues/957) — Podman support | 4 comments, 4 👍 | Docker Desktop alternatives (licensing/performance on macOS/Linux) |
| [#1088](https://github.com/qwibitai/nanoclaw/issues/1088) — 27GB log file | 2 comments | Production-ready log rotation; resource management for long-running deployments |
| [#1080](https://github.com/qwibitai/nanoclaw/issues/1080) — Sandbox migration friction | 2 comments | Better onboarding docs; pre-configured sandbox templates with common mounts |
| [#29](https://github.com/qwibitai/nanoclaw/issues/29) — Signal channel | 3 comments, 2 👍 | Privacy-focused messaging integration following Telegram/Slack/Discord patterns |

**Analysis:** Users are pushing NanoClaw into **always-on production deployments**, surface friction around authentication persistence, log management, and sandbox configuration. The Podman and Signal requests reflect a privacy/autonomy-oriented user base.

## 5. Bugs & Stability

### Critical (High Priority)
| Issue | Description | Status |
|---|---|---|
| [#1142](https://github.com/qwibitai/nanoclaw/issues/1142) | SDK pinned to v0.2.34 causes outdated default model | Open — needs version bump |
| [#730](https://github.com/qwibitai/nanoclaw/issues/730) | OAuth token expires overnight, 401 errors | Fix in [#1102](https://github.com/qwibitai/nanoclaw/pull/1102) (open) |
| [#1067](https://github.com/qwibitai/nanoclaw/issues/1067) | Launchd race condition with Apple Container runtime | Open |
| [#1150](https://github.com/qwibitai/nanoclaw/issues/1150) | Container error logs leak full user prompts | Open — security concern |

### Medium
| Issue | Description | Status |
|---|---|---|
| [#698](https://github.com/qwibitai/nanoclaw/issues/698) | Agent cannot determine day of week from ISO timestamps | Open — needs system prompt context |
| [#1143](https://github.com/qwibitai/nanoclaw/issues/1143) | Skills docs reference non-existent `/data/env` path | Open — documentation fix needed |

### Fixed/Closed Today
- [#1088](https://github.com/qwibitai/nanoclaw/issues/1088) — Log rotation (resolved with workaround guidance)
- [#1080](https://github.com/qwibitai/nanoclaw/issues/1080) — Sandbox configuration question answered

## 6. Feature Requests & Roadmap Signals

| Feature Request | Signals | Next Version Likelihood |
|---|---|---|
| **Podman support** ([#957](https://github.com/qwibitai/nanoclaw/issues/957)) | 4 👍, well-articulated rationale | Medium — documentation-only change |
| **Signal messaging** ([#29](https://github.com/qwibitai/nanoclaw/issues/29)) | 2 👍, follows established pattern | Medium — community contribution likely |
| **Learning system epic** ([#907](https://github.com/qwibitai/nanoclaw/issues/907)) | Maintainer-authored, comprehensive spec | High — appears to be official roadmap item |
| **MemOS persistent memory** ([#1130](https://github.com/qwibitai/nanoclaw/issues/1130)) | Opt-in skill proposal, self-hosted | Medium — waiting for maintainer feedback |
| **Google Workspace CLI** ([#1122](https://github.com/qwibitai/nanoclaw/issues/1122)) | Full skill implementation proposed | High — leverages existing CLI tool |
| **OpenAI API/local models** ([#1092](https://github.com/qwibitai/nanoclaw/issues/1092), [#1015](https://github.com/qwibitai/nanoclaw/issues/1015)) | Multiple users requesting | Medium — architectural consideration |

**Prediction:** Next release will prioritize **OAuth auto-refresh (#1102)**, **Chromium stability (#1157)**, and **SDK version bump (#1142)** as blocking fixes. Learning system (#907) appears to be the major feature track for Q2.

## 7. User Feedback Summary

### Pain Points
1. **Authentication fragility** — OAuth tokens expiring overnight break unattended operation (#730)
2. **Sandbox configuration complexity** — Users struggle with directory mounts during creation vs. after (#1080)
3. **Platform support gaps** — Intel Mac users left behind (#1079); Docker Desktop licensing concerns (#957)
4. **Log management** — Unbounded log growth in production (#1088)
5. **Update friction** — Auto-merge silently drops fork customizations (#1135)

### Use Cases Emerging
- **Always-on personal assistant** — Background daemon with persistent memory and scheduled tasks
- **Multi-channel communication hub** — WhatsApp/Telegram/Slack/Discord/Signal unification
- **Crypto/Web3 agent** — Wallet skill (#1146) indicates DeFi/power-user adoption
- **Enterprise deployment** — Bedrock support (#1151), Logfire APM (#1140), security disclosures

### Satisfaction Signals
- "Super useful" (#1080), "Very useful and well designed" (#957)
- Active community contributions (skills, fixes, documentation)
- Responsible security research engagement (#1149)

## 8. Backlog Watch

| Item | Age | Why Important | Needed Action |
|---|---|---|---|
| **[#730](https://github.com/qwibitai/nanoclaw/issues/730)** — OAuth expiry | 12 days | Blocks production deployment; high-impact | Merge [#1102](https://github.com/qwibitai/nanoclaw/pull/1102) priority review |
| **[#29](https://github.com/qwibitai/nanoclaw/issues/29)** — Signal channel | 43 days | Established pattern, community demand | Maintainer guidance on implementation approach |
| **[#907](https://github.com/qwibitai/nanoclaw/issues/907)** — Learning system | 7 days | Official roadmap epic | Maintainer update on prioritization/timeline |
| **[#1079](https://github.com/qwibitai/nanoclaw/issues/107oclaw/issues/1079)** — Intel Mac support | 3 days | Excludes significant user segment | Document workaround or confirm roadmap |
| **[#1149](https://github.com/qwibitai/nanoclaw/issues/1149)** — Security disclosure request | 1 day | Responsible disclosure pending | **Immediate:** Provide private contact channel |

---

**Health Assessment:** 🟢 **Active & Healthy** — High merge velocity, responsive security posture, clear roadmap signals. Key risks are OAuth stability (fix pending) and platform coverage gaps (Intel Mac, Podman). Security disclosure channel should be established immediately.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-17

## 1. Today's Overview

IronClaw is experiencing **very high development velocity**, with a balanced 50 PRs updated (25 open, 25 merged/closed) and 21 issues processed in the last 24 hours. The project is deep in an active **bug bash phase**, with multiple P1 and P2 tagged issues being triaged and resolved. The CI/CD pipeline is highly active with frequent staging promotions, though this has also surfaced several architecture and code quality concerns via automated reviews. No new version was released today, though v0.19.0 appears to be staged and pending.

---

## 2. Releases

**No new releases** were published today.

**Note:** PR [#973](https://github.com/nearai/ironclaw/pull/973) (chore: release v0.19.0) remains open since 2026-03-11, indicating v0.19.0 is staged but not yet published. This release includes API-breaking changes to externally-constructible structs.

---

## 3. Project Progress

### Key Merged PRs
| PR | Scope | Summary |
|----|-------|---------|
| [#1151](https://github.com/nearai/ironclaw/pull/1151) | Agent, Channels, DB | Major refactor of owner scope across channels — fixes cross-channel state inconsistency (#994) |
| [#1256](https://github.com/nearai/ironclaw/pull/1256) | CI | Fixed staging CI coverage regressions and updated E2E scenarios |
| [#1262](https://github.com/nearai/ironclaw/pull/1262), [#1261](https://github.com/nearai/ironclaw/pull/1261), [#1258](https://github.com/nearai/ironclaw/pull/1258) | Multiple | Conflict resolution for staging/branch syncs |

### Closed Issues (Fixed)
- **[#994](https://github.com/nearai/ironclaw/issues/994)** [P1] — Telegram broadcast using wrong `chat_id` — **fixed by owner scope refactor (#1151)**
- **[#991](https://github.com/nearai/ironclaw/issues/991)** [P1] — Telegram bot token validation HTTP 404 — resolved
- **[#1076](https://github.com/nearai/ironclaw/issues/1076)** [P1] — Routine event cache not refreshing on mutations — resolved
- **[#1136](https://github.com/nearai/ironclaw/issues/1136)** — Anthropic OAuth token expiry causing intermittent auth failures — resolved
- **[#1224](https://github.com/nearai/ironclaw/issues/1224)** — Sandbox container transient failure retry logic — resolved

### Active Feature Development
- **[#1259](https://github.com/nearai/ironclaw/pull/1259)** — Fix for LLM calls ending with assistant message (closes #763)
- **[#1257](https://github.com/nearai/ironclaw/pull/1257)** — HTTP request auto-approval "always" mode fix
- **[#1147](https://github.com/nearai/ironclaw/pull/1147)** — Routine creation request redesign for better LLM comprehension
- **[#1233](https://github.com/nearai/ironclaw/pull/1233)** — FaultInjector testing framework for StubLlm

---

## 4. Community Hot Topics

| Issue/PR | Activity | Theme |
|----------|----------|-------|
| [#1244](https://github.com/nearai/ironclaw/issues/1244) | New, active discussion | **UX friction**: Onboarding flow is 9 steps — users find it "detrimental" |
| [#1147](https://github.com/nearai/ironclaw/pull/1147) | Active development | **LLM comprehension**: Redesigning routine schemas so LLMs understand them better |
| [#1165](https://github.com/nearai/ironclaw/pull/1165) | Testing in progress | **OAuth bugs**: Google OAuth broken when initiated from Telegram (malformed `clientid` param) |

**Analysis:** The community is surfacing significant UX concerns about the onboarding process being too complex. Simultaneously, developers are actively improving how IronClaw communicates its routine system to LLMs — a key usability improvement for AI-native workflows.

---

## 5. Bugs & Stability

### Critical Bugs (P1 / HIGH)
| Issue | Status | Severity | Description |
|-------|--------|----------|-------------|
| [#763](https://github.com/nearai/ironclaw/issues/763) | **Open** | P1 | NEAR AI 400 error — routines send messages without user role |
| [#1247](https://github.com/nearai/ironclaw/issues/1247) | Open | HIGH | Synchronous 120-second blocking poll in HTTP handler — potential DoS |
| [#1248](https://github.com/nearai/ironclaw/issues/1248) | Open | HIGH | Hardcoded channel logic violates architecture |
| [#1249](https://github.com/nearai/ironclaw/issues/1249) | Open | HIGH | Telegram logic bloating ExtensionManager |

**Fix in Progress:** [#1259](https://github.com/nearai/ironclaw/pull/1259) addresses #763 (LLM user message requirement)

### Medium Severity Bugs
| Issue | Description |
|-------|-------------|
| [#1000](https://github.com/nearai/ironclaw/issues/1000) | Rate limiter shows "retry after None" |
| [#997](https://github.com/nearai/ironclaw/issues/997) | Misleading "Error: Waiting for approval" message |
| [#1001](https://github.com/nearai/ironclaw/issues/1001) | Telegram pairing flow UX issues |
| [#1241](https://github.com/nearai/ironclaw/issues/1241) | Mistral API rejects tool call IDs (format mismatch) |
| [#1245](https://github.com/nearai/ironclaw/issues/1245) | WebSocket channel support missing |

### Architecture/Code Quality (Staging CI Findings)
Six automated issues from staging CI review on [#1246](https://github.com/nearai/ironclaw/pull/1246):
- String concatenation in hot loop (#1252)
- Channel config extensibility gaps (#1251)
- Auth handler response logic mismatch (#1250)

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Signal Strength |
|-------|---------|-----------------|
| [#857](https://github.com/nearai/ironclaw/issues/857) | NEAR AI-hosted IronClaw system prompt awareness | Active discussion |
| [#1244](https://github.com/nearai/ironclaw/issues/1244) | Simplified onboarding (reduce from 9 steps) | Strong user feedback |
| [#1245](https://github.com/nearai/ironclaw/issues/1245) | WebSocket channel support | Feature gap identified |
| [#1235](https://github.com/nearai/ironclaw/issues/1235) | Snapshot encryption at rest with integrity verification | Security enhancement request |

**Predictions for next version:**
- LLM message handling fixes (#1259) likely to merge soon
- Routine schema redesign (#1147) is a large ongoing effort
- Onboarding simplification may gain traction given strong UX feedback

---

## 7. User Feedback Summary

### Pain Points
1. **Onboarding Complexity** — User @gagdiez reported the 9-step `onboard` command is "unnecessarily long and error prone" and "more detrimental than anything else"
2. **Misleading Error Messages** — "Error: Waiting for approval" causes alarm for normal pending states (#997)
3. **OAuth Friction** — Google OAuth broken when initiated from Telegram (#1165)
4. **WebSocket Absence** — User expressed disappointment: "It's really sad that the channel doesn't support WebSocket" (#1245)

### Positive Signals
- High PR merge rate (50%) indicates responsive maintainers
- Active bug bash with P1/P2 prioritization shows commitment to stability
- Staging CI with automated code review demonstrates mature quality practices

---

## 8. Backlog Watch

| Issue | Age | Concern |
|-------|-----|---------|
| [#763](https://github.com/nearai/ironclaw/issues/763) | 8 days | P1 NEAR AI API compatibility — still open, fix PR (#1259) pending review |
| [#857](https://github.com/nearai/ironclaw/issues/857) | 7 days | Hosted deployment context awareness — no PR yet |
| [#973](https://github.com/nearai/ironclaw/pull/973) | 6 days | v0.19.0 release delayed — multiple API breaking changes may need coordination |
| [#1147](https://github.com/nearai/ironclaw/pull/1147) | 4 days | Large routine schema refactor — complex, needs thorough review |

**Recommendation:** The v0.19.0 release (#973) has been pending for 6 days with documented breaking changes — this may need maintainer attention to unblock downstream users.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-03-17

## 1. Today's Overview
LobsterAI demonstrates **high development velocity** with a significant release (v2026.3.16) addressing critical Windows compatibility issues. The project merged **12 Pull Requests** in the last 24 hours, focusing heavily on stabilizing the "OpenClaw" runtime and fixing integration bugs with IM platforms like DingTalk and Feishu. However, the community is currently voicing valid concerns regarding **product reliability** (bugs in skills/core tasks) and **codebase provenance** (allegations of cloning). The sentiment is mixed: while technical maintenance is aggressive, user experience stability for average users seems to be lagging behind the rapid iteration.

## 2. Releases
### **v2026.3.16**
*   **Focus:** Critical compatibility and stability.
*   **Key Changes:**
    *   **Windows Compatibility:** Fixed OpenClaw runtime build and startup failures on Windows (PR [#261](https://github.com/netease-youdao/LobsterAI/pull/261), PR [#279](https://github.com/netease-youdao/LobsterAI/pull/279)).
    *   **Migration Note:** Users upgrading from older versions (e.g., v0.2.4) may encounter `No API key found for provider "lobster"` errors. See Issue [#452](https://github.com/netease-youdao/LobsterAI/issues/452).

## 3. Project Progress
Development activity is clustered around **Gateway Stability**, **IM Integrations**, and **UI/UX Refinement**.
*   **Core Runtime (OpenClaw):** Fixed image processing pipeline for vision models and prevented non-vision models from receiving unsupported image inputs ([#437](https://github.com/netease-youdao/LobsterAI/pull/437)).
*   **IM Integrations:**
    *   **DingTalk:** Fixed scheduled tasks failing to send messages ([#449](https://github.com/netease-youdao/LobsterAI/pull/449)) and upgraded the connector to v0.7.9 to fix JSON parsing bugs ([#442](https://github.com/netease-youdao/LobsterAI/pull/442)).
    *   **Multi-IM:** Fixed UI state inconsistency when rapidly toggling bot switches ([#439](https://github.com/netease-youdao/LobsterAI/pull/439)) and resolved message order reversal issues ([#451](https://github.com/netease-youdao/LobsterAI/pull/451)).
    *   **Feishu:** Fixed missing sessions upon reconnection ([#436](https://github.com/netease-youdao/LobsterAI/pull/436)).
*   **UI/UX:** Optimized dangerous operation permission pop-ups ([#445](https://github.com/netease-youdao/LobsterAI/pull/445)) and local image display ([#447](https://github.com/netease-youdao/LobsterAI/pull/447)).

## 4. Community Hot Topics
1.  **Codebase Cloning Allegations ([#435](https://github.com/netease-youdao/LobsterAI/issues/435))**
    *   **Topic:** Users provided screenshots suggesting other commercial products ("Zeelin Claw", "Wind Claw") are exact UI replicas of LobsterAI, possibly violating open-source licenses.
    *   **Insight:** The community is protective of the open-source nature of the project and is requesting legal or technical differentiation from maintainers.
2.  **General Usability & Performance ([#417](https://github.com/netease-youdao/LobsterAI/issues/417))**
    *   **Topic:** A comprehensive review citing slow performance, failure to complete PPT tasks, and broken Skills (e.g., Google Banana image gen).
    *   **Insight:** Early adopters are testing the limits of "agentic" capabilities and finding the current implementation unreliable for complex workflows compared to competitors.

## 5. Bugs & Stability
*   **Critical: API Key Migration Failure** ([#452](https://github.com/netease-youdao/LobsterAI/issues/452))
    *   Upgrading to v2026.3.16 breaks the auth profile, causing a "No API key found" error. Users may need to manually clear data.
*   **High: GLM5 Model Incompatibility** ([#446](https://github.com/netease-youdao/LobsterAI/issues/446))
    *   Using Zhipu's GLM5 causes the agent to hang and crash during complex tasks (like installing skills), whereas GLM 4.7 works fine.
*   **Medium: .env Parsing Flaw** ([#441](https://github.com/netease-youdao/LobsterAI/issues/441))
    *   Passwords containing `#` are truncated because the parser treats them as comments. This breaks authentication for users with complex passwords.
*   **Medium: App Freeze** ([#434](https://github.com/netease-youdao/LobsterAI/issues/434))
    *   Generating long content causes the entire application to freeze/lock up.

## 6. Feature Requests & Roadmap Signals
*   **Mermaid Support** ([#450](https://github.com/netease-youdao/LobsterAI/issues/450)): Request for native rendering of Mermaid diagrams within the chat interface.
*   **Token Usage Visibility** ([#434](https://github.com/netease-youdao/LobsterAI/issues/434)): Users feel "blind" regarding costs and want a built-in token counter.
*   **New Provider Support**: A PR is open to add **AIHubMix** as a provider ([#438](https://github.com/netease-youdao/LobsterAI/pull/438)), indicating a push for broader model compatibility.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Reliability Gap:** Users report that basic agentic tasks (creating PPTs, controlling browsers) frequently fail or time out.
    *   **Configuration Friction:** Bugs in `.env` handling and API key migration make setup difficult.
    *   **Skill Market Quality:** Several "official" skills are reportedly broken or missing configuration UI (API key inputs).
*   **Positive Signals:** Despite the bugs, users are deeply engaged, comparing LobsterAI to other commercial "Claw" products and expecting it to serve as a robust foundation for local agents.

## 8. Backlog Watch
*   **Issue #417 (Win11 Experience):** A detailed bug report (6 points) highlighting failed sandbox installations and browser automation. This needs maintainer triage as it affects core value propositions.
*   **PR #451 (Message Ordering) & PR #438 (AIHubMix):** These open PRs address significant architectural features and await final review/merge.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest: 2026-03-17

## 1. Today's Overview
TinyClaw exhibits **high velocity** development activity today, characterized by a significant new feature release (v0.0.14) and active merging of pull requests. The release of the internal Schedule Management System marks a strategic move away from system-level dependencies (crontab) toward a fully integrated, API-driven architecture. While feature development is rapid, the community has identified several **regressions and data persistence bugs** in the new TinyOffice web portal, which have been quickly addressed by the core team. A substantial portion of current PR activity focuses on hardening the multi-agent "Teams" functionality against feedback loops and resource exhaustion.

## 2. Releases

### **v0.0.14**
*   **Highlights:** Migration to internal **Schedule Management System**.
*   **Changes:**
    *   **Architecture:** Migrated from system `crontab` to an in-process `croner`-based scheduling engine.
    *   **Features:** Introduced new REST API endpoints and CLI commands for schedule management.
    *   **UI:** Added a fullscreen Calendar UI in **TinyOffice** for managing recurring (cron) and one-time (runAt) agent schedules.
    *   **Data:** Schedule configurations now persist internally rather than relying on OS-level crontabs.

## 3. Project Progress
Three PRs were merged/closed today, indicating rapid iteration on the TinyOffice frontend and API stability.

*   **[MERGED] [PR #225](https://github.com/TinyAGI/tinyclaw/pull/225) feat(schedule): Internalize schedule management:** The core change behind v0.0.14, enabling in-app schedule management via API and a new Calendar UI.
*   **[MERGED] [PR #230](https://github.com/TinyAGI/tinyclaw/pull/230) fix(heartbeat): Persist per-agent settings:** Fixed a critical issue where API endpoints ignored heartbeat overrides. This ensures that settings changed via the API are correctly saved and utilized by cron scripts.
*   **[MERGED] [PR #229](https://github.com/TinyAGI/tinyclaw/pull/229) refactor(ui): Modularize components:** A significant refactor of TinyOffice, moving agent/task logic into reusable modules and enhancing Chat views. This suggests a cleanup phase following recent feature additions.

## 4. Community Hot Topics
*   **Teams Stability & Loop Prevention:** The most active discussion area involves a series of open PRs by contributor **@jcenters** tackling agent feedback loops. [PR #220](https://github.com/TinyAGI/tinyclaw/pull/220) (Chatroom fan-out fix) and [PR #224](https://github.com/TinyAGI/tinyclaw/pull/224) (Rate limiter) address a critical pain point where multi-agent teams spiral into "runaway feedback loops," exhausting API budgets. This indicates **production usage of multi-agent teams** is maturing, exposing edge cases in message routing.
*   **TinyOffice Usability:** [Issue #226](https://github.com/TinyAGI/tinyclaw/issues/226) requests a "Star" feature for primary agents, reflecting a user need for better organization in larger agent teams.

## 5. Bugs & Stability
Several bugs were reported regarding the new TinyOffice features, with fixes showing mixed progress.

1.  **[HIGH] [Issue #228](https://github.com/TinyAGI/tinyclaw/issues/228) Changing heartbeat resets agents:**
    *   **Details:** Running `tinyclaw setup` to change heartbeat settings reportedly destroys the entire agent configuration.
    *   **Status:** **Open/Unresolved.** This is a dangerous regression for CLI users.
2.  **[MEDIUM] [Issue #227](https://github.com/TinyAGI/tinyclaw/issues/227) TinyOffice settings persistence:**
    *   **Details:** Heartbeat settings changed in the Web UI are not persisting globally.
    *   **Status:** **Likely Fixed.** [PR #230](https://github.com/TinyAGI/tinyclaw/pull/230) (merged today) addresses the API persistence logic underlying this issue.
3.  **[MEDIUM] [PR #218](https://github.com/TinyAGI/tinyclaw/pull/218) Stuck processes:**
    *   **Details:** Proposal to kill stuck agent processes after a 5-minute timeout to prevent queue clogging.

## 6. Feature Requests & Roadmap Signals
*   **Web-Based Initial Setup:** [PR #214](https://github.com/TinyAGI/tinyclaw/pull/214) introduces a `--skip-setup` flag and a `/connect` page for web-based configuration. This signals a move towards **zero-CLI onboarding**, making the project more accessible to less technical users.
*   **Agent UI Organization:** The request for a "Star" feature ([Issue #226](https://github.com/TinyAGI/tinyclaw/issues/226)) suggests that users are managing "big teams consisting of multiple agents" and need better UX filters.
*   **Security Hardening:** [PR #222](https://github.com/TinyAGI/tinyclaw/pull/222) hints at "guarding" the setup API to prevent agents from overwriting settings, suggesting a future focus on permission boundaries and agent sandboxing.

## 7. User Feedback Summary
*   **Pain Point - Configuration Safety:** Users report anxiety regarding configuration updates. The discovery that `setup` commands or agent actions can wipe settings ([Issue #228](https://github.com/TinyAGI/tinyclaw/issues/228), [PR #222](https://github.com/TinyAGI/tinyclaw/pull/222)) is a major concern.
*   **Pain Point - API Costs:** The community is actively fixing feedback loops in teams, indicating that **unpredictable token usage** is a significant barrier to running multi-agent crews.
*   **Positive Signal - Customization:** The request for custom API URLs in [PR #214](https://github.com/TinyAGI/tinyclaw/pull/214) confirms a diverse user base needing to connect to non-standard or proxy endpoints.

## 8. Backlog Watch
*   **[PR #214](https://github.com/TinyAGI/tinyclaw/pull/214) (Web Setup):** A large, open PR that introduces web-based setup. Needs review/merge to progress the "ease of use" roadmap.
*   **[PR #224](https://github.com/TinyAGI/tinyclaw/pull/224) (Loop Protection):** A critical fix for API budget exhaustion in teams. This should be prioritized for merging given the "High Severity" nature of runaway loops.
*   **[Issue #228](https://github.com/TinyAGI/tinyclaw/issues/228):** Requires immediate attention to prevent data loss for users trying to configure heartbeats via CLI.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest (2026-03-17)

## 1. Today's Overview
Moltis demonstrates active iterative development with a focus on compatibility and robustness. Activity over the last 24 hours shows maintainers are prioritizing bug fixes for third-party LLM integrations and development environment stability. While no new version was released today, three new Pull Requests were opened to address specific edge cases in tool calling and path handling. The project appears to be in a stabilization phase, addressing technical debt and integration quirks before a future release.

## 2. Releases
No new releases were recorded today.

## 3. Project Progress
**Merged/Closed:**
*   **PR #443 [CLOSED]:** "Yachiyo git fixes pr2" was closed. While the description was sparse, the closure suggests a cleanup or redirection of internal development efforts.

**Active Development (Open PRs):**
*   **Model Compatibility:** PR #444 addresses a critical interoperability issue where LLM providers (specifically Kimi K2.5) mangle tool names during parallel calls. This fix sanitizes inputs to ensure tool execution remains stable.
*   **Dev Experience (DX):** PR #445 fixes a path handling error in Claude hooks, preventing crashes when directories contain whitespace.
*   **Feature Expansion:** PR #353 (active since Mar 7) sees continued traction to add a `send_document` tool, significantly expanding Moltis's file-sharing capabilities beyond images.

## 4. Community Hot Topics
The most engaging topic continues to be **Docker integration with MCPs**.

*   **Issue #118 ([Feature]: Add node/npx to the Docker image)** remains a highly requested enhancement (2 weeks old, 2 reactions).
    *   **Analysis:** Users are increasingly trying to run Moltis in containerized environments while leveraging the broader Node.js ecosystem (MCPs). The inability to run `npx` commands directly inside the Docker container is a friction point for users wanting an "all-in-one" portable agent solution.
    *   **Link:** [moltis-org/moltis Issue #118](https://github.com/moltis-org/moltis/issues/118)

## 5. Bugs & Stability
*   **Network/Binding Bug:** **Issue #447** reports a binding issue regarding IPv6.
    *   **Severity:** Medium/High. Network binding issues can prevent the application from starting or accepting connections in certain environments.
    *   **Status:** Open (Reported today). No fix PR linked yet.
    *   **Link:** [moltis-org/moltis Issue #447](https://github.com/moltis-org/moltis/issues/447)
*   **Tool Execution Fix:** PR #444 acts as a fix for "model-mangled" tool names. While the bug originates from external LLM providers, the fix is necessary within Moltis to prevent agent loops or tool failures.

## 6. Feature Requests & Roadmap Signals
*   **Dev Experience (DX):** **Issue #441** requests automation of CSS path resolution for standard Cargo builds. This indicates that developers trying to build from source or contribute are facing friction with asset locating, suggesting a need for better build configuration defaults.
*   **Channel/Communication Capabilities:** The ongoing work in PR #353 signals a roadmap direction toward making Moltis a more capable file-sharing agent, handling diverse document types (PDF, CSV, DOCX).
*   **Docker Ecosystem:** As noted in Hot Topics, adding Node/NPX support to the Docker image (Issue #118) is a strong signal that users want the agent to manage external dependencies automatically.

## 7. User Feedback Summary
Users are pushing Moltis into complex environments, revealing two distinct pain points:
1.  **Containerization Limits:** Users want to treat Moltis as a fully self-contained service within Docker but are hindered by the lack of `node/npx`, forcing them to build custom images or abandon MCP tools.
2.  **Build Complexity:** Developers find the current relative path handling for CSS assets frustrating during local builds (Issue #441), preferring a "it just works" build experience.

## 8. Backlog Watch
*   **Issue #118 (Docker Node Support):** This issue has been open for a month with community support (👍2) but no official assignee or maintainer comment recently. Given the rise of MCP tools requiring Node, this is becoming a significant architectural limitation for the Docker distribution.
*   **PR #353 (Send Document):** This PR has been open for 10 days. It is a substantial feature addition that seems stalled. It needs a review to advance the file-sharing capability.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest (2026-03-17)

## 1. Today's Overview
CoPaw is experiencing a **high-velocity phase of community contribution and issue triage**, evidenced by 50 issues and 50 PRs updated in the last 24 hours. While no new official release was tagged today, the maintainers merged approximately 24 PRs, focusing heavily on patching bugs related to the newly introduced Memory Compaction feature and improving Channel stability (DingTalk/Feishu). The project is actively stabilizing version `0.0.7.post1`, with significant community involvement via "first-time-contributor" PRs fixing critical startup and encoding bugs.

## 2. Releases
No new releases were recorded today. The project appears to be in a stabilization cycle for the `0.0.7` series.

## 3. Project Progress
Significant progress was made in fixing regressions and merging community contributions:
*   **Memory & Context Fixes:** Merged fixes for `reasoning_content` injection mismatches ([PR #1557](https://github.com/agentscope-ai/CoPaw/pull/1557)) and handling `None` system prompts during memory compaction ([PR #1608](https://github.com/agentscope-ai/CoPaw/pull/1608)).
*   **Channel Stability:** Fixed DingTalk rich text parsing errors where empty blocks caused API failures ([PR #1554](https://github.com/agentscope-ai/CoPaw/pull/1554)) and generalized Discord debounce keys to all channels ([PR #1583](https://github.com/agentscope-ai/CoPaw/pull/1583)).
*   **Console Enhancements:** Implemented a streaming chat endpoint ([PR #1571](https://github.com/agentscope-ai/CoPaw/pull/1571)) and UI features to display model info on hover ([PR #1579](https://github.com/agentscope-ai/CoPaw/pull/1579)).
*   **CLI Improvements:** Merged a `copaw update` command ([PR #1278](https://github.com/agentscope-ai/CoPaw/pull/1278)) to automate version upgrades.

## 4. Community Hot Topics
*   **[Discussion] Built-in Skills & MCPs ([Issue #280](https://github.com/agentscope-ai/CoPaw/issues/280))**
    *   **Activity:** 19 comments.
    *   **Analysis:** Users are discussing the friction of setting up dependencies for custom skills. There is a strong demand for "batteries-included" pre-configured MCPs (like common data connectors) to lower the barrier to entry for non-technical users.
*   **[Bug] Feishu "Delayed Reply" ([Issue #1345](https://github.com/agentscope-ai/CoPaw/issues/1345))**
    *   **Activity:** 7 comments.
    *   **Analysis:** A critical concurrency bug where the bot replies to *previous* questions (N-1), suggesting race conditions in message handling or context retrieval within the Feishu channel integration.
*   **[Question] DingTalk Session Instability ([Issue #1304](https://github.com/agentscope-ai/CoPaw/issues/1304))**
    *   **Activity:** 7 comments.
    *   **Analysis:** Users running CoPaw as a background service (NAS/Server) report frequent "session expired" errors with DingTalk, requiring manual intervention to revive the channel.

## 5. Bugs & Stability
*   **Critical: Agent "Silent Stops" ([Issue #1270](https://github.com/agentscope-ai/CoPaw/issues/1270))**
    *   **Severity:** High. Agents stop mid-execution without error logs, often due to hidden `Error code: 1210` (token limit) from the underlying LLM provider not bubbling up to the UI.
*   **Critical: Context/Message Mismatch ([Issue #1222](https://github.com/agentscope-ai/CoPaw/issues/1222))**
    *   **Severity:** High. Memory compaction corrupts the message count (68 before vs 67 after), causing subsequent API calls to fail. Fix is likely addressed by [PR #1557](https://github.com/agentscope-ai/CoPaw/pull/1557).
*   **High: Windows GBK Encoding Crash ([Issue #1593](https://github.com/agentscope-ai/CoPaw/issues/1593))**
    *   **Severity:** High. Application crashes when logging emojis on Windows Chinese terminals. A fix is pending in [PR #1601](https://github.com/agentscope-ai/CoPaw/pull/1601).
*   **High: Startup Crash on Multi-Agent Config ([Issue #1597](https://github.com/agentscope-ai/CoPaw/issues/1597))**
    *   **Severity:** High. App fails to start if `agents.defaults` is null but heartbeat is enabled. Fix proposed in [PR #1600](https://github.com/agentscope-ai/CoPaw/pull/1600).

## 6. Feature Requests & Roadmap Signals
*   **Authentication:** Strong user interest in Web UI authentication is signaled by [Issue #1588](https://github.com/agentscope-ai/CoPaw/issues/1588) and the community PR [PR #1329](https://github.com/agentscope-ai/CoPaw/pull/1329), suggesting this might be a priority for the next release.
*   **Multi-Agent Architecture:** [Issue #1587](https://github.com/agentscope-ai/CoPaw/issues/1587) explicitly asks for multi-agent support, indicating users are hitting the limits of single-agent workflows.
*   **MCP Environment Inheritance:** [Issue #1605](https://github.com/agentscope-ai/CoPaw/issues/1605) highlights that MCP subprocesses cannot read environment variables, a necessary fix for secure API key management in the MCP ecosystem.
*   **Extensibility:** [PR #1544](https://github.com/agentscope-ai/CoPaw/pull/1544) (ACP Protocol) and [PR #1603](https://github.com/agentscope-ai/CoPaw/pull/1603) (Browser Sign-in) suggest a roadmap focused on interoperability with external agents and OAuth providers.

## 7. User Feedback Summary
Users are enthusiastic about the feature set (especially the new Memory Compaction) but facing **stability growing pains** typical of rapid iteration (v0.0.7).
*   **Pain Points:**
    *   **Docker Timezones:** [Issue #1501](https://github.com/agentscope-ai/CoPaw/issues/1501) indicates frustration with immutable container timezones.
    *   **Context Window Management:** Users with smaller local models (e.g., Qwen 9B) are struggling with context limits, leading to "silent stops" ([Issue #1602](https://github.com/agentscope-ai/CoPaw/issues/1602)).
    *   **Windows Support:** Several issues ([#1593](https://github.com/agentscope-ai/CoPaw/issues/1593), [#1136](https://github.com/agentscope-ai/CoPaw/issues/1136)) highlight that Windows environment testing lags behind Linux/Docker.
*   **Positive Feedback:** High engagement on "Skills" discussion suggests a growing ecosystem of custom tool builders.

## 8. Backlog Watch
*   **Windows Shell Deadlocks ([Issue #1136](https://github.com/agentscope-ai/CoPaw/issues/1136)):** Open for 6 days. Critical for Windows adoption; `execute_shell_command` causes session freezes.
*   **Image Recognition Failures ([Issue #918](https://github.com/agentscope-ai/CoPaw/issues/918), [#1097](https://github.com/agentscope-ai/CoPaw/issues/1097)):** Users with multimodal models (Qwen, DeepSeek) report CoPaw tries to use tools instead of native vision capabilities.
*   **OAuth for Codex/Models ([Issue #1536](https://github.com/agentscope-ai/CoPaw/issues/1536)):** Request for OAuth login support for model providers, potentially overlapping with [PR #1603](https://github.com/agentscope-ai/CoPaw/pull/1603).

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-03-17

## 1. Today's Overview
ZeptoClaw exhibits **high active development velocity** with significant architectural expansion and critical maintenance updates. The community and core team are heavily focused on enhancing interoperability—specifically through new protocol implementations (ACP) and cloud provider support (Vertex AI)—while simultaneously addressing robustness issues in containerized environments. Activity levels are healthy, marked by collaborative efforts between maintainers and external contributors to refine the agent loop and tooling capabilities.

## 2. Releases
**None.** No new stable versions were cut in the last 24 hours. The project appears to be in an active development phase accumulating features via open PRs (#364, #356) before a potential release candidate.

## 3. Project Progress
**Merged/Closed:**
*   **PR #355 [CLOSED]:** The PR regarding "image content handling in loop" was closed. While not merged, this indicates a specific approach was rejected or superseded, likely related to the ongoing investigation in Issue #368.

**Advancing Features (Open PRs):**
*   **Enterprise & Cloud Expansion:** PR #364 introduces a **Google Vertex AI provider**, significantly lowering the barrier for enterprise adoption by utilizing existing `reqwest` dependencies and supporting standard `gcloud` auth flows.
*   **Protocol Interoperability:** PR #356 is advancing the **Agent Client Protocol (ACP)** implementation. This feature adds both stdio and HTTP channels, positioning ZeptoClaw as a versatile subprocess agent for external clients.

## 4. Community Hot Topics
The most critical discussions revolve around **multimodal stability** and **DevOps/CI environments**:

*   **Issue #368 (Multimodal Context):** Users report that image references (file paths) are lost during iterative tool loops, causing downstream LLM calls to fail. This highlights a need for stateful context management of binary assets within the agent loop.
*   **PR #356 (Protocol Support):** The implementation of ACP suggests a strategic move to make ZeptoClaw pluggable into other IDEs or orchestration layers, moving beyond a standalone CLI tool.

## 5. Bugs & Stability
*   **P2-High: Cargo Permission Denied in Rootless Podman** (Issue #369)
    *   *Details:* Non-root users facing `permission denied` errors on `/usr/local/cargo` during linting.
    *   *Status:* Author proposed a specific workaround (remounting `CARGO_HOME`), but no merge request is linked yet. Affects CI/Dev environments using rootless containers.
    *   *Link:* [Issue #369](https://github.com/qhkm/zeptoclaw/issues/369)
*   **Major: Image Resolution Failure in Tool Loops** (Issue #368)
    *   *Details:* Base64 encoding fails for images in subsequent turns of a conversation.
    *   *Status:* Open. The previous fix attempt (PR #355) was closed, indicating the problem requires a different solution.
    *   *Link:* [Issue #368](https://github.com/qhkm/zeptoclaw/issues/368)

## 6. Feature Requests & Roadmap Signals
Current open PRs serve as strong roadmap signals:
1.  **Google Vertex AI Support (#364):** Indicates a push for direct GCP integration without wrapper dependencies.
2.  **ACP Standard (#356):** Signals an intent to comply with emerging agent communication standards (stdio/HTTP), likely to compete with or integrate into frameworks like LangChain or custom IDE extensions.

## 7. User Feedback Summary
*   **Pain Point:** **Containerization Friction.** The emergence of Issue #369 suggests that power users running ZeptoClaw in hardened (rootless) environments are struggling with default volume mounts.
*   **Pain Point:** **Broken Vision Chains.** Users attempting to use ZeptoClaw for visual tasks (via Issue #368) find the agent fails after the first tool invocation, limiting utility in complex multimodal workflows.

## 8. Backlog Watch
*   **Issue #368 & PR #355:** The closure of PR #355 without a merge, combined with the opening of Issue #368, suggests a "false start" on fixing image handling. This is a critical functional gap that requires a robust architectural fix to maintain base64 context persistence.
*   **PR #364 (Vertex AI):** Awaiting maintainer review. This is a large feature set that needs scrutiny regarding security (auth tokens) and error mapping.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest
**Date:** 2026-03-17
**Analyst Note:** The following analysis is based on repository activity for `gaoyangz77/easyclaw`.

## 1. Today's Overview
EasyClaw is currently in a high-activity deployment phase following the release of **v1.7.0**. The project is experiencing typical post-release friction, with users reporting connectivity regressions on Windows and requesting better documentation for local builds. While the maintainer successfully resolved an OAuth issue (Issue #16), the lack of Pull Requests suggests development is primarily driven by a single maintainer without external code contributions in the last 24 hours. Overall, the project is active but facing stability validation challenges on the Windows platform.

## 2. Releases
### **v1.7.0** (New Release)
The latest update focuses on platform compatibility and distribution.
*   **Key Highlight:** Introduction of specific guidance for **macOS Gatekeeper**. The release notes explicitly address the "App is damaged" error, instructing users on how to bypass the unsigned developer certificate quarantine via Terminal.
*   **Migration Note:** Windows users upgrading from v1.6.8 to v1.7.0 are reporting critical connection failures (see Issue #18). Users on macOS should be prepared to run terminal commands to allow app execution.

## 3. Project Progress
No code-level progress (PRs) was recorded today. Progress is strictly binary/release focused:
*   **Maintenance:** The OpenAI OAuth bug (Issue #16) was officially closed, implying a server-side fix or a patch included in the v1.7.0 release.
*   **Release Management:** Significant effort was placed into distribution, specifically handling macOS security warnings.

## 4. Community Hot Topics
The community is currently focused on operational stability and build guidance.
*   **[Issue #18](https://github.com/gaoyangz77/easyclaw/issues/18) (Most Active - 4 Comments):** A user reported that upgrading from 1.6.8 to 1.7.0 breaks connectivity on Windows. This is generating discussion as other users try to replicate or troubleshoot the regression.
*   **[Issue #17](https://github.com/gaoyangz77/easyclaw/issues/17) (Documentation Request):** A user requested a tutorial for building and packaging the Windows version. This indicates a strong desire among users to self-host or audit the source code rather than relying solely on pre-built binaries.

## 5. Bugs & Stability
### Critical Regression
*   **[Issue #18: Windows Connection Failure](https://github.com/gaoyangz77/easyclaw/issues/18)**
    *   **Severity:** High.
    *   **Context:** Users upgrading to v1.7.0 on Windows are unable to establish a connection. The issue includes screenshots but no error logs yet.
    *   **Status:** OPEN. No fix PR is currently available.

### Resolved Issues
*   **[Issue #16: OpenAI OAuth Error](https://github.com/gaoyangz77/easyclaw/issues/16)** (Closed): Users reported consistent OAuth failures on both portable and installed versions. This appears resolved in the current cycle.

## 6. Feature Requests & Roadmap Signals
Based on Issue #17, the roadmap should prioritize **Developer Experience (DevEx)**.
*   **Windows Build Tutorial:** The explicit request for a "Windows version launch and packaging tutorial" suggests users are struggling to compile the project from source on Windows.
*   **Prediction:** The next version or documentation update will likely include a `BUILD.md` or Wiki page dedicated to the Windows environment.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by deployment hurdles—specifically macOS security blocks and Windows connectivity breaks.
*   **Satisfaction:** The prompt response to the OAuth issue (Issue #16) suggests high maintainer responsiveness, which balances the current stability issues.
*   **Use Case:** Users appear to be utilizing EasyClaw as a desktop client wrapper (portable and installed versions) for AI services (OpenAI), requiring frequent authentication.

## 8. Backlog Watch
*   **[Issue #18](https://github.com/gaoyangz77/easyclaw/issues/18):** This connectivity regression requires immediate maintainer attention as it renders the latest release non-functional for a segment of Windows users.
*   **[Issue #17](https://github.com/gaoyangz77/easyclaw/issues/17):** While not a bug, this represents a "documentation debt" that limits the project's accessibility to non-technical Windows users.

</details>