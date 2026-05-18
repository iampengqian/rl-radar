# AI CLI Tools Community Digest 2026-05-19

> Generated: 2026-05-18 22:16 UTC | Tools covered: 9

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

## AI Developer CLI Tools: Cross-Tool Ecosystem Report (2026-05-19)

### 1. Ecosystem Overview
The AI CLI tooling ecosystem is currently undergoing a rapid maturation phase, transitioning from simple terminal-based chat interfaces to complex, multi-agent orchestration platforms. Today's development activity reveals a strong industry-wide push toward production readiness, with core engineering efforts heavily concentrated on cross-platform stability (specifically Windows), multi-agent reliability, and token cost predictability. Meanwhile, architectural paradigms are shifting toward persistent client-daemon models and standardized inter-agent communication protocols (like A2A and ACP) to support advanced, long-running developer workflows.

### 2. Activity Comparison
Activity levels vary significantly across the ecosystem, with OpenAI Codex and Gemini CLI leading in raw issue volume, while OpenCode and DeepSeek TUI dominate today's pull request throughput. 

| Tool | New/Updated Issues (Today) | Active PRs (Today) | Release Status (Last 24h) |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10+ tracked | 2 | *No new releases* |
| **OpenAI Codex** | 10+ tracked | 10 | **v0.131.0**, **v0.132.0-alpha.1** |
| **Gemini CLI** | 10+ tracked | 10 | 2 Nightly releases (v0.44.0) |
| **GitHub Copilot CLI**| 29 total updated | 3 | **v1.0.49-6** (Pre-release) |
| **Kimi Code CLI** | 9 tracked | 2 | *No new releases* |
| **OpenCode** | 10+ tracked | 10 | **v1.15.5** |
| **Pi** | 10 tracked | 10 | **v0.75.1**, **v0.75.2**, **v0.75.3** |
| **Qwen Code** | 10+ tracked | 10 | 1 Nightly release |
| **DeepSeek TUI** | 10 tracked | 10 | *No new releases* |

### 3. Shared Feature Directions
By analyzing cross-sections of community issues and PRs, several universal requirements have emerged for AI coding agents:

*   **Daemon/Headless Architectures & Inter-agent Protocols:** Tools are moving away from monolithic, single-session CLI runs. **Qwen Code** is actively building a `qwen serve` daemon mode with ACP bridge support; **OpenCode** just merged native A2A (Agent-to-Agent) protocol support; and **Gemini CLI** is wiring up `AgentSession` remote invocations.
*   **Windows and Cross-Platform Parity:** Windows is a universally acknowledged pain point. **Claude Code** users are experiencing multi-day outages (blank screens, Cowork failures), **OpenAI Codex** is battling runaway Git processes and broken Undo states, **DeepSeek TUI** is hard-limited by hardcoded `cmd.exe` calls, and **OpenCode** struggles with `/` vs `\` path mismatches.
*   **Context Window & Token Cost Management:** As agent tasks become highly autonomous, context limits and token bleed are threatening ROI. **OpenAI Codex** users report massive token burning via background polling (Issue #13733), **Qwen Code** users are requesting deterministic context trimming (`/compress-fast`), and **OpenCode** is implementing pre-storage message transforms to avoid unnecessary token usage.
*   **Accessibility (a11y):** Terminal UIs are currently failing visually impaired developers. Both **Claude Code** (Issue #11002) and **Pi** (Issue #4687) have active, highly-upvoted threads demanding screen-reader-compatible modes (NVDA/JAWS) and the reduction of noisy ASCII UI elements.

### 4. Differentiation Analysis
While sharing broad goals, the tools cater to different ecosystems and technical philosophies:
*   **Claude Code & OpenAI Codex:** Focused on deeply integrated enterprise workflows, but currently battling scaling issues. Codex is differentiating by overhauling its core state management (a 7-part turn-context PR stack) and refining TUI commands. Claude Code is leaning into multi-agent "Cowork" features, though currently hindered by file-syncing bugs.
*   **Qwen Code & OpenCode:** These tools are leading the charge in deep third-party integrations and web-based paradigms. OpenCode focuses heavily on plugin extensibility hooks and alternative provider support (e.g., Open WebUI), while Qwen Code is uniquely architecting a full client-daemon separation that natively bridges to VS Code.
*   **DeepSeek TUI & Pi:** Highly focused on the "hobbyist/power user" experience and CLI performance. Pi is actively exploring rewriting its core in Rust or heavily optimizing TSX overhead to beat a 21-second startup time. DeepSeek TUI is prioritizing interface ergonomics (prompt recovery on Ctrl+C, shell-agnostic dispatchers).
*   **Gemini CLI:** Uniquely invested in AST (Abstract Syntax Tree) aware tooling to reduce token noise, allowing the model to intelligently navigate codebases structurally rather than reading files linearly. 

### 5. Community Momentum & Maturity
*   **High Velocity / Rapid Iteration:** **OpenAI Codex**, **Qwen Code**, and **OpenCode** show immense momentum. Codex shipped a massive architectural TUI update while iterating on a 7-part core refactor. OpenCode and Qwen merged significant structural features (A2A support and Daemon bridges) with impressive PR velocity.
*   **Firefighting / Stabilization Phase:** **Claude Code**, **GitHub Copilot CLI**, and **Kimi Code** appear to be in a stabilization phase. Copilot CLI is battling fundamental event-sourcing state corruptions, Claude Code is buried under Windows stability and billing bugs, and Kimi Code is constrained by upstream model outages (K2.6) and memory leaks.
*   **Active Niche Evolution:** **DeepSeek TUI** and **Pi** are rapidly addressing core architectural deficiencies to become highly competitive alternatives. Pi's impressive triptych of patch releases (v0.75.1-3) to fix Node/Bun HTTP2 crashes demonstrates highly responsive, maintainer-driven momentum.

### 6. Trend Signals
For technical decision-makers and platform engineers, today's digest highlights clear macro trends:
1.  **The Rise of the CLI Daemon:** 2026 is moving the AI coding agent out of the transient terminal session and into persistent background daemons (Qwen, OpenAI). Engineering teams should prepare for headless-client architectures where IDEs and TUIs simply connect to a long-running local agent server.
2.  **Token Economics Dictate UX:** Unpredictable token consumption during agentic loops (especially background polling) is the primary threat to enterprise adoption. Expect a rapid market push toward granular telemetry ("Context Health dashboards"), deterministic context pruning, and AST-aware file reading to artificially lower context windows.
3.  **Runtime Instability is the Actual Bottleneck:** The AI agent ecosystem is currently being bottlenecked by foundational infrastructure rather than LLM intelligence. Node.js/Undici HTTP2 race conditions (Pi/Qwen), cross-platform pathing bugs, and terminal rendering quirks are consuming massive engineering resources. Expect a growing migration toward memory-safe, compiled languages (like the Rust rewrite discussions in Pi) for future agnostic CLI binaries.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Analysis Period:** Through May 19, 2026 | **Source:** [github.com/anthropics/skills](https://github.com/anthropics/skills)

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Pull Request | Author | Status | Summary |
|:---:|---|---|:---:|---|
| 1 | [#514 — Add document-typography skill](https://github.com/anthropics/skills/pull/514) | PGTBoos | OPEN | Typographic quality control for AI-generated documents |
| 2 | [#538 — Fix case-sensitive file references in SKILL.md](https://github.com/anthropics/skills/pull/538) | Lubrsy706 | OPEN | Bug fix for broken cross-references on case-sensitive file systems |
| 3 | [#486 — Add ODT skill](https://github.com/anthropics/skills/pull/486) | GitHubNewbie0 | OPEN | OpenDocument (.odt/.ods) creation, template filling, and ODT→HTML conversion |
| 4 | [#210 — Improve frontend-design skill](https://github.com/anthropics/skills/pull/210) | justinwetch | OPEN | Revised frontend-design instructions for clarity and actionability |
| 5 | [#83 — Add skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83) | eovidiu | OPEN | Two meta-skills: quality scoring (5 dimensions) and security analysis |
| 6 | [#541 — Fix tracked change w:id collision](https://github.com/anthropics/skills/pull/541) | Lubrsy706 | OPEN | Prevents DOCX corruption from OOXML ID-space conflicts |
| 7 | [#723 — Add testing-patterns skill](https://github.com/anthropics/skills/pull/723) | 4444J99 | OPEN | Full-stack testing guidance (unit, React, integration, E2E) |
| 8 | [#568 — Add ServiceNow platform skill](https://github.com/anthropics/skills/pull/568) | Vanka07 | OPEN | Comprehensive ServiceNow assistant (ITSM, SecOps, CSDM, IntegrationHub) |

**Key observations:**
- **Document-format skills dominate** the top ranks. Three of the top six PRs address document generation quality (typography, DOCX ID collisions, ODT support), signaling that *document reliability* is the community's #1 pain point.
- **Quality/security meta-skills** (#83) represent a maturing ecosystem—contributors are building tools to evaluate other skills.
- **Lubrsy706** is a standout contributor with three high-attention PRs (#538, #541, #539), all fixing subtle but impactful bugs in core document skills.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Demand Signal |
|---|---|---|
| **Organization-wide skill sharing** | [Issue #228](https://github.com/anthropics/skills/issues/228) — 13 comments, 7 👍 | Teams want centralized skill libraries, not manual file-sharing via Slack/Teams |
| **Skill reliability & trigger mechanisms** | [Issue #556](https://github.com/anthropics/skills/issues/556) — 0% trigger rate in evals, [Issue #1087](https://github.com/anthropics/skills/issues/1087) — plugin loads wrong skills | Core skill-loading infrastructure needs hardening before new skills can be trusted |
| **Namespace trust & security boundaries** | [Issue #492](https://github.com/anthropics/skills/issues/492) — Community skills impersonating `anthropic/` namespace | Users want clear provenance to distinguish official vs. community skills |
| **Deduplication & plugin architecture** | [Issue #189](https://github.com/anthropics/skills/issues/189) — Duplicate skills from overlapping plugins, [Issue #1087](https://github.com/anthropics/skills/issues/1087) | Plugin packaging and marketplace.json need stricter scoping |
| **Enterprise/SSO compatibility** | [Issue #532](https://github.com/anthropics/skills/issues/532) — API key required, unusable for SSO users, [Issue #29](https://github.com/anthropics/skills/issues/29) — Bedrock support | Enterprise authentication and multi-platform support are blockers for adoption |
| **MCP integration for skills** | [Issue #16](https://github.com/anthropics/skills/issues/16) — Expose Skills as MCPs, [Issue #1102](https://github.com/anthropics/skills/issues/1102) — MCP data bloat | Community wants Skills callable via Model Context Protocol with efficient data handling |
| **Skill-creator best practices** | [Issue #202](https://github.com/anthropics/skills/issues/202) — skill-creator reads like docs, not instructions | Meta-demand for better skill authoring tooling and convention enforcement |

---

## 3. High-Potential Pending Skills (Open, Active, Unmerged)

| PR | Skill | Why It's Likely to Land |
|---|---|---|
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Solves a universal problem—every AI-generated document has orphan/widow issues. Broad applicability with minimal dependencies. |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT (OpenDocument)** | Fills a major format gap. LibreOffice/OpenDocument is an ISO standard with no current skill coverage. |
| [#538](https://github.com/anthropics/skills/pull/538) | **PDF reference fix** | Pure bug fix, low risk. Corrects 8 case-sensitivity mismatches that break on Linux. High merge probability. |
| [#541](https://github.com/anthropics/skills/pull/541) | **DOCX tracked-change fix** | Prevents silent document corruption—a critical data-integrity fix with a clear root cause and narrow scope. |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Addresses the full testing pyramid with practical patterns (AAA, Testing Library, CI integration). No competing skill exists. |
| [#539](https://github.com/anthropics/skills/pull/539) | **skill-creator YAML validation** | Pre-parse validation for unquoted YAML descriptions—small, defensive, and prevents a class of silent failures. |
| [#360](https://github.com/anthropics/skills/pull/360) | **AppDeploy (full-stack deployment)** | Enables one-command web app deployment from Claude. Long-lived PR (Feb–May 2026) with sustained attention. |
| [#806](https://github.com/anthropics/skills/pull/806) | **sensory (macOS AppleScript)** | Native OS automation without screenshots—addresses the "computer use" gap with a clever permission-tier system. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for reliable, enterprise-grade document generation skills**—typography quality control, DOCX/ODT format support, and bug fixes in existing document skills account for the majority of high-attention PRs and issues, revealing that making Claude's document output production-ready is the single highest-value gap in the current Skills ecosystem.

---

## Claude Code Community Digest — 2026-05-19

---

### 1. Today's Highlights

No new releases shipped in the past 24 hours, keeping the community's focus squarely on existing pain points—most notably **Windows stability across Desktop, Cowork, and the Agents TUI**, which continues to dominate issue activity. A pair of **supply-chain security hardening PRs** are in flight, and new issues around session recovery, UI polish, and agent focus-stealing suggest the community is pushing hard for production-readiness on multi-agent workflows.

---

### 2. Releases

No new releases in the last 24 hours. The latest stable version remains unchanged.

---

### 3. Hot Issues

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| 1 | [#55982 — Plan upgrade payment fails (PaymentIntent voided)](https://github.com/anthropics/claude-code/issues/55982) | Core billing/upgrade flow is broken for some users; PaymentIntent is voided before confirmation completes. | 67 comments, 20 👍—highest engagement today; users are actively sharing repro details and workarounds. |
| 2 | [#11002 — `--screen-reader` mode for NVDA/JAWS](https://github.com/anthropics/claude-code/issues/11002) | Accessibility gap: TUI is essentially unusable with major screen readers on Windows. | 39 comments, 34 👍—strong community demand for a11y support; sustained activity since Nov 2025. |
| 3 | [#674 — Cursor style overrides terminal behavior](https://github.com/anthropics/claude-code/issues/674) | Claude unconditionally forces a solid block cursor, breaking users' terminal preferences. Closed but still actively discussed. | 34 comments, **95 👍**—most upvoted issue in this batch; indicates a persistent UX irritant. |
| 4 | [#26408 — Selected model issue (claude-sonnet-4-6)](https://github.com/anthropics/claude-code/issues/26408) | Model selection bug that appears to cause unexpected behavior or errors with the latest Sonnet model. | 30 comments, 11 👍—affects anyone targeting the default model. |
| 5 | [#14129 — `/rate-limit-options` auto-executes after session reset](https://github.com/anthropics/claude-code/issues/14129) | On resume, a slash-command re-runs in a loop, burning tokens. Closed with repro. | 27 comments, 18 👍—token-waste bugs are always high-priority for cost-conscious users. |
| 6 | [#38029 — Abnormal token usage on session resume](https://github.com/anthropics/claude-code/issues/38029) | Session resume triggers unexpectedly high consumption; possible accounting or context-replay bug. | 24 comments, 32 👍—directly impacts cost; heavily upvoted. |
| 7 | [#39455 — Plugin userConfig not prompted on enable](https://github.com/anthropics/claude-code/issues/39455) | Plugin system regression: config values that should prompt the user are silently skipped. | 23 comments, 19 👍—blocking plugin developers on macOS/IntelliJ. |
| 8 | [#55879 — Desktop blank screen + Cowork unusable (Windows, 9-day outage)](https://github.com/anthropics/claude-code/issues/55879) | Triple threat: blank Desktop UI, Cowork failures, and sandbox API errors for Max subscribers. | 22 comments—severity is high; reports of multi-day outages. |
| 9 | [#38993 — Cowork virtiofs FUSE mount serves truncated/stale files](https://github.com/anthropics/claude-code/issues/38993) | Host-side file changes aren't reflected inside the Cowork VM, causing silent data inconsistency. | 20 comments, 17 👍—undermines Cowork's core value proposition of shared file system. |
| 10 | [#59899 — Agents view unresponsive after left-arrow navigation (Windows)](https://github.com/anthropics/claude-code/issues/59899) | Navigating back in the agents TUI freezes the CLI on Windows 11 PowerShell. | 13 comments, 8 👍—reproducible; pairs with related issue #59251 (CLI freeze on back-arrow during generation). |

---

### 4. Key PR Progress

Only **2 pull requests** saw updates today, both still open:

| PR | Description | Significance |
|----|-------------|--------------|
| [#60280 — `chore(ci): SHA-pin remaining actions/checkout and actions/github-script`](https://github.com/anthropics/claude-code/pull/60280) | Follow-up to #56784; pins third-party GitHub Actions to commit SHAs across 6 workflows (`auto-close-duplicates`, `backfill-duplicate-comments`, `claude-dedupe-issues`, `claude-issue-triage`, etc.). | **Supply-chain hardening**—directly mitigates tag-based supply-chain attacks on CI. Good security hygiene. |
| [#58673 — (titled "s")](https://github.com/anthropics/claude-code/pull/58673) | Empty/stub PR with no meaningful description. | Appears to be accidental or test PR; no substantive progress. |

> **Note:** With only 2 PRs updated and neither merged, today's PR activity is minimal. The signal is the SHA-pinning work, which signals the team's ongoing investment in CI security.

---

### 5. Feature Request Trends

Drawing from the full issue set, these are the dominant feature themes the community is requesting:

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Unified cross-platform sessions** — seamless session/project resume across Desktop, Mobile, and CLI | [#42050](https://github.com/anthropics/claude-code/issues/42050) (10 👍) | Users treat Claude Code as a multi-surface product; fragmentation hurts workflows. |
| **Accessibility (screen reader support)** — first-class NVDA/JAWS mode | [#11002](https://github.com/anthropics/claude-code/issues/11002) (34 👍) | Long-standing request; essential for enterprise/compliance adoption. |
| **Hooks & context visibility** — expose context usage to hooks for autonomous session handoff | [#54580](https://github.com/anthropics/claude-code/issues/54580), [#53224](https://github.com/anthropics/claude-code/issues/53224) | Power users want to chain long-running autonomous sessions without manual intervention. |
| **Security & secret management** — scrub secrets from session logs at rest | [#50014](https://github.com/anthropics/claude-code/issues/50014) (1 👍) | Rising awareness of sensitive data in `~/.claude/projects/*.jsonl`. |
| **Status line customization** — allow disabling built-in PR badge, full user control of status bar | [#40897](https://github.com/anthropics/claude-code/issues/40897), [#60324](https://github.com/anthropics/claude-code/issues/60324) | Users want clean, custom status lines without duplication. |
| **Suggestion provenance** — tell the model when a prompt came from an auto-suggestion | [#60087](https://github.com/anthropics/claude-code/issues/60087) | Interesting meta-UX request: improve model behavior by distinguishing typed vs. accepted-suggestion prompts. |

---

### 6. Developer Pain Points

Recurring frustrations surfacing across multiple issues:

1. **Windows is a second-class citizen.** The bulk of high-comment bugs involve Windows-specific crashes, blank screens, Cowork failures, and TUI freezes (#55879, #38993, #59899, #59251, #58522, #60341). Windows developers are experiencing multi-day outages with no clear timeline for fixes.

2. **Token/cost accounting is unreliable.** Multiple reports of abnormal consumption on session resume (#38029, #55051, #14129) erode trust in usage tracking. Cost-sensitive teams and Max subscribers are particularly vocal.

3. **Session persistence and recovery is fragile.** Desktop silently drops sessions on relaunch (#60341), CLI `--resume` produces sessions invisible to the sidebar, and Desktop passes invalid `--session-id` after updates (#58522). The session lifecycle needs hardening.

4. **Agent/multi-agent workflows are not production-ready.** Focus-stealing during agent spawning (#49184), TUI freezes on navigation (#59899, #59251), and `AskUserQuestion` interrupting active typing (#59336) all point to agents being bolted onto a single-user TUI that wasn't designed for concurrent interaction.

5. **Cowork file system synchronization is broken.** The virtiofs FUSE mount serving stale/truncated files (#38993) is a fundamental reliability issue for the Cowork feature's remote-collaboration promise.

6. **Billing and payment edge cases.** The payment flow bug (#55982) with immediate `void_invoice` prevents plan upgrades—a direct revenue blocker that likely deserves urgent attention.

---

*Data sourced from [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) on 2026-05-19.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-19

## 1. Today's Highlights
The Codex team shipped **rust-v0.131.0**, bringing a significantly upgraded Terminal User Interface (TUI) with richer session controls, blended token usage, and responsive Markdown tables, alongside a new **v0.132.0-alpha.1** early preview. Behind the scenes, a massive 7-part PR stack is actively refactoring the core turn context and user input operations, signaling a major upcoming architectural shift in how Codex manages conversation state. Community discussions remain heavily focused on token consumption inefficiencies, particularly during background polling operations and subagent delegation.

## 2. Releases

### rust-v0.131.0
- **Enhanced TUI Experience:** Introduces data-driven service-tier commands, blended token usage visibility, permissions/approval modes, effective workspace roots, and responsive Markdown tables ([#21745](https://github.com/openai/codex/issues/21745), [#21906](https://github.com/openai/codex/issues/21906), [#21991](https://github.com/openai/codex/issues/21991), [#21669](https://github.com/openai/codex/issues/21669), [#21677](https://github.com/openai/codex/issues/21677), [#22052](https://github.com/openai/codex/issues/22052), [#22612](https://github.com/openai/codex/issues/22612)).
- **Mentions Upgrade:** The `@` mention system has been updated to feature unified search capabilities.

### rust-v0.132.0-alpha.1
- Early alpha release for testing upcoming features.

## 3. Hot Issues

1. **[Token Burning / Rate Limits](https://github.com/openai/codex/issues/14593)** (#14593): With 584 comments and 258 👍, this remains the most active issue. Business and Pro users continue to report rapid, unexpected token depletion during standard agentic operations, highlighting ongoing friction with Codex's cost predictability.
2. **[Background Process Polling Wastes Tokens](https://github.com/openai/codex/issues/13733)** (#13733): A critical efficiency flaw where background commands (e.g., `cargo build`) trigger full API round-trips with the entire conversation history for simple status checks, heavily compounding the token-burning issue.
3. **[Undo Regression in Windows](https://github.com/openai/codex/issues/23326)** (#23326): Users on the latest VS Code extension (26.513) are reporting that the crucial "Undo" functionality has broken again, disrupting developer workflows on Windows.
4. **[Massive Log Generation in CLI](https://github.com/openai/codex/issues/23340)** (#23340): Running `/goal` loops generates 480 KB single log lines, causing the CLI to generate up to 34 GB of logs in a single day due to unbounded tracing spans.
5. **[Mobile Remote Access Cross-Host Leak](https://github.com/openai/codex/issues/23339)** (#23339): A critical security/UX bug where Codex mobile remote access can reuse revoked enrollments and accidentally connect an iPhone to the wrong Mac on the same account.
6. **[Subagent Model Mismatch](https://github.com/openai/codex/issues/15177)** (#15177): Spawning a child agent with `model="gpt-5.4-mini"` incorrectly logs the thread metadata as `model="gpt-5.4"`, breaking cost and performance tracking for multi-agent architectures.
7. **[Invisible File Tree in Desktop App](https://github.com/openai/codex/issues/20552)** (#20552): `View > Toggle File Tree` is enabled but unreliable on macOS, preventing users from accessing their workspace structure. 
8. **[MCP Tool Call Resolution Failure](https://github.com/openai/codex/issues/20652)** (#20652): When routing through OpenAI-compatible proxies (like Ollama or LiteLLM), flattened MCP tool namespaces (e.g., `mcp__tilth__`) fail to resolve, blocking custom model integrations.
9. **[Git Process Spam on Windows](https://github.com/openai/codex/issues/22151)** (#22151): The Codex Windows app gets stuck launching repeated `git add -A` processes in the background, spawning hundreds of stalled `git-lfs` processes that choke system resources.
10. **[In-App Browser Annotation Regression](https://github.com/openai/codex/issues/22719)** (#22719): A recent update broke the multi-annotation workflow; the in-app browser now instantly submits comments upon hitting 'Enter' rather than allowing batched annotations.

## 4. Key PR Progress

1. **[TUI: Make Mentions 2.0 default, remove gate, polish rendering](https://github.com/openai/codex/pull/23363)** (#23363): Unifies the `@` mention experience in the TUI, merging file search and tool invocation into a single seamless flow and deprecating the legacy `mentions_v2` config flag.
2. **[[1 of 7] Add turn context to UserInput](https://github.com/openai/codex/pull/23080)** (#23080): The foundational PR of a massive architectural stack aimed at consolidating overlapping "user input" ops (`UserInput`, `UserInputWithTurnContext`, and `UserTurn`) into a single, robust state API.
3. **[[5 of 7] Add queued core turn context op](https://github.com/openai/codex/pull/22508)** (#22508): Introduces `Op::TurnContext`, allowing Codex to update turn context dynamically via a queue without unnecessarily starting a completely new conversational turn.
4. **[Include plugin id in plugin MCP tool metadata](https://github.com/openai/codex/pull/23353)** (#23353): Enhances MCP runtime provenance by attaching the `plugin_id` to tool calls, enabling accurate filtering and preventing user-configured MCP servers from shadowing plugin tools.
5. **[core: refresh active permission profiles at runtime](https://github.com/openai/codex/pull/22931)** (#22931): Ensures that switching named permission profiles mid-session correctly rebuilds network proxy states, enabling seamless runtime transitions.
6. **[Honor role-defined spawn service tiers](https://github.com/openai/codex/pull/22169)** (#22169): Fixes subagent spawning to respect the `service_tier` defined in custom agent role files, adhering to the correct precedence for model and reasoning configs.
7. **[app-server: use profile ids in v2 permission params](https://github.com/openai/codex/pull/23360)** (#23360): Cleans up experimental permission profiles by removing legacy object payloads, ensuring clients rely on secure, server-owned active profile metadata.
8. **[Scope app-server client identity per connection](https://github.com/openai/codex/pull/22548)** (#22548): Fixes a process-global identity leak in the app-server, ensuring that outbound headers (`originator`, `User-Agent`) are correctly scoped per connection rather than bleeding across concurrent clients.
9. **[fix: Prevent /review crash when entering Esc](https://github.com/openai/codex/pull/22879)** (#22879): Resolves a crash triggered by pressing Escape during a `/review` session by properly routing the interrupt signal instead of attempting an unsupported steer operation.
10. **[Remove truncation line-count headers](https://github.com/openai/codex/pull/23362)** (#23362): Centralizes ownership of truncated tool output formatting, eliminating discrepancies between shell, unified exec, and code-mode output representations.

## 5. Feature Request Trends

- **Advanced Subagent Routing:** Developers are increasingly requesting granular control over subagents, specifically the ability to define different models, providers, and profiles on a per-subagent basis ([#14039](https://github.com/openai/codex/issues/14039)) and execute tasks in parallel by default ([#22099](https://github.com/openai/codex/issues/22099)).
- **Context Window Visibility:** Users want a "Context Health" dashboard to monitor conversation compaction behavior and token utilization in real-time, rather than operating blind until context limits are hit ([#22220](https://github.com/openai/codex/issues/22220)).
- **Session Management Enhancements:** Demand for Claude-style UX utilities is growing, particularly a `/recap` command for mid-conversation summarization and a `/btw` alias for side-context injection ([#18884](https://github.com/openai/codex/issues/18884)). Additionally, users want native search across all past conversation histories ([#12963](https://github.com/openai/codex/issues/12963)).
- **Configuration Ergonomics:** A strong desire for recursive project trust roots so developers can whitelist a parent directory once instead of configuring every individual repository ([#19426](https://github.com/openai/codex/issues/19426)).

## 6. Developer Pain Points

- **Token Bleed & Cost Predictability:** The most acute developer frustration remains the rapid consumption of tokens. Users feel powerless against background polling loops that send full conversation history ([#13733](https://github.com/openai/codex/issues/13733)) and general agentic loops that burn through credits unexpectedly ([#14593](https://github.com/openai/codex/issues/14593)). 
- **Windows Stability:** Windows users continue to face a degraded experience, suffering from severe bugs like broken Undo functionality ([#23326](https://github.com/openai/codex/issues/23326)) and runaway background processes ([#22151](https://github.com/openai/codex/issues/22151)).
- **MCP & Proxy Compatibility:** Developers integrating alternative models (via Ollama/LiteLLM) or complex MCP servers are hitting frequent roadblocks due to tool namespace flattening ([#20652](https://github.com/openai/codex/issues/20652)) and leaked stdio processes ([#17574](https://github.com/openai/codex/issues/17574)).
- **Subagent Reliability:** As developers build more complex, multi-agent architectures, they are encountering friction with inaccurate model metadata tracking ([#15177](https://github.com/openai/codex/issues/15177)) and a lack of visibility into background agent task statuses ([#21664](https://github.com/openai/codex/issues/21664)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-19

## 1. Today's Highlights
The Gemini CLI team shipped two nightly releases (v0.44.0) focused on a new agent session feature flag and critical security dependency patches. Active development is heavily concentrated on subagent reliability, with multiple pull requests landing to wire up remote `AgentSession` invocations and fix generalist agent hanging bugs. The community remains highly engaged on topics surrounding AST-aware tooling, security redaction in the Auto Memory system, and edge cases involving shell command hangs.

## 2. Releases
- **[v0.44.0-nightly.20260518](https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0-nightly.20260518.g5611ff40e)**: Introduced the `adk.agentSessionSubagentEnabled` feature flag to core, paving the way for session-based remote agent invocations.
- **[v0.44.0-nightly.20260517](https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0-nightly.20260517.g77e65c0db)**: Addressed critical/high security vulnerabilities in dependencies, fixed a web fetch abort issue via Ctrl+C, and added aliases and thinking configurations to core.

## 3. Hot Issues
1. **[LSP Support Request (#2465)](https://github.com/google-gemini/gemini-cli/issues/2465)**: Closed but boasting 129 upvotes and 9 comments, this is a highly requested feature asking for Language Server Protocol integration (diagnostics, code actions, completion) to enhance the CLI developer experience.
2. **[Generalist Agent Hangs (#21409)](https://github.com/google-gemini/gemini-cli/issues/21409)**: A P1 bug where the CLI hangs indefinitely when deferring to the generalist agent, even for simple tasks like folder creation. Users are frustrated as it requires manual cancellation after long waits.
3. **[AST-Aware File Reads & Search (#22745)](https://github.com/google-gemini/gemini-cli/issues/22745)**: An Epic tracking the investigation of AST-aware tools to reduce token noise and misaligned reads. This is a major architectural discussion with active maintainer engagement.
4. **[Subagent Recovery Masked as Success (#22323)](https://github.com/google-gemini/gemini-cli/issues/22323)**: A critical P1 bug where subagents hitting `MAX_TURNS` incorrectly report `status: "success"`, hiding the fact that the actual task was interrupted and never completed.
5. **[Shell Command Execution Stuck (#25166)](https://github.com/google-gemini/gemini-cli/issues/25166)**: A P1 bug where simple CLI commands complete but the interface gets stuck displaying "Waiting input," forcing users to restart their sessions.
6. **[Gemini Doesn't Use Skills and Sub-Agents (#21968)](https://github.com/google-gemini/gemini-cli/issues/21968)**: Users report that custom-defined skills and sub-agents are ignored during normal operation, requiring explicit instruction—a major hurdle for workflow automation.
7. **[Browser Agent Fails in Wayland (#21983)](https://github.com/google-gemini/gemini-cli/issues/21983)**: A P1 bug causing the browser subagent to crash immediately on Wayland-based Linux desktop environments.
8. **[Subagents Run Without Permission (#22093)](https://github.com/google-gemini/gemini-cli/issues/22093)**: Users report that since v0.33.0, subagents bypass explicitly disabled configurations and run automatically, breaking expected trust boundaries.
9. **[Auto Memory Security Redaction (#26525)](https://github.com/google-gemini/gemini-cli/issues/26525)**: Highlights a vulnerability where secrets aren't redacted by the Auto Memory system until *after* they have entered the model context.
10. **[400 Error with >128 Tools (#24246)](https://github.com/google-gemini/gemini-cli/issues/24246)**: A hard limit in the CLI causes API 400 errors when tool registrations exceed a certain threshold, requesting better scope filtering.

## 4. Key PR Progress
1. **[Wire AgentSession into agent-tool (#26948)](https://github.com/google-gemini/gemini-cli/pull/26948)**: Implements the core logic enabling the new `AgentSession` invocations behind the recently merged feature flag.
2. **[Add RemoteSessionInvocation (#26937)](https://github.com/google-gemini/gemini-cli/pull/26937)**: Introduces the `RemoteSessionInvocation` class to enable session-based remote agent invocation via A2A client streaming.
3. **[Fix Binary False-Positive on Windows PTY (#26565)](https://github.com/google-gemini/gemini-cli/pull/26565)**: Resolves an issue where ANSI/VT escape sequences in Windows node-pty caused the CLI to treat output as binary data, halting execution.
4. **[Path Traversal Prevention in Custom Commands (#27234)](https://github.com/google-gemini/gemini-cli/pull/27234)**: Fixes a security vulnerability that allowed malicious `@{...}` injections to read files outside defined workspace boundaries.
5. **[Centralize Path Validation (#27211)](https://github.com/google-gemini/gemini-cli/pull/27211)**: Consolidates file path validation logic to prevent crashes when long log messages or malformed prompts are misinterpreted as file paths.
6. **[A2A Server Default Policy Loading (#27073)](https://github.com/google-gemini/gemini-cli/pull/27073)**: Synchronizes security by ensuring the A2A server inherits the same default security and read-only policies as the main CLI.
7. **[Fix Nullable Array Types in MCP Tools (#27228)](https://github.com/google-gemini/gemini-cli/pull/27228)**: Adds necessary logic to handle nullable array types, improving stability when interacting with MCP servers.
8. **[Fix Spinner Interference in tmux (#19705)](https://github.com/google-gemini/gemini-cli/pull/19705)**: Closed/merged fix that swaps out complex terminal spinners for simple dots in tmux, preventing control sequence interference.
9. **[Update Default Auto Routing to gemini-3.1-flash-lite (#27071)](https://github.com/google-gemini/gemini-cli/pull/27071)**: Updates the default `flash-lite` alias to point to the newer `gemini-3.1-flash-lite` model for internal routing.
10. **[Add Sublime Text and Emacs Client Support (#21090)](https://github.com/google-gemini/gemini-cli/pull/21090)**: Enhances the external editor ecosystem by adding Sublime Text and Emacs Client to the built-in editor list alongside better error handling.

## 5. Feature Request Trends
- **AST-Aware Code Navigation**: A strong push from both maintainers and the community for AST-aware file reads, codebase mapping, and search tools to improve agent precision and reduce token waste (Issues [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
- **Robust Agent Evals**: Growing demand for standardized, component-level behavioral evaluations to reliably track the quality and effectiveness of sub-agents (Issues [#24353](https://github.com/google-gemini/gemini-cli/issues/24353), [#22601](https://github.com/google-gemini/gemini-cli/issues/22601)).
- **Backgroundable Agents**: Users want the ability to send local sub-agents to the background (e.g., via `Ctrl+B`) for non-blocking tasks like builds or linting (Issue [#22741](https://github.com/google-gemini/gemini-cli/issues/22741)).
- **IDE/LSP Integration**: Persistent demand for deep Language Server Protocol support to bring CLI-powered diagnostics and completion into standard text editors (Issue [#2465](https://github.com/google-gemini/gemini-cli/issues/2465)).

## 6. Developer Pain Points
- **Subagent Reliability**: Users are experiencing frequent hangs, incorrect success reporting on interruptions, and agents ignoring defined skills. This breaks automated workflows and forces manual oversight (Issues [#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)).
- **Agent Permission Escalation**: Developers are frustrated by subagents activating without explicit permission, contrasting sharply with established safety expectations (Issue [#22093](https://github.com/google-gemini/gemini-cli/issues/22093)).
- **Auto Memory Security/Noise**: Memory system bugs cause low-signal sessions to be retried indefinitely and secrets to leak into model context before redaction, raising security concerns (Issues [#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)).
- **Messy Workspace Generation**: The agent frequently litters project directories with temporary edit scripts, requiring manual cleanup before commits (Issue [#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for 2026-05-19.

## 1. Today's Highlights
The GitHub Copilot CLI community was highly active on May 18th, with a surge of 29 issues updated—many newly created—highlighting growing pains around session stability and the evolving MCP/plugin ecosystem. A pre-release (`v1.0.49-6`) was pushed, while maintainers and contributors actively addressed critical regressions like GPT API transient errors, session wedging, and input rendering bugs. 

## 2. Releases
* **[v1.0.49-6 Pre-release](https://github.com/github/copilot-cli/releases)**: A new pre-release patch was published, likely containing early fixes for the recent input box and session issues reported over the weekend.

## 3. Hot Issues
Here are the 10 most noteworthy issues updated or created in the last 24 hours:

1. **GPT Transient API Errors ([#3242](https://github.com/github/copilot-cli/issues/3242))** *CLOSED*: Users reported that GPT-based models were failing with "Transient API errors" during PLAN-related features. This was actively tracked and recently closed, restoring GPT model reliability.
2. **Orphan `tool_use` Wedges Sessions ([#3366](https://github.com/github/copilot-cli/issues/3366))** *OPEN*: A critical bug where an incomplete `tool.execution_complete` event in `events.jsonl` permanently wedges a session, breaking both read and write states.
3. **`--resume` No Longer Allows Deterministic IDs ([#3377](https://github.com/github/copilot-cli/issues/3377))** *OPEN*: A regression where starting a new session with a specific UUID via `copilot --resume=<UUID>` (a documented feature) now throws an error.
4. **MCP Server Timeout Config Lost ([#1378](https://github.com/github/copilot-cli/issues/1378))** *OPEN*: The per-server `timeout` in `mcp.json` silently reverts to 180s after a `tools/list_changed` notification, causing long-running tools to fail.
5. **MCP Naming Conflicts ([#3379](https://github.com/github/copilot-cli/issues/3379))** *OPEN*: When the same MCP name exists in user-level and project-level configs, the TUI displays metadata from one source but silently executes the other.
6. **Copilot Cloud Agent 400 Error ([#2695](https://github.com/github/copilot-cli/issues/2695))** *OPEN*: Custom agents fail with a 400 error if the model selection doesn't perfectly align with the agent's spec, limiting model flexibility.
7. **Input Box Too Tall ([#3340](https://github.com/github/copilot-cli/issues/3340))** *CLOSED*: A UI regression where the input box unexpectedly increased in height, taking up unnecessary screen space. 
8. **Missing `/every` and `/after` Commands ([#3342](https://github.com/github/copilot-cli/issues/3342))** *CLOSED*: Users discovered these commands via help tips but encountered `Unknown command` errors during active sessions.
9. **CLI Silently Hangs on Stalled HTTPS Sockets ([#3371](https://github.com/github/copilot-cli/issues/3371))** *OPEN*: The CLI can hang indefinitely with no timeout or log output when TCP buffers stall during communication with `api.github.com`.
10. **Windows Backspace Bug in Vim ([#3374](https://github.com/github/copilot-cli/issues/3374))** *OPEN*: Pressing backspace in Vim (launched via Ctrl+G in the CLI) inserts `⌂` instead of deleting characters due to a character encoding mapping issue on Windows.

## 4. Key PR Progress
*(Note: Activity in the PR section was sparse today, focusing on documentation and config updates.)*

1. **[PR #3373](https://github.com/github/copilot-cli/pull/3373) [OPEN]**: Adds a `summary.yml` file to the repository to improve project indexing and documentation structure.
2. **[PR #3353](https://github.com/github/copilot-cli/pull/3353) [OPEN]**: Updates documentation to clarify that a Copilot subscription is no longer strictly required for certain use cases.
3. **[PR #2970](https://github.com/github/copilot-cli/pull/2970) [CLOSED]**: A previously proposed addition of a `devcontainer.json` that was closed after review.

## 5. Feature Request Trends
Analyzing the latest open issues reveals three distinct feature trends within the community:

* **Advanced MCP & Plugin Configurations:** Users want granular control over the rapidly expanding MCP ecosystem. Requests include a global `--disable-repo-mcps` flag ([#3380](https://github.com/github/copilot-cli/issues/3380)), `git-subdir` source support for external plugins ([#3376](https://github.com/github/copilot-cli/issues/3376)), and better integration for C# LSPs ([#2204](https://github.com/github/copilot-cli/issues/2204)).
* **Persistent & Cross-Session Context:** Developers are pushing for the CLI to act as a long-term agent. A standout proposal is `.copilot/goals.md` to define long-running, cross-session objectives ([#3364](https://github.com/github/copilot-cli/issues/3364)).
* **Rich Media & Non-Standard Terminals:** Users are requesting image/screenshot paste support to bypass text-only limitations ([#3370](https://github.com/github/copilot-cli/issues/3370)), alongside requests for `TERM=dumb` compatibility for environments like Plan 9's Acme ([#3372](https://github.com/github/copilot-cli/issues/3372)).

## 6. Developer Pain Points
Community frustrations currently center around three main areas:

* **Session Reliability & Event Corrupted States:** The transition to an event-sourced architecture (`events.jsonl`) is causing headaches. Users frequently face permanently wedged sessions, broken `/resume` workflows, and lost workspace tracking when changing directories ([#3362](https://github.com/github/copilot-cli/issues/3362), [#3365](https://github.com/github/copilot-cli/issues/3365)).
* **Plugin Context Disconnects:** The plugin/tooling layer appears to have a broken feedback loop. Developers are frustrated that `modifiedResult` from `onPostToolUse` and `postToolUse` additional context are displayed in the UI but fail to inject into the actual LLM prompt context window ([#2980](https://github.com/github/copilot-cli/issues/2980), [#3361](https://github.com/github/copilot-cli/issues/3361)).
* **Internationalization (i18n) and Input Quirks:** Input handling remains fragile. CJK (Chinese, Japanese, Korean) text pasting causes severe garbling, and common terminal interactions (like ending a prompt with a `?`) unintentionally trigger help dialogs due to input parsing bugs ([#3369](https://github.com/github/copilot-cli/issues/3369), [#3368](https://github.com/github/copilot-cli/issues/3368)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-19

## 1. Today's Highlights
No new releases were published in the last 24 hours. The community remains highly focused on **reliability and performance**, with critical ongoing issues surrounding K2.6 model overloading and slow prompt completions, alongside active contributor PRs addressing underlying HTTP connection leaks and memory management in the CLI's asynchronous architecture. Notably, developers are pushing for broader third-party agent compatibility (such as Cline) and more granular configuration control over git polling and UI theming.

## 2. Releases
*No new releases were recorded in the past 24 hours.*

## 3. Hot Issues

1. **[Critical] K2.6 Model Overloaded ([#2077](https://github.com/MoonshotAI/kimi-cli/issues/2077))**
   * **Context:** Users report the K2.6 model is constantly returning overload errors, rendering it unusable under normal loads for Allegretto subscribers.
   * **Reaction:** High engagement (15 comments, 2 thumbs up). This remains a top blocker for premium users depending on the latest model for production tasks.

2. **API Error 400 / Invalid Request ([#778](https://github.com/MoonshotAI/kimi-cli/issues/778))**
   * **Context:** A long-standing bug affecting Windows/PowerShell users utilizing third-party models (Claude 3.5 Sonnet), resulting in `invalid_request_error`.
   * **Reaction:** Very active discussion (17 comments), indicating persistent pain points with cross-platform API routing and multi-model support.

3. **Excessive Prompt "Overthinking" / Slow Execution ([#2314](https://github.com/MoonshotAI/kimi-cli/issues/2314))**
   * **Context:** Users are frustrated by excessive latency (e.g., 5 minutes for simple DB pushes) because the agent overthinks straightforward prompts.
   * **Reaction:** Sparked discussion on agentic behavior constraints and the need for "fast-path" execution for simple tasks.

4. **VS Code Extension Connection Error ([#1458](https://github.com/MoonshotAI/kimi-cli/issues/1458))**
   * **Context:** Users encounter `Connection error` (code -32003) when integrating Kimi Code within VS Code. 
   * **Reaction:** Highlights persistent integration friction between the CLI, the API backend, and standard IDE extensions.

5. **Request to Whitelist Cline Agent ([#2322](https://github.com/MoonshotAI/kimi-cli/issues/2322))**
   * **Context:** A feature request to add Cline (a popular VS Code coding agent) to the API whitelist. Currently, requests from Cline are terminated with a `403 access_terminated_error`.
   * **Reaction:** Reflects a strong developer desire to decouple the Kimi model from the official CLI and use it within alternative agentic frameworks.

6. **Configurable Git Status Polling for Monorepos ([#2321](https://github.com/MoonshotAI/kimi-cli/issues/2321))**
   * **Context:** Hardcoded git branch and status polling intervals cause severe performance degradation in large monorepos.
   * **Reaction:** A targeted technical request asking for environment variable or `config.toml` overrides for `_GIT_BRANCH_TTL` and `_GIT_STATUS_TTL`.

7. **Emoji-Induced API Error ([#2320](https://github.com/MoonshotAI/kimi-cli/issues/2320))**
   * **Context:** A novel bug where specific emojis (✨) in prompts or responses trigger parsing crashes or API errors.
   * **Reaction:** A quirky but critical edge case affecting string sanitization and payload encoding.

8. **Customizable Syntax Highlighting ([#2319](https://github.com/MoonshotAI/kimi-cli/issues/2319))**
   * **Context:** Users are frustrated by fixed `cyan`/`bright_cyan` syntax highlighting, which causes eye strain in light-themed terminals. Users are currently hacking the Python source code to change it.
   * **Reaction:** Highlights a strong need for a more modular UI theming engine.

9. **Incorrect TPD Rate Limit Calculation ([#2318](https://github.com/MoonshotAI/kimi-cli/issues/2318))**
   * **Context:** A user hit an organization TPD (Tokens Per Day) rate limit of `1505241`, suspecting a critical bug in how the platform calculates token usage.
   * **Reaction:** Raises concerns about backend billing and rate-limit telemetry accuracy.

## 4. Key PR Progress

1. **fix(aiohttp): Reuse TCPConnector to prevent connection leaks ([PR #2231](https://github.com/MoonshotAI/kimi-cli/pull/2231))**
   * **Summary:** Refactors the HTTP client to reuse `TCPConnector` instances across tool calls. 
   * **Impact:** Massively reduces TCP handshake latency and prevents file-descriptor exhaustion during heavy parallel operations.

2. **fix(utils): Bound broadcast queues and cap web store cache ([PR #2236](https://github.com/MoonshotAI/kimi-cli/pull/2236))**
   * **Summary:** Replaces unbounded `asyncio.Queue` with bounded variants and caps the in-memory web session cache.
   * **Impact:** Directly addresses potential memory leaks (OOM kills) faced by power users with thousands of cached sessions or slow consumer tasks.

*(Note: Only 2 active PRs were updated in the last 24 hours.)*

## 5. Feature Request Trends

* **Third-Party Agent Interoperability:** Developers want the freedom to use Kimi models outside the official CLI. Whitelisting popular tools like Cline is a growing demand.
* **Granular Performance Configurations:** Monorepo users are hitting performance walls and need the ability to tweak internal settings (like Git polling TTLs) rather than waiting for upstream defaults to change.
* **Better UX/UI Customization:** There is a strong push to abandon hardcoded terminal UI elements. Users want syntax highlighting and theme colors mapped dynamically to standard terminal profiles (e.g., light vs. dark modes).

## 6. Developer Pain Points

* **Model Reliability & Speed:** The K2.6 model's tendency to overload and overthink simple prompts is severely impacting developer workflows, turning simple script generations into waiting games.
* **Resource Leaks in Long Sessions:** The CLI struggles with memory and connection management during prolonged use. Until the open PRs are merged, heavy users will continue to experience degradation.
* **Opaque Rate Limits:** Unexpected TPD limits and confusing error codes (`403`, `-32003`) create a frustrating debugging experience, especially when users are unsure if the issue stems from their IDE, the CLI, or the Moonshot API backend.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-19

## 1. Today's Highlights
OpenCode shipped **v1.15.5**, introducing an experimental preview of the native OpenAI runtime path and new `--replay` flags for interactive sessions, alongside critical fixes for plugin tool completions and event updates. The community remains highly engaged with TUI rendering bugs (especially on Alpine Linux), session state management regressions, and a growing demand for plugin extensibility hooks—highlighted by several new PRs addressing pre-storage message transforms and MCP timeout handling.

---

## 2. Releases

### [v1.15.5](https://github.com/anomalyco/opencode/releases/tag/v1.15.5)
- **New:** Experimental flag to preview the native OpenAI runtime path.
- **New:** `--replay` and `--replay-limit` CLI flags to surface recent history when resuming interactive runs.
- **Fix:** Plugin tools using `ask` now complete tool calls correctly.
- **Fix:** Reduced missed `/event` updates for more reliable streaming.

---

## 3. Hot Issues

1. **[#8601](https://github.com/anomalyco/opencode/issues/8601) — Certificate verification errors across multiple AI providers** (25 comments)
   Persistent SSL/cert errors affecting multiple providers including Gemini. Despite being opened in January, it remains unresolved with continued community reports.

2. **[#27589](https://github.com/anomalyco/opencode/issues/27589) — TUI fails on Alpine Linux (musl): `getcontext` symbol not found** (20 comments, 👍 6)
   A regression from v1.14.48→1.14.50 that breaks the OpenTUI render library on musl-based systems. High community demand for Alpine/musl support.

3. **[#28138](https://github.com/anomalyco/opencode/issues/28138) — Big Pickle model broken after 1.14→1.15.4 upgrade** (17 comments)
   A formatting mapping bug rejects `big-pickle` with "Model not supported for format anthropic." Affects users relying on non-standard model aliases.

4. **[#13838](https://github.com/anomalyco/opencode/issues/13838) — Compaction replay injects fake "What did we do so far?" user message** (14 comments, 👍 3)
   Auto-compaction injects a synthetic message that triggers unwanted summary generation, disrupting conversation continuity.

5. **[#13537](https://github.com/anomalyco/opencode/issues/13537) — [FEATURE] Add Open WebUI as a provider** (13 comments, 👍 16)
   Most-upvoted feature request today. Open WebUI's OpenAI-compatible API would enable self-hosted provider integration.

6. **[#27897](https://github.com/anomalyco/opencode/issues/27897) — TUI flickers when rendering fenced code blocks during streaming** (8 comments)
   Visual rendering bug that degrades the terminal experience during code block streaming.

7. **[#28015](https://github.com/anomalyco/opencode/issues/28015) — "Worker has been terminated" with multiple subagents** (6 comments)
   Parallel subagent execution or multiple instances cause worker crashes and broken session switching.

8. **[#28129](https://github.com/anomalyco/opencode/issues/28129) — OpenCode Go: 11/12 models fail with "Insufficient Balance"** (4 comments)
   Upstream provider account depletion breaks multi-agent orchestration for Go subscribers.

9. **[#27594](https://github.com/anomalyco/opencode/issues/27594) — Session permanently stuck after auto-compaction** (4 comments)
   Post-compaction auto-trigger fires `tool_use` without matching `tool_result`, making sessions non-recoverable.

10. **[#28130](https://github.com/anomalyco/opencode/issues/28130) — Plan mode allows writing despite being read-only** (3 comments, 👍 1)
    Permission bypass in Plan mode violates the intended safety boundary, allowing file modifications when `"permission": "allow"` is set.

---

## 4. Key PR Progress

1. **[#28245](https://github.com/anomalyco/opencode/pull/28245) — Include friendly provider name in system identity prompt** (thmtz)
   Fixes model/provider hallucination in commit trailers by surfacing the friendly provider name instead of raw IDs.

2. **[#28246](https://github.com/anomalyco/opencode/pull/28246) — Pass `onprogress` to `callTool` for long-running MCP tools** (chrislazar25)
   Fixes timeout issues for MCP tools by ensuring the SDK attaches a `progressToken`, closing [#28186](https://github.com/anomalyco/opencode/issues/28186).

3. **[#28247](https://github.com/anomalyco/opencode/pull/28247) — Avoid white flash when restoring desktop window** (Hona)
   Sets native BrowserWindow background before renderer paint and syncs theme colors between Electron and renderer.

4. **[#28239](https://github.com/anomalyco/opencode/pull/28239) — Hide skill template text from chat/terminal UIs** (louiswilliams)
   Fixes the UX issue where `/skill` slash commands dump the entire `SKILL.md` contents as the visible user message.

5. **[#27912](https://github.com/anomalyco/opencode/pull/27912) — Eliminate session switch latency** (BYK) [MERGED]
   Removes the `deferRender` mechanism and eliminates the ~170ms Suspense splash screen on session switch.

6. **[#28224](https://github.com/anomalyco/opencode/pull/28224) — Add `experimental.message.store.before` plugin hook** (glassdimlygr)
   Enables PII/secret redaction plugins to transform messages *before* SQLite persistence, closing a significant data-leak gap.

7. **[#10452](https://github.com/anomalyco/opencode/pull/10452) — Add A2A (Agent-to-Agent) remote agent support** (adriancooney) [MERGED]
   Implements Google's A2A protocol, allowing `@domain.com` syntax to invoke remote AI agents directly in chat.

8. **[#28230](https://github.com/anomalyco/opencode/pull/28230) — Subprocess integration test harness for `opencode run`** (kitlangton)
   Phase 1 of closing the integration test gap—no end-to-end CLI tests previously existed for the `run` command.

9. **[#23862](https://github.com/anomalyco/opencode/pull/23862) — Fix sessions missing from sidebar on Windows** (Gitar101)
   Path separator mismatch (`/` vs `\`) causes sub-agent sessions to vanish from the web UI sidebar on Windows.

10. **[#26090](https://github.com/anomalyco/opencode/pull/26090) — Expose LLM response headers on assistant messages** (jtbnz)
    Surfacing headers like `x-litellm-model` enables tracking which actual model was selected behind proxy auto-routers.

---

## 5. Feature Request Trends

- **Self-hosted & alternative providers:** Strong demand for Open WebUI ([#13537](https://github.com/anomalyco/opencode/issues/13537), 👍 16) as a self-hosted provider, plus GitLab GPT-5.5 support ([#28221](https://github.com/anomalyco/opencode/issues/28221)) and restored DeepSeek v4 Flash 1M context ([#27929](https://github.com/anomalyco/opencode/issues/27929)).
- **Plugin & hook extensibility:** Requests for `experimental.message.store.before` ([#28223](https://github.com/anomalyco/opencode/issues/28223)) and `pre_chat.messages.transform` ([#25493](https://github.com/anomalyco/opencode/pull/25493)) reflect a growing ecosystem of plugins needing pre-persistence interception for PII redaction and content filtering.
- **Configurable desktop UX:** Custom editor menus in "Open in" ([#15500](https://github.com/anomalyco/opencode/issues/15500), 👍 8), configurable keybinds ([#11983](https://github.com/anomalyco/opencode/issues/11983)), and Neovim-style scrolling ([#8600](https://github.com/anomalyco/opencode/issues/8600), 👍 7) indicate power users want finer control.
- **Robust multi-agent orchestration:** Parallel search improvements ([#28216](https://github.com/anomalyco/opencode/issues/28216)) and A2A agent support ([#10452](https://github.com/anomalyco/opencode/pull/10452)) point toward production-grade agent-to-agent workflows.

---

## 6. Developer Pain Points

- **Session state corruption is the #1 frustration.** Issues [#27594](https://github.com/anomalyco/opencode/issues/27594), [#27907](https://github.com/anomalyco/opencode/issues/27907), [#28015](https://github.com/anomalyco/opencode/issues/28015), and [#22808](https://github.com/anomalyco/opencode/issues/22808) all describe sessions becoming permanently stuck or unrecoverable after interruptions, compaction, or tool failures. The `assertNotBusy` / `tool_use` orphaning pattern is systemic.
- **TUI rendering and platform compatibility** continue to bite: Alpine/musl breakage ([#27589](https://github.com/anomalyco/opencode/issues/27589)), streaming flicker ([#27897](https://github.com/anomalyco/opencode/issues/27897)), and freeze on GitHub Copilot streaming ([#28192](https://github.com/anomalyco/opencode/issues/28192)) affect daily workflows.
- **Windows path handling** is a recurring second-class citizen issue: sessions disappearing ([#23862](https://github.com/anomalyco/opencode/pull/23862)) and directory matching failures ([#28240](https://github.com/anomalyco/opencode/pull/28240)) from `/` vs `\` mismatches.
- **Model format mapping regressions** ([#28138](https://github.com/anomalyco/opencode/issues/28138)) erode trust during upgrades; breaking changes to model/provider aliases between minor versions cause silent failures.
- **Insufficient balance / provider depletion** ([#28129](https://github.com/anomalyco/opencode/issues/28129)) highlights a lack of graceful fallback or clear error messaging when upstream provider accounts run dry.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for 2026-05-19.

## 1. Today's Highlights
Pi rolled out three rapid-fire patch releases (v0.75.1 to v0.75.3) to address critical startup crashes with Bun binaries and Node CLI hangs caused by undici HTTP/2 session race conditions. The community remains highly active in hardening Windows support, optimizing CLI startup latency—which one PR successfully reduced by 83%—and standardizing system prompt boundaries across different configurations. 

## 2. Releases
*   **[v0.75.3](https://github.com/badlogic/pi-mono/releases/tag/v0.75.3):** Fixed undici 8 HTTP/2 destroyed-session races that crashed the Node CLI by preserving the previous HTTP/1.1-only fetch dispatcher behavior.
*   **[v0.75.2](https://github.com/badlogic/pi-mono/releases/tag/v0.75.2):** Fixed Bun-compiled release binaries failing to start when Bun's built-in undici shim lacks npm undici's `install` export, and patched Xiaomi MiMo generated model metadata.
*   **[v0.75.1](https://github.com/badlogic/pi-mono/releases/tag/v0.75.1):** Fixed config selectors to scale their visible row count to terminal height, and fixed Anthropic-compatible API-key requests to ignore unrelated `ANTHROPIC_AUTH_TOKEN` environments.

## 3. Hot Issues
1.  **[Official local LLM provider extension (#3357)](https://github.com/earendil-works/pi/issues/3357):** Highly requested feature (27 👍) to dynamically fetch model lists from a local `baseUrl` (e.g., Ollama, llama.cpp). The community is eager for seamless local inference integration.
2.  **[Rewrite Pi in Rust (#4609)](https://github.com/earendil-works/pi/issues/4609):** A provocative discussion sparked by the maintainer regarding a potential Rust core to mitigate Node/Bun specific bugs (like the recent undici HTTP/2 crashes) and improve binary portability.
3.  **[Optimize coding-agent extension loading (#4704)](https://github.com/earendil-works/pi/issues/4704):** A proposal to refactor extension loading by utilizing shared Jiti instances and native dynamic imports to bypass TSX overhead, aiming for an 83% startup latency reduction.
4.  **[Uncaught ERR_HTTP2_INVALID_SESSION crashes (#4682)](https://github.com/earendil-works/pi/issues/4682):** Users reported interactive sessions crashing during long-running loops due to undici's HTTP/2 transport. This was the primary driver behind today's v0.75.3 patch.
5.  **[Default prompt still uses Markdown project context boundaries (#4691)](https://github.com/earendil-works/pi/issues/4691):** Highlighted an inconsistency where new XML boundaries were only applied to custom prompts, leaving the default prompt to rely on fragile Markdown headings.
6.  **[Windows: Unix-style paths resolve incorrectly (#4688)](https://github.com/earendil-works/pi/issues/4688):** A cross-platform bug where paths like `/c/tmp` resolved to `C:\c\tmp` instead of `C:\tmp` due to how Node's `path.isAbsolute()` behaves on Windows.
7.  **[MiMo built-in provider missing compat flags (#4678)](https://github.com/earendil-works/pi/issues/4678):** Multi-turn tool calls for Xiaomi MiMo models were failing with 400 errors due to missing DeepSeek protocol `reasoning_content` compatibility flags.
8.  **[Agent permanently hangs during 429 rate limit errors (#4707)](https://github.com/earendil-works/pi/issues/4707):** A regression where dropped connections during rate limiting (429s) caused the agent to hang in a "Working" state rather than surfacing the error to the TUI.
9.  **[Accessibility: Screen Reader Support (#4687)](https://github.com/earendil-works/pi/issues/4687):** An important usability report noting that heavy ASCII art borders and dynamic decorations render the TUI confusing and noisy for screen readers.
10. **[Copilot Subscription broken after latest update (#4685)](https://github.com/earendil-works/pi/issues/4685):** Users reported authentication failures with the GitHub Copilot provider following the newest release.

## 4. Key PR Progress
1.  **[perf(coding-agent): Optimize extension loading (#4702)](https://github.com/earendil-works/pi/pull/4702):** Successfully reduced standard environment startup latency from ~21s to ~3.5s by optimizing the extension initialization bottleneck.
2.  **[fix(coding-agent): Guard undici install under Bun (#4661)](https://github.com/earendil-works/pi/pull/4661):** Patched the v0.75.1 startup crash for Bun binaries by guarding the missing `install` export from the built-in `undici` shim.
3.  **[Fix(coding-agent) Updated default prompt to use xml boundaries (#4709)](https://github.com/earendil-works/pi/pull/4709):** Resolves issue #4691, ensuring consistent XML file separation across both custom and default system prompts.
4.  **[feat(coding-agent): Fetch portable git bash on windows (#4651)](https://github.com/earendil-works/pi/pull/4651):** An experimental PR by `@mitsuhiko` to auto-download portable Git Bash (~350MB) to resolve persistent Windows Bash dependency issues.
5.  **[fix(openai-codex): Clamp prompt_cache_key (#4719)](https://github.com/earendil-works/pi/pull/4719):** Prevents hard 400 errors from the OpenAI API by ensuring the `prompt_cache_key` does not exceed the 64-character limit.
6.  **[feat(coding-agent): Add --new-session-id flag (#4718)](https://github.com/earendil-works/pi/pull/4718):** Allows programmatic embedding harnesses and CI runners to define their own session UUIDs for reliable JSONL logging.
7.  **[fix(coding-agent): Make docs/examples path absolute (#4700)](https://github.com/earendil-works/pi/pull/4700):** Fixes an issue where the agent couldn't locate its own documentation due to incorrectly resolved relative paths in the system prompt.
8.  **[Feature/simple parallel package loading (#4668)](https://github.com/earendil-works/pi/pull/4668):** A community contribution that parallelizes the loading of installed extensions to further decrease boot times.
9.  **[fix(ai): Fetch GitHub Copilot context window limits at runtime (#2527)](https://github.com/earendil-works/pi/pull/2527):** Corrects hard-coded 1M context limits for Claude models routing through Copilot, aligning them with the actual 200K API limits.
10. **[fix(web-ui): Refresh agent interface after run settles (#4684)](https://github.com/earendil-works/pi/pull/4684):** Fixes a UI glitch in the web interface that left the input area in a stale "streaming" state after an agent finished its run.

## 5. Feature Request Trends
*   **Local Model Integration:** Strong continued demand for native, dynamic integration with local LLM runners (Oltherama, LM Studio, vLLM) rather than manual API endpoint configuration.
*   **Programmatic & Embedded Usability:** Features like session lifecycle events (`session_ready` in JSON mode) and custom session IDs point to a growing trend of developers using Pi as an orchestrated backend agent rather than just a standalone CLI.
*   **TUI Accessibility:** Early requests are emerging to implement aria-live regions or alternative TUI rendering modes to support visually impaired developers who rely on screen readers.

## 6. Developer Pain Points
*   **Windows Friction:** Windows developers are experiencing a cluster of path-resolution bugs, invisible console windows flashing during Bash operations, and missing npm/Git executables (`ENOENT` errors). 
*   **Runtime-Specific Instability:** The cascade of bugs surrounding Bun's undici shims and Node's HTTP/2 session handling has caused frustration regarding the stability of the underlying JS runtime environment, leading to existential discussions about a Rust rewrite.
*   **Startup Latency:** The heavy reliance on TSX/Jiti for extension loading has caused out-of-the-box startup times to bloat (~21s in some environments), forcing users to manually optimize or limit their installed extensions.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-19

## 1. Today's Highlights
The `qwen serve` daemon mode ("Mode B") is seeing explosive development activity, with multiple PRs merging this week to add mutation control routes, MCP guardrails, and typed error handling for its ACP bridge. On the client side, new experimental paths are being carved out to allow the standard TUI and VS Code IDE to connect to the daemon backend, signaling a major architectural shift toward a unified client-daemon model. Meanwhile, community reports highlight a critical compatibility issue with Node.js 26's updated undici version that breaks the default `fetch` configuration, alongside recurring reports of memory leaks (OOM crashes) in long-running sessions.

## 2. Releases
- **v0.15.11-nightly.20260518.f44ed0941**
  - **CLI/UI Enhancement:** Markdown links are now wrapped in OSC 8 hyperlinks, ensuring that URLs remain clickable in terminal emulators that support the standard ([PR #4037](https://github.com/QwenLM/qwen-code/pull/4037)).
  - **Core Streaming Fix:** Cumulative OpenAI stream deltas have been normalized to use suffixes, resolving inconsistencies in streaming responses ([PR #3896](https://github.com/QwenLM/qwen-code/pull/3896)).
  - **Bug Fix:** Addressed an issue with auto-restore functionality in the CLI.

## 3. Hot Issues
1. **[OPEN] Daemon mode proposal & open decisions ([#3803](https://github.com/QwenLM/qwen-code/issues/3803))**
   A comprehensive 6-chapter design series for the `qwen serve` daemon mode. This is the central tracking issue for the architectural shift currently dominating the repository's development.
2. **[OPEN] Mode B feature-priority roadmap toward v0.16 ([#4175](https://github.com/QwenLM/qwen-code/issues/4175))**
   With Stage 1 daemon and workspace multiplexing merged, this issue outlines the final production-ready roadmap for v0.16. Highly active discussion on upcoming HTTP/SSE capabilities.
3. **[OPEN] CLI crashed (OOM) ([#4167](https://github.com/QwenLM/qwen-code/issues/4167))**
   Users are experiencing Out-Of-Memory crashes during garbage collection, highlighting severe memory leak issues in long-running CLI sessions.
4. **[OPEN] `reasoning_content` field incompatibility with vLLM ≥ 0.20 ([#4285](https://github.com/QwenLM/qwen-code/issues/4285))**
   Qwen Code emits the legacy `reasoning_content` field, which vLLM ≥ 0.20 strips, causing empty `<think\>` blocks. A breaking change in how third-party backends handle reasoning payloads.
5. **[OPEN] Node.js 26 `fetch failed` error ([#4274](https://github.com/QwenLM/qwen-code/issues/4274))**
   Breaking change in Node 26's bundled undici 8.x causing handler mismatches. Users are currently forced to downgrade to Node 22 LTS as a workaround.
6. **[OPEN] mimo-v2.5-pro API Error 400 ([#4223](https://github.com/QwenLM/qwen-code/issues/4222))**
   Recent regression where secondary tool calls fail due to unhandled `reasoning_content` fields during model switching. 
7. **[OPEN] `/compress` command not working ([#4098](https://github.com/QwenLM/qwen-code/issues/4098))**
   The built-in context compression mechanism fails to trigger correctly when the conversation gets too long, leaving users manually managing context windows.
8. **[OPEN] Feature Request: `/compress-fast` non-AI context reduction ([#4264](https://github.com/QwenLM/qwen-code/issues/4264))**
   Proposes a fast, deterministic context trim (removing tool calls/thinking) instead of relying on an LLM to summarize history, which is currently too slow and expensive.
9. **[OPEN] `/diff`: add per-turn diff with interactive selection ([#4272](https://github.com/QwenLM/qwen-code/issues/4272))**
   A highly requested parity feature with Claude Code. Currently, `/diff` only shows an aggregate git working-tree vs HEAD view without interactive selection.
10. **[OPEN] Inconsistent command substitution security ([#4093](https://github.com/QwenLM/qwen-code/issues/4093))**
    The shell execution security check that denies command substitutions (`$()`, backticks) is easily bypassed in compound commands, exposing a significant security gap in agent execution.

## 4. Key PR Progress
1. **feat(ide): add experimental daemon webview path ([#4267](https://github.com/QwenLM/qwen-code/pull/4267))**
   Wires up VS Code to use a daemon-backed ACP-compatible connection, allowing IDE users to leverage the persistent `qwen serve` backend.
2. **feat(tui): add experimental daemon stream path ([#4266](https://github.com/QwenLM/qwen-code/pull/4266))**
   Enables the standard TUI to connect to a daemon session via `--experimental-daemon-tui`, rendering daemon SSE updates through existing TUI components.
3. **feat(channel): add daemon bridge wire-up ([#4261](https://github.com/QwenLM/qwen-code/pull/4261))**
   Introduces a structural `ChannelBridge` interface, allowing channels to route traffic through an ACP bridge or the new daemon bridge based on configuration.
4. **feat(serve): approval / tools / init / MCP-restart mutation routes ([#4282](https://github.com/QwenLM/qwen-code/pull/4282))**
   Merged. Adds 4 strict-gated mutation routes to the daemon so remote TUI/web clients can change runtime posture without host CLI access.
5. **fix(serve): post-merge P2 corrections from Codex review ([#4297](https://github.com/QwenLM/qwen-code/pull/4297))**
   Addresses four correctness bugs flagged by automated review in the recently merged mutation routes PR.
6. **refactor(acp-bridge): lift status, paths, and errors ([#4298](https://github.com/QwenLM/qwen-code/pull/4298))**
   Major refactor lifting bridge primitives to decouple the ACP bridge from CLI-specific `serve/` logic, essential for the daemon transition.
7. **refactor(serve): typed errors for channel-closed and missing-cli-entry ([#4300](https://github.com/QwenLM/qwen-code/pull/4300))**
   Replaces fragile regex-matching on error messages with structural `instanceof` typed error checks.
8. **Pin fetch to bundled undici for Node 26 compatibility ([#4238](https://github.com/QwenLM/qwen-code/pull/4238))**
   Resolves the critical Node 26 crash by explicitly pinning `fetch` to the project's bundled undici 6.x, avoiding conflicts with Node's native undici 8.x.
9. **feat(memory): project-scoped memory writes and `.qwen/QWEN.local.md` ([#4290](https://github.com/QwenLM/qwen-code/pull/4290))**
   Adds 'auto' scoping for memory writes, allowing agents to seamlessly save context to local project files without overriding user-wide settings.
10. **Move startup context into system reminders ([#4053](https://github.com/QwenLM/qwen-code/pull/4053))**
   Refactors startup scaffolding into `<system-reminder>` history, saving context tokens and removing the synthetic startup acknowledgement turn.

## 5. Feature Request Trends
- **Daemon-First Architecture:** A massive push toward making `qwen serve` the primary backend, with requests for IDE, TUI, and channel adapters to connect to it seamlessly.
- **Advanced Context Management:** High demand for better context lifecycle controls, including deterministic/non-AI context trimming (`/compress-fast`) and better tools for viewing per-turn diffs (`/diff`).
- **Performance & Telemetry:** Requests for deeper operational metrics exposed via the CLI, specifically Tokens Per Second (TPS) and Time-To-First-Token (TTFT) via the `/stats` command.
- **Headless & CI Guardrails:** Enhanced protection for `--yolo` and non-interactive modes to prevent infinite loops, runaway token spend, and tool-call spamming.

## 6. Developer Pain Points
- **Node 26 Compatibility:** The update to Node.js 26 broke outgoing API requests due to an undici dispatcher mismatch, causing persistent `fetch failed` errors.
- **Memory Leaks (OOM):** Long-running sessions consistently trigger garbage collection failures and crash the CLI, requiring frequent restarts.
- **Protocol Fragments across Providers:** Developers utilizing third-party backends (vLLM, DeepSeek, MiniMax, mimo) are experiencing breaking changes and 400 errors due to how `reasoning_content` and thinking payloads are serialized.
- **Inadequate Context Window Handling:** Users are frustrated by context limits. The current `/compress` tool often fails, and agents frequently hallucinate or attempt to re-read files after the session goes idle.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-19

## 1. Today's Highlights
The DeepSeek TUI community experienced a massive surge in contributions today, with developers heavily focused on refining the Windows/WSL2 experience and overhauling the shell execution architecture. Several highly-anticipated UX features were proposed and immediately addressed via Pull Requests, including prompt recovery on `Ctrl+C`, real-time token speed indicators, and an LLM-powered `/init` command. A notable architectural push towards "ShellDispatcher" abstraction aims to resolve long-standing cross-platform shell compatibility issues once and for all.

## 2. Releases
No new official releases were published in the last 24 hours. 

## 3. Hot Issues
1. **Docker Execution Causing Severe System Hangs ([#1615](https://github.com/Hmbown/DeepSeek-TUI/issues/1615))**
   *Closed.* Users reported severe issues where running the Docker image caused persistent system hangs/encoding errors, forcing hard Linux server resets. Garnered significant attention with 164 comments detailing various environments and workarounds.
2. **Sub-par Input Cache Hit Rate ([#1177](https://github.com/Hmbown/DeepSeek-TUI/issues/1177))**
   *Open.* A highly discussed issue (24 comments) pointing out that DeepSeek-TUI's context cache hit rate drastically underperforms compared to similar tools like DeepSeek-Reasonix, leading to increased latency and token costs.
3. **Ctrl+C Behavior and Prompt Recovery ([#1757](https://github.com/Hmbown/DeepSeek-TUI/issues/1757))**
   *Open.* Users are frustrated that cancelling a generation with `Ctrl+C` clears the composer, losing complex prompts. The community is actively discussing implementing a rollback mechanism to restore the input text for editing.
4. **Windows Global Install Freezes at "Working" ([#765](https://github.com/Hmbown/DeepSeek-TUI/issues/765))**
   *Open.* A critical bug blocking Windows adoption where `npm install -g` results in the TUI hanging indefinitely in a "Working" state upon sending the first message.
5. **Display Errors in iTerm2 ([#1147](https://github.com/Hmbown/DeepSeek-TUI/issues/1147))**
   *Open.* Visual bugs reported on iTerm2 involving broken text arrangement, highlighting persistent rendering challenges across different terminal emulators.
6. **JSON-RPC Incompatibility with Zed Editor ([#1696](https://github.com/Hmbown/DeepSeek-TUI/issues/1696))**
   *Closed.* A specific type mismatch where the ACP server returns an integer `id` while Zed editor v1.2.6+ requires a string, breaking editor integrations.
7. **Parallel Agent Execution Timeout & UI Glitches ([#1679](https://github.com/Hmbown/DeepSeek-TUI/issues/1679))**
   *Open.* Executing multiple SSE sub-agents causes a 45-second timeout on Windows 11, degrading to serial execution and corrupting the TUI layout.
8. **Sub-agent Data Loss ([#1738](https://github.com/Hmbown/DeepSeek-TUI/issues/1738))**
   *Open.* Opened by the maintainer (`Hmbown`), this highlights architectural limitations where parent agents only receive compressed summaries from sub-agents, discarding crucial structured analysis data.
9. **Hardcoded `cmd.exe` Dispatcher on Windows ([#1779](https://github.com/Hmbown/DeepSeek-TUI/issues/1779))**
   *Open.* A deep dive into how hardcoded `cmd.exe` calls break quoting and execution for users operating in PowerShell, `pwsh`, or WSL environments.
10. **WSL2 Blank Screen on Startup ([#1773](https://github.com/Hmbown/DeepSeek-TUI/issues/1773))**
    *Open.* A headless/WSL2 bug where `arboard::Clipboard` blocks the X11 socket indefinitely during init, freezing the TUI before the event loop even starts.

## 4. Key PR Progress
1. **feat: add ShellDispatcher for shell-agnostic execution ([PR #1781](https://github.com/Hmbown/DeepSeek-TUI/pull/1781))**
   Introduces a central abstraction layer to replace hardcoded `cmd`/`sh` calls. A massive architectural improvement for cross-platform stability.
2. **fix(tui): preserve prefix cache while pruning tool results ([PR #1514](https://github.com/Hmbown/DeepSeek-TUI/pull/1514))**
   *Closed/Merged.* Directly addresses the cache hit rate issues by intelligently pruning old tool results newest-to-oldest without breaking the prefix cache.
3. **fix(tui): restore cancelled prompt on ctrl-c ([PR #1764](https://github.com/Hmbown/DeepSeek-TUI/pull/1764))**
   Highly requested UX fix. Records the active prompt and restores it to the composer if the user presses `Ctrl+C` or `ESC`.
4. **feat: add real-time token output speed chip to footer ([PR #1756](https://github.com/Hmbown/DeepSeek-TUI/pull/1756))**
   Adds a tokens-per-second indicator to the TUI footer during streaming, giving users real-time performance feedback.
5. **feat(init): LLM-powered codebase analysis for AGENTS.md generation ([PR #1762](https://github.com/Hmbown/DeepSeek-TUI/pull/1762))**
   Upgrades the `/init` command to dynamically analyze the directory tree, `Cargo.toml`, and git context to generate a tailored `AGENTS.md` instead of relying on static templates.
6. **fix: defer clipboard init to avoid blocking startup ([PR #1772](https://github.com/Hmbown/DeepSeek-TUI/pull/1772))**
   Solves the WSL2 startup hang by lazy-loading clipboard operations with a 500ms timeout, bypassing the missing X11 server issue.
7. **feat(tui): expose subagent model config ([PR #1769](https://github.com/Hmbown/DeepSeek-TUI/pull/1769))**
   Allows users to explicitly configure which AI model sub-agents use during parallel execution, rather than defaulting to the main agent's model.
8. **feat(web): add Metaso as a web search provider ([PR #1766](https://github.com/Hmbown/DeepSeek-TUI/pull/1766))**
   Diversifies search capabilities by integrating Metaso AI Search, reducing reliance on blocked/unreliable providers like DDG and Bing.
9. **feat(tui): add full-screen thinking stream ([PR #1755](https://github.com/Hmbown/DeepSeek-TUI/pull/1755))**
   Introduces a `/thinking` command that opens a dedicated full-terminal view for monitoring long reasoning streams without UI squishing.
10. **fix: stop RUST_LOG from leaking tracing messages into TUI ([PR #1776](https://github.com/Hmbown/DeepSeek-TUI/pull/1776))**
    Resolves a frustrating debugging issue on Windows where `RUST_LOG` environment variables would print raw traces over the TUI alt-screen.

## 5. Feature Request Trends
*   **Advanced Agent Orchestration & Visibility:** Users want deeper control over multi-agent setups. This includes configuring sub-agent models explicitly ([#1768](https://github.com/Hmbown/DeepSeek-TUI/issues/1768)), preventing data loss during agent-to-agent summarization ([#1738](https://github.com/Hmbown/DeepSeek-TUI/issues/1738)), and full-screen views for agent thinking processes.
*   **Cross-Platform Shell Awareness:** A massive trend is moving away from "bash-centric" execution. Users are requesting TUI awareness of the host shell environment (PowerShell, WSL, Zsh) and AI generation that adapts shell-specific syntax accordingly ([#1754](https://github.com/Hmbown/DeepSeek-TUI/issues/1754)).
*   **Input Safety & State Recovery:** Developers are asking for stronger guarantees regarding prompt inputs. The ability to undo accidental clears, restore prompts after cancelling a generation, and prevent text loss from terminal interactions (like mouse scrolling) is highly requested ([#1757](https://github.com/Hmbown/DeepSeek-TUI/issues/1757), [#1771](https://github.com/Hmbown/DeepSeek-TUI/issues/1771), [#1778](https://github.com/Hmbown/DeepSeek-TUI/issues/1778)).

## 6. Developer Pain Points
*   **The Windows/WSL2 Experience is Broken:** The most prominent frustration today is the fragmented Windows experience. Developers report hardcoded `cmd.exe` limitations, deadlocks during multi-turn agent runs, and broken clipboard initialization freezing the app on WSL/headless setups.
*   **Unreliable Web Search Integrations:** The built-in search tools (`web_search`, `web.run`) are currently practically unusable due to DuckDuckGo bot-challenges and Bing returning spam, breaking agentic workflows that rely on web fetching ([#964](https://github.com/Hmbown/DeepSeek-TUI/issues/964)).
*   **Cache Inefficiency:** Devs are actively comparing DeepSeek-TUI against competitor wrappers and noticing worse prefix-cache hit rates, leading to slower iterations and wasted context windows ([#1177](https://github.com/Hmbown/DeepSeek-TUI/issues/1177)).

</details>