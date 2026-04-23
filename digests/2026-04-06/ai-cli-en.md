# AI CLI Tools Community Digest 2026-04-06

> Generated: 2026-04-05 22:03 UTC | Tools covered: 7

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

# AI CLI Tools Ecosystem Cross-Tool Analysis Report
**Report Date:** 2026-04-06 | **Analyst:** Senior Technical Analyst, AI Developer Tools

---

## 1. Ecosystem Overview

The AI CLI landscape is currently defined by a race toward **agentic autonomy** and **context management sophistication**. While token consumption anxiety (specifically regarding "invisible" background usage) has emerged as a shared critical pain point across all major platforms, the technical responses differ: OpenAI and Gemini are pursuing architectural overhauls (WebRTC, Episodic Memory), while community-driven tools like Kimi are debating foundational rewrites to TypeScript. The ecosystem is shifting from simple chat interfaces to complex, multi-agent orchestration systems that require robust session forking, memory persistence, and cross-platform stability.

---

## 2. Activity Comparison

| Tool | Active Issues (24h) | Active PRs (24h) | Releases | Top Theme |
| :--- | :---: | :---: | :---: | :--- |
| **Claude Code** | 10+ | 10+ | None | **Token Drain** (3-5x increase reports) |
| **OpenAI Codex** | 10+ | 10+ | None | **Stability** (macOS Kernel Panics) |
| **Gemini CLI** | 10+ | 10+ | None | **Architecture** (Context Management) |
| **Copilot CLI** | 10+ | 3 (Closed) | None | **Extensibility** (Session Forking) |
| **Kimi CLI** | 8+ | 8+ | None | **Rewrite** (Python → TypeScript) |
| **OpenCode** | 10+ | 10+ | None | **Auth/Quota** (Copilot Billing Bug) |
| **Qwen Code** | 10+ | 10+ | None | **Autonomy** (Programmatic Config) |

*Note: "Active" refers to issues/PRs with updates or significant engagement in the digest.*

---

## 3. Shared Feature Directions

The following requirements are appearing simultaneously across unrelated tool communities, signaling industry-wide convergence:

*   **Advanced Context & Memory Management:**
    *   **Need:** Moving from simple chat history to structured, persistent memory.
    *   **Evidence:** Claude Code users want "Session auto-save" and "PreCompact hooks"; Gemini CLI is building an "Episodic Context Manager"; Copilot CLI users are requesting "Session Forking" to branch context; Qwen Code is implementing "thinking block retention."
*   **Multi-Agent Orchestration:**
    *   **Need:** Features allowing multiple AI agents to collaborate or for one agent to spawn specialized sub-agents.
    *   **Evidence:** OpenCode users are demanding "Agent Teams" (#12661); OpenAI Codex is refining "Watchdog namespace tools" for parent-management; Claude Code is iterating on "Cowork" features.
*   **"Fast" / "YOLO" Modes:**
    *   **Need:** Unattended execution modes that bypass confirmations for speed or automation.
    *   **Evidence:** Kimi CLI added "YOLO mode" to Web UI; Gemini CLI implemented `--fast` mode; Qwen Code added "ConfigTool" for autonomous model switching.
*   **Platform Parity (Windows):**
    *   **Need:** Equal stability and feature support for Windows environments.
    *   **Evidence:** Critical bugs flagged in Claude Code (FreeBSD/TLS), OpenAI Codex (Mojibake), Copilot CLI (No stdout), Gemini CLI (Execution failure), and Qwen Code (MSYS2 crash).

---

## 4. Differentiation Analysis

| Tool | Strategic Focus & Technical Approach |
| :--- | :--- |
| **Claude Code** | **Enterprise Agentic Workflows.** Focuses on "Cowork" VMs and hooks. Currently suffering from scaling pains (token drain) but leads in requested enterprise features (multi-account load balancing). |
| **OpenAI Codex** | **Real-Time & Infrastructure.** heavily investing in low-latency communication (WebRTC migration) and IDE integration. Currently battling critical stability issues (kernel panics) on macOS. |
| **Gemini CLI** | **Architectural "Correctness".** Focused on deep engineering problems like AST-aware tooling and LLM-suggested security policies. Aiming for a "smart" CLI that understands code structure and security context natively. |
| **Copilot CLI** | **Developer Experience (DX) & Extensibility.** Focus is on fitting into the existing GitHub/VS Code ecosystem (MCP configs, LSP timeouts). Less active code velocity than others, but high strategic feature requests (Session forking). |
| **Kimi CLI** | **Modern Stack & UI.** Distinguishing itself by proposing a rewrite to Bun + TypeScript + React Ink for a "native" feel. Focused on multimodal inputs and web UI parity. |
| **OpenCode** | **Open Agnostic Platform.** Focuses on supporting *any* model (Ollama, Bedrock, Copilot) and connecting disparate systems. High focus on plugin architecture and proxy support for enterprise flexibility. |
| **Qwen Code** | **Agent Autonomy.** pushing boundaries of what the agent can do without user intervention (programmatic config switching, auto-model selection). Strong focus on UI/UX polish (markdown tables, follow-up suggestions). |

---

## 5. Community Momentum & Maturity

*   **Highest Velocity (Iteration):** **Gemini CLI** and **OpenCode** show the highest complexity of active PRs (architectural refactors, security policy engines), indicating rapid maturation of the core platform.
*   **Highest User Engagement (Pain):** **Claude Code** currently has the most "heat," with massive engagement on token limit issues (#38335 with 425 comments). This suggests a large, active, and currently frustrated user base.
*   **Highest Technical Ambition:** **Kimi CLI**'s proposed Python-to-TypeScript rewrite and **OpenAI Codex**'s WebRTC migration represent the highest technical risks/rewards currently in motion.
*   **Stagnation Risk:** **Copilot CLI** shows lower PR activity (mostly closed housekeeping PRs) compared to competitors, relying more on feature requests than rapid code iteration in this snapshot.

---

## 6. Trend Signals

1.  **The "Context Rot" Crisis:** Across all tools, users are hitting context limits. The "infinite context" promise is failing in practice due to implementation details (compaction, retention policies). **Signal:** Expect a wave of "Episodic Memory" and "Tiered Context" features in Q2/Q3 2026.
2.  **Usage Transparency is Non-Negotiable:** "Token Anxiety" is the top pain point. Users are rebelling against invisible background token consumption (compaction, indexing). **Signal:** Tools that offer granular, real-time usage dashboards will win trust. Those that don't will face churn.
3.  **The "Headless" Agent:** Features like Qwen's `ConfigTool` and Kimi's `YOLO mode` indicate developers want agents that can run fully automated workflows (change models, approve actions, execute code) without human bottlenecks. **Signal:** CLI tools are transitioning from "assistants" to "automation orchestrators."
4.  **Windows is Still an Afterthought:** Despite market share, Windows-specific bugs (encoding, paths, execution) remain critical open issues in 5/7 tools. **Signal:** There is a market opportunity for a tool that delivers a "first-class" Windows CLI experience.

---

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** `github.com/anthropics/skills` (as of 2026-04-06)

---

## 1. Top Skills Ranking

Based on community engagement, discussion volume, and PR activity, these are the most prominent Skills currently in development:

| Rank | Skill | Author | Status | Focus |
|------|-------|--------|--------|-------|
| 1 | **document-typography** | PGTBoos | OPEN | Document quality control |
| 2 | **frontend-design** (revamp) | justinwetch | OPEN | UI/UX design guidance |
| 3 | **skill-quality-analyzer** + **skill-security-analyzer** | eoviciu | OPEN | Meta-skills for quality & security |
| 4 | **ODT (OpenDocument)** | GitHubNewbie0 | OPEN | Document format handling |
| 5 | **CONTRIBUTING.md** | narenkatakam | OPEN | Community health |
| 6 | **shodh-memory** | varun29ankuS | OPEN | Persistent AI agent memory |
| 7 | **testing-patterns** | 4444J99 | OPEN | Comprehensive testing guidance |
| 8 | **sensory (macOS automation)** | AdelElo13 | OPEN | Native AppleScript automation |

### Detailed Analysis

**1. [document-typography](https://github.com/anthropics/skills/pull/514)** (PR #514)
- **Functionality:** Prevents typographic issues in AI-generated documents including orphan word wrap, widow paragraphs, and numbering misalignment
- **Discussion Highlights:** Addresses a universal pain point—"These issues affect every document Claude generates. Users rarely ask for good typography, but notice when it's wrong."
- **Status:** OPEN (Created 2026-03-04)

**2. [frontend-design improvement](https://github.com/anthropics/skills/pull/210)** (PR #210)
- **Functionality:** Revises the frontend-design skill for improved clarity, actionability, and internal coherence
- **Discussion Highlights:** Focus on making every instruction executable within a single conversation; steering behavior without over-constraining
- **Status:** OPEN (Created 2026-01-05, actively updated through March)

**3. [Meta-Skills: Quality & Security Analyzers](https://github.com/anthropics/skills/pull/83)** (PR #83)
- **Functionality:** Two complementary meta-skills:
  - `skill-quality-analyzer`: Evaluates across 5 dimensions (Structure, Documentation, Examples, Resources, Testing)
  - `skill-security-analyzer`: Security assessment for skills
- **Discussion Highlights:** Represents the "skills for skills" meta-layer gaining traction in the ecosystem
- **Status:** OPEN (Created 2025-11-06, one of the longest-running active PRs)

**4. [ODT Skill](https://github.com/anthropics/skills/pull/486)** (PR #486)
- **Functionality:** OpenDocument Format (`.odt`) creation, template filling, and HTML parsing—ISO standard format for LibreOffice, OpenOffice, Google Docs compatibility
- **Discussion Highlights:** Strong case for open standard support vs. proprietary formats
- **Status:** OPEN (Created 2026-03-01)

**5. [CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** (PR #509)
- **Functionality:** Addresses community health gap—repo currently scores 25% on GitHub's community health metrics
- **Discussion Highlights:** Most impactful single addition for contributor guidance
- **Status:** OPEN (Closes #452)

**6. [shodh-memory](https://github.com/anthropics/skills/pull/154)** (PR #154)
- **Functionality:** Persistent memory system for AI agents maintaining context across conversations; teaches Claude when to call `proactive_context` and how to structure rich memories
- **Discussion Highlights:** Addresses the stateless limitation of conversational AI
- **Status:** OPEN (Created 2025-12-19)

**7. [testing-patterns](https://github.com/anthropics/skills/pull/723)** (PR #723)
- **Functionality:** Comprehensive testing stack coverage including Testing Trophy philosophy, unit testing (AAA pattern), React component testing, and more
- **Discussion Highlights:** Addresses "what to test vs. what NOT to test"
- **Status:** OPEN (Created 2026-03-22)

**8. [sensory (macOS automation)](https://github.com/anthropics/skills/pull/806)** (PR #806)
- **Functionality:** Native macOS automation via AppleScript/osascript instead of screenshot-based computer use; two-tier permission system
- **Discussion Highlights:** More efficient alternative to vision-based computer use for macOS
- **Status:** OPEN (Created 2026-03-29)

---

## 2. Community Demand Trends

Analysis of Issues reveals the following most-anticipated directions:

### 🔥 Top Demand Areas

| Trend | Description | Key Issues |
|-------|-------------|------------|
| **Trust & Security** | Namespace impersonation concerns; community skills under `anthropic/` namespace creating trust boundary vulnerabilities | [#492](https://github.com/anthropics/skills/issues/492) (👍2) |
| **Skill Reliability** | Skills disappearing, loading errors (404s), upload failures (500s) | [#62](https://github.com/anthropics/skills/issues/62) (👍1), [#406](https://github.com/anthropics/skills/issues/406) (👍4), [#403](https://github.com/anthropics/skills/issues/403) |
| **Enterprise Features** | Org-wide skill sharing, Bedrock compatibility, SSO support for skill-creator tools | [#228](https://github.com/anthropics/skills/issues/228) (👍3), [#29](https://github.com/anthropics/skills/issues/29), [#532](https://github.com/anthropics/skills/issues/532) (👍1) |
| **Skill Evaluation Framework** | `run_eval.py` not triggering skills (0% trigger rate); need better testing infrastructure | [#556](https://github.com/anthropics/skills/issues/556) (👍6) |
| **Duplicate Skill Management** | `document-skills` and `example-skills` plugins installing identical content | [#189](https://github.com/anthropics/skills/issues/189) (👍7) |
| **MCP Integration** | Exposing Skills as MCPs for standardized API interfaces | [#16](https://github.com/anthropics/skills/issues/16) |
| **Skill Creator Improvements** | Best practices updates, reduced verbosity, YAML validation fixes | [#202](https://github.com/anthropics/skills/issues/202) (👍1), [#36](https://github.com/anthropics/skills/pull/36) |

### 📈 Emerging Themes

1. **Quality Engineering Revival** — PR [#659](https://github.com/anthropics/skills/pull/659) (`quality-playbook`) brings traditional QA practices back with AI efficiency
2. **Agent Governance** — Issue [#412](https://github.com/anthropics/skills/issues/412) (closed but influential) proposed safety patterns for AI agent systems
3. **Enterprise Integration** — SAP predictive analytics (PR [#181](https://github.com/anthropics/skills/pull/181)), codebase inventory audits (PR [#147](https://github.com/anthropics/skills/pull/147))
4. **Multi-modal Generation** — Masonry AI for image/video generation (PR [#335](https://github.com/anthropics/skills/pull/335))

---

## 3. High-Potential Pending Skills

These active PRs have strong community interest and may merge soon:

| PR | Skill | Why It Matters | Merge Likelihood |
|----|-------|----------------|------------------|
| [#541](https://github.com/anthropics/skills/pull/541) | **docx tracked changes fix** | Critical bug fix for document corruption when adding tracked changes to documents with existing bookmarks | 🔴 High (bug fix) |
| [#538](https://github.com/anthropics/skills/pull/538) | **PDF case-sensitivity fix** | Fixes 8 case-sensitivity mismatches breaking on Linux/case-sensitive filesystems | 🔴 High (bug fix) |
| [#539](https://github.com/anthropics/skills/pull/539) | **skill-creator YAML validation** | Prevents silent YAML parsing failures | 🔴 High (bug fix) |
| [#509](https://github.com/anthropics/skills/pull/509) | **CONTRIBUTING.md** | Closes open issue #452; addresses community health gap | 🟡 Medium |
| [#83](https://github.com/anthropics/skills/pull/83) | **Meta-analyzers** | Long-running (Nov 2025); comprehensive quality/security tooling | 🟡 Medium |
| [#210](https://github.com/anthropics/skills/pull/210) | **frontend-design revamp** | Actively updated through March 2026 | 🟡 Medium |
| [#740](https://github.com/anthropics/skills/pull/740) | **11-skill bundle** | Large contribution (draft status) including Pre-Deployment Validator, UX Journeymapper, etc. | 🟢 speculative |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for reliable, enterprise-grade infrastructure**—addressing skill persistence bugs (disappearing skills, 404/500 errors), establishing trust boundaries between official and community skills, and enabling organizational skill sharing—before expanding into advanced automation capabilities.

---

# Claude Code Community Digest — 2026-04-06

## Today's Highlights

The Claude Code community is dominated by escalating concerns over **Max plan usage limits**, with multiple high-engagement issues reporting 3-5x token consumption increases since late March 2026. No official releases were published today. On the ecosystem front, several open-source initiative PRs gained visibility, and feature requests around session management, hooks, and multi-account workflows continue to grow.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#38335](https://github.com/anthropics/claude-code/issues/38335) — **Max plan session limits exhausted abnormally fast** | 425 comments, 341 👍. The highest-engagement issue describes CLI users on Max plans hitting session limits dramatically faster since March 23, 2026. No official acknowledgment yet. |
| 2 | [#769](https://github.com/anthropics/claude-code/issues/769) — **Screen flickering during in-progress calls** | 303 comments, 293 👍. A long-standing TUI bug affecting Windows and Linux users. Still open after nearly a year. |
| 3 | [#40524](https://github.com/anthropics/claude-code/issues/40524) — **Conversation history invalidated on subsequent turns** | CLOSED but notable: 103 comments, 156 👍. A regression causing context loss mid-session; recently resolved. |
| 4 | [#41930](https://github.com/anthropics/claude-code/issues/41930) — **Widespread abnormal usage limit drain** | Aggregates reports across all paid tiers. Calls for formal communication from Anthropic. |
| 5 | [#41506](https://github.com/anthropics/claude-code/issues/41506) — **Token usage increased 3-5x on Max plan** | Corroborates #38335 with detailed before/after metrics. |
| 6 | [#22543](https://github.com/anthropics/claude-code/issues/22543) — **Cowork feature creates 10GB VM bundle** | 55 comments, 141 👍. Performance degradation linked to Cowork VM bloat on macOS. |
| 7 | [#30640](https://github.com/anthropics/claude-code/issues/30640) — **Native installer fails on FreeBSD** | Reopened after bot closure; highlights platform support gaps. |
| 8 | [#2682](https://github.com/anthropics/claude-code/issues/2682) — **MCP tools not available in conversation UI** | Tools list successfully but don't appear for actual use. |
| 9 | [#37490](https://github.com/anthropics/claude-code/issues/37490) — **Background task fork bomb** | Background Bash tasks respawn infinitely when hung, causing system instability. |
| 10 | [#43886](https://github.com/anthropics/claude-code/issues/43886) — **Context compaction interrupts commit sequences** | Fresh issue (4 comments) requesting compaction never orphan git commits. |

---

## Key PR Progress

| # | PR | Description |
|---|----|----|
| 1 | [#39148](https://github.com/anthropics/claude-code/pull/39148) — **preserve-session plugin** | Adds path-independent UUID-based session history for moved/renamed projects. Commands: `/preserve-session:fix`, etc. |
| 2 | [#41518](https://github.com/anthropics/claude-code/pull/41518) — **Fully Open Source Claude Code** | Extracted 1906 TypeScript sources from npm sourcemap; builds with Bun. Community-driven reverse engineering effort. |
| 3 | [#41447](https://github.com/anthropics/claude-code/pull/41447) — **Open source claude code ✨** | Another open-source initiative PR; references multiple related issues. |
| 4 | [#43824](https://github.com/anthropics/claude-code/pull/43824) — **Fix YAML shell injection** | High-severity security fix for GitHub Actions workflow. |
| 5 | [#41837](https://github.com/anthropics/claude-code/pull/41837) — **arsenal-reliability plugin** | CLOSED. Added 6 reliability pattern skills (circuit breaker, retry, etc.). |
| 6 | [#43751](https://github.com/anthropics/claude-code/pull/43751) — **Main** | Unclear purpose; likely spam or placeholder. |
| 7 | *(Trending from issues)* | Multiple users requesting **multi-account load balancing** (#43978) — currently closed but reflects strong demand. |
| 8 | *(Trending from issues)* | **PreCompact hook** (#43946) — requests hook before context compaction. |
| 9 | *(Trending from issues)* | **Session auto-save at project level** (#43974) — persistent project context management. |
| 10 | *(Trending from issues)* | **Attach to existing cowork sessions** (#41273) — avoid spawning duplicate coworkers. |

---

## Feature Request Trends

1. **Session & Context Management** — Auto-save sessions, preserve state across clears, path-independent history.
2. **Hooks API Expansion** — `PreCompact` hook, better state capture before compaction events.
3. **Multi-Account / Load Balancing** — Distribute workload across multiple Max subscriptions.
4. **Cowork Improvements** — Attach to existing sessions, fix VM bloat, restore 1M context window.
5. **MCP Enhancements** — Singleton resource handling, computer-use server visibility.
6. **Platform Support** — FreeBSD installer, WSL clipboard, Windows TLS/VPN edge cases.

---

## Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Max plan token drain** | 5+ issues, 500+ combined 👍, no formal response |
| **Context loss during compaction** | Git commits orphaned, task state discarded |
| **Cowork performance regression** | 10GB VM bundles, degraded UI responsiveness |
| **MCP tool visibility** | Tools connect but don't appear in conversation UI |
| **Cross-platform edge cases** | FreeBSD ignored, WSL clipboard broken, Windows TLS quirks |
| **Lack of official communication** | Multiple issues explicitly request Anthropic acknowledgment |

---

*Digest generated from GitHub activity on 2026-04-06.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-04-06

## 1. Today's Highlights

The Codex engineering team is aggressively modernizing the TUI's real-time communication infrastructure, with four stacked PRs currently introducing **WebRTC support** to replace legacy WebSockets. On the stability front, the latest CLI release (`v0.118.0`) is facing significant scrutiny, with multiple reports of **macOS kernel panics** and **high CPU usage** on both desktop and CLI platforms. Meanwhile, usability improvements are landing for international users, specifically fixes for **CJK text navigation** and special character encoding on Windows.

## 2. Releases

No new stable releases were published in the last 24 hours. The community is actively monitoring issues related to the recent `v0.118.0` CLI release.

## 3. Hot Issues

1.  **[#14593] Token Consumption Anomaly**
    *   **Why:** This is the most active issue (433 comments). Users report that the extension is "burning tokens" at an unsustainable rate, impacting Business subscriptions.
    *   **Reaction:** High frustration among heavy users; requests for better transparency regarding background context usage.
    *   [Link](https://github.com/openai/codex/issues/14593)

2.  **[#16866] Critical: macOS Kernel Panics (os_refcnt overflow)**
    *   **Why:** Users on Apple Silicon report that `v0.118.0` causes full system crashes (kernel panic) twice in one day.
    *   **Reaction:** Critical severity; users advise holding off on updates until root cause is identified.
    *   [Link](https://github.com/openai/codex/issues/16866)

3.  **[#16231] High CPU Usage on macOS (Regression)**
    *   **Why:** The VS Code extension `26.325` causes significant CPU spikes and overheating on M5 Pro chips.
    *   **Reaction:** Users are reverting to older extension versions to maintain system stability.
    *   [Link](https://github.com/openai/codex/issues/16231)

4.  **[#16849] VS Code "Code Helper" CPU Loop**
    *   **Why:** A bug in the `open-in-targets` handler throws errors every minute, causing the VS Code Helper process to peg CPU at 100%+.
    *   **Reaction:** Technical deep-dive by users identified the `staleTime` polling loop as the culprit.
    *   [Link](https://github.com/openai/codex/issues/16849)

5.  **[#16847] Context Compaction vs. Usage Limits**
    *   **Why:** Users report that automatic context compaction consumes usage limits even when `/status` shows available capacity, leading to unexpected lockouts.
    *   **Reaction:** Confusion over how background tasks count toward visible quotas.
    *   [Link](https://github.com/openai/codex/issues/16847)

6.  **[#2558] TUI Truncation in Zellij**
    *   **Why:** A persistent bug where scrolling history is truncated/overwritten in the Zellij terminal multiplexer.
    *   **Reaction:** High interest (109 upvotes) from terminal power users; issue remains open/investigative.
    *   [Link](https://github.com/openai/codex/issues/2558)

7.  **[#16868] `/resume` Missing Thread Names**
    *   **Why:** Despite adding thread renaming, the interactive `codex resume` picker fails to display these names.
    *   **Reaction:** Affects workflow navigation; users find it hard to distinguish between threads.
    *   [Link](https://github.com/openai/codex/issues/16868)

8.  **[#16862] Orphaned Processes on Terminal Close**
    *   **Why:** Closing a terminal window without `/exit` leaves orphaned Codex processes consuming ~80-100% CPU.
    *   **Reaction:** Identified as a cleanup/handling issue specific to `v0.118.0`.
    *   [Link](https://github.com/openai/codex/issues/16862)

9.  **[#15949] Windows App Reopens After Close**
    *   **Why:** The Windows desktop app fails to terminate completely and relaunches itself after a normal close action.
    *   **Reaction:** Affects user control and system resource management on Windows.
    *   [Link](https://github.com/openai/codex/issues/15949)

10. **[#13743] Mojibake on Windows CLI**
    *   **Why:** Special characters (e.g., Norwegian æ, å, ø) are garbled when written by the CLI on Windows.
    *   **Reaction:** Highlighting ongoing encoding struggles for non-ASCII users on Windows.
    *   [Link](https://github.com/openai/codex/issues/13743)

## 4. Key PR Progress

1.  **[#16805 - #16769] WebRTC Migration (Stack)**
    *   A massive 4-part stack replacing WebSocket transport with WebRTC for realtime audio, including echo cancellation and new auth handling.
    *   [Link](https://github.com/openai/codex/pull/16805)

2.  **[#16829] Fix CJK Word Navigation**
    *   Fixes a TUI bug where `Option/Alt+Left` skipped entire CJK sentences instead of logical word segments.
    *   [Link](https://github.com/openai/codex/pull/16829)

3.  **[#16833] Fix Fast Mode Toggle Regression**
    *   Fixes a bug where turning `/fast off` failed to clear the `priority` service tier on the server until restart.
    *   [Link](https://github.com/openai/codex/pull/16833)

4.  **[#16831] Speed up `/mcp` Inventory**
    *   Addresses a performance regression where listing MCP tools waited on slow probes, freezing the TUI.
    *   [Link](https://github.com/openai/codex/pull/16831)

5.  **[#16827] Device Code Auth via App Server**
    *   Refactors TUI auth to route through the app server, enabling auth for remote sessions and fixing animation bugs.
    *   [Link](https://github.com/openai/codex/pull/16827)

6.  **[#16822] Resume Picker UI Fixes**
    *   Improves timestamp stability and headers ("Created"/"Updated") in the resume selection menu.
    *   [Link](https://github.com/openai/codex/pull/16822)

7.  **[#16181] Watchdog Namespace Tools**
    *   Introduces a deferred `watchdog` namespace for parent-management tools, refining the agent spawning architecture.
    *   [Link](https://github.com/openai/codex/pull/16181)

8.  **[#16706] Analytics: Steering Metadata**
    *   Part of a stack adding native turn timestamps and feature plumbing for better internal analytics/steering.
    *   [Link](https://github.com/openai/codex/pull/16706)

9.  **[#16825] Fix Flaky Permissions Test (Windows)**
    *   Stabilizes CI by preventing retries of real shell commands after assertion failures on Windows.
    *   [Link](https://github.com/openai/codex/pull/16825)

10. **[#16823] Fix Flaky Metadata Test (Windows)**
    *   Normalizes git remote URLs in tests to fix byte-for-byte comparison failures on Windows CI.
    *   [Link](https://github.com/openai/codex/pull/16823)

## 5. Feature Request Trends

*   **Configurable Plan Storage:** Users want control over where Codex saves plan files (e.g., `.codex/plans/` vs global) to better integrate with project workflows (#12878).
*   **Hook Output Suppression:** Requests for a native setting to hide ephemeral "Running hook..." status messages in the TUI to reduce visual noise (#15497).
*   **Improved Resume Search:** Requests to make the `codex resume` picker searchable by thread name, not just ID (#10315, #16868).
*   **Usage Transparency:** Strong demand for clearer visibility into how "compaction" tasks consume token limits (#16847).

## 6. Developer Pain Points

*   **Resource Heavy:** A recurring theme across recent issues is the extension/CLI causing excessive CPU load, overheating laptops, and even causing kernel panics, particularly on macOS.
*   **Token Anxiety:** Developers are frustrated by "invisible" token consumption, where background processes (like compaction) drain quotas without clear UI feedback.
*   **Windows Encoding:** Persistent issues with UTF-8/character encoding on Windows make the CLI difficult to use for international teams.
*   **Terminal Multiplexer Support:** Users of modern terminal tools (Zellij, tmux) frequently face rendering glitches, indicating the TUI needs better compatibility layers.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-04-06

## 1. Today's Highlights
No new releases were published today, but the maintainers are heavily focused on refining the "Agent" experience and "Core" platform stability. Key activities include significant architectural work on **Episodic Context Management** to handle conversation history more efficiently and **AST-aware tooling** to improve codebase mapping accuracy. There is also a strong push toward security and usability, with new proposals for **LLM-suggested policy scoping** to reduce approval fatigue and a critical P1 investigation into Windows execution failures.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues

1.  **[P1] Windows Execution Failure via npm wrapper** ([#20697](https://google-gemini/gemini-cli/issue/20697))
    *   **Context:** A critical bug preventing Windows users from running the CLI globally via npm due to a `"-S" is not recognized` error.
    *   **Impact:** Blocks adoption on Windows environments; currently has 8 comments and active engagement seeking a fix.

2.  **LLM-Suggested Policy Scoping for Approvals** ([#21641](https://google-gemini/gemini-cli/issue/21641))
    *   **Context:** A proposal (now closed as a feature request, but driving active PRs) to use LLMs to generate smart, granular approval policies (e.g., allowing specific `git` subcommands) rather than broad heuristics.
    *   **Impact:** Directly addresses "approval fatigue" and improves the security UX.

3.  **Slow Startup Performance** ([#24721](https://google-gemini/gemini-cli/issue/24721))
    *   **Context:** Users report significant latency when initializing the CLI.
    *   **Impact:** Affects developer flow; community is asking for optimization of the bootstrap phase.

4.  **Text Scrambling in SSH Sessions** ([#24202](https://google-gemini/gemini-cli/issue/24202))
    *   **Context:** The UI becomes unreadable when using the CLI over SSH from a Windows client to a Linux host.
    *   **Impact:** Critical for remote development workflows; maintainers are investigating SSH detection helpers ([#24546](https://google-gemini/gemini-cli/issue/24546)).

5.  **AST-Aware File Reads & Mapping** ([#22745](https://google-gemini/gemini-cli/issue/22745))
    *   **Context:** Maintainer epic to investigate integrating AST (Abstract Syntax Tree) awareness into tools.
    *   **Impact:** Could drastically reduce token usage and improve code navigation accuracy by reading specific method bounds rather than whole files.

6.  **Subagent Awareness of Approval Modes** ([#23582](https://google-gemini/gemini-cli/issue/23582))
    *   **Context:** Subagents currently attempt tool calls that violate active constraints (like Plan Mode) because they lack context.
    *   **Impact:** Wastes turns and tokens; fixing this aligns subagent behavior with user intent.

7.  **Search Tool Output Overload** ([#24634](https://google-gemini/gemini-cli/issue/24634))
    *   **Context:** The search text tool can dump massive amounts of untruncated content into context.
    *   **Impact:** Clutters history and consumes context window; needs compact formatting defaults.

8.  **Memory Routing: Global vs. Project** ([#22819](https://google-gemini/gemini-cli/issue/22819))
    *   **Context:** Request for distinct memory storage scopes—user preferences (Global) vs. codebase specific (Project).
    *   **Impact:** Essential for maintaining context relevance across different workspaces.

9.  **Limiting Tool Scope (>128 Tools Error)** ([#24246](https://google-gemini/gemini-cli/issue/24246))
    *   **Context:** The agent hits a 400 error when too many tools are enabled.
    *   **Impact:** Limits extensibility; requires smarter tool filtering logic.

10. **Unsafe Object Cloning** ([#22863](https://google-gemini/gemini-cli/issue/22863))
    *   **Context:** The model generates partial/unsafe clones of complex types.
    *   **Impact:** Leads to runtime type errors; requires better prompting or schema enforcement.

## 4. Key PR Progress

1.  **feat(security): LLM-suggested policy scoping** ([#24722](https://google-gemini/gemini-cli/pull/24722))
    *   Implements the logic to use Gemini Flash Lite to suggest meaningful scopes for tool approvals, reducing the need for manual policy writing.

2.  **feat(core): Implement V0 Episodic Context Manager** ([#24643](https://google-gemini/gemini-cli/pull/24643))
    *   Major refactor replacing monolithic string history with an immutable pipeline (squashing, masking, compression) to manage context window efficiently.

3.  **feat(webui): Browser-based chat GUI** ([#24369](https://google-gemini/gemini-cli/pull/24369))
    *   Introduces a local web dashboard (`/web` command) with Material You design and SSE streaming for a GUI-based interaction mode.

4.  **fix(cli): resolve bunx execution -S error on Windows** ([#24653](https://google-gemini/gemini-cli/pull/24653))
    *   Fixes the Windows-specific shebang issue causing the `"-S" not found` error reported in Issue #20697.

5.  **feat(cli): add JSON output support for list-sessions** ([#24711](https://google-gemini/gemini-cli/pull/24711))
    *   Enables structured output for session lists, improving automation and integration capabilities.

6.  **feat(cli): prompt to resume session** ([#24720](https://google-gemini/gemini-cli/pull/24720))
    *   Automatically detects if a user's prompt matches a previous session and offers to resume, improving continuity.

7.  **feat: standalone LSP integration** ([#23464](https://google-gemini/gemini-cli/pull/23464))
    *   Integrates Language Server Protocol capabilities directly into the CLI for real-time compiler diagnostics and semantic queries without an IDE.

8.  **fix: command injection vulnerability** ([#24170](https://google-gemini/gemini-cli/pull/24170))
    *   Security fix to prevent shell substitution syntax (`$()`, backticks) in arguments from being executed as code.

9.  **feat(cli): implement --fast mode** ([#24717](https://google-gemini/gemini-cli/pull/24717))
    *   Adds a flag to skip pre-flight requests and saving for quick, one-shot prompt execution.

10. **feat(cli): allow -i/--prompt-interactive with piped stdin** ([#23414](https://google-gemini/gemini-cli/pull/23414))
    *   Enables programmatic/pipe-based inputs to trigger interactive sessions, bridging the gap between scripting and REPL usage.

## 5. Feature Request Trends
*   **Intelligent Context Management:** Strong demand for smarter handling of conversation history, specifically memory routing (global vs. project) and context compression to save tokens.
*   **Enhanced Security UX:** Users want fewer interruptions. Trends point toward "approval fatigue" solutions, specifically granular scopes and LLM-assisted policy generation.
*   **IDE-less Developer Experience:** Requests for AST tools and LSP integration indicate a desire for the CLI to act as a full-fledged coding environment without relying on external editors.
*   **Platform Parity:** Consistent requests to fix Windows-specific path and execution issues (npm, SSH, terminal rendering).

## 6. Developer Pain Points
*   **Windows Stability:** The platform remains a sore spot, with failures on global npm installs and SSH rendering glitches causing unusable states.
*   **Performance Overhead:** Developers are feeling the weight of the CLI's bootstrap time and pre-flight checks, leading to requests for a "fast" mode.
*   **Context "Leakage":** Tools outputting too much data (Search, Edit failures) is cluttering the context window, leading to degraded model performance.
*   **Agent Reliability:** Issues with subagents ignoring modes or unsafe cloning objects suggest frustration with the agent's ability to self-correct or adhere to strict type safety.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-04-06

## 1. Today's Highlights
No new releases were published in the last 24 hours, but the community remains highly active in proposing architectural improvements for session management and extensibility. Key discussions include requests for **session forking** to handle parallel tasks and **per-repository MCP server configuration** to enhance project-specific context. Meanwhile, Windows users continue to report significant friction regarding CLI execution and output handling.

## 2. Releases
No new releases recorded for this period.

## 3. Hot Issues
1.  **[OPEN] [Feature] Fork/Clone Session for Parallel Tasks** [#2526](github/copilot-cli Issue #2526)
    *   **Why it matters:** Proposes a "session branching" feature to allow developers to pursue side-quests without polluting the main conversation context.
    *   **Reaction:** high interest from power users managing complex workflows.

2.  **[OPEN] [Feature] Per-Repository MCP Server Config** [#2528](github/copilot-cli Issue #2528)
    *   **Why it matters:** Requests `.github/mcp.json` support to define Model Context Protocol servers at the project level rather than globally.
    *   **Reaction:** Viewed as essential for teams using distinct tooling per repository.

3.  **[OPEN] [Bug] CLI Produces No Stdout in Child Process (Windows)** [#2525](github/copilot-cli Issue #2525)
    *   **Why it matters:** Blocks headless automation and scripting on Windows (via `Start-Process`).
    *   **Reaction:** Critical blocker for CI/CD integration on Windows environments.

4.  **[OPEN] [Bug] Newer Versions Fail to Run on Windows 11** [#1164](github/copilot-cli Issue #1164)
    *   **Why it matters:** Ongoing triage for a regression where newer CLI versions exit immediately with no output on Windows.
    *   **Reaction:** Increasing frustration among Windows developers; workaround involves rolling back to older versions.

5.  **[OPEN] [Feature] Configurable LSP Initialization Timeout** [#2520](github/copilot-cli Issue #2520)
    *   **Why it matters:** Large .NET repos (6000+ files) cause OmniSharp to exceed the hardcoded 60s timeout.
    *   **Reaction:** Strong support from enterprise users with large codebases.

6.  **[OPEN] [Bug] `copilot --continue` Exits with Code 1 After Model Change** [#2524](github/copilot-cli Issue #2524)
    *   **Why it matters:** Editing `~/.copilot/config.json` to swap models causes the CLI to crash on restart.
    *   **Reaction:** Affects users who frequently switch models for different tasks.

7.  **[OPEN] [Feature] Persist `/add-dir` Across Sessions** [#2284](github/copilot-cli Issue #2284)
    *   **Why it matters:** Users must re-allow directories for file access every time a new session starts.
    *   **Reaction:** Seen as a quality-of-life necessity for workflow efficiency.

8.  **[OPEN] [Bug] Thai Language Output Renders Incompletely** [#2521](github/copilot-cli Issue #2521)
    *   **Why it matters:** Non-Latin character rendering remains inconsistent, specifically truncating Thai text.
    *   **Reaction:** Highlights ongoing internationalization (i18n) gaps in the terminal UI.

9.  **[OPEN] [Feature] Disable Bottom-Aligned Input** [#2529](github/copilot-cli Issue #2529)
    *   **Why it matters:** The UI "jumping" when slash commands are typed is visually distracting.
    *   **Reaction:** Request for UI stability/alignment options.

10. **[OPEN] [Feature] Sub-agent Zoom/Focus** [#2517](github/copilot-cli Issue #2517)
    *   **Why it matters:** Proposes a `/focus` command to observe or interact with background sub-agents.
    *   **Reaction:** indicates user demand for transparency into agent reasoning chains.

## 4. Key PR Progress
*Activity was limited to closed external contributions and security maintenance.*
*   **PR #2523 [CLOSED]**: "Copilot Project Agent Admin" - Closed. Appears to be a security-related or spam submission involving command injection patterns.
*   **PR #2522 [CLOSED]**: "Feature/ish i686 support" - Closed. Likely an incomplete or invalid architecture support PR.
*   **PR #2316 [CLOSED]**: "Dev" - Closed. General housekeeping or stale branch cleanup.

## 5. Feature Request Trends
*   **Advanced Context Management:** Users are moving beyond simple chat history. There is a strong trend toward **persistent context** (saving directories/user settings per project) and **context branching** (forking sessions to handle parallel tasks without cross-contamination).
*   **Deep Workspace Integration:** Requests for `.github/mcp.json` and LSP timeout configurations show a trend toward deeper, repository-specific customization of the underlying AI and language server infrastructure.

## 6. Developer Pain Points
*   **Windows Reliability:** The combination of the general execution failure (#1164) and the headless output bug (#2525) indicates that Windows remains a second-class citizen regarding stability and automation support.
*   **Session Ephemeralness:** Developers are frustrated by the lack of "memory" between sessions, specifically having to constantly re-configure allowed directories, user settings, and LSP servers.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest (2026-04-06)

## 1. Today's Highlights
The community is buzzing with activity surrounding a proposed **full architectural rewrite from Python to Bun + TypeScript** (PR #1707), which promises significant performance improvements. On the stability front, users are reporting critical bugs in version 1.30.0, specifically regarding **JSON serialization errors** and **task timeout handling**. Additionally, new feature PRs are expanding the CLI's capabilities with a "YOLO" auto-approve mode for the Web UI and a new `/btw` command for side queries.

## 2. Releases
*No new releases were recorded in the last 24 hours. The latest stable version remains 1.30.0.*

## 3. Hot Issues
We are tracking 8 active issues updated in the last 24 hours. Here are the most impactful:

1.  **[Architectural Discussion] Rewrite to TypeScript (Ref #1707)**
    *   **Context:** While technically a PR, the linked issue/discussion around PR #1707 is the day's biggest topic. The proposal to rewrite the CLI from Python to **Bun + TypeScript + React Ink** aims to resolve latency and dependency issues inherent in the current Python build.
2.  **[Bug] JSON Serialization Error in ToolResult (#1762)**
    *   **Why it matters:** A breaking bug in v1.30.0 where `ToolResult` returns trigger an `invalid type: sequence` error during JSON serialization. This interrupts the agentic loop on Linux platforms.
    *   **Status:** Open, active investigation needed.
3.  **[Bug] Task Timeout Parameters Ignored (#1761)**
    *   **Why it matters:** Users report that v1.30 no longer respects configured timeout parameters, leading to persistent timeouts during long-running code generation tasks.
4.  **[Enhancement] Three-tier Rules System (#1747)**
    *   **Why it matters:** A highly requested feature to bring Kimi CLI to parity with competitors like Claude Code. It proposes **Global, User, and Project** level rules for better context management.
    *   **Community:** Positive reception; users want stricter adherence to coding styles per project.
5.  **[Bug] Windows Terminal Image Paste Failure (#1617)**
    *   **Why it matters:** A persistent usability block for Windows developers. `Ctrl-V` fails to paste images into the terminal, hindering multimodal coding workflows.
6.  **[Bug] MCP Connection Crashes Web UI (#1766)**
    *   **Why it matters:** Stability issue where a failing MCP server (e.g., port conflict) crashes the entire Web UI worker rather than degrading gracefully.
7.  **[Bug] Terminal Click Interrupts Execution (#1765)**
    *   **Why it matters:** A UX flaw where clicking inside the terminal window during execution triggers a "Task interrupted by user" error, catching developers off guard.
8.  **[Bug] Kimi Web Auto-Refresh (#1623)**
    *   **Why it matters:** The Web interface refreshes periodically, disrupting the user experience and potentially losing context or state during active sessions.

## 4. Key PR Progress
Significant contributions are focusing on stability, DX (Developer Experience), and architecture.

1.  **[Major] refactor: rewrite from Python to Bun + TypeScript + React Ink (#1707)**
    *   **Summary:** A massive overhaul replacing the Python codebase with a TypeScript/Bun stack. Includes 166 TS/TSX files and 37 tests. Aims for a native terminal experience via React Ink.
2.  **[Feature] feat(yolo-mode): add YOLO support to web interface (#1767)**
    *   **Summary:** Implements an auto-approve (YOLO) mode toggle in the Web UI, allowing the agent to execute operations without manual confirmation.
3.  **[Feature] feat(btw): add /btw side question command (#1743)**
    *   **Summary:** Adds a `/btw` slash command to ask quick questions (e.g., "what is this function?") without interrupting the main agent's context or history.
4.  **[Fix] fix: normalize empty tool_call arguments (#1764)**
    *   **Summary:** Addresses serialization edge cases where empty arguments caused crashes. Ensures `None` or `""` are normalized to `"{}"`.
5.  **[Feature] feat(logging): add diagnostic logging (#1756)**
    *   **Summary:** Enhances debuggability by adding 25+ logging call sites and bundling these logs into the `kimi export` command.
6.  **[Fix] Add format validation for WriteFile tool (#1738)**
    *   **Summary:** Introduces validation for JSON, XML, and Markdown files immediately after writing to prevent syntax errors from corrupting project files.
7.  **[Fix] feat(logging): filter unsupported content types (#1749)**
    *   **Summary:** Fixes compatibility with OpenAI-compatible APIs by filtering out unsupported `VideoURLPart` and `AudioURLPart` types.
8.  **[Fix] fix(diff): align inline highlight offsets (#1709)**
    *   **Summary:** A precision fix for the diff viewer to correctly handle tab-expanded text alignment.

## 5. Feature Request Trends
*   **Structured Configuration Hierarchy:** There is a strong demand for a "Three-tier Rules System" (Global -> User -> Project) to manage prompt context and coding guidelines more effectively (Issue #1747).
*   **Unattended/Automated Workflows:** The rise of "YOLO mode" PRs and auto-approve features suggests users want to use Kimi CLI for background tasks or CI/CD integration where manual approval is a bottleneck.
*   **Multimodal Input Improvements:** Requests for better image handling in terminals (Issue #1617) indicate a push toward richer, multimodal inputs directly from the CLI.

## 6. Developer Pain Points
*   **v1.30.0 Stability Regression:** Multiple reports (Issues #1761, #1762) indicate that the latest release (1.30.0) has introduced breaking changes regarding timeouts and JSON serialization.
*   **Fragile Web UI:** The Web UI appears sensitive to backend errors, such as MCP connection failures causing full crashes (Issue #1766) or auto-refreshes disrupting work (Issue #1623).
*   **Interrupted Execution:** Users are frustrated by accidental task interruptions caused by standard terminal interactions like mouse clicks (Issue #1765).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-04-06

## 1. Today's Highlights

No new releases were published today, but the community remains highly active on the stability and integration front. The most critical discussion revolves around **GitHub Copilot authentication** unexpectedly consuming premium user quotas (#8030), alongside significant efforts to refactor the tool system for better agent isolation. Additionally, a new **Memory Megathread** has been pinned to systematically address long-standing context rot and memory leak issues.

---

## 2. Releases

**None** — No new versions were released in the last 24 hours.

---

## 3. Hot Issues

1.  **[OPEN] [#8030 Copilot auth sets too many requests as "user"](https://github.com/anomalyco/opencode/issues/8030)**
    *   **Why:** This is the most active issue (210 comments). Users report that agent-initiated requests are incorrectly flagged as "user" requests, rapidly depleting premium quotas.
    *   **Reaction:** High frustration among users relying on Copilot Opus 4.5; urgent requests for a patch to correctly set the `X-Initiator` header.

2.  **[OPEN] [#20695 Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)**
    *   **Why:** Maintainers have centralized scattered memory leak reports here.
    *   **Reaction:** Users are actively submitting heap snapshots to help debug context rot and performance degradation in long sessions.

3.  **[OPEN] [#12661 Feature: Agent Teams](https://github.com/anomalyco/opencode/issues/12661)**
    *   **Why:** Highly upvoted (104 👍) request for multi-agent orchestration similar to "Claude Code's Agent Teams."
    *   **Reaction:** Strong community consensus that native agent collaboration/teams are critical for complex workflows.

4.  **[OPEN] [#20650 Kimi k2.5 tool calling failures](https://github.com/anomalyco/opencode/issues/20650)**
    *   **Why:** The Kimi k2.5 model is generating malformed JSON during tool calls, breaking execution.
    *   **Reaction:** Users are currently blocked from using this specific model effectively within OpenCode.

5.  **[OPEN] [#531 Support HTTP_PROXY & HTTPS_PROXY](https://github.com/anomalyco/opencode/issues/531)**
    *   **Why:** A long-standing issue (from 2025) affecting users behind corporate firewalls.
    *   **Reaction:** Essential for enterprise adoption; users are bumping this to prioritize proxy support for LLM API access.

6.  **[OPEN] [#21100 Regression: `e.diffs.map is not a function`](https://github.com/anomalyco/opencode/issues/21100)**
    *   **Why:** Critical crash in the Web UI (v1.3.15) when handling session diffs.
    *   **Reaction:** Immediate blockage for web users; fix likely required before next release.

7.  **[OPEN] [#1549 Watch files for instructions](https://github.com/anomalyco/opencode/issues/1549)**
    *   **Why:** Request for "Aider-style" file watching where the AI reacts to code comments.
    *   **Reaction:** seen as a high-value feature for automating small refactors without switching context to the chat interface.

8.  **[OPEN] [#20995 Gemma 4 tool calling via Ollama fails](https://github.com/anomalyco/opencode/issues/20995)**
    *   **Why:** Streaming `tool_calls` from Ollama's OpenAI-compatible API are not being recognized by OpenCode.
    *   **Reaction:** Blocking local inference users who want to use the latest Gemma models with tools.

9.  **[OPEN] [#21098 Plugin install fails behind proxy](https://github.com/anomalyco/opencode/issues/21098)**
    *   **Why:** NPM plugin installation ignores system proxy settings.
    *   **Reaction:** Highlights a gap in the plugin system's network configuration, reinforcing the need for Issue #531.

10. **[OPEN] [#4251 Concurrent sessions interference](https://github.com/anomalyco/opencode/issues/4251)**
    *   **Why:** Running multiple OpenCode sessions on different repos causes them to interfere with each other.
    *   **Reaction:** Critical for power users managing monorepos or multi-repo architectures.

---

## 4. Key PR Progress

1.  **[OPEN] [#21127 Fix: Recover from malformed session diffs](https://github.com/anomalyco/opencode/pull/21127)**
    *   Adds defensive handling for `e.diffs.map` errors to prevent UI crashes. Directly addresses Issue #21100.

2.  **[OPEN] [#21052 Refactor: Tool system context removal](https://github.com/anomalyco/opencode/pull/21052)**
    *   **Major Architectural Change.** Removes agent context from `Tool.init()` to ensure tools behave consistently regardless of the agent calling them.

3.  **[OPEN] [#21129 Feat: Display model info in session list](https://github.com/anomalyco/opencode/pull/21129)**
    *   Improves usability by showing which model was used directly in the session list sidebar.

4.  **[OPEN] [#21124 Refactor: Tiered Context Management](https://github.com/anomalyco/opencode/pull/21124)**
    *   **Feature.** Proposes a new tiered context system to prevent "context rot" in long autonomous sessions.

5.  **[OPEN] [#18988 Feat: AWS SSO auto-refresh for Bedrock](https://github.com/anomalyco/opencode/pull/18988)**
    *   Enables automatic credential renewal for AWS Bedrock users, removing the need to manually re-authenticate.

6.  **[OPEN] [#20934 Feat: Buffer stdin during TUI startup](https://github.com/anomalyco/opencode/pull/20934)**
    *   Preserves keystrokes typed while the app is booting, fixing a common source of user frustration ("I typed a command but nothing happened").

7.  **[OPEN] [#20773 Fix: Use session CWD for command substitution](https://github.com/anomalyco/opencode/pull/20773)**
    *   Ensures shell commands in slash-commands execute in the correct session directory rather than the global cwd.

8.  **[OPEN] [#18767 Feat: Mobile Touch Optimization](https://github.com/anomalyco/opencode/pull/18767)**
    *   Improves the Web/Desktop app experience on tablets and touchscreens.

9.  **[OPEN] [#18007 Feat: Session start lifecycle hook](https://github.com/anomalyco/opencode/pull/18007)**
    *   Adds a `session.start` hook for plugins, allowing custom initialization logic (e.g., loading specific tools or context).

10. **[OPEN] [#20715 Fix: Downgrade MCP 'Method not found' errors](https://github.com/anomalyco/opencode/pull/20715)**
    *   Reduces log noise by demoting non-critical MCP "Method not found" errors to info level.

---

## 5. Feature Request Trends

*   **Multi-Agent Orchestration:** Significant demand for "Agent Teams" (#12661) where multiple specialized agents can collaborate on a single task.
*   **Local/Offline Model Integration:** Frequent issues/requests regarding Ollama compatibility (#20995) and private providers like Maple AI (#10434).
*   **IDE & UI Parity:** Requests to bring CLI features (like Revert/Fork #9661) to the Web/Desktop app, and better integration with editors like Zed (#4240).
*   **Context & Memory Management:** "Context rot" is a top concern. Users want smarter context retention (#21124) and memory leak fixes (#20695).
*   **Workflow Automation:** Features like "Watch Files" (#1549) and "Delayed Queues" (#5408) to enable more autonomous background workflows.

---

## 6. Developer Pain Points

*   **Proxy & Firewall Support:** The lack of native HTTP/S proxy support is a major blocker for enterprise users and those in restricted regions (#531, #21098).
*   **Quota/API Auth Issues:** The Copilot auth bug (#8030) is burning through user quotas, creating financial/usage anxiety.
*   **Web UI Stability:** The `e.diffs.map` error (#21100, #19270) is a recurring crash that disrupts the web experience.
*   **Model Compatibility:** Rapid changes in external model APIs (Gemma 4, Kimi k2.5) are breaking tool-calling functionality, leading to "hit or miss" experiences with newer models.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-04-06

## 1. Today's Highlights
The Qwen Code community is actively discussing potential project consolidation, with users requesting the takeover of the **iflow cli** project due to its impending shutdown. Technical contributions are surging, focusing heavily on **agent autonomy** (programmatic config switching), **context management** (retaining "thinking" blocks), and **UI polish** (markdown tables and terminal rendering). Several critical bugs regarding Windows environments and WeChat integration were also flagged.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues

1.  **[Request] Take over `iflow cli` project ([#2721](https://github.com/QwenLM/qwen-code/issues/2721))**
    *   **Why it matters:** Users are lobbying for Qwen Code to absorb the `iflow cli` project, which is shutting down. The community notes that `iflow` had superior workflows in specific areas, suggesting a potential opportunity for feature integration or migration.
2.  **VSCode Extension Settings & Confusion ([#1370](https://github.com/QwenLM/qwen-code/issues/1370))**
    *   **Why it matters:** A long-standing issue highlighting a lack of documentation and UI for settings in the VSCode extension. Users are struggling to configure models and behaviors, indicating a gap in the IDE companion experience.
3.  **Excessive Permission Requests in CLI ([#2906](https://github.com/QwenLM/qwen-code/issues/2906))**
    *   **Why it matters:** A high-friction user experience where the CLI requests permissions 7-10 times per conversation. Compared to competitors like Codex or Claude Code, this is seen as a significant workflow blocker.
4.  **Missing Qwen 3.6-plus in Coding Plans ([#2844](https://github.com/QwenLM/qwen-code/issues/2844))**
    *   **Why it matters:** After updating to v0.14.0, users expected the new 3.6-plus model to be available for "coding plans" but found it missing. This blocks developers from utilizing the latest model capabilities in automated workflows.
5.  **Feature: Follow-up Suggestions in Web UI ([#2523](https://github.com/QwenLM/qwen-code/issues/2523))**
    *   **Why it matters:** Users want "Follow-up Suggestions" (similar to Claude Code) integrated into the Web UI to suggest the next logical action after a task completes, streamlining the development loop.
6.  **Bug: Silent Removal of Manual Configs ([#2454](https://github.com/QwenLM/qwen-code/issues/2454))**
    *   **Why it matters:** A critical configuration bug where using the `/model` slash command wipes out manually added models in `settings.json`. This causes data loss and frustration for advanced users customizing their setups.
7.  **Kudos: Significant Code Quality Improvement ([#2887](https://github.com/QwenLM/qwen-code/issues/2887))**
    *   **Why it matters:** Positive feedback highlighting that Qwen Code is excelling in complex tasks (Prisma, Vue 3, Docker) with better context understanding and lower error rates. A morale booster indicating the product direction is working.
8.  **Unwanted "Co-authored-by" in Git Commits ([#2899](https://github.com/QwenLM/qwen-code/issues/2899))**
    *   **Why it matters:** Qwen Code automatically injects a "Co-authored-by" trailer into git commits. Users consider this unwanted noise in their contribution history and are asking for an opt-out mechanism.
9.  **WeChat Integration Header Issues ([#2908](https://github.com/QwenLM/qwen-code/issues/2908))**
    *   **Why it matters:** A technical deep-dive revealing that missing HTTP headers (`iLink-App-Id`) are causing session timeouts in the WeChat channel. This blocks reliable usage for a specific but significant user base.
10. **JetBrains Terminal Flickering ([#2903](https://github.com/QwenLM/qwen-code/issues/2903))**
    *   **Why it matters:** UI flickering in JetBrains terminals makes the tool unusable for that IDE's users. It relates to ongoing rendering challenges (#1778) with the terminal interface (Ink).

## 4. Key PR Progress

1.  **feat(cli): add /thinkback command ([#2917](https://github.com/QwenLM/qwen-code/pull/2917))**
    *   Adds a new `/thinkback` command to review key decisions and changes in a timeline format, helping users debug the agent's logic.
2.  **feat(core): add ConfigTool for programmatic config ([#2911](https://github.com/QwenLM/qwen-code/pull/2911))**
    *   **Major Feature:** Allows the Agent to programmatically switch models (e.g., from a large analysis model to a small template generator) without user intervention. This enables complex, multi-stage automated workflows.
3.  **feat(core): thinking block retention with idle cleanup ([#2897](https://github.com/QwenLM/qwen-code/pull/2897))**
    *   Optimizes context usage by preserving "thinking" blocks during active sessions but cleaning them up after idle periods, preventing context blowout while maintaining coherence.
4.  **feat(cli): enhance /clear with flags ([#2915](https://github.com/QwenLM/qwen-code/pull/2915))**
    *   Improves the `/clear` command to distinguish between clearing the terminal screen vs. clearing conversation history, preventing accidental data loss.
5.  **fix(cli): improve markdown table rendering ([#2914](https://github.com/QwenLM/qwen-code/pull/2914))**
    *   Fixes broken table layouts in the terminal, specifically handling CJK characters and ANSI colors that previously broke column alignment.
6.  **fix: resolve 3 critical issues ([#2910](https://github.com/QwenLM/qwen-code/pull/2910))**
    *   A "catch-all" fix for `tree-sitter.wasm` ENOENT errors (common in system installations) and other critical path bugs. (Note: PR was closed shortly after opening).
7.  **feat(cli): implement non-interactive /context output ([#2916](https://github.com/QwenLM/qwen-code/pull/2916))**
    *   Enables `/context` to be run non-interactively, extending the SDK control protocol for programmatic token queries.
8.  **feat(tools): add Markdown for Agents support ([#2734](https://github.com/QwenLM/qwen-code/pull/2734))**
    *   Integrates Cloudflare's "Markdown for Agents" spec into the WebFetch tool, potentially reducing token usage by 80% when fetching content.
9.  **fix(vscode): force fresh ACP session ([#2874](https://github.com/QwenLM/qwen-code/pull/2874))**
    *   Fixes a bug where clicking "New Chat" in VSCode silently reused the old session context. Now forces a fresh session reset.
10. **fix: crash on Windows MSYS2 UCRT env ([#2826](https://github.com/QwenLM/qwen-code/pull/2826))**
    *   Fixes a process crash caused by selecting the wrong Bash binary in MSYS2 environments on Windows, improving cross-platform stability.

## 5. Feature Request Trends
*   **Agent Autonomy & Multi-Stage Workflows:** There is a strong push for the agent to manage its own configuration and workflow steps (e.g., auto-switching models for different tasks, see PR #2911).
*   **Context Management:** Users want smarter handling of context, specifically retaining "thinking" blocks for coherence but aggressively compressing or cleaning them to save tokens.
*   **UI/UX Parity:** Requests to bring CLI features (like `/skills`) and Web UI features (like follow-up suggestions) into alignment across all platforms.
*   **External Integrations:** Interest in integrating with or absorbing other tools (like `iflow cli`) and supporting standard specs (like Cloudflare's Markdown for Agents).

## 6. Developer Pain Points
*   **Permission Fatigue:** The frequency of permission prompts (Issue #2906) is a major complaint compared to competitors.
*   **Windows Ecosystem Support:** Recurring issues with specific Windows environments (MSYS2, PowerShell vs. CMD defaults, WSL screenshot pasting) causing crashes or friction.
*   **Configuration Brittleness:** Manual edits to `settings.json` being overwritten by CLI commands is a significant trust issue for power users.
*   **Rendering Glitches:** Terminal flickering (Ink rendering) and markdown table formatting remain persistent annoyances in daily usage.

</details>