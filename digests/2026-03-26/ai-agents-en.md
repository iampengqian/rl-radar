# OpenClaw Ecosystem Digest 2026-03-26

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-03-25 22:07 UTC

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

# OpenClaw Project Digest — 2026-03-26

## 1. Today's Overview
OpenClaw demonstrates **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a rapidly iterating project in active development. The team shipped 3 releases (v2026.3.24 and two betas) focusing on OpenAI API compatibility and security sandboxing. However, the high volume of open issues (417) and regressions suggests the project is experiencing **growing pains**, particularly around plugin compatibility, OAuth flows, and platform-specific bugs. The community is deeply engaged, with significant discussion around desktop client requests and plugin ecosystem stability.

## 2. Releases

### **v2026.3.24** (Stable)
**Major Changes:**
- **Gateway/OpenAI Compatibility:** Added `/v1/models` and `/v1/embeddings` endpoints, plus explicit model forwarding through `/v1/chat/completions` and `/v1/responses` for broader RAG and client compatibility (Contributor: @vincentkoc).
- **Agents/Tools:** Updated `/tools` endpoint behavior (truncated in release notes).

### **v2026.3.24-beta.2**
**Fixes:**
- **Outbound Media/Local Files:** Aligned media access with `workspaceOnly` fs policy—host-local files and inbound-media paths now work correctly when `workspaceOnly` is disabled, while strict workspace-only agents remain sandboxed.
- **Runtime/Install:** Lowered Node.js 22 minimum floor to `22.14`.

### **v2026.3.24-beta.1**
Same OpenAI compatibility changes as stable release.

---

## 3. Project Progress

### **Merged/Closed PRs (143 total)**
Key advancements include:

1. **Security Hardening:** [PR #54631](https://github.com/openclaw/openclaw/pull/54631) (CLOSED) filtered untrusted CWD `.env` entries to prevent startup manipulation.
2. **Provider Fixes:** [PR #54727](https://github.com/openclaw/openclaw/pull/54727) (CLOSED) fixed `dropThinkingBlocks` inheritance for custom Anthropic-compatible providers.
3. **Release Quality:** [PR #53373](https://github.com/openclaw/openclaw/pull/53373) added npm pack checks to ensure Control UI assets are included, preventing empty dashboard releases.

### **Active PRs Advancing Features**
- [PR #32154](https://github.com/openclaw/openclaw/pull/32154): Hybrid memory plugin with Knowledge Graph and Gemini support (XL size, significant community interest).
- [PR #32306](https://github.com/openclaw/openclaw/pull/32306): Discord `GUILD_MEMBER_ADD` event routing for welcome messages.
- [PR #48590](https://github.com/openclaw/openclaw/pull/48590): Phase 1 of Progressive Permission Pattern to prevent privilege escalation.

---

## 4. Community Hot Topics

### **Most Discussed Issues**

1. **[Issue #75](https://github.com/openclaw/openclaw/issues/75)** — **Linux/Windows Clawdbot Apps** (49 comments, 65 👍)  
   *Underlying Need:* Users want desktop parity with macOS/iOS apps. Linux/Windows support is critical for developer adoption. This long-standing request (created 2026-01-01) remains unresolved.

2. **[Issue #52885](https://github.com/openclaw/openclaw/issues/52885)** — **WeChat Plugin Incompatibility** (40 comments)  
   *Underlying Need:* The official `@tencent-weixin/openclaw-weixin` plugin v1.0.3 fails with OpenClaw 2026.3.22+ due to ESM import issues. Critical for Chinese enterprise users.

3. **[Issue #52823](https://github.com/openclaw/openclaw/issues/52823)** — **Control UI Assets Missing** (34 comments, 12 👍)  
   *Underlying Need:* Regression after `openclaw update` breaks the web UI. Users expect seamless upgrades without manual `pnpm ui:build` steps.

4. **[Issue #9157](https://github.com/openclaw/openclaw/issues/9157)** — **Token Waste from Workspace Injection** (14 comments, 12 👍)  
   *Underlying Need:* Injecting workspace files on every message wastes 93.5% of token budget. Users demand smarter context management.

### **PRs with Momentum**
- [PR #32154](https://github.com/openclaw/openclaw/pull/32154) (Hybrid Memory): Large feature PR attracting attention for its zero-cost Gemini integration.

---

## 5. Bugs & Stability

### **Critical Regressions**

1. **[Issue #53317](https://github.com/openclaw/openclaw/issues/53317)** — **OAuth Token Overwritten on Startup**  
   *Severity:* HIGH — Gateway overwrites fresh OAuth tokens with stale cache, burning refresh tokens for `openai-codex`. No fix PR yet.

2. **[Issue #52823](https://github.com/openclaw/openclaw/issues/52823)** — **Control UI Assets Not Found**  
   *Severity:* HIGH — Regression breaks web UI after upgrade. Fix: [PR #53373](https://github.com/openclaw/openclaw/pull/53373) (OPEN) adds asset verification to npm pack.

3. **[Issue #53644](https://github.com/openclaw/openclaw/issues/53644)** (CLOSED) — **Discord WebSocket 1006 Crash**  
   *Severity:* HIGH — Uncaught exception crashes gateway on abnormal closure. Status: CLOSED (likely fixed).

### **Plugin/Channel Failures**

4. **[Issue #53244](https://github.com/openclaw/openclaw/issues/53244)** — **WhatsApp Plugin Runtime Modules Missing**  
   *Severity:* MEDIUM — npm package omits runtime files, crashing gateway. No fix PR yet.

5. **[Issue #53870](https://github.com/openclaw/openclaw/issues/53870)** — **Matrix Plugin Security Scan Block**  
   *Severity:* MEDIUM — VirusTotal scan delays block `@openclaw/matrix` installation.

### **Fix PRs in Progress**
- [PR #54711](https://github.com/openclaw/openclaw/pull/54711): Matrix E2EE thumbnail encryption.
- [PR #53891](https://github.com/openclaw/openclaw/pull/53891): Ollama streaming events fix.
- [PR #54491](https://github.com/openclaw/openclaw/pull/54491): Kimi toolCall arguments repair.

---

## 6. Feature Requests & Roadmap Signals

### **User-Requested Features**

1. **Desktop Apps for Linux/Windows** ([Issue #75](https://github.com/openclaw/openclaw/issues/75))  
   *Prediction:* High community demand (65 👍) suggests this may be prioritized in Q2 2026.

2. **Agent Switching in Control UI** ([Issue #32495](https://github.com/openclaw/openclaw/issues/32495))  
   *Prediction:* Active PR [ #54724](https://github.com/openclaw/openclaw/pull/54724) fixes primary model selection—agent switching may follow.

3. **Async Exec Callbacks** ([Issue #18237](https://github.com/openclaw/openclaw/issues/18237))  
   *Prediction:* Long-running process support is critical for dev workflows; may land in v2026.4.

4. **QQ Bot Channel Support** ([PR #52986](https://github.com/openclaw/openclaw/pull/52986))  
   *Prediction:* XL-sized PR ready for review; likely to merge soon given Chinese market demand.

### **Emerging Trends**
- **Memory/RAG:** Hybrid memory plugin ([PR #32154](https://github.com/openclaw/openclaw/pull/32154)) and agentMemo integration ([PR #54712](https://github.com/openclaw/openclaw/pull/54712)) indicate focus on persistent context.
- **Security:** Progressive permissions ([PR #48590](https://github.com/openclaw/openclaw/pull/48590)) and exec approval buttons ([PR #48567](https://github.com/openclaw/openclaw/pull/48567)) show commitment to safe agent autonomy.

---

## 7. User Feedback Summary

### **Pain Points**
1. **Upgrade Reliability:** Multiple regressions ([#52823](https://github.com/openclaw/openclaw/issues/52823), [#53317](https://github.com/openclaw/openclaw/issues/53317)) after upgrades frustrate users expecting smooth transitions.
2. **Plugin Ecosystem Instability:** WeChat ([#52885](https://github.com/openclaw/openclaw/issues/52885)), WhatsApp ([#53244](https://github.com/openclaw/openclaw/issues/53244)), and Matrix ([#53870](https://github.com/openclaw/openclaw/issues/53870)) plugins fail with version bumps.
3. **Token Efficiency:** Context injection waste ([#9157](https://github.com/openclaw/openclaw/issues/9157)) is a top concern for cost-conscious users.
4. **OAuth Fragility:** Token refresh race conditions ([#26322](https://github.com/openclaw/openclaw/issues/26322)) and proxy incompatibility ([#42176](https://github.com/openclaw/openclaw/issues/42176)) disrupt enterprise deployments.

### **Positive Signals**
- Strong engagement on memory/RAG features shows enthusiasm for smarter agents.
- Quick closure of critical crash bugs (e.g., [#53644](https://github.com/openclaw/openclaw/issues/53644)) demonstrates responsive maintainers.
- Active community contributions to channels (QQ, Discord, Slack) and providers (Kimi, Ollama, Mistral).

---

## 8. Backlog Watch

### **Issues Needing Maintainer Attention**

1. **[Issue #75](https://github.com/openclaw/openclaw/issues/75)** — Linux/Windows Apps  
   *Status:* OPEN since Jan 2026, 65 👍. Critical for platform parity.

2. **[Issue #9157](https://github.com/openclaw/openclaw/issues/9157)** — Token Budget Waste  
   *Status:* OPEN since Feb 2026, labeled `stale`. Needs architectural fix for context injection.

3. **[Issue #14593](https://github.com/openclaw/openclaw/issues/14593)** — Docker Skill Install Fails  
   *Status:* OPEN since Feb 2026. Blocks Docker users from onboarding skills.

4. **[Issue #49971](https://github.com/openclaw/openclaw/issues/49971)** — Agent Identity & Trust RFC  
   *Status:* Proposal stage. Forward-looking feature needing security review.

### **PRs Awaiting Review**
- [PR #32154](https://github.com/openclaw/openclaw/pull/32154) (Hybrid Memory): XL-sized, potentially high impact.
- [PR #52986](https://github.com/openclaw/openclaw/pull/52986) (QQ Channel): Complete implementation awaiting merge.

---

**Digest compiled from 500 issues and 500 PRs updated on 2026-03-26.**

---

## Cross-Ecosystem Comparison

# AI Agent & Personal Assistant Open-Source Ecosystem Report
**Analysis Date:** 2026-03-26

## 1. Ecosystem Overview
The open-source AI agent ecosystem is currently in a phase of **hyper-competitive iteration**, characterized by a split between "Gateway-first" projects (OpenClaw, LobsterAI) focusing on protocol compatibility and user interfaces, and "Runtime-first" projects (NanoBot, IronClaw) prioritizing agentic logic and security. A universal trend across the ecosystem is the **transition away from monolithic dependencies** (specifically LiteLLM) toward native, modular providers, driven by security concerns and the need for granular control. Simultaneously, **memory architecture** (RAG vs. Knowledge Graphs vs. Summarization) has emerged as the primary competitive battleground, with projects racing to solve context window limitations.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Primary Focus |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | v2026.3.24 (Stable) | ⭐⭐⭐⭐⭐ (95/100) | API Compatibility, Security Sandboxing |
| **PicoClaw** | 182 (closed) | 243 (merged) | v0.2.4 | ⭐⭐⭐⭐⭐ (92/100) | Lightweight Core, Channel Expansion |
| **CoPaw** | ~50 | ~50 | v0.2.0.post1 | ⭐⭐⭐⭐ (85/100) | Multi-Agent, CPU Stability |
| **ZeptoClaw** | 11 | 22 (merged) | None (Imminent) | ⭐⭐⭐⭐ (82/100) | Browser Automation, UX Polish |
| **NanoBot** | 21 | 50 | None | ⭐⭐⭐ (70/100) | Architecture Refactor (LiteLLM removal) |
| **NanoClaw** | 34 | 50 | None | ⭐⭐⭐ (75/100) | Security Hardening, Skill Ecosystem |
| **LobsterAI** | 37 | 50 | 2026.3.25 | ⭐⭐⭐⭐ (80/100) | Commercialization, Desktop Client |
| **IronClaw** | 10 | 41 | None (Staging) | ⭐⭐⭐ (75/100) | Multi-tenancy, Auth Systems |
| **ZeroClaw** | 38 | 50 | None (v0.6.2) | ⭐⭐ (65/100) | Stability (Streaming/Memory Regressions) |
| **Moltis** | Low | Low | None | ⭐⭐⭐ (70/100) | Architectural Modernization |
| **TinyClaw** | 0 | 2 | None | ⭐⭐ (60/100) | Docker/Node Refactoring |
| **EasyClaw** | 0 | 0 | None | ⭐ (Inactive) | — |

## 3. OpenClaw's Position

### Advantages vs. Peers
*   **Reference Implementation:** With 500 issues/PRs updated daily, OpenClaw is the de facto standard-bearer. Its release of OpenAI-compatible endpoints (`/v1/models`, `/v1/responses`) positions it as a universal gateway, offering a maturity that newer runtimes (ZeptoClaw, TinyClaw) lack.
*   **Plugin Ecosystem:** Unlike IronClaw or CoPaw which rely on internal tooling, OpenClaw supports external plugins (WeChat, Matrix), although this currently introduces stability risks.

### Technical Approach Differences
*   **vs. NanoBot/NanoClaw:** OpenClaw focuses on **broad compatibility and gateway features**, whereas NanoBot is currently ripping out dependencies (LiteLLM) to secure the core. OpenClaw is betting on an extensible plugin layer, while NanoBot bets on a hardened, minimal runtime.
*   **vs. ZeroClaw:** OpenClaw maintains a broader scope (including desktop apps), while ZeroClaw is currently struggling to stabilize a narrower feature set (memory/streaming).

### Community Size
*   OpenClaw operates at a scale roughly **10x larger** than most competitors in terms of raw issue/PR throughput. However, this brings "growing pains"—its open issue count (417) is the highest in the ecosystem, signaling a need for better triage or architectural stabilization compared to the leaner PicoClaw.

## 4. Shared Technical Focus Areas

1.  **Memory & Context Management (Universal)**
    *   *Projects:* OpenClaw, ZeroClaw, CoPaw, PicoClaw.
    *   *Need:* The simple `MEMORY.md` file approach is failing (CoPaw #2289, OpenClaw #9157). There is a collective shift toward **Hybrid Memory (Knowledge Graphs + Vector)** and aggressive context summarization to manage token costs.

2.  **Security Sandboxing & Permissions**
    *   *Projects:* NanoClaw, OpenClaw, LobsterAI, ZeroClaw.
    *   *Need:* Trust is the barrier to adoption. Projects are moving from prompt-based safety to **code-level enforcement** (NanoClaw's policy engine, OpenClaw's "Progressive Permission Pattern," LobsterAI's "Dangerous Command Grading").

3.  **De-LiteLLM-ization**
    *   *Projects:* NanoBot, PicoClaw, Moltis.
    *   *Need:* A major architectural trend is removing the `LiteLLM` dependency due to security risks (NanoBot #2443) and API rigidity. Projects are building **native provider interfaces** (AWS Bedrock, Step Fun, OpenAI) to regain control.

4.  **Desktop & Mobile Parity**
    *   *Projects:* OpenClaw, LobsterAI, PicoClaw.
    *   *Need:* Users want native OS integration (Linux/Windows apps) rather than just web UIs or CLI tools.

## 5. Differentiation Analysis

| Segment | Projects | Strategy | Differentiator |
| :--- | :--- | :--- | :--- |
| **The "Gateways"** | **OpenClaw, LobsterAI** | Agnostic Hub | Focus on connecting *any* model to *any* channel. LobsterAI is differentiating via **monetization/credits**; OpenClaw via **plugin extensibility**. |
| **The "Lightweights"** | **PicoClaw, ZeptoClaw, TinyClaw** | Speed & Edge | Focused on local/edge deployment. ZeptoClaw distinguishes itself with **native browser automation**; PicoClaw with **hot-reloading config**. |
| **The "Hardened Runtimes"** | **NanoBot, NanoClaw, IronClaw** | Security & Scale | Targeting enterprise/devs. IronClaw focuses on **multi-tenant DB-backed auth**; NanoClaw on a **policy-driven security engine**. |
| **The "Agentic Labs"** | **CoPaw, Moltis** | Multi-Agent Logic | Focusing on how agents talk to each other. CoPaw pushes complex **multi-agent context isolation**; Moltis experiments with **Rust-based optimization**. |

## 6. Community Momentum & Maturity

*   **Tier 1 (Hyper-Growth):** **OpenClaw** and **PicoClaw** show massive velocity (200-500 updates/day). PicoClaw is exceptionally efficient (182 issues closed in 24h), suggesting a highly disciplined maintenance cycle. OpenClaw is "noisy" but dominant.
*   **Tier 2 (Iterative/Stabilizing):** **CoPaw, LobsterAI, ZeptoClaw** are shipping features rapidly but struggling with regressions (CPU spikes, broken UIs). They are in the "awkward adolescence" phase of scaling.
*   **Tier 3 (Restructuring):** **NanoBot** is undergoing a high-risk architectural refactor (removing LiteLLM). While necessary, this has stalled features and broken integrations (LangSmith), temporarily reducing stability.
*   **Tier 4 (Stalled/Struggling):** **ZeroClaw** has high activity but almost entirely focused on patching critical regressions (S0/S1 bugs) in v0.6.x, indicating a stability crisis. **TinyClaw** and **EasyClaw** show minimal activity.

## 7. Trend Signals

1.  **Context Window Optimization is Critical:** The "Token Waste" issue (OpenClaw #9157) and requests for session resets (NanoClaw #1211) indicate that **cost control** is the primary user pain point. Developers should prioritize "smart context pruning" over raw feature additions.
2.  **Browser Automation as a Primitive:** ZeptoClaw's `agent-browser` integration signals that **web interaction** is becoming a standard expectation for agents, not just a novelty. Expect OpenClaw and CoPaw to follow suit with native browsing tools.
3.  **Security Audits are Driving Architecture:** The discovery of credential stealers in dependencies (NanoBot #2443) is driving a "trust nothing" approach. Future agents will require **deterministic security policies** (NanoClaw) rather than relying on LLM judgment for safety.
4.  **Channel Fragmentation:** There is an explosion of channel support (WeChat, DingTalk, Feishu, Telegram, Matrix). The competitive advantage is shifting from "how many channels" to "how reliable is the channel." Current adapters are brittle (ZeroClaw's Matrix issues, CoPaw's Feishu delays).

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-03-26

## 1. Today's Overview
NanoBot is exhibiting **very high development velocity** with 50 PRs updated and 21 Issues processed in the last 24 hours. The project is currently in a significant architectural transition phase, moving away from the `LiteLLM` dependency due to security concerns (credential stealing) towards native provider implementations. This shift has caused some friction with compatibility and feature parity (e.g., LangSmith integration breakage), but the community is responding with rapid patches. The high volume of open PRs (35) suggests an active push towards stabilizing the new provider architecture and expanding channel capabilities.

## 2. Releases
**No new releases** were recorded today. The project appears to be accumulating significant changes in the `main` branch regarding provider refactoring and channel stability, likely preparing for a minor version bump.

## 3. Project Progress
Significant progress was made on decoupling from LiteLLM and improving channel reliability:

*   **Provider Diversification:** Merged/Closed PRs include adding support for **Step Fun (阶跃星辰)** ([PR #2472](https://github.com/HKUDS/nanobot/pull/2472)), fixing **Mistral transcription** ([PR #1680](https://github.com/HKUDS/nanobot/pull/1680)), and merging auto-casting for tool parameters ([PR #1610](https://github.com/HKUDS/nanobot/pull/1610)).
*   **Architecture Refactor:** The removal of `litellm_provider.py` is being mitigated by new native implementations like the **AWS Bedrock provider** ([PR #2485](https://github.com/HKUDS/nanobot/pull/2485)).
*   **Stability Fixes:** Merged fixes for **Telegram duplicate messages** (likely related to closed issue #2208) and **configurable timezone** support ([PR #2477](https://github.com/HKUDS/nanobot/pull/2477)).
*   **Multi-Agent Capabilities:** Progress on multi-agent profiles and channel mapping is evident in active PRs like [PR #2483](https://github.com/HKUDS/nanobot/pull/2483).

## 4. Community Hot Topics
*   **Security Scare with LiteLLM ([Issue #2443](https://github.com/HKUDS/nanobot/issues/2443)):** The quarantine of the `litellm` dependency for containing a credential stealer is the most critical topic. Users are actively discussing the implications, and the dev team is pushing native providers (Bedrock, Step Fun) to replace it.
*   **Architectural Integrity ([Issue #2463](https://github.com/HKUDS/nanobot/issues/2463)):** A technical debate is ongoing regarding prompt prefix preservation. Users note that NanoBot's history persistence doesn't match the exact prompt sent to the model, potentially breaking state management for advanced use cases.
*   **Skill Management UX ([Issue #2489](https://github.com/HKUDS/nanobot/issues/2489)):** There is strong interest in moving from implicit skill activation to explicit user-driven control via slash commands.

## 5. Bugs & Stability
*   🔴 **Critical: System Deadlock ([Issue #2456](https://github.com/HKUDS/nanobot/issues/2456)):** `nanobot onboard` causes severe system deadlock and SSH lockout in multi-user Linux environments. **Status:** Closed, but details on the fix should be monitored.
*   🔴 **Critical: LangSmith Integration Broken ([Issue #2493](https://github.com/HKUDS/nanobot/issues/2493)):** The removal of `litellm_provider.py` broke LangSmith integration. No fix PR is visible yet, creating a blocker for users relying on observability tools.
*   🟠 **High: Routing Logic Error ([Issue #2465](https://github.com/HKUDS/nanobot/issues/2465)):** `RoutingProvider` forces `LiteLLMProvider` for tier models, breaking OAuth flows for providers like OpenAI Codex.
*   🟠 **High: API Parameter Deprecation ([Issue #2462](https://github.com/HKUDS/nanobot/issues/2462) & [PR #2491](https://github.com/HKUDS/nanobot/pull/2491)):** OpenAI compatible providers are failing due to `max_tokens` deprecation in favor of `max_completion_tokens`. A fix PR is open.

## 6. Feature Requests & Roadmap Signals
*   **Explicit Skill Injection ([PR #2488](https://github.com/HKUDS/nanobot/pull/2488)):** Implementation of the `/skill` command is actively being reviewed. This is a high-priority UX improvement.
*   **Message Debouncing ([PR #2492](https://github.com/HKUDS/nanobot/pull/2492)):** A proposal to handle Telegram forwarded messages coherently rather than as separate turns. This signals a focus on improving chat UX flow.
*   **OpenClaw Plugin Bridge ([Issue #2484](https://github.com/HKUDS/nanobot/issues/2484)):** Request for a standardized bridge layer to integrate plugins from other frameworks (like OpenClaw), indicating user desire for broader ecosystem compatibility.
*   **Preventing "False Action" Hallucinations ([Issue #2487](https://github.com/HKUDS/nanobot/issues/2487)):** A proposal to fix cases where the agent claims to have completed a task without actually executing code.

## 7. User Feedback Summary
Users are generally excited about the expansion of model support (Step Fun, Bedrock) but are feeling growing pains from the rapid architectural changes. The transition away from LiteLLM has created friction for users relying on its broad compatibility (e.g., Gemini, LangSmith). There is a specific pain point regarding **agent reliability**—users report frustration when the agent says "I'm doing it" but executes no code ([Issue #2487](https://github.com/HKUDS/nanobot/issues/2487)). The request for **Step Fun** support ([Issue #2470](https://github.com/HKUDS/nanobot/issues/2470)) highlights a growing Chinese user base requiring domestic model integration.

## 8. Backlog Watch
*   **Long-term Stub: Gemini API Key Error ([Issue #144](https://github.com/HKUDS/nanobot/issues/144)):** Open since Feb 2026. Users cannot easily use Gemini without LiteLLM or specific key config workarounds. This needs a native provider update.
*   **Matrix Auth Issues ([Issue #1681](https://github.com/HKUDS/nanobot/issues/1681)):** Persisting for weeks with decryption errors ("Olm event doesn't contain ciphertext"), affecting the privacy-focused user segment.
*   **Zombie Processes ([PR #2410](https://github.com/HKUDS/nanobot/pull/2410)):** Fix for exec tool zombie processes is open and needs review to prevent long-term runtime degradation.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-03-26

## 1. Today's Overview
ZeroClaw is experiencing a period of exceptionally high development activity, characterized by a massive volume of bug fixes and architectural refactoring. With **38 active issues and 50 pull requests** updated in the last 24 hours, the maintainers are aggressively addressing stability problems reported in the recent v0.6.x releases. The focus is clearly shifting toward hardening the agent's memory system, stabilizing the Matrix/WhatsApp channels, and improving the Docker deployment experience. While no new stable release was cut today, the sheer volume of fixes merged into the master branch suggests a patch release (likely v0.6.3) is imminent to address critical streaming and memory regressions.

## 2. Releases
No new releases were published today. The project remains on the v0.6.x lineage (specifically v0.6.2 as referenced in recent issues).

## 3. Project Progress
Significant progress was made in refactoring core components and fixing v0.6.x regressions. Key merged PRs include:

*   **Memory Backend Consolidation:** A major architectural shift occurred in **PR #4714**, which removed the PostgreSQL backend entirely and consolidated knowledge graph features into SQLite. This simplifies the stack and reduces operational complexity.
*   **Streaming Regression Fix:** The critical v0.6.1 bug causing "unknown does not support streaming" errors was addressed in **PR #4675**, implementing a fallback mechanism for stream errors.
*   **Matrix Channel Stabilization:** Several fixes were merged for the Matrix channel, including restoring multi-room listening (**PR #4700**) and fixing channel config preservation during onboarding (**PR #4684**).
*   **Docker & CI Improvements:** **PR #4664** fixed the CI lint gate to include optional features (like Matrix), preventing future code quality slip-ups. **PR #4691** fixed gateway path prefix issues.

## 4. Community Hot Topics
The most discussed items highlight friction in deployment and a desire for easier setup:
*   **Full Docker Image ([Issue #3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)):** Users are requesting a "kitchen sink" Docker image with all features (like WhatsApp) pre-compiled. Currently, users must build custom images to access non-default features, creating a barrier to entry.
*   **Matrix E2EE & Friction ([Issue #4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657)):** An umbrella issue tracking Matrix stability reveals significant user struggle with End-to-End Encryption (E2EE) retry loops and missing features like mention-only modes.
*   **Security & Sandboxing ([Issue #2972](https://github.com/zeroclaw-labs/zeroclaw/issues/2972)):** A persistent discussion continues regarding the need for WASM or container-based sandboxing for plugins, indicating a security-conscious user base concerned about unrestricted host access.

## 5. Bugs & Stability
Today's reports were dominated by high-severity (S0/S1) bugs affecting core functionality, though many already have open fix PRs.

| Severity | Issue | Description | Fix Status |
| :--- | :--- | :--- | :--- |
| **S0** | **[Issue #4672](https://github.com/zeroclaw-labs/zeroclaw/issues/4672)** | **Security Risk:** Groq API keys not masked in UI. | Open |
| **S0** | **[Issue #4299](https://github.com/zeroclaw-labs/zeroclaw/issues/4299)** | 502 Gateway Error after Mattermost integration. | Open |
| **S1** | **[Issue #4670](https://github.com/zeroclaw-labs/zeroclaw/issues/4670)** | Streaming broken for all models via Websocket (`unknown does not support streaming`). | **Fixed in [PR #4675](https://github.com/zeroclaw-labs/zeroclaw/pull/4675)** |
| **S1** | **[Issue #4699](https://github.com/zeroclaw-labs/zeroclaw/issues/4699)** | Unbounded memory growth in conversation history map. | **Fixed in [PR #4706](https://github.com/zeroclaw-labs/zeroclaw/pull/4706)** |
| **S1** | **[Issue #4644](https://github.com/zeroclaw-labs/zeroclaw/issues/4644)** | Web chat loses context/memory after two rounds. | Open |
| **S2** | **[Issue #4649](https://github.com/zeroclaw-labs/zeroclaw/issues/4649)** | Feishu channel drops "list" type messages. | **Fixed in [PR #4702](https://github.com/zeroclaw-labs/zeroclaw/pull/4702)** |

## 6. Feature Requests & Roadmap Signals
User requests focused heavily on deployment flexibility and multi-agent capabilities:
*   **Hardware Deployment:** A new guide for Raspberry Pi deployment was proposed ([Issue #4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704)), highlighting a use case for running ZeroClaw on low-cost hardware.
*   **Agent-to-Agent (A2A) Protocol:** Support for peer discovery and A2A communication is seeing active development ([PR #4166](https://github.com/zeroclaw-labs/zeroclaw/pull/4166)), signaling a move toward multi-agent swarms.
*   **Secret Management:** Users want a CLI command for setting secrets without plaintext editing ([Issue #4669](https://github.com/zeroclaw-labs/zeroclaw/issues/4669)), indicating a need for better DevOps workflows.
*   **Database Support:** Requests for MariaDB support ([Issue #4668](https://github.com/zeroclaw-labs/zeroclaw/issues/4668)) clash with today's merge of PostgreSQL removal, suggesting users want options other than SQLite.

## 7. User Feedback Summary
Users are enthusiastic but currently frustrated by "rough edges" in the v0.6.x releases.
*   **Pain Points:** The "amnesia" (memory loss) in the Web UI and broken streaming are major blockers for daily use. Docker users feel the default image is too "slim" and requires too much technical effort to enable standard features like WhatsApp.
*   **Satisfaction:** There is strong appreciation for the project's scope, but satisfaction is currently tempered by stability issues in specific channels (Matrix/Feishu). The visual rebranding efforts (Logo update) received positive engagement for modernizing the project's image.

## 8. Backlog Watch
*   **[Issue #3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) (Feature):** "Provide a full docker image." This has 4 comments and 2 upvotes. It represents a low-effort, high-impact change that would significantly lower the barrier to entry.
*   **[Issue #4655](https://github.com/zeroclaw-labs/zeroclaw/issues/4655) (Bug):** `onboard --channels-only` overwrites config. This is a destructive workflow blocker that needs verification and a fix.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-03-26

## 1. Today's Overview
PicoClaw demonstrates exceptional health and velocity with **182 issues closed** and **243 PRs merged** in the last 24 hours, signaling a highly active maintenance cycle potentially clearing backlog for a major milestone. The release of **v0.2.4** introduces quality-of-life improvements like hot-reloading config and enhanced error handling. Activity is focused heavily on stabilizing the agent core (`SubTurn` logic), expanding channel capabilities (Audio/TTS), and fixing provider-specific regressions (Mistral, Anthropic). The sheer volume of closed items suggests a "cleanup and polish" phase rather than a feature-freeze period.

## 2. Releases
### **v0.2.4**
The latest release focuses on operational stability and developer experience.
*   **Key Changes:**
    *   **Hot-Reload:** Workspace configuration files are now hot-reloaded, removing the need to restart the agent for config tweaks.
    *   **Agent Resilience:** `SubTurn` error handling and logging were significantly refactored to prevent crashes during complex delegation tasks.
    *   **Configurable Logger:** Added a configurable logging system to help users debug specific components.
*   **Migration Note:** Users can now rely on automatic config updates but should verify `gateway.log_level` settings (default is `fatal` per PR #2015).

## 3. Project Progress
A massive **243 PRs were merged**, indicating rapid integration of community and core team contributions.
*   **Infrastructure & Builds:** Significant refactoring of Docker entrypoints (#2023) now allows agents to modify `bootstrap.sh` for persistent tool installation across container restarts. Dependencies like `pty` and `sqlite` were upgraded/reorganized (#2012).
*   **Agent Core:** Improvements to token estimation (#2014) now include `SystemParts`, fixing context window overflow crashes. Subagent tool inheritance was fixed to use the runtime registry (#2020).
*   **Provider Support:** Enhanced error detection for context overflows in Anthropic, ZhipuAI, and GLM (#2016). Fixed critical incompatibilities with Mistral (422 errors) by omitting `reasoning_content` (#2019).
*   **Channel Features:** Merged support for multi-message sending via split markers (#2008) and initiated a refactor for ASR/TTS (Voice) capabilities (#1939), signaling a move toward multimodal interaction.

## 4. Community Hot Topics
The most active discussions revolve around **deployment flexibility** and **local LLM support**, highlighting a user base keen on self-hosting and customization.
*   **[Help Wanted] OpenRouter Configuration (#694):** 15 comments. Users are struggling with complex model routing configurations, indicating a need for better documentation or UI for model switching.
*   **WeChat/Enterprise Bot Setup (#1210):** 11 comments. High demand for integrating PicoClaw into enterprise workflows (WeCom), complicated by specific token/AES key requirements.
*   **Android Installation (#190):** 11 comments. Strong interest in running PicoClaw on mobile/edge devices, aligning with the "Pico" (small) branding but currently lacking official support.
*   **Local LLM/Ollama Support (#75, #109):** Collectively high engagement. Users consistently hit barriers (timeouts, API key errors) when trying to decouple from cloud providers, emphasizing the project's appeal to privacy-focused users.

## 5. Bugs & Stability
Several high-severity bugs were addressed in this cycle, though some persistent configuration issues remain.
*   **Critical Provider Bug (Fixed):** **Gemini 3 "Thought Signatures" (#79, #161):** Tool calls were failing due to missing mandatory signatures. Fix likely included in recent provider refactoring.
*   **Critical Config Bug (Active):** **API Key Detection (#680, #127, #96):** Multiple reports of PicoClaw failing to detect API keys or defaulting to the wrong provider (GLM) despite correct configs. This remains a friction point for new users.
*   **Stability Fix:** **Ollama Timeouts (#430):** Fixed the rigid 120s HTTP timeout that caused local model connections to drop.
*   **Regression Fix:** **Discord Token Updates (#2024):** A regression in v0.2.4 preventing Discord token saves via the web UI was identified and fixed immediately.

## 6. Feature Requests & Roadmap Signals
Requests focus on **usability** and **multi-user isolation**.
*   **Telegram Forum Topics (#1270):** High priority request to support threads/topics to isolate contexts within a single group chat. *Prediction: Likely to be implemented soon given the current focus on channel robustness.*
*   **Subagent Tool Inheritance (#1278):** Request for granular control over what tools subagents can access. *Status: Partially addressed by PR #2020 regarding registry inheritance.*
*   **Self-Upgrade Support (#618):** A "task" to add native self-updating capabilities for binaries (Windows/Debian/Embedded). This aligns with the project's maturity growth.
*   **Multi-User Support (#995):** Currently, `MEMORY.md` is global. Users are asking for session isolation to allow family/team sharing of a single instance.

## 7. User Feedback Summary
Users are enthusiastic about PicoClaw's potential as a lightweight, local alternative to heavier agents but are currently frustrated by **configuration complexity** and **provider compatibility**.
*   **Pain Points:**
    *   "It keeps saying 'No API key configured' even though I set it." (Recurring theme in Issues #109, #127, #680).
    *   Local LLM (Ollama) integration is buggy and prone to timeouts (Issue #430).
    *   Lack of clear guides for mobile (Android) or enterprise platforms (WeCom).
*   **Satisfaction:** Positive sentiment exists around the project's speed and the new hot-reload feature. The quick fix for the Discord regression (#2024) was well-received by the community.

## 8. Backlog Watch
*   **Website Security Issue (#1037):** The official website footer allegedly links to a fraudulent "Nanoclaw" project. This requires immediate attention from maintainers to prevent phishing risks.
*   **GHCR Visibility (#302):** The GitHub Container Registry image is currently private. Users are requesting it be made public to simplify Docker deployments.
*   **Identity/Personality Changes (#288):** Users report that changes to `soul.md` / `identity.md` do not reflect in the agent's behavior, specifically in Docker environments. This suggests a potential volume mounting or caching bug that hasn't been fully resolved.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-26

## 1. Today's Overview

NanoClaw demonstrates **very high active development velocity** with 50 pull requests and 34 issues updated in the last 24 hours. The project is in an intensive stabilization and feature expansion phase, with a strong focus on fixing channel-specific bugs (Telegram, WhatsApp) and expanding integration options. A **critical security audit** (Issue #1431) identified command injection vulnerabilities that were immediately addressed. The open-source community is highly engaged, contributing multiple new channel skills (Mattermost, Signal, Emacs, AstrBot) and utility integrations. The ratio of merged PRs (30) to opened issues (9) suggests the maintainers are actively closing the feedback loop while managing rapid growth.

---

## 2. Releases

**No new releases** were published today. The project appears to be accumulating fixes and features for a future release, with significant activity in the `skill/*` branches indicating parallel development tracks.

---

## 3. Project Progress

### Merged/Closed PRs (30 today)

**Security & Stability Fixes:**
- **[PR #1360](https://github.com/qwibitai/nanoclaw/pull/1360)** — Added a **security policy engine** with deterministic user gating, tool restrictions, and readonly mounts. This replaces unreliable prompt-based access control with hard code-level enforcement. Critical for production deployments.
- **[PR #1349](https://github.com/qwibitai/nanoclaw/pull/1349)** — Added pre-hook gate for scheduled tasks, allowing conditional execution based on shell command exit codes.
- **[PR #1368](https://github.com/qwibitai/nanoclaw/pull/1368)** — Fixed graceful shutdown of the `claw` runtime after successful output.

**Channel Bug Fixes:**
- **[PR #1367](https://github.com/qwibitai/nanoclaw/pull/1367)** — Fixed Telegram migration incorrectly marking all chats as groups (Issue #1272).
- **[PR #1353](https://github.com/qwibitai/nanoclaw/pull/1353)** — Fixed missing `CLAUDE.md` template when registering main groups.

**Documentation & Tooling:**
- **[PR #1365](https://github.com/qwibitai/nanoclaw/pull/1365)** — Added indirect prompt injection risks documentation to `SECURITY.md`.
- **[PR #1370](https://github.com/qwibitai/nanoclaw/pull/1370)** — Fixed CI failures on forks by skipping upstream-only workflows.

### Open PRs Advancing (20 active)

Notable community contributions under review:
- **[PR #546](https://github.com/qwibitai/nanoclaw/pull/546)** — Mattermost channel skill (blocked, needs architecture review)
- **[PR #784](https://github.com/qwibitai/nanoclaw/pull/784)** — Signal channel + channel-agnostic reactions infrastructure
- **[PR #1331](https://github.com/qwibitai/nanoclaw/pull/1331)** — Ollama MCP skill for local LLM integration
- **[PR #1343](https://github.com/qwibitai/nanoclaw/pull/1343)** — CLI backend skill replacing Agent SDK with `claude -p`

---

## 4. Community Hot Topics

### Most Discussed Issues

| Issue | Comments | Topic | Underlying Need |
|-------|----------|-------|-----------------|
| **[#783](https://github.com/qwibitai/nanoclaw/issues/783)** | 4 | `schedule_task` idempotency | Users running scheduled tasks across sessions need duplicate prevention to avoid task accumulation |
| **[#1075](https://github.com/qwibitai/nanoclaw/issues/1075)** | 4 | Linux support documentation | Confusion about platform support readiness — users eager for Linux deployment |
| **[#1211](https://github.com/qwibitai/nanoclaw/issues/1211)** | 3 | `/new` command for session reset | Users want ability to clear conversation context without restarting containers to manage token usage |

### Most Reacted Issues

| Issue | 👍 | Topic | Signal |
|-------|-----|-------|--------|
| **[#1211](https://github.com/qwibitai/nanoclaw/issues/1211)** | 2 | Session context reset | Strong user demand for conversation management features |
| **[#1361](https://github.com/qwibitai/nanoclaw/issues/1361)** | 2 | Agent-runner source cache | Developer frustration with code changes not propagating to existing groups |
| **[#1184](https://github.com/qwibitai/nanoclaw/issues/1184)** | 1 | K8s/Sealos deployment | Production users want containerized deployment in restricted environments |

---

## 5. Bugs & Stability

### Critical Severity

| Issue | Description | Status |
|-------|-------------|--------|
| **[#1431](https://github.com/qwibitai/nanoclaw/issues/1431)** | **Command injection via `exec()` with string interpolation** in `container-runner.ts:424` and `container-runtime.ts:31-32`. Security audit identified exploitable code paths. | **CLOSED** — Addressed via security policy engine PR #1360 |
| **[#1445](https://github.com/qwibitai/nanoclaw/issues/1445)** | **LID JID translation drops all DM messages silently** on WhatsApp. New sessions with LID-format JIDs (`@lid`) fail translation, causing silent message loss. | **OPEN** — Needs investigation |

### High Severity

| Issue | Description | Status |
|-------|-------------|--------|
| **[#1440](https://github.com/qwibitai/nanoclaw/issues/1440)** | No intermediate feedback during long-running agent sessions (10+ minute silence observed). Users cannot distinguish from crashes. | **OPEN** — UX enhancement needed |
| **[#1361](https://github.com/qwibitai/nanoclaw/issues/1361)** | Agent-runner source cache never refreshes after code changes. Developers must manually delete session directories to pick up changes. | **CLOSED** — Fix merged |

### Medium Severity (Closed Today)

- **[#698](https://github.com/qwibitai/nanoclaw/issues/698)** — Agent cannot determine current day of week from ISO timestamps (temporal context issue)
- **[#1141](https://github.com/qwibitai/nanoclaw/issues/1141)** — Per-group `trigger_pattern` from DB ignored in favor of global config
- **[#1272](https://github.com/qwibitai/nanoclaw/issues/1272)** — Telegram migration incorrectly marks DMs as groups → **Fixed by PR #1367**

---

## 6. Feature Requests & Roadmap Signals

### Likely Near-Term Additions

| Feature | Issue/PR | Likelihood | Rationale |
|---------|----------|------------|-----------|
| **Session context reset (`/new` command)** | [Issue #1211](https://github.com/qwibitai/nanoclaw/issues/1211) | **High** | Tagged "good first issue", 2 👍, addresses token waste concern |
| **Linux official support** | [Issue #1075](https://github.com/qwibitai/nanoclaw/issues/1075) | **High** | Documentation mismatch suggests imminent announcement; multiple Linux setup issues being resolved |
| **Pre-hook gates for scheduled tasks** | [PR #1349](https://github.com/qwibitai/nanoclaw/pull/1349) | **Merged** | Already implemented |
| **Security policy engine** | [PR #1360](https://github.com/qwibitai/nanoclaw/pull/1360) | **Merged** | Already implemented |

### Community-Driven Integrations (Pending Review)

| Integration | PR | Status |
|-------------|-----|--------|
| Mattermost channel | [PR #546](https://github.com/qwibitai/nanoclaw/pull/546) | Blocked — needs architecture review |
| Signal channel + reactions | [PR #784](https://github.com/qwibitai/nanoclaw/pull/784) | Needs review |
| Ollama MCP (local LLMs) | [PR #1331](https://github.com/qwibitai/nanoclaw/pull/1331) | Open |
| Emacs channel | [PR #1375](https://github.com/qwibitai/nanoclaw/pull/1375) | Merged |
| AstrBot bridge | [PR #1355](https://github.com/qwibitai/nanoclaw/pull/1355) | Open |
| Paperclip HTTP adapter | [PR #1371](https://github.com/qwibitai/nanoclaw/pull/1371) | Merged |
| ChangeDetection.io monitoring | [PR #1369](https://github.com/qwibitai/nanoclaw/pull/1369) | Open |

---

## 7. User Feedback Summary

### Pain Points

1. **Token/context management** — Users frustrated by accumulating conversation history with no way to reset sessions ([#1211](https://github.com/qwibitai/nanoclaw/issues/1211))
2. **Silent failures** — WhatsApp DMs dropped without error messages due to LID JID handling ([#1445](https://github.com/qwibitai/nanoclaw/issues/1445))
3. **Developer experience** — Code changes not propagating to existing groups requires manual cache clearing ([#1361](https://github.com/qwibitai/nanoclaw/issues/1361))
4. **Long-running task feedback** — 10+ minute silences create uncertainty about agent status ([#1440](https://github.com/qwibitai/nanoclaw/issues/1440))
5. **K8s deployment complexity** — Production users struggling with restricted container environments ([#1184](https://github.com/qwibitai/nanoclaw/issues/1184))

### Positive Signals

- Users appreciate the **minimalist architecture** as a "lightweight, secure alternative to bloated frameworks" ([#1184](https://github.com/qwibitai/nanoclaw/issues/1184))
- Strong **community contribution velocity** — 15+ skill PRs in progress
- Security-conscious development with **daily security audits** ([#1431](https://github.com/qwibitai/nanoclaw/issues/1431))

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Concern |
|-------|-----|---------|
| **[#1445](https://github.com/qwibitai/nanoclaw/issues/1445)** | 1 day | **Critical** — Silent WhatsApp DM loss on Linux; comprehensive report with 6 bugs, needs triage |
| **[#1440](https://github.com/qwibitai/nanoclaw/issues/1440)** | 1 day | UX issue — No feedback during long tasks; affects user trust |
| **[#546](https://github.com/qwibitai/nanoclaw/pull/546)** | 28 days | **Oldest open PR** — Mattermost integration blocked, needs architecture decision |
| **[#784](https://github.com/qwibitai/nanoclaw/pull/784)** | 20 days | Signal channel + reactions infrastructure awaiting review |
| **[#1184](https://github.com/qwibitai/nanoclaw/issues/1184)** | 9 days | K8s/Sealos deployment challenges — indicates enterprise adoption interest |

### Skill Branch Merge Conflicts

Multiple automated merge-forward failures detected ([#1437](https://github.com/qwibitai/nanoclaw/issues/1437), [#1436](https://github.com/qwibitai/nanoclaw/issues/1436), [#1435](https://github.com/qwibitai/nanoclaw/issues/1435)) affecting:
- `skill/apple-container`
- `skill/native-credential-proxy`
- `skill/ollama-tool`
- `skill/compact`

These require manual resolution to keep skill branches synchronized with `main`.

---

## Summary

NanoClaw is experiencing rapid growth with strong community engagement and active maintainer responsiveness. The project successfully addressed a **critical security vulnerability** within 24 hours of audit discovery. Priority should be given to:

1. Investigating **silent WhatsApp DM drops** (Issue #1445)
2. Resolving **skill branch merge conflicts** blocking parallel development
3. Implementing **session reset functionality** to address token management concerns
4. Providing **intermediate feedback** during long-running tasks to improve UX

The expansion of channel integrations (Mattermost, Signal, Emacs, AstrBot) positions NanoClaw as a multi-platform AI assistant framework with growing enterprise appeal.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-03-26

## 1. Today's Overview
IronClaw demonstrates **high velocity development activity** with 41 PRs updated and 10 Issues processed in the last 24 hours. The project is in an active stabilization and feature-expansion phase, evidenced by a significant volume of regression tests being added alongside major feature PRs for user management and agentic capabilities. The ratio of open (30) to merged (11) PRs suggests a large amount of work-in-progress, likely targeting a substantial future milestone. Core contributors (henrypark133, ilblackdragon) are heavily focused on fixing edge cases in the agent loop and workspace isolation logic.

## 2. Releases
**No new releases** were recorded for 2026-03-26. The high volume of staging promotion PRs (e.g., #1654, #1649) indicates active integration work on the `staging` branch, but no official versioned artifact has been cut yet.

## 3. Project Progress
Significant advancements were merged today, focusing on stability and developer experience:

*   **Prompt Scoping & Workspace Isolation (PR #1651):** Fixed critical regressions where system prompts might pull from the wrong workspace context in multi-tenant environments. This ensures authenticated user scope takes precedence.
*   **Routine Engine & REPL Stability (PR #1643 & PR #1648):** Fixed a hang in the REPL single-message mode (`-m`) and normalized cron schedule storage to prevent parsing mismatches.
*   **Agentic Reasoning Transparency (PR #1513):** Merged a major feature allowing LLM reasoning (why specific tools were chosen) to be threaded through the entire stack, from provider to persistence.
*   **Security Hardening (PR #1591):** Ongoing work to fix TOCTOU (Time-of-Check to Time-of-Use) race conditions in approval processing.

## 4. Community Hot Topics
*   **Tool Call Truncation (Issue #1631 | PR #1632):** Users are experiencing issues where large tool responses (e.g., 145KB MCP data) cause the LLM to fail because `select_tools()` limits tokens to 1024.
    *   *Analysis:* This highlights a growing pain point in agentic systems: managing massive context windows when echoing data. The community fix proposes discarding truncated calls to force a summarization fallback.
*   **Slack Integration Improvements (PR #1547):** A significant community contribution adding "Socket Mode" for NAT-friendly connectivity.
    *   *Analysis:* This addresses a major deployment friction point for users running IronClaw in restricted network environments without public URLs.

## 5. Bugs & Stability
Bugs reported today focus on integration edges and parsing:

1.  **Critical: Routine "No user query" Error (Issue #763 - Closed):** Routines failed against the NEAR AI API because the engine constructed message histories without a `user` role.
    *   *Status:* Fixed/Closed.
2.  **High: Bedrock API Validation (Issue #1629):** AWS Bedrock fails requests if `toolConfig` is missing but tool blocks exist in history.
    *   *Status:* Fix likely needed in provider mapping.
3.  **Medium: Feishu Auth Configuration (Issue #1633):** The Feishu channel fails to respond due to missing `app_id` in the workspace context.
    *   *Status:* Open.
4.  **Medium: Sandbox Loop (Issue #1637):** Simple sandbox commands trigger a "50 loops" error.
    *   *Status:* Open.

## 6. Feature Requests & Roadmap Signals
*   **Drift Monitoring (Issue #1634):** A proposal to add a lightweight `DriftMonitor` to detect stuck agents without extra LLM calls. This signals a roadmap shift toward **self-healing agent architectures**.
*   **DB-Backed User Management (PR #1626):** A massive PR replacing static env var tokens with a full DB-backed user system. This is a strong signal that IronClaw is transitioning from a single-user tool to a **multi-tenant platform**.
*   **Aliyun Provider Support (PR #1446):** Expanding LLM provider support to Aliyun BaiLian, indicating a push for **international/cloud-specific deployment flexibility**.

## 7. User Feedback Summary
Users are pushing the limits of the agent's context window and tool execution capabilities.
*   **Pain Point:** The `build_software` tool struggles with complex `Cargo.toml` dependencies (Issue #1640), indicating the agent's coding assistant capabilities need better handling of dependency formats.
*   **Use Case:** Users are trying to execute simple commands in sandboxes (Issue #1637) but hitting strict loop limits, suggesting the safety guardrails might be too aggressive for simple administrative tasks.
*   **Satisfaction:** Active engagement on regression tests (Issues #1652, #1653) shows a mature user base invested in the long-term stability of multi-tenant features.

## 8. Backlog Watch
*   **PR #1626 (User Management):** An XL-sized PR with high impact. Needs careful review as it touches DB migrations, auth, and orchestration.
*   **PR #1547 (Slack Socket Mode):** A valuable community contribution that has been open for 5 days. It improves deployability significantly and warrants prioritization.
*   **Issue #1640 (Cargo Parsing):** A specific but blocking issue for users trying to build Rust WASM tools, potentially hindering the ecosystem growth around custom tools.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-03-26

## 1. Today's Overview
LobsterAI demonstrates **extremely high development velocity** with 50 PRs updated and 37 Issues active in the last 24 hours. The project is in an active iteration phase following the `2026.3.25` release, with heavy focus on stabilizing the "OpenClaw" gateway architecture and desktop client reliability. The community is highly engaged in testing MCP (Model Context Protocol) integrations and reporting edge cases in the new monetization/login features. The volume of open PRs (45) compared to merged ones (5) suggests a rigorous review process or a backlog accumulation that needs monitoring.

## 2. Releases
### **Version: 2026.3.25** (Released 2026-03-25)
*   **Highlights**: This version introduces significant commercial and security features.
    *   **Monetization**: Added Login & "Refill Pack" (加油包) functionality for credit-based usage.
    *   **Security**: Implemented "Dangerous Command Grading Authorization" on the desktop client, likely a safety mechanism for agent execution.
    *   **Fixes**: Resolved chat synchronization issues.
*   **Migration Note**: Users upgrading to this version will see new UI elements for login and credit management. Developers should note the shift towards a hybrid SaaS/self-hosted model.

## 3. Project Progress
**Core Architecture & Performance:**
*   **GitHub Copilot Integration** ([PR #707](https://github.com/netease-youdao/LobsterAI/pull/707)): Added full OAuth device flow and API support for Copilot, treating it as a first-class provider.
*   **OpenClaw Gateway Stability**: Major refactoring to prevent gateway restarts during model switching ([PR #870](https://github.com/netease-youdao/LobsterAI/pull/870) - Closed/Merged logic) and fixes for crashes when plugins (like WeChat) are missing ([PR #797](https://github.com/netease-youdao/LobsterAI/pull/797)).
*   **Database Optimization**: Addressed SQLite blocking the main thread by debouncing saves and caching configs ([PR #812](https://github.com/netease-youdao/LobsterAI/pull/812)), and fixed cascade deletion bugs causing DB bloat ([PR #881](https://github.com/netease-youdao/LobsterAI/pull/881)).

**Feature Enhancements:**
*   **Sharing**: Added granular message selection for sharing/exporting chats with branding ([PR #880](https://github.com/netease-youdao/LobsterAI/pull/880)).
*   **UI/UX**: Fixed auto-scroll behavior in chats ([PR #872](https://github.com/netease-youdao/LobsterAI/pull/872)) and added task statistics filtering ([PR #875](https://github.com/netease-youdao/LobsterAI/pull/875)).

## 4. Community Hot Topics
1.  **MCP Configuration Failures** ([Issue #728](https://github.com/netease-youdao/LobsterAI/issues/728), [#724](https://github.com/netease-youdao/LobsterAI/issues/724)):
    *   **Topic**: Users are struggling to get MCP tools to invoke ("0 tools" synced).
    *   **Analysis**: There is a sharp learning curve or potential regression in the MCP configuration interface. Users expect plug-and-play but are facing silent failures.
2.  **DingTalk Bot Duplication** ([Issue #691](https://github.com/netease-youdao/LobsterAI/issues/691)):
    *   **Topic**: DingTalk integration sends duplicate replies.
    *   **Analysis**: Specific to the DingTalk adapter, suggesting webhook handling or event acknowledgment bugs not present in WeChat/Feishu adapters.
3.  **Gateway Instability on Switch** ([Issue #844](https://github.com/netease-youdao/LobsterAI/issues/844)):
    *   **Topic**: Switching models triggers a slow Gateway restart.
    *   **Analysis**: Users expect seamless model switching. This aligns with the fix in PR #870, indicating the dev team is responsive to this friction.

## 5. Bugs & Stability
*   **Critical: Infinite Restart Loop** ([Issue #859](https://github.com/netease-youdao/LobsterAI/issues/859)):
    *   Invalid model configurations cause the OpenClaw Gateway to crash and restart infinitely.
    *   *Status*: Fix likely linked to config validation logic.
*   **High: Data Loss & Bloat** ([Issue #858](https://github.com/netease-youdao/LobsterAI/issues/858), [#879](https://github.com/netease-youdao/LobsterAI/issues/879)):
    *   Custom model names are wiped on save, and disabling foreign keys in SQLite prevents session cleanup, leading to disk bloat.
    *   *Status*: PRs [#881](https://github.com/netease-youdao/LobsterAI/pull/881) and [#868](https://github.com/netease-youdao/LobsterAI/pull/868) are addressing transaction safety.
*   **Medium: Security Risks** ([Issue #816](https://github.com/netease-youdao/LobsterAI/issues/816)):
    *   Git branch name injection risk when downloading Skills.
    *   *Status*: Active PRs ([#869](https://github.com/netease-youdao/LobsterAI/pull/869), [#877](https://github.com/netease-youdao/LobsterAI/pull/877)) are implementing URL scheme whitelists and sanitization.
*   **Medium: Scheduled Tasks** ([Issue #850](https://github.com/netease-youdao/LobsterAI/issues/850)):
    *   Tasks execute even after being disabled by the user.

## 6. Feature Requests & Roadmap Signals
*   **Granular Model Assignment** ([Issue #856](https://github.com/netease-youdao/LobsterAI/issues/856)): Users want to assign specific models to specific tasks (e.g., cheap model for chat, powerful model for coding) rather than a global switch.
*   **PRD & Dev Skills** ([Issue #873](https://github.com/netease-youdao/LobsterAI/issues/873)): Request for "EARS principle" PRD conversion skills and `git worktree` integration, indicating strong enterprise/developer use cases.
*   **Monetization Queries** ([Issue #884](https://github.com/netease-youdao/LobsterAI/issues/884)): Questions about the "Refill Pack" suggest users are evaluating the cost-benefit of the new credit system vs. Bring Your Own Key (BYOK).

## 7. User Feedback Summary
*   **Pain Points**: The "0 tools" MCP error is the biggest frustration for new upgraders. Windows users specifically report issues with DOC generation and inconsistent UI behavior compared to Mac.
*   **Satisfaction**: The release of GitHub Copilot support ([PR #707](https://github.com/netease-youdao/LobsterAI/pull/707)) is a major positive signal for developers wanting "free-tier" model access.
*   **Sentiment**: Users appreciate the rapid feature rollout (Copilot, Sharing) but are currently paying the price in stability (Gateway restarts, config bugs).

## 8. Backlog Watch
*   **Issue #399** ([Link](https://github.com/netease-youdao/LobsterAI/issues/399)): "Claude run failed" error with Alibaba Cloud Bailian models has been open since March 13 without a definitive fix, affecting users relying on Chinese LLM providers.
*   **Issue #711** ([Link](https://github.com/netease-youdao/LobsterAI/issues/711)): Internal Netease registry dependency (`npm.nie.netease.com`) causing build failures for external contributors. This blocks community self-hosting/development.
*   **Issue #817** ([Link](https://github.com/netease-youdao/LobsterAI/issues/817)): Lack of pagination in session lists causing performance issues for power users with 100+ sessions.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest: 2026-03-26

## 1. Today's Overview
The TinyClaw project is currently demonstrating **high development velocity** focused on architectural refactoring and user experience improvements. While no new issues were reported today, the team successfully merged two significant pull requests that fundamentally change the runtime environment and authentication mechanisms. The project appears to be in a "consolidation and refinement" phase, moving away from external script dependencies toward a self-contained Node.js ecosystem. This shift suggests a strategic move toward better cross-platform compatibility (Docker support) and easier configuration for end-users.

## 2. Releases
**No new releases** were recorded in the last 24 hours. The recent merged PRs (#260, #261) represent significant structural changes that are likely staging for an upcoming minor or major version release.

## 3. Project Progress
Two major refactoring efforts were closed today, significantly advancing the project's stability and maintainability:

*   **Node.js Runtime Consolidation ([PR #260](https://github.com/TinyAGI/tinyagi/pull/260)):**
    *   **Status:** Closed (Merged)
    *   **Impact:** Eliminates dependency on shell scripts (bash), `tmux`, `jq`, and `curl`.
    *   **Advancement:** Centralizes process management into `packages/main/src/index.ts` and introduces a multi-stage Dockerfile. This is a critical step for containerization and simplifying the development environment.

*   **Authentication Standardization ([PR #261](https://github.com/TinyAGI/tinyagi/pull/261)):**
    *   **Status:** Closed (Merged)
    *   **Impact:** Unifies credential management across providers.
    *   **Advancement:** Renamed `auth_token` to `api_key` and added support for `CLAUDE_CODE_OAUTH_TOKEN`. This reduces configuration friction for users switching between LLM providers.

*   **Ongoing UI Work ([PR #249](https://github.com/TinyAGI/tinyagi/pull/249)):**
    *   **Status:** Open (Active)
    *   **Focus:** Major UI overhaul moving navigation from a sidebar to a top bar within the "office" layout.

## 4. Community Hot Topics
There is minimal community discussion volume in the last 24 hours (0 comments on recent PRs). However, the code changes indicate the following **developer priorities**:

*   **Self-Containment:** The move to pure Node.js in [PR #260](https://github.com/TinyAGI/tinyagi/pull/260) addresses an underlying need for better Windows compatibility and easier packaging.
*   **OAuth Flexibility:** The auth refactor in [PR #261](https://github.com/TinyAGI/tinyagi/pull/261) suggests a growing demand for using provider-specific OAuth flows (like Claude's) rather than static API keys.

## 5. Bugs & Stability
*   **No explicit bug reports** were filed via Issues in the last 24 hours.
*   **Potential Regression Risk:** [PR #260](https://github.com/TinyAGI/tinyagi/pull/260) completely replaces the shell-based process management. While this improves architecture, it introduces a high risk of regression for existing users who rely on the previous `lib/` scripts. Users pulling the latest `main` branch should verify their startup scripts.
*   **Configuration Drift:** [PR #261](https://github.com/TinyAGI/tinyagi/pull/261) renames `auth_token` to `api_key`. Users must update their environment variables or configuration files to prevent authentication failures.

## 6. Feature Requests & Roadmap Signals
*   **Office UI Overhaul:** The open [PR #249](https://github.com/TinyAGI/tinyagi/pull/249) signals a roadmap focus on the "Office" workspace interface. Making agent characters clickable and reorganizing the layout suggests a push toward a more interactive, dashboard-style user experience.
*   **Docker-First Deployment:** The inclusion of a multi-stage Dockerfile in [PR #260](https://github.com/TinyAGI/tinyagi/pull/260) signals that containerized deployment is becoming a first-class citizen for the project.

## 7. User Feedback Summary
*   **Pain Points (Implicit):** The refactoring in [PR #260](https://github.com/TinyAGI/tinyagi/pull/260) implies users previously struggled with dependencies like `tmux` and `jq` on non-Unix systems.
*   **Configuration Simplification:** [PR #261](https://github.com/TinyAGI/tinyagi/pull/261) reflects feedback that managing different credential names for different providers was cumbersome; the standardization alleviates this friction.

## 8. Backlog Watch
*   **[PR #249](https://github.com/TinyAGI/tinyagi/pull/249) (Refactor Office Layout):** This PR has been open for 3 days (since 2026-03-23). While active, it has not yet been merged. Given the recent merges on the backend/core side, this UI PR should be prioritized to complete the current development cycle. Maintainers should verify if this PR is blocked by the recent core refactors.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest (2026-03-26)

Here is the analysis of the Moltis project based on GitHub activity for the specified date.

## 1. Today's Overview
The Moltis project is demonstrating high architectural velocity, focusing heavily on codebase modernization and extensibility. Activity over the last 24 hours shows a shift toward optimizing the AI provider layer, with proposals to replace substantial portions of the existing OpenAI integration with a more compact library. Additionally, the merging of the Multi-Agent Architecture (PR #34) marks a significant milestone in the project's roadmap, transitioning from design to implementation. While no new version tags were cut, the volume of closed PRs suggests a stabilization phase preceding a potential release.

## 2. Releases
No new releases were recorded for 2026-03-26.

## 3. Project Progress
Significant advancements were merged into the codebase, moving key features from draft to completion:
*   **Multi-Agent Architecture (Merged):** PR [#34](https://github.com/moltis-org/moltis/pull/34) was closed (presumed merged), introducing the foundational design for Agent Presets and sub-agent spawning. This allows for reusable agent identities and complex multi-agent workflows.
*   **MCP Server Usability (Merged):** PR [#439](https://github.com/moltis-org/moltis/pull/439) successfully added custom display names for MCP servers, improving the user interface experience for tool management.
*   **Dependency Modernization (Open):** PR [#488](https://github.com/moltis-org/moltis/pull/488) is pending, proposing a bump of the `reqwest` library to v0.13. This is a critical dependency update required to unblock further provider optimizations.

## 4. Community Hot Topics
The community is actively discussing optimization strategies for LLM providers and local processing capabilities:
*   **Provider Optimization (High Impact):** PR [#487](https://github.com/moltis-org/moltis/pull/487) has sparked interest by proposing `openai-oxide` as an alternative provider. The proposal claims to replace **5,300+ lines** of existing code with just **888 lines**, promising major maintenance and performance benefits.
*   **Local Thinking Capabilities:** Issue [#490](https://github.com/moltis-org/moltis/issues/490) (Open) and the duplicate Issue [#489](https://github.com/moltis-org/moltis/issues/489) (Closed) highlight a strong user demand for "Local Thinking" features. Users are looking for ways to run cognitive processes or model inference locally to reduce latency and cloud costs.

## 5. Bugs & Stability
One significant integration bug was resolved:
*   **WhatsApp Integration Fixed:** Issue [#460](https://github.com/moltis-org/moltis/issues/460) regarding a non-functioning WhatsApp integration was closed. This bug had garnered 3 reactions, indicating it affected a notable segment of the user base relying on communication bridges.

## 6. Feature Requests & Roadmap Signals
*   **Local Inference/Processing:** The emergence of the "Local Thinking" request (Issue [#490](https://github.com/moltis-org/moltis/issues/490)) signals a roadmap shift toward hybrid cloud-local deployments.
*   **Architecture Refactoring:** The `openai-oxide` PR suggests a roadmap priority of reducing technical debt and binary size.
*   **Prediction:** The next version will likely focus on the "Multi-Agent" rollout and potentially integrating the slimmer `openai-oxide` provider once dependency conflicts are resolved.

## 7. User Feedback Summary
Users are expressing a clear desire for more control over infrastructure and costs. The "Local Thinking" requests indicate that power users want to offload processing from the cloud. The positive reception (👍 3) of the WhatsApp bug fix confirms that external channel integrations remain a critical use case for Moltis users acting as personal assistants.

## 8. Backlog Watch
*   **PR #487 (Open):** This PR is currently blocked by PR #488 (reqwest bump). It requires maintainer attention to merge the dependency update first to unlock this significant code reduction.
*   **Issue #490 (Open):** This feature request has active comments and addresses a strategic capability (local processing). It should be evaluated for inclusion in the upcoming roadmap.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest (2026-03-26)

## 1. Today's Overview
CoPaw is experiencing **very high activity** following the recent `v0.2.0` release, with nearly 100 issues and PRs updated in the last 24 hours. The project is in a rapid iteration phase, heavily focused on stabilizing the new **multi-agent architecture** and refining context management. While the release of `v0.2.0.post1` addressed some immediate documentation and parsing needs, the community is actively reporting regressions regarding CPU usage and configuration stability. The volume of open issues (28) suggests a significant load on maintainers to stabilize the current build.

## 2. Releases
### **v0.2.0.post1**
- **Type:** Patch Release
- **Key Changes:**
  - **Tool Parsing:** Enhanced capability to parse tool calls from "thinking" and text content blocks (`feat(tool)`).
  - **Documentation:** Updated release notes for the v0.2.0 milestone.
- **Migration Note:** This is a minor patch. Users facing tool parsing issues should prioritize upgrading.

## 3. Project Progress
**Merged/Closed PRs (29):**
- **Multi-Agent Stability:** Significant work on fixing model configuration isolation ([PR #2283](https://github.com/agentscope-ai/CoPaw/pull/2283)) to prevent settings from bleeding between different agents.
- **File Safety:** Fixed a critical issue where upgrading overwrote custom `agents.md` files ([PR #2285](https://github.com/agentscope-ai/CoPaw/pull/2285)).
- **Connectivity:** Fixed Telegram long-polling timeout loops ([PR #2280](https://github.com/agentscope-ai/CoPaw/pull/2280)).
- **Local Models:** Improved error handling for `llama.cpp` backends and parsing of Codex-style channel tags ([PR #265](https://github.com/agentscope-ai/CoPaw/pull/265), [PR #266](https://github.com/agentscope-ai/CoPaw/pull/266)).

**Open/Active PRs (20):**
- **Architecture:** Major refactor of context management v2.0 is underway ([PR #2300](https://github.com/agentscope-ai/CoPaw/pull/2300)), aiming to reduce CPU load and improve memory search.
- **New Channels:** Implementation of WeChat iLink Bot channel is in review ([PR #2260](https://github.com/agentscope-ai/CoPaw/pull/2260)).
- **Control:** A `/stop` soft interrupt command is being finalized for all channels ([PR #2067](https://github.com/agentscope-ai/CoPaw/pull/2067)).

## 4. Community Hot Topics
1.  **High CPU Usage at Idle ([Issue #2218](https://github.com/agentscope-ai/CoPaw/issues/2218))**
    *   **Topic:** Users report the main process pegging at 100% CPU even when idle, suspecting a busy-polling loop in the epoll implementation or a memory compression hook.
    *   **Analysis:** This is a critical regression affecting deployment costs and hardware usability.
2.  **Xiaoyi Channel Integration Issues ([Issue #1911](https://github.com/agentscope-ai/CoPaw/issues/1911))**
    *   **Topic:** Connectivity problems with Huawei's "Xiaoyi" platform where the bot returns "network busy" errors, and conversations fail to sync back to CoPaw.
    *   **Analysis:** Highlights the complexity of integrating with diverse, region-specific ecosystems.
3.  **Memory Efficiency ([Issue #2289](https://github.com/agentscope-ai/CoPaw/issues/2289))**
    *   **Topic:** Discussion on the degradation of performance as `MEMORY.md` grows. Users are requesting a more efficient retrieval mechanism than raw text files.

## 5. Bugs & Stability
-   **Critical: CPU Spin (v0.2.0)** - [Issue #2218](https://github.com/agentscope-ai/CoPaw/issues/2218)
    *   **Status:** Open. The process consumes 100% CPU continuously.
    *   **Note:** PR [#2300](https://github.com/agentscope-ai/CoPaw/pull/2300) mentions reducing file watcher time to lower CPU usage, which may be a partial fix.
-   **High: Feishu "Delayed Reply"** - [Issue #1345](https://github.com/agentscope-ai/CoPaw/issues/1345)
    *   **Status:** Open. The bot answers the *previous* question, ignoring the current one, suggesting a race condition in message queuing.
-   **High: Docker Web UI Failure after Upgrade** - [Issue #2254](https://github.com/agentscope-ai/CoPaw/issues/2254)
    *   **Status:** Open. Users upgrading to 0.2.0 find the web interface (port 8088) unresponsive despite the container running.
-   **Medium: Cron Task 503 Errors** - [Issue #2230](https://github.com/agentscope-ai/CoPaw/issues/2230)
    *   **Status:** Closed (likely addressed by PR [#2276](https://github.com/agentscope-ai/CoPaw/pull/2276) field modifications).
-   **Medium: Agent Configuration Overwrite** - [Issue #2236](https://github.com/agentscope-ai/CoPaw/issues/2236)
    *   **Status:** Addressed by [PR #2285](https://github.com/agentscope-ai/CoPaw/pull/2285).

## 6. Feature Requests & Roadmap Signals
-   **Granular Agent Configuration:** Strong demand for per-agent model selection (e.g., Coding Agent uses GPT-4, Creative Agent uses Claude) without needing multiple browser tabs ([Issue #2288](https://github.com/agentscope-ai/CoPaw/issues/2288), [Issue #2274](https://github.com/agentscope-ai/CoPaw/issues/2274)). *Prediction: High likelihood of inclusion in v0.3.0 given recent PRs on model scoping.*
-   **Advanced Memory Management:** Users want automatic summarization or vector-based retrieval for long-term memory to replace the growing `MEMORY.md` file ([Issue #2289](https://github.com/agentscope-ai/CoPaw/issues/2289)).
-   **Task Control:** Request for a "Stop/Cancel" button or command across all channels ([Issue #2302](https://github.com/agentscope-ai/CoPaw/issues/2302), [PR #2067](https://github.com/agentscope-ai/CoPaw/pull/2067)).
-   **Enterprise Integration:** Request to support custom private LLM gateways with non-standard headers ([Issue #2296](https://github.com/agentscope-ai/CoPaw/issues/2296)).

## 7. User Feedback Summary
Users are excited about the **multi-agent capabilities** but frustrated by **stability issues** in the v0.2.0 release.
-   **Pain Points:**
    -   **Upgrade Friction:** "One-click update" is requested because manual upgrades often fail or overwrite configs.
    -   **Resource Heavy:** The idle CPU usage is a major concern for self-hosters.
    -   **Channel Latency:** Feishu and DingTalk channels specifically have timing/sync issues (delayed replies, expired webhooks).
-   **Satisfaction:** Positive sentiment regarding the breadth of channel support (WeChat, QQ, Feishu) and the flexibility of local models, provided the stability issues are resolved.

## 8. Backlog Watch
-   **[Issue #430](https://github.com/agentscope-ai/CoPaw/issues/430):** "Help Wanted: Open Tasks" is active but long-running. It needs updating to reflect current v0.2.0 priorities.
-   **[Issue #1345](https://github.com/agentscope-ai/CoPaw/issues/1345):** The Feishu "Delayed Reply" bug has been open since March 12 with 12 comments but no definitive fix yet. This significantly impacts user experience on that channel.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-03-26

## 1. Today's Overview
ZeptoClaw demonstrates **exceptionally high development velocity** today, with a massive throughput of 22 merged PRs against only 11 updated issues. The project is in a phase of rapid feature maturation, specifically focusing on **browser automation capabilities** and **Telegram user experience enhancements**. The maintainers and contributors (primarily `stuartbowness` and `qhkm`) are actively merging complex feature stacks, indicating a healthy, collaborative sprint cycle. The ratio of closed to open items suggests a focus on stabilization and integration rather than accumulating backlog.

## 2. Releases
**No new official releases** were tagged in the last 24 hours. However, the sheer volume of merged code (22 PRs) suggests a significant version bump or release candidate is likely imminent once the current stack of "Agent Browser" and UX features stabilizes.

## 3. Project Progress
Today's progress is defined by two major "theme" pushes visible in the merged PRs:

*   **Browser Automation & Web Interaction (Major Feature):**
    *   **Merged:** The project successfully landed the `agent-browser` integration ([PR #436](https://github.com/qhkm/zeptoclaw/pull/436)), adding native web browsing capabilities via Lightpanda/Chrome.
    *   **Follow-ups:** Several refinements followed immediately, including fixing day-of-week hallucinations in timestamps ([PR #431](https://github.com/qhkm/zeptoclaw/pull/431)), improving output truncation accuracy ([PR #438](https://github.com/qhkm/zeptoclaw/pull/438)), and enabling "quiet" web search output ([PR #439](https://github.com/qhkm/zeptoclaw/pull/439)).
    *   **Status:** Open PRs ([#442](https://github.com/qhkm/zeptoclaw/pull/442), [#443](https://github.com/qhkm/zeptoclaw/pull/443), [#445](https://github.com/qhkm/zeptoclaw/pull/445)) suggest continued refinement of this stack.

*   **Telegram UX Overhaul:**
    *   **Threading:** Outbound messages now thread as replies ([PR #432](https://github.com/qhkm/zeptoclaw/pull/432)), fixing conversation flow.
    *   **Feedback:** Visual feedback via reactions (👀/✅) was implemented ([PR #430](https://github.com/qhkm/zeptoclaw/pull/430)).
    *   **Security:** HTML attribute escaping was hardened to prevent XSS ([PR #437](https://github.com/qhkm/zeptoclaw/pull/437)).

*   **Core Infrastructure:**
    *   **ACP Protocol:** The Agent Client Protocol implementation ([PR #356](https://github.com/qhkm/zeptoclaw/pull/356)) landed, enabling stdio and HTTP channels for external clients.
    *   **DevEx:** Linting scripts were fixed for Podman compatibility ([PR #426](https://github.com/qhkm/zeptoclaw/pull/426)), with smarter detection logic currently open in [PR #441](https://github.com/qhkm/zeptoclaw/pull/441).

## 4. Community Hot Topics
*   **Container Engine Detection ([Issue #435](https://github.com/qhkm/zeptoclaw/issues/435)):** A nuanced discussion is ongoing regarding how the project detects Docker vs. Podman. While #426 fixed the build failure, the solution (preferring Podman) surprised Docker users.
    *   *Underlying need:* Developers want zero-configuration tooling that "just works" regardless of their local container setup, without silently substituting runtimes.
*   **ACP HTTP Security ([Issue #434](https://github.com/qhkm/zeptoclaw/issues/434)):** High-priority discussion on hardening the new ACP channel against DNS rebinding and path traversal.
    *   *Underlying need:* As ZeptoClaw exposes HTTP endpoints, security constraints (CORS/Auth) are critical to prevent local network vulnerabilities.

## 5. Bugs & Stability
*   **[P1 Critical] Model Discoverability Regression ([Issue #416](https://github.com/qhkm/zeptoclaw/issues/416) - CLOSED):** Provider logic was breaking for OpenRouter-style `vendor/model` IDs.
    *   *Status:* Fixed in recent merges.
*   **[Bug] Telegram Photo Handling ([Issue #419](https://github.com/qhkm/zeptoclaw/issues/419) - CLOSED):** The bot silently dropped image messages.
    *   *Status:* Resolved.
*   **[Bug] AGENTS.md Hardcoded Slug ([Issue #367](https://github.com/qhkm/zeptoclaw/issues/367) - CLOSED):** Fork users were generating issues in the upstream repo.
    *   *Status:* Resolved.
*   **[Security] ACP CORS & Path Traversal ([PR #440](https://github.com/qhkm/zeptoclaw/pull/440) - MERGED):** Proactive security patch restricting CORS and validating `cwd` paths.

## 6. Feature Requests & Roadmap Signals
*   **Telegram Feedback Loops:** Requests for "typing indicators" ([Issue #331](https://github.com/qhkm/zeptoclaw/issues/331)) and "reaction indicators" ([Issue #428](https://github.com/qhkm/zeptoclaw/issues/428)) are driving significant commit activity. *Prediction:* Full-featured Telegram support is the immediate roadmap priority.
*   **Skill Discovery:** [Issue #285](https://github.com/qhkm/zeptoclaw/issues/285) proposes deep-scanning GitHub for `SKILL.md`. This signals a move toward making ZeptoClaw a "meta-agent" capable of dynamically learning from other repositories.
*   **Browser Tooling:** The open PRs ([#442](https://github.com/qhkm/zeptoclaw/pull/442)) indicate a shift toward multimodal agent capabilities (web browsing/searching) as a core differentiator.

## 7. User Feedback Summary
*   **Pain Point - Silent Failures:** Users reported frustration with the bot silently ignoring photos ([#419](https://github.com/qhkm/zeptoclaw/issues/419)) and messy formatting ([#331](https://github.com/qhkm/zeptoclaw/issues/331)). Fixes for these are now merged.
*   **Pain Point - Environment Conflicts:** The Podman/Docker linting issues ([#424](https://github.com/qhkm/zeptoclaw/issues/424)) highlight that users are operating in mixed container environments and expect the build system to handle runtime detection gracefully.
*   **Satisfaction:** The rapid closure of issues regarding threading and reactions suggests a highly responsive development team that values UX polish.

## 8. Backlog Watch
*   **Container Detection Logic ([PR #441](https://github.com/qhkm/zeptoclaw/pull/441)):** This open PR attempts to solve the "Docker vs. Podman" debate intelligently. It requires review to prevent further user confusion in dev environments.
*   **Documentation Standards ([PR #421](https://github.com/qhkm/zeptoclaw/pull/421)):** An open PR adding guidelines for Claude Code sessions. While low-priority technically, it is crucial for maintaining contribution quality as the project scales.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

No activity in the last 24 hours.

</details>