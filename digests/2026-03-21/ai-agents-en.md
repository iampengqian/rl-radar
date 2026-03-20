# OpenClaw Ecosystem Digest 2026-03-21

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-03-20 22:02 UTC

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

# OpenClaw Project Digest: 2026-03-21

## 1. Today's Overview
OpenClaw is experiencing **extremely high activity** with 500 issues and 500 pull requests updated in the last 24 hours, suggesting a rapidly evolving codebase or recent destabilization. The project is in an active development phase with a near-even split between open (380) and closed (120) issues, indicating maintainers are struggling to keep pace with the influx of bug reports and feature requests. The majority of activity focuses on **channel integrations** (Discord, Slack, WhatsApp, Signal, Telegram) and **AI model provider support** (Anthropic, OpenAI, Vertex AI). No new stable releases were published today, though multiple significant PRs are pending merge.

---

## 2. Releases
**No new releases** were published today. The project appears to be in a stabilization phase following recent releases (v2026.3.12 and v2026.3.13 are frequently mentioned in bug reports), with developers focused on addressing regression issues before the next tagged version.

---

## 3. Project Progress

### Merged/Closed PRs
The high volume of closed PRs (240) today includes numerous small fixes and documentation updates:

| PR | Focus | Status |
|----|-------|--------|
| [#51298](https://github.com/openclaw/openclaw/pull/51298) | Fix agent infinite replay loop | Merged |
| [#51293](https://github.com/openclaw/openclaw/pull/51293) | Session memory reset events | Merged |
| [#51294](https://github.com/openclaw/openclaw/pull/51294) | Telegram rate limit crash prevention | Merged |
| [#51295](https://github.com/openclaw/openclaw/pull/51295) | Skill documentation cleanup | Merged |
| [#51296](https://github.com/openclaw/openclaw/pull/51296) | BlueBubbles webhook registration | Merged |
| [#51285](https://github.com/openclaw/openclaw/pull/51285) | IRC docs syntax fix | Merged |
| [#51207](https://github.com/openclaw/openclaw/pull/51207) | Exec host environment hardening | Merged |

### Key Pending PRs
- **[#43356](https://github.com/openclaw/openclaw/pull/43356)** - Add `anthropic-vertex` provider for Claude via GCP Vertex AI (L-size, major feature)
- **[#51191](https://github.com/openclaw/openclaw/pull/51191)** - Context engine transcript maintenance API (L-size, infrastructure)
- **[#48590](https://github.com/openclaw/openclaw/pull/48590)** - Security fix: Phase 1 of privilege escalation prevention (L-size, security)
- **[#41496](https://github.com/openclaw/openclaw/pull/41496)** - Unified provider system with capabilities (XL-size, architecture)
- **[#51302](https://github.com/openclaw/openclaw/pull/51302)** - WhatsApp quoted replies support (L-size, feature)

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

| Issue | Topic | Comments | Analysis |
|-------|-------|----------|----------|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | Internationalization (i18n) | 106 | **Top community request.** Maintainers explicitly stated they lack bandwidth to support multiple languages. Community members have submitted PRs. |
| [#6156](https://github.com/openclaw/openclaw/issues/6156) | macOS Gateway setup failure | 15 | Setup Wizard stuck on "Retry" for macOS users (Homebrew install). Blocking new user adoption. |
| [#16629](https://github.com/openclaw/openclaw/issues/16629) | Brave Search API no longer free | 15 | **Breaking external change.** Community seeking alternatives (DuckDuckGo, Tavily). Related to [#12034](https://github.com/openclaw/openclaw/issues/12034). |
| [#49233](https://github.com/openclaw/openclaw/issues/49233) | External Memory Provider API | 10 | Proposal for zero-downtime context compaction. High architectural impact. |
| [#5290](https://github.com/openclaw/openclaw/issues/5290) | AWS Bedrock auto-discovery failure | 13 | Inference Profile IDs not supported, blocking enterprise AWS users. |

### Feature Requests with Strong Community Support
- **[#11399](https://github.com/openclaw/openclaw/issues/11399)** - Extensible web_search providers via plugins (+13 👍)
- **[#12034](https://github.com/openclaw/openclaw/issues/12034)** - Add Tavily search provider (+12 👍)
- **[#26322](https://github.com/openclaw/openclaw/issues/26322)** - OAuth token refresh race condition (+7 👍)

---

## 5. Bugs & Stability

### Critical Severity (Crashes/Blocks)

| Issue | Description | Status |
|-------|-------------|--------|
| [#6156](https://github.com/openclaw/openclaw/issues/6156) | macOS Gateway never becomes ready - Setup Wizard stuck | Open, no fix PR |
| [#46049](https://github.com/openclaw/openclaw/issues/46049) | LLM request timeout ignores configured settings - process hangs | Open |
| [#44303](https://github.com/openclaw/openclaw/issues/44303) | Hard crash when switching to smaller-context model mid-session | Open |
| [#48797](https://github.com/openclaw/openclaw/issues/48797) | Docker setup fails with missing `nostr-tools` module | Closed (fix merged) |

### High Severity (Regressions)

| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#45311](https://github.com/openclaw/openclaw/issues/45311) | Slack socket mode stopped receiving events (v2026.3.12) | Pending |
| [#44906](https://github.com/openclaw/openclaw/issues/44906) | Context limit warning icon fills entire viewport (UI unusable) | Pending |
| [#47548](https://github.com/openclaw/openclaw/issues/47548) | `textContent.unshift is not a function` after v2026.3.13 upgrade | Pending |
| [#47265](https://github.com/openclaw/openclaw/issues/47265) | WebSocket CLI connection fails after upgrade to v2026.3.13 | [#51298](https://github.com/openclaw/openclaw/pull/51298) (merged) |

### Authentication/Connectivity Issues
- **[#49191](https://github.com/openclaw/openclaw/issues/49191)** - Google Vertex ADC auth broken (401 error)
- **[#5290](https://github.com/openclaw/openclaw/issues/5290)** - AWS Bedrock Inference Profile IDs not supported
- **[#49950](https://github.com/openclaw/openclaw/issues/49950)** - Gateway resets `allowedOrigins` on config reload

---

## 6. Feature Requests & Roadmap Signals

### Likely Near-Term Additions
1. **Tavily Search Provider** ([#12034](https://github.com/openclaw/openclaw/issues/12034)) - Direct response to Brave Search API going paid
2. **Anthropic Vertex Provider** ([#43356](https://github.com/openclaw/openclaw/pull/43356)) - PR already open and under review
3. **Extensible Web Search Plugins** ([#11399](https://github.com/openclaw/openclaw/issues/11399)) - Strong community support, architectural PR pending ([#41496](https://github.com/openclaw/openclaw/pull/41496))
4. **GPT-5.4 Mini/Nano Models** ([#50265](https://github.com/openclaw/openclaw/issues/50265)) - Simple model list addition

### Architectural Proposals
- **External Memory Provider API** ([#49233](https://github.com/openclaw/openclaw/issues/49233)) - Zero-downtime context compaction
- **JSON Schema for `openclaw.json`** ([#22278](https://github.com/openclaw/openclaw/issues/22278)) - IDE validation support
- **ClawHub Ecosystem** ([#50090](https://github.com/openclaw/openclaw/issues/50090)) - Community skill marketplace

---

## 7. User Feedback Summary

### Pain Points
1. **Installation/Setup Failures** - Multiple reports of broken first-time setup on macOS ([#6156](https://github.com/openclaw/openclaw/issues/6156)) and Docker ([#48797](https://github.com/openclaw/openclaw/issues/48797))
2. **Version 2026.3.12/3.13 Regressions** - Significant number of bugs tied to recent releases, suggesting quality control issues
3. **Context Window Handling** - Multiple issues around context limits, compaction, and model switching ([#44303](https://github.com/openclaw/openclaw/issues/44303), [#44906](https://github.com/openclaw/openclaw/issues/44906))
4. **Channel Reliability** - Slack, Discord, Telegram, Signal all have active bug reports
5. **External API Changes** - Brave Search going paid has created urgency for alternatives

### Positive Signals
- Active community contributing PRs for i18n despite maintainer bandwidth constraints
- Third-party ecosystem growing (SoundChain, Berry Shield, openclaw-secret-providers)
- Strong engagement on feature discussions (100+ comments on i18n issue)

---

## 8. Backlog Watch

### Long-Unanswered Critical Issues

| Issue | Age | Impact | Status |
|-------|-----|--------|--------|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | ~2 months | Global adoption blocker | Stale (maintainer acknowledged no bandwidth) |
| [#26322](https://github.com/openclaw/openclaw/issues/26322) | ~1 month | OAuth reliability for multi-agent setups | Stale |
| [#15738](https://github.com/openclaw/openclaw/issues/15738) | ~1 month | Gemini embedding infinite loop | Stale |
| [#24872](https://github.com/openclaw/openclaw/issues/24872) | ~1 month | `exec` tool completely broken (returns `[compacted]`) | Open, no activity |

### PRs Needing Maintainer Attention
- **[#43356](https://github.com/openclaw/openclaw/pull/43356)** - Anthropic Vertex provider (L-size, 9 days open)
- **[#41496](https://github.com/openclaw/openclaw/pull/41496)** - Unified provider system (XL-size, 11 days open)
- **[#32306](https://github.com/openclaw/openclaw/pull/32306)** - Discord GUILD_MEMBER_ADD events (XL-size, 18 days open)

---

## Summary
OpenClaw is experiencing growing pains with **regression-heavy recent releases** and **maintainer bandwidth constraints** creating a backlog of critical issues. The community is highly engaged but frustrated by setup failures and channel reliability problems. Priority should be given to stabilizing v2026.3.13 before adding new features. The transition away from Brave Search API ([#16629](https://github.com/openclaw/openclaw/issues/16629)) is an urgent externally-driven priority.

---

## Cross-Ecosystem Comparison

# AI Agent & Personal Assistant Open-Source Ecosystem Report
**Analysis Date:** 2026-03-21

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is currently in a **hyper-growth phase**, characterized by extreme development velocity and a sharp focus on production-readiness. Projects are rapidly iterating beyond core LLM integration toward **multi-channel orchestration** (Slack, Discord, WhatsApp, Feishu), **memory architecture** (RAG, vector stores, context compaction), and **tool extensibility** (MCP support, skill marketplaces). A distinct "Claw" ecosystem has emerged with **OpenClaw** as the dominant reference implementation, spawning specialized variants (PicoClaw for edge/embedded, NanoClaw for lightweight agents, ZeroClaw for enterprise security). The landscape is split between projects prioritizing **stabilization** (addressing regressions, memory bugs, and deployment friction) and those pushing **aggressive feature expansion** (new providers, channels, and autonomous capabilities). **Security and resource efficiency** (running on edge devices, local models) are emerging as critical differentiators as agents move from experimentation to production deployment.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Status |
|---------|-------------|-----------|----------|--------------|--------|
| **OpenClaw** | 500 | 500 | None (stabilizing) | ⚠️ Moderate | Regression backlog, maintainer bandwidth strain |
| **ZeroClaw** | 50 | 50 | 10 (v0.5.0-0.5.4) | ✅ Excellent | Rapid iteration, responsive maintenance |
| **IronClaw** | 45 | 50 | 1 (v0.21.0) | ✅ Good | High velocity, addressing security issues |
| **PicoClaw** | 19 | 64 | 1 (v0.2.3-nightly) | ✅ Good | Aggressive expansion, stabilization needed |
| **CoPaw** | 50 | 50 | 1 (v0.1.0.post1) | ⚠️ Moderate | Post-release regression fixes |
| **NanoBot** | 38 | 69 | None | ✅ Good | Feature expansion, stable core |
| **LobsterAI** | 37 | 26 | 1 (2026.3.20) | ⚠️ Moderate | Critical stability/security issues |
| **NanoClaw** | 7 | 25 | None | ✅ Good | Community-driven, stable |
| **Moltis** | 5 | 5 | None | ⚠️ Fair | Platform compatibility gaps (Windows) |
| **TinyClaw** | 0 | 5 | 1 (v0.0.16) | ✅ Good | Focused UX refinement |
| **EasyClaw** | 1 | 2 | 1 (v1.7.3) | ⚠️ Fair | Windows blocker, macOS install issues |
| **ZeptoClaw** | 0 | 0 | None | ❌ Inactive | No activity |

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Reference Implementation:** Recognized as the core "operating system" for AI agents, with other projects (PicoClaw, NanoClaw, ZeroClaw, LobsterAI) explicitly building on or extending its architecture
- **Ecosystem Gravity:** Highest raw activity volume (500 issues/PRs), largest community of contributors and users
- **Channel Coverage:** Most comprehensive integration support (Discord, Slack, WhatsApp, Signal, Telegram, IRC, Matrix)
- **Provider Diversity:** Broad LLM support (OpenAI, Anthropic, Vertex AI, AWS Bedrock, Google Gemini)

### Technical Approach Differences
| Aspect | OpenClaw | ZeroClaw | NanoBot | PicoClaw |
|--------|----------|----------|---------|----------|
| Architecture | Monolithic core + plugins | Modular, security-first | Polyglot (Rust + Python) | Edge-optimized |
| Security Posture | Standard | Enterprise-grade (policy engine, allowlists) | Standard | Standard |
| Target Deployment | Server/cloud | Enterprise server | Flexible | SBC/IoT devices |
| Release Cadence | Slower, stabilization-focused | Rapid (10 releases/day) | Moderate | Aggressive nightly |

### Community Size Comparison
- **OpenClaw:** ~3-5x larger than nearest competitor by issue/PR volume, but **maintainer bandwidth is critically strained** (380 open issues vs 120 closed)
- **ZeroClaw/CoPaw/IronClaw:** Mid-tier with responsive maintenance and healthy close ratios
- **LobsterAI/NanoClaw/Moltis:** Smaller, community-driven, niche focus areas

---

## 4. Shared Technical Focus Areas

### 1. Memory & Context Management (8/12 projects)
- **Context Compaction:** Zero-downtime context management (OpenClaw #49233, IronClaw #1473)
- **Vector/Graph Memory:** pgvector + graph architectures (ZeroClaw #4028)
- **Token Efficiency:** Context analyzers for local models (ZeroClaw #3892, PicoClaw #1836)
- **Memory Isolation:** Multi-tenant memory separation (CoPaw #1776)

### 2. Channel/Communication Reliability (10/12 projects)
- **Platform Parity:** Web search, tool calls, and media support must work identically across CLI, Telegram, Slack, Discord, Feishu (ZeroClaw #4083, OpenClaw channel bugs)
- **Rich Media:** Base64 uploads, TTS, ASR, quoted replies (PicoClaw #1648, NanoBot #2306)
- **Connection Stability:** Long-connection modes, reconnection logic (LobsterAI #556, NanoBot #215)

### 3. Local Model Support & Efficiency (7/12 projects)
- **Ollama/LM Studio Integration:** Users struggle with infinite loops, hallucinations, and configuration (NanoBot #2298, PicoClaw #28)
- **Context Window Limits:** DeepSeek 400 errors, truncation handling (ZeroClaw #4044)
- **Edge Deployment:** ARM/Raspberry Pi support (ZeroClaw v0.5.3, PicoClaw)

### 4. Security & Access Control (6/12 projects)
- **Policy Engines:** Operation allowlists, approval workflows (ZeroClaw v0.5.3, IronClaw #1485)
- **Secrets Management:** Environment variable injection, config sanitization (LobsterAI #591, Moltis #449)
- **Path Traversal Prevention:** Input validation for file operations (LobsterAI #543)
- **Agent Guardrails:** Preventing bypass of Git hooks (Moltis #455)

### 5. User Onboarding & Deployment (9/12 projects)
- **Zero-Config Setup:** Auto-creation of defaults, removal of setup wizards (TinyClaw v0.0.16)
- **Container Alternatives:** Podman support, daemonless execution (NanoClaw #957, #1285)
- **Migration Tools:** Smooth upgrades between versions (CoPaw #1973, IronClaw #1328)

### 6. Multi-Agent Orchestration (4/12 projects)
- **Agent-to-Agent (A2A):** Cross-agent communication protocols (NanoClaw #1295)
- **Sub-Agent Dispatch:** Automatic task routing to specialized agents (CoPaw #1990)
- **Multi-Agent Coordination:** Mutual invocation, group messaging (LobsterAI #541)

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | NanoBot | PicoClaw | IronClaw |
|-----------|----------|----------|---------|----------|----------|
| **Primary Focus** | General-purpose agent platform | Enterprise-grade security & compliance | Performance (Rust core) | Edge/IoT deployment | Workspace & research workflows |
| **Target User** | Developers, hobbyists | Enterprise IT, security teams | Power users, self-hosters | Embedded developers, hardware hackers | Researchers, professionals |
| **Architecture** | Python-centric, plugin-based | Polyglot, policy-driven | Rust + Python hybrid | Lightweight, ARM-optimized | Java/TypeScript, database-heavy |
| **Key Differentiator** | Ecosystem breadth | Security-first design | Performance & multimodality | Hardware integration | Memory & observability |
| **Maturity** | Stable but strained | Rapidly maturing | Expanding | Experimental | Production-ready |
| **Unique Features** | Largest channel ecosystem | Verifiable intent, commerce agents | Native multimodal sensing | GPIO/I2C hardware control | LLM trace support, daily digests |

| Dimension | CoPaw | LobsterAI | NanoClaw | TinyClaw | Moltis |
|-----------|-------|-----------|----------|----------|--------|
| **Primary Focus** | Multi-agent orchestration | Desktop client (OpenClaw wrapper) | Lightweight agents | Zero-config UX | Git safety & extensibility |
| **Target User** | Enterprise multi-agent workflows | Desktop users, Chinese market | Developers seeking minimal footprint | New users, quick-start scenarios | DevOps-focused teams |
| **Architecture** | AgentScope-based, sandbox | Electron + OpenClaw gateway | Modular channels/skills | Single-command CLI | Plugin hooks system |
| **Key Differentiator** | Agents Square marketplace | Native desktop app | Extensibility via skills | Opinionated defaults | Git workflow integration |
| **Maturity** | Post-release stabilization | Early, stability issues | Early, community-driven | Early, focused | Early, platform gaps |

---

## 6. Community Momentum & Maturity

### Tier 1: High Velocity, Healthy Maintenance
**ZeroClaw, IronClaw, NanoBot**
- **Characteristics:** Rapid iteration, responsive to issues, high PR merge rates, regular releases
- **Trajectory:** Scaling toward production-readiness with active community engagement
- **Risk:** Maintaining quality at current velocity

### Tier 2: High Activity, Strained Maintenance
**OpenClaw, CoPaw, LobsterAI**
- **Characteristics:** Large communities but backlog accumulation, regression-heavy releases, maintainer bandwidth constraints
- **Trajectory:** Need process improvements (CI/CD, automated testing) or community triage support
- **Risk:** User frustration from unanswered issues, destabilization

### Tier 3: Moderate Activity, Focused Development
**PicoClaw, NanoClaw, TinyClaw, Moltis**
- **Characteristics:** Smaller communities, targeted feature sets, either stabilizing or niche-focused
- **Trajectory:** Sustainable growth within defined scope
- **Risk:** Dependency on small maintainer teams

### Tier 4: Early Stage or Inactive
**EasyClaw, ZeptoClaw**
- **Characteristics:** Minimal activity, platform-specific issues blocking adoption
- **Trajectory:** Needs critical mass or may remain niche

---

## 7. Trend Signals

### 1. Search Provider Fragmentation (External Shock)
**Signal:** Brave Search API going paid (OpenClaw #16629) has triggered urgent demand for alternatives
- **Impact:** Tavily, DuckDuckGo, and extensible search plugin systems are immediate priorities
- **Takeaway:** Agent projects are vulnerable to external API changes; plugin architectures for critical infrastructure are essential

### 2. Rust Adoption for Core Performance
**Signal:** NanoBot merged Rust MVP (#2313); ZeroClaw cross-compiles to ARM
- **Impact:** Python-only implementations will face performance and deployment disadvantages
- **Takeaway:** Polyglot architectures (Rust core + Python plugins) are emerging as best practice

### 3. Security-First Posture Becoming Default
**Signal:** ZeroClaw's restrictive policies, IronClaw's approval thread hardening, Moltis's Git hooks, LobsterAI's path traversal fixes
- **Impact:** "Secure by default" is both a feature and a friction point (ZeroClaw #1478: "can't even install ffmpeg")
- **Takeaway:** Agents need configurable security tiers (unrestricted/dev/enterprise modes)

### 4. Local Model Edge Cases Are Production Blockers
**Signal:** Widespread reports of infinite loops, tool hallucinations, and context errors with local models (Qwen, DeepSeek, Gemma)
- **Impact:** Provider-specific API quirks (DashScope `tool_choice`, OpenRouter models) require defensive engineering
- **Takeaway:** Robust retry logic, repetition detection, and graceful degradation are essential for reliability

### 5. Onboarding Friction Is a Competitive Advantage
**Signal:** TinyClaw's zero-config v0.0.16, NanoBot's onboard wizard, removal of setup wizards
- **Impact:** Projects with complex initial configuration (OpenClaw's macOS gateway issues #6156) lose users immediately
- **Takeaway:** "Works out of the box" is now table stakes; opinionated defaults beat configurability for new users

### 6. Multi-Agent Communication Protocols
**Signal:** A2A protocol (NanoClaw #1295), cross-group messaging, sub-agent dispatch
- **Impact:** Single-agent architectures will become limiting for complex workflows
- **Takeaway:** Agent-to-agent communication standards are emerging as a key architectural requirement

### 7. OAuth/Auth Fatigue
**Signal:** IronClaw Google OAuth blocking (#902), requests for email/password signup (#1494)
- **Impact:** Enterprise security policies block OAuth-only authentication
- **Takeaway:** Multiple auth mechanisms (OAuth, API keys, email/password, service accounts) are needed for broad adoption

### 8. Observability and Debugging Gaps
**Signal:** Requests for LLM trace support (NanoBot #2154), usage statistics (LobsterAI #582), debug inspectors (IronClaw #1493)
- **Impact:** Users cannot diagnose why agents behave unexpectedly
- **Takeaway:** Built-in observability (token tracking, decision logging, execution traces) is a critical missing feature across the ecosystem

---

**Summary for Technical Decision-Makers:**
The AI agent open-source ecosystem is coalescing around OpenClaw as a reference platform while specialized variants address enterprise security (ZeroClaw), edge deployment (PicoClaw), and performance (NanoBot). Priority investment areas for any agent project should include: (1) robust memory/context management, (2) security tiers for different deployment scenarios, (3) local model reliability engineering, (4) zero-config onboarding, and (5) observability tooling. The most pressing ecosystem-wide risks are maintainer bandwidth strain on core projects and vulnerability to external API pricing/availability changes.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-03-21

## 1. Today's Overview
NanoBot demonstrates **highly active development** with a substantial volume of 38 issues and 69 pull requests updated within the last 24 hours. The project is currently in a "feature expansion and stabilization" phase, evidenced by the merging of significant new capabilities like a Rust-based MVP and native multimodal support alongside numerous bug fixes for existing channels. While no official release was cut today, the merge activity suggests a significant update is imminent. The community is highly engaged, contributing both complex code additions and detailed feedback on local model integration.

## 2. Releases
**No new releases** were published today (2026-03-21). However, given the volume of merged PRs targeting the `nightly` branch, a new version release appears imminent.

## 3. Project Progress
The project saw significant advancement today with **32 merged/closed PRs**, focusing on architectural expansion and channel robustness:

*   **Core Architecture:**
    *   **Rust MVP (#2313):** A major milestone was merged, adding a `nanobot-rs` Rust crate for CLI, provider, and agent loops, signaling a move towards polyglot architecture for performance.
    *   **Native Multimodality (#2304):** Merged support for "Autonomous Sensory Capabilities," allowing the agent to natively fetch and process image context blocks without external transcription.
*   **Channel & Provider Improvements:**
    *   **Web Search (#2012):** Added Tavily as an alternative search provider with auto-detection.
    *   **Feishu (#2307):** Implemented thread reply support for topic groups.
    *   **QQ & WeCom (#2306):** Added base64 media upload support to remove public IP dependencies.
    *   **Docker (#1911):** Fixed build issues by switching to HTTPS for GitHub cloning.

## 4. Community Hot Topics
The most engaged discussions revolve around **usability and configuration**:

*   **Feishu Connection Issues (#215):** The most active issue (24 comments) highlights user struggles with establishing long connections for the Feishu (Lark) bot, pointing to documentation or configuration gaps in the channel setup.
*   **Onboarding Experience (#2018, #2019):** The new `nanobot onboard` interactive wizard received positive feedback. However, users are already encountering CLI flag issues (e.g., missing `-c` option discussed in #2250), indicating a need for rapid iteration on this feature.
*   **Self-Hosted Web UI (#1922):** A community member built a `nanobot-webui` panel, receiving 6 thumbs up, showing a strong demand for better visualization and management tools.

## 5. Bugs & Stability
Several bugs affecting local model usage and channel stability were reported or addressed today:

*   **Critical: Tool Call Loops (#2298):** Users report that local models (e.g., Qwen 2.5 14b via Ollama) often enter infinite tool-calling loops. The issue is open and currently lacks a linked fix PR, representing a stability risk for local deployments.
*   **High: DashScope Compatibility (#1927):** Closed issue regarding `tool_choice="required"` incompatibility causing memory archival failures. While the issue is closed (indicating a fix or workaround was found), it highlights provider-specific API fragility.
*   **Medium: Telegram Duplication (#2235):** Open issue where bot replies appear twice, suspected to be related to streaming behavior.
*   **Fixed: Email Polling (#2122):** Merged PR to harden IMAP polling retries, preventing crashes on stale connections.

## 6. Feature Requests & Roadmap Signals
*   **Traceability (#2154):** Users are requesting native LLM Trace support (observability) via API to debug agent execution flows without modifying internal code.
*   **Thinking Mode Toggle (#2240):** A request to manually enable/disable "thinking" (chain-of-thought) modes.
*   **Evaluation Framework (#2283):** An open PR introduces a deterministic evaluation harness (EvalRunner), suggesting the team is focusing on reliability and testing standards for the next release.

## 7. User Feedback Summary
Users are actively trying to deploy NanoBot locally but facing friction with **Provider API compatibility** and **Configuration complexity**:

*   **Pain Points:**
    *   **Local Models:** Users struggle with hallucinations and infinite loops when using smaller local models (Issue #884, #2298).
    *   **Configuration:** New users find the manual JSON config difficult; the `onboard` wizard is a welcome relief but still has rough edges (Issue #2250).
    *   **API Compatibility:** Issues with Google Gemma, DashScope, and OpenRouter GLM models indicate that while support is broad, edge cases in API implementation cause crashes (Issues #170, #1927).
*   **Satisfaction:** Enthusiasm is high for the new Rust MVP and Web UI contributions, indicating a power-user base that values performance and self-hosting capabilities.

## 8. Backlog Watch
*   **[Issue #2154] LLM Trace Support:** A crucial request for debugging complex agent workflows that has not yet received a maintainer response.
*   **[Issue #2298] Infinite Tool Loops:** A critical usability blocker for local model users that needs architectural attention (e.g., repetition detection logic).
*   **[PR #1877] Groq Provider Detection:** An open PR improving model detection logic; appears ready for review but stagnating.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-03-21

## 1. Today's Overview
ZeroClaw demonstrates **extremely high velocity** with a massive release cadence (10 releases in one day, stabilizing at `v0.5.4`) and high community engagement (100+ total issue/PR updates). The project is in a rapid iteration phase, heavily focused on expanding its **provider ecosystem** (Avian, Aliyun Bailian) and maturing **communication channels** (QQ, Slack, Discord, Telegram). The ratio of closed issues (29) to opened (21) and merged PRs (39) to open (11) indicates a **healthy, responsive maintenance cycle**. The team is actively integrating community contributions for niche use cases (hardware integration, specific provider support) while refining core stability.

## 2. Releases
The project released **10 versions**, rapidly iterating from beta to stable `v0.5.4`.

*   **v0.5.4 (Stable)**
    *   **Features:**
        *   **QQ Channel:** Enhanced with rich media support and cron delivery capabilities.
        *   **Providers:** Added **Avian** as a native OpenAI-compatible provider (curated models: DeepSeek V3.2, Kimi K2.5).
        *   **Tools:** Added `myself` and `list_projects` actions to the Jira tool.
    *   **Migration:** No explicit breaking changes noted, but users utilizing the QQ channel should test new cron delivery features.

*   **v0.5.3 (Stable)**
    *   **Features:**
        *   **Hardware/CI:** Added ARM cross-compilation targets (`armv7-unknown-linux-gnueabihf`), significantly improving support for SBCs (Single Board Computers) like Raspberry Pi.
        *   **Providers:** Added **Bailian (Aliyun)** provider support.
        *   **Config:** Gateway request timeouts are now configurable via environment variables.
    *   **Security:** Added operation-level allowlist for Google Workspace tool.

*   **v0.5.2 (Stable)**
    *   **UX/Control:** Added `/stop` command to cancel in-flight tasks.
    *   **Interruption:** Added `interrupt_on_new_message` support for Discord and Mattermost.
    *   **Media:** Added Text-to-Speech (TTS) voice reply support for Telegram.
    *   **Security:** Injection of security policy summaries.

**URL:** [github.com/zeroclaw-labs/zerocaw/releases](https://github.com/zeroclaw-labs/zeroclaw/releases)

## 3. Project Progress
Developers merged **39 PRs**, indicating heavy code consolidation.

*   **Hardware & Edge Support:** PR #3517 (RPi GPIO, I2C/SPI) and PR #2937 (Docker data folder fix) significantly improve the "run anywhere" capability, specifically targeting edge devices.
*   **Provider Expansion:** PR #4076 added Avian support, and PR #2938 introduced a native "Verifiable Intent" lifecycle module for commerce agents using SD-JWT credentials.
*   **UX & Channels:**
    *   **Slack:** Implemented reaction support (PR #4091, #4089) and fixed thread reply context handling (PR #4080).
    *   **Skills:** Fixed ClawHub URL resolution (PR #4051) and improved ZIP installation handling (PR #4088).
    *   **Cron:** Fixed weekday mapping (Sun-Thu vs Mon-Fri) in PR #4079 and persistence in PR #4087.
*   **Internal:** Removal of architecture diagrams from READMEs (PR #4092) and expansion of i18n hubs (PR #2934).

## 4. Community Hot Topics
*   **Security Policy Frustrations (Top Issue):** Issue [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) (43 comments) highlights a critical user segment conflict. Users feel the default security is too restrictive ("can't even install ffmpeg"), rendering the agent a "chatbot." The underlying need is for a clear **"unrestricted mode"** or easier configuration for local/trusted environments.
*   **Bailian Coding Plan:** Issue [#3882](https://github.com/zeroclaw-labs/zeroclaw/issues/3882) (9 comments) shows strong demand for specific Aliyun Bailian "Coding Plan" support, differentiating it from general LLM access.
*   **Token Efficiency:** Issue [#3892](https://github.com/zeroclaw-labs/zeroclaw/issues/3892) (3 comments) discusses the need for a context analyzer to reduce token bloat for users running local models with limited context windows (16k).
*   **Missing Features from Legacy Branch:** Issue [#3818](https://github.com/zeroclaw-labs/zeroclaw/issues/3818) (2 comments) points to migration pain, specifically missing security parameters and the `task_plan` tool.

## 5. Bugs & Stability
*   **S0 - Daemon Crash (ARM64):** Issue [#3537](https://github.com/zeroclaw-labs/zeroclaw/issues/3537) reports silent crashes on Raspberry Pi 4. *Status: Closed, likely addressed by v0.5.3 ARM cross-compilation fixes.*
*   **S1 - DeepSeek 400 Error:** Issue [#4044](https://github.com/zeroclaw-labs/zeroclaw/issues/4044) reports `400 Bad Request` due to context length limits. *Status: Closed.*
*   **S1 - Tool Hallucination:** Issue [#4009](https://github.com/zeroclaw-labs/zeroclaw/issues/4009) reports LLM hallucinating tool usage in channels (Feishu/Lark) instead of native calls.
*   **S1 - Web Search Failure:** Issues [#848](https://github.com/zeroclaw-labs/zeroclaw/issues/848) and [#4083](https://github.com/zeroclaw-labs/zeroclaw/issues/4083) report web search tools timing out or failing specifically in channel modes (Telegram) vs CLI.
*   **Panic (UTF-8):** Issue [#4062](https://github.com/zeroclaw-labs/zeroclaw/issues/4062) fixed a panic when truncating multi-byte characters in tool args.

## 6. Feature Requests & Roadmap Signals
*   **MCP Server Support:** Issue [#2856](https://github.com/zeroclaw-labs/zeroclaw/issues/2856) (+3 votes) requests MCP Server plugin configuration.
*   **Database-First Memory:** Issue [#4028](https://github.com/zeroclaw-labs/zeroclaw/issues/4028) proposes a `pgvector` + graph memory architecture.
*   **Skill Testing Framework:** Issue [#3697](https://github.com/zeroclaw-labs/zeroclaw/issues/3697) suggests `TEST.sh` for skills to ensure reliability before deployment.
*   **Interactive Tools:** Issue [#3698](https://github.com/zeroclaw-labs/zeroclaw/issues/3698) requests an `ask_user` tool for blocking confirmations.
*   **Prediction:** Future versions will likely focus on **MCP integration** and **memory architecture** given the volume of related PRs (Graph memory refactor in #4036) and issues.

## 7. User Feedback Summary
Users are enthusiastic about the breadth of integrations (Slack reactions, Jira tools, new providers) but divided on **usability vs. security**. A significant pain point (Issue #1478) is the "secure-by-default" stance hindering autonomous operations (installing packages, executing shell commands). Users migrating from OpenClaw find the configuration complex and miss certain tools (Issue #3818). There is distinct friction in **Channel vs. CLI parity**, where tools (web search) or behaviors (native tool calls) work in CLI but fail in channels like Telegram or Feishu.

## 8. Backlog Watch
*   **Issue #3818 (Restore Legacy Features):** Needs visibility. Critical security parameters and tools were lost in a branch migration; this could block enterprise upgrades.
*   **Issue #3540 (Lark/Feishu Start Failure):** S1 severity, 8 comments, still open. Build succeeds but runtime fails to start the channel.
*   **Issue #4040 (Skill Tool Registration):** Technical debt where skill tools are prompt-based, not API-callable specs. This limits agent capabilities.
*   **PR #3080 (Models Refresh Fix):** Open since March 9th. Fixes a runtime blocking error; needs review to prevent user frustration during provider setup.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest (2026-03-21)

## 1. Today's Overview
PicoClaw demonstrates **very high development velocity** today, driven by the release of the `v0.2.3-nightly` build. The project is in a phase of aggressive expansion and stabilization, evidenced by 64 updated Pull Requests (28 merged/closed) focusing heavily on channel connectivity (WhatsApp, Matrix, QQ, MQTT) and provider compatibility. While the release of nightly build `v0.2.3` adds new capabilities, it coincides with a spike in bug reports (19 open issues) regarding deployment (aarch64, Docker) and provider configurations, suggesting the new features require further stabilization.

## 2. Releases
- **Version**: `nightly` (Build `v0.2.3-nightly.20260320.71ce2196`)
- **Status**: Automated build, potentially unstable.
- **Changes**: The build integrates recent code additions, specifically targeting **v0.2.3** milestone features.
- **Migration/Warning**: Users are advised to use caution. The full changelog compares `v0.2.3` to `main`, implying significant changes have been merged since the last stable tag.
- **Link**: [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)

## 3. Project Progress
Today's development activity (28 merged/closed PRs) focused on **ecosystem connectivity** and **core stability**:
- **Channel Integrations**: Significant work on **Matrix E2EE** (PR [#1841](https://github.com/sipeed/picoclaw/pull/1841)), **WhatsApp** native multimodal support (PR [#1843](https://github.com/sipeed/picoclaw/pull/1843)), and **QQ** connection stability (PR [#1780](https://github.com/sipeed/picoclaw/pull/1780)).
- **Core Fixes**: Critical fixes were merged for **Cron jobs** to prevent silent data loss and ensure correct channel routing (PR [#1842](https://github.com/sipeed/picoclaw/pull/1842), PR [#1839](https://github.com/sipeed/picoclaw/pull/1839)).
- **Provider Compatibility**: Efforts to harden OpenAI-compatible providers (PR [#1683](https://github.com/sipeed/picoclaw/pull/1683)) and fix Gemini API key handling (PR [#1834](https://github.com/sipeed/picoclaw/pull/1834)).
- **Documentation**: A major overhaul of documentation accuracy and i18n support was merged (PR [#1837](https://github.com/sipeed/picoclaw/pull/1837)).

## 4. Community Hot Topics
1.  **[TTS & ASR Audio Architecture](https://github.com/sipeed/picoclaw/issues/1648) (16 comments)**: High interest in adding flexible voice interaction. The discussion centers on integrating existing PRs into the gateway, indicating audio is a priority for turning PicoClaw into a multimodal assistant.
2.  **[Web UI Support](https://github.com/sipeed/picoclaw/issues/806) (7 reactions)**: Strong demand (👍 7) for a browser-based interface to lower the barrier for non-tech users. Currently marked as "Refactoring now," this is a key roadmap item.
3.  **[LM Studio Connectivity](https://github.com/sipeed/picoclaw/issues/28) (9 comments)**: Users are struggling with local model integration on Android/low-power devices. This highlights a need for better "Easy Connect" presets for local LLM providers.

## 5. Bugs & Stability
The influx of new code has introduced specific stability regressions, primarily in deployment and scheduling:
-   **Critical (Cron)**: [Issue #1058](https://github.com/sipeed/picoclaw/issues/1058) reports that cron jobs with `deliver=false` silently discard LLM responses.
    *   *Status*: **Fix Available** in PR [#1839](https://github.com/sipeed/picoclaw/pull/1839).
-   **High (Config/Provider)**: [Issue #1491](https://github.com/sipeed/picoclaw/issues/1491) & [Issue #1790](https://github.com/sipeed/picoclaw/issues/1790) report persistent failures in loading configs for specific models (GLM-4.7, OpenRouter Free). Users are hitting "API key not configured" errors despite valid setups.
-   **Medium (Build/Deploy)**: [Issue #1763](https://github.com/sipeed/picoclaw/issues/1763) notes the `.deb` package for `aarch64` fails to install due to dependency issues. [Issue #1825](https://github.com/sipeed/picoclaw/issues/1825) reports Docker containers ignore `SIGINT`/`SIGTERM`, preventing graceful shutdowns.

## 6. Feature Requests & Roadmap Signals
-   **Event-Driven Hooks**: [Issue #1796](https://github.com/sipeed/picoclaw/issues/1796) proposes a hooks system to move beyond active invocation. This aligns with making PicoClaw a fully autonomous agent.
-   **Conversation Compaction**: [Issue #1836](https://github.com/sipeed/picoclaw/issues/1836) requests context window management to prevent logic loss in long tasks. This is critical for long-horizon agents.
-   **Channel Expansion**: Requests for **Email** ([Issue #1794](https://github.com/sipeed/picoclaw/issues/1794)) and **Matrix E2EE** ([Issue #1840](https://github.com/sipeed/picoclaw/issues/1840)) suggest users want PicoClaw integrated into existing communication workflows.

## 7. User Feedback Summary
-   **Pain Points**: Users find the **configuration of providers** (especially local ones like LM Studio and specific OpenRouter models) brittle and error-prone. The error messaging (e.g., "no API key configured") is often misleading.
-   **Deployment**: Docker users are experiencing friction with SELinux and signal handling, indicating the container entrypoint or compose files need refinement for production environments.
-   **Use Cases**: There is a clear trend toward using PicoClaw as a **multimodal interface** (Voice/WhatsApp) and an **automation engine** (Cron/Email), rather than just a simple chatbot.

## 8. Backlog Watch
-   **Provider Retry Logic**: [Issue #629](https://github.com/sipeed/picoclaw/issues/629) (LLM call fail without retry) has been open since Feb 2026. As agent tasks are often long-running, this lack of resilience is a major reliability blocker. PR [#1342](https://github.com/sipeed/picoclaw/pull/1342) attempts to address this but remains open.
-   **Security Hardening**: PR [#1261](https://github.com/sipeed/picoclaw/pull/1261) (Environment sanitization) addresses a security risk where secrets are passed to the exec tool. This critical security PR needs maintainer review.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-21

## 1. Today's Overview
NanoClaw is experiencing a **surge in community contribution activity**, with 25 pull requests updated in the last 24 hours compared to only 7 issues. The project is clearly in a **feature expansion phase**, with contributors building new communication channels (Twilio, Web, A2A, QQ, Email) and enhanced operational modes (Direct Runner, CLI skills). The low ratio of bug reports (3 open) to feature PRs suggests a stable core codebase, while the high volume of "Skill" submissions indicates the project's extensibility architecture is successfully empowering third-party developers.

## 2. Releases
**No new releases** were recorded in the last 24 hours. The last release information was unavailable in the provided data. Given the high volume of open PRs adding major features (Web Channel, Direct Runner), it is likely the maintainers are accumulating changes for a significant minor or major version bump.

## 3. Project Progress
Significant advancement occurred in architectural flexibility and channel diversity:

*   **New Channel Infrastructure:** A major PR ([#1298](https://github.com/qwibitai/nanoclaw/pull/1298)) was closed after introducing a Web Channel (WebClaw), a dashboard, and multi-tenant support.
*   **API Compatibility:** PR [#1203](https://github.com/qwibitai/nanoclaw/pull/1203) was merged, fixing how the system handles third-party Anthropic-compatible API endpoints (fixing base URL path issues).
*   **Feature Discussions:** Issues regarding WhatsApp group personas ([#1291](https://github.com/qwibitai/nanoclaw/issues/1291)) and reading emoji reactions ([#1288](https://github.com/qwibitai/nanoclaw/issues/1288)) were closed, likely paving the way for implementing related skills currently in PR (e.g., [#1292](https://github.com/qwibitai/nanoclaw/pull/1292)).

## 4. Community Hot Topics
The community is most engaged in expanding deployment options and container alternatives:

*   **Podman Support ([#957](https://github.com/qwibitai/nanoclaw/issues/957)):** With 5 comments and 4 upvotes, this remains the most active discussion. Users are requesting documentation and support for Podman as a daemonless alternative to Docker, citing licensing and security benefits on macOS/Linux.
*   **Documentation Confusion ([#1075](https://github.com/qwibitai/nanoclaw/issues/1075)):** Users are confused by a mismatch between the README (Linux "coming soon") and the website (Linux supported), indicating a need for better synchronization of marketing vs. technical docs.
*   **Direct Runner Mode ([#1285](https://github.com/qwibitai/nanoclaw/pull/1285)):** This PR proposing a Docker-free execution mode generated significant interest, addressing the "overhead" pain point for local development.

## 5. Bugs & Stability
Three specific bugs were identified, two of which already have fix PRs available:

1.  **[High] Telegram Migration DB Corruption ([#1272](https://github.com/qwibitai/nanoclaw/issues/1272)):**
    *   **Issue:** The database migration blindly marks all Telegram chats as `is_group=1`, breaking direct message functionality.
    *   **Status:** Open, no linked fix PR yet.
2.  **[Medium] Matrix Relay Command Leakage ([#1284](https://github.com/qwibitai/nanoclaw/issues/1284)):**
    *   **Issue:** Relays using a shared operator account process commands intended for other rooms.
    *   **Status:** Open, no linked fix PR yet.
3.  **[Low] Startup Credential Validation ([#1289](https://github.com/qwibitai/nanoclaw/issues/1289)):**
    *   **Issue:** The app starts and creates corrupt state if credentials are missing.
    *   **Status:** **Fix Available** in PR [#1290](https://github.com/qwibitai/nanoclaw/pull/1290).

## 6. Feature Requests & Roadmap Signals
The roadmap is being driven by "Skills" and "Channels" contributed by the community. Key signals include:

*   **Inter-Agent Communication:** PR [#1295](https://github.com/qwibitai/nanoclaw/pull/1295) (A2A Protocol) and PR [#586](https://github.com/qwibitai/nanoclaw/pull/586) (Cross-group messaging) suggest a strong trend toward enabling NanoClaw agents to interact with other agents (Cursor, Claude Code) or groups autonomously.
*   **Official Channel APIs:** A shift toward official APIs over reverse-engineered libraries is visible in PR [#1294](https://github.com/qwibitai/nanoclaw/pull/1294) (Twilio WhatsApp), likely to improve stability and ToS compliance.
*   **Predicted Next Features:** The "Direct Runner" mode ([#1285](https://github.com/qwibitai/nanoclaw/pull/1285)) and "Twilio Channel" ([#1294](https://github.com/qwibitai/nanoclaw/pull/1294)) appear mature and address common deployment blockers, making them likely candidates for imminent merge.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Docker Dependency:** Users find Docker heavy and restrictive, requesting Podman support ([#957](https://github.com/qwibitai/nanoclaw/issues/957)) and direct execution modes ([#1285](https://github.com/qwibitai/nanoclaw/pull/1285)).
    *   **Startup Failures:** Users are frustrated by "soft failures" where the container starts but is unusable due to missing config ([#1289](https://github.com/qwibitai/nanoclaw/issues/1289)).
    *   **Context Isolation:** Issues with shared operator accounts in Matrix ([#1284](https://github.com/qwibitai/nanoclaw/issues/1284)) highlight the need for better multi-tenant isolation.
*   **Satisfaction:** The high quality of PR descriptions and the adoption of the "Skill" system suggest developers are finding the codebase extensible and well-architected.

## 8. Backlog Watch
*   **Needs Maintainer Attention:**
    *   **PR [#1111](https://github.com/qwibitai/nanoclaw/pull/1111) (API Usage Tracking):** Open since March 15, this feature adds cost tracking and is critical for production use but seems stalled at "Needs Review".
    *   **PR [#586](https://github.com/qwibitai/nanoclaw/pull/586) (Cross-group messaging):** Open since late February, this is a highly requested architectural change that appears to be awaiting review.
    *   **Issue [#1272](https://github.com/qwibitai/nanoclaw/issues/1272) (Telegram DB Bug):** This affects core functionality for Telegram users and requires immediate verification and patching.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-21

## 1. Today's Overview

IronClaw demonstrates **very high development velocity** with 95 total updates (45 issues + 50 PRs) in the last 24 hours, signaling an actively maintained and rapidly iterating project. The release of **v0.21.0** introduces significant infrastructure improvements including structured fallback deliverables and LRU embedding cache optimization. The community is highly engaged around authentication blockers (Google OAuth) and database migration issues, while core contributors are heavily focused on security hardening (approval thread vulnerabilities) and UX polish. The presence of multiple `staging-promotion` PRs indicates a robust CI/CD pipeline with automated quality gates.

---

## 2. Releases

### v0.21.0 (2026-03-20)

**Key Changes:**
- **Structured fallback deliverables for failed/stuck jobs** ([#236](https://github.com/nearai/ironclaw/pull/236)) — Improves job resilience by providing structured output even when jobs fail or hang
- **LRU embedding cache for workspace search** ([#1423](https://github.com/nearai/ironclaw/pull/1423)) — Performance optimization reducing redundant embedding computations
- **Relay events via webhook callbacks** ([#1254](https://github.com/nearai/ironclaw/pull/1254)) — Enables external event integration

**Migration Notes:** Users upgrading from v0.18.x or earlier should be aware of the `V6__routines` migration checksum issue documented in [#1328](https://github.com/nearai/ironclaw/issues/1328).

---

## 3. Project Progress

### Merged/Closed PRs (13 total)
| PR | Description | Impact |
|----|-------------|--------|
| [#1448](https://github.com/nearai/ironclaw/pull/1448) | Remove redundant LLM config from bootstrap .env | Simplifies initial setup, reduces config surface |
| [#1478](https://github.com/nearai/ironclaw/pull/1478) | Fix CI approval flows and stale fixtures | Unblocks E2E testing, improves reliability |
| [#1481](https://github.com/nearai/ironclaw/pull/1481) | Update WASM artifact checksums | Keeps registry manifests current |

### Active Development Tracks
- **Security Hardening:** Multiple PRs addressing approval thread vulnerabilities ([#1495](https://github.com/nearai/ironclaw/pull/1495), [#1497](https://github.com/nearai/ironclaw/pull/1497))
- **OAuth Improvements:** Callback state handling tightened ([#1484](https://github.com/nearai/ironclaw/pull/1484))
- **Conversation Import Infrastructure:** Large feature addition for history import ([#1490](https://github.com/nearai/ironclaw/pull/1490), [#1498](https://github.com/nearai/ironclaw/pull/1498))
- **UX Overhaul:** Comprehensive design system refinements in progress ([#1277](https://github.com/nearai/ironclaw/pull/1277))
- **PDF Processing:** Replacement of `pdf-extract` with `pdf_oxide` for better performance ([#1435](https://github.com/nearai/ironclaw/pull/1435))

---

## 4. Community Hot Topics

| Issue/PR | Activity | Analysis |
|----------|----------|----------|
| [#902](https://github.com/nearai/ironclaw/issues/902) — Google OAuth blocked | 3 comments | **Critical blocker for Google Suite users.** Users with strict Google Workspace security policies cannot authenticate. Request for `gws_bridge` fallback provider is being addressed in PR [#931](https://github.com/nearai/ironclaw/pull/931). |
| [#1328](https://github.com/nearai/ironclaw/issues/1328) — Migration checksum mismatch | 3 comments, 2 👍 | **Upgrade path broken.** Users cannot upgrade from v0.18.x to v0.19.x on PostgreSQL due to modified `V6__routines.sql`. Requires manual intervention or fix release. |
| [#742](https://github.com/nearai/ironclaw/issues/742) — OpenAI Codex as LLM provider | 2 👍 | Users want to leverage ChatGPT Pro/Plus subscriptions instead of paying for separate API keys. Strong signal for subscription-based provider support. |
| [#1277](https://github.com/nearai/ironclaw/pull/1277) — UX Overhaul | XL-sized PR | Major design system overhaul with "Apple-level" refinements shows commitment to polish and user experience. |

---

## 5. Bugs & Stability

### CRITICAL Severity
| Issue | Description | Fix Status |
|-------|-------------|------------|
| [#1485](https://github.com/nearai/ironclaw/issues/1485) | Cross-channel approval thread hijacking — authorization bypass | Fix in PR [#1495](https://github.com/nearai/ironclaw/pull/1495) |
| [#1486](https://github.com/nearai/ironclaw/issues/1486) | TOCTOU race condition in approval thread resolution | Identified, pending fix |
| [#1429](https://github.com/nearai/ironclaw/issues/1429) | Embedding cache clones embeddings on every hit | CLOSED (performance issue) |

### HIGH Severity
| Issue | Description | Fix Status |
|-------|-------------|------------|
| [#1487](https://github.com/nearai/ironclaw/issues/1487) | Incomplete fallback logic for non-existent approval threads | OPEN |
| [#1103](https://github.com/nearai/ironclaw/issues/1103) | SSRF risk via configurable embedding base URL | CLOSED |
| [#1431](https://github.com/nearai/ironclaw/issues/1431) | Thundering herd on concurrent uncached requests | CLOSED |

### User-Reported Bugs
- **[#697](https://github.com/nearai/ironclaw/issues/697):** Routines fail silently when Docker/sandbox unavailable — poor operational visibility
- **[#1465](https://github.com/nearai/ironclaw/issues/1465):** Secrets not accessible as environment variables for git operations — blocks private repo workflows

---

## 6. Feature Requests & Roadmap Signals

### High-Priority Feature Requests (P1)
| Issue | Request | Likelihood |
|-------|---------|------------|
| [#1474](https://github.com/nearai/ironclaw/issues/1474) | Auto-extract structured memories from conversations | High — addresses core UX gap |
| [#1473](https://github.com/nearai/ironclaw/issues/1473) | Tiered context summaries (L0/L1) for memory | High — token efficiency focus |
| [#1476](https://github.com/nearai/ironclaw/issues/1476) | Structured daily session digests | Medium — follows memory work |

### Recently Opened (Strong Signals)
| Issue | Request | Notes |
|-------|---------|-------|
| [#1480](https://github.com/nearai/ironclaw/issues/1480) | Core self-update check and flow | PR [#1482](https://github.com/nearai/ironclaw/pull/1482) already implements |
| [#1494](https://github.com/nearai/ironclaw/issues/1494) | Email/password signup option | OAuth-only auth limiting adoption |
| [#1278](https://github.com/nearai/ironclaw/issues/1278) | Auto-export workspace .md files for DB recovery | Disaster recovery concern |

### Likely in Next Version
Based on active PRs and maintainers: **Web debug inspector** ([#1493](https://github.com/nearai/ironclaw/issues/1493)), **Core self-update** ([#1482](https://github.com/nearai/ironclaw/pull/1482)), and **Conversation import** ([#1498](https://github.com/nearai/ironclaw/pull/1498)).

---

## 7. User Feedback Summary

### Pain Points
1. **OAuth Authentication Barriers:** Multiple users blocked by Google's security policies when using Google Suite tools
2. **Database Migration Fragility:** Upgrades fail on existing databases, causing production issues
3. **Poor Error Visibility:** Silent failures in routines/sandbox operations make debugging difficult
4. **Documentation Gaps:** Users struggling to find configuration guidance ([#1174](https://github.com/nearai/ironclaw/issues/1174))
5. **Memory Persistence:** Manual `memory_write` requirement causes context loss between sessions

### Positive Signals
- Light theme request ([#761](https://github.com/nearai/ironclaw/issues/761)) shows users want to use Web Gateway daily
- Feature requests for deeper workspace/memory features indicate users are investing in long-term usage
- Active community engagement with detailed issue reports suggests a technically sophisticated user base

### Use Cases Emerging
- **Research workflows:** Daily digests and memory extraction for long-running projects
- **Multi-provider setups:** Users mixing OpenAI, Anthropic, and local LLMs
- **Private repository operations:** Git workflows requiring secret injection

---

## 8. Backlog Watch

| Item | Age | Concern | Recommendation |
|------|-----|---------|----------------|
| [#1174](https://github.com/nearai/ironclaw/issues/1174) — Missing documentation | 7 days | New users cannot configure tools, limits, skills | **High priority.** Documentation debt blocking adoption |
| [#1328](https://github.com/nearai/ironclaw/issues/1328) — Migration checksum mismatch | 4 days | Upgrade path broken for PostgreSQL users | **Urgent.** Requires patch release or migration repair guide |
| [#902](https://github.com/nearai/ironclaw/issues/902) — Google OAuth blocked | 11 days | Enterprise users blocked entirely | PR [#931](https://github.com/nearai/ironclaw/pull/931) in progress; needs prioritization |
| [#742](https://github.com/nearai/ironclaw/issues/742) — OpenAI Codex provider | 12+ days | Subscription monetization gap | Strong user demand; consider for roadmap |

---

**Summary:** IronClaw is in a **high-velocity development phase** with significant security and UX investments. The v0.21.0 release adds resilience features while contributors actively address a cluster of approval-thread security vulnerabilities. The most pressing operational concerns are the PostgreSQL migration blocker and Google OAuth issues affecting enterprise adoption. The roadmap signals strong investment in memory/context automation and developer experience improvements.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest (2026-03-21)

## 1. Today's Overview
LobsterAI is experiencing **extremely high community activity**, with 37 active issues and 26 pull requests updated in the last 24 hours. The project released version `2026.3.20` to address a specific runtime bug, but the volume of new bug reports suggests the recent feature expansion (particularly around the OpenClaw gateway and IM integrations) has introduced significant stability challenges. While the maintainers merged 11 PRs—indicating a healthy development velocity—the community is currently focused on troubleshooting regression bugs, security vulnerabilities, and platform-specific stability issues. The high engagement level demonstrates strong user adoption, though it highlights an immediate need for quality assurance.

## 2. Releases
### **Version 2026.3.20** (Released 2026-03-20)
*   **Changes:** This is a targeted patch release containing a single fix.
    *   **Fix:** Stopped stubbing `playwright-core` and `pdfjs-dist` in the OpenClaw runtime environment to resolve compatibility or initialization issues.
*   **Migration Note:** No breaking configuration changes, but users experiencing issues with browser automation or PDF processing tools should update immediately.
*   **Link:** [Full Changelog](https://github.com/netease-youdao/LobsterAI/compare/2026.3.19...2026.3.20)

## 3. Project Progress
The team merged 11 PRs today, focusing heavily on IM integration, security, and infrastructure:

*   **Security & Secrets Management:**
    *   [PR #591](https://github.com/netease-youdao/LobsterAI/pull/591): Removed plaintext secrets from `openclaw.json`, replacing them with environment variable injection (`${LOBSTER_*}`). This significantly improves local security.
*   **IM Integrations (Feishu & POPO):**
    *   [PR #558](https://github.com/netease-youdao/LobsterAI/pull/558): Added one-click Feishu bot creation via QR code (Device Flow), simplifying the setup process.
    *   [PR #556](https://github.com/netease-youdao/LobsterAI/pull/556): Introduced WebSocket long-connection mode for POPO IM as an alternative to Webhooks.
*   **Infrastructure & DX:**
    *   [PR #589](https://github.com/netease-youdao/LobsterAI/pull/589): (Open/Reviewing) Proposed a massive overhaul of GitHub engineering infrastructure (CI/CD, templates, security scanning).
    *   [PR #520](https://github.com/netease-youdao/LobsterAI/pull/520): Fixed a macOS build failure caused by broken `.bin` symlinks.

## 4. Community Hot Topics
The community is buzzing with activity, primarily around **stability** and **data safety**:

1.  **Critical Security Vulnerability ([Issue #543](https://github.com/netease-youdao/LobsterAI/issues/543)):**
    *   **Topic:** A high-risk Path Traversal vulnerability was identified in `openclawMemoryFile.ts`. The user (@noransu) provided a detailed analysis showing that `workingDirectory` is used without normalization, allowing `../` attacks.
    *   **Analysis:** This needs immediate maintainer attention as it poses a risk to user file systems.

2.  **Data Isolation Breach ([Issue #561](https://github.com/netease-youdao/LobsterAI/issues/561)):**
    *   **Topic:** A user reported seeing chat history from *other users* in their personal LobsterAI instance ("My LobsterAI showed other people's conversations... scary").
    *   **Analysis:** If confirmed, this is a critical multi-tenancy or caching bug, potentially involving the cloud sync layer or OpenClaw gateway state.

3.  **UI/UX Confusion ([Issue #563](https://github.com/netease-youdao/LobsterAI/issues/563)):**
    *   **Topic:** "Conversation titles showing garbled text" (7 comments). Users are frustrated by encoding or rendering issues in the sidebar.

## 5. Bugs & Stability
Stability is the primary concern this cycle, with several high-severity bugs reported:

*   **P0 - App Crash / Reboot Loop:**
    *   [Issue #551](https://github.com/netease-youdao/LobsterAI/issues/551): Mac (Intel) app causes computer restart on install; icon turns into a question mark.
    *   [Issue #540](https://github.com/netease-youdao/LobsterAI/issues/540): "OpenClaw" frequently restarts every few seconds, making the app unusable.
*   **P0 - OpenClaw Gateway Failures:**
    *   [Issue #572](https://github.com/netease-youdao/LobsterAI/issues/572): Gateway suddenly fails to start and requires a full app restart.
    *   [Issue #580](https://github.com/netease-youdao/LobsterAI/issues/580): Service fails with "No API key found for provider 'anthropic'" even after saving keys (likely a state propagation issue).
*   **P1 - Performance / Memory:**
    *   [Issue #562](https://github.com/netease-youdao/LobsterAI/issues/562): SQLite synchronous writes are blocking the main process.
    *   [Issue #571](https://github.com/netease-youdao/LobsterAI/issues/571): Memory leak in `stoppedSessions` Set.
    *   **Fix Status:** [PR #573](https://github.com/netease-youdao/LobsterAI/pull/573) is open to refactor SQLite to async IO; [PR #590](https://github.com/netease-youdao/LobsterAI/pull/590) addresses session stopping logic.

## 6. Feature Requests & Roadmap Signals
Users are pushing for more advanced "Agent" capabilities and better enterprise controls:

*   **Multi-Agent Capabilities:** [Issue #541](https://github.com/netease-youdao/LobsterAI/issues/541) requests multi-agent coordination and mutual invocation.
*   **Offline/Enterprise Support:** [Issue #587](https://github.com/netease-youdao/LobsterAI/issues/587) asks for full offline deployment support for intranets.
*   **Usage Tracking:** [Issue #582](https://github.com/netease-youdao/LobsterAI/issues/582) requests Token usage statistics per model to manage costs.
*   **Roadmap Prediction:** The volume of session management bugs suggests the next patch will likely focus on stabilizing the OpenClaw gateway lifecycle and fixing the memory leak/storage blocking issues.

## 7. User Feedback Summary
*   **Pain Points:** Users are struggling with **installation reliability** (Mac restarts, Windows update mechanisms) and **configuration persistence** (keys not saving, sessions restarting unexpectedly). The "Garbled text" issue ([#563](https://github.com/netease-youdao/LobsterAI/issues/563)) hurts perceived quality.
*   **Positive Signals:** The new Feishu QR code login ([PR #558](https://github.com/netease-youdao/LobsterAI/pull/558)) is a welcome improvement over manual config. Enthusiastic users are already developing custom skills ([Issue #577](https://github.com/netease-youdao/LobsterAI/issues/577)).

## 8. Backlog Watch
*   **Immediate Attention Required:**
    *   **[Issue #561](https://github.com/netease-youdao/LobsterAI/issues/561) (Cross-user data leak):** This requires urgent verification.
    *   **[Issue #543](https://github.com/netease-youdao/LobsterAI/issues/543) (Path Traversal):** Security patch needed before next release.
*   **Stale but Important:**
    *   **[Issue #511](https://github.com/netease-youdao/LobsterAI/issues/511):** Feishu bot non-response issue (created 3 days ago, still open). With the new QR code feature merged, users may hope this resolves it, but the root cause needs confirmation.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest: 2026-03-21

## 1. Today's Overview
TinyClaw (TinyAGI) demonstrates **high velocity** in architectural refinement and user experience (UX) improvement today. With 5 Pull Requests updated and a significant new minor release (**v0.0.16**), the team is clearly focused on streamlining the initial user onboarding and stabilizing the internal provider system. Despite the lack of new issue filings, the merge activity suggests a mature sprint cycle dedicated to polishing the "Zero-Config" experience and decoupling the frontend.

*   **Activity Level:** High (Development)
*   **Community Engagement:** Low (No new comments/issues)

## 2. Releases
### **v0.0.16** (Released 2026-03-20)
This release marks a pivotal shift toward **Zero-Config Onboarding**.
*   **Key Changes:**
    *   **Streamlined Startup:** Running the `tinyagi` command now auto-creates default settings, bootstraps workspace directories, checks dependencies, and launches the daemon immediately.
    *   **No Setup Wizard:** The initial configuration wizard has been removed in favor of "sensible defaults" (Workspace: `~/tinyagi-workspace`).
*   **Impact:** significantly lowers the barrier to entry for new users, moving from a guided setup to an "opinionated defaults" model.
*   **GitHub Link:** [Release v0.0.16](https://github.com/TinyAGI/tinyagi/releases/tag/v0.0.16)

## 3. Project Progress
The development team merged 4 PRs and opened 1 new feature PR, focusing heavily on **refactoring** and **extensibility**.

*   **[CLOSED] refactor(cli): streamline onboarding to single 'tinyagi' command ([PR #244](https://github.com/TinyAGI/tinyagi/pull/244))**
    *   *Advancement:* Implements the core logic for the v0.0.16 release. Added validation for `tmux` and `jq` dependencies to ensure environment stability before launch.
*   **[CLOSED] refactor(core): extract CLI logic into adapter pattern ([PR #242](https://github.com/TinyAGI/tinyagi/pull/242))**
    *   *Advancement:* Major architectural cleanup. Provider-specific logic (Claude, Codex, OpenCode) was extracted from `invoke.ts` into an `AgentAdapter` interface with a registry. This reduces technical debt and makes adding new providers easier.
*   **[CLOSED] refactor(office): redesign SSE events and extract page components ([PR #245](https://github.com/TinyAGI/tinyagi/pull/245))**
    *   *Advancement:* Improved the real-time event system by removing confusing `chain_*` nomenclature in favor of semantic events like `agent:progress` and `message:incoming`. Also modularized the frontend office page.
*   **[CLOSED] feat(office): redesign the live office workspace ([PR #212](https://github.com/TinyAGI/tinyagi/pull/212))**
    *   *Advancement:* A broader UI/UX overhaul of the `/office` route, likely setting the stage for the new event system implemented in #245.

## 4. Community Hot Topics
*There were no active discussions (0 comments) on Issues or PRs in the last 24 hours.*

**Analysis:** The silence in the issue tracker, combined with high code velocity, typically indicates that the current sprint is driven by internal roadmap goals rather than reactive bug fixing.

## 5. Bugs & Stability
*No bugs or crashes were reported via Issues in the last 24 hours.*

**Stability Note:** While no bugs were reported, **PR #244** introduced dependency checks for `tmux` and `jq`. This suggests the team identified missing dependencies as a potential stability risk during the onboarding process and proactively patched it in the v0.0.16 release.

## 6. Feature Requests & Roadmap Signals
*   **[OPEN] feat: add Novita AI as a built-in LLM provider ([PR #243](https://github.com/TinyAGI/tinyagi/pull/243))**
    *   *Author:* Alex-wuhu
    *   *Details:* Proposes adding Novita AI as a first-class provider. It utilizes the existing OpenAI-compatible "codex harness."
    *   *Prediction:* Since the architectural refactoring in **PR #242** (merged yesterday) created a standardized `AgentAdapter` interface, merging this Novita AI integration should now be technically straightforward. **High likelihood of merging in the next release.**

## 7. User Feedback Summary
*No direct user feedback (issues/comments) was recorded today.*

**Indirect Signal:** The focus of **v0.0.16** on "Zero-Config" implies that previous users may have found the setup wizard or initial configuration cumbersome. The shift to "auto-create defaults" addresses the friction of getting the agent running for the first time.

## 8. Backlog Watch
*   **Item:** **PR #243 (Novita AI Provider)**
    *   *Status:* Open
    *   *Action Needed:* Maintainer review. This PR is a direct beneficiary of the recent "adapter pattern" refactoring. It needs verification that the `OPENAI_BASE_URL` handling aligns with the new adapter standards.

---
*Data Source: TinyAGI/tinyagi GitHub Repository | Analysis Date: 2026-03-21*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-03-21

## 1. Today's Overview
The Moltis project is currently demonstrating **high active development momentum** with significant contributor engagement outside the core team. Activity in the last 24 hours has been focused heavily on **platform compatibility** (specifically Windows) and **extensibility** (adding Gemini support and Git safety hooks). While no new official releases were cut today, the volume of open PRs—particularly those addressing critical Windows file locking bugs—suggests the project is racing toward a stability milestone. The project appears to be in a "feature integration and stabilization" phase.

## 2. Releases
**No new releases** were recorded in the last 24 hours. The repository continues to iterate on the current development branch.

## 3. Project Progress
Progress today was driven entirely by **open pull requests** aimed at expanding compatibility and fixing platform-specific bugs. No PRs were merged in this window, but several are substantial:

*   **Windows Compatibility:** A significant fix (PR [#436](https://github.com/moltis-org/moltis/pull/436)) addresses a critical `LockFileEx` error on Windows by refactoring file append logic.
*   **Security & Safety:** PR [#455](https://github.com/moltis-org/moltis/pull/455) introduces a `PreToolUse` hook to block agents from bypassing Git hooks (e.g., `git commit --no-verify`), ensuring AI agents adhere to repository quality gates.
*   **Provider Expansion:** PR [#33](https://github.com/moltis-org/moltis/pull/33) remains active, adding native support for **Google Gemini** with OAuth and API key authentication.
*   **Gateway Security:** PR [#449](https://github.com/moltis-org/moltis/pull/449) implements sanitization for channel configs to prevent secrets from leaking through the gateway API.

## 4. Community Hot Topics
The most engaging discussion involves extending Moltis to new communication platforms and ensuring agent safety:

*   **Matrix Support (Issue [#233](https://github.com/moltis-org/moltis/issues/233)):** This is the most active discussion item (1 👍, 2 comments). Users are signaling a strong need for decentralized communication integration via the Matrix protocol.
*   **Agent Safety/Git Hooks (Issue [#454](https://github.com/moltis-org/moltis/issues/454) & PR [#455](https://github.com/moltis-org/moltis/pull/455)):** There is notable interest in "guardrails" for AI agents. The community (specifically author `tupe12334`) is actively contributing code to ensure the AI cannot silently disable CI/CD checks.

## 5. Bugs & Stability
Several bugs regarding installation and configuration were reported today, highlighting friction in the onboarding process for non-core users:

*   **Critical Windows Bug (Issue [#457](https://github.com/moltis-org/moltis/issues/457)):** `jmikedupont2` reported `handler.sh not found` during Windows installation.
    *   *Analysis:* This suggests missing Windows-specific wrappers or batch files in the installer, potentially blocking adoption on that OS.
    *   *Fix Status:* No PR linked yet, though PR [#436](https://github.com/moltis-org/moltis/pull/436) addresses other Windows file-locking issues.
*   **Config Migration Issue (Issue [#458](https://github.com/moltis-org/moltis/issues/458)):** `Tylast` reported missing config examples in `moltis.toml` when importing from `openclaw`.
    *   *Severity:* Medium. Impairs user onboarding and migration.
*   **Windows File Locking (PR [#436](https://github.com/moltis-org/moltis/pull/436)):** While a fix is proposed, the underlying issue (OS Error 5) indicates the current release may be unstable for Windows users performing session logging.

## 6. Feature Requests & Roadmap Signals
*   **Matrix Integration:** The continued activity on Issue [#233](https://github.com/moltis-org/moltis/issues/233) suggests multi-protocol support is a high-priority user request.
*   **Gemini Support:** PR [#33](https://github.com/moltis-org/moltis/pull/33) indicates the roadmap includes broadening LLM provider options beyond the current defaults.
*   **Git Safety Hooks:** The proposal in Issue [#454](https://github.com/moltis-org/moltis/issues/454) signals a trend toward "Enterprise-Ready" features where the AI agent is constrained by standard dev-ops policies.

## 7. User Feedback Summary
*   **Pain Point - Windows Support:** Two separate issues today relate to Windows failures (missing shell scripts, file locking). User sentiment suggests Windows is currently a second-class citizen regarding stability.
*   **Pain Point - Migration:** Users attempting to migrate from "openclaw" are encountering friction with configuration generation (Issue [#458](https://github.com/moltis-org/moltis/issues/458)).
*   **Positive Signal - Extensibility:** The community is actively building bridges (Gemini, Git Hooks, Matrix), indicating that the core architecture is viewed as extensible and valuable enough to warrant these contributions.

## 8. Backlog Watch
*   **PR [#33](https://github.com/moltis-org/moltis/pull/33) (Gemini Support):** Open since Feb 2026. This is a large feature addition that needs final review/merge to unblock users waiting for Gemini integration.
*   **Issue [#233](https://github.com/moltis-org/moltis/issues/233) (Matrix):** Open since Feb 2026. Despite low comment volume, the persistence of this request indicates a dedicated user base interested in decentralized channels.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest (2026-03-21)

## 1. Today's Overview
CoPaw is experiencing **very high activity** following the recent release of `v0.1.0.post1`. The project saw 50 issues and 50 pull requests updated in the last 24 hours, indicating a rapid iteration cycle and strong community engagement. While the release of the post-release patch suggests stabilization efforts for the `0.1.0` milestone, the issue tracker shows a significant volume of regression reports and upgrade errors from early adopters. The development focus is currently split between critical bug fixes (memory, runtime errors) and expanding platform capabilities (MCP, Sandbox, Channels).

## 2. Releases
### **v0.1.0.post1**
*   **Status:** Released recently (likely preceding the 24h window but active in updates).
*   **Changes:**
    *   **Version Bump:** Advanced versioning to `0.1.1b1` in preparation for the next beta cycle.
    *   **Anthropic Fix:** Added HTTP 529 to the list of retryable status codes to handle Anthropic "overloaded" errors gracefully.
    *   **Token Usage:** Partial logs indicate fixes to token usage tracking (log cut off).

## 3. Project Progress
**Merged/Closed PRs (24 total):**
*   **Documentation:** Added Windows desktop upgrade instructions to the FAQ ([PR #1973](https://github.com/agentscope-ai/CoPaw/pull/1973)), addressing user confusion regarding installation overlays.
*   **Docker:** Fixed legacy workspace migration for multi-agent structures when custom working directories are mounted ([PR #1949](https://github.com/agentscope-ai/CoPaw/pull/1949)).
*   **Core:** Version bump to `0.1.0p1` ([PR #1964](https://github.com/agentscope-ai/CoPaw/pull/1964)).

**Open PRs Advancing Features (26 total):**
*   **Sandbox:** Integrating **OpenSandbox** as a cloud backend for secure file operations and shell execution ([PR #1972](https://github.com/agentscope-ai/CoPaw/pull/1972)).
*   **Agents Square:** Adding source browsing and import flows for discovering new agents ([PR #1883](https://github.com/agentscope-ai/CoPaw/pull/1883)).
*   **UI/UX:** Implementing web-based account management (change credentials) and dark mode for the login page ([PR #1989](https://github.com/agentscope-ai/CoPaw/pull/1989)).
*   **Control:** Implementing a unified `/stop` command across all channels to interrupt stuck agents ([PR #1913](https://github.com/agentscope-ai/CoPaw/pull/1913)).
*   **QQ Channel:** Adding file sending support via the rich media API ([PR #1986](https://github.com/agentscope-ai/CoPaw/pull/1986)).

## 4. Community Hot Topics
1.  **Task Cancellation Errors ([Issue #1976](https://github.com/agentscope-ai/CoPaw/issues/1976))**
    *   **Activity:** 11 comments.
    *   **Analysis:** Users are frequently encountering `RuntimeError: Task has been cancelled!`. This appears to be a race condition or stability issue in the async agent execution loop, possibly linked to the new tool guard or memory hooks.
2.  **Skill Management Bugs in v0.1.0b2 ([Issue #1711](https://github.com/agentscope-ai/CoPaw/issues/1711))**
    *   **Activity:** 9 comments.
    *   **Analysis:** Users report that disabling/deleting skills via the UI fails, and manually deleted files regenerate automatically. This suggests a conflict between the UI state and the file system watcher/sync mechanism.
3.  **Network & Upgrade Regressions ([Issue #1708](https://github.com/agentscope-ai/CoPaw/issues/1708))**
    *   **Activity:** 8 comments.
    *   **Analysis:** Users in restricted networks (China) are frustrated by forced attempts to download configs from HuggingFace (`Network is unreachable`), blocking the startup process.
4.  **Memory Management Architecture ([Issue #1776](https://github.com/agentscope-ai/CoPaw/issues/1776))**
    *   **Activity:** 2 comments (high quality discussion).
    *   **Analysis:** Technical discussion on why CoPaw uses a custom `MemoryManager` instead of AgentScope's native `LongTermMemory`, specifically regarding multi-user memory isolation.

## 5. Bugs & Stability
**Critical/High Severity:**
*   **CPU Death Loop ([Issue #1774](https://github.com/agentscope-ai/CoPaw/issues/1774)):** `MemoryCompactionHook` enters an infinite loop (pre_reasoning hook), consuming 100% CPU. *No linked fix PR detected.*
*   **Channel Breaking Bugs:**
    *   **Feishu/Lark Auth Failure ([Issue #1786](https://github.com/agentscope-ai/CoPaw/issues/1786)):** Authentication errors after upgrading to 0.1.0b2/b3.
    *   **Custom Channels Fail to Start ([Issue #1987](https://github.com/agentscope-ai/CoPaw/issues/1987)):** Manager fails to read dict-type configs. *Fix available in [PR #1991](https://github.com/agentscope-ai/CoPaw/pull/1991).*
*   **Runtime Crashes:** `RuntimeError: Task has been cancelled!` ([Issue #1976](https://github.com/agentscope-ai/CoPaw/issues/1976)). *Mentioned fixed in #1956, but users still reporting.*

**Medium Severity:**
*   **Local Whisper Schema Error ([Issue #1835](https://github.com/agentscope-ai/CoPaw/issues/1835)):** Local audio transcription fails with `InvalidSchema: No connection adapters were found for 'file:///...'`.
*   **Dependency Conflicts ([Issue #1694](https://github.com/agentscope-ai/CoPaw/issues/1694)):** Pip upgrade fails due to PyYAML version conflicts.

## 6. Feature Requests & Roadmap Signals
*   **Multi-Agent Orchestration:** Users are asking if CoPaw supports automatic dispatch to sub-agents ([Issue #1990](https://github.com/agentscope-ai/CoPaw/issues/1990)) and multi-agent support ([Issue #1587](https://github.com/agentscope-ai/CoPaw/issues/1587)). *Prediction: High priority given the "Agents Square" PRs.*
*   **Enhanced Token Stats:** Request for session-dimension token consumption statistics ([Issue #1751](https://github.com/agentscope-ai/CoPaw/issues/1751)).
*   **Platform Support:** Requests for Linux Desktop version ([Issue #1573](https://github.com/agentscope-ai/CoPaw/issues/1573)) and Tencent Skillhub import ([Issue #1589](https://github.com/agentscope-ai/CoPaw/issues/1589)).
*   **History Search:** Feature request to search through historical conversation content ([Issue #1578](https://github.com/agentscope-ai/CoPaw/issues/1578)).

## 7. User Feedback Summary
*   **Upgrade Pain:** There is significant friction upgrading from `0.0.7` to `0.1.0b*`. Users report broken UIs, dependency loops, and configuration migration failures.
*   **Model Connectivity:** Strong demand for better offline/restricted-network handling (HuggingFace connectivity issues).
*   **Product Usability:** Users feel the project lacks "product thinking" regarding multi-agent workflows and granular permission controls ([Issue #1551](https://github.com/agentscope-ai/CoPaw/issues/1551)).
*   **Localization:** Users explicitly requested better Chinese documentation and changelogs ([Issue #1586](https://github.com/agentscope-ai/CoPaw/issues/1586)).

## 8. Backlog Watch
*   **[Issue #1076](https://github.com/agentscope-ai/CoPaw/issues/1076) (llama.cpp Bug):** Open since March 9th, users are still reporting failures when loading local GGUF models (`Failed to load model from file`). Needs maintainers' attention for the local inference crowd.
*   **[PR #1913](https://github.com/agentscope-ai/CoPaw/pull/1913) (Unified /stop command):** A critical usability feature for controlling runaway agents. This PR is Open and awaiting review/merge.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest (2026-03-21)

**Project:** EasyClaw / RivonClaw  
**Repository:** [github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

## 1. Today's Overview
EasyClaw demonstrates robust development momentum today, marked by the release of version **v1.7.3** and the successful integration of two significant UI overhaul Pull Requests. The project is currently in a phase of active user experience refinement, specifically targeting authentication flows and account management interfaces. While the development side is vibrant with feature merges, the community side shows emerging friction regarding application stability on Windows platforms. Overall, the project health is positive, though attention is required for platform-specific bugs highlighted in recent issues.

## 2. Releases
### **v1.7.3: RivonClaw v1.7.3**
The latest release focuses on deployment stability for macOS, addressing specific security hurdles rather than introducing new functional features.
*   **Changes:** Includes bug fixes and patches to improve installability.
*   **Migration Notes:** 
    *   **macOS Users:** A known issue exists where macOS Gatekeeper may incorrectly flag the app as damaged ("'RivonClaw' is damaged and can't be opened").
    *   **Fix:** Users must bypass this via Terminal. (Release notes cut off, standard fix usually involves `xattr -cr [app_path]`).
*   **Link:** [Release v1.7.3](https://github.com/gaoyangz77/rivonclaw/releases/tag/v1.7.3) *(Note: Link reflects repo context provided)*

## 3. Project Progress
Significant progress was made on the User Interface (UI) architecture, specifically moving away from page-based navigation to component-based interaction.
*   **[[#24] Account UI redesign popover](https://github.com/gaoyangz77/rivonclaw/pull/24)** (Merged): Replaced the dedicated `/account` route with a floating popover dropdown accessible via the avatar. This creates a more seamless, app-like experience similar to modern SaaS dashboards.
*   **[[#23] feat(ui): redesign auth modal & account page](https://github.com/gaoyangz77/rivonclaw/pull/23)** (Merged): A comprehensive overhaul of the authentication system. Key improvements include:
    *   **UX Enhancements:** Password visibility toggle, password strength bar, and input length limits.
    *   **Flow Logic:** Auto-register on unknown email inputs.
    *   **Styling:** Privacy/terms links integration and a split-card layout for the account page to match the settings aesthetic.

## 4. Community Hot Topics
Activity is currently driven by user troubleshooting rather than feature requests. The most active item is a new bug report receiving attention due to its severity.
*   **[[#25] Windows11系统，1.7.2版本，发生⚠ 400 [] is too short - 'tools'](https://github.com/gaoyangz77/rivonclaw/issues/25)**: This is the only active discussion in the last 24 hours.
    *   **Analysis:** The user is encountering a hard block during usage (likely related to AI tool definitions being empty). The lack of comments suggests the issue is fresh and potentially untriaged.

## 5. Bugs & Stability
A critical functional error has been reported for the Windows platform.
*   **Severity: High**
    *   **Issue:** **[400 Error: 'tools' is too short/empty]**([#25](https://github.com/gaoyangz77/rivonclaw/issues/25))
    *   **Details:** On Windows 11 (v1.7.2), the AI agent fails to execute commands or chat, returning an error indicating the `tools` array is empty or invalid.
    *   **Impact:** Renders the application unusable for the affected user.
    *   **Status:** Open, no fix PRs detected yet.
*   **Severity: Low (Install)**
    *   **Issue:** macOS Gatekeeper false positive "App is damaged".
    *   **Status:** Addressed in v1.7.3 release notes with a manual Terminal workaround.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were submitted today. However, the merged PRs signal a clear roadmap focus for the next version:
*   **Predicted Focus:** **UX Polish & Retention**. The shift to "Popover" UI and "Auto-register" flows suggests the team is optimizing for user conversion and reducing friction in the login/signup process.
*   **Next Steps:** Likely refinement of these new UI components based on internal testing before wider feature expansion.

## 7. User Feedback Summary
*   **Pain Points:** Users on Windows are experiencing breaks in core functionality (API/Tool calling). The error message `[] is too short - 'tools'` suggests a regression in how the client handles tool definitions or sends payloads to the backend.
*   **Satisfaction:** The immediate release of a fix for the macOS "damaged" file issue shows high responsiveness to deployment friction, which is a positive signal for maintainership, though the Windows issue remains a concern.

## 8. Backlog Watch
*   **[[#25] 400 Error on Windows](https://github.com/gaoyangz77/rivonclaw/issues/25)**: **Immediate Attention Required**. As a new issue created yesterday with 0 comments but high functional impact, this needs maintainer triage to confirm if it's a configuration error or a critical regression in v1.7.2/3.

</details>