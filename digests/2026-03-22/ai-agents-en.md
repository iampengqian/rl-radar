# OpenClaw Ecosystem Digest 2026-03-22

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-03-21 22:01 UTC

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

# OpenClaw Project Digest — 2026-03-22

## 1. Today's Overview
OpenClaw is experiencing **extremely high activity**, with 500 issues and 500 PRs updated in the last 24 hours alone (78% issue open rate, 73% PR open rate). The project is in a phase of rapid iteration, evidenced by multiple "regression" bugs appearing in the latest `2026.3.13` build. While no new official releases dropped today, the maintainer team (notably `vincentkoc` and `ernestodeoliveira`) is aggressively merging stability and security patches. The community is deeply engaged, debating architectural changes like i18n support and agent identity verification, though some users report frustration with stability on edge-case platforms (Raspberry Pi, WSL2).

## 2. Releases
**No new releases** were published today.
*   **Current implied stable version:** `2026.3.13` (frequently referenced in bug reports).
*   **Context:** The high volume of regression bugs and fix PRs suggests a stabilization period following a recent feature-heavy release.

## 3. Project Progress
The day's development focused heavily on **resilience, error sanitization, and developer experience**.

*   **Error Sanitization & Security (Merged/Closing):** Multiple PRs by `ernestodeoliveira` focused on preventing sensitive data leaks. PRs [#51323](https://github.com/openclaw/openclaw/pull/51323) (sandbox errors), [#51344](https://github.com/openclaw/openclaw/pull/51344) (media fetch errors), and [#51711](https://github.com/openclaw/openclaw/pull/51711) (orphaned tool results) ensure raw internal paths/API errors aren't dumped into public chat channels.
*   **Refactoring:** Maintainer `vincentkoc` merged significant refactors of the `doctor` command ([#51876](https://github.com/openclaw/openclaw/pull/51876)) and CI test batching ([#51884](https://github.com/openclaw/openclaw/pull/51884)) to improve maintainability and test reliability.
*   **Stability Fixes (Open/Pending):**
    *   PR [#43961](https://github.com/openclaw/openclaw/pull/43961) addresses gateway crashes on restart by forcing `SIGKILL` for stale processes.
    *   PR [#42485](https://github.com/openclaw/openclaw/pull/42485) restores Telegram retry logic for 429 errors.
    *   PR [#51751](https://github.com/openclaw/openclaw/pull/51751) prevents WebSocket crashes when `ffprobe` is missing.

## 4. Community Hot Topics
The community is buzzing about **usability gaps** and **platform-specific failures**.

1.  **Internationalization Demand ([#3460](https://github.com/openclaw/openclaw/issues/3460), 112 comments):** The most active issue is a plea for i18n. The maintainers acknowledge they lack bandwidth, but the community is actively submitting PRs. This is a major blocker for global adoption.
2.  **Integration Issues:**
    *   **DingTalk Onboarding ([#26534](https://github.com/openclaw/openclaw/issues/26534), 75 comments):** Users want DingTalk in the first-install wizard.
    *   **Kimi Auth Failures ([#44851](https://github.com/openclaw/openclaw/issues/44851), 23 comments):** `web_search` returns 401 errors for Kimi models despite the Chat API working.
3.  **Hardcoded Paths Scandal ([#51429](https://github.com/openclaw/openclaw/issues/51429)):** A user discovered a developer's local path (`/Users/wangtao`) hardcoded in the latest release, preventing the app from starting correctly for others. This highlights a need for better CI/CD linting.

## 5. Bugs & Stability
The `2026.3.13` version introduces several **regressions** affecting core functionality.

*   **Critical Regression - Authentication/Scope Failure:**
    *   Issue [#51396](https://github.com/openclaw/openclaw/issues/51396): `clearUnboundScopes` strips operator permissions for non-local clients, breaking `chat.send` for backend integrations.
    *   Issue [#48479](https://github.com/openclaw/openclaw/issues/48479): Google Vertex auth regressed to API-key mode instead of ADC/Bearer, breaking Gemini 3.x.
*   **Critical Bug - Hardcoded Path:**
    *   Issue [#51429](https://github.com/openclaw/openclaw/issues/51429): App creates `/Users/wangtao` directory due to hardcoded path. **Severity: High** (blocks usage).
*   **Channel Reliability:**
    *   Issue [#30177](https://github.com/openclaw/openclaw/issues/30177) (Closed) & [#51558](https://github.com/openclaw/openclaw/issues/51558) (Open): WhatsApp Web listeners disconnect or become inaccessible, failing message delivery.
    *   Issue [#51652](https://github.com/openclaw/openclaw/issues/51652): Website `openclaw.ai` unreachable via HTTPS from specific regions (UK/TalkTalk).
*   **Platform Specifics:**
    *   Issue [#23909](https://github.com/openclaw/openclaw/issues/23909): Raspberry Pi updates fail due to `@discordjs/opus` NEON build errors.

## 6. Feature Requests & Roadmap Signals
Several strategic proposals indicate where the project is heading.

*   **Model Support:** Requests for **MiniMax M2.7** ([#50234](https://github.com/openclaw/openclaw/issues/50234)) and **Gemini Context Caching** ([#51372](https://github.com/openclaw/openclaw/issues/51372)) suggest users are pushing for cost optimization and newer LLMs.
*   **Voice/Verbal Dialogue:** Issue [#49246](https://github.com/openclaw/openclaw/issues/49246) requests STT/TTS integration for voice-first agent interaction.
*   **Agent Identity & Security:** A sophisticated RFC ([#49971](https://github.com/openclaw/openclaw/issues/49971)) proposes native Agent Identity via DID/ERC-8004 standards, signaling a move toward verifiable, autonomous agents.
*   **ClawHub Ecosystem:** Discussion in [#50090](https://github.com/openclaw/openclaw/issues/50090) highlights gaps in the "Skills" marketplace promise versus reality.

## 7. User Feedback Summary
Users appreciate the breadth of channel support but are **frustrated by instability in basic workflows**.

*   **Pain Points:**
    *   **Vision is Broken:** Multiple reports ([#23452](https://github.com/openclaw/openclaw/issues/23452), [#51857](https://github.com/openclaw/openclaw/issues/51857)) indicate the agent "hallucinates" that it sees an image or silently fails to process it.
    *   **Update Fragility:** Updating breaks installations on non-standard environments (RPi, nvm-based Node installs) ([#49088](https://github.com/openclaw/openclaw/issues/49088)).
    *   **Context Window Mismanagement:** Large documents sent via Telegram brick the session ([#14231](https://github.com/openclaw/openclaw/issues/14231)).
*   **Satisfaction:** Community members are actively contributing fixes (e.g., GigaChat provider PR [#48017](https://github.com/openclaw/openclaw/pull/48017)), showing high loyalty despite the bugs.

## 8. Backlog Watch
*   **Stale but Critical:** Issue [#23452](https://github.com/openclaw/openclaw/issues/23452) (Vision/Image recognition broken) remains open with 7 upvotes. This fundamentally undermines user trust in multi-modal capabilities.
*   **Config Migration:** Issue [#23307](https://github.com/openclaw/openclaw/issues/23307) (Env vars resolved to plaintext on upgrade) is a security risk that has been stale since Feb 22.
*   **PR Needs Review:** PR [#48017](https://github.com/openclaw/openclaw/pull/48017) (GigaChat support) is a large contribution (XL size) waiting for merge.

---

## Cross-Ecosystem Comparison

# AI Agent & Personal Assistant Ecosystem Report
**Analysis Date:** 2026-03-22

## 1. Ecosystem Overview
The open-source personal AI assistant ecosystem is experiencing a phase of **rapid specialization and aggressive multimodal expansion**, moving beyond basic chatbot functionality toward autonomous, multi-channel agents. Projects are splitting into two distinct tiers: a group of high-velocity "platform" projects (OpenClaw, Zeroclaw, PicoClaw) competing on integration breadth and architecture, and a set of specialized tools focused on niche use cases (hardware control, specific cloud providers, or lightweight footprints). A universal theme across the ecosystem is the struggle to balance **autonomous capability with security and cost controls**, as users push for agents that can execute complex workflows without breaking budgets or escaping guardrails.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Primary Focus |
|---------|-------------|-----------|----------------|--------------|---------------|
| **OpenClaw** | 500 | 500 | Stable (`2026.3.13`) | 🟢 High | Stabilization, i18n, channel resilience |
| **Zeroclaw** | 30 | 50 | **v0.5.5** (Released) | 🟢 High | Multi-agent (A2A), hardware, local-first |
| **NanoBot** | 16 | 52 | Dev builds | 🟢 High | Multimodal, cost controls, vision decoupling |
| **PicoClaw** | 28 | 35 | Nightly | 🟢 High | Voice/audio, Web UI, execution tooling |
| **IronClaw** | 22 | 50 | Staging | 🟡 Medium | UX overhaul, multi-tenancy, Slack Socket |
| **LobsterAI** | ~15 | 29 | **v2026.3.21** (Released) | 🟡 Medium | Desktop app, memory management, UX |
| **NanoClaw** | 26 | 27 | Dev builds | 🟡 Medium | Skill marketplace, trust framework |
| **CoPaw** | 41 | 11 | **v0.1.0** (Released) | 🔴 Strained | Post-release stabilization, migration fixes |
| **EasyClaw** | 3 | 0 | **v1.7.5** (Released) | 🟢 Stable | Desktop deployment, tool calling fixes |
| **ZeptoClaw** | 2 | 0 | None | 🟡 Planning | Architecture planning, isolation strategy |
| **Moltis** | 0 | 2 | None | 🔵 Quiet | Cross-platform fixes (Windows/Nix) |
| **TinyClaw** | 0 | 0 | None | ⚪ Inactive | No activity |

**Health Score Legend:** 🟢 High (active development, responsive maintainers) | 🟡 Medium (active but bottlenecks) | 🔴 Strained (overwhelmed) | 🔵 Quiet (low activity but stable) | ⚪ Inactive

---

## 3. OpenClaw's Position

**Market Position:** OpenClaw remains the **clear reference implementation and ecosystem leader** by volume, with 10x the activity of nearest peers. It serves as the "default choice" for enterprise and power users seeking breadth of channel support.

| Dimension | OpenClaw Advantage | Peer Comparison |
|-----------|-------------------|-----------------|
| **Scale** | 500 issues/PRs daily | Nearest competitor: 50 PRs (Zeroclaw) |
| **Channel Support** | Broadest integration surface | Zeroclaw, PicoClaw catching up on niche channels |
| **Community** | Largest contributor base | Most diverse model/provider contributions |
| **Maturity** | Longest production history | Others still in rapid experimentation phase |

**Technical Approach Differences:**
- **OpenClaw** prioritizes **breadth and stability**—aggressively patching regressions, sanitizing errors, and maintaining backward compatibility while debating major architectural shifts (i18n, agent identity).
- **Zeroclaw** is pursuing a **multi-agent orchestration** strategy with A2A protocol and hardware integration, targeting IoT/edge use cases OpenClaw doesn't address.
- **NanoBot** is differentiating on **cost optimization** (context budgeting, vision model decoupling), appealing to users sensitive to API spending.
- **PicoClaw** focuses on **voice-first and embedded deployment** (Docker heavy, ARM64 support), addressing hardware-constrained scenarios.

**Key Vulnerability:** OpenClaw's regression rate (hardcoded paths, vision failures, auth breaks) suggests quality control challenges from its velocity—something smaller projects like Zeroclaw are capitalizing on with more disciplined release cadences.

---

## 4. Shared Technical Focus Areas

### A. Security vs. Usability Tension (Universal)
**Projects:** Zeroclaw (#1478), IronClaw (#1518), CoPaw (#2007), OpenClaw (#49971)
- **Consensus Need:** Graduated security presets that allow "middle ground" between "blocks everything" and "unrestricted autonomy"
- **Gap:** All projects struggle with binary security models; users want trust-on-first-use, domain whitelisting, and approval fatigue mitigation

### B. Multimodal Architecture Decoupling (High Priority)
**Projects:** NanoBot (#2340), PicoClaw (#1648), OpenClaw (#49246), Zeroclaw (#4119)
- **Consensus Need:** Separate vision/STT/TTS providers from reasoning models for cost optimization
- **Pattern:** Using cheap/fast models for perception while reserving expensive models for logic

### C. Context Window & Token Cost Management (Critical)
**Projects:** NanoBot (#2317), OpenClaw (#14231), PicoClaw (#1862), LobsterAI (#628)
- **Consensus Need:** Context budgeting, binary data filtering, and memory pagination to prevent runaway costs
- **Gap:** Projects are independently building context budgeting; no standard approach exists

### D. Platform Channel Expansion
**Projects:** OpenClaw (DingTalk), NanoBot (QQ/Teams), Zeroclaw (Gmail push), IronClaw (Slack Socket), LobsterAI (Feishu/Popo)
- **Consensus Need:** WebSocket long-connection modes, NAT-friendly deployments without public tunnels
- **Regional Pattern:** Chinese platforms (DingTalk, Feishu, QQ) are high-demand integrations across multiple projects

### E. Memory & Session Management
**Projects:** LobsterAI (SQLite async), Zeroclaw (mem0), NanoClaw (session reset), CoPaw (memory migration)
- **Consensus Need:** Persistent, queryable memory that doesn't block main threads or explode token counts
- **Gap:** Migration between versions causing data loss is a universal pain point

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Philosophy |
|---------|----------------------|-------------|------------------------|
| **OpenClaw** | Ecosystem breadth, community scale | Enterprises, power users | Plugin-based, channel-agnostic |
| **Zeroclaw** | Multi-agent orchestration, hardware | IoT/edge, autonomous systems | Protocol-first (A2A), local-first |
| **NanoBot** | Cost optimization, vision decoupling | API-cost-sensitive users | Provider-specialized, token-efficient |
| **PicoClaw** | Voice-first, embedded deployment | Hardware hackers, mobile | Lightweight, Docker-native |
| **IronClaw** | Multi-tenancy, UX polish | Enterprise workspaces | Workspace-isolated, design-system |
| **LobsterAI** | Desktop-native, Chinese market | Individual desktop users | Electron-based, IM-integrated |
| **NanoClaw** | Skill ecosystem, trust framework | Developers, extensibility | Plugin-first, marketplace-oriented |
| **CoPaw** | Multi-agent workflows | Workflow builders | Graph-based orchestration |
| **ZeptoClaw** | Strict isolation, security-first | Security-conscious orgs | Firecracker VM-based sandboxing |
| **EasyClaw** | Simplified deployment | Non-technical users | Bundled, minimal configuration |

**Key Insight:** The ecosystem is fragmenting by **deployment target** (cloud vs. desktop vs. edge) and **trust model** (fully autonomous vs. human-in-the-loop) rather than just feature sets.

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (Ship Fast, Fix Fast)
**Projects:** OpenClaw, Zeroclaw, NanoBot, PicoClaw
- High PR merge rates, multiple releases per week
- Tolerating regressions in exchange for velocity
- Active contributor communities (50+ PRs/day)

### Tier 2: Structured Growth (Feature Accumulation)
**Projects:** IronClaw, LobsterAI, NanoClaw
- Focused on architectural foundations (multi-tenancy, UX frameworks)
- Longer PR review cycles, strategic roadmap signals
- Building toward major version releases

### Tier 3: Post-Release Stabilization
**Projects:** CoPaw, EasyClaw
- Recently shipped major versions, now managing regression backlog
- Maintainer attention consumed by support tickets
- Migration failures causing community friction

### Tier 4: Planning/Quiet Phase
**Projects:** ZeptoClaw, Moltis, TinyClaw
- Architectural discussions taking precedence over code
- Potential consolidation or strategic pivots underway

**Maturity Indicator:** OpenClaw is the only project actively debating **i18n at scale** (#3460, 112 comments), signaling transition from early-adopter to global-market product.

---

## 7. Trend Signals for AI Agent Developers

### A. Agent Identity & Verification Standards Emerging
**Signal:** OpenClaw RFC #49971 proposes DID/ERC-8004 standards for verifiable agent identity
**Implication:** Autonomous agents will need cryptographic identity for API access, legal accountability, and inter-agent trust. Developers should start designing for signed agent actions.

### B. Local-First Architecture Becoming Table Stakes
**Signal:** Zeroclaw users demanding complete offline stacks (local TTS #4116, local vision #4119); PicoClaw building "batteries-included" Docker images
**Implication:** Privacy concerns and API costs are driving demand for fully-local deployments. Projects without local fallbacks will lose enterprise adoption.

### C. Cost Visibility is a Critical UX Gap
**Signal:** NanoBot #2318 (tool-loop cost anxiety), Zeroclaw #3565 (zero token visibility), multiple projects building context budgeting
**Implication:** Users are flying blind on API costs. Token usage dashboards, budget caps, and cost prediction features will be competitive differentiators.

### D. Security UX Needs Product Innovation
**Signal:** Zeroclaw #1478 ("so secure it can only be a chatbot"), IronClaw #1518 (approval fatigue), CoPaw #2007 (self-approval bypass)
**Implication:** Current security models are either broken or unusable. Graduated trust, risk-based approval routing, and "trust frameworks" (NanoClaw #1308) represent unmet market needs.

### E. Desktop Apps Facing Platform Friction
**Signal:** EasyClaw (macOS Gatekeeper), LobsterAI (Electron stability), Moltis (Windows file locking)
**Implication:** Cross-platform desktop deployment remains painful. Web-first + progressive web app strategies may be more viable than native desktop wrappers.

### F. Tool-Calling Reliability is the New Stability Frontier
**Signal:** OpenClaw vision "hallucinations" (#23452), Zeroclaw hallucination loops (#4127), CoPaw tool interruptions (#1974)
**Implication:** Agent reliability now depends more on tool orchestration correctness than LLM response quality. Testing frameworks for tool chains (ZeptoClaw #391) will become essential infrastructure.

---

**Strategic Takeaway:** The ecosystem is rapidly maturing from "demo projects" to "production platforms." The next 6 months will likely see consolidation around standards for **agent identity, cost controls, and security frameworks**—areas where OpenClaw's scale gives it de facto standard-setting power, but where smaller projects are innovating faster on implementation.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-03-22

## 1. Today's Overview
NanoBot demonstrates **high velocity** development activity with 52 pull requests updated in 24 hours (33 open, 19 merged/closed) and 16 active issues. The project is in an aggressive feature expansion phase, particularly around **multimodal capabilities** (vision/audio), **channel integrations** (QQ/Teams/DingTalk), and **agent reliability** (context budgeting, concurrency). No new stable releases shipped today, but the volume of merged PRs suggests a potential release candidate is being stabilized. The community is actively contributing both core fixes and third-party ecosystem tools.

## 2. Releases
No new releases recorded for this date. The last recorded activity suggests the project is operating on recent `post5` builds with active development on the `nightly` branch.

## 3. Project Progress
Significant core architecture and integration advancements were merged or updated today:

*   **Multimodal & Vision Architecture:** PR #2340 introduces a dedicated Vision Provider/Model configuration, decoupling vision tasks from text models. PR #2277 merged to fix prompt token estimation by including image tokens.
*   **Agent Loop & Reliability:** Several critical PRs target the agent loop. PR #2317 introduces a configurable context budget to prevent cost explosions during tool loops. PR #2333 (merged) and #2215 (merged) implemented "content-aware synthetic acknowledgments" to prevent the LLM from hallucinating duplicate progress messages.
*   **Channel Integrations:**
    *   **QQ:** PR #2337 adds NapCatQQ support for group chats/images; PR #2316 fixes voice file typing; PR #2324 adds full media support.
    *   **Teams:** PR #2129 adds Microsoft Teams channel support.
    *   **WeCom/DingTalk:** PR #2324 adds media support; fixes for DingTalk image handling were discussed in issues.
*   **Core Refactoring:** PR #2338 (merged) unified the `process_direct` interface, cleaning up internal API contracts.

## 4. Community Hot Topics
*   **[Community Ecosystem] [nanobot-webui](https://github.com/HKUDS/nanobot/issues/1922) (👍 6)**
    A community member built a self-hosted Web Management Panel. This indicates a strong user need for **visual configuration tools** and **multi-user management** UIs, which the core CLI/API currently lacks.
*   **[Architecture] [Tool-loop Cost & Reliability](https://github.com/HKUDS/nanobot/issues/2318)**
    A deep-dive issue analyzing how unguarded tool loops cause exponential token costs. This sparked PR #2317 (Context Budget) and highlights user anxiety regarding **uncontrolled API spending** during complex agent tasks.
*   **[Feature Request] [Dedicated Vision Provider](https://github.com/HKUDS/nanobot/issues/2339)**
    High interest in decoupling vision models from reasoning models (e.g., using a cheap/fast model for vision while keeping a strong model for logic). This was immediately addressed in PR #2340.

## 5. Bugs & Stability
*   **Critical Regression (v0.1.4.post5):** Issue [#2141](https://github.com/HKUDS/nanobot/issues/2141) reports **Voice Transcription failure** after upgrade. Users are getting "summarize skill isn't installed" errors. (Status: Closed, likely fixed in recent merges).
*   **Tool Discovery:** Issue [#2325](https://github.com/HKUDS/nanobot/issues/2325) reports MCP tools not updating dynamically after server changes. Requires restart.
*   **Configuration/CLI:** Issue [#2250](https://github.com/HKUDS/nanobot/issues/2250) notes the `-c` config flag fails on `nanobot onboard` (Closed).
*   **Model Compatibility:** Issue [#2273](https://github.com/HKUDS/nanobot/issues/2273) flagged schema incompatibility with **GPT-5.4** via OpenRouter when using `browser-use` (Closed).
*   **Stability (Local LLMs):** Issue [#2293](https://github.com/HKUDS/nanobot/issues/2293) notes conversations "silently die" when executing tools with local Ollama models (Qwen2.5), likely due to context/formatting mismatches.

## 6. Feature Requests & Roadmap Signals
The "nightly" branch and open PRs signal the following roadmap:
1.  **Multimodal Specialization:** First-class support for separate Vision/Text providers (PR #2340) is imminent.
2.  **Cost Controls:** "Context Budgeting" (PR #2317) will likely land soon to address token cost concerns.
3.  **Expanded Chat Platforms:** Official support for **Microsoft Teams** (PR #2129) and enhanced **QQ/WeCom** media handling (PR #2324) is in the pipeline.
4.  **Concurrency:** Transition from global to per-session locks (PR #2335) indicates a push toward high-concurrency multi-user deployments.

## 7. User Feedback Summary
Users are enthusiastic but struggling with **operational stability** during upgrades (regressions in voice skills). There is a clear divide between "setup" friction (CLI config flags, MCP tool discovery) and "runtime" friction (cost control, local model reliability). The prompt caching issue ([#981](https://github.com/HKUDS/nanobot/issues/981)) highlights a sophisticated user base concerned with latency and API efficiency. Positive sentiment surrounds the extensibility, evidenced by the third-party WebUI.

## 8. Backlog Watch
*   **Issue [#981](https://github.com/HKUDS/nanobot/issues/981) (Perf):** "Current Time in system prompt breaks prompt cache hit." A performance optimization for API costs/latency that remains open. Highly technical, high-value fix needed.
*   **Issue [#144](https://github.com/HKUDS/nanobot/issues/144) (Config):** "Missing gemini_api_key" error forcing Vertex AI routing. Old issue (Feb) still open, affecting Gemini users.
*   **PR #1359 & #1360 (Heartbeat Refactor):** These related PRs regarding "preserving context in heartbeat execution" have been open since March 1st. They seem stuck or awaiting review, potentially blocking robust autonomous task management.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest — 2026-03-22

## 1. Today's Overview

Zeroclaw is experiencing **extremely high development velocity** with 50 pull requests updated and 30 issues active in the last 24 hours. The project released **v0.5.5** with significant feature additions including new LLM providers, tool integrations, and channel enhancements. The community is actively engaged with substantive feature requests around local-first AI capabilities and agent interoperability. However, several **critical bugs** around UTF-8 handling, security policy behavior, and tool routing in channels are causing user friction. The maintainer team (notably @theonlyhennygod, @Argenis, and @rareba) is shipping fixes rapidly while also advancing ambitious features like A2A protocol support and hardware integration.

---

## 2. Releases

### **v0.5.5** (Stable)
**Major Features:**
- **DeepMyst provider** — Added as OpenAI-compatible provider ([#4103](https://github.com/zeroclaw-labs/zeroclaw/issues/4103))
- **WeatherTool** — Weather data integration via wttr.in ([#4104](https://github.com/zeroclaw-labs/zeroclaw/issues/4104))
- **Slack Assistants API** — Status indicators for Slack channels ([#4105](https://github.com/zeroclaw-labs/zeroclaw/issues/4105))
- **Cron edit modal** — UI for updating cron jobs directly
- **Per-channel proxy support** — HTTP/SOCKS5 proxy configuration per channel
- **Hardware plugin system** — RPi GPIO, Aardvark I2C/SPI/GPIO support
- **mem0 backend** — OpenMemory integration for persistent memory
- **OpenAI Codex auth import** — Migration path for existing Codex users

**10 beta releases** led to this stable version, indicating thorough iteration before release.

---

## 3. Project Progress

### Merged/Closed PRs (27 today)

| PR | Description | Impact |
|----|-------------|--------|
| [#4172](https://github.com/zeroclaw-labs/zeroclaw/pull/4172) | Fix publish order for aardvark-sys dependency | Unblocks crates.io publishing |
| [#4169](https://github.com/zeroclaw-labs/zeroclaw/pull/4169) | Fix sudo reading from /dev/tty for curl\|bash installs | Critical installer fix |
| [#4168](https://github.com/zeroclaw-labs/zeroclaw/pull/4168) | Preserve `:cloud` tag for private Ollama servers | Fixes local LLM users |
| [#4167](https://github.com/zeroclaw-labs/zeroclaw/pull/4167) | Remove robot-kit from workspace | Fixes Docker --locked builds |
| [#4165](https://github.com/zeroclaw-labs/zeroclaw/pull/4165) | Auto-accept Xcode license on macOS | Improves macOS onboarding |
| [#2759](https://github.com/zeroclaw-labs/zeroclaw/pull/2759) | Restore SOP/MQTT wiring | Major subsystem integration |

### Open PRs Advancing Features (23 open)

| PR | Feature | Status |
|----|---------|--------|
| [#4174](https://github.com/zeroclaw-labs/zeroclaw/pull/4174) | Version bump to v0.5.6 | Preparing next release |
| [#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166) | **A2A Protocol Support** | Major interoperability feature |
| [#4163](https://github.com/zeroclaw-labs/zeroclaw/pull/4163) | Live Canvas (A2UI) real-time viewer | Rich output capability |
| [#4164](https://github.com/zeroclaw-labs/zeroclaw/pull/4164) | Gmail Pub/Sub push notifications | Email channel upgrade |
| [#4162](https://github.com/zeroclaw-labs/zeroclaw/pull/4162) | Voice wake word detection | Hands-free activation |
| [#4160](https://github.com/zeroclaw-labs/zeroclaw/pull/4160) | Deterministic SOP execution mode | Workflow optimization |
| [#4159](https://github.com/zeroclaw-labs/zeroclaw/pull/4159) | Background/parallel delegate execution | Multi-agent scaling |
| [#4154](https://github.com/zeroclaw-labs/zeroclaw/pull/4154) | Codex CLI and Gemini CLI harness tools | Multi-model orchestration |

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Engagement | Theme |
|-------|------------|-------|
| [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) | 👍 6, 44 comments | **Security vs. usability tension** — User frustrated that strict security blocks all functionality |
| [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) | 👍 4 | **A2A Protocol** — Agent-to-agent interoperability request |
| [#4127](https://github.com/zeroclaw-labs/zeroclaw/issues/4127) | 6 comments | **Agent hallucination loop** — Security-off mode causes uncontrolled execution |
| [#2910](https://github.com/zeroclaw-labs/zeroclaw/issues/2910) | 6 comments | **WebUI connection failures** — Persistent reconnection issues |

### Analysis of Underlying Needs

1. **Security Configuration Complexity** — Multiple users report that enabling security features renders the agent unusable, yet disabling them causes erratic behavior. Clear need for **graduated security presets**.

2. **Local-First AI Stack** — Strong demand for complete offline capability: local TTS ([#4116](https://github.com/zeroclaw-labs/zeroclaw/issues/4116)), vision routing ([#4119](https://github.com/zeroclaw-labs/zeroclaw/issues/4119)), and GPU-accelerated inference.

3. **Multi-Agent Interoperability** — A2A protocol support ([#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)) would enable ZeroClaw instances to communicate with external agents, a critical enterprise feature.

4. **Cost Visibility** — Users running paid APIs have **zero visibility** into token usage ([#3565](https://github.com/zeroclaw-labs/zeroclaw/issues/3565)).

---

## 5. Bugs & Stability

### Critical (S0 - Data Loss / Security Risk)

| Issue | Description | Fix Status |
|-------|-------------|------------|
| [#4139](https://github.com/zeroclaw-labs/zeroclaw/issues/4139) | **Panic on UTF-8 multi-byte characters** in `creator.rs` — crashes on Chinese input | 🔴 No fix PR yet |
| [#4171](https://github.com/zeroclaw-labs/zeroclaw/issues/4171) | Docker daemon + Telegram fails with HTTP 502 errors | 🔴 No fix PR yet |
| [#4127](https://github.com/zeroclaw-labs/zeroclaw/issues/4127) | Agent enters hallucination loop executing non-existent commands when security disabled | 🔴 Investigation needed |
| [#4124](https://github.com/zeroclaw-labs/zeroclaw/issues/4124) | Zhipu/ZAI provider prompt exceeds max length | 🔴 No fix PR yet |

### High Severity (S1 - Workflow Blocked)

| Issue | Description | Fix Status |
|-------|-------------|------------|
| [#4170](https://github.com/zeroclaw-labs/zeroclaw/issues/4170) | Weather tool cannot be invoked from channels | 🟡 Related to #4083 |
| [#4083](https://github.com/zeroclaw-labs/zeroclaw/issues/4083) | Web search tool fails on Telegram/other channels | ✅ Closed, fix deployed |
| [#4093](https://github.com/zeroclaw-labs/zeroclaw/issues/4093) | Provider streaming code stranded on deleted branch — never reached master | 🔴 Requires code recovery |

### Medium Severity (S2 - Degraded Behavior)

| Issue | Description | Fix Status |
|-------|-------------|------------|
| [#4107](https://github.com/zeroclaw-labs/zeroclaw/issues/4107) | `/model_switch` reports success but doesn't actually switch models | ✅ Closed |
| [#3679](https://github.com/zeroclaw-labs/zeroclaw/issues/3679) | Cost tracking removed during branch migration | 🔴 Feature regression |
| [#4086](https://github.com/zeroclaw-labs/zeroclaw/issues/4086) | Gateway only binds 127.0.0.1, refuses 0.0.0.0 | 🔴 Docker networking issue |

---

## 6. Feature Requests & Roadmap Signals

### Strong Community Demand (Likely in Next Version)

| Feature | Issue | Signals |
|---------|-------|---------|
| **A2A Protocol Support** | [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) | 👍 4, **PR exists** [#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166) |
| **Local GPU TTS (Piper/Coqui)** | [#4116](https://github.com/zeroclaw-labs/zeroclaw/issues/4116) | Detailed spec, local-first alignment |
| **SearXNG Search Provider** | [#4152](https://github.com/zeroclaw-labs/zeroclaw/issues/4152) | Privacy-focused alternative to DuckDuckGo |
| **Token Usage Dashboard** | [#3565](https://github.com/zeroclaw-labs/zeroclaw/issues/3565) | Cost visibility critical for paid APIs |

### Advanced Features Under Discussion

| Feature | Issue | Complexity |
|---------|-------|------------|
| Autonomous skill creation & self-improvement | [#3683](https://github.com/zeroclaw-labs/zeroclaw/issues/3683) | High — learning loop |
| Database-first memory with pgvector | [#4028](https://github.com/zeroclaw-labs/zeroclaw/issues/4028) | High — architecture change |
| Multi-stage scoring pipeline for SQLite | [#3478](https://github.com/zeroclaw-labs/zeroclaw/issues/3478) | Medium — memory enhancement |
| Hot-reload config without daemon restart | [#3569](https://github.com/zeroclaw-labs/zeroclaw/issues/3569) | Medium — UX improvement |

### Prediction for v0.5.6 / v0.6.0

Based on open PRs and community traction:
- ✅ **A2A Protocol** — PR [#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166) ready for review
- ✅ **Gmail push notifications** — PR [#4164](https://github.com/zeroclaw-labs/zeroclaw/pull/4164) complete
- ✅ **Voice wake word detection** — PR [#4162](https://github.com/zeroclaw-labs/zeroclaw/pull/4162) complete
- ✅ **Live Canvas real-time viewer** — PR [#4163](https://github.com/zeroclaw-labs/zeroclaw/pull/4163) complete

---

## 7. User Feedback Summary

### Pain Points

1. **Security Configuration is Binary** — Users report either "blocks everything" or "lets agent run wild" with no middle ground ([#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) is emblematic: *"安全到这个 bot 只能当个聊天机器人"* — "so secure it can only be a chatbot")

2. **Channel-Specific Tool Failures** — Tools work in direct agent mode but fail when invoked through Telegram/Slack channels ([#4083](https://github.com/zeroclaw-labs/zeroclaw/issues/4083), [#4170](https://github.com/zeroclaw-labs/zeroclaw/issues/4170))

3. **Local LLM Integration Gaps** — Running local models (Ollama, llama.cpp) has friction points around vision, TTS, and streaming

4. **Configuration Complexity** — User migrated from OpenClaw because it was "太大,配置太复杂" (too large, too complex), but finds ZeroClaw's security equally problematic

### Positive Signals

- Users actively building **multi-channel deployments** (Telegram, Slack, WhatsApp, QQ)
- Strong interest in **hardware integration** (RPi GPIO, Aardvark)
- Community contributing **high-quality PRs** with full feature implementations

### Use Cases Emerging

- **Self-hosted AI assistant** with complete local stack
- **Multi-agent orchestration** across different LLM providers
- **IoT/Hardware control** via voice and messaging channels
- **Enterprise email integration** with Gmail push notifications

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Concern |
|-------|-----|---------|
| [#4093](https://github.com/zeroclaw-labs/zeroclaw/issues/4093) | 1 day | **Code loss** — streaming implementation stranded on deleted `dev` branch, never merged to master. Requires investigation and recovery. |
| [#3679](https://github.com/zeroclaw-labs/zeroclaw/issues/3679) | 5 days | **Feature regression** — cost tracking lost during branch migration. No maintainer response yet. |
| [#2910](https://github.com/zeroclaw-labs/zeroclaw/issues/2910) | 15 days | **WebUI connection errors** — unresolved, affecting multiple users |
| [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) | 26 days | **Security UX** — fundamental usability concern, 44 comments, needs design response |

### PRs Awaiting Review

| PR | Scope | Risk Level |
|----|-------|------------|
| [#4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166) | A2A Protocol | High impact, needs thorough review |
| [#4160](https://github.com/zeroclaw-labs/zeroclaw/pull/4160) | Deterministic SOP | Core workflow change |
| [#4085](https://github.com/zeroclaw-labs/zeroclaw/pull/4085) | Git operations expansion | Medium risk |

---

## Summary

Zeroclaw is in a **rapid growth phase** with v0.5.5 delivering substantial features and v0.5.6 already in preparation. The project is expanding beyond a personal assistant into a **multi-agent orchestration platform** with A2A protocol, hardware integration, and rich channel support. 

**Key Risks:**
- UTF-8 crash bug ([#4139](https://github.com/zeroclaw-labs/zeroclaw/issues/4139)) needs immediate patch
- Security/UX balance needs product decision, not just bug fixes
- Lost streaming code ([#4093](https://github.com/zeroclaw-labs/zeroclaw/issues/4093)) indicates branch hygiene issues

**Health Indicator:** 🟢 **Active** — High PR throughput, responsive maintainers, engaged community, clear feature velocity.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest (2026-03-22)

## 1. Today's Overview
PicoClaw demonstrates **very high development velocity** with 35 PRs and 28 Issues updated in the last 24 hours. The project is actively evolving towards a multi-modal, platform-agnostic AI assistant, with significant work focused on **voice capabilities (TTS/ASR)**, **Web UI**, and **execution tooling (PTY/Background support)**. While maintainers merged 14 PRs—including substantial documentation overhauls and cloud provider integrations—the high volume of open PRs (21) suggests a busy review queue. A nightly build was released to track the rapid changes.

## 2. Releases
*   **Nightly Build**: `v0.2.3-nightly.20260321.100720bb`
    *   **Status**: Automated build from `main` branch.
    *   **Content**: Includes recent merges for Azure AI Foundry support, Telegram ID fixes, and heartbeat logic optimization.
    *   **Note**: Intended for testing; may contain instability from recent refactors (e.g., Exec tool PTY support attempts).

## 3. Project Progress
**14 PRs were merged/closed**, highlighting significant advancements in stability and ecosystem support:

*   **Cloud & Provider Support**:
    *   [PR #1860](https://github.com/sipeed/picoclaw/pull/1860): Added **Azure AI Foundry** host recognition, enabling Prompt Caching and Native Search.
    *   [PR #1855](https://github.com/sipeed/picoclaw/pull/1855): Fixed identity parsing for **Telegram Group IDs** (supporting negative integers).
*   **Agent & Tooling Enhancements**:
    *   [PR #1617](https://github.com/sipeed/picoclaw/pull/1617): Optimized **Heartbeat logic** to ignore default templates, reducing unnecessary token consumption.
    *   [PR #1717](https://github.com/sipeed/picoclaw/pull/1717): Fixed subagent spawning to ensure **tools are inherited** correctly.
*   **Ecosystem & Deployments**:
    *   [PR #1861](https://github.com/sipeed/picoclaw/pull/1861): Added `agent-browser` skill for Chrome/Chromium automation and `Dockerfile.heavy` for "batteries-included" deployment.
    *   [PR #1837](https://github.com/sipeed/picoclaw/pull/1837): Massive documentation update (25+ fixes, 60 channel docs, 5 languages).

## 4. Community Hot Topics
*   **Voice & Audio Architecture** ([Issue #1648](https://github.com/sipeed/picoclaw/issues/1648), [PR #1852](https://github.com/sipeed/picoclaw/pull/1852)):
    *   The community is actively fleshing out TTS/ASR support. A major PR introducing **Discord Voice Chat** via a "Voice Orchestrator" is currently open. This aligns with the roadmap to make PicoClaw a multi-modal assistant.
*   **Web UI Development** ([Issue #806](https://github.com/sipeed/picoclaw/issues/806)):
    *   The high-priority roadmap item for a dedicated Web UI is under active development (Status: "Refactoring now"). This is critical for lowering the barrier to entry for non-technical users.
*   **Exec Tool Overhaul** ([Issue #1733](https://github.com/sipeed/picoclaw/issues/1733)):
    *   There is strong interest in upgrading the `exec` tool to support **PTY (Pseudo-Terminal)** and **Background Execution** for long-running tasks (docker builds, etc.).

## 5. Bugs & Stability
*   **Severity: High - Anthropic API 400 Errors** ([PR #1793](https://github.com/sipeed/picoclaw/pull/1793))
    *   **Issue**: Duplicate tool results and improper history sanitization are causing 400 errors with the Anthropic provider.
    *   **Status**: Fix PR is open and pending merge.
*   **Severity: Medium - Model Status Probe Failure** ([Issue #1864](https://github.com/sipeed/picoclaw/issues/1864))
    *   **Issue**: `/v1/models` endpoint fails for OpenAI-compatible local gateways (like axonhub) because API keys are not passed during the probe.
    *   **Status**: Bug confirmed, fix likely needed in `web/backend/api/model_status.go`.
*   **Severity: Medium - Context Window Pollution** ([Issue #1862](https://github.com/sipeed/picoclaw/issues/1862))
    *   **Issue**: MCP returns non-textual Base64 data which is sent to the LLM, consuming massive amounts of context window.
    *   **Status**: Open, needs architectural fix to filter/handle binary MCP data.

## 6. Feature Requests & Roadmap Signals
*   **Enhanced Logging Control** ([Issue #1848](https://github.com/sipeed/picoclaw/issues/1848)): Users want granular control over log verbosity (beyond just `--debug`) to reduce noise in standard outputs.
*   **ClawTeam Integration** ([Issue #1850](https://github.com/sipeed/picoclaw/issues/1850)): Proposal to support the HKUDS/ClawTeam project, signaling growing ecosystem interoperability.
*   **Hook Manager** ([PR #1863](https://github.com/sipeed/picoclaw/pull/1863)): A new feature PR to add a hook management system, potentially allowing custom logic injection into agent lifecycles.

## 7. User Feedback Summary
*   **Pain Point**: **Installation Friction**: Users on ARM64 architectures (e.g., Android Termux) are reporting installation issues with `.deb` packages ([Issue #1763](https://github.com/sipeed/picoclaw/issues/1763)).
*   **Pain Point**: **Configuration Complexity**: Users find the current `max_tool_iterations` hard limit restrictive for complex workflows and misleading when the model simply returns an empty response ([Issue #440](https://github.com/sipeed/picoclaw/issues/440), [Issue #1815](https://github.com/sipeed/picoclaw/issues/1815)).
*   **Positive Signal**: The community is proactively contributing high-quality documentation fixes and Docker improvements, indicating a healthy, engaged user base.

## 8. Backlog Watch
*   **Exec Tool PR Stabilization** ([PR #1869](https://github.com/sipeed/picoclaw/pull/1869)): This PR re-submits the PTY/Background execution feature after a revert due to build failures (Loong64 architecture). **Maintainers need to review to ensure cross-platform build stability.**
*   **Documentation Gaps** ([Issue #1868](https://github.com/sipeed/picoclaw/issues/1868)): A user contributed a reference for **Cronjob** functionality. This documentation needs to be merged/officially integrated.
*   **Web UI Progress** ([Issue #806](https://github.com/sipeed/picoclaw/issues/806)): While marked "Refactoring," no linked PRs for the main UI structure were visible in today's feed. This remains a high-expectation item for the next release.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-03-22

## 1. Today's Overview
NanoClaw is experiencing a period of high development velocity and active community contribution. The project saw significant activity in the last 24 hours with 26 issues updated and 27 pull requests active, reflecting a healthy 1:1 ratio of issue management to code contribution. The open source community is heavily engaged in extending NanoClaw's capabilities, with proposals for a Skill Marketplace, Trust Framework, and expanded channel support (WhatsApp, Discord). However, the development team is currently managing technical debt, evidenced by persistent merge-forward failures in skill branches and a backlog of manual conflict resolutions required for `skill/apple-container` and `skill/compact`.

## 2. Releases
No new releases were recorded in the last 24 hours. The project appears to be in an active development phase, accumulating features and fixes via the main branch before a potential stabilization and release cycle.

## 3. Project Progress
**Merged/Closed PRs (9):**
*   **Code Quality:** PR #1297 added ESLint configuration and fixed linting issues, and PR #1314 addressed audit findings, improving codebase robustness.
*   **Messaging Channels:** PR #1137 added Telegram inline keyboard support, and PR #1240 enabled reply-to-message context forwarding for Telegram.
*   **Skills & UX:** PR #1138 introduced a `USER.md` memory skill for persistent profiles, and PR #1300 added a Slack formatting skill. PR #1296 added a CLI skill for running agents from the command line.
*   **Documentation:** PR #1310 was opened (and potentially relates to progress) to add credentials and environment variable guides.

**Active Development (Open PRs - 18):**
*   **Major Features:** PR #1309 proposes a Skill Marketplace/Registry system. PR #1308 introduces a "Trust & Autonomy Framework" with approval tracking. PR #1311 is implementing session creation features.
*   **New Channels:** PR #1313 aims to add WhatsApp, Discord, PDF, voice, and compact skills. PR #1251 proposes an OpenMail email channel.
*   **Infrastructure:** PR #1237 is working on replacing the credential proxy with OneCLI gateway.

## 4. Community Hot Topics
The community is actively discussing extensibility and deployment models:
*   **Multi-Channel Support:** Issue #1273 introduced a third-party multi-session web channel implementation, sparking discussion about use cases beyond standard messengers.
*   **Session Management:** Issue #1211 (👍 2) requesting a `/new` command to reset session context aligns with PR #1311 (Feature create new session), indicating strong user desire for better context isolation.
*   **Security & Credentials:** Discussion around secret management is active. Issue #1316 proposes macOS Keychain integration, while PR #1237 is re-architecting the credential handling via OneCLI.
*   **Group Personalization:** PR #1292 (Group Persona from WhatsApp descriptions) and Issue #1211 highlight a trend toward context-aware, personalized agent interactions.

## 5. Bugs & Stability
*   **Critical: CLI Exit Code Bug** - Issue #1312 reports that the `claw` CLI exits with a non-zero status on the "happy path" when killing a process via sentinel. This affects scripting and automation reliability.
    *   Link: [Issue #1312](https://github.com/qwibitai/nanoclaw/issues/1312)
*   **High: Relay Cross-Talk** - Issue #1284 (Closed) identified a bug where relays shared an operator account, causing cross-room command processing. A fix/discussion occurred, leading to its closure.
    *   Link: [Issue #1284](https://github.com/qwibitai/nanoclaw/issues/1284)
*   **Medium: Duty Cycle Stuck** - Issue #1315 reports that the `dutyCycleLoop` fails to complete retrospective/dream phases. The issue suggests temporarily disabling this feature.
    *   Link: [Issue #1315](https://github.com/qwibitai/nanoclaw/issues/1315)
*   **Process/Maintenance:** Issues #1305-#1307 (and many closed duplicates) indicate recurring merge-forward failures for `skill/apple-container` and `skill/compact` branches. This is an automated workflow issue requiring manual intervention, signaling potential instability in the branching strategy.
    *   Link: [Issue #1307](https://github.com/qwibitai/nanoclaw/issues/1307)

## 6. Feature Requests & Roadmap Signals
User requests are heavily focused on autonomy, integration, and UX:
*   **Skill Marketplace (PR #1309):** A proposal for a CLI to discover and manage skills. This is a strong signal for a plugin ecosystem.
*   **Trust & Autonomy (PR #1308):** Implementing draft routing and approval trackers suggests a move toward semi-autonomous agent operations with human-in-the-loop guardrails.
*   **Session Reset (Issue #1211):** High probability of appearing in the next version given active PR #1311.
*   **Native Voice/Multimedia (PR #1313):** Request for WhatsApp/Discord/Voice skills indicates a push toward multi-modal agent capabilities.
*   **macOS Keychain (Issue #1316):** Aligns with the security hardening trend seen in PR #1237.

## 7. User Feedback Summary
*   **Pain Points:** Users struggle with accumulating context history in long-running sessions (Issue #1211) and lack feedback when adding bots to new groups (Issue #1275). The reliance on `.env` files for secrets is seen as a security risk (Issue #1316).
*   **Use Cases:** Users are building educational web interfaces (Issue #1273) and managing multiple isolated relays (Issue #1284), showing NanoClaw's utility in organizational and educational settings.
*   **Satisfaction:** High engagement with "Skills" indicates users appreciate the modularity. The "good first issue" tag on #1211 suggests a welcoming community culture.

## 8. Backlog Watch
*   **API Usage Tracking (PR #1111):** Open since 2026-03-15, this PR adds significant infrastructure for tracking costs and tokens. It requires review to unblock operational visibility.
    *   Link: [PR #1111](https://github.com/qwibitai/nanoclaw/pull/1111)
*   **Sync Forks Skill (PR #1085):** Open since 2026-03-15, this is critical for community members maintaining custom forks. It needs a final review to merge.
    *   Link: [PR #1085](https://github.com/qwibitai/nanoclaw/pull/1085)
*   **Merge-Forward Maintenance:** The recurring automated issues (e.g., #1148, #1074) indicate a systemic conflict in the `skill/apple-container` and `skill/compact` branches that needs a strategic resolution rather than per-commit manual fixes.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-22

## Today's Overview

IronClaw demonstrates **high development velocity** with 50 pull requests updated (43 open, 7 merged) and 22 issues updated in the last 24 hours. The project is in an active growth phase, focusing on a major **UX overhaul**, **multi-tenancy architecture**, and **channel expansion** (Slack Socket Mode, Feishu WebSocket). However, the high PR volume with 86% still open suggests potential review bottlenecks. Multiple provider integration bugs (Gemini, Qwen) and a security alert indicate areas requiring immediate attention alongside feature development.

## Releases

No new releases were published today. The project appears to be accumulating changes on the `staging` branch for a future consolidated release, with automated promotion PRs (e.g., #1548) actively running.

## Project Progress

### Merged/Closed PRs (7)
The team merged several focused fixes and closed key feature PRs:
- **#1454** — Fixed critical OAuth flow state parsing bug (`decode_hosted_oauth_state`) preventing authentication attacks via malformed states.
- **#1397** — Fixed parameter coercion for complex JSON schemas (`oneOf`/`anyOf`/`allOf`), improving WASM tool compatibility.
- **#333** — Landed **Slack Socket Mode** support, enabling NAT/firewall-friendly deployments without public URLs.

### Features Advancing (Open PRs)
- **#1277 (Core)** — "Apple-level" UX overhaul with design system, glass morphism, and mobile fixes. High activity suggests near-term merge.
- **#1118 & #1117 (Core)** — Multi-tenant auth and workspace isolation. Large architectural changes addressing security posture.
- **#625 (Core)** — Programmatic Tool Calling (PTC) enabling tools to call other tools without LLM round-trips.
- **#1019 (New Contributor)** — "Cognitive Guardian" for proactive memory management and context discipline.

## Community Hot Topics

| Topic | Item | Activity | Analysis |
|-------|------|----------|----------|
| **Multi-Agent Architecture** | [Issue #84](https://github.com/nearai/ironclaw/issues/84) | 2 comments, P2 priority | Users need multi-agent routing, workspace isolation per-agent, and shared global sessions. Core to agentic workflows. |
| **Flaky CI Tests** | [Issue #1280](https://github.com/nearai/ironclaw/issues/1280) | 2 comments, P1 severity | OAuth wildcard callback tests race on environment variables in CI, blocking staging promotion. |
| **Slack Connectivity** | [PR #1549](https://github.com/nearai/ironclaw/pull/1549), [PR #1547](https://github.com/nearai/ironclaw/pull/1547) | High interest, multiple implementations | Strong demand for NAT-friendly Slack integration without public tunnels. Two competing PRs exist. |
| **Persistent Sandbox** | [Issue #1458](https://github.com/nearai/ironclaw/issues/1458) | 1 comment | Users want stateful containers for SSH, VPN, kubectl, terraform—current ephemeral model limits DevOps use cases. |

## Bugs & Stability

| Severity | Issue | Status | Notes |
|----------|-------|--------|-------|
| 🔴 **Critical** | [Issue #1441](https://github.com/nearai/ironclaw/issues/1441) | **Fixed** via PR #1454 | OAuth flow registration/lookup key mismatch. Fix merged. |
| 🔴 **High** | [Issue #1537](https://github.com/nearai/ironclaw/issues/1537) | Open | WASM credential injection silently fails on NEAR AI hosted TEE—secrets stored but not injected at runtime. |
| 🟠 **Medium** | [Issue #1538](https://github.com/nearai/ironclaw/issues/1538) | Open | Microsoft Defender flagging IronClaw binaries as `Trojan:Win32/Wacatac.C!ml`—likely false positive but blocks adoption. |
| 🟠 **Medium** | [Issue #1521](https://github.com/nearai/ironclaw/issues/1521), [Issue #1510](https://github.com/nearai/ironclaw/issues/1510) | Open | **Gemini** models fail with "missing thought_signature in functionCall parts" when using tools. |
| 🟠 **Medium** | [Issue #1520](https://github.com/nearai/ironclaw/issues/1520) | Open | **Qwen** provider returns 405 error—"Coding Plan only available for Coding Agents." |
| 🟡 **Low** | [Issue #1280](https://github.com/nearai/ironclaw/issues/1280) | Open | Flaky OAuth tests in CI causing staging promotion failures. |

## Feature Requests & Roadmap Signals

**High-Likelihood Near-Term Features:**
1. **Slack Socket Mode** ([PR #1549](https://github.com/nearai/ironclaw/pull/1549)) — Multiple implementations exist; strong community demand.
2. **HTTP Domain Whitelist** ([Issue #1518](https://github.com/nearai/ironclaw/issues/1518)) — Eliminates repetitive approval prompts for trusted domains.
3. **AWS Bedrock Embeddings** ([Issue #1501](https://github.com/nearai/ironclaw/issues/1501)) — Fills gap in existing Bedrock LLM support.

**Strategic Roadmap Signals:**
- **ACP Job Mode** ([Issue #1506](https://github.com/nearai/ironclaw/issues/1506)) — Delegating to any Agent Client Protocol-compatible coding agent.
- **Workspace-as-Skill-Storage** ([Issue #1504](https://github.com/nearai/ironclaw/issues/1504)) — XL-sized refactor unifying skill and memory systems.
- **Persistent Sandbox** ([Issue #1458](https://github.com/nearai/ironclaw/issues/1458)) — DevOps/infrastructure automation use case expansion.

## User Feedback Summary

**Pain Points:**
- **Provider compatibility issues**: Multiple users reporting Gemini and Qwen failures with tool use ([#1510](https://github.com/nearai/ironclaw/issues/1510), [#1520](https://github.com/nearai/ironclaw/issues/1520), [#1521](https://github.com/nearai/ironclaw/issues/1521)).
- **Approval fatigue**: HTTP requests require manual approval even to whitelisted domains ([#1518](https://github.com/nearai/ironclaw/issues/1518)).
- **Channel connectivity**: Feishu WebSocket connections not detected ([#1516](https://github.com/nearai/ironclaw/issues/1516)).
- **Google integration**: Auth flows buggy when connecting multiple Google tools ([#1500](https://github.com/nearai/ironclaw/issues/1500), [#1502](https://github.com/nearai/ironclaw/issues/1502), [#1503](https://github.com/nearai/ironclaw/issues/1503)).

**Positive Signals:**
- Strong contributor growth with multiple new contributors submitting substantial PRs (#1019, #1549).
- Active maintainer engagement (@ilblackdragon, @zmanian) across issues and PRs.

## Backlog Watch

| Item | Age | Concern | Recommendation |
|------|-----|---------|----------------|
| [Issue #84](https://github.com/nearai/ironclaw/issues/84) — Multi-agent routing | 36 days | Core agentic feature, P2 priority, only 2 comments | Needs architectural RFC or milestone assignment |
| [PR #496](https://github.com/nearai/ironclaw/pull/496) — Web configure modal | 19 days | New contributor, zero comments | Risk of contributor abandonment; needs review |
| [PR #625](https://github.com/nearai/ironclaw/pull/625) — Programmatic Tool Calling | 16 days | Core infrastructure, high complexity | Blocking other tool-composition work |
| [Issue #1504](https://github.com/nearai/ironclaw/issues/1504) — Workspace skill storage | 2 days | XL refactor with no comments yet | Needs design discussion before implementation |

---

*Digest generated from 22 issues and 50 PRs updated on 2026-03-22.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-03-22

## 1. Today's Overview
LobsterAI is experiencing a period of **high velocity development**, characterized by the release of version `2026.3.21` and a significant volume of merged pull requests (16 merged vs. 13 open). The team is aggressively addressing technical debt, specifically focusing on performance bottlenecks (SQLite blocking issues) and stability (memory leaks). However, the rapid iteration has introduced regressions, with users reporting critical connectivity errors (404/400) immediately following the upgrade. The project is currently in a "stabilization" phase following a feature-heavy sprint that introduced WebSocket support for IM platforms.

## 2. Releases

### **Version 2026.3.21**
*   **Release Highlights:**
    *   **Logging Overhaul:** Implemented daily rotation, 80MB limit, and 7-day retention for logs ([PR #569](https://github.com/netease-youdao/LobsterAI/pull/569)).
    *   **IM Connectivity:** Added WebSocket long-connection mode for "Popo" IM integration ([PR #556](https://github.com/netease-youdao/LobsterAI/pull/556)).
    *   **New Integration:** One-click Feishu integration added.
*   **Migration Notes:**
    *   **Popo Users:** A migration logic was added in [PR #615](https://github.com/netease-youdao/LobsterAI/pull/615) to preserve existing webhook configurations, as the new version defaults to WebSocket mode.
    *   **Privacy:** First-time startup now requires acceptance of a privacy agreement ([PR #608](https://github.com/netease-youdao/LobsterAI/pull/608)).

## 3. Project Progress

**Core Stability & Performance Fixes:**
*   **Async SQLite I/O:** A major refactor converted `SqliteStore` to asynchronous operations with debounced saves, resolving main process blocking/freezes ([PR #573](https://github.com/netease-youdao/LobsterAI/pull/573)).
*   **Memory Leak Plugged:** Fixed a critical leak in `stoppedSessions` where session IDs were not purged after deletion ([Issue #571](https://github.com/netease-youdao/LobsterAI/pull/571) / [PR #617](https://github.com/netease-youdao/LobsterAI/pull/617)).
*   **Error Handling:** Added user-friendly error messages for "Unknown Errors" in OpenClaw and improved error classification ([PR #612](https://github.com/netease-youdao/LobsterAI/pull/612)).

**User Experience (UX):**
*   **Input Refactoring:** Significant work began on refactoring the Cowork input box into a structured composer to support `@mentions` and `/commands` more naturally ([PR #610](https://github.com/netease-youdao/LobsterAI/pull/610)).
*   **UI Polish:** Added "Prevent Sleep" functionality and fixed message fragmentation issues in OpenClaw where assistant messages were split incorrectly after tool use ([PR #607](https://github.com/netease-youdao/LobsterAI/pull/607), [PR #633](https://github.com/netease-youdao/LobsterAI/pull/633)).
*   **Cron Preview:** Added a preview card showing the next 5 execution times for cron expressions in scheduled tasks ([PR #605](https://github.com/netease-youdao/LobsterAI/pull/605)).

**Engineering:**
*   **Security:** Implemented skill installation safety scans and added top-level error handling for async IPC handlers to prevent renderer crashes ([PR #593](https://github.com/netease-youdao/LobsterAI/pull/593), [Issue #623](https://github.com/netease-youdao/LobsterAI/pull/623)).

## 4. Community Hot Topics

*   **[Issue #632 - Integration Request](https://github.com/netease-youdao/LobsterAI/issues/632):** A user requested integration with "MEEET World," offering a JS SDK with 707 agents. This indicates strong demand for expanding LobsterAI's ecosystem via standard SDKs.
*   **[Issue #498 - Context/Memory Loop](https://github.com/netease-youdao/LobsterAI/issues/498):** An open issue discussing the agent repeatedly returning previous answers during long conversations. Users suspect issues with context compression or memory retrieval logic. This aligns with recent refactors in memory handling.
*   **[PR #610 - Input Composer](https://github.com/netease-youdao/LobsterAI/pull/610):** A substantial refactor of the input system is drawing attention. While merged PRs today focused on stability, this open PR suggests a major UX shift is imminent.

## 5. Bugs & Stability

*   **Critical / Upgrade Blocker:**
    *   **[Issue #611](https://github.com/netease-youdao/LobsterAI/issues/611):** After upgrading to `2026.3.21`, all conversations return `404 Not Found` (nginx). *Status: Open, no fix PR yet.*
    *   **[Issue #634](https://github.com/netease-youdao/LobsterAI/issues/634):** Google Gemini 3 integration broken (400 Error) after latest update. *Status: Open.*

*   **High Severity (Security & Logic):**
    *   **[Issue #630](https://github.com/netease-youdao/LobsterAI/issues/630):** ReDoS vulnerability in memory text regex (Fixed/Mitigation suggested).
    *   **[Issue #622](https://github.com/netease-youdao/LobsterAI/issues/622):** Data migration logic marks "Complete" even after a Rollback, potentially deleting user memories permanently.

*   **Medium Severity:**
    *   **[Issue #624](https://github.com/netease-youdao/LobsterAI/issues/624):** Null pointer crash in `BrowserWindow.fromWebContents`.
    *   **[Issue #625](https://github.com/netease-youdao/LobsterAI/issues/625):** Disk leak – temporary directories not cleaned up if Skill installation fails.

## 6. Feature Requests & Roadmap Signals

*   **Structured Input System:** [PR #610](https://github.com/netease-youdao/LobsterAI/pull/610) indicates a move toward a "Cursor-like" input experience where resources, skills, and text are unified in a structured composer rather than a plain textarea.
*   **Advanced Scheduling:** The addition of Cron previews ([PR #605](https://github.com/netease-youdao/LobsterAI/pull/605)) and strategy pattern refactoring for scheduled tasks ([PR #609](https://github.com/netease-youdao/LobsterAI/pull/609)) suggests robust task scheduling is a primary focus for the next release.
*   **External Agent Integration:** The community request for MEEET World ([Issue #632](https://github.com/netease-youdao/LobsterAI/issues/632)) highlights a need for external agent connectivity, which may influence future API/SDK roadmaps.

## 7. User Feedback Summary

*   **Pain Points:**
    *   **Upgrade Reliability:** Users are encountering breaking changes (404 errors) immediately after upgrading, causing fear of updating.
    *   **Context Retention:** Long-session users feel the AI gets "stuck" in a loop, repeating old answers ([Issue #498](https://github.com/netease-youdao/LobsterAI/issues/498)).
    *   **Desktop App Stability:** Several reports (though fixed in PRs today) cited freezing and white screens due to IPC errors.
*   **Satisfaction:** The rapid closure of memory leak and performance bugs suggests a highly responsive development team, though the velocity may be sacrificing QA stability.

## 8. Backlog Watch

*   **[Issue #628](https://github.com/netease-youdao/LobsterAI/issues/628):** `buildUserMemoriesXml` loads *all* memories without a byte limit, risking token explosion. This remains an open vulnerability that could degrade performance for power users with long histories.
*   **[Issue #627](https://github.com/netease-youdao/LobsterAI/issues/627):** `drainTurnMemoryQueue` lacks retry backoff, risking CPU spin if the database fails. No fix PR is linked yet.
*   **[Issue #611](https://github.com/netease-youdao/LobsterAI/issues/611):** The 404 error report is currently the most urgent unaddressed issue, as it renders the app unusable for some upgraders.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest (2026-03-22)

## 1. Today's Overview
The Moltis project is currently experiencing a period of low release activity but maintains a steady trickle of code contributions focused on platform compatibility and build systems. No new releases, issues, or merge completions were recorded today, indicating a potential consolidation or testing phase. Activity is limited to two open Pull Requests, suggesting that while the community is contributing fixes, the repository maintainers have not yet merged new code this week. The project appears stable but quiet, with current efforts directed at fixing specific OS-level interoperability issues rather than expanding core features.

## 2. Releases
No new releases were recorded for this period.

## 3. Project Progress
No Pull Requests were merged today. However, two significant open PRs were updated, highlighting ongoing work in build infrastructure and cross-platform stability:

*   **Build System & Compliance:** PR [#459 Feat/nix build fix](https://github.com/moltis-org/moltis/pull/459) remains open. This contribution introduces Nix build support and addresses "witness code," signaling an effort to improve reproducibility and potentially attract contributors using Nix environments.
*   **Cross-Platform Stability:** PR [#436 fix(sessions): replace append(true) with write(true)+seek](https://github.com/moltis-org/moltis/pull/436) is active. This fix addresses a deep-rooted file locking discrepancy on Windows, aiming to prevent OS Error 5 during session management.

## 4. Community Hot Topics
There are no active discussions in the Issues section today. Community activity is currently isolated within Pull Requests, specifically regarding Windows compatibility and build processes.

*   **Windows File Locking (PR [#436](https://github.com/moltis-org/moltis/pull/436)):** This PR addresses a technical divergence where Rust's standard library on Windows uses `FILE_APPEND_DATA`, which strips `FILE_WRITE_DATA` rights. This suggests users or developers are running into permission errors when running agents in restricted Windows environments.

## 5. Bugs & Stability
*   **Critical (Windows):** The project suffers from a Windows-specific crash/error related to `LockFileEx` (OS Error 5).
    *   **Status:** A fix is proposed in PR [#436](https://github.com/moltis-org/moltis/pull/436) but has not yet been merged.
    *   **Impact:** Affects session persistence/logging on Windows machines.

## 6. Feature Requests & Roadmap Signals
*   **Nix Support:** The update to PR [#459](https://github.com/moltis-org/moltis/pull/459) suggests a roadmap item for supporting declarative builds and NixOS users.
*   **Codebase "witnessing":** Mention of "working on witness code" in PR [#459](https://github.com/moltis-org/moltis/pull/459) may point to internal auditing, attestation verification, or execution tracing features, though details are sparse.

## 7. User Feedback Summary
There is no direct user feedback from Issues today. Indirect feedback via PRs indicates that developers are actively trying to run Moltis on Windows and NixOS, encountering friction with default configurations. The Windows file lock issue suggests that the agent may be trying to access log/session files already in use by other processes or restricted by system policies.

## 8. Backlog Watch
*   **PR [#436 (Windows Fix):** Created on March 14 and updated on March 21, this PR has been open for a week without merging. Given the severity of OS-level I/O errors, this requires a maintainer review to unblock Windows users.
*   **PR [#459 (Nix Fix):** Needs further context on "witness code" to determine scope and merge readiness.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-03-22

## 1. Today's Overview
The CoPaw project is currently experiencing a **high volume of post-release activity** following the recent rollout of version **v0.1.0**. The community is actively reporting regressions and migration issues, with **41 open issues** updated in the last 24 hours compared to only 9 closed, indicating that maintainers are struggling to keep up with the influx of feedback. The majority of traffic focuses on stability (task cancellation), data migration from v0.0.7, and UI inconsistencies. While no new releases were published today, the open PR pool (11 active) suggests efforts are focused on patching critical async logic and expanding model/provider support.

## 2. Releases
No new releases were recorded today. The project remains on version **v0.1.0 / v0.1.0.post1**. Given the bug reports regarding `JSONDecodeError` and version mismatches, a patch release appears necessary but is not yet available.

## 3. Project Progress
Developers merged/closed 4 PRs, focusing on stability and documentation:
*   **Custom Channel Fix:** [PR #1991](https://github.com/agentscope-ai/CoPaw/pull/1991) resolved a startup crash for custom channels caused by `getattr` errors on dict types (fixing [Issue #1987](https://github.com/agentscope-ai/CoPaw/issues/1987)).
*   **Documentation:** Windows port conflict troubleshooting was added via [PR #1995](https://github.com/agentscope-ai/CoPaw/pull/1995).
*   **Active Development:** Key open PRs include [PR #1984](https://github.com/agentscope-ai/CoPaw/pull/1984) (fixing Tool Guard parallel execution deadlocks) and [PR #2016](https://github.com/agentscope-ai/CoPaw/pull/2016) (replacing `threading.Lock` with `asyncio.Lock` to fix event loop freezing).

## 4. Community Hot Topics
The most discussed topics highlight friction in the v0.1.0 upgrade process:
*   **Task Cancellation Crisis ([#1976](https://github.com/agentscope-ai/CoPaw/issues/1976), 14 comments):** Users are frequently encountering `RuntimeError: Task has been cancelled!`. Despite a mention of a fix in #1956, users report the issue persists, severely impacting reliability.
*   **Data Loss on Upgrade ([#2023](https://github.com/agentscope-ai/CoPaw/issues/2023), 12 comments):** Docker users upgrading from v0.0.7 to v0.1.0 report losing all **memories** and **installed skills**. This migration failure is a major pain point.
*   **Feishu Latency ([#1345](https://github.com/agentscope-ai/CoPaw/issues/1345), 10 comments):** A significant bug in the Feishu channel causes the bot to answer the *previous* question rather than the current one (queue/offset issue).
*   **Security Logic Flaw ([#2007](https://github.com/agentscope-ai/CoPaw/issues/2007), 5 comments):** Users discovered that shell command approval requests can be approved by the *requester* via the bot's response, bypassing admin oversight.

## 5. Bugs & Stability
Stability is currently **Moderate to Low**, with several high-severity bugs reported:
1.  **Session Corruption ([#1950](https://github.com/agentscope-ai/CoPaw/issues/1950)):** `JSONDecodeError: Expecting value: line 1 column 1` indicates `chats.json` is being corrupted/wiped during runtime. **No fix PR identified.**
2.  **UI/Console JSON Bleeding ([#1960](https://github.com/agentscope-ai/CoPaw/issues/1960)):** The Web Console renders raw JSON structures (e.g., `[{'type': 'text'...}]`) instead of parsed text, degrading UX.
3.  **Context Compression Interruption ([#1974](https://github.com/agentscope-ai/CoPaw/issues/1974)):** Long-running tasks are forcibly interrupted and dropped when the automatic context compression job triggers.
4.  **Windows File Encoding ([#1935](https://github.com/agentscope-ai/CoPaw/issues/1935)):** `write_file` tool creates garbled Chinese text in CSV files on Windows.

## 6. Feature Requests & Roadmap Signals
Users are pushing for better multi-agent and UI capabilities:
*   **Multi-Agent Orchestration:** [PR #1952](https://github.com/agentscope-ai/CoPaw/pull/1952) proposes adding user-level workflows, and [Issue #2032](https://github.com/agentscope-ai/CoPaw/issues/2032) requests a global/shared skills directory for agents.
*   **Mobile Support:** [Issue #2026](https://github.com/agentscope-ai/CoPaw/issues/2026) requests an optimized layout for the Console UI on mobile browsers.
*   **Model Provider Expansion:** [PR #1192](https://github.com/agentscope-ai/CoPaw/pull/1192) (OpenRouter) and [PR #2002](https://github.com/agentscope-ai/CoPaw/pull/2002) (Configurable Retry Logic) suggest a roadmap focused on LLM robustness.

## 7. User Feedback Summary
*   **Migration Frustration:** Users are unhappy with the upgrade path from v0.0.7 to v0.1.0, specifically citing "missing configurations" and "lost history" ([#1998](https://github.com/agentscope-ai/CoPaw/issues/1998)).
*   **Installation Size:** The desktop installer (500MB) and slow decompression times were criticized ([#2031](https://github.com/agentscope-ai/CoPaw/issues/2031)).
*   **Approval UX:** The `/approve` flow is confusing; users expect the bot to answer side-questions while keeping the approval pending, rather than terminating the context ([#2009](https://github.com/agentscope-ai/CoPaw/issues/2009)).

## 8. Backlog Watch
*   **Feishu Message Deduplication ([#1403](https://github.com/agentscope-ai/CoPaw/issues/1403)):** Open since March 13, this bug causes single messages to be processed multiple times. It requires urgent attention as it affects reliability.
*   **Powershell Error Handling ([#1131](https://github.com/agentscope-ai/CoPaw/issues/1131)):** Open since March 10, the `execute_shell_command` tool fails to capture error output on Windows.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-03-22

## 1. Today's Overview
The ZeptoClaw project is currently demonstrating active architectural planning and tooling refinement, evidenced by two open feature discussions despite the lack of recent code merges. Activity levels are moderate, with maintainers and contributors focusing on high-level design decisions regarding sandboxing and testing infrastructure rather than immediate feature delivery. There were no new releases, open pull requests, or closed issues in the last 24 hours, suggesting a period of strategic consolidation or development preparation. The project appears to be in a healthy state, prioritizing long-term architectural integrity over rapid, potentially unstable iteration.

## 2. Releases
No new releases were recorded for this date.

## 3. Project Progress
No pull requests were merged or closed in the last 24 hours. The development focus appears to be shifting toward the definition of robust testing frameworks (Issue #391) and secure execution environments (Issue #387).

## 4. Community Hot Topics
The most significant discussions are centered on architectural extensibility and code quality:
*   **Secure Isolation Architecture:** Issue [#387](https://github.com/qhkm/zeptoclaw/issues/387) (6 comments) continues to drive conversation. The proposal suggests treating various Coding Agent Frameworks as pluggable apps within orchestrated Firecracker VMs. This addresses concerns regarding "feature creep" and security surface expansion by isolating agents in Containerfile-defined nodes.
*   **Tooling Conformance:** Issue [#391](https://github.com/qhkm/zeptoclaw/issues/391) proposes adding JSON fixture runners for regression testing tools without requiring Rust code changes. This signals a push toward more accessible and robust quality assurance (QA) processes.

## 5. Bugs & Stability
No specific bugs, crashes, or regressions were reported in the last 24 hours. The current discussion in Issue #391 regarding "fuzzy matching" and "conformance fixtures" suggests a proactive approach to preventing future regressions rather than reacting to immediate instability.

## 6. Feature Requests & Roadmap Signals
Two distinct roadmap signals have emerged:
*   **Infrastructure Isolation:** The proposal in [#387](https://github.com/qhkm/zeptoclaw/issues/387) to map core templates to Firecracker VMs indicates a potential major pivot toward strict isolation and containerization for executed agents.
*   **Testing Overhaul:** The request in [#391](https://github.com/qhkm/zeptoclaw/issues/391) for "Conformance fixture testing" and "Output truncation" suggests the next version will likely focus heavily on developer experience (DX) and tool reliability.

## 7. User Feedback Summary
User and maintainer feedback highlights a strong preference for **security and modularity** over convenience. The sentiment in Issue #387 suggests that the community views existing coding agent frameworks as potential security liabilities and favors a "node"-based approach where frameworks are treated as isolated applications. Additionally, there is a clear desire for low-code testing solutions, as evidenced by the request for JSON-based fixture testing in Issue #391.

## 8. Backlog Watch
*   **Issue [#387](https://github.com/qhkm/zeptoclaw/issues/387):** This is a critical architectural issue with significant implications. While active, it has been open for 5 days without a definitive decision marked. It requires continued monitoring to see if the "controversial" nature of the proposal leads to adoption or a strategic pivot.
*   **Issue [#391](https://github.com/qhkm/zeptoclaw/issues/391):** Open since 2026-03-20 with 0 comments, this feature request needs validation from other maintainers to move forward.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest

**Report Date:** March 22, 2026
**Project:** EasyClaw (gaoyangz77/easyclaw)
**Role:** AI/Open-Source Analyst

---

### 1. Today's Overview
EasyClaw demonstrates a highly active release cadence with **three new versions** (v1.7.3 to v1.7.5) published within the last 24 hours, suggesting rapid iteration to address stability or deployment issues. While the code contribution velocity via Pull Requests appears dormant (0 PRs), the issue backlog is being actively managed, evidenced by a 100% closure rate on recent support tickets. The rapid version bumping, combined with release notes focused on installation troubleshooting, indicates the project is likely in a stabilization phase following significant feature updates.

### 2. Releases
*   **v1.7.5:** RivonClaw v1.7.5
*   **v1.7.4:** RivonClaw v1.7.4
*   **v1.7.3:** RivonClaw v1.7.3

**Analysis:** The proximity of these releases suggests incremental patches. The consistent inclusion of macOS Gatekeeper workarounds in the release notes highlights that **code signing** remains a significant friction point for macOS users.
*   **Migration Note:** Users on macOS may need to run terminal commands to bypass Gatekeeper if they encounter "App is damaged" errors.

### 3. Project Progress
No source code changes were merged via Pull Requests today. However, project advancement is evident through release activity and issue resolution:
*   **Stabilization:** The jump from v1.7.3 to v1.7.5 implies urgent fixes were deployed, likely addressing the "400 tools error" reported in the issues.
*   **Support:** Two key user confusion points were resolved (Multi-browser functionality and API error handling).

### 4. Community Hot Topics
The community is currently focused on understanding new features and troubleshooting version-specific errors.

*   **Topic 1: Multi-Browser Functionality ([Issue #22](https://github.com/gaoyangz77/rivonclaw/issues/22))**
    *   **Status:** Closed
    *   **Context:** Users are seeking clarification on whether the "Multi-Browser" feature supports multi-user profiles or cross-platform synchronization.
    *   **Underlying Need:** Users are looking for workflow isolation (e.g., separating work/personal contexts) within the AI assistant.

### 5. Bugs & Stability
A critical error regarding tool execution was reported and subsequently addressed (implied by the version bump).

*   **🔴 High Severity: API Tool Execution Failure ([Issue #25](https://github.com/gaoyangz77/rivonclaw/issues/25))**
    *   **Description:** On Windows 11 (v1.7.2), users encountered a `⚠ 400 [] is too short - 'tools'` error, completely halting conversation capabilities.
    *   **Resolution:** The issue was Closed. Given the immediate release of v1.7.4 and v1.7.5, it is highly probable this specific regression was patched in the latest builds.

### 6. Feature Requests & Roadmap Signals
Based on closed issues, the immediate roadmap focus is:
1.  **Clarification of "Multi-Browser" Mode:** Future documentation or UI updates should explicitly define if this feature acts as a multi-user container or a sync mechanism.
2.  **Robust Tool Calling:** The 400 error suggests the agent's tool-calling protocol lacks fallback for empty contexts. Improved error handling for API requests is a current priority.

### 7. User Feedback Summary
*   **Pain Points:**
    *   **Security Warnings (macOS):** High friction for non-technical users due to lack of code signing.
    *   **Regression Fragility:** Updates (e.g., 1.7.2) breaking core chat functionality caused significant user frustration.
*   **Satisfaction:** Community engagement appears constructive. Users are providing specific version numbers and screenshots, indicating a vested interest in the project's stability.

### 8. Backlog Watch
*   **Maintainer Attention Required:** The repository currently has **0 open PRs**. While issues are being closed, the lack of visible community code contributions (PRs) suggests development is centralized. To ensure long-term health, the maintainers might need to encourage external contributions or clarify the contribution guidelines.
*   **macOS Code Signing:** The persistent need to document manual Terminal fixes for macOS in every release is a technical debt that should be addressed to improve the "out-of-the-box" experience.

</details>