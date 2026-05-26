# AI CLI Tools Community Digest 2026-05-27

> Generated: 2026-05-26 22:26 UTC | Tools covered: 9

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

## Cross-Tool Comparison Report: AI CLI Ecosystem — 2026-05-27

### 1. Ecosystem Overview
The AI CLI tooling landscape is transitioning rapidly from simple terminal-based chat interfaces into sophisticated, autonomous coding agents. The current development cycle is heavily defined by "agentic growing pains": as tools take on longer, more complex tasks, they are hitting fundamental scaling limits in memory management, provider API reliability, and context window economics. Additionally, the ecosystem is coalescing around standardized extensibility—specifically the Model Context Protocol (MCP)—while striving to maintain stability across highly fragmented environments (Windows, WSL, Wayland, and SSH). 

### 2. Activity Comparison
Activity remains high across the board, with the most mature tools absorbing the highest volume of community bug reports and architectural proposals.

| Tool | Active Hot Issues | Key PRs Tracked (24h) | Release Status (24h) | Primary Focus Area |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 10 | No Release | Cost-controls, Cross-surface syncing, Windows stability |
| **OpenAI Codex** | 10 | 10 | **v0.134.0** (Rust) | Cloud enterprise config, Prompt hooks, Windows stability |
| **Gemini CLI** | 10 | 10 | No Release | PTY stability, Sub-agent reliability, Security hardening |
| **GitHub Copilot CLI**| 10 | 0 | **v1.0.55-1** | TUI terminal interference, Sub-agent model routing |
| **Kimi Code CLI** | 6 | 7 | **v1.45.0** | Rate-limiting for parallel agents, Third-party model support |
| **OpenCode** | 10 | 10 | No Release | OpenAI provider streaming freezes, Vim/Power-user UX |
| **Pi** | 10 | 12 | No Release | Provider streaming reliability, TUI lag in long sessions |
| **Qwen Code** | 10 | 10 | Nightly / SDK prevs| OOM mitigation, Daemon/Server architecture (`qwen serve`) |
| **CodeWhale** | 10 | 10 | **v0.8.46, v0.8.47**| Project rebranding, Concurrency deadlocks, CJK rendering |

### 3. Shared Feature Directions
Analyzing community feedback reveals strong convergence in several key areas:

*   **Robust Provider & Proxy Support (Claude, Kimi, CodeWhale, OpenCode):** Users are increasingly routing traffic through custom base URLs, enterprise proxies, or local inference engines (vLLM, Ollama). Tools are scrambling to fix streaming timeouts, handle non-standard error codes, and support bring-your-own-key (BYOK) setups seamlessly.
*   **Cross-Tool Standardization via `AGENTS.md` (Pi, Qwen, CodeWhale):** Developers are utilizing multiple AI coding agents simultaneously and demanding global, shared instruction files (e.g., `~/.agents/AGENTS.md`) to avoid duplicating project contexts and security protocols across different tools.
*   **MCP Lifecycle Management (Codex, Gemini, Qwen):** The Model Context Protocol is standard, but current implementations are brittle. Communities are demanding lazy/on-demand loading of MCP servers to speed up CLI startup times, better handling of OAuth tokens, and standardized SSE transports.
*   **Autonomous Guardrails & Cost Controls (Claude, Codex, OpenCode):** As agents run longer tasks, users are experiencing "runaway loops" that burn through API credits or fail to self-correct. There is a unified demand for strict context window limits, dynamic sub-agent model downgrading, and kill-switches for infinite retry loops.
*   **Windows / WSL / Wayland Stability (All Tools):** Terminal UI (TUI) stability on non-standard terminals (WSL, tmux, Cygwin, Wayland) remains a universal pain point, with specific shared bugs regarding IME (Input Method Editor) handling and multi-byte (CJK) character rendering.

### 4. Differentiation Analysis
Despite shared goals, tools are carving out distinct technical niches:

*   **Anthropic & OpenAI (Enterprise Scale & Config):** Claude Code and OpenAI Codex are uniquely focused on enterprise cloud configurations. Codex's push for a cloud-managed config stack and Claude's cross-surface syncing (CLI to Desktop) show a focus on large-scale enterprise team workflows.
*   **Qwen Code (Daemon Architecture):** Qwen is differentiating itself heavily via its `qwen serve` daemon mode. By exposing REST, SSE, and ACP (Agent Communication Protocol) endpoints, Qwen is positioning itself as a headless background service that other IDEs and clients can plug into.
*   **OpenCode & Pi (Provider Agnosticism):** These tools are highly focused on being universal clients. Their development resources are heavily tied up in fixing streaming bugs for OpenAI, DeepSeek, and local runners, catering to power users who swap models frequently.
*   **CodeWhale (Rust-based TUI Performance):** Differentiated by its Rust foundation, CodeWhale is pushing the boundaries of native OS integrations (taskbar progress, granular execution policies) while dealing heavily with low-level concurrency deadlocks.

### 5. Community Momentum & Maturity
*   **Most Rapid Iteration:** **CodeWhale** (formerly DeepSeek TUI) and **Qwen Code** show massive momentum. CodeWhale executed a major version rebrand and merged 9 community PRs in a single day. Qwen's community is driving massive structural changes (daemon mode) directly via GitHub issues. **OpenAI Codex** is also moving fast, landing a massive 5-PR cloud-config stack and prompt hooks in one day.
*   **Most Mature Ecosystems:** **Claude Code** and **GitHub Copilot CLI** display signs of mature ecosystem development. Their feedback loops are less about "will it compile" and more about advanced workflow routing, cost-optimization, and complex multi-agent orchestration. 
*   **Emerging Growth:** **Kimi Code** and **Gemini CLI** communities are heavily focused on fundamental reliability—patching basic sub-agent false-success reporting and fixing rate-limiting bottlenecks.

### 6. Trend Signals
*   **The "Context-OOM" Crisis is Here:** As context windows scale to 1M+, AI CLIs are crashing under the weight of their own context history. Qwen, Pi, and OpenCode are all battling V8 heap exhaustion. **Signal:** Developers need tools that aggressively truncate tool outputs, compact history efficiently, and bound memory usage natively. 
*   **Shift from TUI to Headless Daemons:** The transition from interactive terminal apps to background daemons (served via HTTP/SSE) is accelerating. **Signal:** Developers increasingly view AI agents as persistent background processes rather than interactive chat interfaces. IDE and web-client integrations will become the primary UI for these agents.
*   **The Push for "Steering":** Users are frustrated by autonomous loops that cannot be interrupted or "steered" mid-flight without canceling the task entirely. **Signal:** The next frontier in agent UX will be real-time, granular intervention—allowing developers to adjust context, change models, or tweak instructions while the agent is actively thinking.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** `github.com/anthropics/skills` | **Snapshot Date:** May 27, 2026

---

## 1. Top Skills Ranking (Most-Discussed PRs)
While comment counts on PRs are evolving, the following open Pull Requests represent the most substantial, enduring, and actively updated contributions in the ecosystem:

1. **[Add ODT Skill — OpenDocument Creation & Parsing](https://github.com/anthropics/skills/pull/486)** (PR #486)
   * **Functionality:** Allows Claude to create, fill, and convert OpenDocument Format files (`.odt`, `.ods`) to HTML, addressing a major gap in open-standard document generation.
   * **Status:** `[OPEN]` (Created Mar 1, 2026 | Updated Apr 14, 2026)
   * **Highlights:** Provides crucial interoperability with LibreOffice and ISO standard document workflows.

2. **[Add document-typography skill](https://github.com/anthropics/skills/pull/514)** (PR #514)
   * **Functionality:** Automated typographic quality control for AI-generated documents, preventing orphan word wraps, stranded widow paragraphs, and numbering misalignments.
   * **Status:** `[OPEN]` (Created Mar 4, 2026)
   * **Highlights:** Solves a universal pain point where LLMs generate structurally correct but typographically messy documents. 

3. **[Improve frontend-design skill clarity and actionability](https://github.com/anthropics/skills/pull/210)** (PR #210)
   * **Functionality:** Revises the existing `frontend-design` skill to reduce ambiguity, ensuring instructions are immediately actionable for Claude within a single context window.
   * **Status:** `[OPEN]` (Created Jan 5, 2026)
   * **Highlights:** A meta-improvement focusing on token efficiency and strict behavioral steering.

4. **[feat: add testing-patterns skill](https://github.com/anthropics/skills/pull/723)** (PR #723)
   * **Functionality:** Introduces a comprehensive testing framework skill covering the Testing Trophy model, React component testing, pure functions, and edge cases.
   * **Status:** `[OPEN]` (Created Mar 22, 2026)
   * **Highlights:** Moves Claude from writing functional code to establishing robust, professional-grade software testing paradigms.

5. **[Add skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** (PR #83)
   * **Functionality:** Introduces two "meta-skills" designed to evaluate other skills across five dimensions (structure, documentation) and identify security flaws.
   * **Status:** `[OPEN]` (Created Nov 6, 2025)
   * **Highlights:** Represents an early push toward community self-regulation and automated skill validation.

6. **[feat: add ServiceNow platform skill](https://github.com/anthropics/skills/pull/568)** (PR #568)
   * **Functionality:** A broad enterprise assistant for ServiceNow, covering ITSM, SecOps, ITAM, Vulnerability Response, and IntegrationHub.
   * **Status:** `[OPEN]` (Created Mar 8, 2026)
   * **Highlights:** Indicates strong enterprise demand for Claude Code integration into legacy/complex corporate IT infrastructure.

---

## 2. Community Demand Trends (From Issues)
Analysis of active Issues reveals distinct, high-demand directions the community wants the Skills ecosystem to take:

* **Enterprise & Organizational Sharing:** The most heavily requested feature is org-wide skill sharing. Users want shared libraries or direct links, bypassing the need to manually download and upload `.skill` files via Slack/Teams ([Issue #228](https://github.com/anthropics/skills/issues/228)).
* **Security & Trust Boundaries:** As the marketplace grows, users are increasingly concerned about namespace impersonation (`anthropic/`) by community members. There is high demand for native trust scoring, permissions isolation, and security guardrails ([Issue #492](https://github.com/anthropics/skills/issues/492), [Issue #1175](https://github.com/anthropics/skills/issues/1175)).
* **MCP & Data Optimization:** Developers want Skills seamlessly exposed as Model Context Protocol (MCP) tools, accompanied by better context window management. Specifically, filtering/compressing large MCP data payloads (like database returns) before they hit Claude's context limit ([Issue #16](https://github.com/anthropics/skills/issues/16), [Issue #1102](https://github.com/anthropics/skills/issues/1102)).
* **Cross-Platform & Local Host Support:** Persistent demand for Skills to function flawlessly with AWS Bedrock, API-based setups, and native Windows environments without subprocess/pipe errors ([Issue #29](https://github.com/anthropics/skills/issues/29), [Issue #1099](https://github.com/anthropics/skills/pull/1099)).

---

## 3. High-Potential Pending Skills
These open PRs address specific technical bottlenecks and are highly likely to be merged or significantly influence upcoming updates:

* **[fix(docx): prevent tracked change w:id collision](https://github.com/anthropics/skills/pull/541)** (PR #541) - Solves a critical OOXML document corruption bug when tracked changes intersect with bookmarks.
* **[fix(skill-creator): warn on unquoted YAML descriptions](https://github.com/anthropics/skills/pull/539)** (PR #539) - Resolves silent parsing failures during skill creation.
* **[skill-creator: fix Windows subprocess bugs](https://github.com/anthropics/skills/pull/1050)** (PR #1050) - Essential compatibility patch fixing `[WinError 2]` for Windows 11 CLI users.
* **[docs: add CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** (PR #509) - A vital infrastructure PR to address the repo's low community health score and standardize open-source contributions.

---

## 4. Skills Ecosystem Insight
The community's most concentrated demand is shifting away from basic code-generation skills toward **enterprise-grade document interoperability (ODT/PDF/DOCX) and strict security/trust frameworks** necessary for safe corporate deployment.

---

# Claude Code Community Digest — 2026-05-27

## 1. Today's Highlights

No new releases shipped in the last 24 hours, but the community remains highly active around cost-control and model-behavior issues. A promising documentation PR revealing the previously hidden `CLAUDE_CODE_ATTRIBUTION_HEADER` environment variable could be a game-changer for developers using custom base URLs with third-party providers. Meanwhile, multiple issues around Cowork sandbox stability on Windows and macOS crash loops continue to draw attention.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

1. **[#60226](https://github.com/anthropics/claude-code/issues/60226) — Claude self-identifies blocking gaps but completes analysis anyway (43 comments)**
   The model acknowledges its reasoning is unfounded mid-response but doesn't gate output on that admission. Community sees this as a distinct failure mode from "act-first bias" — it's a *self-correction bypass* that undermines trust in agent outputs.

2. **[#20697](https://github.com/anthropics/claude-code/issues/20697) — Sync Skills between Claude Desktop and Claude Code CLI (26 comments, 👍89)**
   High-demand request to unify the Skills/knowledge layer across Desktop and CLI. With 89 upvotes, this is one of the most-wanted integrations. Users are frustrated by maintaining separate skill configurations per surface.

3. **[#28791](https://github.com/anthropics/claude-code/issues/28791) — Sync conversation history between CLI and Desktop (20 comments, 👍65)**
   Companion to #20697 — users want seamless context continuity when switching between CLI and Desktop. The two sync requests combined represent a clear "unified experience" ask.

4. **[#53442](https://github.com/anthropics/claude-code/issues/53442) — Cowork Google Drive MCP can't see Workspace Shared Drives (16 comments, 👍19)**
   A blocking bug for enterprise users: the Google Drive MCP integration under Cowork only accesses personal drives, completely missing shared/team drives. No workaround exists.

5. **[#61692](https://github.com/anthropics/claude-code/issues/61692) — Sonnet 4.6 blocked by false "usage credits required" error (8 comments)**
   Users on the latest Sonnet 4.6 model are hitting a spurious billing gate that prevents usage entirely. Marked as duplicate but the issue persists across Linux and other platforms.

6. **[#62063](https://github.com/anthropics/claude-code/issues/62063) — Defaults to 1M context on fresh sessions with no workaround on Pro plan (4 comments, 👍4)**
   On Pro plans, Claude Code apparently defaults to the full 1M context window, burning through usage quotas rapidly. Users want a way to set a default context size per session or project.

7. **[#54143](https://github.com/anthropics/claude-code/issues/54143) — codex:resume burned 27% of weekly limit with zero forward progress (5 comments)**
   A codex plugin rescue loop ran for ~12 hours consuming 71%→98% of the weekly usage cap without completing any actual work. Highlights the risk of unbounded autonomous agent loops.

8. **[#60890](https://github.com/anthropics/claude-code/issues/60890) — Keyboard unresponsive after /btw answer while main task runs (4 comments, 👍2)**
   TUI bug where the agent view's keyboard shortcuts (Esc/f/x) freeze after a `/btw` response. A reproducible UX regression that leaves users stuck mid-workflow.

9. **[#62431](https://github.com/anthropics/claude-code/issues/62431) — /exit accidentally removes worktree with live sessions still active (2 comments)**
   Data-loss risk: exiting a session prompts to clean up the worktree without checking if other Claude Code sessions are using it. Removing it breaks those live sessions.

10. **[#62596](https://github.com/anthropics/claude-code/issues/62596) — macOS Helper crash loop in c-ares (`ares_dns_rr_get_ttl`) (2 comments)**
    Claude Desktop on macOS enters a SIGTRAP crash loop caused by a suspected use-after-free in the c-ares DNS library. Triggers a false "Endpoint Security blocked" dialog, confusing users about the actual cause.

---

## 4. Key PR Progress

1. **[#62346](https://github.com/anthropics/claude-code/pull/62346) — Document `CLAUDE_CODE_ATTRIBUTION_HEADER` for custom base URL setups** *(OPEN)*
   Documents a previously unknown environment variable that controls the attribution header injected into system prompts. Critical for third-party proxy users who were suffering guaranteed cache misses due to per-request header changes.

2. **[#62264](https://github.com/anthropics/claude-code/pull/62264) — Add `block-build-commands` hook example for hard execution guardrails** *(OPEN)*
   Adds a PreToolUse hook that blocks build/compilation commands (cmake, make, gradle, cargo, etc.) from executing via the Bash tool. Provides a clean pattern for teams wanting strict execution boundaries.

3. **[#62597](https://github.com/anthropics/claude-code/pull/62597) — Fix 10 bugs across scripts and workflows** *(OPEN)*
   Community contribution hardening CI/CD: replaces hardcoded repo names with env vars, adds null-safety for workflow dispatch events, and adds error handling to label-editing scripts. Defensive infrastructure improvement.

4. **[#62586](https://github.com/anthropics/claude-code/pull/62586) — Update security-guidance plugin** *(CLOSED — merged)*
   Ships an updated security-guidance plugin that acts as an automatic security reviewer, catching vulnerabilities at code-generation time. Proactive security hardening of generated code.

5. **[#62592](https://github.com/anthropics/claude-code/pull/62592) — Update security-guidance plugin (README only)** *(CLOSED)*
   Companion doc update for the security plugin merge above.

6. **[#4943](https://github.com/anthropics/claude-code/pull/4943) — Add shell completions (bash, zsh, fish)** *(OPEN, long-running since Aug 2025)*
   Adds static tab-completion scripts for three major shells. Still open after 10 months — suggests the team may be considering integrated native completions instead.

7. **[#60427](https://github.com/anthropics/claude-code/pull/60427) — Use standard GitHub capitalization in README** *(OPEN)*
   Minor but telling: community-driven doc polish ensuring consistent product naming conventions.

8. **[#60732](https://github.com/anthropics/claude-code/pull/60732) — Polish plugins README wording** *(OPEN)*
   Another doc polish PR improving the plugin ecosystem description. Signals active community engagement with the plugin documentation.

9. **[#58673](https://github.com/anthropics/claude-code/pull/58673) — Placeholder PR** *(OPEN)*
   Appears to be an accidental or test submission with no meaningful content. Likely to be closed.

10. **[#26588 (issue → implicit PR context)](https://github.com/anthropics/claude-code/issues/26588) — Marketplace plugin cloning should default to HTTPS** *(Issue, 👍26)*
    Not a PR itself, but highlights that `plugin marketplace add` still defaults to SSH for cloning, which fails for users without SSH key configuration. A clear quick-win fix opportunity.

---

## 5. Feature Request Trends

- **Unified cross-surface experience** — The two highest-voted requests (#20697 at 👍89, #28791 at 👍65) demand syncing Skills and conversation history between CLI and Desktop. This is the dominant theme.
- **Cost controls and visibility** — Multiple issues (#62063, #54143, #61692) reflect anxiety about uncontrolled context window sizes and autonomous agent loops burning through quotas. Users want per-session cost caps, configurable default context sizes, and kill-switch mechanisms for runaway agents.
- **Skill/plugin management overhaul** — [#53889](https://github.com/anthropics/claude-code/issues/53889) calls the current skill management system "fragmented and confusing" across cowork, skills, plugins, and routines namespaces.
- **Better notification UX in VSCode** — [#57230](https://github.com/anthropics/claude-code/issues/57230) requests native system/toast notifications when Claude needs attention, since current tab-dot indicators are too subtle.

---

## 6. Developer Pain Points

- **Cost explosions from autonomous agents** — The most acute frustration. The codex-rescue loop consuming 27% of a weekly quota with zero progress (#54143) and the 1M context default (#62063) together paint a picture of insufficient cost guardrails. Developers on Pro plans feel especially penalized.
- **Windows Cowork instability** — A cluster of issues around VHDX placement failures on Intel RST controllers (#61872), virtiofs serving truncated files (#50873), and sandbox environment leaking into child processes (#44857) indicate the Windows Cowork/sandbox experience is significantly behind macOS/Linux.
- **Model behavior regressions** — The self-identified-but-ignored reasoning gap (#60226) and sub-agents marking work as PASS without verification (#62604) erode developer trust in autonomous workflows. When agents can't self-assess accurately, the entire multi-agent paradigm becomes unreliable.
- **TUI input and rendering bugs** — Diacritical marks disappearing on uppercase (#62609), image paste requiring two attempts on Windows (#62279), keyboard freeze after `/btw` (#60890), and inability to scroll in the CLI chatbox (#62613) suggest the terminal UI layer needs hardening, especially for international keyboards and Windows terminals.
- **Fragmented skill/plugin ecosystem** — The lack of sync between surfaces, inconsistent marketplace defaults (SSH vs HTTPS #26588), and confused terminology across skills/plugins/routines (#53889) indicate the extension model needs architectural consolidation.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-27

## 1. Today's Highlights
OpenAI shipped **codex-cli `rust-v0.134.0`**, adding local conversation search and making `--profile` the primary selector across CLI, TUI, permissions, and sandbox flows. The engineering team landed a massive 5-PR cloud-managed config stack and a prompt hooks framework, signaling a major push toward enterprise-grade configuration and plugin extensibility. Meanwhile, Windows and connectivity issues dominate community bug reports.

## 2. Releases

### codex-cli `rust-v0.134.0`
- **Local conversation search**: Case-insensitive content matches with result previews across local conversation history ([#23519](https://github.com/openai/codex/issues/23519), [#23921](https://github.com/openai/codex/issues/23921)).
- **`--profile` as primary selector**: Unified profile selection across CLI, TUI permissions, and sandbox flows; legacy profile configs are now rejected with a migration guide.

---

## 3. Hot Issues

| # | Issue | Why it matters |
|---|-------|----------------|
| 1 | [#23340](https://github.com/openai/codex/issues/23340) — 480 KB single log lines from chain-nested `turn{}` tracing | A `/goal` long-running loop generated **34 GB of logs in one day** (10 comments), highlighting a serious tracing-span explosion for autonomous agents. |
| 2 | [#24260](https://github.com/openai/codex/issues/24260) — gpt-5.5 `xhigh` turn stalled 30 min before first output | Codex Desktop showed `Thinking` for 30+ minutes before any output appeared (3 👍), raising concerns about the `xhigh` reasoning UX on complex tasks. |
| 3 | [#24373](https://github.com/openai/codex/issues/24373) — Google Drive Sheets connector read-only after reinstall | The Sheets plugin can read but cannot write; shared read quota also returns 429 (2 👍), blocking data-entry workflows. |
| 4 | [#24584](https://github.com/openai/codex/issues/24584) — Windows app stuck spinning; Auto-review never activates | Users report prompts never send and the UI spins indefinitely (7 comments), a critical usability blocker on Windows. |
| 5 | [#24618](https://github.com/openai/codex/issues/24618) — `/responses/compact` hangs 30–60 min or returns 504 | Compaction can stall for up to an hour while normal `responses_websocket` continues working, indicating a separate endpoint bottleneck. |
| 6 | [#24145](https://github.com/openai/codex/issues/24145) — Dollar-sign menu bloated with irrelevant plugins (CLOSED) | Users discovered unconfigured plugins flooding the `$` menu (4 👍); resolved quickly after community feedback. |
| 7 | [#2335](https://github.com/openai/codex/issues/2335) — Optional / lazy loading of MCP servers | Long-running MCP servers delay CLI startup; 31 👍 makes this the highest-voted enhancement. |
| 8 | [#14144](https://github.com/openai/codex/issues/14144) — MCP OAuth reauth succeeds but session uses stale token | After re-auth, the active session keeps the old refresh token until restart (6 👍), a reliability pain for OAuth MCP integrations. |
| 9 | [#23804](https://github.com/openai/codex/issues/23804) — Adding Figma MCP returns 400 on Windows (5 👍) | Windows users hit a 400 error configuring the Figma MCP server, suggesting auth or platform-specific regressions. |
| 10 | [#21073](https://github.com/openai/codex/issues/21073) — Auto-resume CLI session when usage limit resets (8 👍) | Users want Codex to automatically retry at the stated reset time instead of requiring manual intervention mid-task. |

---

## 4. Key PR Progress

| # | PR | Summary |
|---|----|---------|
| 1 | [#24634](https://github.com/openai/codex/pull/24634) — **Add prompt hooks** | Introduces prompt hook config fields (`prompt`, `model`, `timeout`, `statusMessage`, `continueOnBlock`) enabling plugins to intercept and influence prompt dispatch. |
| 2 | [#24619](https://github.com/openai/codex/pull/24619) → [#24622](https://github.com/openai/codex/pull/24622) — **Cloud-managed config stack (PRs 2–5 of 5)** | Deterministic composition of cloud requirements fragments, a new `codex-cloud-config` bundle loader with cache, and runtime switch to the unified cloud config bundle—replacing the legacy `codex-cloud-requirements` path. |
| 3 | [#23585](https://github.com/openai/codex/pull/23585) — **Auto-compaction death-loop guard** | Prevents a turn from repeatedly cycling through execution and compaction when compaction succeeds but context stays above the trigger threshold. |
| 4 | [#17573](https://github.com/openai/codex/pull/17573) — **Sandbox violation monitoring** | Establishes a single normalized sandbox-violation model across filesystem and network enforcement, prerequisite for audit and export. |
| 5 | [#22866](https://github.com/openai/codex/pull/22866) — **Persist sandbox security events** | Adds a bounded local audit trail (SQLite-backed) for sandbox violations, enabling agent/security review workflows. |
| 6 | [#23363](https://github.com/openai/codex/pull/23363) — **Unified @mentions default in TUI** | Makes the unified `@mentions` the default, removes the old split file-only search, and deprecates the `mentions_v2` flag. |
| 7 | [#24650](https://github.com/openai/codex/pull/24650) — **`CODEX_ENV_FILE` hook persistence** | Allows `SessionStart` hooks to write environment exports that persist across subsequent shell commands (mirroring Claude's `CLAUDE_ENV_FILE`). |
| 8 | [#24108](https://github.com/openai/codex/pull/24108) — **Windows sandbox workspace roots** | Passes workspace roots to the Windows sandbox runner so `:workspace_roots` deny globs work correctly with multi-root setups. |
| 9 | [#24644](https://github.com/openai/codex/pull/24644) — **Restore legacy image detail values** | Fixes deserialization of older rollouts containing `auto`/`low` image detail values, preventing resume failures on persisted checkpoints. |
| 10 | [#24651](https://github.com/openai/codex/pull/24651) — **App-server startup benchmark crate** | Adds a dedicated benchmark crate for measuring app-server startup performance, wired into the Bazel build. |

---

## 5. Feature Request Trends

1. **MCP server lifecycle management** — Lazy/optional loading (#2335, 31 👍) and better OAuth token lifecycle (#14144, 6 👍) are top requests.
2. **Usage limit resilience** — Auto-resume after quota reset (#21073, 8 👍) and clearer rate-limit UX (#19607) reflect frustration with mid-task interruptions.
3. **Profile & identity switching** — Support for personal/work profiles in Codex (#22026, 4 👍), complementing the new `--profile` selector in v0.134.
4. **Plugin & compaction extensibility** — Custom compaction plugin extension points (#23698) and subagent goal persistence (#24607) show demand for deeper agent orchestration hooks.
5. **Open-sourcing the Desktop app** — The codex-app open-source request (#10733, 5 👍) continues to attract community interest.

---

## 6. Developer Pain Points

- **Windows instability is the #1 complaint**: Connectivity drops (#24444, #24533), stuck spinning (#24584), PowerShell hijacking (#23485), and `calc.exe` launching unexpectedly (#24580) collectively paint a picture of a platform that needs stabilization.
- **Long stalls and missing progress**: 30-minute `xhigh` thinking stalls (#24260), compaction hangs (#24618), and no "still working" indicator (#10534) erode trust during autonomous runs.
- **Log and context bloat**: The 34 GB/day tracing explosion (#23340) and oversized contexts after failed compaction resume (#24644) affect power users running long autonomous sessions.
- **Plugin/marketplace UX confusion**: Irrelevant plugins appearing in the `$` menu (#24145) and stale plugin state after server mutations (#24257) suggest the plugin discovery model needs refinement.
- **Remote and container auth fragility**: VS Code Remote SSH blank sidebars (#24601), Dev Container re-auth failures (#24633), and missing remote session persistence (#22438) indicate the remote development story remains brittle.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-27

## 1. Today's Highlights
No new version was released today, but the contributor community remains highly active in shoring up stability and security. The day's focus is heavily centered on hardening the session management and PTY handling, introducing a new `--ephemeral` mode for headless workflows, and a flood of quality-of-life improvements. Additionally, several discussions around AST-aware tooling and Auto Memory resilience signal exciting architectural shifts on the horizon.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues
1. **[Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409):** A critical P1 bug where simple tasks like folder creation cause the CLI to hang indefinitely when deferring to the generalist agent. Highly requested by the community (8 👍), users note that disabling sub-agents is currently the only workaround.
2. **[Shell command execution stuck on "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166):** A widespread P1 issue where the UI misreports simple completed CLI commands as still active and awaiting input, forcing users to manually intervene.
3. **[Subagent falsely reports success after hitting MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323):** A deceptive P1 bug where the `codebase_investigator` agent hides its interruption/failure by reporting `status: "success"` when it actually hits its turn limit.
4. **[Gemini ignores custom skills and sub-agents](https://github.com/google-gemini/gemini-cli/issues/21968):** Users are frustrated that the model rarely invokes custom skills (e.g., specialized `gradle` or `git` skills) automatically, requiring explicit instructions.
5. **[CLI fails to start in VS Code terminal](https://github.com/google-gemini/gemini-cli/issues/26644):** A standard `gemini` command freezes in the VS Code terminal, although flags like `--version` work fine.
6. **[Auto Memory security and infinite retry bugs](https://github.com/google-gemini/gemini-cli/issues/26525):** A cluster of P2 issues highlighting that Auto Memory risks exposing secrets before redaction and gets stuck endlessly retrying low-signal sessions.
7. **[400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246):** The CLI throws a 400 API error when context overload occurs (>400 tools), asking for better dynamic scope limiting.
8. **[Assess AST-aware file reads and mapping](https://github.com/google-gemini/gemini-cli/issues/22745):** An Epic exploring AST-aware tools to reduce token noise and improve precise method bounds reading during codebase exploration.
9. **[Browser agent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983):** Users on Wayland-based Linux environments experience silent failures when utilizing the browser sub-agent.
10. **[Agents run without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093):** An unintended regression where sub-agents execute despite being explicitly disabled in user configurations.

## 4. Key PR Progress
1. **[Add `--ephemeral` session mode](https://github.com/google-gemini/gemini-cli/pull/27365):** Introduces a `--ephemeral` CLI flag for headless runs, preventing the tool from flooding user session logs with automated data annotation tasks.
2. **[Prevent MCP blacklist bypass (RCE Fix)](https://github.com/google-gemini/gemini-cli/pull/27377):** Fixes a critical Remote Code Execution vulnerability that allowed malicious workspace MCP servers to bypass `mcp.excluded` lists and execute local processes. 
3. **[Fix `gemini --resume` crash](https://github.com/google-gemini/gemini-cli/pull/27371):** Resolves a crash during session resume caused by stale PTY file descriptors throwing unhandled `EBADF` errors.
4. **[Prevent eager tool wipe on network timeout](https://github.com/google-gemini/gemini-cli/pull/27383):** Implements an atomic update pattern for MCP tool discovery, fixing "tool not found" errors caused by transient network drops.
5. **[Support nested directories in Plan Mode](https://github.com/google-gemini/gemini-cli/pull/27464):** Allows users to better organize implementation plans into subdirectories (e.g., `plans/tracks/feature-x/spec.md`).
6. **[Re-seed metadata for recreated chat sessions](https://github.com/google-gemini/gemini-cli/pull/27453):** Prevents mid-session crashes if the `ChatRecordingService` file is externally deleted by garbage collection or user cleanup.
7. **[Preserve `refresh_token` in file-based cache](https://github.com/google-gemini/gemini-cli/pull/27463):** Fixes a persistent authentication issue where default file-based storage needlessly overwrote and lost `refresh_tokens`.
8. **[Fix orphaned function response errors](https://github.com/google-gemini/gemini-cli/pull/27389):** Bypasses routing classifiers to stop `400 Bad Request` errors caused by aggressive history pruning removing function calls before their responses.
9. **[Add Windows image pasting support](https://github.com/google-gemini/gemini-cli/pull/27054):** Brings seamless clipboard image pasting to Windows Terminal, resolving issues with empty bracketed-paste sequences.
10. **[Add F10 fallback for approval mode cycling](https://github.com/google-gemini/gemini-cli/pull/26088):** Adds an alternative keybinding to cycle approval modes, helping Windows/WezTerm users whose terminals misparse `Shift+Tab`.

## 5. Feature Request Trends
*   **AST-Aware Tooling:** Strong momentum around integrating AST-aware tools (like AST grep) for more intelligent codebase mapping, searching, and file reading to reduce token waste.
*   **Resilient Sub-agents:** Users want sub-agents to be "backgroundable" (via `Ctrl+B`) and request better session lock recovery for the `browser_agent`.
*   **Self-Improving Evals:** Ongoing internal pushes for robust behavioral evaluations, component-level testing, and stabilized project benchmarks to measure agent steering quality reliably.
*   **Server-Driven Model Management:** Transitioning to a centralized `LoadCodeAssist` endpoint for fetching available models rather than relying strictly on local static configurations.

## 6. Developer Pain Points
*   **Sub-agent Reliability:** The generalist agent hanging, hiding failures with false "success" statuses, and ignoring explicit disable configurations is a major source of frustration.
*   **Terminal/PTY Stability:** Frequent UI glitches, including hangs on "Waiting input," VS Code terminal startup failures, and PTY resize/exit crashes, disrupt basic CLI workflows.
*   **Sloppy Workspace Management:** Developers are annoyed by the model frequently creating temporary edit scripts in random directories and using destructive Git commands (`git reset`, `--force`) instead of safer alternatives.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the community digest for GitHub Copilot CLI based on the provided data.

## 1. Today's Highlights
The GitHub Copilot CLI rolled out version `v1.0.55-1`, bringing highly requested quality-of-life updates, including an enhanced `/env` command to track extension sources and a fix for the jarring terminal bell. Community momentum is heavily focused on agent capabilities and model management, with users actively requesting better programmatic control over sub-agent context windows and more robust handling of custom MCP registry URLs. Meanwhile, Windows and WSL users continue to navigate persistent platform-specific TUI and input quirks.

## 2. Releases
*   **v1.0.55-1**
    *   **Improved:** Increased selection background contrast across all color themes for better visibility. The `/env` command now displays loaded extensions alongside their status and source.
    *   **Fixed:** Resolved an annoyance where the terminal bell would sound on turn completion unless explicitly enabled in the config. Fixed a bug in the `/resume` picker where it incorrectly showed "bla".

## 3. Hot Issues
1.  **[Bug] WSL Startup Hang (#3385):** Users are experiencing persistent hangs when running CLI v1.0.49+ on WSL2 after an upgrade. With 13 comments and 9 upvotes, this remains a top blocker for Windows subsystem users.
2.  **Configure Submit Key for IME (#1972):** Gathering massive community consensus (46 upvotes), users are requesting `Ctrl+Enter` submit bindings to prevent accidental prompt execution while using Input Method Editors (IME) for CJK languages.
3.  **TUI Rendering Lag in tmux/Cygwin (#3439):** A regression introduced in v1.0.49 is causing severe TUI lag, freezing, and spinner stuttering within tmux on mintty/Cygwin environments.
4.  **Terminal Scroll Usability (#2205):** Users are frustrated that mouse scrolling navigates sent inputs rather than scrolling through the agent's generated output. This has garnered 12 upvotes and ongoing discussion.
5.  **Remote Sessions Enterprise Error (#3442):** A recent regression (v1.0.51) is falsely warning standard users that "Remote sessions are not enabled," causing confusion across enterprise environments.
6.  **MCP Search Constructs Wrong URL (#3436):** The experimental `/mcp search` command is missing the `/v0.1/` segment in its API calls, breaking connectivity for self-hosted organizational registries.
7.  **Blank workingDirectory in Extension Hooks (#3508):** Extension lifecycle hooks (`onSessionStart`, etc.) have been receiving empty strings for `workingDirectory` since v1.0.51, breaking path-aware extensions.
8.  **Sub-agent Model Downgrades (#2758):** Developers want the ability to opt-out of the cost-multiplier guard that silently downgrades sub-agents to cheaper models, preferring to enforce model consistency set in `.agent.md`.
9.  **Clipboard and Copy Issues on Ubuntu (#3483):** Right-click and `Ctrl+C` clipboard operations stopped working in recent builds, forcing Linux users to rely on external terminal workarounds.
10. **Research Tool Fails to Save Reports (#3123):** The `/research` agent fails to write its final report to disk, erroneously complaining that the "create" tool is unavailable. 

## 4. Key PR Progress
*No pull requests were updated in the last 24 hours. The development focus appears to be on addressing the recent influx of platform-specific bugs and agent tooling limitations.*

## 5. Feature Request Trends
*   **Advanced Sub-Agent & Model Configuration:** Developers want granular, programmatic control over sub-agents. There is a strong push to allow specific context windows and reasoning efforts to be set via `.agent.md` frontmatter, rather than navigating the interactive `/model` menu ([#3525](https://github.com/github/copilot-cli/issues/3525), [#2758](https://github.com/github/copilot-cli/issues/2758)).
*   **Dynamic Context Management:** Users are requesting intelligent auto-upgrading of model context windows. Instead of losing data through compaction, the CLI should seamlessly transition to a larger context tier when the current one fills up ([#3530](https://github.com/github/copilot-cli/issues/3530)).
*   **Cross-Session Auditability:** A demand for persistent, global session history accessible outside the active agent runtime ([#1791](https://github.com/github/copilot-cli/issues/1791)).
*   **Robust BYOK (Bring Your Own Key) Support:** Users want the ability to configure and seamlessly switch between multiple BYOK models from within the active TUI session ([#3282](https://github.com/github/copilot-cli/issues/3282)).

## 6. Developer Pain Points
*   **Windows / WSL Platform Instability:** Windows users are encountering severe roadblocks, including native crashes (`BEX64`) when running parallel subagents with local providers ([#3250](https://github.com/github/copilot-cli/issues/3250)), inability to select text in the prompt box ([#3526](https://github.com/github/copilot-cli/issues/3526)), and agents launching from the incorrect working directory ([#3528](https://github.com/github/copilot-cli/issues/3528)).
*   **TUI Terminal Interference:** The CLI is heavily criticized for hijacking expected terminal behaviors. Examples include ignoring default cursor styles ([#2507](https://github.com/github/copilot-cli/issues/2507)), lacking basic text editing shortcuts like `Ctrl+Backspace` ([#2199](https://github.com/github/copilot-cli/issues/2199)), and breaking native OS clipboard functionality ([#3483](https://github.com/github/copilot-cli/issues/3483)).
*   **MCP and Agent Tooling Bugs:** Developers building advanced agents are hitting frustrating walls where MCP servers cannot be fully listed due to UI limits ([#3486](https://github.com/github/copilot-cli/issues/3486)), and agents attempt to use non-existent tools to save files ([#3315](https://github.com/github/copilot-cli/issues/3315), [#3049](https://github.com/github/copilot-cli/issues/3049)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-27

## 1. Today's Highlights
Kimi Code CLI officially bumps to **v1.45.0**, bringing smarter tool-call deduplication and a fix for misleading "Quota exceeded" error messages. The community is actively discussing third-party model compatibility (DeepSeek V4, OpenAI-compatible endpoints) and multi-key rate-limit strategies for parallel subagent execution.

## 2. Releases
**v1.45.0** ([PR #2373](https://github.com/MoonshotAI/kimi-cli/pull/2373))
- Tool call deduplication overhaul with sparse reminders and canonical args (`PR #2372`).
- Shell UI: `/clear` is now a true alias for `/new`.
- Fix: Misleading "Quota exceeded" prefix on generic 403 errors (`PR #2342`).

## 3. Hot Issues

| # | Issue | Why it matters |
|---|-------|----------------|
| 1 | [#2208 — OpenAI-compatible API](https://github.com/MoonshotAI/kimi-cli/issues/2208) | Users want to point Cursor and other tools at Kimi via a standard `/v1/chat/completions` endpoint. 3 comments, strong demand signal. |
| 2 | [#2367 — LLM provider 400 error](https://github.com/MoonshotAI/kimi-cli/issues/2367) | Generic 400 surfaced after reading a favicon; highlights fragility in multi-modal file handling. 👍 1 |
| 3 | [#2368 — Subagents exhaust single API key → 429](https://github.com/MoonshotAI/kimi-cli/issues/2368) | Running 3-4 foreground subagents causes rate-limit contention and hangs. Directly spawned a community PR (#2369). |
| 4 | [#2141 — DeepSeek V4 reasoning_content compat](https://github.com/MoonshotAI/kimi-cli/issues/2141) | Multi-turn tool calls fail if `reasoning_content` isn't echoed back. Critical for DeepSeek V4 Pro users. 👍 1 |
| 5 | [#2317 — VSCode Plan mode file path not clickable](https://github.com/MoonshotAI/kimi-cli/issues/2317) | UX friction in the VSCode extension's chat webview; impedes navigation in plan mode. |
| 6 | [#2370 — Add Steer ⚡ button to Web UI queue](https://github.com/MoonshotAI/kimi-cli/issues/2370) | Queued messages can't be steered mid-execution; users want real-time intervention in the `kimi web` panel. |

## 4. Key PR Progress

| PR | Title | Status | Summary |
|----|-------|--------|---------|
| [#2373](https://github.com/MoonshotAI/kimi-cli/pull/2373) | `chore(release): bump to 1.45.0` | **Closed/Merged** | Version bump + release notes sync for CLI and `kimi-code` wrapper. |
| [#2372](https://github.com/MoonshotAI/kimi-cli/pull/2372) | `feat(toolset): improve dedup with sparse reminders` | **Closed/Merged** | Smarter repeat detection, canonical args normalization, `/clear`→`/new` alias, updated welcome tip. |
| [#2369](https://github.com/MoonshotAI/kimi-cli/pull/2369) | `feat(subagent): add API key pool` | **Open** | Introduces `APIKeyPool` with round-robin allocation so parallel subagents don't share a single key. Closes #2368. |
| [#2342](https://github.com/MoonshotAI/kimi-cli/pull/2342) | `fix(shell): misleading "Quota exceeded" on 403` | **Closed/Merged** | Only surfaces quota messaging when the 403 actually relates to billing/quota. |
| [#2260](https://github.com/MoonshotAI/kimi-cli/pull/2260) | `feat: kill_ring_system_clipboard config` | **Closed/Merged** | Adds toggle to control whether the kill ring writes to system clipboard (default `true`). |
| [#1852](https://github.com/MoonshotAI/kimi-cli/pull/1852) | `fix: log hook task exceptions` | **Closed/Merged** | Replaces silent exception swallowing in hook callbacks with `logger.error` across 6 hook types. |
| [#1689](https://github.com/MoonshotAI/kimi-cli/pull/1689) | `fix(acp): return invalid params for unsupported session mode` | **Open** | Improves ACP protocol compliance by correctly rejecting unsupported session modes. |

## 5. Feature Request Trends

1. **Third-party model & API compatibility** — Consistently top demand: OpenAI-compatible base URL (#2208), DeepSeek V4 Pro reasoning pass-through (#2141), and generic provider error handling (#2367).
2. **Parallel execution & rate-limit resilience** — Community wants API key pools, per-subagent rate isolation, and graceful backoff (#2368, #2369).
3. **Richer interactive control** — Steering mid-flight agents in the Web UI (#2370) and clickable file paths in VSCode plan mode (#2317) point to a desire for tighter IDE/Web UX loops.

## 6. Developer Pain Points

| Theme | Evidence | Impact |
|-------|----------|--------|
| **Opaque error messages** | Generic 400/403 errors hide root cause (#2367, #2342). | Wastes debugging time; partially addressed in 1.45.0. |
| **Single-key bottleneck under concurrency** | 429 errors and hangs when multiple subagents share one key (#2368). | Blocks power-user workflows; community PR #2369 pending review. |
| **Cross-model protocol drift** | DeepSeek V4 requires `reasoning_content` echo-back; Kimi doesn't do it (#2141). | Multi-turn tool-call chains break silently. |
| **IDE integration rough edges** | Non-clickable paths in VSCode plan mode (#2317); limited steering in Web UI (#2370). | Friction in daily coding flow for extension users. |

---

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-27

## 1. Today's Highlights
OpenCode's community is heavily focused on resolving provider streaming stability, specifically addressing severe latency and indefinite freezing issues with OpenAI/ChatGPT endpoints. On the feature front, significant architectural work is being merged to allow dynamic model selection for subagents and optimistic UI rendering in the TUI. Meanwhile, the desktop client is undergoing rapid iteration to fix crash loops and UI layout constraints.

## 2. Releases
No new official releases were published in the last 24 hours.

## 3. Hot Issues

1. **[#29079] GPT Models take too long to respond** (55 comments, 👍 39)
   OpenAI models (including GPT 5.4) are experiencing severe, unpredictable latency in OpenCode, sometimes taking several minutes for simple prompts. This is currently the most upvoted active issue, indicating widespread user frustration.
2. **[#29129] OpenAI stream intermittently freezes with high CPU** (44 comments, 👍 44)
   A critical bug where OpenCode enters an infinite "working" state during OpenAI streaming responses. The process burns CPU indefinitely on an idle HTTPS socket until manually killed. ( addressed by PR #29446).
3. **[#15585] "Free usage exceeded" error on free models** (43 comments, 👍 10)
   Users are hitting unexpected billing limits when using local/free models (e.g., Big Pickle) via the platform, causing confusion over whether OpenCode gates free model usage.
4. **[#1764] [FEATURE] Vim motions in input box** (31 comments, 👍 160)
   A massively popular request for native Vim keybinding support in the prompt input box, drawing direct comparisons to competitor features in ClaudeCode.
5. **[#16100] Numpad keys ignored in VS Code integrated terminal** (30 comments, 👍 18)
   OpenCode's TUI completely ignores numpad inputs when run inside VS Code 1.110, forcing users to use external terminals.
6. **[#19081] `reasoning_content` stripped on replay** (13 comments, 👍 18)
   A subtle but severe bug for local inference users: thinking tokens are stripped from message history during subsequent turns, silently invalidating KV caches.
7. **[#18131] Write tool called with invalid parameters** (10 comments, 👍 3)
   Users experimenting with local models (e.g., Qwen 3.5 via LM Studio) are encountering parameter errors during tool calls, highlighting compatibility gaps with smaller models.
8. **[#29420] ChatGPT subscription stream hangs due to watchdog timeout** (6 comments, 👍 2)
   Related to the broader OpenAI freezing issue, this specifically targets the lack of timeout mechanisms for hung ChatGPT subscription connections.
9. **[#29271] [FEATURE] Add directory parameter to task tool** (3 comments)
   A highly requested architectural feature for monorepos, asking for the ability to dispatch subagents to specific subproject directories with scoped configurations.
10. **[#28355] Orchestration leakage during context compaction** (3 comments)
    On Windows, context compaction appears to leak internal orchestration commands, confusing the model during continuous chat sessions.

## 4. Key PR Progress

1. **[PR #29446] fix(opencode): bound codex stream stalls**
   Directly addresses the high-priority CPU spinning/freezing bug (#29129) by implementing proper timeout handling for stalled ChatGPT/Codex OAuth streams.
2. **[PR #29447] feat(opencode): add task model override**
   Introduces an optional `model` parameter to the Task tool, allowing primary agents to dynamically assign different models to subagents at runtime.
3. **[PR #26387] tui: optimistically render submitted prompts** (Beta)
   Significantly improves perceived TUI performance by immediately rendering user prompts using client-generated IDs before server reconciliation.
4. **[PR #29458] fix(opencode): forward remote workspace request bodies**
   Fixes a critical proxy bug where HTTP `POST`/`PUT` request bodies were dropped when routing through the central server for remote workspaces.
5. **[PR #29279] fix(provider): emit file metadata instead of error**
   Prevents crashes when non-vision models receive image attachments by gracefully returning file metadata rather than throwing a blocking error.
6. **[PR #29453] fix(tui): accelerate diff viewer scrolling**
   Improves TUI UX by applying scroll acceleration algorithms to the diff viewer patch pane, resolving sluggish scrolling performance.
7. **[PR #29442] fix: detect attachment mime from file contents** (Closed/Merged)
   Fixes an issue where `-f` and `@path` attachments were hardcoded as `text/plain`, causing images and PDFs to be dropped from the prompt payload.
8. **[PR #29454] feat(tui): add workspace management dialog**
   Introduces a new `/workspaces` command in the TUI, allowing users to inspect connection states and delete registered workspaces.
9. **[PR #29457] fix(plan): don't carry plan model into build agent on plan_exit**
   Fixes an architectural bug where switching modes (plan to build) incorrectly forced the build agent to use the planner's model configuration.
10. **[PR #23318] fix(core): respect OPENCODE_CONFIG in serve/web**
    Resolves a regression where `opencode serve` and `opencode web` ignored the `OPENCODE_CONFIG` environment variables, disrupting Docker and remote deployments.

## 5. Feature Request Trends

*   **Advanced Monorepo Support:** There is a strong push for better monorepo ergonomics, specifically dispatching subagents to specific directories (#29271) and using scoped `AGENTS.md` files.
*   **Terminal Input & UI Power-User Features:** Developers continue to request deep terminal customizations, most notably Vim motions (#1764) and better support for Kitty keyboard protocols (#29196).
*   **Granular Time & Context Visibility:** Users want better context controls, including timestamp precision down to the second (#20406) and visual session tree navigation (`/tree`) for managing forked conversations (#22067).

## 6. Developer Pain Points

*   **OpenAI Provider Instability:** The most prominent pain point across the project right now is unreliable OpenAI streaming. Users experience extreme latency (#29079), frozen UIs, and CPU locking (#29129) due to unhandled idle sockets.
*   **Subagent Flexibility & Billing:** Developers are frustrated by rigid subagent configurations, particularly the inability to dynamically assign models to tasks, and confusing billing errors that lock them out of local/free model usage (#15585).
*   **Local Model Integration Friction:** Using local inference engines (LM Studio, Ollama) remains hit-or-miss due to stripped reasoning tokens breaking KV caches (#19081), phantom models appearing in the UI (#4232), and tool parameter rejection with smaller models (#18131).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-27

## 1. Today's Highlights
The Pi ecosystem saw a massive wave of community contributions today, particularly focusing on robustness and terminal UI improvements. Several critical bugs causing interactive sessions to hang or crash were addressed, most notably the persistent `Working...` spinner issue and ongoing OpenAI Codex websocket timeouts. The Extension API also received heavy attention, expanding support for legacy integrations, typed settings, and better background task management.

## 2. Releases
**None.** No new official releases were published in the last 24 hours.

## 3. Hot Issues
- **[#4945](https://github.com/earendil-works/pi/issues/4945) [OPEN] OpenAI Codex hanging on `Working...`:** Users are experiencing zero-usage aborted turns when using `gpt-5.5`, leaving the TUI stuck until manually escaped. This is currently the most active discussion, tracking related websocket and retry-loop fixes. *(16 👍, 25 comments)*
- **[#3357](https://github.com/earendil-works/pi/issues/3357) [OPEN] Official local LLM provider extension:** A high-demand feature request asking for dynamic model fetching from local providers (`{baseUrl}/models`) to seamlessly integrate with `ollama`, `llama.cpp`, and `LM Studio`. *(31 👍, 22 comments)*
- **[#4990](https://github.com/earendil-works/pi/issues/4990) [CLOSED] Sudden edit tool failures:** A recent Pi update caused widespread validation failures for the `edit` tool, prompting rapid community debugging. *(6 comments)*
- **[#4801](https://github.com/earendil-works/pi/issues/4801) [OPEN] DeepSeek v4 pro `xhigh` reasoning effort error:** OpenRouter is returning a 400 error when Pi passes `xhigh` as the reasoning effort for DeepSeek v4 pro. *(6 comments)*
- **[#4984](https://github.com/earendil-works/pi/issues/4984) [OPEN] Crash on transient terminal EPIPE:** Interactive mode crashes abruptly with `Error: write EPIPE` during some edit tool calls, impacting workflow stability. *(6 comments)*
- **[#5002](https://github.com/earendil-works/pi/issues/5002) [CLOSED] Global `~/.agents/AGENTS.md` instructions:** A highly requested feature to support global instruction files for developer-wide security protocols and coding styles, now implemented. *(4 comments)*
- **[#4927](https://github.com/earendil-works/pi/issues/4927) [CLOSED] Cyrillic display name breaks OAuth headers:** ChatGPT OAuth profiles with Cyrillic characters caused unhandled errors due to non-ASCII ByteString conversion. *(4 comments)*
- **[#5009](https://github.com/earendil-works/pi/issues/5009) [CLOSED] Kimi-code bans linked to Pi usage:** Users report widespread account bans on Kimi-code subscriptions, potentially triggered by Pi's request patterns. *(2 comments)*
- **[#5014](https://github.com/earendil-works/pi/issues/5014) [CLOSED] TUI keystroke lag in long sessions:** The TUI performs a full re-render on every keystroke, causing progressive lag as the chat scrollback grows. *(2 comments)*
- **[#5044](https://github.com/earendil-works/pi/issues/5044) [CLOSED] OOM on `pi --resume`:** Attempting to list sessions via `--resume` reads entire JSONL files into memory at once, causing Out of Memory crashes on large sessions. *(1 comment)*

## 4. Key PR Progress
- **[#4979](https://github.com/earendil-works/pi/pull/4979) [OPEN] Codex websocket timeouts:** Adds connection limits and a 15-second connect timeout to better align with OpenAI Codex's expected websocket behavior. 
- **[#4991](https://github.com/earendil-works/pi/pull/4991) [CLOSED] Disable hidden provider 429 retries:** Prevents the SDK from silently retrying 429 errors for days based on `retry-after` headers, fixing an infinite stall when hitting quota limits.
- **[#4911](https://github.com/earendil-works/pi/pull/4911) [OPEN] Codex device code login:** Implements OAuth device code flow for headless environments/SSH, resolving a long-standing authentication limitation.
- **[#5005](https://github.com/earendil-works/pi/pull/5005) & [#5004](https://github.com/earendil-works/pi/pull/5004) [CLOSED] Fix persistent `Working...` spinner:** Resolves a UI bug where the working spinner reappeared indefinitely after running `/new` or `/reload` by properly resetting the `workingVisible` flag.
- **[#5029](https://github.com/earendil-works/pi/pull/5029) [OPEN] Abort in-flight LLM calls on session teardown:** Ensures that active LLM HTTP requests are properly aborted when switching or cloning sessions, preventing background resource leaks.
- **[#5022](https://github.com/earendil-works/pi/pull/5022) [OPEN] Unicode word boundaries:** Leverages `Intl.Segmenter` in the editor to fix word movements for international characters.
- **[#5032](https://github.com/earendil-works/pi/pull/5032) [CLOSED] Progressive enhancement keyboard negotiation:** Fixes aggressive terminal capability detection to prevent input lockups in nested environments like Zellij.
- **[#4996](https://github.com/earendil-works/pi/pull/4996) [CLOSED] Legacy extension API compatibility:** Introduces shims to prevent breaking changes for older extensions (notably OpenClaw integrations) during the current refactor phase.
- **[#4998](https://github.com/earendil-works/pi/pull/4998) [CLOSED] Inline skill mentions:** Upgrades the prompt editor to allow `/skill-name` context annotations anywhere in the text, rather than strictly at the beginning.
- **[#181](https://github.com/earendil-works/pi/pull/181) [CLOSED] Fix macOS screenshot reads:** Resolves an `ENOENT` bug when dragging macOS previews into the input by handling localized/space-containing temp file paths correctly.

## 5. Feature Request Trends
- **Enhanced Local/Remote LLM Agnosticism:** Users are pushing heavily for seamless integration with local runners (Ollama, LM Studio) and diverse cloud providers (Anthropic on Vertex AI, OpenRouter models).
- **Advanced Extension APIs:** There is a strong demand for deeper extension hooks, specifically for managing typed settings schemas (`pi.settings.register`) and controlling background tasks/bashes (similar to Claude Code's Ctrl+B behavior).
- **Session and Context Durability:** Features enabling persistent context and global rules, such as global `~/.agents/AGENTS.md` files, alongside better session resiliency (preventing OOMs on resume and streamlining sub-agent context compaction).

## 6. Developer Pain Points
- **Streaming and Connection Reliability:** The highest pain point currently is handling provider disconnections and streaming endpoints gracefully. Developers are frustrated by infinite hangs (spinner loops) and a lack of transparent stream-idle timeouts.
- **TUI Performance in Long Sessions:** As sessions grow, the TUI suffers from significant input lag due to full-DOM re-renders on every keystroke. This significantly impacts developers using Pi for extended, continuous work.
- **Resource Leaks in Agent Lifecycle:** Failing to abort in-flight HTTP requests during session switches or background sub-agent spawning is causing conflicts (like Telegram API 409 errors) and general memory overhead, highlighting a need for stricter teardown protocols.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-27

## 1. Today's Highlights
The community is heavily focused on the **`qwen serve` daemon architecture**, with multiple architectural proposals and PRs landing to bring REST, SSE, and the new ACP Streamable HTTP transport to feature parity. **Memory (OOM) crashes remain the top pain point**, dominating the issue tracker with continued reports of V8 heap exhaustion during long sessions. On the tooling side, the **TypeScript SDK received v0.1.8 previews** bundling the latest CLI, and several PRs aim to stabilize DeepSeek caching, truncate oversized tool outputs, and fix session management bugs.

---

## 2. Releases

| Release | Key Changes |
|---------|-------------|
| **v0.16.1-nightly.20260526** ([tag](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1-nightly.20260526.e8b79d772)) | Fix: clean stale build outputs before `tsc --build` to prevent TS5055 (PR [#4453](https://github.com/QwenLM/qwen-code/pull/4453) by @doudouOUC); chore: v0.16.1 release cut. |
| **sdk-typescript v0.1.8-preview.1** & **v0.1.8-preview.0** | Bundle CLI v0.16.1 built from source. Provides early SDK access to the latest daemon and CLI features. |

---

## 3. Hot Issues

1. **[#4175](https://github.com/QwenLM/qwen-code/issues/4175) — Mode B (`qwen serve`) feature-priority roadmap toward v0.16 production-ready** *(40 comments)*
   The master tracking issue for the daemon's HTTP/SSE surface. Stage 1 daemon and session multiplexing are merged; remaining gaps are being actively prioritized. Community is deeply engaged on scope and sequencing.

2. **[#3803](https://github.com/QwenLM/qwen-code/issues/3803) — Daemon mode (`qwen serve`) proposal & open decisions** *(25 comments)*
   @wenshao's comprehensive 6-chapter design series. The source-of-truth reference for all daemon implementation decisions. Still accumulating design feedback.

3. **[#4116](https://github.com/QwenLM/qwen-code/issues/4116) — Critical error / session crash** *(14 comments)*
   A representative OOM/critical-error report during active sessions. Exemplifies the long-running memory leak pattern the community keeps hitting.

4. **[#4149](https://github.com/QwenLM/qwen-code/issues/4149) — FATAL: JavaScript heap out of memory** *(12 comments)*
   Ineffective mark-compacts near the 4 GB heap limit. Typical of large-context, long-session scenarios. Users are increasingly frustrated by the frequency.

5. **[#4514](https://github.com/QwenLM/qwen-code/issues/4514) — Daemon capability gaps & prioritized backlog (post v0.16-alpha)** *(10 comments)*
   Identifies remaining gaps in the `qwen serve` HTTP/SSE surface after accounting for slash-command passthrough. Directly feeds the integration merge strategy in PR [#4490](https://github.com/QwenLM/qwen-code/pull/4490).

6. **[#4276](https://github.com/QwenLM/qwen-code/issues/4276) — OOM crash** *(9 comments)*
   Another heap-exhaustion report at ~4 GB. Reinforces that memory management is the single most impactful reliability issue.

7. **[#2868](https://github.com/QwenLM/qwen-code/issues/2868) — Heap out of memory** *(8 comments)*
   A long-open OOM issue from April that keeps getting re-activated by new reporters hitting the same wall.

8. **[#4351](https://github.com/QwenLM/qwen-code/issues/4351) — OOM with local Qwen 3.6 / llama.cpp on Linux** *(7 comments)*
   Shows the problem is compounded when running a local model alongside Qwen Code, competing for system RAM.

9. **[#4534](https://github.com/QwenLM/qwen-code/issues/4534) — Support global `~/.agents/AGENTS.md` instructions** *(4 comments)*
   Requests cross-tool, user-level instruction files so developers don't duplicate prompts across Qwen, Claude Code, Goose, etc. Signals the multi-agent workflow trend.

10. **[#4326](https://github.com/QwenLM/qwen-code/issues/4326) — MCP Streamable HTTP incompatible with Spring AI servers** *(2 comments)*
    GET-method not supported; causes gateway timeouts. Highlights MCP interoperability friction with the Java/Spring ecosystem.

---

## 4. Key PR Progress

| PR | Area | Description |
|----|------|-------------|
| [**#4472**](https://github.com/QwenLM/qwen-code/pull/4472) | daemon/ACP | Adds the **official ACP Streamable HTTP transport** at `/acp` (RFD #721), a second northbound transport alongside REST+SSE, sharing the same session/workspace. A cornerstone for cross-client interoperability. |
| [**#4490**](https://github.com/QwenLM/qwen-code/pull/4490) | daemon/integration | Periodic integration merge of `daemon_mode_b_main` → `main` per the #4175 branching strategy. Bundles F1–F4 prerequisites and F5 alpha docs. |
| [**#4552**](https://github.com/QwenLM/qwen-code/pull/4552) | daemon/MCP | **Runtime MCP server add/remove** via HTTP routes (`POST /workspace/mcp/servers`, `DELETE /workspace/mcp/servers/:name`) without daemon restart. Implements T2.8 from #4514. |
| [**#4555**](https://github.com/QwenLM/qwen-code/pull/4555) | SDK/bridge | Adds a **serve-bridge MCP server** (`qwen-serve-bridge`) so any MCP-compatible client (Claude Desktop, Cursor, etc.) can interact with qwen-code agent via stdio. |
| [**#4510**](https://github.com/QwenLM/qwen-code/pull/4510) | daemon/sync | Cross-client real-time sync follow-up: epoch-reset resync, approval-mode serialization, catch-up indicator. Hardens multi-client daemon scenarios. |
| [**#4507**](https://github.com/QwenLM/qwen-code/pull/4507) | daemon/UI | Server-pushed `followup_suggestion` SSE event for WebUI, mirroring CLI ghost-text suggestions. Improves non-interactive UX. |
| [**#4520**](https://github.com/QwenLM/qwen-code/pull/4520) | core/memory | **Truncates oversized tool outputs** before they inflate conversation history, saving full output to a temp file. Directly mitigates OOM pressure from large tool responses. |
| [**#4525**](https://github.com/QwenLM/qwen-code/pull/4525) | core/memory | Improves prompt-token estimation for auto-compaction by including previous response tokens. Prevents under-estimating context size. |
| [**#4526**](https://github.com/QwenLM/qwen-code/pull/4526) | core/memory | **Bounds hard rescue compression retries** per chat to prevent infinite retry loops during OOM recovery. |
| [**#4518**](https://github.com/QwenLM/qwen-code/pull/4518) | core/DeepSeek | Stabilizes DeepSeek tool cache prefix by sorting tools by function name, improving cache hit rates and reducing cost/latency. |

---

## 5. Feature Request Trends

- **Daemon & `qwen serve` maturity**: The dominant theme. Users and contributors want full REST+SSE+ACP parity so remote clients, IDEs, and multi-agent setups can drive Qwen Code as a background service. ([#4175](https://github.com/QwenLM/qwen-code/issues/4175), [#4514](https://github.com/QwenLM/qwen-code/issues/4514), [#4542](https://github.com/QwenLM/qwen-code/issues/4542))
- **Cross-tool / global configuration**: Requests for `~/.agents/AGENTS.md` and unified instruction files reflect developers juggling multiple AI coding agents simultaneously. ([#4534](https://github.com/QwenLM/qwen-code/issues/4534))
- **Notification & hook system**: Hooks for task completion, errors, and approval requests—especially for long-running autonomous sessions. ([#2922](https://github.com/QwenLM/qwen-code/issues/2922))
- **ACP v2 Draft features**: Message ID support for better session traceability and message referencing. ([#4503](https://github.com/QwenLM/qwen-code/issues/4503))
- **Auto-improve loops**: A `/auto-improve` slash command for continuous, locally verifiable repository improvements. ([PR #4161](https://github.com/QwenLM/qwen-code/pull/4161))

---

## 6. Developer Pain Points

- **V8 heap OOM / memory leaks** — By far the most frequently reported issue. Long sessions, large contexts, YOLO mode, and local models all trigger 4 GB heap exhaustion. The volume of duplicate OOM issues ([#4149](https://github.com/QwenLM/zwen-code/issues/4149), [#4276](https://github.com/QwenLM/qwen-code/issues/4276), [#2868](https://github.com/QwenLM/qwen-code/issues/2868), [#4185](https://github.com/QwenLM/qwen-code/issues/4185), [#4309](https://github.com/QwenLM/qwen-code/issues/4309), [#4399](https://github.com/QwenLM/qwen-code/issues/4399), [#4435](https://github.com/QwenLM/qwen-code/issues/4435)) shows the community is losing patience. Mitigation PRs ([#4520](https://github.com/QwenLM/qwen-code/pull/4520), [#4525](https://github.com/QwenLM/qwen-code/pull/4525), [#4526](https://github.com/QwenLM/qwen-code/pull/4526)) are in flight but not yet shipped.
- **Authentication & API key issues** — Missing or mis-propagated API keys for Anthropic and OAuth login failures in JetBrains Rider. ([#4323](https://github.com/QwenLM/qwen-code/issues/4323), [#4493](https://github.com/QwenLM/qwen-code/issues/4493))
- **MCP interoperability** — Streamable HTTP transport incompatibilities with Spring AI and other servers; MCP add/remove CLI bugs. ([#4326](https://github.com/QwenLM/qwen-code/issues/4326), [#3718](https://github.com/QwenLM/qwen-code/issues/3718))
- **Global hooks not working** — User-configured `~/.qwen/hooks` are ignored, breaking automation workflows. ([#4361](https://github.com/QwenLM/qwen-code/issues/4361))
- **Empty model stream responses** — Intermittent `Model stream ended with empty response text` errors during interactive prompts. ([#3804](https://github.com/QwenLM/qwen-code/issues/3804))
- **CI flakiness** — UI tests intermittently fail across all platforms, slowing contributor velocity. ([#4429](https://github.com/QwenLM/qwen-code/issues/4429))

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# CodeWhale (formerly DeepSeek TUI) Community Digest — 2026-05-27

## 1. Today's Highlights
The project has officially entered its **CodeWhale** era with the release of **v0.8.46**, which introduces deprecation shims for the legacy `deepseek` and `deepseek-tui` binaries before their removal in v0.9.0. Maintainer **@Hmbown** immediately cut **v0.8.47** (PR [#2233](https://github.com/Hmbown/CodeWhale/pull/2233)), harvesting 9 community PRs to address critical deadlocks, UI text selection, and project context tracing. Community activity remains high, with users rapidly reporting edge cases related to the rebrand (e.g., Homebrew path issues, state directory confusion) and ongoing Windows/Wayland stability bugs.

## 2. Releases
*   **v0.8.46** ([Release](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.46)): Renames the project to **CodeWhale**. Legacy binaries (`deepseek`, `deepseek-tui`) now print a deprecation warning and forward to `codewhale` / `codewhale-tui`.
*   **v0.8.47** (Merged via [PR #2233](https://github.com/Hmbown/CodeWhale/pull/2233)): A rapid-follow patch that integrates 9 community contributions, fixing concurrent sub-agent deadlocks, adding composer mouse/keyboard text selection, and improving context tracing. 

## 3. Hot Issues
1.  **[Bug] Homebrew distribution fails to spawn `codewhale`** ([#2104](https://github.com/Hmbown/CodeWhale/issues/2104)): Upgrading via Homebrew broke the TUI launch because the new `codewhale` binary wasn't correctly linked on the `PATH`. *Impact: High friction for macOS users upgrading to the rebranded version.*
2.  **[Bug] TUI panic with CJK characters** ([#2165](https://github.com/Hmbown/CodeWhale/issues/2165)): The TUI crashes on Windows when rendering long strings containing Chinese characters due to byte-index truncation slicing multi-byte UTF-8 boundaries. *Impact: Critical rendering bug for international users.*
3.  **[Enhancement] QoL: Taskbar progress and completion sound** ([#1871](https://github.com/Hmbown/CodeWhale/issues/1871)): Users want visual/audible OS-level feedback so they can alt-tab away during long model processing tasks. *Community reaction: Highly requested quality-of-life improvement (+1).*
4.  **[Bug] Deadlocks when spawning multiple concurrent sub-agents** ([#2157](https://github.com/Hmbown/CodeWhale/issues/2157)): Parallel sub-agent delegation causes the entire TUI to freeze, requiring a `kill -9`. *Impact: Blocks advanced agentic workflows.*
5.  **[Bug] Clipboard copy silently fails on non-wlroots Wayland** ([#1920](https://github.com/Hmbown/CodeWhale/issues/1920)): Copy functionality breaks on alternative Wayland compositors like `niri`. *Impact: Broken core UX for a growing segment of Linux users.*
6.  **[Bug] Pasting multi-line text auto-submits** ([#2134](https://github.com/Hmbown/CodeWhale/issues/2134)): Pasting tabular data/error logs from IDEs directly into the input field triggers an accidental send because newlines are treated as Enter keys. *Impact: High annoyance factor in daily use.*
7.  **[Migration] Confusion over dual state-roots** ([#2231](https://github.com/Hmbown/CodeWhale/issues/2231)): Maintainer-reported feedback highlighting user confusion over the coexistence of `~/.codewhale` and `~/.deepseek` config directories. *Impact: Needs explicit migration logic in the upcoming v0.9.0.*
8.  **[Bug] `AGENTS.md` requires manual `/anchor`** ([#2227](https://github.com/Hmbown/CodeWhale/issues/2227)): The agent occasionally ignores project-root instructions unless explicitly forced. *Impact: Undermines the reliability of context-aware coding.*
9.  **[Bug] vLLM provider validation error** ([#2169](https://github.com/Hmbown/CodeWhale/issues/2169)): CodeWhale fails when hitting private vLLM endpoints because it sends `reasoning_effort: "max"`, which the server rejects. *Impact: Blocks users self-hosting models.*
10. **[Enhancement] OpenRouter custom base_url reasoning support** ([#1978](https://github.com/Hmbown/CodeWhale/issues/1978)): A detailed feature parity test showing that caching/reasoning features break when routing through OpenRouter or ZenMux. *Community reaction: Excellent technical breakdown of proxy compatibility issues.*

## 4. Key PR Progress
1.  **[Build] v0.8.47 Release PR** ([#2233](https://github.com/Hmbown/CodeWhale/pull/2233)): Harvested 9 community PRs into a stable release, resolving major context and UI bugs introduced during the rebrand.
2.  **[Fix] Replace cross-await RwLock with Semaphore** ([#1856](https://github.com/Hmbown/CodeWhale/pull/1856)): Fixes critical deadlocks in `ToolCallRuntime` by preventing serial tools from blocking parallel read-locks.
3.  **[Feat] Mouse + keyboard text selection with copy/cut** ([#2228](https://github.com/Hmbown/CodeWhale/pull/2228)): Implements standard Shift+Arrow/Ctrl+C/Cmd+C text manipulation inside the composer, a massive UX upgrade.
4.  **[Fix] Copy transcript selections without visual wraps** ([#1906](https://github.com/Hmbown/CodeWhale/pull/1906)): Intelligently strips soft line breaks during copy operations so pasted code doesn't contain weird terminal wrapping artifacts.
5.  **[Feat] Typed permission rules and config schema** ([#2046](https://github.com/Hmbown/CodeWhale/pull/2046) & [#2062](https://github.com/Hmbown/CodeWhale/pull/2062)): Introduces an `ExecPolicyEngine` allowing users to define persistent `allow`/`deny` rules for shell commands directly from the TUI approval prompt.
6.  **[Fix] Restore auto model state on session load** ([#1885](https://github.com/Hmbown/CodeWhale/pull/1885)): Resolves a bug where resuming a session saved with `/model auto` would mistakenly send the literal string `"auto"` to the API provider.
7.  **[Fix] Honour DEEPSEEK_YOLO env on TUI startup** ([#1870](https://github.com/Hmbown/CodeWhale/pull/1870)): Fixes the CLI launcher failing to pass YOLO mode into the new TUI process.
8.  **[Feat] Support configurable DeepSeek base URL** ([#1967](https://github.com/Hmbown/CodeWhale/pull/1967)): Allows users to set a custom base URL via `/config`, a prerequisite for enterprise proxy setups.
9.  **[Feat] Add `thread clear-name` command** ([#1939](https://github.com/Hmbown/CodeWhale/pull/1939)): Completes the thread renaming UX by allowing users to revert custom titles back to `(unnamed)`.
10. **[Fix] Handle CR in MCP SSE fields** ([#2020](https://github.com/Hmbown/CodeWhale/pull/2020)): Fixes parsing bugs with MCP SSE streams that caused hangs with certain tool servers.

## 5. Feature Request Trends
*   **Advanced OS Integrations:** Users want the TUI to interact more deeply with the host OS, specifically requesting native taskbar progress bars, animated title spinners, and completion sounds.
*   **Robust Custom Provider/Proxy Support:** There is a strong push to make CodeWhale provider-agnostic. Users are actively requesting better feature parity when using custom `base_url` endpoints like OpenRouter, ZenMux, and local vLLM instances.
*   **Sub-agent Orchestration Controls:** As users push the limits of parallel tool execution, there is a growing demand for better management of concurrent sub-agents, specifically auto-collapsing finished agents in the sidebar to save screen real estate.
*   **Input Method (IME) & Paste Handling:** Numerous requests to treat multi-line pastes safely (preventing auto-submission) and improve Chinese IME compatibility.

## 6. Developer Pain Points
*   **The Rebranding Migration Friction:** The transition from `deepseek-tui` to `codewhale` is currently causing headaches. Developers are facing broken Homebrew links, duplicated state directories (`~/.deepseek` vs `~/.codewhale`), and slow binary downloads in specific regions (like China) due to new package URLs.
*   **TUI Freezes and Deadlocks:** The Rust-based TUI architecture still suffers from hard locks. Developers are frustrated by complete UI freezes during parallel sub-agent execution, crossterm polling bugs on Windows, and IME input deadlocks.
*   **CJK & UTF-8 Boundary Handling:** International developers continue to hit panics and rendering glitches when the terminal fails to handle multi-byte character truncation.

</details>