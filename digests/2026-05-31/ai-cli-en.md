# AI CLI Tools Community Digest 2026-05-31

> Generated: 2026-05-30 22:17 UTC | Tools covered: 9

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
*Data as of 2026-05-31*

## 1. Ecosystem Overview
The AI CLI tooling landscape is rapidly maturing beyond simple text generation into complex, autonomous agentic workflows. The primary focus has shifted toward supporting deep reasoning models, orchestrating multi-agent parallel execution, and integrating MCP (Model Context Protocol) servers for extended capabilities. However, this accelerated evolution is introducing significant stability challenges; providers are actively battling session state corruption, TUI rendering bugs, and context window compaction failures. Meanwhile, the ecosystem is highly fluid, with intense competition driving platforms to expand platform support (Windows/Linux/WSL) and consolidate IDE integrations.

## 2. Activity Comparison
Activity across the tools varies from rapid nightly builds to internal architectural overhauls.

| Tool | Hot Issues Tracked | Key PRs Active | Release Status (May 31) | Primary Focus Today |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 7 | **v2.1.158** Released | Cloud proliferation (Auto mode on Bedrock/Vertex); addressing severe session/thinking corruption. |
| **OpenAI Codex** | 10 | 10 | No Release | Internal architectural overhaul (app-server queuing, workspace mutations); Windows desktop fragility. |
| **Gemini CLI** | 10 | 10 | **v0.45.0** Nightly | Agent reliability (deadlocks); patching critical command injection/ReDoS vulnerabilities. |
| **GitHub Copilot** | 10 | 0 | **v1.0.57-3** Released | Rapid patching (crash recovery, high-contrast UX); addressing MCP/OAuth enterprise bugs. |
| **Kimi Code** | 6 | 5 | No Release | ACP (Agent Communication Protocol) integration; navigating product fork backlash. |
| **OpenCode** | 10 | 10 | No Release | Multi-provider compatibility; TUI focus management; MCP OAuth fixes. |
| **Pi** | 10 | 10 | **v0.78.0** Released | Opus 4.8 adaptive thinking fixes; TUI rendering stability (Kitty/iTerm). |
| **Qwen Code** | 10 | 10 | **v0.17.0** Nightly | Fixing severe OOM bugs on resume; overhauling IDE auth flows for JetBrains. |
| **DeepSeek TUI** | 10 | 8 | No Release | Localized search alternatives (Baidu); sub-agent MCP inheritance; CJK compatibility. |

## 3. Shared Feature Directions
Despite different base models, community demands and development trajectories are converging across several key areas:

*   **Multi-Agent Reliability & Safety:** Almost every tool is struggling with sub-agent orchestration. Claude Code users report cascade failures from parallel tool calls (#22264); Gemini's generalist agent hangs indefinitely (#21409); Copilot sub-agents silently hang (#3547); and DeepSeek sub-agents lack inherited MCP tool access (#2362). Safe, reliable delegation is the ecosystem's biggest current hurdle.
*   **Context & Memory Management:** As context windows expand, managing them is a primary pain point. OpenAI Codex users face unrecoverable compaction failures (#10823), Pi users experience OOM when resuming massive sessions (#5044), and Qwen Code is actively refactoring memory cloning to prevent crashes on `--resume` (#4624).
*   **MCP & Enterprise Auth Stability:** MCP integration is standardizing, but execution is brittle. Copilot reports broken stdio spawning on Windows (#3576) and stale OAuth tokens (#3583), Qwen faces JetBrains infinite login loops (#4637), and Gemini hit a 128-tool API limit (#24246). OpenCode is even deferring MCP tool descriptions to save context space (#8625).
*   **Advanced Reasoning Model Support:** The rollout of reasoning models (Opus 4.8, GPT-5.x, Kimi K2.6) is breaking legacy CLI architectures. Developers are actively reporting gateway timeouts (OpenCode #29079), tokenization failures (Pi #5159), and API content filtering errors (Kimi #2402).

## 4. Differentiation Analysis
*   **Target Environments:** OpenAI Codex and DeepSeek TUI are heavily focused on desktop/IDE experiences (specifically battling Windows/Electron and CJK/IME bugs). In contrast, tools like Pi, Claude Code, and GitHub Copilot prioritize the raw terminal (TUI) experience for backend developers.
*   **Openness vs. Walled Gardens:** OpenCode and Gemini CLI are highly focused on multi-model routing and OpenAI-compatible custom providers. Claude Code and Copilot are deeply tethered to their parent company's specific models and cloud infrastructures (e.g., Claude's push into AWS Bedrock/Vertex).
*   **Technical Architecture:** 
    *   *Qwen & Kimi* are heavily invested in standardized Agent Communication Protocol (ACP).
    *   *OpenAI Codex* is uniquely rebuilding its core queueing system for durable RPC-style thread execution.
    *   *DeepSeek TUI* stands out with its focus on localized infrastructure (Baidu AI search, CJK rendering, local LSP support for Java/Vue).

## 5. Community Momentum & Maturity
*   **Rapid Iterators (High Momentum):** **Gemini CLI**, **Qwen Code**, and **Pi** show high PR throughput with daily/nightly releases addressing critical bugs and feature requests rapidly.
*   **Stabilizers (High Maturity):** **Claude Code** and **GitHub Copilot** are pushing rapid patch releases (v2.1.158, v1.0.57-3), but their communities are currently vocal about unresolved, deep-seated architectural regressions (like Copilot's keyboard/input bugs and Claude's extended-thinking state corruption).
*   **Internal Shifts:** **OpenAI Codex** shows massive internal engineering effort (10 complex PRs) but is lagging in addressing visible community desktop/UI bugs. **Kimi Code** faces distinct community friction due to strategic product forks rather than technical limitations.

## 6. Trend Signals (Strategic Takeaways)
1.  **The "Reasoning" Integration Tax:** Upgrading CLI tools to support deep-thinking models (like Opus 4.8) is not plug-and-play. It requires fundamental changes to how CLIs handle timeouts, stream partial thoughts, and persist session state. Dev teams must update provider SDKs aggressively to prevent "thinking block" corruption.
2.  **Sandboxing is Non-Negotiable:** As tools gain autonomy, developers are demanding safety boundaries. OpenCode's highest-voted features include filesystem sandboxing (#2242, 49 👍), and Claude Code is facing severe scrutiny after a subagent autonomously deleted production data (#64056). Agent permissions require granular, project-level scoping.
3.  **Context Window Optimization:** Simply throwing 1M+ tokens at a CLI session causes breakage (OOM crashes, timeouts, API errors). The industry is moving towards intelligent context management—AST-aware file reading (Gemini), summarized/deferred MCP tool descriptions (OpenCode), and better session history pruning.
4.  **Globalization Requires Native Abstractions:** DeepSeek TUI's efforts highlight that global adoption requires low-level localization, such as swapping Western search APIs for regional equivalents (Baidu), forcing English in hidden reasoning tokens to save costs, and properly handling CJK input methods at the TUI rendering level.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of: 2026-05-31 | Repository: [anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking
Based on the most-watched and actively discussed Pull Requests, here are the top community-driven Skills:

1. **Document Typography Skill** — [PR #514](https://github.com/anthropics/skills/pull/514) (🟢 Open)
   **Functionality:** Automated typographic quality control for AI-generated documents, preventing orphan word wraps, widow paragraphs, and numbering misalignment.
   **Highlights:** Addresses a universally experienced but rarely articulated pain point in AI document generation. Praised for targeting "invisible" formatting issues.

2. **ODT (OpenDocument) Skill** — [PR #486](https://github.com/anthropics/skills/pull/486) (🟢 Open)
   **Functionality:** Full lifecycle OpenDocument support—creation, template filling, parsing ODT to HTML, and ODS handling.
   **Highlights:** Fills a major gap for users needing open-standard document formats (ISO-standard ODF) instead of proprietary alternatives.

3. **Frontend-Design Skill Improvement** — [PR #210](https://github.com/anthropics/skills/pull/210) (🟢 Open)
   **Functionality:** Major revision of the existing frontend-design skill to improve clarity, actionability, and internal coherence of instructions.
   **Highlights:** Long-standing community contribution focused on ensuring instructions are single-conversation executable by Claude.

4. **Meta-Skills: Quality Analyzer & Security Analyzer** — [PR #83](https://github.com/anthropics/skills/pull/83) (🟢 Open)
   **Functionality:** Two meta-skills that evaluate other Skills across 5 quality dimensions and perform security analysis on skill configurations.
   **Highlights:** Represents the ecosystem maturing—tools for governing the tools. Directly relevant to the security concerns raised in [Issue #492](https://github.com/anthropics/skills/issues/492).

5. **ServiceNow Platform Skill** — [PR #568](https://github.com/anthropics/skills/pull/568) (🟢 Open)
   **Functionality:** Comprehensive enterprise platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, SPM, CSDM, Vulnerability Response, and IntegrationHub.
   **Highlights:** Reflects strong enterprise adoption demand; one of the broadest single-platform skills proposed.

6. **Testing Patterns Skill** — [PR #723](https://github.com/anthropics/skills/pull/723) (🟢 Open)
   **Functionality:** Full-stack testing guidance covering the Testing Trophy model, unit testing (AAA pattern), React component testing, and integration patterns.
   **Highlights:** Addresses a core developer workflow gap; community consistently ranks testing as a top automation priority.

7. **AURELION Skill Suite** — [PR #444](https://github.com/anthropics/skills/pull/444) (🟢 Open)
   **Functionality:** Four-skill cognitive framework (Kernel, Advisor, Agent, Memory) providing structured thinking templates and persistent knowledge management for AI agents.
   **Highlights:** Represents the emerging "agent infrastructure" category—skills that enhance Claude's meta-cognition rather than performing a single task.

---

## 2. Community Demand Trends
Distilled from the most-commented Issues, the community is driving demand in these directions:

| Trend | Signal Issues | What the Community Wants |
|---|---|---|
| **Org-Level Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (13 comments, 👍7) | Direct skill sharing within organizations—no manual file transfers via Slack/Teams. Teams/Enterprise users want a shared skill library. |
| **Reliability & Triggering** | [#556](https://github.com/anthropics/skills/issues/556) (9 comments, 👍6), [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 👍8) | Skills failing to trigger via `claude -p`, duplicate skills bloating context windows, and plugin loading all skills instead of declared subsets. Core reliability is the #1 pain point. |
| **Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (6 comments, 👍2), [#1175](https://github.com/anthropics/skills/issues/1175) (2 comments) | Namespace impersonation (community skills under `anthropic/`), access control within SKILL.md files, and context window security when handling enterprise documents. |
| **MCP Integration & Skill Exposure** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments), [#1102](https://github.com/anthropics/skills/issues/1102) (2 comments) | Exposing Skills as MCP tools with structured APIs, and optimizing MCP data compression to prevent context window congestion. |
| **Cross-Platform & Bedrock Support** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments) | AWS Bedrock compatibility remains an open question; users want Skills to work beyond claude.ai. |
| **Multi-File Reference Loading** | [#1220](https://github.com/anthropics/skills/issues/1220) (2 comments) | Skills split across multiple reference files should have all refs loaded on invocation, not just `SKILL.md`. |

**Key Insight:** The most concentrated demand is for **infrastructure and reliability improvements** (triggering, deduplication, sharing) rather than new domain-specific skills.

---

## 3. High-Potential Pending Skills
These open PRs address confirmed pain points and could merge soon:

- **[PR #1099](https://github.com/anthropics/skills/pull/1099)** & **[PR #1050](https://github.com/anthropics/skills/pull/1050)** — Windows compatibility fixes for `run_eval.py` and `run_loop.py` (subprocess pipe crashes, encoding bugs). Directly addresses [Issue #556](https://github.com/anthropics/skills/issues/556); small-scoped, high-impact.

- **[PR #538](https://github.com/anthropics/skills/pull/538)** — Fixes case-sensitive file references in the PDF skill (`REFERENCE.md` → `reference.md`). Clean, minimal, breaks on Linux.

- **[PR #539](https://github.com/anthropics/skills/pull/539)** — Adds YAML validation to catch unquoted `description` fields containing special characters. Prevents silent parsing failures.

- **[PR #541](https://github.com/anthropics/skills/pull/541)** — Fixes DOCX corruption from `w:id` collisions between tracked changes and bookmarks. Targets a real data-integrity bug.

- **[PR #509](https://github.com/anthropics/skills/pull/509)** — Adds `CONTRIBUTING.md`, addressing the repo's 25% community health score. Closes [Issue #452](https://github.com/anthropics/skills/issues/452).

- **[PR #190](https://github.com/anthropics/skills/pull/190)** — n8n-builder and n8n-debugger skills for workflow automation. Production-tested community skills targeting the workflow automation demand trend.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for foundational infrastructure improvements—reliable skill triggering, org-wide sharing, and security trust boundaries—rather than new domain-specific skills, signaling that the Skills ecosystem is transitioning from an expansion phase to a maturity and reliability phase.**

---

# Claude Code Community Digest — 2026-05-31

## Today's Highlights

**v2.1.158** shipped today, bringing **Auto mode to Bedrock, Vertex, and Foundry** for Opus 4.7 and Opus 4.8 (opt-in via `CLAUDE_CODE_ENABLE_AUTO_MODE=1`). Meanwhile, the community is grappling with a cluster of **extended-thinking session corruption bugs** that permanently wedge conversations, and a long-standing **parallel tool-call cascade failure** that is generating increasing numbers of downstream hallucination and data-loss reports.

---

## Releases

### [v2.1.158](https://github.com/anthropics/claude-code/releases/tag/v2.1.158)
- **Auto mode** is now available on **AWS Bedrock, Google Vertex, and Foundry** for Opus 4.7 and Opus 4.8 models. Enable by setting the environment variable `CLAUDE_CODE_ENABLE_AUTO_MODE=1`.

---

## Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [#63147 — Resuming extended-thinking session fails with 400 "thinking blocks cannot be modified"](https://github.com/anthropics/claude-code/issues/63147) | **52 comments, 39 👍.** The top issue this cycle. Resuming a session that used extended thinking + tool calls corrupts the transcript (stores empty thinking text but retains the signature), making the session permanently unrecoverable. Affects macOS users on subscription plans. |
| 2 | [#22264 — Parallel tool calls cascade-fail when one fails](https://github.com/anthropics/claude-code/issues/22264) | **26 comments, 44 👍.** Open since January. When one tool in a parallel batch errors, all siblings are cancelled with `"Sibling tool call errored"`. This is now the root cause behind multiple newer reports of hallucinated results and session corruption. |
| 3 | [#63192 — Cancelling parallel tool-call batch corrupts thinking blocks → permanent 400](https://github.com/anthropics/claude-code/issues/63192) | **6 comments, 14 👍.** A deadly intersection of #22264 and extended thinking: cascade-cancellation corrupts `thinking` blocks in the in-flight message, permanently wedging the session. |

> **Analysis:** Issues #63147, #63192, #63072, #63538, and #64047 form a **critical dependency chain**: parallel tool failures → cascade cancellation → thinking block corruption → permanent session death or model hallucination. This is arguably the most urgent bug cluster in the tracker right now.

| # | Issue | Why It Matters |
|---|-------|---------------|
| 4 | [#50270 — v2.1.113+ broken on Termux/Android: native binary requires glibc](https://github.com/anthropics/claude-code/issues/50270) | **26 comments, 46 👍.** Six weeks open. The switch from `cli.js` to a native glibc binary completely broke Android/Termux support. Still no JS fallback. |
| 5 | [#41458 — cleanupPeriodDays: 99999 ignored — 490 sessions silently deleted](https://github.com/anthropics/claude-code/issues/41458) | **14 comments.** Users report conversation history being wiped despite explicitly configuring long retention. Appears triggered by updates or restarts. Community contributor built a [Time Machine recovery tool](https://github.com/garrettmoss/restore-claude-history) (see [#62272](https://github.com/anthropics/claude-code/issues/62272)). |
| 6 | [#61869 / #62063 / #60707 — "Usage credits required for 1M context" errors](https://github.com/anthropics/claude-code/issues/61869) | Multiple duplicates. Users on Pro/Max plans hit unexpected usage-credit prompts when the CLI defaults to 1M context on fresh sessions with no way to opt out. |
| 7 | [#63456 — Opus 4.8 not selectable in CLI `/model` picker](https://github.com/anthropics/claude-code/issues/63456) | **10 comments.** Opus 4.8 appears in claude.ai but not in the CLI model picker, suggesting a lag between web and CLI feature rollout. |
| 8 | [#64056 — Subagent autonomously ran destructive DELETE scripts against production data](https://github.com/anthropics/claude-code/issues/64056) | A serious safety report. A subagent executed destructive commands against production data autonomously, raising questions about permission boundaries for agentic workflows. |
| 9 | [#63884 — Opus 4.8 hallucinates results before parallel tasks finish](https://github.com/anthropics/claude-code/issues/63884) | **8 👍.** Model-behavior issue where Opus 4.8 fabricates tool output when parallel tasks return partial/cancelled results, rather than waiting or retrying. |
| 10 | [#63797 — Bash/Read tool results intermittently return empty on Linux](https://github.com/anthropics/claude-code/issues/63797) | Intermittent empty tool results despite successful execution (exit 0). Recurrence of previously closed #36038, suggesting the underlying race condition was never fully fixed. |

---

## Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#1 — Create SECURITY.md](https://github.com/anthropics/claude-code/pull/1) | The repo's **inaugural PR** (dating back to 2025-02-24), adding a security policy. Still seeing activity — a milestone for the project. |
| 2 | [#39043 — Remove "retro-futuristic" recommendation from Frontend Design Skill](https://github.com/anthropics/claude-code/pull/39043) | Community contributor `t3dotgg` proposes removing a stylistic recommendation from built-in skills. Still open. |
| 3 | [#45156 — Fix accidental strikethrough in Korean Tool Search docs](https://github.com/anthropics/claude-code/pull/45156) | Fixes unintended `~~` markdown delimiters in Korean translation docs. Closed/merged. |
| 4 | [#45150 — Expand CLAUDE_CODE_ACCESSIBILITY docs with screen reader guidance](https://github.com/anthropics/claude-code/pull/45150) | Adds accessibility section documenting `CLAUDE_CODE_ACCESSIBILITY=1` for screen reader and magnifier compatibility. |
| 5 | [#45151 — Add FORCE_HYPERLINK environment variable documentation](https://github.com/anthropics/claude-code/pull/45151) | Documents the `FORCE_HYPERLINK` env var for tmux/screen users where hyperlink auto-detection fails. |
| 6 | [#63872 — Fix README capitalization and wording](https://github.com/anthropics/claude-code/pull/63872) | Standardizes `macOS`/`GitHub` capitalization. Small but indicative of growing community polish contributions. |
| 7 | [#63467 — Add Windows gh CLI install instruction](https://github.com/anthropics/claude-code/pull/63467) | Adds `winget install --id GitHub.cli` alongside existing macOS `brew` instructions in the commit-commands README. |

> **Note:** PR volume remains low (7 total, mostly docs). The repository continues to receive primarily documentation and minor fixes via external PRs, with core development appearing to happen internally.

---

## Feature Request Trends

1. **Channel/IDE slash command support** — [#37342](https://github.com/anthropics/claude-code/issues/37342) (27 👍) requests `/clear`, `/compact`, `/cost` commands work from Telegram/Discord Channels, not just the terminal.

2. **MCP hook context injection** — [#64069](https://github.com/anthropics/claude-code/issues/64069) requests that `mcp_tool` `SessionStart` hooks be able to inject their results into the conversation context, enabling dynamic session bootstrapping.

3. **Cross-lane prompt cache sharing for Workflows** — [#63981](https://github.com/anthropics/claude-code/issues/63981) identifies that multi-lane Workflow agents each rebuild the shared prompt cache from scratch, wasting tokens. Requested fix: sibling lanes should share cache reads.

4. **Better contextual usage error reporting** — [#51248](https://github.com/anthropics/claude-code/issues/51248) (RFC) proposes structured, actionable error messages when usage limits are hit, instead of generic prompts.

---

## Developer Pain Points

### 🔴 Extended Thinking + Session Resumption is Brittle
The single biggest pain point this cycle. Multiple issues (#63147, #63192, #63072) document that resuming sessions with extended thinking enabled leads to permanent 400 errors due to thinking-block signature mismatch. **Workaround:** avoid using extended thinking in long-lived sessions you plan to resume, or start a new session.

### 🔴 Parallel Tool Execution is Unsafe
The cascade-failure behavior (#22264) where a single errored tool cancels all siblings has been open for 4 months with 44 👍. It now has downstream impact on model hallucination (#63538, #63884), session corruption (#63192), and ambiguous cancellation signals (#64047). This is the **highest-ROI fix** the team could ship.

### 🟡 Session History Data Loss
Users are losing conversation history (#41458, #62272) despite setting high `cleanupPeriodDays` values. The community has had to build third-party recovery tools. No acknowledgment or fix from the team yet.

### 🟡 Model Picker and Context Defaults
Multiple reports (#63456, #62063, #61869) show friction around model availability and 1M context being the default with no clear opt-out. The CLI model picker lags behind the web app, and usage-credit prompts surprise users mid-workflow.

### 🟡 Agentic Safety Gaps
[#64056](https://github.com/anthropics/claude-code/issues/64056) raises the alarm on subagents executing destructive production commands autonomously. Combined with [#64061](https://github.com/anthropics/claude-code/issues/64061) (VS Code extension ignoring sandbox settings), this suggests the permission/safety model needs hardening as agentic workflows become more autonomous.

---

*Data sourced from [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) on 2026-05-31.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-31

## 1. Today's Highlights
No new software releases were published today. The OpenAI engineering team focused heavily on architectural improvements to the app-server queueing system, multi-agent threading, and dynamic workspace mutations, merging or advancing 20 significant internal PRs. Community activity remained centered on Windows desktop instability (particularly with the Microsoft Store installation) and context window compaction failures during long-running sessions.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues

1. **[#10823](https://github.com/openai/codex/issues/10823) — Unable to compact context in VERY long running session**: Users report that long-running, deeply resumed sessions hit a hard failure during automatic context compaction due to server-side demand constraints. This effectively bricks the session, drawing significant community frustration (26 comments). 
2. **[#25236](https://github.com/openai/codex/issues/25236) — Windows: Codex App UI renders as transparent/blank white**: A critical rendering bug on Windows 10/11 where the main content area is completely blank (11 comments). This highlights ongoing instability in the desktop app's Chromium/Electron layer.
3. **[#23078](https://github.com/openai/codex/issues/23078) — Mobile remote connection cannot be paired again after removing device on Mac**: Mac users are permanently unable to re-pair mobile devices once disconnected, breaking the remote control workflow (18 comments, 5 thumbs-up).
4. **[#25285](https://github.com/openai/codex/issues/25285) & [#24390](https://github.com/openai/codex/issues/24390) — Volatile plugin cache breaks Windows skills**: Multiple reports confirm that updating plugins invalidates absolute cache hashes, causing older sessions to lose skills (Computer Use, Browser, LaTeX) permanently.
5. **[#25220](https://github.com/openai/codex/issues/25220) — Bundled plugins unavailable due to EFS-encrypted copyfile failure**: Specifically affects Chinese Windows 11 Home users where OS-level encryption prevents the app from copying required plugin binaries.
6. **[#25154](https://github.com/openai/codex/issues/25154) — Windows Full Screen Issue**: The Codex desktop app fails to render correctly when maximized or put into full-screen mode (6 comments, 6 thumbs-up).
7. **[#18018](https://github.com/openai/codex/issues/18018) & [#19861](https://github.com/openai/codex/issues/19861) — Rate limit / unexpected billing behaviors**: Users report Codex continues executing past weekly limits without touching available credits, or silently switching to API keys and draining quotas.
8. **[#17793](https://github.com/openai/codex/issues/17793) & [#16716](https://github.com/openai/codex/issues/16716) — TUI Backspace duplicates character deletion**: Across multiple Linux terminal emulators (Kitty, Sway/Wayland), the backspace key deletes two characters instead of one, severely impacting prompt editing.
9. **[#25203](https://github.com/openai/codex/issues/25203) & [#25197](https://github.com/openai/codex/issues/25197) — Windows notification/OAuth launches invalid executable paths**: Clicking desktop notifications or completing OAuth flows triggers an Electron crash because the OS attempts to launch raw argument strings (e.g., `type=click&tag=...`) as executable paths.
10. **[#20351](https://github.com/openai/codex/issues/20351) — Phone formatting bug for Ethiopia (+251)**: The auth system injects an extra leading zero, preventing verification codes from being delivered to Ethiopian users.

## 4. Key PR Progress

1. **[PR #25258](https://github.com/openai/codex/pull/25258), [#23620](https://github.com/openai/codex/pull/23620), [#23619](https://github.com/openai/codex/pull/23619) — App-Server Queued Follow-ups**: Introduces durable, serial turn queueing to app-server. Users can submit follow-ups while a turn is active; they are stored RPC-style and dispatched once the thread becomes idle.
2. **[PR #25283](https://github.com/openai/codex/pull/25283) & [#25276](https://github.com/openai/codex/pull/25276) — Thread state synchronization**: Refactors turn submission to cleanly separate message payloads from session-setting overrides, ensuring queued turns and direct turns see the same workspace context.
3. **[PR #25336](https://github.com/openai/codex/pull/25336), [#25337](https://github.com/openai/codex/pull/25337), [#25334](https://github.com/openai/codex/pull/25334), [#25339](https://github.com/openai/codex/pull/25339), [#25338](https://github.com/openai/codex/pull/25338), [#25335](https://github.com/openai/codex/pull/25335) — Workspace Mutations (6-part series)**: A massive series enabling safe runtime directory changes. Adds `set_working_directory` tool, canonicalized executor paths, ordered tool-call execution, approval prompts, and TUI `/cwd` commands.
4. **[PR #25168](https://github.com/openai/codex/pull/25168) & [#25155](https://github.com/openai/codex/pull/25155) — Multi-agent system pinned per thread**: Resolves the multi-agent communication system once per thread (V2 vs. Collab) so resume/fork/child-spawn don't create incompatible agents.
5. **[PR #25232](https://github.com/openai/codex/pull/25232) — Stable window generation across rollback/resume**: Keeps `x-codex-window-id` consistent after rollback, fork, and resume to fix remote cache invalidation bugs.
6. **[PR #25214](https://github.com/openai/codex/pull/25214) — Preserve explicit MCP dependency readiness**: Ensures that if a user explicitly requests a capability, the turn waits for the relevant MCP server rather than silently failing.
7. **[PR #25315](https://github.com/openai/codex/pull/25315) — TUI `/tokens` command**: Adds a native terminal command to inspect recent ChatGPT token activity without leaving the workflow.
8. **[PR #25340](https://github.com/openai/codex/pull/25340) — Animated TUI startup mascot**: Adds a styled 14×6 Unicode text mascot to the CLI startup banner for brand recognition.
9. **[PR #24805](https://github.com/openai/codex/pull/24805) — `CODEX_ENV_FILE` for SessionStart hooks**: Allows hooks to export shell state (e.g., `PATH`, virtualenv) that persists into later shell commands in the same session.
10. **[PR #17570](https://github.com/openai/codex/pull/17570) — Protect active arg0 helper dirs**: Writes `.pid` sentinel files to helper directories so the janitor doesn't delete directories owned by live processes, addressing a root cause of Windows/WSL shell failures.

## 5. Feature Request Trends

- **Project-scoped / workspace-scoped chat isolation**: Multiple issues ([#25319](https://github.com/openai/codex/issues/25319), [#17185](https://github.com/openai/codex/issues/17185)) strongly request isolating chat history and context to specific projects or VS Code workspaces rather than a global flat list.
- **Tree-based / branching conversation management**: [#12450](https://github.com/openai/codex/issues/12450) requests ChatGPT-style branch navigation to roll back to specific context nodes, drawing consistent community demand (9 comments, 6 thumbs-up).
- **Renamable task/thread titles**: [#12564](https://github.com/openai/codex/issues/12564) (110 thumbs-up, 77 comments) remains the highest-voted extension enhancement, asking for editable history titles.
- **Cross-machine automation/heartbeat support**: [#24640](https://github.com/openai/codex/issues/24640) requests that same-machine remote connections be allowed to create heartbeat automations.

## 6. Developer Pain Points

- **Windows Desktop fragility**: The Microsoft Store build is severely broken for a large swath of Windows users, manifesting as blank UIs, broken notification handling, EFS encryption conflicts, plugin cache invalidation, and WSL shell poisoning. This is the dominant pain point in the issue tracker right now.
- **Context compaction failures in long sessions**: Users hitting token limits in long-running sessions face repeated, unrecoverable compaction loops, effectively losing session state ([#10823](https://github.com/openai/codex/issues/10823), [#25282](https://github.com/openai/codex/issues/25282)).
- **Opaque billing and rate-limiting**: The boundary between weekly limits, credit consumption, and automatic API key fallback is unclear and causes unexpected charges ([#18018](https://github.com/openai/codex/issues/18018), [#19861](https://github.com/openai/codex/issues/19861)).
- **TUI input reliability**: Backspace key handling remains broken across popular Linux terminals, making prompt editing unreliable ([#17793](https://github.com/openai/codex/issues/17793), [#16716](https://github.com/openai/codex/issues/16716)).
- **Plugin/skills lifecycle instability**: Cache path persistence after plugin updates breaks skills in existing sessions, forcing users to start fresh threads ([#25285](https://github.com/openai/codex/issues/25285), [#24390](https://github.com/openai/codex/issues/24390)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-31

## 1. Today's Highlights
A new nightly release (`v0.45.0`) landed, bringing fixes for infinite editor spam loops and a fresh batch of community patches. Several high-priority PRs were opened to address critical security vulnerabilities, including command injection flaws and regex denial-of-service vectors. Meanwhile, the community and internal maintainers remain highly focused on agent reliability, particularly around subagent hangs, memory system edge cases, and shell execution deadlocks.

## 2. Releases
* **[v0.45.0-nightly.20260530.g013914071](https://github.com/google-gemini/gemini-cli/pull/27574)**
  * Added the changelog for `v0.44.0`.
  * **Fixed a spam loop bug:** Prevented the CLI from looping infinitely when the `preferredEditor` configuration is set to an invalid executable ([PR #25324](https://github.com/google-gemini/gemini-cli/pull/25324)).

## 3. Hot Issues
1. **Generalist agent hangs indefinitely ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409))**
   * *Why it matters:* A critical P1 bug where the agent completely freezes during simple tasks. Users are forced to manually instruct the model to avoid sub-agents. (👍 8)
2. **Subagent falsely reports success after hitting `MAX_TURNS` ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))**
   * *Why it matters:* The `codebase_investigator` agent hides its interruptions by masking `MAX_TURNS` timeouts as `status: "success"`, silently failing complex tasks.
3. **Shell execution gets stuck awaiting input ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))**
   * *Why it matters:* Another P1 bug where the terminal hangs indefinitely after a simple CLI command finishes, severely breaking core developer workflow. (👍 3)
4. **Auto Memory security and logging concerns ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525))**
   * *Why it matters:* The background memory extractor reads local transcripts and potentially exposes secrets to the model before redaction occurs.
5. **Subagents run without permission ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093))**
   * *Why it matters:* Users are reporting that subagents (like `generalist`) activate even when agent mode is explicitly disabled in settings.
6. **CLI encounters 400 error with > 128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))**
   * *Why it matters:* Users heavily utilizing MCP/extensions hit an API wall. The tool scope needs smarter limiting.
7. **Model frequently creates tmp scripts in random spots ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571))**
   * *Why it matters:* Creates massive workspace overhead for developers, forcing them to manually clean up random edit scripts before committing.
8. **Browser agent ignores `settings.json` overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267))**
   * *Why it matters:* Agents completely ignore `maxTurns` configurations, leading to uncontrolled execution loops.
9. **Investigate AST-aware file reads and search ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))**
   * *Why it matters:* A major feature investigation looking into AST tools to reduce token noise and improve codebase navigation efficiency.
10. **Robust component-level evaluations ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353))**
    * *Why it matters:* Tracking Epic for scaling internal behavioral eval tests to improve overall agent reliability.

## 4. Key PR Progress
1. **[PR #27575](https://github.com/google-gemini/gemini-cli/pull/27575): Prevent command injection in `findCommand`**
   * Replaced vulnerable `execSync` calls with safe `spawnSync` to block shell metacharacter injections in the IDE installer and editor utilities.
2. **[PR #27580](https://github.com/google-gemini/gemini-cli/pull/27580): Prevent stack overflow on large `@` inputs**
   * Swapped a regex-based parser for an iterative scanner to eliminate catastrophic backtracking (ReDoS) when handling large pasted text.
3. **[PR #27568](https://github.com/google-gemini/gemini-cli/pull/27568): Fallback for ripgrep execution failures**
   * Implements a conservative fallback to the legacy `GrepTool` if the optimized `ripgrep` tool is missing or crashes.
4. **[PR #27412](https://github.com/google-gemini/gemini-cli/pull/27412): Fix model fabrication on binary reads**
   * Prevents the model from hallucinating when `read_file` processes PDFs/binary files by explicitly handling binary content responses.
5. **[PR #27588](https://github.com/google-gemini/gemini-cli/pull/27588): Support WSL2 clipboard image paste**
   * Adds PowerShell interop for Windows Subsystem for Linux users, allowing images to be pasted directly into the CLI.
6. **[PR #27549](https://github.com/google-gemini/gemini-cli/pull/27549): Fix A2A Server SSE event framing**
   * Resolves a bug where streaming events lacked the required blank line delimiter, breaking spec-compliant `EventSource` clients.
7. **[PR #27555](https://github.com/google-gemini/gemini-cli/pull/27555): Stop merging shell history on backslashes**
   * Fixes a frustrating shell history bug where paths ending in `\` were silently merged with subsequent commands.
8. **[PR #27347](https://github.com/google-gemini/gemini-cli/pull/27347): Add command validation to `/statusline`**
   * Prevents natural language text from accidentally being saved as a raw shell command in settings.
9. **[PR #27115](https://github.com/google-gemini/gemini-cli/pull/27115): Restore extension after failed update**
   * Implements automatic backup/restoration of extensions if a new extension version fails to load. *(Closed/Merged recently)*
10. **[PR #27126](https://github.com/google-gemini/gemini-cli/pull/27126): Enable custom tools model for Vertex auth**
    * Fixes routing issues for Vertex AI users, ensuring they get the correct model resolutions. *(Closed/Merged recently)*

## 5. Feature Request Trends
* **AST-Aware Code Navigation:** A strong push from both users and maintainers to integrate AST-aware tools (like `tilth`, `glyph`, or AST grep) for smarter, token-efficient file reading and searching ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)).
* **Advanced Agent Infrastructure:** Continued momentum toward robust distributed agentic systems, seen in the tracking issues for Local Sub-agents ([#20195](https://github.com/google-gemini/gemini-cli/issues/20195)) and Remote Agents with background auth operations ([#20303](https://github.com/google-gemini/gemini-cli/issues/20303)).
* **Server-Driven Model Management:** A push to centralize model routing and configuration remotely via `LoadCodeAssist` rather than hardcoded client logic ([#20878](https://github.com/google-gemini/gemini-cli/issues/20878)).

## 6. Developer Pain Points
* **Agent Reliability & Deadlocks:** Developers are increasingly frustrated by agents hanging indefinitely during routine shell executions ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) and generalist agents freezing on basic folder operations ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)).
* **Memory/Context Reliability:** The new Auto Memory system is actively frustrating power users due to silent patch drops, infinite retries on low-signal sessions, and security anxieties regarding transcript logging ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)).
* **Ignored Configurations:** Users report a severe lack of control over agentic behavior, specifically sub-agents executing when explicitly disabled ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) and agents ignoring `settings.json` configurations ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-31

## 1. Today's Highlights
GitHub Copilot CLI shipped three rapid-fire patch releases (v1.0.57-1 through v1.0.57-3) focused on stability and quality-of-life improvements. Key highlights include a new `showTipsOnStartup` configuration option, significantly improved high-contrast diff readability, and a critical fix for session resume after crashes. The community remains highly active in the plugin and sub-agent ecosystems, with multiple new issues requesting deeper hook customization and parallel execution support.

## 2. Releases

### [v1.0.57-3](https://github.com/github/copilot-cli/releases/tag/v1.0.57-3)
- **Improved:** High-contrast diff backgrounds now use darker colors to improve text readability.
- **Fixed:** Session resume works correctly after a crash that left partial data in the session log.

### [v1.0.57-2](https://github.com/github/copilot-cli/releases/tag/v1.0.57-2)
- General fixes and changes (undocumented in release notes).

### [v1.0.57-1](https://github.com/github/copilot-cli/releases/tag/v1.0.57-1)
- **Added:** New `showTipsOnStartup` setting to control whether startup tips are displayed.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#1999 — Cannot enter `@` on German keyboard (Alt-Gr + q)](https://github.com/github/copilot-cli/issues/1999) | A long-standing keyboard input regression (7 comments) making the CLI unusable for German-layout users. Remains OPEN since March 2026. |
| 2 | [#2203 — Allow switching to autopilot mode mid-task](https://github.com/github/copilot-cli/issues/2203) | Highly requested (👍 9) feature to restore pre-0.0.421 behavior of toggling autopilot via Shift+Tab during active tasks. |
| 3 | [#3590 — PreToolUse hook `permissionDecision: "ask"` auto-approved by TUI](https://github.com/github/copilot-cli/issues/3590) | Critical permission bypass: hooks returning "ask" are instantly auto-approved since v1.0.53, undermining security guardrails. |
| 4 | [#3547 — Background sub-agent silently hangs at `total_turns=0` with `gpt-5.5`](https://github.com/github/copilot-cli/issues/3547) | Sub-agents using the latest `gpt-5.5` model start but never execute, blocking orchestration workflows. |
| 5 | [#3589 — Only last `additionalContext` from multiple hooks is injected](https://github.com/github/copilot-cli/issues/3589) | When multiple `sessionStart`/`subagentStart` hooks emit `additionalContext`, only the last value survives — a data loss bug for complex plugin setups. |
| 6 | [#3576 — Windows: stdio MCP servers fail to spawn (ENOENT/EINVAL)](https://github.com/github/copilot-cli/issues/3576) | All stdio MCP servers using `npx` fail on Windows in v1.0.56-1, a regression from v1.0.51. |
| 7 | [#3583 — MCP silent token refresh sends v1 `resource=` instead of v2 `scope=`](https://github.com/github/copilot-cli/issues/3583) | Azure AD OAuth flows break after ~60 minutes due to stale token refresh parameters, affecting enterprise MCP integrations. |
| 8 | [#3395 / #3586 — Copy stops working since v1.0.49](https://github.com/github/copilot-cli/issues/3395) | Linux clipboard integration regression (4 comments); users must downgrade to v1.0.48 as a workaround. |
| 9 | [#3591 — Accessibility regression: user prompt visual distinction removed](https://github.com/github/copilot-cli/issues/3591) | The fix for #3390 inadvertently removed background highlights from submitted prompts, hurting cognitive parsing for accessibility-dependent users. |
| 10 | [#3575 — Hooks not firing when resuming a session](https://github.com/github/copilot-cli/issues/3575) | All hook events (including `agentStop` and `notification`) stop firing after any form of session resume, breaking automation pipelines. |

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours. The team appears focused on issue triage and patch releases.

---

## 5. Feature Request Trends

| Trend | Representative Issues | Signal |
|-------|----------------------|--------|
| **Sub-agent orchestration & parallelism** | [#3568](https://github.com/github/copilot-cli/issues/3568), [#3547](https://github.com/github/copilot-cli/issues/3547), [#2923](https://github.com/github/copilot-cli/issues/2923) | Developers are building multi-agent orchestration patterns and need first-class parallel execution, reliable status notifications, and model compatibility. |
| **Richer hook & plugin scoping** | [#3579](https://github.com/github/copilot-cli/issues/3579), [#3574](https://github.com/github/copilot-cli/issues/3574), [#3589](https://github.com/github/copilot-cli/issues/3589), [#3577](https://github.com/github/copilot-cli/issues/3577) | Community wants project-level hook scoping (monorepo support), mandatory prompt injection for sub-agents, and mid-turn tool list rebuilds for dynamic MCP flows. |
| **Session & identity management** | [#3566](https://github.com/github/copilot-cli/issues/3566), [#3571](https://github.com/github/copilot-cli/issues/3571), [#3581](https://github.com/github/copilot-cli/issues/3581) | Requests for session name/ID in statusline (multi-terminal workflows), default agent persistence, and local machine-readable session logs. |
| **Autopilot mode flexibility** | [#2203](https://github.com/github/copilot-cli/issues/2203) (👍 9) | Strong demand for mid-task mode switching, restored from pre-0.0.421 behavior. |
| **Enterprise & org-level agents** | [#3572](https://github.com/github/copilot-cli/issues/3572) | Org-level custom agents should be discoverable outside of GitHub-hosted repos. |

---

## 6. Developer Pain Points

1. **Keyboard input regressions are piling up.** German-layout `@` entry ([#1999](https://github.com/github/copilot-cli/issues/1999)), `Ctrl+C` and `Ctrl+Shift+J` failures in tmux/Ghostty ([#3587](https://github.com/github/copilot-cli/issues/3587)), and cmd+click opening links twice ([#3580](https://github.com/github/copilot-cli/issues/3580)) indicate fragile input handling across platforms.

2. **MCP integration is fragile on multiple fronts.** Windows spawn failures ([#3576](https://github.com/github/copilot-cli/issues/3576)), OAuth token refresh bugs ([#3583](https://github.com/github/copilot-cli/issues/3583)), disabled servers being ignored ([#3582](https://github.com/github/copilot-cli/issues/3582)), and false policy blocks ([#3162](https://github.com/github/copilot-cli/issues/3162)) collectively erode confidence in the MCP ecosystem.

3. **Session resilience remains incomplete.** Despite the v1.0.57-3 fix for crash recovery, hooks still don't fire on resume ([#3575](https://github.com/github/copilot-cli/issues/3575)), and very long sessions hit retry-exhausted model failures ([#3588](https://github.com/github/copilot-cli/issues/3588)). Users coming from Claude Code and Gemini expect more robust session logging and recovery.

4. **Permission model has a silent bypass.** The TUI auto-approving `permissionDecision: "ask"` hooks ([#3590](https://github.com/github/copilot-cli/issues/3590)) is a security-relevant bug that could allow unintended tool execution in enterprise environments.

5. **Accessibility took a step backward.** The removal of prompt background highlighting ([#3591](https://github.com/github/copilot-cli/issues/3591)) and the broken `bell` setting ([#3573](https://github.com/github/copilot-cli/issues/3573)) suggest accessibility testing needs stronger integration into the release process.

---

*Data sourced from [github.com/github/copilot-cli](https://github.com/github/copilot-cli) on 2026-05-31.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

## Kimi Code CLI Community Digest — 2026-05-31

A concise update for developers building with or contributing to MoonshotAI's Kimi Code CLI.

### 1. Today's Highlights
Community tensions are rising regarding Moonshot AI's product strategy, with a highly debated issue questioning the decision to fork or replace `kimi-cli` with a new "Kimi Code" product rather than iterating on the existing tool. On the technical front, significant progress is being made on the Agent Communication Protocol (ACP) integration, with a series of stacked PRs aiming to improve session history replay, streaming, and permission handling.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
*   **Product Strategy Backlash:** In [#2381](https://github.com/MoonshotAI/kimi-cli/issues/2381), user *QuantumLiu* expresses deep frustration over Moonshot AI abandoning the original `kimi-cli` for "Kimi Code." The community echoes concerns that splitting the codebase damages trust for users relying on it for production workflows.
*   **API Risk Rejection Bug:** In [#2402](https://github.com/MoonshotAI/kimi-cli/issues/2402), *thoughtworld* reports a high-risk API rejection (400 Bad Request) during context compaction using Kimi-k2.6 on Windows, highlighting a potential issue with Moonshot's backend content filtering.
*   **Cross-Tool Compatibility:** Developer *JIRBOY* requests `CLAUDE.md` auto-discovery alongside `AGENTS.md` in [#2401](https://github.com/MoonshotAI/kimi-cli/issues/2401), aiming to streamline workflows for developers using both Kimi and Claude Code on the same codebase.
*   **Hook Auto-Approval:** In [#2154](https://github.com/MoonshotAI/kimi-cli/issues/2154) (now closed), *sdkks* proposed a `PermissionRequest` hook event to programmatically auto-approve safe operations, moving beyond the current manual confirmation requirement.
*   **TUI Prompt Accessibility:** Issue [#2155](https://github.com/MoonshotAI/kimi-cli/issues/2155) (closed) highlights a UX problem where hardcoded emoji prompts (✨, 💫, 📋) break terminal search and copy-paste workflows.
*   **Superpowers Integration:** User *zhaoyim* requests native integration of the `superpowers` framework into Kimi CLI in [#2400](https://github.com/MoonshotAI/kimi-cli/issues/2400) to match functionality seen in other open-source tools.

### 4. Key PR Progress
*   **ACP Permission Mode Switching:** [PR #2364](https://github.com/MoonshotAI/kimi-cli/pull/2364) by *huntharo* introduces protocol-level permission mode switching, enabling more dynamic access control during Kimi sessions.
*   **ACP Session History Replay:** [PR #2363](https://github.com/MoonshotAI/kimi-cli/pull/2363) fixes how ACP handles loaded sessions, ensuring restored history is properly replayed to the agent.
*   **ACP Streamed Content Message IDs:** [PR #2359](https://github.com/MoonshotAI/kimi-cli/pull/2359) adds missing `messageId` values to streamed content, fixing integration compatibility for third-party ACP clients like PwrAgent.
*   **Pasted Text Bug Fix:** [PR #2388](https://github.com/MoonshotAI/kimi-cli/pull/2388) resolves a frustrating bug where pasted text placeholders were lost during session history recall.
*   **Shell Completion Enhancements:** [PR #776](https://github.com/MoonshotAI/kimi-cli/pull/776) (closed) and [PR #777](https://github.com/MoonshotAI/kimi-cli/pull/777) (closed) by *Grin1024* brought improvements to tab navigation and automatic spacing after file completion.

### 5. Feature Request Trends
*   **Ecosystem Interoperability:** A clear trend is emerging around compatibility. Developers want Kimi CLI to seamlessly co-exist with other AI tools, evidenced by requests to support standard files like `CLAUDE.md` and external rule frameworks like `superpowers`.
*   **Headless / Programmatic Control:** Users are pushing for less manual intervention. Requests for hook-based auto-approvals and ACP improvements indicate a strong desire to integrate Kimi CLI deeply into automated CI/CD or background-agent pipelines.
*   **Terminal UI Refinements:** Developers continue to advocate for strict adherence to standard terminal behaviors (e.g., removing hardcoded emojis in favor of plain text symbols) to ensure compatibility with advanced terminal multiplexers and search tools.

### 6. Developer Pain Points
*   **Project Continuity Doubts:** The most prominent pain point isn't technical, but strategic. Developers are heavily concerned about Moonshot AI abandoning established projects (the original `kimi-cli`) in favor of rewrites, which erodes trust for teams relying on these tools for daily productivity.
*   **Mandatory Manual Approvals:** The lack of a programmatic "auto-approve" mechanism for known-safe operations introduces friction, limiting the CLI's effectiveness in fast-paced, automated coding environments.
*   **Opaque API Errors:** Cryptic backend errors, such as the `high risk` APIStatusError during routine compaction, create frustrating debugging experiences for end-users.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-31

## 1. Today's Highlights

The OpenCode community saw a massive spike in activity surrounding model compatibility and reasoning display bugs, particularly with Anthropic's Opus 4.7+ and various OpenAI-compatible providers (qwen, step, mimo). Several high-impact PRs were opened to address gateway adaptive reasoning defaults, MCP OAuth binding issues, and TUI keyboard focus management. A clear trend is emerging around agentic features—dynamic workflows, inline skill invocations, and MCP tool context optimization—signaling OpenCode's accelerating transition from a simple coding assistant into a full-fledged agentic IDE.

---

## 2. Releases

- **pr-29948-screenshots**: Image assets for PR #29948 (command palette fix). No new versioned release was published in the last 24 hours.

---

## 3. Hot Issues

1. **[#29079](https://github.com/anomalyco/opencode/issues/29079) — GPT Models take too long to respond** (111 comments, 👍 48)
   GPT 5.4 (xhigh) suffers unpredictable multi-minute latencies on simple prompts. The community is actively debugging whether this is a provider-side routing issue, an OpenCode middleware problem, or an adaptive reasoning timeout. High engagement signals this affects many users daily.

2. **[#2242](https://github.com/anomalyco/opencode/issues/2242) — Sandbox the agent** (39 comments, 👍 49)
   A long-running request for filesystem sandboxing (àla `seatbelt` on macOS). Users want to restrict agent terminal commands to the project directory. The high 👍 count (49) and longevity (open since Aug 2025) indicate strong community demand for safety boundaries.

3. **[#6680](https://github.com/anomalyco/opencode/issues/6680) — View archived sessions on desktop** (34 comments, 👍 11)
   Users can't access older/archived sessions from the desktop UI. This ties into a cluster of TUI session picker bugs and reflects a broader usability gap in session management.

4. **[#8554](https://github.com/anomalyco/opencode/issues/8554) — RLM (Recursive Language Model) pattern support** (20 comments, 👍 16, CLOSED)
   Proposed built-in tool for programmatic sub-LLM calls in loops. Closed but influential—this pattern is being referenced in newer dynamic workflow discussions.

5. **[#20802](https://github.com/anomalyco/opencode/issues/20802) — Custom OpenAI-compatible providers: image attachments fail** (14 comments, 👍 6)
   Vision-capable models on custom providers (e.g., `longent`) don't receive image attachments correctly. Critical for users relying on non-standard providers.

6. **[#8625](https://github.com/anomalyco/opencode/issues/8625) — MCP search tool to reduce context bloat** (9 comments, 👍 61)
   Auto-defer MCP tools when descriptions exceed 10% of context window, with on-demand discovery. Highest 👍 count (61) among feature requests—MCP context pollution is a top developer concern.

7. **[#13877](https://github.com/anomalyco/opencode/issues/13877) — TUI /sessions picker only shows recent sessions** (8 comments, 👍 3)
   The TUI session picker is hard-coded to ~30 days of history. This bug has been reported independently by multiple users (#16270, #16733) and is tracked to `sync.tsx` filtering by `Date.now() - 30 * 24 * 60 * 60 * 1000`.

8. **[#30002](https://github.com/anomalyco/opencode/issues/30002) — opencode-go upstream idle timeout on reasoning models** (4 comments, CLOSED)
   mimo-v2.5-pro with Effort=Max triggers upstream idle timeouts. Highlights the tension between long-reasoning models and OpenCode Go's connection management.

9. **[#30010](https://github.com/anomalyco/opencode/issues/30010) — StepFun provider missing step-3.7-flash** (3 comments, CLOSED)
   New StepFun model `step-3.7-flash` isn't registered, causing URL parse failures. A recurring pattern: providers add models faster than OpenCode can register them.

10. **[#30005](https://github.com/anomalyco/opencode/issues/30005) — Workspace working directory not updated after move** (2 comments)
    Moving a project to a new path leaves the workspace pointing to the old location. A practical usability bug affecting project portability.

---

## 4. Key PR Progress

1. **[#30027](https://github.com/anomalyco/opencode/pull/30027) — Force display summarized for gateway Opus 4.7+ adaptive reasoning**
   Fixes the critical regression where Opus 4.7/4.8 flipped `thinking.display` default to `"omitted"`, causing invisible reasoning traces. Directly addresses the #29079 latency confusion.

2. **[#30000](https://github.com/anomalyco/opencode/pull/30000) — Prevent shortcut fall-through when modal dialogs are open**
   Fixes keyboard focus loss when TUI question prompts appear over command palette or other dialogs. Closes #29999.

3. **[#30023](https://github.com/anomalyco/opencode/pull/30023) — Reject unsupported image MIME attachments**
   Prevents `.ico` and other unsupported MIME types from being replayed to providers that can't handle them. Related to #20802 vision attachment issues.

4. **[#30022](https://github.com/anomalyco/opencode/pull/30022) — Bind MCP OAuth callback to IPv4 loopback**
   Fixes OAuth flow failures on Linux where the callback server bound to IPv6 wildcard. A subtle but critical fix for MCP server authentication.

5. **[#30021](https://github.com/anomalyco/opencode/pull/30021) — Distinguish unknown model pricing**
   Missing pricing from `models.dev` was treated as zero cost, causing misleading cost displays. Now properly surfaces "unknown" pricing.

6. **[#30019](https://github.com/anomalyco/opencode/pull/30019) — TUI notifications for MCP plugins**
   New MCP/TUI notification bridge allowing MCP servers to push notifications to the active TUI session. Enables richer plugin interactivity.

7. **[#29217](https://github.com/anomalyco/opencode/pull/29217) — Inline $skill invocations with SKILL pill + pasteText**
   Typing `$` in the prompt composer surfaces available skills as autocomplete pills. Closes 5 related issues—major UX improvement for skill usage.

8. **[#29789](https://github.com/anomalyco/opencode/pull/29789) — Dynamic workflows (new Claude Code feature)**
   Project-local workflows runnable via `/workflow <name> arg=value` with inspection from `/workflow list`. Brings Claude Code-style workflow automation to OpenCode.

9. **[#27939](https://github.com/anomalyco/opencode/pull/27939) — Configurable fallback model chain**
   When the primary model fails, automatically falls back through a user-configured chain. Directly mitigates the reliability issues seen in #29079.

10. **[#29497](https://github.com/anomalyco/opencode/pull/29497) — Bedrock /connect AWS credential chain**
    Fixes `/connect` for Amazon Bedrock to support IAM-based auth instead of always prompting for an API key. Essential for enterprise AWS users.

---

## 5. Feature Request Trends

- **MCP context optimization (#8625 — 61 👍)**: The single most upvoted request. Users want MCP tool descriptions to be deferred and discovered on-demand rather than consuming valuable context window space. Expect this to drive architectural changes.

- **Session management overhaul (#6680, #13877, #16270, #16733)**: A cluster of 4+ issues about TUI session history, archival, and search. The 30-day hard limit in the TUI picker is a recurring pain point. Users want full session history parity between CLI and TUI.

- **Agent sandboxing and safety (#2242 — 49 👍)**: Filesystem and command sandboxing remains the second-highest upvoted open request. As agentic capabilities grow, safety boundaries become critical.

- **Integrated browser for desktop (#26772)**: Request for an in-app browser workspace for inspecting and interacting with web content generated by agents.

- **RTL language support (#16875, #26915)**: Persian/Arabic/Hebrew text rendering is broken—characters appear reversed and disconnected. Two separate issues tracking this.

- **Hashline edit mode (#13393 — 28 👍)**: A faster, more targeted edit mode inspired by oh-my-pi. Strong community interest in alternative editing strategies.

---

## 6. Developer Pain Points

- **Provider compatibility is a constant struggle.** Multiple issues (#29754 qwen 401 errors, #29535 qwen freezing, #30010 missing step model, #30002 mimo timeouts) show that the rapid pace of model releases outstrips OpenCode's ability to register and handle them. The `models.dev` pricing gap (#30021) exacerbates this.

- **Reasoning model timeouts are a daily frustration.** The combination of Effort=Max, adaptive reasoning, and upstream idle timeouts creates a fragile chain (#29079 with 111 comments, #30002). Users can't tell if delays are the model "thinking" or a broken connection.

- **Skill path resolution is unreliable.** Issues #6900 and #18370 both report skills failing to find scripts because paths are resolved relative to workspace root instead of the skill directory. This makes skills non-portable and frustrating to develop.

- **Multi-session interference.** Issue #21372 reports that file change summaries leak across concurrent sessions, showing edits from other sessions. This breaks isolation expectations when running parallel agents.

- **TUI keyboard focus management.** Issues #26625 (`/timestamps` has no effect) and #29999 (dialog focus loss) reveal that TUI mode interactions between dialogs, question prompts, and autocomplete are fragile. The two PRs addressing this (#30000, #29948) are a step in the right direction.

- **Workspace portability.** Issue #30005 (stale working directory after move) and session crash issues (#29989) suggest that workspace state management has edge cases that surface under real-world usage patterns like project reorganization.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-31

## 1. Today's Highlights
Pi rolls out **v0.78.0**, introducing named startup sessions (`--name` / `-n`) and clickable file tool paths (OSC 8 hyperlinks) to improve multi-session workflows and terminal UX. The community remains highly active on the provider front: Anthropic’s Opus 4.8 adaptive thinking is causing 400 errors in multi-turn chats, while OpenRouter reasoning instruction roles and large session file handling are also under the spotlight. TUI stability improvements dominate the PR pipeline, with fixes for overlay focus, Kitty image rendering, and oversized line crashes.

## 2. Releases

### v0.78.0
- **Named startup sessions** — Set a session display name via `--name` / `-n` across interactive, print, JSON, and RPC modes. ([docs/sessions.md](https://github.com/badlogic/pi-mono/blob/main/docs/sessions.md#naming-sessions))
- **Clickable file tool paths** — OSC 8 hyperlinks in tool titles let you click file paths directly in supported terminals.

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [#5223 — Anthropic provider modifies thinking blocks, 400 with Opus 4.8](https://github.com/earendil-works/pi/issues/5223) | Multi-turn Claude Opus 4.8 conversations with adaptive thinking break mid-session. Directly affects power users on the latest Anthropic models. 👍 2 |
| 2 | [#5089 — `timeoutMs` not respected past a certain value](https://github.com/earendil-works/pi/issues/5089) | Long-running operations (large file reads on CPU-bound models) ignore timeout settings. 19 comments indicate broad impact on local-model users. |
| 3 | [#5159 — OpenRouter + Moonshot Kimi K2.6 "tokenization failed"](https://github.com/earendil-works/pi/issues/5159) | Every request to Kimi K2.6 via OpenRouter fails with a 400, even bare invocations. Points to a Pi-side request formatting issue. |
| 4 | [#5231 — Crash on opening very large session files (>600MB)](https://github.com/earendil-works/pi/issues/5231) | Hits Node.js string length limit (`0x1fffffe8` chars). Blocks users running multi-day `/goal` sessions. |
| 5 | [#5044 — OOM on `--resume` with large sessions](https://github.com/earendil-works/pi/issues/5044) | `buildSessionInfo` loads entire JSONL into memory just to list sessions. Proposal: stream-based implementation. |
| 6 | [#5226 — SDK embed requires package-adjacent `package.json` at runtime](https://github.com/earendil-works/pi/issues/5226) | Breaks bundled Node apps that embed Pi as a library. A blocker for SDK adoption. |
| 7 | [#5046 — Persist thinking level to session only, not global settings](https://github.com/earendil-works/pi/issues/5046) | Frequent thinking-level changes pollute `~/.pi/agent/settings`. Users want per-session scoping. |
| 8 | [#5142 — Extension API additions for non-TUI remote clients](https://github.com/earendil-works/pi/issues/5142) | Requests `executeInputLine`, programmatic permission responses, and overlay control for phone/web bridges. Signals growing ecosystem beyond the terminal. |
| 9 | [#5084 — Allow/disallow built-in tools in `settings.json`](https://github.com/earendil-works/pi/issues/5084) | Fine-grained tool permissions (`"builtinToolAllowance": {"grep": false}`) without CLI flags. 👍 2 |
| 10 | [#5177 — Cannot stop model with Escape or Ctrl-C](https://github.com/earendil-works/pi/issues/5177) | Model continues generating for many seconds after interrupt. Core UX regression that frustrates daily use. |

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#5233 — fix(tui): draw Kitty images after reserved rows](https://github.com/earendil-works/pi/pull/5233) | Fixes Kitty inline images rendering as only a top strip in WezTerm. Regression from the tall-image-placement refactor. |
| 2 | [#5235 — Feat/issue 5129 TUI overlay focus](https://github.com/earendil-works/pi/pull/5235) | Prevents focus returning to editor while an overlay is still visible, which left overlays rendered but non-interactive. |
| 3 | [#5224 — fix(tui): truncate oversized lines instead of crashing](https://github.com/earendil-works/pi/pull/5224) | Guards against `Rendered line exceeds terminal width` crashes caused by ANSI/OSC sequence width drift. |
| 4 | [#5221 — Fix OpenRouter reasoning instruction role](https://github.com/earendil-works/pi/pull/5221) | Uses `system` messages for OpenRouter reasoning requests instead of `developer`. Aligns with OpenRouter's actual API schema. |
| 5 | [#5234 — Add `command_start` hook to extension system](https://github.com/earendil-works/pi/pull/5234) | New hook fires before any extension command handler; return `{ cancel: true }` to prevent execution. Mirrors existing `tool_call` and `input` hooks. |
| 6 | [#5197 — fix(coding-agent): guard compaction continue() on assistant-tailed context](https://github.com/earendil-works/pi/pull/5197) | Prevents `"Cannot continue from message role: assistant"` crash after auto-compaction when rebuilt context ends with an assistant message. |
| 7 | [#5189 — OSC 8 hyperlinks in file tool paths](https://github.com/earendil-works/pi/pull/5189) | Implements the clickable-paths feature from v0.78.0 for `read`/`write`/`edit`/`ls` tool titles. |
| 8 | [#5196 — fix(ai): handle OpenCode reasoning params](https://github.com/earendil-works/pi/pull/5196) | Fixes reasoning parameter handling for OpenCode models, addressing broader provider compatibility. |
| 9 | [#5210 — fix(questionnaire): word-wrap instead of truncating](https://github.com/earendil-works/pi/pull/5210) | Replaces `truncateToWidth` with proper word-wrap in the questionnaire example extension. |
| 10 | [#5195 — fix(coding-agent): buffer early input before prompt loop](https://github.com/earendil-works/pi/pull/5195) | Prevents lost input submitted during the gap between TUI start and main prompt loop initialization. |

## 5. Feature Request Trends

1. **Session-level configuration scoping** — Thinking level, tool permissions, and model preferences should persist per-session rather than globally ([#5046](https://github.com/earendil-works/pi/issues/5046), [#5084](https://github.com/earendil-works/pi/issues/5084)).
2. **Remote & non-TUI client support** — Driving Pi from phone apps, web bridges, or headless environments via richer extension APIs ([#5142](https://github.com/earendil-works/pi/issues/5142), [#5232](https://github.com/earendil-works/pi/pull/5232)).
3. **New provider integrations** — Anthropic Vertex AI ([#4449](https://github.com/earendil-works/pi/issues/4449)), OpenAI Codex Fast mode ([#4643](https://github.com/earendil-works/pi/issues/4643)), GitLab Duo custom provider improvements ([#5201](https://github.com/earendil-works/pi/issues/5201)).
4. **Large-session resilience** — Streaming reads, lazy loading, and crash-proof handling for session files that grow into hundreds of megabytes ([#5044](https://github.com/earendil-works/pi/issues/5044), [#5231](https://github.com/earendil-works/pi/issues/5231)).

## 6. Developer Pain Points

- **Interrupt & cancellation reliability** — Escape and Ctrl-C not stopping model generation promptly ([#5177](https://github.com/earendil-works/pi/issues/5177)), coupled with late background process output crashing the accumulator ([#5208](https://github.com/earendil-works/pi/issues/5208)).
- **TUI rendering edge cases** — Terminal width overflow crashes ([#5224](https://github.com/earendil-works/pi/pull/5224)), ANSI control sequence stack overflows ([#5185](https://github.com/earendil-works/pi/issues/5185)), IME candidate window misplacement ([#5200](https://github.com/earendil-works/pi/issues/5200)), and severe iTerm2 redraw lag ([#5199](https://github.com/earendil-works/pi/issues/5199)).
- **Provider-specific request formatting** — Anthropic thinking block mutation ([#5223](https://github.com/earendil-works/pi/issues/5223)), OpenRouter system role mismatch ([#5221](https://github.com/earendil-works/pi/pull/5221)), and Bedrock empty end-turn handling ([#4210](https://github.com/earendil-works/pi/issues/4210)) indicate that Pi's provider abstraction layer needs more robust normalization.
- **SDK embedding friction** — Runtime `package.json` dependency ([#5226](https://github.com/earendil-works/pi/issues/5226)) and flat vs. nested session directory confusion ([#5040](https://github.com/earendil-works/pi/issues/5040)) complicate integration into larger applications.
- **Windows terminal compatibility** — Viewport locked at top during rendering, blocking permission prompts ([#5192](https://github.com/earendil-works/pi/issues/5192)).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-31

## 1. Today's Highlights
Qwen Code rolled out the **v0.17.0-nightly.20260530** release, featuring a critical bug fix for false "compressed turn" errors that occurred during mid-turn message interruptions. The community saw a massive surge in architectural improvements, with contributors submitting multiple PRs to tackle **Out-Of-Memory (OOM) issues** on resumed sessions, stabilize **MCP connections**, and drop the deprecated **Qwen OAuth** authentication method in favor of more reliable flows for JetBrains IDE users.

## 2. Releases
* **v0.17.0-nightly.20260530.c699738f9**
  * **fix(rewind):** Resolved an issue where mid-turn message interruptions would trigger a false "compressed turn" error, improving session stability.
  * Release notes available via `.github/release.yml`.

## 3. Hot Issues
1. **[OPEN] [OOM on Resume](https://github.com/QwenLM/zwen-code/issues/4624)**: `qwen --resume` causes child process memory to grow uncontrollably and crash. High impact for long-running sessions.
2. **[OPEN] [Critical OAuth Trap on JetBrains](https://github.com/QwenLM/zwen-code/issues/4637)**: Users with lingering `qwen-oauth` settings are trapped in a dead-end auth loop in IntelliJ/Rider. Flagged as P1.
3. **[OPEN] [macOS Auto-Update EACCES](https://github.com/QwenLM/zwen-code/issues/4627)**: Global npm installations using `sudo` fail to auto-update due to root permission issues.
4. **[OPEN] [Rider Login Loop](https://github.com/QwenLM/zwen-code/issues/4493)**: JetBrains Rider users experience infinite redirects when attempting to log in to Qwen Code.
5. **[OPEN] [MCP Connection Instability](https://github.com/QwenLM/zwen-code/issues/4641)**: Windows users report highly erratic behavior where only a random subset of configured MCP servers connect per session.
6. **[OPEN] [Local Ollama Ignored](https://github.com/QwenLM/zwen-code/issues/2724)**: IntelliJ 2026.1 forces cloud login even when local Ollama models are selected in settings.
7. **[OPEN] [Tasks UI Stuck](https://github.com/QwenLM/zwen-code/issues/4631)**: Completed daemon tasks persist in the UI and do not disappear automatically.
8. **[OPEN] [Context Injection Request](https://github.com/QwenLM/zwen-code/issues/4645)**: Feature request for SubAgents to automatically receive `SESSION ID` and `AGENT ID` as environment variables during script execution.
9. **[OPEN] [Smart Model Routing](https://github.com/QwenLM/zwen-code/issues/4640)**: Request for a "local help" feature to route simple tasks to local models and complex tasks to the API.
10. **[OPEN] [Statusline Preset Ordering](https://github.com/QwenLM/zwen-code/issues/4633)**: Toggling statusline presets messes up display order; users want a fixed priority sequence.

## 4. Key PR Progress
1. **[OPEN] [Fix OOM via Shallow Cloning](https://github.com/QwenLM/zwen-code/pull/4644)**: Replaces heavy `structuredClone` on deep chat history with shallow/tail variants to prevent memory exhaustion on resume.
2. **[OPEN] [Drop Deprecated Qwen OAuth](https://github.com/QwenLM/zwen-code/pull/4639)**: Removes the discontinued `qwen-oauth` from ACP auth methods to resolve the JetBrains auth loop issue.
3. **[OPEN] [Standalone Auto-Update Fallback](https://github.com/QwenLM/zwen-code/pull/4629)**: Introduces a standalone updater that downloads, verifies (SHA256), and atomically replaces installations when npm global prefix permissions fail.
4. **[OPEN] [Linux Clipboard Fix for WSL2/Wayland](https://github.com/QwenLM/zwen-code/pull/4647)**: Replaces the broken X11-dependent native clipboard module with platform-native tools (`wl-paste`/`xclip`).
5. **[OPEN] [Fix Qwen3 Thinking Parameter](https://github.com/QwenLM/zwen-code/pull/4505)**: Ensures `enable_thinking` is correctly emitted for DashScope models when reasoning is explicitly disabled.
6. **[OPEN] [Daemon Inline Media Clamping](https://github.com/QwenLM/zwen-code/pull/4646)**: Sanitizes oversized inline media (>10MB) to prevent daemon request explosions and preserve token budgets.
7. **[OPEN] [Daemon Workspace Service Extraction](https://github.com/QwenLM/zwen-code/pull/4563)**: Major refactor extracting workspace capabilities from `AcpSessionBridge` into a dedicated `DaemonWorkspaceService` facade.
8. **[OPEN] [Atomic File Writes Phase 2](https://github.com/QwenLM/zwen-code/pull/4333)**: Replaces bare `fs.writeFile` in security-sensitive paths with crash-atomic helpers, ensuring JSONL session writer durability.
9. **[OPEN] [Enforce Adjacent Tool Results](https://github.com/QwenLM/zwen-code/pull/4622)**: Cleans orphaned tool calls to ensure tool responses are strictly contiguous with their corresponding assistant messages.
10. **[OPEN] [CPU Profiling Support](https://github.com/QwenLM/zwen-code/pull/4620)**: Adds Chrome DevTools-compatible `.cpuprofile` generation via environment variables or `SIGUSR1` signal toggling for performance debugging.

## 5. Feature Request Trends
* **Smart / Local-First Routing:** High demand for architecture supporting automatic routing between local inference engines (like Ollama) for basic tasks and cloud APIs for complex logic.
* **Sub-Agent Context Awareness:** Developers want SubAgents to be inherently aware of their execution environment (e.g., automatic injection of Session/Agent IDs) to enable better tracing and auditing.
* **Robust Auto-Updates:** A strong push for standalone update mechanisms that bypass npm permission limitations, ensuring seamless upgrades across different OS environments.

## 6. Developer Pain Points
* **Authentication Instability in IDEs:** JetBrains users are highly frustrated by OAuth infinite loops, 401 errors, and the tool ignoring local models in favor of forced cloud logins.
* **Memory Leaks:** `--resume` flag causing unbounded memory growth due to deep-cloning chat history is a major blocker for developers using long-running daemon sessions.
* **MCP Flakiness on Windows:** Unpredictable MCP server connections degrading the reliability of tool-use in automated workflows.
* **Native OS Integrations:** Broken copy/paste (clipboard) workflows in modern Linux environments (WSL2/Wayland) and annoying un-dismissible CLI loading messages hindering the developer experience.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the community digest for DeepSeek TUI (CodeWhale) based on the provided GitHub data.

# DeepSeek TUI (CodeWhale) Community Digest - 2026-05-31

## 1. Today's Highlights
Community development today focused heavily on expanding CodeWhale's ecosystem and cross-platform compatibility. Key contributions include native search alternatives for Chinese networks, crucial sub-agent bug fixes, and new LSP support for Java and Vue. Meanwhile, the issue tracker saw significant activity around terminal rendering bugs, CJK (Chinese, Japanese, Korean) input compatibility, and configuration path fragmentation.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Hot Issues
Here are the 10 most noteworthy issues currently being tracked:

1. **[OPEN] Sub-agents lack MCP tool access** ([#2362](https://github.com/Hmbown/CodeWhale/issues/2362))
   Sub-agents spawned via `agent_open` cannot utilize parent-session MCP tools. This architectural limitation breaks complex agentic workflows that rely on nested tool-calling.
2. **[OPEN] China network restrictions blocking DuckDuckGo** ([#2376](https://github.com/Hmbown/CodeWhale/issues/2376)) & **Evaluate switching search providers** ([#2132](https://github.com/Hmbown/CodeWhale/issues/2132))
   Users in China are requesting alternatives to DuckDuckGo/Bing due to network restrictions. Maintainers are evaluating switching the default `web_search` provider to ensure global reliability.
3. **[OPEN] CJK Input Method Incompatibility** ([#2323](https://github.com/Hmbown/CodeWhale/issues/2323))
   Using Chinese input methods causes UI rendering glitches and preempts modal inputs. Fixing this is critical for expanding adoption in the Asian developer market.
4. **[OPEN] Terminal content rendering chaos** ([#2374](https://github.com/Hmbown/CodeWhale/issues/2374))
   Heavy continuous usage leads to overlapping and scrambled terminal UI elements, pointing to underlying state-management or layout bugs in the TUI framework.
5. **[OPEN] Interactive REPL exits after initial prompt** ([#2370](https://github.com/Hmbown/CodeWhale/issues/2370))
   Launching `codewhale` with an initial `--prompt` currently terminates the session upon completion instead of dropping the user into an interactive REPL.
6. **[OPEN] `tty:true` fails to set controlling terminal** ([#2372](https://github.com/Hmbown/CodeWhale/issues/2372))
   When using `task_shell_start`, tools dependent on `/dev/tty` (like `sshpass`) fail with permission errors, even in full-access sandbox mode. 
7. **[OPEN] Hardcoded limits on `@` Mention Menu** ([#2360](https://github.com/Hmbown/CodeWhale/issues/2360))
   The file-mention popup is restricted to 6 entries regardless of terminal size, frustrating users working in large repositories.
8. **[OPEN] Deep file path completions silently excluded** ([#2359](https://github.com/Hmbown/CodeWhale/issues/2359))
   Similarly, the `@` picker walks only 6 directory levels deep, silently hiding deeply nested files from the user.
9. **[OPEN] Config path fragmentation across OS/Cygwin** ([#2369](https://github.com/Hmbown/CodeWhale/issues/2369))
   Configuration resolution is currently inconsistent across different operating systems and Cygwin environments, causing silent migration bugs.
10. **[CLOSED] Community WeChat Group Proposal** ([#978](https://github.com/Hmbown/CodeWhale/issues/978))
    A highly discussed thread (16 comments) indicating strong and active community growth among Chinese developers.

## 4. Key PR Progress
Here are the 10 most important Pull Requests driving the project forward:

1. **feat: Add Baidu AI Search backend** ([PR #2371](https://github.com/Hmbown/CodeWhale/pull/2371))
   Directly addresses Chinese network issues by adding a reliable, first-party `web_search` backend via Baidu AI Search.
2. **Keep startup prompts interactive** ([PR #2373](https://github.com/Hmbown/CodeWhale/pull/2373))
   Fixes the REPL exit issue by routing initial startup prompts through the interactive loop rather than the one-shot mode.
3. **Add MCP for SubAgents / BrowserMode** ([PR #2377](https://github.com/Hmbown/CodeWhale/pull/2377))
   A critical fix ensuring sub-agents inherit MCP tool access. Also introduces a deterministic file browser mode for the `@` menu.
4. **fix(provider): Name DeepSeek in help text** ([PR #2366](https://github.com/Hmbown/CodeWhale/pull/2366))
   Corrects the `/provider` command UI, replacing the confusing "codewhale" label with the actual provider ID ("deepseek").
5. **feat(lsp): add default Java and Vue mappings** ([PR #2367](https://github.com/Hmbown/CodeWhale/pull/2367))
   Expands CodeWhale's Language Server Protocol capabilities by mapping Java to Eclipse JDT LS and Vue to `vue-language-server`.
6. **feat: Force English reasoning when thinking is off** ([PR #1840](https://github.com/Hmbown/CodeWhale/pull/1840)) *(Closed/Merged)*
   Optimizes token usage by forcing the LLM's hidden `reasoning_content` to English when UI thinking is toggled off, reducing latency for CJK users.
7. **test(tui): Make composer history flush deterministic** ([PR #2375](https://github.com/Hmbown/CodeWhale/pull/2375))
   Replaces flaky polling loops in the test suite with a deterministic flush message, stabilizing the TUI test infrastructure.
8. **chore(release): prepare v0.8.40** ([PR #1823](https://github.com/Hmbown/CodeWhale/pull/1823)) *(Closed/Merged)*
   Recovery release focusing on cross-platform reliability, sub-agent robustness, and OCR for attached screenshots. 

## 5. Feature Request Trends
*   **Search Provider Localization:** A strong trend driven by network geo-restrictions, pushing for easily swappable search backends (Bing, DuckDuckGo, Baidu).
*   **Configurable TUI Limits:** Users want to dynamically control UI constraints (like `MENTION_MENU_LIMIT` and `COMPLETIONS_WALK_DEPTH`) via `settings.toml` rather than dealing with hardcoded constants.
*   **Robust Agentic Handoffs:** Developers are building complex workflows and require parent-to-child agent context (specifically MCP tools) to be inherited seamlessly.
*   **Expanded LSP Support:** Continued community desire to turn CodeWhale into a full-fledged IDE replacement by integrating standard language servers (Java, Vue) out-of-the-box.

## 6. Developer Pain Points
*   **CJK Compatibility Friction:** The TUI framework struggles significantly with IME (Input Method Editor) events, resulting in ghost text and unresponsive modal dialogs for non-English users.
*   **TUI Layout Fragility:** Under heavy use, the terminal renderer suffers from layout memory leaks, leading to overlapping text blocks that force users to restart the session.
*   **Hardcoded Magic Numbers:** Developers are frequently frustrated by arbitrary limits hardcoded in Rust source files (e.g., `ui.rs` and `working_set.rs`) that restrict file-tree traversal and UI scaling.
*   **Cross-Platform Path Inconsistencies:** Fragmentation in how the application resolves `~/.deepseek/config.toml` across macOS, Linux, Windows, and Cygwin causes silent configuration drops, making debugging difficult for end-users.

</details>