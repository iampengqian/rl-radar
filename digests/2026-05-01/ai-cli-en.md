# AI CLI Tools Community Digest 2026-05-01

> Generated: 2026-04-30 22:15 UTC | Tools covered: 8

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

Here is the cross-tool comparison report based on the community digests from 2026-05-01.

## 1. Ecosystem Overview
The AI CLI tool ecosystem is experiencing a rapid transition from basic code-generation assistants to fully autonomous agents orchestrating complex multi-step workflows. This evolution is creating massive architectural growing pains, as seen in widespread struggles with token limits, context window exhaustion, and runaway compute costs. Interoperability is becoming a major theme, with developers actively pushing back against vendor lock-in and demanding standardized configuration files (e.g., `AGENTS.md`) and unified communication protocols (ACP). Simultaneously, the ecosystem is aggressively expanding platform support, moving from pure terminal interfaces into desktop applications, IDE integrations, and voice-enabled environments.

## 2. Activity Comparison

| Tool | Releases Today | Hot Issues Tracked | Key PRs Tracked | Current Top Priority |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 0 | 10 | 4 | Severe cost/quota observability bugs & billing misrouting. |
| **OpenAI Codex** | 3 (v0.128.0 stable) | 10 | 10 | Unlocking 1M token context limits & undo safety mechanisms. |
| **Gemini CLI** | 2 (v0.40.1 stable) | 10 | 10 | UI responsiveness & AST-aware context reduction. |
| **GitHub Copilot CLI** | 2 (v1.0.40-2) | 10 | 1 | Granular permission allowlists & terminal compatibility. |
| **Kimi Code CLI** | 1 (v1.41.0) | 10 | 10 | ACP session history replay & token consumption opacity. |
| **OpenCode** | 1 (v1.14.30) | 10 | 10 | OpenRouter rate limits & BYOK provider compatibility. |
| **Pi** | 0 | 10 | 11 | Provider flexibility (Cloudflare/Local) & RCE security patches. |
| **Qwen Code** | 1 (v0.15.6) | 10 | 10 | Context compression failures & DeepSeek reasoning compatibility. |

## 3. Shared Feature Directions

*   **Cost, Quota, and Context Observability (All Tools):** Across the board, users are flying blind on costs. Token counters routinely omit sub-agent consumption (Claude Code, Kimi), context limits are hit unexpectedly (Qwen, OpenAI Codex), and OpenRouter routing causes billing confusion (OpenCode, Pi).
*   **Third-Party Model & DeepSeek V4 Compatibility (Qwen, OpenCode, Pi):** As tools adopt multi-model architectures, correctly handling third-party reasoning tokens is a universal pain point. DeepSeek V4's `reasoning_content` is currently breaking multi-turn agentic loops in Qwen, OpenCode, and Pi.
*   **Granular Permissions and Sandboxing (Copilot CLI, Kimi, Gemini, Claude):** Developers are rejecting binary "allow all" vs "approve per action" models. There is a massive shared demand for command allowlists, directory sandboxing, and safe-read-only auto-approvals.
*   **Agent Communication Protocol (ACP) & IDE Parity (Kimi, Qwen, OpenCode):** The industry is coalescing around ACP for IDE integration. However, implementations are currently fragmented, leading to missing session histories in Zed/JetBrains (Kimi) and sub-agent routing errors (OpenCode).
*   **AST-Aware Code Navigation (Claude Code, Gemini CLI):** To mitigate massive context window pressure, communities are actively requesting/experimenting with AST-based file readers that fetch specific methods rather than entire files, claiming up to 80% context reduction.

## 4. Differentiation Analysis

*   **Anthropic (Claude Code):** Deeply focused on enterprise multi-agent orchestration but currently hampered by severe billing routing bugs and VS Code extension instability. It has the highest community demand for standardization (`AGENTS.md`).
*   **OpenAI (Codex):** Leading in core architectural performance (e.g., 10-15x faster patch streaming parsers) and safety nets (undo features). However, it faces friction exposing its full 1M GPT-5.5 context window to the CLI.
*   **Google (Gemini CLI):** Focused heavily on multimodal UX (voice input wave animations, latency fixes) and smart memory routing (global vs. project). It struggles the most with basic terminal UI jank (e.g., freezing on large text pastes).
*   **GitHub (Copilot CLI):** Heavily focused on enterprise ecosystem integration (Azure DevOps, GitHub MCP). It is differentiating by natively addressing git attribution (`Co-authored-by: Copilot`) but lags in TUI feature richness.
*   **Open-Source/Challengers (Pi, Qwen, Kimi, OpenCode):** These tools differentiate by extreme provider flexibility (Cloudflare gateways, local LLMs, Ollama, deep OpenRouter support). They are moving faster than big tech in packaging standalone desktop apps (Qwen) and offering zero-dependency binary installations.

## 5. Community Momentum & Maturity

*   **Most Rapidly Iterating:** **OpenAI Codex**, **Gemini CLI**, and **Qwen Code** show high maturity, routinely shipping stable and alpha/preview releases simultaneously. Codex merged 10 substantial PRs in a single day, signaling heavy engineering investment.
*   **Most Active/Demanding Communities:** **Claude Code** features the highest upvoted issues (e.g., 3,756 👍 for `AGENTS.md`), showing intense enterprise adoption, though currently burdened by unpaid "volunteer QA" trying to diagnose severe billing bugs. 
*   **Emerging Momentum:** **Pi** and **OpenCode** are demonstrating strong open-source momentum. Pi merged 11 PRs focused on extensibility (Cloudflare, local LLMs), while OpenCode is undergoing massive foundational refactors (native LLM core).

## 6. Trend Signals

*   **The "Doom Loop" Problem:** As agents are given more autonomy, they are increasingly getting stuck in infinite reasoning or tool-calling loops, silently burning hundreds of dollars. *Signal:* Developers must implement strict cost-ceiling guards, sub-agent timeouts, and pre-tool-read requirements (like Qwen's PR #3774) before deploying agents in CI/CD.
*   **Vendor-Neutral Standardization:** Users are exhausted by maintaining `CLAUDE.md`, `.github/copilot.md`, etc. The industry is forcefully demanding an `AGENTS.md` standard. *Signal:* Builders should adopt generic configuration formats to prevent vendor lock-in and ensure cross-agent compatibility.
*   **Security & Isolation Vulnerabilities:** Agentic tools are inadvertently introducing new attack vectors, such as Pi's `grep` argument injection RCE and Claude's Honeycomb OTEL credential misuse. *Signal:* Executing AI-generated code requires strict IPC namespace isolation (like Codex's bubblewrap hardening) and sandboxed file operations.
*   **Reasoning Token Overhead:** Chain-of-thought "thinking" tokens are burning through quotas up to 10x faster than standard prompts. *Signal:* Efficient context compaction, AST-file reading, and dynamic model routing (using lightweight models for side-queries) are transitioning from "nice-to-have" to critical requirements for affordable AI development.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Analysis Period:** Through 2026-05-01 | **Source:** [anthropics/skills](https://github.com/anthropics/skills)

---

## 1. Top Skills Ranking

Below are the most-discussed and highest-attention Pull Requests in the ecosystem, representing the most active community contributions.

1. **[PR #514 — document-typography](https://github.com/anthropics/skills/pull/514)** `[OPEN]`
   **Functionality:** Typographic quality control for AI-generated documents—prevents orphan word wraps, widow paragraphs, and numbering misalignment.
   **Highlights:** Addresses a universal pain point: every document Claude generates is susceptible to these subtle formatting flaws. High practical utility for production document workflows.

2. **[PR #83 — skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** `[OPEN]`
   **Functionality:** Two meta-skills for the marketplace. The quality analyzer evaluates Skills across five dimensions (structure, documentation, etc.), while the security analyzer detects vulnerabilities in Skill definitions.
   **Highlights:** Long-running PR (since Nov 2025). Represents the community's desire for self-improving Skill infrastructure and governance tooling.

3. **[PR #210 — Improve frontend-design skill](https://github.com/anthropics/skills/pull/210)** `[OPEN]`
   **Functionality:** Revises the existing frontend-design Skill for improved clarity, actionability, and internal coherence—ensuring every instruction is executable within a single conversation.
   **Highlights:** Focuses on token efficiency and operational precision, aligning with broader community concerns about verbose Skills (see Issue #202).

4. **[PR #486 — ODT Skill (OpenDocument)](https://github.com/anthropics/skills/pull/486)** `[OPEN]`
   **Functionality:** Create, fill, read, and convert OpenDocument Format files (.odt, .ods)—including ODT-to-HTML parsing.
   **Highlights:** Fills a notable gap in document format support, especially relevant for enterprise and government contexts where ODF is the ISO standard.

5. **[PR #568 — ServiceNow Platform Skill](https://github.com/anthropics/skills/pull/568)** `[OPEN]`
   **Functionality:** Comprehensive ServiceNow assistant covering ITSM, ITOM, ITAM/SAM, FSM, SPM, CSDM, SecOps, Vulnerability Response, and IntegrationHub.
   **Highlights:** Represents the strongest enterprise-platform integration PR. ServiceNow's breadth makes this a high-value addition for corporate Claude Code users.

6. **[PR #806 — sensory (macOS AppleScript Automation)](https://github.com/anthropics/skills/pull/806)** `[OPEN]`
   **Functionality:** Native macOS automation via `osascript`/AppleScript instead of screenshot-based computer use, with a two-tier permission model.
   **Highlights:** Directly addresses performance and reliability limitations of vision-based OS automation—a recurring community theme.

7. **[PR #666 — Remove duplicate skill-creator](https://github.com/anthropics/skills/pull/666)** `[OPEN]`
   **Functionality:** Removes the redundant `skill-creator` Skill in favor of the more capable version in `claude-plugins-official` (479 vs. 356 lines).
   **Highlights:** Housekeeping PR that surfaced a real problem: duplicate Skills waste context window tokens (echoed in Issue #189).

8. **[PR #723 — testing-patterns](https://github.com/anthropics/skills/pull/723)** `[OPEN]`
   **Functionality:** Full-stack testing Skill covering the Testing Trophy model, AAA pattern, React component testing, API integration testing, and E2E patterns.
   **Highlights:** Strong community demand for structured testing guidance; complements existing code-generation Skills.

---

## 2. Community Demand Trends

Analysis of the top Issues reveals clear demand clusters:

| Demand Area | Signal Issues | Priority |
|---|---|---|
| **Org-wide Skill sharing & collaboration** | [#228](https://github.com/anthropics/skills/issues/228) (👍7), [#189](https://github.com/anthropics/skills/issues/189) (👍7) | 🔴 High |
| **Skill reliability & evaluation tooling** | [#556](https://github.com/anthropics/skills/issues/556) (0% trigger rate bug, 👍6), [#202](https://github.com/anthropics/skills/issues/202) (skill-creator best practices) | 🔴 High |
| **Security & trust boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (namespace impersonation), [#412](https://github.com/anthropics/skills/issues/412) (agent governance) | 🟡 Medium-High |
| **MCP / API integration** | [#16](https://github.com/anthropics/skills/issues/16) (Expose Skills as MCPs), [#29](https://github.com/anthropics/skills/issues/29) (AWS Bedrock support) | 🟡 Medium-High |
| **Platform stability (upload/delete/404 errors)** | [#406](https://github.com/anthropics/skills/issues/406) (👍4), [#403](https://github.com/anthropics/skills/issues/403), [#61](https://github.com/anthropics/skills/issues/61) | 🔴 High |

**Key Takeaways:**
- **Enterprise collaboration** is the most upvoted unmet need—users want shared Skill libraries, not file-by-file Slack sharing.
- **Skill evaluation is broken**: The `run_eval.py` 0% trigger rate (Issue #556) suggests fundamental reliability issues in how Skills are invoked during evaluation.
- **Security model needs formalization**: Community skills under the `anthropic/` namespace (Issue #492) create real trust boundary risks as the ecosystem scales.

---

## 3. High-Potential Pending Skills

These open PRs with sustained activity are strong candidates for merging in the near term:

| PR | Skill | Why It's Promising | Updated |
|---|---|---|---|
| [#538](https://github.com/anthropics/skills/pull/538) | **PDF case-sensitivity fix** | Pure bug fix, low risk, breaks on Linux. Updated 2026-04-29. | Very recent |
| [#541](https://github.com/anthropics/skills/pull/541) | **DOCX tracked-change collision fix** | Fixes document corruption—clear, narrow, high-impact. | 2026-04-16 |
| [#539](https://github.com/anthropics/skills/pull/539) | **YAML validation for skill-creator** | Pre-parse validation prevents silent failures. Infrastructure improvement. | 2026-04-16 |
| [#509](https://github.com/anthropics/skills/pull/509) | **CONTRIBUTING.md** | Addresses the repo's 25% community health score. Process, not code—easy merge. | 2026-03-19 |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive, well-structured, fills an obvious gap. | 2026-04-21 |
| [#616](https://github.com/anthropics/skills/pull/616) | **HADS (Human-AI Document Standard)** | Novel approach to dual-audience documentation; growing AI-readability trend. | 2026-03-31 |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for reliable, enterprise-grade Skill infrastructure—org-wide sharing, robust evaluation pipelines, and a clear security/trust model—rather than any single new Skill category.

---

# Claude Code Community Digest — 2026-05-01

## 1. Today's Highlights

No new releases shipped in the last 24 hours. The community's attention is dominated by a cluster of **cost and quota-related bugs** — including a stunning case where the string `HERMES.md` in git history silently rerouted billing to extra-usage charges (#53262) — and by a sudden, widely-reported acceleration in 5-hour session window depletion (#55053). Meanwhile, the long-running **AGENTS.md feature request** (#6235) continues to accumulate support (3,756 👍), underscoring strong demand for cross-agent configuration standardization.

---

## 2. Releases

No new releases in the past 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| 1 | [#53262 — HERMES.md in git history triggers extra-usage billing](https://github.com/anthropics/claude-code/issues/53262) | **CLOSED.** A case-sensitive string match on `HERMES.md` in recent commits silently bypassed Max plan quota and burned $200 in extra credits. A billing-routing bug of the highest severity. | 78 comments, 177 👍 — users calling it "the most dangerous Claude Code bug yet." |
| 2 | [#55053 — Sudden 5-hour session window squeeze since Apr 29](https://github.com/anthropics/claude-code/issues/55053) | Session windows depleting 5–10× faster overnight with no change in workload. If confirmed, this suggests a backend quota-policy change. | 16 comments in <24h; multiple users confirming the same pattern. |
| 3 | [#46987 — Stream idle timeout / partial response (macOS)](https://github.com/anthropics/claude-code/issues/46987) | Persistent streaming failures causing lost work. Still open after 2.5 weeks. | 170 comments, 155 👍 — one of the most-commented active bugs. |
| 4 | [#26224 — Claude Code hangs / freezes for 5–20+ minutes](https://github.com/anthropics/claude-code/issues/26224) | Widespread hang on "heaps of prompts" makes the tool unreliable for large codebases. | 95 comments, 117 👍 — ongoing since Feb 2026 with no fix. |
| 5 | [#6235 — Feature Request: Support AGENTS.md](https://github.com/anthropics/claude-code/issues/6235) | Cross-agent standard (`agents.md`) gaining industry traction; CLAUDE.md is vendor-specific. | **3,756 👍**, 289 comments — the highest-voted issue in the repo. |
| 6 | [#45756 — Pro Max 5x quota exhausted in 1.5 hours](https://github.com/anthropics/claude-code/issues/45756) | Moderate usage drains paid plans unreasonably fast; overlaps with broader cost complaints. | 56 comments, 142 👍 — WSL users especially affected. |
| 7 | [#55105 — Claude Code creates Honeycomb boards using user OTEL creds](https://github.com/anthropics/claude-code/issues/55053) | On startup with OTEL enabled, Claude Code calls Honeycomb's Boards API with the user's API key, creating dashboards in their org without consent. Security & compliance concern. | 5 comments; flagged as potential credential misuse. |
| 8 | [#55121 — Token counter omits sub-agent consumption (10× undercount)](https://github.com/anthropics/claude-code/issues/55121) | The displayed token count only tracks the main thread; sub-agent usage is invisible, making cost monitoring unreliable. | 2 comments but high-severity implications for multi-agent workflows. |
| 9 | [#55124 — Cowork Chrome extension: JS permission prompts on every call](https://github.com/anthropics/claude-code/issues/55124) | Permission approvals don't persist during manual Cowork tasks, making browser automation essentially unusable. | 3 comments; tagged as regression. |
| 10 | [#54348 / #54416 — Thinking blocks unexpandable in VS Code on Opus 4.7](https://github.com/anthropics/claude-code/issues/54348) | Two duplicate reports confirm thinking blocks are dead/collapsed in the VS Code extension after recent updates. | Combined 6 comments — UI regression blocking Opus 4.7 adopters. |

---

## 4. Key PR Progress

| # | PR | Summary |
|---|-----|---------|
| 1 | [#55098 — Statusline script with context & rate-limit bars](https://github.com/anthropics/claude-code/pull/55098) | Adds a Bash/Node statusline showing model name, context window bar, session cost, and 5-hour rate limit bar — directly addresses visibility gaps users are complaining about in cost issues. |
| 2 | [#54873 — Fix hookify YAML parser & new_text field on Write](https://github.com/anthropics/claude-code/pull/54873) | Replaces a hand-rolled YAML parser that double-escaped backslashes and fixes a silent `new_text` bug in Write hooks. Validated with a 39-case regression harness. |
| 3 | [#19871 — Fix ipset duplicate entry in devcontainer firewall](https://github.com/anthropics/claude-code/pull/19871) | Adds `-exist` flag to `ipset add` to prevent `postStartCommand` failure when DNS returns duplicate IPs. Clean fix for #15611. |
| 4 | [#20448 — Web4 governance plugin with R6 workflow](https://github.com/anthropics/claude-code/pull/20448) | Community-contributed AI governance plugin with trust tensors and audit trails. Niche but interesting for enterprise compliance use cases. |

> *Note: Only 4 PRs saw updates in the last 24 hours. All remain open with no merge activity.*

---

## 5. Feature Request Trends

Three clear themes emerge from the issue backlog:

1. **AGENTS.md / cross-agent standardization** (#6235, 3,756 👍) — Developers want a vendor-neutral configuration file that works across Claude Code, Codex, Amp, and Cursor. This is the #1 requested feature by an enormous margin.

2. **AST-aware file reading** (#34304) — An AST-based Read tool that claims 80% context reduction for large files. The community is experimenting with structural parsing to mitigate context window pressure.

3. **Cross-session behavioral learning** (#51735) — Agents repeat identical mistakes across sessions despite reading violation archives. Users want persistent memory/learning hooks so corrections actually stick.

---

## 6. Developer Pain Points

- **Cost observability is broken.** At least five separate issues (#53262, #55053, #45756, #55121, #54623) describe inaccurate token counts, mysterious quota depletion, and billing misrouting. The common thread: **users cannot trust the cost display**, and several have been financially harmed. This is the single most urgent theme.

- **Stability regressions remain unfixed for months.** The streaming timeout (#46987, 170 comments) and hanging/freezing bug (#26224, 95 comments) have been open for weeks to months with no resolution, eroding confidence for production use.

- **Multi-agent / sub-agent features are immature.** Sub-agents can't spawn sub-sub-agents (#19077), their token usage is invisible (#55121), and orchestrator patterns burn quota unpredictably (#54623). The multi-agent paradigm is being heavily marketed but is clearly not yet production-ready.

- **VS Code extension quality lagging.** Thinking block regressions across multiple versions (#54348, #54416, #55120) suggest the extension is not receiving the same QA rigor as the CLI.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-01

## 1. Today's Highlights
Codex shipped version `v0.128.0` today, introducing persisted `/goal` workflows and configurable TUI keymaps, alongside the first alpha for `v0.129.0`. The community is heavily focused on scaling context limits, with a highly upvoted issue requesting 1M token support for GPT-5.5. Meanwhile, internal maintainers merged substantial architectural improvements, including a 10-15x faster `apply_patch` streaming parser and aggressive IPC namespace isolation for the Linux bubblewrap sandbox.

## 2. Releases
*   **rust-v0.128.0**: The major stable release of the day. It introduces persisted `/goal` workflows complete with app-server APIs, runtime continuation, and TUI controls (create, pause, resume, clear). It also adds `codex update`, configurable TUI keymaps, and plan-mode nudges.
*   **rust-v0.129.0-alpha.1**: Initial alpha cut for the next release cycle.
*   **rust-v0.128.0-alpha.1 & rust-v0.126.0-alpha.17**: Ongoing alpha iterations from earlier release branches.

## 3. Hot Issues
1.  **[Support 1M token context for GPT-5.5 in Codex](https://github.com/openai/codex/issues/19464)**: The top-voted issue of the day (+122 👍, 97 comments). Developers are expressing frustration that while GPT-5.5 supports 1M tokens via the API, Codex constrains the window to 400K, limiting complex codebase analysis.
2.  **[Please make "/undo" back](https://github.com/openai/codex/issues/9203)**: A massive community favorite (+168 👍) asking for the return of the `/undo` command. Users are experiencing pain when Codex accidentally deletes or modifies uncommitted/untracked files.
3.  **[High CPU usage on macOS after updating VS Code extension](https://github.com/openai/codex/issues/16231)**: A critical regression affecting Apple Silicon (M5 Pro) users on macOS Tahoe, causing severe thermal throttling and CPU spikes (+59 👍).
4.  **[Low cache hit rate when Codex integrates with GPT-5.5](https://github.com/openai/codex/issues/20301)**: Users on WSL2 note that context caching is failing to hit effectively with GPT-5.5, driving up token costs and latency.
5.  **[Desktop thrashes resume/unsubscribe when >4 heartbeat automations are active](https://github.com/openai/codex/issues/19563)**: A technical bug where thread subscriptions thrash heavily if more than four automations target the same thread.
6.  **[browser-use (browser-client.mjs) marked as trojan by Windows Defender](https://github.com/openai/codex/issues/20315)**: A significant usability block for Windows users where the in-app browser skill triggers OS-level security warnings.
7.  **[Add a screen-reader-friendly Codex TUI mode](https://github.com/openai/codex/issues/20489)**: An important accessibility request noting that VoiceOver users currently hear repetitive, unintelligible decorative terminal UI statuses while Codex processes tasks.
8.  **[Mac app shows persistent blurred overlay on Intel Macs](https://github.com/openai/codex/issues/18341)**: A lingering rendering regression leaving the desktop app unusable for Intel-based macOS users due to a translucent overlay blocking the composer.
9.  **[Codex desktop app: add dark mode / follow system appearance](https://github.com/openai/codex/issues/20491)**: A highly requested UI enhancement to save developers' eyes, with users asking for System/Light/Dark toggles.
10. **[Codex need phone number](https://github.com/openai/codex/issues/20161)**: An SSO friction point where users logging in on new devices are unexpectedly forced to add a phone number to their OpenAI account.

## 4. Key PR Progress
1.  **[Make apply_patch streaming parser stateful](https://github.com/openai/codex/pull/19160)**: **Merged/Closed**. A massive performance win. Refactored the parser to hold state incrementally rather than reparsing the whole patch, resulting in 10-15x faster patch application.
2.  **[Isolate IPC namespace in bubblewrap](https://github.com/openai/codex/pull/20240)**: Hardens the Linux sandbox by preventing sandboxed code from communicating with the host via System V IPC objects.
3.  **[Ignore dangerous project-level config keys](https://github.com/openai/codex/pull/20098)**: Security fix that stops malicious repos from overriding sensitive settings (like `openai_base_url` or `model_provider`) via local `config.toml` files.
4.  **[feat(tui): add vim composer mode](https://github.com/openai/codex/pull/18595)**: Implements modal editing inside the TUI prompt composer, allowing developers to use Vim bindings to edit prompts.
5.  **[Remove unused event messages](https://github.com/openai/codex/pull/20511)**: Cleans up legacy `EventMsg` variants and removes the `Op::Undo` protocol handling to streamline the app-server communication layer.
6.  **[Bypass review for always-allow MCP tools in auto-review](https://github.com/openai/codex/pull/20069)**: Fixes an annoyance where MCP tools explicitly set to "approve" (always allow) were still triggering the ARC auto-review guardian prompt.
7.  **[execpolicy: unwrap PowerShell -Command wrappers on Windows](https://github.com/openai/codex/pull/20336)**: Fixes execution policy bypasses on Windows where prefix rules (like `["git", "push"]`) failed to match because they didn't account for the `powershell.exe -Command` wrapper.
8.  **[Migrate loaded thread/read history to ThreadStore](https://github.com/openai/codex/pull/20486)**: Refactors history loading away from direct rollout JSONL reads, relying instead on the new `ThreadStore` architecture.
9.  **[Color TUI statusline from active theme](https://github.com/openai/codex/pull/19631)**: A visual enhancement to make the TUI less visually flat by applying theme colors to the configurable statusline.
10. **[Add config-backed stdio exec-server environments](https://github.com/openai/codex/pull/20508)**: Allows developers to define exec-server environments using websocket URLs or shell commands loaded securely from `environments.toml`.

## 5. Feature Request Trends
*   **Extended Context Windows**: The most prominent trend is the push for GPT-5.5's full 1M context window to be exposed inside Codex, as the current 400K limit is bottlenecking advanced agentic workflows.
*   **Undo/Safety Nets**: The strong return of the `/undo` feature request highlights that developers need robust fallback mechanisms when autonomous agents make unintended file modifications outside version control.
*   **Accessibility & Theming**: The community is actively requesting modern desktop app standards, specifically VoiceOver compatibility for the TUI and native Dark Mode support for the Desktop app.
*   **Improved Hooks/Quality Enforcement**: Developers want deeper integration hooks (`PreToolUse` and `PostToolUse`) to enforce custom code quality gates and block destructive commands mid-agent-run.

## 6. Developer Pain Points
*   **Windows / WSL Instability**: A disproportionate number of issues report broken functionality on Windows, ranging from empty automation sessions to broken Browser Use paths (`os error 3`) and UI overlapping.
*   **Automations Failing to Execute**: Desktop users across multiple OS platforms are experiencing a shared frustration: automations schedule properly, but the agent turn never fires, leaving empty sessions.
*   **VS Code Extension Overhead**: The extension continues to cause thermal and CPU throttling issues on macOS, forcing developers using Apple Silicon to disable the extension during heavy local workloads.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-01

## 1. Today's Highlights
The project shipped patch releases `v0.40.1` and `v0.41.0-preview.1` to address a critical cherry-picked fix. Concurrently, maintainers and community contributors submitted several high-impact pull requests focusing on UI responsiveness, sandbox configuration handling, and subagent awareness. On the issue tracker, discussions around AST-aware code navigation, UI hanging under heavy input, and persistent permission prompts highlight the community's push toward a more robust, low-friction developer experience.

## 2. Releases
- **[v0.41.0-preview.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.41.0-preview.1)**: Patch release cherry-picking commit `2194da2` into the `0.41.0-preview` line ([PR #26269](https://github.com/google-gemini/gemini-cli/pull/26269)).
- **[v0.40.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.40.1)**: Stable patch release cherry-picking the same critical fix into the `0.40.x` line ([PR #26268](https://github.com/google-gemini/gemini-cli/pull/26268)).

## 3. Hot Issues

1. **[AST-Aware File Reads & Codebase Mapping (#22745)](https://github.com/google-gemini/gemini-cli/issues/22745)** — A maintainer epic evaluating AST-aware tooling (e.g., Tilth, Glyph) for precise method-level reads. This could drastically reduce token noise and multi-turn misalignment when navigating large codebases. 5 comments, actively discussed.
2. **[Repeated Permission Prompts on the Same File (#24916)](https://github.com/google-gemini/gemini-cli/issues/24916)** — Users report that "allow for all future sessions" sometimes fails to persist, causing repeated permission dialogs for identical file operations. High frustration factor for uninterrupted workflows.
3. **[UI Hang When Pasting ≥5 kiB of Text (#25998)](https://github.com/google-gemini/gemini-cli/issues/25998)** — `KeypressContext.tsx` processes pasted data character-by-character, freezing the UI on large pastes. A contributor has identified the root cause and a fix is anticipated.
4. **[Shell Command Execution Stuck in "Awaiting Input" (#25166)](https://github.com/google-gemini/gemini-cli/issues/25166)** — After a simple shell command finishes, the CLI remains hung showing the command as active. 3 👍s indicate this affects multiple users.
5. **[Model Creates tmp Scripts in Random Directories (#23571)](https://github.com/google-gemini/gemini-cli/issues/23571)** — When shell execution is restricted, the agent scatters temporary edit scripts across the workspace, creating cleanup overhead before commits.
6. **[Gemini Live Voice Latency & Cutoff (#25495)](https://github.com/google-gemini/gemini-cli/issues/25495)** — End-of-speech latency and buffer cutoff (last sentence lost) when releasing the spacebar during voice input. The local Whisper backend handles this better than the cloud Live backend.
7. **[400 Error with >128 Tools (#24246)](https://github.com/google-gemini/gemini-cli/issues/24246)** — When the tool count exceeds the API limit, the agent crashes instead of intelligently narrowing the active tool scope. Important for extensibility via MCP plugins.
8. **[Memory Routing: Global vs. Project (#22819)](https://github.com/google-gemini/gemini-cli/issues/22819)** — A foundational architecture issue to separate user preferences (global `~/.gemini/`) from project-specific memory (`.gemini/`). Essential for multi-repo workflows. 2 👍s.
9. **[Subagents Unaware of Active Approval Modes (#23582)](https://github.com/google-gemini/gemini-cli/issues/23582)** — Subagents ignore Plan Mode / Auto-Edit Mode constraints, leading to infinite failure loops when the policy engine blocks their tool calls.
10. **[Exit Shell Mode with Backspace (#26299)](https://github.com/google-gemini/gemini-cli/issues/26299)** — A UX request to allow exiting shell mode by backspacing the `!` character, aligning with conventions from other coding agents.

## 4. Key PR Progress

| PR | Area | Summary |
|----|------|---------|
| [**#26286**](https://github.com/google-gemini/gemini-cli/pull/26286) | Agent | Fixes stale state in the `/rewind` command, restoring accurate history rollback. |
| [**#26287**](https://github.com/google-gemini/gemini-cli/pull/26287) | Core | Inserts voice transcription text at the cursor position instead of always appending to the end of the input buffer. |
| [**#26284**](https://github.com/google-gemini/gemini-cli/pull/26284) | Core/UI | Replaces static "Listening..." text with an animated wave UI during voice input mode. |
| [**#26285**](https://github.com/google-gemini/gemini-cli/pull/26285) | Core | Resolves auto-update failures when sandbox is disabled via CLI flag but enabled in `settings.json`. |
| [**#25643**](https://github.com/google-gemini/gemini-cli/pull/25643) | Shell/UI | Throttles text output updates during high-volume shell execution to prevent UI jank (addresses #25998). |
| [**#26292**](https://github.com/google-gemini/gemini-cli/pull/26292) | Agent | Adds behavioral eval for file creation and `write_file` tool selection, improving agent reliability testing. |
| [**#23608**](https://github.com/google-gemini/gemini-cli/pull/23608) | Agent | Injects Plan Mode / Auto-Edit Mode context into subagent instructions so they respect active approval policies (addresses #23582). |
| [**#26296**](https://github.com/google-gemini/gemini-cli/pull/26296) | GitHub Bot | Removes `help wanted` from the label sync allowlist so community-friendly labels don't propagate to PRs. |
| [**#25554**](https://github.com/google-gemini/gemini-cli/pull/25554) | Core/Perf | Skips redundant model routing classification when `pro` and `flash` tiers resolve to the same model (e.g., custom model overrides). |
| [**#25634**](https://github.com/google-gemini/gemini-cli/pull/25634) | Config | Adds string-to-boolean coercion for settings, fixing env var interpolation in `settings.json`. |

## 5. Feature Request Trends

- **AST-Aware Code Navigation** — Strong momentum behind integrating AST-level understanding for file reads, search, and codebase mapping to reduce token waste and improve precision ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
- **Proactive & Scoped Memory** — Requests for the agent to automatically save preferences and route them to global vs. project-scoped memory stores ([#22819](https://github.com/google-gemini/gemini-cli/issues/22819), [#22809](https://github.com/google-gemini/gemini-cli/issues/22809)).
- **Local / Hybrid Model Execution** — A community proposal to support offline mode with local models (Gemma, Phi-3) via LM Studio or GPT4All endpoints ([#26294](https://github.com/google-gemini/gemini-cli/issues/26294)).
- **Smarter Tool Management** — Dynamic tool scoping to avoid 400 errors when large numbers of MCP tools are registered ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)).
- **Destructive Behavior Guardrails** — Agent should prefer safe git alternatives and avoid `--force` or risky DB mutations ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).

## 6. Developer Pain Points

- **UI Responsiveness Under Load** — Pasting large text ([#25998](https://github.com/google-gemini/gemini-cli/issues/25998)) and high-volume shell output ([#25643](https://github.com/google-gemini/gemini-cli/pull/25643)) cause the terminal UI to hang, rooted in per-character event processing.
- **Permission Persistence Failures** — The allow/allow-always flow sometimes doesn't stick, forcing repeated approvals ([#24916](https://github.com/google-gemini/gemini-cli/issues/24916)).
- **Shell Mode UX Friction** — Commands hanging in "awaiting input" after completion ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) and inability to exit shell mode via backspace ([#26299](https://github.com/google-gemini/gemini-cli/issues/26299)) degrade the interactive experience.
- **SSH & Terminal Compatibility** — Scrambled text over SSH sessions ([#24202](https://github.com/google-gemini/gemini-cli/issues/24202)) and path errors on Windows network drives ([#25216](https://github.com/google-gemini/gemini-cli/issues/25216)) affect remote and cross-platform users.
- **Voice Input Quality** — Latency and audio cutoff in the cloud Gemini Live backend compared to the local Whisper fallback ([#25495](https://github.com/google-gemini/gemini-cli/issues/25495)).

---

*Data sourced from [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) on 2026-05-01.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for 2026-05-01.

# GitHub Copilot CLI Community Digest — 2026-05-01

## 1. Today's Highlights
GitHub Copilot CLI shipped two rapid-fire patch releases (v1.0.40-1 and v1.0.40-2), introducing major quality-of-life updates like session history, file tracking, and the new `/chronicle` command for all users. The team also shipped native Azure DevOps repository detection, automatic MCP server management, and faster CLI startup times. Meanwhile, the community is highly active in demanding more robust and flexible permissions systems to replace the current binary "allow all" vs. "approve per action" model.

## 2. Releases
*   **[v1.0.40-2](https://github.com/github/copilot-cli/releases/tag/v1.0.40-2)**
    *   **Fixed:** The `/update` command no longer re-submits the original `-i` prompt after restarting the CLI.
*   **[v1.0.40-1](https://github.com/github/copilot-cli/releases/tag/v1.0.40-1)**
    *   **Added:** Auto-detection for Azure DevOps repositories, which automatically disables the GitHub MCP server to prevent conflicts.
    *   **Added:** General availability for session history, file tracking, and the `/chronicle` command.
    *   **Added:** Skills are now available as slash commands in ACP (Agent Client Protocol) clients.
    *   **Improved:** Noticeable improvements to CLI startup speed.

## 3. Hot Issues
1.  **[#107 Tool calls cause Segmentation Fault on Alpine Linux](https://github.com/github/copilot-cli/issues/107)** (Open): A critical stability bug where any tool call in Docker environments running `alpine:latest` results in a segfault. This remains a major pain point for containerized workflows (👍 4, Comments: 14).
2.  **[#1455 Make copilot cli auto-inject Co-authored by Copilot](https://github.com/github/copilot-cli/issues/1455)** (Closed): A highly discussed feature request matching Claude's out-of-the-box behavior to automatically attribute AI-assisted commits (Comments: 10).
3.  **[#1973 Feature Request: Tool whitelist for Interactive Mode](https://github.com/github/copilot-cli/issues/1973)** (Open): Users are requesting a "middleware" approach to permissions, asking to auto-approve safe read-only commands (`grep`, `cat`, `git status`) without enabling destructive operations (👍 13, Comments: 9).
4.  **[#2769 Copilot Pro+ – Weekly Rate Limit Not Resetting](https://github.com/github/copilot-cli/issues/2769)** (Closed): Users report hitting unexpected weekly rate limits with unclear reset times, highlighting growing friction around model usage quotas (👍 3, Comments: 9).
5.  **[#1799 How to turn off alt-screen views?](https://github.com/github/copilot-cli/issues/1799)** (Open): The recent shift to an alt-screen rendering mode has broken several terminal workflows, and users are requesting a toggle to revert to standard output (👍 4, Comments: 8).
6.  **[#334 Add shell completions](https://github.com/github/copilot-cli/issues/334)** (Closed): A highly requested quality-of-life feature (👍 11) asking for native tab-completion generation for Zsh, Bash, and PowerShell.
7.  **[#1322 Feature request: Show subagent tool call details](https://github.com/github/copilot-cli/issues/1322)** (Open): A request to bring the CLI's subagent visibility up to par with VS Code, allowing users to drill down into the specific tool calls made by background agents (👍 10, Comments: 3).
8.  **[#1082 Copilot CLI hangs on sudo commands](https://github.com/github/copilot-cli/issues/1082)** (Open): A critical usability blocker where the CLI hangs indefinitely on `sudo` commands because it cannot forward the terminal password prompt (👍 10, Comments: 2).
9.  **[#2995 Can´t use DeepSeek API](https://github.com/github/copilot-cli/issues/2995)** (Open): Users are struggling to configure custom OpenAI-compatible providers (like DeepSeek) using `COPILOT_PROVIDER_BASE_URL`, pointing to documentation or implementation gaps (👍 5, Comments: 2).
10. **[#3059 Deprecating support for .vscode/mcp.json is a terrible idea](https://github.com/github/copilot-cli/issues/3059)** (Open): Users are pushing back on the forced migration away from the VS Code MCP configuration, frustrated by the prospect of maintaining two separate MCP configuration files.

## 4. Key PR Progress
*(Note: Only 1 PR was updated in the last 24 hours. Here is the detail on that specific PR, alongside notable feature requests currently functioning as community PRs/proposals.)*

*   **[#1968 install: retry without token when authenticated requests fail](https://github.com/github/copilot-cli/issues/1968)** (Open): Fixes an installation failure where SAML enforcement blocks CLI downloads for org members whose `GITHUB_TOKEN` hasn't been SSO-authorized, even if the repository is public. The PR implements a fallback to retry the download unauthenticated.
*   *(Related community proposals lacking formal PRs today include[#1973](https://github.com/github/copilot-cli/issues/1973) for a tool whitelist, [#3061](https://github.com/github/copilot-cli/issues/3061) for custom agent composition, and [#2071](https://github.com/github/copilot-cli/issues/2071) for `pass` credential integration).*

## 5. Feature Request Trends
*   **Granular Permission Systems:** The most prominent trend is the demand for configurable tool permissions. Users want the ability to create allowlists for safe tools (like `ls` or `cat`) and strict prompts for file modifications, rather than the binary choice between `/allow-all` or constant prompting ([#1973](https://github.com/github/copilot-cli/issues/1973), [#1995](https://github.com/github/copilot-cli/issues/1995), [#3028](https://github.com/github/copilot-cli/issues/3028)).
*   **AI Attribution & Git Tracking:** There is a strong desire for native Git integration to track AI involvement, primarily through the automatic injection of `Co-authored-by: Copilot` tags ([#1455](https://github.com/github/copilot-cli/issues/1455), [#975](https://github.com/github/copilot-cli/issues/975)).
*   **Agent Composability & Plugins:** Developers are pushing for more complex agent workflows, specifically requesting the ability to have custom agents inherit or compose shared base prompts (`.agent.md` files). Additionally, plugin authors want control over LLM inference parameters like `temperature` and `top-p` inside `SKILL.md` files ([#3061](https://github.com/github/copilot-cli/issues/3061), [#3056](https://github.com/github/copilot-cli/issues/3056)).

## 6. Developer Pain Points
*   **Rate Limiting Opacity:** Pro+ users are frequently hitting weekly rate limits with confusing error messages and incorrect reset timers. The community is asking for better visibility into usage limits and clearer UI suggestions when limits are reached ([#2769](https://github.com/github/copilot-cli/issues/2769), [#2828](https://github.com/github/copilot-cli/issues/2828)).
*   **Terminal Compatibility Quirks:** Recent rendering updates have introduced friction. Users running Alpine Linux are experiencing segfaults ([#107](https://github.com/github/copilot-cli/issues/107)), alt-screen rendering is breaking expected terminal behaviors ([#1799](https://github.com/github/copilot-cli/issues/1799)), and Windows/WSL users are dealing with mangled clipboard pasting due to OSC 52 UTF-8/UTF-16LE mismatches ([#3062](https://github.com/github/copilot-cli/issues/3062)).
*   **MCP Configuration Fragmentation:** The transition away from `.vscode/mcp.json` is causing frustration for developers who use both VS Code and the CLI, as they now have to manage separate configuration files for identical MCP servers ([#3059](https://github.com/github/copilot-cli/issues/3059), [#3060](https://github.com/github/copilot-cli/issues/3060)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-01

## 1. Today's Highlights

Kimi Code CLI shipped version **1.41.0**, bringing highly requested fixes for clipboard support on headless Linux environments and plugin installation from `.zip` URLs. The community remains highly engaged around **ACP (Agent Communication Protocol) session history replay**, with multiple issues and a corresponding PR addressing the lack of conversation persistence in IDE integrations like Zed and JetBrains. Meanwhile, several performance-focused PRs targeting shell input latency and toolbar rendering signal active optimization work.

---

## 2. Releases

### v1.41.0
- **Clipboard fix for headless Linux**: `Ctrl+V` paste now works over SSH sessions where `DISPLAY` is unset — a key improvement for remote-server workflows ([#2115](https://github.com/MoonshotAI/kimi-cli/pull/2115)).
- **Plugin installation from `.zip` URLs**: `kimi plugin install` now accepts direct HTTP(S) links to `.zip` archives, streamed via `httpx`, matching common GitHub/GitLab archive patterns ([#2126](https://github.com/MoonshotAI/kimi-cli/pull/2126)).

---

## 3. Hot Issues

1. **[#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) — Persistent Memory System across sessions**: A long-running enhancement request for AI-managed and user-defined persistent memory. Remains open since February with continued community interest.

2. **[#1994](https://github.com/MoonshotAI/kimi-cli/issues/1994) — Usage/token calculation complaints (👍 4)**: Users report that long K2.6 chain-of-thought reasoning depletes token budgets in as few as 2 queries, making subscriptions feel undervalued. The highest upvoted issue in this cycle.

3. **[#2131](https://github.com/MoonshotAI/kimi-cli/issues/2131) — CLI pollutes environment variables, crashes Kimi Desktop**: The CLI sets session-level env vars that cause the Electron-based Kimi desktop app to crash on launch. A critical compatibility issue.

4. **[#2127](https://github.com/MoonshotAI/kimi-cli/issues/2127) — Missing ACP `session/list` and `session/get` methods**: Zed cannot load conversation history because the ACP protocol endpoints are unimplemented.

5. **[#1956](https://github.com/MoonshotAI/kimi-cli/issues/1956) — ACP session history not replayed in IDE clients**: A broader companion issue to #2127; session history exists but is never sent to ACP clients on load.

6. **[#1617](https://github.com/MoonshotAI/kimi-cli/issues/1617) — Ctrl-V image paste broken in Windows Terminal**: Image paste via Ctrl-V doesn't work on Windows, limiting multimodal workflows.

7. **[#2122](https://github.com/MoonshotAI/kimi-cli/issues/2122) — Shell mode hardcodes `/bin/sh` instead of respecting user default**: Users of zsh/fish lose aliases and functions when entering shell mode via Ctrl+X.

8. **[#2121](https://github.com/MoonshotAI/kimi-cli/issues/2121) — Request for Shift+Enter line breaks**: The current Ctrl+J binding feels unintuitive; users want the industry-standard Shift+Enter shortcut.

9. **[#2120](https://github.com/MoonshotAI/kimi-cli/issues/2120) — Tool call safety configuration**: Users want granular allow/deny lists for bash commands and file-system sandboxing, beyond the binary afk/yolo mode.

10. **[#2120](https://github.com/MoonshotAI/kimi-cli/issues/2120) — Granular auto-approval rules**: Echoes Claude Code's permission model—developers want per-command and per-directory restrictions for unattended operation.

---

## 4. Key PR Progress

| PR | Description | Status |
|---|---|---|
| [#2130](https://github.com/MoonshotAI/kimi-cli/pull/2130) | **Release bump to 1.41.0** — includes clipboard and plugin install fixes | ✅ Merged |
| [#2115](https://github.com/MoonshotAI/kimi-cli/pull/2115) | **Clipboard paste on headless Linux over SSH** — gracefully handles missing `DISPLAY` | ✅ Merged |
| [#2126](https://github.com/MoonshotAI/kimi-cli/pull/2126) | **Plugin install from .zip URL** — streams archives via `httpx`, prioritized over git heuristic | ✅ Merged |
| [#2132](https://github.com/MoonshotAI/kimi-cli/pull/2132) | **ACP session history replay** — persists wire history and replays events on `session/load`; fixes #1956 and #2127 | 🟡 Open |
| [#2133](https://github.com/MoonshotAI/kimi-cli/pull/2133) | **AGENTS.md support for custom prompts** — merges instructions without duplication | 🟡 Open |
| [#2136](https://github.com/MoonshotAI/kimi-cli/pull/2136) | **Reduce hidden modal input latency** — skips completion startup, uses idle refresh interval | 🟡 Open |
| [#2135](https://github.com/MoonshotAI/kimi-cli/pull/2135) | **Throttle toolbar git metadata** — caches branch/status to avoid spawning git subprocess per keystroke | 🟡 Open |
| [#2134](https://github.com/MoonshotAI/kimi-cli/pull/2134) | **Ignore xterm focus events** — prevents `ESC[I`/`ESC[O` sequences from leaking into input | 🟡 Open |
| [#2114](https://github.com/MoonshotAI/kimi-cli/pull/2114) | **Granular auto-approval rules in config.toml** — per-command and per-directory allow/deny lists | 🟡 Open |
| [#2129](https://github.com/MoonshotAI/kimi-cli/pull/2129) | **Respect `KIMI_SHARE_DIR` for plan files** — stops hardcoding `~/.kimi/plans` | 🟡 Open |

---

## 5. Feature Request Trends

Three dominant themes emerged from recent issues and PRs:

- **ACP & Session Continuity**: Seamless session history replay in IDE integrations (Zed, JetBrains) is the most actively discussed gap, with both user reports (#1956, #2127) and an in-progress fix (#2132).
- **Safety & Granular Control**: Developers want fine-grained permission models—command allowlists, directory sandboxing, and configurable auto-approval rules (#2120, #2114)—similar to Claude Code's approach.
- **UX Polish**: Shift+Enter for line breaks (#2121), respecting default shell in shell mode (#2122), and cross-platform clipboard parity (#1617, #2115) reflect a maturing user base demanding IDE-quality interaction in a CLI.

---

## 6. Developer Pain Points

- **Token consumption is opaque and rapid**: K2.6's extended thinking chains burn through subscription quotas in as few as 2 requests (#1994, 👍 4). Users are confused about whether billing is per-request or per-token, and feel the advertised "300–1200 requests per 5 hours" is unrealistic for complex tasks.
- **Cross-platform input inconsistencies**: Windows Terminal image paste (#1617), hardcoded `/bin/sh` instead of `$SHELL` (#2122), and non-standard line-break shortcuts (#2121) create friction for developers on diverse OS environments.
- **Environment pollution**: The CLI inadvertently modifies session-level environment variables, crashing unrelated Kimi desktop applications (#2131)—indicating insufficient isolation between the CLI and the broader Kimi ecosystem.
- **ACP integration is incomplete**: Missing protocol methods and lack of session replay make the CLI unreliable as an agent backend for popular editors (#1956, #2127), undermining the "seamless IDE integration" value proposition.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-01

Here is the technical digest for the `anomalyco/opencode` repository based on the last 24 hours of activity.

## 1. Today's Highlights

OpenCode released **v1.14.30**, focusing on core stability by patching Desktop session path mismatches and improving compatibility with Azure and DeepSeek providers. Community momentum is heavily focused on performance and provider reliability, highlighted by active discussions in the Memory Megathread and multiple reports regarding OpenRouter "Free BYOK request cap" errors. Architecture evolution continues under the hood, with core contributors merging the new native LLM foundation and refactoring session event schemas.

## 2. Releases

### [v1.14.30](https://github.com/anomalyco/opencode/releases)
- **Core:** Fixed missing sessions in Desktop caused by path mismatches, including recovery logic for existing stored data.
- **Core:** Fixed Azure Responses defaults to avoid reasoning item ordering errors.
- **Core:** Improved DeepSeek compatibility with providers that vary model naming.
- **Core:** Added Mistral Medium 3.5 with reasoning support.

## 3. Hot Issues

1. **[#20695 [OPEN] Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)**
   *The central hub for tackling memory leaks.* With 70 comments and 41 thumbs-up, this is the most active issue. Core maintainers are requesting heap snapshots from users rather than AI-generated guesses to isolate underlying performance bottlenecks.

2. **[#25148 [CLOSED] Free BYOK request cap exceeded](https://github.com/anomalyco/opencode/issues/25148)**
   *OpenRouter Rate Limiting.* Users (especially those using Kimi k2.6) reported hitting the OpenRouter free tier cap unexpectedly. This generated significant community frustration (14 👍) before being resolved/closed.

3. **[#14194 [OPEN] Shared config corrupts SQLite database](https://github.com/anomalyco/opencode/issues/14194)**
   *Docker + Local Concurrency.* Running OpenCode locally and in Docker simultaneously while sharing volumes (`~/.local/share/opencode/`) causes SQLite database corruption during parallel sessions. Highly relevant for containerized workflows.

4. **[#12472 [OPEN] Native Claude Code hooks compatibility](https://github.com/anomalyco/opencode/issues/12472)**
   *Feature Parity.* Users are requesting native support for Claude Code's `PreToolUse`, `PostToolUse`, and `Stop` hooks within OpenCode to allow better custom guardrails and scripting (20 👍).

5. **[#25134 [CLOSED] DeepSeek V4 Pro multi-turn reasoning error](https://github.com/anomalyco/opencode/issues/25134)**
   *Provider Bug.* Using DeepSeek V4 Pro failed on subsequent conversation turns because `reasoning_content` was not being correctly passed back to the API. 

6. **[#12716 [OPEN] Doom loop not caught during reasoning](https://github.com/anomalyco/opencode/issues/12716)**
   *Agent Stability.* When an agent gets stuck in a repetitive reasoning loop, OpenCode fails to catch and interrupt the process, requiring manual cancellation.

7. **[#25151 [OPEN] Global "Free BYOK request cap" error for Go subscribers](https://github.com/anomalyco/opencode/issues/25151)**
   *Billing/Middleware Bug.* Active OpenCode Go subscribers are incorrectly receiving OpenRouter free-tier cap messages across *all* models, indicating a potential auth-passing issue in the proxy layer.

8. **[#24800 [OPEN] Excessive reasoning + unexpected Chinese output](https://github.com/anomalyco/opencode/issues/24800)**
   *Model Behavior.* Reports that "Big Pickle" overthinks simple tasks and unexpectedly outputs Chinese text, highlighting prompt/system-instruction drift in specific models.

9. **[#23566 [OPEN] Docs suggest LSP is enabled by default](https://github.com/anomalyco/opencode/issues/23566)**
   *Documentation Mismatch.* LSP is intentionally disabled by default, but the docs currently imply auto-installation and execution out-of-the-box, confusing new users.

10. **[#23298 [OPEN] Support Anthropic `defer_loading` passthrough](https://github.com/anomalyco/opencode/issues/23298)**
    *Token Optimization.* A request to support Anthropic's native tool deferral to keep system-prompt prefixes small (zero tokens upfront), which is crucial for complex agentic workflows with many tools.

## 4. Key PR Progress

1. **[#24712 Add native LLM core foundation](https://github.com/anomalyco/opencode/pull/24712)**
   Adds `packages/llm`, a native Effect-based LLM core with typed schemas and provider adapters, gated behind `OPENCODE_EXPERIMENTAL_LLM_NATIVE`. A massive architectural shift.

2. **[#24512 Refactor v2 session events as schemas](https://github.com/anomalyco/opencode/pull/24512)**
   Reworks internal session events into strict `const` schema definitions with sync metadata, simplifying event projection and stepper matching.

3. **[#25167 Fix: Ensure user config takes precedence over plugin hooks](https://github.com/anomalyco/opencode/pull/25167)**
   Resolves a priority bug where plugin hooks were overriding explicit user configurations for model resolution.

4. **[#25165 Route child session events to parent ACP session](https://github.com/anomalyco/opencode/pull/25165)**
   Fixes ACP (Agent Communication Protocol) clients not seeing subagent activity by adding child-to-root session resolution.

5. **[#25169 Protect HttpApi web UI fallback with auth](https://github.com/anomalyco/opencode/pull/25169)**
   Wraps the experimental web UI fallback in standard authorization middleware (Basic Auth, Tokens, CORS) to prevent unauthorized access.

6. **[#25171 Add `content_padding` option to TUI](https://github.com/anomalyco/opencode/pull/25171)**
   Replaces hardcoded terminal padding with a configurable `content_padding` setting in `tui.json`, fixing issues on ultra-wide displays.

7. **[#25160 FFF (Fuzzy/Fast File Finder) for file search](https://github.com/anomalyco/opencode/pull/25160)**
   Implements fast fuzzy pickers for file search, content search, and directory traversal to speed up agentic file discovery.

8. **[#23927 Preserve Bedrock Claude reasoning replay](https://github.com/anomalyco/opencode/pull/23927)**
   Fixes a bug where interleaved reasoning blocks were lost during Bedrock provider transformations, breaking context replay.

9. **[#25009 Add DELETE /project/:id endpoint](https://github.com/anomalyco/opencode/pull/25009)**
   Implements cascading deletion for projects and associated data via the API, completing CRUD operations for project management.

10. **[#13854 Stop streaming markdown after message completes](https://github.com/anomalyco/opencode/pull/13854)**
    Fixes a UI bug where `TextPart` passed `streaming={true}` unconditionally, causing the last table row in markdown to be skipped.

## 5. Feature Request Trends

- **Granular Agentic Guardrails:** High demand for Claude Code-style hooks (`PreToolUse`, `PostToolUse`) and timeout parameters for subagents to prevent runaway costs and doom loops.
- **Provider Flexibility & BYOK Stability:** Users want better support for cutting-edge models (GPT-5.x via Copilot, local Ollama) and more transparent quota/billing management for third-party routing (OpenRouter).
- **Architectural Performance Optimizations:** Community developers are actively suggesting core optimizations, such as caching to avoid ~90% of compaction costs during long multi-turn sessions.
- **Token Management:** Explicit requests for advanced provider features like Anthropic's `defer_loading` to manage massive system contexts efficiently.

## 6. Developer Pain Points

- **OpenRouter BYOK Confusion:** A high-frequency frustration today was OpenCode Go subscribers hitting unexpected "Free BYOK request cap" errors, disrupting workflows.
- **DeepSeek V4 Multi-turn Failures:** The requirement to pass `reasoning_content` back to the DeepSeek API is breaking multi-turn conversations, causing friction for users relying on open-source or alternative models.
- **Concurrency & State Corruption:** Developers running hybrid environments (Docker + Local CLI) are experiencing severe issues like SQLite corruption and path mismatches, indicating a need for better multi-instance locking or session state management.
- **UI/UX Friction:** Smaller but persistent annoyances include terminals failing to actually copy text to the clipboard on Linux, missing Vue syntax highlighting, and narrow content areas on wide displays.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for 2026-05-01.

### 1. Today's Highlights
The Pi ecosystem saw a massive surge in community contributions, focusing heavily on expanding provider support and hardening security. Notable advancements include the introduction of Cloudflare AI Gateway as a native provider, official local LLM provider extensions, and new models like Xiaomi MiMo and Mistral Medium 3.5. Meanwhile, critical security and stability fixes were merged to address a severe `grep` tool RCE vulnerability, session state duplication, and Windows PowerShell compatibility.

### 2. Releases
No new official releases were published in the last 24 hours. The current stable version remains v0.70.6.

### 3. Hot Issues
*   **[Security] RCE via `grep` tool argument injection** ([#4018](https://github.com/badlogic/pi-mono/issues/4018)): A critical vulnerability was reported where the built-in `grep` tool lacks a `--` separator, allowing ripgrep flags like `--pre` to execute arbitrary code.
*   **Agent steering delays in tool batches** ([#4001](https://github.com/badlogic/pi-mono/issues/4001)): Safety concerns were raised regarding `pi-agent-core` draining user steering cues only after an entire tool-call batch completes, potentially allowing stale/unsafe tool executions. 
*   **Codex reliability regression on low verbosity** ([#4026](https://github.com/badlogic/pi-mono/issues/4026)): The recent change to default `text.verbosity` to "low" is causing `gpt-5.3-codex` to emit commentary instead of tool calls, halting tasks mid-run.
*   **Fireworks Kimi models compat flags missing** ([#4016](https://github.com/badlogic/pi-mono/issues/4016)): Bundled Fireworks entries are routing incorrectly and failing due to unconditional `eager_input_streaming` and missing `compat` flags in `models.generated.js`.
*   **In-memory Auth Credentials via Env Var** ([#4030](https://github.com/badlogic/pi-mono/issues/4030)): A highly requested feature to pass `PI_CODING_AGENT_AUTH_JSON` for ephemeral, in-memory auth without touching the filesystem, addressing corporate security constraints.
*   **Clipboard images failing silently on WSL** ([#2469](https://github.com/badlogic/pi-mono/issues/2469)): A persistent, heavily upvoted issue (👍 4) where pasting images from Windows into WSL fails without any UI error feedback.
*   **Session resumption cwd mismatch** ([#4006](https://github.com/badlogic/pi-mono/issues/4006)): Resuming a session incorrectly retains the parent shell's working directory instead of switching to the session's original cwd.
*   **DeepSeek reasoning_content lost after tool results** ([#3743](https://github.com/badlogic/pi-mono/issues/3743)): A replay bug causing DeepSeek V4's chain-of-thought to drop when a tool-use turn is followed by an assistant text turn.
*   **Self-update failures via alternative package managers** ([#3942](https://github.com/badlogic/pi-mono/issues/3942), [#3980](https://github.com/badlogic/pi-mono/issues/3980)): Users are reporting that `pi update --self` breaks when installed via `npm --prefix` or `bun`.
*   **Edit tool encoding failures** ([#3878](https://github.com/badlogic/pi-mono/issues/3878)): The `edit` tool silently fails to match text containing escaped backticks or emojis with variation selectors.

### 4. Key PR Progress
*   **feat(ai): add Cloudflare AI Gateway as a provider** ([PR #3856](https://github.com/badlogic/pi-mono/pull/3856)): Introduces native support for Cloudflare's gateway, enabling caching, rate limiting, and fallbacks for OpenAI/Anthropic routes.
*   **feat(coding-agent): support auth json env** ([PR #4025](https://github.com/badlogic/pi-mono/pull/4025)): Implements `PI_CODING_AGENT_AUTH_JSON` for in-memory auth loading and immediately scrubs the env var for security.
*   **fix(coding-agent): redo Bun package manager node_modules handling** ([PR #3998](https://github.com/badlogic/pi-mono/pull/3998)): Reverts a previous change to correctly trigger Bun package management operations only when Bun is the package manager, not just the runtime.
*   **refactor(coding-agent): migrate syntax highlighting to Shiki** ([PR #3868](https://github.com/badlogic/pi-mono/pull/3868)): Replaces the legacy highlighter with Shiki, bringing fine-grained lazy loading and first-class Shiki theme support to Pi themes.
*   **fix(coding-agent): handle duplicate session entries** ([PR #3991](https://github.com/badlogic/pi-mono/pull/3991)): Prevents the `/tree` command from hanging by skipping duplicate IDs when building the session tree.
*   **feat(ai): add Xiaomi MiMo provider** ([PR #4005](https://github.com/badlogic/pi-mono/pull/4005)): Adds Xiaomi MiMo as a built-in OpenAI-completions compatible provider.
*   **fix(coding-agent): remove detached: true on Windows** ([PR #4013](https://github.com/badlogic/pi-mono/pull/4013)): Fixes a frustrating bug where `pwsh.exe` produced no stdout/stderr because `detached: true` broke the console host communication.
*   **feat(coding-agent): add official local-LLM provider extensions** ([PR #4007](https://github.com/badlogic/pi-mono/pull/4007)): Ships official extensions for local providers (llama.cpp, LMStudio, vLLM, Ollama) that auto-probe local engines.
*   **feat(coding-agent): compress skill blocks during compaction** ([PR #4000](https://github.com/badlogic/pi-mono/pull/4000)): Saves tokens during context compaction by intelligently compressing injected `<skill>` XML blocks instead of treating them as normal text.
*   **fix(coding-agent): preserve .agents provenance in skill metadata** ([PR #4028](https://github.com/badlogic/pi-mono/pull/4028)): Improves skill discovery to correctly group and display skill sources in the UI header.

### 5. Feature Request Trends
*   **Granular Provider & Model Management:** Users are frequently requesting the ability to explicitly disable or hide default models/providers from the UI and selector lists (e.g., [#3977](https://github.com/badlogic/pi-mono/issues/3977)).
*   **Secure & Ephemeral Configurations:** A strong trend toward CI/CD and corporate-readiness, with users requesting in-memory auth variables, restricted auth contexts for extensions ([#4035](https://github.com/badlogic/pi-mono/issues/4035)), and auto-refreshing Bedrock bearer tokens ([#3462](https://github.com/badlogic/pi-mono/issues/3462)).
*   **Dynamic UI & UX Adjustments:** There is a consistent demand for the CLI/TUI to adapt dynamically to OS-level changes, such as auto-detecting light/dark mode shifts ([#1436](https://github.com/badlogic/pi-mono/issues/1436)) and correctly reflecting thinking-level border colors in real-time ([#3888](https://github.com/badlogic/pi-mono/issues/3888)).

### 6. Developer Pain Points
*   **Self-Update Friction:** The new `pi update --self` mechanism is causing widespread frustration, failing for users with non-standard setups (Nix, custom npm prefixes, and Bun global installs).
*   **Agentic Verbosity vs. Reliability:** The OpenAI Codex provider's shift to low verbosity is breaking agentic loops, forcing the AI to output "status updates" rather than triggering necessary tool calls, requiring manual intervention.
*   **Text Encoding in Tools:** Developers are frustrated by silent matching failures in the core `edit` tool when dealing with complex strings (backticks, emojis), leading to broken automated refactoring flows.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-01

## 1. Today's Highlights
Version **v0.15.6** was released, delivering critical CLI rendering fixes—including a patch for SubAgent display flicker and improvements to the sticky todo panel. The community remains highly active around **model context management**, with multiple new PRs addressing auto-memory recall latency and context compression failures. Additionally, heavy development focus is being placed on IDE extensions, highlighted by a new Desktop app package and VSCode message-editing capabilities.

## 2. Releases
*   **v0.15.6 (Stable)**
    *   `fix(memory)`: Used project transcript path for dream ([PR #3722](https://github.com/QwenLM/qwen-code/pull/3722) by @LaZzyMan)
    *   `fix(cli)`: Bounded SubAgent display by visual height to prevent flicker ([PR #3721](https://github.com/QwenLM/qwen-code/pull/3721) by @wenshao)
    *   `fix(cli)`: Kept sticky todo panel stable.
*   **v0.15.6-preview.0** & **v0.15.3-nightly.20260430.da2936336**
    *   Share the same patch set as v0.15.6 stable.
    *   *Note:* A versioning mismatch was flagged where the nightly build semver (`0.15.3`) is numerically lower than the current stable/preview releases ([Issue #3756](https://github.com/QwenLM/qwen-code/issues/3756)).

## 3. Hot Issues
1.  **[Issue #3652](https://github.com/QwenLM/qwen-code/issues/3652) - 400 InternalError: Algo.InvalidParameter (Input length exceeded)**
    *   *Why it matters:* Users are hitting hard context limits during long conversations, causing hard crashes. PR [#3698](https://github.com/QwenLM/qwen-code/pull/3698) is actively addressing this by injecting auto-compression prior to ACP model sends.
2.  **[Issue #3730](https://github.com/QwenLM/qwen-code/issues/3730) - Auto-halting heavy tasks after recent update**
    *   *Why it matters:* A critical P1 regression where the CLI forces task stops without user input, breaking long-running automated agent workflows.
3.  **[Issue #3750](https://github.com/QwenLM/qwen-code/issues/3750) / [Issue #3772](https://github.com/QwenLM/qwen-code/issues/3772) - DeepSeek V4 Pro `reasoning_content` 400 errors**
    *   *Why it matters:* DeepSeek + thinking mode integration is broken in v0.15.5+ because the CLI fails to relay `reasoning_content` tokens back to the API in subsequent turns.
4.  **[Issue #3759](https://github.com/QwenLM/qwen-code/issues/3759) - Auto-memory recall blocks user turns for 5s**
    *   *Why it matters:* A severe latency bottleneck where every user prompt is delayed by ~5 seconds because the auto-memory recall selector times out on the main request path.
5.  **[Issue #3655](https://github.com/QwenLM/qwen-code/issues/3655) - LLM answers cut off halfway**
    *   *Why it matters:* Users experience abrupt token generation stops, particularly when using custom endpoints like `llama.cpp` or specific models (e.g., Qwen3.6-plus).
6.  **[Issue #3763](https://github.com/QwenLM/qwen-code/issues/3763) - `Ctrl+E` / `Ctrl+F` shortcuts fail to expand running agents**
    *   *Why it matters:* A UI regression introduced in v0.15.6 where the `isFocused` gate blocks users from expanding SubAgent details while running.
7.  **[Issue #3748](https://github.com/QwenLM/qwen-code/issues/3748) - Non-interactive mode triple-wraps errors**
    *   *Why it matters:* Breaking CI/CD pipelines; upstream 4xx errors produce duplicate, double-wrapped stderr outputs and messy stack traces in `-p` mode.
8.  **[Issue #3426](https://github.com/QwenLM/qwen-code/issues/3426) - VSCode plugin ignores Context Window Size**
    *   *Why it matters:* Context limits set in `settings.json` are being bypassed, leading to unavoidable context overflow failures in the IDE.
9.  **[Issue #3742](https://github.com/QwenLM/qwen-code/issues/3742) - `proxy` key in settings.json ignored**
    *   *Why it matters:* Corporate users behind network proxies cannot connect because the CLI doesn't respect the documented proxy configuration.
10. **[Issue #3678](https://github.com/QwenLM/qwen-code/issues/3678) - Add Light Theme to `/export` HTML**
    *   *Why it matters:* Highly requested community UI enhancement (👍 3) to prevent eye strain when reviewing exported HTML session transcripts.

## 4. Key PR Progress
1.  **[PR #3778](https://github.com/QwenLM/qwen-code/pull/3778) - `feat(desktop)`: Desktop app package with Qwen ACP SDK**
    *   Introduces `packages/desktop/`, transitioning the CLI tooling into a standalone desktop application integrated with the Agent Communication Protocol.
2.  **[PR #3762](https://github.com/QwenLM/qwen-code/pull/3762) - `feat(vscode)`: Message edit/rewind & metadata UI**
    *   Brings native chat rewind/edit capabilities to the VSCode companion, allowing users to modify previous prompts without restarting the session.
3.  **[PR #3774](https://github.com/QwenLM/qwen-code/pull/3774) - `feat(core)`: Enforce prior read before Edit/Write**
    *   Forces the AI agent to read a file before mutating it, significantly reducing bad-code hallucinations by ensuring the model has accurate file state in its context cache.
4.  **[PR #3775](https://github.com/QwenLM/qwen-code/pull/3775) - `refactor(core)`: Route side-query LLM calls through `runSideQuery`**
    *   Chokes all side-query LLM calls through a single pipeline, paving the way for consistent context handling and fixing issues where side-queries used wrong model settings.
5.  **[PR #3739](https://github.com/QwenLM/qwen-code/pull/3739) - Add background agent resume and continuation**
    *   Enables interactive CLI sessions to resume paused or interrupted background agents, preserving the original worker state.
6.  **[PR #3684](https://github.com/QwenLM/qwen-code/pull/3684) - `feat(core)`: Event monitor tool with throttled stdout**
    *   Introduces a Monitor Tool for long-running shell commands, using token-bucket throttling to stream `stdout` back to the agent cleanly.
7.  **[PR #3776](https://github.com/QwenLM/qwen-code/pull/3776) - `feat(installer)`: Standalone archive installation**
    *   Adds code-server-style standalone release archives, enabling a one-line install without requiring `npm`/Node.js pre-installed on the host machine.
8.  **[PR #3604](https://github.com/QwenLM/qwen-code/pull/3604) - `feat(skills)`: Parallelize loading + path-conditional activation**
    *   Replaces nested `for-await` loops with `Promise.all` for massive cold-start performance improvements in skill loading.
9.  **[PR #3631](https://github.com/QwenLM/qwen-code/pull/3631) - `feat(stats)`: Model cost estimation + priority fix**
    *   Introduces `/stats model` cost estimation based on user-defined pricing, addressing transparency concerns for API usage.
10. **[PR #3673](https://github.com/QwenLM/qwen-code/pull/3673) - `feat(memory)`: autoSkill background extraction**
    *   Automatically forks a background review agent at the end of a session to identify and save reusable workflows as project-level skills.

## 5. Feature Request Trends
*   **Granular Model Routing & Execution Policies:** Users want strict decoupling of models based on task weight. There is a strong push for a `fastModel`/`smallFastModel` setup ([Issue #2791](https://github.com/QwenLM/qwen-code/issues/2791)) where reasoning/thinking is explicitly disabled for lightweight side-queries ([Issue #3760](https://github.com/QwenLM/qwen-code/issues/3760)), while preserving deep thought for the main model ([Issue #3765](https://github.com/QwenLM/qwen-code/issues/3765)).
*   **Asynchronous Memory & Non-blocking Context:** High demand to decouple memory recall from the main execution thread to eliminate the 5-second UI freezes ([Issue #3761](https://github.com/QwenLM/qwen-code/issues/3761)).
*   **IDE Parity & UX Enhancements:** Users are asking for the VSCode Companion to match the CLI's capabilities, such as proper slash command handling ([Issue #1990](https://github.com/QwenLM/qwen-code/issues/1990)) and better visual themes ([Issue #3678](https://github.com/QwenLM/qwen-code/issues/3678)).
*   **Zero-Dependency Installs:** Moving towards standalone binaries/archives so developers don't need to manage Node.js versions locally ([PR #3776](https://github.com/QwenLM/qwen-code/pull/3776)).

## 6. Developer Pain Points
*   **Context & Memory Computation Overheads:** Developers are experiencing severe latency and context limit blocks. The system currently struggles to compress chats efficiently before hitting hard API limits, resulting in `400 InvalidParameter` errors ([Issue #3652](https://github.com/QwenLM/qwen-code/issues/3652)) and prompt cache drops ([Issue #2986](https://github.com/QwenLM/qwen-code/issues/2986)).
*   **Third-Party Model Compatibility:** A recurring frustration is the CLI's failure to proxy third-party thinking tokens (specifically DeepSeek V4) correctly, breaking multi-turn reasoning workflows ([Issue #3750](https://github.com/QwenLM/qwen-code/issues/3750), [Issue #3772](https://github.com/QwenLM/qwen-code/issues/3772)).
*   **Agentic Loop Instability:** Several reports indicate the AI falls into infinite observation loops ([Issue #1775](https://github.com/QwenLM/qwen-code/issues/1775)) or auto-terminates long-running tasks without user consent ([Issue #3730](https://github.com/QwenLM/qwen-code/issues/3730)).
*   **Non-Interactive/CI Pipeline Fragility:** Scripted executions via `-p` mode are messy, with error logs becoming unreadable due to double-wrapping and stack trace spewing ([Issue #3748](https://github.com/QwenLM/qwen-code/issues/3748)).

</details>