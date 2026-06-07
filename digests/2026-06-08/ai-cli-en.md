# AI CLI Tools Community Digest 2026-06-08

> Generated: 2026-06-07 22:19 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

Here is the cross-tool comparison report based on the community digests from June 8, 2026.

## 1. Ecosystem Overview
The AI CLI tooling ecosystem is rapidly transitioning from simple terminal-based chat interfaces into sophisticated, multi-agent integrated development environments. The current development landscape is defined by an aggressive push toward persistent daemon architectures, complex provider routing (including local, self-hosted, and multi-cloud models), and deep IDE integrations. However, this rapid expansion is leading to significant growing pains: context window exhaustion, fragile session states, and opaque billing/quota management are universal bottlenecks. Meanwhile, cross-platform parity—specifically treating Windows, WSL, and Linux as first-class citizens—remains a dominant operational challenge across the board.

## 2. Activity Comparison
| Tool | Issues Active/Updated | PRs Updated | Release Status (Last 24h) |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10+ (High engagement: 279 👍 top issue) | 2 (Minimal internal visibility) | **v2.1.168** released |
| **OpenAI Codex** | 10 (High engagement: 601 comments on top issue)| 10 (Active internal pipeline) | No release |
| **Gemini CLI** | 10 (Moderate engagement) | 10 (Active triage and merging) | No release |
| **GitHub Copilot CLI**| 10 (Moderate engagement) | 1 | No release |
| **Kimi Code CLI** | 7 (High friction migration) | 3 | No release |
| **OpenCode** | 10 (High bug/friction volume) | 10 (Active community PRs) | No release |
| **Pi** | 10 (Moderate engagement) | 4 | No release |
| **Qwen Code** | 10 (Architectural focus) | 15+ (Massive daemon integration)| **v0.17.1-nightly** released |
| **DeepSeek TUI** | 6 (Refactor & triage) | 10 (Coordinated v0.9.0 sprint) | No release |

## 3. Shared Feature Directions
*   **Daemon/Remote Server Architectures:** Tools are moving from local TUIs to background daemons supporting multiple clients. **Qwen Code** is leading this with ACP/WebSocket support, while **Gemini CLI** and **OpenAI Codex** are building similar persistent session and remote execution frameworks.
*   **Advanced Session & Context Management:** As token limits expand, managing context is critical. **OpenAI Codex**, **GitHub Copilot CLI**, **Pi**, and **OpenCode** are all grappling with infinite loops, crashes, or data loss during auto-compaction and context exhaustion. There is a universal demand for seamless session forking and resilient context recovery.
*   **Model Portability (Local & BYOK):** Users want to mix cloud and local models. **GitHub Copilot CLI**, **OpenCode**, **Qwen Code**, and **Pi** are seeing strong community pushes to dynamically switch between API providers, local Ollama instances, and custom endpoints without restarting sessions.
*   **Windows/WSL & Linux Parity:** Non-macOS platforms are demanding equal footing. **Claude Code** has a massive demand for a Linux desktop build (279 👍), while **OpenAI Codex**, **OpenCode**, and **Qwen Code** are actively battling bugs related to WSL path resolution, mixed line endings (CRLF/LF), and Wayland clipboard support.
*   **Extensibility & MCP Ecosystem:** Model Context Protocol (MCP) is becoming the standard for tool integration. **OpenAI Codex**, **Gemini CLI**, **Kimi Code**, and **OpenCode** are all refining MCP server lifecycle management, OAuth token refresh flows, and UI toggles to support external tooling.

## 4. Differentiation Analysis
*   **Enterprise & Billing Focus (Claude Code, OpenAI Codex, GitHub Copilot CLI):** The big three are bogged down by enterprise scaling frictions—specifically quota enforcement, token burning, server-side rate limits, and corporate proxy handling. Their focus is heavily on managed trust, safety, and billing infrastructure.
*   **Daemon & Multi-Client Superiority (Qwen Code):** Qwen Code is aggressively differentiating by shipping a highly concurrent daemon mode, allowing seamless switching between terminal, web, and IDE clients sharing the same underlying agent session.
*   **Agent Extensibility & Local Networking (OpenCode, Pi):** Open-source tools like OpenCode and Pi are targeting highly technical power users with features like local LAN mDNS provider discovery (automatically finding local LM Studio instances) and highly granular extension APIs.
*   **Rust-based Architectural Modularity (DeepSeek TUI):** DeepSeek TUI is uniquely focusing on a Rust-native, modular strategy pattern for its command dispatch, prioritizing strict security execution policies, concurrency safety, and BDD (Behavior-Driven Development) testing.
*   **Sub-agent & Self-awareness (Gemini CLI):** Gemini is focusing heavily on internal multi-agent architectures (specialized sub-agents) and tool optimization (AST-aware file reading), aiming to make the agent "self-aware" of its own CLI mechanics.

## 5. Community Momentum & Maturity
**Rapidly Iterating / High Momentum:** **Qwen Code** shows the most impressive engineering velocity, merging a 115k+ LOC daemon integration and implementing WebSocket/ACP parity. **DeepSeek TUI** is also moving fast with a highly coordinated, community-driven v0.9.0 refactor. **OpenCode** demonstrates a healthy open-source ecosystem with immediate community PRs addressing core regressions.

**Mature but Stagnated / Friction-Heavy:** **Claude Code** and **OpenAI Codex** have massive, highly engaged user bases (evidenced by hundred-comment threads), but their development pipelines appear more opaque or bottlenecked by internal processes. Codex is struggling with severe platform regressions, while Claude Code's public PR activity is virtually zero. **Kimi Code** is experiencing a damaging fracture in community trust due to a clumsy migration from `kimi-cli` to `kimi-code`.

**Stable Plodders:** **GitHub Copilot CLI**, **Pi**, and **Gemini CLI** are experiencing steady, incremental feedback loops, largely focused on refining the existing agent loop rather than rewriting core architectures.

## 6. Trend Signals
1.  **The Era of the "Agent Loop Bug":** As AI CLIs transition to autonomous agents, developers are frequently hitting edge cases where agents get stuck in infinite directory loops, hang indefinitely waiting for input, or silently report success after crashing. Robust state-machine engineering is becoming more critical than prompt engineering.
2.  **Billing and Opaque Quotas are Killers:** Users are fiercely rebelling against hidden token burns, rapid quota depletion, and paywalls blocking already-paid-for features (e.g., Claude's 1M context). AI tooling requires deterministic cost tracking before autonomous actions are executed.
3.  **The Terminal is becoming an IDE:** Requests for AST-aware navigation, "click-to-definition," UI hotbars, and image pasting indicate that developers want the ergonomics of a full IDE inside the footprint of a terminal application.
4.  **Air-Gapped and Local-First is a Priority:** The demand for native Ollama/LM Studio integration, LAN discovery, and self-hosted LLM support highlights a significant market segment that either cannot or will not send proprietary code to cloud endpoints. 
5.  **Sandboxing is Non-Negotiable:** With agents executing arbitrary code, there is a loud and growing demand (e.g., OpenCode's 51 👍 for sandboxing) for strict permission dialogs, macOS Seatbelt-style containment, and execution policies to prevent rogue agents from destroying local file systems.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** `github.com/anthropics/skills` | **Snapshot Date:** 2026-06-08

---

## 1. Top Skills Ranking (Most-Discussed PRs by Community Attention)

While all top PRs currently remain in an **[OPEN]** state, they represent the most active submissions in the repository based on community engagement, update frequency, and scope. 

1. **Add `document-typography` Skill** ([PR #514](https://github.com/anthropics/skills/pull/514))
   * **Functionality:** Prevents common typographic issues in AI-generated documents (orphaned word wraps, widow paragraphs, numbering misalignment).
   * **Highlights:** Addresses a subtle but ubiquitous problem with Claude-generated documents that users rarely think to explicitly request.
   * **Status:** Open

2. **Add `odt` Skill (OpenDocument Support)** ([PR #486](https://github.com/anthropics/skills/pull/486))
   * **Functionality:** Enables creation, template filling, parsing, and HTML conversion of OpenDocument Format files (`.odt`, `.ods`).
   * **Highlights:** Highly requested capability for users in open-source and enterprise ecosystems requiring ISO-standard document formats (LibreOffice/OpenOffice compatibility).
   * **Status:** Open

3. **Add `skill-quality-analyzer` & `skill-security-analyzer`** ([PR #83](https://github.com/anthropics/skills/pull/83))
   * **Functionality:** Introduces two "meta-skills" for evaluating existing Skills across five quality dimensions (structure, documentation, etc.) and identifying security vulnerabilities.
   * **Highlights:** A mature, structural contribution that provides essential guardrails for the broader community and marketplace.
   * **Status:** Open

4. **Improve `frontend-design` Skill Clarity** ([PR #210](https://github.com/anthropics/skills/pull/210))
   * **Functionality:** Revises the existing frontend-design skill to ensure instructions are actionable and highly specific for single-conversation execution.
   * **Highlights:** Focuses on token efficiency and reducing ambiguity, setting a standard for how Skills should be written.
   * **Status:** Open

5. **Add `testing-patterns` Skill** ([PR #723](https://github.com/anthropics/skills/pull/723))
   * **Functionality:** A comprehensive testing skill covering the "Testing Trophy" model, unit testing (AAA pattern), React component testing, integration, and E2E patterns.
   * **Highlights:** Addresses a critical software engineering gap by providing structured testing philosophies for AI agents.
   * **Status:** Open

6. **Add `shodh-memory` Skill (Persistent Agent Context)** ([PR #154](https://github.com/anthropics/skills/pull/154))
   * **Functionality:** Implements a persistent memory system allowing AI agents to maintain rich context across multiple conversations.
   * **Highlights:** Solves the ongoing context-loss problem, introducing proactive context retrieval for continuous workflows.
   * **Status:** Open

7. **Add AURELION Skill Suite (Kernel, Advisor, Agent, Memory)** ([PR #444](https://github.com/anthropics/skills/pull/444))
   * **Functionality:** A structured cognitive and memory framework featuring a "5-floor" thinking template for professional knowledge management.
   * **Highlights:** Represents an advanced push toward structured cognitive frameworks and autonomous agent memory management.
   * **Status:** Open

---

## 2. Community Demand Trends (Derived from Issues)

Based on the most-upvoted and active open issues, the community is heavily trending toward the following capabilities:

* **Enterprise & Organizational Features:** The top-voted issue ([Issue #228](https://github.com/anthropics/skills/issues/228)) requests org-wide skill sharing. Users want centralized skill libraries and direct sharing links for teams, moving away from manual `.skill` file transfers via Slack/Teams.
* **Security & Trust Boundaries:** With the rise of third-party skills, users are concerned about namespace squatting. ([Issue #492](https://github.com/anthropics/skills/issues/492)) highlights vulnerabilities where community skills masquerade under the `anthropic/` namespace, demanding stricter provenance and permission guardrails.
* **Reliability of Evaluation Tooling:** Several high-traffic issues ([Issue #556](https://github.com/anthropics/skills/issues/556), [Issue #1169](https://github.com/anthropics/skills/issues/1169)) report 0% trigger rates and recall failures in `run_eval.py`. The community urgently needs the official Skill validation/testing scripts to be stable and functional.
* **Cross-Platform Compatibility (Windows):** There is a clear demand for Windows parity. Multiple issues and PRs highlight subprocess crashes, pipe errors, and CLI path failures (e.g., `claude.cmd` vs `claude`) on Windows environments.
* **MCP & API Exposure:** Users continue to push for Skills to be exposed as Model Context Protocol (MCP) servers ([Issue #16](https://github.com/anthropics/skills/issues/16)), viewing Skills not just as prompt instructions but as standardized software APIs.

---

## 3. High-Potential Pending Skills (Likely to Land Soon)

These open PRs address immediate technical debt, critical bugs, or high-demand integrations, making them strong candidates for near-term merging:

* **Critical Bug Fix: `feature-dev` Workflow** ([PR #363](https://github.com/anthropics/skills/pull/363))
  Fixes a `TodoWrite` overwrite bug that silently skips Quality Review and Summary phases. This is a crucial fix for core workflow reliability.
* **Cross-Platform Fixes (Windows):** 
  * [PR #1050](https://github.com/anthropics/skills/pull/1050) fixes `subprocess.Popen` crashes on Windows 11.
  * [PR #1099](https://github.com/anthropics/skills/pull/1099) fixes `run_eval.py` pipe crashes on Windows, unblocking skill evaluation for a large segment of users.
* **OOXML/DOCX Corruption Fix** ([PR #541](https://github.com/anthropics/skills/pull/541))
  Fixes document corruption caused by ID space collisions between tracked changes and bookmarks—a critical patch for enterprise document generation.
* **YAML Validation Patch** ([PR #539](https://github.com/anthropics/skills/pull/539))
  Prevents silent parsing failures in `SKILL.md` frontmatter by flagging unquoted descriptions with special characters.
* **Advanced Agentic Workflows:** 
  * [PR #1140](https://github.com/anthropics/skills/pull/1140) (`agent-creator` skill) and [PR #190](https://github.com/anthropics/skills/pull/190) (`n8n-builder` and `faf-expert`) introduce advanced multi-agent orchestration and external automation integrations.

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is shifting from individual prompt-engineering utilities toward **enterprise-grade operational reliability: specifically cross-platform stability (Windows support), robust evaluation tooling (fixing 0% trigger rates), and secure, centralized org-wide sharing.**

---

# Claude Code Community Digest — 2026-06-08

## 1. Today's Highlights

Version **v2.1.168** was released with bug fixes and reliability improvements, landing amid a wave of community reports around scroll-wheel regression, server-side rate limiting, and 1M context billing errors on Max plans. A newly filed feature request for an **official Linux desktop build** has rocketed to 279 👍, signaling strong demand from the Linux developer community. Meanwhile, multiple reports of TUI scroll-wheel breakage across Windows, WSL, and Linux suggest a systemic regression introduced around v2.1.143–v2.1.150.

## 2. Releases

- **[v2.1.168](https://github.com/anthropics/claude-code/releases/tag/v2.1.168)** — Bug fixes and reliability improvements. No detailed changelog provided.

## 3. Hot Issues

1. **[#63060](https://github.com/anthropics/claude-code/issues/63060) — [BUG] API Error: Usage credits required for 1M context** (76 comments, 27 👍)
   Users on the Max plan report hitting an "extra usage required" error when using Opus models with 1M context. Duplicates [#45390](https://github.com/anthropics/claude-code/issues/45390) (34 comments, 27 👍). This billing gating issue is a top frustration for paying customers.

2. **[#53915](https://github.com/anthropics/claude-code/issues/53915) — [BUG] API Error: Server is temporarily limiting requests (Rate limited)** (41 comments, 9 👍)
   Windows/VS Code users are seeing server-side rate limiting that is **not** tied to their plan's usage cap. The issue is external to the client and has persisted since late April.

3. **[#45390](https://github.com/anthropics/claude-code/issues/45390) — [Bug] 1M context incorrectly requires extra usage on Max plan** (34 comments, 27 👍)
   Companion to #63060 — on the Max plan, selecting Opus 4.6 with 1M context triggers an erroneous `/extra-usage` prompt despite being an included feature.

4. **[#50246](https://github.com/anthropics/claude-code/issues/50246) — Feature Request: Message queue mode** (22 comments, 77 👍)
   Proposes queuing follow-up messages instead of forcing an interrupt on active tasks. The high 👍 count (77) signals strong demand for non-disruptive multi-turn workflows.

5. **[#65697](https://github.com/anthropics/claude-code/issues/65697) — [FEATURE] Official Claude Desktop build for Linux** (21 comments, **279 👍**)
   The highest 👍 count in this window. Requests an official Ubuntu LTS / Debian build of Claude Desktop. The community clearly wants Linux parity.

6. **[#12433](https://github.com/anthropics/claude-code/issues/12433) — [Bug] macOS Activity Monitor shows version number instead of 'claude'** (20 comments, 22 👍)
   A long-standing packaging bug where the process name shows the version string (e.g., `2.0.53`) rather than `claude`, making system monitoring difficult. Open since November 2025.

7. **[#7134](https://github.com/anthropics/claude-code/issues/7134) — [BUG] Claude Code does not respect file encoding, corrupts Windows-1252 files** (19 comments, 13 👍)
   Critical for enterprise users: Claude silently re-encodes files, destroying Windows-1252 content. Open since September 2025.

8. **[#66095](https://github.com/anthropics/claude-code/issues/66095) — Server withholds stream bytes, slow-first-byte and 180s idle-timeout aborts** (2 comments)
   A detailed networking report showing the Anthropic API accepting requests but sending no bytes for tens to hundreds of seconds, triggering client watchdog aborts on Opus 4.8.

9. **[#66120](https://github.com/anthropics/claude-code/issues/66120) — Grep tool returns silent "no matches" for files containing a NUL byte** (3 comments)
   The bundled Grep tool swallows ripgrep's binary-file-match notice, causing Claude to miss patterns in files with NUL bytes — a subtle but impactful tooling correctness issue.

10. **[#65833](https://github.com/anthropics/claude-code/issues/65833) — v2.1.150: scroll wheel no longer scrolls conversation on WSL** (2 comments, 1 👍)
    Another data point in the widespread scroll-wheel regression (#12953, #59979) — scroll wheel sends arrow keys instead of scrolling the transcript, affecting Windows, WSL, and Linux users.

## 4. Key PR Progress

Only **2 pull requests** saw updates in the last 24 hours, and neither is substantial:

1. **[#58673](https://github.com/anthropics/claude-code/pull/58673)** — A placeholder PR ("s") that appears to be spam or a test submission. No substantive content.
2. **[#39370](https://github.com/anthropics/claude-code/pull/39370) — feat(plugins): add frontend-design-system plugin** (Closed)
   Proposed a systematic design workflow plugin generating wireframes, OKLCH color theory, and design tokens before code. Was closed without merging — the rationale is unclear but may relate to overlap with the existing `frontend-design` plugin.

> **Note:** PR activity is minimal today. Core development appears to happen internally with no public-facing PR pipeline.

## 5. Feature Request Trends

| Theme | Representative Issues | Signal |
|---|---|---|
| **Linux desktop support** | [#65697](https://github.com/anthropics/claude-code/issues/65697) (279 👍) | Overwhelming demand |
| **Non-interruptive task management** | [#50246](https://github.com/anthropics/claude-code/issues/50246) message queue (77 👍), [#59818](https://github.com/anthropics/claude-code/issues/59818) `/fork` command | Session control is a top UX ask |
| **Higher-tier plans** | [#51141](https://github.com/anthropics/claude-code/issues/51141) 100x plan request | Power users hitting cost ceilings |
| **Safety-critical / regulated-industry mode** | [#61874](https://github.com/anthropics/claude-code/issues/61874) IEC 62304 / DO-178C / ISO 26262 process mode | Niche but important for adoption in regulated sectors |
| **Desktop TUI text selection** | [#66131](https://github.com/anthropics/claude-code/issues/66131) selection-aware context menu | Polish and usability |

## 6. Developer Pain Points

- **1M context billing confusion:** Multiple duplicate issues (#63060, #45390) with 76+ combined comments indicate the Max plan's 1M context entitlement is broken or poorly communicated. Users are hitting paywalls for features they've already paid for.

- **Server-side rate limiting killing sessions:** Issues #53915, #66113, and #66095 all describe the Anthropic API silently dropping connections or withholding bytes. These are **not** client usage-cap issues — they're server capacity problems that destroy in-flight work and session context.

- **Scroll-wheel regression across all non-macOS platforms:** Since ~v2.1.143, scroll wheel behavior changed across Windows, WSL, and Linux (#12953, #59979, #65833, #66132). Instead of scrolling the chat transcript, it cycles through input history. This is a daily-use UX regression that affects a large portion of the user base.

- **File encoding corruption (#7134):** Open for 9 months with no fix. Files with non-UTF-8 encodings are silently corrupted, which is a data-integrity risk in enterprise environments.

- **Token consumption spikes (#66124):** Reports of 4x token usage on v2.1.168 suggest a potential metering or efficiency regression in the latest release — worth monitoring closely.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-08

## 1. Today's Highlights
A widespread **`gpt-5.5` model outage** broke workflows globally today, with users reporting 404 "Model not found" errors across both CLI and Desktop clients. Platform stability issues dominated the day, particularly on **macOS** (system daemon CPU runaways) and **Windows** (WSL integration bugs and frequent app crashes). Internally, the OpenAI team pushed several significant architectural PRs aimed at improving global instructions, SQLite database recovery, and plugin marketplace infrastructure.

## 2. Releases
No new official releases were published in the last 24 hours.

## 3. Hot Issues

1. **[OPEN] [#14593](https://github.com/openai/codex/issues/14593) Token consumption burning too fast**
   With 601 comments and 262 👍, this remains the top community grievance. Users on Business/Plus plans report that Codex is rapidly depleting their token quotas, effectively rendering the tool unusable for longer sessions.

2. **[OPEN] [#25719](https://github.com/openai/codex/issues/25719) macOS Desktop triggers `syspolicyd` / `trustd` CPU runaway**
   A severe performance regression where Codex Desktop causes persistent system daemon spikes. Gained 19 comments and 18 👍, highlighting macOS users' growing frustration with background resource exhaustion.

3. **[OPEN] [#26892](https://github.com/openai/codex/issues/26892) `gpt-5.5` 404 Model Not Found (Desktop & CLI)**
   A breaking issue affecting multiple users today. Locally cached metadata shows `gpt-5.5` as available, but actual API requests fail. `gpt-5.4` remains functional as a temporary fallback.

4. **[OPEN] [#12299](https://github.com/openai/codex/issues/12299) Premature "usage limit hit" despite 10% quota remaining**
   Users are hitting hard usage limits while the UI explicitly shows 10% quota remaining. Points to a mismatch between local rate-limit tracking and backend enforcement.

5. **[OPEN] [#4003](https://github.com/openai/codex/issues/4003) Mixed line endings on Windows**
   A long-standing Windows bug (48 👍) where Codex patches files with mixed CRLF/LF endings, corrupting git diffs and breaking builds.

6. **[OPEN] [#21232](https://github.com/openai/codex/issues/21232) Desktop freezes on image-heavy projects**
   The Windows Desktop app becomes completely unresponsive when opening projects containing many generated images (16 👍). A critical blocker for frontend developers.

7. **[OPEN] [#17265](https://github.com/openai/codex/issues/17265) MCP OAuth tokens not auto-refreshing**
   Codex stores a `refresh_token` but fails to use it when the access token expires, causing MCP tool calls to fail mid-session (20 👍).

8. **[OPEN] [#7808](https://github.com/openai/codex/issues/7808) Context window exhaustion is fatal to chat threads**
   When the context window fills up, the current chat thread immediately dies with no recovery mechanism. Users working on long, complex tasks are losing active sessions.

9. **[OPEN] [#22185](https://github.com/openai/codex/issues/22185) Windows + WSL `CreateProcess /bin/bash` ENOENT**
   The `unified_exec` tool attempts to call `/bin/bash` directly from the Windows host instead of routing through WSL, breaking workflows for hybrid environments (5 👍).

10. **[OPEN] [#26867](https://github.com/openai/codex/issues/26867) PR review stuck on deactivated workspace**
    After migrating from a Business workspace to a Personal Pro account, GitHub PR reviews still attempt to use the old deactivated workspace, blocking code review workflows.

## 4. Key PR Progress

1. **[OPEN] [#25976](https://github.com/openai/codex/pull/25976) Use stable item IDs for Responses API**
   Refactors client/server item round-tripping to use stable, deterministic IDs. Critical for session persistence and reliable resume/fork behavior.

2. **[OPEN] [#26831](https://github.com/openai/codex/pull/26831) Add global instructions contributor API**
   Decouples global instructions from `Config`, providing embedders and hosts with a clean extension point. Lays groundwork for more flexible instruction delivery.

3. **[OPEN] [#26830](https://github.com/openai/codex/pull/26830) Characterize global instruction lifecycle**
   Adds end-to-end test coverage for global instruction behavior across thread creation, compaction, resume, forks, and subagents before the team changes the underlying semantics.

4. **[OPEN] [#26859](https://github.com/openai/codex/pull/26859) Auto-recover from corrupted SQLite databases**
   Addresses recent SQLite corruption incidents by implementing automatic recovery fallbacks, recognizing that older database versions left irrecoverably corrupted data.

5. **[OPEN] [#26852](https://github.com/openai/codex/pull/26852) Avoid blocking connection cleanup in app-server**
   Fixes a reconnect storm where remote sessions reconnected every 5-7 seconds because stuck RPCs blocked processing of replacement connection events.

6. **[OPEN] [#26287](https://github.com/openai/codex/pull/26287) Refine Guardian prompt for indirect exfiltration**
   Tightens the security policy wording around sensitive data, authorization, and egress in the Guardian safety system.

7. **[OPEN] [#24982](https://github.com/openai/codex/pull/24982) Honor parent approvals for intercepted execs**
   Fixes a sandboxing annoyance where child `execv(2)` calls forced re-approval even after the parent session already received a sandbox override.

8. **[OPEN] [#26880](https://github.com/openai/codex/pull/26880) Preserve fsmonitor for worktree Git reads**
   Reverts the blanket `core.fsmonitor=false` override, restoring Git's built-in fsmonitor for significantly faster status/diff operations in large repositories.

9. **[OPEN] [#26917](https://github.com/openai/codex/pull/26917) Support marketplace metadata for git plugins**
   Enables `plugin/list` to display names, descriptions, and keywords for Git-source plugins before installation, improving the upcoming plugin marketplace UX.

10. **[OPEN] [#26840](https://github.com/openai/codex/pull/26840) Add typed cross-platform path URIs**
    Introduces validated opaque environment identifiers, allowing Codex to reference paths on either local or remote hosts without misinterpreting foreign path syntax.

## 5. Feature Request Trends
* **Windows & WSL Parity:** A significant portion of issues are Windows-specific, demanding first-class WSL integration, stable UWP telemetry, and native path resolution.
* **Robust Quota Management:** Users want fine-grained, transparent, and accurate quota tracking to prevent unexpected cutoffs and "burning tokens" scenarios.
* **MCP Ecosystem Maturity:** Requests for persistent OAuth sessions, reliable token refresh flows, and better remote MCP lifecycle management are increasing.
* **Resilient Session State:** Community members are asking for automatic context compaction, thread recovery from disk, and graceful degradation when context limits are reached.
* **Plugin Marketplace Infrastructure:** Early PRs show the team building toward a plugin marketplace with Git-sourced metadata, suggesting an upcoming expandable plugin economy.

## 6. Developer Pain Points
* **Model Availability Instability:** The recurring `gpt-5.5` 404 errors erode trust. Developers need reliable model access or clear, proactive status communication when models are pulled or rate-limited.
* **Cross-Platform Fragility:** Windows users feel like second-class citizens due to constant WSL bugs, line-ending corruption, launch failures, and app crashes.
* **Opaque Rate Limiting:** The disconnect between the UI's reported usage and backend enforcement causes developers to ration usage unnecessarily or lose work unexpectedly.
* **Session Brittleness:** Threads dying from context exhaustion, disappearing from the UI, or corrupting local SQLite databases creates a frustratingly fragile daily workflow.
* **Authentication & Token Drift:** MCP OAuth tokens failing silently on refresh, and workspace migrations breaking PR reviews, indicate the auth layer needs stabilization.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-08

## 1. Today's Highlights
No new versions were released in the past 24 hours, but maintainers remain busy triaging core agent stability bugs and advancing several security and telemetry PRs. Notably, the generalist agent hanging issue ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)) continues to attract community attention with 8 thumbs-up, and Auto Memory reliability surfaced as a fresh cluster of bugs. On the PR front, critical fixes for regex backtracking, command injection, and telemetry errors are progressing toward merge.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues

| # | Issue | Why it matters |
|---|-------|----------------|
| 1 | [#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409) | P1 bug: the generalist agent hangs indefinitely on simple tasks (e.g., folder creation). Workaround is to disable sub-agents. 8 👍, 7 comments. |
| 2 | [#24353 — Robust component-level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353) | Epic to expand behavioral eval coverage (76 tests across 6 Gemini models). Critical for measuring agent quality over time. |
| 3 | [#22745 — AST-aware file reads, search & mapping](https://github.com/google-gemini/gemini-cli/issues/22745) | Investigates whether AST-aware tools can reduce token noise and misaligned reads. Could significantly improve codebase understanding. |
| 4 | [#22323 — Subagent reports GOAL success after MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323) | P1: subagents silently report success when they hit the turn limit, masking incomplete work. Trust-breaking bug. |
| 5 | [#26525 — Auto Memory lacks deterministic redaction](https://github.com/google-gemini/gemini-cli/issues/26525) | Security concern: transcript content reaches model context before secret redaction. Needs deterministic pre-processing. |
| 6 | [#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522) | Background extractor re-surfaces unprocessed low-signal sessions, causing unnecessary retries and resource waste. |
| 7 | [#21968 — Gemini doesn't use custom skills and sub-agents](https://github.com/google-gemini/gemini-cli/issues/21968) | Users report the model ignores custom skills (e.g., gradle, git) unless explicitly instructed. Limits extensibility value. |
| 8 | [#25166 — Shell command execution stuck on "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166) | P1: CLI hangs after shell commands complete, still showing "Awaiting user input." Affects basic workflows. 3 👍. |
| 9 | [#22186 — get-shit-done output hook causes crash](https://github.com/google-gemini/gemini-cli/issues/22186) | P1 crash during summary output. Blocks the popular "get-shit-done" mode. |
| 10 | [#24246 — 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246) | Agent hits a 400 API error when tool count exceeds thresholds. Needs smarter tool scoping. |

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#27729 — Truncate telemetry metric attributes](https://github.com/google-gemini/gemini-cli/pull/27729) | Fixes GCP export errors by truncating attributes to 1024 chars. Stops terminal flooding with Node.js stack traces, especially with `--format json`. |
| 2 | [#27730 — Keep array tool results out of structuredContent](https://github.com/google-gemini/gemini-cli/pull/27730) | MCP compliance fix: prevents JSON arrays from being copied into `structuredContent`, preserving original text content. |
| 3 | [#27580 — Prevent stack overflow from regex backtracking](https://github.com/google-gemini/gemini-cli/pull/27580) | P1: replaces regex-based `@` command parser with an iterative scanner to prevent catastrophic backtracking on large pasted inputs. |
| 4 | [#27575 — Prevent command injection in findCommand](https://github.com/google-gemini/gemini-cli/pull/27575) | Security fix: swaps `execSync` for `spawnSync`/`spawn` in `ide-installer.ts` and `editor.ts` to block shell metacharacter injection. |
| 5 | [#15674 — A2A server background task execution](https://github.com/google-gemini/gemini-cli/pull/15674) | Adds detached/background task execution to the A2A server with worker spawning and listing. Foundation for long-running agent tasks. |
| 6 | [#23490 — Global cross-folder session resume](https://github.com/google-gemini/gemini-cli/pull/23490) | Enables `--resume <session-id>` to work across folders. Improves session portability. |
| 7 | [#27591 — Fall back for oversized bug report URLs](https://github.com/google-gemini/gemini-cli/pull/27591) | Fixes `/bug` command on Android/Termux where deep-link limits cause crashes. Falls back gracefully for oversized URLs. |
| 8 | [#27405 — Parse tools.callCommand before execution](https://github.com/google-gemini/gemini-cli/pull/27405) | Passes parsed program/argv through sandbox preparation instead of raw strings. Improves discovered tool execution safety. |
| 9 | [#27398 — Accept string protocolVersion in ACP initialize](https://github.com/google-gemini/gemini-cli/pull/27398) | Normalizes date-style/string protocol versions to numeric ACP version, improving SDK compatibility. |
| 10 | [#27385 — Fix Node 20 compatibility & Windows symlink tests](https://github.com/google-gemini/gemini-cli/pull/27385) | Adds `URL.parse` polyfill for Node 20.x and resolves Windows-specific symlink test failures. |

## 5. Feature Request Trends

- **AST-aware codebase navigation** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)): Strong interest in using AST grep or similar tools for more precise file reads, searches, and codebase mapping to reduce token waste and improve agent accuracy.
- **Remote & background agents** ([#20303](https://github.com/google-gemini/gemini-cli/issues/20303), [#15674](https://github.com/google-gemini/gemini-cli/pull/15674)): Continuing demand for task-level auth, background processing, and detached execution modes for long-running agent tasks.
- **Local subagent system** ([#20195](https://github.com/google-gemini/gemini-cli/issues/20195)): Sprint-based development for local subagents, showing ongoing investment in multi-agent architectures.
- **Agent self-awareness** ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)): Requests for the agent to understand its own CLI flags, hotkeys, and execution mechanics to serve as its own expert guide.
- **Browser agent resilience** ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)): Demand for automatic session takeover, lock recovery, and Wayland support.

## 6. Developer Pain Points

- **Agent hanging and unresponsiveness** ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)): The generalist agent hanging and shell commands getting stuck are the top frustrations, with users reporting waits of up to an hour.
- **Subagent reliability and transparency** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#22093](https://github.com/google-gemini/gemini-cli/issues/22093)): Subagents silently reporting success on failure, not using custom skills, and running without permission undermine trust in the multi-agent system.
- **Auto Memory quality and security** ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)): The new Auto Memory system has a cluster of issues around secret redaction, infinite retries, and silently dropping invalid patches.
- **Tool scaling limits** ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)): Hitting API errors with large tool counts suggests the tool selection/scoping logic needs improvement for power users with many extensions.
- **Workspace pollution** ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)): The model scattering temporary scripts across directories creates cleanup overhead and repository noise.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for 2026-06-08.

### 1. Today's Highlights
Community activity for June 8, 2026, was highlighted by a strong demand for advanced model flexibility and several platform-specific installation bugs. Users are pushing for the ability to dynamically switch between GitHub-hosted and local BYOK (Bring Your Own Key) models within active sessions. Meanwhile, long-running sessions continue to expose edge cases in context memory management, and contributors flagged installation script bugs on FreeBSD and Windows. 

### 2. Releases
No new releases were recorded in the last 24 hours.

### 3. Hot Issues
*   **#3709 Allow `/model` to switch between multiple models, including BYOK/local providers, in one session** - Users are frustrated that `COPILOT_MODEL` pins an entire session to a single model. The community wants the ability to seamlessly switch between local providers and GitHub-hosted models using the `/model` command on the fly. ([#3709](https://github.com/github/copilot-cli/issues/3709))
*   **#3216 Ran overnight in regular mode... infinite compaction/directory-list loop** - A user reported a severe bug where a 136-turn session caused the agent to enter an infinite loop of directory listing and memory compaction, ultimately resulting in unexpected token usage. This highlights ongoing issues with context window management near limits. ([#3216](https://github.com/github/copilot-cli/issues/3216))
*   **#1128 Feature Request: Add awaitingUserInput hook type** - Garnering high community support (27 thumbs up), developers are requesting a new hook to trigger events when the CLI is idle and waiting for input, closing a gap in workflow automation. ([#1128](https://github.com/github/copilot-cli/issues/1128))
*   **#1276 Support pasting images from the system clipboard** - A highly requested feature (8 thumbs up) asking for native support to paste screenshots (UI bugs, logs) directly into CLI prompts for multimodal querying. ([#1276](https://github.com/github/copilot-cli/issues/1276))
*   **#333 GitHub Copilot CLI fails with "fetch failed" error in corporate environments** - A lingering enterprise blocker where SSL inspection/MiTM proxies break the CLI, even when corporate certificates are properly installed in the OS keychain. ([#333](https://github.com/github/copilot-cli/issues/333))
*   **#3396 Confusing error when GITHUB_TOKEN is set in env** - When running in GitHub Actions, the CLI silently picks up `GITHUB_TOKEN` and forwards it to the backend, resulting in an unhelpful 400 server error. ([#3396](https://github.com/github/copilot-cli/issues/3396))
*   **#3710 Install script thinks FreeBSD is Windows** - A platform-detection bug in the `gh.io/copilot-install` script causes the installation to fail on FreeBSD by incorrectly prompting for Windows `winget`. ([#3710](https://github.com/github/copilot-cli/issues/3710))
*   **#3711 Copilot CLI version not updated in Windows Registry** - Following an update via `/update` to v1.0.60, Windows users noticed the registry entries are not properly reflecting the new version. ([#3711](https://github.com/github/copilot-cli/issues/3711))
*   **#2294 License clarification: packaging in Linux distro repos** - Maintainers of Arch Linux have initiated a discussion requesting clarification on licensing terms (specifically Section 2) for packaging the CLI in non-commercial, open-source distribution repositories. ([#2294](https://github.com/github/copilot-cli/issues/2294))
*   **#2828 Weekly rate limiting** - Users are experiencing abrupt rate limit errors and are requesting clearer UX messaging that suggests actionable next steps rather than just stating the reset date. ([#2828](https://github.com/github/copilot-cli/issues/2828))

### 4. Key PR Progress
Activity in the Pull Request pipeline was minimal over the past 24 hours, with only one submission:
*   **#3708 Add files via upload** - An open PR from a community contributor adding new files to the repository. The team is currently reviewing the submission. ([#3708](https://github.com/github/copilot-cli/pull/3708))

### 5. Feature Request Trends
Analysis of recent issues reveals two primary feature trends:
*   **Model & Provider Flexibility:** Users want to break free from single-model constraints. There is a distinct trend toward wanting agnostic session controls, specifically the ability to mix local/BYOK models with remote models in the same session (Issue #3709).
*   **Multimodal & Advanced Inputs:** Developers are pushing for the CLI to handle richer data types natively. Pasting images directly from the clipboard (Issue #1276) is a highly requested capability.
*   **Deeper Lifecycle Hooks:** Plugin and extension developers are trending toward needing more granular event listeners, specifically to know when the agent is idle and awaiting input (Issue #1128).

### 6. Developer Pain Points
*   **Context & Memory Management:** Long-running sessions degrade reliability. Users are expressing frustration with the CLI entering infinite loops when memory compaction is triggered near the context limit, leading to wasted compute/tokens (Issue #3216).
*   **Corporate & CI/CD Networking:** Enterprise users continue to struggle with opaque authentication and networking errors. The CLI's failure to handle SSL inspection proxies (Issue #333) and its confusing error handling when defaulting to `GITHUB_TOKEN` in Actions (Issue #3396) remain significant blockers.
*   **Platform-Specific Install/Update Quirks:** Maintaining a seamless setup experience across diverse OS environments is an ongoing struggle. The install script incorrectly identifying FreeBSD as Windows (Issue #3710) and the Windows Registry failing to update versions seamlessly (Issue #3711) highlight persistent friction in the native update flow.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest - 2026-06-08

Here is the technical community digest for the Kimi Code CLI project based on the latest GitHub activities.

## 1. Today's Highlights
The Kimi Code ecosystem is currently experiencing significant friction surrounding the transition from the legacy `kimi-cli` (v1.47.0) to the newly rewritten `kimi-code` (v0.11.0). Users are reporting critical migration issues ranging from broken installations to confusing quota attribution and possible agent quality regressions. Meanwhile, active open PRs indicate that contributors are focusing heavily on improving system resilience, particularly regarding MCP (Model Context Protocol) server connections and media handling.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues
1. **Community Frustration over Project Forking** ([#2381](https://github.com/MoonshotAI/kimi-cli/issues/2381)): A highly discussed issue where a user complains about Moonshot AI abandoning the original `kimi-cli` for a new `kimi-code` build. This highlights a growing trust issue among developers who rely on the tool for production and fear community fragmentation.
2. **Migration Regressions and Quota Confusion** ([#2437](https://github.com/MoonshotAI/kimi-cli/issues/2437)): A detailed bug report noting that migrating to the new `kimi-code v0.11.0` has led to unclear state transfers, quota mix-ups, and a perceived drop in AI agent quality.
3. **Broken Installation / Unresponsive Agent** ([#2436](https://github.com/MoonshotAI/kimi-cli/issues/2436)): After installing the new Kimi Code, the agent enters an endless loop of indecision, rendering the CLI entirely unusable for the user.
4. **Agent Status Unknown in Agentic Sessions** ([#2438](https://github.com/MoonshotAI/kimi-cli/issues/2438)): On the legacy v1.47.0 client, users are reporting that the agent's status becomes unknown, preventing them from diving into or overviewing agentic sessions.
5. **Compaction Error with Local Ollama Models** ([#2439](https://github.com/MoonshotAI/kimi-cli/issues/2439)): A user utilizing a local Ollama model encountered a `compaction.unable` error during project review, pointing to underlying context management bugs when interfacing with local LLMs.
6. **Request for Clickable Symbol Navigation** ([#2440](https://github.com/MoonshotAI/kimi-cli/issues/2440)): A UX feature request asking for the chat panel to support clicking on method/function names to jump directly to their definitions, moving beyond basic file-path linking.
7. **Remote Control & Multi-Device Session Handoff** ([#2269](https://github.com/MoonshotAI/kimi-cli/issues/2269)): An ongoing feature request asking for the ability to seamlessly hand off active CLI sessions between laptops, web interfaces, and mobile devices.

## 4. Key PR Progress
1. **Graceful Degradation for MCP Servers** ([PR #1769](https://github.com/MoonshotAI/kimi-cli/pull/1769)): Addresses a critical bug where port conflicts between TUI and Web UI sessions cause `MCPRuntimeError`s to crash the worker and freeze the UI in a permanent "thinking" state. 
2. **Eager Attachment of Dropped Image Paths** ([PR #2183](https://github.com/MoonshotAI/kimi-cli/pull/2183)): Fixes an issue with image context by eagerly scanning user text for local image paths and converting them to `ImageURLPart` immediately upon prompt submission, rather than relying on deferred file reading.
3. **Pyproject.toml Parse Error Fix** ([PR #774](https://github.com/MoonshotAI/kimi-cli/pull/774)): Resolves a build-blocker where running `make prepare` failed due to an invalid sequence type in the TOML configuration.

## 5. Feature Request Trends
*   **Cross-Device Continuity:** Users want untethered workflows, specifically the ability to start an agentic coding session on a local CLI and monitor/control it remotely via web or mobile.
*   **Advanced IDE-like Interactivity in CLI:** Developers are pushing for deeper code intelligence within the TUI/Chat interface, such as "Go to Definition" functionality for symbols mentioned in AI responses.
*   **Robust Local Model Support:** As developers increasingly run open-weights models, there is a clear trend in demanding seamless integration and stable context compaction for local providers like Ollama.

## 6. Developer Pain Points
*   **Fragmented Ecosystem and Upgrade Paths:** The shift from `kimi-cli` to `kimi-code` is causing severe friction. Developers are experiencing broken installations, lost configurations, and a general lack of clarity on which client to use. 
*   **Agent Reliability and Infinite Loops:** Multiple reports indicate the AI agent frequently gets stuck in an "unknown" status or "unable to make up its mind," forcing developers to manually terminate sessions.
*   **MCP Server Brittleness:** The Model Context Protocol implementation is prone to crashing the entire TUI/Web UI worker thread when encountering port conflicts, requiring manual intervention to stabilize the environment.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-08

## 1. Today's Highlights

OpenCode v1.16.x is generating significant community friction, with a cluster of high-profile bugs around provider connectivity (AWS Bedrock SSO, DeepSeek vanishing from `/connect`, Azure OpenAI API-version regressions) and TUI/Desktop UX issues (input swallowing on Enter, MCP toggle unresponsive, stuck installations). On the positive side, community contributors are actively submitting fixes and ambitious feature PRs—including dynamic workflows à la Claude Code, local LAN provider discovery, PWA support, and a new interactive file picker for Desktop v2. The absence of an official release in the last 24 hours means these regressions remain unpatched on the stable channel.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why it matters |
|---|-------|----------------|
| 1 | [#31147 — Regression: AWS Bedrock SSO broken in v1.16](https://github.com/anomalyco/opencode/issues/31147) | A blocking regression for enterprise users on AWS SSO; `E is not a function` error prevents any inference. Signals fragile credential-provider refactoring. |
| 2 | [#31242 — DeepSeek provider missing from /connect in 1.16.2](https://github.com/anomalyco/opencode/issues/31242) | Vendor disappeared after upgrade despite official DeepSeek docs citing OpenCode ≥v1.14. Users following integration guides are stranded. |
| 3 | [#31217 — TUI prompt input swallowed on Enter](https://github.com/anomalyco/opencode/issues/31217) | Core UX regression: typed text disappears on Enter without submitting. Affects both CJK and English input; slash commands still work, pointing to a input-handler bug. |
| 4 | [#31203 — MCP toggle unresponsive in Desktop v1.16.0](https://github.com/anomalyco/opencode/issues/31203) | The fix that re-surfaced MCP in Desktop introduced a dead toggle. MCP is visible but cannot be enabled/disabled. |
| 5 | [#31247 — Opus 4.8 via GitHub Copilot leaks tool-call text](https://github.com/anomalyco/opencode/issues/31247) | In long sessions the model leaks raw `call read` / `<invoke>` markup into assistant messages, eventually causing a 400 from the prefill. Highlights context-window management issues with powerful models. |
| 6 | [#31259 — Whitespace-only assistant turn causes Anthropic 400](https://github.com/anomalyco/opencode/issues/31259) | github-copilot Claude models hard-crash on whitespace-only text blocks. A focused repro with quick community PR fix (#31260). |
| 7 | [#2242 — Sandbox the agent (still open, 62 comments, 51 👍)](https://github.com/anomalyco/opencode/issues/2242) | Long-running request for filesystem sandboxing (like macOS Seatbelt). Remains one of the most-upvoted open issues, reflecting security-conscious enterprise demand. |
| 8 | [#29059 — Feature: Dynamic workflows](https://github.com/anomalyco/opencode/issues/29059) | 12 👍; paired with [#30308](https://github.com/anomalyco/opencode/issues/30308) asking the same. Community wants Claude Code–style project-local reusable workflows. PR [#29789](https://github.com/anomalyco/opencode/pull/29789) is in progress. |
| 9 | [#27436 — Permission dialog stuck / cannot select](https://github.com/anomalyco/opencode/issues/27436) | Permission UX deadlock: "Allow once" is unclickable, "Allow always" loops, "Reject" won't submit. Sessions get trapped. |
| 10 | [#26508 / #29702 — "ZEN scam" refund complaints](https://github.com/anomalyco/opencode/issues/26508) | Multiple users report being redirected to ZEN payment instead of GO subscription. Billing support remains unresponsive (see also [#29182](https://github.com/anomalyco/opencode/issues/29182)). Trust-damaging pattern. |

---

## 4. Key PR Progress

| # | PR | Summary |
|---|-----|---------|
| 1 | [#31260 — fix: drop whitespace-only text blocks for Anthropic/Bedrock](https://github.com/anomalyco/opencode/pull/31260) | **Closed/merged.** Trivial but critical fix stripping whitespace-only assistant blocks before sending to Anthropic. Directly resolves #31259. |
| 2 | [#31280 — fix: prevent run and shell exit hangs](https://github.com/anomalyco/opencode/pull/31280) | **Closed/merged.** Fixes two hang scenarios in non-interactive `opencode run` where tool work completes but the process never exits. |
| 3 | [#31208 — experiment: better web picker using @pierre/tree](https://github.com/anomalyco/opencode/pull/31208) | Beta PR replacing the Desktop v2 file/directory picker with a lazy-loaded, keyboard-navigable tree browser. Preloads one directory level ahead. |
| 4 | [#29789 — feat: add Dynamic workflows](https://github.com/anomalyco/opencode/pull/29789) | Implements `/workflow <name> arg=value` in the TUI for project-local multi-step automation—OpenCode's answer to Claude Code workflows. Still open/in-review. |
| 5 | [#27554 — feat: local LAN provider discovery + auto-discover models](https://github.com/anomalyco/opencode/pull/27554) | Adds mDNS + OpenAI-compatible `/v1/models` probing to auto-discover local providers (LM Studio, Ollama, etc.) via a new "Local (LAN)" option in `/connect`. |
| 6 | [#31256 — feat: edit WSL credentials + server tab redesign](https://github.com/anomalyco/opencode/pull/31256) | Desktop improvement allowing users to edit credentials of OpenCode servers running inside WSL, plus a visual refresh of the server tab. |
| 7 | [#31279 — feat: add PWA support with service worker](https://github.com/anomalyco/opencode/pull/31279) | Adds progressive web app support including service worker, update prompt, and `crossorigin="use-credentials"` manifest link. Closes 5 related issues. |
| 8 | [#31138 — fix: derive per-model stats from step-finish parts](https://github.com/anomalyco/opencode/pull/31138) | Corrects cost/token tracking to use granular `step-finish` data instead of aggregated session totals. Paired with [#31136](https://github.com/anomalyco/opencode/pull/31136) which excludes pre-fork costs from forked sessions. |
| 9 | [#31268 — chore: update MCP SDK to 1.29.0](https://github.com/anomalyco/opencode/pull/31268) | **Closed/merged.** Bumps `@modelcontextprotocol/sdk` from 1.27.1 → 1.29.0 with full test suite pass (93 MCP-related tests). |
| 10 | [#31269 — fix: avoid duplicate skill catalog](https://github.com/anomalyco/opencode/pull/31269) | **Closed/merged.** Stops leaking the available skill catalog into the V1 skill tool description, keeping the system prompt as the single source of truth. |

---

## 5. Feature Request Trends

1. **Dynamic / Reusable Workflows** — The single hottest feature theme. Issues [#29059](https://github.com/anomalyco/opencode/issues/29059) and [#30308](https://github.com/anomalyco/opencode/issues/30308) both request Claude Code–style project-local workflows for repeatable multi-step automation. PR [#29789](https://github.com/anomalyco/opencode/pull/29789) is the community-led implementation.

2. **Agent Sandboxing & Security** — [#2242](https://github.com/anomalyco/opencode/issues/2242) (51 👍, 62 comments) continues to be the canonical request for filesystem/command sandboxing. Enterprise users explicitly reference macOS Seatbelt and container-based isolation.

3. **Local / Self-Hosted Model Support** — Strong demand for zero-config discovery of local models: PRs [#27554](https://github.com/anomalyco/opencode/pull/27554) (LAN discovery), [#15732](https://github.com/anomalyco/opencode/pull/15732) (LM Studio dynamic config), and multiple issues around Ollama connectivity reflect a growing self-hosted user base.

4. **Desktop UX Polish** — Minimize-to-tray ([#18134](https://github.com/anomalyco/opencode/issues/18134)), WSL credential editing, PWA support, and session archive/unarchive improvements indicate users want Desktop to feel like a mature native app.

5. **Advanced Context Management** — [#11829](https://github.com/anomalyco/opencode/issues/11829) proposes treating context as an external environment (Recursive Language Model paradigm from MIT). Forward-looking but has 11 👍, signaling appetite for smarter context strategies beyond simple compaction.

---

## 6. Developer Pain Points

- **v1.16 regression cluster**: Multiple provider integrations broke simultaneously—AWS Bedrock SSO, DeepSeek vendor visibility, Azure OpenAI `api-version` parameter, and MCP toggle dead-on-arrival. The lack of a same-day patch release is compounding frustration.

- **Permission UX deadlocks**: Issue [#27436](https://github.com/anomalyco/opencode/issues/27436) reports that the V2 permission dialog can trap sessions in an unresolvable state. Combined with [#30797](https://github.com/anomalyco/opencode/issues/30797) (always-allow rules silently persisting in SQLite across forks), the permission system needs a reliability pass.

- **Billing & trust concerns**: The recurring "ZEN scam" complaints ([#26508](https://github.com/anomalyco/opencode/issues/26508), [#29702](https://github.com/anomalyco/opencode/issues/29702), [#29182](https://github.com/anomalyco/opencode/issues/29182)) and unresponsive refund support are eroding community trust. This is no longer a billing bug—it's a reputation issue.

- **Windows-specific friction**: LF-only line endings breaking `.bat` files ([#31224](https://github.com/anomalyco/opencode/issues/31224)), Desktop installation hangs with crash dumps ([#31261](https://github.com/anomalyco/opencode/issues/31261)), and WSL credential gaps suggest Windows remains a second-class citizen.

- **Provider compatibility long tail**: Azure OpenAI (`api-version` missing), GitHub Copilot Claude models (whitespace 400s, tool-call leakage), and slow-provider SSE timeouts ([#31281](https://github.com/anomalyco/opencode/issues/31281)) show that the provider abstraction layer still has rough edges for non-OpenAI endpoints.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-08

## 1. Today's Highlights
The Pi ecosystem saw a strong push towards expanding provider compatibility and fixing core agent loop instabilities. A native integration for the Requesty AI gateway was proposed alongside critical fixes for auto-compaction crashes that plagued long-running sessions. The community remains highly focused on extensibility, with multiple issues requesting broader public APIs for extension and skill development.

## 2. Releases
No new official releases were published in the last 24 hours. Development activity remains concentrated on upstream merges and bug triage.

## 3. Hot Issues
1. **[#5223](https://github.com/earendil-works/pi/issues/5223) Anthropic provider modifies thinking blocks with Opus 4.8:** Multi-turn conversations using Claude Opus 4.8 adaptive thinking (`high` reasoning) crash mid-session with 400 errors due to mishandled `thinking`/`redacted_thinking` blocks. (👍 6, 15 comments)
2. **[#5427](https://github.com/earendil-works/pi/issues/5427) OpenAI Codex transport issues:** Users are experiencing persistent SSE timeout errors ("Codex SSE response headers timed out after 10000ms") that break subsequent messages. (👍 3, 1 comment)
3. **[#3834](https://github.com/earendil-works/pi/issues/3834) Fireworks provider not working:** A standard configuration with valid credits and API keys fails with validation errors, completely blocking Fireworks users. (9 comments)
4. **[#5188](https://github.com/earendil-works/pi/issues/5188) Shift+Enter submits instead of creating a new line:** A keybinding regression where `shift+enter` ignores user configurations and submits the prompt, severely impacting multi-line editing workflows. (👍 2, 8 comments)
5. **[#5468](https://github.com/earendil-works/pi/issues/5468) MiniMax-M3 tool replay errors:** Long sessions using MiniMax-M3 via `minimax-cn` crash with 400 errors when the replay sends tool results with unrecognized IDs, requiring a session restart. 
6. **[#5464](https://github.com/earendil-works/pi/issues/5464) Local models suffer 3-5 minute "Working" latency:** Ollama users running local models face massive latency delays for simple messages mid-session due to processing bottlenecks.
7. **[#5456](https://github.com/earendil-works/pi/issues/5456) OpenAI-responses provider ignores `supportsDeveloperRole`:** The agent incorrectly sends `role: "developer"` to providers that explicitly disable it in `models.json` when reasoning is enabled.
8. **[#5463](https://github.com/earendil-works/pi/issues/5463) Auto-compaction throws unhandled error:** Auto-compaction triggered after a standard assistant turn crashes the agent with a "Cannot continue from message role: assistant" state error.
9. **[#5438](https://github.com/earendil-works/pi/issues/5438) Clipboard image paste only submits temp file path:** Pasting images in interactive mode fails to attach actual image bytes, sending only the local `/tmp/` path string to the model.
10. **[#5469](https://github.com/earendil-works/pi/issues/5469) Request to collapse MCP tool results by default:** Heavy MCP users request a configurable setting to collapse large tool outputs (like search results) to keep the terminal TUI clean and readable.

## 4. Key PR Progress
*(Note: Only 4 PRs were updated in the last 24 hours. All are detailed below.)*

1. **[#5472](https://github.com/earendil-works/pi/pull/5472) feat: add Requesty as native provider:** Wires Requesty directly into `packages/ai`, allowing `requesty/...` models to work out-of-the-box without custom OpenAI-compatible endpoints.
2. **[#5471](https://github.com/earendil-works/pi/pull/5471) fix(coding-agent): don't unconditionally continue after compaction:** Fixes a critical crash loop (#5463) by ensuring the agent only triggers `continue()` if pending messages actually exist post-compaction.
3. **[#5467](https://github.com/earendil-works/pi/pull/5467) Include `models.json` path in migration parse errors:** Improves developer experience by attaching the absolute file path to malformed configuration parsing errors.
4. **[#5465](https://github.com/earendil-works/pi/pull/5465) feat: add mineru document-parsing skill:** Introduces a standardized Agent Skill (`SKILL.md` + shell script wrapper) for MinerU document parsing via API.

## 5. Feature Request Trends
- **Tighter Extensibility & API Surface Area:** Developers want deeper hook access within the agent lifecycle. Requests include exposing `waitForIdle`/`reload` on `ExtensionContext` ([#5443](https://github.com/earendil-works/pi/issues/5443)), exporting internal RPC types ([#5455](https://github.com/earendil-works/pi/issues/5455)), and allowing granular exclusion of built-in tools ([#5447](https://github.com/earendil-works/pi/issues/5447)).
- **Broader Provider & Routing Integrations:** The community is actively requesting native provider support, moving away from generic OpenAI-compatible wrappers. Examples include Requesty ([#5473](https://github.com/earendil-works/pi/issues/5473)) and updating model catalogs for OpenRouter ([#3931](https://github.com/earendil-works/pi/issues/3931)).
- **Granular UI & TUI Configurability:** Users desire more control over the interactive terminal environment. Key asks include collapsing verbose MCP tool outputs ([#5469](https://github.com/earendil-works/pi/issues/5469)), configurable local storage paths for pasted images ([#5414](https://github.com/earendil-works/pi/issues/5414)), and removing hardcoded strings like "$" for cost displays ([#4578](https://github.com/earendil-works/pi/issues/4578)).

## 6. Developer Pain Points
- **Multi-turn Agent Loop Instability:** A significant cluster of issues relates to the agent's state management degrading over long sessions. Auto-compaction crashes ([#5463](https://github.com/earendil-works/pi/issues/5463)), retry logic failures following an `end_turn` ([#5445](https://github.com/earendil-works/pi/issues/5445)), and Opus 4.8 thinking block corruption ([#5223](https://github.com/earendil-works/pi/issues/5223)) cause severe workflow disruptions.
- **Local Model Latency:** Developers utilizing local, self-hosted models (e.g., via Ollama) are hitting a frustrating wall of artificial latency ([#5464](https://github.com/earendil-works/pi/issues/5464)), indicating architectural bottlenecks when the agent processes requests without high-latency cloud API waits.
- **Keybinding and Input Quirks:** Core TUI input mechanisms remain brittle. The `shift+enter` bug ([#5188](https://github.com/earendil-works/pi/issues/5188)) and arrow-key history navigation conflicting with multiline text editing ([#5454](https://github.com/earendil-works/pi/issues/5454)) represent high-friction papercuts for daily users.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-08

## 1. Today's Highlights
The project shipped **v0.17.1-nightly.20260607**, featuring a fix for thought-part handling in CLI copy output and release automation. The daemon/serve architecture continues its rapid maturation, with multiple substantial PRs landing to expand the ACP (Agent Client Protocol) surface, WebSocket transport, and remote session management. Meanwhile, core stability efforts are addressing OOM prevention, self-hosted LLM compatibility, and OAuth timeout issues.

## 2. Releases

**v0.17.1-nightly.20260607.cef26a86a**
- Automated release via CI bot ([PR #4742](https://github.com/QwenLM/zwen-code/pull/4742)).
- **Bug fix:** CLI copy output now correctly skips internal "thought" parts, preventing malformed clipboard content ([he-yufeng](https://github.com/QwenLM/zwen-code/)).

## 3. Hot Issues

1. **[#4514](https://github.com/QwenLM/zwen-code/issues/4514) — Tracking `serve` daemon capability gaps & backlog** (Open, 12 comments)  
   *Why it matters:* The master tracking issue for the daemon HTTP/SSE surface. Identifies all remaining gaps after v0.16-alpha and is driving multiple active PRs. Essential reading for anyone integrating with `qwen serve`.

2. **[#4782](https://github.com/QwenLM/zwen-code/issues/4782) — ACP Streamable HTTP transport implementation & upgrade plan** (Open, 2 comments)  
   *Why it matters:* Documents that `qwen serve` now implements the ACP Streamable HTTP transport at `/acp`, enabling adapter-free connections from Zed, Goose, and JetBrains. Key architectural milestone for multi-client support.

3. **[#4830](https://github.com/QwenLM/zwen-code/issues/4830) — Fallback model support for resilient long-running sessions** (Closed — duplicate)  
   *Why it matters:* High-demand discussion about automatic model failover when a primary provider is rate-limited or unavailable. Closed as duplicate, but signals strong community appetite for provider resilience.

4. **[#4794](https://github.com/QwenLM/zwen-code/issues/4794) — Compact mode tool merge causes full-screen flash** (Open, 3 comments)  
   *Why it matters:* Visual regression in compact mode where `mergeCompactToolGroups` causes Ink's renderer to flash on every batch. Directly impacts usability in terminal workflows.

5. **[#4675](https://github.com/QwenLM/zwen-code/issues/4675) — Vim INSERT mode Esc key leak & mode indicator lag** (Open, 3 comments)  
   *Why it matters:* Affects power users relying on Vim keybindings. Esc leaks to AppContainer, causing unexpected clears or interruptions during model responses.

6. **[#4550](https://github.com/QwenLM/zwen-code/issues/4550) — LAN/intranet usage stuck at initialization** (Open, 2 comments)  
   *Why it matters:* Users in air-gapped or internal networks can't proceed past initialization. No workaround documented yet — blocks enterprise adoption.

7. **[#1206](https://github.com/QwenLM/zwen-code/issues/1206) — Dynamic multi-model support for OpenAI-compatible APIs** (Open, 👍 1)  
   *Why it matters:* Long-standing request (since Dec 2025) for dynamic model fetching and switching at runtime. Still unfulfilled; receives periodic community upvotes.

8. **[#4815](https://github.com/QwenLM/zwen-code/issues/4815) — OOM during long-running sessions** (Linked from PR #4824)  
   *Why it matters:* Node.js old-space exhaustion in extended agent sessions. Now being actively addressed with history compaction fixes.

9. **[#4175](https://github.com/QwenLM/zwen-code/issues/4175) — Branching strategy for daemon mode** (Referenced in PR #4490)  
   *Why it matters:* Defines the integration workflow (`daemon_mode_b_main` → `main`) that governs how all daemon features land. Important for contributors to understand.

10. **[#3517](https://github.com/QwenLM/zwen-code/issues/3517) / [#2885](https://github.com/QwenLM/zwen-code/issues/2885) — Clipboard image paste broken on Linux/WSL2+Wayland** (Linked from PR #4647)  
    *Why it matters:* Persistent Linux desktop pain point. The maintainer has confirmed the bug; a fix using native platform tools is in review.

## 4. Key PR Progress

| PR | Description | Impact |
|----|-------------|--------|
| [#4827](https://github.com/QwenLM/zwen-code/pull/4827) | **ACP/REST parity — 29 new `_qwen/*` methods + hardening** (+935 LOC) | Achieves full parity between ACP and REST daemon surfaces. Foundational for multi-client agent control. |
| [#4832](https://github.com/QwenLM/zwen-code/pull/4832) | **Extensions diagnostic HTTP/ACP endpoint** | Exposes installed extension status via `GET /workspace/extensions`. Enables remote monitoring of extension health. |
| [#4812](https://github.com/QwenLM/zwen-code/pull/4812) | **`POST /session/:id/branch` for session forking** | Remote clients can now fork sessions via JSONL transcript cloning — no history replay needed. |
| [#4824](https://github.com/QwenLM/zwen-code/pull/4824) | **OOM prevention: compact API/UI history under memory pressure** | Three targeted fixes for old-space exhaustion: microcompaction on Hook messages, API history trimming, and memory-pressure-triggered compaction. |
| [#4829](https://github.com/QwenLM/zwen-code/pull/4829) | **OAuth refresh timeout** | Prevents CLI startup from hanging indefinitely when the OAuth refresh endpoint accepts connection but never responds. |
| [#4828](https://github.com/QwenLM/zwen-code/pull/4828) | **Preserve shared `baseUrl` on auth refresh** | Fixes regression where user-configured endpoint URLs were overwritten by provider defaults after token refresh. |
| [#4780](https://github.com/QwenLM/zwen-code/pull/4780) | **`/fork` background-agent command** | Spawns a non-blocking background agent inheriting full conversation context. Reports results back through the existing background-agent channel. |
| [#4816](https://github.com/QwenLM/zwen-code/pull/4816) | **`/settings` slash command for web-shell** | Full-stack settings management: API routes, SDK client, React hooks, keyboard-navigable UI — complete daemon-side settings control. |
| [#4613](https://github.com/QwenLM/zwen-code/pull/4613) | **Model & approval-mode state sync across shared-session clients** | Eliminates duplicate/dropped broadcasts when multiple clients (chat, terminal, IDE) share a single daemon session. |
| [#4773](https://github.com/QwenLM/zwen-code/pull/4773) | **ACP WebSocket transport (RFD phase 2)** | Complete WebSocket transport coexisting with SSE. Depends on PR #4827. Enables persistent, low-latency connections for real-time clients. |

Other notable activity:
- [#4793](https://github.com/QwenLM/zwen-code/pull/4793): Coerces non-string tool params from self-hosted LLMs (LMStudio, sglang, vllm) — fixes `SchemaValidator` rejections on edit/write operations.
- [#4647](https://github.com/QwenLM/zwen-code/pull/4647): Replaces broken native clipboard module with `wl-paste`/`xclip` on Linux.
- [#4798](https://github.com/QwenLM/zwen-code/pull/4798): Injects current date on every user query to prevent stale temporal context.
- [#4705](https://github.com/QwenLM/zwen-code/pull/4705): Runtime language switching via `POST /session/:id/language`.
- [#2838](https://github.com/QwenLM/zwen-code/pull/2838): Bun runtime support (3-5x faster startup).
- [#4490](https://github.com/QwenLM/zwen-code/pull/4490): Daemon-mode integration merge — 46 commits, 386 files, +115k/−12k LOC.
- [#3165](https://github.com/QwenLM/zwen-code/pull/3165): MiniMax provider with M3 default model.
- [#4831](https://github.com/QwenLM/zwen-code/pull/4831): Fixes extension examples not being included in bundle assets.

## 5. Feature Request Trends

Three dominant themes emerge from the issue and PR corpus:

1. **Daemon & multi-client architecture** — The single largest investment area. The community is building toward a full HTTP/ACP/WebSocket daemon that supports IDE extensions, web shells, and SDK consumers simultaneously. Tracking issues [#4514](https://github.com/QwenLM/zwen-code/issues/4514) and [#4782](https://github.com/QwenLM/zwen-code/issues/4782) are the north stars.

2. **Provider flexibility & resilience** — Dynamic multi-model switching ([#1206](https://github.com/QwenLM/zwen-code/issues/1206)), fallback models ([#4830](https://github.com/QwenLM/zwen-code/issues/4830)), and self-hosted LLM compatibility ([PR #4793](https://github.com/QwenLM/zwen-code/pull/4793), [PR #3165](https://github.com/QwenLM/zwen-code/pull/3165)) are recurring requests. Users want to mix cloud and local models without friction.

3. **Runtime & performance optimization** — Bun support ([PR #2838](https://github.com/QwenLM/zwen-code/pull/2838)), OOM prevention ([PR #4824](https://github.com/QwenLM/zwen-code/pull/4824)), and memory compaction reflect demand for reliable long-running sessions, especially in CI and agent-loop workloads.

## 6. Developer Pain Points

- **Authentication brittleness** — OAuth refresh hangs ([PR #4829](https://github.com/QwenLM/zwen-code/pull/4829)) and baseUrl clobbering ([PR #4828](https://github.com/QwenLM/zwen-code/pull/4828)) cause silent failures at startup. Both fixed in today's nightly.
- **Self-hosted LLM incompatibilities** — Models served via LMStudio/sglang/vllm return non-string tool params, causing validation failures in core edit operations. [PR #4793](https://github.com/QwenLM/zwen-code/pull/4793) addresses this with type coercion.
- **Linux desktop support gaps** — Clipboard image paste remains broken on WSL2+Wayland. Maintainer-acknowledged bug with a fix in review ([PR #4647](https://github.com/QwenLM/zwen-code/pull/4647)).
- **Air-gapped/LAN initialization lockup** — Users on internal networks can't proceed past initialization ([#4550](https://github.com/QwenLM/zwen-code/issues/4550)). No workaround yet; needs offline-first configuration support.
- **Long-running session stability** — OOM from unbounded history growth ([PR #4824](https://github.com/QwenLM/zwen-code/pull/4824)) and stale date context ([PR #4798](https://github.com/QwenLM/zwen-code/pull/4798)) affect reliability in extended agent workflows.
- **Vim mode and compact mode rendering bugs** — Keybinding leaks and full-screen flashing degrade the terminal UX for power users ([#4794](https://github.com/QwenLM/zwen-code/issues/4794), [#4675](https://github.com/QwenLM/zwen-code/issues/4675)).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-08

## 1. Today's Highlights
The DeepSeek TUI community experienced a massive surge in quality-of-life improvements and critical bug fixes. Core contributor @HUQIANTAO submitted a series of comprehensive PRs addressing systemic security vulnerabilities, concurrency bugs, and silent error handling. Simultaneously, the architectural groundwork for the **v0.9.0 release** is actively being laid through a highly coordinated "staged command-boundary refactor," bringing modular strategy patterns and Gherkin E2E acceptance testing to the TUI's command dispatch system.

## 2. Releases
No new official releases were published in the last 24 hours. The repository is currently in an active stabilization and feature-harvesting phase, integrating changes into the main v0.9.0 integration branch.

## 3. Hot Issues
1. **[#2791 [OPEN] Refactor command dispatch to modular strategy pattern](https://github.com/Hmbown/CodeWhale/issues/2791)**: A major architectural proposal to break down the monolithic command dispatch into focused modules. This is driving the current v0.9.0 development cycle.
2. **[#2870 [OPEN] EPIC: Staged command-boundary refactor](https://github.com/Hmbown/CodeWhale/issues/2870)**: Acting as the master tracker for Issue #2791, this epic organizes the massive refactor into smaller, mergeable layers to ensure system stability.
3. **[#2886 [OPEN] Add Gherkin E2E coverage for tool lifecycle](https://github.com/Hmbown/CodeWhale/issues/2886)**: A forward-looking request to implement behavior-driven development (BDD) acceptance tests before moving further into the command routing refactor.
4. **[#2706 [OPEN] v0.9.0 Hugging Face provider polish](https://github.com/Hmbown/CodeWhale/issues/2706)**: Highlights ongoing efforts to make the Hugging Face provider route robust, including route validation, aliases, and documentation fixes.
5. **[#2872 [OPEN] CI process hangs at verify step (Smoke Tests)](https://github.com/Hmbown/CodeWhale/issues/2872)**: A critical CI/CD blocker reported by the community where automated pipelines hang during health checks on localhost, requiring investigation.
6. **[#1257 [CLOSED] Improve the confirmation flow](https://github.com/Hmbown/CodeWhale/issues/1257)**: A highly relatable UX request asking to remove the friction of pressing 'Enter' twice for confirmations. Its closure indicates the upcoming v0.9.0 may have resolved this.

*(Note: 6 total issues updated in the last 24 hours; all highlighted above).*

## 4. Key PR Progress
1. **[#2880 [OPEN] Fix critical bugs in tools, client, and commands](https://github.com/Hmbown/CodeWhale/pull/2880)**: Addresses 9 critical bugs, including UTF-8 boundary panics in PDF text extraction and data corruption issues in the TUI tooling.
2. **[#2882 [OPEN] Fix security bugs in execution policy](https://github.com/Hmbown/CodeWhale/pull/2882)**: A crucial security PR patching 5 vulnerabilities, including a bypass flaw in the deny rules via whitespace manipulation.
3. **[#2883 [OPEN] Fix concurrency bugs](https://github.com/Hmbown/CodeWhale/pull/2883)**: Resolves 5 async runtime bugs related to mutex poisoning and thread exhaustion that previously caused cascading panics.
4. **[#2881 [OPEN] Fix error handling — log instead of swallowing](https://github.com/Hmbown/CodeWhale/pull/2881)**: Fixes 11 instances where errors were silently discarded via `let _ =` or `.ok()`, significantly improving debuggability.
5. **[#2871 [CLOSED] Layer 1: clean command support boundaries](https://github.com/Hmbown/CodeWhale/pull/2871)**: The first merged step in the command refactor epic, clearing out dead code and public helpers without altering the folder structure.
6. **[#2878 [CLOSED] Layer 2: add command parity harness](https://github.com/Hmbown/CodeWhale/pull/2878)**: Introduces a metadata completeness and alias lookup registry, ensuring no commands are lost during the ongoing refactor.
7. **[#2887 [CLOSED] Add Gherkin acceptance E2E harness example](https://github.com/Hmbown/CodeWhale/pull/2887)**: Merges the initial BDD testing infrastructure for the tool lifecycle, setting the standard for future command testing.
8. **[#2874 [CLOSED] Slim runtime_prompt to minimal tag](https://github.com/Hmbown/CodeWhale/pull/2874)**: A smart performance tweak that moves policy descriptions to the system prompt, reducing the recurring token cost of transient messages.
9. **[#2873 [CLOSED] feat(config): add hotbar slot persistence](https://github.com/Hmbown/CodeWhale/pull/2873)**: Implements the config foundation for custom UI hotbar slots (1-8), moving the TUI toward highly customizable key-dispatch actions.
10. **[#2762 [OPEN] v0.9.0 stewardship integration](https://github.com/Hmbown/CodeWhale/pull/2762)**: The central integration branch acting as the staging ground for contributor credit, stabilization, and local release builds.

## 5. Feature Request Trends
*   **Architectural Modularity:** A clear trend is emerging around breaking down monolithic structures (specifically command dispatching) into modular, strategy-pattern-based designs.
*   **Robust Provider Support:** Expanding and polishing alternative AI backends, specifically Hugging Face (`HF_TOKEN` routing, validation) and local models.
*   **Advanced Execution Policies:** Users want more granular control over tool execution. The demand is rising for specialized modes (e.g., "YOLO" execution vs. "Agent-style" approvals) and "ask-only" permission schemas.
*   **Deep Customization:** Requests like custom hotbar persistence and improved model pickers show a desire from power users to tailor the TUI interface to their specific workflows.

## 6. Developer Pain Points
*   **Opaque Debugging:** Systemic swallowing of errors (highlighted by PR #2881) has historically made it incredibly difficult for developers to diagnose failures and trace data loss.
*   **Concurrency Instability:** Mutex handling and thread spawning issues are causing hard crashes (panics) and thread exhaustion, pointing to growing pains in the app's async runtime.
*   **CI/CD Reliability:** Flaky tests and pipeline hangs (like the nix sandbox issues and localhost smoke test timeouts) are creating friction for contributors trying to merge code.
*   **Configuration Drift:** Discrepancies between shipped provider routes, environment variable aliases, and actual documentation have caused unnecessary setup friction.

</details>