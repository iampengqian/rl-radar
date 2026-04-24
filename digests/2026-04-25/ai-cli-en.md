# AI CLI Tools Community Digest 2026-04-25

> Generated: 2026-04-24 22:11 UTC | Tools covered: 8

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

Here is the cross-tool comparison report based on the community digests from April 25, 2026.

### 1. Ecosystem Overview
The AI CLI tooling ecosystem is in a phase of rapid, aggressive iteration, transitioning from basic terminal wrappers into sophisticated agentic platforms. The current development cycle is dominated by the challenge of integrating new, high-capability models (like GPT-5.5 and DeepSeek V4) while simultaneously stabilizing core infrastructure like the Model Context Protocol (MCP) and cross-platform terminal I/O. As these tools adopt more autonomous capabilities, community focus has sharply pivoted toward reliability—specifically demanding better context window management, persistent session states, and granular control over agent permissions. Windows OS support and strict third-party API compliance remain universal engineering bottlenecks.

### 2. Activity Comparison

| Tool | Version Released | Hot Issues (24h) | PRs Updated (24h) | Primary Focus Area |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | v2.1.119 | 10 | 6 | MCP OAuth, Session Reliability |
| **OpenAI Codex** | rust-v0.125.0 | 10 | 10 | App-Server infra, Permissions refactor |
| **Gemini CLI** | v0.39.1 / v0.40.0-preview.3 | 10 | 10 | AST awareness, Windows Terminal UI |
| **GitHub Copilot CLI** | v1.0.35 / v1.0.36 | 10 | 1 | UX Polish, Sub-agent/MCP architectures |
| **Kimi Code CLI** | v1.39.0 | 10 | 10 | Large context stability, Non-interactive modes |
| **OpenCode** | v1.14.23 / v1.14.24 | 10 | 10 | GPT-5.5 / DeepSeek V4 integration |
| **Pi** | v0.70.0 - v0.70.2 | 10 | 10 | DeepSeek API compliance, Infrastructure |
| **Qwen Code** | v0.15.2 | 10 | 10 | Runtime I/O performance, Vision support |

### 3. Shared Feature Directions

*   **DeepSeek V4 "Thinking Mode" Compliance:** Almost every tool (OpenCode, Pi, Qwen Code, Kimi Code) faced critical bugs surrounding DeepSeek V4's strict API requirements for round-tripping `reasoning_content`. The ecosystem is actively standardizing how reasoning tokens are preserved during tool calls and context compaction.
*   **Granular Permission & YOLO Modes:** Users across the board are experiencing "permission fatigue." Tools like Gemini CLI, Kimi Code, and OpenCode are implementing persistent tool approvals, "YOLO" auto-approvals, or advanced sandbox profiles (OpenAI Codex) to streamline autonomous workflows.
*   **Advanced MCP Ecosystem Stability:** Model Context Protocol integration is maturing past basic connectivity. Communities are demanding robust error handling for background timeouts (Gemini CLI), HTTP/SSE transport support (Qwen Code, Codex), and better OAuth bootstrapping to prevent silent auth failures (Claude Code).
*   **Windows as a Second-Class Citizen:** With the exception of OpenAI Codex, almost all trackers featured significant developer friction regarding Windows. Hardcoded PowerShell 5.1 paths (Kimi Code, Copilot CLI), CRLF line-ending corruption (Copilot CLI), and broken terminal backspace keybindings (Gemini CLI) highlight a shared blind spot in cross-platform QA.
*   **Context Window & Token Management:** As models scale to 400k–1M tokens, tools are struggling to manage overhead. Developers are requesting transparent token accounting (Claude Code), strict schema compression for tools (Codex), and AST-aware file reading to avoid wasting context limits on boilerplate code (Gemini CLI).

### 4. Differentiation Analysis

*   **OpenAI Codex** is pivoting heavily toward backend and enterprise architecture. Its current development is uniquely focused on app-server integrations, Unix socket transports, and a massive Rust-based permissions refactor, indicating a target audience building complex, remote-desktop or containerized development environments.
*   **GitHub Copilot CLI** is prioritizing deep integration into the GitHub/VS Code ecosystem and UX refinement (e.g., tab-completion, UI statuslines). However, it lags behind the community's pace, showing only 1 updated PR, and struggles with power-user demands for composable, multi-agent architectures.
*   **Qwen Code** and **Kimi Code** represent the agile, community-driven frontier. Qwen Code stands out for aggressive performance optimization (cutting 91% of runtime I/O) and addressing multi-provider configurations, catering heavily to developers self-hosting local models alongside cloud APIs.
*   **Gemini CLI** is pushing the envelope on agent intelligence and UI, uniquely exploring AST-aware codebase mapping, reflex-based time-series metrics, and zero-install local voice transcription via `whisper.cpp`.
*   **Pi** and **OpenCode** act as highly adaptable "swiss-army knives," focusing heavily on rapid provider integration (GPT-5.5, DeepSeek V4, Azure) and extending an extension-heavy, customizable TUI framework.

### 5. Community Momentum & Maturity

*   **High Velocity / Highly Active:** OpenAI Codex, Gemini CLI, Kimi Code, Qwen Code, Pi, and OpenCode show high community momentum, evidenced by balanced 1:1 ratios of hot issues to active PRs. These communities are rapidly shipping features and closing critical bugs on a near-daily basis.
*   **Enterprise Scale / Slower Iteration:** Claude Code and GitHub Copilot CLI exhibit a slight mismatch between community volume (high issue counts) and visible daily maintainer iteration (lower PR counts). This suggests a more rigid, enterprise-style QA and release pipeline where development happens behind closed doors or in sprint cycles rather than continuous public merges.
*   **Ecosystem Maturity:** The overall ecosystem is moving past the "hype" phase into practical engineering. The nature of the issues (billing transparency, proxy environments, file system sandboxing) indicates that developers are attempting to integrate these CLIs into serious, daily enterprise workflows rather than just using them for experimental scripting.

### 6. Trend Signals

1.  **API Strictness is Breaking Agentic Workflows:** The transition to reasoning models (DeepSeek V4) exposes a brittle underlying assumption in many CLI tools: that APIs will gracefully handle missing context. Moving forward, AI CLIs must treat `reasoning_content` as immutable state data rather than optional metadata, or risk cascading 400 errors during complex, multi-step agent loops.
2.  **The Decline of "Black Box" Context Management:** As token limits scale, costs rise. Developers are no longer willing to accept opaque context usage. The demand for features like OpenCode's `/context` command and Gemini's AST-mapping signals a need for tools that allow developers to micro-manage their token budgets and system prompt overhead.
3.  **Autonomy Requires Failsafes, Not Just Overrides:** The consistent demand for YOLO/Auto-approve modes is paired with an equal demand for robust terminal control. If AI CLIs are allowed to run autonomously, they must stop littering workspaces with tmp files (Gemini), breaking Git diffs via CRLF (Copilot), or entering infinite loops (Copilot, Qwen). Tooling will need stricter internal heuristics before true "agentic" delegation becomes standard practice.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-04-25 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

Below are the most actively discussed and closely watched Skills submissions (Pull Requests) in the ecosystem:

1. **[#514 — document-typography](https://github.com/anthropics/skills/pull/514)** | `OPEN`
   A typographic quality-control skill for AI-generated documents. It addresses orphan word wraps, widow paragraphs, and numbering misalignment. A universally relevant utility given that every document Claude generates is subject to these formatting issues.

2. **[#83 — skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | `OPEN`
   Two "meta skills" for the marketplace. The quality analyzer evaluates skills across five dimensions (Structure, Documentation, etc.), while the security analyzer performs vulnerability assessments. Represents an early push toward ecosystem self-regulation.

3. **[#210 — frontend-design (Revision)](https://github.com/anthropics/skills/pull/210)** | `OPEN`
   A significant rewrite of the existing `frontend-design` skill, focusing on improving clarity, actionability, and token efficiency so that every instruction is something Claude can actually execute within a single conversation.

4. **[#486 — ODT (OpenDocument)](https://github.com/anthropics/skills/pull/486)** | `OPEN`
   Adds comprehensive OpenDocument support (.odt, .ods) including creation, template filling, parsing ODT to HTML, and conversion. Strong community interest given the enterprise reliance on LibreOffice and ISO-standard formats.

5. **[#723 — testing-patterns](https://github.com/anthropics/skills/pull/723)** | `OPEN`
   A full-stack testing skill covering unit testing (AAA pattern, edge cases), React component testing (Testing Library), and overall testing philosophy (Testing Trophy model). Fills a significant gap in the skills library for software quality assurance.

6. **[#568 — ServiceNow Platform](https://github.com/anthropics/skills/pull/568)** | `OPEN`
   A broad enterprise skill covering ITSM, ITOM, SecOps, ITAM/SAM, FSM, HRSD, CSDM, and IntegrationHub. Targets a massive enterprise ecosystem currently underserved by Claude Code skills.

7. **[#806 — sensory (macOS AppleScript)](https://github.com/anthropics/skills/pull/806)** | `OPEN`
   Enables native macOS automation via `osascript`/AppleScript instead of screenshot-based computer use. Features a two-tier permission system (direct app scripting vs. System Events UI automation).

8. **[#997 — xiao (Xiaomi Robot Vacuum)](https://github.com/anthropics/skills/pull/997)** | `OPEN`
   A CLI-first, agent-ready skill for controlling a Xiaomi Robot Vacuum via the Xiaomi Cloud API. An early example of Claude Code skills bridging into physical IoT device management.

---

## 2. Community Demand Trends

Distilled from the most-commented and most-upvoted Issues, the community is driving demand in these directions:

| Trend | Signal | Key Issues |
|---|---|---|
| **Org-wide Skill Sharing** | 9 comments, 5 👍 — Users want shared skill libraries or direct sharing links instead of manual `.skill` file transfers via Slack/Teams. | [#228](https://github.com/anthropics/skills/issues/228) |
| **Evaluation & Reliability Infrastructure** | 6 comments, 6 👍 — `run_eval.py` has a 0% trigger rate; users are blocked on testing their skills. Robust eval tooling is critical for enterprise adoption. | [#556](https://github.com/anthropics/skills/issues/556) |
| **Deduplication & Namespace Integrity** | 5 comments, 7 👍 — `document-skills` and `example-skills` install identical content; community skills under the `anthropic/` namespace create trust boundary vulnerabilities. | [#189](https://github.com/anthropics/skills/issues/189), [#492](https://github.com/anthropics/skills/issues/492) |
| **Skill-as-MCP Protocol** | 4 comments — Early architectural proposal to expose Skills as MCPs, allowing algorithmic discovery and programmatic invocation. | [#16](https://github.com/anthropics/skills/issues/16) |
| **Agent Governance & Safety** | 4 comments — Demand for a skill covering policy enforcement, threat detection, trust scoring, and audit trails for AI agent systems. | [#412](https://github.com/anthropics/skills/issues/412) |
| **Platform Reliability (Upload/Delete/API)** | Multiple issues reporting 500 errors for skill upload, replacement, and deletion. Basic platform stability is a blocker. | [#406](https://github.com/anthropics/skills/issues/406), [#403](https://github.com/anthropics/skills/issues/403) |
| **AWS Bedrock Compatibility** | 4 comments — Users are struggling to use skills with AWS Bedrock and need guidance on compatibility. | [#29](https://github.com/anthropics/skills/issues/29) |

---

## 3. High-Potential Pending Skills

These PRs have recent activity and address clear gaps — likely candidates for near-term merging:

| PR | Skill | Why It's High-Potential |
|---|---|---|
| [#539](https://github.com/anthropics/skills/pull/539) | **skill-creator YAML fix** | Fixes silent YAML parsing failures from unquoted `description` fields — a fundamental validation improvement. |
| [#541](https://github.com/anthropics/skills/pull/541) | **DOCX tracked change fix** | Resolves document corruption from `w:id` collisions between bookmarks and tracked changes in OOXML. |
| [#538](https://github.com/anthropics/skills/pull/538) | **PDF case-sensitivity fix** | Corrects 8 file reference mismatches that break on case-sensitive filesystems (Linux CI/CD). |
| [#509](https://github.com/anthropics/skills/pull/509) | **CONTRIBUTING.md** | Addresses the repo's 25% community health score — highest-impact single documentation addition. |
| [#666](https://github.com/anthropics/skills/pull/666) | **Remove duplicate skill-creator** | Cleanly deduplicates by removing the inferior version, pointing to the 479-line official version in `claude-plugins-official`. |

**Notable:** PRs [#539](https://github.com/anthropics/skills/pull/539), [#541](https://github.com/anthropics/skills/pull/541), and [#538](https://github.com/anthropics/skills/pull/538) are all by contributor `Lubrsy706`, who is systematically hardening existing document skills with precise bug fixes — a pattern that signals mature community maintenance.

---

## 4. Skills Ecosystem Insight

> The community's most concentrated demand is for **robust evaluation tooling and namespace/integrity governance** — users need reliable ways to test, validate, and trust skills before the ecosystem can scale to enterprise-wide org sharing.

---

# Claude Code Community Digest — 2026-04-25

## 1. Today's Highlights

Claude Code shipped **v2.1.119** yesterday, bringing persistent `/config` settings and a new `prUrlTemplate` option for custom code-review URLs. However, the release appears to have reintroduced a previously fixed bash CWD deletion bug, raising regression concerns among users. Several high-impact issues around MCP OAuth, session-hanging bugs, and Windows MSIX sandbox errors dominate the community discussion today.

---

## 2. Releases

### [v2.1.119](https://github.com/anthropics/claude-code/releases/tag/v2.1.119)
- **Persistent `/config` settings**: Theme, editor mode, verbose, and other preferences now persist to `~/.claude/settings.json` and participate in the full project/local/policy override precedence chain.
- **`prUrlTemplate` setting**: Allows pointing the footer PR badge at a custom code-review URL (e.g., internal Gerrit or Phabricator) instead of github.com.
- The release notes appear truncated in the data source (`Added 'CLA`), suggesting additional changes were cut off.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [#13480](https://github.com/anthropics/claude-code/issues/13480) — **Oversized image breaks conversation permanently** (👍62, 57 comments) | A long-standing open bug since Dec 2025. Pasting a large image permanently corrupts the session with no recovery path. High community traction and still unresolved — affects anyone using multimodal input. |
| 2 | [#37747](https://github.com/anthropics/claude-code/issues/37747) — **MCP OAuth regression: redirect_uri missing port** (👍41, 11 comments) | All MCP OAuth providers supporting `client_id_metadata_document_supported` are broken since v2.1.80+. The metadata document publishes a portless redirect URI while the local callback server uses a specific port, causing auth failures. A critical regression for the MCP ecosystem. |
| 3 | [#52747](https://github.com/anthropics/claude-code/issues/52747) — **Regression: Bash tool broken when CWD deleted** (3 comments) | A previously fixed bug (issues #21580, #26136) has returned in v2.1.119. Deleting the current working directory mid-session permanently breaks the Bash tool. Users are concerned about regression testing rigor. |
| 4 | [#53011](https://github.com/anthropics/claude-code/issues/53011) — **`/rewind` hangs CLI irrecoverably** (2 comments) | The `/rewind` slash command hangs the CLI on any session, regardless of size. Ctrl+C doesn't interrupt — only `kill -9` recovers. This blocks a core workflow feature. |
| 5 | [#47841](https://github.com/anthropics/claude-code/issues/47841) — **Stream idle timeout on Claude Code Web** (👍11, 6 comments) | Persistent "Stream idle timeout — partial response received" errors on the web client. Affects reliability of long-running sessions in the browser. |
| 6 | [#52872](https://github.com/anthropics/claude-code/issues/52872) & [#48362](https://github.com/anthropics/claude-code/issues/48362) — **Windows MSIX/Store build: EXDEV errors** (duplicate reports) | The MSIX sandbox causes `EXDEV` (cross-device rename) errors, silently preventing session persistence. Sidebar is empty on every restart. Workaround: use the Win32 installer instead. |
| 7 | [#52646](https://github.com/anthropics/claude-code/issues/52646) — **Extremely inflated token usage / "Prompt too long"** (5 comments) | Users report token counts that are orders of magnitude higher than expected, hitting the prompt length limit. Suggests a potential token accounting or context compaction bug. |
| 8 | [#53012](https://github.com/anthropics/claude-code/issues/53012) — **`sandbox.excludedCommands` doesn't bypass network enforcement** (2 comments) | Commands listed in the sandbox exclusion config still have network proxy restrictions applied, contradicting the documented behavior. Breaks workflows relying on direct network access. |
| 9 | [#43073](https://github.com/anthropics/claude-code/issues/43073) — **Telegram plugin: zombie bun processes at 100% CPU** (5 comments) | When a session is force-quit, the Telegram plugin's `bun server.ts` becomes orphaned and enters an infinite 409-retry loop, consuming an entire CPU core. |
| 10 | [#53019](https://github.com/anthropics/claude-code/issues/53019) — **AI-generated text appeared as user input** (1 comment) | A security-relevant report: Opus 4.6 apparently produced text that surfaced in the user input field, raising concerns about prompt-injection surface area and UI trust boundaries. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#52668](https://github.com/anthropics/claude-code/pull/52668) — **fix(hookify): include hook-specific output for warnings** | Ensures `Hookify` warn actions on `PreToolUse` and `PostToolUse` return `hookSpecificOutput` with `additionalContext`, so warnings actually surface in Claude's context. Fixes [#40380](https://github.com/anthropics/claude-code/issues/40380). |
| 2 | [#47676](https://github.com/anthropics/claude-code/pull/47676) — **fix(plugins): valid YAML in hookify and plugin-dev agent frontmatter** (CLOSED) | Four agent files had unquoted colon-space strings in their `description` fields that strict YAML parsers rejected. Now properly quoted. |
| 3 | [#47673](https://github.com/anthropics/claude-code/pull/47673) — **fix(plugin-dev): add missing plugin.json manifest** (CLOSED) | `plugin-dev` was the only plugin lacking a `.claude-plugin/plugin.json` manifest, preventing proper marketplace registration. |
| 4 | [#47674](https://github.com/anthropics/claude-code/pull/47674) — **docs(devcontainer): fix theme name typo** (CLOSED) | Corrected "powerline10k" → "powerlevel10k" in the devcontainer Dockerfile comment. |
| 5 | [#52666](https://github.com/anthropics/claude-code/pull/52666) — **docs: fix README brand casing** | Normalizes "Github" → "GitHub" and "MacOS" → "macOS" in README install headings. Documentation-only. |
| 6 | [#52650](https://github.com/anthropics/claude-code/pull/52650) — **Claude/farm bureau benefits tool** | Appears to be an off-topic/spam PR. Likely to be closed. |

> *Note: Only 6 PRs were updated in the past 24 hours. The remaining slots reflect the limited PR activity window.*

---

## 5. Feature Request Trends

- **Hooks as first-class automation surface** ([#32105](https://github.com/anthropics/claude-code/issues/32105), [#44786](https://github.com/anthropics/claude-code/issues/44786)): Community wants `PostToolUse` hooks to support `updatedToolOutput` for context-budget recovery, and a hook-callable session rename. Hooks are clearly becoming the primary extensibility vector.

- **Billing/provider flexibility** ([#53013](https://github.com/anthropics/claude-code/issues/53013)): Users want runtime switching between Subscription and Vertex/API billing without restarting the CLI. Current environment-variable approach is too rigid for mixed workflows.

- **Internationalization** ([#50680](https://github.com/anthropics/claude-code/issues/50680)): Requests for non-English UI support (Russian cited) indicate growing international adoption.

- **Custom PR URL templates** — Now partially addressed in v2.1.119 with `prUrlTemplate`, suggesting Anthropic is actively responding to enterprise integration needs.

---

## 6. Developer Pain Points

1. **Regressions in patch releases**: The return of the CWD-deletion bash bug ([#52747](https://github.com/anthropics/claude-code/issues/52747)) in v2.1.119 — after it was fixed in February — undermines confidence in release QA. Users are asking for stronger regression test suites.

2. **Windows is a second-class citizen**: Multiple independent reports of MSIX sandbox breakage ([#52872](https://github.com/anthropics/claude-code/issues/52872), [#48362](https://github.com/anthropics/claude-code/issues/48362)), LSP plugin spawn failures ([#34721](https://github.com/anthropics/claude-code/issues/34721)), and OAuth issues ([#53021](https://github.com/anthropics/claude-code/issues/53021)) point to systematic Windows testing gaps.

3. **MCP authentication instability**: The OAuth regression ([#37747](https://github.com/anthropics/claude-code/issues/37747)) has been open for a month with 41 👍. Combined with static `clientId` persistence failures ([#53021](https://github.com/anthropics/claude-code/issues/53021)), MCP auth is fragile across platforms.

4. **Session reliability**: Hangs on `/rewind` ([#53011](https://github.com/anthropics/claude-code/issues/53011)), worktree creation deadlocks ([#53015](https://github.com/anthropics/claude-code/issues/53015)), and irrecoverable oversized-image corruption ([#13480](https://github.com/anthropics/claude-code/issues/13480)) all erode trust in long-running sessions.

5. **Token usage transparency**: Reports of drastically inflated token counts ([#52646](https://github.com/anthropics/claude-code/issues/52646), [#53018](https://github.com/anthropics/claude-code/issues/53018)) after `/compact` or even `--version` suggest potential metering or context-accounting bugs that directly impact cost.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-25

## 1. Today's Highlights
The release of **rust-v0.125.0** brings major app-server upgrades, including Unix socket transport and remote plugin management, while the permissions system undergoes a massive architectural refactor behind the scenes. On the community front, Windows users continue to report critical usability blockers, and a new GPT-5.5 context window mismatch issue is causing auto-compaction to fail in Desktop sessions. 

## 2. Releases
**rust-v0.125.0** (and alpha pre-releases)
- **App-Server Integrations:** Introduced support for Unix socket transport, pagination-friendly resume/fork, sticky environments, and remote thread config/store plumbing.
- **Plugin Management:** App-server can now install remote plugins and handle upgrade configurations.

## 3. Hot Issues
1. **Remote Development in Codex Desktop App** ([#10450](https://github.com/openai/codex/issues/10450)): With 602 upvotes and 163 comments, this is the most requested feature. Users want Codex Desktop to support remote dev via SSH/Containers, similar to VS Code. 
2. **WebSocket Upgrade Fails / Falls back to HTTPS** ([#13041](https://github.com/openai/codex/issues/13041)): A highly reported connectivity bug (120 👍) where WebSockets succeed but immediately close with policy `1008`, causing degraded HTTPS fallback performance.
3. **GPT-5.5 Context Catalog Mismatch** ([#19409](https://github.com/openai/codex/issues/19409)): A critical session bug where UI configs aimed at 400K/1M contexts are ignored, leaving sessions at a 258K effective window and breaking auto-compaction.
4. **macOS Startup Failure** ([#19220](https://github.com/openai/codex/issues/19220)): The macOS app is failing to start entirely for some users post-update due to an unsupported `workspace_dependencies` feature loop.
5. **Windows PowerShell Host Error** ([#13917](https://github.com/openai/codex/issues/13917)): Windows users are unable to start PowerShell hosts in their sessions (Error 8009001d).
6. **Computer Use Plugin Unavailable on macOS** ([#18258](https://github.com/openai/codex/issues/18258)): Despite plugin files existing locally, the Desktop app fails to load the Computer Use plugin. A community workaround involving manual cache path repair has been posted.
7. **Windows mapped network drives lose threads** ([#13846](https://github.com/openai/codex/issues/13846)): Threads disappear after app restart if the project is hosted on a mapped network drive, pointing to UNC path normalization failures.
8. **High GPU Usage from Animations** ([#16857](https://github.com/openai/codex/issues/16857)): The "thinking" animation in the Desktop app triggers excessive GPU usage, frustrating users running on battery.
9. **Safety Check False Positives** ([#19204](https://github.com/openai/codex/issues/19204)): Users report being flagged by safety checks while simply awaiting verification, halting workflows abruptly.
10. **WSL Worktree Creation Fails** ([#13618](https://github.com/openai/codex/issues/13618)): Users developing via WSL experience fatal errors when attempting to create git worktrees via the Desktop app.

## 4. Key PR Progress
1. **Honor Streamable HTTP MCP placement** ([#18584](https://github.com/openai/codex/pull/18584)): Closed/Completed. Ensures HTTP MCP correctly routes through `experimental_environment` rather than accidentally using local `reqwest` for remote-only servers.
2. **Route OAuth bootstrap through HttpClient** ([#19064](https://github.com/openai/codex/pull/19064): Fixes an issue where OAuth bootstrap/refresh missed remote routing rules during MCP transport setup.
3. **Permissions Refactor Stack** ([#19392](https://github.com/openai/codex/pull/19392), [#19393](https://github.com/openai/codex/pull/19393), [#19394](https://github.com/openai/codex/pull/19394), [#19395](https://github.com/openai/codex/pull/19395)): A massive 4-PR architectural shift migrating legacy sandbox policies to a new `PermissionProfile` source of truth, fixing lossy permission state conversions.
4. **Remove legacy read-only access modes** ([#19449](https://github.com/openai/codex/pull/19449)): Cleans up transitional legacy `SandboxPolicy` shapes, moving partial-read models into `FileSystemSandboxPolicy`.
5. **CI: publish codex-app-server release artifacts** ([#19447](https://github.com/openai/codex/pull/19447)): Optimizes CI by releasing the smaller `codex-app-server` binary separately from the full TUI build.
6. **Add goal TUI UX** ([#18077](https://github.com/openai/codex/pull/18077)): Introduces the `/goal` command, statusline indicators, and snapshotting for "goal mode" in the terminal UI.
7. **Make apply_patch streaming parser stateful** ([#19160](https://github.com/openai/codex/pull/19160)): Refactors `apply_patch` parsing to own streaming progress via a strict finalization state machine.
8. **Refactor log DB into buffered sink interface** ([#19234](https://github.com/openai/codex/pull/19234)): Prepares the app for remote app-server log hooks by separating local SQLite logic from core queue/flush behavior.
9. **Serialize legacy Windows PowerShell sandbox tests** ([#19453](https://github.com/openai/codex/pull/19453)): Fixes flaky Windows tests by preventing concurrent host-level ACL/user interactions during sandbox testing.
10. **Compress skill paths with root aliases** ([#19098](https://github.com/openai/codex/pull/19098)): Shortens skill paths so they don't exceed metadata budgets when absolute paths are too long.

## 5. Feature Request Trends
- **Remote/Container Development:** The dominant request is native support for SSH, Docker, and remote container environments in the Desktop App.
- **Robust Git/Worktree Integration:** Developers are heavily asking for seamless UI and backend support for git worktrees, especially across diverse environments (WSL, network drives).
- **Advanced MCP (Model Context Protocol) Support:** High demand for stable custom `stdio` MCP server integrations and proper exposure of external tools to Codex threads.

## 6. Developer Pain Points
- **Windows Instability:** A disproportionate number of bugs stem from the Windows Desktop App, specifically regarding `\\?\` namespace path normalizations breaking Node/pnpm tools, missing `gh` CLI detection, and broken network drive support.
- **Session & State Fragility:** Developers are frequently experiencing disconnected streams, failure to resume sessions, and compaction bugs. High token consumption (upwards of 100k tokens for simple initialization) is also a major frustration.
- **Plugin and Tool Discovery:** Users are frustrated that MCP tools and bundled skills (like Computer Use) are often discovered successfully by the backend but fail to expose themselves in the actual Desktop UI.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for 2026-04-25.

## 1. Today's Highlights
Gemini CLI rolls out two new versions (v0.39.1 and v0.40.0-preview.3) alongside major strides in core reliability and agent intelligence. The engineering team and community are heavily focused on fixing terminal UI regressions (especially Windows Backspace handling), bolstering MCP server stability, and laying the groundwork for AST-aware codebase mapping and enhanced auto-memory routing.

## 2. Releases
*   **[v0.40.0-preview.3](https://github.com/google-gemini/gemini-cli/compare/v0.40.0-preview.2...v0.40.0-preview.3):** Latest preview build rolling up recent architectural changes.
*   **[v0.39.1](https://github.com/google-gemini/gemini-cli/compare/v0.39.0...v0.39.1):** Stable patch release incorporating recent bug fixes.

## 3. Hot Issues
1.  **[Allow skills to be activated manually (#21165)](https://github.com/google-gemini/gemini-cli/issues/21165):** Users want the ability to force-trigger installed skills using `/command` syntax rather than relying on the agent's implicit activation. Highly requested by users who know exactly which tool they need.
2.  **[Assess AST-aware file reads (#22745)](https://github.com/google-gemini/gemini-cli/issues/22745):** A major architectural EPIC investigating Abstract Syntax Tree (AST) tooling to let the agent read method bounds precisely, reducing wasted tokens and misaligned reads.
3.  **[Shell command execution gets stuck (#25166)](https://github.com/google-gemini/gemini-cli/issues/25166):** A critical bug where the CLI hangs on "Waiting input" after a simple shell command finishes. Gaining significant traction (+3 👍) as it blocks basic workflows.
4.  **[Gemini CLI keeps asking for permissions (#24916)](https://github.com/google-gemini/gemini-cli/issues/24916):** An annoying regression where "allow for all future sessions" fails to persist, causing the CLI to repeatedly prompt for the same file permissions.
5.  **[Subagent recovery hides interruptions (#22323)](https://github.com/google-gemini/gemini-cli/issues/22323):** A high-priority (P1) bug where subagents falsely report `status: "success"` when hitting `MAX_TURNS`, hiding the fact that the task was actually interrupted.
6.  **[Implement memory routing: global vs. project (#22819)](https://github.com/google-gemini/gemini-cli/issues/22819):** A vital enhancement to separate user memory (e.g., "I prefer concise commits" -> `~/.gemini/`) from project-specific context (`.gemini/`).
7.  **[Browser Agent ignores settings.json (#22267)](https://github.com/google-gemini/gemini-cli/issues/22267):** A bug causing the Browser Agent to completely ignore `maxTurns` and other overrides defined in global or project settings.
8.  **[Model frequently creates tmp scripts in random spots (#23571)](https://github.com/google-gemini/gemini-cli/issues/23571):** When restricted from direct execution, the model litters tmp scripts across the workspace, creating heavy cleanup overhead.
9.  **[Table renders incrementally during streaming (#25218)](https://github.com/google-gemini/gemini-cli/issues/25218):** A UI/UX bug where tables re-render chunk-by-chunk during streaming, breaking layout and causing accessibility issues for screen readers.
10. **[Encounters 400 error with > 128 tools (#24246)](https://github.com/google-gemini/gemini-cli/issues/24246):** As extensions grow, users are hitting API limits due to the CLI passing too many tools to the model without enough scoping logic.

## 4. Key PR Progress
1.  **[feat(repo-metrics): implement time-series analysis and reflex refactoring (#25945)](https://github.com/google-gemini/gemini-cli/pull/25945):** Refactors internal metrics into a time-series analysis phase and cleans up architecture by renaming "processes" to "reflexes."
2.  **[fix(cli-ui): revert backspace handling to fix Windows regression (#25941)](https://github.com/google-gemini/gemini-cli/pull/25941) & [Add modifyOtherKeys fallback (#25943)](https://github.com/google-gemini/gemini-cli/pull/25943):** An active, multi-PR effort to fix a severe Windows regression where standard Backspace acted like Ctrl+Backspace, deleting whole words.
3.  **[feat(memory): persist auto-memory scratchpad for skill extraction (#25873)](https://github.com/google-gemini/gemini-cli/pull/25873):** Persists workflow hints into session metadata, improving auto-memory skill extraction and reducing extraction turns by ~16.7%.
4.  **[feat(cli): enable permanent tool approval by default (#25938)](https://github.com/google-gemini/gemini-cli/pull/25938):** Directly addresses permission fatigue by turning on `enablePermanentToolApproval` by default.
5.  **[fix(core): prevent MCP tool wiping on background discovery failures (#25937)](https://github.com/google-gemini/gemini-cli/pull/25937):** Crucial fix stopping the `ToolRegistry` from erasing MCP tools if a background refresh times out.
6.  **[fix(cli): filter blocked MCP servers case-insensitively (#25936)](https://github.com/google-gemini/gemini-cli/pull/25936):** Resolves an issue where MCP servers were duplicated in `/mcp list` due to strict casing mismatches.
7.  **[fix(core): fail closed in YOLO mode when shell parsing fails (#25935)](https://github.com/google-gemini/gemini-cli/pull/25935):** Important security patch ensuring that restricted shell commands block execution safely if the parser fails.
8.  **[fix(cli): re-enable keyboard protocols after terminal clear (#25944)](https://github.com/google-gemini/gemini-cli/pull/25944):** Fixes a bug where `/clear` disabled advanced keyboard protocols, breaking shortcuts until manual setup was run.
9.  **[feat(voice): implement real-time voice mode (#24174)](https://github.com/google-gemini/gemini-cli/pull/24174):** Introduces voice dictation via Gemini Live API and local `whisper.cpp`, aiming for a native zero-install transcription experience.
10. **[feat(vertex): add vertexLocation config setting (#25362)](https://github.com/google-gemini/gemini-cli/pull/25362):** Allows users to override the default `us-central1` region, fixing 404 errors when accessing preview models deployed globally.

## 5. Feature Request Trends
*   **Advanced Context & Memory Management:** Users and maintainers are pushing heavily for smarter memory routing (global vs. project), proactive memory writes, and auto-memory skill extraction using scratchpads.
*   **AST-Aware Codebase Navigation:** Strong momentum behind integrating AST tools (like tilth or glyph) to let the agent map codebases structurally rather than relying on text-parsing.
*   **Better Agent Control & Reliability:** The community wants manual skill triggers (issue #21165), trackers that update dynamically during execution phases, and safeguards against destructive agent behaviors (like forcing `git reset`).
*   **Voice Mode Integration:** Real-time audio input is highly requested, driving development toward pluggable transcription backends (Cloud vs. Local Whisper).

## 6. Developer Pain Points
*   **Permission Fatigue:** The CLI repeatedly asking for tool/file permissions across sessions remains a top frustration, though recent PRs enabling permanent approvals aim to resolve this.
*   **Terminal/Windows UI Bugs:** Developers continue to face regressions in terminal handling, particularly broken Backspace key behavior on Windows and UI corruption over SSH connections.
*   **MCP Stability:** Background timeouts and casing bugs causing connected MCP servers to be wiped or erroneously duplicated is a growing pain point for users relying on extensions.
*   **Cluttered Workspaces:** When standard tool paths fail, the model creates messy temp scripts, forcing developers to manually clean their directories before commits.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-25

## 1. Today's Highlights
GitHub Copilot CLI rolled out a rapid-fire series of patch releases (v1.0.36 and two follow-up patches), bringing UX polish like a subcommand picker indicator, tab-completion for slash commands, and a new "changes" statusline toggle. On the community side, a critical PR landed to fix a cross-platform extension bootstrap path mismatch, while hot issues highlighted persistent pain points around platform compatibility (Alpine segfaults, Windows CRLF issues, PowerShell 5.1 hardcoding) and a growing appetite for more granular control over agents, MCP servers, and concurrent sessions.

---

## 2. Releases

### v1.0.36 (2026-04-24)
- Subcommand picker now shows a selection indicator (❯) next to the highlighted item.
- Clearer error message with a direct link when multiple Copilot licenses are detected.
- Fixed an issue where `preToolUse.matcher` was ignored; hooks with matchers now run only for matching tool names.

### v1.0.36-1 (2026-04-24)
- **Added:** `'changes'` statusline toggle to display added/removed line counts for the session.
- **Improved:** Double `Esc` now required to cancel in-flight work, preventing accidental interruptions.
- **Fixed:** Custom instruction files in `.gitignored` directories (e.g., `.github/instructions/`) now load correctly.

### v1.0.36-0 (2026-04-24)
- **Improved:** Claude Opus 4.6 now uses medium reasoning effort by default.
- **Fixed:** Saving debug logs or feedback bundles no longer overwrites existing archive files.
- **Fixed:** Custom agents, skills, and commands from `~/.claude/` are no longer loaded by the Copilot CLI (boundary enforcement).

### v1.0.35 (2026-04-23)
- Slash commands support tab-completion for arguments and subcommands.
- Shell escape commands (`!`) now use `$SHELL` when set, instead of always invoking `/bin/sh`.
- Permission prompts appear correctly in remote sessions for the CLI TUI.
- Session selector now shows branch names and idle/in-use status.

---

## 3. Hot Issues

1. **[#107 — Tool calls cause Segmentation Fault on Alpine Linux](https://github.com/github/copilot-cli/issues/107)** (13 comments, 👍 4)  
   A long-standing crash on Alpine (musl libc) affecting all tool calls. Remains open with no confirmed fix, frustrating container-first developers.

2. **[#2205 — Scroll usability broken in Terminator terminal](https://github.com/github/copilot-cli/issues/2205)** (8 comments, 👍 5)  
   Mouse scroll now navigates sent inputs instead of agent output history. A regression that breaks review workflows for power users.

3. **[#254 — CLI repeatedly asks to re-login](https://github.com/github/copilot-cli/issues/254)** (8 comments, 👍 3)  
   Authentication token persistence failure requiring re-auth on every session. Marked "unable-to-reproduce" but multiple users report the behavior.

4. **[#2769 — Copilot Pro+ weekly rate limit not resetting](https://github.com/github/copilot-cli/issues/2769)** (7 comments, 👍 3)  
   Rate limit counters fail to clear after the expected reset window, blocking Pro+ subscribers. Now closed, likely addressed server-side.

5. **[#1148 — CRLF line-ending corruption on Windows](https://github.com/github/copilot-cli/issues/1148)** (5 comments, 👍 5)  
   Copilot CLI rewrites LF files to CRLF on edit, breaking git diffs and cross-platform collaboration. A high-impact data-integrity issue.

6. **[#1680 — pwsh.exe hardcoded, CLI unusable on Windows 11 with PowerShell 5.1 only](https://github.com/github/copilot-cli/issues/1680)** (5 comments, 👍 8)  
   Six hardcoded `pwsh.exe` references prevent any shell command from running on stock Windows 11. The most-upvoted Windows issue.

7. **[#2374 — Autopilot enters infinite loop](https://github.com/github/copilot-cli/issues/2374)** (5 comments)  
   After approving a `/plan`, autopilot gets stuck repeating actions. Directly impacts trust in autonomous workflows.

8. **[#1981 — Custom instructions skipped when gitignored](https://github.com/github/copilot-cli/issues/1981)** (2 comments, 👍 5) — **Closed**  
   `.github/instructions/` was silently skipped if the path was in `.gitignore`. Fixed in v1.0.36-1.

9. **[#1464 — Skills beyond ~32 alphabetical position unreachable](https://github.com/github/copilot-cli/issues/1464)** (3 comments, 👍 4)  
   Token-limit truncation hides lower-priority skills from the model, making them effectively invisible. A scaling problem for heavy skill users.

10. **[#2630 — Custom agent `mcp-servers` not connected in sub-agent or `--prompt` contexts](https://github.com/github/copilot-cli/issues/2630)** (3 comments)  
    MCP server declarations in custom agent YAML are ignored outside the primary interactive session, crippling composable agent architectures.

---

## 4. Key PR Progress

*Only one PR was updated in the last 24 hours, but it addresses a high-impact cross-platform bug:*

- **[#2957 — fix: extension bootstrap path mismatch in launchExtension()](https://github.com/github/copilot-cli/pull/2957)** by **polajenko** (Open)  
  Fixes the root cause of [#2890](https://github.com/github/copilot-cli/issues/2890): when both `universal/` and platform-specific cache directories exist, the forked child process's security check expects the bootstrap path under the SEA binary directory, but `app.js` passes a path from the `pkg` cache. This caused extensions in `.github/extensions/` to fail to load on macOS and Windows. The PR aligns the bootstrap path resolution to use the correct platform-specific directory.

---

## 5. Feature Request Trends

1. **Agent & sub-agent customization** — Requests for per-agent reasoning effort ([#2904](https://github.com/github/copilot-cli/issues/2904)), per-agent model overrides ([#2939](https://github.com/github/copilot-cli/issues/2939)), and MCP server connections for sub-agents ([#2630](https://github.com/github/copilot-cli/issues/2630)) show strong demand for composable, fine-grained agent architectures.

2. **MCP server management UX** — Proposals to add a "disable" option to the `/mcp show` menu ([#2956](https://github.com/github/copilot-cli/issues/2956)), browse servers from a configured registry ([#2944](https://github.com/github/copilot-cli/issues/2944)), and support `.mcp.json` in the repo root ([#2938](https://github.com/github/copilot-cli/issues/2938)) indicate MCP discoverability and toggleability is a priority.

3. **Session & context management** — Feature requests for built-in multi-session management ([#2966](https://github.com/github/copilot-cli/issues/2966)), a diff-only review view ([#2964](https://github.com/github/copilot-cli/issues/2964)), and environment-variable control of reasoning effort ([#2559](https://github.com/github/copilot-cli/issues/2559)) suggest power users want more control over parallel workflows and context windows.

4. **Plugin lifecycle** — Toggling plugins on/off without uninstalling ([#2714](https://github.com/github/copilot-cli/issues/2714)) is requested to achieve parity with Gemini CLI and Claude Code.

---

## 6. Developer Pain Points

- **Platform stability gaps:** Alpine segfaults (#107), Windows CRLF corruption (#1148), and PowerShell 5.1 hardcoding (#1680) remain unresolved, eroding trust for non-macOS users.
- **Context & token limits:** Skill truncation at ~32 items (#1464) and path-specific custom instructions bloating the context window (#1423) hurt developers with large configurations.
- **Autopilot reliability:** Infinite-loop behavior (#2374) and agent MCP disconnection in sub-agent contexts (#2630) undermine confidence in autonomous workflows.
- **Auth friction:** Repeated login prompts (#254) and rate-limit reset failures (#2769) interrupt developer flow, especially for business/Pro+ subscribers.
- **Terminal UX regressions:** Scroll behavior changes (#2205) and missing dependency checks on Wayland (#2511) break expected interactions for specific terminal environments.

---

*Data sourced from [github.com/github/copilot-cli](https://github.com/github/copilot-cli) on 2026-04-25.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-25

## 1. Today's Highlights
Kimi Code CLI shipped **version 1.39.0**, bringing preserved thinking via the `KIMI_MODEL_THINKING_KEEP` environment variable, shell caret rendering fixes, and a dual-mode (`yolo` vs. `afk`) refactor for non-interactive usage. Community activity remains high around multi-agent stability, Windows shell hardcoding, and MCP JSON schema compatibility. Several contributor-driven PRs also landed, addressing UTF-8 BOM config handling, plan file directory respect, and a TOCTOU race condition in the wire protocol.

---

## 2. Releases

**v1.39.0** ([Release](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.39.0))
- **feat(kimi)**: New `KIMI_MODEL_THINKING_KEEP` env variable to preserve model thinking tokens in output.
- **fix(shell)**: Approval request text input now correctly renders the caret cursor ([PR #2005](https://github.com/MoonshotAI/kimi-cli/pull/2005)).
- Internal bumps: `kosong` updated to 0.52.0; changelog consolidation across docs.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#2062 — Default skills auto-activation](https://github.com/MoonshotAI/kimi-cli/issues/2062) | Feature request for a `default_skills` config so users don't have to manually invoke skills every session. Already has a matching PR (#2063), showing fast community-maintainer alignment. |
| 2 | [#2043 — UTF-8 BOM in config causes crash](https://github.com/MoonshotAI/kimi-cli/issues/2043) | Editors that silently add BOM break TOML parsing. A fix PR (#2065) was opened the same day—classic quick-turn compatibility fix. |
| 3 | [#2061 — MCP JSON schema rejection](https://github.com/MoonshotAI/kimi-cli/issues/2061) | Third-party MCP tools with `$ref` expansion produce conflicting keywords, causing `invalid_request_error`. Important for the MCP plugin ecosystem. |
| 4 | [#1990 — IDEA terminal closes on send](https://github.com/MoonshotAI/kimi-cli/issues/1990) | JetBrains terminal integration breaks after message submission. Affects a large segment of the Java/Kotlin developer audience. |
| 5 | [#2038 — Git subprocess causes typing lag](https://github.com/MoonshotAI/kimi-cli/issues/2038) | Bottom toolbar's synchronous `git` calls introduce visible keystroke latency. Directly impacts perceived responsiveness. |
| 6 | [#2066 — PowerShell 5.1 hardcoding on Windows](https://github.com/MoonshotAI/kimi-cli/issues/2066) | `kimi-cli` ignores PowerShell 7 (`pwsh`), forcing outdated Windows PowerShell 5.1. The author provided a full implementation for adoption. |
| 7 | [#2059 — Error messages consume tokens](https://github.com/MoonshotAI/kimi-cli/issues/2059) | Users are billed for tokens even when the API returns errors. Raises concerns about billing fairness and transparency. |
| 8 | [#2058 — Custom agent skips AGENTS.md](https://github.com/MoonshotAI/kimi-cli/issues/2058) | When launching with a custom agent, the `AGENTS.md` context file is not loaded, leading to inconsistent agent behavior. |
| 9 | [#2049 — Session history lost on resume](https://github.com/MoonshotAI/kimi-cli/issues/2049) | `/sessions` resume shows history on screen but the LLM context is empty. Critical for long-running workflow continuity. |
| 10 | [#1344 — Persistent 400 API errors](https://github.com/MoonshotAI/kimi-cli/issues/1344) | Long-running invalid request errors (21 comments), indicating a recurring provider-side or payload-format issue that still draws reports. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#2067 — fix(transport): prevent connection drops on large context](https://github.com/MoonshotAI/kimi-cli/pull/2067) | Addresses APITimeoutError when context exceeds ~130k tokens by tuning `httpx` keepalive, increasing chunk timeouts, and adding retry resilience. |
| 2 | [#2065 — fix(config): tolerate UTF-8 BOM](https://github.com/MoonshotAI/kimi-cli/pull/2065) | Reads config files with `utf-8-sig` encoding, silently ignoring BOM. Includes regression test. |
| 3 | [#2063 — feat(config): default_skills auto-activation](https://github.com/MoonshotAI/kimi-cli/pull/2063) | Implements `default_skills` config array to activate specified skills at session start. |
| 4 | [#2064 — fix(plan): respect KIMI_SHARE_DIR](https://github.com/MoonshotAI/kimi-cli/pull/2064) | Moves plan file storage from hardcoded `~/.kimi/plans` to the user-configured share directory with auto-migration. |
| 5 | [#2045 — fix(yolo): unblock AskUserQuestion; add afk mode](https://github.com/MoonshotAI/kimi-cli/pull/2045) | Splits `--yolo` into orthogonal `yolo` (auto-approve) and `afk` (truly non-interactive) modes, fixing the model being unable to ask clarifying questions. |
| 6 | [#2036 — feat(tools): strict schema validation for core tools](https://github.com/MoonshotAI/kimi-cli/pull/2036) | Enables OpenAI/Anthropic strict schema validation on `Shell`, `ReadFile`, `Grep`, `WriteFile`, `StrReplaceFile`, and `SetTodoList` for improved reliability. |
| 7 | [#2053 — fix(kimi): default reasoning_key for DeepSeek](https://github.com/MoonshotAI/kimi-cli/pull/2053) | **Merged.** Fixes silent dropping of `reasoning_content` when using DeepSeek V4 via the OpenAI legacy provider. |
| 8 | [#2050 — fix(utils): detect virtual interface IPs](https://github.com/MoonshotAI/kimi-cli/pull/2050) | Enables `kimi web --public` to work over Tailscale/WireGuard/Docker bridges by including virtual network interfaces in the allowed list. |
| 9 | [#2003 — fix(soul): re-inject yolo reminder after compaction](https://github.com/MoonshotAI/kimi-cli/pull/2003) | Ensures the YOLO mode reminder survives context compaction by resetting the one-shot injection flag. |
| 10 | [#2056 — fix(wire): eliminate TOCTOU race](https://github.com/MoonshotAI/kimi-cli/pull/2056) | Fixes a time-of-check-to-time-of-use race in `WireFile.append_record` that could crash on file deletion between exists check and stat call. |

---

## 5. Feature Request Trends

- **Session-level defaults & personalization** — `default_skills` (#2062/#2063), custom agent context loading (#2058), and skill system prompt scoping (#2044) all point toward users wanting persistent, project-aware configurations that survive session restarts.
- **Windows & cross-platform parity** — PowerShell 7 support (#2066), IDEA terminal compatibility (#1990), and virtual interface detection (#2050) reflect a growing Windows-user base demanding first-class support.
- **MCP & plugin ecosystem maturity** — JSON schema validation errors with third-party MCP servers (#2061) and strict tool mode (#2036) signal the community is pushing harder on MCP integrations and needs robust schema handling.
- **Observability & billing transparency** — Token consumption on errors (#2059) and inverted quota colors (#2039) highlight demand for clearer usage metrics and fairer billing.

---

## 6. Developer Pain Points

1. **Stability under large contexts** — Timeouts and connection drops at ~130k tokens (#2067) remain a top frustration, especially for users working on large codebases.
2. **Windows integration friction** — Hardcoded PowerShell 5.1 (#2066), JetBrains terminal crashes (#1990), and VS Code connection errors (#1458) collectively make Windows a second-class experience.
3. **Token cost anxiety** — Being charged for failed requests (#2059) erodes trust in the billing model.
4. **Context & session continuity** — Lost session history on resume (#2049) and missing `AGENTS.md` loading with custom agents (#2058) break long-running workflows.
5. **UI responsiveness** — Git subprocess-induced typing lag (#2038) and hidden slash prompt transcripts (#2051) degrade the interactive shell experience.
6. **MCP compatibility gaps** — Schema conflicts with third-party MCP servers (#2061) block adoption of the plugin ecosystem that `kimi-cli` is positioning itself around.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-25

## 1. Today's Highlights

OpenCode rolled out two rapid-fire patches (**v1.14.23** and **v1.14.24**) to address critical DeepSeek V4 reasoning round-trip failures and inherited model config regressions. The community was highly active around **GPT-5.5 support**, with multiple issues and a same-day merged fix addressing context window mismatches when routing through the Codex backend. Meanwhile, contributors submitted a wave of Effect Schema refactoring PRs as the project continues its migration away from Zod.

---

## 2. Releases

### [v1.14.24](https://github.com/anomalyco/opencode/releases/tag/v1.14.24)
- **DeepSeek fix:** Assistant messages now always include `reasoning_content`, preventing provider formatting failures on multi-turn conversations.
- **Model config fix:** Inherited model configs now correctly preserve interleaved-capability fields when falling back to an existing model (@07akioni).
- **Experimental HTTP API endpoint** added (details truncated in release notes).

### [v1.14.23](https://github.com/anomalyco/opencode/releases/tag/v1.14.23)
- **Package registry:** Custom `.npmrc` registry settings are now respected when checking package versions and updates.
- **TUI fix:** All non-synthetic text blocks in user messages are now rendered, instead of only showing the first text block.

---

## 3. Hot Issues

1. **[#24104](https://github.com/anomalyco/opencode/issues/24104) — DeepSeek thinking mode breaks on conversation continuation** *(CLOSED, 19 comments)*  
   DeepSeek models with `thinking: {type: "enabled"}` fail after the first assistant response because `reasoning_content` isn't passed back. Directly addressed by v1.14.24 and PR #24150.

2. **[#24190](https://github.com/anomalyco/opencode/issues/24190) — DeepSeek V4: 400 error on multi-turn tool calls** *(OPEN, 15 comments, 👍 5)*  
   A parallel DeepSeek V4 issue where `reasoning_content` isn't round-tripped in streaming paths, causing tool-call failures from the second turn onward.

3. **[#24171](https://github.com/anomalyco/opencode/issues/24171) — GPT-5.5 Codex context limit mismatch** *(CLOSED, 2 comments, 👍 5)*  
   Codex dropped its token limit to 400k for GPT-5.5, but OpenCode still assumed 1M—causing context overflow. Fixed same-day in PR #24212.

4. **[#24039](https://github.com/anomalyco/opencode/issues/24039) — Add GPT-5.5 support for OpenAI provider** *(CLOSED, 16 comments, 👍 12)*  
   Feature request for first-class `gpt-5.5` model support. High community interest with 12 thumbs-up; discussions are ongoing about provider-level configuration.

5. **[#17516](https://github.com/anomalyco/opencode/issues/17516) — `opencode run` hangs after completing tool calls** *(OPEN, 13 comments, 👍 6)*  
   A persistent process-lifecycle bug where `opencode run` never exits after model work completes, requiring manual kill. No fix yet.

6. **[#12609](https://github.com/anomalyco/opencode/issues/12609) — System prompts force ASCII-only output** *(OPEN, 6 comments, 👍 9)*  
   The default system prompt instructs LLMs to avoid non-ASCII characters, breaking non-English language workflows. Significant international community concern.

7. **[#11831](https://github.com/anomalyco/opencode/issues/11831) — YOLO Mode: Auto-approve all permission prompts** *(OPEN, 5 comments, 👍 20)*  
   The highest-thumbs-up feature request: a mode to auto-approve all tool permissions while still respecting explicit `deny` rules. Resonates strongly with power users.

8. **[#8785](https://github.com/anomalyco/opencode/issues/8785) — Bun runtime crash on Windows** *(OPEN, 29 comments, 👍 6)*  
   A long-standing Bun v1.3.5 crash on Windows x64 that continues to affect users. The most-commented issue in the tracker.

9. **[#6680](https://github.com/anomalyco/opencode/issues/6680) — View archived sessions on desktop** *(OPEN, 25 comments)*  
   Request to surface archived sessions via the desktop app's sidebar menu. High engagement shows demand for better session management.

10. **[#24199](https://github.com/anomalyco/opencode/issues/24199) — Paste images into built-in `questions` tool** *(OPEN, 3 comments, 👍 1)*  
    A newly filed request to allow image pasting when the agent calls the `question`/`ask-user` tool—highlighting the multimodal interaction gap.

---

## 4. Key PR Progress

| PR | Title | Status | Why It Matters |
|---|---|---|---|
| [#24150](https://github.com/anomalyco/opencode/pull/24150) | fix(transform): inject reasoning_content for ALL assistant msgs | **CLOSED/Merged** | Direct fix for DeepSeek thinking mode (#24104); ensures empty assistant messages also carry `reasoning_content`. |
| [#24200](https://github.com/anomalyco/opencode/pull/24200) | fix: preserve empty reasoning_content for DeepSeek V4 | **CLOSED/Merged** | Complements #24150 by covering non-streaming paths where empty `reasoning_content` was silently discarded. |
| [#24212](https://github.com/anomalyco/opencode/pull/24212) | fix: ensure gpt-5.5 compacts at correct context size | **CLOSED/Merged** | Resolves the 400k vs. 1M context mismatch (#24171) when using OpenAI OAuth routing. |
| [#24210](https://github.com/anomalyco/opencode/pull/24210) | feat(opencode): add `/context` command | **OPEN** | New TUI command to inspect what's actually filling the context window—directly helps debug token bloat (#11995). |
| [#22676](https://github.com/anomalyco/opencode/pull/22676) | feat: proper globbing for permissions | **OPEN** | Replaces naive `"*"` matching with real glob semantics for `edit`, `read`, and `external_directory` permissions. |
| [#23501](https://github.com/anomalyco/opencode/pull/23501) | fix: OpenAI-compatible provider improvements | **OPEN** | Bundles fixes for system messages, image support, and stream interruption across Ollama, local models, and other compatible providers. |
| [#24213](https://github.com/anomalyco/opencode/pull/24213) | refactor(ripgrep): migrate result schemas to Effect | **CLOSED/Merged** | Part of the ongoing Zod→Effect Schema migration; converts ripgrep JSON result parsing. |
| [#24216](https://github.com/anomalyco/opencode/pull/24216) | test(httpapi): cover Hono bridge middleware | **CLOSED/Merged** | Adds tests for the new HTTP API bridge covering auth, instance selection, and header handling. |
| [#24215](https://github.com/anomalyco/opencode/pull/24215) | fix: shell cwd after login startup | **OPEN** | Prevents shell startup files (`.bashrc`, etc.) from resetting the working directory, which broke shell tool commands in CI and some local setups. |
| [#22612](https://github.com/anomalyco/opencode/pull/22612) | fix(copilot): handle chat tool call IDs | **CLOSED/Merged** | Fixes numeric tool call IDs from NVIDIA NIM/Kimi models (#19947) by routing them through the proper generic openai-compatible path. |

---

## 5. Feature Request Trends

- **GPT-5.5 first-class support** (#24039, #24171): Multiple issues and rapid merges show the community is actively adopting OpenAI's latest model and needs accurate context limits and provider configuration.
- **DeepSeek V4 reasoning round-trip** (#24104, #24190, #24188): Three separate issues on the same theme—DeepSeek's strict `reasoning_content` requirement is a recurring integration pain point.
- **Self-hosted / open-source provider integration** (#13537 — Open WebUI as provider, 👍 13): Strong demand for plugging OpenCode into self-hosted AI backends.
- **Provider-hosted web search** (#10704, 👍 7): Users want native web search capability from models that support it (Codex, Google), rather than requiring MCP tool servers.
- **Context window transparency and optimization** (#11995 — tool descriptions consume ~4k tokens; #24210 — `/context` command): Growing awareness that system prompt token overhead is eating into useful context.
- **Multimodal input** (#24199 — image paste in questions tool): Users want richer interaction modalities beyond text.

---

## 6. Developer Pain Points

- **Process lifecycle bugs**: `opencode run` hanging indefinitely (#17516) and silent failures when desktop env vars leak into CLI sessions (#14532) continue to hurt headless/CI workflows.
- **Non-English language support**: The hardcoded ASCII-only system prompt directive (#12609) is a significant blocker for international teams using non-Latin scripts.
- **TUI shell integration quirks**: `!ls` producing no output (#17530, #12206) and numpad keys being ignored in VS Code terminals (#24208) suggest brittle terminal I/O handling.
- **Subtle permission model confusion**: Glob-based permission matching (#22676) is still being reworked, and the current behavior is a source of user surprise.
- **Session state loss**: Todo lists being forgotten after compaction (#5934) undermines trust in long-running sessions.
- **LSP reliability regression** (#23937): Users report that LSP features stopped working after v1.14.20 despite being documented as enabled by default, with no clear migration path from the removed `OPENCODE_EXPERIMENTAL_LSP_TOOL` flag.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for 2026-04-25, based on the repository data.

### 1. Today's Highlights
The Pi ecosystem saw a massive surge in activity following the release of **v0.70.0 to v0.70.2**, which officially introduced built-in DeepSeek V4 provider support and provider timeout/retry controls. DeepSeek V4 integration dominated the daily discourse, resulting in numerous community patches to handle its strict `reasoning_content` API requirements. Additionally, significant infrastructure updates were proposed, including a built-in auto-updater (`pi update`) and the introduction of a `persistModelChanges` setting to prevent model switches from overwriting global defaults.

### 2. Releases
*   **[v0.70.2](https://github.com/badlogic/pi-mono/releases/tag/v0.70.2)**: Fixed provider retry/timeout forwarding to omit undefined request controls, preventing downstream SDK validation errors like `timeout must be an integer`.
*   **[v0.70.1](https://github.com/badlogic/pi-mono/releases/tag/v0.70.1)**: Added official DeepSeek provider support with V4 Flash/Pro models and DEEPSEEK_API_KEY authentication, alongside new provider request timeout/retry controls.
*   **[v0.70.0](https://github.com/badlogic/pi-mono/releases/tag/v0.70.0)**: Introduced a searchable auth provider login flow (`/login`), allowing developers to fuzzy search/filter configured providers.

### 3. Hot Issues
1.  **[#3636](https://github.com/badlogic/pi-mono/issues/3636) DeepSeek 4 `reasoning_content` Error**: Users reported 400 errors during debugging sessions because the `reasoning_content` in thinking mode wasn't passed back to the API. This became the most discussed issue, highlighting the strictness of DeepSeek's new API. *(9 comments)*
2.  **[#3208](https://github.com/badlogic/pi-mono/issues/3208) Custom Thinking Levels per Model**: A highly requested feature (8 👍) asking for `models.json` to define specific thinking levels so `Shift+Tab` only cycles through supported tiers. *(8 comments)*
3.  **[#2023](https://github.com/badlogic/pi-mono/issues/2023) `pi.runWhenIdle()` request**: Developers need a way to schedule work only after the agent has fully settled, avoiding conflicts with current LLM tool execution. *(7 comments)*
4.  **[#3543](https://github.com/badlogic/pi-mono/issues/3543) Remove URL gates for long cache retention**: Users are frustrated by URL gating preventing `PI_CACHE_RETENTION=long` from working behind corporate proxies. *(5 comments)*
5.  **[#3630](https://github.com/badlogic/pi-mono/issues/3630) LaTeX Formatting**: Users are requesting built-in math/LaTeX rendering in markdown to better visualize complex outputs. *(4 comments)*
6.  **[#3648](https://github.com/badlogic/pi-mono/issues/3648) macOS IME `ctrl-c` bug**: `Control-C` fails to register when using specific macOS Input Methods (like Zhuyin), affecting prompt input and navigation. *(4 comments)*
7.  **[#2144](https://github.com/badlogic/pi-mono/issues/2144) Cannot paste images**: Despite competitor support, Pi currently lacks the ability to handle `Ctrl+V` image pasting from the clipboard. *(3 comments)*
8.  **[#3638](https://github.com/badlogic/pi-mono/issues/3638) Azure Foundry Support**: Users requested normalization fixes for Azure-hosted endpoints (`*.cognitiveservices.azure.com`) to stop appending `/v1` incorrectly. *(3 comments)*
9.  **[#3602](https://github.com/badlogic/pi-mono/issues/3602) `ctx.ui.setStatus()` re-render bug**: Extension developers noted that setting the footer status after an `await fetch()` doesn't visually re-render until the next user keypress. *(3 comments)*
10. **[#3647](https://github.com/badlogic/pi-mono/issues/3647) GPT 5.4 Auto-compaction**: Auto-compaction triggers at ~69% context usage for GPT 5.4, causing `context_length_exceeded` errors instead of waiting for the actual limit. *(2 comments)*

### 4. Key PR Progress
1.  **[#3680](https://github.com/badlogic/pi-mono/pull/3680) Add built-in update command**: Implements `pi update` to seamlessly update the Pi CLI itself, bringing core infrastructure up to modern standards.
2.  **[#3644](https://github.com/badlogic/pi-mono/pull/3644) Add DeepSeek V4 support**: The core merge adding the DeepSeek provider, thinking mode support, and xhigh effort mapping.
3.  **[#3632](https://github.com/badlogic/pi-mono/pull/3632) `persistModelChanges` setting**: Fixes a major UX annoyance by allowing users to keep `/model` selections session-only instead of saving them to `settings.json`. 
4.  **[#3659](https://github.com/badlogic/pi-mono/pull/3659) Fix DeepSeek tool-call history**: Injects empty `reasoning_content` for tool-call history to prevent DeepSeek V4 from throwing 400 errors during agentic workflows.
5.  **[#3661](https://github.com/badlogic/pi-mono/pull/3661) DeepSeek V4 Pro xhigh reasoning**: Adds support for `reasoning_effort=max` mapping specifically for `deepseek-v4-pro` model IDs.
6.  **[#3656](https://github.com/badlogic/pi-mono/pull/3656) Preserve `reasoning_content` on replay**: Ensures actual prior reasoning is sent back to DeepSeek rather than empty strings, maintaining context integrity.
7.  **[#3669](https://github.com/badlogic/pi-mono/pull/3669) Repopulate prompt history on `/reload`**: Fixes a bug where pressing the up arrow on an empty prompt failed to cycle through history after a session reload.
8.  **[#1157](https://github.com/badlogic/pi-mono/pull/1157) Anthropic Vertex AI provider**: Introduces a `anthropic-vertex` API type supporting ADC (Application Default Credentials) for GCP deployments.
9.  **[#3664](https://github.com/badlogic/pi-mono/pull/3664) Anthropic tool_use.id fallback**: Prevents API crashes by guaranteeing `normalizeToolCallId` generates a compliant placeholder even if the input ID is empty.
10. **[#3618](https://github.com/badlogic/pi-mono/pull/3618) GPT-5.5 Codex alignment**: Updates capabilities and service-tier pricing for OpenAI's newest model, treating it as an xhigh-capable model.

### 5. Feature Request Trends
*   **DeepSeek V4 Reasoning Integration**: The community is heavily focused on robust support for thinking modes, specifically proper handling, replay, and display of `reasoning_content`.
*   **Session & Model Persistence**: Users want granular control over global vs. session settings (e.g., [`persistModelChanges`](https://github.com/badlogic/pi-mono/pull/3632)), preventing one-off model switches from altering global defaults.
*   **Rich Markdown & UI Extensions**: Requests for [LaTeX rendering](https://github.com/badlogic/pi-mono/issues/3630) and [render hooks for thinking blocks](https://github.com/badlogic/pi-mono/issues/3629) show a desire for highly customizable, rich inline UI.
*   **Advanced Agent Lifecycle Control**: Developers are asking for tools like [`runWhenIdle()`](https://github.com/badlogic/pi-mono/issues/2023) and [programmatic session switching](https://github.com/badlogic/pi-mono/issues/3673) to build more reliable, autonomous background agents.

### 6. Developer Pain Points
*   **Strict Third-Party API Quirks**: Developers are repeatedly frustrated by brittle 400 errors from providers (DeepSeek, DashScope/Qwen) that reject empty arrays, specific empty fields, or unpaired reasoning items.
*   **Terminal UI Quirks**: Persistent low-level friction with terminal emulators and OS input methods, such as [broken `Ctrl-C` on macOS IME](https://github.com/badlogic/pi-mono/issues/3648) and [flickering `Ctrl+G`](https://github.com/badlogic/pi-mono/issues/3675).
*   **Windows Path Handling**: [Plugin installation failures on Windows](https://github.com/badlogic/pi-mono/issues/3642) due to unescaped spaces in file paths (e.g., `C:\Users\First Last\...`) continue to plague a subset of the user base.
*   **Extension UI Blocking**: Extension authors find it limiting that the UI framework fails to re-render footers synchronously after async calls or doesn't allow the working loader to be completely hidden without reserving blank space.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-25

Here is the technical digest for the `QwenLM/qwen-code` repository covering the latest releases, issues, and pull requests from the last 24 hours.

---

## 1. Today's Highlights
Qwen Code shipped **v0.15.2**, bringing an intelligent auto-titling feature for sessions and a crucial fix for file reading. The community remains highly engaged regarding the proposed **OAuth free tier policy adjustment** (Issue #3203), which dominated discussions with 119 comments. Under the hood, significant performance gains were achieved by merging a PR that cuts **runtime sync I/O on tool hot paths by 91%**, drastically reducing filesystem overhead during tool-heavy prompts.

---

## 2. Releases
### [v0.15.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.2)
*   **feat(session):** Added automatic session titling via a fast model, along with a new `/rename --auto` command (PR [#3540](https://github.com/QwenLM/qwen-code/pull/3540)).
*   **fix(core):** Fixed a bug where an empty `pages` parameter in `ReadFile` was not treated as unset (PR [#3559](https://github.com/QwenLM/qwen-code/pull/3559)).
*   **fix(i18n):** Synchronization updates for internationalization (mi).

*(Note: v0.15.1-nightly.20260424 was also released with identical changes prior to the stable release).*

---

## 3. Hot Issues
1.  **[OPEN] [Qwen OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203) (119 Comments):** A proposal to reduce the daily free API quota from 1,000 to 100 requests/day and phase out the free tier completely by late May. This has sparked massive community debate regarding accessibility and cost.
2.  **[OPEN] [Tool ran without output or errors](https://github.com/QwenLM/zwen-code/issues/3520) (5 Comments):** Users on v0.14.5 are experiencing silent tool execution failures, breaking agentic workflows.
3.  **[CLOSED] [DeepSeek API 400 error](https://github.com/QwenLM/qwen-code/issues/3579) (4 Comments):** Intermittent API errors when using DeepSeek V4 in thinking mode due to `reasoning_content` not being passed back correctly in the conversation history.
4.  **[CLOSED] [Local Model Authentication Loops](https://github.com/QwenLM/qwen-code/issues/3532) (4 Comments):** Chinese developers are frustrated by CLI authentication prompts looping even when local/custom models are correctly configured in `settings.json`.
5.  **[OPEN] [Vision/Image Input Fails for 3rd Party Models](https://github.com/QwenLM/qwen-code/issues/3595) (2 Comments):** Users deploying local models (e.g., Qwen3.6-35B-A3B) or 3rd party API models (e.g., Doubao) note that while MCP tools can read images, the native system `ReadFile` tool fails to pass image data to the model.
6.  **[OPEN] [Improve custom API key setup in /auth](https://github.com/QwenLM/qwen-code/issues/3582) (1 Comment):** A proposal to fix the broken UX of custom API key configuration, which currently forces users to manually edit `settings.json` instead of handling it smoothly inside the CLI.
7.  **[OPEN] [/review Command Language Bug](https://github.com/QwenLM/qwen-code/issues/3594):** The `/review` slash command outputs terminal messages in English, ignoring the user's configured CLI language settings.
8.  **[OPEN] [ACP Mode Needs HTTP MCP Support](https://github.com/QwenLM/qwen-code/issues/3549):** Developers using the Agent Client Protocol (ACP) mode request support for HTTP-based MCP servers, as currently only stdio is supported.
9.  **[OPEN] [Concurrent Subagent Limits](https://github.com/QwenLM/qwen-code/issues/3568):** Users running local LLMs (like via `llama.cpp`) request the ability to limit concurrent subagents to 1, preventing out-of-memory crashes and performance degradation.
10. **[OPEN] [Duplicate Model Names Across Providers](https://github.com/QwenLM/qwen-code/issues/3555):** Users configuring multiple API providers hosting the same model (e.g., glm-5.1) report configuration parsing failures, requesting namespace/deduplication support.

---

## 4. Key PR Progress
1.  **[MERGED] [perf(core): Cut runtime sync I/O by 91%](https://github.com/QwenLM/qwen-code/pull/3581):** Replaced 4 synchronous `fs` syscalls (per recorded event) with async caching in `chatRecordingService`. A massive win for tool-heavy prompt performance.
2.  **[MERGED] [fix(cli): Memoize useHistory() return](https://github.com/QwenLM/qwen-code/pull/3547):** Fixes a `Maximum update depth exceeded` crash that occurred when typing `/model ` repeatedly in the interactive CLI.
3.  **[OPEN] [fix(core): Handle shell line continuations](https://github.com/QwenLM/qwen-code/pull/3600):** Fixes command splitting logic to properly handle trailing backslashes (`\`) across multiple lines in the terminal.
4.  **[OPEN] [feat(session): Add /branch to fork conversations](https://github.com/QwenLM/qwen-code/pull/3539):** Introduces `/branch` (alias `/fork`), allowing users to duplicate a current session to explore an alternative path without losing the original context.
5.  **[OPEN] [feat(cli): Conversation rewind feature](https://github.com/QwenLM/qwen-code/pull/3441):** Implements a `/rewind` command and double-ESC shortcut to rollback conversation history to a specific turn.
6.  **[OPEN] [fix(core): Preserve settings-sourced apiKey](https://github.com/QwenLM/qwen-code/pull/3495):** Fixes a critical bug where restarting the CLI would wipe manually configured API keys if a specific environment variable wasn't set.
7.  **[OPEN] [feat(SDK): Add Python SDK](https://github.com/QwenLM/qwen-code/pull/3494):** Introduces a robust Python SDK supporting `query`, `query_sync`, and process transport, enabling Python developers to script the agent easily.
8.  **[OPEN] [feat(cli): OSC notification support](https://github.com/QwenLM/qwen-code/pull/3562):** Replaces the basic terminal bell with rich, protocol-specific system notifications for iTerm2, Kitty, and Ghostty terminal emulators.
9.  **[OPEN] [fix: Correctly handle proxy environment variables](https://github.com/QwenLM/qwen-code/pull/820):** A long-awaited fix for corporate environments ensuring `NO_PROXY` is respected for LLM requests and preventing proxy bypass failures.
10. **[OPEN] [feat: Add /diff command](https://github.com/QwenLM/qwen-code/pull/3491):** Adds a `/diff` slash command and utility to parse git diff statistics directly within the interactive CLI.

---

## 5. Feature Request Trends
*   **Finer-Grained Agent Orchestration:** Developers want more control over agent execution. This includes requests to configure the number of concurrent subagents (Issue #3568), execute tool calls sequentially rather than in parallel (Issue #2516), and implement isolated context windows for sub-agents (Issue #2332).
*   **Multi-Provider Configuration UX:** As users increasingly rely on multiple endpoints (local + cloud), there is a strong demand for better configuration support, such as allowing duplicate model names across different providers (Issue #3555) and streamlining custom API key injection (Issue #3582).
*   **Broadening MCP & ACP Protocol Support:** The community is pushing for expanded transport layer compatibility, specifically requesting SSE/HTTP MCP support inside ACP mode (Issues #3549, #3472).
*   **Cost Transparency:** Users are requesting built-in billing/cost tracking features (Issue #3585) so they can track API expenditure per session natively via `/stats`.

---

## 6. Developer Pain Points
*   **Vision Input Inconsistencies:** The most glaring technical gap right now is vision support. Users are frustrated that while their models support vision, Qwen Code's internal tools fail to pass images correctly unless explicitly wrapped as an MCP tool (Issues #3595, #3597).
*   **Authentication Friction for 3rd-Party APIs:** Configuring local or custom API providers remains cumbersome. Developers frequently hit unexpected 401 errors or get trapped in authentication loops because the system aggressively defaults to native Qwen OAuth (Issues #3532, #3524).
*   **Cross-Platform Terminal Quirks:** Developers continue to battle terminal compatibility issues, ranging from messy Ctrl+C exits generating garbled output (Issue #3528) to VSCode companion bugs where slash command autocomplete requires an extra backspace keystroke to trigger (Issue #3592).
*   **DeepSeek "Thinking Mode" API Fragility:** Interoperability with DeepSeek's reasoning models is currently brittle, frequently crashing with 400 errors if the strict payload formatting for `reasoning_content` isn't perfectly maintained across turns (Issue #3579).

</details>