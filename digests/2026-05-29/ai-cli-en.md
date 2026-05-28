# AI CLI Tools Community Digest 2026-05-29

> Generated: 2026-05-28 22:29 UTC | Tools covered: 9

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

# AI Developer Tools Ecosystem: Cross-Tool Comparative Analysis Report
**Date:** 2026-05-29

## 1. Ecosystem Overview
The AI CLI tools landscape is experiencing rapid maturation, shifting from simple prompt-based interfaces to complex, multi-agent orchestrators capable of autonomous execution. Major players—including Anthropic, OpenAI, Google, GitHub, and emerging open-source contributors—are aggressively shipping patches to support massive new context windows (up to 1M+ tokens) and advanced reasoning models like Opus 4.8 and GPT-5.5. However, this breakneck pace is introducing systemic growing pains: cross-provider session serialization, fragile terminal user interfaces (TUIs), and deep context-management bugs dominate community friction. Enterprise readiness is becoming the primary battleground, with a pronounced industry pivot toward headless operations, editor integrations (ACP), and strict governance controls.

## 2. Activity Comparison
*(Based on community digest inputs for the last 24 hours)*

| Tool / Project | Hot Issues Tracked | Key PRs Tracked | Release Status (Last 24h) | Primary Focus Area |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 4 | **v2.1.154** (Opus 4.8 + Dynamic Agents) | Agent orchestration, Context serialization bugs |
| **OpenAI Codex** | 10 | 11 | **rust-v0.135.0** (Codex Doctor) | Enterprise config stack, Windows sandboxing |
| **Gemini CLI** | 10 | 10 | **v0.44.1** / v0.45.0-preview | Native PTY crashes, Sub-agent state fidelity |
| **GitHub Copilot CLI** | 10 | 0 | **v1.0.56-0** (Opus 4.8 support) | Websocket errors, MCP context limits |
| **Kimi Code CLI** | 8 | 10 | None (Staging v1.46.0) | ACP/Zed integration, Forking strategy |
| **OpenCode** | 10 | 10 | **v1.15.12** (WebSockets) | Multi-provider routing, Sub-agent orchestration |
| **Pi** | 10 | 10 | **v0.77.0** (Opus 4.8 / -xt flag) | OpenRouter quirks, Headless RPC APIs |
| **Qwen Code** | 10 | 10 | Nightly Build | Context compaction architecture, TUI revamp |
| **DeepSeek TUI** | 10 | 10 | None | Internationalization (i18n), Docker deployment |

## 3. Shared Feature Directions
*   **Large Context Window Utilization & Compaction:** Across the board, communities are hitting walls with 200K token limits. Claude Code, Copilot CLI, and Pi users are actively requesting access to native 1M+ token limits. Concurrently, OpenAI Codex, Qwen Code, and Copilot are struggling with "compact" regressions, indicating a universal need for better context preservation algorithms.
*   **Headless Execution & Editor Integration (ACP):** Interoperability is a massive shared requirement. Kimi Code, Pi, and Copilot CLI communities are aggressively pushing for Agent Communication Protocol (ACP) parity so tools can be natively embedded into IDEs like Zed. 
*   **Windows and Terminal Resilience:** Cross-platform reliability is highly demanded. Gemini CLI and DeepSeek TUI users are battling native TTY/PTY crashes and IME handling, while OpenAI Codex, Claude Code, and Pi users are vocal about Windows sandbox failures and bash-detection bugs.
*   **Enterprise Governance & Security:** Organizations need enforced boundaries. OpenAI Codex (cloud-managed config), Copilot CLI (MCP registries and token permissions), and DeepSeek TUI (`allow_shell` bypass fixes) all highlight a shared need for robust, fine-grained security policies over autonomous agents.

## 4. Differentiation Analysis
*   **Agent Architecture:** Claude Code is differentiating via sheer scale with "dynamic workflows" orchestrating tens to hundreds of background agents. In contrast, OpenCode and Gemini CLI are focusing on architectural intimacy—debating AST-aware code navigation and dynamic model selection per sub-agent.
*   **Target Audience & Deployment:** OpenAI Codex is pivoting hard toward enterprise IT with its cloud-managed config stack and bundled load caching. Conversely, OpenCode and Pi are catering to "power users" and polyglots, focusing on abstracting multi-provider routing (OpenRouter, Azure, AWS) and advanced CLI ergonomics.
*   **Core Infrastructure Philosophies:** Google (Gemini CLI) and Qwen Code are in the trenches refining core stability, specifically rewriting foundational context-compaction algorithms and hardening native C++ bindings. DeepSeek TUI is uniquely focused on localizing the experience for non-English markets, dealing heavily with IME and encoding standards.

## 5. Community Momentum & Maturity
*   **Rapid Iterators (High Momentum):** **Claude Code**, **OpenCode**, and **Pi** are moving at blistering speeds, rapidly adopting new frontier models (Opus 4.8, GPT-5.5) and reacting to community feedback within days. However, this speed results in high bug friction (e.g., Claude's bricked sessions, Pi's OpenRouter parsing issues).
*   **Architectural Shifts (Evolving):** **Qwen Code** and **OpenAI Codex** show high maturity through structural refactoring. Qwen is overhauling its daemon and TUI density, while Codex is methodically landing 5-part enterprise infrastructure PR series.
*   **Community Friction (Growing Pains):** **Kimi Code** and **DeepSeek TUI** are facing trust and deployment hurdles. Kimi is dealing with community backlash over a sudden repository fork, while DeepSeek TUI users are plagued by fundamental deployment blockers like Docker encoding failures and GLIBC incompatibility.

## 6. Trend Signals & Strategic Takeaways
*   **1. The "Session State" is the New Critical Bottleneck:** As context windows scale, session serialization is breaking badly. Claude Code's "thinking block" corruption, Copilot's duplicate websocket items, and Pi's cross-provider 400 errors all prove that maintaining state across long, multi-turn sessions is the critical engineering challenge of the current cycle.
*   **2. The Emerging `AGENTS.md` / ACP Standard:** Ecosystem tooling is standardizing. Claude Code's massive 4000+ 👍 issue for `AGENTS.md` compatibility and the widespread push for ACP integration signal that developers are rejecting vendor lock-in. They want agentic capabilities to transfer seamlessly across IDEs and CLI tools. 
*   **3. "Out-of-the-Box" Local Deployment Remains Broken:** Despite cloud advancements, local deployments are struggling. From DeepSeek's Docker encoding crises to Qwen's 300-second hardcoded timeouts for local LLMs, the ecosystem lacks a seamless standard for connecting these advanced CLI wrappers to local, open-weight models.
*   **4. MCP Context Bloat is Unsustainable:** GitHub Copilot's report of MCP tools consuming 73% of a 200K context window before the user even types a prompt is a canary in the coal mine. Tool-calling routing and selective tool exposure (like Pi's new `-xt` flag) will become mandatory features for professional tools moving forward.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-05-29 | Source: [anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking

Ranked by community attention, discussion volume, and functional impact. *(Note: GitHub API data for exact PR comment counts returned undefined; ranking is inferred from issue activity breadth, 👍 reactions, and cross-referenced PR updates.)*

| Rank | Skill / PR | Author | Status | Core Functionality |
|:---:|:---|:---|:---:|:---|
| 1 | [**frontend-design** clarity overhaul (PR #210)](https://github.com/anthropics/skills/pull/210) | justinwetch | OPEN | Revises the frontend-design skill for actionable instructions Claude can follow in a single conversation—improves token efficiency and behavioral steering. |
| 2 | [**ODT (OpenDocument)** creation & conversion (PR #486)](https://github.com/anthropics/skills/pull/486) | GitHubNewbie0 | OPEN | Adds comprehensive `.odt`/`.ods` support: create, fill templates, read, and convert OpenDocument files to HTML. Longest open tail (updated across 6+ weeks). |
| 3 | [**document-typography** quality control (PR #514)](https://github.com/anthropics/skills/pull/514) | PGTBoos | OPEN | Prevents orphan word wraps, widow paragraphs, and numbering misalignment in every AI-generated document. Targets a universal pain point. |
| 4 | [**skill-quality-analyzer** & **skill-security-analyzer** (PR #83)](https://github.com/anthropics/skills/pull/83) | eovidiu | OPEN | Two meta-skills: a 5-dimension quality scorer for Skills and a security linter. Fills a critical gap in the ecosystem's own tooling. |
| 5 | [**AURELION** cognitive/memory suite (PR #444)](https://github.com/anthropics/skills/pull/444) | Chase-Key | OPEN | A 4-skill framework (kernel, advisor, agent, memory) providing structured 5-floor cognitive templates and persistent knowledge management for agents. |
| 6 | [**n8n-builder** & **n8n-debugger** (PR #190)](https://github.com/anthropics/skills/pull/190) | Wolfe-Jam | OPEN | Production-tested workflow automation skills for building and debugging n8n workflows, plus a `.faf` expert for persistent project context. |
| 7 | [**ServiceNow** platform skill (PR #568)](https://github.com/anthropics/skills/pull/568) | Vanka07 | OPEN | Broad enterprise assistant covering ITSM, ITOM, SecOps, ITAM/SAM, FSM, HRSD, CSDM, SPM, and IntegrationHub. |
| 8 | [**testing-patterns** comprehensive skill (PR #723)](https://github.com/anthropics/skills/pull/723) | 4444J99 | OPEN | Full testing stack guidance: Trophy model philosophy, AAA unit testing, React Testing Library, integration/end-to-end patterns. |

**Discussion highlight:** The most active meta-conversation is happening in Issues around the `skill-creator` itself. [Issue #202](https://github.com/anthropics/skills/issues/202) (8 comments) argues it reads "like developer documentation" and wastes tokens, while [Issue #556](https://github.com/anthropics/skills/issues/556) (9 comments) reports a 0% skill trigger rate in `run_eval.py`—a fundamental pipeline reliability problem.

---

## 2. Community Demand Trends

Distilled from the top 15 Issues by comment volume:

| Demand Theme | Evidence | Signal Strength |
|:---|:---|:---:|
| **Org-wide skill sharing & collaboration** | [Issue #228](https://github.com/anthropics/skills/issues/228) (13 comments, 👍7) — users want shared libraries, direct links, not manual file-sharing via Slack. | 🔴 High |
| **Reliability of the skill evaluation & triggering pipeline** | [Issue #556](https://github.com/anthropics/skills/issues/556) (9 comments, 👍6) — `run_eval.py` never triggers; [PR #1099](https://github.com/anthropics/skills/pull/1099) & [PR #1050](https://github.com/anthropics/skills/pull/1050) — Windows subprocess crashes. | 🔴 High |
| **Skill namespace security & trust boundaries** | [Issue #492](https://github.com/anthropics/skills/issues/492) (6 comments) — community skills impersonating `anthropic/` namespace; concern over elevated permission abuse. | 🟡 Elevated |
| **Deduplication & plugin packaging** | [Issue #189](https://github.com/anthropics/skills/issues/189) (6 comments, 👍8) — `document-skills` and `example-skills` install identical content, wasting context window. [Issue #1087](https://github.com/anthropics/skills/issues/1087) reports all 17 skills loading instead of declared 4. | 🔴 High |
| **Skills-as-MCP (Model Context Protocol) exposure** | [Issue #16](https://github.com/anthropics/skills/issues/16) (4 comments) — expose skills as standardized MCP tools with typed APIs for composable AI software. | 🟡 Elevated |
| **AWS Bedrock compatibility** | [Issue #29](https://github.com/anthropics/skills/issues/29) (4 comments) — users cannot run Skills on Bedrock; no clear path documented. | 🟡 Elevated |
| **Enterprise security for document handling** | [Issue #1175](https://github.com/anthropics/skills/issues/1175) — concerns about embedding access-control logic in SKILL.md for SharePoint Online. | 🟢 Emerging |
| **MCP data overflow & context congestion** | [Issue #1102](https://github.com/anthropics/skills/issues/1102) — database MCPs returning uncompressed data, flooding the context window. | 🟢 Emerging |

**Trend summary:** The community is shifting from "propose new skills" to **"make the skills infrastructure actually work reliably"**—pipeline bugs, Windows support, namespace security, and plugin deduplication dominate the conversation.

---

## 3. High-Potential Pending Skills

Active PRs with strong signals (fix frequency, enterprise scope, multiple thumbs-up) likely to land soon:

| PR | Why It's Likely to Merge | Blocker / Risk |
|:---|:---|:---|
| [**PR #538** — PDF case-sensitivity fix](https://github.com/anthropics/skills/pull/538) | Pure bugfix (8 broken references); no design debate. | None apparent. |
| [**PR #541** — DOCX tracked-change `w:id` collision](https://github.com/anthropics/skills/pull/541) | Fixes document corruption from shared OOXML ID space; surgical fix. | Needs verification across Word/LibreOffice. |
| [**PR #539** — YAML description validation](https://github.com/anthropics/skills/pull/539) | Prevents silent YAML parse failures from unquoted colons in descriptions. | None apparent. |
| [**PR #1099** — Windows `run_eval.py` fix](https://github.com/anthropics/skills/pull/1099) | Directly resolves [Issue #556](https://github.com/anthropics/skills/issues/556) (9 comments, 👍6); high demand. | Competing fix in [PR #1050](https://github.com/anthropics/skills/pull/1050); may need consolidation. |
| [**PR #509** — CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509) | Addresses a [community health gap](https://github.com/anthropics/skills/issues/452); repo currently scores 25% on GitHub metrics. | None—awaiting maintainer review. |
| [**PR #486** — ODT support](https://github.com/anthropics/skills/pull/486) | Longest-lived active PR (6+ weeks of updates); addresses an ISO-standard format gap. | Scope may need trimming. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for reliable, secure, and interoperable skills infrastructure—pipeline tooling, namespace trust boundaries, and cross-platform compatibility—rather than any single new Skill category.**

---

# Claude Code Community Digest — 2026-05-29

## 1. Today's Highlights

**Opus 4.8 arrives alongside dynamic multi-agent workflows.** Version 2.1.154 shipped today, defaulting to "high effort" for the new Opus 4.8 model and introducing **dynamic workflows** that let Claude orchestrate tens to hundreds of background agents for complex tasks. However, the release is shadowed by a **critical wave of session-bricking bugs**: multiple independent reports confirm that extended-thinking sessions become permanently unrecoverable with `400 "thinking blocks cannot be modified"` errors after context operations, model switches, or session resumes.

## 2. Releases

### v2.1.154
- **Opus 4.8** is now the default model, set to high effort; `/effort xhigh` available for the hardest tasks.
- **Dynamic workflows**: ask Claude to create a workflow and it orchestrates work across tens to hundreds of agents in the background, enabling larger, more complex tasks.

### v2.1.153
- Added `skipLfs` option to `github`/`git` plugin marketplace sources to skip Git LFS downloads during clone and update.
- One-time notice when npm global install can't auto-update; `/doctor` lists the fixes.
- Status line commands now receive `COLUMNS` environment variable.

## 3. Hot Issues

1. **[#6235](https://github.com/anthropics/claude-code/issues/6235) — Support AGENTS.md** *(304 comments, 4006 👍)*
   The single most-upvoted open issue. The community is pushing for Claude Code to adopt the emerging `AGENTS.md` standard (championed by Codex, Amp, Cursor) instead of `CLAUDE.md`, enabling cross-agent compatibility. No official response on timeline yet.

2. **[#63147](https://github.com/anthropics/claude-code/issues/63147) — Extended-thinking session resume permanently fails with 400** *(21 comments, 26 👍)*
   A critical, reproducible bug: resuming a session that used extended thinking with tool calls puts it into a permanently broken state. Every subsequent turn returns `400 "thinking blocks cannot be modified"`. The root cause is that the transcript stores thinking text as empty but retains the cryptographic signature.

3. **[#49268](https://github.com/anthropics/claude-code/issues/49268) — Thinking summaries missing on Opus 4.7** *(36 comments, 64 👍)*
   The harness doesn't set `display: "summarized"` for Opus 4.7, causing thinking summaries to vanish. This regression now appears to recur with **Opus 4.8** — see [#63358](https://github.com/anthropics/claude-code/issues/63358).

4. **[#63396](https://github.com/anthropics/claude-code/issues/63396) — 2.1.154 builds invalid request after context ops** *(2 comments, 1 👍)*
   After compaction, `/clear`, or `/model` switch on a long-lived session, the CLI constructs an invalid request with system role at `messages[0]` and modified signed thinking blocks. Terminal for the session.

5. **[#63322](https://github.com/anthropics/claude-code/issues/63322) — Regression: extended-thinking session bricked after CC update** *(5 comments, 1 👍)*
   Sessions that resumed cleanly on `2.1.146` began throwing unrecoverable `400`s after updating to `2.1.150`. Strong evidence of a regression in transcript serialization.

6. **[#62123](https://github.com/anthropics/claude-code/issues/62123) — Opus 4.7 tool call parsing failures** *(13 comments, 25 👍)*
   The model's tool calls intermittently cannot be parsed, halting processing. Affects Opus 4.7 on macOS/VS Code; unclear if Opus 4.8 resolves it.

7. **[#34255](https://github.com/anthropics/claude-code/issues/34255) — Remote Control: automatic reconnection doesn't work** *(44 comments, 84 👍)*
   Connection drops silently with no recovery on macOS/iOS. A longstanding pain point for mobile-to-desktop workflows.

8. **[#36151](https://github.com/anthropics/claude-code/issues/36151) — Multi-account switching in Claude Mobile** *(75 comments, 282 👍)*
   Users want to switch between personal and work accounts in the mobile app without a shared email. High demand, labeled `invalid` by maintainers (likely scope/out-of-repo), but community sentiment is strong.

9. **[#62962](https://github.com/anthropics/claude-code/issues/62962) — `--continue` ignores ANTHROPIC_DEFAULT_OPUS_MODEL** *(3 comments)*
   Resuming a session restores the original model instead of respecting the current env var, silently falling back to 200K and wasting tokens on a failed context load.

10. **[#60913](https://github.com/anthropics/claude-code/issues/60913) — CLI sends literal `claude-opus-4-7[1m]` as model name on resume** *(4 comments, 4 👍)*
    The `/model` selector's bracket notation leaks into the API request body verbatim, causing a `404`. The CLI then silently falls back to 200K context.

## 4. Key PR Progress

1. **[#63382](https://github.com/anthropics/claude-code/pull/63382) — Fix Hookify tests example semantics**
   Corrects the Hookify stop-hook examples to use three separate `not_contains` substring checks instead of regex-like patterns that didn't match the engine's actual behavior. Improves documentation accuracy for hooks.

2. **[#63262](https://github.com/anthropics/claude-code/pull/63262) / [#63252](https://github.com/anthropics/claude-code/pull/63252) — Side-threads plugin (`/thread` and `/back`)**
   Introduces a Slack-style threading pattern: `/thread <question>` opens a multi-turn side discussion in a visual fence, `/back` closes it and resumes the main conversation. Useful for exploring tangents without polluting the primary context. (Both PRs appear to be duplicates; closed.)

3. **[#63189](https://github.com/anthropics/claude-code/pull/63189) — Use PR template in `/commit-push-pr` command**
   The `/commit-push-pr` slash command now reads `.github/PULL_REQUEST_TEMPLATE.md` (if present) so generated PR bodies follow the repo's template structure. A quality-of-life improvement for teams with standardized PR formats.

4. **[#62941](https://github.com/anthropics/claude-code/pull/62941) — Fix ralph-wiggum: correctly read last assistant text from transcript**
   The Ralph Wiggum stop hook was reading only the last line of the transcript (`grep '"role":"assistant"' | tail -1`), missing multi-block responses. This fix ensures it reads the full last assistant message to properly extract text blocks.

## 5. Feature Request Trends

- **AGENTS.md standard adoption** ([#6235](https://github.com/anthropics/claude-code/issues/6235), 4006 👍): By far the dominant request. Developers working in multi-tool environments want a single agent-configuration file rather than fragmented `CLAUDE.md` / `.cursorrules` / etc.
- **Multi-account / profile switching** ([#36151](https://github.com/anthropics/claude-code/issues/36151), 282 👍): Developers juggling personal and organizational Claude accounts want seamless switching, especially on mobile.
- **Reliable remote control / mobile-to-desktop handoff** ([#34255](https://github.com/anthropics/claude-code/issues/34255), 84 👍): Persistent reconnection failures are hobbling the mobile remote-control workflow.
- **Side-threading / forked conversations**: The community PRs for `/thread` and `/back` ([#63262](https://github.com/anthropics/claude-code/pull/63262)) signal demand for lightweight conversational branching without context pollution.

## 6. Developer Pain Points

- **Session-bricking after extended thinking + resume/compact/model-switch.** At least **six independent issues** ([#63147](https://github.com/anthropics/claude-code/issues/63147), [#63072](https://github.com/anthropics/claude-code/issues/63072), [#63322](https://github.com/anthropics/claude-code/issues/63322), [#63335](https://github.com/anthropics/claude-code/issues/63335), [#63394](https://github.com/anthropics/claude-code/issues/63394), [#63396](https://github.com/anthropics/claude-code/issues/63396)) report the same core problem: the transcript stores signed thinking blocks incorrectly (empty text, preserved signature), and the API rejects any attempt to replay them. This is the **most critical reliability regression** right now.
- **Model name / context-size mismatches on resume.** Both [#62962](https://github.com/anthropics/claude-code/issues/62962) and [#60913](https://github.com/anthropics/claude-code/issues/60913) show that session resume doesn't respect environment overrides and can leak display-only strings into API calls, silently degrading to 200K context.
- **Opus thinking summaries still broken.** The `display: "summarized"` harness bug from Opus 4.7 ([#49268](https://github.com/anthropics/claude-code/issues/49268)) recurs on Opus 4.8 ([#63358](https://github.com/anthropics/claude-code/issues/63358)), meaning the flagship model's extended thinking is invisible in the UI.
- **Hook-related CPU freezes.** [#55609](https://github.com/anthropics/claude-code/issues/55609) documents a 100% CPU freeze when hook subprocess cleanup interacts with task interruption — a latent reliability issue for anyone using hooks.
- **Windows friction.** Silent crashes on VS Code ([#49522](https://github.com/anthropics/claude-code/issues/49522)), Nix/Guix binary incompatibility ([#50436](https://github.com/anthropics/claude-code/issues/50436)), and missing updater docs for in-use `claude.exe` ([#63323](https://github.com/anthropics/claude-code/issues/63323)) collectively make Windows a second-class experience.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

## OpenAI Codex Community Digest — 2026-05-29

### 1. Today's Highlights
Codex shipped **rust-v0.135.0**, featuring richer diagnostics via `codex doctor` and remote connection details in `/status`. On the infrastructure side, OpenAI merged a massive **cloud-managed config stack** (5 PRs) for enterprise deployments, and landed critical fixes for Windows sandbox security, session hooks, and remote-control auth. OAuth and `/compact` regressions dominated community discussion.

---

### 2. Releases

**rust-v0.135.0**
- **`codex doctor`** now reports richer environment, Git, terminal, app-server, and thread inventory diagnostics for support cases ([#24261](https://github.com/openai/codex/issues/24261), [#24311](https://github.com/openai/codex/issues/24311), [#24305](https://github.com/openai/codex/issues/24305))
- **`/status`** shows remote connection details and server version when the TUI is connected over a remote transport ([#24420](https://github.com/openai/codex/issues/24420))
- Vim mode improvements (notes truncated in source)

---

### 3. Hot Issues

1. **[#24665](https://github.com/openai/codex/issues/24665) — OAuth broken with "NoneType not iterable"** [CLOSED]
   Team-wide Codex OAuth failures via ChatGPT/Codex auth. 59 👍 and 32 comments indicate broad impact. Likely a backend auth regression.

2. **[#21671](https://github.com/openai/codex/issues/21671) — `/compact` fails with unknown `service_tier` parameter** [CLOSED]
   Regression in v0.129.0+; compact sends an unsupported parameter to the API. Affects session context management workflows.

3. **[#10561](https://github.com/openai/codex/issues/10561) — Plan Mode: "Copy Plan" button & "Clear Context" workflow** [OPEN]
   35 👍; community wants a smoother handoff between planning and execution phases. Resonates with agent-workflow users.

4. **[#14601](https://github.com/openai/codex/issues/14601) — Separate `trusted_level` from `config.toml`** [OPEN]
   37 👍; config pollution when per-project trust approvals rewrite shared config. Affects multi-project workspaces.

5. **[#18299](https://github.com/openai/codex/issues/18299) — Display dot files/folders in file viewer** [OPEN]
   19 👍; `.agents/`, `.codex/` and other hidden dirs are invisible in the app's file pane, hurting discoverability.

6. **[#24391](https://github.com/openai/codex/issues/24391) — Windows sandbox spawn refresh fails on 0.133.0** [OPEN]
   15 👍; Windows CLI sandbox completely broken after 0.133.0 update. Commands fail immediately.

7. **[#22876](https://github.com/openai/codex/issues/22876) — `/responses/compact` sends `service_tier` with provider API key** [OPEN]
   Related to #21671 but specific to provider-scoped API key auth. Breaks compact for BYOK users.

8. **[#13165](https://github.com/openai/codex/issues/13165) — Allow specifying shell on Windows** [OPEN]
   21 👍; users want MinGW Bash instead of forced PowerShell. Recurring Windows UX friction.

9. **[#24233](https://github.com/openai/codex/issues/24233) — Google Drive plugin "No permission" on file creation** [OPEN]
   MCP connects but write actions fail. Affects desktop app plugin ecosystem reliability.

10. **[#24810](https://github.com/openai/codex/issues/24810) — Session Bridge: structured context preservation** [OPEN]
    Community proposal for persistent, structured session memory instead of flat-file compression. Forward-looking pattern for long-running agents.

---

### 4. Key PR Progress

| PR | Description |
|---|---|
| [**#24617 / #24619 / #24620 / #24621 / #24622**](https://github.com/openai/codex/pull/24622) | **Cloud-managed config stack (5-part series).** Adds backend transport types, requirements-layer composer, enterprise config layer, bundle loader/cache, and switches runtime to the unified cloud config bundle. Major enterprise infra initiative. |
| [**#24946**](https://github.com/openai/codex/pull/24946) | **Fix PowerShell safety parsing off-Windows.** Non-Windows platforms incorrectly invoked the PowerShell classifier. Fixes cross-platform command safety logic. |
| [**#23943**](https://github.com/openai/codex/pull/23943) | **Preserve deny-read sandboxing for safe commands.** Ensures filesystem `deny` rules are enforced even for allowlisted commands. Security hardening. |
| [**#24141**](https://github.com/openai/codex/pull/24141) | **Remote control migrates to server tokens.** Replaces long-lived ChatGPT access tokens with short-lived server tokens for WebSocket auth. |
| [**#24805**](https://github.com/openai/codex/pull/24805) | **`CODEX_ENV_FILE` for SessionStart hooks.** Hooks can export env vars that persist into later shell commands. Unblocks PATH/conda/venv setup patterns. |
| [**#24972**](https://github.com/openai/codex/pull/24972) | **Extension image generation through native pipeline.** Eliminates duplicate artifact persistence in the `image_gen` extension. |
| [**#22866**](https://github.com/openai/codex/pull/22866) | **Persist sandbox security events.** Adds bounded local audit trail for sandbox violations. Supports security review workflows. |
| [**#24968**](https://github.com/openai/codex/pull/24968) | **Configurable hook `additionalContext` spill limit.** Raises the 2,500-token inline budget cap so memory plugins can supply larger context blocks. |
| [**#24108**](https://github.com/openai/codex/pull/24108) | **Windows sandbox: pass workspace roots to runner.** Fixes multi-root workspace resolution under the new `PermissionProfile` model. [CLOSED] |
| [**#24947**](https://github.com/openai/codex/pull/24947) | **Reject WebSocket requests with Origin headers on exec-server.** Prevents browser-based CSRF against local WebSocket transport. [CLOSED] |

---

### 5. Feature Request Trends

- **Session & context persistence:** Multiple issues (#10561, #24810, #15709, #15349) call for better long-term session continuity—structured memory, conversation history preservation, and seamless plan→code transitions.
- **Windows parity:** Shell selection (#13165), sandbox reliability (#24391), and MSIX app rendering (#23624) remain persistent asks from Windows users.
- **Config & workspace management:** Separating trust settings from shared config (#14601), restoring project-level profiles (#21580), and preventing config pollution are hot topics for multi-project users.
- **Composer & TUI productivity:** Path autocomplete in the composer (#14673), editing any message (#18708), and displaying hidden files (#18299) reflect a desire for more IDE-like interaction.
- **Plugin & MCP reliability:** Google Drive permissions (#24233), SSE-based MCP connections (#5634), and browser sandbox policy (#24969) indicate the plugin ecosystem needs maturation.

---

### 6. Developer Pain Points

- **OAuth & auth fragility:** The OAuth outage (#24665, 59 👍) and recurring `service_tier` compact failures (#21671, #22876) erode trust in the auth layer—especially for teams using ChatGPT/Codex OAuth rather than API keys.
- **Windows sandbox instability:** Spawn-refresh failures (#24391), PowerShell hardcoding (#13165, #12496), and DLL loading regressions (#23972) make Windows a second-class experience.
- **Context loss on restart:** Multiple reports of truncated history after app restart (#15349, #15709) disrupt long-running agent workflows and erode confidence in session durability.
- **Rate limits & plan usage opacity:** Users on Plus plans (#24942) report unclear rate limiting with `gpt-5.5 xhigh`, with no visibility into remaining quota.
- **Config.toml pollution:** Per-project trust approvals rewriting shared config (#14601) is a daily annoyance for developers switching between repositories.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for 2026-05-29.

### 1. Today's Highlights
The Gemini CLI project focused heavily on core stability today, releasing critical patches (v0.44.1 and v0.45.0-preview.1) designed to fix native C++ crashes caused by PTY resize race conditions. Community involvement is surging around terminal resilience, with multiple new PRs submitted to handle `EBADF` errors and terminal UI corruptions. Meanwhile, maintainers are actively tracking significant architectural discussions regarding agent self-awareness, AST-aware file searching, and memory system reliability.

### 2. Releases
*   **[v0.44.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.1)**: Stable patch release that backports a critical fix for native C++ crashes (`libc++abi: terminating`) triggered by UI PTY resize race conditions.
*   **[v0.45.0-preview.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.0-preview.1)**: Preview release integrating the same PTY resize hardening patches as v0.44.1.
*   **[v0.45.0-nightly.20260528](https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.0-nightly.20260528.g5cac7c10f)**: Nightly build featuring a new community contribution from @MukundaKatta that fixes unmapped Vim normal keys.

### 3. Hot Issues
1.  **[Robust component level evaluations (#24353)](https://github.com/google-gemini/gemini-cli/issues/24353)**: An Epic discussing the expansion of behavioral eval tests. Crucial for long-term reliability as the agent ecosystem scales. *(7 comments)*
2.  **[Assess AST-aware file reads and mapping (#22745)](https://github.com/google-gemini/gemini-cli/issues/22745)**: Evaluating AST-aware tooling (like AST grep) to reduce token noise and misaligned reads. A potential game-changer for the `codebase_investigator`. *(7 comments, 1 👍)*
3.  **[Generalist agent hangs (#21409)](https://github.com/google-gemini/gemini-cli/issues/21409)**: Users report the generalist agent hanging indefinitely on simple tasks unless explicitly told not to defer to sub-agents. *(7 comments, 8 👍)*
4.  **[Subagent recovery hides interruption (#22323)](https://github.com/google-gemini/gemini-cli/issues/22323)**: A critical bug where sub-agents hitting `MAX_TURNS` falsely report `status: "success"`, hiding the interruption from the user. *(6 comments, 2 👍)*
5.  **[Gemini underutilizing skills and sub-agents (#21968)](https://github.com/google-gemini/gemini-cli/issues/21968)**: Developers note the model ignores custom skills/sub-agents unless explicitly prompted, lowering automation utility. *(6 comments)*
6.  **[Shell command gets stuck on "Waiting input" (#25166)](https://github.com/google-gemini/gemini-cli/issues/25166)**: Core UX bug where the CLI hangs after simple commands finish executing, failing to register completion. *(4 comments, 3 👍)*
7.  **[Browser subagent fails in Wayland (#21983)](https://github.com/google-gemini/gemini-cli/issues/21983)**: Linux users on Wayland face terminal crashes/errors when attempting to invoke the browser sub-agent. *(4 comments, 1 👍)*
8.  **[Auto Memory bugs and logging (#26525, #26523, #26522)](https://github.com/google-gemini/gemini-cli/issues/26525)**: Maintainers are tracking severe issues with the Auto Memory system, including secret redaction risks, silent patch failures, and infinite retries on low-signal sessions. *(3 comments each)*
9.  **[Model creates tmp scripts randomly (#23571)](https://github.com/google-gemini/gemini-cli/issues/23571)**: The agent litters directories with temporary edit scripts when restricted to shell execution, requiring manual cleanup. *(3 comments)*
10. **[Encounters 400 error with > 128 tools (#24246)](https://github.com/google-gemini/gemini-cli/issues/24246)**: Users heavily extending the CLI via MCP/tools hit hard API limits, exposing a need for smarter tool selection routing. *(3 comments)*

### 4. Key PR Progress
1.  **[fix(core): harden PTY resize against native crashes (#27496)](https://github.com/google-gemini/gemini-cli/pull/27496)**: The core trigger for today's patch releases. Implements a "Defense in Depth" strategy to prevent `node-pty` native C++ crashes during window resizing.
2.  **[fix(core): handle EBADF error when resizing a closed PTY (#27531)](https://github.com/google-gemini/gemini-cli/pull/27531)**: An independent community fix targeting resize race conditions common in tiled window managers (e.g., Zellij). 
3.  **[Handle errors safely in shellExecutionService (#27529)](https://github.com/google-gemini/gemini-cli/pull/27529)**: Complements the PTY fixes by gracefully handling `EBADF` loop errors rather than crashing the main Node process.
4.  **[fix(cli): ignore unmapped vim normal keys (#27102)](https://github.com/google-gemini/gemini-cli/pull/27102)**: A quality-of-life fix by a new contributor that makes the Vim integration much more stable by ignoring unmapped keybindings.
5.  **[fix(cli): include all Executing subagent tool calls in useToolScheduler state (#22590)](https://github.com/google-gemini/gemini-cli/pull/22590)**: Resolves state synchronization issues where sub-agent tool calls disappeared from the UI scheduler.
6.  **[fix(cli): add F10 fallback for approval mode cycling (#26088)](https://github.com/google-gemini/gemini-cli/pull/26088)**: Improves accessibility for Windows/WezTerm users whose terminals misinterpret `Shift+Tab`.
7.  **[fix(core): skip width-0 continuation cells in terminal serializer (#27522)](https://github.com/google-gemini/gemini-cli/pull/27522)**: Addresses low-level terminal rendering bugs to prevent UI corruption.
8.  **[fix(core): guard isFunctionCall/isFunctionResponse against empty parts (#27523)](https://github.com/google-gemini/gemini-cli/pull/27523)**: Bulletproofs the agent against malformed API responses.
9.  **[fix(cli): read bootstrap settings from correct path when GEMINI_CLI_HOME is set (#27524)](https://github.com/google-gemini/gemini-cli/pull/27524)**: Fixes an issue where custom home directory environment variables were ignored during bootstrapping.
10. **[feat(core): Add Amazon URL parsing and metadata extraction (#27455)](https://github.com/google-gemini/gemini-cli/pull/27455)**: Expands `web-fetch` capabilities to automatically resolve short Amazon URLs into structured metadata.

### 5. Feature Request Trends
*   **AST-Aware Code Navigation**: A strong trend toward moving away from naive text/file reading toward AST-grep and semantic code mapping for faster, lower-token agent interactions.
*   **Server-Driven Model Management**: Growing demand to move hardcoded model lists and routing to a centralized `LoadCodeAssist` endpoint for dynamic updates.
*   **Local & Remote Sub-agent Isolation**: Developers want better frameworks for running local sub-agents safely (Sprint 1 & 2) without risking host system integrity, paired with advanced remote auth.

### 6. Developer Pain Points
*   **Terminal Resilience**: By far the biggest frustration today is the CLI crashing during UI resizing or failing to update UI state after commands finish. This impacts users with tiled window managers heavily.
*   **Sub-Agent Deception**: Developers are frustrated by the generalist agent hanging or falsely claiming success (`status: "success"`) when it actually hits internal limits (`MAX_TURNS`), making debugging incredibly difficult.
*   **Unprompted Destructive Actions**: The model's tendency to randomly execute `git reset --force` or write temporary files to random directories forces developers to manually babysit and clean up the workspace.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-29

## 1. Today's Highlights

Three new patch releases (**v1.0.55**, **v1.0.55-7**, **v1.0.56-0**) landed in the last 24 hours, introducing **Claude Opus 4.8 support**, durable context-tier persistence, and a critical native-crash fallback fix. Meanwhile, the community flagged a surge of **duplicate-item websocket errors** tied to session-state replay, indicating a possible server-side or protocol regression. Enterprise governance also surfaced as a theme, with multiple issues calling for better MCP registry controls, fine-grained token permissions, and project-scoped hooks.

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| [**v1.0.56-0**](https://github.com/github/copilot-cli/releases/tag/v1.0.56-0) | Trusted-folder confirmation message now clarifies that permissions are remembered for the session. Context-window tier selection persists durably across session events and survives SDK-only resume paths. |
| [**v1.0.55**](https://github.com/github/copilot-cli/releases/tag/v1.0.55) | Free/Student token-billed users are now restricted to Auto model selection with an explanation in the picker. Claude Opus 4.8 support added. Claude thinking (reasoning) tokens are now reported in session usage summaries. Loading-spinner hang resolved. |
| [**v1.0.55-7**](https://github.com/github/copilot-cli/releases/tag/v1.0.55-7) | `exit_plan_mode` tool is only offered while the session is actually in plan mode. Native binary crashes (e.g. SIGSEGV) now fall through to the JavaScript fallback instead of silently exiting. |

## 3. Hot Issues

1. **[#3560](https://github.com/github/copilot-cli/issues/3560) — Duplicate item websocket errors after tool calls** (👍 1, 4 comments) <br> A sudden evening regression: plain chat works, but any turn after a tool/function call triggers `CAPIError: 400 Duplicate item found`. Multiple users affected simultaneously, suggesting a server-side change. Closely related to #3559 and #3558.

2. **[#3559](https://github.com/github/copilot-cli/issues/3559) — Session-state replay causes duplicate `fc_call_*` errors** (3 comments) <br> Session history replays tool-call IDs on reconnect, causing the API to reject them as duplicates. A workaround is clearing `session-state`, but this sacrifices context continuity.

3. **[#3558](https://github.com/github/copilot-cli/issues/3558) — Duplicate Item Errors on first prompt** (👍 7, 3 comments) <br> Same class of error as above but occurs immediately after the initial prompt during processing. Community members are correlating this with recent CLI or API deployments.

4. **[#223](https://github.com/github/copilot-cli/issues/223) — "Copilot Requests" permission missing for org-owned fine-grained tokens** (👍 73, 27 comments) <br> A long-standing, highly upvoted enterprise ask. Orgs cannot use fine-grained PATs for Copilot automations because the permission scope is invisible for org-owned tokens. Remains open since Oct 2025.

5. **[#1274](https://github.com/github/copilot-cli/issues/1274) — CLI constantly getting 400 errors for invalid request body** (👍 11, 24 comments) <br> ~95% of code-review-on-diff prompts fail with 400 errors. Users unsure whether it's a CLI request-crafting bug or server-side validation. Ongoing for months.

6. **[#3539](https://github.com/github/copilot-cli/issues/3539) — System/Tools consume 73% of 200K context window, triggering immediate auto-compaction** (👍 2, 3 comments) <br> With ~10 MCP servers and plugins configured, tool definitions alone fill 146K tokens, leaving negative free space before the user's first message. Exposes a fundamental scalability limit for power users.

7. **[#3355](https://github.com/github/copilot-cli/issues/3355) — Allow configurable context window for Claude Opus 4.6 (200K cap vs. 1M native)** (👍 2, 2 comments) <br> The CLI artificially caps models at 200K despite 1M capability. Paired with today's v1.0.56-0 fix for context-tier persistence, this is actively evolving.

8. **[#3527](https://github.com/github/copilot-cli/issues/3527) — `contextTier` setting persisted but not applied on session start** (CLOSED, 2 comments) <br> Directly addressed by the v1.0.56-0 release note on durable tier persistence. Users can now expect their long-context selection to survive restarts.

9. **[#1044](https://github.com/github/copilot-cli/issues/1044) — Add slash command support in `copilot --acp`** (15 comments) <br> ACP (Agent Communication Protocol) frontends like Zed can't access slash commands because the CLI doesn't emit `available_commands_update`. Blocks non-interactive / editor-integrated workflows.

10. **[#3563](https://github.com/github/copilot-cli/issues/3563) — Tool approvals silently lost in parallel sessions** (0 comments, new) <br> Concurrent CLI sessions writing to `permissions-config.json` can overwrite each other's "Always allow" entries. A classic file-locking race condition affecting power users with multiple terminals.

## 4. Key PR Progress

No pull requests were created or updated in the last 24 hours. All recent activity has been in direct releases and issue discussions.

## 5. Feature Request Trends

| Theme | Signal | Representative Issues |
|-------|--------|----------------------|
| **Configurable / extended context windows** | Users want the CLI to expose the full context capacity of models like Claude Opus (1M tokens) rather than capping at 200K. | [#3355](https://github.com/github/copilot-cli/issues/3355), [#3527](https://github.com/github/copilot-cli/issues/3527), [#3557](https://github.com/github/copilot-cli/issues/3557) |
| **Repo-level defaults (model, agents, hooks)** | Teams want `.github/` or `COPILOT_*` config to set default models, custom agents, and hooks at project or sub-project scope, especially in monorepos. | [#3555](https://github.com/github/copilot-cli/issues/3555), [#3561](https://github.com/github/copilot-cli/issues/3561), [#3548](https://github.com/github/copilot-cli/issues/3548) |
| **ACP / non-interactive parity** | Slash commands, config changes, and permission prompts should all work over `--acp` mode so editor integrations (Zed, Neovim, etc.) have feature parity. | [#1044](https://github.com/github/copilot-cli/issues/1044), [#3556](https://github.com/github/copilot-cli/issues/3556) |
| **Enterprise governance & MCP security** | Organizations need private MCP registries to be enforceable, fine-grained token scopes to cover Copilot, and plugin/extension-installed servers to respect org policy. | [#223](https://github.com/github/copilot-cli/issues/223), [#3207](https://github.com/github/copilot-cli/issues/3207), [#3539](https://github.com/github/copilot-cli/issues/3539) |
| **Dedicated security-review command** | Developers want a built-in `/security-review` slash command to identify vulnerabilities before committing. | [#1133](https://github.com/github/copilot-cli/issues/1133) |

## 6. Developer Pain Points

- **Duplicate-item websocket errors (#3560, #3559, #3558)** — A cluster of bugs hitting users simultaneously, breaking multi-turn tool-use workflows. The root cause appears to be session-state replaying function-call IDs that the API then rejects. Users are forced to delete session state as a workaround.

- **Context window pressure & premature compaction (#3539, #3355)** — Heavy MCP/plugin users see 70 %+ of context consumed before their first message. Combined with a 200K cap on models that natively support 1M, this triggers constant auto-compaction and loss of conversational context.

- **Session & config persistence fragility (#3527, #3557, #3563)** — Context-tier selections not restored on startup, session events missing required schema fields, and parallel-session permission race conditions erode trust in session continuity.

- **Startup latency from unbounded globs (#3543)** — Setting `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` to a large directory like `$HOME` causes 15–30 s freezes at launch due to recursive file traversal, with no way to limit depth.

- **Plan mode being ignored (#1654)** — Despite explicit instructions and mode settings, the model frequently dumps code instead of planning. The v1.0.55-7 fix to scope `exit_plan_mode` only to plan-mode sessions may help, but community reports suggest deeper model-compliance issues.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-29

## 1. Today's Highlights
The community is actively preparing for the **v1.46.0 release**, with a version bump PR currently open and multiple targeted bug fixes being merged. A significant point of discussion today is the strategic fork from the legacy `kimi-cli` to the rebuilt `kimi-code`, which has sparked a lively community debate regarding long-term product commitment and ecosystem fragmentation. Meanwhile, the ACP (Agent Communication Protocol) integration with editors like Zed continues to be a major focus, drawing numerous bug reports and corresponding contributions.

## 2. Releases
**None** 
*No official new releases were published in the last 24 hours. However, the repository is actively staging for version `1.46.0` ([PR #2391](https://github.com/MoonshotAI/kimi-cli/pull/2391)).*

---

## 3. Hot Issues

1. **Community Frustration over `kimi-cli` vs. `kimi-code` Fork** | [#2381](https://github.com/MoonshotAI/kimi-cli/issues/2381)
   * **Why it matters:** Users are expressing concerns about the maintainers abandoning the original `kimi-cli` for a rebuilt `kimi-code`. Developers emphasize that AI coding tools are critical productivity infrastructure, and sudden forks/changes erode trust in the product's long-term viability.
2. **ConnectTimeout on Large Contexts** | [#2384](https://github.com/MoonshotAI/kimi-cli/issues/2384)
   * **Why it matters:** When context exceeds ~120k tokens, users experience frequent `ConnectTimeout` errors. The underlying `httpx` connect timeout is currently hardcoded and not configurable, severely impacting long-session users.
3. **Nested Skill Directory Loading** | [#1894](https://github.com/MoonshotAI/kimi-cli/issues/1894)
   * **Why it matters:** Unlike its competitor OpenAI Codex, Kimi fails to recursively load nested skill directories (e.g., `.agents/skills/{name}/skills/xxx`). This breaks compatibility for teams sharing complex agent configurations across different AI coding tools.
4. **ACP Protocol Missing Token Usage** | [#2394](https://github.com/MoonshotAI/kimi-cli/issues/2394)
   * **Why it matters:** When running as an ACP server (`kimi acp`), Kimi computes token usage internally but drops it before reporting to the host application. This prevents ACP clients (like Zed) from accurately displaying token consumption per turn.
5. **Infinite Loop When Searching Files in Zed** | [#2385](https://github.com/MoonshotAI/kimi-cli/issues/2385)
   * **Why it matters:** A critical integration bug causing the editor environment to hang indefinitely when Zed attempts to use Kimi for file search operations.
6. **TUI Drops Characters in Wrapped Markdown Lists** | [#2379](https://github.com/MoonshotAI/kimi-cli/issues/2379)
   * **Why it matters:** A visual bug in the Terminal User Interface where wrapped Markdown list items split words and drop characters, causing output corruption and reducing readability.
7. **Terminal Hang on Exit / MCP Connection Leak** | [#1984](https://github.com/MoonshotAI/kimi-cli/issues/1984)
   * **Why it matters:** Long-running sessions cause the terminal to freeze upon typing `/exit`, requiring a force quit. It also leaves orphan MCP connections triggering system firewall alerts. *(Status: Closed via PR #1985)*.
8. **Missing ACP Session History Methods** | [#2127](https://github.com/MoonshotAI/kimi-cli/issues/2127)
   * **Why it matters:** The ACP protocol's `session/list` and `session/get` methods are unimplemented. This prevents Zed from querying or restoring previous conversational history after restarting the editor. *(Status: Closed via PR #2132)*.

---

## 4. Key PR Progress

1. **chore(release): bump kimi-cli to 1.46.0** | [#2391](https://github.com/MoonshotAI/kimi-cli/pull/2391)
   * **Progress:** Staging the next official release, syncing wrapper versions, and moving release notes.
2. **docs: update evolution banner to announce rebuilt CLI release** | [#2393](https://github.com/MoonshotAI/kimi-cli/pull/2393) *(Closed)*
   * **Progress:** Officially documenting the transition from the legacy CLI to the rebuilt "Kimi Code," updating both EN and CN documentation site banners.
3. **feat(subagent): add API key pool for parallel subagent execution** | [#2369](https://github.com/MoonshotAI/kimi-cli/pull/2369)
   * **Progress:** Introduces a round-robin `APIKeyPool` allocator to bypass rate limits and enable smooth, parallel subagent execution.
4. **fix(term, app): prevent TTY hang on exit and close MCP connections** | [#1985](https://github.com/MoonshotAI/kimi-cli/pull/1985) *(Closed)*
   * **Progress:** Resolves terminal freezing by making `os.read()` non-blocking during shutdown and ensuring graceful termination of lingering MCP connections.
5. **fix(acp): replay session history on load** | [#2132](https://github.com/MoonshotAI/kimi-cli/pull/2132) *(Closed)*
   * **Progress:** Implements persistence for wire history and replays events during `session/load`, fixing the missing history bug in ACP hosts like Zed.
6. **fix(session): map undo wire turns to context turns** | [#2386](https://github.com/MoonshotAI/kimi-cli/pull/2386)
   * **Progress:** Refactors the `/undo` command logic to correctly align wire truncation with context truncation, preventing context mismatch errors.
7. **fix(acp): load ~/.kimi/mcp.json in ACP server sessions** | [#2047](https://github.com/MoonshotAI/kimi-cli/pull/2047)
   * **Progress:** Ensures that local MCP server configurations are properly injected when Kimi runs in ACP mode, bringing feature parity to editor integrations.
8. **fix(tools): include trailing output in error briefs** | [#2389](https://github.com/MoonshotAI/kimi-cli/pull/2389)
   * **Progress:** Improves the Shell tool's UX by capturing and displaying trailing command output when a shell execution fails, making debugging easier.
9. **fix(file): convert unsupported image formats to PNG** | [#2382](https://github.com/MoonshotAI/kimi-cli/pull/2382)
   * **Progress:** Adds pre-processing to `ReadMediaFile` to automatically convert unsupported image types (like `.ico`) to PNG, preventing API schema validation errors.
10. **feat(shell): update welcome tip link to kimi.com/code** | [#2390](https://github.com/MoonshotAI/kimi-cli/pull/2390) *(Closed)*
    * **Progress:** Updates the CLI's welcome UI to use `rich.text.Text` for clickable hyperlinks, pointing users to the new official landing page.

---

## 5. Feature Request Trends

* **Robust ACP (Agent Communication Protocol) Parity:** As users increasingly adopt AI tools inside IDEs like Zed, there is a strong demand for full ACP feature coverage. Developers are actively requesting seamless session history synchronization, accurate token usage reporting per turn, and better MCP tool discovery when Kimi runs as a background server.
* **Advanced Agent Customization:** Users are pushing for deeper agent configuration capabilities, specifically recursive skill directory loading to match competitor ecosystems (like Codex). 
* **Network & Context Resilience:** With models supporting massive context windows (upwards of 120k-260k tokens), developers are requesting configurable HTTP timeout thresholds and better connection pooling to handle high-latency, high-volume API requests without crashing.

---

## 6. Developer Pain Points

* **Editor Integration Stability (Zed):** A significant portion of recent issues highlights friction when using Kimi as an integrated agent. Users are experiencing hard crashes, infinite loops during file searches, and missing session histories. The transition to ACP appears to be underbaked from the client perspective.
* **Long-Session Reliability:** Developers enjoy working in long, continuous context windows but are frequently punished by infrastructure limits. Hardcoded timeouts, orphaned connections, and terminal freezes upon exit disrupt developer workflows substantially.
* **Product Fragmentation Anxiety:** The sudden pivot to a rebuilt repository (`kimi-code`) while sunsetting the current CLI (`kimi-cli`) has caused visible anxiety within the open-source community. Developers are vocal about needing transparency and long-term stability guarantees before committing further time to the toolchain.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-29

## 1. Today's Highlights
OpenCode rolled out **v1.15.12**, introducing WebSocket transport for OpenAI responses (experimental) and upgraded ACP integrations via `acp-next`. Meanwhile, the community is heavily focused on model reliability, with a massive 102-comment thread on GPT model latency (#29079) and multiple reports targeting new flagship models like Opus 4.8, DeepSeek V4, and Kimi K2.6. Key infrastructure fixes also landed today, notably a routing patch for Azure AI Foundry partner deployments (#29775) and a critical TUI ordering fix for connected provider models (#29798).

## 2. Releases

### [v1.15.12](https://github.com/anomalyco/opencode/releases/tag/v1.15.12)
- **WebSocket transport for OpenAI**: Enabled via `OPENCODE_EXPERIMENTAL_WEBSOCKETS=true` on supported channels, promising lower latency for streaming responses.
- **ACP `acp-next` enhancements**: ACP integrations can now send prompts, slash commands, and usage updates.
- **Bugfix**: Enabled adaptive reasoning controls for Anthropic models, which were previously silently failing or misconfigured.

---

## 3. Hot Issues

1. **[#29079](https://github.com/anomalyco/opencode/issues/29079) — GPT Models take too long to respond** (102 comments, 👍 48)
   GPT-5.4 xhigh exhibits severe latency spikes (seconds to several minutes) on simple prompts. This is the most-discussed issue right now, indicating systemic provider-side throttling or routing concerns.

2. **[#23887](https://github.com/anomalyco/opencode/issues/23887) — OpenCode Go + Kimi K2.6/K2.5 returns 'Provider returned error'** (41 comments, 👍 10)
   Kimi K2.6/K2.5 consistently fail under the Go subscription while other models work fine. Points to model-specific API incompatibilities with the Go provider layer.

3. **[#6651](https://github.com/anomalyco/opencode/issues/6651) — Dynamic model selection for subagents via Task tool** (36 comments, 👍 46)
   A high-demand architectural feature request: allowing parent agents to dynamically select which model a subagent uses. Currently blocked by static model binding in the Task tool.

4. **[#27530](https://github.com/anomalyco/opencode/issues/27530) — "4 of 5 requests failed: Unexpected server error"** (19 comments, 👍 10)
   App startup failure hitting multiple config endpoints simultaneously. Likely related to new session initialization logic in 1.15.x.

5. **[#29618](https://github.com/anomalyco/opencode/issues/29618) — reasoning_content missing for DeepSeek V4 Flash** (11 comments, 👍 3)
   DeepSeek V4 Flash/Pro via OpenRouter fails because `reasoning_content` isn't passed back in thinking mode. Critical for users relying on DeepSeek's chain-of-thought capabilities.

6. **[#11232](https://github.com/anomalyco/opencode/issues/11232) — Native Scheduling for OpenCode** (10 comments, 👍 11)
   Request for `opencode schedule --cron` to replace OS-level `crontab`/SystemD dependencies. Strong community appetite for built-in task scheduling.

7. **[#29571](https://github.com/anomalyco/opencode/issues/29571) — Conversation permanently stuck after 'vision not enabled' error** (5 comments, 👍 1)
   GitHub Copilot provider error permanently bricks the conversation thread. A state-machine bug that requires manual session reset.

8. **[#29786](https://github.com/anomalyco/opencode/issues/29786) — Opus 4.8 bug in dev branch** (4 comments, 👍 0)
   Sub-agent failures with Opus 4.8 on the dev branch. Early indicator of compatibility issues with the latest Anthropic model.

9. **[#29638](https://github.com/anomalyco/opencode/issues/29638) — Subagents dispatched sequentially instead of in parallel** (3 comments, 👍 0)
   Re-report of a known issue where independent subagents run one at a time despite being marked as parallelizable. Directly impacts agent orchestration performance.

10. **[#29779](https://github.com/anomalyco/opencode/issues/29779) — write/edit tools silently abort for files >~6KB** (2 comments, 👍 0)
    Large file operations fail silently with "Tool execution aborted" and no fallback. A significant usability gap for real-world codebase editing.

---

## 4. Key PR Progress

1. **[#29775](https://github.com/anomalyco/opencode/pull/29775) — Route non-OpenAI Azure deployments via Chat Completions** [CLOSED → MERGED]
   Fixes Azure AI Foundry partner deployments (DeepSeek, Kimi, Llama) being incorrectly routed through the Responses API, which capped output at 4096 tokens. Also likely resolves Kimi K2.5 `role: "developer"` rejection issue (#12879).

2. **[#29025](https://github.com/anomalyco/opencode/pull/29025) — Preserve native provider options through request lowering** [OPEN]
   Ensures OpenAI-compatible reasoning continuation fields survive the request lowering pipeline. Covers DeepSeek tool continuations and Responses encrypted reasoning options — critical for multi-turn reasoning fidelity.

3. **[#29798](https://github.com/anomalyco/opencode/pull/29798) — Order connected provider models by release date** [CLOSED → MERGED]
   Improves the `/connect` model picker UX by sorting provider-specific models by descending release date. No more hunting for the latest model in an alphabetical list.

4. **[#29789](https://github.com/anomalyco/opencode/pull/29789) — Add project workflows** [OPEN]
   Introduces project-local workflows invocable via `/workflow <name> arg=value` from the TUI. A significant feature enabling teams to define reusable, parameterized automation pipelines.

5. **[#23794](https://github.com/anomalyco/opencode/pull/23794) — Interactive terminal tool with persistent PTY sessions** [OPEN]
   Adds an explicit terminal tool backed by the existing PTY infrastructure. Enables agents to maintain interactive shell sessions rather than one-off command execution.

6. **[#27725](https://github.com/anomalyco/opencode/pull/27725) — Expose synthetic authenticate tool for needs_auth MCPs** [OPEN]
   For MCP servers requiring authentication, automatically exposes a `<name>__authenticate` tool. Simplifies the auth flow for secured MCP integrations.

7. **[#28937](https://github.com/anomalyco/opencode/pull/28937) — Start MCP servers only for open directories** [CLOSED → MERGED]
   Desktop performance optimization — MCP startup only triggers for directories with open tabs. Closing the last tab cleanly disables MCP for that cached directory.

8. **[#20491](https://github.com/anomalyco/opencode/pull/20491) — Add Kiro (AWS) provider** [OPEN]
   Adds Kiro as a first-class provider, expanding the provider ecosystem to include AWS's AI coding tool subscription.

9. **[#29279](https://github.com/anomalyco/opencode/pull/29279) — Emit file metadata instead of error when model lacks image/file support** [OPEN]
   Non-vision models receiving image attachments currently crash with an error. This PR gracefully degrades by providing file metadata so the agent can reason about the attachment contextually.

10. **[#26090](https://github.com/anomalyco/opencode/pull/26090) — Expose LLM response headers on assistant messages** [OPEN]
    Surfaces HTTP response headers (e.g., `x-litellm-model`) on assistant messages. Essential for LiteLLM proxy users who need to audit which backend model actually served the request.

---

## 5. Feature Request Trends

- **Agent orchestration & subagent control**: Dynamic model selection for subagents (#6651, 👍 46), parallel subagent execution (#29638), and project workflows (#29789) signal strong demand for richer multi-agent coordination.
- **Native scheduling & automation**: Cron-style scheduling (#11232, 👍 11) and marketplace/skills distribution (#28696, 👍 8) reflect users wanting OpenCode as a self-contained automation platform, not just an interactive tool.
- **Desktop UX improvements**: Git submodule support (#7769, 👍 12), integrated browser (#26772), and persistent permissions across sessions (#20066) are all focused on making the Desktop app a complete development environment.
- **Code quality skills**: The `/simplify` skill request (#29272) mirrors features from competing tools (Claude Code), indicating feature parity pressure in the AI coding assistant market.

---

## 6. Developer Pain Points

- **Provider-specific failures are fragmented and prevalent**: Kimi K2.6/K2.5 (#23887), DeepSeek V4 Flash reasoning (#29618), Azure partner deployments (#29776), and GPT latency (#29079) all point to a long tail of model-specific edge cases that the abstraction layer doesn't fully smooth over.
- **Silent failures with poor error surfacing**: Files >6KB silently aborting (#29779), conversations permanently stuck after vision errors (#29571), and quota errors that mask working functionality (#23722) erode developer trust. The community consistently asks for better error messages and recovery mechanisms.
- **State & session management fragility**: Multi-server layout state pollution (#18302), permissions not persisting across sessions (#20066), and subagent permission inheritance breaking silently (#27497) suggest the session lifecycle needs hardening.
- **Billing & pricing transparency**: Multiple issues (#29744, #29642, #29790) about pricing discrepancies and billing page confusion indicate the monetization layer needs clearer communication, especially for the Go subscription tier.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-29

## 1. Today's Highlights
**v0.77.0** ships with **Claude Opus 4.8 support** (including updated adaptive-thinking coverage) and a new `--exclude-tools` / `-xt` flag for selectively disabling specific tools. Extension and non-TUI remote client APIs continue to mature, with several PRs landing to expose RPC controls, streaming behavior, and tool definitions for external integrations. Provider compatibility remains the hottest topic, with multiple fixes landing for OpenRouter quirks and OpenAI GPT-5.5 session-resumption bugs.

## 2. Releases

### v0.77.0
- **Claude Opus 4.8 metadata** — Adds Anthropic's latest Opus model with updated adaptive-thinking coverage.
- **Selective tool disablement** — New `--exclude-tools` / `-xt` CLI flag lets you disable specific built-in, extension, or custom tools while keeping the rest available (closes [#5109](https://github.com/earendil-works/pi/issues/5109)).

## 3. Hot Issues

| # | Title | Why it matters |
|---|-------|----------------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | **openai-codex hangs on "Working…" with zero-usage aborted turns** | 45 comments, 22 👍. GPT-5.5/Codex sometimes leaves the TUI stuck with no streamed output; the only recovery is Escape, which records an aborted turn. Reproducible over several days — likely a streaming/response parsing edge case. |
| [#5148](https://github.com/earendil-works/pi/issues/5148) | **Resuming ChatGPT 5.5 after Claude Opus extended thinking → 400 duplicate item** | Switching providers mid-session produces `Duplicate item found with id msg_17`. Highlights fragility in cross-provider session serialization. 6 👍. |
| [#5149](https://github.com/earendil-works/pi/issues/5149) | **gpt-5.5: 400 Duplicate item after a few turns** | Related to above — fallback `msg_${msgIndex}` IDs collide when blocks lack stable IDs. |
| [#5087](https://github.com/earendil-works/pi/issues/5087) | **GPT-5.5 context window capped at 272K (should be 1.05M)** | Pi's model metadata lags behind OpenAI's published 1,050K-token window; affects token budgeting and compaction behavior. |
| [#5117](https://github.com/earendil-works/pi/issues/5117) | **Qwen 3.7 Max on OpenRouter broken** | OpenRouter sends a `developer` role that Pi doesn't recognize, causing a 400. Blocks a popular reasoning model. |
| [#5103](https://github.com/earendil-works/pi/issues/5103) | **Windows bash detector fails for non-default Git Bash paths** | Users with Git Bash on drives other than `C:\Program Files` get "no bash found" despite `bash.exe` being on PATH. |
| [#5145](https://github.com/earendil-works/pi/issues/5145) | **Skills with `.gitignore` in directory not discovered** | A blanket `.gitignore` containing `*` hides the skill entirely, even if `SKILL.md` isn't ignored — overly aggressive git-aware filtering. |
| [#5098](https://github.com/earendil-works/pi/issues/5098) | **Inline images and arrow keys broken inside tmux** | `detectCapabilities()` returns `images: null` unconditionally when `$TMUX` is set, even when the parent terminal supports image protocols. |
| [#5142](https://github.com/earendil-works/pi/issues/5142) | **Extension API additions for non-TUI remote clients** | Proposes `ctx.executeInputLine()`, `pi.withResumedSession()`, and other RPC primitives for phone/web bridges — signals growing demand for headless operation. |
| [#5120](https://github.com/earendil-works/pi/issues/5120) | **Silent context overflow throws "Cannot continue from message role: assistant"** | When usage exceeds the context window silently (e.g., proxy providers), auto-compaction reintroduces an assistant turn that the API rejects. |

## 4. Key PR Progress

| PR | Title | Description |
|----|-------|-------------|
| [#5110](https://github.com/earendil-works/pi/pull/5110) | **Add Ant-ling Provider (Ling-2.6-1T, Ling-2.6-flash, Ring-2.6-1T)** | New `ant-ling` provider with OpenAI Completions compatibility layer for Ant Group's Ling/Ring 2.6 series. |
| [#5111](https://github.com/earendil-works/pi/pull/5111) | **Detect terminal theme on first startup** | Auto-detects light/dark terminal theme so Pi's UI matches without manual `/theme` selection. |
| [#3102](https://github.com/earendil-works/pi/pull/3102) | **Wrap markdown links in OSC 8 hyperlink sequences** | Makes TUI links clickable (cmd-click) in Kitty, iTerm2, Ghostty, WezTerm, Windows Terminal. Long-requested UX improvement. |
| [#4911](https://github.com/earendil-works/pi/pull/4911) | **Codex device code login** | Adds OAuth device-code flow as a second login option for OpenAI Codex — no more manual token copying. |
| [#2527](https://github.com/earendil-works/pi/pull/2527) | **Fetch GitHub Copilot context window limits at runtime** | Fixes incorrect 1M → 200K context window for Copilot-hosted Claude models; prevents silent truncation. |
| [#5139](https://github.com/earendil-works/pi/pull/5139) | **File review diff empty root cause fix + v0.74.56** | Rewrites `InternalGit.gc()` to protect tree/blob objects so subagent GC doesn't delete blobs needed by the main session. |
| [#5118](https://github.com/earendil-works/pi/pull/5118) | **Buffer reasoning_details that arrive before tool_calls** | Fixes silently dropped encrypted thought signatures when providers (OpenRouter) stream reasoning before tool call chunks. |
| [#5029](https://github.com/earendil-works/pi/pull/5029) | **Abort in-flight LLM call on AgentSession.dispose()** | Prevents orphaned HTTP requests when switching/forking/cloning sessions mid-stream. |
| [#5115](https://github.com/earendil-works/pi/pull/5115) | **Drain follow-ups queued during agent_end** | Fixes follow-ups queued by extensions during `agent_end` getting stuck until the next user message. |
| [#5140](https://github.com/earendil-works/pi/pull/5140) | **APIs for remote-control extensions (RFC)** | Proposes upstreaming extension APIs from `pi-remote-control`: `executeInputLine`, `withResumedSession`, UI overlay controls, etc. |

## 5. Feature Request Trends

1. **New provider integrations** — NVIDIA NIM ([#5101](https://github.com/earendil-works/pi/issues/5101)), Anthropic Vertex ([#5082](https://github.com/earendil-works/pi/issues/5082)), Ant-ling ([PR #5110](https://github.com/earendil-works/pi/pull/5110)), and provider-hosted tools ([#4955](https://github.com/earendil-works/pi/issues/4955)). The community wants broader model access without third-party extensions.

2. **Non-TUI / headless operation** — Multiple issues and PRs ([#5142](https://github.com/earendil-works/pi/issues/5142), [PR #5140](https://github.com/earendil-works/pi/pull/5140), [PR #5107](https://github.com/earendil-works/pi/pull/5107)) request richer RPC/extension APIs for driving Pi from phone apps, web bridges, and editor integrations (Zed ACP).

3. **CLI ergonomics** — `--exclude-tools` (shipped), file-path support for `--system-prompt` ([#5131](https://github.com/earendil-works/pi/issues/5131)), and Markdown export ([#5136](https://github.com/earendil-works/pi/issues/5136)) reflect demand for more flexible CLI configuration.

4. **Session resilience and portability** — Cross-provider session resumption ([#5148](https://github.com/earendil-works/pi/issues/5148)), correct session directory scoping ([#5040](https://github.com/earendil-works/pi/issues/5040)), and branch tree exposure over RPC ([#5119](https://github.com/earendil-works/pi/issues/5119)).

## 6. Developer Pain Points

- **OpenAI GPT-5.5 stability** — The duplicate-message-id errors ([#5148](https://github.com/earendil-works/pi/issues/5148), [#5149](https://github.com/earendil-works/pi/issues/5149)) and Codex hanging ([#4945](https://github.com/earendil-works/pi/issues/4945)) are the top pain points this cycle, collectively affecting every user on the OpenAI provider.

- **OpenRouter compatibility whack-a-mole** — `developer` role rejection with Qwen ([#5117](https://github.com/earendil-works/pi/issues/5117)), missing `reasoning_content` for DeepSeek ([#5106](https://github.com/earendil-works/pi/issues/5106)), reasoning_effort validation ([#4801](https://github.com/earendil-works/pi/issues/4801)), and dropped reasoning signatures ([PR #5118](https://github.com/earendil-works/pi/pull/5118)). OpenRouter's quirks dominate the bug tracker.

- **Windows support gaps** — Non-default Git Bash paths ([#5103](https://github.com/earendil-works/pi/issues/5103)), portable git bash size concerns ([PR #4651](https://github.com/earendil-works/pi/pull/4651)), and ANSI color unreadability in some terminals ([#5124](https://github.com/earendil-works/pi/issues/5124)).

- **Silent failures in edge cases** — Context overflow with wrong error message ([#5120](https://github.com/earendil-works/pi/issues/5120)), GC deleting needed objects ([PR #5139](https://github.com/earendil-works/pi/pull/5139)), and tool results crashing on missing `content` ([PR #5144](https://github.com/earendil-works/pi/pull/5144)) suggest error handling could be hardened across the tool execution pipeline.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-29

## 1. Today's Highlights
The community is experiencing a massive surge in architectural contributions following the recent v0.16.1 nightly release. Major development focus is divided between a comprehensive overhaul of the Terminal User Interface (TUI) for a denser, more compact UX, and critical architectural refactoring of the `qwen serve` daemon to support non-blocking prompts and OpenTelemetry tracing. Additionally, new high-impact proposals aim to fundamentally shift the context compaction model toward a Claude Code-style "summary + restoration attachments" approach.

## 2. Releases
*   **v0.16.1-nightly.20260528.34b7d472e**: This latest nightly build includes early fixes for CLI startup warnings (now correctly surfacing to stderr before the TUI renders) and ongoing TUI spacing density adjustments. 
    *   **Key merged PR:** [fix(cli): surface startup warnings on stderr before TUI render (#4461)](https://github.com/QwenLM/qwen-code/pull/4461)

## 3. Hot Issues
1.  **[Daemon] POST /prompt should be non-blocking ([#4582](https://github.com/QwenLM/qwen-code/issues/4582))**: Currently, the daemon holds the HTTP connection open until the agent finishes. Decoupling the trigger from completion is crucial for preventing timeout errors in production infrastructure.
2.  **Replace Tail-Preservation Compaction ([#4592](https://github.com/QwenLM/qwen-code/issues/4592))**: Proposes replacing the current 70/30 split compaction with a full-history summary + restoration attachments. This is a vital discussion for fixing long-term context degradation.
3.  **Mode B Feature-Priority Roadmap toward v0.16 ([#4175](https://github.com/QwenLM/qwen-code/issues/4175))**: A highly active tracking issue (41 comments) mapping out the path to a production-ready `qwen serve` daemon.
4.  **API Error: Body Timeout ([#4604](https://github.com/QwenLM/qwen-code/issues/4604))**: Users working with local LLMs are experiencing consistent 300-second body timeouts, highlighting a critical need for better local proxy/timeout handling.
5.  **Rider IDE OAuth Login Loops ([#4493](https://github.com/QwenLM/qwen-code/issues/4493))**: JetBrains Rider users are trapped in infinite redirect loops when attempting to log in and access Alibaba Cloud token plans.
6.  **Refactor: Merge IDE Context into User Messages ([#3712](https://github.com/QwenLM/qwen-code/issues/3712))**: Aims to stop injecting IDE context as separate history entries, which currently pollutes API history and breaks context flow.
7.  **Align Daemon/ACP Session Tracing ([#4602](https://github.com/QwenLM/qwen-code/issues/4602))**: The daemon path currently bypasses standard interaction and tool spans. This issue tracks closing the observability gap.
8.  **Zero-Config Built-in Computer Use ([#4591](https://github.com/QwenLM/qwen-code/issues/4591))**: A highly requested feature to integrate `computer_use__*` tools natively so desktop apps can be driven without user-side MCP setup.
9.  **TUI Display and Spacing Optimization Epic ([#4588](https://github.com/QwenLM/qwen-code/issues/4588))**: Addresses five recurring visual problems to make the CLI denser, quieter, and more in line with Claude Code's visual language.
10. **`/clear` Should Not Switch Session IDs ([#4593](https://github.com/QwenLM/qwen-code/issues/4593))**: Highlights a frustrating bug where clearing context generates a new session ID, breaking debugging and log lookups.

## 4. Key PR Progress
1.  **[feat(computer-use): zero-config built-in via open-computer-use MCP (#4590)](https://github.com/QwenLM/qwen-code/pull/4590)**: Implements the zero-config desktop control requested by the community, adding 9 native tools for screen interaction.
2.  **[refactor(core)!: replace tail-preservation compaction (#4599)](https://github.com/QwenLM/qwen-code/pull/4599)**: A breaking/ major refactor implementing the Claude Code-style full history summary model to preserve context integrity over long sessions.
3.  **[fix(tui): Tighten message and tool spacing (#4595)](https://github.com/QwenLM/qwen-code/pull/4595)**: Centralizes conversation spacing for a denser, less cluttered terminal experience.
4.  **[fix(core): disable undici 300s bodyTimeout (#4605)](https://github.com/QwenLM/qwen-code/pull/4605)**: Directly resolves the body timeout errors users experience when querying local LLMs without proxies.
5.  **[refactor(serve): extract DaemonWorkspaceService (#4563)](https://github.com/QwenLM/qwen-code/pull/4563)**: Significantly cleans up the daemon architecture by extracting workspace capabilities (File/Auth/Agents/Memory) from the session bridge.
6.  **[feat(telemetry): trace daemon prompt lifecycle (#4556)](https://github.com/QwenLM/qwen-code/pull/4556)**: Adds OpenTelemetry propagation across HTTP routes and ACP bridges to give developers production-grade tracing.
7.  **[fix(ui): distinguish auto approval mode indicators (#4600)](https://github.com/QwenLM/qwen-code/pull/4600)**: Introduces distinct visual mappings for `auto-accept edits` vs. classifier `auto mode` to reduce user confusion.
8.  **[fix(tui): Make thinking output transient (#4598)](https://github.com/QwenLM/qwen-code/pull/4598)**: Changes persistent thinking outputs into bounded 1-2 line transient previews, saving massive amounts of vertical screen space.
9.  **[fix(core): use undici fetch for IDE proxy requests (#4607)](https://github.com/QwenLM/qwen-code/pull/4607)**: Fixes the DOMException errors occurring in VSCode by aligning the fetch implementation with the bundled undici package.
10. **[feat(cli): TUI display optimization — compact-first (#4422)](https://github.com/QwenLM/qwen-code/pull/4422)**: A foundational PR replacing global `compactMode` with a border-less layout and a Ctrl+O frozen transcript overlay.

## 5. Feature Request Trends
*   **Observability & Stats:** Developers want deeper insights into their usage. There is a strong trend toward cross-session persistent tracking, interactive dashboards (`/stats` enhancements), and standardized OpenTelemetry tracing across both CLI and Daemon modes.
*   **TUI Visual Alignment:** The community is actively pushing for a denser, quieter CLI experience. Removing emojis, tightening spacing, and making "thinking" output transient are top priorities to match the UX of leading competitors.
*   **Agent Autonomy:** Requests like Computer Use integration and system sleep prevention indicate a desire to use Qwen Code for long-running, unassisted background tasks. 
*   **Simplified Installations:** Users are asking for standalone executables and OpenCode-style `curl | bash` installation scripts to bypass Node.js/NPM setup friction.

## 6. Developer Pain Points
*   **Local LLM Timeouts:** The hardcoded 300-second undici body timeout is a major frustration for users running heavy local models (via LM Studio, Ollama, etc.).
*   **Context Memory Leaks:** Memory growing unboundedly during long sessions ([#2128](https://github.com/QwenLM/qwen-code/issues/2128)) and false "compressed turn" errors when rewinding ([#4579](https://github.com/QwenLM/qwen-code/issues/4579)) indicate that the current session memory management struggles under sustained use.
*   **Ctrl+C Fatfinger in IDEs:** Users operating within PyCharm and other IDE terminals report that recent updates have made it far too easy to accidentally kill the agent process when attempting to copy text.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-05-29

## 1. Today's Highlights

The community saw a massive surge in contributions focused on internationalization (i18n) and fixing the TUI composer. Developers are heavily frustrated by incomplete localization (such as hardcoded English context menus) and broken Chinese input method support. Meanwhile, core contributors advanced foundational architecture, merging improvements for custom slash command hooks, session state forking, and security policies for agent shell execution.

## 2. Releases

No new official releases were published in the last 24 hours.

## 3. Hot Issues

1. **Docker pull causes severe garbled characters / server freeze** ([#1615](https://github.com/Hmbown/CodeWhale/issues/1615)): A highly active issue (191 comments) where users report that running the default Docker image completely breaks the Linux TUI, requiring a hard server reset. It highlights critical pain points in the out-of-the-box deployment experience.
2. **Feature request: Support custom DeepSeek-compatible API providers** ([#2247](https://github.com/Hmbown/CodeWhale/issues/2247)): Users are requesting native support for third-party DeepSeek-compatible APIs and local deployments. This is a highly requested feature to break the lock-in to the official DeepSeek API.
3. **Chinese Input Method (IME) not adapted** ([#2323](https://github.com/Hmbown/CodeWhale/issues/2323)): The TUI composer fails to handle IME events correctly, causing typing interference, unhidden placeholders, and ghost text in configuration dialogs.
4. **Security hole: `allow_shell: false` doesn't block `task_shell_start`** ([#2303](https://github.com/Hmbown/CodeWhale/issues/2303)): A significant security concern where the `allow_shell` gate blocks `exec_shell` but is bypassed by `task_shell_start`, making the default security policy both incomplete and confusing.
5. **Right-click context menu renders in English under non-English locales** ([#2307](https://github.com/Hmbown/CodeWhale/issues/2307)): Users noticed that `mouse_ui.rs` contains hardcoded English strings, breaking the immersion of the localized TUI.
6. **Cannot start message with `/` (no escape mechanism)** ([#2310](https://github.com/Hmbown/CodeWhale/issues/2310)): The TUI aggressively interprets any `/` as a slash command, preventing users from sending standard text starting with a slash.
7. **`/statusline` picker hides undiscovered options** ([#2309](https://github.com/Hmbown/CodeWhale/issues/2309)): The UI picker fails to discover available status-line chips dynamically; it only displays items manually hardcoded into `config.toml`.
8. **Chinese garbled characters in Agent real-time output** ([#1675](https://github.com/Hmbown/CodeWhale/issues/1675)): Similar to the Docker issue, Agent streaming outputs suffer from encoding failures, disrupting workflows.
9. **Request for GLIBC_2.38 backward compatibility** ([#2299](https://github.com/Hmbown/CodeWhale/issues/2299)): The current binary requires GLIBC_2.39, breaking compatibility with stable distributions like Debian/Deepin. 
10. **Unofficial VS Code extensions raise COPYRIGHT concerns** ([#2327](https://github.com/Hmbown/CodeWhale/issues/2327)): Community members flagged unauthorized extensions using the "CodeWhale" trademark on the VS Code Marketplace.

## 4. Key PR Progress

1. **feat: enforce allowed tools for custom slash commands** ([PR #2326](https://github.com/Hmbown/CodeWhale/pull/2326)): Lays the groundwork for custom slash command hooks by parsing frontmatter for `description` and `allowed-tools`.
2. **fix(tui): skip hidden worktrees in workspace discovery** ([PR #2329](https://github.com/Hmbown/CodeWhale/pull/2329)): Prevents TUI saturation and excessive disk I/O by ignoring hidden git worktrees (like `.claude/worktrees/`) during sub-agent workspace walks.
3. **fix(composer): allow slash-space messages** ([PR #2316](https://github.com/Hmbown/CodeWhale/pull/2316)): Resolves Issue #2310 by updating the classifier so inputs like `/ hello` are treated as plain text rather than failing slash commands.
4. **fix(i18n): localize right-click context menu labels** ([PR #2320](https://github.com/Hmbown/CodeWhale/pull/2320)): Addresses Issue #2307 by routing hardcoded strings in `mouse_ui.rs` through the standard localization macros.
5. **feat(hooks): allow message_submit to transform submitted text** ([PR #2318](https://github.com/Hmbown/CodeWhale/pull/2318)): Implements mutable hooks for message submissions, allowing external scripts to block, replace, or alter text via JSON stdin/stdout.
6. **feat(state): add parent_entry_id on the message table** ([PR #2308](https://github.com/Hmbown/CodeWhale/pull/2308)): Updates the SQLite schema to support session branching/forking.
7. **fix: approval dialog shows empty params** ([PR #2325](https://github.com/Hmbown/CodeWhale/pull/2325)): Fixes a race condition where `pending_tool_uses` was drained before the UI could render the arguments in the approval dialog.
8. **fix(mcp): Fix legacy MCP SSE connections** ([PR #2301](https://github.com/Hmbown/CodeWhale/pull/2301)): Corrects regressions in connecting to older MCP endpoints ending in `/sse` and fixes JSON-RPC ID string handling.
9. **feat(state): update terminal tab title to 'CodeWhale'** ([PR #2319](https://github.com/Hmbown/CodeWhale/pull/2319)): Cleanup PR replacing legacy "DeepSeek TUI" window titles with the new project branding.
10. **fix(skills): union EngineConfig.skills_dir into discovery** ([PR #2312](https://github.com/Hmbown/CodeWhale/pull/2312)): Fixes a dead fallback bug where custom skills directories were silently ignored if workspace skills were present.

## 5. Feature Request Trends

*   **Third-Party & Local LLM Provider Support:** There is a massive demand to decouple the tool from the official DeepSeek API. Users want native configuration for vLLM, OpenAI-compatible endpoints, SiliconFlow, and local deployments.
*   **Robust Internationalization (i18n) & IME Support:** While translations exist, the TUI suffers from poor IME integration (specifically Chinese input) and incomplete localization coverage in system-level UI components.
*   **Granular Multi-Model Configuration:** Users want the ability to configure and dynamically route between multiple models concurrently (e.g., using distinct models for vision, OCR, and code generation).

## 6. Developer Pain Points

*   **Encoding & Rendering Bugs:** Chinese garbled characters remain a high-frequency frustration, particularly inside Docker containers and during Agent streaming tasks.
*   **Out-of-the-box Deployment Friction:** The requirement for newer GLIBC versions (2.39) and the broken Docker image create a poor first impression for users trying to bootstrap the tool.
*   **Incomplete Security Sandboxing:** The inconsistent enforcement of the `allow_shell` policy between different tool-calling modes makes it difficult for developers to trust the Agent's autonomy in enterprise environments.
*   **Legacy Configuration Fragmentation:** The transition from `~/.deepseek` to `~/.codewhale` is causing confusion, with users reporting split configurations and undocumented fallback behaviors.

</details>