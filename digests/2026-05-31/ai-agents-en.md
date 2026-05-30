# OpenClaw Ecosystem Digest 2026-05-31

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-30 22:17 UTC

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

# OpenClaw Project Digest — 2026-05-31

## 1. Today's Overview
OpenClaw is experiencing an exceptionally high volume of activity today, with 500 issues and 500 pull requests updated within the last 24 hours. While the project demonstrates strong community engagement and rapid iteration, the ratio of open to closed items (435 open issues, 344 open PRs) suggests the core team is struggling to keep pace with triage and merges. The release of stable version `v2026.5.28` and its accompanying beta indicates a focused push to stabilize the Agent and Codex runtimes, which have been the source of significant user friction. However, channel-specific regressions (Feishu, Telegram) and runtime reliability issues continue to dominate community discussions.

## 2. Releases
Two new releases were published:

*   **v2026.5.28 (Stable)**
    *   **Highlights:** Agent and Codex runtime recovery is significantly steadier. Key improvements include better subagent `cwd`/workspace separation, hook context remaining prompt-local, session locks releasing on timeout aborts, and stale restart continuations being avoided. Codex app-server/helper failures no longer tear down shared runtime state.
    *   **Migration Notes:** Users on older versions experiencing Codex session locking or subagent workspace contamination should prioritize this upgrade.
*   **v2026.5.28-beta.4**
    *   **Highlights:** Includes the exact same Agent and Codex runtime recovery patches as the stable release for broader testing before the next cycle.

## 3. Project Progress
Today saw **156 PRs merged or closed**, indicating active development across the stack. Notable advancements include:

*   **Authentication & Security:** Significant work on OAuth and Windows pairing (#88427, #88163).
*   **Refactoring:** Major efforts to extract a normalization core package (#88459) and unify the OpenAI provider identity (#88451), which should reduce provider routing bugs long-term.
*   **UI & Memory:** Advancements in browser screenshot vision (#84247), UI agent selection (#78748), and memory isolation per agent (#79745).
*   **Channel Fixes:** Multiple targeted fixes for Telegram media edits (#86176), DM routing (#88421), and Discord image delivery (#88436).

## 4. Community Hot Topics
The most actively discussed issues center around **Channel Reliability** and **Provider Routing**:

*   **Codex OAuth Regression ([#86820](https://github.com/openclaw/openclaw/issues/86820)) - 12 comments:** Users report that compaction fails and falls back to direct API calls when using `gpt-5.5` with a valid OAuth profile. This highlights underlying fragility in the new OpenAI provider identity transitions.
*   **Feishu Channel Crash ([#87646](https://github.com/openclaw/openclaw/issues/87646)) - 11 comments:** A severe `TypeError` is blocking Feishu dispatch entirely after the v2026.5.27 upgrade.
*   **Image Tool Failures ([#73424](https://github.com/openclaw/openclaw/issues/73424)) - 9 comments:** A stale but active issue regarding the failure of image preprocessing pipelines when using custom VLMs.
*   **Matrix Thread Regression ([#87307](https://github.com/openclaw/openclaw/issues/87307)) - 8 comments:** Replies are sent as normal messages instead of Matrix threads, disrupting conversation continuity.

## 5. Bugs & Stability
Today's bug tracker is dominated by P1 reliability issues and provider regressions.

*   **P1 - Codex Telegram Turn Timeouts ([#87744](https://github.com/openclaw/openclaw/issues/87744)):** Codex-backed Telegram sessions repeatedly fail to deliver final answers. *Status: No fix PR linked yet.*
*   **P1 - Active Memory + Codex Latency ([#86996](https://github.com/openclaw/openclaw/issues/86996)):** Gateway event-loop stalls and hook timeouts when combining Active Memory with the Codex app-server path. *Status: Needs live repro.*
*   **P1 - Anthropic Thinking Block Failure ([#88020](https://github.com/openclaw/openclaw/issues/88020)):** Hard session crash instead of recovery retry when Anthropic expires early thinking block signatures. *Status: Fix PR #88252 open.*
*   **P1 - Windows Regression ([#76884](https://github.com/openclaw/openclaw/issues/76884)):** Gateway performance degrades severely with each new version on native Windows. *Status: Needs maintainer review.*
*   **Bug - Provider Mismatch ([#87650](https://github.com/openclaw/openclaw/issues/87650)):** `openclaw doctor --fix` fails to recover Codex provider/runtime mismatches after updates.

## 6. Feature Requests & Roadmap Signals
*   **Voice/Telephony Bridges ([#76952](https://github.com/openclaw/openclaw/issues/76952)):** Users are highly interested in expanding the Realtime Talk feature with clearer mobile/phone bridge documentation.
*   **Discord Voice-to-Text Agent IO ([#73699](https://github.com/openclaw/openclaw/issues/73699)):** Request to bridge Discord voice channels directly to text agent sessions instead of spinning up isolated voice instances.
*   **Xiaomi MiMo Token Plan Support ([#86169](https://github.com/openclaw/openclaw/issues/86169)):** Growing demand for custom Token Plan Base URL routing.
*   **Roadmap Prediction:** The immediate roadmap will likely focus on stabilizing the unified OpenAI provider identity (PR #88451) and fixing Feishu/Telegram dispatch bugs, given the volume of related PRs and issues.

## 7. User Feedback Summary
Users are expressing significant frustration with **upgrade stability**. Many reports cite scenarios where upgrading to the latest stable version (e.g., 5.27 or 5.22) breaks previously functional channel integrations (Matrix, Feishu) or causes severe performance regressions (Windows).

However, there is visible enthusiasm for advanced features like the **Browser Screenshot Vision** and **Memory/QMD Isolation**. Pain points are heavily concentrated on edge cases involving complex setups: subagent routing, multi-model fallbacks, and the Codex app-server bridge.

## 8. Backlog Watch
Several critical issues are aging out and require immediate maintainer attention:

*   **SQLite ABI Mismatch ([#65156](https://github.com/openclaw/openclaw/issues/65156)):** Memory vector search has been completely broken for some Linux users since v4.11 due to `sqlite-vec` loading issues.
*   **Security: Windows `exec()` Corruption ([#48780](https://github.com/openclaw/openclaw/issues/48780)):** Tool calls are being appended with garbage `> suffix` characters on Windows, posing a security risk to command execution.
*   **Plugin Config Read-Only Limitation ([#72950](https://github.com/openclaw/openclaw/issues/72950)):** In policy-locked sandboxes, plugins cannot update configs at runtime without a full image rebuild.
*   **Bounded Log Growth ([#75380](https://github.com/openclaw/openclaw/issues/75380)):** `provider-payload.jsonl` and `cache-trace.jsonl` still grow indefinitely with no rotation policy, eventually consuming host disk space.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digests from May 31, 2026.

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem on May 31, 2026, is characterized by rapid iteration, with projects competing to define the standard for "local-first," multi-channel agentic frameworks. A clear architectural convergence is occurring around modular runtimes, tool-sandboxing, and unified channel adapters, enabling AI agents to operate seamlessly across platforms like Discord, Telegram, and enterprise messaging systems via MCP and standardized protocols. The ecosystem is aggressively tackling the friction points of multi-modal integration, LLM provider routing, and persistent memory—core requirements for transitioning agents from simple chatbots to reliable, autonomous digital workers. Meanwhile, mature UI expectations (such as native diff viewers and IDE-like controls) are being demanded by power users.

## 2. Activity Comparison
*Health Score is rated 1-5 (5 = High Velocity/Healthy, 3 = Maintaining, 1 = Stagnant).*

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 updated | 500 updated | **v2026.5.28 (Stable)** | 4.5 |
| **Hermes Agent** | 50 updated | 50 updated | None | 4.5 |
| **ZeroClaw** | 18 updated | 50 updated | Pre-release (v0.8.0-beta) | 4.5 |
| **IronClaw** | 2 updated | 24 updated | Blocked by upstream CVE | 4.0 |
| **PicoClaw** | 7 updated | 12 updated | Nightly build available | 4.0 |
| **NanoClaw** | 0 new | 15 updated | None | 3.5 |
| **NanoBot** | 7 updated | 15 updated | None | 4.5 |
| **CoPaw** | 12 updated | 3 updated | None (v1.1.9 current) | 3.5 |
| **NullClaw** | 0 new | 2 closed | Pending (v2026.5.29) | 3.0 |
| **LobsterAI** | 1 new | 0 merged | None (PRs going stale) | 2.0 |
| **TinyClaw / Moltis / ZeptoClaw**| 0 | 0 | N/A | 1.0 |

## 3. OpenClaw's Position
**Advantages:** OpenClaw remains the massive core reference implementation within the ecosystem. Its scale (500+ daily issues/PRs) indicates a sprawling, highly active community and a broad catchment area for edge-case bug reports. Its immediate advantage is release velocity and established patterns for complex setups (Codex app-server bridges, Active Memory, and subagent workspaces). 
**Disadvantages / Risks:** OpenClaw is currently showing signs of scaling bottlenecks. While it merges hundreds of PRs, the ratio of open issues (435) and PRs (344) suggests the core team is struggling to keep pace with triage. Severe channel regressions (Feishu, Telegram) and OS-level bugs (Windows gateway lag) are aging out in the backlog, posing stability risks.
**Technical Approach:** OpenClaw operates as an all-in-one, monolithic-adjacent framework compared to peers. While IronClaw focuses on WASM/sandboxing and Hermes focuses on local/cloud bridging, OpenClaw attempts to provide a universal routing layer for all providers and channels natively.

## 4. Shared Technical Focus Areas
Several universal requirements are emerging simultaneously across independent projects, highlighting broader industry needs:

*   **Context Window & Memory Management:**
    *   *Projects:* OpenClaw, Hermes Agent, ZeroClaw, NanoBot, PicoClaw.
    *   *Needs:* As models handle longer tasks, basic history is failing. Projects are actively implementing RAG (NanoBot), structured compaction (IronClaw), and isolated per-agent memory (OpenClaw). ZeroClaw and Hermes users are specifically reporting broken agentic loops when context compression strips away "reasoning tokens."
*   **Cross-Platform Channel Reliability:**
    *   *Projects:* OpenClaw, Hermes Agent, PicoClaw, ZeroClaw.
    *   *Needs:* Telegram, Discord, Feishu, and Matrix integrations break frequently due to specific media-handling or dispatch errors. Projects are investing heavily in standardizing channel adapters (e.g., ZeroClaw's `AllowlistAspect` migration) to prevent regressions.
*   **Cloud-Native & Enterprise Auth Integration:**
    *   *Projects:* PicoClaw, IronClaw, CoPaw.
    *   *Needs:* Enterprise adoption is driving demand for SSO (IronClaw's GSuite/GitHub), OAuth token management, and secure credential proxying (PicoClaw's Azure Identity support).
*   **Multi-Modal & Voice Pipelines:**
    *   *Projects:* NanoBot, NanoClaw, Hermes Agent.
    *   *Needs:* Local voice transcription (whisper.cpp) and seamless Voice-to-Text agent I/O are becoming standard feature expectations.

## 5. Differentiation Analysis

*   **Local-First vs. Cloud-First vs. Enterprise:**
    *   **Hermes Agent & ZeroClaw** are heavily focused on "local-first" users, prioritizing local LLM hosting (Ollama/vLLM) and combating system prompt bloat for small models.
    *   **OpenClaw & IronClaw** target heavy-duty cloud and enterprise orchestration, focusing on complex multi-agent runtimes, WASM sandboxing (IronClaw), and OAuth standards.
*   **Desktop UI vs. Headless/Daemon:**
    *   **CoPaw (QwenPaw)** is clearly pivoting toward a standalone IDE-like desktop environment (competing directly with Cursor/Trae), focusing on diff-viewers and local file state management. 
    *   **LobsterAI** is also focusing on a rich graphical user experience (Tauri-based).
    *   **OpenClaw & ZeroClaw** remain primarily daemon/backend-first, utilizing web UIs or CLIs as control surfaces.
*   **Security Postures:**
    *   **IronClaw** stands out by utilizing WASM (`wasmtime`) for strict sandboxing and read-time injection scanning.
    *   **Hermes Agent** and **NanoBot** are currently undergoing heavy security audits to prevent command injection (`shell=True` removal) and SSRF/Race conditions.

## 6. Community Momentum & Maturity
Projects can be segmented into three distinct tiers of maturity based on activity:

*   **Hyper-Growth / Rapid Iteration:** OpenClaw, ZeroClaw, and Hermes Agent. These projects have massive open issue/PR counts. They iterate quickly but risk destabilizing their main branches (evidenced by OpenClaw and Hermes users reporting broken core features post-upgrade).
*   **Architectural Refactoring (Maturing):** IronClaw, NanoBot, and PicoClaw. These projects are showing maturity by pausing feature releases to focus on deep architectural refactoring (e.g., IronClaw's "Reborn" migration, NanoBot's concurrency locks, PicoClaw's build-tag implementations). Their maintainer turnaround times are excellent.
*   **Maintenance / Slowing:** LobsterAI, NullClaw. These projects show minimal to zero community PR merges, relying on core maintainers for basic version bumps and housekeeping.

## 7. Trend Signals
For technical decision-makers and AI agent developers, the following trends are critical:

1.  **"Reasoning Tokens" are Breaking Legacy Stacks:** The rise of advanced reasoning models (DeepSeek V4, Kimi K2.6) is breaking legacy agent routing. Context compression algorithms built for older models are inadvertently stripping crucial `reasoning_content` blocks, leading to silent failures and HTTP 400 errors. Providers must implement reasoning-aware context windows immediately.
2.  **Aggressive Security Hardening:** As agents gain the ability to execute code (`exec`) and modify file systems, the open-source community is rapidly patching command injection vectors and enforcing strict sandboxing (e.g., `shlex.split`, WASM plugins). Trust in unmerged community plugins is at an all-time low.
3.  **Local-Model Tolerance:** Developers are rejecting hardcoded timeout limits and bloated system prompts. Frameworks must allow fine-grained control over background cron jobs, temperature parameters, and idle timeouts to accommodate users running LLMs on consumer hardware (e.g., RTX 2070s via WSL2).
4.  **The Rise of "Agentic Reversibility":** Users are demanding IDE-level control over agent actions. There is a strong trend toward integrating granular rollback features, diff-viewers for file edits, and clear approval workflows before an agent executes shell commands (specifically requested in CoPaw and ZeroClaw).

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-31

## 1. Today's Overview
NanoBot demonstrates highly active and healthy development dynamics today, with 7 issues updated (4 closed, 3 open) and 15 pull requests updated (6 merged/closed, 9 open). The maintainer team is highly responsive, showing a strong “issue-to-fix” turnaround, often resolving newly reported critical bugs within 24 hours. Current engineering efforts are heavily concentrated on enhancing core architectural stability (e.g., concurrency locks, security bounds) and expanding integration capabilities (e.g., voice transcription, RAG memory, agent collaboration). While there are no new version releases today, the volume and quality of merged contributions suggest a solid patch or minor feature release is likely imminent.

## 2. Releases
No new releases were recorded today (2026-05-31). The project continues to distribute changes through its standard branch/merge workflow, accumulating critical bug fixes and feature additions for its next stable tag.

## 3. Project Progress
The project saw substantial progress today, with 6 PRs merged/closed, heavily focused on system stability, security, and user experience:
*   **Critical Concurrency Fix ([PR #4104](https://github.com/HKUDS/nanobot/pull/4104)):** Fixed a severe bug where `process_direct` bypassed per-session dispatch locks, preventing potential history corruption during concurrent API or SDK calls.
*   **Security Hardening:** Two significant security PRs were merged. [PR #4086](https://github.com/HKUDS/nanobot/pull/4086) normalized IPv6-mapped IPv4 addresses to prevent SSRF bypasses, and [PR #4106](https://github.com/HKUDS/nanobot/pull/4106) enforced size limits on Matrix inbound media downloads to prevent resource exhaustion.
*   **UX & Configuration:** [PR #4054](https://github.com/HKUDS/nanobot/pull/4054) introduced a highly requested toggle to disable the Dream system cron job ([Issue #3885](https://github.com/HKUDS/nanobot/issues/3885)) and fixed Anthropic content block type errors. [PR #4108](https://github.com/HKUDS/nanobot/pull/4108) refined the WebUI timeline and model controls for a better admin experience.
*   **Matrix Verification:** [PR #4110](https://github.com/HKUDS/nanobot/pull/4110) added opt-in SAS device verification for Element X clients, successfully closing a major usability blocker for Matrix E2EE users.

## 4. Community Hot Topics
*   **Dream System Control ([Issue #3885](https://github.com/HKUDS/nanobot/issues/3885) - 4 comments):** Users expressed frustration that memory/Dream cron jobs run unconditionally. The underlying need is for greater operational control and resource management, especially in specialized deployments where memory features are unnecessary. This was successfully addressed in [PR #4054](https://github.com/HKUDS/nanobot/pull/4054).
*   **Matrix End-to-End Encryption Trust ([Issue #4042](https://github.com/HKUDS/nanobot/issues/4042) - 1 comment):** The lack of `m.key.verification.*` handling prevented users of Element X from easily clearing "unverified device" warnings. The community is actively pushing for seamless, standards-compliant encrypted messaging, resolved today via [PR #4110](https://github.com/HKUDS/nanobot/pull/4110).
*   **Memory & RAG Evolution ([PR #4109](https://github.com/HKUDS/nanobot/pull/4109) & [PR #4050](https://github.com/HKUDS/nanobot/pull/4050)):** A strong community focus remains on autonomous memory management, with active discussions around adding lightweight RAG and manual memory modes to make agents contextually aware without forcing automated cron jobs.

## 5. Bugs & Stability
Several bugs were reported and prioritized by severity, with maintainers providing immediate fixes:
*   **High Severity - Race Condition / History Corruption ([Issue #4080](https://github.com/HKUDS/nanobot/issues/4080)):** Direct processing bypassed session locks, risking state corruption. *Fix Status: Closed via [PR #4104](https://github.com/HKUDS/nanobot/pull/4104).*
*   **Medium Severity - Noisy Notifications ([Issue #4111](https://github.com/HKUDS/nanobot/issues/4111)):** The Heartbeat task incorrectly pushed "All clear." to Feishu when no tasks were pending, causing user annoyance. *Fix Status: Open fixes submitted ([PR #4114](https://github.com/HKUDS/nanobot/pull/4114), [PR #4112](https://github.com/HKUDS/nanobot/pull/4112)).*
*   **Low Severity - Provider Parsing Drops Content ([Issue #4105](https://github.com/HKUDS/nanobot/issues/4105)):** Custom providers dropped `reasoning_content` if passed as an empty string during tool calls. *Fix Status: Acknowledged, pending patch.*
*   **Low Severity - Anthropic API Rejection ([Issue #3993](https://github.com/HKUDS/nanobot/issues/3993)):** Missing "type" declarations in content blocks caused errors with Anthropic models. *Fix Status: Closed via [PR #4054](https://github.com/HKUDS/nanobot/pull/4054).*

## 6. Feature Requests & Roadmap Signals
Community PRs and issues indicate the project is rapidly expanding its AI orchestration and multi-modal capabilities. Signals for the next version include:
*   **Advanced Voice & Memory Architecture:** [PR #4113](https://github.com/HKUDS/nanobot/pull/4113) introduces configurable STT models and OpenRouter transcription, strongly signaling a push toward unified multi-modal voice interaction. Concurrently, [PR #4109](https://github.com/HKUDS/nanobot/pull/4109) (RAG for memory) and [PR #4050](https://github.com/HKUDS/nanobot/pull/4050) (manual memory mode) indicate a massive overhaul of the agent context window is underway.
*   **Multi-Agent Collaboration:** [PR #3992](https://github.com/HKUDS/nanobot/pull/3992) introduces a cross-instance message bus, showing that the roadmap is moving from single-agent execution toward decentralized, collaborative agent swarms.
*   **Sandbox Flexibility:** [Issue #4107](https://github.com/HKUDS/nanobot/issues/4107) requests custom bind mounts for the `bwrap` sandbox, highlighting a user need to execute more complex, locally-aware secure tools.

## 7. User Feedback Summary
Users are deploying NanoBot in complex, multi-platform environments (Feishu, Matrix, custom providers) and acting as advanced operators. The feedback reveals high technical engagement but exposes friction in configuration rigidity (e.g., hardcoded Dream jobs, hardcoded whisper models). There is clear demand for granular control over background processes and better multi-platform protocol support (specifically regarding Matrix E2EE). Overall, users are highly invested, transitioning from passive consumers to active contributors submitting sophisticated architectural PRs (e.g., RAG implementations, cross-agent messaging).

## 8. Backlog Watch
The following older or complex items require maintainer attention for final review or merging:
*   **[PR #3992](https://github.com/HKUDS/nanobot/pull/3992) (Open since 2026-05-24):** The Agent Collaboration cross-instance message bus is a massive architectural addition. It requires thorough security and architectural review before merging.
*   **[PR #3994](https://github.com/HKUDS/nanobot/pull/3994) & [PR #3997](https://github.com/HKUDS/nanobot/pull/3997) (Open since 2026-05-25):** Registry-driven provider configs and tokenizer pre-warming optimizations are awaiting merge; these are crucial for scaling and multi-provider stability.
*   **[PR #4034](https://github.com/HKUDS/nanobot/pull/4034) (Marked as [duplicate]):** The GitAgent Protocol support PR needs an official maintainer response to guide the contributor on whether this standard will be adopted natively or handled via a plugin.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-31

## 1. Today's Overview
Hermes Agent experienced a highly active day on May 31, 2026, with 50 issues and 50 pull requests updated within the last 24 hours. The project remains in a vigorous development phase with a strong open-source community focus, as indicated by the high ratio of open issues (41) and PRs (40). A significant portion of today's activity centers around hardening security (eliminating `shell=True` command injection vectors), fixing cross-provider session stability, and expanding platform integrations. Although there were no new software releases today, the substantial volume of targeted bug fixes and architectural PRs indicates active preparation for a future stable release.

## 2. Releases
No new releases were recorded today.

## 3. Project Progress
Significant progress was made across multiple subsystems, with 10 PRs merged/closed and several high-priority fixes advanced. Key advancements include:
*   **Security Hardening:** Ongoing efforts to remove `shell=True` vulnerabilities in favor of `shlex.split()` ([PR #35545](https://github.com/NousResearch/hermes-agent/pull/35545)) and secure dashboard auth gates using ASGI paths ([PR #35547](https://github.com/NousResearch/hermes-agent/pull/35547)).
*   **Kanban System Overhaul:** Multiple fixes targeted the Kanban system, addressing everything from archived board resurrection ([PR #35537](https://github.com/NousResearch/hermes-agent/pull/35537)) to auto-subscribing CLI sessions on task creation ([PR #35549](https://github.com/NousResearch/hermes-agent/pull/35549)) and promoting child tasks correctly ([PR #35550](https://github.com/NousResearch/hermes-agent/pull/35550)). 
*   **SimpleX Integration:** The SimpleX platform adapter received much-needed love, fixing inbound message IDs ([PR #35556](https://github.com/NousResearch/hermes-agent/pull/35556)), chunking long outbound messages ([PR #35558](https://github.com/NousResearch/hermes-agent/pull/35558)), and fixing WebSocket handshake rejections ([PR #35557](https://github.com/NousResearch/hermes-agent/pull/35557)).
*   **Thread Safety:** Architectural improvements were proposed to make the `MemoryManager` thread-safe with RLock ([PR #35551](https://github.com/NousResearch/hermes-agent/pull/35551)).

## 4. Community Hot Topics
The most actively discussed issues today highlight deep user engagement with provider configurations, local compute, and platform flexibility:
*   **Telegram Media Extraction:** ([Issue #35474](https://github.com/NousResearch/hermes-agent/issues/35474) - 4 comments) Users are actively discussing the failure of Hermes to extract `.md`/`.markdown` files during outbound MEDIA delivery, underscoring the need for robust file-handling capabilities on the Telegram platform.
*   **Context Length Detection with oMLX:** ([Issue #31272](https://github.com/NousResearch/hermes-agent/issues/31272) - 4 comments) A lingering issue regarding incorrect context size reporting for local models running on oMLX. This highlights the friction power-users face when trying to optimize local LLM configurations.
*   **Dashboard Proxy Regressions:** ([Issue #34227](https://github.com/NousResearch/hermes-agent/issues/34227) - 2 comments) The v0.14.0 update broke dashboard usability behind reverse proxies, generating significant user feedback regarding deployment architectures.
*   **Local Model Setup Guide:** ([Issue #523](https://github.com/NousResearch/hermes-agent/issues/523) - 3 comments, 3 👍) Inspired by Liquid AI, users are highly interested in a formalized skill/guide for setting up local models (Ollama, llama.cpp, vLLM), signaling strong demand for "local-first" AI agent capabilities.
*   **Cross-Platform Session Handoff:** ([Issue #8366](https://github.com/NousResearch/hermes-agent/issues/8366) - 2 comments, 6 👍) Garnering the most reactions today, users strongly desire the ability to seamlessly transition active agent sessions across CLI and mobile platforms (Telegram, iMessage) without losing context.

## 5. Bugs & Stability
Several critical bugs (P1/P2) affecting security and core agent functionality were reported today:
*   **[P1] Cross-Provider Poisoned History:** ([Issue #35543](https://github.com/NousResearch/hermes-agent/issues/35543)) Switching from a "thinking-mode" provider (like DeepSeek) to a strict provider (like Cerebras) causes HTTP 400 errors due to unsupported `reasoning_content` in the session DB. (Closed as duplicate/fixed).
*   **[P1] API Key Corruption:** ([Issue #35519](https://github.com/NousResearch/hermes-agent/issues/35519)) The default `security.redact_secrets` feature is inadvertently corrupting API keys during file read/search operations.
*   **[P1] Custom Provider Credential Clash:** ([Issue #14141](https://github.com/NousResearch/hermes-agent/issues/14141)) Custom providers sharing the same `base_url` are pulling the wrong API credentials.
*   **[P1/P2] Security Vulnerabilities:** Command injection risks via `shell=True` were flagged across multiple components, including the TUI gateway ([Issue #16560](https://github.com/NousResearch/hermes-agent/issues/16560)) and TTS tools ([Issue #2743](https://github.com/NousResearch/hermes-agent/issues/2743)). *Fixes are actively being addressed in [PR #35545](https://github.com/NousResearch/hermes-agent/pull/35545).*
*   **[P2] Auxiliary Client Timeouts:** ([Issue #35517](https://github.com/NousResearch/hermes-agent/issues/35517)) A hardcoded 30s timeout is causing context compression to fail for slow local LLMs. *A targeted fix exists in [PR #21575](https://github.com/NousResearch/hermes-agent/pull/21575).*
*   **[P2] Conversational Amnesia:** ([Issue #34694](https://github.com/NousResearch/hermes-agent/issues/34694)) Gemma4 models running locally via Ollama are failing to retain conversational context.

## 6. Feature Requests & Roadmap Signals
Today's issues point toward a strong roadmap focus on reliability, localization, and background task management:
*   **Idle-Triggered Context Compression:** ([Issue #27579](https://github.com/NousResearch/hermes-agent/issues/27579)) Requesting context compression during idle times rather than delaying the user's next prompt. 
*   **Non-English Memory Extraction:** ([Issue #35489](https://github.com/NousResearch/hermes-agent/issues/35489)) Exposing a limitation in the Holographic memory provider that currently restricts `auto_extract` to English regex. Addressing this is critical for global adoption.
*   **Custom Slack Block Kit Handlers:** ([Issue #35478](https://github.com/NousResearch/hermes-agent/issues/35478)) A request for non-invasive extension points in the Slack adapter, pointing toward a more modular plugin architecture.
*   **Brain-as-Source-of-Truth:** ([Issue #27657](https://github.com/NousResearch/hermes-agent/issues/27657)) Integrating Hermes directly with user-managed external knowledge bases (like a local "Brain" directory).
*   **Yandex Cloud Support:** ([PR #35554](https://github.com/NousResearch/hermes-agent/pull/35554)) Addition of a first-class provider for Yandex Cloud AI Studio, expanding the available inference backend options.

## 7. User Feedback Summary
Users are leveraging Hermes as a powerful bridge between local compute and cloud APIs, but friction remains in multi-provider setups. A major pain point is session portability; users are frustrated by isolated sessions across different messaging platforms ([Issue #8366](https://github.com/NousResearch/hermes-agent/issues/8366)) and gateway update failures on platforms like Telegram ([Issue #23783](https://github.com/NousResearch/hermes-agent/issues/23783)). Additionally, users running local models on constrained hardware (e.g., RTX 2070 Super via WSL2) express frustration with timeout assumptions built for cloud latencies ([Issue #34694](https://github.com/NousResearch/hermes-agent/issues/34694), [Issue #35517](https://github.com/NousResearch/hermes-agent/issues/35517)). Overall, satisfaction remains high regarding the tool's extensibility, but users desire better default configurations for non-standard setups.

## 8. Backlog Watch
Several highly-upvoted or critical issues require immediate maintainer attention:
*   **Cross-Platform Session Handoff** ([Issue #8366](https://github.com/NousResearch/hermes-agent/issues/8366)) remains open since April 12. With 6 upvotes, it is the most requested feature currently sitting without a definitive PR.
*   **Telegram Bot Token Clashes** ([Issue #23783](https://github.com/NousResearch/hermes-agent/issues/23783)) has been open since May 11. This completely breaks the Telegram gateway post-update, severely impacting a primary use case.
*   **Background Memory Review DB Locks** ([Issue #5129](https://github.com/NousResearch/hermes-agent/issues/5129)) has been open since April 4. It causes database locking issues when background tasks spawn concurrent provider instances.
*   **Context Length Auto-Detect** ([Issue #31272](https://github.com/NousResearch/hermes-agent/issues/31272)) continues to be a thorn in the side of advanced local model users since May 24.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-31

## 1. Today's Overview
PicoClaw, an open-source AI agent and personal assistant framework, maintains a healthy and highly active development pace as it iterates on its `v0.2.9` lifecycle. Over the last 24 hours, the project saw 12 updated Pull Requests (with 9 actively under review) and 7 updated Issues. The community and contributors are heavily focused on refining channel integrations (specifically Telegram and Web UI), expanding provider support (Azure Identity), and fixing critical workflow regressions introduced in the recent release. The rapid turnaround on newly opened issues and same-day PR closures demonstrates strong maintainer responsiveness and project vitality.

## 2. Releases
- **nightly:** `v0.2.9-nightly.20260530.e81d3710`
  - **Summary:** This is an automated nightly build cut from the `main` branch, capturing the latest bug fixes and features for testing prior to a stable patch release.
  - **Migration/Usage Notes:** Marked as potentially unstable. Users wanting to test recent fixes (e.g., Web UI message history bugs) should deploy this build with caution in isolated environments.

## 3. Project Progress
Three PRs were successfully closed/merged today, advancing the project's capabilities in provider authentication and localization:
- **feat(provider): Add optional Azure Identity support for Azure OpenAI provider ([PR #2971](https://github.com/sipeed/picoclaw/pull/2971)):** Quickly closed and merged, allowing enterprise users to utilize Azure Identity based auth (via an `azidentity` build tag) instead of static secret keys.
- **feat(i18n): Add Bangla support ([PR #2974](https://github.com/sipeed/picoclaw/pull/2974)):** Successfully integrated Bangla (`bn-in`) localization into the web frontend.
- **feat(web): add chat image paste and drag-and-drop upload ([PR #2969](https://github.com/sipeed/picoclaw/pull/2969)):** Closed today, introducing a new multimodal pipeline for the web frontend that normalizes clipboard/drag-and-drop images into Data URLs for agent processing.

Active development is also progressing on Telegram rich delivery ([PR #2856](https://github.com/sipeed/picoclaw/pull/2856)), agent tool policy filters ([PR #2838](https://github.com/sipeed/picoclaw/pull/2838)), and core dependency upgrades (Anthropic SDK to 1.46.0, Lark SDK to 3.9.3).

## 4. Community Hot Topics
- **Web UI Chat Session Confusion ([Issue #2972](https://github.com/sipeed/picoclaw/issues/2972)):** Opened yesterday, this bug report regarding v0.2.9's Web UI injecting old message histories into new sessions has already sparked active conversation (2 comments). This indicates that Web UI state isolation is currently a major pain point for self-hosters.
- **Long-term Feature Requests from Chinese Users ([Issue #2952](https://github.com/sipeed/picoclaw/issues/2952)):** A highly descriptive feature request detailing three distinct issues: `exec` command model behavior defaults, QQ channel persistent restarting loops, and requests for an improved UI for managing API keys and model lists. The issue highlights a growing demand for better out-of-the-box model configuration UX.
- **Demand for specific provider features:** The opening and immediate closing of the Azure Identity feature request ([Issue #2970](https://github.com/sipeed/picoclaw/issues/2970)) alongside its corresponding PR highlights that enterprise users are actively pushing for standard cloud-native authentication integrations.

## 5. Bugs & Stability
- **[Critical] Context Compress Bug ([Issue #2968](https://github.com/sipeed/picoclaw/issues/2968)):** The `/context` command in v0.2.9 is hard-stuck showing "Compress at: 76800 tokens", potentially ignoring user-defined token limits for MiniMax models. **Note:** No linked fix PR is currently visible in the data, making this a critical issue to monitor.
- **[High] Web UI Message Chaos ([Issue #2972](https://github.com/sipeed/picoclaw/issues/2972)):** A regression in v0.2.9 where new sessions are contaminated with old context. Could severely degrade agent performance and user trust.
- **[Medium] Scheme-less URL Guard Error ([PR #2965](https://github.com/sipeed/picoclaw/pull/2965)):** The workspace guard incorrectly blocks valid scheme-less URLs (e.g., `wttr.in/Beijing`) in the `exec` tool. A fix is currently open and under review.
- **[Medium] Makefile Go Version Bug ([PR #2976](https://github.com/sipeed/picoclaw/pull/2976)):** The build pipeline fails to compile due to a space parsing error in the `go1.25.10` environment string. A patch is actively being reviewed.

## 6. Feature Requests & Roadmap Signals
- **Agent Tool Security & Filtering:** The ongoing work on frontmatter tool policy filters ([PR #2838](https://github.com/sipeed/picoclaw/pull/2838)) indicates that the next stable version will likely feature robust, native allow/deny list support for MCP tools and servers.
- **Telegram Interaction Upgrades:** ([PR #2975](https://github.com/sipeed/picoclaw/pull/2975))'s introduction of treating "replies" as mentions will vastly improve group-chat UX.
- **UX / Model Management:** User requests in ([Issue #2952](https://github.com/sipeed/picoclaw/issues/2952)) point toward a future need for a "Provider Dashboard" capable of 1-click model fetching and API key sharing across providers. 

## 7. User Feedback Summary
Users operating diverse environments (FreeBSD, Android 10) are actively stress-testing the platform. Satisfaction with feature velocity was somewhat challenged by v0.2.9 regressions (history leaking in Web UI). Android/self-hosting users still experience friction with basic OS-level file permission handling ([Issue #2880](https://github.com/sipeed/picoclaw/issues/2880)). Furthermore, advanced users utilizing multi-tool agents are finding that models occasionally hallucinate tool syntax (e.g., omitting `actions:run`), suggesting a need for stronger system prompt enforcement in future updates.

## 8. Backlog Watch
- **Stale PRs on Core Features:** The lack of recent updates on Telegram rich delivery ([PR #2856](https://github.com/sipeed/picoclaw/pull/2856)) and Agent tool policy filters ([PR #2838](https://github.com/sipeed/picoclaw/pull/2838)) needs maintainer attention, as both are highly requested features that seem stalled in review.
- **Android Storage Permissions:** ([Issue #2880](https://github.com/sipeed/picoclaw/issues/2880)) remains unresolved. Modern Android permissions (`MANAGE_EXTERNAL_STORAGE`) remain a persistent blocker for mobile edge deployments.
- **Legacy Channel Bugs:** ([Issue #2742](https://github.com/sipeed/picoclaw/issues/2742)), regarding the gateway starting with no channels in v0.2.8, was recently closed, but represents a class of configuration-parsing bugs that maintainers should continuously monitor in future releases.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-31

## 1. Today's Overview
NanoClaw is demonstrating highly active, community-driven development with 15 pull requests updated in the last 24 hours, though only 4 were merged or closed. The project currently has no new official releases, indicating an ongoing accumulation of features and fixes before a potential stable rollout. Activity is heavily focused on expanding integration capabilities (voice, GitHub, AWS) and squashing platform-specific bugs, particularly related to Apple Container environments. The high volume of open PRs (11 active) suggests a very active contributor base, but also indicates a potential bottleneck in maintainer review and merging capacity. Overall, the project's health is strong, driven by a vibrant open-source community actively extending the agent's capabilities.

## 2. Releases
*No new releases were recorded today.* 

## 3. Project Progress
Four pull requests were merged or closed today, signaling advancements in core operational stability and code quality:
*   **[CLOSED] [PR #2652](https://github.com/qwibitai/nanoclaw/pull/2652) fix(container-runner):** Resolved an issue where OneCLI proxy ports were hardcoded, causing conflicts in multi-instance installations.
*   **[CLOSED] [PR #2645](https://github.com/qwibitai/nanoclaw/pull/2645) feat(router):** Introduced a per-agent-group context message window for group chats, allowing agents to read recent unseen messages before triggering a reply. This is a significant enhancement for multi-agent chat coherence.
*   **[CLOSED] [PR #2521](https://github.com/qwibitai/nanoclaw/pull/2521) feat(formatter):** Added `from-channel` and `from-type` to XML message attributes, greatly aiding users who operate multi-channel setups (e.g., Telegram + Discord) and rely on parsing `.jsonl` transcripts for monitoring dashboards.
*   **[CLOSED] [PR #6](https://github.com/qwibitai/nanoclaw/pull/6) IPC optimization:** Replaced IPC busy-loop polling with an event-driven `fs.watch` approach and swapped synchronous file operations for async alternatives, significantly reducing event-loop blocking.

## 4. Community Hot Topics
*   **Discord URL Expansion Regression:** The most notable community discussion revolves around [Issue #2044](https://github.com/qwibitai/nanoclaw/issues/2044) (👍 2). Since v2, the Discord chat adapter breaks the standard `<URL>` markdown syntax meant to suppress link previews, converting it into a standard markdown link that forces the preview. This highlights a user need for seamless, native chat-formatting support without unintended visual side-effects.
*   **Web UI Control Panel:** [PR #212](https://github.com/qwibitai/nanoclaw/pull/212) is an ambitious, long-standing community contribution aiming to add a full WebUI control panel built with Lit + Vite. While still open, its continued activity shows a strong community desire for a centralized, visual management dashboard for NanoClaw.

## 5. Bugs & Stability
*   **Severity: High (Security)**
    *   **Interactive Response Validation:** [PR #2651](https://github.com/qwibitai/nanoclaw/pull/2651) addresses a vulnerability where generic `ask_user_question` responses could be spoofed from an unintended channel destination. A fix is currently being proposed to validate `platformId` and `threadId`.
*   **Severity: Medium (Platform/Mounting)**
    *   **Apple Container Mount Races:** Two companion PRs, [PR #2649](https://github.com/qwibitai/nanoclaw/pull/2649) and [PR #2650](https://github.com/qwibitai/nanoclaw/pull/2650), tackle an issue where nested file mounts (like `container.json` and `CLAUDE.md`) result in phantom inodes and `EACCES` errors on Apple Container environments. PR #2650 adds a retry mechanism for the mount race condition, while PR #2649 skips the broken nested file mounts entirely.
*   **Severity: Low (UX/Formatting)**
    *   **Discord URL Rendering:** As noted in [Issue #2044](https://github.com/qwibitai/nanoclaw/issues/2044), bare URLs wrapped in `<>` are incorrectly parsed by the v2 adapter, degrading the user chat experience. 

## 6. Feature Requests & Roadmap Signals
Today's open PRs reveal a strong community focus on "operational skills" and enterprise-ready features:
*   **Voice Integration:** [PR #2317](https://github.com/qwibitai/nanoclaw/pull/2317) introduces a local, free voice transcription skill utilizing openai-whisper or whisper.cpp. 
*   **Disaster Recovery:** [PR #2084](https://github.com/qwibitai/nanoclaw/pull/2084) proposes a daily project backup system with S3 backend support and per-agent restoration. 
*   **AWS Credential Management:** [PR #2634](https://github.com/qwibitai/nanoclaw/pull/2634) adds an integration skill for the paws4claws AWS credential proxy daemon.
*   **Enhanced GitHub Integration:** [PR #2301](https://github.com/qwibitai/nanoclaw/pull/2301) introduces a polling mode for GitHub adapters, bypassing the need to expose inbound ports (ideal for NAT/firewall setups).
*   *Prediction:* The next version will likely focus heavily on **ops/admin tooling** (backups, AWS integration, web UI) and **local-first AI capabilities** (local whisper voice transcription).

## 7. User Feedback Summary
Users operating complex, multi-channel deployments (Discord + Telegram) are expressing a need for better message traceability, as seen in the merging of channel metadata into XML attributes. However, the update to v2 has caused some friction, notably with chat adapters overriding native platform markdown behaviors (like Discord's URL suppression). The push for features like GitHub polling and local voice transcription indicates that a significant portion of the user base consists of self-hosters and privacy-conscious operators who prefer local processing or are restricted by strict network firewalls.

## 8. Backlog Watch
*   **Web UI Control Panel ([PR #212](https://github.com/qwibitai/nanoclaw/pull/212)):** Open since February 2026, this massive 11-tab UI addition is still pending. It requires thorough security and architectural review from core maintainers before merging.
*   **Code Quality Hooks ([PR #2537](https://github.com/qwibitai/nanoclaw/pull/2537)):** Open since mid-May, this PR adds pre-commit hooks (prettier, eslint, vitest). Despite its value for long-term project health, it appears stalled and needs maintainer approval to enforce coding standards.
*   **Discord Adapter Regression ([Issue #2044](https://github.com/qwibitai/nanoclaw/issues/2044)):** Open for over a month with 2 upvotes. This degradation of the Discord user experience in v2 needs formal acknowledgment and assignment from the maintainers.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-05-31

## 1. Today's Overview
NullClaw experienced a low-activity day on May 31, 2026, with no newly opened issues, pull requests, or releases. However, the repository saw two pull requests transition to a closed state yesterday (May 30), indicating that background maintenance and versioning efforts are actively being managed by contributors. The most notable activity is the finalization of a version bump PR, signaling that a formal release is likely imminent. Overall, the project appears to be in a stable, maintenance phase rather than a period of rapid feature expansion.

## 2. Releases
No new releases were cut today. However, PR [#938](https://github.com/nullclaw/nullclaw/pull/938) closed a version bump targeting `v2026.5.29`, suggesting the release is packaged and likely preparing for an official GitHub Release tag in the very near future.

## 3. Project Progress
Two pull requests were updated/closed recently, reflecting iterative improvements to the project's concurrency handling and release tooling:
*   **[CLOSED] [PR #878](https://github.com/nullclaw/nullclaw/pull/878):** Fixed a compatibility issue in `std_compat.thread.sleep()` by switching to a real POSIX `nanosleep` path. This prevents the OS thread from merely performing a cooperative yield when under `std.Io.Threaded`, while preserving the scheduler-backed path for Windows/WASI.
*   **[CLOSED] [PR #938](https://github.com/nullclaw/nullclaw/pull/938):** A standard version bump PR updating `build.zig.zon` to `2026.5.29`. 

## 4. Community Hot Topics
There are no hot topics trending today. Activity across recent issues and PRs is muted, with 0 comments and 0 reactions recorded across the board. The focus remains purely on core maintenance.

## 5. Bugs & Stability
*   **OS Thread Sleep Behavior (Fixed):** PR [#878](https://github.com/nullclaw/nullclaw/pull/878) addresses a subtle but important bug where managed sleeping was yielding instead of truly suspending the OS thread on POSIX systems. *Severity: Medium.* The fix (using native `nanosleep`) has been merged, which should significantly improve the reliability of threaded sleep operations in NullClaw's standard compatibility layer.

## 6. Feature Requests & Roadmap Signals
No new feature requests were submitted today. Based on the pending version bump in PR [#938](https://github.com/nullclaw/nullclaw/pull/938), the immediate roadmap is focused on shipping the `v2026.5.29` build. Users can expect the next patch or minor release to heavily feature under-the-hood stability fixes, particularly around cross-platform thread management.

## 7. User Feedback Summary
Due to a complete absence of new issues or comments in the last 24 hours, there is no direct user feedback to report for today. 

## 8. Backlog Watch
*   No new or long-unanswered issues were flagged today. 
*   As a general note, maintainers should ensure that documentation and any related CI/CD pipelines are fully synced with the impending `v2026.5.29` release closed in PR [#938](https://github.com/nullclaw/nullclaw/pull/938).

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-31

## 1. Today's Overview
Project IronClaw is demonstrating exceptionally high development velocity, heavily focused on its "Reborn" architectural evolution and security enhancements. Over the past 24 hours, the project saw a massive influx of activity with 24 pull requests updated, 16 of which were successfully merged, contrasted by only 2 active issues. The contributor base is highly engaged, blending core team progress on complex system refactoring with impactful, community-driven quality-of-life improvements. Despite a recent stable release being held up by upstream dependencies, the maintainers are aggressively merging foundational code for triggers, authentication, and memory management.

## 2. Releases
No new releases were published today. Downstream publication to `crates.io` is currently gated behind pending `wasmtime` updates, keeping the latest publishable version at `0.24.0`.

## 3. Project Progress
Today's 16 merged PRs signify massive forward momentum across several key domains:
*   **"Reborn" Architecture & Auth:** The core team merged critical infrastructure for the Reborn product auth HTTP surfaces, enabling manual-token onboarding, account recovery, and refresh flows ([PR #4245](https://github.com/nearai/ironclaw/pull/4245)). NEAR AI MCP credentials were successfully migrated to this new product auth system ([PR #4246](https://github.com/nearai/ironclaw/pull/4246)).
*   **Triggers & Delivery Contracts:** Foundational domain types and contracts for the Reborn trigger system and outbound delivery resolution were merged, setting the stage for cron-backed scheduled triggers ([PR #4249](https://github.com/nearai/ironclaw/pull/4249), [PR #4248](https://github.com/nearai/ironclaw/pull/4248)).
*   **Agent Loop Enhancements:** Several high-value agent improvements were merged, including interruptible in-flight LLM calls via `CancellationToken` ([PR #4250](https://github.com/nearai/ironclaw/pull/4250)), structured compaction summaries ([PR #4251](https://github.com/nearai/ironclaw/pull/4251)), and a behavioral nudge to force `memory_write` after idle iterations ([PR #4252](https://github.com/nearai/ironclaw/pull/4252)).
*   **Security:** A read-time injection scan for identity files (`AGENTS.md`, `SOUL.md`) was merged to prevent prompt-injection hijacking ([PR #4253](https://github.com/nearai/ironclaw/pull/4253)).
*   **Bug Fixes:** A critical routing failure causing erroneous "RecoveryRequired" states was fixed ([PR #4258](https://github.com/nearai/ironclaw/pull/4258)), along with a fix for synthetic capabilities failing introspection ([PR #4259](https://github.com/nearai/ironclaw/pull/4259)).

## 4. Community Hot Topics
*   **[Issue #3259](https://github.com/nearai/ironclaw/issues/3259) — Publish 0.25.0–0.27.0 to crates.io (👍 0, 12 comments):** This is the most heavily discussed issue today. Downstream consumers are currently pinned to version `0.24.0` due to known CVEs in `wasmtime 28.x`. The community is actively discussing how to unblock the publication of versions `0.25.0` through `0.27.0` without propagating the upstream vulnerabilities to downstream users.
*   **[Issue #4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E failed:** An automated nightly test suite failure was reported, pointing to current instability in the `v2-engine` E2E testing environment that will likely need triage.

## 5. Bugs & Stability
*   **Severity: High — Agent Loop "RecoveryRequired" crashes ([PR #4258](https://github.com/nearai/ironclaw/pull/4258)):** A bug caused the agent loop to terminal-fail when LLMs passed stringified JSON arrays for `headers`. This bypassed standard tool-error surfacing and triggered legacy recovery paths. **Status: Resolved** (PR merged today).
*   **Severity: Medium — `capability_info` Invocation Failures ([PR #4259](https://github.com/nearai/ironclaw/pull/4259)):** Models calling `capability_info` to inspect their own schemas triggered an `InvalidInvocation` terminal failure, preventing autonomous tool usage. **Status: Resolved** (PR merged today).
*   **Severity: Low — E2E Test Instability ([Issue #4108](https://github.com/nearai/ironclaw/issues/4108)):** The scheduled nightly E2E run failed. **Status: Open**. 

## 6. Feature Requests & Roadmap Signals
Today's merged PRs strongly signal the near-term roadmap for the upcoming versions:
*   **Advanced Integrations & SSO:** Expect robust native OAuth support soon. Open PRs are actively wiring GSuite OAuth, Notion MCP OAuth, GitHub PAT flows ([PR #4257](https://github.com/nearai/ironclaw/pull/4257)), and native GitHub SSO ([PR #4229](https://github.com/nearai/ironclaw/pull/4229)).
*   **Persistent Memory & Cognition:** The merging of structured compaction templates and memory-write nudges indicates a strong pivot toward long-term, reliable agent memory and context preservation across massive sessions.
*   **Triggers & Scheduled Tasks:** With the merging of domain types and trusted ingress contracts for the trigger-loop plan, a V1 rollout of cron-backed scheduled agents is highly likely in the next release cycle.

## 7. User Feedback Summary
Real-world users are expressing friction regarding dependency management, specifically the inability to pull the latest features via `crates.io` due to the `wasmtime` dependency bottleneck. However, the core project's active resolution of agent loop crashes, context compaction losses, and lack of interruptibility shows that the maintainers are highly responsive to operational pain points experienced by users running IronClaw in dynamic, long-lived environments.

## 8. Backlog Watch
*   **[Issue #3259](https://github.com/nearai/ironclaw/issues/3259):** Despite 12 comments over the last 30 days, there is no definitive timeline on when versions 0.25.0–0.27.0 will bypass the Wasmtime CVEs and be published. Maintainers should provide a status update to downstream consumers.
*   **[PR #4035](https://github.com/nearai/ironclaw/pull/4035) — feat(slack): add Reborn ProductAdapter core:** This large, critical scope PR by a regular contributor has been open since May 25th. It requires focused core-maintainer review to prevent the Slack integration from stalling.
*   **[PR #4230](https://github.com/nearai/ironclaw/pull/4230) — Preserve provider reasoning summaries:** An XL-sized PR affecting the LLM scope, open since May 29th, needing prioritized review to unblock reasoning capability improvements.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-05-31

## 1. Today's Overview
LobsterAI is currently experiencing a period of low development velocity, characterized by minimal activity over the past 24 hours. The project saw no merged pull requests, closed issues, or new software releases today. Current activity is strictly limited to existing open issues and stale PRs receiving minor updates or interactions. While the project remains stable with no critical system failures reported, the distinct lack of recent code merges and ongoing "stale" tagging on open PRs suggests a temporary slowdown in maintainer engagement. 

## 2. Releases
No new releases were recorded today. There are currently no pending release notes, breaking changes, or migration guides to report.

## 3. Project Progress
There was no forward project progress in terms of merged code or closed issues today. 
* Two open PRs received updates, but both are currently marked as `[stale]`, indicating they are at risk of being auto-closed if maintainer review does not resume.

## 4. Community Hot Topics
Community interaction was highly muted today. The most notable item is an unmerged PR aimed at improving the user experience for macOS users.
* **macOS Shortcut Visibility ([PR #1467](https://github.com/netease-youdao/LobsterAI/pull/1467)):** This PR seeks to rectify a UI oversight where `Ctrl` was displayed instead of the standard Mac `Cmd` (⌘) symbol. This highlights a strong community desire for better cross-platform UI consistency. 

## 5. Bugs & Stability
One new functional bug was reported by the community today. No fix PRs are currently attached to this issue.
* **Medium Severity - UI Freeze on Scroll ([Issue #2079](https://github.com/netease-youdao/LobsterAI/issues/2079)):** A user reported that in version 2026.5.27, scrolling to the very top of the execution results window causes the application to freeze/hang. The user successfully replicated the issue, indicating a reliable UI rendering or memory-handling loop affecting stability.

## 6. Feature Requests & Roadmap Signals
No new feature requests were introduced today. However, existing open PRs signal ongoing community interest in specific UI enhancements:
* **MCP Modal Scrolling Fix ([PR #1466](https://github.com/netease-youdao/LobsterAI/pull/1466)):** Aims to restructure the MCP server form modal so that the header and footer buttons remain fixed when extensive content (like multiple environment variables) is added. If merged, this will significantly improve the configuration experience for advanced AI agent setups.

## 7. User Feedback Summary
User feedback over the last 24 hours centers around friction within the graphical user interface. 
* **Execution Window Instability:** Users relying on the app to view AI execution logs are encountering UI hangs, pointing to potential performance bottlenecks in handling large text outputs. 
* **Platform-Specific Expectations:** Mac users expect native-feeling keyboard shortcuts. The hardcoded `Ctrl` mappings currently serve as a localized pain point for an otherwise standard OS interaction.

## 8. Backlog Watch
Maintainer attention is urgently required for the following items lingering in the backlog:
* **[PR #1466](https://github.com/netease-youdao/LobsterAI/pull/1466) & [PR #1467](https://github.com/netease-youdao/LobsterAI/pull/1467):** Both submitted on April 4, 2026, and now marked as `[stale]`. These valid UX/UI fixes are at risk of being abandoned. A review is needed to either merge them, request changes, or officially close them.
* **[Issue #2079](https://github.com/netease-youdao/LobsterAI/issues/2079):** Today's newly opened UI freezing bug. Maintainers should triage this issue to request error logs or attempt internal replication to prevent it from persisting in the next release cycle.

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

# CoPaw (QwenPaw) Project Digest — 2026-05-31

## 1. Today's Overview
The CoPaw (QwenPaw) project is experiencing a highly active period, driven predominantly by community engagement and feature requests rather than core merges. With 12 issues updated (11 open, 1 closed) and 3 active pull requests (0 merged today), the maintainers are currently in a phase of gathering requirements and reviewing community contributions. A notable trend is the heavy focus on improving the Desktop client experience, specifically around Windows OS integration and UI interactivity. Overall, the project demonstrates strong community vitality and a clear roadmap towards becoming a more polished, IDE-like AI assistant.

## 2. Releases
No new releases were recorded today. The latest tagged versions remain `v1.1.9` (Desktop Tauri) and `v1.1.7` (Console), as referenced in recent bug reports.

## 3. Project Progress
While no PRs were merged today, three significant open pull requests indicate active development on provider compatibility, multi-user session management, and configuration stability:
*   **Feishu Group Session Sharing:** PR [#4821](https://github.com/agentscope-ai/QwenPaw/pull/4821) introduces shared session contexts for group chats in the Feishu (Lark) channel, mirroring existing WeChat functionality.
*   **LLM Provider Flexibility:** PR [#4689](https://github.com/agentscope-ai/QwenPaw/pull/4689) fixes an issue where non-standard provider parameters (like DashScope's `enable_search`) were silently rejected, routing them correctly via `extra_body`.
*   **Config Bug Fix:** PR [#4827](https://github.com/agentscope-ai/QwenPaw/pull/4827) addresses a regression where context compression thresholds were calculated incorrectly due to a fallback error in `get_model_max_input_length`.

## 4. Community Hot Topics
The most actively discussed issues revolve around matching the UX capabilities of competing AI coding assistants (like Trae). 
*   **Advanced Conversation Management:** The highest-trafficked issue is [#4789](https://github.com/agentscope-ai/QwenPaw/issues/4789) (👍 1, 7 comments), which requests granular rollback and deletion for individual对话 (conversations/actions) with file-state reversion, explicitly asking to "copy Trae."
*   **Consolidated Workspace Directory:** Issue [#4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) (7 comments) sparked significant discussion around organizing QwenPaw's working directory into a single hidden folder (e.g., `.qwenpaw`) to keep user project directories clean.
*   **Windows Console Flashing:** A major user pain point is the `execute_shell_command` causing UI disruptions. This is heavily discussed in [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) (7 comments) and newer duplicates.

## 5. Bugs & Stability
Several bugs affecting daily usability were reported, with Windows Desktop stability being the primary concern:
*   **Severe (UI Freeze):** Executing the `/mission` command causes the QwenPaw Console to freeze completely, requiring a restart ([#4454](https://github.com/agentscope-ai/QwenPaw/issues/4454)). *No fix PR is currently open.*
*   **High (Windows Console Flashing):** Multiple reports ([#4829](https://github.com/agentscope-ai/QwenPaw/issues/4829), [#4828](https://github.com/agentscope-ai/QwenPaw/issues/4828)) highlight `cmd` windows flashing on screen during shell execution in the Tauri Desktop app. 
*   **Medium (ACP Protocol Mismatch):** Users trying to connect QwenPaw with Claude Code via the Agent Communication Protocol are experiencing version format errors and delegate failures ([#4824](https://github.com/agentscope-ai/QwenPaw/issues/4824)). 

## 6. Feature Requests & Roadmap Signals
Users are heavily pushing for QwenPaw to evolve into a full-fledged AI coding environment. Key signals include:
*   **Diff-View for File Edits:** Users want clear visibility into what the AI modifies, requesting a native diff-viewer instead of plain `writefile` outputs ([#4825](https://github.com/agentscope-ai/QwenPaw/issues/4825)).
*   **Clickable File Paths:** Requests to render local file paths as clickable links that open directly in the OS file explorer ([#4830](https://github.com/agentscope-ai/QwenPaw/issues/4830)).
*   **Message Interruption Modes:** A sophisticated request to add three distinct ways the AI handles new user messages while executing a task (interrupt, queue, or insert) ([#4826](https://github.com/agentscope-ai/QwenPaw/issues/4826)).
*   **Docker Environment Persistence:** A practical request to pre-install common Python dependencies (`psycopg2-binary`, `pytz`, `mootdx`) in the official Docker image to prevent agent script failures upon container rebuilds ([#4831](https://github.com/agentscope-ai/QwenPaw/issues/4831)).

## 7. User Feedback Summary
Users are heavily leveraging QwenPaw as a local coding agent and are directly comparing its UI/UX with competitors like Trae, OpenCode, and Hermes Agent. While users appreciate its extensibility (e.g., Docker deployments, LLM provider support), they express frustration with basic client friction. Specifically, Windows users feel the Desktop app lacks native OS integration (disruptive command windows, non-clickable paths). The community strongly desires better agency control—wanting to see exactly what the AI changes (diff view), undo specific actions safely, and direct it with IDE-like precision (code indexing).

## 8. Backlog Watch
Maintainers should prioritize addressing the following aging or high-impact items:
*   **Long-standing Windows bug:** Issue [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) has been open since May 8th. With duplicates being filed recently ([#4829](https://github.com/agentscope-ai/QwenPaw/issues/4829), [#4828](https://github.com/agentscope-ai/QwenPaw/issues/4828)), this clearly needs immediate attention.
*   **Mission Console Freeze:** The `/mission` UI freeze ([#4454](https://github.com/agentscope-ai/QwenPaw/issues/4454)) completely breaks a core feature and requires triage.
*   **PRs needing review:** PRs [#4689](https://github.com/agentscope-ai/QwenPaw/pull/4689) (open since May 26) and [#4821](https://github.com/agentscope-ai/QwenPaw/pull/4821) require maintainer reviews to keep community contribution momentum alive.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-31

## 1. Today's Overview
ZeroClaw is currently experiencing a **high-velocity, pre-release development phase**, characterized by a substantial pull request throughput of 50 updates (20 open, 30 merged/closed) and active issue triage (18 updated issues) over the last 24 hours. The engineering focus is clearly distributed across tightening multi-agent/channel integrations, refactoring channel access controls, and building out the v0.8.0-beta milestone. Although there are no new official releases today, the sheer volume of closed PRs and active feature trackers indicates aggressive stabilization and feature-freezing efforts. The project is highly active; however, the community is reporting several high-severity bugs related to provider compatibility and context management that require immediate attention.

## 2. Releases
**No new official releases** were cut today. 
*However, the repository is actively laying the groundwork for the **v0.8.0-beta-2** pre-release, alongside incremental updates targeted for the v0.7.6 (Skills UX), v0.7.8 (Desktop/Tauri), and v0.8.1 milestones.*

## 3. Project Progress
Today saw 30 PRs merged or closed, marking significant progress in architectural refactoring and channel capabilities:
*   **Major Architectural Refactoring:** A massive 24-PR migration chain led by `yijunyu` was closed. This effort successfully migrated hand-rolled user-allowance functions across 20+ channels (Telegram, Discord, WhatsApp, Email, Slack, NextCloud, etc.) into a unified `aspect_std::AllowlistAspect`. This drastically reduces code duplication and standardizes channel access control.
*   **Channel & Provider Enhancements:** Work advanced on standardizing channel messaging. PR [#6951](https://github.com/zeroclaw-labs/zeroclaw/pull/6951) introduced constructors (`ChannelMessage::new`, `SendMessage::reply_to`) to prevent struct literal breakages during rebases. 
*   **Integration & UI Preparations:** Feedback is actively being sought on the massive v0.8.0-beta-2 integration PR ([#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848)), which introduces the "zerocode TUI" and RPC socket transport.

## 4. Community Hot Topics
The most actively discussed items reveal a strong user need for **robust routing, system prompt safety, and agentic lifecycle management**:
*   **[#6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233) (8 comments):** DeepSeek provider handling of `reasoning_content` in streaming. This highlights ongoing friction with advanced LLM reasoning models losing context during multi-turn conversations.
*   **[#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) (5 comments):** WeCom channel support. Enterprise users are eagerly awaiting native WeCom (WxWork) integration, showing ZeroClaw's expanding enterprise footprint.
*   **[#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) (4 comments):** Context compression dropping `reasoning_content`. Users running long agentic sessions are frustrated that proactive context trimming breaks deep-reasoning models.
*   **[#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) & [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) (Each 2 comments, 2 thumbs up on the latter):** A strong signal from the community requesting "Local-First Mode / No Prompt Leakage" and "Unified Output Routing." Power users want ZeroClaw to support strict, localized small models without hallucinating system prompts, and they want the AI to intelligently route outputs (e.g., automatically sending a generated file to an email draft).

## 5. Bugs & Stability
Several high-priority (P1/P2) bugs have been reported or updated, primarily affecting provider compatibility and context persistence:
*   **[S1 - Workflow Blocked] [#7022](https://github.com/zeroclaw-labs/zeroclaw/issues/7022):** `kimi-k2.6` fails with a 400 error because the compatible provider interface forcefully sends a `temperature: 0.7` baseline, which Kimi rejects. *(No fix PR submitted yet).*
*   **[S1 - Broken Functionality] [#5636](https://github.com/zeroclaw-labs/zeroclaw/issues/5636):** `zai-cn` provider fails with error 1214 when using `glm-5-turbo` after ZeroClaw performs preemptive context trimming. *(No fix PR submitted yet).*
*   **[S2 - Degraded Behavior] [#7025](https://github.com/zeroclaw-labs/zeroclaw/issues/7025):** `read_skill` cannot load plugin-bundled skills that the system prompt advertises, causing tool call failures. *(No fix PR submitted yet).*
*   **[S1 - CI Blocked] [#6964](https://github.com/zeroclaw-labs/zeroclaw/issues/6964) (Closed):** Windows desktop build was failing due to duplicate MANIFEST resources. 

## 6. Feature Requests & Roadmap Signals
Analyzing the open Issues and PRs provides clear signals of what is coming in the next ZeroClaw iterations:
*   **v0.7.6 (Skills Focus):** Tracked by [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253). Upcoming releases will focus heavily on the UX of installing, sandboxing, and authoring ZeroClaw skills.
*   **v0.7.8 (Desktop Focus):** Tracked by [#7015](https://github.com/zeroclaw-labs/zeroclaw/issues/7015). A concerted push to polish the Tauri desktop app, including tray behaviors, accessibility, and supervised approval UX.
*   **RFC: Unified Routing & Scheduling:** Two major architectural requests are gaining traction. [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) proposes an output routing model (allowing agents to decide *how* to send a message, e.g., via SMS vs. Email), and [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) proposes moving cron/scheduled tasks into the main orchestrator pipeline to prevent context loss. 
*   **Office Document Parsing:** Requested in [#7024](https://github.com/zeroclaw-labs/zeroclaw/issues/7024), a WASM plugin for natively extracting text from `.docx`, `.xlsx`, and `.pptx` files. 

## 7. User Feedback Summary
**User Pain Points:** 
1. **Context Window Management:** Users running long, complex tasks are frequently hitting walls where ZeroClaw's context compression algorithm strips essential data (like `reasoning_content`), abruptly breaking advanced reasoning models like DeepSeek V4.
2. **API Parameter Leakage:** When utilizing OpenAI-compatible endpoints for newer models (like Kimi K2.6), ZeroClaw's hardcoded default parameters (like `temperature`) are causing immediate API rejections.
3. **Local Model Prompt Bloat:** Local/small model enthusiasts are frustrated by prompt bloat and system-instruction leaking (Issue [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)), indicating ZeroClaw currently caters slightly more to massive cloud-hosted models.

**Satisfaction/Dissatisfaction:** 
Despite the bugs, community engagement is highly positive and constructive. The migration from frameworks like Letta shows that ZeroClaw's core agentic loop is highly valued. The structured RFCs being submitted by users (like the routing model RFC) show a mature, invested developer user base that views ZeroClaw as a long-term infrastructure piece.

## 8. Backlog Watch
*   **Recovery from Bulk Revert:** Issue [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) highlights a critical housekeeping task: 153 commits lost in a bulk revert from March need to be audited and restored. This is currently in-progress but poses a lingering risk of lost features.
*   **Security - Secret Management:** Issue [#6989](https://github.com/zeroclaw-labs/zeroclaw/issues/6989) requests extending `#[secret]` obfuscation to `HashMap<String, String>` headers. Since this is a security enhancement rated P1, it needs rapid maintainer review and prioritization to prevent Bearer tokens from leaking in logs.
*   **Stale Channel PRs:** PRs like [#6793](https://github.com/zeroclaw-labs/zeroclaw/pull/6793), [#6778](https://github.com/zeroclaw-labs/zeroclaw/pull/6778), and [#6799](https://github.com/zeroclaw-labs/zeroclaw/pull/6799) are marked as `needs-author-action`. Because they are part of a massive 24-PR dependency chain, any delay here risks blocking the unification of channel access control lists.

</details>