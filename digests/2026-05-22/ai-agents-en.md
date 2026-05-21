# OpenClaw Ecosystem Digest 2026-05-22

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-21 22:26 UTC

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

# OpenClaw Project Digest — 2026-05-22

## 1. Today's Overview

OpenClaw maintains a very high development velocity with a substantial open backlog, as evidenced by 500 issues and 500 pull requests updated in the past 24 hours, of which 478 issues and 462 PRs remain open. The project shipped three releases on May 20 (stable and two betas), bringing notable security hardening to the exec-approvals system and new Discord voice-channel tracking features. However, the ratio of open to closed items, combined with a growing list of P1 regression reports, suggests the team is struggling to keep pace with community-reported defects and contributions. Security, multi-platform support, and session-state reliability dominate the current project discourse.

## 2. Releases

Three releases were published:

- **[v2026.5.20](https://github.com/openclaw/openclaw/releases/tag/v2026.5.20)** (stable)
- **[v2026.5.20-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.20-beta.2)**
- **[v2026.5.20-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.20-beta.1)**

**Key changes:**

- **Breaking — Exec approvals compatibility path removed:** The old `cat SKILL.md && printf ... && <skill-wrapper>` allowlist path has been removed. Skill files must now be loaded via the `read` tool; only the real skill executable is auto-allowed. **Migration note:** any custom skills or wrappers relying on the shell-pipeline allowlist pattern will no longer be auto-approved and must be updated.
- **Discord voice session tracking:** Voice sessions can now follow configured Discord users into voice channels, with allowed-channel checks, multi-user handoff, bounded reconciliation, and DAVE recovery preservation. Contributed by @fuller-stack-dev ([#84264](https://github.com/openclaw/openclaw/pull/84264)).
- **Discord/voice identity context:** Bounded `IDENTITY.md` and `USER.md` files are now included in voice session context.

## 3. Project Progress

Thirty-eight PRs were merged or closed today, while 462 remain open. Notable merged/advanced PRs include:

- **[PR #80886](https://github.com/openclaw/openclaw/pull/80886)** — `fix(agents): surface blocked subagent completions`: Treats terminal `livenessState: "blocked"` as an error so sub-agent announcements reflect failure instead of falsely reporting success. Auto-merge armed.
- **[PR #84219](https://github.com/openclaw/openclaw/pull/84219)** — `Retry app-server bridge drops safely`: Retries Codex app-server bridge failures once when no visible output has been produced. Auto-merge armed.
- **[PR #83348](https://github.com/openclaw/openclaw/pull/83348)** — `fix(channels): bypass debounce for bare abort triggers`: Ensures "stop", "abort", "wait" phrases immediately interrupt active turns instead of waiting behind the debounce window. Ready for maintainer review.
- **[PR #83991](https://github.com/openclaw/openclaw/pull/83991)** — `fix: sanitize Google thinking payloads for Vertex`: Extends thinking payload sanitization to `google-vertex` and `google-gemini-cli` APIs.
- **[PR #84423](https://github.com/openclaw/openclaw/pull/84423)** — `fix(cli): keep nodes json stdout clean`: Routes plugin-registration console logs to stderr during JSON output.
- **[PR #85026](https://github.com/openclaw/openclaw/pull/85026)** — `perf(plugins): thread install records through plugin load options`: Eliminates synchronous `installs.json` reads during plugin loading. Closed (merged).
- **[PR #72343](https://github.com/openclaw/openclaw/pull/72343)** — `feat: start onboarding for fresh CLI installs`: Routes bare `openclaw` command to onboarding when no config exists. Ready for maintainer review.
- **[PR #85104](https://github.com/openclaw/openclaw/pull/85104)** — `feat: add auto fast mode cutoff`: Introduces `fast: auto` mode with a configurable time-based cutoff for priority/fast-tier routing.

Areas advancing: agent reliability (blocked sub-agents, bridge retries), channel robustness (abort debounce, multiple channels), provider compatibility (Google Vertex), and CLI/UX (onboarding, clean JSON output).

## 4. Community Hot Topics

**Most-discussed issues:**

1. **[Issue #75](https://github.com/openclaw/openclaw/issues/75)** — *Linux/Windows Clawdbot Apps* (105 comments, 75 👍): The community strongly wants native Linux and Windows desktop apps to match the macOS experience. This is the single most-upvoted and longest-running open issue, reflecting major demand for cross-platform parity.

2. **[Issue #84059](https://github.com/openclaw/openclaw/issues/84059)** — *EmbeddedAttemptSessionTakeoverError* (13 comments, 8 👍): After upgrading from v03.13 to v05.18, all embedded agent runs fail with a session-file takeover error. This is a blocking regression for users relying on embedded agents.

3. **[Issue #62505](https://github.com/openclaw/openclaw/issues/62505)** — *Coding Agent never completes anything* (13 comments): A regression since v2026.4.2 where coding-specific agents produce only vague status updates and never finish tasks. Linked PR is open but not yet merged.

4. **[Issue #12602](https://github.com/openclaw/openclaw/issues/12602)** — *Slack Block Kit support* (13 comments): Users want agents to compose rich interactive Slack messages (Block Kit) for CRM summaries, dashboards, and action confirmations, instead of plain markdown text.

5. **[Issue #10659](https://github.com/openclaw/openclaw/issues/10659)** — *Masked Secrets* (12 comments, 4 👍): A request for agents to use API keys without being able to see the raw values, preventing accidental leaks and prompt-injection credential extraction. This aligns with the broader security hardening trend.

**Underlying needs analysis:** The community is focused on three themes: (1) **platform expansion** (Linux, Windows, Android APKs), (2) **security and secrets management** (masked secrets, sandboxing, secrets providers), and (3) **reliability of agent sessions** (session takeovers, incomplete turns, message loss). The high comment counts on session-state bugs suggest these are widespread pain points affecting production deployments.

## 5. Bugs & Stability

**Critical / P1 regressions and bugs:**

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **P1 / Security** | [#83796](https://github.com/openclaw/openclaw/issues/83796) | Codex runtime + Docker sandbox escape — agent executes in gateway container instead of sandbox | No linked fix PR |
| **P1 / Regression** | [#84059](https://github.com/openclaw/openclaw/issues/84059) | `EmbeddedAttemptSessionTakeoverError` — all embedded agent runs fail after upgrade to v05.18 | Closed (investigation) |
| **P1 / Regression** | [#62505](https://github.com/openclaw/openclaw/issues/62505) | Coding agent never completes tasks (regression from v2026.4.2) | [Linked PR open](https://github.com/openclaw/openclaw/issues/62505) |
| **P1** | [#84076](https://github.com/openclaw/openclaw/issues/84076) | Codex app-server stalls after `item/completed`, aborts without recovery | Closed; related to PR #84219 (retry logic, auto-merge armed) |
| **P1** | [#55334](https://github.com/openclaw/openclaw/issues/55334) | `sessions.json` unbounded growth → gateway OOM (50–100 MB/min) | No linked fix PR |
| **P1** | [#63101](https://github.com/openclaw/openclaw/issues/63101) | Feishu channel config validation fails after v4.5→v4.8 upgrade | [Linked PR open](https://github.com/openclaw/openclaw/issues/63101) |
| **P1** | [#57326](https://github.com/openclaw/openclaw/issues/57326) | CLI-backed helper paths bypass CLI dispatch on latest main | [Linked PR open](https://github.com/openclaw/openclaw/issues/57326) |
| **P1** | [#62985](https://github.com/openclaw/openclaw/issues/62985) | Telegram multi-account config error after upgrade | [Linked PR open](https://github.com/openclaw/openclaw/issues/62985) |
| **P1** | [#57019](https://github.com/openclaw/openclaw/issues/57019) | Session write lock race — async release can delete newly-acquired lock | [Linked PR open](https://github.com/openclaw/openclaw/issues/57019) |
| **P1** | [#60858](https://github.com/openclaw/openclaw/issues/60858) | Three `hasRealConversationContent` guards silently block compaction | No linked fix PR |
| **P1** | [#61005](https://github.com/openclaw/openclaw/issues/61005) | Android onboarding stuck when operator offline | No linked fix PR |

**Stability assessment:** The session-state subsystem is the primary source of P1 bugs. Multiple independent issues (lock races, takeover errors, compaction guards, unbounded growth) point to systemic fragility in concurrent session management. The sandbox escape report ([#83796](https://github.com/openclaw/openclaw/issues/83796)) is the most urgent security concern with no fix yet in flight.

## 6. Feature Requests & Roadmap Signals

**High-signal feature requests likely to influence the next release cycle:**

1. **Masked secrets / secrets management** ([#10659](https://github.com/openclaw/openclaw/issues/10659), [#13610](https://github.com/openclaw/openclaw/issues/13610), [PR #23096](https://github.com/openclaw/openclaw/pull/23096)): Multiple issues and an open PR for Bitwarden/Vaultwarden integration. The v2026.5.20 release's exec-approvals hardening signals security is a priority; masked secrets is the logical next step.

2. **Linux/Windows desktop apps** ([#75](https://github.com/openclaw/openclaw/issues/75), 75 👍): The highest-demand feature by community vote. No PRs yet, but sustained pressure makes this a likely roadmap item.

3. **Prebuilt Android APK** ([#9443](https://github.com/openclaw/openclaw/issues/9443)): Low-friction companion app distribution is a quick win for mobile adoption.

4. **Filesystem sandboxing** ([#7722](https://github.com/openclaw/openclaw/issues/7722), 4 👍): Configurable `tools.fileAccess` allow/deny paths. Aligns with the security hardening direction and has community support.

5. **Exec-approvals denylist** ([#6615](https://github.com/openclaw/openclaw/issues/6615), 7 👍): "Allow everything except X" policies to complement the existing allowlist. Natural complement to the exec-approvals changes already shipped.

6. **Slack Block Kit** ([#12602](https://github.com/openclaw/openclaw/issues/12602)): Rich interactive Slack messages. High user demand for production CRM/dashboard use cases.

7. **Session snapshots** ([#13700](https://github.com/openclaw/openclaw/issues/13700)): Save/load context checkpoints for long sessions. Addresses the session-state fragility complaints.

8. **Multi-tenancy** ([#60127](https://github.com/openclaw/openclaw/issues/60127)): Single-instance shared server with RBAC. Critical for startup/enterprise adoption.

**Prediction for next version:** Security features (masked secrets, denylist, sandboxing) and session reliability fixes are most likely to ship next, given the current release trajectory and maintainer focus.

## 7. User Feedback Summary

**Pain points repeatedly expressed:**

- **Session reliability is the top complaint.** Users report lost messages, stuck agents, incomplete turns, and OOM crashes from session bloat. Multiple independent reports confirm this is not isolated.
- **Upgrade regressions are eroding trust.** Several P1 bugs ([#84059](https://github.com/openclaw/openclaw/issues/84059), [#62505](https://github.com/openclaw/openclaw/issues/62505), [#63101](https://github.com/openclaw/openclaw/issues/63101)) emerged from upgrades, with users noting features that "worked before and now fail."
- **Secrets exposure is a deployment blocker.** Users in production cannot safely deploy agents that have full visibility into API keys ([#10659](https://github.com/openclaw/openclaw/issues/10659)).
- **Cross-platform support gaps frustrate non-Apple users.** The absence of Linux/Windows apps ([#75](https://github.com/openclaw/openclaw/issues/75)) and prebuilt Android APKs ([#9443](https://github.com/openclaw/openclaw/issues/9443)) limits adoption.
- **Channel-specific limitations** reduce utility: no Slack Block Kit ([#12602](https://github.com/openclaw/openclaw/issues/12602)), no WhatsApp message delete ([#14344](https://github.com/openclaw/openclaw/issues/14344)), Telegram reaction handling broken ([#64752](https://github.com/openclaw/openclaw/issues/64752)), and Cloudflare blocking in China ([#67670](https://github.com/openclaw/openclaw/issues/67670)).

**Positive signals:**

- The Discord voice tracking feature was community-contributed and merged quickly, showing healthy external contribution flow.
- Users praise the core agent concept and macOS/iOS experience, with the RISC-V attempt ([#54253](https://github.com/openclaw/openclaw/issues/54253)) illustrating enthusiasm for unusual platforms.
- The AI-assisted PR labels and structured contribution workflow suggest a maturing development process.

## 8. Backlog Watch

**High-priority issues needing urgent maintainer attention:**

| Issue | Why it needs attention |
|-------|----------------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) — Linux/Windows apps | 105 comments, 75 👍, open since Jan 2026. No maintainer decision communicated despite `needs-product-decision` label. |
| [#83796](https://github.com/openclaw/openclaw/issues/83796) — Sandbox escape | P1 security regression with no linked fix PR. Should be highest priority. |
| [#55334](https://github.com/openclaw/openclaw/issues/55334) — Gateway OOM from sessions.json | P1, causes production crashes at 50–100 MB/min growth rate. No fix in sight. |
| [#62505](https://github.com/openclaw/openclaw/issues/62505) — Coding agent never completes | P1 regression with linked PR open since April 7 but not yet merged. |
| [#60858](https://github.com/openclaw/openclaw/issues/60858) — Compaction silently blocked | P1, causes context window exhaustion. No linked fix. |
| [#57019](https://github.com/openclaw/openclaw/issues/57019) — Session write lock race | P1 data-loss risk with linked PR open since March 29. |

**Stale PRs worth reviewing:**

| PR | Status |
|----|--------|
| [PR #23096](https://github.com/openclaw/openclaw/pull/23096) — Bitwarden/Vaultwarden secret provider | Open since Feb 22, needs real-behavior proof |
| [PR #25295](https://github.com/openclaw/openclaw/pull/25295) — Mattermost edit/delete actions | Open since Feb 24, needs real-behavior proof |
| [PR #22439](https://github.com/openclaw/openclaw/pull/22439) — Tiered bootstrap loading | Open since Feb 21, needs real-behavior proof |
| [PR #19482](https://github.com/openclaw/openclaw/pull/19482) — Fix HEARTBEAT.md seeding | Open since Feb 17, waiting on author |

**Overall backlog health:** The project has a significant triage bottleneck. Many high-impact issues and PRs carry `clawsweeper:needs-maintainer-review` or `clawsweeper:needs-product-decision` labels for weeks without resolution. The `no-new-fix-pr` label on most top issues suggests the maintainer team is intentionally throttling new fix PRs, possibly to manage merge debt. Addressing the session-state subsystem holistically — rather than one-off fixes — would resolve the largest cluster of P1 bugs simultaneously.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Analysis: AI Agents & Personal Assistants

## 1. Ecosystem Overview
The open-source AI agent and personal assistant ecosystem is currently characterized by rapid iteration, aggressive multi-modal/multi-provider expansion, and a strong push toward production-grade reliability. Projects are evolving from simple single-agent chat wrappers into complex, multi-agent host architectures featuring isolated memory, robust security sandboxing, and ubiquitous platform integrations. There is a pronounced industry-wide struggle to balance high development velocity with backend stability, as core session-state management and gateway memory handling remain frequent pain points across the board. 

## 2. Activity Comparison
*Health Score (1-5) based on issue triage rate, PR throughput, and active maintainer engagement.*

| Project | Issues Updated (24h) | Pull Requests Updated (24h) | Recent Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (478 open) | 500 (462 open) | **v2026.5.20** (Stable) | 3.0 / 5.0 |
| **NanoBot** | 10 (8 closed) | 31 (23 merged) | Pre-release iteration | 4.5 / 5.0 |
| **Hermes Agent** | 50 (43 open) | 50 (4 merged) | None (Awaiting patch) | 3.0 / 5.0 |
| **ZeroClaw** | 21 | 50 (44 open) | **v0.8.0-beta-1** | 4.0 / 5.0 |
| **CoPaw** | 26 (18 open) | 27 (19 merged) | Stable (**v1.1.8.post1**) | 4.5 / 5.0 |
| **PicoClaw** | Low (7 closed) | 30 (20 open) | Nightly (**v0.2.8**) | 4.0 / 5.0 |
| **NanoClaw** | Low | 13 (11 open) | None (Integration phase) | 3.5 / 5.0 |
| **IronClaw** | 24 | 46 | None (Lagging crates.io) | 3.5 / 5.0 |
| **Moltis** | 5 | 5 (1 closed) | Pre-release accumulation | 4.0 / 5.0 |
| **LobsterAI** | 0 | 9 (2 closed) | None (Backlog triage) | 3.5 / 5.0 |
| **NullClaw** | 0 | 2 updates | None | 3.0 / 5.0 |
| **TinyClaw / ZeptoClaw**| 0 | 0 | Dormant | N/A |

## 3. OpenClaw's Position
*   **Advantages:** OpenClaw functions as the core reference implementation and mature flagship of the ecosystem. It boasts the largest absolute volume of community engagement and operates on a predictable, stable release cycle (v2026.5.20), unlike many peers trapped in perpetual betas. 
*   **Disadvantages vs. Peers:** OpenClaw is currently suffering from severe triage bottlenecks and "growing pains." With nearly 500 open PRs/Issues updated daily, its ratio of open-to-closed items is significantly worse than agile peers like CoPaw and NanoBot. Furthermore, OpenClaw is lagging in cross-platform desktop support and native IDE integrations, areas where ZeroClaw, NanoClaw, and Hermes are actively shipping code.
*   **Technical Approach:** While OpenClaw focuses heavily on enterprise-grade security (exec-approvals) and complex multi-platform channel parity, alternative projects are taking more modular approaches—such as ZeroClaw's multi-agent RPC schema (V3) and NanoClaw's Agent Client Protocol (ACP) for IDE bridging.

## 4. Shared Technical Focus Areas
Several requirements are clearly emerging as universal standards across the ecosystem:

*   **Local LLM / Self-Hosted Provider Parity:** Users are demanding frictionless integration with local models. **Hermes** (Issue #7069), **PicoClaw**, **NanoBot**, and **Moltis** all report timeout, context-size, and routing bugs when connecting to local providers like Ollama or llama.cpp. Standardizing how agents handle long prompt prefill times is a universal need.
*   **Advanced Context & Memory Management:** Session fragility is an ecosystem-wide epidemic. **OpenClaw** (Gateway OOMs, session write lock races), **NanoBot** (Dream system MECE violations), and **CoPaw** (memory loss on model switch) all highlight the urgent need for robust long-term memory, lossless context compression, and stateful session recovery.
*   **Enterprise Security & Sandbox Hardening:** As agents become more autonomous, security boundaries are tightening. **OpenClaw** (filesystem sandboxing, masked secrets), **ZeroClaw** (gated TOTP commands), and **IronClaw** (tenant sandbox process ports) are all actively building boundaries to prevent tool/exec overreach.
*   **Agent Lifecycle Automation:** Users want agents that run in the background. **NullClaw**, **CoPaw**, and **Hermes** all feature active development in DB-backed Cron subagents and scheduled tasks.

## 5. Differentiation Analysis
*   **Target Architecture:** **ZeroClaw** is differentiating via its "multi-agent host" architecture (running many named agents side-by-side via RPC), whereas **NanoClaw** is positioning itself as a protocol-first backend bridge (using ACP to plug into IDEs like WebStorm). **IronClaw** is taking a highly structured, compiled approach using Rust and WebAssembly (Wasmtime).
*   **Target Audience:** **CoPaw** and **LobsterAI** are heavily focused on the Chinese enterprise market, prioritizing stable integrations with WeChat iLink, DingTalk, Feishu, and native desktop apps. Conversely, **Moltis** is targeting homelabbers and privacy-focused users with localized TTS/telephony (Twilio, Piper) and self-hosted infrastructure.
*   **Platform Integrations:** **Hermes** targets the terminal/power-user (TUI), while **PicoClaw** pushes aggressively into community/forum messaging (Telegram forum topics).

## 6. Community Momentum & Maturity
*   **Tier 1: Rapid Iterators (High Momentum):** **NanoBot**, **CoPaw**, and **ZeroClaw** show the healthiest merge-to-open ratios. They are rapidly shipping features, integrating new LLM providers, and maintaining high community engagement.
*   **Tier 2: Scaling Giants (High Volume, High Friction):** **OpenClaw** and **Hermes** have massive community energy but are choking on their own scale. They are currently stabilizing rather than iterating, burdened by P1 regressions and maintainer triage bottlenecks.
*   **Tier 3: Architectural Evolvers:** **IronClaw**, **PicoClaw**, and **NanoClaw** are in deep architectural refactoring phases (e.g., IronClaw's "Reborn" initiative). They show steady forward momentum but are delaying stable releases in favor of foundational rewrites.
*   **Stabilizing / Slower Pace:** **LobsterAI**, **Moltis**, and **NullClaw** are experiencing quieter, more focused development cycles, largely fixing UI/UX friction or specific self-hosting bugs rather than shipping massive feature drops.

## 7. Trend Signals (Value for Developers)
1.  **The Rise of Agent-Native Protocols:** The emergence of the Agent Client Protocol (ACP) in **NanoClaw** and **ZeroClaw** signals a shift away from monolithic chat UIs. Developers should prepare standardized ACP bridges to allow agents to act as backend intelligence nodes for IDEs, dashboards, and third-party apps.
2.  **"Invisible" Token Waste is Unacceptable:** Community pushback on **NanoBot's** "Dream" system and memory consolidation highlights a strict new user requirement: background token consumption must be visible, configurable, and toggleable.
3.  **Scheduling is the Next Frontier:** The presence of Cron/Scheduled subagents in **NullClaw**, **CoPaw**, and **Hermes** indicates that users are moving away from real-time chat and toward autonomous background workflows. Building robust, DB-backed cron state management is a highly valuable feature right now.
4.  **Containerization Friction:** Across **Moltis** and **Hermes**, users running complex Docker/LXC setups are hitting walls with sandbox permissions and file locks. Developers must ensure that browser sandboxes and local DB daemons gracefully handle volume mounts and containerized networking defaults.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-22

## 1. Today's Overview
NanoBot demonstrated robust and highly active development over the past 24 hours, maintaining a strong momentum in both issue resolution and feature expansion. The community engagement is highly active, with 31 Pull Requests updated (23 merged/closed) and 10 Issues processed (8 closed), indicating a highly responsive maintainer team. Current engineering efforts are heavily concentrated on diversifying LLM provider support (xAI, Novita, Skywork, Ollama), improving WebUI stability and performance, and refining the agent's core memory system. Overall, the project is in a state of rapid, healthy iteration with significant community contributions.

## 2. Releases
No new official releases were recorded in the last 24 hours. The project continues to iterate heavily on the main/development branches ahead of its next stable tag.

## 3. Project Progress
A remarkable 23 PRs were merged or closed, reflecting significant advancements across provider integrations, UI improvements, and core tooling:

*   **New LLM & AI Providers:** 
    *   Added [Novita AI](https://github.com/HKUDS/nanobot/pull/3927) as a built-in provider.
    *   Added first-level [Skywork](https://github.com/HKUDS/nanobot/pull/3916) support.
    *   Merged [xAI Grok OAuth](https://github.com/HKUDS/nanobot/pull/3936) support for passwordless authentication.
*   **WebUI & Chat Experience:**
    *   Resolved session dropping issues with a [new chat session fix](https://github.com/HKUDS/nanobot/pull/3944).
    *   Significantly improved frontend responsiveness via [sidebar performance batching](https://github.com/HKUDS/nanobot/pull/3953) and a [collapsible sidebar refactor](https://github.com/HKUDS/nanobot/pull/3951).
*   **Agent Tooling & Stability:**
    *   Fixed a critical stdin inheritance bug in [exec tool detachment](https://github.com/HKUDS/nanobot/pull/3922).
    *   Upgraded the coding workflow with a new [apply_patch tool](https://github.com/HKUDS/nanobot/pull/3923).
    *   Resolved shell safety guard false positives that were [blocking URL commands](https://github.com/HKUDS/nanobot/pull/3933).

## 4. Community Hot Topics
The most actively discussed topics centered on system autonomy and UI reliability:

*   **Memory/Dream System Autonomy (Issues [#3885](https://github.com/HKUDS/nanobot/issues/3885) & [#3948](https://github.com/HKUDS/nanobot/issues/3948)):** Users are actively requesting global toggles to disable the "Dream" (memory consolidation) system. The underlying need is user control over background token consumption and avoidance of redundant, uncontrollable memory generation.
*   **WebUI Conversation Reliability (Issue [#3884](https://github.com/HKUDS/nanobot/issues/3884)):** A highly discussed bug where the WebUI conversation closed abruptly after the first response. This highlights user sensitivity to chat-state management bugs during streaming responses.
*   **OpenAI-Compatible API Edge Cases (Issue [#3790](https://github.com/HKUDS/nanobot/issues/3790)):** Display formatting issues during WebUI streaming indicate ongoing growing pains with standardizing markdown/chunk rendering across different LLM providers.

## 5. Bugs & Stability
Several high-impact bugs were reported and subsequently addressed today:

1.  **Critical: WebUI Session Crashes:** The WebUI closed conversations after the first response ([#3884](https://github.com/HKUDS/nanobot/issues/3884)) and displayed duplicate `tool_call_id` errors ([#3945](https://github.com/HKUDS/nanobot/issues/3945)). *Status: Fixed in PR [#3944](https://github.com/HKUDS/nanobot/pull/3944).*
2.  **High: `restrictToWorkspace` False Positives:** Enabling workspace restrictions completely blocked standard web requests using `curl` ([#3931](https://github.com/HKUDS/nanobot/issues/3931)). *Status: Fixed in PR [#3933](https://github.com/HKUDS/nanobot/pull/3933).*
3.  **High: Kimi/Moonshot API Rejection:** Sending both `thinking` and `reasoning_effort` parameters caused Moonshot APIs to crash/reject requests ([#3939](https://github.com/HKUDS/nanobot/issues/3939)). *Status: Fixed in PR [#3940](https://github.com/HKUDS/nanobot/pull/3940).*
4.  **Low: Docker WebUI Bootstrap:** Localhost-only restrictions made the WebUI inaccessible outside Docker containers ([#3876](https://github.com/HKUDS/nanobot/issues/3876)). *Status: Closed.*

## 6. Feature Requests & Roadmap Signals
Community requests today signal a strong desire for more flexible deployment configurations, better tool isolation, and expanded multi-modal capabilities:

*   **Disabling Dream System:** Users want explicit configuration to disable the Dream cron job ([#3885](https://github.com/HKUDS/nanobot/issues/3885)). Given that PR [#3952](https://github.com/HKUDS/nanobot/pull/3952) is actively enhancing the Dream system, it is highly likely an `enabled: false` toggle will be introduced in the next release to appease enterprise/power users.
*   **Pip/Python Environment Isolation in Exec Tool:** Users are struggling to install Python dependencies dynamically due to `$PATH` precedence issues in the exec tool ([#3934](https://github.com/HKUDS/nanobot/issues/3934)). A refactor to handle virtual environments better seems imminent.
*   **Multi-Modal Image Generation:** Open PRs for [OpenAI/Codex image generation](https://github.com/HKUDS/nanobot/pull/3954) and [Ollama image generation](https://github.com/HKUDS/nanobot/pull/3946) indicate that robust, cross-provider image generation is a major focus for the upcoming roadmap.

## 7. User Feedback Summary
Overall, users are highly engaged but experiencing friction typical of fast-moving AI agent frameworks. On the positive side, users appreciate the rapid integration of diverse LLMs (Xiaomi MiMo, Skywork, xAI). However, there is notable dissatisfaction regarding the "invisible" token consumption and repetitive generation caused by the memory/Dream system. Additionally, users deploying NanoBot inside Docker or strict corporate environments are requesting better network configuration defaults, moving away from hardcoded `localhost` constraints.

## 8. Backlog Watch
*   **[BM25-lite Skill Router](https://github.com/HKUDS/nanobot/pull/3865) (PR #3865):** Opened 6 days ago, this architectural PR promises a 60% reduction in system prompt tokens. It is highly anticipated but currently lacks maintainer approval and needs final review.
*   **[Memory/Dream MECE Refactor](https://github.com/HKUDS/nanobot/pull/3952) (PR #3952):** A massive open PR aiming to fix memory bloat and MECE (Mutually Exclusive, Collectively Exhaustive) violations in long-term memory. This is critical for the project's long-term viability and requires thorough maintainer scrutiny.
*   **[Message Debouncing for Telegram/Feishu](https://github.com/HKUDS/nanobot/pull/3949) (PR #3949):** An open community PR waiting for review to prevent AI looping during rapid group-chat bursts.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-22

## 1. Today's Overview
Hermes Agent is experiencing a highly active day, driven almost entirely by community contributions and issue reports rather than official releases. The project recorded 100 total GitHub events in the last 24 hours (50 issues updated, 50 PRs updated), indicating a vibrant and engaged user base actively testing the platform's limits. However, the ratio of open to closed items (43 open issues, 4 merged PRs) suggests that maintainers may be facing a triage bottleneck. The activity revolves heavily around hardening the gateway and TUI (Terminal User Interface) components, expanding platform adapters (Slack, Telegram, Matrix, Feishu), and addressing friction points for local LLM users. 

## 2. Releases
There have been **no new releases** recorded today. The community is actively awaiting a patch release to address several critical bugs currently present in the `main` branch, including Node environment crashes and local LLM timeout loops.

## 3. Project Progress
Four PRs were closed/merged today, alongside a large influx of new feature proposals and bug fixes submitted to the open queue:

*   **Merged/Closed Fixes:**
    *   **PR #30064**: *fix(curator): skip archival of skills referenced by active cron jobs.* (Note: This was immediately superseded by **PR #30076** for further correctness improvements).
    *   **PR #30048**: *fix(feishu): share gateway lark client with doc/drive tools.* Resolved an issue where DM agents couldn't access Feishu documents due to missing thread-local authentication contexts.
*   **Significant Open PR Advancements:**
    *   **Security & Infrastructure:** **PR #30062** (P0) addresses a critical fail-open vulnerability in the Matrix adapter's reaction approval system. **PR #30067** (P1) resolves severe Discord gateway disconnects by offloading blocking SQLite calls to a thread pool.
    *   **Agent Orchestration:** **PR #30069** introduces persisted session provenance and child correlation for delegate tasks, a major architectural improvement for complex agent workflows.
    *   **Desktop Application:** **PR #20059** continues development on a full Hermes Desktop App (Electron/Vite), showing active progress toward a standalone GUI client.

## 4. Community Hot Topics
The community is actively discussing UI friction, provider integrations, and memory limitations:

*   **Dashboard UI Readability (24 👍):** [Issue #18080](https://github.com/NousResearch/hermes-agent/issues/18080) is highly requested. Users report that the current TUI themes (Midnight, Ember, etc.) use non-standard fonts and low-contrast serif text that causes eye strain. There is a strong demand for a comprehensive visual overhaul.
*   **Claude Subscription OAuth Support (5 👍):** [Issue #25267](https://github.com/NousResearch/hermes-agent/issues/25267) requests a Claude Agent SDK provider that utilizes existing user subscriptions via OAuth instead of requiring separate, expensive per-token API billing.
*   **Local LLM Prefill Timeouts (4 👍, 31 comments):** [Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237) and [Issue #7069](https://github.com/NousResearch/hermes-agent/issues/7069) remain hot topics. Users running heavy local models (via Ollama/llama.cpp) are experiencing infinite retry loops and output truncation because the default stream timeouts do not account for long prompt prefill phases.
*   **Docker Security Posture:** [Issue #30073](https://github.com/NousResearch/hermes-agent/issues/30073) raised alarms about 172 CRITICAL/HIGH CVEs in the current main Docker image, requesting an immediate rebuild to patch 41 already-fixed Debian 13 packages.

## 5. Bugs & Stability
Stability remains a mixed bag, particularly for power users. Today's bugs ranked by severity:

*   **P0 - Security Vulnerabilities:**
    *   **[PR #30062](https://github.com/NousResearch/hermes-agent/pull/30062):** A fail-open flaw in the Matrix adapter. If `MATRIX_ALLOWED_USERS` is empty, any user could approve sensitive actions via reactions. (Fix submitted).
*   **P1 - Gateway & Provider Crashes:**
    *   **[Issue #14036](https://github.com/NousResearch/hermes-agent/issues/14036) / [PR #30067](https://github.com/NousResearch/hermes-agent/pull/30067):** The Python gateway process silently exits (`exit_group(0)`) mid-turn when using the Byterover memory provider due to SQLite loop starvation. (Fix submitted).
    *   **[Issue #29912](https://github.com/NousResearch/hermes-agent/issues/29912) / [PR #30076](https://github.com/NousResearch/hermes-agent/pull/30076):** The internal Curator silently archives "active" skills during consolidation, breaking live Cron jobs. (Fix submitted).
*   **P2 - Local LLM & API Instabilities:**
    *   **[Issue #22986](https://github.com/NousResearch/hermes-agent/issues/22986):** Post v0.13.0, strict stream-timeout enforcement has caused an 8x spike in `APIConnectionError` for users utilizing Codex endpoints. 
    *   **[Issue #17187](https://github.com/NousResearch/hermes-agent/issues/17187):** `hermes --tui` immediately crashes if `--expose-gc` is disallowed in `NODE_OPTIONS`. 
*   **P2 - TUI / Dashboard Bugs:** A cluster of UI bugs was reported today, including broken Ctrl+V image pasting ([Issue #24860](https://github.com/NousResearch/hermes-agent/issues/24860)), Kanban board overflows ([Issue #30023](https://github.com/NousResearch/hermes-agent/issues/30023)), and accidental draft deletion when pressing Ctrl+C ([Issue #29989](https://github.com/NousResearch/hermes-agent/issues/29989)).

## 6. Feature Requests & Roadmap Signals
Based on today's open Feature Requests, the next logical updates to Hermes will likely focus on:
*   **Multi-platform Parity:** Users want feature parity across chat platforms. Requests include Slack free-response channels ([Issue #29922](https://github.com/NousResearch/hermes-agent/issues/29922)), quoted message context for Discord/WhatsApp ([Issue #30049](https://github.com/NousResearch/hermes-agent/issues/30049)), and Telegram progress message edits to reduce spam ([Issue #30045](https://github.com/NousResearch/hermes-agent/issues/30045)).
*   **Advanced Tooling & Routing:** Users are pushing for smarter internal routing. [Issue #11814](https://github.com/NousResearch/hermes-agent/issues/11814) asks for configurable `smart_model_routing` in `config.yaml`. [Issue #29999](https://github.com/NousResearch/hermes-agent/issues/29999) requests multi-modal image generation support via reference URLs.
*   **Local Hardware Support:** [Issue #29688](https://github.com/NousResearch/hermes-agent/issues/29688) requests Vosk as a local Speech-to-Text provider to allow Hermes to run natively on low-power devices like Raspberry Pis.

## 7. User Feedback Summary
The overarching sentiment from the community is highly enthusiastic but experiencing growing pains. Users are pushing Hermes into enterprise and advanced automation workflows (e.g., using Kanban boards, complex cron jobs, and multi-user gateways), leading to the discovery of edge-case bugs like SQLite thread blocking and context leaking.

**Key Pain Points:**
1.  **Local LLM Hostility:** Users relying on local, heavy LLMs are constantly battling timeout limits hardcoded for faster, commercial APIs.
2.  **Memory Providers:** Third-party memory implementations (like Byterover/Hindsight) cause significant gateway instability.
3.  **TUI Polish:** While feature-rich, the web and terminal UIs feel clunky, with broken standard OS integrations (copy/paste, text highlighting).

## 8. Backlog Watch
Maintainers should prioritize addressing the following long-standing or highly critical unresolved items:
*   **[Issue #4351](https://github.com/NousResearch/hermes-agent/issues/4351):** "Too many homepages." A documentation/distribution issue fragmenting the project's web presence.
*   **[Issue #7069](https://github.com/NousResearch/hermes-agent/issues/7069):** The ongoing struggle with local LLM infinite retry loops. A comprehensive timeout overhaul is needed.
*   **[Issue #22986](https://github.com/NousResearch/hermes-agent/issues/22986):** The v0.13.0 regression causing massive API connection error spikes. This needs immediate verification.
*   **[PR #20059](https://github.com/NousResearch/hermes-agent/pull/20059):** The Desktop App PR has been open since early May and requires maintainer review to progress toward merging.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-22

## 1. Today's Overview
PicoClaw demonstrates robust and continuous development momentum heading into late May. The project shows strong automation health with a fresh nightly release (`v0.2.8`) and a massive influx of dependency updates via Dependabot. A high volume of active Pull Requests (20 open) compared to closed Issues (7) suggests a heavy forward-development focus. The community remains actively engaged in proposing new features (providers, context policies, tool filters) while steadily resolving bugs related to multi-agent contexts and channel management. 

## 2. Releases
- **nightly: `v0.2.8-nightly.20260521.33f9d638`**
  - **Changes:** Automated nightly build tracking the `main` branch ahead of `v0.2.8`.
  - **Migration Notes:** None explicitly stated in this automated build, but users should anticipate upcoming features from recent merges (e.g., working summary tool feedback, Telegram forum topic fixes). Use with caution in production environments.

## 3. Project Progress
Project development today was heavily characterized by significant feature merges and upstream dependency maintenance. 
*   **Merged Features (10 PRs closed):** The most notable advancements include enhanced Telegram channel support—specifically fixing forum topic message routing ([#2772](https://github.com/sipeed/picoclaw/pull/2772)), suppressing typing indicators for topic replies ([#2776](https://github.com/sipeed/picoclaw/pull/2776)), and adding per-topic trigger overrides ([#2779](https://github.com/sipeed/picoclaw/pull/2779)). Additionally, core agent tooling was improved with a new compact `working_summary` feedback style ([#2778](https://github.com/sipeed/picoclaw/pull/2778)) and fixes to suppress tool feedback during scheduled cron turns ([#2777](https://github.com/sipeed/picoclaw/pull/2777)). A root Dockerfile ([#2812](https://github.com/sipeed/picoclaw/pull/2812)) was also integrated.
*   **Active Development (20 PRs open):** The maintainers are actively reviewing impactful architectural PRs today, including AGENT.md frontmatter tool policy filters ([#2838](https://github.com/sipeed/picoclaw/pull/2838)), request-scoped context policies ([#2914](https://github.com/sipeed/picoclaw/pull/2914)), and adding NEAR AI Cloud as a provider ([#2917](https://github.com/sipeed/picoclaw/pull/2917)).
*   **Maintenance:** 11 Dependabot PRs were opened today, aggressively bumping core stacks (React 19.2.6, Anthropic Go SDK v1.44.1, Lark Suite SDK v3.9.2).

## 4. Community Hot Topics
*   **[Bug/Enhancement] LLM Call Retry Failures ([Issue #629](https://github.com/sipeed/picoclaw/issues/629)):** With 15 comments since its creation in February, this is an actively discussed critical issue. The community highlights a persistent pain point where long tasks hang indefinitely upon encountering HTTP 500 errors from providers (like OpenRouter), emphasizing the need for robust fallback retry logic in the core provider loop.
*   **[Feature] Sub-Agent Identity Inheritance ([Issue #2775](https://github.com/sipeed/picoclaw/issues/2775)):** Generating significant discussion (4 comments), this issue addresses a complex underlying need in multi-agent architectures. Users are struggling with "role bleed"—where spawned sub-agents inherit the root `AGENT.md` instead of their specific Planner/Builder system prompts.
*   **System Optimization Requests ([Issue #2916](https://github.com/sipeed/picoclaw/issues/2916)):** Users are beginning to map out CPU, Memory, and IO bottlenecks, indicating that the project is seeing deployment on more resource-constrained hardware (like homelabs).

## 5. Bugs & Stability
*   **[Medium] Multi-user Sender Attribution ([Issue #2702](https://github.com/sipeed/picoclaw/issues/2702)):** In default session scopes, multi-user group chats lack sender attribution in historical messages. *Fix Status: No linked PR yet.*
*   **[Medium] UI Chat History Compression Bug ([Issue #2795](https://github.com/sipeed/picoclaw/issues/2795)):** Users report only seeing the very last user message when viewing historical conversations. While backend compression is expected, the frontend display is losing context. *Fix Status: No linked PR yet.*
*   **[Medium] Telegram PDF Stream Corruption ([Issue #2798](https://github.com/sipeed/picoclaw/issues/2798)):** Attaching regular PDFs in Telegram breaks the session/stream, pointing to potential MIME-type parsing or memory-stream bugs in the Telegram channel adapter. *Fix Status: No linked PR yet.*
*   **[Low] API Timestamping ([Issue #2787](https://github.com/sipeed/picoclaw/issues/2787)):** The `/api/sessions/{id}` endpoint lacks per-message timestamps, forcing the frontend to use inaccurate session-level update times. *Fix Status: No linked PR yet.*

## 6. Feature Requests & Roadmap Signals
*   **Advanced Tooling & Context Policies:** Two open PRs—[PR #2838](https://github.com/sipeed/picoclaw/pull/2838) (allow/deny glob patterns for MCP tools) and [PR #2914](https://github.com/sipeed/picoclaw/pull/2914) (request-scoped context profiles)—strongly signal that the upcoming `v0.2.8` stable release will focus heavily on granular enterprise-grade security and context management.
*   **Native GPT4Free Support ([Issue #2901](https://github.com/sipeed/picoclaw/issues/2901)):** High demand for zero-cost/homelab LLM backends suggests the community wants first-class GPT4Free proxy routing. Given the rapid addition of providers (like NEAR AI Cloud in [PR #2917](https://github.com/sipeed/picoclaw/pull/2917)), this is a highly probable addition in a near-term release.
*   **Project Funding ([Issue #2912](https://github.com/sipeed/picoclaw/issues/2912)):** A community member suggested adding a `FUNDING.yml`, indicating project maturity and a user base eager to ensure long-term maintenance.

## 7. User Feedback Summary
User feedback is currently focused on **deployment flexibility** and **multi-agent reliability**. On the positive side, users appreciate the rich channel support (Telegram, Discord) and the advanced multi-agent orchestration capabilities. However, there is notable frustration regarding **state/session management**—users feel that session history is too easily broken or visually truncated in the Web UI. Additionally, homelab and lightweight hardware users are actively requesting lower-overhead execution models and free-tier provider integrations, indicating that the project is successfully reaching beyond enterprise users into the prosumer market.

## 8. Backlog Watch
*   **[PR #2662](https://github.com/sipeed/picoclaw/pull/2662): Unify vendors table in providers documentation.** Open since April 24th, this PR needs maintainer review. As provider support expands rapidly, docs will quickly become unmaintainable without this structural fix.
*   **[Issue #629](https://github.com/sipeed/picoclaw/issues/629): Lack of LLM retry logic.** Open since February, this bug causes task hangs and represents a significant reliability flaw in production environments. It requires urgent architectural triage.
*   **[Issue #2775](https://github.com/sipeed/picoclaw/issues/2775): Sub-Agent AGENT.md inheritance overrides.** Resolving this identity bleed is critical for the platform's multi-agent use cases to function correctly.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-22

## 1. Today's Overview
NanoClaw is experiencing a period of high active development, particularly in expanding its provider ecosystem and multi-channel integrations. The project saw robust pull request activity (13 updated, 11 currently open) against a backdrop of zero new releases, indicating an intensive feature development and integration phase. Key focus areas include deepening support for OpenAI Codex, implementing the Agent Client Protocol (ACP) for IDE integrations, and enhancing multimedia capabilities via Google's Veo 3.1. However, the influx of new issues related to the Signal channel setup highlights stability gaps in its messaging channel configurations. Overall, project health is highly active and collaborative, with multiple external contributors driving substantial architectural additions.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Project Progress
Two pull requests were closed today, representing targeted bug fixes and architectural refinements:
*   **[CLOSED] [PR #2576](https://github.com/qwibitai/nanoclaw/pull/2576) fix(progress): assistant text block 改用 progressType=text:** Fixed a regression (introduced in commit `ea21e58`) where intermediate agent narratives were incorrectly suppressed during tool calls in both SDK and Interactive modes. 
*   **[CLOSED] [PR #2577](https://github.com/qwibitai/nanoclaw/pull/2577) feat(deshi): auto-inject channelContext from session_routing:** Removed the need for agents to manually fabricate `channelContext` by implementing a SQLite direct-read auto-injection from `session_routing`, streamlining container context management.

Currently open PRs show major feature advancements across providers and channels:
*   **Codex Integration:** The codebase is receiving massive architectural updates to support OpenAI Codex as a first-class citizen. [PR #2580](https://github.com/qwibitai/nanoclaw/pull/2580) enables full Codex-only installations, [PR #2474](https://github.com/qwibitai/nanoclaw/pull/2474) introduces an AI-coding-CLI picker during setup, and [PR #2361](https://github.com/qwibitai/nanoclaw/pull/2361) tightens Codex provider contracts.
*   **IDE & Protocol Support:** Significant work has been done on the Agent Client Protocol (ACP). [PR #2542](https://github.com/qwibitai/nanoclaw/pull/2542) adds an ACP Client Protocol provider, while [PR #2575](https://github.com/qwibitai/nanoclaw/pull/2575) introduces `claw-acp`, an ACP server bridge allowing IDEs (like WebStorm) to use NanoClaw as the AI backend.
*   **Media & Messaging:** [PR #2532](https://github.com/qwibitai/nanoclaw/pull/2532) brings end-to-end Veo 3.1 video generation and stitching to Slack, and [PR #2337](https://github.com/qwibitai/nanoclaw/pull/2337) surfaces the Claude Code skill catalog to non-Claude providers.

## 4. Community Hot Topics
The community and core contributors are highly focused on interoperability and expanding the assistant's reach. The most notable discussions revolve around:
*   **Multi-Provider Expansion:** Community contributor *RheagalFire* submitted [PR #2490](https://github.com/qwibitai/nanoclaw/pull/2490) to add a LiteLLM provider, lowering the barrier for users wanting to connect diverse LLM backends.
*   **IDE Integrations:** The ACP bridge ([PR #2575](https://github.com/qwibitai/nanoclaw/pull/2575)) is generating interest due to its ability to seamlessly integrate NanoClaw with existing AI chat interfaces in IDEs like WebStorm.
*   **Channel Expansions:** Continued work on Telegram claim links ([PR #2578](https://github.com/qwibitai/nanoclaw/pull/2578)) and Slack video delivery ([PR #2532](https://github.com/qwibitai/nanoclaw/pull/2532)) shows strong community demand for robust cross-platform presence.

## 5. Bugs & Stability
Three significant bugs related to the Signal messaging channel were reported today by user *snymanpaul*, all impacting the setup and authentication flow:
1.  **[HIGH] Deadlock during account listing:** [Issue #2582](https://github.com/qwibitai/nanoclaw/issues/2582) - `signal-auth listAccounts` experiences a deadlock when the `signal-cli` daemon holds the config file lock. A fix is currently pending review in [PR #2584](https://github.com/qwibitai/nanoclaw/pull/2584) (though the PR currently targets the JSON field mismatch, careful review is needed to ensure it handles timeouts/locks).
2.  **[MEDIUM] Service restart no-op:** [Issue #2583](https://github.com/qwibitai/nanoclaw/issues/2583) - `restartService` uses `launchctl kickstart -k`, which silently fails if the plist is unloaded, causing setup inconsistencies.
3.  **[LOW-MEDIUM] JSON field mismatch:** [Issue #2581](https://github.com/qwibitai/nanoclaw/issues/2581) - `signal-auth` incorrectly reports "no linked account" on `signal-cli` >= 0.13 due to the library changing the JSON output field from `account` to `number`. A targeted fix is proposed in [PR #2584](https://github.com/qwibitai/nanoclaw/pull/2584).

Additionally, a bug regarding WhatsApp forced logouts leaving dead credentials on disk was addressed in [PR #2579](https://github.com/qwibitai/nanoclaw/pull/2579), preventing repeated 401 loops on system reboots.

## 6. Feature Requests & Roadmap Signals
Current open PRs strongly signal the project's near-term roadmap:
*   **Total Provider Agnosticism:** Features like the AI-coding-CLI picker ([PR #2474](https://github.com/qwibitai/nanoclaw/pull/2474)), LiteLLM integration ([PR #2490](https://github.com/qwibitai/nanoclaw/pull/2490)), and full Codex support ([PR #2580](https://github.com/qwibitai/nanoclaw/pull/2580)) indicate an upcoming release focused on decoupling the assistant from any single LLM provider.
*   **Protocol-First Tooling:** The introduction of ACP ([PR #2542](https://github.com/qwibitai/nanoclaw/pull/2542)) suggests NanoClaw is positioning itself as a backend agent infrastructure capable of being plugged into various frontend environments and IDEs.
*   **Rich Media Generation:** The Veo 3.1 integration ([PR #2532](https://github.com/qwibitai/nanoclaw/pull/2532)) demonstrates a push toward multi-modal agent capabilities, moving beyond text-based tool calls to automated video generation and delivery.

## 7. User Feedback Summary
Users and contributors operating NanoClaw in real-world multi-service environments are encountering friction with daemon lifecycle management (e.g., `launchctl` silently failing, `signal-cli` file locks). On the positive side, contributor satisfaction seems high regarding architectural flexibility; developers are enthusiastic about plugging in custom providers and utilizing the skill catalog across different environments. The promptness of the recent SDK text suppression fix ([PR #2576](https://github.com/qwibitai/nanoclaw/pull/2576)) was likely well received by users relying on interactive modes.

## 8. Backlog Watch
*   **[PR #2490](https://github.com/qwibitai/nanoclaw/pull/2490) Feat/add litellm provider:** Open since 2026-05-15. Given the current architectural push for provider flexibility, this PR needs maintainer attention to align with the newly updated provider contracts.
*   **[PR #2579](https://github.com/qwibitai/nanoclaw/pull/2579) fix(whatsapp): clear auth credentials immediately on 401 logout:** Submitted yesterday, this is a critical stability fix for WhatsApp users experiencing forced logouts. Merging this should be prioritized to prevent boot-loop failures.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-05-22

## 1. Today's Overview
The NullClaw project, an open-source AI agent framework, is currently experiencing a period of zero closed activity today, with no new releases, no closed issues, and no merged pull requests in the last 24 hours. However, development remains active on the periphery, as evidenced by two significant open pull requests that were updated or created recently. The focus of ongoing community contributions leans heavily toward infrastructure scheduling and expanding cloud provider compatibility. Overall, the project's public-facing merge activity is paused for the day, but the open pipeline suggests steady forward momentum in ecosystem expansion. 

## 2. Releases
There have been no new releases recorded for NullClaw in the last 24 hours.

## 3. Project Progress
No pull requests were merged and no issues were closed today. While no code was officially shipped, the project's open pipeline advanced with two notable feature additions currently under review:
*   **Scheduled Automation Engine:** Work on the Cron subagent ([PR #783](https://github.com/nullclaw/nullclaw/pull/783)) continues to be actively updated, indicating progress toward native, DB-backed scheduled tasks.
*   **Cloud Provider Expansion:** A new provider integration was introduced today via [PR #922](https://github.com/nullclaw/nullclaw/pull/922), aiming to connect NullClaw to the NEAR AI Cloud ecosystem.

## 4. Community Hot Topics
Due to a lack of recent issues and no user comments or reactions (👍 0) on the currently open pull requests, there are no clear "hot topics" driving community discourse today. The quiet comment sections on major PRs like [PR #783](https://github.com/nullclaw/nullclaw/pull/783) and [PR #922](https://github.com/nullclaw/nullclaw/pull/922) suggest that these features are either in early review phases or are being iterated on quietly by core contributors.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the issues tracker over the last 24 hours. The absence of new bug reports indicates that the current stable release is holding up well under typical user workloads.

## 6. Feature Requests & Roadmap Signals
Today's open PRs provide a strong signal regarding the project's near-term roadmap, heavily prioritizing automated workflows and cloud interoperability:
*   **Advanced Autonomous Scheduling:** [PR #783](https://github.com/nullclaw/nullclaw/pull/783) introduces a robust Cron subagent engine complete with history tracking, time-zone offsets, and security hardening. This signals a major leap toward allowing NullClaw agents to operate autonomously on recurring schedules.
*   **NEAR AI Integration:** [PR #922](https://github.com/nullclaw/nullclaw/pull/922) seeks to add NEAR AI Cloud as an OpenAI-compatible provider. The inclusion of onboarding defaults and API key routing indicates a push to make NullClaw easily deployable within Web3/NEAR-centric developer ecosystems.

## 7. User Feedback Summary
There is no direct user feedback, pain points, or use-case discussions to report from today's GitHub activity. The tracker saw zero new issues created, making it impossible to gauge current user satisfaction or dissatisfaction based on today's data alone.

## 8. Backlog Watch
*   **[PR #783 - feat(cron): cron subagent, run history, JSON output, security hardening](https://github.com/nullclaw/nullclaw/pull/783):** This is a critical piece of infrastructure that has been open since April 7, 2026. Having been updated yesterday (May 21), it is clearly not abandoned, but its 45-day open lifetime suggests a high degree of complexity. Maintainers should prioritize a final review cycle to get this highly valuable scheduling feature merged.
*   **[PR #922 - feat(providers): add NEAR AI Cloud provider](https://github.com/nullclaw/nullclaw/pull/922):** Created just yesterday, this PR needs initial maintainer triage to verify the API integration standards, metadata wiring, and model catalog parsing to ensure it meets NullClaw's provider onboarding checklist.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-22

## 1. Today's Overview
Project activity for IronClaw (nearai/ironclaw) on 2026-05-22 shows high throughput, with 46 pull requests and 24 issues updated within the last 24 hours. Core maintainers are pushing heavily on the "Reborn" architecture initiative, landing foundational crates for extensions, skills, and production runtime wiring. No new version was released today, and the most recent published version on crates.io (0.24.0) continues to lag significantly behind the latest tagged release (0.27.0), a pain point noted by the community. Overall project health remains strong and highly active, dominated by internal architectural refactoring rather than immediate user-facing feature releases.

## 2. Releases
No new releases were cut today. The latest tagged version in the repository remains `v0.27.0` (from April 29, 2026), and the latest published version to `crates.io` is `0.24.0`. No breaking changes or migration notes to report for this date.

## 3. Project Progress
Significant structural progress was made on the "Reborn" architectural initiative. 
*   **Extension & Skill Composition:** [PR #3858](https://github.com/nearai/ironclaw/pull/3858) (replacing closed [PR #3855](https://github.com/nearai/ironclaw/pull/3855)) moved generic extension install state into the `ironclaw_extensions` crate. [PR #3854](https://github.com/nearai/ironclaw/pull/3854) added the `ironclaw_reborn_extensions` crate, and [PR #3848](https://github.com/nearai/ironclaw/pull/3848) adapted skill bundles into the new Reborn context.
*   **Host Runtime Wiring:** [PR #3827](https://github.com/nearai/ironclaw/pull/3827) (merged) grouped first-party host API bindings. [PR #3830](https://github.com/nearai/ironclaw/pull/3830) added invocation services resolution from the runtime plan, and [PR #3856](https://github.com/nearai/ironclaw/pull/3856) added a tenant sandbox process port.
*   **Channel Integrations:** Progress was made on WebChat v2 ([PR #3815](https://github.com/nearai/ironclaw/pull/3815)), Telegram v2 inbound tracing ([PR #3590](https://github.com/nearai/ironclaw/pull/3590)), and WeCom/WeChat ([PR #2394](https://github.com/nearai/ironclaw/pull/2394), [PR #3680](https://github.com/nearai/ironclaw/pull/3680)).

## 4. Community Hot Topics
*   **Release Publishing Bottleneck:** The most discussed user-facing issue is [Issue #3259](https://github.com/nearai/ironclaw/issues/3259) (7 comments). Downstream consumers are currently pinned to `v0.24.0` on crates.io due to Wasmtime 28.x CVEs, while newer versions are only tagged in GitHub but not published.
*   **Reborn Architecture Planning:** [Issue #3031](https://github.com/nearai/ironclaw/issues/3031) (7 comments) and [Issue #3016](https://github.com/nearai/ironclaw/issues/3016) (13 comments) are actively tracking the complex dependency DAG for the Reborn product surface migration and agent loop turn coordination. 
*   **Integration Testing:** [Issue #3022](https://github.com/nearai/ironclaw/issues/3022) (11 comments) details the requirements for event substrate integration tests prior to final cutover.

## 5. Bugs & Stability
*   **Severity: Medium:** [Issue #3839](https://github.com/nearai/ironclaw/issues/3839) reports that the UI "Retry" button for failed Missions returns `{"fired": false}` and fails to execute the retry. No fix PR is listed yet.
*   **Severity: Low:** [Issue #3447](https://github.com/nearai/ironclaw/issues/3447) tracks a recurring nightly E2E test failure that needs investigation.
*   **Severity: Low (Fixed):** [PR #3852](https://github.com/nearai/ironclaw/pull/3852) addresses follow-up issues from a before-inbound policy review, applying a 5s timeout to bound policy calls and fixing raw external ref logging.

## 6. Feature Requests & Roadmap Signals
*   **Auth & Secrets:** [Issue #3810](https://github.com/nearai/ironclaw/issues/3810), [Issue #3811](https://github.com/nearai/ironclaw/issues/3811), and [Issue #3812](https://github.com/nearai/ironclaw/issues/3812) outline a 3-step roadmap to implement Reborn-native product auth, OAuth callbacks, and secrets composition.
*   **Slack MVP:** [Issue #3857](https://github.com/nearai/ironclaw/issues/3857) requests a default-off Slack ProductAdapter MVP with preconfigured credentials as part of the Reborn lanes.
*   **IronHub Marketplace:** [PR #3737](https://github.com/nearai/ironclaw/pull/3737) introduces a massive feature set allowing CLI, agent tools, and gateway endpoints to install tools and skills dynamically from IronHub. 
*   **Routine Notifications:** [Issue #1519](https://github.com/nearai/ironclaw/issues/1519) (an older request) asks for better context in routine notifications sent to users' chat threads.

## 7. User Feedback Summary
Users are interacting heavily with the Web UI and multi-channel deployments, surfacing friction points around UI/UX and context isolation. For example, [Issue #3840](https://github.com/nearai/ironclaw/issues/3840) notes inconsistent visual treatment of channel badges (WeChat, Telegram) in the Web UI. [Issue #3846](https://github.com/nearai/ironclaw/issues/3846) highlights a confusing UX where Missions created via Web Chat unexpectedly inherit the `source-channel` label (e.g., `TELEGRAM` or `REPL`) of the currently viewed conversation. [Issue #3821](https://github.com/nearai/ironclaw/issues/3821) flags that `Thread::restore_from_messages` aggressively drops orphan assistant rows, breaking out-of-band context injection, which affects advanced users manipulating thread state.

## 8. Backlog Watch
*   **Wasmtime CVE Publishing:** [Issue #3259](https://github.com/nearai/ironclaw/issues/3259) needs an immediate resolution or official maintainer response regarding the crates.io publishing pipeline to help downstream consumers patch known CVEs.
*   **Per-Channel Tool Filtering:** [PR #1378](https://github.com/nearai/ironclaw/pull/1378), a highly-requested feature for JSON-configurable per-channel MCP and built-in tool filtering (crucial for multi-channel deployments like Slack + Telegram + Web), has been open since mid-March and awaits core review/merge.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-05-22

## 1. Today's Overview
LobsterAI experienced a highly active day focused heavily on code integration and maintenance, marked by the merging of two significant infrastructure PRs and a batch update of long-standing community contributions. Although no new issues were created and no new software releases were cut, nine open PRs—mostly dating back to early April—saw renewed activity, indicating a possible backlog triage effort by the maintainers. The project's current development focus is heavily centered on UI/UX refinement, specifically optimizing the IM (Instant Messaging) bot management interface and gateway settings. Overall, the project demonstrates healthy maintenance synchronization, though the lack of new user-reported issues today might suggest a quieter user base or a shift of bug reporting to other channels.

## 2. Releases
No new releases were published today.

## 3. Project Progress
Two pull requests were successfully closed (presumably merged) today, pushing forward the application's core UI architecture:
*   **[CLOSED] Redesign IM Bot Management UI** ([PR #2025](https://github.com/netease-youdao/LobsterAI/pull/2025)): Authored by `fisherdaddy`, this major refactor targets the renderer, main process, and IM areas, fundamentally redesigning how users manage their IM bot integrations.
*   **[CLOSED] Optimize Gateway Restart in Settings** ([PR #2024](https://github.com/netease-youdao/LobsterAI/pull/2024)): Also authored by `fisherdaddy`, this PR optimizes the application's settings panel to ensure smoother and more reliable gateway restarts.

## 4. Community Hot Topics
While no single PR generated massive new comments today, a large cluster of stale PRs was updated, suggesting the maintainers are currently reviewing a backlog of community contributions. The most notable feature discussions revolve around long-awaited quality-of-life improvements:
*   **Desktop Notifications for Cowork:** ([PR #1536](https://github.com/netease-youdao/LobsterAI/pull/1536)) proposes sending OS-level notifications when background AI tasks finish, addressing a core need for users running long-executing agents.
*   **Conversation Tagging & Filtering:** ([PR #1542](https://github.com/netease-youdao/LobsterAI/pull/1542)) introduces a categorization system for sessions, reflecting the community's need for better context management in prolonged AI interactions.
*   **Engine Startup Timeout Handling:** ([PR #1546](https://github.com/netease-youdao/LobsterAI/pull/1546)) tackles a major UX friction point by allowing users to cancel or view logs if the OpenClaw engine gets stuck during initialization.

## 5. Bugs & Stability
Several bug fixes were surfaced during today's backlog review, highlighting areas of previous instability, particularly around state management and internationalization (i18n):
*   **High Severity: OAuth Polling Memory Leak** ([PR #1544](https://github.com/netease-youdao/LobsterAI/pull/1544)): Closing the settings panel during GitHub Copilot authentication previously left background polling running for up to 15 minutes and silently dropped tokens upon success. Fix PR is actively under review.
*   **Medium Severity: State Sync Issue** ([PR #1545](https://github.com/netease-youdao/LobsterAI/pull/1545)): Updating an Agent's active skills required users to manually switch agents to see UI changes due to a Redux state desync. 
*   **Medium Severity: I18n Hardcoded Strings** ([PR #1543](https://github.com/netease-youdao/LobsterAI/pull/1543)): Hardcoded Chinese strings in safety/approval dialogs broke the user experience for international users. 
*   **Low Severity: UI Inconsistencies** ([PR #1540](https://github.com/netease-youdao/LobsterAI/pull/1540) - Missing i18n keys for edit buttons, and [PR #1547](https://github.com/netease-youdao/LobsterAI/pull/1547) - Scheduled task notification settings getting stuck).

## 6. Feature Requests & Roadmap Signals
Based on the recently closed PRs and active open proposals, LobsterAI's near-term roadmap is heavily focused on transitioning from a simple chat interface to a robust background agent operator:
1.  **Agent Lifecycle Management:** Features like OS notifications ([PR #1536](https://github.com/netease-youdao/LobsterAI/pull/1536)) and message bookmarking ([PR #1538](https://github.com/netease-youdao/LobsterAI/pull/1538)) show a strong push toward allowing users to run agents asynchronously over long periods.
2.  **Enterprise/IM Integrations:** The merging of the IM Bot Management redesign ([PR #2025](https://github.com/netease-youdao/LobsterAI/pull/2025)) signals that cross-platform bot deployment (e.g., to Feishu, Discord, etc.) is a primary commercial focus.

## 7. User Feedback Summary
Real user pain points extracted from today's active bug reports center largely around **interrupted workflows and state inconsistencies**:
*   *Background Task Anxiety:* Users dislike having to keep the app in the foreground to know when an agent finishes its task.
*   *Settings Friction:* Bugs related to OAuth drops ([PR #1544](https://github.com/netease-youdao/LobsterAI/pull/1544)) and IM notification dropdowns resetting ([PR #1547](https://github.com/netease-youdao/LobsterAI/pull/1547)) indicate that the settings menu needs rigorous testing. Users expect configuration changes to persist reliably on the first attempt.

## 8. Backlog Watch
The project has a significant cluster of 9 open PRs dating back to **2026-04-07** that have been marked with the `[stale]` tag but received fresh updates today. Maintainers should prioritize resolving these to avoid community contributor fatigue:
*   **Agent Customization PRs:** Tagging ([PR #1542](https://github.com/netease-youdao/LobsterAI/pull/1542)) and Bookmarking ([PR #1538](https://github.com/netease-youdao/LobsterAI/pull/1538)) are highly requested features that have been awaiting review for over a month.
*   **Engine Reliability:** The engine startup timeout PR ([PR #1546](https://github.com/netease-youdao/LobsterAI/pull/1546)) is critical for user retention, as being stuck on a 5-minute loading screen with no escape hatch is a severe usability blocker.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-22

## 1. Today's Overview
Moltis experienced a highly active development day on May 22, 2026, driven primarily by internal contributor `penso` pushing significant infrastructure fixes and features. The project saw 5 issues updated (all remaining open) and 5 pull requests updated, including one closure. Activity heavily centers around stabilizing self-hosted deployments—specifically Docker networking and telephony integrations—alongside expanding LLM provider support. Overall project health appears robust, with maintainers actively responding to user-reported bugs with targeted, well-scoped fixes.

## 2. Releases
No new releases were published today. The most recent stable release remains on the horizon as upstream merges accumulate.

## 3. Project Progress
The primary milestone today was the closure of **[PR #1005](https://github.com/moltis-org/moltis/pull/1005)** (`feat(openai-codex): add reasoning effort support`), which successfully passed review. This feature introduces `reasoning_effort` configuration for GPT-5 Codex instances and ensures encrypted reasoning blobs persist across follow-up turns, representing a major advancement in complex reasoning workflows. 

Additionally, four new PRs were opened, signaling rapid development in infrastructure and provider support:
*   **[PR #1031](https://github.com/moltis-org/moltis/pull/1031)**: Added NEAR AI Cloud as an OpenAI-compatible provider, expanding user choices for decentralized/TEE-capable AI models.
*   **[PR #1033](https://github.com/moltis-org/moltis/pull/1033)**: Introduced an authenticated vault-disable API, allowing users to opt-out of at-rest encryption for easier local development.

## 4. Community Hot Topics
The most actively discussed issue today is **[Issue #977](https://github.com/moltis-org/moltis/issues/977)** ([Bug]: Browser sandbox fails when Moltis runs in Docker), accumulating 4 comments since its creation. The underlying need here is clear: advanced homelabbers and enterprise users heavily utilize Proxmox/LXC environments with mapped Docker sockets, and sandboxing edge cases in these nested environments remain a friction point. 

Another key topic is **[Issue #1028](https://github.com/moltis-org/moltis/issues/1028)** ([Feature]: Agent should have access to Moltis docs OOTB), which highlights a fundamental UX need in AI agents. Users want the agent to natively understand its own configuration and documentation without manual RAG injection, pointing toward future roadmap developments in agent self-awareness.

## 5. Bugs & Stability
Stability challenges were reported in voice and telephony modules, alongside the ongoing Docker sandbox issue. 
*   **High Severity:** **[Issue #1032](https://github.com/moltis-org/moltis/issues/1032)** reports that Twilio phone calls fail after the initial greeting (agent does not respond to user speech). *Fix Status:* Directly addressed by **[PR #1034](https://github.com/moltis-org/moltis/pull/1034)**, which fixes `SpeechResult` parsing and telephony speech dispatch.
*   **High Severity:** **[Issue #977](https://github.com/moltis-org/moltis/issues/977)** outlines persistent Docker sandbox permissions issues (`SingletonLock: Permission denied`). *Fix Status:* Directly addressed by **[PR #1035](https://github.com/moltis-org/moltis/pull/1035)**, which implements auto-detection for host-visible data mounts.
*   **Medium Severity:** **[Issue #1030](https://github.com/moltis-org/moltis/issues/1030)** highlights a hardcoding bug where OpenAI TTS demands the `opus` format, breaking compatibility with alternative TTS providers like Speaches. *Fix Status:* No active PR yet.

## 6. Feature Requests & Roadmap Signals
Two distinct feature requests provided signals for the project's next iteration:
*   **[Issue #1029](https://github.com/moltis-org/moltis/issues/1029)** requests native handling of Piper TTS audio conversions within the Rust codebase (`crates/voice/src/tts/piper.rs`). This suggests the community is actively pushing Moltis to become a fully self-hostable, local-voice privacy hub.
*   **[Issue #1028](https://github.com/moltis-org/moltis/issues/1028)** (Agent access to OOTB docs) indicates that future versions will likely embed documentation natively into the agent's base system prompt or vector store.

Predictions for upcoming release inclusions: The Twilio fix (#1034), Docker sandbox fix (#1035), and NEAR AI Cloud provider (#1031) are highly likely candidates for the next version bump given their current open momentum.

## 7. User Feedback Summary
Real-world user feedback today reveals a user base eager to deploy Moltis as a comprehensive, voice-enabled smart assistant. Users are running Moltis in advanced self-hosted setups (Proxmox/LXC) and integrating deeply with telephony (Twilio) and local AI models. The primary pain point is friction in infrastructure setup, specifically network/mount permissions in containerized environments and audio format compatibility. Satisfaction is high regarding the breadth of features, but stability in edge-case voice deployments is currently a frustrating bottleneck.

## 8. Backlog Watch
*   **[Issue #977](https://github.com/moltis-org/moltis/issues/977)** has been open since May 6th and only received a comprehensive fix PR (**[PR #1035](https://github.com/moltis-org/moltis/pull/1035)**) today. Maintainers should prioritize merging this to clear a major self-hosting hurdle.
*   Maintainers should keep an eye on **[Issue #1029](https://github.com/moltis-org/moltis/issues/1029)** and **[Issue #1030](https://github.com/moltis-org/moltis/issues/1030)**; as the project shifts heavily toward voice integrations, resolving TTS compatibility and local conversion natively will be critical to preventing an accumulation of similar audio-related bug reports.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-22

## 1. Today's Overview
CoPaw (internally referenced as QwenPaw) experienced a highly active day with 26 issues updated and 27 pull requests processed. The maintainer team demonstrated strong throughput, merging or closing 19 PRs while keeping the open issue queue active with 18 ongoing discussions. No new version was released today, though the high merge rate suggests a patch release (potentially v1.1.8.post2 or v1.1.9) may be imminent. The bulk of today's activity centers on channel reliability (WeChat iLink, DingTalk, Feishu), context/compression improvements, and console UX refinements. Overall project health appears strong with responsive maintainer engagement and a growing first-time contributor base.

## 2. Releases
No new releases were published today. The project remains on version **v1.1.8.post1** as the latest stable release.

## 3. Project Progress

**19 PRs merged/closed today**, spanning bug fixes, features, and infrastructure:

| Area | PR | Summary |
|------|-----|---------|
| **WeChat iLink** | [#4576](https://github.com/agentscope-ai/QwenPaw/pull/4576) | Fixed message dedup bypass and infinite retry on expired `context_token` — addresses issues [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) and [#4546](https://github.com/agentscope-ai/QwenPaw/issues/4546) |
| **WeChat API** | [#4597](https://github.com/agentscope-ai/QwenPaw/pull/4597) *(open)* | Reports send failure for API-initiated messages instead of always returning success — addresses [#4521](https://github.com/agentscope-ai/QwenPaw/issues/4521) |
| **DingTalk** | [#4600](https://github.com/agentscope-ai/QwenPaw/pull/4600) *(open)* | Decodes percent-encoded Chinese filenames in file sending — fixes [#4586](https://github.com/agentscope-ai/QwenPaw/issues/4586) |
| **Feishu** | [#4572](https://github.com/agentscope-ai/QwenPaw/issues/4572) *(closed issue)* | CardKit streaming fixed (sequence init 0→1) — likely fixed in prior merge |
| **Console UX** | [#4520](https://github.com/agentscope-ai/QwenPaw/pull/4520) / [#4598](https://github.com/agentscope-ai/QwenPaw/pull/4598) | Chat input draft persistence across page navigation |
| **Dark Mode** | [#4599](https://github.com/agentscope-ai/QwenPaw/pull/4599) | Pet import drop zone dark mode fix — closes [#4592](https://github.com/agentscope-ai/QwenPaw/issues/4592) |
| **Skill System** | [#4518](https://github.com/agentscope-ai/QwenPaw/pull/4518) | Unified Skill Market (3 providers, async search, httpx refactor) |
| **Skill Validation** | [#4591](https://github.com/agentscope-ai/QwenPaw/pull/4591) | Complete skill frontmatter validation on save/import |
| **Cron Jobs** | [#4602](https://github.com/agentscope-ai/QwenPaw/pull/4602) | Isolated cron job execution within unified session |
| **Context Handling** | [#4567](https://github.com/agentscope-ai/QwenPaw/pull/4567) | File block processing in message handler with token counting |
| **Security** | [#4569](https://github.com/agentscope-ai/QwenPaw/pull/4569) | Added user deny info in tool response to prevent repeated attempts |
| **Browser** | [#4603](https://github.com/agentscope-ai/QwenPaw/pull/4603) | Headless browser warning message for verification scenarios |
| **Voice** | [#4601](https://github.com/agentscope-ai/QwenPaw/pull/4601) *(open)* | Respects configured Whisper transcription instead of browser Speech API — fixes [#4556](https://github.com/agentscope-ai/QwenPaw/issues/4556) |
| **Local Models** | [#4595](https://github.com/agentscope-ai/QwenPaw/pull/4595) *(open)* | Adds `max_context_length` to provider model info and llama.cpp ctx-size |
| **Deploy** | [#4608](https://github.com/agentscope-ai/QwenPaw/pull/4608) | Reverted `QWENPAW_AUTO_INITIALIZATION` entrypoint change |
| **Testing** | [#4609](https://github.com/agentscope-ai/QwenPaw/pull/4609) | Bugfix for `test_mcp.py` |

**Major open PRs under review:**
- [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813): Tauri 2.x desktop app support (first-time contributor, open since April — significant architectural addition)
- [#4464](https://github.com/agentscope-ai/QwenPaw/pull/4464): E2E test migration with mock infrastructure

## 4. Community Hot Topics

**Most active issues by comment count:**

1. **[#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477)** (14 comments) — WeChat iLink cron push failures with expired `context_token`. This has driven significant engineering effort, resulting in merged PR [#4576](https://github.com/agentscope-ai/QwenPaw/pull/4576). *Underlying need: reliable scheduled messaging in WeChat, a primary use case for Chinese enterprise users.*

2. **[#4559](https://github.com/agentscope-ai/QwenPaw/issues/4559)** (8 comments) — Severe UI performance degradation with 40+ agents. References original issue [#3499](https://github.com/agentscope-ai/QwenPaw/issues/3499). *Underlying need: scalability for power users running many agents.*

3. **[#4556](https://github.com/agentscope-ai/QwenPaw/issues/4556)** / **[#4601](https://github.com/agentscope-ai/QwenPaw/pull/4601)** (4 comments each) — Voice transcription ignoring configured Whisper provider. Fix PR already submitted by first-time contributor.

4. **[#4585](https://github.com/agentscope-ai/QwenPaw/issues/4585)** (4 comments) — Self-developed plugin tools not auto-discovered in WeCom channel. *Underlying need: feature parity between desktop and channel conversations for plugin tooling.*

5. **[#4604](https://github.com/agentscope-ai/QwenPaw/issues/4604)** (4 comments) — DingTalk API messages only appearing in console, not forwarded to DingTalk channel. *Underlying need: external API → channel bridging for automation workflows.*

6. **[#4581](https://github.com/agentscope-ai/QwenPaw/issues/4581)** (4 comments, closed/invalid) — Model switching causing long-term memory loss. *Underlying need: memory persistence across model configurations — a critical trust issue.*

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Status | Fix Available |
|----------|-------|--------|---------------|
| 🔴 **Critical** | [Gemini/Gemma `max_tokens` ValidationError crash](https://github.com/agentscope-ai/QwenPaw/issues/4605) | Open | Not yet — needs param mapping fix for non-OpenAI models |
| 🔴 **High** | [40+ agents causes severe UI lag](https://github.com/agentscope-ai/QwenPaw/issues/4559) | Open | Not yet — scalability investigation needed |
| 🔴 **High** | [WeChat `send_file_to_user` unreliable delivery](https://github.com/agentscope-ai/QwenPaw/issues/4612) | Open | Partial — [#4576](https://github.com/agentscope-ai/QwenPaw/pull/4576) addresses dedup/retry; file delivery still unstable |
| 🟡 **Medium** | [WeChat iLink cron push fails on expired token](https://github.com/agentscope-ai/QwenPaw/issues/4477) | Closed | ✅ Fixed in PR [#4576](https://github.com/agentscope-ai/QwenPaw/pull/4576) |
| 🟡 **Medium** | [Topic list wiped in heavy tool-call sessions](https://github.com/agentscope-ai/QwenPaw/issues/4519) | Closed | Under investigation |
| 🟡 **Medium** | [Feishu CardKit streaming broken (sequence=0)](https://github.com/agentscope-ai/QwenPaw/issues/4572) | Closed | ✅ Fixed |
| 🟡 **Medium** | [DingTalk Chinese filename encoding](https://github.com/agentscope-ai/QwenPaw/issues/4586) | Open | ✅ Fix PR [#4600](https://github.com/agentscope-ai/QwenPaw/pull/4600) under review |
| 🟡 **Medium** | [Plugin tools not discovered in WeCom](https://github.com/agentscope-ai/QwenPaw/issues/4585) | Open | Not yet |
| 🟡 **Medium** | [ACP session doesn't auto-close, causes conflicts](https://github.com/agentscope-ai/QwenPaw/issues/4611) | Open | Not yet |
| 🟢 **Low** | [Pet import drop zone invisible in dark mode](https://github.com/agentscope-ai/QwenPaw/issues/4592) | Closed | ✅ Fixed in PR [#4599](https://github.com/agentscope-ai/QwenPaw/pull/4599) |
| 🟢 **Low** | [`max_input_length` UI field missing in v1.1.8](https://github.com/agentscope-ai/QwenPaw/issues/4590) | Closed | Related to [#4004](https://github.com/agentscope-ai/QwenPaw/issues/4004) auto-derive feature |
| 🟢 **Low** | [Orphaned backend processes on desktop shutdown](https://github.com/agentscope-ai/QwenPaw/issues/4587) | Open | Not yet |

## 6. Feature Requests & Roadmap Signals

| Feature Request | Issue | Likelihood | Rationale |
|----------------|-------|------------|-----------|
| **DAG-based lossless context compression** | [#4551](https://github.com/agentscope-ai/QwenPaw/issues/4551) | 🟡 Medium | Detailed proposal with CJK token fix; high community value for long conversations. Aligns with ongoing context work ([#4567](https://github.com/agentscope-ai/QwenPaw/pull/4567), [#4004](https://github.com/agentscope-ai/QwenPaw/issues/4004)) |
| **Plugin agent hook (`register_agent_hook`)** | [#4613](https://github.com/agentscope-ai/QwenPaw/issues/4613) | 🟢 High | Well-scoped API request from a plugin developer building LightRAG integration; natural extension of existing PluginApi |
| **Browser automation → Playwright-first** | [#4584](https://github.com/agentscope-ai/QwenPaw/issues/4584) | 🟡 Medium | CDP instability is a recurring pain point; Playwright migration would be significant but high-impact |
| **Mid-execution intervention for agent planning** | [#4606](https://github.com/agentscope-ai/QwenPaw/issues/4606) | 🟡 Medium | Human-in-the-loop during agent planning; aligns with growing "agentic" UX trends |
| **Unified work directory (`.qwenpaw`)** | [#4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) | 🟢 High | Simple, well-scoped, standard practice — likely to land soon |
| **Console UI consistency** | [#4593](https://github.com/agentscope-ai/QwenPaw/issues/4593) | 🟢 High | Low-effort polish task |

**Predictions for next release (v1.1.9 or v1.1.8.post2):** Channel reliability batch (WeChat, DingTalk, Feishu fixes), Skill Market integration, chat draft persistence, dark mode fixes, and `max_context_length` auto-derivation.

## 7. User Feedback Summary

**Key pain points identified:**
- **Channel reliability is the #1 concern** — WeChat iLink, DingTalk, and Feishu each have multiple open issues around message delivery, file sending, and streaming. Users depend on these channels for production deployments and find silent failures (returning success but not delivering) particularly frustrating.
- **Scalability ceiling** — Power users running 40+ agents hit significant UI slowdowns, suggesting frontend rendering or data-fetching bottlenecks.
- **Multi-model memory trust** — Users switching between models fear losing accumulated long-term memory ([#4581](https://github.com/agentscope-ai/QwenPaw/issues/4581)), even if the issue was marked invalid. The perception of fragility undermines confidence.
- **Desktop app lifecycle** — Orphaned processes on shutdown ([#4587](https://github.com/agentscope-ai/QwenPaw/issues/4587)) and proxy configuration not being respected ([#4607](https://github.com/agentscope-ai/QwenPaw/issues/4607)) indicate desktop packaging maturation is needed.

**Positive signals:**
- Strong first-time contributor activity (5+ PRs from new contributors today)
- Maintainers are responsive — issues getting comments and corresponding PRs within 24-48 hours
- Plugin ecosystem is growing (LightRAG knowledge base plugin, skill market)

## 8. Backlog Watch

| Item | Age | Concern |
|------|-----|---------|
| **[#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) — Tauri 2.x desktop app** | ~28 days open | Large architectural PR from first-time contributor. No recent maintainer comments visible. Needs review prioritization as it could replace the current desktop packaging approach and fix issues like [#4587](https://github.com/agentscope-ai/QwenPaw/issues/4587). |
| **[#3054](https://github.com/agentscope-ai/QwenPaw/issues/3054) — OneBot cron cannot send to groups** | ~44 days open | Long-standing bug affecting QQ/OneBot users. Still active (updated today) but no fix PR. |
| **[#4464](https://github.com/agentscope-ai/QwenPaw/pull/4464) — E2E test migration** | ~5 days open | Critical infrastructure PR. Under review but worth monitoring for merge as it enables more reliable CI. |
| **[#4559](https://github.com/agentscope-ai/QwenPaw/issues/4559) — 40+ agent UI slowdown** | 2 days open | High-impact scalability issue. Referenced older issue [#3499](https://github.com/agentscope-ai/QwenPaw/issues/3499) suggesting this is a recurring problem that hasn't been structurally addressed. |
| **[#4605](https://github.com/agentscope-ai/QwenPaw/issues/4605) — Gemini/Gemma crash** | <1 day open | App-crashing bug with a 👍 reaction. Needs urgent triage as it completely blocks Gemini/Gemma model usage. |

---

*Digest generated from 26 issues and 27 PRs updated on 2026-05-21/22. Data source: github.com/agentscope-ai/CoPaw (QwenPaw).*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-22

An automated, data-driven analysis of the [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw) open-source AI agent repository.

## 1. Today's Overview
The ZeroClaw project is experiencing a massive surge in architectural activity, driven largely by the release of the `v0.8.0-beta-1` which transitions the system from a single-agent daemon to a multi-agent host. Activity over the last 24 hours has been exceptionally high, with 50 Pull Requests updated (44 open) and 21 Issues processed. The maintainers and community are heavily focused on extending the new RPC/ACP layers, developing a standalone TUI (Terminal User Interface), and addressing compatibility bugs introduced by the multi-agent schema overhaul. Overall, project health is highly robust, showing aggressive feature iteration backed by active community engagement.

## 2. Releases
*   **v0.8.0-beta-1** ([Release Notes](https://github.com/zeroclaw-labs/zeroclaw/releases))
    *   **Changes:** Transforms ZeroClaw into a true multi-agent host. Users can now run many named agents side-by-side. 
    *   **Capabilities:** Each agent possesses its own isolated identity, workspace, memory, model provider, channels, security profile, and inter-agent communication capabilities.
    *   **Migration Notes:** Upgrading to v0.8.x introduces a fundamentally new configuration schema (V3) to define multiple agents, moving away from the previous single-daemon configuration layout.

## 3. Project Progress
The codebase saw 6 merged/closed PRs today, indicating active merging of foundational code for the beta release:
*   **Runtime & Core Architecture merged:** The core RPC dispatch layer and Unix socket transport ([PR #6839](https://github.com/zeroclaw-labs/zeroclaw/pull/6839)) and the massive multi-agent runtime and schema V3 ([PR #6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398)) have been closed/merged, paving the way for the beta.
*   **Channel Ecosystem enhancements:** Notable progress in channel integrations including Slack thread backfilling ([PR #6428](https://github.com/zeroclaw-labs/zeroclaw/pull/6428)), email rendering fixes ([PR #6512](https://github.com/zeroclaw-labs/zeroclaw/pull/6512)), Webhook exponential backoff ([PR #5838](https://github.com/zeroclaw-labs/zeroclaw/pull/5838)), and Signal emoji reactions ([PR #6840](https://github.com/zeroclaw-labs/zeroclaw/pull/6840)).
*   **Security enhancements:** Progress on gated TOTP commands for the shell tool ([PR #5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779)).

## 4. Community Hot Topics
*   **DeepSeek-V4 API Incompatibility ([Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)):** With 12 comments and 4 reactions, this is the most active user-reported issue. Users are experiencing degraded behavior (S2) when using DeepSeek-V4-Pro/Flash due to thinking mode formatting errors. This indicates a strong community demand for bleeding-edge LLM provider parity.
*   **RFC: Multi-agent UX flow ([Issue #5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890)):** Highly discussed (10 comments). This accepted RFC shapes how users interact with multiple agents, proving the community is deeply invested in the v0.8.0 UX paradigm shift.
*   **Governance & Label Cleanup ([Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)):** Proposed by Audacity88, this RFC aims to introduce PR lanes and board automation to manage the sheer volume of community contributions effectively.

## 5. Bugs & Stability
*   **S1 - Workflow Blocked:** Multimodal `vision_provider` silently ignored, falling back to default routing ([Issue #6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841)). *No fix PR yet.*
*   **S1 - Workflow Blocked:** Slack `bot_token` cannot be loaded via environment variables, hardcoding required ([Issue #6844](https://github.com/zeroclaw-labs/zeroclaw/issues/6844)). *Duplicate of #6237, pending proper fix.*
*   **S1 - Resolved:** Multiline Heredocs incorrectly blocked by SecurityPolicy ([Issue #6771](https://github.com/zeroclaw-labs/zeroclaw/issues/6771)). Closed on 2026-05-21.
*   **S2 - High Risk:** MCP `tool_filter_groups` acts as a no-op due to a prefix-check bug ([Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)). *Status: Accepted, pending PR.*
*   **S2 - Degraded Behavior:** Windows `setup.bat --minimal` produces 26MB build instead of 6MB ([Issue #6836](https://github.com/zeroclaw-labs/zeroclaw/issues/6836)). *No fix PR yet.*

## 6. Feature Requests & Roadmap Signals
A clear theme around **"Headless & Power-User Infrastructure"** has emerged for the next cycle:
*   **The TUI Ecosystem:** Maintainer `singlerider` opened an massive array of interconnected issues to establish a standalone ZeroClaw TUI, including Agent Chat ([Issue #6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824)), TUI UX ([Issue #6825](https://github.com/zeroclaw-labs/zeroclaw/issues/6825)), and an ACP Bridge ([Issue #6823](https://github.com/zeroclaw-labs/zeroclaw/issues/6823)).
*   **Daemon & RPC Flexibility:** Requests for `--ephemeral` daemon mode ([Issue #6818](https://github.com/zeroclaw-labs/zeroclaw/issues/6818)) and session-scoped runtime overrides without daemon reload ([Issue #6817](https://github.com/zeroclaw-labs/zeroclaw/issues/6817)) signal that users want lighter-weight, dynamically controllable background processes.
*   **ACP Extensions:** Support for diff/file-proposal message types ([Issue #6820](https://github.com/zeroclaw-labs/zeroclaw/issues/6820)) will bring rich side-by-side code editing to dashboards.

## 7. User Feedback Summary
Users operating ZeroClaw in production are hitting friction with **provider compatibility** (especially vision and thinking modes) and **configuration rigidity** (environment variables, build sizes). However, the rapid adoption of v0.8.0-beta-1 features (like Slack backfilling and web search providers) shows a highly enthusiastic power-user base. Developers are actively optimizing the build system (requesting selective channel builds via feature flags in [PR #6830](https://github.com/zeroclaw-labs/zeroclaw/pull/6830) and ARM64 docker targets in [PR #5187](https://github.com/zeroclaw-labs/zeroclaw/pull/5187)), indicating that the project is maturing from a neat CLI tool into an enterprise-grade, deployable service.

## 8. Backlog Watch
*   **[PR #5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779):** Highly critical security feature (gated TOTP shell commands). It has been open since April 15 and requires author action. Given that the shell tool is currently an all-or-nothing security risk, this needs maintainer prioritization.
*   **[PR #5979](https://github.com/zeroclaw-labs/zeroclaw/pull/5979):** Opt-out reply-intent precheck. Open since April 21, currently blocked by `needs-author-action`. A necessary efficiency fix for single-bot deployments to save unnecessary LLM calls.
*   **[PR #5987](https://github.com/zeroclaw-labs/zeroclaw/pull/5987):** Nix packaging support. Open since early April, awaiting action. Important for the NixOS community and reproducible deployments.

</details>