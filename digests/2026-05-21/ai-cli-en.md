# AI CLI Tools Community Digest 2026-05-21

> Generated: 2026-05-20 22:27 UTC | Tools covered: 9

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

# AI Developer Tools Ecosystem: Cross-Tool Comparative Analysis (2026-05-21)

## 1. Ecosystem Overview
The AI CLI tools landscape is undergoing rapid maturation, shifting from simple prompt-response interfaces to complex, autonomous agentic systems. Today's digests reveal a sector heavily focused on architectural overhauls, platform stability (specifically Windows/WSL), and the foundational requirements for long-running background agents. Major players like GitHub Copilot and OpenAI Codex are leading feature releases with enterprise integrations and autonomous goals, while emerging tools prioritize modular plugin systems and local model support. However, the entire ecosystem shares a common growing pain: managing complex context windows, preventing memory leaks, and hardening the interactions between the AI agent and the host operating system's terminal environments.

## 2. Activity Comparison
| Tool | Releases | Hot Issues Tracked | Active PRs | Primary Focus |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | None (v2.1.145) | 10 | 5 | Model behavior regression, plugin stability |
| **OpenAI Codex** | v0.132.0 (Stable) | 10 | 10 | Auth hardening, mobile integration, context compaction |
| **Gemini CLI** | None | 10 | 10 | Shell/PTY crashes, AST codebase navigation |
| **GitHub Copilot CLI** | v1.0.51 | 10 | 0 (Patch cycle) | WSL/Platform regressions, MCP auth |
| **Kimi Code CLI** | None (v1.44.0) | 5 | 4 | MCP integration, context dilution |
| **OpenCode** | v1.15.6 | 10 | 10 | Provider refactoring, desktop app stability |
| **Pi** | v0.75.4 | 10 | 10 | Native provider support, Windows/file locking |
| **Qwen Code** | None (Failed nightly) | 10 | 10 | Daemon architecture, V8 memory OOM errors |
| **DeepSeek TUI** | None (v0.8.40 imminent) | 10 | 10 | Rust runtime pluggability, Windows TUI freezes |

## 3. Shared Feature Directions
*   **Windows and WSL Hardening:** Almost every tool is currently battling terminal UI (TUI) freezes, path resolution errors, and PTY hangs on Windows and WSL2 (Copilot CLI, Gemini CLI, DeepSeek TUI, Pi). As AI coders become standard dev tools, cross-platform terminal parity is a mandatory baseline.
*   **Advanced Context & Memory Management:** Teams are hitting the limits of LLM context windows in extended agentic workflows. There is a universal demand for better compaction, AST-aware code reading to save tokens (Gemini, OpenCode), and fixing severe memory leaks (Qwen Code, Pi, OpenAI Codex).
*   **MCP (Model Context Protocol) Stabilization:** Moving beyond the initial hype, developers are demanding reliable MCP integrations. Shared requirements include persistent auth (Copilot CLI), fixing infinite CPU loops on broken pipes (Claude Code), and proactive tool invocation (Kimi Code).
*   **Daemon / Headless Architectures:** To support CI/CD and background execution, tools are shipping HTTP/SSE daemon bridges. Qwen Code is mapping out a comprehensive daemon mode, while OpenCode and OpenAI Codex are refining non-interactive, headless execution pipelines.

## 4. Differentiation Analysis
*   **Claude Code** is uniquely focused on *model behavior and alignment* within the CLI. Issues like "self-identified blocking gaps" and "cross-session contamination" highlight the technical complexities of managing an autonomous, highly-verbose reasoning model.
*   **OpenAI Codex** and **GitHub Copilot** are leveraging their massive ecosystems to push *omni-platform presence*, focusing heavily on mobile-to-desktop remote control, complex cloud auth states, and enterprise policy enforcement in the CLI.
*   **Gemini CLI**, **DeepSeek TUI**, and **Qwen Code** are leading the charge in *deep architectural refactoring*, specifically regarding how the CLI tools execute code and manage memory. DeepSeek's Rust-based tool pluggability, Gemini's AST integration, and Qwen's Node.js V8 memory management indicate a focus on core runtime performance.
*   **OpenCode** and **Pi** are positioning themselves as *highly composable, provider-agnostic gateways*. Their development focuses heavily on seamless multi-region routing, custom provider facades, and allowing users to easily swap models (like local llama.cpp) while avoiding vendor lock-in.

## 5. Community Momentum & Maturity
*   **Rapid Iterators (Codex, Copilot, OpenCode, DeepSeek TUI):** These communities are pushing high volumes of PRs and rapid patch cycles. Copilot and Codex show the hallmarks of large, commercially-backed engineering teams pushing features (like Python SDKs and slash commands) while simultaneously fighting platform regressions at scale.
*   **Architecturally Maturing (Qwen, Pi, Gemini):** These communities are pausing on daily releases to merge foundational PRs. Qwen's work on daemon architecture and Pi's focus on supply-chain hardening (shrinkwraps) indicate projects transitioning from scrappy tools to enterprise-grade platforms.
*   **Deep-Dive Researchers (Claude, Kimi):** The community surrounding Claude Code is remarkably focused on the theoretical mechanics of the AI agent (e.g., context drift and cognitive load). Kimi's community mirrors this with deep dives into context dilution, suggesting a user base heavily stress-testing long-context models.

## 6. Trend Signals
1.  **The Context Window is the New Battleneck:** Simply stuffing files into prompts is failing. The emergence of AST-aware tools, union-find compaction algorithms, and aggressive OOM fixes signals that *intelligent context routing* is the next major frontier for AI coding.
2.  **Agent Autonomy Requires Guardrails:** As CLIs adopt "yolo" modes and autonomous goals, developers are demanding "runaway protection" (Qwen Code) and native blocks against destructive commands (Gemini CLI) to prevent autonomous agents from breaking production systems.
3.  **Terminal Environments are Brittle:** The sheer volume of TUI freezes, IME deadlocks (DeepSeek TUI), and clipboard failures (OpenCode) shows that modern web-tech-based TUI frameworks still struggle with the nuances of low-level OS terminal environments.
4.  **Cost & Token Transparency:** With the introduction of cost-tip commands (Copilot) and aggressive bug reports regarding hidden reasoning tokens (DeepSeek TUI), developers are highly sensitive to invisible token waste and demand exact cost tracking for cache reads and hidden prompts.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of: 2026-05-21 | Source: [github.com/anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking
*Based on community engagement, revision longevity, and thematic impact across Pull Requests.*

1. **n8n Workflow Builder & Debugger** ([PR #190](https://github.com/anthropics/skills/pull/190))
   **Functionality:** A suite of production-tested community skills including `n8n-builder` for creating automation workflows from scratch and `n8n-debugger` for troubleshooting them, alongside a `faf-expert` skill for persistent project context.
   **Status:** `[OPEN]` (Active since Dec 2025, last updated May 2026)
   **Highlights:** Highly anticipated due to the rising demand for AI-driven workflow automation. Its long open window suggests active iteration.

2. **AppDeploy: Full-Stack Web Deployment** ([PR #360](https://github.com/anthropics/skills/pull/360))
   **Functionality:** Enables Claude to deploy and manage full-stack web applications directly to public URLs via AppDeploy.ai, handling the entire lifecycle from status checks to versioning.
   **Status:** `[OPEN]` (Last updated May 2026)
   **Highlights:** Represents a massive leap toward making Claude a complete DevOps agent, bridging the gap between code generation and live deployment.

3. **AURELION Cognitive & Memory Suite** ([PR #444](https://github.com/anthropics/skills/pull/444))
   **Functionality:** A structured cognitive framework (kernel, advisor, agent, memory) providing AI agents with "5-floor" structured thinking templates and persistent professional knowledge management.
   **Status:** `[OPEN]` (Active since Feb 2026)
   **Highlights:** Tackles the complex challenge of AI context degradation, serving as a more structured alternative to simple memory prompts.

4. **ServiceNow Platform Assistant** ([PR #568](https://github.com/anthropics/skills/pull/568))
   **Functionality:** A broad enterprise skill covering ITSM, SecOps, ITAM, HRSD, and IntegrationHub, designed to make Claude an expert assistant for the ServiceNow ecosystem.
   **Status:** `[OPEN]` (Active since March 2026)
   **Highlights:** Highlights a strong community push for enterprise-grade, platform-specific skills tailored for corporate IT environments.

5. **Document Typography Quality Control** ([PR #514](https://github.com/anthropics/skills/pull/514))
   **Functionality:** Prevents common typographic errors in AI-generated documents, such as orphaned words, stranded widow headers, and numbering misalignment.
   **Status:** `[OPEN]` (Created March 2026)
   **Highlights:** Solves a ubiquitous "last-mile" quality issue in AI-generated outputs, appealing to users preparing formal documentation.

6. **Skill Meta-Validation & Security** ([PR #83](https://github.com/anthropics/skills/pull/83))
   **Functionality:** Introduces two "meta skills" (`skill-quality-analyzer` and `skill-security-analyzer`) to evaluate the structural integrity and security of community-created skills.
   **Status:** `[OPEN]` (Active since Nov 2025)
   **Highlights:** Essential for ecosystem maturity, addressing the growing need for security and standardization as the number of community skills explodes.

---

## 2. Community Demand Trends
*Distilled from the most active Issues, here is what the community is asking for:*

* **Organization-Wide Skill Sharing & Admin Controls:** The top user demand ([Issue #228](https://github.com/anthropics/skills/issues/228)) is the ability to share approved skills across enterprise teams. Users currently resort to manually sending `.skill` files via Slack.
* **Exposing Skills as MCPs:** There is a strong architectural push ([Issue #16](https://github.com/anthropics/skills/issues/16)) to convert Skills into standardized Model Context Protocol (MCP) tools, allowing programmatic execution and standardized software interaction.
* **Reliability & Bug Fixes in Core Infrastructure:** Users are experiencing severe friction with skills disappearing ([Issue #62](https://github.com/anthropics/skills/issues/62)) and `run_eval.py` failing to trigger skills 100% of the time ([Issue #556](https://github.com/anthropics/skills/issues/556)). The community urgently wants stable execution guarantees.
* **Context Window Optimization:** For database and heavy-data workflows, users are asking for MCP data compression or chunking limits ([Issue #1102](https://github.com/anthropics/skills/issues/1102)) to prevent context congestion.
* **Security & Namespace Integrity:** The community is concerned about trust boundaries, raising alarms that unofficial community skills are being distributed under the `anthropic/` namespace ([Issue #492](https://github.com/anthropics/skills/issues/492)).

---

## 3. High-Potential Pending Skills
*Active PRs addressing critical gaps that are likely to be merged soon:*

* **Robust OpenDocument (ODT/ODS) Handling** ([PR #486](https://github.com/anthropics/skills/pull/486)): Created by GitHubNewbie0, this enables native creation, parsing, and HTML conversion of LibreOffice/OpenDocument files, crucial for users outside the Microsoft ecosystem. 
* **Apple macOS Automation via AppleScript** ([PR #806](https://github.com/anthropics/skills/pull/806)): Replaces unreliable screenshot-based computer use with direct, tiered `osascript` commands for native system and app control on macOS.
* **Testing Patterns Skill** ([PR #723](https://github.com/anthropics/skills/pull/723)): A comprehensive testing philosophy and execution guide (Testing Trophy model, React component testing, edge cases) to help Claude write test suites reliably.
* **Critical DocX & PDF Bug Fixes** ([PR #538](https://github.com/anthropics/skills/pull/538) & [PR #541](https://github.com/anthropics/skills/pull/541)): Authored by Lubrsy706, these fix dangerous case-sensitivity bugs in PDFs and `w:id` collision corruptions in DOCX tracked changes, ensuring document generation skills are enterprise-ready.

---

## 4. Skills Ecosystem Insight
**The community's most concentrated demand is for enterprise-grade security, seamless organizational sharing, and standardized API exposure (MCP) to transition Claude Code from a standalone coding assistant into a governed, secure, and collaborative enterprise agent.**

---

# Claude Code Community Digest — 2026-05-21

## 1. Today's Highlights

No new releases were published in the last 24 hours. Activity was concentrated in the issue tracker, where a cluster of **model behavior regression reports** gained significant traction—particularly around self-identified blocking gaps not gating output and a constellation of "drifted register" bugs from a single prolific reporter. Plugin and packaging surfaces also saw fresh bug reports, including a CPU-spinning MCP plugin and a stale-daemon ENOENT after version upgrades.

---

## 2. Releases

No new releases in the last 24 hours. The current published version remains **2.1.145** per `npm view`.

---

## 3. Hot Issues

| # | Issue | Why it matters |
|---|-------|----------------|
| 1 | [#60226](https://github.com/anthropics/claude-code/issues/60226) — *Self-identified blocking gaps don't gate output* | Claude explicitly states its analysis is "unfounded" yet continues producing output anyway. 33 comments; touches core model reliability. Community sees this as structurally distinct from prior "act-first bias" bugs. |
| 2 | [#60188](https://github.com/anthropics/claude-code/issues/60188) — *Agent verbosity inversely proportional to cognitive load* | Long mechanical tasks produce excessive permission prompts and output; cognitively dense work gets less. 23 comments. Highlights a misallocation of model attention that impacts real-world productivity. |
| 3 | [#59848](https://github.com/anthropics/claude-code/issues/59848) — *Interactive sessions classified as background jobs post-2.1.139* | After the agent-view release, all sessions—including interactive terminal launches—are tagged `template: "bg"`, firing background-only guards on foreground work. Has repro; directly blocks normal CLI usage. |
| 4 | [#60886](https://github.com/anthropics/claude-code/issues/60886) — *Telegram MCP plugin: infinite CPU loop on EPIPE* | Broken stdio pipe triggers an uncaught exception storm that spirals into 100% CPU. Has repro. Affects anyone using the Telegram plugin on Linux. |
| 5 | [#60634](https://github.com/anthropics/claude-code/issues/60634) — *Stale background daemons cause ENOENT after Homebrew upgrade* | Upgrading via Homebrew leaves old daemons running; new agents fail with `posix_spawn` ENOENT pointing to the deleted old binary path. Has repro; likely affects all Homebrew users on upgrade. |
| 6 | [#60234](https://github.com/anthropics/claude-code/issues/60234) — *Failure patterns transmit between instances via transcript reading* | One Claude instance's failure modes propagate to fresh instances that read the same transcript. 7 comments; raises concerns about cross-session contamination. |
| 7 | [#60884](https://github.com/anthropics/claude-code/issues/60884) — *Plugin install rejects valid `skills[]` object-form* | Marketplace plugins using the documented object-form for skill bindings are rejected with a misleading "Update Claude Code" error on the latest version. Has repro on WSL. |
| 8 | [#60601](https://github.com/anthropics/claude-code/issues/60601) — *Read tool fails on every local image (400 error)* | The `Read` tool consistently returns `400: Could not process image` for any local PNG/JPEG. Has repro; blocks vision-based workflows entirely. |
| 9 | [#59243](https://github.com/anthropics/claude-code/issues/59ude-agent-sdk) — *Agent SDK `query()` stream hangs 15-30 min* | After the last tool call, the async generator stalls for 15-30 minutes before emitting `ResultMessage`. Directly impacts production Agent SDK pipelines on Linux/EC2. |
| 10 | [#60886](https://github.com/anthropics/claude-code/issues/33041) — *Remote Control disconnects frequently* | Long-standing issue (22 👍); `/remote-control` sessions drop every few minutes on macOS. Remains open with 12 comments. |

**Also notable:**
- [#36151](https://github.com/anthropics/claude-code/issues/36151) — Multi-account switching in Claude Mobile (247 👍, 65 comments) continues to be the highest-voted open feature request, though marked `invalid` for this repo.
- [#60988](https://github.com/anthropics/claude-code/issues/60988) — Another false-positive safety block, this time on hard-SF fiction Q&A; part of a growing class (#55975, #60372).

---

## 4. Key PR Progress

Only 5 PRs saw updates today; none were merged. Notable entries:

| PR | Description | Status |
|----|-------------|--------|
| [#60928](https://github.com/anthropics/claude-code/pull/60928) | **docs: add README for security-guidance plugin** — Fills the gap as the only plugin missing documentation; covers monitored patterns, hook behavior, deduplication, and env vars. | Open |
| [#60732](https://github.com/anthropics/claude-code/pull/60732) | **docs: polish plugins README wording** — Small but targeted copy improvement to the plugin ecosystem description for better first-impression clarity. | Open |
| [#60427](https://github.com/anthropics/claude-code/pull/60427) | **docs: use standard GitHub capitalization in README** — Normalizes product-name casing in the top-level README. | Open |
| [#60813](https://github.com/anthropics/claude-code/pull/60813) | **Fix: Excessive token consumption on initial prompt** — Community-submitted attempt to address token overuse; appears to be a bounty-style submission referencing #56136. | Open |
| [#58673](https://github.com/anthropics/claude-code/pull/58673) | *(Empty/spam PR — single character "s" as title and body)* | Open |

---

## 5. Feature Request Trends

Three clear themes emerge from today's issue corpus:

1. **Session organization & project grouping** — The single most-requested UX feature. Multiple issues (#22617, #38036, #59982, #60954) ask for folder-based or project-directory-mirrored session grouping in the Desktop sidebar. Users working across many projects find the flat chronological list unworkable. Two were closed as duplicates, signaling the team is aware but hasn't shipped a solution yet.

2. **Model self-regulation & register drift** — A sophisticated cluster from a single reporter (beq00000) covering context-budget estimation (#59514), compact compounding drift (#60265), operator interventions failing to exit drift (#60248), and cross-session priming via memory artifacts (#60352). Taken together, these describe a request for **stronger model-state isolation and honest self-assessment gates**.

3. **Resilient session & connection lifecycle** — Auto-restore sessions across VS Code reloads (#60937), persistent remote-control connections (#33041), and symlink-aware session resume (#46342). Users want sessions that survive environment changes and editor restarts without manual recovery.

---

## 6. Developer Pain Points

- **Post-2.1.139 regressions are piling up.** The agent-view release introduced background-job classification for interactive sessions (#59848), stale-daemon ENOENT errors (#60634), and editor-tab lockout on reload (#60937). These are not edge cases—they affect core CLI and Desktop workflows.
- **Plugin & MCP stability gaps.** An EPIPE infinite loop (#60886), rejected valid plugin manifests (#60884), and image-read failures (#60601) suggest the plugin/MCP surface needs harderening, especially around error recovery on broken transports.
- **Safety system false positives remain a recurring frustration.** Another report of content being blocked during benign creative work (#60988), adding to an existing class of issues. Users report that retries re-trigger the same block, offering no recovery path.
- **Model behavior consistency under long sessions.** Multiple issues describe Claude drifting into verbose, permission-heavy, or self-contradictory states as sessions grow—then failing to recover even after operator intervention or `/compact`. This is the most abstract but arguably highest-impact pain point for power users running extended agentic workflows.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-21

A daily overview of the latest releases, active issues, and pull requests from the `openai/codex` repository.

## 1. Today's Highlights
Codex CLI officially tagged **v0.132.0**, introducing first-class Python SDK authentication and streamlined text-only turn APIs. Simultaneously, the team merged the PR to **promote the "goals" feature out of experimental mode**, making autonomous goal continuation generally available by default. Behind the scenes, heavy engineering effort is being directed toward stabilizing Windows rendering, hardening the mobile Remote Control pairing flow, and improving context compaction reliability.

## 2. Releases
*   **rust-v0.133.0-alpha.1**: Pre-release cut for testing upcoming Rust core changes.
*   **rust-v0.132.0** (Stable):
    *   **First-Class Python SDK Auth:** Supports API key login, ChatGPT browser/device-code flows, account inspection, and logout APIs ([#23093](https://github.com/openai/codex/issues/23093)).
    *   **Text-Only Turn APIs:** Easier workflow allowing a plain string as input for text-only workflows.

## 3. Hot Issues
1.  **[#9634](https://github.com/openai/codex/issues/9634) [CLOSED] Auth Refresh Token Failure:** A highly commented (44 comments) issue where user access tokens fail to refresh. Highlights ongoing stability challenges in the auth flow.
2.  **[#10384](https://github.com/openai/codex/issues/10384) [CLOSED] `request_user_input` in code mode:** A massive community favorite (+111 👍) requesting a tool for structured Q&A in the CLI to resolve ambiguity without free-form chat.
3.  **[#9926](https://github.com/openai/codex/issues/9926) [OPEN] Interactive `ask_user_question` tool:** A sibling enhancement to the above, suggesting a tabbed questionnaire UI (+32 👍).
4.  **[#23367](https://github.com/openai/codex/issues/23367) [OPEN] v0.131 regression: Wrong folder startup:** The CLI starts in the wrong directory. A high-priority regression affecting basic workflow.
5.  **[#22802](https://github.com/openai/codex/issues/22802) & [#23078](https://github.com/openai/codex/issues/23078) Mobile Remote Control Pairing Fails:** Users are reporting "Secure setup failed" errors and inability to re-pair iOS devices with macOS desktops.
6.  **[#22898](https://github.com/openai/codex/issues/22898) [OPEN] Mobile shows desktop offline:** The iOS app silently fails to reconnect to running desktop instances (+29 👍).
7.  **[#23340](https://github.com/openai/codex/issues/23340) [OPEN] `/goal` logging death loop:** A performance regression where long-running loops produce 34 GB of logs in a single day via nested tracing spans.
8.  **[#23628](https://github.com/openai/codex/issues/23628) [CLOSED] Windows Git rendering broken:** Complete TUI breakdown on Windows when Git is detected, highlighting ongoing cross-platform terminal challenges.
9.  **[#23694](https://github.com/openai/codex/issues/23694) [OPEN] Compact task failure in v0.132.0:** Context compaction fails with an "array too long" error right after upgrading.
10. **[#22532](https://github.com/openai/codex/issues/22532) [OPEN] Windows OneDrive conflict:** The Desktop app defaults to OneDrive-backed Documents folders, causing sync/read issues.

## 4. Key PR Progress
1.  **[#23732](https://github.com/openai/codex/pull/23732) [CLOSED] Goals feature GA:** Promotes `goals` and autonomous goal continuation out of experimental mode to be generally available by default.
2.  **[#23585](https://github.com/openai/codex/pull/23585) Auto-compaction death-loop guard:** Prevents infinite cycles of execution and compaction when context remains above the limit.
3.  **[#23756](https://github.com/openai/codex/pull/23756) & [#23768](https://github.com/openai/codex/pull/23768) Bundled Zsh Fork:** Packages a pre-built zsh fork and updates the `PATH` so scripts reliably use the packaged shell environment.
4.  **[#23563](https://github.com/openai/codex/pull/23563) & [#23546](https://github.com/openai/codex/pull/23546) ChatGPT Auth Hardening:** Refreshes near-expiry access tokens on startup and treats `token_revoked` 401s as terminal sessions.
5.  **[#23748](https://github.com/openai/codex/pull/23748) Automatic SQLite DB Recovery:** Adds built-in recovery for corrupted SQLite databases, addressing a rising number of user reports.
6.  **[#23763](https://github.com/openai/codex/pull/23763) `codex exec` approval policy fix:** Preserves the auto-review approval policy for headless runs instead of forcing it to "never".
7.  **[#23715](https://github.com/openai/codex/pull/23715) Windows Sandbox Profiles:** Passes native permission profiles to the elevated Windows runner, fixing a legacy compatibility layer issue.
8.  **[#23492](https://github.com/openai/codex/pull/23492) ChatGPT Integrity State Rotation:** Proactively rotates integrity-state envelopes in background traffic, improving auth security.
9.  **[#23737](https://github.com/openai/codex/pull/23737) MCP Plugin IDs:** Injects the owning `plugin_id` into MCP tool-call items to allow better filtering at the plugin level.
10. **[#23494](https://github.com/openai/codex/pull/23494) Invalid Image Fix:** Prevents malformed image payloads from permanently poisoning resumed threads.

## 5. Feature Request Trends
*   **Structured User Input in CLI:** Developers strongly desire ways for the agent to ask clarifying questions with constrained answers (e.g., `request_user_input`, `ask_user_question`).
*   **Better Context Management:** Users want more control over compaction, specifically requesting features like "Compact context and implement plan" (instead of clearing it) and plugin extension points for custom compaction.
*   **MCP Enhancements:** Inbound MCP notifications to push external events into active sessions remains a highly requested feature for real-time agentic workflows.
*   **Desktop Browser File Uploads:** Support for attaching local files via `<input type="file">` in the Codex Desktop In-App Browser.

## 6. Developer Pain Points
*   **Windows TUI and Sandbox Instability:** The recent CLI versions are suffering from severe rendering regressions (raw ANSI, broken Git formatting) and app crashes on Windows.
*   **Mobile Remote Control Brittleness:** The iOS-to-Mac pairing/reconnection flow is highly fragile, frequently showing "Secure setup failed" or falsely reporting desktops as offline.
*   **Context Compaction Bugs:** Updates in v0.131/0.132 have introduced severe regressions in handling long context, resulting in massive multi-gigabyte log files and "array too long" fatal errors.
*   **Complex Auth States:** Keeping access tokens valid across ChatGPT web, desktop, and API integrations continues to cause confusing rate limits and locked states for users.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-21

A daily briefing for developers tracking the **google-gemini/gemini-cli** repository. 

## 1. Today's Highlights
The Gemini CLI engineering team merged a barrage of critical stability fixes today, focusing heavily on platform-specific shell crashes (Windows/WSL2) and PTY environments. High-priority bugs addressing data corruption during large file rewrites and infinite UI loops caused by model quota exhaustion were resolved via targeted PRs. Additionally, significant background work continues on upgrading the agent's internal codebase navigation capabilities through AST-aware tooling.

## 2. Releases
**None.** No new official releases were published in the last 24 hours. The repository remains on its latest stable build as the team integrates recent high-priority patches.

## 3. Hot Issues
1. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell execution hangs on "Waiting input"** 👍 3: A high-priority bug where the CLI indefinitely hangs after completing simple shell commands. Highly frustrating for users as it requires manual termination of active processes.
2. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent false "success" on MAX_TURNS** 👍 2: When a subagent hits its maximum turn limit, it incorrectly reports a "GOAL" success, hiding the interruption from the user and breaking automated workflows.
3. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory Secret Redaction** 👍 0: A security-focused issue highlighting that Auto Memory extracts transcript content *before* the model has a chance to redact secrets, posing potential compliance risks.
4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST-Aware File Reading & Search** 👍 1: An Epic issue tracking the integration of AST (Abstract Syntax Tree) tools to allow the CLI to read code more precisely, reducing token waste and misaligned reads.
5. **[#20675](https://github.com/google-gemini/gemini-cli/issues/20675) Interactive shell arrow keys crash on Windows** 👍 0: A persistent Windows 10 bug where using arrow keys in external subshells (like `pnpm create vite`) breaks the TTY display.
6. **[#18023](https://github.com/google-gemini/gemini-cli/issues/18023) pnpm auto-update loops** 👍 0: Users installing globally via `pnpm` are trapped in an auto-update loop because the updater assumes an NPM installation path.
7. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) Agent executes destructive git/DB commands** 👍 1: Users are requesting built-in guardrails to prevent the agent from running irreversible commands like `git reset --force` or dropping databases without explicit safety checks.
8. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 400 Error with > 128 Tools** 👍 0: Registering too many external tools hits API limits, highlighting the need for smarter dynamic tool scoping by the agent.
9. **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571) Tmp script pollution** 👍 0: When restricted to shell execution, the model litters working directories with temporary edit scripts, creating repo cleanup overhead.
10. **[#27278](https://github.com/google-gemini/gemini-cli/issues/27278) Symlink path session fragmentation** 👍 0: Navigating to a project via a symlink creates a completely separate session store, breaking session continuity for developers using linked paths.

## 4. Key PR Progress
1. **[#23505](https://github.com/google-gemini/gemini-cli/pull/23505) fix(windows): resolve interactive shell arrow-key navigation**: Merged. Fixes the long-standing Windows PSReadLine TTY interference by adjusting how the PTY handles terminal modes. 
2. **[#27320](https://github.com/google-gemini/gemini-cli/pull/27320) fix(core): mitigate data corruption during write_file**: Open. Introduces safeguards to prevent the LLM from corrupting massive text blocks (e.g., inline base64 images) due to token output limits.
3. **[#27315](https://github.com/google-gemini/gemini-cli/pull/27315) fix(core): dynamic fallback routing for exhausted quota**: Merged. Resolves an infinite UI dialog loop by implementing dynamic fallbacks when hardcoded utility models (like `llm-edit-fixer`) hit API quota limits.
4. **[#27267](https://github.com/google-gemini/gemini-cli/pull/27267) fix(core): prevent SIGHUP kills in PTY environments**: Merged. Prevents unexpected process kills in WSL2, Kitty, and Alacritty by properly handling SIGHUP signals in PTY environments.
5. **[#27211](https://github.com/google-gemini/gemini-cli/pull/27211) fix(core): centralize path validation**: Merged. Prevents system crashes (like `ENAMETOOLONG`) by consolidating path resolution and sanitizing malformed outputs from the LLM.
6. **[#22748](https://github.com/google-gemini/gemini-cli/pull/22748) fix(core): auto-detect pnpm global path**: Merged. Resolves the pnpm update loop by correctly detecting macOS and Windows global installation paths.
7. **[#27323](https://github.com/google-gemini/gemini-cli/pull/27323) fix(cli): refresh logger after session clear**: Open. Fixes a bug where `/clear` creates a new session ID, but the background logger continues writing to the stale session file.
8. **[#24736](https://github.com/google-gemini/gemini-cli/pull/24736) feat(core): union-find context compaction**: Open. An impressive architectural PR implementing a union-find clustering algorithm to compact agent history, optimizing long-running context windows.
9. **[#27292](https://github.com/google-gemini/gemini-cli/pull/27292) fix(cli): restore non-interactive stdin raw mode**: Open. Ensures that Ctrl+C cancellation safely restores terminal stdin raw mode during process exit, preventing terminal state corruption.
10. **[#25030](https://github.com/google-gemini/gemini-cli/pull/25030) fix(core): fallback to system rg on non-FHS**: Merged. Fixes binary execution crashes on Android/Termux by prioritizing the system `ripgrep` over incompatible managed binaries.

## 5. Feature Request Trends
*   **AST-Aware Agent Tools:** A strong push from maintainers and the community to integrate AST-aware CLIs (like AST grep) for codebase mapping, allowing the agent to read specific method bounds rather than entire files.
*   **Agent Behavior Guardrails:** High demand for native safety mechanisms to explicitly block destructive shell behaviors (e.g., force-pushing to git, modifying production DB schemas) without explicit user overrides.
*   **Backgroundable Local Subagents:** Users want the ability to send local subagents (running tests, linters) to the background using shortcuts like `Ctrl+B` so they can continue interacting with the main agent.

## 6. Developer Pain Points
*   **Environment/Shell Instability:** A massive chunk of recent issues and PRs are dedicated to fixing terminal flickering, PTY hangs, shell startup race conditions, and cross-platform TTY quirks. The CLI's interaction layer with local OS shells remains its most fragile component.
*   **Auto-Memory & Tool Reliability:** Developers are experiencing friction with the new Auto Memory system silently dropping memory patches and logging insecure data. Additionally, hitting tool limit caps (>128) causes hard crashes, indicating the tooling registry needs dynamic scaling.
*   **Workspace Pollution:** Developers report frustration with the agent creating temporary files in random directories when forced to use shell execution, requiring manual workspace cleanup before commits.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-21

## 1. Today's Highlights
Version 1.0.51 was released yesterday alongside several rapid patches, introducing significant capabilities like session ID resumption, a new `/security-review` slash command, and MCP hook controls. The community remains highly active around platform-specific regressions introduced in recent updates, particularly WSL startup performance drops, input loss in external editors (vim), and Linux/GNOME Wayland paste breakages.

## 2. Releases

**[v1.0.51](https://github.com/github/copilot-cli/releases/tag/v1.0.51)** (2026-05-20)
- Added `--session-id=<id>` flag to resume known sessions or start new sessions with a specific UUID.
- `/remote` commands now respect organization cloud policies and display clear errors when disabled; `/remote` can now be used while the agent is actively working.

**[v1.0.51-3](https://github.com/github/copilot-cli/releases/tag/v1.0.51-3)** (2026-05-20)
- **Added:** `/security-review` slash command for code vulnerability review.
- **Added:** `preMcpToolCall` hook for hook providers to control outgoing MCP request metadata.
- **Added:** `/chronicle cost-tips` subcommand for personalized token usage and cost-reduction recommendations.

**[v1.0.51-2](https://github.com/github/copilot-cli/releases/tag/v1.0.51-2)** (2026-05-20)
- **Improved:** `/memory show` now displays documentation links for managing Copilot Memory.
- **Fixed:** Session naming works correctly for usage-based billing users.
- **Fixed:** Pressing Enter on a highlighted subcommand completion now inserts the selection instead of prematurely submitting the partial command.

## 3. Hot Issues

1. **[WSL startup hang (#3385)](https://github.com/github/copilot-cli/issues/3385)** — 12 comments, 8 👍
   Users on WSL2 report the CLI hangs completely after upgrading to v1.0.49. With significant traction, this appears to be a blocking regression for all WSL users.

2. **[Vim keystrokes dropped in INSERT mode via Ctrl-G (#3401)](https://github.com/github/copilot-cli/issues/3401)** — 6 comments, 4 👍
   Roughly 50% of keystrokes are silently dropped when editing prompts in vim via the Ctrl-G shortcut. A high-impact UX bug for vim users on Linux.

3. **[Sub-agent model opt-out for cost-multiplier guard (#2758)](https://github.com/github/copilot-cli/issues/2758)** — 5 comments, 2 👍
   Feature request to allow sub-agents to honor the model specified in `.agent.md` frontmatter rather than being silently downgraded to the cheapest model. Signals strong demand for fine-grained model control.

4. **[ask_user tool disappeared (#1898)](https://github.com/github/copilot-cli/issues/1898)** — 5 comments, 1 👍
   The `ask_user` tool vanished without notice, breaking interactive agent workflows. Users are asking if this is intentional deprecation or a regression.

5. **[WSL long startup & post-approval blocking (#3408)](https://github.com/github/copilot-cli/issues/3408)** — 5 comments, 2 👍
   Another WSL regression in v1.0.49 causing ~2-minute startup delays and blocking after permission approvals. Likely related to #3385.

6. **[Model selection misalignment crashes Cloud Agent (#2695)](https://github.com/github/copilot-cli/issues/2695)** — 4 comments
   Custom agents crash with a CAPIError 400 when model selection doesn't match the agent spec. Frustrating for agent authors integrating with Copilot Cloud.

7. **[system_notification marker leaks to users (#2918)](https://github.com/github/copilot-cli/issues/2918)** — 4 comments, 1 👍
   Internal markers occasionally render in the user's terminal. A UI polish issue that erodes trust in output fidelity.

8. **[Paste regression on GNOME Wayland (#3414)](https://github.com/github/copilot-cli/issues/3414)** — 2 comments
   Text paste stopped working in the CLI prompt on GNOME Wayland after v1.0.49. Affects all Linux users on modern Wayland sessions.

9. **[NixOS bash tool breakage (#3392)](https://github.com/github/copilot-cli/issues/3392)** — 2 comments, 3 👍
   The Bash tool fails entirely on NixOS with "Failed to start bash process" due to platform-specific assumptions about shell paths.

10. **[MCP re-auth required every session (#2536)](https://github.com/github/copilot-cli/issues/2536)** — 2 comments, 1 👍
    Atlassian MCP server requires full re-authorization on every CLI restart instead of persisting tokens, making MCP workflows impractical.

## 4. Key PR Progress
No pull requests were updated in the last 24 hours. The engineering focus appears to be on the rapid patch cycle (v1.0.51 → v1.0.51-3) addressing bugs and features tracked in the issues above.

## 5. Feature Request Trends

- **Model flexibility for agents:** Multiple issues (#2758, #2792, #2695, #2854) call for per-agent, per-task, and per-step (planning vs. execution) model selection, including support for Google Gemini.
- **MCP improvements:** Users want better MCP server discovery (#2944), persistent auth (#2536), and interactive OAuth fixes (#3418).
- **Session persistence and portability:** Demand is growing for storing session state in project directories (`.copilot/`) rather than ephemeral home directories, particularly for Docker/CI/devcontainer workflows (#3021, #3142).
- **Remote session defaults:** Users want `/remote` mode to be persistently configurable as a default (#3427), avoiding manual activation each session.

## 6. Developer Pain Points

- **v1.0.49 regressions are widespread:** The 1.0.49 release introduced multiple serious regressions affecting WSL (hangs, slow startup), external editors (dropped keystrokes on Windows and Linux), Wayland (paste broken), and NixOS (bash tool failure). Users are pinning to v1.0.48 as a workaround.
- **Silent model downgrades are opaque:** Sub-agents being silently downgraded to cheaper models without warning breaks expected behavior and erodes trust (#2758, #2792).
- **MCP auth is fragile:** Re-authentication on every invocation (#2536), OAuth redirect port regressions (#3418), and path validation errors (#3421) make MCP integrations unreliable in practice.
- **Session file corruption:** Float values in `totalPremiumRequests` corrupt session files (#3432), and session state is lost in ephemeral environments (#3021).
- **Quota enforcement is overzealous:** Users with paid over-quota enabled are still being blocked with 402 errors (#3431), halting workflows unexpectedly.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-21

## 1. Today's Highlights
No new version was released today, but the community remains highly active on the stability and integration front. Four targeted pull requests were opened to address context window budgeting, surrogate sanitization, UI navigation bugs, and documentation inaccuracies. On the issue tracker, MCP (Model Context Protocol) integration problems—ranging from connection UI glitches to silent tool-call failures—dominated the conversation, signaling that external tooling reliability is currently the top concern for users.

## 2. Releases
No new releases were recorded in the last 24 hours. The latest stable version remains **v1.44.0**.

## 3. Hot Issues
*(Only 5 issues were active in the last 24 hours; all are detailed below)*

1. **[Bug] Long conversations ignoring `agent.md` specs** ([#2331](https://github.com/MoonshotAI/kimi-cli/issues/2331))
   *Why it matters:* Users report that in extended sessions, the Kimi-k2.6 model loses focus on instruction files, treating "reading specifications" as background noise. This highlights context window fragmentation and attention degradation over long sessions—a critical flaw for agentic coding workflows.
2. **Docs: Non-functional Hooks example** ([#2330](https://github.com/MoonshotAI/kimi-cli/issues/2330))
   *Why it matters:* The official documentation's example for triggering desktop notifications via Hooks doesn't work. Broken docs create immediate friction for developers trying to implement custom automated workflows.
3. **MCP Startup UI stuck at `0/5 connected`** ([#2328](https://github.com/MoonshotAI/kimi-cli/issues/2328))
   *Why it matters:* A visual bug where the UI fails to update the MCP connection status, even though servers are fully operational. While functional, it severely degrades user trust and makes debugging difficult.
4. **GitNexus MCP fails to auto-call** ([#2329](https://github.com/MoonshotAI/kimi-cli/issues/2329))
   *Why it matters:* Even when properly configured, the agent fails to proactively invoke `gitnexus-cli` for tasks like repository indexing. This suggests a gap in the agent's tool-selection logic for MCP integrations.
5. **Feature Request: `/title` command** ([#1536](https://github.com/MoonshotAI/kimi-cli/issues/1536))
   *Why it matters:* Revisited by the community, this feature asks for manual renaming of auto-generated session titles. It's a quality-of-life request that highlights the need for better multi-session management as CLI usage scales.

## 4. Key PR Progress
*(4 PRs were active in the last 24 hours; all are detailed below)*

1. **fix(kimi): clamp completion budget dynamically** — [PR #2332](https://github.com/MoonshotAI/kimi-cli/pull/2332) by `wbxl2000`
   *Summary:* Replaces the hardcoded `max_tokens = 32000` with a dynamic `max_completion_tokens` calculated against the current context window size. This optimizes token usage and prevents unnecessary truncation or budget overruns.
2. **fix(kosong): sanitize surrogates before Kimi requests** — [PR #2334](https://github.com/MoonshotAI/kimi-cli/pull/2334) by `he-yufeng`
   *Summary:* Introduces sanitization for lone UTF-16 surrogate code units in payloads before sending them to the API. This fixes silent failures when processing binary-like data or malformed text in tool outputs.
3. **fix(web): open archived sessions from sidebar** — [PR #2333](https://github.com/MoonshotAI/kimi-cli/pull/2333) by `he-yufeng`
   *Summary:* Fixes a routing bug where clicking on an archived session from the sidebar would fail to resolve it as the current session, causing the UI to clear unexpectedly.
4. **docs: fix Notification hook matcher example** — [PR #2335](https://github.com/MoonshotAI/kimi-cli/pull/2335) by `he-yufeng`
   *Summary:* Directly addresses Issue [#2330](https://github.com/MoonshotAI/kimi-cli/issues/2330). Replaces the broken `permission_prompt` matcher with functional background-task notification types, restoring the utility of the Hooks documentation.

## 5. Feature Request Trends
Based on recent issue trajectories, developers are leaning heavily toward two feature directions:
*   **Agent Autonomy & MCP Reliability:** Users want seamless, proactive use of MCP tools (e.g., auto-calling GitNexus for repo indexing) rather than requiring manual invocation.
*   **Session Management & Context Control:** Requests like the `/title` command (Issue [#1536](https://github.com/MoonshotAI/kimi-cli/issues/1536)) and complaints about the agent ignoring `agent.md` in long sessions (Issue [#2331](https://github.com/MoonshotAI/kimi-cli/issues/2331)) show a strong desire for better tools to manage, segment, and constrain the AI's focus over time.

## 6. Developer Pain Points
*   **MCP Integration Disconnects:** The most prominent frustration is the "configuration vs. execution" gap in MCPs. Developers spend time configuring tools (like GitNexus), only to find the CLI ignores them or shows inaccurate status indicators (Issues [#2328](https://github.com/MoonshotAI/kimi-cli/issues/2328), [#2329](https://github.com/MoonshotAI/kimi-cli/issues/2329)).
*   **Context Dilution:** In long coding sessions, the model loses adherence to foundational instructions (like `agent.md`), treating them as background noise. This forces developers to repeatedly prompt the AI to stay within predefined guardrails (Issue [#2331](https://github.com/MoonshotAI/kimi-cli/issues/2331)).
*   **Documentation Drift:** The Hooks documentation falling out of sync with the actual API behavior (Issue [#2330](https://github.com/MoonshotAI/kimi-cli/issues/2330)) is a recurring annoyance that breaks automated developer workflows right at the setup phase.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-21

## 1. Today's Highlights

OpenCode shipped **v1.15.6**, introducing a highly-requested built-in diff viewer for the TUI, a new shell mode for `run` prompts, and an on-demand subagent picker to streamline multi-agent workflows. The community is buzzing around a regression affecting OpenAI OAuth login methods and a feature request for **Gemini 3.5 Flash** support following Google I/O. Several foundational PRs opened today target provider API refactoring, session storage v2, and symlink handling—signaling active investment in platform reliability.

---

## 2. Releases

### [v1.15.6](https://github.com/anomalyco/opencode/releases/tag/v1.15.6)

- **TUI Diff Viewer**: Review code changes directly inside the terminal UI, with a collapsible file tree that auto-collapses single-child directories for cleaner navigation.
- **Shell mode for `run`**: Execute shell commands directly from the `run` prompt, blurring the line between agent tasks and system operations.
- **On-demand subagent picker**: Replaces the previous subagent tabs in `run` with a picker that appears only when needed, reducing UI clutter.
- **Plugin resilience**: File load errors in plugins no longer cascade and break the rest of the plugin system.

---

## 3. Hot Issues

1. **[#27905](https://github.com/anomalyco/opencode/issues/27905) — OpenAI OAuth login regression (since 1.14.49)**  
   `opencode auth login` no longer shows ChatGPT Plus/Pro OAuth options, leaving only manual API key entry. Affects paying users relying on browser-based auth. 10 comments, actively discussed.

2. **[#28377](https://github.com/anomalyco/opencode/issues/28377) — Gemini 3.5 Flash support request (👍 14)**  
   Filed the same day Google announced Gemini 3.5 Flash at I/O. Strong community interest (highest 👍 count among recent issues) for first-class model support.

3. **[#13984](https://github.com/anomalyco/opencode/issues/13984) — Copy/paste broken in CLI (👍 19, 38 comments)**  
   A long-running pain point: clipboard operations appear to succeed ("copied to clipboard") but `Ctrl+V` yields nothing. The single most-upvoted issue in this batch.

4. **[#28162](https://github.com/anomalyco/opencode/issues/28162) — ~500ms typing latency in Desktop chat input**  
   The `contenteditable` input on the Electron desktop app introduces severe keystroke latency, swallowing rapid keypresses. Points to a re-render/performance issue in the input layer.

5. **[#28480](https://github.com/anomalyco/opencode/issues/28480) — OpenCode won't start on Windows 11**  
   A silent startup failure with no error output or crash report. Multiple users confirming—potentially a regression in the latest build.

6. **[#28477](https://github.com/anomalyco/opencode/issues/28477) — Desktop beta loses session history until UI state cleared**  
   Sessions vanish from the GUI while remaining intact in storage (`~/.local/share/opencode/`). Workaround involves deleting UI state files, suggesting a state hydration bug.

7. **[#10012](https://github.com/anomalyco/opencode/issues/10012) — Question tool hangs headless `opencode run`**  
   When an agent invokes the question tool in `run --agent` mode, execution halts indefinitely. Critical for CI/CD and automation pipelines where no TUI is available.

8. **[#28353](https://github.com/anomalyco/opencode/issues/28353) — ToolBuild hook request**  
   Users want hooks to manipulate the tool list at runtime before agent execution, enabling dynamic tool injection/filtering per session or project.

9. **[#28494](https://github.com/anomalyco/opencode/issues/28494) — Cost calculation ignores cache-read tokens**  
   Pricing for `cache.read` tokens is never applied, causing inaccurate cost reporting. Notably, the issue itself was co-authored with Claude Opus 4.6 via OpenCode.

10. **[#28321](https://github.com/anomalyco/opencode/issues/28321) — ZhipuAI models missing context window limits**  
    Built-in `zhipuai-coding-plan` models report `context === 0`, breaking auto-compaction and potentially sending oversized contexts.

---

## 4. Key PR Progress

1. **[#28523](https://github.com/anomalyco/opencode/pull/28523) — Refactor LLM route-first provider API**  
   Major architectural shift: model execution identity moves to configured routes, reworking provider facades for OpenAI/Azure/Bedrock/OpenRouter/Cloudflare. Lays groundwork for more composable provider configs.

2. **[#28522](https://github.com/anomalyco/opencode/pull/28522) — V2 session storage service**  
   Introduces a clean `SessionStorage` service boundary with both SQL and in-memory implementations, plus shared contract tests. Key step toward reliable session persistence.

3. **[#28540](https://github.com/anomalyco/opencode/pull/28540) — Fix TUI freeze with piped stdin**  
   Addresses a long-standing root cause: `opencode < file.txt` or `echo | opencode` rendered the TUI unusable with ANSI noise. Provides an actual fix where previous attempts only worked around the issue.

4. **[#27632](https://github.com/anomalyco/opencode/pull/27632) — Skill name insertion without wiping prompt**  
   Fixes the frustrating behavior where selecting a skill from the picker replaced the entire prompt. Now properly inserts/appends the skill name. Closes 4 linked issues.

5. **[#28246](https://github.com/anomalyco/opencode/pull/28246) — Fix MCP tool progress token / long-running tool timeouts**  
   Passes `onprogress` to `callTool`, ensuring the MCP SDK attaches a `progressToken` so long-running MCP tools don't time out silently.

6. **[#28448](https://github.com/anomalyco/opencode/pull/28448) — Copilot Responses reasoning summary fallback (merged)**  
   Handles the case where `summary_index` is omitted from Copilot reasoning events, preventing stream parse failures.

7. **[#28539](https://github.com/anomalyco/opencode/pull/28539) — Single-level glob for skill discovery**  
   Replaces `**/SKILL.md` with a single-level glob to prevent recursive sub-skill flooding, which was injecting hundreds of irrelevant skills into agent context.

8. **[#28532](https://github.com/anomalyco/opencode/pull/28532) — Symlink/junction directory resolution**  
   Fixes symlinked directories (Linux) and Windows junction points (e.g., OneDrive Desktop) being invisible in the directory picker.

9. **[#28536](https://github.com/anomalyco/opencode/pull/28536) — Provider discrimination by npm ID**  
   Prevents silent override when declaring a second provider of the same type under a custom ID (e.g., `google-vertex-eu`). Critical for multi-region setups.

10. **[#28528](https://github.com/anomalyco/opencode/pull/28528) — Event test refactor (drops AppRuntime)**  
    Rewrites SSE event tests to use `NodeHttpServer.layerTest` directly, eliminating `AppRuntime` dependencies. Improves test isolation and contributor onboarding.

---

## 5. Feature Request Trends

- **Model support velocity**: The community expects same-day support for newly announced models (Gemini 3.5 Flash). Provider extensibility is a top priority.
- **Headless/CI-first workflows**: Multiple requests for better `opencode run` behavior—disabling interactive tools, non-hanging execution, scriptable output.
- **Session portability**: Requests for import/export of chat history and session metadata persistence for backup and cross-machine workflows.
- **Skill/context control**: Fine-grained control over skill discovery depth and HST (hierarchical skill trees), with users wanting per-project scoping.
- **Cost transparency**: Accurate cost tracking including cache tokens, usage stats exposed in the CLI, and clearer free-tier limits.
- **Plugin and hook extensibility**: ToolBuild hooks, runtime tool manipulation, and plugin error isolation point toward a more modular agent platform.

---

## 6. Developer Pain Points

- **Clipboard integration is unreliable** (#13984, 19 👍): The most-upvoted issue. Copy appears to work but paste yields nothing—broken across platforms and persistent for months.
- **Desktop app stability regressions**: Silent startup failures (#28480), disappearing sessions (#28477), and severe input latency (#28162) erode trust in the Desktop beta.
- **Free tier confusion**: Users encounter "free usage exceeded" inconsistently between CLI and Desktop (#15585, #28530), with no clear documentation on limits.
- **Headless mode hangs**: The question tool blocking `opencode run` (#10012, #9830) breaks automation pipelines and has been open since January.
- **Auth regressions go unresolved**: The OpenAI OAuth regression (#27905) has locked users out of browser-based auth since 1.14.49 with no patch yet.
- **Context/cost accuracy**: Missing context window configs (#28321) and ignored cache-read pricing (#28494) mean users can't trust the numbers OpenCode reports.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-21

Here is the technical digest for the Pi (`badlogic/pi-mono`) ecosystem for May 21, 2026.

## 1. Today's Highlights
Pi rolled out **v0.75.4**, bringing a heavily hardened npm install and release pipeline that secures transitive dependencies via generated shrinkwraps and disables potentially malicious lifecycle scripts during self-updates. The community had a massive day of collaboration, highlighted by the merging of a long-awaited **OpenAI Device Code Flow** for easier SSH workflows, as well as significant progress on built-in providers (llama.cpp, NEAR AI Cloud) and core architectural improvements like process-level LLM usage tracking and async file operations. 

## 2. Releases
*   **v0.75.4**
    *   **Hardened npm install and release path:** Pi now ships the CLI with a generated shrinkwrap for transitive dependencies. It blocks accidental lockfile changes, verifies dependency pinning and lifecycle-script allowlists in checks, and disables lifecycle scripts during self-updates to prevent supply-chain attacks.

## 3. Hot Issues
1.  **[Bug] `pi update` fails for a valid global pnpm install** ([#4647](https://github.com/earendil-works/pi/issues/4647)): A symlink resolution mismatch causes the package manager ownership check to fail. *Community reaction: Highly discussed (12 comments) as it blocks updates for many pnpm users.*
2.  **[Bug] Bunch of issues after npm folder was added directly to .pi/agent folder** ([#4763](https://github.com/earendil-works/pi/issues/4763)): Local node_modules bloat user iCloud storage if the Pi folder is synced. *Community reaction: 7 comments; users are requesting a setting to revert to global node_modules.*
3.  **Add setting to prevent pi from remembering the last-used model** ([#1379](https://github.com/earendil-works/pi/issues/1379)): Users are frustrated that casual model switching overwrites their default preference. *Community reaction: 7 comments, strong +1s for a `rememberLastModel: false` setting.*
4.  **[Bug] A lot of errors during long sessions** ([#4430](https://github.com/earendil-works/pi/issues/4430)): Agent flows break frequently when context exceeds 70-90k tokens. *Community reaction: 6 comments highlighting reliability issues with high-context local models.*
5.  **[Bug] /packages page shows extensions with deleted GitHub repositories** ([#4740](https://github.com/earendil-works/pi/issues/4740)): The extension registry UI doesn't prune dead links. *Community reaction: 6 comments discussing the need for automated availability checks.*
6.  **[Bug] Wrong model answer** ([#4701](https://github.com/earendil-works/pi/issues/4701)): A model identifies as "Gemini" instead of the user-selected Claude. *Community reaction: 5 comments pointing to prompt injection or OpenAI-compatible proxy routing issues.*
7.  **Add support for OpenAI device code flow** ([#2253](https://github.com/earendil-works/pi/issues/2253)): Requesting a better login UX for headless SSH environments. *Community reaction: 5 comments, directly resolved by today's PR #4810.*
8.  **[FR] Add a skill loading tool** ([#4635](https://github.com/earendil-works/pi/issues/4635)): Proposal to allow dynamic skill loading to manage token limits. *Community reaction: 5 comments acknowledging the tension between Pi's minimalism and the real need for dynamic skill management.*
9.  **TUI flicker with extensions in small terminals** ([#4021](https://github.com/earendil-works/pi/issues/4021)): Severe UI flicker at ~12.5Hz in small tmux panes. *Community reaction: 5 comments, root cause identified (off-screen spinners triggering full re-renders).*
10. **[Bug] `pi install` fails on Windows when using fnm** ([#4793](https://github.com/earendil-works/pi/issues/4793)): Path resolution spawns invalid executable paths. *Community reaction: 3 comments, confirms ongoing Windows path complexities for Node version managers.*

## 4. Key PR Progress
1.  **[Merged] feat(oauth): Add OpenAI subscription device code flow** ([#4810](https://github.com/earendil-works/pi/pull/4810)): Implements a server-friendly device code login flow for OpenAI, removing the need to tunnel localhost during SSH sessions.
2.  **[Open] Built-in llama-cpp provider** ([#4823](https://github.com/earendil-works/pi/pull/4823)): Introduces an inline `ExtensionFactory` that auto-discovers models from local llama.cpp server instances based on `LLAMA_*` environment variables.
3.  **[Open] feat(ai): allow custom Anthropic-compatible providers to opt into adaptive thinking** ([#4797](https://github.com/earendil-works/pi/pull/4797)): Adds an opt-in flag so corporate proxies can declare support for `thinking.type: "adaptive"`.
4.  **[Open] fix(coding-agent): use async operations in tools** ([#4756](https://github.com/earendil-works/pi/pull/4756)): Critical Windows stability fix. Moves sync `fs` operations to async to prevent Microsoft Defender from locking up the TUI during streaming.
5.  **[Open] feat(coding-agent): fetch portable git bash on windows** ([#4651](https://github.com/earendil-works/pi/pull/4651)): Experimental automatic downloading of portable git bash (~350MB) to standardize the Windows dev environment.
6.  **[Merged] feat(coding-agent): show elapsed time on working loader indicator** ([#4806](https://github.com/earendil-works/pi/pull/4806)): Improves UX by adding a live `"Working... (5s)"` counter to the status bar during long agent turns.
7.  **[Merged] feat(ai): add global LLM usage listener and enrich session events** ([#4804](https://github.com/earendil-works/pi/pull/4804)): Introduces a pub/sub system for LLM token usage, allowing extensions to track per-call token costs natively.
8.  **[Open] Add model_selector_open extension event** ([#4824](https://github.com/earendil-works/pi/pull/4824)): Exposes a new event allowing extensions to dynamically refresh remote provider model lists right when the user opens the model picker.
9.  **[Merged] fix(coding-agent): configure HTTP idle timeout** ([#4759](https://github.com/earendil-works/pi/pull/4759)): Addresses persistent network hanging by making the HTTP timeout configurable and reverting the default to a 5-minute safety window.
10. **[Open] feat(ai): add device code login callback and refactor for copilot** ([#4788](https://github.com/earendil-works/pi/pull/4788)): Refactors OAuth login paths to share a new generalized device code flow, paving the way for an upcoming Codex login option.

## 5. Feature Request Trends
*   **Broader Native Provider Support:** There is a massive push to expand built-in provider options. The community wants native integrations for NanoGPT ([#4814](https://github.com/earendil-works/pi/issues/4814)), NEAR AI Cloud ([#4796](https://github.com/earendil-works/pi/issues/4796)), and local llama.cpp servers ([#4823](https://github.com/earendil-works/pi/pull/4823)) to unify diverse LLM endpoints.
*   **Fine-Grained Model Memory Control:** Users desire strict boundaries for model configuration, specifically the ability to prevent the CLI from overwriting their default model preferences ([#1379](https://github.com/earendil-works/pi/issues/1379)) and the ability to set adaptive thinking parameters for custom Anthropic proxies ([#4790](https://github.com/earendil-works/pi/issues/4790)).
*   **Native UI Quality-of-Life Additions:** Users are asking for tighter internal features, such as executing updates directly from the TUI via `/update` ([#4714](https://github.com/earendil-works/pi/issues/4714)) and having visibility into live runtime metrics like elapsed turn times and token consumption ([#4806](https://github.com/earendil-works/pi/pull/4806)).

## 6. Developer Pain Points
*   **Windows Environment Fragility:** The Windows ecosystem remains highly problematic. Developers face severe path-resolution bugs with non-C: drives ([#4780](https://github.com/earendil-works/pi/issues/4780)), `ENOENT` failures when using Node version managers like `fnm` ([#4793](https://github.com/earendil-works/pi/issues/4793)), and heavy UI locking due to Microsoft Defender blocking synchronous file reads ([#4756](https://github.com/earendil-works/pi/pull/4756)).
*   **TUI and Extension Instability:** Extension authors and power users running tmux split panes are experiencing violent screen flickering ([#4785](https://github.com/earendil-works/pi/issues/4785)). Furthermore, developers report that keeping stale session contexts alive causes random crashes when interacting with extensions ([#4791](https://github.com/earendil-works/pi/issues/4791)).
*   **High-Context Reliability Breakdowns:** As models support larger context windows, Pi is struggling to keep sessions alive past the 70k-90k token mark. Users report frequent flow interruptions and `thinking` block replay corruption during massive subagent tasks ([#4462](https://github.com/earendil-works/pi/issues/4462), [#4430](https://github.com/earendil-works/pi/issues/4430)).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-21

## 1. Today's Highlights
The community is heavily focused on long-session stability and memory management, with multiple high-quality bug reports addressing V8 heap Out-of-Memory (OOM) errors and `Invalid string length` crashes during extended usage. The `qwen serve` daemon architecture hit a major milestone as its foundational PRs were officially merged, paving the way for the v0.16 production-ready roadmap. Additionally, contributors are actively enhancing telemetry, hook lifecycles, and CI/CD automation to mature the project's enterprise capabilities.

## 2. Releases
**No new stable releases were published in the last 24 hours.** 
*(Note: Automated workflows for `v0.15.11-nightly.20260520.5fe12d4cc` and `v0.15.11-preview.3` failed. See [Issue #4339](https://github.com/QwenLM/zwen-code/issues/4339) and [Issue #4338](https://github.com/QwenLM/zwen-code/issues/4338)).*

## 3. Hot Issues
1. **Out of memory with local models ([#4351](https://github.com/QwenLM/zwen-code/issues/4351))**: Running local Qwen 3.6 via `llama.cpp` triggers repeated OOM crashes. Highlighting a critical memory leak when interacting with local endpoints.
2. **The Daemon Mode Roadmap ([#4175](https://github.com/QwenLM/zwen-code/issues/4175))**: A comprehensive proposal for `qwen serve` Mode B feature-priority roadmap toward v0.16. This is currently the central hub for the project's architectural evolution.
3. **DashScope-intl fetch failures ([#4035](https://github.com/QwenLM/zwen-code/issues/4035))**: Users on the international DashScope endpoint experience persistent `fetch failed` errors due to an `undici` dispatcher incompatibility. It has garnered significant community traction (+3 👍).
4. **Oversized resumed history crashes ([#4363](https://github.com/QwenLM/zwen-code/issues/4363))**: Resuming long sessions triggers `Invalid string length` V8 fatal errors. This is a critical blocker for users relying on session persistence.
5. **Multi-GiB stdout failures ([#4364](https://github.com/QwenLM/zwen-code/issues/4364))**: Foreground shell executions producing massive outputs (>1GB) crash the client due to V8 string length limits.
6. **Runaway protection for headless mode ([#4103](https://github.com/QwenLM/zwen-code/issues/4103))**: Highlights the lack of execution budgets in `--yolo` or CI/CD modes, posing a risk for unbounded API calls and actions.
7. **Hostile-provider token hardening ([#4350](https://github.com/QwenLM/zwen-code/issues/4350))**: A deep-dive bug tracking how non-compliant OpenAI-proxied APIs returning `null` or `NaN` in usage metadata can break the client's internal threshold arithmetic.
8. **MCP Streamable HTTP incompatibility ([#4326](https://github.com/QwenLM/zwen-code/issues/4326))**: Qwen Code's MCP client struggles to maintain stable connections with Spring AI servers due to unsupported GET methods.
9. **Auto Fix CI & Review Comments request ([#4362](https://github.com/QwenLM/zwen-code/issues/4362))**: A highly requested feature for an opt-in GitHub Action that automatically addresses PR review comments and CI failures.
10. **`/model` command state leakage ([#4331](https://github.com/QwenLM/zwen-code/issues/4331))**: The `/model` command leaks state by saving the session-specific model switch as the global default, disrupting future sessions.

## 4. Key PR Progress
1. **[Open] fix(core): prevent OOM in long sessions ([#4286](https://github.com/QwenLM/zwen-code/pull/4286))**: Replaces expensive `structuredClone` calls on session history with shallow copies to eliminate massive memory spikes during extended interactions.
2. **[Merged] feat(cli,sdk): qwen serve daemon Stage 1 ([#3889](https://github.com/QwenLM/zwen-code/pull/3889))**: The foundational PR for the HTTP/SSE daemon bridge, implementing core routing for health, capabilities, and prompt execution.
3. **[Merged] refactor(serve): 1 daemon = 1 workspace ([#4113](https://github.com/QwenLM/zwen-code/pull/4113))**: A vital architectural refactor constraining daemons to a single workspace, simplifying state management and session concurrency.
4. **[Open] fix(core): AbortSignal listener leak ([#4366](https://github.com/QwenLM/zwen-code/pull/4366))**: Resolves `MaxListenersExceededWarning` by cleaning up nested `AbortController` listeners that accumulate over long interactive sessions.
5. **[Open] feat(telemetry): custom resource attributes ([#4367](https://github.com/QwenLM/zwen-code/pull/4367))**: Introduces standard OpenTelemetry resource attributes and metric cardinality controls for multi-tenant enterprise deployments.
6. **[Merged] feat(sdk): typed daemon event schema v1 ([#4217](https://github.com/QwenLM/zwen-code/pull/4217))**: Establishes a strongly typed schema for daemon SSE events, enabling robust SDK adapters and frontend state management.
7. **[Open] feat(vscode): surface ACP background notifications ([#4358](https://github.com/QwenLM/zwen-code/pull/4358))**: Improves the VSCode extension by correctly draining and displaying background agent completion notices and follow-ups.
8. **[Open] feat(ci): preflight-triage AI review + PR compliance gates ([#4359](https://github.com/QwenLM/zwen-code/pull/4359))**: Upgrades repository CI with fast PR compliance checks and AI-powered review routing.
9. **[Open] feat(vscode): Token Plan auth provider ([#3990](https://github.com/QwenLM/zwen-code/pull/3990))**: Adds "Token Plan" as a first-class authentication option directly within the VS Code IDE settings.
10. **[Open] feat(skills): priority field in SKILL.md ([#4155](https://github.com/QwenLM/zwen-code/pull/4155))**: Allows skill authors to define display priority, making the `/skills` command output more deterministic and organized.

## 5. Feature Request Trends
*   **Daemon & Non-Interactive Mode:** Strong momentum behind `qwen serve`. The community is actively shaping the HTTP/SSE bridge, SDK client configurations, and requesting execution guardrails for headless/CI environments.
*   **Advanced Memory & Context Control:** Users want finer control over token management and compaction. Requests include disabling auto-compaction for audit/compliance sessions ([#4348](https://github.com/QwenLM/zwen-code/issues/4348)), bounding rescue retries ([#4346](https://github.com/QwenLM/zwen-code/issues/4346)), and adjusting token estimation logic ([#4349](https://github.com/QwenLM/zwen-code/issues/4349)).
*   **Hook Lifecycle & Event Interception:** Expanding the internal hook system to observe more granular events (like `PostToolBatch`) to enable custom developer workflows and integrations ([#4343](https://github.com/QwenLM/zwen-code/issues/4343)).
*   **CI/CD Automation:** Growing demand for native GitHub Actions and PR workflows, specifically automating PR reviews, fixing CI breaks, and addressing review comments directly via code agents.

## 6. Developer Pain Points
*   **V8 Memory Limits:** Memory leaks and V8 string limits are the most prominent pain points. Developers running long, complex sessions or using local models consistently face heap OOM errors. The reliance on deep cloning historically has severely impacted memory efficiency.
*   **MCP Integration Instability:** Developers connecting to custom MCP servers (particularly Spring AI) are experiencing timeouts and fetch errors, highlighting gaps in the current HTTP transport implementation.
*   **State Isolation Issues:** Global configurations bleeding into isolated contexts is frustrating developers—for example, the `/model` command unexpectedly changing global defaults, and global hooks being ignored.
*   **External Editor Conflicts:** IDE integrations like Zed failing to propagate edited prompts back to the Qwen CLI ([#4337](https://github.com/QwenLM/zwen-code/issues/4337)) disrupt natural developer workflows.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-21

## 1. Today's Highlights
The DeepSeek TUI community is actively converging on the upcoming **v0.8.40** stability release, following widespread reports of freezes, IME deadlocks, and token inefficiencies in v0.8.39. Significant architectural progress was made today, with new PRs introducing a pluggable `RuntimeTool` trait for code-execution backends, an `ExternalTool` abstraction layer, and an IDE bridge for MCP-over-WebSocket. Meanwhile, contributors aggressively tackled cross-platform UI/UX bugs, terminal rendering issues, and sub-agent permission flaws.

## 2. Releases
**No new releases** were published in the last 24 hours. However, **PR #1823** has opened the release preparation for **v0.8.40**, indicating an imminent Stability & Recovery patch addressing the v0.8.38/v0.8.39 fallout.

## 3. Hot Issues

1. **[v0.8.39 TUI Freeze on Windows]([#1812](https://github.com/Hmbown/DeepSeek-TUI/issues/1812))**
   A confirmed deep-freeze issue on Windows 11 where the UI becomes completely unresponsive (though the process stays alive). This highlights persistent cross-platform terminal reliability challenges (crossterm polling).

2. **[Input Field Unresponsive due to IME Deadlock]([#1835](https://github.com/Hmbown/DeepSeek-TUI/issues/1835))**
   Windows users utilizing Chinese IME (like Sogou) are experiencing complete keystroke deadlocks during composition events. This is a critical usability blocker for non-English users.

3. **[Synchronous Tools Blocking Cancellation]([#1791](https://github.com/Hmbown/DeepSeek-TUI/issues/1791))**
   A core engine flaw where long-running synchronous I/O in tools like `grep_files` blocks the Tokio scheduler, preventing users from cancelling AI turns. 

4. **[Docker Encoding Garbage Output]([#1615](https://github.com/Hmbown/DeepSeek-TUI/issues/1615))**
   A highly active issue (180 comments, though now closed) where standard Docker deployments output pure garbled text, forcing users to hard-reboot their Linux servers.

5. **[Sub-agents Cannot Write Files]([#1828](https://github.com/Hmbown/DeepSeek-TUI/issues/1828))**
   Users report that approved sub-agents fail to execute file writes. This severely limits agentic workflows and autonomous task execution.

6. **[Blind Approval Process for Proposed Changes]([#1846](https://github.com/Hmbown/DeepSeek-TUI/issues/1846))**
   When the TUI asks for user approval of file changes, the diff is currently obscured by the approval pane, forcing users to accept changes blindly.

7. **[Large Projects Cause Immediate App Hangs]([#1827](https://github.com/Hmbown/DeepSeek-TUI/issues/1827))**
   Attempting to use the TUI in large directories (e.g., 267 GB, 138k files) causes the application to freeze instantly, indicating critical bottlenecks in file indexing or context packing.

8. **[Lack of Transparency in AI Thinking Process]([#1824](https://github.com/Hmbown/DeepSeek-TUI/issues/1824))**
   Users are frustrated that Agent mode hides the AI's reasoning text, making it impossible to course-correct the AI until a flawed task is fully completed.

9. **[Token Waste on Hidden Non-English Reasoning]([#1842](https://github.com/Hmbown/DeepSeek-TUI/issues/1842))**
   Even when `show_thinking=false`, the API wastes tokens generating non-English `reasoning_content` due to system prompt language matching.

10. **[Session Resume Sends Invalid Model Name]([#1797](https://github.com/Hmbown/DeepSeek-TUI/issues/1797))**
    When resuming a session where "auto" mode was selected, the TUI incorrectly sends 'auto' as the literal model name to the API, resulting in a 400 Bad Request.

## 4. Key PR Progress

1. **[PR #1823: Prepare v0.8.40 Release]([PR #1823](https://github.com/Hmbown/DeepSeek-TUI/pull/1823))**
   The core release preparation PR focusing on stability, provider/model correctness, and recovery infrastructure for Windows and WSL environments.

2. **[PR #1845: `RuntimeTool` Trait & Backends]([PR #1845](https://github.com/Hmbown/DeepSeek-TUI/pull/1845))**
   Introduces a unified pluggable trait for code execution (Go, TypeScript, Rust), enabling seamless integration of new sandbox runtimes.

3. **[PR #1821: `ExternalTool` Abstraction Layer]([PR #1821](https://github.com/Hmbown/DeepSeek-TUI/pull/1821))**
   Refactors ~65 hardcoded subprocess calls into a centralized trait, allowing users to swap underlying CLI tools via configuration easily.

4. **[PR #1843: Force English Reasoning When Hidden]([PR #1843](https://github.com/Hmbown/DeepSeek-TUI/pull/1843))**
   Directly addresses Issue #1842 by forcing the model to use English for `reasoning_content` when `show_thinking` is disabled, significantly reducing token waste for CJK users.

5. **[PR #1841: Keep `write_file` Loaded in Agent Mode]([PR #1841](https://github.com/Hmbown/DeepSeek-TUI/pull/1841))**
   Fixes sub-agent writing issues by keeping the tool eagerly loaded rather than deferring it, ensuring smooth continuous execution.

6. **[PR #1839: `grep_files` Respects Cancellation Token]([PR #1839](https://github.com/Hmbown/DeepSeek-TUI/pull/1839))**
   Solves a critical engine blocking issue by ensuring broad recursive searches can be immediately interrupted by the user.

7. **[PR #1833: Enhanced Sub-agent Permissions]([PR #1833](https://github.com/Hmbown/DeepSeek-TUI/pull/1833))**
   Refines the sub-agent permission model so delegated agents can actually write files, fixing the highly requested Issue #1828.

8. **[PR #1820: MCP-over-WS IDE Bridge]([PR #1820](https://github.com/Hmbown/DeepSeek-TUI/pull/1820))**
   Introduces a workspace crate that bridges the TUI with IDEs (VS Code, Cursor) via WebSockets, allowing the TUI to utilize the IDE's active editor context.

9. **[PR #1837 / #1832: macOS UI Fix & Grayscale Theme Crash Fix]([PR #1837](https://github.com/Hmbown/DeepSeek-TUI/pull/1837))**
   PR #1837 fixes the floating title bar on macOS, while PR #1832 resolves an integer overflow panic occurring when the grayscale theme processes bright colors.

10. **[PR #1831: "Terminal" Theme]([PR #1831](https://github.com/Hmbown/DeepSeek-TUI/pull/1831))**
    A new UI theme that clears DeepSeek brand colors, allowing users' native terminal color schemes to render the interface completely.

## 5. Feature Request Trends
- **Tool Pluggability & Extensibility:** Heavy demand for custom tool registration. Users want to easily swap built-in tools (like `exec_shell` or `code_execution`) for secure, custom environments without recompiling the Rust binary.
- **Agent Transparency & Control:** Strong requests for real-time visibility into AI reasoning (streaming thoughts) and better UI mechanisms for viewing diffs before approving file writes.
- **Enhanced IDE Integration:** Bridging the gap between terminal-based workflows and modern IDEs (VS Code/Cursor) by sharing active editor context and MCP capabilities.
- **Large Workspace Support:** A need for optimized file indexing and context management so the TUI doesn't crash or hang when opening massive repositories.

## 6. Developer Pain Points
- **Terminal/OS Fragmentation:** The transition to v0.8.39 has introduced severe regressions in cross-platform terminal handling, specifically Windows crositerm freezes, IME composition deadlocks, and SSH sandbox blocks.
- **Cancellation & Async Blocking:** Developers are frustrated that the Tokio runtime gets blocked by synchronous tool execution, making the UI unresponsive and hard-kills necessary.
- **Token Waste & Inefficiency:** Unoptimized system prompts and unhidden reasoning tokens are causing unexpectedly high API bills, especially for international users.
- **Sub-Agent Reliability:** Agentic workflows are breaking due to tools not being eagerly loaded and child agents lacking the correct context permissions to execute basic file operations.

</details>