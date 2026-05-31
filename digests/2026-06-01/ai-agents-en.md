# OpenClaw Ecosystem Digest 2026-06-01

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-31 22:17 UTC

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

# OpenClaw Project Digest — 2026-06-01

## 1. Today's Overview
OpenClaw is experiencing a massive surge in activity, with 1,000 issues and pull requests updated in the last 24 hours alone. The core maintainers appear to be in a heavy iteration cycle, pushing four consecutive beta releases (`v2026.5.30-beta.1` through `v2026.5.31-beta.3`) focused almost exclusively on hardening runtime stability, session state recovery, and channel delivery reliability. PR throughput is currently exceeding new bug reports (295 merged/closed PRs vs. 185 closed issues), signaling an aggressive stabilization sprint. However, the high volume of active open issues (315) and the severity of the top reported bugs indicate that the newly introduced Codex app-server integrations and context compaction changes are generating significant operational friction.

## 2. Releases
Four new beta versions were released today, culminating in **v2026.5.31-beta.3**. The release notes across all four betas are identical, suggesting rapid, iterative patches rather than distinct feature drops.

*   **v2026.5.31-beta.3**, **v2026.5.31-beta.2**, **v2026.5.31-beta.1**, & **v2026.5.30-beta.1**
    *   **Changes:** Agents and CLI-backed runtimes now recover more cleanly from interrupted tool calls, stale session bindings, compaction handoffs, and media delivery retries.
    *   **Stability:** Channel integrations (Telegram, WhatsApp, iMessage, Slack) received steady-state delivery improvements.
    *   **Migration Notes:** No explicit breaking changes were listed in the release text, but given the systemic nature of the session state fixes, users running heavy automation or cron workloads should closely monitor session context behavior post-upgrade.

## 3. Project Progress
Significant progress was made across infrastructure reliability, security, and user interface ergonomics, with 295 PRs merged or closed.

*   **State & Persistence Migrations:** Several foundational PRs are migrating legacy JSON/JSONL sidecar states to SQLite (iMessage monitor state in [PR #88797](https://github.com/openclaw/openclaw/pull/88797) and plugin install index in [PR #88794](https://github.com/openclaw/openclaw/pull/88794)), which will vastly improve crash recovery and data integrity.
*   **Streaming & Runtime Fixes:** Critical fixes landed for incremental model delta counting ([PR #87856](https://github.com/openclaw/openclaw/pull/87856)) and streaming phased text deltas ([PR #88771](https://github.com/openclaw/openclaw/pull/88771)), resolving issues where OpenClaw was re-reading full payloads on every delta, causing performance degradation.
*   **Security Hardening:** Security boundaries were tightened by keeping insecure Control UI auth disabled after onboarding ([PR #88798](https://github.com/openclaw/openclaw/pull/88798)) and ensuring generated secret refs stay out of plaintext ([PR #88800](https://github.com/openclaw/openclaw/pull/88800)).
*   **Agent Ergonomics:** The Web UI "calm composer" ([PR #88772](https://github.com/openclaw/openclaw/pull/88772)) merged to declutter the chat interface, and CLI JSON output was cleaned up ([PR #88689](https://github.com/openclaw/openclaw/pull/88689)) for better machine-readable piping.

## 4. Community Hot Topics
The community is highly focused on context window management, session reliability, and multi-channel delivery behaviors.

*   **Context Confusion:** The most active bug is [Issue #32296](https://github.com/openclaw/openclaw/issues/32296) (13 comments), where agents reply to previous messages instead of the current ones. This highlights the complexity of OpenClaw's session state management, particularly as context lengths grow.
*   **Channel Regressions:** A major regression in Matrix thread replies ([Issue #87307](https://github.com/openclaw/openclaw/issues/87307), 11 comments) and Telegram delivery duplications ([Issue #51628](https://github.com/openclaw/openclaw/issues/51628), 6 comments) show that users heavily rely on OpenClaw for cross-platform messaging and are highly sensitive to delivery format changes.
*   **Security vs. Autonomy:** A highly requested feature for "hard gates" (pre-response enforcement hooks) in [Issue #13583](https://github.com/openclaw/openclaw/issues/13583) (11 comments, 2 👍) reveals a segment of enterprise/power users in high-stakes fields (finance, security) who need mechanical guardrails preventing agents from bypassing mandatory tool calls.

## 5. Bugs & Stability
Stability is currently the primary concern, with multiple P1 bugs related to the new Codex app-server and context compaction features causing crashes and silent hangs.

1.  **Critical (P1) - Session State Loss & Wedging:**
    *   [Issue #32296](https://github.com/openclaw/openclaw/issues/32296): Agent replies to previous messages instead of current (Session context confusion).
    *   [Issue #83959](https://github.com/openclaw/openclaw/issues/83959): Codex app-server startup retries exhaust before replacement server is ready, causing crash loops.
    *   [Issue #85251](https://github.com/openclaw/openclaw/issues/85251): Codex emits a notification and then goes permanently silent, wedging the session until a 360s timeout force-aborts it.
    *   [Issue #86996](https://github.com/openclaw/openclaw/issues/86996): Active Memory combined with Codex causes severe latency, hook timeouts, and gateway stalls. *(Fixes for underlying delta/streaming behaviors are being actively reviewed in PRs #88771 and #87856).*
2.  **High (P1) - Provider/Auth Failures:**
    *   [Issue #88020](https://github.com/openclaw/openclaw/issues/88020): Anthropic 'Invalid signature in thinking block' causes hard session failure instead of a recovery retry.
    *   [Issue #88443](https://github.com/openclaw/openclaw/issues/88443): Auth config changes force full gateway restarts, dropping in-flight CLI runs. *(Addressed by recent state/persistence PRs).*
    *   [Issue #86047](https://github.com/openclaw/openclaw/issues/86047): Codex plugin approval stalls cause interrupted turns in Nextcloud Talk sessions.
3.  **Medium (P2) - Platform & Usability:**
    *   [Issue #87326](https://github.com/openclaw/openclaw/issues/87326): Telegram streaming overwrites intermediate text blocks, hiding the agent's working process from the user.
    *   [Issue #77802](https://github.com/openclaw/openclaw/issues/77802): `doctor --fix` loops infinitely when config has multiple validation errors. *(Fix merged in PR #88760).*

## 6. Feature Requests & Roadmap Signals
The community is pushing OpenClaw toward more autonomous, reliable, and localized operations.

*   **Self-Elected Continuation:** [PR #85651](https://github.com/openclaw/openclaw/pull/85651) (Context-pressure-aware continuation) introduces a massive architectural shift allowing agents to elect to continue their own turns (`continue_work` / `request_compaction`). This signals OpenClaw is moving toward persistent, autonomous agentic loops rather than single-prompt responses.
*   **Security Guardrails:** [Issue #13583](https://github.com/openclaw/openclaw/issues/13583) (Pre-response enforcement hooks) and [Issue #78308](https://github.com/openclaw/openclaw/issues/78308) (Channel-mediated approval for MCP tool calls) strongly signal the maturation of OpenClaw as an enterprise tool. Users want the AI to "phone home" for consent before executing destructive MCP commands.
*   **Localization:** [Issue #79458](https://github.com/openclaw/openclaw/issues/79458) requests i18n support for slash commands, reflecting a rapidly growing non-English-speaking user base (specifically Chinese).
*   **Prediction for Next Release:** The next stable release will likely finalize the SQLite migration layer, implement safer context compaction defaults, and introduce the first iteration of the self-elected agentic continuation (`continue_work`).

## 7. User Feedback Summary
Users are enthusiastic about OpenClaw's expanding capabilities but are currently paying a "stability tax" on the bleeding edge. Pain points cluster around **reliability during long-running tasks** (cron jobs timing out, memory reindexing failing on transient errors) and **multi-model auth complexity** (OpenAI Codex, Anthropic, and local providers fighting for routing priority). Conversely, the prompt engineering and local-model community is highly satisfied with the push toward a "strict local model lean profile" ([PR #88181](https://github.com/openclaw/openclaw/pull/88181)), showing appreciation for tools that allow running powerful agents without sending data to the cloud.

## 8. Backlog Watch
Several critical issues are aging without clear resolution or are stuck in decision paralysis, requiring maintainer attention:

*   **The 3-Month Context Bug:** [Issue #32296](https://github.com/openclaw/openclaw/issues/32296) has been open since March 2026 and is causing severe message misalignment. It carries multiple `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision` tags.
*   **Silent Plugin Failures:** [Issue #78301](https://github.com/openclaw/openclaw/issues/78301) (5 comments, 2 👍) highlights that the plugin loader silently fails on legacy contracts, costing developers hours of debugging. *(Note: The newly opened PR #88794 to rewrite the plugin index to SQLite might offer a natural insertion point to fix this).*
*   **Voice-as-IO:** [Issue #73699](https://github.com/openclaw/openclaw/issues/73699) (bridging Discord voice channel I/O to text-channel agent sessions) is a highly requested feature for true multimodal interaction, but seems stalled.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digest summaries from June 1, 2026.

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem on June 1, 2026, is defined by rapid architectural maturation and aggressive stabilization sprints. As frameworks push beyond basic chat interfaces into complex, multi-channel, and autonomous agentic loops, maintainers are facing systemic growing pains around state persistence, context compaction, and multi-platform routing. There is a massive industry-wide push to migrate from fragile legacy file formats to robust database backends (like SQLite) and to secure agent execution boundaries via sandboxing and strict MCP (Model Context Protocol) permissions. Enterprise-readiness is becoming a key differentiator, with a pronounced shift toward implementing multi-tenancy, Role-Based Access Control (RBAC), and advanced OAuth provider support.

## 2. Activity Comparison
*Note: Health Score is rated 1-5 based on issue/PR velocity, maintainer responsiveness, and release cadence.*

| Project | Issues Updated (24h) | PRs Updated (24h) | Releases (24h) | Health Score | Current Phase |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 185 closed | 295 merged/closed | 4 (Beta) | 5/5 | Aggressive Stabilization |
| **ZeroClaw** | Active (9 closed) | 41 open | 0 | 4.5/5 | Architectural (v0.8.0-prep) |
| **Hermes Agent**| 50 active | 50 active | 0 | 4/5 | Integration Bottleneck |
| **CoPaw** | 17 active | 2 active | 0 | 4/5 | Scaling / Bug Triage |
| **NanoBot** | 6 processed | 19 updated (7 merged) | 0 | 4/5 | Security Hardening |
| **PicoClaw** | 7 active | 11 active (4 merged) | 1 (Nightly) | 3.5/5 | Optimization |
| **IronClaw** | Active | 16 open | 0 | 3.5/5 | Feature-build ("Reborn") |
| **NanoClaw** | 5 active | 7 open | 0 | 3/5 | Infrastructure Repair |
| **NullClaw** | 2 active | 0 active | 0 | 2.5/5 | Passive Maintenance |
| **LobsterAI** | 0 active | 1 updated (stale) | 0 | 1.5/5 | Stagnant |
| **ZeptoClaw** | 1 closed | 0 active | 0 | 2/5 | Maintenance / Security |
| **Moltis** | 0 active | 1 open | 0 | 2/5 | Low Activity |
| **TinyClaw** | 0 active | 0 active | 0 | 1/5 | Dormant |

## 3. OpenClaw's Position
*   **Advantages vs Peers:** OpenClaw remains the undisputed core reference implementation with massive scale (1,000 issues/PRs updated daily). Its primary advantage is raw velocity and enterprise-grade feature depth, moving faster than Hermes and ZeroClaw in closing critical bugs.
*   **Technical Approach:** OpenClaw is aggressively tearing out legacy infrastructure, leading the pack in migrating from JSON/JSONL sidecars to SQLite (a move ZeroClaw is also making, but further behind). Furthermore, OpenClaw is pioneering persistent, autonomous agentic loops with its `continue_work` context-pressure-aware feature, outpacing the single-prompt paradigms still prevalent in projects like PicoClaw and NullClaw.
*   **Community Size Comparison:** OpenClaw’s community dwarfs most of the ecosystem, operating at roughly 10x the volume of highly active peers like Hermes and ZeroClaw. However, this massive scale brings severe "stability taxes" and highlights a backlog clogged with complex, long-standing architectural bugs (e.g., the 3-month context bug) that smaller, more nimble projects like NanoBot do not suffer from yet.

## 4. Shared Technical Focus Areas
*   **Robust State Persistence:** A universal shift away from JSON configs/text files toward SQLite for session state and plugin management to prevent data loss during crashes. *(OpenClaw, ZeroClaw, NanoClaw, LobsterAI).*
*   **Provider & Streaming Reliability:** Managing complex OAuth flows (specifically OpenAI Codex) and fixing empty delta streams or "thinking block" rejections from providers like Anthropic. *(OpenClaw, PicoClaw, Moltis, Hermes, CoPaw).*
*   **Security & MCP Permissions:** Implementing defense-in-depth against SSRF, protecting against MCP tool supply-chain attacks, and enforcing strict allowlists/sandboxing to prevent rogue agent execution. *(NanoBot, NanoClaw, ZeroClaw, OpenClaw).*
*   **Multi-Channel Routing Parity:** Fixing platform-specific edge cases in Telegram (message routing, typing indicators, thread splits) and Discord, which remain the dominant testing grounds for personal agents. *(NullClaw, Hermes, PicoClaw, OpenClaw).*
*   **Resource Exhaustion & Async Operations:** Addressing single-threaded event loop blocking, zombie process accumulation, and file descriptor limits (ulimit) that kill agents under heavy load. *(NanoClaw, CoPaw, ZeroClaw).*

## 5. Differentiation Analysis
*   **Enterprise vs. Hobbyist Focus:** IronClaw and NanoBot are heavily focused on enterprise compliance (Azure AAD, durable triggers), whereas Hermes Agent and PicoClaw cater heavily to hobbyists and self-hosters demanding native Windows support or local model (LM Studio) optimizations. 
*   **Execution Environments:** ZeroClaw is uniquely targeting IoT and edge environments (Raspberry Pi, ESP32 smart room integrations). CoPaw is battling desktop-specific friction (Windows subprocess management), while NanoClaw is optimizing for shared family mini-PCs (multi-tenancy).
*   **Architectural Paradigms:** IronClaw is executing a major decoupled Rust rewrite ("Reborn"), building an async egress engine from scratch. In contrast, NanoClaw and Hermes are battling bottlenecks inherent to Node.js and Python runtimes respectively, attempting to add supervision/auto-recovery to existing architectures.

## 6. Community Momentum & Maturity
Projects naturally segment into three tiers of maturity:
*   **Rapid Iterators (OpenClaw, Hermes, ZeroClaw, CoPaw):** Experiencing explosive user growth but paying a heavy "bug tax." Their communities are highly vocal, filing detailed bug reports about context limits and context window management.
*   **Stabilizers (NanoBot, PicoClaw, IronClaw):** Highly disciplined core teams actively integrating enterprise features (OAuth, RBAC) and security hardening. Their PR throughput is balanced and methodical.
*   **Stagnant/Maintenance (NullClaw, LobsterAI, ZeptoClaw, Moltis, TinyClaw):** Experiencing minimal maintainer engagement, relying on automated bots, stale PRs, or handling only critical edge-case bugs. 

## 7. Trend Signals
*   **The Rise of Agentic Scheduling & Cron:** Users are moving away from reactive chat and demanding deterministic, scheduled agents (cron). When combined with LLMs, this creates critical infrastructure challenges around job delegation policies and preventing runaway compute costs *(IronClaw, OpenClaw, NullClaw, ZeroClaw).*
*   **Context Window Optimization is the Bottleneck:** As tools increase, system prompts are devouring token limits (e.g., CoPaw users seeing 65% context usage just for tool schemas). Dynamic, on-demand tool loading will become a mandatory architectural standard in late 2026.
*   **Supply Chain Security for Agents:** The trust placed in third-party MCP servers (e.g., auto-auth email tools) is a looming security crisis. The ecosystem urgently needs curated, permission-aware MCP registries to prevent credential phishing *(NanoClaw, ZeroClaw, OpenClaw).*
*   **Subscription Billing Arbitrage:** Users strongly desire agents that can utilize their existing flat-rate subscriptions (e.g., Claude Pro OAuth) rather than paying per-token API fees, blurring the line between personal assistants and enterprise API wrappers *(Hermes Agent).*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-01

## 1. Today's Overview
NanoBot demonstrates robust and highly active development, with 19 pull requests updated and 6 issues processed in the last 24 hours. The current cycle shows a strong emphasis on hardening security boundaries, stabilizing the WebUI, and refactoring legacy subsystems (Dream, Heartbeat). A significant portion of today's open PRs are dedicated to defense-in-depth measures, such as preventing SSRF attacks, blocking workspace escapes via symlinks, and enforcing strict file-system permissions. Overall, the project is in a mature optimization and stabilization phase, actively maintained by a dedicated core team and vibrant open-source contributors.

## 2. Releases
No new releases were recorded today. The project continues to accumulate fixes and features in the main development branch ahead of its next potential release candidate.

## 3. Project Progress
Today saw 7 merged or closed PRs, delivering targeted improvements across security, user interface, and agent reliability:
*   **Security Fixes:** Authenticated WebSocket token issuance was enforced to prevent unauthenticated minting ([PR #4103](https://github.com/HKUDS/nanobot/pull/4103), fixes [#4077](https://github.com/HKUDS/nanobot/issues/4077)).
*   **WebUI Stability:** Handled undefined language specifiers in fenced code blocks, resolving a critical white-screen crash for end-users ([PR #4117](https://github.com/HKUDS/nanobot/pull/4117), fixes [#4116](https://github.com/HKUDS/nanobot/issues/4116)).
*   **Heartbeat Reliability:** Heartbeat notifications now fail securely ("closed") to prevent routine "All clear." spam in channels like Feishu ([PR #4114](https://github.com/HKUDS/nanobot/pull/4114), fixes [#4111](https://github.com/HKUDS/nanobot/issues/4111); [PR #4112](https://github.com/HKUDS/nanobot/pull/4112)).
*   **Agent Loop:** The sustained goal iteration budget was extended to allow deeper agent execution paths before hitting standard limits ([PR #4127](https://github.com/HKUDS/nanobot/pull/4127)).
*   **WebUI Polish:** Streamed chat rendering and host runtime boundaries were stabilized to better handle reasoning deltas and native-host capabilities ([PR #4121](https://github.com/HKUDS/nanobot/pull/4121)).

## 4. Community Hot Topics
*   **Enterprise Cloud Auth ([Issue #4125](https://github.com/HKUDS/nanobot/issues/4125) / [PR #4126](https://github.com/HKUDS/nanobot/pull/4126)):** A community member (kunalk16) opened an issue and immediately followed up with a PR to support Azure AAD Based Auth for the Azure OpenAI provider. This highlights a growing enterprise adoption trend where strict corporate policies forbid API-key-based authentication.
*   **Local ASR Integration ([PR #4122](https://github.com/HKUDS/nanobot/pull/4122)):** Contributor Archermmt submitted a feature PR adding browser voice recording and local ASR transcription via FunASR. This indicates strong user demand for multimodal, privacy-preserving voice interaction capabilities. 
*   **Third-party Framework Pitch ([Issue #4120](https://github.com/HKUDS/nanobot/issues/4120)):** An automated tool-scouting agent (Vest-ai-tools) suggested a monetization/integration angle for SaaS tool recommendations, showing that NanoBot's MCP-compatible framework is attracting attention from the broader AI tooling ecosystem.

## 5. Bugs & Stability
*   **High Severity: WebUI White Screen Crash ([Issue #4116](https://github.com/HKUDS/nanobot/issues/4116))** - Loading sessions with bare code blocks (without a language specifier) crashed the entire WebUI. **Status:** Fixed and closed via [PR #4117](https://github.com/HKUDS/nanobot/pull/4117).
*   **High Severity: WebSocket Token Forgery ([Issue #4077](https://github.com/HKUDS/nanobot/issues/4077))** - When static tokens were configured, the token issue route could mint short-lived tokens without authentication. **Status:** Fixed and closed via [PR #4103](https://github.com/HKUDS/nanobot/pull/4103).
*   **Medium Severity: Heartbeat Channel Spam ([Issue #4111](https://github.com/HKUDS/nanobot/issues/4111))** - Proactive heartbeat logic pushed pointless "All clear." messages to Feishu. **Status:** Fixed via [PR #4114](https://github.com/HKUDS/nanobot/pull/4114).
*   **Medium Severity: Context Duplication ([Issue #4128](https://github.com/HKUDS/nanobot/issues/4128))** - User messages are incorrectly duplicated into both the archive and kept arrays during session management due to an edge-case bug in `retain_recent_legal_suffix`. **Status:** Open, awaiting fix.
*   **Low Severity: XML Tool Call Leaks ([PR #4124](https://github.com/HKUDS/nanobot/pull/4124))** - Models like mimo-v2.5 and glm-5.1 emit tool calls as raw XML in the content field, causing visible XML tags in Telegram/WebSocket clients. **Status:** Open PR submitted.

## 6. Feature Requests & Roadmap Signals
Based on today's open PRs and community submissions, the following features are likely to be prioritized:
*   **Enterprise Identity Integrations:** Azure AAD token-based auth support is actively being merged ([PR #4126](https://github.com/HKUDS/nanobot/pull/4126)).
*   **Local Voice Capabilities:** WebUI voice recording and local transcription (FunASR) are under review ([PR #4122](https://github.com/HKUDS/nanobot/pull/4122)).
*   **Security Hardening (Defense-in-Depth):** Expect strict guards against SSRF via MCP probing ([PR #4123](https://github.com/HKUDS/nanobot/pull/4123)), relative symlink workspace escapes ([PR #4119](https://github.com/HKUDS/nanobot/pull/4119)), and read-only enforcement for extra allowed directories ([PR #4099](https://github.com/HKUDS/nanobot/pull/4099)).
*   **Architectural Refactoring:** The core "Dream" memory class is being heavily refactored into a lightweight cron job ([PR #3990](https://github.com/HKUDS/nanobot/pull/3990)), and Gateway HTTP handling is being extracted from WebSocket channels to enable future hot-reloading capabilities ([PR #4115](https://github.com/HKUDS/nanobot/pull/4115)).

## 7. User Feedback Summary
Real-world usage reveals that users are deploying NanoBot in complex, multi-channel environments (Feishu, Telegram, WebSocket, Desktop WebUI). Pain points frequently revolve around channel-specific edge cases (like markdown rendering crashing the WebUI) and aggressive agent loops (Heartbeat spam). Enterprise users are constrained by compliance requirements (AAD auth). Additionally, the community is actively pushing the boundaries of the model context protocol (MCP), interacting with models that do not strictly follow OpenAI structured tool-call schemas, necessitating better XML parsing and SSRF protections.

## 8. Backlog Watch
*   **Heartbeat Decoupling ([PR #1443](https://github.com/HKUDS/nanobot/pull/1443)):** Open since early March 2026, this PR aims to make the heartbeat agent reason silently by default. It is a critical piece of the ongoing Heartbeat reliability fixes seen today and needs a final maintainer review to be unblocked.
*   **Registry-Driven Provider Config ([PR #3994](https://github.com/HKUDS/nanobot/pull/3994)):** Open for a week, this architectural PR introduces provider-specific settings payloads (starting with Bedrock). It heavily relates to the new Azure AAD auth features and should be synchronized soon.
*   **Tokenizer Pre-warming ([PR #3997](https://github.com/HKUDS/nanobot/pull/3997)):** A performance-oriented PR aimed at reducing startup/turn latency by reusing `tiktoken` instances. This requires maintainer attention to validate benchmark claims before merging.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-01

## 1. Today's Overview
Hermes Agent is experiencing extremely high community engagement, with 50 active issues and 50 active pull requests updated in the past 24 hours. The project remains in a highly active development iteration, though the maintainer team has not yet merged the majority of the pending PRs, as only 2 PRs and 2 issues were closed today. No new software releases were cut on this date. The high volume of open, unmerged PRs suggests a potential integration bottleneck or a tight review process preceding a major milestone. Overall, the project's open-source health is robust, driven by diverse third-party contributions spanning core agents, gateway adapters, and provider integrations.

## 2. Releases
There were **0 new releases** today. There are no immediate breaking changes, migration notes, or version updates to report. The project appears to be accumulating fixes and features for a future release.

## 3. Project Progress
Progress today was defined by continuous community submissions rather than merged code, with 48 open PRs representing active development across several key domains:
*   **Gateway & Platform Adapters:** Significant work is happening to expand platform support. A new PR for a decentralized **Session gateway** ([PR #6948](https://github.com/NousResearch/hermes-agent/pull/6948)) is pending, alongside improvements to the Signal adapter ([PR #36088](https://github.com/NousResearch/hermes-agent/pull/36088)). 
*   **Security & Stability:** Maintainers and contributors are focused on system resilience. A crucial security fix to scope gateway resume lookups ([PR #36082](https://github.com/NousResearch/hermes-agent/pull/36082)) was submitted, preventing potential cross-user session leakage. 
*   **Agent Memory & Core:** Advanced memory capabilities are being built out, including long-term persona injection via the Hindsight model ([PR #36083](https://github.com/NousResearch/hermes-agent/pull/36083)), and fixes to prevent contradictory memory guidance when the feature is disabled ([PR #36085](https://github.com/NousResearch/hermes-agent/pull/36085)).
*   **TUI/CLI Enhancements:** Heavy debugging is ongoing for the TUI to fix long-session desync ([PR #35992](https://github.com/NousResearch/hermes-agent/pull/35992)) and layout breakages in Warp terminal ([PR #35764](https://github.com/NousResearch/hermes-agent/pull/35764)), alongside the exciting `/rewind` feature ([PR #25074](https://github.com/NousResearch/hermes-agent/pull/25074)).

## 4. Community Hot Topics
The most actively discussed issues center around **platform parity** and **developer billing ergonomics**:
*   **Native Windows Support:** The most highly upvoted and commented issues are requests to drop the WSL2 requirement. Users are actively asking for native Windows execution in [#10359](https://github.com/NousResearch/hermes-agent/issues/10359) (👍 8) and [#2512](https://github.com/NousResearch/hermes-agent/issues/2512). The community clearly views Windows as a first-class citizen gap.
*   **Claude Subscription OAuth Billing:** [Issue #25267](https://github.com/NousResearch/hermes-agent/issues/25267) (👍 12) is a massive pain point where users want to utilize their existing Claude Pro subscriptions via OAuth (similar to Codex-style usage) rather than paying per-token API fees. This indicates a strong user base of hobbyists and power users trying to optimize costs.
*   **Telegram Gateway Quirks:** Telegram is heavily utilized by the community, but users are struggling with DM topic routing and session splits, as seen in the active discussions in [#27166](https://github.com/NousResearch/hermes-agent/issues/27166) and [#30411](https://github.com/NousResearch/hermes-agent/issues/30411).

## 5. Bugs & Stability
Several high-severity bugs impacting core agent loops and gateway stability were reported or updated today:
*   **P1 - GPT Provider Type Issue:** Every outbound request to GPT-family providers fails immediately ([Issue #25516](https://github.com/NousResearch/hermes-agent/issues/25516)). *No fix PR is currently visible.*
*   **P1 - Gateway Zombie Connections:** The gateway lacks a periodic liveness watchdog, causing silent connection drops across adapters ([Issue #32574](https://github.com/NousResearch/hermes-agent/issues/32574)). *No fix PR is currently visible.*
*   **P1 - Telegram Topic Routing:** Session splits cause responses to route to the wrong topic/threads ([Issue #27166](https://github.com/NousResearch/hermes-agent/issues/27166), [Issue #30411](https://github.com/NousResearch/hermes-agent/issues/30411)).
*   **P2 - Infinite Retry Loop:** Heavy local LLMs cause Hermes to enter an infinite timeout/retry loop during the prefill phase ([Issue #7069](https://github.com/NousResearch/hermes-agent/issues/7069)).
*   **P2 - Security Tool False Positives:** The Tirith shell-scanner incorrectly flags safe local executables ([Issue #32737](https://github.com/NousResearch/hermes-agent/issues/32737)).
*   **Fixes in Progress:** Fortunately, fixes are already queued for many gateway/provider issues, including Anthropic "thinking blocks" errors ([PR #36087](https://github.com/NousResearch/hermes-agent/pull/36087)) and OAuth token race conditions ([PR #36086](https://github.com/NousResearch/hermes-agent/pull/36086)).

## 6. Feature Requests & Roadmap Signals
*   **ACP Client/Server Integration:** Users are heavily requesting Agent Client Protocol (ACP) support, both to register Hermes with the Zed editor ([Issue #16028](https://github.com/NousResearch/hermes-agent/issues/16028)) and to act as a controller for other ACP agents ([Issue #36057](https://github.com/NousResearch/hermes-agent/issues/36057)). 
*   **Rewind / Edit-Resubmit:** A highly requested feature (👍 5) to mimic Claude Code's double-Esc functionality is currently being implemented in [PR #25074](https://github.com/NousResearch/hermes-agent/pull/25074). This is a strong candidate for the next release.
*   **Kanban & Model Overrides:** Features allowing Kanban workers to swap models per task ([Issue #24206](https://github.com/NousResearch/hermes-agent/issues/24206)) and a local CLI model picker ([PR #36084](https://github.com/NousResearch/hermes-agent/pull/36084)) show a roadmap trend toward multi-model, orchestration-heavy workflows.

## 7. User Feedback Summary
The general sentiment of the user base is enthusiastic but strained by multi-platform bugs and configuration complexities. Users love running Hermes via messaging platforms like Telegram and Discord, but encounter significant friction with UI flickering ([Issue #26157](https://github.com/NousResearch/hermes-agent/issues/26157)) and session management. 
Self-hosters and local-model enthusiasts express frustration with timeout loops ([Issue #7069](https://github.com/NousResearch/hermes-agent/issues/7069)) and vision handling ([Issue #36070](https://github.com/NousResearch/hermes-agent/issues/36070)). Additionally, there is a strong desire for the tool to seamlessly integrate into existing subscription tiers (like Claude Pro) rather than requiring separate API billing. Finally, users operating via Docker or older Linux distributions (like RHEL 8) are running into SQLite and build-context issues ([Issue #15221](https://github.com/NousResearch/hermes-agent/issues/15221), [PR #35931](https://github.com/NousResearch/hermes-agent/pull/35931)).

## 8. Backlog Watch
*   **Windows Native Support:** [Issue #2512](https://github.com/NousResearch/hermes-agent/issues/2512) has been open since March 2026. Given the high upvotes, it requires a formal maintainer response or roadmap inclusion.
*   **Camoufox Browser Sessions:** [Issue #20507](https://github.com/NousResearch/hermes-agent/issues/20507) and its corresponding [PR #20511](https://github.com/NousResearch/hermes-agent/pull/20511) have been stalled since early May. This is a blocking issue for headless browsing workflows.
*   **OpenRouter CLI Auth:** [Issue #26436](https://github.com/NousResearch/hermes-agent/issues/26436) highlights a UX gap where the `hermes doctor` command fails to diagnose missing OpenRouter credentials, leaving users confused. 
*   **MCP Discovery Timeout:** [Issue #36052](https://github.com/NousResearch/hermes-agent/issues/36052) points to a 60-second blocking hang during MCP discovery on bad endpoints, which severely degrades the startup experience.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-01

## 1. Today's Overview
PicoClaw demonstrates **robust and highly active daily development**, with a strong focus on both core stability and expanding provider/channel support. The project saw 18 total update events today (7 issues, 11 PRs), maintaining a healthy ratio of community contributions to core improvements. Activity is currently anchored around hardening the OpenAI/Codex OAuth streaming pipeline, improving message bus reliability, and enriching the user experience with media support and new provider integrations. Overall, the project appears to be in an active optimization phase as it iterates towards its next stable release.

## 2. Releases
*   **[nightly: v0.2.9-nightly.20260531.1ce353ba](https://github.com/sipeed/picoclaw/releases/tag/nightly)** 
    *   *Type:* Automated Nightly Build.
    *   *Notes:* Marked as potentially unstable. Includes all recent main-branch commits up to May 31, 2026.

## 3. Project Progress
Four PRs were successfully merged/closed today, advancing the project in key areas:
*   **Streaming & Providers Fixed:** [PR #2967](https://github.com/sipeed/picoclaw/pull/2967) resolved a critical issue where Codex OAuth responses returned empty by properly accumulating streamed `output_text` delta events.
*   **Web UI Enhancements:** [PR #2969](https://github.com/sipeed/picoclaw/pull/2969) introduced image pasting and drag-and-drop uploads in the web frontend, completing the media input pipeline.
*   **Rich Messaging:** [PR #2856](https://github.com/sipeed/picoclaw/pull/2856) successfully implemented media attachments and Telegram rich delivery, allowing agents to send combined text+media payloads natively.
*   **Repo Maintenance:** [PR #2980](https://github.com/sipeed/picoclaw/pull/2980) cleaned up the `.gitignore` for debug output files.

## 4. Community Hot Topics
*   **Long-standing LM Studio Request:** [Issue #28](https://github.com/sipeed/picoclaw/issues/28) (21 comments, 2 👍) highlights a strong community desire for a streamlined "Easy Connect" setup for local models via LM Studio, specifically for Android deployments.
*   **Codex OAuth Streaming Bugs:** [Issue #2674](https://github.com/sipeed/picoclaw/issues/2674) (7 comments, 4 👍) details an ongoing struggle with ChatGPT backend streaming returning empty responses—a pain point officially resolved by today's [PR #2967](https://github.com/sipeed/picoclaw/pull/2967).
*   **Release Cadence & UX Feedback:** [Issue #2952](https://github.com/sipeed/picoclaw/issues/2952) (3 comments) captures user eagerness for a new stable release, alongside practical UX feedback requesting better API key management, provider drop-downs, and model list fetching in the UI.

## 5. Bugs & Stability
*   🔴 **High Severity: OpenAI/Codex OAuth Empty Responses.** A critical failure where token streaming was ignored ([Issue #2953](https://github.com/sipeed/picoclaw/issues/2953), [Issue #2674](https://github.com/sipeed/picoclaw/issues/2674)). *Status: Fixed / PR Merged ([PR #2967](https://github.com/sipeed/picoclaw/pull/2967)).*
*   🟡 **Medium Severity: Context Compression Stuck.** [Issue #2968](https://github.com/sipeed/picoclaw/issues/2968) reports the `/context` token count getting stuck at exactly 76800 tokens, failing to compress properly when using the MiniMax provider on FreeBSD.
*   🟢 **API Compatibility Breakage:** [PR #2979](https://github.com/sipeed/picoclaw/pull/2979) (Open) addresses a breaking change in the `anthropic-sdk-go v1.46.0` update where a helper function was removed, requiring immediate patching to maintain Anthropic provider stability.

## 6. Feature Requests & Roadmap Signals
*   **Omniroute Integration:** [Issue #2978](https://github.com/sipeed/picoclaw/issues/2978) requests adding Omniroute as a native provider, signaling user demand for broader AI gateway/router compatibility.
*   **Advanced Cron Management:** [PR #2977](https://github.com/sipeed/picoclaw/pull/2977) proposes adding `get` and `update` actions to the agent cron tool, moving towards more sophisticated autonomous scheduling.
*   **Android/Termux Native Support:** [PR #2902](https://github.com/sipeed/picoclaw/pull/2902) introduces a dedicated Android Termux guide, indicating a strategic push to support edge deployments on ARM64 mobile devices.
*   *Next Version Prediction:* Based on the recent nightly tags and merged PRs, the upcoming `v0.2.9` stable release will almost certainly focus heavily on stream parsing reliability, Anthropic SDK compatibility, and web multimedia handling.

## 7. User Feedback Summary
Users are actively utilizing PicoClaw across diverse environments (FreeBSD, Android, Telegram) but experience friction with provider configurations. The returning theme is that while the core agent loop is powerful, the surrounding UX for onboarding new models (API key reuse, fetching `/models`, connecting to local LM Studio) needs streamlining. Furthermore, users expect the core agent configuration (`agent.md`) to be respected more strictly during channel restarts to prevent infinite loops.

## 8. Backlog Watch
The following stalled items require immediate maintainer triage:
*   **[PR #2936](https://github.com/sipeed/picoclaw/pull/2936):** A valuable stability fix that skips agent skills if required binaries are missing on the host system. Highly requested for low-resource devices, currently marked stale.
*   **[PR #2906](https://github.com/sipeed/picoclaw/pull/2906) & [PR #2904](https://github.com/sipeed/picoclaw/pull/2904):** Crucial infrastructure PRs by contributor `SiYue-ZO` addressing message bus backpressure and agent loop panics during reloads. These are vital for long-term runtime stability and need final review.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest — 2026-06-01**

### 1. Today's Overview
NanoClaw experienced a highly active day focused heavily on platform stability, multi-tenancy, and extending integration capabilities. The community and contributors identified critical single-threaded host freezing issues and file descriptor limits affecting the OneCLI gateway. Meanwhile, active PRs today introduced highly anticipated support for HTTP/SSE MCP servers, container lifecycle improvements, and multi-user configurations. With 5 new active issues and 7 open pull requests, the project is in a rapid iterative phase, prioritizing architectural robustness alongside skill extensibility.

### 2. Releases
There were **0 new releases** recorded today. The current development cycle remains focused on merging foundational fixes and architectural PRs, likely building towards a future stability release.

### 3. Project Progress
Two PRs were closed today, though they appear to be preliminary or guideline-compliance submissions:
*   **Closed PR [#2648](https://github.com/nanocoai/nanoclaw/pull/2648):** `[follows-guidelines] feat: add /upload-trace command to upload session trace to Hugging Face` (Closed).
*   **Closed PR [#2658](https://github.com/nanocoai/nanoclaw/pull/2658):** `[follows-guidelines] Actual deployment` (Closed).

Several major feature PRs advanced into the review pipeline:
*   **PR [#2662](https://github.com/nanocoai/nanoclaw/pull/2662):** `feat: add HTTP/SSE MCP server support` - Upgrades the `McpServerConfig` from stdio-only to support HTTP/SSE, enabling hosted/remote MCP integrations.
*   **PR [#2661](https://github.com/nanocoai/nanoclaw/pull/2661):** `feat: register per-group skills as Claude Code slash commands` - Fixes an issue where group-specific skills were mounted but invisible to Claude Code as slash commands.
*   **PR [#2656](https://github.com/nanocoai/nanoclaw/pull/2656):** `fix(add-mnemon): run mnemon setup in index.ts main()` - Resolved a bug where host ENTRYPOINT overrides prevented `mnemon setup` from running in `entrypoint.sh`.

### 4. Community Hot Topics
*   **Supply Chain Security in MCPs:** The most-discussed issue today was **[#2641](https://github.com/nanocoai/nanoclaw/issues/2641)** (`Supply chain risk - @gongrzhe/server-gmail-autoauth-mcp`). Raised by `NoamGit`, it highlights risks of AI agents installing unverified third-party packages (like auto-auth MCPs) that could phish user credentials. This underscores the community's growing demand for a secure, permission-aware MCP ecosystem.

### 5. Bugs & Stability
NanoClaw's stability vulnerabilities were thoroughly mapped today by contributor `mshirel`, who identified fragility in the OneCLI gateway and host event loop:
1.  **Critical - Host Event Loop Freezing:** **[#2665](https://github.com/nanocoai/nanoclaw/issues/2665)** warns that unbounded synchronous ops or `execSync` block the single-threaded Node event loop, rendering standard `/health` checks useless. *No fix PR is open yet.*
2.  **Critical - Gateway Silent Outages:** **[#2655](https://github.com/nanocoai/nanoclaw/issues/2665)** notes the OneCLI proxy hard-crashes on a 1024 file descriptor soft limit under burst load, taking all agent traffic down silently. *No fix PR is open yet.*
3.  **High - Self-Healing Deficit:** **[#2657](https://github.com/nanocoai/nanoclaw/issues/2657)** points out that Docker `restart:` policies fail to recover dead worker processes inside the OneCLI container. *No fix PR is open yet.*
4.  **Medium - Container Lifecycle Leaks:** **[#2659](https://github.com/nanocoai/nanoclaw/pull/2659)** addresses silent container leaks via a proposed fix to reap containers via host PID when the daemon refuses to stop them. *Fix PR is open.*

### 6. Feature Requests & Roadmap Signals
*   **Multi-Tenancy / Multi-User Support:** `elancode` opened **[#2653](https://github.com/nanocoai/nanoclaw/issues/2653)** requesting support for independent Telegram bots, memory, and agent folders for multiple users on a single host (e.g., a shared family Mac). With the user/role data model already supporting this, it is highly likely to be merged into the next major release.
*   **Browser Scraping Sidecar:** **PR [#2664](https://github.com/nanocoai/nanoclaw/pull/2664)** proposes running a cf-fetch/nodriver sidecar within the v2 container to bake in web-fetch and rental scraping skills, signaling a strong push toward native, containerized web-interaction capabilities.
*   **Skill Symlinks:** **PR [#2660](https://github.com/nanocoai/nanoclaw/pull/2660)** introduces support for mounting external symlink targets for per-group skills, paving the way for shared host-level skill libraries.

### 7. User Feedback Summary
Real-world users are utilizing NanoClaw as persistent local agents on mini-PCs but are hitting friction with single-user assumptions and system resource limits. The request for multi-user support on a Mac Mini highlights a strong consumer/household use case. Additionally, issues with `platform-id` routing (addressed in PR **[#2654](https://github.com/nanocoai/nanoclaw/pull/2654)**) indicate users are running complex multi-adapter setups where chat-sdk keys differ from channel registry keys. Overall, users love the local-containerized AI concept but currently face brittleness during high-load or multi-user scenarios.

### 8. Backlog Watch
*   **Supervision & Auto-Recovery Needs:** **[#2657](https://github.com/nanocoai/nanoclaw/issues/2657)** (supervise OneCLI gateway on connection loss) needs immediate maintainer attention to prevent silent outages.
*   **Platform ID Bug:** Maintainers should review **PR [#2654](https://github.com/nanocoai/nanoclaw/pull/2654)**, as it resolves edge-case routing failures for users utilizing multiple chat SDK adapters.
*   **Security Audit Backlog:** **[#2641](https://github.com/nanocoai/nanoclaw/issues/2641)** should be escalated into a general documentation or architectural guideline regarding third-party MCP installations to protect users from supply-chain attacks.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-01

## 1. Today's Overview
NullClaw experienced low-to-moderate activity over the past 24 hours, characterized entirely by issue submissions rather than code merges or releases. Two new bug reports were opened by the same contributor, highlighting specific edge cases in the platform's Telegram bot integration, specifically regarding scheduled agent tasks and interactive UI elements. With zero pull requests updated and no new releases, the project is currently in a feature freeze or passive maintenance phase for this specific timeframe. The overall project health appears stable but reliant on maintainers to triage these newly reported integration bugs to prevent stalling active development.

## 2. Releases
No new releases were recorded today. There are no breaking changes, feature drops, or migration notes to report.

## 3. Project Progress
No progress was made in the form of merged or closed pull requests in the last 24 hours. Current development momentum appears to be paused, or developers are actively working on local branches that have not yet been pushed to the public repository. Progress is currently blocked or awaiting triage for the newly reported Telegram integration issues.

## 4. Community Hot Topics
While today's issues have not yet generated significant comment threads or reactions, the following reports represent the most active points of discussion:
*   **[Issue #941](https://github.com/nullclaw/nullclaw/issues/941) - Agent-type cron jobs don't spawn a subprocess:** This report highlights a critical flaw in how cron jobs handle agent delivery modes.
*   **[Issue #942](https://github.com/nullclaw/nullclaw/issues/942) - Telegram: missing typing indicator (callback_query):** Highlights a UX gap in interactive Telegram bots.

**Underlying Needs:** Both issues were submitted by user `weissfl` and point to a strong community need for robust, seamless Telegram integration. Specifically, users are building complex, asynchronous workflows (cron-driven agents) and interactive conversational UIs (`nc_choices`), indicating that NullClaw is being utilized for heavy task-automation via messaging platforms.

## 5. Bugs & Stability
Two bugs were reported today, both related to the Telegram delivery channel, and neither currently has an associated fix PR:

1.  **[High Severity] [Issue #941](https://github.com/nullclaw/nullclaw/issues/941):** Scheduled tasks configured with `job_type: "agent"` fail to spawn the necessary subprocess. Consequently, the task marks itself as "completed" without executing, and the Telegram message delivery silently fails. This is a critical workflow breaker for users relying on automated agent scheduling.
2.  **[Low/Medium Severity] [Issue #942](https://github.com/nullclaw/nullclaw/issues/942):** Missing "typing..." indicator in Telegram when users interact with inline buttons (`callback_query`). While functional, this degrades the user experience by making the bot appear unresponsive during processing. 

## 6. Feature Requests & Roadmap Signals
There were no explicit feature requests submitted today. However, the bug reports provide strong roadmap signals. The fact that users are attempting to utilize `job_type: "agent"` alongside `nc_choices` indicates that the community is pushing the platform toward more autonomous, event-driven personal assistant capabilities. Maintainers should prioritize ensuring that the agent subprocess spawner and real-time UI feedback mechanisms (like typing indicators) are fully supported in asynchronous and scheduled environments.

## 7. User Feedback Summary
Real user pain points today center heavily around execution reliability and bot UX within the Telegram ecosystem. Users expect deterministic behavior from scheduled agent tasks; silent failures (where a task says it is completed but fails to trigger the agent or deliver a message) severely degrade trust in the system. Additionally, users expect inline button interactions to mirror the responsive feel of standard text-based chats. Overall satisfaction is likely tied directly to how reliably NullClaw can serve as an always-on, responsive Telegram assistant.

## 8. Backlog Watch
As today's issues (#941 and #942) were just opened, they represent the immediate backlog. 
*   **Action required:** Maintainers should prioritize investigating [Issue #941](https://github.com/nullclaw/nullclaw/issues/941), as silent failures in cron jobs can lead to missed tasks and unreliable AI agent behavior. Confirming whether this is a regression or a configuration documentation issue will be vital for the next patch cycle.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-01

## 1. Today's Overview
IronClaw is experiencing a **high-velocity development phase**, driven almost entirely by its core maintainers pushing forward the "Reborn" initiative—a major architectural overhaul of authentication, credential management, and runtime egress. With 16 open PRs updated today and no new releases, the project is in a heavy feature-building and integration period. Dependency management is highly active, with multiple automated dependabot bumps keeping the Rust ecosystem and GitHub Actions up to date. While core contributions dominate, community contributors are beginning to engage around the new WebUI v2 and E2E testing infrastructure. 

## 2. Releases
**No new releases were published today.** The project remains in an active development/integration phase, likely building towards a significant minor or major version bump once the "Reborn" authentication and trigger features are merged.

## 3. Project Progress
Seven PRs were merged or closed today, indicating steady progress on core infrastructure and developer experience:
*   **Triggers Infrastructure:** The foundation for the new triggers system was merged in [PR #4261](https://github.com/nearai/ironclaw/pull/4261) (ironclaw_triggers crate skeleton), paving the way for durable cron-based triggers via the still-open [PR #4263](https://github.com/nearai/ironclaw/pull/4263).
*   **Auth/OAuth (Reborn):** Core maintainer `serrrfirat` merged a massive XL-sized PR, [PR #4257](https://github.com/nearai/ironclaw/pull/4257), wiring the `AuthPromptView` challenge enrichment and WebUI v2 OAuth cards for GSuite, Notion, and GitHub. 
*   **Dependency Hygiene:** Six dependabot PRs across Rust crates (tokio ecosystem, WASM tools, serialization) and GitHub Actions were processed, keeping the codebase secure and up-to-date.

## 4. Community Hot Topics
*   **[Issue #2923](https://github.com/nearai/ironclaw/issues/2923) - Stdio MCP Activation Bug:** This issue generated the most community discussion today (4 comments, 1 upvote). User `rajulbhatnagar` highlights that `stdio` transport for MCP servers is fundamentally broken in `v0.25.0` due to an activation pre-flight bug, correcting a previous maintainer assumption that stdio wasn't supported. This indicates active MCP integrations are currently hitting a wall during local setups.
*   **[Issue #228](https://github.com/nearai/ironclaw/issues/228) - Sub-job Delegation Policy:** Opened by core contributor `ilblackdragon` in February, this feature request (1 comment) addresses the lack of a "deny-by-default" policy for LLM-spawned sub-jobs. The underlying need is critical agent safety: preventing runaway job creation caused by LLM hallucinations or prompt injections.

## 5. Bugs & Stability
*   **🔴 P1 - Nightly E2E Failure:** [Issue #4108](https://github.com/nearai/ironclaw/issues/4108) reports that the scheduled Nightly E2E run failed on commit `749f584`. No fix PR is attached yet. Failing nightly CI blocks confident merging of the Reborn stack.
*   **🟡 P2 - HTTP Egress Synchronous Bottleneck:** [Issue #4206](https://github.com/nearai/ironclaw/issues/4206) (Closed) documents that the runtime HTTP egress is synchronous end-to-end. While a fix PR isn't explicitly linked in today's data, the issue closure suggests an upcoming async refactor to prevent runtime blocking.
*   **🟠 P2 - Stdio MCP Transport:** As noted in Hot Topics, [Issue #2923](https://github.com/nearai/ironclaw/issues/2923) represents a tangible regression for users attempting to activate local stdio-transport MCP servers.

## 6. Feature Requests & Roadmap Signals
Today's PRs and Issues strongly signal the upcoming roadmap for the next major version:
*   **Advanced Outbound & Triggers:** The opening of [PR #4263](https://github.com/nearai/ironclaw/pull/4263) (libsql repository backend) and [PR #4262](https://github.com/nearai/ironclaw/pull/4262) (outbound communication resolution engine) show a massive push toward scheduled agent automations and multi-channel messaging.
*   **Expanded API Surface:** [PR #4264](https://github.com/nearai/ironclaw/pull/4264) introduces `POST /api/routines` to the web gateway, allowing programmatic creation of agent routines.
*   **User Experience & Telemetry:** [PR #4090](https://github.com/nearai/ironclaw/pull/4090) introduces configurable log truncation size via `IRONCLAW_LOG_MAX_BYTES`, a direct response to developer debugging pain points.

## 7. User Feedback Summary
*   **Pain Point - Debugging Blackboxes:** Users and contributors are actively trying to improve observability. [PR #4090](https://github.com/nearai/ironclaw/pull/4090) directly addresses the frustration of terminal logs being truncated at 500 bytes, making LLM tool-call debugging difficult.
*   **Pain Point - Local MCP Setup:** The persistence of [Issue #2923](https://github.com/nearai/ironclaw/issues/2923) highlights friction for developers trying to integrate local MCP tools using standard stdio transports.
*   **Satisfaction - E2E Tooling:** A positive signal comes from `denbite` ([PR #4265](https://github.com/nearai/ironclaw/pull/4265)), where an external contributor proactively wrote 7 live E2E CodeAct test scenarios, indicating that the project's E2E testing framework is usable and inviting to the community.

## 8. Backlog Watch
*   **[Issue #228](https://github.com/nearai/ironclaw/issues/228):** Open since February 2026, this sub-job delegation policy is crucial for enterprise safety and preventing uncontrolled agent cost-overruns. It needs a dedicated implementation PR.
*   **Large Dependency PR Backlog:** Several massive dependency bump PRs remain open and need review to prevent merge conflicts, including the 46-package bump ([PR #4268](https://github.com/nearai/ironclaw/pull/4268)) and the Tokio ecosystem update ([PR #4001](https://github.com/nearai/ironclaw/pull/4001)).
*   **CI Reliability:** [Issue #4108](https://github.com/nearai/ironclaw/issues/4108) requires maintainer attention to unblock the CI pipeline.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-06-01

### 1. Today's Overview
LobsterAI is currently experiencing a period of low maintenance activity, with zero issues closed and zero new releases today. The project's daily pulse consists of a single update to an existing, unresolved Pull Request. This lack of recent merges or new issue filings suggests a temporary lull in development or maintainer availability. While the codebase remains stable with no new crashes reported, the accumulation of stale items warrants attention to ensure long-term project health.

### 2. Releases
No new releases were recorded today. 

### 3. Project Progress
There was no forward movement in terms of merged PRs or closed issues today. 
*   **Stagnant PR:** The only recorded activity was an automated stale-bot update on a previously opened PR ([PR #1465](https://github.com/netease-youdao/LobsterAI/pull/1465)), indicating that it has been awaiting review for nearly two months without being merged or closed.

### 4. Community Hot Topics
Due to a complete lack of new issues, comments, or reactions in the past 24 hours, there are no active hot topics to report today. The community interaction channel is currently quiet.

### 5. Bugs & Stability
While no *new* bugs were reported today, a previously identified significant stability bug remains unresolved in the PR pipeline:
*   **[Moderate Severity] "Ghost Sessions" from Deleted Scheduled Tasks:** Users report that deleted scheduled tasks reappear as empty "ghost sessions" after the application is restarted. The root cause is incomplete data cleanup: the gateway-side task removal (`cron.remove`) does not delete associated local SQLite session records (`cowork_sessions`). 
    *   **Fix Status:** A fix is proposed in [PR #1465](https://github.com/netease-youdao/LobsterAI/pull/1465) (originally authored on 2026-04-04), but it remains unmerged and has been marked as `[stale]`.

### 6. Feature Requests & Roadmap Signals
There are no new feature requests or roadmap indicators from the past 24 hours. Given the current focus on resolving lingering data persistence bugs (like the ghost sessions), it is highly probable that the next minor release will be a targeted maintenance and bug-fix patch rather than a feature drop.

### 7. User Feedback Summary
No new direct user feedback was captured today. However, the historical data surrounding the open PR indicates a clear user pain point regarding local state management. Specifically, users expect that deleting a scheduled task completely eradicates its footprint, and they experience frustration when forced to repeatedly delete "ghost" sessions upon every app restart.

### 8. Backlog Watch
The following item requires immediate maintainer attention to prevent code rot and resolve a known user pain point:
*   **[PR #1465](https://github.com/netease-youdao/LobsterAI/pull/1465): fix(scheduled-tasks): 已删除的定时任务重启后作为幽灵会话重新出现.**
    *   **Why it matters:** Authored by `linlihua` on April 4th, this PR addresses a highly annoying data persistence bug. Having a viable fix sit unmerged for nearly two months risks merge conflicts with future updates and prolongs a negative user experience. Maintainers should review and merge or request revisions on this PR.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-06-01

## 1. Today's Overview
The Moltis project experienced a low-activity day, with zero new issues opened and no new releases published. However, repository maintainers and contributors remain engaged with ongoing development, as evidenced by a newly opened pull request introduced late yesterday. This PR focuses on enhancing the AI provider integrations, specifically targeting the OpenAI Codex adapter. Overall, the project appears to be in a stable, heads-down development phase with no urgent user-reported disruptions today.

## 2. Releases
No new releases were recorded today. There are no breaking changes, new features, or migration notes to report.

## 3. Project Progress
While no pull requests were merged or closed in the last 24 hours, active development is progressing on OpenAI Codex integration. 
*   **[OPEN] PR #1088 [[codex] Handle OpenAI Codex final tool-call arguments](https://github.com/moltis-org/moltis/pull/1088):** Authored by `s-salamatov`, this PR aims to improve how the Moltis platform handles tool-call argument payloads from the OpenAI Codex provider. Specifically, it introduces logic to record `response.function_call_arguments.done` payloads and synthesizes streaming argument deltas from final arguments when standard deltas are missing. This indicates an active effort to make AI agent tool-execution via Codex more robust and reliable.

## 4. Community Hot Topics
There are no highly active community discussions, issues, or PRs to report today, as the open PR (#1088) currently has zero comments and zero reactions. The underlying focus of recent repository activity points toward a developer-centric need for stricter and more reliable handling of streaming AI outputs, ensuring that tool calls do not fail due to missing argument deltas.

## 5. Bugs & Stability
No new bugs, crashes, or regressions were formally reported via GitHub Issues today. 
*   *Proactive Stability Fix:* Although not a user-reported bug, [PR #1088](https://github.com/moltis-org/moltis/pull/1088) acts as a preventative stability patch. By addressing "missing-argument errors" and ensuring empty accumulated argument strings flow correctly through decode diagnostics, the maintainer is actively patching an edge-case bug in the OpenAI Codex provider before it impacts broader users.

## 6. Feature Requests & Roadmap Signals
There were no explicit feature requests submitted by the community today. However, ongoing PRs provide strong roadmap signals:
*   **Deepening OpenAI Codex Support:** The work being done in [PR #1088](https://github.com/moltis-org/moltis/pull/1088) signals that native, robust support for OpenAI's Codex models (specifically their agentic tool-calling capabilities) is a high priority. We can predict that once this provider integration is fully polished, it will likely be included in an upcoming feature release.

## 7. User Feedback Summary
Due to a complete lack of new issues or comments today, there is no direct user feedback (pain points, use cases, or satisfaction metrics) to analyze for this 24-hour period.

## 8. Backlog Watch
The repository saw zero activity on older issues or PRs today. Maintainers should continue to monitor the resolution of [PR #1088](https://github.com/moltis-org/moltis/pull/1088), as merging it will be the next step in unblocking any users who are experimenting with Moltis as an OpenAI Codex agent wrapper.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-06-01

## 1. Today's Overview
The CoPaw (QwenPaw) project is experiencing **high community engagement**, with 17 issues updated in the past 24 hours (14 open/active) and 2 active pull requests. The project is in an active development and stabilization phase, with no new releases issued today. The majority of today's activity revolves around bug reports specific to the Windows desktop environment, as well as critical feature requests concerning resource optimization and chat concurrency. This sustained influx of detailed bug reports and architectural feature proposals indicates a healthy, rapidly growing user base that is actively pushing the software to its limits in production environments.

## 2. Releases
No new releases were recorded today. The community is actively reporting issues against version `v1.1.9`, indicating this is the current baseline.

## 3. Project Progress
One notable pull request was closed today, while another remains under open review:
*   **PR [#4810](https://github.com/agentscope-ai/QwenPaw/pull/4810) (Closed):** Improved the chat UI by adding current-agent skills to slash command suggestions, limiting the popup to 5 visible items, and introducing debug logs. This advances the chat console's usability.
*   **PR [#4689](https://github.com/agentscope-ai/QwenPaw/pull/4689) (Open):** Introduced a routing fix for non-standard provider parameters (like DashScope's `enable_search`) by funneling them into `extra_body` to prevent silent rejections by the OpenAI Python SDK. This is a crucial compatibility fix for multi-provider setups.

## 4. Community Hot Topics
The most actively discussed issues reveal underlying architectural growing pains related to multi-threading, resource management, and Windows desktop integration:
*   **Session Concurrency & Resource Exhaustion:** Users are actively discussing how to handle concurrent messages. Issue [#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) (8 comments) highlights cron jobs being interrupted by user messages. In response, a highly discussed proposal today is Issue [#4843](https://github.com/agentscope-ai/QwenPaw/issues/4843), which requests Interrupt, Queue, and Insert chat modes.
*   **MCP & Process Management:** Windows users with large-scale deployments are reporting severe resource bottlenecks. Issue [#4842](https://github.com/agentscope-ai/QwenPaw/issues/4842) reports MCP server instances exploding to hundreds of processes when running 300+ agents, indicating a strong community need for shared MCP server pools or lazy-loading mechanisms.
*   **Context Window Optimization:** Issue [#4836](https://github.com/agentscope-ai/QwenPaw/issues/4836) proposes on-demand tool loading. With users deploying 45+ tools, system prompts are consuming 55-65% of the context window (20-25K tokens), signaling a strong demand for dynamic context management.

## 5. Bugs & Stability
Stability issues reported today are significant, particularly for Windows desktop users. Ranked by severity:

**Critical / System Failure:**
*   **Fallback Loop Regression:** Issue [#4837](https://github.com/agentscope-ai/QwenPaw/issues/4837) reports that `v1.1.9` frequently triggers a system-level fallback response ("无法处理您的问题"), blocking normal agent interactions.
*   **Workspace Boot Failure:** Issue [#4835](https://github.com/agentscope-ai/QwenPaw/issues/4835) notes that a single invalid entry in `jobs.json` causes the entire workspace cron manager to fail to start. *No fix PR is currently visible.*
*   **Memory Compaction Crash:** Issue [#4833](https://github.com/agentscope-ai/QwenPaw/issues/4833) reports a code bug causing memory compaction to fail in the `pre_reasoning` hook.

**High / Resource Leaks (Windows):**
*   **MCP Process Accumulation:** Issue [#4834](https://github.com/agentscope-ai/QwenPaw/issues/4834) highlights old MCP processes failing to terminate after service restarts, causing severe console loading delays.
*   **Browser Residual Locks:** Issue [#4844](https://github.com/agentscope-ai/QwenPaw/issues/4844) reports browser processes and temp directory locks persisting after sessions end, preventing backups and causing cascading failures.

**Medium / UX Disruptions:**
*   **Console Window Flashing:** A collection of issues ([#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123), [#4832](https://github.com/agentscope-ai/QwenPaw/issues/4832), [#4828](https://github.com/agentscope-ai/QwenPaw/issues/4828)) all report the same annoyance: `execute_shell_command` flashes a console window on Windows due to a missing `CREATE_NO_WINDOW` flag.
*   **Ghost Skills/Cron Jobs:** Issue [#4839](https://github.com/agentscope-ai/QwenPaw/issues/4839) reports pip upgrades leaving stale `~` prefixed skill dirs on Windows, while [#4649](https://github.com/agentscope-ai/QwenPaw/issues/4649) (Closed) addressed orphaned cron jobs executing indefinitely.

## 6. Feature Requests & Roadmap Signals
Today's feature requests strongly signal the community's desire for **enterprise-grade concurrency and dynamic UI controls**:
*   **Chat Concurrency Control ([#4843](https://github.com/agentscope-ai/QwenPaw/issues/4843)):** Proposing Interrupt, Queue, and Insert modes for agent messaging.
*   **Thinking Effort UI ([#4840](https://github.com/agentscope-ai/QwenPaw/issues/4840)):** A UI selector to dynamically adjust the LLM's thinking level (reasoning effort) per message without editing config files.
*   **Tool-on-Demand ([#4836](https://github.com/agentscope-ai/QwenPaw/issues/4836)):** Lazy-loading tool JSON schemas to save ~60% of system prompt tokens.
*   **Silent Tool Execution ([#4838](https://github.com/agentscope-ai/QwenPaw/issues/4838)):**: Suppressing the agent's final text response after tool calls for cleaner automated workflows.

*Prediction for Next Version:* The next minor release will likely focus heavily on Windows desktop stability (specifically fixing subprocess window flashing and MCP process leaks) and optimizing the system prompt context window.

## 7. User Feedback Summary
Real user pain points center heavily around **Windows desktop friction** and **scalability limits**. Users deploying QwenPaw as a personal assistant on Windows are frustrated by background process mismanagement (zombie MCP servers, locked temp directories). Advanced users are hitting a ceiling with static system prompts, expressing dissatisfaction with massive token waste caused by injecting all tool schemas at once. However, the quality of the bug reports (providing detailed logs, root cause hypotheses, and exact reproduction steps) suggests a highly technical and invested user base that is willing to help the project mature.

## 8. Backlog Watch
*   **Issue [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) (Windows Console Flashing):** Created on May 8th, this issue has 8 comments and active duplicates being filed today. It significantly degrades the desktop UX and requires priority labeling and a targeted fix.
*   **PR [#4689](https://github.com/agentscope-ai/QwenPaw/pull/4689) (Provider Kwargs Routing):** Open since May 26th, this PR fixes silent failures when using non-standard provider args. Maintainer review is needed to unblock users relying on provider-specific features.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-06-01

## 1. Today's Overview
ZeptoClaw experienced a minimal activity day, with no code merges, new pull requests, or version releases recorded in the last 24 hours. The sole repository event was the swift closure of a security-focused issue related to webhook identity routing. From an AI agent architecture perspective, this indicates that while active development on new features is currently paused, automated security and maintenance workflows remain active and highly responsive. Overall project health appears stable, operating in a maintenance or planning phase.

## 2. Releases
No new releases were published today. There are no new versions, breaking changes, or migration notes to report.

## 3. Project Progress
No pull requests were merged or closed today, meaning no tangible feature advancements or bug fixes were pushed to the main codebase. The only recorded progress was in the security domain, with the completion of an automated repository-wide code scan. This milestone was tracked and closed directly via [Issue #609](https://github.com/qhkm/zeptoclaw/issues/609), ensuring that the webhook request identity flow adheres to current security baselines without requiring manual code changes.

## 4. Community Hot Topics
Community engagement and discussion volume were practically non-existent today. 

*   **Most Active Issue:** [Issue #609: chore(security): repository-wide Codex Security scan for webhook identity routing](https://github.com/qhkm/zeptoclaw/issues/609)
    *   **Analysis:** Authored by `daneschneider-oai` and generating exactly 1 comment and 0 reactions, this was an automated administrative task rather than a community discussion. The focus on "webhook request identity flow through admission and routing" suggests that maintainers (or automated systems) are actively ensuring that the AI assistant's external trigger mechanisms are secure against identity spoofing or unauthorized admission. 

## 5. Bugs & Stability
No new bugs, crashes, or regressions were reported by users today. There are currently no open issue tickets flagging stability problems. The successful closure of the security scan implies that no immediate critical vulnerabilities were detected in the webhook routing architecture.

## 6. Feature Requests & Roadmap Signals
No new feature requests were submitted by the community today. The automated scan focusing on "webhook identity routing" subtly signals that the project's roadmap prioritizes secure, scalable inbound data pipelines. Future updates may focus on hardening these webhook endpoints before new user-facing AI agent features are introduced.

## 7. User Feedback Summary
There is no direct user feedback, pain points, or use-case discussions to report from the last 24 hours. The absence of user complaints regarding bugs or documentation aligns with the assessment that the current version of the tool is stable for existing users.

## 8. Backlog Watch
Based on today's data snapshot, no long-unanswered issues or stalled pull requests requiring immediate maintainer attention were detected. Future digests will monitor if this lull in community engagement develops into a longer-term bottleneck for project contributors.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-01

## 1. Today's Overview
ZeroClaw is experiencing a highly active development phase, characterized by a massive influx of new feature PRs and ongoing architectural discussions. Activity remains predominantly contributor-driven, with **41 open PRs** updated today compared to only 9 merged/closed, indicating a heavy review cycle or integration phase. The simultaneous drafting of multiple high-level RFCs (routing, memory, cron) suggests the project is actively designing its next major architectural evolution, likely preparing the ground for the `v0.8.0-beta-2` milestone. 

## 2. Releases
**No new releases** were published today. However, PR [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) explicitly targets the integration basis for `v0.8.0-beta-2`, indicating that a major pre-release is currently being assembled and tested in the background.

## 3. Project Progress
Although only 9 PRs were merged/closed today, development is advancing rapidly on several fronts:
*   **Hardware & IoT:** A significant "Smart Room" ESP32 demo (extracted from PR [#6148](https://github.com/zeroclaw-labs/zeroclaw/pull/6148)) was submitted across four stacked PRs ([#7045](https://github.com/zeroclaw-labs/zeroclaw/pull/7045), [#7046](https://github.com/zeroclaw-labs/zeroclaw/pull/7046), [#7047](https://github.com/zeroclaw-labs/zeroclaw/pull/7047), [#7048](https://github.com/zeroclaw-labs/zeroclaw/pull/7048)), bringing named-device controls and a web simulator to the agent.
*   **Core Architecture:** The massive integration PR [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) (ZeroCode TUI and RPC socket transport) received follow-up fixes for config materialization ([#7028](https://github.com/zeroclaw-labs/zeroclaw/pull/7028)) and empty state handling ([#7029](https://github.com/zeroclaw-labs/zeroclaw/pull/7029)).
*   **Security & Refactoring:** Refactoring of allowlist matching across email and WhatsApp channels into a shared stateless utility (`aspect_std`) was initiated in PRs [#7018](https://github.com/zeroclaw-labs/zeroclaw/pull/7018) and [#7017](https://github.com/zeroclaw-labs/zeroclaw/pull/7017).

## 4. Community Hot Topics
The most engaging community discussions revolve around multi-tenancy, architecture, and provider flexibility:
*   **Provider Unification:** Issue [#5937](https://github.com/zeroclaw-labs/zeroclaw/pull/5937) (9 comments) highlights strong demand for cleaning up the `reqwest` client and model construction parameters, which currently suffer from high code duplication.
*   **Multi-Tenant Security:** Issue [#5982](https://github.com/zeroclaw-labs/zeroclaw/pull/5982) (8 comments) requests per-sender Role-Based Access Control (RBAC), revealing a mature user base attempting to deploy ZeroClaw in enterprise/complex scenarios where a single instance serves multiple user classes.
*   **Cron & Routing Architecture:** Two active RFCs—[#6954](https://github.com/zeroclaw-labs/zeroclaw/pull/6954) (route scheduled tasks through the orchestrator) and [#6969](https://github.com/zeroclaw-labs/zeroclaw/pull/6969) (unified output routing model)—show users migrating from frameworks like Letta and struggling with ZeroClaw's current isolated execution pipeline.

## 5. Bugs & Stability
Several critical bugs are currently impacting user workflows, primarily around providers and security configurations:
*   **Architecture Mismatch:** Issue [#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) details a high-severity problem where `zeroclaw update` downloads the wrong binary (x86_64 instead of aarch64) on Raspberry Pi devices.
*   **MCP Tool Security Bypass:** Issue [#6876](https://github.com/zeroclaw-labs/zeroclaw/issues/6876) notes that `allowed_tools` does not restrict MCP tools, creating a security gap for users relying on risk profiles. 
*   **Provider Blocks:** Users are completely blocked from using the Gemini CLI due to OAuth errors ([#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879), +2 👍) and Ollama fails when tools are invoked ([#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)).
*   *Fix Status:* A fix for the Kimi provider (`kimi-k2.6`) rejecting default temperatures is already proposed in PR [#7049](https://github.com/zeroclaw-labs/zeroclaw/pull/7049).

## 6. Feature Requests & Roadmap Signals
Feature requests signal a strong trajectory toward desktop automation, advanced memory, and composio integrations for the upcoming `v0.8.0` release:
*   **Computer Use:** RFC [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) proposes desktop GUI interaction (screen capture, mouse/keyboard events), aiming for parity with OpenAI Codex.
*   **Advanced Memory:** RFC [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) suggests decoupling memory strategy from storage, allowing pluggable context consolidation without modifying backends.
*   **Tool Scoping & Execution:** A cluster of high-priority feature requests ([#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914), [#6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915), [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916), [#6917](https://github.com/zeroclaw-labs/zeroclaw/issues/6917)) focuses on strictly enforcing tool allowlists, sandboxing skill-scoped tool activations, and applying process-memory limits to shell executions to prevent container OOMs.

## 7. User Feedback Summary
Users are actively utilizing ZeroClaw in diverse, multi-platform environments but are encountering friction with configuration and channel specifics:
*   **Deployment:** Users running ZeroClaw in Docker rootless environments are submitting updated documentation and YAML fixes ([#6760](https://github.com/zeroclaw-labs/zeroclaw/issues/6760)), indicating a need for better official Docker guides.
*   **Channel Quirks:** Telegram users are frustrated by the bot ignoring replies when `mention_only=true` is set ([#5866](https://github.com/zeroclaw-labs/zeroclaw/issues/5866)). Conversely, voice modality handling is rapidly improving via community PRs for OGG/Opus transcoding ([#7050](https://github.com/zeroclaw-labs/zeroclaw/pull/7050)).
*   **Cron Frustrations:** Users heavily rely on cron jobs for scheduled reporting, but the current side-effect execution model results in silent failures when routing outputs to Telegram/SMS, causing significant workflow disruptions ([#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647)).

## 8. Backlog Watch
Several significant issues and PRs are currently blocked and urgently require core maintainer review to unblock progress:
*   **Configuration Roadblocks:** PR [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) (TUI integration) is currently a "Do Not Merge" mega-PR holding up `v0.8.0-beta-2`. Additionally, the high-severity security RFCs ([#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914), [#6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915), [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916)) are all marked `needs-maintainer-review`.
*   **Git History Recovery:** Issue [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) tracks 153 commits lost in a bulk revert from March 2026. It is marked as `in-progress` but has stalled, putting previously approved bug fixes and features in limbo.
*   **Model Granularity:** Issue [#5843](https://github.com/zeroclaw-labs/zeroclaw/issues/5843) (moving reasoning configurations from global to per-model) remains `blocked`, holding back users who rely on mixed fast/slow model setups.

</details>