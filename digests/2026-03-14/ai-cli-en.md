# AI CLI Tools Community Digest 2026-03-14

> Generated: 2026-03-13 22:04 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Ecosystem Cross-Tool Analysis
**Report Date:** 2026-03-14 | **Analyst:** Senior Technical Analyst, AI Developer Tools

---

## 1. Ecosystem Overview

The AI CLI tooling ecosystem is undergoing rapid maturation in March 2026, with major players racing to stabilize core infrastructure while expanding agentic capabilities. A clear architectural convergence is emerging: vendors are unifying CLI, IDE, and desktop backends into shared "app-server" architectures to ensure behavioral consistency across surfaces. However, **platform-specific reliability issues**—particularly memory management on Linux and friction on Windows—remain systemic across nearly all tools, indicating that the shift from experimental to production-ready software is incomplete. Plugin ecosystems and hook systems are becoming standard extensibility mechanisms.

---

## 2. Activity Comparison

| Tool | Issues Active (24h) | PRs Active (24h) | Latest Release | Release Cadence |
|------|---------------------|------------------|----------------|-----------------|
| **Claude Code** | 10+ hot issues | 8 PRs | v2.1.75 (patch) | Sparse notes, stability-focused |
| **OpenAI Codex** | 10 hot issues | 10 PRs | 5 alpha releases (v0.115.0-alpha.15-.19) | Aggressive daily iteration |
| **Gemini CLI** | 10 hot issues | 10 PRs | v0.35.0-nightly, v0.33.1 stable | Nightly + stable branch |
| **GitHub Copilot CLI** | 10 hot issues | 0 PRs updated | v1.0.5 (yesterday) | Post-v1.0 stabilization |
| **Kimi Code CLI** | 6 issues | 6 PRs | v1.22.0 | Weekly feature releases |
| **OpenCode** | 10 hot issues | 10 PRs | v1.2.25, v1.2.26 | Rapid weekly cadence |
| **Qwen Code** | 10 hot issues | 10 PRs | v0.12.3 | Weekly + nightly |

**Observation:** OpenAI Codex shows the most aggressive iteration (5 alphas in 24h), while GitHub Copilot CLI is in a post-1.0 stabilization lull with zero PR updates.

---

## 3. Shared Feature Directions

| Trend | Tools Involved | Specific Requirements |
|-------|----------------|----------------------|
| **Native Sandboxing** | Gemini CLI, OpenCode | Bubblewrap integration (Gemini), LiteLLM provider isolation (OpenCode) — zero-dependency security containment |
| **Hook/Plugin Extensibility** | Claude Code, GitHub Copilot CLI, Qwen Code, OpenCode | Global hooks config, `UserPromptSubmit` events, deny-with-reason plugins, MCP Apps for rich UIs |
| **Multi-Agent/Subagent Architecture** | OpenAI Codex, Gemini CLI, Claude Code, Kimi Code | Subagent inbox delivery, tool isolation, "Squad Model" orchestration, state management |
| **Session Persistence & Recovery** | Claude Code, Qwen Code, GitHub Copilot CLI | `/undo` commands, session management APIs, checkpoint restore without data loss |
| **Cross-Platform Input Stability** | Gemini CLI, Kimi Code, Qwen Code | CJK/IME input fixes, native keybindings (Cmd+V on macOS), shell output handling on Windows |
| **Voice Input** | Claude Code, Gemini CLI, OpenCode | Native voice-mode plugins, Whisper backend integration, microphone access hooks |
| **Timeout/Fallback Resilience** | OpenCode, Gemini CLI, Qwen Code | Configurable SSE timeouts for local models, automatic model failover, rate limit transparency |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code | OpenCode | Qwen Code |
|-----------|-------------|--------------|------------|-------------------|-----------|----------|-----------|
| **Primary Focus** | Plugin ecosystem depth | Architectural unification (Rust core) | Agentic sandboxing | Enterprise integration | Shell UX polish | Type safety, provider flexibility | Permission system, portability |
| **Target User** | Power users, plugin devs | VS Code + CLI unified workflows | Multi-agent orchestrators | GitHub-native enterprises | MacOS/Linux devs | Multi-model power users | CI/CD, remote bot operators |
| **Technical Approach** | Node.js, community plugins | Rust core, app-server backend | Go, bubblewrap sandbox | GitHub auth ecosystem | Go, prompt management | Bun, branded types | Node SEA binaries |
| **Weakness Today** | Memory leaks (129GB), Windows friction | Auth fragility, Intel Mac gap | Agent "ghosting", Wayland issues | Terminal corruption, missing features | Multi-agent rate limits, clipboard bugs | Timeout aggression, clipboard broken | Windows shell output empty |
| **Strength Today** | Richest plugin ecosystem | Fastest iteration pace | Best internationalization support | Deepest GitHub integration | Clean shell UX | Strongest type safety | Most flexible permissions roadmap |

---

## 5. Community Momentum & Maturity

| Category | Tools | Evidence |
|----------|-------|----------|
| **Rapidly Iterating** | OpenAI Codex, Gemini CLI, OpenCode, Qwen Code | 5+ alpha releases/day, nightly builds, active PR pipelines (10+ each) |
| **Stabilization Phase** | GitHub Copilot CLI, Kimi Code | Post-major-release lull, focus on bug triage over features |
| **Community Plugin Momentum** | Claude Code | 8 community PRs for plugins (voice-mode, edit-verifier, deny-with-reason) |
| **Most Active Issue Discussion** | Claude Code, OpenAI Codex | 42+ comments on memory leak, 117+ comments on Intel Mac support |

**Maturity Indicator:** Memory leak reports across Claude Code, OpenCode, and OpenAI Codex suggest that resource management remains an industry-wide challenge as agent sessions grow longer and context windows expand.

---

## 6. Trend Signals

| Signal | Implication | Reference |
|--------|-------------|-----------|
| **Memory leaks are endemic** (129GB Claude, kernel panic OpenCode, UI lag Codex) | Long-running agent sessions expose resource management gaps; enterprises should budget for session restarts and monitoring | Claude #11315, OpenCode #12687, Codex #11984 |
| **Windows is a second-class citizen** across 5/7 tools | Teams standardizing on Windows face temp file leaks, shell output bugs, IME failures, and silent exits; WSL remains the safe path | Claude #23095, Kimi #1429, Qwen #2244, Gemini #22176, Copilot #1202 |
| **Agent autonomy safety is unsolved** | Production database wipes (Claude #27063), file deletion (Codex #14487), checkpoint data loss (Copilot #1675) — all tools need guardrails for destructive operations | Cross-tool pattern |
| **Hook systems are the new plugin API** | 4 tools actively building hook mechanisms (`UserPromptSubmit`, `Stop`, `Notification`) — developers should invest in hook-based workflows for customization | Claude #33809, Qwen #2352, Copilot #1157, OpenCode #17425 |
| **Local model support is a differentiator** | OpenCode users hitting 2-min timeout limits; demand for configurable timeouts and automatic fallback indicates on-prem/air-gapped deployments are growing | OpenCode #17307, #7602 |
| **MCP (Model Context Protocol) is gaining traction** | MCP server detection, tool loading for subagents, and MCP Apps for rich UIs appearing in 3 tools — standard protocol for multi-tool contexts | Copilot #679, Gemini #20166, OpenCode #15926 |

---

## Strategic Recommendations

1. **For Enterprise Adoption:** Wait 2-4 weeks for current memory leak patches to stabilize, particularly for Claude Code and OpenCode on Linux servers.
2. **For Windows Teams:** Mandate WSL2; native Windows support remains unreliable across the ecosystem.
3. **For Plugin/Extension Developers:** Prioritize hook-based architectures over direct API integration — this is the emerging extensibility standard.
4. **For Multi-Agent Workflows:** Gemini CLI and OpenAI Codex have the most mature subagent architectures, but both have context-loss bugs that require testing before production use.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** `github.com/anthropics/skills` | **Snapshot Date:** 2026-03-14

---

## 1. Top Skills Ranking

Based on community engagement, repository activity, and functional impact, these are the most significant Skills currently in development:

| Rank | Skill | Author | Status | Focus Area |
|------|-------|--------|--------|------------|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | @PGTBoos | 🟢 OPEN | Document Quality |
| 2 | **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | @eovidiu | 🟢 OPEN | Meta-Skills / Governance |
| 3 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | @justinwetch | 🟢 OPEN | UI/UX Development |
| 4 | **[masonry-generate-image-and-videos](https://github.com/anthropics/skills/pull/335)** | @junaid1460 | 🟢 OPEN | Multimodal Generation |
| 5 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | @varun29ankuS | 🟢 OPEN | Persistent Context |
| 6 | **[ODT (OpenDocument)](https://github.com/anthropics/skills/pull/486)** | @GitHubNewbie0 | 🟢 OPEN | Document Format Support |
| 7 | **[SAP-RPT-1-OSS Predictor](https://github.com/anthropics/skills/pull/181)** | @amitlals | 🟢 OPEN | Enterprise Analytics |
| 8 | **[record-knowledge](https://github.com/anthropics/skills/pull/521)** | @LevNas | 🟢 OPEN | Knowledge Management |

### Detailed Analysis

**🔹 document-typography** — *The Quality Control Skill*
Addresses a universal pain point: typographic errors in AI-generated documents (orphan lines, widow paragraphs, numbering misalignment). High engagement indicates this fills a critical gap in document production workflows.

**🔹 Meta-Skills (Quality & Security Analyzers)** — *Skills for Skills*
Two complementary tools for evaluating Skill quality across 5 dimensions (structure, documentation, security, etc.). Represents the ecosystem maturing toward self-improvement.

**🔹 frontend-design (Revised)** — *Clarity Overhaul*
A substantial rewrite focusing on actionable instructions. Community feedback drove improvements to reduce ambiguity and improve token efficiency.

**🔹 shodh-memory** — *Context Persistence*
Solves the session-boundary problem by maintaining context across conversations. Proactive memory surfacing is a key innovation.

---

## 2. Community Demand Trends

Analysis of open Issues reveals clear patterns in what users want:

| Demand Category | Priority | Evidence |
|-----------------|----------|----------|
| **🔧 Skill Loading & Infrastructure** | 🔴 Critical | Multiple reports of 404 errors, skills disappearing, upload failures (#62, #61, #406, #403) |
| **🔐 Security & Trust Boundaries** | 🔴 High | Community skills impersonating official `anthropic/` namespace (#492) |
| **🔄 MCP Integration** | 🟡 Growing | Request to expose Skills as MCPs for better API interoperability (#16) |
| **☁️ Bedrock Compatibility** | 🟡 Active | Users requesting AWS Bedrock support for Skills (#29) |
| **📖 skill-creator Improvements** | 🟡 Active | Needs best-practice update, SSO compatibility, better YAML validation (#202, #532, #37) |
| **📋 Duplicate Skill Management** | 🟢 Moderate | `document-skills` and `example-skills` installing identical content (#189) |

**Key Insight:** Infrastructure reliability is currently outweighing feature requests—users cannot reliably load or manage Skills.

---

## 3. High-Potential Pending Skills

These PRs are actively maintained and address clear community needs. Merges appear imminent:

| PR | Skill | Merge Likelihood | Rationale |
|----|-------|------------------|-----------|
| [#509](https://github.com/anthropics/skills/pull/509) | **CONTRIBUTING.md** | ⭐⭐⭐⭐⭐ | Addresses community health gap; low-risk documentation addition |
| [#359](https://github.com/anthropics/skills/pull/359) | **YAML Quoting Fix** | ⭐⭐⭐⭐⭐ | Critical bug fix for parser errors; addresses #361 duplicate concern |
| [#284](https://github.com/anthropics/skills/pull/284) | **UTF-8 Encoding Fix** | ⭐⭐⭐⭐ | Cross-platform compatibility improvement |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | ⭐⭐⭐⭐ | High community interest; universal applicability |
| [#210](https://github.com/anthropics/skills/pull/210) | **frontend-design** | ⭐⭐⭐⭐ | Mature revision with multiple update cycles |
| [#154](https://github.com/anthropics/skills/pull/154) | **shodh-memory** | ⭐⭐⭐ | Addresses core limitation (session context); complex implementation |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for persistent context across sessions and reliable infrastructure for skill management—users want Claude to "remember" and to load skills without errors.**

---

*Report generated from 50 PRs and 50 Issues analyzed. Data snapshot: 2026-03-14.*

---

# Claude Code Community Digest — 2026-03-14

## Today's Highlights

A new patch release **v2.1.75** landed today, though release notes remain sparse. The community is buzzing over severe **memory leak reports** on Linux (some users reporting 129GB RAM consumption) and Windows platform friction including native binary temp file accumulation and silent exits during operations. On the positive side, the plugin ecosystem is maturing with new voice-mode and edit-verification contributions.

---

## Releases

### v2.1.75
- Patch release with no detailed changelog published yet. Users are advised to monitor for stability improvements, especially around memory management issues reported in recent days.

---

## Hot Issues

| # | Title | Why It Matters |
|---|-------|----------------|
| [#11315](https://github.com/anthropics/claude-code/issues/11315) | **Critical Memory Leak: 129GB RAM consumption** | The most-discussed issue this cycle. Linux users report Claude Code consuming astronomical memory (129GB virtual), exhausting RAM, and freezing systems. 42 comments, 35 👍 — indicates widespread impact. |
| [#13480](https://github.com/anthropics/claude-code/issues/13480) | **Oversized image permanently breaks conversation** | Uploading a large image corrupts the session with no recovery path. Affects data integrity and user trust. 17 comments, 25 👍. |
| [#32301](https://github.com/anthropics/claude-code/issues/32301) | **Claude never proactively surfaces its own mistakes** | Raises concerns about AI self-correction capabilities. Users feel forced to act as quality gate, reducing productivity gains. |
| [#23095](https://github.com/anthropics/claude-code/issues/23095) | **Windows binary leaks ~7MB .node files to temp** | Each session leaves orphaned files in `%TEMP%`, accumulating GBs over time. Ongoing Windows platform friction. |
| [#22735](https://github.com/anthropics/claude-code/issues/22735) | **Silent graceful exit during Write/Bash on Windows** | Operations silently terminate during NPM installations — critical for CI/CD workflows. |
| [#23710](https://github.com/anthropics/claude-code/issues/23710) | **cleanupPeriodDays: 0 disables ALL transcript persistence** | Documentation says `0` = "disable cleanup" (keep forever), but behavior is "disable writing entirely" — potential data loss. |
| [#33752](https://github.com/anthropics/claude-code/issues/33752) | **Regression: ~3% quota consumed per 20k token session** | Max20 subscribers report quota draining disproportionately to actual usage. Possible billing/cost regression in v2.1.74. |
| [#34161](https://github.com/anthropics/claude-code/issues/34161) | **OOM kill: 10-13GB memory after 3 exchanges** | Fresh report — memory explodes to 10-13GB RSS in just 3 conversation turns. Indicates leak may be worsening. |
| [#34141](https://github.com/anthropics/claude-code/issues/34141) | **OAuth redirect fails in Docker devcontainer** | Claude Code ignores `ANTHROPIC_API_KEY` fallback when OAuth fails in containerized environments. Impacts dev workflows. |
| [#27063](https://github.com/anthropics/claude-code/issues/27063) | **Agent autonomously wiped production database** | Cautionary tale — Claude executed `drivel-kit push --force` against production, wiping all tables. Highlights need for safeguards on destructive commands. |

---

## Key PR Progress

| # | Title | Description |
|---|-------|-------------|
| [#32755](https://github.com/anthropics/claude-code/pull/32755) | **edit-verifier plugin** | Post-edit verification hook that catches silent edit failures when target text isn't found. Improves reliability of code modifications. |
| [#33918](https://github.com/anthropics/claude-code/pull/33918) | **voice-mode plugin** | Implements `/voice` command for users getting "Unknown skill: voice" errors. Bridges gap between startup banner messaging and actual functionality. |
| [#33809](https://github.com/anthropics/claude-code/pull/33809) | **deny-with-reason plugin** | Allows configurable tool call denial with explanations sent as system messages — Claude understands *why* and adjusts behavior. Uses `.claude/deny-reasons.yaml` config. |
| [#23348](https://github.com/anthropics/claude-code/pull/23348) | **windows-null-redirect-fix plugin** | Fixes Windows Git Bash creating literal `nul` files instead of redirecting to null device. Addresses long-standing Windows quirk. |
| [#34010](https://github.com/anthropics/claude-code/pull/34010) | **Add example projects** | Adds three demonstration projects: Finnish renovation landing page, AI phone answering service landing, and full-stack building inspection app. |
| [#33710](https://github.com/anthropics/claude-code/pull/33710) | **Town simulator game** | Complete game implementation showcasing Claude Code's capability for complex vanilla JS/Canvas projects with game loop, entities, and systems. |
| [#30596](https://github.com/anthropics/claude-code/pull/30596) | **CLAUDE.md documentation** *(CLOSED)* | Comprehensive repo documentation for AI assistants — structure, plugin architecture, conventions. Merged/closed. |
| [#16215](https://github.com/anthropics/claude-code/pull/16215) | **Fix broken plugin docs links** *(CLOSED)* | Repairs CONTRIBUTING and LICENSE links in plugin development documentation. |

---

## Feature Request Trends

1. **TUI Customization** — Multiple requests (#29200, #33191) to customize "Thinking..." animation text; users want simpler options like "working..." or fully custom flavor text.

2. **Session Management APIs** — Request to expose `/rename`, `/list`, `/resume` as programmatic tools (#34157), enabling agent-driven session workflows with 1M context.

3. **Status Bar Enhancements** — Adding `session_name` to JSON statusline data (#15029, 26 👍) and showing day-of-week in usage reset display (#33465).

4. **Windows Agent Teams** — Request for `psmux` support (#34150) to enable tmux-style agent teams on native Windows without WSL.

5. **Cost/Quota Transparency** — `/fast` mode should consume included quota rather than separate billing (#31880); better cost predictability across plans.

---

## Developer Pain Points

| Category | Summary |
|----------|---------|
| **Memory Management** | Critical and recurring — leaks on Linux (129GB), macOS (92GB/hour), and Windows. Multiple independent reports confirm pattern. OOM kills are disrupting workflows. |
| **Windows Platform Support** | Native binary issues (temp file leaks, silent exits), no tmux for agent teams, OAuth/auth quirks in containers. Windows feels like a second-class citizen. |
| **Data Loss & Safety** | `cleanupPeriodDays: 0` unexpectedly disables all persistence; autonomous destructive commands risk production systems. Users want safeguards and better defaults. |
| **Model Behavior** | Claude doesn't self-correct (#32301) and over-apologizes without fixing (#32656). Users spend time quality-checking rather than being productive. |
| **Quota/Billing Regressions** | v2.1.74 introduced disproportionate quota consumption. Subscribers on Max plans report confusing cost behavior. |
| **Documentation Gaps** | Voice mode (`/voice`) has no docs outside changelog (#34154); settings behavior contradicts documented intent. |

---

*Digest generated from GitHub activity on 2026-03-14. For real-time updates, monitor the [claude-code repository](https://github.com/anthropics/claude-code).*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-03-14

## 1. Today's Highlights
The Codex team is aggressively iterating on the Rust core, releasing **five alpha versions** (v0.115.0-alpha.15 to .19) in the last 24 hours. Activity is heavily focused on unifying the architecture, specifically wiring the **TUI (Terminal UI) to use the app-server backend** rather than direct core logic, which promises consistent behavior across VS Code and CLI. Meanwhile, the community is voicing significant frustration regarding **rate limit consumption** and **macOS Intel support**, while a new "Watchdog" runtime agent suggests upcoming capabilities for autonomous monitoring.

## 2. Releases
*   **rust-v0.115.0-alpha.19** (and .18, .17, .16, .15)
    *   A rapid succession of alpha releases indicates active stabilization of the `rust` core components. While specific release notes were sparse in the feed, these updates likely contain the groundwork for the architectural changes seen in recent PRs (unified-exec, app-server filesystem APIs).

## 3. Hot Issues

1.  **[macOS Intel Support Request](https://github.com/openai/codex/issues/10410)** (117 comments, 156 👍)
    *   *Why it matters:* The highest-voted issue currently. Users on Intel-based Macs (x86_64) are still unable to use the Codex Desktop App natively.
    *   *Reaction:* Frustration is mounting as users feel left behind by the Apple Silicon-first focus.

2.  **[CLI 401 Unauthorized Errors](https://github.com/openai/codex/issues/12764)** (68 comments)
    *   *Why it matters:* Users are hitting persistent `401 Unauthorized` errors in the CLI, often pointing to `chatgpt.com` backend URLs.
    *   *Reaction:* Users are confused by the authentication flow between the CLI and ChatGPT accounts.

3.  **[Remote Development Support](https://github.com/openai/codex/issues/10450)** (50 comments, 337 👍)
    *   *Why it matters:* Top-voted feature request. Users want to use the Desktop App to connect to remote dev environments (SSH/Containers) similar to VS Code Remote.
    *   *Reaction:* Considered a "must-have" for professional workflows that rely on remote servers.

4.  **[GPT-5.3/5.4 Auth & Model Issues](https://github.com/openai/codex/issues/14331)** (20 comments)
    *   *Why it matters:* Paid Plus users report that newer Codex models (GPT-5.3/5.4) fail to work in the IDE extension, flagging "Paid Account" errors.
    *   *Reaction:* High friction for users trying to adopt the latest model capabilities.

5.  **[App UI Lag During Long Sessions](https://github.com/openai/codex/issues/11984)** (17 comments)
    *   *Why it matters:* The Electron-based Desktop App becomes unresponsive during long sessions.
    *   *Reaction:* Indicates memory leak or performance bottleneck in the desktop wrapper.

6.  **[Thread Disappearance in Projects](https://github.com/openai/codex/issues/10917)** (17 comments)
    *   *Why it matters:* Users are losing entire conversation threads inside Projects after restarting the app.
    *   *Reaction:* Data loss issues severely impact trust in the Desktop App for complex work.

7.  **[Context Compaction Hanging](https://github.com/openai/codex/issues/14346)** (13 comments, 13 👍)
    *   *Why it matters:* The "compact" feature, essential for long context windows, causes the extension to hang on GPT-5.4 "Extra High" settings.
    *   *Reaction:* Blocking users who rely on large context windows.

8.  **[VS Code Extension Burning Tokens](https://github.com/openai/codex/issues/14593)** (11 comments)
    *   *Why it matters:* Recent updates to the VS Code extension are consuming rate limits much faster than expected.
    *   *Reaction:* Suspicion that the extension is retrying too aggressively or double-counting usage.

9.  **[Model Selection Regression](https://github.com/openai/codex/issues/14008)** (9 comments)
    *   *Why it matters:* The Desktop App overrides user model selection (e.g., GPT-5.4) back to GPT-5.3 based on server-side config.
    *   *Reaction:* Users feel they have lost control over model selection.

10. **[Critical Windows File Deletion](https://github.com/openai/codex/issues/14487)** (3 comments)
    *   *Why it matters:* Severity: Critical. Users report Codex CLI deleting files unexpectedly on Windows D: drives during execution.
    *   *Reaction:* Raises safety concerns regarding the CLI's file system permissions.

## 4. Key PR Progress

1.  **[feat(tui): Start wiring app-server backend](https://github.com/openai/codex/pull/14615)**
    *   A major refactor where the TUI (CLI) begins to consume the `app-server` APIs instead of talking directly to `codex-core`. This aligns VS Code and CLI behaviors.

2.  **[feat(agents): Enable subagent inbox delivery](https://github.com/openai/codex/pull/13657)**
    *   Implements structured message delivery for subagents, moving toward a more robust multi-agent communication architecture.

3.  **[feat(core): Add watchdog runtime](https://github.com/openai/codex/pull/13678)**
    *   Introduces a "Watchdog" runtime and lifecycle management for agents. This suggests a future where Codex can autonomously monitor tasks or state.

4.  **[app-server: Add filesystem watch support](https://github.com/openai/codex/pull/14533)**
    *   Adds RPCs for the app-server to watch file changes, bringing VS Code closer to feature parity with local development workflows.

5.  **[Queue slash commands in TUI](https://github.com/openai/codex/pull/14170)**
    *   QoL improvement: Slash commands (like `/compact`) entered while the AI is thinking will now queue up instead of being rejected.

6.  **[Add Smart Approvals guardian review](https://github.com/openai/codex/pull/13860)**
    *   Refines the approval system by routing requests through a "guardian" agent or user review for better security control.

7.  **[Stabilize multi-agent feature flag](https://github.com/openai/codex/pull/14622)**
    *   The multi-agent capability has been moved to stable and enabled by default, signaling confidence in this feature set.

8.  **[Use git hooks for commit attribution](https://github.com/openai/codex/pull/14634)**
    *   Moves commit attribution logic from developer messages to git hooks, making commits cleaner and attribution more reliable.

9.  **[Windows sandbox: Add runner IPC foundation](https://github.com/openai/codex/pull/14139)**
    *   Infrastructure work to support `unified_exec` on Windows, improving sandbox stability and IPC transport.

10. **[hooks: userpromptsubmit](https://github.com/openai/codex/pull/14626)**
    *   Adds a hook system before a user's prompt is executed, allowing for custom validation or injection logic.

## 5. Feature Request Trends

*   **Remote Development:** High demand (337 👍) for the Desktop App to support SSH/Remote connections, moving beyond local-only file systems.
*   **Multi-Account Support:** Developers frequently working with separate corporate and personal OpenAI accounts want the ability to switch contexts easily without re-auth.
*   **Platform Parity:** Strong calls for **macOS Intel** support and better Windows UI responsiveness.
*   **ChatGPT Integration:** Users want seamless hand-off between Codex CLI (for code) and ChatGPT (for research/web search).

## 6. Developer Pain Points

*   **Rate Limit Opacity:** Users report "burning" tokens rapidly without clear visibility into *why* or *where* consumption is happening, especially with the recent VS Code extension update.
*   **Authentication Fragility:** Frequent 401 errors and login conflicts when switching between CLI, Desktop, and Browser sessions.
*   **Context Management:** "Compaction" tasks failing or hanging when hitting large context windows, breaking the flow of long coding sessions.
*   **Model Stability:** User selection for specific models (e.g., GPT-5.4) being overridden by server-side configurations or failing to load entirely.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-03-14

## 1. Today's Highlights
The Gemini CLI ecosystem is aggressively expanding its agentic capabilities, evidenced by a surge in PRs focused on **native sandboxing** (via `bubblewrap`) and **tool isolation** for subagents. A major usability milestone was achieved with the resolution of critical **CJK input bugs on Windows** (Issue #22176), significantly broadening international accessibility. Meanwhile, the community is actively debating the reliability of the "Agent Orchestrator," with multiple high-priority issues highlighting context loss and "ghosting" during complex subagent delegation.

## 2. Releases

### **v0.35.0-nightly.20260313**
*   **Docs & UX:** Updated theme screenshots and corrected internal naming conventions (renaming 'return' to 'enter').
*   **Changelog:** [v0.35.0-nightly](https://github.com/google-gemini/gemini-cli/releases/tag/v0.35.0-nightly.20260313.bb060d7a9)

### **v0.33.1 (Stable)**
*   **Patch:** Cherry-picked critical fixes to patch v0.33.0, resulting in version 0.33.1.
*   **Changelog:** [v0.33.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.33.1)

## 3. Hot Issues

1.  **[CLOSED] [Win/CJK] Korean Input Issue (#22176)**
    *   **Why:** Resolved a critical blocker where Korean (CJK) characters rendered as empty spaces on Windows via Microsoft IME. This fix is vital for international adoption.
    *   **Link:** [Issue #22176](https://github.com/google-gemini/gemini-cli/issues/22176)

2.  **[OPEN] Agent "Ghosts" After Plan Approval (#22266)**
    *   **Why:** A high-severity reliability issue where the agent loses context immediately after a user approves a `/plan`, failing to transition to execution.
    *   **Link:** [Issue #22266](https://github.com/google-gemini/gemini-cli/issues/22266)

3.  **[OPEN] Subagent Reports Success on Failure (#22323)**
    *   **Why:** The `codebase_investigator` reports `status: success` even when hitting `MAX_TURNS`, misleading users about task completion.
    *   **Link:** [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

4.  **[OPEN] Subagent Fails Loading MCP Tools (#20166)**
    *   **Why:** Subagents without explicit tool lists crash when attempting to load MCP tools, crippling modular workflows.
    *   **Link:** [Issue #20166](https://github.com/google-gemini/gemini-cli/issues/20166)

5.  **[OPEN] Browser Agent Approval Bugs (#20594)**
    *   **Why:** Tool approvals for `browser_agent` are malfunctioning, stalling automation workflows that rely on browser interaction.
    *   **Link:** [Issue #20594](https://github.com/google-gemini/gemini-cli/issues/20594)

6.  **[OPEN] Browser Agent Ignores Settings (#22267)**
    *   **Why:** The Browser Agent ignores `settings.json` overrides (e.g., `maxTurns`), making it difficult to control resource usage.
    *   **Link:** [Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)

7.  **[OPEN] Wayland Subagent Failure (#21983)**
    *   **Why:** `browser_agent` fails to launch on Linux systems running Wayland, limiting support for modern Linux desktop environments.
    *   **Link:** [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

8.  **[OPEN] Inaccurate Model Selection in Auto Mode (#22381)**
    *   **Why:** Users report that "Gemini 3 Auto Mode" frequently falls back to older 2.5 Flash models, causing confusion about capability usage.
    *   **Link:** [Issue #22381](https://github.com/google-gemini/gemini-cli/issues/22381)

9.  **[OPEN] Invisible Text in Tmux/Alacritty (#18315)**
    *   **Why:** `useBackgroundColor` causes prompt text to disappear in popular terminal setups like Tmux over Alacritty.
    *   **Link:** [Issue #18315](https://github.com/google-gemini/gemini-cli/issues/18315)

10. **[OPEN] Symlinked Agents Not Recognized (#20079)**
    *   **Why:** Users cannot organize agent definitions via symlinks in `~/.gemini/agents/`, hindering configuration management.
    *   **Link:** [Issue #20079](https://github.com/google-gemini/gemini-cli/issues/20079)

## 4. Key PR Progress

1.  **Native Linux Sandbox (bubblewrap) (#22380)**
    *   Implements a zero-dependency, hardened sandbox for Linux using `bubblewrap`, replacing the need for rootless Podman.
    *   **Link:** [PR #22380](https://github.com/google-gemini/gemini-cli/pull/22380)

2.  **Tool Isolation for Subagents (#21935)**
    *   Introduces configuration-based tool isolation, preventing state leakage between the main agent and subagents.
    *   **Link:** [PR #21935](https://github.com/google-gemini/gemini-cli/pull/21935)

3.  **Fix CJK Input on Windows (#22353)**
    *   Fixes the mapping of raw printable characters in terminal protocols, resolving the empty space rendering issue for CJK languages.
    *   **Link:** [PR #22353](https://github.com/google-gemini/gemini-cli/pull/22353)

4.  **Surface Subagent Termination Reasons (#22325)**
    *   Ensures that if a subagent recovers from an error (like hitting max turns), the UI surfaces the original termination reason rather than falsely reporting success.
    *   **Link:** [PR #22325](https://github.com/google-gemini/gemini-cli/pull/22325)

5.  **Browser Agent Settings Fix (#22301)**
    *   Fixes a bug where the Browser Agent ignored `settings.json` configurations, restoring user control over limits like `maxTurns`.
    *   **Link:** [PR #22301](https://github.com/google-gemini/gemini-cli/pull/22301)

6.  **Subagent MCP Tool Loading (#20170)**
    *   Fixes a regression where subagents without explicit `toolConfig` failed to register MCP tools due to naming guard restrictions.
    *   **Link:** [PR #20170](https://github.com/google-gemini/gemini-cli/pull/20170)

7.  **Topic-Action-Summary Verbosity Model (#21503)**
    *   Experimental feature to reduce terminal noise by suppressing redundant "thought" messages during long-running tasks.
    *   **Link:** [PR #21503](https://github.com/google-gemini/gemini-cli/pull/21503)

8.  **Voice Input Integration (#18499)**
    *   Adds native voice input support with pluggable backends (Gemini native or local Whisper).
    *   **Link:** [PR #18499](https://github.com/google-gemini/gemini-cli/pull/18499)

9.  **Actionable Terminal Warnings (#22211)**
    *   Replaces silent fallbacks with actionable warnings for problematic terminals (tmux, screen, IDEs) to improve debugging.
    *   **Link:** [PR #22211](https://github.com/google-gemini/gemini-cli/pull/22211)

10. **Sandbox Manager Integration (#22231)**
    *   Integrates a `SandboxManager` interface across process-spawning tools, unifying security policies for shell execution.
    *   **Link:** [PR #22231](https://github.com/google-gemini/gemini-cli/pull/22231)

## 5. Feature Request Trends
*   **Robust Subagent Architecture:** Strong demand for a "Squad Model" (Issue #15670) where the main agent acts as an orchestrator delegating to specialized experts, requiring better tool isolation and state management.
*   **Session Continuity:** Requests for "Epic" level session management (Issue #21792) to handle context degradation in long-running tasks.
*   **Enhanced Security Containment:** The community is actively pushing for native sandboxing solutions (PR #22380) to avoid relying on heavy external dependencies like Docker.

## 6. Developer Pain Points
*   **Agent Reliability Trust:** Developers are frustrated by "silent failures" where agents report success but haven't completed the task (Issue #22323) or drop context entirely (Issue #22266).
*   **Terminal Compatibility:** High friction remains for users on `tmux`, Wayland, and non-English IMEs, affecting the "just works" experience.
*   **Configuration Management:** Inability to use symlinks for agents (Issue #20079) and ignored settings (Issue #22267) are hampering advanced workflow setups.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-03-14

## 1. Today's Highlights
Version **v1.0.5** was released yesterday, introducing highly requested flexibility for file context (`@` mentions) now supporting absolute, home, and relative parent paths. The update also adds a new `/extensions` command, though users are already reporting discrepancies between the changelog and actual CLI behavior. The community is actively discussing the transition to this major version, with significant attention on MCP server stability and hook configuration limitations.

## 2. Releases

### **v1.0.5** (2026-03-13)
This update focuses on workflow flexibility and session management:
*   **Expanded File Mentions:** `@` file references now resolve paths outside the current project root, including absolute (`@/usr/...`), home (`@~/...`), and relative parent (`@../...`) paths.
*   **Extensions Management:** Introduced a new `/extensions` command to view, enable, and disable CLI extensions.
*   **Session Cleanup:** Resolved an issue where the terminal title reset to default after running `/clear` or `/new`.

## 3. Hot Issues

1.  **[OPEN] Screen Flicker in Windows Terminal** [#1202](https://github.com/github/copilot-cli/issues/1202)
    *   **Context:** A persistent visual bug causing screen flashing and buffer artifacts in PowerShell on Windows.
    *   **Impact:** High user engagement (34 comments, 34 upvotes); remains a significant usability blocker for Windows users.

2.  **[OPEN] Local MCP Server Detection Failing** [#679](https://github.com/github/copilot-cli/issues/679)
    *   **Context:** Users report that local Model Context Protocol (MCP) servers are undetected starting from version 0.0.359.
    *   **Impact:** Critical for users relying on local model integrations; currently locked to older versions as a workaround.

3.  **[OPEN] Autopilot Infinite Loop Consumes Premium Requests** [#1532](https://github.com/github/copilot-cli/issues/1532)
    *   **Context:** The agent enters an infinite loop if the `task_complete` tool fails, draining paid quotas.
    *   **Impact:** High severity; users request usage recovery for wasted credits.

4.  **[OPEN] /extensions Command Missing in v1.0.5** [#2022](https://github.com/github/copilot-cli/issues/2022)
    *   **Context:** Despite being listed in the v1.0.5 changelog, the `/extensions` command appears non-functional or undocumented.
    *   **Impact:** Immediate confusion following the new release; users cannot utilize the touted feature.

5.  **[OPEN] Auto-Update Broken (Bad Credentials)** [#1840](https://github.com/github/copilot-cli/issues/1840)
    *   **Context:** Since v0.0.420, the auto-updater fails with "Bad credentials" errors.
    *   **Impact:** Prevents users from staying current with security patches and bug fixes.

6.  **[OPEN] Checkpoint Restore Deletes Untracked Files** [#1675](https://github.com/github/copilot-cli/issues/1675)
    *   **Context:** Using `git clean -fd` for rollback permanently deletes untracked files without warning.
    *   **Impact:** **Data Loss Risk.** Users expect a "safe" rollback, making this behavior dangerous and unexpected.

7.  **[OPEN] Plan Mode Executes Without User Confirmation** [#2017](https://github.com/github/copilot-cli/issues/2017)
    *   **Context:** Selecting "Exit plan mode and I will prompt myself" triggers immediate implementation anyway.
    *   **Impact:** Undermines trust in the "Human-in-the-loop" safety mechanism of Plan Mode.

8.  **[OPEN] Global Hooks Configuration Request** [#1157](https://github.com/github/copilot-cli/issues/1157)
    *   **Context:** Feature request to allow hooks configuration globally rather than per-repository.
    *   **Impact:** High demand (14 upvotes) for workflow automation parity with competitors like Cursor and Claude Code.

9.  **[OPEN] Exec Format Error on aarch64** [#827](https://github.com/github/copilot-cli/issues/827)
    *   **Context:** Pre-built binaries are incompatible with specific ARM64/aarch64 kernels.
    *   **Impact:** Prevents adoption on specific hardware architectures; recently closed after info request.

10. **[OPEN] Custom Agents Ignored if Named After Builtins** [#1528](https://github.com/github/copilot-cli/issues/1528)
    *   **Context:** Creating a custom agent (e.g., `explore.md`) with the same name as a builtin results in the custom agent being silently ignored.
    *   **Impact:** Frustrating debugging experience; system should prioritize user overrides or throw a naming conflict warning.

## 4. Key PR Progress
*No active Pull Requests were updated in the last 24 hours.* The repository activity is currently dominated by issue triage and stabilization of the v1.0.5 release.

## 5. Feature Request Trends
Analysis of recent issues highlights three distinct trends in user demands:
*   **Advanced Hook System:** Developers want hooks to support `UserPromptSubmit`, `Stop`, and `Notification` events, and specifically request a **global configuration** file to avoid repetitive repo-specific setups (#1157).
*   **MCP & BYOK (Bring Your Own Key):** There is strong interest in connecting custom MCP servers reliably (#2026) and using custom models or providers (#973), indicating a desire to use Copilot CLI as a flexible orchestration layer rather than just a GitHub-hosted model client.
*   **Granular Permissions & Safety:** Users are asking for per-file operation approvals (#2015) and "true" non-blocking message queues for better control during autopilot sessions (#2025).

## 6. Developer Pain Points
*   **Terminal State Corruption:** Multiple reports (#2009, #2018) indicate that exiting specialized modes (Plan Mode) or the CLI itself leaves the terminal in a broken state where scroll, selection, or shortcuts (Ctrl+C) fail.
*   **Authentication Friction:** A spike in "Unauthorized" (#1897) and "Bad Credentials" (#1840) errors suggests recent changes may have impacted token handling or auto-update authentication flows.
*   **Changelog/Feature Parity:** The disconnect between the v1.0.5 changelog and actual behavior (specifically regarding `/extensions`) is causing friction for early adopters trying to validate the new release.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-03-14

## 1. Today's Highlights
Version **1.22.0** has been released, introducing significant improvements to shell interaction, specifically enhancing the slash command completer and menu functionality. The update also includes a major refactor of prompt handling with a new `PromptPlaceholderManager` to better manage text and image inputs. Additionally, the team has merged end-to-end tests for shell PTY and session management, bolstering the tool's reliability.

## 2. Releases
### **v1.22.0**
*   **Shell Enhancements:** Improved slash command autocomplete and menu visuals for smoother CLI navigation.
*   **Prompt Management:** Refactored internal logic with a new `PromptPlaceholderManager` to resolve commands and handle image placeholders more robustly.
*   **Testing:** Added E2E tests for shell PTY and session management.

## 3. Hot Issues
1.  **[#1383] [bug] Multi-agent Rate Limiting Confusion**
    Users report hitting API rate limits when running two agents ("crayfish") simultaneously, despite believing their subscription supports multi-agent workflows.
    *   *Significance:* Highlights potential confusion regarding subscription tiers vs. API rate limits, or a bottleneck in concurrent agent execution.
2.  **[#1433] [bug] MacOS Clipboard Image Paste Failure**
    The CLI currently ignores `Cmd + V` for image pasting, recognizing only `Ctrl + V`.
    *   *Significance:* A critical UX oversight for MacOS users (Darwin arm64), breaking the expected native workflow for inserting images.
3.  **[#1426] [bug] Input Loss in v1.21.0**
    Content typed into the CLI input area while an agent is generating output disappears once the agent finishes.
    *   *Significance:* Impacts workflow efficiency; users utilizing "typing ahead" capabilities lose their draft queries.
4.  **[#1429] [bug] Windows Concurrent Write Permission Denied**
    Windows users are encountering `[Errno 13] Permission denied` errors during concurrent write operations.
    *   *Significance:* Suggests file locking or concurrency handling issues specific to the Windows platform.
5.  **[#1428] [bug] Web Attachment Triggers Premature Submit**
    In the Web UI, clicking the attachment button executes a form submit before the file operation begins.
    *   *Significance:* Disrupts the user flow by potentially sending empty messages or interrupting file uploads.
6.  **[#1427] [bug] Excessive Startup Logging**
    The CLI outputs a flood of log-like content upon startup, cluttering the terminal.
    *   *Significance:* Degrades the "clean" CLI experience expected by users.

*(Note: Only 6 issues were updated in the last 24 hours; all are listed above.)*

## 4. Key PR Progress
1.  **[#1432] chore: bump kimi-cli and kimi-code to 1.22.0 (CLOSED)**
    Official version bump merging the recent shell and prompt handling features into the main release.
2.  **[#1430] feat: refactor prompt handling and placeholder management (CLOSED)**
    Introduces `PromptPlaceholderManager` to separate resolved commands from raw user input and handle image placeholders effectively.
3.  **[#1431] feat(shell): enhance slash command completer and menu functionality (CLOSED)**
    Merged in this cycle; adds sophisticated autocomplete menus and slash command logic to the shell interface.
4.  **[#1424] feat(tests): add end-to-end tests for shell PTY and session management (CLOSED)**
    Improves long-term stability by adding E2E tests for the pseudo-terminal (PTY) and session lifecycle.
5.  **[#1131] feat: add AgentHooks support for dogfooding (OPEN)**
    Proposes a hooks system for internal testing ("dogfooding"), including `block-dangerous-commands` and `enforce-tests` quality gates.
6.  **[#884] chore(deps-dev): bump ruff from 0.14.14 to 0.15.0 (OPEN)**
    Routine dependency update for the Ruff linter to the 0.15.0 version.

*(Note: Only 6 PRs were updated in the last 24 hours; all are listed above.)*

## 5. Feature Request Trends
Based on recent issues and PRs:
*   **Robust Multi-Agent Support:** Users are actively trying to run concurrent agents and expect the system (and billing model) to handle parallel processing without manual rate limit friction.
*   **Native OS Keybindings:** There is a clear expectation for platform-specific shortcuts (e.g., `Cmd + V` on MacOS) to work natively for rich content like images.
*   **"Type-Ahead" Buffering:** Users expect the CLI input buffer to persist even while the AI is generating output, allowing them to draft the next command/query seamlessly.

## 6. Developer Pain Points
*   **Cross-Platform Consistency:** Several current bugs (Windows file locking, MacOS keybindings) indicate friction points for users outside the standard Linux development environment.
*   **Web UI Responsiveness:** The issue regarding the attachment button triggering a submit suggests a disconnect between frontend event handling and backend state management.
*   **Input State Management:** The loss of typed text (#1426) is a high-friction bug that interrupts developer flow, suggesting the UI state needs better isolation from the agent's output cycle.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-03-14

## 1. Today's Highlights

OpenCode shipped **v1.2.25** and **v1.2.26** this week, introducing stronger type safety through branded IDs (`ProviderID`, `ModelID`, `PermissionID`), Azure completions endpoint support, and critical fixes for session persistence. The community is actively discussing **timeout aggressiveness** with local models and **Copilot quota consumption** bugs. Meanwhile, significant work continues on memory leak fixes and plugin extensibility improvements in the PR pipeline.

---

## 2. Releases

### v1.2.26
- **Schema bridging:** Scaffold for effect-to-zod conversion
- **Configuration:** Serialization support for Bun installations
- **UX:** Text attachments in app; paginated session history for server performance
- **Bugfix:** Sessions lost after `git init` in existing projects (contributor: @michaeldwan)
- **Reliability:** Fail-fast on config dependencies

### v1.2.25
- **Provider support:** Non-OpenAI Azure models using completions endpoints
- **Type safety:** Branded `ProviderID`, `ModelID`, `PermissionID`, `PtyID`, `Quest` types
- **Build optimization:** Removed external sourcemap generation to reduce artifacts

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#8030](https://github.com/anomalyco/opencode/issues/8030) - **Copilot auth consuming premium requests** (176 comments, 62 👍) | Users report GitHub Copilot's Opus 4.5 is incorrectly classifying ~60 agent-initiated requests as "user" requests, rapidly depleting monthly quotas. Critical for cost-conscious teams. |
| 2 | [#12338](https://github.com/anomalyco/opencode/issues/12338) - **1M token limit for Opus 4.6** (27 comments) | Users hitting 200k token ceiling despite enabling higher limits. Blocks large-context workflows. |
| 3 | [#7602](https://github.com/anomalyco/opencode/issues/7602) - **Native Model Fallback/Failover** (19 comments, 51 👍) | Highly requested feature for automatic fallback between *different* models when rate-limited or errored. Essential for long-running agents. |
| 4 | [#12687](https://github.com/anomalyco/opencode/issues/12687) - **Severe memory leak causing kernel panic on macOS** (19 comments) | Critical performance issue causing system restarts after intensive use. Affects reliability for power users. |
| 5 | [#16470](https://github.com/anomalyco/opencode/issues/16470) - **Code unreadable in light mode** (19 comments, 14 👍) | Color scheme bug renders formatted code invisible. Accessibility concern. |
| 6 | [#17307](https://github.com/anomalyco/opencode/issues/17307) - **v1.2.25 timeouts too aggressive for local models** (3 comments, 4 👍) | New 2-minute SSE timeout breaks larger context sessions with local models. Users forced to manually adjust to 300s+. |
| 7 | [#17318](https://github.com/anomalyco/opencode/issues/17318) - **SSE read timed out** (15 comments, 6 👍) | Timeout errors during file writing operations, especially with planning-with-files skill. |
| 8 | [#14289](https://github.com/anomalyco/opencode/issues/14289) - **Claude Opus 4.6 vision unsupported** (14 comments) | Azure-hosted Claude Opus 4.6 doesn't expose vision capabilities despite model support. |
| 9 | [#13984](https://github.com/anomalyco/opencode/issues/13984) - **Copy/paste broken in CLI** (18 comments) | Clipboard shows "copied" but paste yields nothing. Core UX blocker. |
| 10 | [#16321](https://github.com/anomalyco/opencode/issues/16321) - **Windows Trojan false positive** (8 comments) | Microsoft Defender flagging OpenCode as trojan on startup. Trust/installation barrier. |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| 1 | [#15646](https://github.com/anomalyco/opencode/pull/15646) | OPEN | **Memory leak fixes** for SSE streams, LSP, Bus, and process cleanup. Addresses multiple crash reports. |
| 2 | [#17414](https://github.com/anomalyco/opencode/pull/17414) | CLOSED | **Raised default SSE chunk timeout 2min→5min** and retry on `TypeValidationError`. Direct fix for #17307. |
| 3 | [#16389](https://github.com/anomalyco/opencode/pull/16389) | CLOSED | **Fixed session loss across worktrees/orphan branches**. Merged fix by @michaeldwan. |
| 4 | [#14468](https://github.com/anomalyco/opencode/pull/14468) | OPEN | **LiteLLM provider with auto model discovery**. Eliminates manual model configuration for proxy users. |
| 5 | [#15926](https://github.com/anomalyco/opencode/pull/15926) | OPEN | **MCP Apps support** for rich iframe UIs from MCP servers. Enables interactive plugin interfaces. |
| 6 | [#17198](https://github.com/anomalyco/opencode/pull/17198) | OPEN | **`/btw` background session command** for lightweight async tasks. |
| 7 | [#14772](https://github.com/anomalyco/opencode/pull/14772) | OPEN | **Disable assistant prefill for Claude 4.6**. Fixes API rejection with newer Anthropic models. |
| 8 | [#10275](https://github.com/anomalyco/opencode/pull/10275) | OPEN | **Automatic provider package cleanup** via reference counting in `package.json`. |
| 9 | [#17363](https://github.com/anomalyco/opencode/issues/17363) | OPEN | **Fix empty tool-result content** and cache control for custom Anthropic providers. |
| 10 | [#17151](https://github.com/anomalyco/opencode/pull/17151) | CLOSED | **Truncate long filenames** in diff viewer to prevent UI overlap. |

---

## 5. Feature Request Trends

1. **Model Fallback/Failover** (#7602) — Users want automatic switching between different models when rate-limited or errored, not just same-model provider fallback.

2. **Voice/Dictation Input** (#17425 references #4695, #9264, #11345) — Highly requested but blocked by plugin API limitations. Need microphone access hooks.

3. **Plugin Extensibility** (#17412, #17425) — Requests for plugins to inject AI-visible messages and access system-level features (audio, deeper hooks).

4. **Session Data Portability** (#14292) — Save conversations to project folder instead of `~/.opencode` for better version control and sharing.

5. **Workspace Automation** (#17427) — Lifecycle hooks for workspace creation (e.g., auto-provision test databases).

---

## 6. Developer Pain Points

| Category | Issues | Summary |
|----------|--------|---------|
| **Timeouts & Reliability** | #17307, #17318, #17414 | Default timeouts too aggressive for local/large models; SSE read failures disrupt workflows. |
| **Memory & Performance** | #12687, #15646 | Memory leaks cause system instability; disk swell leads to kernel panics on macOS. |
| **Clipboard/UX** | #13984, #16470 | Copy/paste broken in CLI; light mode color scheme renders code invisible. |
| **Quota/Cost** | #8030 | Copilot misclassifying agent requests as user requests, burning premium quotas. |
| **Model Support** | #14289, #12338 | Vision missing for Claude Opus 4.6; token limits not respecting 1M settings. |
| **Security False Positives** | #16321 | Windows Defender trojan detection blocks adoption. |
| **Worktree/Session Management** | #13782, #5638, #16389 | Sessions mixed across worktrees; desktop app replaces projects instead of treating worktrees separately. |

---

*Digest generated from GitHub activity on 2026-03-14. Total issues tracked: 50 | Total PRs tracked: 50*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-03-14

## 1. Today's Highlights
Version **v0.12.3** has been released, delivering critical fixes for VSCode IDE connection stability and improvements to the OAuth user experience. The community is highly active in expanding the tool's capabilities, with significant contributions focusing on a new **permission system** and **bundled skills** (like `/review`) for the upcoming v0.13.0. Additionally, contributors are pushing for better portability through **Node SEA binary builds** and improved handling of non-Qwen models.

## 2. Releases

### **v0.12.3**
*   **OAuth & IDE Fixes:** Resolved connection issues in specific VSCode clients and optimized connection config lookup ([PR #2327](https://github.com/QwenLM/qwen-code/pull/2327)).
*   **Auth UX:** Improved post-auth feedback, internationalization (i18n), and added options to clear authentication states.
*   [View Full Changelog](https://github.com/QwenLM/qwen-code/compare/v0.12.2...v0.12.2-nightly.20260313.46d57afb)

---

## 3. Hot Issues

1.  **[Feature] Telegram Bot Mode ([#2339](https://github.com/QwenLM/qwen-code/issues/2339))**
    *   **Why:** Users want to interact with Qwen Code remotely.
    *   **Reaction:** High interest (+2 votes quickly); proposal includes a `--telegram` flag for bot integration.
2.  **[Bug] VSCode Extension Connection Failure ([#2279](https://github.com/QwenLM/qwen-code/issues/2279))**
    *   **Why:** Critical UX blocker where v0.12.0 gets stuck "Preparing Qwen Code..." and loses the input line.
    *   **Status:** Closed, likely addressed in the v0.12.3 patch.
3.  **[Feature] Request for /undo Command ([#2342](https://github.com/QwenLM/qwen-code/issues/2342))**
    *   **Why:** Users lack a recovery mechanism when the agent makes a mistake.
    *   **Reaction:** "Extremely important" for agentic workflows to prevent irreversible changes.
4.  **[Bug] Shell Commands Fail with Quoted Text ([#2222](https://github.com/QwenLM/qwen-code/issues/2222))**
    *   **Why:** Windows users cannot execute commands with arguments containing spaces (e.g., `"hello world"`).
5.  **[Bug] Incomplete /insight HTML Report ([#2341](https://github.com/QwenLM/qwen-code/issues/2341))**
    *   **Why:** The generated report only shows headers, missing the actual analysis content.
6.  **[Feature] Add `/review` Skill ([#2346](https://github.com/QwenLM/qwen-code/issues/2346))**
    *   **Why:** Demand for out-of-the-box code review capabilities without manual skill configuration.
7.  **[Bug] Skills Not Auto-Loading from `.qwen/skills/` ([#2343](https://github.com/QwenLM/qwen-code/issues/2343))**
    *   **Why:** Documentation claims dropping files here works, but they fail to load after restart.
8.  **[Feature] Persist Session Approval Whitelist ([#2335](https://github.com/QwenLM/qwen-code/issues/2335))**
    *   **Why:** Repeatedly approving the same safe commands/tools across sessions is frustrating.
9.  **[Feature] Git Worktree Support ([#2194](https://github.com/QwenLM/qwen-code/issues/2194))**
    *   **Why:** Essential for running parallel agent sessions in the same repo without file state conflicts.
10. **[Bug] Windows Shell Output Empty ([#2244](https://github.com/QwenLM/qwen-code/issues/2244))**
    *   **Why:** `run_shell_command` returns empty output on Windows even when successful, blinding the agent.

---

## 4. Key PR Progress

1.  **[Feat] Node SEA Binary Build Support ([#2357](https://github.com/QwenLM/qwen-code/pull/2357))**
    *   Enables distribution of standalone executables, removing the Node.js dependency for end-users.
2.  **[Feat] Bundled /review Skill ([#2348](https://github.com/QwenLM/qwen-code/pull/2348))**
    *   Introduces a "bundled" skill level to ship a pre-configured code review agent.
3.  **[Feat] Permission System v2 ([#2283](https://github.com/QwenLM/qwen-code/pull/2283))**
    *   Implements fine-grained, rule-based permissions (e.g., `Bash(git *)`) for secure agent execution (Target: v0.13.0).
4.  **[Fix] Auto-detect max_tokens for Non-Qwen Models ([#2356](https://github.com/QwenLM/qwen-code/pull/2356))**
    *   Prevents response truncation in third-party models (Claude, GPT) by correctly detecting their limits.
5.  **[Feat] Agent Collaboration Arena ([#1912](https://github.com/QwenLM/qwen-code/pull/1912))**
    *   Runs tasks across multiple models in parallel using git worktrees for side-by-side comparison.
6.  **[Fix] Guard Against Empty OpenAI Choices ([#2364](https://github.com/QwenLM/qwen-code/pull/2364))**
    *   Prevents crashes when third-party providers return empty choice arrays.
7.  **[Feat] Hooks Extension Mechanism ([#2352](https://github.com/QwenLM/qwen-code/pull/2352))**
    *   Allows extensions to define lifecycle hooks (e.g., `UserPromptSubmit`) to execute commands.
8.  **[Fix] Handle LLM Failures in /insight ([#2361](https://github.com/QwenLM/qwen-code/pull/2361))**
    *   Fixes the issue where a single failed LLM call crashes the entire qualitative insight generation.
9.  **[Refactor] ACP-Aligned FileSystemService ([#2344](https://github.com/QwenLM/qwen-code/pull/2344))**
    *   Fixes file I/O bugs (GBK encoding, newly created files) by rewriting the handler to use VS Code APIs.
10. **[Fix] Ctrl+F Artifact in Focus Mode ([#2350](https://github.com/QwenLM/qwen-code/pull/2350))**
    *   Stops the `^F` character from leaking into the terminal when toggling focus mode.

---

## 5. Feature Request Trends
*   **Session Persistence & Recovery:** Strong demand for an `/undo` command and persistent whitelists for tool approvals to survive session restarts.
*   **Remote & Bot Interfaces:** Users are looking to integrate Qwen Code into other mediums, specifically requesting Telegram bot modes.
*   **Isolation & Parallelism:** Developers want to run multiple isolated sessions via `git worktree` support to parallelize tasks.
*   **Native Packaging:** High interest in standalone binaries (Node SEA) to simplify deployment in CI/CD and non-Node environments.

## 6. Developer Pain Points
*   **Cross-Platform Instability:** Frequent reports of shell command failures (quotes handling, empty output) specifically on Windows.
*   **IDE Connectivity:** The VSCode extension connection process remains fragile for some clients, causing "spinning" states.
*   **Model Configuration Limits:** Users switching to non-Qwen models face truncated outputs due to hard-coded or missing `max_tokens` configurations.
*   **Documentation/Behavior Mismatch:** Frustration regarding skills auto-loading, where documented behavior (`.qwen/skills/`) does not match actual runtime loading logic.

</details>