# AI CLI Tools Community Digest 2026-05-09

> Generated: 2026-05-08 22:16 UTC | Tools covered: 8

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

Here is the cross-tool comparison report analyzing the AI developer tools ecosystem based on the community digests from 2026-05-09.

### 1. Ecosystem Overview
The AI CLI tooling ecosystem is currently characterized by rapid iteration and aggressive architectural overhauls as providers race to stabilize autonomous coding agents. Major players like OpenAI, Anthropic, and Google are pushing the boundaries of remote execution, context window management, and multi-agent orchestration, while smaller open-source contenders are focusing on provider agnosticism and BYOK (Bring Your Own Key) flexibility. However, the entire ecosystem is experiencing significant growing pains, particularly regarding Windows OS parity, fragile Model Context Protocol (MCP) integrations, and unpredictable token consumption. As agents transition from experimental features to core enterprise infrastructure, developers are loudly demanding better cost observability, session durability, and strict permission guardrails.

### 2. Activity Comparison
*Note: Counts reflect volume of actively updated/appended issues and PRs within the daily digest window.*

| Tool | Issue Volume (Activity) | PR Volume (Activity) | Release Status (May 9, 2026) |
| :--- | :--- | :--- | :--- |
| **Claude Code** | High (13+ tracked) | Moderate (8 tracked) | **Active** (v2.1.133 & v2.1.136 released) |
| **OpenAI Codex** | High (10+ tracked) | Very High (10 tracked) | **Alpha Cycle** (5 Rust core alpha releases) |
| **Gemini CLI** | High (10 tracked) | High (10 tracked) | **Inactive** (No releases) |
| **GitHub Copilot CLI**| Moderate (10 tracked) | Low (2 tracked) | **Active** (v1.0.44 released) |
| **Kimi Code CLI** | Moderate (10 tracked) | High (10 tracked) | **Inactive** (Stable v1.41.0) |
| **OpenCode** | Very High (10 tracked) | High (10 tracked) | **Inactive** (No releases) |
| **Pi** | High (10 tracked) | High (10 tracked) | **Inactive** (No releases) |
| **Qwen Code** | High (10 tracked) | Very High (10 tracked) | **Active** (v0.15.9 released) |

### 3. Shared Feature Directions

*   **First-Class Windows Parity:** Virtually every tool is struggling with Windows support. **Claude Code** is battling a recurring Linux CI path regression in its VS Code extension; **OpenAI Codex** Windows App is spawning 1,000+ git commands per minute; and **Kimi Code** is actively proposing replacing PowerShell with Git Bash due to PS5.x/PS7.x syntax mismatches and CRLF issues. 
*   **MCP (Model Context Protocol) Reliability:** MCP integration is universally fragile. **Copilot CLI** and **Claude Code** report connection drops, stale sessions, and custom servers failing to load in sub-agent contexts. **Qwen Code** and **Pi** are both fixing persistence and schema bugs where servers resurrect after deletion or crash due to non-string tool descriptions.
*   **Advanced Context & Memory Management:** As context windows saturate, tools are converging on automated compaction and memory solutions. **Gemini CLI** is proposing union-find compaction and fixing Auto Memory loops; **Qwen Code** is building reactive context compression; and **OpenAI Codex** is addressing state loss during mid-turn compaction.
*   **Agent Permissions & Sandboxing:** Trustless execution is a priority. **Claude Code** introduced auto-mode hard-deny rules; **Copilot CLI** added a `preAgentStop` hook; and **OpenCode** users are aggressively demanding strict isolation between "Plan" (read-only) and "Execute" modes to prevent unauthorized package installations.
*   **Daemon & Remote Execution Architectures:** The CLI is outgrowing the local terminal. **OpenAI Codex** is heavily refactoring for remote executor registries and SSH daemon lifecycles, while **Qwen Code** is introducing an HTTP daemon (`qwen serve`) to bridge ACP over HTTP+SSE.

### 4. Differentiation Analysis

*   **Big Tech vs. Open/Agnostic Models:** **Claude**, **Codex**, and **Gemini** act as walled gardens, deeply optimizing their own proprietary models (e.g., Codex optimizing for GPT-5.5). Conversely, **OpenCode**, **Pi**, and **Qwen Code** differentiate via BYOK flexibility, prioritizing native integrations with local servers (LM Studio), OpenAI-compatible endpoints, and diverse cloud providers (Together AI, Vertex AI).
*   **OpenAI Codex:** Hyper-focused on enterprise sandbox security (e.g., apply-patch sandboxing, immutable thread permissions) and migrating from a CLI to a daemon-based architecture for remote environments.
*   **GitHub Copilot CLI:** Uniquely leveraging its GitHub-native position to innovate on agentic workflow hooks (e.g., `userPromptSubmitted` bypassing LLMs entirely) and multi-account auth, though it currently suffers from sub-agent state corruption.
*   **Kimi Code CLI & Pi:** Focused heavily on the open-source and self-hosted communities. Kimi is differentiating by focusing on deep IDE integration (ACP protocol) and cross-platform shell handling, while Pi is investing heavily in a highly modular, extensible TUI architecture.

### 5. Community Momentum & Maturity

*   **Rapid Iterators (Codex, OpenCode, Qwen):** OpenAI Codex is moving at breakneck speed, iterating through 7 alpha releases in a single day alongside massive infrastructural PRs. Qwen Code and OpenCode show high community momentum, with dozens of community PRs addressing highly granular bugs (encoding, timeouts, formatting).
*   **Enterprise Mature (Claude Code, Copilot CLI):** These communities show signs of mature, large-scale enterprise usage, characterized by high-volume issue trackers dominated by IT compliance, security alerts, and complex CI/CD pipeline integration problems. 
*   **Architectural Pivots (Gemini CLI, Pi):** These tools are currently in a "building the foundation" phase. They have active communities pushing major architectural proposals (like merging Auto-modes in Gemini or implementing virtual scrollback in Pi) rather than just fixing edge-case bugs.

### 6. Trend Signals

*   **Cost Predictability is Broken:** The most glaring industry trend is the opacity of token consumption. OpenAI users are burning through usage windows due to unnecessary web searches, while Claude users are suffering from silent cache TTL regressions. *Implication:* Teams evaluating AI CLI tools must implement internal proxy metering; relying on provider cost dashboards is currently a financial risk.
*   **The Death of the Local-Only Agent:** The shift toward daemonized CLIs managing remote environments (Codex) and persistent state (Qwen) signals that AI CLI tools are transitioning from developer utilities to centralized CI/CD and automation platforms.
*   **Windows is an Afterthought:** The ecosystem-wide failures in Windows shell handling (PS vs Bash) and file encoding (CRLF vs LF) indicate that most AI tools are being built and tested primarily on Unix/macOS environments. *Implication:* Enterprise engineering teams with standardized Windows workstations should enforce extensive POC testing before wide-scale rollout of any current AI CLI tool.
*   **Agentic State Fragility Requires Guardrails:** As tools iterate toward autonomous action, they are becoming highly prone to infinite loops, silent context drops, and locked states. *Implication:* Developers must architect wrapper scripts or CI hooks (like Copilot's new `preAgentStop`) to forcibly halt or validate autonomous agents, rather than blindly trusting the LLM to self-correct.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Analysis Period:** Through 2026-05-09 | **Source:** [github.com/anthropics/skills](https://github.com/anthropics/skills)

---

## 1. Top Skills Ranking
*The most-discussed and actively-maintained community Skill PRs, sorted by engagement momentum and ecosystem impact.*

1. **Document Typography Quality Control** ([PR #514](https://github.com/anthropics/skills/pull/514))
   - **Functionality:** Prevents orphan word wraps, widow paragraphs, and numbering misalignment in AI-generated documents.
   - **Highlights:** Addresses a near-universal pain point—every document Claude generates is susceptible to these typographic flaws, yet users rarely think to prompt for fixes. Broad applicability drives strong community interest.
   - **Status:** 🟢 Open

2. **Meta-Skill Quality & Security Analyzers** ([PR #83](https://github.com/anthropics/skills/pull/83))
   - **Functionality:** Adds `skill-quality-analyzer` (evaluates skills across 5 dimensions including structure, documentation, and security) and `skill-security-analyzer` to the marketplace.
   - **Highlights:** One of the earliest and longest-open PRs; introduces essential "meta-skills" that allow the ecosystem to self-improve. Longevity suggests the community sees this as a critical infrastructure need.
   - **Status:** 🟢 Open (since Nov 2025)

3. **OpenDocument (ODT/ODS) Creation & Parsing** ([PR #486](https://github.com/anthropics/skills/pull/486))
   - **Functionality:** Comprehensive OpenDocument format support—create, fill templates, parse ODT/ODS to HTML, and convert between formats.
   - **Highlights:** Fills a significant gap for open-source and ISO-standard document workflows (LibreOffice compatibility). High update frequency through April 2026 indicates active iteration.
   - **Status:** 🟢 Open

4. **Frontend-Design Skill Overhaul** ([PR #210](https://github.com/anthropics/skills/pull/210))
   - **Functionality:** Revises the existing frontend-design skill for clarity, actionability, and single-conversation executability.
   - **Highlights:** Focuses on a key design philosophy—skills should instruct Claude on *execution*, not explain concepts to humans. This PR has become a reference point for skill-writing best practices.
   - **Status:** 🟢 Open

5. **ServiceNow Platform Skill** ([PR #568](https://github.com/anthropics/skills/pull/568))
   - **Functionality:** Broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, Vulnerability Response, and IntegrationHub.
   - **Highlights:** Represents the strongest enterprise-platform entry in the ecosystem. The breadth of coverage (spanning scripting, architecture, and SecOps) makes it a potential template for future enterprise integrations.
   - **Status:** 🟢 Open

6. **Testing Patterns Skill** ([PR #723](https://github.com/anthropics/skills/pull/723))
   - **Functionality:** Full-stack testing guidance covering philosophy (Testing Trophy), unit testing (AAA pattern), React component testing, integration, and E2E patterns.
   - **Highlights:** Addresses a core developer workflow. Well-structured approach separating what to test from what *not* to test.
   - **Status:** 🟢 Open

7. **DOCX Tracked-Change Bug Fix** ([PR #541](https://github.com/anthropics/skills/pull/541))
   - **Functionality:** Fixes document corruption when adding tracked changes to DOCX files with existing bookmarks, caused by `w:id` namespace collisions in OOXML.
   - **Highlights:** A precision fix from contributor `Lubrsy706` demonstrating deep OOXML expertise. High relevance given the centrality of DOCX skills to the ecosystem.
   - **Status:** 🟢 Open

8. **macOS Native Automation (Sensory)** ([PR #806](https://github.com/anthropics/skills/pull/806))
   - **Functionality:** Enables Claude to automate macOS via AppleScript/osascript instead of screenshot-based computer use, with a two-tier permission model.
   - **Highlights:** Represents a paradigm shift from vision-based to API-based OS interaction. Could dramatically improve reliability and speed of desktop automation workflows.
   - **Status:** 🟢 Open

---

## 2. Community Demand Trends
*Distilled from the most-discussed Issues, representing the direction the community wants the Skills ecosystem to evolve.*

| Trend | Evidence | Signal Strength |
|--------|----------|----------------|
| **Org-Wide Skill Sharing** | [Issue #228](https://github.com/anthropics/skills/issues/228) (👍7) — Users want shared skill libraries or direct sharing links instead of manual file transfer via Slack/Teams. | 🔴 High |
| **Evaluation & Reliability Framework** | [Issue #556](https://github.com/anthropics/skills/issues/556) (👍6) — `run_eval.py` shows 0% skill trigger rate; [Issue #189](https://github.com/anthropics/skills/issues/189) (👍8) — Duplicate skills from plugin overlap waste context window tokens. | 🔴 High |
| **Security & Trust Boundaries** | [Issue #492](https://github.com/anthropics/skills/issues/492) — Community skills impersonating the `anthropic/` namespace create trust boundary vulnerabilities. | 🟡 Medium-High |
| **MCP Integration** | [Issue #16](https://github.com/anthropics/skills/issues/16) — Expose Skills as MCP servers, turning skills into callable API functions. | 🟡 Medium |
| **Enterprise SSO Compatibility** | [Issue #532](https://github.com/anthropics/skills/issues/532) — Skill-creator tooling requires `ANTHROPIC_API_KEY`, blocking enterprise/SSO users. | 🟡 Medium |
| **Skill-Creator Best Practices** | [Issue #202](https://github.com/anthropics/skills/issues/202) — The official skill-creator itself needs rewriting to follow its own guidelines (too verbose, educates humans instead of instructing Claude). | 🟡 Medium |
| **Multi-Platform Support** | [Issue #29](https://github.com/anthropics/skills/issues/29) — AWS Bedrock compatibility remains an open question since Oct 2025. | 🟢 Ongoing |

---

## 3. High-Potential Pending Skills
*Active PRs with strong signals of merging soon, based on update recency, fix-oriented scope, and community validation.*

| PR | Skill | Why It's Close | Last Updated |
|----|-------|----------------|--------------|
| [#538](https://github.com/anthropics/skills/pull/538) | **PDF case-sensitivity fix** | Narrow, uncontroversial bug fix (8 file reference corrections) | 2026-04-29 |
| [#541](https://github.com/anthropics/skills/pull/541) | **DOCX tracked-change collision fix** | Precision fix for a real corruption bug; well-documented root cause | 2026-04-16 |
| [#539](https://github.com/anthropics/skills/pull/539) | **YAML validation for skill-creator** | Directly addresses recurring frontmatter parsing failures | 2026-04-16 |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT/ODS OpenDocument support** | High community need for open-standard document formats; actively iterated | 2026-04-14 |
| [#509](https://github.com/anthropics/skills/pull/509) | **CONTRIBUTING.md** | Addresses a community health gap (repo scores 25% on GitHub metrics); infrastructure-level improvement | 2026-03-19 |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for robust document-generation skills with enterprise-grade reliability, paired with an urgent need for a native organizational sharing mechanism and a trustworthy evaluation framework to ensure skills actually trigger when invoked.**

---

# Claude Code Community Digest — 2026-05-09

## 1. Today's Highlights

Claude Code shipped two back-to-back releases (v2.1.133 and v2.1.136) introducing worktree base-ref configuration, OpenTelemetry feedback surveys, and auto-mode hard-deny rules. However, the v2.1.136 release is currently overshadowed by a **critical regression on Windows**: a hardcoded Linux CI path in the bundled extension.js is preventing VS Code activation for a large swathe of Windows users, dominating the issue tracker today.

---

## 2. Releases

### [v2.1.136](https://github.com/anthropics/claude-code/releases/tag/v2.1.136)
- **`CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL`**: Re-enables the session quality survey for enterprises capturing responses via OpenTelemetry pipelines.
- **`settings.autoMode.hard_deny`**: New auto-mode classifier rule that blocks actions unconditionally, regardless of user intent or allowances.

### [v2.1.133](https://github.com/anthropics/claude-code/releases/tag/v2.1.133)
- **`worktree.baseRef` setting** (`fresh` | `head`): Controls whether `--worktree`, `EnterWorktree`, and agent-isolation worktrees branch from `origin/<default>` or local `HEAD`. The new default (`fresh`) changes `EnterWorktree`'s base back to `origin/<default>`.

---

## 3. Hot Issues

1. **[#46829](https://github.com/anthropics/claude-code/issues/46829) — Cache TTL silently regressed from 1h to 5m** ⭐ 240 👍 | 56 comments | CLOSED
   The highest-impact issue this month. Analysis of JSONL session files revealed a silent prompt cache TTL regression in early March, causing significant quota and cost inflation for Anthropic API users. Widely discussed and now addressed.

2. **[#30154](https://github.com/anthropics/claude-code/issues/30154) — Multi-window support in Claude Code Desktop** ⭐ 127 👍 | 44 comments | OPEN
   Long-standing top feature request: users want multiple simultaneous windows in a single Desktop app instance instead of the current sidebar-based single-session view.

3. **[#56501](https://github.com/anthropics/claude-code/issues/56501) — VS Code extension v2.1.129 fails on Windows: hardcoded Linux CI path** ⭐ 17 👍 | 11 comments | CLOSED
   The original report of the Windows activation failure caused by a Linux GitHub Actions runner path baked into `extension.js`. Set the pattern for today's flood of duplicates.

4. **[#57415](https://github.com/anthropics/claude-code/issues/57415) — VS Code v2.1.136 regression of hardcoded Linux CI path** ⭐ 2 👍 | 6 comments | OPEN
   Confirms the Windows path bug is *back* in v2.1.136 despite prior fixes. The `createRequire` call receives `/home/runner/...` on Windows, throwing a `TypeError`. Has repro steps.

5. **[#56516](https://github.com/anthropics/claude-code/issues/56516) — `claude-vscode.editor.openLast` command not found** ⭐ 19 👍 | 26 comments | CLOSED
   Most-commented variant of the VS Code Windows breakage. The extension fails to activate, leaving the sidebar button unusable.

6. **[#57435](https://github.com/anthropics/claude-code/issues/57435) — Bash tool: login shell strips inherited PATH on Windows + Git Bash** | 4 comments | OPEN
   The shell snapshot generator runs in login mode, causing Git Bash's `/etc/profile` to rewrite PATH, stripping Python venv, nvm, conda, and asdf shims. A subtle but impactful environment bug.

7. **[#42453](https://github.com/anthropics/claude-code/issues/42453) — Custom MCP server tools disabled in Cowork and Claude Code** ⭐ 2 👍 | 7 comments | OPEN
   Local MCP server tools work in Claude Chat Desktop but are silently disabled in Cowork and Claude Code CLI, suggesting an inconsistent MCP tool-resolution pipeline.

8. **[#55970](https://github.com/anthropics/claude-code/issues/55970) — MCP HTTP-Streamable reconnect fails: stale session ID** | 4 comments | OPEN
   On MCP server restart, Code-CLI reuses the old `mcp-session-id`, causing init-handshake failures. Requires manual session restart as a workaround.

9. **[#57459](https://github.com/anthropics/claude-code/issues/57459) — v2.1.136 conflicts with GitHub Copilot extension on macOS** | 3 comments | OPEN
   `claude-vscode.terminal.open` command not found when Copilot is also installed, suggesting command registration conflicts in the extension host.

10. **[#57453](https://github.com/anthropics/claude-code/issues/57453) — Session JSONL files silently deleted, `--continue` fails** | 1 comment | OPEN
    Automatic cleanup of session files after "a few weeks" causes `claude --continue` to silently start fresh, losing all conversation context without warning.

---

## 4. Key PR Progress

| PR | Title | Status | Significance |
|---|---|---|---|
| [#56784](https://github.com/anthropics/claude-code/pull/56784) | Pin GitHub Actions to commit SHAs | CLOSED | Security hardening: all third-party Actions pinned to immutable commit hashes. |
| [#57267](https://github.com/anthropics/claude-code/pull/57267) | Fix pagination in stale issue auto-close sweep | OPEN | Adds paginated GitHub API helper for the stale-issue bot, preventing missed sweeps on large issue backlogs. |
| [#34735](https://github.com/anthropics/claude-code/pull/34735) | ci: update actions | OPEN | Long-running CI modernization branch, possibly related to the Actions pinning effort. |
| [#14842](https://github.com/anthropics/claude-code/pull/14842) | Fix documentation links to new Claude Code site | OPEN | Redirects old docs URLs to the new documentation site. Open since Dec 2025. |
| [#57199](https://github.com/anthropics/claude-code/pull/57199) | fix(code-review): use `--body-file` for PR comments | OPEN | Prevents bash newline-escaping issues in `gh pr comment` by using `--body-file` instead of inline strings. |
| [#57190](https://github.com/anthropics/claude-code/pull/57190) | Remove `statsig.anthropic.com` from firewall script | OPEN | The Statsig endpoint is no longer resolvable; cleans up firewall allowlist scripts. |
| [#57223](https://github.com/anthropics/claude-code/pull/57223) | Add Superpowers Process Gate to frontend-design skill | CLOSED | Community contribution adding a brainstorm → plan → visual TDD → review gate before frontend implementation. |
| [#57333](https://github.com/anthropics/claude-code/pull/57333) | Update README.md | OPEN | Documentation update (details sparse). |

---

## 5. Feature Request Trends

- **Multi-window Desktop support** ([#30154](https://github.com/anthropics/claude-code/issues/30154)) remains the highest-voted open feature request (127 👍). Users want tabbed/multi-window workflows comparable to IDE experiences.
- **Cross-platform parity on Windows**: The overwhelming volume of Windows-specific issues (PATH handling, extension activation, Git Bash integration) signals that Windows is treated as a second-class platform internally.
- **MCP reliability and observability**: Multiple requests ([#42453](https://github.com/anthropics/claude-code/issues/42453), [#55970](https://github.com/anthropics/claude-code/issues/55970), [#38915](https://github.com/anthropics/claude-code/issues/38915)) ask for better MCP server lifecycle management, reconnection handling, and OTEL telemetry for skill/slash-command invocations.
- **Cowork feature maturation**: Issues like [#44129](https://github.com/anthropics/claude-code/issues/44129) (scheduled tasks never execute) and [#57454](https://github.com/anthropics/claude-code/issues/57454) (PR-ancestry walker bug) indicate Cowork is still early-stage and needs reliability work.

---

## 6. Developer Pain Points

1. **Recurring Windows CI path regression**: The hardcoded `/home/runner/...` Linux path in bundled `extension.js` has now recurred across at least three release cycles (v2.1.129, v2.1.133, v2.1.136). At least **12 duplicate issues** were filed today alone. This points to a fundamental CI/CD packaging pipeline gap — the build environment is leaking into the production bundle.

2. **Silent cost/quota regressions**: The cache TTL regression ([#46829](https://github.com/anthropics/claude-code/issues/46829), 240 👍) went undetected for weeks. Enterprise users on Anthropic API billing are asking for better cost telemetry and proactive regression alerts.

3. **Session data durability**: Users expect `--continue` to work reliably, but session JSONL files are silently pruned ([#57453](https://github.com/anthropics/claude-code/issues/57453)), breaking long-running project workflows.

4. **Extension conflict surface**: The Copilot conflict ([#57459](https://github.com/anthropics/claude-code/issues/57459)) and command-not-found errors suggest the extension registration lifecycle is fragile, especially when co-existing with other AI extensions.

5. **Environment sniffing on Windows**: The login-shell PATH issue ([#57435](https://github.com/anthropics/claude-code/issues/57435)) and unsafe window detection ([#57455](https://github.com/anthropics/claude-code/issues/57455)) indicate Claude Code's shell and process detection heuristics don't fully account for Windows conventions.

---

*Data sourced from [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) on 2026-05-09.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-09

## 1. Today's Highlights
The OpenAI Codex team is in a heavy iteration cycle, shipping five alpha releases for the Rust core (v0.130.0-alpha.3 through alpha.10) alongside major architectural PRs to support remote environments, daemon lifecycle management, and sandbox security. On the community side, the controversial token "burn rate" issue ([#14593](https://github.com/openai/codex/issues/14593)) continues to dominate discussion with 572 comments, while reports of excessive web-search behavior in the new GPT-5.3-codex and GPT-5.5 models are gaining traction. Enterprise Windows users are also increasingly vocal about installer flexibility and browser extension reliability.

## 2. Releases
The following Rust core alpha versions were released in the past 24 hours. As they are rapid-cycle alpha builds, detailed changelogs are not provided, but the quick succession (alpha.3 → alpha.10) signals active pre-stabilization work on the v0.130.0 line:

- **rust-v0.130.0-alpha.10** ([Release](https://github.com/openai/codex/releases/tag/rust-v0.130.0-alpha.10))
- **rust-v0.130.0-alpha.7** ([Release](https://github.com/openai/codex/releases/tag/rust-v0.130.0-alpha.7))
- **rust-v0.130.0-alpha.5** ([Release](https://github.com/openai/codex/releases/tag/rust-v0.130.0-alpha.5))
- **rust-v0.130.0-alpha.4** ([Release](https://github.com/openai/codex/releases/tag/rust-v0.130.0-alpha.4))
- **rust-v0.130.0-alpha.3** ([Release](https://github.com/openai/codex/releases/tag/rust-v0.130.0-alpha.3))

## 3. Hot Issues

1. **[#14593](https://github.com/openai/codex/issues/14593) — Burning tokens very fast** `bug` `rate-limits`
   With 572 comments and 250 👍, this is the most-discussed issue in the repo. Business-tier users on VS Code report that a single prompt can consume up to 6% of a 5-hour usage window, making Codex prohibitively expensive for iterative workflows. The team has not yet provided a root-cause fix.

2. **[#20301](https://github.com/openai/codex/issues/20301) — Low cache hit rate when Codex integrates with GPT-5.5** `bug` `rate-limits`
   Users on WSL2 running GPT-5.5 observe significantly reduced prompt-cache hits, directly compounding the token-burn problem. This suggests a model-side context-matching regression in the newest model line.

3. **[#20988](https://github.com/openai/codex/issues/20988) — Codex searches the web way more frequently and at unnecessary times** `bug` `model-behavior` `tool-calls`
   Since upgrading to GPT-5.3-codex, users report the model triggers 10+ consecutive web searches even for simple local-file tasks. This wastes tokens, slows responses, and floods the TUI. A companion UX issue ([#21836](https://github.com/openai/codex/issues/21836)) requests UI mitigation.

4. **[#20567](https://github.com/openai/codex/issues/20567) — Codex Windows App spawns ~1000 git commands per minute** `bug` `windows-os` `app`
   An enterprise user discovered Codex Desktop for Windows firing an endless stream of `git` process spawns, effectively acting as a fork bomb. This is likely tied to file-tree or workspace-indexing logic and is a high-priority stability issue.

5. **[#8259](https://github.com/openai/codex/issues/8259) — Format Markdown tables so they are readable by humans** `enhancement` `TUI`
   With 115 👍, this is the highest-voted enhancement. Markdown tables rendered in the TUI have broken whitespace alignment, making structured output nearly unusable. A long-standing quality-of-life ask.

6. **[#4432](https://github.com/openai/codex/issues/4432) — First-class multi-account auth via `--auth-profile`** `enhancement` `auth`
   Consultants and agencies who juggle multiple API keys or ChatGPT accounts want a built-in profile switcher (94 👍). Currently, the only workaround is manually swapping `CODEX_HOME` directories.

7. **[#19305](https://github.com/openai/codex/issues/19305) — Full Computer Use support for Codex Desktop on Windows** `enhancement` `computer-use`
   Windows users currently only have Browser Use; full native desktop automation (clicking, typing, window management) is macOS-only. With 14 👍 and active discussion, this is a key parity request.

8. **[#19910](https://github.com/openai/codex/issues/19910) — Goals feature loses context after mid-turn compaction** `bug` `context`
   The newly released "Goals" feature (which keeps Codex on-task for complex multi-step work) drops active goal state when mid-turn compaction triggers. Users praise the feature but say this bug makes it unreliable for long sessions.

9. **[#21791](https://github.com/openai/codex/issues/21791) — Chrome plugin tag selectable but tool not actually active** `bug` `app` `browser`
   The Codex app UI lets users mention `@chrome`, but the runtime doesn't expose `chrome@openai-bundled` as a callable tool. This UI/runtime disconnect is blocking browser-automation workflows.

10. **[#21088](https://github.com/openai/codex/issues/21088) — `/pet` avatar sprite invisible on macOS** `bug` `app` `pets`
    A fun but popular issue: the `/pet` overlay bubbles render, but the actual pet avatar is invisible. Survives reinstalls and cache clears, affecting both built-in and custom pets.

## 4. Key PR Progress

1. **[#21323](https://github.com/openai/codex/pull/21323) — Support executor registry remote environments**
   Introduces registry-backed remote executors so downstream services can resolve an executor ID into an exec-server URL. Moves away from the legacy cloud environments flow toward a more modular, pluggable architecture.

2. **[#20718](https://github.com/openai/codex/pull/20718) — Add app-server daemon lifecycle management**
   Enables desktop and mobile clients to bootstrap and manage `codex app-server` on remote machines over SSH. Critical infrastructure for remote-first and Codespaces-style workflows.

3. **[#21831](https://github.com/openai/codex/pull/21831) — App-server: daemon-safe restart handling**
   Ensures that readiness probes don't hijack the process-wide client identity and that graceful reload signals keep draining active turns. A safety companion to the daemon lifecycle PR above.

4. **[#21617](https://github.com/openai/codex/pull/21617) — Support multi-environment `apply_patch` selection**
   Adds routing for `apply_patch` across multiple environments (local, remote, containerized), parsing an optional environment selector and verifying against the active environment at runtime.

5. **[#21819](https://github.com/openai/codex/pull/21819) — Apply-patch: avoid sandbox link write-through**
   Closes a security gap where symlink aliases inside the writable workspace could bypass path-traversal checks. Strengthens the sandbox introduced in PR #1705.

6. **[#21778](https://github.com/openai/codex/pull/21778) — Route Python SDK turn notifications by ID**
   Replaces the single active turn-consumer guard with per-turn ID routing, allowing one `Codex`/`AsyncCodex` client to stream multiple concurrent turns without race conditions.

7. **[#21595](https://github.com/openai/codex/pull/21595) — Simplify MCP tool handler plumbing**
   Removes MCP-specific special cases from `ToolRegistry` and the spec builder, generalizing the tool path and making it easier to add new MCP integrations without touching core code.

8. **[#21250](https://github.com/openai/codex/pull/21250) — Keep thread PermissionProfile immutable**
   Makes `PermissionProfile` durable thread state that cannot be rewritten through resume, fork, or turn APIs. A critical step in the migration from `SandboxPolicy` to `PermissionProfile`.

9. **[#21755](https://github.com/openai/codex/pull/21755) — Improve hooks trust flow in TUI**
   Adds a startup review prompt for new/changed hooks and a top-level `t` shortcut for trust management. Addresses a discoverability gap where users didn't know they needed to review hooks before using them.

10. **[#21835](https://github.com/openai/codex/pull/21835) — CI: check out PR head commits in workflows** *(merged)*
    Ensures CI tests the exact pushed commit rather than GitHub's synthetic merge commit, eliminating false positives/negatives from implicit base-branch merges.

## 5. Feature Request Trends

- **Windows parity**: Multiple issues ([#19305](https://github.com/openai/codex/issues/19305), [#21538](https://github.com/openai/codex/issues/21538), [#21074](https://github.com/openai/codex/issues/21074)) request full Computer Use, non-Store installers, and customizable install paths for Windows, indicating a large and underserved enterprise Windows user base.

- **Multi-account & auth flexibility**: `--auth-profile` ([#4432](https://github.com/openai/codex/issues/4432)) and Outlook personal account linking ([#20633](https://github.com/openai/codex/issues/20633)) reflect a growing need for teams managing multiple identities or using non-Google identity providers.

- **TUI/UX polish**: Readable Markdown tables ([#8259](https://github.com/openai/codex/issues/8259)), better handling of search-result flooding ([#21836](https://github.com/openai/codex/issues/21836)), OSC terminal titles ([#18740](https://github.com/openai/codex/issues/18740)), and the "bang bang" command-management proposal ([#21793](https://github.com/openai/codex/issues/21793)) all point to a maturing user base that wants the CLI interface to be as refined as the underlying model.

- **Browser & computer-use reliability**: A cluster of issues ([#21791](https://github.com/openai/codex/issues/21791), [#21822](https://github.com/openai/codex/issues/21822), [#21824](https://github.com/openai/codex/issues/21824), [#21741](https://github.com/openai/codex/issues/21741)) report that browser/computer-use features are flaky or partially broken, suggesting this new capability area needs stabilization before expansion.

## 6. Developer Pain Points

- **Token consumption and rate limits remain the #1 frustration.** Issue [#14593](https://github.com/openai/codex/issues/14593) (572 comments), compounded by GPT-5.5 cache misses ([#20301](https://github.com/openai/codex/issues/20301)) and the 10x usage-burn report ([#16889](https://github.com/openai/codex/issues/16889)), indicates that cost predictability is still broken for many users, especially on newer models.

- **Excessive, unnecessary web searches by GPT-5.3-codex** ([#20988](https://github.com/openai/codex/issues/20988), [#21836](https://github.com/openai/codex/issues/21836)) waste tokens and flood the TUI. Users feel the model's search triggering logic has regressed, and there's no user-facing toggle to control it.

- **Context loss during long sessions.** Goal-state compaction bugs ([#19910](https://github.com/openai/codex/issues/19910)) and compact-related errors ([#20439](https://github.com/openai/codex/issues/20439)) mean complex multi-step tasks can silently lose intent. For a tool designed for autonomous coding, this undermines trust.

- **Chrome extension and browser integration are fragile on Windows**, with reports of locale-dependent disconnections ([#21741](https://github.com/openai/codex/issues/21741)), content API failures ([#21822](https://github.com/openai/codex/issues/21822)), and the UI/runtime tool mismatch ([#21791](https://github.com/openai/codex/issues/21791)). Users trying to adopt browser-use workflows are hitting blockers on day one.

- **Windows desktop app instability** — from the 1000 git commands/minute fork bomb ([#20567](https://github.com/openai/codex/issues/20567)) to disabled workspace-dependency buttons ([#21650](https://github.com/openai/codex/issues/21650)) — suggests the Windows app needs dedicated QA investment before enterprise adoption can scale.

---

*Digest generated from public GitHub data on 2026-05-09. Links point to `github.com/openai/codex`.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-09

## 1. Today's Highlights
No new releases were shipped today, but the development focus is heavily directed toward agent reliability and the Auto Memory system. A high-impact architectural proposal to merge the dual "Auto (Gemini 2.5)" and "Auto (Gemini 3)" modes into a single, dynamically routing "Auto" mode was opened, aiming to drastically simplify model selection. Meanwhile, maintainers are actively working through a cluster of bugs related to infinite restart loops on both Windows and macOS, as well as tightening security around memory extraction and context compaction.

## 2. Releases
*No new releases were recorded in the last 24 hours.*

## 3. Hot Issues
1. **[Agent] Subagent masking MAX_TURNS failures as successes** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)): A critical P1 bug where the `codebase_investigator` agent hits its turn limit, aborts the task, but incorrectly reports `status: "success"`. This masks incomplete analyses from the orchestrator and frustrates users expecting completed workflows.
2. **[Agent] `save_memory` tool not found** ([#26563](https://github.com/google-gemini/gemini-cli/issues/26563)): Users on v0.41.1 are reporting that the `/memory add` command throws a "Tool not found" error, effectively breaking manual memory management in the CLI.
3. **[Security] Deterministic redaction & logging in Auto Memory** ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)): A security-focused issue highlighting that Auto Memory processes local transcripts before redacting secrets. The community and maintainers are pushing for deterministic redaction prior to model ingestion.
4. **[Core] Infinite restart loops (Exit Code 41)** ([#23039](https://github.com/google-gemini/gemini-cli/issues/23039), [#26715](https://github.com/google-gemini/gemini-cli/issues/26715)): A persistent P1 initialization failure affecting macOS M4 and Windows environments. Corrupted OAuth credentials cause the agent to crash and loop endlessly.
5. **[Agent] Shell execution gets stuck awaiting input** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)): A highly upvoted issue where the CLI hangs after completing a simple shell command, incorrectly requiring manual user intervention to proceed.
6. **[Agent] Underutilization of custom skills & sub-agents** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)): Users note that the model rarely invokes custom skills (e.g., custom gradle/git tools) unless explicitly instructed, limiting the effectiveness of the extensions ecosystem.
7. **[Security] CLI repeatedly prompting for file permissions** ([#24916](https://github.com/google-gemini/gemini-cli/issues/24916)): A bug where "allow for all future sessions" fails to persist, causing the CLI to continuously ask for execution permissions on the same files.
8. **[ACP] Missing `available_commands_update` notification** ([#10955](https://github.com/google-gemini/gemini-cli/issues/10955)): The most upvoted issue in this cycle. The lack of this Agent Client Protocol (ACP) notification prevents Gemini CLI from properly advertising its commands to IDEs and MCP servers.
9. **[Agent] `browser_agent` ignores settings overrides** ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)): Configuration limits like `maxTurns` set in `settings.json` are being ignored by the browser subagent, leading to unpredictable agent behavior.
10. **[Memory] Auto Memory retries low-signal sessions indefinitely** ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)): The background memory extractor fails to mark "low-signal" sessions as processed, causing it to repeatedly index and evaluate the same dead sessions.

## 4. Key PR Progress
1. **feat(cli): merge Auto modes into a single Auto mode** ([PR #26714](https://github.com/google-gemini/gemini-cli/pull/26714)): Dynamically routes tasks to either Gemini 2.5 or Gemini 3 based on task complexity, vastly simplifying the user experience for model selection.
2. **feat(acp/core): prefix tool call IDs with tool names** ([PR #26676](https://github.com/google-gemini/gemini-cli/pull/26676)): *Closed/Merged.* Enhances ACP compliance by embedding tool names in call IDs, enabling IDEs to cleanly render specific tool UIs.
3. **feat(agent): formalize first-class tool lifecycle states** ([PR #26529](https://github.com/google-gemini/gemini-cli/pull/26529)): Introduces explicit lifecycle states (e.g., pending, running, failed) into the protocol, decoupling the TUI from legacy metadata objects for better tool tracking.
4. **fix(core): externalize https-proxy-agent** ([PR #26361](https://github.com/google-gemini/gemini-cli/pull/26361)): Resolves a bundling issue (`TypeError: HttpsProxyAgent is not a constructor`) that broke proxy support for users behind corporate firewalls.
5. **fix(core): use snake_case for Vertex AI compatibility** ([PR #26652](https://github.com/google-gemini/gemini-cli/pull/26652)): Fixes a `400 INVALID_ARGUMENT` error for Vertex AI users by aligning the `thoughtSignature` property to the required `thought_signature` snake_case format.
6. **feat(core): union-find context compaction** ([PR #24736](https://github.com/google-gemini/gemini-cli/pull/24736)): Proposes an advanced compression strategy using union-find clustering to group semantically similar messages, optimizing long-session context windows.
7. **ci: implement codebase-aware effort level triage** ([PR #26666](https://github.com/google-gemini/gemini-cli/pull/26666)): *Closed/Merged.* Upgrades the CI pipeline to automatically assign effort-level labels to new issues based on historical codebase data.
8. **fix(mcp): treat GET 404 as 405 in StreamableHTTPClientTransport** ([PR #24847](https://github.com/google-gemini/gemini-cli/pull/24847)): Improves MCP server compatibility (e.g., n8n) by gracefully handling servers that return 404 instead of the expected 405 for optional SSE streams.
9. **feat(cli): support git submodules in extension installs** ([PR #26686](https://github.com/google-gemini/gemini-cli/pull/26686)): Fixes broken extension installations by ensuring git submodules are properly initialized during `gemini extensions install`.
10. **Persistent shell support** ([PR #21475](https://github.com/google-gemini/gemini-cli/pull/21475)): A long-running PR aiming to introduce persistent shell sessions, drastically speeding up sequential command execution and enabling shell aliases and environment variables.

## 5. Feature Request Trends
*   **AST-Aware Code Operations:** Strong interest in integrating AST-aware tools (e.g., tilth, glyph) to allow precise method-bound reads and codebase mapping, reducing wasted tokens and misaligned file reads.
*   **Advanced Context Management:** High demand for robust context window handling, evidenced by requests for union-find compaction and compression evaluation frameworks.
*   **UI & Accessibility Polish:** A notable push towards refining the terminal UI, including collapsing verbose tracker tool calls into summaries and fixing streaming table renders for screen readers.
*   **Agent Autonomy & Resilience:** Requests for agents to autonomously recover from locked states (like browser profiles) and better utilize user-defined custom skills without explicit prompting.

## 6. Developer Pain Points
*   **Authentication & Startup Crashes:** The most severe recurring frustration is the CLI entering infinite crash loops due to corrupted `oauth_creds.json` on both Windows and macOS architectures.
*   **Unreliable Agent Handoffs:** Developers are experiencing silent failures where subagents report success after hitting MAX_TURNS, or get permanently stuck waiting for input on completed shell commands.
*   **Permission Amnesia:** A persistent annoyance where the CLI fails to remember file execution permissions between sessions or even within the same session.
*   **Secret Handling in Memory:** Security-conscious users are wary that the Auto Memory system processes transcript text before stripping secrets, representing a potential vector for accidental credential exposure.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## GitHub Copilot CLI Community Digest — 2026-05-09

### 1. Today's Highlights
GitHub Copilot CLI rolled out version **v1.0.44** alongside a subsequent patch, introducing significant UX improvements for slash commands and hooks. The highlight is the ability to invoke multiple skills mid-input, as well as a new `userPromptSubmitted` hook capable of bypassing the LLM entirely for instant responses. The community remains highly active, with ongoing friction around MCP server connections, sub-agent state corruption, and BYOK (Bring Your Own Key) provider compatibility.

### 2. Releases
- **[v1.0.44](https://github.com/github/copilot-cli/releases/tag/v1.0.44)**: Released 2026-05-08.
  - **Improved UX:** Path completion in `/add-dir` no longer flickers or gets intercepted by `@` and `#` pickers. Slash commands can now appear mid-input, allowing multiple skills to be invoked in a single message.
  - **New Hook Capability:** `userPromptSubmitted` hooks can now handle requests directly, bypassing the LLM to return a response without making a model call.
- **[v1.0.44-3](https://github.com/github/copilot-cli/releases/tag/v1.0.44-3)**: Released 2026-05-08.
  - **Improved Performance:** Faster `/user list` and `/user switch` commands for multi-account users.

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

1. **[#2282](https://github.com/github/copilot-cli/issues/2282) [OPEN]**: *Not Able to connect to MCP servers.* A high-friction bug for Windows users where installed MCP servers fail to connect on launch. (👍 1, Comments: 9)
2. **[#2630](https://github.com/github/copilot-cli/issues/2630) [OPEN]**: *Custom agent `mcp-servers` not connected in CLI sub-agent or `--prompt` contexts.* Highlights a critical architectural limitation where custom agents lose tool connectivity in non-standard contexts. (Comments: 6)
3. **[#3202](https://github.com/github/copilot-cli/issues/3202) [CLOSED]**: *https://<subdomain>.githubusercontent.com/.* An invalid/malformed issue that generated unexpected spam-level engagement before closure. (Comments: 6)
4. **[#2543](https://github.com/github/copilot-cli/issues/2543) [OPEN]**: *Concurrent sub-agent events corrupt session state.* A severe bug causing permanent `tool_use` errors. Blocks subsequent messages entirely after corruption, heavily impacting agent workflows. (👍 2, Comments: 4)
5. **[#3200](https://github.com/github/copilot-cli/issues/3200) [OPEN]**: *`/delegate` without committing and pushing local changes.* Users are asking for an `uncommitted` subcommand to delegate tasks without forcing Git commits. (Comments: 3)
6. **[#1412](https://github.com/github/copilot-cli/issues/1412) [OPEN]**: *Powershell tools trigger security alerts.* Copilot CLI triggers false positives in enterprise security monitoring tools (like Elastic) due to how it clears Windows command history. (👍 3, Comments: 3)
7. **[#2253](https://github.com/github/copilot-cli/issues/2253) [CLOSED]**: *Add `preAgentStop` hook.* A successful feature request to allow deterministic validation/guardrails before an agent finishes its execution loop. (Comments: 3)
8. **[#3189](https://github.com/github/copilot-cli/issues/3189) [OPEN]**: *`copilot -p` exits 1 silently on macOS.* Non-interactive mode (`-p`) is failing completely without logs on the latest pre-release, breaking CI/CD integrations. (Comments: 3)
9. **[#3195](https://github.com/github/copilot-cli/issues/3195) [OPEN]**: *AssistantReasoningEvent not triggered for BYOK providers.* The CLI only checks `reasoning_content` and ignores the `reasoning` field, breaking event hooks for custom vLLM setups. (👍 1, Comments: 2)
10. **[#3207](https://github.com/github/copilot-cli/issues/3207) [CLOSED]**: *Extensions can install MCP servers that bypass private registry restrictions.* A critical enterprise governance concern where VS Code extensions bypass organizational MCP registries. (Comments: 1)

### 4. Key PR Progress
1. **[#2800](https://github.com/github/copilot-cli/pull/2800) [OPEN]**: *Add initial devcontainer configuration.* Establishes standardized development environments for contributors working on the CLI core.
2. **[#3199](https://github.com/github/copilot-cli/pull/3199) [OPEN]**: *Update Homebrew installation commands for copilot-cli.* Fixes outdated documentation to align with Homebrew's migration of the CLI to a Cask formula (`copilot-cli` / `copilot-cli@prerelease`).

*(Note: The repository saw low PR volume over the last 24 hours, with only 2 active pull requests updated.)*

### 5. Feature Request Trends
- **Agent & Task Delegation Flexibility:** A strong demand for more control over agent workflows, specifically the ability to pause or stop agents deterministically (`preAgentStop`) and run delegated tasks without enforcing strict Git state changes (`/delegate` uncommitted).
- **Expanded Hook Ecosystem:** Following the addition of bypass hooks in v1.0.44, the community is pushing for deeper hook integration to intercept logic without burning LLM tokens or making network calls.
- **Advanced Terminal Rendering:** Consistent requests to handle rich media and complex Markdown, specifically asking for Sixel/Kitty image protocol support and fixes for rendering Markdown tables containing emojis or long hyperlinks.

### 6. Developer Pain Points
- **MCP Reliability:** Multi-Context Protocol (MCP) connections are highly fragile, particularly for Windows users and when invoking custom agents via the `--prompt` flag or as sub-agents.
- **BYOK Friction:** Bring Your Own Key (BYOK) setups continue to frustrate advanced users. Misalignment between how the CLI handles provider APIs (e.g., `wire_api` being ignored for Azure) and inconsistent parsing of LLM response schemas cause silent failures and broken event streams.
- **State Corruption in Agentic Loops:** Concurrent tool calls and sub-agent spawning frequently result in broken `tool_use`/`tool_result` sequences, crashing the session permanently without a clear recovery path.
- **Enterprise Security & Compliance:** PowerShell users on Windows face ongoing struggles with security software false positives, and enterprise IT admins are finding it difficult to enforce governance over dynamically installed MCP servers.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-09

## 1. Today's Highlights
The Kimi Code CLI community saw intense activity today around **Windows compatibility**, with nearly half of all new issues reporting platform-specific friction points such as PowerShell version incompatibility, CRLF-to-LF silent conversion, and console font resets. A critical session-corruption bug ([#2165](https://github.com/MoonshotAI/kimi-cli/issues/2165)) gained a community-contributed fix, and a bold architectural proposal to replace the Windows PowerShell backend with Git Bash ([PR #2186](https://github.com/MoonshotAI/kimi-cli/pull/2186)) sparked broader discussion about POSIX consistency. Meanwhile, a highly-upvoted request for full thinking traces ([#1864](https://github.com/MoonshotAI/kimi-cli/issues/1864)) continues to gain traction among advanced users.

---

## 2. Releases
No new releases were published in the last 24 hours. The current stable version remains **v1.41.0**.

---

## 3. Hot Issues

1. **[#1864](https://github.com/MoonshotAI/kimi-cli/issues/1864) [bug] Please display the full thinking traces in Kimi CLI** — 👍 10, 12 comments. Long-running and highly requested. Users debugging complex agent workflows need visibility into the model's reasoning chains, but currently, traces are truncated or hidden. Community reaction is strongly positive, with several developers sharing workarounds.

2. **[#2152](https://github.com/MoonshotAI/kimi-cli/issues/2152) [Feature Request] Support global `~/.kimi/AGENTS.md` for multi-project shared conventions** — 👍 2, 3 comments. Addresses a real pain point for polyglot developers managing 10+ projects. A global conventions file would reduce copy-paste boilerplate across repositories.

3. **[#2165](https://github.com/MoonshotAI/kimi-cli/issues/2165) [bug] Invalid tool call corrupts the whole session** — When the model emits malformed JSON in `function.arguments`, OpenAI-compatible backends reject all subsequent requests during history replay, permanently breaking the session. A fix is already proposed in [PR #2196](https://github.com/MoonshotAI/kimi-cli/pull/2196).

4. **[#2178](https://github.com/MoonshotAI/kimi-cli/issues/2178) [Bug] Windows: `kimi.exe` has blank `FileVersionInfo`** — The VS Code extension validates binary metadata and rejects the CLI as "incompatible." A blocking issue for Windows users adopting the VS Code integration.

5. **[#2191](https://github.com/MoonshotAI/kimi-cli/issues/2191) [Windows] `StrReplaceFile` silently converts CRLF to LF** — On Windows repos with `core.autocrlf=true`, the string-replace file tool normalizes line endings, causing massive diffs and forcing the agent to fall back to Python workarounds. Related to the still-unmerged [PR #1953](https://github.com/MoonshotAI/kimi-cli/pull/1953).

6. **[#2192](https://github.com/MoonshotAI/kimi-cli/issues/2192) [Windows] Agent repeatedly generates Unix pipeline commands** — `head`, `tail`, `grep` pipes fail on default PowerShell 5.x. Highlights the model's OS-awareness gap and is the primary motivation behind the Git Bash backend proposal.

7. **[#2194](https://github.com/MoonshotAI/kimi-cli/issues/2194) [Windows] Agent generates PowerShell 7.x syntax incompatible with PS 5.x** — A related but distinct issue: even when PowerShell is the right choice, the model assumes v7+ features (`ForEach-Object -Parallel`, etc.) unavailable on the system-default v5.x.

8. **[#2193](https://github.com/MoonshotAI/kimi-cli/issues/2193) [Bug] Background auto-trigger permanently stops after 3 consecutive LLM timeouts** — Long-running bash tasks can silently halt when background completion listeners are permanently disabled after transient network failures. A reliability concern for CI/CD-like workflows.

9. **[#2195](https://github.com/MoonshotAI/kimi-cli/issues/2195) [Shell] Command timeout is rigid (60s) and not configurable** — The hardcoded 60-second shell timeout is insufficient for package builds, test suites, and other long-running commands. Users are requesting either a configurable setting or adaptive behavior.

10. **[#2189](https://github.com/MoonshotAI/kimi-cli/issues/2189) [bug] Plan mode produces garbled characters on next interaction** — Affects the VS Code extension on Windows after enabling Plan mode. Encoding corruption suggests a UTF-16/UTF-8 mismatch in the extension-to-CLI communication layer.

---

## 4. Key PR Progress

1. **[PR #2196](https://github.com/MoonshotAI/kimi-cli/pull/2196) fix(kosong): sanitize malformed history tool calls** — Fixes [#2165](https://github.com/MoonshotAI/kimi-cli/issues/2165) by sanitizing invalid `function.arguments` in session history before replaying to the backend. A targeted, low-risk fix for a critical session-corruption bug.

2. **[PR #2186](https://github.com/MoonshotAI/kimi-cli/pull/2186) refactor(windows): switch Shell backend from PowerShell to git-bash** — An ambitious architectural change replacing `powershell.exe` with `bash.exe` as the default Windows shell backend. Directly addresses [#2192](https://github.com/MoonshotAI/kimi-cli/issues/2192), [#2194](https://github.com/MoonshotAI/kimi-cli/issues/2194), and related Unix-incompatibility issues. References [#1618](https://github.com/MoonshotAI/kimi-cli/issues/1618) and [#1855](https://github.com/MoonshotAI/kimi-cli/issues/1855).

3. **[PR #2198](https://github.com/MoonshotAI/kimi-cli/pull/2198) fix(acp): defer available commands update to prevent race condition** — Fixes a v1.41.0 regression where slash commands intermittently fail to appear in the CLI due to a timing issue between `new_session()` and client initialization.

4. **[PR #2183](https://github.com/MoonshotAI/kimi-cli/pull/2183) fix(shell): attach dropped image paths eagerly** — Resolves [#2182](https://github.com/MoonshotAI/kimi-cli/issues/2182) (macOS screenshot thumbnail race). Now reads dropped image paths immediately at prompt submission instead of deferring to the async `ReadMediaFile` step, eliminating the `TemporaryItems` cleanup race.

5. **[PR #2185](https://github.com/MoonshotAI/kimi-cli/pull/2185) fix(acp): allow API-key based auth to bypass forced OAuth login** — When using Kimi CLI via ACP (e.g., JetBrains IDE), the server previously forced OAuth even when an `api_key` was configured. This PR allows pre-configured API keys to take precedence, unblocking self-hosted and enterprise deployments.

6. **[PR #1972](https://github.com/MoonshotAI/kimi-cli/pull/1972) feat(shell): visual context progress bar with color coding** — Replaces the plain-text `context: 0.0%` indicator with a Unicode block progress bar (`Context █░░░░░░░░░ 4%`) with green/yellow/red color thresholds. Matches the `claude-hud` plugin visual style.

7. **[PR #2187](https://github.com/MoonshotAI/kimi-cli/pull/2187) fix(deps): bump pillow to 12.2.0 for CVE-2026-25990** — Addresses an out-of-bounds write vulnerability in PSD image loading. Required for security-tight enterprise environments where dependency scanning blocks older versions.

8. **[PR #1223](https://github.com/MoonshotAI/kimi-cli/pull/1223) fix(llm): allow `default_query`/`custom_headers` for Azure Kimi** — Enables passing `default_query` and `custom_headers` to the OpenAI client, which is essential for Azure-hosted Kimi K2.6 deployments that require extra authentication parameters. Open since February, recently updated.

9. **[PR #762](https://github.com/MoonshotAI/kimi-cli/pull/762) fix: respect `SSL_CERT_FILE` env var for corporate proxy support** — Adds support for the standard `SSL_CERT_FILE` environment variable, enabling users behind corporate proxies (Zscaler, BlueCoat, Fortinet) to connect without SSL verification errors. Open since January, still awaiting merge.

10. **[PR #1715](https://github.com/MoonshotAI/kimi-cli/pull/1715) feat(plugin): add Claude-compatible local plugin support** — Introduces a compatibility layer for discovering and loading local Claude Plugins via `--plugin-dir`. Enables ecosystem cross-compatibility. Currently in draft status.

---

## 5. Feature Request Trends

| Trend | Description | Representative Issues |
|-------|-------------|----------------------|
| **Windows parity** | Developers overwhelmingly demand first-class Windows support, including correct shell detection (PS5 vs PS7 vs Git Bash), CRLF preservation, and proper binary metadata. | [#2191](https://github.com/MoonshotAI/kimi-cli/issues/2191), [#2192](https://github.com/MoonshotAI/kimi-cli/issues/2192), [#2194](https://github.com/MoonshotAI/kimi-cli/issues/2194) |
| **Configurable timeouts & resilience** | Multiple requests for adaptive or user-configurable shell timeouts, retry limits, and graceful degradation after LLM failures. | [#2193](https://github.com/MoonshotAI/kimi-cli/issues/2193), [#2195](https://github.com/MoonshotAI/kimi-cli/issues/2195) |
| **Global configuration & cross-project conventions** | Users managing multiple repositories want a shared `AGENTS.md` or global config layer to avoid duplicating project-level rules. | [#2152](https://github.com/MoonshotAI/kimi-cli/issues/2152) |
| **Observability & transparency** | Full thinking traces, visual context bars, and better telemetry are consistently requested by power users debugging agent behavior. | [#1864](https://github.com/MoonshotAI/kimi-cli/issues/1864), [#2188](https://github.com/MoonshotAI/kimi-cli/issues/2188) |
| **IDE integration hardening** | VS Code and JetBrains users are encountering auth loops, encoding bugs, and version-check failures that block adoption. | [#2178](https://github.com/MoonshotAI/kimi-cli/issues/2178), [#2189](https://github.com/MoonshotAI/kimi-cli/issues/2189) |

---

## 6. Developer Pain Points

- **Windows is a second-class citizen.** The dominant theme today is that Windows users face a compounding set of issues: PowerShell version mismatch, Unix command generation, CRLF corruption, font resets ([#2197](https://github.com/MoonshotAI/kimi-cli/issues/2197)), and blank binary metadata. The proposed Git Bash migration ([PR #2186](https://github.com/MoonshotAI/kimi-cli/pull/2186)) is the most promising path forward, but requires thorough validation.

- **Session-destroying bugs erode trust.** Issues like [#2165](https://github.com/MoonshotAI/kimi-cli/issues/2165) (malformed tool calls) and [#2193](https://github.com/MoonshotAI/kimi-cli/issues/2193) (silent background listener death) cause unrecoverable state, forcing users to restart conversations mid-workflow. These should be treated as P0.

- **Enterprise & self-hosted deployments lack attention.** Corporate proxy SSL issues ([PR #762](https://github.com/MoonshotAI/kimi-cli/pull/762), open since January), Azure authentication gaps ([PR #1223](https://github.com/MoonshotAI/kimi-cli/pull/1223), open since February), and forced OAuth in ACP ([PR #2185](https://github.com/MoonshotAI/kimi-cli/pull/2185)) suggest that self-hosted and enterprise users are underserved compared to the SaaS audience.

- **Stale PRs are accumulating.** Several impactful PRs (#762, #1223, #1953) have been open for months without merge or substantive review, which discourages community contributions and leaves known bugs unfixed.

---

*Data sourced from [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) activity through 2026-05-08.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-09

## 1. Today's Highlights
It was a high-volume day in the OpenCode repository with no new version releases, but significant community activity surrounding core reliability and permission handling. Over 50 issues and 20 pull requests saw updates, highlighting active development in agent durability, ACP (Agent Communication Protocol) error handling, and external provider integrations. Several high-impact PRs were opened by core contributors aiming to fix long-standing Web UI session crashes and improve the overall TUX/TUI responsiveness.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues

1. **[#22100 - [BUG] WHY is OpenCode running pip3 with this configuration?](https://github.com/anomalyco/opencode/issues/22100)**
   A user flagged a major security concern where OpenCode TUI initiates `pip3` package installations despite being in a permissive read-only configuration. This raises critical questions about the agent's implicit permissions and potential supply chain attack vectors. (10 comments)

2. **[#12888 - Where to find "archived" conversations](https://github.com/anomalyco/opencode/issues/12888)**
   A highly discussed usability issue where users accidentally archive conversations, causing them to completely vanish from the current project without a clear recovery path. (10 comments)

3. **[#20045 - Edit permission vs. external_directory path inconsistencies](https://github.com/anomalyco/opencode/issues/20045)**
   A technical deep-dive into how `edit` permissions use relative paths while `external_directory` uses absolute paths, silently breaking agent-level path rules and leading to failed file modifications. (8 comments)

4. **[#25270 - Bug: Model generates identical response twice](https://github.com/anomalyco/opencode/issues/25270)**
   A frustrating inference bug causing the model to output the exact same response consecutively, severely interrupting coding workflows. (7 comments)

5. **[#21299 - Markdown rendering broken in TUI](https://github.com/anomalyco/opencode/issues/21299)**
   A regression introduced in the `opentui` upgrade (0.1.79 to 0.1.88+) that causes headings, bold text, and code blocks to be displayed as raw text across macOS and WSL2. (7 comments)

6. **[#10741 - Changing files in plan mode](https://github.com/anomalyco/opencode/issues/10741)**
   A highly upvoted (👍 6) architectural complaint. Users note there is no hard guardrail preventing the agent from modifying files while in "Plan Mode," suggesting OpenCode needs isolated user accounts for planning vs. building. (4 comments)

7. **[#26301 - MCP OAuth scope config not applied](https://github.com/anomalyco/opencode/issues/26301)**
   A newly reported bug indicating that configured OAuth scopes for MCP (Model Context Protocol) servers are ignored during the actual authorization flow. (6 comments)

8. **[#17223 - Cost tracking does not work for custom providers](https://github.com/anomalyco/opencode/issues/17223)**
   A widely upvoted issue (👍 15) pointing out that the `$ Spent` tracker remains at `$0.00` when using custom providers via `@ai-sdk/openai-compatible`, breaking cost observability for enterprise users. (3 comments)

9. **[#26285 - Ampersands auto-converted to symbols internally](https://github.com/anomalyco/opencode/issues/26285)**
   A sneaky bug where URLs containing `&` followed by entity names (e.g., `&parameter`) are HTML-encoded (e.g., `¶meter`) internally, breaking automated web interactions. (2 comments)

10. **[#21534 - Agent stopping after seconds/minutes of starting a task](https://github.com/anomalyco/opencode/issues/21534)**
    A critical reliability issue where the agent abruptly halts long-running tasks, usually right after printing a todo list, without indicating why. (3 comments)

## 4. Key PR Progress

1. **[#26414 - fix(app): hydrate session before prompt submit](https://github.com/anomalyco/opencode/pull/26414)**
   Directly addresses the Web UI crash recovery issue. It ensures local session data is properly hydrated before accepting a prompt, preventing "Unable to retrieve session" errors.

2. **[#24712 - Add native LLM core foundation (Closed/Merged)](https://github.com/anomalyco/opencode/pull/24712)**
   A massive foundational PR introducing `packages/llm`, an Effect-based native core with typed schemas, provider composition, and golden tests. This sets the stage for better internal LLM handling.

3. **[#26387 - [beta] tui: optimistically render submitted prompts](https://github.com/anomalyco/opencode/pull/26387)**
   Improves TUI performance by optimistically inserting user prompts into the sync store immediately using client-generated IDs, removing latency from the UI render loop.

4. **[#26368 - feat(core): be smarter about generating a worktree name](https://github.com/anomalyco/opencode/pull/26368)**
   A quality-of-life fix for Git worktrees. If a linked worktree shares the same base name as the primary checkout, it will now use the parent folder as the display name to reduce confusion.

5. **[#26413 - fix(workspace): claim detached sessions to source project](https://github.com/anomalyco/opencode/pull/26313)**
   Fixes a workspace session detaching bug by ensuring sync ownership is properly reclaimed by the source project rather than the ambient request project. 

6. **[#24079 - fix(app): MEMORY / OOM crash - disable vcs diff auto-fetch](https://github.com/anomalyco/opencode/pull/24079)**
   Introduces an experimental `disable_vcs_diff` flag to prevent the Web app from automatically fetching massive VCS diffs, which is causing out-of-memory crashes in large repositories.

7. **[#26406 - feat(opencode): Add support for reading/editing files in legacy encodings](https://github.com/anomalyco/opencode/pull/26406)**
   Expands file tooling capabilities to support legacy encodings (non-UTF-8), crucial for developers working on older enterprise codebases.

8. **[#20491 - [contributor] feat(opencode): add Kiro provider](https://github.com/anomalyco/opencode/pull/20491)**
   Adds AWS Kiro as a recognized LLM provider within OpenCode, adhering to Kiro's new terms and conditions for tool usage.

9. **[#18767 - feat(app): Mobile Touch Optimization](https://github.com/anomalyco/opencode/pull/18767)**
   Brings mobile-specific event handling and layout optimizations to the OpenCode web app, aiming for a seamless experience on tablets and smartphones.

10. **[#14177 - feat: support bearer token auth for google-vertex-anthropic](https://github.com/anomalyco/opencode/pull/14177)**
    Enhances Vertex AI integration by allowing users to pass a bearer token via environment variables or the `/auth` endpoint, bypassing the need for traditional SA keys.

## 5. Feature Request Trends

- **Hardened Plan vs. Execute Modes:** Users are consistently requesting strict, system-level isolation between "planning" and "execution" phases to prevent the LLM from modifying code before a plan is fully approved.
- **Advanced Cost Observability:** With the rise of custom and open-weight models, there is a strong demand for customizable cost-tracking schemas that don't rely strictly on hard-coded `models.dev` data.
- **Robust Git Integration:** Users want more reliable Git integrations, specifically regarding the prevention of UI-locking caused by spawning infinite `git` processes and better handling of Git worktrees.
- **ACP Error and Retry Visibility:** There is a distinct trend toward improving the Agent Communication Protocol's observability—specifically, typed error events and upper bounds on retries so agents don't hang indefinitely.

## 6. Developer Pain Points

- **Untargeted Agent Behavior:** Developers remain highly frustrated by the agent taking unauthorized actions, such as executing package manager commands (`pip3`) or breaking URLs via aggressive internal text sanitization.
- **TUI/Web UI Stability:** The application still suffers from fragile state management, particularly after crashes. Losing the ability to interact with previous sessions or the "Send" button disappearing on long inputs significantly disrupts developer flow.
- **Fragmented Permission Systems:** The internal mismatch between absolute and relative pathing for editing permissions causes silent failures, eroding trust in OpenCode's sandboxing capabilities.
- **Unhandled Infinite Retries:** The core session retry logic currently lacks upper bounds. If an upstream provider fails but continues emitting retryable status codes, OpenCode will hang forever without timing out or alerting the user.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-09

## 1. Today's Highlights
The Pi ecosystem experienced a high volume of activity focused on robustness and provider compatibility. Key developments include the introduction of native image generation support, the addition of new AI providers (Together AI), and critical bug fixes for third-party APIs (Google Antigravity, DeepSeek, and Kimi). Concurrently, the community-driven "big refactor" is steering the project toward a more extensible TUI architecture with better state management and cross-platform support.

## 2. Releases
No new official releases were published in the last 24 hours. The repository remains on its latest stable version while active development continues across numerous PRs.

## 3. Hot Issues

1. **[#3929 Bun startup crash](https://github.com/badlogic/pi-mono/issues/3929)**: Pi crashes on startup under Bun if `bun pm bin -g` fails to find a global package.json. This is a follow-up to previous Bun compatibility fixes and garnered significant community attention (9 comments).
2. **[#4185 Zsh/tmux installation bad colors](https://github.com/badlogic/pi-mono/issues/4185)**: New users report off-contrast and incorrect colors when running Pi in tmux, highlighting ongoing friction with terminal multiplexer compatibility.
3. **[#2616 SessionManager blocking I/O](https://github.com/badlogic/pi-mono/issues/2616)**: A significant architectural issue where `SessionManager` relies on synchronous file operations, blocking async and database-backed persistence. 
4. **[#4302 TUI crash on narrow terminals](https://github.com/badlogic/pi-mono/issues/4302)**: Narrow terminals (e.g., 20-column tmux panes) cause a fatal rendering crash when lines exceed the terminal width. Addressing this is crucial for users running Pi in tiled window setups.
5. **[#4313 Virtual scrollback for TUI](https://github.com/badlogic/pi-mono/issues/4313)**: Long chat sessions consume heavy memory and are hard to navigate. This issue proposes implementing virtual scrollback to limit rendered history and improve navigation.
6. **[#4308 Disable xAI Grok 4.3 reasoning](https://github.com/badlogic/pi-mono/issues/4308)**: Following recent API updates, Pi needs to support "none" as a reasoning effort parameter for Grok 4.3 to prevent API errors.
7. **[#4326 MCP Adapter crashes on non-string descriptions](https://github.com/badlogic/pi-mono/issues/4326)**: The `pi-mcp-adapter` passes non-string tool descriptions, causing fatal `.startsWith` errors in the TUI when connecting to certain MCP servers.
8. **[#4306 Confidence-gated model escalation](https://github.com/badlogic/pi-mono/issues/4306)**: A highly requested product proposal to use cheap/fast models for initial conversation turns and automatically escalate to smarter, expensive models when confidence drops.
9. **[#4266 LM Studio tool_choice failures](https://github.com/badlogic/pi-mono/issues/4266)**: OpenAI-compatible local servers (like LM Studio) fail with HTTP 400 because Pi passes object-style `tool_choice` parameters instead of strings.
10. **[#4279 CLI non-exit after prompt completion](https://github.com/badlogic/pi-mono/issues/4279)**: Running `pi -p "..."` causes the application to hang instead of returning to the shell after generating a response, breaking automation pipelines.

## 4. Key PR Progress

1. **[#3887 feat: image content](https://github.com/badlogic/pi-mono/pull/3887)**: Introduces a new API and support for image blocks, enabling the agent to output images via Google and OpenRouter models.
2. **[#3899 fix(ai): Antigravity UA 1.107.0](https://github.com/badlogic/pi-mono/pull/3899)**: Resolves widespread 503 errors with Google Cloud Code Assist by updating the hardcoded Antigravity User-Agent to `1.107.0`.
3. **[#3624 feat(ai): add Together AI as a provider](https://github.com/badlogic/pi-mono/pull/3624)**: Implements native Together AI provider support, auto-detecting API keys and sourcing tool-capable models.
4. **[#4312 / #4310 fix(ai): DeepSeek/Kimi tool schema](https://github.com/badlogic/pi-mono/pull/4312)**: Fixes `Invalid schema` errors when using DeepSeek and Kimi Coding APIs by correctly falling back to empty object parameters for tools without required arguments.
5. **[#4301 Fix TUI crash on over-wide lines](https://github.com/badlogic/pi-mono/pull/4301)**: Resolves #4302 by truncating over-wide non-image lines centrally before diffing, removing the crashing assertion.
6. **[#4318 Moves changelog ack state out of settings.json](https://github.com/badlogic/pi-mono/pull/4318)**: Extracts local state (like changelog acknowledgments) into `state.json`, allowing users to safely share their `settings.json` via dotfiles without sync conflicts.
7. **[#4320 fix(zig): add Windows platform support](https://github.com/badlogic/pi-mono/pull/4320)**: Replaces POSIX-only API calls with cross-platform Zig alternatives, ensuring the Pi Zig implementation compiles and runs on Windows.
8. **[#4299 fix(coding-agent): preserve .agents provenance](https://github.com/badlogic/pi-mono/pull/4299)**: Fixes a UI bug where skills from `~/.agents/skills` were incorrectly grouped under `~/.pi/agent/` in the `pi config` menu.
9. **[#4327 feat(tui): wrap list items with indent](https://github.com/badlogic/pi-mono/pull/4327)**: Improves markdown rendering in narrow terminals by wrapping list items with proper indentation.
10. **[#4283 update repo name to `pi`](https://github.com/badlogic/pi-mono/pull/4283)**: Fixes the broken and 404-ing CHANGELOG link in the TUI's update banner.

## 5. Feature Request Trends
- **TUI Navigation and Virtualization**: Users are heavily requesting better handling of long sessions, specifically virtual scrollback buffers and easier message jumping, as current implementations consume too much memory and scrolling is tedious.
- **Hierarchical Model Routing**: There is a distinct trend toward cost-aware agent routing—users want a "frontdesk" model that handles basic queries and delegates to smarter, expensive models only when necessary.
- **Enhanced Plugin/Extension APIs**: Developers want more extensible hooks, requesting APIs for `addFooterProvider`, transcript row click handlers, and exposure of the editor's cursor position via `ExtensionUIContext`.
- **Native Document/File Input**: Multiple issues and PRs are pushing for native PDF and file input support (`DocumentContent` type) as major providers standardize these APIs.

## 6. Developer Pain Points
- **The "OSS Weekend" Auto-closure Bot**: Numerous valid bugs and feature requests are being closed prematurely by an automated bot tagging issues as `closed-because-weekend` or `closed-because-bigrefactor`. This is causing frustration and forcing users to re-file issues.
- **OpenAI API Compatibility Assumptions**: Many local model servers (LM Studio, StepFun via OpenRouter, Kimi) fail when Pi assumes strict OpenAI object types (like `tool_choice` or non-null `tool.parameters`), highlighting a need for more defensive schema handling.
- **Process Lifecycle and Hangs**: Developers are experiencing pipeline friction due to the app failing to exit gracefully when run via single CLI prompts (`pi -p`) or when running package manager commands with missing global configurations.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-09

## 1. Today's Highlights
Qwen Code rolled out **v0.15.9**, introducing granular telemetry controls and AI commit attribution features. Community activity is heavily focused on **local model server reliability** and **MCP/settings persistence**, with core contributor `B-A-M-N` submitting a massive cluster of PRs to address persistent state and API retry bugs. Meanwhile, a highly debated issue regarding the **reduction of the OAuth free tier from 1,000 to 100 requests/day** continues to generate significant community pushback (122 comments).

## 2. Releases
- **v0.15.9** (Latest Stable): 
  - Added opt-in for sensitive span attributes in telemetry ([PR #3893](https://github.com/QwenLM/qwen-code/pull/3893)).
  - Introduced per-file AI commit attribution.
- **v0.15.8-preview.0** & **Nightly**: Aligned with the v0.15.8 codebase, bundling the telemetry and release chores. 

## 3. Hot Issues
1. **[#3203 [OPEN]](https://github.com/QwenLM/qwen-code/issues/3203) - Qwen OAuth Free Tier Policy Adjustment**: By far the most active issue. The proposed reduction of the free tier from 1,000 to 100 daily requests (and eventual phase-out) is causing major friction among free-tier users and hobbyists.
2. **[#3945 [OPEN]](https://github.com/QwenLM/qwen-code/issues/3945) - Edit Tool Deadlock on Large Files**: A critical bug where `read_file` truncation makes the "fully read" precondition for the `edit` tool impossible to satisfy, completely breaking large file workflows.
3. **[#3838 [OPEN]](https://github.com/QwenLM/qwen-code/issues/3838) - Terminal Infinite Scrolling/Refresh Loop**: A UI rendering bug causing constant flickering and jumping during streaming output, severely impacting CLI usability.
4. **[#3936 [OPEN]](https://github.com/QwenLM/qwen-code/issues/3936) - Russian Text Encoding Broken**: Reports of severe i18n encoding issues rendering Cyrillic text as garbage characters in the CLI.
5. **[#3926 [OPEN]](https://github.com/QwenLM/qwen-code/issues/3926) - Poor Input Text Editing**: Standard terminal shortcuts like `Ctrl+Backspace` and text selection for cut/paste are missing, hindering prompt engineering.
6. **[#3877 [OPEN]](https://github.com/QwenLM/qwen-code/issues/3877) - `.env` API Key Ignored**: Startup authentication flow ignores the `OPENCODE_GO_API_KEY` environment variable, forcing manual re-authentication.
7. **[#3964 [OPEN]](https://github.com/QwenLM/qwen-code/issues/3964) - Encrypted Files Misidentified as Binary**: File type detection in v0.15.8 is falsely flagging encrypted `.c`/`.cpp` files as binary payloads, breaking standard editing operations.
8. **[#3954 [OPEN]](https://github.com/QwenLM/qwen-code/issues/3954) - Wrap Markdown Links in OSC 8**: A popular request to make wrapped URLs clickable in terminal emulators that support OSC 8 hyperlinks.
9. **[#3745 [OPEN]](https://github.com/QwenLM/qwen-code/issues/3745) - VS Code Discontinued Model Picker**: The VS Code extension fails to mark the discontinued `coder-model`, confusing users compared to the CLI which blocks it.
10. **[#1242 [OPEN]](https://github.com/QwenLM/qwen-code/issues/1242) - Agent Talks But Doesn't Act**: A long-standing issue where the agent explains what it will do but fails to actually invoke tools without repeated user prompting.

## 4. Key PR Progress
1. **[#3974 [OPEN]](https://github.com/QwenLM/qwen-code/pull/3974) - Retry API on Model-Unloaded Errors**: Adds crucial retry logic for local servers (e.g., LM Studio) that use Just-In-Time model loading, fixing a major local dev pain point. 
2. **[#3973 [OPEN]](https://github.com/QwenLM/qwen-code/pull/3973) - Fix MCP Persistence**: Resolves a bug where `mcp add` dropped headers and `mcp remove` didn't actually persist server deletions.
3. **[#3879 [OPEN]](https://github.com/QwenLM/qwen-code/pull/3879) - Reactive Context Compression**: Implements an automated recovery path that compresses conversation context on-the-fly when hitting provider token limits.
4. **[#3896 [OPEN]](https://github.com/QwenLM/qwen-code/pull/3896) - Normalize OpenAI Stream Deltas**: Fixes a duplication bug where OpenAI-compatible endpoints (like DashScope) sent accumulated full text instead of incremental suffixes.
5. **[#3889 [OPEN]](https://github.com/QwenLM/qwen-code/pull/3889) - `qwen serve` Daemon (Stage 1)**: A massive architectural PR introducing an HTTP daemon bridging ACP NDJSON over HTTP+SSE.
6. **[#3861 [OPEN]](https://github.com/QwenLM/qwen-code/pull/3861) - Preserve `settings.json` Formatting**: Migrates away from raw `JSON.stringify` to format-preserving writes so user comments and custom JSON formatting aren't wiped during migrations.
7. **[#3963 [CLOSED]](https://github.com/QwenLM/qwen-code/pull/3963) - Validate `/model` Arguments**: Fixes the `/model` command to properly switch through the registry rather than accepting arbitrary raw strings.
8. **[#3976 [OPEN]](https://github.com/QwenLM/qwen-code/pull/3976) - Fast Model Memory Routing**: Optimizes auto-memory recall to use the "fast/cheap" model instead of the primary model, reducing background latency and cost.
9. **[#3847 [OPEN]](https://github.com/QwenLM/qwen-code/pull/3847) - Debug Log OTel Correlation**: Injects `trace_id` and `span_id` into local debug logs, enabling seamless correlation with OpenTelemetry backends.
10. **[#3871 [OPEN]](https://github.com/QwenLM/qwen-code/pull/3871) - Core i18n Expansion**: Introduces expanded bundled UI language coverage and optional AI translation caching for slash commands.

## 5. Feature Request Trends
- **Local & Self-Hosted Model Support**: A distinct trend is emerging around supporting local LLM workflows, evident from requests to integrate token-reduction plugins like "Rust Token Killer" ([#2880](https://github.com/QwenLM/qwen-code/issues/2880)) and automated model-loading retries.
- **Advanced Context & Session Control**: Developers want more granular control over agent memory and sessions, highlighted by requests for configurable plan directories ([#3548](https://github.com/QwenLM/qwen-code/issues/3548)), session branching/forking ([#2994](https://github.com/QwenLM/qwen-code/issues/2994)), and better sub-agent visibility ([#3758](https://github.com/QwenLM/qwen-code/issues/3758)).
- **CI/CD & Enterprise Deployments**: Increased requests for configurable runtime directories decoupled from `~/.qwen` ([#2119](https://github.com/QwenLM/qwen-code/issues/2119)) and workflow optimizations for faster PR CI matrix runs ([#3943](https://github.com/QwenLM/qwen-code/issues/3943)).

## 6. Developer Pain Points
- **Authentication and State Fragility**: Developers express ongoing frustration with API key handling (variables being ignored) and `settings.json` state (VS Code failing to persist model selections, MCP servers resurrecting after deletion). 
- **Terminal UI/UX Polish**: The CLI interface needs maturation. High-frequency frustrations include terminal resize rendering bugs ([#3213](https://github.com/QwenLM/qwen-code/issues/3213)), infinite scrolling loops during streaming output, and the lack of standard inline text editing shortcuts.
- **Large File Handling**: The agent's inability to properly read and edit large or encrypted files without truncation or false binary detection remains a significant roadblock for enterprise codebases.

</details>