# OpenClaw Ecosystem Digest 2026-06-14

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-13 22:20 UTC

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

Here is the project digest for OpenClaw based on the GitHub data provided from 2026-06-14.

### 1. Today's Overview
OpenClaw is experiencing an exceptionally high velocity of development and community engagement, with 500 issues and 500 pull requests updated in just the last 24 hours. The maintainers are clearly pushing hard on channel integrations and message delivery reliability, as evidenced by the two latest beta releases (v2026.6.7 and v2026.6.8). However, the project is currently facing significant growing pains related to memory management, gateway stability, and multi-agent orchestration. The ratio of open to merged PRs (342 open vs. 158 closed/merged) indicates a massive backlog of community contributions awaiting review, underscoring the need for scaled maintainer capacity.

### 2. Releases
Two new beta versions were released, focusing heavily on tightening message delivery across channels:
*   **[v2026.6.8-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.6.8-beta.1):** Enhanced Telegram and WhatsApp delivery. Telegram now supports structured rich text (tables, lists, expandable blockquotes) and safer rich-media boundaries. Prompt-preserving CLI backend delivery was added, alongside retiring native draft migration.
*   **[v2026.6.7-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.6.7-beta.1):** Focused on standardizing channel delivery across Slack, Telegram, and outbound media. Added top-level `image` message-tool sends, expandable blockquotes, and ensured Slack final responses persist correctly in transcripts.

### 3. Project Progress
Today's merged and closed PRs show active progress in fixing UI sluggishness, cron job state management, and CLI configurations:
*   **Gateway & Daemon Fixes:** PR [#91181](https://github.com/openclaw/openclaw/pull/91181) fixed a Windows `schtasks` backslash prefix matching issue, and PR [#91059](https://github.com/openclaw/openclaw/pull/91059) masked gateway token inputs in the CLI wizard to prevent shoulder-surfing.
*   **Cron & Session State:** PR [#83933](https://github.com/openclaw/openclaw/pull/83933) fixed manual cron runs accidentally deleting `deleteAfterRun` jobs and mutating error counters.
*   **Tooling & Updates:** PR [#89985](https://github.com/openclaw/openclaw/pull/89985) fixed the `update` command to preserve local package overrides, and PR [#92590](https://github.com/openclaw/openclaw/pull/92590) stripped extraneous stale OpenClaw packages from the official Docker image.

### 4. Community Hot Topics
The most active discussions center around system stability, silent failures, and security:
*   **Severe Memory Leaks & OOM Crashes:** Issue [#91588](https://github.com/openclaw/openclaw/issues/91588) (P0) reports gateway RSS growing to 15.5GB over a few days, causing crash loops via OS OOM killers.
*   **Silent Message Drops in Slack & Feishu:** Users are highly frustrated by silent message loss. Issue [#80715](https://github.com/openclaw/openclaw/issues/80715) (Slack) and [#41744](https://github.com/openclaw/openclaw/issues/41744) (Feishu) highlight instances where the agent successfully composes a reply in the transcript, but it never reaches the user.
*   **Security & Prompt Injection:** Issue [#45740](https://github.com/openclaw/openclaw/issues/45740) points out a critical vulnerability where untrusted GitHub issue bodies are injected directly into sub-agent prompts without sanitization.

### 5. Bugs & Stability
OpenClaw is currently battling several high-severity regressions and stability issues:
*   **P0 - Vector Search Blindness:** Issue [#91778](https://github.com/openclaw/openclaw/issues/91778) reports `memory_search` is completely broken since v2026.6.1 due to missing index metadata, leaving agents "blind." This was recently closed, implying a fix is imminent or merged.
*   **P1 - Cron Data Loss & Overwrites:** Issue [#40001](https://github.com/openclaw/openclaw/issues/40001) highlights that isolated cron sessions completely overwrite shared workspace files because the write tool lacks an append mode.
*   **P1 - GPT Schema Hallucinations Breaking Channels:** Issues [#43015](https://github.com/openclaw/openclaw/issues/43015) and [#42820](https://github.com/openclaw/openclaw/issues/42820) show that `message.send` overexposes poll/modal fields, causing GPT models to auto-populate them and silently fail basic message/file deliveries. 
*   **P1 - Discord Internal Leaks:** Issue [#44905](https://github.com/openclaw/openclaw/issues/44905) reveals that internal tool-call traces (e.g., `NO_REPLY`, JSON arguments) are leaking into Discord channels.

### 6. Feature Requests & Roadmap Signals
Based on recent community submissions, the next major versions will likely focus on advanced memory control and enterprise guardrails:
*   **Advanced Memory & Preservation:** Automated session memory preservation before `/new` resets is highly requested ([#45608](https://github.com/openclaw/openclaw/issues/45608), [#40418](https://github.com/openclaw/openclaw/issues/40418)). PR [#92725](https://github.com/openclaw/openclaw/pull/92725) also signals incoming support for External Rerankers in hybrid memory searches.
*   **Enterprise Cost & Security Controls:** There is a strong demand for per-agent cost budget enforcement at the gateway level ([#42475](https://github.com/openclaw/openclaw/issues/42475)) and Unix-style path-scoped RWX permissions for file and execution tools ([#39979](https://github.com/openclaw/openclaw/issues/39979)).
*   **Per-Skill Model Routing:** Users want to assign cheaper/faster models to simple skills, leaving the primary agent on a smarter model ([#43260](https://github.com/openclaw/openclaw/issues/43260)).

### 7. User Feedback Summary
Users are adopting OpenClaw for complex, multi-channel deployments but are experiencing operational friction. On the upside, the recent beta releases have been praised for noticeably improving Telegram and Slack rich-media delivery. On the downside, memory management is described as being "in chaos" ([#43747](https://github.com/openclaw/openclaw/issues/43747)), with inconsistent chunking behaviors breaking team setups. Furthermore, DeepSeek API users reported massive cost spikes due to a prompt cache regression introduced in v2026.6.1 ([#91018](https://github.com/openclaw/openclaw/issues/91018)), highlighting that provider-specific updates need stricter integration tests.

### 8. Backlog Watch
Several large, critical PRs and Issues have been stalled for months and urgently need maintainer attention:
*   **PR [#46303](https://github.com/openclaw/openclaw/pull/46303) (Open since March):** A critical fix to drain inbound debounce buffers before `SIGUSR1` reloads to prevent permanent message loss during config patches.
*   **PR [#46502](https://github.com/openclaw/openclaw/pull/46502) & [#44884](https://github.com/openclaw/openclaw/pull/44884):** XL-sized PRs introducing a rescue watchdog core service and gateway public network hardening. These are vital for enterprise availability and security.
*   **Issue [#44925](https://github.com/openclaw/openclaw/issues/44925):** A P1 bug from March where subagent task completion is silently lost without retry or notification. This fundamentally breaks trust in autonomous multi-agent workflows and needs a prioritized fix.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the June 14, 2026 community digests.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is experiencing a massive surge in development velocity, characterized by aggressive feature shipping and active community engagement across nearly all major projects. The landscape is rapidly maturing from simple conversational interfaces into highly autonomous, multi-modal, and multi-channel execution frameworks. There is a pronounced, ecosystem-wide push toward enterprise readiness, driving heavy investments in cross-platform messaging integrations (Telegram, Slack, Discord), robust memory management, and stringent security guardrails. However, this hyper-growth is introducing significant operational friction, with severe regressions in memory handling, context compression, and background task reliability becoming the primary bottlenecks for production deployments.

### 2. Activity Comparison
*Note: Health Score is derived from PR merge rates, bug responsiveness, and backlog management.*

| Project | Issues (24h Activity) | PRs (24h Activity) | Release Status (24h) | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 (158 merged) | 2 Betas (v2026.6.7 / .8) | 🟡 Moderate (High velocity, but P0 bugs & large PR backlog) |
| **ZeroClaw** | 41 | 50 (13 merged) | Pre-release (v0.8.1 pipeline) | 🟡 Moderate (Aggressive refactoring, multiple S1 bugs) |
| **NanoBot** | 5 | 20 (5 merged) | No new releases | 🟢 Good (Heavy review phase, active feature development) |
| **IronClaw** | ~8 | 31 (8 merged) | Staged (v0.29.1 pending) | 🟢 Good (Hyper-active core team, rigorous architecture tracking) |
| **Hermes Agent**| 50 | 50 (13 merged) | No new releases | 🟢 Good (Fast bug resolution, stabilizing edge cases) |
| **CoPaw** | 11 | 9 (2 closed) | No new releases (on v1.1.11)| 🟡 Moderate (High engagement, but suffering post-release regressions) |
| **NanoClaw** | 0* | 14 (14 merged) | No new releases | 🟢 Excellent (Zero new bugs, cleared massive backlog cleanly) |
| **PicoClaw** | 2 | 5 (5 merged) | 1 Nightly Build | 🟢 Good (Swift regressions fixes, highly efficient loop) |
| **NullClaw** | 2 | 1 (0 merged) | No new releases | 🟡 Moderate (Low activity, dependent on community PRs for critical fixes) |
| **Moltis** | 2 | 1 (0 merged) | No new releases | 🟢 Good (Low volume, but highly focused enterprise features) |
| **LobsterAI** | ~4 | 2 (2 merged) | No new releases | 🟡 Moderate (UI focus, but accumulating stale core bugs) |
| **TinyClaw / ZeptoClaw**| 0 | 0 | Inactive | ⚪ Dormant |

### 3. OpenClaw's Position
**Advantages & Community Size:** OpenClaw remains the undisputed anchor of the ecosystem, processing an astronomical 500 issues and 500 PRs in a single day—dwarfing the activity of its closest peers (ZeroClaw and Hermes Agent). It acts as a core reference implementation, evidenced by LobsterAI’s dependency on it. 
**Technical Approach vs. Peers:** OpenClaw is aggressively pushing the envelope in multi-channel orchestration (specifically Telegram, WhatsApp, and Slack rich-media delivery) and enterprise controls (per-agent cost budgets, RWX path permissions). 
**Vulnerabilities:** While its sheer size commands the ecosystem, OpenClaw is suffering from severe growing pains. It is currently battling critical P0 infrastructure bugs (15GB memory leaks, OS OOM crashes) and has a massive review bottleneck (342 open PRs). Unlike NanoClaw, which maintains stability through rigorous capability registries, OpenClaw’s rapid iteration is degrading user trust via silent message drops and broken memory search indices.

### 4. Shared Technical Focus Areas
Several universal requirements are emerging simultaneously across independent projects, defining the next phase of AI agent architecture:
*   **Intelligent Memory Compaction & "Dreaming":** Projects are struggling with context windows breaking during compression. *NanoBot, Hermes Agent, OpenClaw, and CoPaw* are all actively refactoring memory summarization to prevent data loss. Hermes Agent's "Auto Dream" concept is a direct response to this.
*   **Model Context Protocol (MCP) & Sandboxing:** Standardized external tool execution is a priority. *Moltis, ZeroClaw, CoPaw, NanoBot, and IronClaw* are heavily focused on MCP integrations. Security implementations vary, but there is a shared demand for strict Unix-style RWX permissions and K8s/container sandboxing (Moltis, OpenClaw).
*   **Sub-Agent Routing & Cost Control:** To manage LLM costs and latency, delegating tasks to cheaper models is becoming native. *NanoBot, NanoClaw, OpenClaw, and ZeroClaw* are implementing dynamic routing for sub-agents or skills (e.g., using cheaper models for retrieval, smarter for coding).
*   **Cross-Channel Delivery Reliability:** Bridging agents to external platforms (Slack, Telegram, Feishu) is universally buggy. *OpenClaw, CoPaw, ZeroClaw, and IronClaw* are all fighting silent message drops, rich-text rendering issues, and split-brain agent routing across channels.

### 5. Differentiation Analysis
*   **Enterprise Security vs. Local Personal Use:** *IronClaw and Moltis* are pivoting hard toward enterprise/DevOps, focusing on capability gate-approval loops, OAuth flows, and K8s-native sandboxes. Conversely, *PicoClaw and ZeroClaw* cater to power users and local-first deployments, emphasizing local LLM routing (Ollama/llama.cpp), Tauri desktop apps, and TUI interfaces.
*   **UI/UX vs. Core Architecture:** *LobsterAI and CoPaw* are differentiating via rich UI workspaces, pushing for Claude-like "Artifacts" (React/HTML rendering) and multi-modal UI inputs. Meanwhile, *NanoClaw* is focused purely on backend resilience (backup/restore, split-brain fixes), and *Hermes Agent* is bridging the gap with advanced desktop/TUI parity.
*   **Architectural Extensibility:** *ZeroClaw* is exploring next-gen plugin architectures via OCI-Compliant Container Registries and WASM, whereas *OpenClaw* relies more on traditional community-driven PRs and monolithic channel integrations.

### 6. Community Momentum & Maturity
*   **Tier 1: High-Velocity Titans (OpenClaw, ZeroClaw, Hermes Agent, IronClaw):** These projects are iterating at breakneck speeds. They are pushing massive architectural changes but are highly susceptible to P0/P1 regressions (OpenClaw's memory leaks, ZeroClaw's macOS UI crashes).
*   **Tier 2: Stabilizers & Feature-Completers (NanoBot, NanoClaw, CoPaw):** These communities are highly mature. *NanoClaw* stands out for having zero new bugs today and successfully merging 14 PRs to clear its backlog—a sign of exceptional maintainer hygiene. *NanoBot* and *CoPaw* are rapidly adding highly-requested features (TTS, TUI, localization) but are facing friction with upstream LLM API changes (Anthropic/Gemini) and desktop client migrations (Tauri).
*   **Tier 3: Niche & Emerging (Moltis, NullClaw, PicoClaw, LobsterAI):** Lower volume, but highly targeted roadmaps. *Moltis* is moving steadily toward enterprise K8s sandboxes, while *LobsterAI* is carving out space in UI/UX but risks stalling due to unanswered maintainer feedback on core bugs.

### 7. Trend Signals
*   **The "Autonomy" Illusion is Breaking:** Users are actively frustrated by silent failures (NullClaw's cron drops, CoPaw's infinite chat hangs, OpenClaw's sub-agent task loss). The industry signal is clear: autonomous workflows are useless without robust observability, retry mechanisms, and explicit failure feedback to the user. 
*   **Prompt-Injection & Cost Security are the Next Frontier:** As agents interact with untrusted data (like GitHub issues) and run continuous background loops, vulnerabilities are shifting from traditional web security to LLM-specific threats. OpenClaw's untrusted GitHub injection and PicoClaw's continuous token-drain loop in "Evolution" mode highlight an urgent need for native circuit breakers, cost budgets, and prompt sanitization layers in all agent frameworks.
*   **Desktop is Dead, TUI/Web is Back:** Migrations to heavyweight desktop frameworks (like Tauri) are introducing massive latency and startup bugs (CoPaw, ZeroClaw). There is a distinct trend reverting to lightweight, non-full-screen Terminal User Interfaces (TUIs) combined with responsive WebUIs (NanoBot, ZeroClaw, Hermes).

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the structured project digest for NanoBot based on the GitHub data provided for June 14, 2026.

### 1. Today's Overview
NanoBot is experiencing a period of exceptionally high development velocity and community engagement. In the last 24 hours alone, the project processed 20 Pull Requests and 5 Issues, indicating an intensely active contributor base focused on iterating the agent's capabilities. The development focus is heavily split between expanding user-facing interfaces (WebUI and TUI), refining agentic memory/context management, and patching integrations with rapidly evolving upstream LLM providers like Anthropic. The high volume of open PRs (15) compared to merged ones (5) suggests maintainers are currently in a heavy review phase, managing a massive influx of community-driven enhancements.

### 2. Releases
No new releases were published in the last 24 hours. The project's current changes remain in the `main` branch or pending PRs, likely building toward a future minor or major version bump.

### 3. Project Progress
Today's merged/closed PRs showcase significant structural and functional advancements:
*   **Memory Management Overhaul:** [PR #4326](https://github.com/HKUDS/nanobot/pull/4326) fixed a critical flaw in `idleCompact`, ensuring the agent now summarizes the full session tail instead of dropping recent conversational corrections. 
*   **Workspace & Execution Security:** [PR #4098](https://github.com/HKUDS/nanobot/pull/4098) improved the `ExecTool` by blocking symlinks that escape workspace boundaries and fixing `PATH` lookup precedence for configured tools.
*   **Architectural Refactoring:** [PR #4314](https://github.com/HKUDS/nanobot/pull/4314) successfully resolved an import cycle in the tool config schema, ensuring better modularization for future tool development.
*   **WebUI Performance:** [PR #4327](https://github.com/HKUDS/nanobot/pull/4327) resolved WebUI startup blocking by offloading slow HTTP handlers off the gateway event loop and optimizing CLI app fetching.
*   **Settings Parity:** [PR #4313](https://github.com/HKUDS/nanobot/pull/4313) closed the gap between `config.json` and the WebUI, adding write endpoints for temperature, tool limits, and memory fields.

### 4. Community Hot Topics
*   **Ollama API Integration:** [Issue #193](https://github.com/HKUDS/nanobot/issues/193) (15 comments) highlights a strong, long-standing community demand for native local LLM support via the Ollama API, pointing to a desire to use NanoBot in fully offline or privacy-preserving environments.
*   **WebUI Automations Management:** [PR #4330](https://github.com/HKUDS/nanobot/pull/4330) introduces a comprehensive surface for users to manage, run, and pause automations via the WebUI, signaling a shift toward making NanoBot a robust, scheduled personal assistant rather than just a chat interface.
*   **Model Presets for Sub-agents:** [PR #4291](https://github.com/HKUDS/nanobot/pull/4291) is generating interest by allowing sub-agents to run on different, configurable models. This addresses the need for complex, cost-effective multi-agent orchestration (e.g., using a cheaper model for retrieval, and a smarter model for coding).

### 5. Bugs & Stability
*   **Critical - Upstream LLM API Rejections:** [Issue #4333](https://github.com/HKUDS/nanobot/issues/4333) reports that the Anthropic provider sends a deprecated `temperature` parameter to the new `opus-4-8` and `Fable` models, resulting in a 400 Error on every request. *Fix Status: Patched in [PR #4334](https://github.com/HKUDS/nanobot/pull/4334).*
*   **High - Agent Startup Crash:** [Issue #4322](https://github.com/HKUDS/nanobot/issues/4322) highlights a `NameError: 'session_key' is not defined` in `context.py`, which crashes the agent immediately after merging recent prompt caching updates. 
*   **High - MCP Server GC Crash:** [PR #4303](https://github.com/HKUDS/nanobot/pull/4303) addresses a `RuntimeError` crash in `asyncio` when reconnecting `streamableHttp` MCP servers, preventing clean session termination. *Fix Status: Open PR submitted.*
*   **Medium - Silent Transcription Failure:** [PR #4323](https://github.com/HKUDS/nanobot/pull/4323) notes that audio transcription fails silently because environment variables (`${VAR}`) aren't resolved before checking for API keys. *Fix Status: Open PR submitted.*

### 6. Feature Requests & Roadmap Signals
Based on recent activity, NanoBot is aggressively expanding into a full-fledged desktop/web assistant suite. Look for the following in the next release:
*   **Text-to-Speech (TTS) Integration:** [PR #4316](https://github.com/HKUDS/nanobot/pull/4316) introduces multi-provider TTS (OpenAI, Groq, ElevenLabs), expanding the assistant's multimodal output capabilities.
*   **Inline Terminal UI (TUI):** [PR #4329](https://github.com/HKUDS/nanobot/pull/4329) brings a massive upgrade to CLI users, offering a rich, non-full-screen interactive TUI with markdown rendering and multimodal inputs.
*   **Built-in Audit Tooling:** [PR #4320](https://github.com/HKUDS/nanobot/pull/4320) adds agent observability, allowing users to track and log exactly what actions the agent takes under the hood.
*   **Filesystem Tool Toggles:** [PR #4138](https://github.com/HKUDS/nanobot/pull/4138) requests the ability to toggle built-in filesystem tools, a vital feature for users who want strict sandboxing via external MCP servers.

### 7. User Feedback Summary
Users are highly engaged with NanoBot's advanced features (like MCP integration and sub-agent spawning), but are encountering friction with environment variable handling and rapid upstream API changes. The silent transcription failure ([PR #4323](https://github.com/HKUDS/nanobot/pull/4323)) and environment template parsing issues in the WebUI ([PR #4324](https://github.com/HKUDS/nanobot/pull/4324), [PR #4325](https://github.com/HKUDS/nanobot/pull/4325)) indicate user frustration with configuration management. Furthermore, the memory compaction bug ([Issue #4264](https://github.com/HKUDS/nanobot/issues/4264) / [PR #4326](https://github.com/HKUDS/nanobot/pull/4326)) reveals that users are relying heavily on NanoBot for complex, multi-turn workflows where correcting the AI's mistakes is common, and they expect the agent's memory to accurately reflect the final, corrected state.

### 8. Backlog Watch
Maintainers should direct their attention to the following pending items:
*   **Reverse Proxy / Sub-path WebUI Hosting:** [PR #4328](https://github.com/HKUDS/nanobot/pull/4328) currently sits awaiting review. This is a highly requested operational feature for users self-hosting NanoBot behind proxies, but requires careful merging as it affects all WebUI asset and WebSocket routing.
*   **Prompt Bloat Bug:** [PR #4321](https://github.com/HKUDS/nanobot/pull/4321) addresses an issue where disabling the "Dream" feature breaks the cursor, causing unprocessed history to continuously bloat the prompt. This can cause silent token-limit failures and needs urgent review.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the project digest for the Hermes Agent project as of 2026-06-14.

### 1. Today's Overview
The Hermes Agent project exhibited exceptionally high development velocity over the last 24 hours, processing 50 issues and 50 pull requests. The community is highly engaged, largely driven by the integration of Telegram Bot API 10.1, native UI/UX adjustments for the Desktop/TUI apps, and complex memory/context management edge cases. While no new releases were published today, maintainers aggressively triaged bugs and merged substantial feature additions and stability patches. Overall project health remains robust, with active mitigation strategies for recently introduced regressions.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
Significant forward progress was made today across architectural, CLI, and plugin domains, highlighted by 13 closed/merged PRs:
*   **Memory & Skills Stabilization ([PR #45837](https://github.com/NousResearch/hermes-agent/pull/45837)):** Closed a major flaw in bundled skill updates, making backup handling crash-safe to prevent silent data loss.
*   **File Parsing Enhancements ([PR #37082](https://github.com/NousResearch/hermes-agent/pull/37082)):** Merged support for `.ipynb`, `.docx`, and `.xlsx` extraction in `read_file`, vastly improving document interaction capabilities.
*   **Infrastructure & Compatibility ([PR #43852](https://github.com/NousResearch/hermes-agent/pull/43852), [PR #45833](https://github.com/NousResearch/hermes-agent/pull/45833)):** Introduced EXDEV/EBUSY fallback for atomic writes and added OpenRouter Fusion support for chat completions.
*   **Performance Optimization ([PR #45831](https://github.com/NousResearch/hermes-agent/pull/45831)):** Process waiting is now event-driven, instantly waking background processes upon completion rather than polling.
*   **Monorepo Bugfix Rollup ([PR #44061](https://github.com/NousResearch/hermes-agent/pull/44061)):** A massive single PR tackling ~35 fixes spanning the cron scheduler, state DB, agent loop, MCP bridge, and Windows support.

### 4. Community Hot Topics
*   **Auto-Dreaming & Memory Management ([Issue #10771](https://github.com/NousResearch/hermes-agent/issues/10771)):** With 7 comments and 5 upvotes, users are highly interested in an "Auto Dream" feature (inspired by Claude Code) that periodically prunes, deduplicates, and optimizes agent memory. This indicates a community need for better long-term context hygiene.
*   **Telegram API 10.1 Rich Messages ([Issue #44428](https://github.com/NousResearch/hermes-agent/issues/44428)):** Gathering 4 comments and 3 upvotes, the rollout of Telegram Rich Messages is drawing massive attention. Users are eagerly adopting the new formatting (tables, LaTeX, blockquotes) but hitting friction with rendering across different Telegram clients.
*   **Desktop Font/UI Adjustments ([Issue #37566](https://github.com/NousResearch/hermes-agent/issues/37566)):** A steady stream of requests (4 upvotes) for a basic font selector highlights that power users want more granular control over the Desktop GUI, which currently lacks the CSS workaround capabilities of the WebUI.

### 5. Bugs & Stability
Today saw the reporting and resolution of several high-severity bugs:
*   **P1 - Config Wipe on Crash ([Issue #45758](https://github.com/NousResearch/hermes-agent/issues/45758)):** The Desktop app crashes and wipes `config.yaml` and `.env` files for non-default profiles. This is a critical data-loss vulnerability that needs immediate maintainer attention.
*   **P2 - WhatsApp CVE Vulnerability ([Issue #43814](https://github.com/NousResearch/hermes-agent/issues/43814)):** The Baileys bridge is susceptible to spoofed protocol messages (CVE-2026-48063) resulting in fake history sync. A fix to bump Baileys `>=7.0.0-rc12` is noted as necessary.
*   **P2 - Context Compression Orphans ([Issue #33907](https://github.com/NousResearch/hermes-agent/issues/33907), [Issue #42228](https://github.com/NousResearch/hermes-agent/issues/42228)):** Automatic context compression creates orphan sessions missing from `state.db` and drops the `cwd`, causing TUI sessions to disappear into "No workspace". *Fix in progress:* [PR #44418](https://github.com/NousResearch/hermes-agent/pull/44418) and [PR #45836](https://github.com/NousResearch/hermes-agent/pull/45836).
*   **P3 - Telegram Web Rendering ([Issue #45785](https://github.com/NousResearch/hermes-agent/issues/45785)):** `sendRichMessage` works on mobile but throws "unsupported message" on Telegram Web. *Fix in progress:* [PR #45840](https://github.com/NousResearch/hermes-agent/pull/45840) added a config flag to disable rich messages as a temporary workaround.

### 6. Feature Requests & Roadmap Signals
Several structural feature requests signal where the project is heading next:
*   **Dynamic Agent Self-Regulation ([Issue #7273](https://github.com/NousResearch/hermes-agent/issues/7273)):** Adding a runtime `reasoning_effort` tool so agents can dynamically adjust their reasoning depth on the fly, rather than relying on slash commands.
*   **Automated Background Maintenance:** The demand for "Auto Dream" ([Issue #10771](https://github.com/NousResearch/hermes-agent/issues/10771)) combined with PRs fixing background memory reviews ([PR #45836](https://github.com/NousResearch/hermes-agent/pull/45836)) suggests the next major version will heavily feature autonomous memory/context lifecycles.
*   **Provider-Specific Routing ([PR #36286](https://github.com/NousResearch/hermes-agent/pull/36286)):** Adding China-region OAuth for MiniMax points to continued geographic expansion and provider diversification.

### 7. User Feedback Summary
Users are enthusiastic about Hermes's expanding functionality but are experiencing growing pains related to platform integrations and background processes. Desktop users are frustrated by destructive bugs (like the profile config wipe) and UI limitations (hardcoded thinking levels, unchangeable fonts). Additionally, developers note architectural friction points, such as `skip_memory=True` breaking cron jobs ([Issue #9763](https://github.com/NousResearch/hermes-agent/issues/9763)), preventing automated memory scripts from executing. Overall sentiment is positive regarding feature parity with proprietary tools, but stability in edge-case workflows (like streaming rich messages to web clients) remains a pain point.

### 8. Backlog Watch
The following important items require maintainer intervention:
*   **[Issue #10771](https://github.com/NousResearch/hermes-agent/issues/10771):** Memory consolidation (Auto Dream) has been open since mid-April and is gaining urgent traction as memory bloat becomes a bigger issue for power users.
*   **[Issue #13891](https://github.com/NousResearch/hermes-agent/issues/13891):** Matrix gateway decryption errors force users to recreate rooms entirely. Despite being a P1 bug with 9 comments, it still requires a definitive structural fix.
*   **[PR #16225](https://github.com/NousResearch/hermes-agent/pull/16225):** An important API server PR to bind exposed and accepted models. Open since April, it represents a crucial security and efficiency feature for users self-hosting the OpenAI-compatible API server.
*   **[Issue #18705](https://github.com/NousResearch/hermes-agent/issues/18705):** The `load_hermes_dotenv()` override bug breaks 12-factor environment variable precedence, creating a credential rotation hazard in containerized environments (Docker/K8s). Needs prioritization.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest (2026-06-14)

## 1. Today's Overview
PicoClaw demonstrates highly active and healthy development as of June 14, 2026, driven by a 5-to-2 ratio of merged PRs to closed issues. The project recently shipped a new automated nightly build (`v0.2.9-nightly.20260613.c362114c`), indicating a continuous integration pipeline focused on rapid iteration. Core development efforts today centered heavily around refining the agent's vision pipeline, fixing obscure file-handling bugs, and expanding interoperability with third-party platforms like OpenRouter. Overall, project velocity is high, with maintainers swiftly merging community fixes and closing the loop on recently reported regressions.

## 2. Releases
*   **nightly: Nightly Build (`v0.2.9-nightly.20260613.c362114c`)**
    *   **Notes:** This is an automated build generated from the `main` branch. While it incorporates the latest fixes (such as the recent media routing and TTS overrides), it is marked as potentially unstable. 
    *   **Full Changelog:** [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. Project Progress
Today's progress was marked by 5 merged/closed PRs, showcasing solid advancements in AI model routing, system stability, and configuration flexibility:
*   **Vision Pipeline Fixes:** [PR #3117](https://github.com/sipeed/picoclaw/pull/3117) successfully fixed a critical bug where media turns were incorrectly routed to text-only models. Media turns and `load_image` follow-ups are now properly routed to the configured image model.
*   **TTS Configuration:** [PR #3119](https://github.com/sipeed/picoclaw/pull/3119) advanced the audio capabilities by adding OpenRouter voice overrides via `extra_body` and implementing a fallback retry mechanism for `response_format`.
*   **Code Quality & Stability:** Two backend stability PRs were merged: [PR #3065](https://github.com/sipeed/picoclaw/pull/3065) explicitly ignored `Close()` errors on PRAGMA/migration failure paths in the database engine, and [PR #3066](https://github.com/sipeed/picoclaw/pull/3066) applied similar error-handling consistency to temp file write/sync failure paths across multiple filesystem tools.
*   **Localization Cleanup:** [PR #2935](https://github.com/sipeed/picoclaw/pull/2935) for Traditional Chinese localization was closed (marked stale).

## 4. Community Hot Topics
*   **[PR #2964](https://github.com/sipeed/picoclaw/pull/2964) [OPEN] Feat/image input compression:** Being one of the oldest active PRs (open since May 28), this addition of a multi-level compression policy for vision payloads highlights a strong community need for bandwidth and token optimization when dealing with inbound media.
*   **[Issue #3012](https://github.com/sipeed/picoclaw/issues/3012) [OPEN] Continuous token consumption:** This is the most discussed issue today (3 comments). Users utilizing the "Evolution" feature in Draft mode are experiencing unexpected continuous token usage. This indicates that background agent autonomy features need tighter guardrails regarding loop executions and API calls.

## 5. Bugs & Stability
*   **High Severity: Vision Model Hallucinations** 
    *   *Status:* Fixed.
    *   [Issue #3108](https://github.com/sipeed/picoclaw/issues/3108) reported that text-only models (like `deepseek-v4-flash`) would hallucinate unrelated answers when asked to describe images via the `load_image` tool. This was swiftly fixed today via [PR #3117](https://github.com/sipeed/picoclaw/pull/3117).
*   **Medium Severity: Continuous Token Consumption**
    *   *Status:* Open / Under Investigation.
    *   [Issue #3012](https://github.com/sipeed/picoclaw/issues/3012) reveals a loop or polling issue where tokens are drained every minute when "Evolution" is enabled. This poses a financial risk to users and requires immediate attention.
*   **Low Severity: Silent File/DB Close Errors**
    *   *Status:* Fixed.
    *   Minor linter warnings and potential unhandled edge cases in SQLite engine and temp file management were resolved ([PR #3065](https://github.com/sipeed/picoclaw/pull/3065), [PR #3066](https://github.com/sipeed/picoclaw/pull/3066)).

## 6. Feature Requests & Roadmap Signals
Based on the currently open PRs, we can predict the following features will land in the upcoming `v0.3.0` or next stable release:
*   **Advanced Media Compression:** [PR #2964](https://github.com/sipeed/picoclaw/pull/2964) will introduce configurable inbound image compression, likely solving latency issues for mobile or Web channel users.
*   **Remote Agent Management:** [PR #3118](https://github.com/sipeed/picoclaw/pull/3118) introduces a WebSocket remote mode (`--remote ws://...`). This is a massive architectural signal, indicating PicoClaw is moving toward decoupled client-server architectures, allowing users to run lightweight agents locally that communicate with a heavy central PicoClaw server.

## 7. User Feedback Summary
*   **Pain Points:** Users are expressing frustration with token management (Issue #3012), specifically when utilizing advanced agent loops. Additionally, routing logic for multimodal capabilities has been a friction point, as text models silently fail when confronted with media payloads instead of gracefully falling back.
*   **Use Cases:** Power users are pushing the boundaries of PicoClaw by integrating it with diverse third-party aggregators like OpenRouter, utilizing models like `deepseek-v4-flash`. Enterprise or self-hosted users are demonstrating a strong desire to separate their agent frontends from backend processing (shown by the demand for WebSocket remote modes).
*   **Satisfaction:** The fact that bug reporters and PR authors like `afjcjsbx` and `not-the-author` are actively submitting patches shows a highly engaged, technically proficient, and invested community.

## 8. Backlog Watch
*   **[PR #2964](https://github.com/sipeed/picoclaw/pull/2964) [OPEN]:** This media compression PR has been open since May 28. Given the recent focus on vision pipelines (fixing routing bugs), merging this PR should be the next logical step for the vision subsystem. It requires a maintainer review.
*   **[PR #3118](https://github.com/sipeed/picoclaw/pull/3118) [OPEN]:** The WebSocket remote mode is a substantial architectural addition opened 2 days ago. It needs security and state management review before merging.
*   **[Issue #3012](https://github.com/sipeed/picoclaw/issues/3012) [OPEN]:** Open since June 5, this continuous token consumption bug is actively burning user credits. It urgently needs a code-level investigation to prevent user churn.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the structured project digest for NanoClaw based on the provided GitHub data.

### 1. Today's Overview
As of 2026-06-14, NanoClaw exhibits a period of high maintenance and architectural maturation. The project experienced a massive surge in repository throughput, with 14 pull requests merged in the last 24 hours following what appears to be a rigorous quality assurance and review cycle. The development team is heavily focused on refining the core agent runner, expanding provider capabilities (like memory scaffolding), and hardening native channel integrations like Signal and Ollama. This volume of merged work, combined with zero newly opened bugs, indicates excellent project health and a highly active, responsive maintainer team.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
The project saw substantial progress through the merging of 14 PRs, advancing both core infrastructure and user-facing features:
*   **Core Architecture & Providers:** Introduced a provider capability registry via the [agent-surfaces capability seam (#2746)](https://github.com/nanocoai/nanoclaw/pull/2746), an opt-in [persistent memory scaffold (#2745)](https://github.com/nanocoai/nanoclaw/pull/2745), and a new [onExchangeComplete provider hook (#2754)](https://github.com/nanocoai/nanoclaw/pull/2754). The OneCLI SDK was also bumped to 2.2.1 with machine-checkable pins ([#2747](https://github.com/nanocoai/nanoclaw/pull/2747)).
*   **Channel Integrations:** Significant enhancements to Signal, adding two-way [reaction support (#2203)](https://github.com/nanocoai/nanoclaw/pull/2203), [outbound attachments (#2040)](https://github.com/nanocoai/nanoclaw/pull/2040), and routing all non-audio attachments through inbox paths ([#2071](https://github.com/nanocoai/nanoclaw/pull/2071)).
*   **Ollama & Local AI:** Local multimodal support was added, allowing `ollama_generate` to accept workspace-relative image paths ([#2072](https://github.com/nanocoai/nanoclaw/pull/2072)).
*   **Resilience:** A comprehensive [backup and restore system (#2084)](https://github.com/nanocoai/nanoclaw/pull/2084) was merged, supporting daily snapshots and per-agent disaster recovery.

### 4. Community Hot Topics
*   **Issue #2755: [Deleted - posted in error](https://github.com/nanocoai/nanoclaw/issues/2755)** 
    *   *Analysis:* This was the only issue updated today. While its content was deleted by the author, it signals that the repository is actively being discovered and tested by new users (who may have confused it with a similar fork or project).
*   **PR #2753: [OPEN] [fix(hooks): pre-commit fell open...](https://github.com/nanocoai/nanoclaw/pull/2753)** 
    *   *Analysis:* Submitted by community contributor *sturdy4days*, this PR highlights an active external developer base paying attention to developer experience (DX) and CI/CD stability. It is currently the only open PR awaiting final merge.

### 5. Bugs & Stability
Several critical stability fixes were merged today, significantly hardening the agent runner against edge cases:
1.  **High Severity - Crash Loop Fix:** [PR #2670](https://github.com/nanocoai/nanoclaw/pull/2670) fixed an issue where a corrupt resumed transcript would cause a permanent session crash loop because the SDK surfaced a 400 error as a result event instead of throwing.
2.  **High Severity - Transient API Failures:** [PR #2692](https://github.com/nanocoai/nanoclaw/pull/2692) addressed how the poll-loop handles transient 5xx errors (like `529 Overloaded`). Previously, the SDK exhausted retries silently; now it retries properly and notifies upon exhaustion.
3.  **Medium Severity - Split-Brain Agent Routing:** [PR #2267](https://github.com/nanocoai/nanoclaw/pull/2267) fixed agent-to-agent (a2a) replies routing to the wrong session when an agent was shared across multiple channels (e.g., Signal and email).
4.  **Medium Severity - Frozen Routing Context:** [PR #2277](https://github.com/nanocoai/nanoclaw/pull/2277) fixed a bug where routing contexts weren't refreshed mid-query, causing cron-task follow-ups to be ignored.

### 6. Feature Requests & Roadmap Signals
Recent merged PRs reveal a strong roadmap trajectory toward **enterprise readiness and autonomy**:
*   **Stateful & Contextual Agents:** The merging of the memory scaffold ([#2745](https://github.com/nanocoai/nanoclaw/pull/2745)) and capability seams ([#2746](https://github.com/nanocoai/nanoclaw/pull/2746)) signals that upcoming versions will allow agents to maintain long-term, persistent context dynamically.
*   **Rich Media Handling:** The heavy investment in Signal attachments and Ollama multimodal image processing suggests the next major release will heavily market visual and document-processing capabilities. 
*   **Prediction:** The next tagged release will likely be a minor version bump (e.g., v2.1 or v2.2) explicitly focusing on "Agent Resilience and Sensory Expansion."

### 7. User Feedback Summary
*   **Pain Points:** Prior to today's fixes, users running complex multi-agent setups experienced frustrating edge cases, such as agents losing context during API overloads ([#2692](https://github.com/nanocoai/nanoclaw/pull/2692)) or cross-channel reply mismatches ([#2267](https://github.com/nanocoai/nanoclaw/pull/2267)). Furthermore, the lack of native disaster recovery ([#2084](https://github.com/nanocoai/nanoclaw/pull/2084)) made hosting NanoClaw in production high-risk.
*   **Use Cases:** Users are actively using NanoClaw as a bridge for personal assistants across platforms (Signal, Email) and are leveraging local models (Ollama) for private, multimodal tasks (analyzing photos sent via chat). 
*   **Satisfaction:** The rapid merging of complex, community-identified edge-case fixes shows a highly satisfied user base that feels empowered to contribute directly to core stability.

### 8. Backlog Watch
*   **[PR #2753](https://github.com/nanocoai/nanoclaw/pull/2753)**: Currently the only open PR. It is a straightforward hook fix submitted recently that requires a maintainer's review to prevent CI failures in environments missing `pnpm` from the PATH.
*   *Note on Backlog:* The repository is in an exceptionally clean state. The development team successfully cleared a massive backlog of 10+ PRs that had been open since April and May, leaving virtually no stale critical issues behind.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest
**Date:** 2026-06-14

### 1. Today's Overview
NullClaw is currently demonstrating healthy, steady development activity with a strong focus on platform stability and asynchronous agent operations. Over the past 24 hours, the project recorded activity across 2 open issues and 1 open pull request, with zero new releases. While there were no immediate merges or closures, the community remains highly engaged in troubleshooting a critical scheduling bug. The presence of a community-submitted pull request addressing the top issue indicates a collaborative and responsive open-source ecosystem. 

### 2. Releases
*No new releases published in the last 24 hours.*

### 3. Project Progress
*No PRs were merged or closed today.* However, project advancement is actively underway in the review phase. A significant community-contributed fix ([PR #954](https://github.com/nullclaw/nullclaw/pull/954)) was opened yesterday and is currently pending maintainer review. If merged, this will mark major progress in stabilizing NullClaw's agent scheduling and message delivery mechanisms.

### 4. Community Hot Topics
The most active discussion revolves around asynchronous task execution and third-party integrations:
*   **[Issue #941](https://github.com/nullclaw/nullclaw/issues/941) (7 comments):** Agent-type cron jobs don't spawn a subprocess. This is generating significant traction, highlighting that automated, unattended agent workflows (specifically pushing updates to Telegram) are a primary use case for NullClaw users. 
*   **[Issue #914](https://github.com/nullclaw/nullclaw/issues/914) (1 comment):** Request for a JIRA access tool. This underscores the community's desire to use NullClaw as a centralized, automated hub for project management and DevOps workflows.

### 5. Bugs & Stability
*   **[Critical] Use-after-free in Outbound Message Channel ([Issue #941](https://github.com/nullclaw/nullclaw/issues/941)):** Agent-type scheduled tasks complete but fail to spawn a subprocess, resulting in silent delivery failures to channels like Telegram and Mattermost. 
    *   *Fix Status:* A root cause has been identified as a use-after-free bug on the `OutboundMessage.channel` property. A corresponding fix has been submitted via [PR #954](https://github.com/nullclaw/nullclaw/pull/954) by `vernonstinebaker` and is currently awaiting review and merging.

### 6. Feature Requests & Roadmap Signals
Users are heavily leaning into external API integrations to turn NullClaw into a powerful workplace assistant. 
*   **JIRA Integration ([Issue #914](https://github.com/nullclaw/nullclaw/issues/914)):** User `sayjeyhi` requested a tool to allow agents to securely authenticate, read issues, create tickets, and retrieve sprints. 
*   *Roadmap Prediction:* Given the current focus on enterprise/developer workflows, we predict the next minor version will prioritize merging enterprise integrations (like JIRA) to expand NullClaw's out-of-the-box tool ecosystem.

### 7. User Feedback Summary
The current user sentiment is a mix of frustration with silent failures and appreciation for the framework's potential. Users are actively trying to deploy NullClaw for persistent background tasks (like scheduled Telegram notifications). The fact that cron jobs silently fail—marking tasks as "completed" while dropping the payload—is a major pain point, as it breaks trust in unattended agent operations. However, the community's proactive approach in diagnosing memory management bugs (use-after-free) shows a high level of technical engagement and investment in the project's success.

### 8. Backlog Watch
Maintainers should prioritize reviewing the following open items:
*   **[PR #954](https://github.com/nullclaw/nullclaw/pull/954):** Needs code review and merging. This is a critical patch that will resolve the widespread silent message delivery failures.
*   **[Issue #914](https://github.com/nullclaw/nullclaw/issues/914):** Open since May 13th with minimal maintainer feedback. This enhancement request needs triaging to determine if JIRA integration aligns with the near-term roadmap.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest (2026-06-14)

## 1. Today's Overview
The IronClaw project is currently experiencing a period of hyper-active, focused development, driven almost entirely by the core team. With 31 pull requests updated and 8 merged in the last 24 hours, development velocity is exceptionally high. The primary engineering thrust is split between overhauling the attachment pipeline (ingress, storage, and model visibility) and hardening the Reborn runtime's concurrency, gate-approval workflows, and Slack integration. Project health appears robust, with rigorous architectural tracking visible in the issues and immediate follow-ups to newly merged complex features like the DeferredBusy drain.

## 2. Releases
*No new releases were published in the last 24 hours.* 
However, PR [#3708](https://github.com/nearai/ironclaw/pull/3708) (open since May) indicates a significant `v0.29.1` release is being staged, which will introduce breaking API changes to `ironclaw_common` and `ironclaw_skills`.

## 3. Project Progress
Today's merged PRs mark the successful landing of the foundational architecture for Issue #4644 (Attachments) and the graceful closure of the DeferredBusy drain experiment:
*   **Attachment Architecture Landed:** Three foundational PRs were merged. PR [#4654](https://github.com/nearai/ironclaw/pull/4654) introduced a central, extensible attachment format registry in `ironclaw_common` to replace scattered hardcoded lists. PR [#4655](https://github.com/nearai/ironclaw/pull/4655) successfully updated the Reborn transcript contract to carry durable attachment references. PR [#4668](https://github.com/nearai/ironclaw/pull/4668) merged the `MountView`-based backend byte-storage crate.
*   **Concurrency Strategy Pivot:** PR [#4812](https://github.com/nearai/ironclaw/pull/4812) (DeferredBusy drain) shipped, but the team immediately evaluated and closed follow-up architectural optimizations (Issues [#4831](https://github.com/nearai/ironclaw/issues/4831), [#4832](https://github.com/nearai/ironclaw/issues/4832), [#4833](https://github.com/nearai/ironclaw/issues/4833)). Instead, they shifted strategy to a simpler, explicit rejection model for busy threads, rather than background parking/resubmission.

## 4. Community Hot Topics
*   **Approval Loop & Auth UX (Issue [#4825](https://github.com/nearai/ironclaw/issues/4825) & PR [#4839](https://github.com/nearai/ironclaw/pull/4839)):** A major topic today is the friction in the Reborn capability gate system. Users are frustrated that "always allow" approvals don't persist across threads, and Slack integrations are suffering from multi-approval loops for single logical calls. This highlights a strong user need for stateful, frictionless permission management once trust is established.
*   **Runtime Context Visibility (PR [#4836](https://github.com/nearai/ironclaw/pull/4836)):** This highly active PR addresses model self-awareness by giving the AI a "runtime context" slice—telling it exactly which channels (like Slack or Webchat) are connected and where outbound messages will go. This signals a roadmap push toward highly autonomous, context-aware agent operations.

## 5. Bugs & Stability
*   **[High Severity] Nightly E2E Test Failure (Issue [#4108](https://github.com/nearai/ironclaw/issues/4108)):** The scheduled nightly end-to-end test failed on June 13th for the `v2-engine`. No fix PR is linked yet.
*   **[High Severity] Slack Re-approval Loops (PR [#4839](https://github.com/nearai/ironclaw/pull/4839), [#4843](https://github.com/nearai/ironclaw/pull/4843), [#4844](https://github.com/nearai/ironclaw/pull/4844)):** A triad of bugs caused Slack to spam users with human approval gates for capabilities requiring both one-shot approval and OAuth (e.g., Gmail access). This is actively being patched.
*   **[Medium Severity] Gate Ordering/Invisible Errors (PR [#4840](https://github.com/nearai/ironclaw/pull/4840), [#4841](https://github.com/nearai/ironclaw/pull/4841)):** Users were prompted to approve actions before the system verified if the necessary credentials existed, leading to "burned" approvals. Furthermore, model or host failures resulted in opaque "run-borking" errors. Fix PRs are open.
*   **[Low Severity] OpenAI-compat Canary (PR [#4680](https://github.com/nearai/ironclaw/pull/4680)):** Inbound paths were converting non-text content (images/audio) to an opaque `[non_text_content]` string. Fixed in pending PRs.

## 6. Feature Requests & Roadmap Signals
Based on today's PRs and Issue triage, the immediate roadmap points toward robust multi-modal agent execution and refined UX:
1.  **End-to-End Attachments (Issue #4644):** With the foundation merged, expect the next version to fully support file uploads via WebChat/Slack, automatic text extraction (via OCR/speech-to-text), and injecting that text directly into the LLM's context window.
2.  **Resilient Agent Runs:** PR [#4841](https://github.com/nearai/ironclaw/pull/4841) signals a major push to ensure agent runs never "bork" but instead provide explanations and retry mechanisms for transient host/model failures.
3.  **Cross-Thread Memory:** Issue [#4825](https://github.com/nearai/ironclaw/issues/4825)'s tracking of persistent "always allow" approvals across threads indicates work on unified, user-level policy state.

## 7. User Feedback Summary
User friction today is highly technical, stemming mostly from complex agent state transitions. The core pain points involve **interrupted agentic workflows**—specifically, runs failing due to missing credentials after a user already approved them, and the annoyance of re-approving the same capability in new chat threads. On the positive side, the rapid transition from a deferred-message queue to a simple "busy thread" rejection (PR [#4838](https://github.com/nearai/ironclaw/pull/4838)) shows the UX is pivoting to set clearer, immediate expectations for the user ("thread is busy, please retry") rather than hiding execution complexity in the background.

## 8. Backlog Watch
*   **Stalled Release:** PR [#3708](https://github.com/nearai/ironclaw/pull/3708) (chore: release) has been open since May 16th. It contains major breaking changes (v0.24.0 -> v0.29.1). It needs to be merged or re-based soon to prevent dependency drift.
*   **Community Contributor Block:** PR [#4264](https://github.com/nearai/ironclaw/pull/4264) by a new contributor (`wcc945`) adding a Routine Create endpoint has been open since May 31st and needs maintainer review.
*   **Deferred Design Debt:** Issue [#4817](https://github.com/nearai/ironclaw/issues/4817) leaves explicit architectural seams (trusted-resubmit, stale-intent) unresolved following the DeferredBusy drain. While not blocking, this technical debt needs an owner.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-06-14

## 1. Today's Overview
LobsterAI is currently experiencing a period of maintenance and UI/UX refinement, with moderate community activity primarily focused on bug reporting and interface polish. Over the past 24 hours, the project saw no new releases, but maintainers and contributors actively processed historical pull requests, merging platform-specific fixes and UI improvements. However, there is a noticeable accumulation of stale issues related to the agent "skills" system and calendar tasks, indicating a need for deeper architectural debugging. Overall project health appears stable, with steady commit history and active triage, though users are eager for core functionality updates like broader framework support.

## 2. Releases
*No new releases were published today.*

## 3. Project Progress
Over the last 24 hours, 2 PRs were closed/merged, focusing on improving the user experience and cross-platform consistency:
*   **MCP UI Fix ([PR #1466](https://github.com/netease-youdao/LobsterAI/pull/1466)):** Fixed a layout bug in the MCP (Model Context Protocol) server form modal where the close/cancel buttons became unreachable when adding multiple environment variables or headers. The modal's scrolling behavior was corrected to isolate the body content.
*   **macOS Shortcuts Adaptation ([PR #1467](https://github.com/netease-youdao/LobsterAI/pull/1467)):** Corrected hardcoded keyboard shortcuts in the Settings panel to dynamically display `Cmd (⌘)` instead of `Ctrl` for macOS users.

## 4. Community Hot Topics
The community's focus is currently split between adapting to breaking changes in external tools and improving the internal UI/UX for agent skills.
*   **Framework Compatibility Concerns ([Issue #1443](https://github.com/netease-youdao/LobsterAI/issues/1443)):** A user reported startup failures after upgrading to `openclaw v2026.3.24` due to breaking changes. This highlights the community's strong desire for LobsterAI to maintain tight compatibility with the latest upstream AI frameworks.
*   **UI Redesign for Active Skills ([PR #1440](https://github.com/netease-youdao/LobsterAI/pull/1440)):** A highly detailed PR aimed at decluttering the chat interface. The contributor wants to move active skill tags from the bottom toolbar into the top of the input area, showing a clear demand for better visual hierarchy when dealing with complex agent prompts.

## 5. Bugs & Stability
Several significant functional bugs have been reported and are currently awaiting fixes, primarily revolving around the "Skills" (技能) routing and execution system. 

*   **High Severity:** Skills system fails to enforce state boundaries. Users reported that disabled skills can still be triggered during conversations via keywords ([Issue #1439](https://github.com/netease-youdao/LobsterAI/issues/1439)), and selected skills visually disappear from the UI after sending a single message ([Issue #1442](https://github.com/netease-youdao/LobsterAI/issues/1442)). *Fix in progress:* A complementary PR ([PR #1445](https://github.com/netease-youdao/LobsterAI/pull/1445)) is addressing related background issues where duplicate skills bypassed validation during ZIP/GitHub import, which pollutes the system prompt and causes routing instability.
*   **Medium Severity:** UI soft-lock in the calendar/scheduling task creator. Selecting "non-repeating" and clearing the calendar results in the "Create Task" button doing nothing, with zero error feedback to the user ([Issue #1437](https://github.com/netease-youdao/LobsterAI/issues/1437)).

## 6. Feature Requests & Roadmap Signals
Based on current PRs, the short-term roadmap heavily features UI enhancements and artifact rendering:
*   **Extensible Artifact Preview Pipeline ([PR #1441](https://github.com/netease-youdao/LobsterAI/pull/1441)):** A major feature addition aiming to allow users to seamlessly preview HTML, React components, and Mermaid charts directly within the conversation. This indicates a push towards making LobsterAI a more interactive workspace for developers, similar to Claude's Artifacts.
*   **Skill Import Standardization ([PR #1445](https://github.com/netease-youdao/LobsterAI/pull/1445)):** Upcoming robust validation for skill imports (ZIP, Folder, GitHub) to prevent system prompt collisions.

## 7. User Feedback Summary
Users are actively utilizing LobsterAI's agent skills for complex workflows but are experiencing friction with the system's reliability. The user base is technically proficient, as evidenced by their attempts to manually upgrade backend frameworks like OpenClaw and their detailed feedback on prompt routing. There is distinct dissatisfaction with the current skills lifecycle management (discovery, selection, toggling, and import), which users feel is buggy and visually inconsistent. However, users remain highly engaged, contributing substantial code-level PRs to fix the platform's shortcomings.

## 8. Backlog Watch
The development team needs to address a cluster of issues and PRs created in early April that have gone stale. 
*   **OpenClaw Adaptation ([Issue #1443](https://github.com/netease-youdao/LobsterAI/issues/1443)):** Needs an official maintainer response regarding the timeline for adapting to the `openclaw v2026.3.24` breaking changes, as this blocks users from updating their local environments.
*   **Artifacts Pipeline ([PR #1441](https://github.com/netease-youdao/LobsterAI/issues/1441)):** A massive 10-file conflict resolution PR that has been sitting open since April. It requires a maintainer review to avoid blocking future artifact-rendering features.
*   **UI/UX Bug Cluster:** Issues [#1437](https://github.com/netease-youdao/LobsterAI/issues/1437), [#1439](https://github.com/netease-youdao/LobsterAI/issues/1439), and [#1442](https://github.com/netease-youdao/LobsterAI/issues/1442) remain unanswered by maintainers and are severely degrading the core Agent conversational experience.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest (2026-06-14)

Here is the structured daily digest for the Moltis open-source project.

### 1. Today's Overview
The Moltis project is currently experiencing steady, highly focused community activity centered around enterprise integration and security. Over the past 24 hours, the project saw 2 new issues and 1 corresponding pull request, with no new releases. Activity is currently driven by user attempts to connect Moltis to external SaaS tools via the Model Context Protocol (MCP) and a push for hardened agent execution environments. While the bug resolution loop is operating efficiently—evidenced by a same-day fix for an OAuth integration issue—the project still needs to address the lack of recent stable releases to keep enterprise momentum.

### 2. Releases
*Omitted — No new releases in the observed period.*

### 3. Project Progress
No PRs were merged or closed today. However, significant functional progress is being made in the review pipeline regarding MCP (Model Context Protocol) compatibility. Contributor **xzavrel** not only reported an OAuth authentication failure but immediately followed up with [PR #1120](https://github.com/moltis-org/moltis/pull/1120). This PR proposes refactoring the `discover_and_register()` function to use a direct fetch for the `resource_metadata` URL, which, once merged, will successfully unblock Moltis agents from interacting with remote Notion and Linear environments. 

### 4. Community Hot Topics
The most notable active items in the community involve extending Moltis's interoperability and security boundaries:
*   **[Issue #1118](https://github.com/moltis-org/moltis/issues/1118): Kubernetes-native sandbox backend.** Proposed by *AzgadAGZ*, this issue requests a new backend for agent command execution using ephemeral Kubernetes pods. It highlights a strong underlying community need for VM-level isolation (via Kata Containers/gVisor) when executing untrusted LLM-generated code. 
*   **[Issue #1119](https://github.com/moltis-org/moltis/issues/1119) / [PR #1120](https://github.com/moltis-org/moltis/pull/1120): MCP OAuth failures.** Authored by *xzavrel*, this highlights user friction when attempting to authorize Moltis against popular external project management tools (Notion, Linear), signaling high demand for seamless MCP OAuth flows.

### 5. Bugs & Stability
1.  **[High] MCP OAuth `invalid_target` Failure ([Issue #1119](https://github.com/moltis-org/moltis/issues/1119))**
    *   **Impact:** Blocks users from adding remote MCP servers that utilize the `resource_metadata` parameter in their `WWW-Authenticate` headers. This completely breaks agent integrations with Notion and Linear.
    *   **Status:** **Fix PR exists.** [PR #1120](https://github.com/moltis-org/moltis/pull/1120) was submitted on the same day to address the parameter mishandling in `fetch_resource_metadata()`.

### 6. Feature Requests & Roadmap Signals
*   **Feature:** Kubernetes-native sandbox with `runtimeClassName` support ([Issue #1118](https://github.com/moltis-org/moltis/issues/1118)).
    *   **Prediction:** Given the inherent security risks of autonomous AI agents running arbitrary code, sandboxing is a critical pipeline feature. If this issue gains maintainer traction, it is highly likely to be a flagship feature in an upcoming enterprise-targeted release (e.g., v2.x), alongside native cloud-deploy Helm charts.

### 7. User Feedback Summary
Real user pain points today heavily reflect *enterprise usage patterns*. Users are actively trying to deploy Moltis in production environments and are hitting two predictable roadblocks: external tool authentication (Notion/Linear OAuth) and safe code execution. The fast turnaround on the MCP bug showcases a healthy, proactive community. Dissatisfaction is minimal, but the lack of recent releases might frustrate users who require stable builds rather than relying on nightly commits for these critical integration fixes.

### 8. Backlog Watch
*   **[PR #1120](https://github.com/moltis-org/moltis/pull/1120):** Needs prioritized code review and CI checks by maintainers so it can be merged to unblock users relying on Notion and Linear MCP integrations.
*   **[Issue #1118](https://github.com/moltis-org/moltis/issues/1118):** Needs maintainer feedback on technical feasibility and roadmap alignment. Implementing a K8s backend is a substantial undertaking, and the community would benefit from knowing if this aligns with the core team's immediate architectural vision.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the structured project digest for CoPaw (QwenPaw) based on the provided GitHub data.

# CoPaw (QwenPaw) Project Digest
**Date:** 2026-06-14

## 1. Today's Overview
The CoPaw (QwenPaw) project is currently experiencing highly active development and community engagement, with 11 issues and 9 pull requests updated in the last 24 hours. The community is heavily focused on expanding channel integrations (Zalo, Vietnamese localization) and optimizing agent memory/context management. While no new releases were deployed today, maintainers are actively reviewing a robust pipeline of first-time contributor PRs focused on system stability and error handling. The project's health appears strong, though several regressions from the recent v1.1.11 release require immediate attention.

## 2. Releases
*No new releases were published in the last 24 hours. The project currently remains on version `v1.1.11.post2`.*

## 3. Project Progress
Development today was characterized by rigorous bug fixing and performance improvements driven largely by community contributions. Two notable PRs were closed/merged:
*   **[PR #2498](https://github.com/agentscope-ai/QwenPaw/pull/2498) [CLOSED]**: Fixed an issue where newly created agents defaulted to English and copied Chinese persona files regardless of the user's UI language. It now reads localStorage and includes server-side fallback validation.
*   **[PR #4969](https://github.com/agentscope-ai/QwenPaw/pull/4969) [CLOSED]**: Enhanced the Skill feature by adding tag-filtering support for batch downloading skills to the workspace.

Additionally, 7 PRs are currently under active review, with contributor `ly-wang19` leading a massive effort to fix edge-case crashes (empty lists, invalid config files, OS browser detection) to harden the backend. 

## 4. Community Hot Topics
The most active discussions centered around third-party API support, platform integrations, and UI/UX performance:
*   **[Issue #5156](https://github.com/agentscope-ai/QwenPaw/issues/5156) (4 comments)**: Users are strongly requesting `kimi-for-coding` to be added to the `uv` allowlist. Subscribers of Kimi's coding plan want to bypass official API limitations and plug their existing subscriptions directly into QwenPaw.
*   **[Issue #5167](https://github.com/agentscope-ai/QwenPaw/issues/5167) (1 comment, high relevance)**: A detailed feedback piece on the Feishu (Lark) CardKit streaming cards. Users report severe lag and "character-by-character" rendering delays during long responses, requesting an optimized chunk-refresh mechanism.
*   **[PR #5088](https://github.com/agentscope-ai/QwenPaw/pull/5088)**: A significant architectural discussion regarding initial governance and sandbox interfaces for the platform.

## 5. Bugs & Stability
Several critical bugs and regressions were reported today, heavily impacting user experience and agent execution:

1.  **[HIGH] Context Compression Breaks Agents - [Issue #5171](https://github.com/agentscope-ai/QwenPaw/issues/5171)**: If an agent's persona file exceeds the token retention threshold, context compression wipes everything to 0, causing tasks to permanently break. *Fix Status: Partially addressed in pipeline via [PR #5038](https://github.com/agentscope-ai/QwenPaw/pull/5038) which guards against empty message lists.*
2.  **[HIGH] Unresponsive Chat & Task Cancellation - [Issue #5172](https://github.com/agentscope-ai/QwenPaw/issues/5172)**: Chat sessions hang infinitely after periods of inactivity. Users are forced to manually click "stop" (triggering a Task Cancelled error) to use the chat again. This effectively breaks integration with automated channels like QQ/WeChat.
3.  **[MEDIUM] Gemini Tool Calling Regression - [Issue #5163](https://github.com/agentscope-ai/QwenPaw/issues/5163)**: Tool calling for Gemini models is completely broken in `v1.1.11.post2`. Users are forced to downgrade to `v1.1.10`.
4.  **[MEDIUM] Cron/Heartbeat Agent Limitations - [Issue #5174](https://github.com/agentscope-ai/QwenPaw/issues/5174)**: Background agents can execute basic Python scripts but fail to use tools like `write_file` or spawn subagents. *Fix Status: [PR #5040](https://github.com/agentscope-ai/QwenPaw/pull/5040) is actively under review to make cron job loading more fault-tolerant.*
5.  **[LOW] Tauri Desktop Startup Lag - [Issue #5047](https://github.com/agentscope-ai/QwenPaw/issues/5047)**: Since migrating from Python to Tauri, Windows users report startup times increasing from 1-2 minutes to over 10 minutes, often causing the app to enter an unresponsive state.

## 6. Feature Requests & Roadmap Signals
Based on recent issues and PRs, the upcoming roadmap signals point towards regional expansion and structural architectural improvements:
*   **Regional Expansion:** Strong push for Southeast Asian support, specifically requests to add **Vietnamese interface language** ([Issue #5169](https://github.com/agentscope-ai/QwenPaw/issues/5169)) and official **Zalo Bot** channel support ([Issue #5168](https://github.com/agentscope-ai/QwenPaw/issues/5168)).
*   **3rd Party Provider Flexibility:** Allowing custom/external paid subscriptions (like Kimi) via allowlists rather than strict official API integrations ([Issue #5156](https://github.com/agentscope-ai/QwenPaw/issues/5156)).
*   **Performance Optimization:** Caching `PROFILE.md` reads on agent list endpoints ([PR #5170](https://github.com/agentscope-ai/QwenPaw/pull/5170)) to improve web console speeds for users with many agents.

## 7. User Feedback Summary
Users are heavily utilizing QwenPaw across multiple channels (Discord, Feishu, QQ, WeChat) but are experiencing friction with background task stability and desktop client performance. The transition to Tauri has been rough for Windows users, and memory management (context compression) is currently a major pain point that undermines long-running agentic workflows. However, user satisfaction remains high regarding the platform's openness, with users eagerly contributing fixes for Linux browser detection, backup resilience, and config management. 

## 8. Backlog Watch
*   **[Issue #5140](https://github.com/agentscope-ai/QwenPaw/issues/5140)**: A recently closed issue regarding 404 errors when downloading non-text files (docx/pdf). While marked closed, users are still reporting related symptoms in other threads; maintainers should verify the fix fully applies to `v1.1.11.post2`.
*   **Cluster of First-Time Contributor PRs**: Maintainers need to prioritize reviewing and merging `ly-wang19`'s cluster of PRs ([#5035](https://github.com/agentscope-ai/QwenPaw/pull/5035), [#5037](https://github.com/agentscope-ai/QwenPaw/pull/5037), [#5041](https://github.com/agentscope-ai/QwenPaw/pull/5041)). These address atomic crashes (e.g., failing an entire backup if one file is unreadable) that severely degrade platform stability.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the structured project digest for ZeroClaw based on the GitHub data from 2026-06-14.

### 1. Today's Overview
ZeroClaw is exhibiting a very high velocity of development and community engagement, processing 41 issues and 50 PRs in the last 24 hours alone. The project is actively iterating on its v0.8.1 pipeline and the upcoming "Zerocode" TUI (Terminal User Interface). A significant portion of today's activity revolves around architectural overhauls, including refactoring the agent turn engines and planning a new dynamic-library/WASM plugin system. While maintainer and contributor momentum is strong, several high-severity regressions in the gateway and macOS desktop app have emerged, demanding immediate attention.

### 2. Releases
*No new releases were recorded today. The project remains in an active development cycle, likely preparing for the v0.8.1 minor release tracked in Issue #6970.*

### 3. Project Progress
Today's progress is marked by significant architectural merges and crucial bug fixes, with 13 PRs merged/closed:
*   **Agent Engine Consolidation:** The codebase successfully unified its three separate agent turn engines into a single consolidation PR ([Issue #7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)), streamlining how the agent processes tool calls and streams responses.
*   **Task Scheduling:** Merged [PR #7398](https://github.com/zeroclaw-labs/zeroclaw/pull/7398), allowing users to pause and resume scheduled cron tasks via the API without needing to delete and recreate them.
*   **TUI Stabilization:** Fixed a critical UX flaw in the upcoming Zerocode TUI where macOS `Cmd-C` triggered the application to quit instead of copying text ([PR #7538](https://github.com/zeroclaw-labs/zeroclaw/pull/7538)).
*   **Onboarding Safety:** Merged [PR #7513](https://github.com/zeroclaw-labs/zeroclaw/pull/7513), fixing a bug where `zeroclaw quickstart` entered an infinite redraw loop on non-interactive TTYs, accidentally generating 4.3 GB of output.

### 4. Community Hot Topics
*   **[Issue #5470](https://github.com/zeroclaw-labs/zeroclaw/issues/5470) - [Bug]: Multiple issues when running safely (5 comments):** Users running GPT-5.4 with high reasoning are experiencing severe memory duplication when using Telegram, indicating the memory backend needs better deduplication logic for conversational channels.
*   **[Issue #5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570) - [Enhancement]: Faster SQLite memory vector search (5 comments):** A highly requested performance optimization. The current brute-force O(n) vector scan in SQLite is bottlenecking semantic recall, and the community is proposing an Approximate Nearest Neighbor (ANN) index to speed it up.
*   **[Issue #6760](https://github.com/zeroclaw-labs/zeroclaw/issues/6760) - Update Documentation for Docker (4 comments):** Users are actively collaborating on working `docker.yaml` files to run the Gateway and Web UI rootless, highlighting a need for better official containerization documentation.
*   **[Issue #6289](https://github.com/zeroclaw-labs/zeroclaw/issues/6289) - Prompt-triggered install suggestions (3 comments):** A strong signal that users want ZeroClaw to dynamically suggest and install skills/plugins automatically when they ask for a capability the agent doesn't currently have installed.

### 5. Bugs & Stability
Today saw the reporting of multiple S1 (workflow blocking) and S2 (degraded behavior) bugs. Fixes are already in progress for several:
*   **[S1 Bug] `ask_user` fails in Web UI:** ([Issue #7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542)) Agents calling `ask_user` via the WebSocket dashboard crash instantly. **Status:** Fix proposed in [PR #7584](https://github.com/zeroclaw-labs/zeroclaw/pull/7584).
*   **[S1 Bug] macOS Tauri App Blank Window:** ([Issue #7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527)) The desktop app fails to detect OS permissions, loses responsiveness, and displays an empty window. Currently blocked and needs macOS-specific attention.
*   **[S1 Bug] Web Dashboard Unavailable:** ([Issue #7523](https://github.com/zeroclaw-labs/zeroclaw/issues/7523)) Gateway dashboard fails to build/load via Homebrew installs. **Status:** Fix is in progress.
*   **[S1 Bug] `/canvas` Regression:** ([Issue #7563](https://github.com/zeroclaw-labs/zeroclaw/issues/7563)) A recent change (#6986) broke the `canvas-store` in WebSocket chat sessions, leaving the Web UI `/canvas` page empty. 
*   **[S2 Bug] MCP Security Gap:** ([Issue #6876](https://github.com/zeroclaw-labs/zeroclaw/issues/6876)) `risk_profile.allowed_tools` fails to restrict MCP (Model Context Protocol) tools, creating a potential security risk for agent deployments. Accepted for a fix.

### 6. Feature Requests & Roadmap Signals
The roadmap signals a heavy pivot toward extensibility, local execution, and TUI refinement:
*   **New Plugin Architecture (RFCs):** Two major RFCs aim to replace the monolithic structure. [Issue #7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420) proposes a Native Dynamic-Library Plugin System, while [Issue #7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) suggests using OCI-Compliant Container Registries for WASM plugin storage and discovery.
*   **Advanced Delegation:** [Issue #7514](https://github.com/zeroclaw-labs/zeroclaw/issues/7514) requests updating the `delegate` tool to allow subagents to operate under different risk profiles. This is a major architectural enhancement for secure, multi-agent workflows.
*   **Local Model Routing:** [Issue #7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539) asks for a `llama.cpp` model router, showing strong user demand for better orchestration of local, open-source models.
*   *Prediction:* The upcoming v0.8.1 release will likely focus heavily on finalizing the WASM plugin pipeline, the TUI desktop experience, and expanding channel streaming support (e.g., [Issue #7531](https://github.com/zeroclaw-labs/zeroclaw/issues/7531) for Asian messaging platforms).

### 7. User Feedback Summary
**Praise & Use Cases:** Users appreciate ZeroClaw's utility for small, local tasks, especially when integrated with `llama.cpp` and self-hosted models.
**Pain Points:** 
1. **Config Drift & Fragmentation:** Users are frustrated by disconnected configuration paths (e.g., plugins installing to a directory the runtime doesn't scan, addressed today in [PR #7549](https://github.com/zeroclaw-labs/zeroclaw/pull/7549)).
2. **Provider Timeouts:** Native OpenAI users are hitting silent 120-second timeouts because the provider ignores the `timeout_secs` config, breaking long-running reasoning tasks ([Issue #6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723)).
3. **Internationalization Gaps:** Tools like `file_read` fail heavily on non-UTF-8 encodings (like Windows-1251/Cyrillic), replacing text with gibberish ([Issue #7521](https://github.com/zeroclaw-labs/zeroclaw/issues/7521)).

### 8. Backlog Watch
*   **[PR #7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361) (Opened 2026-06-07):** An XL-sized enhancement implementing per-turn output routing for voice delivery across multiple channels (Slack, Telegram, Matrix, etc.). Needs maintainer review as it touches core channel architecture.
*   **[PR #5797](https://github.com/zeroclaw-labs/zeroclaw/pull/5797) (Opened 2026-04-16):** Adds `tls_ca_cert_path` support for custom inference providers. This ~2-month-old PR is critical for enterprise adoption (allowing agents to connect to corporate PKI endpoints) and needs maintainer attention.
*   **[Issue #6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723) (Opened 2026-05-16):** The OpenAI provider hardcoded timeout issue. Accepted but currently sitting in the backlog, frustrating users running complex agentic loops.

</details>