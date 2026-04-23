# OpenClaw Ecosystem Digest 2026-03-16

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-03-15 22:03 UTC

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

# OpenClaw Project Digest — 2026-03-16

## 1. Today's Overview

OpenClaw is experiencing **extremely high community engagement** with 500 issues and 500 pull requests updated in the last 24 hours alone. The project is in a **critical stabilization phase** following the v2026.3.12 release, which introduced severe memory management regressions that have rendered the CLI unusable for many users. With 384 open PRs and 423 active issues, the development team is aggressively tackling bugs across multiple fronts including gateway connectivity, channel integrations (WhatsApp, Discord, Telegram), and memory optimization. No new releases were published today, suggesting maintainers are prioritizing stability over new features.

---

## 2. Releases

**No new releases** were published today. The last significant release appears to be **v2026.3.12**, which has been widely reported as problematic due to memory leak issues. Users awaiting fixes should monitor the following bug reports and pending PRs.

---

## 3. Project Progress

### Notable Merged/Closed PRs (Last 24h)

| PR | Area | Summary |
|---|---|---|
| [#47240](https://github.com/openclaw/openclaw/pull/47240) | CLI | Fixes log timestamps to display in local timezone instead of UTC |
| [#46478](https://github.com/openclaw/openclaw/pull/46478) | Agents | Auto-recovery from Anthropic thinking block modification errors |
| [#46183](https://github.com/openclaw/openclaw/pull/46183) | Agents | Drops thinking blocks for non-Anthropic providers (fixes model switching) |
| [#47642](https://github.com/openclaw/openclaw/pull/47642) | Telegram | Adds 60s request-level timeout for `getUpdates` long-poll |
| [#47631](https://github.com/openclaw/openclaw/pull/47631) | Telegram | Restores native draft streaming for DM answer lanes |
| [#46236](https://github.com/openclaw/openclaw/pull/46236) | Cron | Skips announce delivery when agent output is raw error text |
| [#46235](https://github.com/openclaw/openclaw/pull/46235) | Doctor | Warns about synthetic catalog models missing from allowlist |
| [#47632](https://github.com/openclaw/openclaw/pull/47632) | Cron | Enforces `timeoutSeconds` for script payloads |
| [#46435](https://github.com/openclaw/openclaw/pull/46435) | Web UI | Deduplicates chat messages after WebSocket reconnect |
| [#47269](https://github.com/openclaw/openclaw/pull/47269) | CLI | Exits 0 when gateway is already running (idempotent start) |
| [#46474](https://github.com/openclaw/openclaw/pull/46474) | Gateway | Preserves CLI-set auth profile order from disk |
| [#45876](https://github.com/openclaw/openclaw/pull/45876) | Auth | Recognizes `GOOGLE_CLOUD_API_KEY` for google-vertex provider |
| [#34942](https://github.com/openclaw/openclaw/pull/34942) | Channels | Batches document attachments into single agent turn |

### Large Features In Progress
- **[#47517](https://github.com/openclaw/openclaw/pull/47517)** [XL]: Gateway preservation of arbiter subagent context and runtime
- **[#45318](https://github.com/openclaw/openclaw/pull/45318)** [XL]: Plugin surface broadening for Codex App Server
- **[#32417](https://github.com/openclaw/openclaw/pull/32417)** [XL]: New Kudosity SMS channel plugin

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

| Issue | Comments | 👍 | Topic |
|---|---|---|---|
| [#45064](https://github.com/openclaw/openclaw/issues/45064) | 25 | 0 | **OOM crash on basic CLI commands** after v2026.3.12 upgrade — critical memory leak |
| [#7649](https://github.com/openclaw/openclaw/issues/7649) | 23 | 4 | **Matrix E2EE verification** — bot cannot verify its own account |
| [#45772](https://github.com/openclaw/openclaw/issues/45772) | 16 | 1 | **Gateway heartbeat timer stops** after 1-2 triggers (regression from v2026.3.8) |
| [#18677](https://github.com/openclaw/openclaw/issues/18677) | 15 | 0 | **Security hook API** for `skill:install` to enable pre-install scanning |
| [#7916](https://github.com/openclaw/openclaw/issues/7916) | 14 | 10 | **Encrypted API keys/secrets management** — currently stored in plain text |
| [#13688](https://github.com/openclaw/openclaw/issues/13688) | 14 | 2 | **Discord WebSocket disconnects** with unbounded exponential backoff |
| [#2317](https://github.com/openclaw/openclaw/issues/2317) | 13 | 19 | **SearXNG as fallback search provider** (top reaction count today) |
| [#41778](https://github.com/openclaw/openclaw/issues/41778) | 13 | 3 | **OOM on 4GB servers** since v2026.3.7 |

### Underlying Community Needs
1. **Memory/Stability Crisis**: The OOM issues are blocking production use — users cannot run basic commands
2. **Security Enhancements**: Strong demand for encrypted secrets, pre-install security hooks, and execution guardrails
3. **Channel Reliability**: Persistent issues across Discord, WhatsApp, Telegram, and Matrix connectivity
4. **Search Provider Flexibility**: Users want alternatives to Brave Search (SearXNG: 19 👍, Tavily: 11 👍)

---

## 5. Bugs & Stability

### Critical Severity

| Issue | Description | Status | Fix PR |
|---|---|---|---|
| [#45064](https://github.com/openclaw/openclaw/issues/45064) | **OOM crash on all CLI commands** — `gateway status`, `doctor` fail with heap exhaustion after v2026.3.12 | OPEN | None yet |
| [#41778](https://github.com/openclaw/openclaw/issues/41778) | **OOM on 4GB servers** — `openclaw message send` crashes, consumes 500MB+ before failure | OPEN | None yet |
| [#45772](https://github.com/openclaw/openclaw/issues/45772) | **Gateway heartbeat stops permanently** after 1-2 triggers — timer doesn't reschedule | OPEN | None yet |

### High Severity Regressions

| Issue | Description | Fix PR |
|---|---|---|
| [#45504](https://github.com/openclaw/openclaw/issues/45504) | `devices list/approve` fail against local loopback gateway | Under investigation |
| [#44714](https://github.com/openclaw/openclaw/issues/44714) | `logs --follow` fails with handshake timeout post-upgrade | [#46435](https://github.com/openclaw/openclaw/pull/46435) (related) |
| [#45222](https://github.com/openclaw/openclaw/issues/45222) | Intermittent local gateway WebSocket handshake failures | Under investigation |
| [#45867](https://github.com/openclaw/openclaw/issues/45867) | OpenRouter vision models silently drop images | CLOSED (fix merged) |
| [#45940](https://github.com/openclaw/openclaw/issues/45940) | `gateway probe` false negative on Windows | OPEN |

### Channel-Specific Bugs

| Channel | Issue | Description |
|---|---|---|
| **WhatsApp** | [#46659](https://github.com/openclaw/openclaw/issues/46659), [#30177](https://github.com/openclaw/openclaw/issues/30177), [#45994](https://github.com/openclaw/openclaw/issues/45994) | "No active WhatsApp Web listener" errors — message send fails but react succeeds |
| **Discord** | [#13688](https://github.com/openclaw/openclaw/issues/13688), [#46725](https://github.com/openclaw/openclaw/issues/46725) | WebSocket disconnects, mention-driven follow-up unreliable |
| **Telegram** | [#45714](https://github.com/openclaw/openclaw/issues/45714) | Stops polling inbound messages while outbound works |
| **Matrix** | [#7649](https://github.com/openclaw/openclaw/issues/7649) | Cannot verify own account for E2EE |
| **iMessage** | [#5116](https://github.com/openclaw/openclaw/issues/5116) | FDA doesn't propagate via LaunchAgent |

### Existing Fix PRs for Known Bugs
- **Thinking block issues**: [#46244](https://github.com/openclaw/openclaw/pull/46244), [#46478](https://github.com/openclaw/openclaw/pull/46478)
- **Telegram polling**: [#47642](https://github.com/openclaw/openclaw/pull/47642)
- **WebSocket reconnect dedupe**: [#46435](https://github.com/openclaw/openclaw/pull/46435)

---

## 6. Feature Requests & Roadmap Signals

### Top Feature Requests (by 👍 reactions)

| Issue | 👍 | Feature | Likelihood |
|---|---|---|---|
| [#2317](https://github.com/openclaw/openclaw/issues/2317) | 19 | SearXNG as fallback search provider | High — active discussion |
| [#11399](https://github.com/openclaw/openclaw/issues/11399) | 13 | Extensible web_search providers via plugins | High — architectural PR pending |
| [#12034](https://github.com/openclaw/openclaw/issues/12034) | 11 | Tavily as search provider | Medium |
| [#7916](https://github.com/openclaw/openclaw/issues/7916) | 10 | Encrypted API keys / secrets management | High — security priority |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | 9 | Masked secrets — prevent agent from seeing raw keys | Medium |
| [#18237](https://github.com/openclaw/openclaw/issues/18237) | 5 | Async exec callback for long-running processes | Medium |
| [#6823](https://github.com/openclaw/openclaw/issues/6823) | 5 | Execution guardrails for tool safety | Medium |

### Predicted Next Version Focus
1. **Memory leak fixes** (critical blocker)
2. **Gateway handshake reliability**
3. **WhatsApp active-listener module consolidation**
4. **Search provider extensibility** (SearXNG, Tavily)

---

## 7. User Feedback Summary

### Pain Points
- **CLI unusable after upgrade**: Multiple users report v2026.3.12 makes the CLI completely non-functional due to OOM
- **Silent failures**: WhatsApp sends report success but messages never arrive; images silently dropped by OpenRouter
- **Channel reliability**: Discord, Telegram, and WhatsApp all have "half-working" states where one direction works but not the other
- **Config complexity**: Security warnings about plain-text API keys, complex allowlist configurations

### Positive Signals
- Active community engagement (500+ issues/PRs in 24h)
- Rapid PR submissions addressing bugs
- Strong interest in plugin extensibility and security features

### Use Case Highlights
- Users running OpenClaw on **4GB VPS/servers** (cost-conscious deployments)
- **Multi-channel orchestration** (Discord + Telegram + WhatsApp)
- **Matrix E2EE** for privacy-focused deployments
- **Self-hosted search** (SearXNG) to avoid rate limits

---

## 8. Backlog Watch

### Long-Standing Issues Needing Attention

| Issue | Age | Concern |
|---|---|---|
| [#7649](https://github.com/openclaw/openclaw/issues/7649) | 6 weeks | Matrix E2EE still unresolved — 23 comments, no maintainer response |
| [#13688](https://github.com/openclaw/openclaw/issues/13688) | 5 weeks | Discord WebSocket issues with stale label — still active |
| [#5116](https://github.com/openclaw/openclaw/issues/5116) | 6 weeks | iMessage FDA inheritance on macOS 26 — marked stale |
| [#10637](https://github.com/openclaw/openclaw/issues/10637) | 5 weeks | Signal reply context not passed to agent — stale |
| [#17362](https://github.com/openclaw/openclaw/issues/17362) | 4 weeks | iMessage chat_id parseInt bug causing silent misrouting |

### Maintainer Attention Needed
1. **Memory regression triage** — v2026.3.12 should potentially be yanked or patched immediately
2. **WhatsApp active-listener architecture** — multiple duplicate issues suggest systemic design problem
3. **Stale issue review** — several high-impact issues marked stale are still reproducing on latest versions

---

*Digest generated from 500 issues and 500 PRs updated on 2026-03-16. Data source: github.com/openclaw/openclaw*

---

## Cross-Ecosystem Comparison

# Cross-Project Analysis Report: Open-Source AI Agent Ecosystem
**Date:** 2026-03-16

## 1. Ecosystem Overview
The open-source personal AI assistant ecosystem is undergoing a rapid transition from single-agent chatbots to **multi-agent, multi-channel orchestration platforms**. Projects are converging on three critical pillars: **robust autonomous execution** (via improved "heartbeat" scheduling and agentic loops), **omnichannel presence** (WhatsApp, Discord, Telegram, Enterprise IMs), and **flexible model sovereignty** (aggressively adding support for Gemini, DeepSeek, and local inference). A clear bifurcation is emerging between large, "kitchen-sink" frameworks like **OpenClaw** and specialized, streamlined alternatives (e.g., **ZeroClaw**, **ZeptoClaw**) targeting specific use cases like automation or security.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Stability/Velocity Tier |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **423 Active** | **384 Open** | *Stalled* (v2026.3.12) | ⚠️ **Unstable** | High Velocity / Critical Instability |
| **ZeroClaw** | 37 Active | 50 Updated | **v0.3.4-beta** (10 releases) | 🟢 **High** | Hyper-Active / Rapid Iteration |
| **IronClaw** | 29 Active | 50 Updated | No Release | 🟢 **High** | High Velocity / Quality Hardening |
| **CoPaw** | 39 Active | 34 Updated | No Release | 🟡 **Medium** | Active Growth / Stabilization |
| **PicoClaw** | 14 Active | 51 New PRs | Nightly Build | 🟡 **Medium** | High Velocity / Architectural Flux |
| **NanoBot** | 21 Active | 57 Updated | No Release | 🟢 **High** | Active / Architectural Evolution |
| **LobsterAI** | Low (5) | 17 Updated | No Release | 🟡 **Medium** | Maintenance / Integration Phase |
| **ZeptoClaw** | Low (3) | 6 Updated | No Release | 🟢 **High** | Focused / Mature Maintenance |
| **NanoClaw** | 16 Active | 38 Updated | No Release | 🟡 **Medium** | Stable / Platform Expansion |
| **Moltis** | Low | 5 Updated | No Release | 🟢 **High** | Stable / Feature Refinement |
| **TinyClaw** | 0 Active | 6 Active | No Release | 🟡 **Medium** | Early Dev / Pre-Release |
| **EasyClaw** | 0 Active | 0 Active | **v1.6.8** | 🔵 **Stable** | Dormant / Maintenance Only |

## 3. OpenClaw's Position

*   **Advantages vs. Peers:** OpenClaw remains the **ecosystem nucleus** and reference implementation, boasting the largest absolute volume of community interaction (500+ daily events). It supports the widest array of "Channels" and gateways out of the box, making it the default choice for complex multi-channel orchestration.
*   **Technical Approach:** Unlike peers focusing on modular refactoring (PicoClaw) or aggressive AI-assisted feature shipping (ZeroClaw), OpenClaw appears to be struggling with **technical debt from its monolithic scale**. While peers like IronClaw implement formal verification (TLA+), OpenClaw is battling basic memory management regressions.
*   **Community Comparison:** It has the largest but most frustrated community. While ZeroClaw and IronClaw are praised for velocity and quality, OpenClaw is currently suffering from a **trust deficit** due to unresolved critical bugs (OOM, gateway failures) that have persisted for nearly a week without a patch.

## 4. Shared Technical Focus Areas

1.  **Heartbeat & Autonomous Scheduling**
    *   **Projects:** OpenClaw, ZeroClaw, NanoBot, Moltis, CoPaw.
    *   **Requirement:** All projects are moving beyond passive chatbots to active agents. A recurring requirement is "Two-Phase Heartbeats" (planning vs. execution) and resilient cron-based task management that survives reboots and network drops.
2.  **Search Provider Extensibility**
    *   **Projects:** OpenClaw (#2317), NanoBot (#1719), PicoClaw (#1618).
    *   **Requirement:** Communities are rejecting "walled gardens" for search. There is a unanimous demand for pluggable search backends (SearXNG, Tavily) to replace defaults (Brave/Google) and reduce rate-limiting friction.
3.  **Security Granularity & "Safe Mode"**
    *   **Projects:** ZeroClaw (#1478), NanoBot (#143), NanoClaw (#411), LobsterAI (#419).
    *   **Requirement:** A "secure by default" philosophy is clashing with power user needs. A cross-ecosystem request is for granular "trust modes" that allow knowledgeable users to bypass sandbox restrictions or allow specific high-risk commands (e.g., `curl`) without disabling the entire security policy.
4.  **Multi-Model / Provider Fallbacks**
    *   **Projects:** PicoClaw, TinyClaw, ZeptoClaw, LobsterAI.
    *   **Requirement:** Reliance on a single LLM provider is seen as a risk. Projects are racing to implement "Provider Fallback Chains" and routing logic (e.g., Gemini for vision, DeepSeek for code) to optimize cost and reliability.

## 5. Differentiation Analysis

*   **Architecture & Scale:**
    *   **OpenClaw** is the monolithic "Linux distro" of agents—comprehensive but heavy.
    *   **ZeroClaw** positions itself as the streamlined alternative ("simpler than OpenClaw"), focusing on rapid AI-assisted development (Rust + AI commits) and multi-agent "Swarm" orchestration.
    *   **IronClaw** targets enterprise-grade reliability (Rust + WASM), emphasizing formal verification and security over feature bloat.
*   **Target Audience:**
    *   **Consumer/Prosumer:** OpenClaw, PicoClaw (Mobile/Edge), EasyClaw.
    *   **Developers/Tinkerers:** ZeroClaw (Swarm), NanoBot (Multi-agent architecture), ZeptoClaw (Headless bridge).
    *   **Enterprise:** IronClaw (Security/Verification), LobsterAI (WeChat/DingTalk focus), CoPaw (Workflow integration).
*   **Technical Stack:**
    *   **Python-heavy:** OpenClaw, NanoBot, LobsterAI, CoPaw (easier extension, heavier resource usage).
    *   **Rust-heavy:** ZeroClaw, IronClaw, ZeptoClaw (performance, memory safety, compiling challenges for users).

## 6. Community Momentum & Maturity

*   **Tier 1: Rapid Iterators (Hypergrowth)**
    *   **ZeroClaw:** 10 releases in one day indicates a "move fast and break things" phase, heavily leveraging AI for code generation.
    *   **PicoClaw:** Aggressively refactoring core architecture (Event-driven loop) while merging 51 PRs.
*   **Tier 2: Quality Hardening (Maturation)**
    *   **IronClaw:** High PR count (50) but 50% merged; focus is on formal specs (TLA+), chaos testing, and security fixes. High maturity.
    *   **NanoBot:** Transitioning to multi-agent architecture with deliberate, sophisticated PRs.
*   **Tier 3: Crisis & Recovery**
    *   **OpenClaw:** Currently in a stability crisis. Engagement is high, but sentiment is negative due to regressions. It needs a stabilization release immediately.
*   **Tier 4: Stabilized / Niche**
    *   **EasyClaw, TinyClaw, ZeptoClaw:** Low noise, focused specific releases, or early-stage quiet development.

## 7. Trend Signals

1.  **The Rise of "Swarm" & Multi-Agent Systems:**
    *   ZeroClaw (SwarmTool) and NanoBot (subagent routing) signal that the industry is shifting from single-threaded assistants to **hierarchical multi-agent systems (MAS)**. The ability to delegate tasks to specialized sub-agents (e.g., a "Coder" agent vs. a "Search" agent) is becoming a standard requirement.
2.  **Security Fatigue vs. Power User Demand:**
    *   There is a distinct backlash against "over-zealous" security defaults (ZeroClaw #1478). Users are demanding a **"God Mode" toggle** for local/personal deployments where they accept the risk, suggesting future architectures should separate "policy" from "engine."
3.  **Rust is Winning for Infrastructure:**
    *   While Python remains popular for application logic (LobsterAI, OpenClaw), the high-performance "infrastructure" layer is moving to Rust (IronClaw, ZeroClaw, ZeptoClaw) to handle memory safety and concurrency—precisely the issues currently crippling OpenClaw.
4.  **Model Agnosticism as a Survival Trait:**
    *   With provider instability (Anthropic locks, OpenAI rate limits), projects that hard-code providers are failing. Successful projects are rapidly decoupling model interfaces (TinyClaw Gemini PR, ZeptoClaw Vertex AI PR) to ensure continuity.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-03-16

## 1. Today's Overview
NanoBot is experiencing a period of **intense architectural evolution and community expansion**, evidenced by 57 updated Pull Requests (35 open) and 21 active Issues. The project is transitioning from a single-agent framework to a **multi-agent, multi-backend architecture**, with significant work being done on subagent delegation and inter-agent communication channels. While the "Heartbeat" scheduling system and security policies face valid criticism, the community is aggressively contributing fixes and new features ranging from a Tauri desktop app to enhanced Chinese enterprise platform integrations (DingTalk/Feishu). There are no new official releases today, suggesting the maintainers are likely stabilizing the substantial influx of new features for a future milestone.

## 2. Releases
**No new releases** were recorded today. The project appears to be in a heavy development phase, accumulating significant features (multi-agent support, desktop app, new channels) that may be consolidated into a major version bump soon.

## 3. Project Progress
Significant advancements were merged or closed today, focusing on model compatibility and stability:
*   **Reasoning Model Support ([PR #310](https://github.com/HKUDS/nanobot/pull/310))**: Closed/Merged. Added support for DeepSeek-R1 and GLM-4.7 `reasoning_content`, making the "thought process" visible in the CLI.
*   **Vision Model Handling ([PR #1901](https://github.com/HKUDS/nanobot/pull/1901))**: Closed/Merged. Fixed a bug where `image_url` content blocks in history caused errors when switching from vision-capable models (Claude) to non-vision models (DeepSeek/Qianfan).
*   **DingTalk Channel ([PR #304](https://github.com/HKUDS/nanobot/pull/304))**: Closed/Merged. Added a new DingTalk channel supporting Stream Mode (WebSocket) and AI Interactive Cards.
*   **Workspace Security Fix ([PR #2037](https://github.com/HKUDS/nanobot/pull/2037))**: Closed. Fixed a bug where `restrictToWorkspace=true` broke builtin skills by blocking access to their installation paths.

## 4. Community Hot Topics
*   **Swappable Web Search Backend ([Issue #1719](https://github.com/HKUDS/nanobot/issues/1719))**: With 11 👍, this is a top user demand. Users are tired of forking the codebase to switch from Brave to Tavily or SearXNG. *Underlying need: Modularity and easy integration of diverse data sources.*
*   **Interactive Configuration Wizard ([Issue #2018](https://github.com/HKUDS/nanobot/issues/2018) / [Issue #2019](https://github.com/HKUDS/nanobot/issues/2019))**: A proposal/feedback thread for `nanobot onboard`, an interactive CLI to replace manual JSON editing. This is seen as a major barrier removal for new users.
*   **Skill Enable/Disable Toggle ([Issue #1932](https://github.com/HKUDS/nanobot/issues/1932))**: Users want to temporarily disable skills without deleting them. This has spawned a PR ([PR #1934](https://github.com/HKUDS/nanobot/pull/1934)) introducing an event-driven hook system to manage state.

## 5. Bugs & Stability
*   **[High] Security: Filesystem Restriction Bypass ([Issue #143](https://github.com/HKUDS/nanobot/issues/143))**: Direct file tools (`ReadFileTool`, etc.) ignore the `restrict_to_workspace` config, allowing agents to potentially read sensitive files outside the workspace. **No fix PR is currently linked.**
*   **[Medium] Heartbeat Logic Failure ([Issue #1929](https://github.com/HKUDS/nanobot/issues/1929))**: The Heartbeat Phase 1 decision-making process lacks current time context, causing scheduled task logic to fail. *See also: [PR #2067](https://github.com/HKUDS/nanobot/pull/2067) for a refactor.*
*   **[Medium] File Copy Loop ([Issue #2061](https://github.com/HKUDS/nanobot/issues/2061))**: The agent enters an infinite loop (listing/reading) when asked to copy files in Feishu, failing to execute the final write operation.
*   **[Low] Missing Dependencies on Fresh Install ([Issue #2065](https://github.com/HKUDS/nanobot/issues/2065))**: New Ubuntu 24.04 installs report missing binaries (`most`, `Fast`) in PATH for specific tools.

## 6. Feature Requests & Roadmap Signals
The roadmap is clearly shifting toward **Multi-Agent Systems (MAS)** and **Desktop UX**:
*   **Multi-Agent Architecture ([PR #2041](https://github.com/HKUDS/nanobot/pull/2041) & [PR #2064](https://github.com/HKUDS/nanobot/pull/2064))**: Two separate PRs are pushing for subagent routing and peer-to-peer agent communication. This is a strong signal for the next major version.
*   **Tauri Desktop App ([PR #2063](https://github.com/HKUDS/nanobot/pull/2063))**: A proposal to wrap the core in a Tauri shell with a PyInstaller sidecar, moving NanoBot from a CLI-tool to a user-friendly desktop application.
*   **Web Search Fallback Chain ([PR #2066](https://github.com/HKUDS/nanobot/pull/2066))**: Closed/Merged implementation allowing fallback from primary provider -> Gemini -> DuckDuckGo.
*   **Local JSON-RPC Channel ([PR #2059](https://github.com/HKUDS/nanobot/pull/2059))**: Adding a Unix-socket channel for local programmatic control, indicating a move towards better tooling integration.

## 7. User Feedback Summary
*   **Pain Points**: Configuration is currently too manual (driving the `onboard` wizard demand); switching between vision/non-vision models breaks sessions; managing long chat histories in Feishu/enterprise tools causes context overflow ([Issue #2062](https://github.com/HKUDS/nanobot/issues/2062)).
*   **Use Cases**: Users are deploying NanoBot as a team collaboration bot in Chinese enterprises (Feishu/DingTalk), requiring it to distinguish between multiple bots in the same group ([PR #1990](https://github.com/HKUDS/nanobot/pull/1990)). Remote file retrieval via QQ is also a requested use case ([Issue #2025](https://github.com/HKUDS/nanobot/issues/2025)).
*   **Sentiment**: Highly engaged. Users are not just reporting bugs but actively submitting complex architectural PRs (multi-agent, desktop apps), indicating a sophisticated developer-heavy user base.

## 8. Backlog Watch
*   **[Security] Filesystem Restriction Enforcement ([Issue #143](https://github.com/HKUDS/nanobot/issues/143))**: Open since Feb 5, this security vulnerability has 4 👍 but remains open. It needs maintainer attention to prevent trust boundary violations.
*   **Docker Build Pipeline ([PR #126](https://github.com/HKUDS/nanobot/pull/126))**: A community contribution for GitHub Actions to build/push Docker images has been pending since Feb 5.
*   **Ollama Format Issues ([Issue #508](https://github.com/HKUDS/nanobot/issues/508))**: Ongoing formatting inconsistencies with local Ollama models remain unresolved.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-03-16

## 1. Today's Overview
ZeroClaw demonstrates **extremely high development velocity** with 10 new releases pushed in a single day (spanning v0.3.1 to v0.3.4-beta), indicating rapid iteration and a push toward stabilizing recent architectural changes. The project shows healthy community engagement with 37 active issues and 50 PRs updated in the last 24 hours. The core focus is clearly on **multi-agent orchestration** (swarm capabilities), **context management improvements** (token-based compaction, persistent sessions), and **autonomous agent packages**. A significant number of bug fixes address provider compatibility (Mistral, OpenAI-Codex) and security policy granularity, suggesting the team is actively responding to user friction points. The presence of both "Claude Opus 4.6" and human contributors in release notes indicates heavy AI-assisted development workflows.

---

## 2. Releases

### **v0.3.4-beta.231** (Latest)
**Key Changes:**
- **agent**: Surface tool call failure reasons in chat progress messages — users now see *why* a tool failed (security block, hook cancellation, user denial) directly in the chat instead of just a ❌ icon
- **context**: Token-based compaction, persistent sessions, and LLM consolidation — addresses context window management for long-running conversations
- **hands**: Add autonomous knowledge-accumulating agent packages — enables scheduled agents that "grow smarter" by persisting knowledge across runs
- **swarm**: Multi-agent swarm orchestration with three strategies (Sequential, Parallel, Fan-out/Fan-in), plus Mistral tool fix and `--interactive` flag restoration

**Migration Notes:**
- The `--interactive` flag has been restored after being removed in v0.3.0
- Security policy now allows explicit `allowed_commands` to override high-risk command blocks

### **v0.3.3-beta.218**
- Added `allow_private_hosts` option to `http_request` tool — enables access to internal APIs/Home Assistant

### **v0.3.2**
- **heartbeat**: Two-phase execution, structured tasks, and auto-routing — foundational change to task execution model

### **v0.3.1**
- Added Termux (aarch64-linux-android) release target — expands mobile/edge device support

---

## 3. Project Progress

### Merged/Closed PRs (27 today):

| PR | Type | Impact |
|----|------|--------|
| [#3624](https://github.com/zeroclaw-labs/zeroclaw/pull/3624) | feat | **Multi-agent swarm orchestration** — new `SwarmTool` with Sequential/Parallel/Fan-out strategies |
| [#3603](https://github.com/zeroclaw-labs/zeroclaw/pull/3603) | feat | **Hands: autonomous knowledge-accumulating agent packages** — scheduled intelligence tasks |
| [#3586](https://github.com/zeroclaw-labs/zeroclaw/pull/3586) | feat | **Multi-machine node system** — distributed workloads across machines |
| [#3636](https://github.com/zeroclaw-labs/zeroclaw/pull/3636) | fix | Surface tool call failure reasons in chat (UX improvement) |
| [#3633](https://github.com/zeroclaw-labs/zeroclaw/pull/3633) | fix | Allow explicit `allowed_commands` to bypass high-risk block — resolves [#3567](https://github.com/zeroclaw-labs/zeroclaw/issues/3567) |
| [#3638](https://github.com/zeroclaw-labs/zeroclaw/pull/3638) | fix | Enforce approval policy for channel-driven runs — fixes security bypass in Telegram/Matrix |
| [#3634](https://github.com/zeroclaw-labs/zeroclaw/pull/3634) | fix | Matrix channel key mismatch — replies were silently dropping |
| [#3632](https://github.com/zeroclaw-labs/zeroclaw/pull/3632) | fix | OpenAI-Codex SSE streaming — first request no longer fails with decode error |
| [#3630](https://github.com/zeroclaw-labs/zeroclaw/pull/3630) | fix | Security policy override for `curl`/`wget` in full autonomy mode |
| [#3629](https://github.com/zeroclaw-labs/zeroclaw/pull/3629) | fix | WhatsApp Web QR now shows warning if feature flag missing |
| [#3487](https://github.com/zeroclaw-labs/zeroclaw/issues/3487) | fix | Channel-driven runs now respect `[autonomy]` approval policies |

**Theme**: Major architectural additions (swarm, nodes, hands) balanced with critical UX and security fixes.

---

## 4. Community Hot Topics

### Most Discussed Issues:

| Issue | Comments | 👍 | Theme |
|-------|----------|-----|-------|
| [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) | 36 | 5 | **Security vs. Usability** — User frustrated that ZeroClaw blocks *everything* even with all security settings disabled. Wants a "fully permissive mode" for personal/hobbyist use. Core tension: "secure by default" vs. "let me break my own system." |
| [#3565](https://github.com/zeroclaw-labs/zeroclaw/issues/3565) | 7 | 0 | **Cost Tracking** — Request for token usage logging (JSONL) and dashboard to track API spending across OpenAI/Anthropic/DeepSeek. High-value feature for production users. |
| [#2693](https://github.com/zeroclaw-labs/zeroclaw/issues/2693) | 5 | 0 | **Mistral 422 Error** — Tool calling with Mistral provider returns "Extra inputs are not permitted." Fixed in v0.3.4. |
| [#3537](https://github.com/zeroclaw-labs/zeroclaw/issues/3537) | 5 | 0 | **ARM64 Silent Crash** — Daemon crashes on Raspberry Pi 4 from v0.2.1-beta.186 onwards. Ongoing investigation needed. |

### Active PRs:
- [#3141](https://github.com/zeroclaw-labs/zeroclaw/pull/3141) — Matrix media and E2EE verification (open since March 10)
- [#3497](https://github.com/zeroclaw-labs/zeroclaw/pull/3497) — Revert invalid model set via `model_routing_config`
- [#3608](https://github.com/zeroclaw-labs/zeroclaw/pull/3608) — **OpenVPN tunnel provider** (awaiting review)
- [#3637](https://github.com/zeroclaw-labs/zeroclaw/pull/3637) — **SecretStore integration for `http_request`** — prevents API key leaks in logs

**Underlying Needs**: Users want visibility (costs, error reasons), granular security control, and reliable provider compatibility. The tension between "secure defaults" and "power user freedom" is a recurring theme.

---

## 5. Bugs & Stability

### Severity S0 (Critical / Data Loss):
| Issue | Description | Status |
|-------|-------------|--------|
| [#3537](https://github.com/zeroclaw-labs/zeroclaw/issues/3537) | Daemon crashes silently on ARM64 (Raspberry Pi 4) | **OPEN** — No fix yet |
| [#3533](https://github.com/zeroclaw-labs/zeroclaw/issues/3533) | Byte index panic in `agent/loop_.rs` — multibyte character boundary issue in Chinese text | **CLOSED** — Fixed |

### Severity S1 (Workflow Blocked):
| Issue | Description | Status |
|-------|-------------|--------|
| [#2693](https://github.com/zeroclaw-labs/zeroclaw/issues/2693) | Mistral 422 "Extra inputs not permitted" | **FIXED** in v0.3.4 |
| [#3540](https://github.com/zeroclaw-labs/zeroclaw/issues/3540) | Lark/Feishu channel compiled but won't start | **OPEN** |
| [#3543](https://github.com/zeroclaw-labs/zeroclaw/issues/3543) | Docker images v0.3.0+ exit immediately (v0.1.7 works) | **OPEN** — Possible glibc issue |
| [#3584](https://github.com/zeroclaw-labs/zeroclaw/issues/3584) | Headless browser tool fails when running as systemd service | **OPEN** |
| [#3572](https://github.com/zeroclaw-labs/zeroclaw/issues/3572) | Mistral tool invocation fails | **FIXED** in v0.3.4 |
| [#3580](https://github.com/zeroclaw-labs/zeroclaw/issues/3580) | Web dashboard returns 404 — requires `npm run build` | **CLOSED** |

### Severity S2-S3 (Degraded/Minor):
- [#2084](https://github.com/zeroclaw-labs/zeroclaw/issues/2084) — GLIBC_2.39 not found on Ubuntu 22.04 (👍2)
- [#3513](https://github.com/zeroclaw-labs/zeroclaw/issues/3513) — Agent sends multiple messages instead of single consolidated response
- [#3544](https://github.com/zeroclaw-labs/zeroclaw/issues/3544) — OpenAI-Codex first SSE attempt fails — **FIXED** in [#3632](https://github.com/zeroclaw-labs/zeroclaw/pull/3632)

**Stability Assessment**: The ARM64 crash and Docker exit issues are concerning for deployment reliability. Multiple provider-specific bugs were fixed today, showing responsive maintenance.

---

## 6. Feature Requests & Roadmap Signals

### Likely in Next Version:
| Feature | Issue/PR | Signal Strength |
|---------|----------|-----------------|
| **Cost/Token Tracking Dashboard** | [#3565](https://github.com/zeroclaw-labs/zeroclaw/issues/3565) | ⭐⭐⭐ — High demand, well-specified |
| **Full Docker Image** (all feature flags) | [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | ⭐⭐ — Low barrier, high value for new users |
| **Transcription `initial_prompt`** | [#2881](https://github.com/zeroclaw-labs/zeroclaw/issues/2881) | ⭐⭐⭐ — PR ready [#3640](https://github.com/zeroclaw-labs/zeroclaw/pull/3640) |
| **SecretStore for http_request** | [#3637](https://github.com/zeroclaw-labs/zeroclaw/pull/3637) | ⭐⭐⭐ — PR open, security-focused |
| **WebSocket Dashboard Auth Fix** | [#3011](https://github.com/zeroclaw-labs/zeroclaw/issues/3011), [#3641](https://github.com/zeroclaw-labs/zeroclaw/pull/3641) | ⭐⭐⭐ — PR ready |

### Strategic Features on Horizon:
- **Multi-Agent Context Engineering** ([#3502](https://github.com/zeroclaw-labs/zeroclaw/issues/3502)) — Explicit system prompt construction, skill directories, tool isolation
- **OpenVPN Tunnel Provider** ([#3608](https://github.com/zeroclaw-labs/zeroclaw/pull/3608)) — Expands deployment flexibility
- **QQ Bot Markdown Support** ([#2958](https://github.com/zeroclaw-labs/zeroclaw/issues/2958)) — Channel expansion for Chinese market

---

## 7. User Feedback Summary

### Pain Points:
1. **Overly Restrictive Security** ([#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478)) — Users find default security blocks frustrating; want explicit "full trust" mode for personal use
2. **Docker Deployment Friction** ([#3543](https://github.com/zeroclaw-labs/zeroclaw/issues/3543), [#3474](https://github.com/zeroclaw-labs/zeroclaw/issues/3474)) — Images exit silently; restart documentation missing
3. **Web Dashboard Build Required** ([#3580](https://github.com/zeroclaw-labs/zeroclaw/issues/3580), [#3454](https://github.com/zeroclaw-labs/zeroclaw/issues/3454)) — Dashboard returns 404 unless manually built
4. **Cost Visibility** ([#3565](https://github.com/zeroclaw-labs/zeroclaw/issues/3565)) — Zero insight into API spending

### Positive Signals:
- Users appreciate that ZeroClaw is "simpler than OpenClaw" ([#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478))
- Quick response to Mistral/OpenAI-Codex bugs
- Multi-agent swarm feature highly anticipated

### Use Cases Mentioned:
- Personal hobbyist AI assistant
- Home Assistant integration (blocked by private host restrictions — now fixable)
- Multi-machine distributed agent workloads
- Termux/mobile deployments
- WhatsApp/Telegram/Matrix channel integrations

---

## 8. Backlog Watch

### Needs Maintainer Attention:

| Issue/PR | Age | Priority | Concern |
|----------|-----|----------|---------|
| [#3141](https://github.com/zeroclaw-labs/zeroclaw/pull/3141) | 6 days | High | Matrix E2EE support — significant for privacy-focused users, no maintainer comments |
| [#3537](https://github.com/zeroclaw-labs/zeroclaw/issues/3537) | 1 day | Critical | ARM64 crash — blocks Raspberry Pi deployments entirely |
| [#2084](https://github.com/zeroclaw-labs/zeroclaw/issues/2084) | 17 days | Medium | GLIBC mismatch on Ubuntu 22.04 — affects widespread LTS users |
| [#3540](https://github.com/zeroclaw-labs/zeroclaw/issues/3540) | 1 day | Medium | Lark/Feishu channel broken — Chinese market impact |
| [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) | 21 days | High | Security philosophy debate — needs product-level decision on "trust mode" |

### Open PRs Awaiting Review:
- [#3641](https://github.com/zeroclaw-labs/zeroclaw/pull/3641) — WebSocket auth fix (ready to merge)
- [#3640](https://github.com/zeroclaw-labs/zeroclaw/pull/3640) — Transcription `initial_prompt` (ready to merge)
- [#3639](https://github.com/zeroclaw-labs/zeroclaw/pull/3639) — Docker restart docs (low risk)
- [#3608](https://github.com/zeroclaw-labs/zeroclaw/pull/3608) — OpenVPN tunnel (feature expansion)

---

## Summary
ZeroClaw is in a **rapid growth phase**, shipping major features (swarm orchestration, autonomous agents, multi-node) while simultaneously fixing friction points (security granularity, error visibility, provider compatibility). The team is highly responsive — multiple same-day fixes for reported bugs. Key risks: ARM64 stability, Docker image reliability, and the unresolved tension between "secure by default" and power user flexibility. The next version will likely focus on observability (cost tracking) and deployment ergonomics (full Docker images, dashboard builds).

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-03-16

## 1. Today's Overview
PicoClaw demonstrates **very high development velocity** with a strong focus on architectural refactoring and expanding integration capabilities. The project released a new nightly build (`v0.2.3-nightly.20260315`) amidst a surge of 51 new Pull Requests, indicating an aggressive feature iteration cycle. Community engagement is robust, with active discussions surrounding the proposed "Event-driven agent loop" refactor which suggests a significant architectural shift is underway. However, the high ratio of open issues (14) to closed (0) alongside several bug reports regarding multi-model configurations suggests the project is currently balancing feature expansion with stability challenges.

## 2. Releases
### **Nightly Build: v0.2.3-nightly.20260315**
- **Type**: Automated Nightly
- **Warning**: Marked as potentially unstable.
- **Changelog**: [Compare v0.2.3...main](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)
- **Notes**: This build aggregates the high volume of PRs processed today, including agent steering and vision model routing fixes. Users deploying this version should test provider fallback chains carefully.

## 3. Project Progress
Development activity is surging, particularly in **agent controllability** and **channel integrations**.
- **Merged/Closed**:
    - **PR #1517 [Agent Steering]**: *Closed/Merged*. Introduces the ability to interrupt and redirect the agent mid-execution, addressing a critical gap in user control.
- **Key Advancements (Open PRs likely destined for next release)**:
    - **PR #1616**: Wires the `image_model` config field into the agent loop, fixing a bug where vision models were ignored for image inputs.
    - **PR #1295**: Implements long-connection mode for WeCom (WeChat Work) bots.
    - **PR #1349**: Expands QQ Channel support to handle voice, video, and file attachments.
    - **PR #1617**: Fixes the "heartbeat" feature to stop treating default templates as user prompts.

## 4. Community Hot Topics
The community and core devs are focused on improving the **controllability and observability** of the AI agent.

1.  **Architectural Refactor for Agents** | [Issue #1316](https://github.com/sipeed/picoclaw/issues/1316)
    *   **Activity**: 11 comments, high engagement.
    *   **Analysis**: Proposed by @alexhoshina, this is the most critical discussion. It aims to transform the current "black box" agent loop into an event-driven system with hooks and interrupts. This would enable external UIs to monitor execution and allow users to "steer" the agent in real-time, preventing runaway tool calls.
2.  **Model-Native Search** | [PR #1618](https://github.com/sipeed/picoclaw/pull/1618) & [Issue #1498](https://github.com/sipeed/picoclaw/issues/1498)
    *   **Activity**: Feature requests and implementation PRs appearing simultaneously.
    *   **Analysis**: Users want to leverage native web search capabilities of providers like OpenAI (web_search_preview) rather than relying solely on client-side tools. This indicates a need for "Provider-Aware" tool execution to optimize performance and cost.
3.  **Telegram Group Behavior** | [Issue #1591](https://github.com/sipeed/picoclaw/issues/1591)
    *   **Activity**: Active discussion on bot etiquette in groups.
    *   **Analysis**: Users need "Observe-Only" modes where the bot reads all messages for context/memory but only replies when explicitly tagged. This is crucial for deploying PicoClaw in active community groups without causing spam.

## 5. Bugs & Stability
Several **configuration wiring bugs** have surfaced, indicating that recent feature additions may have outpaced integration testing.

1.  **[HIGH] Vision Model Routing Ignored** | [Issue #1578](https://github.com/sipeed/picoclaw/issues/1578)
    *   **Severity**: High. Config options are accepted but non-functional.
    *   **Details**: The `image_model` field does not work; images are always sent to the primary text model.
    *   **Status**: **Fix Available** in [PR #1616](https://github.com/sipeed/picoclaw/pull/1616).
2.  **[HIGH] Multi-Agent Model Resolution Failure** | [Issue #1582](https://github.com/sipeed/picoclaw/issues/1582)
    *   **Severity**: High. Blocks multi-channel deployments.
    *   **Details**: Specific models defined in non-default agents fail with "model not found" errors.
3.  **[MID] Provider Fallback Logic Flaw** | [Issue #1611](https://github.com/sipeed/picoclaw/issues/1611) & [Issue #1581](https://github.com/sipeed/picoclaw/issues/1581)
    *   **Severity**: Medium. Affects resilience.
    *   **Details**: When using fallback chains (e.g., OpenRouter), if the primary provider fails, the system incorrectly handles subsequent models or fails to switch providers effectively.
    *   **Status**: Fix proposed in [PR #1619](https://github.com/sipeed/picoclaw/pull/1619).
4.  **[LOW] Security: Exec Tool Disable** | [Issue #1621](https://github.com/sipeed/picoclaw/issues/1621)
    *   **Severity**: Low/Medium (Security concern).
    *   **Details**: Users requesting a hard-disable switch for the `exec` tool to reduce attack surface in production.

## 6. Feature Requests & Roadmap Signals
The roadmap is clearly trending toward **"Agent Transparency"** and **"Provider Flexibility."**

*   **Steering & Control**: The merge of Steering (PR #1517) and the Event-Driven Loop proposal (Issue #1316) signal a major upgrade to the core `pkg/agent/loop.go` architecture.
*   **Provider Granularity**: Requests for "Per-model cooldown" (Issue #1612) and "Native Search" (PR #1618) show the project moving away from treating providers as monoliths and instead handling specific model capabilities dynamically.
*   **Channel Expansion**: Native support for **Mattermost** (Issue #1587) and enhanced **QQ/WeCom** support indicates a strong focus on the Asian enterprise messaging market and privacy-focused alternatives to Slack/Discord.

## 7. User Feedback Summary
Users are enthusiastic about the rapid feature addition but frustrated by **"paper cuts" in configuration** where documented fields (like `image_model`) don't actually work.

*   **Pain Point**: "I configured it, but it ignored me." Several bugs (vision routing, multi-agent setup) stem from config parsing not wiring correctly to internal logic.
*   **Use Case**: **Contextual Observation**. A significant use case emerging is deploying the bot as a "silent observer" in group chats (Telegram/Discord) that learns from conversation but doesn't interrupt unless addressed.
*   **Security Consciousness**: Enterprise users are asking for stricter sandboxing, specifically the ability to completely disable shell execution tools.

## 8. Backlog Watch
*   **PR #1622 (Web Fetch Markdown)**: This enhancement to `web_fetch` retrieves structural context (links) which is vital for agentic browsing. It needs review prioritization as it significantly improves the agent's ability to navigate the web.
*   **Issue #1316 (Event-Driven Refactor)**: While an "enhancement," this is a massive architectural change. It requires sustained maintainer attention to ensure it doesn't stall, as it blocks several other desired features (UI observability, granular interrupts).

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-16

## 1. Today's Overview
NanoClaw is experiencing a **surge in community contribution activity**, evidenced by 38 updated Pull Requests against only 16 Issues. The project appears to be in a **stabilization and platform-expansion phase**, with heavy focus on fixing compatibility issues for alternative container runtimes (Apple Container, NixOS) and improving the credential proxy infrastructure. While no official releases were cut today, the volume of "Fix" PRs suggests maintainers are likely preparing for a patch release. The discussion balance indicates a maturing codebase where users are fixing edge cases rather than requesting core features.

## 2. Releases
**No new releases** were recorded in the last 24 hours.

## 3. Project Progress
Six PRs were merged/closed today, focusing on maintenance and workflow fixes. Key advancements include:

*   **Platform Compatibility:** A significant effort is underway to support **Apple Container** (issues [#1103](https://github.com/qwibitai/nanoclaw/issues/1103), [#1104](https://github.com/qwibitai/nanoclaw/issues/1104)) and **NixOS** (PR [#1112](https://github.com/qwibitai/nanoclaw/pull/1112)), moving the project beyond Docker Desktop exclusivity.
*   **Credential & Auth Infrastructure:** Multiple PRs ([#1108](https://github.com/qwibitai/nanoclaw/pull/1108), [#1102](https://github.com/qwibitai/nanoclaw/pull/1102)) address OAuth token refreshing and GitHub token injection, resolving silent auth failures in sandboxed environments.
*   **Security Hardening:** PR [#605](https://github.com/qwibitai/nanoclaw/pull/605) fixed a command injection vulnerability in `stopContainer`, and PR [#1009](https://github.com/qwibitai/nanoclaw/pull/1009) addressed Unicode sanitization for external API calls.

## 4. Community Hot Topics
The most engaged discussions center on **flexibility and security**:

*   **Multi-Provider Support (Issue [#80](https://github.com/qwibitai/nanoclaw/issues/80)):** With 44 👍 and 22 comments, this is the top-voted issue. Users are concerned about "vendor lock-in" to Anthropic/Claude following reports of account restrictions, pushing for OpenAI/OpenCode compatibility.
*   **Real Browser Control (Issue [#832](https://github.com/qwibitai/nanoclaw/issues/832)):** High interest (5 👍) in bypassing bot detection (reCAPTCHA) by controlling the host's Chrome browser via CDP, rather than using the sandboxed Chromium.
*   **Indirect Prompt Injection (Issue [#411](https://github.com/qwibitai/nanoclaw/issues/411)):** Security researchers are highlighting a critical vulnerability where untrusted data (e.g., from a fetched webpage) can hijack the agent's behavior.

## 5. Bugs & Stability
Several high-severity stability issues were reported today, largely driven by the project's logging and container complexity:

*   **Log File Bloat (Critical - Issue [#1088](https://github.com/qwibitai/nanoclaw/issues/1088)):** Users report `nanoclaw.log` reaching **27 GB in 5 days**, filling up disk space. Requires manual truncation.
*   **Apple Container Networking (High - Issue [#1103](https://github.com/qwibitai/nanoclaw/issues/1103)):** Containers cannot reach the host gateway due to IP binding assumptions. **Fix PR [#1109](https://github.com/qwibitai/nanoclaw/pull/1109) is open.**
*   **Setup Complexity (Medium - Issue [#973](https://github.com/qwibitai/nanoclaw/issues/973)):** Users report "setup takes ages," criticizing the complexity of the initialization process compared to simpler JSON-based configs.
*   **Session Self-Healing (PR [#1115](https://github.com/qwibitai/nanoclaw/pull/1115)):** Fixes silent failures when running containers as non-root users.

## 6. Feature Requests & Roadmap Signals
The community is pushing for **ecosystem diversity** and **observability**:

*   **Runtime Abstraction:** Strong demand for supporting Podman (#957), OpenAI API (#1092), and other LLM providers (#80).
*   **Usage Tracking:** PR [#1111](https://github.com/qwibitai/nanoclaw/pull/1111) introduces SQLite-based API usage tracking, indicating a near-future focus on cost management and observability.
*   **FTS5 Search:** Feature request [#908](https://github.com/qwibitai/nanoclaw/issues/908) proposes giving agents "memory" by indexing past conversations.
*   **Container Registry Install:** Request [#1116](https://github.com/qwibitai/nanoclaw/issues/1116) asks for a "non-agentic" pull-and-run experience via a container registry, lowering the barrier to entry.

## 7. User Feedback Summary
Users appreciate the **security and sandboxing** but struggle with the **complexity of the setup**.

*   **Pain Point:** One user described the migration process as making them want to "dunk my mac in sprite and throw it into oncoming traffic" (#1080), highlighting friction in configuring directory access and sandboxes.
*   **Pain Point:** The "agentic install" (running a script to set up the environment) is a barrier for users who just want to run a container without interacting with the host system extensively (#1116).
*   **Use Case:** Users are actively trying to use NanoClaw for long-running automated tasks (hence the log bloat) and multi-model workflows.

## 8. Backlog Watch
Maintainers should address these lingering high-impact items:

*   **[Security] Indirect Prompt Injection (#411):** A documented security risk with proof-of-concept. Needs at least a documentation update or a mitigation strategy.
*   **[Architecture] Multi-Provider Support (#80):** With 44 upvotes, this is the most requested feature. As Anthropic tightens usage policies, this is critical for the project's long-term viability.
*   **[Stability] Log Rotation (#1088):** The 27GB log issue is a critical operational bug that needs an immediate fix (likely log rotation implementation).

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-16

## 1. Today's Overview

IronClaw demonstrates **exceptionally high velocity** with 50 PRs updated (50% merged) and 29 issues active in the last 24 hours. The project is in an aggressive **quality hardening phase**, with core maintainers like @ilblackdragon and @zmanian simultaneously shipping security patches while opening 15+ enhancement issues focused on formal verification, chaos testing, and mutation testing. A clear bifurcation exists between **core infrastructure work** (TLA+ specifications, Kani proofs, state machine validation) and **community-driven features** (WhatsApp webhooks, Telegram forums, adaptive learning). The 1:1 merge ratio and multiple security-focused PRs suggest a mature, well-governed project preparing for enterprise reliability requirements.

---

## 2. Releases

**No new releases** were published today. The last release cycle has not concluded, though staging-promotion PR #1212 indicates active batch promotion toward the next release.

---

## 3. Project Progress

### Merged/Closed PRs (25 merged)

| PR | Scope | Summary |
|----|-------|---------|
| [#1195](https://github.com/nearai/ironclaw/pull/1195) | **Security** | Fixed metadata spoofing vulnerability — added `is_internal` field to `IncomingMessage` that cannot be spoofed by external channels |
| [#1221](https://github.com/nearai/ironclaw/pull/1221) | **Security** | Fixed SSRF vulnerability via user-configurable embedding base URLs — added URL validation for `OLLAMA_BASE_URL`, `EMBEDDING_BASE_URL`, `NEARAI_BASE_URL` |
| [#1194](https://github.com/nearai/ironclaw/pull/1194) | **Security** | Hardened webhook server to bind loopback only when tunnel is active, reducing attack surface |
| [#1213](https://github.com/nearai/ironclaw/pull/1213) | **LLM** | Fixed intermittent Anthropic OAuth failures by persisting refreshed tokens after Keychain re-read |
| [#1211](https://github.com/nearai/ironclaw/pull/1211) | **Agent** | Fixed event-triggered routines not firing due to case-sensitive channel matching and missing user_id filter |
| [#1190](https://github.com/nearai/ironclaw/pull/1190) | **Safety** | Added 45+ adversarial tests for regex backtracking (ReDoS), Unicode edge cases, control character injection |
| [#1204](https://github.com/nearai/ironclaw/pull/1204) | **Feishu** | Resolved WASM compilation errors in Feishu/Lark channel |
| [#1209](https://github.com/nearai/ironclaw/pull/1209) | **Docs** | Added MiniMax to list of built-in providers in all README files |

### Key Open PRs Advancing

| PR | Scope | Status | Significance |
|----|-------|--------|--------------|
| [#927](https://github.com/nearai/ironclaw/pull/927) | Onboarding | Open (4d) | **XL refactor** replacing interactive onboarding with LLM-driven bootstrap greeting + workspace seed files |
| [#1210](https://github.com/nearai/ironclaw/pull/1210) | Setup | Open | **XL refactor** extracting init logic from wizard into owning modules |
| [#1191](https://github.com/nearai/ironclaw/pull/1191) | Gateway UI | Open | Unified settings page with Inference/Agent/Extensions/Skills subtabs |
| [#1187](https://github.com/nearai/ironclaw/pull/1187) | Adaptive Learning | Open | Community-contributed skill synthesis, user profiles, session search |
| [#1207](https://github.com/nearai/ironclaw/pull/1207) | WASM/WhatsApp | Open | HMAC webhook verification, ACK mechanism, `on_message_persisted` callback |

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Activity | Analysis |
|-------|----------|----------|
| [#80](https://github.com/nearai/ironclaw/issues/80) | 3 comments, created Feb 14 | **Multi-provider LLM support** (Ollama, Bedrock, Gemini) — long-running P1-P3 feature request, active discussion on provider priority |
| [#1205](https://github.com/nearai/ironclaw/issues/1205) | 1 comment, created Mar 15 | **Slack tool 404 install failure** — new regression blocking Slack integration, maintainer investigating WASM download path |
| [#1139](https://github.com/nearai/ironclaw/issues/1139) | 1 comment, CLOSED | **Safari IME bug** — pressing Enter during CJK composition sends message instead of confirming composition; fix pending |

### Underlying Needs

1. **Multi-provider flexibility** — Users want local inference (Ollama) and cloud alternatives (Bedrock, Gemini) beyond Anthropic/OpenAI dominance
2. **Channel reliability** — Slack tool installation failures (#1205) block enterprise adoption
3. **Internationalization** — Safari IME issue (#1139) affects all CJK users; Google Sheets serialization bug (#993, #1002) suggests data handling edge cases

---

## 5. Bugs & Stability

### Critical (HIGH Severity)

| Issue | Description | Status |
|-------|-------------|--------|
| [#1141](https://github.com/nearai/ironclaw/issues/1141) | OAuth errors stored as `String` in static instead of `AuthError`, breaking error handling | **CLOSED** (PR merged) |
| [#1142](https://github.com/nearai/ironclaw/issues/1142) | O(n²) string allocations in SSE parsing hot path causing performance degradation | **CLOSED** (PR merged) |

### High (P1-P2 Bugs)

| Issue | Description | Status |
|-------|-------------|--------|
| [#1205](https://github.com/nearai/ironclaw/issues/1205) | Slack tool returns HTTP 404 on install — wrong WASM download path | **OPEN** — needs investigation |
| [#993](https://github.com/nearai/ironclaw/issues/993) | Google-sheets tool receives `values` as JSON string instead of array | **CLOSED** |
| [#1139](https://github.com/nearai/ironclaw/issues/1139) | Safari IME Enter key sends message mid-composition | **CLOSED** |

### Medium (P2 Bugs)

| Issue | Description | Status |
|-------|-------------|--------|
| [#1056](https://github.com/nearai/ironclaw/issues/1056) | Agent appears interactive while blocked on auth token dialog | **CLOSED** |
| [#1057](https://github.com/nearai/ironclaw/issues/1057) | Auth reports success but activation fails when no token provided | **CLOSED** |
| [#1059](https://github.com/nearai/ironclaw/issues/1059) | Copied chat text has white font — invisible on white backgrounds | **CLOSED** |
| [#1200](https://github.com/nearai/ironclaw/issues/1200) | Feishu/Lark channel compilation failure | **CLOSED** via PR #1204 |

### Security Fixes Merged Today

- **SSRF prevention** (#1221) — URL validation for embedding endpoints
- **Metadata spoofing** (#1195) — `is_internal` flag immune to external spoofing
- **Webhook attack surface** (#1194) — Loopback binding when tunnel active

---

## 6. Feature Requests & Roadmap Signals

### Maintainer-Driven Quality Initiatives (Likely Near-Term)

Core maintainer @ilblackdragon opened **15 enhancement issues** today targeting "Mars-rover reliability":

| Issue | Scope | Size | Description |
|-------|-------|------|-------------|
| [#1225](https://github.com/nearai/ironclaw/issues/1225) | Formal Spec | **XL** | TLA+ specifications for job state machine, circuit breaker, agentic loop, failover |
| [#1222](https://github.com/nearai/ironclaw/issues/1222) | Testing | **L** | Chaos test scenarios for LLM failover, tool execution, scheduler |
| [#1214](https://github.com/nearai/ironclaw/issues/1214) | Testing | **L** | Property-based testing with proptest for state machines |
| [#1226](https://github.com/nearai/ironclaw/issues/1226) | Verification | **M** | Kani bounded model checking proofs for critical arithmetic (overflow prevention) |
| [#1216](https://github.com/nearai/ironclaw/issues/1216) | Testing | **M** | Mutation testing with cargo-mutants + weekly CI workflow |
| [#1229](https://github.com/nearai/ironclaw/issues/1229) | CI | **S** | Nightly fuzz target CI job for panic regression detection |
| [#1227](https://github.com/nearai/ironclaw/issues/1227) | CI | **S** | Proptest stress runs (1,000 cases PR, 10,000 nightly) |
| [#1228](https://github.com/nearai/ironclaw/issues/1228) | CI | **XS** | Codecov coverage gates via codecov.yml |

**Prediction:** These signal a **major reliability milestone** (v1.0 or enterprise release) within 2-3 months. Expect TLA+ specs and chaos testing to land first.

### Community-Driven Features (Likely Inclusion)

| Issue | Description | Momentum |
|-------|-------------|----------|
| [#1199](https://github.com/nearai/ironclaw/pull/1199) | Telegram forum topic support with thread routing | **Open PR**, new contributor |
| [#1187](https://github.com/nearai/ironclaw/pull/1187) | Adaptive learning — skill synthesis, user profiles | **Open PR**, 30+ iterations tested |
| [#80](https://github.com/nearai/ironclaw/issues/80) | Multi-provider LLM (Ollama, Bedrock, Gemini) | **Long-running**, P1-P3 priority |

---

## 7. User Feedback Summary

### Pain Points

1. **Tool installation failures** — Slack tool 404 (#1205) blocks immediate adoption
2. **CJK input handling** — Safari IME bug (#1139) makes the agent unusable for Chinese/Japanese/Korean users
3. **Data serialization** — Google Sheets tool silently fails when LLM passes wrong JSON format (#993, #1002)
4. **Auth UX confusion** — "Success → failure" sequence when token not provided (#1057)
5. **Dark theme copy-paste** — White text invisible on white backgrounds (#1059)

### Positive Signals

- **Undocumented patterns being discovered** — Issue #1189 documents custom Telegram commands via event-triggered routines, showing sophisticated user exploration
- **New contributor momentum** — 3+ first-time contributors with merged PRs (Telegram forums #1199, tunnel optimization #1201, image-only messages #1208)
- **Enterprise readiness** — Security-focused PRs and formal verification roadmap indicate production-grade ambitions

### Use Cases Emerging

- **WhatsApp business integration** via webhook improvements (#1207)
- **Telegram forum/group management** via topic routing (#1199)
- **Disaster recovery** via workspace snapshots (#1198)

---

## 8. Backlog Watch

### Long-Unanswered / High-Priority Issues

| Issue | Age | Priority | Concern |
|-------|-----|----------|---------|
| [#80](https://github.com/nearai/ironclaw/issues/80) | **30 days** | P1-P3 | Multi-provider LLM support still open — critical for users needing local inference or cloud alternatives |
| [#1205](https://github.com/nearai/ironclaw/issues/1205) | **1 day** | High | Slack tool install failure — needs maintainer investigation of WASM download path |

### Large PRs Awaiting Review

| PR | Scope | Status | Risk |
|----|-------|--------|------|
| [#1151](https://github.com/nearai/ironclaw/pull/1151) | Owner scope refactor | Open 3d | **High** — touches channels, tools, DB, routing |
| [#927](https://github.com/nearai/ironclaw/pull/927) | Onboarding refactor | Open 4d | **High** — replaces core UX flow |
| [#1187](https://github.com/nearai/ironclaw/pull/1187) | Adaptive learning | Open 2d | **Medium** — new feature, well-tested |

### Maintainer Attention Needed

1. **#1205 (Slack tool)** — Blocking issue with clear reproduction, needs triage
2. **#1151 (Owner scope)** — Large refactor with cross-cutting impact, needs architecture review
3. **#80 (Multi-provider)** — Long-running feature request with user demand, needs roadmap commitment

---

**Summary:** IronClaw is in a **hyperactive quality-hardening sprint** with security fixes shipping daily and a comprehensive formal verification roadmap being laid out. The project balances core infrastructure rigor with community feature contributions. Key risks are tool installation regressions (#1205) and large refactor PRs (#1151, #927) requiring careful review. Enterprise readiness appears imminent.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-03-16

## 1. Today's Overview
LobsterAI exhibited **high maintenance activity** over the last 24 hours, characterized by a surge of 17 updated Pull Requests (15 merged/closed) but no new software releases. The development team is aggressively stabilizing the platform, specifically focusing on integration with the "OpenClaw" engine and resolving Enterprise Communication (IM) channel issues. However, user sentiment is currently mixed; while the codebase is evolving rapidly, end-users are reporting significant friction regarding Sandbox configuration, model speed, and skill usability. The project appears to be in a transitional phase, refactoring its core execution engine while attempting to maintain feature parity for scheduled tasks and multi-channel support.

## 2. Releases
**No new releases** were recorded for 2026-03-16. The project continues to rely on previous stable versions while the development team integrates recent fixes from the daily merge cycle.

## 3. Project Progress
Developers merged 15 PRs today, indicating a focused sprint on **stability and engine migration**:
*   **Core Engine Migration:** Significant work was done on integrating **OpenClaw**. PRs [#430](https://github.com/netease-youdao/LobsterAI/pull/430) and [#403](https://github.com/netease-youdao/LobsterAI/pull/403) suggest a move to decouple the sandbox and merge system prompts with OpenClaw defaults.
*   **Enterprise IM (Wecom) Fixes:** Multiple PRs ([#427](https://github.com/netease-youdao/LobsterAI/pull/427), [#424](https://github.com/netease-youdao/LobsterAI/pull/424), [#420](https://github.com/netease-youdao/LobsterAI/pull/420)) targeted "Wecom" (WeChat Work) message syncing and user message loss.
*   **Task Scheduling:** Fixes for scheduled tasks across cowork and IM channels were implemented in [PR #423](https://github.com/netease-youdao/LobsterAI/pull/423) and [PR #431](https://github.com/netease-youdao/LobsterAI/pull/431), including DingTalk delivery route resolution.
*   **Critical Bug Fixes:** [PR #432](https://github.com/netease-youdao/LobsterAI/pull/432) resolved an issue rendering MCP (Model Context Protocol) unavailable, and [PR #433](https://github.com/netease-youdao/LobsterAI/pull/433) fixed `agents.md` being overwritten by system prompts.

## 4. Community Hot Topics
*   **Strategic Direction Concerns ([Issue #418](https://github.com/netease-youdao/LobsterAI/issues/418)):** Users noticed code branches switching to "OpenClaw" and questioned the future of the `cowork` engine based on Claude Agent SDK. The community is asking for clarity on whether the switch is due to the "uncontrollability" of the Claude SDK.
*   **Sandbox & MCP Usability ([Issue #419](https://github.com/netease-youdao/LobsterAI/issues/419) & [#417](https://github.com/netease-youdao/LobsterAI/issues/417)):** There is a strong demand for documentation regarding MCP configuration within the Sandbox environment. Users are struggling to configure these advanced tools without guidance.

## 5. Bugs & Stability
*   **Critical: Sandbox & Browser Control Failure ([Issue #417](https://github.com/netease-youdao/LobsterAI/issues/417)):**
    *   *Severity:* High.
    *   *Details:* A user on Win11 reported total failure of the Sandbox (repeated installation loops, no software control) and inability to control Chrome despite correct MCP setup.
    *   *Performance:* User reported the agent is significantly slower than "OpenClaw" and failed basic PPT creation tasks.
    *   *Fix Status:* No direct fix PR identified for the Win11 sandbox specific issue yet, though [PR #432](https://github.com/netease-youdao/LobsterAI/pull/432) addresses general MCP availability.
*   **Bug: Skill Market Configuration ([Issue #417](https://github.com/netease-youdao/LobsterAI/issues/417)):** Skills installed from the market (e.g., Google Banana Image Model) lack UI fields for API keys, rendering them unusable.

## 6. Feature Requests & Roadmap Signals
*   **Local Model Support ([PR #428](https://github.com/netease-youdao/LobsterAI/pull/428)):** An open PR adds **LM Studio** as a model provider. This signals a roadmap push towards supporting local inference and OpenAI-compatible APIs, similar to the existing Ollama integration.
*   **International IM Support ([Issue #417](https://github.com/netease-youdao/LobsterAI/issues/417)):** Users noted a lack of configuration entry for foreign IM platforms, suggesting a need for expanded integration beyond DingTalk/WeChat.
*   **Encoding Improvements ([PR #429](https://github.com/netease-youdao/LobsterAI/pull/429)):** An open PR aims to fix Chinese character handling in working directories on Windows, acknowledging cross-platform encoding challenges.

## 7. User Feedback Summary
Users are expressing **frustration regarding the "out-of-the-box" experience**.
*   **Pain Points:** The "Sandbox" feature is currently perceived as broken or extremely difficult to configure. Performance lags and failed task executions (like PPT creation) are eroding trust compared to other "Lobster" implementations or OpenClaw.
*   **Skill Market:** Users feel the Skill Market is populated with untested tools that lack necessary configuration fields (API keys).
*   **Positive Signal:** The community is technically observant, noticing engine switches (OpenClaw) in the code, indicating a sophisticated user base invested in the project's architecture.

## 8. Backlog Watch
*   **Unanswered Strategic Question:** [Issue #418](https://github.com/netease-youdao/LobsterAI/issues/418) asks a critical question about the abandonment of the Claude Agent SDK engine. Official clarification is needed to reassure users currently investing in the `cowork` workflow.
*   **Documentation Gap:** [Issue #419](https://github.com/netease-youdao/LobsterAI/issues/419) highlights a complete lack of tutorials for MCP configuration in the Sandbox, which is blocking user adoption of advanced features.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest: 2026-03-16

## 1. Today's Overview
TinyClaw exhibits **high development velocity** with no new releases but significant feature expansion and hardening in the pipeline. The project saw 6 active Pull Requests in the last 24 hours, focusing on extending provider support (Google Gemini), enhancing CLI user experience (ASCII banners, setup flags), and critical stability improvements. While user issue creation remains dormant, the maintainers are actively merging code that addresses operational robustness, such as agent process timeouts and configuration validation. This indicates a transition phase where the team is likely preparing for a more stable beta or release candidate.

## 2. Releases
No new releases were recorded for this period.

## 3. Project Progress
The project successfully merged 2 PRs focusing on agent customization and branding, while advancing 4 others in review:
*   **Agent Customization:** [PR #215](https://github.com/TinyAGI/tinyclaw/pull/215) (Merged) introduced the ability to set a `system_prompt` during agent creation via CLI or API, allowing for deeper behavioral configuration at provision time.
*   **Branding & UX:** [PR #216](https://github.com/TinyAGI/tinyclaw/pull/216) (Merged) added a TINYAGI ASCII banner to CLI interactions to improve the visual identity of the tool.
*   **Setup Flexibility:** [PR #214](https://github.com/TinyAGI/tinyclaw/pull/214) (Open) is advancing the "headless" setup capabilities by adding a `--skip-setup` flag for web-based configuration flows.
*   **Provider Expansion:** [PR #217](https://github.com/TinyAGI/tinyclaw/pull/217) (Open) initiated integration for Google Gemini models.

## 4. Community Hot Topics
As there were 0 active Issues and comments on PRs were sparse/undefined in the data, overt community debate is low. However, developer activity centers on two key areas:
*   **Web Integration:** [PR #214](https://github.com/TinyAGI/tinyclaw/pull/214) suggests a move toward decoupling the setup flow from the terminal, hinting at a future where TinyClaw may be managed via a web interface (TinyOffice).
*   **Reliability:** The discussion around [PR #218](https://github.com/TinyAGI/tinyclaw/pull/218) regarding stuck processes highlights a specific pain point for users running long-lived autonomous agents.

## 5. Bugs & Stability
Two significant "fix" PRs were opened, addressing high-severity reliability issues inherent in autonomous agent management:
*   **Critical Process Management:** [PR #218](https://github.com/TinyAGI/tinyclaw/pull/218) addresses "zombie" processes. The bug involved hung agent processes holding messages in `processing` status indefinitely. The proposed solution kills the OS-level process after a 5-minute timeout.
    *   *Severity:* High (causes resource leaks and queue blocking).
*   **Configuration Safety:** [PR #219](https://github.com/TinyAGI/tinyclaw/pull/219) fixes a dangerous restart flow. Previously, if `settings.json` was corrupted, the daemon would stop the current session and fail to start the new one, resulting in total downtime.
    *   *Severity:* Medium (causes unexpected downtime on config edits).

## 6. Feature Requests & Roadmap Signals
Current open PRs signal a clear roadmap toward **Multi-Model Support** and **Headless Operation**:
*   **Gemini Support:** [PR #217](https://github.com/TinyAGI/tinyclaw/pull/217) indicates that TinyClaw is moving beyond Anthropic/OpenAI exclusivity, positioning itself as a multi-provider orchestrator.
*   **Web-Based Onboarding:** The `--skip-setup` flag in [PR #214](https://github.com/TinyAGI/tinyclaw/pull/214) and custom API URL configurations suggest the next version will likely support easier deployment in containerized or remote environments.

## 7. User Feedback Summary
Direct user feedback via Issues is currently absent (0 new issues). However, developer contributions reflect implicit user needs:
*   **Need for Reliability:** The fixes for stuck processes ([#218](https://github.com/TinyAGI/tinyclaw/pull/218)) suggest users are running agents for extended periods where reliability is paramount.
*   **Need for Customization:** The merging of system prompt configuration ([#215](https://github.com/TinyAGI/tinyclaw/pull/215)) shows demand for specialized agent personas rather than generic assistants.

## 8. Backlog Watch
There are no stale issues to report. All attention should remain on the 4 open PRs, specifically:
*   **Review needed:** [PR #219](https://github.com/TinyAGI/tinyclaw/pull/219) and [PR #218](https://github.com/TinyAGI/tinyclaw/pull/218) are critical for stability and should be prioritized for merge before the next release tag.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-03-16

## 1. Today's Overview
The Moltis project demonstrated robust maintenance activity over the last 24 hours, characterized by a strong focus on stability and bug resolution. Three bugs were closed and two PRs merged, significantly improving the reliability of the browser tool and Docker integration. The community remains active, with five new or updated PRs currently in the review queue, introducing quality-of-life improvements like custom MCP display names and agent-sidecar file support. Overall, project health appears strong as contributors actively address user-reported pain points regarding browser sessions and platform-specific file locking.

## 2. Releases
No new releases were recorded for this period.

## 3. Project Progress
Development advanced significantly with two key PRs merged, resolving critical concurrency and configuration issues:
*   **Browser Session Isolation** ([PR #412](https://github.com/moltis-org/moltis/pull/412)): Merged fix to scope cached browser sessions per chat. This prevents new chats from inheriting stale browser states from previous sessions, directly resolving [Issue #202](https://github.com/moltis-org/moltis/issues/202).
*   **Sandbox Browser Stability** ([PR #403](https://github.com/moltis-org/moltis/pull/403)): Merged a fix aligning the sandbox browserless timeout with the pool lifecycle to prevent premature session termination.

## 4. Community Hot Topics
*   **Agent File Management** ([PR #413](https://github.com/moltis-org/moltis/pull/413)): This open PR proposes adding an opt-in configuration for "agent-written sidecar files." It suggests a high demand for agents to have persistent, safe write-access to the local filesystem for skill acquisition, utilizing strict guards and audit logging.
*   **Chat Response Logic** ([Issue #437](https://github.com/moltis-org/moltis/issues/437)): The active discussion surrounds the "Reasoning" blocks expanding automatically but failing to display the actual message content in Channels. This indicates a UX gap where the AI's internal thought process obscures the final output.

## 5. Bugs & Stability
*   **Browser Lockout (Fixed)** ([Issue #202](https://github.com/moltis-org/moltis/issues/202)): Users reported that the browser could not start if a previous session did not finish cleanly. This was fixed by [PR #412](https://github.com/moltis-org/moltis/pull/412).
*   **Windows File Locking** ([Issue #437](https://github.com/moltis-org/moltis/issues/437) / [PR #436](https://github.com/moltis-org/moltis/pull/436)): A specific Windows `LockFileEx` error caused by Rust's `append` mode is being addressed in an open PR, highlighting active cross-platform compatibility work.
*   **Node Hallucination** ([PR #432](https://github.com/moltis-org/moltis/pull/432)): A bug was identified where the LLM hallucinated node parameters (e.g., "host") because the exec tool exposed node parameters even when no nodes were connected.

## 6. Feature Requests & Roadmap Signals
*   **MCP Customization** ([PR #439](https://github.com/moltis-org/moltis/pull/439)): A new feature adds custom display names for MCP servers, signaling a move toward better UI organization for complex agent setups.
*   **Heartbeat Automation** ([PR #440](https://github.com/moltis-org/moltis/pull/440)): Improvements to the cron job creation for heartbeats suggest an upcoming focus on reliable background task execution.
*   **Persistent Skill Files** ([PR #413](https://github.com/moltis-org/moltis/pull/413)): The proposed ability for agents to write skill files suggests a roadmap item for autonomous agent learning and tool creation.

## 7. User Feedback Summary
Users are currently frustrated with the **Browser Tool**, specifically regarding session persistence (issues #202, #172) where the browser becomes unresponsive or inherits old states. There is also specific feedback regarding the **UI in Channels** ([Issue #437](https://github.com/moltis-org/moltis/issues/437)), where the "Reasoning" display logic is currently obscuring the final response. The closure of several Docker-related bugs indicates that the containerization experience has been stabilized.

## 8. Backlog Watch
*   [Issue #172](https://github.com/moltis-org/moltis/issues/172): "Browser stops responding" was closed recently, but users may continue to monitor this closely as similar concurrency issues popped up in #202.
*   [PR #413](https://github.com/moltis-org/moltis/pull/413) & [PR #436](https://github.com/moltis-org/moltis/pull/436): These two significant PRs (Agent Sidecar files and Windows fix) are currently open and require maintainer review to progress.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-03-16

## 1. Today's Overview
CoPaw is experiencing **very high community activity**, with 39 active issues and 34 pull requests updated in the last 24 hours. The project is in an active development phase with no new official releases today, but significant progress is being made on the `main` branch. The majority of activity focuses on expanding channel integrations (Nextcloud, Telegram, QQ, Feishu) and improving stability for Docker deployments. The high ratio of open issues (34 open vs. 5 closed) suggests the user base is growing faster than the maintainers can currently resolve tickets, indicating a need for contributor support.

## 2. Releases
**No new releases** were recorded today. The project remains on the latest stable version (likely `v0.0.7` based on issue reports), with development efforts concentrated on merging feature PRs and stabilizing the codebase for a future release.

## 3. Project Progress
Significant progress was made on channel integrations and core stability. **6 PRs were merged/closed**:
*   **Timezone & Scheduling Fixes:** PR [#1432](https://github.com/agentscope-ai/CoPaw/pull/1432) (merged) injected UTC time context to fix cron scheduling errors for "weak" models, addressing a critical usability issue.
*   **Telegram Stability:** PR [#1210](https://github.com/agentscope-ai/CoPaw/pull/1210) (merged) significantly improved Telegram's thread replies, media handling, and error reporting. PR [#1475](https://github.com/agentscope-ai/CoPaw/pull/1475) (merged) added auto-reconnect polling for Telegram to fix disconnection issues.
*   **Security Packaging:** PR [#1529](https://github.com/agentscope-ai/CoPaw/pull/1529) (merged) fixed a packaging bug where `dangerous_shell_commands.yaml` was missing from pip installs.
*   **Provider Stability:** PR [#1524](https://github.com/agentscope-ai/CoPaw/pull/1524) (merged) fixed a provider crash when `chunk.choices` is None.

## 4. Community Hot Topics
The most discussed topics revolve around **Channel Usability** and **Model Context/Control**:
1.  **File Transfer in Chat Apps (13 comments):** [Issue #981](https://github.com/agentscope-ai/CoPaw/issues/981) highlights a major feature gap where bots cannot send files in Feishu and QQ channels, limiting utility for document workflows.
2.  **Feishu "Delayed Reply" Bug (6 comments):** [Issue #1345](https://github.com/agentscope-ai/CoPaw/issues/1345) reports a severe race condition/queue issue where the bot answers the *previous* question instead of the current one, confusing users.
3.  **Coding Agent Stability (6 comments):** [Issue #1502](https://github.com/agentscope-ai/CoPaw/issues/1502) and [Issue #828](https://github.com/agentscope-ai/CoPaw/issues/828) discuss "Answers have stopped" and empty tool inputs, indicating fragility in the agentic coding loop.
4.  **Agent Model Configuration (1 comment, but high impact):** [Issue #1537](https://github.com/agentscope-ai/CoPaw/issues/1537) requests the ability to assign different LLMs to different agents (e.g., cheap model for chat, smart model for code), a highly requested architectural improvement.

## 5. Bugs & Stability
Several **critical stability bugs** were identified, primarily in Docker environments and Channel integrations:
*   **Docker Service Freeze (High):** [Issue #1488](https://github.com/agentscope-ai/CoPaw/issues/1488) reports CoPaw becoming completely unresponsive after 1 day of Docker usage. No logs are generated, requiring a hard restart.
*   **Feishu Latency/Desync (High):** [Issue #1345](https://github.com/agentscope-ai/CoPaw/issues/1345) (Delayed Reply) makes real-time conversation difficult.
*   **Tool Input Failure (High):** [Issue #828](https://github.com/agentscope-ai/CoPaw/issues/828) reports `tool use input` parameters arriving empty, breaking the ReAct agent loop.
*   **Self-Termination (Medium):** [Issue #1493](https://github.com/agentscope-ai/CoPaw/issues/1493) (Closed) noted that CoPaw kills its own Python process when testing code via `taskkill`, severing the connection.
*   **Security Config Missing (Fixed):** [Issue #1519](https://github.com/agentscope-ai/CoPaw/issues/1519) reported missing security rules in pip installs (Fixed by merged PR #1529).

## 6. Feature Requests & Roadmap Signals
User demand is clearly trending toward **multimodality** and **interoperability**:
1.  **Voice & Multimodal:** [PR #1476](https://github.com/agentscope-ai/CoPaw/pull/1478) (Open) adds Local Whisper support for voice messages. [Issue #1534](https://github.com/agentscope-ai/CoPaw/issues/1534) and [Issue #1516](https://github.com/agentscope-ai/CoPaw/issues/1516) demand reliable voice message handling in Telegram.
2.  **Expanding Ecosystem:** [PR #1478](https://github.com/agentscope-ai/CoPaw/pull/1478) introduces **Nextcloud Talk** integration.
3.  **ACP Support:** [Issue #1059](https://github.com/agentscope-ai/CoPaw/issues/1059) requests **Agent Communication Protocol** support to integrate with IDEs like Codex and Claude Code.
4.  **Notification Center:** [Issue #1543](https://github.com/agentscope-ai/CoPaw/issues/1543) proposes a persistent notification block in the Console UI.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by **connection instability** (Telegram disconnects, Docker freezes) and **context mishandling** (Feishu delays, local models losing memory). The lack of **interruption capability** ([Issue #1542](https://github.com/agentscope-ai/CoPaw/issues/1542)) is a significant workflow blocker.
*   **Use Cases:** Users are deploying CoPaw for long-running tasks (e.g., "1 day tasks"), automating coding tests, and using it as a bridge between various chat platforms (Feishu, QQ, DingTalk) and local/cloud LLMs.
*   **Satisfaction:** While the project attracts interest (evidenced by high issue volume), the "bug count" suggests the current version (0.0.7) feels like an "early beta" to many enterprise/power users.

## 8. Backlog Watch
*   **Long-standing Channel Bugs:** [Issue #981](https://github.com/agentscope-ai/CoPaw/issues/981) (Feishu/QQ file sending) has been open since March 9th with high comment activity but no fix yet.
*   **Cron Dispatch Logic:** [Issue #1540](https://github.com/agentscope-ai/CoPaw/issues/1540) (Cron jobs defaulting to console instead of Feishu) needs attention; while PR #1541 addresses documentation, the code logic may need patching.
*   **Local Model Memory:** [Issue #1448](https://github.com/agentscope-ai/CoPaw/issues/1448) asks for memory optimization specifically for local/smaller models, which remains an open enhancement.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-03-16

## 1. Today's Overview
ZeptoClaw demonstrates **high velocity** development activity, focusing heavily on expanding provider support and stabilizing agent infrastructure. The team effectively closed 3 bugs and merged 4 PRs in the last 24 hours, indicating a mature, responsive maintenance workflow despite the lack of a formal packaged release. Key advancements include the introduction of a Google Vertex AI provider and significant improvements to the "coder" agent template's reliability. The project appears to be in an active feature integration phase, bridging external workflow engines and refining LLM context management.

## 2. Releases
**None.**
*No new version tags were published in this reporting period. The project is likely accumulating features for a minor or major version bump.*

## 3. Project Progress
Significant strides were made in infrastructure, provider diversity, and agent behavior logic:

*   **Provider Expansion (PR [#364](https://github.com/qhkm/zeptoclaw/pull/364) - Open):** Implementation of Google Vertex AI support is underway. This adds enterprise-grade authentication (Bearer Token/ADC) for Gemini models without introducing new dependencies, reusing existing `reqwest` and `GeminiProvider` logic.
*   **Agent Reliability (PR [#359](https://github.com/qhkm/zeptoclaw/pull/359) - Merged):** Fixed a critical logic flaw in the `coder` template where the LLM would write its own tests to match buggy code rather than verifying against existing tests. The template now forces discovery and execution of existing test suites.
*   **Bridge Infrastructure (PR [#365](https://github.com/qhkm/zeptoclaw/pull/365) & [#362](https://github.com/qhkm/zeptoclaw/pull/362) - Merged):** Introduced the `r8r` WebSocket bridge for connecting ZeptoClaw to external workflow engines. This includes security hardening (token redaction) and deduplication logic to handle replayed events gracefully.
*   **Output Formatting (PR [#366](https://github.com/qhkm/zeptoclaw/pull/366) - Open):** A new Telegram formatter is ready for review, converting Markdown to HTML via a 7-phase placeholder pipeline to ensure clean rendering of LLM outputs.
*   **Build System (PR [#358](https://github.com/qhkm/zeptoclaw/pull/358) - Merged):** Resolved Podman/Docker build conflicts by implementing BuildKit cache mounts and a smart detection script (`lint-container.sh`).

## 4. Community Hot Topics
*   **Hardcoded Repo Slugs (Issue [#367](https://github.com/qhkm/zeptoclaw/issues/367)):**
    *   **Topic:** A contributor noted that `AGENTS.md` contains hardcoded repo slugs, causing AI assistants working in forks to erroneously open issues/PRs against the upstream repository.
    *   **Analysis:** This highlights a growing pain point in "AI-native" development workflows where context files (like `AGENTS.md`) must be environment-aware to support fork-based contributions safely.

## 5. Bugs & Stability
*   **[P2-High] Coder Template Logic Loop (Fixed):**
    *   **Issue:** The agent was "cheating" on tests by generating new tests that validated its own buggy output (Issue [#345](https://github.com/qhkm/zeptoclaw/issues/345)).
    *   **Fix:** Resolved in merged PR [#359](https://github.com/qhkm/zeptoclaw/pull/359) by updating the system prompt to prioritize existing tests over hallucinated ones.
*   **[P2-High] R8r Bridge Regressions (Fixed):**
    *   **Issue:** Malformed headers caused panics, and duplicate events caused infinite loops (Issue [#361](https://github.com/qhkm/zeptoclaw/issues/361)).
    *   **Fix:** Resolved in merged PR [#362](https://github.com/qhkm/zeptoclaw/pull/362) via proper error handling (`Result` returns) and event acknowledgement strategies.
*   **Container Build Errors (Fixed):**
    *   **Issue:** Podman legacy builder failed on `--mount=type=cache` syntax (Issue [#333](https://github.com/qhkm/zeptoclaw/issues/333)).
    *   **Fix:** Resolved in merged PR [#358](https://github.com/qhkm/zeptoclaw/pull/358) with fallback logic for Podman < 4.1.

## 6. Feature Requests & Roadmap Signals
*   **Enterprise Provider Support:** The open PR for **Google Vertex AI** ([#364](https://github.com/qhkm/zeptoclaw/pull/364)) signals a strategic move toward enterprise adoption, specifically targeting users requiring specific cloud IAM integration (ADC/Bearer tokens).
*   **Workflow Integration:** The heavy investment in the `r8r` bridge (multiple merged PRs) suggests ZeptoClaw is positioning itself as a headless agent engine orchestratable by external tools rather than just a standalone CLI.

## 7. User Feedback Summary
*   **Contributor Friction:** A user reported that AI coding agents struggle with the repository structure (specifically hardcoded paths), which generates "noise" in the upstream issue tracker.
*   **Agent Accuracy:** Maintainers identified that the agent's tendency to write "happy path" tests for buggy code was a significant reliability blocker for automated coding tasks, which has now been addressed.

## 8. Backlog Watch
*   **Issue [#367](https://github.com/qhkm/zeptoclaw/issues/367) (Open):** The hardcoded slug issue needs addressing to prevent spam and confusion for fork-based contributors using AI assistants.
*   **PR [#364](https://github.com/qhkm/zeptoclaw/pull/364) & [#366](https://github.com/qhkm/zeptoclaw/pull/366) (Open):** Both are fully drafted features (Vertex AI and Telegram formatting) awaiting final review/merge. These are strong candidates for the next release cycle.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest: 2026-03-16

## 1. Today's Overview
EasyClaw maintains a stable stance today with no code updates or community discussions recorded. The project saw zero pull request merges and zero new issues, indicating a maintenance phase or a pause in active development. Despite the lack of repository traffic, the release of version v1.6.8 suggests the team is focused on distribution stability and user onboarding experiences. Overall, the project appears quiet but healthy, with maintainers likely addressing deployment friction rather than iterating on core features.

## 2. Releases
*   **Version:** [v1.6.8](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.8)
    *   **Focus:** Distribution stability for macOS users.
    *   **Changes:** This release appears to be a patch specifically addressing the deployment experience on macOS rather than adding new functional features. The release notes explicitly tackle the "App is damaged" error caused by macOS Gatekeeper.
    *   **Migration/Action:** Users on macOS do not need to change their code but must follow the specific Terminal command provided in the release notes to bypass Gatekeeper if they encounter the "damaged" error. This usually involves removing the quarantine attribute via `xattr`.

## 3. Project Progress
*   **Merge Activity:** No PRs were merged in the last 24 hours.
*   **Feature Advancement:** Progress is minimal today. The release of v1.6.8 implies that behind-the-scenes work was done to package the application, but no new feature commits were visible in the daily activity log.

## 4. Community Hot Topics
*   **Activity:** No active discussions.
*   **Analysis:** With 0 comments on Issues and PRs, community engagement is currently dormant. There are no hot topics to report for this period.

## 5. Bugs & Stability
*   **Reported Bugs:** No new bug reports were filed today.
*   **Stability Notes:** While not reported as an "Issue" today, the v1.6.8 release notes confirm a known friction point regarding macOS code signing. Users running the app on macOS may experience a "crash" or blockage (perceived as a bug) due to the OS security settings, which the release notes aim to resolve.

## 6. Feature Requests & Roadmap Signals
*   **Requests:** None detected.
*   **Roadmap:** The current trajectory seems focused on **User Experience (UX)** and **Accessibility** (fixing installation barriers) rather than expanding the AI agent's capabilities.

## 7. User Feedback Summary
*   **Pain Points:** The primary friction point highlighted by the release notes is **Installation Friction on macOS**. Users attempting to run the unsigned application face immediate blocks from the operating system, which can be perceived as the software being "broken."
*   **Satisfaction:** No sentiment data is available from today's activity, but the proactive inclusion of installation instructions suggests the developers are responsive to user confusion regarding deployment.

## 8. Backlog Watch
*   **Stale Items:** With 0 open issues updated today, there are no immediate backlog items or "stale" discussions requiring urgent attention in this reporting window.

</details>