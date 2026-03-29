# OpenClaw Ecosystem Digest 2026-03-30

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-03-29 22:03 UTC

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

# OpenClaw Project Digest — 2026-03-30

## 1. Today's Overview

OpenClaw is experiencing **extremely high activity** with 500 issues and 500 pull requests updated in the last 24 hours, indicating a rapidly evolving codebase with strong community engagement. The project released version **v2026.3.28** (including a beta variant), introducing a significant breaking change for Qwen provider users that requires migration to Model Studio authentication. The open issue count (418) significantly outweighs closed issues (82), suggesting the project is in a phase of rapid feature expansion that is outpacing bug resolution. With 344 open PRs versus 156 merged, substantial new functionality and fixes are in the pipeline.

## 2. Releases

### v2026.3.28 (Stable) & v2026.3.28-beta.1

**Breaking Changes:**
- **Qwen Provider Migration:** Removed deprecated `qwen-portal-auth` OAuth integration for `portal.qwen.ai`. Users must migrate to Model Studio using `openclaw onboard --auth-choice modelstudio-api-key`. ([#52709](https://github.com/openclaw/openclaw/pull/52709)) — Thanks @pomelo-nwu.
- **Config/Doctor:** Dropped automatic config migrations older than two months.

**Migration Notes:** Users relying on Qwen OAuth must re-authenticate using API keys before upgrading to avoid service interruption.

---

## 3. Project Progress

**Merged PRs (156 today)** advanced the following areas:

- **Agent System:** Added `--deliver` flag to bypass LLM and send messages directly ([#57300](https://github.com/openclaw/openclaw/pull/57300)); added guard delivery and subagent review hooks ([#56904](https://github.com/openclaw/openclaw/pull/56904)).
- **CLI Performance:** Optimized startup by skipping process respawn for short commands ([#54085](https://github.com/openclaw/openclaw/pull/54085)) and deferring plugin loading in pairing CLI ([#54086](https://github.com/openclaw/openclaw/pull/54086)).
- **Channels:** Fixed Slack streaming replies to stay in thread ([#57310](https://github.com/openclaw/openclaw/pull/57310)); added per-channel `replyToMode` config for Slack ([#57309](https://github.com/openclaw/openclaw/pull/57309)); fixed Telegram bot-authored media handling ([#57298](https://github.com/openclaw/openclaw/pull/57298)).
- **Docker:** Hardened Mac Docker setup and migration documentation ([#32424](https://github.com/openclaw/openclaw/pull/32424)).
- **Providers:** Added Oracle OCI Generative AI provider plugin ([#54784](https://github.com/openclaw/openclaw/pull/54784)); normalized provider IDs for media understanding ([#56678](https://github.com/openclaw/openclaw/pull/56678)).

---

## 4. Community Hot Topics

| Issue/PR | Engagement | Underlying Need |
|----------|------------|-----------------|
| [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | 58 comments, 👍 66 | Strong demand for desktop parity across all major platforms (Linux/Windows apps to match macOS/iOS/Android). |
| [#44851 Kimi web_search 401 Error](https://github.com/openclaw/openclaw/issues/44851) | 32 comments | Chinese users rely heavily on Kimi integration; authentication issues block production use. |
| [#14593 Docker Skill Install Failure](https://github.com/openclaw/openclaw/issues/14593) | 18 comments, 👍 14 | Containerized deployments need reliable skill installation without `brew` dependency. |
| [#26322 OAuth Token Refresh Race Condition](https://github.com/openclaw/openclaw/issues/26322) | 14 comments, 👍 12 | Multi-agent setups sharing OAuth profiles need thread-safe token management. |
| [#53353 Matrix E2EE Missing WASM](https://github.com/openclaw/openclaw/issues/53353) | 14 comments | Matrix users require complete package distribution for end-to-end encryption support. |

**Analysis:** Cross-platform desktop apps, authentication reliability across diverse providers (Kimi, OAuth flows), and container/enterprise deployment robustness dominate community priorities.

---

## 5. Bugs & Stability

### Critical/High Severity
| Issue | Severity | Status | Notes |
|-------|----------|--------|-------|
| [#53353 Matrix E2EE Broken](https://github.com/openclaw/openclaw/issues/53353) | 🔴 Critical | OPEN | Missing `matrix_sdk_crypto_wasm_bg.wasm` in npm package — blocks all Matrix encrypted messaging. No fix PR yet. |
| [#29951 SQL Injection Vulnerability](https://github.com/openclaw/openclaw/issues/29951) | 🔴 Critical | OPEN | SQL injection in `/api/metrics/database` endpoint. Security issue needs immediate attention. |
| [#11202 API Keys in Prompt Context](https://github.com/openclaw/openclaw/issues/11202) | 🔴 Security | OPEN | Resolved API keys injected into LLM prompt context — potential credential exposure. |

### Regressions (Worked Before)
| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| [#53959 openai-codex Tools Not Executing](https://github.com/openclaw/openclaw/issues/53959) | 🟠 High | OPEN | None yet — tools (exec, MCP, web search) completely non-functional after v2026.3.23-2. |
| [#52875 session_send No Session Found](https://github.com/openclaw/openclaw/issues/52875) | 🟠 High | OPEN | Inter-agent communication broken after v2026.3.22. |
| [#54931 Discord Crash Loop](https://github.com/openclaw/openclaw/issues/54931) | 🟠 High | CLOSED | Gateway crashes every ~35 min — Discord health-monitor uncaught exception. |
| [#41045 Telegram Streaming Broken](https://github.com/openclaw/openclaw/issues/41045) | 🟡 Medium | OPEN | Partial streaming mode broken since v3.8. |
| [#41494 Gemini Reasoning Leaks](https://github.com/openclaw/openclaw/issues/41494) | 🟡 Medium | OPEN | Internal chain-of-thought exposed to users. |

### Recent Fixes
- [#55346 Discord Gateway Crash](https://github.com/openclaw/openclaw/issues/55346) — CLOSED, resolved max reconnect issue.
- [#54745 Telegram Outbound Lost](https://github.com/openclaw/openclaw/issues/54745) — CLOSED, fixed restart persistence.

---

## 6. Feature Requests & Roadmap Signals

| Feature Request | Signals | Prediction |
|-----------------|---------|------------|
| **Linux/Windows Desktop Apps** ([#75](https://github.com/openclaw/openclaw/issues/75)) | 58 comments, 66 👍, `help wanted` label | High community priority; actively seeking contributors. Likely roadmap item but needs maintainer bandwidth. |
| **Dynamic Model Discovery** ([#10687](https://github.com/openclaw/openclaw/issues/10687)) | `maintainer` label | Active internal discussion; essential for OpenRouter and fast-moving model catalogs. Expected in upcoming releases. |
| **Tiered Bootstrap Loading** ([#22438](https://github.com/openclaw/openclaw/issues/22438)) | Performance optimization | Addresses token budget concerns for large workspaces. Strong candidate for next version. |
| **Operational Assurance Gateway (OAG)** ([PR #48956](https://github.com/openclaw/openclaw/pull/48956)) | XL-sized PR, comprehensive | Self-evolving channel health runtime; indicates strategic investment in reliability infrastructure. |

---

## 7. User Feedback Summary

**Pain Points:**
- **Authentication Complexity:** Multiple auth-related issues (Kimi 401, OAuth race conditions, Google Vertex ADC failures) indicate the multi-provider auth layer is fragile.
- **Regression Frequency:** 10+ regression bugs reported in recent weeks suggest insufficient automated testing before releases.
- **Docker/Container UX:** Users struggle with `brew` dependencies, PATH issues with Nix, and skill installation in containers.
- **Documentation Gaps:** Plugin loading failures ([#28222](https://github.com/openclaw/openclaw/issues/28222), [#52341](https://github.com/openclaw/openclaw/issues/52341)) suggest unclear extension setup instructions.

**Positive Signals:**
- Strong engagement on feature requests shows active, invested community.
- Quick closure of Discord crash bugs indicates responsive incident handling.
- CLI performance improvements acknowledged as needed and being addressed.

---

## 8. Backlog Watch

| Item | Age | Priority | Status | Concern |
|------|-----|----------|--------|---------|
| [#75 Linux/Windows Apps](https://github.com/openclaw/openclaw/issues/75) | ~3 months | High | OPEN | Highly requested (66 👍), labeled `help wanted`, no maintainer assignment yet. |
| [#29951 SQL Injection](https://github.com/openclaw/openclaw/issues/29951) | ~1 month | Critical | `stale` | Security vulnerability marked stale — needs immediate review. |
| [#11202 API Key Exposure](https://github.com/openclaw/openclaw/issues/11202) | ~2 months | Critical | OPEN | Security issue unresolved for extended period. |
| [#12590 memoryFlush Reliability](https://github.com/openclaw/openclaw/issues/12590) | ~2 months | Medium | `stale` | Core memory management bug without maintainer response. |
| [#28222 OTel Plugin Broken](https://github.com/openclaw/openclaw/issues/28222) | ~1 month | Medium | `stale` | Built-in diagnostics plugin non-functional. |

**Recommendation:** Security issues (#29951, #11202) and the critical Matrix E2EE bug (#53353) require immediate triage. The Linux/Windows app request (#75) warrants official roadmap clarification given strong community interest.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Analysis Report
**Date:** 2026-03-30 | **Analyst:** Senior Ecosystem Analyst

---

## 1. Ecosystem Overview

The open-source AI agent and personal assistant ecosystem is experiencing a **hyper-growth phase** characterized by rapid architectural experimentation and feature velocity. Projects are coalescing around three major paradigms: (1) comprehensive multi-channel agent frameworks (OpenClaw, Zeroclaw, IronClaw), (2) lightweight focused assistants (NanoBot, NanoClaw, ZeptoClaw), and (3) specialized integration platforms (LobsterAI, Moltis, CoPaw). A clear industry-wide shift is occurring from single-agent chatbots toward **multi-agent collaboration frameworks** with persistent memory systems, while security and authentication complexity remains the primary operational pain point across all project tiers.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release | Health Score | Tier |
|---------|-------------|-----------|---------|--------------|------|
| **OpenClaw** | 500 | 500 (156 merged) | v2026.3.28 | 🟢 Excellent | 1 - Ecosystem Leader |
| **NanoBot** | 17 | 98 (7 merged) | None | 🟡 Moderate | 2 - Active Development |
| **Zeroclaw** | ~15 | 50 (14 merged) | v0.6.7 | 🟢 Strong | 1 - High Velocity |
| **PicoClaw** | ~12 | 52 (18 merged) | v0.2.4-nightly | 🟡 Moderate | 2 - Architectural Shift |
| **NanoClaw** | 6 | 22 (8 merged) | None | 🟢 Active | 2 - Focused Growth |
| **IronClaw** | 9 | 50 (7 merged) | None | 🟢 Strong | 1 - Feature Expansion |
| **LobsterAI** | 4 | 7 (0 merged) | None | 🟡 Moderate | 3 - Sprint Phase |
| **Moltis** | 8 | 5 (3 merged) | 20260328.03 | 🟢 Healthy | 3 - Stable Iteration |
| **CoPaw** | 40 | 30 (15 merged) | None | 🟢 Active | 2 - Community Growth |
| **ZeptoClaw** | ~8 | 7 (1 merged) | None | 🟡 Moderate | 3 - Refinement |
| **EasyClaw** | 1 | 0 | v1.7.8 | 🟠 Maintenance | 4 - Stable/Minimal |
| **TinyClaw** | 0 | 0 | None | 🔴 Inactive | 5 - Dormant |

---

## 3. OpenClaw's Position

### Competitive Advantages
- **Ecosystem Scale:** With 500 issues and 500 PRs updated daily, OpenClaw operates at **10x the velocity** of nearest competitors, establishing it as the de facto reference implementation
- **Provider Breadth:** Native support for Oracle OCI, Qwen Model Studio, and Google Vertex ADC positions OpenClaw as the **enterprise integration standard**
- **Channel Maturity:** Comprehensive multi-channel support (Slack, Discord, Telegram, Matrix) with advanced threading and streaming capabilities exceeds peer implementations

### Technical Approach Differences
- **Architecture:** OpenClaw uses a monolithic-but-modular plugin architecture vs. Zeroclaw's WASM sandboxing approach and PicoClaw's multi-agent delegation model
- **Release Cadence:** Weekly stable releases with beta variants contrasts with competitors' ad-hoc release schedules
- **Scale Focus:** OpenClaw optimizes for multi-tenant enterprise deployments while NanoBot/NanoClaw target single-user scenarios

### Community Size Comparison
- **OpenClaw:** 66+ upvotes on single feature requests, 58+ comment threads — indicates **10,000+ active users**
- **Peers:** NanoBot (4-8 upvotes), Zeroclaw (3-5 upvotes) suggest **1,000-3,000 active users** each
- **Long Tail:** Remaining projects show sub-1,000 user bases based on engagement metrics

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|------------|----------|----------------|
| **Context Management & Memory** | OpenClaw, Zeroclaw, NanoBot, PicoClaw, ZeptoClaw | Context overflow recovery, semantic memory indexing (BM25+vector), biological hippocampus models, context compaction strategies |
| **Authentication & Security** | OpenClaw, NanoBot, Zeroclaw, IronClaw, NanoClaw | OAuth race conditions, OIDC JWT support, supply chain security, API key exposure prevention, sealed vault architectures |
| **Local LLM Compatibility** | IronClaw, Moltis, CoPaw, ZeptoClaw | Empty completion handling, extended probe timeouts (30s), bounded autonomous recovery, model discovery |
| **Multi-Channel Streaming** | OpenClaw, LobsterAI, Zeroclaw, ZeptoClaw | Telegram thread persistence, WeChat message queueing, Discord crash recovery, Matrix E2EE support |
| **Container/Docker Reliability** | OpenClaw, NanoClaw, PicoClaw, CoPaw | SELinux labels, skill installation without `brew`, PID persistence, startup optimization |
| **Tool/Skill Extensibility** | OpenClaw, Zeroclaw, NanoClaw, ZeptoClaw | WASM plugins, dynamic skill registration, MCP protocol support, tool discovery registries |

---

## 5. Differentiation Analysis

### Feature Focus Segmentation

| Segment | Projects | Primary Differentiator |
|---------|----------|------------------------|
| **Enterprise Agents** | OpenClaw, IronClaw | Financial execution layers, multi-tenant auth, compliance-ready |
| **Privacy-First** | Zeroclaw, Moltis | WASM sandboxing, sealed vaults, local-only options |
| **Embedded/Lightweight** | NanoBot, NanoClaw, PicoClaw | Single-binary deployment, ESP32 integration, low-resource operation |
| **Productivity Suites** | LobsterAI, CoPaw | Cowork modules, skill marketplaces, IM automation focus |
| **Research Platforms** | ZeptoClaw | Browser automation, context compaction experiments |

### Target User Divergence
- **OpenClaw/IronClaw:** DevOps teams and enterprise developers needing production-grade agents
- **NanoBot/PicoClaw:** Hobbyists and researchers experimenting with agent architectures
- **LobsterAI/CoPaw:** Chinese market-focused users requiring WeChat/DingTalk integration
- **Zeroclaw/Moltis:** Privacy-conscious self-hosters and security-focused deployments

### Architectural Philosophy
- **Plugin-Heavy:** OpenClaw (dynamic providers), Zeroclaw (WASM), NanoClaw (skills marketplace)
- **Monolithic:** EasyClaw, TinyClaw — limited extensibility
- **Multi-Agent:** PicoClaw (agent discovery/delegation), LobsterAI (cowork module)

---

## 6. Community Momentum & Maturity

### Rapidly Iterating (Tier 1)
- **OpenClaw:** 500 PRs/day indicates sustained hypergrowth; 418 open issues vs 82 closed shows feature expansion outpacing stabilization
- **Zeroclaw:** v0.6.7 release addresses core stability; WASM plugin system signals architectural maturation
- **IronClaw:** 50 PRs with "Secure Financial Execution Layer" indicates strategic enterprise pivot

### Stabilizing (Tier 2)
- **NanoBot:** Security incident (#2439) requires resolution; memory system overhaul PRs show deep architectural investment
- **PicoClaw:** "Agent Refactor Phase 2" transition causing configuration regressions; community actively patching
- **CoPaw:** High contributor influx (first-time contributors) with focus on bug fixes over features

### Maintenance Mode (Tier 3-4)
- **EasyClaw:** v1.7.8 addresses macOS signing only; zero PR activity
- **Moltis:** Steady incremental releases; Matrix support remains open request
- **TinyClaw:** Dormant — no activity in 24h window

---

## 7. Trend Signals

### Security Architecture Convergence
**Signal:** 4 projects report critical security issues (OpenClaw SQL injection, NanoBot supply chain, Zeroclaw paranoid defaults friction, IronClaw approval hijacking)
**Implication:** Security-by-default with granular override capability is becoming a competitive requirement. Projects treating security as binary (lockdown vs. open) face user rebellion.

### Memory System Evolution
**Signal:** All major projects (OpenClaw, NanoBot, Zeroclaw, PicoClaw, ZeptoClaw) actively developing context management — semantic indexing, biological models, compaction strategies
**Implication:** Simple context windows are insufficient. **Hybrid memory architectures** (vector + BM25 + structured recall) will become standard within 6 months. Developers should prioritize memory abstraction layers.

### Multi-Agent Orchestration
**Signal:** PicoClaw's "Agent Discovery/Delegation," LobsterAI's "Cowork," IronClaw's "Commitments System"
**Implication:** Single-agent architectures hitting complexity limits. Expect **agent-to-agent protocol standardization** (potentially MCP-based) to emerge as a cross-project initiative.

### Channel Reliability as Differentiator
**Signal:** Matrix E2EE broken in OpenClaw/Zeroclaw; Telegram streaming issues in 3 projects; WeChat queueing in LobsterAI
**Implication:** Channel implementations are fragile. Projects investing in dedicated channel maintenance (OpenClaw's per-channel `replyToMode`) will capture enterprise market share.

### Local LLM Production Readiness
**Signal:** IronClaw, Moltis, CoPaw all shipping fixes for local model edge cases (empty completions, probe timeouts, tool schema validation)
**Implication:** **Local LLM support is moving from checkbox feature to production requirement.** Expect increased investment in model-agnostic tool calling and graceful degradation patterns.

---

**Recommendation for Developers:** Target OpenClaw for enterprise deployments requiring ecosystem maturity; Zeroclaw for security-sensitive self-hosted scenarios; PicoClaw/NanoBot for research and experimentation with emerging multi-agent patterns.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-03-30

## 1. Today's Overview

NanoBot is experiencing **very high development activity** with 98 pull requests updated in the last 24 hours (91 open, 7 merged/closed) and 17 issues updated. The project is in an active iteration phase, likely preparing for a significant release. However, the community is currently grappling with a **critical security incident** (Issue #2439) involving potential supply chain compromise, which demands immediate attention. Development focus is split between Telegram channel enhancements, memory system optimization, and core agent loop stability improvements.

---

## 2. Releases

**No new releases** were published today. The last activity around releases involves the nightly branch refresh (Issue #2563), suggesting development changes are accumulating in the staging branch before a formal release.

---

## 3. Project Progress

### Merged/Closed PRs (7 total)
Limited merge activity today, with most PRs remaining in review:
- **#2626, #2624**: Telegram forum topics support iterations (superseded by #2628)

### Key Advancing Features (Open PRs)
| Area | PR | Description |
|------|-----|-------------|
| **Memory System** | [#2618](https://github.com/HKUDS/nanobot/pull/2618), [#2619](https://github.com/HKUDS/nanobot/pull/2619), [#2620](https://github.com/HKUDS/nanobot/pull/2620) | Major overhaul: semantic memory index with hybrid BM25+vector search, IndexService lifecycle, and optional QMD re-ranking sidecar |
| **Performance** | [#2609](https://github.com/HKUDS/nanobot/pull/2609) | Eliminates blocking LLM calls on critical path by moving memory consolidation to background tasks |
| **Telegram** | [#2628](https://github.com/HKUDS/nanobot/pull/2628), [#2608](https://github.com/HKUDS/nanobot/pull/2608), [#2593](https://github.com/HKUDS/nanobot/pull/2593) | Forum topic threads support, silent tool hints, code block rendering for tool hints |
| **Agent Core** | [#2521](https://github.com/HKUDS/nanobot/pull/2521) | SelfTool for runtime self-inspection and modification without restart |
| **Providers** | [#2584](https://github.com/HKUDS/nanobot/pull/2584), [#2617](https://github.com/HKUDS/nanobot/pull/2617) | Xiaozhi voice gateway support (ESP32), Ollama provider addition |

---

## 4. Community Hot Topics

### Most Active Discussions

| Issue/PR | Engagement | Analysis |
|----------|------------|----------|
| **[#2463](https://github.com/HKUDS/nanobot/issues/2463)** - Architectural issue: prompt prefix preservation | 8 comments | Core architectural concern about conversation history fidelity affecting OpenAI API compatibility. Users report context drift in long conversations. |
| **[#2439](https://github.com/HKUDS/nanobot/issues/2439)** - Security: Malicious code in PyPI package | 6 comments, 4 👍 | **Critical severity** — Supply chain attack concern via `litellm_init.pth`. High community anxiety; needs official security advisory. |
| **[#2114](https://github.com/HKUDS/nanobot/issues/2114)** - Webhook receiver capability | 5 comments | User demand for NanoBot as a general-purpose notification receiver (DDNS, service status). Closed but indicates integration use cases. |
| **[#2576](https://github.com/HKUDS/nanobot/issues/2576)** - Agent loop termination logic | 2 comments | Production reliability concern when LLM returns empty content after tool execution. |

### Underlying Needs
1. **Trust & Security**: Community seeks rapid official response to security allegations
2. **Production Reliability**: Users running NanoBot in production need predictable agent loop behavior
3. **Integration Flexibility**: Strong demand for webhook, HTTP streaming, and multi-tenant architectures

---

## 5. Bugs & Stability

### Critical
| Issue | Severity | Status | Fix Available |
|-------|----------|--------|---------------|
| **[#2439](https://github.com/HKUDS/nanobot/issues/2439)** - Malicious code in `litellm_init.pth` | 🔴 Critical | OPEN | No official response yet |

### High
| Issue | Description | Fix PR |
|-------|-------------|--------|
| **[#2613](https://github.com/HKUDS/nanobot/issues/2613)** - Agent stops with `NoneType` error mid-command | Intermittent execution failure in agent loop | None |
| **[#2576](https://github.com/HKUDS/nanobot/issues/2576)** - Poor agent loop termination handling | Empty LLM responses after tool execution cause abrupt termination | Related: [#2609](https://github.com/HKUDS/nanobot/pull/2609) (performance fix) |

### Medium
| Issue | Description | Fix PR |
|-------|-------------|--------|
| **[#2601](https://github.com/HKUDS/nanobot/issues/2601)** - Cron reminders not delivered in agent mode | Scheduled reminders fail to appear in CLI | None |
| **[#2591](https://github.com/HKUDS/nanobot/issues/2591)** - CLI duplicate output corruption | Terminal shows repeated "nanobot is thinking..." animations | None |
| **[#2450](https://github.com/HKUDS/nanobot/issues/2450)** - minimax-m2.7 via Ollama Cloud fails on 2nd+ request | Provider-specific connection issue | Related: [#2617](https://github.com/HKUDS/nanobot/pull/2617) (Ollama provider) |

### Low
| Issue | Description | Fix PR |
|-------|-------------|--------|
| **[#2612](https://github.com/HKUDS/nanobot/issues/2612)** - Config validation limits `sendMaxRetries` to 10 | User wants higher retry values | Closed (by design) |

---

## 6. Feature Requests & Roadmap Signals

### Likely Near-Term Additions
| Feature | Issue/PR | Probability | Rationale |
|---------|----------|-------------|-----------|
| **Telegram Forum Topics** | [#2627](https://github.com/HKUDS/nanobot/issues/2627) → [#2628](https://github.com/HKUDS/nanobot/pull/2628) | High | PR complete with tests, addresses real multi-topic use case |
| **Semantic Memory Index** | [#2618](https://github.com/HKUDS/nanobot/pull/2618), [#2619](https://github.com/HKUDS/nanobot/pull/2619) | High | 3-PR series indicates serious development investment |
| **HTTP Health Endpoint** | [#2625](https://github.com/HKUDS/nanobot/pull/2625) | Medium | Simple addition, enables production monitoring |
| **HTTP Streaming Channel** | [#2602](https://github.com/HKUDS/nanobot/issues/2602) | Medium | Strong multi-tenant use case, awaiting implementation |

### User-Requested Features
- **[#2588](https://github.com/HKUDS/nanobot/issues/2588)**: Home Assistant integration via OpenAI-compatible tool calling
- **[#2602](https://github.com/HKUDS/nanobot/issues/2602)**: HTTP streaming for multi-tenant gateway architectures
- **[#2603](https://github.com/HKUDS/nanobot/issues/2603)**: AgentHook extensibility for custom lifecycle hooks
- **[#2604](https://github.com/HKUDS/nanobot/issues/2604)**: Fully asynchronous memory consolidation

---

## 7. User Feedback Summary

### Pain Points
1. **Security Anxiety**: Users alarmed by unverified claims of malicious code; lack of official response increases uncertainty
2. **Agent Loop Reliability**: Production users frustrated when agent silently fails or returns empty responses
3. **Model Compatibility**: Qwen users struggling with tool calling (Home Assistant integration)
4. **CLI Experience**: Terminal output corruption affecting daily usage

### Positive Signals
- Strong community engagement with detailed bug reports and architectural discussions
- Multiple contributors submitting quality PRs (memory system, Telegram enhancements)
- Active nightly branch workflow indicates healthy development process

### Use Cases Emerging
- Multi-tenant Discord bot gateways with per-user container isolation
- Home automation control via local models (Qwen)
- Telegram community management with forum topics
- ESP32 voice assistant integration (Xiaozhi)

---

## 8. Backlog Watch

### Urgent Maintainer Attention Required

| Item | Concern | Action Needed |
|------|---------|---------------|
| **[#2439](https://github.com/HKUDS/nanobot/issues/2439)** - Security vulnerability claim | Unaddressed for 6+ days, 4 👍 | **Immediate official security advisory** — confirm/deny, provide mitigation steps |
| **[#2463](https://github.com/HKUDS/nanobot/issues/2463)** - Prompt prefix preservation | Core architectural issue affecting long conversations | Technical clarification or roadmap acknowledgment |

### Stale But Important
| Item | Status | Note |
|------|--------|------|
| **[#2450](https://github.com/HKUDS/nanobot/issues/2450)** - minimax-m2.7 Ollama Cloud failure | Open since 2026-03-24, tagged "good first issue" | Low priority but affects specific model users |
| **[#2603](https://github.com/HKUDS/nanobot/issues/2603)** - AgentHook extensibility | Created 2026-03-29 | Architectural limitation blocking downstream customization |

---

**Health Assessment**: ⚠️ **Moderate Concern** — Development velocity is excellent with substantial memory and Telegram improvements in progress. However, the unaddressed security allegation (#2439) poses reputational risk and requires immediate maintainer response to maintain community trust.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw Project Digest: 2026-03-30

## 1. Today's Overview
Zeroclaw demonstrates **very high velocity** with the release of **v0.6.7**, focusing heavily on agent stability via context management and overflow recovery. The project shows a healthy ratio of open (36) to merged (14) PRs, indicating a rigorous but active code review process. Activity is dominated by infrastructure improvements (CI/CD fixes) and significant enhancements to the plugin system and tool execution capabilities. While the release addresses core "brain" stability, the community is actively reporting friction regarding security defaults and specific provider integrations.

## 2. Releases

### **v0.6.7**
This maintenance and stability release focuses on preventing agent loops from crashing due to context limits.
*   **Agent Enhancements:**
    *   Added context overflow recovery in both the interactive daemon loop and tool call loop.
    *   Implemented fast-path tool result trimming in the context compressor.
    *   Added preemptive context checks before provider calls to prevent wasted API requests.
    *   Introduced a shared iteration budget to prevent infinite loops.
*   **Migration Note:** No breaking configuration changes noted, but the new "shared iteration budget" may alter behavior for complex, multi-step agent workflows.

## 3. Project Progress
**Merged/Closed PRs (14 today):**
*   **CI/Release Fixes:** Resolved critical blockages in the release workflow (`#5142`, `#5135`, `#5128`). This included fixing git config for tag creation and clearing a backlog of 20 Clippy errors that blocked builds.
*   **Plugin Architecture:** A major PR (`#5149`) was closed/merged (status indicates completion of review) introducing a **WASM plugin system** with security sandboxing and integration tests, signaling a shift toward extensibility.
*   **Tooling & Routing:** Fixed webhook request routing to ensure they pass through the tool-enabled chat path (`#5134`), ensuring webhooks can trigger agent tools just like chat messages.

**Open PRs Advancing Features:**
*   **Thread Support:** PR `#5129` adds `reply_to_message_id` across 20+ channels (Slack, Discord, Telegram, etc.).
*   **Dynamic Skills:** PR `#5131` introduces a tool handler for skill-defined tools, allowing skills to register their own dynamic capabilities.

## 4. Community Hot Topics
*   **Security vs. Usability (47 Comments)**: Issue **#1478** remains the hottest topic. Users are frustrated that "paranoid" security defaults render the agent useless for basic tasks (like installing packages) without explicit, complex configuration. The user explicitly states: "You are so safe that this bot can only be a chatbot... what is the point?"
    *   [Issue #1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478)
*   **Supply Chain Risk (3 👍)**: Issue **#4955** raised a critical security concern regarding the `open_skills_enabled` feature, which clones a third-party repo (`besoeasy/open-skills`) not maintained by Zeroclaw core team.
    *   [Issue #4955](https://github.com/zeroclaw-labs/zeroclaw/issues/4955)
*   **Matrix Channel Friction (9 Comments)**: Issue **#4657** tracks ongoing friction with the Matrix channel, specifically E2EE (End-to-End Encryption) breaking in v0.6.2+.
    *   [Issue #4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657)

## 5. Bugs & Stability
*   **S0 - Critical / Data Loss:**
    *   **CPU Spikes on Input:** **#5125** reports CPU spikes across multiple cores simply when typing in the agent chat (Firefox/Ubuntu).
    *   [Issue #5125](https://github.com/zeroclaw-labs/zeroclaw/issues/5125)
    *   **Memory Exhaustion:** **#4916** reports that `auto_save` combined with `memory_recall` creates a recursive "snowball" effect, stuffing the database with previous context snapshots until memory is exhausted.
    *   [Issue #4916](https://github.com/zeroclaw-labs/zeroclaw/issues/4916)
*   **S1 - Workflow Blocked:**
    *   **Sandboxing Limitations:** **#5126** reveals that the bubblewrap sandbox breaks dynamically-linked binaries on Debian Bookworm due to `/lib` symlink issues.
    *   [Issue #5126](https://github.com/zeroclaw-labs/zeroclaw/issues/5126)
    *   **Dashboard Build:** **#4866** highlights that the Web Dashboard/Tauri app fails to run, prompting a "Build it with npm" error that has persisted across versions.
    *   [Issue #4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)
    *   **Mistral Provider:** **#5117** notes Mistral tool calls fail due to an invalid `tool_call.id` format sent by Zeroclaw.
    *   [Issue #5117](https://github.com/zeroclaw-labs/zeroclaw/issues/5117)

## 6. Feature Requests & Roadmap Signals
*   **Token Minimization:** **#5146** proposes "Skill Compilation" to stop sending 400+ lines of prose for simple tasks like checking the weather. This suggests a move toward smaller, fine-tuned, or pre-compiled prompts.
    *   [Issue #5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146)
*   **Hallucination Detection:** **#4830** suggests adding HMAC-SHA256 receipts to tool executions to verify outputs are genuine and not hallucinated by the LLM.
    *   [Issue #4830](https://github.com/zeroclaw-labs/zeroclaw/issues/4830)
*   **SSRF & Private Hosts:** Multiple issues (`#5122`, `#4868`) and PRs (`#5148`, `#5104`) are pushing for granular control over `allowed_private_hosts` for internal network access. This is a high probability merge candidate.

## 7. User Feedback Summary
Users are split between **power users** and **hobbyists**.
*   **Pain Point - Security Complexity:** There is significant friction regarding the default security posture. Users feel the agent is "gimped" out of the box, requiring deep configuration to perform basic OS operations (Issue #1478).
*   **Pain Point - Missing Docs:** Users struggle to configure advanced providers (Aliyun Bailian #3059, GitHub Copilot #4851) due to missing or outdated documentation.
*   **Satisfaction:** The rapid addition of WASM plugins and dynamic skills is well-received by developers looking to extend the agent without forking the core.

## 8. Backlog Watch
*   **Android Support Removal:** Issue **#4783** asks why Android binaries (`aarch64-linux-android`) were removed after v0.6.2. This has not been formally addressed by maintainers, despite users finding it useful for Termux setups.
    *   [Issue #4783](https://github.com/zeroclaw-labs/zeroclaw/issues/4783)
*   **Broken Auto-Generated Skills:** Issue **#5143** reports that auto-generated skills are currently "conglomerates of memories" with broken tool definitions. This degrades the "self-improving" aspect of the agent.
    *   [Issue #5143](https://github.com/zeroclaw-labs/zeroclaw/issues/5143)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-03-30

## 1. Today's Overview
PicoClaw is demonstrating **high velocity development** with significant activity focused on architectural evolution and stability hardening. The project is currently transitioning into **"Agent Refactor Phase 2,"** moving from single-agent execution to sophisticated multi-agent collaboration frameworks. While core architectural advancements (Seahorse memory system, Agent Discovery) are underway, the recent v0.2.4 release introduced **configuration persistence regressions** across multiple channels (Discord, Telegram, QQ), which community contributors are actively patching. The ratio of open to merged PRs (34 open vs. 18 closed) suggests a healthy but consolidating codebase.

## 2. Releases
### **Nightly Build: v0.2.4-nightly.20260329.27f638e9**
- **Status**: Automated build (Use with caution).
- **Changes**: Includes updates from `main` branch post-v0.2.4.
- **Migration Note**: Users upgrading from v0.2.3 to v0.2.4 stable have reported broken channel configurations. It is recommended to verify token persistence after upgrading or wait for upcoming patches if relying heavily on Discord/Telegram/QQ channels.
- **Link**: [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.4...main)

## 3. Project Progress
**Merged PRs (18) focused on critical bug fixes and quality of life improvements:**
- **Channel Config Persistence**: Fixed a major regression where bot tokens and secrets (Discord, Telegram, QQ `app_secret`) were lost during configuration saves ([PR #2123](https://github.com/sipeed/picoclaw/pull/2123), [PR #2024](https://github.com/sipeed/picoclaw/pull/2024)).
- **Provider Compatibility**: Fixed Gemini API keys compatibility via OpenAI-compatible endpoints ([PR #1834](https://github.com/sipeed/picoclaw/pull/1834)).
- **Cron System Refactor**: Simplified cron architecture by removing redundant `deliver` and `type` params, unifying execution paths ([PR #2147](https://github.com/sipeed/picoclaw/pull/2147)).
- **UI Fixes**: Resolved unreadable contrast issues in Web Launcher Skills page dark mode ([PR #2166](https://github.com/sipeed/picoclaw/pull/2166)).

**Active Development (Open PRs):**
- **Multi-Agent Architecture**: Implementing Layer 1 "Agent Discovery" to enable agent-to-agent delegation ([PR #2158](https://github.com/sipeed/picoclaw/pull/2158)).
- **New Channels**: Integrating Chatmail (Delta Chat) ([PR #2167](https://github.com/sipeed/picoclaw/pull/2167)) and Mattermost ([PR #1586](https://github.com/sipeed/picoclaw/pull/1586)).
- **Vision Capabilities**: Adding `load_image` tool for local file vision analysis ([PR #2116](https://github.com/sipeed/picoclaw/pull/2116)).

## 4. Community Hot Topics
1.  **[Seahorse Memory System]** ([Issue #1919](https://github.com/sipeed/picoclaw/issues/1919))
    *   **Topic**: Proposal for a biologically-inspired memory system (hippocampus model) for lossless context compaction and long-term memory.
    *   **Analysis**: This is the most active enhancement discussion. It indicates a strong community desire to move beyond simple context windows toward persistent, structured agent memory, crucial for long-running autonomous tasks.
2.  **[Meta: Agent Refactor Phase 2]** ([Issue #1934](https://github.com/sipeed/picoclaw/issues/1934) & [Issue #2148](https://github.com/sipeed/picoclaw/issues/2148))
    *   **Topic**: Planning "Multi-Agent Collaboration within Single Pico".
    *   **Analysis**: This roadmap item signals the project's maturity shift from a single assistant to a multi-agent orchestration platform. The "Discovery → Delegation" implementation plan suggests a focus on dynamic capability routing.
3.  **[Live Task Feedback]** ([Issue #2137](https://github.com/sipeed/picoclaw/issues/2137))
    *   **Topic**: Request for "Live Task List" using message edits/reactions to show progress during long tasks.
    *   **Analysis**: Users are dissatisfied with the "black box" nature of long-running tasks. Visual progress indicators are becoming a requirement for trust and UX in agent systems.

## 5. Bugs & Stability
*Critical issues observed in the last 24h (mostly related to v0.2.4 stable):*

-   **High Severity: Token/Secret Persistence Failure**
    *   **Description**: Configurations for Discord, Telegram, and QQ channels fail to save `bot_token` or `app_secret` fields, breaking channel connectivity.
    *   **Fix Status**: **PATCHED**. Fixes merged in [PR #2123](https://github.com/sipeed/picoclaw/pull/2123) and [PR #2024](https://github.com/sipeed/picoclaw/pull/2024). Users should upgrade to the latest nightly or wait for the next patch release.
    *   *Refs*: [Issue #2027](https://github.com/sipeed/picoclaw/issues/2027), [Issue #2072](https://github.com/sipeed/picoclaw/issues/2072), [Issue #2033](https://github.com/sipeed/picoclaw/issues/2033).
-   **Medium Severity: Model Fallback Configuration Inheritance**
    *   **Description**: `model_fallbacks` incorrectly inherit the primary model's `api_base`/`api_key`, breaking cross-provider fallbacks.
    *   **Fix Status**: **PR OPEN** ([PR #2143](https://github.com/sipeed/picoclaw/pull/2143)).
    *   *Ref*: [Issue #2140](https://github.com/sipeed/picoclaw/issues/2140).
-   **Low Severity: Gateway Startup Error**
    *   **Description**: Reports of missing PID on fresh install gateway startup.
    *   **Fix Status**: Investigating ([Issue #2105](https://github.com/sipeed/picoclaw/issues/2105)).

## 6. Feature Requests & Roadmap Signals
*Features gaining traction and likely to appear in upcoming versions:*
-   **External Tool Injection (MCP Support)**: Request to add `respond` action in `before_tool` hooks to support Model Context Protocol tools ([Issue #2160](https://github.com/sipeed/picoclaw/issues/2160)). High architectural priority.
-   **Task Cancellation**: Introduction of a `/stop` command to halt running tasks ([Issue #2009](https://github.com/sipeed/picoclaw/issues/2009)). "Recruiting" status suggests maintainers are looking for contributors.
-   **Docker Dev Tools**: Pre-installing `python`, `curl`, `jq` in Docker images for better debugging capability ([Issue #1228](https://github.com/sipeed/picoclaw/issues/1228)).

## 7. User Feedback Summary
-   **Pain Points**: The v0.2.4 upgrade path was rocky for users relying on Web UI configuration, specifically regarding channel secrets. Users express frustration when switching models due to lack of visibility (cannot see available models list).
-   **Use Cases**: Users are attempting to run complex cron jobs on low-power devices (Raspberry Pi Zero) and multi-channel setups, indicating PicoClaw is being used for 24/7 personal automation.
-   **Sentiment**: generally positive regarding the pace of development ("Phase 2"), but trust is currently impacted by the configuration-busting bugs in the stable release.

## 8. Backlog Watch
-   **[Security] Authula Integration** ([Issue #1067](https://github.com/sipeed/picoclaw/issues/1067)): Request for Authentication/Authorization layer (1 👍). Critical for public-facing deployments but currently stagnant since early March.
-   **[Bug] Tool Call Extraction Flaw** ([Issue #2136](https://github.com/sipeed/picoclaw/issues/2136)): Security researcher flagged a significant flaw in extraction logic. While a PR exists, the author notes conflict issues; needs maintainer review to prevent regression.
-   **[Feature] WhatsApp Native Build** ([Issue #1567](https://github.com/sipeed/picoclaw/issues/1567)): Build failing for 2 weeks, needs attention to keep channel parity.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-30

## 1. Today's Overview
NanoClaw shows **high development velocity** today with 22 pull requests updated (8 merged/closed) against 6 active issues. The project is in an active iteration phase, focusing heavily on **stability fixes** (session handling, SELinux support) and **ecosystem expansion** (new dashboard, skills marketplace, communication channels). No new official releases were cut, suggesting merged fixes are accumulating for a future stable tag. The ratio of PRs to issues indicates a healthy, code-focused contributor base actively shipping enhancements.

---

## 2. Releases
**No new releases** were published today. Recent merged PRs appear to be staging for an upcoming release.

---

## 3. Project Progress
Significant advancements were merged or closed today:

| PR | Type | Summary |
|---|---|---|
| [#1532 → #1533](https://github.com/qwibitai/nanoclaw/pull/1533) | **Bug Fix** | Fixed infinite retry loop caused by persisting stale session IDs from failed containers (fixes Issue #1531) |
| [#1529](https://github.com/qwibitai/nanoclaw/pull/1529) | **Compatibility** | Added SELinux `:z` label to Docker volume mounts for Fedora/RHEL support |
| [#1535](https://github.com/qwibitai/nanoclaw/pull/1535) | **Refactor** | Reverted native credential proxy changes |
| [#1506](https://github.com/qwibitai/nanoclaw/pull/1506) | **Reliability** | Added auto-recovery from stale Claude sessions after WSL/container crashes |
| [#1539](https://github.com/qwibitai/nanoclaw/pull/1539) | **Feature** | Status tracker skill with non-main group support (closed—likely merged or restructured) |
| [#1536](https://github.com/qwibitai/nanoclaw/pull/1536) | **Skill** | Image generation skill added |
| [#1526](https://github.com/qwibitai/nanoclaw/pull/1526) | **Integration** | WhatsApp media fetcher utility |

**Key themes:** Container reliability, Linux distribution compatibility, and skill ecosystem growth.

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|---|---|---|
| [Issue #127 (CLOSED)](https://github.com/qwibitai/nanoclaw/issues/127) | 6 comments, 9 👍 | **Onboarding gap** — User struggled to set up NanoClaw with "opencode" instead of Claude. High reactions indicate demand for alternative LLM backend support or clearer multi-provider documentation. |
| [Issue #1503](https://github.com/qwibitai/nanoclaw/issues/1503) | 4 comments | **Infrastructure incident** — `nanoclaw.dev` SSL certificate failure. Active discussion suggests this is being addressed by maintainers. |
| [Issue #1424](https://github.com/qwibitai/nanoclaw/issues/1424) | 2 comments, 1 👍 | **Security concern** — Fork visibility for healthcare deployments. User needs private forks for sensitive environments but GitHub restricts this. Underlying need: enterprise/privacy-friendly deployment patterns. |
| [PR #1121](https://github.com/qwibitai/nanoclaw/pull/1121) | Long-running | **Signal channel skill** — Awaiting review since mid-March. Community demand for additional messaging platforms beyond WhatsApp/Telegram. |

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|---|---|---|---|
| 🔴 **Critical** | [Issue #1531](https://github.com/qwibitai/nanoclaw/issues/1531) | Infinite retry loop when expired session IDs are persisted from failed containers | ✅ Fixed in [PR #1533](https://github.com/qwibitai/nanoclaw/pull/1533) |
| 🟡 **Medium** | [Issue #1503](https://github.com/qwibitai/nanoclaw/issues/1503) | Invalid SSL cert on `nanoclaw.dev` documentation site | 🔧 Active discussion |
| 🟡 **Medium** | [Issue #1485](https://github.com/qwibitai/nanoclaw/issues/1485) | Supply chain attack vulnerability from `curl | bash` host installs | 📋 Open — PR [#1446](https://github.com/qwibitai/nanoclaw/pull/1446) addresses related Linux setup issues |
| 🟢 **Low** | SELinux permission denied | Docker mounts fail on Fedora/RHEL | ✅ Fixed in [PR #1529](https://github.com/qwibitai/nanoclaw/pull/1529) |

---

## 6. Feature Requests & Roadmap Signals

| Feature Signal | Source | Likelihood | Rationale |
|---|---|---|---|
| **Remote agent approval flow** | [Issue #1537](https://github.com/qwibitai/nanoclaw/issues/1537) | 🔺 High | Addresses critical safety gap for Telegram/WhatsApp agents; well-structured proposal |
| **NanoClaw-in-Docker** | [Issue #1485](https://github.com/qwibitai/nanoclaw/issues/1485) | 🔺 High | Security-focused request aligned with container-first architecture |
| **Web dashboard** | [PR #1514](https://github.com/qwibitai/nanoclaw/pull/1514) | 🔺 High | Feature-complete PR exists; addresses multi-user collaboration need |
| **Token cost tracking** | [PR #1528](https://github.com/qwibitai/nanoclaw/pull/1528) | 🟡 Medium | Operational visibility feature with implementation ready |
| **MCP server integration** | [PR #1515](https://github.com/qwibitai/nanoclaw/pull/1515) | 🟡 Medium | Enables Home Assistant, Google Workspace integrations |
| **Skills marketplace migration** | [PR #1470](https://github.com/qwibitai/nanoclaw/pull/1470) | 🟡 Medium | Architectural shift to plugin system; 24 skills ready for extraction |
| **Alternative LLM backends** | [Issue #127](https://github.com/qwibitai/nanoclaw/issues/127) | 🟡 Medium | 9 👍 signals community demand; may require architectural changes |

---

## 7. User Feedback Summary

**Pain Points:**
- **Installation security**: Users uncomfortable with `curl | bash` patterns on production systems ([#1485](https://github.com/qwibitai/nanoclaw/issues/1485))
- **Fork privacy**: Healthcare/enterprise users need private forks but can't make them ([#1424](https://github.com/qwibitai/nanoclaw/issues/1424))
- **LLM provider lock-in**: Non-Claude users (opencode) face setup friction ([#127](https://github.com/qwibitai/nanoclaw/issues/127))
- **Remote agent safety**: No approval mechanism for agents accessed via messaging apps ([#1537](https://github.com/qwibitai/nanoclaw/issues/1537))

**Positive Signals:**
- Active community contributing diverse skills (Signal, WhatsApp, image generation)
- Multiple PRs for observability features (dashboard, cost tracking)
- Quick turnaround on critical bug (session retry loop fixed same-day)

---

## 8. Backlog Watch

| Item | Age | Status | Action Needed |
|---|---|---|---|
| [PR #1121 — Signal Channel](https://github.com/qwibitai/nanoclaw/pull/1121) | 14 days | Needs Review | Maintainer review requested; complete implementation |
| [PR #1470 — Skills Marketplace](https://github.com/qwibitai/nanoclaw/pull/1470) | 4 days | Open | Architectural decision needed on plugin system |
| [Issue #1424 — Fork Security](https://github.com/qwibitai/nanoclaw/issues/1424) | 5 days | Open | Needs documentation or feature response for enterprise use cases |
| [PR #1362 — Quad Inbox Skill](https://github.com/qwibitai/nanoclaw/pull/1362) | 7 days | Open | Container↔host async communication pattern; review needed |

---

**Digest compiled from 28 GitHub events • Project health: 🟢 Active**

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-03-30

## 1. Today's Overview
IronClaw demonstrates **very high development velocity** with a massive influx of 50 updated pull requests (43 open) against only 9 issues, signaling a heavy feature integration phase. The team is focused on architectural overhauls, specifically unifying configuration systems and extracting the frontend into a standalone crate. While core contributors push significant structural changes like the "Commitments System" and "Secure Financial Execution Layer," community members are actively expanding LLM provider support (Aliyun, MiniMax) and fixing critical edge cases in WASM tools. The ratio of open to merged PRs suggests a busy review cycle but potentially delayed integrations.

## 2. Releases
**No new releases** were recorded today. The latest updates remain in the `staging` branch, with an auto-promotion attempt visible in PR #1743.

## 3. Project Progress
Significant advancements were merged or closed today, focusing on stability and provider compatibility:

*   **Agent Stability (Merged):** PR #1720 introduced bounded autonomous recovery for worker jobs to handle empty tool completions from local models, preventing "max iterations exceeded" crashes.
*   **Security Fixes (Merged):** PR #1495 fixed a cross-channel approval hijacking vulnerability, ensuring thread resolution remains channel-scoped. PR #1630 resolved a validation error with AWS Bedrock when tool history was present but tools were disabled.
*   **Authentication & Config (Merged):** PR #1463 added OIDC JWT authentication support for reverse-proxy deployments (e.g., AWS ALB, Okta). PR #1340 enabled custom LLM provider configuration directly via the Web UI.
*   **Skills System (Merged):** PR #1664 (Issue #1664) fixed skill discovery to support recursive/bundled skill directories.

## 4. Community Hot Topics
The most active discussions revolve around **security architecture** and **configuration flexibility**:

*   **[Issue #1739] Async Transaction Approval:** A high-engagement discussion (4 comments) on implementing WalletConnect for secure, two-phase transaction approvals. This aligns with the broader push for financial agent capabilities.
    *   *Underlying Need:* Users want agents capable of executing financial actions but require a "human-in-the-loop" security model that isolates approval from the agent's context.
*   **[Issue #1676] Telegram Bot Reliability:** A bug report with 10 comments highlighting persistent failures in HTTP tool routines for Telegram polling.
    *   *Underlying Need:* Users are struggling to use IronClaw as a personal assistant on alternative interfaces (Telegram) due to brittle HTTP tool implementations.

## 5. Bugs & Stability
Several high-impact bugs were identified, with fixes in progress or recently merged:

1.  **[High] Execution Loop Exhaustion (Issue #1611 / PR #1720):** Local models (Ollama) returning empty tool completions caused the agent to hit the 50-iteration limit and fail.
    *   *Status:* **Fixed** in PR #1720 (Merged).
2.  **[High] Bedrock API Validation Errors (Issue #1629 / PR #1630):** AWS Bedrock failed when `toolConfig` was missing but tool history existed.
    *   *Status:* **Fixed** in PR #1630 (Merged).
3.  **[Medium] Telegram Polling Failure (Issue #1676):** The `http` tool fails to correctly poll Telegram for messages, rendering the bot half-functional.
    *   *Status:* **Open**, actively discussed but no fix PR linked yet.
4.  **[Medium] MiniMax API Auth Failure (Issue #1742):** 401 Unauthorized errors suggest integration issues with the MiniMax provider.
    *   *Status:* **Open**, needs investigation.

## 6. Feature Requests & Roadmap Signals
The roadmap is clearly trending toward **"OS-like extensibility"** and **"Financial Agent"** capabilities:

*   **Secure Financial Layer (Issue #1712):** A high-risk proposal to architect a secure execution layer for crypto actions, custody, and policy enforcement. This is likely the next major strategic milestone.
*   **Commitments System (PR #1736):** A proposed system for tracking personal commitments using existing memory/routine tools, moving IronClaw closer to a true "Executive Assistant" role.
*   **Kernel/Extension Architecture (Issue #1741):** A design proposal to move from compile-time dependencies to a dynamic, OS-like extension model to reduce bloat and improve modularity.
*   **LAN Access for LLMs (PR #1696):** A highly practical feature allowing `LLM_ALLOW_LOCAL_NETWORK` to connect to self-hosted models on LAN IPs.

## 7. User Feedback Summary
*   **Pain Point - Tooling Reliability:** Users express frustration that basic functionalities like Telegram polling (Issue #1676) are broken compared to "forks" or previous versions (referenced as "openclaw").
*   **Pain Point - Local Model Compatibility:** Users running local models (Ollama) face instability with empty completions (Issue #1611), indicating a need for more robust fallback handling for non-standard LLM outputs.
*   **Positive Signal - UI Customization:** The extraction of the frontend (PR #1725) and custom LLM config UI (PR #1340) are likely to be well-received by users deploying IronClaw in corporate or self-hosted environments.

## 8. Backlog Watch
*   **[PR #1446] Aliyun Coding Plan Support:** An "XL" sized PR open since March 20th. It adds significant functionality (Aliyun Provider) but hasn't been merged, possibly due to complexity or lack of maintainer bandwidth for review.
*   **[PR #1109] Routine Refresh Logic:** A core fix for routine event caching that has been open since March 13th. This impacts the reliability of scheduled tasks and needs priority review.
*   **[Issue #1712] Financial Layer:** A strategic architectural issue that requires high-level input from core maintainers to define the scope before implementation begins.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-03-30

## 1. Today's Overview
LobsterAI is demonstrating **high active development velocity** with 7 new feature-focused Pull Requests opened in the last 24 hours against 0 merged, suggesting a sprint or feature freeze period is underway. The community engagement is moderate, with 4 active Issues discussing both architectural direction and stability bugs. While the lack of recent releases indicates a potential accumulation phase for a larger update, the project appears to be aggressively expanding its "Cowork" (agent collaboration) capabilities and user experience features. The overall project health is active but faces questions regarding long-term architectural direction.

## 2. Releases
**No new releases** were recorded in the last 24 hours.
*   *Note:* The high volume of feature PRs (#1008-#1013) currently open suggests that a significant feature-packed release is likely being staged for the near future.

## 3. Project Progress
No PRs were merged today; however, substantial new code has been submitted for review, focusing heavily on the **Cowork Module** and **User Onboarding**:
*   **UI/UX Enhancements:** PR [#1013](https://github.com/netease-youdao/LobsterAI/pull/1013) introduces a slash-triggered skill picker for faster prompt composition, and PR [#1010](https://github.com/netease-youdao/LobsterAI/pull/1010) adds "reveal in folder" actions for output files.
*   **Content Rendering:** PR [#1011](https://github.com/netease-youdao/LobsterAI/pull/1011) proposes an extensible artifacts preview pipeline for HTML/React/Mermaid, aiming to make code blocks immediately consumable.
*   **Prompt Engineering:** PR [#1009](https://github.com/netease-youdao/LobsterAI/pull/1009) adds a prompt template library with variable filling support to reduce repetitive typing.
*   **Expansion:** PR [#1008](https://github.com/netease-youdao/LobsterAI/pull/1008) expands preset agents from 6 to 12 scenarios, and PR [#644](https://github.com/netease-youdao/LobsterAI/pull/644) integrates Qwen OAuth login to lower the barrier to entry.

## 4. Community Hot Topics
The most significant discussion involves the **future architectural direction** of the project:
*   **Strategic Direction Uncertainty ([Issue #418](https://github.com/netease-youdao/LobsterAI/issues/418)):** Users have noticed code changes suggesting a switch from the Claude Agent SDK to an engine referred to as "openclaw." The community is asking for official clarification on whether the current SDK-based "cowork" features will continue to be maintained and if the switch is due to controllability issues with the Claude SDK. This issue highlights user anxiety regarding dependency stability and vendor lock-in.

## 5. Bugs & Stability
Several stability issues regarding background processes and integrations were reported:
1.  **Agent Engine Infinite Restart ([Issue #1007](https://github.com/netease-youdao/LobsterAI/issues/1007)):** *High Severity.* Users report the Agent Engine entering an infinite restart loop, rendering the agent unusable. No fix PR is linked yet.
2.  **Windows Auto-start Failure ([Issue #595](https://github.com/netease-youdao/LobsterAI/issues/595)):** *Medium Severity.* The process exits silently ~3 seconds after launch on Windows startup. The lack of logging makes this difficult to debug.
3.  **WeChat Sync Delay ([Issue #986](https://github.com/netease-youdao/LobsterAI/issues/986)):** *Low Severity.* The WeChat bot queues responses and sends them all at once after the client finishes, rather than streaming, resulting in a "message bombing" user experience.

## 6. Feature Requests & Roadmap Signals
*   **Streaming Synchronization:** Based on Issue [#986](https://github.com/netease-youdao/LobsterAI/issues/986), there is a clear need for better message synchronization strategies for IM platforms (WeChat) to support true streaming replies.
*   **Skill Creation via Conversation:** PR [#1012](https://github.com/netease-youdao/LobsterAI/pull/1012) addresses a latent need for easier skill generation, allowing users to create skills through dialogue rather than manual coding/uploading.
*   **Configuration Robustness:** Issue [#1007](https://github.com/netease-youdao/LobsterAI/issues/1007) implicitly requests better configuration validation or "circuit breakers" to prevent infinite restart loops.

## 7. User Feedback Summary
Users are actively using LobsterAI for **IM automation (WeChat)** and **local agent tasks**, but friction exists in both areas.
*   **Pain Points:** The "burst" messaging behavior in WeChat integrations creates a poor recipient experience. Additionally, the opacity of the Agent Engine's crash logs prevents users from self-diagnosing startup failures.
*   **Satisfaction:** The community is technically engaged (noticing engine switches in code), indicating a developer-heavy user base that values transparency and architectural stability.

## 8. Backlog Watch
*   **Maintainer Attention Required:** Issue [#418](https://github.com/netease-youdao/LobsterAI/issues/418) (Engine Switch Clarification) has been open since mid-March and updated recently. It requires an official "Statement of Direction" to prevent community fragmentation or fear of deprecation regarding the Claude SDK implementation.
*   **Technical Debt:** Issue [#595](https://github.com/netease-youdao/LobsterAI/issues/595) (Windows startup crash) remains unresolved; the lack of log output suggests a need for better bootstrapping error handling in the app.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-03-30

## 1. Today's Overview
Moltis shows **high activity** with 8 issues and 5 PRs updated in the last 24 hours, indicating a rapidly evolving codebase. The team is actively shipping fixes for provider integrations (Z.AI, local LLMs) and core architectural improvements (GraphQL binding, vault security). A new release (`20260328.03`) was cut, incorporating recent stability fixes. The project appears to be in a **feature expansion phase**, balancing new channel support (Matrix) with critical bug squashing for model selection and provider timeouts.

## 2. Releases
### **20260328.03**
- **Summary:** This release consolidates critical fixes for model discovery and provider connectivity.
- **Key Changes:**
  - Fixed GraphQL live chat service binding issues (PR #511).
  - Increased model probe timeouts to 30s for local LLM compatibility (PR #515).
  - Resolved issues where most models couldn't be selected due to timeout/validation failures (Issue #514).
- **Migration Notes:** Users running local LLMs (e.g., Ollama, vLLM) should upgrade immediately to benefit from extended probe timeouts. No breaking configuration changes noted.

## 3. Project Progress
Significant progress was made on **provider extensibility** and **core stability**:
- **Merged PRs:**
  - **[PR #517]** Added `zai-code` provider, specifically targeting Z.AI Coding plan endpoints to resolve billing/auth conflicts.
  - **[PR #511]** Fixed a critical architectural bug where GraphQL chat requests bypassed runtime state bindings.
  - **[PR #515]** Hardened model detection for local servers by increasing timeouts from 10s to 30s.
- **Open PRs (In Progress):**
  - **[PR #503]** Major feature drop introducing session recall, managed SSH runtime, and skill portability.
  - **[PR #518]** Refining vault security to allow unencrypted session history access while the vault is sealed.

## 4. Community Hot Topics
The most engaging discussions center on **integration flexibility** and **platform support**:

1.  **[Issue #176 (Closed)] Add datetime to system prompt context** (👍 1, 15 comments)
    - *Analysis:* High comment volume suggests complex implementation details or strong community desire for time-aware agents. The closure indicates this feature is likely now part of the core logic.
    - Link: https://github.com/moltis-org/moltis/issues/176

2.  **[Issue #185 (Open)] Add Z.AI Coding Plan** (👍 5, 5 comments)
    - *Analysis:* Users are actively requesting alternatives to standard API tiers. The related PR (#517) was swiftly merged, showing responsiveness to user billing needs.
    - Link: https://github.com/moltis-org/moltis/issues/185

3.  **[Issue #233 (Open)] Matrix Support** (👍 2, 3 comments)
    - *Analysis:* Continued interest in decentralized communication channels. This remains an open enhancement request.
    - Link: https://github.com/moltis-org/moltis/issues/233

## 5. Bugs & Stability
Several stability issues were identified and resolved in this cycle:

| Severity | Issue | Description | Status |
| :--- | :--- | :--- | :--- |
| **High** | [Issue #514](https://github.com/moltis-org/moltis/issues/514) | Most models couldn't be selected (probe timeouts). | **Fixed** (PR #515) |
| **High** | [Issue #494](https://github.com/moltis-org/moltis/issues/494) | GraphQL bypassed live chat service, causing stale state. | **Fixed** (PR #511) |
| **Medium** | [Issue #414](https://github.com/moltis-org/moltis/issues/414) | Z.AI network errors/OOB failures. | **Fixed** (PR #517 added specific provider) |
| **Medium** | [Issue #485](https://github.com/moltis-org/moltis/issues/485) | Built-in tools generated invalid JSON Schema for strict providers. | **Closed** (Likely addressed in recent schema fixes) |

## 6. Feature Requests & Roadmap Signals
- **Local/Edge AI Focus:** [Issue #490] "Local thinking" suggests users want hybrid architectures where reasoning happens locally while orchestration might be remote.
- **Session UX:** [PR #503] introduces "Session Recall" and "Skill Portability," signaling a push towards persistent, movable agent skills rather than stateless sessions.
- **Security UX:** [PR #518] addresses the "Sealed Vault" friction, indicating a roadmap towards smoother security boundaries for personal data.

## 7. User Feedback Summary
Users are vocal about **usability friction** and **provider compatibility**:
- **Pain Points:** Users experienced "insufficient balance" errors on Z.AI ([Issue #185]) and network errors ([Issue #414]) because the generic provider didn't match specific plan requirements.
- **Frustration:** The inability to select models ([Issue #514]) caused immediate workflow blocks, likely due to strict timeout defaults not accounting for model loading times on consumer hardware.
- **Satisfaction:** Rapid closure of the Z.AI Coding Plan request ([Issue #185] -> [PR #517]) demonstrates high maintainer responsiveness to payment/accessibility barriers.

## 8. Backlog Watch
The following items require maintainer attention as they represent long-standing or strategic requests:
- **[Issue #233] Matrix Support:** A feature request with 2 upvotes still open. As Moltis expands channel support, this is a prime candidate for the next roadmap inclusion.
- **[Issue #490] Local Thinking:** A philosophical/architectural request with 0 upvotes but high potential impact for privacy-focused users. Needs a design RFC.
- **[PR #503] Session Recall:** A massive PR affecting core UX. It needs thorough review as it touches SSH runtimes and context ingestion.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-03-30

## 1. Today's Overview
The CoPaw project is experiencing a **high-velocity phase of community contribution and bug reporting**, evidenced by 40 updated issues and 30 updated pull requests in the last 24 hours. While the project has not released a new version recently, the development focus appears to be on stabilization and expanding integration capabilities. Significant activity surrounds performance issues (CPU pegging) and user experience (UX) friction regarding language settings and context management. The high volume of "first-time-contributor" PRs suggests a healthy, accessible open-source ecosystem is forming around the framework.

## 2. Releases
No new releases were recorded today. The project remains on recent stable versions (likely `0.2.0` series), with development energy focused on accumulating fixes and features for the next iteration.

## 3. Project Progress
The merge activity today (15 merged PRs) focused heavily on **quality of life improvements and bug fixes**:

*   **Critical Installation Fix:** [PR #2489](https://github.com/agentscope-ai/CoPaw/pull/2489) fixed a typo in `install.ps1` that prevented Windows PATH updates, resolving [Issue #2488](https://github.com/agentscope-ai/CoPaw/issues/2488).
*   **UI/UX Enhancements:** [PR #2483](https://github.com/agentscope-ai/CoPaw/pull/2483) improved chat session displays with channel labels/icons, and [PR #2479](https://github.com/agentscope-ai/CoPaw/pull/2479) added tooltips to the chat interface.
*   **Documentation:** [PR #2486](https://github.com/agentscope-ai/CoPaw/pull/2486) updated documentation for magic commands, and [PR #2480](https://github.com/agentscope-ai/CoPaw/pull/2480) updated skill docs/UI.
*   **Layout Stability:** [PR #1401](https://github.com/agentscope-ai/CoPaw/pull/1401) stabilized provider card layouts across different locales.

## 4. Community Hot Topics
*   **Community Contribution Drive:** The most active item is [Issue #2291](https://github.com/agentscope-ai/CoPaw/issues/2291) (36 comments), a "Help Wanted" board. This indicates a strong influx of new contributors claiming tasks.
*   **Performance Regression:** [Issue #2218](https://github.com/agentscope-ai/CoPaw/issues/2218) (17 comments) reports 100% CPU usage at idle due to a busy-polling loop. This is a major concern for users running CoPaw as a persistent background service.
*   **Context Management for Power Users:** [Issue #2482](https://github.com/agentscope-ai/CoPaw/issues/2482) (9 comments) highlights "pain points" for developers using CoPaw, specifically requesting physical deletion of conversations (to remove "noisy" context) and better AI-based context compression strategies.

## 5. Bugs & Stability
*   **⚠️ Critical CPU Usage:** [Issue #2218](https://github.com/agentscope-ai/CoPaw/issues/2218) - CoPaw process pegs 100% CPU at idle. *Status: Open, investigating.*
*   **⚠️ Agent Deadlock:** [Issue #2445](https://github.com/agentscope-ai/CoPaw/issues/2445) - Gateway restarts cause Agents to freeze permanently. *Status: Closed (likely addressed or non-reproducible in current testing, but user impact was severe).*
*   **Model Provider Failures:**
    *   [Issue #2303](https://github.com/agentscope-ai/CoPaw/issues/2303) & [Issue #2503](https://github.com/agentscope-ai/CoPaw/issues/2503): MiniMax provider failing 404 or model ID format errors.
    *   [Issue #2042](https://github.com/agentscope-ai/CoPaw/issues/2042): GLM model `thinking` field causing TypeErrors.
*   **Settings Persistence:** [Issue #2431](https://github.com/agentscope-ai/CoPaw/issues/2431) & [Issue #2269](https://github.com/agentscope-ai/CoPaw/issues/2269) - Language settings reset to English after restart. *Status: Closed, likely fixed by recent patches.*
*   **File Reading Truncation:** [Issue #2500](https://github.com/agentscope-ai/CoPaw/issues/2500) - Tools fail to read entire files; content gets truncated and auto-continuation fails.

## 6. Feature Requests & Roadmap Signals
The roadmap is being actively shaped by power-user needs and integration requirements:
*   **Asset Portability:** [Issue #2443](https://github.com/agentscope-ai/CoPaw/issues/2443) proposes a "User Asset Backup & Migration" system (Memories, Skills, Tools) into a ZIP format.
*   **Advanced Task Scheduling:** [Issue #2452](https://github.com/agentscope-ai/CoPaw/issues/2452) requests suppression of conversational responses in Cron jobs for "silent" script execution.
*   **Enterprise Integration:** [Issue #2451](https://github.com/agentscope-ai/CoPaw/issues/2451) requests DingTalk AI table/document operations as agent tools (Currently implemented in [PR #2465](https://github.com/agentscope-ai/CoPaw/pull/2465)).
*   **Multi-Platform Synergy:** [Issue #2493](https://github.com/agentscope-ai/CoPaw/issues/2493) asks for cloud-to-local collaboration (OpenClaw-style nodes).

## 7. User Feedback Summary
Users are heavily utilizing CoPaw for **coding assistance and batch file processing**, but friction points exist in **long-context management** (users feel "polluted" context ruins the session and want better deletion/compression).
*   **Pain Point:** "Context pollution" where debugging noise affects future turns; users want granular control over context history ([Issue #2482](https://github.com/agentscope-ai/CoPaw/issues/2482)).
*   **Pain Point:** Stability in batch tasks; users report tasks stopping mid-way through large file sets ([Issue #2377](https://github.com/agentscope-ai/CoPaw/issues/2377)).
*   **Positive Signal:** High engagement with the "Skills" system, specifically requesting a "Skills Hub" for easier discovery ([Issue #2418](https://github.com/agentscope-ai/CoPaw/issues/2418)).

## 8. Backlog Watch
*   **OpenAI-style Tool Calls Support:** [PR #1512](https://github.com/agentscope-ai/CoPaw/pull/1512) has been open since March 15. It addresses nested tool calls for local models. This is a crucial update for local model users and needs a maintainer review.
*   **Docker Optimization:** [PR #2051](https://github.com/agentscope-ai/CoPaw/pull/2051) (open since March 22) promises a 30% reduction in image size and 10s faster startup. This is highly valuable for deployment but remains unmerged.
*   **Empty Tool Name Bug:** [Issue #1456](https://github.com/agentscope-ai/CoPaw/issues/1456) (Open since March 13) involves silent failures due to empty tool names. This affects reliability significantly and needs prioritization.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-03-30

## 1. Today's Overview
ZeptoClaw is currently undergoing a period of intense architectural refinement and feature expansion, evidenced by **7 active pull requests** focusing on critical infrastructure like context compaction and browser automation. The project shows no release activity today, but the volume of open PRs suggests a significant version bump is imminent. The primary focus is on fixing integration friction points—specifically regarding shell escaping and provider routing—while simultaneously hardening the agent's stability for long-running tasks. This indicates the team is prioritizing technical debt reduction and reliability over shipping immediate incremental updates.

## 2. Releases
No new releases were recorded today.

## 3. Project Progress
The only merged/closed item today was **[PR #464](https://github.com/qhkm/zeptoclaw/pull/464)** (`feat(cli): register missing tools in tool registry`).
*   **Impact:** This fix ensures that 11 previously "hidden" tools (including `git`, `pdf_read`, and `stripe`) are now visible and accessible via the CLI. This resolves a major discoverability gap where users could not interact with significant portions of the agent's capabilities.

**Advancing Features (Open PRs):**
*   **Context Management:** **[PR #460](https://github.com/qhkm/zeptoclaw/pull/460)** introduces a multi-layered context compaction strategy to prevent token overflow crashes during long conversations.
*   **Browser Automation:** **[PR #459](https://github.com/qhkm/zeptoclaw/pull/459)** is integrating `agent-browser` with Lightpanda/Chrome fallbacks, signaling a major expansion into web interaction capabilities.
*   **Sandboxing:** **[PR #463](https://github.com/qhkm/zeptoclaw/pull/463)** is actively wiring up Landlock workspace access to ensure secure runtime environments.

## 4. Community Hot Topics
There is minimal "community buzz" in terms of comments (most items sit at 0 comments), but the **breadth of issues** raised by a single prolific contributor (stuartbowness) highlights a concentrated effort to polish the user experience.
*   **CLI Wrapper Friction:** **[Issue #466](https://github.com/qhkm/zeptoclaw/issues/466)** and **[PR #467](https://github.com/qhkm/zeptoclaw/pull/467)** reveal a specific pain point regarding how custom tools handle shell arguments. The need for a `raw_string` type suggests power users are building complex CLI wrappers that the current strict escaping rules break.
*   **Architectural Decoupling:** **[Issue #465](https://github.com/qhkm/zeptoclaw/issues/465)** points to a technical desire to move away from hardcoded lists toward a dynamic runtime registry, reflecting a maturing codebase moving toward better extensibility.

## 5. Bugs & Stability
Several high-impact stability fixes are currently in the PR pipeline, addressing silent failures and integration breaks.

1.  **Silent Telegram Failures (Critical):**
    *   **Bug:** The agent silently fails during long research tasks on Telegram.
    *   **Fix:** **[PR #462](https://github.com/qhkm/zeptoclaw/pull/462)** implements message chunking and plaintext fallbacks.
2.  **Shell Escaping Breaking Wrappers (High):**
    *   **Bug:** Custom tool commands using `{{args}}` fail because of automatic single-quote escaping.
    *   **Fix:** **[PR #467](https://github.com/qhkm/zeptoclaw/pull/467)** introduces a `raw_string` param type to bypass escaping.
3.  **Provider Routing Mismatch (Medium):**
    *   **Bug:** Vendor-prefixed models (e.g., `google/gemini-3-flash-preview`) fail when routing through OpenRouter.
    *   **Fix:** **[PR #468](https://github.com/qhkm/zeptoclaw/pull/468)** aligns preflight validation with runtime routing logic.
4.  **Sandbox Access Violation (Medium):**
    *   **Bug:** Enabling Landlock sandboxing blocks access to the workspace directory even when permissions are set to `true`.
    *   **Fix:** **[PR #463](https://github.com/qhkm/zeptoclaw/pull/463)** corrects the wiring of Landlock access rules.

## 6. Feature Requests & Roadmap Signals
*   **Dynamic Tool Registry:** **[Issue #465](https://github.com/qhkm/zeptoclaw/issues/465)** requests a shift from static arrays to a runtime registry. This is likely a prerequisite for supporting dynamic plugins or MCP (Model Context Protocol) tools more effectively in the next version.
*   **Advanced Browser Automation:** With **[PR #459](https://github.com/qhkm/zeptoclaw/pull/459)** (BrowserTool) and **[PR #460](https://github.com/qhkm/zeptoclaw/pull/460)** (Context Compaction) progressing simultaneously, the roadmap clearly points toward **"Long-running Autonomous Web Agents."** The compaction feature is likely necessary to support the high token usage of browsing tasks.

## 7. User Feedback Summary
*   **Pain Point - Discoverability:** Users were unable to find or use key tools (`git`, `stripe`, etc.) because the CLI list was incomplete. This frustrated users trying to assess the agent's full capabilities.
*   **Pain Point - Silent Errors:** Telegram users reported high anxiety/frustration because the bot would "go silent" on complex tasks rather than providing error feedback or partial results.
*   **Use Case - CLI Wrappers:** Users are attempting to wrap external CLIs (like `gws`) inside ZeptoClaw, treating the agent as a meta-operator for other command-line tools.

## 8. Backlog Watch
There are no long-standing stale items in this 24h window; however, **[PR #460](https://github.com/qhkm/zeptoclaw/pull/460)** (Context Compaction) and **[PR #459](https://github.com/qhkm/zeptoclaw/pull/459)** (BrowserTool) are complex PRs opened 2-3 days ago that remain open. They require close monitoring as they represent high-value, high-risk changes to the core agent loop.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest: 2026-03-30

## 1. Today's Overview
The EasyClaw project (specifically the RivonClaw client) shows continued maintenance with the release of version **v1.7.8**. Activity levels were low in terms of code contributions, with zero Pull Requests updated, suggesting a stabilization phase rather than active feature development. The community engagement was minimal, marked by a single new issue report regarding software conflicts. Overall, the project appears to be in a "production support" state, focusing on deployment stability for macOS users.

## 2. Releases
### **v1.7.8: RivonClaw v1.7.8**
*   **Release Date:** 2026-03-30 (Approximate based on digest date)
*   **Key Changes:** This release focuses on **distribution and deployment stability** for macOS users rather than new features.
*   **Notes/Bug Fixes:** The release specifically addresses the **"App is damaged and can't be opened"** error caused by macOS Gatekeeper. It clarifies that this is due to the application being unsigned, rather than actual file corruption.
*   **Migration Action:** Users do not need code changes but must perform a terminal command workaround to bypass Gatekeeper if they encounter the error.

## 3. Project Progress
*   **Codebase:** No Pull Requests were merged or closed in the last 24 hours.
*   **Advancement:** The primary progress is the formal release of the macOS build (v1.7.8), indicating successful compilation and packaging despite the lack of code signing certificates. There are no indications of new functional features deployed in this specific window.

## 4. Community Hot Topics
*   **[#30 [OPEN] Conflict between RivonClaw and QClaw](https://github.com/gaoyangz77/rivonclaw/issues/30)**
    *   **Author:** zgcgreat
    *   **Activity:** Created on 2026-03-29.
    *   **Analysis:** The sole discussion point revolves around **network resource contention**. The user reports that RivonClaw and Tencent's QClaw cannot run simultaneously; opening one disconnects the other. This suggests both clients may be attempting to bind to the same network interface, port, or proxy settings, creating a mutually exclusive environment. This reflects a user need for **concurrent multi-client operation** or better proxy isolation.

## 5. Bugs & Stability
*   **[High] macOS Gatekeeper False Positive (Resolved via Release Notes)**
    *   **Issue:** Users unable to launch the app on macOS due to "damaged" file error.
    *   **Status:** Addressed in v1.7.8 release notes with a manual Terminal fix.
    *   **Severity:** High (Blocks usage for non-technical users), but no code fix provided, only documentation/workaround.
*   **[High] Network Port/Resource Conflict with QClaw**
    *   **Issue:** RivonClaw disconnects if QClaw (Tencent) is launched, and vice versa.
    *   **Status:** Reported in Issue #30. No fix PR available.
    *   **Severity:** High for users relying on multiple network tools or specific ISP environments (e.g., Chinese university networks where QClaw is common).

## 6. Feature Requests & Roadmap Signals
*   **Concurrent Execution Support:** Implicitly requested in Issue #30. Users expect to be able to run multiple network assistants simultaneously.
*   **Code Signing for macOS:** Implicit requirement derived from the v1.7.8 release notes. The project currently lacks an Apple Developer Certificate, which creates friction for macOS adoption.
*   **Prediction:** The next minor version may focus on network driver isolation to prevent conflicts with other proxy tools like QClaw.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Installation Friction:** macOS users struggle with unsigned binaries.
    *   **Interoperability:** The tool acts aggressively, severing connections of other active network clients (specifically QClaw).
*   **Satisfaction:** Neutral to Low among users attempting multi-client setups. The release notes show maintainers are aware of deployment friction but are currently solving it via documentation rather than code signing.

## 8. Backlog Watch
*   **Issue #30:** Requires maintainer attention. This is a technical conflict that likely cannot be solved by the user. It requires investigation into whether the app exclusively locks the network adapter or specific ports.
    *   **Link:** [gaoyangz77/rivonclaw Issue #30](https://github.com/gaoyangz77/rivonclaw/issues/30)

</details>