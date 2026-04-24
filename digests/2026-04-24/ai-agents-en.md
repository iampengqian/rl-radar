# OpenClaw Ecosystem Digest 2026-04-24

> Issues: 500 | PRs: 500 | Projects covered: 14 | Generated: 2026-04-24 01:09 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-04-24

## 1. Today's Overview
OpenClaw is experiencing exceptionally high engagement, with 500 issues and 500 pull requests updated in the last 24 hours, indicating an active, fast-moving development cycle and a highly engaged community. The repository recently shipped version `2026.4.22`, introducing a major expansion of the xAI provider capabilities, which has driven a subsequent wave of integration and dependency-related bugs. A primary theme of today's activity revolves around infrastructure regressions tied to the packaging of bundled runtime dependencies (specifically Feishu/Lark and Nostr) which are currently blocking fresh installations for many users. Meanwhile, core maintainers and community contributors are actively collaborating on a high volume of patches focused on plugin architecture, multi-modal media generation, and cron/heartbeat stability.

## 2. Releases
**v2026.4.22 (openclaw 2026.4.22)**
*   **Changes:** Massively expanded the Providers/xAI integration. It now supports image generation (including `grok-imagine-image` / `grok-imagine-image-pro` and reference-image edits), text-to-speech (six live xAI voices, MP3/WAV/PCM/G.711 formats), speech-to-text (`grok-stt` audio transcription), and realtime transcription.

## 3. Project Progress
Today saw 185 pull requests merged or closed, reflecting rapid iteration. Key advancements include:
*   **Media & Image Generation:** Significant progress in unifying image generation across providers. Closed PRs added OpenRouter image generation support ([#67668](https://github.com/openclaw/openclaw/pull/67668)) and fixed Google image generation timeout/network handling ([#67344](https://github.com/openclaw/openclaw/pull/67344), [#67254](https://github.com/openclaw/openclaw/pull/67254)).
*   **Plugin Architecture:** Core infrastructure for plugins was hardened. Merged PRs addressed packaged runtime dependency installs ([#70852](https://github.com/openclaw/openclaw/pull/70852)), deferred undefined config validation ([#70811](https://github.com/openclaw/openclaw/pull/70811)), and fixed `[object Object]` probe logs in the ACPX extension ([#70849](https://github.com/openclaw/openclaw/pull/70849)).
*   **Core Systems:** Cron execution limits were fixed to support entries up to 5000 ([#70855](https://github.com/openclaw/openclaw/pull/70855)), local LLM timeout propagation was patched to respect the 15-minute config limit ([#70831](https://github.com/openclaw/openclaw/pull/70831)), and an upcoming Google Meet participant plugin ([#70765](https://github.com/openclaw/openclaw/pull/70765)) was introduced.

## 4. Community Hot Topics
*   **Native Agent Identity & Trust Verification** ([#49971](https://github.com/openclaw/openclaw/issues/49971)): With 102 comments, this RFC proposes integrating ERC-8004 and W3C DID standards for cryptographic agent identity. It highlights a strong community need for decentralized trust verification in multi-agent networks.
*   **Linux/Windows Clawdbot Apps** ([#75](https://github.com/openclaw/openclaw/issues/75)): Still actively commented (93 total), users are heavily requesting desktop parity for Linux and Windows, matching the existing macOS app capabilities.
*   **Real-time Voice Conversation Support** ([#7200](https://github.com/openclaw/openclaw/issues/7200)): With 22 comments and 23 thumbs-up, this feature request underscores the demand for native WebRTC/Twilio bidirectional streaming audio.
*   **Image Generation via OpenRouter** ([#55066](https://github.com/openclaw/openclaw/issues/55066)): Garnering 8 thumbs-up and closure today, users successfully pushed for `image_generate` compatibility with OpenRouter models.

## 5. Bugs & Stability
*   **Critical: Global Install Dependency Regressions**
    *   Fresh installs via `npm install -g openclaw@latest` are universally failing due to missing `@larksuiteoapi/node-sdk` and `nostr-tools` modules ([#70457](https://github.com/openclaw/openclaw/issues/70457), [#70292](https://github.com/openclaw/openclaw/issues/70292), [#70346](https://github.com/openclaw/openclaw/issues/70346), [#70587](https://github.com/openclaw/openclaw/issues/70587)). *Fix Status: Actively addressed in merged PR [#70852](https://github.com/openclaw/openclaw/pull/70852).*
    *   The v2026.4.21 update broke bundled runtime dependencies, causing `doctor --fix` to fail and overwrite `openclaw.json` into an invalid state ([#70096](https://github.com/openclaw/openclaw/issues/70096)).
*   **High: Model & Schema Failures**
    *   OpenRouter requests failing with 401 Authentication errors ([#51056](https://github.com/openclaw/openclaw/issues/51056)).
    *   Providers rejecting tool payloads post-v2026.4.15 update ([#68735](https://github.com/openclaw/openclaw/issues/68735)) and Claude Opus 4.7 failing due to incorrect adaptive thinking parameters ([#67888](https://github.com/openclaw/openclaw/issues/67888)). *Fix Status: Provider metadata/auth alignment tackled in [PR #70826](https://github.com/openclaw/openclaw/pull/70826).*
*   **High: System / Chat Stability**
    *   Gateway stalls for ~20 minutes on startup when loading session history ([#70050](https://github.com/openclaw/openclaw/issues/70050)).
    *   Context compaction silently killing conversation memory ([#60213](https://github.com/openclaw/openclaw/issues/60213)).

## 6. Feature Requests & Roadmap Signals
*   **Voice & Media Expansion:** Following the xAI voice/media release, real-time WebRTC voice support ([#7200](https://github.com/openclaw/openclaw/issues/7200)) and the proposed Google Meet plugin ([#70765](https://github.com/openclaw/openclaw/pull/70765)) signal a strong pivot toward voice/video communication agents.
*   **Advanced Security & Policy:** Requests for CaMeL Prompt Injection Defense ([#39160](https://github.com/openclaw/openclaw/issues/39160)), Unbypassable outbound policy enforcement ([#56349](https://github.com/openclaw/openclaw/issues/56349)), and a scoped mention pattern policy ([#70846](https://github.com/openclaw/openclaw/pull/70846)) indicate upcoming agent-boundary security hardening.
*   **Provider Expansions:** Native NVIDIA NIM support ([#50898](https://github.com/openclaw/openclaw/issues/50898)) and OpenRouter image generation are highly requested. Given today's merges, OpenRouter image generation is confirmed for the next release.

## 7. User Feedback Summary
Users are thrilled with the rapid addition of new providers (like xAI multimodal) and new platforms (Google Meet PR). However, there is considerable frustration regarding **stability regressions introduced in recent point releases**, particularly v2026.4.21. The reliance on workspace dependencies (`workspace:*`) that leaked into production npm packages has significantly impacted the Docker and global CLI user base. Additionally, users express pain regarding silent failures: compaction silently wiping context ([#60213](https://github.com/openclaw/openclaw/issues/60213)), media being imperceptibly dropped ([#69310](https://github.com/openclaw/openclaw/pull/69310)), and provider errors not surfacing to the Webchat UI ([#70848](https://github.com/openclaw/openclaw/pull/70848)). Transparent error handling is a critical area for user satisfaction improvement.

## 8. Backlog Watch
*   **Issue #75 (Linux/Windows Apps):** A highly requested feature (71 thumbs-up) that has been open since January 2026. Needs an official maintainer roadmap commitment.
*   **Issue #49971 (Agent Identity RFC):** A massive 102-comment thread on decentralized identity that requires a definitive architectural decision from core maintainers.
*   **Issue #17101 (Telegram Voice Transcription):** Telegram `.ogg` files are not being auto-transcribed despite valid STT configuration. Tagged as `stale`, but negatively impacts a primary user channel.
*   **PR #65972 (Bluesky Skill):** An extra-large community PR adding a Bluesky CLI tool and MCP server, still awaiting maintainer review and merging.
*   **PR #68341 (Critical Vulnerabilities):** An AI-assisted security audit PR fixing logic regressions and MCP loop vulnerabilities. Needs urgent maintainer review given the project's focus on agent boundaries.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report for the AI agent and personal AI assistant open-source ecosystem based on the April 24, 2026 community digests.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently experiencing massive parallel development, characterized by aggressive feature expansion and rapid community adoption. Projects are racing to support multi-modal interactions—specifically voice/video gateways and advanced image generation—while transitioning from simple chatbots into robust, autonomous agents capable of complex tool orchestration. A clear maturation point has been reached regarding security and operational stability; maintainers are increasingly prioritizing sandbox hardening, cryptographic identity, and observability over merely shipping new LLM providers. Meanwhile, projects are heavily shifting toward edge and local deployments, reflected in architectural decisions to shrink binary sizes and optimize for ARM64 and offline environments.

### 2. Activity Comparison
*Health Score Key: A+ (Thriving/Highly Responsive), A (Active/Healthy), B (Moderate/Stable), C (Strained/Needs Attention), D (Stagnant/Unresponsive)*

| Project | Issues Updated (24h) | PRs Updated (24h) | Recent Release Status | Health Score | Core Focus |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | v2026.4.22 (Released) | **A+** | Multimodal integrations, dependency fixes |
| **Hermes Agent** | 50 | 50 | v0.11.0 (Released) | **A** | UI rewrite, execution receipts |
| **NanoBot** | 14 | 21 | v0.1.5.post2 (Stable) | **A+** | Memory management, sub-agent loops |
| **PicoClaw** | 36 | 45 | Nightly (Unstable) | **A** | MCP integration, Bedrock streaming |
| **NanoClaw** | 16 | 30 | Upcoming (Imminent) | **A+** | Security hardening, Signal adapter |
| **IronClaw** | 29 | 43 | Upcoming (Engine-v2) | **A** | Engine-v2 refactor, CI/CD redesign |
| **Moltis** | 5 | 13 | Upcoming (Imminent) | **A+** | Bug squashing, schema compatibility |
| **CoPaw** | 50 | 50 | v1.1.3.post1 / v1.1.4-beta | **A+** | Security, desktop UX, channel fixes |
| **ZeptoClaw** | 15 | 16 | Pre-release | **A+** | Edge/IoT binary size, security audit |
| **ZeroClaw** | 50 | 50 | Tracking v0.7.4 | **A** | Observability, voice VAD, Docker |
| **LobsterAI** | 6 | 13 | Release branch cut | **A** | MCP abort signals, UI responsiveness |
| **NullClaw** | Active spike | 0 (Merged/Closed) | None | **C** | Configuration/load failures |
| **EasyClaw** | 1 | 0 | v1.8.8 (Released) | **B** | Distribution/Gateway fixes |
| **TinyClaw** | 0 | 0 | None | **D** | No activity |

### 3. OpenClaw's Position
*   **Advantages vs. Peers:** OpenClaw remains the undisputed core reference implementation with the highest raw throughput (500 issues/PRs daily). Its ecosystem benefits from rapid, large-scale provider expansions (e.g., xAI voice/media integration) and an enormous contributor base.
*   **Technical Approach Differences:** Unlike projects rewriting core UIs (Hermes Agent) or shrinking binary sizes for IoT (ZeptoClaw), OpenClaw focuses on breadth of integration and horizontal scale. However, this "move fast" approach has introduced technical debt, notably workspace dependency leaks that broke global npm CLI installs—a friction point that heavily managed projects like Moltis and ZeptoClaw have largely avoided.
*   **Community Size Comparison:** OpenClaw's community is roughly an order of magnitude larger than mid-tier projects (PicoClaw, IronClaw) and entirely eclipses nascent or stalled projects (NullClaw, EasyClaw). This allows OpenClaw to process massive architectural RFCs (like ERC-8004 decentralized identity) that smaller projects cannot yet prioritize.

### 4. Shared Technical Focus Areas
Several converging requirements are emerging across the ecosystem:
*   **LLM Parameter Drift:** The release of Claude Opus 4.7 has broken multiple frameworks due to deprecated `temperature` parameters. **NanoBot, ZeroClaw, and Hermes** all reported critical failures requiring immediate patches to LLM provider schemas.
*   **Security & Sandbox Hardening:** Trust boundaries are a top priority. **NanoClaw** patched a critical host privilege escalation via Docker, **ZeptoClaw** introduced SHA-256 hash-chain audit trails, **OpenClaw** is exploring W3C DID standards, and **ZeroClaw** is strictly enforcing execution policies for WASM plugins.
*   **Advanced Memory & Context Compression:** Silent context loss during compression/history compaction is a universal pain point. **OpenClaw, Hermes, NanoBot, and PicoClaw** are all actively dealing with bugs related to memory permanently breaking during summarization or long tool chains.
*   **Channel & Message Concurrency:** Multi-platform users are hitting echo/drop rates. **PicoClaw, NanoClaw, and CoPaw** are actively resolving message routing failures and silent drops across Telegram, Discord, and WeChat integrations.

### 5. Differentiation Analysis
*   **Edge & IoT vs. Cloud Monoliths:** **ZeptoClaw** is highly differentiated with its strict <7MB binary size limit and focus on MQTT/robotics, contrasting sharply with **OpenClaw** and **IronClaw**, which require heavy runtimes (Node.js/Rust) and assume constant cloud connectivity.
*   **Local-First vs. API-Dependent:** **PicoClaw** and **Moltis** are optimizing heavily for local LLMs (Ollama, LM Studio), focusing on KV cache invalidation fixes and local hardware acceleration. Meanwhile, **EasyClaw** and **LobsterAI** focus more on seamless enterprise and desktop web UI experiences.
*   **Architecture:** **IronClaw** is undergoing a deep architectural rewrite (Engine-v2, replacing WASM tools with HTTP declarations), targeting massive enterprise scale. **Hermes Agent** has completely rewritten its frontend in React/Ink, prioritizing terminal UX over backend fundamental shifts.

### 6. Community Momentum & Maturity
*   **Rapid Iterators (Momentum):** **OpenClaw, NanoClaw, NanoBot, and CoPaw** are moving at breakneck speeds. NanoClaw and NanoBot are particularly notable for their 24-hour turnaround times on critical security and memory bugs, indicating highly responsive maintainers.
*   **Architectural Shifts (Maturing):** **IronClaw and Hermes Agent** are in heavy transitional states. They have high output but are facing prolonged integration QA (e.g., TUI parity issues in Hermes, Engine-v2 state drift in IronClaw).
*   **Stabilizing / Struggling:** **NullClaw** is experiencing community friction due to a complete halt in maintainer merges, leading to user frustration over onboarding. **EasyClaw** is in a maintenance/survival mode, dealing primarily with OS gatekeeper friction rather than feature development.

### 7. Trend Signals
*   **Enterprise Observability is Non-Negotiable:** As agents move from novelties to production tools, the demand for OpenTelemetry integration and cost-tracking is surging (seen in **ZeroClaw, NanoBot, and IronClaw**). Developers expect detailed tracing for autonomous loops.
*   **The "Bypass Permissions" Backlash:** Communities are loudly rejecting overly aggressive safety guards that break automated workflows (e.g., in **CoPaw and PicoClaw**). The trend is moving toward strict sandboxing (like `nsjail` in Hermes) rather than crippling the agent's execution capabilities.
*   **Local/Edge Resilience:** There is a distinct industry push toward disconnected computing. Integration of non-transformer models (e.g., Liquid AI in **ZeptoClaw**) and offline fallbacks indicates that the next phase of AI agents will not purely rely on OpenAI/Anthropic APIs.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-24

## 1. Today's Overview
NanoBot demonstrates **highly active development and strong community engagement** today, with 21 pull requests updated (9 merged/closed) and 14 issues processed (9 closed). The project's momentum is heavily focused on **agent memory management, bug stabilization, and expanding integration capabilities**. The rapid community response to newly reported bugs—often shipping fixes within 24 hours—indicates excellent maintainer responsiveness and a healthy project lifecycle.

## 2. Releases
No new official releases were recorded today. The project remains on the **v0.1.5.post2** version.

## 3. Project Progress
Significant headway was made in merging crucial bug fixes and feature enhancements. The most notable progress includes:
*   **Memory & Stability Fixes:** A major series of patches by `chengyongru` ([PR #3412](https://github.com/HKUDS/nanobot/pull/3412), [PR #3413](https://github.com/HKUDS/nanobot/pull/3413), [PR #3414](https://github.com/HKUDS/nanobot/pull/3414)) successfully landed to prevent `history.jsonl` from bloating and getting stuck during long tool chains, capped recent history in the system prompt to 32K, and were safely cherry-picked to the `nightly` branch. 
*   **Email Loop Prevention:** [PR #3234](https://github.com/HKUDS/nanobot/pull/3234) was merged to fix a critical infinite self-reply loop when the agent emails itself.
*   **UX Improvements:** Telegram inline keyboard support was officially merged via [PR #3398](https://github.com/HKUDS/nanobot/pull/3398), and Feishu gained native LaTeX rendering support ([PR #3307](https://github.com/HKUDS/nanobot/pull/3307)).
*   **Configuration Enhancements:** The closed [PR #3264](https://github.com/HKUDS/nanobot/pull/3264) paves the way for easier custom provider support.

## 4. Community Hot Topics
The community was highly engaged in architecture and configuration discussions:
*   **Scheduled Tasks Mechanism ([Issue #2892](https://github.com/HKUDS/nanobot/issues/2892), 15 comments):** Users are actively discussing the counterintuitive design requiring a `gateway` restart for `agent`-created cron tasks to take effect.
*   **Configuration Migration to TOML ([Issue #3402](https://github.com/HKUDS/nanobot/issues/3402), 7 comments):** A strongly supported proposal to replace `config.json` with TOML for better human readability and inline comments.
*   **Skill Management Flexibility ([Issue #1932](https://github.com/HKUDS/nanobot/issues/1932), 7 comments):** A "good first issue" requesting the ability to *disable* skills instead of deleting them entirely, reflecting a user need for more dynamic runtime configurations.
*   **WhatsApp Voice Support ([Issue #2152](https://github.com/HKUDS/nanobot/issues/2152), 2 comments, 2 👍):** A community member built a Fish Audio integration for STT/TTS but is highlighting friction with the WhatsApp bridge breaking on updates.

## 5. Bugs & Stability
Several high-severity bugs were reported, but maintainer/community reaction times were exceptionally fast:
*   **Critical RAM Consumption ([Issue #3410](https://github.com/HKUDS/nanobot/issues/3410)):** Users reported memory tripling from ~200MB to ~600MB after upgrading to v0.1.5.post2. The new "dream" feature is the primary suspect. *(No fix PR yet, requires immediate maintainer attention).*
*   **Anthropic Claude Opus 4.7 400 Errors ([Issue #3417](https://github.com/HKUDS/nanobot/issues/3417)):** Hardcoded `temperature=1.0` breaks the new Claude model. **Fix exists:** [PR #3418](https://github.com/HKUDS/nanobot/pull/3418) was opened the very same day to omit the deprecated parameter.
*   **Multi-Agent Repeated Replies ([Issue #3377](https://github.com/HKUDS/nanobot/issues/3377)):** Subagents completing tasks cause the main agent to summarize repeatedly. *(No fix PR yet).*
*   **WhatsApp Auth Failure ([Issue #3406](https://github.com/HKUDS/nanobot/issues/3406)):** The recent version breaks WhatsApp connectivity with an "Invalid token" error.

## 6. Feature Requests & Roadmap Signals
Today's open PRs signal a strong trajectory toward **enterprise readiness, complex agent orchestration, and advanced memory governance**:
*   **Observability:** [PR #3173](https://github.com/HKUDS/nanobot/pull/3173) introduces OpenTelemetry tracing with Langfuse/LangSmith support, indicating a push for production-grade monitoring.
*   **Sub-agent Orchestration:** [PR #3303](https://github.com/HKUDS/nanobot/pull/3303) adds `spawn_status`/`spawn_cancel` tools and loop detection, essential for reliable autonomous agents.
*   **Memory Governance Protocol (MGP):** [PR #3408](https://github.com/HKUDS/nanobot/pull/3408) introduces governed cross-session memory.
*   **Dream Control:** [PR #3400](https://github.com/HKUDS/nanobot/pull/3400) allows users to restrict the "dream" feature from editing core identity files (`SOUL.md`, `USER.md`).
*   **Model Routing:** [PR #3416](https://github.com/HKUDS/nanobot/pull/3416) and [PR #3358](https://github.com/HKUDS/nanobot/pull/3358) add `prefer_free` options for OpenRouter and general model presets for quick switching.

## 7. User Feedback Summary
Users are pushing NanoBot into complex, multi-modal production environments, which is exposing growing pains. The loss of the `skill-creator` tool in recent updates ([Issue #2049](https://github.com/HKUDS/nanobot/issues/2049)) has caused frustration, as it disrupts standard workflow. Additionally, users leveraging multi-agent setups are experiencing orchestration bottlenecks (repeated replies, looping). However, satisfaction remains high regarding the project's modularity, as evidenced by users successfully building custom integrations (Fish Audio, Olostep web search) and submitting them upstream.

## 8. Backlog Watch
*   **Critical Resource Leak:** [Issue #3410](https://github.com/HKUDS/nanobot/issues/3410) (Large RAM consumption) needs urgent triage as it impacts basic hosting viability.
*   **Core Tool Missing:** [Issue #2049](https://github.com/HKUDS/nanobot/issues/2049) (Skill creator missing) needs a maintainer response, as it limits agent self-evolution.
*   **Session Management Overhaul:** [Issue #162](https://github.com/HKUDS/nanobot/issues/162) remains open since February; as multi-agent use grows, this fundamental session key limitation will likely cause increased context bleeding.
*   **Stale API Key Bug:** [Issue #173](https://github.com/HKUDS/nanobot/issues/173) continues to pop up, suggesting persistent caching issues in the configuration layer that need a definitive fix.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-24

## 1. Today's Overview
The Hermes Agent project is experiencing a massive spike in community and maintainer activity following the release of **v0.11.0** ("The Interface release"). With 100 total events (50 issues, 50 PRs) updated in the last 24 hours and a highly active open PR pipeline (34 open vs. 16 merged/closed), project momentum is exceptionally high. The maintainers and contributors are actively iterating on the newly rewritten React/Ink CLI, addressing multi-platform gateway bugs, and proposing new architectural features like execution receipts. Overall project health appears robust but is currently under heavy iteration strain, as evidenced by the high volume of new P1/P2 bug reports.

## 2. Releases
*   **v0.11.0 (v2026.4.23)**: Released yesterday, this is a monumental update encompassing 1,556 commits, 761 merged PRs, and over 224,000 lines of code changes across 1,314 files (with 29 direct community contributors and 290 co-authors). 
    *   **Key Changes:** Billed as "The Interface release," it features a full React/Ink rewrite of the interactive CLI, moving away from the previous text-based frontend.
    *   **Migration Notes:** Users upgrading from v0.9.0 should note that the TUI (v2) is still catching up to v1 feature parity (see Issue [#12130](https://github.com/NousResearch/hermes-agent/issues/12130)). 

## 3. Project Progress
Today saw 16 merged or closed PRs, focusing heavily on hardening the agent's core execution, memory systems, and platform gateways:
*   **Execution Receipts System:** A major architectural push by contributor `MestreY0d4-Uninter` introduced an auditable record system for delegated tasks. This was split into three active, chained PRs: the core engine ([#14836](https://github.com/NousResearch/hermes-agent/pull/14836)), `delegate_tool` integration ([#14837](https://github.com/NousResearch/hermes-agent/pull/14837)), and CLI integration ([#14838](https://github.com/NousResearch/hermes-agent/pull/14838)).
*   **Gateway & Delegation Fixes:** Progress on fixing session leaks and stale statuses for long-running delegated tasks ([#12080](https://github.com/NousResearch/hermes-agent/pull/12080)), and softening busy state updates ([#12069](https://github.com/NousResearch/hermes-agent/pull/12069)).
*   **Terminal Tool Enhancements:** A new `nsjail` backend PR ([#14191](https://github.com/NousResearch/hermes-agent/pull/14191)) was proposed for lightweight (~20ms) local sandboxing, a significant boost for high-frequency terminal workflows.
*   **DingTalk Integrations:** Expanded enterprise capabilities with a proactive message API for DingTalk ([#12077](https://github.com/NousResearch/hermes-agent/pull/12077)).

## 4. Community Hot Topics
*   **Anthropic/Claude Subscription Auth ([#6475](https://github.com/NousResearch/hermes-agent/issues/6475)):** With 22 comments and 15 thumbs-up, this is the most pressing user issue. Users are repeatedly hitting "You're out of extra usage" errors when using native Anthropic subscription authentication. This indicates a high demand for seamless, native LLM provider billing integration without requiring API keys.
*   **TUI v2 Feature Parity ([#12130](https://github.com/NousResearch/hermes-agent/issues/12130)):** Users are actively discussing the missing ~23 slash commands and `@` context references in the newly released v0.11.0 Ink TUI.
*   **Windows/WSL Auto-Start ([#10014](https://github.com/NousResearch/hermes-agent/issues/10014)):** A highly requested feature (1 comment, 1 thumbs-up but high visibility) highlighting the pain points for desktop users trying to run Hermes as a persistent background service on Windows.

## 5. Bugs & Stability
Several high-severity (P0/P1) bugs have been reported, particularly concerning the gateway and agent context handling:
*   **[P0 Security] Discord Cross-Guild DM Bypass ([#12136](https://github.com/NousResearch/hermes-agent/issues/12136)):** CVSS 8.1 vulnerability where `DISCORD_ALLOWED_ROLES` fail to scope by guild, allowing unauthorized DM usage. *No fix PR is visible yet.*
*   **[P1 Security] Session Leakage across Users ([#12173](https://github.com/NousResearch/hermes-agent/issues/12173)):** The `/resume` command resolves titled sessions globally, allowing one user to hijack another user's session. *No fix PR is visible yet.*
*   **[P1 Bug] Context Permanently Lost on Compression Failure ([#12131](https://github.com/NousResearch/hermes-agent/issues/12131)):** If summarization fails, the agent uses a static placeholder, permanently destroying the current task context.
*   **[P1 Bug] JSONDecodeError bypasses retry logic ([#14782](https://github.com/NousResearch/hermes-agent/issues/14782)):** Transient provider JSON errors crash the agent instead of triggering a retry.
*   **[P1 Bug] Cron Jobs failing with Google/OpenRouter ([#13653](https://github.com/NousResearch/hermes-agent/issues/13653)):** Cron jobs consistently fail while normal chats work fine. 

## 6. Feature Requests & Roadmap Signals
Based on recent issues, expect the following areas to dominate the v0.12.0 roadmap:
*   **Agent Web Publishing ([#378](https://github.com/NousResearch/hermes-agent/issues/378)):** A proposed integration with `here.now` for instant static web hosting of agent-created content. This strongly signals Hermes is moving toward autonomous web-deployment capabilities.
*   **Prompt Caching Optimization ([#12089](https://github.com/NousResearch/hermes-agent/issues/12089)):** A proposal for conversation-aware sliding cache breakpoints. This shows the community is pushing for lower latency and reduced token costs for explicit-caching backends (like Anthropic).
*   **Multi-Platform Session Isolation:** Fixes requested in [#12099](https://github.com/NousResearch/hermes-agent/issues/12099) indicate upcoming refactoring of `build_session_key()` to properly support multi-profile setups (e.g., separate WeChat/Feishu profiles).

## 7. User Feedback Summary
Users are actively stress-testing v0.11.0 across diverse environments. There is visible excitement around the new TUI and local sandboxing options. However, pain points are heavily concentrated in **custom provider configurations** and **platform integrations**. Users running local LLMs via Ollama or custom OpenAI endpoints are struggling with model validation fallbacks ([#12153](https://github.com/NousResearch/hermes-agent/issues/12153), [#12146](https://github.com/NousResearch/hermes-agent/issues/12146)). Additionally, Chinese platform users (WeChat, DingTalk) are providing critical feedback regarding session management and async timeouts ([#12154](https://github.com/NousResearch/hermes-agent/issues/12154)). 

## 8. Backlog Watch
The following important items require immediate maintainer attention:
*   **SSRF Protection Over-blocking ([#3777](https://github.com/NousResearch/hermes-agent/issues/3777)):** Open since late March, this P2 bug breaks Hermes for users running modern proxy/TUN software (Clash, Mihomo) by misclassifying RFC 2544 IPs.
*   **MCP Parameter Serialization ([#3947](https://github.com/NousResearch/hermes-agent/issues/3947)):** Open since March 30th, this breaks all number/array payloads over the MCP tool bridge, stalling users relying on the Model Context Protocol ecosystem.
*   **Delegate Task Hanging ([#14724](https://github.com/NousResearch/hermes-agent/issues/14724)):** A P1 bug where long-context web tasks with high max-iterations hang at 0 API calls, resulting in wasted compute.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-04-24

## 1. Today's Overview
PicoClaw is experiencing a highly active development phase, characterized by a significant influx of community-driven issues and new feature Pull Requests. The project saw 36 open issues and 45 active PRs in the last 24 hours, indicating robust community engagement alongside ongoing iterative development. Activity is heavily concentrated around expanding LLM provider support (such as AWS Bedrock and Intel OpenVINO) and refining the Model Context Protocol (MCP) integration. However, the high volume of open issues—particularly cross-platform and channel-specific bugs—suggests that stability and edge-case handling are becoming growing pains for the expanding user base.

## 2. Releases
- **nightly: v0.2.7-nightly.20260424.f4400472**
  - **Details**: Automated nightly build targeting the `main` branch.
  - **Notes**: As an automated build, it may be unstable. Use with caution in production environments. The progression towards `v0.2.7` suggests upcoming stabilization.

## 3. Project Progress
Six PRs were merged or closed today, highlighting targeted improvements in core infrastructure and bug fixing:
- **MCP Management CLI Interface**: [PR #2641](https://github.com/sipeed/picoclaw/pull/2641) introduced a comprehensive CRUD CLI suite (`picoclaw mcp`) for managing MCP server configurations directly from the terminal.
- **Bedrock Streaming Support**: [PR #2645](https://github.com/sipeed/picoclaw/pull/2645) implemented the `StreamingProvider` interface for AWS Bedrock, enabling real-time token streaming via the ConverseStream API.
- **Chat Tool Feedback Fix**: [PR #2644](https://github.com/sipeed/picoclaw/pull/2644) resolved a regression where animated tool feedback was overwriting earlier messages in chats (particularly noticeable on Telegram).
- **CI/CD Optimizations**: [PR #2643](https://github.com/sipeed/picoclaw/pull/2643) restructured nightly workflows to build the macOS CGO launcher in parallel and fixed Docker Hub login constraints for forks.
- **Docker/PID File Fix**: [PR #2642](https://github.com/sipeed/picoclaw/pull/2642) treated PID=1 as stale in PID files, fixing container startup crashes on bind-mounted volumes.
- **Tool Schema Validation**: Merged [PR #2128](https://github.com/sipeed/picoclaw/pull/2128) ensured all tool parameters have valid JSON Schema properties, fixing compatibility with strict OpenAI APIs like LM Studio and local open-weight models.

## 4. Community Hot Topics
- **API Key Rotation / Multi-Account Stacking** ([Issue #2408](https://github.com/sipeed/picoclaw/issues/2408) - 9 comments): Users are highly interested in a "Cartridge-Belt" feature to automatically rotate API keys to bypass rate limits and quotas, highlighting the pain point of strict provider limitations.
- **Ollama Cloud Credentialing** ([Issue #2225](https://github.com/sipeed/picoclaw/issues/2225) - 8 comments): Strong demand for native credential options for Ollama cloud deployments, showing users are moving away from local Ollama instances to cloud-hosted ones.
- **Scheduled Task Execution Failures** ([Issue #2468](https://github.com/sipeed/picoclaw/issues/2468) - 6 comments): A critical ongoing discussion where the `cron` tool fails due to "scheduling command execution is restricted to internal channels."
- **New Channel Requests (SMTP)** ([Issue #2465](https://github.com/sipeed/picoclaw/issues/2465) - 5 comments): Users want an SMTP channel to send periodic reports (e.g., project updates, system checks) directly to email.
- **Unsafe Terminal Control Characters** ([Issue #2377](https://github.com/sipeed/picoclaw/issues/2377) - 5 comments): Security/UX concerns regarding raw ANSI control bytes and Unicode bidi format characters in `exec` tool logs, which can mislead or break terminal rendering.

## 5. Bugs & Stability
Stability issues reported today heavily feature channel concurrency, path handling, and provider authentication:
- **Multiple Channel Echo & Message Drop** (High Severity): [Issue #2446](https://github.com/sipeed/picoclaw/issues/2446) and [Issue #2447](https://github.com/sipeed/picoclaw/issues/2447) show that multi-channel setups cause messages to be echoed back or dropped if sent in rapid succession.
- **Windows Path Separator Mismatch** (Medium Severity): [Issue #2472](https://github.com/sipeed/picoclaw/issues/2472) causes the `list_dir` tool to fail with "invalid argument" due to backslash handling.
- **Safeguard False Positives** (Medium Severity): [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042) and [Issue #2519](https://github.com/sipeed/picoclaw/issues/2519) highlight that the `exec` guard incorrectly blocks innocent commands (like `curl wttr.in`) and causes mass errors by restricting workspace access too aggressively.
- **WhatsApp Native Silent Failures** (Medium Severity): [Issue #2540](https://github.com/sipeed/picoclaw/issues/2540) and [Issue #2541](https://github.com/sipeed/picoclaw/issues/2541) show that LID-migrated accounts and group triggers are silently dropping messages.
- **Note**: Fix PRs for tool schema strictness ([PR #2128](https://github.com/sipeed/picoclaw/pull/2128)) and tool feedback ([PR #2644](https://github.com/sipeed/picoclaw/pull/2644)) were opened/merged today to address related stability issues.

## 6. Feature Requests & Roadmap Signals
Based on community requests, the following areas are likely to see development focus in upcoming versions:
- **Advanced Memory Integrations** ([Issue #2515](https://github.com/sipeed/picoclaw/issues/2515)): Request to integrate external memory providers like mem0, Supermemory, and HydraDB, signaling a shift towards persistent, cross-session AI agents.
- **Enhanced LLM Authentication** ([Issue #2169](https://github.com/sipeed/picoclaw/issues/2169) & [Issue #2546](https://github.com/sipeed/picoclaw/issues/2546)): Demand for OAuth 2.1 + PKCE support for MCP servers, and support for "Dual HEAD" authentication for custom/self-hosted LLM endpoints.
- **Native Audio Input** ([PR #2626](https://github.com/sipeed/picoclaw/pull/2626)): An open PR adding native audio input handling for multimodal LLMs like Gemini 1.5.
- **Local Hardware Acceleration** ([PR #2496](https://github.com/sipeed/picoclaw/pull/2496)): An open PR to support Intel OpenVINO Model Server for local LLM inference on CPU/GPU/NPU.

## 7. User Feedback Summary
- **Pain Points**: Users are frequently frustrated by environment and configuration constraints. For instance, Docker deployments with read-only root filesystems fail due to undocumented write requirements ([Issue #2440](https://github.com/sipeed/picoclaw/issues/2440)), and the Web UI requires frequent manual re-authentication ([Issue #2302](https://github.com/sipeed/picoclaw/issues/2302)). Furthermore, single-message processing on platforms like Feishu and QQ creates a poor UX for rapid interactions ([Issue #2464](https://github.com/sipeed/picoclaw/issues/2464)). 
- **Use Cases**: PicoClaw is being actively used for automated periodic reporting, Raspberry Pi (ARM) deployments, and as a unified gateway for self-hosted and open-weight models. The rising demand for robust memory systems indicates that users are deploying PicoClaw for long-term personal assistant tasks rather than just simple chat.

## 8. Backlog Watch
- **Core Safeguard Logic Flaw**: [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042) (Open since 2026-03-04) - The `exec` command guard's regex aggressively blocking non-path strings needs a core refactor.
- **Proactive Compact Failure**: [Issue #2480](https://github.com/sipeed/picoclaw/issues/2480) - The agent failing to compact context when `model_name` differs from `model` severely impacts long-running sessions.
- **Frequent Web UI Re-auth**: [Issue #2302](https://github.com/sipeed/picoclaw/issues/2302) (Open since 2026-04-03) - Persistent session failures leading to `PERMISSION_DENIED` on third-party APIs need maintainer attention to improve general usability.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-24

## 1. Today's Overview
NanoClaw is experiencing a massive spike in development and community activity, processing 30 pull requests (18 merged) and 16 issues in a single day. The core team and contributors are heavily focused on expanding channel adapters—specifically adding native Signal support and fixing integrations for Telegram and Discord. Simultaneously, a comprehensive security audit (CSO audit) has dominated the issue tracker, uncovering critical sandbox escape vectors that maintainers are already patching. The project's velocity is exceptionally high, reflecting a maturing agent framework that is rapidly iterating on multi-platform messaging and security hardening.

## 2. Releases
No new official releases were published today. However, the volume of merged PRs suggests a potential version bump or patch release is imminent.

## 3. Project Progress
Today's progress was split between **major new channel integrations** and **critical security/stability fixes**. 
*   **Signal Integration:** The team successfully merged native Signal adapter code ([PR #1953](https://github.com/qwibitai/nanoclaw/pull/1953)), wired it into the auto setup flow ([PR #1954](https://github.com/qwibitai/nanoclaw/pull/1954)), and immediately opened follow-up PRs to add voice, images, and mentions ([PR #1962](https://github.com/qwibitai/nanoclaw/pull/1962)).
*   **Security Hardening:** A rapid response to a production incident (where an agent escaped its sandbox to stop other containers) resulted in the merge of a comprehensive hardening PR ([PR #1945](https://github.com/qwibitai/nanoclaw/pull/1945)).
*   **Container Reliability:** The team fixed a severe container restart bug that caused silent message drops ([PR #1941](https://github.com/qwibitai/nanoclaw/pull/1941)) and fixed Telegram 64-byte payload limits breaking approval buttons ([PR #1942](https://github.com/qwibitai/nanoclaw/pull/1942)).
*   **Architecture Refinements:** Provider override bugs were fixed ([PR #1958](https://github.com/qwibitai/nanoclaw/pull/1958)), and recent atomic chat tool additions were properly refactored into the utility-skill pattern ([PR #1933](https://github.com/qwibitai/nanoclaw/pull/1933)).

## 4. Community Hot Topics
*   **CSO Security Audit Findings:** The most active discussions revolve around a security audit published today. The critical finding ([Issue #1946](https://github.com/qwibitai/nanoclaw/issues/1946)) details how `--add-host=host.docker.internal` combined with `bypassPermissions` allows agents to escalate privileges to the host machine. Maintainers and users are actively discussing sandbox architectures here.
*   **Apple Container Ecosystem:** There is a strong community push to support Apple's native container ecosystem as an alternative to Docker Desktop. High-activity items include fixing network gateways ([Issue #1103](https://github.com/qwibitai/nanoclaw/issues/1103)) and fixing the credential proxy for Apple Silicon ([Issue #1934](https://github.com/qwibitai/nanoclaw/issues/1934), [PR #1936](https://github.com/qwibitai/nanoclaw/pull/1936)).
*   **Provider Parity:** Users are actively discussing the need for native file operation tools to reduce latency when using Codex/OpenCode agents ([Issue #1956](https://github.com/qwibitai/nanoclaw/issues/1956)).

## 5. Bugs & Stability
Ranked by severity:
1.  **[CRITICAL] Host Privilege Escalation via Docker:** `host.docker.internal` mapping allows agents full host access. **Status:** Fix merged in [PR #1945](https://github.com/qwibitai/nanoclaw/pull/1945). ([Issue #1946](https://github.com/qwibitai/nanoclaw/issues/1946))
2.  **[CRITICAL] Bypass Permissions exploit:** Untrusted inbound channels could trigger dangerous bash commands. **Status:** Fix merged in [PR #1945](https://github.com/qwibitai/nanoclaw/pull/1945). ([Issue #1947](https://github.com/qwibitai/nanoclaw/issues/1947))
3.  **[HIGH] Container Restart Silent Drops:** Stale heartbeats caused infinite orphan claim loops, silently dropping inbound user messages. **Status:** Fix merged in [PR #1941](https://github.com/qwibitai/nanoclaw/pull/1941).
4.  **[HIGH] Apple Container proxy broken:** Credential proxy never starts on Apple Containers, hard-bricking agent responses. **Status:** Fix open in [PR #1936](https://github.com/qwibitai/nanoclaw/pull/1936). ([Issue #1934](https://github.com/qwibitai/nanoclaw/issues/1934))
5.  **[MEDIUM] Apple Silicon PATH bug:** Launchd plist missing `/opt/homebrew/bin` breaks `brew` services. **Status:** Fix open in [PR #1938](https://github.com/qwibitai/nanoclaw/pull/1938). ([Issue #1935](https://github.com/qwibitai/nanoclaw/issues/1935))
6.  **[BUG] Discord Reply Routing:** Agent replies route based on container init rather than message source. **Status:** Unaddressed ([Issue #1959](https://github.com/qwibitai/nanoclaw/issues/1959)).

## 6. Feature Requests & Roadmap Signals
*   **Multi-Model / 3rd-Party API Support:** Users are requesting the ability to use non-Anthropic models and custom API endpoints, signaling a strong desire for a model-agnostic architecture ([Issue #1930](https://github.com/qwibitai/nanoclaw/issues/1930)).
*   **Native MCP File Operations:** A proposal to bring native `Read`, `Write`, `Edit` tools directly into Codex/OpenCode to match Claude's parity, moving away from shelling out via bash. This represents a clear roadmap signal for core architecture enhancements ([Issue #1956](https://github.com/qwibitai/nanoclaw/issues/1956)).
*   **Voice Transcription V2:** An upcoming channel-agnostic voice transcription feature using local Whisper with OpenAI fallback is currently under review ([PR #1879](https://github.com/qwibitai/nanoclaw/pull/1879)).

## 7. User Feedback Summary
Users deploying NanoClaw on non-Docker setups (specifically Apple Silicon Macs using Apple Container or NXP i.MX93 ARM64 boards) are highly active and successfully running the software, though they are hitting environment-specific networking and pathing bugs. 
Pain points include friction during the v1-to-v2 migration process, leading the team to introduce an experimental migration flow ([PR #1931](https://github.com/qwibitai/nanoclaw/pull/1931)). A notable frustration for users is OAuth token handling with Claude Max subscriptions, which currently prevents inference calls with Sonnet models ([Issue #1944](https://github.com/qwibitai/nanoclaw/issues/1944)). Overall, the community is highly technical, often contributing their own comprehensive security audits and code fixes.

## 8. Backlog Watch
*   **[Issue #1103](https://github.com/qwibitai/nanoclaw/issues/1103)**: Apple Container networking fix (host gateway + proxy). Open since March 2026. With Apple Container related PRs active today, this needs maintainer finalization.
*   **[Issue #1944](https://github.com/qwibitai/nanoclaw/issues/1944)**: Max subscription OAuth token failure. Lacks maintainer response and blocks a specific but likely large subset of standard Max subscribers.
*   **[PR #1879](https://github.com/qwibitai/nanoclaw/pull/1879)**: Voice Transcription V2. Open for 3 days, highly requested cross-channel feature, needs review.
*   **[PR #1931](https://github.com/qwibitai/nanoclaw/pull/1931)**: V1 to V2 experimental migration. A critical path for legacy users that hasn't been merged yet.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-04-24

## 1. Today's Overview
NullClaw experienced a highly active day in community discussions but showed zero repository maintenance throughput, with no pull requests or releases published. The project saw a spike in issue activity, primarily driven by new users attempting to configure and deploy the agent across various environments. A significant number of newly opened bugs indicate friction points regarding channel integrations, CLI usability, and platform-specific installations. While the community is actively testing and adopting the framework, the current lack of merged PRs suggests a bottleneck in maintainer review or response time today.

## 2. Releases
No new releases were recorded today. 

## 3. Project Progress
No pull requests were merged or closed today, meaning no tangible code-level progress was made in the last 24 hours. The only forward movement occurred on the issue tracker, where 3 previously opened issues were closed. The absence of PR activity against a backdrop of active bug reporting suggests that developers may be currently overwhelmed or are batching their merge cycles.

## 4. Community Hot Topics
The most engaged community discussions center around environment setup, documentation gaps, and foundational tool execution:
*   **[#167 [CLOSED] Shell command "curl and wget" usage](https://github.com/nullclaw/nullclaw/issues/167):** Garnered 1 upvote and 7 comments. Users are actively trying to understand the boundaries of NullClaw's shell execution capabilities.
*   **[#39 [CLOSED] Matrix configuration not recognized?](https://github.com/nullclaw/nullclaw/issues/39) & [#864 [OPEN] Matrix channel configuration fail](https://github.com/nullclaw/nullclaw/issues/864):** Together, these issues have accumulated 6 comments. Users are heavily relying on community threads to figure out basic Matrix setup due to a lack of official documentation. 
*   **[#339 [OPEN] Android install issues](https://github.com/nullclaw/nullclaw/issues/339):** With 3 comments, this highlights a strong user desire to run NullClaw on mobile/arm64 environments, a key use case for personal AI assistants.

## 5. Bugs & Stability
Today's bug reports reveal critical flaws in configuration loading, integrations, and platform compatibility, ranked by severity below:

1.  **Critical Config Parsing Failure:** **[#869 Telegram channel not loading](https://github.com/nullclaw/nullclaw/issues/869)** & **[#864 Matrix channel misconfigured](https://github.com/nullclaw/nullclaw/issues/864)**. The agent is failing to recognize correctly formatted `config.json` files for primary communication channels. This fundamentally breaks multi-channel personal assistant use cases. *No fix PRs exist.*
2.  **Severe Mobile/ARM64 Build Failures:** **[#868 zig build fails on Android/Termux](https://github.com/nullclaw/nullclaw/issues/868)**. Users cannot compile the agent on aarch64 architectures due to `AccessDenied` linkat errors in Zig. This is a major blocker for edge-device deployments. *No fix PRs exist.*
3.  **Tooling/Execution Errors:** **[#866 curl post fails on allowlist](https://github.com/nullclaw/nullclaw/issues/866)**. The agent fails to execute explicitly allowed shell commands (`curl`), breaking agent autonomy. 
4.  **Broken CLI Input:** **[#865 CLI shows ctrl characters for up/down/left/right](https://github.com/nullclaw/nullclaw/issues/865)**. Standard terminal keyboard navigation is broken, severely degrading the local user experience. 
5.  **Sub-agent API Compatibility:** **[#811 Fails to connect to sub agent with custom provider](https://github.com/nullclaw/nullclaw/issues/811)**. `error.CompatibleApiError` prevents users from routing requests through third-party OpenAI-compatible APIs. *No fix PRs exist.*

## 6. Feature Requests & Roadmap Signals
Users are hitting walls with the current setup, leading to clear signals for the project's roadmap:
*   **Fully Commented Example Config:** **[#867](https://github.com/nullclaw/nullclaw/issues/867)** requests a heavily annotated, working `config.json`. Because JSON does not support comments, this could signal a necessary near-future migration to a configuration format like JSONC, TOML, or YAML.
*   **Custom Skill Accessibility:** **[#427 Cannot use a custom skill](https://github.com/nullclaw/nullclaw/issues/427)** highlights that the CLI can verify a custom skill, but the core agent fails to mount it as a usable tool. This points to a needed architectural refactor of the tool-loading pipeline.

## 7. User Feedback Summary
The overarching sentiment from today's activity is **user frustration with onboarding and documentation**. Multiple users explicitly stated that the default configuration is "crippled" and that basic integrations (like Telegram and Matrix) are almost impossible to get working without reverse-engineering other users' closed GitHub issues. 

However, the specific nature of the bugs (e.g., running on Android/Termux, setting up Matrix bridges, creating custom web-scraping skills) indicates that the user base consists of highly technical, power users who are keen on using NullClaw as a serious, self-hosted personal AI ecosystem. If NullClaw resolves its configuration and build friction, it has a very dedicated target audience ready to adopt it.

## 8. Backlog Watch
The following items require immediate maintainer attention to prevent project stagnation:
*   **[#811 Custom OpenAI-compatible provider failure](https://github.com/nullclaw/nullclaw/issues/811):** Opened 11 days ago, it has 2 upvotes and zero maintainer comments. This is a critical bug for users trying to avoid vendor lock-in.
*   **[#427 Custom skills not registering as tools](https://github.com/nullclaw/nullclaw/issues/427):** Opened over a month ago. If the community cannot build and deploy custom skills, the agent's extensibility is effectively dead in the water.
*   **[#339 Android install issues](https://github.com/nullclaw/nullclaw/issues/339):** Opened in early March, still unresolved. The project needs to clarify if Android/Termux is officially supported or entirely community-driven.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-24

## 1. Today's Overview
IronClaw experienced a high-activity day with 86 total events across issues and pull requests, indicating a heavily active development cycle focused on stability and platform maturation. The open-source AI agent project is currently navigating a critical transition from its V1 architecture to a more robust "engine-v2," as evidenced by numerous architectural PRs. Activity is heavily dominated by core contributors (henrypark133, serrrfirat, pranavraja99) advancing foundational infrastructure, while simultaneous targeted QA "bug bash" efforts have surfaced a high volume of integration and UI bugs. With 43 open PRs and 29 open issues updated in the last 24 hours, the project is in a state of aggressive iteration and scale-out, though it currently lacks a formalized release cadence.

## 2. Releases
No new releases were published today. The core team appears to be batching foundational changes (engine-v2, merge-queue CI, multi-tenant control plane) into the `staging` branch before cutting a stable release.

## 3. Project Progress
While most major initiatives remain in the review phase, 7 PRs were merged/closed today, yielding notable advancements:
*   **Engine-v2 Advancements:** Core contributor `henrypark133` merged/closed several major engine-v2 PRs ([#2869](https://github.com/nearai/ironclaw/pull/2869), [#2876](https://github.com/nearai/ironclaw/pull/2876), [#2889](https://github.com/nearai/ironclaw/pull/2889)) focused on refreshing prompt metadata, action discovery, and deferred inventory cleanup. This paves the way for the primary [PR #2868](https://github.com/nearai/ironclaw/pull/2868) to land.
*   **Tooling Refactor:** [PR #2904](https://github.com/nearai/ironclaw/pull/2904) introduces a massive architectural shift, replacing 11 WASM API-proxy tools with simpler, skill-based HTTP declarations. 
*   **Webhook Ingress:** [PR #2921](https://github.com/nearai/ironclaw/pull/2921) opened today to add tool-driven webhook ingress, shipping alongside a Linear integration as the first consumer.
*   **CI/CD Redesign:** [PR #2877](https://github.com/nearai/ironclaw/pull/2877) initiates phase 1 of migrating the CI pipeline to a GitHub-native merge queue, addressing severe review bottlenecks.

## 4. Community Hot Topics
*   **Concurrency & State Drift:** The most discussed issue today was [Issue #2231](https://github.com/nearai/ironclaw/issues/2231) (5 comments), highlighting that the platform's chat feature cannot handle concurrent requests without blocking the queue. This ties directly into the architectural [Issue #2792](https://github.com/nearai/ironclaw/issues/2792) (5 comments, opened by maintainer `ilblackdragon`), which proposes a "Gateway state convergence" to structurally eliminate UI/backend state drift.
*   **MCP Auth Loops:** [Issue #2474](https://github.com/nearai/ironclaw/issues/2474) (3 comments) sparked debate regarding stdio MCP servers. It was recently closed after a non-maintainer suggested stdio wasn't supported, but community member `rajulbhatnagar` immediately re-opened the discussion via [Issue #2923](https://github.com/nearai/ironclaw/issues/2923), pointing out that stdio *is* wired in v0.25.0 and the error is a pre-flight bug.
*   **Downstream Deploy Infra:** [PR #2925](https://github.com/nearai/ironclaw/pull/2925) introduces plumbing primitives for domain-specific deployments, showing active engagement with enterprise/downstream fork use-cases.

## 5. Bugs & Stability
A QA bug bash on the `hosted-staging` and `hosted-production` environments (mostly filed by `joe-rlo`) revealed a critical tier of bugs:
*   **P1 Bugs:**
    *   [Issue #2905](https://github.com/nearai/ironclaw/issues/2905): Agent saves files to `/home/agent`, which is inaccessible to users in the hosted setup.
    *   [Issue #2903](https://github.com/nearai/ironclaw/issues/2903): Telegram integration fails silently if the AI generates a response exceeding Telegram's character limits.
    *   [Issue #2883](https://github.com/nearai/ironclaw/issues/2883): WASM tool dispatch was broken by a recent capability surface policy centralization (fixes likely contained in the engine-v2 PRs).
*   **P2 Integration Bugs:** A massive cluster of integrations (Google Sheets, Linear, Asana, Telegram) are exhibiting re-auth loops, duplicate creation, or broken state handling (e.g., [Issue #2912](https://github.com/nearai/ironclaw/issues/2912), [Issue #2913](https://github.com/nearai/ironclaw/issues/2913), [Issue #2914](https://github.com/nearai/ironclaw/issues/2914)).
*   **Installation Stability:** [Issue #2898](https://github.com/nearai/ironclaw/issues/2898) notes a documentation mismatch where the minimum Rust compiler version is actually 1.91, not 1.85 as stated in the README, breaking local builds. *Fix exists:* New contributor PR [PR #2926](https://github.com/nearai/ironclaw/pull/2926) addresses setup environment variable hijacking today.

## 6. Feature Requests & Roadmap Signals
*   **Data Persistence:** [Issue #2920](https://github.com/nearai/ironclaw/issues/2920) requests better upgrade safety and data persistence for Docker setups, pointing out that relying solely on an internal SQLite file is risky for non-advanced users.
*   **Engine-v2 Rollout:** The closing of multiple engine-v2 PRs ([#2869](https://github.com/nearai/ironclaw/pull/2869), [#2876](https://github.com/nearai/ironclaw/pull/2876)) strongly signals that the next major release will focus entirely on the new engine architecture and action-dispatch systems.
*   **Platform Expansions:** [PR #1764](https://github.com/nearai/ironclaw/pull/1764) hints at "Abound demo" integrations, and [Issue #2719](https://github.com/nearai/ironclaw/issues/2719) confirms a roadmap shift toward GitHub-native merge queues to solve 135k-LOC unreviewable promotion PRs.

## 7. User Feedback Summary
Hosted platform users and QA testers are expressing frustration with the reliability of third-party integrations. Specifically, connecting tools like Slack ([Issue #1998](https://github.com/nearai/ironclaw/issues/1998)) and Google Sheets requires multiple re-authentications or results in duplicate actions. Furthermore, the chat UI is actively confusing users when tool calls are executed ([Issue #2906](https://github.com/nearai/ironclaw/issues/2906)) due to a lack of human-readable context. 

Self-hosting contributors, on the other hand, are running into sharp edges with the local setup, particularly around Rust version requirements ([Issue #2898](https://github.com/nearai/ironclaw/issues/2898)) and database backend configuration ([PR #2926](https://github.com/nearai/ironclaw/pull/2926)). Overall sentiment indicates that while the project's core capabilities are expanding rapidly, the user experience in the "last mile" (integrations, file storage, UI feedback) needs stabilization.

## 8. Backlog Watch
*   **CI Canaries:** [Issue #2887](https://github.com/nearai/ironclaw/issues/2887) and [Issue #2886](https://github.com/nearai/ironclaw/issues/2886) indicate that live canary tests and mission daily tests are currently failing in CI due to IP blocking and malformed URLs, respectively. These need core team eyes to unblock the main development trunk.
*   **Sidebar Refactoring Regression:** [Issue #2884](https://github.com/nearai/ironclaw/issues/2884) outlines a regression where new users have completely broken UIs if they lack conversations, caused by a merged sidebar refactor.
*   **Web UI Polish:** Low priority, but high-impact UX issues like [Issue #2917](https://github.com/nearai/ironclaw/issues/2917) (truncated log paths) and [Issue #2918](https://github.com/nearai/ironclaw/issues/2918) (Cmd+F breaking expanded rows) remain open but already have Copilot-generated fixes in [PR #2919](https://github.com/nearai/ironclaw/pull/2919) awaiting core team merge.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-04-24

## 1. Today's Overview
LobsterAI demonstrated exceptionally high development velocity today, merging a massive batch of 13 pull requests while tracking 6 active issues. The core maintainers focused heavily on stabilizing the application, resolving critical MCP (Model Context Protocol) tool bugs, improving UI responsiveness, and finalizing a major feature release train (`Release/2026.04.22`). The influx of merged PRs without corresponding newly published GitHub releases suggests the team is likely finalizing an official tagged release imminently. Overall, project health appears robust, with active iteration on both enterprise integrations and local user experiences.

## 2. Releases
While no *new* GitHub release tag was published today, PR [#1805](https://github.com/netease-youdao/LobsterAI/pull/1805) officially cut the `Release/2026.04.22` branch, which serves as the upcoming release. Key changes included in this release train are:
*   **New Features:** Multi-bot support for Discord/Telegram, LM Studio local model provider integration, WeCom plugin upgrade, and Windows install-timing log diagnostics.
*   *No explicit breaking changes or migration notes were documented in today's data, though upgrading the Popo and WeCom plugins may require token resets.*

## 3. Project Progress
The team closed 13 PRs, indicating a massive integration effort. Key advancements include:
*   **MCP & Chat Stability:** Fixed a critical stale reply loop and MCP tool abort signal misfire ([#1801](https://github.com/netease-youdao/LobsterAI/pull/1801)).
*   **Performance & UX:** Optimized gateway restart logic to prevent unnecessary restarts on window focus/blur ([#1798](https://github.com/netease-youdao/LobsterAI/pull/1798)), increased chat.send RPC timeout to 90s to prevent dropped responses ([#1803](https://github.com/netease-youdao/LobsterAI/pull/1803)), and restored `sharp` native binding for image processing ([#1804](https://github.com/netease-youdao/LobsterAI/pull/1804)).
*   **UI Enhancements:** Pushed major UI responsiveness updates, expanding content max-widths to 1024px ([#1799](https://github.com/netease-youdao/LobsterAI/pull/1799)) and preserving draft inputs when switching sessions ([#1807](https://github.com/netease-youdao/LobsterAI/pull/1807)).
*   **Integrations:** Upgraded the Popo plugin to fix token expiration issues ([#1806](https://github.com/netease-youdao/LobsterAI/pull/1806)).

## 4. Community Hot Topics
The most active discussions revolve around long-standing integration bugs and specific user workflows:
*   **Issue #26 (Linux Versioning):** Users are confused about why Linux compilations are stuck on version `0.1.16` and are requesting clearer release notes ([Issue #26](https://github.com/netease-youdao/LobsterAI/issues/26)).
*   **Issue #15 (Electron 40 Startup Crash):** A critical compatibility issue with Electron 40.2.1 and Node.js v24.11.1 causing startup failures on macOS/Windows ([Issue #15](https://github.com/netease-youdao/LobsterAI/issues/15)).
*   **Issue #14 (Feishu Rendering):** Developers report that `renderMode` configurations for the Feishu (Lark) channel are hardcoded to `text`, breaking Markdown rendering ([Issue #14](https://github.com/netease-youdao/LobsterAI/issues/14)).
*   *Analysis:* The community is heavily utilizing LobsterAI as a multi-platform IM gateway. The underlying need is better parity across diverse platforms (Feishu, Linux, Web) and stable desktop initialization across different Electron/Node environments.

## 5. Bugs & Stability
*   **High Severity:** Electron 40 startup crash (`TypeError: Cannot set properties of undefined (setting 'name')`) is blocking users on the latest Electron version ([Issue #15](https://github.com/netease-youdao/LobsterAI/issues/15)). *No fix PR was detected today.*
*   **High Severity (Internal):** Gateway timeout drops and MCP tool abort signal misfires were reported and **fixed** today via ([PR #1801](https://github.com/netease-youdao/LobsterAI/pull/1801)) and ([PR #1803](https://github.com/netease-youdao/LobsterAI/pull/1803)).
*   **Medium Severity:** Hardcoded Feishu rendering and unfiltered `<thinking>` tags ([Issue #14](https://github.com/netease-youdao/LobsterAI/issues/14)). *No fix PR detected today.*

## 6. Feature Requests & Roadmap Signals
*   **Batch Conversation Deletion:** A newly opened feature request asks for the ability to bulk-delete invalid conversations to manage context windows better ([Issue #1797](https://github.com/netease-youdao/LobsterAI/issues/1797)). Given its 1 upvote and immediate relevance, it is a strong candidate for an upcoming sprint.
*   **Codex Login Support:** Users are requesting built-in Codex authentication capabilities ([Issue #29](https://github.com/netease-youdao/LobsterAI/issues/29)).
*   **OpenAI API Type Selection:** A merged PR today added configuration for OpenAI provider types (auto, responses, chat_completions) ([PR #61](https://github.com/netease-youdao/LobsterAI/pull/61)), signaling expanded flexibility for advanced LLM users.

## 7. User Feedback Summary
Users appreciate the breadth of IM platform integrations (Discord, Telegram, Feishu, WeCom) but express frustration with rough edges in those integrations. The demand to filter `<thinking>` tags and render Markdown properly in Feishu indicates that users are deploying this in professional/corporate environments where message formatting matters. Furthermore, the request for better context management (batch deletion) highlights that power users are pushing the limits of the AI's context window during prolonged multi-channel use.

## 8. Backlog Watch
*   **[Stale] Electron 40 Compatibility ([Issue #15](https://github.com/netease-youdao/LobsterAI/issues/15)):** Created in February, this startup blocker needs maintainer triage to ensure compatibility with Node v24.
*   **[Stale] Linux Release Tracking ([Issue #26](https://github.com/netease-youdao/LobsterAI/issues/26)):** The CI/CD pipeline for Linux builds needs attention to ensure it reflects the latest tags and version numbers.
*   **[Stale] Feishu Markdown Rendering ([Issue #14](https://github.com/netease-youdao/LobsterAI/issues/14)):** The hardcoded `text` mode severely limits Feishu's usability and requires a code refactor to read user configurations.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-24

## 1. Today's Overview
The Moltis project is experiencing a highly active and healthy development cycle, characterized by a strong focus on bug squashing, infrastructure improvements, and expanding integration capabilities. Over the past 24 hours, the team and community processed 13 pull requests (merging 7) and resolved 5 issues. Activity is heavily concentrated on broadening platform compatibility (WSL2/ARM), refining LLM provider schema handling, and introducing new communication channels. The high ratio of closed PRs to open ones indicates a highly responsive maintainer team effectively shipping incremental value.

## 2. Releases
No new official releases were published today. The flurry of merged PRs appears to be staging for an upcoming release.

## 3. Project Progress
Today saw significant progress in UI refinements, schema handling, and platform stability. Seven PRs were merged/closed, advancing the following areas:
*   **LLM Provider Compatibility:** [PR #856](https://github.com/moltis-org/moltis/pull/856) resolved JSON schema translation issues for Gemini and Fireworks AI by deep-merging properties and fixing boolean enums.
*   **Local LLM Stability:** [PR #855](https://github.com/moltis-org/moltis/pull/855) moved datetime injection from the system prompt to user content, directly fixing KV cache invalidation issues for local providers like Ollama and llama.cpp.
*   **Sandbox Portability:** [PR #853](https://github.com/moltis-org/moltis/pull/853) improved Docker sandbox mounting logic to fail gracefully on ARM/Raspberry Pi and WSL2 environments. 
*   **Messaging Channels:** [PR #841](https://github.com/moltis-org/moltis/pull/841) introduced a new `moltis-signal` channel plugin via `signal-cli`.
*   **Voice & UI:** [PR #854](https://github.com/moltis-org/moltis/pull/854) added test coverage for custom ElevenLabs TTS voices, and [PR #852](https://github.com/moltis-org/moltis/pull/852) fixed missing re-authentication buttons in the MCP server UI.

## 4. Community Hot Topics
The most actively discussed item is the foundational enhancement [Issue #176: Add datetime to system prompt context](https://github.com/moltis-org/moltis/pull/176) (16 comments). The high engagement here reflects the community's strong interest in optimizing local LLM performance, which culminated in today's [PR #855](https://github.com/moltis-org/moltis/pull/855). 

Another notable focal point is [Issue #828: Docker sandbox fails on WSL2](https://github.com/moltis-org/moltis/issues/828). Although specific to environments missing `/sys/class/dmi`, it highlights a broader community need for seamless cross-platform Docker support, which the maintainers proactively addressed globally in [PR #853](https://github.com/moltis-org/moltis/pull/853).

## 5. Bugs & Stability
Several high-impact bugs were reported and immediately addressed today:
1.  **Critical (LLM Provider Errors):** Users reported HTTP 400 errors and undefined property errors on Fireworks and Gemini ([Issue #848](https://github.com/moltis-org/moltis/issues/848), [Issue #849](https://github.com/moltis-org/moltis/issues/849)). *Fix merged in [PR #856](https://github.com/moltis-org/moltis/pull/856).*
2.  **High (MCP OAuth):** The UI failed to display an OAuth re-authentication button ([Issue #851](https://github.com/moltis-org/moltis/issues/851)). *Fix merged in [PR #852](https://github.com/moltis-org/moltis/pull/852).*
3.  **High (Docker/Sandbox):** Sandboxes crashed on WSL2 ([Issue #828](https://github.com/moltis-org/moltis/issues/828)). *Fix merged in [PR #853](https://github.com/moltis-org/moltis/pull/853).*
4.  **Medium (Voice):** Custom ElevenLabs voices were failing ([Issue #735](https://github.com/moltis-org/moltis/issues/735)). *Fix verified via tests in [PR #854](https://github.com/moltis-org/moltis/pull/854).*
5.  **Unresolved (Memory):** A new bug was opened regarding silent memory turns saving with incorrect dates in filenames ([Issue #857](https://github.com/moltis-org/moltis/issues/857)), which is currently awaiting a fix.

## 6. Feature Requests & Roadmap Signals
Today's open PRs and issues reveal a strong trajectory toward making Moltis a more powerful, automated agent platform:
*   **Sub-Agents & Orchestration:** [PR #844](https://github.com/moltis-org/moltis/pull/844) introduces default sub-agent presets (researcher, coder, reviewer, etc.), signaling a major push towards complex, multi-agent workflows.
*   **Default Skill Library:** [PR #797](https://github.com/moltis-org/moltis/pull/797) (now closed/merged) bundled 101 pre-vetted default skills, drastically lowering the barrier to entry for new users.
*   **MCP Management:** [PR #840](https://github.com/moltis-org/moltis/pull/840) and [Issue #850](https://github.com/moltis-org/moltis/issues/850) show a focus on allowing the AI to manage its own MCP servers programmatically and securely handle OAuth `client_secret`.

## 7. User Feedback Summary
Users are actively testing Moltis across a diverse array of environments (Raspberry Pi, WSL2, local LLMs via Ollama/LM Studio, and various cloud providers). The primary pain points currently revolve around **schema translation** (non-OpenAI providers failing to parse tool parameters) and **Docker setup** on non-standard Linux hosts. Despite these friction points, the rapid turnaround on issues (many reported and fixed within 24 hours) indicates a highly satisfying developer experience. The demand for UI polish is also evident, with community members actively contributing to QoL improvements like [PR #846: smart auto-scroll](https://github.com/moltis-org/moltis/pull/846).

## 8. Backlog Watch
*   **[Issue #857](https://github.com/moltis-org/moltis/issues/857):** Reported yesterday, this memory dating bug needs maintainer triage as it could silently corrupt user long-term memory context.
*   **[PR #797](https://github.com/moltis-org/moltis/pull/797):** While marked closed, the sheer scope of bundling 101 external skills requires careful maintainer attention to ensure supply-chain security and ongoing maintenance.
*   **[PR #837](https://github.com/moltis-org/moltis/pull/837) & [PR #847](https://github.com/moltis-org/moltis/pull/847):** These open PRs dealing with project code-indexing and UI wiring have been active for a few days and should be prioritized for review to keep the project settings UI fully functional.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest (2026-04-24)

## 1. Today's Overview
CoPaw (identified internally via the QwenPaw repository) is experiencing a highly active and healthy development phase, maintaining strong momentum in both issue resolution and feature integration. With 50 issues and 50 pull requests updated in the last 24 hours, the project demonstrates robust community engagement and responsive maintainer oversight. The maintainers successfully pushed two new releases (`v1.1.3.post1` and `v1.1.4-beta.1`), addressing immediate security and desktop bugs while preparing for the next feature milestone. A healthy ratio of closed-to-open issues (25 closed vs. 25 open) indicates that the backlog is actively being managed without stagnating. 

## 2. Releases
Two new versions were released today, focusing on security, desktop user experience, and version bumping:

*   **v1.1.3.post1**
    *   **Changes:** Reverted a previous change to avoid triggering Windows Defender false positives. Fixed file downloads in the `pywebview` desktop application by switching to native save dialogs.
    *   **Migration Notes:** Desktop users on Windows are highly encouraged to update to resolve potential antivirus flags and improve download reliability.
*   **v1.1.4-beta.1**
    *   **Changes:** Bumped version to `1.1.4b1`, fixed language issues in backup documentation, and introduced `.prettierignore` for better console code formatting.
    *   **Migration Notes:** This is a beta release intended for testing the upcoming `v1.1.4` branch.

## 3. Project Progress
Significant strides were made in stabilizing the platform and merging community contributions. The team and contributors closed **34 PRs** in the last 24 hours. 

*   **API & Backend:** Refactored agent endpoints to a dedicated workspace (`zhijianma`), aligned scope-aware effective model semantics for better model routing (`vvv214`), and added a configurable `allow_no_auth_hosts` whitelist for flexible API authentication (`rayrayraykk`).
*   **Channel Integrations:** Fixed an issue where the WeixinChannel identifier was mismatched with its registry key (`celestialhorse51D`).
*   **Packaging & Distribution:** Fixed Windows packaging where `discord.py` was corrupted by `conda-unpack`, causing regex gateway errors (`hongxicheng`). Merged a PR to document Docker volume mounts for backups (`jinglinpeng`).
*   **Console UI:** Polished the Tool Execution Security configuration interface and optimized the ApprovalCard style (`zhaozhuang521`).

## 4. Community Hot Topics
*   **Open Tasks Contribution Drive:** The pinned issue [#2291: 🐾 Help Wanted: Open Tasks — Come Contribute! (S1)](https://github.com/agentscope-ai/QwenPaw/issues/2291) remains the most active with 60 comments. It serves as a central hub for contributors, indicating a well-organized open-source pipeline.
*   **Unstoppable AI Loops:** Users are reporting severe issues with the web console where AI file-writing loops fail to stop even when the user clicks the stop button ([Issue #2831](https://github.com/agentscope-ai/QwenPaw/issues/2831), 9 comments). This highlights an underlying need for more robust task cancellation and frontend control over backend agents.
*   **Security Guard Overreach:** Users are frustrated that disabled safety rules (like command injection checks) still block `cron` jobs ([Issue #3709](https://github.com/agentscope-ai/QwenPaw/issues/3709), 7 comments). This reveals that advanced users find default safety guardrails too restrictive for automated, trusted tasks.

## 5. Bugs & Stability
Several bugs have been reported, primarily concerning channels, task execution, and containerization:

1.  **Critical / Agent Unresponsiveness (Deadlock):** MCP client internal `TaskGroup` exceptions cause the agent to silently die without throwing errors, requiring manual restarts ([Issue #3640](https://github.com/agentscope-ai/QwenPaw/issues/3640)).
2.  **High / Channel Disconnects:** `discord.py` fails to connect due to a regex error. **Status:** Fixed and merged in [PR #3730](https://github.com/agentscope-ai/QwenPaw/pull/3730).
3.  **High / Channel Disconnects:** `cron` tasks fail with a `KeyError` when attempting to use the `weixin` channel. **Status:** Fix submitted in [PR #3605](https://github.com/agentscope-ai/QwenPaw/pull/3605).
4.  **Medium / UI Crash:** Console crashes during SSE serialization due to malformed Unicode surrogates ([Issue #3552](https://github.com/agentscope-ai/QwenPaw/issues/3552)).
5.  **Medium / Docker:** Git errors during image packaging in v1.1.3 ([Issue #3695](https://github.com/agentscope-ai/QwenPaw/issues/3695)).

## 6. Feature Requests & Roadmap Signals
The community is actively shaping the roadmap, with clear demand for deeper local integration, UI improvements, and customization:

*   **Local Provider Support:** A PR is open to add **Unsloth Studio** as a built-in local provider ([PR #3759](https://github.com/agentscope-ai/QwenPaw/pull/3759)). Given the existing Ollama/LMStudio support, local model hosting is clearly a core pillar for the next version.
*   **DingTalk Robustness:** Community members are actively submitting fixes for DingTalk session collisions and message timeouts ([PR #3746](https://github.com/agentscope-ai/QwenPaw/pull/3746)), suggesting a push to make enterprise channels production-ready.
*   **Console UX:** Requests for a native right-click context menu ([Issue #3752](https://github.com/agentscope-ai/QwenPaw/issues/3752)) and better native desktop icons ([PR #3729](https://github.com/agentscope-ai/QwenPaw/pull/3729)) indicate a maturing focus on UI polish.
*   **Timeout Configuration:** Users want configurable timeouts for shell commands ([Issue #3593](https://github.com/agentscope-ai/QwenPaw/issues/3593)).

## 7. User Feedback Summary
Users are heavily utilizing CoPaw across diverse environments (Armbian, Windows desktop, Docker, and various messaging platforms). 
*   **Pain Points:** The most prominent pain points include task loop failures (agents getting stuck writing files), multi-modal API validation errors ([Issue #3549](https://github.com/agentscope-ai/QwenPaw/issues/3549)), and local authentication bypass bugs where `127.0.0.1` still prompts for login ([Issue #3582](https://github.com/agentscope-ai/QwenPaw/issues/3582)).
*   **Use Cases:** Users are frequently deploying CoPaw via Docker, integrating it via webhooks into DingTalk/WeChat for automated alerts, and leveraging it for scheduled `cron` tasks.
*   **Satisfaction:** The engagement in PRs shows high satisfaction with the project's extensibility, though users occasionally struggle with the complexity of provider routing and channel configurations.

## 8. Backlog Watch
*   **Apple Silicon Compatibility:** [Issue #2655](https://github.com/agentscope-ai/QwenPaw/issues/2655) requests that the `browser_use` tool natively support ARM64 (Apple Silicon) rather than defaulting to x86_64 emulation. Despite being open since late March, it remains a highly requested feature for Mac users and currently lacks an assigned fix PR.
*   **Scope-Aware Routing Overhaul:** [PR #3550](https://github.com/agentscope-ai/QwenPaw/pull/3550) (open since April 17) seeks to align scope-aware model routing semantics across the runtime. This is a complex architectural PR requiring maintainer attention, as it will affect how custom providers are evaluated globally.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-04-24

## 1. Today's Overview
ZeptoClaw experienced a highly active development cycle over the past 24 hours, with 15 issues and 16 pull requests updated, reflecting a strong and focused maintainership. The project is demonstrating clear strategic execution toward its core thesis: becoming the premier edge-native, IoT, and robotics AI agent runtime. Activity today was heavily concentrated on hardening security, expanding deployment channels for the Southeast Asian market, and laying the groundwork for offline/on-device AI models. A massive 81% PR merge/close rate indicates rapid integration of both community contributions and automated dependency management.

## 2. Releases
No new releases were cut today.

## 3. Project Progress
The project saw significant feature maturation and stability improvements, with 13 PRs merged or closed. Key advancements include:
*   **Security & Integrity Hardening:** Merged PR [#528](https://github.com/qhkm/zeptoclaw/pull/528) introducing an in-memory SHA-256 hash-chain audit trail for tool execution, and PR [#526](https://github.com/qhkm/zeptoclaw/pull/526) adding SHA256 digest verification for skill/plugin downloads to prevent supply-chain attacks.
*   **Config & Onboarding Safety:** PR [#527](https://github.com/qhkm/zeptoclaw/pull/527) was merged to implement SSRF validation for user-supplied endpoints during configuration and onboarding.
*   **Channel Expansions & Fixes:** Support for Feishu/Lark and Line messaging platforms was finalized (PR associated with Issue [#536](https://github.com/qhkm/zeptoclaw/issues/536)). Additionally, a configuration regression blocking Telegram gateways was resolved via PR [#523](https://github.com/qhkm/zeptoclaw/pull/523).
*   **Architecture & Evaluation:** PR [#525](https://github.com/qhkm/zeptoclaw/pull/525) finalized the decision *not* to adopt an external utility/lib crate (`rig`), choosing instead to keep the core lean and maintain the sub-7MB binary size moat.
*   **Infrastructure:** CI was stabilized with fixes for Clippy lints and Rustls advisories, and dependencies like `astro` (v6.0.5) and `react-router` were bumped.

## 4. Community Hot Topics
The most actively discussed items center on solidifying ZeptoClaw's unique value proposition of "small, safe, and edge-ready":
*   **[Issue #541](https://github.com/qhkm/zeptoclaw/issues/541) [2 comments]:** Integration of Liquid AI's non-transformer LFM models. This generated buzz because it perfectly aligns with the edge-device thesis (competitive quality at 1B-7B sizes with lower memory inference). An accompanying Open PR, [#543](https://github.com/qhkm/zeptoclaw/pull/543), is already up.
*   **[Issue #536](https://github.com/qhkm/zeptoclaw/issues/536) [1 comment]:** The Feishu/Lark and Line channel integrations highlight a strategic push into the Southeast Asian market, addressing user needs for localized commerce platform integrations.
*   **[Issue #221](https://github.com/qhkm/zeptoclaw/issues/221) [1 comment]:** The Merkle hash-chain audit trail (now closed/implemented) was highly requested by users running ZeptoClaw in enterprise environments requiring strict compliance and tamper-evident logging.

## 5. Bugs & Stability
*   **Telegram Channel Crash [FIXED]:** [Issue #522](https://github.com/qhkm/zeptoclaw/issues/522) reported that the gateway mode failed to recognize valid Telegram configurations. This was swiftly addressed and closed by [PR #523](https://github.com/qhkm/zeptoclaw/pull/523), which restored backward compatibility for legacy config keys.
*   **CI Pipeline Failures [FIXED]:** [Issue #534](https://github.com/qhkm/zeptoclaw/issues/534) noted that PR checks were failing due to new Clippy lints and `rustls-webpki` security advisories. This was resolved by maintainers to unblock the merge queue.
*   **CI Feature Drift [OPEN]:** [Issue #545](https://github.com/qhkm/zeptoclaw/issues/545) highlighted that optional integration features were silently breaking because normal PR CI doesn't compile them. [PR #544](https://github.com/qhkm/zeptoclaw/pull/544) is currently open to expand the CI feature matrix.

## 6. Feature Requests & Roadmap Signals
Today's open issues strongly signal the immediate roadmap for the project, prioritizing offline capabilities and robust IoT deployment:
*   **Offline/Local Fallback [Issue #539](https://github.com/qhkm/zeptoclaw/issues/539):** Requested a local model provider via Ollama/llama.cpp to allow agents to operate on factory floors, ships, and remote sensors without cloud connectivity.
*   **MQTT First-Class Channel [Issue #538](https://github.com/qhkm/zeptoclaw/issues/538):** Proposed elevating MQTT to a native channel to seamlessly integrate with AWS IoT Core, Azure IoT Hub, and Home Assistant.
*   **Binary Size Budget [Issue #537](https://github.com/qhkm/zeptoclaw/issues/537):** A critical proposed CI gate that fails PRs if the stripped binary exceeds 7MB, protecting the project's "fits on a robot" strategic moat.
*   **Skill Security Scanning [Issue #535](https://github.com/qhkm/zeptoclaw/issues/535):** Requesting a scanner for community skills to detect malicious shell commands or credential exfiltration patterns before installation.

## 7. User Feedback Summary
Users are heavily leveraging ZeptoClaw for gateway and IoT deployments. The main pain point recently was the Telegram configuration regression (Issue #522), which disrupted users deploying chat-gateway modes. 
Looking at feature requests, the underlying user base consists heavily of edge-computing and roboticists. They are expressing a strong need for **disconnected resilience** (Issue #539) and **hardware-level integration** (Issue #538). Furthermore, enterprise users are clearly pushing for stringent **supply-chain security** (PR #526, Issue #535) and **auditability** (Issue #221). Overall satisfaction with project velocity appears high, especially regarding dependency management and rapid bug resolution.

## 8. Backlog Watch
*   **[PR #517](https://github.com/qhkm/zeptoclaw/pull/517) (Open since April 14):** The `sha2` dependency bump from `0.10.9` to `0.11.0` has stalled. Given that security features relying on SHA-256 were just merged today, maintainers should review this promptly to ensure the new audit features are running on the latest cryptographic foundations.
*   **[Issue #540](https://github.com/qhkm/zeptoclaw/issues/540):** A highly strategic request for a reference Raspberry Pi deployment walkthrough (ZeptoClaw + R8r). While labeled P2-high, realizing this documentation is critical for marketing the "complete AI agent runtime in 6MB" pitch and should be prioritized.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest: 2026-04-24

## 1. Today's Overview
The EasyClaw project experienced a highly active day focused predominantly on deployment and distribution, marked by the release of two new versions (v1.8.7 and v1.8.8). Community engagement activity was otherwise minimal, with no new Pull Requests submitted and only one Issue processed. The lone Issue addressed a critical distribution blocker regarding broken download links on the official website, which has already been marked as resolved. Overall, the project's codebase remains stable with current development efforts seemingly channeled into patching macOS Gatekeeper compatibility and fixing web infrastructure. 

## 2. Releases
Two new versions were published today, indicating rapid iterative patching:
*   **[v1.8.8: RivonClaw v1.8.8](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.8)**
*   **[v1.8.7: RivonClaw v1.8.7](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.8)**

**Key Changes & Notes:** 
Both releases feature identical release notes focused heavily on user installation troubleshooting. Specifically, the notes provide a detailed fix for the macOS Gatekeeper error (`"RivonClaw" is damaged and can't be opened`). Since this is an unsigned application, macOS security mechanisms automatically block it. The release documentation walks users through using Terminal to bypass Gatekeeper. *Note for users:* This is a configuration/workflow update rather than a feature breakthrough, implying the core executable remains unchanged between these minor patches.

## 3. Project Progress
There was no public code progression via Pull Requests today (0 opened, 0 merged). The only forward momentum occurred on the infrastructure and distribution side. The maintainers successfully resolved the broken download links on the official website (`easy-claw.com`), as evidenced by the closure of Issue #34, and pushed two minor releases to the GitHub repository to address installation friction for macOS users. 

## 4. Community Hot Topics
Community activity was extremely quiet today, containing no widespread discussions. 
*   **[Issue #34: Download link failure on the official website](https://github.com/gaoyangz77/rivonclaw/issues/34)** was the only active item. While it had zero comments and zero reactions, it represented a critical operational failure. The underlying need here is straightforward: users require reliable access to the binary executable. The prompt resolution of this issue signals active and responsive maintainer oversight.

## 5. Bugs & Stability
*   **Severity: High (Distribution Blocker)**
    *   **[Bug] Windows Downloader 404:** Reported in [Issue #34](https://github.com/gaoyangz77/rivonclaw/issues/34), users attempting to download the Windows version from the official site were met with a 404 Not Found error. 
    *   **Status:** Closed. The maintainer resolved the backend routing/hosting issue promptly without requiring a code change to the AI assistant itself.
*   **Severity: Low (OS Compatibility Friction)**
    *   **[Friction] macOS Security Block:** Addressed directly in the release notes for [v1.8.7](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.7) and [v1.8.8](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.8). Users are experiencing perceived "damaged file" errors on macOS. This is a known stability hurdle for unsigned open-source apps, currently mitigated via documentation rather than code signing.

## 6. Feature Requests & Roadmap Signals
There were no explicit feature requests submitted by the community today. However, the rapid double-release and focus on macOS documentation suggest that the roadmap for the immediate future is centered on *User Acquisition & Onboarding*. Predicting based on current friction points, the next logical steps for the project will involve securing a paid Apple Developer Certificate to sign the macOS binaries, eliminating the need for users to run Terminal commands to bypass Gatekeeper.

## 7. User Feedback Summary
User feedback for today highlights core frustration with web infrastructure reliability. The 404 error on the Windows download link reveals a pain point where users are eager to test the AI assistant but are halted by broken website hosting. Furthermore, the necessity for the v1.8.7/v1.8.8 release notes indicates that non-technical macOS users are likely struggling with the initial setup, leading to a less-than-ideal out-of-the-box satisfaction rate. Addressing code-signing will be vital for long-term user retention.

## 8. Backlog Watch
No long-unanswered Issues or PRs were identified in today's data slice. However, maintainers should monitor the ongoing need for manual Terminal commands on macOS. If future issues continue to crop up regarding macOS installation confusion, it should be prioritized in the backlog for a permanent code-signing solution.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-24

## 1. Today's Overview
The ZeroClaw project is experiencing a period of high active development and robust community engagement, operating with a high issue resolution volume but currently paused on stable releases. Over the past 24 hours, the repository saw 50 updated issues (45 open) and 50 updated pull requests (43 open), indicating a high throughput of ongoing feature work and community bug reporting. The core maintainers and contributors are heavily focused on infrastructure reliability, specifically session management, observability, and expanding the new voice and plugin subsystems. There is a clear push toward hardening the system for the `v0.7.4` milestone. Overall, the project's health is highly active, though users are currently navigating operational bugs related to specific provider API changes and Docker deployments.

## 2. Releases
**No new releases** were cut in the last 24 hours. The project is actively tracking the **`v0.7.4` milestone** (Issue [#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877)), which was recently renumbered following an emergency `v0.7.3` patch.

## 3. Project Progress
While 43 PRs were actively updated, 7 PRs were merged or closed, showing steady progress in infrastructure and platform support. Key advancements include:

*   **Platform & Installations:** Closed PR [#6050](https://github.com/zeroclaw-labs/zeroclaw/pull/6050) fixed Windows test lifecycles and self-update triples. Closed PR [#5365](https://github.com/zeroclaw-labs/zeroclaw/pull/5365) addressed missing web dashboard issues in package manager installations by tracking pre-built web assets.
*   **Observability:** Significant progress in agent tracing with PR [#5986](https://github.com/zeroclaw-labs/zeroclaw/pull/5986) adding SSE broadcast for agent turn lifecycles, and PR [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) enriching OpenTelemetry spans.
*   **Voice Subsystem:** Active advancement on voice interaction, with PR [#5976](https://github.com/zeroclaw-labs/zeroclaw/pull/5976) introducing a real energy-based Voice Activity Detector (VAD) and PR [#5978](https://github.com/zeroclaw-labs/zeroclaw/pull/5978) implementing speech capture buffering for STT dispatch.
*   **Security & Skills:** PR [#5981](https://github.com/zeroclaw-labs/zeroclaw/pull/5981) fixed a high-risk security bypass where `ReadSkillTool` failed to pass script execution policies. PR [#6054](https://github.com/zeroclaw-labs/zeroclaw/pull/6054) fixed a bug where skill timeouts defined in `SKILL.toml` were silently ignored.

## 4. Community Hot Topics
The most actively discussed issues revolve around deployment roadblocks, architectural security, and schema migrations:

*   **Docker Sandbox Isolation ([#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) - 12 comments):** Contributor Jason Perlow detailed a high-severity bug where `runtime.kind = "native"` fails to bypass Docker for shell execution. This highlights a strong community need for highly secure, deterministic sandboxing when building financial/compliance skills (e.g., FINOS CDM).
*   **Chat Delivery Channels:** Users are highly engaged in requesting diverse delivery channels. Issue [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) (8 comments) requests Napcat/OneBot integration, while closed issue [#3361](https://github.com/zeroclaw-labs/zeroclaw/issues/3361) (4 comments) discusses Matrix channel delivery failures.
*   **Configuration & Dashboard Setup ([#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) - 6 comments):** Users are struggling with gateway web_dist_dir configurations, revealing that documentation and default Docker image builds need refinement.
*   **Schema v3 Migration ([#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) - 5 comments):** A coordinated batch breaking field migration is being heavily discussed to minimize user disruption.

## 5. Bugs & Stability
Several critical bugs impacting workflows were reported today. Fortunately, the maintainers have been highly responsive, and fix PRs exist for the most severe issues.

*   **S0/S1: Anthropic Claude 4.7 API Breakage ([#6007](https://github.com/zeroclaw-labs/zeroclaw/issues/6007)):** The Anthropic provider always sends a `temperature` parameter, causing errors on the new Claude 4.7 endpoint. (Open)
*   **S1: Ollama Provider Tool Failure ([#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)):** The Ollama provider fails when tools are invoked, completely blocking the session. (Open)
*   **S1: Desktop Crash ([#5984](https://github.com/zeroclaw-labs/zeroclaw/issues/5984)):** ZeroClaw-desktop crashes on startup with a "No provider set" error. (Status: In progress).
*   **S2: Memory Priority Imbalance ([#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)):** The agent over-indexes on memory during cron jobs rather than current prompts. (Open)
*   **S3: Web Dashboard Docker Omission ([#5959](https://github.com/zeroclaw-labs/zeroclaw/issues/5959)):** Web dashboard is missing in Docker images. **Fix PR:** [#5365](https://github.com/zeroclaw-labs/zeroclaw/pull/5365) (Closed/Merged).

## 6. Feature Requests & Roadmap Signals
Based on the active issues and open PRs, ZeroClaw's near-term roadmap is heavily focused on system observability, voice capabilities, and extensible plugins. Signals for upcoming features include:

*   **Session Management Overhaul:** A new tool, `SessionsCurrentTool` (PR [#6033](https://github.com/zeroclaw-labs/zeroclaw/pull/6033)), is being added so agents can identify their own session context.
*   **Improved Cost Tracking:** Users are requesting runtime-trace and cost tracking for gateway interactions (Issue [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001)). 
*   **WASM Plugin Security:** Issue [#5919](https://github.com/zeroclaw-labs/zeroclaw/issues/5919) proposes an allowlist environment variable system for WASM plugins, signaling a move toward highly secure, sandboxed agentic extensions.
*   **OpenRouter Prompt Caching:** Feature addition in PR [#6008](https://github.com/zeroclaw-labs/zeroclaw/pull/6008) will bring ephemeral caching to reduce costs for heavy API users.

## 7. User Feedback Summary
Real-world user feedback indicates a community pushing ZeroClaw into production environments but struggling with documentation, provider compatibility, and configuration ergonomics. 

*   **Pain Points:** Users deploying via Docker are frustrated by missing web dashboards and unclear configuration environment variables. Additionally, users relying on local models (Ollama, llama.cpp) are encountering provider-specific bugs, such as broken tool execution loops (Issue [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)) and ambiguous message addressing (Issue [#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002)).
*   **Advanced Use Cases:** There is a strong uptick in developers building complex integrations—such as automated trading compliance analysis, Nix package integrations (PR [#5987](https://github.com/zeroclaw-labs/zeroclaw/pull/5987)), and agentic memory management. These users are hitting limits on the current SQLite FTS implementation and session management.

## 8. Backlog Watch
Several significant contributions and issues are awaiting maintainer review or author action:

*   **Docker Workspace Bind-Mount Fix (PR [#5905](https://github.com/zeroclaw-labs/zeroclaw/pull/5905)):** Currently open, this is critical for unblocking the financial skill use cases noted in Issue #5719.
*   **ACP Tool Output Formatting (PR [#6035](https://github.com/zeroclaw-labs/zeroclaw/pull/6035)):** Tagged as high risk, this fix corrects how ACP servers transmit tool calls. Requires prompt maintainer review to prevent breaking agentic workflows.
*   **SQLite FTS Trigger (PR [#5985](https://github.com/zeroclaw-labs/zeroclaw/pull/5985)):** Fixes a data staleness bug in session search but is currently marked as needing author action.
*   **Multiple Model Providers (Issue [#2998](https://github.com/zeroclaw-labs/zeroclaw/issues/2998)):** A highly requested feature (open since March 2026) that currently lacks clear roadmap confirmation from maintainers.

</details>