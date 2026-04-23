# AI CLI Tools Community Digest 2026-04-04

> Generated: 2026-04-03 22:04 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Ecosystem Report — 2026-04-04

## 1. Ecosystem Overview

The AI CLI ecosystem is rapidly maturing beyond simple command-line chatbots into sophisticated agentic development environments. A clear architectural divergence is emerging between TypeScript-based tools (Claude Code, OpenAI Codex, OpenCode) that prioritize performance and extensibility, and Python-based alternatives (Kimi CLI) that are now actively debating major rewrites to address TUI limitations. Model Context Protocol (MCP) integration has become a standard expectation, though implementations across all tools remain fragile with frequent regressions in tool discovery and approval flows.

## 2. Activity Comparison

| Tool | Issues Discussed | PRs Updated | Release Status | Activity Level |
|------|-----------------|-------------|----------------|----------------|
| **Claude Code** | 12 | 11 | v2.1.91 (new) | High |
| **OpenAI Codex** | 11 | 11 | 3 alpha releases (v0.119.0) | Very High |
| **GitHub Copilot CLI** | 10 | 0 | v1.0.17 (yesterday) | Medium |
| **Kimi Code CLI** | 10 | 10 | None | High |
| **OpenCode** | 10 | 11 | None | High |
| **Qwen Code** | 10 | 10 | v0.14.0 (new) | High |
| **Gemini CLI** | 0 | 0 | None | Dormant |

## 3. Shared Feature Directions

| Feature Direction | Tools Involved | Specific Needs |
|-------------------|----------------|----------------|
| **Context Compaction Transparency** | Claude Code, OpenAI Codex, Kimi CLI | Users across tools demand visibility into compacted history, manual `/compact` control, and memory persistence post-compaction. Claude Code users report 50+ compactions with no UI access to prior context. |
| **MCP Reliability** | Claude Code, OpenAI Codex, Copilot CLI, Qwen Code | Universal pain point: tool discovery failures (hyphenated names), approval prompt regressions, exec mode cancellations, and schema validation issues with `anyOf`/`oneOf` types. |
| **Granular Permission Control** | Copilot CLI, Qwen Code, Kimi CLI | Strong demand to replace blunt `--allow-all` flags with persistent, per-command permissions. Qwen users report "Always Allow" failing for commands with environment variable prefixes. |
| **Multi-Agent/Subagent Orchestration** | OpenAI Codex, Claude Code, OpenCode | Per-subagent model configuration, reasoning effort controls, and lifecycle management (watchdog runtimes). Codex billing issues reported where subagent usage is misattributed to orchestrator. |
| **Model Diversity & Selection** | Copilot CLI, Qwen Code, OpenCode | Requests for Gemini model restoration, Qwen 3.6 integration, and options to restrict to open-weight models only. |
| **Cross-Platform Stability (Windows)** | Claude Code, Kimi CLI, OpenCode | WSL output formatting bugs, PowerShell installation failures, SSL certificate errors, and Windows BSOD from unbounded parallel file operations. |
| **Tool Calling Reliability** | OpenCode, Qwen Code | Models generating malformed JSON for tool calls (Kimi k2.5, Qwen 3.6), whitespace sensitivity issues with Gemini's edit tool, and infinite tool loops. |

## 4. Differentiation Analysis

| Tool | Technical Approach | Target User | Key Differentiator |
|------|-------------------|-------------|-------------------|
| **Claude Code** | TypeScript, MCP-first, enterprise hooks | Power users, enterprise teams | Most advanced hook/permission system, community-led open source extraction effort, 500K character MCP result persistence |
| **OpenAI Codex** | Rust CLI rewrite in progress, multi-provider | Professional developers | Fastest iteration (3 alphas/day), agent orchestration focus, deprecating proxy workarounds for cleaner config |
| **GitHub Copilot CLI** | Native GitHub integration, OAuth-centric | GitHub ecosystem users | Built-in skills system, self-signed cert OAuth fallback, tight VS Code integration but rate limit friction |
| **Kimi CLI** | Python (debating TypeScript rewrite) | Chinese market, multi-model users | Architectural inflection point, embedded web runtime, `/btw` side-question pattern for context preservation |
| **OpenCode** | Provider-agnostic, AI SDK v6 | Multi-model power users | Supports 10+ providers, Docker sandbox templates, memory debugging megathread indicates scale challenges |
| **Qwen Code** | Alibaba Cloud integration | Qwen model users | Zero-cost "microcompact" compression, Jupyter notebook support, coding plan authentication for cloud billing |

## 5. Community Momentum & Maturity

| Category | Tools | Evidence |
|----------|-------|----------|
| **Rapidly Iterating** | OpenAI Codex, Claude Code | 3 alpha releases in one day (Codex); 11 PRs merged including major features (Claude Code) |
| **Active but Stability-Focused** | Qwen Code, Kimi CLI, OpenCode | New releases addressing regressions; active PR activity but battling model reliability issues |
| **Stabilizing** | GitHub Copilot CLI | No PR updates today; focus on OAuth and rate limit mitigation |
| **Dormant** | Gemini CLI | Zero activity for 24+ hours |

**Maturity Indicators:**
- **Claude Code**: Highest issue engagement (60 👍 on compaction transparency), sophisticated community PRs (MEP protocol, Windows BSOD fixes)
- **OpenAI Codex**: 418 comments on token burn issue indicates scale of enterprise adoption
- **Kimi CLI**: Architectural debate (PR #1707) signals growing pains but engaged community
- **OpenCode**: Memory megathread with maintainer-directed debugging shows mature issue management

## 6. Trend Signals

### Critical Industry Trends

1. **Context Compaction is the #1 UX Problem**
   - Evidence: Claude Code (#27242 - 60 👍), Codex (#11325 - 117 👍), Kimi (#1691)
   - Implication: Long-running agent sessions require memory persistence and auditability. Solutions like "microcompact" (Qwen) and "incremental compaction" (Kimi) are emerging as competitive advantages.

2. **MCP is Standardized but Fragile**
   - Evidence: Every tool except Gemini CLI reported MCP issues this cycle
   - Implication: MCP is the clear winner for tool integration, but schema validation, hyphenated naming, and approval flows need ecosystem-wide coordination.

3. **Multi-Agent Orchestration is the Next Frontier**
   - Evidence: Codex watchdog runtime, Claude Code agent interrupts, OpenCode subagent billing
   - Implication: Tools are evolving from single-threaded assistants to orchestrator frameworks. Billing attribution and inter-agent messaging are unsolved problems.

4. **TypeScript/Rust Architectures are Winning**
   - Evidence: Codex Rust rewrite, Kimi TypeScript debate, Claude Code TypeScript extraction
   - Implication: Python-based CLI tools face TUI performance limits. Teams should consider TypeScript/React Ink or Rust for new projects.

5. **Windows is a Second-Class Platform**
   - Evidence: BSOD from parallel operations (Claude), PowerShell installation failures (Kimi), WSL formatting bugs (OpenCode)
   - Implication: Enterprise adoption requires dedicated Windows QA; Unix-first development creates accessibility barriers.

6. **Token Cost Transparency is a Business Criticality**
   - Evidence: Codex #14593 (418 comments), OpenCode cost calculation fix, Copilot rate limit frustration
   - Implication: Cost predictability is essential for enterprise adoption. Hidden token burn and unclear subagent billing are adoption blockers.

---

*Report generated from 6 AI CLI tool community digests dated 2026-04-04.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Report
**Reporting Period:** 2026-04-04

Based on the data snapshot provided for the `anthropics/skills` repository, this report outlines the current state of community activity.

## 1. Top Skills Ranking
**Status:** *No activity recorded.*

There are currently **0 Pull Requests** with recorded comments in the provided dataset. Consequently, no Skills can be ranked by community discussion or attention at this time.

*   *No active PRs to display.*

## 2. Community Demand Trends
**Status:** *Insufficient Data.*

The dataset indicates **0 Issues** with recorded comments. Without active issue discussions, it is not possible to extrapolate community demand trends or anticipated directions for new Skills (e.g., workflow automation or code review) based on current repository data.

## 3. High-Potential Pending Skills
**Status:** *None identified.*

There are no open, active-comment PRs currently pending merge in the provided data snapshot.

## 4. Skills Ecosystem Insight
The repository currently exhibits a **dormant or initialization state** (0 comments on 0 items), suggesting the ecosystem is either newly established, in a cleanup phase, or awaiting an initial injection of community contributions.

---
*Note: This report is generated strictly based on the "0 total, showing top 0" metrics provided in the context data.*

---

# Claude Code Community Digest — 2026-04-04

## Today's Highlights

Version **v2.1.91** introduces two significant enhancements: MCP tool results can now persist up to 500K characters via `_meta["anthropic/maxResultSizeChars"]` annotations, enabling large database schemas to pass through without truncation. Additionally, a new `disableSkillShellExecution` setting provides finer control over skill execution security. Community discussions remain focused on context compaction transparency, with persistent memory and timestamp visibility dominating the feature request landscape.

---

## Releases

### v2.1.91
- **MCP tool result persistence override**: Added support for `_meta["anthropic/maxResultSizeChars"]` annotation, allowing tool results up to 500K characters—critical for large artifacts like database schemas that previously faced truncation
- **Skill shell execution control**: New `disableSkillShellExecution` setting to disable inline shell execution in skills

---

## Hot Issues

| # | Title | Why It Matters |
|---|-------|----------------|
| [#27242](https://github.com/anthropics/claude-code/issues/27242) | **No mechanism to review previous context after compaction** | 60 👍 · Data is preserved in `transcript.jsonl` but the TUI offers no access path. Affects post-compaction review, plan-mode clears, and branch navigation—core workflow continuity issue |
| [#34556](https://github.com/anthropics/claude-code/issues/34556) | **Persistent memory across context compactions** | After 59 compactions in 26 days, user built a custom memory persistence system. Highlights the lack of native long-term memory in extended sessions |
| [#30726](https://github.com/anthropics/claude-code/issues/30726) | **effortLevel "max" silently downgraded via UI** | 26 👍 · Settings configured to `max` effort are being silently downgraded when users interact with the effort selection UI—a surprising behavior regression |
| [#21051](https://github.com/anthropics/claude-code/issues/21051) | **Display message timestamps in CLI** | 15 👍 · Long-running monitoring/debugging sessions need temporal context. Currently no way to see when messages occurred |
| [#2441](https://github.com/anthropics/claude-code/issues/2441) | **Add timestamp to each message** | 28 👍 · Long-standing request for timestamps on both user and assistant messages to track session pacing |
| [#42684](https://github.com/anthropics/claude-code/issues/42684) | **Misplaced terminal cursor in dialog boxes with tabs** | 12 👍 · Accessibility bug affecting tab navigation in dialogs—closed after resolution |
| [#30400](https://github.com/anthropics/claude-code/issues/30400) | **Context limit reached without auto-compact** | Users hitting context limits without automatic compaction triggering, forcing manual intervention |
| [#36497](https://github.com/anthropics/claude-code/issues/36497) | **Skills directory prompts for permission despite documented exemption** | Regression in v2.1.79—`.claude/skills/` edits trigger permission prompts despite documentation stating it's exempt |
| [#42320](https://github.com/anthropics/claude-code/issues/42320) | **Homebrew stuck on version 2.1.81** | Package distribution lag preventing users from receiving latest updates via brew |
| [#39530](https://github.com/anthropics/claude-code/issues/39530) | **ralph-loop Stop hook blocks parallel sessions** | Session isolation guard ineffective, causing unrelated parallel sessions to be blocked |

---

## Key PR Progress

| # | Title | Description |
|---|-------|-------------|
| [#43124](https://github.com/anthropics/claude-code/pull/43124) | **Agent message interrupts** | Enables subagents to receive `SendMessage` corrections mid-tool-batch instead of waiting for all queued tool calls to complete—addresses critical coordination latency |
| [#41518](https://github.com/anthropics/claude-code/pull/41518) | **Fully open source Claude Code** | Extracted 1,906 TypeScript source files from npm package sourcemap, added Bun bundler configuration—community-led open source initiative |
| [#35710](https://github.com/anthropics/claude-code/pull/35710) | **Tool-mutex plugin for Windows BSOD fix** | Prevents `Wof.sys` blue screen caused by unlimited parallel `fs` operations triggering concurrent `NtQueryDirectoryFileEx` syscalls |
| [#42996](https://github.com/anthropics/claude-code/pull/42996) | **MEP: Meat Puppet Elimination Protocol** | Async state relay pattern for multi-machine session continuity—zero-infrastructure solution using three files |
| [#43206](https://github.com/anthropics/claude-code/pull/43206) | **Resume CWD wrapper** | Shell wrapper fixing session resume failures caused by working directory mismatches |
| [#42944](https://github.com/anthropics/claude-code/pull/42944) | **hookify phase-qualified events fix** | Fixes `pre-file`, `post-file`, `pre-bash`, `post-bash` events being silently dropped; adds `CLAUDE_PROJECT_DIR` support |
| [#42886](https://github.com/anthropics/claude-code/pull/42886) | **hookify: test and doctor commands** | Adds `/hookify:doctor` for rule validation and `/hookify:test` for replaying rules against sample input |
| [#42807](https://github.com/anthropics/claude-code/pull/42807) | **hookify stop/prompt pattern fix** | Maps simple `pattern:` rules for `stop` and `prompt` events to correct payload fields (`reason`, `user_prompt`) |
| [#43166](https://github.com/anthropics/claude-code/pull/43166) | **/list-slash-commands discovery** | Adds explicit command to list detectable slash commands in active workspace |
| [#43180](https://github.com/anthropics/claude-code/pull/43180) | **Plugin-dev docs link fixes** | Corrects broken `CONTRIBUTING.md` and `LICENSE` references in documentation |

---

## Feature Request Trends

1. **Temporal Awareness** — Over 6 issues request timestamps in some form: visible in TUI (#21051, #30745, #2441, #41072), accessible to the model for reasoning (#34186, #41389), or for session continuity (#32590)

2. **Persistent Memory Across Compactions** — Strong demand for memory that survives context compaction cycles (#34556, #32590). Users are building custom solutions after 50+ compaction events

3. **Context History Accessibility** — Data preserved in `transcript.jsonl` but no UI path to access it (#27242). Users want to review compacted/cleared conversation history

4. **Session State Portability** — Requests for better cross-machine session continuity and resume robustness (#42996, #43206)

---

## Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Context compaction is a black box** | #27242 (60 👍), #30400, #27560 — Users lose access to conversation history; auto-compact sometimes fails to trigger |
| **No temporal context in sessions** | 6+ timestamp-related issues — Neither users nor the model can reason about when events occurred |
| **Parallel execution causes system instability** | #35710 (Windows BSOD), #39530 (parallel session interference) — Unbounded concurrency leads to crashes |
| **Hook system fragility** | Multiple PRs fixing hookify (#42944, #42807, #36333) — Events silently dropped, imports broken, phase-qualified events failing |
| **MCP configuration discovery** | #42860 — AI assistant looks in wrong locations for MCP server definitions when debugging |
| **Package distribution lag** | #42320 — Homebrew releases falling behind npm distribution |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-04-04

---

## 1. Today's Highlights

The Codex team pushes forward on the **Rust CLI roadmap** with three new alpha releases (v0.119.0), while simultaneously merging several critical fixes for TUI behavior and forked agent history. A major deprecation cycle completes as **`OPENAI_BASE_URL` environment variable support is removed** in favor of explicit configuration. Community focus remains heavily split between **MCP (Model Context Protocol) reliability issues**—specifically around tool discovery and approval flows—and ongoing friction with **rate limiting and token consumption** in the IDE extensions.

---

## 2. Releases

### rust-v0.119.0-alpha.8
- **Latest alpha release** in the 0.119.0 line, continuing rapid iteration on the Rust-based CLI.
- [View Release](https://github.com/openai/codex/releases/tag/rust-v0.119.0-alpha.8)

### rust-v0.119.0-alpha.7
- Incremental alpha build.
- [View Release](https://github.com/openai/codex/releases/tag/rust-v0.119.0-alpha.7)

### rust-v0.119.0-alpha.6
- Earlier alpha in the same release train.
- [View Release](https://github.com/openai/codex/releases/tag/rust-v0.119.0-alpha.6)

---

## 3. Hot Issues

| Issue | Why It Matters |
|-------|----------------|
| **[#14593 — Burning tokens very fast](https://github.com/openai/codex/issues/14593)** | **418 comments.** Critical bug where the VS Code extension rapidly consumes tokens, hitting rate limits. Business users report significant cost impact; highest-engagement issue this cycle. |
| **[#11701 — Subagent configuration and orchestration](https://github.com/openai/codex/issues/11701)** | **69 comments.** Closed after implementation. Request for per-subagent model/reasoning_effort config in `~/.codex/config.toml`. Reflects growing demand for multi-agent orchestration control. |
| **[#2558 — Codex client output truncated in Zellij](https://github.com/openai/codex/issues/2558)** | **58 comments.** Long-standing TUI bug with terminal multiplexer compatibility (Zellij). Affects power users running Codex in persistent sessions. |
| **[#11325 — Manual /compact command in Codex app](https://github.com/openai/codex/issues/11325)** | **42 comments, 117 👍.** Feature parity request: CLI has `/compact`, but the desktop app lacks it. High user demand for manual context compaction control. |
| **[#8648 — Codex replies to earlier messages instead of latest](https://github.com/openai/codex/issues/8648)** | **31 comments.** Context/agent bug where multi-turn conversations cause Codex to respond to stale messages. Undermines reliability in complex sessions. |
| **[#14936 — bwrap: Approval prompt shown for almost every command](https://github.com/openai/codex/issues/14936)** | **29 comments.** Regression in sandbox behavior on Linux. Bubblewrap approval prompts spam users, breaking `--full-auto` workflows. |
| **[#16231 — High CPU usage on macOS after VS Code extension update](https://github.com/openai/codex/issues/16231)** | **Regression in v26.325.31654** causing thermal throttling on Apple Silicon (M5 Pro). Users reverting to earlier builds. |
| **[#16685 — MCP tool calls always cancelled in exec mode](https://github.com/openai/codex/issues/16685)** | **New regression.** All MCP tool calls fail with "user cancelled" in `codex exec` mode. Blocks non-interactive automation. |
| **[#14927 — /mcp stops showing tools for servers with hyphens](https://github.com/openai/codex/issues/14927)** | **Closed.** Naming regression where MCP server IDs with hyphens broke tool discovery in v0.115.0. |
| **[#16032 — Make v8 dependency optional](https://github.com/openai/codex/issues/16032)** | Build/packaging request: v8 integration limits platform support. Community wants optional v8 for easier cross-compilation. |

---

## 4. Key PR Progress

| PR | Summary |
|----|---------|
| **[#16720 — Remove OPENAI_BASE_URL config fallback](https://github.com/openai/codex/pull/16720)** | **Merged.** Completes deprecation of `OPENAI_BASE_URL` env var in favor of `openai_base_url` config key. Reduces support burden from misconfigured proxies. |
| **[#13678 — Add watchdog runtime and prompts](https://github.com/openai/codex/pull/13678)** | Adds dedicated watchdog runtime for agent thread lifecycle management, including model overrides and control surfaces like `list_agents`/`close_agent`. Foundational for agent orchestration. |
| **[#16055 — Force forked agents to inherit parent model settings](https://github.com/openai/codex/pull/16055)** | Ensures `fork_context = true` ignores child model overrides, preserving context-reuse economics for spawned subagents. |
| **[#16713 — Include slash commands in composer history](https://github.com/openai/codex/pull/16713)** | QoL fix: `/diff`, `/plan`, `/rename`, `/quit` now persist in TUI composer history (Up-arrow recall). |
| **[#16709 — Sanitize forked child history](https://github.com/openai/codex/pull/16709)** | **Merged.** Strips tool/reasoning items from forked child history, keeping only essential messages. Reduces token bloat in forked sessions. |
| **[#16705 — Allow switching cwd within a live session](https://github.com/openai/codex/pull/16705)** | Enables in-session directory changes without restarting Codex. Valuable for worktree-heavy Git workflows. |
| **[#13637 — Preserve fork references across replay](https://github.com/openai/codex/pull/13637)** | Forked threads can now reuse parent history via reference rollouts instead of duplication. Major efficiency improvement. |
| **[#16725 — Preempt queued agent mail after reasoning items](https://github.com/openai/codex/pull/16725)** | Optimizes inter-agent messaging by preempting queued mail after reasoning completion. Improves subagent responsiveness. |
| **[#16460 & #16528 — Fix Windows Bazel Rust test coverage](https://github.com/openai/codex/pull/16460)** | Two related PRs addressing Windows build/test gaps with Bazel and Rust toolchains. Unblocks CI reliability on Windows. |
| **[#12640 — Update models.json](https://github.com/openai/codex/pull/12640)** | Automated model registry update (likely GPT-5.x variants). |

---

## 5. Feature Request Trends

1. **Subagent & Multi-Agent Orchestration**
   - Per-subagent model, provider, and profile selection ([#14039](https://github.com/openai/codex/issues/14039))
   - Configurable `reasoning_effort` per subagent ([#11701](https://github.com/openai/codex/issues/11701))
   - Watchdog-level control surfaces for agent lifecycle

2. **MCP (Model Context Protocol) Improvements**
   - Fine-grained tool approval modes per server ([#16501](https://github.com/openai/codex/issues/16501))
   - Better tool discovery reliability (hyphenated names, enabled-but-not-exposed)
   - Non-interactive mode compatibility for automation

3. **Context Management Control**
   - Manual `/compact` command for desktop app ([#11325](https://github.com/openai/codex/issues/11325))
   - Remote compaction task reliability ([#14860](https://github.com/openai/codex/issues/14860))

4. **Platform & Build Flexibility**
   - Optional v8 dependency for broader platform support ([#16032](https://github.com/openai/codex/issues/16032))
   - Improved Windows sandbox and terminal compatibility

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Rate limits & token burn** | [#14593](https://github.com/openai/codex/issues/14593) (418 comments) — Users hitting subscription limits unexpectedly, especially with VS Code extension |
| **MCP reliability regressions** | Multiple issues (#16685, #14927, #15824, #16702, #16696) — Tool discovery failures, unwanted approval prompts, exec mode cancellations |
| **TUI/Input quirks** | Accented characters on WSL2 (#13638), double keystrokes in Kitty (#8324), cursor jumping on Windows (#16687), Zellij truncation (#2558) |
| **Context/conversation bugs** | Codex replying to old messages (#8648), remote compact failures (#14860) |
| **CPU/thermal issues** | macOS extension regression causing high CPU (#16231) |
| **Windows App UX gaps** | False "GitHub CLI not installed" error (#13689), thread redirection bugs (#14411) |

---

*Digest generated from GitHub activity on 2026-04-04. For real-time updates, watch the [openai/codex repository](https://github.com/openai/codex).*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-04-04

## 1. Today's Highlights
Version **v1.0.17** was released yesterday, introducing built-in skills and critical OAuth improvements. The community is actively discussing stability, with high engagement on issues regarding API rate limits, transient errors, and session handling. There is a strong push from users for more granular control over agent permissions and better model support.

## 2. Releases
### **v1.0.17** (2026-04-03)
- **Built-in Skills:** The CLI now includes built-in skills, starting with a guide for customizing the Copilot cloud agent's environment.
- **MCP OAuth Improvements:** Added support for HTTPS redirect URIs via a self-signed certificate fallback. This improves compatibility with secure OAuth providers like Slack.

## 3. Hot Issues
1.  **[Rate Limits & Transient Errors](https://github.com/github/copilot-cli/issues/2101)** (#2101): Users are frequently hitting rate limits, resulting in `Transient API Error` messages. This is the most discussed issue, with users frustrated by the "try again in 1 minute" lockouts.
2.  **[Alpine Linux Segmentation Fault](https://github.com/github/copilot-cli/issues/107)** (#107): A critical bug where tool calls cause the CLI to crash on Alpine Linux. This remains a significant pain point for containerized environments.
3.  **[Login Regression in v1.0.16](https://github.com/github/copilot-cli/issues/2494)** (#2494): A regression introduced in the previous version where `copilot login` auto-enters the keychain prompt, failing to wait for user input.
4.  **[MCP Registry Policy 404](https://github.com/github/copilot-cli/issues/2479)** (#2479): Individual Copilot Pro users are blocked from using MCP servers due to a 404 error when fetching registry policies.
5.  **[HTTP/2 GOAWAY Race Condition](https://github.com/github/copilot-cli/issues/2421)** (#2421): A deep-dive technical issue suggesting that the underlying HTTP/2 connection pool handles server GOAWAY frames incorrectly, causing cascading failures.
6.  **[Restore Gemini Pro Support](https://github.com/github/copilot-cli/issues/2434)** (#2434): Users are requesting the return of `gemini-3-pro-preview` support, which was dropped in v1.0.14, citing the need for model diversity.
7.  **[Session Corruption on Resume](https://github.com/github/copilot-cli/issues/2209)** (#2209): Long-lived sessions are showing as "corrupted" upon resume despite the underlying event logs being valid JSON.
8.  **[GPT Schema Validation Error](https://github.com/github/copilot-cli/issues/2223)** (#2223): GPT models fail with a 400 error if the MCP server schema lacks explicitly defined `properties`, even though Claude handles this gracefully.
9.  **[PowerShell Tool Failure](https://github.com/github/copilot-cli/issues/2355)** (#2355): The internal PowerShell tool fails to spawn `pwsh.exe` on Windows even when it is correctly in the PATH.
10. **[Missing /copy Functionality](https://github.com/github/copilot-cli/issues/2499)** (#2499): Users report that the `/copy` command is non-functional, and long responses are truncated in the display.

## 4. Key PR Progress
*No Pull Requests were updated in the last 24 hours.*

## 5. Feature Request Trends
- **Granular Permissions:** There is a strong demand for persistent, configurable permissions. Users want to allow specific commands to run without approval (Issue #2484, #2505) rather than relying on the blunt `--allow-all` flag.
- **Model Diversity:** Users are advocating for the re-introduction of Gemini models and fixing compatibility issues with GPT-5 variants to ensure flexibility in model selection.
- **Agent Discovery Scope:** Requests to expand custom agent discovery to the current working directory (cwd) rather than strictly the git root (Issue #2504).

## 6. Developer Pain Points
- **API Instability:** The most significant frustration is the frequency of "Transient API Errors" and rate limiting, which disrupts workflow automation.
- **Memory Management:** Heavy users are encountering "JavaScript heap out of memory" crashes (Issue #1457), indicating performance limits with large context/codebases.
- **UI/UX Regressions:** Recent updates have broken mouse scrolling in terminals like Terminator (Issue #2205) and caused graphical artifacts in command prompts.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-04-04

## 1. Today's Highlights
The community is buzzing with architectural debates and quality-of-life improvements. A ambitious proposal to rewrite the CLI from Python to **Bun + TypeScript + React Ink** ([PR #1707](https://github.com/MoonshotAI/kimi-cli/pull/1707)) has sparked significant discussion regarding the project's future direction. Concurrently, maintainers merged several critical stability fixes, including a solution for "TodoList storms" ([PR #1742](https://github.com/MoonshotAI/kimi-cli/pull/1742)) and a shift to an **embedded runtime** for `kimi web` to improve process management.

## 2. Releases
No new official release tags were published in the last 24 hours.

## 3. Hot Issues
1.  **Architectural Debate: Python vs. TypeScript** ([#1707](https://github.com/MoonshotAI/kimi-cli/pull/1707))
    *   **Context:** While technically a PR, the proposal to rewrite the entire CLI in TypeScript dominates current discussion.
    *   **Significance:** Questions the long-term viability of the current Python codebase for TUI performance and maintainability.
2.  **SetTodoList "Storm" in v1.29.0** ([#1710](https://github.com/MoonshotAI/kimi-cli/issues/1710))
    *   **Context:** Users reported loops of `SetTodoList` calls after upgrading.
    *   **Status:** Identified as a critical bug; addressed by [PR #1742](https://github.com/MoonshotAI/kimi-cli/pull/1742).
3.  **Incremental Session Memory** ([#1691](https://github.com/MoonshotAI/kimi-cli/issues/1691))
    *   **Context:** Proposal for "incremental compaction" to reduce the high cost of `/compact` calls in long sessions.
    *   **Significance:** Aims to solve context window limits without expensive summarization overhead.
4.  **Three-Tier Rules System** ([#1747](https://github.com/MoonshotAI/kimi-cli/issues/1747))
    *   **Context:** Request for Global, User, and Project-level configuration rules.
    *   **Significance:** Aligns Kimi CLI with competitors like Claude Code regarding project-specific coding guidelines.
5.  **Windows SSL Certificate Failure** ([#1746](https://github.com/MoonshotAI/kimi-cli/issues/1746))
    *   **Context:** Windows 11 users facing "EE certificate key too weak" errors during login.
    *   **Impact:** Blocks access for users on stricter security policies or specific network environments.
6.  **WriteFile Tool Instability** ([#1564](https://github.com/MoonshotAI/kimi-cli/issues/1564))
    *   **Context:** Reports of frequent write failures in v1.25.0+.
    *   **Community:** Suggests chunked writing as a workaround; indicates potential race conditions or buffer issues.
7.  **Clipboard Crash on macOS** ([#1750](https://github.com/MoonshotAI/kimi-cli/issues/1750))
    *   **Context:** Unhandled exception when pasting (Ctrl-V) with an empty clipboard.
    *   **Impact:** Basic usability bug causing app crashes.
8.  **Request for Format Validation in WriteFile** ([#1736](https://github.com/MoonshotAI/kimi-cli/issues/1736))
    *   **Context:** Agent occasionally writes malformed JSON/XML.
    *   **Proposal:** Add built-in validation to `WriteFile` to prevent downstream parsing failures.
9.  **ACP Session Initialization Failure in IDEA** ([#1737](https://github.com/MoonshotAI/kimi-cli/issues/1737))
    *   **Context:** JetBrains plugin users facing "list.index(x): x not in list" errors.
    *   **Impact:** Broken integration with popular IDEs.
10. **Windows Installation Script Issue** ([#1513](https://github.com/MoonshotAI/kimi-cli/issues/1513))
    *   **Context:** Installation script crashes silently under default PowerShell policies.
    *   **Impact:** High barrier to entry for new Windows users.

## 4. Key PR Progress
1.  **[OPEN] Refactor: Python to Bun + TypeScript** ([#1707](https://github.com/MoonshotAI/kimi-cli/pull/1707))
    *   A massive community contribution attempting a full stack rewrite using React Ink for better TUI rendering.
2.  **[CLOSED] Fix: Refactor SetTodoList & Prevent Storms** ([#1742](https://github.com/MoonshotAI/kimi-cli/pull/1742))
    *   Fixes the infinite loop bug by persisting state to `SessionState` and adding anti-storm guidance.
3.  **[CLOSED] Feat: Add Embedded Session Runtime** ([#1650](https://github.com/MoonshotAI/kimi-cli/pull/1650))
    *   Changes `kimi web` to run in-process (embedded) by default, reducing process management overhead.
4.  **[OPEN] Feat: Add /btw Side Question Command** ([#1743](https://github.com/MoonshotAI/kimi-cli/pull/1743))
    *   Allows users to ask quick questions without interrupting the main agent's context/history.
5.  **[OPEN] Feat: /copy Command** ([#1741](https://github.com/MoonshotAI/kimi-cli/pull/1741))
    *   Implements a highly requested feature to copy the last assistant response to the clipboard.
6.  **[OPEN] Feat: Claude-Compatible Plugin Support** ([#1715](https://github.com/MoonshotAI/kimi-cli/pull/1715))
    *   Adds a compatibility layer to load local Claude plugins, expanding the tool ecosystem.
7.  **[OPEN] Feat: PermissionRequest Hook** ([#1751](https://github.com/MoonshotAI/kimi-cli/pull/1751))
    *   Enables external approval workflows (e.g., GUI popups) for tool permissions.
8.  **[OPEN] Fix: Filter Unsupported Content Types** ([#1749](https://github.com/MoonshotAI/kimi-cli/pull/1749))
    *   Fixes OpenAI-compatible API errors by filtering out non-supported video/audio types.
9.  **[CLOSED] Feat: ReadFile Tail Mode** ([#1740](https://github.com/MoonshotAI/kimi-cli/pull/1740))
    *   Adds `totalLines` metadata and negative offset support to read the end of large files efficiently.
10. **[OPEN] Add Format Validation to WriteFile** ([#1738](https://github.com/MoonshotAI/kimi-cli/pull/1738))
    *   Implements validation for JSON/XML/Markdown immediately after writing to catch errors early.

## 5. Feature Request Trends
*   **Context Management:** Strong demand for smarter, cheaper context handling (e.g., incremental memory [#1691](https://github.com/MoonshotAI/kimi-cli/issues/1691)) rather than heavy full-session summarization.
*   **Cross-Platform Stability:** High frequency of Windows-specific issues (PowerShell policies, SSL errors) indicates a need for better platform testing.
*   **Structured Output Control:** Users want guarantees on output quality, evidenced by requests for format validation ([#1736](https://github.com/MoonshotAI/kimi-cli/issues/1736)) and tiered rule systems ([#1747](https://github.com/MoonshotAI/kimi-cli/issues/1747)).
*   **Workflow Integration:** Desire for deeper IDE integration (Zed, IDEA) and external approval hooks for automated workflows.

## 6. Developer Pain Points
*   **Tool Reliability:** The `WriteFile` tool remains a sore point, with bugs persisting across versions (v1.25.0 -> v1.28.0), breaking agent autonomy.
*   **Windows Experience:** From installation scripts to SSL certificates, the developer experience on Windows lags behind Unix-based systems.
*   **UI/UX Friction:** Numerous small UI bugs (character spacing, clipboard handling, missing slash completions) accumulate to degrade the daily coding experience.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-04-04

## 1. Today's Highlights
No new releases were published today, but the community remains highly active in troubleshooting the **AI SDK v6 migration** and addressing **memory performance bottlenecks**. A new "Memory Megathread" has been pinned to centralize debugging efforts, indicating a strategic push to resolve stability issues. Additionally, contributors are rapidly iterating on fixes for model context limits and provider compatibility.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues

*   **[#20695 Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)**
    The core team has centralized all memory leak and high RAM usage reports into this single issue. The maintainers explicitly requested that users stop asking LLMs for solutions and instead submit manual heap snapshots to aid debugging. This suggests memory optimization is a top priority for the next release.

*   **[#11112 Stuck at "Preparing write..."](https://github.com/anomalyco/opencode/issues/11112)**
    With 46 comments, this is the most active bug today. Users report the agent entering a failure loop where it repeatedly tries and fails to write files ("Tool execution aborted"), causing the workflow to stall completely.

*   **[#12338 1M Token Context for Opus 4.6](https://github.com/anomalyco/opencode/issues/12338)**
    Users are reporting that despite enabling "zen" mode, Opus 4.6 hits a hard cap around 200k tokens instead of the expected 1M context window. This limits the utility of long-context models for large codebases.

*   **[#20650 Kimi k2.5 Tool Calling Issues](https://github.com/anomalyco/opencode/issues/20650)**
    The Kimi k2.5 model is generating malformed JSON for bash commands, leading to "Invalid input" errors. This highlights ongoing challenges with the "edit" and "bash" tool parsers for non-anthropic models.

*   **[#266 Gemini Edit Tool Failures](https://github.com/anomalyco/opencode/issues/266)**
    A long-standing issue (since June 2025) where Gemini models struggle with the `edit` tool due to whitespace sensitivity. Users are requesting whitespace normalization to align Gemini's behavior with other providers.

*   **[#9132 Official Docker Sandbox Template](https://github.com/anomalyco/opencode/issues/9132)**
    A highly upvoted feature request (34 👍) asking for an official Docker sandbox template. This would standardize isolated development environments, similar to existing templates for Claude.

*   **[#20859 Copilot Subagent Billing Issues](https://github.com/anomalyco/opencode/issues/20859)**
    When using GitHub Copilot as a provider, OpenCode allegedly misreports subagent usage. All premium requests are billed to the orchestrator model (Claude Opus 4.6) rather than the cheaper subagent models configured, causing unexpected cost spikes.

*   **[#16100 VS Code Numpad Keys Ignored](https://github.com/anomalyco/opencode/issues/16100)**
    A usability bug where numpad input is ignored in the latest VS Code (1.110) integrated terminal. This affects developers relying on numpad for navigation or data entry within the TUI.

*   **[#20234 WSL Output Formatting Bug](https://github.com/anomalyco/opencode/issues/20234)**
    OpenCode running under WSL is displaying output broken by newlines (one word per line) during the thinking phase, making the TUI unreadable for Windows/WSL users.

*   **[#20935 SQLite Lock Contention](https://github.com/anomalyco/opencode/issues/20935)**
    A technical proposal suggesting per-session-tree database sharding. This aims to fix performance bottlenecks caused by SQLite lock contention during high-concurrency agent tasks.

## 4. Key PR Progress

*   **[PR #20934 Buffer Stdin on Startup](https://github.com/anomalyco/opencode/pull/20934)**
    Fixes a UX annoyance where keystrokes typed while the TUI is booting were lost. This PR introduces a preload buffer to capture input immediately upon process start.

*   **[PR #20467 Fix Blank Assistant Text (MCP/AI SDK v6)](https://github.com/anomalyco/opencode/pull/20467)**
    Critical fix for a regression introduced in the AI SDK v6 migration where assistant text would appear blank if MCP servers were enabled. This is vital for users relying on MCP integrations.

*   **[PR #4604 Partial File Formatting](https://github.com/anomalyco/opencode/pull/4604)**
    An optimization for the `clang-format` integration. Instead of reformatting an entire file on every edit, it now only formats the changed lines, keeping diffs clean.

*   **[PR #20776 Provider Loader Refactor](https://github.com/anomalyco/opencode/pull/20776)**
    A major refactor preventing custom provider loaders from calling static facades (`Auth.get`, `Config.get`). This improves architecture by injecting dependencies correctly into the provider layer.

*   **[PR #20939 Plugin Skill Path Discovery](https://github.com/anomalyco/opencode/pull/20939)**
    Fixes a bug where plugins registering skill directories via the `config()` hook were ignored. This ensures plugins can correctly extend OpenCode's capabilities.

*   **[PR #16379 X11 Middle-Click Paste](https://github.com/anomalyco/opencode/pull/16379)**
    Adds support for middle-click pasting from X11 primary selection on Linux, a highly requested workflow feature for Linux power users.

*   **[PR #20910 Git Repo Initialization Fix](https://github.com/anomalyco/opencode/pull/20909)**
    Fixes crashes that occurred when running OpenCode in a git repository that has been initialized but has zero commits.

*   **[PR #20808 Accurate Cost Calculation](https://github.com/anomalyco/opencode/pull/20808)**
    Addresses incorrect cost displays by preventing cache pricing from defaulting to $0 when upstream data is missing.

*   **[PR #20931 Buf Protobuf LSP](https://github.com/anomalyco/opencode/pull/20931)**
    Adds support for Buf's Protobuf Language Server Protocol, improving the development experience for Protobuf-heavy projects.

*   **[PR #13854 Markdown Streaming Fix](https://github.com/anomalyco/opencode/pull/13854)**
    Fixes a UI bug where the last row of a table in a markdown block would disappear if the message had finished streaming.

## 5. Feature Request Trends
*   **Docker Isolation:** Strong demand for official templates for `docker sandbox run opencode` to standardize dev environments.
*   **Tool Parser Extensibility:** Growing interest in custom tool parsers (Issue #2917) to better support diverse models (Gemma, Qwen, MiniMax) that handle tool calling differently than Claude.
*   **Context Window Management:** Users are pushing for better handling of massive context windows (1M+ tokens) and clearer UI regarding context limits.

##   6. Developer Pain Points
*   **Tool Call Reliability:** A significant number of issues (e.g., #20650, #266, #1388) cite models failing to generate valid tool JSON or match strings exactly, breaking the agentic loop.
*   **Model & Provider Bugs:** Users integrating via OpenRouter, Copilot, or Ollama face frequent friction with context limits, incorrect cost display, and auth errors.
*   **Input Handling:** Several reports highlighted frustration with input being ignored (numpad keys, startup keystrokes), breaking the expected fluidity of the TUI.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest (2026-04-04)

## 1. Today's Highlights
Version **0.14.0** has been released, focusing on stability with proxy URL handling and extension path fixes. The community is actively discussing the integration of the new **Qwen 3.6** model, while several high-impact PRs are under review that promise significant performance boosts, including intelligent tool parallelism and zero-cost context compression strategies. Additionally, users are reporting critical bugs related to "Initializing..." hangs and model hallucinations in the latest 3.6 updates.

## 2. Releases
- **v0.14.0**
  - **Path Handling:** Fixed `.qwen` path replacement in markdown files during extension installs ([PR #2769](https://github.com/QwenLM/qwen-code/pull/2769)).
  - **Proxy Support:** Normalized proxy URLs to support addresses lacking a protocol prefix (e.g., `http://`) ([PR #2745](https://github.com/QwenLM/qwen-code/pull/2745)).

## 3. Hot Issues
1.  **[Feature] Qwen 3.6 Model Support** ([#2832](https://github.com/QwenLM/qwen-code/issues/2832), [#2806](https://github.com/QwenLM/qwen-code/issues/2806)): Users are eagerly requesting the addition of the Qwen 3.6 model to the coding plan roster, currently limited to 3.5-plus.
2.  **[Bug] Startup Hangs on "Initializing..."** ([#2862](https://github.com/QwenLM/qwen-code/issues/2862)): A critical bug causes the app to freeze indefinitely at startup if `checkpointing` is enabled, requiring a force-quit.
3.  **[Bug] Severe Hallucinations in Qwen3.6-Plus** ([#2863](https://github.com/QwenLM/qwen-code/issues/2863), [#2867](https://github.com/QwenLM/qwen-code/issues/2867)): Reports of the 3.6-Plus model entering infinite tool loops, deleting code erroneously, and exhibiting "lazy reasoning."
4.  **[Bug] "Always Allow" Permissions Fail** ([#2723](https://github.com/QwenLM/qwen-code/issues/2723), [#2846](https://github.com/QwenLM/qwen-code/issues/2846)): Permission settings for shell commands (especially those with environment variable prefixes like `VAR=value cmd`) are not persisting correctly.
5.  **[Bug] MCP Tool Validation with Union Types** ([#2839](https://github.com/QwenLM/qwen-code/issues/2839)): Tools using `anyOf` schemas (e.g., `list[str] | None`) trigger false positive validation errors, blocking valid inputs.
6.  **[Feature] Disable Proprietary Models Option** ([#2859](https://github.com/QwenLM/qwen-code/issues/2859)): A request for a configuration option to restrict the client to open-weight models only, excluding proprietary ones like Qwen 3.6 Plus.
7.  **[Bug] PostToolUse Hook Context Missing** ([#2809](https://github.com/QwenLM/qwen-code/issues/2809)): The `hookSpecificOutput.additionalContext` field is documented but not actually surfacing content to the AI model.
8.  **[Bug] Context Not Resetting in Sidebar** ([#2847](https://github.com/QwenLM/qwen-code/issues/2847)): Creating a new session in the VSCode sidebar fails to reset the conversation context.
9.  **[Bug] Chrome DevTools MCP Issues** ([#2851](https://github.com/QwenLM/qwen-code/issues/2851)): The AI insists on opening a new browser window rather than attaching to an existing one, losing user session data.
10. **[Feature] Takeover of iflow cli** ([#2721](https://github.com/QwenLM/qwen-code/issues/2721)): A user suggestion to take over the discontinued `iflow cli` project, citing superior features compared to the current Qwen Code.

## 4. Key PR Progress
1.  **Intelligent Tool Parallelism** ([#2864](https://github.com/QwenLM/qwen-code/pull/2864)): Major performance optimization allowing read-only tools (Read, Grep, etc.) to execute in parallel rather than sequentially.
2.  **Upstream Backports (Stability)** ([#2866](https://github.com/QwenLM/qwen-code/pull/2866)): Backports 10 high-value fixes including MCP auto-reconnect and compression fixes to improve agent stability.
3.  **Zero-Cost Context Compression** ([#2813](https://github.com/QwenLM/qwen-code/pull/2813)): Introduces "microcompact" strategy to truncate old tool results without costly LLM API calls.
4.  **Jupyter Notebook Support** ([#2812](https://github.com/QwenLM/qwen-code/pull/2812)): Adds `NotebookEditTool` to support reading and editing `.ipynb` cells directly.
5.  **HTTP & Async Hook Support** ([#2827](https://github.com/QwenLM/qwen-code/pull/2827)): Expands the hook system to support HTTP requests and async functions for better external integration.
6.  **Fix DEP0169 Warning** ([#2865](https://github.com/QwenLM/qwen-code/pull/2865)): Upgrades dependencies to silence `url.parse()` deprecation warnings in Node.js 22+.
7.  **MCP Schema Validation Fix** ([#2858](https://github.com/QwenLM/qwen-code/pull/2858)): Fixes validation failures for MCP tools using `anyOf`/`oneOf` schemas by coercing stringified JSON values.
8.  **Mid-Turn Queue Drain** ([#2854](https://github.com/QwenLM/qwen-code/pull/2854)): Improves UX by allowing user messages to interrupt tool execution immediately.
9.  **Slash Command Handling Fix** ([#2856](https://github.com/QwenLM/qwen-code/pull/2856)): Prevents slash commands (like `/settings`) from being mistakenly sent to the LLM as text during AI responses.
10. **Coding Plan Authentication** ([#2490](https://github.com/QwenLM/qwen-code/pull/2490)): Enhances authentication to support Alibaba Cloud Coding Plans and i18n for the WebUI.

## 5. Feature Request Trends
-   **Model Updates:** Immediate demand for **Qwen 3.6** integration across all coding plans.
-   **Open Source Purity:** A growing subset of users wants the ability to filter out proprietary/closed-weight models from the client interface.
-   **External Integrations:** Requests to absorb functionality from discontinued tools (like `iflow cli`) and better support for external hooks.

## 6. Developer Pain Points
-   **Model Reliability:** Developers are frustrated with "lazy reasoning" and "hallucinations" in the newest 3.6 model, leading to broken code.
-   **Permission Management:** The "Always Allow" feature is unreliable, particularly for complex shell commands, causing constant interruptions.
-   **Session State:** Bugs related to context retention (not resetting) and initialization hangs (checkpointing) are disrupting development workflows.

</details>