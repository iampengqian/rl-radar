# AI CLI Tools Community Digest 2026-05-11

> Generated: 2026-05-10 22:12 UTC | Tools covered: 8

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

# AI Developer Tools Ecosystem: Cross-Tool Analysis Report (2026-05-11)

## 1. Ecosystem Overview
The AI CLI tooling landscape is rapidly maturing beyond simple chat interfaces into sophisticated, autonomous agent orchestration platforms. Today's digest reveals a universal push toward multi-agent architectures, persistent state management, and deeper integrations via the Model Context Protocol (MCP). However, this rapid innovation is frequently outpacing stability, with resource leaks, context compaction bugs, and cross-platform inconsistencies representing the primary bottlenecks to enterprise adoption. As tools compete on model flexibility and subagent delegation, developer trust is currently hinged more on fundamental reliability and memory management than on feature velocity.

## 2. Activity Comparison
Activity across the ecosystem remains high, though largely focused on issue triage and architectural PRs rather than shipping stable releases. Only OpenCode and Qwen Code pushed new versions today.

| Tool | Issues Noted | PRs Noted | Release Status (Last 24h) | Primary Focus Today |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 2 | No Release | Multi-agent orchestration, resource leaks (macOS) |
| **OpenAI Codex** | 10 | 10 | No Release | Environment routing, session management, CI stability |
| **Gemini CLI** | 10 | 10 | No Release | Context compaction, memory security, modular architecture |
| **GitHub Copilot CLI** | 10 | 1 | No Release | Hook security, session state corruption, MCP lifecycle |
| **Kimi Code** | 7 | 5 | No Release | WebUI UX, model performance (K2.6), MCP limits |
| **OpenCode** | 10 | 14 | **v1.14.45, v1.14.46** | TUI regressions (`/exit`), provider fallbacks, CPU profiling |
| **Pi** | 10 | 10 | No Release | Org migration breakage, provider expansion, memory leaks |
| **Qwen Code** | 10 | 10 | **v0.15.10** | File binary misclassification, local model performance |

*(Note: "Issues/PRs Noted" counts reflect the top highlighted items in today's digest and represent a fraction of total community activity.)*

## 3. Shared Feature Directions
Analyzing the community feedback reveals strong convergent trends across the ecosystem:

*   **Autonomous Multi-Agent Orchestration:** The most prominent shared direction is the shift from single-threaded coding assistants to multi-agent systems.
    *   *Claude Code* is actively debating Opus-tier "brain" agents coordinating Sonnet "workers".
    *   *OpenCode* users heavily upvoted an "Agent Teams" equivalent feature (#12661).
    *   *OpenAI Codex* users are pushing for reliable long-running `/goal` execution.
    *   *Gemini CLI* is formalizing this via a Modular Agent Architecture (PR #22097).
*   **MCP Integration & Lifecycle Management:** The Model Context Protocol is universally adopted, but users are hitting scaling walls.
    *   *GitHub Copilot CLI* users want lazy-loading for MCP servers to speed up cold starts (#2901).
    *   *Gemini CLI* users are hitting hard API limits with >128 MCP tools (#24246).
    *   *Kimi Code* and *Qwen Code* communities are both requesting configurable limits and persistent MCP server states.
*   **Advanced Context & Memory Management:** Token window efficiency is a universal pain point.
    *   *OpenAI Codex* loses track of high-level goals during mid-turn compaction (#19910).
    *   *Gemini CLI* is implementing "Union-Find" semantic clustering for context compression (PR #24736).
    *   *Qwen Code* is attempting to shrink initial prompt sizes by deferring low-frequency tools (PR #4022).
*   **Security & Hook Reliability:** Enterprises need reliable guardrails.
    *   *GitHub Copilot CLI* is facing critical bugs where parallel processing silently bypasses `preToolUse` hooks (#2893).
    *   *Claude Code* is dealing with similar issues where auto-modes bypass "ask" permissions (#51255).

## 4. Differentiation Analysis
While features converge, the technical approaches and target audiences are distinctly different:

*   **Vertical vs. Horizontal Integration:** *OpenAI Codex* and *Claude Code* are deeply vertically integrated, optimizing heavily for their proprietary foundation models (GPT-5.5, Opus/Sonnet). Conversely, *OpenCode*, *Pi*, and *Qwen Code* are highly "horizontal," prioritizing multi-provider fallback chains, local model support (llama.cpp, LM Studio), and open-weight compatibility (Cerebras, Qwen).
*   **Platform Maturity vs. Architecture Rewrite:** *Claude Code* and *OpenAI Codex* are polishing existing monolithic TUIs and fixing OS-level resource leaks (e.g., PTY file descriptor limits on macOS). *Gemini CLI* and *Pi* are undergoing significant architectural refactoring (modular plugin interfaces, monorepo migrations) to support rapid expansion.
*   **Ecosystem Lock-in:** *GitHub Copilot CLI* acts as an extension of the GitHub ecosystem, focusing heavily on bridging CLI, Desktop, and VS Code workflows. *Qwen Code* is focusing on regional cloud integrations (DashScope, Volcengine) and local hardware optimization.

## 5. Community Momentum & Maturity
*   **High Velocity / High Friction:** *Claude Code* exhibits massive community engagement (e.g., 715+ comments on a single billing/limit issue). The tool is heavily used in production, but trust is currently strained by resource exhaustion bugs and billing opacity. *OpenAI Codex* shows massive internal engineering velocity (10 merged PRs) focused on remote exec-servers and CI, though Windows users feel left behind.
*   **Rapid Iteration:** *OpenCode* and *Qwen Code* are shipping patch releases daily, reacting swiftly to community regressions (e.g., OpenCode's immediate response to the `/exit` bug). They demonstrate the most responsive maintainer-to-contributor pipelines right now.
*   **Growing Pains:** *Pi* is experiencing turbulence due to an ongoing namespace/repository migration, highlighting operational friction in open-source scaling. *Gemini CLI* maintainers are actively laying excellent architectural groundwork (AST-aware tools, modular agents) but are currently bogged down by low-level UI hangs and memory loop bugs.

## 6. Trend Signals & Strategic Takeaways
For technical decision-makers and developers, today's digest highlights several critical industry signals:

1.  **The "Agentic" honeymoon is over; reliability is king:** The industry is moving past the novelty of autonomous coding. The real differentiator is now *reliability*. Silent security hook bypasses (Copilot), context loss during compaction (Codex), and sub-agents failing to receive tool definitions (Claude) indicate that runtime stability must be prioritized over new features.
2.  **The Mac/Windows/Linux divide is widening:** Tools are hitting hard OS limits. *Claude Code* is exhausting macOS system PTY limits, while *Codex* and *Kimi* continue to struggle with Windows sandboxing and ARM64 emulation. Teams building on these tools must rigorously test in their specific OS environments.
3.  **Prompt Engineering is becoming Tool Engineering:** Token budgets are tight. Ecosystem leaders (Codex, Gemini, Qwen) are actively shrinking prompts by deferring tools, scanning ASTs, and using ripgrep instead of file crawlers. Development teams should evaluate AI tools based on their local context efficiency, not just model intelligence.
4.  **Vendor-Neutral Abstractions are gaining value:** As proprietary models toggle pricing and performance (e.g., Kimi's K2.6 degradation, GPT-5.5 caching issues), tools that offer native fallback chains to local models or alternative providers (OpenCode, Pi) are becoming essential for resilient CI/CD pipelines.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (As of 2026-05-11)

Based on activity data from the [anthropics/skills](https://github.com/anthropics/skills) repository, here is an analysis of the current community landscape.

---

## 1. Top Skills Ranking
While comment counts across the top PRs are tightly clustered, the following submissions represent the most actively maintained and discussed community contributions:

*   **[PR #514: document-typography](https://github.com/anthropics/skills/pull/514)** 
    *   **Functionality:** Implements typographic quality control for AI-generated documents (fixing orphaned words, widow paragraphs, and numbering misalignment). 
    *   **Status:** `OPEN` | Created: 2026-03-04
*   **[PR #83: skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** 
    *   **Functionality:** Introduces two critical "meta-skills" to the marketplace: one for analyzing skill code quality and another for automated security audits.
    *   **Status:** `OPEN` | Created: 2025-11-06
*   **[PR #486: ODT (OpenDocument) Support](https://github.com/anthropics/skills/pull/486)** 
    *   **Functionality:** Enables Claude to create, fill, parse, and convert OpenDocument Format files (.odt, .ods).
    *   **Status:** `OPEN` | Created: 2026-03-01
*   **[PR #541: DOCX Tracked Change Fix](https://github.com/anthropics/skills/pull/541)** 
    *   **Functionality:** Prevents document corruption in the DOCX skill by resolving shared ID space collisions between bookmarks and tracked changes.
    *   **Status:** `OPEN` | Created: 2026-03-06
*   **[PR #360: AppDeploy](https://github.com/anthropics/skills/pull/360)** 
    *   **Functionality:** Allows Claude to deploy and manage full-stack web applications directly to a public URL via the AppDeploy CLI.
    *   **Status:** `OPEN` | Created: 2026-02-09
*   **[PR #568: ServiceNow Platform Skill](https://github.com/anthropics/skills/pull/568)** 
    *   **Functionality:** A broad enterprise assistant for ServiceNow covering ITSM, SecOps, ITAM, and IntegrationHub scripting.
    *   **Status:** `OPEN` | Created: 2026-03-08
*   **[PR #806: Sensory (macOS Automation)](https://github.com/anthropics/skills/pull/806)** 
    *   **Functionality:** Replaces screenshot-based computer usage with native `osascript` (AppleScript) automation for macOS.
    *   **Status:** `OPEN` | Created: 2026-03-29
*   **[PR #444: AURELION Skill Suite](https://github.com/anthropics/skills/pull/444)** 
    *   **Functionality:** A structured cognitive/memory framework providing knowledge management and persistent context for AI agents.
    *   **Status:** `OPEN` | Created: 2026-02-21

---

## 2. Community Demand Trends
Analyzing the most active Issues reveals distinct pain points and highly requested feature directions:

*   **Enterprise & Team Collaboration:** There is massive demand for org-wide skill sharing (Issue [#228](https://github.com/anthropics/skills/issues/228), 👍 7) and better Single Sign-On (SSO) / Enterprise support (Issue [#532](https://github.com/anthropics/skills/issues/532)). Users want to bypass manual `.skill` file sharing via Slack/Teams.
*   **Security & Trust Boundaries:** As community skills multiply, users are increasingly concerned about security. Issue [#492](https://github.com/anthropics/skills/issues/492) highlights the dangers of community skills masking as official Anthropic skills, pointing to a need for strict namespace governance.
*   **Plugin Architecture Refinement:** Users are experiencing frequent issues with duplicate skills and plugin scoping. Issue [#189](https://github.com/anthropics/skills/issues/189) (👍 8) and Issue [#1087](https://github.com/anthropics/skills/issues/1087) show users struggling with `document-skills` loading redundant or unintended capabilities into the context window.
*   **Robust Testing & Evaluation:** Issue [#556](https://github.com/anthropics/skills/issues/556) (👍 6) highlights a 0% trigger rate when evaluating skills via the CLI (`claude -p`), indicating a strong developer need for reliable automated testing and evaluation pipelines.
*   **MCP (Model Context Protocol) Integration:** Users want Skills exposed directly as MCPs to standardize the API signatures of AI software interactions (Issue [#16](https://github.com/anthropics/skills/issues/16)).

---

## 3. High-Potential Pending Skills
The following `OPEN` Pull Requests are actively updated, address specific community pain points, and are strong candidates for near-term merging:

*   **[PR #509: CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509):** Addresses a critical community health gap (Closes [#452](https://github.com/anthropics/skills/issues/452)), establishing clear guidelines for how the open-source community should propose new skills.
*   **[PR #538: PDF Case-Sensitivity Fix](https://github.com/anthropics/skills/pull/538):** A crucial bug fix that prevents the PDF skill from breaking on case-sensitive operating systems (e.g., Linux).
*   **[PR #539: Skill-Creator YAML Fix](https://github.com/anthropics/skills/pull/539):** Solves silent YAML parsing failures during skill creation by adding validation for unquoted special characters.
*   **[PR #723: Testing Patterns Skill](https://github.com/anthropics/skills/pull/723):** A comprehensive skill covering the full testing stack (Trophy model, React components, unit testing) which directly addresses the community's focus on code quality assurance.

---

## 4. Skills Ecosystem Insight
The community's most concentrated demand is for **robust skill lifecycle management—spanning namespace security, reliable evaluation triggers, and frictionless enterprise sharing—rather than just an increase in the sheer number of available skills.**

---

# Claude Code Community Digest — 2026-05-11

## 1. Today's Highlights

No new releases shipped in the past 24 hours, but the community remains highly active around autonomous agent orchestration and platform stability. The dominant themes today are **multi-agent/swarm coordination** (with a significant PR and an architectural proposal gaining traction) and **persistent resource exhaustion bugs** on macOS — PTY file descriptor leaks and phantom context consumption continue to frustrate power users. A critical bug was confirmed showing that built-in `worker` and `quick` subagent types receive zero tool definitions at runtime.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

### 1. 🔥 [#38335 — Max plan session limits exhausted abnormally fast since March 23](https://github.com/anthropics/claude-code/issues/38335)
**715 comments · 455 👍 · OPEN (invalid)**

The single most-engaged issue in the repo. Users on the Claude Max plan report that CLI session limits drain far faster than expected, making the tool nearly unusable for extended work. Despite being labeled `invalid`, the sheer volume of reports (455 thumbs-up) signals a major trust gap between billing perception and actual usage. No official resolution yet.

### 2. [#57878 — Built-in worker/quick subagent types receive zero tool definitions](https://github.com/anthropics/claude-code/issues/57878)
**3 comments · CLOSED**

A critical finding: across 150 invocations, the built-in `worker` and `quick` subagent types had **0% tool access**. The model generates tool-call XML as plain text instead of executing tools. This effectively breaks subagent delegation and means the agents system is partially non-functional for these types. Closed quickly, likely triaged internally.

### 3. [#57580 — macOS PTY file descriptor leak exhausts kern.tty.ptmx_max](https://github.com/anthropics/claude-code/issues/57580)
**2 comments · 1 👍 · OPEN**

During long Bash-heavy sessions, Claude Code accumulates up to 511 open FDs against `/dev/ptmx`, hitting the macOS system limit. Once exhausted, `forkpty()` fails system-wide with `ENXIO` — breaking not just Claude but *all* terminal operations. This is a serious resource leak for heavy CLI users.

### 4. [#55206 — Cowork on Windows: sandbox can create files but can't unlink (breaks git)](https://github.com/anthropics/claude-code/issues/55206)
**6 comments · 2 👍 · OPEN**

On Windows, the bash sandbox allows file creation on mounted host folders but denies `unlink` — making all git write operations fail. This is a hard blocker for the Cowork feature on Windows and affects core git workflows.

### 5. [#56913 — Make autonomous Claude Code viable: tiered Opus brains + Sonnet workers + persistent state](https://github.com/anthropics/claude-code/issues/56913)
**7 comments · OPEN (enhancement)**

An ambitious architectural proposal to make Claude Code a true autonomous orchestrator — not just a pair programmer. The author envisions Opus-tier "brain" agents coordinating Sonnet-tier "workers" with persistent state across long-running pipelines, ML training, and build automation. Aligns closely with the swarm PR (#57880).

### 6. [#57513 — MCP tools silently drop mid-session with no reconnection](https://github.com/anthropics/claude-code/issues/5757513)
**3 comments · CLOSED**

When an MCP server's stdio child process dies (e.g., during context compaction), Claude Code permanently removes all tools from that server for the remainder of the session with zero reconnection logic. This is particularly painful for users relying on MCP-based toolchains.

### 7. [#51255 — PreToolUse hook "ask" decision auto-approved in auto mode](https://github.com/anthropics/claude-code/issues/51255)
**3 comments · 5 👍 · OPEN**

Hooks configured with `permissionDecision: "ask"` are silently auto-approved when running in auto mode, removing the intended safety gate. This undermines the entire purpose of pre-tool-use hooks as a guardrail mechanism — 5 thumbs-up shows this matters to safety-conscious teams.

### 8. [#57891 — iOS Remote Control stuck on pulsing thinking-icon after `/compact`](https://github.com/anthropics/claude-code/issues/57891)
**2 comments · OPEN**

Two distinct Remote Control state-sync failures within 12 hours: the mobile UI gets permanently stuck after `/compact`, with stale tool indicators that survive app reloads. Highlights the immaturity of the iOS Remote Control feature for production use.

### 9. [#51154 — Random context usage at start of new sessions and on `/clear`](https://github.com/anthropics/claude-code/issues/51154)
**4 comments · 1 👍 · OPEN**

Users observe unexplained context window consumption at the very start of fresh sessions and immediately after `/clear`. This wastes valuable context budget and compounds with the session-limit issues from #38335.

### 10. [#57661 — Opus ignores own /verify skill during rewrites](https://github.com/anthropics/claude-code/issues/57661)
**2 comments · 1 👍 · OPEN**

Opus model behavior regression: during skill-based rewrites, the model ignores its own `/verify` skill, makes unverified claims, and falls back to prose summaries. Raises concerns about model reliability when using the Skills system at the Opus tier.

---

## 4. Key PR Progress

### 1. [#57880 — `feat(plugins): swarm-orchestrator` — DAG-aware multi-tier coordination](https://github.com/anthropics/claude-code/pull/57880)
**Author: kushalj1997 · OPEN**

The headline PR of the day. Implements a swarm orchestrator plugin with DAG-aware task scheduling, role-typed agent heads, and multi-tier coordination for autonomous agent teams. The author built this as a personal project using Claude Code before discovering the native Teams feature. Could become a foundational piece for autonomous workflows.

### 2. [#57888 — Scope `child_process_exec` to JS/TS files (fix Python false-positive)](https://github.com/anthropics/claude-code/pull/57888)
**Author: emora-hash · OPEN**

Fixes a security reminder hook that incorrectly flagged Python's `asyncio.create_subprocess_exec()` as a JavaScript `child_process.exec()` call. A clean, targeted fix to the `security_reminder_hook.py` matching logic. Small but important for multi-language projects.

---

## 5. Feature Request Trends

| Trend | Signal |
|-------|--------|
| **Autonomous agent orchestration** | Multi-tier brain/worker architectures (#56913), swarm coordination (PR #57880), persistent state for long-running agents — the community is pushing hard toward Claude Code as an autonomous system, not just a REPL. |
| **Granular plugin/hook control** | Per-plugin hook disable (#57877), selective opt-out of hook components while keeping skills/commands — users want à la carte plugin composition, not all-or-nothing bundles. |
| **TUI polish & customization** | Disable/customize thinking phase labels (#57895), fix effort level display (#37773), fix Windows scrollback duplication (#57133) — the terminal UI needs refinement across platforms. |
| **Reliability for remote/mobile** | iOS Remote Control state sync (#57891), remote agent hang recovery (#57898) — the remote control story needs maturation before it's production-viable. |
| **Routines/scheduled tasks** | Autonomous scheduled tasks silently dying after 12-24 hours (#57896) — indicates users are trying to run Claude Code as a persistent daemon, which the runtime doesn't yet support reliably. |

---

## 6. Developer Pain Points

**Resource leaks & system stability:** The PTY file descriptor leak (#57580) and phantom context consumption (#51154) are the kind of silent degradation bugs that erode trust over time. Heavy CLI users on macOS are particularly affected — the FD leak can take down the entire system's terminal layer.

**Billing & subscription confusion:** The 715-comment mega-issue on Max plan session limits (#38335) plus multiple payment failure reports (#55982, #57122) indicate a persistent gap between what users think they're paying for and what they experience. The `invalid` label on the main issue is fueling frustration.

**Subagent tooling is broken in practice:** The discovery that `worker` and `quick` subagents receive zero tool definitions (#57878) means the agent delegation story is currently non-functional for built-in types. Combined with `SendMessage` failures when using agent names (#42999), the multi-agent system has significant runtime gaps despite being a marquee feature.

**Cross-platform fragility:** Windows users face sandbox unlink failures (#55206) and scrollback rendering bugs (#57133). macOS users hit PTY limits and multi-user temp file conflicts (#57798). Linux users see TUI freezes (#57762). Each platform has its own set of blockers that prevent reliable daily use.

**Hook system undermines safety guarantees:** The auto-approval of `ask` decisions in auto mode (#51255) removes the primary safety mechanism that teams rely on when running Claude Code in less-supervised configurations. For enterprise adoption, this is a critical trust issue.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-11

## 1. Today's Highlights
No new Codex releases shipped in the last 24 hours, but the community remains highly active around Windows/ARM64 support, session management, and the newly introduced `/goal` feature. Internally, the Codex engineering team merged a substantial stack of CI stabilization and multi-environment routing PRs, signaling progress toward more robust remote and containerized execution.

---

## 2. Releases
No new releases were published in the last 24 hours.

---

## 3. Hot Issues

1. **[#9544](https://github.com/openai/codex/issues/9544) — Stream disconnected before completion on remote compact task** *(50 comments, 14 👍)*
   A long-standing bug where remote tasks drop the stream mid-execution. High comment volume reflects users hitting this repeatedly on `max` subscriptions; now closed, presumably via a recent fix.

2. **[#3550](https://github.com/openai/codex/issues/3550) — Scope Codex chats to VS Code projects/workspaces** *(25 comments, 63 👍)*
   Requests project-scoped chat history in the VS Code extension instead of a global list. Strong 👍 count shows this is a top ask for developers juggling multiple repos.

3. **[#8784](https://github.com/openai/codex/issues/8784) — `codex delete <session>` command** *(24 comments, 79 👍)*
   Users want a first-class CLI command to permanently delete sessions. The highest 👍 among TUI issues highlights a shared frustration with cluttered history.

4. **[#19910](https://github.com/openai/codex/issues/19910) — Goals lost after mid-turn compaction** *(22 comments)*
   The new `/goal` feature is praised as "life-changing," but active goals can vanish when context compaction fires mid-turn. A critical bug for long-running agent workflows.

5. **[#17444](https://github.com/openai/codex/issues/17444) — MCP server boot failure on Windows** *(22 comments, 9 👍)*
   MCP server initialization errors on Windows (GPT 5.4 Medium Fast). Represents broader Windows reliability concerns that dominate several issues.

6. **[#12129](https://github.com/openai/codex/issues/12129) — ENTER should insert newline, Ctrl+Enter should send** *(20 comments, 28 👍)*
   The inverted TUI input behavior is a persistent UX complaint—especially for users accustomed to multiline editors. Closed, suggesting a resolution may have shipped.

7. **[#9926](https://github.com/openai/codex/issues/9926) — Interactive `ask_user_question` tool with tabbed UI** *(17 comments, 24 👍)*
   Proposes a structured Q&A tool so the agent can resolve ambiguity without free-form chat. Strong community enthusiasm for more deterministic agent interactions.

8. **[#13018](https://github.com/openai/codex/issues/13018) — Allow deleting threads in the Codex App** *(14 comments, 82 👍)*
   The single highest 👍 count among today's issues. Users are forced to manually delete files in `~/.codex/archived_sessions/` to remove threads.

9. **[#20301](https://github.com/openai/codex/issues/20301) — Low cache hit rate with GPT-5.5** *(12 comments)*
   Prompt caching underperforms when Codex uses GPT-5.5 on WSL2, increasing cost and latency. A concern for users on token-intensive, repetitive tasks.

10. **[#21978](https://github.com/openai/codex/issues/21978) — TUI renders at stale terminal size after resize** *(7 comments)*
    A rendering bug on `0.131.0-alpha.4` where the TUI doesn't reflow after window resize. Highlights lingering TUI robustness gaps.

---

## 4. Key PR Progress

1. **[#21206](https://github.com/openai/codex/pull/21206) — `feat(tui): add ambient terminal pets`**
   Brings the animated pet companion from the Desktop app into the TUI, rendered without obscuring chat or approvals.

2. **[#20137](https://github.com/openai/codex/pull/20137) — `Route tools through selected environments`** *(CLOSED)*
   Core multi-environment routing: shell, unified exec, `apply_patch`, `list_dir`, and `view_image` now respect the selected turn environment with `oai_env://` path qualification.

3. **[#20533](https://github.com/openai/codex/pull/20533) — `Add exec-server status endpoints`** *(CLOSED)*
   Adds `/healthz`, `/readyz`, `/status`, and `/metrics` to the exec-server listener, enabling observability for remote Codex deployments.

4. **[#20534](https://github.com/openai/codex/pull/20534) — `Gracefully drain exec-server on shutdown signals`** *(CLOSED)*
   Introduces a 30-second drain timeout on SIGINT/SIGTERM, rejecting new connections while existing sessions complete.

5. **[#21627](https://github.com/openai/codex/pull/21627) — `Add standalone exec-server binary`** *(CLOSED)*
   Ships `codex-exec-server` as a standalone binary, simplifying Docker and remote-env deployments without the full CLI.

6. **[#21585](https://github.com/openai/codex/pull/21585) — `Stabilize Windows rust-ci-full lanes`** *(CLOSED)*
   Addresses recurring Windows CI failures by enabling Dev Drive, re-enabling sccache, and reducing filesystem pressure.

7. **[#21587](https://github.com/openai/codex/pull/21587) — `Fix agent job cancellation races`** *(CLOSED)*
   Makes agent job stop/cancellation atomic to prevent concurrent workers from racing on the same job.

8. **[#21857](https://github.com/openai/codex/pull/21857) — `Defer fresh TUI startup hydration`** *(CLOSED)*
   Optimizes TUI launch by deferring interactive `thread/start` to the background while keeping model migration synchronous.

9. **[#21844](https://github.com/openai/codex/issues/21844) — `Ignore stale /tmp git markers in project discovery`** *(CLOSED)*
   Fixes project root detection on systems where `/tmp` has a stale `.git` directory—a source of flaky CI tests on Ubuntu runners.

10. **[#21972](https://github.com/openai/codex/pull/21972) — `Add hook visibility hints`**
    Separates consequential hook output from background context logging, reducing TUI noise and improving readability.

---

## 5. Feature Request Trends

- **Session & thread management:** Deleting, renaming, and scoping sessions/threads is the dominant theme (#8784, #13018, #20434, #21347, #20476, #20608). Users want this across the CLI, Desktop App, and VS Code extension.
- **Windows & ARM64 parity:** Multiple requests for native Windows ARM64 support and general Windows bug fixes (#17444, #17491, #13565, #22050, #22067).
- **Agent determinism and control:** Interactive structured Q&A (#9926), `/goal` support in the App (#22049), and better model/thinking shortcuts (#2920).
- **Remote & CLI integration:** Attaching remote CLI sessions to the App (#21886), `codex exec --quiet` for harness pipelines (#22047).

---

## 6. Developer Pain Points

- **Windows is a second-class citizen:** ARM64 emulation issues, MCP boot failures, `taskkill` output leaking into TUI, and CI flakiness dominate the issue list. Windows users report noticeably degraded reliability.
- **Session clutter is unavoidable:** There is still no unified way to delete or organize threads across the CLI, App, and extension—users resort to manual file deletion.
- **Context compaction breaks long-running tasks:** The `/goal` feature is highly valued, but goals being lost mid-turn (#19910) undermines trust in agentic workflows.
- **TUI polish gaps:** Resize rendering (#21978), input noise on idle (#22067), and the ENTER/newline debate (#12129) indicate the TUI needs more robustness passes for daily-driver usage.
- **Cache efficiency with newer models:** GPT-5.5's low cache hit rate (#20301) raises cost concerns for heavy users, suggesting prompt cache tuning hasn't kept pace with model releases.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-11

## 1. Today's Highlights
No new version was released in the last 24 hours, but the maintainers and community remain highly active. The current development focus is heavily split between fortifying the agent/memory systems (including AST-awareness and Auto Memory bug fixes) and stabilizing core CLI infrastructure (such as proxy support, telemetry memory leaks, and policy engine fixes). Several long-standing architectural proposals, like the Modular Agent Architecture, continue to see incremental progress.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues
Here are the top 10 noteworthy issues currently being discussed in the community:

1. **AST-Aware File Operations ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))**: A highly discussed epic investigating whether AST-aware file reading and search can reduce token noise and improve method-boundary navigation. The community and maintainers are actively assessing its potential impact on codebase mapping.
2. **Component Level Evaluations ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353))**: Following the introduction of behavioral evals, this P1 issue tracks expanding test coverage to ensure robust, reliable agent behaviors across all 6 supported Gemini models.
3. **Subagent GOAL Masking Interruption ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))**: A critical bug where the `codebase_investigator` subagent falsely reports `status: "success"` when it hits `MAX_TURNS`. This hides the fact that the task was interrupted, potentially misleading users.
4. **Low Subagent/Skill Utilization ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968))**: Users report that Gemini rarely invokes custom skills or subagents autonomously unless explicitly instructed, highlighting a gap in the model's routing and delegation logic.
5. **"save_memory" Tool Not Found ([#26563](https://github.com/google-gemini/gemini-cli/issues/26563))**: A regression in v0.41.1 where attempting to run `/memory add` fails because the core agent fails to locate the `save_memory` tool.
6. **Shell Execution Hangs ("Waiting input") ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))**: A highly upvoted bug where the CLI permanently hangs after a simple shell command completes, forcing the user to restart the session.
7. **Browser Agent Settings Ignored ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267))**: The `browser_agent` is ignoring `settings.json` overrides (like `maxTurns`), causing unpredictable agent loop behavior.
8. **Auto Memory Security & Reliability ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522))**: A cluster of bugs reported by the maintainers highlighting that Auto Memory processes transcripts without deterministic redaction, silently skips invalid memory patches, and retries low-signal sessions indefinitely.
9. **API Errors with >128 Tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))**: The CLI throws a 400 error if the environment exposes over 128 MCP/custom tools, showing a need for better dynamic tool scoping.
10. **Rogue Tmp Script Generation ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571))**: When restricted from direct file editing, the model attempts to write temporary shell scripts in random directories, leaving a messy workspace for the user.

## 4. Key PR Progress
Here are the top 10 PRs showing active development progress:

1. **Fix CI Env Vars Breaking Interactive Mode ([#26838](https://github.com/google-gemini/gemini-cli/pull/26838))**: Resolves a silent hang in `npm run start` where `CI_*` environment variables tricked the `ink` framework into thinking it was in a non-interactive environment.
2. **Restrict Permissions on Temp/State Directories ([#26063](https://github.com/google-gemini/gemini-cli/pull/26063))**: Tightens file permissions on `~/.gemini/` to protect sensitive state data (conversation history, memory, checkpoints) from local privilege escalation.
3. **Fix Proxy Support Bundling ([#26361](https://github.com/google-gemini/gemini-cli/pull/26361))**: Fixes a `TypeError: HttpsProxyAgent is not a constructor` error by correctly externalizing the proxy agent during the esbuild step.
4. **Mitigate Telemetry Heap Exhaustion ([#23809](https://github.com/google-gemini/gemini-cli/pull/23809))**: Resolves OOM crashes by capping the telemetry buffer and truncating excessively large strings before they enter the memory space.
5. **Fix Policy Engine Tool Approvals ([#26540](https://github.com/google-gemini/gemini-cli/pull/26540))**: Addresses a regression where tool approvals weren't persisting correctly, causing annoying re-prompts in `YOLO` and `AUTO_EDIT` modes.
6. **Verbose Mode for Subagents ([#19857](https://github.com/google-gemini/gemini-cli/pull/19857))**: Introduces a configurable verbose mode to stream subagent thinking and tool calls into the main history, drastically improving debuggability.
7. **Subagent Robustness against API 400 Errors ([#21265](https://github.com/google-gemini/gemini-cli/pull/21265))**: Improves error handling so that INVALID_ARGUMENT (400) errors from the Gemini API are caught gracefully, allowing the main agent to recover instead of crashing.
8. **Modular Agent Architecture Design & Interfaces ([#22097](https://github.com/google-gemini/gemini-cli/pull/22097), [#22100](https://github.com/google-gemini/gemini-cli/pull/22100))**: Lays the groundwork for a modular CLI by introducing core design docs and stable TypeScript interfaces (`Agent`, `Model`, `AgentEvent`) for plug-and-play backends.
9. **Strip `$schema` from MCP Tool Parameters ([#21963](https://github.com/google-gemini/gemini-cli/pull/21963))**: Fixes an API compatibility issue where Draft 2020-12 JSON schemas caused intermittent failures when loading MCP tools.
10. **Union-Find Context Compaction ([#24736](https://github.com/google-gemini/gemini-cli/pull/24736))**: Implements an advanced semantic clustering strategy for context compression, allowing less important messages to gracefully graduate to a "cold forest" rather than being abruptly deleted.

## 5. Feature Request Trends
*   **Advanced Context & Code Navigation**: Users and maintainers are heavily pushing for AST-aware tooling ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)) and better codebase mapping to reduce token waste and improve precision.
*   **Improved Memory Management**: There is strong momentum behind making task trackers more dynamic ([#21739](https://github.com/google-gemini/gemini-cli/issues/21739)) and allowing external trackers to hook into the CLI ([#21732](https://github.com/google-gemini/gemini-cli/issues/21732)).
*   **Robust Autonomous Capabilities**: Requests for self-healing browser sessions ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)), better use of custom skills ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)), and safely managing destructive behaviors ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)) indicate a desire for longer, truly autonomous agentic workflows.

## 6. Developer Pain Points
*   **Agent Loops & UI Hangs**: The CLI frequently gets stuck waiting for input on completed shell commands ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), and subagents silently fail while reporting success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)).
*   **Tool & Schema Overflows**: Developers integrating deeply with MCP hit hard limits (e.g., 128+ tools breaking the API context limit ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))), and JSON schema incompatibilities routinely block tool execution.
*   **Settings Being Ignored**: A major frustration is the CLI ignoring user configurations, most notably Browser agent overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)) and rogue tool permissions ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-11

## 1. Today's Highlights

No new releases were published in the last 24 hours. The community focused heavily on stability and plugin reliability, with multiple high-quality bug reports addressing parallel tool execution bypassing security hooks, orphaned `tool_use` blocks breaking session resumes, and malformed plugin manifests crashing the CLI. A clear trend toward hardening the subagent and MCP server lifecycle is emerging from both contributors and maintainers.

## 2. Releases

No new releases or pre-releases were published on 2026-05-11.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|--------------------|
| 1 | [#2893 — `preToolUse` hooks silently bypassed under parallel tool calls](https://github.com/github/copilot-cli/issues/2893) | **Security-critical.** When parallel tool calls are dispatched, a timeout on a `preToolUse` hook causes the CLI to silently fall through to "allow" without waiting for the hook result. Serial dispatch then executes tools that should have been blocked. | Reported by `torumakabe`; low comment count but high-severity implications for enterprise policy enforcement. |
| 2 | [#2392 — `preToolUse` hooks are not enforced in subagents](https://github.com/github/copilot-cli/issues/2392) | Complements #2893 — any tool restriction configured on the main agent can be trivially bypassed by delegating to a subagent via the `task` tool. | 👍 3; community sees this as a fundamental permission-model gap. |
| 3 | [#2736 — `posix_spawnp` failure misdiagnosed as missing command](https://github.com/github/copilot-cli/issues/2736) | After a `posix_spawnp` error, the agent incorrectly concludes a binary isn't on `PATH`, leading to wrong remediation suggestions. Affects macOS/Linux reliability. | 👍 3; lingering since April, still active. |
| 4 | [#3183 — Orphan `tool_use` left mid-conversation after hard kill + resume](https://github.com/github/copilot-cli/issues/3183) | Resuming a session after a hard kill leaves dangling `tool_use` blocks without matching `tool_result`, causing persistent HTTP 400 errors from the API. Blocks entire conversations. | Detailed root-cause analysis by `ulugbekna`; SDK-level fix likely needed. |
| 5 | [#3238 — Malformed `plugin.json` "commands" field crashes every prompt](https://github.com/github/copilot-cli/issues/3238) | A plugin declaring `commands` as objects instead of path strings produces an undebuggable `TypeError: a.replace is not a function` from minified code. Any bad plugin bricks the entire CLI. | Fresh report; no comments yet but high developer friction. |
| 6 | [#2901 — Lazy-load MCP servers on first tool invocation](https://github.com/github/copilot-cli/issues/2901) | All configured MCP servers connect at startup, inflating boot time as server count grows. Proposal: lazy-load on first invocation. | 👍 6 — **most upvoted issue in this window**; signals strong community demand for faster startup. |
| 7 | [#3222 — Tool-only assistant turns leave UI silent](https://github.com/github/copilot-cli/issues/3222) | When the model emits consecutive tool-only turns with no text block, the terminal UI renders nothing new, making the session appear frozen. | Affects perceived reliability; terminal-rendering gap. |
| 8 | [#3223 — `$TOOL_INPUT_FILE_PATH` for chat hooks doesn't work](https://github.com/github/copilot-cli/issues/3223) | The documented hook environment variable fails in practice; the official prettier quick-start example errors out with "no file path given." | Documentation-vs-reality mismatch; erodes trust in hooks feature. |
| 9 | [#3225 — Copilot forgets the current conversation](https://github.com/github/copilot-cli/issues/3225) | Closing the chat window to test instructions, then resuming, results in context loss. Directly impacts iterative workflows. | Zero comments so far, but relatable UX friction for GUI users. |
| 10 | [#3224 — Open GitHub Desktop from CLI](https://github.com/github/copilot-cli/issues/3224) | Feature request for a `/desktop` slash command to open GitHub Desktop in the current working directory, mirroring the existing `/ide` command. | Clean feature request; low friction if accepted. |

---

## 4. Key PR Progress

Only **one pull request** saw activity in the last 24 hours, and it does not appear to be a substantive contribution:

| PR | Title | Status | Assessment |
|----|-------|--------|------------|
| [#3163 — ViewSonic monitor](https://github.com/github/copilot-cli/pull/3163) | `monitor for #2591 ,#3561,#3559 - initiate [GitHub action] //runners` | Open | Appears to be a low-quality/spam submission. No actionable code changes for the project. |

**Summary:** No meaningful PRs were updated today. The contributor pipeline is quiet, which aligns with the lack of a new release.

---

## 5. Feature Request Trends

From the legitimate issues filed or updated in this window, three clear directions emerge:

1. **Hook system hardening** — Enforcement in subagents (#2392), proper timeout semantics (#2893), and working environment variables (#3223) are all part of a single theme: developers want hooks to be a reliable security and policy layer, not a best-effort suggestion.

2. **MCP lifecycle & startup performance** — Lazy-loading MCP servers (#2901) is the community's top-voted item. As MCP adoption grows, cold-start cost is becoming the primary UX bottleneck.

3. **Slash command extensibility** — Requests like `/desktop` (#3224) show desire for a richer command surface that bridges CLI ↔ GUI workflows.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Silent security bypasses** | #2893, #2392 | Enterprises relying on `preToolUse` hooks for compliance are exposed. Two independent bypass paths (parallel timeout, subagent delegation) undermine trust. |
| **Undebuggable crashes from plugins** | #3238 | Minified error messages with no source mapping make plugin development a black box. A single bad manifest can brick the entire CLI. |
| **Session state corruption** | #3183, #3225 | Hard kills and window-close-then-resume flows produce orphaned API messages or lost context, breaking the conversational model. |
| **Startup latency with many MCP servers** | #2901 (👍 6) | Each additional MCP server adds boot time. For users with 5+ integrations, this is no longer negligible. |
| **UI silence during tool-heavy turns** | #3222 | When the model chains tools without narration, the terminal shows nothing, and users assume a hang. Perceived reliability drops even if execution is proceeding. |

---

*Note: A significant volume of this window's issues (≈13 of 26) were spam/off-topic submissions from a single account (`parezanovicluka863-byte`). These were excluded from analysis. Maintainers may want to consider rate-limiting or automated triage filters.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-11

## 1. Today's Highlights
The community focused heavily on WebUI improvements and agent reliability, with no new official releases shipped today. Standout contributions include a new editable path bar with autocomplete for the Workspace files sidebar, and a critical fix to recover background auto-triggers after consecutive failures. Users also flagged performance degradation with the K2.6 model, signaling a potential upstream issue.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues
- **[#2219 [bug] The performance after K2.6 degraded](https://github.com/MoonshotAI/kimi-cli/issues/2219)** — Users report the K2.6 model is noticeably slower. This is worth monitoring as it may point to backend capacity or routing issues rather than the CLI itself.
- **[#2171 [OPEN] RFC: user-customizable color skins via YAML](https://github.com/MoonshotAI/kimi-cli/issues/2171)** — Proposes a `~/.kimi/skins/` YAML-based theming system to replace the rigid dark/light toggle. Important for accessibility and enterprise branding use cases.
- **[#2221 [OPEN] feat: Make MCP tool output character limit configurable](https://github.com/MoonshotAI/kimi-cli/issues/2221)** — The hard-coded `MCP_MAX_OUTPUT_CHARS = 100_000` in `toolset.py` is too restrictive for some MCP servers. A config-driven limit would improve flexibility.
- **[#2218 [OPEN] Support /goal for long-running tasks (like Codex)](https://github.com/MoonshotAI/kimi-cli/issues/2218)** — Requests a `/goal` command for managing multi-step, long-horizon tasks, drawing direct comparison to OpenAI's Codex CLI.
- **[#2121 [OPEN] Support Shift + Enter for line breaks](https://github.com/MoonshotAI/kimi-cli/issues/2121)** — The current `Ctrl+J` shortcut feels unnatural; users want the industry-standard `Shift+Enter` for multiline input. Low friction, high impact.
- **[#2206 [OPEN] WebUI sidebar: long filenames hide action buttons](https://github.com/MoonshotAI/kimi-cli/issues/2206)** — A CSS/layout bug in the Workspace files sidebar where long filenames push action buttons out of the viewport.
- **[#2216 [OPEN] Editable path bar with autocomplete in Workspace files sidebar](https://github.com/MoonshotAI/kimi-cli/issues/2216)** — Companion to #2206; requests keyboard-driven navigation for deep directory trees instead of click-only browsing.

## 4. Key PR Progress
- **[#2215 feat(webui): editable path bar with autocomplete](https://github.com/MoonshotAI/kimi-cli/pull/2215)** — Implements the feature requested in #2216. Adds smart autocomplete to a path bar in the Workspace sidebar, drastically speeding up navigation in deep projects.
- **[#2207 fix(webui): prevent long filenames from hiding action buttons](https://github.com/MoonshotAI/kimi-cli/pull/2207)** — Directly fixes #2206 by correcting Radix UI Sidebar layout overflow so expand/download buttons remain visible regardless of filename length.
- **[#2217 fix: recover background auto-trigger after cooldown](https://github.com/MoonshotAI/kimi-cli/pull/2217)** — Fixes #2193. After 3 consecutive failed background completions, pauses auto-trigger for 10 minutes, then resets the counter. Keeps user input responsive during cooldown.
- **[#2214 fix(soul): show rotated backup hint after /clear](https://github.com/MoonshotAI/kimi-cli/pull/2214)** — Improves UX clarity by surfacing the rotated backup filename after `/clear` and explicitly noting that `/undo` cannot restore pre-clear turns. Includes regression tests.
- **[#2220 feat(skill,agent): add .piebox/skills and align AGENTS.local.md loading](https://github.com/MoonshotAI/kimi-cli/pull/2220)** — Closed but notable. Added `.piebox/skills` scanning, `AGENTS.local.md` loading, and enforced skill usage via `/skill:xxx` and `/flow:xxx` triggers.

## 5. Feature Request Trends
1. **Customizable theming and UI personalization** — The RFC for YAML-based skins (#2171) and consistent requests for flexible keybindings (#2121) indicate power users want full control over their terminal experience.
2. **Long-horizon task management** — The `/goal` command request (#2218) aligns with a broader trend of treating CLI sessions as persistent, multi-step agents rather than single-turn chat interfaces.
3. **Configurable limits and guardrails** — Making MCP output limits adjustable (#2221) reflects a pattern: developers working with diverse toolchains need escape hatches from hard-coded defaults.
4. **Keyboard-first navigation in WebUI** — Both the editable path bar (#2216) and autocomplete PR (#2215) show demand for power-user ergonomics in the browser-based interface.

## 6. Developer Pain Points
- **Model performance regression on K2.6** — Users are experiencing slower responses and degraded quality (#2219). This erodes trust in the default model and may drive users to alternative providers.
- **Hard-coded limits blocking real workflows** — The 100K character ceiling on MCP tool output (#2221) silently truncates results, causing confusing failures in production toolchains.
- **Non-standard keybindings** — `Ctrl+J` for line breaks (#2121) breaks muscle memory for developers accustomed to `Shift+Enter` in competing tools.
- **WebUI layout fragility** — Long filenames breaking sidebar interactivity (#2206) is a recurring class of CSS/layout bugs that hurt perceived polish of the browser interface.
- **Opaque session management** — Users losing context after `/clear` without understanding what was preserved (#2214) highlights a gap in mental model transparency.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-11

## 1. Today's Highlights
Two rapid-fire patch releases (**v1.14.45** and **v1.14.46**) landed, introducing a safer config-editing skill and fixing HTTP API query handling. However, a regression in **v1.14.42** broke `/exit` and `/quit` autocomplete in the TUI, triggering a flood of nearly identical issues today. Community PR activity remains robust with several contributor fixes already landing for session forking, binary file detection, and ACP tool updates.

## 2. Releases

### [v1.14.46](https://github.com/anomalyco/opencode/releases/tag/v1.14.46)
- **New built-in `customize-opencode` skill** — reduces the risk of config edits breaking startup.
- **Bugfix:** Numeric and boolean HTTP API query parameters now serialize correctly in the generated OpenAPI spec and SDK (session & file endpoints).

### [v1.14.45](https://github.com/anomalyco/opencode/releases/tag/v1.14.45)
- **Bugfix:** Provider configs and API responses now accept models marked as `active`.
- **Bugfix:** Read-tool permission rules now correctly match worktree-relative paths.
- **Bugfix:** Workspace-routed HTTP API endpoints no longer reject valid `directory` and `workspace` query parameters.

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [#12661 — Agent Teams Equivalent or Better](https://github.com/anomalyco/opencode/issues/12661) | Top-voted feature request (👍 110, 33 comments). Community wants multi-agent orchestration comparable to Claude Code's Agent Teams. |
| 2 | [#26549 — /exit and /quit missing from autocomplete](https://github.com/anomalyco/opencode/issues/26549) | The `/exit` regression affects daily workflow. Users must use Ctrl-C or the command palette instead. 11 comments, 18 👍. |
| 3 | [#26684 — Was the /exit command removed?](https://github.com/anomalyco/opencode/issues/26684) + [#26659](https://github.com/anomalyco/opencode/issues/26659), [#26761](https://github.com/anomalyco/opencode/issues/26761), [#26710](https://github.com/anomalyco/opencode/issues/26710) | Four near-duplicate reports confirm `/exit` still works when typed but is invisible in autocomplete—and in some builds prints "Exiting." without actually closing. A hotfix is expected imminently. |
| 4 | [#21470 — OpenCode is heavily CPU-bound](https://github.com/anomalyco/opencode/issues/21470) | With gemini-3.1 at 300 k tokens, OpenCode itself consumed >1.5× the cost of API calls. 9 comments; points to profiling work needed in the core event loop. |
| 5 | [#24316 — Progress halts with qwen 3.6 35b-a3b on naked tool call](https://github.com/anomalyco/opencode/issues/24316) | Streaming hangs on a popular open-weight model, suggesting incomplete tool-call parsing for models with non-standard output formats. |
| 6 | [#25824 — oh-my-openagent custom agents invisible in Desktop GUI](https://github.com/anomalyco/opencode/issues/25824) | Plugin agents load and appear in the plugin list but don't populate the agent selector dropdown. Blocks the plugin ecosystem on Desktop. |
| 7 | [#22528 — How to turn off sound effects and animations](https://github.com/anomalyco/opencode/issues/22528) | 41 👍 — users want a toggle for TUI splash animation and sound. A quick-settings flag would resolve this. |
| 8 | [#20802 — Image attachments don't reach vision models via custom providers](https://github.com/anomalyco/opencode/issues/20802) | Multimodal workflows broken for OpenAI-compatible custom providers; images silently dropped. |
| 9 | [#23804 — `opencode serve` leaks ~14 GB/hr of .so files in /tmp](https://github.com/anomalyco/opencode/issues/23804) | Non-pooled ripgrep Workers cause unbounded disk growth on long-running serve instances. Critical for deployment use cases. |
| 10 | [#26716 — @ file listing broken in Chinese locale](https://github.com/anomalyco/opencode/issues/26716) | The `@` mention command fails to list files when the OS locale is set to Chinese. Highlights i18n gaps in path handling. |

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#26756 — Discover LM Studio models from /v1/models](https://github.com/anomalyco/opencode/pull/26756) | Replaces the static LM Studio catalog with dynamic model discovery, so loaded/unloaded models are reflected immediately. |
| 2 | [#26292 — LLM provider fallback chain](https://github.com/anomalyco/opencode/pull/26292) | Adds configurable automatic failover across providers on transient errors (rate-limit, overload, 5xx). Long-requested reliability feature. |
| 3 | [#25821 — Expose v2 model listing API](https://github.com/anomalyco/opencode/pull/25821) | New v2 REST endpoint exposing model pricing, capabilities, provider, and variant details; aligns `ModelV2` naming across SDK. |
| 4 | [#26765 — Persist session model switches outside event flag](https://github.com/anomalyco/opencode/pull/26765) | Bypasses the experimental v2 event gate for model switches so `session.model` stays consistent—a targeted fix for #26741. |
| 5 | [#26400 — Resolve @-tags from external editor output](https://github.com/anomalyco/opencode/pull/26400) | After `prefix+e` external edit, `@filename` references are now resolved to proper file context instead of staying as plain text. |
| 6 | [#26763 — Replay Cerebras reasoning in assistant content](https://github.com/anomalyco/opencode/pull/26763) | Fixes Cerebras model reasoning display by correctly replaying `reasoning_content` through the OpenAI-compatible adapter. |
| 7 | [#20672 — MCP resource subscription support](https://github.com/anomalyco/opencode/pull/20672) | Implements MCP resource subscriptions and templates, exposing live resource updates through the SDK client. |
| 8 | [#21907 — Free model resolution](https://github.com/anomalyco/opencode/pull/21907) | Adds `--model free` flag that auto-resolves to a random free-tier provider model. Great for onboarding and zero-cost testing. |
| 9 | [#18767 — Mobile Touch Optimization](https://github.com/anomalyco/opencode/pull/18767) | Adapts the Desktop app for touch/mobile devices with gesture support and responsive layouts. |
| 10 | Quick merges by @jonasboos: [#26751](https://github.com/anomalyco/opencode/pull/26751) (duplicate skill warning), [#26752](https://github.com/anomalyco/opencode/pull/26752) (empty body session fork), [#26753](https://github.com/anomalyco/opencode/pull/26753) (ACP tool name fix), [#26754](https://github.com/anomalyco/opencode/pull/26754) (extensionless binary detection) | Four contributor bugfix PRs merged the same day—demonstrating healthy review velocity for community patches. |

## 5. Feature Request Trends

1. **Multi-agent orchestration** — Agent Teams (#12661) is the clear top request. Users want parallel, coordinated agent workflows.
2. **Model flexibility & resilience** — GPT-5.5 support (#24039), free model resolution (#21907), and provider fallback chains (#26292) all point to users wanting broader, more reliable model access.
3. **UX polish** — Vim keybindings (#11111), collapsible reasoning (#15257), per-session auto-accept (#21578), and a terminal mascot (#26745) indicate a maturing user base demanding refined interaction.
4. **Platform & packaging** — Flatpak (#5651), Pop!_OS support (#26746), and continued Windows issues show demand for first-class Linux distribution and Windows stability.
5. **Telemetry & diagnostics** — Tokens-per-second display (#6096) and performance profiling (#21470) suggest power users want observability into cost and latency.

## 6. Developer Pain Points

- **The `/exit` regression is the #1 friction today.** At least four separate issues were filed, collectively accumulating 24+ comments. The command still executes but is invisible in autocomplete and may not actually terminate the process. A patch is urgently needed.
- **CPU and memory overhead.** Reports of CPU-bound behavior (#21470), 14 GB/hr temp file leaks (#23804), and general performance degradation (#24771) indicate that resource management under heavy use needs profiling and optimization.
- **Desktop plugin agent visibility.** Multiple reports (#25824, #26516) confirm that plugins like `oh-my-openagent` load correctly but their custom agents don't appear in the GUI selector—a blocker for the plugin ecosystem.
- **Custom provider rough edges.** Image attachments silently failing for OpenAI-compatible providers (#20802) and Cerebras reasoning not rendering (#26762) show that the long-tail of provider integrations needs more integration testing.
- **Localization gaps.** The `@` command failing in Chinese locales (#26716) and paste issues in the API key prompt (#26708) highlight that non-English workflows still have basic breakage.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-11

## 1. Today's Highlights
The Pi community is actively navigating a turbulent transition period following a major repository and package namespace migration (`@mariozechner` → `@earendil-works`). The weekend surge of issues reveals growing pains around the monorepo reorganization, with multiple bugs tagged under the new `closed-because-refactor` and `closed-because-weekend` triage labels. Despite this, contributor momentum remains strong with new provider integrations (NVIDIA NIM, Volcengine) and significant UX improvements landing in pull requests.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues

1. **Organization Change Sparks Community Confusion** — [Issue #4349](https://github.com/earendil-works/pi/issues/4349)
   The silent migration from `@mariozechner/pi-coding-agent` to `@earendil-works/pi-coding-agent` is breaking extensions and frustrating users. The community is requesting transparency around the organizational shift and better communication.

2. **`pi update --self` Points to Deprecated Repository** — [Issue #4362](https://github.com/earendil-works/pi/issues/4362)
   A direct consequence of the org change: the self-updater is still fetching from the old `@mariozechner` npm namespace, causing `pi update --self` to pull deprecated packages instead of the latest versions.

3. **Core Dump on `/resume` Due to Memory Pressure** — [Issue #4355](https://github.com/earendil-works/pi/issues/4355)
   V8's Mark-Compact garbage collector hits a 4GB ceiling during session hydration. This critical startup bug suggests memory leaks in long-running or large session restoration.

4. **Agent "Working" State Loops Indefinitely Without Progress** — [Issue #4338](https://github.com/earendil-works/pi/issues/4338)
   A high-impact UX issue where the agent gets stuck in a loop claiming to "work" but produces no output or file changes. Users are forced to manually kill and restart sessions.

5. **SDK Documentation Out of Sync with Codebase** — [Issue #4375](https://github.com/earendil-works/pi/issues/4375)
   The official SDK docs at `pi.dev` still reference deprecated tool imports (`readTool`, `bashTool`, `readOnlyTools`), misleading extension developers and breaking new integrations.

6. **Aborted Messages Silently Treated as Complete** — [Issue #4290](https://github.com/earendil-works/pi/issues/4290)
   When a thinking turn is stopped due to length limits, Pi incorrectly treats it as a natural completion rather than a truncation. This leads to incomplete reasoning being silently accepted.

7. **External Editor Input Hijacked on Windows** — [Issue #4372](https://github.com/earendil-works/pi/issues/4372)
   The `Ctrl+G` external editor integration fails to pass input correctly to non-visual editors (like Helix) on Windows, requiring a double Enter workaround. Related to the long-standing [Issue #715](https://github.com/earendil-works/pi/issues/715) for similar key-eating behavior on other platforms.

8. **`ANTHROPIC_AUTH_TOKEN` Conflicts with Third-Party Providers** — [Issue #4342](https://github.com/earendil-works/pi/issues/4342)
   The Anthropic SDK automatically reads `ANTHROPIC_AUTH_TOKEN` and sends it alongside `x-api-key`, causing 401 errors for non-Anthropic providers using the `anthropic-messages` API format.

9. **Hard Crash on `write ENOBUFS` During Streaming** — [Issue #4382](https://github.com/earendil-works/pi/issues/4382)
   Pi crashes entirely under high-volume output (e.g., rapid status-line redraws) due to an unhandled `ENOBUFS` error on `process.stdout`. A missing error handler is the root cause.

10. **Anthropic SSE Parser Drops Events Missing `event:` Field** — [Issue #4381](https://github.com/earendil-works/pi/issues/4382)
    Company AI gateways that omit the `event:` line in SSE streams find their payloads silently discarded by Pi's parser, breaking corporate proxy setups.

## 4. Key PR Progress

1. **Background Direct Bash Commands (`Ctrl+B`)** — [PR #4367](https://github.com/earendil-works/pi/pull/4367), [PR #4368](https://github.com/earendil-works/pi/pull/4368)
   Adds the ability to background interactive `!` bash commands with `Ctrl+B`, falling back to standard cursor navigation when no command is running. A significant UX improvement for long-running shell operations.

2. **O(n) JSON Output Mode** — [PR #4374](https://github.com/earendil-works/pi/pull/4374)
   Introduces `--json-no-partial` to drastically reduce output overhead. Previously, every streaming token emitted the full accumulated content (O(n²)), making long sessions prohibitively expensive for machine consumers.

3. **NVIDIA NIM Built-in Provider** — [PR #4360](https://github.com/earendil-works/pi/pull/4360)
   Adds NVIDIA NIM as a first-class OpenAI-compatible provider with access to 67 tool-capable models via their `integrate.api.nvidia.com` endpoint.

4. **Volcengine Provider with Kimi, MiniMax, GLM Models** — [PR #4380](https://github.com/earendil-works/pi/pull/4380)
   Integrates Volcengine using the Anthropic-compatible API, adding support for kimi-k2.6, minimax-m2.7, and glm-5.1 models.

5. **Proxy Environment Support for Bun WebSockets** — [PR #4354](https://github.com/earendil-works/pi/pull/4354)
   Fixes Bun's WebSocket to respect `HTTP_PROXY`/`HTTPS_PROXY` environment variables, resolving connectivity issues for users behind corporate proxies.

6. **Fireworks Provider Session Affinity** — [PR #4358](https://github.com/earendil-works/pi/pull/4358)
   Adds session affinity routing for Fireworks AI to fix prompt cache misses on serverless infrastructure, ensuring users actually benefit from discounted `cacheRead` pricing.

7. **Markdown Checkbox Rendering** — [PR #4379](https://github.com/earendil-works/pi/pull/4379)
   Fixes the TUI to properly render checkboxes in Markdown to-do lists, addressing a long-standing visual gap in the terminal UI.

8. **Indented List Wrapping** — [PR #4327](https://github.com/earendil-works/pi/pull/4327)
   Implements proper list-item wrapping with hanging indentation and quote rendering, significantly improving readability in narrow terminal windows.

9. **Slash Command Prefix Matching** — [PR #4363](https://github.com/earendil-works/pi/pull/4363)
   Allows slash commands to be resolved by shortest unambiguous prefix (e.g., `/ed` for `/editor`), reducing keystrokes for power users.

10. **Termux Documentation Fix** — [PR #4282](https://github.com/earendil-works/pi/pull/4282)
    Corrects the Android/Termux setup instructions to use `termux-open --chooser` instead of the unsupported `-c` flag.

## 5. Feature Request Trends

- **Provider Ecosystem Expansion:** Strong demand for first-class provider integrations continues, with community members contributing adapters for regional cloud AI services (Volcengine, NVIDIA NIM) and requesting better proxy/gateway compatibility.
- **Session Management & Cleanup:** Users want smarter session lifecycle management — warnings about untracked scratch files left by the LLM ([Issue #4378](https://github.com/earendil-works/pi/issues/4378)), better resume stability, and cleaner session state after agent failures.
- **TUI Theme & Rendering Improvements:** Multiple requests for finer-grained theme control, including status-colored tool borders ([Issue #4369](https://github.com/earendil-works/pi/issues/4369)) and better Markdown rendering fidelity.
- **Robust Streaming & Retry Logic:** Several issues highlight the need for more resilient SSE parsing, proper `Retry-After` header handling ([Issue #4377](https://github.com/earendil-works/pi/issues/4377)), and detection of truncated streams ([Issue #4345](https://github.com/earendil-works/pi/issues/4345)).

## 6. Developer Pain Points

- **Namespace Migration Breakage:** The `@mariozechner` → `@earendil-works` transition is the dominant pain point. The self-updater, npm packages, and internal imports are out of sync, leaving users stranded on old versions ([Issue #4288](https://github.com/earendil-works/pi/issues/4288), [Issue #4362](https://github.com/earendil-works/pi/issues/4362)). Clear migration documentation is urgently needed.
- **Agent Reliability During Long Sessions:** Users frequently encounter stuck "Working" states, silent truncations, and core dumps — especially during complex multi-step tasks. These reliability issues undermine trust in the agent for production use.
- **Editor Integration Fragility:** The `Ctrl+G` external editor feature remains unreliable across platforms (key-eating on Linux/macOS, input failure on Windows), suggesting fundamental issues with terminal subprocess management.
- **Documentation Drift:** SDK docs and inline help lag behind actual API surfaces, wasting developer time. The community is increasingly frustrated by outdated examples that no longer compile.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-11

## 1. Today's Highlights
Qwen Code shipped **v0.15.10** alongside a nightly build, focusing on CLI command validation and OpenAI wire-level logging. A critical regression from v0.15.7—**binary misclassification of text files by `read_file`, `write_file`, and `edit` tools**—dominated community discussion, prompting five independent bug reports and two closures. Meanwhile, substantial feature PRs landed to reduce initial prompt size via tool deferral and replace the file crawler with `git ls-files` + `ripgrep`, signaling a strong push toward performance and local model compatibility.

## 2. Releases

**v0.15.10** ([Release](https://github.com/QwenLM/zwen-code/releases))
- **CLI validation**: `/model` command arguments are now properly validated ([PR #3963](https://github.com/QwenLM/qwen-code/pull/3963) by @yiliang114).
- **Debug logging**: Core now logs the actual OpenAI request sent on the wire, aiding debugging of proxy and routing issues (by @tanzhenxin).

**v0.15.9-nightly.20260510.f4d0ad6b7** — Nightly build containing the same changes as above for early adopters.

## 3. Hot Issues

1. **[#3964](https://github.com/QwenLM/qwen-code/issues/3964) — Encrypted .c/.cpp/.h files misidentified as binary** (P1, CLOSED): Regression from v0.15.7 where the `edit` and `write_file` tools misidentify encrypted C/C++ header files as binary payloads. Affects Windows 11 environments with DRM-protected file systems. 7 comments indicate active triage.

2. **[#3945](https://github.com/QwenLM/qwen-code/issues/3945) — `edit` tool deadlocks on large files** (P1, CLOSED): `read_file` truncates large files, but `edit` requires a "fully read" precondition, creating an impossible deadlock. 5 comments; impacts developers working with 800+ line files.

3. **[#4010](https://github.com/QwenLM/qwen-code/issues/4010) — `read_file` marks large files as binary after truncation** (CLOSED): Files over 800 lines are incorrectly flagged as binary after truncation, blocking subsequent edits. Directly related to the v0.15.7 regression cluster.

4. **[#4003](https://github.com/QwenLM/qwen-code/issues/4003) — `write_file` unreliable for Markdown files** (OPEN): Agent-written Markdown files are frequently misidentified as binary on subsequent writes, forcing full rewrites or workarounds. Reported by Chinese-speaking users.

5. **[#4004](https://github.com/QwenLM/qwen-code/issues/4004) — UTF-8 text with Chinese + Markdown characters flagged as binary** (P1, OPEN): Encoding detection is too conservative; Chinese text combined with Markdown special characters triggers false binary classification.

6. **[#4024](https://github.com/QwenLM/qwen-code/issues/4024) — C# `.cs` files rejected as binary** (CLOSED): `edit`/`write_file` reject certain `.cs` files as binary, extending the misclassification pattern to C# source files.

7. **[#4025](https://github.com/QwenLM/qwen-code/issues/4025) — Statusline context percentage inaccurate** (OPEN): The `cxt` metric doesn't accurately reflect real token usage, causing premature or late `/compact` calls that lose context or cause errors.

8. **[#4000](https://github.com/QwenLM/qwen-code/issues/4000) — Redesign `/commit` to leverage AI for message drafting** (OPEN): Previous implementation was a thin `git add -A && git commit` wrapper. Community wants genuine AI-powered commit message generation with diff analysis.

9. **[#4033](https://github.com/QwenLM/qwen-code/issues/4033) — Excessive CPU/power usage while waiting for external processes** (OPEN): During dependency downloads or compilation, Qwen Code consumes too much power while idle—critical for laptop battery life.

10. **[#4028](https://github.com/QwenLM/qwen-code/issues/4028) — Performance gap vs. llama.cpp web UI** (OPEN): Users report significantly slower token output compared to llama.cpp's web interface when using local GGUF models, raising concerns about inference overhead.

## 4. Key PR Progress

1. **[PR #4022](https://github.com/QwenLM/qwen-code/pull/4022) — Defer low-frequency built-in tools to reduce prompt size** (@wenshao): Marks 6 tools (Monitor, SendMessage, Skill, TaskStop, TodoWrite, WebFetch) as deferrable with `searchHint` keywords, aligning with Claude Code's strategy to shrink the initial prompt sent to the model.

2. **[PR #3214](https://github.com/QwenLM/qwen-code/pull/3214) — Replace fdir crawler with `git ls-files` + ripgrep fallback** (@scrollDynasty): Eliminates the expensive full-tree re-scan on every keystroke for `@` file mentions. Two-tier strategy respects `.gitignore` and dramatically improves performance on large repos.

3. **[PR #3974](https://github.com/QwenLM/qwen-code/pull/3974) — Auto-retry on model-unloaded errors** (@B-A-M-N): Local servers (LM Studio, etc.) unload models after inactivity. This PR adds automatic 2-second-delay retry, eliminating first-request failures.

4. **[PR #4023](https://github.com/QwenLM/qwen-code/pull/4023) — Preserve prompt and queue on ESC cancel** (@wenshao): Cancelling mid-execution no longer strands the prompt in history or drops queued follow-up inputs. Critical UX fix for multi-step workflows.

5. **[PR #3973](https://github.com/QwenLM/qwen-code/pull/3973) — Fix MCP server persistence** (@B-A-M-N): Headers no longer dropped when adding SSE/HTTP servers; server deletions now persist correctly using `setValueFullSave()`.

6. **[PR #3990](https://github.com/QwenLM/qwen-code/pull/3990) — Token Plan as first-class auth provider** (@yiliang114): Adds `token-plan` option to VS Code companion settings with full WebView config sync, expanding authentication flexibility.

7. **[PR #3991](https://github.com/QwenLM/qwen-code/pull/3991) — DASHSCOPE_PROXY_BASE_URL for prompt caching** (@HeZiGang): Enables DashScope prompt caching through API gateway proxies, important for enterprise deployments.

8. **[PR #3849](https://github.com/QwenLM/qwen-code/pull/3849) — Cross-authType model resolution** (@B-A-M-N): Extracts model resolution logic from GeminiClient into the data layer (ModelRegistry + ModelsConfig), enabling cross-provider model lookups.

9. **[PR #3785](https://github.com/QwenLM/qwen-code/pull/3785) — `/doctor memory` diagnostics command** (@yiliang114): New subcommand providing point-in-time memory snapshots with `--json` structured output for bug reports and benchmarking.

10. **[PR #4032](https://github.com/QwenLM/qwen-code/pull/4032) — Fix `/stats model` broken line display** (@Jerry2003826): Expands the model/source column for single-model views to prevent wrapping; adds regression tests.

## 5. Feature Request Trends

- **Unified profile & multi-device sync**: A cluster of issues ([#4012](https://github.com/QwenLM/qwen-code/issues/4012), [#4015](https://github.com/QwenLM/qwen-code/issues/4015), [#4013](https://github.com/QwenLM/qwen-code/issues/4013), [#4017](https://github.com/QwenLM/qwen-code/issues/4017)) requests Git-backed config sync, cross-tool mapping (Claude Code, DeepSeek-TUI, OpenCode), and `/export`/`/import` commands for portable profiles.
- **Interoperability & MCP**: [#4007](https://github.com/QwenLM/qwen-code/issues/4007) and [#4008](https://github.com/QwenLM/qwen-code/issues/4008) propose running Qwen Code as an MCP Server or HTTP API Server, exposing tools to external agents like Claude Desktop and Alibaba Cloud Bailian.
- **Skill packaging & plugin ecosystem**: [#4014](https://github.com/QwenLM/qwen-code/issues/4014) introduces `.skill.tar.gz` format with integrity verification; [#4009](https://github.com/QwenLM/qwen-code/issues/4009) proposes preinstalling Bailian CLI for multimodal capabilities.
- **Anti-sycophancy & personality control**: [#4011](https://github.com/QwenLM/qwen-code/issues/4011) and [#4018](https://github.com/QwenLM/qwen-code/issues/4018) request an "anti-flattery protocol" as a core personality definition, reflecting user desire for more honest, assertive LLM behavior.
- **CLI UX polish**: TAB completion for `/model` ([#4029](https://github.com/QwenLM/qwen-code/issues/4029)), message queuing with UI indicators ([#4021](https://github.com/QwenLM/qwen-code/issues/4021)), and encrypted config storage ([#4016](https://github.com/QwenLM/qwen-code/issues/4016)).

## 6. Developer Pain Points

- **Binary misclassification is the top pain point**: The encoding/type detection regression (v0.15.7+) affects `.c`, `.cpp`, `.h`, `.cs`, `.md`, and UTF-8 Chinese text across `read_file`, `write_file`, and `edit`. This is the single most reported and impactful issue cluster this cycle, effectively breaking core workflows for non-ASCII and large file editing.
- **Large file handling**: The truncation + "fully read" precondition creates a deadlock ([#3945](https://github.com/QwenLM/qwen-code/issues/3945)), making the edit tool unusable for files exceeding ~800 lines—a daily frustration for real-world codebases.
- **Context window opacity**: Inaccurate `cxt` percentage ([#4025](https://github.com/QwenLM/qwen-code/issues/4025)) means developers can't reliably manage context, leading to sudden errors or unnecessary `/compact` data loss.
- **Local model UX**: Performance gaps vs. llama.cpp ([#4028](https://github.com/QwenLM/qwen-code/issues/4028)) and excessive CPU during idle waits ([#4033](https://github.com/QwenLM/qwen-code/issues/4033)) degrade the experience for users running local models on resource-constrained hardware.

</details>