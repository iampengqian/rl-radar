# OpenClaw Ecosystem Digest 2026-06-20

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-19 22:16 UTC

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

Here is the project digest for OpenClaw for June 20, 2026.

### 1. Today's Overview
OpenClaw is experiencing an exceptionally high volume of activity, with 500 issues and 500 pull requests updated in the last 24 hours (89% and 93% open/active rates, respectively). This surge coincides with the recent rollout of the `v2026.6.9-beta.1` release and the broader 2026.6.x stable branch. While the community is highly engaged in contributing fixes and feature requests, the maintainers are currently navigating a backlog of regression bugs related to core infrastructure migrations. Key thematic areas of focus include stabilizing the new SQLite session/cron store, fixing multi-agent memory handling, and patching channel-specific message delivery failures.

### 2. Releases
- **[v2026.6.9-beta.1](https://github.com/openclaw/openclaw/releases)**
  - **Highlights:** Major upgrades to the Telegram delivery pipeline. Telegram now sends rich HTML, preserves markdown and sticker paths, and renders progress drafts more faithfully. 
  - **Migration Notes:** This release continues the underlying transition to SQLite for core session/transcript runtime-state management.

### 3. Project Progress
Active PRs today focused on hardening message delivery, refining multi-agent memory, and patching provider compatibility:
- **[PR #88992](https://github.com/openclaw/openclaw/pull/88992)**: Fixed silent message loss in `message_tool_only` mode, ensuring replies are recovered if the LLM forgets to call the delivery tool.
- **[PR #89039](https://github.com/openclaw/openclaw/pull/89039)**: Patched `EmbeddedAttemptSessionTakeoverError` that caused message loss during OpenAI SDK internal retries.
- **[PR #88504](https://github.com/openclaw/openclaw/pull/88504)**: Introduced a multi-slot memory role architecture, allowing memory plugins to compose capabilities rather than overwriting a single global slot.
- **[PR #95101](https://github.com/openclaw/openclaw/pull/95101)**: Optimized LanceDB memory performance by caching query embeddings, significantly reducing remote embed latency during vector scans.
- **[PR #94884](https://github.com/openclaw/openclaw/pull/94884) & [PR #94633](https://github.com/openclaw/openclaw/pull/94633)**: Fixed Feishu bitable tools generating invalid JSON schemas rejected by strict validators (like AWS Bedrock).

### 4. Community Hot Topics
The community is heavily focused on the reliability of automated workflows and state management following the recent upgrades.
- **[Issue #88838](https://github.com/openclaw/openclaw/issues/88838) (31 comments)**: Tracking the core session/transcript SQLite migration. Users and maintainers are actively discussing using a "branch-by-abstraction" seam to avoid landing high-risk rewrites all at once.
- **[Issue #63829](https://github.com/openclaw/openclaw/issues/63829) (9 comments, 9 👍)**: Request for per-agent memory-wiki vault configuration. Users running multi-agent setups want strict knowledge isolation rather than a shared global memory vault.
- **[Issue #93794](https://github.com/openclaw/openclaw/issues/93794) (5 comments, 8 👍)**: A highly-upvoted complaint that recent updates broke Telegram Web compatibility, locking users out of their standard workflows.

### 5. Bugs & Stability
Several critical regressions and bugs have been reported, largely tied to the 2026.6.x update cycle:
- **P0 - Gateway Memory Leak ([Issue #91588](https://github.com/openclaw/openclaw/issues/91588))**: The gateway process suffers a severe RSS memory leak (350MB to 15.5GB over days), causing OOM crashes and `launchd-handoff` restart loops. 
- **P1 - Active Memory Destroys Prompt Cache ([Issue #91223](https://github.com/openclaw/openclaw/issues/91223))**: The `active-memory` plugin breaks prompt caching, causing hit rates to plummet from 99.9% to 22%, drastically increasing latency and cost.
- **P1 - `openclaw doctor --fix` Performance Regression ([Issue #85333](https://github.com/openclaw/openclaw/issues/85333))**: The diagnostic tool became 4-5x slower (55s to 229s+) due to session snapshot path traversal bottlenecks.
- **P1 - Bootstrap Data Loss ([Issue #91931](https://github.com/openclaw/openclaw/issues/91931))**: Preseeded `SOUL.md` files trick OpenClaw into marking bootstrap as complete, resulting in the deletion of user-provided `BOOTSTRAP.md` files.

### 6. Feature Requests & Roadmap Signals
Based on recent issues and PRs, the immediate roadmap leans heavily into memory isolation and UX refinements:
- **Topic-Session Families ([Issue #90916](https://github.com/openclaw/openclaw/issues/90916))**: Allowing a single assistant to maintain multiple named topic lanes with isolated context.
- **Bounded Memory Appends ([Issue #90354](https://github.com/openclaw/openclaw/issues/90354)) & Multi-slot Memory ([PR #88504](https://github.com/openclaw/openclaw/pull/88504))**: Hard guardrails on memory flushes and better plugin memory composition are actively being merged, signaling a robust overhaul of the memory subsystem soon.
- **Webchat UI Buttons ([Issue #46656](https://github.com/openclaw/openclaw/issues/46656))**: Bringing Telegram-level inline interactive buttons to the Webchat Control UI.

### 7. User Feedback Summary
Users are heavily utilizing OpenClaw in enterprise and power-user scenarios (large context windows, automated cron jobs, multi-agent setups). However, the transition to SQLite and the release of 2026.6.1 introduced friction. Dissatisfaction is centered around silent failure modes—such as messages failing to deliver to Slack or Feishu without logging clear errors, and compaction timeouts breaking long sessions. Meanwhile, users praise the expanding channel ecosystem (Telegram, Matrix, Feishu) but need better stability guarantees when crossing the 200K context limit.

### 8. Backlog Watch
The maintainer team needs to address several long-standing, high-impact items that are currently stale or trapped in review:
- **[Issue #85334](https://github.com/openclaw/openclaw/issues/85334)**: `openclaw doctor --fix` automatically injects plugin paths that trigger circular warnings. Open since May 22.
- **[Issue #78640](https://github.com/openclaw/openclaw/issues/78640)**: Windows memory reindexing fails with `EPERM` errors. Previous fixes attempted via copy/unlink fallbacks have not resolved the issue. Open since May 6.
- **[PR #90923](https://github.com/openclaw/openclaw/pull/90923)**: Fixes macOS `launchd` failing to bootstrap when `$HOME` is on an external APFS volume. Currently waiting on author/reviewer loop since June 6.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the June 20, 2026 community digests.

### 1. Ecosystem Overview
As of mid-2026, the open-source personal AI assistant and agent ecosystem is experiencing massive growth, driven primarily by the transition from simple chatbots to autonomous, multi-agent, and cron-driven workflows. Projects are aggressively iterating to expand multi-channel integrations (Discord, Telegram, Matrix, Enterprise messengers) and support diverse, often strict, LLM provider APIs. A clear developmental frontier has emerged focused on production-readiness, with maintainers prioritizing enterprise features like granular RBAC, sandboxing, and strict guardrails against data exfiltration (SSRF). Meanwhile, the underlying architectures are maturing, moving away from ephemeral states toward durable SQL-based session management and sophisticated, isolated memory subsystems.

### 2. Activity Comparison
*Note: Health scores are estimated based on PR/Issue volume, release cadence, bug resolution rate, and community engagement momentum.*

| Project | Issues (24h Activity) | PRs (24h Activity) | Recent Release Status | Health Score | Activity Tier |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 updated (89% open) | 500 updated (93% open) | `v2026.6.9-beta.1` | 8.5/10 (High velocity, bug backlog) | Tier 1 (Explosive) |
| **Hermes Agent** | 50 updated | 50 updated | `v0.17.0` (Massive drop) | 9.5/10 (Robust, highly active) | Tier 1 (Explosive) |
| **ZeroClaw** | 50 updated | 50 updated (15 merged) | `v0.8.1` | 9.0/10 (Rapid stabilization) | Tier 1 (Explosive) |
| **NanoBot** | 9 updated (6 closed) | 33 updated (19 merged) | None (Pending v0.2.x) | 8.5/10 (Healthy, high merge rate)| Tier 2 (High) |
| **CoPaw** | 11 updated | 17 updated (6 merged) | None (v1.1.12 rolled out)| 8.0/10 (Stable, reactive) | Tier 2 (High) |
| **IronClaw** | 5 updated | 28 updated (12 merged) | None (Major internal overhaul)| 8.0/10 (Heavy iteration) | Tier 2 (High) |
| **NanoClaw** | ~0 closed | 14 updated (0 merged) | None (Pending v2.1.17) | 6.5/10 (Bottlenecked reviews) | Tier 3 (Moderate) |
| **PicoClaw** | ~Moderate | 1 merged | `v0.3.0-nightly` | 7.0/10 (Maturing, congested)| Tier 3 (Moderate) |
| **LobsterAI**| 3 closed | 0 updated | `2026.6.18` | 7.5/10 (Stabilizing phase) | Tier 3 (Moderate) |
| **NullClaw** | 2 updated | 1 open | None | 5.0/10 (Niche/Maintenance) | Tier 4 (Low) |
| **TinyClaw, Moltis, ZeptoClaw** | 0 | 0 | N/A | N/A | Dormant |

### 3. OpenClaw's Position
**Advantages:** OpenClaw boasts the highest absolute volume of community engagement in the ecosystem (500 issues/PRs in 24h), indicating a massive, highly active user base pushing the tool to its limits. It is deeply entrenched in enterprise and power-user workflows, specifically handling massive context windows (>200k tokens) and complex multi-agent setups.
**Technical Approach Differences:** Unlike peers relying on traditional file-based session states (like NanoBot's legacy directories), OpenClaw is undergoing a risky but necessary migration to an SQLite-based runtime-state management system. Furthermore, it is pioneering a "multi-slot memory role architecture," allowing plugins to compose memory capabilities dynamically rather than overwriting a single global slot.
**Community Size Comparison:** While Hermes Agent just closed 300 issues with 245 contributors in its latest mega-release, OpenClaw's daily raw volume of active tickets is roughly 10x that of ZeroClaw or Hermes. However, OpenClaw's massive scale is currently its biggest Achilles' heel; it is struggling with a backlog of regression bugs (OOM leaks, broken prompt caching) that are degrading the user experience compared to the more agile NanoBot or tightly engineered IronClaw.

### 4. Shared Technical Focus Areas
Several converging requirements are dictating the roadmaps of these projects:
*   **LLM Provider Compatibility & Fallbacks:** Strict OpenAI-compatible APIs (Fireworks, Bedrock, Alibaba, Zhipu AI, DeepSeek) are breaking internal schemas. *(Projects: OpenClaw, IronClaw, CoPaw, Hermes Agent)*.
*   **Context Window & Memory Management:** Systems are failing under long-running sessions or multi-model setups. There is a universal demand for durable memory isolation, per-project context, and deterministic tool-output compression to preserve prompt caches. *(Projects: OpenClaw, NanoBot, Hermes Agent, PicoClaw, LobsterAI)*.
*   **Security & Sandboxing:** Surfacing safe execution boundaries for AI agents is critical. Teams are urgently patching SSRF vulnerabilities (ISATAP literals, IP classifiers) and implementing granular permission models for tool execution. *(Projects: PicoClaw, NanoClaw, ZeroClaw, IronClaw)*.
*   **Multi-Channel Delivery Reliability:** Users want seamless cross-platform deployment, but projects are fighting silent message drops, Discord chunking limits (>2000 chars), and broken Feishu/Slack card rendering. *(Projects: OpenClaw, NanoBot, ZeroClaw, NullClaw)*.

### 5. Differentiation Analysis
*   **Architecture & Language:** *IronClaw* (Rust-leaning, utilizing `mold` linker for speed) and *ZeroClaw* (WASM component plugins) represent a highly compiled, systems-level approach to agent frameworks. Conversely, *OpenClaw* and *NanoBot* appear more Python/JS-centric, prioritizing rapid plugin iteration. *NullClaw* is unique in its deep Zig 0.16 stdlib integration, targeting highly portable, bare-metal deployments.
*   **Target Audience:** *LobsterAI* is pivoting toward citizen developers and enterprise productivity (focusing on Word/PPT/Excel artifact generation). *IronClaw* and *PicoClaw* are zeroing in on local, self-hosted power users who execute terminal/shell commands. *OpenClaw* and *Hermes Agent* target massive enterprise deployments requiring concurrent multi-agent orchestration and complex API gateways.
*   **Maturity of Multi-Agent Systems:** *NanoBot* is actively developing UI pausing and sub-agent orchestration (aggregated result modes). *PicoClaw* is building a dedicated "Agent Collaboration Bus" with isolated mailboxes. *ZeroClaw* is already stabilizing its multi-agent runtime released in v0.8.0.

### 6. Community Momentum & Maturity
*   **Rapidly Iterating (High Momentum):** *Hermes Agent* and *ZeroClaw* are riding massive release waves (v0.17.0 and v0.8.1, respectively), converting community hype into rapid feature drops. *NanoBot* is highly agile, merging 19 PRs in a single day, showing highly responsive maintainers.
*   **Stabilizing (Scaling Pains):** *OpenClaw* is currently drowning in its own success; its transition to SQLite and 2026.6.x branch has introduced P0 memory leaks and broken prompt caches that must be stabilized. *CoPaw* is also in a bug-fixing/UX stabilization phase following its v1.1.12 release.
*   **Bottlenecked/Stale:** *NanoClaw* has 14 high-quality, regression-tested PRs peer-reviewed by the community but is bottlenecked by absent maintainer merges. *PicoClaw* has vital multi-agent architecture PRs stuck in limbo. *NullClaw* is functional but niche, moving at the speed of its specialized Zig/Android environment.

### 7. Trend Signals
For technical decision-makers and AI agent developers, the June 20, 2026 telemetry highlights three actionable industry trends:
1.  **The "Approval UX" Bottleneck:** As agents gain the ability to execute shell commands and write files, autonomous success relies heavily on human-in-the-loop UI. *IronClaw* and *PicoClaw* users report that cluttered approval modals or lack of granular RBAC (e.g., blocking shell commands in group Telegram chats) are primary blockers. Developers must build clean, permission-aware execution boundaries.
2.  **Context Compression over Raw Token Hoarding:** Projects like *Hermes Agent* (seeking `headroom-ai` integration) and *ZeroClaw* (fixing default 32k context bloat) indicate that simply increasing context windows is economically and technically unviable. Deterministic, fast tool-output compression is becoming a mandatory feature.
3.  **The Rise of Edge & Mobile Agents:** There is a surprising surge of users attempting to run local agents on edge devices. *NullClaw* users are forcing HTTP routing through curl on Android/Termux, and *ZeroClaw* users on low-end edge devices are requesting automated file cleanup blocks. Agent developers should ensure WASM or lightweight runtimes are prioritized to capture the "on-device personal assistant" market.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the project digest for **HKUDS/nanobot** covering the recent project activity as of **2026-06-20**.

### 1. Today's Overview
NanoBot is currently experiencing a highly active and healthy development phase, characterized by a robust Pull Request pipeline and strong community engagement. With 33 PRs updated (19 merged/closed) and 9 issues updated (6 closed) in the last 24 hours, the project maintainers are clearly aggressive about merging community contributions and resolving user pain points. The project is pushing the boundaries of its agentic capabilities, with major architectural refactors focusing on subagent orchestration, cron-job handling, and multi-channel integrations. The introduction of new UI components, offline capabilities, and advanced tooling suspensions indicates a strong push towards production-readiness and complex enterprise use cases.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
Significant project advancements were merged or closed today, particularly around channel integrations, developer tools, and system stability:
*   **Discord Overhaul Merged:** The massive Discord integration rewrite ([PR #2655](https://github.com/HKUDS/nanobot/pull/2655)) was closed, bringing the bot up to `discord.py 2.x`, adding slash commands, and replacing the raw WebSocket implementation for better stability.
*   **Feishu Integration Hardened:** Fixed critical structural mismatches that caused WebSocket rendered cards to display as placeholders ([PR #4342](https://github.com/HKUDS/nanobot/pull/4342)).
*   **Session & History Fixes:** Resolved a dangerous bug where deleted sessions would "revive" because `delete_session()` wasn't cleaning up legacy global directory paths ([PR #4246](https://github.com/HKUDS/nanobot/pull/4246)).
*   **OpenAI Image Edits:** Closed a PR that successfully routed reference images to `/images/edits` for OpenAI models ([PR #4394](https://github.com/HKUDS/nanobot/pull/4394)).
*   **MCP Timeout:** Fixed an issue where `streamableHttp` connections could hang indefinitely due to disabled timeouts ([PR #4230](https://github.com/HKUDS/nanobot/pull/4230)).
*   **Offline Token Estimation:** Closed a fix that avoids network loads during token estimation, allowing NanoBot to work in air-gapped/offline environments using local caches ([PR #3662](https://github.com/HKUDS/nanobot/pull/3662)).

### 4. Community Hot Topics
*   **[Issue #4013](https://github.com/HKUDS/nanobot/issues/4013) - LLM Stream Stalling (5 comments):** Users reported critical breakage in v0.2.0 where LLM streams stall after 90 seconds, rendering workflows useless. This highlights a massive pain point for users running complex or long-running agent tasks.
*   **[Issue #4374](https://github.com/HKUDS/nanobot/issues/4374) - Workspace Read/Write Asymmetry (3 comments):** Discussion around the newly added project workspaces. Users found that while context files (`SOUL.md`, `AGENTS.md`) are *read* from the current project, the agent *writes* to the default workspace. This reveals a deep user desire for strictly sandboxed, per-project agent memory.

### 5. Bugs & Stability
Ranked by severity:
1.  **Critical: Silent Cron Notifications Spam** ([Issue #4410](https://github.com/HKUDS/nanobot/issues/4410)) - A post-0.1.5 regression where heartbeat cron jobs send messages to users even when the LLM has nothing to report. *(Fix proposed in [PR #4412](https://github.com/HKUDS/nanobot/pull/4412))*.
2.  **High: LLM Fallback Failures** ([Issue #4287](https://github.com/HKUDS/nanobot/issues/4287)) - Empty API responses (common during provider peak hours) are incorrectly classified as "non-fallbackable", causing agents to halt unexpectedly. *(Closed/Resolved)*.
3.  **High: Image-Strip Hallucination** ([Issue #4345](https://github.com/HKUDS/nanobot/issues/4345)) - A built-in fallback that strips images when a model fails caused the model to hallucinate that it saw an image, and leaked the local file path into the prompt. *(Closed/Resolved)*.
4.  **Medium: MCP Progress Validation Crash** ([Issue #4052](https://github.com/HKUDS/nanobot/issues/4052)) - Pydantic validation crashes in v0.2.0 when MCP servers send standard `notifications/progress` during long operations. *(Closed/Resolved)*.

### 6. Feature Requests & Roadmap Signals
Several new PRs opened today indicate the immediate trajectory of the project:
*   **Advanced Subagent Orchestration:** [PR #4414](https://github.com/HKUDS/nanobot/pull/4414) (Aggregated result mode) and [PR #4415](https://github.com/HKUDS/nanobot/pull/4415) (Spawn model override) show a strong push towards making sub-agents highly configurable and performant.
*   **Human-in-the-Loop Pausing:** [PR #4411](https://github.com/HKUDS/nanobot/pull/4411) introduces `SuspendTurn`, a sentinel tool allowing agents to cleanly pause their execution and wait for human input asynchronously. 
*   **CLI TUI Experience:** [PR #4329](https://github.com/HKUDS/nanobot/pull/4329) adds an inline Terminal User Interface, moving away from basic CLI line inputs.
*   **Prediction for Next Version:** The next release (likely v0.2.2 or v0.3.0) will almost certainly focus on **Subagent Orchestration** and **Human-in-the-loop workflows**, combined with the much-needed Cron/Heartbeat stability fixes.

### 7. User Feedback Summary
*   **Pain Points:** Users are increasingly reliant on NanoBot for scheduled background tasks (Heartbeats/Cron), but recent regressions causing notification spam or execution failures have frustrated power users. Additionally, provider API instability (empty responses) is exposing weaknesses in NanoBot's fallback chains.
*   **Use Cases:** Users are heavily utilizing the bot for continuous background operations (Cron jobs via Telegram), multi-channel deployment (Discord, Feishu, XMPP), and complex workspace memory management. There is also a notable segment using the bot in strictly offline, privacy-focused enterprise environments (as seen by the offline token estimation PR).
*   **Sentiment:** Overall satisfaction is high. Users praise the transition from 0.1.5 to 0.2.x for its features, though they expect rapid patching of the regressions that accompanied the major architectural shifts.

### 8. Backlog Watch
*   **[PR #1945](https://github.com/HKUDS/nanobot/pull/1945) - XMPP Channel Support:** Open since March 12th. Community members are actively using this for self-hosted environments (like Snikket), but it awaits merging.
*   **[PR #3591](https://github.com/HKUDS/nanobot/pull/3591) - Dream Update Scope Controls:** Open since May. Gives users granular control to restrict automatic memory consolidation to avoid "skill drift." Needs maintainer review as it touches core agent memory architecture.
*   **[Issue #4389](https://github.com/HKUDS/nanobot/issues/4389) - Per-model Context Window Tokens:** Currently, the context window is defined globally per agent. Users running fallback models with smaller context windows need the system to dynamically trim prompts per-model. This remains unaddressed and could cause crashes for users relying on cheaper fallback LLMs.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the project digest for the Hermes Agent, summarizing activity and project health as of 2026-06-20.

### 1. Today's Overview
The Hermes Agent project is experiencing explosive activity and robust health, currently riding the momentum of its massive **v0.17.0 ("The Reach Release")**. In the last 24 hours, the community and maintainers interacted with 50 issues and 50 PRs, with an overwhelming 90% of these items remaining actively open or in review. This indicates a rapid iteration cycle where new features, bug reports, and community contributions are being generated faster than the project can merge them. The focus has clearly shifted from desktop deployment (v0.16.0) to scaling agent integrations, gateway reliability, and expanding provider support (DeepSeek, Zhipu AI, Anthropic).

### 2. Releases
*   **[Hermes Agent v0.17.0 (v2026.6.19)](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.6.19)** - *"The Reach Release."*
    *   **Scale of Changes:** A massive milestone encompassing ~1,475 commits, ~800 merged PRs, and over 235,000 lines of code inserted across 1,693 files.
    *   **Community Impact:** Over 300 issues were closed in this cycle, supported by 245 community contributors.
    *   **Theme:** Following the desktop launch in v0.16.0, v0.17.0 focuses on "Reach"—expanding the agent's interoperability across platforms, model providers, and agentic protocols.

### 3. Project Progress
While v0.17.0 just dropped, maintainers and contributors are already pushing v0.18.0 cycle fixes and performance enhancements:
*   **Performance Boosts:** Significant backend optimizations were merged/closed today, including replacing O(N) session counting with a single SQL `GROUP BY` query in the dashboard, reducing load times from ~575ms to <1ms ([PR #48921](https://github.com/NousResearch/hermes-agent/pull/48921)).
*   **Platform Stability:** A fix was merged to hide sidecar sessions from dashboard history ([PR #49269](https://github.com/NousResearch/hermes-agent/pull/49269)), cleaning up the UI.
*   **CI Refactoring:** Major architectural improvements to CI pipelines were submitted to run only affected test lanes and move Docker builds off PR checks, which will drastically speed up development velocity ([PR #49272](https://github.com/NousResearch/hermes-agent/pull/49272)).

### 4. Community Hot Topics
The most actively discussed items revolve around secure credentials, context optimization, and multi-platform support:
*   **Zero-Knowledge Credentials:** [Issue #4656](https://github.com/NousResearch/hermes-agent/issues/4656) (11 comments) discusses a credential proxy daemon. Users are highly invested in closing security gaps where child processes might leak configs.
*   **Tool Output Compression:** [Issue #39691](https://github.com/NousResearch/hermes-agent/issues/39691) (9 reactions) requests integrating `headroom-ai`. Users are finding that LLM-based whole-context compression is too slow and expensive, signaling a strong need for deterministic, fast tool-output compression.
*   **Zulip Integration:** [Issue #49229](https://github.com/NousResearch/hermes-agent/issues/49229) shows strong demand for a first-class Zulip platform adapter to match the existing Telegram/Matrix gateways.

### 5. Bugs & Stability
Several high-priority (P1/P2) bugs have been reported, though patches are already flowing in:
*   **[P1] Python Updater Crash:** `hermes update` fails on macOS Homebrew Python 3.14 due to PEP 668 violations ([Issue #48721](https://github.com/NousResearch/hermes-agent/issues/48721)).
*   **[P1] Cron/Background Process Crashes:** Background processes are killed if they write anything to stderr. *Fix proposed in [PR #49214](https://github.com/NousResearch/hermes-agent/pull/49214).*
*   **[P1] Auth Token Rotation:** OpenAI Codex multi-profile setups lose access when rotated tokens aren't written back to the root grant. *Fix proposed in [PR #49127](https://github.com/NousResearch/hermes-agent/pull/49127).*
*   **[P2] Strict Provider Rejections:** Multiple bugs (e.g., [Issue #47868](https://github.com/NousResearch/hermes-agent/issues/47868), [Issue #48523](https://github.com/NousResearch/hermes-agent/issues/48523)) report that strict OpenAI-compatible providers (like Fireworks/GLM) reject internal Hermes metadata (timestamps, message IDs) leaking into the API payload.
*   **[P2] Desktop UI Annoyances:** Users report erratic chat scrolling ([Issue #47795](https://github.com/NousResearch/hermes-agent/issues/47795)) and custom protocol handlers (like `bitbrowser://`) auto-triggering on hover ([Issue #47500](https://github.com/NousResearch/hermes-agent/issues/47500)).

### 6. Feature Requests & Roadmap Signals
Based on current trends, the next version will likely double down on **Model Context Protocol (MCP)**, **Agentic Collaboration**, and **New Provider Support**:
*   **Agentic Context:** Ongoing discussions around context compression (#39691) and background memory curation loops ([Issue #32858](https://github.com/NousResearch/hermes-agent/issues/32858)) indicate memory architecture is getting an overhaul.
*   **Model Provider Expansion:** Several requests today target adding native reasoning support for **GLM-5.x** ([Issue #49279](https://github.com/NousResearch/hermes-agent/issues/49279)) and fixing DeepSeek/Zhipu AI routing.
*   **ACP (Agent Communication Protocol):** Continuous bugs around ACP session stranding ([Issue #49226](https://github.com/NousResearch/hermes-agent/issues/49226)) show active development in making Hermes interoperate with external agent clients (like VS Code and AionUI).

### 7. User Feedback Summary
Users are enthusiastic about Hermes' vast provider support and desktop app, but frustration is mounting around **environment management** and **UI friction**. For instance, Windows users are struggling with path resolution for Node/npm during WhatsApp setup ([Issue #49242](https://github.com/NousResearch/hermes-agent/issues/49242)), and macOS users hit Python versioning walls ([Issue #48721](https://github.com/NousResearch/hermes-agent/issues/48721)). Advanced users leveraging custom strict API providers frequently note schema rejection bugs. However, the rapid submission of highly technical, well-scoped PRs by the community shows an exceptionally high-skill, engaged, and supportive user base.

### 8. Backlog Watch
*   **MCP Integration Parity:** There are continuous complaints that MCP tools are discovered but fail to load in TUI mode due to a 0.75s timeout race condition ([Issue #47121](https://github.com/NousResearch/hermes-agent/issues/47121) - Closed/Duplicate, [Issue #41625](https://github.com/NousResearch/hermes-agent/issues/41625)). Maintainers need to ensure timeout scaling is patched globally.
*   **CLI Markdown Rendering:** [Issue #20084](https://github.com/NousResearch/hermes-agent/issues/20084) (Open since May 5) highlights that code blocks are stripping C/C++ pointer asterisks (`*`), rendering code unreadable. This is a low-complexity but high-visibility UI bug that needs addressing.
*   **CJK Memory Entity Extraction:** [PR #24431](https://github.com/NousResearch/hermes-agent/pull/24431) (Open since May 12) fixes a critical flaw where the memory plugin completely ignores Chinese/Japanese/Korean text. This is vital for international adoption and needs a maintainer review.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the structured project digest for PicoClaw based on the provided GitHub data.

### 1. Today's Overview
As of 2026-06-20, the PicoClaw project exhibits active and steady development, characterized by the recent rollout of a new v0.3.0 nightly build. The community is highly engaged in stress-testing the agent's boundaries, with today's activity highlighting significant focus on complex multi-agent workflows, security hardening, and cross-platform stability. While the PR pipeline is currently congested with several stale but high-quality community contributions awaiting review, the ongoing discussions around agent architecture and memory management indicate a maturing ecosystem aiming for production-level reliability.

### 2. Releases
*   **[nightly] Nightly Build (v0.3.0-nightly.20260619.287853ab)**
    *   **Summary:** An automated nightly build targeting the upcoming v0.3.0 milestone.
    *   **Migration/Usage Notes:** Explicitly marked as potentially unstable. Users and integrators are advised to use it with caution. The v0.3.0 cycle appears heavily focused on security boundaries (SSRF, permission controls) and agent collaboration.

### 3. Project Progress
Today saw **1 PR merged/closed**, alongside active progress on major feature pipelines:
*   **[PR #2956](https://github.com/sipeed/picoclaw/pull/2956) (Closed):** Fixed a configuration regression where channels configured as `enabled: true` were inadvertently disabled during the `.security.yml` merge process. This immediately improves the deployment experience for Telegram and other channel integrations.

### 4. Community Hot Topics
The community is actively pushing PicoClaw into more sophisticated, multi-user environments, which is generating lively discussions:
*   **Agent "Amnesia" ([Issue #3150](https://github.com/sipeed/picoclaw/issues/3150)):** A newly reported, highly discussed bug where the agent loses its memory context mid-session. This reflects the growing complexity of PicoClaw's memory management as user sessions become longer and more complex.
*   **Telegram Granular Permissions ([Issue #3114](https://github.com/sipeed/picoclaw/issues/3114)):** Users are strongly requesting role-based access control (RBAC) for Telegram (e.g., allowing shell commands in private chats but blocking them in groups). The underlying need here is *safety*; users want to deploy PicoClaw in public or semi-public chat groups without risking dangerous command execution.

### 5. Bugs & Stability
Today's bug reports and fixes highlight edge cases in file operations and web security:
1.  **High/Critical:** SSRF Guard Bypass via ISATAP literals **[PR #3143](https://github.com/sipeed/picoclaw/pull/3143)**. A proactive patch that fixes a bypass in the `web_fetch` IP classifier (Issue #3074). Without this, malicious actors could force the agent to access private IPv4 addresses. *Fix PR is currently open and pending merge.*
2.  **High:** Agent Memory Loss **[Issue #3150](https://github.com/sipeed/picoclaw/issues/3150)**. The agent unexpectedly wipes its own context ("它给自己整失忆了"). This severely impacts usability for continuous task execution. *No fix PR yet.*
3.  **Medium/Stale:** Windows Path Separator Bug **[Issue #2472](https://github.com/sipeed/picoclaw/issues/2472)**. The `list_dir` tool crashes on Windows because it passes backslashes (`\`) to Go's `os.Root`. Hinders local Windows deployments. *No fix PR yet.*

### 6. Feature Requests & Roadmap Signals
Analysis of open issues and PRs reveals a strong roadmap signal pointing toward **Enterprise & Multi-Agent Capabilities** for the v0.3.0 release:
*   **Agent Collaboration Bus ([PR #2937](https://github.com/sipeed/picoclaw/pull/2937)):** Introduces a first-class internal communication layer with per-agent mailboxes, isolated histories, and permission-aware messaging. This signals PicoClaw is moving from a single-agent assistant to a multi-agent orchestration framework.
*   **Matrix Protocol ID Support ([PR #3045](https://github.com/sipeed/picoclaw/pull/3045)):** Enhances compatibility with Matrix `@user:domain` formats, showing a commitment to decentralized communication platforms.
*   **MCP CLI Improvements ([PR #3048](https://github.com/sipeed/picoclaw/pull/3048)):** Fixes argument parsing for the Model Context Protocol (MCP), indicating active refinement of how PicoClaw connects to external tools.

### 7. User Feedback Summary
Overall, user feedback indicates a powerful tool that is successfully being stretched beyond basic chatbot functionality. **Pain points** primarily center on deployment friction—specifically Windows compatibility issues ([#2472](https://github.com/sipeed/picoclaw/issues/2472)) and strict configuration overrides ([PR #2956](https://github.com/sipeed/picoclaw/pull/2956)). **Use cases** are heavily leaning toward deploying the AI assistant as an interactive bot in group settings (Telegram, Matrix), which naturally surfaces the urgent need for robust security boundaries and granular permission controls.

### 8. Backlog Watch
The maintainer team needs to address a growing backlog of stale, high-value PRs that have been stuck in an "open" state for over 10 days. These require urgent review to keep community momentum alive:
*   **[PR #2937](https://github.com/sipeed/picoclaw/pull/2937):** `Feat/agent collaboration` (Open since May 24). A massive architectural addition that is currently blocking downstream multi-agent features.
*   **[PR #3053](https://github.com/sipeed/picoclaw/pull/3053) & [PR #3091](https://github.com/sipeed/picoclaw/pull/3091):** Stale PRs fixing unchecked type assertions (`sync.Map` and `native_search`). These are quick, high-impact stability fixes that prevent silent panics.
*   **[Issue #2472](https://github.com/sipeed/picoclaw/issues/2472):** Windows directory listing bug (Open since April 10). At over two months old with 6 comments, this needs either an official fix or a maintainers' status update to reassure Windows users.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the structured project digest for NanoClaw based on the provided GitHub data.

# NanoClaw Project Digest
**Date:** 2026-06-20
**Repository:** [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw)

---

### 1. Today's Overview
NanoClaw is currently experiencing a highly active contribution cycle with a significant backlog of **14 open Pull Requests** updated in the last 24 hours and zero merges. The project's velocity appears bottlenecked, likely awaiting maintainer review, as no PRs or Issues were closed today and no new releases were cut. However, the open contributions indicate strong community engagement, particularly focusing on hardening platform security, fixing channel message routing (specifically for Discord), and expanding runtime capabilities (like Apple Container support). The project's underlying health is solid, with contributors actively writing regression tests and replacing older PRs with stricter, production-ready code.

### 2. Releases
*No new releases were published today.* 
*(Note: PR #2798 indicates the community is preparing/expanding the CHANGELOG for v2.1.17, suggesting the last release was recent and a subsequent patch may be pending).*

### 3. Project Progress
Because no PRs were merged today, project progress is reflected through active pending additions and internal refactoring:
*   **New Integrations & Skills:** Progress on an Apple Container runtime and remote OneCLI gateway ([PR #2809](https://github.com/nanocoai/nanoclaw/pull/2809)), a read-only CLI-derived dashboard skill ([PR #2795](https://github.com/nanocoai/nanoclaw/pull/2795)), and iMessage channel scaffolding fixes ([PR #2792](https://github.com/nanocoai/nanoclaw/pull/2792)).
*   **Internal Refactoring:** Several contributors are iterating on top of each other to provide stricter security validation and better regression coverage, replacing older PRs with newer, more robust versions (e.g., security PRs #2818 replacing #2817, and Discord PR #2816 replacing #2812). 

### 4. Community Hot Topics
*   **[PR #2605: Inherit parent agent permissions via OneCLI](https://github.com/nanocoai/nanoclaw/pull/2605)** - Open since late May, this feature was updated today. It suggests a strong community need for complex, multi-tiered agent permission architectures using OneCLI.
*   **[PR #2809: Apple Container runtime + remote OneCLI gateway](https://github.com/nanocoai/nanoclaw/pull/2809)** - This introduces an alternative to Docker specifically for macOS environments. The need for this indicates a significant portion of the user base develops or deploys NanoClaw locally on Apple Silicon.
*   **[PR #2820: Persist delivery target on pending_approvals rows](https://github.com/nanocoai/nanoclaw/pull/2820)** - Highlights that approval routing is a critical enterprise use case for NanoClaw users, and they need reliable tracking of where approval cards are delivered across platforms.

### 5. Bugs & Stability
Ranked by severity:
1.  **[CRITICAL] Workspace File Traversal Vulnerability:** Addressed by [PR #2818](https://github.com/nanocoai/nanoclaw/pull/2818) and [PR #2817](https://github.com/nanocoai/nanoclaw/pull/2817). The `send_file` feature currently allows reads from unrestricted `/workspace` directories, allowing potential access to sensitive sibling mounts. Fix PR exists pending review.
2.  **[HIGH] Folder Injection via CLI:** Addressed by [PR #2814](https://github.com/nanocoai/nanoclaw/pull/2814). The `ncl groups create` CLI command lacked proper validation, allowing directory traversal attacks. Fix PR exists.
3.  **[MEDIUM] Discord Message Truncation:** Addressed by [PR #2812](https://github.com/nanocoai/nanoclaw/pull/2812) and [PR #2816](https://github.com/nanocoai/nanoclaw/pull/2816). The Discord adapter was silently truncating replies over 2000 characters instead of chunking them, leading to lost agent context. Fix PR exists.
4.  **[MEDIUM] Safe Parse Content Crashes:** Addressed by [PR #2801](https://github.com/nanocoai/nanoclaw/pull/2801) and [PR #2815](https://github.com/nanocoai/nanoclaw/pull/2815). The router's `safeParseContent` fails to handle primitive JSON payloads (e.g., `"5"`), breaking routing rules. Fix PR exists.
5.  **[LOW] Broken iMessage Installs:** Addressed by [PR #2792](https://github.com/nanocoai/nanoclaw/pull/2792). The `add-imessage` script crashes on fresh checkouts because it doesn't create the `src/channels/` directory first.

### 6. Feature Requests & Roadmap Signals
*   **Diversification of Runtimes:** [PR #2809](https://github.com/nanocoai/nanoclaw/pull/2809) clearly signals that moving away from hard Docker dependencies is a desired roadmap item, bringing native macOS virtualization into the fold.
*   **Advanced Permission Hierarchies:** [PR #2605](https://github.com/nanocoai/nanoclaw/pull/2605) shows users want agents to securely inherit context and permissions from parent agents.
*   **Predictions for Next Version:** The next version will almost certainly include the security and Discord chunking fixes currently vying for merge. The inclusion of the Apple Container runtime would make an excellent point-release if the maintainers want to push modern macOS support.

### 7. User Feedback Summary
*   **Pain Points:** Users setting up NanoClaw on fresh environments are hitting basic scaffolding errors (iMessage setup). Agent communication is occasionally lost on Discord due to silent truncation. There is clear frustration with approval routing, as delivery targets are currently lost (NULL), making audit trails impossible. 
*   **Use Cases:** Enterprise/complex deployments (requiring strict audit trails for approvals and granular agent permission scoping) and local macOS development.
*   **Satisfaction:** While there are bugs, community satisfaction and engagement appear incredibly high. Contributors are not just dropping 1-line fixes; they are actively peer-reviewing each other (e.g., [PR #2818](https://github.com/nanocoai/nanoclaw/pull/2818) explicitly builds on feedback from [PR #2817](https://github.com/nanocoai/nanoclaw/pull/2817)) and writing extensive regression tests, showing deep investment in the framework's stability.

### 8. Backlog Watch
*   **[PR #2605: Inherit parent agent permissions via OneCLI](https://github.com/nanocoai/nanoclaw/pull/2605):** This feature PR has been open for nearly a month (since May 24). It is highly requested (based on its type) but seemingly stalled. Maintainer review or feedback is urgently needed here to keep the contributor engaged.
*   **[Issue #2784: container-runner staleness check](https://github.com/nanocoai/nanoclaw/issues/2784):** Reported by masslbp, this issue highlights a dev-experience pain point where session syncs only watch `index.ts`, ignoring other vital file changes. Requires maintainer acknowledgment or a community PR.
*   **PR Merge Queue:** The maintainers need to process the 14 PRs updated today. Many are duplicate/replacement PRs targeting the exact same issues (e.g., Discord chunking, safeParse JSON, workspace security). Clearing this logjam will require the maintainer to select the best implementation for each and merge them to prevent contributor effort from going stale.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest
**Date:** 2026-06-20

### 1. Today's Overview
NullClaw currently exhibits a steady, focused state of maintenance with low-volume but highly targeted development activity. Over the past 24 hours, the project recorded updates to 2 open issues and 1 open pull request, with zero new releases. The development pipeline is presently concentrated on resolving environmental and networking blockers, specifically concerning cross-platform compatibility on mobile architectures like Android/Termux. While the overall ticket throughput is moderate, the ongoing PR directly addresses critical backend HTTP routing, suggesting maintainers are actively prioritizing platform stability.

### 2. Releases
*No new releases in the reported period.*

### 3. Project Progress
* **[PR #966](https://github.com/nullclaw/nullclaw/pull/966) `fix(http): route stdlib HTTP through curl on aarch64-linux-android` (OPEN):** This active pull request represents significant progress in mobile environment compatibility. It attempts to bypass the Zig 0.16 standard library's DNS resolution failures on Android/Termux by routing standard HTTP requests through `curl`, fixing a fundamental networking gap for mobile users. 

### 4. Community Hot Topics
The community's most active discussions are centered around mobile and third-party platform integrations:
* **[Issue #868](https://github.com/nullclaw/nullclaw/issues/868) `[bug] zig build fails on Android/Termux...`**: With 2 comments, this active discussion highlights the underlying need for NullClaw to function seamlessly as a local, on-device AI assistant on Android via Termux. Users are actively trying to run the engine on ARM64 mobile devices but are facing environment-specific file permission and linker errors.
* **[Issue #484](https://github.com/nullclaw/nullclaw/issues/484) `飞书无法联网查询` (Feishu cannot search the internet)**: Accumulating 3 comments, this thread underscores the demand for robust web-browsing capabilities when NullClaw is integrated into enterprise communication platforms like Lark/Feishu.

### 5. Bugs & Stability
Currently, the project's stability focus is entirely on deployment and networking environments:
1. **High Severity / Active Fix:** Android/Termux DNS Resolution & Build Failures. Users on `aarch64-linux-android` are experiencing complete breakdowns due to Zig 0.16 stdlib incompatibilities (`error.NameServerFailure` and `AccessDenied` on linkat).
   * *Status:* Actively being addressed by [PR #966](https://github.com/nullclaw/nullclaw/pull/966).
2. **Medium Severity:** Integration networking loss. Users leveraging NullClaw via the Feishu (Lark) bot framework are reporting a loss of web-access capabilities, effectively crippling the agent's ability to retrieve real-time data ([Issue #484](https://github.com/nullclaw/nullclaw/issues/484)). No active fix PR is currently open for this specific bug.

### 6. Feature Requests & Roadmap Signals
* **On-Device Mobile Deployment:** The influx of issues surrounding Termux, Android, and `aarch64` architecture indicates a strong user desire to run NullClaw locally on mobile hardware. 
* **Seamless Third-Party API Integrations:** Issue #484 signals that users are heavily relying on NullClaw as an automated agent within messaging apps (like Feishu), requiring robust, out-of-the-box web-search tools for these specific API wrappers.
* *Prediction:* Given the current open PR, the next minor or patch version release will likely feature explicit Termux/Android compatibility patches, potentially bundling curl as a fallback HTTP backend for mobile environments.

### 7. User Feedback Summary
User feedback today highlights specific pain points regarding deployment flexibility. Mobile power-users are frustrated by the friction of compiling and running the assistant on Android/Termux, citing standard library limitations in the underlying Zig language as a direct blocker. Meanwhile, enterprise users are expressing dissatisfaction with intermittent network failures when hooking NullClaw up to SaaS platforms like Feishu, indicating that while the core AI agent works, external tool-calling (like web scraping) requires more resilient error handling.

### 8. Backlog Watch
* **[Issue #484](https://github.com/nullclaw/nullclaw/issues/484)**: Created on 2026-03-13, this issue has now been open for over three months. With 3 comments and recent activity updating it on 2026-06-19, it indicates a persistent problem that lacks a linked PR or direct maintainer resolution. This long-standing bug requires triage to prevent alienating users utilizing the Feishu ecosystem.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest (2026-06-20)

**Repository:** [nearai/ironclaw](https://github.com/nearai/ironclaw)

## 1. Today's Overview
The IronClaw project exhibits exceptionally high development velocity and robust health, driven primarily by massive internal engineering efforts surrounding the "Reborn" architecture overhaul and Engine V2. Over the past 24 hours, the project processed 28 pull requests (merging 12) alongside 5 issue updates, indicating extremely active core-team iteration. The daily focus is heavily skewed toward backend durability, runtime performance, and CI/CD optimizations. While new feature delivery is rapid, the community is actively testing local deployments, surfacing crucial UX friction points in tool approval workflows and third-party LLM integrations.

## 2. Releases
**None.** 
There were no new version releases or tagged packages in the last 24 hours. The project remains in an intensive integration and stabilization phase for Reborn, suggesting the next release will likely be a major milestone rather than an incremental patch.

## 3. Project Progress
Significant architectural and infrastructure milestones were achieved today. The core team merged 12 PRs, advancing several key initiatives:
*   **Frontend & UX:** [PR #5019](https://github.com/nearai/ironclaw/pull/5019) fully lit up the "Projects" page in WebChat v2, moving from API stubs to real endpoints. [PR #5064](https://github.com/nearai/ironclaw/pull/5064) addressed leftover code review comments on the Projects port.
*   **Quality Assurance:** [PR #5096](https://github.com/nearai/ironclaw/pull/5096) ported 7 project-setup automation workflows to the Reborn QA recorded trace harness, while [PR #5095](https://github.com/nearai/ironclaw/pull/5095) added critical HTTP exchange and auth-gated LLM trace fixtures.
*   **Extension Ecosystems:** [PR #5037](https://github.com/nearai/ironclaw/pull/5037) improved extension discoverability by making `extension_search` discovery-only, stripping annoying credential prompts until a tool is actually activated.
*   **CI/CD Performance:** Massive CI pipeline optimizations were merged. [PR #5089](https://github.com/nearai/ironclaw/pull/5089) adopted the `mold` linker and lifted parallelism limits for a ~40% compile-time reduction, while [PR #5090](https://github.com/nearai/ironclaw/pull/5090) extended this to end-to-end testing jobs.

## 4. Community Hot Topics
*   **Approval UX Friction:** [Issue #5078](https://github.com/nearai/ironclaw/issues/5078) (Closed) and [Issue #5088](https://github.com/nearai/ironclaw/issues/5088) (Open) highlight that users are struggling with the shell execution approval modals. Specifically, large commands break the UI layout, and internal system commands (like `reads`) are confusingly surfaced to users as actions requiring manual approval. 
*   **Third-Party LLM Compatibility:** [Issue #1012](https://github.com/nearai/ironclaw/issues/1012) (Open, 1 👍) shows continued community desire to use models like the Alibaba Coding Plan via `openai_compatible` endpoints. The current implementation returns 405 errors, pointing to gaps in IronClaw's API translation layer.

## 5. Bugs & Stability
*   **High/Functional:** Nightly End-to-End (E2E) tests are currently failing. [Issue #4108](https://github.com/nearai/ironclaw/issues/4108) reports that the automated nightly run failed, blocking stable nightly releases until resolved.
*   **Medium/UX:** The shell approval prompt mislabeling (Issue #5088) severely degrades the local user experience. Users cannot easily parse what the agent is actually trying to execute.
*   **Low/Transient:** [Issue #1012](https://github.com/nearai/ironclaw/issues/1012) reports transient network/retry failures (HTTP 405) when attempting to route specific external models through the OpenAI-compatible proxy. 

## 6. Feature Requests & Roadmap Signals
Looking at the open PR pipeline, several major enterprise and scalability features are imminent:
*   **Granular Tool Permissions:** [PR #5062](https://github.com/nearai/ironclaw/pull/5062) introduces a `ToolPermissionState` enum (`always_allow`, `ask_each_time`, `disabled`) and per-user/tenant overrides, directly addressing the approval UX complaints.
*   **Enterprise Hosting:** [PR #5081](https://github.com/nearai/ironclaw/pull/5081) introduces a `hosted-single-tenant` profile using PostgreSQL for durable state, paving the way for official hosted previews.
*   **Concurrent Execution:** [PR #5085](https://github.com/nearai/ironclaw/pull/5085) breaks the serial execution bottleneck of LLM inference, implementing a `TurnRunScheduler` with per-user caps for true concurrent turn handling.
*   **Feature Flags:** [Issue #5091](https://github.com/nearai/ironclaw/issues/5091) requests a unified, per-tenant feature-flag system, indicating a shift toward A/B testing and gradual rollouts for the Reborn architecture.

## 7. User Feedback Summary
Local and self-hosted users are highly engaged with the new tool-execution features but are encountering significant UI/UX growing pains. The core use case of "locally executing AI-generated shell commands" is working, but users feel unsafe or annoyed by the approval modals. They report that the modals are either too cluttered with massive command strings or prompt for irrelevant internal capabilities (like `reads`). Satisfaction is high regarding the framework's extension ecosystem and multi-model support, but users demand better compatibility with diverse LLM providers like Alibaba.

## 8. Backlog Watch
*   **[Issue #1012](https://github.com/nearai/ironclaw/issues/1012) (Created 2026-03-12):** This Alibaba LLM compatibility bug has been open for over three months with only one interaction. Needs triage from the `scope: llm` team to align the OpenAI-compatible endpoint with alternative providers.
*   **[PR #4002](https://github.com/nearai/ironclaw/pull/4002) (Created 2026-05-24):** Dependabot PR bumping 16 GitHub Actions. It is nearly a month old and blocking dependency security patches. Needs a core maintainer to review and merge.
*   **[Issue #4108](https://github.com/nearai/ironclaw/issues/4108):** The failing Nightly E2E run needs immediate engineering attention to restore confidence in the `main` branch's stability.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-20

Here is the structured analytical digest for the LobsterAI project based on the last 24 hours of GitHub telemetry.

### 1. Today's Overview
LobsterAI is currently demonstrating a healthy operational cadence, characterized by steady issue triage and consistent version releases. Over the past 24 hours, project maintainers successfully closed three legacy bugs while community members contributed new, forward-looking feature proposals. The release of version `2026.6.18` just two days ago indicates continuous, active development with a strong focus on enhancing output usability (artifacts) and accessibility (voice input). The absence of merged PRs today is offset by the recent release and active issue management, suggesting the repository is in a stabilization phase following its latest feature drop.

### 2. Releases
*   **[LobsterAI 2026.6.18](https://github.com/netease-youdao/LobsterAI/releases)**
    *   **New Features:** Upgraded artifact sharing capabilities. Users can now generate and share a wider array of file types natively, including Word, PPT, Excel, PDF, Markdown, and Mermaid diagrams.
    *   **Bug Fixes:** Refined the voice input module by stripping back non-essential features to "keep only realtime ASR (Automatic Speech Recognition)." This indicates a push toward lower-latency, more reliable voice-to-text interactions.
    *   *Migration Notes:* No breaking changes or required migration steps were explicitly listed in the release notes.

### 3. Project Progress
While there were 0 Pull Requests updated or merged today, project progress is evident through repository cleanup and the implementation of the aforementioned `2026.6.18` release. The development team advanced the platform's file system interoperability (Artifacts) and streamlined the voice input pipeline, making the agent's outputs more portable across enterprise workflows.

### 4. Community Hot Topics
*   **[Issue #2180: Build "AI Collaborator" Form](https://github.com/netease-youdao/LobsterAI/issues/2180)** (Created today)
    *   *Analysis:* This is a highly detailed proposal aiming to evolve OpenClaw (a low-level toolset within the ecosystem) into a full-fledged "AI Collaborator platform." The underlying community need is clear: users want better **cross-model orchestration** and **project-level memory**. The proposal specifically targets "tech-savvy non-elite programmers," signaling a demographic shift toward empowering citizen developers who need visual/low-code interfaces to manage complex, multi-agent workflows.

### 5. Bugs & Stability
No critical crashes, regressions, or high-severity bugs were reported in the last 24 hours. Three older, lower-severity bugs were officially marked as closed/stale today:
*   **Low Severity:** [Issue #1487](https://github.com/netease-youdao/LobsterAI/issues/1487) - Python script execution errors within sessions when using local 30B models. (Status: Resolved/Stale)
*   **Low/Medium Severity (UX):** [Issue #1471](https://github.com/netease-youdao/LobsterAI/issues/1471) - Input box drafts were lost when switching sessions within 300ms due to debounce mechanisms clearing on unmount.
*   **Low/Medium Severity (UX):** [Issue #1472](https://github.com/netease-youdao/LobsterAI/issues/1472) - Editing historical messages silently overwrote unsent draft inputs without a confirmation prompt.
    *   *Note:* No specific fix PRs were linked in today's data snapshot for these issues, suggesting they were resolved in the recent `2026.6.18` release or closed due to inactivity.

### 6. Feature Requests & Roadmap Signals
Based on today's community input, we can predict the following roadmap signals for the next quarter:
*   **Cross-Model Orchestration:** As requested in [Issue #2180](https://github.com/netease-youdao/LobsterAI/issues/2180), the next major evolution may feature a natural language command bar to dispatch tasks across different LLMs simultaneously.
*   **Project-Level Memory:** Moving beyond session-specific memory to persistent, project-wide context, allowing AI collaborators to remember architecture decisions and codebases over time.

### 7. User Feedback Summary
Real user telemetry highlights a strong enterprise and prosumer use-case pattern. 
*   **Pain Points:** Historically, users expressed frustration with state management (losing unsent drafts) and friction when trying to run local models (e.g., 30B parameters) for Python scripting.
*   **Satisfaction:** The recent artifact sharing upgrades directly address user desires to export AI-generated content into standardized corporate formats (Word, Excel, PPT). Users are treating LobsterAI not just as a chatbot, but as an enterprise productivity engine, necessitating robust document generation and cross-model collaboration.

### 8. Backlog Watch
Maintainers should direct their attention to the newly opened proposal, which requires architectural review:
*   **[Issue #2180 - OpenClaw AI Collaborator Proposal](https://github.com/netease-youdao/LobsterAI/issues/2180)**: This item currently has 0 comments and needs technical feedback from the core team regarding the feasibility of implementing project-level memory and cross-model dispatch consoles.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-20

## 1. Today's Overview
CoPaw is exhibiting exceptionally high development activity and robust community engagement, with 17 PRs updated and 11 Issues discussed in the last 24 hours. The project's trajectory shows a strong focus on UI/UX refinements, multi-model provider compatibility, and long-term memory stability. Notably, community contributors are driving significant architectural improvements, including sandboxing and advanced context management. With a healthy ratio of bug fixes to new feature proposals, the project currently demonstrates excellent maintenance velocity and responsiveness to user pain points.

## 2. Releases
No new releases were published today. 

## 3. Project Progress
Today's progress was primarily driven by bug fixes for the v1.1.12 rollout and optimizations to backend stability. Six PRs were merged/closed:
*   **Critical Memory Fix Merged:** [PR #5332](https://github.com/agentscope-ai/CoPaw/pull/5332) resolved the severe ChromaDB index bloat issue ([Issue #4795](https://github.com/agentscope-ai/CoPaw/issues/4795)) by introducing auto-compaction strategies and timeout protections.
*   **Context & Scheduler Stability:** Merged [PR #5242](https://github.com/agentscope-ai/CoPaw/pull/5242) (adding timeout protection to prevent process freezes during context compaction) and [PR #5241](https://github.com/agentscope-ai/CoPaw/pull/5241) (increasing APScheduler misfire grace time to prevent skipped cron jobs).
*   **Skill Improvement:** [PR #5179](https://github.com/agentscope-ai/CoPaw/pull/5179) expanded trigger keywords for multi-agent collaboration skills.
*   *Note:* PRs #5337 and #5338 were closed in favor of [PR #5339](https://github.com/agentscope-ai/CoPaw/pull/5339) for the Zhipu model connection fix.

## 4. Community Hot Topics
*   **DeepSeek "Thinking" Hangs ([Issue #5328](https://github.com/agentscope-ai/CoPaw/issues/5328)):** Users report agents frequently freezing during the "thinking" phase when using DeepSeek models across Web, Console, and Tauri clients. This highlights a strong need for better streaming timeout handling or interruption mechanisms for reasoning models.
*   **Multi-Agent UX Enhancements ([Issue #5327](https://github.com/agentscope-ai/CoPaw/issues/5327)):** A feature request to add direct chat/session-switching capabilities from the "Agent Office" dashboard. This indicates that users are heavily utilizing multi-agent workflows and desire fewer context switches in the UI.
*   **Zhipu API Compatibility ([Issue #5330](https://github.com/agentscope-ai/CoPaw/issues/5330)):** Active discussion around model-level connection test failures for Zhipu AI, exposing underlying needs for broader compatibility with non-standard OpenAI API specifications among local Chinese LLM providers.

## 5. Bugs & Stability
Ranked by severity:
1.  **[High] UI Dead State on API Exception ([Issue #5333](https://github.com/agentscope-ai/CoPaw/issues/5333)):** Agents get stuck after submitting commands, leaving the text box active but failing to execute. *Fix available:* [PR #5335](https://github.com/agentscope-ai/CoPaw/pull/5335) addresses this by yielding failed SSE events on exceptions.
2.  **[High] Image Rendering Regression in v1.1.12 ([Issue #5320](https://github.com/agentscope-ai/CoPaw/issues/5320)):** `send_file_to_user` executes successfully but images no longer display in the chat UI post-upgrade. *Fix available:* [PR #5324](https://github.com/agentscope-ai/CoPaw/pull/5324) corrects the `content-disposition` headers.
3.  **[Medium] Zhipu Provider Model Connection Fails ([Issue #5330](https://github.com/agentscope-ai/CoPaw/issues/5330)):** Tests fail due to multimodal array formatting. *Fix available:* [PR #5339](https://github.com/agentscope-ai/CoPaw/pull/5339).
4.  **[Medium] DeepSeek Thinking Freezes ([Issue #5328](https://github.com/agentscope-ai/CoPaw/issues/5328)):** Requires manual stop/restart. *Status:* Needs official investigation/fix.

## 6. Feature Requests & Roadmap Signals
Several open PRs signal the likely roadmap for the next version:
*   **Enhanced Memory Management:** [PR #5321](https://github.com/agentscope-ai/CoPaw/pull/5321) proposes a "scroll" context strategy (durable history + recall REPL) to replace native compression.
*   **Real-time UX & Notifications:** [PR #5331](https://github.com/agentscope-ai/CoPaw/pull/5331) introduces sub-50ms SSE push notifications with voice beeps, replacing polling. [PR #5323](https://github.com/agentscope-ai/CoPaw/pull/5323) adds a native UI progress panel for multi-step TodoWrite tasks.
*   **Customization:** [PR #5336](https://github.com/agentscope-ai/CoPaw/pull/5336) (custom model ordering) and [PR #5334](https://github.com/agentscope-ai/CoPaw/pull/5334) (switching agents in mobile/collapsed sidebars) address highly requested UI flexibility.
*   **Security/Architecture:** [PR #5310](https://github.com/agentscope-ai/CoPaw/pull/5310) brings Bubblewrap Linux sandbox isolation to the local environment.

## 7. User Feedback Summary
Users are actively pushing CoPaw into advanced daily workflows, utilizing it via mobile browsers, Tauri desktop apps, and multi-agent setups. Satisfaction with the recent v1.1.12 feature set is high, but the upgrade introduced UX friction, specifically regarding image handling and SSE connection dead-states. Additionally, mobile users feel constrained by the current UI, requesting better compact-mode navigability. Overall, users view the tool as powerful but occasionally brittle when dealing with long-running tasks or specific third-party model APIs.

## 8. Backlog Watch
*   **Tauri Python Environment Breakage ([Issue #5317](https://github.com/agentscope-ai/CoPaw/issues/5317)):** Users report that recent Tauri updates lost the built-in Conda Python path, breaking local custom skills. This cross-platform packaging issue requires core maintainer attention.
*   **ChromaDB Memory Bloat ([Issue #4795](https://github.com/agentscope-ai/CoPaw/issues/4795)):** Though a fix was merged today in PR #5332, the issue persisted in the live environment for an extended period (since late May). Maintainers should ensure this patch is heavily prioritized for the next official release.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the project digest for ZeroClaw for June 20, 2026.

### 1. Today's Overview
ZeroClaw is exhibiting an exceptionally high velocity of development, with 45 contributors pushing 207 commits into the newly released v0.8.1. The project is currently stabilizing its v0.8.x multi-agent runtime and channel architecture, evidenced by a massive influx of bug fixes (123) alongside substantial new features (46). Activity remains extremely high, with 50 active issues and 50 active PRs updated in the last 24 hours (35 open, 15 merged/closed). The community is deeply engaged in testing the new channels and providers, surfacing critical regressions that the core team is rapidly triaging.

### 2. Releases
*   **[v0.8.1](https://github.com/zeroclaw-labs/zeroclaw/releases)** 
    *   **Focus:** The first patch release on the v0.8.x line, aimed at stabilizing the multi-agent runtime, channels, and provider stack introduced in v0.8.0.
    *   **Stats:** 207 commits, 123 bug fixes, 46 new features.
    *   **Notes:** Heavily focused on hardening provider/config semantics and fixing integration flaws across external channels.

### 3. Project Progress
Significant architectural and usability improvements were merged or advanced today:
*   **Auto-Cleanup ([PR #7923](https://github.com/zeroclaw-labs/zeroclaw/pull/7923)):** Advanced an XL feature to introduce a configurable `[files_cleanup]` block, solving storage accumulation issues on low-end devices.
*   **Plugin Architecture ([PR #7928](https://github.com/zeroclaw-labs/zeroclaw/pull/7928)):** Major progress on initial WASM component-model plugin host code, enabling sandboxed, WASI-powered plugins.
*   **UX Improvements ([PR #8000](https://github.com/zeroclaw-labs/zeroclaw/pull/8000), [PR #7946](https://github.com/zeroclaw-labs/zeroclaw/pull/7946)):** Merged/closed improvements to the ZeroCode TUI (browse mode badge) and introduced a new model context window (ctx) usage bar across the TUI, gateway chat, and CLI.
*   **Security Hardening ([PR #7902](https://github.com/zeroclaw-labs/zeroclaw/pull/7902)):** Added shared resolved-IP SSRF checks to outbound HTTP tools to prevent Server-Side Request Forgery.
*   **Automated Fixes:** Closed several nagging bugs via automated PRs, including stopping stdio child process leaks in MCP tools ([PR #8023](https://github.com/zeroclaw-labs/zeroclaw/pull/8023)) and fixing provider visibility in the tunnel picker ([PR #8026](https://github.com/zeroclaw-labs/zeroclaw/pull/8026)).

### 4. Community Hot Topics
*   **Missing Prebuilt Binaries Regression ([Issue #7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787)):** A highly active issue (6 comments, P1) where users discovered that v0.8.0 prebuilt binaries shipped without Slack/Discord support. This highlights the community's heavy reliance on ZeroClaw for direct chat-channel integrations.
*   **Agent Memory Over-prioritization ([Issue #5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)):** A long-standing, highly discussed issue (6 comments) regarding agents weighting past memories too heavily over current prompt instructions, particularly breaking automated cron jobs.
*   **OIDC Authentication Support ([Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)):** A tracking RFC (5 comments) for adding pluggable OIDC auth. This shows a mature user base demanding enterprise-grade security for their agent deployments.
*   **Gateway State Persistence Flaw ([Issue #7907](https://github.com/zeroclaw-labs/zeroclaw/issues/7907) & [Issue #7941](https://github.com/zeroclaw-labs/zeroclaw/issues/7941)):** Users flagged that renaming or deleting agents mutates external state *before* config persistence is safely written, risking state corruption during API operations.

### 5. Bugs & Stability
*   **S1 - Workflow Blocked:** 
    *   **[Issue #7907 / #7941](https://github.com/zeroclaw-labs/zeroclaw/issues/7907):** Agent rename/delete mutates owned state before config persistence. (No direct fix PR yet).
    *   **[Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808):** Default 32k context budget exceeds limits on iteration 1 purely due to tool definitions, causing perpetual context trimming. 
    *   **[Issue #6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841):** Multimodal `vision_provider` is silently ignored, sending images to text fallback models instead. 
*   **S2 - Degraded Behavior:**
    *   **[Issue #5221](https://github.com/zeroclaw-labs/zeroclaw/issues/5221):** LLM API costs are not accurately captured when agents are triggered via schedules, CLI, or web. 
    *   **[Issue #7964](https://github.com/zeroclaw-labs/zeroclaw/issues/7964):** Context compression fails silently if the summary model belongs to a different provider than the agent's main provider. **Fix exists:** [PR #7973](https://github.com/zeroclaw-labs/zeroclaw/pull/7973) makes the compressor self-contained.
*   **S3 - Minor / Annoyances:**
    *   **[Issue #4721](https://github.com/zeroclaw-labs/zeroclaw/issues/4721):** ZeroClaw logs to stdout instead of stderr, breaking terminal pipelines like `zeroclaw config schema`.

### 6. Feature Requests & Roadmap Signals
Based on trackers and active PRs, the trajectory for **v0.9.0** and **v0.8.3** is coming into focus:
*   **v0.9.0 Target:** Will focus heavily on security, breaking changes, and enterprise readiness. Confirmed via [Issue #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) which tracks OIDC auth, per-principal authorization, and WebSocket boundary fixes.
*   **v0.8.3 Target:** Will introduce an MCP (Model Context Protocol) dashboard for better web/plugin management ([Issue #7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320)).
*   **Upcoming Features:** Expect first-class xAI OAuth login ([PR #7945](https://github.com/zeroclaw-labs/zeroclaw/pull/7945)), unified slash commands across UI/CLI/channels ([Issue #7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929)), and user/agent-scoped `/model` overrides ([PR #7998](https://github.com/zeroclaw-labs/zeroclaw/pull/7998)).

### 7. User Feedback Summary
Users are pushing ZeroClaw into production environments, particularly leveraging it as a bridging agent for Slack, Discord, and Telegram. 
*   **Pain Points:** The transition to v0.8.x caused friction due to verbose default system prompts breaking context limits ([Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)) and broken channel binaries ([Issue #7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787)). Furthermore, self-hosters on edge devices (like Android Termux) are struggling with unsupported architectures and disk bloat ([Issue #7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911)).
*   **Satisfaction:** Dissatisfaction is strictly operational, not foundational. Users love the tool but are requesting better observability (cost tracking, ctx usage bars) and stricter isolation between system instructions and long-term memory. 

### 8. Backlog Watch
*   **[Issue #5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869):** A P1, high-risk security issue blocked due to a transitive dependency (`rumqttc`) holding back vulnerable TLS crates. Needs upstream intervention or a fork.
*   **[Issue #4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467):** Users are eager for MCP (Model Context Protocol) resource and prompt support (4+ thumbs up), but the issue has been open since March. It is currently marked `in-progress`, but needs maintainer validation for merge.
*   **[Issue #7907](https://github.com/zeroclaw-labs/zeroclaw/issues/7907) / [#7941](https://github.com/zeroclaw-labs/zeroclaw/issues/7941):** High-risk state mutation bugs in the API gateway need immediate maintainer assignment for code review and patching.

</details>