# AI CLI Tools Community Digest 2026-06-27

> Generated: 2026-06-26 22:22 UTC | Tools covered: 9

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

Here is the cross-tool comparison report for the AI CLI ecosystem based on the June 27, 2026, community digests.

### 1. Ecosystem Overview
The AI CLI tooling landscape in mid-2026 is highly active, characterized by a rapid transition from simple code-completion utilities to autonomous, multi-agent developer environments. Major proprietary tools like Claude Code, OpenAI Codex, and GitHub Copilot CLI are facing severe infrastructural scaling pains, particularly regarding aggressive filesystem polling, context window limitations, and steep token-burn rates. Meanwhile, open-source and alternative models (such as Gemini CLI, Qwen Code, and OpenCode) are aggressively iterating on architectural foundations, focusing heavily on local reliability, sandbox security, and flexible provider integrations. The overarching industry theme is a dual focus on **agentic autonomy** (unattended execution) and **context/memory management** to keep LLMs grounded without exhausting paid API quotas.

### 2. Activity Comparison
*Note: The data reflects community and maintainer activity over the past 24 hours as reported in the digests.*

| Tool | Hot Issues Tracked | Active PRs | Release Status | Primary Focus Area |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 2 active (10 tracked proposals) | **v2.1.195** (Released today) | Fixing TUI friction, resolving token burn, cross-platform parity. |
| **OpenAI Codex** | 10 | 10 | **rust-v0.143.0-alpha.26** (Latest edge) | Stabilizing MCP OAuth, fixing CPU storms from Git polling. |
| **Gemini CLI** | 10 | 10 | **v0.51.0-nightly** (Released today) | AST code mapping, zero-dependency sandboxing, reliability evals. |
| **GitHub Copilot CLI**| 10 | 1 | **v1.0.66-1** (Released today) | Subagent concurrency controls, fixing cross-repo memory leaks. |
| **Kimi Code CLI** | 3 | 2 | None (Bug fixing phase) | Fixing state sync bugs (Plan mode), API serialization. |
| **OpenCode** | 10 | 10 | None | Deep architectural refactoring of test environments (LayerNode). |
| **Pi** | 10 | 7 | None | TUI stability, expanding LLM provider support (Friendli, GPT-5.6). |
| **Qwen Code** | 10 | 10 | **cua-driver-rs-v0.6.8** | Server stability (`qwen serve`), auto-updates, team memory. |
| **DeepSeek TUI** | 10 | 10 | None (v0.8.x stabilization) | Granular permission controls, fixing mode desyncs. |

### 3. Shared Feature Directions
*   **Context Window & Token Management:** *Claude Code, OpenAI Codex, GitHub Copilot CLI, OpenCode*. As LLM context windows expand, CLI tools are struggling to manage token costs. Claude and Codex users report abnormal budget drains (up to 20x faster). OpenCode faces infinite compaction loops. Copilot is adding experimental response budgets, while Claude users request AST-aware codebase mapping (like Gemini) to reduce token noise.
*   **Advanced Filesystem Polling & Process Management:** *OpenAI Codex, Qwen Code*. Desktop apps and background agents are wreaking havoc on system resources. Codex users report massive CPU storms and disk leaks (62GB+ code signature clones) from aggressive Git polling. Qwen Code faced severe memory leaks (OOM) due to un-reaped zombie processes on Windows and Linux.
*   **Memory Isolation & Leakage Fixes:** *GitHub Copilot CLI, Gemini CLI, OpenCode*. As tools implement "auto-memory" to remember user preferences, context bleed is becoming a critical bug. Copilot memories are leaking between unrelated repositories, OpenCode's MCP memory contaminates session titles, and Gemini is patching auto-memory secret leakages.
*   **Granular Agentic Safety & Permissions:** *DeepSeek TUI, Qwen Code, GitHub Copilot CLI*. Communities are pushing back against binary "YOLO/Auto" execution modes. DeepSeek TUI and Copilot CLI are implementing typed permission rules (`allow`/`deny`/`ask`), while Qwen Code is expanding "Plan Approval Gates" to prevent destructive autonomous actions.

### 4. Differentiation Analysis
*   **Proprietary vs. Open Provider Architectures:** Claude, Codex, and Copilot CLIs are tightly coupled to their parent ecosystems and native API gateways, focusing on enterprise features (Copilot server-managed settings) and deep IDE integration. In contrast, tools like Pi and OpenCode differentiate by acting as universal interfaces, rapidly integrating diverse OpenAI-compatible endpoints (DeepSeek V4, GLM-5.2, Friendli, Bedrock Mantle).
*   **Single-User vs. Team-Centric Workflows:** While most CLIs focus on the individual developer, **Qwen Code** is aggressively building collaborative features, such as Git-shared team memory (`.qwen/team-memory/`) and durable automated loop files for self-hosted CI/CD pipelines. 
*   **Agentic Execution Models:** **DeepSeek TUI** is leaning into cross-platform chat bridges (WeCom, Telegram), allowing approvals and agent monitoring via messaging apps. **Gemini CLI** is heavily focused on the academic/developer alignment of LLM capabilities with POSIX toolchains (zero-dependency OS sandboxing).

### 5. Community Momentum & Maturity
*   **Rapid Iterators (High Momentum):** **OpenAI Codex** and **Claude Code** show massive community engagement (hundreds of upvotes/comments on single issues), driven by both high adoption and severe friction (token burn). **Gemini CLI** shows high engineering maturity, prioritizing behavioral evals and architectural refactoring over flashy features.
*   **Niche / Early Stage Maturity:** **Kimi Code CLI** and **Pi** are currently in heavy bug-fixing phases, dealing with foundational state management (Kimi) and TUI rendering stability (Pi). 
*   **Enterprise Maturity:** **GitHub Copilot CLI** is uniquely focused on enterprise governance, pushing features for usage-based billing limits and subagent depth controls, appealing strongly to corporate decision-makers.

### 6. Trend Signals (Reference for Developers)
1.  **The "Token Burn" Crisis is Real:** If you are evaluating commercial CLI subscriptions (Plus/Pro tiers), proceed with caution. Both Anthropic and OpenAI ecosystems are reporting severe backend miscalculations in token draining (since March/June). Teams should monitor usage metrics closely and utilize newly introduced features like Copilot's "Response Budgets."
2.  **Watch Out for "Helpful" Autonomous Mutations:** AI tools are beginning to exhibit destructive autonomous behaviors to maximize results at the cost of user budgets. E.g., Qwen Code silently switching settings to expensive models post-upgrade. Developers must explicitly lock down `settings.json` and enforce strict permission rules.
3.  **File Watchers are the New Memory Leaks:** Modern AI CLIs are inherently I/O heavy. When integrating tools like Codex or Qwen into local environments, be prepared for aggressive Git polling and CPU spikes. Favor CLI tools that allow you to disable file watchers or operate strictly via headless/prompt-based execution.
4.  **Standardization of Agent Rules is Coming:** Expect a shift toward standardized `.github/skills/` and `.agents/skills` directories (as demanded by Claude Code users). Developers building custom agents should align with these directory structures to ensure cross-tool compatibility.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the technical analysis report for the Claude Code Skills ecosystem based on recent community activity.

### 1. Top Skills Ranking & PR Highlights
Based on community engagement, bug fix triage, and feature introductions, the following Pull Requests represent the most significant developments in the Skills ecosystem:

*   **Eval Pipeline Overhaul (PR [#1298](https://github.com/anthropics/skills/pull/1298))**: Currently the most critical active PR. It addresses a core malfunction in `run_eval.py` that falsely reported 0% recall, effectively breaking the automated skill description optimization loop (`improve_description.py`). It includes fixes for Windows stream reading and worker execution.
*   **Meta-Skills for Quality Control (PR [#83](https://github.com/anthropics/skills/pull/83) & PR [#1360](https://github.com/anthropics/skills/pull/1360))**: The community is highly focused on AI self-regulation. PR #83 introduces `skill-quality-analyzer` and `skill-security-analyzer` to the marketplace, while PR #1360 proposes a `self-audit` skill that acts as a four-dimension output quality gate (consistency, completeness, groundedness, and formatting) before task delivery.
*   **Frontend & UI Expansion (PR [#210](https://github.com/anthropics/skills/pull/210) & PR [#1302](https://github.com/anthropics/skills/pull/1302))**: A strong push for design-centric skills. PR #210 optimizes the existing `frontend-design` skill for better single-conversation actionability, while PR #1302 introduces a new `color-expert` skill featuring deep knowledge of color spaces (OKLCH, CAM16) and naming systems.
*   **Document & Enterprise Formatting (PR [#514](https://github.com/anthropics/skills/pull/514) & PR [#486](https://github.com/anthropics/skills/pull/486))**: Addressing common AI output failures, these PRs introduce a `document-typography` skill (preventing widow/orphan paragraphs) and an `ODT` skill for handling OpenDocument files and converting them to HTML.
*   **Critical Skill-Creator Fixes (PRs [#361](https://github.com/anthropics/skills/pull/361), [#362](https://github.com/anthropics/skills/pull/362), [#539](https://github.com/anthropics/skills/pull/539))**: A series of vital patches by the community to fix `skill-creator` failures. These include resolving YAML parsing errors caused by unquoted special characters, and fixing Rust panics triggered by multi-byte UTF-8 characters during validation length checks.

### 2. Community Demand Trends
Analyzing the most active Issues reveals distinct functional and structural demands from Claude Code users:

*   **Trust, Security, and Governance:** Users are increasingly concerned about permission boundaries. Issue [#492](https://github.com/anthropics/skills/issues/492) highlights a critical vulnerability where community skills spoof the official `anthropic/` namespace. Additionally, Issue [#412](https://github.com/anthropics/skills/issues/412) requests an `agent-governance` skill for policy enforcement and threat detection in enterprise environments.
*   **Persistent Context & Memory:** There is massive anticipation for long-term agent memory. The community strongly desires skills like `compact-memory` (Issue [#1329](https://github.com/anthropics/skills/issues/1329)) and `shodh-memory` (Issue [#154](https://github.com/anthropics/skills/pull/154)) to help Claude maintain contextual state across multiple isolated conversations.
*   **Enterprise Distribution & Integration:** Users want native team-sharing capabilities. Issue [#228](https://github.com/anthropics/skills/issues/228) requests org-wide skill sharing for Claude.ai, while Issue [#29](https://github.com/anthropics/skills/issues/29) highlights a major demand for AWS Bedrock compatibility.
*   **MCP Standardization:** Issue [#16](https://github.com/anthropics/skills/issues/16) points to a desire to expose Skills as Model Context Protocol (MCP) servers, allowing external software to interact with Skills via strict API definitions rather than just text-based triggers.

### 3. High-Potential Pending Skills
These active PRs have generated significant discussion and solve immediate technical pain points, indicating a high likelihood of imminent merging:

*   **[PR #541](https://github.com/anthropics/skills/pull/541): Fix DOCX Bookmark ID Collisions** 
    *Status:* Open
    *Summary:* Fixes a severe bug where hardcoded tracked-change IDs in the DOCX skill corrupt existing Word documents by colliding with pre-existing bookmark IDs.
*   **[PR #538](https://github.com/anthropics/skills/pull/538): Fix PDF Case-Sensitivity** 
    *Status:* Open
    *Summary:* A simple but critical patch that corrects 8 uppercase file references in `SKILL.md` which currently break the PDF skill on case-sensitive operating systems (Linux/macOS).
*   **[PR #1050](https://github.com/anthropics/skills/pull/1050) & [PR #1099](https://github.com/anthropics/skills/pull/1099): Windows Compatibility for Skill-Creator** 
    *Status:* Open
    *Summary:* These paired PRs address a flood of Unix-first assumptions in the codebase, fixing Windows subprocess calling (`PATHEXT` failures) and encoding bugs (`cp1252`) that currently render the skill optimization loops completely unusable for Windows developers.

### 4. Skills Ecosystem Insight
At the macro level, the community's most concentrated demand is for **reliable, secure, and cross-platform tooling**, specifically focused on fixing the broken `skill-creator` evaluation pipelines and establishing strict governance boundaries between official Anthropic and community-generated skills.

---

Here is the Claude Code community digest for June 27, 2026.

### 1. Today's Highlights
Claude Code rolled out version **v2.1.195**, addressing terminal UI friction by introducing an environment variable to disable mouse clicks/drags in fullscreen mode and fixing a hook matcher bug that caused unintended substring matching. The community remains highly focused on rate limits and token consumption, alongside active discussions around terminal keyboard protocol compatibility (such as Kitty and Alacritty) and context window management.

### 2. Releases
*   **[v2.1.195](https://github.com/anthropics/claude-code/releases)**
    *   **New Feature:** Added the `CLAUDE_CODE_DISABLE_MOUSE_CLICKS` environment variable, allowing users to disable mouse clicks, drags, and hovers in fullscreen mode while retaining scroll wheel functionality. 
    *   **Bugfix:** Fixed an issue where hook matchers with hyphenated identifiers (e.g., `code-reviewer`, `mcp__brave-search`) were accidentally substring-matching. They now require exact matches.

### 3. Hot Issues
1.  **[#38335](https://github.com/anthropics/claude-code/issues/38335) [BUG] Claude Max plan session limits exhausted abnormally fast since March 23, 2026** (468 👍, 785 comments)
    *   *Why it matters:* A massive thread indicating a systemic issue with CLI session limits draining much faster than expected for Max plan users.
2.  **[#65697](https://github.com/anthropics/claude-code/issues/65697) [FEATURE] Official Claude Desktop build for Linux** (482 👍, 47 comments)
    *   *Why it matters:* High demand from the Linux developer community for an official Debian/Ubuntu LTS desktop client.
3.  **[#65833](https://github.com/anthropics/claude-code/issues/65833) v2.1.150: scroll wheel no longer scrolls conversation** (41 👍, 26 comments)
    *   *Why it matters:* A regression where the mouse scroll wheel sends arrow keys instead of scrolling the TUI output, disrupting developer workflows in WSL.
4.  **[#16345](https://github.com/anthropics/claude-code/issues/16345) [Feature Request] Support standard `.github/skills/` directory** (32 👍, 17 comments)
    *   *Why it matters:* Developers want CLI alignment with the broader agent ecosystem standard (`agentskills.io`) for defining agent skills.
5.  **[#4276](https://github.com/anthropics/claude-code/issues/4276) Feature Request: Extend Environment Variable Expansion to `settings.json`** (31 👍, 13 comments)
    *   *Why it matters:* Users are looking for better secrets management, requesting native variable expansion in configuration files to avoid hardcoding API keys.
6.  **[#64654](https://github.com/anthropics/claude-code/issues/64654) [BUG] plugin:github:github MCP fails with HTTP 400** (26 👍, 7 comments)
    *   *Why it matters:* A critical integration failure with the GitHub MCP plugin due to a malformed JSON-RPC payload, blocking automated workflows.
7.  **[#71589](https://github.com/anthropics/claude-code/issues/71589) [Bug] Excessive token consumption in session** (1 👍, 4 comments)
    *   *Why it matters:* Highlights ongoing pain points with 5-hour usage limits, where standard PR reviews are unexpectedly consuming 42% of session quotas.
8.  **[#70420](https://github.com/anthropics/claude-code/issues/70420) CLAUDE.md rules aren't reliably followed** (0 👍, 2 comments)
    *   *Why it matters:* Raises concerns about context injection reliability, noting that `CLAUDE.md` rules are treated as context rather than strictly enforced constraints.
9.  **[#71700](https://github.com/anthropics/claude-code/issues/71700) [BUG] Kitty keyboard protocol gated on terminal-name allow-list** (0 👍, 2 comments)
    *   *Why it matters:* Advanced terminal users (e.g., Alacritty) are blocked from using modern keyboard protocols because Claude Code relies on terminal name allow-lists rather than capability detection.
10. **[#71681](https://github.com/anthropics/claude-code/issues/71681) [BUG] Long-session context bleed** (0 👍, 2 comments)
    *   *Why it matters:* Reports of context contamination during extended sessions, resulting in the LLM hallucinating fake user-reported bugs.

*(Note: The GitHub repository data provided contained only 2 open Pull Requests. The "Key PR Progress" section has been adapted to feature the most impactful open issues acting as community-driven workarounds, proposals, and tracking tickets.)*

### 4. Key PR Progress
1.  **[#71627](https://github.com/anthropics/claude-code/pull/71627) docs(sandbox): note that prompt-approved hosts are session-scoped**
    *   *Summary:* Documentation update clarifying that network domains approved during prompt-time are session-scoped and will be lost upon restart. Essential reading for sandbox configurations.
2.  **[#71530](https://github.com/anthropics/claude-code/pull/71530) Merge pull request #1 from anthropics/main**
    *   *Summary:* A standard upstream sync PR by a community member.
3.  **[#71539](https://github.com/anthropics/claude-code/issues/71539) [BUG] Mouse click to refocus terminal triggers permission prompt** *(Tracking/Proposal)*
    *   *Summary:* Directly relates to today's `v2.1.195` release; developers are actively proposing workarounds for accidental permission triggers caused by terminal refocusing.
4.  **[#67849](https://github.com/anthropics/claude-code/issues/67849) Windows: path-scoped Write/Edit permission rules never match** *(Tracking/Proposal)*
    *   *Summary:* Active discussion around fixing path-scoped permission rules on Windows, which currently fail because of how absolute paths are formatted pre-check.
5.  **[#71686](https://github.com/anthropics/claude-code/issues/71686) Path-scoped rules silently dropped when matching set exceeds size budget** *(Tracking/Proposal)*
    *   *Summary:* Identifies an undocumented limit on `.claude/rules/*.md` injections. Devs are collaborating on patch concepts for context size budgeting.
6.  **[#71699](https://github.com/anthropics/claude-code/issues/71699) claude update fails with "getaddrinfo EREFUSED" on split-DNS VPN** *(Tracking/Proposal)*
    *   *Summary:* Networking edge-case where the updater uses `c-ares` instead of the system resolver. Outlines needed patches for enterprise/VPN users.
7.  **[#71683](https://github.com/anthropics/claude-code/issues/71683) VS Code integrated terminal: every request fails with 503 'pre-upstream queue is saturated'** *(Tracking/Proposal)*
    *   *Summary:* Isolates a VS Code specific environment bug where the integrated terminal receives 503 errors that native Terminal.app does not.
8.  **[#71660](https://github.com/anthropics/claude-code/issues/71660) Context window calculation mismatch for 200K model** *(Tracking/Proposal)*
    *   *Summary:* Developers are verifying the math behind context window limits, noting that the 1M context model is unexpectedly capped at 200K.
9.  **[#71647](https://github.com/anthropics/claude-code/issues/71647) VSCode sidebar "Past conversations" empty** *(Tracking/Proposal)*
    *   *Summary:* A regression in v2.1.191 caused the VS Code extension to filter out its own sessions; outlines the programmatic session flag checks needed to fix it.
10. **[#71662](https://github.com/anthropics/claude-code/issues/71662) --remote-control sessions no longer register with FleetView** *(Tracking/Proposal)*
    *   *Summary:* Addresses detached session management for `--remote-control`, proposing fixes for how marker directories are created in detached `dtach` modes.

### 5. Feature Request Trends
*   **Granular Terminal Emulation Support:** Developers are pushing for capability-based detection rather than hardcoded allow-lists. Support for modern protocols like Kitty keyboard protocol (`CSI ? u`) across alternative terminals (Alacritty, Ghostty) is a top ask.
*   **Cross-Platform Parity:** Linux developers are aggressively requesting an official Desktop app, while Windows users highlight ongoing disparities in path-matching permissions and rules execution.
*   **Ecosystem Standards Alignment:** Developers want Claude Code to natively support industry-standard directory structures like `.github/skills/` and `.agents/skills`.
*   **Advanced Secrets Management:** A persistent trend is the request to expand environment variable expansion directly inside `settings.json` to decouple secrets from application code.

### 6. Developer Pain Points
*   **Rate Limits & Token Burn:** The most prominent frustration is the perceived abnormal burn rate of session limits. Users report standard operations (like simple PR reviews) burning 42% of a 5-hour limit, with systemic complaints tracing back to March.
*   **Context & Rule Reliability:** Developers are frustrated that explicitly defined `CLAUDE.md` and `AGENTS.md` rules are treated as "soft" context rather than hard constraints, forcing them to write complex `PreToolUse` hooks as a stopgap. Additionally, long sessions suffer from "context bleed," leading to agent hallucinations.
*   **Silent Rule Dropping:** When rule sets grow large, Claude Code silently drops `.claude/rules/*.md` files when they exceed an undocumented size budget, breaking expected agent behaviors without warning.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for June 27, 2026.

### 1. Today's Highlights
The Codex community is currently experiencing severe friction regarding rate limits and token consumption, with multiple high-traffic reports indicating that `gpt-5.5` has started draining 5-hour budgets up to 20x faster since mid-June. On the engineering side, recent Pull Requests are heavily focused on stabilizing MCP (Model Context Protocol) OAuth flows, optimizing remote plugin architectures, and fixing performance bottlenecks related to filesystem polling and websocket networking.

### 2. Releases
*   **rust-v0.142.3** ([View Release](https://github.com/openai/codex/releases/tag/rust-v0.142.3)): A maintenance-only patch release with no user-facing changes since 0.142.2.
*   **rust-v0.143.0-alpha.26** ([View Release](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.26)): Latest alpha edge release for the 0.143.0 cycle.

### 3. Hot Issues
1.  **[Issue #28879](https://github.com/openai/codex/issues/28879): Massive token cost spike for `gpt-5.5` (Plus plan)** - *The most critical issue today.* Users report a 10-20x jump in rate-limit cost per token since June 16, draining the 5-hour budget in just 2-3 prompts. With 323 👍 and 174 comments, this reflects a widespread degradation in usability.
2.  **[Issue #30212](https://github.com/openai/codex/issues/30212): Pro plan 5-hour allowance consumed in 1 hour** - Reinforces the token burn issue on the Pro tier, where users are hitting usage limits abnormally fast regardless of prompt complexity.
3.  **[Issue #30246](https://github.com/openai/codex/issues/30246): Parallel multi-agent workflows exhausting weekly budgets** - Reports that subagent/parallel review tasks consume 20-50x the normal token volume, breaking complex agentic workflows.
4.  **[Issue #30137](https://github.com/openai/codex/issues/30137): Community reports `gpt-5.5` intelligence downgrade** - Alongside token issues, users feel the model has silently been downgraded to 5.3 levels in terms of reasoning and context retention over the last 48 hours.
5.  **[Issue #20567](https://github.com/openai/codex/issues/20567): Windows App spawning ~1000 git commands per minute** - A severe performance bug where the desktop app continuously polls Git in the background, crippling enterprise Windows environments.
6.  **[Issue #27536](https://github.com/openai/codex/issues/27536): macOS `code_sign_clone` grows to 62GB+** - A critical disk space leak where the Electron desktop app fails to clean up temporary code signature clones across auto-updates. 
7.  **[Issue #29084](https://github.com/openai/codex/issues/29084): macOS source-control watcher causes CPU storms** - Similar to Windows issues, the desktop app spawns thousands of `git status` processes per second on workspaces with nested Git repositories, causing massive CPU spikes.
8.  **[Issue #30300](https://github.com/openai/codex/issues/30300): macOS x86_64 CLI crashes during `gpt-5.5` runs** - `codex-cli` v0.142.2 is throwing `SIGTRAP/EXC_BREAKPOINT` (trace traps) specifically when querying `gpt-5.5` on Intel Macs.
9.  **[Issue #30298](https://github.com/openai/codex/issues/30298): macOS invalid signatures & rogue Computer Use hook** - The desktop app fails local code-signature verification and frustratingly restores the Computer Use notify hook even when the feature is disabled in config.
10. **[Issue #27588](https://github.com/openai/codex/issues/27588): Context compaction loop on large projects** - The agent gets stuck re-reading instructions during pre-write context compaction on Windows, never actually reaching file edits.

### 4. Key PR Progress
1.  **[PR #30201](https://github.com/openai/codex/pull/30201): Fix remote-control token refresh retry storms** - Resolves a bug where transient 502 errors caused the websocket to discard valid connection paths, triggering endless reconnect loops.
2.  **[PR #30281](https://github.com/openai/codex/pull/30281) & [PR #29026](https://github.com/openai/codex/pull/29026): Core-skills filesystem optimization** - Caches config-aware skill snapshots *before* hitting the filesystem to discover repo skill roots, drastically reducing metadata probes on remote/networked filesystems.
3.  **[PR #30283](https://github.com/openai/codex/pull/30283) & [PR #30188](https://github.com/openai/codex/pull/30188): Canonical Turn Item persistence** - Refactors the core producers to emit canonical `ItemStarted`/`ItemCompleted` events and persists them into SQLite, paving the way for faster rollout pagination.
4.  **[PR #30269](https://github.com/openai/codex/pull/30269): Disable Nagle on Rendezvous websockets** - Disables Nagle's algorithm on websockets (`set_nodelay`) to reduce latency and prevent small packet buffering issues.
5.  **[PR #30296 - #30292 (Stack)](https://github.com/openai/codex/pull/30296): Serialize MCP OAuth credential stores** - A comprehensive 5-PR stack that strictly serializes MCP OAuth login, logout, refresh transactions, and drift reporting to prevent race conditions during authentication.
6.  **[PR #30291](https://github.com/openai/codex/pull/30291): Expose environment info RPC** - Introduces an experimental `environment/info` app-server RPC to retrieve shell/cwd metadata via the managed environment connection.
7.  **[PR #30297](https://github.com/openai/codex/pull/30297): Enable remote plugins by default** - Flips the `remote_plugin` feature flag to true by default for all configurations.
8.  **[PR #29905](https://github.com/openai/codex/pull/29905): Allow partial MCP server definitions** - Enables MCP server definitions to be split across multiple configuration layers while maintaining strict validation before final transport composition.
9.  **[PR #30273](https://github.com/openai/codex/pull/30273): Consume pushed exec-server process events** - Optimizes unified-exec processes by relying on an ordered event stream rather than issuing a blocking `process/read` call.
10. **[PR #29375](https://github.com/openai/codex/pull/29375): Support npm marketplace plugin sources** - Fixes plugin deserialization to properly recognize `{"source":"npm"}`, allowing npm-backed plugins to be installed via the CLI.

### 5. Feature Request Trends
*   **Better Memory Management:** Users want native CLI commands to inspect, prune, and scope experimental "memories" ([Issue #30299](https://github.com/openai/codex/issues/30299)), as accumulated global files are becoming bloated and unmanageable.
*   **Event-Driven Agent Monitoring:** Requests for an agent-callable `monitor` tool that can wake Codex up upon background events (like CI completions or log changes) without requiring manual polling ([Issue #29922](https://github.com/openai/codex/issues/29922)).
*   **Strict Network & Proxy Configurability:** Developers operating behind corporate proxies need finer control over network transports, specifically a feature to force HTTPS-only routing and bypass initial WebSocket attempts ([Issue #27381](https://github.com/openai/codex/issues/27381)), alongside custom `base_url` support for Bedrock proxies ([Issue #28902](https://github.com/openai/codex/issues/28902)).

### 6. Developer Pain Points
*   **Ruined Budgets via Token Burn:** The single biggest frustration is the inability to use `gpt-5.5` effectively. Both Plus and Pro tiers are reporting that 5-hour and weekly budgets are evaporating in a matter of minutes due to severe token miscalculations on the backend.
*   **Aggressive Filesystem / Git Polling:** Desktop apps (both macOS and Windows) are causing severe system degradation. Continuous spawning of `git.exe`, `conhost.exe`, and `syspolicyd` via aggressive file-watchers is draining CPU and battery.
*   **Broken WSL / Windows Interoperability:** Windows users relying on WSL are facing a broken experience. Browser, Computer Use, and Node REPL plugins routinely fail because the sandbox mapping gets confused between Windows paths and Linux WSL paths ([Issue #29639](https://github.com/openai/codex/issues/29639), [Issue #30026](https://github.com/openai/codex/issues/30026), [Issue #29413](https://github.com/openai/codex/issues/29413)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for June 27, 2026.

### 1. Today's Highlights
The Gemini CLI ecosystem is heavily focused on **agentic reliability and security** this cycle. A new nightly release (v0.51.0) patches CI/CD release pipelines, while active development shows a massive push toward fixing agent looping, memory management, and filesystem security vulnerabilities. Additionally, major architectural improvements are underway for AST-aware codebase mapping and zero-dependency OS sandboxing.

### 2. Releases
*   **[v0.51.0-nightly.20260626](https://github.com/google-gemini/gemini-cli/pull/28158)**
    *   **CI/CD Fixes:** Prevented bad NPM releases and addressed job crash promotions ([#28147](https://github.com/google-gemini/gemini-cli/pull/28147)).
    *   **Testing:** Fixed flaky `no_proxy` tests.
    *   **Changelog:** Rolled up changes for the v0.50.0-preview.1 release.

### 3. Hot Issues
1.  **[Subagent false successes on MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323) (P1):** The `codebase_investigator` agent falsely reports success when hitting its turn limit, masking underlying failures. Highly upvoted, as this breaks trust in agent delegation.
2.  **[Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409) (P1):** Simple delegated tasks (like folder creation) cause the generalist agent to hang for hours. Users are currently forced to manually disable subagents to maintain workflow. 
3.  **[Component-Level Evaluations Infrastructure](https://github.com/google-gemini/gemini-cli/issues/24353) (P1):** An epic tracking robust behavioral evaluations for the 6 supported Gemini models. A crucial internal/feature request to harden agent reliability via 76+ behavioral tests.
4.  **[Zero-Dependency OS Sandboxing](https://github.com/google-gemini/gemini-cli/issues/19873) (P2):** Proposal to leverage standard POSIX tools (`grep`, `awk`, `sed`) natively to align with Gemini 3's training data, without compromising user security.
5.  **[AST-aware Codebase Mapping](https://github.com/google-gemini/gemini-cli/issues/22745) (P2):** Investigation into using Abstract Syntax Trees to reduce token noise and precisely map method bounds, potentially solving major context window inefficiencies.
6.  **[Auto Memory Secret Leakage](https://github.com/google-gemini/gemini-cli/issues/26525) (P2):** Security/Privacy concern where local transcripts are sent to the background extraction agent *before* the model has a chance to redact secrets.
7.  **[Shell Execution Stuck on "Awaiting input"](https://github.com/google-gemini/gemini-cli/issues/25166) (P1):** The CLI frequently hangs after executing simple, non-interactive shell commands, severely breaking developer flow.
8.  **[Browser Agent ignores config overrides](https://github.com/google-gemini/gemini-cli/issues/22267) (P2):** Settings like `maxTurns` in `settings.json` are silently ignored by the browser agent, overriding user guardrails.
9.  **[400 Error with >128 Tools](https://github.com/google-gemini/gemini-cli/issues/24246) (P2):** Heavy MCP/Tool configurations crash the CLI with a 400 API error. Needs better dynamic scoping of enabled tools.
10. **[Improving Agent "Self-Awareness"](https://github.com/google-gemini/gemini-cli/issues/21432) (P3):** Feature request to make the CLI an expert guide on its own mechanics (knowing its hotkeys, CLI flags, and self-execution commands).

### 4. Key PR Progress
1.  **[feat(cli): add 'models' command](https://github.com/google-gemini/gemini-cli/pull/27848) (Closed/Merged):** Introduces a `gemini models` command to list available models, context limits, and tiers (Pro/Flash) with JSON support.
2.  **[fix(core): limit recursive reasoning turns](https://github.com/google-gemini/gemini-cli/pull/28164):** Adds a hard limit (15 turns) on recursive reasoning per user prompt to protect CPU and API quotas from infinite loops.
3.  **[fix(core): resolve thought leakage](https://github.com/google-gemini/gemini-cli/pull/27971):** Surgically strips Gemini's internal reasoning/monologue from plaintext history to prevent the model from getting confused and emulating scratchpads in subsequent turns.
4.  **[feat(caretaker): implement Cloud Run webhook ingestion](https://github.com/google-gemini/gemini-cli/pull/28015):** Sets up a robust GitHub webhook ingestion service using Cloud Run, Firestore, and Pub/Sub to handle incoming repository data securely.
5.  **[fix(core-tools): defensive path resolution for @-references](https://github.com/google-gemini/gemini-cli/pull/28053):** Fixes a major production bug where filesystem tools crash if passed an `@`-prefixed path.
6.  **[fix(security): enforce case-insensitive blocklist](https://github.com/google-gemini/gemini-cli/pull/27966) (Closed/Merged):** Prevents prompt injection bypasses targeting sensitive directories (`.git`, `.env`) via case-sensitivity tricks.
7.  **[fix(cli): prompt for folder trust before auth](https://github.com/google-gemini/gemini-cli/pull/27845) (Closed/Merged):** Resolves a logical UX flaw by verifying workspace trust *before* triggering the OAuth login flow.
8.  **[fix(core): avoid keep-alive socket reuse](https://github.com/google-gemini/gemini-cli/pull/28103):** Critical compatibility fix for Node.js June 2026 security patch (CVE-2026-48931) that broke Google OAuth token exchanges.
9.  **[fix(core): suppress PTY resize EBADF errors](https://github.com/google-gemini/gemini-cli/pull/27461) (Closed/Merged):** Stops crashes during terminal window resizing when a PTY process is exiting.
10. **[fix(security): trust dialog hook disclosure](https://github.com/google-gemini/gemini-cli/pull/27915):** Fixes a vulnerability where the workspace-trust dialog hid malicious `SessionStart` shell execution hooks from the user.

### 5. Feature Request Trends
*   **Reliability & Evals:** Massive momentum behind "Behavioral Evals" and component testing. The community wants deterministic, testable agent behavior rather than unpredictable LLM guesswork.
*   **Advanced Codebase Navigation:** Strong demand for AST-aware tools (using projects like *tilth* or *glyph*) to allow precise method-bounds reading, reducing token bloat and improving agent efficiency.
*   **Safer Agent Sandboxing:** Requests to leverage native POSIX bash toolchains securely, paired with better guardrails against destructive git/database commands (`git reset`, `--force`).
*   **Agent Observability:** Requests for `/chat share` compatibility with subagents to easily review trajectories, alongside better `/bug` reports that actually include subagent context.

### 6. Developer Pain Points
*   **Infinite Loops & Hangs:** The most severe frustration is agents getting stuck—whether waiting for non-existent user input, hanging upon deferring to generalist subagents, or eating API quotas through infinite reasoning loops.
*   **Tool & Context Overload:** Developers integrating heavy MCP setups are hitting hard API limits (>128 tools resulting in 400 errors). The CLI requires smarter dynamic tool loading.
*   **Memory System Fragility:** Auto Memory is causing headaches by infinitely retrying low-signal sessions, leaking pre-redaction secrets to background models, and silently dropping invalid memory patches.
*   **Filesystem Quirks:** Symlinks for agents aren't recognized, and simple terminal resizing or exiting external editors causes UI corruption or PTY crashes.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for June 27, 2026.

### 1. Today's Highlights
The GitHub Copilot CLI rolled out versions `v1.0.66-0` and `v1.0.66-1`, introducing granular controls for subagent concurrency, experimental response budgets, and improved MCP (Model Context Protocol) server management. Meanwhile, the community was highly active in reporting context and memory isolation bugs, with multiple developers noting that custom instructions and memories are leaking across different repository sessions. 

### 2. Releases
*   **[v1.0.66-1](https://github.com/github/copilot-cli/releases/tag/v1.0.66-1)**
    *   Added configuration options for subagent concurrency and depth limits in `/settings` (available for usage-based billing users).
    *   Introduced `/chronicle skills review` to review proposed draft skill changes (accept, reject, or defer).
    *   Added desktop notifications for attention prompts and idle sessions.
*   **[v1.0.66-0](https://github.com/github/copilot-cli/releases/tag/v1.0.66-0)**
    *   Added a toggle to enable/disable MCP servers directly from the MCP list view.
    *   Introduced experimental response budget controls in CLI settings.
    *   Enabled managed settings to configure OpenTelemetry export.
    *   Improved MCP stability: Tools on OAuth-authenticated remote servers now recover automatically after a mid-session token expiration.

### 3. Hot Issues
1.  **[#2082 [OPEN]](https://github.com/github/copilot-cli/issues/2082) - ctrl+shift+c no longer copies to clipboard on Linux**
    A highly upvoted issue (10 👍) detailing a regression where the standard Linux copy shortcut breaks in Ubuntu terminal sessions. 
2.  **[#1928 [OPEN]](https://github.com/github/copilot-cli/issues/1928) - Allow to pause copilot work**
    With 4 👍, developers are requesting the ability to pause Copilot mid-execution to inject context or correct its trajectory without restarting the session.
3.  **[#3951 [OPEN]](https://github.com/github/copilot-cli/issues/3951) - PowerShell CLI Friendly**
    Users are requesting native compatibility and improved experience for PowerShell environments, which is crucial for Windows OS and Microsoft ecosystem automation.
4.  **[#3906 [OPEN]](https://github.com/github/copilot-cli/issues/3906) - Assign CVE**
    A security researcher has completed a code audit, submitted a vulnerability report (GHSA ID), and is pending a CVE assignment while preparing patch suggestions.
5.  **[#3940 [OPEN]](https://github.com/github/copilot-cli/issues/3940) - Custom agent support for 'skills' field**
    Developers want the ability to declare specific 'skills' in custom agent definitions (e.g., `.github/agents/dotnet-developer.md`) to limit which skills are preloaded into the context window.
6.  **[#3909 [OPEN]](https://github.com/github/copilot-cli/issues/3909) - Feature: enterprise/org server-managed settings**
    Enterprise users are asking for a centralized mechanism to push local CLI configurations and environment variables to developers, bypassing the current cloud-only limitation.
7.  **[#3945 [OPEN]](https://github.com/github/copilot-cli/issues/3945) - Memories are leaking between repositories**
    A critical context bug where Copilot applies "memories" and facts from an entirely different repository when initializing a new, empty git project.
8.  **[#3942 [OPEN]](https://github.com/github/copilot-cli/issues/3942) - `copilot --acp` does not work with `--agent`**
    Users report that non-interactive mode fails to properly load and execute custom agents stored in `~/.copilot/agents/`.
9.  **[#3954 [OPEN]](https://github.com/github/copilot-cli/issues/3954) - `explore` tool hardcodes model to `gpt-5.4-mini`**
    A configuration bug where the agent's `explore` tool ignores custom API endpoints (like DeepSeek) and attempts to force-fetch `gpt-5.4-mini`, breaking custom workflows.
10. **[#3948 [OPEN]](https://github.com/github/copilot-cli/issues/3948) - Any web_fetch: TypeError: fetch failed**
    A widespread networking issue where the agent can authenticate and reach models but consistently fails to fetch public web pages using the `web_fetch` tool.

### 4. Key PR Progress
*Note: Only one Pull Request saw activity in the last 24 hours.*
1.  **[#570 [CLOSED]](https://github.com/github/copilot-cli/pull/570) - [WIP] Add macOS installation instructions to README.md**
    A work-in-progress PR originally generated by the Copilot coding agent to update documentation. It was closed by the user after sitting idle since November 2025.

### 5. Feature Request Trends
*   **Enterprise & Agent Governance:** There is a strong push for greater administrative control. Users want server-managed settings for local CLI installs (#3909) and the ability to limit preloaded skills in custom agents to optimize token usage (#3940).
*   **Session Interactivity:** Developers want more dynamic control over ongoing sessions, specifically the ability to pause and redirect the agent mid-task (#1928). 
*   **Git-Native Workflows:** Requests for advanced agent workflows, such as allowing the `/fleet` command to clone repositories into multiple directories to prevent file squashing and leverage Git for conflict resolution (#3939).
*   **OS Parity:** Better native support for Windows/PowerShell environments remains a consistent ask (#3951).

### 6. Developer Pain Points
*   **Context & Memory Leakage:** The most prominent frustration is context isolation. Developers report that local instructions and "memories" are bleeding into unrelated repository analyses, resulting in hallucinated facts and incorrect setups (#3945, #3946).
*   **Terminal & Clipboard Friction:** Basic OS-level terminal interactions remain broken. Users on Linux and Windows 11 continue to struggle with copying text to the clipboard, which interrupts development flow (#2082, #3949).
*   **Subagent Bloat:** When using multiple subagents, the parent session's exported transcript becomes bloated with uncapped, verbatim logs, making it incredibly difficult for developers to audit agent behavior (#3944).
*   **Tool Configuration Overrides:** Custom setups are being undermined by hardcoded parameters. The agent ignoring custom models in favor of hardcoded GPT variants (#3954) and MCP registries failing to interpolate variables (#3887) are actively breaking user workflows.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the community digest for Kimi Code CLI.

# Kimi Code CLI Community Digest
**Date:** 2026-06-27

## 1. Today's Highlights
The Kimi Code CLI community activity over the past 24 hours has been primarily focused on bug fixes and documentation improvements without any new official releases. Contributors actively addressed state management inconsistencies, notably with Plan Mode and API parameter serialization, while users reported UI friction points requiring double keystrokes. Maintainers also successfully resolved a lingering API authentication issue affecting third-party agent integrations.

*(Note: The Releases section has been omitted as there were no new releases in the last 24 hours).*

## 2. Hot Issues
*   **[Issue #2478](https://github.com/MoonshotAI/kimi-cli/issues/2478) [Bug] ExitPlanMode reports "Not in plan mode" while system reminder claims plan mode is active**
    *   **Why it matters:** A critical state synchronization bug prevents users from exiting Plan Mode. Even when the system recognizes the mode as active, the `ExitPlanMode` command fails, breaking agent workflows.
    *   **Community Reaction:** Freshly reported with initial engagement; users are likely to confirm if this blocks autonomous planning phases.
*   **[Issue #2477](https://github.com/MoonshotAI/kimi-cli/issues/2477) [bug] Kimi CLI Bug Report — Double Enter Key & `/sessions` Feedback Loss**
    *   **Why it matters:** Highlights significant UI/UX friction on Linux environments. Users have to press the Enter key twice for submission, and session feedback is being lost, disrupting terminal interactivity.
    *   **Community Reaction:** Newly reported; addresses core terminal input latency and state handling.
*   **[Issue #2425](https://github.com/MoonshotAI/kimi-cli/issues/2425) [CLOSED] [bug] 403 Kimi For Coding is currently only available for Coding Agents**
    *   **Why it matters:** A persistent 403 error on Mac OS that blocked API usage across various coding agents. 
    *   **Community Reaction:** Closed after accumulating 10 comments and 3 upvotes over several weeks, indicating maintainers successfully resolved the API authentication/agent-detection bottleneck.

## 3. Key PR Progress
*   **[PR #2476](https://github.com/MoonshotAI/kimi-cli/pull/2476) fix(kosong): omit reasoning_effort instead of sending null when thinking is off**
    *   **Description:** Fixes an API serialization bug where `OpenAILegacy.with_thinking("off")` passed a Python `None`, causing the OpenAI SDK to send `"reasoning_effort": null` (which causes errors). The PR correctly omits the parameter when thinking is disabled.
*   **[PR #2287](https://github.com/MoonshotAI/kimi-cli/pull/2287) docs(readme): add prerequisites list to Development section**
    *   **Description:** Improves the contributor onboarding experience by adding a `### Prerequisites` block before the `make prepare` instructions, resolving previous contributor confusion.

## 4. Feature Request Trends
While today's dataset is heavily skewed towards bug reports rather than feature requests, a clear trend emerges around **robust state and context management**. Users are heavily utilizing advanced agent workflows (like Plan Mode and `/sessions` history) and expect zero-friction, highly reliable state transitions. There is an underlying demand for better cross-environment UI consistency (specifically Linux vs. Mac OS input handling).

## 5. Developer Pain Points
*   **State Synchronization Failures:** Developers are frustrated when the CLI's internal state (e.g., Plan Mode being active) does not match the execution engine's state, resulting in hard-blocked operations.
*   **API Payload Serialization:** Under the hood, strict API parameters (like `reasoning_effort` rejecting `null` values) cause silent failures or 400/403 errors when toggling features like "thinking" off.
*   **Terminal Input Quirks:** Basic CLI interactions, such as requiring a "double Enter" keystroke to submit prompts, interrupt the fast-paced coding flow expected by developers on Linux distributions.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for June 27, 2026.

### 1. Today's Highlights
OpenCode's development over the last 24 hours has been heavily focused on a massive architectural overhaul of its testing infrastructure, with core maintainer `jlongster` merging dozens of PRs to migrate internal systems to canonical LayerNode dependency graphs. On the community front, developers are actively discussing integrations with newer LLMs like DeepSeek V4 Pro and GLM-5.2, while pointing out critical regressions in desktop app stability and the Agent Client Protocol (ACP) implementation. 

### 2. Releases
No new official releases were published in the last 24 hours.

### 3. Hot Issues
Here are the 10 most noteworthy issues driving community discussion:

*   **[DeepSeek V4 Pro Price Drop Adjustments](https://github.com/anomalyco/opencode/issues/28846)** (84 comments, 82 upvotes): With DeepSeek V4 Pro permanently dropping its API pricing by 75%, the community is highly requesting an adjustment to the "Go" subscription usage limits to pass these savings on to users.
*   **[Infinite Compaction Loop](https://github.com/anomalyco/opencode/issues/31152)** (4 comments): A critical bug where OpenCode enters an infinite context compaction loop on *every* response, even with a completely empty session and zero configuration. 
*   **[GitHub Copilot Integration Rejections](https://github.com/anomalyco/opencode/issues/30675)** (4 comments): Users are failing to use GitHub Copilot models via OpenCode. Inference requests are rejected unless using `gpt-5.2-codex`, likely due to a missing `Copilot-Integration-Id` HTTP header.
*   **[ACP Session List Scope Bug](https://github.com/anomalyco/opencode/issues/33036)** (4 comments): OpenCode's Agent Client Protocol (ACP) `session/list` implementation is incorrectly scoped to the process project when the client omits the current working directory (`cwd`), violating the official ACP spec.
*   **[Qwen 3.7 Plus/Max Tool Call Failures](https://github.com/anomalyco/opencode/issues/33618)** (3 comments): When routing newer Qwen models via OpenRouter, tool calls sporadically fail with empty names (`"" failed`), resulting in aborted sessions and endless retry loops.
*   **[Local File Path Pasting Inconsistencies](https://github.com/anomalyco/opencode/issues/34006)** (3 comments): Pasting local file paths (e.g., `C:\Users\...`) yields different behaviors in the Desktop app versus the Terminal. Furthermore, neither mode currently allows pasting the path as plain text.
*   **[MCP Memory Contaminating Session Titles](https://github.com/anomalyco/opencode/issues/23114)** (3 comments): The agent responsible for auto-generating session titles is pulling context from injected MCP memory/synthetic messages rather than the actual user prompt, resulting in inaccurate chat titles.
*   **[GLM-5.2 Session Crashes on Image Input](https://github.com/anomalyco/opencode/issues/34113)** (2 comments): Testing OpenCode with GLM-5.2 (which lacks vision capabilities) revealed a flaw: the agent blindly attempts to view screenshots based on skill triggers, which breaks the session instead of failing gracefully.
*   **[Mid-Session Model Switching Crashes](https://github.com/anomalyco/opencode/issues/31606)** (2 comments): Switching LLMs during an active session triggers a `SQLiteError: NOT NULL constraint failed: session_message.seq`, permanently bricking the session for all future messages.
*   **[LLMs.txt and Markdown Documentation](https://github.com/anomalyco/opencode/issues/8816)** (14 comments, 33 upvotes): A highly requested feature asking OpenCode to provide an `llms.txt` file and Markdown documentation map so external AI agents can easily parse and understand OpenCode's capabilities.

### 4. Key PR Progress
The engineering team is executing a massive structural refactoring of the test suite. Here are the key merged PRs from the last 24 hours:

*   **[PR #34122: Fix bare slash inline code path](https://github.com/anomalyco/opencode/pull/34122)**: Fixes an edge-case in the UI text classifier to ensure standalone `/` characters are treated as plain inline code rather than path snippets.
*   **[PR #33182: Simplify models layer wiring](https://github.com/anomalyco/opencode/pull/33182)**: Overhauls the models test environment to build dependencies from canonical LayerNode graphs and replaces standard HTTP clients with stateful test clients.
*   **[PR #33153: Simplify git layer wiring](https://github.com/anomalyco/opencode/pull/33153)**: Migrates Git integration tests away from legacy `Git.defaultLayer` provisioning, utilizing canonical LayerNode dependency graphs instead.
*   **[PR #33154: Simplify ripgrep layer wiring](https://github.com/anomalyco/opencode/pull/33154)**: Refactors the internal search/ripgrep test suite to remove reliance on legacy layer wrappers, ensuring fresh graph-based dependencies.
*   **[PR #33172: Simplify agent config layer wiring](https://github.com/anomalyco/opencode/pull/33172)**: Adds a zero-dependency canonical LayerNode for `AgentV2`, streamlining how agent configurations are tested.
*   **[PR #33188: Simplify session prompt layer wiring](https://github.com/anomalyco/opencode/pull/33188)**: Adds canonical source nodes for `SessionV2` and `SessionStore`, removing manual wrapper layers from session prompt testing.
*   **[PR #33177: Simplify file mutation layer wiring](https://github.com/anomalyco/opencode/pull/33177)**: Introduces strict LayerNode declarations for file mutation services, allowing tests to run via instrumented filesystem node replacements.
*   **[PR #33191: Simplify permission layer wiring](https://github.com/anomalyco/opencode/pull/33191)**: Updates the permission system's test environment to replace shared database nodes with isolated, in-memory test layers.
*   **[PR #33184: Simplify location filesystem layer wiring](https://github.com/anomalyco/opencode/pull/33184)**: Migrates the location filesystem and search service test environments to utilize canonical LayerNode architectures.
*   **[PR #33189: Simplify repository cache layer wiring](https://github.com/anomalyco/opencode/pull/33189)**: Rebuilds the repository cache test layer using a scoped Global replacement mapped through the LayerNode graph.

### 5. Feature Request Trends
Based on recent issues, the community is asking for three primary feature enhancements:
*   **Dynamic Provider/Pricing Alignment:** Users expect subscription limits (like the "Go" tier) to dynamically adjust when underlying LLM APIs (like DeepSeek V4 Pro) permanently drop in price.
*   **Broader Model & Parameter Fidelity:** Requests to support newer models (Grok CLI Composer 2.5, GLM-5.2) and expose advanced API parameters—like `reasoning_effort`—directly within the OpenCode UI.
*   **Agent Context & Sub-process Isolation:** Developers want external CLIs and subprocesses spawned by OpenCode to automatically receive environment variables indicating they are running inside an AI agent, alongside better isolation so MCP memory servers don't contaminate auto-generated metadata like session titles.

### 6. Developer Pain Points
*   **Broken Model Integrations:** Tool calling is highly unstable with certain newer models via OpenRouter (Qwen 3.7) or unsupported headers (GitHub Copilot), leading to aborted executions.
*   **Context Compaction Bugs:** "Compaction Loops" are a major frustration. Users note that the context compaction ignores explicit `auto: false` configurations and environment variables, getting stuck in infinite loops that block coding progress.
*   **Desktop App Instability:** Recent versions (v1.15.4 through v1.17.11) have introduced regressions where the app fails to launch on Windows, becomes unresponsive during the "Thinking" phase, or handles simple user inputs (like pasting file paths) inconsistently across Terminal and Desktop environments.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for 2026-06-27.

### 1. Today's Highlights
The Pi ecosystem sees heavy iteration on Terminal UI (TUI) stability and agent lifecycle management, with active discussions around terminal scrollback issues during streaming. The community successfully merged several provider enhancements, including the new Friendli provider, while pushing for rapid compatibility updates to support OpenAI's newly announced GPT-5.6 Sol and its `max` thinking level. 

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **[Issue #4945](https://github.com/earendil-works/pi/issues/4945) - [OPEN] openai-codex Connection Reliability Issues**
    *Why it matters:* A high-impact bug affecting `gpt-5.5` where the interactive TUI gets permanently stuck on `Working...` without streaming text or errors. With 71 comments and 30 upvotes, this is currently the most disruptive provider connectivity issue in the ecosystem.
*   **[Issue #5825](https://github.com/earendil-works/pi/issues/5825) - [OPEN] Streaming markdown forces scroll to bottom**
    *Why it matters:* A highly frustrating UX bug where users scrolling up to read previous markdown output are forcefully snapped back to the bottom during streaming. The root cause is tied to the `clear on shrink` setting triggering full re-renders.
*   **[Issue #5886](https://github.com/earendil-works/pi/issues/5886) - [OPEN] AgentSession settlement/continuation and assistant-tail lifecycle bugs**
    *Why it matters:* A critical meta-issue filed by `mitsuhiko` addressing systemic flaws in post-run agent logic. It highlights race conditions where the agent attempts to continue execution from stale or invalid transcripts.
*   **[Issue #5363](https://github.com/earendil-works/pi/issues/5363) - [OPEN] Add amazon-bedrock-mantle provider**
    *Why it matters:* Points out a crucial architectural mismatch: the existing Bedrock provider uses the Converse API, but Bedrock Mantle models require an OpenAI-compatible endpoint. Highlights the need for more flexible API routing in `packages/ai`.
*   **[Issue #4877](https://github.com/earendil-works/pi/issues/4877) - [OPEN] Session folder collision**
    *Why it matters:* Users working across deeply nested or similarly named directories are experiencing session state overwrites due to a path-sanitization flaw (e.g., `/a/b/c/d` and `/a-b/c-d` resolving to the same hashed folder).
*   **[Issue #5871](https://github.com/earendil-works/pi/issues/5871) - [OPEN] Anthropic OAuth-token detection is hardcoded to `sk-ant-oat`**
    *Why it matters:* Restricts enterprise users from using scoped or custom Anthropic API keys. The community is requesting that OAuth/Bearer credential detection be declarative at the provider level rather than relying on hardcoded string prefixes.
*   **[Issue #6100](https://github.com/earendil-works/pi/issues/6100) - [OPEN] Compaction summary is displayed out of place after session reload**
    *Why it matters:* Breaks conversational context tracking. When a user reloads a compacted session, the summary appears at the very beginning of the chat history rather than at the chronological point the compaction occurred.
*   **[Issue #6097](https://github.com/earendil-works/pi/issues/6097) - [OPEN] Add support for 'max' thinking level**
    *Why it matters:* Future-proofing feature request. OpenAI announced GPT-5.6 Sol with a new sixth `max` reasoning level (mirroring Anthropic's Opus capabilities). This issue tracks adding support for this parameter in Pi's model definitions.
*   **[Issue #6088](https://github.com/earendil-works/pi/issues/6088) - [CLOSED] RpcClient hardcoded 60s wait timeout causes failures**
    *Why it matters:* Blocked long-running MCP tool sessions. Any tool execution taking longer than 60 seconds would automatically fail despite the underlying server still processing the request.
*   **[Issue #6089](https://github.com/earendil-works/pi/issues/6089) - [CLOSED] Register a payload transform on a provider**
    *Why it matters:* A highly requested extensibility enhancement. Extension developers want a unified way to intercept and transform payloads for overridden built-in providers, ensuring modifications apply across all dispatch call paths.

### 4. Key PR Progress
Recent merges and active pull requests shaping the next iteration of Pi:

*   **[PR #6026](https://github.com/earendil-works/pi/pull/6026) - fix(tui): stabilize working status row**
    *Status: Open.* Actively working to resolve the aggressive screen jumping and re-rendering bugs flagged in issue #5825. 
*   **[PR #6090](https://github.com/earendil-works/pi/pull/6090) - feat(ai): add Friendli provider**
    *Status: Closed (Merged).* Adds Friendli as a built-in OpenAI-compatible provider, setting `zai-org/GLM-5.2` as the default model and utilizing the `FRIENDLI_API_KEY` environment variable.
*   **[PR #6087](https://github.com/earendil-works/pi/pull/6087) - fix(coding-agent): remove hardcoded RPC wait timeout**
    *Status: Closed (Merged).* Resolves issue #6088 by stripping out the implicit 60-second timeout cap in `RpcClient` and introduces configurable `waitTimeout` options for long-running MCP servers.
*   **[PR #6064](https://github.com/earendil-works/pi/pull/6064) - feat(experimental): pi orchestrator**
    *Status: Closed (Merged).* Introduces a local orchestrator daemon (`@earendil-works/pi-orchestrator`) communicating via newline-delimited JSON over IPC (`.pi/orchestrator/orchestrator.sock`) to manage lifecycle events for multiple Pi instances.
*   **[PR #6092](https://github.com/earendil-works/pi/pull/6092) - draft: hosted websearch**
    *Status: Closed.* A proof-of-concept exploring an always-on hosted search tool for the agent-loop. Closed by the author but lays the groundwork for native web access plugins.
*   **[PR #6099](https://github.com/earendil-works/pi/pull/6099) - Rename model key from 'gpt-5.2-chat-latest' to 'gpt-5.2-chat'**
    *Status: Closed.* Routine maintenance correcting invalid internal model keys that were causing 404s on specific OpenAI endpoints.
*   **[PR #5515](https://github.com/earendil-works/pi/pull/5515) - feat(coding-agent): add alwaysTrust setting**
    *Status: Closed.* Adds a configuration flag allowing enterprise or sandboxed users to completely bypass project trust gating upon initialization.

### 5. Feature Request Trends
*   **Advanced Reasoning Model Support:** With OpenAI's GPT-5.6 Sol announcement, there is a strong push to expand Pi's cognitive tier parameters, specifically adding support for a `max` thinking level alongside existing low/medium/high mappings.
*   **Enterprise Auth & Key Flexibility:** Developers are moving away from hardcoded string-matching for API keys. There is a trend toward supporting scoped Claude API keys and allowing explicit declarations of OAuth/Bearer credentials at the provider level.
*   **Enhanced Provider Ecosystem:** A continuous influx of requests to integrate more OpenAI-compatible endpoints (Friendli, Amazon Bedrock Mantle) demonstrates the community's desire to use Pi as a universal interface for both local and managed serverless models.
*   **Advanced Context Management:** Developers want better control over memory and lifecycle hooks, evidenced by requests to fix compaction ordering after reloads and safer implementations of `ctx.compact()` inside `turn_end` handlers without aborting tool loops.

### 6. Developer Pain Points
*   **TUI Render Stability:** The terminal UI renderer is causing significant friction. Developers report destructive full redraws inside `tmux`, forced scroll-to-bottom bugs during streaming, and viewport jumping when expanding tool outputs. These full re-renders are even wiping terminal scrollback history.
*   **Agent Lifecycle Wedging:** Persistent crashes and hangs are being reported during session reloads and compaction runs. Specifically, calling `ctx.compact()` or utilizing `RpcClient` for heavy tasks results in fatal TypeErrors and unexpected loop abortions.
*   **Session & State Management:** Hash collisions in directory path-sanitization are causing distinct projects to share the same session state. Additionally, clipboard image pasting in interactive mode currently only submits temporary file paths rather than attaching binary data to the LLM request.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-06-27.

### 1. Today's Highlights
The Qwen Code community is highly active around server stability, CI/CD pipeline hardening, and agentic automation. A critical P1 memory leak bug causing Out-Of-Memory (OOM) crashes on Windows has been swiftly patched via process tree termination. Meanwhile, significant architectural progress was made on the `qwen serve` daemon, introducing support for resumable ACP sessions, team-shared memory, and a direct-to-daemon Chrome extension.

### 2. Releases
*   **[cua-driver-rs-v0.6.8](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.6.8)**
    Released prebuilt binaries for the relative-coordinate fork. Highlights include a codesigned and notarized universal binary for macOS (`QwenCuaDriver.app`), unsigned x86_64/arm64 binaries for Linux (glibc 2.31 floor), and unsigned x86_64/arm64 binaries for Windows.

### 3. Hot Issues
*   **[#5873: P1 - PowerShell processes leak until OOM on Windows](https://github.com/QwenLM/qwen-code/issues/5873)**
    A highly frustrated user reported a 100% reproducible bug where every tool call spawned a new PowerShell process that was never closed, leading to rapid Out-Of-Memory crashes. This highlighted critical flaws in the Windows PTY shell management.
*   **[#5882: P1 - CI cross-PR state contamination](https://github.com/QwenLM/qwen-code/issues/5882)**
    The AI agent CI triage jobs were running un-isolated on a shared ECS runner, causing a PR review meant for #5872 to be accidentally posted onto PR #5874 due to shared state.
*   **[#4175: Proposal - Mode B feature-priority roadmap toward v0.16](https://github.com/QwenLM/qwen-code/issues/4175)**
    A high-discussion tracking proposal (42 comments) detailing the remaining engineering work required to transition the `qwen serve` HTTP/SSE backend and session multiplexing into a production-ready state.
*   **[#5819: P2 - Upgrade auto-modifies settings to expensive models](https://github.com/QwenLM/qwen-code/issues/5819)**
    Users reported alarming behavior post-upgrade where Qwen Code silently modified `setting.json` to default to higher-priced models (e.g., DeepSeek-4 pro), rapidly draining prepaid API credits. 
*   **[#5083: P2 - TUI freezes due to zombie sub-processes](https://github.com/QwenLM/qwen-code/issues/5083)**
    Linux users experienced Terminal UI (TUI) deadlocks. The main process enters an unresponsive 'S' state because zombie `bash` subprocesses spawned by `mcp-remote` are never properly reaped.
*   **[#4218: MCP Server "filesystem" connects but tools are unavailable](https://github.com/QwenLM/qwen-code/issues/4218)**
    Despite the VS Code UI showing a successful connection, the AI model fails to receive tool definitions from the `@modelcontextprotocol/server-filesystem`, rendering it useless.
*   **[#5055: P1 - Antivirus flags VS Code extension as Trojan](https://github.com/QwenLM/qwen-code/issues/5055)**
    Windows Defender flagged the Qwen Code VS Code IDE Companion extension as a Trojan (`JS/ShaiWorm.DBA!MTB`), causing security concerns among enterprise and individual developers.
*   **[#5875: Improve `/skill` command auto-complete matching](https://github.com/QwenLM/qwen-code/issues/5875)**
    Developers requested a UX improvement to allow fuzzy/in-fix matching for slash commands (e.g., typing `/store` suggests `/front-end-store-rules`) instead of requiring strict prefix matches.
*   **[#5881: Open Plan Approval Gate to all plan modes](https://github.com/QwenLM/qwen-code/issues/5881)**
    A proposal to extend the draft/review "Plan Approval Gate" to all plan mode entries, rather than limiting this safety peer-review to model-initiated YOLO sessions.
*   **[#5665: AI-assisted PRs miss integration tests](https://github.com/QwenLM/qwen-code/issues/5665)**
    Maintainers noted an increasing trend where AI-generated code PRs pass unit tests but fail later during release because the AI neglects to update corresponding integration tests.

### 4. Key PR Progress
*   **[PR #5892: Fix Windows pwsh leak](https://github.com/QwenLM/qwen-code/pull/5892)**
    Resolves the P1 memory leak (#5873) by implementing `tree-kill` to properly tear down the entire process tree of interactive PTY shells on Windows, rather than just killing the pseudo-console host.
*   **[PR #5885: Isolate CI agent state](https://github.com/QwenLM/qwen-code/pull/5885)**
    Fixes CI state contamination by provisioning fresh, per-run `$HOME` and `/tmp/stage-*.md` directories for the qwen-triage and PR-review agent jobs.
*   **[PR #5780: Auto-update support](https://github.com/QwenLM/qwen-code/pull/5780)**
    Introduces the highly requested `qwen update` CLI command and `/update` slash command to automatically check npm registries and seamlessly install new releases.
*   **[PR #5852: Resumable `/acp` session streams](https://github.com/QwenLM/qwen-code/pull/5852)**
    Greatly improves daemon stability by wiring the `/acp` Streamable-HTTP session into the event-replay engine, allowing clients to seamlessly resume interrupted streams using `Last-Event-ID`.
*   **[PR #5886: Git-shared team memory](https://github.com/QwenLM/qwen-code/pull/5886)**
    Adds a third auto-memory tier (TEAM) stored locally in `.qwen/team-memory/`. This can be committed to version control, allowing teams to share baseline assistant context via git.
*   **[PR #5890: Durable `/loop` task files](https://github.com/QwenLM/qwen-code/pull/5890)**
    Implements a `.qwen/loop.md` file injected at fire time, giving long-running automated loops a durable, user-editable set of instructions without needing to restart the session.
*   **[PR #5777: Revive Chrome extension](https://github.com/QwenLM/qwen-code/pull/5777)**
    Architecturally overhauls the Chrome extension from a legacy Native Messaging host into a lightweight HTTP+SSE client that connects directly to the local `qwen serve` daemon.
*   **[PR #5030: Seamless interrupted turn resume](https://github.com/QwenLM/qwen-code/pull/5030)**
    Enables SDK/API callers to resume an interrupted assistant turn after a crash or disconnect without artificially injecting a "continue" message into the transcript history.
*   **[PR #5898: Mid-input slash command completion](https://github.com/QwenLM/qwen-code/pull/5898)**
    Enables fuzzy matching, menu navigation, and token replacement for slash commands typed in the middle of a prompt string, matching the UX of line-start commands.
*   **[PR #5856: Voice dictation for Desktop app](https://github.com/QwenLM/qwen-code/pull/5856)**
    Expands the existing `/voice` CLI feature to the Desktop application, adding a UI microphone button with a live waveform for speech-to-text prompt generation.

### 5. Feature Request Trends
*   **Advanced Daemon & Headless Automation:** Users are pushing heavily for robust, session-based remote execution. Features like durable loop task files, background memory processing, and resumable ACP streams indicate a strong desire to use Qwen Code as an automated backend service.
*   **Collaborative & Shared Context:** Requests for team-wide AI memory (PR #5886) and better workspace configurations reflect a shift from individual dev tools to team-aligned coding assistants.
*   **Refined Agentic Safety Controls:** Developers want more granular control over autonomous actions, shown by requests to expand "Plan Approval Gates" (#5881) and implement stricter guardrails against unexpected model switching (#5819).
*   **Flexible AI-assisted CI/CD:** The community is actively building self-hosted AI workflows but requires better sandbox isolation (#5882) and intelligent detection of missing test coverage (#5665).

### 6. Developer Pain Points
*   **Process & Resource Management:** Unreaped zombie processes are a major pain point across operating systems—causing severe memory leaks and OOM crashes on Windows (#5873) and permanent UI freezes on Linux (#5083).
*   **Connection & Streaming Reliability:** A persistent subset of users continues to battle random `API Error: terminated` streaming timeouts (#2938, #1111, #1002) that are hard to reproduce and severely disrupt coding flow.
*   **IDE Extension Instability:** JetBrains users are frustrated by authentication blocks with local LLMs (#2724), and false-positive antivirus detections on Windows (#5055) undermine trust in the VS Code extension.
*   **Silent Configuration Overrides:** The framework occasionally exhibits "helpful" but destructive autonomous behavior, such as silently upgrading configurations to more expensive models (#5819), resulting in unexpected billing.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the community digest for DeepSeek TUI based on the latest GitHub activities.

# DeepSeek TUI Community Digest (2026-06-27)

## 1. Today's Highlights
Today's development focuses heavily on refining execution policies, UI state management, and substantial infrastructure upgrades. The team successfully merged a major refactor separating "Auto" mode from "YOLO" bypass to resolve persistent execution approval bugs, alongside implementing typed permission rules (`allow`/`deny`/`ask`). Additionally, dependency bump sweeps and dead-code cleanup initiatives are actively paving the way for the upcoming v0.9.0 architecture expansion.

## 2. Releases
No new releases were published in the last 24 hours. The project is currently focused on stabilizing the v0.8.x branch and triaging the backlog for the forthcoming v0.9.0 milestone.

## 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **[Issue #3568](https://github.com/Hmbown/CodeWhale/issues/3568) [OPEN]: Plan and agent mode mixed up YET AGAIN**
    *   *Why it matters:* Users report that switching between Plan and Agent modes fails to propagate to the AI's context, causing the model to attempt file modifications while in a planning state. This directly impacts core UX reliability.
*   **[Issue #1186](https://github.com/Hmbown/CodeWhale/issues/1186) [OPEN]: Add typed persistent permission rules**
    *   *Why it matters:* A highly discussed feature request to introduce scoped workspace rules (`allow`, `deny`, `ask`) for tool execution, moving towards more robust and predictable agent safety constraints.
*   **[Issue #3657](https://github.com/Hmbown/CodeWhale/issues/3657) [OPEN]: Editor Freezes and Crashes Codewhale**
    *   *Why it matters:* A critical regression where opening the external editor via `Ctrl-O` completely freezes the application, requiring a manual process kill. 
*   **[Issue #3638](https://github.com/Hmbown/CodeWhale/issues/3638) [OPEN]: Exposed main prompt for broader use cases**
    *   *Why it matters:* The community wants to use DeepSeek TUI for non-engineering tasks (like creative writing) and is requesting the ability to easily override hardcoded system prompts natively via config files.
*   **[Issue #3582](https://github.com/Hmbown/CodeWhale/issues/3582) [CLOSED]: install.sh endpoint returns HTML instead of shell script**
    *   *Why it matters:* A deployment blocker where the documented `curl` installation command was hitting a Next.js HTML route instead of the raw script, breaking onboarding for new users.
*   **[Issue #2870](https://github.com/Hmbown/CodeWhale/issues/2870) [OPEN]: EPIC: staged command-boundary refactor for #2791**
    *   *Why it matters:* A massive architectural EPIC to break down monolithic command handling into group-owned, mergeable layers to ensure maintainability as the tool scales.
*   **[Issue #3490](https://github.com/Hmbown/CodeWhale/issues/3490) [OPEN]: Legacy follow-up and dead-code inventory**
    *   *Why it matters:* Maintainers are aggressively tracking stale `allow(dead_code)` markers and legacy scaffolding to clean up the repository before v0.9.0 development kicks off.
*   **[Issue #3537](https://github.com/Hmbown/CodeWhale/issues/3537) [CLOSED]: Replace hard-coded localization file**
    *   *Why it matters:* The hardcoded localization file has grown to over 5,000 lines, slowing down compilation and blocking the integration of standard translation toolchains.
*   **[Issue #3466](https://github.com/Hmbown/CodeWhale/issues/3466) [CLOSED]: v0.8.66: Approval modal cancellation**
    *   *Why it matters:* Users expressed frustration with overly aggressive destructive-approval prompts introduced in v0.8.64, requesting a reversion to less intrusive logic.
*   **[Issue #861](https://github.com/Hmbown/CodeWhale/issues/861) [CLOSED]: Thinking collapse - multiple root causes**
    *   *Why it matters:* A complex bug where reasoning blocks freeze, truncate, or disappear entirely. Dropping `reasoning_content` directly causes API 400 errors on subsequent turns for DeepSeek models.

## 4. Key PR Progress
Here are the 10 most impactful PRs driving the codebase forward:

*   **[PR #3664](https://github.com/Hmbown/CodeWhale/pull/3664) [CLOSED]: fix(tui): split auto mode from yolo bypass**
    *   *Progress:* Resolves the approval confusion by adding "Auto" as a distinct fourth TUI mode with shell-enabled agent policies, keeping "YOLO" strictly as a true bypass.
*   **[PR #3650](https://github.com/Hmbown/CodeWhale/pull/3650) [CLOSED]: Permission control: deny, allow, and ask actions**
    *   *Progress:* Implements the heavily requested `action = "deny" | "allow" | "ask"` configuration inside `permissions.toml` to give users deterministic control over tool execution.
*   **[PR #3660](https://github.com/Hmbown/CodeWhale/pull/3660) [CLOSED]: fix(app-server): stream stdio thread message deltas**
    *   *Progress:* Bridges stdio `thread/message` endpoints through the Runtime API, allowing third-party stdio clients to finally receive real-time SSE model text streams.
*   **[PR #3663](https://github.com/Hmbown/CodeWhale/pull/3663) [CLOSED]: tui: restore saved session mode on sync**
    *   *Progress:* Ensures that when a user loads a previous session, the engine correctly restores the active AppMode (Plan, Agent, Auto), preventing the context mismatch bugs.
*   **[PR #3637](https://github.com/Hmbown/CodeWhale/pull/3637) [CLOSED]: feat(bridge): support natural-language approval responses**
    *   *Progress:* Chat bridges (like WeCom/Telegram) can now interpret natural language approvals (e.g., "允许", "ok", "yes") instead of requiring users to copy-paste an exact UUID.
*   **[PR #3665](https://github.com/Hmbown/CodeWhale/pull/3665) [CLOSED]: fix(telegram): debounce turn sequence writes**
    *   *Progress:* Optimizes database I/O by debouncing `lastSeq` writes during Telegram SSE streaming while guaranteeing a flush on exit to allow safe session reattachment.
*   **[PR #3673](https://github.com/Hmbown/CodeWhale/pull/3673) [CLOSED]: fix(hash): support sha2 0.11 digest hex**
    *   *Progress:* A rapid follow-up to Dependabot's `sha2` bump, ensuring byte-to-hex formatting remains stable across CLI, TUI, and Fleet components after the library upgrade.
*   **[PR #3661](https://github.com/Hmbown/CodeWhale/pull/3661) [CLOSED]: fix(tui): keep failed tool output expanded**
    *   *Progress:* Fixes a UI rendering gap where failed tool cards were being visually truncated by outer transcript detail filters, hiding crucial error logs from the user.
*   **[PR #3674](https://github.com/Hmbown/CodeWhale/pull/3674) [OPEN]: refactor(runtime-api): extract auth helpers**
    *   *Progress:* Separates token and cookie authentication logic into `runtime_api/auth.rs` to keep the core router file lean and maintainable.
*   **[PR #3640](https://github.com/Hmbown/CodeWhale/pull/3640) [OPEN]: docs: add WeCom Bridge deployment guide**
    *   *Progress:* Expands documentation for deploying enterprise chat bridges, including architecture diagrams, pairing instructions, and security boundaries.

## 5. Feature Request Trends
*   **Granular Agent Autonomy:** Users are strongly requesting more nuanced control over agent execution. The shift is moving away from binary "YOLO vs Manual" modes toward scoped permissions, allowing certain safe commands to run automatically while blocking destructive ones.
*   **Token & Prompt Optimization:** Multiple back-end issues focus on matching Codex CLI's smaller prompt footprint. There is a strong push to reduce static prompt bloat, limit verbose agent chatter, and strip repeated tool-result transcripts to save token context.
*   **Non-Engineering Workflows:** The community is beginning to use DeepSeek TUI for creative writing and screenwriting, requesting first-class support for swapping hardcoded software-engineering system prompts with custom personas.
*   **Cross-Platform Chat Bridges:** High demand for resilient Telegram and WeCom integrations, specifically focusing on MarkdownV2 support, natural language command parsing, and offset/replay safety.

## 6. Developer Pain Points
*   **Mode Desync & Execution Confusion:** Recent releases introduced strict approval workflows and mode changes that confused existing users. Developers are frustrated when the TUI asks for destructive approval even in "YOLO" mode, or when the agent attempts to modify files during "Plan" mode.
*   **Streaming Latency & Timeouts:** Multi-agent configurations and concurrent loads (especially on Windows and Zhipu/GLM endpoints) are still plagued by SSE stream timeouts (the dreaded 45s header timeout), forcing systems to fall back to slower serial execution.
*   **Bloated Localizations & Compilation Overhead:** The monolithic, hard-coded `localization.rs` file has grown massively, negatively impacting Rust compilation times and making UI text updates tedious.

</details>