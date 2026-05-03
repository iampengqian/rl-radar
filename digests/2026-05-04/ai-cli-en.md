# AI CLI Tools Community Digest 2026-05-04

> Generated: 2026-05-03 22:10 UTC | Tools covered: 8

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

# AI Developer Tools Ecosystem Report — 2026-05-04

## 1. Ecosystem Overview
The AI CLI tools landscape is currently characterized by aggressive feature iteration and a shared race toward reliable, autonomous agentic workflows. Major players—including Anthropic, OpenAI, Google, GitHub, and open-source challengers—are shifting focus from basic code generation to complex multi-agent orchestration, deep IDE integration, and robust permission models. However, this rapid evolution is occurring alongside significant growing pains: cross-platform instability (particularly on Windows), unreliable state/session management, and friction around API quotas and billing are recurring themes across the board. 

## 2. Activity Comparison
*Note: Activity counts reflect issues and pull requests updated or created within the 24-hour tracking period.*

| Tool | Maintainer | Issues Updated | PRs Updated | Release Status (May 4) |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | Anthropic | 50 | 5 | No new release |
| **OpenAI Codex** | OpenAI | 10+ | 10+ | No new release |
| **Gemini CLI** | Google | 10 | 11 | No new release |
| **Copilot CLI** | GitHub | 10 | 0 | No new release |
| **Kimi Code CLI** | MoonshotAI | 10 | 3 | No new release |
| **OpenCode** | Anomaly Co | 10 | 10 | No new release |
| **Pi** | badlogic | 30+ | 20 | No new release |
| **Qwen Code** | QwenLM | 10 | 10 | **v0.15.6-nightly** shipped |

## 3. Shared Feature Directions
By analyzing community feedback across all eight tools, several unified market demands emerge:

*   **Advanced Session Topologies & Durability:** Linear, ephemeral chats are no longer sufficient. Users are demanding persistent sessions, conversation branching, and forking. GitHub Copilot users are explicitly requesting `/fork` commands and TUI tree navigation, while Claude Code and OpenCode users are reporting critical pain points with session loss and history deletion during updates.
*   **Windows Stability & Sandboxing Parity:** Windows is universally treated as a second-class citizen, suffering from silent data drops (Claude Code), path completion crashes (Kimi CLI), and complex sandboxing bypasses (OpenAI Codex). Cross-platform sandbox reliability is a major shared bottleneck.
*   **Sub-Agent/Multi-Agent Orchestration:** The ecosystem is rapidly moving toward multi-agent workflows, but hitting infrastructure limits. Kimi CLI has a hard 4-agent concurrency cap, Gemini subagents falsely report success when hitting turn limits, and OpenCode subagents hang indefinitely on context overflow. 
*   **Extensible Permissions & Hooks:** As autonomy increases, developers require granular safety guardrails. Kimi CLI users want `PermissionRequest` hooks for programmatic auto-approval, OpenAI Codex is building `PreToolUse` allow/ask escalation workflows, and Claude Code users are flagging critical trust issues where auto-mode silently overrides explicit user safety memories.

## 4. Differentiation Analysis
*   **Anthropic (Claude Code):** Focuses heavily on deep IDE integration (VS Code) and complex CI/CD autonomy, but currently faces severe pushback regarding billing telemetry inaccuracies and regressions in its permission/security trust model.
*   **OpenAI (Codex):** Leading the pack in scaling context limits (pushing for 1M tokens with GPT-5.5) and foundational architectural refactors (Windows ACLs, MCP provenance security, subagent prompt caching). 
*   **Google (Gemini CLI):** Highly focused on AI-driven internal optimizations, differentiating itself with novel approaches like AST-aware file mapping to reduce token waste, union-find context compaction, and automated behavioral evaluations.
*   **GitHub (Copilot CLI):** Unique focus on enterprise compliance and complex session topologies. It is heavily reliant on MCP server standards but currently struggling with configuration regressions in its latest v1.0.40 update.
*   **OpenCode / Pi (Open Source):** Acting as universal gateways. These tools prioritize provider-agnosticism, allowing seamless routing between OpenAI, Anthropic, and local models (like LM Studio). Their focus is heavily skewed toward fixing provider-specific JSON schema incompatibilities and OAuth token routing.
*   **Qwen / Kimi:** Rapidly scaling background task management and enterprise automation. Qwen is uniquely focused on daemon modes (`qwen serve`) and JIT local model loading, though constrained by regional API quota tensions.

## 5. Community Momentum & Maturity
*   **Rapid Iterators (High Momentum):** **Qwen Code** was the only tool to ship a production release today, actively pushing background daemon architectures. **Pi** showed massive throughput (30+ issues, 20 PRs) focusing on hardening streaming transports and provider compatibility. **OpenAI Codex** and **Gemini CLI** displayed high maturity, pushing systemic architectural fixes (Windows sandboxes, bubblewrap) rather than just patching surface-level bugs.
*   **High Engagement / Friction:** **Claude Code** has a highly active community (50 issues) but is currently bogged down by trust-damaging security regressions and platform gaps. **Copilot CLI** has a community directly involved in designing complex feature architectures (session trees), though development appeared paused today (0 PRs). 
*   **Emerging Challengers:** **Kimi** and **OpenCode** are actively responding to users migrating from Claude Code, aiming to achieve feature parity while battling multi-agent scaling limits.

## 6. Trend Signals
1.  **Local/Alternative Model Routing is Essential:** Developers do not want to be locked into a single provider. The massive upvote counts for auto-discovering local models (OpenCode) and API routing customization (Copilot CLI, Pi) indicate that successful CLI tools must act as agnostic gateways to local models like Ollama and LM Studio.
2.  **Context Window Management is Becoming an Engineering Bottleneck:** As models scale to 1M tokens, CLI tools are struggling to manage that context efficiently. Look for AST-based file reading (Gemini) and semantic union-find compaction to become standard requirements to prevent token waste and API errors.
3.  **Security Models Must Support Headless Automation:** For these tools to mature in enterprise CI/CD pipelines, `y/n` human prompts are no longer viable. The industry is moving rapidly toward programmatic hook approvals and strict directory/agent allow-lists.
4.  **Data Sovereignty and Compute Quota Frictions:** Growing pains around compute costs are surfacing. Qwen's highly debated reduction of free tiers and OpenAI/Copilot budget limits signal that the era of unlimited free/reasonably-priced agentic CLI cycles is ending, making local-model support even more critical for the broader developer ecosystem.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (Data as of 2026-05-04)

Based on activity data from the official `github.com/anthropics/skills` repository, here is an analysis of the community's most-watched Skills, trending issues, and ecosystem health.

## 1. Top Skills Ranking
*Note: The following PRs rank highest among the top 20 most-attended open Pull Requests based on community engagement, longevity, and system impact.*

*   **[PR #514] [OPEN] `document-typography`**: A highly anticipated quality-of-life skill that prevents orphan word wraps, widow paragraphs, and numbering misalignment in AI-generated documents. Because this addresses universal document generation flaws, it has garnered significant passive attention since its creation in early March.
    *   *Author*: PGTBoos | *Link*: [PR #514](https://github.com/anthropics/skills/pull/514)
*   **[PR #83] [OPEN] `skill-quality-analyzer` & `skill-security-analyzer`**: A long-standing proposal (open since Nov 2025) introducing two vital "meta-skills" to the marketplace. The `skill-quality-analyzer` evaluates structure, documentation, and examples, while the `security-analyzer` checks for vulnerabilities.
    *   *Author*: eovidiu | *Link*: [PR #83](https://github.com/anthropics/skills/pull/83)
*   **[PR #486] [OPEN] `odt` (OpenDocument Text)**: Seeks to bridge a major gap in Claude's capabilities by allowing the creation, parsing, and template-filling of `.odt` and `.ods` files, establishing better interoperability with open-source office standards.
    *   *Author*: GitHubNewbie0 | *Link*: [PR #486](https://github.com/anthropics/skills/pull/486)
*   **[PR #210] [OPEN] `frontend-design` Improvements**: A comprehensive revision of the existing frontend-design skill. It focuses on making instructions actionable within a single conversation context and improving token efficiency.
    *   *Author*: justinwetch | *Link*: [PR #210](https://github.com/anthropics/skills/pull/210)
*   **[PR #806] [OPEN] `sensory` (macOS Automation)**: A highly innovative skill replacing screenshot-based computer use with native AppleScript/`osascript` commands for Tier 1 and Tier 2 macOS system automation.
    *   *Author*: AdelElo13 | *Link*: [PR #806](https://github.com/anthropics/skills/pull/806)
*   **[PR #568] [OPEN] `servicenow` Platform Assistant**: A robust enterprise-grade skill covering ITSM, SecOps, ITAM, and IntegrationHub. Represents a strong push into complex enterprise workflow automation.
    *   *Author*: Vanka07 | *Link*: [PR #568](https://github.com/anthropics/skills/pull/568)
*   **[PR #723] [OPEN] `testing-patterns`**: Proposes a comprehensive testing stack skill covering the Testing Trophy model, React component testing, and edge cases—filling a critical gap in AI-assisted software development.
    *   *Author*: 4444J99 | *Link*: [PR #723](https://github.com/anthropics/skills/pull/723)
*   **[PR #616] [OPEN] `HADS` (Human-AI Document Standard)**: Introduces a lightweight Markdown convention for technical documentation that serves both human readers and AI context windows without requiring separate files.
    *   *Author*: catcam | *Link*: [PR #616](https://github.com/anthropics/skills/pull/616)

## 2. Community Demand Trends
Analysis of the most active Issues reveals distinct functional gaps users want addressed in the Skills ecosystem:

*   **Robust Organization & Sharing**: Users strongly demand native organizational sharing mechanics for Skills. ([Issue #228](https://github.com/anthropics/skills/issues/228) - 9 comments, 👍 7). The current manual download/Slack/Teams/upload workflow is a major friction point.
*   **Security & Namespace Integrity**: The community is concerned about trust boundaries, noting that community skills distributed under the `anthropic/` namespace could lead to permission abuse. ([Issue #492](https://github.com/anthropics/skills/issues/492)).
*   **MCP (Model Context Protocol) Integration**: A highly requested architectural shift where Skills are exposed directly as MCPs to standardize AI software APIs. ([Issue #16](https://github.com/anthropics/skills/issues/16)).
*   **Platform Stability & Admin APIs**: Multiple high-traffic issues report severe platform friction, including persistent 500/404 errors when managing/deleting skills via the API ([Issue #403](https://github.com/anthropics/skills/issues/403), [Issue #406](https://github.com/anthropics/skills/issues/406)) and skills mysteriously disappearing ([Issue #62](https://github.com/anthropics/skills/issues/62) - 10 comments).
*   **Enterprise & SSO Compatibility**: Demand for Skills tooling (like the skill-creator description optimizer) to function without requiring raw `ANTHROPIC_API_KEY`s, which enterprise SSO users do not possess. ([Issue #532](https://github.com/anthropics/skills/issues/532)).

## 3. High-Potential Pending Skills
These open PRs address specific, active issues and are prime candidates for near-term merging:

*   **Core Skill-Creator Fixes**: [PR #36](https://github.com/anthropics/skills/pull/36) resolves critical YAML frontmatter validation errors, and [PR #539](https://github.com/anthropics/skills/pull/539) fixes silent parsing failures for unquoted descriptions. Both are essential infrastructure improvements.
*   **Document Pipeline Patches**: [PR #538](https://github.com/anthropics/skills/pull/538) resolves case-sensitivity bugs in PDF skill references, and [PR #541](https://github.com/anthropics/skills/pull/541) fixes OOXML `w:id` collisions preventing tracked changes in DOCX files.
*   **Repository Health**: [PR #509](https://github.com/anthropics/skills/pull/509) adds a much-needed `CONTRIBUTING.md`, directly addressing the repo's low community health score ([Issue #452](https://github.com/anthropics/skills/issues/452)).

## 4. Skills Ecosystem Insight
The community's most concentrated demand lies in **standardizing enterprise-grade Skill sharing, securing namespace trust boundaries, and expanding native file-format interoperability (DOCX/PDF/ODT).**

---

# Claude Code Community Digest — 2026-05-04

## 1. Today's Highlights

No new releases shipped in the past 24 hours, but the issue tracker remains highly active with 50 issues updated and 5 pull requests. A cluster of **security and autonomy-related bugs** is drawing attention: auto mode overriding user safety memories (#55636) and `permissions.deny` rules being ignored in the VSCode extension (#55866) both raise trust concerns for production workflows. Meanwhile, **Windows stability regressions** continue to pile up, with tool results being silently dropped (#46767) and the Cowork desktop app failing to start (#55879).

---

## 2. Releases

No new releases in the past 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#55636 — Auto mode overrides user-stored safety memories](https://github.com/anthropics/claude-code/issues/55636) | **Critical safety concern.** Auto mode silently ignores stored memory rules forbidding merge/push/deploy without confirmation. Undermines the trust model for autonomous agents in CI/CD pipelines. 0 👍 but high urgency given the security label. |
| 2 | [#55866 — permissions.deny rules not enforced in VSCode extension](https://github.com/anthropics/claude-code/issues/55636) | **Security bypass.** `permissions.deny` entries in `settings.json` are silently ignored in the VSCode native extension (v2.1.121). Denied paths return full file content. Directly impacts enterprise access-control policies. |
| 3 | [#46767 — Tool results silently dropped on Windows (regression in 2.1.101)](https://github.com/anthropics/claude-code/issues/46767) | **Data-loss regression.** All tools intermittently return "missing due to internal error" on Windows. Tagged as a regression from 2.1.101. Affects all workflows and has persisted for 3+ weeks. |
| 4 | [#55879 — Claude Desktop blank screen on Windows + Cowork unusable (9-day outage)](https://github.com/anthropics/claude-code/issues/55879) | **Complete desktop failure.** Max subscriber reports 9 days of unusable Cowork/desktop on Windows with blank screens and sandbox API errors. Highlights a growing Windows platform gap. |
| 5 | [#55889 — Hooks context injection dropped for Bash matcher (v2.1.123)](https://github.com/anthropics/claude-code/issues/55889) | **Hooks regression.** All context-injection channels (`additionalContext`, `systemMessage`, stdout) are silently dropped for `PreToolUse`/`PostToolUse` hooks matching Bash commands. Breaks guardrail and audit integrations. |
| 6 | [#55806 — Model prefers speculation over empirical verification](https://github.com/anthropics/claude-code/issues/55806) | **Model behavior.** Opus 4.7 defaults to first-principles speculation when it could run 2–5 tool calls to verify empirically. When challenged, it refines the guess rather than checking. Impacts reliability of agentic coding. |
| 7 | [#55871 — PR chip retains stale "Merged" badge after branch switch](https://github.com/anthropics/claude-code/issues/55871) | **UX bug in Desktop Code tab.** The PR status chip updates the branch name on switch but not the merge badge or link, causing confusion about the current PR state. |
| 8 | [#54672 — 5-hour usage limit hits 100% instantly despite 11% context usage](https://github.com/anthropics/claude-code/issues/54672) | **Billing anomaly.** Usage limit consumed instantly after multiple `claude -c` invocations in the same directory. 6 👍 suggests multiple users affected. |
| 9 | [#55808 — Cloud routine sandbox: LFS proxy returns 502 on every git lfs pull](https://github.com/anthropics/claude-code/issues/55808) | **Routines blocker.** The cloud sandbox's loopback LFS proxy consistently fails, blocking any routine that depends on Git LFS objects. |
| 10 | [#16446 — LaTeX rendering in VS Code plugin](https://github.com/anthropics/claude-code/issues/16446) | **Top-voted feature request** (73 👍, 27 comments). Still open after 5 months. LaTeX rendering in Claude Code for VS Code would improve readability of math-heavy outputs in academic and scientific workflows. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | [#55857 — docs: add warning against `npm update -g`](https://github.com/anthropics/claude-code/pull/55857) | Warns users that `npm update -g` can wipe the entire global `node_modules` on certain npm versions. Addresses a common footgun for users upgrading Claude Code. |
| 2 | [#55864 — feat: session-persist plugin](https://github.com/anthropics/claude-code/pull/55864) | Client-side stopgap to preserve session state when the window is closed mid-task. Complements the proposed server-side agent-loop persistence (#55860). |
| 3 | [#55834 — fix: document false-positive update banner](https://github.com/anthropics/claude-code/pull/55834) | Addresses the persistent "Update available!" false positive for Homebrew and WinGet users by documenting the issue and adding an update-checker plugin. |
| 4 | [#55832 — fix: remove stray content from plugin-validator.md](https://github.com/anthropics/claude-code/pull/55832) | Cleanup PR removing accidental dialogue ("Excellent work!") from documentation. Small but indicative of docs hygiene needs. |
| 5 | [#46024 — docs: document `--exclude-dynamic-system-prompt-sections` (CLOSED)](https://github.com/anthropics/claude-code/pull/46024) | Documented an advanced flag for print-mode prompt caching. Closed after 3 weeks — suggests maintainer review backlog or upstream changes superseded it. |

*Note: Only 5 PRs were updated in the tracking period; 10 are not available to list.*

---

## 5. Feature Request Trends

1. **Monorepo support** — [#12962](https://github.com/anthropics/claude-code/issues/12962) (53 👍) requests parent-directory traversal for `settings.json`. Monorepo workflows are a persistent gap in configuration resolution.

2. **IDE integration depth** — LaTeX rendering in VS Code [#16446](https://github.com/anthropics/claude-code/issues/16446) (73 👍), compact tool-call display [#55888](https://github.com/anthropics/claude-code/issues/55888), and session recap rendering [#55863](https://github.com/anthropics/claude-code/issues/55863) all point to users wanting the VS Code extension to reach feature parity (and UX quality) with the CLI.

3. **Model instruction adherence** — [#13689](https://github.com/anthropics/claude-code/issues/13689) and [#55806](https://github.com/anthropics/claude-code/issues/55806) both highlight the model's tendency to ignore explicit instructions or prefer speculation over tool use. Users want more predictable, tool-first behavior in agentic mode.

4. **Permissions and safety controls** — Requests for Skill-to-Skill allow-lists [#55892](https://github.com/anthropics/claude-code/issues/55892) and reports of auto-mode safety overrides [#55636](https://github.com/anthropics/claude-code/issues/55636) indicate growing demand for granular, enforceable permission boundaries as autonomous workflows become more common.

---

## 6. Developer Pain Points

- **Windows is a second-class platform.** Silent tool-result drops (#46767), blank-screen Cowork failures (#55879), pyright ENOENT errors (#46702), and mobile-permission desync (#55833) collectively paint a picture of significant Windows instability that has persisted for weeks without a fix.

- **Permissions/safety promises are unreliable.** `permissions.deny` being ignored (#55866), auto mode overriding safety memories (#55636), and hooks context injection being silently dropped (#55889) all erode developer trust in Claude Code's security model — especially problematic for teams relying on it in production CI/CD.

- **Billing and usage telemetry confusion.** Costs displayed for fixed-seat plans (#52365), usage limits consumed instantly (#54672), and API costs shown without extra-usage enabled (#55856) suggest the `/usage` dashboard needs a correctness and clarity pass.

- **Session/data loss on updates.** Desktop updates deleting session history (#48334) and the need for a third-party session-persist plugin (#55864) highlight that session durability is not yet a first-class concern — a critical gap for developers using Claude Code in long-running projects.

- **JSON output reliability.** `--output-format json` producing invalid JSON when the model emits unescaped quotes (#55886) breaks programmatic integrations and CI pipelines that depend on structured output.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-04

## 1. Today's Highlights
The OpenAI Codex ecosystem experienced a highly active day focused on hardening platform stability and expanding agentic capabilities, despite no new official releases. The community is heavily focused on scaling context limits for GPT-5.5 and resolving critical desktop app performance regressions. Behind the scenes, the core team submitted a flurry of internal pull requests to overhaul Windows sandboxing, introduce responsive TUI Markdown tables, and improve MCP (Model Context Protocol) server provenance.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues

1. **[OPEN] [Support 1M token context for GPT-5.5 in Codex](https://github.com/openai/codex/issues/19464)** (👍 149, 💬 115)
   The top-voted issue of the day. Users are frustrated that GPT-5.5 is constrained to a 400K context window in Codex, while the API supports up to 1M tokens. Developers working on large codebases are heavily upvoting this to enable massive single-shot refactors.

2. **[OPEN] [Codex replies to earlier messages instead of latest one in conversations](https://github.com/openai/codex/issues/8648)** (👍 50, 💬 56)
   A critical agentic bug where the model hallucinates and responds to out-of-date context in multi-message threads. This poses a significant reliability issue for complex, multi-step coding tasks.

3. **[OPEN] [Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)** (👍 103, 💬 44)
   Mac users experiencing severe battery drain are joining Linux developers in a massive plea for a native Linux desktop application, highlighting a major OS gap in Codex's current desktop strategy.

4. **[CLOSED] [Regression: bwrap: Failed RTM_NEWADDR: Operation not permitted](https://github.com/openai/codex/issues/14919)** (👍 42, 💬 40)
   A major CLI regression in Linux sandboxing (`v0.115.0`) that broke subagent execution on Ubuntu 24.04. The community actively engaged in debugging the `bubblewrap` permissions, leading to a recent fix.

5. **[OPEN] [Format Markdown tables so that they are readable by humans](https://github.com/openai/codex/issues/8259)** (👍 99, 💬 27)
   Developers note that raw Markdown tables output by the model are unreadable in the TUI. This high-demand issue highlights the need for a richer terminal UI experience.

6. **[OPEN] [Frequent reconnect loop in Codex App: websocket closed by server](https://github.com/openai/codex/issues/18960)** (👍 13, 💬 16)
   A severe streaming failure causing infinite WebSocket reconnect loops on the macOS Desktop app, interrupting active coding sessions.

7. **[CLOSED] [Regression: Alt+Enter no longer inserts newline in VS Code WSL terminal](https://github.com/openai/codex/issues/20501)** (👍 7, 💬 14)
   A TUI input regression affecting WSL users. The breaking of standard terminal line-break shortcuts disrupts the muscle memory of heavy CLI users.

8. **[OPEN] [Codex Desktop GPT-5.5 remote compaction fails and leaves thread unusable](https://github.com/openai/codex/issues/19558)** (👍 8, 💬 12)
   When context compaction fails on GPT-5.5, the entire thread is permanently bricked, forcing users to abandon their session history and start over.

9. **[OPEN] [App is almost unresponsive for 5 mins after starting up](https://github.com/openai/codex/issues/16158)** (👍 2, 💬 12)
   A critical macOS startup performance regression. Users report the app entirely freezing while loading plugins, making the tool unavailable for immediate use.

10. **[OPEN] [Desktop App becomes laggy scanning all `~/.codex/sessions` rollout files](https://github.com/openai/codex/issues/20864)** (👍 0, 💬 11)
    A severe performance bottleneck where the Desktop App scans every local session file on boot rather than querying an index, severely degrading performance for power users with long session histories.

## 4. Key PR Progress

1. **[feat(tui): render responsive Markdown tables in TUI](https://github.com/openai/codex/pull/20252)**
   Directly addresses Issue #8259. Introduces width-sensitive Markdown rendering so tables dynamically resize and remain readable during terminal window changes.

2. **[[codex] Refactor app-server dispatch result flow](https://github.com/openai/codex/pull/20897)**
   A major structural refactor consolidating response handling in the app-server. This clears up technical debt and makes it easier to diagnose WebSocket connectivity and streaming bugs.

3. **[Use structured service tiers across core and app-server](https://github.com/openai/codex/pull/20822) & [Drive TUI service-tier commands from model metadata](https://github.com/openai/codex/pull/20824)**
   Decouples hardcoded model tiers (like reasoning levels) from the client, making them dynamic based on model metadata. This prepares the UI for seamless integration of future GPT iterations.

4. **[Enforce/Plan/Thread Windows protected metadata targets](https://github.com/openai/codex/pull/20891)**
   A trio of PRs massively upgrading the Windows sandbox by implementing ACL (Access Control Lists) for protected files, bringing Windows security parity with Linux/Mac bubblewrap policies.

5. **[Support PreToolUse permissionDecision allow/ask](https://github.com/openai/codex/pull/20702)**
   Empowers `PreToolUse` hooks to programmatically approve or escalate tool executions, a massive boost for building secure, highly customized agentic workflows.

6. **[feat(tui): add PR summary statusline items](https://github.com/openai/codex/pull/20892)**
   Enhances the TUI UX by adding clickable OSC 8 hyperlinks to the status bar showing the current branch's active Pull Request and commit diff status.

7. **[frodex: preserve fork prompt cache state](https://github.com/openai/codex/pull/20909)**
   An optimization for "Frodex" (forked agents). By passing the parent's prompt cache key to the forked subprocess, it drastically reduces token usage and latency when spawning sub-agents.

8. **[[connectors] Track host-owned Codex Apps MCP provenance](https://github.com/openai/codex/pull/20649)**
   Secures the MCP ecosystem by ensuring malicious user-configured servers cannot spoof the internal `codex_apps` host routing, preventing potential local privilege escalation.

9. **[feat(tui): improve TUI keymap coverage](https://github.com/openai/codex/pull/20798)**
   Normalizes terminal control characters (fixing Shift+Enter and Alt+Enter inconsistencies) and implements configurable keymaps, improving terminal compatibility across different OS environments.

10. **[fix(permissions): preserve constrained profiles during escalation](https://github.com/openai/codex/pull/15977)**
    A crucial security fix ensuring that enterprise/managed permission constraints are not silently dropped when a sandbox escalation occurs, maintaining "deny-read" integrity.

## 5. Feature Request Trends

*   **Maximized Context & Context Management:** A dominant trend is the demand for full GPT-5.5 capabilities (1M tokens). Simultaneously, users want smarter context management, requesting features like file inclusions in `AGENTS.md` (similar to `@` tags) and more reliable remote context compaction.
*   **Deep Desktop OS Parity:** Linux users are aggressively petitioning for a native Desktop App, while Windows users are pushing for full native "Computer Use" support, moving beyond simple WSL2 browser limitations.
*   **Advanced TUI Customization:** Power users want the CLI to match modern IDEs. Requests include Vim-style editing modes, responsive Markdown tables, and customizable status bars showing live PR metadata.

## 6. Developer Pain Points

*   **State & History Brittleness:** Developers are experiencing severe frustration with session handling. Bugs related to remote compaction permanently breaking threads, desktop apps freezing while scanning session caches, and losing active turn timers during state replays undermine trust in the tool for long-term tasks.
*   **WebSocket / Streaming Instability:** Frequent connection drops and infinite reconnect loops on the Desktop app disrupt active coding flows, suggesting underlying growing pains in the app-server real-time event pipeline.
*   **Cross-Platform Sandboxing Inconsistencies:** Windows and Linux users continually face unique sandboxing bugs (like broken `bubblewrap` permissions on Linux and immediate app crashes on Windows 10) that prevent seamless execution of sub-agents and CLI tools.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-04

## 1. Today's Highlights
No new releases were shipped today, but the maintainers and community remain highly active on core reliability and architectural improvements. The focus is heavily on Windows stability, subagent safety, and memory management. Several high-priority PRs were opened addressing race conditions, proxy support, and CLI hangs.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues

- **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) Robust component-level evaluations (P1)** — A maintainer epic tracking the expansion of "behavioral evals." With 76 tests already generated across 6 supported models, this signals a serious investment in automated quality assurance for agent behavior.
- **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST-aware file reads, search, and mapping** — Investigating whether AST-aware tooling (like `tilth` or `glyph`) can reduce token noise and improve codebase navigation. High strategic value for making the agent more precise with fewer turns.
- **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent falsely reports success on MAX_TURNS (P1)** — The `codebase_investigator` subagent claims `status: "success"` when hitting turn limits, masking interruptions. Critical for trust in multi-agent workflows.
- **[#24916](https://github.com/google-gemini/gemini-cli/issues/24916) Repeated permission prompts for the same file** — A security-area bug where "allow for all future sessions" doesn't persist, causing repeated prompts. Directly impacts developer UX and trust.
- **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell execution hangs with "Waiting input"** — Simple CLI commands complete but the UI stays stuck awaiting input. 3 thumbs-up indicates this is a widespread frustration.
- **[#22819](https://github.com/google-gemini/gemini-cli/issues/22819) Memory routing: global vs. project scope** — Proposes intelligent routing for saved memories (user preferences vs. codebase-specific knowledge). Foundational for making Gemini CLI feel context-aware across projects.
- **[#22809](https://github.com/google-gemini/gemini-cli/issues/22809) Proactive memory writes by the main agent** — Companion to #22819, encouraging the agent to save preferences automatically when users correct behavior. Key to long-term usability.
- **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) Agent should discourage destructive behavior** — Requests safeguards against `git reset --force` and risky DB modifications. Especially important as agents gain more autonomy.
- **[#22093](https://github.com/google-gemini/gemini-cli/issues/22093) Subagents running without permission since v0.33.0 (P1)** — After an auto-update, subagents activate despite being disabled in all configurations. A serious permission regression.
- **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 400 error with >128 tools** — When too many tools are available (including MCP extensions), the API returns a 400 error. Needs smarter tool scoping.

## 4. Key PR Progress

- **[#26410](https://github.com/google-gemini/gemini-cli/pull/26410) fix(cli): use `os.homedir()` for home directory warning (P1)** — Fixes incorrect "running in home directory" warnings in subdirectories by separating the config home (`GEMINI_CLI_HOME`) from the actual home check.
- **[#26407](https://github.com/google-gemini/gemini-cli/pull/26407) fix: await IDE client initialization** — Prevents a race condition where `initializeApp` resolved before the IDE connection was established, causing flaky startup behavior.
- **[#26392](https://github.com/google-gemini/gemini-cli/pull/26392) fix(windows): resolve hangs, zombie processes, subagent reliability** — A comprehensive Windows-focused PR addressing startup hangs, zombie processes, and subagent failures. Critical for Windows parity.
- **[#26404](https://github.com/google-gemini/gemini-cli/pull/26404) fix(telemetry): stop buffering events when disabled** — Prevents unbounded memory growth in `telemetryBuffer` when telemetry is off, especially during API/MCP error storms that capture full conversation payloads.
- **[#26361](https://github.com/google-gemini/gemini-cli/pull/26361) fix(core): externalize `https-proxy-agent` (P1)** — Fixes `TypeError: HttpsProxyAgent is not a constructor` by externalizing the dependency from the esbuild bundle, restoring proxy support.
- **[#25684](https://github.com/google-gemini/gemini-cli/pull/25684) fix(config): use flash-lite for utility models** — Addresses quota exhaustion by routing internal utility calls to `flash-lite` instead of `gemini-3-flash-preview`, preventing the CLI from becoming completely unusable when quota is hit. Links to 6+ related issues.
- **[#26401](https://github.com/google-gemini/gemini-cli/pull/26401) fix(core): handle `ENAMETOOLONG` in `robustRealpath`** — Catches long path errors from pasted `@`-tokens instead of triggering unhandled rejections.
- **[#25900](https://github.com/google-gemini/gemini-cli/pull/25900) fix(core): prefer `pwsh.exe` over PowerShell 5.1** — Windows PowerShell 5.1 silently strips escaped quotes in shell commands; this PR prefers PowerShell 7+ (`pwsh.exe`).
- **[#24736](https://github.com/google-gemini/gemini-cli/pull/24736) feat(core): union-find context compaction** — Introduces a sophisticated alternative to binary context compression, clustering semantically similar messages using union-find. A novel approach to context window management.
- **[#25098](https://github.com/google-gemini/gemini-cli/pull/25098) fix(ui): strip trailing punctuation from URLs** — Bare URLs with trailing periods or commas break clickability; this adds intelligent punctuation stripping for markdown rendering.

## 5. Feature Request Trends

1. **Persistent memory and context awareness** — Multiple issues (#22819, #22809) push for intelligent, scoped memory that persists across sessions and projects, with proactive preference capture.
2. **AST-aware code intelligence** — Issues #22745 and #22746 advocate for AST-based file reading and codebase mapping to reduce token waste and improve precision in code navigation.
3. **Safer, more controllable agents** — Requests for guards against destructive commands (#22672), better tool scoping with many extensions (#24246), and strict permission enforcement (#22093) show the community wants more guardrails as autonomy increases.
4. **Windows and SSH parity** — Fixes for PowerShell encoding (#25102), SSH display corruption (#24202), and Windows-specific hangs (#26392) indicate Windows/remote usage is growing and needs platform-level attention.

## 6. Developer Pain Points

- **Repeated permission prompts** (#24916) — Settings like "allow for all sessions" not persisting undermines trust and slows workflows.
- **Subagent reliability and honesty** (#22323, #22093) — Subagents reporting false successes or activating without permission are critical blockers for production use.
- **Windows instability** — Hangs, zombie processes, encoding bugs, and PowerShell quirks form a cluster of frustrations for a significant user base.
- **Quota exhaustion bricking the CLI** (#25684) — When `gemini-3-flash-preview` quota is exhausted, internal utility calls fail, making the entire tool unusable.
- **Terminal rendering issues** — Scrambled text over SSH (#24202), broken table streaming (#25218), and scroll flashing (#24470) degrade the TUI experience, especially in remote environments.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for 2026-05-04.

### 1. Today's Highlights
Community activity for May 4th focuses heavily on expanding Copilot CLI's session management capabilities and ironing out UX friction introduced in the recent v1.0.40 update. Users are actively advocating for conversational branching and tree navigation to handle complex, multi-step tasks without losing context. Meanwhile, configuration and plugin ecosystems continue to mature, with growing demand for better model routing, skill declarations, and local environment overrides.

### 2. Releases
No new releases were recorded in the last 24 hours.

### 3. Hot Issues
*   **[OPEN] v1.0.40 no longer loads mcp servers from `./.mcp.json` on start up ([#3083](github/copilot-cli Issue #3083))**
    A likely regression in v1.0.40 is preventing repository-level MCP servers from loading automatically. Users who migrated from `.vscode/mcp.json` (which was recently deprecated) are finding their setups completely broken on launch.
*   **[OPEN] Can´t use DeepSeek API ([#2995](github/copilot-cli Issue #2995))**
    With 6 upvotes, this highly requested issue highlights configuration failures when attempting to point the CLI to a custom OpenAI-compatible provider (like DeepSeek) using base URL environment variables.
*   **[OPEN] `Remote session disabled: could not resolve repository` ([#2751](github/copilot-cli Issue #2751))**
    Affecting enterprise users (12 upvotes), the `/remote` command fails to resolve repositories owned by GitHub organizations, effectively breaking remote CLI workflows for teams.
*   **[OPEN] Model routing, per-agent model selection, and global hooks support ([#1354](github/copilot-cli Issue #1354))**
    Users want the CLI to respect the `model` field defined in `agent.md` files and provide a global `~/.copilot/hooks/` directory. This would allow specialized subagents to use more capable models without burning through premium quotas for basic orchestrator tasks.
*   **[OPEN] [BUG]: Unable to perform basic scrolling to view long results ([#2369](github/copilot-cli Issue #2369))**
    A fundamental TUI rendering issue where long outputs cannot be scrolled via mouse or touchpad, making it impossible to read extensive code generations or summaries without redirecting output.
*   **[OPEN] Add `/fork` command to branch a session ([#2058](github/copilot-cli Issue #2058))**
    Users are frustrated that side-questions derail the main objective. This issue proposes a `/fork` command to explore "side quests" in a isolated branch while keeping the main task intact.
*   **[OPEN] Session Branching ([#1313](github/copilot-cli Issue #1313))**
    A core proposal (9 upvotes) complementary to `/fork`, asking for the underlying architecture to allow a new session to inherit full conversation history from a specific branch point.
*   **[OPEN] Add "Disable MCP" option to `/mcp show` interactive menu ([#2956](github/copilot-cli Issue #2956))**
    A UX request to make managing MCP servers easier. Currently, servers can only be disabled via a typed command, as the interactive TUI menu only exposes "add" and "delete" actions.
*   **[CLOSED] [Feature Request] Allow subagents to override model ([#2939](github/copilot-cli Issue #2939))**
    Closed by the maintainers, this feature request asked for subagent model override parity with the Claude Agent SDK. Likely closed in favor of ongoing work tracked in broader model routing issues.
*   **[OPEN] Conversation-tree navigation: keybindings + TUI overview ([#3091](github/copilot-cli Issue #3091))**
    Anticipating the implementation of session branching, this issue proposes a TUI tree-view and keyboard shortcuts to navigate between parent and child conversational forks.

### 4. Key PR Progress
*No Pull Requests were updated in the last 24 hours. Development activity appears to be limited to issue triage and community discussion today.*

### 5. Feature Request Trends
*   **Advanced Session Topologies:** The most prominent trend is the desire to move beyond linear conversations. The community is actively designing "trees" of thought, requesting `/fork`, `/undo`, `/redo` ([#3089](github/copilot-cli Issue #3089)), and visual TUI navigation ([#3091](github/copilot-cli Issue #3091)) to manage complex workflows.
*   **Granular Agent/Model Routing:** Developers want fine-grained control over which AI models power specific tasks. Requests emphasize custom SKILL.md declarations ([#3095](github/copilot-cli Issue #3095)) and per-subagent model overrides to optimize cost and performance.
*   **Expanded Client Support (ACP/Zed):** Users are asking for broader Agent Client Protocol integration, specifically requesting a lightweight "Ask" mode ([#3096](github/copilot-cli Issue #3096)) for non-interactive external editors like Zed.

### 6. Developer Pain Points
*   **Configuration Regressions:** The transition to new configuration standards is bumpy. The breaking of `.mcp.json` auto-loading in v1.0.40 ([#3083](github/copilot-cli Issue #3083)) and the CLI failing to respect repository-level plugin overrides ([#3088](github/copilot-cli Issue #3088)) are causing immediate setup frustrations.
*   **TUI Input Quirks:** Text handling in the terminal UI needs polish. Developers report that pasting long strings (like base64 JWTs) results in corrupted input with extra newlines ([#3097](github/copilot-cli Issue #3097)), and the `@` file mention feature fails to resolve files in the current directory ([#3092](github/copilot-cli Issue #3092)).
*   **Enterprise & Remote Friction:** Budget limits and authentication boundaries are hindering remote work. Users are blocked by org-level repository resolution errors ([#2751](github/copilot-cli Issue #2751)) and Android app premium limits artificially capping active remote sessions ([#2979](github/copilot-cli Issue #2979)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-04

---

## 1. Today's Highlights

No new releases were published today, but the community remains highly active with 10 new or updated issues and 3 active pull requests. A major theme is **scaling up multi-agent workflows**—users are hitting hard concurrency limits and requesting queued subagents. Additionally, several high-quality feature requests around **extensibility (hooks, global configs, customizable UI)** signal that the user base is pushing Kimi CLI toward more complex, enterprise-grade automation scenarios.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

1. **[#2157 - Configurable background task limit / queued subagents for multi-agent workflows](https://github.com/MoonshotAI/kimi-cli/issues/2157)**
   Kimi CLI has a hard cap of 4 concurrent background/subagent tasks. When a 5th subagent is launched, it fails outright instead of being queued. This is a significant blocker for users orchestrating complex multi-agent pipelines and is likely to become more pressing as agentic workflows grow in sophistication.

2. **[#2154 - PermissionRequest hook event for programmatic auto-approval](https://github.com/MoonshotAI/kimi-cli/issues/2154)**
   Currently hooks can *block* tool calls (`PreToolUse`), but cannot *auto-approve* them. The user proposes a `PermissionRequest` event that would allow hooks to programmatically approve safe/routine operations, eliminating manual confirmation for known-safe patterns. This is a powerful extensibility request.

3. **[#2152 - Global `~/.kimi/AGENTS.md` for multi-project shared conventions](https://github.com/MoonshotAI/kimi-cli/issues/2152)**
   `AGENTS.md` is only loaded from the CWD, forcing developers managing 10+ projects to duplicate shared rules. A global `~/.kimi/AGENTS.md` would allow cross-project convention sharing—a quality-of-life improvement for power users.

4. **[#2151 - Windows `NoneType` crash on path completion + broken image attachment](https://github.com/MoonshotAI/kimi-cli/issues/2151)**
   On Windows 10 with v1.41.0, tab-completing a file path triggers a `NoneType` crash, and image attachments fail to transmit. This is a high-severity platform-specific regression affecting core CLI functionality.

5. **[#2155 - Configurable prompt symbols in `config.toml`](https://github.com/MoonshotAI/kimi-cli/issues/2155)**
   TUI prompt symbols (✨, 💫, 📋) are hardcoded emoji constants, making terminal history search and copy-paste difficult. The request is to make them configurable—small change, significant daily-UX impact.

6. **[#2153 - Update Pillow 12.1.0 → 12.2.0 (CVE-2026-25990)](https://github.com/MoonshotAI/kimi-cli/issues/2153)**
   A known out-of-bounds write vulnerability in Pillow 12.1.0 is blocking deployments in security-restricted environments. A straightforward dependency bump that should be prioritized.

7. **[#2040 - VS Code notification when approval is required](https://github.com/MoonshotAI/kimi-cli/issues/2040)**
   When VS Code is minimized, users miss approval dialogs confined to the Kimi webview panel. The request: trigger a native `showInformationMessage` notification. With 5 comments, this has active community discussion.

8. **[#1894 - Recursively load nested skill directories](https://github.com/MoonshotAI/kimi-cli/issues/1894)**
   Kimi CLI cannot discover nested skill directories like `.agents/skills/{name}/skills/xxx`, while Codex can. This is a compatibility gap that prevents migration from Codex-based workflows. A community PR (#2146) is already open.

9. **[#2150 - Confusing API usage display: dual quota systems](https://github.com/MoonshotAI/kimi-cli/issues/2155)**
   The `/usage` command exposes two independent quota systems with inverted semantics and poor discoverability, confusing users migrating from Claude Code. Clear documentation or UX consolidation is needed.

10. **[#2149 - Claude Code-style configurable statusline with usage/cost metadata](https://github.com/MoonshotAI/kimi-cli/issues/2149)**
    A request to support a configurable statusline script that receives JSON metadata (model, cost, token usage) after each interaction—mirroring Claude Code's approach. Reflects growing demand for observability in AI-assisted development.

---

## 4. Key PR Progress

| PR | Title | Status | Significance |
|---|---|---|---|
| [#2146](https://github.com/MoonshotAI/kimi-cli/pull/2146) | Recursively discover skills in nested subdirectories | 🟢 Open | Directly addresses Issue #1894; adds `_discover_subdir_skills()` helper to walk nested skill trees, closing the Codex compatibility gap. |
| [#768](https://github.com/MoonshotAI/kimi-cli/pull/768) | Pseudo-cwd for shell mode | 🔴 Closed | Adds persistent directory tracking within shell mode (`cd` support) without altering the agent's working directory. Improves shell-mode UX. |
| [#767](https://github.com/MoonshotAI/kimi-cli/pull/767) | Persist `approve_for_session` per session | 🔴 Closed | Saves auto-approve state in `approval_state.json` so session resume doesn't lose approval preferences. Reduces friction in long sessions. |

> *Note: Only 3 PRs were active in the last 24h. PRs #768 and #767 appear to have been closed after extended review periods (open since January 2026).*

---

## 5. Feature Request Trends

Analyzing the issue landscape, four clear feature directions emerge:

1. **Multi-Agent Scaling & Orchestration** — The single most urgent theme. Users want configurable concurrency limits, subagent queuing, and reliable multi-agent error handling (#2157). As agentic coding patterns mature, this will be a differentiator.

2. **Hook & Permission Extensibility** — Developers want programmatic control over approvals (#2154), not just blocking. The hook system is a strength; extending it to cover *auto-approval* and *permission policies* would unlock CI/CD and headless automation.

3. **Cross-Project & Global Configuration** — Global `AGENTS.md` (#2152), configurable prompt symbols (#2155), and statusline customization (#2149) all point to users wanting a *personalized, portable* CLI experience across many repositories.

4. **Claude Code Parity & Migration** — Multiple issues (#1894, #2149, #2150) explicitly reference Claude Code compatibility or feature parity, indicating a significant inbound user migration from Claude Code that needs a smooth transition path.

---

## 6. Developer Pain Points

- **Windows Platform Stability**: The `NoneType` crash on path completion (#2151) is the latest in a recurring pattern of Windows-specific bugs. First-class Windows support remains a gap.
- **Hard Concurrency Limit on Subagents**: The 4-task ceiling (#2157) is a hard blocker for serious multi-agent workflows. The failure mode (crash vs. queue) makes it worse.
- **Approval Workflow Friction**: Manual approval is tedious for repeated safe operations. Lack of auto-approve hooks (#2154) and missing session persistence (#767, now closed) compound this.
- **Security Dependency Lag**: Pillow CVE blocking deployments (#2153) highlights the need for faster dependency patching cycles.
- **Observability Gaps**: Confusing usage displays (#2150) and lack of a statusline API (#2149) make cost monitoring and debugging harder than in competing tools.
- **Skill Discovery Compatibility**: Inability to load nested skills (#1894) breaks existing Codex-based workflows and blocks migration.

---

*Data sourced from [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) on 2026-05-04.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-04

## 1. Today's Highlights

No new releases shipped today, but the community remains highly active across architecture, tooling, and UX. The biggest development is the ongoing **native LLM core refactoring** led by core contributor @kitlangton, who opened or closed six PRs today pushing OpenCode toward an Effect-native runtime. Meanwhile, the **Memory Megathread** (#20695) continues to dominate issue discussion with 73 comments, and multiple new issues around **OAuth credential hijacking** and **truncated JSON tool calls** are drawing attention.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

1. **[#20695 — Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** | 73 💬, 44 👍
   The central hub for all memory leak reports. Maintainers are pleading with users to stop pasting LLM-generated solutions and instead submit heap snapshots. High engagement shows memory remains a top pain point.

2. **[#20650 — Kimi k2.5 tool calling failures](https://github.com/anomalyco/opencode/issues/20650)** | 46 💬, 4 👍
   Kimi k2.5 produces malformed JSON in tool arguments, causing `bash` and other tools to fail. This directly motivates PR #24289 which uses `jsonrepair` to fix truncated inputs.

3. **[#768 — GitHub Copilot premium request tracking](https://github.com/anomalyco/opencode/issues/768)** | 32 💬, 70 👍
   Cost tracking shows $0.00 for Copilot users. The community wants OpenCode to display premium request quotas instead—a quality-of-life fix for the large Copilot user base.

4. **[#6231 — Auto-discover models from OpenAI-compatible endpoints](https://github.com/anomalyco/opencode/issues/6231)** | 10 💬, 106 👍
   Highest upvote count in today's list. Users are frustrated by manually listing models in `opencode.json` for local providers (Ollama, LM Studio, llama.cpp). Strong demand for auto-discovery.

5. **[#14808 — Plugin `session.created` event not firing](https://github.com/anomalyco/opencode/issues/14808)** | 18 💬, 14 👍
   Plugin event bus is broken for session lifecycle events, affecting memory/engram plugins. Signals deeper issues in the plugin initialization pipeline being reworked in PR #22753.

6. **[#12570 — GPT-5.3-Codex terminates early](https://github.com/anomalyco/opencode/issues/12570)** | 12 💬
   Subagent calls complete but the model stops before the next run. Specific to GPT-5.3-Codex; absent in 5.2. Suggests a provider-specific regression in response handling.

7. **[#25644 — Raw `<tool_calls>` markup leaking into reasoning](https://github.com/anomalyco/opencode/issues/25644)** | 2 💬
   OpenCode-generated `<tool_calls>`, `📀`, and `<tool_sep>` tokens appear in reasoning text, breaking subsequent tool calls with JSON parse errors. Affects multiple models.

8. **[#25627 — Custom baseURL hijacked by stale OAuth](https://github.com/anomalyco/opencode/issues/25627)** | 3 💬 (CLOSED)
   OpenAI-compatible proxy configs get overridden by cached OAuth credentials. Related to #18862, indicating a systemic auth priority bug.

9. **[#25187 — Sub-agents hang on context overflow](https://github.com/anomalyco/opencode/issues/25187)** | 3 💬
   Main agent auto-compacts on overflow, but sub-agents silently hang indefinitely. Critical reliability issue for multi-agent workflows.

10. **[#25641 — GPT 5.3 Codex Spark access missing](https://github.com/anomalyco/opencode/issues/25641)** | 2 💬
    ChatGPT Pro subscribers lost Codex Spark model access in OpenCode. PR #25640 already addresses this by adding `gpt-5.3-codex-spark` to the OAuth model allowlist.

---

## 4. Key PR Progress

1. **[#24712 — Native LLM core foundation](https://github.com/anomalyco/opencode/pull/24712)** by @kitlangton
   Adds `packages/llm`—an Effect-based LLM core with typed request/event schemas, provider adapters, and tool runtime. Gated behind `OPENCODE_EXPERIMENTAL_LLM_NATIVE`. The foundational PR for OpenCode's runtime overhaul.

2. **[#25634 — Improve v2 session message rendering](https://github.com/anomalyco/opencode/pull/25634)** by @thdxr
   Fixes sync ordering for realtime updates, improves assistant duration display, inline tool spacing, and error state rendering. Direct UX improvement for the TUI.

3. **[#24289 — Repair truncated JSON tool inputs](https://github.com/anomalyco/opencode/pull/24289)** by @menardorama
   Uses the `jsonrepair` library to fix malformed/truncated JSON from LLMs like Kimi k2.5. Directly addresses issues #20650 and #20786.

4. **[#22753 — Move plugin initialization to config layer override](https://github.com/anomalyco/opencode/pull/22753)** by @Brendonovich
   Restructures plugin initialization timing, fixing TUI launch issues. Critical for resolving the `session.created` event bug (#14808).

5. **[#20672 — MCP resource subscription support](https://github.com/anomalyco/opencode/pull/20672)** by @sjawhar
   Adds MCP resource subscriptions and template support, exposing subscribed resources through the SDK client. Addresses long-standing issue #12092.

6. **[#25640 — Allow Codex Spark with Codex OAuth](https://github.com/anomalyco/opencode/pull/25640)** by @Utkub24
   Quick fix to add `gpt-5.3-codex-spark` to the OAuth model allowlist. Resolves #25638 and #25641.

7. **[#25573 — Fix cf-ai-gateway dropping provider options](https://github.com/anomalyco/opencode/pull/25573)** by @NathanDrake2406
   `reasoningEffort` and workflow `variant` were silently dropped for Cloudflare AI Gateway models. Routes options through the correct `openaiCompatible` key.

8. **[#24821 — Fix npm cache for non-registry specs](https://github.com/anomalyco/opencode/pull/24821)** by @sjawhar
   Resolves the `Npm.add` cache fast-path so non-registry package specs resolve to their actual installed directory. Fixes plugin/skill installation edge cases.

9. **[#21722 — Improve UX and design](https://github.com/anomalyco/opencode/pull/21722)** by @snatvb
   A large design overhaul PR aiming to bring OpenCode's UI quality up to competitor standards. Includes layout, color, and interaction improvements.

10. **[#25631 — Normalize subdirectory git paths](https://github.com/anomalyco/opencode/pull/25631)** by @mrbob-git
    Fixes the review UI when OpenCode is launched from a git subdirectory—paths reported relative to repo root now resolve correctly.

---

## 5. Feature Request Trends

- **Model & provider flexibility**: Auto-discovery of local models (#6231, 106 👍), ACP client support (#5182), and proper OAuth vs. API key handling (#25627, #18862). Users want seamless switching between cloud and local providers.

- **Agent-teams / multi-agent orchestration**: Explicit demand for agent teams (#15035) paired with bug reports on sub-agent hangs (#25187) and missing sub-agent token tracking (#22103). Multi-agent is clearly a priority theme.

- **Conversation management**: `/compact` command and fork-aware conversations (#4317), persisted session history on project rename (#25625), and archived session viewing (#6680). Users want durable, manageable conversation state.

- **TUI/Desktop polish**: Ctrl+R history search (#5062), light mode in Zellij (#4464), drag-and-drop images (#4668), Cmd+A text selection (#25386), and settings not interrupting active sessions (#25601). The desktop app experience needs refinement.

- **Safety & scoping**: Configurable skill discovery directories (#23035) and folder operation protection (#25609). Users want guardrails around what agents can access.

---

## 6. Developer Pain Points

- **Memory leaks** remain the #1 unresolved complaint. The megathread (#20695) has 73 comments with no definitive fix, and users are frustrated that LLM-suggested solutions are consistently wrong.

- **OAuth credential hijacking** is a recurring, confusing failure mode. Stale OAuth tokens silently override explicit API keys and custom baseURLs (#25627, #18862), causing hard-to-diagnose routing failures.

- **Tool call reliability** across non-OpenAI models is fragile. Kimi k2.5 (#20650), vLLM-hosted models (#7185), and raw tool markup in reasoning (#25644) all produce broken JSON that kills tool execution.

- **Sub-agent reliability** is a trust-killer: indefinite hangs on context overflow (#25187), early termination with GPT-5.3-Codex (#12570), and invisible token usage (#22103) make multi-agent workflows unreliable.

- **Plugin lifecycle events** are broken (#14808), blocking the custom plugin ecosystem—particularly memory/integration plugins that depend on session hooks.

- **Desktop app gaps**: Settings interrupt active work (#25601), system prompt doesn't distinguish CLI vs. desktop mode (#25617), and basic interactions like text selection (#25386) are broken on macOS.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-04

## 1. Today's Highlights
The Pi ecosystem saw a heavy focus on **stability and provider compatibility** over the weekend, with core contributors merging critical fixes for WebSocket transport hangs, JSON schema incompatibilities with Kimi K2.5/K2.6, and Xiaomi MiMo regional provider routing. A burst of community activity—30+ issues updated and 20 PRs touched—centered around transport reliability, TUI robustness (CPU spins, non-Latin keyboard support), and extensibility hooks for sandbox environments. Notably, Armin Ronacher (mitsuhiko) landed several foundational fixes, signaling a concerted push to harden the streaming and validation layers.

---

## 2. Releases
No new releases were published in the last 24 hours. The most recent tagged version remains **v0.72.1**.

---

## 3. Hot Issues

1. **[Codex WebSocket transport prevents `--print` mode from exiting](https://github.com/badlogic/pi-mono/issues/4103)** — When using OpenAI Codex over WebSocket, Pi hangs after responding in print mode. Directly addressed by PR #4133 (SSE fallback). Community reaction: 4 comments, confirmed reproducible.

2. **[Xiaomi MiMo Token Plan regional providers not working](https://github.com/badlogic/pi-mono/issues/4143)** — Neither `/login` nor manual `auth.json` entries correctly expose regional MiMo models. Follows #4082 (China endpoint 401 errors). Addressed by PR #4112. 1 comment.

3. **[Kimi K2.5 returns 400 (JSON Schema incompatibility)](https://github.com/badlogic/pi-mono/issues/4107)** — Moonshot's backend uses a non-standard "Moonshot Flavored JSON Schema" that Pi's tool definitions don't satisfy. Impacts all OpenCode Go-served Kimi models. 2 comments.

4. **[Kimi K2.6 error 400 — same schema class of bugs](https://github.com/badlogic/pi-mono/issues/4138)** — Separate report confirming K2.6 also affected by Moonshot schema requirements. Signals a systemic provider-compat gap.

5. **[pi-tui: 100% CPU spin + RSS blow-up when terminal disappears](https://github.com/badlogic/pi-mono/issues/4144)** — Orphaned Pi sessions hot-spin at 100% CPU / 3.2 GB RSS after tmux/SSH disconnect. No EIO/SIGHUP guard on stdout writes. Tagged `closed-because-bigrefactor` — indicates architectural fix needed. 1 comment.

6. **[Expired tokens cause hung process](https://github.com/badlogic/pi-mono/issues/4141)** — OpenAI Codex provider hangs after displaying a response when the subscription auth token is expired. Related to the broader class of transport/session lifecycle bugs.

7. **[macOS: image paste hard-aborts Pi under sandbox restrictions](https://github.com/badlogic/pi-mono/issues/4142)** — Rust-level panic when pasteboard permissions are denied (seatbelt sandbox). Should fail gracefully instead.

8. **[Fundamental file operations need override at foundational level](https://github.com/badlogic/pi-mono/issues/4104)** — Extension author (richardanaya) argues for a virtual filesystem function table so all extensions share overridden file operations. 3 thumbs-up — highest community endorsement today.

9. **[pi.sendUserMessage doesn't execute commands](https://github.com/badlogic/pi-mono/issues/2994)** — Calling `pi.sendUserMessage("/reload")` prompts the model instead of executing the slash command. Affects both built-in and user-contributed commands. 3 comments, 1 thumbs-up.

10. **[Support Ukrainian Cyrillic layout for Ctrl key combinations](https://github.com/badlogic/pi-mono/issues/4109)** — TUI key handling only maps QWERTY keycodes; Cyrillic layout users can't use Ctrl+C/V/W. Highlights internationalization gap in the terminal UI layer.

---

## 4. Key PR Progress

1. **[#4133 — fix(ai): fall back from Codex WebSocket to SSE](https://github.com/badlogic/pi-mono/pull/4133)** (mitsuhiko) — When WebSocket connections fail (close code 1000 or oversized payload 1009), transparently fall back to SSE. Directly fixes #4103 and improves reliability for all Codex users.

2. **[#4112 — fix(ai): switch Xiaomi default to API billing, add per-region token plan providers](https://github.com/badlogic/pi-mono/pull/4112)** (Phoen1xCode) — Splits Xiaomi MiMo into default API-billing endpoint + separate regional Token Plan providers. Closes #4082 and #4143.

3. **[#4136 — /model toggle to previous model](https://github.com/badlogic/pi-mono/pull/4136)** (fzhnf) — Implements `/model -` to switch back to the previously used model (like `cd -`). Tracks `_previousModel` on `AgentSession`. Clean UX improvement.

4. **[#4127 — fix(coding-agent): disable provider session cache in print mode](https://github.com/badlogic/pi-mono/pull/4127)** (llj098) — Stops forwarding agent session IDs in print mode, preventing cached WebSockets from keeping the Node process alive. Related to #4103 and #4134 (hang-on-exit class of bugs).

5. **[#4126 — fix(coding-agent): retry on transient HTTP 404/408](https://github.com/badlogic/pi-mono/pull/4126)** (nlachica) — Extends `_isRetryableError` to cover 404 and 408 status codes. Triggered by real Cerebras streaming edge case. Small but high-impact reliability fix.

6. **[#4117 — feat(agent,coding-agent): add stopAfterTurn handoff control](https://github.com/badlogic/pi-mono/pull/4117)** (divB0) — Exposes `agent.stopAfterTurn()` and `session.stopAfterTurn()` for graceful shutdown after the active turn completes. Infrastructure for cleaner lifecycle management.

7. **[#4119 — test(ai,coding-agent): stabilize env-sensitive test cases](https://github.com/badlogic/pi-mono/pull/4119)** (yzhg1983) — Forces SSE transport in Codex tests, clears SSH/MOSH env vars in clipboard tests, isolates HOME in package-manager tests. Improves CI reliability.

8. **[#3229 — fix(anthropic): harden tool-call streaming and recovery](https://github.com/badlogic/pi-mono/pull/3229)** (mitsuhiko) — Switches from `messages.stream()` to raw event iteration with non-stream fallback. Aligns with Claude Code's own strategy for mid-stream failure recovery.

9. **[#3266 — fix(ai): preserve cache_write_tokens in OpenAI responses](https://github.com/badlogic/pi-mono/pull/3266)** (vegarsti) — Adds parsing of `input_tokens_details.cache_write_tokens` from the Responses API. Essential for accurate token cost tracking.

10. **[#4110 — Fix mismatch between models.dev and OpenCode Go (Qwen3.5/3.6, MiniMax M2.7)](https://github.com/badlogic/pi-mono/pull/4110)** (jsynowiec) — Corrects model metadata for Qwen 3.5 Plus, Qwen 3.6 Plus, and MiniMax M2.7 from the OpenCode Go provider. Directly fixes #4106.

---

## 5. Feature Request Trends

- **Provider expansion & multi-region support**: Requests for NVIDIA NIM ([#4116](https://github.com/badlogic/pi-mono/issues/4116)), Nebius Token Factory ([#3348](https://github.com/badlogic/pi-mono/issues/3348)), ppq.ai ([#4139](https://github.com/badlogic/pi-mono/issues/4139)), and Xiaomi regional endpoints. The community is pushing Pi toward being a universal model gateway.

- **Isolated environments & profiles**: `--profile` support for separate work/personal/local-LLM states ([#3966](https://github.com/badlogic/pi-mono/issues/3966)), virtualized filesystem hooks for sandbox extensions ([#4104](https://github.com/badlogic/pi-mono/issues/4104)), and TUI path override for remote dev ([#4100](https://github.com/badlogic/pi-mono/issues/4100)).

- **UX polish**: Quick model toggle (`/model -`, [#4135](https://github.com/badlogic/pi-mono/issues/4135)), provider exclusion settings ([#4130](https://github.com/badlogic/pi-mono/issues/4130)), per-repo `ignoreGlobalContext` flag ([#4132](https://github.com/badlogic/pi-mono/issues/4132)), and auto light/dark mode ([#1436](https://github.com/badlogic/pi-mono/issues/1436)).

---

## 6. Developer Pain Points

- **Process hangs and exit failures** are the dominant frustration: WebSocket-related hangs in print mode ([#4103](https://github.com/badlogic/pi-mono/issues/4103)), expired token hangs ([#4141](https://github.com/badlogic/pi-mono/issues/4141)), general `-p` mode hangs ([#4134](https://github.com/badlogic/pi-mono/issues/4134)), and zombie CPU spins ([#4144](https://github.com/badlogic/pi-mono/issues/4144)). Multiple root causes but a shared symptom — Pi not reliably terminating.

- **Provider JSON schema incompatibilities** with Moonshot/Kimi models ([#4107](https://github.com/badlogic/pi-mono/issues/4107), [#4138](https://github.com/badlogic/pi-mono/issues/4138)) create a poor first impression when users try non-OpenAI/Anthropic providers. The "flavored JSON schema" problem will likely recur as more providers add custom validation.

- **Extension authoring friction**: Inability to override core filesystem operations at a foundational level ([#4104](https://github.com/badlogic/pi-mono/issues/4104)) and missing TUI APIs for path override ([#4100](https://github.com/badlogic/pi-mono/issues/4100)) limit extension use cases like remote sandboxes.

- **`closed-because-weekend` triage label** appears on many issues, indicating the core team is overwhelmed by volume and deferring weekend reports. While understandable, this creates a poor experience for bug reporters who see their issues auto-closed.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-04

## 1. Today's Highlights
Qwen Code shipped **v0.15.6-nightly.20260503**, introducing a core `FileReadCache` optimization and proxy settings fix. The community and core team remain highly focused on **background task management**, with several Phase B and D PRs merging to enhance the `qwen serve` daemon mode roadmap. Additionally, multiple PRs were opened to harden telemetry, fix fast-model config leaking, and improve CLI model discovery, showing a concerted effort to stabilize production infrastructure.

## 2. Releases
**v0.15.6-nightly.20260503.5037fa762**
- **feat(core):** Introduced `FileReadCache` to short-circuit unchanged file reads, significantly optimizing token usage and repeated tool calls ([PR #3717](https://github.com/QwenLM/zwen-code/pull/3717)).
- **fix(cli):** Added support to correctly honor user-defined proxy settings.

## 3. Hot Issues
1. **[#3203 [OPEN] Qwen OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203)**: A highly debated issue (121 comments) discussing a proposal to reduce the daily free quota from 1,000 to 100 requests and phase out the free tier entirely. This reflects growing tensions around API compute costs.
2. **[#3307 [CLOSED] Alibaba Cloud Coding Plan "Out of Stock"](https://github.com/QwenLM/qwen-code/issues/3307)**: Users are expressing frustration over the inability to purchase Qwen 3.6 Plus access via Alibaba Cloud due to persistent inventory restocking messages.
3. **[#3805 [OPEN] Read/Glob tools fail in long-running sessions](https://github.com/QwenLM/qwen-code/issues/3805)**: A critical bug where tools return empty content after prolonged session usage, likely tied to the newly introduced `FileReadCache` history rewriting.
4. **[#3803 [OPEN] Daemon mode (`qwen serve`) proposal](https://github.com/QwenLM/qwen-code/issues/3803)**: A major architectural proposal to introduce a persistent daemon mode, outlining open decisions for implementation.
5. **[#3634 [OPEN] Background task management: roadmap](https://github.com/QwenLM/qwen-code/issues/3634)**: The master tracking issue for background tasks, currently tracking merged Phase A/B features and upcoming phases.
6. **[#3806 [OPEN] UI output flickering in v0.15.6](https://github.com/QwenLM/qwen-code/issues/3806)**: A regression in the latest version causing the interface to flicker during streaming output.
7. **[#3804 [OPEN] `AskUserQuestion` throws empty stream errors](https://github.com/QwenLM/qwen-code/issues/3804)**: Users hitting frequent "Model stream ended with empty response text" errors during interactive prompts in v0.15.6.
8. **[#3817 [OPEN] Race condition in MCP process creation](https://github.com/QwenLM/qwen-code/issues/3817)**: Highlights a concurrency issue in `McpClientManager` that spawns duplicate MCP processes during reinitialization.
9. **[#3816 [OPEN] `/memory show` command broken](https://github.com/QwenLM/qwen-code/issues/3816)**: A UI bug preventing the popular `/memory show` command from rendering its output correctly.
10. **[#3802 [OPEN] LM Studio JIT loading blocked by `/model` pre-flight](https://github.com/QwenLM/qwen-code/issues/3802)**: Switching to local LM Studio models fails because Qwen's pre-flight checks falsely detect models as "unloaded" before Just-In-Time loading completes.

## 4. Key PR Progress
1. **[#3810 fix(core): clear FileReadCache on history rewrite](https://github.com/QwenLM/qwen-code/pull/3810)**: Directly fixes the critical #3805 issue by ensuring the read cache is correctly invalidated during conversation history rewrites.
2. **[#3815 fix(core): use per-model settings for fast model side queries](https://github.com/QwenLM/qwen-code/pull/3815)**: Resolves a config leaking bug where main model parameters (like `reasoning` and `extra_body`) bled into fast model requests.
3. **[#3798 feat(core): classify retryable vs deterministic errors](https://github.com/QwenLM/qwen-code/pull/3798)**: Introduces `classifyError()` to prevent retrying deterministic errors (400, 401, 404) while ensuring transient and server errors are handled gracefully.
4. **[#3604 feat(skills): parallelize loading + path-conditional activation](https://github.com/QwenLM/qwen-code/pull/3604)**: Replaces nested loops with `Promise.all` to speed up cold-start times for the `SkillManager`.
5. **[#3809 feat(core): hint to background long-running bash commands](https://github.com/QwenLM/zwen-code/pull/3809)**: Enhances UX by suggesting the user run commands with `is_background: true` if a foreground shell execution exceeds 60 seconds.
6. **[#3774 feat(core): enforce prior read before Edit/WriteFile](https://github.com/QwenLM/zwen-code/pull/3774)**: Leverages the new FileReadCache to enforce that the LLM has actually "seen" a file before allowing it to mutate the code.
7. **[#3814 fix(core): prevent auto-memory recall from blocking requests](https://github.com/QwenLM/zwen-code/pull/3814)**: Reduces a 5-second delay on every user turn caused by an aggressive timeout in the auto-memory recall feature.
8. **[#3797 feat(cli): add /model list subcommand](https://github.com/QwenLM/zwen-code/pull/3797)**: Adds a scriptable `/model list` command to dynamically query available models from OpenAI-compatible endpoints.
9. **[#3800 feat(core): support reasoning effort 'max' tier](https://github.com/QwenLM/zwen-code/pull/3800)**: Plumbs DeepSeek's new `max` reasoning effort tier through the Qwen Code configuration.
10. **[#3813 fix(telemetry): add bounded shutdown timeout](https://github.com/QwenLM/zwen-code/pull/3813)**: Prevents the CLI from hanging indefinitely on exit if the telemetry endpoint is unreachable by adding a 10-second failsafe.

## 5. Feature Request Trends
- **Daemon / Background Processing**: A massive ongoing push for persistent headless execution (`qwen serve`) and complex background task management, reflecting enterprise/power-user needs for long-running CI/CD agents.
- **Local Model Compatibility**: High demand for seamless integration with local providers (LM Studio, Ollama). Users are requesting better JIT model loading support and standardized parsing of `/models` endpoints.
- **CLI Non-Interactive Enhancements**: Continuous requests to make CLI parameters scriptable, such as dynamically switching models via flags without entering the interactive UI.
- **Rich Media Support**: Emerging interest in expanding chat capabilities, notably WeChat image CDN uploads, pushing the tool beyond simple text generation.

## 6. Developer Pain Points
- **API Access & Quotas**: The community remains highly vocal about the instability and restrictions of cloud access. The "out of stock" errors on the Alibaba Cloud Coding Plan and looming reductions in the free tier are causing friction for hobbyists and open-source developers.
- **Telemetry and Startup Latency**: Persistent delays on startup and exit, particularly with auto-memory recall blocking requests and telemetry shutdown hanging, are degrading the interactive CLI experience.
- **Regressions in Tooling**: The introduction of caching mechanisms in v0.15.6 has caused frustrating regressions, notably the UI flickering and tools failing to return content in long-lived sessions.

</details>