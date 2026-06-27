# AI CLI Tools Community Digest 2026-06-28

> Generated: 2026-06-27 22:19 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the June 28, 2026 community digests.

### 1. Ecosystem Overview
The AI CLI ecosystem is rapidly maturing, shifting focus from basic code generation to complex, multi-agent workflows and deep IDE integrations. Tools are increasingly differentiating themselves through architectural approaches to context management—such as caching strategies and AST-aware file reading—and robust extension ecosystems like MCP (Model Context Protocol). However, scaling these advanced features has introduced industry-wide growing pains, notably cross-platform UI instability, severe memory leaks in long-running sessions, and brittle subagent reliability. Consequently, developer trust is currently hinging on transparent cost-tracking, granular safety guardrails, and deterministic sandboxing.

### 2. Activity Comparison
*Note: Data reflects activity within the 24-hour window of 2026-06-28.*

| Tool | Issues Mentioned | PRs Mentioned | Release Status | Primary Focus Area |
| :--- | :---: | :---: | :--- | :--- |
| **Claude Code** | 12 | 3 | No new releases | Documentation gaps, cyber safety filters |
| **OpenAI Codex** | 10 | 9 | 2 Alphas (Rust core) | MCP OAuth hardening, rate-limit costs |
| **Gemini CLI** | 10 | 10 | No new releases | OS sandboxing, subagent safety |
| **GitHub Copilot CLI** | 10 | 3 | No new releases | TUI bug fixes, MCP cross-platform support |
| **OpenCode** | 10 | 10 | No new releases | Memory leak fixes, skills marketplace MVP |
| **Pi** | 10 | 10 | No new releases | Extension API stability, cost visibility |
| **Qwen Code** | 10 | 10 | 1 Nightly | Multiplayer/remote agents, path security |
| **DeepSeek TUI** | 10 | 12 | No new releases (Imminent) | Plugin system, ACP streaming, context caching |

### 3. Shared Feature Directions
*   **MCP (Model Context Protocol) & Agent Extensibility** (*Codex, Claude Code, Copilot, DeepSeek TUI, OpenCode*): There is a universal push to stabilize MCP. Codex and Copilot are actively fixing MCP server initialization and OAuth serialization, while DeepSeek TUI and OpenCode are building plugin marketplaces to easily bundle and discover MCP servers.
*   **Advanced Context & Token Optimization** (*DeepSeek TUI, Qwen, Gemini CLI, OpenAI Codex*): To combat costly LLM calls, tools are optimizing how context is handled. DeepSeek TUI and Qwen are building "cache-maximal" modes to leverage cheap cached inputs, while Gemini CLI is exploring AST-aware codebase navigation to reduce token noise.
*   **Cross-Platform Friction (Windows/WSL)** (*OpenCode, Copilot CLI, Pi, Codex*): Windows and WSL environments remain a major pain point. OpenCode and Copilot CLI are battling broken path translations and `.bat` MCP regressions, Pi is fixing Git Bash environment variables, and Codex is addressing `apply_patch` sandbox failures.
*   **Cost Visibility & Budget Constraints** (*Pi, Codex, Qwen*): As token usage scales, developers demand granular cost analytics. Pi is building a `reportUsage()` API for sub-agents, Qwen users are frustrated by Anthropic prompt-cache misses, and Codex is facing severe backlash over a 10-20x rate-limit cost spike.

### 4. Differentiation Analysis
*   **Architectural Approaches:** 
    *   *Codex* is deeply invested in its core Rust architecture and network optimizations (disabling Nagle on WebSockets). 
    *   *OpenCode* and *Pi* are heavily focused on backend library extraction, RPC integrations, and headless server deployments (`opencode serve`). 
    *   *DeepSeek TUI* and *Gemini CLI* are focusing on core agent execution logic, specifically fallback strategies and preventing silent scope creep.
*   **Target Audiences:** 
    *   *Claude Code* is grappling with advanced power users (security researchers, systems engineers) requiring bypass mechanisms for cybersecurity filters. 
    *   *Qwen Code* is leaning aggressively into enterprise communication with multi-player channel agents (DingTalk, Telegram). 
    *   *OpenCode* is targeting enterprise corporate deployments with a focus on GitHub Copilot Enterprise integrations and third-party model support.
*   **Subagent Management:** While *Codex* and *Gemini CLI* face issues with hanging subagents and false success reporting, *Pi* is actively building APIs to track sub-agent token consumption, showing a maturity in multi-agent orchestration.

### 5. Community Momentum & Maturity
*   **Rapid Iterators:** *Qwen Code*, *DeepSeek TUI*, *OpenCode*, and *Pi* show massive momentum, each closing or updating 10+ PRs in a single day. *DeepSeek TUI* is rapidly shipping a v0.8.66 milestone focusing on strict context discipline, while *Qwen* is pushing nightly releases.
*   **Stabilizers:** *Gemini CLI* and *OpenAI Codex* are in a hardening phase. *Gemini* is focused on security guardrails (shell parameter expansions, OS sandboxing) and the deployment of automated "Caretaker" bots. *Codex* is pushing core alphas to fix fundamental MCP OAuth and network stability issues.
*   **Friction Points:** *Claude Code* and *GitHub Copilot CLI* are currently facing UI/UX friction and documentation staleness. Copilot CLI is actively battling TUI regressions and visual artifacts.

### 6. Trend Signals
*   **The Death of the "Black Box" Agent:** Developers are rejecting opaque background processes. Silent cron tasks (Qwen), hanging subagents (Codex, Gemini), and swallowed HTTP errors (Pi) are major sources of friction. The trend demands deterministic state tracking, strict timeout configurations, and transparent subagent trajectories.
*   **Sandboxing vs. Autonomy:** As LLMs lean into native bash tool usage, there is a clash between security and capability. *Claude Code's* aggressive cyber safety filters are blocking legitimate workflows, while *Gemini CLI* proposes a middle ground: zero-dependency OS-level sandboxing paired with post-execution intent routing.
*   **Portability of Agent State:** There is a strong trend toward making agent states Git-commitable. *Qwen Code* users are requesting project-bundled states (`.qwen/`), and *Pi* is introducing custom message flags to visually persist messages while hiding them from LLM context, allowing for cleaner session branching.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the technical analysis report for the Claude Code Skills ecosystem based on activity up to June 28, 2026.

### 1. Top Skills Ranking
While comment metrics fluctuate, the most actively discussed Pull Requests reveal strong community priorities around meta-tooling and document management:

*   **Skill-Creator Evaluation Overhaul** ([PR #1298](https://github.com/anthropics/skills/pull/1298)) 
    *   **Functionality:** Fixes a critical bug in `run_eval.py` where description optimization loops reported `0% recall` by properly installing eval artifacts as real skills. Also addresses Windows stream reading.
    *   **Discussion Highlights:** This addresses [Issue #556](https://github.com/anthropics/skills/issues/556), which had 10+ independent reproductions. The community highlighted that the entire description-optimization loop was previously optimizing against noise.
    *   **Status:** Open
*   **Document-Typography Skill** ([PR #514](https://github.com/anthropics/skills/pull/514))
    *   **Functionality:** Implements automated typographic quality control for AI-generated documents, preventing orphan words, widow paragraphs, and numbering misalignment.
    *   **Discussion Highlights:** Users noted that because AI doesn't natively "see" visual formatting, this skill solves a massive, largely unspoken quality-of-life issue for exported documents.
    *   **Status:** Open
*   **Meta-Skills: Quality & Security Analyzers** ([PR #83](https://github.com/anthropics/skills/pull/83))
    *   **Functionality:** Introduces `skill-quality-analyzer` and `skill-security-analyzer` to evaluate structural documentation and scan for prompt-injection risks.
    *   **Discussion Highlights:** Directly responds to growing community anxiety over trust boundaries. Users want programmatic ways to vet third-party skills before execution.
    *   **Status:** Open
*   **Skill-Creator Windows Compatibility** ([PR #1050](https://github.com/anthropics/skills/pull/1050) & [PR #1099](https://github.com/anthropics/skills/pull/1099))
    *   **Functionality:** Fixes critical CLI subprocess (`PATHEXT`/`claude.cmd`) and pipe encoding bugs that broke the `skill-creator` optimization loop on Windows.
    *   **Discussion Highlights:** Generated significant traction from enterprise users operating in Windows-first environments who were completely blocked from using the optimizer.
    *   **Status:** Open
*   **Frontend-Design Refactor** ([PR #210](https://github.com/anthropics/skills/pull/210))
    *   **Functionality:** Revises the `frontend-design` skill to improve clarity, token efficiency, and strict actionability for Claude.
    *   **Discussion Highlights:** Sparked debate over whether skills should contain verbose developer explanations or strict, token-optimized system prompts. 
    *   **Status:** Open

### 2. Community Demand Trends
Based on the Issue tracker, the community is pushing the ecosystem in four distinct directions:

*   **Enterprise Trust & Governance:** Users are highly concerned about security. [Issue #492](https://github.com/anthropics/skills/issues/492) (the most discussed issue) highlights severe trust boundary abuses where malicious community skills spoof the `anthropic/` namespace. There is massive demand for a secure permission model and signed skills.
*   **Cross-Platform Support:** Developers are demanding feature parity for Windows and Mac/Linux, particularly regarding CLI encoding and subprocess handling ([Issue #1061](https://github.com/anthropics/skills/issues/1061)). Furthermore, [Issue #29](https://github.com/anthropics/skills/issues/29) shows a recurring demand for AWS Bedrock compatibility.
*   **Agent Memory & State Management:** Long-running agents suffer from context bloat. Proposals like `compact-memory` ([Issue #1329](https://github.com/anthropics/skills/issues/1329)) and `shodh-memory` indicate a strong desire for standardized, symbolic memory retention across chat sessions.
*   **Organizational Knowledge Sharing:** Teams want native UI support to share `.skill` files across an organization without manual file transfers ([Issue #228](https://github.com/anthropics/skills/issues/228)).

### 3. High-Potential Pending Skills
These open PRs solve critical ecosystem flaws and have a high likelihood of merging in upcoming releases:

*   **[PR #541](https://github.com/anthropics/skills/pull/541) - DOCX Tracked Change Collision Fix:** Solves a severe document corruption bug where hardcoded IDs in the DOCX skill collide with existing user bookmarks. This is a high-priority patch for document integrity.
*   **[PR #486](https://github.com/anthropics/skills/pull/486) - ODT (OpenDocument) Skill:** Adds robust parsing and template filling for `.odt` and `.ods` files. This bridges a major gap for international and open-source enterprise users who rely on LibreOffice standards.
*   **[PR #539](https://github.com/anthropics/skills/pull/539) / [PR #361](https://github.com/anthropics/skills/pull/361) - YAML Pre-Parse Validators:** Both PRs introduce validation logic to prevent silent parsing failures when skill descriptions contain unquoted special characters (`:`, `#`, `{}`). This foundational fix will heavily reduce community user-error reports.

### 4. Skills Ecosystem Insight
The community's most concentrated demand is for **secure, cross-platform reliability**—specifically, robust developer tooling to validate descriptions natively on Windows, paired with strict namespace governance to prevent malicious skill execution.

---

Here is the community digest for Claude Code based on the latest GitHub activity.

# Claude Code Community Digest - 2026-06-28

## 1. Today's Highlights
The past 24 hours show no new releases, but community engagement remains highly active, particularly around documentation gaps and safety filter edge cases. A significant portion of recent activity involves user `coygeek` filing detailed reports on missing or outdated documentation across core features like Hooks, MCP, and Plugins. Meanwhile, developers working on legitimate embedded and fleet management tasks are reporting an uptick in false positives from the cybersecurity safety filters, resulting in halted sessions.

## 2. Releases
*No new releases were recorded in the last 24 hours.*

## 3. Hot Issues
Here are the top issues driving community discussion:

*   **[Bug] Windows TUI usage data failure** ([#8473](https://github.com/anthropics/claude-code/issues/8473)) - A long-standing bug dating back to late 2025 where Windows users face a "Failed to load usage data" error. With 31 comments and 24 upvotes, it remains a highly active pain point for Windows developers.
*   **[Bug] Cybersecurity safety filter false positives blocking legitimate work** ([#71901](https://github.com/anthropics/claude-code/issues/71901), [#71900](https://github.com/anthropics/claude-code/issues/71900), [#71890](https://github.com/anthropics/claude-code/issues/71890)) - Multiple reports from a user performing binary diff analysis on owned consumer drone firmware and SSH fleet management. These highlight a critical gap in the cyber safety filters, which are wrongly halting authorized developer workflows.
*   **[Docs] Missing nested-Claude launch guard behavior** ([#25434](https://github.com/anthropics/claude-code/issues/25434)) - Users are encountering undocumented behaviors when trying to resume or fork sessions using Git worktrees, lacking guidance on recovery for nested instances.
*   **[Docs] WSL support contradiction for Chrome integration** ([#18061](https://github.com/anthropics/claude-code/issues/18061)) - The documentation and changelog currently contradict each other regarding system compatibility for using Claude Code with Chrome in WSL environments.
*   **[Docs] Undocumented Bash login-shell behavior** ([#28043](https://github.com/anthropics/claude-code/issues/28043)) - Developers are frustrated that changes to default login-shell behavior and the `CLAUDE_BASH_NO_LOGIN` environment variable are not reflected in the tool's documentation.
*   **[Docs] Stability warning needed for parallel Hooks** ([#28372](https://github.com/anthropics/claude-code/issues/28372)) - Users running many parallel hooks on the same matcher are experiencing stability issues, prompting a request for documented limitations.
*   **[Docs] `/copy` behavior mismatch** ([#29508](https://github.com/anthropics/claude-code/issues/29508)) - The interactive mode docs fail to mention the persistent "Always copy full response" option in the `/copy` slash command.
*   **[Docs] Missing centralized file/directory reference** ([#26168](https://github.com/anthropics/claude-code/issues/26168)) - A closed but highly discussed issue requesting a single page mapping all files and directories Claude Code writes to disk. 
*   **[Docs] MCP OAuth re-authentication gaps** ([#33704](https://github.com/anthropics/claude-code/issues/33704)) - Remote MCP server users lack guidance on what happens when OAuth refresh tokens expire.
*   **[Docs] `/stats` command lacks transparency** ([#41264](https://github.com/anthropics/claude-code/issues/41264)) - The community is asking for clarity on date ranges, data retention, and usage aggregation semantics for the `/stats` command.

## 4. Key PR Progress
*Note: Only 3 PRs saw activity in the last 24 hours.*

*   **Add error message to `edit-issue-labels.sh`** ([PR #68787](https://github.com/anthropics/claude-code/pull/68787)) - An open PR that improves the developer contribution experience by adding descriptive stderr outputs to CI label scripts when arguments are missing, replacing silent failures.
*   **Merge PR from main** ([PR #71530](https://github.com/anthropics/claude-code/pull/71530)) - A routine fork sync that was closed yesterday.
*   **Empty PR** ([PR #71798](https://github.com/anthropics/claude-code/pull/71798)) - A closed, empty PR submitted by a user, likely a test or mistake.

## 5. Feature Request Trends
Analyzing the recent issue triage, community requests are heavily leaning into **ecosystem transparency and tooling boundaries**:
*   **Safety Filter Granularity:** A strong trend of requests for an unlock/bypass mechanism or refined heuristics for the cyber safety filter, specifically to allow reverse-engineering, binary diffing, and fleet management operations on owned devices.
*   **System & File Transparency:** Requests for a comprehensive map of where Claude Code stores its data (e.g., VS Code global storage paths, local settings) and how it manages local disk artifacts.
*   **Advanced Hook Controls:** Users are asking for better visibility into hook execution limits, particularly around output sizes (>50K previews) and parallel execution stability.

## 6. Developer Pain Points
*   **Documentation Catch-up:** The most glaring pain point is the documentation lagging behind the rapid feature development of MCP, Plugins, and Skills. Advanced users are forced to discover behaviors (like plan file isolation during `/fork`, or `allowed-tools` exceptions) through trial and error.
*   **Blocked Workflows via False Positives:** For security researchers and systems engineers, the cyber safety filters are aggressively blocking legitimate tasks like SSH container access and firmware analysis, effectively rendering the tool unusable for those specific domains without a clear workaround.
*   **Cross-Platform Quirks:** Windows users continue to struggle with platform-specific bugs (like the TUI usage load failure), and WSL users note friction when attempting to utilize browser integration features.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for June 28, 2026.

### 1. Today's Highlights
The Codex ecosystem saw continued iteration with the release of two new Rust core alphas (v0.143.0-alpha.27 and .28). Development focus has heavily shifted towards hardening the Model Context Protocol (MCP) implementation, evidenced by a massive stack of Pull Requests dedicated to serializing and recovering MCP OAuth credentials. Meanwhile, severe community backlash continues regarding a roughly 10-20x spike in `gpt-5.5` rate-limit token costs that is rapidly draining Plus and Pro budgets.

### 2. Releases
*   **[rust-v0.143.0-alpha.28](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.28)**
*   **[rust-v0.143.0-alpha.27](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.27)**
*   *Note: Release notes for these versions are currently bare, indicating core-level dependency or structural updates rather than user-facing CLI/App changes.*

### 3. Hot Issues
*   **[#28879](https://github.com/openai/codex/issues/28879) - Severe rate-limit cost spike for gpt-5.5:** The most impactful issue today (+332 👍). Users report that since June 16, the token cost against the 5-hour budget has increased 10-20x, draining Plus budgets in just 2-3 prompts.
*   **[#11023](https://github.com/openai/codex/issues/11023) - Codex desktop app for Linux:** A highly requested enhancement (+648 👍) where developers are asking for a native Linux desktop client to avoid macOS battery drains and expand platform support.
*   **[#2847](https://github.com/openai/codex/issues/2847) - Exclude sensitive files (.codexignore):** With +414 👍, the community is asking for repo-level and global ignore files to prevent the agent from reading or sending sensitive data (like `.env`) to the model.
*   **[#9203](https://github.com/openai/codex/issues/9203) - Restore the `/undo` command:** Users miss the TUI `/undo` command (+300 👍) to easily rollback unintentional file deletions or modifications that aren't tracked by Git.
*   **[#30224](https://github.com/openai/codex/issues/30224) - `X-OpenAI-Internal-Codex-Responses-Lite` unsupported:** A configuration bug causing API rejections for Plus tier users trying to use the lite responses model.
*   **[#29955](https://github.com/openai/codex/issues/29955) - Quota drained instantly:** Another severe rate-limiting complaint where a Pro user saw 100 credits and their 5h limit wiped out after a single message.
*   **[#29072](https://github.com/openai/codex/issues/29072) - Windows `apply_patch` sandbox failure:** A critical Windows blocker where patching fails because `codex-windows-sandbox-setup.exe` cannot launch from its packaged path.
*   **[#24389](https://github.com/openai/codex/issues/24389) - Subagent close hang:** Parent Codex threads hang for hours when calling `multi_agent_v1.close_agent` on an unresponsive subagent.
*   **[#18460](https://github.com/openai/codex/issues/18460) - Persistent audio transcription failure:** Voice dictation in the Codex Desktop App remains highly unreliable on macOS. 
*   **[#30359](https://github.com/openai/codex/issues/30359) - Codex Desktop SIGKILL Crash:** A fresh crash report from today where the bundled desktop process exits with `signal=SIGKILL` after an app update/reload.

### 4. Key PR Progress
*   **MCP OAuth Architecture Overhaul ([#30292](https://github.com/openai/codex/pull/30292), [#30293](https://github.com/openai/codex/pull/30293), [#30294](https://github.com/openai/codex/pull/30294), [#30295](https://github.com/openai/codex/pull/30295), [#30296](https://github.com/openai/codex/pull/30296)):** A massive 5-PR stack checking in today to serialize, refresh, and route MCP OAuth credential stores and login states through Codex safely. 
*   **[#30291](https://github.com/openai/codex/pull/30291) - Expose environment info RPC:** Introduces an RPC allowing app-server clients to discover an environment's shell and working directory before selecting it.
*   **[#30302](https://github.com/openai/codex/pull/30302) - Preserve namespaces on custom tool calls:** Ensures namespaced tool identifiers are maintained during response deserialization and dispatch. 
*   **[#30384](https://github.com/openai/codex/pull/30384) - Increase currentTime/read timeout:** Doubles the app-server external request timeout from 5s to 10s to prevent premature timeouts.
*   **[#30269](https://github.com/openai/codex/pull/30269) - Disable Nagle on WebSockets:** Disables Nagle's algorithm unconditionally on Rendezvous WebSockets to optimize TCP packet transmission for remote execution.
*   **[#30327](https://github.com/openai/codex/pull/30327) - Stabilize synthesized call output IDs:** Fixes an issue where synthesized "aborted" outputs lacked a stable ID, making retries and asynchronous tracking unreliable.
*   **[#30226](https://github.com/openai/codex/pull/30226) & [#30223](https://github.com/openai/codex/pull/30223) - Reactive Apps/Plugin Guidance:** Updates the system to emit generic Apps and Plugin guidance dynamically whenever the MCP or plugin environment becomes ready, even if it recovers mid-turn.

### 5. Feature Request Trends
*   **Data Privacy & Sandboxing:** Strong demand for explicit file exclusion rules (`.codexignore`) to keep secrets out of LLM context.
*   **OS Parity (Linux & Windows):** Developers desperately want a native Linux Desktop app, while Windows users are asking for sandbox stability and basic UI fixes (like working spellcheck).
*   **Workflow Safety Nets:** Requests to bring back the `/undo` command and mandatory pre-edit approval prompts to prevent runaway agents from destroying uncommitted local states.
*   **Subagent & Thread Management:** Better visibility into subagent states, including requests to render thread/subagent references as clickable UI chips.

### 6. Developer Pain Points
The biggest frustration is **rate-limit volatility and budget drainage**. Users feel that recent background changes have fundamentally broken the cost-efficiency of `gpt-5.5`, making the tool unusable for heavy, iterative workflows. 

Secondary pain points center around **Windows environment instability**, particularly broken Git permissions in sandboxes and failed `apply_patch` executions. Finally, **subagent hangups** (where parent threads hang indefinitely waiting for unresponsive children) are actively disrupting automated pipelines, requiring manual process kills.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for June 28, 2026.

### 1. Today's Highlights
The Gemini CLI community is experiencing high active development focused on tightening agent safety, fixing subagent reliability, and improving system-level integrations. Key updates today include major advancements in Automated Memory (Auto Memory) robustness, crucial security patches restricting silent shell parameter expansions, and the introduction of an automated "Caretaker" agent via Cloud Run to streamline GitHub operations. 

### 2. Releases
*No new releases were recorded in the last 24 hours.*

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **Subagent false success reporting ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))**
    *   *Why it matters:* The `codebase_investigator` subagent reports `status: "success"` even when it hits `MAX_TURNS` without performing analysis. This misleads the primary agent and breaks complex task chains.
*   **Proposed Zero-Dependency OS Sandboxing for Bash ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873))**
    *   *Why it matters:* With Gemini 3 leaning heavily into native bash tool usage, the community proposes a robust OS-level sandboxing mechanism paired with post-execution intent routing to allow safe, unhindered bash utilization.
*   **Generalist agent hanging indefinitely ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409))**
    *   *Why it matters:* A highly upvoted issue reporting that the generalist agent frequently hangs forever on basic file operations. Users are currently forced to manually instruct the CLI to avoid sub-agents as a workaround.
*   **AST-aware file reads and codebase mapping ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))**
    *   *Why it matters:* This investigation epic explores transitioning to AST-aware tools to let the model read precise method bounds in a single call, drastically reducing token noise and wasted turns. 
*   **Auto Memory deterministic redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525))**
    *   *Why it matters:* Auto Memory currently exposes local transcript text and secrets to the background model *before* instructing the LLM to redact them. The issue requests deterministic, pre-transmission redaction to guarantee security.
*   **Auto Memory stuck in retry loops ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522))**
    *   *Why it matters:* The background extraction agent repeatedly surfaces "low-signal" transcripts because it fails to mark them as processed unless explicitly read, causing infinite retry cycles and wasted context.
*   **CLI hangs at "Awaiting user input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))**
    *   *Why it matters:* A P1 core bug where the terminal gets stuck after executing simple shell commands, falsely indicating it is waiting for user input and severely degrading the CLI UX.
*   **Subagents ignoring disabled configurations ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093))**
    *   *Why it matters:* Following a recent update, subagents are executing tasks despite being explicitly disabled in user configurations, breaking expected boundaries and raising security concerns.
*   **400 Error triggered by >128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))**
    *   *Why it matters:* Power users leveraging heavy MCP integrations hit API limits errors. The community requests smarter agent-side tool filtering and scoping before payload submission.
*   **Symlinks ignored for subagents ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079))**
    *   *Why it matters:* Developers managing complex environments via symlinks are blocked, as the `~/.gemini/agents/` directory fails to recognize symlinked Markdown files as valid agents.

### 4. Key PR Progress
Here are the top 10 PRs showcasing active development progress:

*   **[feat(caretaker): egress cloud run service #28167](https://github.com/google-gemini/gemini-cli/pull/28167)** & **[Cloud Run webhook ingestion #28015](https://github.com/google-gemini/gemini-cli/pull/28015)**
    *   Introduces an automated "Caretaker Agent" via GCP Cloud Run to securely ingest GitHub webhooks and execute verified GitHub operations autonomously.
*   **[fix(policy): require confirmation for shell parameter expansion #28175](https://github.com/google-gemini/gemini-cli/pull/28175)**
    *   *Security Fix:* Downgrades allowlisted shell commands containing dynamic parameter expansions to require explicit user confirmation in interactive mode, and blocks them entirely in YOLO mode.
*   **[fix(security): require approved bot patch artifacts #28178](https://github.com/google-gemini/gemini-cli/pull/28178)**
    *   Enforces an explicit approval marker before the publish job consumes bot-changes patches, preventing unreviewed reasoning runs from modifying codebases.
*   **[feat(evals): add eval coverage report command #28169](https://github.com/google-gemini/gemini-cli/pull/28169)**
    *   Adds a new `eval:coverage` CLI command that reports test coverage for built-in tools by cross-referencing eval inventories with the tool registry.
*   **[fix(a2a-server): deep-merge user and workspace settings #28094](https://github.com/google-gemini/gemini-cli/pull/28094)**
    *   Fixes a critical config bug where nested user/workspace settings (like `tools` or `experimental`) were completely overwritten by shallow object spreads.
*   **[fix(core): guard message inspectors against empty parts arrays #28068](https://github.com/google-gemini/gemini-cli/pull/28068)**
    *   Resolves a JavaScript quirk (`[].every() == true`) that caused the system to misclassify empty model messages as valid function calls or responses.
*   **[feat(cli): add native drag-and-drop and clipboard image pasting #27859](https://github.com/google-gemini/gemini-cli/pull/27859)**
    *   *Closed/Completed:* Brings multimodal parity to the terminal by allowing native drag-and-drop file dropping and `Cmd+V`/`Ctrl+V` image pasting directly into the prompt.
*   **[fix(core): cap pending tool responses #27870](https://github.com/google-gemini/gemini-cli/pull/27870)**
    *   *Closed/Completed:* Prevents large tool results from exhausting context windows by capping the size of pending `functionResponse` payloads.
*   **[fix(agent): prevent silent scope expansion on task failure #28171](https://github.com/google-gemini/gemini-cli/pull/28171)**
    *   Fixes an issue where the agent would silently expand its scope (e.g., reading whole files, running scripts) without permission when its initial targeted approach failed.
*   **[fix(core-tools): defensive path resolution for at-reference files #28053](https://github.com/google-gemini/gemini-cli/pull/28053)**
    *   Resolves a production crash where file system tools failed if the model passed paths prefixed with an `@` symbol (e.g., `@policies/new-policies.txt`).

### 5. Feature Request Trends
Based on recent issues, the community is advocating for several major architectural shifts:
*   **OS-Level Sandboxing & Guardrails:** As LLMs lean into native bash usage, users want secure, OS-level sandboxes that don't require sacrificing model autonomy.
*   **AST-Aware Codebase Navigation:** Transitioning from regex/grep-based searches to AST-aware file readers and navigators to optimize token usage and improve accuracy.
*   **Granular Auto-Memory Controls:** Feature requests demand deterministic redaction, inbox patch validation, and reliable indexing to make Auto Memory secure and performant.
*   **Agent Transparency & Tooling Awareness:** Users want agents to inherently understand their own constraints (CLI flags, hotkeys) and provide visible subagent trajectories for debugging via `/chat share`.

### 6. Developer Pain Points
Frustration in the community currently revolves around system reliability and unrequested agent behavior:
*   **Silent Scope Creep:** The agent frequently switches strategies and executes unapproved scripts or destructive commands (e.g., `git reset`) when an initial plan fails, breaking trust in autonomous operations.
*   **Hanging & Execution Freezes:** Frequent reports of the CLI hanging indefinitely during basic shell command execution or when deferring to the generalist subagent.
*   **Tool Routing Limits:** Hitting hard API limits (400 errors) when utilizing comprehensive MCP setups with >128 tools, indicating a strong need for intelligent, context-aware tool filtering.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for June 28, 2026.

### 1. Today's Highlights
The GitHub Copilot CLI community activity over the past 24 hours has been dominated by TUI (Terminal User Interface) bugs and regressions following the v1.0.65/v1.0.66 updates. Key discussions highlight persistent frustrations with terminal rendering, cross-platform MCP server initialization on Windows, and subagent context management. No new official releases were deployed during this window.

### 2. Releases
**None** — No new releases were recorded in the last 24 hours.

### 3. Hot Issues
Here are the 10 most noteworthy issues updated in the past 24 hours:

*   **[#3958](https://github.com/github/copilot-cli/issues/3958) [OPEN]** **Windows MCP Server Regression:** v1.0.66 fails to start stdio MCP servers when the command relies on a `.bat`/`.cmd` file with arguments. This is a critical blocker for Windows developers using Model Context Protocol.
*   **[#2165](https://github.com/github/copilot-cli/issues/2165) [OPEN]** **Ubuntu Keychain Bug:** A highly upvoted issue (👍 20) pointing out that authentication is broken on Ubuntu due to incorrect documentation and failures when `secret-tool` is missing.
*   **[#1799](https://github.com/github/copilot-cli/issues/1799) [OPEN]** **Alt-Screen Toggle Request:** Users are expressing ongoing frustration (👍 7) with the recently forced alt-screen views and are requesting a configuration option to revert to the original terminal rendering mode.
*   **[#3949](https://github.com/github/copilot-cli/issues/3949) [OPEN]** **Windows 11 Copy Failure:** Users report that the copy command silently fails to write to the clipboard, yet the UI falsely reports that the text was copied successfully.
*   **[#3944](https://github.com/github/copilot-cli/issues/3944) [OPEN]** **Subagent Transcript Bloat:** Exported parent sessions are being flooded with uncapped, verbatim subagent transcripts. This makes session logs massive and difficult to parse.
*   **[#3959](https://github.com/github/copilot-cli/issues/3959) [OPEN]** **TUI "Ghost" Characters:** A visual artifact bug where deleting text via backspace leaves floating characters on the screen, failing to properly redraw terminal cells.
*   **[#3957](https://github.com/github/copilot-cli/issues/3957) [OPEN]** **macOS Trackpad Scrolling:** On MBPs, using the trackpad to scroll backward through history mistakenly highlights previous prompts instead of scrolling the viewport.
*   **[#3955](https://github.com/github/copilot-cli/issues/3955) [OPEN]** **macOS Drag-and-Drop Regression:** Dragging files from Finder into the Copilot prompt composer no longer attaches the files, marking a regression in recent versions.
*   **[#3874](https://github.com/github/copilot-cli/issues/3874) [OPEN]** **VS Code Hook Ignored:** The `preToolUse` agent hook fails to deny commands as intended when running chat sessions from the Copilot CLI.
*   **[#2778](https://github.com/github/copilot-cli/issues/2778) [OPEN]** **Context-Memory Control:** A feature request asking for a `/btw` equivalent (borrowed from claude-code) to allow users to ask quick questions without polluting the active session's context window.

### 4. Key PR Progress
Only 3 pull requests saw activity in the last 24 hours:

*   **[#3928](https://github.com/github/copilot-cli/pull/3928) [OPEN]** **Add .gitignore and settings configuration:** A maintenance PR aimed at improving repository configurations. Currently open and pending review.
*   **[#570](https://github.com/github/copilot-cli/pull/570) [CLOSED]** **Add macOS installation instructions to README.md:** An older WIP PR originally generated by the Copilot coding agent that has now been closed without merging.
*   **[#3737](https://github.com/github/copilot-cli/pull/3737) [OPEN]** **Jigg empire ai:** A low-context, non-standard pull request that appears to be testing new methodologies rather than providing a strict feature/fix.

### 5. Feature Request Trends
*   **Better Context & Session Management:** Developers are looking for finer control over their AI sessions. Requests include viewing session retention/expiration dates directly in the status line ([#3963](https://github.com/github/copilot-cli/issues/3963)), summarizing subagent transcripts rather than dumping them ([#3944](https://github.com/github/copilot-cli/issues/3944)), and querying the AI without corrupting active memory ([#2778](https://github.com/github/copilot-cli/issues/2778)).
*   **Input & Workflow Customization:** Users want more control over their input methods. This includes customizable keyboard shortcuts for the new `/voice` dictation feature ([#3672](https://github.com/github/copilot-cli/issues/3672)) and better trackpad gesture mapping on macOS ([#3957](https://github.com/github/copilot-cli/issues/3957)).
*   **Mandatory UI Toggles:** There is a strong pushback against forced UI changes. The community wants configurable fallbacks for new features like the alt-screen terminal rendering ([#1799](https://github.com/github/copilot-cli/issues/1799)).

### 6. Developer Pain Points
*   **Terminal Rendering Quirks:** The TUI is currently a major source of friction. Users are battling visual artifacts ([#3959](https://github.com/github/copilot-cli/issues/3959)), forced full-screen modes ([#1799](https://github.com/github/copilot-cli/issues/1799)), and misinterpreted trackpad inputs ([#3957](https://github.com/github/copilot-cli/issues/3957)).
*   **Cross-Platform Instability:** The latest updates have introduced painful regressions for OS-specific workflows. Windows users are dealing with broken clipboard operations ([#3949](https://github.com/github/copilot-cli/issues/3949)) and broken MCP server bootups ([#3958](https://github.com/github/copilot-cli/issues/3958)), while macOS users are experiencing broken file attachments ([#3955](https://github.com/github/copilot-cli/issues/3955)).
*   **False UI Positives & Silent Failures:** A shared frustration is the UI lying to the user. Specifically, Windows users are told text is on the clipboard when it isn't ([#3949](https://github.com/github/copilot-cli/issues/3949)), and desktop users are finding that custom AI model providers are still secretly draining their native GitHub AI quotas instead of routing properly ([#3960](https://github.com/github/copilot-cli/issues/3960)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for June 28, 2026.

### 1. Today's Highlights
The OpenCode community is actively addressing critical performance bottlenecks, highlighted by a major fix proposed for memory leaks in long-running server instances. Developers using Windows/WSL environments can also look forward to upcoming patches resolving persistent path-mapping issues that currently break tool execution. Additionally, the introduction of a skills and agents marketplace MVP signals a major leap toward broader extensibility and easier migration for enterprise teams.

### 2. Releases
*No new releases were recorded in the last 24 hours.*

### 3. Hot Issues
*   **Server Memory Leak in `opencode serve`** ([#33213](https://github.com/anomalyco/opencode/issues/33213)): A critical issue where long-running server instances accumulate up to 26.8 GiB of JS/Bun heap memory, forcing manual restarts. This is a top priority for production deployments.
*   **High CPU/Memory on Long Sessions** ([#34226](https://github.com/anomalyco/opencode/issues/34226)): Echoing memory complaints, users report the macOS desktop app consuming 110% CPU and 2GB RAM during 3-hour extended coding sessions, even at low context usage.
*   **WSL Desktop Path Breaking** ([#30895](https://github.com/anomalyco/opencode/issues/30895)): OpenCode Desktop v1.16.0 translates native WSL paths (`/mnt/c/...`) to Windows paths (`C:\...`), breaking file and session lists when working across host boundaries.
*   **Inconsistent Project Skills Loading** ([#34228](https://github.com/anomalyco/opencode/issues/34228)): The agent sometimes fails to expose the complete subset of configured project skills to the LLM, leading to broken or unstable automated workflows.
*   **Third-Party Copilot Models Blocked** ([#34030](https://github.com/anomalyco/opencode/issues/34030)): Enterprise users are unable to invoke custom third-party models added via GitHub Copilot Enterprise, limiting corporate adoption.
*   **`opencode run` Crashes with Unexpected Server Error** ([#33766](https://github.com/anomalyco/opencode/issues/33766)): Headless CLI execution is failing with vague "unexpected server error" outputs, disrupting automated pipelines.
*   **TUI Kernel Log Leakage** ([#34146](https://github.com/anomalyco/opencode/issues/34146)): macOS OrbStack kernel NFS messages are leaking directly into the TUI display and corrupting the interface, even while the application is idle.
*   **GLM-5.1 Prompt Cache Drops** ([#31348](https://github.com/anomalyco/opencode/issues/31348)): When using `opencode-go`, prompt cache reads for the GLM-5.1 model randomly drop to zero, causing unexpected and severe cost spikes for developers.
*   **Session Model Reversion Bug** ([#34207](https://github.com/anomalyco/opencode/issues/34207)): The UI silently reverts a user's model selection back to the original model if changed while the agent is awaiting an answer.
*   **SIGTRAP on linux/arm64** ([#34054](https://github.com/anomalyco/opencode/issues/34054)): Users on ARM64 architectures report a low-level crash (SIGTRAP) triggered inside `web-tree-sitter` the first time the shell tool is executed.

### 4. Key PR Progress
*   **[Server] Foreign Directory Rejection** ([PR #34256](https://github.com/anomalyco/opencode/pull/34256)): Fixes critical WSL/Windows path mismatch bugs by rejecting foreign directory hints early in the instance lookup phase.
*   **[Server] Memory/DB Migration Fixes** ([PR #34188](https://github.com/anomalyco/opencode/pull/34188): Resolves legacy local database migration issues that were contributing to bloated states and crashes across core environments.
*   **[App] Session Page Error Scoping** ([PR #34254](https://github.com/anomalyco/opencode/pull/34254): Introduces an ErrorBoundary inside the session panel so that missing sessions or server connection drops no longer crash the entire application tab.
*   **[TUI] Global Session Picker** ([PR #33450](https://github.com/anomalyco/opencode/pull/33450)): Adds a new global mode to the TUI picker, empowering users to discover and resume sessions from entirely different projects.
*   **[ACP] Native File Review Staging** ([PR #31392](https://github.com/anomalyco/opencode/pull/31392): Upgrades OpenCode's Agent Client Protocol integration, allowing seamless native file review staging in supported editors like Zed and Devin.
*   **[Provider] Bedrock Prompt Caching** ([PR #16504](https://github.com/anomalyco/opencode/pull/16504): Implements prompt caching support for AWS Bedrock custom ARNs and inference profiles, restricting unsupported models automatically to save costs.
*   **[Core] Protocol Client Generation** ([PR #34164](https://github.com/anomalyco/opencode/pull/34164): Automatically generates Promise and Effect clients from standard HTTP groups, drastically improving the stability of the Server `HttpApi`.
*   **[CLI] Skills and Agents Marketplace MVP** ([PR #33698](https://github.com/anomalyco/opencode/pull/33698): Introduces the foundational MVP for a marketplace, enabling users to easily discover and install plugins and agents from external sources.
*   **[App] Projects Archive** ([PR #34210](https://github.com/anomalyco/opencode/pull/34210): Implements a much-requested non-destructive "Archive" feature, letting users hide old or completed projects from their home screen without deleting data.
*   **[Core] Test Suite Migration to Node Graph** ([PR #34248](https://github.com/anomalyco/opencode/pull/34248), [PR #34245](https://github.com/anomalyco/opencode/pull/34245), [PR #34244](https://github.com/anomalyco/opencode/pull/34244)): A series of internal refactors transitioning hand-written core tests to the new app node graph builder, ensuring better long-term stability and test coverage.

### 5. Feature Request Trends
*   **Better Enterprise Provider Support:** Users want out-of-the-box compatibility with niche or enterprise-locked models, specifically GitHub Copilot third-party additions and NVIDIA NIM deployments (e.g., Nemotron 3 Ultra, minimax-m3).
*   **TUI and Display Customization:** There is a strong desire for more UI control, including configurable permission prompt heights ([#28191](https://github.com/anomalyco/opencode/issues/28191)) and default states for tool outputs.
*   **Session Management Upgrades:** Features for organizing historical data are trending, particularly manual session renaming ([#25848](https://github.com/anomalyco/opencode/issues/25848)) and fixing the `/sessions` picker to browse beyond recent items ([#13877](https://github.com/anomalyco/opencode/issues/13877)).
*   **Alternative Payments:** Notably, the most upvoted feature request ([#23153](https://github.com/anomalyco/opencode/issues/23153)) is the addition of cryptocurrency payments for the "OpenCode Go" tier.

### 6. Developer Pain Points
*   **Memory Leaks and Resource Management:** Whether in headless `serve` deployments, WSL integrations, or long-running macOS desktop sessions, uncontrolled heap growth and high CPU usage are the most prominent frustrations today.
*   **WSSL/Desktop Path Translation:** Windows developers working with WSL face a persistent headache where the desktop application aggressively translates Linux paths into Windows formats, silently breaking all bash tool calls and file lookups.
*   **Model & Provider Flakiness:** Developers utilizing non-primary models (like GLM-5.1/5.2 or Kimi) frequently run into broken API schemas, undocumented behavior changes, and silent failures. 
*   **UI Stalling and Freezes:** Multiple users report that the application suddenly stops responding mid-session, often requiring a hard terminal kill and losing immediate workflow context.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for 2026-06-28.

### 1. Today's Highlights
The Pi community saw a massive wave of issue triaging and bug resolution over the past 24 hours, with a strong focus on stabilizing the extension ecosystem and improving error visibility for provider APIs. Key updates include critical fixes for extension lifecycle management in embedded library contexts and new APIs to help extension developers accurately track token costs. Additionally, several UI/UX quirks, such as markdown scrolling interruptions and broken Devanagari rendering, were addressed.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
Here are the top 10 noteworthy issues from the last 24 hours:

*   **#5825 [bug] Streaming markdown forces scroll to bottom** ([Link](https://github.com/earendil-works/pi/issues/5825))
    *Why it matters:* A highly active issue (34 comments) where users report the TUI force-scrolling to the bottom during LLM generation when "clear on shrink" is enabled, making it impossible to read while the agent is streaming. 
*   **#5763 [bug] Providers swallow the HTTP error body** ([Link](https://github.com/earendil-works/pi/issues/5763))
    *Why it matters:* Behind proxies or gateways, non-2xx HTTP responses with unparsable bodies are dropped by SDK providers, surfacing as unreadable errors (e.g., Bedrock's `Unknown: UnknownError`). 
*   **#6129 [package-report] @hypabolic/pi-hypa** ([Link](https://github.com/earendil-works/pi/issues/6129))
    *Why it matters:* The community flagged this package for artificially gaming install metrics. Maintainers quickly closed the report, showing active policing of the Pi package registry.
*   **#6128 [bug] Support diffusiongemma thinking and tool calls** ([Link](https://github.com/earendil-works/pi/issues/6128))
    *Why it matters:* Users testing diffusion models (like DiffusionGemma via Unsloth) reported that thinking blocks are incorrectly rendered as standard output, highlighting the need for Pi to adapt to emerging non-standard LLM architectures.
*   **#6124 [bug] Devanagri breaking the Pi harness** ([Link](https://github.com/earendil-works/pi/issues/6124))
    *Why it matters:* Typing Devanagari script (Hindi) completely breaks the TUI layout. This underscores internationalization and Unicode rendering challenges within the terminal harness.
*   **#6116 [bug] opencode-go streaming + tools ignores thinking: disabled** ([Link](https://github.com/earendil-works/pi/issues/6116))
    *Why it matters:* When using `mimo` models, the `thinking: {"type": "disabled"}` flag is ignored during tool streaming. This was traced to an upstream `opencode-go` gateway bug rather than Pi core.
*   **#6117 [bug] Public createAgentSession import lacks stable faux-provider path** ([Link](https://github.com/earendil-works/pi/issues/6117))
    *Why it matters:* Downstream SDK consumers discovered that public imports for testing don't align with deterministic faux providers, complicating integration testing for third-party tools.
*   **#6110 [bug] Extension session_start fires before initTheme** ([Link](https://github.com/earendil-works/pi/issues/6110))
    *Why it matters:* Race conditions in the TUI startup cause extensions accessing theme data during `session_start` to crash with "Theme not initialized". 
*   **#6101 [bug] Shared extension runtime poisoned across sessions** ([Link](https://github.com/earendil-works/pi/issues/6101))
    *Why it matters:* When embedding Pi as a library, sequential `AgentSession` creations fail because `dispose()` poisons the extension context for subsequent sessions, a critical blocker for backend integrations.
*   **#6100 [bug] Compaction summary displayed out of place** ([Link](https://github.com/earendil-works/pi/issues/6100))
    *Why it matters:* Users reported confusing UI behavior where context compaction summaries jump to the top of the chat history upon session reload.

### 4. Key PR Progress
Here are the 10 most important PRs updated in the last 24 hours:

*   **#5735 fix(coding-agent): defer extension reload requests safely** ([Link](https://github.com/earendil-works/pi/pull/5735))
    *Progress:* Armin fans rejoice—`ctx.reload()` is being made safely awaitable across all extension contexts, preventing race conditions and crashes during hot-reloads.
*   **#5678 Add excludeFromContext for custom messages** ([Link](https://github.com/earendil-works/pi/pull/5678))
    *Progress:* Introduces a flag to persist and render custom messages visually while hiding them from the actual LLM context window, vastly improving compaction and branching logic.
*   **#5832 fix(ai): surface provider HTTP error body** ([Link](https://github.com/earendil-works/pi/pull/5832))
    *Progress:* Directly resolves the opaque proxy error issue (#5763) by ensuring raw HTTP response bodies are logged and surfaced to the developer.
*   **#6119 feat: add reportUsage API for extensions** ([Link](https://github.com/earendil-works/pi/pull/6119))
    *Progress:* Adds an API allowing extensions (like sub-agents) to report token and dollar costs back to the main Pi session footer, bringing much-needed cost visibility to tool-heavy workflows.
*   **#6123 feat: add externalEditor setting** ([Link](https://github.com/earendil-works/pi/pull/6123))
    *Progress:* Resolves Windows/Git Bash pain points by allowing the Ctrl+G external editor to be defined via `settings.json` instead of relying strictly on `$EDITOR` environment variables.
*   **#6115 feat: add configurable chat padding** ([Link](https://github.com/earendil-works/pi/pull/6115))
    *Progress:* Opens discussion on allowing users to remove TUI padding. A requested feature on Discord, though core maintainers note it requires significant structural changes.
*   **#6109 fix: preserve dependency cache on extension reload** ([Link](https://github.com/earendil-works/pi/pull/6109))
    *Progress:* Fixes a bug in compiled release binaries where `/reload` re-evaluated dependency module graphs, causing side effects (like themes registering multiple times).
*   **#6111 fix: report settings write failures in install/remove** ([Link](https://github.com/earendil-works/pi/pull/6111))
    *Progress:* Adds hard failure states and error messaging when `pi install` cannot write to `settings.json` due to strict filesystem permissions.
*   **#6099 Rename model key for Azure OpenAI** ([Link](https://github.com/earendil-works/pi/pull/6099))
    *Progress:* Corrects Azure OpenAI provider mappings, fixing the non-existent `gpt-5.2-chat-latest` endpoint to the proper `gpt-5.2-chat` identifier.
*   **#6117 fix: faux-provider path for SDK consumers** ([Link](https://github.com/earendil-works/pi/pull/6117))
    *Progress:* Aligns the public package exports with internal deterministic testing paths so third-party SDK users can mock providers reliably.

### 5. Feature Request Trends
*   **Cost & Usage Analytics:** Developers want granular visibility into agent spending. The rapid progression of the `reportUsage()` API highlights a trend of building complex, multi-agent pipelines where tracking sub-agent token consumption is critical.
*   **Advanced Package Management Controls:** Users are asking for stricter controls over extension installations, including passing custom arguments to npm/pnpm (like `--min-release-age`) to prevent supply chain attacks and ensure package stability.
*   **Custom Frontend Integrations:** A notable uptick in feature requests around RPC pass-through (such as audio support for custom Qt frontends) and extracting Pi as a headless library indicates a strong desire to build bespoke UIs on top of the Pi backend.

### 6. Developer Pain Points
*   **Embedded Context Poisoning:** Developers using Pi as a backend library are experiencing severe friction with stale extension contexts. Sequential session creation or late initialization (like the theme proxy bugs) frequently crashes production apps.
*   **Opaque Provider Errors:** Gateway and proxy configurations continue to frustrate developers. When APIs return non-standard error payloads, Pi's SDK historically swallowing these bodies makes debugging enterprise network setups nearly impossible.
*   **Windows Environment Quirks:** Windows developers remain plagued by environment variable limitations (especially with Git Bash/VS Code) and low-level tool bugs, such as the `find` command dropping path characters on bare drive roots.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-06-28.

### 1. Today's Highlights
Qwen Code rolled out the `v0.19.2` nightly release, bringing core bug fixes such as JSON fallback for web fetching. The community was highly active in refining `qwen serve` background automation, tackling security vulnerabilities related to path traversal, and optimizing token caching for Anthropic models. Significant architectural progress was also made on multi-player channel agents (like DingTalk and Telegram) and the revival of the Chrome extension.

### 2. Releases
*   **[v0.19.2-nightly.20260627.d93bec905](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2-nightly.20260627.d93bec905)**
    *   **fix(core):** Added a JSON fallback mechanism for `web_fetch` ([PR #5660](https://github.com/QwenLM/qwen-code/pull/5660)).

### 3. Hot Issues
1.  **[Anthropic Prompt-Cache Misses #5942](https://github.com/QwenLM/qwen-code/issues/5942):** A major cost-performance bug where side-queries break the prompt-cache prefix on Anthropic endpoints, significantly inflating API costs compared to Claude Code.
2.  **[Default 8K Output Cap Truncation #5756](https://github.com/QwenLM/qwen-code/issues/5756):** The default 8K output token cap is silently ignoring model limits, causing large file generations to truncate and triggering endless retry loops.
3.  **[Silent Cron Tasks #5823](https://github.com/QwenLM/qwen-code/issues/5823):** Background `/loop` cron tasks fire silently without UI visibility, causing the agent to unexpectedly take over fresh chat sessions without user prompting.
4.  **[Path Traversal in Source Deletion #5834](https://github.com/QwenLM/qwen-code/issues/5834):** A P1 security vulnerability where crafted path-like slugs in the desktop source deletion endpoint could escape the workspace `sources` directory. 
5.  **[Cross-Device Sync for Todos/Memory #5836](https://github.com/QwenLM/qwen-code/issues/5836):** Users are requesting that task lists (`create todos`), plans, and memories be savable inside the project directory (`.qwen/`) to support Git version control and cross-device syncing.
6.  **[Git-Shared "Team" Memory #5867](https://github.com/QwenLM/qwen-code/issues/5867):** A proposal to add a third "Team" tier to auto-memory, allowing shared, Git-tracked project context for collaborative environments.
7.  **[Agent Command Timeouts #5838](https://github.com/QwenLM/qwen-code/issues/5838):** Developers need configurable timeout settings for shell commands spawned by the AI agent to prevent long-running processes from hanging the session.
8.  **[`/rewind` Breaks Conversation History #5920](https://github.com/QwenLM/qwen-code/issues/5920):** A critical bug where `/rewind` saves `parentUuid` as null, causing previous chat context to disappear when resuming a session.
9.  **[High CPU Usage by `cua-driver.exe` #5922](https://github.com/QwenLM/qwen-code/issues/5922):** Windows users report the computer use agent driver running like a "virus," consuming high CPU even when Qwen Code is completely idle.
10. **[UI Scroll Bug #5941](https://github.com/QwenLM/qwen-code/issues/5941):** A UI regression where scrolling up slightly during LLM output generation causes the viewport to violently jump to the very top.

### 4. Key PR Progress
1.  **[feat(browser-ext): Revive Chrome extension #5777](https://github.com/QwenLM/qwen-code/pull/5777):** Migrates the Chrome extension away from Native Messaging to act as a thin client communicating directly with the `qwen serve` local daemon.
2.  **[feat(core,cli,sdk): Resume interrupted turns #5030](https://github.com/QwenLM/qwen-code/pull/5030):** Allows SDK callers to seamlessly resume an unfinished assistant turn after a crash or interruption without injecting a synthetic "continue" message.
3.  **[feat(channels): qwen tag (Multiplayer agent) #5888](https://github.com/QwenLM/qwen-code/pull/5888):** Introduces a channel-resident, multiplayer agent for DingTalk/Telegram built directly on the existing `qwen serve` daemon.
4.  **[fix(core): Halt repeated shell inspection #5944](https://github.com/QwenLM/qwen-code/pull/5944):** Adds an always-on loop guard to stop the agent from repeatedly calling semantically similar read-only git commands (like `git status` and `git diff`).
5.  **[fix(desktop): Normalize source slug validation #5911](https://github.com/QwenLM/qwen-code/pull/5911):** Defense-in-depth follow-up to harden path traversal fixes, returning structured validation errors instead of crashing on invalid slugs.
6.  **[feat(loop): Inject `.qwen/loop.md` #5890](https://github.com/QwenLM/qwen-code/pull/5890):** Implements a durable, user-editable task list file injected at `/loop` fire time, preventing the need to re-state instructions every tick.
7.  **[feat(cli): Add `/model --vision` #5778](https://github.com/QwenLM/qwen-code/pull/5778):** Adds a fallback vision model setting so text-only models can automatically route image processing to a specified vision-capable model.
8.  **[feat(web-shell): Add error boundaries #5943](https://github.com/QwenLM/qwen-code/pull/5943):** Implements React error boundaries in the web shell to prevent a single uncaught render error from white-screening the entire UI.
9.  **[feat(acp): Support `/cd` command in ACP #5903](https://github.com/QwenLM/qwen-code/pull/5903):** Brings server-side directory changing to Agent Communication Protocol (ACP) multi-session architectures.
10. **[perf(cli): Enable compile cache #5938](https://github.com/QwenLM/qwen-code/pull/5938):** Optimizes `qwen serve` startup time by enabling the V8 compile cache and deferring `getCliVersion`.

### 5. Feature Request Trends
*   **State & Context Portability:** Strong demand for moving away from localized user states (`~/.qwen/`) towards project-bundled states (`.qwen/`). Users want Todos, Memory, and Loop instructions to be Git-commitable for team sharing and multi-device syncing.
*   **Remote & Multiplayer Agents:** High momentum around channel integrations. PRs and issues are aligning around using `qwen serve` as a centralized daemon to power Telegram bots, DingTalk tag agents, and browser extensions.
*   **Cost & Performance Visibility:** As token usage scales, developers are requesting granular control over caching behaviors, explicit agent timeout limits, and dynamic max-token scaling based on specific model capabilities.

### 6. Developer Pain Points
*   **Infinite Tool Loops:** Developers are frustrated by agents getting stuck in retry loops, whether from repetitive shell commands (`git diff`), hitting the 8K output token cap, or failing sequential file edits. 
*   **Opaque Background Execution:** Silent cron jobs and runaway background processes (like `cua-driver.exe`) are causing CPU drain and unwanted agent actions, severely hurting trust in the tool's idle state.
*   **Cache & Pricing Penalties:** Anthropic API users are suffering from avoidable prompt-cache misses, leading to unexpectedly high API costs during standard coding sessions.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the community digest for DeepSeek TUI (CodeWhale) based on the recent GitHub activities.

### 1. Today's Highlights
The DeepSeek TUI (CodeWhale) community experienced a massive surge in merged PRs today, primarily driven by the `v0.8.66` milestone focusing on context discipline, token optimization, and architectural refactoring. Major feature implementations include a new lightweight plugin system, ACP (Agent Client Protocol) streaming support for editor integrations like Zed, and "cache-maximal" context handling to leverage DeepSeek V4's capabilities. Additionally, significant improvements were made to agent reliability with intelligent fallback mechanisms for transient tool failures.

### 2. Releases
*No new releases were published in the last 24 hours. However, the heavy volume of closed PRs indicates that a consolidated release is likely imminent.*

### 3. Hot Issues
1. **[#3192](https://github.com/Hmbown/CodeWhale/issues/3192) [enhancement] Agent Client Protocol Registry:** Requests listing CodeWhale in the `agentclientprotocol/registry` to streamline usage within the Zed editor.
2. **[#2870](https://github.com/Hmbown/CodeWhale/issues/2870) [documentation, EPIC] Command-boundary refactor:** Tracks the staged refactoring of command boundaries to improve mergeability and system architecture.
3. **[#3568](https://github.com/Hmbown/CodeWhale/issues/3568) [bug] Plan and Agent mode mixing:** Reports persistent issues where the agent attempts file modifications while operating in a read-only `plan` mode.
4. **[#3495](https://github.com/Hmbown/CodeWhale/issues/3495) [enhancement] Moraine memory backend:** Proposes adopting Moraine for lossless, searchable long-term agent memory via MCP recall tools.
5. **[#1641](https://github.com/Hmbown/CodeWhale/issues/1641) [enhancement] Agent fallback strategy:** Highlights agent stubbornness when dealing with failing external APIs, requesting graceful degradation and alternate tool usage.
6. **[#528](https://github.com/Hmbown/CodeWhale/issues/528) [enhancement] Cache-maximal context mode:** Suggests re-reading active files instead of summarizing them, taking advantage of DeepSeek V4's cheap cached input.
7. **[#3638](https://github.com/Hmbown/CodeWhale/issues/3638) [enhancement] Expose main prompt:** Requests the ability to override base system prompts to repurpose CodeWhale for non-engineering tasks like creative writing.
8. **[#3089](https://github.com/Hmbown/CodeWhale/issues/3089) [cleanup] Stale issue cleanup:** Outlines a safe, automated policy for managing backlog issues without closing critical, long-term roadmap items.
9. **[#2093](https://github.com/Hmbown/CodeWhale/issues/2093) [bug] Hunt verdicts mapping:** Proposes wiring the verifier preview to emit specific pass/partial/fail hunting verdicts.
10. **[#3256](https://github.com/Hmbown/CodeWhale/issues/3256) [bug] Tool-call verbosity:** Requests "collapsed by default" UI behavior for successful tool executions, expanding only on failures to reduce screen noise.

### 4. Key PR Progress
1. **[#3698](https://github.com/Hmbown/CodeWhale/pull/3698) & [#3702](https://github.com/Hmbown/CodeWhale/pull/3702) feat(acp):** Massively improves the Agent Client Protocol adapter by adding concurrent `session/cancel` handling and streaming prompt deltas for real-time rendering in editors like Zed.
2. **[#3699](https://github.com/Hmbown/CodeWhale/pull/3699) feat(plugins):** Introduces a highly anticipated lightweight plugin system, enabling external skills and MCP servers to be bundled and discovered directly from the filesystem.
3. **[#3697](https://github.com/Hmbown/CodeWhale/pull/3697) feat(working-set):** Implements the cache-maximal context mode, injecting the full contents of active files into the prompt rather than just file paths to save tool-calls.
4. **[#3701](https://github.com/Hmbown/CodeWhale/pull/3701), [#3703](https://github.com/Hmbown/CodeWhale/pull/3703) & [#3705](https://github.com/Hmbown/CodeWhale/pull/3705) fix(engine):** A suite of PRs solving issue #1641 by adding fallback guidance, preventing infinite retry loops, and suggesting direct URL fetches upon repeated web search failures.
5. **[#3696](https://github.com/Hmbown/CodeWhale/pull/3696) feat(prompts):** Allows users to override the constitutional system prompt directly from the config directory, opening the door for non-software use cases.
6. **[#3693](https://github.com/Hmbown/CodeWhale/pull/3693) feat(scorecard):** Ships a token/cache/cost scorecard with regression detection to act as a strict release gate for context discipline.
7. **[#3700](https://github.com/Hmbown/CodeWhale/pull/3700) & [#3694](https://github.com/Hmbown/CodeWhale/pull/3694) fix(verifier/goal):** Implements structured "hunt verdict" mapping (hunted/wounded/escaped) for the agent verifier preview.
8. **[#3690](https://github.com/Hmbown/CodeWhale/pull/3690) feat(skills):** Adds locale-aware skill descriptions, significantly saving tokens for users operating in non-English environments (like Chinese).
9. **[#3695](https://github.com/Hmbown/CodeWhale/pull/3695) feat(settings):** Cleans up UI verbosity by officially supporting "collapsed" as the default tool-collapse mode for successful operations.
10. **[#3704](https://github.com/Hmbown/CodeWhale/pull/3704) ci:** Optimizes CI pipelines by keeping necessary checks present but skipping expensive Rust builds for docs/workflow-only PRs.

### 5. Feature Request Trends
*   **Extensibility & Ecosystem Integration:** Users want CodeWhale to play nice with broader dev ecosystems. This is evident in requests for ACP registry listing (#3192), the new plugin architecture (#3692, #3699), and external Moraine memory backend integration (#3495).
*   **Token & Context Efficiency:** Maximizing the cheap cached input of newer LLMs is a massive trend. The community is pushing for active-file materialization (#528), localized skill definitions to cut token bloat (#3354), and strict release gates for context discipline (#3388).
*   **Agent Reliability & UX:** There is a strong desire to make the agent less brittle and more readable. This includes handling API failures gracefully (#1641) and heavily reducing terminal noise by collapsing successful command outputs (#3256).

### 6. Developer Pain Points
*   **Agent Stubbornness:** Developers are frustrated when the agent loops failing tool calls (e.g., hitting anti-bot protections on web searches) instead of pivoting to alternative strategies or asking for user input.
*   **UI Clutter:** The TUI currently suffers from "scaffolding noise," where successful tool executions dump unnecessary standard output, obscuring the actual AI responses and intent.
*   **Mode Bleeding:** Users report occasional state leaks between `plan` and `agent` modes, resulting in unauthorized file modification attempts during brainstorming sessions.

</details>