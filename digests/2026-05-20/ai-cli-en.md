# AI CLI Tools Community Digest 2026-05-20

> Generated: 2026-05-19 22:23 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the community digests from May 20, 2026.

### 1. Ecosystem Overview
The AI CLI tool ecosystem is undergoing a rapid transition from simple terminal-based chat interfaces to sophisticated autonomous agents. Today’s development landscape is dominated by massive architectural refactors aimed at supporting background daemons, complex multi-agent orchestration, and deep IDE integration. However, this explosive feature velocity is introducing systemic growing pains: critical TUI rendering bugs, severe memory management issues (OOM crashes), and deep-seated cross-platform instabilities—particularly within Windows and WSL environments. Consequently, developer focus is heavily split between pushing the boundaries of headless automation and battling fundamental terminal reliability bugs.

### 2. Activity Comparison
*Activity is measured by explicit mentions in the provided daily digests.*

| AI CLI Tool | Hot Issues Tracked | Key PRs Updated | Latest Release Status | Top Theme |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 5 | `v2.1.145` (Released today) | Headless observability & TUI rendering bugs |
| **OpenAI Codex** | 10 | 10 | `v0.131` (Regressions reported) | Desktop/WSL integration & Config overrides |
| **Gemini CLI** | 10 | 10 | `v0.43.0-preview.1` (Released today) | Sub-agent reliability & PTY/memory leaks |
| **GitHub Copilot CLI** | 10 | 3 | `v1.0.49` (Broken), `v1.0.51-1` (Pre-release) | Severe v1.0.49 regressions (Linux/WSL) |
| **OpenCode** | 10 | 10 | `v1.15.5` (Stable) | CI optimization & MCP config standardization |
| **Qwen Code** | 10 | 10 | None (Awaiting next stable) | Massive Mode B Daemon refactor & OOM crashes |
| **Pi** | 10 | 10 | None (Awaiting next stable) | Extreme performance gains & Windows locks |
| **DeepSeek TUI** | 10 | 10 | `v0.8.39` (Stable) | External tool refactoring & IDE bridging |
| **Kimi Code CLI** | 2 | 3 | `0.5.10` (Stable) | TTY hangs & VS Code extension freezing |

### 3. Shared Feature Directions
Despite different codebases, communities are converging on several core requirements for the next generation of AI CLIs:

*   **Daemonization and Headless Executability:** Tools are moving away from single-session TUIs. **Qwen Code** is building a massive `qwen serve` Mode B daemon architecture; **OpenAI Codex** is refining app-server thread settings; **Claude Code** and **DeepSeek TUI** are actively expanding headless APIs and `--bg` background agents.
*   **MCP (Model Context Protocol) Standardization:** The ecosystem is rallying around MCP. **DeepSeek TUI** introduced an MCP-over-WebSocket bridge, **OpenCode** is fixing MCP timeouts, and **Qwen Code** is debugging MCP transport instabilities. Furthermore, **OpenCode** users are actively demanding standard `"mcpServers"` JSON formatting to ensure parity with other tools.
*   **Advanced Memory & State Management:** Semantic memory is a rising priority. **DeepSeek TUI** is implementing a LanceDB-backed vector memory system, while **Gemini CLI** and **Pi** are actively refactoring how auto-memory patches are stored and how `settings.json` state is segregated from dynamic agent context.
*   **Robust Sub-Agent Orchestration:** Users want tiered models (e.g., Opus for planning, Sonnet for execution) and reliable background agents. **Gemini CLI** and **Claude Code** communities are highly focused on fixing sub-agents that silently fail or hang. 

### 4. Differentiation Analysis
*   **Approach to Tooling & Extensions:** **DeepSeek TUI** is overhauling its core architecture to abstract tool calls (moving away from hardcoded binaries), whereas **Pi** focuses on bypassing JIT compilation to achieve sub-100ms extension loading.
*   **Target Audience & Scale:** **OpenAI Codex** and **GitHub Copilot CLI** are heavily entangled in enterprise desktop/IDE ecosystems, bearing the brunt of complex WSL/Windows GUI integration bugs. Conversely, **Qwen Code** and **Claude Code** are leaning heavily into scalable headless infrastructures, prioritizing JSON outputs, OTEL tracing, and CI/CD integration.
*   **Platform Strategy:** **Kimi Code CLI** has a relatively low issue/PR volume, focusing strictly on core Linux/macOS TTY process management. **OpenCode** and **Pi** share a strong focus on cross-platform parity and edge cases (like Windows Defender blocking async I/O or Docker path resolution).

### 5. Community Momentum & Maturity
*   **Rapid Iterators:** **Claude Code**, **Gemini CLI**, **Pi**, and **OpenAI Codex** show massive momentum. Claude Code and Gemini CLI pushed rapid-fire releases today addressing critical observability and security bugs, respectively.
*   **Architectural Pivots:** **Qwen Code** and **DeepSeek TUI** are in heavy development phases, merging fundamental architectural PRs (Daemon modes, LanceDB memory, Tool registries) rather than focusing solely on patch releases.
*   **Maturity Friction:** **GitHub Copilot CLI** is currently experiencing severe regression friction. A recent stable release (`v1.0.49`) has practically broken the tool for a significant portion of Linux/WSL users, indicating maturity challenges in their QA pipeline for diverse terminal environments.

### 6. Trend Signals
*   **Terminal Infrastructure is the Bottleneck:** As AI agents run longer tasks, the underlying terminal infrastructure (PTYs, TUI rendering buffers, alternate screens) is cracking. Glyph corruption, SIGHUP signal handling, and non-blocking I/O are now primary discussion points. Robust process lifecycle management (killing zombie agent processes) is a strict prerequisite for autonomous coding.
*   **Autonomous Cost Control is Mandatory:** Silent billing spikes and model up-tiering (e.g., **Claude Code's** issue with autonomous agents burning Opus budgets) show that dynamic, permission-based execution (YOLO mode) requires strict programmatic cost ceilings and granular usage APIs.
*   **Demise of the "Hardcoded Agent":** The era of AI tools baking in assumptions about `git`, `bash`, or standard Unix tools is ending. Projects like **DeepSeek TUI** are externalizing tools, and **Copilot CLI / NixOS** issues highlight the necessity of dynamic environment resolution. AI CLIs must become agnostic orchestrators rather than rigid scripts.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-05-20 | Source: [github.com/anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking
*Note: Comment counts are currently unavailable (`undefined`) in the dataset. This ranking is based on PR longevity, community reaction, and functional impact.*

1. **[PR #514 — `document-typography`](https://github.com/anthropics/skills/pull/514)** | *Status: OPEN*
   A quality-control skill that prevents common typographic issues in AI-generated documents (orphan word wrap, widow paragraphs, numbering misalignment). Addresses a subtle but universal pain point for document generation. **Created:** 2026-03-04.

2. **[PR #486 — `odt` (OpenDocument)](https://github.com/anthropics/skills/pull/486)** | *Status: OPEN*
   Enables creation, template filling, and parsing of OpenDocument Format files (.odt, .ods) to/from HTML. A major request for open-source office document compatibility. **Created:** 2026-03-01.

3. **[PR #190 — `n8n-builder` & `n8n-debugger`](https://github.com/anthropics/skills/pull/190)** | *Status: OPEN*
   Production-tested community skills for building and debugging n8n workflows from scratch. The PR also includes a `faf-expert` skill for persistent project context. Highly active, with updates as recent as 2026-05-18.

4. **[PR #360 — `appdeploy`](https://github.com/anthropics/skills/pull/360)** | *Status: OPEN*
   Enables Claude to deploy and manage full-stack web apps to public URLs directly via the AppDeploy platform. Represents a strong push toward end-to-end DevOps integration. **Created:** 2026-02-09.

5. **[PR #723 — `testing-patterns`](https://github.com/anthropics/skills/pull/723)** | *Status: OPEN*
   A comprehensive testing skill covering the full stack: philosophy (Testing Trophy), unit testing (AAA pattern), React component testing, integration, and E2E. Addresses a critical need for code quality assurance. **Created:** 2026-03-22.

6. **[PR #210 — Improved `frontend-design`](https://github.com/anthropics/skills/pull/210)** | *Status: OPEN*
   Revises the existing `frontend-design` skill to improve clarity, actionability, and internal coherence. Aims to make every instruction directly executable by Claude. **Created:** 2026-01-05.

7. **[PR #444 — AURELION Skill Suite](https://github.com/anthropics/skills/pull/444)** | *Status: OPEN*
   Introduces four interconnected skills (`aurelion-kernel`, `advisor`, `agent`, `memory`) forming a structured cognitive and memory framework for professional knowledge management. **Created:** 2026-02-21.

8. **[PR #83 — `skill-quality-analyzer` & `skill-security-analyzer`](https://github.com/anthropics/skills/pull/83)** | *Status: OPEN*
   Meta-skills designed to evaluate other skills across five quality dimensions and identify security vulnerabilities. A foundational tool for the ecosystem's maturity. **Created:** 2025-11-06.

---

## 2. Community Demand Trends
Analysis of the top Issues reveals the following anticipated directions:

| Trend | Description | Key Issue |
| :--- | :--- | :--- |
| **Enterprise/Org Sharing** | Urgent need for organization-wide skill libraries and direct sharing links, replacing manual file transfers. | [Issue #228](https://github.com/anthropics/skills/issues/228) *(7 👍)* |
| **Bug-Free Evaluation Pipeline** | The `run_eval.py` script is failing to trigger skills via `claude -p`, requiring a fix to the core validation loop. | [Issue #556](https://github.com/anthropics/skills/issues/556) *(6 👍)* |
| **Security & Trust Boundaries** | Community skills operating under the `anthropic/` namespace are causing trust boundary abuse; strict namespace isolation is requested. | [Issue #492](https://github.com/anthropics/skills/issues/492) *(2 👍)* |
| **Deduplication & Plugin Management** | Overlapping skills between `document-skills` and `example-skills` plugins are wasting context window tokens. | [Issue #189](https://github.com/anthropics/skills/issues/189) *(8 👍)* |
| **MCP Protocol Integration** | Demand for Skills to be exposed as standardized Model Context Protocol (MCP) tools for broader API interoperability. | [Issue #16](https://github.com/anthropics/skills/issues/16) |
| **Enterprise SSO Compatibility** | Tools requiring `ANTHROPIC_API_KEY` break for SSO users; authentication needs to support enterprise licenses. | [Issue #532](https://github.com/anthropics/skills/issues/532) *(Closed)* |

---

## 3. High-Potential Pending Skills
These PRs are actively updated, address clear demands, and show strong potential for imminent merging:

*   **[PR #541 — `fix(docx)`: Prevent tracked change w:id collision](https://github.com/anthropics/skills/pull/541)**
    *Fixes document corruption in the DOCX skill by resolving OOXML shared ID space conflicts. High technical precision, addresses a critical edge case.*
*   **[PR #568 — `servicenow` Platform Skill](https://github.com/anthropics/skills/pull/568)**
    *A comprehensive enterprise skill covering ITSM, ITOM, SecOps, HRSD, and IntegrationHub. Taps directly into the enterprise market.*
*   **[PR #806 — `sensory` (macOS AppleScript Automation)](https://github.com/anthropics/skills/pull/806)**
    *Replaces screenshot-based computer use with native `osascript` automation for macOS, featuring a two-tier permission system.*
*   **[PR #509 — `docs: add CONTRIBUTING.md`](https://github.com/anthropics/skills/pull/509)**
    *Directly addresses the repo's low community health score (25%) by adding a much-needed contributor's guide. Essential for open-source project health.*

---

## 4. Skills Ecosystem Insight
The community is heavily concentrated on **enterprise reliability and context efficiency**—specifically, eliminating duplicate skills that waste context window tokens, establishing secure trust boundaries for third-party skills, and building robust document processing pipelines for professional environments.

---

# Claude Code Community Digest — 2026-05-20

## 1. Today's Highlights

Two rapid-fire releases (v2.1.144 and v2.1.145) landed within 24 hours, delivering highly requested background-agent observability features: JSON session listing for scripting integrations, proper OTEL trace parenting for subagents, and `/resume` support for `--bg` sessions. On the issue tracker, a long-standing TUI character-corruption bug on macOS VS Code continues to dominate discussion, while several new tool-level bugs around file caching and worktree path resolution were reported and are gaining attention.

## 2. Releases

### [v2.1.145](https://github.com/anthropics/claude-code/releases/tag/v2.1.145)
- **`claude agents --json`**: Machine-readable listing of live Claude sessions — enables tmux-resurrect scripts, custom status bars, and session picker tooling.
- **OTEL trace parenting fix**: `agent_id` and `parent_agent_id` attributes added to `claude_code.tool` spans; background subagent spans now correctly nest under their parent traces.

### [v2.1.144](https://github.com/anthropics/claude-code/releases/tag/v2.1.144)
- **`/resume` for background sessions**: Sessions launched via `claude --bg` or agent view now surface in the resume picker, tagged with `bg`.
- **Elapsed duration in notifications**: Background subagent completion alerts now show wall-clock time (e.g., "Agent completed · 3h 2m 5s").
- **`/plugin` improvements**: Partial notes indicate continued expansion of the plugin subsystem.

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#59163 — TUI character corruption after long sessions (macOS/VS Code)](https://github.com/anthropics/claude-code/issues/59163) | 20 comments, 15 👍. The top bug. ANSI colors and layout are preserved but glyphs become garbled — points to a terminal rendering buffer issue that degrades every long session. |
| 2 | [#56913 — Tiered Opus brains + Sonnet workers for autonomous agents](https://github.com/anthropics/claude-code/issues/56913) | 17 comments. A popular vision for multi-model orchestration: cheap workers for execution, expensive Opus for planning. Reflects growing "Claude as system brain" use-cases. |
| 3 | [#59509 — Gibberish rendering in terminal (macOS)](https://github.com/anthropics/claude-code/issues/59509) | 14 comments, 5 👍. Likely duplicate of #59163, but the combined signal confirms TUI rendering is a top pain point for Mac users. |
| 4 | [#58450 — Autonomous agent burned 80% weekly usage billing Opus instead of Sonnet](https://github.com/anthropics/claude-code/issues/58450) | 6 comments. Cost-control nightmare: 10 agent windows silently billed at Opus rates. Directly ties into the tiered-model request above. |
| 5 | [#59505 — Auto mode suppresses AskUserQuestion in skills](https://github.com/anthropics/claude-code/issues/59505) | 6 comments, 11 👍. Has a repro. A system reminder injected by auto mode prevents skills from prompting users, breaking interactive workflows silently. |
| 6 | [#60684 — Read tool serves stale cached snapshot after external edits](https://github.com/anthropics/claude-code/issues/60684) | 2 comments, has repro. Files edited outside Claude Code return "file unchanged" — a cache invalidation miss that can cause agents to operate on outdated code. |
| 7 | [#60679 — Write/Edit strip worktree path segment](https://github.com/anthropics/claude-code/issues/60679) | 2 comments, has repro. Tool writes go to the parent repo instead of the git worktree, risking corruption in multi-worktree setups. |
| 8 | [#60674 — Expose account usage limits in CLI](https://github.com/anthropics/claude-code/issues/60674) | 2 comments. Requests session/weekly usage % in CLI logs — a natural companion to the cost-control concerns in #58450. |
| 9 | [#47327 — Cowork tab disabled on Windows 11](https://github.com/anthropics/claude-code/issues/47327) | 10 comments. Ongoing since March 2026; the "yukonSilver" cowork protocol remains unsupported on Windows, leaving a major platform gap. |
| 10 | [#60701 — Arabic with diacritics renders with gaps](https://github.com/anthropics/claude-code/issues/60701) | 1 comment, has repro. `Bun.stringWidth` treats combining marks as width 1, breaking Arabic contextual joins. Highlights i18n terminal rendering challenges. |

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | [#60659 — Preserve labels when auto-closing duplicates](https://github.com/anthropics/claude-code/pull/60659) | Fixes #60656 where the duplicate auto-close workflow wiped all existing labels. Uses the additive labels endpoint instead of replacement. |
| 2 | [#47514 — Skip doc files for substring security checks](https://github.com/anthropics/claude-code/pull/47514) | Prevents false-positive security heuristic matches on documentation/plaintext files while preserving path-based workflow checks. |
| 3 | [#48272 — Enrich release titles with changelog summaries](https://github.com/anthropics/claude-code/pull/48272) | Long-running contribution to improve release feed (`feed.xml`) with `<p>• ...</p>` summaries. Upstream `main` now ships the proposed format — PR may be close to merge. |
| 4 | [#37631 — Spinner customization plugin](https://github.com/anthropics/claude-code/pull/37631) | Adds `/spinner-mode` and `/spinner-preview` commands for user-configurable spinner verb styles. Follows established plugin patterns. |
| 5 | [#60427 — Standard GitHub capitalization in README](https://github.com/anthropics/claude-code/pull/60427) | Documentation polish: aligns product name casing with GitHub conventions. |

## 5. Feature Request Trends

1. **Multi-model agent orchestration**: Users want to assign Opus for planning and Sonnet for execution within the same autonomous pipeline ([#56913](https://github.com/anthropics/claude-code/issues/56913)), with persistent state across agent lifecycles.
2. **Cost visibility and controls**: Exposing usage limits in the CLI ([#60674](https://github.com/anthropics/claude-code/issues/60674)) and preventing silent model up-tiering ([#58450](https://github.com/anthropics/claude-code/issues/58450)) are recurring themes.
3. **Remote control and scripting hooks**: In-session toggles for remote control on running sessions ([#60699](https://github.com/anthropics/claude-code/issues/60699)) and OSC 0 terminal title updates ([#60638](https://github.com/anthropics/claude-code/issues/60638)) indicate demand for Claude Code as a headless/scriptable tool.
4. **Cross-platform parity**: Windows users continue to request feature parity for Cowork ([#47327](https://github.com/anthropics/claude-code/issues/47327)), PowerShell environment propagation ([#60697](https://github.com/anthropics/claude-code/issues/60697)), and correct keybinding display ([#48115](https://github.com/anthropics/claude-code/issues/48115)).

## 6. Developer Pain Points

- **TUI rendering instability**: The macOS + VS Code integrated terminal glyph corruption ([#59163](https://github.com/anthropics/claude-code/issues/59163), [#59509](https://github.com/anthropics/claude-code/issues/59509)) is the single most-discussed bug. It degrades reliability for power users running long sessions.
- **Cost unpredictability in autonomous mode**: Agents silently billing at Opus rates ([#58450](https://github.com/anthropics/claude-code/issues/58450)) without visible usage counters erodes trust for users experimenting with background agents.
- **Tool cache and path bugs**: Stale file reads ([#60684](https://github.com/anthropics/claude-code/issues/60684)) and worktree path stripping ([#60679](https://github.com/anthropics/claude-code/issues/60679)) are the kind of silent correctness bugs that cause agents to produce plausible but wrong results — especially dangerous in automated workflows.
- **Skill system edge cases**: Infinite recursion in forked skills ([#55592](https://github.com/anthropics/claude-code/issues/55592)) and auto-mode suppressing interactive prompts ([#59505](https://github.com/anthropics/claude-code/issues/59505)) suggest the skill harness needs stronger re-entry guards and mode-aware system prompts.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-20

## 1. Today's Highlights
The Codex engineering team pushed a massive batch of internal pull requests today, focusing heavily on a new "override config" foundation, improving the thread settings APIs, and bolstering remote connection reliability. Meanwhile, the recent CLI `v0.131` release is causing friction in the community, with multiple high-comment issues pointing to regressions in CWD resolution, Homebrew Linux releases lagging behind, and the `/review` tool failing to detect basic Git data. Windows and WSL integrations continue to be a major source of user-reported bugs across both the CLI and Desktop app.

## 2. Releases
*No new official releases were published in the last 24 hours.*

## 3. Hot Issues

1. **v0.131 Regression: Codex starts in the wrong folder** [#23367](https://github.com/openai/codex/issues/23367)
   *Why it matters:* A critical regression in `v0.131` causes the CLI to start in the incorrect directory, completely breaking workspace context.
   *Community reaction:* 6 thumbs up and 9 comments; users are actively seeking workarounds or downgrading.
2. **`/review` does not see branches or commits in v0.131** [#23446](https://github.com/openai/codex/issues/23446)
   *Why it matters:* The core code-review feature is completely broken after updating to `0.131`.
   *Community reaction:* 9 comments; highly disruptive for teams relying on Codex for PR reviews.
3. **Windows Codex + WSL UNC path breaks terminal and leaks config** [#18506](https://github.com/openai/codex/issues/18506)
   *Why it matters:* Using WSL via UNC paths causes the integrated terminal to fail and leaks Windows config into the Linux environment.
   *Community reaction:* 12 thumbs up and 9 comments; highlighting deep architectural issues with the Windows/WSL bridge.
4. **Low cache hit rate when Codex integrates with GPT-5.5** [#20301](https://github.com/openai/codex/issues/20301)
   *Why it matters:* Users are experiencing poor performance and high costs due to low prompt cache hit rates specifically with GPT-5.5.
   *Community reaction:* 7 thumbs up and 14 comments, indicating a widespread issue with the new model routing.
5. **GPT-5.5 `compact_remote` reliably fails on Azure at 244k tokens** [#21569](https://github.com/openai/codex/issues/21569)
   *Why it matters:* Enterprise users on Azure OpenAI endpoints are hitting hard stalls during context compaction.
   *Community reaction:* 9 comments; users confirmed via A/B testing that it is an endpoint-agnostic API error.
6. **Inconsistent PreToolUse hook coverage** [#20204](https://github.com/openai/codex/issues/20204)
   *Why it matters:* Most tool handlers do not emit hook events, making it nearly impossible to build reliable custom CI/CD or security guardrails.
   *Community reaction:* 9 comments; plugin and tooling developers are heavily impacted.
7. **Windows Codex cannot start when WSL mode is enabled** [#14461](https://github.com/openai/codex/issues/14461)
   *Why it matters:* The desktop app outright crashes when `terminalShell=wsl` is configured.
   *Community reaction:* 10 comments; a blocking issue for Windows developers using WSL.
8. **iOS/macOS Remote Control broken after desktop update** [#22773](https://github.com/openai/codex/issues/22773)
   *Why it matters:* The highly anticipated mobile remote-control feature is returning 403 errors and offline states following a host update.
   *Community reaction:* 8 comments; users report that the mobile app cannot maintain a stable plan state with the desktop host.
9. **Codex Desktop renderer breaks on Rust-style `::` paths** [#23506](https://github.com/openai/codex/issues/23506)
   *Why it matters:* A Markdown parsing bug is causing visual breakage when displaying inline code containing `::`.
   *Community reaction:* 3 thumbs up; an annoying UI bug for Rust and C++ developers.
10. **macOS flags Codex as malware during active session** [#23195](https://github.com/openai/codex/issues/23195)
    *Why it matters:* Apple Gatekeeper is suddenly terminating the app, suspecting malicious behavior.
    *Community reaction:* 3 comments; caused panic among users fearing corrupted installations.

## 4. Key PR Progress

1. **config: add override config foundation** [#23547](https://github.com/openai/codex/pull/23547)
   *What it does:* Introduces a higher-precedence local override layer (`.codex/config.override.toml`) so developers can disable inherited MCP servers without modifying checked-in repo config.
2. **Fix: TUI starting in wrong CWD** [#23538](https://github.com/openai/codex/pull/23538)
   *What it does:* Fixes the Issue #23367 regression by ensuring implicit local socket reuse isn't treated as an explicit remote workspace session that drops the invoking CWD.
3. **Sync TUI thread settings through app server** [#23507](https://github.com/openai/codex/pull/23507)
   *What it does:* Builds on the new `thread/settings/update` API to sync thread-scoped settings (model, reasoning effort, permissions) across app-server clients.
4. **core: reload override config at runtime** [#23548](https://github.com/openai/codex/pull/23548)
   *What it does:* Ensures long-running sessions dynamically pick up changes to the new override config files without requiring a restart.
5. **Prevent oversized turns from poisoning thread history** [#23491](https://github.com/openai/codex/pull/23491)
   *What it does:* Blocks very large user inputs from being written to durable thread history if they exceed context limits, preventing irrecoverable compaction failures.
6. **feat: support local refs and defs in tool input schemas** [#23357](https://github.com/openai/codex/pull/23357)
   *What it does:* Fixes a JSON Schema lowering bug where `$ref`-only schema objects were discarded, improving MCP tool compatibility.
7. **Add minimal exec-server websocket reconnect** [#23562](https://github.com/openai/codex/pull/23562)
   *What it does:* Introduces automatic websocket-only reconnection for the exec-server to improve remote connection resilience.
8. **feat(permissions): support inheritable permissions profiles** [#22270](https://github.com/openai/codex/pull/22270)
   *What it does:* Enables permission profiles to inherit from a shared base, reducing config duplication for enterprise sandbox policies.
9. **Preserve raw code-mode exec output by default** [#23564](https://github.com/openai/codex/pull/23564)
   *What it does:* Skips default truncation for nested `unified_exec` calls in code mode, allowing AI scripts to parse full command outputs successfully.
10. **fix: serialize unix app-server startup** [#23516](https://github.com/openai/codex/pull/23516)
    *What it does:* Prevents race conditions during Unix-socket app-server startup that were causing SQLite state initialization corruption.

## 5. Feature Request Trends

*   **Advanced SSH Authentication for Mobile:** Users are overwhelmingly requesting key-based authentication (Identity Files) for the iOS SSH host connection feature, as password-only access is a security friction point ([#23543](https://github.com/openai/codex/issues/23543), [#22857](https://github.com/openai/codex/issues/22857)).
*   **First-Class Native Installers:** The community wants a standalone installer for native Codex binaries to bypass package managers like `npm` or `Homebrew` ([#20595](https://github.com/openai/codex/issues/20595)).
*   **GPU Access within Sandbox:** Developers want the ability to run GPU-accelerated apps inside the `bwrap` Linux sandbox, requesting `proc` and `dev` mounts ([#23525](https://github.com/openai/codex/issues/23525)).
*   **Hook Trust Inheritance:** Requests for non-managed hook trust to be reusable across Git worktrees to avoid repeated approval prompts ([#23259](https://github.com/openai/codex/issues/23259)).

## 6. Developer Pain Points

*   **Unstable v0.131 Release:** The latest CLI release has introduced critical regressions, notably starting in the wrong folder ([#23367](https://github.com/openai/codex/issues/23367)) and broken `git` integrations breaking `/review` ([#23446](https://github.com/openai/codex/issues/23446)).
*   **The Windows/WSL Desktop Experience:** The Codex Desktop app remains highly unstable for Windows users leveraging WSL. UNC path leaks, broken terminal launches, and missing notifications are driving enterprise users away from the native app ([#18506](https://github.com/openai/codex/issues/18506), [#14461](https://github.com/openai/codex/issues/14461), [#8929](https://github.com/openai/codex/issues/8929)).
*   **Homebrew Distribution Lag:** Linux users are frequently stranded on older versions (e.g., `0.130.0`) because the Homebrew/Linuxbrew formula lags behind official GitHub releases ([#23495](https://github.com/openai/codex/issues/23495), [#23544](https://github.com/openai/codex/issues/23544)).
*   **Cross-Platform UI Jitter:** The Codex Desktop app suffers from persistent rendering bugs, including text flickering during streaming on macOS ([#22860](https://github.com/openai/codex/issues/22860)) and general vertical jitter while reading results ([#23245](https://github.com/openai/codex/issues/23245)).
*   **"Computer Use" Setup Reliability:** The macOS "Computer Use" plugin routinely shows as "unavailable" despite files existing locally, often breaking entirely after system or multi-user updates ([#20211](https://github.com/openai/codex/issues/20211), [#18803](https://github.com/openai/codex/issues/18803)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-20

## 1. Today's Highlights
A new preview version, **v0.43.0-preview.1**, was released to patch a critical security fix into the A2A (Agent-to-Agent) server. The community remains highly active, with significant focus on subagent reliability—including persistent hangs, false success states, and ignored configurations. Additionally, memory system improvements and terminal handling fixes dominate the latest pull requests, indicating a concentrated effort by maintainers to harden core infrastructure.

## 2. Releases
- **[v0.43.0-preview.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.43.0-preview.1)**: Cherry-picks a critical patch (`85566a7`) ensuring the A2A server securely loads default policies (including read-only policies) in parity with the standard CLI.

## 3. Hot Issues
1. **[Tracking: 429 / Capacity Issues (#24937)](https://github.com/google-gemini/gemini-cli/issues/24937)**: A major ongoing tracking issue with 122 comments. Users are frequently hitting rate limits, underscoring the need for better client-side retry logic and capacity management.
2. **[Generalist agent hangs (#21409)](https://github.com/google-gemini/gemini-cli/issues/21409)**: A critical P1 bug where deferring to the generalist agent causes infinite hangs (even for simple tasks). Highly upvoted (👍 8) as a major blocker for agent workflows.
3. **[Subagent recovery hides interruption (#22323)](https://github.com/google-gemini/gemini-cli/issues/22323)**: Subagents hitting `MAX_TURNS` incorrectly report `status: "success"`, misleading the primary agent and hiding the fact that the task was interrupted.
4. **[Shell command execution gets stuck (#25166)](https://github.com/google-gemini/gemini-cli/issues/25166)**: Gemini falsely reports active CLI commands as "Awaiting user input" after they finish, stalling the agent's progression (👍 3).
5. **[Gemini does not use skills and sub-agents enough (#21968)](https://github.com/google-gemini/gemini-cli/issues/21968)**: Users report that the model ignores custom skills (e.g., gradle, git) unless explicitly instructed, limiting the utility of custom extensions.
6. **[Browser subagent fails in Wayland (#21983)](https://github.com/google-gemini/gemini-cli/issues/21983)**: The browser agent fails to execute properly in Wayland-based Linux display servers.
7. **[Stop Auto Memory from retrying low-signal sessions (#26522)](https://github.com/google-gemini/gemini-cli/issues/26522)**: Highlights a flaw where the auto-memory extractor indefinitely re-processes sessions it deems "low-signal" because it doesn't mark them as processed.
8. **[Surface or quarantine invalid Auto Memory inbox patches (#26523)](https://github.com/google-gemini/gemini-cli/issues/26523)**: Invalid memory patches are silently skipped, leading to an accumulation of unhandled `.patch` files in the inbox.
9. **[Encounters 400 error with > 128 tools (#24246)](https://github.com/google-gemini/gemini-cli/issues/24246)**: Users heavily extending Gemini via MCP encounter API 400 errors due to poor scope limiting of enabled tools.
10. **[(Sub)agents running without permission since v0.33.0 (#22093)](https://github.com/google-gemini/gemini-cli/issues/22093)**: Agents unexpectedly spawn even when explicitly disabled in configurations, pointing to a settings override regression.

## 4. Key PR Progress
1. **[fix(a2a-server): Implement default policy loading for parity with CLI (#27073)](https://github.com/google-gemini/gemini-cli/pull/27073)**: **Merged (via v0.43.0-preview.1)**. Resolves a security gap where the A2A server wasn't loading default read-only and safety policies.
2. **[fix(core): prevent PTY memory leak (#27154)](https://github.com/google-gemini/gemini-cli/pull/27154)**: Fixes a critical memory and file descriptor leak where PTY entries were never garbage collected due to an improperly placed asynchronous `.then()` callback.
3. **[fix(core): prevent SIGHUP kills in PTY environments (#27267)](https://github.com/google-gemini/gemini-cli/pull/27267)**: Resolves an issue where users on WSL2, Kitty, and Alacritty experienced instant shell command termination (`Command terminated by signal: 1`) due to aggressive `SIGHUP` signals on detached processes.
4. **[fix(cli): harmonize empty session lifecycle (#27287)](https://github.com/google-gemini/gemini-cli/pull/27287)**: Prevents the CLI from falsely advertising metadata-only "empty" sessions for resumption or prematurely deleting them.
5. **[Feat/a2a expose usage metadata (#27288)](https://github.com/google-gemini/gemini-cli/pull/27288)**: Implements `usageMetadata` extraction in A2A server streaming responses, allowing better token/cost tracking in agent-to-agent workflows.
6. **[fix: robust ripgrep path resolution (#27253)](https://github.com/google-gemini/gemini-cli/pull/27253)**: Fixes regressions where the CLI failed to find the `ripgrep` binary, forcing slower fallback search methods in local development and hermetic environments.
7. **[fix(devtools): bundle devtools package (#27250)](https://github.com/google-gemini/gemini-cli/pull/27250)**: Transitions `@google/gemini-cli-devtools` to a bundled dependency, resolving `ERR_MODULE_NOT_FOUND` errors during execution.
8. **[fix(core): strip $schema from MCP tool parameters (#21963)](https://github.com/google-gemini/gemini-cli/pull/21963)**: Fixes an intermittent API failure by removing `$schema` properties from MCP tool JSON schemas to satisfy strict Gemini API function declarations.
9. **[fix(ui): strip trailing punctuation from URLs (#25098)](https://github.com/google-gemini/gemini-cli/pull/25098)**: Fixes inline markdown parsing where trailing punctuation (e.g., `。`, `!`, `.`) broke URL clickability in the terminal.
10. **[fix(ide/process-utils): spawn powershell.exe with -NoProfile (#27241)](https://github.com/google-gemini/gemini-cli/pull/27241)**: Standardizes Windows IDE process probing by adding `-NoProfile -NonInteractive` to prevent profile load delays and side-effects.

## 5. Feature Request Trends
- **AST-Aware Code Analysis**: Strong interest in integrating AST-aware CLI tools (like `tilth`, `glyph`, or AST-grep) for precise method reads and codebase mapping ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)) to reduce token noise and improve code navigation.
- **Improved Sub-agent Orchestration**: Users want the model to autonomously utilize background agents and custom skills more effectively, rather than relying solely on the main agent or explicit prompting ([#22741](https://github.com/google-gemini/gemini-cli/issues/22741), [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)).
- **Agent Self-Awareness**: Requests for the agent to intrinsically understand its own CLI flags, hotkeys, and capabilities so it can better guide users on how to configure and run it ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).

## 6. Developer Pain Points
- **Sub-agent Reliability**: A recurring theme is that sub-agents (generalist, browser, codebase investigator) are brittle. They hang indefinitely, mask failures as "successes," and fail to respect user settings ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)).
- **Terminal/Environment Compatibility**: Developers face constant headaches with terminal UI flickering, buffer corruption after exiting editors, and process signals (like SIGHUP) killing execution in modern terminal emulators ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166), [#21924](https://github.com/google-gemini/gemini-cli/issues/21924), [#16248](https://github.com/google-gemini/gemini-cli/issues/16248)).
- **Aggressive and Destructive Defaults**: Users are frustrated by the model executing destructive shell commands (e.g., `git reset --force`) or triggering agents/plugins that have been explicitly disabled in `settings.json` ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672), [#22093](https://github.com/google-gemini/gemini-cli/issues/22093)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for 2026-05-20.

### 1. Today's Highlights
Version `1.0.49` has triggered a storm of community feedback following its release, with users reporting significant regressions across WSL, Linux, and Windows platforms. Key fixes in this release—such as proper CJK/emoji cursor positioning and injecting `postToolUse` context as system messages—are currently being overshadowed by broken editor inputs, startup blocking, and broken Bash tooling. A pre-release (`v1.0.51-1`) is now available, though its changelog remains unpublished.

### 2. Releases
*   **[v1.0.49](https://github.com/github/copilot-cli/releases/tag/v1.0.49)** (Released 2026-05-18)
    *   **Hook Context Fix:** The `postToolUse` hook's `additionalContext` is now correctly injected as a system message rather than being silently discarded.
    *   **Input Rendering:** Resolved a bug where mouse clicks in the prompt incorrectly positioned the cursor when the input contained wide characters (CJK, emoji).
    *   **New Feature:** Added the `/chronicle search` subcommand to search all session content.
*   **[v1.0.51-1](https://github.com/github/copilot-cli/releases/tag/v1.0.51-1)** (Pre-release)

### 3. Hot Issues
1.  **[#3385](https://github.com/github/copilot-cli/issues/3385) [Bug] Can't running copilot cli 1.0.49 on wsl after upgrade:** The CLI gets completely stuck on WSL after upgrading to 1.0.49. This has garnered 6 thumbs-up and 8 comments, highlighting a critical platform-specific regression.
2.  **[#3401](https://github.com/github/copilot-cli/issues/3401) [Bug] Ctrl-G editor (vim) drops ~50% of keystrokes in INSERT mode:** A severe input bug affecting the external editor integration in Linux/tmux environments. Users report half of their keystrokes being silently dropped.
3.  **[#1148](https://github.com/github/copilot-cli/issues/1148) [Bug] Copilot-cli changes all files it touches to have CRLF line endings:** A highly frustrating, long-standing bug for Windows users where the CLI silently rewrites LF files to CRLF, ruining git diffs and breaking cross-platform scripts.
4.  **[#3395](https://github.com/github/copilot-cli/issues/3395) [Bug] Copy stops working on 1.0.49:** A regression in v1.0.49 that completely breaks the clipboard functionality for Linux users.
5.  **[#3392](https://github.com/github/copilot-cli/issues/3392) [Bug] Bash tool breaks on NixOS with version >=1.0.49:** NixOS users are hitting a `Failed to start bash process` error, likely due to hardcoded bash paths introduced in the latest release.
6.  **[#3386](https://github.com/github/copilot-cli/issues/3386) [Bug] Input box no longer auto-expands height:** A UI regression in Windows where the prompt input box is stuck at a fixed size, making it impossible to view or select longer prompts.
7.  **[#3384](https://github.com/github/copilot-cli/issues/3384) [Bug] Ctrl+G editor broken in v1.0.49 — every keypress requires pressing twice:** Another broken external editor bug in v1.0.49 affecting keyboard passthrough (PTY), specifically making `nano` unusable.
8.  **[#3390](https://github.com/github/copilot-cli/issues/3390) [Bug] 1.0.49: submitted user messages render with a gray background block:** A visual rendering regression in the terminal scrollback that hinders readability.
9.  **[#1322](https://github.com/github/copilot-cli/issues/1322) [Feature Request] Show subagent tool call details:** Highly requested (14 👍) feature to bring CLI agent visibility up to par with VS Code, allowing users to actually see what subagents are doing behind the scenes.
10. **[#3181](https://github.com/github/copilot-cli/issues/3181) [Discussion] Remove automatic co-author to Copilot CLI commits:** A philosophical pushback from developers requesting an option to disable AI co-authorship tagging in git commits.

### 4. Key PR Progress
*Only 3 active PRs were updated in the last 24 hours.*
1.  **[#1968](https://github.com/github/copilot-cli/pull/1968) install: retry without token when authenticated requests fail:** Improves the CLI installation flow for enterprise users by gracefully retrying downloads without a token if SAML/SSO enforcement blocks an authenticated request.
2.  **[#3400](https://github.com/github/copilot-cli/pull/3400) Implement transaction decoding and TxID calculation:** A community contribution adding hex string transaction parsing and legacy serialization (appears to be crypto/blockchain related).
3.  **[#804](https://github.com/github/copilot-cli/pull/804) Add initial devcontainer configuration:** Reopened/updated PR to streamline local development environments using VS Code Dev Containers.

### 5. Feature Request Trends
*   **Telemetry Control:** Users are increasingly requesting the ability to toggle off usage telemetry, pushing for parity with other GitHub extensions ([#3387](https://github.com/github/copilot-cli/issues/3387)).
*   **Advanced Model Selection:** Heavy demand for expanding model support beyond the defaults, specifically requesting GPT-4o ([#2377](https://github.com/github/copilot-cli/issues/2377)) and Claude Opus 4.6 ([#3381](https://github.com/github/copilot-cli/issues/3381)) for complex engineering tasks.
*   **Sub-agent Customization:** Developers want fine-grained control over sub-agents, specifically the ability to assign models via frontmatter and bypass cost-multiplier guards ([#2758](https://github.com/github/copilot-cli/issues/2758)).
*   **CLI/Scripting Output Parsing:** A rising need for clean, non-interactive outputs. Users want UI chrome (spinners, colors) shifted to `stderr` to allow pure LLM output to be piped to downstream tools ([#3397](https://github.com/github/copilot-cli/issues/3397)).
*   **Session Management Enhancements:** Users are looking for better session state handling, such as deterministic session resumption ([#3377](https://github.com/github/copilot-cli/issues/3377)) and remote-toggle reliability ([#3358](https://github.com/github/copilot-cli/issues/3358)).

### 6. Developer Pain Points
*   **Severe v1.0.49 Regressions:** The most prominent frustration right now is the sheer volume of bugs introduced in the latest version. WSL users are experiencing 2-minute startup hangs ([#3408](https://github.com/github/copilot-cli/issues/3408)), while Linux/Windows users are dealing with broken external editors (`Ctrl+G`) and unresponsive keystrokes.
*   **Cross-Platform Environment Failures:** The CLI continues to struggle with alternative environments. NixOS path resolution for Bash is broken ([#3392](https://github.com/github/copilot-cli/issues/3392)), Windows Batch scripts aren't supported for `$EDITOR` ([#1882](https://github.com/github/copilot-cli/issues/1882)), and users on Android Termux remain completely unsupported ([#488](https://github.com/github/copilot-cli/issues/488)).
*   **Pacing and Agent Visibility:** When executing multi-step tasks, developers find it frustrating that sub-agents run indefinitely without the ability to halt them, coupled with a lack of visibility into what tools the sub-agents are actually calling ([#1322](https://github.com/github/copilot-cli/issues/1322), [#3391](https://github.com/github/copilot-cli/issues/3391)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-20

## 1. Today's Highlights
The Kimi Code CLI community saw a strong focus on system stability and process management today. While no new official releases were shipped, three significant Pull Requests were introduced or updated—two of which specifically target TTY hangs and subprocess orphaning during timeouts or cancellations. Developer feedback also highlighted lingering pain points with the VS Code extension, signaling that IDE integration stability remains a top priority.

## 2. Releases
No new releases were recorded in the last 24 hours. The public release remains at version **0.5.10**.

## 3. Hot Issues
1. **[#2326 [bug] VS code Kimi Freezes](https://github.com/MoonshotAI/kimi-cli/issues/2326)**  
   Users on Ubuntu running v0.5.10 report frequent freezing when using the VS Code extension. This is a critical usability blocker that directly impacts day-to-day adoption. No maintainer response yet. *(0 comments, 0 👍)*

2. **[#2325 [enhancement] kimi-code /btw command not available in /web mode](https://github.com/MoonshotAI/kimi-cli/issues/2325)**  
   A feature request asking for the `/btw` command to be enabled in `/web` mode. Indicates users are actively mixing CLI and web interfaces and expect feature parity. *(0 comments, 0 👍)*

## 4. Key PR Progress
1. **[#2327 fix: terminate shell process trees on timeout](https://github.com/MoonshotAI/kimi-cli/pull/2327)** *(by he-yufeng)*  
   Runs foreground shell commands in their own local process group/session and terminates the entire process tree on timeout or cancellation. Fixes #2310. A significant reliability improvement that prevents zombie/orphan processes from lingering after timeouts. *(Open)*

2. **[#1985 fix(term, app): prevent TTY hang on exit and close MCP connections during shutdown](https://github.com/MoonshotAI/kimi-cli/pull/1985)** *(by thecannabisapp)*  
   Adds non-blocking I/O to `_cursor_position_unix()` to prevent `os.read()` from entering an uninterruptible system call block. Also ensures MCP connections are closed during shutdown. Fixes #1984. Originally opened in April, this PR received updates today, suggesting continued progress. *(Open)*

3. **[#2324 fix(web): handle BrokenPipeError in SessionProcess.send_message](https://github.com/MoonshotAI/kimi-cli/pull/2324)** *(by Ricardo-M-L)*  
   Guards against `BrokenPipeError` when `SessionProcess.send_message` writes to `process.stdin` after a subprocess has exited. A targeted but important fix for web-mode reliability. *(Open)*

## 5. Feature Request Trends
- **Feature Parity Across Modes:** Users expect commands like `/btw` to be available consistently whether they are using the CLI directly or operating in `/web` mode. Smoothing over mode-specific differences is a growing expectation.
- **IDE Integration Stability:** Although framed as bugs rather than feature requests, the repeated mentions of VS Code freezing point to a desire for a more resilient, non-blocking extension experience.

## 6. Developer Pain Points
- **VS Code Extension Freezing:** The most prominent complaint today involves the VS Code extension becoming unresponsive (Issue #2326). This remains unacknowledged and unresolved, creating frustration for IDE-centric developers.
- **TTY and Process Lifecycle Management:** Two of today's three PRs address edge cases where TTY hangs or orphaned processes remain after exit/timeout/cancellation. These systemic reliability issues suggest that subprocess lifecycle management is a recurring friction area for the community.
- **Web-Mode Robustness:** `BrokenPipeError` handling (PR #2324) and missing commands in `/web` mode (Issue #2325) indicate the web backend still needs hardening to match the reliability of the local CLI experience.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-20

Here is your daily technical summary of activity across the `anomalyco/opencode` repository.

## 1. Today's Highlights
The OpenCode repository experienced high issue traffic, with users identifying significant regression bugs in recent versions (including broken Bun installations and headless API option forwarding). In the background, prolific contributor `kitlangton` merged a series of crucial test infrastructure refactorings, drastically reducing CI times. The community also showed strong momentum toward standardizing tool configurations and improving billing/security guardrails.

## 2. Releases
**No new releases** were published in the last 24 hours. The last tagged version remains `v1.15.5`.

## 3. Hot Issues

*   **[BUG] v1.15.1+ Breaks Bun Installs** ([#27906](https://github.com/anomalyco/opencode/issues/27906))
    *   *Why it matters:* Recent versions require postinstall lifecycle scripts, which Bun restricts by default for global packages. This breaks workflows for developers using Bun as their primary package manager.
    *   *Community Reaction:* 6 👍s; active discussion on alternative package distribution methods.
*   **[BUG] Keypress "p" not registering (v1.14.41+)** ([#28026](https://github.com/anomalyco/opencode/issues/28026))
    *   *Why it matters:* A bizarre regression where the `p` key must be pressed twice to register after chat content is added. It heavily impacts typing flow and is reproducible across environments.
    *   *Community Reaction:* 3 👍s; 13 comments confirming the issue across different terminal emulators.
*   **[FEATURE]: Config option to show thinking blocks by default** ([#28322](https://github.com/anomalyco/opencode/issues/28322))
    *   *Why it matters:* Advanced users want to see model reasoning collapsed by default to save space, but power users want persistent visibility into chain-of-thought without manual clicks.
    *   *Community Reaction:* Instantly sparked discussion with 5 comments on the best UX approach for TUI config.
*   **[FEATURE]: Add native session goals with `/goal`** ([#27167](https://github.com/anomalyco/opencode/issues/27167))
    *   *Why it matters:* Users want persistent lifecycle tracking for long-context sessions. This proposes a structured way to keep agents aligned with overarching development goals.
    *   *Community Reaction:* 16 👍s; highly requested enhancement to custom slash commands.
*   **Queued prompts can start before active response finishes** ([#28375](https://github.com/anomalyco/opencode/issues/28375))
    *   *Why it matters:* A race condition breaking turn ordering. If users submit a prompt while the AI is generating, the new prompt can hijack the active loop, breaking session context.
    *   *Community Reaction:* 2 comments; closed after quick triage, likely addressed in internal patching.
*   **Model `options` not forwarded to API in headless mode** ([#27361](https://github.com/anomalyco/opencode/issues/27361))
    *   *Why it matters:* When using `opencode run --format json` with `@ai-sdk/openai-compatible`, model-specific parameters (like `reasoning.effort`) are silently dropped.
    *   *Community Reaction:* 2 👍s; a critical fix needed for headless automation pipelines.
*   **Winget installation option for Windows** ([#5121](https://github.com/anomalyco/opencode/issues/5121))
    *   *Why it matters:* The Windows package is currently unowned and out of sync with the latest releases.
    *   *Community Reaction:* 24 👍s; users are frustrated by manual updates and outdated winget manifests.
*   **Dollar sign ($) triggers LaTeX rendering, breaking TUI output** ([#15892](https://github.com/anomalyco/opencode/issues/15892))
    *   *Why it matters:* If the AI mentions currency (e.g., `$0.02/GB`), the markdown renderer breaks the TUI UI by attempting to render it as a math equation.
    *   *Community Reaction:* 4 👍s; an annoying visual bug affecting daily usage.
*   **GLM-5 reasoning support on AWS Bedrock** ([#28168](https://github.com/anomalyco/opencode/issues/28168))
    *   *Why it matters:* Bedrock's specific API requirements for GLM-5 aren't currently wired up, and tool-call arg streaming is broken on history replay.
    *   *Community Reaction:* 5 comments discussing Bedrock API quirks and partial string streaming.
*   **Inconsistent MCP Configuration Format** ([#15790](https://github.com/anomalyco/opencode/issues/15790) & [#28364](https://github.com/anomalyco/opencode/issues/28364))
    *   *Why it matters:* OpenCode uses a proprietary `"mcp"` schema, whereas the rest of the industry standardizes on `"mcpServers"`.
    *   *Community Reaction:* Duplication of requests; developers want copy-paste compatibility with standard Claude/MCP JSON structures.

## 4. Key PR Progress

*   **MCP Timeout Fix** ([#28246](https://github.com/anomalyco/opencode/pull/28246))
    *   Fixes an issue where long-running MCP tools time out by ensuring the `progressToken` is correctly passed to the outgoing request via `onprogress`.
*   **Stripe Webhook Idempotency & Security Fixes** ([#28403](https://github.com/anomalyco/opencode/pull/28403), [#28400](https://github.com/anomalyco/opencode/pull/28400), [#28396](https://github.com/anomalyco/opencode/pull/28396))
    *   A series of crucial patches fixing billing bugs. Prevents duplicate refund deductions, adds idempotency checks to payment events, and fixes an IDOR vulnerability where receipt URLs could be generated without workspace ownership validation.
*   **OpenRouter Server-Side Tools** ([#28404](https://github.com/anomalyco/opencode/pull/28404))
    *   Adds support for native `web_search` and `web_fetch` tools for OpenRouter models via a new `experimental.openrouter_server_tools` config key.
*   **Test Infrastructure Speedups** ([#28406](https://github.com/anomalyco/opencode/pull/28406), [#28399](https://github.com/anomalyco/opencode/pull/28399), [#28405](https://github.com/anomalyco/opencode/pull/28405), [#28391](https://github.com/anomalyco/opencode/pull/28391))
    *   Contributor `kitlangton` aggressively optimized CI test times. Highlights include running CLI subprocess tests concurrently (dropping execution time from `11.87s` to `4.13s`) and skipping unnecessary git setups/LLM servers for tests that don't require them.
*   **CLI Lazy-Loading** ([#27800](https://github.com/anomalyco/opencode/pull/27800))
    *   Defers command-module imports until after parsing. Vastly improves startup time for hot paths like `--help`, `--version`, and shell tab completion.
*   **Fix: Exit Alternate Screen Buffer on Windows** ([#28379](https://github.com/anomalyco/opencode/pull/28379))
    *   Resolves a fatal bug where exiting OpenCode outright closed the terminal emulator window on Windows (Alacritty/WezTerm).
*   **Config & Path Resolution** ([#28359](https://github.com/anomalyco/opencode/pull/28359))
    *   Fixes an edge case where running inside a Docker container with a user named `agent` (home `/home/agent/`) broke relative path resolution and agent keying.
*   **System Prompt Caching Architecture** ([#27377](https://github.com/anomalyco/opencode/pull/27377))
    *   Introduces independent caching by splitting system prompts into stable and dynamic blocks, including cache token audit logging for observability.

## 5. Feature Request Trends

1.  **Reasoning & Token Cost Management:** A massive trend today is fine-grained control over "thinking" blocks. Users are requesting native options to disable reasoning completely to save tokens ([#28371](https://github.com/anomalyco/opencode/issues/28371)), configure reasoning effort dynamically for third-party providers ([#27361](https://github.com/anomalyco/opencode/issues/27361)), and view thinking blocks by default in the TUI ([#28322](https://github.com/anomalyco/opencode/issues/28322)).
2.  **Configuration Standardization:** There is strong pushback against bespoke configuration schemas. Developers want the application to natively support the standard `"mcpServers"` JSON format used by other AI tools to allow seamless environment sharing.
3.  **Headless & Subagent Resiliency:** As OpenCode is adopted more heavily into CI/CD and automated pipelines, feature requests are trending heavily toward stabilizing headless mode JSON outputs, and ensuring background `task()` subagents don't unexpectedly require core billing APIs ([#28362](https://github.com/anomalyco/opencode/issues/28362)).

## 6. Developer Pain Points

*   **Installation Fragmentation:** The transition to postinstall lifecycle scripts broke global installs via Bun ([#27906](https://github.com/anomalyco/opencode/issues/27906)), and the winget package remains unmaintained ([#5121](https://github.com/anomalyco/opencode/issues/5121)). Getting OpenCode running cleanly across different package managers is currently a friction point.
*   **Terminal Quirks & Keybinding Conflicts:** TUI developers continue to struggle with terminal-specific bugs. Users are frustrated by layout-switching Alt-keys stealing focus for the menu bar in Linux ([#28367](https://github.com/anomalyco/opencode/issues/28367)), broken OSC52 clipboard sequences in tmux ([#28329](https://github.com/anomalyco/opencode/issues/28329)), and weird input regressions like the "p" key bug ([#28026](https://github.com/anomalyco/opencode/issues/28026)).
*   **Provider Compatibility Quirks:** Connecting OpenCode to custom providers results in opaque errors. For example, returning reasoning fields in history causes a 400 error for Kimi-K2.6 ([#27852](https://github.com/anomalyco/opencode/issues/27852)), and LM Studio configuration results in ghost models appearing in the UI ([#4232](https://github.com/anomalyco/opencode/issues/4232)). Developers desire stricter schema validation and better error surfacing for custom API connections.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-20

## 1. Today's Highlights
The Pi ecosystem sees a massive push towards performance and stability today, headlined by a community contribution that safely reduces extension loading latency from ~21 seconds to ~66ms. Platform compatibility—particularly on Windows—remains a top priority for maintainers, with core contributor `mitsuhiko` addressing OS-level freezing issues by moving to async filesystem operations and configuring HTTP idle timeouts. Additionally, the community is actively shaping Pi's extensibility and configuration boundaries, advocating for clearer separations between user-defined settings and dynamic agent state.

## 2. Releases
No new official releases were published in the last 24 hours.

## 3. Hot Issues

1. **[#4704] Optimize coding-agent extension loading (83% startup latency reduction)**
   Author: `javargasm` | [View Issue](https://github.com/earendil-works/pi/issues/4704)
   *Why it matters:* Directly addresses a critical ~21s boot delay. The proposal to bypass Jiti in favor of native dynamic imports for core packages is a game-changer for developer experience.

2. **[#4635] FR: Add a skill loading tool**
   Author: `dljsjr` | [View Issue](https://github.com/earendil-works/pi/issues/4635)
   *Why it matters:* This touches on Pi's core minimalism ethos. The community is discussing whether adding dynamic skill loading tools adds unnecessary bloat or solves a genuine bottleneck (👍 2).

3. **[#4758] Split `settings.json` into 2 files**
   Author: `Townk` | [View Issue](https://github.com/earendil-works/pi/issues/4758)
   *Why it matters:* Prevents dynamic agent state from polluting user-defined configs, which is a major pain point for developers tracking their Pi configuration in version control (e.g., dotfiles).

4. **[#4730] Xiaomi MiMo: reasoning_content error on second turn**
   Author: `alblez` | [View Issue](https://github.com/earendil-works/pi/issues/4730)
   *Why it matters:* Exposes breaking edge cases in the `anthropic-messages` API wrapper when handling multi-turn reasoning/thinking models.

5. **[#4733] [bug] pi update failing**
   Author: `akshmit-fintech` | [View Issue](https://github.com/earendil-works/pi/issues/4733)
   *Why it matters:* Reports of the CLI updater failing to pull the latest version, highlighting potential issues in the self-update mechanism. 

6. **[#4752] fix(coding-agent): agent unable to find docs/examples location**
   Author: `brianpunzalan` | [View Issue](https://github.com/earendil-works/pi/issues/4752)
   *Why it matters:* The system prompt currently relies on relative paths for core documentation, causing the agent to get confused when executed from different CWDs.

7. **[#4754] pi.sendUserMessage("/cmd") from a tool does not execute slash commands**
   Author: `syabro` | [View Issue](https://github.com/earendil-works/pi/issues/4754)
   *Why it matters:* A functional gap in the Extensions API preventing tools from triggering slash commands using `deliverAs: "followUp"`.

8. **[#4737] Support connecting to an RPC backend from an interactive frontend**
   Author: `DanielThomas` | [View Issue](https://github.com/earendil-works/pi/issues/4737)
   *Why it matters:* A highly requested architectural improvement to allow interactive TUI frontends to connect to RPC backends over SSH, improving remote dev workflows.

9. **[#4675] openai-completions: unclamped max_tokens silently wedges sessions**
   Author: `secinto` | [View Issue](https://github.com/earendil-works/pi/issues/4675)
   *Why it matters:* Self-hosted vLLM users are experiencing silent failures because Pi passes `maxTokens` without checking it against the model's actual context window limits.

10. **[#4292] Configurable VCS Status**
    Author: `wackywendell` | [View Issue](https://github.com/earendil-works/pi/issues/4292)
    *Why it matters:* Users of alternative VCS tools (like `jj`/jujutes) are getting incorrect `(detached)` Git status UI artifacts. This proposes making the footer VCS display configurable.

## 4. Key PR Progress

1. **[#4735] perf(coding-agent): safely parallelize extension load**
   Author: `javargasm` | [View PR](https://github.com/earendil-works/pi/pull/4735)
   *Summary:* Implements the issue #4704 proposal, successfully reducing boot time to **~66ms** by bypassing Jiti/Babel for core packages and safely parallelizing extension loading.

2. **[#4756] fix(coding-agent): use async filesystem operations in tools**
   Author: `mitsuhiko` | [View PR](https://github.com/earendil-works/pi/pull/4756)
   *Summary:* Prevents the TUI from locking up due to Microsoft Defender blocking synchronous file reads on Windows by migrating operations to async I/O.

3. **[#4759] fix(coding-agent): configure HTTP idle timeout**
   Author: `mitsuhiko` | [View PR](https://github.com/earendil-works/pi/pull/4759)
   *Summary:* Introduces a configurable idle timeout (defaulting back to 5 minutes) to prevent hanging connections in unstable network environments.

4. **[#4751] fix(coding-agent): Windows NUL redirect creates spurious files**
   Author: `ayu-exorcist` | [View PR](https://github.com/earendil-works/pi/pull/4751)
   *Summary:* Resolves an annoying Windows bug where AI-generated `> /dev/null` commands created literal `nul` text files due to MSYS2 Git Bash quirks.

5. **[#4741] fix(agent): stop run after ctx.abort() during tool handling**
   Author: `rwachtler` | [View PR](https://github.com/earendil-works/pi/pull/4741)
   *Summary:* Fixes a critical lifecycle bug where aborted tool calls would duplicate output or continue executing subsequent batched tools.

6. **[#4729] Keep TUI scrollback on full redraws**
   Author: `kyleboas` | [View PR](https://github.com/earendil-works/pi/pull/4729)
   *Summary:* Alleviates a major TUI frustration by preserving terminal scrollback history during full UI redraws (opt-in via `PI_CLEAR_SCROLLBACK=1` to clear).

7. **[#4736] fix: resolve streaming hang on 429 rate limits**
   Author: `javargasm` | [View PR](https://github.com/earendil-works/pi/pull/4736)
   *Summary:* Protects against infinite "Working" hangs by properly catching and handling 429 Too Many Requests and hard quota limits during streaming.

8. **[#4774] feat(ai): add claudinio provider**
   Author: `Tavernari` | [View PR](https://github.com/earendil-works/pi/pull/4774)
   *Summary:* Quickly adds support for the OpenAI-compatible Claudinio API endpoint without requiring custom stream implementations.

9. **[#4724] feat(coding-agent): show update notes**
   Author: `mitsuhiko` | [View PR](https://github.com/earendil-works/pi/pull/4724)
   *Summary:* Future-proofs the updater by allowing the backend to return markdown-formatted security/update notes directly in the CLI.

10. **[#4664] fix(coding-agent): scroll shared tool entries**
    Author: `yzhg1983` | [View PR](https://github.com/earendil-works/pi/pull/4664)
    *Summary:* Fixes the `/share` HTML generation so that sidebar navigation correctly scrolls to tool-call blocks instead of hitting non-existent anchors.

## 5. Feature Request Trends
*   **Remote & GUI Architectures:** A noticeable surge in requests to decouple the Pi frontend from its backend, specifically asking for GUI clients (#4447, #4757) and robust RPC-over-SSH connections (#4737).
*   **LLM Provider Extensibility:** The community is rapidly adopting diverse local and cloud models. There is high demand for simplified integrations of OpenAI-compatible endpoints (Ollama Cloud #4706, Claudinio #4774) and better handling of local proxies (vLLM, llama-swap).
*   **Extension & Skill Management:** Developers want more control over injected context. Proposals include exposing read-only resource metadata to extensions (#4755), adding dedicated skill-loading tools (#4635), and mitigating unscalable token costs caused by automatic skill injection (#4753).

## 6. Developer Pain Points
*   **Windows Friction:** Windows remains a challenging environment. Issues range from path resolution failures (#4688) and Defender-induced TUI freezes, to Git Bash incorrectly handling `NUL` devices (#4731).
*   **Updater Reliability:** Multiple users reported the `pi update` command failing or getting stuck on older versions (#4733, #4743), breaking seamless workflow transitions.
*   **Configuration Bleed:** Extension developers and power users are frustrated by the agent mutating tracked `settings.json` files, strongly requesting a split between static user config and dynamic agent state (#4758).
*   **Streaming & Rate Limit Instability:** Unhandled HTTP 429s (#4736) and unclamped token limits on self-hosted providers (#4675) frequently cause the agent to silently wedge/hang, requiring manual process termination.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-20

## 1. Today's Highlights
The community experienced an exceptionally high volume of activity, with the **Mode B (`qwen serve`) daemon architecture** taking center stage through a massive wave of interconnected feature PRs and core infrastructure issues. The most pressing concern for the broader user base remains **Node.js heap out-of-memory (OOM) crashes**, with multiple high-activity issues confirming severe memory leaks during long sessions. Additionally, maintainers and contributors are actively overhauling core systems, submitting significant refactors for authentication, auto-compaction, telemetry, and context management.

## 2. Releases
No new official releases were published in the last 24 hours. The repository maintainers and contributors are currently focused on merging architectural refactors and addressing critical OOM bugs before cutting the next stable version.

## 3. Hot Issues

1. **Mode B Production Roadmap** ([#4175](https://github.com/QwenLM/qwen-code/issues/4175)): A highly commented (17 comments) umbrella issue detailing the feature-priority roadmap for making `qwen serve` production-ready, building on the recently merged Stage 1 daemon and workspace refactor.
2. **Daemon Mode Open Decisions** ([#3803](https://github.com/QwenLM/qwen-code/issues/4175)): The original 17-comment tracking issue for the daemon design series, serving as the source of truth for the implementation of `qwen serve`.
3. **Node.js Heap OOM Crashes** ([#4167](https://github.com/QwenLM/qwen-code/issues/4167) & [#4315](https://github.com/QwenLM/qwen-code/issues/4315)): Two severe reports (7 and 2 comments) highlighting that the CLI abruptly crashes due to hitting the V8 heap limit, even during idle typing or post-task completion.
4. **Historical Heap Limits** ([#2868](https://github.com/QwenLM/qwen-code/issues/2868) & [#2945](https://github.com/QwenLM/qwen-code/issues/2945)): Older but actively updated OOM issues (4 and 3 comments) showing that massive memory consumption is a systemic, long-standing issue for the CLI. 
5. **Node 26 Fetch Incompatibility** ([#4274](https://github.com/QwenLM/qwen-code/issues/4274)): A critical regression where `qwen-code 0.15.11` fails to connect to APIs on Node.js 26 unless the `fetchOptions.dispatcher` is manually removed. 
6. **API Fetch Fails Silently** ([#3914](https://github.com/QwenLM/qwen-code/issues/3914)): A 7-comment issue where users encounter "Connection error (cause: fetch failed)" across various providers (e.g., OpenRouter), heavily impacting basic usability.
7. **`write_file` Binary False Positives** ([#4004](https://github.com/QwenLM/qwen-code/issues/4004)): A highly relevant bug (marked P1) where the `write_file` tool incorrectly identifies standard UTF-8 Markdown files containing Chinese characters as "binary payloads".
8. **vLLM `reasoning_content` Deprecation** ([#4285](https://github.com/QwenLM/qwen-code/issues/4285)): Users running vLLM ≥ 0.20 experience empty thinking blocks because Qwen Code emits the legacy `reasoning_content` field instead of the updated `reasoning` field.
9. **MCP Spring AI Incompatibility** ([#4326](https://github.com/QwenLM/qwen-code/issues/4326)): Qwen Code's MCP client currently fails to maintain stable connections with Spring AI servers using Streamable HTTP transport due to unsupported GET requests.
10. **Missing Anthropic API Key** ([#4323](https://github.com/QwenLM/qwen-code/issues/4323)): Users report that the Anthropic provider integration fails silently, dropping API keys during request transmission.

## 4. Key PR Progress

1. **F3: Multi-Client Permission Coordination** ([PR #4335](https://github.com/QwenLM/qwen-code/pull/4335)): Implements the `PermissionMediator` contract for Mode B, introducing strategy implementations and an audit ring for secure multi-client sessions.
2. **F1: ACP-Bridge Package Self-Sufficiency** ([PR #4319](https://github.com/QwenLM/qwen-code/pull/4319)): A massive mechanical lift that establishes `@qwen-code/acp-bridge` as a fully independent module, successfully merged today to lay the groundwork for daemon mode.
3. **F1 Follow-up: BridgeFileSystem & Channel Fix** ([PR #4334](https://github.com/QwenLM/qwen-code/pull/4334)): Fixes a critical TOCTOU (Time-of-Check to Time-of-Use) thread-safety bug and wires up atomic file writes via `WorkspaceFileSystem`.
4. **Fix Core: Mirror Qwen3 Reasoning** ([PR #4294](https://github.com/QwenLM/qwen-code/pull/4294)): Resolves Issue #4285 by mirroring `reasoning_content` into the canonical `reasoning` field on outbound history turns, fixing vLLM compatibility. 
5. **Atomic Write Rollout** ([PR #4333](https://github.com/QwenLM/qwen-code/pull/4333)): Replaces bare `fs.writeFile` calls with atomic helpers for credentials, memory, and JSONL session writers to prevent data corruption during unexpected crashes.
6. **Session-Scoped `/model` Switching** ([PR #4332](https://github.com/QwenLM/qwen-code/pull/4332)): Changes `/model <id>` to switch models only for the current session rather than globally overwriting `settings.json`, improving multi-session workflows.
7. **Three-Tier Auto-Compaction Ladder** ([PR #4168](https://github.com/QwenLM/qwen-code/pull/4168)): Replaces the single 70% context threshold with a warn/auto/hard ladder system, optimizing context reduction and thinking behavior during long sessions.
8. **Unify Auth Provider Config** ([PR #4287](https://github.com/QwenLM/qwen-code/pull/4287)): A massive refactor simplifying the `/auth` surface by collapsing duplicate flows and eliminating 1.2k lines of accumulated complexity from `ManageModels`.
9. **LLM Classifier for Auto Approval** ([PR #4151](https://github.com/QwenLM/qwen-code/pull/4151)): Introduces a new `auto` approval mode using an LLM classifier to evaluate tool calls, bridging the gap between Auto-Edit and full YOLO mode.
10. **Daemon Shared UI Transcript Layer** ([PR #4328](https://github.com/QwenLM/qwen-code/pull/4328)): Adds the foundational daemon UI layer, normalizing typed daemon events into React-bindable transcript blocks for future web terminal clients.

## 5. Feature Request Trends
* **Robust Daemon & Headless Infrastructure:** The community is heavily pushing toward a stable Mode B (`qwen serve`), emphasizing multi-client session management, permission coordination, and headless UI transcript layering.
* **Advanced Context & Memory Management:** Developers want smarter, non-AI-assisted memory compression tools (e.g., [#4264](https://github.com/QwenLM/qwen-code/issues/4264)), project-scoped memory writes, and granular session context controls.
* **AI-Native CLI Interactions:** There is a strong desire to replace basic CLI wrappers with LLM-driven workflows, notably the redesign of the `/commit` command to leverage AI for message drafting ([#4000](https://github.com/QwenLM/qwen-code/issues/4000)).
* **Safer Autonomous Agents:** Demand for autonomous but secure agent execution is rising, reflected in requests for intelligent auto-approval modes and refined per-turn interactive diffing.

## 6. Developer Pain Points
* **Severe Memory Leaks:** The most prominent frustration is the CLI's tendency to hit the V8 heap limit and crash during routine, non-complex tasks. The Node.js process frequently balloons past 4GB before crashing entirely.
* **Breaking API & Provider Integrations:** Network and fetch logic continue to cause headaches, specifically regarding Node 26 dispatcher incompatibilities and silent failures with providers like Anthropic, OpenRouter, and local Ollama servers.
* **MCP Transport Instability:** The MCP client's handling of Streamable HTTP limits server compatibility, causing gateway timeouts and dropped connections with popular frameworks like Spring AI.
* **Encoding & File System Quirks:** Users are frustrated by overly aggressive binary detection in `write_file`, which routinely fails to write UTF-8 Markdown containing international characters.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

## DeepSeek TUI Community Digest — 2026-05-20

### 1. Today's Highlights
The DeepSeek TUI community saw a massive surge in architectural contributions and bug fixes, with 24 active Pull Requests focusing on overhauling the tooling layer, IDE integrations, and memory systems. Key highlights include the introduction of an `ExternalTool` abstraction layer to eliminate hardcoded subprocess calls across 65 sites, a new MCP-over-WebSocket IDE bridge for deep editor integration, and a comprehensive LanceDB-backed vector memory system. While no new official releases dropped today, maintainers and contributors are aggressively resolving Windows stability issues and refining the sub-agent architecture.

### 2. Releases
No new official releases were published in the last 24 hours. The community remains active against the `v0.8.39` baseline.

### 3. Hot Issues
1. **[Bug] Docker pulling results in garbled output ([#1615](https://github.com/Hmbown/DeepSeek-TUI/issues/1615))**
   *Why it matters:* This is a highly active issue (167 comments) where users following official documentation experience complete terminal crashes requiring a hard Linux server reset. It highlights critical instability in the default Docker deployment flow.
2. **[Enhancement] Region-aware web search ([#1681](https://github.com/Hmbown/DeepSeek-TUI/issues/1681))**
   *Why it matters:* Points out that current web search integrations are unusable in China due to network restrictions. It proposes native region detection and provider fallbacks, which is crucial for DeepSeek's primary user base (👍 3).
3. **[Bug] TUI freezes on Windows 11 (`crossterm` poll) ([#1812](https://github.com/Hmbown/DeepSeek-TUI/issues/1812))**
   *Why it matters:* Documents critical UI deadlocks on Windows where the TUI becomes completely unresponsive without crashing, heavily impacting Windows daily-driver users.
4. **[Enhancement] ExternalTool abstraction layer ([#1794](https://github.com/Hmbown/DeepSeek-TUI/issues/1794))**
   *Why it matters:* A vital architectural proposal to stop hardcoding binary names (e.g., `git`, `grep`) across ~65 call sites, paving the way for a safer, more modular tooling system.
5. **[Enhancement] Pluggable Tool Registry ([#1802](https://github.com/Hmbown/DeepSeek-TUI/issues/1802))**
   *Why it matters:* Proposes allowing users to replace built-in tools (like `exec_shell`) via `config.toml` with custom scripts or binaries without recompiling, representing a massive leap in extensibility.
6. **[Enhancement] Ctrl+C cancel and text re-input ([#1757](https://github.com/Hmbown/DeepSeek-TUI/issues/1757))**
   *Why it matters:* Addresses a major UX friction point. Canceling a generation currently loses the prompt. Rolling back the text to the input box saves users from awkward terminal copy-pasting.
7. **[Bug] Sub-agent 120s API timeout renders `agent_open` unusable ([#1806](https://github.com/Hmbown/DeepSeek-TUI/issues/1806))**
   *Why it matters:* Long-running parallel sub-agent tasks routinely fail due to strict legacy timeouts. This heavily limits TUI's capability for complex document processing.
8. **[Enhancement] ORCA Lab compatibility ([#1801](https://github.com/Hmbown/DeepSeek-TUI/issues/1801))**
   *Why it matters:* Opened by the repo owner (`Hmbown`), this issue tracks connecting DeepSeek TUI as a physical-AI coding agent for ORCA Lab robotics simulations, indicating the project's future expansion into embodied AI.
9. **[Bug] Windows shell defaults hardcoded to `cmd.exe` ([#1779](https://github.com/Hmbown/DeepSeek-TUI/issues/1779))**
   *Why it matters:* Breaks shell execution for modern Windows users relying on PowerShell, `pwsh`, or WSL, causing severe quoting and execution bugs.
10. **[Bug] `rlm_eval` crashes on non-UTF-8 Python REPL bytes ([#1815](https://github.com/Hmbown/DeepSeek-TUI/issues/1815))**
    *Why it matters:* Silent crashes when evaluating Python output containing non-UTF-8 characters (very common in Chinese Windows locales), breaking the code execution feedback loop.

### 4. Key PR Progress
1. **feat: ExternalTool abstraction layer ([#1821](https://github.com/Hmbown/DeepSeek-TUI/pull/1821))**
   Directly addresses Issue #1794. Introduces an `ExternalTool` trait to centralize binary discovery and invocation, cleaning up ~65 hardcoded `Command::new()` sites.
2. **feat(ide-bridge): MCP-over-WS IDE bridge ([#1820](https://github.com/Hmbown/DeepSeek-TUI/pull/1820))**
   Adds a workspace crate that speaks MCP over WebSockets, allowing DeepSeek TUI to integrate deeply with IDEs like VS Code and Cursor via lockfile discovery.
3. **feat: auto-continue mode with safety nets ([#1809](https://github.com/Hmbown/DeepSeek-TUI/pull/1809))**
   Introduces goal-driven agent looping to `/goal` that advances automatically until a goal is met or bounded by 4 safety nets (token budget, max iterations, etc.).
4. **feat(vector-memory): LanceDB implementation ([#1799](https://github.com/Hmbown/DeepSeek-TUI/pull/1799))**
   A massive PR implementing a 3-table vector memory architecture (Memories, History Summaries, Code Index) using LanceDB + fastembed ONNX for persistent semantic recall.
5. **fix(rlm): tolerate non-utf8 repl stdout ([#1819](https://github.com/Hmbown/DeepSeek-TUI/pull/1819))**
   Fixes a silent crash by reading Python REPL stdout as bytes and applying `String::from_utf8_lossy` to handle non-standard characters gracefully.
6. **fix(tui): make subagent API timeout configurable ([#1808](https://github.com/Hmbown/DeepSeek-TUI/pull/1808))**
   Resolves the 120-second sub-agent timeout limit by making it configurable in `config.toml` (capped at 1800s), fixing broken long-running tasks.
7. **fix(tui): prioritize exact alias matches in autocomplete ([#1811](https://github.com/Hmbown/DeepSeek-TUI/pull/1811))**
   UX refinement to slash-command autocomplete. Ensures that exact alias matches (e.g., `/q` for quit) take precedence over alphabetical sorting.
8. **fix(tui): restore auto model mode on session load ([#1800](https://github.com/Hmbown/DeepSeek-TUI/pull/1800))**
   Fixes a bug where resuming a session saved with `/model auto` would send the literal string `"auto"` as the model name to the API, causing a 400 error.
9. **fix(file_search): wrap walker in spawn_blocking + 30s timeout ([#1790](https://github.com/Hmbown/DeepSeek-TUI/pull/1790))**
   Prevents synchronous directory traversal from blocking the Tokio scheduler, ensuring the TUI remains responsive to user cancellation during large file searches.
10. **fix(tui): reset displayed cost on clear ([#1796](https://github.com/Hmbown/DeepSeek-TUI/pull/1796))**
    Resolves a visual glitch where accumulated API costs persisted in the UI even after using the `/clear` command to wipe the context.

### 5. Feature Request Trends
* **Deep IDE Integration:** Users want to blur the lines between the terminal and the editor. The trend is shifting toward MCP-over-WebSocket bridges and IDE state sharing (active tabs, selections).
* **Advanced Memory & Context:** High demand for persistent, semantic memory. The integration of LanceDB vector databases and fuzzy file discovery indicates a push toward deeply contextualized, long-term AI agents.
* **Windows/WSL Parity:** A significant portion of the community is agitating for first-class Windows support, specifically demanding native PowerShell/WSL shell handling and fixes for `crossterm` freezing bugs.
* **Agent Customization & Extensibility:** Developers want to hack the agent's toolchain without rewriting Rust code. There is a strong trend toward "pluggable registries" and configurable tooling limits.

### 6. Developer Pain Points
* **Windows Stability:** Developers on Windows 11 are experiencing severe friction. UI deadlocks, hardcoded `cmd.exe` shell dispatching, and RLM UTF-8 crashes make the TUI highly unstable for non-Linux users.
* **Sub-Agent Limitations:** The current 120-second hard timeout for sub-agents is crippling developers attempting complex, multi-step tasks like document conversion. 
* **UI Friction in the Terminal:** Standard terminal limitations are frustrating users—losing long prompts upon `Ctrl+C`, broken selection/pasting in TUI panes, and unresponsive UI during synchronous tool execution (like file searching).
* **Cost/State Desync:** Visual bugs, such as the API cost tracker ignoring the `/clear` command and session state variables (like model selection) failing to persist correctly across restarts, are causing confusion and disrupting workflows.

</details>