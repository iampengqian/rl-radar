# OpenClaw Ecosystem Digest 2026-03-19

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-03-18 22:05 UTC

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

# OpenClaw Project Digest — 2026-03-19

## 1. Today's Overview
OpenClaw is experiencing **extremely high community activity**, with 500 issues and 500 PRs updated in the last 24 hours alone, indicating a rapidly growing user base actively testing edge features. The project is in an active development phase with no new stable releases today, but significant work is flowing through the PR pipeline across agents, hooks, channel integrations, and UI components. The open issue count (455 active vs 45 closed) suggests the community is surfacing bugs faster than they're being resolved—a typical pattern for fast-moving AI agent frameworks. Security awareness is heightened due to an active phishing scam exploiting the project's name.

---

## 2. Releases
**No new releases** were published today. The last activity suggests development is focused on the upcoming release, with multiple significant PRs in the review/merge pipeline.

---

## 3. Project Progress

### Key PRs Advancing Features:

| PR | Type | Summary |
|----|------|---------|
| [#50033](https://github.com/openclaw/openclaw/pull/50033) | Feature | Adds **Parallel** as web search and fetch extract provider - LLM-optimized search API |
| [#44408](https://github.com/openclaw/openclaw/pull/44408) | Feature | Adds **Morph** as bundled compaction provider plugin (33k tok/s) with pluggable registry |
| [#45510](https://github.com/openclaw/openclaw/pull/45510) | Feature | Adds `codebase_search` tool powered by Morph's WarpGrep SDK |
| [#39206](https://github.com/openclaw/openclaw/pull/39206) | Feature | Adds `before_llm_call` + `after_llm_call` plugin hooks for policy interception |
| [#39207](https://github.com/openclaw/openclaw/pull/39207) | Feature | Adds `before_response_emit` hook for output policies |
| [#33915](https://github.com/openclaw/openclaw/pull/33915) | Feature | Adds `context_assembled`, `loop_iteration_start/end` observability hooks |
| [#38161](https://github.com/openclaw/openclaw/pull/38161) | Feature | `postHookActions` mechanism with `blockSessionSave`/`sessionSaveContent` |
| [#42933](https://github.com/openclaw/openclaw/pull/42933) | Feature | Session-level circuit breaker (pause after N consecutive model errors) |
| [#41945](https://github.com/openclaw/openclaw/pull/41945) | Feature | `agentCommand` config option for custom ACP agents in ACPX plugin |

### Bug Fixes & Improvements:
| PR | Type | Summary |
|----|------|---------|
| [#50005](https://github.com/openclaw/openclaw/pull/50005) | Bug Fix | Sanitizes malformed replay tool calls preventing crashes |
| [#46707](https://github.com/openclaw/openclaw/pull/46707) | Bug Fix | Replaces marked.js with markdown-it to fix **ReDoS UI freeze** |
| [#40866](https://github.com/openclaw/openclaw/pull/40866) | Bug Fix | Clears stale Telegram drafts on `forceNewMessage` |
| [#33845](https://github.com/openclaw/openclaw/pull/33845) | Bug Fix | Persists Slack thread participation cache across gateway restarts |
| [#50028](https://github.com/openclaw/openclaw/pull/50028) | Bug Fix | Classifies invalid-model fallback errors correctly |
| [#49947](https://github.com/openclaw/openclaw/pull/49947) | Bug Fix | Honors configured remote batch timeout for memory indexing |
| [#45876](https://github.com/openclaw/openclaw/pull/45876) | Bug Fix | Recognizes `GOOGLE_CLOUD_API_KEY` for google-vertex provider auth |

---

## 4. Community Hot Topics

### Most Discussed Issues:

| Issue | Comments | 👍 | Topic Analysis |
|-------|----------|----|----|
| [#3460 - i18n & Localization](https://github.com/openclaw/openclaw/issues/3460) | 103 | 4 | **Strong global expansion demand**. Maintainers acknowledge lack of bandwidth. Community actively submitting PRs. High-priority for adoption growth. |
| [#75 - Linux/Windows Apps](https://github.com/openclaw/openclaw/issues/75) | 41 | 63 | **Platform parity request**. macOS/iOS/Android exist; Linux/Windows desktop apps missing. High community demand (63 👍). |
| [#49836 - Security: Phishing Scam](https://github.com/openclaw/openclaw/issues/49836) | 27 | 16 | **Active security threat**. Fake repo `Scalarterlight/0penC...` impersonating OpenClaw for wallet phishing. Needs official warning/banner. |
| [#37757 - System Prompt Typo](https://github.com/openclaw/openclaw/issues/37757) | 23 | 0 | Cosmetic: `IDENTITITY.md` vs `IDENTITY.md`. Low impact but visibility issue. |
| [#23538 - Anthropic Auth 401](https://github.com/openclaw/openclaw/issues/23538) | 21 | 0 | Auth token accepted but runtime calls fail. Isolated profile repro suggests config/state bug. |

### Underlying Community Needs:
1. **Global accessibility** — i18n is the #1 discussed issue
2. **Desktop parity** — Windows/Linux users feel underserved
3. **Trust/security** — phishing attack exploiting OpenClaw's reputation
4. **Auth reliability** — multiple provider auth issues (Anthropic, Google Vertex, MiniMax)
5. **Observability & control** — hooks and policy frameworks are major PR themes

---

## 5. Bugs & Stability

### Critical (Crash/Data Loss):
| Issue | Severity | Description | Fix Status |
|-------|----------|-------------|------------|
| [#48205](https://github.com/openclaw/openclaw/issues/48205) | 🔴 Critical | Gateway restarts every ~50 min with "reason=none" | Open |
| [#3181](https://github.com/openclaw/openclaw/issues/3181) | 🔴 Critical | Runaway heartbeat loop causes excessive CPU/cost | Open |
| [#48400](https://github.com/openclaw/openclaw/issues/48400) | 🔴 Critical | Session JSONL loses tool call entries after retry | Open |
| [#6156](https://github.com/openclaw/openclaw/issues/6156) | 🔴 Critical | macOS Gateway never becomes ready (setup stuck) | Open |
| [#8619](https://github.com/openclaw/openclaw/issues/8619) | 🔴 Critical | Gateway install fails: launchctl bootstrap error | Open |

### High (Regression/Feature Broken):
| Issue | Severity | Description | Fix Status |
|-------|----------|-------------|------------|
| [#34741](https://github.com/openclaw/openclaw/issues/34741) | 🟠 High | WhatsApp mid-session desync (v2026.3.2 regression) | Open |
| [#45772](https://github.com/openclaw/openclaw/issues/45772) | 🟠 High | Gateway heartbeat timer stops after 1-2 triggers (v2026.3.8) | Open |
| [#40396](https://github.com/openclaw/openclaw/issues/40396) | 🟠 High | Infinite loop after upgrading to 2026.3.7 | **Closed** (fixed) |
| [#25215](https://github.com/openclaw/openclaw/issues/25215) | 🟠 High | `web_fetch` SSRF blocks Clash/mihomo fake-ip range | Open |
| [#23452](https://github.com/openclaw/openclaw/issues/23452) | 🟠 High | Vision/image recognition broken across Discord/Telegram | Open |

### Medium (Auth/Behavior Issues):
| Issue | Description | Fix Status |
|-------|-------------|------------|
| [#49191](https://github.com/openclaw/openclaw/issues/49191) | Google Vertex ADC auth passes `<authenticated>` as literal key | PR [#45876](https://github.com/openclaw/openclaw/pull/45876) addresses part |
| [#49226](https://github.com/openclaw/openclaw/issues/49226) | Google Gemini CLI auth fails for personal OAuth | Open |
| [#44851](https://github.com/openclaw/openclaw/issues/44851) | Kimi web_search 401 auth error (Chat API works) | Open |
| [#48527](https://github.com/openclaw/openclaw/issues/48527) | GitHub Copilot provider returns 421 Misdirected Request | Open |

### Notable Fixes in Progress:
- **ReDoS UI freeze** — PR [#46707](https://github.com/openclaw/openclaw/pull/46707) replaces regex-based marked.js with state-machine markdown-it
- **Malformed replay crash** — PR [#50005](https://github.com/openclaw/openclaw/pull/50005) sanitizes tool calls

---

## 6. Feature Requests & Roadmap Signals

### Highly Requested Features:
| Issue | 👍 | Request | Likelihood |
|-------|----|---------|-----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | 63 | Linux/Windows desktop apps | **Medium** — help-wanted tag, community contribution likely |
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | 4 | i18n/Localization | **Low short-term** — maintainer bandwidth limited |
| [#29053](https://github.com/openclaw/openclaw/issues/29053) | 7 | MCP Client native support | **High** — industry standard, PRs advancing hooks infrastructure |

### Active Development Signals (Next Release Predictions):
1. **Plugin/Hooks System Expansion** — Multiple large PRs adding `before_llm_call`, `after_llm_call`, `before_response_emit`, observability hooks
2. **Compaction Providers** — Morph integration ([#44408](https://github.com/openclaw/openclaw/pull/44408), [#45510](https://github.com/openclaw/openclaw/pull/45510)) suggests priority on context management
3. **Web Search Expansion** — Parallel provider ([#50033](https://github.com/openclaw/openclaw/pull/50033)) nearing merge
4. **Session Resilience** — Circuit breaker ([#42933](https://github.com/openclaw/openclaw/pull/42933)) addressing runaway error loops
5. **External Memory API** — Feature request [#49233](https://github.com/openclaw/openclaw/issues/49233) for zero-downtime compaction

---

## 7. User Feedback Summary

### Pain Points:
1. **Gateway Stability** — Frequent reports of restarts, crashes, handshake failures
2. **Auth Fragility** — Multiple providers (Anthropic, Google Vertex, MiniMax, Kimi, GitHub Copilot) have auth issues
3. **Channel Desync** — WhatsApp, Telegram, Slack all have session/connection issues
4. **Installation Friction** — npm install failures, Docker setup issues, macOS setup wizard hangs
5. **Token Consumption** — Claude models showing unexpectedly high usage ([#2868](https://github.com/openclaw/openclaw/issues/2868))

### Positive Signals:
- Strong engagement on hooks/plugin extensibility
- Active community submitting i18n PRs
- High-quality bug reports with reproduction steps
- Security-conscious community reporting phishing quickly

### Use Cases Emerging:
- Multi-agent fleets with Telegram bots
- Subagent spawning for complex workflows
- Voice wake-word integration (Brabble/Clawdis)
- Codebase semantic search via Morph

---

## 8. Backlog Watch

### Long-Standing Issues Needing Attention:

| Issue | Age | Impact | Status |
|-------|-----|--------|--------|
| [#3460 - i18n](https://github.com/openclaw/openclaw/issues/3460) | ~50 days | 103 comments, global adoption blocker | Acknowledged, no bandwidth |
| [#75 - Linux/Windows Apps](https://github.com/openclaw/openclaw/issues/75) | ~77 days | 63 👍, platform gap | help-wanted, no maintainer response |
| [#21154 - IRC Duplicate Connections](https://github.com/openclaw/openclaw/issues/21154) | ~27 days | 11 comments, stale | No response |
| [#19819 - Windows SIGUSR1 Crash](https://github.com/openclaw/openclaw/issues/19819) | ~28 days | Windows support broken | Stale |
| [#22278 - JSON Schema Publication](https://github.com/openclaw/openclaw/issues/22278) | ~26 days | 8 comments, config validation | Stale |
| [#20987 - FTS5 Unavailable on Node 22+](https://github.com/openclaw/openclaw/issues/20987) | ~27 days | Memory search degraded | No response |

### PRs Awaiting Review:
| PR | Size | Impact | Days Open |
|----|------|--------|-----------|
| [#33915 - Observability Hooks](https://github.com/openclaw/openclaw/pull/33915) | M | Plugin ecosystem enablement | ~14 |
| [#39206 - LLM Call Hooks](https://github.com/openclaw/openclaw/pull/39206) | XL | Policy/governance capabilities | ~11 |
| [#44408 - Morph Compaction](https://github.com/openclaw/openclaw/pull/44408) | L | Performance critical feature | ~7 |

---

**Summary**: OpenClaw is experiencing rapid growth with active development on extensibility (hooks/plugins), performance (compaction providers), and search integration. The primary concerns are gateway stability, authentication reliability across providers, and platform parity. The phishing attack ([#49836](https://github.com/openclaw/openclaw/issues/49836)) warrants immediate community notification.

---

## Cross-Ecosystem Comparison

# Cross-Project Analysis Report: AI Agent Ecosystem — 2026-03-19

---

## 1. Ecosystem Overview

The open-source personal AI assistant landscape is experiencing a **fragmented high-velocity expansion**, with projects diverging into three distinct tiers: platform frameworks (OpenClaw, Zeroclaw, PicoClaw), specialized lightweight agents (NanoBot, NanoClaw, TinyAGI), and domain-specific implementations (IronClaw for enterprise, LobsterAI for enterprise IM integration). A clear **convergence toward production readiness** is evident across all projects, with security hardening, observability tooling, and multi-model support dominating development priorities. The ecosystem shows **active user adoption growing faster than maintainer bandwidth**, with common pain points around gateway stability, authentication fragility, and configuration complexity emerging universally.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score* | Primary Focus |
|---------|-------------|-----------|----------|---------------|---------------|
| **OpenClaw** | 500 | 500 | 0 | ⚠️ 6.5/10 | Extensibility (hooks/plugins), search integration |
| **Zeroclaw** | 36 | 50 | 10 (v0.5.0 stable) | ✅ 8.0/10 | Autonomous skills, channel expansion |
| **NanoBot** | 32 | 63 | 0 | ⚠️ 6.0/10 | Security, observability, multi-tenancy |
| **PicoClaw** | 89 PRs (39 merged) | 89 | 1 nightly | ✅ 7.5/10 | Agent refactor, configuration hot-reload |
| **NanoClaw** | 25 | 50 | 0 | ⚠️ 5.5/10 | Containerization, security, skills ecosystem |
| **IronClaw** | 48 | 50 | 0 | ✅ 7.0/10 | Enterprise reliability, fault injection |
| **LobsterAI** | 10+ | 10 | 0 | ✅ 7.5/10 | OpenClaw runtime integration, stability |
| **TinyAGI** | 0 | 16 (13 merged) | 1 (v0.0.15) | ✅ 8.0/10 | Rebranding, one-line installer, memory system |
| **CoPaw** | 50 | 50 | 1 (v0.1.0-beta.3) | ⚠️ 6.0/10 | Multimodal support, local-first |
| **Moltis** | 2 active | 1 | 0 | ⚠️ 5.0/10 | Maintenance mode, provider stability |
| **ZeptoClaw** | 3 | 2 | 0 | ⚠️ 5.5/10 | Architecture debates, security isolation |
| **EasyClaw** | 4 closed | 0 merged | 2 (v1.7.0/1.7.1) | ⚠️ 6.0/10 | Windows/macOS deployment fixes |

*Health Score based on: issue resolution ratio, release cadence, critical bug density, and community engagement quality.

---

## 3. OpenClaw's Position

### Advantages vs Peers
| Dimension | OpenClaw | Peer Comparison |
|-----------|----------|-----------------|
| **Scale** | 500 issues/PRs daily — 10x most peers | Largest community by volume |
| **Extensibility** | Mature hooks system (`before_llm_call`, `after_response_emit`) | Zeroclaw and NanoBot actively building similar frameworks |
| **Search Integration** | Parallel (LLM-optimized), Morph (33k tok/s compaction) | Most projects lack native search providers |
| **Channel Support** | Discord, Telegram, Slack, WhatsApp (native) | PicoClaw adding Feishu/Google Chat; LobsterAI NIM-only |

### Technical Approach Differences
- **Hook-centric architecture**: OpenClaw's plugin system (PRs #39206, #39207, #33915) is more granular than peers, enabling policy interception at every lifecycle stage. Zeroclaw and NanoBot are playing catch-up.
- **Compaction-first**: Morph integration (#44408, #45510) positions OpenClaw as the leader in context management — a critical differentiator as context windows grow.
- **Multi-gateway vs single-binary**: Unlike NanoBot/TinyAGI's single-binary approach, OpenClaw uses a gateway architecture that adds complexity but enables multi-channel federation.

### Community Size Comparison
| Project | Approx. Active Users (inferred) | Contributor Velocity |
|---------|--------------------------------|---------------------|
| OpenClaw | ~10,000+ | 500 daily interactions |
| Zeroclaw | ~3,000 | High-quality, security-conscious |
| NanoBot/PicoClaw | ~1,500 each | Moderate, feature-focused |
| TinyAGI | ~500 | Rapid growth, rebranding influx |

**Gap Analysis**: OpenClaw's scale is both an advantage and a liability. Bug surface area (455 open issues) exceeds peers 10:1, and maintainer bandwidth is visibly strained (i18n issue #3460 at 103 comments with no progress).

---

## 4. Shared Technical Focus Areas

### Requirements Emerging Across Multiple Projects:

| Focus Area | Projects Affected | Specific Needs |
|------------|-------------------|----------------|
| **Security Hardening** | NanoBot (#2212, #2218), NanoClaw (#1149), Zeroclaw (#1478), IronClaw (#1287, #1366) | Secret management (`{env:VAR}`), formal disclosure protocols, permissive modes |
| **Observability & Tracing** | NanoBot (#2154, #2189), PicoClaw (#1731), IronClaw (#1361), OpenClaw (#33915) | Langfuse integration, OpenTelemetry, LLM trace IDs |
| **Session/State Resilience** | OpenClaw (#48400), NanoClaw (#1216), NanoBot (#2219), Zeroclaw (#3838) | Incremental saves, circuit breakers, crash recovery |
| **Multi-Model Support** | IronClaw (#1242, #1299, #1356), NanoBot (#1991), NanoClaw (#1163), CoPaw (#1782) | Runtime model switching, provider abstraction, vLLM/OpenCode integration |
| **Authentication Reliability** | OpenClaw (#23538, #49191), Moltis (#261), CoPaw (#1782) | OAuth flows, ADC auth, provider-specific token handling |
| **Channel Desync** | OpenClaw (#34741, #40396), LobsterAI (#490) | WhatsApp mid-session, Slack thread persistence, gateway restart recovery |
| **Localization (i18n)** | OpenClaw (#3460), Zeroclaw (#3912), CoPaw (#1772), EasyClaw (#21) | Community translation pipelines, tool description externalization |

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target User | Technical Architecture |
|---------|--------------|-------------|------------------------|
| **OpenClaw** | Extensibility, search, multi-channel | Power users, integration teams | Gateway + plugin architecture |
| **Zeroclaw** | Autonomous skill creation, security-first | Privacy-conscious, local-first | Daemon-mode, security sandboxing |
| **NanoBot** | Lightweight multi-platform bots | Hobbyists, Telegram/WhatsApp users | Single-binary, minimal deps |
| **PicoClaw** | Enterprise IM integration, hot-reload | Chinese enterprise (Feishu, NIM) | Agent refactor with SOUL.md personality |
| **NanoClaw** | Containerization, skills ecosystem | Docker-native deployments | Three-root path model, sibling containers |
| **IronClaw** | Mars-rover reliability, fault injection | Enterprise production | Rust core, CI hardening |
| **LobsterAI** | NetEase ecosystem, scheduled tasks | Chinese SMB market | OpenClaw runtime adapter |
| **TinyAGI** | Multi-agent teams, memory hierarchy | Research, autonomous agent devs | Flat DM model, hierarchical memory |
| **CoPaw** | Multimodal, local-first | Privacy-focused individuals | Local embeddings, file-centric |
| **Moltis** | Web scraping robustness | Maintained users | Stable but inactive |
| **ZeptoClaw** | Micro-VM isolation | Security-critical deployments | Firecracker-based sandboxing |
| **EasyClaw** | Desktop client simplicity | Non-technical users | GUI-first, multi-platform |

---

## 6. Community Momentum & Maturity

### Activity Tiers:

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Tier 1: Hypergrowth** | OpenClaw | 500+ daily interactions, struggling to scale maintainership, high bug volume |
| **Tier 2: Rapid Iteration** | Zeroclaw, PicoClaw, NanoBot, NanoClaw, IronClaw, CoPaw | 30-50 daily interactions, focused roadmaps, active contributor base |
| **Tier 3: Stabilization** | LobsterAI, TinyAGI | Merging fixes, preparing releases, clear product direction |
| **Tier 4: Maintenance** | Moltis, ZeptoClaw, EasyClaw | Low activity, community-driven fixes, awaiting maintainer engagement |

### Momentum Indicators:

**Accelerating**: Zeroclaw (v0.5.0 milestone), TinyAGI (rebrand complete, installer shipped), PicoClaw (Agent refactor progressing)

**Stabilizing**: IronClaw (hardening phase), LobsterAI (OpenClaw integration maturing)

**At Risk**: Moltis (stale releases, unresolved provider issues), NanoBot (regression bugs in .post5 releases), OpenClaw (issue backlog growing faster than resolution)

---

## 7. Trend Signals

### Industry Trends Extracted:

| Trend | Evidence | Implication for Developers |
|-------|----------|---------------------------|
| **Security vs Usability Tension** | Zeroclaw #1478 (41 comments), OpenClaw phishing #49836, NanoClaw #1149 | Users demand "unrestricted mode" toggles; security defaults must be configurable, not absolute |
| **Provider Abstraction** | IronClaw adding Mistral/Aliyun/Gemini; NanoClaw vLLM/OpenCode requests; CoPaw local embeddings | Build provider interfaces early; vendor lock-in is a top adoption barrier |
| **Observability as Feature** | Langfuse/OTel requests in 4+ projects; OpenClaw hooks framework | Instrumentation hooks are now table stakes for production agents |
| **Context Management Crisis** | OpenClaw Morph (33k tok/s), LobsterAI context visibility requests, TinyAGI hierarchical memory | Token efficiency and compression are competitive differentiators |
| **Desktop Parity Demand** | OpenClaw #75 (63 👍 for Linux/Windows), EasyClaw Windows regression | Mobile-first is insufficient; desktop apps remain essential for power users |
| **Phishing/Trust Exploitation** | OpenClaw #49836 (fake repo wallet phishing) | Brand protection and official channel verification are now ecosystem responsibilities |
| **Daemon/Service Mode** | Zeroclaw daemon crashes, LobsterAI gateway restarts, NanoClaw container isolation | Long-running agents require fundamentally different architecture than REPL-style tools |

### Strategic Recommendations:

1. **For OpenClaw maintainers**: Prioritize gateway stability (#48205, #6156) and i18n (#3460) — these are adoption blockers.
2. **For ecosystem developers**: Hook/plugin systems (OpenClaw #39206, NanoBot #1934) represent standardization opportunities — consider cross-project compatibility.
3. **For security teams**: Formalize disclosure protocols (NanoClaw #1149 gap) before vulnerabilities become public incidents.
4. **For enterprise adopters**: IronClaw's fault injection framework and Zeroclaw's security sandboxing represent the maturity tier for production workloads.

---

**Summary**: The AI agent ecosystem is consolidating around three pillars — **extensibility** (hooks/plugins), **resilience** (session management, fault tolerance), and **multi-model flexibility**. OpenClaw leads in scale and extensibility but faces scalability challenges. Zeroclaw and IronClaw represent the enterprise-grade path. Lightweight projects (NanoBot, TinyAGI) are winning developer mindshare with simplicity. The universal tension between security defaults and user autonomy suggests configurable "trust levels" will become a standard feature.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-03-19

## 1. Today's Overview
NanoBot demonstrates **high velocity development activity** with 63 pull requests updated and 32 issues processed in the last 24 hours. The project is currently in an active iteration phase with strong community engagement, particularly around extensibility and integration features. Significant attention is being paid to security enhancements and observability tooling. With 41 open PRs against 22 merged/closed, the maintainers are managing a substantial incoming contribution pipeline. No new stable releases were published today, suggesting work is accumulating for a future milestone.

## 2. Releases
**No new releases** were published today. The community is actively reporting issues against the latest stable versions (`v0.1.4.post5` / `v1.0.4post5`), while development efforts appear focused on the `nightly` branch and feature merges.

## 3. Project Progress
Today's merged/closed PRs (22 total) focused primarily on **bug fixes, documentation, and configuration stability**:
- **Configuration & Documentation:** [PR #418](https://github.com/HKUDS/nanobot/pull/418) added guidance for OpenAI-compatible endpoints, and [PR #424](https://github.com/HKUDS/nanobot/pull/424) fixed `extraHeaders` key casing preservation.
- **Repository Maintenance:** [PR #396](https://github.com/HKUDS/nanobot/pull/396) resolved a long-standing `.gitignore` issue blocking new test files.
- **Active Development:** Key features advancing in open PRs include a comprehensive **Speech System** ([PR #819](https://github.com/HKUDS/nanobot/pull/819)), **streaming tool use UI** ([PR #817](https://github.com/HKUDS/nanobot/pull/817)), and **event-driven hooks** ([PR #1934](https://github.com/HKUDS/nanobot/pull/1934)).

## 4. Community Hot Topics
The most engaged discussions highlight user needs for **model flexibility, observability, and multi-tenancy**:
- **Infinite Loop Bug ([#1240](https://github.com/HKUDS/nanobot/issues/1240), 13 comments):** Users running local models (Llama 3.3 70B) are experiencing stuck response loops, highlighting stability challenges with non-standard providers.
- **Dependency Bloat ([#660](https://github.com/HKUDS/nanobot/issues/660), 9 comments, 4 👍):** A popular debate on whether Node.js is necessary for an "ultra-lightweight" assistant, reflecting strong user preference for minimal Docker images.
- **Multi-Configuration Profiles ([#1991](https://github.com/HKUDS/nanobot/issues/1991), 8 comments):** High demand for easily switching between models/configs without editing files manually.
- **Observability & Tracing ([#2154](https://github.com/HKUDS/nanobot/issues/2154), [#2189](https://github.com/HKUDS/nanobot/issues/2189)):** Users are actively requesting LLM trace IDs and Langfuse integration for debugging production issues.
- **Interactive Onboarding ([#2018](https://github.com/HKUDS/nanobot/issues/2018)):** Positive feedback on the new `nanobot onboard` wizard for simplifying configuration.

## 5. Bugs & Stability
Several **regressions and stability issues** were reported following the recent post-release updates:
- **Critical: Message Duplication ([#2208](https://github.com/HKUDS/nanobot/issues/2208)):** Upgrading to `v1.0.4post5` causes duplicate messages on Telegram Android. **No fix PR yet.**
- **High: Functionality Breaking ([#2141](https://github.com/HKUDS/nanobot/issues/2141)):** Voice transcription stopped working after upgrading to `v0.1.4.post5`.
- **High: Provider Breaking ([#2185](https://github.com/HKUDS/nanobot/issues/2185)):** The upgrade breaks usage of `gemini-3-flash-preview` via LiteLLM.
- **Medium: Anthropic Provider ([#2200](https://github.com/HKUDS/nanobot/issues/2200)):** Sudden failures calling Anthropic models via LiteLLM.
- **Fix Available:** [PR #2230](https://github.com/HKUDS/nanobot/pull/2230) addresses a `TypeError` affecting MCP tools with nullable parameters.

## 6. Feature Requests & Roadmap Signals
Strong signals indicate the next version may focus on **security, resilience, and UI**:
- **Security:** Requests for **secret management** (avoiding plaintext in config) are being actively addressed in [PR #2212](https://github.com/HKUDS/nanobot/pull/2212) and [PR #2218](https://github.com/HKUDS/nanobot/pull/2218) (`{env:VAR}` syntax). [PR #2225](https://github.com/HKUDS/nanobot/pull/2225) proposes stricter file permissions.
- **Resilience:** [PR #2219](https://github.com/HKUDS/nanobot/pull/2219) implements incremental session saving to prevent data loss during crashes.
- **UI & Dashboards:** A community member developed a full **Web Dashboard** ([#2213](https://github.com/HKUDS/nanobot/issues/2213)) and proposed merging it.
- **Hooks System:** [PR #1934](https://github.com/HKUDS/nanobot/pull/1934) suggests a formal event-driven hook system for lifecycle customization.

## 7. User Feedback Summary
Users are adopting NanoBot for **diverse IM platforms** (Telegram, WhatsApp, QQ) and **local LLMs**, but face friction with configuration complexity and stability:
- **Pain Points:** Editing `config.json` manually is error-prone; users want profile switching and interactive wizards. The "ultra-lightweight" claim is being questioned due to heavy dependencies.
- **Use Cases:** Running bots in network-isolated environments, using custom OpenAI-compatible endpoints, and managing multi-tenant data isolation.
- **Satisfaction:** Enthusiasm is high for features like the onboarding wizard and proposed hooks, but tempered by regression bugs in `.post5` releases.

## 8. Backlog Watch
- **[PR #819](https://github.com/HKUDS/nanobot/pull/819) (Speech System) & [PR #817](https://github.com/HKUDS/nanobot/pull/817) (Streaming):** These large feature PRs have been open since Feb 2026. They need review to unblock major voice/text UX improvements.
- **[Issue #660](https://github.com/HKUDS/nanobot/issues/660) (Node.js Dependency):** This debate needs a definitive maintainer response regarding the roadmap for dependency reduction.
- **[Issue #2102](https://github.com/HKUDS/nanobot/issues/2102) (Multi-tenant Isolation):** A critical enterprise feature request that hasn't seen recent maintainer engagement.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest: 2026-03-19

## 1. Today's Overview

Zeroclaw demonstrates **exceptionally high development velocity** with the release of **v0.5.0**, marking a significant milestone. The project saw 10 releases (including betas) in the last 24 hours, alongside 50 updated PRs (60% merge/close rate) and 36 active issues. The v0.5.0 release introduces major architectural enhancements, including autonomous skill creation, runtime model switching, and expanded channel adapters (Reddit, Bluesky). However, the rapid release cadence and volume of bug fixes suggest stability consolidation is ongoing, with several high-priority regressions identified in daemon and channel components.

---

## 2. Releases

### **v0.5.0** (Stable Release)
**Major Feature Drop** — This release consolidates months of beta iterations into a stable production release.

**Key Additions:**
- **Channel Adapters**: Native support for Reddit, Bluesky, and generic Webhooks
- **CLI Enhancements**: 
  - `self-test` command with quick/full diagnostic modes
  - `status --format=exit-code` for Docker healthcheck integration
  - `update` command with 6-phase pipeline and automatic rollback
- **CI Optimization**: Pre-built binaries for Docker images (faster deployments)
- **Agent Capabilities**:
  - **Runtime Model Switching** via `model_switch` tool (switch LLMs mid-conversation)
  - **Autonomous Skill Creation**: Agent can persist successful multi-step tasks as reusable `SKILL.toml` definitions
  - **Configurable Sub-Agent Timeouts**: `timeout_secs` and `agentic_timeout_secs` in `config.toml`
- **i18n Foundation**: Externalized tool descriptions for community translation

**Migration Notes:**
- Beta versions v0.5.0-beta.344 through v0.5.0-beta.364 were incremental rollouts leading to this stable release
- No breaking changes flagged, but new config fields require validation (e.g., `challenge_max_attempts` — see Issue #3919)

---

## 3. Project Progress

### Merged/Closed PRs (20 in 24h):
| PR | Category | Summary |
|----|----------|---------|
| [#3916](https://github.com/zeroclaw-labs/zeroclaw/pull/3916) | Feature | **Autonomous skill creation** from multi-step tasks (closes #3825) |
| [#3909](https://github.com/zeroclaw-labs/zeroclaw/pull/3909) | Feature | Configurable delegate timeouts in `config.toml` |
| [#3912](https://github.com/zeroclaw-labs/zeroclaw/pull/3912) | Feature | i18n — externalized tool descriptions |
| [#3915](https://github.com/zeroclaw-labs/zeroclaw/pull/3915) | Bug Fix | Ensured `SOUL.md`/`IDENTITY.md` exist in non-TTY sessions (closes #3819) |
| [#3910](https://github.com/zeroclaw-labs/zeroclaw/pull/3910) | Critical Fix | **Fixed infinite self-correction loops** by resetting tool call dedup cache per iteration (fixes #3798) |
| [#3906](https://github.com/zeroclaw-labs/zeroclaw/pull/3906) | Bug Fix | Install script now creates `config.toml` with `--skip-build` flag |
| [#3905](https://github.com/zeroclaw-labs/zeroclaw/pull/3905) | Bug Fix | Fixed `cron_add` schedule parsing for stringified JSON inputs |
| [#3907](https://github.com/zeroclaw-labs/zeroclaw/pull/3907) | Bug Fix | Enabled vision support for `llamacpp` provider |
| [#3903](https://github.com/zeroclaw-labs/zeroclaw/pull/3903) | Test Fix | Eliminated race condition in `claude_code` provider tests |
| [#3913](https://github.com/zeroclaw-labs/zeroclaw/pull/3913) | Bug Fix | Respected `ack_reactions` config for Telegram channel |
| [#3904](https://github.com/zeroclaw-labs/zeroclaw/pull/3904) | Install Fix | Cleaned stale build cache on upgrade (libsqlite3-sys bindgen fix) |

### Open PRs Advancing (30 active):
- **Multi-channel interrupt support**: Matrix (#3895), Discord (#3918), Mattermost (#3917) gaining `/stop` and `interrupt_on_new_message` features
- **Alibaba Coding Plan provider** (#3889) — OpenAI/Anthropic-compatible endpoint support
- **Claude Code provider upgrade** (#3911) — Full agent mode with autonomous tool use

---

## 4. Community Hot Topics

| Issue/PR | Engagement | Core Theme |
|----------|------------|------------|
| [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) | **41 comments**, 5 👍 | **Security vs. Usability Tension** — User frustration that strict security defaults block even basic operations (e.g., installing ffmpeg). Calls for "unrestricted mode" toggle for local/personal use cases. |
| [#3537](https://github.com/zeroclaw-labs/zeroclaw/issues/3537) | 7 comments | **ARM64 Stability** — Silent daemon crashes on Raspberry Pi 4; regression from v0.2.1-beta.186 onwards. |
| [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) | 5 comments | **NapCat/OneBot Channel Request** — Users want QQ/OneBot protocol integration for Chinese messaging ecosystem. |
| [#3818](https://github.com/zeroclaw-labs/zeroclaw/issues/3818) | 1 comment, 1 👍 | **Feature Regression** — Lost security params, Copilot provider, and `task_plan` tool during `main` → `master` migration. |

**Analysis:** The #1478 thread reveals a **core persona conflict**: power users want "unlocked" local agents, while the project defaults to security-first. This signals demand for a `--developer-mode` or `security.permissive = true` flag.

---

## 5. Bugs & Stability

**Critical (S0-S1):**
| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| [#3537](https://github.com/zeroclaw-labs/zeroclaw/issues/3537) - Silent daemon crash on ARM64 | S0 (data loss) | OPEN | ❌ None yet |
| [#3838](https://github.com/zeroclaw-labs/zeroclaw/issues/3838) - Route-specific API keys dropped in Channel/Agent mode | S1 | CLOSED | ✅ Merged |
| [#3798](https://github.com/zeroclaw-labs/zeroclaw/issues/3798) - Infinite self-correction loop | S1 | CLOSED | ✅ [#3910](https://github.com/zeroclaw-labs/zeroclaw/pull/3910) |
| [#3826](https://github.com/zeroclaw-labs/zeroclaw/issues/3826) - Deferred MCP tools never activated in daemon/Telegram | S1 | CLOSED | ✅ Merged |

**Moderate (S2):**
| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| [#3802](https://github.com/zeroclaw-labs/zeroclaw/issues/3802) - Image transfer fails from Telegram with llamacpp | S2 | CLOSED | ✅ [#3907](https://github.com/zeroclaw-labs/zeroclaw/pull/3907) |
| [#3845](https://github.com/zeroclaw-labs/zeroclaw/issues/3845) - `/new` doesn't refresh skills in long-running channels | S2 | OPEN | ❌ None yet |
| [#3819](https://github.com/zeroclaw-labs/zeroclaw/issues/3819) - `SOUL.md` not loaded in non-TTY sessions | S2 | CLOSED | ✅ [#3915](https://github.com/zeroclaw-labs/zeroclaw/pull/3915) |
| [#3868](https://github.com/zeroclaw-labs/zeroclaw/issues/3868) - One-shot cron jobs re-execute indefinitely | S2 | CLOSED | ✅ Merged |

**Minor (S3):**
- [#3919](https://github.com/zeroclaw-labs/zeroclaw/issues/3919) - `zeroclaw config schema` fails on `challenge_max_attempts` parsing | Fix: [#3921](https://github.com/zeroclaw-labs/zeroclaw/pull/3921) (OPEN)

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood | Rationale |
|---------|-------|------------|-----------|
| **Permissive Security Mode** | [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) | 🔴 Low | Maintainers emphasize security posture; may require community PR |
| **NapCat/OneBot Channel** | [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) | 🟡 Medium | Consistent user demand for Chinese platform integrations |
| **Cross-channel TOTP Gate** | [#3767](https://github.com/zeroclaw-labs/zeroclaw/issues/3767) | 🟢 High | Aligns with security roadmap; detailed spec provided |
| **Token Efficiency Analyzer** | [#3892](https://github.com/zeroclaw-labs/zeroclaw/issues/3892) | 🟡 Medium | Addresses core context bloat issue; needs architectural RFC |
| **Slack Thread Replies Toggle** | [#3888](https://github.com/zeroclaw-labs/zeroclaw/issues/3888) | 🟢 High | Parity with Mattermost; low complexity |
| **Alibaba Coding Plan Provider** | [#3882](https://github.com/zeroclaw-labs/zeroclaw/issues/3882) | 🟢 High | PR [#3889](https://github.com/zeroclaw-labs/zeroclaw/pull/3889) already open |
| **Amazon Bedrock Integration** | [#3887](https://github.com/zeroclaw-labs/zeroclaw/issues/3887) | 🟡 Medium | Enterprise demand signal; may require AWS SDK dependency |

---

## 7. User Feedback Summary

**Pain Points:**
1. **Security Overreach**: Users report inability to perform basic operations (install packages, shell commands) even with all security configs "opened" (#1478, #3765). Sentiment: "Just a chatbot if everything is blocked."
2. **Configuration Complexity**: Transition from OpenClaw cited as motivation for adopting ZeroClaw, but security defaults negate simplicity gains.
3. **Documentation Gaps**: Missing `config.toml` on certain install paths (#3852), unclear provider setup for local LLMs (#3894).
4. **Platform Coverage**: Strong demand for Chinese messaging platforms (NapCat/OneBot for QQ) and additional cloud providers (Alibaba, Bedrock).

**Positive Signals:**
- Appreciation for `self-test` and `update` CLI commands — operational UX is improving
- Autonomous skill creation feature generating excitement for "learning agents"
- Active maintainer response to bug reports (same-day fixes for several S1 issues)

**Use Case Patterns:**
- Home lab / Raspberry Pi deployments (ARM64 stability critical)
- Multi-channel personal assistants (Telegram + Discord + Matrix)
- Local-first LLM users (llamacpp, llamafile, Ollama alternatives)

---

## 8. Backlog Watch

| Item | Age | Status | Concern |
|------|-----|--------|---------|
| [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) | 24 days | OPEN | **Highest engagement** — Security/usability balance unresolved; risks user churn |
| [#3537](https://github.com/zeroclaw-labs/zeroclaw/issues/3537) | 4 days | OPEN | **ARM64 regression** blocking edge deployments; no maintainer response yet |
| [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) | 17 days | OPEN | Chinese market expansion blocked by missing OneBot adapter |
| [#3845](https://github.com/zeroclaw-labs/zeroclaw/issues/3845) | 1 day | OPEN | Long-running channel skill refresh — impacts daemon-mode reliability |

---

**Digest compiled from 36 issues, 50 PRs, and 10 releases updated within the last 24 hours.**

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-03-19

## 1. Today's Overview
PicoClaw demonstrates **high velocity** development with significant architectural strides in its Agent subsystem. The project is currently navigating a major "Agent Refactor" (meta-issue #1216), aiming to solidify the definition of AI personalities and context management. Activity is robust, with 89 Pull Requests updated (39 merged/closed) and a new nightly build released. The community is highly engaged in shaping the "Soul" of the agent, balancing technical refactoring with new feature demands like TTS/ASR support and enhanced observability.

## 2. Releases
- **nightly**: `v0.2.3-nightly.20260318.513537d2`
  - **Status**: Automated build from `main` branch.
  - **Warning**: Marked as potentially unstable.
  - **Context**: Includes the latest merged code for the Agent refactor and configuration hot-reloading.

## 3. Project Progress
Significant code changes were merged today, focusing on stability, configuration flexibility, and channel support:

-   **Configuration & Stability**:
    -   **API Key Failover** ([PR #1707](https://github.com/sipeed/picoclaw/pull/1707)): Added support for multiple API keys with automatic failover, a critical reliability feature for production usage.
    -   **Session Key Handling** ([PR #1401](https://github.com/sipeed/picoclaw/pull/1401)): Fixed a bug where explicit session keys were overwritten by routing defaults.
    -   **Subagent Tool Registry** ([PR #1711](https://github.com/sipeed/picoclaw/pull/1711)): Fixed a regression where subagents could not find tools due to an empty registry inheritance.
-   **Channel Integrations**:
    -   **Google Chat** ([PR #830](https://github.com/sipeed/picoclaw/pull/830)): Merged support for Google Chat channel.
    -   **Feishu Enhancements** ([PR #800](https://github.com/sipeed/picoclaw/pull/800)): Added message card and streaming support for Feishu.
    -   **LINE Security** ([PR #1428](https://github.com/sipeed/picoclaw/pull/1428)): Added request body size limits to prevent DoS attacks on LINE webhooks.

## 4. Community Hot Topics
Discussion is dominated by the **Agent Refactor** initiative, specifically regarding the definition of the agent's "Self":

1.  **Defining the Agent's Soul** ([Issue #1218](https://github.com/sipeed/picoclaw/issues/1218) - 27 comments):
    The community is actively debating the implementation of `SOUL.md` (personality/values) and `AGENT.md` (structured config). The core discussion revolves around whether `SOUL.md` should be purely freeform natural language or include optional structured schemas for better machine interpretation.
2.  **Audio Support Architecture** ([Issue #1648](https://github.com/sipeed/picoclaw/issues/1648) - 10 comments):
    Users are requesting native Text-to-Speech (TTS) and Automatic Speech Recognition (ASR) integration. The discussion focuses on whether this should be a gateway-level feature or handled via specific provider channels.
3.  **Web UI Progress** ([Issue #806](https://github.com/sipeed/picoclaw/issues/806) - 4 comments, 7 👍):
    There is strong anticipation for the Web UI (currently in refactoring) to lower the entry barrier for non-technical users.

## 5. Bugs & Stability
Several functional bugs were reported, indicating potential regressions in the latest builds:

-   **Critical: Model Switching Broken** ([Issue #1749](https://github.com/sipeed/picoclaw/issues/1749)):
    Users report that the `/switch` command fails to change models correctly in the nightly build.
-   **Critical: Exec Tool Guard Logic Flaw** ([Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)):
    The `restrict_to_workspace` safety feature is triggering false positives on simple commands (like `curl`), blocking legitimate execution due to faulty regex path matching.
-   **High: Reasoning Channel Failure** ([Issue #1746](https://github.com/sipeed/picoclaw/issues/1746)):
    `reasoning_channel_id` is not forwarding "thought processes" to Telegram when using OpenAI-compatible providers.
-   **Medium: Prompt Cache Key Error** ([Issue #1574](https://github.com/sipeed/picoclaw/issues/1574)):
    Users are encountering `prompt_cache_key` errors during setup/configuration.

## 6. Feature Requests & Roadmap Signals
New feature proposals suggest a push toward enterprise readiness and better multi-modal support:

-   **Agent Self-Update** ([Issue #1756](https://github.com/sipeed/picoclaw/issues/1756)): A proposal to allow the agent to rewrite its own `SOUL.md` and `USER.md` files, effectively allowing it to "learn" or change its personality over time.
-   **OTel GenAI Support** ([Issue #1731](https://github.com/sipeed/picoclaw/issues/1731)): Request for OpenTelemetry integration to provide enterprise-grade observability for agent runs.
-   **Exec Tool Enhancement (PTY)** ([Issue #1733](https://github.com/sipeed/picoclaw/issues/1733)): RFC for adding PTY (Pseudo-TTY) support to the exec tool to handle interactive and long-running tasks (e.g., `docker build`).
-   **Cloudflare Bypass** ([PR #1762](https://github.com/sipeed/picoclaw/pull/1762)): Open PR to add anti-bot challenge handling in `web_fetch`.

## 7. User Feedback Summary
Users are actively testing the **Nightly** builds but encountering stability issues typical of active development branches:
-   **Pain Point**: The lack of a Web UI is a recurring theme for users who find the TUI (Terminal UI) limiting.
-   **Pain Point**: Raspberry Pi (ARM) users reported installation issues with the `.deb` package ([Issue #1763](https://github.com/sipeed/picoclaw/issues/1763)).
-   **Positive**: The "Hot Reload" capability for configuration files ([PR #1747](https://github.com/sipeed/picoclaw/pull/1747)) was explicitly noted as a "great quality of life improvement" by users, reducing the need for restarts during tuning.

## 8. Backlog Watch
-   **Context Management** ([Issue #1439](https://github.com/sipeed/picoclaw/issues/1439)): This critical architectural issue (Track 6 of Agent Refactor) regarding context boundaries and compression has been open since March 12 and needs maintainer validation to proceed.
-   **Documentation Gap** ([Issue #1737](https://github.com/sipeed/picoclaw/issues/1737)): Missing documentation for port 18800 (WebSocket) is causing confusion for Launcher mode users; a quick doc update is needed.
-   **Feishu API Limit** ([Issue #1727](https://github.com/sipeed/picoclaw/issues/1727)): A specific bug regarding Markdown table limits in Feishu cards remains unaddressed.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-03-19

## 1. Today's Overview
NanoClaw is experiencing a **high-velocity development phase** characterized by intense community contribution and architectural evolution. The project saw significant activity in the last 24 hours, with 50 updated Pull Requests (38 open) and 25 active Issues, indicating a rapidly expanding scope. The core focus is shifting toward **production readiness**, evidenced by new PRs for containerization, security auditing, and alternative backend support. However, this rapid iteration has introduced **stability growing pains**, with several high-severity bugs emerging regarding session handling and agent synchronization. The ecosystem is rich, with multiple "skills" (plugins) being developed to extend functionality to voice, email, and dashboards.

## 2. Releases
**None.**
No new stable releases were tagged in this period. The high volume of open PRs and architectural changes suggests the project is likely building toward a significant minor or major version bump rather than frequent patch releases.

## 3. Project Progress
Merged and closed activity focused on security hardening and architectural refinements:

*   **Containerization Architecture (Closed PR [#1252](https://github.com/qwibitai/nanoclaw/pull/1252)):** A significant structural change introduced a "three-root path model" (`APP_DIR`, `CONFIG_ROOT`, `DATA_DIR`). This enables NanoClaw itself to run inside Docker while spawning sibling containers, improving isolation and deployment flexibility.
*   **Security Fix (Closed Issue [#865](https://github.com/qwibitai/nanoclaw/issues/865)):** Addressed a high-priority enhancement regarding container trust boundaries. The discussion concluded that scripts should not live at the agent level, likely influencing the path model restructuring in PR #1252.
*   **Security Patch (PR [#1191](https://github.com/qwibitai/nanoclaw/pull/1191)):** A fix for Issue #1150 is under review to stop logging full user prompts during container errors, addressing a data privacy leakage.
*   **New Capabilities (Open PRs):** The ecosystem is expanding with skills for **Local Voice** ([#1250](https://github.com/qwibitai/nanoclaw/pull/1250)), **Email via OpenMail** ([#1251](https://github.com/qwibitai/nanoclaw/pull/1251)), and a **Monitoring Dashboard** ([#1187](https://github.com/qwibitai/nanoclaw/pull/1187)).

## 4. Community Hot Topics
The most engaging discussions center on **compliance, security, and multi-model support**:

1.  **Security Disclosure Protocol ([Issue #1149](https://github.com/qwibitai/nanoclaw/issues/1149)):**
    *   **Activity:** User @mcleo-d identified a security finding but lacks a channel for private disclosure.
    *   **Analysis:** The project needs a formal `SECURITY.md` protocol. Currently, security issues risk being exposed in public trackers before fixes are ready.
2.  **ToS Compliance & Architectural Shift ([Issue #1224](https://github.com/qwibitai/nanoclaw/issues/1224)):**
    *   **Activity:** High-priority discussion on replacing the Agent SDK with Claude Code CLI to mitigate Terms of Service risks.
    *   **Analysis:** Users are concerned about the longevity and legality of the current implementation. This signals a potential major pivot in how the core agent interacts with LLM backends.
3.  **Multi-Model Support ([Issue #1163](https://github.com/qwibitai/nanoclaw/issues/1163)):**
    *   **Activity:** Request to support OpenCode/JS SDK alongside Claude Code (+2 votes).
    *   **Analysis:** Enterprise users want flexibility. They appreciate Claude but often have contracts with other providers, making vendor lock-in a barrier to adoption.

## 5. Bugs & Stability
Several critical bugs have been identified, highlighting issues with state management and updates:

*   **[Critical] Session Persistence Failure ([Issue #1216](https://github.com/qwibitai/nanoclaw/issues/1216)):** Stale Claude Code session IDs in SQLite cause permanent resume failures without auto-recovery. *Impact: High — breaks core "long-running assistant" use case.*
*   **[Critical] Agent Code Desynchronization ([Issue #1236](https://github.com/qwibitai/nanoclaw/issues/1236)):** Updates to the `agent-runner` source do not propagate to existing groups; only new groups get the fixes. *Impact: High — creates "zombie" agents running old code.*
*   **[High] Pipeline Timeouts ([Issue #1242](https://github.com/qwibitai/nanoclaw/issues/1242)):** Defined timeouts are not enforced at runtime, causing pipelines to hang indefinitely. *Fix: Needs a watchdog job.*
*   **[High] User Prompt Leakage ([Issue #1150](https://github.com/qwibitai/nanoclaw/issues/1150)):** Container error logs write full user prompts to disk. *Fix: PR [#1191](https://github.com/qwibitai/nanoclaw/pull/1191) is open and ready for review.*
*   **[Medium] Platform Support Confusion ([Issue #1075](https://github.com/qwibitai/nanoclaw/issues/1075)):** Website lists Linux as supported, but README says "coming soon."

## 6. Feature Requests & Roadmap Signals
User requests indicate a desire for **flexibility, observability, and alternative deployment modes**:

*   **Provider Agnosticism:** Strong signals for vLLM support ([PR #1241](https://github.com/qwibitai/nanoclaw/pull/1241)) and OpenCode integration ([#1163](https://github.com/qwibitai/nanoclaw/issues/1163)). This suggests the next version may abstract the LLM backend.
*   **Credential Management:** Request to use `~/.claude.json` credentials automatically ([Issue #1217](https://github.com/qwibitai/nanoclaw/issues/1217)) to streamline setup.
*   **Session Management:** User demand for a `/new` command to reset context ([Issue #1211](https://github.com/qwibitai/nanoclaw/issues/1211)) without restarting containers.
*   **Telegram Enhancements:** Features to support `message_reaction` ([PR #1246](https://github.com/qwibitai/nanoclaw/pull/1246)) and `reply_to_message` context ([PR #1240](https://github.com/qwibitai/nanoclaw/pull/1240)) are in active development.

## 7. User Feedback Summary
*   **Pain Point - Deployment Complexity:** Users are struggling to deploy in restricted environments (e.g., K8s/Sealos without privileged containers) as noted in [Issue #1184](https://github.com/qwibitai/nanoclaw/issues/1184). They appreciate the "lightweight" pitch but find Docker requirements limiting.
*   **Pain Point - Updates:** The "silent drop" of customized code during updates is a major frustration for power users ([Issue #1135](https://github.com/qwibitai/nanoclaw/issues/1135)).
*   **Positive Sentiment:** The "Skills" system is highly successful. Users are actively extending the platform (Voice, Email, Dashboards) without waiting for core maintainers, validating the extensibility model.
*   **Use Case Expansion:** Users are looking to run this on heterogeneous hardware (Windows/Linux) without Docker ([Issue #1225](https://github.com/qwibitai/nanoclaw/issues/1225)).

## 8. Backlog Watch
*   **[Action Required] Private Security Channel:** Maintainers must immediately address [Issue #1149](https://github.com/qwibitai/nanoclaw/issues/1149) by providing a security contact (e.g., `security@...`) to handle the reported vulnerability responsibly.
*   **[Stale/Blocked] Setup Mounts Fix:** PR [#418](https://github.com/qwibitai/nanoclaw/pull/418) (Fix setup mounts step) has been open since Feb 23 and is marked as "Blocked." This appears to be a foundational bug preventing custom mount configurations.
*   **[Maintenance] Skill Branch Conflicts:** Automated merge-forward workflows are failing for `skill/apple-container` and `skill/compact` branches (Issues [#1226](https://github.com/qwibitai/nanoclaw/issues/1226), [#1227](https://github.com/qwibitai/nanoclaw/issues/1227), [#1228](https://github.com/qwibitai/nanoclaw/issues/1228)), requiring manual resolution.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-19

## 1. Today's Overview
IronClaw exhibits **very high development velocity** with 48 issues and 50 PRs updated in the last 24 hours. The project is in an active hardening phase, evidenced by a significant automated Staging CI Review that identified multiple CRITICAL and HIGH severity performance and correctness issues. Core maintainers are heavily focused on reliability ("Mars-rover reliability"), implementing stuck-job detection, fault injection frameworks, and fixing concurrency vulnerabilities in the Routines system. While no new releases shipped today, the volume of merged fixes suggests a patch release is imminent.

## 2. Releases
**No new releases** were published today. The project appears to be stabilizing the current branch before a potential release, focusing on merging bug fixes and security patches.

## 3. Project Progress
Significant progress was made on **agent reliability, security, and CI hardening**:

*   **Security & Reliability (Merged/Closed):**
    *   **CI Hardening:** Coverage gates are being added via `codecov.yml` ([Issue #1228](https://github.com/nearai/ironclaw/issues/1228)) and `debug_assert!` invariants are being expanded to critical paths ([Issue #1215](https://github.com/nearai/ironclaw/issues/1215)).
    *   **Vulnerability Fixes:** Closed an SSRF risk via unbounded `Retry-After` headers ([Issue #1287](https://github.com/nearai/ironclaw/issues/1287)) and fixed input validation issues in `JobContext` and schema generation ([Issue #1366](https://github.com/nearai/ironclaw/issues/1366), [Issue #1362](https://github.com/nearai/ironclaw/issues/1362)).
    *   **Tooling Safety:** Fixed a logic bug where secret leak detection permanently locked Telegram channels ([Issue #1329](https://github.com/nearai/ironclaw/issues/1329)).

*   **Routines System Overhaul (In Progress):**
    *   Core work continues on fixing `full_job` lifecycle management so routines track job completion correctly ([PR #1374](https://github.com/nearai/ironclaw/pull/1374), [Issue #1317](https://github.com/nearai/ironclaw/issues/1317)).
    *   Enhancements are being made to tool schema discovery to make "time" and "message" operations clearer for the LLM ([Issue #1335](https://github.com/nearai/ironclaw/issues/1335), [Issue #1336](https://github.com/nearai/ironclaw/issues/1336)).

## 4. Community Hot Topics
The most active discussions center on **LLM Provider Compatibility** and **Performance Architecture**:

1.  **Mistral & Custom Provider Support:** A high-effort PR introducing Mistral-compatible tool call IDs ([PR #1242](https://github.com/nearai/ironclaw/pull/1242)) and a major feature for Custom LLM Provider Configuration via Web UI ([PR #1340](https://github.com/nearai/ironclaw/pull/1340)) are generating significant attention. Users are clearly demanding easier integration of diverse local and cloud models without code changes.
2.  **Performance Architecture Debate:** An automated review flagged **N+1 schema generation on every LLM call** ([Issue #1361](https://github.com/nearai/ironclaw/issues/1361)) and excessive cloning/allocations ([Issue #1369](https://github.com/nearai/ironclaw/issues/1369), [Issue #1370](https://github.com/nearai/ironclaw/issues/1370)). These CRITICAL/HIGH severity findings suggest the community (and CI) is pushing hard for optimization of the Rust core.

## 5. Bugs & Stability
Several high-impact bugs were identified and/or fixed today, ranked by severity:

*   **CRITICAL / HIGH (Performance):**
    *   **N+1 Schema Generation:** `Tool::schema()` regenerates schemas on every call rather than caching ([Issue #1361](https://github.com/nearai/ironclaw/issues/1361)). *Fix status: Acknowledged, likely being addressed in refactoring.*
    *   **Unbounded JSON Mutation:** Loop in `routine_create_schema` mutates schema excessively ([Issue #1362](https://github.com/nearai/ironclaw/issues/1362)). *Fix status: Closed (likely fixed).*

*   **HIGH (Security/Correctness):**
    *   **SSRF via Embedding URL:** Configurable embedding base URL bypasses validation ([Issue #1103](https://github.com/nearai/ironclaw/issues/1103)). *Fix PR: [PR #1221](https://github.com/nearai/ironclaw/pull/1221) (Open).*
    *   **Token Budget Bypass:** User metadata can inject `max_tokens` bypassing system limits ([Issue #815](https://github.com/nearai/ironclaw/issues/815)). *Status: Open, High Priority.*
    *   **Concurrency Bypass:** Routine concurrency limits failed for `full_job` types ([Issue #1318](https://github.com/nearai/ironclaw/issues/1318)). *Fix PR: [PR #1374](https://github.com/nearai/ironclaw/pull/1374).*

*   **User-Facing Bugs (Fixed/In-Progress):**
    *   **Slack Tool 404:** Fails to install due to incorrect release asset path ([Issue #1205](https://github.com/nearai/ironclaw/issues/1205)).
    *   **Cloudflare Tunnel:** Runner fails to produce a URL within 30s ([Issue #1382](https://github.com/nearai/ironclaw/issues/1382)).
    *   **Telegram Lock:** Secret detection permanently blocked the channel ([Issue #1329](https://github.com/nearai/ironclaw/issues/1329)) - **Closed/Fixed**.

## 6. Feature Requests & Roadmap Signals
Based on open PRs and user issues, the short-term roadmap is heavily focused on **Multi-Model Support** and **Agent Resilience**:

*   **LLM Expansion:** Major contributions are adding **Aliyun BaiLian** ([PR #1299](https://github.com/nearai/ironclaw/pull/1299)), **Gemini OAuth** ([PR #1356](https://github.com/nearai/ironclaw/pull/1356)), and **Mistral** support ([PR #1242](https://github.com/nearai/ironclaw/pull/1242)). This signals a strategic move to be a universal orchestrator.
*   **Resilience Engineering:** Addition of a **FaultInjector framework** for testing ([PR #1233](https://github.com/nearai/ironclaw/pull/1233)) and activation of **stuck_threshold** for dead jobs ([PR #1234](https://github.com/nearai/ironclaw/pull/1234)) indicates the team is seriously targeting enterprise-grade stability.
*   **Web UI Enhancements:** An "Omnisearch" command palette is being finalized ([PR #1298](https://github.com/nearai/ironclaw/pull/1298)), suggesting a push to improve the non-CLI user experience.

## 7. User Feedback Summary
Real user friction points highlight setup and integration pain:

*   **Setup & Onboarding:** Users are struggling with onboarding instructions (e.g., "ironclaw secret" invalid command [Issue #1308](https://github.com/nearai/ironclaw/issues/1308)) and extension installations (Slack tool 404 [Issue #1205](https://github.com/nearai/ironclaw/issues/1205)).
*   **Embeddings:** Users report that embeddings fail specifically with the `near.ai` backend ([Issue #1381](https://github.com/nearai/ironclaw/issues/1381)), indicating a gap between the core product and the hosted service integration.
*   **Docker/Networking:** Issues with Cloudflare tunnels ([Issue #1382](https://github.com/nearai/ironclaw/issues/1382)) and OAuth race conditions in CI ([Issue #1280](https://github.com/nearai/ironclaw/issues/1280)) suggest the networking layer is a common stumbling block.

## 8. Backlog Watch
Critical items requiring maintainer attention or community assistance:

1.  **SSRF Security Fix:** [PR #1221](https://github.com/nearai/ironclaw/pull/1221) (SSRF validation) needs review/merge to close the security gap in embedding base URLs ([Issue #1103](https://github.com/nearai/ironclaw/issues/1103)).
2.  **Token Budget Validation:** [Issue #815](https://github.com/nearai/ironclaw/issues/815) (Metadata bypassing token budget) remains Open and represents a significant safety failure mode for constrained environments.
3.  **Flaky OAuth Tests:** [Issue #1280](https://github.com/nearai/ironclaw/issues/1280) is blocking CI stability; the "race on OAUTH_CALLBACK_HOST" needs a deterministic fix to prevent intermittent build failures.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-03-19

## 1. Today's Overview
LobsterAI demonstrates **high development velocity** with a strong focus on stability and architectural refactoring. In the last 24 hours, the team merged **10 PRs** primarily targeting the "OpenClaw" integration, IM gateway stability, and scheduled task reliability. While no new official releases were tagged, the volume of merged fixes suggests an imminent patch release (likely v0.2.5 or v0.2.6) to address recent stability complaints. The project is currently in a **stabilization phase**, aggressively fixing bugs related to the new OpenClaw runtime adapter introduced in recent versions.

## 2. Releases
**No new releases** were recorded today. The project remains on recent stable versions (referencing v0.2.4 in issues), though a significant amount of fixes merged today indicates a new release is likely being staged.

## 3. Project Progress
Development activity is intense, with 10 PRs merged/closed, focusing heavily on the **OpenClaw** runtime and **IM Gateways**:

*   **Architectural Migration:** [PR #473](https://github.com/netease-youdao/LobsterAI/pull/473) successfully migrated the NIM (NetEase IM) channel from a direct SDK to the OpenClaw plugin architecture, aligning it with other IM channels.
*   **Gateway Stability:** [PR #484](https://github.com/netease-youdao/LobsterAI/pull/484) added automatic restart capabilities for the OpenClaw gateway upon failure.
*   **Critical Bug Fixes:**
    *   [PR #477](https://github.com/netease-youdao/LobsterAI/pull/477) fixed an 8-hour timezone drift in scheduled tasks and prevented expired tasks from firing.
    *   [PR #487](https://github.com/netease-youdao/LobsterAI/pull/487) resolved a severe UI freeze that occurred when modifying IM configurations during an active session.
    *   [PR #486](https://github.com/netease-youdao/LobsterAI/pull/486) optimized configuration syncing to ensure the gateway only restarts when settings are explicitly saved.
*   **Skill System:** [PR #471](https://github.com/netease-youdao/LobsterAI/pull/471) transitioned to OpenClaw native Skills loading.
*   **Scheduled Tasks:** [PR #376](https://github.com/netease-youdao/LobsterAI/pull/376) added hourly scheduling capabilities.

## 4. Community Hot Topics
*   **Copyright Infringement Concerns:** The most active discussion is in [Issue #435](https://github.com/netease-youdao/LobsterAI/issues/435), where users discuss alleged "rip-offs" (Wind Claw, Zeelin Claw) copying the LobsterAI interface. This highlights the project's growing influence and the need for clear branding or licensing enforcement.
*   **Context Management:** [Issue #485](https://github.com/netease-youdao/LobsterAI/issues/485) sparked a detailed discussion on UX improvements. Users are demanding visibility into context window usage (e.g., "200k used") and manual compression controls to manage costs and performance.
*   **Frequent Updates Breaking Settings:** [Issue #382](https://github.com/netease-youdao/LobsterAI/issues/382) expresses frustration that frequent updates reset user configurations, indicating a need for better configuration persistence strategies.

## 5. Bugs & Stability
Several high-severity bugs were reported, though the dev team has already merged fixes for some:

1.  **OpenClaw Restart Loop (Critical):** [Issue #490](https://github.com/netease-youdao/LobsterAI/issues/490) reports the agent interrupting tasks and restarting repeatedly. *Note: Fix likely addressed by [PR #484](https://github.com/netease-youdao/LobsterAI/pull/484).*
2.  **UI Deadlock (Critical):** [Issue #487](https://github.com/netease-youdao/LobsterAI/pull/487) (fixed) addressed the UI permanently freezing in a "streaming" state if IM config changed during a session.
3.  **Lost Scheduled Tasks:** [Issue #474](https://github.com/netease-youdao/LobsterAI/issues/474) reports that updating to v2026.3.16 caused scheduled tasks to disappear and sandbox options to vanish.
4.  **High Token Consumption:** [Issue #480](https://github.com/netease-youdao/LobsterAI/issues/480) claims the latest version sends full system instructions with every request, spiking token usage.
5.  **Dangerous Commands:** [Issue #489](https://github.com/netease-youdao/LobsterAI/issues/489) reports the agent executing risky shell commands, raising safety concerns about the model's autonomy.

## 6. Feature Requests & Roadmap Signals
*   **Context Visibility & Control:** Users want a UI indicator for context memory usage and a manual "Compress Context" button ([Issue #485](https://github.com/netease-youdao/LobsterAI/issues/485)). This is a strong candidate for the next UX update.
*   **Telegram Integration:** [Issue #478](https://github.com/netease-youdao/LobsterAI/issues/478) requested a Telegram bot. *Note: The architectural work in [PR #473](https://github.com/netease-youdao/LobsterAI/pull/473) aligning NIM with the plugin structure makes adding Telegram easier.*
*   **Model Support:** [PR #388](https://github.com/netease-youdao/LobsterAI/pull/388) (Open) proposes upgrading MiniMax support to the M2.7 model.

## 7. User Feedback Summary
Users appreciate the frequent updates but are experiencing **update fatigue**. Pain points center on **config persistence** (settings wiping on update) and **stability of the new OpenClaw runtime** (random restarts). There is positive sentiment regarding the "Cowork" feature, but frustration exists regarding context management—specifically the inability to gauge how much memory the AI has used, leading to unpredictable behavior. The "rip-off" discussion indicates users value the original project's authenticity.

## 8. Backlog Watch
*   **Model Self-Cognition:** [Issue #491](https://github.com/netease-youdao/LobsterAI/issues/491) (0 comments) - The AI is confusing its environment with local installations. Needs maintainer investigation into system prompt isolation.
*   **Custom Model Compatibility:** [Issue #492](https://github.com/netease-youdao/LobsterAI/issues/492) & [Issue #124](https://github.com/netease-youdao/LobsterAI/issues/124) - Users struggling with OpenAI-response style APIs and local mode token errors. These require better documentation or error handling in the model adapter layer.
*   **Compilation Issues:** [Issue #476](https://github.com/netease-youdao/LobsterAI/issues/476) - Ubuntu build errors with Node 24.1.0 remain unresolved and need attention to ensure community contributors can build from source.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyAGI (formerly TinyClaw) Project Digest: 2026-03-19

## 1. Today's Overview
The project is currently undergoing a high-intensity transformation, marked by the release of **v0.0.15**. Activity levels are exceptionally high, with 16 pull requests updated in the last 24 hours (13 merged/closed), indicating a focused effort to stabilize a major rebranding and re-architecture. The team has successfully migrated the project identity from "TinyClaw" to "TinyAGI" and consolidated the installation process into a streamlined one-line curl command. Despite the heavy engineering output, the lack of open issues suggests the codebase is currently stable or the team is prioritizing merge requests over issue triage.

## 2. Releases
### **v0.0.15**
This release represents a significant milestone in the project's distribution and user experience.
*   **New Installation Method:** The primary installation method is now a one-line cURL command (`curl -fsSL .../install.sh | bash`), moving away from previous `npx` or source-based methods.
*   **Auto-Migration:** The system now automatically handles data migration from the legacy `~/.tinyclaw` directory to the new `~/.tinyagi` standard, ensuring backward compatibility for existing users.
*   **Breaking Changes/Notes:** The CLI entrypoint has shifted from shell scripts to a Node.js primary entrypoint (`tinyagi`).

## 3. Project Progress
The development velocity today is aggressive, focusing on infrastructure, memory architecture, and rebranding.

*   **Rebranding & Infrastructure:** The team completed a total rebrand from TinyClaw to TinyAGI ([PR #191](https://github.com/TinyAGI/tinyagi/pull/191)). This included renaming packages, environment variables, and migrating configuration directories.
*   **Installation Overhaul:** A series of PRs ([PR #237](https://github.com/TinyAGI/tinyagi/pull/237), [PR #240](https://github.com/TinyAGI/tinyagi/pull/240), [PR #235](https://github.com/TinyAGI/tinyagi/pull/235)) reworked the installation logic to support the new cURL method, rebuilt native modules (`better-sqlite3`) for cross-platform support, and removed legacy migration scripts.
*   **Architecture Simplification:** [PR #213](https://github.com/TinyAGI/tinyagi/pull/213) flattened agent communication by removing conversation state trackers, moving to a direct DM model to reduce complexity.
*   **Hierarchical Memory System:** [PR #209](https://github.com/TinyAGI/tinyagi/pull/209) introduced a persistent hierarchical memory system allowing agents to store and recall knowledge via markdown files.

## 4. Community Hot Topics
While no issues were active, the open PRs indicate active development in "meta-agent" behaviors.

*   **Memory Maintenance:** [PR #233](https://github.com/TinyAGI/tinyagi/pull/233) proposes triggering periodic memory maintenance via the heartbeat system. This suggests a shift toward autonomous self-management of the agent's context window.
*   **Office Redesign:** [PR #212](https://github.com/TinyAGI/tinyagi/pull/212) remains open, indicating ongoing work on the user interface/workspace for the "Live Office" feature.
*   **Feedback Loop Prevention:** [PR #220](https://github.com/TinyAGI/tinyagi/pull/220) addresses "exponential feedback loops" in multi-agent teams, a critical stability fix for concurrent operations.

## 5. Bugs & Stability
Several stability fixes were merged in this cycle, addressing both UI and backend logic.

*   **Critical Agent Loop (Fixed):** [PR #220](https://github.com/TinyAGI/tinyagi/pull/220) identified and fixed a bug where team chatrooms caused exponential feedback loops, crashing 4-agent crews.
*   **Chronological Display (Fixed):** [PR #241](https://github.com/TinyAGI/tinyagi/pull/241) corrected the message order in chatrooms (now oldest-to-newest).
*   **Installation Compatibility (Fixed):** [PR #240](https://github.com/TinyAGI/tinyagi/pull/240) addressed a failure to rebuild native modules on macOS when installed via the Linux-built bundle.

## 6. Feature Requests & Roadmap Signals
Current merged code signals a roadmap focused on **autonomy** and **ease of access**.

*   **Web-Based Setup:** [PR #214](https://github.com/TinyAGI/tinyagi/pull/214) added a web-based setup flow and custom API URL configuration, signaling a push for non-technical user adoption.
*   **Real-Time Streaming:** [PR #196](https://github.com/TinyAGI/tinyagi/pull/196) introduced real-time streaming of agent execution progress, improving the UX for long-running tasks.
*   **Prediction:** The next version will likely focus on refining the "Office" UI ([PR #212](https://github.com/TinyAGI/tinyagi/pull/212)) and stabilizing the new memory maintenance loops.

## 7. User Feedback Summary
*Direct user feedback via Issues was unavailable (0 open/active). However, PR descriptions highlight specific user pain points addressed in this update:*
*   **Pain Point:** Users were likely struggling with complex installation steps (addressed by the one-line installer).
*   **Pain Point:** Users upgrading from "TinyClaw" feared data loss (addressed by auto-migration logic).
*   **Pain Point:** "Chatrooms" were confusing due to reverse message order (addressed by [PR #241](https://github.com/TinyAGI/tinyagi/pull/241)).

## 8. Backlog Watch
*   **[PR #212](https://github.com/TinyAGI/tinyagi/pull/212) (Open):** The "Live Office" redesign has been open since March 13. It appears to be a significant UI overhaul that may need final review or merge.
*   **[PR #233](https://github.com/TinyAGI/tinyagi/pull/233) (Open):** The heartbeat memory maintenance feature is a critical architectural addition for long-running agents; this should be prioritized for the next merge wave.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-03-19

### 1. Today's Overview
The Moltis project is currently maintaining a steady "maintenance and bug-fix" mode with no major feature releases or version bumps recorded today. Activity over the last 24 hours has been moderate, characterized by ongoing community troubleshooting regarding integration providers and a proactive community contribution aimed at improving stability. The focus remains on refining existing tools—specifically web interaction features—rather than expanding the core feature set. With two active bug discussions and one open fix, the project health appears stable but requires attention to specific environmental compatibility issues.

### 2. Releases
No new releases were recorded for this period.

### 3. Project Progress
Progress today is defined by a single, high-quality community Pull Request addressing web scraping stability, though no code has been merged yet.

*   **[PR #450](https://github.com/moltis-org/moltis/pull/450) [OPEN]**: A fix was submitted to prevent the `web_fetch` tool from panicking when encountering non-UTF8 encoded web pages (e.g., legacy GBK/Big5). This indicates an advancement in the robustness of the agent's web-browsing capabilities, ensuring the agent doesn't crash during broad web searches.

### 4. Community Hot Topics
The community is currently focused on external connectivity failures, specifically regarding third-party service integrations.

*   **[Issue #261](https://github.com/moltis-org/moltis/issues/261) [OPEN]**: This is the most active discussion (5 comments, 2 reactions). Users are reporting persistent errors with the **GitHub Copilot provider**. The activity level suggests this is a critical integration point for the user base, and the lack of resolution implies a potential version mismatch or API change on GitHub's side that has not yet been addressed in Moltis.
*   **[Issue #407](https://github.com/moltis-org/moltis/issues/407) [OPEN]**: Discussion regarding network filtering and web search failures immediately upon startup. While newer, it highlights a user segment struggling with proxy configurations in constrained network environments.

### 5. Bugs & Stability
Two significant bugs are tracking stability issues related to network and provider connections.

1.  **High Severity / High Impact**: **[Bug]: Github Copilot provider errors** (**[Issue #261](https://github.com/moltis-org/moltis/issues/261)**). Users are unable to utilize the GitHub Copilot backend. This is high priority as it blocks a primary use case (coding assistance).
2.  **Medium Severity**: **[Bug]: Network-filter Proxy failing** (**[Issue #407](https://github.com/moltis-org/moltis/issues/407)**). Reports indicate that the `web_search` tool fails immediately after start, linked to proxy/network filter settings.
3.  **Fix Pending**: **[PR #450](https://github.com/moltis-org/moltis/pull/450)** addresses a panic (crash) in `web_fetch` caused by character boundary errors on legacy-encoded pages. While the bug is severe (agent crash), a fix is currently open for review.

### 6. Feature Requests & Roadmap Signals
*   **Enhanced Web Resilience**: The submission of [PR #450](https://github.com/moltis-org/moltis/pull/450) signals a roadmap direction toward making the agent's web interaction tools more resilient to "messy" real-world data, such as legacy character encodings (GBK, Big5).
*   **Infrastructure Robustness**: The issues regarding Proxies ([#407](https://github.com/moltis-org/moltis/issues/407)) and Copilot Providers ([#261](https://github.com/moltis-org/moltis/issues/261)) suggest that future updates will likely need to focus on connection reliability and configuration flexibility rather than new AI features.

### 7. User Feedback Summary
Users are currently experiencing friction with **environment integration**.
*   **Pain Points**: Users are frustrated by the agent failing to connect via proxies ([#407](https://github.com/moltis-org/moltis/issues/407)) and instability in connecting to LLM providers like GitHub Copilot ([#261](https://github.com/moltis-org/moltis/issues/261)).
*   **Satisfaction**: The presence of a community-submitted PR ([#450](https://github.com/moltis-org/moltis/pull/450)) indicates a healthy core codebase that advanced users are willing to fix themselves, showing continued investment by the community despite the lack of recent releases.

### 8. Backlog Watch
*   **[Issue #261](https://github.com/moltis-org/moltis/issues/261) (Copilot Errors)**: Created in late February and updated yesterday, this issue has been open for nearly 3 weeks with 5 comments. It requires immediate maintainer attention/investigation as it affects a core value proposition of the project.
*   **[PR #450](https://github.com/moltis-org/moltis/pull/450)**: This open PR needs a maintainer review to merge the fix for the `web_fetch` panic, which would close the loop on stability improvements for web tools.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-03-19

## 1. Today's Overview
CoPaw demonstrates **high velocity** development with a new beta release (`v0.1.0-beta.3`) and significant community engagement, evidenced by 50 issue updates and 50 PR updates in the last 24 hours. The project is currently in a phase of rapid feature expansion, particularly in multimodal support and model compatibility, but is experiencing growing pains with stability bugs on non-Windows platforms and configuration regressions in the latest builds. A strong focus on "local-first" capabilities (local models, local embeddings, and file operations) suggests a strategic push towards privacy and offline utility. The ratio of closed issues (32) to open (18) indicates responsive maintainership despite the high volume of activity.

## 2. Releases
### **v0.1.0-beta.3**
*   **Changes:**
    *   Version bump to `0.1.0b3`.
    *   **Console:** Added multi-language support updates.
    *   **Console:** Optimized document navigation anchors.
*   **Notes:** This appears to be a stabilization and localization release following recent feature additions. Users upgrading to this version (and likely `v0.0.7` mentioned in issues) should be aware of configuration changes affecting local model detection (see Issues).

## 3. Project Progress
**Closed/Merged PRs (Feature Advancements):**
*   **Multimodal & Uploads:** Merged PR [#1772](https://github.com/agentscope-ai/CoPaw/pull/1772) (Multimodal message support) and [#711](https://github.com/agentscope-ai/CoPaw/pull/711) (Image upload function), signaling a major upgrade to the Chat interface to handle files and images natively.
*   **Model Support:** Merged PR [#1729](https://github.com/agentscope-ai/CoPaw/pull/1729) upgrading MiniMax default model to M2.7, and [#1654](https://github.com/agentscope-ai/CoPaw/pull/1654) adding local embedding model support for vector memory.
*   **Bug Fixes:** Merged PR [#1557](https://github.com/agentscope-ai/CoPaw/pull/1557) fixing a critical count mismatch in reasoning content injection, and [#1788](https://github.com/agentscope-ai/CoPaw/pull/1788) fixing chat model selection issues.

**Open PRs (In Flight):**
*   **Agent Routing:** PR [#1792](https://github.com/agentscope-ai/CoPaw/pull/1792) is proposing channel routing for multi-agent setups, a key requirement for complex deployments.
*   **Local Embeddings:** PR [#1789](https://github.com/agentscope-ai/CoPaw/pull/1789) continues work on local embedding models (Qwen3-VL/BGE) for long-term memory.

## 4. Community Hot Topics
1.  **CPU Spinning on Linux (Issue [#1385](https://github.com/agentscope-ai/CoPaw/issues/1385))**
    *   **Activity:** 9 comments.
    *   **Analysis:** A critical ongoing discussion regarding CPU usage hitting 100% on Ubuntu. The user traced it to `read_file` and the MCP (Model Context Protocol) implementation. This highlights stability issues in the Linux environment versus the apparent primary development focus on desktop/macOS.
2.  **Local Model Configuration Breakage (Issue [#1782](https://github.com/agentscope-ai/CoPaw/issues/1782))**
    *   **Activity:** 8 comments.
    *   **Analysis:** Users report that upgrading to the latest version removes local LLM options (llama.cpp/Ollama) from the UI. This indicates a regression in how the console detects or displays local model providers, causing friction for private deployment users.
3.  **Web UI Authentication (Issue [#492](https://github.com/agentscope-ai/CoPaw/issues/492) & [#333](https://github.com/agentscope-ai/CoPaw/issues/333))**
    *   **Activity:** 3 comments each (but high duplication of topic).
    *   **Analysis:** A recurring theme where users deploying CoPaw on public servers urgently request basic login/password protection. This is currently a security gap for public-facing instances.

## 5. Bugs & Stability
*   **🔴 Critical: CPU 100% on Linux (Issue [#1385](https://github.com/agentscope-ai/CoPaw/issues/1385))**
    *   *Status:* Open. Caused by MCP/file operations. No official fix PR merged yet, though the user suggested a code change.
*   **🟠 High: Local Models Missing in UI (Issue [#1782](https://github.com/agentscope-ai/CoPaw/issues/1782))**
    *   *Status:* Closed (likely resolved by PR [#1788](https://github.com/agentscope-ai/CoPaw/pull/1788) / [#1784](https://github.com/agentscope-ai/CoPaw/pull/1784)). Users upgrading to `v0.0.7`+ lost the ability to easily select local models.
*   **🟠 High: Memory Manager Initialization (Issue [#1736](https://github.com/agentscope-ai/CoPaw/issues/1736))**
    *   *Status:* Open. `MemoryManager` fails to search because `file_stores` is empty. Affects the ReMeLight memory mechanism.
*   **🟡 Medium: File Truncation (Issue [#1563](https://github.com/agentscope-ai/CoPaw/issues/1563))**
    *   *Status:* Open. `write_file` truncates large content (~33KB files reduced to 6KB). Limits agent ability to handle substantial code or data generation.

## 6. Feature Requests & Roadmap Signals
*   **Security & Auth:** Multiple requests for basic Web UI login (Issues [#492](https://github.com/agentscope-ai/CoPaw/issues/492), [#684](https://github.com/agentscope-ai/CoPaw/issues/684)). *Prediction: High likelihood of inclusion in next minor release due to enterprise deployment needs.*
*   **File Permissions:** Requests for granular file access control (Issue [#973](https://github.com/agentscope-ai/CoPaw/issues/973))—allowing agents to edit only specific folders. *Prediction: Likely a future "sandbox" mode feature.*
*   **Execution Logging:** Request for execution chain logs (Issue [#1474](https://github.com/agentscope-ai/CoPaw/issues/1474)) to debug agent thought processes.
*   **Anthropic Protocol Support:** Native support for Anthropic/Claude API protocol requested (Issue [#333](https://github.com/agentscope-ai/CoPaw/issues/333)).

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by **regressions** where updates break existing local model connections. There is also significant difficulty with **deployment nuances** on Linux (system resources) and permissions (environment variables).
*   **Use Cases:** Users are trying to run CoPaw as a **private cloud service** (requiring auth) and as a **local offline assistant** (requiring robust llama.cpp/MLX support).
*   **Sentiment:** generally constructive; users are actively debugging (e.g., tracing the CPU bug to MCP) rather than just complaining, indicating a technically savvy community.

## 8. Backlog Watch
*   **Issue #430 (Help Wanted):** The "Open Tasks" issue is active but needs sustained community pickup to clear the backlog.
*   **Issue #1381 (UI Bug):** "Console chat interface model selection obscured" was closed, but similar UI layout issues persist in other areas of the console.
*   **PR #1629 (MCP HTTP Headers):** Open PR fixing environment variable expansion in MCP headers. This is crucial for secure remote MCP server connections and needs review/merge to unblock advanced integrations.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest (2026-03-19)

## 1. Today's Overview
ZeptoClaw is currently in a high-velocity development phase, characterized by significant architectural debates and infrastructure expansion rather than stable releases. The project saw updates to 3 issues and 2 pull requests in the last 24 hours, indicating an active but conversation-heavy cycle. The core team and community are focused on refining the agent framework's boundaries, specifically regarding isolation security and protocol compliance. While no new releases were cut today, the activity suggests a consolidation phase aimed at stabilizing new provider support and internal protocol semantics.

## 2. Releases
No new releases were recorded for today.

## 3. Project Progress
No Pull Requests were merged or closed today; however, two significant open PRs saw active updates:

*   **Google Vertex AI Support ([PR #364](https://github.com/qhkm/zeptoclaw/pull/364)):** Progress continues on integrating Google Vertex AI as a first-class provider. The implementation focuses on enterprise-grade authentication and reusing existing dependencies to keep the footprint small.
*   **Developer Tooling Standardization ([PR #287](https://github.com/qhkm/zeptoclaw/pull/287)):** Updates were made to the development environment tools. This PR aims to enforce consistent pre-PR states (linting/testing) across different contributors, which is critical for maintaining code quality as the project scales.

## 4. Community Hot Topics
The most active discussion is happening in **[Issue #387](https://github.com/qhkm/zeptoclaw/issues/387)** (4 comments), concerning the future architectural direction of the framework.

*   **Topic:** **"Core templates based on Containerfiles mapped-to/launched-in orchestrated Firecracker VM's"**
*   **Analysis:** The community is debating a shift toward extreme isolation by treating coding agents as standalone applications running in micro-VMs (Firecracker).
*   **Underlying Need:** There is a strong concern regarding **"Feature creep" and "Security surface expansion."** Users and contributors appear worried that as the agent framework grows, it becomes more vulnerable. They are seeking a robust, sandboxed architecture where the agent is just a "node," rather than a deeply integrated monolith. This signals a demand for security-first infrastructure over raw feature addition.

## 5. Bugs & Stability
One specific technical bug was reported today regarding the Agent Communication Protocol (ACP):

*   **[Issue #388](https://github.com/qhkm/zeptoclaw/issues/388):** **bug(channels): fix ACP HTTP initialize and notification semantics.**
    *   **Severity:** Medium. It affects protocol compliance and multi-client session handling.
    *   **Details:** The bug involves incorrect handling of the `initialize` flag (allowing clients to skip handshakes improperly) and HTTP notifications sending unwanted response bodies.
    *   **Status:** Open (No fix PR linked yet).

## 6. Feature Requests & Roadmap Signals
Two distinct feature signals emerged today, suggesting a roadmap focused on **robustness** and **library unification**:

1.  **Micro-VM Isolation ([Issue #387](https://github.com/qhkm/zeptoclaw/issues/387)):** As noted in Hot Topics, the proposal to use Firecracker VMs suggests the next major version may focus heavily on containerization and sandboxed execution environments.
2.  **Library Consolidation ([Issue #389](https://github.com/qhkm/zeptoclaw/issues/389)):** A proposal to evaluate building upon the `rig` utility crate. This indicates a desire to reduce code duplication and standardize generic functionalities rather than maintaining custom internal implementations.

**Prediction:** The inclusion of the `rig` library evaluation and the Vertex AI provider suggests the upcoming version will likely focus on "Enterprise Readiness" (better auth/providers) and "Code Hygiene" (refactoring into utility crates).

## 7. User Feedback Summary
*   **Pain Points:** Users are expressing concern about the expanding complexity of Coding Agent Frameworks. There is a specific desire to avoid "mini-industry" fragmentation and instead see ZeptoClaw treat agents as standard secure applications.
*   **Use Cases:** The feedback implies a growing use case for ZeptoClaw in **enterprise or high-security environments** where untrusted code execution (via Firecracker VMs) is a requirement.
*   **Sentiment:** The sentiment is technically conservative; contributors are pushing back against "feature creep" in favor of a cleaner, more secure node-based architecture.

## 8. Backlog Watch
*   **[PR #287](https://github.com/qhkm/zeptoclaw/pull/287):** This Developer Tools PR has been open since 2026-03-09. While it received an update today, it requires urgent attention to merge, as it establishes the ground rules for all other contributions.
*   **[Issue #388](https://github.com/qhkm/zeptoclaw/issues/388):** The ACP HTTP bug needs a fix prioritized, as it impacts the fundamental communication layer of the agents.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest (2026-03-19)

**Project Repository:** [github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

## 1. Today's Overview
EasyClaw (specifically the **RivonClaw** client) demonstrates high iteration velocity with **two rapid releases** (v1.7.0 and v1.7.1) shipped in a single day, indicating a responsive "fix-forward" development strategy. While the project successfully closed all recent support tickets, the underlying data suggests a turbulent transition for Windows users upgrading to the new v1.7.x branch. Simultaneously, the open-source community is actively contributing to the project's global accessibility and UI architecture, evidenced by two significant open Pull Requests focusing on internationalization and code refactoring.

## 2. Releases
Two consecutive patches were released, likely addressing immediate deployment issues:

*   **[v1.7.1: RivonClaw v1.7.1](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.1)**
    *   **Focus:** macOS Gatekeeper compatibility.
    *   **Notes:** This version primarily addresses the "App is damaged" error caused by macOS security checks on unsigned binaries. It provides terminal commands to bypass Gatekeeper (e.g., `xattr -cr`), suggesting the core binary did not change significantly but packaging/signing workflows were adjusted.
*   **[v1.7.0: RivonClaw v1.7.0](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.0)**
    *   **Focus:** Major feature update (implied by version jump).
    *   **Notes:** Introduces the new baseline. However, based on issue traffic, this version introduced breaking changes for Windows connectivity.

## 3. Project Progress
No PRs were merged today, but the maintainers are actively managing the release branches:
*   **Issue Resolution:** 4 issues were closed, clearing the backlog of critical connectivity and documentation requests.
*   **Pending Contributions:** Two substantial PRs are currently open for review:
    *   **PR #21:** Massive i18n expansion (5 new languages).
    *   **PR #20:** Deep architectural UI refactoring (Theme separation, Component extraction).

## 4. Community Hot Topics
The most engaging discussions revolve around **deployment friction** and **community building**.

1.  **Windows Connectivity Crisis ([Issue #18](https://github.com/gaoyangz77/rivonclaw/issues/18))**
    *   **Activity:** 5 comments.
    *   **Analysis:** Users upgrading from the stable 1.6.8 to 1.7.0 experienced total service failure. The high engagement reflects user anxiety about breaking changes in the new version.
2.  **Community Architecture Endorsement ([Issue #12](https://github.com/gaoyangz77/rivonclaw/issues/12))**
    *   **Activity:** 3 comments.
    *   **Analysis:** Users are praising the project's architecture ("符合我预期的架构") and requesting dedicated communication channels (Discord/WeChat), signaling a desire to form a developer community around the project.

## 5. Bugs & Stability
**Severity: HIGH** - The v1.7.0 update appears to have introduced a critical regression for Windows users.

*   **Windows Connection Failure ([Issue #18](https://github.com/gaoyangz77/rivonclaw/issues/18), [Issue #19](https://github.com/gaoyangz77/rivonclaw/issues/19))**
    *   **Symptoms:** Users on Windows 11 cannot connect after upgrading to v1.7.0 or installing it fresh. The client hangs at "Connecting" (连接中) even with valid API configurations.
    *   **Status:** Closed (likely resolved by support guidance or pending verification in v1.7.1 context, though release notes focus on macOS).
*   **macOS Security Block ([Release v1.7.0/1.7.1 Notes](https://github.com/gaoyangz77/easyclaw/releases))**
    *   **Symptoms:** "RivonClaw is damaged" on macOS.
    *   **Root Cause:** Lack of Apple Developer ID signing.
    *   **Workaround:** Manual Terminal command provided in release notes.

## 6. Feature Requests & Roadmap Signals
*   **Multi-language Support (Imminent):** PR #21 suggests the next official release will support **Traditional Chinese, Japanese, Korean, Vietnamese, and Hindi**, targeting the Asian market aggressively.
*   **Windows Build Documentation:** Users are struggling to run the project locally on Windows ([Issue #17](https://github.com/gaoyangz77/rivonclaw/issues/17)). A request for a "Windows Build Tutorial" was closed, implying documentation may be updated or pending.
*   **UI Modularity:** PR #20 signals an internal shift towards a more modular UI architecture with theme separation, suggesting future customization capabilities (Dark/Light mode improvements).

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Distribution:** Unsigned binaries on macOS create a "damaged" perception.
    *   **Stability:** Windows users feel like "second-class citizens" due to the v1.7.0 connectivity regression.
    *   **Barriers to Entry:** Devs want to contribute or self-host but lack clear Windows build guides.
*   **Satisfaction:** Despite the bugs, sentiment is positive. One user explicitly stated the architecture matches their expectations perfectly, indicating strong product-market fit in the dev community.

## 8. Backlog Watch
*   **[PR #20](https://github.com/gaoyangz77/rivonclaw/pull/20) & [PR #21](https://github.com/gaoyangz77/rivonclaw/pull/21) (Open):** Both are significant contributions by community member `@chinayin`.
    *   **Action Required:** Maintainers need to review the **UI Migration** and **i18n** PRs. Merging these is critical for the project's next growth phase (globalization and UI stability). Currently showing `0 comments`, suggesting they may be waiting for review.

</details>