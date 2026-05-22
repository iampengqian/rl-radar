# AI CLI Tools Community Digest 2026-05-23

> Generated: 2026-05-22 22:17 UTC | Tools covered: 9

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

Here is the cross-tool comparison report for the AI CLI ecosystem based on the 2026-05-23 community digests.

### 1. Ecosystem Overview
The AI developer tooling landscape is rapidly transitioning from simple code-completion assistants to autonomous, multi-agent coding environments executed directly in the terminal. As these tools scale in capability, they are hitting shared architectural walls, particularly around context window management (e.g., compaction death loops), operating system fragmentation (notably Windows TUI rendering and path handling), and multi-agent orchestration reliability. Tool creators are responding by rewriting core runtimes in performant systems languages (Rust, Bun/TypeScript) and building robust agentic lifecycle hooks to support enterprise-grade automation.

### 2. Activity Comparison
*Note: Counts reflect high-signal issues and PRs explicitly detailed in today's community digests.*

| Tool | Issues Highlighted | Key PRs Active/Merged | Release Status (May 23) |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 6 | **v2.1.149** released |
| **OpenAI Codex** | 10 | 10+ | **v0.134.0-alpha.2** (Rust) |
| **Gemini CLI** | 10 | 10 | **v0.43.0** & **v0.44.0-preview** |
| **GitHub Copilot** | 10 | 0 (1 spam) | **v1.0.52-2** patched |
| **Kimi Code** | 6 | 4 | No release |
| **OpenCode** | 10 | 10 | **v1.15.9** released |
| **Pi** | 10 | 10 | **v0.74.2** patched |
| **Qwen Code** | 10 | 10 | **v0.16.0** tagged (pipeline failed) |
| **DeepSeek TUI** | 7 | 8 | No release |

### 3. Shared Feature Directions
*   **Robust Sub-agent Lifecycles & Tooling:** Users are moving beyond single-threaded chats. Claude, Codex, Gemini, and Copilot communities are all reporting critical friction with "zombie" sub-agents, background tasks hanging, and worktree isolation failures. Reliable orchestration is the ecosystem's top requested feature.
*   **Observability, Token Tracking, and Cost Transparency:** As models consume context rapidly, users are demanding granular control over costs. Claude Code (`/usage` breakdown), Copilot (PRU tracking), and Codex (token indicators) all face community pressure to expose context limits, per-category token spend, and dollar equivalents in real-time.
*   **First-Class Local/Self-Hosted LLM Support:** Flexibility is paramount. Pi, Kimi Code, and OpenCode are seeing massive traction from users wanting seamless integrations with Ollama, LM Studio, and generic OpenAI-compatible API endpoints, moving away from strict vendor lock-in.
*   **Advanced Permission and Sandbox Architectures:** As agents execute code autonomously, safety is paramount. Copilot, DeepSeek TUI, and Codex are actively developing scoped filesystem sandboxes, typed allow/deny `execpolicy` rules, and strict MCP allowlists to prevent destructive actions or RCE vulnerabilities.
*   **Terminal UI (TUI) Keyboard-Driven Refinement:** Power users want to keep their hands on the keyboard. Claude Code (vim-style diff scrolling), OpenCode (responsive prompts), and DeepSeek TUI are prioritizing refined diff viewers and keyboard navigation.

### 4. Differentiation Analysis
*   **DeepSeek TUI & Kimi Code:** Differentiated by their open, modular architectures and rapid community-driven core rewrites (Python to Bun/React Ink). They attract developer tool builders who want deep customization (e.g., custom statuslines, local-first telemetry rings, and explicit YAML/AST-driven skill parsing).
*   **GitHub Copilot & OpenAI Codex:** Focused heavily on enterprise scaling, VS Code integration, and platform security (bundling custom Zsh, short-lived remote server tokens). Copilot is uniquely driving a "Premium Request Unit" (PRU) consumption model, focusing on enterprise IT controls over raw agentic freedom.
*   **Claude Code & OpenCode:** Leading the charge in complex multi-file diff generation, session compaction/recovery, and deep IDE integration. They target power users managing massive codebases who need surgical tool usage, PTY memory leak prevention, and long-term session persistence.
*   **Gemini CLI & Pi:** Highly focused on cross-platform/interoperability hardening. Pi acts as a universal bridge (standardizing OAuth device logins across OpenAI/Google/Anthropic), while Gemini CLI is uniquely focused on resolving critical cloud-to-local security boundaries (SSRF prevention, MCP RCE patches).

### 5. Community Momentum & Maturity
*   **Rapid Iterators (Codex, Gemini, OpenCode, Qwen):** These communities are shipping multiple PRs daily and pushing towards Rust/TypeScript-native runtimes. Qwen and OpenCode show high maturity in developer ergonomics (local ring-buffer diagnostics, AbortSignal leak fixes), though Qwen is currently struggling with release pipeline stability.
*   **High-Volume Power User Bases (Claude Code, Copilot):** Possess the most vocal communities dealing with issues of scale. Copilot maintains a closed-source approach resulting in sparse PR activity, whereas Claude Code processes public community PRs for niche architectural fixes.
*   **Emerging & Disruptive Communities (Kimi, DeepSeek, Pi):** Highly active but currently managing foundational architectural growing pains (Docker container freezing, core rewrites, TUI escape code pollution). They possess highly engaged open-source contributors willing to submit massive 30k+ line PRs.

### 6. Trend Signals
1.  **The "Compaction Death Loop" is the New Memory Leak:** As context windows grow, context truncation (compaction) routinely corrupts session states across tools. Startups and dev teams should prioritize building tools that offer immutable, deterministic session playback and recovery.
2.  **Security Shifting from Prompt-Guarding to System-Level Sandboxing:** AI tool security is moving beyond basic content filtering. The presence of active SSRF, RCE, and privilege-escalation vulnerabilities in MCP servers dictates that future AI dev tools must be architected with strict OS-level permission profiles and network boundaries.
3.  **Windows is No Longer a Second-Class Citizen:** The overwhelming prevalence of Windows-specific bugs (PowerShell parsing, ANSI rendering, orphaned file locks, cross-drive paths) across *all* platforms signals that capturing the enterprise market requires immediate, dedicated Windows TUI and PTY engineering.
4.  **Vendor-Agnostic Abstraction is Winning:** Developers are mixing providers (using Claude for reasoning, Gemini for context, DeepSeek for quick tasks) within a single CLI wrapper. Tools that abstract away provider-specific friction (e.g., handling Google's `store` field rejections or Azure's reasoning limits) will dominate the power-user market.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (Data as of 2026-05-23)

Based on activity from the official `github.com/anthropics/skills` repository, here is an analysis of the most active community PRs, emerging demands from Issues, and broader ecosystem trends.

## 1. Top Skills Ranking
*Sorted by community attention and PR activity. Note: Comment counts for the following PRs are undefined, indicating them as high-visibility items tracked by the community.*

*   **[#514 [OPEN] document-typography skill](https://github.com/anthropics/skills/pull/514)** by PGTBoos
    *   **Functionality:** Automated typographic quality control for AI-generated documents (fixes orphaned words, widowed paragraphs, and numbering alignment).
    *   **Highlights:** Addresses a widespread "invisible" issue in LLM output where formatting breaks down in PDF/DOCX exports.
*   **[#486 [OPEN] ODT (OpenDocument) skill](https://github.com/anthropics/skills/pull/486)** by GitHubNewbie0
    *   **Functionality:** Creation, template filling, and parsing of OpenDocument Format files (.odt, .ods) to/from HTML.
    *   **Highlights:** Brings native support for open-source ISO standard document formats, highly requested by enterprise users.
*   **[#83 [OPEN] skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** by eovidiu
    *   **Functionality:** Meta-skills designed to evaluate other Skills across five dimensions (structure, documentation, security, etc.).
    *   **Highlights:** A critical infrastructure addition that allows creators to self-validate their Skills before submitting them to the marketplace.
*   **[#210 [OPEN] frontend-design skill improvements](https://github.com/anthropics/skills/pull/210)** by justinwetch
    *   **Functionality:** Revises the existing frontend-design skill for better clarity, actionability, and token efficiency.
    *   **Highlights:** Focuses on token optimization and ensuring instructions are immediately actionable by Claude within a single context window.
*   **[#541 [OPEN] DOCX Tracked Change Collision Fix](https://github.com/anthropics/skills/pull/541)** by Lubrsy706
    *   **Functionality:** Prevents document corruption when the DOCX skill adds tracked changes to documents with existing bookmarks.
    *   **Highlights:** Solves a deep technical bug (OOXML shared `w:id` namespace) that caused silent failures in complex Word documents.
*   **[#806 [OPEN] sensory (macOS AppleScript)](https://github.com/anthropics/skills/pull/806)** by AdelElo13
    *   **Functionality:** Native macOS automation via AppleScript (`osascript`) instead of screenshot-based computer use.
    *   **Highlights:** Introduces a two-tier permission system (direct app scripting vs. System Events UI scripting) for secure, local OS automation.
*   **[#444 [OPEN] AURELION skill suite](https://github.com/anthropics/skills/pull/444)** by Chase-Key
    *   **Functionality:** A structured cognitive and memory framework ecosystem (kernel, advisor, agent, memory) for professional knowledge management.
    *   **Highlights:** Pushes the boundaries of agentic workflows by giving Claude structured thinking templates and persistent context.

## 2. Community Demand Trends
*Distilled from the most-discussed Issues, here are the primary feature gaps and directions the community is requesting.*

*   **Enterprise Organization & Security:** The highest-engagement issue is **[#228 Enable org-wide skill sharing](https://github.com/anthropics/skills/issues/228)** (13 comments, 7 thumbs-up). Users want centralized team libraries instead of manual file sharing. Closely related is **[#492 Trust boundary abuse](https://github.com/anthropics/skills/issues/492)**, highlighting urgent demand for namespace separation between official `anthropic/` skills and community skills to prevent security vulnerabilities.
*   **Reliability & Context Management:** Users are actively reporting ecosystem friction, specifically regarding duplicate context loading (**[#189 Duplicate skills](https://github.com/anthropics/skills/issues/189)**) and core evaluation bugs (**[#556 `run_eval.py` 0% trigger rate](https://github.com/anthropics/skills/issues/556)**). The community is also asking for better handling of MCP data bloat to prevent immediate context window exhaustion (**[#1102 MCP excess data](https://github.com/anthropics/skills/issues/1102)**).
*   **Skill-to-MCP Standardization:** A highly requested architectural shift is exposing Skills as standardized Model Context Protocol tools (**[#16 Expose Skills as MCPs](https://github.com/anthropics/skills/issues/16)**), allowing skills to define strict API schemas (e.g., `generateAlgorithmArt({params})`).
*   **Cross-Platform & Bedrock Support:** Users are actively asking for deployment guides and compatibility for AWS Bedrock environments (**[#29 Usage with bedrock](https://github.com/anthropics/skills/issues/29)**).

## 3. High-Potential Pending Skills
*Active PRs addressing core ecosystem needs that are likely to be merged soon.*

*   **[PR #360: AppDeploy Skill](https://github.com/anthropics/skills/pull/360)**: Direct full-stack web app deployment from Claude to public URLs. Bridges the gap between code generation and live deployment.
*   **[PR #539: YAML Validator Fix](https://github.com/anthropics/skills/pull/539)**: Fixes a critical silent failure in `quick_validate.py` where unquoted YAML fields with colons break skill parsing. Essential for Skill creator reliability.
*   **[PR #723: Testing-Patterns Skill](https://github.com/anthropics/skills/pull/723)**: A comprehensive testing stack skill (AAA patterns, React component testing, edge cases) adhering to the Testing Trophy model.
*   **[PR #190: n8n-builder & n8n-debugger](https://github.com/anthropics/skills/pull/190)**: Production-tested skills for building and debugging n8n workflows, indicating a strong trend toward AI-assisted automation integration.

## 4. Skills Ecosystem Insight
The community's most concentrated demand is transitioning from isolated prompt-engineering utilities toward **secure, enterprise-grade workflow automation and reliable document parsing**.

---

# Claude Code Community Digest — 2026-05-23

## 1. Today's Highlights

Claude Code shipped **v2.1.149**, bringing a highly requested per-category usage breakdown (`/usage`) and significant TUI improvements for keyboard-driven diff navigation and rendered Markdown output. The community is actively surfacing **agent/worktree isolation bugs** and **session compaction chain-walker regressions**, indicating that multi-agent workflows and long-running session state management remain critical growing pains. Meanwhile, a community PR targeting `security-guidance` plugin false positives highlights ongoing friction between safety hooks and legitimate developer workflows.

---

## 2. Releases

**v2.1.149** — ([release notes](https://github.com/anthropics/claude-code/releases))
- **`/usage` per-category breakdown**: Now shows cost drivers segmented by skills, subagents, plugins, and individual MCP server — addressing long-standing opacity around Max/Pro usage limits.
- **`/diff` keyboard scrolling**: Full vim-style (j/k) and standard (arrows, PgUp/PgDn, Space, Home/End) navigation for the diff detail view.
- **Markdown rendering**: Inline Markdown output now renders properly in the TUI.

**v2.1.148** — Hotfix for a regression in v2.1.147 where the Bash tool incorrectly returned exit code 127 on every command for a subset of users.

---

## 3. Hot Issues

1. **[#42776](https://github.com/anthropics/claude-code/issues/42776)** — *Windows orphaned process file lock prevents relaunch.* 75 comments, 26 👍. A persistent desktop issue where file locks from orphaned processes block relaunch. High engagement suggests Windows desktop support remains a pain point. (Open, labeled `invalid` — likely triage dispute.)

2. **[#59915](https://github.com/anthropics/claude-code/issues/59915)** — *VS Code terminal rendering corruption on text selection.* 10 comments, **31 👍**. Intermittent garbled output in the VS Code integrated terminal. Highest 👍 count among recent issues; signals TUI rendering stability is a top community concern.

3. **[#61471](https://github.com/anthropics/claude-code/issues/61471)** — *Edit tool silently no-ops on disk in sub-agent worktrees.* 3 comments. A critical data-integrity bug where the Edit tool appears to succeed (Read returns edited content) but nothing is written to disk when using sub-agent worktrees. Dangerous for production workflows.

4. **[#61547](https://github.com/anthropics/claude-code/issues/61547)** — *Spawned sub-agents go idle immediately without executing.* 3 comments. Sub-agents created via the Agent tool never process their prompts — they emit only `idle_notification`. Blocks multi-agent orchestration entirely.

5. **[#34566](https://github.com/anthropics/claude-code/issues/34566)** — *Oversized images silently brick sessions.* 12 comments, 5 👍. Images that fail processing are still injected into context, corrupting the session. Long-lived, still open.

6. **[#55818](https://github.com/anthropics/claude-code/issues/55818)** — *Dangling `logicalParentUuid` after compaction truncates sessions silently.* 7 comments. Proposes a "lost+found / fsck" recovery mechanism. Directly relates to the compaction chain-walker class of bugs.

7. **[#46720](https://github.com/anthropics/claude-code/issues/46720)** — *`security-guidance` hook blocks markdown/doc writes containing `exec(`.* 4 comments. The `child_process_exec` rule uses bare substring matching, causing false positives on documentation mentioning `exec()`. A community fix is already in PR (see §4).

8. **[#61573](https://github.com/anthropics/claude-code/issues/61573)** — *Permission parser treats `#` in multi-line quoted strings as shell comments.* 2 comments. Bash permission allow-rules break when commands contain `#` inside quoted strings — a parser edge case.

9. **[#61570](https://github.com/anthropics/claude-code/issues/61570)** — *Bash tool stores full command as `tool_use.name`, hitting 200-char API limit.* 2 comments. Causes 400 errors from the Anthropic API. Points to a serialization bug in tool-call metadata.

10. **[#61572](https://github.com/anthropics/claude-code/issues/61572)** — *`EnterWorktree` / `Agent` worktree isolation fails on Windows when CWD contains a space.* 1 comment. Path-quoting issue specific to Windows; `git worktree add` works manually but the tool wrapper doesn't handle spaces.

---

## 4. Key PR Progress

1. **[#61373](https://github.com/anthropics/claude-code/pull/61373)** — `fix(security-guidance): add exclude_substrings to cut false positives`. Community PR by **zhang-liz** to address substring-match false positives (e.g., `ast.literal_eval(`, `db.exec(...)`, `RegExp#exec(`). Directly fixes the pain from [#46720](https://github.com/anthropics/claude-code/issues/46720) and related reports.

2. **[#60813](https://github.com/anthropics/claude-code/pull/60813)** — Addresses excessive token consumption on initial prompts and continuations. Claims to be a production-ready optimization. Open; no maintainer response yet.

3. **[#20448](https://github.com/anthropics/claude-code/pull/20448)** — Adds `web4-governance` plugin for AI governance with R6 audit trails and T3 trust tensors. Long-running PR (since Jan 2026); appears to be a third-party governance framework integration.

4. **[#61478](https://github.com/anthropics/claude-code/pull/61478)** / **[#58673](https://github.com/anthropics/claude-code/pull/58673)** — Both appear to be low-quality/spam PRs with nonsensical titles. Highlight the need for contributor triage hygiene.

5. **[#61319](https://github.com/anthropics/claude-code/pull/61319)** — *Fix changelog.* Closed/merged quickly; minor documentation housekeeping.

> *Note:* Only 6 PRs were updated in the last 24 hours, with most being low-signal. The Anthropic team appears to manage most changes internally without public PRs.

---

## 5. Feature Request Trends

- **Multi-agent orchestration reliability (#61471, #61547, #61572):** Sub-agent spawning and worktree isolation are shipped but fragile. Requests converge on robust agent lifecycle management and proper Windows path handling.

- **Tabbed conversations in VS Code (#37354, 9 comments):** Persistent request for side-by-side conversation management within the IDE panel rather than single-session views.

- **Programmatic `/feedback` and `/usage` access (#49121):** Developers want these interactive-only commands exposed as CLI subcommands or agent-callable tools for automation and CI/CD integration.

- **Session recovery tooling (#55818, #44772, #46603):** A cluster of requests for "fsck-like" session repair, rewind-ability across compacted boundaries, and visibility into dangling parent chains.

- **Background process observability (#61568):** Request for duration limits and status visibility for `run_in_background` Bash invocations — currently invisible to both user and model.

- **Improved MCP progress feedback (#51713):** MCP progress notifications regressed and no longer display, reducing transparency for long-running MCP tool calls.

---

## 6. Developer Pain Points

- **Session compaction is a recurring source of data loss.** Multiple issues (#55818, #46603, #44772, #55700, #48937) describe scenarios where context compaction truncates history, breaks session forking, or causes the rewind picker to silently discard pre-compact messages. The 5 MB session-file threshold is particularly problematic. This is the single most impactful class of bugs for power users.

- **Windows platform support remains second-tier.** File-lock orphaning (#42776), clipboard paste failures (#56792), and path-space handling bugs (#61572) show Windows users hitting basic reliability issues that don't exist on macOS/Linux.

- **Security hooks produce actionable false positives.** The `security-guidance` plugin's substring matching blocks legitimate code patterns (`ast.literal_eval`, `db.exec`, documentation containing `exec(`), eroding trust in the safety system (#46720). A fix is proposed in PR [#61373](https://github.com/anthropics/claude-code/pull/61373).

- **VS Code terminal rendering instability** (#59915, 31 👍) disrupts daily workflows. The integrated terminal's re-render behavior on text selection makes output unreadable intermittently, forcing users to resort to external terminals.

- **Bash tool edge cases in serialization and parsing.** The tool name field overflow (#61570) and comment-detection false positives in quoted strings (#61573) suggest the Bash tool's command parsing layer needs hardening for complex shell invocations.

- **Memory adherence is perceived to be degrading** (#61549). Users report that `CLAUDE.md` memory items are increasingly ignored in longer sessions, suggesting potential context-window priority issues as models and tooling evolve.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-23

## 1. Today's Highlights
The Codex team released two rapid-fire Rust core alpha versions (0.134.0-alpha.1 and alpha.2), signaling aggressive iteration on the underlying CLI and app-server runtime. On the feature front, a major 3-part Pull Request series introduces a "next-prompt suggestion engine" to the TUI, aiming to provide intelligent ghost-text autocompletions for developers. Meanwhile, Windows users continue to report prominent TUI and sandbox regressions, dominating the day's issue tracker activity.

## 2. Releases
- **rust-v0.134.0-alpha.2** and **rust-v0.134.0-alpha.1**: Two consecutive core runtime releases dropped within the last 24 hours. While detailed release notes are sparse in the provided data, these alphas likely include foundational changes to support the newly merged telemetry, turn input refactoring, and remote control server token migrations seen in today's PRs.

## 3. Hot Issues
1. **[#14593 [OPEN] Burning tokens very fast](https://github.com/openai/codex/issues/14593)**: A long-standing and highly active issue (588 comments, 260 👍) where the VS Code extension consumes tokens at an alarming rate. Remains a critical pain point for Business subscribers.
2. **[#23794 [OPEN] Codex Desktop no longer shows visible context/token usage indicator](https://github.com/openai/codex/issues/23794)**: A regression in the latest Desktop App that hides context limits. With 85 comments in just two days, users are frustrated by the inability to monitor their context window usage.
3. **[#18993 [OPEN] Unable to open past conversation history in VS Code extension](https://github.com/openai/codex/issues/18993)**: A month-old session regression that breaks chat history, seeing sustained traction (26 comments) as it heavily impacts developer workflows.
4. **[#23694 [OPEN] Remote compact task fails with "array too long" error](https://github.com/openai/codex/issues/23694)**: A high-severity bug introduced in CLI v0.132.0 where context compaction fails during remote tasks using GPT-5.5, causing workflow blockages.
5. **[#23031 [CLOSED] Regression: Codex CLI 0.131.0-alpha.22 prints raw ANSI escape sequences in Windows TUI](https://github.com/openai/codex/issues/23031)**: A severe Windows rendering regression spilling raw ANSI codes. Its closure is a win for Windows CLI users, though similar issues remain open (see below).
6. **[#23740 [OPEN] Latest npm Codex CLI renders raw ANSI/control sequences in Windows Terminal](https://github.com/openai/codex/issues/23740)**: Closely related to #23031, this tracks ongoing TUI rendering issues on Windows introduced in v0.131.0 and v0.132.0.
7. **[#10185 [OPEN] Mode switch Plan -> Code still behaves like Plan](https://github.com/openai/codex/issues/10185)**: A critical TUI logic bug where switching modes fails to actually change agent behavior, undermining autonomous workflows.
8. **[#23195 [OPEN] Mac OS could not open codex because it's malware](https://github.com/openai/codex/issues/23195)**: A macOS Gatekeeper false positive locking users out of the Desktop app mid-session, causing significant alarm.
9. **[#22779 [OPEN] Completed subagents continue to count against thread limit](https://github.com/openai/codex/issues/22779)**: A subagent lifecycle bug where zombie agents exhaust thread limits, blocking further agentic execution.
10. **[#17320 [OPEN] Excessive SQLite WAL writes during streaming due to TRACE logs](https://github.com/openai/codex/issues/23694)**: A performance bug causing massive disk I/O because the IDE extension ignores `RUST_LOG` levels during streaming.

## 4. Key PR Progress
1. **[#24126, #24127, #24176 - feat(next-prompt): add suggestion engine [1, 2, 3 of 3]](https://github.com/openai/codex/pull/24126)**: A massive feature rollout enabling TUI ghost-text prompt suggestions. *PR 1* creates the core engine, *PR 2* exposes the `thread/suggestNextPrompt` RPC via app-server, and *PR 3* renders the ghost text in the TUI.
2. **[#23813 & #24108 - windows-sandbox: PermissionProfile plumbing](https://github.com/openai/codex/pull/23813)**: These PRs remove legacy `SandboxPolicy` compatibility paths and pass exact workspace roots to the Windows runner, enabling advanced deny-globs and strict FS permissions.
3. **[#23585 - Add auto-compaction death-loop guard](https://github.com/openai/codex/pull/23585)**: Prevents the agent from endlessly cycling between execution and context compaction when context remains over the trigger limit.
4. **[#24154 - Add experimental turn additional context](https://github.com/openai/codex/pull/24154)**: Introduces `additionalContext` to `turn/start` and `turn/steer`, allowing external tools (like browser automation) to inject ephemeral context without triggering user-prompt lifecycle events.
5. **[#24141 - feat(app-server): migrate remote control to server tokens](https://github.com/openai/codex/pull/24141)**: Migrates websocket authentication to short-lived server tokens, improving security by eliminating persistent user access tokens for remote connections.
6. **[#23756 & #23768 - Package and prepend bundled zsh fork](https://github.com/openai/codex/pull/23756)**: Standardizes the packaged shell environment by bundling a custom zsh fork and ensuring it takes precedence in the `$PATH`, reducing environment inconsistencies.
7. **[#24151 - Use TurnInput for session task input](https://github.com/openai/codex/pull/24151)**: Refactors session inputs to unify initial and follow-up turns, simplifying the internal event queue architecture.
8. **[#23989 - Add typed Images client to codex-api](https://github.com/openai/codex/pull/23989)**: Lays the API groundwork for native image generation and editing capabilities within the Codex ecosystem.
9. **[#24143 & #24142 - Track thread/app-server start in ChatGPT telemetry](https://github.com/openai/codex/pull/24143)**: Improves observability by isolating app-server startup and thread initialization latencies from standard turn timing.
10. **[#24131 - Centralize Responses retry policy](https://github.com/openai/codex/pull/24131)**: Deduplicates retry and Websocket-to-HTTPS fallback logic between standard model turns and the new remote compaction v2 path.

## 5. Feature Request Trends
- **Deeper Observability in CLI**: Users are actively requesting transparent usage tracking, as seen in requests to expose full usage/limit data via a `/status` command ([#15281](https://github.com/openai/codex/issues/15281)) and frustration over missing Desktop UI indicators.
- **Voice & Multimodal Inputs**: Demand continues for native voice transcription directly within the CLI ([#14630](https://github.com/openai/codex/issues/14630)), matching the quality of the official Codex App.
- **Stable External Integration APIs**: There is a strong push from tool builders to stabilize and document the session JSONL schema ([#20952](https://github.com/openai/codex/issues/20952)) and clarify thread resume vs. read semantics ([#17900](https://github.com/openai/codex/issues/17900)).

## 6. Developer Pain Points
- **Windows TUI Instability**: Windows users are experiencing severe operational friction. The CLI is currently spewing raw ANSI escape sequences due to terminal rendering regressions ([#23031](https://github.com/openai/codex/issues/23031), [#23740](https://github.com/openai/codex/issues/23740)), and elevated sandboxes are failing to spawn correctly ([#24098](https://github.com/openai/codex/issues/24098)).
- **Context & Token Blind Spots**: Developers are increasingly frustrated by the inability to track token consumption. Rapid token burn ([#14593](https://github.com/openai/codex/issues/14593)) combined with the removal of UI indicators ([#23794](https://github.com/openai/codex/issues/23794)) makes cost management difficult.
- **Agentic Lifecycle Leaks**: As developers lean heavily into multi-agent workflows, architectural growing pains are evident. Completed subagents lingering and eating up thread limits ([#22779](https://github.com/openai/codex/issues/22779)) and compaction death-loops ([#23585](https://github.com/openai/codex/issues/23585)) are forcing users to manually restart sessions.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for 2026-05-23.

## 1. Today's Highlights
The community saw the release of **v0.43.0** and the first preview cut of **v0.44.0**, with recent development heavily focused on agent resilience, Auto Memory reliability, and security hardening. A significant theme across today’s issues and pull requests is the active patching of critical security vulnerabilities—including RCE via MCP allowlist bypasses and SSRF via open redirects—alongside ongoing community frustration with the generalist agent hanging during routine tasks. 

## 2. Releases
- **[v0.43.0](https://github.com/google-gemini/gemini-cli/pull/26958):** Introduces model steering to encourage the use of the `edit` tool for surgical code modifications, alongside documentation clarifications for Auto Memory's proposed updates and skills.
- **[v0.44.0-preview.0](https://github.com/google-gemini/gemini-cli/pull/26957):** The first nightly/preview cut for the next release cycle, consolidating recent core refactors.

## 3. Hot Issues
1. **[Generalist agent hangs forever (#21409)](https://github.com/google-gemini/gemini-cli/issues/21409):** Users report that deferring to the generalist agent causes the CLI to hang indefinitely (up to an hour) on simple tasks like folder creation. This is a highly upvoted issue with heavy community engagement, currently awaiting a retest.
2. **[PowerShell `&&` ParserError (#20773)](https://github.com/google-gemini/gemini-cli/issues/20773):** A persistent P1 bug where the CLI attempts to execute `git status && git branch` in the shell, crashing the default Windows PowerShell 5.1 which lacks support for the `&&` operator.
3. **[Subagent false "success" on MAX_TURNS (#22323)](https://github.com/google-gemini/gemini-cli/issues/22323):** The `codebase_investigator` subagent reports `status: "success"` and `GOAL` termination even when it hits the maximum turn limit before doing any actual analysis, hiding task failures from the user.
4. **[RCE via MCP Blacklist Bypass (#27377)](https://github.com/google-gemini/gemini-cli/pull/27377):** *(Related PR)* A critical vulnerability where malicious workspace-scoped MCP servers could bypass user-configured `mcp.excluded` blacklists to execute local processes. 
5. **[SSRF via Open Redirect (#27335)](https://github.com/google-gemini/gemini-cli/pull/27335):** *(Related PR)* The `web-fetch` tool was vulnerable to Server-Side Request Forgery (SSRF) because it validated the initial URL but blindly followed subsequent HTTP redirects to internal IPs.
6. **[Auto Memory Quality and Bugs (#26516, #26522, #26523)](https://github.com/google-gemini/gemini-cli/issues/26516):** A clustered series of issues addressing Auto Memory's tendency to indefinitely retry low-signal sessions, silently drop invalid patches, and inadvertently expose secrets in the background extraction agent's context.
7. **[Shell execution gets stuck on "Waiting input" (#25166)](https://github.com/google-gemini/gemini-cli/issues/25166):** A P1 bug where simple CLI commands show as active and "Awaiting user input" long after the shell process has actually completed.
8. **[400 Error with > 128 Tools (#24246)](https://github.com/google-gemini/gemini-cli/issues/24246):** The Gemini API throws a 400 error when the CLI context includes more than 128 tools, highlighting the need for smarter dynamic tool scoping.
9. **[Agent ignores skills and sub-agents (#21968)](https://github.com/google-gemini/gemini-cli/issues/21968):** Users note that the model almost completely ignores custom skills and sub-agents unless explicitly prompted, failing to utilize relevant tools autonomously. 
10. **[Terminal scrollback broken (#27378)](https://github.com/google-gemini/gemini-cli/issues/27378):** Users report that if CLI output exceeds the terminal height, the scrollbar takes up the full height, completely preventing standard mouse-wheel scrollback.

## 4. Key PR Progress
1. **[Fix RCE via MCP allowlist/bypass (#27377)](https://github.com/google-gemini/gemini-cli/pull/27377):** Patches a severe Remote Code Execution vulnerability by enforcing strict validations on workspace-scoped MCP servers.
2. **[Prevent SSRF via web-fetch redirects (#27335)](https://github.com/google-gemini/gemini-cli/pull/27335):** Secures the `fetchWithTimeout` function by ensuring that intermediate HTTP redirects are validated against the internal SSRF blocklist.
3. **[Add ephemeral session mode (`--ephemeral`) (#27365)](https://github.com/google-gemini/gemini-cli/pull/27365):** Introduces a highly requested CLI flag that prevents headless or data-annotation runs from flooding local session logs.
4. **[Catch EBADF on PTY resize (#27372)](https://github.com/google-gemini/gemini-cli/pull/27372):** Fixes a UI crash that occurred when the terminal was resized immediately after a background shell process exited.
5. **[Prevent PTY Memory Leaks (#27154)](https://github.com/google-gemini/gemini-cli/pull/27154):** Resolves a critical memory/file descriptor leak in `ShellExecutionService` by moving `activePtys.delete()` out of an asynchronous Promise chain.
6. **[Strip CJK characters from model thought output (#27349)](https://github.com/google-gemini/gemini-cli/pull/27349):** Improves thought-process parsing by stripping unexpected Chinese/Japanese/Korean characters emitted by the model during English sessions.
7. **[Wrap Ajv `validate()` in try/catch (#27348)](https://github.com/google-gemini/gemini-cli/pull/27348):** Prevents hard crashes in `write_file`/`replace` tools when the LLM sends malformed JSON schemas that break Ajv's internal traverser.
8. **[Strip `functionCall.id` before API call (#27341)](https://github.com/google-gemini/gemini-cli/pull/27341):** Fixes a `400 "Unknown name 'id'"` API error that occurred on any turn following a tool call due to internal ACP rendering IDs leaking into the payload.
9. **[Drop `shell: true` from grep spawn (#27379)](https://github.com/google-gemini/gemini-cli/pull/27379):** Resolves Node 22+ `DEP0190` deprecation warnings and improves security by removing `shell: true` from command availability checks.
10. **[Update default auto routing to `gemini-3.1-flash-lite` (#27071)](https://github.com/google-gemini/gemini-cli/pull/27071):** Upgrades the default lightweight model used for internal tools and routing aliases to Gemini 3.1.

## 5. Feature Request Trends
- **AST-Aware Operations:** Strong continued interest in AST-aware file reads, searches, and codebase mapping ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) to help sub-agents navigate codebases with fewer turns and less token noise.
- **Backgroundable Local Agents:** A push to allow local subagents (like linters or builders) to be sent to the background via `Ctrl+B` so users can continue interacting with the main agent ([#22741](https://github.com/google-gemini/gemini-cli/issues/22741)).
- **Enhanced Agent Self-Awareness:** Requests to improve the agent's internal knowledge of its own CLI flags, hotkeys, and capabilities so it can self-debug and guide users more effectively ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).

## 6. Developer Pain Points
- **Sub-agent Reliability & Deception:** Developers are frustrated by sub-agents that hang indefinitely or falsely report "success" when they actually hit maximum turn limits, breaking automation workflows. 
- **Windows Compatibility:** The continued presence of the PowerShell 5.1 `&&` operator crash makes the CLI completely unusable out-of-the-box for many Windows developers.
- **Destructive Behavior:** Users are encountering instances where the model uses `git reset --force` or modifies live databases when safer alternatives exist, highlighting a need for better safety steering in complex operational contexts ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).
- **Memory/Secret Handling:** There is lingering anxiety over Auto Memory logging practices, specifically the fact that secret redaction happens *after* text is placed into the model's context, necessitating deterministic redaction pipelines.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for 2026-05-23.

### 1. Today's Highlights
GitHub Copilot CLI rolled out two rapid-fire patch releases (v1.0.52-1 and v1.0.52-2) focused on quality-of-life improvements, including end-to-end enforcement for context window tier selection and automatic pruning of old log files. The community remains highly active in discussing model discoverability, especially as it relates to the new Premium Request Units (PRU) consumption model, alongside recurring friction with terminal rendering, keyboard layouts, and MCP server reliability.

### 2. Releases
*   **[v1.0.52-2](https://github.com/github/copilot-cli/releases/tag/v1.0.52-2)**
    *   **Added:** Enforced context window tier selection (~200K vs 1M tokens) end-to-end, ensuring the chosen tier actually constrains compaction, truncation, and token display.
    *   **Improved:** Reasoning tokens are now displayed as a parenthetical within the output token count in the token usage summary.
*   **[v1.0.52-1](https://github.com/github/copilot-cli/releases/tag/v1.0.52-1)**
    *   **Improved:** The status line command now supports plain shell commands (not just executable script paths). Added automatic pruning of old process log files from `~/.copilot/logs/` at startup to prevent unbounded disk growth. General UI polish for the `/statusline` picker (cleaner descriptions and spacing).

### 3. Hot Issues
1.  **[Issue #892](https://github.com/github/copilot-cli/issues/892) [OPEN]** *Add sandbox mode to restrict file access.* Requested a filesystem sandbox to restrict the agent's read/write permissions to a specified workspace directory. Highly requested by the community (**44 👍**).
2.  **[Issue #3442](https://github.com/github/copilot-cli/issues/3442) [OPEN]** *Remote sessions disabled in v1.0.51.* Users hitting a roadblock where remote sessions throw an admin restriction error immediately after updating (**8 👍**).
3.  **[Issue #700](https://github.com/github/copilot-cli/issues/700) [OPEN]** *Provide a way to list all supported models.* A long-standing request for a `--list-models` command to improve visibility into available models and their premium multipliers.
4.  **[Issue #3348](https://github.com/github/copilot-cli/issues/3348) [OPEN]** *Content filtering blocks legitimate reasoning turns.* Users report that the model silently returns empty turns due to false positives from the content filter during deep technical debugging sessions (**4 👍**).
5.  **[Issue #3304](https://github.com/github/copilot-cli/issues/3304) [OPEN]** *`ERR_HTTP2_INVALID_SESSION` causes transient retries.* Frequent network-related session destructions interrupting long reasoning responses.
6.  **[Issue #3000](https://github.com/github/copilot-cli/issues/3000) [CLOSED]** *`--config-dir` does not isolate plugins.* Fixed an issue where plugins were always loaded from the root `config.json` ignoring the `--config-dir` flag, hindering environment isolation.
7.  **[Issue #3469](https://github.com/github/copilot-cli/issues/3469) [OPEN]** *File `@` mention is very slow.* Severe performance degradation (5+ second lag) when using file `@` mentions in massive repositories (e.g., 150k files).
8.  **[Issue #2892](https://github.com/github/copilot-cli/issues/2892) [OPEN]** *MCP stdio transport closes for sub-agents.* MCP servers close approximately 4 seconds after an agent connection is established, breaking tool calls for longer-running sub-agents.
9.  **[Issue #1999](https://github.com/github/copilot-cli/issues/1999) [OPEN]** *Cannot enter `@` on German keyboards.* An input bug preventing the entry of special characters using the Alt-Gr key, rendering the CLI unusable for some non-US keyboard layouts.
10. **[Issue #3466](https://github.com/github/copilot-cli/issues/3466) [OPEN]** *Picking the right Opus 4.7 variant is difficult.* User frustration regarding model discoverability, stating that settings and pickers are hostile to finding specific reasoning model variants.

### 4. Key PR Progress
*   **[PR #3473](https://github.com/github/copilot-cli/pull/3473) [OPEN]** *Update project name in README.* The only PR updated in the last 24 hours. Note: This appears to be a spam/irrelevant PR containing referral links rather than meaningful technical progress. 

*(Note: As only one PR met the update criteria and it was spam, there are no substantial PR progress updates to report for this 24-hour cycle).*

### 5. Feature Request Trends
*   **Model Discoverability and Cost Tracking:** The shift to API/PRU-based pricing has spiked user demand for cost transparency. Developers are actively requesting utilities to track dollars/PRUs spent per session ([Issue #3474](https://github.com/github/copilot-cli/issues/3474)) and ensure they aren't charged for blocked/failed requests ([Issue #3460](https://github.com/github/copilot-cli/issues/3460)). Better tooling to explore and pin specific model variants is also highly requested.
*   **Security and Sandboxing:** Enterprise and power users continue to push for a built-in sandbox mode to restrict the agent's file system access purely to the working directory, preventing accidental modifications to system or external files.
*   **Non-Interactive Enhancements:** Developers want more robust automation workflows, specifically requesting a `--prompt-file <path>` flag to bypass shell `ARG_MAX` limits without relying on awkward stdin workarounds ([Issue #3398](https://github.com/github/copilot-cli/issues/3398)).
*   **Open Sourcing:** The community continues to express strong interest in open-sourcing the CLI to allow for deeper integration, debugging, and custom agent SDK workflows ([Issue #3241](https://github.com/github/copilot-cli/issues/3241)).

### 6. Developer Pain Points
*   **Terminal Emulator Compatibility:** A growing number of bugs relate to how the CLI interacts with terminal environments. Users are experiencing low-contrast text selection in dark themes, broken copy/paste on GNOME Wayland ([Issue #3467](https://github.com/github/copilot-cli/issues/3467)), disabled scroll-back in alternate screen buffers, and rendering quirks in specific environments like Emacs vterm ([Issue #3465](https://github.com/github/copilot-cli/issues/3465)).
*   **MCP (Model Context Protocol) Reliability:** Developers integrating external tools via MCP are running into persistent stability issues. Pain points include OAuth port conflicts ([Issue #3462](https://github.com/github/copilot-cli/issues/3462)), sudden transport closures with sub-agents, and confusing migration paths from `.vscode/mcp.json` to `.mcp.json` ([Issue #3461](https://github.com/github/copilot-cli/issues/3461)).
*   **Agentic Orchestration Flaws:** Multi-agent workflows are currently causing friction. The main orchestration agent frequently fails to receive completion notifications from sub-agents, breaking complex automated pipelines ([Issue #2923](https://github.com/github/copilot-cli/issues/2923)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the community digest for Kimi Code CLI.

# Kimi Code CLI Community Digest — 2026-05-23

## 1. Today's Highlights
The community is currently navigating critical stability and architectural growing pains. A highly ambitious proposal to completely rewrite the CLI from Python to Bun + TypeScript + React Ink continues to see active updates, reflecting a strong community desire for better native terminal performance. Meanwhile, recent bug reports highlight that MCP integration timeouts can currently render the entire CLI unresponsive, and the Web UI is in need of basic UX refinements for path displays and queued text inputs.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
Here are the most noteworthy issues updated recently:

*   **MCP Connection Timeout Causes Total CLI Failure ([#2343](https://github.com/MoonshotAI/kimi-cli/issues/2343))**
    *   **Why it matters:** A critical stability bug. When an MCP server (like context7) fails to connect or times out, it cascades and makes the entire Kimi CLI unusable. This is a high-priority blocker for users relying on external tooling.
*   **Agent Loop Stuck on Same Shell Command ([#2142](https://github.com/MoonshotAI/kimi-cli/issues/2142))**
    *   **Why it matters:** Users report the AI agent getting stuck in infinite loops executing the same shell command with truncated output. This breaks unassisted coding workflows and burns through API quotas.
*   **Remote Control / Multi-Device Session Handoff ([#2269](https://github.com/MoonshotAI/kimi-cli/issues/2269))**
    *   **Why it matters:** A highly requested architectural feature. Users want the ability to start a CLI session on a desktop and seamlessly hand it off or control it via a web interface or mobile device.
*   **Kimi Code Web Queued Text Disappears ([#2346](https://github.com/MoonshotAI/kimi-cli/issues/2346))**
    *   **Why it matters:** In v1.44.0, the web UI fails to reliably hold queued text, disrupting user flow when interacting with the agent.
*   **Kimi Code Web Path Optimization Needed ([#2345](https://github.com/MoonshotAI/kimi-cli/issues/2345))**
    *   **Why it matters:** The web GUI truncates long file paths with "..." during processing steps. Developers lose context on exactly which deep-nested files the AI is currently editing or scanning.
*   **Error Code 400 Confusion ([#2341](https://github.com/MoonshotAI/kimi-cli/issues/2341))**
    *   **Why it matters:** Closed issue regarding ambiguous 400 error codes, highlighting a need for better error messaging for API authentication or payload failures.

## 4. Key PR Progress
Here are the most important pull requests currently in progress:

*   **Architectural Rewrite: Python to Bun + TypeScript + React Ink ([#1707](https://github.com/MoonshotAI/kimi-cli/pull/1707))**
    *   **Details:** A massive community-driven effort rewriting the tool natively for the terminal. The PR includes 166 TS/TSX files (~32k lines of code) and 211 passing tests.
*   **Fix: Misleading "Quota Exceeded" on 403 Errors ([#2342](https://github.com/MoonshotAI/kimi-cli/pull/2342))**
    *   **Details:** Aims to fix incorrect error handling where *any* 403 HTTP error is falsely prefixed as a "Quota Exceeded" error, leading to developer confusion.
*   **Feat: Editable Path Bar with Autocomplete for Web UI ([#2215](https://github.com/MoonshotAI/kimi-cli/pull/2215))**
    *   **Details:** Directly addresses file navigation pain points. Introduces a smart, editable path bar in the Workspace sidebar with autocomplete to navigate deep directory structures efficiently.
*   **Feat: RTK Tool Default Hook ([#2344](https://github.com/MoonshotAI/kimi-cli/pull/2344))**
    *   **Details:** Introduces a default hook for Redux Toolkit (RTK), signaling expanded state management capabilities and integrations within the CLI's architecture.

## 5. Feature Request Trends
Based on recent issues and PRs, the community is trending heavily toward two major feature directions:
1.  **Cross-Platform Session Continuity:** Developers increasingly work across multiple environments (local terminal, web, mobile) and expect seamless state synchronization and remote control capabilities.
2.  **Advanced Web UI Integrations:** As the Web UI gains traction, users are demanding native IDE-like features, specifically regarding file tree navigation, autocomplete, and clear visibility of agent actions.

## 6. Developer Pain Points
*   **Cascading Failures from MCP:** Developers are frustrated by the lack of graceful degradation. A single failing MCP server connection shouldn't cause the core CLI to crash or become unusable.
*   **Agent Looping & Hallucinations:** When tools fail or output is truncated, the agent frequently gets stuck repeating commands rather than self-correcting.
*   **Misleading Error Messages:** Generic or mislabeled HTTP error responses (like seeing "Quota Exceeded" when it's actually a standard 403 Forbidden) make debugging API issues unnecessarily difficult.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-23

## 1. Today's Highlights

OpenCode shipped **v1.15.9**, delivering a completely redesigned diff viewer alongside clearer error messaging for invalid models and PTY sessions. The community is buzzing with discussions around new model support (Gemini 3.5 Flash), provider-specific regressions (DeepSeek, OpenRouter, Vertex), and a batch of compliance-tagged feature requests that signal an upcoming push toward richer plugin APIs and session lifecycle hooks.

## 2. Releases

### v1.15.9
- **Redesigned diff viewer** — now includes a file tree and refreshed layout for navigating multi-file changes.
- **Bugfix:** Closing the diff viewer now correctly returns to the previous screen instead of always navigating home ([PR #28903](https://github.com/anomalyco/opencode/pull/28903)).
- **Bugfix:** Clearer error messages when a default model is invalid or unavailable.
- **Bugfix:** Missing PTY session errors are now surfaced properly instead of silent failures.

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#16100 — Numpad keys not working in VS Code 1.110 terminal](https://github.com/anomalyco/opencode/issues/16100) | 18 👍, 27 comments. A persistent input-handling regression affecting VS Code integrated terminal users. Numpad works in the shell but not in OpenCode's TUI, pointing to a terminal-encoding gap. |
| 2 | [#28732 — Gemini 3.5 Flash on Vertex missing `thought_signature` warning](https://github.com/anomalyco/opencode/issues/28732) | 12 comments in 2 days. Vertex AI returns warnings about missing `thought_signature` on multi-tool sessions, potentially breaking tool execution flows for Google's newest model. |
| 3 | [#28377 — Feature: Add support for Gemini 3.5 Flash](https://github.com/anomalyco/opencode/issues/28377) | 15 👍. Filed the same day Google announced Gemini 3.5 Flash at I/O. High demand for first-class support of this frontier model. |
| 4 | [#15161 — Noisy "unknown format google-duration" warnings from Firebase MCP](https://github.com/anomalyco/opencode/issues/15161) | 11 👍. Firebase MCP tool schemas use non-standard formats that clutter the OpenCode UI on every launch. A schema-validation tolerance fix is needed. |
| 5 | [#13827 — How to completely disable the question tool](https://github.com/anomalyco/opencode/issues/13827) | 5 👍, 7 comments. Users want granular tool disablement, but denying `question` still allows it when blanket-permissions are granted. Reveals a permissions-model gap. |
| 6 | [#28905 — Brew trying to install non-existent v1.15.8](https://github.com/anomalyco/opencode/issues/28905) | 4 👍, 4 comments. Homebrew is referencing a phantom version, blocking upgrades entirely. Likely a release-tagging or formula-sync issue. |
| 7 | [#14511 — Keyboard shortcut to toggle tool output expansion](https://github.com/anomalyco/opencode/issues/14511) | 8 👍. Auto-collapsed long tool outputs require mouse interaction; users want a keyboard toggle for efficiency in TUI-heavy workflows. |
| 8 | [#21979 — Wrapped stream error chunks bypass retry, causing hung sessions](https://github.com/anomalyco/opencode/issues/21979) | 4 comments. Provider error chunks that don't match expected `response.*` schema cause type-validation failures and can leave parent sessions waiting forever. |
| 9 | [#28716 — DeepSeek reasoning_content missing on session continuation](https://github.com/anomalyco/opencode/issues/28716) | 3 comments. After upgrading to v1.15.7, continuing a session with DeepSeek models triggers HTTP 400. First prompt works; subsequent prompts fail. |
| 10 | [#20699 — Agent sends duplicate message](https://github.com/anomalyco/opencode/issues/20699) | 3 comments. A hidden first message is generated alongside the visible response, causing the agent's reasoning to reference a "previous" message the user never saw. |

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#28903 — fix(tui): diff viewer close returns to last route](https://github.com/anomalyco/opencode/pull/28903) | **Merged (ships in v1.15.9).** Fixes the diff viewer always navigating to home on close; now returns to the originating route (e.g., session view). |
| 2 | [#28897 — fix(digitalocean): use OAuth token directly for inference](https://github.com/anomalyco/opencode/pull/28897) | DigitalOcean retired the MAK endpoint (returns 410). This PR bypasses the broken Model Access Key flow and passes the OAuth token directly. |
| 3 | [#28909 — fix(llm): stabilize Anthropic tool result typecheck](https://github.com/anomalyco/opencode/pull/28909) | Preserves narrowed Anthropic tool-result content array type before `Effect.forEach`, preventing `tsgo` type widening during compilation. |
| 4 | [#28788 — feat(app): improve desktop v2 startup and controls](https://github.com/anomalyco/opencode/pull/28788) | Desktop v2 refinements: Home/session composer, titlebar controls, branch-aware worktree creation, and non-blocking MCP startup serialization. |
| 5 | [#28255 — feat(tui): make prompt size responsive and configurable](https://github.com/anomalyco/opencode/pull/28255) | The TUI prompt now grows with terminal size instead of being capped at 6 lines, addressing a long-standing usability limitation. |
| 6 | [#24666 — feat(plugin): add `model.before` hook](https://github.com/anomalyco/opencode/pull/24666) | Lets plugins rewrite the selected `(providerID, modelID)` before a chat completion dispatch — enabling smart routing and cost-aware model selection. |
| 7 | [#26387 — tui: optimistically render submitted prompts](https://github.com/anomalyco/opencode/pull/26387) | Inserts submitted prompts into the sync store immediately using client-generated IDs, eliminating the perceived latency between submission and rendering. |
| 8 | [#28067 — fix(session): reconcile compaction summary with preserved tail](https://github.com/anomalyco/opencode/pull/28067) | Fixes stale compaction summaries where recent turns completed work the summary still listed as "next steps." |
| 9 | [#27694 — fix(opencode): resolve LSP dependencies from workspace root](https://github.com/anomalyco/opencode/pull/27694) | Enables correct LSP resolution when OpenCode is launched from a monorepo root but the language project lives in a child directory. |
| 10 | [#11303 — feat: let ACP client expose input/output properly](https://github.com/anomalyco/opencode/pull/11303) | Fixes the ACP (Agent Communication Protocol) tool-call lifecycle so clients like Zed can properly render command execution with real input/output. |

## 5. Feature Request Trends

Several clear themes emerge from the latest issues and PRs:

- **New model support** — Gemini 3.5 Flash (#28377) and Claude Opus 4.6 vision (#14289) dominate requests. Users expect same-day support for newly announced models.
- **Plugin API extensibility** — A surge of `[needs:compliance]` issues (#28902, #28901, #28871–28875) request persistent TUI surfaces, model override hooks, per-agent MCP tool filtering, session lifecycle hooks, and real-time tool-input streaming. The plugin ecosystem is pushing toward first-class UI and lifecycle integration.
- **Post-chat automation** — #28891 requests the ability to run shell commands automatically when a chat ends with modified files, reflecting demand for CI/CD-style hooks after agent-driven edits.
- **Keyboard-driven workflow** — Requests for toggle shortcuts (#14511) and IDE shortcut forwarding (#27006) show TUI users want full keyboard control without reaching for the mouse.

## 6. Developer Pain Points

- **Provider-specific regressions are piling up:** DeepSeek session continuation (#28716), OpenRouter reasoning block errors (#14716), Vertex `thought_signature` warnings (#28732), and DigitalOcean's retired MAK endpoint (#28897) each require provider-specific fixes. The abstraction layer between OpenCode and multiple LLM providers is showing strain.
- **Authentication friction with Claude OAuth:** Users must re-authenticate after every usage limit reset (#15562), making paid Claude subscriptions via OpenCode frustrating to use.
- **Package distribution issues:** The Homebrew formula referencing a non-existent version (#28905) is blocking upgrades for an unknown number of users.
- **Session reliability bugs:** Hung sessions from unhandled stream errors (#21979), duplicate agent messages (#20699), and stale compaction summaries (#28067) erode trust in long-running coding sessions.
- **MCP tool schema noise:** Non-standard JSON Schema formats from Firebase and other MCP servers generate repeated warnings (#15161), cluttering the TUI and masking real issues.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-23

## 1. Today's Highlights
Pi shipped **v0.74.2**, a targeted patch release addressing a self-update failure that silently stranded Node 20 users on older versions. Meanwhile, the community is buzzing about local LLM flexibility, Windows path handling woes, and a surge of PRs improving OpenAI-compatible endpoint support—including device code login for Codex and a fix for Google Gemini `store` field rejections.

## 2. Releases

### [v0.74.2](https://github.com/earendil-works/pi/releases/tag/v0.74.2)
- **`pi update` on Node 20** now correctly explains that newer Pi releases require **Node ≥ 22.19.0**, instead of falsely reporting a successful no-op update ([#4876](https://github.com/earendil-works/pi/issues/4876)).
- Self-update package-manager commands now pass `--ignore-scripts` to reduce supply-chain risk during upgrades.

> **Note:** If you're still on Node 20, you must upgrade to Node ≥ 22.19.0 to receive future Pi updates.

---

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|----------------|
| [#3357](https://github.com/earendil-works/pi/issues/3357) | **Official local LLM provider extension** (20 comments, 30 👍) | Top-voted issue. Users want Pi to dynamically fetch model lists from `{baseUrl}/models` to seamlessly work with llama.cpp, Ollama, LM Studio, and other local backends. |
| [#2870](https://github.com/earendil-works/pi/issues/2870) | **Follow XDG Base Directory** (13 comments, 23 👍) | Linux users are frustrated that Pi litters `$HOME` with config/state dirs instead of respecting `$XDG_CONFIG_HOME`. |
| [#4801](https://github.com/earendil-works/pi/issues/4801) | **DeepSeek v4 pro `reasoning_effort` xhigh rejected by OpenRouter** | OpenRouter returns 400 for `xhigh`; the valid set has changed. Affects power users of DeepSeek via OpenRouter. |
| [#4780](https://github.com/earendil-works/pi/issues/4780) | **Windows: path broken when cwd is on a different drive** | Produces malformed paths like `E:\C:\Users\…`. A critical Windows usability bug; fixed in PR [#4873](https://github.com/earendil-works/pi/pull/4873). |
| [#4707](https://github.com/earendil-works/pi/issues/4707) | **Agent permanently hangs on 429 rate limit** (3 👍) | Undici fetch regression causes the TUI to freeze indefinitely on rate-limit errors instead of surfacing them. |
| [#4849](https://github.com/earendil-works/pi/issues/4849) | **Build broken on vanilla Linux + Node 22.22.1** | `main` fails with `ERR_UNKNOWN_FILE_FORMAT` during `generate-models.ts`. Blocks contributors on Ubuntu 26.04. |
| [#4888](https://github.com/earendil-works/pi/issues/4888) | **Proposal: prevent TUI background renders from erasing IME preedit** | CJK/Korean input users experience flickering and lost preedit text. Proposes a configurable quiet window (`PI_TUI_IME_QUIET_MS`). |
| [#4884](https://github.com/earendil-works/pi/issues/4884) | **`functions.read` returns "(see attached image)" for empty text files** | Misleads the agent into treating blank files as image attachments. |
| [#4886](https://github.com/earendil-works/pi/issues/4886) | **Missing `chat_id` crashes Open WebUI** | Pi's OpenAI completions provider omits `chat_id`, causing `NoneType` errors in Open WebUI. |
| [#4891](https://github.com/earendil-works/pi/issues/4891) | **Google OpenAI-compatible endpoint rejects `store` field** | `store: false` causes HTTP 400 from Google. Fixed same-day in PR [#4890](https://github.com/earendil-works/pi/pull/4890). |

---

## 4. Key PR Progress

| PR | Title | Status | Summary |
|----|-------|--------|---------|
| [#4911](https://github.com/earendil-works/pi/pull/4911) | **Add Codex device code login** | Open | Enables a second login flow for Codex via device code, complementing the existing OAuth path. |
| [#4788](https://github.com/earendil-works/pi/pull/4788) | **Refactor device code login for Copilot** | Closed (merged) | Lays groundwork for [#4911](https://github.com/earendil-works/pi/pull/4911) by extracting a reusable device code OAuth path; Copilot migrated to it. |
| [#4756](https://github.com/earendil-works/pi/pull/4756) | **Use async operations in tools** | Open (in progress) | Converts sync `fs` calls to async to prevent Windows Defender–induced TUI freezes; offloads image resizing to a worker thread. |
| [#4890](https://github.com/earendil-works/pi/pull/4890) | **Omit `store` for Google OpenAI-compatible completions** | Closed (merged) | Detects Google endpoints by base URL and strips the `store` field to avoid 400 errors. Includes regression test. |
| [#4873](https://github.com/earendil-works/pi/pull/4873) | **Clean up path handling** | Closed (merged) | Comprehensive path-joining audit fixing cross-drive issues on Windows. Fixes [#4780](https://github.com/earendil-works/pi/issues/4780). |
| [#4871](https://github.com/earendil-works/pi/pull/4871) | **Default Bedrock `maxTokens` to `model.maxTokens`** | Closed (merged) | Prevents Bedrock from silently truncating outputs at ~4096 tokens; critical for adaptive-thinking Claude models. |
| [#4256](https://github.com/earendil-works/pi/pull/4256) | **Fix multi-turn reasoning under `store:false` on Azure** | Closed (merged) | Ensures conversation history is replayed correctly when Azure rejects the `store` flag. |
| [#4797](https://github.com/earendil-works/pi/pull/4797) | **Allow custom Anthropic-compatible providers to opt into adaptive thinking** | Closed (merged) | Unblocks corporate proxies that expose Anthropic models with `thinking.type.adaptive` instead of `enabled`. |
| [#4899](https://github.com/earendil-works/pi/pull/4899) & [#4895](https://github.com/earendil-works/pi/pull/4895) | **Reconcile git package refs for extensions** | Closed (merged) | Detects mismatches between on-disk extension checkouts and settings, auto-reconciling on update. Fixes silent extension update failures. |
| [#4887](https://github.com/earendil-works/pi/pull/4887) | **Fix IME preedit flicker in TUI renders** | Closed (merged) | Implements the `PI_TUI_IME_QUIET_MS` quiet window proposed in [#4888](https://github.com/earendil-works/pi/issues/4888). Default 250ms debounce. |

---

## 5. Feature Request Trends

1. **Local / self-hosted LLM first-class support** — Dynamic model list fetching, OpenAI-compatibility hardening, and easier local provider configuration dominate the top-voted issues.
2. **Extension & update reliability** — Multiple issues and PRs address `pi update` silently failing, git-pinned extensions not checking out new refs, and peer dependency conflicts during managed installs.
3. **Provider compatibility parity** — Rapid community patches for Google Gemini, OpenRouter (DeepSeek), Azure, and corporate Anthropic proxies reveal strong demand for long-tail OpenAI-compatible endpoint support.
4. **Developer ergonomics** — Requests for `--session-id` CLI flags, XDG compliance, JSONC in `models.json`, and `promptLogFormat` settings show a maturing power-user base.
5. **IME / accessibility improvements** — CJK and Korean users are advocating for TUI render management to avoid preedit text loss.

---

## 6. Developer Pain Points

- **Node version floor jump (≥ 22.19)** caught many Node 20 users off guard with silent no-op updates; the v0.74.2 patch mitigates confusion but users still must upgrade manually.
- **Windows path handling** remains fragile: cross-drive working directories, Defender-induced TUI locks, and the need for portable git bash downloads ([#4651](https://github.com/earendil-works/pi/pull/4651), ~350 MB) signal that Windows is a second-class citizen being actively improved.
- **Extension update reliability** is a recurring theme: `pi update --extensions` reports success without actually checking out new git refs or resolving peer dependency conflicts.
- **Build instability on `main`** ([#4849](https://github.com/earendil-works/pi/issues/4849)) frustrates external contributors—`generate-models.ts` fails on current Node LTS with an ESM format error.
- **Provider-specific field rejections** (Google's `store`, OpenRouter's `reasoning_effort`, Azure's multi-turn history) create a whack-a-mole experience for users mixing providers behind OpenAI-compatible proxies.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-23

## 1. Today's Highlights
Qwen Code officially tagged the **v0.16.0** release, but the nightly publish workflow hit a snag, causing two consecutive release pipeline failures. The community remains highly active around the `qwen serve` daemon mode roadmap, with detailed architectural discussions advancing toward production readiness. Meanwhile, significant contributor focus is being directed toward observability (telemetry phases 3 and 4b) and fixing critical memory leaks/OOM crashes affecting long-running CLI sessions.

## 2. Releases
- **[v0.16.0-nightly.20260522.48b0a8bfc](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.0-nightly.20260522.48b0a8bfc)**: Prepared by @yiliang114 via PR [#4404](https://github.com/QwenLM/qwen-code/pull/4404). It includes a core fix for the `tool_use↔tool_result` invariant across all failure modes. *Note: The automated GitHub Actions release workflow failed for this version.*

## 3. Hot Issues
1. **[OOM-Crash and Memory Leaks (#4276, #4399, #4435)](https://github.com/QwenLM/qwen-code/issues/4276)**: Multiple users reported V8 Fatal OOM errors and garbage collection spikes during long interactive sessions, indicating a critical need for better memory management.
2. **[UI Bug Token Multiplier & Freeze (#4420, #4442)](https://github.com/QwenLM/qwen-code/issues/4420)**: A severe v0.16.0 UI rendering bug on Windows is causing token usage to miscalculate (token doubling) and the CLI to completely freeze during bulk file edits. 
3. **[Mode B Daemon Roadmap (#4175)](https://github.com/QwenLM/qwen-code/issues/4175)**: A highly active (31 comments) tracking issue defining the feature-priority roadmap for making `qwen serve` (daemon mode) production-ready.
4. **[Credential Security in Extensions (#4425)](https://github.com/QwenLM/qwen-code/issues/4425)**: A P0 security bug where user-provided credentials embedded in extension URLs (e.g., `https://user:token@...`) might leak into diagnostics.
5. **[MaxListenersExceededWarning (#4423)](https://github.com/QwenLM/qwen-code/issues/4423)**: Users are experiencing memory leaks tied to `AbortSignal` listeners exceeding Node.js limits (1500+) during prolonged usage.
6. **[DashScope-intl `fetch` Incompatibility (#4035)](https://github.com/QwenLM/qwen-code/issues/4035)**: A 3-thumbs-up bug where standard API keys fail against the international DashScope endpoint due to an `undici` dispatcher issue. 
7. **[Auto-Skill Overwrite Bug (#4437)](https://github.com/QwenLM/qwen-code/issues/4437)**: The auto-summarize feature silently overwrites existing user skills if a naming collision occurs, lacking warning or collision detection.
8. **[Local Diagnostics Framework Proposal (#4421)](https://github.com/QwenLM/qwen-code/issues/4421)**: Proposed by @yiliang114, this suggests a local-first, ring-buffer approach to capture API/SSE errors retroactively without requiring users to pre-enable debug mode.
9. **[CI Test Flakiness (#4429)](https://github.com/QwenLM/qwen-code/issues/4429)**: CLI UI tests are intermittently failing across macOS, Windows, and Ubuntu runners, specifically targeting render-spies and key-sequence handling.
10. **[Release Workflow Failures (#4443, #4418)](https://github.com/QwenLM/qwen-code/issues/4443)**: Automated GitHub actions bots reported consecutive failures in publishing the v0.16.0 nightly assets.

## 4. Key PR Progress
1. **[fix(core): preserve uid/gid in atomicWriteFile (#4431)](https://github.com/QwenLM/qwen-code/pull/4431)**: Fixes a POSIX `rename` issue where atomic file writes inadvertently stripped original file ownership, breaking Docker and shared-workspace setups.
2. **[fix(core): stop AbortSignal listener leak (#4366)](https://github.com/QwenLM/qwen-code/pull/4366)**: Directly addresses the `MaxListenersExceededWarning` by refactoring nested `AbortControllers` in the agent runtime.
3. **[feat(telemetry): Phase 3 — subagent spans (#4410)](https://github.com/QwenLM/qwen-code/pull/4410)**: Introduces isolated spans for subagents, preventing LLM/tool traces from interleaving with concurrent siblings.
4. **[feat(telemetry): Phase 4b — retry visibility (#4432)](https://github.com/QwenLM/qwen-code/pull/4432)**: Adds per-attempt HTTP-status retry telemetry, making previously invisible `retryWithBackoff` paths observable.
5. **[feat(core): atomic write rollout (#4333)](https://github.com/QwenLM/qwen-code/pull/4333)**: Phase 2 of data integrity work, replacing bare `fs.writeFile` calls with atomic helpers for credentials, memory, and JSONL session durability.
6. **[fix(release): TDZ error constants (#4398)](https://github.com/QwenLM/qwen-code/pull/4398)**: Resolves the publishing failure where `MAX_UPLOAD_ATTEMPTS` was accessed before initialization due to temporal dead zone (TDZ) issues.
7. **[feat(review): deterministic worktree rules for weak models (#4438)](https://github.com/QwenLM/qwen-code/pull/4438)**: Moves critical PR review rules from `SKILL.md` into hard preconditions, ensuring weaker LLMs follow `/review` compliance.
8. **[feat(cli): background housekeeping for stale file-history (#4414)](https://github.com/QwenLM/qwen-code/pull/4414)**: Implements a 30-day background sweep to clean up `~/.qwen/file-history/` directories, preventing unbounded disk usage.
9. **[feat(cli): prevent system sleep (#4434)](https://github.com/QwenLM/qwen-code/pull/4434)**: Adds a runtime sleep inhibitor to keep the OS awake while Qwen Code is actively processing tasks.
10. **[feat(ci): preflight-triage AI review (#4359)](https://github.com/QwenLM/qwen-code/pull/4359)**: Introduces automated PR compliance gates and tiered AI reviews (`ULTRA_LIGHT` to `DEEP`) to assist maintainers.

## 5. Feature Request Trends
- **Advanced Daemon & Serve Mode**: Strong momentum towards finalizing the `qwen serve` Mode B architecture, specifically focusing on workspace multiplexing, auth defenses, and non-interactive session management.
- **Local-First Diagnostics**: A growing demand for "local-first" observability tools, allowing users to capture retroactive ring-buffer logs for API/SSE anomalies without leaking sensitive data.
- **Terminal UI/UX Enhancements**: Consistent requests to improve terminal rendering, specifically preventing UI freezes during heavy operations and properly supporting multi-line input (e.g., Shift+Enter across various terminals).
- **Strict Telemetry & Tracing**: High interest in granular LLM request tracing (TTFT, retry visibility, W3C traceparent headers) to debug performance bottlenecks accurately.

## 6. Developer Pain Points
- **Memory Management in Long Sessions**: The most prominent frustration is the CLI crashing with OOM errors or hitting V8 listener limits during extended interactions. 
- **Release and Installation Stability**: The broken nightly release pipeline and installation script bugs (e.g., module not found errors) are causing friction for users trying to upgrade to v0.16.0.
- **Windows Compatibility**: Windows users are specifically experiencing degraded UI rendering and encoding bugs (e.g., broken Chinese character display in file searches).
- **Provider Authentication Friction**: Users are struggling with configuring and deleting different API provider keys (like Alibaba Token Plans) and facing fetch errors on international endpoints.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-23

## 1. Today's Highlights
The DeepSeek TUI community is currently focused on hardening terminal handling and expanding the permissions architecture. A significant cluster of bugs related to terminal control sequence pollution and escape code injection in the composer input field has been flagged by multiple users, highlighting a critical pain point in agent streaming workflows. On the feature front, the merged typed permission rules system (`execpolicy`) is gaining traction with several active PRs, while users continue to request deeper UI customizability, such as configurable statuslines and enhanced tool lifecycle hooks.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues

1. **[bug] docker 拉取直接跑乱码 ([#1615](https://github.com/Hmbown/DeepSeek-TUI/issues/1615))**
   **Why it matters:** This is a highly active issue (182 comments) where Docker users experience system-freezing garbage output, sometimes requiring forced server restarts. It underscores severe environmental/setup fragility for containerized deployments.

2. **[bug] Intermittent: garbage strings appear in composer during agent runs ([#1915](https://github.com/Hmbown/DeepSeek-TUI/issues/1915))**
   **Why it matters:** Terminal control sequences (e.g., `[<35;44;18M`) are leaking into the user input field during dense streaming outputs. This directly degrades the core user experience when utilizing the AI agent.

3. **[bug] Unexpected draft mode activation and terminal escape codes injected into input area ([#1418](https://github.com/Hmbown/DeepSeek-TUI/issues/1418))**
   **Why it matters:** Similar to #1915, tool executions are triggering unexpected draft modes and injecting escape sequences. This indicates a systemic vulnerability in how the TUI handles complex standard output while waiting for user input.

4. **[documentation] TUI: terminal-native copy includes visual line breaks from wrapped output ([#1853](https://github.com/Hmbown/DeepSeek-TUI/issues/1853))**
   **Why it matters:** Opened by the repo owner (`Hmbown`), this highlights a friction point where copying code or text natively from the terminal carries over TUI-specific line wrapping, breaking formatting when pasted into editors.

5. **[enhancement] Proposal: universal PreToolUse/PostToolUse hook layer ([#1917](https://github.com/Hmbown/DeepSeek-TUI/issues/1917))**
   **Why it matters:** A strategic architectural proposal to introduce a lifecycle hook layer for Cancel, Pause, and Resume across all action types. This would standardize tool execution control and significantly improve complex agentic workflows.

6. **customizable-statusline ([#1916](https://github.com/Hmbown/DeepSeek-TUI/issues/1916))**
   **Why it matters:** Users migrating from tools like Claude Code are experiencing "information loss" due to DeepSeek TUI's hardcoded status bar. The community is asking for a plugin-like, configurable `[statusline]` section for multi-widget support.

7. **[bug] 使用 npm 一直升级不到最新版 ([#1914](https://github.com/Hmbown/DeepSeek-TUI/issues/1914))**
   **Why it matters:** Reports that npm registry mirrors are failing to sync the latest versions, preventing users from updating smoothly and forcing them to encounter already-fixed bugs.

8. **feat: image URL attachment support (PR #1918)** *(See PR section)*

9. **fix: resolve false positive Trojan/Linux.Agent.bp (PR #1633)** *(See PR section)*

10. **Add Pro Plan model routing (PR #1865)** *(See PR section)*

## 4. Key PR Progress

1. **feat: image URL attachment support ([#1918](https://github.com/Hmbown/DeepSeek-TUI/pull/1918))**
   Introduces `/attach-url` to download images via URL with SSRF protection, Content-Type validation, and SHA-256 caching, piping them directly into the existing vision model pipeline. *(Status: Closed)*

2. **feat(execpolicy): add typed permission rules and config schema ([#1189](https://github.com/Hmbown/DeepSeek-TUI/pull/1189))**
   The foundational PR for the new permissions system. It implements typed allow/deny/ask rules scoped by tool name, command prefix, and workspace-relative path patterns. *(Status: Open)*

3. **feat(tui): route shell and file tool approvals through typed execpolicy rules ([#1413](https://github.com/Hmbown/DeepSeek-TUI/pull/1413))**
   Builds on PR #1189 by wiring the `ExecPolicyEngine` into the live tool execution flow, intercepting shell and file tools before falling back to manual user approval. *(Status: Open)*

4. **feat(tui): persist permission rules from approval prompts ([#1509](https://github.com/Hmbown/DeepSeek-TUI/pull/1509))**
   Completes the permissions UX by allowing users to save scoped permission rules directly from the tool approval prompt with a preview of the rule to be written to config. *(Status: Open)*

5. **fix: resolve false positive Trojan/Linux.Agent.bp and improve CNB pip… ([#1633](https://github.com/Hmbown/DeepSeek-TUI/pull/1633))**
   Resolves a major adoption blocker where antivirus software (Huorong) flagged the bundled `libsqlite3-sys` dependency as a Trojan. *(Status: Closed)*

6. **fix(tui): structure approval details and shell previews ([#1765](https://github.com/Hmbown/DeepSeek-TUI/pull/1765))**
   Enhances the UI by rendering tool approval details with structured fields instead of raw JSON, and improves the display of complex shell commands like `printf` file writes. *(Status: Open)*

7. **Add Pro Plan model routing for plan-first changes ([#1865](https://github.com/Hmbown/DeepSeek-TUI/pull/1865))**
   Introduces a "Pro Plan" mode that uses `deepseek-v4-pro` for read-only planning/review and routes execution to `deepseek-v4-flash`. *(Status: Open)*

8. **fix(skills): parse YAML block scalars in SKILL.md frontmatter ([#1908](https://github.com/Hmbown/DeepSeek-TUI/pull/1908))**
   Fixes a parser bug where multi-line descriptions using YAML block scalars (`>` or `|`) in `SKILL.md` were silently ignored or parsed incorrectly. *(Status: Open)*

## 5. Feature Request Trends

- **Advanced Lifecycle & Agent Control:** Users want granular control over background agent tasks. The proposed `PreToolUse/PostToolUse` hooks with Cancel, Pause, and Resume capabilities are highly anticipated to manage long-running AI workflows.
- **TUI Customization & Modularity:** Moving away from hardcoded UI components. Developers are requesting a modular, widget-based approach, specifically targeting the ratatui-based statusline (similar to `ccstatusline` plugins).
- **Vision Integration:** Extending multimodal capabilities directly within the terminal environment, specifically by attaching images via URLs with robust security (SSRF) measures.
- **Granular Permission & Policy Management:** There is a strong architectural push towards enterprise-ready permission systems. The community is actively developing a stacked allow/deny/ask rule system scoped to specific tools and paths to minimize manual approval clicking.

## 6. Developer Pain Points

- **Terminal Rendering Instability:** The most prominent frustration is terminal control sequence pollution. Mouse tracking events and terminal escape codes are frequently leaking into the composer/draft input fields during streaming, resulting in a frustrating typing experience and broken inputs.
- **Clipboard & Formatting Friction:** Terminal-native copying from the TUI captures structural line breaks, requiring developers to manually clean up wrapped text and code snippets before use.
- **Distribution & Upgrades:** Registry synchronization issues (particularly with npm mirrors) are preventing developers from fetching the latest versions smoothly, leaving them vulnerable to legacy bugs. 
- **Security False Positives:** The Rust `rusqlite` bundled dependency continues to trigger severe antivirus heuristic false positives, creating unnecessary friction and alarm for local development environments.

</details>