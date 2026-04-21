# OpenClaw Ecosystem Digest 2026-04-22

> Issues: 500 | PRs: 500 | Projects covered: 11 | Generated: 2026-04-21 22:12 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
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

# OpenClaw Project Digest — 2026-04-22

## 1. Today's Overview
OpenClaw continues to exhibit exceptionally high community activity, with 500 issues and 500 pull requests updated in the last 24 hours. Of the issues currently active, 307 remain open while 193 were closed, indicating a strong but still playing-catch-up triage cadence by maintainers. PR throughput is similarly strained, with 323 open PRs versus 177 merged/closed. The project pushed 3 new releases (`v2026.4.20` and two betas), signaling an active release cycle, though recurring regressions across LLM providers and messaging channels suggest stability remains a challenge.

---

## 2. Releases

### v2026.4.20 (plus beta.1 and beta.2)
All three releases share the same changelog:
- **Onboard/wizard**: Restyled the setup security disclaimer with a single yellow warning banner, section headings, and bulleted checklists. Un-dimmed the note body so key guidance is easy to scan.
- **Onboard/wizard**: Added a loading spinner during the initial model catalog load so the wizard no longer goes blank.

**Assessment**: A minor, UX-focused release targeting first-run experience. No breaking changes or migration notes.

---

## 3. Project Progress

### Merged/Closed PRs
| PR | Area | Summary |
|---|---|---|
| [#43961](https://github.com/openclaw/openclaw/pull/43961) | Gateway | SIGKILL stale process on graceful shutdown timeout — fixes silent port conflicts |
| [#62947](https://github.com/openclaw/openclaw/pull/62947) | Slack | Preserve thread aliases in runtime outbound sends |
| [#69816](https://github.com/openclaw/openclaw/pull/69816) | Ollama | Register media-understanding provider so `ollama/*` vision models route correctly |
| [#69794](https://github.com/openclaw/openclaw/pull/69794) | Tlon | Guard memex upload target (security fix) |
| [#69819](https://github.com/openclaw/openclaw/pull/69819) | Install | Mirror `node-domexception` override for npm compatibility |
| [#64059](https://github.com/openclaw/openclaw/pull/64059) | Agents | Align system prompt messaging and subagent routing guidance |
| [#57815](https://github.com/openclaw/openclaw/pull/57815) | Docs | Add positional interpreter category to exec-approvals docs |

### Key Open PRs Advancing Features
| PR | Area | Summary |
|---|---|---|
| [#68926](https://github.com/openclaw/openclaw/pull/68926) | Web UI | Add agent, model, and thinking selectors to chat controls (L) |
| [#68936](https://github.com/openclaw/openclaw/pull/68936) | Scripts | PR review autofix pipeline + Windows daemon (XL) |
| [#69812](https://github.com/openclaw/openclaw/pull/69812) | Google Chat | Harden Google auth transport, remove dead root dependency (XL) |
| [#10356](https://github.com/openclaw/openclaw/pull/10356) | TTS | Add Typecast provider with emotion presets and Asian language support (L) |
| [#69845](https://github.com/openclaw/openclaw/pull/69845) | Web UI | Mailbox previews for Sessions Control UI (M) |
| [#69840](https://github.com/openclaw/openclaw/pull/69840) | CLI perf | Lazy-load doctor plugin paths — 25s → ~4s baseline (L) |
| [#69310](https://github.com/openclaw/openclaw/pull/69310) | Core | Surface dropped media warnings instead of silent swallowing (L) |

---

## 4. Community Hot Topics

### Most Active Issues
| Issue | 👍 | 💬 | Core Theme |
|---|---|---|---|
| [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | 71 | 89 | Cross-platform parity — Linux/Windows desktop apps remain the #1 requested feature since Jan 2026 |
| [#55342 Behavioral reputation for skills](https://github.com/openclaw/openclaw/issues/55342) | 0 | 17 | Security — addressing 341 malicious ClawHub skills, identity verification gaps, prompt injection blind spots |
| [#29053 MCP Client native support](https://github.com/openclaw/openclaw/issues/29053) | 19 | 17 | Interoperability — MCP becoming industry standard; users want native MCP server connections |
| [#35220 Codex streaming server_error no fallback](https://github.com/openclaw/openclaw/issues/35220) | 0 | 16 | Reliability — fallback chain ignored during streaming errors |
| [#65603 Azure Foundry GPT models reject schema](https://github.com/openclaw/openclaw/issues/65603) | 0 | 15 | Provider compat — reasoning + tool calling broken after 2026.4.11 |
| [#66633 Cloudflare 403 on openai-codex](https://github.com/openclaw/openclaw/issues/66633) | 6 | 14 | Regression — bot mitigation blocks Codex requests post-upgrade |
| [#17101 Telegram voice not transcribed](https://github.com/openclaw/openclaw/issues/17101) | 0 | 15 | Channel bug — `.ogg`/Opus not auto-transcribed |
| [#65867 Gemini `<final>` tags leak](https://github.com/openclaw/openclaw/issues/65867) | 0 | 14 | Regression — model artifacts visible to users |

### Underlying Needs
1. **Platform expansion**: Linux/Windows apps (#75) remain the top community ask; 89 comments over 4 months show sustained demand.
2. **Security maturity**: Skill reputation/review (#55342) is becoming urgent as ClawHub scales — community is concerned about malicious skills.
3. **Provider reliability**: Multiple provider regressions (Azure, OpenAI Codex, Gemini, OpenRouter) suggest provider integration tests need hardening.
4. **MCP adoption**: Users are vocal about MCP client support (#29053) as the tooling ecosystem standardizes around it.

---

## 5. Bugs & Stability

### Critical Regressions (Ranked by Severity)

| Severity | Issue | Area | Fix Status |
|---|---|---|---|
| 🔴 High | [#66633](https://github.com/openclaw/openclaw/issues/66633) Cloudflare 403 blocks all Codex requests after upgrade (👍6) | openai-codex provider | **Closed** — likely fixed in later release |
| 🔴 High | [#68735](https://github.com/openclaw/openclaw/issues/68735) Provider rejected schema/tool payload on GitHub Copilot models (👍5) | Provider compat | Open, no linked fix PR |
| 🔴 High | [#65603](https://github.com/openclaw/openclaw/issues/65603) Azure Foundry reasoning + tool calling broken (👍0) | Provider compat | Open, no linked fix PR |
| 🟡 Medium | [#45750](https://github.com/openclaw/openclaw/issues/45750) Intermittent gateway RPC/WebSocket failures break cron (👍5) | Gateway | Open, no linked fix PR |
| 🟡 Medium | [#65867](https://github.com/openclaw/openclaw/issues/65867) Gemini `<final>` tags leak into messages (👍0) | Provider compat | Open, no linked fix PR |
| 🟡 Medium | [#68056](https://github.com/openclaw/openclaw/issues/68056) WhatsApp media reply sent twice (👍0) | WhatsApp channel | Open |
| 🟡 Medium | [#33185](https://github.com/openclaw/openclaw/issues/33185) imageModel "Unknown model" despite valid config (👍0) | Config | Open; [#69816](https://github.com/openclaw/openclaw/pull/69816) fixes for Ollama subset |
| 🟡 Medium | [#31331](https://github.com/openclaw/openclaw/issues/31331) Docker + Sandbox workspace binding fails (👍1) | Docker/Sandbox | Open |
| 🟢 Low | [#36323](https://github.com/openclaw/openclaw/issues/36323) Telegram markdown tables render as raw text (👍8) | Telegram formatting | Open |
| 🟢 Low | [#23208](https://github.com/openclaw/openclaw/issues/23208) TTS ignores configured ElevenLabs voiceId (👍0) | TTS | Open |

### Notable Stability Fixes in Open PRs
- [#47994](https://github.com/openclaw/openclaw/pull/47994): Prevent fallback model from permanently overwriting agent config
- [#68700](https://github.com/openclaw/openclaw/pull/68700): Stop treating session lock waits as provider timeouts
- [#69798](https://github.com/openclaw/openclaw/pull/69798): Pin sandbox file reads (security race condition)
- [#69850](https://github.com/openclaw/openclaw/pull/69850): Normalize malformed assistant replay content

---

## 6. Feature Requests & Roadmap Signals

### Likely Near-Term (fix PRs already open or partially implemented)
- **MCP Client support** (#29053, 👍19) — native MCP server connections
- **Post-subagent completion hook** (#22358) — extension hook for trajectory generation
- **Amazon Bedrock API Key auth** (#30215, 👍4) — bearer token support

### Medium-Term Community Signals
- **Linux/Windows desktop apps** (#75, 👍71) — highest-demand feature, no PRs yet
- **Behavioral reputation for skills** (#55342) — security framework for ClawHub
- **System prompt ordering for prefix caching** (#40256) — performance optimization for local models

### Predicted for Next Release
Given open PR activity, expect improvements in:
1. OpenRouter/Codex provider reliability (multiple fix PRs addressing `payloads=0` and baseUrl issues)
2. Web UI chat controls (agent/model/thinking selectors, mailbox previews)
3. CLI performance (lazy-loaded doctor paths)
4. Sandbox security (pinned file reads, root guard)

---

## 7. User Feedback Summary

### Recurring Pain Points
1. **Provider reliability is the top frustration** — Azure Foundry, OpenAI Codex, OpenRouter, and Gemini all had regressions this cycle. Users report multiple upgrades breaking previously-working setups ([#65603](https://github.com/openclaw/openclaw/issues/65603), [#68735](https://github.com/openclaw/openclaw/issues/68735), [#62045](https://github.com/openclaw/openclaw/issues/62045)).
2. **OpenRouter configuration generates wrong baseUrls** — fresh installs write incorrect `baseUrl` values, blocking first-time users ([#67295](https://github.com/openclaw/openclaw/issues/67295), [#69104](https://github.com/openclaw/openclaw/issues/69104), [#67698](https://github.com/openclaw/openclaw/issues/67698)).
3. **Messaging channel fragility** — Telegram voice transcription (#17101), Discord duplicate replies (#37844), WhatsApp duplicate media (#68056), and Signal group mentions (#29214) all have active bugs.
4. **Docker/Sandbox UX is broken** — workspace binding failures in containerized deployments (#31331, 👍1) affect production users.

### Positive Signals
- Community is actively contributing fix PRs (autofix pipeline, provider fixes, UI improvements)
- New TTS provider (Typecast, [#10356](https://github.com/openclaw/openclaw/pull/10356)) expands voice capabilities
- CLI performance work (#69840) demonstrates attention to developer experience
- Sandbox security hardening (#69798) shows proactive security posture

---

## 8. Backlog Watch

### Stale High-Impact Issues Needing Maintainer Attention
| Issue | Age | 👍 | Why It Matters |
|---|---|---|---|
| [#75 Linux/Windows Apps](https://github.com/openclaw/openclaw/issues/75) | ~4 months | 71 | Top community request, no roadmap signal |
| [#29053 MCP Client](https://github.com/openclaw/openclaw/issues/29053) | ~2 months | 19 | Industry standardizing on MCP; OpenClaw risks falling behind |
| [#17890 macOS PATH detection](https://github.com/openclaw/openclaw/issues/17890) | ~2 months | 0 | Homebrew binaries invisible to macOS app — affects all Apple Silicon users |
| [#29387 Bootstrap files ignored in agentDir](https://github.com/openclaw/openclaw/issues/29387) | ~2 months | 4 | Per-agent configuration silently broken |
| [#37591 Missing system.run.prepare on macOS](https://github.com/openclaw/openclaw/issues/37591) | ~2 months | 5 | Blocks remote command execution on macOS/iOS nodes |
| [#26422 message_sending hook dead code](https://github.com/openclaw/openclaw/issues/26422) | ~2 months | 1 | Plugin API advertises a hook that never fires |
| [#17101 Telegram voice transcription](https://github.com/openclaw/openclaw/issues/17101) | ~2 months | 0 | Basic media handling broken on major channel |
| [#40256 System prompt prefix caching](https://github.com/openclaw/openclaw/issues/40256) | ~2 months | 0 | 8-16x slowdown for local model users |

### Summary
OpenClaw is a high-velocity project with strong community engagement but faces growing stability challenges as its provider and channel surface area expands. The maintainers should prioritize: (1) provider integration regression testing, (2) resolving the 307 open issues with targeted bug-fix sprints, and (3) providing roadmap clarity on Linux/Windows apps and MCP support to manage community expectations.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report analyzing the current state of the open-source personal AI assistant and agent ecosystem.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is experiencing a phase of rapid, volatile expansion as projects transition from single-channel chatbots into complex, multi-tenant orchestration platforms. Current development across the board is dominated by the struggle to maintain stability while integrating diverse LLM providers and expanding channel support (Telegram, Slack, Discord, WeChat). Projects are actively shifting toward enterprise-grade requirements, introducing advanced sandboxing, stateful memory management, and cost-tracking features. Overall project health remains highly active but heavily strained, with provider API regressions and UI/memory state desynchronization acting as the primary bottlenecks across the ecosystem.

### 2. Activity Comparison
Projects are ranked by volume of daily Issue and PR updates. A project's "Health Score" reflects issue resolution velocity, maintainer responsiveness, and release stability.

| Project | Issues Updated | Pull Requests Updated | Release Status | Health Score & Status |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | `v2026.4.20` (Active) | 🟡 **Moderate** (High velocity, but strained triage & provider regressions) |
| **CoPaw** | 50 | 40 | `v1.1.3-beta.2` (Beta) | 🟢 **Healthy** (Excellent resolution rate and structured sprints) |
| **IronClaw** | 50 | 50 | `v0.26.0` (Active) | 🟡 **Moderate** (Massive architectural pushes causing P1 bug spikes) |
| **LobsterAI** | 2 active | 13 merged | `v2026.4.21` (Stable) | 🟢 **Healthy** (Highly focused stabilization and release integration) |
| **NanoBot** | 61 resolved | 25 closed | `v0.1.5.post2` (Active) | 🟢 **Healthy** (Aggressive, high-quality merging) |
| **NanoClaw** | 4 new | 25 updated | Pre-release | 🟡 **Moderate** (High open PR ratio, critical routing bugs open) |
| **Moltis** | 6 closed | 3 merged | `20260421.05` (Active) | 🟢 **Healthy** (Proactive security patching) |
| **ZeptoClaw** | 1 new | 4 updated | Stale | 🟠 **Stale** (Automated dependency updates only) |
| **EasyClaw** | 0 | 0 | `v1.8.2` (Patch) | 🟠 **Low** (Maintainers bypassing PRs; community dormant) |
| **TinyClaw** | 0 | 0 | None | ⚪ **Dormant** |

*Note: PicoClaw data was unavailable for analysis.*

### 3. OpenClaw's Position
*   **Advantages vs. Peers:** OpenClaw is undeniably the ecosystem's core reference implementation, boasting the highest raw volume of community engagement (hundreds of daily updates) and the broadest surface area for integrations. It serves as the foundational engine for derivative projects like LobsterAI.
*   **Technical Approach Differences:** Unlike peers that often rely on heavy abstraction layers (like NanoBot's controversial dependency on `litellm`), OpenClaw attempts direct but wide-ranging provider integrations. However, this sprawling approach has resulted in acute fragility, where upgrades routinely break provider payloads (Azure, OpenAI Codex, Gemini) — a pain point less prevalent in more tightly scoped projects.
*   **Community Size Comparison:** OpenClaw's community dwarfs others in size, sustaining a continuous pipeline of external feature PRs (e.g., Typecast TTS, CLI performance fixes). Yet, its 307 open issues and 323 open PRs indicate a triage bottleneck that smaller, more agile communities like Moltis and NanoBot are currently managing much more effectively.

### 4. Shared Technical Focus Areas
Several unified requirements are emerging across the ecosystem:
*   **Rigid Sandbox & OS-Level Security:** Users are pushing AI agents into production, demanding execution isolation. Moltis is implementing Landlock FS isolation and strict allowlists for bins; OpenClaw is pinning sandbox file reads and addressing exec-approval bypasses.
*   **Memory & Context Management:** Flat file memory and simple context windows are failing power users. CoPaw users are hitting context walls requiring "compaction visibility," NanoBot users report persistent sessions "blowing up," and CoPaw is aligning with AgentScope 2.0 for robust long-term memory interfaces.
*   **Multi-Channel Routing Resilience:** As agents scale to multi-platform deployments, routing is breaking. NanoClaw is experiencing critical cross-channel leakage (WeChat replies leaking to Telegram), while Moltis, OpenClaw, and IronClaw are all actively patching silent media drops and fragmented threading in Telegram and Discord integrations.
*   **Cost Tracking & Observability:** Agents are getting expensive to run. IronClaw introduced per-project cost tracking and sandboxing; NanoBot users are requesting cheaper models for cron/heartbeat tasks and Langfuse integration for monitoring.

### 5. Differentiation Analysis
*   **Decentralized vs. Corporate Infrastructure:** NanoClaw is uniquely carving out a Web3/Decentralized niche, building out Nostr protocols, NIP-17 DMs, and Lightning Wallet integrations with kernel-level keyring isolation. Conversely, LobsterAI is heavily focused on corporate/enterprise synchronous communication (Feishu, DingTalk, Email).
*   **Target Users:** CoPaw and NanoBot cater heavily to technical power users wanting persistent, cross-platform personal assistants, evidenced by heavy focus on local models (vLLM, Ollama) and specific local OS environments (Colima, WSL). IronClaw is targeting enterprise multi-tenant workspaces, evidenced by its "Engine V2" focus on project missions, database-backed workspaces, and worker lifecycle management.
*   **Architecture:** IronClaw is heavily invested in UI/Backend state convergence (moving from event-stream UI to authoritative backend state), whereas OpenClaw and NanoBot remain heavily reliant on CLI/Gateway interactions, treating Web UIs as secondary control planes.

### 6. Community Momentum & Maturity
*   **Tier 1: Rapid Iteration & Scaling (OpenClaw, IronClaw, CoPaw):** These projects have massive momentum and are closing dozens of issues daily. However, they are currently paying a "complexity tax," resulting in P1 regressions and integration bugs.
*   **Tier 2: Fast & Disciplined (NanoBot, LobsterAI, Moltis):** These projects exhibit high maturity. They are merging large batches of PRs methodically, focusing on hardening existing features rather than recklessly expanding surface area. Moltis stands out for its rapid response to zero-day execution bypasses.
*   **Tier 3: Niche / Niche Scaling (NanoClaw):** Highly active but currently chaotic, with a high ratio of open PRs and fundamental routing bugs indicating an architectural work-in-progress.
*   **Tier 4: Maintenance / Stalled (EasyClaw, ZeptoClaw, TinyClaw):** Minimal to no community engagement. EasyClaw is surviving via direct maintainer patches without formal PRs, while ZeptoClaw is entirely reliant on automated dependency bots.

### 7. Trend Signals
1.  **The 'Proxy Dependency' Backlash is Real:** NanoBot's community backlash over the `litellm` malware quarantine highlights a major ecosystem risk. Developers are demanding native LLM SDK implementations over unreliable middleware to ensure security and token efficiency (OpenAI prompt caching).
2.  **Docker/Container Friction in AI:** The assumption that "Docker solves everything" is breaking down for AI agents. NanoClaw users are hitting silent failures with Colima and WSL permissions, and Moltis users are actively requesting container-less deployments. Developers need to ensure agents can run lightweight on bare metal with OS-level sandboxing (e.g., Landlock).
3.  **Context Window Optimization is the Next Bottleneck:** As agents run autonomously for longer periods, system prompt bloat and memory compaction are becoming critical UX problems. Projects that introduce transparent "context recovery" (CoPaw) and prompt-prefix caching (OpenClaw) will gain a distinct performance advantage.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-22

## 1. Today's Overview
NanoBot is experiencing a highly active and healthy development phase, driven by the recent launch of version `v0.1.5.post2`. The project saw an exceptional volume of merged contributions in the last 24 hours, with 25 PRs closed and 61 issues resolved, indicating a strong, focused maintainer presence. Open issues and PRs (9 and 15 respectively) show that the community is actively engaging with edge cases, proposing new channels, and hardening existing features. Much of today's activity revolves around extending tool capabilities, tightening security, and stabilizing provider integrations.

## 2. Releases
**v0.1.5.post2**
*   **Overview:** A massive release merging 67 PRs and welcoming 12 new contributors. The theme of this release is "reach and polish."
*   **Key Changes:** Expanded the supported environment matrix to include **Windows** and **Python 3.14**. The `read_file` tool received major upgrades, and overall agent stability was improved.
*   **Migration Notes:** No explicit breaking changes mentioned, but given the expansion in OS/Python support and updates to session/prompt handling, users upgrading should ensure their local environments meet the new Python 3.14 compatibility standards if upgrading the runtime.

## 3. Project Progress
The maintainers are aggressively merging quality-of-life improvements, bug fixes, and new features. Key merged PRs today include:
*   **Tool Enhancements:** `read_file` now supports Office documents (DOCX, XLSX, PPTX) via [PR #3336](https://github.com/HKUDS/nanobot/pull/3336).
*   **UI & Channel Polish:** Telegram markdown rendering was significantly improved for modern LLM outputs [PR #3355](https://github.com/HKUDS/nanobot/pull/3355), and a bug where slash commands were mistakenly injected as raw user messages was fixed in [PR #3359](https://github.com/HKUDS/nanobot/pull/3359).
*   **LLM Provider Support:** Fixed MiniMax reasoning support [PR #3363](https://github.com/HKUDS/nanobot/pull/3363) and added retry logic for ZhiPu's non-standard rate-limit error codes [PR #3356](https://github.com/HKUDS/nanobot/pull/3356).
*   **Operations & Analytics:** A new analytics hook for PostHog was integrated [PR #3365](https://github.com/HKUDS/nanobot/pull/3365).

## 4. Community Hot Topics
*   **Prompt and Architecture Integrity:** The most discussed open issue is [Issue #2463](https://github.com/HKUDS/nanobot/issues/2463) (10 comments). Users are pointing out a fundamental architectural flaw where NanoBot does not preserve the exact prompt prefix sent to the model, which breaks OpenAI prompt caching. This indicates a strong user need for optimized LLM context handling and token efficiency.
*   **Dependency Controversy:** [Issue #161](https://github.com/HKUDS/nanobot/issues/161) (6 comments, 8 thumbs up) and [Issue #2443](https://github.com/HKUDS/nanobot/issues/2443) (6 comments) highlight ongoing community anxiety regarding the `litellm` dependency, especially following its quarantine on PyPI due to credential-stealing malware. The community strongly desires a shift to native SDKs.
*   **Session Management:** [Issue #2062](https://github.com/HKUDS/nanobot/issues/2062) (8 comments) highlights user struggles with unmanageable session histories in persistent channels like Feishu, where context windows get "blown up."

## 5. Bugs & Stability
*   **Critical - Shell Injection Vulnerability:** [PR #3366](https://github.com/HKUDS/nanobot/pull/3366) was opened to fix a severe shell injection flaw in the `ExecTool` where `path_append` could be manipulated to execute arbitrary commands. (Fix currently open).
*   **High - Data Loss on Filesystems:** [PR #3369](https://github.com/HKUDS/nanobot/pull/3369) addresses silent session data loss during graceful shutdown on systems with write-back caching (NFS, rclone). (Fix currently open).
*   **High - Command Injection into LLM Context:** [PR #3359](https://github.com/HKUDS/nanobot/pull/3359) closed a bug where non-priority slash commands (like `/new`) were fed directly into the LLM as user text, causing erratic agent behavior. (Fixed/Merged).
*   **Moderate - Provider Compatibility:** Multiple provider bugs continue to pop up, such as DeepSeek's missing `reasoning_content` ([Issue #244](https://github.com/HKUDS/nanobot/issues/244), [Issue #1225](https://github.com/HKUDS/nanobot/issues/1225)).

## 6. Feature Requests & Roadmap Signals
*   **Observability & Monitoring:** There is a clear trajectory toward enterprise-grade monitoring. [Issue #2189](https://github.com/HKUDS/nanobot/issues/2189) requests Langfuse integration, while [PR #3367](https://github.com/HKUDS/nanobot/pull/3367) exposes `latency_ms` for hooks.
*   **Cost Optimization:** Users want to minimize LLM costs. [Issue #3107](https://github.com/HKUDS/nanobot/issues/3107) requests configurable LLM provider fallbacks and timeouts, while [PR #3368](https://github.com/HKUDS/nanobot/pull/3368) introduces the ability to use a cheaper model specifically for heartbeat/cron tasks.
*   **Web Interface:** [PR #2871](https://github.com/HKUDS/nanobot/pull/2871) (Web Chat with SSE streaming) and [PR #3361](https://github.com/HKUDS/nanobot/pull/3361) (WebUI file attachments) signal an upcoming transition where NanoBot can be easily used via a dedicated local web dashboard.

## 7. User Feedback Summary
*   **Pain Points:** Users are frequently frustrated by `litellm` acting as an unreliable middleman for diverse providers (Anthropic, DeepSeek, vLLM, StepFun), as seen in frequent `BadRequestError` reports. Additionally, managing context limits over long-running sessions (especially via DingTalk and Feishu) is a major operational headache.
*   **Use Cases:** NanoBot is heavily utilized as a persistent, multi-channel personal assistant (Telegram, Feishu, Matrix, DingTalk). Users highly value its ability to manage emails, calendars, and local files autonomously.
*   **Satisfaction:** Overall sentiment is constructive. While users occasionally express frustration with sudden crashes (e.g., [Issue #1833](https://github.com/HKUDS/nanobot/issues/1833)), the rapid merge rate of community PRs and the massive scope of `v0.1.5.post2` show a highly engaged project moving quickly to address user needs.

## 8. Backlog Watch
*   **[Issue #2463](https://github.com/HKUDS/nanobot/issues/2463):** The prompt prefix caching issue needs core maintainer architectural input.
*   **[Issue #161](https://github.com/HKUDS/nanobot/issues/161):** The proposal to replace `litellm` with native SDKs is highly upvoted and remains a strategic decision the maintainers need to address explicitly.
*   **[PR #3303](https://github.com/HKUDS/nanobot/pull/3303):** An open PR introducing sub-agent orchestration (`spawn_status`, `spawn_cancel`). This is a complex addition that requires careful maintainer review.
*   **[Issue #3344](https://github.com/HKUDS/nanobot/issues/3344):** DingTalk file upload fragmentation. A relatively straightforward but high-impact integration fix is needed for users in enterprise DingTalk environments.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-22

## 1. Today's Overview
NanoClaw experienced exceptionally high activity over the last 24 hours, with 25 pull requests updated alongside 4 new bug reports. The project remains in a heavily iterative, pre-release phase as evidenced by the lack of recent tagged releases. Development focus is split between hardening the v2 container infrastructure (especially WSL and OneCLI gateway compatibility) and aggressively expanding channel integrations (Nostr, Telegram, Slack). Overall project health appears strong with active community submissions and maintainers rapidly merging stability fixes. The high ratio of open PRs (17 open vs. 8 closed) suggests a major integration push is underway.

## 2. Releases
No new releases were published today. 

## 3. Project Progress
Eight pull requests were merged/closed today, representing significant forward momentum in core stability and infrastructure:
*   **SDK Alignment:** [PR #1883](https://github.com/qwibitai/nanoclaw/pull/1883) bumped Claude Code to 2.1.116 and Agent SDK to ^0.2.116, fixing an IPC protocol mismatch.
*   **Session Stability:** [PR #1900](https://github.com/qwibitai/nanoclaw/pull/1900) fixed a critical bug where SDK session IDs were lost during mid-turn container exits and implemented long outbound message splitting for Discord.
*   **Gmail & OOO Loops:** [PR #1899](https://github.com/qwibitai/nanoclaw/pull/1899) hardened the Gmail draft blocklist and fixed a severe Out-of-Office loop that generated 435 drafts during an Anthropic credit outage.
*   **SDLC Infrastructure:** [PR #1897](https://github.com/qwibitai/nanoclaw/pull/1897) introduced `/build-it` pipeline infrastructure, adding a Unix domain socket health server and deploy scripts.
*   **Persona & Integrations:** [PR #1895](https://github.com/qwibitai/nanoclaw/pull/1895) fixed the AI persona's self-description capabilities, while [PR #1894](https://github.com/qwibitai/nanoclaw/pull/1894) added Slack posting capabilities.
*   **Upstream Sync:** [PR #1898](https://github.com/qwibitai/nanoclaw/pull/1898) synced the project with the upstream main branch.

## 4. Community Hot Topics
The most actively discussed items reveal friction around multi-channel routing and external AI tool proxies:
*   **[Issue #1901](https://github.com/qwibitai/nanoclaw/issues/1901) (1 comment):** Incomplete WeChat onboarding in v2. Users report that successful QR logins still require manual backend wiring to agent groups. This highlights a need for a fully automated, user-friendly onboarding flow.
*   **Ollama MCP Failures ([Issue #1906](https://github.com/qwibitai/nanoclaw/issues/1906)):** Failures occurring when Ollama is used behind the OneCLI gateway alongside other providers. This indicates a growing user demand for complex, multi-provider AI setups running securely behind corporate proxies.

## 5. Bugs & Stability
Several high-to-critical bugs were reported today, many lacking immediate fix PRs:
1.  **Cross-Channel Leakage:** [Issue #1902](https://github.com/qwibitai/nanoclaw/issues/1902) - *High Severity*. WeChat replies leak to Telegram when sharing an agent group. A fundamental routing flaw in v2 multi-channel architecture (No fix PR yet).
2.  **Telegram Edit Drops:** [Issue #1896](https://github.com/qwibitai/nanoclaw/issues/1896) - *Medium Severity*. Edited messages are silently dropped by the router with no user feedback (No fix PR yet).
3.  **Container Permissions:** [PR #1885](https://github.com/qwibitai/nanoclaw/pull/1885) - *High Severity (Fix Open)*. Mapped host UIDs cause silent Claude Code failures because `/home/node` is not writable.
4.  **Colima Cert Issue:** [PR #1886](https://github.com/qwibitai/nanoclaw/pull/1886) - *High Severity (Fix Open)*. OneCLI SDK hardcodes CA certs to local temp folders invisible to Colima VMs.
5.  **Silent Data Loss:** [PR #1889](https://github.com/qwibitai/nanoclaw/pull/1889) - *High Severity (Fix Open)*. The cleanup script assumes empty sessions on `sqlite3` failure.
6.  **Telemetry & OneCLI bugs:** [PR #1887](https://github.com/qwibitai/nanoclaw/pull/1887) (missing telemetry opt-out) and [PR #1888](https://github.com/qwibitai/nanoclaw/pull/1888) (missing API key thread to host client).

## 6. Feature Requests & Roadmap Signals
A massive cluster of open PRs points to a strategic roadmap heavily focused on decentralized protocols, secure key management, and advanced media handling:
*   **Nostr Ecosystem & Lightning:** A robust Bitcoin/Nostr stack is being built out by contributor `jorgenclaw`. This includes [PR #1891](https://github.com/qwibitai/nanoclaw/pull/1891) (NWC Lightning Wallet integration), [PR #1892](https://github.com/qwibitai/nanoclaw/pull/1892) (Nostr signing daemon with kernel keyring isolation), [PR #1882](https://github.com/qwibitai/nanoclaw/pull/1882) (NIP-17 DMs), and a context early warning system ([PR #1890](https://github.com/qwibitai/nanoclaw/pull/1890)).
*   **Rich Media Skills:** [PR #1893](https://github.com/qwibitai/nanoclaw/pull/1893) adds AWS Lambda-backed Remotion programmatic video generation.
*   **Telegram Attachments:** [PR #1905](https://github.com/qwibitai/nanoclaw/pull/1905) introduces downloading photos/documents for Telegram.
*   **WSL Support:** [PR #1904](https://github.com/qwibitai/nanoclaw/pull/1904) and [PR #1903](https://github.com/qwibitai/nanoclaw/pull/1903) significantly improve the setup experience for Windows/WSP users without systemd. *Prediction: The next version will likely formalize WSL setup support and merge the Nostr/Lightning skill suite.*

## 7. User Feedback Summary
Real user friction is currently centered around deployment environments and multi-tenant chat routing. 
*   **Frustration with Docker/WSL:** Users running Docker via WSL or Colima are hitting invisible walls—setup appears to succeed, but background services fail to start ([PR #1904](https://github.com/qwibitai/nanoclaw/pull/1904), [PR #1886](https://github.com/qwibitai/nanoclaw/pull/1886)). 
*   **Agent Unresponsiveness:** Users expect 1-click integrations but are encountering scenarios where the AI silently drops operations (Telegram edits in [Issue #1896](https://github.com/qwibitai/nanoclaw/issues/1896), session drops in [PR #1900](https://github.com/qwibitai/nanoclaw/pull/1900)).
*   **Privacy/Security Mindset:** The community values security, as seen in the proactive implementation of nsec kernel keyring isolation and telemetry opt-out fixes ([PR #1887](https://github.com/qwibitai/nanoclaw/pull/1887)).

## 8. Backlog Watch
*   **Multi-channel routing:** [Issue #1902](https://github.com/qwibitai/nanoclaw/issues/1902) (cross-channel reply leakage) is a critical architectural issue that currently lacks a corresponding fix PR and requires urgent maintainer attention.
*   **OneCLI Proxying:** [Issue #1906](https://github.com/qwibitai/nanoclaw/issues/1906) (Ollama MCP stdio server failures) and [PR #1888](https://github.com/qwibitai/nanoclaw/pull/1888) (API key threading) indicate that the OneCLI gateway integration needs architectural review.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-22

## 1. Today's Overview
IronClaw is experiencing exceptionally high development activity as it pushes toward its **Engine V2 default flip**, a major architectural milestone. With 50 issues and 50 pull requests updated in the last 24 hours (alongside a new minor version release), the core team and contributors are heavily focused on infrastructure, state convergence, and bug bashes. The majority of open work items are directly tied to hardening the agent orchestrator, refining the web gateway UX, and stabilizing tools/extensions. Overall project health is highly active but temporarily strained by a large volume of QA-reported bugs from recent pre-release testing.

## 2. Releases
**ironclaw-v0.26.0** (Released 2026-04-21)
*   **Added:** Per-project sandboxing with mission lifecycle and cost tracking for `engine-v2` ([#2211](https://github.com/nearai/ironclaw/pull/2211), [#2660](https://github.com/nearai/ironclaw/pull/2660)). This allows isolated execution environments and precise accounting for agent tasks.
*   **Added:** Hot-reload provider chain from settings for `llm` ([#2673](https://github.com/nearai/ironclaw/pull/2673)).
*   *Note: The release notes appear truncated in the provided data, but the highlighted features point to significant enhancements in multi-tenant/enterprise cost tracking and LLM provider resilience.*

## 3. Project Progress
Progress today is heavily dominated by the architectural preparation for making Engine V2 the default. Several massive foundational PRs were opened or updated:
*   **Engine V2 Flipping Plumber:** A series of PRs by core contributors laid the groundwork for the V2 default flip, including sharing per-call cost formulas ([PR #2803](https://github.com/nearai/ironclaw/pull/2803)), aliasing legacy job tools to mission tools ([PR #2802](https://github.com/nearai/ironclaw/pull/2802)), and adding reliability recording and scaffolding for acceptance tests ([PR #2804](https://github.com/nearai/ironclaw/pull/2804), [PR #2806](https://github.com/nearai/ironclaw/pull/2806)).
*   **Gateway State Convergence:** Core work began to eliminate UI/backend state drift ([PR #2797](https://github.com/nearai/ironclaw/pull/2797)) by mapping dropped engine events to AppEvents.
*   **Tooling Fixes:** A highly necessary fix was introduced to show V2 capabilities accurately in the tool registry ([PR #2794](https://github.com/nearai/ironclaw/pull/2794)), resolving a disconnect where tools advertised in the system prompt weren't found by the `tool_info` command.
*   **Worker Lifecycle:** Introduction of a `finish_job` explicit completion path ([PR #2807](https://github.com/nearai/ironclaw/pull/2807)) to replace unreliable plain-text terminal signals in autonomous execution.

## 4. Community Hot Topics
*   **Web UI Thread State Drift:** The most actively discussed issue today is a UI state desync ([Issue #2285](https://github.com/nearai/ironclaw/issues/2285) - 7 comments). The root cause—UI relying on event streams instead of reconciling with authoritative backend state—has spawned an epic to fix the systemic issue.
*   **Agent Freezes and Unresponsiveness:** Users continue to report issues with the agent hanging during tool setups, such as Notion ([Issue #2087](https://github.com/nearai/ironclaw/issues/2087) - 4 comments) and general orchestrator timeouts exceeding 300s limits ([Issue #2540](https://github.com/nearai/ironclaw/issues/2540)).
*   **TEE WASM Credential Injection:** A deeper architectural discussion is ongoing regarding WASM credential injection silently failing on the hosted TEE ([Issue #1537](https://github.com/nearai/ironclaw/issues/1537) - 4 comments). 
*   **Telegram Conversation Threading:** QA and users flagged that Telegram integration currently fragments conversations instead of unifying them in a single thread ([Issue #2731](https://github.com/nearai/ironclaw/issues/2731) - 3 comments).

## 5. Bugs & Stability
Recent bug bashes have uncovered several P1/P2 regressions, mostly concentrated in the new Engine V2 and Web UI interfaces:
1.  **[P1] Stop Command Failures:** Active missions cannot be stopped via chat commands ([Issue #2808](https://github.com/nearai/ironclaw/issues/2808)). *Status: Fix actively being developed in PR #2814 to enforce tool use for halt commands.*
2.  **[P1] Incorrect Tool Routing:** Agent suggests external APIs instead of using internal tools ([Issue #2732](https://github.com/nearai/ironclaw/issues/2732)).
3.  **[P1] Mission Dashboard Desync:** Active missions are not reflected in the completed missions count ([Issue #2585](https://github.com/nearai/ironclaw/issues/2585) - 3 comments). 
4.  **[P2] Internal Reasoning Leak:** The browser chat currently exposes internal LLM reasoning and tool-call narratives to the user ([Issue #2812/PR #2812](https://github.com/nearai/ironclaw/pull/2812)). *Status: Fix PR opened and pending merge.*
5.  **[P2] Project/Mission Confusion:** Asking the agent to create a "project" results in a "mission" creation ([Issue #2809](https://github.com/nearai/ironclaw/issues/2809)).

## 6. Feature Requests & Roadmap Signals
Analyzing the commit logs and issue trackers reveals strong directional signals for the next few releases:
*   **Workspace/Multi-tenant Support:** The merging of database-backed workspace entities and cross-workspace sharing ([PR #2548](https://github.com/nearai/ironclaw/pull/2548)) indicates enterprise-grade scoping is imminent.
*   **In-App Error Reporting:** A proposal to add a "Report Issue" UI that automatically captures sanitized chat state and files a GitHub issue ([Issue #2791](https://github.com/nearai/ironclaw/issues/2791)) is likely to be prioritized given the current heavy QA reliance.
*   **Multi-Channel Unification:** Significant ongoing work on Matrix support ([PR #2019](https://github.com/nearai/ironclaw/pull/2019)) and fixing Telegram threading show a push toward making IronClaw a truly channel-agnostic assistant.

## 7. User Feedback Summary
Users are excited about the rapid deployment of new features but are experiencing friction with deployment configurations and legacy environment quirks. 
*   **Deployment Pain Points:** Users deploying via the official Railway one-click template are struggling with `LLM_*` environment variables not being recognized at runtime, locking them into default models ([Issue #1680](https://github.com/nearai/ironclaw/issues/1680)). Reusing existing databases during setup also triggers migration failures, though a fix is underway ([PR #2810](https://github.com/nearai/ironclaw/pull/2810)).
*   **Skill Size Limitations:** Advanced users are hitting arbitrary limits on custom skill sizes (500KB+), with users noting "no similar project do this" ([Issue #2636](https://github.com/nearai/ironclaw/issues/2636)).

## 8. Backlog Watch
*   **GCP/Google Verification Roadblock:** The request to get IronClaw's Google OAuth app officially verified to remove the "unverified app" warning for non-@near.ai users has been lingering since early March ([Issue #773](https://github.com/nearai/ironclaw/issues/773)). This is a major blocker for public adoption of Gmail/Drive integrations and needs maintainer attention.
*   **Tool/Auth Live Canary Unification:** A massive PR consolidating auth flows ([PR #2367](https://github.com/nearai/ironclaw/pull/2367)) has been open since April 12th and requires final review to ease CI bottlenecks.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-22

## 1. Today's Overview
LobsterAI is experiencing a highly active and healthy development phase, driven primarily by a concentrated effort from core maintainers to stabilize recent features. Over the last 24 hours, the project merged a significant batch of 13 pull requests while tracking 2 new active issues. Activity is heavily focused on hardening the OpenClaw engine integration, expanding IM channel capabilities (specifically email and DingTalk), and resolving cross-platform UI/UX bugs. The high merge-to-open ratio indicates a structured release stabilization sprint, successfully culminating in a new production release.

## 2. Releases
**[v2026.4.21](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.21)**
*   **Highlights**: This version focuses on core system upgrades and backend stability.
*   **Changes**:
    *   `feat(openclaw)`: Upgraded the OpenClaw engine to v2026.4.14, introducing startup optimizations for faster load times.
    *   `fix(cowork)`: Suppressed heartbeat prompt history leaks, which previously risked exposing unnecessary context data during multi-agent collaboration sessions.

## 3. Project Progress
A massive 13 PRs were merged today, signaling rapid progression across multiple subsystems:
*   **Release Integration**: [PR #1782](https://github.com/netease-youdao/LobsterAI/pull/1782) successfully merged the `release/2026.04.18` branch into `main`, packaging the recent features into a stable build.
*   **New Communication Channels**: [PR #1719](https://github.com/netease-youdao/LobsterAI/pull/1719) introduced the "Claw Email" channel, enabling AI agents to communicate via email.
*   **Enhanced Diagnostics**: [PR #1775](https://github.com/netease-youdao/LobsterAI/pull/1775) integrated OpenClaw gateway logs into the standard "Export Logs" ZIP, drastically improving debuggability for the core engine.
*   **Windows Installer Overhaul**: [PR #1774](https://github.com/netease-youdao/LobsterAI/pull/1774) implemented an AppData backup scheme to ensure user-created "skills" aren't deleted during Windows app upgrades.
*   **IM Stability**: Multiple fixes were applied to IM synchronization algorithms ([PR #1768](https://github.com/netease-youdao/LobsterAI/pull/1768), [PR #1778](https://github.com/netease-youdao/LobsterAI/pull/1778)) and NIM channel configurations ([PR #1771](https://github.com/netease-youdao/LobsterAI/pull/1771)).

## 4. Community Hot Topics
*   **Broken Diff Viewer post-update** - [Issue #1783](https://github.com/netease-youdao/LobsterAI/issues/1783): A community member provided a deep-dive analysis identifying a regression in the `extractDiffFromToolInput` frontend function following the latest update. The bug prevents the UI from rendering `edit` diffs correctly.
*   **Cron Expression UI Enhancement** - [PR #605](https://github.com/netease-youdao/LobsterAI/pull/605): A community-submitted PR aiming to add a "next 5 execution times" preview card to the cron-based scheduled tasks UI. This highlights a strong user desire for more intuitive task-scheduling interfaces.

## 5. Bugs & Stability
Today's development heavily targeted bug squashing, ranked by severity:
1.  **App Startup Crash (Critical)**: [PR #1781](https://github.com/netease-youdao/LobsterAI/pull/1781) fixed a critical DingTalk startup crash caused by an OpenClaw module loader bug triggered by third-party `tsdown` pre-compilation. *Fix: Merged (Downgraded connector).*
2.  **Agent Memory/Context Leak (High)**: Mentioned in the release notes and addressed in [PR #1780](https://github.com/netease-youdao/LobsterAI/pull/1780), where image file paths triggered sanitization routines that dropped base64 images.
3.  **Frontend Diff Regression (Medium)**: [Issue #1783](https://github.com/netease-youdao/LobsterAI/issues/1783) reports the edit-diff functionality is completely broken. *Fix: Pending maintainer investigation.*
4.  **Test Suite Failures (Low)**: [PR #1772](https://github.com/netease-youdao/LobsterAI/pull/1772) patched missing mock methods in the `openclawConfigSync` runtime tests that were causing `TypeError` crashes in the CI pipeline.

## 6. Feature Requests & Roadmap Signals
*   **Lobster Email (龙虾邮箱) Integration**: Fully merged in [PR #1719](https://github.com/netease-youdao/LobsterAI/pull/1719). This signals a strategic expansion beyond standard instant messaging (NIM, DingTalk) into asynchronous, email-based AI agent workflows.
*   **Scheduled Task UX**: [PR #605](https://github.com/netease-youdao/LobsterAI/pull/605) suggests future UI improvements will focus on developer experience (DX) for autonomous agent scheduling.
*   **Dependency Modernization**: Automated bots are actively pushing major upgrades ([PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) bumps Electron to v41; [PR #1766](https://github.com/netease-youdao/LobsterAI/pull/1766) bumps Vite to v8). These are likely being staged for the next major release cycle.

## 7. User Feedback Summary
Users are highly technical but are experiencing friction with recent updates. The deep technical analysis provided in [Issue #1783](https://github.com/netease-youdao/LobsterAI/issues/1783) shows an engaged developer user base that actively inspects frontend code (e.g., `app.asar`). Windows users specifically expressed pain points regarding application upgrades deleting their custom skills, which was directly addressed in today's [PR #1774](https://github.com/netease-youdao/LobsterAI/pull/1774). Overall, users appreciate the expanding IM capabilities but desire smoother upgrades and fewer frontend UI regressions.

## 8. Backlog Watch
*   **Stale Bug Reports**: [Issue #9](https://github.com/netease-youdao/LobsterAI/issues/9) remains open. It details a Windows Git-bash PATH injection issue dating back to February 2026. It received a recent ping but lacks a definitive fix or maintainer response.
*   **Dependency Bottlenecks**: Multiple Dependabot PRs (e.g., [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) and [PR #1766](https://github.com/netease-youdao/LobsterAI/pull/1766)) have been open for days/weeks. Maintainers need to review these to prevent falling behind on security and performance patches.
*   **Stale Feature PR**: [PR #605](https://github.com/netease-youdao/LobsterAI/pull/605) (Cron execution preview) has been awaiting review since March 21st. Core team alignment is needed to either accept, request changes, or close this community contribution.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-04-22

## 1. Today's Overview
The Moltis project is experiencing a highly active and focused development cycle, heavily concentrated on hardening security boundaries, improving telemetry, and expanding platform integrations. Over the past 24 hours, maintainers closed 6 issues and merged 3 pull requests, demonstrating strong responsiveness to community-reported bugs. The bulk of today's activity centers around securing the agent's execution sandbox and fixing media handling bugs across various chat platform integrations. With a new release deployed yesterday and continuous security patching, the project exhibits robust health and proactive maintenance.

## 2. Releases
*   **20260421.05**: Released on April 21, 2026. Based on the rapid bug-fix cycle occurring immediately around this release, it likely includes patches for provider compatibility and earlier bug fixes. 

## 3. Project Progress
Three pull requests were merged/closed today, directly addressing critical stability and security concerns:
*   **[PR #822](https://github.com/moltis-org/moltis/pull/822)**: Patched a critical execution approval bypass where environment variables (`LD_PRELOAD`, `PATH`) could be used to bypass safe bin execution.
*   **[PR #819](https://github.com/moltis-org/moltis/pull/819)**: Fixed an issue where Telegram silently dropped files (like `.md` or `.yaml`) by implementing fallback MIME detection from file extensions.
*   **[PR #820](https://github.com/moltis-org/moltis/pull/820)**: Added diagnostic logging for browser container readiness failures, drastically improving debuggability for environments where headless browser containers fail to start (e.g., OOM-killed).
*   *Note*: A massive automated documentation audit ([PR #783](https://github.com/moltis-org/moltis/pull/783)) remains open and is actively being updated.

## 4. Community Hot Topics
*   **Prompt Injection Scaling**: Opened by `xzavrel`, [Issue #821](https://github.com/moltis-org/moltis/issues/821) (+1 👍, 2 comments) highlights a growing architectural pain point: with 101 bundled skills now shipping by default, the system prompt is becoming bloated on every turn. The community is actively discussing a `disable-model-invocation` flag to prevent unnecessary token usage.
*   **Google Model Compatibility**: A long-standing bug ([Issue #375](https://github.com/moltis-org/moltis/issues/375)) regarding missing `thought_signature` in function calls when using Google models was finally resolved. It accrued 3 👍 reactions, indicating significant relief for users relying on Google's AI ecosystem.

## 5. Bugs & Stability
Today's bug reports were quickly triaged, with several immediately addressed by merged PRs:
1.  **[HIGH] Exec Approval Bypass** ([Issue #814](https://github.com/moltis-org/moltis/issues/814)): Users could bypass command approvals using inline env-var prefixes. *Fixed by [PR #822](https://github.com/moltis-org/moltis/pull/822).*
2.  **[MEDIUM] Excessive Disk Logging** ([Issue #823](https://github.com/moltis-org/moltis/issues/823)): Debug mode rapidly fills disks with "broadcasting event" messages. *Currently open.*
3.  **[MEDIUM] Discord Voice Messages** ([Issue #817](https://github.com/moltis-org/moltis/issues/817)): Voice messages on Discord are silently dropped. Needs diagnostic logging. *Currently open.*
4.  **[LOW] Telegram File Drops** ([Issue #813](https://github.com/moltis-org/moltis/issues/813)): Markdown files sent via Telegram were dropped. *Fixed by [PR #819](https://github.com/moltis-org/moltis/pull/819).*
5.  **[LOW] Browser Container Timeouts** ([Issue #786](https://github.com/moltis-org/moltis/issues/786)): Browser containers failing to become ready within 60s. *Addressed via better logging in [PR #820](https://github.com/moltis-org/moltis/pull/820).*

## 6. Feature Requests & Roadmap Signals
User `dmitriikeler` opened a rapid-fire salvo of highly detailed feature requests focused entirely on **container-less deployments and security hardening**. This signals a strong user desire to run Moltis in lightweight environments (like Fly.io) without relying on Docker for sandboxing:
*   **[Issue #818](https://github.com/moltis-org/moltis/issues/818)**: Add optional Landlock FS isolation to restricted-host sandbox backend.
*   **[Issue #816](https://github.com/moltis-org/moltis/issues/816)**: Implement argv-based path deny (`tools.exec.fs_deny_paths`) for non-container environments.
*   **[Issue #815](https://github.com/moltis-org/moltis/issues/815)**: Introduce an opt-in strict allowlist mode that gates `SAFE_BINS`.
*   **Multimodal Expansion**: [Issue #563](https://github.com/moltis-org/moltis/issues/563) (now closed) confirms upcoming functionality allowing the bot to natively ingest and process PDFs.

## 7. User Feedback Summary
Users are pushing Moltis into advanced, multi-platform production environments, which is exposing two main friction points. First, **Platform Integration Fragility**: as seen in Telegram ([#813](https://github.com/moltis-org/moltis/issues/813)) and Discord ([#817](https://github.com/moltis-org/moltis/issues/817)), proprietary platform quirks cause silent media failures that frustrate users. Second, **Security Architectures**: users operating Moltis as a public-facing agent feel the need for OS-level sandboxing (Landlock) rather than just container-based isolation. Despite these advanced use cases causing friction, the rapid turnaround time on fixes shows a highly satisfactory maintainer response rate.

## 8. Backlog Watch
*   **Prompt Optimization**: [Issue #821](https://github.com/moltis-org/moltis/issues/821) suggests that the default bundled skill count has grown massively (101 skills). If not addressed soon, this could lead to severe context-window and token-cost inefficiencies for users.
*   **Debug Logging Noise**: [Issue #823](https://github.com/moltis-org/moltis/issues/823) regarding "broadcasting event" filling disks in debug mode needs maintainer attention to prevent operational issues for self-hosters.
*   **Documentation Overhaul**: [PR #783](https://github.com/moltis-org/moltis/pull/783) is a massive automated documentation update (44 docs audited). Maintainers should prioritize reviewing and merging this to prevent documentation rot as the codebase rapidly evolves.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-22

## 1. Today's Overview
CoPaw (also distributed as QwenPaw) demonstrates highly robust open-source community health today, sustaining significant momentum with **50 issues updated** and **40 pull requests updated** in the last 24 hours. The maintainers successfully shipped one new release (`v1.1.3-beta.2`) while maintaining an impressive issue resolution rate, closing 29 issues against 21 newly active ones. Pull request activity is vibrant, with a balanced split between 22 open PRs (many introducing substantial new features) and 18 merged/closed PRs. The project is currently in an active feature-freeze and stabilization phase for the v1.1.3 release, with heavy community focus on memory management, UI/UX improvements, and multi-channel stability.

## 2. Releases
**Latest Release: [v1.1.3-beta.2](https://github.com/agentscope-ai/QwenPaw/pull/3620)**
*   **Changes:** Bumped the core version to `1.1.3b2` and upgraded the underlying AgentScope framework to `1.0.19`.
*   **Bug Fixes:** Resolved a critical build issue for the macOS desktop client ([PR #3622](https://github.com/agentscope-ai/QwenPaw/pull/3622)).
*   **Migration Notes:** As this is a beta release, users on the stable v1.1.2 branch should test in a sandboxed environment. The upgrade to AgentScope 1.0.19 brings upstream memory interface changes that are being actively tested.

## 3. Project Progress
Today's merged/closed PRs reflect rapid iteration on both core stability and developer experience:
*   **Tool Guard Refactoring:** Merged a major architectural overhaul replacing the polling-based tool guard with an `asyncio.Future` blocking system and new REST API ([PR #3656](https://github.com/agentscope-ai/QwenPaw/pull/3656)).
*   **Channel Reliability:** Added per-agent channel health check and restart HTTP APIs (`GET /health`, `POST /restart`), enabling better runtime diagnosis without restarting the whole agent ([PR #3649](https://github.com/agentscope-ai/QwenPaw/pull/3649)).
*   **Plugin System:** Introduced auto module registration in the console plugin system to streamline extensions ([PR #3631](https://github.com/agentscope-ai/QwenPaw/pull/3631)).
*   **Windows File Handling:** Fixed `ValueError` crashes in `send_file_to_user` when file paths contained non-ASCII/Chinese characters ([PR #3625](https://github.com/agentscope-ai/QwenPaw/pull/3625)).
*   **Documentation & CI:** Added comprehensive Backup & Restore docs ([PR #3655](https://github.com/agentscope-ai/QwenPaw/pull/3655)) and merged 174 new unit tests covering hooks, memory, and utils ([PR #3630](https://github.com/agentscope-ai/QwenPaw/pull/3630)).

## 4. Community Hot Topics
The community is highly engaged, with several issues drawing heavy discussion:
*   **Open Tasks Board ([Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) - 59 comments):** The official "Help Wanted" board remains the most active hub. Contributors are actively claiming P0-P2 tasks, indicating a healthy, guided contributor pipeline.
*   **Working Directory Migration Bug ([Issue #3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) - 24 comments):** Windows users reported a severe issue where upgrading/renaming from `.copaw` to `.qwenpaw` resulted in data being written to the wrong directory. This caused widespread discussion regarding path handling on Windows.
*   **Context & Memory Management ([Issue #2289](https://github.com/agentscope-ai/QwenPaw/issues/2289) & [Issue #2047](https://github.com/agentscope-ai/QwenPaw/issues/2047) - 9 comments each):** Heavy daily users are increasingly hitting context walls. There are deep discussions on the inefficiency of flat-file `MEMORY.md` storage and the need for "Context Recovery" visibility after memory compaction occurs.
*   **UX Enhancement Requests ([Issue #2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) - 10 comments):** Users are requesting a one-click update button, a UI toggle for `/approve` (instead of text commands), and automatic model failover/routing when token limits are hit.

## 5. Bugs & Stability
Several high-severity bugs affecting daily operations were reported today:
1.  **Agent "Freezing" / No Response (Severity: High):** Multiple reports ([Issue #3640](https://github.com/agentscope-ai/QwenPaw/issues/3640), [Issue #3642](https://github.com/agentscope-ai/QwenPaw/issues/3642)) indicate that agents silently stop responding (particularly on DingTalk/Matrix channels) due to unhandled `TaskGroup` exceptions in MCP client loops or sync alive issues. The process stays up, but the agent effectively "dies."
2.  **API Provider Compatibility (Severity: High):** Requests to Anthropic-compatible APIs (e.g., Claude via Kimi, Volcengine Ark) frequently fail with 400 Bad Request errors due to `None` values in message formats ([Issue #3489](https://github.com/agentscope-ai/QwenPaw/issues/3489)) and file-sending tool schemas ([Issue #3613](https://github.com/agentscope-ai/QwenPaw/issues/3613)).
3.  **UI/Console Stalls (Severity: Medium):** Users report the Web UI frequently freezes and requires a hard refresh to display generated content or images ([Issue #3468](https://github.com/agentscope-ai/QwenPaw/issues/3468), [Issue #3421](https://github.com/agentscope-ai/QwenPaw/issues/3421)). 
4.  **File Download Duplication (Severity: Medium):** The download URL for files in the console duplicates the API path, breaking downloads ([Issue #3435](https://github.com/agentscope-ai/QwenPaw/issues/3435)).

## 6. Feature Requests & Roadmap Signals
Looking at open PRs and user demand, the following features are likely to land in the next RC or stable release:
*   **Memory Overhaul:** A massive refactor aligning with the AgentScope 2.0 long-term memory interface is currently under review ([PR #3548](https://github.com/agentscope-ai/QwenPaw/pull/3548)), directly addressing user complaints about `MEMORY.md`.
*   **Whisper-based Voice Input:** A first-time contributor PR aims to replace the browser's native Web Speech API with a custom Whisper transcription endpoint, solving browser compatibility issues ([PR #3574](https://github.com/agentscope-ai/QwenPaw/pull/3574)).
*   **Semantic Skill Routing:** To reduce token consumption, a new PR adds embedding-based retrieval to automatically filter and inject only the most relevant skills per query ([PR #3117](https://github.com/agentscope-ai/QwenPaw/pull/3117)).
*   **Dream Log Output:** A unique feature request to output logs during memory consolidation (simulating "dreaming") was proposed today ([Issue #3663](https://github.com/agentscope-ai/QwenPaw/issues/3663)), highlighting user interest in agent introspection.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by context loss and freezing during memory compaction. Model provider compatibility remains a hurdle—specifically regarding multimodal support and strict tool schemas for providers other than OpenAI/DeepSeek. Local LLM users running models via vLLM (e.g., Qwen3.6) are experiencing intermittent JSON parsing errors.
*   **Use Cases:** CoPaw is being heavily used as an always-on desktop assistant bridging multiple platforms (WeChat, DingTalk, Matrix). Users desire seamless continuity when switching from desktop to mobile.
*   **Satisfaction:** Overall satisfaction is high regarding the project's velocity. The community appreciates the rapid bug fixes (like the Windows path fix) and the maintainers' active engagement in structuring the roadmap via Open Tasks.

## 8. Backlog Watch
Maintainers should direct their attention to the following critical items:
*   **Model Integration & Configuration Errors:** [Issue #2613](https://github.com/agentscope-ai/QwenPaw/issues/2613) (12 comments) and [Issue #1881](https://github.com/agentscope-ai/QwenPaw/issues/1881) detail silent failures where the backend logs an AI response, but nothing is displayed to the user.
*   **Context Compaction Loops:** [Issue #3040](https://github.com/agentscope-ai/QwenPaw/issues/3040) reports that the UI gets stuck in an infinite "Context compaction started..." loop, completely locking the session.
*   **Agent Routing PR:** [PR #3550](https://github.com/agentscope-ai/QwenPaw/pull/3550) introduces scope-aware model semantics. Given the reports of models failing mid-task, this architectural PR requires prompt review and merging to stabilize multi-model environments.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-04-22

## 1. Today's Overview
ZeptoClaw is currently experiencing a moderate level of automated maintenance activity alongside emerging user-reported bugs. Over the past 24 hours, the repository saw four pull requests updated and one new bug report filed, indicating that while the CI/CD pipeline is actively being maintained, core feature development appears to be in a holding pattern. The lack of recent releases suggests the project is likely accumulating updates for a future patch or minor version release. The current project health is stable, though maintainer attention is required to address newly surfaced gateway configuration issues. 

## 2. Releases
No new releases were recorded today. The project has not published a new version recently, meaning users are currently running on the last stable release. 

## 3. Project Progress
Progress today was heavily focused on continuous integration (CI) and dependency management, entirely driven by automated bots. 
*   **Closed/Merged:** One dependency bump was closed: [PR #507](https://github.com/qhkm/zeptoclaw/pull/507) (taiki-e/install-action).
*   **Open:** Three new automated dependency PRs are currently open and awaiting review/merge:
    *   [PR #521](https://github.com/qhkm/zeptoclaw/pull/521): Bumping `EmbarkStudios/cargo-deny-action` (2.0.15 to 2.0.16).
    *   [PR #520](https://github.com/qhkm/zeptoclaw/pull/520): Bumping `taiki-e/install-action` (2.68.21 to 2.75.7).
    *   [PR #519](https://github.com/qhkm/zeptoclaw/pull/519): Bumping `docker/build-push-action` (7.0.0 to 7.1.0).

*Note: The closure of #507 and the immediate opening of #520 for the same dependency (`taiki-e/install-action`) suggests a staggered or incremental approach to catching up with upstream releases.*

## 4. Community Hot Topics
Community activity today was minimal, with no high-engagement discussions (zero comments and zero reactions across all new issues and PRs). The most notable item is a new bug report regarding the Telegram integration. This indicates that while the user base is actively testing gateway configurations, broader community engagement or discussion around these issues has not yet sparked. 

## 5. Bugs & Stability
A single bug was reported today, which directly impacts users attempting to deploy ZeptoClaw as a gateway for Telegram:
*   **[Issue #522](https://github.com/qhkm/zeptoclaw/issues/522) [OPEN]: Zeptoclaw Telegram Channel Configuration Bug.** 
    *   *Severity:* **Medium**. It does not cause a total system crash, but it completely blocks a specific, critical integration use case (Telegram channels). 
    *   *Details:* The gateway mode fails to recognize or load the `channels.telegram` section from `config.json`, ignoring valid formatting.
    *   *Status:* No fix PRs are currently linked to this issue, and it has garnered no official maintainer response yet.

## 6. Feature Requests & Roadmap Signals
There were no explicit feature requests submitted today. However, the nature of [Issue #522](https://github.com/qhkm/zeptoclaw/issues/522) signals that users are actively trying to use ZeptoClaw as a multi-channel gateway, specifically targeting Telegram. Fixing this configuration parsing bug is an implicit requirement for the project's next patch release to ensure multi-platform gateway stability.

## 7. User Feedback Summary
Current user feedback highlights a pain point in the deployment and configuration experience. A user attempting to set up the Telegram channel gateway found that the application ignores properly formatted JSON configurations. This suggests a potential gap between the documented setup process and the actual runtime behavior of the gateway mode, leading to user frustration during initial environment provisioning.

## 8. Backlog Watch
*   **[Issue #522](https://github.com/qhkm/zeptoclaw/issues/522):** Created yesterday and currently sitting at 0 comments, this configuration bug requires a triage response from the maintainers to confirm the reproducibility of the `config.json` parsing failure.
*   **Automated Dependency PRs ([#519](https://github.com/qhkm/zeptoclaw/pull/519), [#520](https://github.com/qhkm/zeptoclaw/pull/520), [#521](https://github.com/qhkm/zeptoclaw/pull/521)):** While standard, these PRs require maintainer approval to be merged into the main branch to keep the CI pipeline secure and up-to-date.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest: 2026-04-22
**Project:** [gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

## 1. Today's Overview
The EasyClaw project experienced a highly asynchronous but quietly productive day on April 22, 2026. While community engagement on the issue tracker and pull request boards was completely dormant, the maintainers pushed two consecutive patch updates. This release-heavy, communication-light pattern indicates a focus on immediate bug fixing or minor enhancements rather than large-scale architectural development. Overall, the project's core health remains stable, operating in a maintenance phase.

## 2. Releases
Maintainers released two new versions today, focusing specifically on installation stability for macOS users:
*   **[v1.8.2: RivonClaw v1.8.2](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.2)**
*   **[v1.8.1: RivonClaw v1.8.1](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.1)**

**Changes & Notes:**
Both releases feature identical release notes addressing a critical installation friction point. The updates provide detailed instructions (in English and Chinese) to bypass the macOS Gatekeeper block, which flags the unsigned `RivonClaw` application as damaged. 
*   **Migration Notes:** Users do not need to perform any data migration. However, Mac users will need to execute a provided Terminal command (`xattr -cr ...` or similar, based on standard macOS workarounds) to bypass Gatekeeper and run the application successfully.

## 3. Project Progress
*   **0 Pull Requests merged/closed today.**
Because there were no visible PRs merged today, the release of v1.8.1 and v1.8.2 was likely handled via direct pushes to the main branch by the core maintainers. The primary progress achieved today was strictly operational: resolving a critical packaging/signing issue preventing macOS users from launching the assistant.

## 4. Community Hot Topics
*   **0 active discussions.**
There are no community hot topics to report today. The absence of comments, reactions, or newly opened issues suggests that the user base is either quietly adopting the new v1.8.x releases or has not encountered new issues significant enough to report.

## 5. Bugs & Stability
*   **Severity: Medium (Installation / UX Blocker)**
While no formal bug issues were *reported* via GitHub Issues today, the release notes for both versions explicitly confirm a known stability and usability blocker: **macOS Gatekeeper is falsely flagging the app as damaged** due to missing code signing (`com.apple.quarantine` metadata). 
*   **Fix Status:** Addressed via documentation. The maintainers have provided a manual Terminal workaround rather than fixing the core issue (obtaining an Apple Developer Certificate). No dedicated PRs for this were tracked today.

## 6. Feature Requests & Roadmap Signals
*   **None identified today.** 
Given the lack of community input today, there are no immediate signals regarding upcoming features. It is highly likely that the next versions will continue to focus on platform compatibility (such as properly signing the macOS binaries) rather than introducing new AI agent capabilities.

## 7. User Feedback Summary
*   **Pain Points:** The primary friction point identified from today's data is the out-of-the-box experience for macOS users. Users are encountering scary system warnings ("RivonClaw is damaged"), which creates immediate dissatisfaction and distrust. The need for a bilingual (EN/CN) FAQ directly in the release notes shows this is a widespread, recurring pain point.
*   **Use Cases:** General desktop usage of the RivonClaw personal assistant. 

## 8. Backlog Watch
*   **Code Signing Strategy:** The most pressing item requiring maintainer attention—though not tracked as an Issue—is the lack of a signed macOS build. Relying on users to bypass Gatekeeper via Terminal is not a sustainable long-term solution for a maturing AI assistant.
*   No long-unanswered Issues or PRs were updated today, indicating a potential backlog freeze that maintainers should address to encourage community contributions.

</details>