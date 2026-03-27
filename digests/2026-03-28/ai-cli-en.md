# AI CLI Tools Community Digest 2026-03-28

> Generated: 2026-03-27 22:04 UTC | Tools covered: 7

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
**Report Date:** 2026-03-28 | **Analyst:** Senior Technical Analyst

---

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing rapid maturation, shifting from basic chat interfaces to sophisticated agentic coding environments. All major players are aggressively implementing **Model Context Protocol (MCP)** support and **plugin architectures** to enable extensibility, signaling a convergence toward standardized tool integration. Enterprise-readiness has become a key differentiator, with emphasis on security models, multiple backend support (Bedrock, Vertex AI), and policy controls. Simultaneously, performance optimization—particularly around **token efficiency**, **context compaction**, and **memory management**—has emerged as a critical battleground as users push these tools against real-world, large-scale codebases.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Latest Release | Release Status |
|------|-------------|-----------|----------------|----------------|
| **Claude Code** | 50 | 9 | v2.1.86 | Active (2 patch releases) |
| **OpenAI Codex** | 10+ | 10 | v0.117.0 | Major release, regression reports |
| **Gemini CLI** | 10 | 10 | v0.36.0-preview.5 | Preview track, stability focus |
| **GitHub Copilot CLI** | 10 | 1 | v1.0.13-1 | Rapid minor iterations |
| **Kimi Code CLI** | 10 | 10 | v1.27.0 | Feature release (UI focus) |
| **OpenCode** | 10 | 10 | None | Development cycle, no release |
| **Qwen Code** | 10 | 10 | v0.14.0-preview.1 | Preview track |

**Notes:** Claude Code shows the highest issue volume (50), indicating an active and vocal user base. OpenAI Codex and Kimi Code both shipped significant feature releases with reported regressions. OpenCode is in an active development phase with architectural refactoring but no new release.

---

## 3. Shared Feature Directions

| Trend | Tools Involved | Specific Requirements |
|-------|----------------|----------------------|
| **MCP Stability & Auth** | Claude Code, OpenAI Codex, GitHub Copilot CLI, OpenCode | Fixing approval prompt loops, OAuth/Entra auth flows, session persistence |
| **Reasoning Visibility** | Claude Code, Gemini CLI | Expose "thinking" traces in TUI and headless/JSON output modes |
| **Session/History Management** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Kimi Code | Path-independent sessions, `/rewind` rollback, project-scoped history |
| **Permission Model Refinement** | Claude Code, GitHub Copilot CLI, OpenCode, Qwen Code | "Always Allow" persistence, tool whitelists, safer defaults, conditional hooks |
| **Platform Parity (Windows)** | Claude Code, OpenAI Codex, OpenCode | Secondary drive access, sandbox/ACL fixes, Ctrl+C conflicts, CRLF handling |
| **Token/Resource Efficiency** | Claude Code, OpenAI Codex, OpenCode, Qwen Code | Disk leak mitigation (46GB+), memory leaks (60GB+), token burn rate optimization |
| **UI/Theming Customization** | OpenAI Codex, Gemini CLI, GitHub Copilot CLI | Tokyo Night theme, alt-screen toggle, compact tool output rendering |
| **Headless/CI Integration** | Gemini CLI, Kimi Code | JSON streaming output, structured exit codes, reasoning traces |

---

## 4. Differentiation Analysis

| Tool | Feature Focus | Target Users | Technical Approach |
|------|--------------|--------------|-------------------|
| **Claude Code** | Enterprise integration, hooks system, context management | Enterprise teams, power users | Plugin ecosystem with conditional hooks, multi-backend support (Bedrock), session ID headers for proxy aggregation |
| **OpenAI Codex** | First-class plugin workflow, TUI modernization | VS Code users, plugin developers | Rust-based core, product-scoped plugin syncing, separating tool definitions from core logic |
| **Gemini CLI** | Spec-Driven Development (SDD), headless orchestration | Teams needing planning/execution separation, CI/CD users | Plan Mode enforcement, native reasoning trace streaming, configurable memory boundaries |
| **GitHub Copilot CLI** | Enterprise policy integration, conversation history | GitHub Enterprise users, BYOM adopters | MCP sampling capability, `/rewind` timeline picker, close VS Code ecosystem integration |
| **Kimi Code CLI** | UI/UX polish, Web interface, design integration | Frontend developers, design-to-code workflows | Incremental markdown streaming, inline diff rendering, Figma MCP requests |
| **OpenCode** | Security defaults, architectural modernization | Security-conscious users, remote deployments | Effect patterns migration, npm/arborist replacing Bun, "safe by default" push |
| **Qwen Code** | External channel integration, local LLM support | Chinese market, messaging platform users, local model enthusiasts | Telegram/WeChat/DingTalk channels, local Ollama support, multi-strategy edit pipeline |

---

## 5. Community Momentum & Maturity

| Category | Tools | Evidence |
|----------|-------|----------|
| **High Velocity, Enterprise Focus** | Claude Code, OpenAI Codex | Claude Code tracks 50 issues daily with enterprise features (Bedrock, multiple accounts). OpenAI Codex shipped major v0.117.0 but faces regression backlash (MCP, TUI). |
| **Rapid Iteration, Stability Challenges** | Gemini CLI, Qwen Code | Both on preview tracks (v0.36.0, v0.14.0). Gemini faces severe latency/hang reports; Qwen addresses IDE token waste and permission persistence. |
| **Niche/Regional Growth** | Kimi Code CLI | Strong UI investment (diff rendering, Web panel), Figma integration requests indicate design-focused adoption. |
| **Active Development, Architectural Shifts** | OpenCode | No releases but heavy refactoring (Effect patterns, Bun→npm). Critical memory leak (60GB+) and Windows UX issues need resolution. |
| **Steady, Policy-Constrained** | GitHub Copilot CLI | Slow PR velocity (1 PR) but steady releases. Enterprise policy friction is the primary blocker for adoption. |

---

## 6. Trend Signals

### Strategic Signals for Technical Decision-Makers

1.  **MCP is the New Standard for Extensibility:** All tools are converging on Model Context Protocol for tool integration. Organizations building internal tooling should prioritize MCP compatibility. *Warning:* Current implementations are brittle—expect authentication regressions and approval loop bugs.

2.  **Security Models Are Polarizing:** A clear split is emerging between "allow by default" (OpenCode, Qwen Code—community pushing back) and "ask by default" approaches. Enterprise deployments should evaluate permission persistence reliability, which is currently broken in multiple tools (Qwen Code, OpenAI Codex).

3.  **Windows is a Second-Class Citizen:** Across nearly all tools, Windows users face disproportionate friction—sandbox ACL failures, Ctrl+C conflicts, CRLF conversions, secondary drive access. Organizations with Windows-heavy developer populations should budget for additional troubleshooting and potential workarounds.

4.  **Resource Leaks Are a Hidden Cost:** Reports of 46GB+ disk leaks (Claude Code) and 60GB+ memory leaks (OpenCode) indicate these tools are not yet production-hardened for long-running or remote deployments. Monitor resource usage aggressively in CI/CD or server contexts.

5.  **Token Efficiency Is the New Performance Metric:** With "burning tokens" as OpenAI Codex's #1 issue (308 comments), cost-aware organizations should evaluate token consumption rates carefully. IDE integration patterns (e.g., Qwen Code's diff acceptance) can inadvertently inflate costs.

6.  **Headless/CI Readiness Is Emerging:** Gemini CLI and Kimi Code are leading in structured output for automation (JSON streaming, exit codes). Teams integrating AI CLI into pipelines should track these features for CI/CD suitability.

---

*End of Report*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** github.com/anthropics/skills | **Snapshot Date:** 2026-03-28

---

## 1. Top Skills Ranking

The following Skills have generated the most community attention via Pull Request activity:

| Rank | Skill | Author | Status | Focus Area |
|------|-------|--------|--------|------------|
| 1 | [document-typography](https://github.com/anthropics/skills/pull/514) | PGTBoos | 🟢 OPEN | Document Quality |
| 2 | [frontend-design](https://github.com/anthropics/skills/pull/210) | justinwetch | 🟢 OPEN | UI/UX Design |
| 3 | [skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83) | eovideu | 🟢 OPEN | Meta-Skills |
| 4 | [ODT (OpenDocument)](https://github.com/anthropics/skills/pull/486) | GitHubNewbie0 | 🟢 OPEN | Document Format |
| 5 | [system-documentation & flowcharts](https://github.com/anthropics/skills/pull/95) | TylerALofall | 🟢 OPEN | Technical Docs |
| 6 | [CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509) | narenkatakam | 🟢 OPEN | Community Health |
| 7 | [SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181) | amitlals | 🟢 OPEN | Enterprise Analytics |
| 8 | [masonry-generate-image-and-videos](https://github.com/anthropics/skills/pull/335) | junaid1460 | 🟢 OPEN | Generative Media |

**Key Highlights:**

- **document-typography (#514)** — Addresses a universal pain point: typographic flaws in AI-generated documents (orphan lines, widow headers, numbering misalignment). High community relevance as it affects "every document Claude generates."

- **frontend-design (#210)** — Substantial revision to improve clarity and actionability. Focuses on making instructions executable within a single conversation context.

- **Meta-Skills (#83)** — Introduces `skill-quality-analyzer` (5-dimension quality evaluation) and `skill-security-analyzer` — tools for evaluating Skills themselves. Represents emerging "Skills for Skills" meta-development.

- **ODT Support (#486)** — Adds comprehensive OpenDocument Text capabilities (creation, template filling, HTML parsing) for ISO-standard document interoperability.

---

## 2. Community Demand Trends

Analysis of open Issues reveals the following anticipated directions:

| Demand Category | Representative Issues | Priority Signals |
|-----------------|----------------------|------------------|
| **Skill Discovery & Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (org-wide sharing), [#452](https://github.com/anthropics/skills/issues/452) (contributing guide) | 👍 2 |
| **Skill Evaluation & Testing** | [#556](https://github.com/anthropics/skills/issues/556) (eval runner broken), [#202](https://github.com/anthropics/skills/issues/202) (skill-creator best practices) | 👍 7 |
| **Agent Memory & Context** | [#154](https://github.com/anthropics/skills/pull/154) (shodh-memory), [#629](https://github.com/anthropics/skills/pull/629) (session-memory) | Active PRs |
| **Platform Parity** | [#646](https://github.com/anthropics/skills/pull/646) (Windows screenshot paste), [#29](https://github.com/anthropics/skills/issues/29) (Bedrock support) | Cross-platform |
| **Security & Governance** | [#492](https://github.com/anthropics/skills/issues/492) (namespace trust boundary), [#412](https://github.com/anthropics/skills/issues/412) (agent governance) | 👍 2 |

**Emerging Themes:**
- **Persistent memory systems** — Multiple PRs addressing context preservation across sessions and compaction
- **Enterprise integration** — SAP analytics, management consulting frameworks, governance patterns
- **Document workflow automation** — Typography, ODT, system documentation, changelog curation
- **MCP integration** — Issue [#16](https://github.com/anthropics/skills/issues/16) proposes exposing Skills as MCP tools

---

## 3. High-Potential Pending Skills

Active PRs with strong community engagement, approaching potential merge:

| Skill | PR | Days Open | Maturity Indicators |
|-------|-----|-----------|---------------------|
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/510) | 25 | Addresses repo health gap; closes #452 |
| **feature-dev fix** | [#363](https://github.com/anthropics/skills/pull/363) | 47 | Bug fix for TodoWrite workflow skipping phases |
| **YAML validation fix** | [#361](https://github.com/anthropics/skills/pull/361) | 45 | Pre-parse check for malformed frontmatter |
| **session-memory** | [#629](https://github.com/anthropics/skills/pull/629) | 15 | Zero-dependency context preservation |
| **8-skill bundle** | [#288](https://github.com/anthropics/skills/pull/288) | 60 | tutorial-builder, quiz-generator, a11y-auditor, changelog-curator, data-storytelling + 3 more |
| **management-consulting** | [#384](https://github.com/anthropics/skills/pull/384) | 43 | Strategic frameworks, business case development |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for persistent agent memory and robust document generation capabilities—two foundational gaps that limit Claude Code's utility in extended professional workflows.**

---

*Report generated from anthropics/skills repository snapshot. All URLs reference live GitHub issues and pull requests.*

---

# Claude Code Community Digest
**Date:** 2026-03-28

---

## 1. Today's Highlights

Two new patch releases (v2.1.85 and v2.1.86) landed yesterday, adding session ID headers for proxy aggregation, support for Jujutsu/Sapling VCS exclusion, and conditional hooks with permission-rule syntax. The community is actively discussing high-impact issues around session limits exhaustion on Max plans and Windows Cowork folder access. Several community plugins are gaining traction, particularly for `/tmp` cleanup and session preservation across directory moves.

---

## 2. Releases

### [v2.1.86](https://github.com/anthropics/claude-code/releases/tag/v2.1.86)
- Added `X-Claude-Code-Session-Id` header to API requests for proxy-level session aggregation without body parsing
- Added `.jj` (Jujutsu) and `.sl` (Sapling) to VCS directory exclusion lists for Grep and file autocomplete
- Fixed `--resume` functionality

### [v2.1.85](https://github.com/anthropics/claude-code/releases/tag/v2.1.85)
- Added `CLAUDE_CODE_MCP_SERVER_NAME` and `CLAUDE_CODE_MCP_SERVER_URL` environment variables to MCP `headersHelper` scripts, enabling one helper to serve multiple servers
- Added conditional `if` field for hooks using permission rule syntax (e.g., `Bash(git *)`) to filter hook execution

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#38335 - Claude Max plan session limits exhausted abnormally fast since March 23](https://github.com/anthropics/claude-code/issues/38335) | **77 comments.** Users report CLI usage consuming Max plan limits at an accelerated rate since March 23. High engagement suggests a potential billing/quota regression affecting paying customers. |
| 2 | [#27302 - Support multiple Connector accounts in Claude Code](https://github.com/anthropics/claude-code/issues/27302) | **83 comments, 108 👍.** Top feature request for users managing multiple accounts under the same connector (e.g., multiple AWS accounts). Critical for enterprise workflows. |
| 3 | [#29583 - Cowork: Cannot use folders outside home directory on Windows](https://github.com/anthropics/claude-code/issues/29583) | **79 comments.** Windows users with secondary drives cannot use Cowork mode. Significant platform parity issue blocking adoption. |
| 4 | [#8477 - Add Option to Always Show Claude's Thinking](https://github.com/anthropics/claude-code/issues/8477) | **49 comments, 178 👍.** Since v2.0.0, thinking blocks are hidden. Highly requested UI enhancement for transparency during reasoning. |
| 5 | [#39381 - VS Code: "Not responding - try stopping" offers no way to stop](https://github.com/anthropics/claude-code/issues/39381) | **60 comments.** Critical UX failure—users lose all progress when Claude gets stuck. Now closed but highlights major IDE integration pain. |
| 6 | [#36168 - Bypass/dangerously skip permissions broken since v2.1.77](https://github.com/anthropics/claude-code/issues/36168) | **23 comments.** Permission bypass modes broken in all versions after v2.1.77. Blocks power users who rely on unattended operation. |
| 7 | [#26018 - Read tool sends requests exceeding 20MB API limit without pre-check](https://github.com/anthropics/claude-code/issues/26018) | **27 comments.** No client-side payload size validation before sending multi-PDF reads. Results in preventable API errors. |
| 8 | [#32668 - Support Amazon Bedrock as backend for Claude Desktop/Cowork](https://github.com/anthropics/claude-code/issues/32668) | **22 comments, 77 👍.** Enterprise users want Bedrock support in Desktop/Cowork matching CLI capabilities. |
| 9 | [#19471 - CLAUDE.md instructions ignored after context compaction](https://github.com/anthropics/claude-code/issues/19471) | **18 comments.** Context compaction appears to drop custom instructions, causing erratic behavior in long sessions. |
| 10 | [#32290 - Claude reads files but ignores actionable instructions](https://github.com/anthropics/claude-code/issues/32290) | **12 comments.** Claude acknowledges instruction file contents but doesn't execute them during tasks. Trust/reliability concern. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | [#39977 - tmp-cleanup plugin for /tmp disk leak mitigation](https://github.com/anthropics/claude-code/pull/39977) | Automatically prunes leaked `.output` files (reported up to 46GB+) and stale temp files. Addresses a significant disk space issue for long-running sessions. |
| 2 | [#39148 - preserve-session plugin for path-independent session history](https://github.com/anthropics/claude-code/pull/39148) | Assigns UUIDs to projects, maintaining session history when directories are renamed, moved, or copied. Directly addresses issue #28745. |
| 3 | [#32755 - edit-verifier plugin for post-edit verification](https://github.com/anthropics/claude-code/pull/32755) | PostToolUse hook that verifies Edit tool success before proceeding. Prevents silent edit failures from whitespace mismatches. |
| 4 | [#39132 - terminal-restore plugin for kitty keyboard protocol cleanup](https://github.com/anthropics/claude-code/pull/39132) | **CLOSED.** Workaround for Ghostty/Kitty/WezTerm terminal corruption on exit. Stop hook resets keyboard protocol state. |
| 5 | [#39916 - tmp-cleanup plugin (earlier iteration)](https://github.com/anthropics/claude-code/pull/39916) | **CLOSED.** Earlier version of the tmp-cleanup approach with three-pass cleanup strategy. |
| 6 | [#39872 - Upgrade Node.js version from 20 to 24](https://github.com/anthropics/claude-code/pull/39872) | Prepares for Node.js 24 LTS. Future-proofing the runtime. |
| 7 | [#39855 - Bash parameter expansion for lowercase conversion in gh.sh](https://github.com/anthropics/claude-code/pull/39855) | Replaces `echo | tr` with `${var,,}` for better performance and special character handling. |
| 8 | [#39043 - Remove "retro-futuristic" recommendation from Frontend Design Skill](https://github.com/anthropics/claude-code/pull/39043) | Skill documentation update removing an unpopular design recommendation. |
| 9 | [#37648 - Update skill-development SKILL.md with complete frontmatter reference](https://github.com/anthropics/claude-code/pull/37648) | Documents all 11 frontmatter fields for skill development. Improves plugin/skill authoring experience. |
| 10 | [#39989 - Bring auto-approve mode to individual Pro/Max plans](https://github.com/anthropics/claude-code/issues/39989) | **CLOSED.** Feature request for auto-approve on non-enterprise plans. Indicates demand for less interactive workflows. |

---

## 5. Feature Request Trends

1. **Thinking/Reasoning Visibility** — Multiple issues (#8477, #33163, #30660) request real-time streaming of extended thinking output and persistent thinking display options.

2. **Enterprise Backend Flexibility** — Strong demand for Amazon Bedrock support in Claude Desktop/Cowork (#32668) and multiple connector account support (#27302).

3. **Terminal/IDE UX Polish** — Custom themes (#1302), Ghostty terminal support (#35351), and visual state indicators (#21894) indicate desire for better developer experience.

4. **Session Resilience** — Path-independent sessions (#28745, #39148) and better context compaction handling (#19471) are recurring themes.

5. **Permission Model Improvements** — Conditional hooks (now in v2.1.85) and hook-based user input events (#10168) for automation.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Disk space leaks** | Multiple PRs (#39977, #39916) address `/tmp` files growing to 46GB+ |
| **Permission bypass regression** | Issue #36168 reports broken bypass modes post-v2.1.77 |
| **Unstoppable hung sessions** | Issue #39381 highlights no recovery path when Claude gets stuck |
| **Context/instruction loss** | Issues #19471 and #32290 report instructions ignored after compaction |
| **Platform parity (Windows)** | Issue #29583 blocks secondary drive usage in Cowork mode |
| **Terminal corruption** | Issue #40011 and PR #39132 address terminal state corruption on exit |
| **Settings file confusion** | Issue #39564 reports Claude writing permissions to wrong settings file |
| **API payload limits** | Issue #26018 lacks client-side 20MB pre-validation |

---

*Digest generated from GitHub activity on 2026-03-28. Total issues tracked: 50 | Total PRs: 9*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest - 2026-03-28

Here is the technical analysis for the `openai/codex` repository activity over the last 24 hours.

## 1. Today's Highlights
OpenAI has released **Codex CLI v0.117.0**, a significant update that elevates **Plugins to a first-class workflow** with product-scoped syncing, a dedicated `/plugins` browser, and improved auth handling. However, the release appears to have introduced **regressions in MCP (Model Context Protocol) stability** and **rendering hooks in the TUI**, leading to a spike in bug reports. The community remains highly active regarding **token consumption rates**, which continues to be the most discussed issue.

## 2. Releases

### **rust-v0.117.0**
This version introduces a major architectural shift towards extensibility and plugin management.
*   **First-class Plugin Workflow:** Codex now syncs product-scoped plugins at startup. Users can browse available plugins via `/plugins`, and install/remove them with clearer authentication and setup flows. (Refs: #15041, #15042, #15195, #15215, #15217, #15264, #15275, #15342, #15580, #15606, #15802)
*   *Note: The changelog snippet "Sub-agents no" was truncated in the source data, suggesting ongoing changes to sub-agent architectures.*

## 3. Hot Issues
We are tracking 10 high-impact issues from the last 24 hours:

1.  **[OPEN] [bug, rate-limits] Burning tokens very fast** (#14593)
    *   **Why it matters:** With 308 comments and 102 upvotes, this is the most critical issue for users. Reports indicate the VS Code extension consumes tokens at an unsustainable rate, impacting Business subscriptions.
    *   [View Issue](https://github.com/openai/codex/issues/14593)
2.  **[OPEN] [enhancement, app] Remote Development in Codex Desktop App** (#10450)
    *   **Why it matters:** Highly requested (456 👍) feature to support remote development (e.g., SSH/Containers) in the Desktop App, similar to VS Code Remote. Currently, the desktop app is limited to local contexts.
    *   [View Issue](https://github.com/openai/codex/issues/10450)
3.  **[OPEN] [bug, mcp, regression] Excessive approval prompts for Playwright MCP** (#13476)
    *   **Why it matters:** Users report that recent changes broke the "approval memory" for MCP tools like Playwright, resulting in constant, repetitive approval prompts that disrupt workflow.
    *   [View Issue](https://github.com/openai/codex/issues/13476)
4.  **[OPEN] [bug, TUI, regression] 0.117.0 upgrade breaks MCP** (#16028)
    *   **Why it matters:** A fresh regression in v0.117.0 where upgrading from v0.114.0 causes MCP initialization failures or "somewhat breaks" functionality.
    *   [View Issue](https://github.com/openai/codex/issues/16028)
5.  **[OPEN] [bug, windows-os, sandbox] apply_patch fails on Windows** (#14675)
    *   **Why it matters:** Windows users are experiencing sandbox refresh errors when applying patches to nested files (`src/**`), effectively blocking edits in standard project structures.
    *   [View Issue](https://github.com/openai/codex/issues/14675)
6.  **[OPEN] [bug, agent] Auto-compaction never triggers** (#16033)
    *   **Why it matters:** A potential regression in v0.117.0 where the automatic context compaction logic fails to activate, risking context overflow errors.
    *   [View Issue](https://github.com/openai/codex/issues/16033)
7.  **[OPEN] [enhancement, TUI] Control over color theme** (#1618)
    *   **Why it matters:** A long-standing request (104 👍) for TUI customization. While closed, recent activity suggests it may be under reconsideration or causing confusion regarding the status.
    *   [View Issue](https://github.com/openai/codex/issues/1618)
8.  **[OPEN] [bug, agent] Web search returns 503 Service Unavailable** (#15945)
    *   **Why it matters:** A widespread service outage affecting both Desktop and CLI web search capabilities, though standard chat functions remain operational.
    *   [View Issue](https://github.com/openai/codex/issues/15945)
9.  **[OPEN] [enhancement, extension] Scope Codex chats to VS Code projects** (#3550)
    *   **Why it matters:** Users find the global "Recent Tasks" list cluttered. Scoping chats to the active workspace is a highly requested organization feature (45 👍).
    *   [View Issue](https://github.com/openai/codex/issues/3550)
10. **[OPEN] [bug, app] Unresponsive for 30s on start** (#15963)
    *   **Why it matters:** Performance regression in the Desktop App (macOS) causing a 30-second freeze upon launch.
    *   [View Issue](https://github.com/openai/codex/issues/15963)

## 4. Key PR Progress
Recent development activity focuses on architectural refactoring (TUI & Tools) and telemetry.

1.  **[OPEN] Remove the legacy TUI split** (#15922)
    *   **Summary:** Major refactor deleting the legacy `tui` directory and consolidating on `tui_app_server`. This is Part 1 of 2 to modernize the terminal interface architecture.
    *   [View PR](https://github.com/openai/codex/pull/15922)
2.  **[OPEN] codex-tools: extract tool spec models** (#16047)
    *   **Summary:** Continues the migration of tool-definition logic from `codex-core` to `codex-tools`, separating passive tool definitions from core client logic.
    *   [View PR](https://github.com/openai/codex/pull/16047)
3.  **[OPEN] fix(core): default approval prompts for custom MCP tools** (#16043)
    *   **Summary:** Addresses issue #13476 by fixing the fail-closed behavior for MCP tools with missing annotations while fixing non-interactive regressions.
    *   [View PR](https://github.com/openai/codex/pull/16043)
4.  **[OPEN] [telemetry] subagent events** (#15915)
    *   **Summary:** Part of a larger stack introducing granular telemetry for threads, turns, and sub-agents to improve observability of agent behavior.
    *   [View PR](https://github.com/openai/codex/pull/15915)
5.  **[CLOSED] Fix /copy regression in tui_app_server** (#16021)
    *   **Summary:** Fixed a bug where the `/copy` command was unavailable in the TUI because the state failed to update after turn completion.
    *   [View PR](https://github.com/openai/codex/pull/16021)
6.  **[OPEN] Add /create-api-key to app-server TUI** (#15687)
    *   **Summary:** Implements a flow to create API keys directly within the TUI, copying them to the clipboard and setting the env var for the current session.
    *   [View PR](https://github.com/openai/codex/pull/15687)
7.  **[OPEN] don't include redundant write roots in apply_patch** (#16030)
    *   **Summary:** Fixes Windows-specific ACL churn and failures by preventing `apply_patch` from marking parent directories as writable if they already are.
    *   [View PR](https://github.com/openai/codex/pull/16030)
8.  **[CLOSED] Fix tui_app_server hook notification rendering** (#16013)
    *   **Summary:** Fixed a regression where `HookStarted`/`HookCompleted` notifications were dropped, making hooks appear silent in the TUI.
    *   [View PR](https://github.com/openai/codex/pull/16013)
9.  **[OPEN] [mcp] Bypass read-only tool checks** (#16044)
    *   **Summary:** Optimization to allow read-only tools to skip guardian routing in auto-approval modes, reducing latency for safe operations.
    *   [View PR](https://github.com/openai/codex/pull/16044)
10. **[OPEN] fix: run project pre-tool hooks after trusted hooks** (#15936)
    *   **Summary:** Security/Logic fix to execute hooks in trust tiers (non-project first, then project) to ensure higher-precedence hooks can block lower-trust ones.
    *   [View PR](https://github.com/openai/codex/pull/15936)

## 5. Feature Request Trends
*   **Session & Context Management:** Strong demand for **tmux-like session management** (#6500) and **project-scoped history** (#3550) to keep workspaces organized.
*   **Remote & Container Support:** Users are pushing for the Desktop App to support **Remote Development** (SSH/Containers) (#10450) to match VS Code capabilities.
*   **Customization & Observability:** Requests for **custom compaction hooks** (#11912) and **machine-readable status output** (`/status --json`) (#16037) indicate power users want more control over the agent's internal state.
*   **TUI Polish:** Continued interest in **theming** (#1618) and standard input behaviors (e.g., `Option + Backspace` support #4341).

## 6. Developer Pain Points
*   **Token Drain:** The "burning tokens" issue (#14593) is the top complaint. Developers feel the extension consumes tokens too aggressively, making it expensive to use for extended coding sessions.
*   **Windows Stability:** The combination of **Sandbox issues** (#15057, #14675) and **ACL churn** makes the Windows experience notably less stable than Linux/macOS.
*   **MCP Regression:** The recent updates have made **MCP servers** (like Playwright) cumbersome to use due to repeated approval prompts, breaking the flow of automated tasks.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-03-28

## 1. Today's Highlights
The Gemini CLI team is actively stabilizing the `v0.36.0` preview track while iterating on the stable `v0.35.2` release. A significant portion of today's activity focuses on **performance reliability**, with multiple reports surfacing regarding severe latency, VPN incompatibilities, and hangs on the newest `gemini-3.1-pro-preview` model. On the engineering front, progress continues on the **Spec-Driven Development (SDD)** architecture and new UI enhancements, including a highly requested feature to expose reasoning traces in headless mode.

## 2. Releases
*   **[v0.36.0-preview.5](https://github.com/google-gemini/gemini-cli/releases/tag/v0.36.0-preview.5):** A new preview build was released, likely containing patches for the sandbox and planning deadlocks seen in recent PRs.
*   **[v0.35.2](https://github.com/google-gemini/gemini-cli/releases/tag/v0.35.2):** A stable channel update, likely addressing critical bugs from the previous cycle.

## 3. Hot Issues
1.  **[CLI Hangs Indefinitely on "This is taking a bit longer" (#22415)](https://github.com/google-gemini/gemini-cli/issues/22415)**
    *   **Context:** Users report the CLI getting stuck in a retry loop with `gemini-3.1-pro-preview`, showing "we're still on it" indefinitely.
    *   **Impact:** High. This blocks development workflows entirely, forcing users to terminate sessions.
2.  **[Gemini-cli Stopped Working Completely - Hangs on LLM Call (#23988)](https://github.com/google-gemini/gemini-cli/issues/23988)**
    *   **Context:** A critical regression where the first prompt takes 15+ minutes or never responds, affecting both v0.35 and v0.36.
    *   **Impact:** Renders the tool unusable for affected users.
3.  **[Persistent Status 429s Too Many Requests (#23900)](https://github.com/google-gemini/gemini-cli/issues/23900)**
    *   **Context:** Pro plan users are hitting rate limits (HTTP 429) despite previously having instant responses.
    *   **Impact:** Indicates a potential change in backend quota handling or a throttling bug.
4.  **[Extremely Slow Access When Using VPN (#24062)](https://github.com/google-gemini/gemini-cli/issues/24062)**
    *   **Context:** Users relying on VPNs for security are experiencing 429 errors and latency.
    *   **Impact:** Accessibility issue for enterprise users in restricted networks.
5.  **[Files Edited While in Plan Mode (#23858)](https://github.com/google-gemini/gemini-cli/issues/23858)**
    *   **Context:** The agent violates plan-mode constraints, modifying files when it should only be planning.
    *   **Impact:** Breaks trust in the "Plan Mode" safety feature.
6.  **[Feature Request: Expose Reasoning Traces via Stream-JSON (#24058)](https://github.com/google-gemini/gemini-cli/issues/24058)**
    *   **Context:** A request to output `{"type": "thought"}` packets in headless mode.
    *   **Impact:** Highly requested for orchestration and debugging in CI/CD pipelines.
7.  **[GSoC: Behavioral Evals & OSS Community (#23331)](https://github.com/google-gemini/gemini-cli/issues/23331)**
    *   **Context:** Tracking project for Google Summer of Code to improve community contributions to quality evals.
    *   **Impact:** Strategic importance for long-term project health.
8.  **[Long-Context & Complex Reasoning Coding Evaluation Dataset (#23316)](https://github.com/google-gemini/gemini-cli/issues/23316)**
    *   **Context:** Proposal for a new benchmark as current ones (SWE-bench) saturate.
    *   **Impact:** Future-proofing the agent's capabilities.
9.  **[Account Limited/Throttled Causing Severe Latency (#24059)](https://github.com/google-gemini/gemini-cli/issues/24059)**
    *   **Context:** Users suspect specific accounts are being flagged or throttled incorrectly.
    *   **Impact:** Inconsistent user experience across accounts.
10. **[Model Creates Tmp Scripts in Random Spots (#23571)](https://github.com/google-gemini/gemini-cli/issues/23571)**
    *   **Context:** The agent litters workspaces with temporary scripts.
    *   **Impact:** Workspace pollution and clean-up overhead.

## 4. Key PR Progress
1.  **[feat(cli): natively emit Thoughts in stream-json mode (#24060)](https://github.com/google-gemini/gemini-cli/pull/24060)**
    *   Implements native exposure of reasoning traces (`GeminiEventType.Thought`) in JSON output, enabling better headless orchestration.
2.  **[fix(core): resolve Plan Mode deadlock (#24047)](https://github.com/google-gemini/gemini-cli/pull/24047)**
    *   Fixes a bug where Plan Mode would freeze if the `.gemini/plans` directory didn't exist.
3.  **[fix(sandbox): implement Windows Mandatory Integrity Control (#24057)](https://github.com/google-gemini/gemini-cli/pull/24057)**
    *   Enhances Windows security by implementing restricted tokens and job object limits for the sandbox.
4.  **[feat(ui): add Tokyo Night theme (#24054)](https://github.com/google-gemini/gemini-cli/pull/24054)**
    *   Adds the popular `tokyonight-dark` theme to the CLI UI.
5.  **[feat(context): add configurable memoryBoundaryMarkers (#24020)](https://github.com/google-gemini/gemini-cli/pull/24020)**
    *   Allows non-git or monorepo projects to define custom boundaries for memory discovery (e.g., `.monorepo-root`).
6.  **[feat(cli): support 'tab to queue' for messages (#24052)](https://github.com/google-gemini/gemini-cli/pull/24052)**
    *   Introduces the ability to queue up a next prompt while the agent is still generating, improving UX flow.
7.  **[feat(cli): implement compact tool output (#20974)](https://github.com/google-gemini/gemini-cli/pull/20974)**
    *   Ongoing effort to declutter the UI by rendering tool outputs in a high-signal, compact format.
8.  **[feat(core): agnostic background task UI (#22740)](https://github.com/google-gemini/gemini-cli/pull/22740)**
    *   Refactors background tasks (Ctrl+B) to work with any execution type, not just shell commands.
9.  **[feat(cli): unify session modes in footer (#24032)](https://github.com/google-gemini/gemini-cli/pull/24032)**
    *   UI refinement to consolidate "Session Modes" into a cleaner footer status area.
10. **[fix(a2a-server): prioritize ADC for headless auth (#23614)](https://github.com/google-gemini/gemini-cli/pull/23614)**
    *   Fixes a regression preventing `GOOGLE_APPLICATION_CREDENTIALS` from working in headless environments.

## 5. Feature Request Trends
*   **Headless & API Integration:** Strong demand for better non-interactive support, specifically exposing reasoning traces and stable JSON output for automation.
*   **Refined Planning/SDD:** Users want more robust separation between planning and execution (Plan Mode leaks) and better management of complex tasks (DAG-based execution).
*   **Context & Memory Management:** Requests for smarter memory routing (global vs. project) and configurable context boundaries for monorepos.

## 6. Developer Pain Points
*   **Latency & Reliability:** The most frequent complaint today is the CLI becoming unresponsive or extremely slow. Users report hangs, 15-minute delays, and 429 errors, making the tool unreliable for daily work.
*   **Network & Environment Constraints:** VPN users and those on Pro plans are hitting unexpected barriers, suggesting recent backend or networking changes have inadvertently broken compatibility.
*   **Agent "Hallucinations" in Safe Modes:** Users are frustrated when the agent edits files while in "Plan Mode" or creates messy temp files, indicating a need for stricter adherence to constraints.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-03-28

## 1. Today's Highlights
The Copilot CLI team has rolled out versions **v1.0.13-0** and **v1.0.13-1**, introducing a significant new capability where MCP servers can now request LLM inference (sampling) subject to user approval. The update also enhances the user experience with a new timeline picker for rolling back conversation history and improves reliability for MCP registry lookups. However, the community is actively reporting friction with Enterprise policy configurations blocking models and a strong desire to revert or configure the recently introduced "alt-screen" terminal mode.

## 2. Releases

### **v1.0.13-1 & v1.0.13-0** (Latest)
These updates focus on extending Model Context Protocol (MCP) capabilities and refining the user interface.
*   **MCP Sampling:** MCP servers can now request LLM inference via a new review prompt, requiring user approval.
*   **Conversation History:** Added `/rewind` and double-Esc support to open a timeline picker, allowing rollback to any point in history, not just the previous snapshot.
*   **Reliability:** Improved MCP registry lookups with automatic retries and timeouts.
*   **Performance:** CLI startup time reduced via V8 compile cache.
*   **Bug Fixes:** Fixed an issue where reasoning effort settings failed to apply for BYOM (Bring Your Own Model) providers.

### **v1.0.12**
*   Fixed MCP server startup when working directory is git root.
*   Resolved Windows clipboard issues caused by non-system `clip.exe` interference.
*   Fixed `/diff` rendering with intra-line highlighting.

[View Releases](https://github.com/github/copilot-cli/releases)

---

## 3. Hot Issues

1.  **[#2236] [OPEN] MCP Servers Disappearing due to Organization Policy False Positive**
    *   **Why it matters:** Users report that valid MCP servers from organization registries are being hidden, accompanied by a false warning that "Third-party MCP servers are disabled."
    *   **Community Reaction:** High engagement (👍 28). This blocks enterprise workflows relying on internal MCP tools.
    *   [Link](https://github.com/github/copilot-cli/issues/2236)

2.  **[#1595] [OPEN] Cannot Access Any Model (Enterprise Policy)**
    *   **Why it matters:** Enterprise users with valid subscriptions are hitting "access denied by Copilot policy" errors when listing models, rendering the CLI useless for them.
    *   **Community Reaction:** 👍 8. Indicates a potential regression or strict default in policy handling.
    *   [Link](https://github.com/github/copilot-cli/issues/1595)

3.  **[#2334] [OPEN] Request to Bring Back "No-Alt-Screen" Mode**
    *   **Why it matters:** The recent switch to an alternate screen buffer has disrupted user workflows by disabling standard terminal scrolling and find features.
    *   **Community Reaction:** 👍 6. Users find the new mode significantly less usable for reviewing long outputs.
    *   [Link](https://github.com/github/copilot-cli/issues/2334)

4.  **[#2101] [OPEN] Transient API Errors and Rate Limits**
    *   **Why it matters:** Users are frequently hitting rate limits and transient errors that interrupt agentic workflows, requiring manual retries.
    *   **Community Reaction:** 👍 5. Highlights reliability concerns for heavy users.
    *   [Link](https://github.com/github/copilot-cli/issues/2101)

5.  **[#1274] [OPEN] Constant 400 Errors (Invalid Request Body)**
    *   **Why it matters:** A significant portion of code review prompts are failing with 400 errors, suggesting a potential issue with how the CLI constructs requests.
    *   **Community Reaction:** 👍 5. Affects core functionality (code review).
    *   [Link](https://github.com/github/copilot-cli/issues/1274)

6.  **[#172] [OPEN] Copilot CLI Does Not Respect MCP Timeouts**
    *   **Why it matters:** Developers writing custom MCP servers with long runtimes are hitting hardcoded timeouts, preventing the use of complex analysis tools.
    *   **Community Reaction:** 👍 2. Critical for extensibility.
    *   [Link](https://github.com/github/copilot-cli/issues/172)

7.  **[#1973] [OPEN] Feature Request: Tool Whitelist for Interactive Mode**
    *   **Why it matters:** Users want a middle ground between approving every tool call (tedious) and allowing all (dangerous), specifically for safe read-only operations.
    *   **Community Reaction:** 👍 7. Top feature request currently.
    *   [Link](https://github.com/github/copilot-cli/issues/1973)

8.  **[#1128] [OPEN] Add `awaitingUserInput` Hook Type**
    *   **Why it matters:** Plugin developers need a way to trigger actions when the agent is idle and waiting for input, closing a gap in the hook lifecycle.
    *   **Community Reaction:** 👍 17. Highly requested by extension developers.
    *   [Link](https://github.com/github/copilot-cli/issues/1128)

9.  **[#373] [CLOSED] CLI Stutters and Scrolls Erratically**
    *   **Why it matters:** Long-standing UI bug causing rapid scrolling ("stuttering") that makes the app unusable until manually corrected.
    *   **Community Reaction:** 👍 9. Significant UX annoyance.
    *   [Link](https://github.com/github/copilot-cli/issues/373)

10. **[#2045] [OPEN] Claude Model Available in VS Code but Missing in CLI**
    *   **Why it matters:** Inconsistency in model availability across GitHub Copilot ecosystems (VS Code vs. CLI) creates confusion and limits choice.
    *   [Link](https://github.com/github/copilot-cli/issues/2045)

---

## 4. Key PR Progress

*   **[#2331] [CLOSED] Sort git tags when determining prerelease version**
    *   Fixes a versioning issue where tags were sorted lexicographically rather than by version number, potentially causing incorrect pre-release identification.
    *   [Link](https://github.com/github/copilot-cli/pull/2331)

*(Note: Only one PR appeared in the feed for this period. The development focus appears to be on the rapid release of v1.0.13 iterations.)*

---

## 5. Feature Request Trends

*   **Terminal UI Control:** There is a strong trend demanding control over the terminal interface, specifically requests to disable the "alt-screen" mode to restore native scrollbars and text search capabilities ([#2334](https://github.com/github/copilot-cli/issues/2334), [#1799](https://github.com/github/copilot-cli/issues/1799)).
*   **Granular Tool Permissions:** Developers are asking for more sophisticated permission handling for interactive mode, specifically a "whitelist" for read-only tools to reduce friction without sacrificing security ([#1973](https://github.com/github/copilot-cli/issues/1973)).
*   **BYOK/BYOM Support:** Continued interest in bringing custom models (e.g., Grok 4.1) and API keys into the CLI workflow ([#1095](https://github.com/github/copilot-cli/issues/1095)).
*   **Input Media Support:** Users want the ability to paste images directly from the clipboard (snipping tool) rather than saving them to files first ([#2328](https://github.com/github/copilot-cli/issues/2328)).

## 6. Developer Pain Points

*   **Enterprise Policy Configuration:** A major pain point is the "access denied" errors regarding Copilot policies. Users find it difficult to diagnose why the CLI blocks models or MCP servers that are ostensibly allowed by their enterprise configuration ([#1595](https://github.com/github/copilot-cli/issues/1595), [#2236](https://github.com/github/copilot-cli/issues/2236)).
*   **Rate Limiting & API Stability:** Users are experiencing frequent interruptions due to rate limits and transient API errors, which breaks the flow of agentic tasks ([#2101](https://github.com/github/copilot-cli/issues/2101)).
*   **Platform Inconsistencies:** Specific issues on Windows (clipboard conflicts, input rendering) and keyboard layouts (German keyboard `@` key failure) remain frustrating blockers for international users ([#1446](https://github.com/github/copilot-cli/issues/1446), [#1999](https://github.com/github/copilot-cli/issues/1999)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-03-28

## 1. Today's Highlights
Kimi Code CLI version **1.27.0** has been released, introducing a redesigned diff rendering system with inline support, a new `/feedback` command, and incremental markdown streaming for a smoother UI experience. The Web interface now features a workspace file panel, while under the hood, significant work is being done on shell command security analysis and authentication flow improvements.

## 2. Releases

### **v1.27.0** (Released 2026-03-28)
This version focuses heavily on UI/UX improvements and developer workflow:
*   **UI/Streaming:** Introduced incremental markdown streaming and enhanced spinner animations for better real-time feedback.
*   **Diff Rendering:** Complete redesign of diff visualization with inline diff support and syntax highlighting.
*   **Web Interface:** Added a workspace file panel to browse and download session outputs directly from the browser.
*   **Wire Protocol:** Added `PlanDisplay` wire type for better rendering of agent planning steps.
*   **[View Release Notes](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.27.0)**

## 3. Hot Issues

1.  **[BUG] `write` tool freezes after upgrading to v1.26** (#1607)
    *   **Why:** Critical regression affecting v1.26+ users where the agent freezes during file writing. Requires user interruption to recover.
    *   **[Link](https://github.com/MoonshotAI/kimi-cli/issues/1607)**

2.  **[BUG] Web access fails with white screen** (#1602)
    *   **Why:** Users on Darwin ARM64 systems are reporting white screens when accessing the Web UI, pointing to potential frontend build or compatibility issues.
    *   **[Link](https://github.com/MoonshotAI/kimi-cli/issues/1602)**

3.  **[FEATURE] Figma MCP Support** (#1604)
    *   **Why:** High-demand integration request. Users want native support for Figma's Model Context Protocol (MCP) to streamline design-to-code workflows.
    *   **[Link](https://github.com/MoonshotAI/kimi-cli/issues/1604)**

4.  **[BUG] `@` path completion hits 1000 file limit** (#1610)
    *   **Why:** A significant bottleneck for large projects. The file autocomplete mechanism currently caps at 1000 files, making it unusable for large repositories.
    *   **[Link](https://github.com/MoonshotAI/kimi-cli/issues/1610)**

5.  **[FEATURE] Improve `AGENTS.md` instruction compliance** (#1596)
    *   **Why:** Agents are ignoring project-level constraints defined in `AGENTS.md`. Users report that the agent prioritizes user prompts over project rules, breaking intended guardrails.
    *   **[Link](https://github.com/MoonshotAI/kimi-cli/issues/1596)**

6.  **[BUG] ACP session initialization failure** (#1355)
    *   **Why:** Long-standing issue regarding internal errors (`list.index(x): x not in list`) during session init, affecting stability for IDEA plugin users.
    *   **[Link](https://github.com/MoonshotAI/kimi-cli/issues/1355)**

7.  **[FEATURE] CLI arguments for history session selection** (#1366)
    *   **Why:** Users want more granular control over sessions via CLI flags (list/restore) rather than just continuing the last one.
    *   **[Link](https://github.com/MoonshotAI/kimi-cli/issues/1366)**

8.  **[BUG] API Error 429 on `/login`** (#1599)
    *   **Why:** Users are hitting rate limits (429 errors) immediately during the login flow, blocking access to the service.
    *   **[Link](https://github.com/MoonshotAI/kimi-cli/issues/1599)**

9.  **[BUG] `trafilatura` import failure on Python 3.13** (Derived from PR #1597)
    *   **Why:** Compatibility issue with Python 3.13 causing cascading tool load failures due to `charset-normalizer` binaries.
    *   **[Link](https://github.com/MoonshotAI/kimi-cli/pull/1597)**

10. **[DISCUSSION] Skills directory override vs. append behavior** (#1606, #1605)
    *   **Why:** Confusion over whether `--skills-dir` should replace or append to default paths, impacting how custom skills are loaded.
    *   **[Link](https://github.com/MoonshotAI/kimi-cli/pull/1606)**

## 4. Key PR Progress

1.  **[MERGED] feat(ui): incremental markdown streaming and spinner enhancements** (#1598)
    *   Revolutionizes the TUI by committing markdown blocks permanently during streams, reducing flicker and improving readability.
    *   **[Link](https://github.com/MoonshotAI/kimi-cli/pull/1598)**

2.  **[MERGED] feat(diff): enhance diff rendering with inline diff support** (#1612)
    *   Introduces inline diff rendering and better syntax highlighting, making code changes much easier to review in the terminal.
    *   **[Link](https://github.com/MoonshotAI/kimi-cli/pull/1612)**

3.  **[MERGED] feat(web): Add workspace file panel** (#1573)
    *   Adds a crucial QoL feature to the Web UI, allowing users to browse and download generated files without leaving the browser.
    *   **[Link](https://github.com/MoonshotAI/kimi-cli/pull/1573)**

4.  **[OPEN] feat(security): Add shell command security analysis** (#1614)
    *   **Important:** Implements lightweight security analysis to flag dangerous shell patterns (e.g., `rm -rf /`) before execution approval.
    *   **[Link](https://github.com/MoonshotAI/kimi-cli/pull/1614)**

5.  **[MERGED] feat(feedback): implement asynchronous feedback submission** (#1593)
    *   Adds the `/feedback` command, allowing users to submit logs and comments directly from the CLI to the Kimi team.
    *   **[Link](https://github.com/MoonshotAI/kimi-cli/pull/1593)**

6.  **[OPEN] feat(shell): inject shell mode output into context & persist cd** (#1587)
    *   Improves the shell mode (Ctrl+X) by injecting command output back into the LLM context and persisting directory changes (`cd`).
    *   **[Link](https://github.com/MoonshotAI/kimi-cli/pull/1587)**

7.  **[OPEN] fix(shell): use git ls-files for @ file mention** (#1588)
    *   **Fix:** Solves the file completion limit in large repos by switching from `os.walk` to `git ls-files`.
    *   **[Link](https://github.com/MoonshotAI/kimi-cli/pull/1588)**

8.  **[OPEN] feat: Rewrite ACP authentication flow** (#1512)
    *   Major refactor to support Terminal Login and OAuth Device Flow for a more robust authentication system.
    *   **[Link](https://github.com/MoonshotAI/kimi-cli/pull/1512)**

9.  **[MERGED] fix(glob): expand ~ in directory path** (#1611)
    *   Quick fix ensuring the `Glob` tool correctly handles paths like `~/directory`.
    *   **[Link](https://github.com/MoonshotAI/kimi-cli/pull/1611)**

10. **[MERGED] feat(cli): update exit codes** (#1603)
    *   Introduces structured exit codes (Success, Failure, InputError) to better support CI/CD integrations.
    *   **[Link](https://github.com/MoonshotAI/kimi-cli/pull/1603)**

## 5. Feature Request Trends
*   **IDE & Design Integration:** Strong demand for tighter ecosystem integration, specifically **Figma MCP** support (#1604) and fixes for **IDEA/IDE plugins** (#1355).
*   **Context & Constraint Adherence:** Users are pushing for better "memory" and rule-following, specifically asking for priority adherence to **`AGENTS.md`** (#1596) to enforce project standards over ad-hoc user prompts.
*   **Session Management:** Requests for more powerful CLI history management, specifically listing and resuming specific past sessions (#1366).

## 6. Developer Pain Points
*   **Tool Stability:** The **Write Tool Freeze** (#1607) is a major productivity blocker reported by multiple users on v1.26+.
*   **Scalability Limits:** The **1000-file limit** for context addition (#1610) and autocompletion makes the tool difficult to use in large-scale enterprise projects.
*   **Installation & Compatibility:** Recurring issues with Python 3.13 compatibility (#1597) and dependency conflicts (e.g., `trafilatura`) are causing friction in setup.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-03-28

## 1. Today's Highlights
Activity remains high with **no new releases** in the last 24 hours, shifting focus to active development discussions. A critical **60GB+ memory leak** on servers (#17908) and persistent **Ctrl+C behavior** debates on Windows (#7957) are top of mind for the community. Meanwhile, significant refactoring efforts are underway to modernize the codebase with Effect patterns and replace Bun with npm/arborist.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues

1.  **Massive Server Memory Leak (60GB+ OOM)**
    [Issue #17908](https://github.com/anomalyco/opencode/issues/17908)
    A critical bug where `opencode serve` crashes the host due to a massive memory leak triggered specifically when closing the Desktop client. This poses a severe stability risk for remote deployments.

2.  **Windows Ctrl+C Conflict**
    [Issue #7957](https://github.com/anomalyco/opencode/issues/17908)
    Users are frustrated that `Ctrl+C` immediately exits the application on Windows, conflicting with the universal "Copy" shortcut. With 20 👍, this is a major UX pain point requiring a change in default behavior.

3.  **Security Concerns: Unsafe Defaults**
    [Issue #5076](https://github.com/anomalyco/opencode/issues/5076)
    Garnering 49 👍, this discussion highlights that OpenCode allows file editing and command execution by default. The community is pushing for a "safeguard" mode requiring explicit permissions.

4.  **Opus 4.6 Prefill Error with Copilot**
    [Issue #13768](https://github.com/anomalyco/opencode/issues/13768)
    Frequent errors occur when using Opus 4.6 via GitHub Copilot regarding "assistant message prefill." This compatibility issue interrupts workflows and invalidates sessions.

5.  **Request: Paste Image from Clipboard**
    [Issue #906](https://github.com/anomalyco/opencode/issues/906)
    Highly requested (18 👍). Users want the ability to paste images directly from the clipboard (e.g., from Excalidraw) rather than relying solely on drag-and-drop.

6.  **Compaction Failure with Copilot Enterprise**
    [Issue #11157](https://github.com/anomalyco/opencode/issues/11157)
    Context compaction fails with a 400 Bad Request when using GitHub Copilot Enterprise because the API rejects specific tool roles during summarization.

7.  **Entra Authentication Failure for MCP**
    [Issue #12308](https://github.com/anomalyco/opencode/issues/12308)
    OAuth flow for MCP servers using Microsoft Entra fails due to mismatched resource parameters in the request, blocking enterprise integrations.

8.  **OpenAI Browser Login Failure (macOS)**
    [Issue #16281](https://github.com/anomalyco/opencode/issues/16281)
    Token exchange fails with a 403 error when attempting to log in via the OpenAI ChatGPT Pro/Plus browser flow on macOS.

9.  **Windows External Directory Permissions Bypass**
    [Issue #16126](https://github.com/anomalyco/opencode/issues/16126)
    The `external_directory: "deny"` permission is not enforced correctly when running OpenCode from Git Bash on Windows due to path handling inconsistencies.

10. **CJK Text Rendering Glitch**
    [Issue #18088](https://github.com/anomalyco/opencode/issues/18088)
    Chinese, Japanese, and Korean text hides unexpectedly when pop-ups appear in the interface, impacting accessibility for international users.

## 4. Key PR Progress

1.  **Refactor: Replace BunProc with Npm/Arborist**
    [PR #18308](https://github.com/anomalyco/opencode/pull/18308)
    A major architectural shift removing the `bun` dependency in favor of `@npmcli/arborist` for deterministic package management.

2.  **Refactor: Effectify SessionCompaction**
    [PR #19459](https://github.com/anomalyco/opencode/pull/19459)
    Migrates the session compaction service to the Effect pattern, improving error handling and service composition.

3.  **Fix: Copilot GitHub App Token Flow**
    [PR #19350](https://github.com/anomalyco/opencode/pull/19350)
    Fixes support for preview models (like `claude-opus-4.6-fast`) by implementing the correct GitHub App token exchange flow.

4.  **Feat: Mobile Touch Optimization**
    [PR #18767](https://github.com/anomalyco/opencode/pull/18767)
    Introduces optimizations for the OpenCode app on mobile and touch devices, enhancing the portable experience.

5.  **Fix: TUI Terminal Background Sync**
    [PR #19386](https://github.com/anomalyco/opencode/pull/19386)
    Fixes visual "pixel gutters" on terminal edges by syncing the terminal background color to the theme via OSC 11.

6.  **Feat: Dynamic Model Discovery for Local Providers**
    [PR #17670](https://github.com/anomalyco/opencode/pull/17670)
    Adds dynamic model list population for OpenAI-compatible local providers (LM Studio, llama.cpp) via `/model` API.

7.  **Feat: Add `/restart` Session Command**
    [PR #18499](https://github.com/anomalyco/opencode/pull/18499)
    Introduces a `/restart` command to start a fresh session seeded with the original session's first message.

8.  **Fix: Restore `permission.ask` Plugin Hook**
    [PR #19453](https://github.com/anomalyco/opencode/pull/19453)
    Restores a hook lost during refactoring, allowing plugins to intercept and respond to permission requests.

9.  **Fix: Windows Ctrl+Z/SIGTSTP Handling**
    [PR #19351](https://github.com/anomalyco/opencode/pull/19351)
    Corrects the behavior of Ctrl+Z on Windows, preventing it from sending `SIGTSTP` incorrectly.

10. **Feat: Sign Windows CLI/Desktop Builds**
    [PR #15201](https://github.com/anomalyco/opencode/pull/15201)
    Implements Azure Trusted Signing for Windows binaries to prevent SmartScreen warnings.

## 5. Feature Request Trends
*   **Security First:** Strong demand for "Ask by default" permissions rather than "Allow by default" for file operations and shell execution.
*   **Multimodal Input:** Consistent requests for clipboard image pasting to streamline workflows involving diagrams and screenshots.
*   **Terminal UX:** Significant friction regarding the `Ctrl+C` shortcut on Windows/Linux, which currently exits the app instead of copying text.
*   **Config Modularity:** Requests for a `config.d/` directory to manage complex configurations across multiple files.

## 6. Developer Pain Points
*   **Windows Stability:** Users report that OpenCode is "nearly impossible" to use on Windows terminals (WezTerm, VSCode) due to crashes and shortcut conflicts.
*   **Remote Server Reliability:** The 60GB memory leak on disconnect makes hosting OpenCode as a remote service risky and unstable.
*   **Enterprise Auth Friction:** Repeated issues with OAuth flows (Entra, OpenAI, Atlassian) and token exchanges blocking access to paid features.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-03-28

## 1. Today's Highlights
The community is buzzing with the release of **v0.14.0-preview.1**, introducing experimental features, following the stable **v0.13.1** patch which fixed critical extension installation and memory display bugs. A major architectural discussion is underway regarding IDE integration, specifically focusing on refactoring the diff interaction layer to resolve token wastage and multi-edit failures. Meanwhile, contributors are actively expanding the ecosystem with new "Channels" platform support and enhanced local LLM capabilities.

## 2. Releases

### v0.14.0-preview.1
*   **Type:** Preview Release
*   **Info:** [View Changelog](https://github.com/QwenLM/qwen-code/compare/v0.13.1...v0.14.0-preview.1)
*   **Summary:** Introduces the initial preview of the 0.14 feature set.

### v0.13.1
*   **Type:** Stable Patch
*   **Key Fixes:**
    *   **Extension Installation:** Fixed support for non-GitHub git URLs (PR [#2539](https://github.com/QwenLM/qwen-code/pull/2539)).
    *   **CLI Memory:** Fixed `/memory show` commands to correctly display all configured context files (PR [#23](https://github.com/QwenLM/qwen-code/pull/23)).

## 3. Hot Issues

1.  **[IDE] Token Waste in Diff Acceptance** [#2709](https://github.com/QwenLM/qwen-code/issues/2709)
    *   **Why:** High-impact bug where accepting diffs in IDEs inflates tool call args with full file content, drastically increasing token consumption.
2.  **[IDE] Multiple Edits Failure in Default Mode** [#2702](https://github.com/QwenLM/qwen-code/issues/2702)
    *   **Why:** Critical workflow blocker. When an LLM attempts multiple edits on a single file in one turn, only the first one succeeds.
3.  **[Permissions] "Always Allow" Not Persisting** [#2700](https://github.com/QwenLM/qwen-code/issues/2700), [#2723](https://github.com/QwenLM/qwen-code/issues/2723)
    *   **Why:** Widespread user frustration regarding permissions. Despite selecting "Always Allow," the prompt reappears repeatedly (likely related to Windows path handling fixed in PR #2670).
4.  **[Security] "Edit Automatically" Allows All Commands** [#2722](https://github.com/QwenLM/qwen-code/issues/2722)
    *   **Why:** Security concern where the "Edit automatically" mode inadvertently allows the agent to run arbitrary shell commands without approval.
5.  **[Local LLM] Tool Calling Fails with Local Models** [#176](https://github.com/QwenLM/qwen-code/issues/176)
    *   **Why:** Long-standing issue (7 thumbs up) where local models (e.g., qwen3-30b-a3b) generate correct tool calls, but the client fails to execute them.
6.  **[VSCode] File Read Regression** [#2629](https://github.com/QwenLM/qwen-code/issues/2629)
    *   **Why:** A recent update broke the `file read` functionality in the VS Code extension, repeatedly asking for required parameters.
7.  **[IntelliJ] Local Ollama Incompatibility** [#2724](https://github.com/QwenLM/qwen-code/issues/2724)
    *   **Why:** Qwen Code plugin in IntelliJ 2026.1 forces cloud login, breaking workflows using local Ollama instances.
8.  **[Bug] Line Ending Conversion (CRLF to LF)** [#2704](https://github.com/QwenLM/qwen-code/issues/2704)
    *   **Why:** Linux editing automatically converts Windows line endings (CRLF) to LF, causing massive git diffs and potential script breakage.
9.  **[Path Handling] Unwanted Spaces in File Paths** [#2688](https://github.com/QwenLM/qwen-code/issues/2688), [#2703](https://github.com/QwenLM/qwen-code/issues/2703)
    *   **Why:** The model hallucinates spaces in file paths (especially with Chinese characters or numbers), causing file not found errors.
10. **[Hooks] Usability & Documentation Missing** [#1708](https://github.com/QwenLM/qwen-code/issues/1708), [#2693](https://github.com/QwenLM/qwen-code/issues/2693)
    *   **Why:** Users are struggling to configure hooks (`settings.json`), and documentation is missing or hard to find.

## 4. Key PR Progress

1.  **refactor: Centralize IDE diff interaction** [#2728](https://github.com/QwenLM/qwen-code/pull/2728)
    *   **Impact:** Architectural refactor moving diff handling to `CoreToolScheduler`. Aims to fix the massive token waste (Issue #2709) and multi-edit bugs.
2.  **feat(channels): Extensible Platform (Telegram/WeChat/DingTalk)** [#2628](https://github.com/QwenLM/qwen-code/pull/2628)
    *   **Impact:** Major feature adding a plugin system for messaging channels, allowing users to interact with Qwen Code via chat apps.
3.  **feat(extension): NPM Registry Support** [#2719](https://github.com/QwenLM/qwen-code/pull/2719)
    *   **Impact:** Allows installing extensions via npm (including private registries), streamlining enterprise distribution.
4.  **fix: Preserve Original Line Endings (CRLF/LF)** [#2707](https://github.com/QwenLM/qwen-code/pull/2707)
    *   **Impact:** Direct fix for Issue #2704, ensuring Git cleanliness across operating systems.
5.  **feat(cli, webui): Follow-up Suggestions** [#2525](https://github.com/QwenLM/qwen-code/pull/2525)
    *   **Impact:** UX enhancement proposing context-aware next steps (e.g., "Run tests") after task completion.
6.  **Fix: Permission Persistence on Windows** [#2670](https://github.com/QwenLM/qwen-code/pull/2670)
    *   **Impact:** Fixes "Always Allow" failures caused by case-sensitive path comparisons on Windows.
7.  **feat(auth): Alibaba Cloud Standard API Key** [#2668](https://github.com/QwenLM/qwen-code/pull/2668)
    *   **Impact:** Improves auth flow by adding dedicated support for region-specific ModelStudio/DashScope endpoints.
8.  **refactor: Subagent Model Configuration** [#2698](https://github.com/QwenLM/qwen-code/pull/2698)
    *   **Impact:** UX refactor simplifying model selection for subagents (replacing complex config objects with a simple string).
9.  **feat(core): Multi-strategy Replacement Pipeline** [#2405](https://github.com/QwenLM/qwen-code/pull/2405)
    *   **Impact:** Advanced improvement to the `edit` tool, adding fuzzy/regex matching strategies to improve edit success rates.
10. **fix(cli): Prevent Terminal Response Leakage** [#2718](https://github.com/QwenLM/qwen-code/pull/2718)
    *   **Impact:** Fixes garbage text appearing in terminals when SSHing into high-latency VMs.

## 5. Feature Request Trends
*   **External Integrations:** Strong demand for connecting Qwen Code to external platforms (Telegram, WeChat) and adopting discontinued projects (Issue #2721 mentions `iflow cli`).
*   **Enhanced CLI UX:** Requests for native screenshot/window capture capabilities (Issue #2725) and better clipboard handling (Issue #2605).
*   **Model Flexibility:** Users want easier configuration for non-standard models (GLM-5.1, local Ollama) and custom API endpoints.
*   **Undo/Redo & History:** A recurring theme in feature requests is the ability to edit previous user messages or undo AI actions more granularly (Issue #2725).

## 6. Developer Pain Points
*   **Permission System Reliability:** The most significant pain point is the "Always Allow" feature failing to persist, forcing repetitive manual approvals.
*   **Path Handling Hallucinations:** The model frequently inserts spaces into file paths containing Chinese characters or numbers, breaking file operations.
*   **Local LLM Stability:** Users report inconsistent behavior when using local models (Ollama/OpenAI-compatible), specifically regarding tool execution and initialization.
*   **IDE Integration Maturity:** Bugs related to diff handling (token waste) and extension conflicts suggest the IDE integration layer needs stabilization.

</details>