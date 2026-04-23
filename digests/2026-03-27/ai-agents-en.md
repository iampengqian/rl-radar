# OpenClaw Ecosystem Digest 2026-03-27

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-03-26 22:02 UTC

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

# OpenClaw Project Digest: 2026-03-27

## 1. Today's Overview
OpenClaw is experiencing **extreme community activity** with 500 issues and 500 pull requests updated in the last 24 hours alone. The project is in a high-velocity development phase, evidenced by a massive volume of open PRs (375) and active issues (392). However, this rapid iteration has introduced significant stability challenges, with multiple users reporting critical regressions in recent releases (particularly v2026.3.22 and v2026.3.24). The maintainers are actively merging fixes, but the ratio of open to closed issues suggests the bug backlog is growing faster than it's being resolved.

## 2. Releases
**No new releases were published today.** The last identifiable stable activity centers around version **2026.3.24**, which introduced breaking changes that are currently dominating community support channels.

## 3. Project Progress
While specific merged PR counts are not detailed in the summary, **125 PRs were updated/closed** today. Key advancements include:

*   **Infrastructure & Deployment:** PR [#55377](https://github.com/openclaw/openclaw/pull/55377) (Fleet migration) and PR [#55388](https://github.com/openclaw/openclaw/pull/55388) (Podman setup updates) indicate a push toward more robust, containerized multi-node deployments.
*   **Memory & Scalability:** PR [#45348](https://github.com/openclaw/openclaw/pull/45348) is advancing a native **PostgreSQL + pgvector backend**, a critical step for production-grade persistent memory and semantic search.
*   **Channel Reliability:** Significant work is ongoing to stabilize messaging channels, including WhatsApp send retries (PR [#54183](https://github.com/openclaw/openclaw/pull/54183)), Discord gateway cleanup (PR [#55373](https://github.com/openclaw/openclaw/pull/55373)), and draining message buffers on reload (PR [#46303](https://github.com/openclaw/openclaw/pull/46303)).

## 4. Community Hot Topics
The community is focused on **stability regressions** and **platform compatibility**.

1.  **Internationalization Demand:** Issue [#3460](https://github.com/openclaw/openclaw/issues/3460) (114 comments) remains the top discussion. Users are eager for i18n support, but maintainers cite bandwidth limitations.
2.  **WeChat Plugin Breakage:** Issue [#52885](https://github.com/openclaw/openclaw/issues/52885) (42 comments) reports that the official `@tencent-weixin/openclaw-weixin` plugin is incompatible with OpenClaw 2026.3.22+, causing module loading failures.
3.  **Memory Leaks:** Issue [#45064](https://github.com/openclaw/openclaw/issues/45064) (26 comments) highlights a critical OOM (Out of Memory) crash on basic CLI commands in version 2026.3.12, rendering the tool unusable for some.
4.  **Token Waste:** Issue [#9157](https://github.com/openclaw/openclaw/issues/9157) (15 comments, 12 👍) discusses inefficiency where OpenClaw injects workspace files on every message, consuming ~35,600 tokens.

## 5. Bugs & Stability
Stability is the primary concern, with **regressions** plaguing the 2026.3.x branch.

*   **Critical (Crash/Unusable):**
    *   **Memory Leak (OOM):** v2026.3.12 crashes on basic commands ([#45064](https://github.com/openclaw/openclaw/issues/45064)).
    *   **Gateway Crash on Start:** Non-loopback Control UI fails with `allowedOrigins` error ([#27473](https://github.com/openclaw/openclaw/issues/27473)).
    *   **Gateway Crash on Discord Reconnect:** v2026.3.24 crashes when Discord socket restarts ([#54729](https://github.com/openclaw/openclaw/issues/54729) - Closed/Fixed).
*   **Severe (Feature Breaking):**
    *   **Plugin Security Scan Block:** Users cannot install the Matrix plugin due to a pending VirusTotal scan freeze ([#53870](https://github.com/openclaw/openclaw/issues/53870)).
    *   **Vision System Broken:** Image recognition fails across Discord, Telegram, and WebUI ([#23452](https://github.com/openclaw/openclaw/issues/23452)).
    *   **Tools Not Executing:** Agents simulate tool calls in text instead of invoking them ([#45046](https://github.com/openclaw/openclaw/issues/45046)).
    *   **Breaking Changes in v2026.3.24:** Express 5 route regression and duplicate plugin loops caused outages ([#54755](https://github.com/openclaw/openclaw/issues/54755)).

## 6. Feature Requests & Roadmap Signals
*   **Cost Optimization:** A sophisticated "LLM Gateway" for smart routing and caching is proposed in [#9244](https://github.com/openclaw/openclaw/issues/9244), addressing the token waste concerns.
*   **Agent-to-Agent Communication:** A "Message Bus" plugin proposal ([#52290](https://github.com/openclaw/openclaw/issues/52290)) suggests users are building complex multi-agent workflows and need better internal orchestration.
*   **Prefix Caching:** Request to reorder system prompts to enable prefix caching for local models ([#27732](https://github.com/openclaw/openclaw/issues/27732)), indicating a strong user base running local LLMs.

## 7. User Feedback Summary
Users are expressing **frustration with recent update quality**.
*   **Pain Points:** "Update broke everything" is a common sentiment (e.g., [#27329](https://github.com/openclaw/openclaw/issues/27329)). The WeChat plugin issue highlights friction between core updates and third-party/plugin ecosystem compatibility.
*   **Use Cases:** Heavy usage of **messaging channels** (Discord, Telegram, WhatsApp, WeChat) as the primary interface for agents is evident. Issues with voice transcription (STT/TTS) and file handling suggest users are deploying OpenClaw as a multimedia personal assistant.
*   **Satisfaction:** High engagement shows strong interest, but the volume of "regression" tags suggests a dip in reliability perception.

## 8. Backlog Watch
*   **Stale but Critical:** Issue [#17101](https://github.com/openclaw/openclaw/issues/17101) (Telegram Voice Transcription) and [#17890](https://github.com/openclaw/openclaw/issues/17890) (macOS PATH detection) are marked stale but affect core functionality. Maintainers should review if "stale" is appropriate for persistent platform-level bugs.
*   **Architectural Debt:** Issue [#25592](https://github.com/openclaw/openclaw/issues/25592) (Text leaking between tool calls) represents a significant UX flaw in the agent loop that needs architectural attention rather than patch fixes.

---

## Cross-Ecosystem Comparison

# Open Source AI Agent Ecosystem Report
**Date:** 2026-03-27

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is experiencing a **period of extreme volatility and rapid architectural evolution**. Projects are aggressively transitioning from single-assistant chat interfaces to complex **multi-agent, multi-channel architectures**, driven by user demand for autonomy and cross-platform presence (Discord, Telegram, WeChat, Slack). A significant **supply chain security incident** in the NanoBot project has triggered emergency refactoring across the ecosystem, highlighting the risks of heavy dependency abstraction layers like `litellm`. Meanwhile, the battle for **persistent memory standards** (Graph-based vs. Vector-based vs. File-based) and **enterprise-grade security sandboxes** dominates the roadmap of nearly every major player, signaling a maturation phase from experimental tools to production-ready infrastructure.

## 2. Activity Comparison

Projects are ranked by composite velocity (PRs + Issues) and stability signals.

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Assessment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | No Release (v2026.3.24) | 🔴 **Moderate** | **Extreme Velocity / Stability Crisis.** Massive community engagement but plagued by regressions and a growing bug backlog. |
| **NanoBot** | 16 | 101 | No Release (v0.1.4.post5) | 🔴 **Critical** | **Security Incident / Refactor.** Hyper-active patching following supply chain attack; broken integrations prevalent. |
| **CoPaw** | 50 | 44 | Pre-Release (v1.0.0b1) | 🟢 **High** | **Maturing Rapidly.** Strong merge ratio; stabilizing for v1.0.0 release; active community contributions. |
| **ZeptoClaw** | 12 | 24 | v0.9.1 (Released) | 🟢 **High** | **High Velocity / Stable.** Shipped two releases in one day; excellent responsiveness to UX feedback. |
| **Zeroclaw** | High | 50 | v0.6.3 (Released) | 🟡 **Good** | **Feature Rich / Gaps.** Strong release with autonomy features, but S1 bugs in Sandbox/Builds need attention. |
| **IronClaw** | 12 | 25 | v0.22.0 (Released) | 🟡 **Good** | **Architectural Pivot.** Strong dev cadence on multi-tenancy; struggling with channel integration stability. |
| **PicoClaw** | 29 | 75 | Nightly | 🟡 **Moderate** | **Iterative / Config Issues.** Heavy dependency maintenance; users blocked by Web UI configuration bugs. |
| **NanoClaw** | 9 | 34 | No Release | 🟢 **Good** | **Expanding.** Healthy focus on connectivity (Signal/WhatsApp) and marketplace ecosystem. |
| **LobsterAI** | High | 35 | v2026.3.26 (Released) | 🟡 **Moderate** | **Feature Growth.** Launched multi-agent support but facing data integrity and performance bugs. |
| **TinyClaw** | 0 | 7 | v0.0.20 (Released) | 🟢 **High** | **Internal Velocity.** Zero community noise; focused architectural refactoring (Control Plane). |
| **Moltis** | 1 | 2 | No Release | 🟢 **Stable** | **Low Activity.** Maintenance mode; focus on dependency security and feature planning. |
| **EasyClaw** | 1 | 0 | No Release | 🔵 **Planning** | **Dormant Code.** Strategic discussion phase; no code shipped. |

## 3. OpenClaw's Position

**Core Reference Status:** OpenClaw remains the **reference implementation and central hub** of the ecosystem, serving as the upstream for projects like LobsterAI and EasyClaw. Its community size (500 daily issues/PRs) dwarfs all others.

*   **Advantages:**
    *   **Ecosystem Gravity:** Third-party plugins (e.g., WeChat) and gateways target OpenClaw first.
    *   **Channel Breadth:** Unmatched support for messaging platforms (WhatsApp, Discord, WeChat, Telegram) out of the box.
    *   **Innovation Speed:** First to push native `pgvector` memory backends and fleet deployment tooling.
*   **Critical Weaknesses vs. Peers:**
    *   **Stability:** Unlike ZeptoClaw or CoPaw, OpenClaw is currently suffering from severe regression debt (v2026.3.x branch), with users reporting "update broke everything."
    *   **Security:** Lacks the granular "Policy-as-Code" or "Seatbelt" sandboxes being actively developed in Zeroclaw and ZeptoClaw.
    *   **Cognitive Architecture:** IronClaw and CoPaw are implementing more sophisticated "reasoning loops" and "context compaction" strategies, while OpenClaw relies on simpler tool-injection methods that cause token bloat.

## 4. Shared Technical Focus Areas

Three major technical requirements are converging across the ecosystem:

1.  **Persistent & Intelligent Memory (All Projects):**
    *   *Need:* Moving beyond `MEMORY.md` files to structured backends.
    *   *Implementations:* OpenClaw (PostgreSQL/pgvector), CoPaw (Context v2.0 / Proactive Injection), PicoClaw (Seahorse/Hippocampus proposals), NanoClaw (Graphiti Knowledge Graph).
    *   *Driver:* Users want agents that "remember" long-term context without hallucinating or exceeding token limits.

2.  **Supply Chain Security & Sandboxing (Zeroclaw, ZeptoClaw, NanoBot):**
    *   *Need:* Protection against malicious plugins and LLM provider attacks.
    *   *Implementations:* NanoBot (dropped `litellm` for native SDKs), ZeptoClaw (SSRF validation, SHA256 verification), Zeroclaw (Seatbelt policies, 2FA for dangerous tools).
    *   *Driver:* The `litellm` supply chain attack in NanoBot and "silent failures" in remote tool execution.

3.  **Multi-Channel & Mobile-First UX (OpenClaw, ZeptoClaw, NanoClaw, CoPaw):**
    *   *Need:* Users prefer interacting with agents via mobile chat apps (Telegram, Signal, WeChat) rather than Web/CLI.
    *   *Implementations:* ZeptoClaw (Advanced Telegram threading/reactions), CoPaw (WeChat/Feishu support), NanoClaw (Signal integration).
    *   *Driver:* Shift from "coding assistant" to "personal life assistant."

## 5. Differentiation Analysis

*   **OpenClaw vs. IronClaw (Stability vs. Architecture):**
    *   **OpenClaw** focuses on breadth—supporting every channel and plugin possible, resulting in a monolithic, slightly unstable core.
    *   **IronClaw** focuses on depth—re-architecting for multi-tenancy, RBAC, and per-tool reasoning in Rust, sacrificing plugin variety for core robustness.

*   **Agent Philosophy (Supervisor vs. Collaborator):**
    *   **CoPaw & LobsterAI** are pushing **Multi-Agent Systems** (Supervisor models routing to sub-agents).
    *   **NanoBot & PicoClaw** focus on **Single Agent Enhancement** (better memory, skills, local execution).

*   **Target Audience:**
    *   **ZeptoClaw & TinyClaw:** "ChatOps" users who want a lightweight daemon managed via Telegram or a clean Web UI.
    *   **Zeroclaw:** Power users needing "Self-Improving" autonomous agents that run indefinitely.
    *   **Moltis:** Privacy-focused users demanding local-only inference ("Local Thinking").

## 6. Community Momentum & Maturity

*   **Tier 1: Hyper-Growth / Turbulent (OpenClaw, NanoBot):**
    *   Extreme velocity but fragile. OpenClaw is struggling to manage its own scale (500 issues/day). NanoBot is in recovery mode post-hack. High risk, high reward.
*   **Tier 2: Mature / Stabilizing (CoPaw, ZeptoClaw, Zeroclaw, IronClaw):**
    *   Professional cadence. These projects have clear roadmaps (v1.0.0 for CoPaw, Enterprise Security for ZeptoClaw) and are actively merging stability fixes. **Safest bets for production.**
*   **Tier 3: Iterative / Niche (PicoClaw, NanoClaw, LobsterAI):**
    *   Active but addressing specific friction points (UI config, memory, data integrity). Good for specific use cases (e.g., PicoClaw for low-power devices).
*   **Tier 4: Dormant / Seed (TinyClaw, Moltis, EasyClaw):**
    *   Low noise, high internal focus or planning stages. EasyClaw is seeking product-market fit; Moltis is iterating slowly on architecture.

## 7. Trend Signals

1.  **The "LiteLLM" Abstraction is Cracking:**
    *   The security vulnerability in NanoBot ([Issue #2439]) and performance issues elsewhere are driving a trend toward **Native SDKs**. Projects are realizing that heavy abstraction layers introduce security risks and obscure retry logic, favoring direct provider integration (OpenAI/Anthropic SDKs).
2.  **Memory is the Next "Bleeding Edge":**
    *   The shift from simple context windows to **"Biologically-inspired" (PicoClaw)** and **"Graph-based" (NanoClaw)** memory indicates that "Context Windows" are no longer sufficient. The winners of the next cycle will be those who solve context persistence and retrieval.
3.  **Agent-to-Agent (A2A) Communication:**
    *   Proposals in NanoClaw and OpenClaw for "Message Buses" and "A2A Protocols" suggest the future is not just User-to-Agent, but **Agent-to-Agent**. This implies a future where a Coding Agent talks to a Planning Agent to execute complex workflows.
4.  **Security Usability Gap:**
    *   Across Zeroclaw and ZeptoClaw, users find security policies "overly complex." There is a massive opportunity for a project that delivers **"Secure by Default"** without requiring complex TOML/YAML configuration.

---
*Report generated based on community digest summaries from 2026-03-27.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-03-27

## 1. Today's Overview
NanoBot is experiencing a period of **extreme volatility and high activity**, marked by a critical security incident and a massive architectural pivot. In the last 24 hours, the project saw 101 updated Pull Requests (94 open) and 16 Issues, indicating a frantic effort by the community and maintainers to re-architect the LLM backend following the removal of the compromised `litellm` dependency. The repository is currently in a "hyper-active" state, shifting from stability to rapid refactoring to address supply chain security risks and restore broken integrations.

## 2. Releases
**No new releases** were recorded in the last 24 hours.
*   **Note:** The current stable identity `v0.1.4.post5` is associated with a critical security vulnerability (see Section 5). A patch release is imminent and necessary to address the `litellm` removal and security fixes currently sitting in PRs.

## 3. Project Progress
The primary progress today centers on **decoupling the framework from the `litellm` library** and stabilizing the resulting architecture.

*   **Major Architectural Refactor (Merged):** [PR #2448](https://github.com/HKUDS/nanobot/pull/2448) (Closed/Merged) successfully removed the `litellm` dependency entirely. It replaced the abstraction layer with native OpenAI and Anthropic SDKs.
    *   *Impact:* This fixes the supply chain attack vector but has broken integrations (e.g., LangSmith, GitHub Copilot) that relied on the old provider structure.
*   **Restoration Efforts (Open):** [PR #2522](https://github.com/HKUDS/nanobot/pull/2522) is already attempting to restore the GitHub Copilot provider without the `litellm` dependency, signaling rapid community response to the refactor.
*   **Core Stability Fixes:** [PR #2524](https://github.com/HKUDS/nanobot/pull/2524) (Merged) refactored the agent runner to preserve subagent progress during failures, improving reliability during complex tasks.
*   **Transcription Backend:** [PR #2210](https://github.com/HKUDS/nanobot/pull/2210) (Closed/Merged) added support for `faster-whisper` and Groq transcription backends.

## 4. Community Hot Topics
The community is focused on the security incident and project naming confusion.

1.  **Critical Security Vulnerability:** [Issue #2439](https://github.com/HKUDS/nanobot/issues/2439) reports malicious data-exfiltration code in `litellm_init.pth` bundled with the package.
    *   *Analysis:* This is the driver behind the massive refactor in PR #2448. Users are advised to update immediately once a new release is cut or switch to the main branch.
2.  **Brand Identity Crisis:** [Issue #2500](https://github.com/HKUDS/nanobot/issues/2500) highlights confusion with another rising project named "nanobot-ai" (an MCP-Server project).
    *   *Analysis:* Users are struggling to differentiate between the HKUDS agent framework and the new MCP project. Maintainers may need to clarify naming or branding.
3.  **Hallucinated Actions:** [Issue #2487](https://github.com/HKUDS/nanobot/issues/2487) discusses the agent claiming to complete tasks without actually executing code.
    *   *Analysis:* A fix is already proposed in [PR #2525](https://github.com/HKUDS/nanobot/pull/2525), addressing user trust issues regarding agent transparency.

## 5. Bugs & Stability
Several high-severity bugs have emerged, largely stemming from the recent architectural changes or underlying LLM behaviors.

*   **🔴 Critical: Supply Chain Poisoning** | [Issue #2439](https://github.com/HKUDS/nanobot/issues/2439)
    *   *Details:* Malicious code found in `litellm_init.pth` in version `v0.1.4.post5`.
    *   *Status:* **Fixed** by the removal of `litellm` in [PR #2448](https://github.com/HKUDS/nanobot/pull/2448).
*   **🟠 High: Broken Integrations** | [Issue #2493](https://github.com/HKUDS/nanobot/issues/2493)
    *   *Details:* LangSmith integration stopped working after the removal of `litellm_provider.py`.
    *   *Status:* Needs architectural patch (likely requires new callback handlers for native SDKs).
*   **🟠 High: Retry Logic Hangs** | [Issue #2511](https://github.com/HKUDS/nanobot/issues/2511)
    *   *Details:* SDK built-in retries stacking with NanoBot's retries cause 10+ minute silent hangs.
    *   *Status:* Open, needs adjustment in `LLMProvider` logic.
*   **🟡 Medium: API Rejection (Consecutive Messages)** | [Issue #2519](https://github.com/HKUDS/nanobot/issues/2519) & [PR #2479](https://github.com/HKUDS/nanobot/pull/2479)
    *   *Details:* Specific models (like MiMo V2) fail when tool call results lack text fields, or when conversation history has consecutive assistant messages.
    *   *Status:* Fixes proposed in [PR #2479](https://github.com/HKUDS/nanobot/pull/2479) and [PR #2394](https://github.com/HKUDS/nanobot/pull/2394).

## 6. Feature Requests & Roadmap Signals
There is a strong trend toward **multi-agent architectures** and **enhanced user control**.

*   **Multi-Agent Systems:** [PR #2509](https://github.com/HKUDS/nanobot/pull/2509) proposes a system to route prompts to specialized subagents (e.g., coding agent, writing agent) automatically.
*   **Explicit Skill Activation:** [Issue #2489](https://github.com/HKUDS/nanobot/issues/2489) & [PR #2488](https://github.com/HKUDS/nanobot/pull/2488) request a `/skill` slash command to force specific skill injection rather than relying on the agent's implicit decision.
*   **Vision Provider Separation:** [Issue #2339](https://github.com/HKUDS/nanobot/issues/2339) requests splitting the vision model from the text model (e.g., using a cheap/fast model for chat and a vision model only when images are present).
*   **Pluggable Memory:** [PR #2515](https://github.com/HKUDS/nanobot/pull/2515) introduces a framework for multi-backend memory (Mem0, Graphiti, Memobase), signaling a move away from monolithic memory solutions.

## 7. User Feedback Summary
*   **Pain Point - Reliability:** Users are frustrated by the agent claiming it did work when it didn't ([Issue #2487](https://github.com/HKUDS/nanobot/issues/2487)).
*   **Pain Point - Channel Noise:** Users on WhatsApp ([Issue #2211](https://github.com/HKUDS/nanobot/issues/2211)) want the bot to reply *only* when mentioned to prevent spamming groups.
*   **Pain Point - Configuration Complexity:** The transition away from LiteLLM has confused users regarding how to configure custom providers and headers ([Issue #2505](https://github.com/HKUDS/nanobot/issues/2505)).
*   **Satisfaction:** Despite the bugs, the rapid community response (100+ PRs in a day) indicates a highly engaged and proactive contributor base.

## 8. Backlog Watch
*   **Gemini Support:** [Issue #144](https://github.com/HKUDS/nanobot/issues/144) (created Feb 5) remains open regarding missing `gemini_api_key` handling. With the move to native SDKs, this issue needs verification against the new provider architecture.
*   **Subagent MCP Support:** [PR #2523](https://github.com/HKUDS/nanobot/pull/2523) addresses the limitation where subagents cannot access MCP tools. This is a critical fix for enabling complex autonomous workflows and should be prioritized for review.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest: 2026-03-27

## 1. Today's Overview
Zeroclaw demonstrates **very high velocity** with a new feature release (v0.6.3) immediately followed by aggressive development on subsequent patches. The project shows a healthy merge ratio (39/50 PRs) and high engagement across diverse components like security, channels, and providers. However, stability appears to be a growing concern, as evidenced by multiple "S1 - workflow blocked" reports following the latest release. The focus is clearly shifting toward hardening the agent's autonomy features, improving multi-channel support (Matrix/Slack), and refining security sandboxes.

## 2. Releases

### **v0.6.3**
The latest release introduces significant autonomy features and platform support.
*   **New Features**:
    *   **Skill Self-Improvement**: Adds a pipeline tool for the agent to improve its own skills (Closes #3683).
    *   **Windows Support**: Adds a setup batch file and guide (Closes #3693).
    *   **Streaming**: Added SSE streaming support for Anthropic chat responses.
*   **Changes**:
    *   User notifications added for provider fallback events.
    *   CI integration for Discord release announcements.
*   **Potential Regression**:
    *   Android (`aarch64-linux-android`) build artifacts are missing in this release (See Issue #4783).

## 3. Project Progress
Development is split between fixing regressions from v0.6.2/3 and merging long-term architectural improvements.

*   **Security & Secrets Management**: A major refactor is underway with PR #4726 introducing a `#[derive(HasSecrets)]` macro to unify secret management across channels.
*   **Channel Stability**: Merged fixes for **Matrix** (E2EE recovery, multi-room listening #4674) and **Nextcloud Talk** (feedback loop prevention #4662).
*   **Gateway & UX**: Merged PR #4792 to persist web chat history across refreshes and PR #4782 adding auth rate-limiting for security.
*   **Agent Capabilities**: Merged PR #4784 (inbound message debouncing) to optimize LLM costs and prevent spam.

## 4. Community Hot Topics

1.  **Aliyun Bailian Integration Request** (Issue [#3059](https://github.com/zeroclaw-labs/zeroclaw/issues/3059))
    *   **Activity**: 7 comments, 1 reaction.
    *   **Analysis**: Users are actively requesting support for the "Aliyun Bailian" coding plan. This suggests a strong user base in regions relying on Alibaba Cloud’s LLM services, looking for native provider support rather than custom OpenAI-compatible endpoints.
2.  **Ollama Remote Configuration** (Issue [#1304](https://github.com/zeroclaw-labs/zeroclaw/issues/1304))
    *   **Activity**: 6 comments, 1 reaction.
    *   **Analysis**: This bug (ignoring `api_url`) affects users running local inference farms. The high comment count indicates frustration with the hard-coded `localhost` bias in the provider logic.
3.  **Security Policy Complexity** (Issue [#4485](https://github.com/zeroclaw-labs/zeroclaw/issues/4485) & [#4752](https://github.com/zeroclaw-labs/zeroclaw/issues/4752))
    *   **Activity**: 4+ comments each.
    *   **Analysis**: Users find the security sandbox (Seatbelt/policies) "overly complex" and "unusable," blocking basic commands like `ls` or `firefox` even in "full" autonomy mode. This highlights a friction point between security defaults and usability.

## 5. Bugs & Stability
Several high-severity bugs have surfaced, particularly regarding the security sandbox and provider handling.

| Severity | Issue | Description | Status/Fix |
| :--- | :--- | :--- | :--- |
| **S1** | [#4764](https://github.com/zeroclaw-labs/zeroclaw/issues/4764) | **macOS Sandbox Broken**: Seatbelt policy generates invalid syntax `(remote ip "127.0.0.1:*")`, blocking the app. | Open |
| **S1** | [#4724](https://github.com/zeroclaw-labs/zeroclaw/issues/4724) | **ACP Support Missing**: `acp` subcommand/flag missing in v0.6.2+, potentially broken functionality. | Closed (Likely fixed in v0.6.3) |
| **S1** | [#4783](https://github.com/zeroclaw-labs/zeroclaw/issues/4783) | **Android Build Missing**: `aarch64-linux-android` artifact missing in v0.6.3. | Closed (PR #4788 merged to fix release workflow) |
| **S1** | [#4762](https://github.com/zeroclaw-labs/zeroclaw/issues/4762) | **Gateway Bind Error**: Incorrect error logic refusing to bind to `0.0.0.0` despite config. | Open |
| **S2** | [#4748](https://github.com/zeroclaw-labs/zeroclaw/issues/4748) | **Streaming UTF-8 Error**: Custom providers using HTTP/1.1 chunked transfer fail with invalid UTF-8 sequence. | Open |
| **S2** | [#4716](https://github.com/zeroclaw-labs/zeroclaw/issues/4716) | **MCP Tool Failure**: Tools connect but don't execute commands on the target system. | Closed |

*   **Fix Spotlight**: PR [#4791](https://github.com/zeroclaw-labs/zeroclaw/pull/4791) was merged to fix history "poisoning" when provider requests fail, improving conversation resilience.

## 6. Feature Requests & Roadmap Signals
*   **A2A Protocol (PR [#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166))**: An open PR adds "Agent-to-Agent" protocol support. While still open, this signals a strategic move toward multi-agent orchestration.
*   **Security 2FA (PR [#4799](https://github.com/zeroclaw-labs/zeroclaw/pull/4799))**: A PR adding TOTP 2FA gating for dangerous tool execution is open. This aligns with the "Skill Self-Improvement" feature to prevent autonomous agents from running amok.
*   **Debug Logging (PR [#4802](https://github.com/zeroclaw-labs/zeroclaw/pull/4802))**: Enhanced structured logging for tool calls is being proposed, likely in response to the difficulty of debugging "silent" failures reported in issues like #4716.

## 7. User Feedback Summary
*   **Pain Point - Security Friction**: Users are consistently frustrated by the security sandbox. Comments like "security model is overly complex to the point of being unusable" (Issue #4752) suggest the defaults for `autonomy.level = "full"` may be too restrictive or poorly documented.
*   **Pain Point - Provider Configs**: Issues with Ollama (#1304) and Qianfan (#4771) indicate that non-OpenAI provider configurations remain brittle.
*   **Positive Signal - Memory Features**: The development focus on "Memory-loop continuity" (PR #4798) and self-improvement pipelines suggests the project is maturing from a simple chat interface into a persistent autonomous agent.

## 8. Backlog Watch
*   **Issue #3059 (Aliyun Bailian)**: High activity but no official "accepted" label yet. Needs maintainer triage to avoid alienating a specific regional demographic.
*   **Issue #4752 (Security Usability)**: While closed, the user's frustration highlights a need for a documentation pass or a "wizard" to help configure security policies, rather than expecting users to edit TOML manually.
*   **PR #4798 (v0.6.5 Release Prep)**: This massive PR is open and consolidates memory loops and session state. It requires close monitoring as it likely contains breaking changes for the daemon structure.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-03-27

## 1. Today's Overview
PicoClaw exhibits **highly active development** with a significant throughput of 29 issues and 75 pull requests updated in the last 24 hours. The release of `v0.2.4-nightly` indicates the project is iterating rapidly towards a stable release, focusing on refining the `v0.2.4` milestone. The community is highly engaged in testing the `v0.2.4` branch, resulting in numerous bug reports regarding configuration UI and channel stability. Development velocity is strong, with a balanced mix of dependency maintenance, core feature enhancements (streaming, memory), and critical bug fixes.

## 2. Releases
- **Version:** `nightly` (Build `v0.2.4-nightly.20260326.5db1e946`)
  - **Type:** Automated Nightly Build
  - **Status:** Unstable / Caution advised
  - **Changes:** Tracks the `main` branch following `v0.2.4`.
  - **Migration Note:** Users are advised this is a bleeding-edge build intended for testing new features like web chat streaming and memory refactor, not for production use.

## 3. Project Progress
Today's merged/closed activity (36 PRs/14 Issues) highlights a focus on **ecosystem compatibility and web UI stability**.

- **Build & Tooling:** Fixed a significant annoyance for Windows developers by detecting MINGW/MSYS shells in the Makefile ([PR #2051](https://github.com/sipeed/picoclaw/pull/2051)), ensuring correct `.exe` output.
- **Documentation:** Clarified the existence of automatic model cascade failover configuration ([PR #2069](https://github.com/sipeed/picoclaw/pull/2069)), resolving confusion about redundancy with feature requests.
- **Dependencies:** Massive upgrade cycle handled by Dependabot, including `slack-go/slack` (v0.17.3 to v0.20.0), `modernc.org/sqlite`, and various frontend libraries (`react-query`, `typescript-eslint`), ensuring security and performance.
- **Bug Fixes:** Closed issues regarding the new banner breaking completion flow ([Issue #1305](https://github.com/sipeed/picoclaw/issues/1305)) and SSL certification for Volcengine ([Issue #1375](https://github.com/sipeed/picoclaw/issues/1375)).

## 4. Community Hot Topics
The most engaging discussions center on **Agent Memory** and **Configuration Usability**.

1.  **Biologically-inspired Memory ([Issue #1919](https://github.com/sipeed/picoclaw/issues/1919)):**
    - **Topic:** A proposal for "Seahorse," a memory system mimicking the human hippocampus.
    - **Analysis:** This aligns with the trend of moving from simple file-based memory (`MEMORY.md`) to structured, retrievable long-term memory (LTM) and short-term memory (STM) compaction. High community interest (6 comments) suggests memory management is a top priority for power users.
2.  **Web Configuration Failures ([Issue #2027](https://github.com/sipeed/picoclaw/issues/2027) & [Issue #2053](https://github.com/sipeed/picoclaw/issues/2053)):**
    - **Topic:** Users report inability to save Telegram configurations and missing input fields for built-in tool API keys (like Baidu Search) in the web UI.
    - **Analysis:** As PicoClaw moves from a CLI-heavy tool to a Web UI/launcher model, the completeness of the configuration interface is critical. Missing fields block users from adopting the web interface entirely.
3.  **Multi-User Support ([Issue #995](https://github.com/sipeed/picoclaw/issues/995)):**
    - **Topic:** Request to isolate `MEMORY.md` and cronjobs per user/session.
    - **Analysis:** Currently, PicoClaw is single-tenant. This request highlights a desire to deploy PicoClaw as a shared home-server assistant.

## 5. Bugs & Stability
The stability of `v0.2.4` is currently **mixed**, with specific regressions in the Web UI and Channel configurations.

- **Critical Configuration Regressions:**
    - [Bug #2027](https://github.com/sipeed/picoclaw/issues/2027): **Telegram config save failure**. The UI incorrectly demands a "Bot Token" even when present or valid.
    - [Bug #2033](https://github.com/sipeed/picoclaw/issues/2033): **QQ Bot `app_secret` parameter loss**. Configuration data is not persisting.
    - [PR #2071](https://github.com/sipeed/picoclaw/pull/2071): **Backward compatibility fix**. Addressed a breaking change where array placeholders broke existing string configs.
- **Performance & Resources:**
    - [Bug #2001](https://github.com/sipeed/picoclaw/issues/2001): **High CPU usage at idle** in `v0.2.4`. A significant regression affecting deployment on low-power devices (NAS/FreeBSD).
- **Build & Environment:**
    - [Bug #1348](https://github.com/sipeed/picoclaw/issues/1348): Windows source build failures (now closed, likely fixed by recent Makefile updates).

## 6. Feature Requests & Roadmap Signals
The roadmap signals a shift toward **robustness and user experience** rather than just adding new channels.

- **Agent Capabilities:**
    - **Advanced Memory:** "Seahorse" system ([#1919](https://github.com/sipeed/picoclaw/issues/1919)) and "Conversation Compact" ([#1836](https://github.com/sipeed/picoclaw/issues/1836)) are strong signals that the file-based memory backend is reaching its limits.
    - **Control:** Request for a `/stop` command ([#2009](https://github.com/sipeed/picoclaw/issues/2009)) to halt long-running tasks, indicating users are pushing the agent to perform heavier workloads.
- **Web & UI:**
    - **Streaming Responses:** [PR #2057](https://github.com/sipeed/picoclaw/pull/2057) (Open) implements streaming in the web chat. This is a high-value UX improvement likely to land in the next release.
    - **Search Enhancements:** [PR #2070](https://github.com/sipeed/picoclaw/pull/2070) adds time-range filtering to web search, a crucial feature for research tasks.
- **Deployment:**
    - **Model Failover:** Native support for cascade failover ([#2069](https://github.com/sipeed/picoclaw/pull/2069)) is now documented, positioning PicoClaw as a reliable relay for multiple LLM backends.

## 7. User Feedback Summary
- **Pain Points:** Users are frustrated by the **Web Configuration UI**, which appears to be out of sync with the backend capabilities (missing fields for API keys, validation errors on valid inputs).
- **Use Cases:** Users are deploying PicoClaw on **NAS devices** and **Android Termux** as always-on assistants. The high CPU usage at idle ([#2001](https://github.com/sipeed/picoclaw/issues/2001)) is a major blocker for this segment.
- **Satisfaction:** The project is praised for its lightweight philosophy, but the transition to a web-first configuration experience is currently causing friction due to incomplete form handling.

## 8. Backlog Watch
- **[Issue #1936](https://github.com/sipeed/picoclaw/issues/1936) (Telegram on Termux):** A niche but important bug for mobile users. Requires specific attention to environment constraints.
- **[PR #1939](https://github.com/sipeed/picoclaw/pull/1939) (ASR/TTS Refactor):** A large refactor introducing voice capabilities. This has been open for 2 days. Merging this is crucial for voice-enabled channels but carries risk of breaking changes; needs thorough review.
- **[Issue #175](https://github.com/sipeed/picoclaw/issues/175) (Engram Memory):** An older request (Feb) for persistent memory backends, recently updated. With the new "Seahorse" proposal, this issue might be superseded, but it needs formal closure or tagging to the new memory roadmap.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-03-27

**Repository:** [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. Today's Overview
NanoClaw is experiencing a **high-velocity development surge**, driven largely by a burgeoning community marketplace and channel expansion. With 34 pull requests updated (22 open) and 9 issues active in the last 24 hours, the project is in a hyper-active state, focusing on extending its communication channels and stabilizing its containerized agent architecture. The clear trend today is "Connectivity & Reliability," with heavy work on new messaging channels (Signal, WhatsApp, A2A) and critical bug fixes for the Docker-based runner environment. The lack of a new release despite the merge activity suggests the maintainers are likely staging a significant stable release soon.

## 2. Releases
**No new releases** were recorded today.
*   *Note:* While no tagged version was released, the high volume of merged PRs (12 merged/closed) indicates that the `main` branch has advanced significantly. Users relying on bleeding-edge builds will see major changes in CLI tooling (`nanoclaw` rename) and container stability.

## 3. Project Progress
Significant architectural and functional advancements were merged or finalized today:

*   **CLI Restructuring:** The CLI is being renamed from `claw` to `nanoclaw` to reserve the former for a future Go-based orchestrator. Container management utilities are being consolidated into this CLI ([PR #1408](https://github.com/qwibitai/nanoclaw/pull/1408)).
*   **Container Stability:** A critical fix was merged to ensure group folders and sessions are correctly mounted into containers, resolving a major usability blocker where agents started with empty workspaces ([PR #1384](https://github.com/qwibitai/nanoclaw/pull/1384)).
*   **Documentation & Guidance:** Updates to `CLAUDE.md` files were merged to guide agents toward using `schedule_task` rather than brittle inline bash loops, and to clarify authentication token requirements to prevent 401 errors ([PR #1453](https://github.com/qwibitai/nanoclaw/pull/1453), [PR #1468](https://github.com/qwibitai/nanoclaw/pull/1468)).

## 4. Community Hot Topics
The most engaging discussions center on expanding NanoClaw's reach as a multi-channel communicator:

*   **Signal Integration ([Issue #29](https://github.com/qwibitai/nanoclaw/issues/29)):**
    *   **Activity:** 3 comments, 3 upvotes.
    *   **Analysis:** This long-standing request (created Feb 2026) is seeing renewed traction. The community wants a privacy-focused alternative to WhatsApp/Slack. A matching PR ([PR #1121](https://github.com/qwibitai/nanoclaw/pull/1121)) is already in review, suggesting this is a high priority for the ecosystem.
*   **Alternative WhatsApp Implementations ([Issue #1473](https://github.com/qwibitai/nanoclaw/issues/1473)):**
    *   **Activity:** Created today.
    *   **Analysis:** Users are requesting a Baileys-based WhatsApp channel to bypass the official Meta Cloud API requirements (and potentially costs/restrictions). This indicates a user base that prefers self-hosted, unrestricted protocols.
*   **Local Model Support ([Issue #1092](https://github.com/qwibitai/nanoclaw/issues/1092)):**
    *   **Activity:** Closed yesterday after discussion.
    *   **Analysis:** Continued interest in decoupling from proprietary LLM providers in favor of OpenAI-compatible local endpoints.

## 5. Bugs & Stability
Today's reports highlight fragility in the Linux/Docker host environment, particularly regarding file system permissions and networking.

*   **Critical: Silent Message Drops in Linux/WhatsApp ([Issue #1445](https://github.com/qwibitai/nanoclaw/issues/1445))**
    *   **Severity:** High.
    *   **Details:** A "LID JID translation" bug causes all Direct Messages to be dropped silently on Linux setups using Baileys. A fix is already proposed in [PR #1446](https://github.com/qwibitai/nanoclaw/pull/1446).
*   **High: Sidecar Crash on Env Vars Unset ([Issue #1454](https://github.com/qwibitai/nanoclaw/issues/1454))**
    *   **Severity:** High.
    *   **Details:** If `WATCH_CONTAINER` is unset, the sidecar exits immediately, canceling all other async tasks. This makes the configuration fragile for new users.
*   **Medium: Read-Only Filesystem Errors ([Issue #1451](https://github.com/qwibitai/nanoclaw/issues/1451))**
    *   **Severity:** Medium.
    *   **Details:** The watcher health check attempts to write to a read-only mount (`:ro`), causing crashes in specific cloud environments.
*   **Medium: Docker/Iptables Blocking ([Issue #1357](https://github.com/qwibitai/nanoclaw/issues/1357))**
    *   **Severity:** Medium.
    *   **Details:** Oracle Cloud/Hetzner users face networking blocks. Documentation fixes are proposed in [PR #1469](https://github.com/qwibitai/nanoclaw/pull/1469).

## 6. Feature Requests & Roadmap Signals
The roadmap is being shaped by "Marketplace" and "Memory" improvements.

*   **Graphiti Knowledge Graph Memory ([Issue #1458](https://github.com/qwibitai/nanoclaw/issues/1458)):**
    *   **Prediction:** *High probability of inclusion.* The current file-based memory is hitting scaling limits (token costs, lack of cleanup). A move to graph-based memory is the logical next step for long-running agents.
*   **Skill Marketplace ([PR #1470](https://github.com/qwibitai/nanoclaw/pull/1470)):**
    *   **Prediction:** *Imminent.* This PR moves 24 skills to an official marketplace plugin. This modular approach suggests the core is stabilizing, and the project is shifting toward an ecosystem model.
*   **Agent-to-Agent (A2A) Protocol ([PR #1295](https://github.com/qwibitai/nanoclaw/pull/1295)):**
    *   **Prediction:** *Strategic Priority.* Allowing NanoClaw to talk to Cursor/Windsurf/Claude Code aligns with the "Agentic Web" trend.

## 7. User Feedback Summary
*   **Pain Point - Linux/Cloud Setup:** Users deploying to standard cloud VMs (Hetzner, Oracle) are struggling with default firewall rules and Docker networking complexities. The "it works on my Mac" gap is evident.
*   **Pain Point - Context Management:** Advanced users are hitting token limits and "stale memory" issues, actively asking for better memory management solutions (see Graphiti proposal).
*   **Satisfaction - Extensibility:** The "Skills" architecture is clearly popular, evidenced by the rapid creation of skills for Signal, WhatsApp (Baileys), 1Password, and Chrome CDP.

## 8. Backlog Watch
*   **[Issue #29](https://github.com/qwibitai/nanoclaw/issues/29) (Signal Channel):** Created in Feb, updated yesterday. A PR exists ([PR #1121](https://github.com/qwibitai/nanoclaw/pull/1121)) but needs final review/merge. This is a highly requested feature that should be prioritized.
*   **[PR #1472](https://github.com/qwibitai/nanoclaw/pull/1472) (Task Router):** This closed PR suggests interest in cost optimization (routing simple tasks to cheaper models), a critical need for production deployments. This should be monitored for re-introduction or documentation.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-03-27

## 1. Today's Overview
IronClaw demonstrates **high velocity and active iteration** as it prepares for its next major release. The project merged 25 PRs in the last 24 hours against a similar volume of new issues, indicating a rapid "fix-forward" development cadence. The core team is heavily focused on architectural stability—specifically multi-tenant isolation and decoupling internal crates—and stabilizing the recently added "reasoning" capabilities for agents. While the development pace is impressive, the high ratio of open issues (12 open vs. 2 closed) suggests that new features (v0.22.0 reasoning/tools) are generating discovery-related bugs and integration challenges for users.

## 2. Releases
**Latest Release:** [ironclaw-v0.22.0](https://github.com/nearai/ironclaw/releases/tag/v0.22.0) (Released 2026-03-25)

This release introduces significant architectural changes to the agent loop, most notably **per-tool reasoning**.
*   **New Features:**
    *   **Agent Reasoning:** Implemented thread-per-tool reasoning across the provider, session, and UI surfaces ([#1513](https://github.com/nearai/ironclaw/pull/1513)). This allows the agent to "think" specifically about how to use a tool before executing it.
    *   **CLI & Auth:** Credential auth status is now visible in tool info ([#1572](https://github.com/nearai/ironclaw/pull/1572)), and multi-tenant authentication support was added.
*   **Migration Note:** The v0.22.0 release sets the stage for v0.23.0, which is already queued in PRs and contains API-breaking changes regarding struct construction. Users extending IronClaw via Rust should brace for refactoring in the immediate next update.

## 3. Project Progress
The team focused heavily on infrastructure and stability, clearing the path for broader multi-tenant deployment.

*   **Multi-Tenancy & Auth:** A massive architectural shift was merged via PR [#1626](https://github.com/nearai/ironclaw/pull/1626), replacing static env-var tokens with DB-backed user management and role-based access control (RBAC).
*   **Stability Fixes:**
    *   **Critical UTF-8 Fix:** PR [#1679](https://github.com/nearai/ironclaw/pull/1679) addressed a potential panic in the reasoning module (`src/llm/reasoning.rs`), preventing crashes when processing multi-byte characters (emojis) in tool outputs.
    *   **MCP Protocol:** PR [#1437](https://github.com/nearai/ironclaw/pull/1437) fixed session establishment for MCP Streamable HTTP by correctly handling `202 Accepted` responses.
    *   **Channel Relays:** PR [#1681](https://github.com/nearai/ironclaw/pull/1681) fixed a dead-end authentication bug in the Slack relay extension that blocked OAuth flows.
*   **CI/CD:** The promotion pipeline from staging to main was active, with PRs [#1661](https://github.com/nearai/ironclaw/pull/1661) and [#1682](https://github.com/nearai/ironclaw/pull/1682) syncing batches of fixes to the main branch.

## 4. Community Hot Topics
*   **Telegram Integration Woes:** The most active user discussion is in Issue [#1676](https://github.com/nearai/ironclaw/issues/1676). Users are frustrated that HTTP tool routines for polling Telegram messages fail, calling back to a competitor ("OpenClaw") which handles this perfectly. This highlights a critical gap in IronClaw's out-of-the-box tool reliability for messaging platforms.
*   **Architectural Debate:** Issue [#1660](https://github.com/nearai/ironclaw/issues/1660) sparked discussion about the visibility of `ironclaw_common` and `ironclaw_safety` crates. The community/maintainers prefer these to be internal-only, indicating a desire to keep the public API surface small while managing complex internal dependencies.
*   **System Prompt Engineering:** Issue [#1671](https://github.com/nearai/ironclaw/issues/1671) shows deep user engagement with the agent's cognitive architecture, specifically refining the `AGENTS.md` system prompt to improve autonomy and instruction following.

## 5. Bugs & Stability
Stability is currently the biggest concern, with several high-severity issues identified by users and automated CI.

1.  **[CRITICAL] UTF-8 Panic in Reasoning:** Issue [#1669](https://github.com/nearai/ironclaw/issues/1669) reports a crash in `is_recoverable_tool_call_segment` when processing multi-byte chars.
    *   *Status:* **Fix Available** in PR [#1679](https://github.com/nearai/ironclaw/pull/1679).
2.  **[HIGH] Truncation Logic Asymmetry:** Issue [#1670](https://github.com/nearai/ironclaw/issues/1670) flags a logic error in `agentic_loop.rs` where truncation counters persist incorrectly, potentially leading to infinite loops or context loss.
    *   *Status:* Open, needs review.
3.  **[MEDIUM] Tool Schema Mismatch:** Issue [#1303](https://github.com/nearai/ironclaw/issues/1303) highlights that WASM tools often advertise permissive `{}` schemas to the LLM instead of the strict typed schemas defined in the component, leading to hallucinated tool calls.
    *   *Status:* Open.
4.  **[MEDIUM] Railway Deployment Config:** Issue [#1680](https://github.com/nearai/ironclaw/issues/1680) reports that one-click deploy templates fail to pick up `LLM_*` environment variables, locking users into default models.
    *   *Status:* Open.

## 6. Feature Requests & Roadmap Signals
*   **Drift Monitoring (Agent Stability):** Issue [#1634](https://github.com/nearai/ironclaw/issues/1634) proposes a `DriftMonitor` to detect when the agent is stuck in loops and inject corrective system messages. This suggests the team is actively working on making agents more robust for long-running tasks.
*   **Recursive Skill Discovery:** Feature request [#1664](https://github.com/nearai/ironclaw/issues/1664) (and implementation PR [#1667](https://github.com/nearai/ironclaw/pull/1667)) aims to support nested skill directories, signaling a move toward more complex, modular skill bundling.
*   **Aliyun Provider Support:** PR [#1446](https://github.com/nearai/ironclaw/pull/1446) adds support for Aliyun BaiLian, indicating a push for broader LLM provider compatibility in Asian markets.

## 7. User Feedback Summary
Users are excited about the new reasoning features but struggling with deployment and tool reliability.
*   **Pain Point - Local Deployment:** Users deploying locally via Ollama ([#1672](https://github.com/nearai/ironclaw/issues/1672)) or Railway ([#1680](https://github.com/nearai/ironclaw/issues/1680)) are hitting configuration walls regarding model visibility and HTTP errors.
*   **Pain Point - Channel Setup:** The "Awaiting Pairing" state in Feishu/Lark ([#1673](https://github.com/nearai/ironclaw/issues/1673)) and the broken Telegram polling suggest that while IronClaw supports many channels, the onboarding flow for non-Slack platforms is currently brittle.
*   **Positive Signal:** The fact that users are filing detailed cognitive architecture suggestions ([#1671](https://github.com/nearai/ironclaw/issues/1671)) indicates a sophisticated user base interested in advanced agent tuning.

## 8. Backlog Watch
*   **WASM Tool Schemas ([#1303](https://github.com/nearai/ironclaw/issues/1303)):** Open since 2026-03-17. This is a "silent killer" bug—it doesn't crash the system, but it degrades LLM performance significantly by failing to constrain tool inputs. It requires urgent attention.
*   **Aliyun Support ([#1446](https://github.com/nearai/ironclaw/pull/1446)):** This large PR has been open for nearly a week. If the project aims for international reach, merging this should be a priority to unblock new contributors.
*   **Slack Socket Mode ([#1549](https://github.com/nearai/ironclaw/pull/1549)):** A highly requested feature for NAT-friendly deployments (no public tunnel required). This remains open and would significantly improve self-hosting ergonomics.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest (2026-03-27)

## 1. Today's Overview
LobsterAI demonstrates **high velocity development** with a major feature release and significant community engagement. The release of **v2026.3.26** marks a pivotal milestone, introducing multi-agent support which signals a shift from a single-assistant model to a complex agentic framework. The repository is buzzing with activity, showing a healthy ratio of open exploration (35 PRs) to merged stability (15 PRs). However, the issue tracker reveals growing pains associated with this complexity, particularly regarding the OpenClaw gateway stability and data integrity. Overall, the project is in an active growth phase, prioritizing feature expansion while battling stability challenges in non-core modules.

## 2. Releases
### **v2026.3.26** (Released 2026-03-26)
*   **Major Feature:** Introduced **Multi-Agent Support** with preset agents and skills ([PR #895](https://github.com/netease-youdao/LobsterAI/pull/895)). This allows users to switch between specialized personas or skill sets within the application.
*   **Stability Fix:** Resolved a critical annoyance where switching LLMs would trigger an unnecessary **OpenClaw Gateway restart** ([PR #893](https://github.com/netease-youdao/LobsterAI/pull/893)).
*   **Migration Note:** Users utilizing custom OpenClaw plugins should check environment variable configurations following the update to `SKILLS_ROOT` logic mentioned in recent PRs.

## 3. Project Progress
*   **Performance & UX Enhancements:** Significant work went into optimizing the frontend experience. Merged PRs include **Lazy Rendering** for long conversations to prevent white screens ([PR #764](https://github.com/netease-youdao/LobsterAI/pull/764)) and **Model Selector UI** updates to show image support tags ([PR #785](https://github.com/netease-youdao/LobsterAI/pull/785)).
*   **Architectural Refactoring:** The team merged a refactor of **Scheduled Tasks** using a strategy pattern ([PR #609](https://github.com/netease-youdao/LobsterAI/pull/609)), aiming to stabilize the bug-prone cron functionality.
*   **Code Quality:** A large cleanup effort was merged to extract shared constants and utility functions ([PR #727](https://github.com/netease-youdao/LobsterAI/pull/727)), reducing technical debt.

## 4. Community Hot Topics
*   **Gateway & Model Switching Stability:** The most active discussion surrounds the OpenClaw gateway reliability. Issue [#844](https://github.com/netease-youdao/LobsterAI/issues/844) (Gateway restarting on model switch) confirms that while a fix was attempted in the latest release, users are still sensitive to latency here.
*   **Multi-Agent Capabilities:** The community is already exploring the limits of the new multi-agent system, with requests for **Session Templates/System Prompt Presets** ([Issue #933](https://github.com/netease-youdao/LobsterAI/issues/933)) to make switching agents more effective.
*   **Feature Expansion - Baidu Qianfan:** A notable open PR adds support for **Baidu Qianfan** models ([PR #929](https://github.com/netease-youdao/LobsterAI/pull/929)), indicating strong community demand for localized LLM support.

## 5. Bugs & Stability
*   **Critical - Data Loss Risk:** Issue [#906](https://github.com/netease-youdao/LobsterAI/issues/906) reports that SQLite saving lacks atomicity and error handling, risking data loss on disk failure. *No fix PR detected yet.*
*   **Critical - Application Crash:** Issue [#926](https://github.com/netease-youdao/LobsterAI/issues/926) identifies a `TypeError` causing crashes during `destroy()` calls in IM handlers due to missing optional chaining. *No fix PR detected yet.*
*   **High - Scheduled Task Logic Failure:** Users report scheduled tasks changing from hourly to **every minute** after a voice command update ([Issue #900](https://github.com/netease-youdao/LobsterAI/issues/900)). Relatedly, tasks fail permanently after one error until restart ([Issue #837](https://github.com/netease-youdao/LobsterAI/issues/837)).
*   **Medium - Streaming Data Loss:** Issue [#922](https://github.com/netease-youdao/LobsterAI/issues/922) flags that Anthropic SSE streaming loses data during high throughput due to lack of line buffering.
*   **Fixes in Progress:** Several fixes are pending review, including one for IM context overflow ([PR #937](https://github.com/netease-youdao/LobsterAI/pull/937)) and input box lag ([PR #936](https://github.com/netease-youdao/LobsterAI/pull/936)).

## 6. Feature Requests & Roadmap Signals
*   **Token Usage Visibility:** A "strong user need" request was filed to display **Token Consumption** (input/output/cache) in the UI ([Issue #930](https://github.com/netease-youdao/LobsterAI/issues/930)). This aligns with cost-optimization trends and has a high chance of adoption.
*   **Web Browsing/Link Understanding:** Request to integrate **Link Understanding** directly into the client using Electron's net module ([Issue #931](https://github.com/netease-youdao/LobsterAI/issues/931)), moving away from relying solely on backend tools.
*   **Theming System:** A substantial PR is open to introduce a **12-Theme System** based on CSS variables ([PR #938](https://github.com/netease-youdao/LobsterAI/pull/938)), suggesting a UI refresh is on the horizon.

## 7. User Feedback Summary
Users are generally excited about the "Agentic" shift but frustrated by **performance jitter**.
*   **Pain Points:**
    *   **UI Lag:** Main thread blocking during streaming (O(n²) string comparison bug) makes the app feel "heavy" ([Issue #887](https://github.com/netease-youdao/LobsterAI/issues/887)).
    *   **Plugin Friction:** The OpenClaw "doctor" automatically adding WeChat configurations that don't exist is causing confusion and startup failures ([Issue #918](https://github.com/netease-youdao/LobsterAI/issues/918)).
    *   **Login Issues:** Specific to internal/employee users, login components are failing to load ([Issue #928](https://github.com/netease-youdao/LobsterAI/issues/928)).

## 8. Backlog Watch
*   **Security Vulnerability Reporting:** Issue [#925](https://github.com/netease-youdao/LobsterAI/issues/925) asks for a security disclosure channel. This is critical for enterprise adoption and currently has 0 comments—maintainers should address this immediately.
*   **Stale High-Value PR:** PR #547 adds 35 unit tests for core format transformation logic but has been open since March 20th. Merging this is vital for preventing regressions as provider support expands.
*   **Unanswered Data Portability Request:** The request for **Memory Import/Export** ([Issue #914](https://github.com/netease-youdao/LobsterAI/issues/914)) remains unaddressed, which is a key blocker for users changing machines.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest: 2026-03-27

## 1. Today's Overview
The TinyClaw project is currently undergoing a significant architectural maturation phase, shifting from a monolithic structure to a modularized codebase. Activity over the last 24 hours has been **high**, with 7 Pull Requests merged and a new version (v0.0.20) released, indicating an aggressive iteration cycle led primarily by core maintainer `jlia0`. The focus has been dual-pronged: stabilizing the Docker deployment environment (fixing critical permission and path issues) and rolling out a sophisticated "Control Plane" for the Office UI. Despite the high code velocity, community engagement in terms of new issues or discussions remains dormant, suggesting the current burst of activity is driven by internal roadmap execution rather than external user requests.

## 2. Releases
### **v0.0.20** (Released 2026-03-27)
This version marks a substantial upgrade to the user interface and operational control of the agent.
*   **Major Feature:** Introduction of the **Office Control Plane**. This provides a unified web UI to manage the daemon (restart capabilities), channels (start/stop), and device pairing.
*   **UI Refactor:** The "Providers" tab has been merged into a consolidated "Services" tab to streamline the interface.
*   **Architectural Change:** The CLI entrypoint has been refactored from a single 847-line file into modular TypeScript modules.

**Migration Notes:**
*   Users relying on the previous Docker volume structure at `/data` should note that persistent data has moved to `/home/tinyagi` (see PR #265).
*   The standalone `/logs` page in the UI has been removed and merged into the Control Plane.

🔗 [Release v0.0.20](https://github.com/TinyAGI/tinyagi/releases/tag/v0.0.20)

## 3. Project Progress
Seven PRs were merged today, signaling rapid progress in stability and code maintainability:

*   **UI & Control:** PR [#268](https://github.com/TinyAGI/tinyagi/pull/268) and [#267](https://github.com/TinyAGI/tinyagi/pull/267) successfully implemented the new Control Plane, allowing users to manage services and daemon states directly from the web interface.
*   **Code Architecture:** PR [#263](https://github.com/TinyAGI/tinyagi/pull/263) completed a major refactor of the CLI, breaking down `tinyagi.mjs` into maintainable TypeScript modules.
*   **Type Safety:** PR [#264](https://github.com/TinyAGI/tinyagi/pull/264) resolved strict mode TypeScript build errors (`TS18046`), improving code robustness.

## 4. Community Hot Topics
*   **No Active Discussions:** There were 0 new or updated issues in the last 24 hours.
*   **Analysis:** While PR activity is high, the lack of community comments or reactions on the merged PRs suggests that the current development cycle is being driven entirely by the maintainers. There is no visible "hot topic" or debate occurring on the repository tracking tab today.

## 5. Bugs & Stability
Several critical environmental bugs were identified and patched in this cycle, specifically regarding Docker deployments:

1.  **Critical - Docker Auth Failures (Fixed):**
    *   **Bug:** Codex (AI CLI) was failing with WebSocket 500 errors because the Docker container dropped privileges using `gosu`, preventing it from reading authentication files in `/root`.
    *   **Fix:** PR [#266](https://github.com/TinyAGI/tinyagi/pull/266) removed `gosu` and configured the container to run as root to ensure compatibility with AI CLI authentication flows.

2.  **High - Data Persistence Loss (Fixed):**
    *   **Bug:** AI CLIs (codex, claude-code) store config in `$HOME` (`/home/tinyagi`), but the Docker volume was mounted at `/data`. This caused state and auth to be lost on container restart.
    *   **Fix:** PR [#265](https://github.com/TinyAGI/tinyagi/pull/265) moved the persistent data path to align with the user's home directory.

3.  **Medium - Build Failures (Fixed):**
    *   **Bug:** Docker builds were failing due to Puppeteer browser download issues.
    *   **Fix:** PR [#262](https://github.com/TinyAGI/tinyagi/pull/262) skipped the download in the builder stage in favor of system Chromium.

## 6. Feature Requests & Roadmap Signals
*   **Signal:** The consolidation of "Providers" into "Services" (PR #268) suggests a move toward a unified "Agent-as-a-Service" model rather than treating model providers and internal services as distinct entities.
*   **Prediction:** The next version will likely focus on expanding the **Control Plane API**, potentially exposing the daemon restart and channel management endpoints for external automation or orchestration tools.

## 7. User Feedback Summary
*   **Pain Point (Inferred):** The fixes in PR #266 and #265 imply that users attempting to run TinyClaw via Docker recently experienced severe friction with authentication and state persistence (500 errors, lost logins).
*   **Satisfaction:** The resolution of these blocking issues in v0.0.20 should significantly improve the "out-of-the-box" experience for self-hosting users.

## 8. Backlog Watch
*   **Status:** Clear.
*   There are no long-unanswered issues or stalled PRs evident in today's data. The project appears to be in a state of active maintenance with a quick turnaround on identified bugs.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest (2026-03-27)

**Project:** Moltis (github.com/moltis-org/moltis)  
**Category:** AI Agent / Personal AI Assistant  

---

### 1. Today's Overview
Moltis is currently maintaining a steady but low-volume development rhythm, with no new releases deployed today. The activity stream is characterized by infrastructure maintenance and dependency management rather than feature merging. Specifically, two new Pull Requests were opened addressing a frontend path fix and a dependency bump, while one significant feature request regarding "Local thinking" remains the focal point of community discussion. The ratio of open issues to closed ones (1:0) suggests the team is likely in a planning or backlog review phase rather than an active bug-squashing sprint.

### 2. Releases
*   **No new releases recorded today.**

### 3. Project Progress
No Pull Requests were merged today. However, two new PRs were submitted for review:
*   **[PR #492](https://github.com/moltis-org/moltis/pull/492)**: Submitted by `cyberpsyche`, this PR addresses a bug in the asset pathing for the web UI (`style.css`). This indicates ongoing refinement of the web interface module (`crates/web`).
*   **[PR #491](https://github.com/moltis-org/moltis/pull/491)**: An automated dependency update by Dependabot, bumping `picomatch` within the `npm_and_yarn` group. This reflects standard maintenance to keep the JavaScript toolchain secure and up-to-date.

### 4. Community Hot Topics
The most active item is a feature request focusing on privacy and local compute capabilities.
*   **[Issue #490 [Feature]: Local thinking](https://github.com/moltis-org/moltis/issues/490)**
    *   **Activity:** Created on 2026-03-25, updated on 2026-03-26 with 1 comment.
    *   **Analysis:** The user `Wanderspool` is requesting the ability for the AI agent to perform "thinking" or inference processes locally rather than relying solely on cloud-based LLMs. This signals a strong user demand for data privacy, offline capability, or cost reduction (avoiding API fees for reasoning steps). The "enhancement" tag suggests the maintainers are categorizing this as a potential roadmap item rather than a bug.

### 5. Bugs & Stability
*   **Low Severity:** An incorrect file path for `style.css` was identified in `crates/web/src/assets.rs`.
    *   **Status:** A fix is already proposed in **[PR #492](https://github.com/moltis-org/moltis/pull/492)**.
    *   **Impact:** Minimal, likely affecting the loading of web UI styles in specific environments or development builds.
*   **Security/Dependencies:** A minor update for `picomatch` (v4.0.3 → v4.0.4) suggests potential bug fixes or performance improvements in the matching library, though no critical vulnerabilities were highlighted in the summary.

### 6. Feature Requests & Roadmap Signals
*   **Local Thinking Capabilities:** The request in [Issue #490](https://github.com/moltis-org/moltis/issues/490) suggests users want hybrid architectures where the agent can offload reasoning to local hardware.
*   **Prediction:** Given the rising trend in local LLM usage (e.g., llama.cpp, Ollama integrations), this feature has a high probability of being prioritized if the architecture supports modular inference providers.

### 7. User Feedback Summary
*   **Pain Point:** Users are concerned about cloud dependency. The request for "Local thinking" implies a desire for lower latency, privacy, or operation in restricted network environments.
*   **Sentiment:** Constructive. The user followed the preflight checklist, indicating a high-quality contribution that respects the project's guidelines.

### 8. Backlog Watch
*   **Attention Required:** [PR #492](https://github.com/moltis-org/moltis/pull/492) (fix style.css path) requires a maintainer review to merge the fix.
*   **Attention Required:** [Issue #490](https://github.com/moltis-org/moltis/issues/490) needs a maintainer response to confirm if "Local thinking" aligns with the long-term architecture or if it is currently blocked by technical constraints.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest (2026-03-27)

## 1. Today's Overview
CoPaw is exhibiting **extremely high activity** as it approaches a major version milestone. The repository saw 50 issue updates and 44 PR updates in the last 24 hours, with a balanced ratio of open to closed PRs indicating a healthy merge cycle. The development focus is heavily centered on **stabilizing the "Context & Memory" subsystem** and expanding **Channel integrations** (specifically WeChat and Feishu). A significant surge in community contributions (first-time contributors) and the bumping of the version to `1.0.0b1` suggests a release candidate is imminent.

## 2. Releases
While no *official* stable release was published in the last 24 hours, **PR #2358** merged a version bump to `1.0.0b1`. This indicates the project has entered the beta phase for its next major release. Users should expect the v1.0.0 release soon, pending stabilization of the current context management refactor.

## 3. Project Progress
Significant advancements were merged or closed today, focusing on architecture and stability:
*   **Context Management v2.0:** **PR #2300** merged, restructure context management and configuration, introducing proactive memory search injection.
*   **Multi-Agent & Background Tasks:** **PR #2345** added support for background task execution in multi-agent collaboration, preventing UI blocking.
*   **Channel Enhancements:**
    *   **PR #2341** enabled media message support for WeCom (Enterprise WeChat).
    *   **PR #2355** fixed Telegram bot formatting issues.
    *   **PR #2353** fixed Feishu reaction event handling.
*   **Critical Fixes:**
    *   **PR #2360** fixed a critical issue causing 100% CPU usage by restricting worker count to 1.
    *   **PR #2350** addressed a data loss bug in session deletion (superseded by #2367).

## 4. Community Hot Topics
*   **Built-in Skills & MCPs (#280):** A highly active discussion (21 comments) regarding which skills should be pre-installed. Users are pushing for a "batteries-included" experience to reduce setup friction.
*   **Context & Memory Hallucinations (#2047, #2092, #1974):** Users are actively reporting that the memory compaction feature interrupts tasks and generates "hallucinated" summaries. This is the most discussed pain point currently.
*   **UI/UX Improvements (#2301):** Users are requesting "one-click updates," button-based approvals (replacing `/approve`), and seamless cross-device session continuity (PC to Mobile).

## 5. Bugs & Stability
*   **Critical: 100% CPU Usage (#2348):** Worker processes spike to 100% CPU even when idle.
    *   *Status:* **Fixed** in PR #2360 (merged).
*   **Critical: Session Deletion Data Loss (#2327):** Deleting one chat session deletes *all* sessions.
    *   *Status:* **Fix Available** in PR #2367 (Open).
*   **Critical: Feishu WebSocket Disconnect (#2336):** Feishu channel stops responding after long uptime due to lack of auto-reconnect.
    *   *Status:* **Fix Available** in PR #2311 (Open).
*   **High: Memory Compaction Hallucinations (#2092):** The summarizer creates non-existent content during context compression.
    *   *Status:* Under investigation/discussion; related to the Context v2.0 refactor.
*   **Medium: Web Console JSON Leakage (#1960):** Raw JSON structures (e.g., `[{'type': 'text'...}]`) appear in the chat UI.

## 6. Feature Requests & Roadmap Signals
*   **Context Recovery (#2047):** Request for "Context Recovery" to restore pending tasks after memory compaction. *Prediction: Likely to be addressed in the v2.0 context refactor.*
*   **Tag-based Skill Indexing (#2323):** Proposal to move away from pure LLM-semantic selection for skills to a more deterministic tag-based retrieval.
*   **Model Switching (#2314):** Request for provider-agnostic history to allow switching models mid-conversation (e.g., GPT to Claude).
*   **WeChat iLink Bot (#2260):** PR is open, indicating official WeChat personal account support is a high-priority roadmap item.

## 7. User Feedback Summary
Users are enthusiastic about the rapid development but frustrated by **stability issues in the memory subsystem**.
*   **Pain Points:** The "Memory Compaction" feature is currently viewed as a double-edged sword—it saves tokens but often breaks active tasks or produces false summaries. The "delete all sessions" bug (#2327) caused significant distress for power users.
*   **Satisfaction:** The expansion of channels (WeChat, Feishu, Xiaoyi) is highly appreciated, with users actively testing these new frontiers.

## 8. Backlog Watch
*   **PR #2141 (Memory Compaction Routing):** Open since March 23, this PR aims to route memory compaction output to user channels. It needs review as it directly addresses the visibility issues raised in Issue #2047.
*   **PR #2173 (Skill System Refactor):** A large structural refactor to introduce "Skill Pools." This is crucial for Issue #280 but has been open for several days; merging this is key to the v1.0.0 release.
*   **Issue #1604 (Language Settings Reset):** A recurring bug where language settings reset on restart. **PR #2338** proposes a fix (persist to config), needs maintainer review.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-03-27

## 1. Today's Overview
ZeptoClaw demonstrates **extremely high velocity** today, merging 24 PRs against 12 updated issues, signaling a rapidly maturing codebase focused on stability and UX. The project shipped two releases (v0.9.0 and v0.9.1), introducing Google Vertex AI support and significantly enhancing the Telegram user experience. Activity is heavily concentrated on hardening the Telegram channel (message chunking, threading, media support) and refining the onboarding flow for new users. The maintainers are shifting focus from feature expansion to "safety" and "enterprise-readiness," as seen in the new issue proposals regarding SSRF validation and policy-as-YAML.

## 2. Releases

### **v0.9.1** (Patch Release)
*   **Focus:** Bug fixes for the onboarding flow and provider configuration.
*   **Changes:**
    *   **Onboarding Fix:** Switched to a "provider-first" flow. Users now select a provider, enter the API key, and *then* see a filtered list of relevant models, fixing the issue where 128 unfiltered OpenAI models were shown.
    *   **Config Fix:** Prevented the Claude CLI import fallback from crashing when the Anthropic provider config is explicitly set to `null`.
*   **Migration Note:** Users who previously struggled with the `onboard` command seeing irrelevant models should re-run it.

### **v0.9.0** (Minor Release)
*   **Focus:** Major feature expansion (Vertex AI) and UX overhaul for Telegram.
*   **Highlights:**
    *   **Google Vertex AI Provider:** First-class support for Gemini models via Vertex regional endpoints with Application Default Credentials (ADC) auto-refresh.
    *   **Telegram UX:** Added visual feedback (👀 on receipt, ✅ on completion) to indicate message processing status.
*   **Full Changelog:** [v0.9.0 Changelog](https://github.com/qhkm/zeptoclaw/releases/tag/v0.9.0)

## 3. Project Progress
A massive **24 PRs were merged**, indicating a sprint close or stabilization effort.

*   **Telegram Channel Maturation:** The channel received a comprehensive overhaul. Merged PRs include:
    *   [PR #409](https://github.com/qhkm/zeptoclaw/pull/409): Message chunking to handle Telegram's 4096-char limit.
    *   [PR #429](https://github.com/qhkm/zeptoclaw/pull/429): Reply-to threading for better conversation context.
    *   [PR #392](https://github.com/qhkm/zeptoclaw/pull/392): "Typing" indicators while the agent thinks.
    *   [PR #420](https://github.com/qhkm/zeptoclaw/pull/420): Support for photo/image processing.
*   **Infrastructure & Tooling:**
    *   [PR #441](https://github.com/qhkm/zeptoclaw/pull/441): Fixed container engine detection (Podman vs. Docker) in lint scripts.
    *   [PR #421](https://github.com/qhkm/zeptoclaw/pull/421): Added PR guidelines specifically for AI coding assistants (Claude Code).
*   **Core Stability:**
    *   [PR #445](https://github.com/qhkm/zeptoclaw/pull/445): Fixed tricky NFC offset mapping bugs related to Unicode combining characters.

## 4. Community Hot Topics
While specific comment counts were not provided in the data feed, the volume of merged PRs from contributor **stuartbowness** suggests strong collaborative momentum on the Telegram integration.

*   **Telegram User Experience:** The community (and contributor) focus is heavily on **visual feedback**. The addition of reactions (Issue [#428](https://github.com/qhkm/zeptoclaw/issues/428)) and typing indicators addresses the "black box" problem where users didn't know if the bot was working.
*   **Safety & Supply Chain:** The "Hot Topics" are shifting toward security.
    *   Issue [#449](https://github.com/qhkm/zeptoclaw/issues/449) (SHA256 verification for skills) and [#450](https://github.com/qhkm/zeptoclaw/issues/450) (SSRF validation) suggest a user base concerned with **supply chain attacks** and **remote code execution** vectors.

## 5. Bugs & Stability
Several P2-High bugs were identified and are being actively addressed.

| Severity | Issue | Description | Status/PR |
| :--- | :--- | :--- | :--- |
| **High** | [**#456**](https://github.com/qhkm/zeptoclaw/issues/456) | **Telegram Silent Failure:** Messages >4096 chars fail silently; errors not reported to users. | **Fix PR Open:** [PR #458](https://github.com/qhkm/zeptoclaw/pull/458) |
| **High** | [**#457**](https://github.com/qhkm/zeptoclaw/issues/457) | **CLI Confusion:** `panel` subcommand fails with generic error if compiled without the feature. Needs actionable guidance. | Open |
| **Med** | [**#452**](https://github.com/qhkm/zeptoclaw/issues/452) | **Onboarding Clutter:** `onboard` showed 128 raw OpenAI models (including legacy ones). | **Fixed:** [PR #453](https://github.com/qhkm/zeptoclaw/pull/453) |
| **Med** | [**#454**](https://github.com/qhkm/zeptoclaw/issues/454) | **Config Mismatch:** Claude CLI import triggered even when Anthropic config was null. | **Fixed:** [PR #455](https://github.com/qhkm/zeptoclaw/pull/455) |

## 6. Feature Requests & Roadmap Signals
The project is clearly trending toward **Enterprise Security** and **Privacy**.

*   **Privacy-Aware Routing ([#451](https://github.com/qhkm/zeptoclaw/issues/451)):** A proposal to route sensitive prompts to local models and non-sensitive ones to the cloud. This mimics features seen in competitors like OpenShell/NemoClaw.
*   **Supply Chain Integrity ([#449](https://github.com/qhkm/zeptoclaw/issues/449)):** Request for SHA256 digest verification for "Skill" and Plugin downloads.
*   **Declarative Safety Policies ([#448](https://github.com/qhkm/zeptoclaw/issues/448)):** Moving from hardcoded `ApprovalConfig` to a YAML-based policy file for network/filesystem rules (deny-by-default).
*   **Prediction:** v0.10.0 will likely focus on "Security & Governance," implementing the SSRF validation and Policy-as-Code features currently in the proposal stage.

## 7. User Feedback Summary
*   **Pain Point - Silent Errors:** Users reported frustration when the Telegram bot failed silently on long messages ([#456](https://github.com/qhkm/zeptoclaw/issues/456)). The fix (PR #458) introduces chunking and error feedback, directly addressing this "is it broken?" anxiety.
*   **Pain Point - Onboarding Friction:** New users were overwhelmed by the model selection list showing irrelevant legacy models (e.g., `babbage-002`). The fix in v0.9.1 creates a guided "Provider → Key → Model" flow.
*   **Use Case - Mobile/Chat Ops:** Heavy investment in Telegram features (photos, threading, reactions) indicates a strong user preference for interacting with the agent via mobile chat apps rather than strictly CLI.

## 8. Backlog Watch
*   [**Issue #388**](https://github.com/qhkm/zeptoclaw/issues/388) (**ACP Protocol Bugs**): This CLOSED issue addressed protocol semantics for `initialize` and HTTP notifications. While closed, the complexity of "session/global state" mentioned in the summary suggests the ACP (Agent Communication Protocol) implementation is fragile and worth monitoring for regressions.
*   [**Issue #457**](https://github.com/qhkm/zeptoclaw/issues/457) (**CLI Feature Flags**): Currently OPEN. This affects users installing minimal binaries. A fix is needed to improve the "out of the box" experience for users who don't install the "full" version.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

Here is the project digest for EasyClaw (RivonClaw) based on the data provided for 2026-03-27.

### **EasyClaw Project Digest**
**Date:** 2026-03-27
**Repository:** [github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

#### **1. Today's Overview**
The EasyClaw project is currently experiencing a phase of strategic reflection rather than code deployment. With zero pull requests and no new releases recorded today, development velocity appears paused or operating behind the scenes. However, the project shows healthy signs of early traction, evidenced by a community member noting "246 stars in ~6 weeks." The primary focus today shifts from technical maintenance to strategic planning, specifically regarding the project's positioning as a "digital butler" built on OpenClaw.

#### **2. Releases**
*   **Status:** No new releases were recorded in the last 24 hours.
*   **Notes:** The project remains on its latest stable version. Users should consult the repository's main README for current installation instructions.

#### **3. Project Progress**
*   **Code Activity:** There was no visible progress in terms of merged Pull Requests or closed Issues today. The codebase remains static regarding new commits merged into the main branch.
*   **Feature Advancement:** No features were advanced or fixed in this specific 24-hour window.

#### **4. Community Hot Topics**
*   **Topic:** Strategic Growth and Positioning
*   **Item:** [Issue #27: 💡 Proposal: Community Growth Strategy for RivonClaw](https://github.com/gaoyangz77/easyclaw/issues/27)
    *   **Author:** [Gingiris](https://github.com/Gingiris)
    *   **Analysis:** This is the sole active item of the day. A contributor with experience in scaling open-source projects (citing work with AFFiNE) initiated a discussion on how to transition RivonClaw from early traction to widespread adoption.
    *   **Underlying Needs:** The community is signaling a need for **clear market positioning** ("digital butler" vs. generic AI agent) and a structured roadmap. The user explicitly mentions helping projects move from "0 to 33k stars," indicating a desire for the maintainers to adopt a more aggressive or structured growth strategy.

#### **5. Bugs & Stability**
*   **Status:** No bugs, crashes, or regressions were reported in the last 24 hours.
*   **Assessment:** Based on the lack of negative issue activity, the current build appears stable for existing users.

#### **6. Feature Requests & Roadmap Signals**
*   **Marketing & Ecosystem:** While not a code feature, Issue #27 strongly suggests that "Community Growth" and "Positioning" should be on the immediate roadmap.
*   **"Digital Butler" Capabilities:** The issue reinforces the project's specific direction as a "digital butler" on top of OpenClaw. This implies future features should focus on high-level personal assistance tasks rather than low-level infrastructure, distinguishing it from the base OpenClaw framework.

#### **7. User Feedback Summary**
*   **Sentiment:** Positive.
*   **Pain Points:** No technical pain points were raised today.
*   **Satisfaction:** The external feedback highlights satisfaction with the core concept ("love the positioning"). The engagement suggests users are eager to see the project survive the "early traction" phase and mature into a sustainable product.

#### **8. Backlog Watch**
*   **Attention Required:** [Issue #27](https://github.com/gaoyangz77/easyclaw/issues/27) currently has 0 comments from maintainers.
*   **Action Item:** As this is a high-value strategic proposal offering free expertise based on successful precedents (AFFiNE), maintainers should prioritize engaging with this thread to capitalize on the momentum generated by the recent star count growth.

</details>