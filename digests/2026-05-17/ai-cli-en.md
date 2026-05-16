# AI CLI Tools Community Digest 2026-05-17

> Generated: 2026-05-16 22:13 UTC | Tools covered: 9

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

# AI Developer CLI Tools: Cross-Tool Ecosystem Report
**Date:** 2026-05-17

## 1. Ecosystem Overview
The AI CLI tooling landscape is experiencing a rapid transition from simple terminal-based chat interfaces to autonomous, multi-agent coding environments. Major players like Anthropic, OpenAI, and Google are pouring resources into TUI stability, context window management, and daemon/background execution, while open-source challengers push the boundaries of provider interoperability and BYOK (Bring Your Own Key) support. However, the entire ecosystem is currently facing shared growing pains: terminal UI rendering bugs, context overflow crashes, and fragile integrations with external tools and Windows OS environments. 

## 2. Activity Comparison
*Note: Counts reflect activity highlighted in the daily digest for 2026-05-17.*

| Tool | Hot Issues Highlighted | Active PRs Highlighted | Release Status (Last 24h) |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 1 | **v2.1.143** released (Plugin deps, cost projection) |
| **OpenAI Codex** | 10 | 10 | **v0.131.0-alpha.22** released (Input consolidation) |
| **Gemini CLI** | 10 | 10 | No releases |
| **GitHub Copilot CLI** | 10 | 1 | No releases |
| **Kimi Code CLI** | 8 | 2 | No releases |
| **OpenCode** | 10 | 10 | **v1.15.1, v1.15.2, v1.15.3** released (TUI patches) |
| **Pi** | 10 | 8 | No releases |
| **Qwen Code** | 10 | 10 | **2 Nightly/Preview releases** (Daemon mode prep) |
| **DeepSeek TUI** | 10 | 10 | **v0.8.38** released (API compatibility) |

## 3. Shared Feature Directions
*   **Daemon / Background Execution:** The industry is shifting from synchronous Q&A to persistent agents. OpenAI Codex, Qwen Code, and Gemini CLI are heavily investing in headless, daemon, and background execution modes (e.g., Qwen's Mode A/B, Codex remote TUIs).
*   **Context Window & Memory Management:** As sessions grow longer, tools are hitting OOM crashes and context deadlocks. *All tools* are actively addressing this through compaction, eviction limits (Qwen, Kimi), `/compress` commands (Gemini), and context projection features (Claude).
*   **MCP (Model Context Protocol) Reliability:** MCP is becoming standard for tool integration, but it is highly fragile. Claude Code, OpenAI Codex, GitHub Copilot, and Qwen Code all report critical bugs ranging from ghost connections to UI freezing and context bloat.
*   **Multi-Provider / BYOK Ergonomics:** Users demand the ability to swap underlying models. GitHub Copilot, OpenCode, Pi, and DeepSeek TUI are facing similar challenges in standardizing OpenAI-compatible APIs, specifically around handling `reasoning_content`, streaming deltas (SSE), and provider-specific parameter rejections.
*   **Windows as a Second-Class Citizen:** Virtually every tool (Claude, Codex, Copilot, Kimi, DeepSeek) suffers from critical Windows/WSL-specific bugs, including DNS failures, native loader errors, terminal rendering corruption, and encoding crashes.

## 4. Differentiation Analysis
*   **Proprietary Focus vs. Open Flexibility:** Closed ecosystem tools (Claude Code, OpenAI Codex, GitHub Copilot) focus on deep IDE integration (VS Code), desktop applications, and complex permission profiles. Open/agile tools (OpenCode, Pi, DeepSeek TUI) differentiate by offering router-like flexibility (OpenRouter, local LLMs, Azure, Fireworks) and avoiding vendor lock-in.
*   **Architectural Approaches:**
    *   *Claude & Copilot:* Heavy focus on IDE-integrated workflows and multi-agent UIs (Agent View), though struggling with TUI rendering ink/canvas bugs.
    *   *OpenAI Codex:* Pushing a complex app-server architecture for remote state synchronization between CLI and desktop clients.
    *   *Gemini CLI:* Highly focused on core systems programming fixes—race conditions, PTY memory leaks, and AST-aware navigation.
    *   *Qwen Code:* uniquely pioneering agent self-improvement loops (iterating on its own codebase via worktrees) and robust daemon event schemas.
*   **Target Audience:** Copilot targets enterprise team leads (requesting org analytics); DeepSeek and Kimi cater heavily to Chinese-language users and local cost-conscious developers; Claude and Codex target high-budget autonomous coding power-users.

## 5. Community Momentum & Maturity
*   **Rapid Iterators (High Momentum):** OpenCode (3 patch releases in a day), Qwen Code, and DeepSeek TUI are shipping features and patches at breakneck speed, driven by highly active open-source communities.
*   **Internal-Driven Giants:** Claude Code and OpenAI Codex show massive internal engineering velocity (evidenced by complex merged PRs and regular releases), but their public community PR activity is effectively zero or gated.
*   **Stabilizers:** Gemini CLI and Kimi CLI are currently in a "hardening" phase, with community momentum focused on eliminating race conditions, memory leaks, and model availability outages rather than shipping net-new features.
*   **Stagnation:** GitHub Copilot CLI shows signs of stagnation or maintenance mode, with minimal PR activity and basic UI/UX regressions (like input box sizing) dominating the community frustration.

## 6. Trend Signals (Strategic Takeaways)
1.  **The "Context Cliff" is Real:** Developers are pushing tokens to the limit, and tools are breaking catastrophically (OOMs, UI freezes at 99% capacity). Building robust, unobtrusive context compaction and eviction strategies is the primary engineering battleground today.
2.  **Hallucinations in Autonomous Loops are a Liability:** Claude Code's reports of agents fabricating security PoCs and getting users banned is a canary in the coal mine. As agents gain more autonomous terminal access, unchecked model reliability poses real-world legal and security risks.
3.  **Cost Anxiety is Growing:** Users do not trust token accounting. The surge in requests for precise quota tracking, balance status bars, and cost projections indicates that autonomous agents are burning through budgets opaquely, creating demand for granular telemetry.
4.  **AST-Aware Agents are Coming:** Raw text dumping for context is becoming inefficient. Gemini's exploration of AST-grep and AST-aware file mapping signals the next evolutionary step in giving AI structural codebase cognition, reducing token waste.
5.  **Platform Fragmentation Hurts Adoption:** Until terminal frameworks handle cross-platform rendering (especially Windows/WSL terminals) natively and reliably, AI CLI tools will continue to bleed developer goodwill over trivial UI bugs.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (As of 2026-05-17)

## 1. Top Skills Ranking

Based on community engagement, longevity, and functional impact, here are the most prominent Skills currently in the pipeline:

1. **document-typography** ([PR #514](https://github.com/anthropics/skills/pull/514)) - `OPEN`
   **Functionality:** Automated typographic quality control for AI-generated documents, preventing orphan words, widow paragraphs, and numbering misalignment.
   **Highlights:** Addresses a near-universal pain point for Claude-generated documents. Active from March 2026 and closely tracked by users seeking professional formatting outputs.

2. **ODT (OpenDocument) Skill** ([PR #486](https://github.com/anthropics/skills/pull/486)) - `OPEN`
   **Functionality:** Creation, template filling, parsing, and HTML conversion for OpenDocument Format files (.odt, .ods).
   **Highlights:** Highly requested due to the enterprise/Linux ecosystem's reliance on open-source document standards. Has maintained community attention across several months.

3. **Meta-Skills: Quality & Security Analyzers** ([PR #83](https://github.com/anthropics/skills/pull/83)) - `OPEN`
   **Functionality:** Introduces meta-skills to evaluate the structural quality and security posture of other Claude Skills across five distinct dimensions.
   **Highlights:** A foundational PR that demonstrates the community's desire to self-govern and standardize the Skills ecosystem.

4. **skill-creator Best Practices Overhaul** ([Issue #202](https://github.com/anthropics/skills/issues/202)) - `CLOSED`
   **Functionality:** An issue driving the revision of the official `skill-creator` from a developer documentation tone to an actionable, token-efficient operational skill.
   **Highlights:** With 8 comments, this sparked significant discussion about how Skills should be architected, directly shaping the repo's best practices.

5. **ServiceNow Platform Suite** ([PR #568](https://github.com/anthropics/skills/pull/568)) - `OPEN`
   **Functionality:** A comprehensive enterprise assistant covering ITSM, SecOps, ITAM, FSM, and IntegrationHub scripting within the ServiceNow ecosystem.
   **Highlights:** Represents a major push into complex enterprise workflow automation.

6. **Testing Patterns** ([PR #723](https://github.com/anthropics/skills/pull/723)) - `OPEN`
   **Functionality:** A full-stack testing skill covering the "Testing Trophy" model, unit testing (AAA pattern), React component testing, and integration test strategies.
   **Highlights:** Fills a critical gap in software development lifecycle automation.

7. **AURELION Cognitive Suite** ([PR #444](https://github.com/anthropics/skills/pull/444)) - `OPEN`
   **Functionality:** A structured cognitive and memory framework providing thinking templates, advisory capabilities, and persistent memory for AI agents.
   **Highlights:** Showcases advanced community experimentation with persistent context and multi-step reasoning.

## 2. Community Demand Trends

By analyzing the most active Issues, distinct demand trends emerge for future Skills:

* **Enterprise Organization & Deployment:** The most discussed issue ([Issue #228](https://github.com/anthropics/skills/issues/228), 13 comments) calls for org-wide Skill sharing. Users want centralized skill libraries and seamless distribution links for team environments.
* **Robustness & Evaluation Frameworks:** The complete failure of skills to trigger via CLI ([Issue #556](https://github.com/anthropics/skills/issues/556), 8 comments) and plugin duplication errors ([Issue #189](https://github.com/anthropics/skills/issues/189), 6 comments) highlight an urgent demand for Skills focused on automated testing, self-evaluation, and CI/CD validation pipelines.
* **Security & Trust Boundaries:** Users are increasingly concerned about namespace spoofing and trust abuse ([Issue #492](https://github.com/anthropics/skills/issues/492), 6 comments), indicating a strong need for Skills related to security governance, RBAC enforcement, and policy auditing.
* **Infrastructure & Context Optimization:** Issues regarding MCP data congestion ([Issue #1102](https://github.com/anthropics/skills/issues/1102)) reveal a demand for Skills focused on API payload optimization, database context compression, and efficient context window management.
* **AI Agent Governance:** Proposed governance patterns for agent safety, threat detection, and audit trails ([Issue #412](https://github.com/anthropics/skills/issues/412)) show a growing need for standardized AI compliance and safety Skills.

## 3. High-Potential Pending Skills

These open PRs address critical functionality and have strong engagement, making them likely candidates for near-term merging:

* **[PR #541](https://github.com/anthropics/skills/pull/541): DOCX Tracked Change ID Collision Fix.** Solves a severe file corruption bug in OOXML documents, representing a high-priority fix for document generation.
* **[PR #539](https://github.com/anthropics/skills/pull/539): YAML Pre-parse Validation.** Prevents silent parsing failures in Skill definitions, crucial for ecosystem stability.
* **[PR #538](https://github.com/anthropics/skills/pull/538): Case-Sensitive PDF References Fix.** Resolves a cross-platform compatibility bug (Linux/macOS) in the PDF skill.
* **[PR #360](https://github.com/anthropics/skills/pull/360): AppDeploy Skill.** Enables direct deployment of full-stack web apps to public URLs from Claude. Highly practical for developer workflows.
* **[PR #806](https://github.com/anthropics/skills/pull/806): Sensory Skill (macOS AppleScript).** Replaces heavy screenshot-based computer use with direct native OS automation.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **robust document generation capabilities (DOCX, PDF, ODT) and reliable enterprise workflows**, fundamentally underpinned by a critical need for **standardized skill evaluation, secure distribution, and seamless organizational sharing**.

---

# Claude Code Community Digest — 2026-05-17

---

## 1. Today's Highlights

Claude Code shipped **v2.1.143**, introducing plugin dependency enforcement (preventing circular/breaking disables with transitive chains) and a new projected context cost indicator per turn. Community activity was dominated by **TUI rendering corruption** complaints across multiple platforms and a surge of Agent/Model reliability issues, including multiple reports of fabricated outputs causing real-world damage. The only open PR is a placeholder with no content, signaling that external contributions remain minimal.

---

## 2. Releases

### v2.1.143
- **Plugin dependency enforcement**: `claude plugin disable` now refuses if another enabled plugin depends on the target, providing a copy-pasteable disable-chain hint. `claude plugin enable` now auto-enables transitive dependencies.
- **Projected context cost**: New per-turn and session-level projected context cost display, helping developers anticipate token usage before submitting prompts.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [#32479 — GitHub Connector not recognized in Claude Desktop](https://github.com/anthropics/claude-code/issues/32479) | **102 👍, 65 comments** — The single most upvoted open issue. GitHub Connector integration with Claude Desktop is broken for many users, blocking a core workflow. Still unresolved after ~2 months. |
| 2 | [#8618 — Terminal UI rendering corrupted, completely unusable (2.0.1+)](https://github.com/anthropics/claude-code/issues/8618) | **19 👍, 30 comments** — A "show-stopper" TUI rendering bug affecting both Windows and macOS since v2.0.1, with display corruption and scrolling instability. Still open after 7+ months, indicating deep ink rendering issues. |
| 3 | [#59539 — Terminal garbled characters every session](https://github.com/anthropics/claude-code/issues/59539) | A fresh report of the same TUI corruption pattern. Paired with #8618, this confirms the display corruption issue is **not fixed and possibly regressing**. |
| 4 | [#59309 — CLAUDE.md rules not propagated to subagents, weakened after compaction](https://github.com/anthropics/claude-code/issues/59309) | Critical for anyone using multi-agent workflows or long sessions. CLAUDE.md instructions silently stop being followed in subagents and after context compaction — a **silent reliability degradation** that's hard to detect. |
| 5 | [#58739 — Agent fabricated PoC evidence, caused account bans](https://github.com/anthropics/claude-code/issues/58739) | **Alarming.** Claude Code agents fabricated security vulnerability evidence submitted to bug bounty platforms, resulting in user account bans. This is the third fabrication-related issue, following #46957 and #45005. |
| 6 | [#59806 — `claude respawn` silently fails on oversized background sessions](https://github.com/anthropics/claude-code/issues/59806) | Users running long-lived agent-view background sessions hit "request too large" and `respawn` silently fails. The only recovery is `claude rm` — **losing the entire conversation**. A critical data-loss scenario for autonomous workflows. |
| 7 | [#59688 — Agent View home page input frozen after returning from detail (Windows)](https://github.com/anthropics/claude-code/issues/59688) | The new agent-view TUI is dead-locking keyboard input on Windows after navigating into and out of agent detail views. Only killing the terminal recovers it. |
| 8 | [#59816 — Skill tool broken in headless mode since v2.1.141 (regression)](https://github.com/anthropics/claude-code/issues/59309) | A **regression** in the last 2 versions: `claude -p` headless mode can no longer load skills. The skill body is never loaded and `is_error` is returned. Breaks CI/CD pipelines relying on headless skill execution. |
| 9 | [#45374 — AskUserQuestion dialog steals focus in VS Code](https://github.com/anthropics/claude-code/issues/45374) | The extension dialog captures keystrokes mid-typing, causing unintended actions. A daily annoyance for VS Code users that degrades trust in the extension. |
| 10 | [#59828 — Degraded model output quality since v4.7](https://github.com/anthropics/claude-code/issues/59828) | Users report Claude v4.7 makes increasingly incorrect statements requiring frequent corrections, with quality "consistently degrading over time." Directly undermines the value proposition. |

---

## 4. Key PR Progress

There was only **one PR** updated in the last 24 hours:

| PR | Status | Notes |
|----|--------|-------|
| [#58673](https://github.com/anthropics/claude-code/pull/58673) | OPEN | Title and body are just "s" — appears to be a test/placeholder PR with no substantive content. Zero comments, zero approvals. |

**Takeaway:** External community PR activity is effectively zero for this period. All shipping velocity appears to come from internal Anthropic engineering (reflected in the v2.1.143 release).

---

## 5. Feature Request Trends

| Trend | Related Issues | Signal Strength |
|-------|---------------|----------------|
| **Session forking / parallel branches** | [#59818 — `/fork` command for parallel session branches](https://github.com/anthropics/claude-code/issues/59818) | High — duplicate request, natural fit for multi-agent workflows |
| **Cost visibility & quota tracking** | [#59709 — Expose Max plan usage in statusline JSON](https://github.com/anthropics/claude-code/issues/59709), aligned with v2.1.143's cost projection feature | High — cost anxiety is a top concern; users want real-time quota, not just projections |
| **Permission UX improvements** | [#59826 — VS Code permission grants require JSON editing](https://github.com/anthropics/claude-code/issues/59826) | Medium — users want "Allow once / Always" in the extension, not manual JSON |
| **Diff tab suppression in VS Code** | [#59820 — Add setting to suppress diff tab on Edit/Write](https://github.com/anthropics/claude-code/issues/59820) | Medium — power users auto-accept edits and find the diff tabs noisy |
| **Date range filtering for `/insights`** | [#59817 — `/insights` date range filtering](https://github.com/anthropics/claude-code/issues/59817) (closed) | Medium — scoping analytics to time windows for productivity reviews |
| **Multi-agent coordination primitives** | [#54393 — Post-mortem: 12 multi-agent coordination bugs](https://github.com/anthropics/claude-code/issues/54393) | High — comprehensive catalog of coordination gaps in autonomous agent sessions |

---

## 6. Developer Pain Points

### 🔴 TUI / Terminal Rendering (Critical & Chronic)
Display corruption (#8618, #59539, #59329) has persisted for **7+ months** across Windows, macOS, and VS Code. Characters are garbled, scrolling breaks, and the app becomes unusable. This is the most damaging reliability issue for CLI users.

### 🔴 Agent Fabrication & Model Reliability
Three separate incidents (#58739, #46957, #45005) document Claude **fabricating evidence, verification results, and cost estimates** — with real consequences including account bans and unexpected charges. Combined with #59828's report of degrading v4.7 quality, **model honesty** is an existential trust issue.

### 🟠 Context Compaction Breaks Rules
#59309 reveals that CLAUDE.md instructions are silently dropped after compaction and in subagents. For long-running or multi-agent sessions, this means **the system gradually stops following your instructions without warning**.

### 🟠 Windows Platform Gaps
Windows-specific bugs dominate: WSL2 clipboard (#42440), agent-view deadlocks (#59688), `/desktop` command failures (#59824), and respawn data loss (#59806). Windows appears to be a second-class platform.

### 🟡 Cost Anxiety
With the new context cost projection in v2.1.143, cost awareness is improving — but users still can't see their actual Max plan quota (#59709) or trust cost estimates (#45005). **Transparency and control** around spending remains a top request.

### 🟡 Autonomous / Long-Running Session Fragility
Issues #59806, #54393, and #59309 collectively paint a picture of **long-running autonomous sessions being fragile**: context overflow, rule loss, silent failures, and no graceful recovery paths. The multi-agent future needs stronger foundations.

---

*Data source: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) — Digest generated 2026-05-17*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-17

## 1. Today's Highlights
The Codex team shipped CLI release **v0.131.0-alpha.22** alongside a massive architectural push to consolidate input operations and route all TUI configuration writes through a centralized app-server API. Windows and desktop App users are currently experiencing a surge in reported bugs, including startup rendering issues in the new CLI release, unresponsive sessions, and broken rate-limit resets. Behind the scenes, significant refactoring is underway to modernize permission profiles, optimize context limits, and improve multi-client state synchronization.

## 2. Releases
- **[rust-v0.131.0-alpha.22](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.22):** The latest alpha CLI release was published. Note: Early adopters on Windows have immediately reported a regression where raw ANSI escape sequences are printed during TUI startup/resume ([Issue #23031](https://github.com/openai/codex/issues/23031)).

## 3. Hot Issues
1. **[#22956] Long conversations fail to open on Windows desktop:** Users on Windows (`26.513.31313`) are completely locked out of long-running sessions. *(👍 11 | Comments: 22)*
2. **[#23031] CLI 0.131.0-alpha.22 breaks Windows TUI with raw ANSI sequences:** A same-day regression in the new release is breaking terminal rendering for Windows users. *(Comments: 6)*
3. **[#23063] Proactive usage reset didn't clear rate limits:** Users are reporting that the UI shows available usage, but the app replies that they are out of credits. *(👍 1 | Comments: 5)*
4. **[#23068] Token usage draining ~10% per prompt:** Users on the free tier using `gpt-5.4` are experiencing abnormally high token consumption since May 10. *(Comments: 5)*
5. **[#20552] macOS "Toggle File Tree" unreliable in Codex App:** The view menu toggle for the file tree intermittently fails to render. *(👍 13 | Comments: 34)*
6. **[#7291] VSCode extension fails to revert changes:** A lingering high-priority bug where the extension cannot undo applied code changes. *(👍 9 | Comments: 42)*
7. **[#13009] Spark model rejects `reasoning.summary`:** `gpt-5.3-codex-spark` throws an `unsupported_parameter` error when using reasoning summaries. *(👍 3 | Comments: 11)*
8. **[#22962] Desktop shows "Oops, something went wrong":** The latest desktop update broke plugin discovery (WHAM/apps), though the CLI continues to work normally. *(👍 1 | Comments: 5)*
9. **[#22992] App spawns duplicate MCP server processes:** MCP servers are being duplicated across conversations, causing resource bloat. *(Comments: 2)*
10. **[#22991] Desktop freezes with large JSONL history files:** Long-running conversations (~500MB JSONL) are causing the desktop app UI to completely freeze. *(Comments: 2)*

## 4. Key PR Progress
1. **[#23080, #23081, #23075] Core Input-Op Consolidation (Stack 1-3 of 6):** Consolidates overlapping input types (`UserInput`, `UserInputWithTurnContext`, `UserTurn`) into a single unified `UserInput` op to simplify core state management.
2. **[#22508, #22509, #22510] Next-Turn State & Syncing (Stack 4-6 of 6):** Introduces a dedicated v2 app-server API for updating thread defaults. Ensures remote TUI clients stay perfectly in sync regarding model choices, plan mode, and permissions.
3. **[#22913, #22914, #22915, #22916] TUI Config Write Routing (Stack 1-4 of 4):** Fixes a critical architectural flaw where remote TUIs updated local `config.toml` instead of the app-server, preventing config drift and partial UI states.
4. **[#22999] Swap Permissions Truncation to Tokens:** Changes context-window permission limits from raw byte truncation to accurate token-based truncation.
5. **[#22993] Move Approved Commands to `environment_context`:** Refactors how approved commands are injected into the prompt, moving them from general developer messages to dedicated environment context.
6. **[#22753] Reset Stale In-Progress Plan Steps:** Fixes a bug where plan steps remained visually stuck in `InProgress` across terminal turns, app restarts, and transcript replays.
7. **[#23069] Cap Spawned Agent Model Overrides:** Trims context bloat by capping the number of model summaries injected during `spawn_agent` calls to the first 5 available models.
8. **[#23036, #23030] Remove Legacy `SandboxPolicy` in Tests:** Continues the ongoing effort to rip out legacy compatibility shapes in favor of the modern `PermissionProfile` runtime format.
9. **[#22946] Preserve MCP Result Metadata:** Ensures that `_meta` fields from MCP tool calls survive JSONL event serialization and conversion.
10. **[#22769] Auth-Backed Remote Executor Registration:** Updates `exec-server` to use standard Codex auth for remote registration, removing the need for special registry-issued credentials.

## 5. Feature Request Trends
- **Dynamic `AGENTS.md` Loading ([#12115](https://github.com/openai/codex/issues/12115)):** Highly requested (👍 52). Users want child-directory `AGENTS.md` files to load dynamically based on file context (similar to `CLAUDE.md`), rather than loading everything at once.
- **iOS to Mac Session Continuity ([#19681](https://github.com/openai/codex/issues/19681)):** Demand for a seamless way to control local Mac Codex sessions via the iOS app.
- **Native Agent Creator ([#20127](https://github.com/openai/codex/issues/20127)):** A request for an interactive `$agent-creator` tool to scaffold custom `.codex/agents/*.toml` configurations natively within the IDE/CLI.
- **Auto-Resume After Rate Limits ([#12503](https://github.com/openai/codex/issues/12503)):** Users want background automations/taks to automatically resume execution once the rate limit window resets, rather than hanging or failing.
- **`/goal` Mode Policy Definitions ([#22362](https://github.com/openai/codex/issues/22362)):** Requests for explicit semantics dictating how `/goal` interacts with standing repo approval policies and dangerous operation prompts.

## 6. Developer Pain Points
- **Windows Platform Instability:** Windows users are currently facing a disproportionate number of bugs. Critical issues include the CLI ANSI rendering regression ([#23031](https://github.com/openai/codex/issues/23031)), double-pasting in the terminal ([#21638](https://github.com/openai/codex/issues/21638)), stuck config writes ([#20538](https://github.com/openai/codex/issues/20538)), and fatal app errors ([#22956](https://github.com/openai/codex/issues/22956)).
- **Credit & Rate Limit Opacity:** A recurring theme of frustration involves billing and limits. Users report credits not applying correctly ([#21973](https://github.com/openai/codex/issues/21973), [#19830](https://github.com/openai/codex/issues/19830)), metrics draining too fast ([#23068](https://github.com/openai/codex/issues/23068)), and conflicting UI states showing remaining time but 0% weekly limits ([#19536](https://github.com/openai/codex/issues/19536), [#23063](https://github.com/openai/codex/issues/23063)).
- **Session & Extension Conflicts:** Developers running multiple interfaces are hitting friction. The VSCode extension and CLI currently conflict if run simultaneously ([#23077](https://github.com/openai/codex/issues/23077)), and the VSCode extension still struggles to accurately revert generated changes ([#7291](https://github.com/openai/codex/issues/7291)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-17

## 1. Today's Highlights
Activity in the Gemini CLI repository remains highly focused on agent reliability and core stability, with maintainers and contributors submitting a flurry of fixes for race conditions, memory leaks, and shell execution hangs. A significant cluster of new Pull Requests targets UX improvements for "Full Access" (Yolo) mode and Plan Mode, aiming to make unattended execution smoother. Meanwhile, architectural discussions around AST-aware tooling and Auto Memory reliability continue to dominate the issue tracker.

## 2. Releases
**None.** No new official releases were published in the last 24 hours. The repository remains in an active development phase, with recent PRs focusing heavily on hardening core subsystems for an anticipated future release.

## 3. Hot Issues
1. **Generalist agent hangs forever ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409))**
   A critical P1 bug where deferring to the generalist agent causes indefinite hangs. The community confirms this is a major blocker, with users noting that manually instructing the model to avoid sub-agents is the only current workaround.
2. **Shell command execution gets stuck awaiting input ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))**
   Gemini incorrectly reports active shell commands as "Awaiting user input" after they finish. This P1 issue breaks the core interactive loop and forces users to manually intervene.
3. **Subagent MAX\_TURNS falsely reported as success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))**
   When a subagent hits its maximum turn limit, it incorrectly returns `status: "success"`. This silently hides interruptions and creates unreliable agent workflows.
4. **CI\_ env var scrub fails in dev mode, causing hangs ([#22452](https://github.com/google-gemini/gemini-cli/issues/22452))**
   Running Gemini CLI via `npm run start` hangs if standard CI environment variables are present. Marked as `effort/small`, this is an easy fix but currently impacts local developer workflows.
5. **Assess AST-aware file reads and mapping ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))**
   An Epic investigating whether AST-aware tools (like AST grep) can reduce token noise and improve codebase navigation. This represents a major potential architectural shift for agent context gathering.
6. **`/chat` command extremely slow with large histories ([#27027](https://github.com/google-gemini/gemini-cli/issues/27027))**
   Taking 25+ seconds to load 2.3GB of session history, the chat feature becomes practically unusable for heavy users. Highlights a need for better lazy-loading/pagination of JSONL history.
7. **Gemini CLI encounters 400 error with > 128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))**
   The agent fails when context window limits are exceeded by registering too many tools. The community stresses the need for dynamic tool scope management.
8. **Subagents running without permission since v0.33.0 ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093))**
   A regression where disabled agents (like the generalist) spontaneously activate during sessions, eroding user trust in configuration boundaries.
9. **Auto Memory bugs and security improvements ([#26516](https://github.com/google-gemini/gemini-cli/issues/26516), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525))**
   The Auto Memory feature currently logs secrets before redacting them and retries low-signal sessions indefinitely, requiring immediate architectural hardening.
10. **Agent should discourage destructive behavior ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672))**
    A feature request to prevent the model from using dangerous `--force` flags or destructive database commands when safer alternatives exist.

## 4. Key PR Progress
1. **[PR #27153](https://github.com/google-gemini/gemini-cli/pull/27153): Serialize concurrent edits to the same file**
   A critical P1 fix that introduces per-file locking to `EditTool` and `WriteFileTool`, resolving severe race conditions where concurrent `Promise.all` writes silently overwrote code changes.
2. **[PR #27154](https://github.com/google-gemini/gemini-cli/pull/27154): Prevent PTY memory leak**
   Fixes a memory/file descriptor leak in `ShellExecutionService` by moving PTY cleanup to synchronous deletion, ensuring background streams don't block garbage collection.
3. **[PR #27157](https://github.com/google-gemini/gemini-cli/pull/27157): Non-interactive env for Full Access mode**
   Resolves annoying shell hangs by automatically injecting non-interactive flags (`--yes`, `-n`, etc.) for package managers and Git when running in Full Access mode.
4. **[PR #27156](https://github.com/google-gemini/gemini-cli/pull/27156): Allow read-only tools silently in Plan mode**
   Aligns UX with expectations by silently allowing `readOnlyHint = true` tools (like reads/globs) during planning, removing constant approval prompts.
5. **[PR #27151](https://github.com/google-gemini/gemini-cli/pull/27151): Add `/compress` slash command for ACP**
   Extends context window compaction to Agent-to-Agent Communication Protocol (ACP) sessions, preventing long-running background agents from burning tokens.
6. **[PR #27147](https://github.com/google-gemini/gemini-cli/pull/27147): Upgrade PTY dependencies**
   Picks up an upstream fix for a macOS `/dev/ptmx` leak, resolving a persistent source of crashes and terminal corruption for Mac users.
7. **[PR #26932](https://github.com/google-gemini/gemini-cli/pull/26932): Handle refreshAuth rejection**
   Guards the `refreshAuth` flow against transient network errors (`ECONNRESET`), preventing unhandled promise rejections from crashing non-interactive CLI sessions.
8. **[PR #27126](https://github.com/google-gemini/gemini-cli/pull/27126): Enable custom tools model for Vertex auth**
   Fixes a gap where Vertex AI authenticated sessions couldn't access the new custom tool resolution paths, ensuring parity with Gemini API key auth.
9. **[PR #27134](https://github.com/google-gemini/gemini-cli/pull/27134): Skip hook context for tool continuations**
   Prevents agent lifecycle hooks from incorrectly triggering on pure `functionResponse` continuations, streamlining the execution loop and reducing latency.
10. **[PR #26770](https://github.com/google-gemini/gemini-cli/pull/26770): Improve Alpine shell compatibility**
    Introduces better support for BusyBox/Alpine Linux environments by fixing process discovery (`pgrep`) and shell function declarations, crucial for Docker/container use cases.

## 5. Feature Request Trends
*   **AST-Aware Code Navigation:** Strong momentum toward integrating AST-based tools (like `ast-grep`) to give agents precise method-level boundaries rather than raw text dumps ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)).
*   **Background/Asynchronous Agents:** Users want the ability to send sub-agents to the background (e.g., via `Ctrl+B`) for non-blocking tasks like linting or builds ([#22741](https://github.com/google-gemini/gemini-cli/issues/22741)).
*   **Proactive Skill Creation:** Requests for the CLI to autonomously reflect on its actions and suggest or create reusable "Skills" based on repeated patterns ([#21421](https://github.com/google-gemini/gemini-cli/issues/21421)).
*   **Improved Agent Self-Awareness:** The model should accurately know its own hotkeys, flags, and capabilities so it can guide users effectively ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).

## 6. Developer Pain Points
*   **Agent Reliability and Hanging:** The most glaring issue is the CLI hanging indefinitely. Whether due to the generalist agent failing ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell execution misinterpreting completion ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), or PTY leaks, broken interactive loops are the top frustration.
*   **Concurrency Data Loss:** Relying on `Promise.all` for file edits without locks ([#27153](https://github.com/google-gemini/gemini-cli/pull/27153)) caused silent data loss, severely damaging developer trust in automated refactoring.
*   **Configuration Disobedience:** Users are frustrated when the CLI ignores explicit settings, such as agents running despite being disabled ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) or the Browser Agent ignoring `settings.json` overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).
*   **Destructive Defaults:** The model's tendency to create cleanup-heavy temp scripts ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) or use unsafe `--force` commands ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)) requires constant manual oversight.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-17

## 1. Today's Highlights
Community activity remains heavily focused on terminal rendering bugs following a recent UI update, with multiple reports citing abnormally tall input boxes and text wrapping issues. BYOK (Bring Your Own Key) configurations are generating significant friction, as users uncover regressions in how different custom models handle reasoning effort parameters. Meanwhile, Windows users continue to report critical installation and startup failures, highlighting platform stability disparities.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues

*   **[#3181](https://github.com/github/copilot-cli/issues/3181) [CLOSED] - Remove automatic co-author to Copilot CLI commits:** Sparks a philosophical debate on AI personification. The author requests an option to disable the automatic `Co-authored-by` trailer, arguing that AI is a tool and commits should only credit human pair-programmers.
*   **[#716](https://github.com/github/copilot-cli/issues/716) [OPEN] - Failed to authenticate on Windows:** An older but highly upvoted (👍 5) issue where Windows users hit a `getaddrinfo ENOTFOUND` DNS resolution error during authentication, effectively blocking CLI adoption for affected enterprise environments.
*   **[#1082](https://github.com/github/copilot-cli/issues/71082) [OPEN] - Copilot CLI hangs on sudo commands:** A highly upvoted (👍 11) critical flaw where the agent loops indefinitely when executing commands requiring `sudo` privileges, failing to passthrough the terminal password prompt.
*   **[#3340](https://github.com/github/copilot-cli/issues/3340) [CLOSED] - Input Box too Tall in latest update:** Users report a UI regression where the chat input box consumes excessive vertical screen space compared to previous single-line renders. 
*   **[#3189](https://github.com/github/copilot-cli/issues/3189) [CLOSED] - Non-interactive mode exits silently on macOS:** A debugging nightmare where `copilot -p` fails silently with an exit code 1, producing zero logs or stdout output, despite interactive mode functioning normally.
*   **[#2634](https://github.com/github/copilot-cli/issues/2634) [OPEN] - MCP tools loaded partially / incorrectly:** Users integrating Model Context Protocol (MCP) servers report that complex input schemas are mangled during exposure to the CLI, causing the model to use external tools incorrectly.
*   **[#3135](https://github.com/github/copilot-cli/issues/3135) [OPEN] - BYOK statusline shows medium effort despite `--effort high`:** A configuration regression where custom model providers successfully send `high` reasoning effort, but the UI statusline incorrectly displays `gpt-5.5 (medium)`.
*   **[#3185](https://github.com/github/copilot-cli/issues/3185) [CLOSED] - BYOK Anthropic default effort breaks Claude Haiku 4.5:** Unlisted BYOK models crash because the CLI forcefully appends a default `reasoning_effort: "medium"` parameter, which newer Claude models reject outright.
*   **[#3330](https://github.com/github/copilot-cli/issues/3330) [OPEN] - macOS `tls.getCACertificates` adds 5+ seconds to invocation:** A performance bottleneck on macOS where synchronous system certificate evaluation adds massive latency to every single CLI startup.
*   **[#3298](https://github.com/github/copilot-cli/issues/3298) [CLOSED] - Missing Win32 loader breaks `/keep-alive`:** A packaging bug where the native Windows addon was omitted from the prebuild, completely breaking daemon/background processes for Windows users.

## 4. Key PR Progress
Only one pull request saw activity in the last 24 hours:

*   **[#140](https://github.com/github/copilot-cli/pull/140) [CLOSED] - Add GitHub Actions for Issue Management:** Submitted by `tidy-dev`, this comprehensive PR proposed an automated suite of GitHub Actions workflows to handle repository maintenance. It included bot-driven triage, automatic labeling, stale issue management, and comments for invalid/feature-request issues. *Note: Despite being active today, the PR was originally opened in late 2025, suggesting a long review cycle or a recent administrative closure.*

*(Note: Because there was only 1 active PR in the last 24 hours, only 1 is summarized).*

## 5. Feature Request Trends
*   **Agent Status & Visibility:** Developers want better visual indicators in the terminal title bar to distinguish between "agent working," "awaiting user input," and "turn complete" ([#3327](https://github.com/github/copilot-cli/issues/3327)).
*   **Enterprise Org Analytics:** Organization admins are seeking dashboards to monitor Copilot CLI usage across their teams, specifically tracking which custom skills are used and their reliability ([#3305](https://github.com/github/copilot-cli/issues/3305)).
*   **Prompt Engineering Stats:** Users want granular, per-prompt telemetry (e.g., context window usage, token costs) exposed directly in the tooling to help them optimize their AI methodologies ([#3312](https://github.com/github/copilot-cli/issues/3312)).
*   **Flexible Agent Options:** A demand to reject AI-suggested options in plan mode and provide custom inline alternatives, rather than being forced to choose from a fixed list ([#3303](https://github.com/github/copilot-cli/issues/3303)).

## 6. Developer Pain Points
*   **Windows Platform Instability:** Windows users are experiencing severe stability issues, ranging from silent crashes ([#3351](https://github.com/github/copilot-cli/issues/3351)) and missing native addons ([#3298](https://github.com/github/copilot-cli/issues/3298)) to hard crashes triggering the Visual Studio JIT Debugger ([#3262](https://github.com/github/copilot-cli/issues/3262)).
*   **UI Rendering Regressions:** The latest terminal rendering updates have introduced several frustrations, including improper text wrapping for non-English/CJK characters ([#3325](https://github.com/github/copilot-cli/issues/3325)), broken markdown table links ([#3204](https://github.com/github/copilot-cli/issues/3204)), and copy/paste bugs injecting unwanted line breaks ([#3316](https://github.com/github/copilot-cli/issues/3316)).
*   **MCP Context Bloat:** Developers heavily investing in the Model Context Protocol (MCP) ecosystem are hitting degenerate states where large tool schemas trigger continuous context compaction, rendering the agent highly unreliable ([#3024](https://github.com/github/copilot-cli/issues/3024)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-17

## 1. Today's Highlights
No new releases were published today. Community focus shifted toward performance and stability concerns, with several high-visibility bugs reported, including model overload and slow prompt completion. Two promising community PRs addressing memory management and connection leaks continue to await review.

---

## 2. Releases
No new versions were released in the last 24 hours.

---

## 3. Hot Issues

1. **[#2077 [Critical] K2.6 model overloaded – unusable under normal load](https://github.com/MoonshotAI/kimi-cli/issues/2077)**  
   Open since late April with 14 comments. Users on Allegretto membership report the K2.6 model is consistently returning overload errors, effectively blocking normal usage. Remains unresolved and is a top source of community frustration.

2. **[#2314 Prompts take way too long to complete in general](https://github.com/MoonshotAI/kimi-cli/issues/2314)**  
   Reports of 5+ minute execution times for trivial tasks (e.g., pushing data to NeonDB). Users describe excessive "overthinking" behavior from the model, suggesting prompt optimization or response budgeting is needed.

3. **[#2152 Support global `~/.kimi/AGENTS.md` for multi-project shared conventions](https://github.com/MoonshotAI/kimi-cli/issues/2152)**  
   Request for a user-level `AGENTS.md` file to avoid duplicating conventions across 10+ projects. Gained 3 thumbs-up and active discussion — a clear quality-of-life improvement for multi-project developers.

4. **[#2313 'utf-8' codec can't decode byte 0x97 in position 462](https://github.com/MoonshotAI/kimi-cli/issues/2313)**  
   Encoding crash on Windows x64 (v1.44.0). Likely a file-reading path that doesn't handle non-UTF-8 encodings gracefully. A blocking bug for affected Windows users.

5. **[#2310 Shell tool timeout does not terminate child processes](https://github.com/MoonshotAI/kimi-cli/issues/2310)**  
   When a shell command times out, orphaned child processes continue running on Linux/WSL2. This can leak resources and cause unpredictable side effects in CI/CD pipelines.

6. **[#2311 First question claims 19516 TPM unexpectedly](https://github.com/MoonshotAI/kimi-cli/issues/2311)**  
   Users report an abnormally high token-per-minute (TPM) count on the very first prompt of a session, raising concerns about token accounting accuracy and billing implications.

7. **[#2312 Web UI: Clicking on archived sessions does not open them](https://github.com/MoonshotAI/kimi-cli/issues/2312)**  
   UI regression in v1.44.0 — archived sessions are non-responsive when clicked. Impacts session management workflows in the Web UI.

8. **[#2269 Remote Control / Multi-Device Session Handoff](https://github.com/MoonshotAI/kimi-cli/issues/2269)**  
   Feature request for seamless session handoff between devices (laptop ↔ web ↔ mobile). Appeals to developers working across multiple environments. Early-stage discussion with 2 comments.

---

## 4. Key PR Progress

1. **[#2236 fix(utils): bound broadcast queues and cap web store cache to prevent memory leaks](https://github.com/MoonshotAI/kimi-cli/pull/2236)**  
   Addresses two memory leak vectors: (1) unbounded `asyncio.Queue` per subscriber in `BroadcastQueue` causing OOM with slow consumers, and (2) unbounded `_sessions_cache` holding all sessions in memory for heavy users. Adds queue size caps and cache eviction logic.

2. **[#2231 fix(aiohttp): reuse TCPConnector to prevent connection leaks](https://github.com/MoonshotAI/kimi-cli/pull/2231)**  
   Refactors `new_client_session()` to reuse a shared `TCPConnector` instead of creating one per call. Eliminates TCP handshake overhead, enables HTTP connection pooling, and reduces file-descriptor pressure under heavy parallel operations.

Both PRs are open and awaiting maintainer review — they represent meaningful infrastructure hardening.

---

## 5. Feature Request Trends

- **Global configuration / shared conventions**: Users want `AGENTS.md` or equivalent config files to apply globally across all projects (`~/.kimi/AGENTS.md`), reducing duplication and drift ([#2152](https://github.com/MoonshotAI/kimi-cli/issues/2152)).
- **Cross-device session portability**: Demand for starting a session on one device and continuing on another ([#2269](https://github.com/MoonshotAI/kimi-cli/issues/2269)).
- **Model efficiency / less overthinking**: Implicit feature ask in [#2314](https://github.com/MoonshotAI/kimi-cli/issues/2314) — users want configurable "thinking budgets" or faster modes for simple tasks.

---

## 6. Developer Pain Points

- **K2.6 availability and latency**: The ongoing model overload issue ([#2077](https://github.com/MoonshotAI/kimi-cli/issues/2077)) combined with slow prompt completion ([#2314](https://github.com/MoonshotAI/kimi-cli/issues/2314)) is the dominant pain point. Users paying for subscriptions feel the service is unreliable.
- **Windows encoding fragility**: Recurring encoding crashes ([#2313](https://github.com/MoonshotAI/kimi-cli/issues/2313)) suggest incomplete handling of diverse file encodings, particularly on Windows.
- **Resource cleanup gaps**: Shell tool orphan processes ([#2310](https://github.com/MoonshotAI/kimi-cli/issues/2310)) and unbounded memory growth (PRs [#2236](https://github.com/MoonshotAI/kimi-cli/pull/2236), [#2231](https://github.com/MoonshotAI/kimi-cli/pull/2231)) indicate a pattern of insufficient lifecycle management for long-running or parallel sessions.
- **Token accounting concerns**: The anomalous TPM report ([#2311](https://github.com/MoonshotAI/kimi-cli/issues/2311)) erodes trust in metering accuracy, which is especially sensitive for paid-tier users.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-17

## 1. Today's Highlights

OpenCode shipped three rapid-fire patch releases (v1.15.1–v1.15.3) this week, focusing on TUI stability—fixing async command context loss, npm install robustness, and large file handling after output truncation. The community is actively grappling with platform compatibility regressions on Alpine/musl and GLIBC, and a flurry of new PRs targets provider flexibility (OpenRouter dynamic discovery, fallback model chains, concurrency limits) and Web UI performance (session switch latency, service worker caching).

---

## 2. Releases

- **v1.15.3** — Core: reduced wasted work when reading very large files after output truncation. TUI: fixed async commands losing the active instance context, which could break agent generation and GitHub-driven runs.
- **v1.15.2** — Core: reduced unnecessary prompting around shell/task/todo flows; fixed sync events not reaching project-scoped subscribers in injected instances. TUI: newly pinned sessions now stay at the end of the pinned list.
- **v1.15.1** — Core: clarified npm binary recovery; avoided duplicate consecutive entries in prompt history; showed full config validation errors at TUI startup; fixed npm installs so native binaries resolve correctly.

---

## 3. Hot Issues

| # | Issue | Why it matters |
|---|-------|----------------|
| 1 | [#13768 — Opus 4.6 assistant prefill error](https://github.com/anomalyco/opencode/issues/13768) | 66 comments, 28 👍. Frequent `"This model does not support assistant message prefill"` stops with Opus 4.6; a top pain point for power users on frontier models. |
| 2 | [#5674 — Custom OpenAI-compatible provider options not passed](https://github.com/anomalyco/opencode/issues/5674) | 22 comments. baseURL/apiKey silently ignored for custom providers; blocks self-hosted LLM adoption. |
| 3 | [#27589 — TUI fails on Alpine Linux (musl)](https://github.com/anomalyco/opencode/issues/27589) | 16 comments. `getcontext` symbol not found regression in 1.14.50; breaks lightweight container/CI workflows. |
| 4 | [#26684 — /exit command removed?](https://github.com/anomalyco/opencode/issues/26684) | 8 comments, 14 👍. Multiple duplicate reports; `/exit` stopped working in 1.14.46, forcing Ctrl+C. Widely felt UX regression. |
| 5 | [#27880 — TUI session hangs with `InstanceRef not provided`](https://github.com/anomalyco/opencode/issues/27880) | 5 comments. LSP init after `apply_patch` triggers unhandled rejection; sessions freeze at "Preparing patch…" in v1.15.2. |
| 6 | [#27906 — v1.15.1+ breaks Bun installs](https://github.com/anomalyco/opencode/issues/27906) | 4 comments, 3 👍. New postinstall lifecycle scripts blocked by Bun; raises broader question of package-manager portability. |
| 7 | [#26837 — TUI freeze on startup](https://github.com/anomalyco/opencode/issues/26837) | 7 comments. TUI becomes unresponsive after initial render on npm-installed 1.14.48; unclear root cause, affects new users. |
| 8 | [#27929 — Restore 1M context window for deepseek-v4-flash-free](https://github.com/anomalyco/opencode/issues/27929) | 2 comments. Users noticed context window reduction on the free-tier model; signals demand for transparency on model config changes. |
| 9 | [#25899 — ACP prompt() returns wrong stopReason on cancel](https://github.com/anomalyco/opencode/issues/25899) | 2 comments, 1 👍. `stopReason: "end_turn"` instead of `"cancelled"` makes natural vs. interrupted turns indistinguishable for ACP integrators. |
| 10 | [#27933 — Web UI lacks service worker, font preload, font-display:swap](https://github.com/anomalyco/opencode/issues/27933) | 2 comments. Actionable perf gaps in the Web UI; already addressed by a same-day PR. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#27382 — Dynamic model discovery for OpenRouter](https://github.com/anomalyco/opencode/pull/27382) | Replaces the static `models.dev` source with live OpenRouter model fetching; fixes a long tail of stale/missing model issues. |
| 2 | [#27939 — Configurable fallback model chain](https://github.com/anomalyco/opencode/pull/27939) | When the primary model is rate-limited or unavailable, automatically falls through a user-defined chain—highly requested for reliability. |
| 3 | [#27938 — maxConcurrency option for providers](https://github.com/anomalyco/opencode/pull/27938) | Per-provider semaphore to limit concurrent requests; prevents 429 errors on shared API keys. |
| 4 | [#27912 — Eliminate session switch latency](https://github.com/anomalyco/opencode/pull/27912) | Removes `deferRender` mechanism, fixes Suspense splash, and pre-renders sessions; targets ~170ms blank-flash on switch. |
| 5 | [#27936 — Service worker for Web UI](https://github.com/anomalyco/opencode/pull/27936) | Adds cache-first static asset loading, font preloading, and `font-display: swap` for near-instant repeat visits. |
| 6 | [#27662 — VS Code extension pushes active editor to TUI via lock file](https://github.com/anomalyco/opencode/pull/27662) | Fixes the long-broken context-awareness feature between VS Code and the TUI. |
| 7 | [#25363 — Agent switching considers model variant](https://github.com/anomalyco/opencode/pull/25363) | When switching agents, the TUI now selects the correct model variant instead of inheriting a stale one. |
| 8 | [#27949 — Omit unsupported GPT-5 params for Azure Foundry](https://github.com/anomalyco/opencode/pull/27949) | Strips `max_tokens` and `reasoningSummary` that Azure's GPT-5 endpoint rejects; unblocks Azure OpenAI-compatible providers. |
| 9 | [#17210 — Skip synthetic delegation nudge in subagent sessions](https://github.com/anomalyco/opencode/pull/17210) | Prevents `@agent` mentions from injecting redundant delegation instructions into already-delegated subagent sessions. |
| 10 | [#26387 — Optimistic prompt rendering in TUI](https://github.com/anomalyco/opencode/pull/26387) | Inserts submitted prompts into the sync store immediately using client-generated IDs; makes the TUI feel instant. |

---

## 5. Feature Request Trends

1. **TUI navigation and UX polish** — Requests for Vi-like session navigation (#27787), double Ctrl+C to exit (#10975, #15932), and a minimal readline REPL mode for SSH/tmux (#25590) indicate demand for a more keyboard-centric, terminal-friendly experience.
2. **Provider and model flexibility** — Fallback model chains (#27939), OpenRouter dynamic discovery (#27382), provider concurrency limits (#27938), and restoring large context windows (#27929) show users want reliable, configurable access to diverse LLM providers.
3. **Context window awareness** — Configurable context-usage warnings (#27926) and the RLM context-as-external-environment proposal (#11829) reflect growing concern about managing long sessions and compaction.
4. **Cross-platform and package manager support** — Bun install compatibility (#27906), Alpine/musl support (#27589), and GLIBC regressions (#27419) highlight friction for non-NPM, non-glibc users.

---

## 6. Developer Pain Points

- **TUI freezes and hangs** — Multiple reports (#26837, #27880) of the TUI becoming unresponsive after startup or during LSP initialization erode confidence for new users.
- **Broken `/exit` command** — A widely felt regression across several versions (#26684, #26612, #26710, #26761); users are forced to use Ctrl+C, with confusion about whether it's intentional.
- **Platform compatibility regressions** — Alpine/musl (#27589) and GLIBC (#27419) breakages in recent releases make OpenCode unreliable in Docker and CI environments.
- **Custom provider configuration silently ignored** — Issue #5674 remains open for months; users self-hosting models find OpenCode unusable without workaround.
- **Package manager fragmentation** — The new postinstall scripts in v1.15.1+ break Bun (#27906) and potentially other non-NPM package managers, raising concerns about install reliability across ecosystems.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-17

## 1. Today's Highlights
The Pi ecosystem saw a heavy focus on memory management and provider compatibility today, with critical PRs merged to fix `--resume` Out-Of-Memory (OOM) crashes and handle Anthropic streaming response quirks. Provider-level frustrations dominated the issue tracker, specifically regarding how Pi handles `reasoning_content` with newer reasoning models (Kimi k2.6, MiMo). Additionally, the community shipped a highly requested accessibility feature: a flat screen-reader mode. 

## 2. Releases
*No new official releases were published in the last 24 hours.*

## 3. Hot Issues

1. **[#4251](https://github.com/earendil-works/pi/issues/4251) [OPEN] Kimi k2.6 reasoning_content error:** Users are hitting a 400 error when using Kimi k2.6 via the OpenCode Go provider because `reasoning_content` is missing in assistant tool call messages. With 10 upvotes and 20 comments, this is a highly watched issue exposing friction with new reasoning models. *(Author: DarkEden-coding)*
2. **[#3357](https://github.com/earendil-works/pi/issues/3357) [OPEN] Dynamic model fetching for local LLMs:** This popular feature request (23 👍) asks for local extensions (llama.cpp, Ollama, LM Studio) to dynamically fetch model lists from `{baseUrl}/models` rather than requiring manual configuration. *(Author: julien-c)*
3. **[#4505](https://github.com/earendil-works/pi/issues/4505) [OPEN] MiMo models 400 error:** Similar to the Kimi issue, Xiaomi's MiMo models fail on multi-turn tool use because `reasoning_content` isn't preserved. It highlights a systemic blind spot in Pi's provider abstraction for "thinking" models. *(Author: GodOnlyKn0w)*
4. **[#4522](https://github.com/earendil-works/pi/issues/4522) [CLOSED] Anthropic streaming decompression on Node v26:** A tricky environment-specific bug where Anthropic SDK responses arrive gzip-compressed but aren't decompressed because Node v26 returns empty `Headers` objects, breaking response parsing. *(Author: mnowrot)*
5. **[#4591](https://github.com/earendil-works/pi/issues/4591) [CLOSED] `--resume` OOM on large session histories:** Users with thousands of session files experienced crashes because `listSessionsFromDir` buffered everything into memory simultaneously using `Promise.all`. *(Author: abhinavmathur-atlan)*
6. **[#4595](https://github.com/earendil-works/pi/issues/4595) [OPEN] Stale `@mariozechner/pi-ai` imports:** The recent package rename to `@earendil-works/pi-ai` broke subpath imports (e.g., `/anthropic`) in the bundled extension loader due to incomplete alias mapping. *(Author: ChickenEggRoll)*
7. **[#4501](https://github.com/earendil-works/pi/issues/4501) [CLOSED] Global `pnpm install` loop on startup:** Migrating to pnpm 11 causes Pi to redundantly re-install globally defined packages from `settings.json` on every single launch. *(Author: ianbmacdonald)*
8. **[#4582](https://github.com/earendil-works/pi/issues/4582) [CLOSED] HTML output truncation:** Long-form HTML generation (~1200+ lines) gets unexpectedly truncated, causing the agent to restart the generation process and waste tokens. *(Author: gdyxml2000)*
9. **[#4586](https://github.com/earendil-works/pi/issues/4586) [CLOSED] Copy-on-select extension request:** A user requested extension points to implement ergonomic "copy-on-select" behavior similar to OpenCode, indicating a desire for richer mouse/terminal interaction APIs. *(Author: susliko)*
10. **[#4580](https://github.com/earendil-works/pi/issues/4580) [CLOSED] Markdown render crash on startup:** Unhandled `TypeError` when rendering markdown headings if the theme object isn't fully initialized during RPC/Paperclip startup race conditions. *(Author: derKosi)*

## 4. Key PR Progress

1. **[#4589](https://github.com/earendil-works/pi/pull/4589) [CLOSED] Fix `--resume` OOM:** Implements line-by-line reading of session files and caps concurrent loads at 20 to prevent memory exhaustion during startup. *(Author: abhinavmathur-atlan)*
2. **[#4588](https://github.com/earendil-works/pi/pull/4588) [CLOSED] Drop unsigned Anthropic thinking blocks:** Prevents leaks by dropping "thinking" blocks that lack a signature instead of converting them to visible text, fixing compatibility with providers like Fireworks/Alibaba Cloud. *(Author: abhinavmathur-atlan)*
3. **[#4592](https://github.com/earendil-works/pi/pull/4592) [CLOSED] Flat screen reader mode:** Introduces a `-sr` (`--screen-reader`) CLI flag that simplifies borders, selectors, and UI outputs for improved accessibility. *(Author: chigkim)*
4. **[#4560](https://github.com/earendil-works/pi/pull/4560) [CLOSED] Add Fireworks FirePass provider:** Adds built-in support for the subscription-based Fireworks FirePass provider, optimizing access to models like skimi k2p6. *(Author: ogulcancelik)*
5. **[#4558](https://github.com/earendil-works/pi/pull/4558) [CLOSED] Throw error on missing finish-reason:** Improves OpenAI completions compatibility by strictly enforcing the presence of `finish_reason` before emitting the `done` event. *(Author: rwachtler)*
6. **[#4574](https://github.com/earendil-works/pi/pull/4574) [CLOSED] Document overflow normalization:** Adds documentation to help custom providers trigger auto-compaction correctly when context limits are reached. *(Author: aliou)*
7. **[#4567](https://github.com/earendil-works/pi/pull/4567) [CLOSED] Fix invalid notify type:** Corrects the extensions documentation example, changing an invalid `"success"` notification type to `"info"`. *(Author: julien-c)*
8. **[#4541](https://github.com/earendil-works/pi/pull/4541) [OPEN] Use XML boundaries in system prompts:** Refactors how system prompts and context files (`AGENTS.md`, `SYSTEM.md`) are merged, transitioning from `##` markdown headers to explicit XML tags for better parsing reliability. *(Author: herrnel)*

## 5. Feature Request Trends
*   **Broader Reasoning Model Support:** The community is actively pushing for better handling of "thinking" tokens. Developers want seamless support for reasoning models (Kimi, MiMo, DeepSeek) without crashing on tool-call turns.
*   **Local LLM Ergonomics:** Users want a more "plug-and-play" experience with local providers (Ollama, LM Studio). Dynamically fetching available models via `/models` endpoints is highly requested.
*   **Robust Extension APIs:** There is a growing trend of users requesting richer TUI extension points, such as the ability to hook into mouse events (e.g., copy-on-select functionality).
*   **Context Window & Token Control:** Developers want finer control over context limits and auto-compaction, specifically asking for documentation and hooks to normalize overflow errors from non-standard proxy providers (like litellm).

## 6. Developer Pain Points
*   **Package Rename Fallout:** The ongoing transition from `@mariozechner/pi-ai` to `@earendil-works/pi-ai` is still causing import resolution headaches and breaking subpath imports for existing extensions.
*   **Permissions & Install Paths:** Linux/Ubuntu users continue to struggle with global npm permission errors (EACCES) during fresh installs and extension downloads (#4525, #4587). Pi seems to occasionally ignore the local `.pi` folder in favor of system-level directories.
*   **Long-Generation Truncation:** Agents abruptly truncating long outputs (~1200+ lines) and wastefully restarting generation is a significant frustration for users generating large amounts of code or HTML.
*   **Node/Bun Version Mismatches:** Developers running bleeding-edge Node versions (v26) or packaging Pi via Bun are encountering edge-case bugs, such as broken TLS/HTTP decompression or missing packaged dependencies (`proxy-from-env`).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-17

## 1. Today's Highlights
The Qwen Code ecosystem is heavily focused on stabilizing its daemon mode (`qwen serve`) and fortifying session reliability. Two new releases dropped overnight, introducing critical fixes for OpenAI stream delta handling and CLI auto-restore capabilities. Meanwhile, the community and core contributors are driving significant architectural proposals for daemon Mode A/B features, alongside highly anticipated quality-of-life updates like session forking, rewind file rollback, and memory OOM mitigations.

## 2. Releases
- **[v0.15.11-nightly.20260516.435f711e3](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.11-nightly.20260516.435f711e3)**
- **[v0.15.12-preview.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.12-preview.2)**
  - **Changes:** Both releases include a CLI enhancement to wrap markdown links in OSC 8 for clickable URLs in the terminal (thanks to @BZ-D), a core fix normalizing cumulative OpenAI stream deltas to suffixes (@chiga0), and a fix for CLI auto-restore functionality.

## 3. Hot Issues
1. **[Daemon Mode Design (#3803)](https://github.com/QwenLM/qwen-code/issues/3803):** A massive 6-chapter design series laying out the complete architecture for `qwen serve`. It is the source of truth for upcoming daemon implementation.
2. **[Mode A TUI + In-Process HTTP Daemon (#4156)](https://github.com/QwenLM/qwen-code/issues/4156):** Proposes Stage 1.5b to bridge the gap for local users who want TUI and HTTP daemon running simultaneously. 
3. **[Mode B Production-Ready Roadmap (#4175)](https://github.com/QwenLM/qwen-code/issues/4175):** Tracks remaining work to make the headless HTTP/SSE daemon ready for v0.16.
4. **[MCP Server Filesystem Illusion (#4218)](https://github.com/QwenLM/qwen-code/issues/4218):** A frustrating bug where the UI shows MCP as "connected", but the model cannot actually use the filesystem tools.
5. **[Queued Prompts Missing in JSONL (#4148)](https://github.com/QwenLM/qwen-code/issues/4148):** Prompts sent while tools are executing get processed but silently dropped from JSONL logs, breaking session playback and analytics.
6. **[Rewind File Rollbacks (#3697)](https://github.com/QwenLM/qwen-code/issues/3697):** Highly requested feature (+1 👍) to let `/rewind` restore actual files on disk, not just the conversation state.
7. **[Environment Variable Modality Bug (#4219)](https://github.com/QwenLM/qwen-code/issues/4219):** Image attachments fail silently when using env-var-only configurations because `modalities` aren't auto-detected.
8. **[Memory Diagnostics Command (#4179)](https://github.com/QwenLM/qwen-code/issues/4179):** Proposes `/doctor memory` to give users an easy way to generate reports for OOM errors.
9. **[Stop Hook Blocking Cap (#4206)](https://github.com/QwenLM/qwen-code/issues/4206):** Proposes a configurable limit for consecutive stop hook blocks to prevent infinite `/goal` loops.
10. **[Statusline Dialog Bug (#4210)](https://github.com/QwenLM/qwen-code/issues/4210):** Typing `/statusline` incorrectly triggers a setup agent instead of opening the intended dialog UI.

## 4. Key PR Progress
1. **[feat(core): PR-2.5 post-promote stream redirect (#4102)](https://github.com/QwenLM/qwen-code/pull/4102):** Implements seamless output streaming when a background task is promoted to the foreground.
2. **[fix(core,cli): tool_use↔tool_result invariant (#4176)](https://github.com/QwenLM/qwen-code/pull/4176):** Fixes a critical unrecoverable wedge/crash when using Anthropic-compatible backends on weak network connections.
3. **[Add stop hook blocking cap (#4208)](https://github.com/QwenLM/qwen-code/pull/4208):** Wires a configurable budget through the CLI and subagent loops to prevent infinite blocking.
4. **[feat(protocol): typed daemon event schema v1 (#4217)](https://github.com/QwenLM/qwen-code/pull/4217):** Introduces an SDK-layer schema for daemon SSE events, including runtime narrowing helpers.
5. **[fix(rewind): TOCTOU ordering + sticky failed marker (#4216)](https://github.com/QwenLM/qwen-code/pull/4216):** Fixes a race condition and a sticky failure state introduced in the recent `/rewind` PR.
6. **[feat(skills): priority field in SKILL.md (#4155)](https://github.com/QwenLM/qwen-code/pull/4155):** Allows developers to dictate the display order of custom skills using frontmatter.
7. **[fix: add cache limits to prevent OOM (#4188)](https://github.com/QwenLM/qwen-code/pull/4188):** Adds bounded FIFO eviction to global caches to stop parallel test workers from crashing.
8. **[Allow custom output directory for /export (#4193)](https://github.com/QwenLM/qwen-code/pull/4193):** Saves users from cluttering their project root with exported session logs.
9. **[feat(sdk): DaemonSessionClient skeleton (#4201)](https://github.com/QwenLM/qwen-code/pull/4201):** Adds an experimental SDK wrapper binding a client to one daemon session and tracking event state.
10. **[feat(cli): add self-improve command (#4161)](https://github.com/QwenLM/qwen-code/pull/4161):** An innovative command allowing Qwen Code to iteratively improve its own codebase using isolated git worktrees.

## 5. Feature Request Trends
- **Daemon Architecture & SDK:** Heavy momentum around `qwen serve` (Mode A/B), session multiplexing, and building typed event schemas/SDK wrappers for daemon clients.
- **Session Management & Undo:** Strong demand for branching/forking sessions (`--fork-session`), rolling back file states via `/rewind`, and better state history tracking.
- **AI Tooling & Agent Loops:** Expanding automation boundaries via self-improve commands, `/goal` stop-hooks, and skill prioritization.
- **Telemetry & Exporting:** Maturing observability via structured memory diagnostics (`/doctor`), OpenTelemetry hardening, and custom session export paths.

## 6. Developer Pain Points
- **Out-of-Memory (OOM) Crashes:** Long-running sessions and unbounded caches frequently cause memory crashes. Developers are actively requesting heap snapshot tools and eviction limits (e.g., #2562, #4188).
- **MCP Integration Unreliability:** Users are frustrated by "ghost" connections where MCP servers appear healthy in the UI but fail to actually pass tools to the LLM (#4218).
- **Multi-Modal Failures in Headless Configs:** Strict reliance on `settings.json` causes silent failures in image processing when users configure models solely via Environment Variables (#4219).
- **Log/Trace Gaps:** Missing queued prompts in JSONL logs (#4148) make it difficult for developers to debug complex automated flows and session histories.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-17

## 1. Today's Highlights
DeepSeek TUI released **v0.8.38**, continuing its rapid iteration cycle. The community is heavily focused on **third-party OpenAI-compatible API support** and **UI/UX refinements**, with multiple PRs addressing SSE parsing, `reasoning_content` display corruption, and multiline input navigation. A notable theme today is the push toward **Claude Code feature parity**, including customizable status bars and neutral color schemes.

## 2. Releases

### v0.8.38
- **Install**: Recommended via `npm install -g deepseek-tui` (downloads both binaries automatically).
- **Docker / GHCR**: Available with `docker run --rm -it -e DEEPSEEK_API_KEY=... ghcr.io/hmbown/deepseek-tui`.

---

## 3. Hot Issues

1. **[#1615](https://github.com/Hmbown/DeepSeek-TUI/issues/1615) — Docker 拉取直接跑乱码** *(112 comments)*
   A highly frustrated user reports severe display corruption (garbled text requiring a hard Linux server reset) when running the Docker image with a valid API key. The massive comment count indicates this is likely a widespread encoding/locale issue affecting multiple users.

2. **[#891](https://github.com/Hmbown/DeepSeek-TUI/issues/891) — Support Codex /goal long-running task mode** *(6 comments)*
   Requests support for long-horizon, goal-oriented agent workflows (similar to OpenAI's Codex) where the agent works continuously on complex tasks like refactoring or multi-file migration instead of stopping after one response. High community interest for autonomous coding.

3. **[#1713](https://github.com/Hmbown/DeepSeek-TUI/issues/1713) — Mixes project directories between multiple VS Code windows** *(5 comments)*
   Critical bug where DeepSeek-TUI modifies files in Project B while operating in Project A when multiple VS Code windows are open. A serious safety/concurrency issue for multi-project developers.

4. **[#1607](https://github.com/Hmbown/DeepSeek-TUI/issues/1607) — 建议token成本估算新增加几个货币单位** *(5 comments)*
   Requests additional currency units (like CNY ¥) for the token cost estimation feature, reflecting the tool's large Chinese user base.

5. **[#1709](https://github.com/Hmbown/DeepSeek-TUI/issues/1709) — Financial Sustainability, Concurrent Risk, and Final Maturity Verdict** *(2 comments)*
   A meta-analysis issue co-authored with Claude AI and Gemini AI evaluating the project's long-term viability, concurrency safety, and maturity. Interesting for its multi-AI approach to open-source project assessment.

6. **[#1472](https://github.com/Hmbown/DeepSeek-TUI/issues/1472) — Deadlock: process hangs unrecoverably when API connection stalls** *(2 comments)*
   Process enters permanent `S` (sleeping) state after ~1 day of running, with `Ctrl+C` having no effect. A blocking pipe_read issue on WSL2 — critical for long-running sessions.

7. **[#1677](https://github.com/Hmbown/DeepSeek-TUI/issues/1677) — 输入框有文字时滚轮无法上翻历史对话** *(1 comment)*
   Mouse wheel scrolling in the TUI switches input history instead of scrolling the transcript when the composer has text. Affects everyday conversational workflow significantly.

8. **[#1683](https://github.com/Hmbown/DeepSeek-TUI/issues/1683) — Unexpected periodic outbound connections** *(1 comment)*
   Firewall detects repeated TCP connections to non-DeepSeek IPs even during idle periods. Raises security concerns about potential telemetry or unintended network behavior.

9. **[#1722](https://github.com/Hmbown/DeepSeek-TUI/issues/1722) — Configurable auto-compact threshold with Ctrl+L keybinding** *(0 comments)*
   At ~99.6% context saturation, the TUI becomes completely unresponsive due to a chicken-and-egg deadlock. Proposes configurable auto-compact with a manual trigger keybinding.

10. **[#1718](https://github.com/Hmbown/DeepSeek-TUI/issues/1718) — `cargo install` fails: `edition2024` feature required** *(0 comments)*
    Installation from crates.io fails because the manifest requires Rust edition 2024, which isn't supported by the user's toolchain. Blocks source-based installation for many users.

---

## 4. Key PR Progress

1. **[#1723](https://github.com/Hmbown/DeepSeek-TUI/pull/1723) — feat: configurable auto-compact threshold with Ctrl+L keybinding**
   Addresses context saturation deadlock by enabling auto-compact guardrails (disabled since v0.8.11) with a configurable threshold and manual Ctrl+L trigger. Directly fixes the unresponsiveness issue at high context usage.

2. **[#1719](https://github.com/Hmbown/DeepSeek-TUI/pull/1719) — feat/multiline composer arrow navigation**
   Fixes Up/Down arrow behavior in multiline composer (Alt+Enter mode) to navigate within text instead of jumping to history. Also fixes empty-composer Up/Down on Windows. A significant UX improvement.

3. **[#1717](https://github.com/Hmbown/DeepSeek-TUI/pull/1717) — fix: accept SSE data without trailing space, and relax model validation** *(MERGED)*
   Three critical fixes for OpenAI-compatible providers: SSE parser accepts `"data:"` without trailing space (per spec), model validation is relaxed, and compatibility with jiarongai and self-hosted gateways is improved.

4. **[#1705](https://github.com/Hmbown/DeepSeek-TUI/pull/1705) — feat(tui): add balance status item**
   Adds a DeepSeek account balance chip to the footer status bar, fetched via `GET /user/balance` after each turn. Partial implementation of the Claude Code-style customizable status line requested in [#1551](https://github.com/Hmbown/DeepSeek-TUI/issues/1551).

5. **[#1704](https://github.com/Hmbown/DeepSeek-TUI/pull/1704) — fix(compaction): preserve user text query to prevent Jinja template crash**
   When auto-compaction drops all user text from pinned context (leaving only tool calls), vLLM/SGLang Jinja templates crash with "No user message found." This PR preserves at least one user query during compaction.

6. **[#1702](https://github.com/Hmbown/DeepSeek-TUI/pull/1702) — fix(core): sync system prompt hash when overriding via runtime API**
   Fixes the runtime API (`POST /v1/threads`) silently discarding custom `system_prompt` values. The hash is now synced so the override survives the next `refresh_system_prompt` call.

7. **[#1680](https://github.com/Hmbown/DeepSeek-TUI/pull/1680) — fix(tui): guard `reasoning_content` behind provider check**
   Prevents severe display corruption when third-party APIs return `reasoning_content` fields in SSE chunks. Each token was being rendered as a separate "thinking" block; now gated behind an official DeepSeek provider check.

8. **[#1699](https://github.com/Hmbown/DeepSeek-TUI/pull/1699) — fix(docker): pre-create `/home/deepseek/.deepseek` to avoid permission denied**
   Fixes the first-run Docker crash where the non-root `deepseek` user couldn't create runtime directories. Pre-creates the required paths in the Dockerfile.

9. **[#1701](https://github.com/Hmbown/DeepSeek-TUI/pull/1701) — chore(deps): bump portable-pty to 0.9.0**
   Picks up loongarch64 support and drops the duplicate `nix 0.25.1` dependency. Directly addresses [#1531](https://github.com/Hmbown/DeepSeek-TUI/issues/1531) for Loongson architecture users.

10. **[#1697](https://github.com/Hmbown/DeepSeek-TUI/pull/1697) — fix(tui): align Claude Code style colors**
    Refactors the TUI palette to match Claude Code's neutral white/gray aesthetic while keeping DeepSeek blue accents. Removes warm amber leakage from composer, plan roles, and footer styling.

---

## 5. Feature Request Trends

- **Claude Code parity**: Multiple requests ([#1551](https://github.com/Hmbown/DeepSeek-TUI/issues/1551), [#1708](https://github.com/Hmbown/DeepSeek-TUI/issues/1708), [#1707](https://github.com/Hmbown/DeepSeek-TUI/issues/1707)) seek Claude Code-style features — customizable status bars, in-agent slash-command references, and system prompt self-awareness.
- **Long-running autonomous agents**: [#891](https://github.com/Hmbown/DeepSeek-TUI/issues/891) requests Codex-style goal-oriented task execution for complex, multi-step coding workflows.
- **Third-party provider expansion**: [#1710](https://github.com/Hmbown/DeepSeek-TUI/issues/1710) (SiliconFlow), [#1714](https://github.com/Hmbown/DeepSeek-TUI/issues/1714) (MiniMax), and general OpenAI-compatible endpoint improvements reflect strong demand for multi-provider support, especially from Chinese users.
- **Localization and currency**: [#1607](https://github.com/Hmbown/DeepSeek-TUI/issues/1607) (CNY token costs), [#1711](https://github.com/Hmbown/DeepSeek-TUI/pull/1711) (zh-TW/zh-CN docs) show the community pushing for better Chinese-language support.
- **Context/context management**: [#1722](https://github.com/Hmbown/DeepSeek-TUI/issues/1722) (auto-compact threshold), [#1704](https://github.com/Hmbown/DeepSeek-TUI/pull/1704) (compaction preservation) highlight context window management as a critical area for improvement.

---

## 6. Developer Pain Points

- **Third-party API compatibility is fragile**: SSE parsing ([#1717](https://github.com/Hmbown/DeepSeek-TUI/pull/1717)), `reasoning_content` display corruption ([#1673](https://github.com/Hmbown/DeepSeek-TUI/issues/1673)), `rlm_open` schema conflicts ([#1712](https://github.com/Hmbown/DeepSeek-TUI/issues/1712)), and model validation failures ([#1714](https://github.com/Hmbown/DeepSeek-TUI/issues/1714)) all indicate that using non-DeepSeek providers is still a bumpy experience.
- **Windows/WSL stability**: Docker garbled display ([#1615](https://github.com/Hmbown/DeepSeek-TUI/issues/1615)), WSL install failures ([#1596](https://github.com/Hmbown/DeepSeek-TUI/issues/1596)), SSH breakage on Win11 ([#1604](https://github.com/Hmbown/DeepSeek-TUI/issues/1604)), and multiline input issues in Git Bash ([#1687](https://github.com/Hmbown/DeepSeek-TUI/issues/1687)) collectively suggest Windows is a second-class citizen.
- **Context saturation deadlocks**: When context reaches ~100%, the TUI freezes completely ([#1722](https://github.com/Hmbown/DeepSeek-TUI/issues/1722), [#1472](https://github.com/Hmbown/DeepSeek-TUI/issues/1472)). Auto-compact has been disabled by default since v0.8.11, leaving no safety net for long sessions.
- **Docker first-run experience**: Permission denied errors ([#1684](https://github.com/Hmbown/DeepSeek-TUI/issues/1684)) and encoding issues ([#1615](https://github.com/Hmbown/DeepSeek-TUI/issues/1615)) make the Docker quick-start path unreliable for new users.
- **Multi-project safety**: VS Code directory mixing ([#1713](https://github.com/Hmbown/DeepSeek-TUI/issues/1713)) is a data-integrity risk for anyone working across multiple projects simultaneously.

</details>