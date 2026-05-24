# OpenClaw Ecosystem Digest 2026-05-25

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-24 22:16 UTC

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
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-25

## 1. Today's Overview
OpenClaw is experiencing extremely high open-source activity, maintaining massive momentum with 500 issues and 500 pull requests updated in the last 24 hours. However, the ratio of open to closed items (473 open vs. 27 closed issues; 420 open vs. 80 merged/closed PRs) suggests that the influx of community requests and ongoing development work is significantly outpacing triage and resolution. The project shipped two releases (`v2026.5.22` and `v2026.5.24-beta.1`) focused heavily on Gateway performance and infrastructure stability. Community demand remains heavily concentrated on security hardening (masked secrets, policy enforcement), cross-platform expansion, and messaging channel reliability (Telegram/WhatsApp/Slack).

## 2. Releases

### `v2026.5.24-beta.1`
- **Gateway/perf:** Reused process-stable channel catalog reads and cached stable install-record, channel-catalog, and bundled-channel data to reduce repeated boundary checks.
- **Observability:** Rotated gateway watch CPU profiles so benchmark runs do not accumulate unbounded artifacts.

### `v2026.5.22`
- **Gateway/perf:** Reused immutable plugin metadata snapshots across start cycles to improve boot performance and reduce memory overhead.

*(No explicit breaking changes or migration notes were documented in the release bodies.)*

## 3. Project Progress
Merged and closed PRs in the last 24 hours primarily targeted messaging channel stability, runtime safety, and configuration hygiene:

- **Channel Broker Architecture (Phases 2B & 2D):** PRs [#86154](https://github.com/openclaw/openclaw/pull/86154) (Telegram) and [#86157](https://github.com/openclaw/openclaw/pull/86157) (Slack) are actively consolidating recurring multi-channel maintenance behind a unified Channel Broker contract.
- **Telegram Fix:** PR [#85555](https://github.com/openclaw/openclaw/pull/85555) resolved transient Telegram pairing prompts caused by file descriptor pressure.
- **Codex Stability:** PR [#86216](https://github.com/openclaw/openclaw/pull/86216) recovered Codex binding after stale preflight compaction; PR [#85646](https://github.com/openclaw/openclaw/pull/85646) stopped persisting per-turn skills snapshots in Codex native user history.
- **Config Hygiene:** PR [#86081](https://github.com/openclaw/openclaw/pull/86081) migrated legacy Feishu `botName` fields; PR [#84480](https://github.com/openclaw/openclaw/pull/84480) added strict validation for search limits.
- **Security:** PR [#86192](https://github.com/openclaw/openclaw/pull/86192) cleared admin scopes for backend self-pairing; PR [#86209](https://github.com/openclaw/openclaw/pull/86209) neutralized local markdown file links in the UI.

## 4. Community Hot Topics

| Issue/PR | Comments | 👍 | Topic |
|---|---|---|---|
| [#75 — Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | 106 | 77 | Native desktop apps for Linux/Windows parity with macOS |
| [#9443 — Prebuilt Android APK releases](https://github.com/openclaw/openclaw/issues/9443) | 25 | 2 | AI-submitted feature request for official prebuilt APKs |
| [#12602 — Slack Block Kit support](https://github.com/openclaw/openclaw/issues/12602) | 13 | 0 | Rich interactive messages for Slack agent replies |
| [#10659 — Masked Secrets](https://github.com/openclaw/openclaw/issues/10659) | 13 | 4 | Prevent agents from seeing raw API keys to block prompt-injection credential theft |
| [#58450 — Agent promises follow-up without action](https://github.com/openclaw/openclaw/issues/58450) | 13 | 2 | Agent claims it will follow up later but spawns no background task |
| [#6731 — Safe/Unsafe ClawdBot (Rust rewrite)](https://github.com/openclaw/openclaw/issues/6731) | 12 | 0 | Sandboxed "safe mode" execution environment proposal |

**Analysis:** The open-source community is converging on three macro needs: (1) **Cross-platform parity** — Linux/Windows/Android are heavily requested to match the macOS experience; (2) **Security hardening** — masked secrets, filesystem sandboxing, and policy enforcement hooks are recurring themes across the top issues; (3) **Agent reliability** — users want agents to mechanically follow through on promised actions and handle multi-turn conversations consistently.

## 5. Bugs & Stability

**Critical / P1:**
- 🐛 **[Issue #86184](https://github.com/openclaw/openclaw/issues/86184):** Telegram direct receives generic `/new` fallback after successful tool turn on `v2026.5.22`. Users see "Something went wrong" despite the turn succeeding. *(No fix PR yet — needs live repro.)*
- 🐛 **[Issue #85192](https://github.com/openclaw/openclaw/issues/85192):** DeepSeek V4 unsigned thinking blocks cause reasoning-only retry to fail, hitting `llm-idle-timeout`. *(No fix PR yet.)*
- 🐛 **[Issue #83959](https://github.com/openclaw/openclaw/issues/83959):** Codex app-server startup retries can exhaust before replacement server is ready, causing crash-loops. *(No fix PR yet.)*
- 🐛 **[PR #86213](https://github.com/openclaw/openclaw/pull/86213):** Auto-reply `NO_REPLY` detection broken when models prepend reasoning blocks before the token. *(Fix PR open.)*
- 🐛 **[PR #85958](https://github.com/openclaw/openclaw/pull/85958):** Codex compaction was incorrectly treated as OpenClaw-owned PI safeguard, risking context loss. *(Fix PR open.)*

**High / P2:**
- 🐛 **[Issue #58514](https://github.com/openclaw/openclaw/issues/58514):** Google Chat Space/Group messages silently ignored; only DMs work. *(Fix PR linked.)*
- 🐛 **[Issue #53628](https://github.com/openclaw/openclaw/issues/53628):** `${XDG_CONFIG_HOME}` not processed when installing skills in Docker. *(Fix PR linked.)*
- 🐛 **[Issue #57901](https://github.com/openclaw/openclaw/issues/57901):** Safeguard compaction ignores `compaction.model` config, using session model instead. *(Fix PR linked.)*
- 🐛 **[Issue #59330](https://github.com/openclaw/openclaw/issues/59330) (👍 12):** Control UI Raw mode permanently disabled since `2026.3.31` due to `materializeRuntimeConfig` injecting undefined keys. *(Fix PR linked.)*

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Signals |
|---|---|---|
| **Masked Secrets / Credential Isolation** | [#10659](https://github.com/openclaw/openclaw/issues/10659) | Security-tagged, high engagement; PR [#84581](https://github.com/openclaw/openclaw/pull/84581) already strips plaintext model keys. Likely next release. |
| **Pre-response Enforcement Hooks (Hard Gates)** | [#13583](https://github.com/openclaw/openclaw/issues/13583) | High-stakes workflow demand; related to PR [#85817](https://github.com/openclaw/openclaw/pull/85817) (agent-scoped policy overlays). |
| **Dynamic Model Discovery (OpenRouter+)** | [#10687](https://github.com/openclaw/openclaw/issues/10687) | Fast-moving provider catalogs demand real-time model lists. |
| **Filesystem Sandboxing Config** | [#7722](https://github.com/openclaw/openclaw/issues/7722) | Complements masked secrets for secure agent execution. |
| **Prebuilt Android APK** | [#9443](https://github.com/openclaw/openclaw/issues/9443) | AI-submitted request; low friction to ship. |
| **Native Secrets Manager Integration (Vault, AWS SM)** | [#13610](https://github.com/openclaw/openclaw/issues/13610) | Enterprise deployment prerequisite. |
| **Backup/Restore Utility** | [#13616](https://github.com/openclaw/openclaw/issues/13616) | Disaster recovery gap for production users. |
| **Multi-slot Memory Role Architecture** | [PR #86210](https://github.com/openclaw/openclaw/pull/86210) | Major memory system refactor already in review. |

**Prediction:** The `v2026.5.24` stable release will likely include masked secrets hardening, multi-slot memory roles, Codex compaction fixes, and Channel Broker Phase 2 Telegram/Slack migration.

## 7. User Feedback Summary

**Pain Points:**
- **Messaging channel reliability** is the dominant frustration: Telegram fallback messages, WhatsApp missed-message backfill, Google Chat group silencing, and HTML parsing truncation in Telegram.
- **Security posture anxiety:** Users are uncomfortable with plaintext API keys in config files, untrusted issue bodies injected into sub-agent prompts ([#45740](https://github.com/openclaw/openclaw/issues/45740)), and agents having unrestricted filesystem/exec access.
- **Model provider brittleness:** Silent failures on context overflow ([#58957](https://github.com/openclaw/openclaw/issues/58957)), DeepSeek V4 thinking block handling ([#85192](https://github.com/openclaw/openclaw/issues/85192)), and proxy conflicts with local Ollama embeddings ([#81249](https://github.com/openclaw/openclaw/issues/81249)).
- **Agent follow-through trust:** Users lose confidence when agents promise follow-up actions but never execute them ([#58450](https://github.com/openclaw/openclaw/issues/58450)).

**Positive Signals:**
- Active community engagement (500+ issues/PRs updated daily), strong feature proposals with detailed root-cause analysis.
- Maintainers are responsive to security-tagged issues and fast-moving on gateway performance improvements.
- The Channel Broker architecture ([PR #86157](https://github.com/openclaw/openclaw/pull/86157)) is a well-received structural investment to reduce recurring multi-channel regressions.

## 8. Backlog Watch

| Item | Age | Concern |
|---|---|---|
| [#75 — Linux/Windows Apps](https://github.com/openclaw/openclaw/issues/75) | ~5 months, 106 comments | Highest-engagement issue, no clear roadmap commitment from maintainers. |
| [#6731 — Safe/Unsafe Rust Rewrite](https://github.com/openclaw/openclaw/issues/6731) | ~4 months | Needs explicit product decision; currently `clawsweeper:needs-product-decision`. |
| [#10687 — Dynamic Model Discovery](https://github.com/openclaw/openclaw/issues/10687) | ~3.5 months | Maintainer-tagged but no linked PR; critical for OpenRouter users. |
| [#81249 — Ollama + Proxy SSRF Conflict](https://github.com/openclaw/openclaw/issues/81249) | ~11 days (closed, unclear resolution) | Local embedding users blocked by proxy; needs clear workaround docs. |
| [#73723 — Native Hook Relay Stuck](https://github.com/openclaw/openclaw/issues/73723) | ~1 month | Gateway reports hooks ready but tool execution remains blocked. |
| [#45740 — Untrusted Issue Body Injection](https://github.com/openclaw/openclaw/issues/45740) | ~2 months, `impact:security` | Linked PR open but not merged; prompt injection risk remains. |

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digest summaries for May 25, 2026.

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is experiencing a phase of rapid, feature-heavy expansion, primarily driven by community contributions and the integration of diverse LLM providers. Projects are coalescing around three fundamental requirements: robust multi-channel messaging integrations (Telegram, Slack, Discord), secure and isolated execution environments (sandboxing and credential masking), and reliable autonomous action (preventing infinite tool loops and ensuring task follow-through). While massive core frameworks dominate the volume of activity, smaller, specialized projects are carving out niches in edge computing, enterprise stability, and cryptography. 

## 2. Activity Comparison
| Project | Issues Updated (24h) | PRs Updated (24h) | Recent Release Status | Project Health Score* |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | Active (`v2026.5.24-beta.1`) | 🟢 High (Massive scale, maintainers keeping pace) |
| **Hermes Agent** | 50 | 50 | Pending (Imminent patch) | 🟢 High (High engagement, fast P1 bug turnaround) |
| **IronClaw** | 28 | 50 | Stalled (0.24.0, tags at 0.27.0) | 🟡 Moderate (Architectural heavy-lifting, registry bottlenecks) |
| **ZeroClaw** | 49 | 45 | Rolling/None | 🟡 Moderate (High open backlog, active development) |
| **NanoBot** | 4 | 17 | Iterative (Main branch) | 🟢 High (Focused output, high PR merge rate) |
| **LobsterAI** | 0 | 14 | Stabilization (Mass batch merge) | 🟢 High (Proactive hardening, zero inbound bugs) |
| **CoPaw** | 14 | 1 | Pending (`v1.1.8.post1`) | 🟡 Moderate (User demand outpacing maintainer velocity) |
| **Moltis** | 8 | 10 | Pending (Major arch changes) | 🟢 High (Zero open backlog, rapid response) |
| **PicoClaw** | N/A | 10 | Nightly (`v0.2.9-nightly`) | 🟢 High (Healthy expansion, mobile/edge focus) |
| **NanoClaw** | 1 | 3 | Pending | 🟡 Moderate (Slow iteration, silent failure bugs) |
| **NullClaw** | 1 | 1 | Pending | 🟢 High (Stable, resolving long-term tech debt) |
| **TinyAGI / ZeptoClaw** | 0 | 0 | Dormant | 🔴 Low (No activity) |

*\*Health Score is based on the ratio of open-to-closed items, maintainer responsiveness, and release cadence.*

## 3. OpenClaw's Position
*   **Advantages vs Peers:** OpenClaw operates at a scale (500+ daily updates) that dwarfs most peers, functioning as the core reference implementation in the space. It boasts the most mature multi-channel gateway architecture and has successfully implemented multi-slot memory roles and advanced observability (CPU profile rotation).
*   **Technical Approach:** Unlike projects heavily pivoting to native desktop runtimes (ZeroClaw's Tauri app) or blockchain/cryptography layers (IronClaw), OpenClaw remains focused on horizontal platform parity and deep messaging channel broker architectures.
*   **Community Size:** OpenClaw has the largest and most vocally demanding community. However, it faces unique scaling challenges—its open-to-closed issue/PR ratio suggests maintainers are structurally overwhelmed by triage, a problem not yet seen in tightly managed projects like Moltis or NanoBot.

## 4. Shared Technical Focus Areas
*   **Infinite Loop & Execution Guardrails:** Preventing agents from burning tokens by repeating failing tool calls is an ecosystem-wide pain point. **NanoBot** and **Hermes Agent** are actively implementing hard rate limits and abort sequences, while **PicoClaw** is scoping tool execution policies.
*   **Provider Fragility (Strict APIs):** As LLM providers tighten API rules, agents are breaking. **Hermes Agent** (xAI/OpenAI 400 errors), **OpenClaw** (DeepSeek reasoning blocks), and **ZeroClaw** (Gemini history violations) are all dedicating significant PRs to stripping internal scaffolding and handling strict schema enforcement.
*   **Sandboxing & Security Boundaries:** Unfettered agent access is no longer acceptable. **Moltis** and **OpenClaw** are advancing credential masking and per-agent isolation. **ZeroClaw** and **IronClaw** are heavily focused on sandbox containment (bubblewrap) and secure cryptographic signing.
*   **Advanced Memory & Context Control:** Moving beyond simple context windows, projects are implementing complex memory strategies. **NullClaw** and **CoPaw** are debating toggleable memory recall, while **ZeroClaw** and **NanoBot** are building "Dream Modes" for autonomous memory consolidation.

## 5. Differentiation Analysis
*   **Security & Cryptography:** **IronClaw** stands completely apart by integrating Web3/WASM runtimes, WalletConnect, and attested-signing stacks, aiming for secure financial execution. **Moltis** and **NullClaw** differentiate through deep, granular secrets management and native HTTP stack refactoring.
*   **Edge & Mobile Computing:** **PicoClaw** uniquely targets ARM devices, Android Termux, and local LM Studio setups, contrasting with the cloud-heavy or desktop-heavy approaches of others.
*   **Enterprise Routers vs. Companions:** **LobsterAI** and **Hermes Agent** act as highly robust enterprise routing hubs (focusing on WebSocket state, IM integrations, and session concurrency), whereas **CoPaw** focuses on the "personal companion" angle (UI pets, token metrics, localized models).
*   **Architecture:** **NullClaw** takes a minimalist, highly technical approach (Zig-based native HTTP wrappers), whereas **OpenClaw** and **ZeroClaw** lean heavily into complex, multi-container, multi-plugin architectures.

## 6. Community Momentum & Maturity
*   **Rapid Iteration (High Momentum):** **NanoBot**, **Hermes Agent**, and **Moltis** show high momentum, rapidly opening and merging PRs in tight feedback loops with their communities.
*   **Stabilization & Batching (Mature):** **LobsterAI** and **IronClaw** display mature, batched workflows. LobsterAI just merged a massive 45-day backlog of bug fixes in one sweep, while IronClaw is managing a monolithic "Reborn" architectural overhaul.
*   **Struggling with Scale:** **OpenClaw** and **CoPaw** are experiencing friction between community demand and maintainer velocity. OpenClaw's ratio of open items is outpacing closures, while CoPaw users are actively complaining about stagnant UI bugs and unaddressed PRs.

## 7. Trend Signals
1.  **"Dead Config" Trust Erosion:** A rising frustration across **ZeroClaw**, **OpenClaw**, and **NanoClaw** where documented configurations (timeouts, memory toggles, tool filters) are simply ignored by the underlying code. Developers must prioritize schema validation parity to maintain user trust.
2.  **The Shift to Autonomous "Dream" States:** The industry is moving from reactive chat to autonomous background processing. **NanoBot**, **CoPaw**, and **ZeroClaw** are exploring "Dream" architectures where agents process history and self-improve, necessitating heavy development in token-efficient memory consolidation.
3.  **Cross-Instance Multi-Agent Systems:** Single-agent setups are becoming legacy. **NanoBot** (message buses), **Moltis** (agent capability boundaries), and **PicoClaw** (collaboration buses) signal that the next generation of agents will operate as coordinated swarms.
4.  **Supply Chain & Execution Auditing:** Driven by prompt-injection fears, projects are aggressively addressing supply chain security. **Hermes Agent** introduced OSV.dev auditing, **Moltis** is sealing MCP environment variables, and **ZeroClaw** requires SHA256 verification for self-updates.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-25

## 1. Today's Overview
NanoBot is experiencing a highly active and healthy development cycle, evidenced by 17 pull requests updated in the past 24 hours alongside 4 issue updates. The community is deeply engaged in enhancing the agent's autonomy, observability, and multi-agent capabilities. A significant portion of today's activity revolves around hardening the agent loop—specifically addressing infinite tool-calling loops and expanding sub-agent orchestration. With six PRs merged/closed and eleven open, the maintainers are efficiently processing community contributions while advancing several high-impact architectural features.

## 2. Releases
No new releases were recorded today. The project continues to iterate on its `main` branch via merged PRs.

## 3. Project Progress
Six PRs were merged or closed today, advancing key areas of the project:
*   **Sub-agent Orchestration:** PR [#3975](https://github.com/HKUDS/nanobot/pull/3975) was merged, allowing the `spawn` tool to accept custom `temperature` parameters for sub-agents. Additionally, a bug fix (PR [#3978](https://github.com/HKUDS/nanobot/pull/3978)) is underway to properly wire the `maxConcurrentSubagents` config.
*   **Provider & API Compatibility:** PR [#3974](https://github.com/HKUDS/nanobot/pull/3974) merged, introducing `apiType` switching and `extraBody` support for OpenAI-compatible endpoints. PR [#3984](https://github.com/HKUDS/nanobot/pull/3984) merged, fixing tool call ID mismatches with proxies like antchat.
*   **UX & UI Enhancements:** PR [#3987](https://github.com/HKUDS/nanobot/pull/3987) merged, streamlining slash command actions with localization. PR [#3979](https://github.com/HKUDS/nanobot/pull/3979) merged, upgrading MCP setup to a first-class WebUI capability with hot-reloading.
*   **Windows Stability:** PR [#1678](https://github.com/HKUDS/nanobot/pull/1678) was closed after finally addressing a long-standing issue where async pipes caused indefinite hangs on Windows.

## 4. Community Hot Topics
*   **Loop Detection & Guardrails (Issue [#3986](https://github.com/HKUDS/nanobot/issues/3986) & PR [#3985](https://github.com/HKUDS/nanobot/pull/3985)):** Users reported significant pain with LLMs falling into infinite loops (e.g., grepping the same nonexistent pattern repeatedly). A corresponding feature PR for a universal loop guard with hard rate-limiting has been opened, signaling a strong community-maintainer alignment on fixing agent reliability.
*   **"Dream" System Constraints (Issue [#3973](https://github.com/HKUDS/nanobot/issues/3973)):** A deep-dive architectural discussion highlighting that NanoBot's self-improvement mechanism ("Dream") suffers from a "hunger problem" due to relying solely on `history.jsonl` and lacking real-time learning. This aligns with PR [#3990](https://github.com/HKUDS/nanobot/pull/3990), which refactors the Dream system into a single-phase consolidation process.

## 5. Bugs & Stability
*   **Severity: Medium** — [bug] **Tool Call ID Mismatch** (Issue [#3980](https://github.com/HKUDS/nanobot/issues/3980)): Broke tool execution for OpenAI-compatible APIs (GLM-4.7, Kimi 2.6) via antchat proxies. *Status: Fixed and closed via PR [#3984](https://github.com/HKUDS/nanobot/pull/3984).*
*   **Severity: Medium** — [bug] **Sub-agent Concurrency Ignored** (PR [#3978](https://github.com/HKUDS/nanobot/pull/3978)): The `maxConcurrentSubagents` config was silently falling back to a default of 1, stalling multi-agent workflows. *Status: Fix PR is open.*
*   **Severity: High** — [bug] **Infinite Tool-Calling Loops** (Issue [#3986](https://github.com/HKUDS/nanobot/issues/3986)): Models get stuck repeating the exact same failing tool calls. *Status: Fix actively developed in PR [#3985](https://github.com/HKUDS/nanobot/pull/3985).*

## 6. Feature Requests & Roadmap Signals
*   **Agent-to-Agent Collaboration:** PR [#3992](https://github.com/HKUDS/nanobot/pull/3992) introduces a cross-instance message bus, moving NanoBot toward multi-agent swarming.
*   **Expanded Provider Support:** PR [#3988](https://github.com/HKUDS/nanobot/pull/3988) adds support for StepFun's Step Plan API, showing a roadmap focused on aggressive expansion of LLM backend choices.
*   **UI Interactivity:** PR [#3977](https://github.com/HKUDS/nanobot/pull/3977) turns the model badge into a 1-click preset picker, and PR [#3991](https://github.com/HKUDS/nanobot/pull/3991) introduces "HyperFrames" as a CLI plugin. 
*   *Prediction:* The next release will heavily feature loop-resistance mechanics, multi-agent communication protocols, and MCP quality-of-life improvements.

## 7. User Feedback Summary
Users are actively pushing NanoBot into complex, multi-step automation environments, which is exposing edge cases in provider compatibility and context management. Frustration centers around agents getting stuck in dead-end loops (eating up tokens/context) and config options (like sub-agent concurrency) not working as documented. Conversely, there is high enthusiasm for the plugin ecosystem, MCP integrations, and the core `spawn` tool, with users requesting more granular control over sub-agent parameters (like `temperature`).

## 8. Backlog Watch
*   **PR [#3985](https://github.com/HKUDS/nanobot/pull/3985) (Loop Guard):** Solves a critical usability flaw. Maintainer review is highly requested to prevent agent token drain.
*   **PR [#3992](https://github.com/HKUDS/nanobot/pull/3992) (Cross-Instance Message Bus):** A major architectural addition requiring thorough review to ensure cross-agent security and stability.
*   **Issue [#3973](https://github.com/HKUDS/nanobot/issues/3973) (Dream System Real-time Learning):** Currently zero maintainer comments. Needs architectural feedback from core devs regarding real-time memory integration.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-25

## 1. Today's Overview
Hermes Agent is experiencing a period of exceptionally high open-source community engagement, with 50 issues and 50 pull requests updated in the past 24 hours. The lack of recent official releases suggests that the maintainers are likely gearing up for a significant stability and feature update, actively merging critical bug fixes and security improvements. Activity is heavily dominated by gateway stability across multiple messaging platforms (Telegram, Discord, Matrix) and refining transport compatibility with strict third-party LLM APIs. The high ratio of open PRs (37 open vs. 13 closed) indicates a rapid influx of new community contributions currently undergoing review.

## 2. Releases
There are no new official releases for Hermes Agent today. However, given the volume of critical fixes (P1) being merged today, a patch or minor version release appears imminent.

## 3. Project Progress
Maintainers and contributors merged 13 PRs over the past 24 hours, focusing heavily on critical transport errors, platform gateways, and security. Key advancements include:
*   **Transport & API Compatibility:** Fixed a deterministic retry loop that burned user credits by stripping Hermes-internal scaffolding keys before they reach strict OpenAI-compatible providers ([PR #31456](https://github.com/NousResearch/hermes-agent/pull/31456)). Resolved xAI grok-4-1 `reasoningEffort` HTTP 400 errors ([PR #23109](https://github.com/NousResearch/hermes-agent/pull/23109), [PR #23106](https://github.com/NousResearch/hermes-agent/pull/23106)).
*   **Platform Gateways:** Fixed Matrix E2EE dependency issues during fresh installs and stopped disabled plugins (like Discord) from auto-enabling ([PR #31688](https://github.com/NousResearch/hermes-agent/pull/31688)). Resolved a severe gateway crash triggered by transient Telegram `TimedOut` exceptions ([PR #31445](https://github.com/NousResearch/hermes-agent/pull/31445)). 
*   **Security & CLI:** Added an on-demand supply-chain audit tool via OSV.dev ([PR #31460](https://github.com/NousResearch/hermes-agent/pull/31460)). Prevented insidious credit burning by hard-aborting the agent loop on HTTP 402 (insufficient credits) after pool rotation fails ([PR #31443](https://github.com/NousResearch/hermes-agent/pull/31443)).

## 4. Community Hot Topics
The community is highly engaged in discussing advanced memory management and multi-agent orchestration, while heavily troubleshooting platform adapters.
*   **External Memory Architecture:** The most active discussion revolves around [Issue #6323](https://github.com/NousResearch/hermes-agent/issues/6323) (21 comments, 26 👍), proposing `mempalace` for structured external memory to enable cross-session continuity. Tied to this is [Issue #31584](https://github.com/NousResearch/hermes-agent/issues/31584) (1 comment), discussing treating memory context as background context rather than authoritative user content to prevent injection/pollution.
*   **Multi-Agent Orchestration:** [Issue #31392](https://github.com/NousResearch/hermes-agent/issues/31392) (5 comments) proposes an RFC for agent-native task relay with auto-forking subagents and async human approval gates, signaling strong user demand for complex, autonomous workflows.
*   **Telegram Topic Hijacking:** Users are actively discussing and upvoting severe Telegram gateway bugs, specifically [Issue #20470](https://github.com/NousResearch/hermes-agent/issues/20470) (9 comments) regarding compression-induced session splits, and [Issue #31086](https://github.com/NousResearch/hermes-agent/issues/31086) (4 comments) where new DM topics are hijacked into previous lanes.

## 5. Bugs & Stability
Several high-severity bugs affecting gateway stability and provider connectivity were reported today, though maintainers have been remarkably fast at pushing fix PRs for older ones.
*   **P1 - Gateway Crashes & Corruption:**
    *   *Telegram Gateway:* Unhandled `TimedOut` exceptions crash the entire gateway, bringing down all agent profiles. Maintainer fix merged in [PR #31445](https://github.com/NousResearch/hermes-agent/pull/31445) (Closes [Issue #31110](https://github.com/NousResearch/hermes-agent/issues/31110)).
    *   *Kanban Database:* Severe SQLite database corruption under rapid task creation and concurrent reclaim-SIGKILL operations ([Issue #31502](https://github.com/NousResearch/hermes-agent/issues/31502), [Issue #31618](https://github.com/NousResearch/hermes-agent/issues/31618)). No definitive merged fix yet.
*   **P1 - Provider/Transport Errors:** 
    *   OpenAI Codex / GPT-5.5 calls hanging silently until the 300s stale timeout ([Issue #21444](https://github.com/NousResearch/hermes-agent/issues/21444)).
    *   Internal bookkeeping fields leaking to strict providers causing 400 errors. Fix merged via [PR #31456](https://github.com/NousResearch/hermes-agent/pull/31456) (Closes [Issue #30959](https://github.com/NousResearch/hermes-agent/issues/30959)).
*   **P2 - Plugin Loop:** Discord/Gateway plugins ignore user config and force-enable on startup. Fix merged in [PR #31688](https://github.com/NousResearch/hermes-agent/pull/31688) (Closes [Issue #31109](https://github.com/NousResearch/hermes-agent/issues/31109)).

## 6. Feature Requests & Roadmap Signals
Feature requests today heavily skew toward tooling flexibility, model compatibility, and self-hosted infra stability.
*   **Expanded Web Search:** Users want native web tools to support Gemini with Google-grounding and OpenRouter web research ([Issue #31621](https://github.com/NousResearch/hermes-agent/issues/31621)).
*   **Content-bound Tool Extraction:** A request to handle models that emit tool calls as text/XML instead of structured JSON, stopping the agent loop from breaking on open-weight LLMs ([Issue #29115](https://github.com/NousResearch/hermes-agent/issues/29115)).
*   **Batch Processing Environments:** Request to allow sharing pre-existing Docker instances for batch prompts rather than spinning up new environments ([Issue #31308](https://github.com/NousResearch/hermes-agent/issues/31308)).
*   **Predictions for Next Version:** Based on the volume of merged PRs today, the next release will likely focus heavily on Telegram/Multimedia gateway stabilization, security hardening (dashboard access, webhook redactions), and fixing strict API provider compatibility (xAI, OpenAI Codex).

## 7. User Feedback Summary
Users are actively pushing Hermes Agent to its limits in production environments, especially with multi-platform routing (Telegram, Discord, Matrix, DingTalk, Signal) and self-hosted LLM configurations.
*   **Pain Points:** The transition to strict APIs (OpenAI Codex, xAI) is causing friction with silent hangs and HTTP 400 loops. Docker users are frustrated by lingering permissions issues ([Issue #12696](https://github.com/NousResearch/hermes-agent/issues/12696)), and macOS users are hitting OS-level file descriptor limits (256 fd) during standard gateway operations ([Issue #30230](https://github.com/NousResearch/hermes-agent/issues/30230)).
*   **Satisfaction/Use Cases:** The overall sentiment remains highly positive, with praise for the software's flexibility. Users are successfully leveraging Hermes for complex, multi-agent task delegation and utilizing it as a unified gateway across wildly different chat platforms. The fast turnaround time on P1 bugs (like the xAI and Telegram gateway fixes) is a strong point of maintainer responsiveness.

## 8. Backlog Watch
*   **Kanban Stability:** The recurring SQLite corruption issues ([Issue #31502](https://github.com/NousResearch/hermes-agent/issues/31502)) severely impact users using Hermes for task management. This requires an architectural rethink of DB write-concurrency and PRs addressing this should be prioritized.
*   **macOS File Descriptor Limit:** [Issue #30230](https://github.com/NousResearch/hermes-agent/issues/30230) is a fundamental blocker for power users running multiple MCP servers on macOS. It needs a patch to handle or warn about the 256 fd soft limit.
*   **Vision Tool Routing:** [Issue #31179](https://github.com/NousResearch/hermes-agent/issues/31179) (routing images to the main model instead of the configured `auxiliary.vision` model) remains open and breaks multimodal workflows for users utilizing non-vision-capable primary models (like DeepSeek).

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-25

## 1. Today's Overview
PicoClaw demonstrates sustained, healthy momentum as a versatile, open-source AI agent framework, characterized by active multi-national community contributions and a focus on runtime stability. Over the past 24 hours, the project saw a high ratio of open Pull Requests (8 open vs. 2 closed), indicating an active feature expansion phase where the community is driving significant new functionality. Key focus areas today include inter-agent collaboration, localized deployment improvements (Android, edge devices), and internationalization (Traditional Chinese). Meanwhile, the maintainers continue to push regular automated nightly builds while addressing core messaging and execution bugs.

## 2. Releases
* **[v0.2.9-nightly.20260524.d499cbec](https://github.com/sipeed/picoclaw/releases/tag/nightly)**
  * **Type:** Nightly Build
  * **Notes:** This is an automated build cut directly from the `main` branch. It includes all recent merged features and fixes but should be expected to be potentially unstable. No explicit breaking changes or migration notes were provided in this automated cut, but users upgrading from stable v0.2.8 should test thoroughly, especially around the new agent messaging bus.

## 3. Project Progress
Two PRs were merged or closed today, alongside several actively maturing PRs:
* **Closed PR [#2938](https://github.com/sipeed/picoclaw/pull/2938):** Fixed a silent failure regression where `CronTool.ExecuteJob()` was omitting the `"action": "run"` argument, causing all cron command jobs to immediately fail.
* **Closed PR [#2759](https://github.com/sipeed/picoclaw/pull/2759):** Scoped retrieval tools (`short_grep`, `short_expand`) to the active tool session by default to prevent cross-session data leakage and guessed message ID exploits.
* **Major Advancements in Open PRs:**
  * **Agent Collaboration:** [PR #2937](https://github.com/sipeed/picoclaw/pull/2937) introduces a first-class internal Agent Collaboration Bus with durable mailboxes and isolated session histories.
  * **Infrastructure Reliability:** [PR #2906](https://github.com/sipeed/picoclaw/pull/2906) and [PR #2904](https://github.com/sipeed/picoclaw/pull/2904) significantly harden the runtime by fixing message bus backpressure handling and eliminating detached goroutine panics during agent loop reloads.

## 4. Community Hot Topics
* **[Issue #28](https://github.com/sipeed/picoclaw/issues/28) (👍 2, 20 comments):** A highly trafficked feature request asking for a streamlined way to connect PicoClaw to **LM Studio**, particularly for Android deployments. This highlights a strong user desire for plug-and-play local AI models.
* **[Issue #1042](https://github.com/sipeed/picoclaw/issues/1042) (👍 2, 13 comments):** A heavily discussed bug regarding the `guardCommand` method's overly aggressive safety regex. Users are frustrated that benign network requests (like `curl wttr.in`) are falsely flagged as path-traversal attacks.
* **[Issue #2837](https://github.com/sipeed/picoclaw/issues/2837) (2 comments):** A deep-dive feature request for supporting allow/deny/glob tool policies in `AGENT.md` frontmatter. This signals advanced users are deploying complex multi-agent setups and urgently need to define strict tool-access boundaries per agent to manage token context blow-up.

## 5. Bugs & Stability
* **[High] Silent Cron Job Failures:** ([PR #2938](https://github.com/sipeed/picoclaw/pull/2938)) A regression causing all cron-based command jobs to fail silently. **Status:** Fixed and PR closed.
* **[Medium] `exec` Tool False Positives:** ([Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)) The safety guard regex incorrectly interprets URL parameters in commands as malicious directory traversals (e.g., blocking `curl` commands). **Status:** Open, needs maintainer attention to refine the regex logic.
* **[Medium] Bus Backpressure & Reload Panics:** ([PR #2906](https://github.com/sipeed/picoclaw/pull/2906), [PR #2904](https://github.com/sipeed/picoclaw/pull/2904)) Unbounded blocking on saturated queues and detached goroutine leaks during config reloads. **Status:** Fixes proposed in open PRs, currently under review.
* **[Low] UI Chat Artifacts:** ([Issue #2839](https://github.com/sipeed/picoclaw/issues/2839)) Final follow-up replies overwrite "Working..." placeholder messages improperly. **Status:** Closed/Fixed.

## 6. Feature Requests & Roadmap Signals
* **Local Model Integration:** LM Studio easy connect ([Issue #28](https://github.com/sipeed/picoclaw/issues/28)) remains highly requested. Given the push for local deployment docs, local LLM provider support will likely be a future milestone.
* **Multi-Agent Tool Policies:** Allow/deny lists in frontmatter ([Issue #2837](https://github.com/sipeed/picoclaw/issues/2837)) aligns perfectly with the newly proposed Agent Collaboration Bus ([PR #2937](https://github.com/sipeed/picoclaw/pull/2937)). Expect this to be a core feature in v0.3.0.
* **Edge Hardware Compatibility:** [PR #2936](https://github.com/sipeed/picoclaw/pull/2936) introduces dynamic filtering for skills whose binaries are missing from the `$PATH`. This is a direct win for deploying PicoClaw on low-power ARM devices (like Raspberry Pi) where certain heavy tools (e.g., headless browsers) cannot be installed.
* **Expanded Platform Channels:** Support for multi-wechat accounts ([PR #2883](https://github.com/sipeed/picoclaw/pull/2883)) and native WhatsApp mode ([PR #2934](https://github.com/sipeed/picoclaw/pull/2934)) show strong growth in mobile/messaging platform integrations.

## 7. User Feedback Summary
* **Pain Point - Safety Guards:** Users appreciate PicoClaw's focus on security, but the current implementation of the `restrict_to_workspace` guard is overly restrictive, breaking common shell utilities.
* **Use Case - Mobile/Edge AI:** The documentation contributions for Android Termux ([PR #2902](https://github.com/sipeed/picoclaw/pull/2902)) and requests for LM Studio connectivity indicate a highly active user base trying to run personal AI assistants directly on phones and cheap ARM single-board computers.
* **Satisfaction:** The community is actively developing sophisticated setups (multi-agent, multi-channel). The engagement around i18n ([PR #2935](https://github.com/sipeed/picoclaw/pull/2935)) and messaging channels shows strong international and cross-platform adoption.

## 8. Backlog Watch
* **[Issue #28](https://github.com/sipeed/picoclaw/issues/28):** Open since Feb 2026. With 20 comments and 2 reactions, this is a highly requested feature that needs an official maintainer roadmap response.
* **[Issue #1042](https://github.com/sipeed/picoclaw/issues/1042):** Open since March 2026. The `exec` tool guard bug is a frequent annoyance for users running external scripts/APIs. It requires architectural triage.
* **[Issue #2839](https://github.com/sipeed/picoclaw/issues/2839):** Open since early May 2026. Affects the visual reliability of the steering-chain UI. Needs confirmation from front-end maintainers that the latest fix resolves it entirely.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-25

## 1. Today's Overview
NanoClaw is experiencing a moderate level of community-driven maintenance activity, with one bug report and three pull requests updated over the past 24 hours. The absence of new releases indicates that the project is currently in a development or stabilization phase rather than an active deployment cycle. Contributors are focused on enhancing administrative tooling, refining permission inheritance, and addressing edge cases in command routing. While the volume of merges is low (only one closed PR), the open submissions suggest steady progress toward hardening the platform's operational capabilities.

## 2. Releases
No new releases were recorded today. The project's latest release cycle remains pending.

## 3. Project Progress
The primary advancement today was the closure of PR [#2604](https://github.com/qwibitai/nanoclaw/pull/2604), which introduced a `GET /admin/agent-activity` batch endpoint. Although closed (likely superseded or rejected in favor of another approach), the underlying goal—enabling the admin dashboard to display "Last active" timestamps without N+1 query overhead—signals active work on admin observability features. Two other PRs remain under review:
- **PR [#2605](https://github.com/qwibitai/nanoclaw/pull/2605)**: Implements permission inheritance for child agents via OneCLI, a structural improvement for multi-agent security boundaries.
- **PR [#2346](https://github.com/qwibitai/nanoclaw/pull/2346)**: Fixes a formatter issue where unknown slash commands were miscategorized, causing silent message drops. This PR has been open since May 8, suggesting it may need additional review.

## 4. Community Hot Topics
The most active items by recent engagement are:
- **Issue [#2606](https://github.com/qwibitai/nanoclaw/issues/2606)** (0 comments, 0 reactions, but freshly opened): Reports that `engage_mode='always'` silently drops all messages due to an unhandled case in `evaluateEngage()`. This highlights a gap between configuration validation and runtime handling.
- **PR [#2346](https://github.com/qwibitai/nanoclaw/pull/2346)** (open since May 8): The extended review period suggests either technical disagreement on the fix approach or maintainer bandwidth constraints. The issue it addresses—silent message loss from unrecognized slash commands—directly impacts user trust in message delivery guarantees.

**Underlying needs analysis**: Both active topics center on silent failures where the system accepts input but discards it without feedback. This pattern indicates a community priority around debuggability and transparent agent behavior.

## 5. Bugs & Stability
| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **High** | [Issue #2606](https://github.com/qwibitai/nanoclaw/issues/2606) | `engage_mode='always'` causes all messages to be silently dropped with `no_agent_engaged` reason | No fix PR yet |
| **Medium** | [PR #2346](https://github.com/qwibitai/nanoclaw/pull/2346) | Unknown slash commands miscategorized as `passthrough`, causing silent response drops | Fix PR open, pending review |

The silent failure pattern is particularly concerning as it provides no user feedback, making debugging difficult. Issue #2606 is ranked higher because it affects a broader range of configured wirings and involves a complete message drop rather than an edge case with unrecognized commands.

## 6. Feature Requests & Roadmap Signals
- **Admin batch APIs** ([PR #2604](https://github.com/qwibitai/nanoclaw/pull/2604)): The attempt to add a batch agent-activity endpoint signals upcoming admin dashboard enhancements with better scalability patterns.
- **Permission inheritance** ([PR #2605](https://github.com/qwibitai/nanoclaw/pull/2605)): The ability for agents to inherit parent permissions via OneCLI suggests a roadmap direction toward more sophisticated multi-agent hierarchies and delegation models.
- **Predicted near-term focus**: Based on today's activity, the next version will likely prioritize router robustness (fixing engage mode handling), admin observability tooling, and permission architecture refinements.

## 7. User Feedback Summary
Users are encountering **silent message loss** as a primary pain point, eroding confidence in message delivery reliability. The `engage_mode='always'` bug ([#2606](https://github.com/qwibitai/nanoclaw/issues/2606)) represents a case where configuration appears valid but functionality is completely broken, a particularly frustrating experience. The admin dashboard use case ([#2604](https://github.com/qwibitai/nanoclaw/pull/2604)) reveals operators need better visibility into agent activity patterns at scale. Overall, satisfaction appears tempered by these reliability gaps, though the community is actively contributing fixes rather than just reporting problems.

## 8. Backlog Watch
- **[PR #2346](https://github.com/qwibitai/nanoclaw/pull/2346)** (open since 2026-05-08, 17 days): This formatter fix addresses a real silent-drop bug but has lingered without merge or closure. Maintainer attention needed to either approve, request changes, or close with explanation.
- **[Issue #2606](https://github.com/qwibitai/nanoclaw/issues/2606)** (0 comments): Freshly opened but with no maintainer response yet. Given its high-severity impact (complete message loss for affected configurations), early triage would help prevent user frustration.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-05-25

## 1. Today's Overview
The NullClaw project is currently experiencing a low-volume, steady-state development period with no new releases issued today. Activity over the past 24 hours consisted of exactly one merged Pull Request and ongoing discussions on a single active Issue. The merged PR represents a significant architectural milestone, completely removing dependency on `curl` subprocesses in favor of native HTTP wrappers. Overall project health appears stable, with maintainers successfully closing out long-term technical debt while the community engages with specific, feature-centric requests.

## 2. Releases
No new releases were recorded today. 

## 3. Project Progress
A major refactoring effort was successfully merged today, signaling progress in optimizing the agent's underlying infrastructure:
*   **PR [#881](https://github.com/nullclaw/nullclaw/pull/881) [CLOSED/MERGED]: refactor(http): remove runtime curl subprocesses**
    *   *Author:* ncode
    *   *Advancement:* This PR successfully replaces all `curl`-backed Zig HTTP helpers with native `std.http` wrappers across the entire runtime stack (providers, channels, gateway, tools, memory API, updates, voice, and SSE paths). 
    *   *Impact:* This is a substantial architectural cleanup that will likely reduce runtime overhead, eliminate subprocess spawning latency, and improve the overall stability and security of the AI agent's external communications. `curl` has been appropriately relegated to Docker build tooling only.

## 4. Community Hot Topics
*   **Issue [#919](https://github.com/nullclaw/nullclaw/issues/919) [OPEN]: Feature: Allow disabling automatic memory recall (FTS5) per-message**
    *   *Author:* weissfl
    *   *Activity:* 1 comment, updated recently (2026-05-24).
    *   *Analysis:* The underlying need here is **user control over context window management and compute overhead**. Currently, NullClaw forces a Full-Text Search (FTS5) combined with BM25 recall on *every single incoming message*. The underlying architecture utilizes hardcoded parameters (`DEFAULT_RECALL_LIMIT = 5`, `MAX_CONTEXT_BYTES = 4000`, etc.). The community is pointing out that "one-size-fits-all" context injection is inefficient; power users and developers want to programmatically disable memory retrieval for specific conversational threads to save tokens, reduce hallucination, or speed up response times.

## 5. Bugs & Stability
No new bugs, crashes, or regressions were reported in the last 24 hours. Today's merged PR [#881](https://github.com/nullclaw/nullclaw/pull/881) inherently boosts stability by replacing external `curl` subprocess calls—which are susceptible to environment-specific failures and escaping issues—with robust, native standard library wrappers.

## 6. Feature Requests & Roadmap Signals
Based on open issues, the following feature request is a strong candidate for inclusion in an upcoming release or minor version:
*   **Granular Memory/Recall Control:** Issue [#919](https://github.com/nullclaw/nullclaw/issues/919) highlights a clear demand for a toggle or parameter at the message level to bypass `enrichMessageWithRuntime()`. Implementing this would likely involve exposing a simple boolean flag in the chat API payload, allowing developers to conditionally skip the FTS5 pipeline. Given the relatively scoped nature of the request, this could be merged into the `main` branch in the near term.

## 7. User Feedback Summary
*   **Pain Point:** Lack of flexibility in automated context enrichment. Users are experiencing token bloat or unnecessary computational delays because the system aggressively fetches memory contexts (up to 4,000 bytes) even when a conversation is trivial or strictly real-time.
*   **Use Case:** Developers building highly specialized AI agents using NullClaw require strict control over the prompt payload. They prefer manual, on-demand memory retrieval rather than the current automatic, hardcoded injection on every message.
*   **Sentiment:** Objective and solution-oriented. The user feedback is highly technical, providing exact variable names and limits (`SCOPED_RECALL_CANDIDATE_LIMIT = 64`), indicating a mature, developer-heavy user base that enjoys working within NullClaw's codebase.

## 8. Backlog Watch
*   **Maintainer Attention Needed on Memory System:** Issue [#919](https://github.com/nullclaw/nullclaw/issues/919) was created on 2026-05-18 and has been active for a week with only 1 comment. As memory retrieval forms the core of NullClaw's "personal assistant" capabilities, a maintainer decision (e.g., "planned," "accepting PRs," or "won't do") is needed to guide contributors.
*   *(Note: The closed PR [#881](https://github.com/nullclaw/nullclaw/pull/881) had an undefined comment count upon closure. If it was merged without final review logs or CI reports being attached, maintainers should ensure the corresponding documentation for the HTTP migration is updated to reflect the `Curl*` to `Http*` renaming).*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) Project Digest — 2026-05-25

## 1. Today's Overview
The IronClaw project is currently experiencing exceptionally high development activity, driven primarily by the core team's aggressive push on the "Reborn" architecture overhaul and a massive 13-PR "attested-signing" substrate stack. With 50 pull requests updated (31 open, 19 closed/merged) and 28 issues updated in the last 24 hours, the repository's momentum is strongly focused on horizontal expansion and foundational security layers rather than incremental patches. The primary engineering focus is bifurcated between wiring secure multi-chain cryptographic signing and refactoring legacy monolith components into modular, capability-based Reborn crates. This intense architectural iteration indicates that the project is likely in the late stages of a massive development sprint in preparation for a major milestone (such as a WebUI Beta or a new mainnet-ready release), though no official releases were cut today.

## 2. Releases
No new releases were published today. The latest published version on `crates.io` remains `0.24.0` (released Mar 31, 2026), despite upstream Git tags existing for versions up to `0.27.0`. 

## 3. Project Progress
Today's progress was defined by the rapid merging of foundational dependency bumps and the opening of several XL-sized architectural PRs. 

*   **Dependency Upgrades Consolidated:** The core team merged major dependency updates, clearing the backlog of automated bots. This included merging a massive 46-update Rust crate bump ([PR #4003](https://github.com/nearai/ironclaw/pull/4003), superseding [#3764](https://github.com/nearai/ironclaw/pull/3764)), the Tokio ecosystem bump to `1.52.3` ([PR #4001](https://github.com/nearai/ironclaw/pull/4001), superseding [#3360](https://github.com/nearai/ironclaw/pull/3360)), and GitHub Actions updates ([PR #4002](https://github.com/nearai/ironclaw/pull/4002), superseding [#3456](https://github.com/nearai/ironclaw/pull/3456)).
*   **Reborn Agent Loop & Tooling:** Closed [PR #3925](https://github.com/nearai/ironclaw/pull/3925) which introduced deterministic trace parity tests for GitHub v2 capabilities, and merged [PR #3999](https://github.com/nearai/ironclaw/pull/3999) to allow multiline provider tool arguments (vital for passing complex `SKILL.md` contents).
*   **Attested Signing & WebUI Stack:** The core contributor (`zmanian`) pushed the 10-to-13 PR attested-signing stack forward. Key advancements include the WalletConnect v2 backend ([PR #3992](https://github.com/nearai/ironclaw/pull/3992)), the NEAR browser-wallet redirect provider ([PR #3993](https://github.com/nearai/ironclaw/pull/3993)), and the composition-layer glue via the new `ironclaw_attested_runtime` crate ([PR #3994](https://github.com/nearai/ironclaw/pull/3994)).
*   **Rich Capability Streaming:** [PR #4004](https://github.com/nearai/ironclaw/pull/4004) was opened to implement rich capability/tool activity as a projection-owned lifecycle model for WebChat v2 Server-Sent Events (SSE).
*   **Crate Modularization:** [PR #4006](https://github.com/nearai/ironclaw/pull/4006) was opened to treat invalid tool inputs as recoverable errors rather than run-aborts, improving agent loop resilience.

## 4. Community Hot Topics
*   **Crates.io Publishing Bottleneck ([Issue #3259](https://github.com/nearai/ironclaw/issues/3259)):** With 8 comments, this is the most actively discussed issue. Downstream consumers are currently pinned to version `0.24.0` on `crates.io` due to WASM runtime CVEs in older dependencies. Users are eagerly awaiting the publish of versions `0.25.0` through `0.27.0` to resolve security vulnerabilities in their own stacks.
*   **Hardware & Non-Custodial Wallet Support ([Issue #3025](https://github.com/nearai/ironclaw/issues/3025), [#1739](https://github.com/nearai/ironclaw/issues/1739)):** The community is actively discussing secure transaction flows. Users are expressing a strong need to integrate MetaMask and Trezor hardware wallets, moving away from closed-source hot wallets. This aligns directly with the core team's current work on the WalletConnect v2 async approval system.
*   **Architecture Standardization ([Issue #3954](https://github.com/nearai/ironclaw/issues/3954), [#3953](https://github.com/nearai/ironclaw/issues/3953)):** Contributors are requesting cleaner project standards, including renaming the `CLAUDE.md` file to a framework-agnostic semantic title, and proposing canonical contract-first API definitions (OpenAPI/AsyncAPI) for the Gateway and WebUI.

## 5. Bugs & Stability
*   **Nightly E2E Failure ([Issue #3447](https://github.com/nearai/ironclaw/issues/3447)):** The automated `Nightly E2E` GitHub Actions workflow failed on its latest run. No fix PRs are noted in today's digest, representing a slight instability in the current `main` or `reborn-integration` branches.
*   **Composition Root Dependency Gap ([Issue #3962](https://github.com/nearai/ironclaw/issues/3962)):** Identified by `zmanian` during hook framework production activation. The standalone composition root fails to wire hooked-prompt dependencies (specifically the gate-ref factory) when `HOOKS_ENABLED` is active, causing runtime failures in tests driving the real composition path. 
*   **Oversized Source Files ([Issue #3988](https://github.com/nearai/ironclaw/issues/3988)):** The `capability_port.rs` file has breached the 3,000-line architecture rule threshold. While not a runtime bug, this is a maintainability hazard that the team is actively addressing.
*   **Security Leakage Surface ([Issue #3917](https://github.com/nearai/ironclaw/issues/3917)):** A security review is requested for `RuntimeCredentialTarget::PathPlaceholder`, a primitive that places secrets into URL path segments—a pattern deemed strictly worse than Header or Query injection, risking unintended leakage.

## 6. Feature Requests & Roadmap Signals
Today's issues and open PRs provide a clear roadmap of the project's next major iteration:
*   **Secure Financial Execution Layer ([Issue #1712](https://github.com/nearai/ironclaw/issues/1712)):** High on the roadmap is the creation of a secure architecture for custody, signing, approvals, and cross-app crypto actions, laying the groundwork for the agent to safely execute financial actions.
*   **Subagent Spawning ([Issue #3798](https://github.com/nearai/ironclaw/issues/3798)):** A proposed design to allow the Reborn agent loop to spawn and manage subagents natively, a critical feature for complex, multi-step autonomous task execution.
*   **GSuite First-Party Extensions:** A cluster of issues ([#3967](https://github.com/nearai/ironclaw/issues/3967), [#3968](https://github.com/nearai/ironclaw/issues/3968), [#3969](https://github.com/nearai/ironclaw/issues/3969)) was opened to wire Google Calendar and Gmail into IronClaw as first-party extensions, complete with OAuth helpers and live harness testing.
*   **Canonical API Specs ([Issue #3953](https://github.com/nearai/ironclaw/issues/3953)):** A proposal to introduce contract-first OpenAPI/AsyncAPI definitions for Gateway and WebUI, suggesting the project is preparing for wider third-party integrations.

## 7. User Feedback Summary
Users and downstream developers are showing high engagement but face friction due to the rapid architectural shifts:
*   **Friction with SDK Versions:** Downstream developers are frustrated by the lag between GitHub tags and `crates.io` releases, actively commenting on [Issue #3259](https://github.com/nearai/ironclaw/issues/3259) to request publishes to patch WASM CVEs.
*   **Demand for Decentralized Security:** There is strong appreciation for the project's security posture, but users explicitly want to move away from hot wallets and closed-source connectors ([Issue #3025](https://github.com/nearai/ironclaw/issues/3025)), leaning heavily on the team to deliver WalletConnect and hardware wallet integrations.
*   **Project Navigation:** New contributors find the coupling of the development guide to `CLAUDE.md` confusing and are advocating for more generalized, contract-first documentation standards ([Issue #3954](https://github.com/nearai/ironclaw/issues/3954)).

## 8. Backlog Watch
*   **Crates.io Publish ([Issue #3259](https://github.com/nearai/ironclaw/issues/3259)):** Needs immediate maintainer attention. The gap between Git tags and the crate registry is currently blocking downstream security patches.
*   **WASM Dependency Bumps ([PR #3247](https://github.com/nearai/ironclaw/pull/3247)):** An open Dependabot PR attempting to bump `wasmtime` and related WASM packages. It has been open since May 5 and appears stalled, potentially blocking the aforementioned `crates.io` release.
*   **WebUI Beta P0 Dispatch Authority ([Issue #3608](https://github.com/nearai/ironclaw/issues/3608)):** A P0 issue related to the Reborn WebUI Beta that currently has zero comments. It highlights a critical gap where callers can construct dispatch requests without opaque authority proofs. This needs priority review before the WebUI Beta ships.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-25

## 1. Today's Overview
LobsterAI experienced zero new issues and no new releases today, indicating a quiet period for inbound user requests and feature development. However, the project saw significant maintenance activity, with 14 pull requests officially closed. These closures represent a massive batch of bug fixes and stability improvements, primarily addressing long-standing issues in the Cowork engine, IM integrations, and database handling. The repository is currently in a stabilization and code-hardening phase, heavily focused on refining existing features rather than shipping new ones.

## 2. Releases
No new releases were recorded today.

## 3. Project Progress
A total of 14 pull requests were closed/merged today, reflecting a concerted effort by maintainers to clear the backlog of critical fixes and UI improvements:
*   **UX & Client Improvements:** 
    *   [PR #1590](https://github.com/netease-youdao/LobsterAI/pull/1590): Implemented a client-side message queue, enabling users to send messages continuously during AI streaming without interruption.
    *   [PR #1585](https://github.com/netease-youdao/LobsterAI/pull/1585): Resolved a frustrating UI bug where pressing `Enter` (including during IME input) inside the Settings page would unexpectedly save and close the form.
    *   [PR #1594](https://github.com/netease-youdao/LobsterAI/pull/1594): Upgraded the Cowork search functionality to query both message content and across all agents, replacing the previous title-only, single-agent limitation.
*   **Core Engine & Data Handling:**
    *   [PR #1602](https://github.com/netease-youdao/LobsterAI/pull/1602): Fixed a race condition in `addMessage` that caused duplicate message sequence numbers during concurrent writes.
    *   [PR #1603](https://github.com/netease-youdao/LobsterAI/pull/1603): Cleaned up `continueSession` error handling, removing duplicate error toasts and fixing silent exceptions in `startSession`/`continueSession`.
    *   [PR #1595](https://github.com/netease-youdao/LobsterAI/pull/1595): Improved SQLite resilience by ensuring the legacy memory migration flag is only written upon a successful transaction.
*   **API & Streaming:**
    *   [PR #1607](https://github.com/netease-youdao/LobsterAI/pull/1607): Added SSE line buffering for Anthropic and Gemini streams, fixing a bug where chunked network packets could cause JSON parsing failures and silent content drops.

## 4. Community Hot Topics
There is minimal measurable community discussion happening *today* (0 issues opened, 0 comments on closed PRs). However, the closed PRs highlight what the community and internal developers have been focused on:
*   **Enhanced Chat UX ([PR #1590](https://github.com/netease-youdao/LobsterAI/pull/1590)):** The ability to queue messages while the AI is still replying meets a core need for power users who interact with AI iteratively.
*   **Robust Search ([PR #1594](https://github.com/netease-youdao/LobsterAI/pull/1594)):** Expanding search to cover full message content across all agents addresses a fundamental limitation in retrieving conversational context.

## 5. Bugs & Stability
Today's PR merges represent a massive sweep of high-to-medium severity bugs. Ranked by severity:

1.  **Critical / Gateway Crash:** [PR #1593](https://github.com/netease-youdao/LobsterAI/pull/1593) - Removed an unrecognized `skipMissedJobs` field from the OpenClaw cron config. This typo/config drift was causing the OpenClaw gateway to crash on boot with exit code 1 across local and production environments.
2.  **High / Session State Anomalies:** [PR #1601](https://github.com/netease-youdao/LobsterAI/pull/1601) - Fixed a bug where Websocket reconnections cleared the `stoppedSessions` cooldown state, causing intentionally stopped sessions to be accidentally resurrected by late IM events.
3.  **High / Concurrency & Logic Errors:** [PR #1602](https://github.com/netease-youdao/LobsterAI/pull/1602) (Sequence number race condition) and [PR #1598](https://github.com/netease-youdao/LobsterAI/pull/1598) (Cowork execution mode hardcoded to 'local', ignoring user settings).
4.  **Medium / Streaming API Interruptions:** [PR #1607](https://github.com/netease-youdao/LobsterAI/pull/1607) - Fixed missing content in Anthropic/Gemini streaming responses due to fragmented network chunks.
5.  **Medium / UI/UX Friction:** [PR #1585](https://github.com/netease-youdao/LobsterAI/pull/1585) (Settings closing on Enter), [PR #1600](https://github.com/netease-youdao/LobsterAI/pull/1600) (False "unsaved changes" prompt in scheduled tasks), and [PR #1588](https://github.com/netease-youdao/LobsterAI/pull/1588) (Incorrect "IM not configured" warning in scheduled tasks).
6.  **Low / Security:** [PR #1606](https://github.com/netease-youdao/LobsterAI/pull/1606) - NetEase Bee IM secrets are no longer written in plaintext to `openclaw.json`, replaced by environment variable injection.

## 6. Feature Requests & Roadmap Signals
*   Based on [PR #1590](https://github.com/netease-youdao/LobsterAI/pull/1590), LobsterAI is heavily investing in making its "Cowork" (multi-turn/multi-agent) experience more seamless. 
*   With the recent stabilization of the OpenClaw gateway and IM integrations (Telegram, Discord, POPO, NetEase Bee), the roadmap appears focused on positioning LobsterAI as a robust, enterprise-grade AI router hub capable of maintaining long-running, stable sessions across various messaging platforms.
*   Given the sheer volume of stabilization PRs merged today, it is highly probable that a minor version release (e.g., v1.x.x) is imminent to package these critical bug fixes.

## 7. User Feedback Summary
While direct user comments are absent in today data pull, the code changes reflect underlying user pain points:
*   **Data Loss Anxiety:** Users previously experienced lost context due to streaming drops ([PR #1607](https://github.com/netease-youdao/LobsterAI/pull/1607)) or misunderstood AI states because of duplicate messages ([PR #1603](https://github.com/netease-youdao/LobsterAI/pull/1603)). 
*   **Workflow Interruption:** The fixes for false "unsaved changes" warnings and accidental settings closures show that users were experiencing friction in standard administrative workflows.
*   **Overall Satisfaction:** The proactive nature of these fixes (especially concurrency and state management) indicates a mature project prioritizing reliability over rapid feature bloat, which typically yields higher enterprise user satisfaction.

## 8. Backlog Watch
*   **PR Staleness:** All 14 closed PRs carried the `[stale]` tag and were created roughly 45 days ago (around 2026-04-09) before being closed en masse on 2026-05-24. This suggests maintainers may have been away or were waiting for a specific review window. 
*   Maintainers should ensure that PRs like [PR #1606](https://github.com/netease-youdao/LobsterAI/pull/1606) (Security: IM secret handling) are fast-tracked and not left to sit in the stale queue, as they represent active security hardening.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-05-25

## 1. Today's Overview
Moltis demonstrated a highly active and exceptionally healthy maintenance cycle over the past 24 hours, resolving all 8 open issues and merging all 10 open pull requests. The development focus has been heavily directed toward fortifying the platform's multi-agent architecture, improving user privacy, and refining the web UI. A significant architectural shift was merged today that establishes agents as distinct capability boundaries, signaling a major step forward in the project's roadmap. With zero new releases cut today, the team is likely packaging these substantial changes into an upcoming versioned milestone.

## 2. Releases
No new releases were recorded today. 

## 3. Project Progress
The project saw massive forward momentum, driven almost entirely by core contributor `penso`, merging 10 PRs that significantly expand and stabilize the system:
* **Agent Architecture Overhaul:** [PR #1049](https://github.com/moltis-org/moltis/pull/1049) introduced a major structural change, making agents the core capability boundary by isolating MCP servers, sandbox policies, and skills per agent preset.
* **Agent Resource Management:** [PR #1066](https://github.com/moltis-org/moltis/pull/1066) implemented per-agent runtime limits (timeouts and max iterations) for direct chats and spawned sub-agents.
* **Security & Privacy:** [PR #1063](https://github.com/moltis-org/moltis/pull/1063) secured stdio MCP environment variables using `Secret<String>`, preventing sensitive env vars from leaking to the LLM.
* **Provider & Sandbox Improvements:** [PR #1061](https://github.com/moltis-org/moltis/pull/1061) added URL validation for OpenAI-compatible endpoints, while [PR #1065](https://github.com/moltis-org/moltis/pull/1065) quieted verbose Docker build logs during sandbox pre-builds.
* **UI Fixes:** Several UI fixes were merged, including fixing long model names in the picker ([PR #1060](https://github.com/moltis-org/moltis/pull/1060)), preventing chat toolbar overflow ([PR #1062](https://github.com/moltis-org/moltis/pull/1062)), and hiding disabled external agents from the chat picker ([PR #1059](https://github.com/moltis-org/moltis/pull/1059)).
* **Session Management:** [PR #1064](https://github.com/moltis-org/moltis/pull/1064) fixed auto-title generation failures, and [PR #1058](https://github.com/moltis-org/moltis/pull/1058) ensured configured LLMs show up correctly during onboarding.

## 4. Community Hot Topics
Community activity today was dominated by rapid bug reporting and immediate resolution, indicating a highly engaged user base testing the latest builds. 
* **Agent Customization ([Issue #553](https://github.com/moltis-org/moltis/issues/553)):** A request from April for per-agent loopback and timeout settings saw activity today and was promptly resolved by the newly merged runtime limits feature. This highlights a strong user need for granular control over agent resource consumption.
* **Security Concerns ([Issue #1054](https://github.com/moltis-org/moltis/issues/1054)):** Reported by user `IlyaBizyaev`, this issue brought attention to stdio MCP server configs exposing environment variables to the LLM. The swift fix reflects the community's strict expectations regarding secrets management in AI tooling.

## 5. Bugs & Stability
Several bugs were reported and immediately triaged and closed today. Ranked by severity:
1. **High - Secret Leakage ([Issue #1054](https://github.com/moltis-org/moltis/issues/1054)):** Env vars from stdio MCP configs were exposed to the LLM via `mcp_list`. *(Fix: [PR #1063](https://github.com/moltis-org/moltis/pull/1063))*
2. **Medium - Provider Connection Failures ([Issue #1051](https://github.com/moltis-org/moltis/issues/1051)):** OpenAI-compatible endpoint URLs were not validated, and constructed URLs were not logged on failure, making debugging difficult. *(Fix: [PR #1061](https://github.com/moltis-org/moltis/pull/1061))*
3. **Medium - Session Title Generation ([Issue #1053](https://github.com/moltis-org/moltis/issues/1053)):** Automatic session title generation failed silently. *(Fix: [PR #1064](https://github.com/moltis-org/moltis/pull/1064))*
4. **Low - UI Configuration Bug ([Issue #1057](https://github.com/moltis-org/moltis/issues/1057)):** External agent pickers were shown in the UI even when explicitly disabled in the config. *(Fix: [PR #1059](https://github.com/moltis-org/moltis/pull/1059))*
5. **Low - UI Display Quirks:** Verbose console logs during sandbox pre-builds ([Issue #1056](https://github.com/moltis-org/moltis/issues/1056), fixed in [PR #1065](https://github.com/moltis-org/moltis/pull/1065)) and model picker sizing issues ([Issue #1052](https://github.com/moltis-org/moltis/issues/1052), fixed in [PR #1060](https://github.com/moltis-org/moltis/pull/1060)).

## 6. Feature Requests & Roadmap Signals
The most prominent roadmap signal is the maturation of the multi-agent system. [Issue #553](https://github.com/moltis-org/moltis/issues/553) (per-agent timeout settings) and the massive [PR #1049](https://github.com/moltis-org/moltis/pull/1049) (agents as capability boundaries) indicate that the next version of Moltis will likely market itself heavily on **context-isolated, role-based agents** (e.g., assigning specific sandboxed agents to different users like kids vs. parents). It is highly probable these changes will be packaged into the next minor or major version release.

## 7. User Feedback Summary
Users are actively testing multi-provider setups and advanced configurations (MCP servers, external agents like Claude-Code/Codex). The main pain points expressed revolved around friction in the UI (horizontal scrolling, model picker formatting) and opaque backend errors (URL validation, silent title generation failures). The immediate response from maintainers in patching these issues suggests a very satisfying developmental loop for end-users right now.

## 8. Backlog Watch
The backlog is remarkably clean. Older feature requests like [Issue #553](https://github.com/moltis-org/moltis/issues/553) have finally been closed out. To maintain this momentum, the project should ensure documentation keeps pace with the newly introduced architectural changes in [PR #1049](https://github.com/moltis-org/moltis/pull/1049), as users will likely need migration guides to adapt their existing setups to the new "agent presets" paradigm.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-05-25

## 1. Today's Overview
The CoPaw (QwenPaw) project is currently experiencing high community engagement, characterized by a robust influx of new issues (14 updated in the last 24 hours) and active discussions. The majority of these updates are newly opened bugs and feature requests, indicating that users are actively testing the recent v1.1.8.post1 release. However, open-source maintainer velocity appears to be lagging slightly behind community demand today; while 3 issues were closed, no pull requests were merged, and no new software releases were published. Overall, the project is in an active, iterative phase heavily focused on third-party model compatibility, memory systems, and frontend UI reliability.

## 2. Releases
**No new releases were recorded today.** The community is actively reporting issues against the current stable benchmark, `v1.1.8.post1`.

## 3. Project Progress
No Pull Requests were merged today. The only updated PR is:
*   **[#4637 feat(chat): add customizable slash command shortcut menu](https://github.com/agentscope-ai/QwenPaw/pull/4637)** (Open): Authored by DICKQI, this PR aims to replace the hardcoded slash commands in the chat UI with a customizable, user-driven shortcut menu. This is a quality-of-life improvement currently awaiting review and merge.

On the issue front, 3 issues were closed:
*   **[#4051 deepseek模型的think内容解析问题](https://github.com/agentscope-ai/QwenPaw/issues/4051)**: A question regarding DeepSeek v4 Flash's think content parsing, resolved after 10 comments.
*   **[#3290 Add skill update functionality](https://github.com/agentscope-ai/QwenPaw/issues/3290)**: A long-standing enhancement request from April that has now been marked as closed. 
*   **[#4639 会话结束自动总结机制](https://github.com/agentscope-ai/QwenPaw/issues/4639)**: An RFC regarding automatic memory archiving via pre-hooks when sessions end.

## 4. Community Hot Topics
The most actively discussed topics revolve around UI rendering bugs and system architecture design:
*   **Console UI Reliability ([#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644), 6 comments):** Users are frustrated that tool calls in the web UI do not render in real-time, requiring manual page refreshes. The fact that this produces no backend errors makes it particularly tricky to diagnose.
*   **Third-Party Model Compatibility ([#4650](https://github.com/agentscope-ai/QwenPaw/issues/4650), 4 comments):** Users utilizing OpenAI-compatible API bridges (like NewAPI) to connect local models (e.g., GLM-5.1 via Ollama) are finding that reasoning chains (thinking tokens) fail to display, even though the API streams correctly.
*   **Memory & Session Management (Multiple posts by user feng183043996):** There is a deep architectural discussion happening regarding how the agent handles state. In **[#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653)** (3 comments), users note that scheduled cron tasks share sessions with user chat, causing cron jobs to abort if a user sends a message during execution.

## 5. Bugs & Stability
Several distinct bugs have been reported, primarily affecting the console UI and MCP integrations:
1.  **High - Cron Job Session Collisions:** **[#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653)** - Scheduled tasks are interrupted by incoming user messages due to shared session states. 
2.  **Medium - UI Tool Call Visibility:** **[#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644)** - Tool calls fail to render dynamically in the Console UI.
3.  **Medium - Orphaned Cron Jobs:** **[#4649](https://github.com/agentscope-ai/QwenPaw/issues/4649)** - When `jobs.json` is updated, removed jobs remain stuck in the APScheduler internal state, causing "ghost tasks" to execute indefinitely.
4.  **Low/Medium - MCP Schema & Auth Bugs:** **[#4646](https://github.com/agentscope-ai/QwenPaw/issues/4646)** (Schema sanitizer corrupts boolean keywords into invalid objects) and **[#4643](https://github.com/agentscope-ai/QwenPaw/issues/4643)** (MCP OAuth missing `client_secret` support). These degrade stability for users utilizing external tool integrations.
5.  **Low - Channel Routing Errors:** **[#4616](https://github.com/agentscope-ai/QwenPaw/issues/4616)** - Dream Awakening tasks error out with WeChat channel logs, even when WeChat is not configured by the user.
*Note: No specific fix PRs were opened or merged for these bugs today.*

## 6. Feature Requests & Roadmap Signals
The community is heavily focused on evolving the agent from a simple chat interface into a persistent, autonomous companion:
*   **Remote Daemon connectivity:** **[#4645](https://github.com/agentscope-ai/QwenPaw/issues/4645)** requests the ability to separate the frontend Pet UI from the backend daemon, allowing headless server execution.
*   **Token Transparency:** **[#4647](https://github.com/agentscope-ai/QwenPaw/issues/4647)** requests visible token speed and usage metrics at the bottom of each reply.
*   **Advanced Memory Architecture:** User feng183043996 submitted two highly detailed proposals: **[#4651](https://github.com/agentscope-ai/QwenPaw/issues/4651)** (Auto-loading operational specs before task execution) and **[#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652)** (Enhancing memory with summary-association-reminder mechanisms to prevent the AI from repeating mistakes).

## 7. User Feedback Summary
Users are enthusiastically pushing the boundaries of CoPaw by integrating diverse local models and complex scheduling tasks. **Use cases** now heavily rely on the "Dream Awakening" autonomous tasks and external tool connections. However, **dissatisfaction** is rising regarding the immaturity of the cron job scheduler (which lacks proper session isolation and job cleanup). Another major **pain point** is frontend reliability; users expect real-time streaming of thought processes and tool calls, and the current UI requires frequent manual refreshing.

## 8. Backlog Watch
*   **PR [#4637](https://github.com/agentscope-ai/QwenPaw/pull/4637)** has been open for 3 days without maintainer review. As a solid UI improvement, it should be prioritized.
*   **Issue [#4649](https://github.com/agentscope-ai/QwenPaw/issues/4649)** (Ghost cron jobs) represents a potential security/stability risk (runaway tasks) and requires immediate architectural triage from the core team.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-25

## 1. Today's Overview
ZeroClaw is experiencing a period of high community engagement and active development, characterized by a substantial backlog of 49 open issues and 45 open pull requests updated in the last 24 hours. The project currently has no new releases, suggesting the codebase is in an active feature development and bug-fixing phase rather than a stabilization cycle. Maintainers and contributors are heavily focused on expanding channel integrations, refining the MCP (Model Context Protocol) tooling infrastructure, and hardening security boundaries within the agent's desktop and sandbox environments. While the high volume of open bugs—particularly around core configuration and provider integrations—indicates growing pains as the system scales in complexity, the steady stream of targeted PRs demonstrates a proactive approach to addressing these friction points.

## 2. Releases
There were **0 new releases** today, and no latest releases are currently listed. The project appears to be operating on a continuous deployment/rolling main branch model or is building toward a significant milestone release.

## 3. Project Progress
While only 5 PRs were closed/merged today, the open PR pipeline is vibrant and addresses several critical areas of the codebase:

*   **Security Hardening:** A vital fix was introduced in PR [#6902](https://github.com/zeroclaw-labs/zeroclaw/pull/6902) to conditionally bind `/lib64` and `/lib` in the bubblewrap sandbox, resolving a crash loop for dynamically linked binaries on Fedora/RHEL. Additionally, PR [#6900](https://github.com/zeroclaw-labs/zeroclaw/pull/6900) implements SHA256 verification for self-update downloads.
*   **Agent Runtime & MCP:** PR [#6861](https://github.com/zeroclaw-labs/zeroclaw/pull/6861) fixes an origin-based detection bug for `tool_filter_groups`, and the ambitious "Dream Mode" for periodic memory consolidation is taking shape in PR [#6693](https://github.com/zeroclaw-labs/zeroclaw/pull/6693).
*   **Desktop App (Tauri):** Contributor `theonlyhennygod` submitted a massive batch of PRs ([#6763](https://github.com/zeroclaw-labs/zeroclaw/pull/6763), [#6764](https://github.com/zeroclaw-labs/zeroclaw/pull/6764), [#6765](https://github.com/zeroclaw-labs/zeroclaw/pull/6765), [#6766](https://github.com/zeroclaw-labs/zeroclaw/pull/6766), [#6767](https://github.com/zeroclaw-labs/zeroclaw/pull/6767)) to add permission revocation detection and resume re-checks for screen recording, microphones, input monitoring, full disk access, and local network.
*   **Infrastructure & Tooling:** PR [#6857](https://github.com/zeroclaw-labs/zeroclaw/pull/6857) adds an integration for the 8Sleep Pod smart mattress, showcasing the expanding IoT capabilities of the agent. 

## 4. Community Hot Topics
The most actively discussed issues revolve around configuration drift, MCP tooling limitations, and memory architecture:
*   **MCP Tool Filtering non-functional ([#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699), 6 comments):** Users are frustrated that `tool_filter_groups` is a no-op for real MCP tools due to a prefix-check bug. This highlights a critical disconnect between documented capabilities and actual runtime behavior for advanced AI tool-calling.
*   **Missing Channel Schema Config ([#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856), 5 comments):** The omission of `show_tool_calls` from the `[channel]` schema v3 is causing friction for users trying to debug agent actions via channels.
*   **Ollama Tool-Calling Failures ([#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962), 4 comments):** The local provider workflow is completely blocked when tools are needed, pointing to persistent compatibility issues with self-hosted LLM setups.
*   **Memory Architecture RFC ([#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850), 1 comment but high strategic importance):** A proposal to decouple memory strategy from storage backends via a `MemoryStrategy` trait. This signals that the community wants pluggable, customizable retrieval and consolidation strategies.

## 5. Bugs & Stability
Stability is currently challenged by provider integration quirks, runtime hangs, and configuration bugs. 

**High Severity:**
*   **Webhook/MCP Silent Hangs ([#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721)):** `tool_search` is omitted from auto-approve, causing 120s silent hangs and auto-denies in webhook modes. *(Fix exists: PR [#6861](https://github.com/zeroclaw-labs/zeroclaw/pull/6861))*
*   **Gemini 400 History Violation ([#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302)):** The history serializer places an assistant turn before the first user turn, causing immediate 400 errors with Gemini models.
*   **MCP Orphaned Processes ([#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)):** Daemon leaks roughly 48 stdio child processes per day when heartbeat is enabled. 
*   **Gateway SPA Fallback Bug ([#6862](https://github.com/zeroclaw-labs/zeroclaw/issues/6862)):** Unimplemented `/api/*` routes serve `index.html`, crashing the dashboard's JSON parser.

**Medium Severity:**
*   **Postgres Runtime Panic ([#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472)):** Starting a runtime from within a runtime causes a panic when using the Postgres memory backend.
*   **OpenAI Timeout Ignored ([#6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723)):** The native OpenAI provider hardcodes a 120s timeout, silently ignoring user config for long-running operations.
*   **Slack Token Configuration ([#6844](https://github.com/zeroclaw-labs/zeroclaw/issues/6844)):** `bot_token` cannot be supplied via environment variables, forcing insecure config-file deployments.

## 6. Feature Requests & Roadmap Signals
Several key feature requests indicate where the project is heading next:
*   **Expanding Chat Channels:** There is a massive push to make ZeroClaw omnichannel. Open issues/PRs aim to integrate **Mastodon** ([#6423](https://github.com/zeroclaw-labs/zeroclaw/issues/6423)), **Twilio SMS** ([#6427](https://github.com/zeroclaw-labs/zeroclaw/issues/6427)), **Rocket.Chat** ([#6435](https://github.com/zeroclaw-labs/zeroclaw/issues/6435)), and **Zulip** ([#6437](https://github.com/zeroclaw-labs/zeroclaw/issues/6437)). These will likely land in the next version.
*   **Sandbox Improvements:** Users need more flexible `bubblewrap` sandboxing. Issue [#5127](https://github.com/zeroclaw-labs/zeroclaw/issues/5127) requests configurable writable paths and network access.
*   **Advanced Memory Management:** Alongside the "Dream Mode" PR, users are requesting tool-calling for memory consolidation ([#4760](https://github.com/zeroclaw-labs/zeroclaw/issues/4760)) and version history for workspace file changes ([#3672](https://github.com/zeroclaw-labs/zeroclaw/issues/3672)).

## 7. User Feedback Summary
Users love the extensibility and the aggressive pace of new channel/tool integrations, but they are experiencing friction with configuration reliability and provider parity. Specifically:
*   **Local AI / Self-hosted users feel left behind:** The Ollama tool-calling bug ([#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)) and Z.AI context trim errors ([#5636](https://github.com/zeroclaw-labs/zeroclaw/issues/5636)) show that users not using OpenAI/Anthropic face blocked workflows.
*   **Documentation vs. Reality:** Users are frustrated when they configure settings exactly as documented (e.g., OpenAI timeouts, memory reranking, MCP filtering), only to find the code completely ignores them (Dead Config).
*   **Security needs vs. Usability:** The request for shell message hooks ([#3696](https://github.com/zeroclaw-labs/zeroclaw/issues/3696)) and customizable sandboxes shows a user base that wants to push the boundaries of autonomous actions but is currently constrained by hard-coded safety walls.

## 8. Backlog Watch
*   **Lost Commits Audit ([#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)):** A massive bulk revert from March 2026 accidentally wiped 153 approved commits. Maintainer `Audacity88` is actively auditing this, but it needs dedicated attention to ensure critical bug fixes aren't permanently lost.
*   **Dead Configuration Scaffolding:** Issues like `MemoryConfig.rerank_enabled` ([#6722](https://github.com/zeroclaw-labs/zeroclaw/issues/6722)) and OpenAI timeout config ([#6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723)) are accepted but still lacking code implementations. Maintainers should prioritize clearing these to improve trust in the configuration schema.
*   **Webhook Exponential Backoff ([#5761](https://github.com/zeroclaw-labs/zeroclaw/issues/5761)):** An older, accepted feature request that is crucial for production channel reliability but is currently sitting in-progress.

</details>