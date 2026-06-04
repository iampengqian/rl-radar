# OpenClaw Ecosystem Digest 2026-06-05

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-04 22:27 UTC

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

# OpenClaw Project Digest — 2026-06-05

## 1. Today's Overview
The OpenClaw project is experiencing **very high activity** today, with 500 issues and 500 pull requests updated in the last 24 hours. The ratio of open to closed items (341 open vs 159 closed issues; 392 open vs 108 merged/closed PRs) shows that the community and contributors are generating work faster than maintainers can currently merge and resolve it. A new beta release, **v2026.6.2-beta.1**, was cut today, signaling active development. The bulk of open work focuses on a massive architectural migration to SQLite for session/transcript storage, runtime stability fixes, and channel-specific message delivery regressions. Overall project health is active but under visible merge-review pressure.

## 2. Releases

### v2026.6.2-beta.1
- **Highlight:** Plugin and skill installs now use an **operator install policy** instead of the previous dangerous-code scanner path. This introduces clearer doctor, CLI, ClawHub, and troubleshooting surfaces for package, archive, source, upload, and marketplace installs. ([#89516](https://github.com/openclaw/openclaw/pull/89516), thanks @joshavant)
- **Migration notes:** Users upgrading should review the new install policy surfaces. The old dangerous-code scanner path is deprecated.
- The release notes appear truncated in the data ("Te"), suggesting additional changes are included in the full changelog.

---

## 3. Project Progress

### Architectural: SQLite Session Store Migration (Branch-by-Abstraction)
The most significant body of work today is a coordinated series of PRs by @jalehman implementing the SQLite session/transcript migration via an **accessor seam** pattern, avoiding a high-risk big-bang rewrite:
- **Session accessor seam + gateway consumer** ([PR #90463](https://github.com/openclaw/openclaw/pull/90463)) — Adds the storage-neutral session accessor and routes the first production reads through it.
- **SQLite session store foundation** ([PR #89178](https://github.com/openclaw/openclaw/pull/89178)) — Adds per-agent SQLite schema, Kysely types, and conformance coverage.
- **Transcript runtime identity contract** ([PR #89201](https://github.com/openclaw/openclaw/pull/89201)) — Canonical file-backed transcript identity/state contract.
- **SQLite embedded run target adapter** ([PR #90438](https://github.com/openclaw/openclaw/pull/90438)) — SQLite adapter for the embedded-agent run/session target seam.
- **Route bundled session helpers through accessor** ([PR #89904](https://github.com/openclaw/openclaw/pull/89904)) — Routes bundled plugin session consumers through the narrow seam.
- **Route plugin SDK session entries through seam** ([PR #89204](https://github.com/openclaw/openclaw/pull/89204))
- **Public transcript identity API** ([PR #89261](https://github.com/openclaw/openclaw/pull/89261))
- **Canonical transcript reader identity** ([PR #89581](https://github.com/openclaw/openclaw/pull/89581))

This is tracked by Issue [#88838](https://github.com/openclaw/openclaw/issues/88838) (17 comments).

### Runtime Stability & Message Delivery Fixes
- **Prevent silent message loss from `EmbeddedAttemptSessionTakeoverError`** ([PR #89039](https://github.com/openclaw/openclaw/pull/89039), P1) — Fixes a race condition where OpenAI SDK retries released the session write lock, allowing steering messages to corrupt the transcript.
- **Recover terminal session status on visible inbound turns** ([PR #89045](https://github.com/openclaw/openclaw/pull/89045), P1) — Fixes group chat sessions stuck in `failed` status that silently drop all subsequent messages.
- **Guard against undefined `sourceDelivery` in isolated cron executor** ([PR #85249](https://github.com/openclaw/openclaw/pull/85249), P1) — Prevents `TypeError` in the isolated cron executor.
- **Snapshot tool definitions** ([PR #90411](https://github.com/openclaw/openclaw/pull/90411), P2) — Snapshots plugin command registrations and agent state tools before provider exposure to prevent mid-turn definition drift.

### Performance
- **Throttle full-cache rewrites during usage-cost refresh** ([PR #80013](https://github.com/openclaw/openclaw/pull/80013)) — Eliminates O(N × cacheSize) CPU burn from repeated 100MB+ JSON rewrites.
- **Persistent export-state cache + stat fast path** ([PR #77158](https://github.com/openclaw/openclaw/pull/77158)) — Dramatically reduces CPU for agents with thousands of session transcripts.

### Security & Governance
- **Native OS keychain SecretRef resolver** ([PR #89107](https://github.com/openclaw/openclaw/pull/89107)) — Adds OS keychain integration for secret management.
- **OpenClaw Governance extension (AIBOM + DLP + cost ledger)** ([PR #90469](https://github.com/openclaw/openclaw/pull/90469)) — Backports audit trail, regex DLP, and cost accounting as an opt-in extension.

### Channel & UX Fixes
- **Plain-language plugin approvals** ([PR #81864](https://github.com/openclaw/openclaw/pull/81864), P1) — Replaces debug-output-style approval text with human-readable cards.
- **Expose node-hosted plugin tools** ([PR #90431](https://github.com/openclaw/openclaw/pull/90431)) — Lets connected node hosts publish live agent-visible plugin/MCP tool availability.
- **LM Studio wizard prompter binding fix** ([PR #90429](https://github.com/openclaw/openclaw/pull/90429))
- **TTS sanitization fix** ([PR #90423](https://github.com/openclaw/openclaw/pull/90423))
- **Slash-command apostrophe handling** ([PR #90468](https://github.com/openclaw/openclaw/pull/90468))
- **WebChat restart recovery notice** ([PR #90430](https://github.com/openclaw/openclaw/pull/90430))
- **Stale skill workshop proposals reconciliation** ([PR #90421](https://github.com/openclaw/openclaw/pull/90421))

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)
1. **[#72808 — Silently lost connection to Slack](https://github.com/openclaw/openclaw/issues/72808)** (20 comments, 👍3) — A P1 diamond-lobster bug where Slack connections silently drop. Users report the bot becomes unresponsive without warning. Underlying need: reliable long-lived channel transport with health monitoring.

2. **[#88838 — Track core session/transcript SQLite migration via accessor seam](https://github.com/openclaw/openclaw/issues/88838)** (17 comments) — Maintainer-coordinated tracking issue for the SQLite migration. High comment count reflects active architectural discussion.

3. **[#80171 — Codex-vs-Pi runtime parity QA harness](https://github.com/openclaw/openclaw/issues/80171)** (15 comments) — Tracks the migration to Codex as the default runtime for OpenAI agent turns, including QA parity testing.

4. **[#65161 — Heartbeat isolated mode: cadence stalls, mislabeled events](https://github.com/openclaw/openclaw/issues/65161)** (14 comments) — Multiple heartbeat regressions in isolated mode affecting session state and message delivery.

5. **[#87307 — Matrix thread replies regression](https://github.com/openclaw/openclaw/issues/87307)** (13 comments) — Matrix threads broken in 2026.5.22; replies sent as normal messages, `/status` and `/model` silent.

6. **[#90083 — OpenAI ChatGPT Responses transport fails with `invalid_provider_content_type` for gpt-5.4/gpt-5.5](https://github.com/openclaw/openclaw/issues/90083)** (11 comments, 👍3) — Critical for users on latest OpenAI models. Reported yesterday and already highly active.

7. **[#68113 — Mattermost slash commands return 503](https://github.com/openclaw/openclaw/issues/68113)** (11 comments, 👍3) — Complete slash command failure in Mattermost since v2026.4.15.

8. **[#63216 — Repeated hard resets on same session key](https://github.com/openclaw/openclaw/issues/63216)** (11 comments, 👍3) — Context-overflow reset loop despite high `reserveTokensFloor`.

9. **[#87177 — Message duplication in QQBot](https://github.com/openclaw/openclaw/issues/87177)** (11 comments) — Multiple root causes including heartbeat session message leakage and QQ worker fanout.

### Analysis of Underlying Needs
- **Transport reliability across all channels** (Slack, Matrix, Discord, Mattermost, Telegram, QQ) is the dominant pain theme — silent disconnections, message loss, and threading regressions.
- **Model provider compatibility** is urgent as users adopt gpt-5.4/5.5 and encounter transport-level failures.
- **Session state integrity** (heartbeat, context overflow, stuck sessions) is a cross-cutting architectural concern driving the SQLite migration.

---

## 5. Bugs & Stability

### P1 / High Severity (Active, ranked)
| Bug | Impact | Fix Status |
|-----|--------|------------|
| [#72808] Silently lost Slack connection | Message loss, no reconnect | No fix PR yet |
| [#90083] OpenAI gpt-5.4/5.5 `invalid_provider_content_type` | Complete inference failure for latest models | No fix PR yet |
| [#87307] Matrix thread replies regression | Thread context broken, commands silent | No fix PR yet |
| [#68113] Mattermost slash commands 503 | All slash commands broken | Linked PR open |
| [#63216] Repeated hard context-overflow resets | Session instability, token waste | Needs product decision |
| [#67777] Subagent completion delivery lost | Silent message loss on timeout/drain | No fix PR yet |
| [#64810] Heartbeat swallows in-progress Telegram replies | User-visible message disappearance | No fix PR yet |
| [#90082] active-memory circuit breaker too aggressive | Fallback prompt pollutes session | No fix PR yet |
| [#77642] lossless-claw duplicate answers + synthetic errors | Duplicate responses, confusion | No fix PR yet |
| [#69118] Claude CLI sessions reset every turn in groups | Group channels unusable with Claude | Source repro provided |
| [#90093] OpenAI encrypted reasoning breaks next turn | Multi-turn sessions fail | No fix PR yet |
| [#90036] Session model route drifts to openai-codex | Wrong model used after Codex turn | No fix PR yet |

### P1 Fix PRs Ready for Review
- **[PR #89039]** — Prevent silent message loss from `EmbeddedAttemptSessionTakeoverError` (👀 ready for maintainer look)
- **[PR #89045]** — Recover terminal session status on visible inbound turns (👀 ready for maintainer look)
- **[PR #85249]** — Guard against undefined `sourceDelivery` in isolated cron executor (👀 ready for maintainer look)

### Crashes / Regression Bugs
- **[#84820]** (CLOSED) — Unclosed FileHandle on session JSONL lock crashes gateway on Node ≥24. 6 comments, 👍1.
- **[#67366]** — `TypeError` during `openclaw onboard` when replacing Telegram token. 8 comments, 👍2.
- **[#88234]** (CLOSED) — Feishu dispatch `TypeError: Cannot read properties of undefined (reading 'run')`. 7 comments.
- **[#76038]** — Stuck Session Recovery double failure + preprocessing too slow, gateway killed by systemd. 6 comments, 👍2.
- **[#74822]** (CLOSED) — Gateway recurring error requiring manual restart (Telegram). 6 comments.

---

## 6. Feature Requests & Roadmap Signals

### Requested by Users
- **[#64046] Sensitive data masking/desensitization** (👍8) — Users want API keys, tokens, and secrets masked in config files, logs, and the web UI. Currently stored/displayed in plaintext. High-impact security feature.
- **[#63990] Multi-index embedding memory with model-aware failover** (6 comments) — First-class support for multiple embedding models to prevent vector corruption during provider failover.
- **[#63930] Anthropic advisor tool support** (6 comments) — Server-side tool blocks (`server_tool_use`) are currently unhandled, blocking Anthropic's beta advisor tool.
- **[#69748] Discord: Replace requireMention/users with bypass/mention/deny access lists** — Granular, role-based access control for Discord guilds.
- **[#71736] Control UI plugin contribution slots** (9 comments) — Data-driven SDK surface for plugin chat modes, approval cards, event classifiers, and status surfaces.
- **[#69066] Separate internal service identity from user auth** (6 comments) — RFC for service accounts and trusted-proxy patterns.

### Roadmap Signals
- **SQLite session store migration** is the clearest near-term roadmap item, with 8+ coordinated PRs in flight.
- **Codex runtime as default** for OpenAI agent turns is actively being QA'd ([#80171]).
- **Claude bridge harness** ([PR #86655](https://github.com/openclaw/openclaw/pull/86655)) would bring first-class Anthropic parity.
- **Operator install policies** (shipping in v2026.6.2-beta.1) signal a focus on safer plugin/skill installation.
- **Governance extension** ([PR #90469]) suggests enterprise/compliance features as opt-in additions.

### Predicted for Next Stable Release
- SQLite accessor seam (at least the first production reads)
- OpenAI gpt-5.4/5.5 transport fix (urgent community demand)
- Plugin approval UX overhaul
- Session recovery improvements

---

## 7. User Feedback Summary

### Pain Points
1. **Silent message loss across channels** — The most consistent theme. Users report bots becoming unresponsive on Slack, Telegram, Matrix, and Discord without warnings or automatic recovery. This erodes trust for demo/production use.
2. **Session/context instability** — Hard resets, stuck sessions, duplicate messages, and context bloat (bootstrap files consuming 20-30% of tokens every turn) are widely reported.
3. **Channel threading regressions** — Matrix, Telegram, and Mattermost all have active threading bugs, breaking the primary user interaction pattern.
4. **Config security** — API keys and secrets in plaintext in config, logs, and UI is a frequently cited concern.
5. **Model provider breakage on new models** — gpt-5.4/5.5 failures, Claude CLI group resets, and Gemini sub-agent 404s show fragility in the provider abstraction layer.
6. **Non-English localization** — Control UI shows untranslated internal metadata for non-English users ([#79034]).
7. **Upgrade friction** — Doctor warnings that can't be resolved ([#60612]), migration crashes ([#67366]), and install script Ctrl+C issues ([PR #76386]).

### Use Cases Emerging from Feedback
- Multi-channel personal assistants (Slack + Telegram + Discord simultaneously)
- Demo/showcase scenarios (reliability critical for live demos)
- Group chat deployments (Discord guilds, Telegram groups, Mattermost teams)
- Production deployments with cost monitoring (usage-cost cache performance, governance extension)
- Memory-heavy agents (embedding failover, wiki lint, memory search)

### Positive Signals
- Strong community engagement (500 issues updated, 500 PRs updated daily)
- Multiple community contributors submitting fix PRs
- Maintainer-coordinated architectural work with clear tracking
- Active beta release cycle

---

## 8. Backlog Watch

### High-Impact Issues Needing Maintainer Attention
| Issue | Age | Status | Why Urgent |
|-------|-----|--------|------------|
| [#72808] Silent Slack connection loss | ~39 days | Open, no fix PR | P1 diamond-lobster, 20 comments, affects production demos |
| [#65161] Heartbeat isolated mode regressions | ~53 days | Open, needs product decision | Multiple failure modes, session state corruption |
| [#63216] Repeated hard context-overflow resets | ~57 days | Open, needs product decision | Token waste, session instability |
| [#67777] Subagent completion delivery loss | ~49 days | Open, no fix PR | Silent message loss in production |
| [#64810] Heartbeat swallows Telegram replies | ~54 days | Open, stale | User-visible message disappearance |
| [#65624] Mattermost slash commands expose reusable tokens | ~52 days | Open, linked PR | Security vulnerability (CVSS 7.6–8.6) |
| [#67419] Session context bloat from bootstrap re-injection | ~50 days | Open, needs live repro | 20-30% token waste every turn |
| [#64046] Sensitive data masking request | ~55 days | Open, needs security review | Security, plaintext secrets in UI/logs |
| [#72341] WebChat duplicate cumulative text cards | ~39 days | Open, linked PR | UX degradation in official web UI |
| [#48300] memory_search hybrid mode not returning FTS | ~80 days | Open, linked PR | Core memory feature broken |

### PRs Stalled in Review
- **[PR #81864]** Plain-language plugin approvals (P1, ⏳ waiting on author) — Security-boundary change with broad UX impact.
- **[PR #73260]** Content-hash auth-profiles + models.json drift detection (P2, 📣 needs proof) — Performance + auth-provider change.
- **[PR #73261]** targetProvider short-circuit (P1, 📣 needs proof) — Performance optimization for provider resolution.

### Trend
The backlog is growing (341 open issues vs 159 closed). Many P1 issues from April remain without fix PRs. The SQLite migration PRs are well-structured but represent a long chain of dependencies that must merge in order. Maintainer review bandwidth appears

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report for the AI agent and personal assistant open-source ecosystem based on the June 5, 2026 community digests.

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently characterized by hyper-iterative development cycles, shifting focus from basic LLM routing toward complex, multi-channel reliability, and persistent state management. Projects are heavily prioritizing architectural refactors—such as database migrations and modular "Reborn" frameworks—to handle the rigorous demands of long-running autonomous workflows. There is a massive industry-wide push to support omnichannel communication (Desktop, Slack, WhatsApp, Telegram) and local-first model deployment (Ollama, local tool-calling). Overall, project health is robust but under strain, with community feature requests outpacing maintainer review bandwidth across almost all major repositories.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Recent Release Status | Health Score / Status |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 updated (341 open) | 500 updated (392 open) | `v2026.6.2-beta.1` (Cut today) | Active but under heavy merge-review pressure |
| **NanoBot** | N/A (High volume) | 77 updated (61 merged) | Staging for upcoming release | Highly Active, robust quality assurance |
| **Hermes Agent**| 50 updated | 50 updated (4 merged) | Stable `v0.15.1` (Patch imminent)| Active, rocky Desktop rollout |
| **ZeroClaw** | 34 updated | 50 updated (20 merged) | Staging `v0.8.0` stable | Pre-release stabilization phase |
| **LobsterAI** | Low volume | 17 merged | Stabilizing `2026.5.28` | Highly Active, disciplined triage |
| **CoPaw** | 24 updated | 25 updated (15 merged) | `v1.1.11-beta.1` (Cut today) | Active, transitioning to stability |
| **IronClaw** | 45 updated | 50 processed (18 merged)| Staging for major milestone | Intense focused backend development |
| **Moltis** | 2 opened | 5 updated | `20260603.01` (June 3) | Active and focused |
| **PicoClaw** | 24 updated | 10 merged | Stable `v0.2.9` | Responsive, high momentum |
| **NanoClaw** | 1 opened | 6 updated (3 merged) | No new release | Steady, continuous pace |
| **ZeptoClaw** | 0 | 16 opened (Dependabot)| None | Automated maintenance, stalled reviews |
| **TinyClaw / NullClaw**| 0 | 0 | None | Dormant / Inactive |

## 3. OpenClaw's Position
**Advantages vs. Peers:**
OpenClaw remains the undisputed core reference implementation with the highest raw volume of community engagement (500 issues/PRs updated daily). It boasts the most mature plugin/marketplace architecture (ClawHub) and the broadest channel support matrix. 

**Technical Approach Differences:**
Unlike peers doing ground-up rewrites, OpenClaw is executing a highly sophisticated "branch-by-abstraction" pattern for its architectural shifts (e.g., the SQLite session store migration via an "accessor seam"). This minimizes disruption but requires tightly coordinated PR chains. 

**Community Size Comparison:**
OpenClaw's community dwarfs smaller implementations like PicoClaw and NanoClaw, generating massive inbound contributions. However, compared to IronClaw (which merges 18 PRs efficiently) or NanoBot (61 PRs merged), OpenClaw is showing visible bottlenecking, with work generated faster than maintainers can review.

## 4. Shared Technical Focus Areas
*   **Context Window & Memory Management (OpenClaw, IronClaw, CoPaw, Moltis, NanoClaw):** As context limits expand, efficient context delivery is a universal struggle. Projects are rushing to cap oversized HTTP payloads (IronClaw), tool results (Moltis), and stop auto-compaction from dropping `<message>` wrappers (NanoClaw) or crashing the UI (CoPaw).
*   **Local Model & Provider Compatibility (ZeroClaw, PicoClaw, OpenClaw, Moltis):** The rapid iteration of models (GPT-5.4/5.5, Gemma 4, Claude Sonnet 4.6) is breaking provider abstraction layers. Projects are specifically addressing local model quirks, such as OpenAI-compatible tool ID mismatches (NanoBot) and local LLMs outputting explicit `null` JSONs instead of omitting them (Moltis).
*   **Robust Session State Transport (OpenClaw, Hermes, ZeroClaw, NanoBot):** Reliable, long-lived connectivity across channels like WhatsApp, Slack, and Telegram is a primary pain point. Projects are heavily focused on fixing silent connection drops, heartbeat regressions, and queueing messages during agent processing loops.

## 5. Differentiation Analysis
*   **OpenClaw & CoPaw** focus heavily on the **"Cowork" / multi-agent orchestration** paradigm and complex enterprise compliance (AIBOM, DLP), aiming to be the enterprise-standard backend gateway.
*   **NanoBot & Hermes Agent** are aggressively targeting **Desktop / TUI end-user applications**. Their roadmaps are heavily skewed toward UI/UX refinations, native shell integrations, and cross-platform desktop installers. 
*   **IronClaw & ZeroClaw** represent the **high-performance / infrastructure** tier. IronClaw focuses strictly on backend "Reborn" correctness (durable subagent completions, triggers), while ZeroClaw leverages a Rust-based architecture for lightweight, secure, and highly concurrent local execution.
*   **Moltis & LobsterAI** differentiate through **multimodal and specialized integrations**. Moltis focuses heavily on complex browser automation (piercing Shadow DOMs), while LobsterAI is heavily optimized for voice input architectures and audio processing.

## 6. Community Momentum & Maturity
*   **Hyper-Growth / Rapid Iteration Tier:** **NanoBot, IronClaw, and ZeroClaw** are moving at breakneck speeds, merging 18-61 PRs daily. They are building foundational architecture and closing bugs almost as fast as they are reported.
*   **Stabilization / Enterprise Tier:** **OpenClaw, CoPaw, and LobsterAI** are dealing with the complexities of mature ecosystems. They are processing bugs related to scale, context limits, and plugin backwards compatibility rather than building core infrastructure from scratch. 
*   **Niche / Emerging Tier:** **Moltis, Hermes, PicoClaw, and NanoClaw** maintain healthy, highly focused momentum addressing specific user feedback loops (e.g., Hermes Desktop bugs, Moltis browser automation). 
*   **Stalled Tier:** **ZeptoClaw** is currently in an automated maintenance phase, relying entirely on Dependabot with zero human maintainer interaction. 

## 7. Trend Signals
*   **Voice & Multimodal Locality:** The push for on-device, privacy-preserving voice processing is accelerating. NanoClaw (`whisper.cpp`) and Moltis (FunASR/SenseVoice requests) indicate developers want sub-100ms local speech-to-text integrated directly into agents, bypassing cloud APIs.
*   **The Desktop AI OS:** The open-source assistant is moving out of the browser. With NanoBot and Hermes heavily shipping Desktop apps, and ZeroClaw pushing "Computer-Use" GUI control, the industry trend is shifting toward persistent, local desktop clients that act as unified AI operating systems.
*   **Granular Security Posturing:** As agents execute more powerful shell commands, the community is demanding strict security boundaries. ZeroClaw's RFC for `allow/ask/deny` policies and NanoBot's blocking of SSRF via MCP HTTP requests show that "Agent permission models" are becoming a standard requirement for production deployments.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-05

## 1. Today's Overview
NanoBot is demonstrating exceptionally high development velocity and strong project health today, driven by a massive 77 pull requests updated within the last 24 hours. The maintainers are actively merging community and core team contributions at a rapid pace, with 61 PRs recently closed or merged. The focus is currently split between hardening the agent's core infrastructure (such as run-level hooks, security boundaries, and memory management) and expanding user-facing capabilities (like a new desktop shell and enhanced WebUI features). Overall, the project is in a highly active state with robust community engagement and rigorous quality assurance efforts.

## 2. Releases
**No new releases** were cut today. The high volume of structural changes and merged PRs suggests that the project is actively staging features for an upcoming major or minor release.

## 3. Project Progress
A staggering 61 PRs were merged or closed today, indicating rapid advancement. Key areas of progress include:

*   **Core Agent Lifecycle & Testing:** Introduction of run-level agent hook lifecycle ([PR #4176](https://github.com/HKUDS/nanobot/pull/4176)) and refactoring of capture state to use these hooks ([PR #4194](https://github.com/HKUDS/nanobot/pull/4194)). Test coverage was significantly improved with deterministic clocks/events ([PR #4189](https://github.com/HKUDS/nanobot/pull/4189)) and new scripted agent runner harnesses ([PR #3982](https://github.com/HKUDS/nanobot/pull/3982)).
*   **Security & Stability:** Critical fixes were merged to block relative symlink workspace escapes ([PR #4119](https://github.com/HKUDS/nanobot/pull/4119)) and keep read-only roots out of write paths ([PR #4053](https://github.com/HKUDS/nanobot/pull/4053)). 
*   **Infrastructure Integrations:** Support for Azure Active Directory (AAD) based authentication for the Azure OpenAI provider was merged ([PR #4126](https://github.com/HKUDS/nanobot/pull/4126)).
*   **Tool & Provider Enhancements:** Fixed OpenAI-compatible tool call ID preservation ([PR #3984](https://github.com/HKUDS/nanobot/pull/3984)), fixed MCP reconnection drops ([PR #4027](https://github.com/HKUDS/nanobot/pull/4027)), and improved tool call validation strictness ([PR #4190](https://github.com/HKUDS/nanobot/pull/4190)).

## 4. Community Hot Topics
The most engaging discussions center around robust multi-model usage and enterprise provider support:

*   **[Issue #912](https://github.com/HKUDS/nanobot/issues/912) [OPEN] - *Feat: Support Task-Specific Model Configuration* (👍 3, Comments: 4):** Users are heavily discussing the need to assign different models to different tasks (e.g., conversational vs. tool use vs. browser use) rather than relying on a single global model. This is a strong signal for complex, multi-agent orchestration.
*   **[Issue #1121](https://github.com/HKUDS/nanobot/issues/1121) [CLOSED] - *Fallback model not triggered on LLM timeout* (👍 3, Comments: 3):** Users running high-latency models (like Gemini) expressed frustration that ServiceUnavailableError (503) bypasses fallback models. The active discussion highlights how critical automatic model failover is for production AI agent deployments.
*   **[PR #4195](https://github.com/HKUDS/nanobot/pull/4195) - *feat(desktop): polish desktop shell and shared WebUI surfaces*:** A major structural PR opening up native desktop surface support, signaling a significant architectural expansion for the project.

## 5. Bugs & Stability
Several notable bugs were addressed today, improving overall platform stability:

1.  **Critical (MCP Session Drops):** [Issue #4168](https://github.com/HKUDS/nanobot/issues/4168) reported that MCP servers randomly terminate with `McpError: Session terminated`. **Fix Merged:** [PR #4027](https://github.com/HKUDS/nanobot/pull/4027) reset the `_mcp_connected` state and added reconnect callbacks.
2.  **High (Workspace Security Escapes):** [PR #4119](https://github.com/HKUDS/nanobot/pull/4119) fixed a vulnerability where restricted exec commands could escape the workspace via relative symlinks.
3.  **High (CLI App Install Failure):** [Issue #4158](https://github.com/HKUDS/nanobot/issues/4158) identified that WebUI CLI App pip installs fail when running under `uv tool` due to missing pip modules. **Fix Merged:** [PR #4164](https://github.com/HKUDS/nanobot/pull/4164) implemented a graceful fallback to `uv pip`.
4.  **Medium (Provider Compatibility):** [PR #3984](https://github.com/HKUDS/nanobot/pull/3984) resolved tool call/result ID mismatches for OpenAI-compatible APIs (like GLM-4.7 and Kimi 2.6), preventing tool execution crashes.

## 6. Feature Requests & Roadmap Signals
User requests are driving clear roadmap signals toward desktop applications, better memory, and deeper tool integration:

*   **Desktop Application:** [PR #4195](https://github.com/HKUDS/nanobot/pull/4195) shows the imminent arrival of a dedicated NanoBot desktop client.
*   **Subagent MCP Inheritance:** [Issue #4166](https://github.com/HKUDS/nanobot/issues/4166) (via [PR #4192](https://github.com/HKUDS/nanobot/pull/4192)) requests the ability for spawned subagents to inherit live MCP tools from the main agent, essential for complex, multi-step automations.
*   **Advanced Memory Management:** [PR #4191](https://github.com/HKUDS/nanobot/pull/4191) and [PR #4193](https://github.com/HKUDS/nanobot/pull/4193) indicate active development on robust, versioned, and durable memory lifecycles.
*   **WebUI Quality of Life:** [Issue #4178](https://github.com/HKUDS/nanobot/issues/4178) requests `Cmd/Ctrl+Shift+O` for quickly starting a new chat, showing user demand for smoother UI hotkeys.

## 7. User Feedback Summary
Real-world user pain points reveal an audience pushing NanoBot into enterprise and advanced automation environments. Users operating in strict cloud environments (like Azure) are hindered by lack of Identity-Based Auth ([Issue #4125](https://github.com/HKUDS/nanobot/issues/4125)), which was quickly addressed by the community. Additionally, users utilizing NanoBot for complex tool-use loops are running into timeout/session issues with external APIs and MCP servers. The demand for "forking" conversations ([PR #4163](https://github.com/HKUDS/nanobot/pull/4163)) and UI shortcuts also indicates a user base heavily utilizing the WebUI for iterative, conversational debugging.

## 8. Backlog Watch
*   **[Issue #912](https://github.com/HKUDS/nanobot/issues/912) - Support Task-Specific Model Configuration:** Over 3.5 months old, highly requested (👍 3), and actively discussed, but still open. This architectural change requires core maintainer attention to proceed.
*   **[PR #3968](https://github.com/HKUDS/nanobot/pull/3968) - Add `/skill` slash command:** Open since late May, addressing a known gap ([Issue #3959](https://github.com/HKUDS/nanobot/issues/3959)) where users have no standardized way to discover enabled skills. Ready for maintainer review.
*   **[PR #4123](https://github.com/HKUDS/nanobot/pull/4123) - Fix(mcp): reject unsafe HTTP URLs before probe:** A crucial security enhancement to block SSRF attacks via MCP HTTP requests. Open for nearly a week, awaiting final validation and merge.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-05

## 1. Today's Overview
The Hermes Agent project is experiencing a massive surge in community engagement, operating at a highly active capacity with **50 issues** and **50 pull requests** updated in the last 24 hours. The majority of this activity is heavily concentrated on the newly introduced Desktop App, which is generating significant user feedback regarding installation, multi-language support, and UI interactions. Under the hood, contributors are actively collaborating on architectural improvements, including a shift toward pluggable database providers, cross-platform credential management, and telemetry overhauls. Despite the high velocity of feature development and bug fixes, the project has not issued a new software release today. Overall, project health appears robust, driven by a vibrant open-source community rapidly iterating on the Desktop and Gateway components.

## 2. Releases
No new releases were published today. The latest stable version remains **v0.15.1**. Given the high volume of open PRs currently targeting Desktop UI bugs, profile management, and security hardening, a patch release (likely v0.15.2) appears imminent.

## 3. Project Progress
While 46 PRs remain open for review, 4 PRs were merged or closed today, indicating steady maintenance:
*   **Desktop Profile Switching & Sync:** Merged PRs introduced first-class profile support in the desktop app (PR [#39330](https://github.com/NousResearch/hermes-agent/pull/39330)) and cross-profile session management.
*   **Profile Duplication Fix:** PR [#39348](https://github.com/NousResearch/hermes-agent/pull/39348) resolved a bug where the Cron dashboard duplicated default-profile jobs when the physical directory existed.
*   **Agent Crash Recovery:** PR [#39345](https://github.com/NousResearch/hermes-agent/pull/39345) preserved `final_response` on failure returns, addressing crashes during MeshBoard worker streaming.
*   **Skill Protection:** PR [#38561](https://github.com/NousResearch/hermes-agent/pull/38561) added protections to prevent the Curator from accidentally pruning official/bundled skills.

## 4. Community Hot Topics
The most actively discussed issues highlight strong user demand for external platform integrations, cost tracking, and persistent AI workflows:
*   **Telegram Guest Bots & Automation (8 comments):** Issue [#21587](https://github.com/NousResearch/hermes-agent/issues/21587) proposes deep integration with Telegram's latest bot API updates (Guest AI bots, Bot-to-Bot communication). This signals a strong community desire to use Hermes as an autonomous participant in multi-agent group chats.
*   **Pluggable SessionDB (6 comments):** RFC [#23717](https://github.com/NousResearch/hermes-agent/issues/23717) discusses migrating away from the SQLite `state.db` to PostgreSQL/MySQL to resolve "hot-update death spirals" during concurrent updates.
*   **Unified Telemetry & Cost Tracking (3 comments, 1 👍):** Issue [#6642](https://github.com/NousResearch/hermes-agent/issues/6642) and Issue [#19469](https://github.com/NousResearch/hermes-agent/issues/19469) highlight a major user pain point: the pricing layer is strictly coupled to OpenRouter, breaking cost reporting for local providers like Ollama, Anthropic, and Vertex. 
*   **Desktop i18n (Open PR):** PR [#38241](https://github.com/NousResearch/hermes-agent/pull/38241) adds Simplified Chinese support, directly addressing a massive influx of international users.

## 5. Bugs & Stability
The rollout of the v0.15.1 Desktop App has exposed several stability issues, alongside core agent bugs:
*   **[P0] WhatsApp Auth Bypass:** PR [#8431](https://github.com/NousResearch/hermes-agent/pull/8431) patched a critical authorization vulnerability in self-chat mode. *(Fix PR Open)*
*   **[P2] Mac Install Failure (2 comments, 1 👍):** Issue [#39332](https://github.com/NousResearch/hermes-agent/issues/39332) reports complete build failures during the macOS Desktop npm installer process. *(No fix PR yet)*
*   **[P2] Code Execution Approval Loop (1 comment):** Issue [#39275](https://github.com/NousResearch/hermes-agent/issues/39275) notes that "Approve session" / "Always" buttons for the `execute_code` tool are unresponsive, requiring manual approval for every code run.
*   **[P2] Gemma4 + Ollama Truncation (2 comments):** Issue [#39281](https://github.com/NousResearch/hermes-agent/issues/39281) shows Hermes failing to handle Ollama's `finish_reason='length'` gracefully, causing the agent to stop entirely.
*   **[P2] Mac Update Loop (1 comment):** Issue [#39339](https://github.com/NousResearch/hermes-agent/issues/39339) reports that the macOS Desktop app prompts for an update but fails to apply the new version, trapping the user in a loop.

## 6. Feature Requests & Roadmap Signals
Analysis of today's feature requests suggests the next developmental phase will focus on **observability, persistence, and multi-agent orchestration**:
*   **First-Class Loop Contracts:** Issue [#21172](https://github.com/NousResearch/hermes-agent/issues/21172) proposes declarative budgeting and scope for persistent cron-backed agent loops (shifting from one-shot to "persistent super-dev" loops).
*   **Anthropic Context Editing API:** Issue [#526](https://github.com/NousResearch/hermes-agent/issues/526) requests native support for Anthropic's server-side context cleanup, which would drastically reduce token costs for long-running Claude sessions.
*   **Multi-language Support:** Issue [#39268](https://github.com/NousResearch/hermes-agent/issues/39268) asks for broader localization in the Desktop App. Given the open PR for Chinese language support, a merged i18n framework is highly likely for the next version.

## 7. User Feedback Summary
Real user feedback today paints a picture of a powerful core agent engine currently burdened by a rocky Desktop client rollout:
*   **Pain Points:** Remote gateway users are frustrated by local path resolution errors when pasting images (Issue [#38078](https://github.com/NousResearch/hermes-agent/issues/38078)) and gateway flapping (Issue [#38873](https://github.com/NousResearch/hermes-agent/issues/38873)). The UI is also suffering from interaction blind spots, such as the inability to send messages when the `clarify` tool is invoked (Issue [#39341](https://github.com/NousResearch/hermes-agent/issues/39341)) and the inability to detach accidentally pasted images in the TUI (Issue [#39291](https://github.com/NousResearch/hermes-agent/issues/39291)).
*   **Satisfaction:** Users are highly enthusiastic about complex features. The Pokémon Play History Dashboard (Issue [#418](https://github.com/NousResearch/hermes-agent/issues/418)) and community-driven PRs (like `hermes sync` for profile backups via Git - PR [#39343](https://github.com/NousResearch/hermes-agent/pull/39343)) show a dedicated power-user base enthusiastically expanding Hermes's capabilities.

## 8. Backlog Watch
*   **Installer Path Override (mac):** Issue [#34536](https://github.com/NousResearch/hermes-agent/issues/34536) (Closed recently but relevant) highlights that the CLI installer forcefully overrides `nvm` symlinks and leaves them behind on uninstall. This remains a sore point for developers using managed Node environments.
*   **Undocumented Discord Defaults:** Issue [#7184](https://github.com/NousResearch/hermes-agent/issues/7184) notes that auto-threading in Discord defaults to true but is completely undocumented, silently breaking agent-to-agent communication. This needs maintainer attention to update the config templates and README.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-05

## 1. Today's Overview
PicoClaw demonstrates high development momentum and active maintenance, with 24 issues and PRs updated in the last 24 hours. A total of 4 issues were closed and 10 PRs were merged, indicating a highly responsive maintainer team addressing user pain points following the recent v0.2.9 release. The bulk of today's activity revolves around build stability, critical session management bugs, and dependency updates. There are currently 9 open PRs, including several dependency bumps and community bug fixes awaiting review.

## 2. Releases
No new releases were published today. The project's latest stable version remains **v0.2.9**, and current efforts appear focused on patching regressions introduced in this version.

## 3. Project Progress
Today saw 10 PRs merged/closed, representing solid progress in build reliability, bug fixing, and documentation:
*   **Build System Fix:** Resolved a compilation failure caused by spaces in `go env GOVERSION` (e.g., `go1.25.10 X:nodwarf5`). Fixed via PR [#2999](https://github.com/sipeed/picoclaw/pull/2999) and [#2976](https://github.com/sipeed/picoclaw/pull/2976).
*   **Critical Startup Crash Fix:** Merged PR [#3000](https://github.com/sipeed/picoclaw/pull/3000), which verifies process identity during the singleton PID check to prevent crash loops when PIDs are reused by the OS.
*   **Session/History Bug Fix:** Merged PR [#2992](https://github.com/sipeed/picoclaw/pull/2992), fixing a regression where new Web UI sessions incorrectly attached old message histories.
*   **Tool Execution Improvements:** Merged PR [#2996](https://github.com/sipeed/picoclaw/pull/2996) to properly handle `json.Marshal` errors in shell tool responses, preventing silent failures.
*   **Documentation:** PR [#2995](https://github.com/sipeed/picoclaw/pull/2995) updated the README with release highlights from v0.2.5 to v0.2.9.
*   **Dependencies:** Bumped AWS Bedrock runtime [#3004](https://github.com/sipeed/picoclaw/pull/3004), SQLite [#3003](https://github.com/sipeed/picoclaw/pull/3003), and Lark Suite SDK (v3.9.3) [#2963](https://github.com/sipeed/picoclaw/pull/2963).

## 4. Community Hot Topics
The most actively discussed issue today was **[#2720](https://github.com/sipeed/picoclaw/issues/2720) (8 comments)**, which detailed the stale PID crash loop. The community heavily engaged with this issue because it caused complete gateway startup failures on certain hosts, ultimately leading to today's merged fix. Another notable topic was **[#2972](https://github.com/sipeed/picoclaw/issues/2972) (2 comments)**, regarding Web UI message chaos after the v0.2.9 upgrade, highlighting how changes to the `PromoteAliasHistory` function critically impacted user chat sessions.

## 5. Bugs & Stability
Today's reports highlight a few critical bugs, though top-priority fixes have already been submitted/merged:
*   **[High Severity / Fixed]** Stale PID Crash Loop: Issue [#2720](https://github.com/sipeed/picoclaw/issues/2720). The gateway crashed on startup if the PID was reused. Fixed by merged PR [#3000](https://github.com/sipeed/picoclaw/pull/3000).
*   **[High Severity / Fixed]** Web UI Session History Overlap: Issue [#2972](https://github.com/sipeed/picoclaw/issues/2972). New sessions pulled old messages. Root cause was identified in the main session alias promotion, and fixed in PR [#2992](https://github.com/sipeed/picoclaw/pull/2992).
*   **[Medium Severity / Fix Open]** Codex OAuth GPT-5.5 Drops Tool Calls: Issue [#3006](https://github.com/sipeed/picoclaw/issues/3006). Streaming responses return empty outputs and drop tool calls. Fix proposed in open PR [#3007](https://github.com/sipeed/picoclaw/pull/3007).
*   **[Medium Severity / Open]** OneBot Group Chat Routing Error: Issue [#3002](https://github.com/sipeed/picoclaw/issues/3002). The bot replies in group chats using `send_private_msg` instead of `send_group_msg`, causing errors in NapCat frameworks.

## 6. Feature Requests & Roadmap Signals
While no direct feature requests were opened today, recent fixes and open PRs signal active development in specific domains:
*   **Workspace Guard Flexibility:** Open PR [#3001](https://github.com/sipeed/picoclaw/pull/3001) aims to allow scheme-less URLs (e.g., `curl wttr.in/Beijing`) when `restrict_to_workspace` is enabled.
*   **Multi-Channel Support:** Open PRs like [#2934](https://github.com/sipeed/picoclaw/pull/2934) (WhatsApp native mode via whatsmeow) and [#2956](https://github.com/sipeed/picoclaw/pull/2956) (preserving channel states during security config merges) indicate a strong push toward robust multi-platform channel support.
*   *Prediction:* The consolidation of these channel fixes and dependency updates suggests that the next release will likely be a stability-focused patch (e.g., v0.2.10) rather than a feature-heavy milestone.

## 7. User Feedback Summary
User feedback today is heavily tilted toward configuration stability and cross-platform/channel reliability. Users running PicoClaw on environments like FreeBSD (Issue [#2972](https://github.com/sipeed/picoclaw/issues/2972)) or interacting through specific connectors (Codex OAuth, NapCat/OneBot) are pushing the boundaries of the v0.2.9 release. The prompt resolution of the build and PID issues has yielded positive community momentum, though the lack of documentation updates matching v0.2.9 (noted in Issue [#2981](https://github.com/sipeed/picoclaw/issues/2981)) caused friction, which maintainers quickly addressed today in PR [#2995](https://github.com/sipeed/picoclaw/pull/2995).

## 8. Backlog Watch
*   **Dependabot & Breaking Changes:** Dependabot PR [#3005](https://github.com/sipeed/picoclaw/pull/3005) bumps the Lark Suite SDK to v3.9.4, but it fails CI. PR [#3008](https://github.com/sipeed/picoclaw/pull/3008) is open to fix these breaking changes and needs maintainer review/merge.
*   **Anthropic API Model ID Fix:** PR [#2947](https://github.com/sipeed/picoclaw/pull/2947) corrects the `claude-sonnet-4.6` model ID to `claude-sonnet-4-6` to prevent HTTP 404s. It is currently marked as `[stale]` and needs attention.
*   **Stale PID Fix Alternatives:** PR [#2813](https://github.com/sipeed/picoclaw/pull/2813) is another approach to the PID verification issue (now resolved by PR [#3000](https://github.com/sipeed/picoclaw/pull/3000)). It should be formally closed to clean the backlog.
*   **Context Command Clarity:** PR [#2985](https://github.com/sipeed/picoclaw/pull/2985) improves the `/context` command by showing summarization thresholds. It is open and awaiting review.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-05

## 1. Today's Overview
NanoClaw is demonstrating steady, continuous development with six pull requests seeing activity and one new community issue opened in the past 24 hours. While there were no new version releases today, the project maintains a healthy pace of bug fixes, documentation updates, and feature integrations. Activity today was primarily focused on refining multi-platform channel integrations, specifically WhatsApp, Signal, and broader chat SDKs. The volume of merged PRs indicates that maintainers are actively reviewing and accepting community contributions, reflecting a healthy and responsive open-source ecosystem for this personal AI assistant framework.

## 2. Releases
There were no new releases recorded for NanoClaw today (June 4-5, 2026). 

## 3. Project Progress
Three pull requests were closed/merged today, indicating progress in platform stability and code quality:
*   **[CLOSED] PR #2687: Trip agent** - Authored by dtanikella. This PR appears to introduce a new "Trip" or travel-oriented utility skill, advancing the agent's capabilities as a personal assistant. 
*   **[CLOSED] PR #2633: Fix/whatsapp self destruct and shutdown auth wipe** - Authored by maschenborn. A critical structural fix for WhatsApp paired sessions on Baileys 7.x, resolving an issue where the adapter would self-destruct or wipe auth credentials during shutdown.
*   **[CLOSED] PR #104: Replace `as any` casts with proper BoomError type** - Authored by Alakazam03. An older PR (from Feb 2026) that was finally merged today, significantly improving type safety by introducing a `BoomError` interface to replace unsafe `as any` casts.

## 4. Community Hot Topics
Community engagement today was relatively quiet in terms of comments or reactions, but two specific platform channels are clearly active topics of development:
*   **Voice Transcription Integration ([PR #2459](https://github.com/nanocoai/nanoclaw/pull/2459)):** Still open and updated today. The community is actively working on adding local, on-device voice transcription via `whisper.cpp` for Discord, Slack, Teams, and more. This shows a strong user demand for hands-free, privacy-focused voice interaction.
*   **Signal Enhancements ([PR #2685](https://github.com/nanocoai/nanoclaw/pull/2685)):** Opened today by `ira-at-work`, this PR updates documentation for group typing indicators, outbound reactions, and quote-replies on the Signal channel, highlighting recent advancements in rich messaging features.

## 5. Bugs & Stability
Several bug fixes and stability concerns were addressed today:
*   **[High Severity - Fixed] WhatsApp Session Self-Destruction ([PR #2633](https://github.com/nanocoai/nanoclaw/pull/2633)):** Closed today. This fixed a major bug where WhatsApp installs using `WHATSAPP_PHONE_NUMBER` on Baileys 7.x would structurally fail, self-destruct the connection, or wipe authentication during shutdown. 
*   **[Medium Severity - Open] Poll-Loop Unwrapping Failure ([PR #2405](https://github.com/nanocoai/nanoclaw/pull/2405)):** Updated today. Authored by `matt1995ai`, this addresses a regression where the model drops `<message>` wrapping discipline after auto-compaction, leading to a failure to deliver unwrapped output to its destination. A fix is currently pending review.

## 6. Feature Requests & Roadmap Signals
*   **Travel & Lifestyle Automation:** A new issue ([#2686](https://github.com/nanocoai/nanoclaw/issues/2686)) requested a "Traveling" skill for a trip to Canada. Interestingly, a corresponding "Trip agent" PR ([#2687](https://github.com/nanocoai/nanoclaw/pull/2687)) was closed today, suggesting that the maintainers are rapidly fulfilling user requests for personal logistics and travel planning capabilities. This is highly likely to be featured in an upcoming release.
*   **Voice Integration:** The ongoing work on the voice transcription skill ([#2459](https://github.com/nanocoai/nanoclaw/pull/2459)) signals a major upcoming roadmap item: transforming NanoClaw into a multimodal assistant capable of continuous, local voice listening across enterprise chat platforms.

## 7. User Feedback Summary
Real-world user feedback today highlights the dual nature of an open-source AI assistant:
*   **Desire for Personal Concierge Capabilities:** The creation of Issue #2686 ("I want to travel to Canada") underscores that users are treating NanoClaw less like a simple chatbot and more like a comprehensive life-assistant capable of executing complex, multi-step real-world planning.
*   **Enterprise Platform Frustrations:** The recurring issues with WhatsApp (PR #2633) and the ongoing need for better formatting/stability in the poll loop (PR #2405) indicate that users are running NanoClaw extensively across diverse messaging channels. When bridge protocols (like Baileys) update, it causes immediate friction for users relying on the assistant for daily communication.

## 8. Backlog Watch
*   **[Needs Maintainer Attention] Auto-Compaction Output Delivery ([PR #2405](https://github.com/nanocoai/nanoclaw/pull/2405)):** Open since May 11, this PR was updated today but remains unmerged. It addresses a core issue with message formatting post-compaction. Given that message delivery is a core feature of an AI agent, this architectural fix requires a priority review.
*   **[Needs Maintainer Attention] Voice Transcription Skill ([PR #2459](https://github.com/nanocoai/nanoclaw/pull/2459)):** Open since May 13, this is a massive feature addition bringing local Whisper.cpp integration. It requires thorough maintainer review due to the implications of local audio processing and cross-platform chat SDK bridging.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-05

## 1. Today's Overview
The IronClaw project is experiencing a period of intense, focused development, primarily driven by core contributors advancing the "Reborn" architecture. Today saw high repository activity with 45 issues updated and 50 pull requests processed, indicating a rapid iteration cadence. The engineering focus is heavily tilted toward backend infrastructure correctness, specifically hardening the agent loop, ensuring durable subagent completions, and finalizing trigger lifecycle mechanisms. Despite the high throughput of merged code, no new official releases were cut today, suggesting these changes are being staged for a significant future milestone. 

## 2. Releases
**No new releases were published today.**

## 3. Project Progress
Core contributors merged 18 PRs today, largely concentrated on fixing critical backend infrastructure bugs and laying the groundwork for upcoming product adapters. 
*   **Reborn Subagent Correctness:** Multiple foundational PRs were merged to ensure robust subagent execution. This includes fixing completion observer delivery to prevent duplicate writes ([PR #4413](https://github.com/nearai/ironclaw/pull/4413)) and implementing scoped thread deletion and spawn rollback for failed batch invocations ([PR #4435](https://github.com/nearai/ironclaw/pull/4435)).
*   **Trigger Lifecycle & Activation:** The trigger lifecycle was significantly improved. A new trigger-create lifecycle hook was wired to pair creators correctly ([PR #4466](https://github.com/nearai/ironclaw/pull/4466)), addressing orphaned pairing issues.
*   **Agent Loop Hardening:** Host compaction was updated to gracefully handle unstable transcript states by deferring compaction non-fatally rather than hard-erroring ([PR #4440](https://github.com/nearai/ironclaw/pull/4440)). 
*   **HTTP Context Management:** The model-visible HTTP result budgeting was fixed to prevent massive context window injections (e.g., stripping HTML and capping output) ([PR #4467](https://github.com/nearai/ironclaw/pull/4467)).

## 4. Community Hot Topics
The most active discussions revolve around the intricacies of the Reborn agent loop's observability and API boundaries.
*   **Reborn Facade and Slack MVP:** [Issue #3280](https://github.com/nearai/ironclaw/issues/3280) (6 comments) and [Issue #3857](https://github.com/nearai/ironclaw/issues/3857) (6 comments) discuss the implementation of the `ProductWorkflow` and the upcoming Slack ProductAdapter MVP. This highlights the underlying need to cleanly separate host-layer services from product-facing adapters.
*   **Tool Visibility vs. Callability:** [Issue #4424](https://github.com/nearai/ironclaw/issues/4424) (4 comments) sparked a meaningful conversation about a discrepancy where `builtin.spawn_subagent` was advertised to the model in text but omitted from the structured `tools` array, rendering it uncallable.
*   **Observability Gaps:** [Issue #4427](https://github.com/nearai/ironclaw/issues/4427) (2 comments) addresses the lack of tracing for `LoopFailureKind`, underscoring developers' need for better real-time debugging capabilities when running the agent locally.

## 5. Bugs & Stability
Several high-severity bugs regarding agent execution correctness were identified and immediately addressed today:
*   **P0 - Silent Subagent Completions & Double Delivery:** Background subagents were completing silently or double-delivering results upon recovery. Fixed and closed via [PR #4413](https://github.com/nearai/ironclaw/pull/4413) and [Issue #4084](https://github.com/nearai/ironclaw/issues/4084).
*   **P1 - Reborn Loop Tool Surface is `AllowAll`:** [Issue #4426](https://github.com/nearai/ironclaw/issues/4426) notes that the capability surface resolver is currently hardcoded to `AllowAll`, ignoring the `interactive_tools` profile and exposing lifecycle/mutation tools in basic chats. (Open, no linked fix PR yet).
*   **P1 - Trigger Completion Policy Ignored:** [Issue #4420](https://github.com/nearai/ironclaw/issues/4420) reported that triggers set to `CompleteAfterFirstFire` were firing forever because workers weren't consulting the policy. (Closed, fixed in recent PRs).
*   **P2 - Context Bomb via builtin.http:** [Issue #4425](https://github.com/nearai/ironclaw/issues/4425) identified that unstripped HTML from large web pages was injecting megabytes of data into the context. (Closed, fixed via [PR #4467](https://github.com/nearai/ironclaw/pull/4467)).

## 6. Feature Requests & Roadmap Signals
Recent issues and open PRs indicate clear trajectory shifts for the next major iteration:
*   **Product Adapters & External Integrations:** The opening of [PR #4476](https://github.com/nearai/ironclaw/pull/4476) (wiring the Slack actor/subject journey) signals that external messaging platform integrations are the immediate next frontier.
*   **Crate Architecture Refactoring:** [Issue #4470](https://github.com/nearai/ironclaw/issues/4470) requests breaking down the monolithic `ironclaw_reborn_composition` into owned crates with CI-enforced boundaries. This suggests the project is preparing for broader third-party contributions and modularity.
*   **Trigger Enhancements:** Users are currently unable to natively request "one-time" scheduled runs. [Issue #4473](https://github.com/nearai/ironclaw/issues/4473) (now closed) laid the groundwork for one-time `trigger_create` runs, a feature almost certain to appear in the next release.
*   **CLI Migration:** Community contributor efforts are actively migrating read-only CLI commands (`status`, `doctor`) to the Reborn API ([PR #4379](https://github.com/nearai/ironclaw/pull/4379)).

## 7. User Feedback Summary
Frustration points for operators and developers currently testing IronClaw heavily center on context management and loop observability. Users running local instances found that the agent loop easily "bombs" the context window due to unbounded tool returns (e.g., fetching raw HTML or listing all installed skills without pagination, as seen in [Issue #4428](https://github.com/nearai/ironclaw/issues/4428)). Furthermore, debugging silent agent loop failures was a major pain point, as loop exits were being persisted to the database without standard `tracing` outputs, leaving operators blind as to why tasks ended ([Issue #4427](https://github.com/nearai/ironclaw/issues/4427)). The core team has been highly responsive to these operational friction points.

## 8. Backlog Watch
Several long-standing, high-impact PRs require final maintainer attention to progress:
*   **Audited Tool Dispatch Funnel:** A massive 4-part PR stack ([PR #4026](https://github.com/nearai/ironclaw/pull/4026), [PR #4025](https://github.com/nearai/ironclaw/pull/4025), [PR #4024](https://github.com/nearai/ironclaw/pull/4024), [PR #4021](https://github.com/nearai/ironclaw/pull/4021)) aimed at routing all tool executions through a unified, audited dispatch funnel has been open since May 25. These require final review to merge vital security/audit logging improvements.
*   **Reborn OpenAI API Migration:** [Issue #3283](https://github.com/nearai/ironclaw/issues/3283) (open since May 6) tracks migrating OpenAI-compatible chat APIs to Reborn. This is a highly requested architectural necessity for broader model compatibility.
*   **Production Hook Activation:** [PR #3938](https://github.com/nearai/ironclaw/pull/3938) and its subsequent third-party activation step ([PR #3951](https://github.com/nearai/ironclaw/pull/3951)) are critical for the extension ecosystem but have been open for almost two weeks pending merge checks.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-06-05

## 1. Today's Overview
LobsterAI is currently experiencing a high-velocity development phase, demonstrating robust project health and strong momentum following its recent `2026.5.28` release. Over the past 24 hours, maintainers merged a remarkable 17 pull requests, indicating aggressive feature iteration and active stabilization of the new release. While new user-facing feature PRs are actively landing, a significant portion of the engineering effort is dedicated to refactoring the voice input architecture, optimizing MCP (Model Context Protocol) launch processes, and hardening the OpenClaw gateway payload limits. The lack of new issues or open PRs left at the end of the day suggests a highly disciplined triage and code-review process. Overall, the project is healthy, with a clear focus on polishing the "Cowork" (multi-agent) capabilities and the OpenClaw gateway integration.

## 2. Releases
No **new** releases were cut today. However, today's merge activity was largely focused on stabilizing and iterating on the **`2026.5.28` release** (merged back to `main` via [PR #2090](https://github.com/netease-youdao/LobsterAI/pull/2090)). 
*Key highlights of the 2026.5.28 baseline include:*
*   **Features:** Introduction of the Kit (Expert Suite) marketplace, local conversation forking in Cowork, and manual plugin updates.
*   **Stability:** Multiple fixes for MCP, Gateway, and Artifacts modules.

## 3. Project Progress
A total of **17 PRs were merged/closed** today, showing significant progress across the frontend (renderer), backend (main), and agent/gateway (OpenClaw/Cowork) layers:
*   **Major Architectural Refactoring:** Voice input modules were completely split and decoupled from the Cowork prompt UI into focused ASR, WAV encoding, and IPC modules ([PR #2111](https://github.com/netease-youdao/LobsterAI/pull/2111)).
*   **MCP Optimizations:** Resolved slow `npx` stdio launches by pre-resolving and caching absolute binary paths for the OpenClaw gateway, alongside adding first-response timing logs to track MCP startup bottlenecks ([PR #2091](https://github.com/netease-youdao/LobsterAI/pull/2091)).
*   **OpenClaw Gateway Hardening:** Implemented payload size detection to prevent oversized `chat.send` payloads from crashing the gateway, properly classifying `1009` max-payload errors ([PR #2110](https://github.com/netease-youdao/LobsterAI/pull/2110)).
*   **Cowork UX Enhancements:** Added the ability to select text directly from artifact previews (Markdown/text) and inject it into the Cowork chat draft ([PR #2101](https://github.com/netease-youdao/LobsterAI/pull/2101)), and added a close button to the search modal ([PR #2097](https://github.com/netease-youdao/LobsterAI/pull/2097)).
*   **Model Support:** Enabled image input support for the MiniMax-M3 model by fixing a hardcoded `false` flag leftover from M2.5 ([PR #2093](https://github.com/netease-youdao/LobsterAI/pull/2093)).

## 4. Community Hot Topics
*   The most active community engagement today surrounded a batch of previously "stale" PRs that were bulk-closed by maintainers. This included highly requested UX improvements such as **System Notifications for finished Cowork tasks** ([PR #1536](https://github.com/netease-youdao/LobsterAI/pull/1536)), **Message Bookmarks** ([PR #1538](https://github.com/netease-youdao/LobsterAI/pull/1538)), and **Custom Tagging/Filtering for sessions** ([PR #1542](https://github.com/netease-youdao/LobsterAI/pull/1542)). 
*   *Underlying Needs:* The community strongly desires better asynchronous task management (notifications), long-context navigation (bookmarks/tags), and better internationalization (i18n fixes). Maintainers should consider re-evaluating these community contributions for the next roadmap phase, as they solve real UX pain points.

## 5. Bugs & Stability
*   **OpenClaw Gateway Startup Failure (Severity: High):** A user reported that the OpenClaw gateway consistently fails to start within the required timeframe ([Issue #769](https://github.com/netease-youdao/LobsterAI/issues/769)). *Note: No immediate fix PR was opened in the last 24h, but the gateway payload and MCP startup optimizations merged today may incidentally improve startup I/O.*
*   **Oversized Payload Crashes (Severity: Medium):** Handled today via [PR #2110](https://github.com/netease-youdao/LobsterAI/pull/2110), large images sent via OpenClaw were causing gateway failures.
*   **MCP Install Bricking (Severity: Medium):** Fixed a bug where interrupted `npm install` commands for MCP servers would leave a stale `installing` record, permanently blocking the MCP from launching. This is now automatically retried ([PR #2091](https://github.com/netease-youdao/LobsterAI/pull/2091)).
*   **OAuth Token Loss (Severity: Low):** Fixed a settings panel bug where closing the UI during GitHub Copilot auth polling silently lost the token ([PR #1544](https://github.com/netease-youdao/LobsterAI/pull/1544)).

## 6. Feature Requests & Roadmap Signals
Based on recently closed community PRs and merged features, the short-term roadmap is heavily focused on agentic workflows (Cowork) and ecosystem expansion (Kits/MCP):
*   **Next Iteration Signals:** Expect better system-level integration (notification API) and session organization (tags/bookmarks) to officially enter the roadmap, as community PRs for these were just reviewed/closed.
*   **Model Expansion:** Continued rapid support for third-party model updates (e.g., MiniMax-M3 image support).
*   **Plugin/MCP Hygiene:** Hiding internal OpenClaw plugins ([PR #2096](https://github.com/netease-youdao/LobsterAI/pull/2096)) and validating remote MCP URLs ([PR #2103](https://github.com/netease-youdao/LobsterAI/pull/2103)) signal a maturation of the plugin ecosystem towards a consumer-ready state.

## 7. User Feedback Summary
*   **Pain Point - Gateway Reliability:** User feedback ([Issue #769](https://github.com/netease-youdao/LobsterAI/issues/769)) highlights that local gateway (OpenClaw) initialization remains a friction point for non-technical users.
*   **Pain Point - Multi-tasking:** The community's attempts to add system notifications ([PR #1536](https://github.com/netease-youdao/LobsterAI/pull/1536)) indicate that users frequently run long Cowork agent tasks and step away, causing them to miss when tasks finish or fail.
*   **Satisfaction:** The rapid patching of specific model configurations (MiniMax) and i18n bugs shows that the project has an active, detail-oriented user base reporting granular issues, which is a strong indicator of deep daily adoption.

## 8. Backlog Watch
*   **[Issue #769 - OpenClaw Gateway Startup Timeout](https://github.com/netease-youdao/LobsterAI/issues/769):** Open since March 2026 and updated yesterday, this issue needs direct maintainer engagement to diagnose whether the user's local environment or a core gateway initialization race condition is at fault.
*   **Stale but Valuable Feature PRs:** The recently closed "stale" PRs—specifically Session Tags ([PR #1542](https://github.com/netease-youdao/LobsterAI/pull/1542)) and Message Bookmarks ([PR #1538](https://github.com/netease-youdao/LobsterAI/pull/1538))—are highly upvoted/needed features. They should be revisited or scheduled for internal development to improve Cowork session management.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-05

## 1. Today's Overview
Project Moltis demonstrates active and focused development, maintaining a healthy pulse with two new community feature requests and five open pull requests updated within the last 24 hours. The development focus is currently split between enhancing the AI's browser automation capabilities and improving the reliability of external communication channels like Telegram. The recent release `20260603.01` indicates a steady cadence of deployments, keeping the project's momentum strong. Overall, the repository is in a highly active state, with core contributors directly addressing edge cases reported by the community. 

## 2. Releases
- **[20260603.01](https://github.com/moltis-org/moltis/releases/tag/20260603.01)**: Released on June 3rd. While detailed release notes are sparse in the provided data, the versioning indicates a standard iterative update. No explicit breaking changes or migration notes were flagged in this cycle.

## 3. Project Progress
Although there were no merged Pull Requests today, the open PRs show heavy iteration on browser tooling and message handling:
- **Browser Tool Robustness**: Two PRs ([#1100](https://github.com/moltis-org/moltis/pull/1100) and [#1103](https://github.com/moltis-org/moltis/pull/1103)) were opened to pierce open shadow roots in DOM snapshots and ref lookups. PR [#1103](https://github.com/moltis-org/moltis/pull/1103) is a direct follow-up/alternative to [#1100](https://github.com/moltis-org/moltis/pull/1100) incorporating review fixes, signaling active collaboration to solve web component interaction limits (e.g., Salesforce Lightning). Additionally, PR [#1098](https://github.com/moltis-org/moltis/pull/1098) was introduced to fix an issue where local models (like Gemma 4) emit explicit `null` values for optional browser parameters, broadening model compatibility.
- **Chat History & Memory**: PR [#1089](https://github.com/moltis-org/moltis/pull/1089) advances memory and context handling by capping persisted tool results before session rehydration, ensuring efficient prompt delivery across chat, streaming, and compaction flows.
- **Channel Streaming**: PR [#1099](https://github.com/moltis-org/moltis/pull/1099) separates temporary Telegram progress updates from final replies, preventing partial tokens from flooding the user's chat view.

## 4. Community Hot Topics
The community is highly engaged in expanding Moltis' integration capabilities and local processing power:
- **Issue [#1102](https://github.com/moltis-org/moltis/issues/1102)**: A request to integrate FunASR/SenseVoice as a local Speech-to-Text (STT) engine. The underlying need highlights the community's desire for ultra-fast (~70ms for 10s audio), privacy-preserving, native streaming voice processing.
- **Issue [#1101](https://github.com/moltis-org/moltis/issues/1101)**: A proposal to add SMS and LINE channels. This signals a strong user need to deploy Moltis as a centralized, omnichannel personal assistant beyond standard web and Telegram interfaces.

## 5. Bugs & Stability
- **Severity: Medium (Compatibility Issue)**: [PR #1098](https://github.com/moltis-org/moltis/pull/1098) addresses a bug where smaller local LLMs fail to execute browser tools properly because they output `null` instead of omitting optional JSON fields. This is a critical fix for users leveraging local models.
- **Severity: Medium (Browser Limitations)**: [PR #1100](https://github.com/moltis-org/moltis/pull/1100) highlights that Moltis currently struggles to interact with modern web components utilizing shadow DOMs (like Salesforce). Fix PRs are currently active and under review.
- **Severity: Low (UX Glitch)**: [Issue #1097](https://github.com/moltis-org/moltis/issues/1097) (referenced in [PR #1099](https://github.com/moltis-org/moltis/pull/1099)) notes that streaming progress updates in Telegram currently act as final replies, cluttering the chat. A fix is actively being merged.

## 6. Feature Requests & Roadmap Signals
- **Local Voice Processing**: Issue [#1102](https://github.com/moltis-org/moltis/issues/1102) strongly pushes for local STT (FunASR/SenseVoice). Given the speed metrics quoted by the community, this is a prime candidate for an upcoming roadmap inclusion.
- **Omnichannel Expansion**: Issue [#1101](https://github.com/moltis-org/moltis/issues/1101) requests SMS and LINE integrations. 
- **Prediction for Next Version**: The next version will likely merge the shadow DOM fixes ([#1103](https://github.com/moltis-org/moltis/pull/1103)), null parameter tolerance ([#1098](https://github.com/moltis-org/moltis/pull/1098)), and the Telegram streaming overhaul ([#1099](https://github.com/moltis-org/moltis/pull/1099)), massively improving system stability for local models and browser automation.

## 7. User Feedback Summary
Users are actively pushing Moltis into enterprise and mobile territories. The use case of scraping enterprise SaaS UIs (indicated by the Salesforce shadow DOM issue) shows that users rely on Moltis for complex, authenticated browser automation. Additionally, the demand for LINE/SMS channels and sub-100ms local voice recognition indicates a strong user base aiming to deploy Moltis as a ubiquitous, privacy-first daily driver assistant. Feedback is technically sound and constructive, showing a sophisticated open-source community.

## 8. Backlog Watch
- **PR Cleanup Needed**: [PR #1100](https://github.com/moltis-org/moltis/pull/1100) and [PR #1103](https://github.com/moltis-org/moltis/pull/1103) are solving the exact same shadow DOM problem. Maintainers should close [#1100](https://github.com/moltis-org/moltis/pull/1100) in favor of [#1103](https://github.com/moltis-org/moltis/pull/1103) to streamline the review process.
- **Core PRs Awaiting Merge**: [PR #1089](https://github.com/moltis-org/moltis/pull/1089) (Tool result capping) has been open since June 1st and touches critical memory/history paths. It requires a final maintainer review to prevent context-window overflows.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-06-05

## 1. Today's Overview
The CoPaw (QwenPaw) project exhibited highly active and healthy development rhythms over the past 24 hours, processing a robust pipeline of 24 issues and 25 pull requests. The maintainers successfully rolled out the `v1.1.11-beta.1` release, demonstrating a focus on backend stability and cron job refinements. The community remains heavily engaged, contributing significant first-time PRs focused on security, UI enhancements, and core architectural improvements like OpenSandbox integration. Overall, the project is moving swiftly from feature expansion toward stability and UX refinement.

## 2. Releases
**v1.1.11-beta.1** was released today, featuring targeted backend fixes:
*   **fix(config):** Added a `ProviderManager` fallback mechanism to `get_model_max_input_length`. This resolves a critical configuration gap where custom models failed to properly set context limits.
*   **refactor(cron):** Disabled push bubbles for cron jobs of type `'agent'`. This stops the UI from being flooded with unnecessary automated backend notifications.

## 3. Project Progress
Today saw 15 PRs merged/closed, reflecting active iteration across the stack:
*   **MCP & API Stability:** [PR #4958](https://github.com/agentscope-ai/QwenPaw/pull/4958) fixed a critical issue where OpenAI-style APIs rejected MCP tool names containing `.` or `:` by implementing an alias-rewrite sanitizer.
*   **Core Performance:** [PR #4954](https://github.com/agentscope-ai/QwenPaw/pull/4954) replaced blocking I/O with `aiofiles` for non-blocking file writes, directly improving agent async performance.
*   **Plugin Architecture:** [PR #4804](https://github.com/agentscope-ai/QwenPaw/pull/4804) introduced a Prompt Section Registry, allowing plugins to safely inject system prompt blocks without monkey-patching the core agent.
*   **Channel Enhancements:** [PR #4879](https://github.com/agentscope-ai/QwenPaw/pull/4879) improved Feishu interactive card content extraction. [PR #4925](https://github.com/agentscope-ai/QwenPaw/pull/4925) patched a native payload merging bug to preserve `acl_sender_id` across channels. 
*   **Windows/Desktop:** [PR #4853](https://github.com/agentscope-ai/QwenPaw/pull/4853) fixed an annoying bug where browser tool processes and lock files persisted on Windows after session closure.

## 4. Community Hot Topics
The most active discussions revolve around context management and UI visibility:
*   **Console Tool Visibility ([Issue #4644](https://github.com/agentscope-ai/QwenPaw/issues/4644), 20 comments):** Users are highly frustrated that tool calls are rarely displayed in real-time without a manual page refresh. The lack of frontend error logging makes this a top UX pain point.
*   **Inline Skill Execution ([Issue #4796](https://github.com/agentscope-ai/QwenPaw/issues/4796), 6 comments):** A highly requested feature suggesting that typing `/` in the chat input should auto-complete/suggest available skills, aligning CoPaw with standard mainstream AI agent UX.
*   **Update Environment Reset ([Issue #4875](https://github.com/agentscope-ai/QwenPaw/issues/4875), 4 comments):** Friction during updates where the `uv` virtual environment is reset, forcing users to manually reinstall previous dependencies.

## 5. Bugs & Stability
Several high-priority bugs were reported today regarding context management and external integrations:
1.  **Critical - Context Compaction Crashes ([Issue #4956](https://github.com/agentscope-ai/QwenPaw/issues/4956), [Issue #4953](https://github.com/agentscope-ai/QwenPaw/issues/4953)):** The context manager crashes with `'str' object has no attribute 'get'` during the `pre_reasoning` hook when message content contains mixed-type list elements. This floods logs and interrupts sessions.
2.  **High - `/compact` Ignores Custom Max Context ([Issue #4937](https://github.com/agentscope-ai/QwenPaw/issues/4937)):** The `/compact` command defaults to a 128K token limit, ignoring models configured with higher limits (e.g., 512K). *Fix likely addressed by the ProviderManager fallback in today's v1.1.11-beta.1 release.*
3.  **High - Stale Task Status API ([Issue #4957](https://github.com/agentscope-ai/QwenPaw/issues/4957)):** `get_task_status()` returns stale "running" statuses even after task completion, breaking integrations relying on the API.
4.  **Moderate - Startup Blocking ([Issue #4946](https://github.com/agentscope-ai/QwenPaw/issues/4946)):** A missing plugin dependency causes the entire QwenPaw startup to hang for 6+ minutes, dropping all channel messages silently. *Decoupling plugin loader is currently being addressed in [PR #4900](https://github.com/agentscope-ai/QwenPaw/pull/4900).*

## 6. Feature Requests & Roadmap Signals
User feedback today strongly signals a demand for transparent context visibility and secure execution environments:
*   **OpenSandbox Integration ([Issue #4951](https://github.com/agentscope-ai/QwenPaw/issues/4951), [PR #4934](https://github.com/agentscope-ai/QwenPaw/pull/4934)):** Users want secure, isolated runtimes for untrusted shell commands. A first-time contributor has already submitted a PR adding OpenSandbox support.
*   **Per-Session Token Visibility ([Issue #4767](https://github.com/agentscope-ai/QwenPaw/issues/4767), [Issue #4782](https://github.com/agentscope-ai/QwenPaw/issues/4782)):** Users are asking for a clear UI indicator showing current context usage vs. total capacity to manually manage compaction. This aligns perfectly with [PR #4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) which adds a floating token-usage badge.
*   **Provider Auto-Fallback ([Issue #4757](https://github.com/agentscope-ai/QwenPaw/issues/4757)):** A built-in mechanism to automatically degrade to a backup LLM provider when the primary hits rate/token limits.

## 7. User Feedback Summary
Users are actively pushing CoPaw into complex, multi-model production environments but are encountering friction with Desktop packaging and frontend synchronization. Windows users specifically noted pain points regarding desktop pet dependencies ([PR #4801](https://github.com/agentscope-ai/QwenPaw/pull/4801)) and UI display bugs. Furthermore, developers utilizing DeepSeek models via API expressed frustration regarding prefix cache命中率 (cache hit rates) ([Issue #3891](https://github.com/agentscope-ai/QwenPaw/issues/3891)) and UI behavior where actual responses are hidden inside folded "thinking" blocks ([Issue #4962](https://github.com/agentscope-ai/QwenPaw/issues/4962)). 

## 8. Backlog Watch
*   **Frontend Test Coverage ([PR #4332](https://github.com/agentscope-ai/QwenPaw/pull/4332)):** A massive PR adding 10 test files and ~100 new test cases to the frontend has been "Under Review" since May 14. This requires immediate maintainer attention to merge and improve frontend reliability.
*   **DeepSeek Cache Optimization ([Issue #3891](https://github.com/agentscope-ai/QwenPaw/issues/3891)):** Open since April 27, this issue highlights a significant cost discrepancy (95% vs expected higher cache hit rate) for DeepSeek users. Maintainer input on whether this is a client-side formatting issue or a provider-side limitation is needed.
*   **Tauri Auto-Updater ([PR #4669](https://github.com/agentscope-ai/QwenPaw/pull/4669)):** Open since May 25, this crucial Desktop enhancement is awaiting review to streamline the update process for non-technical users.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-06-05

## 1. Today's Overview
ZeptoClaw experienced a highly automated but administratively inactive day, with 16 new dependency pull requests opened by Dependabot and zero issues created, closed, or commented on by human contributors. All 16 pull requests remain in an "OPEN" state, indicating a temporary backlog in maintainer reviews and merges. The updates span the project's entire tech stack, including Rust backend crates, JavaScript/TypeScript frontend packages, Docker base images, and GitHub Actions CI/CD workflows. The complete absence of human-generated issues or PRs suggests a quiet period in active feature development or community interaction. Overall, the project's automated health mechanisms are functioning well, though the pending merges represent a slight administrative bottleneck.

## 2. Releases
*No new releases were recorded today.*

## 3. Project Progress
*No feature advancement or bug fixes occurred today.* 
None of the 16 submitted Pull Requests have been merged, and there are no closed issues to report. The current pipeline consists entirely of routine dependency maintenance. Once approved, these PRs will modernize the project's underlying infrastructure (e.g., upgrading the Rust base image to v1.96, React to v19.2.6, and Astro to v6.3.7). 

## 4. Community Hot Topics
There are no active community hot topics today. The project saw zero human-authored comments, issue submissions, or reactions across the last 24 hours. The only activity originates from automated dependency bots.

## 5. Bugs & Stability
No new bugs, crashes, or regressions were reported by users today. However, routine stability improvements are queued in the open PRs:
*   **Rust Core Bug Fixes:** [PR #623](https://github.com/qhkm/zeptoclaw/pull/623) bumps `tokio` from 1.52.1 to 1.52.3, which includes upstream fixes for non-string enum object keys.
*   **Input Handling Fix:** [PR #625](https://github.com/qhkm/zeptoclaw/pull/625) updates `rpassword` from 7.4.0 to 7.5.2, addressing a Unicode parsing issue.
*   **Backend Infrastructure:** [PR #613](https://github.com/qhkm/zeptoclaw/pull/613) proposes upgrading the Docker base image to `rust:1.96-slim-trixie`.

## 6. Feature Requests & Roadmap Signals
No new feature requests or roadmap signals were identified in today's data. The automated updates do, however, highlight the project's current technological composition:
*   **Web Scraping Capabilities:** [PR #620](https://github.com/qhkm/zeptoclaw/pull/620) updates the `scraper` crate, indicating ZeptoClaw maintains active web data extraction features.
*   **UI/Documentation Stack:** Updates to `react` ([PR #616](https://github.com/qhkm/zeptoclaw/pull/616)), `astro` ([PR #614](https://github.com/qhkm/zeptoclaw/pull/614), [PR #615](https://github.com/qhkm/zeptoclaw/pull/615)), and `tailwindcss` ([PR #619](https://github.com/qhkm/zeptoclaw/pull/619)) confirm ongoing maintenance of a modern frontend panel and documentation/landing sites.

## 7. User Feedback Summary
There is no direct user feedback to summarize for this 24-hour period, as no users or contributors submitted issues or comments.

## 8. Backlog Watch
The primary item requiring immediate maintainer attention is the growing queue of automated dependency PRs. With 16 open bot-generated PRs and zero merges recorded today, the review pipeline is temporarily stalled. Maintainers should prioritize clearing this backlog to ensure the project receives crucial security patches and dependency stability updates.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-05

## 1. Today's Overview
ZeroClaw is experiencing exceptionally high development velocity, with **84 total issue and PR updates** in the past 24 hours (34 issues, 50 PRs). The project is currently in a pre-release stabilization phase, actively coordinating two concurrent release lines: the immediate **v0.8.0** stable release and the architectural **v0.8.1** integration expansion. The open-source community is highly engaged, driving a rapid cycle of bug reporting, immediate patching, and RFC discussions. Currently, there is a heavy focus on hardening the Web UI/Gateway, stabilizing the TUI (`zerocode`), and resolving provider-specific edge cases, particularly around the Ollama integration and Windows platform support.

## 2. Releases
No new releases were cut today. The project remains focused on clearing the **v0.8.0 Stable-tier blocker queue** ([Issue #7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112)) prior to tagging the next version.

## 3. Project Progress
Significant ground was covered today with **20 merged or closed PRs**, heavily focused on system stability and UX improvements. 
*   **TUI (`zerocode`) Resilience:** A major pain point was addressed in [PR #7158](https://github.com/zeroclaw-labs/zeroclaw/pull/7158), which introduced graceful daemon reconnection and recovery, fixing a workflow-blocking UI freeze. Furthermore, an outbound message queue was implemented in [PR #7190](https://github.com/zeroclaw-labs/zeroclaw/pull/7190), allowing users to queue messages while the agent is busy.
*   **Gateway Web Chat Fixes:** Maintainers laid the groundwork for a more robust web UI. [PR #7222](https://github.com/zeroclaw-labs/zeroclaw/pull/7222) resolved a critical issue where the "Clear all" button only wiped frontend state, and [PR #7223](https://github.com/zeroclaw-labs/zeroclaw/pull/7223) introduced slash commands (like `/clear`, `/model`) to the web interface.
*   **Channel Enhancements:** A highly useful cost-optimization feature was merged via [PR #6945](https://github.com/zeroclaw-labs/zeroclaw/pull/6945), allowing per-agent `classifier_provider` routing so reply-intent checks can be offloaded to cheaper/faster models.

## 4. Community Hot Topics
The community is heavily focused on multi-agent interoperability, security, and local model support.
*   **A2A Protocol Interoperability:** The second-most upvoted issue is [Issue #3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) (+7 👍), a highly discussed RFC requesting native Agent-to-Agent (A2A) protocol support so ZeroClaw instances can communicate with external agents. This was bolstered today by a companion discovery proposal in [Issue #7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218).
*   **Desktop "Computer-Use" / GUI Control:** A highly active discussion is taking place in [Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) (5 comments), requesting screen interaction capabilities (similar to OpenAI Codex) to allow ZeroClaw to capture screenshots and send mouse/keyboard events.
*   **Ollama Tool Calling Stability:** Local model users are actively discussing the broken state of tool-calling in the Ollama provider ([Issue #5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) - 6 comments). The community is actively collaborating on fixing compile regressions and temperature handling caused by recent refactors ([PR #7224](https://github.com/zeroclaw-labs/zeroclaw/pull/7224), [PR #7213](https://github.com/zeroclaw-labs/zeroclaw/pull/7213)).

## 5. Bugs & Stability
Several high-severity bugs were reported today, but maintainers and contributors have been incredibly fast at opening corresponding fix PRs.
*   **S1 - Windows Quote Mangling:** On Windows, agent shell commands containing double quotes fail entirely ([Issue #7083](https://github.com/zeroclaw-labs/zeroclaw/issues/7083)). *Fix in progress:* Addressed by [PR #7214](https://github.com/zeroclaw-labs/zeroclaw/pull/7214).
*   **S2 - Web UI Leaking Telemetry:** The Gateway web chat renders permanent "unknown" tool cards with infinite spinners due to observability telemetry leaking onto the chat WebSocket ([Issue #7151](https://github.com/zeroclaw-labs/zeroclaw/issues/7151)). *Fix in progress:* Resolved by [PR #7221](https://github.com/zeroclaw-labs/zeroclaw/pull/7221).
*   **S2 - Web UI Shows CMD Windows on Windows:** Loading the web toolbar is slow and spawns visible, annoying `cmd` console black boxes on Windows ([Issue #7197](https://github.com/zeroclaw-labs/zeroclaw/issues/7197)).
*   **S2 - Shell Tool Loop:** Connected agents can get stuck running near-duplicate shell discovery commands until hitting `max_tool_iterations` ([Issue #7143](https://github.com/zeroclaw-labs/zeroclaw/issues/7143)).

## 6. Feature Requests & Roadmap Signals
Today's RFCs and feature requests give a clear signal of what is coming in the **v0.8.1** and **v0.9.0** releases.
*   **Enhanced Security & Permissions:** Targeting v0.9.0, the project is looking to introduce an OIDC Authentication Provider ([Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)) and a Pluggable Security Provider interface ([Issue #7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)). For immediate v0.8.0 targeting, [Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) proposes a Claude Code-style permission policy (`allow/ask/deny`) for high-risk shell commands.
*   **Context & Model Budgeting:** [Issue #7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) proposes per-model capability configurations (vision, context_window) to improve UI budget indicators and context compression—a necessary evolution as context windows grow.
*   **Repo Maintenance:** [Issue #7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184) suggests moving translations (`.ftl`/`.po`) to a git submodule, which directly addresses user complaints about the massive repo size ([Issue #7211](https://github.com/zeroclaw-labs/zeroclaw/issues/7211)).

## 7. User Feedback Summary
Users are enthusiastic about ZeroClaw acting as a lightweight, Rust-based alternative to heavier agent runtimes (notably highlighted in [Issue #7143](https://github.com/zeroclaw-labs/zeroclaw/issues/7143)). 
*   **Pain Points:** A major user friction point is the disconnect between the Web UI state and the backend session history, causing "zombie" sessions. Users are also frustrated by the overly aggressive 10-minute idle session reap timer ([Issue #7179](https://github.com/zeroclaw-labs/zeroclaw/issues/7179)), though this is now closed, implying a fix or policy change. 
*   **Use Cases:** ZeroClaw is being pushed heavily into production Slack and WhatsApp integrations, and users are actively requesting enterprise-ready features (OIDC, RBAC for shell commands) to deploy it safely in corporate environments.

## 8. Backlog Watch
The following high-priority, high-impact items require immediate maintainer attention:
*   **The 153-Commit Lost History:** [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) tracks the recovery of 153 approved commits lost during a bulk revert in March. This is a high-risk data-loss issue blocking potential features and bug fixes that were previously merged.
*   **Missing Twitter/X Pre-built Binary:** [Issue #7069](https://github.com/zeroclaw-labs/zeroclaw/issues/7069) notes that despite source code and documentation existing for the Twitter/X channel, it is not compiled into the pre-built binaries. Needs maintainer review for CI/CD pipeline updates.
*   **LSP Support Roadblock:** [Issue #5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) (accepted RFC for Language Server Protocol support to reduce LLM hallucinations) is currently sitting in a `status:blocked` state and needs an owner to push the implementation forward.

</details>