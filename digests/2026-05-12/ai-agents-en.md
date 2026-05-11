# OpenClaw Ecosystem Digest 2026-05-12

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-11 22:19 UTC

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

# OpenClaw Project Digest — 2026-05-12

## 1. Today's Overview
OpenClaw is experiencing a period of exceptionally high beta activity as the project iterates rapidly toward its next stable release. With nearly 800 issues and PRs updated in the last 24 hours, the community and maintainers are highly engaged, though the ratio of open to closed/merged items (approx. 6.5:1 for PRs and 3.7:1 for issues) suggests the project is fielding a heavy influx of new work, regressions, and QA reports. Three beta releases dropped in quick succession, focusing on CI robustness, stricter build checks, and runtime environment detection, indicating tightening quality gates. Underlying much of today’s discussion is the ongoing effort to integrate Codex-native tooling and stabilize runtime parity, with several high-comment issues exposing QA harness gaps rather than product bugs.

## 2. Releases

### v2026.5.10-beta.5 / v2026.5.10-beta.4
- **CI:** Added a non-blocking `plugin-inspector-advisory` artifact to Plugin Prerelease, capturing bundled plugin compatibility triage without blocking the release gate.
- **Runtime/Fly:** Detect Fly Machines as container environments from runtime env vars, allowing gateway bind behavior to adapt automatically.
- No documented breaking changes or migration steps.

### v2026.5.10-beta.3
- **Build:** Enabled stricter Vitest lint rules covering focused, disabled, conditional, hook, matcher, and expectation hazards.
- **Build:** Pinned explicit `oxfmt` defaults in the shared formatter config for stable formatting across upgrades.
- **TypeScript:** Enabled stricter compiler checks (truncated release notes).
- No documented breaking changes.

**Migration notes:** None explicitly required, but the stricter lint and compiler checks may surface new warnings for plugin developers and contributors.

---

## 3. Project Progress

### Merged/Closed PRs (35 total today)
While only 35 PRs were closed/merged, the open PR backlog (465) shows active development across several key areas:

- **QA harness hardening:** Multiple issues closed today ([#80320](https://github.com/openclaw/openclaw/issues/80320), [#80312](https://github.com/openclaw/openclaw/issues/80312), [#80236](https://github.com/openclaw/openclaw/issues/80236), [#80321](https://github.com/openclaw/openclaw/issues/80321), [#80434](https://github.com/openclaw/openclaw/issues/80434)) clarify that several reported "Codex runtime bugs" were actually QA mock-provider artifacts, reflecting maturing test infrastructure.
- **Codex integration:** Several PRs target Codex-native tooling parity and plugin defaults ([PR #80792](https://github.com/openclaw/openclaw/pull/80792) defaults destructive actions on for Codex plugins; [PR #80786](https://github.com/openclaw/openclaw/pull/80786) fixes cron announce delivery gaps).
- **Channel improvements:** WhatsApp message edits/revocations ([PR #62307](https://github.com/openclaw/openclaw/pull/62307)), iMessage tapback routing ([PR #80713](https://github.com/openclaw/openclaw/pull/80713)), Discord gzip parsing ([PR #80788](https://github.com/openclaw/openclaw/pull/80788)), BlueBubbles phone number normalization ([PR #62101](https://github.com/openclaw/openclaw/pull/62101)).
- **Developer experience:** Swedish UI locale ([PR #62063](https://github.com/openclaw/openclaw/pull/62063)), enhanced Makefile ([PR #61775](https://github.com/openclaw/openclaw/pull/61775)), pre-upgrade risk assessment command ([PR #61973](https://github.com/openclaw/openclaw/pull/61973)).
- **Performance:** Persistent export-state cache for memory export ([PR #77158](https://github.com/openclaw/openclaw/pull/77158)) targets a significant CPU bottleneck for agents with thousands of session transcripts.

---

## 4. Community Hot Topics

| Issue/PR | Comments | 👍 | Theme |
|---|---|---|---|
| [#76877](https://github.com/openclaw/openclaw/issues/76877) — Agents stop responding mid-work (regression) | 14 | 4 | Core agent reliability regression |
| [#72808](https://github.com/openclaw/openclaw/issues/72808) — Silently lost Slack connection | 16 | 2 | Messaging channel stability |
| [#80319](https://github.com/openclaw/openclaw/issues/80319) — QA tool-defaults conflation | 12 | 1 | Test harness accuracy |
| [#58450](https://github.com/openclaw/openclaw/issues/58450) — Agent promises follow-up without action | 12 | 2 | Agent reliability/trust |
| [#59330](https://github.com/openclaw/openclaw/issues/59330) — Control UI Raw mode permanently disabled | 7 | **12** | Config editor regression (highest 👍 today) |
| [#74879](https://github.com/openclaw/openclaw/issues/74879) — Onboarding slowdown | 5 | 4 | First-run experience |
| [#52305](https://github.com/openclaw/openclaw/issues/52305) — Async task completion reports lost | 11 | 0 | Background task reliability |
| [#79902](https://github.com/openclaw/openclaw/issues/79902) — SQLite transcript/session seams | 11 | 2 | Runtime observability |
| [#80777](https://github.com/openclaw/openclaw/issues/80777) — Plaintext tokens persist in config audit logs | 4 | 2 | **Security** |

**Analysis:** The community is focused on three themes: (1) **agent reliability** — mid-work stalls, phantom follow-up promises, and async completion failures erode user trust; (2) **messaging channel stability** — Slack disconnections, WhatsApp message loss, Telegram routing issues are the most visible user-facing pain; (3) **QA harness accuracy** — the high volume of corrections by `100yenadmin` reveals that the project is actively distinguishing real product bugs from test artifacts, which is healthy but inflates issue counts.

---

## 5. Bugs & Stability

**Critical / High Severity:**

1. **[#76877](https://github.com/openclaw/openclaw/issues/76877) [CLOSED] — Agents stop responding mid-work (regression).** Agents use tooling then freeze until prompted again. 4 thumbs-up, 14 comments. Worked in pre-2026.04-23 versions. **Status:** Closed, likely addressed in recent betas.

2. **[#59330](https://github.com/openclaw/openclaw/issues/59330) [OPEN] — Control UI Raw mode permanently disabled (12 👍).** `materializeRuntimeConfig` injects undefined keys that break round-trip checks. Regression since 2026.3.31. No linked fix PR visible.

3. **[#80777](https://github.com/openclaw/openclaw/issues/80777) [OPEN] — Plaintext tokens persist indefinitely in config-audit logs.** Pre-#75095 entries in `~/.openclaw/logs/config-audit.jsonl` are never scrubbed, leaving Slack/Telegram credentials at rest. **Security-relevant.** No fix PR yet.

4. **[#57349](https://github.com/openclaw/openclaw/issues/57349) [OPEN] — Heap exhaustion / OOM after ~17-20h uptime.** Gateway hits ~4GB heap limit during filesystem scans. Memory leak pattern.

5. **[#58443](https://github.com/openclaw/openclaw/issues/58443) [CLOSED] — Gateway duplicates inbound messages.** Same message injected multiple times, causing duplicate agent replies. Filed for multiple channels.

6. **[#80040](https://github.com/openclaw/openclaw/issues/80040) [OPEN] — Cascading failure: OAuth invalidation → empty reply → duplicate tool execution → context loss.** Three compounding failures in v2026.5.7.

**Medium Severity:**

- [#72808](https://github.com/openclaw/openclaw/issues/72808) — Silent Slack disconnections (16 comments)
- [#60858](https://github.com/openclaw/openclaw/issues/60858) — Compaction silently blocked by `hasRealConversationContent` guards
- [#80760](https://github.com/openclaw/openclaw/issues/80760) — Codex context-engine caps output at 24k chars
- [#52130](https://github.com/openclaw/openclaw/issues/52130) — Restart storm from Telegram retry jitter type mismatch
- [#57326](https://github.com/openclaw/openclaw/issues/57326) — CLI helper paths bypass CLI dispatch
- [#79595](https://github.com/openclaw/openclaw/issues/79595) [CLOSED] — Google Vertex auth detected but no profile written

**Stability Assessment:** The project is in an active beta phase with a notable number of regressions introduced by recent changes. Memory management (heap exhaustion), messaging channel reliability, and config/UI round-trip bugs are the most impactful categories.

---

## 6. Feature Requests & Roadmap Signals

| Feature Request | Issue | Signals |
|---|---|---|
| **Multi-tenancy (single instance + RBAC)** | [#60127](https://github.com/openclaw/openclaw/issues/60127) | Strong enterprise use case; 6 comments, no maintainer response yet |
| **Multi-slot memory architecture** | [#60572](https://github.com/openclaw/openclaw/issues/60572) | Replace single memory slot with purpose-specific slots; 5 comments, 3 👍 |
| **SQLite transcript/session seams** | [#79902](https://github.com/openclaw/openclaw/issues/79902) | Expose canonical runtime state for advanced consumers; 11 comments |
| **Per-candidate retry count for model fallback** | [#59413](https://github.com/openclaw/openclaw/issues/59413) | Support pool-based/proxy providers with configurable retries |
| **Adopt Claude Code's multi-layer compaction** | [#58398](https://github.com/openclaw/openclaw/issues/58398) | Leverage public Claude Code compaction architecture |
| **WhatsApp backfill missed messages** | [#50093](https://github.com/openclaw/openclaw/issues/50093) | Recover messages sent during connection outages |

**Predictions for next versions:**
- **Multi-slot memory** is likely to advance given active PRs in memory-core extensions ([PR #77158](https://github.com/openclaw/openclaw/pull/77158)).
- **Codex integration hardening** is clearly a near-term priority based on the volume of Codex-related fixes and QA corrections.
- **Channel reliability** (WhatsApp edits, iMessage tapbacks, Discord gzip) shows active development and likely inclusion soon.
- **Security hardening** (config audit log scrubbing) should be prioritized given [#80777](https://github.com/openclaw/openclaw/issues/80777).

---

## 7. User Feedback Summary

**Pain Points:**
- **Agent reliability is the #1 concern.** Users report agents stopping mid-task ([#76877](https://github.com/openclaw/openclaw/issues/76877)), promising follow-ups without acting ([#58450](https://github.com/openclaw/openclaw/issues/58450)), and losing async completion reports ([#52305](https://github.com/openclaw/openclaw/issues/52305)). This erodes confidence in production use.
- **Messaging channel fragility** causes real data loss: Slack silently disconnects ([#72808](https://github.com/openclaw/openclaw/issues/72808)), WhatsApp misses messages during reconnections ([#50093](https://github.com/openclaw/openclaw/issues/50093)), and gateway duplicates messages ([#58443](https://github.com/openclaw/openclaw/issues/58443)).
- **Control UI regressions** ([#59330](https://github.com/openclaw/openclaw/issues/59330), 12 👍) frustrate power users who rely on raw config editing.
- **Onboarding friction** ([#74879](https://github.com/openclaw/openclaw/issues/74879), [#61005](https://github.com/openclaw/openclaw/issues/61005)) impacts new user retention.
- **Security gap** with plaintext tokens in audit logs ([#80777](https://github.com/openclaw/openclaw/issues/80777)) is concerning for production deployments.

**Use Cases Observed:**
- Multi-agent Telegram setups with 6+ bots ([#61012](https://github.com/openclaw/openclaw/issues/61012))
- Slack multi-workspace enterprise deployments ([#58523](https://github.com/openclaw/openclaw/issues/58523))
- Raspberry Pi 5 / ARM64 home server deployments ([#61137](https://github.com/openclaw/openclaw/issues/61137))
- Startups wanting multi-tenancy without multiple instances ([#60127](https://github.com/openclaw/openclaw/issues/60127))
- Pool-based/proxy API provider users managing rotating key pools ([#59413](https://github.com/openclaw/openclaw/issues/59413))

**Satisfaction:** Users are engaged and invested, with detailed bug reports and feature proposals. However, the frequency of regression reports (agents stalling, UI breakage) suggests the rapid beta cadence is testing user patience. The high community involvement (500 issues updated daily) indicates strong interest.

---

## 8. Backlog Watch

**High-priority items needing maintainer attention:**

| Issue | Age | Status | Concern |
|---|---|---|---|
| [#59330](https://github.com/openclaw/openclaw/issues/59330) — Raw mode permanently disabled | ~41 days | OPEN, 12 👍 | Highest community vote count; no fix PR visible |
| [#57349](https://github.com/openclaw/openclaw/issues/57349) — Heap exhaustion / OOM | ~44 days | OPEN | Memory leak causing crashes after 17-20h uptime |
| [#60127](https://github.com/openclaw/openclaw/issues/60127) — Multi-tenancy support | ~39 days | OPEN | Enterprise blocker; no maintainer engagement |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) — WhatsApp backfill missed messages | ~54 days | OPEN | Data loss on reconnection |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) — Steer mode doesn't inject mid-turn | ~57 days | OPEN | Core agent behavior; 9 comments |
| [#45698](https://github.com/openclaw/openclaw/issues/45698) — Control UI progressively stuck | ~59 days | OPEN | UI usability degradation |
| [#60572](https://github.com/openclaw/openclaw/issues/60572) — Multi-slot memory architecture | ~39 days | OPEN | 3 👍, architectural proposal |
| [#80777](https://github.com/openclaw/openclaw/issues/80777) — Plaintext tokens in audit logs | 1 day | OPEN | **Security** — needs urgent triage |

**PRs needing review:**
- [PR #62201](https://github.com/openclaw/openclaw/pull/62201) — Stale toolResult replay pollution fix (XL, 35+ days open)
- [PR #62206](https://github.com/openclaw/openclaw/pull/62206) — Assistant conclusion freshness gate (XL, 35+ days open)
- [PR #77158](https://github.com/openclaw/openclaw/pull/77158) — Memory export performance cache (M, 7+ days, maintainer-labeled)
- [PR #59859](https://github.com/openclaw/openclaw/pull/59859) — Native Linux GTK app (XL, 40+ days, needs behavior proof)

**Overall Backlog Health:** The project carries a significant backlog of long-open issues (40-60 days) affecting core reliability. The maintainers appear focused on stabilizing the current beta cycle and Codex integration, but several high-impact items (OOM, UI freezes, data loss on channels) deserve expedited attention.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digests for 2026-05-12.

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem on 2026-05-12 is characterized by rapid maturation and intense development velocity. Projects are moving decisively past basic chat interfaces toward complex, multi-channel, and multi-agent orchestration platforms. A prominent theme across the board is the aggressive patching of runtime stability bugs—specifically around LLM context compaction, streaming token handling, and memory management—as frameworks scale to meet enterprise and power-user demands. Meanwhile, architectural shifts are heavily leaning into modular plugin systems, tool-calling pipelines, and strict trust boundaries to support diverse deployment environments ranging from edge hardware to multi-tenant SaaS.

## 2. Activity Comparison
*Health Score Key: A (Excellent/Vigorous), B (Active/Healthy), C (Moderate/Iterating), D (Slow/Maintenance)*

| Project | Updated Issues (24h) | Updated PRs (24h) | Releases Today | Health Score (A-D) |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~800 (465 open PRs) | 35 merged/closed | 3 (Betas) | **A** |
| **IronClaw** | 38 (15 closed) | 50 (31 merged) | 0 | **A** |
| **CoPaw** | 49 (21 closed) | 35 (16 merged) | 0 | **A** |
| **ZeroClaw** | 15 | 48 (14 merged) | 0 | **A** |
| **LobsterAI** | Low volume | 30 merged | 0 (Branch ready) | **A** |
| **Hermes Agent** | 45 open | 44 open (6 merged) | 1 (Ad-hoc build) | **A** |
| **NanoBot** | 10 active | 21 updated | 0 | **B** |
| **PicoClaw** | 8 closed | 28 active (9 merged) | 1 (Nightly) | **B** |
| **NanoClaw** | 4 active | 17 updated (10 merged) | 0 | **B** |
| **NullClaw** | 2 active | 7 active (2 merged) | 0 | **B** |
| **ZeptoClaw** | 1 closed | 1 opened | 0 | **C** |
| **Moltis** | 3 closed | 2 merged | 0 | **C** |
| **TinyClaw** | 0 | 0 | 0 | **D** |

## 3. OpenClaw's Position
*   **Advantages vs Peers:** OpenClaw remains the core reference implementation with unmatched sheer volume of community engagement (nearly 800 issues/PRs updated daily). Its developer experience (Makefiles, CLI risk assessment, localization) and massive multi-channel support are highly mature compared to peers.
*   **Technical Approach:** OpenClaw is deeply focused on its "Codex-native" integration and tightening CI/CD quality gates (stricter linting, build checks) to manage its massive influx of contributions. In contrast, projects like IronClaw and ZeptoClaw are doing ground-up refactors of their agent loops (Rust/Middleware pipelines), and NullClaw is rebuilding core HTTP/DNS networking in Zig.
*   **Community Size:** OpenClaw boasts the largest community footprint, heavily generating QA reports and feature proposals. However, this high velocity has resulted in a significant backlog (ratio of 6.5:1 open to merged PRs), whereas IronClaw and CoPaw are processing merges much more aggressively today.

## 4. Shared Technical Focus Areas
*   **Auto-Compaction & Context Window Management:**
    *   *Projects:* OpenClaw, NanoClaw, Hermes Agent.
    *   *Needs:* Compaction is causing agents to silently drop messages, swallow task prompts, or generate zero output. Frameworks are urgently patching how state is saved when context windows shrink.
*   **Model Routing & Fallback Resiliency:**
    *   *Projects:* NanoClaw, NanoBot, CoPaw, PicoClaw, IronClaw.
    *   *Needs:* With rate limits (429s) and provider outages, users are demanding built-in pool-based routing, automatic Opus-to-Sonnet failovers, and the ability to use custom/local OpenAI-compatible endpoints.
*   **Advanced Memory Governance:**
    *   *Projects:* CoPaw, NanoClaw, NanoBot, LobsterAI, Hermes Agent.
    *   *Needs:* Moving from simple chat history to structured "Dreaming" (LobsterAI), long-term hindsight (NanoClaw), and multi-slot isolation (NanoBot) to give agents persistent, stateful memory across sessions.
*   **Multi-Agent Loop & Pipeline Refactoring:**
    *   *Projects:* IronClaw, ZeptoClaw, Hermes Agent.
    *   *Needs:* Monolithic while-loops are being decomposed into modular `AgentLoop` middleware to better handle tool gating, async sub-agent routing, and loop-exit boundaries.

## 5. Differentiation Analysis
*   **Target Environments & Edge Compute:** **PicoClaw** and **NullClaw** differentiate by aggressively targeting embedded and edge environments (Yocto/OpenEmbedded layers, Raspberry Pi, Android, riscv64 architecture support). Conversely, **IronClaw** is heavily enterprise/SaaS-focused (multi-tenant RBAC, hosted Docker sandboxes).
*   **Core Architecture:** **ZeptoClaw** is taking a rigorous, highly modular approach (Rust-based pipelines and automated AI-vuln auditing), while **LobsterAI** and **CoPaw** are heavily invested in rich desktop/web UIs (Electron/Tauri) featuring artifact previews and complex rendering integrations.
*   **Channel Strategy:** **ZeroClaw** stands out for its intense focus on privacy-centric omnichannel integration (Matrix, custom web searches) and multimodal normalization, whereas **Hermes Agent** is heavily optimized for CLI/TUI power users and localized gateway deployments.

## 6. Community Momentum & Maturity
*   **Peak Velocity (Iterating rapidly):** **IronClaw**, **CoPaw**, and **LobsterAI** show massive merge velocity today (30+ merges), indicating aggressive sprint phases toward major releases. **OpenClaw** is highly active but currently bottlenecked by heavy QA triage.
*   **Stabilizing Phase:** **NanoClaw**, **Moltis**, and **NullClaw** are in maintenance/hardening phases, characterized by high merge rates relative to open issues, focusing heavily on eliminating deployment friction and fixing regressions.
*   **Early/Architectural Phase:** **ZeptoClaw** and **PicoClaw** are dealing with foundational architecture (pipeline wiring) and hardware bring-up, respectively.

## 7. Trend Signals
1.  **Cost & Token Optimization is Paramount:** Users are hitting scaling walls. Features like dynamic reasoning-effort routing (NanoClaw), provider fallbacks (CoPaw), and strict token-usage observability (NanoBot) are no longer nice-to-haves; they are required for production deployments.
2.  **Security & Trust Boundaries in Agentic Loops:** As agents execute shell commands and modify filesystems, the community is demanding strict RBAC for tools (Hermes Agent, IronClaw) and automated vulnerability scanning for codebases (ZeptoClaw). Plaintext token leaks (OpenClaw) are entirely unacceptable.
3.  **Self-Healing and Resilient Tooling:** External tooling (especially web search/scraping like DuckDuckGo) frequently fails or hangs, sometimes crashing the host OS (NanoBot, NullClaw). Frameworks are shifting toward subprocess isolation, aggressive retries, and modular search-fallback chains (SearXNG, Brave, Tavily).
4.  **Desktop/Local-First Execution:** There is a strong trend toward moving away from purely web-based UIs toward local desktop apps (Tauri 2.x in CoPaw, native GTK/Linux in OpenClaw, rich TUIs in Hermes), signaling that power users want deep OS integration for their personal agents.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-12

## 1. Today's Overview
NanoBot is experiencing a highly active development phase, driven by robust community engagement and a steady influx of external contributions. Over the past 24 hours, the project saw 21 updated Pull Requests (with 16 still open) and 10 active Issues, indicating a rapid iteration cycle. Contributors are heavily focused on expanding the provider/tool ecosystem and fixing critical channel integrations. Currently, there is a strong emphasis on architectural improvements, such as multi-tenant isolation, tool plugin systems, and advanced memory governance, pushing NanoBot further toward enterprise-readiness. Overall, the project's health appears excellent, characterized by quick bug resolutions and active feature development.

## 2. Releases
No new releases were recorded today.

## 3. Project Progress
Several key Pull Requests were closed or merged today, directly advancing the project's stability and provider compatibility:
*   **MiMo Reasoning Fix Merged**: [PR #3734](https://github.com/HKUDS/nanobot/pull/3734) successfully resolved a bug where Xiaomi MiMo users could not disable the reasoning mode.
*   **New Provider Additions**: [PR #3736](https://github.com/HKUDS/nanobot/pull/3736) was merged to add native support for the LongCat (美团) provider, expanding the model ecosystem.
*   **WebSocket Media Patch**: [PR #3673](https://github.com/HKUDS/nanobot/pull/3673) was closed/merged, fixing a bug where image attachments sent via the WebSocket channel were silently dropped.
*   **Non-secure Context Fix**: [PR #3733](https://github.com/HKUDS/nanobot/pull/3733) was merged to shim `crypto.randomUUID`, fixing WebUI crashes over LAN/HTTP.
*   **Concurrency Gate Fix**: [PR #3693](https://github.com/HKUDS/nanobot/pull/3693) is actively being discussed; it prevents background tasks from bypassing concurrency gates and overloading local LLM endpoints.

## 4. Community Hot Topics
*   **DuckDuckGo System Hangs ([Issue #2828](https://github.com/HKUDS/nanobot/issues/2828)):** This is the most active issue of the day (5 comments, 1 reaction). Users report that web searches cause the entire system (including the host Proxmox layer) to freeze. This highlights a severe need for better process isolation or I/O timeout handling for external web-scraping tools.
*   **Custom Bot Name and Icon ([Issue #3650](https://github.com/HKUDS/nanobot/issues/3650)):** With 3 comments, this issue reflects a strong user desire for white-labeling and UI customization, allowing users to replace the default "cat" branding with their own.
*   **Session-Level Memory Management ([Issue #3744](https://github.com/HKUDS/nanobot/issues/3744)):** A highly relevant discussion (1 comment) regarding how `USER.md` and `MEMORY.md` are managed when multiple IM users interact with a single agent. This touches directly on the core challenges of deploying NanoBot in multi-user environments.

## 5. Bugs & Stability
Today's bug reports were quickly triaged, with many receiving immediate fix PRs:
1.  **Critical - System Freeze**: [Issue #2828](https://github.com/HKUDS/nanobot/issues/2828) (DuckDuckGo search hanging the entire OS). No fix PR is mentioned yet.
2.  **High - Event Loop Crash**: [Issue #3739](https://github.com/HKUDS/nanobot/issues/3739) reports that NanoBot crashes if an MCP service is offline at startup. **Fix:** Addressed immediately by [PR #3740](https://github.com/HKUDS/nanobot/pull/3740) via a TCP probe mechanism.
3.  **High - Provider Parameter Conflicts**: [Issue #3585](https://github.com/HKUDS/nanobot/issues/3585) and VolcEngine API errors (similar to [PR #3738](https://github.com/HKUDS/nanobot/pull/3738)) where providers reject conflicting `max_tokens` parameters. **Fix:** Addressed by [PR #3734](https://github.com/HKUDS/nanobot/pull/3734) and [PR #3738](https://github.com/HKUDS/nanobot/pull/3738).
4.  **Medium - Enterprise WeChat filenames**: [Issue #3737](https://github.com/HKUDS/nanobot/issues/3737) notes that filenames sent via WeCom are not parsed correctly.
5.  **Low - WebUI Performance**: [Issue #3746](https://github.com/HKUDS/nanobot/issues/3746) warns of a >1MB code-highlighting chunk being eagerly loaded on startup.

## 6. Feature Requests & Roadmap Signals
The community is actively shaping the roadmap with a focus on operational control and observability:
*   **Multi-tenant Isolation**: [PR #3749](https://github.com/HKUDS/nanobot/pull/3749) introduces email/password auth and per-user state isolation for the WebUI. This is a massive step toward SaaS/multi-user deployments and will likely be a flagship feature in the next release.
*   **Provider-Hosted Tools**: [Issue #3741](https://github.com/HKUDS/nanobot/issues/3741) and [PR #3743](https://github.com/HKUDS/nanobot/pull/3743) request support for native provider tools (like Azure's web search) instead of relying solely on local function calls.
*   **Token Usage Observability**: [Issue #3731](https://github.com/HKUDS/nanobot/issues/3731) and [PR #3735](https://github.com/HKUDS/nanobot/pull/3735) introduce a `/insights` command to track cumulative token spending across sessions.
*   **Dynamic Model Switching**: [Issue #3742](https://github.com/HKUDS/nanobot/issues/3742) requests a `/model` slash command to dynamically swap providers mid-chat to handle regional network instabilities.
*   **Plugin Architecture**: [PR #3729](https://github.com/HKUDS/nanobot/pull/3729) proposes refactoring hardcoded tools into a self-describing plugin pattern, which would make extending NanoBot significantly easier.

## 7. User Feedback Summary
*   **Deployment Contexts**: Users are deploying NanoBot in complex environments, including Proxmox, enterprise messaging platforms (WeCom, Feishu), and local gateways.
*   **Pain Points**: Managing token costs across different API providers and handling network timeouts (specifically in regions like China Mainland) are major sources of friction. Users also struggle with agent stability when external tools (MCP servers, Web search) fail.
*   **Satisfaction**: Community sentiment seems highly engaged. Users are not just filing bugs but submitting well-architected PRs (e.g., multi-agent HF Spaces deployment [PR #3621](https://github.com/HKUDS/nanobot/pull/3621), memory governance [PR #3408](https://github.com/HKUDS/nanobot/pull/3408)), showing a high level of technical satisfaction and deep investment in the framework.

## 8. Backlog Watch
*   **[Issue #2828](https://github.com/HKSDS/nanobot/issues/2828) (DuckDuckGo Hangs):** Needs urgent maintainer attention due to host-level system impact. Requires investigation into subprocess isolation.
*   **[PR #3621](https://github.com/HKUDS/nanobot/pull/3621) (Multi-Agent HF Spaces):** A massive structural PR that has been open since May 4th. It needs architectural review from core maintainers to proceed.
*   **[PR #3408](https://github.com/HKUDS/nanobot/pull/3408) (MGP Memory Governance):** Open since April 23rd, this sidecar integration for governed cross-session memory is highly requested by power users but awaits review/approval.
*   **[PR #3729](https://github.com/HKUDS/nanobot/pull/3729) (Tool Plugin Refactor):** Changes the core tool registration architecture. Maintainer input is required to finalize the `ToolLoader` design before contributors build further tools upon it.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-12

## 1. Today's Overview
Hermes Agent experienced a highly active day, driven by a surge of community-reported bugs surrounding the latest CLI and TUI iterations. With 45 open issues and 44 open pull requests updated in the last 24 hours, the repository is buzzing with activity, much of it focused on refining the desktop experience and platform gateway stability. Contributors are heavily focused on plugin resilience, kanban worker bugs, and memory management. Overall, project health remains strong with rapid community engagement, though maintainers should monitor the spike in P1 terminal/CLI freezing bugs to prevent user friction.

## 2. Releases
- **desktop-pr20059-installers** (Ad-hoc)
  - **Changes:** Ad-hoc unsigned builds from `bb/gui` @ `bff052d61` specifically for installer UX smoke tests on PR #20059.
  - **Assets:** Includes macOS arm64 DMG, Windows x64 + arm64 NSIS, Linux x64 + arm64 AppImage.
  - **Migration Notes:** This is **not a signed stable release**. It is strictly intended for testing installer flows.

## 3. Project Progress
Today saw 6 PRs merged or closed, indicating active maintainer reviews focusing on build stability, analytics, and refactoring:
- **Analytics & Dashboard fixes:** PR [#24031](https://github.com/NousResearch/hermes-agent/pull/24031) and PR [#24030](https://github.com/NousResearch/hermes-agent/pull/24030) fixed a dashboard analytics crash caused by timezone handling (`zoneinfo.utcoffset`).
- **Build System:** PR [#23689](https://github.com/NousResearch/hermes-agent/pull/23689) closed an effort to bundle the TUI with esbuild, dropping runtime `node_modules` (TUI refactor). PR [#23694](https://github.com/NousResearch/hermes-agent/pull/23694) addressed native Windows build failures by replacing POSIX-only `chmod` commands in the npm build step.
- **Major Refactoring:** PR [#23978](https://github.com/NousResearch/hermes-agent/pull/23978) (Open) is making significant headway on a massive refactor of the 3,128-line agent `while` loop, decomposing it into an `AgentLoop` with middleware hooks.
- **Compress Reporting:** PR [#24025](https://github.com/NousResearch/hermes-agent/pull/24025) fixed manual `/compress` to accurately report no-ops instead of silently churning the session.

## 4. Community Hot Topics
The most discussed items reveal a strong user need for better multi-agent collaboration and smoother terminal workflows:
- **Multi-Agent Collaboration (Discord):** Issue [#14853](https://github.com/NousResearch/hermes-agent/issues/14853) (6 comments, 1 👍) highlights a major pain point for advanced users: running multiple specialized Hermes instances in shared channels results in zero visibility between agents. Users are desperately requesting history injection and cascade prevention.
- **Anthropic Auth HTTP 400:** Issue [#15080](https://github.com/NousResearch/hermes-agent/issues/15080) (8 comments) details persistent authentication failures for Claude Max 20x subscribers using native OAuth tokens. This is a blocking issue for a specific, high-value provider demographic.
- **Terminal Freezing on Windows & TUI:** Issue [#23694](https://github.com/NousResearch/hermes-agent/issues/23694) (1 comment, 2 👍) and Issue [#23920](https://github.com/NousResearch/hermes-agent/issues/23920) (3 comments, 1 👍) sparked significant discussion regarding destructive slash commands (`/new`, `/clear`) completely freezing the terminal input on the Windows beta and TUI.

## 5. Bugs & Stability
Several high-severity (P1) bugs were reported today, particularly affecting CLI input, TUI overlays, and provider context limits:
- **P1 - TUI & CLI Input Deadlocks:** 
  - Issue [#23853](https://github.com/NousResearch/hermes-agent/issues/23853): `/reload-mcp` causes a terminal deadlock in raw mode. 
  - Issue [#23919](https://github.com/NousResearch/hermes-agent/issues/23919): `/reset` and `/new` are swallowed by autocomplete in the TUI.
  - *Note: PR [#24025](https://github.com/NousResearch/hermes-agent/pull/24025) and PR [#24031](https://github.com/NousResearch/hermes-agent/pull/24031) address related input/state bugs.*
- **P1 - Telegram Reasoning Leak:** Issue [#7233](https://github.com/NousResearch/hermes-agent/issues/7233) reports that internal Chain-of-Thought reasoning is being rendered in user-facing Telegram chats after session resumes.
- **P2 - Unbounded Token Waste:** Issue [#24012](https://github.com/NousResearch/hermes-agent/issues/24012) notes the agent autonomously fires unverified alternative commands after tool failures, causing massive token waste.
- **P2 - Model Context Misdetection:** Issue [#23949](https://github.com/NousResearch/hermes-agent/issues/23949) (Closed) noted `kimi-k2.6` was incorrectly detected as having a 32K context window instead of 256K.
- **P2 - Bypassing Free-Only Models:** Issue [#24029](https://github.com/NousResearch/hermes-agent/issues/24029) reveals auxiliary tasks silently bypass user-enforced `:free` OpenRouter models, resulting in unexpected billing.

## 6. Feature Requests & Roadmap Signals
Feature requests are heavily trending toward enterprise workflows, platform parity, and tool governance:
- **Tool Permission Gating:** Issue [#21849](https://github.com/NousResearch/hermes-agent/issues/21849) proposes a comprehensive permission gating system beyond just shell commands, hinting at a future RBAC-style rollout.
- **Auto-launch Chromium CDP:** PR [#21612](https://github.com/NousResearch/hermes-agent/pull/21612) suggests an upcoming feature where Hermes automatically launches a local browser for CDP, vastly simplifying web automation setup.
- **Gateway Loop Detection:** PR [#24028](https://github.com/NousResearch/hermes-agent/pull/24028) introduces runtime bot-to-bot loop detection, a critical feature for preventing token drain in automated group chats.
- **JMAP Support:** Issue [#11424](https://github.com/NousResearch/hermes-agent/issues/11424) requests JMAP integration for email, signaling a shift toward modern, async messaging protocols.
- **Predictions for Next Version:** The next version will likely focus heavily on TUI/CLI input stabilization (fixing the daemon thread blocks), merged kanban fleet fixes (PRs [#24022](https://github.com/NousResearch/hermes-agent/pull/24022), [#24023](https://github.com/NousResearch/hermes-agent/pull/24023)), and the Feishu CardKit integration (PR [#23488](https://github.com/NousResearch/hermes-agent/pull/23488)).

## 7. User Feedback Summary
Users are deploying Hermes in complex, multi-service environments but are encountering friction with state management and platform-specific quirks:
- **Memory Bloat & Hygiene:** Advanced users running long-lived systemd services (Issue [#23799](https://github.com/NousResearch/hermes-agent/issues/23799), Issue [#24034](https://github.com/NousResearch/hermes-agent/issues/24034)) are frustrated by unbounded `state.db` WAL growth and "advisory-only" memory hygiene checks that allow the context to bloat with useless facts (Issue [#20595](https://github.com/NousResearch/hermes-agent/issues/20595)).
- **Windows Support:** Windows users are excited about the native beta but are currently hampered by hardcoded POSIX commands and path parsing bugs (Issue [#24032](https://github.com/NousResearch/hermes-agent/issues/24032)).
- **Configuration Hardcoding:** Multiple complaints (Issues [#24035](https://github.com/NousResearch/hermes-agent/issues/24035), [#23757](https://github.com/NousResearch/hermes-agent/issues/23757)) arose regarding paths and routes being hardcoded (e.g., `~/.hermes`, `/dashboard`), limiting customization for power users.

## 8. Backlog Watch
The following high-priority/impact items require immediate maintainer attention:
- **Agent Loop Refactor:** PR [#23978](https://github.com/NousResearch/hermes-agent/pull/23978) is a massive architectural change that needs careful review to avoid breaking core agent execution.
- **SQLite Permissions Security Flaw:** PR [#24027](https://github.com/NousResearch/hermes-agent/pull/24027) fixes a glaring security issue where `response_store.db` is created as world-readable (644) on macOS. This needs urgent merging and patching.
- **Smart Model Routing Bug:** Issue [#7798](https://github.com/NousResearch/hermes-agent/issues/7798) has been open since April 11. It breaks preflight compression for cheap models, directly impacting users trying to save on compute costs.
- **Discord Interactive Components:** PR [#19413](https://github.com/NousResearch/hermes-agent/pull/19413) (open since May 3) would bring Hermes to parity with modern Discord bots but is stalled and awaiting merge.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-05-12

## 1. Today's Overview
PicoClaw demonstrates high velocity and robust community engagement as it pushes towards the **v0.2.8** stable release. Today saw the publication of the `v0.2.8-nightly.20260511` automated build alongside significant activity across the repository, including 28 active pull requests and 8 closed issues. Major architectural leaps are being made in model configuration workflows, provider streaming support, and an innovative "agent self-evolution" framework. The high volume of third-party PRs—ranging from Yocto embedded layers to new search providers—indicates a thriving open-source ecosystem and strong hardware adaptability.

## 2. Releases
- **nightly: v0.2.8-nightly.20260511.6e6293e5** 
  - **Summary:** Automated nightly build cutting towards the upcoming `v0.2.8` release.
  - **Full Changelog:** [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)
  - *Note: As an automated nightly build, it may be unstable. Caution is advised for production deployments.*

## 3. Project Progress
A total of 9 PRs were merged or closed today, showing active maintainer review and feature merging:
*   **Agent Self-Evolution Foundation:** The core PR [#2847 (Feat/agent self evolution)](https://github.com/sipeed/picoclaw/pull/2847) was merged, introducing a safe loop for recording outcomes, clustering tasks, and auto-generating skill drafts.
*   **Streaming & Connectivity:** Real-time token streaming capabilities are expanding. Closed PRs include [#2581 (Recover Codex output from streamed message events)](https://github.com/sipeed/picoclaw/pull/2581) fixing ChatGPT backend streams, [#2645 (feat(bedrock): StreamingProvider)](https://github.com/sipeed/picoclaw/pull/2645), and [#2831 (feat(web,api): provider selection and model form foundation)](https://github.com/sipeed/picoclaw/pull/2831). Additionally, a new pico channel streaming PR was opened ([#2853](https://github.com/sipeed/picoclaw/pull/2853)).
*   **New Channels:** Merged [#2719 (feat(channels): add slack_webhook)](https://github.com/sipeed/picoclaw/pull/2719) allowing output-only message pushing to Slack.
*   **Configuration & Tooling:** Fixed a critical group trigger config bug ([#2565](https://github.com/sipeed/picoclaw/pull/2565)) and merged Telegram album buffering ([#2758](https://github.com/sipeed/picoclaw/pull/2758)). Documentation for the evolution config was also submitted ([#2852](https://github.com/sipeed/picoclaw/pull/2852)).

## 4. Community Hot Topics
*   **Codex OAuth / ChatGPT Backend Stream Parsing (Issue [#2674](https://github.com/sipeed/picoclaw/issues/2674)):** Received 4 thumbs-up and 3 comments. Users are experiencing empty responses when using OpenAI Codex OAuth. *Underlying need:* The ChatGPT backend streams items via `response.output_item.done` differently than standard API endpoints. (Addressed by merged PR [#2581](https://github.com/sipeed/picoclaw/pull/2581)).
*   **Missing Web Search API Fallback (Issue [#2582](https://github.com/sipeed/picoclaw/issues/2582)):** Users are frustrated that the agent stops entirely when a search API quota is exhausted (429 Rate Limit). The community strongly desires a `Brave → Tavily → Perplexity → DuckDuckGo` fallback chain.
*   **Web UI Model Configuration Overhaul (PRs [#2831](https://github.com/sipeed/picoclaw/pull/2831), [#2832](https://github.com/sipeed/picoclaw/pull/2832), [#2833](https://github.com/sipeed/picoclaw/pull/2833)):** A massive community contribution split into 3 PRs to introduce upstream model fetching, provider-aware validation, and connectivity testing in the Web UI. 

## 5. Bugs & Stability
*   **Severity: High** - **Gateway Fails to Load Channels on v0.2.7 ([#2690](https://github.com/sipeed/picoclaw/issues/2690)):** Docker startup silently drops all configured channels (e.g., QQ).
*   **Severity: High** - **Codex OAuth Empty Assistant Responses ([#2674](https://github.com/sipeed/picoclaw/issues/2674)):** Breaking standard workflows for ChatGPT backend users. *Fix Status: Merged in PR [#2581](https://github.com/sipeed/picoclaw/pull/2581), slated for v0.2.8.*
*   **Severity: Medium** - **Android Binary Execution Failure ([#2590](https://github.com/sipeed/picoclaw/issues/2590)):** `libpicoclaw.so` fails to execute on certain Android environments.
*   **Severity: Medium** - **History UI Truncation ([#2796](https://github.com/sipeed/picoclaw/issues/2796)):** When viewing chat history, only the final user message is visible; prior context is lost, severely impacting UX. 
*   **Severity: Low** - **DeepSeek Reasoning Drops ([#2740](https://github.com/sipeed/picoclaw/pull/2740)):** `reasoning_content` dropped during streaming. *Fix Status: PR Open.*

## 6. Feature Requests & Roadmap Signals
*   **Explicit Async Subagent Routing ([#2829](https://github.com/sipeed/picoclaw/issues/2829) / PR [#2830](https://github.com/sipeed/picoclaw/pull/2830)):** Proposal to prevent parent agents from re-executing when a spawned subagent returns. Signals a maturation of multi-agent orchestration capabilities.
*   **Unified Diff Preview for Files ([#2848](https://github.com/sipeed/picoclaw/issues/2848)):** Request to show standard CLI diffs for the `edit_file` tool instead of silently applying changes. Highly requested for AI-coding workflows.
*   **Serp API & Gemini Web Search Integration ([#2232](https://github.com/sipeed/picoclaw/issues/2232) / PR [#2763](https://github.com/sipeed/picoclaw/pull/2763)):** With Brave Search limiting free tiers, the community is actively integrating Serp API and Gemini grounding. *Likely to be included in v0.2.8.*
*   **Embedded / Edge Deployment:** PR [#2851 (Yocto/OpenEmbedded layer)](https://github.com/sipeed/picoclaw/pull/2851) and Issue [#2675 (Raspberry Pi support)](https://github.com/sipeed/picoclaw/issues/2675) show PicoClaw is aggressively targeting low-resource edge hardware.

## 7. User Feedback Summary
Users are highly enthusiastic about PicoClaw's extensibility across platforms (Android, Raspberry Pi, Docker) and its channel diversity (Slack, Telegram, Feishu). However, there is distinct friction regarding **configuration persistence** (issues with `config.json` overriding settings) and **API reliability** (services failing silently on rate limits or lacking error handshakes). The community shows a strong appetite for self-hosted, privacy-preserving AI capabilities, evidenced by the heavy usage of local models (GLM-5) and hardware integrations. 

## 8. Backlog Watch
The following critical items require immediate maintainer attention:
*   **Web UI Model Config Series:** PRs [#2832](https://github.com/sipeed/picoclaw/pull/2832) and [#2833](https://github.com/sipeed/picoclaw/pull/2833) are heavily depended upon by the closed PR [#2851](https://github.com/sipeed/picoclaw/pull/2851) and need priority review.
*   **Transient LLM Retries ([#2768](https://github.com/sipeed/picoclaw/pull/2768)):** Opened on May 4th and currently stale. This fixes a major pain point where OpenAI/OpenRouter 500 errors immediately crash the agent turn instead of retrying.
*   **Chat History Bug ([#2796](https://github.com/sipeed/picoclaw/issues/2796)):** Opened on May 7th. The UI failing to load historical multi-turn conversations is a critical usability blocker for power users.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-12

## 1. Today's Overview
NanoClaw (now officially relocated to the `nanocoai` GitHub organization) experienced a **high-activity, maintenance-heavy day**, with 17 pull requests updated and 10 of them merged or closed against 4 active issues and zero new releases. The focus is clearly on hardening the agent runtime: fixing edge cases around the Claude SDK's auto-compaction behavior, stabilizing the poll loop's message routing, and improving operational resilience. Community contributions are strong and diverse, spanning CLI provisioning fixes, an X/Twitter integration rewrite, and a new long-term memory skill — indicating a healthy, engaged contributor base pushing toward production readiness.

---

## 2. Releases
No new releases were published today.

---

## 3. Project Progress
Ten PRs were merged or closed, representing meaningful forward progress on runtime stability and project hygiene:

| PR | Area | Summary |
|---|---|---|
| [#2414](https://github.com/nanocoai/nanoclaw/pull/2414) | poll-loop | When an agent outputs bare text without `<message>` wrapping, the poll-loop now sends a one-shot correction nudge instead of silently dropping the output — capped at one per user turn to prevent infinite loops. |
| [#2413](https://github.com/nanocoai/nanoclaw/pull/2413) | compact | Moved the destination reminder (`<message to="name">`) to the **end** of compaction summaries so it survives truncation and isn't lost after compaction. |
| [#2412](https://github.com/nanocoai/nanoclaw/pull/2412) | revert | Reverted PR #2327 — the `compacted` event handler was injecting a `[system]`-tagged reminder that caused unintended agent messages. Removes the `compacted` variant from `ProviderEvent`. |
| [#1785](https://github.com/nanocoai/nanoclaw/pull/1785) | channels | Isolated channel `connect()` failures so a single broken channel (e.g., Gmail OAuth `invalid_grant`) no longer crashes the entire service on startup. |
| [#2419](https://github.com/nanocoai/nanoclaw/pull/2419) | skills | Added `/add-hindsight` skill (BYO Hindsight MCP) for per-group long-term memory, then **superseded by [#2420](https://github.com/nanocoai/nanoclaw/pull/2420)** which bundles the MCP wrapper directly. |
| [#1662](https://github.com/nanocoai/nanoclaw/pull/1662) | skills | Sentry IPC integration for structured error reporting from agent containers. |
| [#63](https://github.com/nanocoai/nanoclaw/pull/2463) | WhatsApp | Automatic reconnection handling for WhatsApp authentication stream errors. |
| [#2410](https://github.com/nanocoai/nanoclaw/pull/2410) | container | Gracefully handles missing `on_wake` column in `inbound.db` when host hasn't run migrations — prevents container restart loops. |
| [#2408](https://github.com/nanocoai/nanoclaw/pull/2408) | chore | Renamed all remaining `qwibitai/nanoclaw` references to `nanocoai/nanoclaw`. |
| [#2407](https://github.com/nanocoai/nanoclaw/pull/2407) | docs | Gated upstream PR review through workspace `/zenodotus` skill. |

**Still open and active:**
- [#2418](https://github.com/nanocoai/nanoclaw/pull/2418) — `fallbackModel` support in agent-runner (paired with issue [#2417](https://github.com/nanocoai/nanoclaw/issues/2417)).
- [#2420](https://github.com/nanocoai/nanoclaw/pull/2420) — Bundled Hindsight MCP wrapper (supersedes #2419).
- [#2416](https://github.com/nanocoai/nanoclaw/pull/2416) — CLI fix for missing `container_configs` row on `ncl groups create`.
- [#2409](https://github.com/nanocoai/nanoclaw/pull/2409) — X/Twitter integration rewrite: 25 tools, Linux support, full feature parity.
- [#2411](https://github.com/nanocoai/nanoclaw/pull/2411) — Re-injects task prompt after SDK auto-compaction.
- [#2406](https://github.com/nanocoai/nanoclaw/pull/2406) — Per-message reasoning-effort routing for heavy commands.
- [#2405](https://github.com/nanocoai/nanoclaw/pull/2405) — Delivers unwrapped output to sole destination after compaction.

---

## 4. Community Hot Topics
The most actively discussed items reveal core operational friction:

1. **[Issue #1984](https://github.com/nanocoai/nanoclaw/issues/1984) — Provider support for custom/local OpenAI-compat endpoints** (4 comments, 0 👍)
   - Open since April 24, this is the longest-active open issue today. Users report that despite documented "BYO endpoint" paths for Codex and OpenCode, non-blessed endpoints fail to route in practice. This signals **strong community demand for self-hosted and local model support**, critical for privacy-sensitive and air-gapped deployments.

2. **[Issue #2404](https://github.com/nanocoai/nanoclaw/issues/2404) — Double delivery from `send_message` MCP + `<message>` blocks** (1 comment)
   - An architectural bug where the MCP server subprocess and the poll-loop message parser both deliver the same message. This highlights the complexity of the dual-output-path design and suggests the messaging layer needs a deduplication strategy.

**Underlying needs:** The community is pushing NanoClaw toward **multi-model flexibility** (local endpoints, fallback models) and **messaging reliability** — both essential for production multi-agent orchestration.

---

## 5. Bugs & Stability
Ranked by severity:

| Severity | Bug | Issue | Fix PR | Status |
|---|---|---|---|---|
| **High** | `ncl groups create` skips `container_configs` row, causing first spawn to fail with "Container config not found" | [#2415](https://github.com/nanocoai/nanoclaw/issues/2415) | [#2416](https://github.com/nanocoai/nanoclaw/pull/2416) | Fix PR open |
| **High** | SDK auto-compaction swallows task prompt, container ends turn with zero output | (observed in [#2411](https://github.com/nanocoai/nanoclaw/pull/2411)) | [#2411](https://github.com/nanocoai/nanoclaw/pull/2411) | Fix PR open |
| **Medium** | Double message delivery when agent uses both `send_message` MCP tool and `<message>` blocks | [#2404](https://github.com/nanocoai/nanoclaw/issues/2404) | — | No fix PR yet |
| **Medium** | Missing `on_wake` column causes container restart loop when host not migrated | (related to [#2410](https://github.com/nanocoai/nanoclaw/pull/2410)) | [#2410](https://github.com/nanocoai/nanoclaw/pull/2410) | **Merged** |
| **Medium** | Compacted event handler injecting unintended `[system]` messages | [#2412](https://github.com/nanocoai/nanoclaw/pull/2412) (revert) | [#2412](https://github.com/nanocoai/nanoclaw/pull/2412) | **Merged** |
| **Low** | Bare text without `<message>` wrapping silently dropped | [#2414](https://github.com/nanocoai/nanoclaw/pull/2414) | [#2414](https://github.com/nanocoai/nanoclaw/pull/2414) | **Merged** |
| **Low** | Single broken channel crashes entire service on startup | [#1785](https://github.com/nanocoai/nanoclaw/pull/1785) | [#1785](https://github.com/nanocoai/nanoclaw/pull/1785) | **Merged** |

**Assessment:** The compaction subsystem is the primary source of instability — three separate fix PRs (#2412, #2413, #2414) plus two more open (#2411, #2405) all address compaction-related message loss or corruption. This is the area most likely to produce user-visible failures in production.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Signal Strength | Notes |
|---|---|---|---|
| **Model fallback on rate limits** | [#2417](https://github.com/nanocoai/nanoclaw/issues/2417) / [#2418](https://github.com/nanocoai/nanoclaw/pull/2418) | 🟢 High — PR already open with detection logic | Exposes Claude Agent SDK's `fallbackModel` so Opus → Sonnet failover is automatic. Likely to land soon. |
| **Long-term memory (Hindsight)** | [#2420](https://github.com/nanocoai/nanoclaw/pull/2420) | 🟢 High — working implementation | Bundled MCP wrapper for Hindsight memory engine. Per-group memory banks with recall/store/search tools. |
| **Custom OpenAI-compatible endpoints** | [#1984](https://github.com/nanocoai/nanoclaw/issues/1984) | 🟡 Medium — long-open, no PR yet | Strong demand but no implementation. A likely next-version target given community pressure. |
| **Per-message reasoning effort** | [#2406](https://github.com/nanocoai/nanoclaw/pull/2406) | 🟡 Medium — open PR | Dynamically adjusts reasoning effort per message based on command heaviness. Cost-optimization play. |
| **Expanded X/Twitter integration** | [#2409](https://github.com/nanocoai/nanoclaw/pull/2409) | 🟡 Medium — ambitious rewrite | 25-tool surface, Linux support. Large scope may require extended review. |

**Prediction for next release:** Model fallback (#2418), compaction fixes (#2411, #2405, #2413), and the CLI provisioning fix (#2416) are the strongest candidates for inclusion.

---

## 7. User Feedback Summary
- **Pain point — compaction reliability:** Multiple users and contributors (gavrielc, matt1995ai, romanbsd) have encountered agents silently dropping messages or producing zero output after SDK auto-compaction. This is the dominant operational frustration.
- **Pain point — multi-provider support:** Users with local/self-hosted models ([#1984](https://github.com/nanocoai/nanoclaw/issues/1984)) feel the documented BYO endpoint path is misleading — it exists on paper but doesn't work in practice.
- **Use case — production multi-agent:** The Hindsight memory skill ([#2420](https://github.com/nanocoai/nanoclaw/pull/2420)) and per-group isolation patterns suggest users are running long-lived agent groups that need persistent context across sessions.
- **Use case — cost optimization:** The `fallbackModel` ([#2417](https://github.com/nanocoai/nanoclaw/issues/2417)) and dynamic reasoning-effort ([#2406](https://github.com/nanocoai/nanoclaw/pull/2406)) features both address token spend — indicating users are running at scale and hitting cost ceilings.
- **Contributor experience:** The org rename from `qwibitai` to `nanocoai` ([#2408](https://github.com/nanocoai/nanoclaw/pull/2408)) and multiple PRs with `follows-guidelines` tags suggest an active effort to professionalize the contribution workflow.

---

## 8. Backlog Watch
| Item | Open Since | Concern |
|---|---|---|
| [Issue #1984 — Custom OpenAI-compat endpoints](https://github.com/nanocoai/nanoclaw/issues/1984) | 2026-04-24 (18 days) | Most-discussed open issue with no linked PR. Users are hitting documented-but-nonfunctional feature paths. High expectation gap. |
| [PR #63 — WhatsApp auth retry](https://github.com/nanocoai/nanoclaw/pull/63) | 2026-02-03 (98 days) | Closed today but was open for **3 months**. Suggests review bottleneck for channel integrations. |
| [PR #1662 — Sentry IPC integration](https://github.com/nanocoai/nanoclaw/pull/1662) | 2026-04-05 (37 days) | Closed today after 5 weeks. Observability is critical for production — long review cycles here are risky. |
| [PR #1785 — Channel connect isolation](https://github.com/nanocoai/nanoclaw/pull/1785) | 2026-04-15 (27 days) | Closed today. A single broken OAuth token crashing the entire service is a high-severity operational issue that sat open for nearly a month. |

**Recommendation:** The maintainer team should prioritize triaging [#1984](https://github.com/nanocoai/nanoclaw/issues/1984) (custom endpoints) given its age and community signal, and consider a structured review process to reduce the multi-week latency on operational-critical fixes like #1785.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-12

## 1. Today's Overview
NullClaw is currently experiencing a moderate-to-high level of open-source activity, driven significantly by an ongoing hackathon (WB × OpenSource). The project saw 2 merged/closed Pull Requests and 5 newly opened or updated PRs in the last 24 hours, alongside 2 active issues. While there are no new software releases today, the development pipeline is heavily focused on core infrastructure reliability, specifically concerning DNS/networking resolution, gateway stability across diverse architectures (including Android and riscv64), and subprocess security. The overall project health appears active and iterative, with maintainers and community members aggressively patching startup and connectivity regressions.

## 2. Releases
No new releases were published today. The latest stable versions remain in the `2026.5.x` lineage. 

## 3. Project Progress
Today's progress was defined by targeted infrastructure fixes and the merging of stability enhancements:
*   **Shell Sandbox Optimization ([PR #906](https://github.com/nullclaw/nullclaw/pull/906))**: *Merged*. This PR defers shell sandbox auto-detection until the shell tool is actually invoked. This successfully prevents sandbox probe subprocesses from blocking gateway/channel startup, streamlining the bot's boot sequence.
*   **Android/DNS Gateway Reliability ([PR #905](https://github.com/nullclaw/nullclaw/pull/905))**: *Merged*. Resolved an issue where Android gateway startups would stall by forcing retries across all DNS-resolved addresses rather than just the first. It also implemented lazy loading for the local A2A runtime in daemon mode.

Active development continues on a major cron engine ([PR #783](https://github.com/nullclaw/nullclaw/pull/783)), child process security probing ([PR #883](https://github.com/nullclaw/nullclaw/pull/883)), and further Discord websocket stabilizations ([PR #910](https://github.com/nullclaw/nullclaw/pull/910)).

## 4. Community Hot Topics
*   **Network/DNS Regression in 2026.5.x ([Issue #902](https://github.com/nullclaw/nullclaw/issues/902))**: This was the most active discussion today (2 comments). Users reported a critical `HostResolutionFailed` error when using the `siliconflow` provider on version 2026.5.x, noting that 2026.4.9 works perfectly. This underlying bug in HTTP/DNS client refactoring is driving massive community engagement.
*   **Hackathon Contributions ([PR #908](https://github.com/nullclaw/nullclaw/pull/908) & [PR #911](https://github.com/nullclaw/nullclaw/pull/911))**: Community members are actively submitting expansive PRs for the WB × OpenSource Hackathon. Notable mentions include `ShEvVl` proposing network/DDG search fixes, and `gosIX22` introducing a privacy-preserving secret triage system for workspace audits. 

## 5. Bugs & Stability
Ranked by severity:
1.  **Critical - Provider Host Resolution Failure ([Issue #902](https://github.com/nullclaw/nullclaw/issues/902))**: The upgrade to 2026.5.x breaks provider connections due to a regression in the built-in DNS client. This impacts core functionality. *Fix Status: Community PRs targeting `http_util.zig` (like [PR #908](https://github.com/nullclaw/nullclaw/pull/908)) have been submitted to address this, though not yet merged.*
2.  **High - Discord Heartbeat Starvation & Stale Resumes ([PR #910](https://github.com/nullclaw/nullclaw/pull/910))**: Blocking `io_mu` mutexes during websocket reads were causing gateway starvation. *Fix Status: Open PR submitted, soak-tested across multiple architectures.*
3.  **Medium - Silent Child Process Failures ([PR #883](https://github.com/nullclaw/nullclaw/pull/883))**: A known Zig stdlib bug causes failed `execve` calls to fail silently. *Fix Status: Open PR submitted to pre-verify executable paths before spawning.*

## 6. Feature Requests & Roadmap Signals
*   **Telemetry and Performance Reporting ([Issue #909](https://github.com/nullclaw/nullclaw/issues/909))**: User `jacktang` formally requested an agent performance statistical report. Requested metrics include token I/O, tool invoke success/failure rates, and security warnings. This signals a strong user need for observability in autonomous agent loops.
*   **Advanced Cron Scheduling ([PR #783](https://github.com/nullclaw/nullclaw/pull/783))**: A massive, long-running PR that introduces a DB-backed scheduler with history tracking, timezone offsets, and JSON CLI outputs. Given its scope, this is likely to be a flagship feature in the next major release.

## 7. User Feedback Summary
Real-world users are currently expressing a mixture of frustration regarding environment upgrades and a strong desire for better operational metrics. The regression in the 2026.5.x network stack has caused deployment friction for users relying on specific AI providers like SiliconFlow. Conversely, advanced users are heavily invested in NullClaw as an enterprise-grade tool, evidenced by requests for robust token-tracking and audit logs. Satisfaction is high regarding the project's responsiveness to niche deployment environments (Android/riscv64).

## 8. Backlog Watch
*   **[PR #783](https://github.com/nullclaw/nullclaw/pull/783) (feat(cron))**: Submitted over a month ago (April 7), this massive architectural addition is still open. It requires urgent maintainer review to either approve, request changes, or merge to prevent merge conflicts as the codebase evolves.
*   **[PR #883](https://github.com/nullclaw/nullclaw/pull/883) (probe: resolve executable)**: Open since May 3rd, this security-minded fix addresses a fundamental issue with Zig's stdlib but seems stalled. Maintainer validation is needed to push this forward.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-12

## 1. Today's Overview
IronClaw is experiencing a massive spike in architectural activity, with the development team aggressively merging components for the upcoming "Reborn" agent runtime engine. In the last 24 hours, the project saw 50 updated Pull Requests (31 merged) and 38 updated Issues (15 closed), indicating high-velocity, coordinated development. The focus remains heavily backend/architectural, specifically modularizing the agent loop, turn coordination, and trust boundaries. Meanwhile, non-core contributors are actively addressing vital user-facing elements like mobile UI, MCP retry logic, and Slack/Telegram channel integrations. 

## 2. Releases
No new official releases were cut today. The team is heavily focused on merging foundational architectural blocks for the "Reborn" engine, likely stabilizing these changes before a formal version bump. 

## 3. Project Progress
Development is completely dominated by the **Reborn Initiative** (Epic [#2987](https://github.com/nearai/ironclaw/issue/2987)), which aims to rebuild IronClaw's agent loop with strict boundaries for skills, tools, and turns. 
*   **Agent Loop & Model Routing:** Merged PR [#3462](https://github.com/nearai/ironclaw/pull/3462) added user-selectable model routes and provider pools. Merged PR [#3470](https://github.com/nearai/ironclaw/pull/3470) introduced a deterministic, trust-aware `SkillContextService`.
*   **Persistence & Memory:** Merged PR [#3468](https://github.com/nearai/ironclaw/pull/3468) landed direct DB operations for loop checkpoint mappings, and merged PR [#3471](https://github.com/nearai/ironclaw/pull/3471) added the production adapter for `MemoryPromptContextService`.
*   **Security & Trust:** Merged PR [#3460](https://github.com/nearai/ironclaw/pull/3460) established a trusted `LoopExitApplier`, while opened PR [#3494](https://github.com/nearai/ironclaw/pull/3494) established the trust-boundary hardening baseline. 
*   **Refactoring:** Merged PR [#3416](https://github.com/nearai/ironclaw/pull/3416) hid provider-specific auth and embeddings config behind clean facades, removing backend-specific leaks from the main binary.
*   **Community / Frontend:** External contributor `italic-jinxin` opened PR [#3461](https://github.com/nearai/ironclaw/pull/3461) replacing the cramped mobile UI with a unified hamburger drawer. Contributor `hanakannzashi` advanced PR [#3004](https://github.com/nearai/ironclaw/pull/3004) to add dedicated image tool configuration.

## 4. Community Hot Topics
*   **Docker Sandbox Onboarding Pain (6 👍):** Issue [#748](https://github.com/nearai/ironclaw/issue/748) remains highly popular. Users are frustrated that the Docker sandbox is effectively broken for local setups because `auto_pull_image: true` looks for a public Docker Hub image that doesn't exist. 
*   **Defining the Reborn Runway:** Issue [#3484](https://github.com/nearai/ironclaw/issue/3484) was opened today to establish a stable contributor runway. The underlying need is clear: the core team is building a highly proprietary kernel and needs a safe, well-documented API surface so external developers can port Skills, Tools, and MCP integrations without touching core internals.
*   **LLM Provider Abstraction:** PR [#3416](https://github.com/nearai/ironclaw/pull/3416) generated notable interest by finally abstracting provider-specific authentication (OpenAI, Anthropic, etc.) behind verb-based public surfaces.

## 5. Bugs & Stability
*   **P1 - Telegram Silent Failures:** Issue [#2903](https://github.com/nearai/ironclaw/issue/2903) reports that Telegram bots fail silently when LLM responses exceed Telegram's character limits, leaving users without a reply or error notification.
*   **P1 - File System Misrouting:** Issue [#2905](https://github.com/nearai/ironclaw/issue/2905) highlights a bug in hosted production environments where the agent saves files to `/home/agent` (an inaccessible path for users) instead of the user's workspace directory.
*   **P2 - Gmail Integration 502:** Issue [#3128](https://github.com/nearai/ironclaw/issue/3128) reports 502 errors during the Gmail OAuth callback flow via the chat assistant.
*   **P2 - Multi-tenant Admin Settings Leak:** Issue [#3490](https://github.com/nearai/ironclaw/issue/3490) reveals a critical multi-tenant bug where admin tool restrictions (e.g., disabling "shell") do not propagate to user agents. *No fix PR is currently attached.*
*   **P2 - Markdown in Slack:** Issue [#3499](https://github.com/nearai/ironclaw/issue/3499) notes the Slack channel integration sends raw LLM Markdown instead of converting to Slack's `mrkdwn` format.

## 6. Feature Requests & Roadmap Signals
*   **`ironclaw-reborn` Binary & Packaging:** Issue [#3069](https://github.com/nearai/ironclaw/issue/3069) and [#3483](https://github.com/nearai/ironclaw/issue/3483) strongly signal that the next major milestone will be packaging the Reborn engine as a standalone executable alongside the standard `ironclaw` binary.
*   **UI/UX Discoverability:** A major user request in Issue [#3500](https://github.com/nearai/ironclaw/issue/3500) requests better onboarding signals for the Local Web UI, which currently leaves fresh local installs appearing broken and undiscoverable.
*   **Python-Only Engine:** PR [#2819](https://github.com/nearai/ironclaw/pull/2819) (Python-only engine) was updated today, signaling continued exploration into providing alternatives to Rust-based nudges/heuristics for agent execution.

## 7. User Feedback Summary
Users appreciate the rapid development but experience friction in deploying and accessing the agent locally. The primary pain points are **installation setup** (missing Docker images, undiscoverable local Web UI) and **channel formatting limitations** (Telegram silent failures, Slack markdown issues, Gmail 502s). There is a strong desire among enterprise/power users for reliable multi-tenant admin controls, as demonstrated by the immediate reporting of the tool-access leak. 

## 8. Backlog Watch
*   **Docker Publishing (Issue [#748](https://github.com/nearai/ironclaw/issue/748)):** Despite 6 upvotes and being open since March 2026, there is no visible movement from maintainers to publish the `ironclaw-worker` image to a public registry.
*   **Base URL Parsing (PR [#2892](https://github.com/nearai/ironclaw/pull/2892)):** Open since late April, this PR fixes failing live tests caused by trailing whitespace in `LLM_BASE_URL`. It needs a final maintainer review to unblock provider matrix testing.
*   **Tokio & Ecosystem Deps (PR [#3360](https://github.com/nearai/ironclaw/pull/3360) & [#3361](https://github.com/nearai/ironclaw/pull/3361)):** Dependabot PRs bumping the Tokio ecosystem and 43+ other dependencies are stalled and awaiting core team validation and merging.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-12

## 1. Today's Overview
LobsterAI experienced exceptionally high development velocity over the past 24 hours, marked by the merging of 30 Pull Requests, indicating an aggressive feature stabilization and bug-fix sprint. The project remains highly active, with contributors focusing heavily on UI refinement, artifact preview stability, and multi-instance IM (Instant Messaging) integrations like POPO. Despite the high merge volume, there were no new official releases issued today, though the merging of the `release/2026.05.08` branch suggests a formal release is imminent. However, one active bug report regarding infinite `NO_REPLY` states highlights a lingering issue in asynchronous task handling.

## 2. Releases
**No new official releases were published today.** 

*(Note: Although no formal release was cut on this specific day, PR [#1902](https://github.com/netease-youdao/LobsterAI/pull/1902) merged the `release/2026.05.01` branch, and several subsequent PRs are targeting a `release/2026.05.08` branch, indicating a continuous delivery cycle.)*

## 3. Project Progress
The project saw massive progress, with 30 PRs merged across multiple domains including rendering, memory management, artifact preview, and IM integrations. Key advancements include:

*   **UI & Core Refactoring:** Significant backend dead-code removal was achieved by eliminating the deprecated `yd_cowork` engine in favor of a unified `openclaw` path ([#1884](https://github.com/netease-youdao/LobsterAI/pull/1884)), netting a 65-line reduction. The input UI was also optimized ([#1946](https://github.com/netease-youdao/LobsterAI/pull/1946)).
*   **Memory & Dreaming Settings:** The memory page was refactored from a flat layout into tabs (Memory, Embedding, Dreaming), adding read-only views for the OpenClaw Dreaming diary via new IPC channels ([#1943](https://github.com/netease-youdao/LobsterAI/pull/1943)). Main agent workspace was successfully decoupled from the user-configurable working directory to prevent state loss ([#1890](https://github.com/netease-youdao/LobsterAI/pull/1890)), followed by a migration path fix ([#1894](https://github.com/netease-youdao/LobsterAI/pull/1894)).
*   **IM & Cowork:** High progress in IM support, specifically POPO multi-bot instances ([#1883](https://github.com/netease-youdao/LobsterAI/pull/1883)), alongside pagination support for cowork conversation lists and message history to resolve performance bottlenecks ([#1907](https://github.com/netease-youdao/LobsterAI/pull/1907)). 
*   **Artifacts & Rendering:** Resolved several rendering bugs, including code block backgrounds failing on horizontal scroll ([#1944](https://github.com/netease-youdao/LobsterAI/pull/1944)) and patching multiple file preview module bugs (Mermaid zoom, PPTX sandbox, path resolution) ([#1945](https://github.com/netease-youdao/LobsterAI/pull/1945)).

## 4. Community Hot Topics
There are no highly active discussions (high comment/reaction counts) in the issues or PRs updated within the last 24 hours. 

However, the most critical community signal is **Issue [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849)**, which reports instances of infinite `NO_REPLY` or premature output truncation during follow-up questions. Although it only has 1 comment, it represents a direct impact on core user experience. Underlying this is a clear community need for absolute reliability in streaming responses and state management, particularly as the agent handles complex tool calls that might complete prematurely.

## 5. Bugs & Stability
Several bugs affecting UX and stability were identified and patched in today's sprint, ranked by severity:

1.  **High Severity - Stream Sync / Task Completion:** Users reported tasks marked as "complete" while the model is still outputting, leading to infinite `NO_REPLY` or blank responses. A fix for message tail `NO_REPLY` synchronization was merged ([#1940](https://github.com/netease-youdao/LobsterAI/pull/1940)). 
2.  **High Severity - Streaming Text Truncation:** A bug where the `computeSuffixPrefixOverlap` function mistakenly swallowed repeated characters (e.g., converting `.pptx` to `.ptx`) during streaming token chunking. This was fixed by removing the flawed overlap logic ([#1908](https://github.com/netease-youdao/LobsterAI/pull/1908)).
3.  **Medium Severity - Windows File Previews:** Windows users experienced duplicate preview cards and `ENOENT` path errors (e.g., `D:\D:\path`) due to path resolution bugs between `file:///` and tool-derived paths. Fixed in ([#1909](https://github.com/netease-youdao/LobsterAI/pull/1909)).
4.  **Low Severity - UI Glitches:** Blurry settings icons on low-DPI displays and metadata rows (timestamp/copy) getting stuck on click were fixed ([#1942](https://github.com/netease-youdao/LobsterAI/pull/1942)). Furthermore, code block background rendering glitches during horizontal scrolling were resolved ([#1944](https://github.com/netease-youdao/LobsterAI/pull/1944)).

## 6. Feature Requests & Roadmap Signals
Based on the closed PRs and issue context, the immediate roadmap is heavily focused on **Multi-Agent / Multi-Instance architecture** and **Memory management**:

*   **Multi-Instance IM Bots:** The upgrade of the POPO plugin to support multiple bot instances ([#1883](https://github.com/netease-youdao/LobsterAI/pull/1883)) signals a push toward allowing users to manage diverse or redundant communication endpoints from a single client.
*   **Advanced Memory & Dreaming:** The UI refactor to include "Dreaming" tabs ([#1943](https://github.com/netease-youdao/LobsterAI/pull/1943)) indicates the project is moving toward allowing users to visually inspect and manage the agent's background memory consolidation processes.
*   **AI-Assisted Troubleshooting:** The introduction of an "AI Diagnostics" button for email (IMAP/SMTP) connectivity failures ([#1916](https://github.com/netease-youdao/LobsterAI/pull/1916)) highlights a roadmap signal toward self-healing or LLM-assisted network configuration.
*   **Prediction for Next Version:** The upcoming release will likely heavily feature the new pagination system for long chats ([#1907](https://github.com/netease-youdao/LobsterAI/pull/1907)) and an overhauled memory settings UI.

## 7. User Feedback Summary
*   **Pain Points:** Users are experiencing frustrating interruptions during deep conversations (follow-up questions), where the AI simply stops outputting text or spams `NO_REPLY`. This creates a perception of the AI "breaking" mid-thought. Additionally, Windows users have been dealing with clunky file-handling behaviors.
*   **Use Cases:** The volume of fixes around Mermaid, PPTX, and file previews ([#1945](https://github.com/netease-youdao/LobsterAI/pull/1945)) shows that users are actively utilizing LobsterAI for document generation and visualization tasks.
*   **Satisfaction/Dissatisfaction:** While user satisfaction seems generally positive given the rich feature set, the presence of basic streaming bugs (character swallowing, premature task completion) suggests underlying dissatisfaction with response reliability. The maintainers' quick response in patching these today is a strong positive signal.

## 8. Backlog Watch
*   **Dependency Management PRs Ignored:** PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (a `dependabot[bot]` PR to bump `electron` from 40.2.1 to 42.0.1) has been open since April 2, 2026. It has zero comments and remains unmerged. Given the active merging of other PRs, this major Electron bump might be delayed due to breaking changes or QA testing requirements, but it requires maintainer attention or a status update.
*   **Long-term UX issues:** The core issue of state management during streaming ([#1849](https://github.com/netease-youdao/LobsterAI/issues/1849)) has been open since late April. While a fix ([#1940](https://github.com/netease-youdao/LobsterAI/pull/1940)) was submitted today, the issue should be monitored to ensure the patch completely resolves the race conditions for users.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the project digest for Moltis based on the repository data from 2026-05-12.

### 1. Today's Overview
Moltis is currently demonstrating strong project health and responsive maintenance, evidenced by a zero backlog in recently active issues and rapid bug resolution. Over the past 24 hours, the project successfully resolved 3 open bugs and merged 2 corresponding pull requests, indicating a highly synchronized development workflow. Although there were no new version releases today, the rapid patching of installation and sandbox environment bugs highlights an active commitment to platform stability. Overall, the project is in a state of active maintenance, focusing heavily on developer experience and deployment reliability.

### 2. Releases
No new releases were recorded today (2026-05-12).

### 3. Project Progress
Project progress today was strictly focused on hardening the deployment and sandbox environments. Two significant PRs were merged/closed:
*   **[PR #992](https://github.com/moltis-org/moltis/pull/992) `fix(install): avoid Proxmox Docker prompt failure`**: Fixed an installation blocker for Proxmox LXC environments where a Docker sandbox prompt failed due to missing interactive stdin.
*   **[PR #989](https://github.com/moltis-org/moltis/pull/992) `fix(sandbox): update discrawl module path`**: Resolved broken sandbox container builds by updating the `discrawl` Go module path from `steipete` to `openclaw`, and introduced a Dockerfile regression assertion to prevent future path breakages.

### 4. Community Hot Topics
The most actively discussed item today was **[Issue #990](https://github.com/moltis-org/moltis/issues/990) `[Bug]: User defined agent modes doesn't work`**, which garnered 1 comment. The underlying need here revolves around **customizability and user autonomy**. Users of personal AI assistants heavily rely on "agent modes" to tailor the AI's persona, workflow, or response behavior. When user-defined modes fail, it strikes at a core value proposition of open-source AI platforms. The fact that this issue was quickly closed suggests maintainers either swiftly resolved it or provided an immediate workaround.

### 5. Bugs & Stability
Today's bug reports were heavily concentrated on infrastructure, deployment, and configuration. All reported bugs were addressed and closed rapidly, demonstrating excellent stability management. Ranked by severity:
1.  **Sandbox Build Failure (Critical):** **[Issue #988](https://github.com/moltis-org/moltis/issues/988)** reported that external `discrawl` repo URL changes completely broke the sandbox container build. *Status: Fixed by [PR #989](https://github.com/moltis-org/moltis/pull/989).*
2.  **Deployment/Installation Blocker (High):** **[Issue #991](https://github.com/moltis-org/moltis/issues/991)** highlighted a script failure during Proxmox LXC creation, which hinders self-hosting deployments. *Status: Fixed by [PR #992](https://github.com/moltis-org/moltis/pull/992).*
3.  **Core Feature Bug (Medium):** **[Issue #990](https://github.com/moltis-org/moltis/issues/990)** revealed that user-defined agent modes were malfunctioning. *Status: Closed, indicating a fix or patch was applied.*

### 6. Feature Requests & Roadmap Signals
There were no explicit feature requests opened in the last 24 hours. However, the integration of the `openclaw/discrawl` module (seen in PR #989) signals that the project roadmap actively involves expanding or maintaining robust web-scraping/crawling skills for the AI agents within their sandboxed environments. 

### 7. User Feedback Summary
Real user pain points today center around **self-hosting friction and third-party dependency management**:
*   **Self-Hosting Environments:** Users deploying Moltis via Proxmox (LXC) are experiencing environment-specific friction. The prompt failures in non-interactive shells indicate that users are heavily utilizing automated infrastructure-as-code setups.
*   **Agent Customization:** The bug in "user-defined agent modes" highlights a user base eager to deeply personalize their AI assistants rather than relying on default configurations.
*   **Overall Satisfaction:** Despite the bugs, the lack of negative reactions (👍 at 0 across the board) and the rapid turnaround time on fixes suggest a highly satisfactory relationship between the user base and the maintainers.

### 8. Backlog Watch
Based on the data from the past 24 hours, the active backlog is exceptionally clean. All 3 recently updated issues and 2 PRs were successfully closed. There are no long-unanswered critical issues or pending PRs requiring immediate maintainer attention visible in today's dataset. The project appears to be operating a highly efficient zero-bug backlog policy for incoming reports.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-05-12

## 1. Today's Overview
CoPaw (internally mirrored as QwenPaw in repository links) is currently experiencing high development velocity and robust community engagement. Over the last 24 hours, the project saw 49 issues updated (28 open/active, 21 closed) and 35 pull requests updated (19 open, 16 merged/closed), indicating an active and responsive maintainer team. The focus is heavily split between stabilizing existing infrastructure—such as session management, cron jobs, and network reconnections—and pushing forward significant new capabilities like plugin management, memory distillation, and desktop UI enhancements. While no new software version was released today, the volume and quality of merged PRs suggest that a major stability and feature-drop release is imminent.

## 2. Releases
There were **0 new releases** published today. The community and developers are actively addressing bugs associated with the latest iterations (`v1.1.5.post2` and `v1.1.6`), paving the way for a stable release in the near future.

## 3. Project Progress
Today was highly productive for the project, with 16 PRs merged/closed. Key merged contributions include:
*   **Session & State Stability:** Fixed a critical bug where session history disappeared or routed messages incorrectly ([PR #4203](https://github.com/agentscope-ai/QwenPaw/pull/4203)), and resolved provider configuration issues ([PR #4186](https://github.com/agentscope-ai/QwenPaw/pull/4186)).
*   **Chat Enhancements:** Implemented support for multiple chat attachments ([PR #4206](https://github.com/agentscope-ai/QwenPaw/pull/4206)), added agent avatar upload capabilities ([PR #1791](https://github.com/agentscope-ai/QwenPaw/pull/1791)), and added DingTalk quoted message processing ([PR #4209](https://github.com/agentscope-ai/QwenPaw/pull/4209)).
*   **Core Memory & Agents:** Advanced auto-memory management features ([PR #4204](https://github.com/agentscope-ai/QwenPaw/pull/4204)), asynchronous execution for `delegate_external_agent` ([PR #4197](https://github.com/agentscope-ai/QwenPaw/pull/4197)), and browser batch actions ([PR #4139](https://github.com/agentscope-ai/QwenPaw/pull/4139)).

Active "Under Review" PRs show a strong future pipeline, including a Tauri 2.x desktop app replacement ([PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)) and a memory distillation tool ([PR #4171](https://github.com/agentscope-ai/QwenPaw/pull/4171)).

## 4. Community Hot Topics
The most actively discussed issues reveal a strong community focus on system reliability, provider compatibility, and external integrations:
*   **Model Provider Failures:** Upgrading to v1.1.5.post2 broke the `opencode` provider ([Issue #4133](https://github.com/agentscope-ai/QwenPaw/issues/4133), 10 comments), and users are experiencing API key recognition failures with DashScope ([Issue #4159](https://github.com/agentscope-ai/QwenPaw/issues/4159), 4 comments). This highlights that multi-provider API routing is a fragile point for users.
*   **Cron Job & Network Stability:** Users are frustrated by cron jobs failing to test properly, greeting users with "I noticed that you have interrupted me" ([Issue #2429](https://github.com/agentscope-ai/QwenPaw/issues/2429), 10 comments), and network failures causing permanent disconnections when the HEARTBEAT.md feature is enabled ([Issue #4017](https://github.com/agentscope-ai/QwenPaw/issues/4017), 7 comments). 
*   **Plugin Ecosystem:** A highly active PR aims to introduce console support for installing and uninstalling plugins ([PR #4214](https://github.com/agentscope-ai/QwenPaw/pull/4214)), signaling strong community demand for a modular agent architecture.

## 5. Bugs & Stability
Several high-severity bugs impacting user experience and core functionality were reported today:
*   **High Severity - UI & Memory Sync:** A critical bug where auto-memory writes to files but fails to sync the vector index, causing new sessions to lose memory context ([Issue #4220](https://github.com/agentscope-ai/QwenPaw/issues/4220)). Additionally, malformed tool use histories are permanently breaking chat sessions ([Issue #4185](https://github.com/agentscope-ai/QwenPaw/issues/4185)).
*   **High Severity - Provider APIs:** DashScope configurations are being ignored at runtime, leading to 401 Unauthorized errors. *Fix Status:* Resolved in today's merged [PR #4186](https://github.com/agentscope-ai/QwenPaw/pull/4186).
*   **Medium Severity - Cron & Network:** Cron concurrency leaks and "zombie sessions" are plaguing automated tasks. *Fix Status:* Actively addressed in open PRs [PR #4084](https://github.com/agentscope-ai/QwenPaw/pull/4084) and [PR #4223](https://github.com/agentscope-ai/QwenPaw/pull/4223). 
*   **Medium Severity - UX:** Action logs are delayed until completion, preventing users from stopping runaway agents ([Issue #4170](https://github.com/agentscope-ai/QwenPaw/issues/4170)), and `execute_shell_command` flashes annoying console windows on Windows ([Issue #4123](https://github.com/agentscope-ai/QwenPaw/issues/4123)). 

## 6. Feature Requests & Roadmap Signals
User requests today provide clear signals for the CoPaw roadmap:
*   **Chat UX Enhancements:** Users want native support for uploading multiple attachments simultaneously ([Issue #4192](https://github.com/agentscope-ai/QwenPaw/issues/4192)). *Prediction:* Will likely be included in the next release, as [PR #4206](https://github.com/agentscope-ai/QwenPaw/pull/4206) was quickly merged today.
*   **Shell Customization:** Clamor for customizable shell environments (instead of hardcoded `/bin/sh` or Windows PowerShell 5) to fix encoding and compatibility issues ([Issue #3767](https://github.com/agentscope-ai/QwenPaw/issues/3767)). *Prediction:* Highly likely for next version, as [PR #4215](https://github.com/agentscope-ai/QwenPaw/pull/4215) implementing this is actively under review.
*   **Model Fallback Mechanism:** A request for fallback model options when primary providers go offline ([Issue #4011](https://github.com/agentscope-ai/QwenPaw/issues/4011)). This aligns with a broader need for resilience and will likely be prioritized soon.

## 7. User Feedback Summary
The general user sentiment is a mix of excitement for CoPaw's expanding capabilities (like native Feishu voice bubbles and Tauri desktop apps) and frustration with foundational reliability. Users operating in multilingual or mixed-OS environments are particularly impacted—for instance, file names mixing Chinese, English, and numbers are getting corrupted by unexpected spaces ([Issue #4104](https://github.com/agentscope-ai/QwenPaw/issues/4104)), and non-English users are finding it hard to set default agents in the desktop app ([Issue #4182](https://github.com/agentscope-ai/QwenPaw/issues/4182)). Overall, users love the agent integrations but strongly desire more robust error handling and real-time execution transparency.

## 8. Backlog Watch
Maintainers should direct their attention to the following stale or complex ongoing items:
*   **PR [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) (Tauri 2.x Desktop App):** A massive architectural change submitted by a first-time contributor that has been open since late March. It needs a definitive maintainer review to avoid blocking the desktop roadmap.
*   **Issue [#2435](https://github.com/agentscope-ai/QwenPaw/issues/2435) (Severe Network Volatility):** A lingering issue where network drops cause `execute_shell_command` to frequently timeout and GitHub API success rates to plummet. This requires a core architectural fix for tool resiliency.
*   **Issue [#3262](https://github.com/agentscope-ai/QwenPaw/issues/3262) (Telegram Cross-Bot Leakage):** A concerning security/UX bug where tool approval notifications are being broadcast to the wrong Telegram bots. This poses a risk for multi-agent users and needs verification.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-05-12

## 1. Today's Overview
ZeptoClaw is currently experiencing a highly focused phase of architectural development, with maintainers actively refactoring the agent's core messaging and middleware infrastructure. Over the past 24 hours, project activity has been moderate but impactful, consisting of one newly opened Pull Request and one closed Issue. The core maintainer (`qhkm`) is driving a significant internal refactor to wire a new pipeline into the agent's main loop. Simultaneously, automated security and quality audits are being executed and closed, indicating healthy repository maintenance practices. Overall, the project is in a state of active, structured evolution rather than feature-bloat.

## 2. Releases
There were no new releases recorded today. 

## 3. Project Progress
Progress today centers on advancing the agent's internal middleware architecture:
*   **Closed Issue:** [#584 chore(security): single-repository deep ai-vulns audit](https://github.com/qhkm/zeptoclaw/issues/584) was closed. This indicates the successful completion of a comprehensive vulnerability audit utilizing an automated role-orchestrator skill, ensuring the codebase remains secure against AI-specific and traditional vulnerabilities.
*   **Open PR:** [#583 refactor(agent): wire Pipeline into process_message + CoreLoop (phase 2 of #399)](https://github.com/qhkm/zeptoclaw/pull/583) was opened by the maintainer. This represents a major step in Phase 2 of issue #399, specifically scaffolding the `AgentLoop` and introducing a `LegacyTerminal` stub in `core_loop.rs`. This refractoring is essential for transitioning the agent to a more modular, pipeline-based processing architecture.

## 4. Community Hot Topics
*   **Security & Automated Auditing:** The most active item today was [Issue #584](https://github.com/qhkm/zeptoclaw/issues/584) (2 comments). The discussion around a "deep AI-vulns audit" highlights a growing trend in AI-agent projects: utilizing automated role-orchestrators to perform evidence-gated security scans, tracking negative boundaries and producing shared memory artifacts.
*   **Architectural Extensibility:** While lacking comments, the focus of [PR #583](https://github.com/qhkm/zeptoclaw/pull/583) reveals heavy development focus. Wiring `build_subsystems()` and `build_pipeline_context()` suggests the community and maintainers require a more robust, extensible middleware stack to support complex tool-calling and agent loops.

## 5. Bugs & Stability
No explicit user-facing bugs, crashes, or regressions were reported in the last 24 hours. However, the introduction of the `LegacyTerminal` stub in [PR #583](https://github.com/qhkm/zeptoclaw/pull/583)—which currently short-circuits with a structured error—serves as an internal, intentional breakage point. This is standard practice during core refactoring to systematically replace legacy components with the new pipeline system. 

## 6. Feature Requests & Roadmap Signals
*   **Agent Middleware Pipeline (Phase 2):** The primary roadmap signal is the continued rollout of the `Pipeline` architecture ([PR #583](https://github.com/qhkm/zeptoclaw/pull/583)). Once merged, this will likely pave the way for custom middleware injections (e.g., advanced context management, tool-use routing, and memory retrieval layers).
*   **Enhanced Security Scanning:** The closure of [Issue #584](https://github.com/qhkm/zeptoclaw/issues/584) implies that future releases will feature hardened security protocols and potentially new `.codex-audit-work` artifacts integrated into the CI/CD pipeline.

## 7. User Feedback Summary
Direct user feedback is minimal today, as the activity is heavily skewed toward core maintenance and deep backend refactoring. The security audit (Issue #584) implicitly addresses enterprise/power-user needs for secure AI execution boundaries. We are currently in a "calm before the storm" phase regarding user feedback; once the new pipeline refactor lands, users will likely have strong opinions on the performance and responsiveness of the newly wired `CoreLoop`.

## 8. Backlog Watch
*   **[PR #583 refactor(agent)](https://github.com/qhkm/zeptoclaw/pull/583):** As a massive architectural shift (Phase 2 of #399), this PR currently sits open and will require rigorous review and testing before merging. Maintainers and core contributors should monitor this closely to ensure the `LegacyTerminal` stub is properly resolved before the next release. 
*   **Pipeline Dependency Chain:** With Phase 2 actively being pushed, backlogged phases (Phase 3+) and the parent issue [#399](https://github.com/qhkm/zeptoclaw/issues/399) (assuming it exists as the tracker) should be updated shortly to reflect the progress made in PR #583.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-05-12

## 1. Today's Overview
ZeroClaw is experiencing a highly active development phase, demonstrating robust community engagement with 15 issues updated and 48 pull requests processed in the last 24 hours. The project is heavily focused on expanding its omnichannel capabilities (with significant activity around Matrix, Discord, WhatsApp, and Telegram) and shoring up compatibility with diverse AI providers and tool implementations. While there are no new official software releases today, the maintainers and contributors are aggressively iterating on bug fixes and feature enhancements. The high volume of open PRs (34) indicates rapid feature development, though it also suggests an upcoming need for intensive review and merging cycles to keep the backlog manageable.

## 2. Releases
There were **0 new releases** recorded today. The community and maintainers are actively working on stabilization and feature additions intended for a future release (potentially v0.7.6, as hinted by ongoing release-gate issues). 

## 3. Project Progress
Significant headway was made across channel integrations, provider compatibility, and tooling robustness. A total of 14 PRs were merged or closed today. Key advancements include:

*   **Channel Enhancements:** Discord media handling is getting a major overhaul to prevent duplicate downloads ([PR #6572](https://github.com/zeroclaw-labs/zeroclaw/pull/6572)). Matrix integration saw fixes for root timeline threading issues ([PR #6579](https://github.com/zeroclaw-labs/zeroclaw/pull/6579)), and work is progressing on exposing interactive events for WhatsApp ([PR #6297](https://github.com/zeroclaw-labs/zeroclaw/pull/6297)).
*   **Provider & Tool Fixes:** Contributors fixed how the OpenAI-compatible provider handles reasoning tokens ([PR #6587](https://github.com/zeroclaw-labs/zeroclaw/pull/6587)), recovered Gemini token usage tracking ([PR #6575](https://github.com/zeroclaw-labs/zeroclaw/pull/6575)), and improved DuckDuckGo search block detection for the web tool ([PR #6582](https://github.com/zeroclaw-labs/zeroclaw/pull/6582)).
*   **UX & UI:** The cron jobs table UX in the web gateway was adjusted and merged ([PR #6505](https://github.com/zeroclaw-labs/zeroclaw/pull/6505)), and a fix to trigger TTS voice replies in partial stream mode was submitted ([PR #6588](https://github.com/zeroclaw-labs/zeroclaw/pull/6588)).
*   **Documentation:** Several PRs corrected outdated documentation regarding container registries, Docker image names, and undocumented gateway environment variables ([PR #6570](https://github.com/zeroclaw-labs/zeroclaw/pull/6570), [PR #6583](https://github.com/zeroclaw-labs/zeroclaw/pull/6583), [PR #6581](https://github.com/zeroclaw-labs/zeroclaw/pull/6581)).

## 4. Community Hot Topics
The most engaged discussions center around runtime reliability, CI/build stability, and package distribution:
*   **Matrix SDK Build Failure:** [Issue #6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530) (5 comments) highlights a severe recursion limit overflow when building ZeroClaw v0.7.5 with the `channel-matrix` feature. It was recently closed, likely addressed by recent Matrix SDK 0.17 bumps and related fixes ([Issue #6576](https://github.com/zeroclaw-labs/zeroclaw/issues/6576)).
*   **Web Search Tool Reliability:** [Issue #4083](https://github.com/zeroclaw-labs/zeroclaw/issues/4083) (5 comments) tracks a blocking issue where the web search tool fails on Telegram bots despite working in the agent.
*   **Homebrew Distribution:** [Issue #6547](https://github.com/zeroclaw-labs/zeroclaw/issues/6547) (3 comments) reports that version 0.7.5 failed to merge into Homebrew core, pointing to hiccups in the release pipeline for macOS/Linux CLI users.
*   **Message History Loss:** [Issue #6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) (4 comments) reports lost `user messages` in single/multi-turn conversations when using the OpenAI-compatible provider with custom endpoints.

## 5. Bugs & Stability
ZeroClaw faces a few high-severity bugs that impact core functionality, though remediation is actively underway:
*   **S1 - Lost User Messages:** [Issue #6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) is an accepted bug where user messages are silently dropped. *Fix status: No specific PR linked yet, needs maintainer attention.*
*   **S2 - Vision Provider Bypass:** [Issue #6589](https://github.com/zeroclaw-labs/zeroclaw/issues/6589) notes that `RouterProvider::supports_vision()` silently bypasses fallbacks in mixed-provider setups.
*   **S2 - OpenAI-Compatible Reasoning:** [Issue #6584](https://github.com/zeroclaw-labs/zeroclaw/issues/6584) highlights reasoning drops. *Fix status: Actively addressed in [PR #6587](https://github.com/zeroclaw-labs/zeroclaw/pull/6587).*
*   **S0/S2 - Cron Job Failures & UX:** Cron jobs have caused degraded behavior and data loss risks ([Issue #5991](https://github.com/zeroclaw-labs/zeroclaw/issues/5991)). *Fix status: UX issues merged in [PR #6505](https://github.com/zeroclaw-labs/zeroclaw/pull/6505) and error handling improved in [PR #6586](https://github.com/zeroclaw-labs/zeroclaw/pull/6586).*
*   **Gateway Security:** [Issue #6561](https://github.com/zeroclaw-labs/zeroclaw/issues/6561) flags that the non-loopback `--host` recovery hint advertises an admin URL that the guard immediately rejects.

## 6. Feature Requests & Roadmap Signals
Community submissions strongly indicate a desire to turn ZeroClaw into a more robust multimodal, privacy-centric automation hub:
*   **SearXNG Integration:** [Issue #5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) requests SearXNG support to bypass CAPTCHAs and rate-limiting associated with DuckDuckGo, improving autonomous reliability. This aligns with recent work in [PR #6582](https://github.com/zeroclaw-labs/zeroclaw/pull/6582).
*   **Multimodal/Media Generation:** [Issue #6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) proposes ComfyUI/Comfy Cloud as a shared media provider, laying the groundwork for a `gen_video` tool. Additionally, [Issue #6574](https://github.com/zeroclaw-labs/zeroclaw/issues/6574) requests configurable fallbacks for images when no vision path is available.
*   **Telegram Tool-Approval UX:** [Issue #6565](https://github.com/zeroclaw-labs/zeroclaw/issues/6565) suggests clearing inline keyboards after a tool is approved/declined on mobile clients.
*   *Prediction for v0.7.6:* Given the heavy amount of recent merges fixing Matrix, vision routing, and OpenAI-compatible provider quirks, v0.7.6 will likely be a highly targeted stability and channel-integration release.

## 7. User Feedback Summary
Users are actively pushing ZeroClaw into complex, multi-tool, and multi-model production environments. 
*   **Pain Points:** Deploying via Homebrew or upgrading to v0.7.5 has been friction-heavy. Additionally, deploying ZeroClaw via Podman with specific channel features enabled (like Matrix) causes build failures due to dependency limits.
*   **Use Cases:** Users are heavily relying on ZeroClaw for daily morning recaps/automations (Cron), interfacing via mobile messaging apps (Telegram, Matrix), and utilizing it as a gateway for local/custom models (LM Studio, vLLM, Qwen). 
*   **Sentiment:** Generally collaborative; users are submitting deep-dive bug reports with exact logs and PRs containing targeted fixes, showing a high level of technical competence and investment in the project's success.

## 8. Backlog Watch
Several critical issues and heavy refactor PRs are awaiting maintainer review or resolution:
*   **Bulk Revert Recovery:** [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) tracks 153 commits lost in a bulk revert from March. This high-risk issue still needs final reconciliation to ensure previously approved bug fixes make it back into the codebase.
*   **Tooling Refactor:** [PR #4944](https://github.com/zeroclaw-labs/zeroclaw/pull/4944) (open since March 28) is a massive refactor migrating tools to composable wrappers to reduce code duplication. It is currently blocked, needing author action.
*   **Multimodal Normalization:** [PR #6183](https://github.com/zeroclaw-labs/zeroclaw/pull/6183) (open since April 28) aims to fix image marker normalization but is currently stalled and awaiting author action.

</details>