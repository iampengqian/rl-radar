# AI CLI Tools Community Digest 2026-04-17

> Generated: 2026-04-16 22:11 UTC | Tools covered: 7

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

# AI Developer Tools Ecosystem Report — 2026-04-17

## 1. Ecosystem Overview
The AI CLI tooling landscape is currently characterized by rapid iteration and intense competition, with major players racing to support advanced reasoning models and multi-agent architectures. As models like Opus 4.7 and GPT-5.4 roll out, CLI maintainers are struggling to keep provider abstraction layers compatible with new parameters (e.g., adaptive thinking, shifting effort levels). Simultaneously, the shift from interactive chat to autonomous, background execution is exposing significant gaps in rate limiting, token consumption management, and platform stability, putting immediate pressure on vendor infrastructure and community trust.

## 2. Activity Comparison
| Tool | New Issues (24h) | Notable PRs/Activity (24h) | Release Status | Primary Focus Today |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10+ (Several high-volume) | 7 tracked | **v2.1.111 & v2.1.112** (Hotfix) | Opus 4.7 launch; critical Cowork multi-agent regression. |
| **OpenAI Codex** | 10 tracked | 10 tracked | **rust-v0.122.0-alpha.3** | "Goal Mode" for autonomous agents; Linux sandbox regressions. |
| **Gemini CLI** | 10 tracked | 10 tracked | **None** | API capacity (429 errors); TUI rendering bugs; AST-aware mapping. |
| **GitHub Copilot CLI** | 10 tracked | 0 tracked | **v1.0.28 – v1.0.31** (4 releases) | UI rendering fixes; severe community backlash over weekly rate limits. |
| **Kimi Code CLI** | 6 tracked | 5 tracked | **None** | Missing "thinking" process UI; default agent step limits increased. |
| **Qwen Code** | 10 tracked | 10 tracked | **v0.14.5-nightly** | Turmoil over sudden OAuth free-tier reduction; 401 auth errors. |
| **OpenCode** | 10 tracked | 10 tracked | **v1.4.7** (Hotfix) | Reasoning model parameter mapping; persistent memory leaks/crashes. |

## 3. Shared Feature Directions

*   **Adaptive Reasoning Model Support (Claude Code, GitHub Copilot CLI, OpenCode, Kimi Code CLI):** The release of Opus 4.7 and GPT-5.4 has broken hardcoded parameter schemas across the ecosystem. Tools are scrambling to dynamically support `xhigh` effort levels, adaptive thinking types, and dropping deprecated `max_tokens` parameters to prevent API errors.
*   **Autonomous & Multi-Agent Architectures (Claude Code, OpenAI Codex, Qwen Code, Kimi Code CLI):** The industry is pivoting from single-turn coding assistants to autonomous workers. Claude Code's "Cowork", Codex's "Goal Mode", and Qwen's "Agent Team" parallel execution highlight a massive push toward background delegation, requiring complex thread management and state handling.
*   **Terminal UI & Session Stability (Gemini CLI, GitHub Copilot CLI, Qwen Code, OpenCode):** Cross-platform terminal rendering remains a massive pain point. Broken paste functionality (Gemini, Copilot), broken multi-line inputs (`Shift+Enter`), scrambled SSH displays, and lost keystrokes during initialization are actively degrading the developer experience across multiple tools.
*   **Sandboxing & Permission False Positives (OpenAI Codex, Gemini CLI, Kimi Code CLI, OpenCode):** As tools enforce stricter security boundaries, overly aggressive sandboxing (e.g., Linux Landlock, macOS Seatbelt) is repeatedly blocking legitimate workspace edits, causing repetitive approval loops and forcing users into `--yolo` or unsafe modes.

## 4. Differentiation Analysis

*   **Enterprise vs. Consumer Focus:** **OpenAI Codex** and **GitHub Copilot CLI** are heavily focused on enterprise guardrails, security ACLs, and remote development workflows. Conversely, **Qwen Code** and **Gemini CLI** are navigating consumer/developer capacity limits, dealing directly with API 429s and free-tier quota management.
*   **Open-Source Extensibility vs. Closed Ecosystems:** **OpenCode** distinguishes itself by prioritizing a highly extensible provider model (Databricks, Cloudflare, Ollama) and rich plugin architectures (MCP, LSP integration). **Claude Code** and **Copilot CLI** are more closed, focusing on deep integration with their proprietary desktop apps and host models.
*   **Architectural Depth:** **OpenAI Codex** is uniquely rebuilding its foundational layers (e.g., `ThreadStore`, `Goal Mode` runtime, executor-backed MCP), treating the CLI as a robust autonomous runtime. **Qwen Code** is heavily focused on the finer details of CLI responsiveness, such as API preconnect warming, localized i18n command caching, and keystroke buffering.

## 5. Community Momentum & Maturity

*   **High Velocity / High Friction (Claude Code, GitHub Copilot CLI, Qwen Code):** These communities are shipping rapidly but facing severe backlash. Claude Code's silent removal of `/buddy` and Copilot's sudden weekly rate limits have generated hundreds of frustrated comments. Qwen Code is experiencing the highest volatility due to a sudden 90% cut in its free tier, sparking abusive issue threads.
*   **Deep Architecture Phase (OpenAI Codex, OpenCode):** Both projects show mature, systematic engineering efforts. Codex is merging foundational runtime PRs for autonomous agents, while OpenCode's community is actively contributing specialized provider integrations and deep diagnostics (e.g., OpenTelemetry, heap snapshots for memory leaks).
*   **Platform Catch-up (Gemini CLI, Kimi Code CLI):** These tools are iterating quickly to match market standards. Kimi Code is rapidly adjusting defaults (raising step limits to 500) to match competitor capabilities, while Gemini CLI is heavily focused on resolving fundamental TUI bugs and capacity constraints.

## 6. Trend Signals (Strategic Takeaways)

1.  **Reasoning Models Outpacing Provider Abstractions:** The transition to reasoning models (GPT-5.x, Opus 4.7) is breaking tools globally. *Takeaway for developers:* Avoid hardcoding model capabilities; build dynamic negotiation layers for parameters like `thinking.type` and reasoning effort.
2.  **Token Economics & Rate Limiting are the New Bottlenecks:** As agentic workflows execute multi-step background tasks, token consumption has skyrocketed. Users are burning through quotas via failed executions. *Takeaway for developers:* Autonomous agents must implement predictive token budgeting and graceful degradation before hitting hard limits.
3.  **The Rise of the Agentic Runtime:** The CLI is no longer just a chat interface; it is becoming an operating system for AI agents (Codex Goal Mode, Claude Cowork). *Takeaway for developers:* Invest heavily in robust thread state management, safe sandboxing, and inter-process communication to support long-running, autonomous tasks.
4.  **Transparency is Critical for Trust:** Communities are reacting violently to silent feature removals (Claude Code's `/buddy`) and sudden policy changes (Qwen's free tier). *Takeaway for developers:* Deprecation policies and clear changelogs are mandatory to maintain community goodwill in highly competitive open-source markets.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-04-17 | Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking — Most-Discussed Pull Requests

| Rank | Skill / PR | Author | Core Functionality | Status |
|:---:|---|---|---|:---:|
| 1 | [**document-typography** (#514)](https://github.com/anthropics/skills/pull/514) | PGTBoos | Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents — a universal quality-control layer. | 🟢 Open |
| 2 | [**skill-quality-analyzer + skill-security-analyzer** (#83)](https://github.com/anthropics/skills/pull/83) | eovideu | Meta-skills for the marketplace: one grades any Skill across five quality dimensions (20% each); the other scans for security anti-patterns. | 🟢 Open |
| 3 | [**frontend-design (revision)** (#210)](https://github.com/anthropics/skills/pull/210) | justinwetch | Rewrites the existing frontend-design Skill for higher actionability — every instruction must be followable in a single conversation turn. | 🟢 Open |
| 4 | [**ODT — OpenDocument creation & conversion** (#486)](https://github.com/anthropics/skills/pull/486) | GitHubNewbie0 | Create, fill, read, and convert `.odt`/`.ods` files; bridges Claude into the LibreOffice / ISO-26300 ecosystem. | 🟢 Open |
| 5 | [**DOCX tracked-change collision fix** (#541)](https://github.com/anthropics/skills/pull/541) | Lubrsy706 | Fixes document corruption when the DOCX skill adds tracked changes — the shared `w:id` namespace in OOXML was colliding with bookmarks. | 🟢 Open |
| 6 | [**codebase-inventory-audit** (#147)](https://github.com/anthropics/skills/pull/147) | p19dixon | Ten-step workflow that scans for orphaned code, unused files, and doc gaps, outputting a single `CODEBASE-STATUS.md` source of truth. | 🟢 Open |
| 7 | [**sensory — macOS automation via AppleScript** (#806)](https://github.com/anthropics/skills/pull/806) | AdelElo13 | Two-tier AppleScript skill replacing screenshot-based computer use: direct app scripting (no setup) and System Events UI automation (requires Accessibility permission). | 🟢 Open |
| 8 | [**testing-patterns** (#723)](https://github.com/anthropics/skills/pull/723) | 4444J99 | Full-stack testing guide: Testing Trophy philosophy, AAA unit-test pattern, React Testing Library, integration patterns, and what *not* to test. | 🟢 Open |

> **Discussion highlights:** The longest-open PRs (#83, #147) have drawn sustained community interest in meta-tooling and codebase hygiene. Document-formatting Skills (#514, #541) cluster together, reflecting how critical output quality is to daily Claude Code workflows. The `skill-quality-analyzer` proposal foreshadows a future "Skill marketplace" with automated quality gates.

---

## 2. Community Demand Trends — Signals from Issues

| Theme | Representative Issue | Signal |
|---|---|---|
| **Plugin architecture & MCP exposure** | [#16 — Expose Skills as MCPs](https://github.com/anthropics/skills/issues/16) | Users want Skills auto-discoverable as Model Context Protocol tools with typed schemas. |
| **Org-wide skill sharing** | [#228 — Enable org-wide skill sharing](https://github.com/anthropics/skills/issues/228) | 5 👍 — Teams need a shared library, not file-over-Slack sharing. Strong enterprise demand. |
| **Namespace trust & security boundaries** | [#492 — Trust boundary abuse](https://github.com/anthropics/skills/issues/492) | Community skills impersonating the `anthropic/` namespace; calls for signed/verified skill provenance. |
| **Duplicate skills & packaging** | [#189 — Duplicate skills across plugins](https://github.com/anthropics/skills/issues/189) | 7 👍 — `document-skills` and `example-skills` bundles overlap, wasting context-window tokens. |
| **Skill-creator quality & validation** | [#202 — skill-creator best practice](https://github.com/anthropics/skills/issues/202), [#36 — frontmatter validation](https://github.com/anthropics/skills/pull/36) | Multiple issues/PRs target the tooling that *builds* Skills; YAML parsing, UTF-8 safety, and description hygiene are recurring pain points. |
| **Reliability: 0% trigger rate** | [#556 — `claude -p` never triggers skills](https://github.com/anthropics/skills/issues/556) | 6 👍 — The evaluation harness fails to invoke any skill, suggesting a fundamental activation-path bug. |
| **Upload / delete API failures** | [#406 — Internal server error on upload](https://github.com/anthropics/skills/issues/406), [#403 — 500 on delete](https://github.com/anthropics/skills/issues/403) | Platform reliability issues are blocking daily skill management workflows. |
| **AWS Bedrock compatibility** | [#29 — Usage with Bedrock](https://github.com/anthropics/skills/issues/29) | Enterprise users on Bedrock/SSO cannot use Skills at all; no API-key-less path exists. |

**Emerging demand vectors:** (1) **Agent governance & safety** — proposed in [#412](https://github.com/anthropics/skills/issues/412), no Skill yet exists. (2) **Persistent memory / knowledge across sessions** — echoed by [#521 record-knowledge](https://github.com/anthropics/skills/pull/521) and [#154 shodh-memory](https://github.com/anthropics/skills/pull/154). (3) **Multi-format document generation** — ODT, DOCX, PDF fixes, and typography all cluster around professional document output.

---

## 3. High-Potential Pending Skills — Active PRs Close to Landing

| PR | Why It's Likely to Merge Soon |
|---|---|
| [**#541** — DOCX tracked-change `w:id` collision fix](https://github.com/anthropics/skills/pull/541) | Narrow, well-scoped bug fix with clear root-cause analysis; directly addresses document corruption. |
| [**#539** — skill-creator YAML validation](https://github.com/anthropics/skills/pull/539) | Addresses the #202 meta-issue; pre-parse check for unquoted YAML descriptions with special characters. |
| [**#538** — PDF case-sensitive file references](https://github.com/anthropics/skills/pull/538) | Pure path-fix (8 corrections); breaks on Linux CI. Low-risk, high-impact. |
| [**#509** — CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509) | Closes [#452](https://github.com/anthropics/skills/issues/452); raises community health score from 25%. Pure docs. |
| [**#362** — UTF-8 panic fix](https://github.com/anthropics/skills/pull/363) | Resolves Rust panics on multi-byte CJK/emoji characters in skill descriptions; byte-aware truncation. |
| [**#521** — record-knowledge](https://github.com/anthropics/skills/pull/521) | Persistent cross-session memory stored as tagged Markdown in `.claude/knowledge/`; addresses a top user pain point. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for reliable, high-quality document generation (DOCX/ODT/PDF) and the meta-tooling (validation, quality analysis, security scanning) needed to make the emerging Skill marketplace trustworthy at scale.**

---

# Claude Code Community Digest — 2026-04-17

## 1. Today's Highlights

Claude Code shipped **v2.1.111** and a hotfix **v2.1.112** within 24 hours, introducing **Claude Opus 4.7** with a new `xhigh` effort level and auto-mode support for Max subscribers. However, the day was dominated by a massive **Cowork regression** — a "Failed to create bridge sockets" error that rendered the multi-agent Cowork feature completely unusable across macOS and Windows after the Claude Desktop 1.3036.0 update, spawning over a dozen duplicate issues.

---

## 2. Releases

### [v2.1.111](https://github.com/anthropics/claude-code/releases/tag/v2.1.111)
- **Claude Opus 4.7** launched with `xhigh` effort level (between `high` and `max`), accessible via `/effort`, `--effort`, and direct model selection.
- **Auto mode** now available for Max subscribers using Opus 4.7.

### [v2.1.112](https://github.com/anthropics/claude-code/releases/tag/v2.1.112)
- Hotfix: resolved `"claude-opus-4-7 is temporarily unavailable"` error in auto mode.

---

## 3. Hot Issues

1. **[#42796](https://github.com/anthropics/claude-code/issues/42796)** — *[CLOSED] Model quality regression since Feb updates* — 504 comments, 1914 👍. The highest-engagement issue in the tracker. Community reports that Claude Code is "unusable for complex engineering tasks" post-Feb model updates. Despite being closed, it remains the canonical reference point for model quality concerns.

2. **[#45596](https://github.com/anthropics/claude-code/issues/45596)** — *[OPEN] Bring Back Buddy* — 185 comments, 805 👍. A consolidated community plea to restore the `/buddy` skill removed silently in v2.1.97. Strong emotional resonance; thousands of developers report a degraded workflow without it.

3. **[#49360](https://github.com/anthropics/claude-code/issues/49360)** — *[CLOSED] Cowork crashes since v1.3036.0* — 18 comments, 18 👍. The primary tracker for the Cowork regression on macOS. App crashes immediately after the Desktop update, blocking all multi-agent workflows.

4. **[#49341](https://github.com/anthropics/claude-code/issues/49341)** — *[CLOSED] Cowork "Failed to create bridge sockets" on macOS 26.4* — 11 comments. Task/agent mode fails on macOS 26.4 with every VM spawn exiting code 1. Regular chat works; failure is agent-mode specific.

5. **[#49322](https://github.com/anthropics/claude-code/issues/49322)** — *[OPEN] Opus 4.7 thinking summaries not rendered in VS Code* — 8 comments. The new Opus 4.7 extended thinking summaries display correctly in the terminal but break in the VS Code extension, degrading the IDE experience on day one.

6. **[#49461](https://github.com/anthropics/claude-code/issues/49461)** — *[OPEN] Cowork bridge sockets failure after VM auto-update to 2.1.111* — 3 comments. Confirms the Cowork regression is tied to the VM binary auto-update, not the desktop app version itself.

7. **[#48827](https://github.com/anthropics/claude-code/issues/48827)** — *[OPEN] Cowork downloads Linux binary on Intel Mac* — 7 comments. The VM binary is an ELF 64-bit Linux executable instead of macOS, causing SIGILL (exit code 132). Indicates a platform detection bug in the Cowork binary distribution.

8. **[#43454](https://github.com/anthropics/claude-code/issues/43454)** — *[OPEN] apply-seccomp fails on Linux* — 10 comments, 13 👍. Seccomp sandbox can't write `/proc/self/setgroups`, a regression blocking Linux users with certain kernel configurations.

9. **[#44354](https://github.com/anthropics/claude-code/issues/44354)** — *[OPEN] Agent SDK auto-compact broken on resumed sessions* — 3 comments. Reactive compaction handler is null when resuming sessions, causing "Prompt is too long" crashes. Directly impacts long-running agent workflows.

10. **[#36024](https://github.com/anthropics/claude-code/issues/36024)** — *[OPEN] Support multiple Gmail accounts in MCP integration* — 10 comments, 28 👍. A practical feature gap: the Gmail MCP integration only supports one account, blocking users with personal + work email setups.

---

## 4. Key PR Progress

1. **[#40322](https://github.com/anthropics/claude-code/pull/40322)** — *Enhance devcontainer firewall with hybrid static/dynamic IP management* ([OPEN](https://github.com/anthropics/claude-code/pull/40322)). Supersedes #5609 with fixes for sudo env stripping, missing crontab, and broken heredocs. Renames `WHITELIST_DOMAINS` to `EXTRA_DOMAINS`.

2. **[#48335](https://github.com/anthropics/claude-code/pull/48335)** — *Fix hookify: support Write content for new_text rules* ([OPEN](https://github.com/anthropics/claude-code/pull/48335)). Makes `new_text` rules read `content` from Write tool payloads in addition to `new_string` from Edit payloads. Closes #48284.

3. **[#48905](https://github.com/anthropics/claude-code/pull/48905)** — *Perf: run commit-commands with haiku* ([CLOSED](https://github.com/anthropics/claude-code/pull/48905)). Performance optimization to use Haiku for commit command execution, reducing cost and latency for git operations.

4. **[#49230](https://github.com/anthropics/claude-code/pull/49230)** — *Format description and examples in conversation-analyzer.md* ([OPEN](https://github.com/anthropics/claude-code/pull/49230)). Documentation formatting cleanup for the conversation analyzer plugin.

5. **[#39148](https://github.com/anthropics/claude-code/pull/39148)** — *Add preserve-session plugin for path-independent session history* ([OPEN](https://github.com/anthropics/claude-code/pull/39148)). Assigns UUIDs to projects so session history survives directory renames and moves. Includes video demo.

6. **[#1](https://github.com/anthropics/claude-code/pull/1)** — *Create SECURITY.md* ([CLOSED](https://github.com/anthropics/claude-code/pull/1)). The repo's foundational security policy document, originally created Feb 2025, still seeing activity.

7. **[#45721](https://github.com/anthropics/claude-code/pull/45721)** — *Add Claude Mythos operating contract for Veriflow immune system* ([CLOSED](https://github.com/anthropics/claude-code/pull/45721)). Community-submitted PR (self-described as "Idk what I'm doing") — appropriately closed as off-topic.

---

## 5. Feature Request Trends

- **Restore `/buddy` skill** (#45596, 805 👍): The strongest community signal right now. Users want the interactive companion/mentor skill back, citing deep workflow integration and productivity loss.
- **Multi-account MCP support** (#36024): Multiple Gmail/Workspace accounts is a recurring ask as MCP adoption grows beyond single-user scenarios.
- **Assistant text output hooks** (#37243): Developers want `PreResponse`/`PostResponse` hooks to enforce behavioral rules on assistant text, extending the current tool-only hook system.
- **Desktop restart option** (#49161): A quality-of-life request for an in-app restart button to pick up config changes without manual quit/relaunch.
- **Path-independent session history** (#39148 PR): Preserving sessions across directory moves/renames — a practical pain point for developers who reorganize projects frequently.

---

## 6. Developer Pain Points

- **Cowork instability is critical**: The v1.3036.0 Desktop update introduced a regression that completely breaks Cowork/Dispatch across all platforms. Over 10 duplicate issues were filed in 24 hours, all with the same "Failed to create bridge sockets" error. This is the top operational blocker today.
- **Model quality confidence remains shaken**: Issue #42796 (1914 👍) is the most-endorsed issue in the repo's history. Despite being closed, developers continue referencing it as evidence that post-Feb model behavior is unreliable for complex engineering tasks.
- **Long context session management is fragile**: Auto-compact failures on resumed sessions (#44354, #36751) and "Prompt is too long" errors without graceful recovery (#23377, #49552) indicate that the 1M context window features still lack robustness for sustained multi-turn workflows.
- **Platform-specific binary distribution bugs**: The Cowork VM downloading Linux binaries on Intel Mac (#48827) and ARM64 OAuth failures (#47703) suggest gaps in platform detection and binary packaging for the VM subsystem.
- **Silent feature removals erode trust**: The `/buddy` removal (#45596) without changelog mention or migration path has generated significant community friction, highlighting a desire for transparent deprecation policies.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-17

## 1. Today's Highlights
The Codex team is heavily investing in internal architecture, merging the foundational pieces of a new **"Goal Mode"** for autonomous agents and overhauling thread management via a new `ThreadStore` interface. Security and platform parity also took center stage, with new filesystem deny-read policies landing for Windows and fixes targeting Linux sandbox regressions. On the community side, token-burn rate limits and Windows desktop app stability continue to dominate user complaints.

## 2. Releases
*   **rust-v0.122.0-alpha.3**: The latest alpha release was published, laying the groundwork for upcoming CLI and app-server architectural changes. ([Release Notes](https://github.com/openai/codex/releases))

## 3. Hot Issues
1.  **[#14593] [bug, rate-limits] Burning tokens very fast:** A highly upvoted (👍 225) and heavily commented (547) issue where Business tier users report token consumption happening far too quickly, severely limiting usage. ([Link](https://github.com/openai/codex/issues/14593))
2.  **[#10450] [enhancement, app] Remote Development Support:** With 553 upvotes and 133 comments, this remains a top request for the Codex Desktop App to support SSH/Remote development workflows similar to native VS Code. ([Link](https://github.com/openai/codex/issues/10450))
3.  **[#2109] [enhancement, hooks] Event Hooks:** A massive community push (👍 526) requesting pattern-matching event hooks to trigger custom scripts before or after Codex behaviors. ([Link](https://github.com/openai/codex/issues/2109))
4.  **[#17525] [bug, sandbox, regression] Ubuntu sandbox edit regression:** A critical regression (0.120.0+) where standard workspace edits on Ubuntu trigger continuous sandbox skip prompts, severely disrupting Linux workflows. ([Link](https://github.com/openai/codex/issues/17525))
5.  **[#18069] [bug, sandbox, tool-calls] `apply_patch` fails with legacy landlock:** Users running `v0.121.0` with `use_legacy_landlock=true` are experiencing failing workspace edits, forcing manual sandbox retries. ([Link](https://github.com/openai/codex/issues/18069))
6.  **[#18194] [bug, code-review, rate-limits] Review error eats up 5hr limit:** A frustrating new bug where CLI code-review errors consume the user's 5-hour usage limit, even when the feature fails to execute properly. ([Link](https://github.com/openai/codex/issues/18194))
7.  **[#17322] [bug, windows-os, app] Windows App fails to exit & UI hit-testing issue:** The Windows desktop app doesn't fully close when the 'X' button is clicked, leaving processes running in the background. ([Link](https://github.com/openai/codex/issues/17322))
8.  **[#17649] [bug, extension, regression] VS Code file links broken:** A recent regression in the VS Code extension where local file references in the chat window are completely unclickable. ([Link](https://github.com/openai/codex/issues/17649))
9.  **[#11325] [enhancement, app] Manual `/compact` command:** Users are requesting a manual `/compact` command for the Desktop App to manually manage context window bloat, a feature currently limited to the CLI. ([Link](https://github.com/openai/codex/issues/11325))
10. **[#18175] [bug, extension, subagent] Subagent UI "Open" button not working:** In the latest VS Code extension, the UI button meant to open subagent workspaces fails to respond. ([Link](https://github.com/openai/codex/issues/18175))

## 4. Key PR Progress
1.  **[#18076] Add goal mode core runtime (4 / 5):** Implements the core runtime behavior for active goals, including token accounting, budget stopping, and interrupt handling for autonomous agent continuations. ([Link](https://github.com/openai/codex/pull/18076))
2.  **[#18202] feat(sandbox): add Windows deny-read parity:** Brings Windows subprocess enforcement up to par with Linux by resolving filesystem `access = none` policies into concrete Windows ACL targets. ([Link](https://github.com/openai/codex/pull/18202))
3.  **[#18009] route thread reads through thread store:** Refactors the app-server to route `thread_read` and `get_thread_summary` through a new `ThreadStore` interface to better handle live sessions vs. database storage. ([Link](https://github.com/openai/codex/pull/18009))
4.  **[#18212] Wire executor-backed MCP stdio:** Introduces an executor-backed RMCP standard I/O transport, allowing MCP stdio placement to be configured securely through the executor environment. ([Link](https://github.com/openai/codex/pull/18212))
5.  **[#18190] Add `/side` conversations:** Adds a highly anticipated `/side` flow to the TUI, allowing users to ask ephemeral side-questions without interrupting the main agent's context or thread. ([Link](https://github.com/openai/codex/pull/18190))
6.  **[#18213] Add skill metadata budget handling:** Prevents skill metadata from flooding the context window by capping it at 1% of the total context, with an 8,000-character fallback limit. ([Link](https://github.com/openai/codex/pull/18213))
7.  **[#17734] Reserve missing top level `.git` at runtime:** Fixes a Linux bubblewrap sandbox escape vector where writable workspaces without an initial `.git` folder could execute unauthorized `git init` commands. ([Link](https://github.com/openai/codex/pull/17734))
8.  **[#17273] feat: use scoped remote control server tokens:** Enhances remote control security by consuming short-lived, server-scoped tokens returned by backend enrollment. ([Link](https://github.com/openai/codex/pull/17273))
9.  **[#18197] feat: add guardian network approval trigger context:** Improves safety oversight by passing full command context (tool call ID, argv, sandbox permissions) to human guardians during network access approvals. ([Link](https://github.com/openai/codex/pull/18197))
10. **[#18205] Try Windows Bazel cross-remote builds:** An experimental CI update testing Windows Bazel build actions sent to a Linux BuildBuddy RBE to optimize Windows testing pipelines. ([Link](https://github.com/openai/codex/pull/18205))

## 5. Feature Request Trends
*   **Local-First AI & Autonomous Agents:** Users want deeper CLI/App unification. Requests like manual `/compact` controls (#11325), strictly read-only orchestrator/delegation modes (#18105), and skill-driven delegation to custom project agents (#18193) point to a trend of users treating Codex as a hands-off autonomous worker rather than just a chat assistant.
*   **Desktop App Parity & Quality of Life:** There is a strong demand for missing basic desktop features, including thread deletion (#13018) and the ability to move workspace folders without losing thread history (#15347).
*   **Rich Media Integration:** Support for image generation directly within agent flows (#8758) remains a popular request as developers increasingly build full-stack and UI-heavy applications using Codex.

## 6. Developer Pain Points
*   **Aggressive Token Consumption & Limits:** The most glaring pain point across the community right now (#14593, #18194) is token/usage limits being drained rapidly by background operations, or entirely consumed by failed executions and errors before the user gets a successful result.
*   **Fragile Linux Sandboxing:** Recent CLI updates have caused significant friction for Linux users, specifically regarding overly aggressive sandboxing. Normal workspace edits are breaking under Landlock (#18069) and forcing users to skip the sandbox entirely to do basic work (#17525).
*   **Windows App Instability:** The Windows Desktop App continues to suffer from core usability bugs, ranging from failure to exit background processes (#17322) to entirely broken integration states when using WSL (#14461, #13565).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for 2026-04-17.

### 1. Today's Highlights
Activity remains high in the Gemini CLI repository with no new official releases released today, but significant upstream progress in sandbox management, performance optimizations, and new model support. The community and maintainers are heavily focused on resolving stubborn startup/session bugs and addressing ongoing platform capacity limits. Meanwhile, several architectural proposals regarding AST-aware code mapping and intelligent memory routing continue to drive the long-term roadmap.

### 2. Releases
There were **no new releases** published in the last 24 hours.

### 3. Hot Issues
*   **[OPEN] [Tracking: 429 / Capacity Issues](https://github.com/google-gemini/gemini-cli/issues/24937):** 
    A major tracking issue accumulating user reports of `429 Too Many Requests` errors. The community is actively discussing better handling and retry logic on the client side to mitigate API capacity limits.
*   **[OPEN] [Failing to download RipGrep should not permanently slow down Gemini CLI startup](https://github.com/google-gemini/gemini-cli/issues/25323):** 
    Users are experiencing 2+ minute startup delays if RipGrep fails to download (e.g., due to corporate firewalls blocking GitHub). Maintainers are exploring fail-fast mechanisms and potentially bundling the binary.
*   **[OPEN] [Pasting broken in version 0.36.0+](https://github.com/google-gemini/gemini-cli/issues/25561):** 
    A regression introduced in v0.36.0 broke text pasting (`Ctrl+V` / Right-click). Users report having to downgrade to v0.35.0 to restore normal clipboard functionality.
*   **[OPEN] [Shell command execution gets stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166):** 
    The CLI occasionally hangs after executing a shell command, incorrectly showing "Awaiting user input" even after the process finishes. 
*   **[OPEN] [Gemini cli keeps asking for permissions on the same file](https://github.com/google-gemini/gemini-cli/issues/24916):** 
    A persistent authorization loop where the CLI ignores the "allow for all future sessions" instruction, severely disrupting developer workflow.
*   **[OPEN] [Assess the impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745):** 
    A highly discussed architectural Epic (👍 1) investigating whether AST-aware tools can reduce token noise and misaligned reads, vastly improving coding agent accuracy.
*   **[OPEN] [Implement memory routing: global vs. project](https://github.com/google-gemini/gemini-cli/issues/22819):** 
    An important RFC defining how the agent's memory subagent should route data—storing user preferences globally (`~/.gemini/`) while keeping codebase facts local (`.gemini/`).
*   **[OPEN] [Running SSH the text is scrambled](https://github.com/google-gemini/gemini-cli/issues/24202):** 
    Terminal rendering breaks completely for users running the CLI over SSH from Windows to Linux, highlighting cross-platform TUI challenges.
*   **[OPEN] [Subagents Awareness of Active Approval Modes](https://github.com/google-gemini/gemini-cli/issues/23582):** 
    Subagents currently lack context regarding whether they are in Plan Mode or Auto-Edit Mode, causing conflicting tool calls that the Policy Engine has to reject.
*   **[OPEN] [Gemini CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246):** 
    Tool scope limitations are causing `400 Bad Request` errors when the environment exposes too many tools, requiring better dynamic tool filtering.

### 4. Key PR Progress
*   **[OPEN] [feat: add support for Gemma 4 model](https://github.com/google-gemini/gemini-cli/pull/25560):** Introduces support for the upcoming `gemma-4-26b-a4b-it` model, making it selectable via the UI and ACP.
*   **[OPEN] [perf(core): skip model routing classification when redundant](https://github.com/google-gemini/gemini-cli/pull/25554):** Optimizes `ModelRouterService` to bypass model classification logic when Pro and Flash tiers resolve to the same model.
*   **[OPEN] [fix(cli): use newline in shell command wrapping to avoid breaking heredocs](https://github.com/google-gemini/gemini-cli/pull/25537):** Fixes a shell execution bug where appended semicolons corrupted `EOF` heredoc delimiters.
*   **[CLOSED] [fix(core): allow explicit write permissions to override governance file protections in sandboxes](https://github.com/google-gemini/gemini-cli/pull/25338):** Resolves a strict lockdown bug where read-only protections for `.git` directories blocked legitimate explicit write allowances.
*   **[OPEN] [security: improve dangerous command detection for rm](https://github.com/google-gemini/gemini-cli/pull/25545):** Upgrades `isDangerousCommand` to correctly catch path-qualified `rm` commands (e.g., `/bin/rm`) to prevent accidental mass deletions.
*   **[OPEN] [Allow dots on GEMINI_API_KEY](https://github.com/google-gemini/gemini-cli/pull/25497):** Updates the regex/validator to support new Service Account-bounded API keys that include periods.
*   **[OPEN] [feat: add priority setting to send priority requests to the API](https://github.com/google-gemini/gemini-cli/pull/25555):** Adds a `model.geminiApiPriority` setting allowing Tier 2/3 API users to bypass standard queue limits.
*   **[OPEN] [feat(sandbox): resolve custom seatbelt profiles from $HOME/.gemini first](https://github.com/google-gemini/gemini-cli/pull/25427):** Allows macOS users to define global custom Seatbelt profiles rather than duplicating them across workspaces.
*   **[OPEN] [feat(core): wire up the new ContextManager and AgentChatHistory](https://github.com/google-gemini/gemini-cli/pull/25409):** A major refactor hooking up updated context window management to handle long chats and histories better.
*   **[CLOSED] [fix(cli): reset plan session state on /clear](https://github.com/google-gemini/gemini-cli/pull/25515):** Fixes a bug where the `/clear` command failed to reset planning pointers, inadvertently mixing old context into new sessions.

### 5. Feature Request Trends
*   **Model Context & Memory Management:** High demand for smart memory persistence. Developers want the CLI to differentiate between global user preferences and project-specific instructions automatically.
*   **Robust Session/Checkpoint Workflows:** Users are requesting smoother transitions when resuming sessions, better branching, and easier ways to save and tag chat states.
*   **Smarter Tooling & Steering:** Significant interest in AST-aware tools to give the agent native code-navigation capabilities rather than relying solely on text-based search/grep.
*   **Customizable UX & Model Cycling:** Requests for the ability to favorite models, quickly cycle between them via shortcuts, and open `@` mentioned files directly in external editors from the CLI.

### 6. Developer Pain Points
*   **API Capacity & Rate Limits:** The sheer volume of comments on the `429` tracking issue highlights that developers are frequently blocked by upstream API capacity limits during standard working hours.
*   **Terminal UI/UX Glitches:** Cross-platform terminal rendering is a major frustration. Users dealing with true-color tmux environments, SSH sessions, or background UI elements are facing broken displays and scrambled text.
*   **Repetitive Approvals & Sandboxing:** The security sandbox and policy engine are creating false positives, forcing users to repeatedly approve the same file edits or use `--yolo` mode to bypass aggressive governance limits.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for 2026-04-17.

### 1. Today's Highlights
GitHub Copilot CLI released four back-to-back updates (v1.0.28 to v1.0.31) yesterday, focusing heavily on UI rendering fixes, terminal stability, and MCP/plugin configurations. While these updates resolve several persistent bugs—such as incorrect feedback URLs and prompt shifting during cursor blinks—the community's primary focus has shifted toward strict new weekly rate limits and missing model configuration options for GPT-5.4. 

### 2. Releases
Four new versions were released on 2026-04-16, introducing several quality-of-life improvements and terminal fixes:
*   **v1.0.31:** Resolved prompt frame rendering issues on Windows and Ubuntu terminals.
*   **v1.0.30:** Fixed the `/feedback` command to link to the correct repository, added explanatory messaging for `/undo` when outside a git repo, fixed `skills.discover` command discovery, and added a new `/statusline` command.
*   **v1.0.29:** Defaulted the remote MCP server config `type` field to HTTP, fixed blinking cursor width shifting, and introduced `--list-env` to log loaded plugins, agents, skills, and MCP servers.
*   **v1.0.28:** Fixed repository paths in permission prompts for git submodules, quieted redundant background agent notifications, and improved platform-specific documentation links for MCP migration.

### 3. Hot Issues
1.  **[OPEN] GPT-5.4 reasoning levels missing in UI** [(#2725)](https://github.com/github/copilot-cli/issues/2725): The model picker UI hides the "Extra High" (xhigh) effort level for GPT-5.4, even though it still functions if manually used. Frustrated users have accumulated 14 upvotes and 11 comments requesting a UI fix.
2.  **[OPEN] "xhigh" reasoning removed for GPT-5.4/GPT-5.3-codex** [(#2739)](https://github.com/github/copilot-cli/issues/2739): Users report the total removal of xhigh reasoning limits in v1.0.27+, severely impacting code generation quality. 
3.  **[OPEN] Very tight rate limits** [(#2756)](https://github.com/github/copilot-cli/issues/2756): Users are hitting secondary rate limits almost immediately (after 1-2 tool calls) upon continuing past the initial retry wait time.
4.  **[OPEN] Sudden "user_weekly_rate_limited" errors** [(#2741)](https://github.com/github/copilot-cli/issues/2741): A highly controversial bug where users are unexpectedly hitting newly implemented weekly rate limits. The community suspects this is a heavy-handed backend change rather than a bug.
5.  **[CLOSED] XDG_CONFIG_HOME violation** [(#1750)](https://github.com/github/copilot-cli/issues/1750): Resolved a standards compliance issue where the CLI created a dot-prefixed `.copilot` directory inside `XDG_CONFIG_HOME` (which violates XDG conventions).
6.  **[CLOSED] Broken paste functionality in PowerShell/CMD** [(#1733)](https://github.com/github/copilot-cli/issues/1733): Addressed an ongoing issue where right-click pasting inserted garbage strings into the Windows Copilot terminal.
7.  **[OPEN] Shift+Enter submits prompt instead of creating a new line** [(#2776)](https://github.com/github/copilot-cli/issues/2776): Standard terminal/multi-line input expectations are broken, leading to premature prompt submissions.
8.  **[CLOSED] Ugly prompt box UI bars in v1.0.30** [(#2771)](https://github.com/github/copilot-cli/issues/2771): Users complained about thick white status bars above and below the prompt box introduced in the recent update. 
9.  **[OPEN] CLI gets stuck on 'Cancelling'** [(#2770)](https://github.com/github/copilot-cli/issues/2770): When encountering server-side rate limits or hanging requests, the CLI gets permanently stuck in a cancelling state, requiring a hard restart.
10. **[OPEN] Agent name visibility removed** [(#2777)](https://github.com/github/copilot-cli/issues/2777): A regression in v1.0.31 where the active agent name is no longer displayed next to the model in the bottom-right corner of the UI.

### 4. Key PR Progress
*No Pull Requests (PRs) were updated in the last 24 hours. Development activity appears to have been entirely concentrated on rapid-fire releases (v1.0.28 to v1.0.31) pushed directly by the internal GitHub team.*

### 5. Feature Request Trends
*   **Better Plugin and Agent Control:** Users want more granular control over their environment, specifically the ability to toggle plugins enabled/disabled without uninstalling them [(#2714)](https://github.com/github/copilot-cli/issues/2714) and view detailed metadata when selecting agents [(#2382)](https://github.com/github/copilot-cli/issues/2382).
*   **Remote Session Enhancements:** A strong demand for better remote session support, including GitHub mobile notifications when tasks complete/need attention [(#2766)](https://github.com/github/copilot-cli/issues/2766) and live, real-time updates for remote sessions rather than requiring manual page refreshes [(#2765)](https://github.com/github/copilot-cli/issues/2765).
*   **Operating System Integrations:** Users are requesting OS-level QoL improvements, such as preventing Windows from going to sleep during long agent turns [(#2763)](https://github.com/github/copilot-cli/issues/2763) and displaying the local machine's hostname in the UI to prevent command execution on the wrong machine/SSH session [(#2774)](https://github.com/github/copilot-cli/issues/2774).

### 6. Developer Pain Points
*   **Aggressive/Low Rate Limits:** The most significant pain point across the community right now is the sudden and strict implementation of `user_weekly_rate_limit` and aggressive HTTP 429 handling. Pro+ subscribers are particularly frustrated by being locked out after only brief usage [(#2768)](https://github.com/github/copilot-cli/issues/2768), [(#2769)](https://github.com/github/copilot-cli/issues/2769), [(#2760)](https://github.com/github/copilot-cli/issues/2760).
*   **Broken Multi-line Editing:** The CLI's interruptive handling of keyboard inputs—specifically `Shift+Enter` triggering an immediate agent prompt instead of a line break—continues to break developer flow states [(#2776)](https://github.com/github/copilot-cli/issues/2776).
*   **Cross-Platform Rendering Quirks:** Terminal rendering inconsistencies remain a headache for users. Box-drawing characters render incorrectly in npm-based installations on certain terminals [(#2773)](https://github.com/github/copilot-cli/issues/2773), and agents attempt to execute Linux `.sh` files at the end of sessions on Windows environments [(#2767)](https://github.com/github/copilot-cli/issues/2767).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-17

## 1. Today's Highlights

No new releases were cut in the last 24 hours, but the project saw a flurry of merged infrastructure PRs—including a significant bump of the default `max_steps_per_turn` from 100 to 500 and a fix for the missing moon-spinner loading indicator. On the issue tracker, community frustration is mounting around the removal of the "thinking" process display in recent versions, and several open PRs are laying groundwork for broader model compatibility and session management improvements.

---

## 2. Releases

No new releases in the last 24 hours. The latest tracked versions in issues remain **v1.33.0** and **v1.34.0**.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|--------------------|
| 1 | [#1865 — Thinking process removed](https://github.com/MoonshotAI/kimi-cli/issues/1865) | Users report the chain-of-thought "thinking" display has disappeared, reducing trust in model outputs. | 11 comments, 3 👍—significant community concern. |
| 2 | [#1903 — Error code 400](https://github.com/MoonshotAI/kimi-cli/issues/1903) | Generic 400 errors from the LLM provider block usage on macOS with `kimi-for-coding`. | 4 comments; likely a provider-side regression or parameter mismatch. |
| 3 | [#1897 — Web UI hangs on MCP server failure](https://github.com/MoonshotAI/kimi-cli/issues/1897) | `MCPRuntimeError` crashes the backend worker while the frontend spins forever, creating a confusing UX. | 1 comment; highlights fragility in MCP connection handling. |
| 4 | [#1867 — `--yolo` should not auto-approve Plan Mode](https://github.com/MoonshotAI/kimi-cli/issues/1867) | Feature request to decouple tool-level auto-approval from plan-level review when using `--yolo`. | Thoughtful risk-tiering proposal with community resonance. |
| 5 | [#1910 — IntelliJ IDEA CLI unresponsive](https://github.com/MoonshotAI/kimi-cli/issues/1910) | CLI shows no output when launched from JetBrains IDEA on macOS. | Fresh issue, 0 comments; may be terminal/env detection related. |
| 6 | [#1378 — JSON parsing error with control chars in tool calls](https://github.com/MoonshotAI/kimi-cli/issues/1378) | Tool call arguments containing control characters break JSON parsing. | Closed after 3 comments; long-standing parsing robustness issue. |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| 1 | [#1911 — Support adaptive thinking for Opus 4.7+](https://github.com/MoonshotAI/kimi-cli/pull/1911) | **OPEN** | Fixes `_use_adaptive_thinking()` to match Opus versions ≥ 4.6 instead of only `opus-4.6`, preventing format-rejection errors on newer models. |
| 2 | [#1908 — Increase default `max_steps_per_turn` to 500](https://github.com/MoonshotAI/kimi-cli/pull/1908) | **CLOSED (merged)** | Raises the cap from 100 → 500, eliminating the need for manual overrides on complex multi-step agent tasks. |
| 3 | [#1909 — Moon spinner fallback during turn gaps](https://github.com/MoonshotAI/kimi-cli/pull/1909) | **CLOSED (merged)** | Fixes blank-screen gaps between tool-call completion and the next step by ensuring the loading spinner persists across all active turn phases. |
| 4 | [#1797 — Ctrl+A directory scope toggle in `/sessions`](https://github.com/MoonshotAI/kimi-cli/pull/1797) | **CLOSED (merged)** | Adds `Ctrl+A` toggle to switch between current-directory and all-directory session lists, mirroring Claude Code's `/resume` UX. |
| 5 | [#1798 — Integrate telemetry tracking](https://github.com/MoonshotAI/kimi-cli/pull/1798) | **OPEN** | Adds telemetry instrumentation across interactive and non-interactive modes; Devin AI review badge attached, suggesting automated review pipeline. |

---

## 5. Feature Request Trends

1. **Thinking/transparency display** — The strongest signal this cycle. Users want the chain-of-thought "thinking" output restored or made configurable, citing reduced confidence without it (#1865).
2. **Granular auto-approval controls** — Requests to separate plan-level approval from tool-level approval in `--yolo` mode (#1867), reflecting demand for safer autonomous operation.
3. **Better multi-model & MCP resilience** — Multiple issues around model compatibility (Opus 4.7 adaptive thinking) and MCP server failure handling indicate a growing user base running heterogeneous toolchains.
4. **IDE integration reliability** — Unresponsive CLI in IntelliJ IDEA (#1910) underscores that JetBrains integration remains a pain point needing attention.

---

## 6. Developer Pain Points

- **Missing thinking output (v1.33+):** The most emotionally charged issue this cycle. Developers rely on visible reasoning traces for debugging trust. Its removal is perceived as a "negative optimization" (#1865).
- **Opaque error codes:** Generic 400 errors with no actionable detail frustrate debugging (#1903). Better error surfacing from the provider layer is needed.
- **Web UI hangs without feedback:** When MCP connections fail, the UI gives no indication—users see an infinite spinner with no error message (#1897).
- **Agent step limits too low by default:** The old `max_steps_per_turn = 100` silently truncated complex workflows. Now merged to 500 (#1908), but this class of "silent failure from config defaults" remains a trust concern.
- **Model version fragility:** Hardcoded model-name matching (e.g., only `opus-4.6`) breaks when new model versions ship, requiring constant patching (#1911).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-17

## 1. Today's Highlights

OpenCode shipped **v1.4.7**, a targeted hotfix release focusing on provider compatibility—specifically adjusting how `gpt-5-mini` reasoning effort and `max_tokens` are handled via GitHub Copilot and Cloudflare AI Gateway. The community remains highly active around **stability concerns**, with a mega-thread on memory leaks (55 comments) and multiple reports of crashes and session corruption in recent versions. Broader ecosystem friction continues around **model-specific parameter errors**, particularly with new reasoning models like Opus 4.7 and GPT-5.4.

---

## 2. Releases

### [v1.4.7](https://github.com/anomalyco/opencode/releases/tag/v1.4.7)
- **GitHub Copilot `gpt-5-mini`** now defaults to low reasoning effort for improved request compatibility across providers. ([@thakrarsagar](https://github.com/thakrarsagar))
- **Workspaces** now inherit your auth context, so provider sign-in persists across workspace sessions without re-authentication.
- **Cloudflare AI Gateway** compatibility: `max_tokens` is now automatically dropped for OpenAI reasoning models (GPT-5 series) to prevent `Unsupported parameter` errors.

---

## 3. Hot Issues

1. **[#20695](https://github.com/anomalyco/opencode/issues/20695) — Memory Megathread** `[OPEN]`
   The central hub for all memory leak and OOM reports. Maintainers explicitly ask users *not* to post LLM-generated solutions and instead contribute heap snapshots. 55 comments and growing—this is the top-priority perf tracker.

2. **[#20698](https://github.com/anomalyco/opencode/issues/20698) — GPT 5.4 via Azure fails with reasoning item errors** `[OPEN]`
   After 1–2 tool calls, Azure-hosted GPT-5.4 xhigh fails with `"Item of type 'reasoning' was provided without its required following item."` Affects both web UI and TUI. Signals deeper issues in how OpenCode structures multi-turn tool-call sequences for reasoning models.

3. **[#22863](https://github.com/anomalyco/opencode/issues/22863) — Opus 4.7 fails with `thinking.type.enabled` not supported** `[OPEN]`
   Selecting Opus 4.7 immediately errors with a parameter mismatch—should use `thinking.type.adaptive` and `output_config.effort` instead. Mirrors [#22857](https://github.com/anomalyco/opencode/issues/22857), suggesting a systematic gap in how new Anthropic models are registered.

4. **[#22683](https://github.com/anomalyco/opencode/issues/22683) — v1.4.6 constantly crashing** `[OPEN]`
   After upgrading from 1.4.4 → 1.4.6, users report constant crashes replacing the previous memory leak errors. Regressed in the latest stable.

5. **[#13984](https://github.com/anomalyco/opencode/issues/13984) — Can't copy/paste in CLI** `[OPEN]`
   Long-standing clipboard issue on 26 comments. "Copied to clipboard" toast appears but paste yields nothing. A fundamental workflow blocker for many users.

6. **[#7030](https://github.com/anomalyco/opencode/issues/7030) — Ollama tool calls appear executed but no files change** `[OPEN]`
   When using Ollama + `qwen2.5-coder`, `edit`/`write` tool calls display JSON payloads but nothing is written to disk. 18 thumbs-up—high-impact for local-model users.

7. **[#22374](https://github.com/anomalyco/opencode/issues/22374) — Cloudflare AI Gateway `max_tokens` error** `[CLOSED]`
   Using GPT-5.4 via Cloudflare AI Gateway caused `Unsupported parameter: 'max_tokens'` errors. Directly addressed in today's v1.4.7 release.

8. **[#22872](https://github.com/anomalyco/opencode/issues/22872) — `write` tool hangs indefinitely in 1.4.6** `[CLOSED]`
   The `write` tool enters "running" state but never completes—even for 20-char content. Works fine in 1.4.3, marking this as a regression.

9. **[#22512](https://github.com/anomalyco/opencode/issues/22512) — Windows: ENAMETOOLONG crashes** `[OPEN]`
   On Windows, sending any message to any model triggers screen glitches ending with an `ENAMETOOLONG` error. Likely a path-length issue in temp file handling.

10. **[#22879](https://github.com/anomalyco/opencode/issues/22879) — Instruction files loaded but not auto-executed** `[CLOSED]`
    Files specified in the `instructions` key load into context but their startup commands don't auto-run, breaking AGENTS.md workflows.

---

## 4. Key PR Progress

1. **[#22654](https://github.com/anomalyco/opencode/pull/22654) — `feat(plugin): expose ask() on tool.execute.before hook`**
   Enables plugins to initiate permission requests during pre-tool-execution hooks, unlocking richer interactive plugin workflows.

2. **[#21722](https://github.com/anomalyco/opencode/pull/21722) — `chore: improve UX and design`**
   A significant UI overhaul PR aiming to close the design gap with competitors. Large scope—likely to be reviewed in stages.

3. **[#22821](https://github.com/anomalyco/opencode/pull/22821) — `fix: tidy stale ripgrep references`**
   Cleans up outdated `ripgrep` binary references in tool descriptions, prompts, and docs. Contributor-vouched, ready for merge.

4. **[#1589](https://github.com/anomalyco/opencode/pull/1589) — `feat: Support images in tool responses`**
   Allows the `read` tool and MCP servers to return images as multi-part tool responses, enabling programmatic image analysis.

5. **[#7334](https://github.com/anomalyco/opencode/pull/7334) — `feat: Implement MCP server instruction fetching`**
   Surfaces MCP server instructions emitted at initialization to the LLM context—data was available but previously unused.

6. **[#7984](https://github.com/anomalyco/opencode/pull/7984) — `feat: Add Databricks provider support`**
   Full Databricks Foundation Model APIs provider with per-model SDK routing (Claude → Anthropic SDK, etc.).

7. **[#6629](https://github.com/anomalyco/opencode/pull/6629) — `feat(telemetry): OpenTelemetry instrumentation`**
   Experimental OTEL support covering all tools, MCP, sessions, LLM, LSP, and plugins with Aspire Dashboard integration.

8. **[#6832](https://github.com/anomalyco/opencode/pull/6832) — `fix(github): auto-deny permissions in non-interactive mode`**
   Prevents CI/GitHub Actions from hanging on permission prompts by auto-denying and emitting events in headless contexts.

9. **[#7011](https://github.com/anomalyco/opencode/pull/7011) — `feat(cli): add --cwd flag to web and serve commands`**
   Fixes sessions being created with `worktree: "/"` by preserving the working directory in server commands.

10. **[#6233](https://github.com/anomalyco/opencode/pull/6233) — `feat(lsp): add restartServer operation`**
    Lets users restart LSP servers (e.g., pyright) without restarting OpenCode—addresses stale diagnostics after dependency changes.

---

## 5. Feature Request Trends

- **Model parameter adaptation**: The dominant theme is OpenCode needing to dynamically adapt parameters (`max_tokens`, `thinking.type`, reasoning effort) per model/provider. The proliferation of reasoning models (GPT-5.x, Opus 4.7, Qwen3.5, GLM 5.1) is outpacing the provider abstraction layer. ([#20698](https://github.com/anomalyco/opencode/issues/20698), [#22863](https://github.com/anomalyco/opencode/issues/22863), [#22857](https://github.com/anomalyco/opencode/issues/22857), [#22374](https://github.com/anomalyco/opencode/issues/22374))

- **Clipboard and OS integration**: Copy/paste reliability ([#13984](https://github.com/anomalyco/opencode/issues/13984)) and Linux Wayland/X11 primary clipboard ([PR #6370](https://github.com/anomalyco/opencode/pull/6370)) remain persistent asks.

- **Provider diversity**: Community continues pushing for new providers—Databricks ([PR #7984](https://github.com/anomalyco/opencode/pull/7984)), Morpheus AI ([PR #6519](https://github.com/anomalyco/opencode/pull/6519)), Vertex AI JSON auth ([PR #6287](https://github.com/anomalyco/opencode/pull/6287)).

- **Plugin and hook extensibility**: Demand for richer plugin hooks ([PR #22654](https://github.com/anomalyco/opencode/pull/22654)), subagent variant configuration ([PR #7156](https://github.com/anomalyco/opencode/pull/7156)), and MCP instruction integration ([PR #7334](https://github.com/anomalyco/opencode/pull/7334)).

- **Session management improvements**: Session history scoping ([#15187](https://github.com/anomalyco/opencode/issues/15187)), title auto-updates ([#22806](https://github.com/anomalyco/opencode/issues/22806)), and full session listing ([#16270](https://github.com/anomalyco/opencode/issues/16270)).

---

## 6. Developer Pain Points

- **Stability regressions between minor versions**: Users upgrading from 1.4.4 → 1.4.6 encountered constant crashes ([#22683](https://github.com/anomalyco/opencode/issues/22683)), hanging `write` tool ([#22872](https://github.com/anomalyco/opencode/issues/22872)), and broken session titles ([#22806](https://github.com/anomalyco/opencode/issues/22806)). Each minor release seems to introduce regressions that erode trust.

- **Memory issues remain unresolved**: The memory megathread ([#20695](https://github.com/anomalyco/opencode/issues/20695), 55 comments) has been active for 15 days with no definitive fix. The shift from memory leaks to outright crashes in 1.4.6 suggests fixes may be introducing new failure modes.

- **Reasoning model compatibility is fragile**: Nearly every new reasoning model (GPT-5.4, Opus 4.7, Qwen3.5, GLM 5.1) breaks in OpenCode due to hardcoded or stale parameter schemas. The provider layer needs a more robust model capability negotiation system.

- **Windows experience is second-class**: `ENAMETOOLONG` crashes ([#22512](https://github.com/anomalyco/opencode/issues/22512)), clipboard issues ([#13984](https://github.com/anomalyco/opencode/issues/13984)), plugin-caused black screens ([#12192](https://github.com/anomalyco/opencode/issues/12192)), and session corruption ([#21326](https://github.com/anomalyco/opencode/issues/21326)) are all Windows-specific or Windows-worsened.

- **Silent failures in tool execution**: Ollama tool calls silently no-op ([#7030](https://github.com/anomalyco/opencode/issues/7030)), MiniMax requests fail silently ([#21281](https://github.com/anomalyco/opencode/issues/21281)), and interrupted tool calls corrupt session history ([#21326](https://github.com/anomalyco/opencode/issues/21326)). The lack of clear error feedback forces users into tedious manual debugging.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-17

## 1. Today's Highlights
The Qwen Code community is experiencing massive turbulence following a sudden **OAuth Free Tier policy adjustment** that slashes the daily free quota from 1,000 to 100 requests, with a complete phase-out planned for April 20, 2026. This change triggered a wave of **401 authentication errors** across the user base, dominating the issue tracker. Meanwhile, the contributor front remains highly active, shipping significant architectural improvements to sub-agent coordination, CLI responsiveness, and tool reliability.

## 2. Releases

- **v0.14.5-nightly.20260416.a6612940f**
  - Nightly build released for the `v0.14.5` iteration cycle.
  - **Full Changelog**: [v0.14.5...v0.14.5-nightly.20260416.a6612940f](https://github.com/QwenLM/qwen-code/compare/v0.14.5...v0.14.5-nightly.20260416.a6612940f)

---

## 3. Hot Issues

1. **[#3203 — Qwen OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203)** (83 comments, OPEN)
   The most-discussed issue by far. Users are reacting strongly to the immediate reduction of the free tier from 1,000 to 100 requests/day and the upcoming complete shutdown of the OAuth free entry point on April 20. Community concerns center on accessibility, sudden disruption, and lack of migration guidance.

2. **[#3335 — Internal error: 401 invalid access token or token expired](https://github.com/QwenLM/qwen-code/issues/3335)** (13 comments, CLOSED/duplicate)
   A high-signal bug report capturing the widespread 401 authentication failures. Users report that even after seeing a "Successfully logged in" message, subsequent actions fail. Marked as a duplicate, pointing to a systemic authentication issue.

3. **[#1855 — OAuth session persists after switching to API key](https://github.com/QwenLM/qwen-code/issues/1855)** (9 comments, CLOSED)
   Highlights a critical auth state management bug: switching from OAuth to a paid Coding Plan API key doesn't clear the old OAuth session, resulting in persistent 401 errors. Resurfaced due to the current auth crisis.

4. **[#3365 — Spam/abusive issue targeting maintainers](https://github.com/QwenLM/qwen-code/issues/3365)** (6 comments, OPEN)
   One of several abusive issues filed by the same user (`svfolder`) expressing extreme frustration over the free tier changes. Indicates the emotional intensity of the community reaction. (See also: [#3363](https://github.com/QwenLM/zwen-code/issues/3363), [#3367](https://github.com/QwenLM/qwen-code/issues/3367), [#3370](https://github.com/QwenLM/qwen-code/issues/3370), [#3362](https://github.com/QwenLM/qwen-code/issues/3362), [#3364](https://github.com/QwenLM/qwen-code/issues/3364).)

5. **[#3351 — 401 invalid access token (macOS darwin)](https://github.com/QwenLM/qwen-code/issues/3351)** (6 comments, OPEN)
   Another confirmation of the 401 token expiry bug on v0.14.5, this time on macOS x64. Users are actively discussing workarounds in the thread.

6. **[#3348 — 401 error in VS Code companion](https://github.com/QwenLM/qwen-code/issues/3348)** (3 comments, 👍 5, OPEN)
   Specifically reports that the VS Code extension broke with v0.14.5. Has 5 thumbs-up, indicating multiple users are affected in the IDE integration path.

7. **[#1210 — Better config and data location via XDG Base Directory](https://github.com/QwenLM/qwen-code/issues/1210)** (3 comments, 👍 6, OPEN)
   A long-standing feature request to adopt the XDG Base Directory specification on Linux instead of dumping everything in `~/.qwen`. Gaining renewed attention (6 thumbs-up) as users reconsider Qwen Code's system footprint.

8. **[#3240 — Default documentation language request (Chinese)](https://github.com/QwenLM/qwen-code/issues/3240)** (3 comments, OPEN)
   Requests that documentation default to Chinese, given Qwen's origin as a Chinese product with international reach. Reflects ongoing localization tensions.

9. **[#3259 — Buffer issues causing freezing and chat history replay](https://github.com/QwenLM/qwen-code/issues/3259)** (3 comments, CLOSED/duplicate)
   Reports TUI buffer bugs where the CLI freezes and dumps the entire chat history. Points to rendering/UX issues in the terminal interface layer.

10. **[#3324 — Need a clean uninstall script](https://github.com/QwenLM/qwen-code/issues/3324)** (2 comments, CLOSED)
    Users requesting a reliable way to fully remove Qwen Code, including configurations and residual files. Suggests friction in the current setup/teardown experience.

---

## 4. Key PR Progress

1. **[#3313 — Recover from truncated tool calls via multi-turn continuation](https://github.com/QwenLM/qwen-code/pull/3313)** (OPEN)
   Fixes a critical failure mode where `WriteFile`/`ReadFile` tool calls with large payloads exceed `max_tokens` and produce invalid partial JSON. The fix uses multi-turn continuation to resume and complete the truncated call.

2. **[#3297 — Lazy tool factory registration with concurrency dedup](https://github.com/QwenLM/qwen-code/pull/3297)** (OPEN)
   Addresses a P0 concurrency bug where parallel calls to `ensureTool()` could instantiate the same tool twice, leaking event listener references from `AgentTool` and `SkillTool`. Introduces inflight deduplication.

3. **[#3328 — Localize slash command descriptions + dynamic translation caching](https://github.com/QwenLM/qwen-code/pull/3328)** (OPEN)
   Comprehensive i18n improvement for CLI slash commands, adding runtime translation support with caching for both built-in and dynamically registered commands.

4. **[#3318 — API preconnect to reduce first-call latency](https://github.com/QwenLM/qwen-code/pull/3318)** (OPEN)
   Fires a fire-and-forget HEAD request during startup to warm TCP+TLS connections, saving 100–200ms on the first API call. Smartly skips when proxy environment variables are detected.

5. **[#3319 — Early input capture to prevent keystroke loss](https://github.com/QwenLM/qwen-code/pull/3319)** (OPEN)
   Buffers user keystrokes during the 200–500ms REPL initialization window and replays them once the `KeypressProvider` is mounted. Eliminates a frustrating "lost typing" edge case.

6. **[#3352 — Dual-output sidecar mode for TUI](https://github.com/QwenLM/qwen-code/pull/3352)** (OPEN)
   Adds `--json-fd` / `--json-file` structured JSON event output alongside the normal TUI, plus an `--input-file` command channel. Enables programmatic integration and IDE embedding.

7. **[#3214 — Replace fdir crawler with git ls-files + ripgrep fallback](https://github.com/QwenLM/qwen-code/pull/3214)** (OPEN)
   Replaces the slow, full-directory-scan fdir crawler with a two-tier strategy (git ls-files → ripgrep) for the `@` file mention autocomplete. Respects `.gitignore` and dramatically improves performance on large repos.

8. **[#3339 — Path-based context rule injection from .qwen/rules/](https://github.com/QwenLM/qwen-code/pull/3339)** (OPEN)
   Introduces `.qwen/rules/` directory support with YAML frontmatter for conditional rule loading based on project file paths. Reduces token waste and prevents conflicting guidance across code domains.

9. **[#3329 — Real-time token consumption display during streaming](https://github.com/QwenLM/qwen-code/pull/3329)** (OPEN)
   Shows `↓ N tokens` / `↑ N tokens` in the spinner during model execution, with sub-agent tokens included in the total. Addresses the "flying blind" problem during long-running operations.

10. **[#2886 — Agent Team: parallel sub-agent coordination (experimental)](https://github.com/QwenLM/qwen-code/pull/2886)** (OPEN)
    Introduces an experimental feature allowing the lead agent to spawn and coordinate multiple sub-agents working in parallel. Gated behind an experimental flag. Represents a significant step toward multi-agent architectures.

---

## 5. Feature Request Trends

- **Authentication & access control**: The dominant theme is demand for clear, stable, and predictable free-tier policies—users want graceful degradation paths, advance notice, and better error messaging when quota is exhausted.
- **Localization (i18n)**: Strong momentum behind localizing slash commands, UI strings, and documentation (especially Chinese defaults). PRs like #3328 and issues like #3240 align here.
- **Multi-agent & parallel execution**: Agent Team (#2886), background sub-agents (#3076), and sub-agent stats attribution (#3229) show a clear push toward sophisticated multi-agent workflows.
- **Performance & startup optimization**: API preconnect (#3318), early keystroke capture (#3319), and faster file crawling (#3214) reflect a concerted effort to shave latency from the critical path.
- **IDE & tooling integration**: Dual-output sidecar mode (#3352) and Zed editor detection (#3303) indicate growing investment in making Qwen Code embeddable and compatible with diverse editors.

---

## 6. Developer Pain Points

- **401 authentication errors are ubiquitous**: At least 12 issues in the last 24h report `401 invalid access token or token expired`, affecting all platforms (macOS, Windows, Linux) and both CLI and VS Code. The root cause appears intertwined with the free tier policy change, but also involves session persistence bugs (#1855) where stale OAuth credentials interfere with API key auth.
- **Sudden free tier reduction without migration support**: Users feel blindsided by the quota drop from 1,000→100 requests/day with only days of notice. The lack of clear upgrade guides or grace periods is generating significant friction and negative sentiment.
- **TUI rendering and responsiveness**: Buffer freezing (#3259), flickering in terminal multiplexers (#3330), and lost keystrokes during startup (#3319) indicate the terminal UI layer needs stabilization.
- **Truncated tool calls on large outputs**: Developers working with large file generation hit hard failures (#3049, fixed in PR #3313) when responses exceed `max_tokens`, a particularly frustrating experience when editing substantial codebases.
- **Incomplete cleanup/uninstall**: The absence of a clean uninstall script (#3324) leaves residual files, creating confusion for users trying to reset or switch configurations—especially painful during auth troubleshooting.

</details>