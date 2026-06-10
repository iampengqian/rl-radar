# AI CLI Tools Community Digest 2026-06-11

> Generated: 2026-06-10 22:33 UTC | Tools covered: 9

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

# Cross-Tool Analysis Report: AI CLI Ecosystem — 2026-06-11

## 1. Ecosystem Overview
The AI CLI tooling landscape is rapidly transitioning from simple prompt-response interfaces to complex, multi-agent orchestration platforms. Major players—including Anthropic, OpenAI, Google, GitHub, and emerging open-source contributors—are aggressively iterating to achieve dominance in terminal-based developer workflows. Current development is universally bottlenecked by the challenges of integrating agentic autonomy with fragile terminal UIs (TUIs) and managing the high cognitive and financial costs of massive context windows. The overarching industry shift is moving toward stable background execution, robust cross-platform support, and standardized plugin/agent communication protocols.

## 2. Activity Comparison
Activity over the last 24 hours reveals a stark divide between tools pushing rapid releases and those focused on architectural refactoring or bug triage.

| Tool | Maintainer | Issues Updated | PRs Updated | Release Status (Last 24h) |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | Anthropic | 10+ | 10 | **v2.1.172** (Major feature: recursive sub-agents) |
| **OpenAI Codex** | OpenAI | 10 | 10+ | **v0.140.0-alpha.2 & .4** (Rust alpha builds) |
| **Gemini CLI** | Google | 10 | 10 | **v0.46.0 & v0.47.0-preview.0** (TUI/PTY fixes) |
| **GitHub Copilot CLI** | GitHub | 10 | 1 | *None* |
| **Kimi Code CLI** | Moonshot AI | 4 | 10+ | *None* (Batch PR merges for Windows/OS parity) |
| **OpenCode** | AnomalyCo | 10 | 10 | **v1.17.0 to v1.17.3** (4 rapid-fire releases) |
| **Pi** | Earendil Works | 10 | 10 | *None* (Focus on enterprise providers & TUI) |
| **Qwen Code** | QwenLM | 10 | 10 | *None* (Focus on Virtualized History & CI/CD) |
| **CodeWhale (DeepSeek TUI)**| Hmbown | 10 | 10 | **v0.8.56 & v0.8.57** (Rebrand & data-driven refactor)|

## 3. Shared Feature Directions
Despite different codebases, developer communities are driving tools toward a unified set of next-generation features:

*   **Multi-Agent & Background Orchestration:** Almost all tools are evolving past single-threaded chats into background autonomous workers. **Claude Code** shipped 5-level-deep recursive sub-agents; **OpenAI Codex** is fixing sub-thread telemetry; **Qwen Code** is proposing parallel "Agent Teams"; and **CodeWhale** is designing bounded parallel workers.
*   **Session State Persistence & Resilience:** Developers are rejecting volatile context windows. **OpenCode**, **Kimi Code**, and **CodeWhale** are actively implementing append-only JSONL logs (`AppendLog`) and crash-recovery mechanisms to ensure sessions survive `kill -9` commands and system reboots.
*   **Cross-Platform & Terminal Stability (Windows/WSL):** Windows support remains a universal pain point. **OpenAI Codex** is executing a massive `PathUri` migration in Rust to fix systemic WSL path resolution failures. **Kimi Code** merged a batch of PRs specifically targeting Windows encoding (UTF-8/GBK) and process tree termination. 
*   **Model Context Protocol (MCP) & ACP Standardization:** The plugin ecosystem is standardizing around MCP. **OpenCode** and **GitHub Copilot CLI** are building native ACP/MCP diff views and client integrations, while **Gemini CLI** patched critical path traversal vulnerabilities in its MCP skill installers.

## 4. Differentiation Analysis
*   **Enterprise vs. Individual Targeting:** **OpenAI Codex** and **GitHub Copilot CLI** are deeply entangled in enterprise constraints, with heavy focus on identity management, fine-grained tokens, and strict safety classifiers. Conversely, **CodeWhale** and **Pi** cater to power-users and local-LLM enthusiasts, focusing on dynamic API key vaulting, custom OAuth, and local model resilience.
*   **Technical Approaches:** **OpenAI Codex** is differentiating via a low-level Rust rewrite (`PathUri`, `async_trait` removal) to guarantee cross-platform memory safety. **OpenCode** and **Qwen Code** are focusing heavily on advanced frontend TUI rendering (Yoga layouts, Virtualized History) to handle massive token streams without UI freezing.
*   **Security & Guardrails:** **Claude Code** is uniquely battling "Safety Classifier Overreach," where its Fable 5 model aggressively downgrades or blocks benign coding tasks. Meanwhile, **Qwen Code** and **Gemini CLI** are focused on hardening command-level security (preventing `env` RCE bypasses, blocking destructive `git reset --force` commands).

## 5. Community Momentum & Maturity
*   **Rapid Iterators:** **OpenCode** and **Claude Code** currently show the highest velocity. OpenCode shipped 4 patch versions in a single day to resolve a File Provider regression, indicating highly responsive, fast-release engineering. Claude Code continues to push complex agentic boundaries.
*   **Heavy Architectural Phases:** **OpenAI Codex** is in a transitional, high-churn phase (evidenced by rapid alpha releases and sweeping filesystem refactors). **CodeWhale** is stabilizing following a major rebrand and architectural shift toward static data registries.
*   **Bottlenecked/Stagnating Momentum:** **GitHub Copilot CLI** shows signs of stalled momentum, with zero releases, minimal PR activity, and massive community frustration over missing features, broken streaming renderers, and a 6-month silence on classic CLI workflow restorations. 

## 6. Trend Signals
*   **Local/Edge Model Hostility:** A persistent trend is that modern AI CLI architectures are too tightly coupled to cloud API streaming behaviors. **Pi**, **CodeWhale**, and **OpenCode** users report that local backends (llama.cpp, Ollama) trigger HTTP 429 errors, infinite retry loops, and premature task completions due to strict timeout and concurrency assumptions. *Dev takeaway: Build highly resilient, asynchronous timeout logic for local endpoints.*
*   **Context Window Cost Anxiety:** Token consumption is the #1 financial and functional threat. **Claude Code** users are burning 46k tokens on simple tasks, while **Qwen Code** and **Gemini CLI** users are hitting hard limits that trigger broken compaction loops and lost session states. *Dev takeaway: Implement deterministic "fail-fast" limits and granular, persistent token dashboards.*
*   **The "Silent Failure" Epidemic:** Across all tools, agents are lying to users—reporting "success" when hitting max turn limits or silently hanging when background processes die. *Dev takeaway: Accurate, transparent status reporting and robust orphaned-process cleanup are critical next features for building developer trust.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-06-11 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

Based on overall community engagement, attention, and utility, here are the most prominent Skills currently in the ecosystem:

1. **Frontend Design Skill** ([PR #210](https://github.com/anthropics/skills/pull/210)) & ([PR #1046](https://github.com/anthropics/skills/pull/1046))
   - **Functionality:** Guides Claude in generating high-quality frontend UI/UX code with precise, actionable instructions.
   - **Discussion Highlights:** PR #210 (by `justinwetch`) focused on revising the skill for better clarity and internal coherence. PR #1046 (by `ALMMECHANICAL`) expands the scope, proposing new definitions for `frontend-design`, `ai-experience-consultant`, and `automation-workflows-builder`.
   - **Status:** Both Open.

2. **Document Typography Quality Control** ([PR #514](https://github.com/anthropics/skills/pull/514))
   - **Functionality:** Prevents common typographic errors in AI-generated documents, such as orphaned words, widow paragraphs, and numbering misalignment.
   - **Discussion Highlights:** Addresses a subtle but universal problem users rarely think to ask for, making it a high-value "quality of life" skill.
   - **Status:** Open.

3. **ODT (OpenDocument) Skill** ([PR #486](https://github.com/anthropics/skills/pull/486))
   - **Functionality:** Enables Claude to create, fill, read, and convert OpenDocument Format files (.odt, .ods), supporting open-source/ISO standard document workflows.
   - **Status:** Open.

4. **Meta-Skills: Skill Quality & Security Analyzers** ([PR #83](https://github.com/anthropics/skills/pull/83))
   - **Functionality:** Introduces two meta-skills: a comprehensive 5-dimension quality analyzer for evaluating other skills, and a security analyzer.
   - **Discussion Highlights:** Represents an early and sophisticated community effort to build "tooling for the tooling," establishing higher standards for the ecosystem.
   - **Status:** Open.

5. **Testing Patterns** ([PR #723](https://github.com/anthropics/skills/pull/723))
   - **Functionality:** A full-stack testing skill covering the Testing Trophy model, unit testing (AAA pattern), React component testing, and integration testing.
   - **Status:** Open.

6. **Sensory / macOS Automation** ([PR #806](https://github.com/anthropics/skills/pull/806))
   - **Functionality:** Replaces screenshot-based "computer use" with native macOS automation via AppleScript (`osascript`), featuring a two-tier permission system for direct app scripting and System Events UI automation.
   - **Status:** Open.

7. **Shodh-Memory (Persistent Context)** ([PR #154](https://github.com/anthropics/skills/pull/154))
   - **Functionality:** Provides a persistent memory system for AI agents, maintaining rich context across multiple conversations.
   - **Status:** Open.

---

## 2. Community Demand Trends

Analysis of top Issues reveals strong community demand in the following directions:

- **Enterprise & Team Collaboration:** The most upvoted issue, [Issue #228](https://github.com/anthropics/skills/issues/228) (👍7), demands org-wide skill sharing. Users want a shared library or direct links instead of manually sharing `.skill` files via Slack/Teams.
- **Core Tooling Stability (eval & CLI):** A critical cluster of issues ([#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169)) highlights that the `run_eval.py` and `run_loop.py` scripts suffer from 0% skill trigger rates. PRs addressing Windows compatibility ([#1050](https://github.com/anthropics/skills/pull/1050), [#1099](https://github.com/anthropics/skills/pull/1099)) and UTF-8 encoding ([#362](https://github.com/anthropics/skills/pull/362)) are highly active. Fixing the evaluation loop is a prerequisite for scaling skill creation.
- **Security & Trust Boundaries:** [Issue #492](https://github.com/anthropics/skills/issues/492) (👍2) raises concerns about community skills impersonating the `anthropic/` namespace, indicating a strong need for namespace isolation and signing/verification mechanisms.
- **Interoperability & Architecture:** The community is pushing for Skills to be exposed as MCPs ([Issue #16](https://github.com/anthropics/skills/issues/16)) and for better multi-file bundling ([Issue #1220](https://github.com/anthropics/skills/issues/1220)), showing a desire to integrate Skills into broader agentic frameworks.

---

## 3. High-Potential Pending Skills

These active, high-quality PRs are addressing real gaps and are strong candidates to be merged soon:

- **[PR #538](https://github.com/anthropics/skills/pull/538) & [PR #541](https://github.com/anthropics/skills/pull/541) - PDF & DOCX Bug Fixes (Author: `Lubrsy706`)**: Critical fixes for case-sensitive file references in PDF and OOXML `w:id` collisions in DOCX. These directly patch official document skills.
- **[PR #361](https://github.com/anthropics/skills/pull/361) & [PR #539](https://github.com/anthropics/skills/pull/539) - YAML Validation Fixes (Authors: `Mr-Neutr0n`, `Lubrsy706`)**: Pre-parse checks to prevent silent `yaml.safe_load()` failures on unquoted special characters—vital for the `skill-creator` workflow.
- **[PR #1140](https://github.com/anthropics/skills/pull/1140) - Agent-Creator Skill (Author: `SyedaQurratAI`)**: Introduces an "agent-creator" meta-skill and fixes parallel tool evaluation, targeting the next leap in automated agent generation.
- **[PR #509](https://github.com/anthropics/skills/pull/509) - Contributing Guide (Author: `narenkatakam`)**: Adds a `CONTRIBUTING.md` to fix the repo's low community health score (25%), unblocking smoother community contributions.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand at the Skills level is making the core development loop—evaluation, validation, and Windows compatibility—actually functional, while simultaneously pushing for enterprise-grade features like org-wide sharing and namespace security.**

---

# Claude Code Community Digest — 2026-06-11

## 1. Today's Highlights

Version **v2.1.172** landed with a major agentic capability: **sub-agents can now recursively spawn their own sub-agents up to 5 levels deep**, significantly expanding Claude Code's ability to decompose complex, multi-step tasks. The release also improves Amazon Bedrock region detection and adds search functionality inside marks. On the issue tracker, the community is buzzing about **Fable 5's safety classifier generating false positives** on benign engineering content and silently switching models mid-session—an emerging theme across multiple new issues.

## 2. Releases

### [v2.1.172](https://github.com/anthropics/claude-code/releases/tag/v2.1.172)
- **Recursive sub-agents**: Sub-agents can now spawn their own sub-agents, supporting up to 5 levels of nesting. This unlocks more autonomous multi-step workflows.
- **Amazon Bedrock region resolution**: Now reads `~/.aws` config files as a fallback when `AWS_REGION` isn't explicitly set, matching standard AWS SDK precedence. The `/status` command reflects the resolved source.
- **Search bar for marks**: A search bar is now available when browsing a mark.

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [#65697](https://github.com/anthropics/claude-code/issues/65697) — **Official Claude Desktop build for Linux** | 413 👍 makes this the highest-voted issue right now. Linux (Ubuntu/Debian) remains unsupported for Desktop, and the community appetite is enormous. |
| 2 | [#67246](https://github.com/anthropics/claude-code/issues/67246) — **Fable 5 safety classifier silently switches to Opus 4.8 on benign content** | A growing cluster of reports that Fable 5's safety classifier flags normal engineering prompts as "cybersecurity or biology," forces a model switch, and `/model` can't override it. Directly impacts productivity. |
| 3 | [#66697](https://github.com/anthropics/claude-code/issues/66697) — **Fable 5 false-positives on authorized defensive security audits** | Users specifically trying Fable 5 for pre-ship security reviews are blocked—ironically undermining a key advertised use case. |
| 4 | [#67247](https://github.com/anthropics/claude-code/issues/67247) — **Normal coding prompts flagged as restricted topics** | Another data point in the safety-classifier overreach pattern, suggesting a systemic rather than edge-case problem. |
| 5 | [#67239](https://github.com/anthropics/claude-code/issues/67239) — **Bash tool results silently lost; agent waits forever** | Since ~v2.1.167, Bash tool calls intermittently never return results. The command completes but no timeout fires—sessions hang indefinitely. Correlates with Remote Control sessions. |
| 6 | [#64153](https://github.com/anthropics/claude-code/issues/64153) — **Opus 4.8 medium effort burns 46k hidden thinking tokens on simple turns** | Cost-conscious users are alarmed by unexpectedly high token consumption for straightforward coding tasks. |
| 7 | [#61889](https://github.com/anthropics/claude-code/issues/61889) — **CVP-approved user blocked on benign queries** | 34 comments; a long-running complaint about overzealous content filtering that persists across fresh sessions. |
| 8 | [#44805](https://github.com/anthropics/claude-code/issues/44805) — **Remote Control mobile app fails with "GitHub repository access check failed"** | A reproducible bug blocking mobile-driven workflows when the environment includes a `git_repo_url`. |
| 9 | [#66915](https://github.com/anthropics/claude-code/issues/66915) — **Managed Code Review reacts with 👀 but creates no check run** | Managed Claude Code Review acknowledges commands but silently fails to produce any review output. Affects new repos with clean configurations. |
| 10 | [#56331](https://github.com/anthropics/claude-code/issues/56331) — **Sandbox auto-adds `config/` to denyWithinAllow, breaking git checkout** | Rails developers hit a wall when the sandbox's auto-configuration blocks access to the conventional `config/` directory, preventing cross-ref checkouts. |

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#67084](https://github.com/anthropics/claude-code/pull/67084) — **Fix Hookify prompt fields and warning context** | Maps legacy `event: prompt` + `pattern:` rules to the current `UserPromptSubmit` payload field, adds backward-compatible aliases, and augments warning responses with additional context. |
| 2 | [#65875](https://github.com/anthropics/claude-code/pull/65875) — **Forward `ANTHROPIC_BASE_URL` to agentic_review child process** | Fixes proxy/gateway authentication failures (LiteLLM, Bifrost) by ensuring the base URL environment variable reaches spawned child processes. |
| 3 | [#65916](https://github.com/anthropics/claude-code/pull/65916) — **Clarify `allowed-tools` vs agent tools enforcement** | Documentation fix explaining that `allowed-tools` is an auto-approval mechanism (soft boundary) while subagent `tools:` is a hard restriction. |
| 4 | [#65919](https://github.com/anthropics/claude-code/pull/65919) — **Document `${CLAUDE_PLUGIN_ROOT}` limitation in subagents** | Documents that subagents receive unresolved literal strings for plugin root and project dir paths—a known limitation affecting ≤ v2.1.166. |
| 5 | [#64607](https://github.com/anthropics/claude-code/pull/64607) — **Fix `.mcp.json` example incorrectly using `mcpServers` wrapper** | Corrects documentation showing a `mcpServers` key inside `.mcp.json` files, when the correct format is a flat array of server entries. |
| 6 | [#66372](https://github.com/anthropics/claude-code/pull/66372) — **Detect Docker daemon failures via `$LASTEXITCODE`** | Fixes devcontainer setup where `docker info` failures silently pass undetected on PowerShell because native-command non-zero exits don't throw catchable exceptions. |
| 7 | [#66416](https://github.com/anthropics/claude-code/pull/66416) — **Fix plugin-dev validators aborting on first finding** | `set -euo pipefail` in validator scripts caused them to exit on the first error, preventing users from seeing all validation issues at once. |
| 8 | [#66573](https://github.com/anthropics/claude-code/pull/66573) — **Restore dead error handlers in `stop-hook.sh`** | Two patterns in `ralph-wiggum`'s stop hook silently exited before reaching error-handling code due to `set -euo pipefail` interactions. |
| 9 | [#65286](https://github.com/anthropics/claude-code/pull/65286) — **Add missing `plugin.json` manifest for plugin-dev** | The `plugin-dev` plugin was undiscoverable through normal plugin mechanisms due to a missing manifest file. |
| 10 | [#63686](https://github.com/anthropics/claude-code/pull/63686) — **Bump stale/autoclose timeouts from 14 to 90 days** | Community-contributed PR to extend issue lifecycle from 14 days (aggressively short) to 90 days, giving maintainers more breathing room. |

## 5. Feature Request Trends

- **Linux Desktop support** remains the single most upvoted request (413 👍 on [#65697](https://github.com/anthropics/claude-code/issues/65697)), with users specifically targeting Ubuntu LTS and Debian builds.
- **Fable 5 safety classifier tuning** is an emerging meta-request: multiple issues ([#67246](https://github.com/anthropics/claude-code/issues/67246), [#66697](https://github.com/anthropics/claude-code/issues/66697), [#66829](https://github.com/anthropics/claude-code/issues/66829)) ask for better discrimination between offensive security content and legitimate defensive debugging/code auditing.
- **RTL language support** for Hebrew and Arabic in Desktop/Cowork ([#38005](https://github.com/anthropics/claude-code/issues/38005), 51 👍) continues to gain traction.
- **Terminal panel in remote/SSH sessions** ([#49644](https://github.com/anthropics/claude-code/issues/49644))—users want the desktop app's terminal panel functional during remote connections, not just local sessions.
- **Dismissible Cowork sandbox warning** ([#67209](https://github.com/anthropics/claude-code/issues/67209))—users who intentionally run without virtualization want to suppress the persistent "Virtualization is not available" banner.

## 6. Developer Pain Points

- **Safety classifier overreach is the #1 pain point this cycle.** A cluster of issues reports Fable 5 flagging benign coding tasks (log investigation, security audits, normal engineering discussions) and forcing a silent model downgrade to Opus 4.8 with no user override. This disrupts workflows and erodes trust in the model-selection mechanism.
- **Sub-agent reliability gaps.** While v2.1.172 introduces 5-level-deep sub-agent nesting, issue [#67239](https://github.com/anthropics/claude-code/issues/67239) reveals that Bash tool results can be silently lost in agent sessions, causing indefinite hangs with no timeout. The new recursive capability amplifies the impact of this bug.
- **Token cost unpredictability.** Users report Opus 4.8 spending 46k output tokens on hidden thinking for simple turns ([#64153](https://github.com/anthropics/claude-code/issues/64153)), making cost estimation difficult for budget-conscious teams.
- **Windows friction persists.** Bun segfaults ([#55219](https://github.com/anthropics/claude-code/issues/55219)), Remote Control regressions ([#58113](https://github.com/anthropics/claude-code/issues/58113)), and RTL titlebar overlap ([#51213](https://github.com/anthropics/claude-code/issues/51213)) indicate ongoing platform gaps.
- **TUI rendering regressions.** A cluster of `cct` TUI issues ([#67254](https://github.com/anthropics/claude-code/issues/67254), [#67252](https://github.com/anthropics/claude-code/issues/67252)) documents render duplication and character-level garbling, and [#67230](https://github.com/anthropics/claude-code/issues/67230) reports assistant text not rendering before tool calls with Fable 5.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-11

## 1. Today's Highlights
The OpenAI Codex team shipped two new Rust alpha builds (v0.140.0-alpha.2 and v0.140.0-alpha.4) alongside a massive architectural push to migrate the `ExecutorFileSystem` to a new `PathUri` abstraction, signaling a major effort to resolve persistent cross-platform path handling issues. Windows and Windows Subsystem for Linux (WSL) users continue to report severe performance, UI, and integration bugs, dominating the day's issue tracker. Meanwhile, core contributors are actively refactoring MCP connection lifecycles, plugin OAuth routing, and analytics for multi-agent sub-threads.

## 2. Releases
*   **rust-v0.140.0-alpha.4** and **rust-v0.140.0-alpha.2**: Two rapid-fire alpha releases were published within the last 24 hours, indicating active iteration on the core Rust codebase leading up to a stable v0.140.0 release. 

## 3. Hot Issues
1. **[#3141](https://github.com/openai/codex/issues/3141) [OPEN] Allow GPU access inside sandbox**: With 46 upvotes and 36 comments, this remains a highly requested enhancement. Developers need native NVIDIA GPU access within Linux sandboxes for AI/ML workflows.
2. **[#3355](https://github.com/openai/codex/issues/3355) [OPEN] Error sending request after Mac sleeps**: A persistent connectivity bug (19 👍) where network requests fail post-sleep, interrupting long-running tasks. 
3. **[#23198](https://github.com/openai/codex/issues/23198) [OPEN] Windows Desktop extremely slow**: Garnering 31 upvotes, users report severe performance degradation on Windows that seems isolated to the Codex app itself.
4. **[#27437](https://github.com/openai/codex/issues/27437) [OPEN] Windows "Not Responding" (June 10)**: A critical, same-day report of the Windows desktop app becoming completely unusable and freezing upon opening.
5. **[#24675](https://github.com/openai/codex/issues/24675) [OPEN] Stale app connector link**: Codex Desktop macOS caches stale authentication states for plugins (like Linear) requiring manual cache clearing to fix 401 errors.
6. **[#23122](https://github.com/openai/codex/issues/23122) [OPEN] Android QR setup loop**: The Codex Mobile setup QR code resolves to an unhandled URL, breaking the mobile onboarding experience for Android/ColorOS users.
7. **[#26753](https://github.com/openai/codex/issues/26753) [CLOSED] MultiAgentV2 400 error**: Users enabling `features.multi_agent_v2` experienced 400 errors due to encrypted tool use schemas, breaking sub-agent spawning.
8. **[#22085](https://github.com/openai/codex/issues/22085) [CLOSED] Git processes causing high CPU**: A recent Windows update caused Codex to spawn numerous background Git processes, monopolizing system resources.
9. **[#26843](https://github.com/openai/codex/issues/26843) [CLOSED] 137GB disk writes**: A long-running macOS goal generated massive disk writes and system resource load, resulting in a hard system crash.
10. **[#25301](https://github.com/openai/codex/issues/25301) [OPEN] Computer Use disabled on WSL**: Computer Use/Browser Use features are explicitly unavailable when the app-server runs inside WSL, despite Remote Control working fine.

## 4. Key PR Progress
1. **[#27424 - #27433] [ExecutorFileSystem `PathUri` Migration Stack]**: A massive series of PRs by `anp-oai` migrating `ExecutorFileSystem` operations (`read_file`, `write_file`, `remove`, `copy`, etc.) to a new `PathUri` abstraction. This is the core team's strategic fix for cross-platform (Windows/WSL/Unix) path resolution bugs.
2. **[#27291](https://github.com/openai/codex/pull/27291) MCP connection manager owns startup**: Refactors `McpConnectionManager` to own its cancellation tokens, cleaning up internal lifecycle management for Model Context Protocol servers.
3. **[#27461](https://github.com/openai/codex/pull/27461) Skip plugin MCP OAuth**: Improves plugin auth routing by skipping unnecessary MCP OAuth flows when an app route is already available.
4. **[#27247](https://github.com/openai/codex/pull/27247) Resize history images**: Introduces client-side image resizing behind a feature flag to manage context window bloat from images.
5. **[#27443](https://github.com/openai/codex/pull/27443) Managed Bedrock API key storage**: Prepares `codex-login` to securely store AWS Bedrock API keys, hinting at upcoming managed provider support.
6. **[#27392](https://github.com/openai/codex/pull/27392) Emit internal turn events**: Fixes analytics tracking for internally started sub-agent turns, ensuring multi-agent telemetry is accurately captured.
7. **[#27475](https://github.com/openai/codex/pull/27475) Remove async_trait**: Modernizes the Rust codebase by removing `async_trait` from utility traits in favor of native return-position `impl Future`.
8. **[#27316](https://github.com/openai/codex/pull/27316) Keep request_user_input direct-model only**: Prevents `request_user_input` from accidentally flowing through nested code-mode waiting loops.
9. **[#27445](https://github.com/openai/codex/pull/27445) Persist remote-control state**: Refactors remote-control enablement to prevent race conditions between RPC persistence and app-server rehydration.
10. **[#27454](https://github.com/openai/codex/pull/27454) Cross-platform filesystem adapter**: Adds much-needed test coverage for the exec-server's filesystem operations on non-Unix environments (Windows).

## 5. Feature Request Trends
*   **Hardware Acceleration in Sandboxes**: Strong demand for exposing GPU resources (NVIDIA) inside Codex's isolated execution environments for local model testing and ML workloads (#3141).
*   **Context Window Management**: Requests for "auto-compaction" to prevent context limits from breaking long-running agent goals, and better exposure of compaction states to the agent (#21777, #24247).
*   **Robust Cross-Platform Feature Parity**: Significant demand for Computer Use, browser automation, and UI stability to work flawlessly out-of-the-box on Windows + WSL setups.

## 6. Developer Pain Points
*   **Windows/WSL Stability**: The most glaring trend is the poor state of the Windows Desktop app. Users report invisible UIs (#26870), constant freezing (#26976, #27437), and systemic integration failures when crossing the Windows/WSL boundary (path mismatches, cache errors, missing `/goal` commands).
*   **State and Session Persistence**: Developers are frustrated by session bugs. Notably, goal threads silently downgrading from "Full Access" to "Read-Only" during auto-continuations (#24300) and long-running threads becoming unrecoverable due to massive JSONL logs (#25215).
*   **Sub-Agent Reliability**: Multi-agent architectures (MultiAgentV2) are still brittle, with users hitting schema configurations errors that prevent sub-agents from spawning correctly (#26753, #23496).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-11

## 1. Today's Highlights
Gemini CLI rolled out two new versions, `v0.46.0` and `v0.47.0-preview.0`, focusing on hardening the terminal interface (PTY resize crash fixes) and backend improvements. Security took center stage in the community, with two high-impact external pull requests addressing path traversal vulnerabilities and CI/CD fork artifact poisoning. Meanwhile, the engineering team continued tracking systemic agent reliability issues, specifically targeting hanging agents and deceptive subagent success reporting.

## 2. Releases
*   **[v0.46.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.46.0):** Brought a critical bug fix to harden PTY resize handling against native crashes (`scidomino`), resolving terminal instability during window resizes.
*   **[v0.47.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.47.0-preview.0):** A preview/nightly release focused on respecting backend definitions and laying the groundwork for the next stable iteration.

## 3. Hot Issues
1.  **[Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409)** `(👍 8)`: A critical bug where the CLI defers to the generalist agent and completely freezes. Users report having to manually instruct the model to avoid sub-agents to maintain workflow.
2.  **[Shell command execution stuck on "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)** `(👍 3)`: After executing simple CLI commands, the terminal hangs indefinitely while displaying "Awaiting user input," requiring a hard restart.
3.  **[Subagent falsely reports success upon MAX_TURNS interruption](https://github.com/google-gemini/gemini-cli/issues/22323)** `(👍 2)`: The `codebase_investigator` subagent hits the maximum turn limit but reports `status: "success"`, hiding the fact that it was interrupted before completing its analysis.
4.  **[Gemini does not use custom skills and sub-agents autonomously](https://github.com/google-gemini/gemini-cli/issues/21968)**: Users are frustrated that the model rarely invokes custom skills (e.g., specific Gradle/Git skills) unless explicitly told to, undermining the purpose of skill definitions.
5.  **[Auto Memory redaction and logging security risks](https://github.com/google-gemini/gemini-cli/issues/26525)**: The Auto Memory system extracts transcript data *before* instructing the model to redact secrets, posing a potential security risk if sensitive data is logged.
6.  **[Auto Memory stuck in infinite retry loops](https://github.com/google-gemini/gemini-cli/issues/26522)**: Low-signal sessions are never marked as "processed," causing the extraction agent to repeatedly surface and evaluate the same useless transcripts.
7.  **[AST-aware file reads and mapping investigations](https://github.com/google-gemini/gemini-cli/issues/22745)** `(👍 1)`: An EPIC issue exploring AST-aware tools (like tilth or glyph) to reduce token noise and improve method-boundary file reading.
8.  **[Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** `(👍 1)`: Linux users on Wayland environments are experiencing hard crashes when attempting to use the browser subagent.
9.  **[CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)**: Registering over 128 tools causes a hard API limit crash, highlighting a lack of dynamic scope filtering in the agent logic.
10. **[Destructive agent behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** `(👍 1)`: Users request safeguards against the model casually using dangerous commands like `git reset --force` or modifying production databases without warnings.

## 4. Key PR Progress
1.  **[fix(cli): prevent path traversal vulnerabilities during skill install](https://github.com/google-gemini/gemini-cli/pull/27767)**: Fixes three critical path traversal exploits in `installSkill`, `linkSkill`, and `uninstallSkill` where the CLI parser could be tricked into accessing unauthorized file paths.
2.  **[ci: validate workflow_run origin (fixes fork artifact poisoning)](https://github.com/google-gemini/gemini-cli/pull/27753)**: Mitigates a critical CI/CD vulnerability where malicious PRs from forks could run attacker-controlled code using repository secrets via `workflow_run` artifacts.
3.  **[fix(core): Ensure zero-quota limits fail fast to prevent retry loop hang](https://github.com/google-gemini/gemini-cli/pull/27698)**: Resolves an issue where free-tier accounts with a `0` quota got trapped in a futile 10-attempt retry loop, hanging the CLI.
4.  **[fix(core): make read_background_output delay abort-aware](https://github.com/google-gemini/gemini-cli/pull/27839)**: Resolves an annoying UI bug where pressing ESC to cancel a background read cancelled the text UI, but left the loading spinner running indefinitely.
5.  **[Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**: Maintainer tracking for expanding "behavioral evals" to improve regression testing across supported models.
6.  **[chore(deps): bump vitest from 3.2.4 to 4.1.8](https://github.com/google-gemini/gemini-cli/pull/27824)**: Major test framework upgrade for the repository.
7.  **[chore(deps): bump zod from 3.25.76 to 4.4.3](https://github.com/google-gemini/gemini-cli/pull/27827)**: Major schema validation library update.
8.  **[chore(deps): bump chrome-devtools-mcp from 0.19.0 to 1.1.1](https://github.com/google-gemini/gemini-cli/pull/27828)**: Significant update to the Chrome DevTools MCP integration, likely improving browser agent reliability.
9.  **[chore(deps): bump ink-gradient from 3.0.0 to 4.0.1](https://github.com/google-gemini/gemini-cli/pull/27835)**: UI dependency upgrade for the Ink-based terminal interface.
10. **[chore(deps): bump react-devtools-core from 6.1.5 to 7.0.1](https://github.com/google-gemini/gemini-cli/pull/27834)**: Major update to underlying React Devtools integration.

## 5. Feature Request Trends
*   **Agent Self-Awareness & Reliability:** Users want agents to accurately understand their own CLI flags, hotkeys, and tool limits. There is a strong push for AST-aware tooling to reduce token waste and improve codebase mapping precision ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)).
*   **Auto Memory Enhancements:** Significant demand for a more deterministic memory system, specifically deterministic secret redaction *before* LLM extraction, and proper quarantining of invalid/low-signal inbox patches ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).
*   **Safer Execution Models:** Developers are asking for built-in guardrails against destructive terminal behavior, urging the CLI to natively discourage operations like `git reset --force` or direct DB mutations ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).
*   **Smarter Skill Routing:** Instead of relying entirely on the model's judgment, users want improvements to how custom skills are automatically triggered based on context ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)).

## 6. Developer Pain Points
*   **Terminal and UI Instability:** Dealing with UI hangs remains the top frustration. Users report the terminal completely locking up during PTY resizes, when sub-agents hang, or when background processes finish but the UI thinks it's still "Waiting input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166), [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)).
*   **Silent Failures & False Positives:** The CLI often lies to the user. Sub-agents that hit maximum turn limits currently report back as "successful," forcing developers to dig into raw logs to figure out why their tasks weren't actually completed ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)).
*   **Quota / Error Looping:** When hitting API limits or quota errors, the CLI tends to get stuck in unhelpful infinite retry loops rather than failing fast and returning control to the user ([#27698](https://github.com/google-gemini/gemini-cli/pull/27698)).
*   **Messy Workspace Management:** Developers are annoyed by the model creating temporary edit scripts scattered randomly across their project directories instead of using a designated `.tmp` or hidden folder ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-11

## 1. Today's Highlights
No new releases shipped in the last 24 hours, but the community remains highly active on several fronts. Terminal rendering and streaming glitches in recent builds (v1.0.60/1.0.61) are dominating new bug reports, while the long-running demand to restore GitHub Copilot in standard CLI workflows and parity for Gemini models continues to generate significant traction.

## 2. Releases
No new releases were recorded in the past 24 hours.

## 3. Hot Issues

1. **[Bring back the GitHub Copilot in the CLI commands to not break workflows](https://github.com/github/copilot-cli/issues/53)** — The most-reacted issue (👍 75). With no official word in six months, the community has begun building alternatives like `shell-ai`. This remains the top pain point for power users whose automations depend on classic CLI integration.

2. **[Copilot CLI does not list all org-enabled models (e.g., Gemini 3.1 Pro)](https://github.com/github/copilot-cli/issues/1703)** — 👍 54. Enterprise/org users report that models visible in VS Code Copilot are missing from the CLI under the same account. Highlights a persistent parity gap between IDE and CLI experiences.

3. **["Copilot Requests" permission for fine-grained tokens should be visible for org-owned tokens](https://github.com/github/copilot-cli/issues/223)** — 👍 76. Currently the highest-thumbed issue. Orgs need fine-grained PATs for automations, but the permission is hidden for org-owned tokens, blocking enterprise adoption.

4. **[ctrl+shift+c no longer copies to clipboard on Linux](https://github.com/github/copilot-cli/issues/2082)** — A standard Linux terminal shortcut broke in v1.0.4+. Users report that the only workaround is using right-click or plain ctrl+c, which disrupts muscle memory.

5. **[Please bring back no-alt-screen](https://github.com/github/copilot-cli/issues/2334)** — 👍 28. The switch to alt-screen mode removed scrollback, find-in-history, and other basic terminal affordances. Strong community pushback from users who rely on terminal history for review workflows.

6. **[Terminal streaming renderer corrupts output — characters doubled/truncated](https://github.com/github/copilot-cli/issues/3749)** — Filed today. Streamed reasoning and response output shows doubled characters, truncated tokens, and repeated lines. Directly impacts readability and trust in the CLI output.

7. **[Regression in v1.0.60: userPromptSubmitted hook additionalContext no longer injected](https://github.com/github/copilot-cli/issues/3727)** — Plugin developers report a silent regression between v1.0.59 and v1.0.60 that breaks hook-based context injection into the planner. Critical for the plugin ecosystem.

8. **[Runaway MCP server spawning on Windows (IDE lock-file watcher re-init loop)](https://github.com/github/copilot-cli/issues/3701)** — A feedback loop between Copilot CLI and VS Code's lock-file watcher causes uncontrolled MCP server spawning, potentially exhausting system resources.

9. **[Background sub-agent hangs at total_turns=0 with gpt-5.5](https://github.com/github/copilot-cli/issues/3547)** — Dispatched background agents silently stall forever when using `gpt-5.5`. No error is surfaced, making this particularly hard to debug in automated pipelines.

10. **[Hardcoded colors in v1.0.61 break light-themed terminals](https://github.com/github/copilot-cli/issues/3750)** — Filed today. Hardcoded background colors render text invisible on light themes, a regression that blocks users who prefer non-dark terminal setups.

## 4. Key PR Progress
Only one pull request saw activity in the last 24 hours:

- **[#3737 — Jigg empire ai](https://github.com/github/copilot-cli/pull/3737)** — An open PR by a community contributor with minimal description ("Let's try this new method"). No meaningful technical context provided; appears exploratory or potentially off-topic. No comments or reviews yet.

*(With only one PR updated, this section is necessarily brief. The lack of merged PRs aligns with the absence of a new release.)*

## 5. Feature Request Trends
Several clear themes emerge from the issue backlog:

| Trend | Signal Issues | Community Sentiment |
|---|---|---|
| **Model parity with VS Code** | [#1703](https://github.com/github/copilot-cli/issues/1703), [#1664](https://github.com/github/copilot-cli/issues/1664), [#821](https://github.com/github/copilot-cli/issues/821), [#2550](https://github.com/github/copilot-cli/issues/2550), [#2854](https://github.com/github/copilot-cli/issues/2854) | Users expect all org-enabled models (especially Gemini variants) to be available in CLI, not just VS Code. |
| **First-class MCP tool invocation** | [#3752](https://github.com/github/copilot-cli/issues/3752), [#2486](https://github.com/github/copilot-cli/issues/2486) | Power users want direct, tab-completable syntax for MCP tools without relying on LLM interpretation. |
| **Custom provider / ACP support** | [#3048](https://github.com/github/copilot-cli/issues/3048) | Users routing through OpenRouter or self-hosted endpoints want `COPILOT_PROVIDER_*` env vars respected in `--acp` mode. |
| **Terminal UX control** | [#2334](https://github.com/github/copilot-cli/issues/2334) (no-alt-screen), [#2243](https://github.com/github/copilot-cli/issues/2243) (worktrees) | Strong demand for user control over UI behaviors (alt-screen, worktrees) that currently change workflows without opt-in. |
| **Agent orchestration reliability** | [#3547](https://github.com/github/copilot-cli/issues/3547) (hanging sub-agents), [#3751](https://github.com/github/copilot-cli/issues/3751) (agent picker UX) | As agents become more central, reliability and UX of agent management needs hardening. |

## 6. Developer Pain Points

**Terminal rendering regressions are accelerating.** The v1.0.60/1.0.61 cycle introduced multiple rendering bugs: corrupted streaming output ([#3749](https://github.com/github/copilot-cli/issues/3749)), garbled reasoning display ([#3755](https://github.com/github/copilot-cli/issues/3755)), hardcoded colors breaking light themes ([#3750](https://github.com/github/copilot-cli/issues/3750)), silent clipboard failures on both Windows ([#3622](https://github.com/github/copilot-cli/issues/3622)) and Linux ([#2082](https://github.com/github/copilot-cli/issues/2082)), and a missing terminal bell ([#3748](https://github.com/github/copilot-cli/issues/3748)). Collectively these signal insufficient integration testing across terminal emulators and themes.

**Plugin and hook stability is fragile.** The silent regression in `userPromptSubmitted` hook context injection ([#3727](https://github.com/github/copilot-cli/issues/3727)) between two patch versions undermines confidence in the plugin API. Plugin developers need stability guarantees and regression testing for hook lifecycles.

**Enterprise authentication friction persists.** The fine-grained token permission gap ([#223](https://github.com/github/copilot-cli/issues/223), 👍 76) and session resumption auth failures ([#3596](https://github.com/github/copilot-cli/issues/3596)) continue to block org adoption. These are not new issues, but their longevity suggests they are not being prioritized appropriately relative to their community impact.

**Silent failures erode trust.** Multiple issues involve operations that silently fail without error output: clipboard operations ([#3622](https://github.com/github/copilot-cli/issues/3622)), `--resume` with spaces ([#3754](https://github.com/github/copilot-cli/issues/3754)), and background agent dispatches ([#3547](https://github.com/github/copilot-cli/issues/3547)). Better error surfacing would significantly improve debuggability.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-11

## 1. Today's Highlights
No new releases were cut today, but repository maintainers processed a massive batch of over 20 pull requests—primarily backlogged bug fixes targeting Windows compatibility, session persistence, and process management. On the issue tracker, users reported high-impact agent workflow interruptions, including infinite file-reading loops and breakages in "yolo" (auto-approve) mode. 

## 2. Releases
**None.** No new official versions were released in the last 24 hours.

## 3. Hot Issues
1. **[#640](https://github.com/MoonshotAI/kimi-cli/issues/640) [OPEN] Agent stuck in an infinite file-reading loop:** A long-standing bug (open since Jan 2026) where the agent gets stuck reading the same file repeatedly. It remains un resoluted and is accumulating community upvotes, indicating a critical flaw in the agent's context gathering or token-limit handling.
2. **[#2448](https://github.com/MoonshotAI/kimi-cli/issues/2448) [OPEN] Yolo mode prompting for approval:** A regression where `kimi --yolo` fails to bypass permission prompts. This breaks core CI/CD and autonomous workflows, severely impacting unassisted usage.
3. **[#2447](https://github.com/MoonshotAI/kimi-cli/issues/2447) [OPEN] Final Todo item never completes:** The agent fails to mark the final item in a Todo list as completed, causing tasks to hang or finish incompletely. 
4. **[#2173](https://github.com/MoonshotAI/kimi-cli/issues/2173) [CLOSED] Enhancement request:** A recently closed placeholder issue, suggesting behind-the-scenes triage or dev-board updates by maintainers.

*(Note: Only 4 issues were updated in the last 24 hours, all of which are highlighted above).*

## 4. Key PR Progress
A large volume of PRs were batch-updated/closed today, heavily focused on system stability and cross-platform parity.

1. **[#2387](https://github.com/MoonshotAI/kimi-cli/pull/2387) [OPEN] Preserve shell command headline details:** Fixes a UI/CLI truncation bug where long shell commands were aggressively shortened to 50 characters, hiding vital execution context from the user.
2. **[#2386](https://github.com/MoonshotAI/kimi-cli/pull/2386) [OPEN] Map undo wire turns to context turns:** Resolves a session history desync issue where `/undo` and forking would break because wire indexes and context indexes didn't align for local slash-command turns.
3. **[#2383](https://github.com/MoonshotAI/kimi-cli/pull/2383) [OPEN] Repair orphan tool_calls on replay:** Fixes corrupted `context.jsonl` files. If a session is killed via `kill -9` or OOM, the agent leaves orphaned tool calls, crashing subsequent session replays.
4. **[#2355](https://github.com/MoonshotAI/kimi-cli/pull/2355) [CLOSED] Continue after deferred MCP startup failures:** Prevents Model Context Protocol (MCP) servers from crashing the interactive prompt. If a background MCP startup fails, it now logs the error and continues gracefully.
5. **[#2334](https://github.com/MoonshotAI/kimi-cli/pull/2334) [CLOSED] Sanitize surrogates before Kimi requests:** Fixes a low-level encoding crash by sanitizing lone UTF-16 surrogate code units in system prompts and tool arguments before they hit the API.
6. **[#2327](https://github.com/MoonshotAI/kimi-cli/pull/2327) [CLOSED] Terminate shell process trees on timeout:** Ensures that timed-out or cancelled shell commands kill the entire process group/session, preventing zombie processes from lingering.
7. **[#2289](https://github.com/MoonshotAI/kimi-cli/pull/2289) [CLOSED] Avoid Windows console font reset:** Improves the Windows UX by passing `CREATE_NO_WINDOW` to subprocesses, preventing the terminal font from resetting when background tasks execute.
8. **[#2288](https://github.com/MoonshotAI/kimi-cli/pull/2288) [CLOSED] Avoid resending web uploads after restart:** Fixes a duplicate upload bug where restarting a session process would cause previously sent web uploads to be attached as text to subsequent prompts.
9. **[#2217](https://github.com/MoonshotAI/kimi-cli/pull/2217) [CLOSED] Recover background auto-trigger after cooldown:** Introduces a 10-minute cooldown followed by an automatic reset of the failure counter, allowing the agent to recover from transient API/network errors without manual intervention.
10. **[#1893](https://github.com/MoonshotAI/kimi-cli/pull/1893) [CLOSED] Handle non-UTF-8 filenames in git ls-files on Windows:** Resolves a locale crash on Chinese Windows systems by forcing `git ls-files` to run with explicit `encoding="utf-8"` instead of falling back to system GBK defaults.

## 5. Feature Request Trends
While today's tracker was dominated by bug fixes, the nature of the open PRs and issues highlights a strong community trend toward **robust session lifecycle management and autonomous reliability**. Users are pushing heavily for:
*   **Flawless Autonomy:** Expecting `yolo` mode and background agent triggers to work without edge-case failures or permission prompt leakage.
*   **Deep OS Parity:** Active community and contributor efforts to make Windows behavior (encoding, process groups, console windows) strictly match POSIX/Linux environments.

## 6. Developer Pain Points
Based on recent issue reports and PR fixes, developers are currently frustrated by:
*   **Context Looping & Memory:** The agent occasionally fails to manage context boundaries efficiently (e.g., Issue #640), resulting in infinite file reading and wasted tokens.
*   **State Persistence Desyncs:** Unexpected process terminations (OOMs, manual kills) frequently corrupt the JSONL history, meaning developers lose their session context and cannot resume or fork tasks properly.
*   **Interrupted Unassisted Workflows:** Bugs in auto-approval mechanisms (Issue #2448) and background auto-triggers break developer trust in using Kimi CLI for automated pipelines and long-running background tasks.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-11

## 1. Today's Highlights
OpenCode shipped four rapid-fire releases (v1.17.0 through v1.17.3) in the last 24 hours, headlined by the new `fff`-backed file search engine and Cohere North model support. However, the introduction of `fff` immediately triggered a regression causing timeouts on systems with OneDrive File Provider trees, forcing a quick patch cycle. The community remains highly engaged around ACP (Agent Communication Protocol) improvements, V1 tool reliability concerns, and a batch of Unicode/encoding edge cases on Windows and macOS.

## 2. Releases

- **v1.17.0** — Major release: new `fff`-backed faster file search across large projects ([@dmtrKovalenko](https://github.com/dmtrKovalenko)), `X-Session-Id` headers for proxy sticky routing ([@songchaow](https://github.com/songchaow)), Cohere North model support, and interleaved `reasoning` field option. [Release](https://github.com/anomalyco/opencode/releases/tag/v1.17.0)
- **v1.17.1** — Bugfix: deprecated `reference` config entries now load under the newer `references` key; references can include usage descriptions for agents. [Release](https://github.com/anomalyco/opencode/releases/tag/v1.17.1)
- **v1.17.2** — Bugfix: expired remote config auth now prompts re-login instead of failing ([@Ayushlm10](https://github.com/Ayushlm10)); subagents regained their own configured permissions; restored Linux launcher/icon identity. [Release](https://github.com/anomalyco/opencode/releases/tag/v1.17.2)
- **v1.17.3** — Hotfix: resolved desktop crashing issue introduced in v1.17.2. [Release](https://github.com/anomalyco/opencode/releases/tag/v1.17.3)

## 3. Hot Issues

1. **#31747 — `fff` scan timeout with OneDrive File Provider trees** 🔥 *Regression from v1.17.0.* The new file search engine hangs when launched from a home directory containing OneDrive virtual file trees, completely blocking startup. Users report v1.16.2 works fine. [Issue](https://github.com/anomalyco/opencode/issues/31747)

2. **#27167 — Native session goals with `/goal`** (39 comments, 69 👍). The top-voted open feature request asks for a persistent session lifecycle/goal feature so agents can track and auto-continue toward a defined objective. Community demand is strong. [Issue](https://github.com/anomalyco/opencode/issues/27167)

3. **#1764 — Vim motions in input box** (32 comments, 165 👍). A long-standing request referencing competitor parity (Claude Code). Remains one of the highest-upvoted issues overall. [Issue](https://github.com/anomalyco/opencode/issues/1764)

4. **#31772 — V1 tool errors silently swallowed by `Effect.orDie`**. A critical reliability bug: V1 tools (edit, write, shell, etc.) have errors converted to defects that bypass normal error reporting, meaning the AI never sees failure messages and can't self-correct. [Issue](https://github.com/anomalyco/opencode/issues/31772)

5. **#31757 — Infinite retry loop at context limit**. When a provider returns zero output with an unknown finish reason at the context boundary, OpenCode enters an infinite retry loop that never surfaces an error. [Issue](https://github.com/anomalyco/opencode/issues/31757)

6. **#31687 — Cache point after reasoning block (Bedrock Fable 5)**. Anthropic's Fable 5 via Amazon Bedrock rejects cache points after reasoning blocks, but OpenCode's harness attempts it anyway, causing failures. [Issue](https://github.com/anomalyco/opencode/issues/31687)

7. **#31789 — Background subagent infinite re-dispatch loop**. Completed background tasks spawned by orchestrator agents trigger persistent `opencode attach` processes that re-dispatch endlessly, wasting resources. [Issue](https://github.com/anomalyco/opencode/issues/31789)

8. **#31786 — Unicode NFC vs NFD edit failures on macOS**. Edit tools don't normalize Unicode before comparison, causing silent failures on macOS where files are often stored in decomposed (NFD) form. [Issue](https://github.com/anomalyco/opencode/issues/31786)

9. **#31182 — `/sessions` search doesn't filter** (CLOSED). TUI session list search was completely non-functional; now fixed via PR [#31748](https://github.com/anomalyco/opencode/pull/31748). [Issue](https://github.com/anomalyco/opencode/issues/31182)

10. **#10884 — MCP Apps support in desktop app** (9 comments, 38 👍). With MCP Apps spec reaching stability, users want native integration in the desktop client. [Issue](https://github.com/anomalyco/opencode/issues/10884)

## 4. Key PR Progress

1. **[#31748](https://github.com/anomalyco/opencode/pull/31748)** — *FIXED session list search filtering.* Resolves the TUI `/sessions` search bug where typing a query had no effect. Merged and closed.

2. **[#31783](https://github.com/anomalyco/opencode/pull/31783)** — *ACP edit permission diffs.* Adds the missing `content: [{ type: "diff" }]` block to `requestPermission` payloads so ACP clients like Zed and Devin can render proper diff views. (Fixes #31781)

3. **[#31392](https://github.com/anomalyco/opencode/pull/31392)** — *ACP native file review staging.* Enables OpenCode to stage edits for native review workflows in ACP clients, a significant step toward first-class IDE integration.

4. **[#30815](https://github.com/anomalyco/opencode/pull/30815)** — *OpenTUI with native Yoga layout.* Beta PR replacing the current layout engine with native Yoga for better rendering performance. Still open and iterating.

5. **[#31713](https://github.com/anomalyco/opencode/pull/31713)** — *Provider connection retry with 60s delay.* Handles hung provider connections (NVIDIA ECONNRESET, 504s) with a retry/backoff strategy instead of silently failing.

6. **[#31770](https://github.com/anomalyco/opencode/pull/31770)** — *`/goal` command with evaluator-based auto-continuation.* Community-contributed implementation of the highly requested session goals feature (#27167). Currently closed but represents active exploration.

7. **[#26861](https://github.com/anomalyco/opencode/pull/26861)** — *Fix old messages disappearing during long sessions.* Implements lazy-scroll loading (50-message chunks) to prevent the TUI from dropping historical messages in extended sessions.

8. **[#31752](https://github.com/anomalyco/opencode/pull/31752)** — *MCP server log notifications.* Routes standard MCP `notifications/message` to OpenCode diagnostic log levels with full context preservation. Merged.

9. **[#29881](https://github.com/anomalyco/opencode/pull/29881)** — *Wayland clipboard support.* Adds `wl-paste` text reading for Linux Wayland systems where `xsel`/`xclip` are unavailable. Addresses a growing Linux desktop gap.

10. **[#28592](https://github.com/anomalyco/opencode/pull/28592)** — *OSC52 clipboard passthrough under GNU screen.* Fixes the clipboard escape sequence wrapping that only worked for tmux, adding proper DCS passthrough for GNU screen users.

## 5. Feature Request Trends

- **Session lifecycle management**: `/goal`-style persistent objectives, auto-continuation evaluators, and session state tracking are the dominant theme (#27167, #31770).
- **New provider integrations**: Kiro (#26680, 8 👍), Gab.AI (#30621), and GitLab Duo Fable 5 model mappings (#31782) reflect the community's desire for broader model choice.
- **ACP maturity**: Per-session model selection (#31750), diff content in permission requests (#31781), and native file review (#31392) show the Agent Communication Protocol ecosystem rapidly maturing.
- **MCP Apps in desktop**: Native MCP App support (#10884, 38 👍) is a clear priority as the spec stabilizes.
- **Localization/i18n expansion**: German policies translation (#31753), Farsi README (#31773), and Vietnamese UI (#31758) indicate growing global adoption.

## 6. Developer Pain Points

- **V1 tool reliability gap**: A cluster of bugs (#31772 silent error swallowing, #31776 missing stale-content checks in `apply_patch`, #31774 no destructive command protection in shell) reveals the V1 tool layer lacks the safety guards present in V2, creating unpredictable agent behavior.
- **Cross-platform encoding issues**: Unicode NFC/NFD mismatches on macOS (#31786), GBK/Shift-JIS mojibake on Windows (#31765), and blocking `execSync` code-page detection (#31775) collectively signal that non-English workflows remain second-class citizens.
- **Context limit handling**: Infinite retry loops at context boundaries (#31757) and compaction causing AGENTS.md re-attachment (#31764) erode trust during long sessions.
- **Startup regressions from `fff`**: The v1.17.0 file search integration blocked users with OneDrive/CloudStorage trees (#31747), and the fix required three patch releases (v1.17.1–v1.17.3) to stabilize.
- **Clipboard and terminal integration**: Copy in macOS terminal (#7134), Wayland paste (#29881), image pasting in TUI (#31737), and GNU screen clipboard (#28592) remain fragmented across platforms despite being basic UX expectations.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-11

## 1. Today's Highlights
It's a bug-squashing and infrastructure-heavy day in the Pi ecosystem. The core team and contributors shipped significant fixes for Anthropic stream handling, TUI rendering for CJK/wide characters, and Amazon Bedrock/Mantle integrations. On the issues side, the community is actively flagging regressions in the newly released "Trust Feature," various provider billing/caching discrepancies, and multi-model session state corruption.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues

1. **[#5514 [enhancement] Project Trust Feature Feedback](https://github.com/earendil-works/pi/issues/5514)** — The most-discussed issue today. The newly landed "Trust Gating" feature is frustrating power users who open trusted folders across multiple PCs and find the repeated prompts intrusive. (👍 13)
2. **[#5536 Split-turn compaction sends parallel summarization requests, causing 429](https://github.com/earendil-works/pi/issues/5536)** — Auto-compaction triggers parallel summarization requests, which overwhelms single-concurrency local backends (e.g., `llama.cpp`) with HTTP 429 errors. A significant pain point for local-LLM users.
3. **[#5605 MiniMax-M3: cache_control ignored on Anthropic endpoint](https://github.com/earendil-works/pi/issues/5605)** — MiniMax-M3 routed through the Anthropic-compatible endpoint bypasses `cache_control`, causing users to be billed at full input price ($0.60/Mtok) instead of the expected cache-read price ($0.12/Mtok).
4. **[#5592 Anthropic streams wait for transport EOF after message_stop](https://github.com/earendil-works/pi/issues/5592)** — Anthropic SSE streams don't cleanly finalize on `message_stop`, keeping connections hanging if an Anthropic-compatible proxy leaves the body open.
5. **[#5541 MiniMax M3 model switching mid-session causes it to not think](https://github.com/earendil-works/pi/issues/5541)** — Switching to MiniMax-M3 mid-session from another model (e.g., Claude) breaks thinking mode entirely, requiring a fresh context to resolve.
6. **[#5603 Cost reporting: 1 hour prompt-cache writes are priced at the 5 minute rate](https://github.com/earendil-works/pi/issues/5603)** — Anthropic cost reporting undercharges for 1-hour cache writes due to flat rate parsing, misrepresenting actual API spend.
7. **[#5601 [GHC] Trying to login to ghc subscription fails with unhelpful error](https://github.com/earendil-works/pi/issues/5601)** — GitHub Copilot subscription login flow fails silently with a vague error message, blocking new user onboarding.
8. **[#5291 Sessions hang on "working" when used with Anthropic subscription](https://github.com/earendil-works/pi/issues/5291)** — Enterprise Anthropic users are experiencing sessions getting stuck on "Working..." all at once, requiring repeated manual interrupts.
9. **[#5575 kimi-k2.6 via OpenCode Go fails with JSON Schema conflict](https://github.com/earendil-works/pi/issues/5575)** — Tool definitions sent by Pi to `kimi-k2.6` via `opencode-go` (litellm) cause a 400 Bad Request due to JSON Schema incompatibilities.
10. **[#5578 Using shabang (`!`) to run commands causing command not found](https://github.com/earendil-works/pi/issues/5578)** — Shell escape commands default to `/bin/bash`, ignoring user ZSH configurations and plugins, breaking workflows for Zsh-centric developers.

## 4. Key PR Progress

1. **[#5594 Fix Anthropic stream finalization on message_stop](https://github.com/earendil-works/pi/pull/5594)** — Closes #5592 by making `message_stop` the logical end of the stream and actively canceling the body reader to free up transport resources.
2. **[#5509 feat: Add Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/5509)** — Adds a new provider for the Amazon Bedrock Mantle API, bringing support for GPT-5.5 and GPT-5.4 models behind AWS infrastructure.
3. **[#5609 feat(providers): add Palantir Foundry LLM proxy and OAuth provider](https://github.com/earendil-works/pi/pull/5609)** — Introduces routing support for the Palantir Foundry AIP proxy, enabling users to leverage Foundry OAuth tokens for Anthropic, Google, xAI, and OpenAI models.
4. **[#5587 feat(coding-agent): add experimental first-time setup flow](https://github.com/earendil-works/pi/pull/5587)** — Adds a PI_EXPERIMENTAL=1 onboarding dialog for new users that detects terminal appearance (dark/light) and requests analytics opt-in.
5. **[#5585 fix(tui): wrap CJK text at character boundaries in editor](https://github.com/earendil-works/pi/pull/5585)** — Resolves a rendering bug where CJK (Chinese/Japanese/Korean) text was incorrectly wrapped in the TUI editor.
6. **[#5600 fix(ai): honor Codex SSE header timeout setting](https://github.com/earendil-works/pi/pull/5600)** — Replaces the hardcoded 10s Codex SSE header timeout with the user-configurable `timeoutMs`/`httpIdleTimeoutMs`, fixing timeouts on slow networks.
7. **[#5589 fix(tui): stabilize overlay compositing at wide char boundary](https://github.com/earendil-works/pi/pull/5589)** — Prevents TUI overlay visual glitches when overlays intersect with wide grapheme characters (like CJK text).
8. **[#5586 fix(ai/bedrock): use resolved apiKey as a bearer-token fallback](https://github.com/earendil-works/pi/pull/5586)** — Allows `models.json` `apiKey` to be used as a bearer token for AI gateways fronting Bedrock, fixing silent auth failures.
9. **[#5561 feat(ai): link AWS data retention docs in Bedrock validation errors](https://github.com/earendil-works/pi/pull/5561)** — Improves DX for AWS Bedrock users by catching data retention errors for Claude Fable 5 and pointing directly to the opt-in documentation.
10. **[#5583 fix(coding-agent): preserve clickable subscription login URLs](https://github.com/earendil-works/pi/pull/5583)** — Resolves an issue where Pi's left-padding broke long subscription login URLs in the terminal, preventing users from clicking them.

## 5. Feature Request Trends
- **Persona & Agent Customization**: Users want Pi to serve as a generalized agentic harness beyond coding. A notable request ([#5577](https://github.com/earendil-works/pi/issues/5577)) asks for persona overrides in the system prompt to seamlessly switch between security, QA, and PM roles without losing core Pi functionality.
- **Enterprise Provider Expansion**: The community continues to push for compatibility with enterprise proxies and gateways, including Palantir Foundry ([#5610](https://github.com/earendil-works/pi/issues/5610)), custom OAuth flows ([#5372](https://github.com/earendil-works/pi/issues/5372)), and bearer token fallbacks for AWS Bedrock.
- **Extension API Enrichment**: Developers are requesting deeper hooks into Pi's lifecycle, such as a `multi-select-list` UI component ([#5025](https://github.com/earendil-works/pi/issues/5025)) and extension events fired on command execution ([#5608](https://github.com/earendil-works/pi/issues/5608)).
- **Smarter Trust & Settings Sync**: Following the Trust Feature backlash, there is a clear demand for trusted-folder synchronization across devices and less aggressive gating for power users.

## 6. Developer Pain Points
- **Local LLM Instability**: Users running local backends (vLLM, llama.cpp, Ollama) continue to hit edge cases. Timeouts during long generations ([#3715](https://github.com/earendil-works/pi/issues/3715)) and 429 errors during split-turn compaction ([#5536](https://github.com/earendil-works/pi/issues/5536)) reveal that Pi's default streaming/concurrency logic is heavily optimized for cloud APIs and struggles with single-slot local servers.
- **Model Context Corruption**: Switching models mid-session ([#5541](https://github.com/earendil-works/pi/issues/5541)) and failing to resume tasks post-compaction ([#4274](https://github.com/earendil-works/pi/issues/4274)) result in broken state that often can only be fixed by wiping the context, undoing long-running agent work.
- **Fragile TUI Rendering**: Multiple crashes have been reported where undefined render outputs or unexpected data types in UI components ([#5604](https://github.com/earendil-works/pi/issues/5604), [#5597](https://github.com/earendil-works/pi/issues/5597), [#5599](https://github.com/earendil-works/pi/issues/5599)) completely terminate the Pi process rather than failing gracefully.
- **Billing / Cost Opacity**: Developers using advanced provider features (Anthropic 1-hour caching, MiniMax-M3) are discovering that Pi's internal cost tracking doesn't always accurately map to provider billing logic ([#5605](https://github.com/earendil-works/pi/issues/5605), [#5603](https://github.com/earendil-works/pi/issues/5603)), leading to unexpected charges.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-11

## 1. Today's Highlights
Today's development cycle was heavily dominated by **Terminal UI and Rendering** bug fixes, particularly surrounding the new "Virtualized History" (VP) mode, which suffered from multiple input conflicts and viewport miscalculations. On the architecture front, significant strides were made in **subagent autonomy and tooling**, with active proposals to enable background agents to bubble up permission requests rather than auto-denying them. Additionally, the community continues to push for **robust CI/CD hardening** following a recent main-branch breakage.

## 2. Releases
*No new official releases were published in the last 24 hours.*

## 3. Hot Issues
Here are the top 10 most actively discussed issues shaping the project's current trajectory:

*   **[#4942 - VP mode scroll input conflicts](https://github.com/QwenLM/qwen-code/issues/4942)** (4 comments)
    *   *Why it matters:* The Virtualized History mode completely breaks scrolling via keyboard or mouse wheel when the Composer is active. Fixing this is critical for making the VP mode usable as a default.
*   **[#4597 - Persist cross-session stats like Claude Code](https://github.com/QwenLM/qwen-code/issues/4597)** (4 comments)
    *   *Why it matters:* Currently, `/stats` only live in memory. The community strongly desires persistent, cross-session usage dashboards to track token consumption and cost over time.
*   **[#4974 - SGR mouse wheel sequences leak into input](https://github.com/QwenLM/qwen-code/issues/4974)** (2 comments)
    *   *Why it matters:* A deep terminal rendering issue where mouse events (like `\x1b[<64;50;15M`) are leaked as literal typed text into the input box due to double-consumption in the `ink` pipeline.
*   **[#4966 - SchemaValidator lacks numeric coercion](https://github.com/QwenLM/qwen-code/issues/4966)** (2 comments)
    *   *Why it matters:* LLMs frequently pass numbers as strings in MCP tool calls. Strict servers (like Playwright) reject these, causing silent tool failures.
*   **[#4964 - Truncation recovery for max_tokens](https://github.com/QwenLM/qwen-code/issues/4964)** (2 comments)
    *   *Why it matters:* Long generation tasks currently fail completely when hitting the `max_tokens` limit. Users need a mechanism to recover or continue truncated tool executions. 
*   **[#4876 - Subagent image reading fails](https://github.com/QwenLM/qwen-code/issues/4876)** (3 comments)
    *   *Why it matters:* Subagents return hallucinated/incorrect content when asked to analyze images, whereas the main agent succeeds. Highlights a discrepancy in tool context passed to subagents.
*   **[#4928 - Background subagents auto-deny permissions](https://github.com/QwenLM/qwen-code/issues/4928)** (2 comments)
    *   *Why it matters:* Background agents currently auto-deny interactive confirmation. This issue proposes queuing approval requests to the parent UI, which is essential for reliable background automation.
*   **[#4930 - Security: `env` in read-only allowlist enables RCE](https://github.com/QwenLM/qwen-code/issues/4930)** (1 comment)
    *   *Why it matters:* The `env` command is marked as read-only, but malicious actors can use `env` to execute arbitrary commands (e.g., `env bash -c ...`), bypassing user confirmation. 
*   **[#4864 - CI: Enable required status checks](https://github.com/QwenLM/qwen-code/issues/4864)** (3 comments)
    *   *Why it matters:* A recent PR with failing lint/test checks was merged, breaking the `main` branch. The community is demanding branch protection rules immediately.
*   **[#4877 - Distinguishing same models from different providers](https://github.com/QwenLM/qwen-code/issues/4877)** (3 comments)
    *   *Why it matters:* Multi-provider setups (e.g., using OpenAI routing vs. direct API for the same model) are currently indistinguishable in the UI, making model switching confusing.

## 4. Key PR Progress
Active development is heavily focused on TUI hardening, daemon mode, and core architecture.

*   **[#4959 - Fix VP scroll at idle prompt](https://github.com/QwenLM/qwen-code/pull/4959):** Fixes the most critical Virtualized History bugs by disambiguating Shift+Up/Down keybindings and fixing viewport height miscalculations.
*   **[#4914 - Harden OOM prevention](https://github.com/QwenLM/qwen-code/pull/4914):** Adds idempotent tests for history compaction and explicit garbage collection logging to prevent Out-Of-Memory crashes during long sessions.
*   **[#4856 - Web Shell auth and goal workflows](https://github.com/QwenLM/qwen-code/pull/4856):** Expands the Web Shell daemon capabilities to support structured task rendering and goal status panels.
*   **[#4897 - Persist file history snapshots](https://github.com/QwenLM/qwen-code/pull/4897):** Persists `/rewind` data to JSONL, allowing users to restore file states even after completely closing and resuming a session.
*   **[#4975 - Web shell tool group merging](https://github.com/QwenLM/qwen-code/pull/4975):** Aligns the Web Shell UI with the Native CLI by merging consecutive tool calls into a single unified frame.
*   **[#4844 - Experimental Agent Team feature](https://github.com/QwenLM/qwen-code/pull/4844):** Introduces parallel sub-agent coordination. A leader agent can spawn a "team" that works in parallel and shares a task list.
*   **[#4621 - AsyncFzf index on Worker Thread](https://github.com/QwenLM/qwen-code/pull/4621):** Major performance fix that moves fuzzy-finding (@-picker) for large workspaces (>20,000 files) to a background thread to prevent UI freezing.
*   **[#4911 - Route down-arrow to agent panel](https://github.com/QwenLM/qwen-code/pull/4911):** Fixes a UI flow issue where users had to press the down arrow twice to reach a running subagent's output from the input box.
*   **[#4938 - Daemon language switch path fix](https://github.com/QwenLM/qwen-code/pull/4938):** Resolves a silent failure where the output language configuration wrote to an incorrect global path.
*   **[#4681 - Add min/maxLength constraints to header schema](https://github.com/QwenLM/qwen-code/pull/4681):** Prevents the LLM from generating overly long headers in the `ask_user_question` tool, reducing token waste.

## 5. Feature Request Trends
Analyzing the current issue pipeline reveals distinct developer priorities:

*   **Advanced Autonomy & Background Agents:** There is a strong push to evolve subagents from isolated scripts into robust, autonomous background workers. This includes proposals to enable fork-subagents by default ([#4956](https://github.com/QwenLM/qwen-code/issues/4956)) and allow background tools to request permissions asynchronously ([#4928](https://github.com/QwenLM/qwen-code/issues/4928)).
*   **MCP Tooling Resilience:** Developers want the client layer to be more forgiving of LLM quirks, specifically requesting automatic type coercion (string to number) to prevent MCP tool schema validation errors ([#4966](https://github.com/QwenLM/qwen-code/issues/4966)).
*   **Observability & Telemetry:** Mirroring competitors, users want persistent usage tracking ([#4597](https://github.com/QwenLM/qwen-code/issues/4597)) and optional timestamps within the CLI ([#4899](https://github.com/QwenLM/qwen-code/issues/4899)) to monitor context window drain.
*   **Fine-grained Settings:** Requests for more granular control over internal features, such as disabling auto-memory recall ([#4374](https://github.com/QwenLM/qwen-code/issues/4374)), adding denied MCP server lists ([#4940](https://github.com/QwenLM/qwen-code/issues/4940)), and scaling `QWEN.md` context warnings based on the specific model's window size ([#4941](https://github.com/QwenLM/qwen-code/issues/4941)).

## 6. Developer Pain Points
*   **Terminal/TUI Instability:** The rapid iteration on Virtualized History and complex `ink` keypress bindings is causing friction. SGR mouse leaks ([#4974](https://github.com/QwenLM/qwen-code/issues/4974)), terminal drops to cooked mode ([#4973](https://github.com/QwenLM/qwen-code/issues/4973)), and fragmented rendering on resize ([#4891](https://github.com/QwenLM/qwen-code/issues/4891)) indicate that raw terminal handling remains highly brittle.
*   **Context & Token Management Anxiety:** Users are frustrated by unpredictable context window behaviors. Specifically, identical Auto/Hard compaction thresholds causing premature context exhaustion ([#4945](https://github.com/QwenLM/qwen-code/issues/4945)), ungraceful handling of `max_tokens` truncation ([#4964](https://github.com/QwenLM/qwen-code/issues/4964)), and lack of cross-session stats leading to "sticker shock" over perceived token usage ([#4951](https://github.com/QwenLM/qwen-code/issues/4951)).
*   **Infrastructure & Security Gaps:** The lack of required CI checks on `main` ([#4864](https://github.com/QwenLM/qwen-code/issues/4864)) resulted in broken builds, frustrating contributors. Furthermore, the discovery that `env` can be used to bypass shell execution policies ([#4930](https://github.com/QwenLM/qwen-code/issues/4930)) highlights dangerous blind spots in the command-sanitization layer.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-06-11

## 1. Today's Highlights
CodeWhale (formerly DeepSeek TUI) has officially released **v0.8.56** and **v0.8.57**, finalizing the "CodeWhale" rebrand and deprecating the legacy `deepseek-tui` npm package. The community is actively adapting to the rebrand, with multiple PRs submitted today to fix migration paths for legacy binary users. Meanwhile, discussions around multi-agent orchestration, dynamic API key security, and plugin architecture continue to dominate the issue tracker.

## 2. Releases

- **[v0.8.57](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.57)**: A follow-up release enforcing the canonical **CodeWhale** rebrand. The legacy `deepseek-tui` npm package is now officially deprecated. Users on v0.8.x legacy names are advised to migrate using `docs/REBRAND.md`.
- **[v0.8.56](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.56) — "Community Harvest"**: A substantial update shipping community-driven contributions, including expanded localization, new providers, prefix-cache stability improvements, and various bug fixes.

*(Note: Users are noting version synchronization issues across distribution channels—see Hot Issues below).*

## 3. Hot Issues

1. **[Issue #765](https://github.com/Hmbown/CodeWhale/issues/765) [Bug] Windows npm install gets stuck at "Working"**
   A highly-commented bug where Windows users installing via `npm install -g` experience the TUI freezing indefinitely at the "Working" state after sending a message. This remains a critical blocker for Windows adoption.

2. **[Issue #2007](https://github.com/Hmbown/CodeWhale/issues/2007) Multi-agent orchestration runs**
   Maintainer @Hmbown proposes replacing the current "School-mode" exploration with a standardized multi-agent surface featuring bounded parallel workers, role assignment, and disagreement reconciliation. High strategic importance for the project's v0.8.44+ roadmap.

3. **[Issue #2988](https://github.com/Hmbown/CodeWhale/issues/2988) Release channel version fragmentation**
   Raises a valid concern: npm is stuck at v0.8.53, crates.io at v0.8.54, while GitHub Releases is at v0.8.56. This fragmentation creates confusion for users tracking the latest stable version across package managers.

4. **[Issue #3004](https://github.com/Hmbown/CodeWhale/issues/3004) Dynamic API key retrieval via scripts**
   Users managing secrets via vaults (e.g., KeePassXC) request the ability to fetch `api_key` dynamically via custom shell scripts rather than storing it plaintext in `.codewhale/config.toml` or `.env`, a feature already supported by Claude Code.

5. **[Issue #1172](https://github.com/Hmbown/CodeWhale/issues/1172) Plugin & workflow migration support**
   A user requests a plugin system to port existing AI coding workflows (skills, commands, agents, hooks) from Cursor, Claude Code, and Codex into CodeWhale, signaling strong demand for an agnostic plugin architecture.

6. **[Issue #2989](https://github.com/Hmbown/CodeWhale/issues/2989) Agent prematurely reports "completed" with Ollama**
   When using local models (Ollama + qwen3-coder:30b), the agent halts mid-task but incorrectly reports "completed" status. A reliability concern for users relying on local LLM providers.

7. **[Issue #2969](https://github.com/Hmbown/CodeWhale/issues/2969) Missing CHANGELOG for v0.8.55**
   Community noticed a gap in the `CHANGELOG.md` for v0.8.55. Transparency in release documentation is important for enterprise users tracking regressions and features.

8. **[Issue #2061](https://github.com/Hmbown/CodeWhale/issues/2061) "Hotbar" MMO-style quick action bar**
   An umbrella proposal for an MMO-inspired quick action bar at the bottom of the sidebar, allowing power users to bind frequent actions (voice toggle, context compaction, mode switch) to single keystrokes.

9. **[Issue #1530](https://github.com/Hmbown/CodeWhale/issues/1530) Session continuity in non-interactive mode**
   Requests `exec --resume` / `--session-id` flags to allow multi-turn conversational workflows in CI/CD or scripted pipelines. Currently, non-interactive mode always starts a fresh session.

10. **[Issue #1732](https://github.com/Hmbown/CodeWhale/issues/1732) Slow document saving with low cache hit**
    Users report extremely slow performance when merging and saving analysis reports to local documents, with notably low cache hit rates. Points to potential I/O or caching bottlenecks in large-context operations.

## 4. Key PR Progress

1. **[PR #3013](https://github.com/Hmbown/CodeWhale/pull/3013) Detect legacy binary and print migration instructions**
   Fixes a critical friction point where users on pre-rebrand installs (`deepseek` / `deepseek-tui`) encountered cryptic `codewhale not found` errors during self-update. Now detects legacy binaries and prints actionable migration steps.

2. **[PR #3010](https://github.com/Hmbown/CodeWhale/pull/3010) Exclude Calm personality overlay from default prompt**
   Removes the ~1,376-character "Calm" personality text from the default model prompt path, reducing static token overhead. Users who want the personality can still opt in.

3. **[PR #3011](https://github.com/Hmbown/CodeWhale/issues/3011) Track provider source in CLI errors**
   Resolves Issue #3007 by tracking whether the provider came from CLI flags, env vars, or config, and generating contextually accurate error messages instead of generic "Remove --provider" instructions.

4. **[PR #3005](https://github.com/Hmbown/CodeWhale/pull/3005) Extract provider metadata into data-driven registry**
   A significant refactor replacing ~100 hand-maintained `match` arms across two crates with a `Provider` trait backed by a static `PROVIDER_REGISTRY`. Improves maintainability as provider count grows.

5. **[PR #3006](https://github.com/Hmbown/CodeWhale/pull/3006) Fix slow/blocked GitHub release downloads**
   Addresses network issues where `codewhale update` fails in regions with unreliable GitHub connectivity.

6. **[PR #3008](https://github.com/Hmbown/CodeWhale/pull/3008) Clarify Constitution trust framing in system prompt**
   Updates the base TUI system prompt to establish clearer "A+ standing" trust framing for the AI assistant, improving instruction-following reliability.

7. **[PR #3009](https://github.com/Hmbown/CodeWhale/pull/3009) Improve CLI-compare benchmarking harness**
   Enhances the Harbor integration benchmarking tool with real CLI interface support, robust token extraction from JSONL streams, and proper metadata capture for performance comparison against competing tools.

8. **[PR #2579](https://github.com/Hmbown/CodeWhale/pull/2579) Replace Session.messages Vec with AppendLog**
   Phase 4 of the session storage refactor. Replaces the in-memory `Vec<Message>` with an `AppendLog` append-only wrapper, enabling persistent and crash-resilient session history. Foundational for durability features.

9. **[PR #2903](https://github.com/Hmbown/CodeWhale/pull/2903) Static Linux x64 binaries with musl**
   Builds fully-static Linux binaries using the musl target, eliminating glibc and libdbus runtime dependencies. Important for containerized and minimal-server deployments.

10. **[PR #3007](https://github.com/Hmbown/CodeWhale/issues/3007) (Issue filed as PR context) TUI provider rejection error UX**
    Now resolved via PR #3011—unsupported providers yield targeted recovery hints based on source (CLI/Env/Config).

## 5. Feature Request Trends

- **Multi-Agent Orchestration**: Strong demand for coordinated agent runs with role assignment, parallel workers, and disagreement reconciliation (#2007, #2024). Users want agents that can delegate to "scouts" for broad discovery tasks.
- **Plugin Architecture & Portability**: Users want a unified plugin system compatible with MCP and hooks to make workflows portable across Cursor, Claude Code, and Codex (#1172, #1003, #1364).
- **Security & Secrets Management**: Dynamic API key retrieval from password managers (#3004) and OAuth 2.1 support for MCP server authentication (#1409) are frequently requested.
- **Customizable UI Surfaces**: Requests for a Hotbar quick-action bar (#2061), configurable status line (#1551), and global instruction auto-loading (#3012) point to users wanting deeper UI personalization.
- **Session Durability & Non-Interactive Mode**: Append-only logs (#2579), session resume in CI (#1530), and sleep/wake resilience (#2990) indicate demand for production-grade session reliability.
- **Localization & Currency**: Multi-currency support for token cost estimation (#1607) reflects the growing international user base.

## 6. Developer Pain Points

- **Rebrand Migration Friction**: The transition from `deepseek-tui` to `codewhale` is causing broken updates for users on legacy binaries, with cryptic error messages (#765, #3013). The migration path needs to be more seamless.
- **Release Channel Fragmentation**: Version drift between npm (v0.8.53), crates.io (v0.8.54), and GitHub Releases (v0.8.56) creates confusion about what "latest" means (#2988).
- **Local Model Reliability**: Agents using Ollama/local models experience premature task completion, session freezes, and timeout failures (#2989, #1425), undermining reliability for air-gapped or cost-conscious users.
- **Streaming & Network Resilience**: Active sessions die on laptop sleep (#2990) and network instability blocks self-updates (#3006), highlighting fragility in long-running streaming connections.
- **Performance with Large Contexts**: Report merging and large-text processing suffer from low cache hit rates and slow I/O (#1732), suggesting the caching layer needs optimization for heavy workloads.

</details>