# AI CLI Tools Community Digest 2026-05-07

> Generated: 2026-05-06 22:13 UTC | Tools covered: 8

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

# AI Developer Tools Ecosystem: Cross-Tool Analysis Report
**Date:** 2026-05-07

## 1. Ecosystem Overview
The AI CLI tooling landscape is rapidly maturing beyond simple terminal-based chatbots into sophisticated, agentic coding environments. Today's digests reveal an ecosystem heavily focused on enterprise-grade reliability, multi-agent/sub-agent orchestration, and deep IDE integrations. However, this rapid iteration comes with growing pains: memory leaks, context window mismanagement, and fragile agent loops are common across the board. As tools compete to become the default interface for software development, community feedback highlights an urgent demand for cost transparency, robust Windows parity, and standardized extension protocols like MCP.

## 2. Activity Comparison
| Tool | Issues Mentioned | PRs Mentioned | Latest Release Version | Release Status |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 5 | v2.1.132 | Active (3 releases today) |
| **OpenAI Codex** | 10 | 10 | rusty-v8-v147.4.0 | Active (Alpha iterations) |
| **Gemini CLI** | 10 | 10 | v0.42.0-preview.2 | Active (Preview patches) |
| **GitHub Copilot CLI** | 10 | 2 | v1.0.43 | Active (3 releases yesterday) |
| **Kimi Code CLI** | 9 | 3 | v1.41.0 | Paused (No new releases) |
| **OpenCode** | 10 | 10 | N/A | Paused (No new releases) |
| **Pi** | 10 | 10 | N/A | Paused (Pre-release merging) |
| **Qwen Code** | 10 | 10 | v0.15.7-preview.0 | Active (Preview/Nightly) |

## 3. Shared Feature Directions
*   **Sub-Agent/Worker Reliability & Permissions** *(Claude Code, Gemini CLI, OpenCode, Qwen Code)*: As tools adopt multi-agent architectures, deadlocks (Claude Code), false success status on max turns (Gemini CLI), and broken permission inheritances (OpenCode) are universal struggles.
*   **MCP (Model Context Protocol) Lifecycle Hardening** *(Claude Code, Copilot CLI, Pi, Kimi Code)*: Communities are demanding better resilience. Pi and Kimi struggle with crashed servers breaking the REPL, while Copilot CLI battles false-positive policy blocks.
*   **Windows & Cross-Platform Parity** *(OpenAI Codex, Copilot CLI, Gemini CLI, Claude Code)*: Windows is universally treated as a secondary citizen. Critical issues include massive memory leaks on macOS (Codex), silent REPL exits on Windows (Claude Code), false malware flags from Windows Defender (Codex), and broken CLI packaging (OpenCode). 
*   **Session/Context Management & Compaction** *(Copilot CLI, OpenCode, Qwen Code)*: Context limits are breaking workflows. Copilot and OpenCode face infinite compaction loops that fill disks or stall execution, while Qwen deals with massive JSONL session bloat.

## 4. Differentiation Analysis
*   **Claude Code** is focused on **enterprise multi-tenancy** and plugin extensibility. Its primary differentiator is currently under fire due to a silent cache TTL regression, but its push for multi-connector support indicates a strong focus on large organizational workflows.
*   **OpenAI Codex** is doubling down on **sandbox security and remote environments**. It is heavily unique in its architectural focus on Windows protected metadata, sandbox ACLs, and remote server lifecycle management.
*   **Gemini CLI** is prioritizing **core agent performance and architecture**. The team is heavily refactoring tool lifecycles and model routing to combat severe agent latency ("slowth") and memory quirks.
*   **GitHub Copilot CLI** is tightly integrating **server-side routing and billing models**. Its unique focus is on navigating premium request consumption limits and enterprise policy enforcement.
*   **Kimi Code, Qwen Code, and Pi** are driving **deep customization, local model support, and accessibility**. Qwen and Kimi are building advanced parallel "Agent Teams" and custom skin systems, while Pi is innovating in Next.js web UIs and modular extension APIs.

## 5. Community Momentum & Maturity
*   **Rapid Iterators (Claude Code, OpenAI Codex, Copilot CLI):** These tools show the highest release velocity, pushing patches directly to address critical auth, billing, and platform crashes. However, this speed results in regular regressions (e.g., Copilot's infinite planning loops, Codex's 75GB memory leaks).
*   **Architectural Evolvers (Gemini CLI, Qwen Code):** Both communities are deeply engaged in fundamental overhauls. Qwen is designing persistent daemon modes, while Gemini is revamping its core `AgentProtocol`. 
*   **Ecosystem Builders (Pi, OpenCode, Kimi Code):** Momentum here is driven by external contributors proposing rich features (YAML skins, Mermaid diagrams, mobile touch). However, OpenCode is currently suffering a crisis in Electron/Desktop stability.

## 6. Trend Signals
*   **Cost & Quota Observability is Non-Negotiable:** As agents scale, they consume massive API resources. The backlash against Claude Code's cache regression and Copilot's silent consumption of 80-100 premium requests per session signals that developers require deterministic, transparent billing.
*   **The Rise of "Daemon Mode":** CLI tools are shedding their purely interactive shells. Proposals in Qwen and Copilot for persistent background agents, web UIs (Pi), and remote headless execution (Codex) indicate the CLI is becoming a local orchestrator rather than just a prompt interface.
*   **Context Window Mismanagement is a Bottleneck:** Across the board, models are failing when context windows fill. Infinite loops, looping summaries, and broken `/undo` states show that tools are struggling to balance reasoning limits with token budgets. Reactive compression and transparent compaction will be required for stable use.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-05-07 | Source: github.com/anthropics/skills*

## 1. Top Skills Ranking

Here are the most actively discussed and closely watched Skills Pull Requests in the ecosystem:

1. **Document Typography (`document-typography`)**
   * **Author:** PGTBoos | **Status:** [OPEN](https://github.com/anthropics/skills/pull/514)
   * **Functionality:** A quality-control skill that prevents common typographic errors in AI-generated documents (e.g., orphan words, stranded widow headers, and numbering misalignment).
   * **Highlights:** Addresses a pervasive "invisible" problem in AI document generation that users rarely prompt for but always notice.

2. **Meta-Quality & Security Analyzers (`skill-quality-analyzer`, `skill-security-analyzer`)**
   * **Author:** eovdisu | **Status:** [OPEN](https://github.com/anthropics/skills/pull/83)
   * **Functionality:** Evaluates community skills across five dimensions (structure, documentation, etc.) and scans for security vulnerabilities.
   * **Highlights:** Highly anticipated meta-skill that would significantly professionalize the community's submission quality and trustworthiness.

3. **Frontend Design Improvements (`frontend-design`)**
   * **Author:** justinwetch | **Status:** [OPEN](https://github.com/anthropics/skills/pull/210)
   * **Functionality:** Revises the existing frontend design skill for better clarity, focusing on single-conversation actionability and strict behavioral steering.
   * **Highlights:** Aims to fix the common issue of skills being too verbose or theoretical rather than providing actionable instructions.

4. **OpenDocument Format Support (`odt`)**
   * **Author:** GitHubNewbie0 | **Status:** [OPEN](https://github.com/anthropics/skills/pull/486)
   * **Functionality:** Allows Claude to create, fill, read, and convert OpenDocument Format files (.odt, .ods) to HTML.
   * **Highlights:** Fills a major gap for open-source and enterprise users relying on LibreOffice and ISO standard document formats.

5. **Critical PDF Fix (`pdf`)**
   * **Author:** Lubrsy706 | **Status:** [OPEN](https://github.com/anthropics/skills/pull/538)
   * **Functionality:** Fixes case-sensitivity mismatches in file references that break the PDF skill on Linux environments.
   * **Highlights:** A crucial, targeted bug fix highlighted by the community as essential for cross-platform compatibility.

6. **DOCX Tracked Changes Fix (`docx`)**
   * **Author:** Lubrsy706 | **Status:** [OPEN](https://github.com/anthropics/skills/pull/541)
   * **Functionality:** Prevents document corruption when adding tracked changes by fixing `w:id` namespace collisions in OOXML.
   * **Highlights:** Solves a silent but severe data corruption issue for users utilizing the DOCX skill in enterprise workflows.

7. **macOS Native Automation (`sensory`)**
   * **Author:** AdelElo13 | **Status:** [OPEN](https://github.com/anthropics/skills/pull/806)
   * **Functionality:** Replaces screenshot-based "computer use" with direct `osascript` (AppleScript) for native macOS automation.
   * **Highlights:** Introduces a two-tier permission system, representing a massive leap forward in local OS automation for Claude.

8. **ServiceNow Platform Suite (`servicenow`)**
   * **Author:** Vanka07 | **Status:** [OPEN](https://github.com/anthropics/skills/pull/568)
   * **Functionality:** A broad enterprise assistant covering ITSM, HRSD, SecOps, Vulnerability Response, and IntegrationHub.
   * **Highlights:** Signals strong community demand for heavy-duty, enterprise-grade platform integration skills.

---

## 2. Community Demand Trends

Based on the most-upvoted and active [Issues](https://github.com/anthropics/skills/issues), the community is pushing heavily toward the following domains:

* **Enterprise Collaboration & Sharing:** The highest-voted active issues (e.g., [Issue #228](https://github.com/anthropics/skills/issues/228), [Issue #189](https://github.com/anthropics/skills/issues/189)) demand organization-wide skill sharing, direct linking, and the elimination of duplicate skills across workspace plugins.
* **Trust & Security Boundaries:** Community members are actively raising alarms about namespace spoofing ([Issue #492](https://github.com/anthropics/skills/issues/492)), requesting agent governance frameworks ([Issue #412](https://github.com/anthropics/skills/issues/412)), and demanding better sandboxing for unofficial community skills.
* **Platform Reliability & Authentication:** A surge of recent issues highlight friction with basic infrastructure, including upload failures ([Issue #406](https://github.com/anthropics/skills/issues/406)), skill deletion errors ([Issue #403](https://github.com/anthropics/skills/issues/403)), and the inability to use skill-creator tools without manual API keys ([Issue #532](https://github.com/anthropics/skills/issues/532)). 
* **MCP Integration:** Users are eager to bridge the gap between internal skills and external tool-use, pushing for Skills to be exposed natively as Model Context Protocol servers ([Issue #16](https://github.com/anthropics/skills/issues/16)).

---

## 3. High-Potential Pending Skills

These active PRs represent high-value additions that are likely to be merged and significantly impact daily workflows:

* **`appdeploy` Skill:** ([PR #360](https://github.com/anthropics/skills/pull/360)) Enables direct deployment and lifecycle management of full-stack web apps to public URLs right from the Claude Code interface.
* **`aurelion-kernel` Suite:** ([PR #444](https://github.com/anthropics/skills/pull/444)) Introduces a structured cognitive framework and persistent memory architecture for professional knowledge management.
* **`shodh-memory` Skill:** ([PR #154](https://github.com/anthropics/skills/pull/154)) A highly requested persistent context system that allows Claude to maintain memory and state across multiple disconnected conversations.
* **`testing-patterns` Skill:** ([PR #723](https://github.com/anthropics/skills/pull/723)) Provides an end-to-end testing philosophy, covering the Testing Trophy model, pure functions, and React component edge cases.

---

## 4. Skills Ecosystem Insight

**Summary:** The community is shifting its focus from basic single-prompt generation tools toward **enterprise-grade workflow automation, secure platform integrations, and persistent memory architectures.**

---

# Claude Code Community Digest — 2026-05-07

---

## 1. Today's Highlights

Three rapid-fire releases dropped in the last 24 hours — **v2.1.129, v2.1.131, and v2.1.132** — bringing session environment variables, a remote plugin URL flag, alternate-screen opt-out, and critical Windows/Mantle auth fixes. The community's top concern remains the **cache TTL regression (#46829)** that silently cut prompt caching from 1 hour to 5 minutes in March, inflating costs and consuming quotas. Meanwhile, the most-discussed enhancement request — **multi-account/multi-connector support (#27302)** — continues to gain momentum with 167 comments and 219 upvotes.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v2.1.132** | Added `CLAUDE_CODE_SESSION_ID` env var to Bash subprocess environment (aligns with hook `session_id`). Added `CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN=1` to opt out of the fullscreen alternate-screen renderer and keep conversation in the normal terminal buffer. |
| **v2.1.131** | Fixed VS Code extension failing to activate on Windows due to a hardcoded build path in the bundled SDK (`createRequire` polyfill bug). Fixed Mantle endpoint authentication failing with a missing `x-api-key` header. |
| **v2.1.129** | Added `--plugin-url <url>` flag to fetch a plugin `.zip` archive from a URL for the current session. Added `CLAUDE_CODE_FORCE_SYNC_OUTPUT=1` env var to force-enable synchronized output on terminals where auto-detection misses (e.g., Emacs `eat`). Truncated release notes suggest additional package-manager improvements. |

---

## 3. Hot Issues

1. **[#46829] Cache TTL silently regressed from 1h to 5m** *(240 👍, 55 comments, CLOSED)*
   Analysis of session JSONL files revealed Anthropic silently changed the prompt cache TTL around early March 2026, significantly inflating costs and consuming rate-limit quotas. This is the highest-upvoted issue in the current window and has generated extensive community discussion around billing transparency. ([Issue](https://github.com/anthropics/claude-code/issues/46829))

2. **[#27302] Support multiple Connector accounts** *(219 👍, 167 comments, OPEN)*
   Users who need the same connector with different accounts (e.g., separate GitHub orgs) cannot configure this. The oldest and most-commented issue in this digest, it reflects a fundamental limitation for enterprise and multi-tenant workflows. ([Issue](https://github.com/anthropics/claude-code/issues/27302))

3. **[#30154] Multi-window support in Claude Code Desktop** *(123 👍, 40 comments, OPEN)*
   The desktop app is single-window with a sidebar session manager. Power users want side-by-side sessions. Strong community resonance among macOS desktop users. ([Issue](https://github.com/anthropics/claude-code/issues/30154))

4. **[#20131] Multi-Account Profile Support** *(69 👍, 28 comments, OPEN)*
   Users with separate API billing and subscription accounts must fully log out and re-authenticate to switch. A companion to #27302 focused on authentication-level profile switching. ([Issue](https://github.com/anthropics/claude-code/issues/20131))

5. **[#55982] Plan upgrade payment fails — PaymentIntent voided** *(6 👍, 21 comments, OPEN)*
   Upgrading plans triggers a Stripe race condition where `void_invoice` fires before the payment can confirm. High comment velocity for a bug filed just three days ago, suggesting it affects many users attempting upgrades simultaneously. ([Issue](https://github.com/anthropics/claude-code/issues/55982))

6. **[#18950] Skills/subagents do not inherit user-level permissions** *(48 👍, 19 comments, OPEN)*
   Permissions set in `~/.claude/settings.json` under `permissions.allow` are not inherited by subagents, causing re-prompting for every bash command inside a skill. A security-area bug that directly impacts agent workflows. ([Issue](https://github.com/anthropics/claude-code/issues/18950))

7. **[#55424] Windows REPL silently exits during long-running agent chains** *(10 comments, OPEN)*
   On Windows PowerShell, Claude Code silently drops to the shell prompt during dense Bash subprocess chains within agent runs — no error, no traceback. A critical reliability regression for Windows users. ([Issue](https://github.com/anthropics/claude-code/issues/55424))

8. **[#44783] Parent session deadlocks when subagent tool hangs** *(5 comments, OPEN)*
   A hanging subagent tool execution freezes the parent session indefinitely with no timeout or circuit breaker. Reports of 7+ hour hangs. A fundamental resilience gap in the agent architecture. ([Issue](https://github.com/anthropics/claude-code/issues/44783))

9. **[#56815] Interactive mode doesn't spawn stdio MCP servers from project `.mcp.json`** *(2 comments, CLOSED)*
   v2.1.131 introduced a regression where stdio MCP servers in project-scope config are ignored in interactive mode but work in headless `claude -p`. Directly impacts MCP-heavy workflows. ([Issue](https://github.com/anthropics/claude-code/issues/56815))

10. **[#56795] Confident hallucinations worsening since Opus 4.7** *(2 comments, OPEN)*
    Users report increased confident but incorrect outputs and "gaslighting" behavior since the Opus 4.7 model update, especially when the user describes their own system architecture. Highlights ongoing model-behavior concerns. ([Issue](https://github.com/anthropics/claude-code/issues/56795))

---

## 4. Key PR Progress

Only 5 PRs saw updates in the last 24 hours, so all are summarized:

1. **[#49596] Refactor: extract shared GitHub API client** — Extracts a shared `github-api.ts` with tests, consolidating duplicated GitHub API logic across the codebase. ([PR](https://github.com/anthropics/claude-code/pull/49596))

2. **[#56784] Pin GitHub Actions to commit SHAs** — Security hardening: pins third-party GitHub Actions to immutable commit SHAs rather than mutable tags, preventing supply-chain attacks. ([PR](https://github.com/anthropics/claude-code/pull/56784))

3. **[#56621] Fix duplicate rules on init firewall** — The `init-firewall.sh` dev setup script fails if firewall rules already exist. This PR adds idempotency checks. ([PR](https://github.com/anthropics/claude-code/pull/56621))

4. **[#42162] Fix hookify plugin relative imports** *(CLOSED)* — Fixed the `hookify` plugin's import paths so it works correctly when installed via the plugin cache (`~/.claude/plugins/cache/...`). ([PR](https://github.com/anthropics/claude-code/pull/42162))

5. **[#20824] Add CLAUDE.md guidelines** *(CLOSED)* — Added a comprehensive `CLAUDE.md` document describing repository structure, plugin system, and development workflows for AI-assisted contributions. ([PR](https://github.com/anthropics/claude-code/pull/20824))

---

## 5. Feature Request Trends

- **Multi-account & multi-tenant workflows** dominate: multi-connector accounts (#27302), multi-account profiles (#20131), and organization plugin syncing (#56820) all point to users operating across organizational boundaries.
- **Session & workspace management**: multi-window support (#30154), session renaming (#56825), and cross-session usage tracking (#56824) reflect power users juggling many concurrent workstreams.
- **Plugin lifecycle & hook extensibility**: plugin lifecycle hooks for install/update/uninstall (#48986) and statusline customization in managed-hook environments (#56380) show the community pushing for a richer plugin ecosystem.
- **Cost observability**: requests for per-session and daily usage dashboards (#56824), combined with the cache TTL cost issue (#46829), indicate that token spend transparency is a growing priority.
- **Cowork & scheduled task flexibility**: configurable storage locations for scheduled tasks (#54859) and VM boot freezing (#50627) reveal that the Cowork feature still has UX rough edges.

---

## 6. Developer Pain Points

- **Cost and quota unpredictability**: The silent cache TTL regression (#46829) and confusing daily-limit reset timers (#56801) are eroding trust. Developers want deterministic, transparent billing signals.
- **Agent/subagent reliability**: Deadlocks on hanging subagents (#44783), silent Windows REPL exits (#55424), and permissions not inheriting into skills (#18950) make agent workflows fragile in production.
- **MCP server initialization flakiness**: Multiple issues (stdio servers not spawning in interactive mode #56815, servers showing "Connected" but never registering tools #42442, Chrome extension URL conflicts #16239) suggest the MCP connection lifecycle needs hardening.
- **Windows support gaps**: Beyond the REPL crash, the installer PATH conflict (#56817) and the VS Code activation fix in v2.1.131 indicate Windows is still a second-class platform.
- **Remote/iOS client synchronization**: The `/compact` command hanging remote iOS clients until desktop input is received (#56811) limits the utility of Claude's remote access story.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for 2026-05-07.

### 1. Today's Highlights
The Codex development team is heavily focused on fortifying the Windows sandbox environment and expanding remote environment capabilities, as evidenced by a massive series of interconnected PRs merged today. The community remains highly engaged on scaling and performance limits, with a dominant ongoing discussion advocating for 1M token context windows in GPT-5.5. Meanwhile, several critical platform stability issues—including severe memory leaks on macOS and connectivity bugs—are garnering significant developer attention.

### 2. Releases
*   **rust-v0.129.0-alpha.8 through alpha.12:** A rapid succession of alpha builds were released, iterating on the Rust core.
*   **rusty-v8-v147.4.0:** An update to the underlying V8 JavaScript engine bindings for Rust.
*(Note: Detailed release notes were not provided in the data source, indicating these are likely iterative pre-release builds and dependency bumps).*

### 3. Hot Issues
1.  **[#19464 Support 1M token context for GPT-5.5 in Codex](https://github.com/openai/codex/issues/19464)** - Highly requested feature (167 👍) asking OpenAI to bridge the gap between the 400K Codex limit and the full 1M context window available via the GPT-5.5 API.
2.  **[#20161 Phone number verification doesn't work](https://github.com/openai/codex/issues/20161)** - A widespread auth bug locking users out of their accounts via SSO when switching devices. Sparked 94 comments from frustrated developers.
3.  **[#20740 Codex memory grows to 75GB+ during basic session](https://github.com/openai/codex/issues/20740)** - A critical performance regression where standard usage triggers massive memory leaks, completely exhausting macOS application memory.
4.  **[#8259 Format Markdown tables so that they are readable by humans](https://github.com/openai/codex/issues/8259)** - A heavily upvoted issue (110 👍) requesting better TUI formatting for ASCII/Markdown table outputs.
5.  **[#20315 browser-use marked as trojan by Windows Defender](https://github.com/openai/codex/issues/20315)** - A significant Windows friction point where legitimate Codex browser-client scripts are flagged as malware, blocking browser automation tasks.
6.  **[#21179 "Failed to create task" when starting a new cloud task](https://github.com/openai/codex/issues/21179)** - A blocking bug in the Codex Web UI preventing users from launching cloud tasks.
7.  **[#12862 CLI: add --worktree and --tmux flags](https://github.com/openai/codex/issues/12862)** - Popular enhancement request (39 👍) to streamline isolated git worktree and tmux session management directly from the Codex CLI.
8.  **[#20162 Speed setting resets to Fast on VS Code reopen](https://github.com/openai/codex/issues/20162)** - A persistent UX bug in the VS Code extension overriding user model-speed preferences.
9.  **[#19903 macOS app runs git add on entire home directory](https://github.com/openai/codex/issues/19903)** - A dangerous bug causing the macOS desktop app to index the user's entire home folder (including `.claude/` and browser caches), pinning the CPU at 100%.
10. **[#21425 Separate installed plugins from per-session skill metadata injection](https://github.com/openai/codex/issues/21425)** - Highlights developer friction with the current skills system, where enabled plugins quickly eat up the context metadata budget.

### 4. Key PR Progress
1.  **[#21424 Add top-level remote-control command](https://github.com/openai/codex/pull/21424)** - Introduces a user-friendly `codex remote-control` CLI wrapper to replace clunky, hard-to-remember flags for launching headless app-servers.
2.  **[#21109 feat(tui): add local file upload command](https://github.com/openai/codex/pull/21109)** - Adds a `/upload <local-path>` command to the TUI, allowing users to stream local files to remote hosts via the shared websocket SFTP lane.
3.  **[#20667 Load configured environments from CODEX_HOME](https://github.com/openai/codex/pull/20667)** - Activates the environment manager, allowing Codex to discover and use environments defined in `CODEX_HOME/environments.toml`. 
4.  **[#20664 Add stdio exec-server client transport](https://github.com/openai/codex/pull/20664)** - Implements JSON-RPC over stdio streams, allowing Codex to spin up, communicate with, and clean up exec-server processes dynamically.
5.  **[#21035 Enforce Windows protected metadata targets](https://github.com/openai/codex/pull/21035)** - Lands the core enforcement logic preventing sandboxed commands from modifying protected metadata paths on Windows.
6.  **[#21175 Wire missing Windows metadata to deny sentinel](https://github.com/openai/codex/pull/21175)** - Ensures that if protected paths (like `.git`, `.codex`) are missing, they are replaced with "deny sentinels" so they cannot be maliciously created inside the sandbox.
7.  **[#21174 Add Windows missing metadata deny sentinel](https://github.com/openai/codex/pull/21174)** - Adds the specific adapter logic to deny the creation of absent protected paths during command execution.
8.  **[#21041 Inject Git safe directory for Windows legacy sandbox](https://github.com/openai/codex/pull/21041)** - Resolves an issue where Windows security ACLs would accidentally break Git plumbing by marking the sandbox directory as unsafe.
9.  **[#21036 Deny Windows protected metadata symlink targets](https://github.com/openai/codex/pull/21036)** - Extends sandbox security to ensure write operations cannot bypass protections by targeting symlinks or reparse points.
10. **[#20718 Add Unix-only app-server daemon lifecycle management](https://github.com/openai/codex/issues/20718)** - Standardizes the bootstrapping and lifecycle management of `codex app-server` for SSH-reached remote machines.

### 5. Feature Request Trends
*   **Advanced Context Scaling:** Developers are actively pushing for the extension of context limits (up to 1M tokens) and better management of context budgets, particularly regarding how injected plugins/skills consume precious metadata space.
*   **Deep Workspace Isolation:** There is a strong desire for first-class git-worktree and tmux support built directly into the CLI, removing the need for custom developer wrapper scripts.
*   **TUI Quality of Life (QoL):** Users want the CLI to behave more like a modern IDE, demanding better Markdown rendering for tables and full Vim-emulation support (e.g., `ciw`, `diw` text objects) in the composer.

### 6. Developer Pain Points
*   **System Stability & Resource Exhaustion:** Memory leaks (upwards of 75GB on macOS) and runaway CPU utilization (uncontrolled `git add` processes) are making the desktop app unusable for some.
*   **False Positive Security Blocks:** Codex's safety-checks are erroneously flagging benign coding tasks as "cybersecurity risks," and Windows Defender is routinely flagging the `browser-client.mjs` as a trojan.
*   **Platform-Specific App Bugs:** Windows users note that running the app via WSL is agonizingly slow compared to the native CLI, and macOS users report persistent PTY leaks and Gatekeeper blocks on Homebrew installs.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-07

## 1. Today's Highlights
Gemini CLI rolls out rapid patches across its stable and preview tracks, releasing **v0.41.2** and **v0.42.0-preview.2** to address critical regressions. Meanwhile, the open-source community and core maintainers are heavily focused on architectural overhauls for tool lifecycles, memory system reliability, and agent performance bottlenecks.

## 2. Releases
*   **v0.41.2** & **v0.41.1**: Patch releases cherry-picking critical fixes (commit `3627f47` and `02995ba`) into the stable `v0.41.x` line. ([v0.41.2 Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.41.1...v0.41.2))
*   **v0.42.0-preview.2** & **v0.42.0-preview.1**: Preview patches targeting the upcoming `v0.42.0` release. ([v0.42.0-preview.1 Changelog](https://github.com/google-gemini/gemin))
*   **v0.42.0-nightly.20260506**: Includes targeted fixes for an A2A server tool approval race condition and a UI bug clipping the settings dialog border. ([Release Notes](https://github.com/google-gemini/gemini-cli))

## 3. Hot Issues
1.  **Extreme Agent Slowth ([#22141](https://github.com/google-gemini/gemini-cli/issues/22141))**: With 154 👍 and 190 comments, this is the most active issue. Users report the CLI taking 1+ hours or getting stuck on minor code edits due to agent loop delays. 
2.  **`save_memory` Tool Not Found ([#26563](https://github.com/google-gemini/gemini-cli/issues/26563))**: A breaking UX where running `/memory add` fails in v0.41.1 because the `save_memory` tool is missing.
3.  **Subagents Bypassing Permissions ([#22093](https://github.com/gemini/gemini-cli/issues/22093))**: A critical security/UX regression where subagents execute without user permission even when disabled in configurations.
4.  **Shell Execution Hangs ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))**: The CLI falsely reports "Waiting input" after a simple shell command finishes, requiring manual intervention.
5.  **Repeated Permission Prompts ([#24916](https://github.com/google-gemini/gemini-cli/issues/24916))**: The CLI repeatedly asks for file permissions despite users selecting "allow for all future sessions."
6.  **400 Error with >128 Tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))**: The agent crashes with a 400 API error when tool availability exceeds a certain threshold, highlighting a need for better dynamic tool scoping.
7.  **Model Creates Stray Tmp Scripts ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571))**: The agent frequently pollutes the workspace with temporary edit scripts, creating cleanup overhead.
8.  **Subagent False Success on `MAX_TURNS` ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))**: Subagents hitting their turn limit report `status: "success"`, masking incomplete executions from the parent agent.
9.  **Browser Agent Fails in Wayland ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983))**: Linux users on Wayland face persistent crashes/failures when invoking the browser subagent.
10. **Auto Memory Retries Low-Signal Sessions ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522))**: The background memory extractor gets stuck in a loop, repeatedly retrying sessions it deems "low-signal" instead of marking them processed.

## 4. Key PR Progress
1.  **Formalize Tool Lifecycle States ([#26529](https://github.com/google-gemini/gemini-cli/pull/26529))**: Decouples UI rendering from legacy metadata by introducing first-class tool lifecycle states in the `AgentProtocol`, leading to more predictable UI updates.
2.  **Hide `/memory add` in MemoryV2 ([#26605](https://github.com/google-gemini/gemini-cli/pull/26605))**: Mitigates the `save_memory` tool error (Issue #26563) by cleanly hiding the legacy `/memory add` command when the experimental MemoryV2 is active.
3.  **Cache Model Routing Decision ([#26548](https://github.com/google-gemini/gemini-cli/pull/26548))**: Improves agent performance by caching the `auto` model routing decision for the duration of a subagent session, bypassing redundant `ModelRouterService` calls.
4.  **Stream Output for Background Shell Commands ([#25825](https://github.com/google-gemini/gemini-cli/pull/25825))**: Introduces `stream_output: true` to `run_shell_command`, allowing background processes to stream `stdout` to the client in real-time.
5.  **Uncap Metric Reporting ([#26612](https://github.com/google-gemini/gemini-cli/pull/26612))**: Refactors internal bottleneck and priority distribution metrics to use GraphQL `totalCount`, eliminating visibility gaps in issue triage.
6.  **Fix Transcribed Text Disappearing ([#26609](https://github.com/google-gemini/gemini-cli/pull/26609))**: Resolves a voice input bug where transcribed text vanished after releasing the push-to-talk spacebar by extending the draining grace period.
7.  **Fix Korean/IME Input Composition ([#18868](https://github.com/google-gemini/gemini-cli/issues/18868))**: Closed a long-standing bug where IME character composition steps were not displayed in the interactive prompt.
8.  **Better Bot Evaluation Rigor ([#26303](https://github.com/google-gemini/gemini-cli/pull/26303))**: Upgrades the automated Gemini CLI Bot with multi-iteration feedback loops and architectural conflict resolution.
9.  **Migrate Core Tools to `ToolDisplay` ([#25186](https://github.com/google-gemini/gemini-cli/pull/25186))**: Deprecates legacy `returnDisplay` adapters, shifting visual rendering schemas directly to the tools themselves.
10. **Windows CMD Arg Wrapping ([#26599](https://github.com/google-gemini/gemini-cli/pull/26599))**: Fixes an annoying Windows bug where session resume messages unnecessarily quoted session IDs in `cmd.exe`.

## 5. Feature Request Trends
*   **AST-Aware Codebase Navigation**: Maintainers are actively investigating AST-aware file reading/searching ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)) to reduce token noise and improve tool accuracy.
*   **Robust Sub-Agent Management**: Strong demand for better browser agent resilience ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)) and strict handling of subagent lifecycles/truthful status reporting.
*   **Deterministic Auto-Memory & Redaction**: A cluster of issues ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)) request deterministic secret redaction and quarantine mechanisms for the new Auto Memory system.
*   **Destructive Behavior Guardrails**: Users want the CLI to inherently block or discourage high-risk shell commands (e.g., `git reset --force`) ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).

## 6. Developer Pain Points
*   **Agent Loop Performance**: The CLI occasionally enters debilitating slow-downs, taking up to 14 minutes for simple tasks, which remains the top community frustration ([#22141](https://github.com/google-gemini/gemini-cli/issues/22141)).
*   **State & Permission Persistence**: Users are highly frustrated by the CLI "forgetting" states—whether it's repeatedly asking for file permissions ([#24916](https://github.com/google-gemini/gemini-cli/issues/24916)), silently dropping Gemini 3 thought signatures from history ([#25810](https://github.com/google-gemini/gemini-cli/pull/25810)), or hanging on "Waiting input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)).
*   **Cross-Platform Shell Failures**: Default system prompts suggesting `&&` chaining continually break workflows for Windows users on PowerShell ([#26174](https://github.com/google-gemini/gemini-cli/pull/26174)), highlighting a need for better OS-specific shell adaptations.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-07

## 1. Today's Highlights
GitHub Copilot CLI landed three back-to-back releases (v1.0.42, v1.0.43-0, v1.0.43) on 2026-05-06, bringing server-side model routing for Auto mode, better MCP server lifecycle management, and a security hardening fix for RCE protection. The community was highly active around premium request consumption in agentic sessions, with a critical closed issue (#2591) revealing that a single agent session can consume 80–100 premium requests due to tool invocations. Meanwhile, multiple reports of a Plan→Compact→Re-Plan infinite loop in agent sessions (#3151–#3158) emerged as a high-severity concern.

---

## 2. Releases

### [v1.0.43](https://github.com/github/copilot-cli/releases/tag/v1.0.43) (2026-05-06)
- **Username toggle** in `/statusline` picker to display the active account in the footer.
- **Auto mode** now uses server-side model routing for improved real-time model selection.
- **Resume prompt** correctly shows the session name when multiple sessions are active.
- **Security fix**: Protection against RCE from malicious inputs (details limited).

### [v1.0.43-0](https://github.com/github/copilot-cli/releases/tag/v1.0.43-0) (2026-05-06)
- **Improved**: Download progress bar now shown when running the update command.
- **Fixed**: MCP server child processes (e.g., started via `npx` or `uvx`) are now fully terminated when a session ends — previously they could become orphaned.

### [v1.0.42](https://github.com/github/copilot-cli/releases/tag/v1.0.42) (2026-05-06)
- MCP server failure warning now suggests a directly runnable `/mcp show` command (even with whitespace in server names).
- MCP server failure warnings now include `stderr` output for easier diagnosis of connection errors.
- Added `-C <directory>` flag to change working directory before starting (similar to `git -C`).

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| 1 | [#2591](https://github.com/github/copilot-cli/issues/2591) — **Infinite premium requests consumed per tool invocation** (CLOSED) | A single session consumed 80–100 premium requests because each agent thinking/tool step counted as a separate request. Directly impacts billing and usability. | 32 comments, 13 👍 — highest engagement today |
| 2 | [#2101](https://github.com/github/copilot-cli/issues/2101) — **Transient API error → rate limit** (OPEN) | Persistent `Request failed due to a transient API error` leading to rate limiting, blocking work for many users. | 24 comments, 16 👍 — most thumbs-up among open issues |
| 3 | [#3158](https://github.com/github/copilot-cli/issues/3158) — **Plan→Compact→Re-Plan infinite loop (217 cycles)** (OPEN) | After auto-compaction, the agent re-reads the summary and re-plans instead of executing, looping 217+ times with zero code output. A critical agent reliability issue. | One of 6 near-duplicate reports (#3151–#3158) filed the same day |
| 4 | [#3162](https://github.com/github/copilot-cli/issues/3162) — **Falsely reports registry-listed MCP servers as blocked** (OPEN) | v1.0.42 introduced a regression where legitimate MCP registry servers are flagged as policy-blocked, breaking existing workflows. | Filed against the latest release; blocks MCP adopters |
| 5 | [#3101](https://github.com/github/copilot-cli/issues/3101) — **"Failed to load models: access denied by Copilot policy"** (OPEN) | Enterprise users on v1.0.40+ cannot load models at all due to policy denial — a complete usage blocker. | 5 comments, 3 👍; tagged `area:enterprise` |
| 6 | [#2795](https://github.com/github/copilot-cli/issues/2795) — **`--agent` doesn't work with `--plugin-dir` in non-interactive mode** (OPEN) | Combining `--agent`, `--plugin-dir`, and `-p` fails to locate agents in plugin directories, breaking CI/automation pipelines. | 5 comments, 15 👍 — strong community demand |
| 7 | [#1944](https://github.com/github/copilot-cli/issues/1944) — **Mouse wheel scroll captured by input box on Windows** (CLOSED) | A regression where scrolling in Windows no longer scrolls chat history but instead cycles through input messages. | 8 comments; usability pain for Windows users |
| 8 | [#3080](https://github.com/github/copilot-cli/issues/3080) — **`claude-opus-4.7-high` rejects requests (400 error)** (OPEN) | CLI sends `reasoning_effort: "medium"` to a model that only supports `"high"`, with no UI to change the setting — making the model unusable. | 2 comments, 2 👍; blocks new model adoption |
| 9 | [#3160](https://github.com/github/copilot-cli/issues/3160) — **Unable to use Copilot after 1.0.40 on Windows (WinGet)** (OPEN) | Post-1.0.40, Windows users encounter `EPERM` errors during package extraction, preventing installation entirely. | Fresh report; tagged `area:platform-windows` |
| 10 | [#3159](https://github.com/github/copilot-cli/issues/3159) — **Effort level ignored during `/model` switch** (OPEN) | When switching models with an effort level specified, the CLI retains the previous model's effort — a silent correctness bug. | Just filed; affects power users switching models frequently |

---

## 4. Key PR Progress

Only 2 PRs were updated in the last 24 hours, neither representing significant feature work:

| PR | Description | Status |
|----|-------------|--------|
| [#3163](https://github.com/github/copilot-cli/pull/3163) | Appears to be a spam/low-quality PR referencing monitor setup and GitHub Actions runners. | OPEN |
| [#3137](https://github.com/github/copilot-cli/pull/3137) | Adds an initial devcontainer configuration for the repository. | CLOSED |

**Note**: The majority of today's activity is concentrated in Issues rather than external PRs, suggesting the core team is handling development internally.

---

## 5. Feature Request Trends

Based on the issue backlog, the following feature directions are emerging:

1. **Enhanced Subagent Observability** — [#1322](https://github.com/github/copilot-cli/issues/1322) (12 👍) requests detailed subagent tool call visibility, mirroring VS Code Copilot Chat's drill-in capability. Users want to see *what* agents are doing, not just that they completed.

2. **Clickable File References in Terminal** — [#3134](https://github.com/github/copilot-cli/issues/3134) proposes making `@file` references clickable links in CLI output, enabling direct file opens from the terminal.

3. **Private Repository Support in Plugin Marketplace** — [#1243](https://github.com/github/copilot-cli/issues/1243) requests `/plugin marketplace add` support for private repos, critical for enterprise teams.

4. **Protobuf OTLP Export** — [#2934](https://github.com/github/copilot-cli/issues/2934) asks for `OTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf` support, as the current JSON-only export is non-standard.

5. **Remote Session Sync Scope Command** — [#3164](https://github.com/github/copilot-cli/issues/3164) (closed) requested a CLI command to change session sync scope post-init, reflecting demand for more flexible session management.

---

## 6. Developer Pain Points

### 🔴 Premium Request Consumption is Opaque and Excessive
The highest-engagement issue ([#2591](https://github.com/github/copilot-cli/issues/2591), 32 comments) reveals that agentic sessions can silently consume 80–100 premium requests from a single invocation. Combined with rate limiting complaints ([#2101](https://github.com/github/copilot-cli/issues/2101), 16 👍), developers have **no visibility** into how many requests remain or what triggers consumption. This is the top community grievance.

### 🔴 Agent Reliability: Plan→Compact→Re-Plan Loop
Six near-identical issues ([#3151](https://github.com/github/copilot-cli/issues/3151)–[#3158](https://github.com/github/copilot-cli/issues/3158)) were filed the same day describing an infinite planning loop after auto-compaction. The agent re-reads its own summary and re-plans instead of executing, looping 217 times. This is a **critical blocker** for long coding sessions that fill the context window.

### 🟡 Enterprise Authentication & Policy Confusion
Multiple issues ([#3101](https://github.com/github/copilot-cli/issues/3101), [#3161](https://github.com/github/copilot-cli/issues/3161)) highlight enterprise authentication failures and false-positive policy blocks. Enterprise users report being completely locked out after upgrading, with unclear error messages and no documented workaround.

### 🟡 MCP Integration Instability
v1.0.42 introduced improved MCP error messaging but also a regression ([#3162](https://github.com/github/copilot-cli/issues/3162)) where valid registry servers are falsely flagged as policy-blocked. The `sampling/createMessage` response also leaks system prompts ([#2467](https://github.com/github/copilot-cli/issues/2467)), and child process cleanup was only fixed in v1.0.43-0. MCP remains a fragile integration point.

### 🟡 Windows Platform Falling Behind
Windows-specific issues persist: mouse scroll regression ([#1944](https://github.com/github/copilot-cli/issues/1944)), installation failures post-1.0.40 ([#3160](https://github.com/github/copilot-cli/issues/3160)), and terminal rendering problems ([#2405](https://github.com/github/copilot-cli/issues/2405)). Windows users appear to be a second-class platform.

---

*Data sourced from [github.com/github/copilot-cli](https://github.com/github/copilot-cli) — issues and releases updated as of 2026-05-06.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-07

## 1. Today's Highlights

The Kimi Code CLI community is currently experiencing high friction around **system prompt removal and session stability**, with multiple reports of unusable conversations on the latest v1.41.0. A promising **user-customizable color skin system** has been proposed and immediately implemented via PR, while architectural improvements like **RalphFlow** (loop-prevention framework) and **rich prompt block editing** continue to mature in the open PR pipeline.

---

## 2. Releases

No new releases were published in the last 24 hours. The latest stable version remains **v1.41.0**.

---

## 3. Hot Issues

1. **[#769](https://github.com/MoonshotAI/kimi-cli/issues/769) — MCP connection failure should not cause CLI to exit** *(👍 6)*
   Long-standing request (since Jan 2026) to degrade gracefully when an MCP server is unavailable, matching the behaviour of Codex and Claude Code. Users are frustrated that a single broken MCP endpoint blocks the entire REPL. Community consensus favours a warning-and-continue approach.

2. **[#2168](https://github.com/MoonshotAI/kimi-cli/issues/2168) — System prompt removed, making the tool unusable** *(👍 1)*
   Reporter on v1.41.0 (Linux/macOS) says the system prompt has disappeared entirely, rendering Kimi Code non-functional. A critical regression if confirmed; no maintainer response yet.

3. **[#2017](https://github.com/MoonshotAI/kimi-cli/issues/2017) — Conversation cannot continue with large context** 
   On v1.37.0/Windows, the model returns "Service temporarily unavailable" once context grows. Points to context-window handling or API quota exhaustion in long sessions.

4. **[#2152](https://github.com/MoonshotAI/kimi-cli/issues/2152) — Global `~/.kimi/AGENTS.md` for multi-project shared conventions** *(👍 2)*
   Developers juggling 10+ projects want a global `AGENTS.md` so shared coding rules don't need to be duplicated per repo. A clear ergonomic win for power users.

5. **[#2171](https://github.com/MoonshotAI/kimi-cli/issues/2171) — RFC: User-customizable color skins via YAML**
   Proposes `~/.kimi/skins/<name>.yaml` files to define full color palettes beyond the two built-in themes. Addresses accessibility, custom terminal branding, and personal preference.

6. **[#2169](https://github.com/MoonshotAI/kimi-cli/issues/2169) — Non-interactive `kimi usage` for programmatic quota checks**
   No scripting/CI-friendly way to check remaining quota. Users want `--print` or a dedicated sub-command instead of being forced into the interactive REPL.

7. **[#2166](https://github.com/MoonshotAI/kimi-cli/issues/2166) — SIGSEGV crash on Python 3.14.0a6 (PyYAML C extension ABI)**
   Segfault on any non-trivial command under Python 3.14+. Only `--help`/`--version` survive. A hard blocker for early adopters on the Python 3.14 alpha track.

8. **[#2165](https://github.com/MoonshotAI/kimi-cli/issues/2165) — Invalid tool call corrupts the whole session**
   When using a local vllm-deployed kimi-k2.6, a malformed tool call from the model poisons the session irrecoverably. Better error isolation is needed.

9. **[#2167](https://github.com/MoonshotAI/kimi-cli/issues/2167) — Web UI tab title blink for pending approval actions**
   Multi-tab users miss tool-approval prompts because the Web UI provides no visual notification. Requests `document.title` flashing or badge updates.

---

## 4. Key PR Progress

1. **[#2170](https://github.com/MoonshotAI/kimi-cli/pull/2170) — `feat: add user-customizable color skins via YAML`** *(VrtxOmega)*
   Same-day implementation of the skins RFC (#2171). Adds a `/skin` slash command and a YAML loader from `~/.kimi/skins/` with graceful fallback for undefined tokens. Clean, well-scoped contribution.

2. **[#1960](https://github.com/MoonshotAI/kimi-cli/pull/1960) — `feat(soul): RalphFlow architecture with ephemeral context and convergence detection`** *(ORDL-AMF)*
   Introduces an automated iteration framework: each loop runs in an isolated ephemeral context, and convergence detection halts infinite cycles. Could significantly improve multi-step agent reliability.

3. **[#1848](https://github.com/MoonshotAI/kimi-cli/pull/1848) — `feat(prompt): edit image and pasted-text placeholders as blocks`** *(HynoR)*
   Enables block-level editing of images and pasted text within prompts, improving the multimodal input experience. Open since mid-April; awaiting maintainer review.

---

## 5. Feature Request Trends

| Trend | Description | Representative Issues |
|---|---|---|
| **Resilient MCP lifecycle** | Graceful degradation, retry, and non-blocking behaviour when MCP servers fail | #769 |
| **Global/shared configuration** | Centralised `AGENTS.md`, shared skins, and cross-project settings under `~/.kimi/` | #2152, #2171 |
| **Scriptable/CI-friendly interfaces** | Non-interactive quota checks, machine-readable output, exit codes | #2169 |
| **Visual & accessibility improvements** | Custom color themes, browser tab notifications, terminal-specific tuning | #2171, #2167 |
| **Session robustness** | Better handling of invalid tool calls, context overflow, and prompt regressions | #2165, #2017, #2168 |

The overarching theme is **maturity**: the community is pushing Kimi CLI from a "works on my machine" tool toward production-grade reliability, scriptability, and customisability.

---

## 6. Developer Pain Points

- **System prompt regression (v1.41.0):** Multiple users report that the system prompt was removed or is empty, making the CLI completely unusable. This is the most urgent unaddressed issue.
- **Session corruption on model errors:** Invalid tool calls or malformed responses from local/self-hosted models (vllm) irrecoverably break the session, forcing a restart.
- **Context-length wall:** Long conversations abruptly fail with "Service temporarily unavailable" instead of graceful context compaction or user guidance.
- **MCP all-or-nothing startup:** A single unreachable MCP server prevents the CLI from launching, unlike competitors that warn and continue.
- **Python 3.14 compatibility:** SIGSEGV from PyYAML's C extension blocks early testing on the next Python release train.
- **No programmatic quota/API introspection:** Users cannot script quota checks, making it hard to integrate Kimi CLI into automated workflows or CI pipelines.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-07

## 1. Today's Highlights
No new releases were published in the last 24 hours. Community activity remains focused on stability regressions in the v1.14.x Electron Desktop app (file watcher, plugin loading, undo behavior) and the Go TUI (missing binary, keybinding issues). On the contributions side, long-running feature PRs for mobile optimization, session management, and TUI enhancements continue to attract attention.

---

## 2. Releases
No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [#24529 — Edit tool crashes with 'undefined is not an object'](https://github.com/anomalyco/opencode/issues/24529) | Core `edit` tool is broken for existing file modifications. 19 comments show users hitting this constantly during agentic coding sessions. |
| 2 | [#25758 — `reasoning_content` missing in tool call messages](https://github.com/anomalyco/opencode/issues/25758) | Affects Kimi-2.6 and DeepSeek-V4-Pro via Cloudflare — thinking-enabled models return 400s. 9 comments, rapidly growing. |
| 3 | [#25879 — What happened to the opencode-cli TUI?](https://github.com/anomalyco/opencode/issues/25879) | Debian package silently removed `/usr/bin/opencode-cli` in 1.14.39. Multiple users confused; raises packaging and communication concerns. |
| 4 | [#26058 — /undo and revert only revert chat, not code](https://github.com/anomalyco/opencode/issues/26058) | Regression in 1.14.39: undo no longer reverts file changes. Directly breaks core workflow trust. |
| 5 | [#24148 — Bun v1.3.13 panic on macOS (NAPI FATAL ERROR)](https://github.com/anomalyco/opencode/issues/24148) | Embedded Bun runtime crashes on macOS with trace trap, making OpenCode unusable for affected users. |
| 6 | [#25630 — Regression: plugin `provider.models()` hook broken post-#25167](https://github.com/anomalyco/opencode/issues/25630) | Custom providers declared in `opencode.jsonc` can't populate models after April 30 merge. High impact for power users with private endpoints. |
| 7 | [#26085 — Electron sidecar: npm plugins fail to load](https://github.com/anomalyco/opencode/issues/26085) | `@opencode-ai/plugin` resolves as `@local` in Electron sidecar, blocking all npm plugins. Critical for plugin ecosystem health. |
| 8 | [#26049 — macOS ARM64: missing @parcel/watcher-darwin-arm64](https://github.com/anomalyco/opencode/issues/26049) | File watching broken on Apple Silicon Desktop builds. PR [#25996](https://github.com/anomalyco/opencode/pull/25996) already proposes a fix. |
| 9 | [#25835 — Subagent asking for permission despite having it](https://github.com/anomalyco/opencode/issues/25835) | Permission model bug: subagents with `allow` rules still prompt for approval. Undermines agent autonomy. |
| 10 | [#19410 — Stuck in compaction loop, ignores AGENTS.md](https://github.com/anomalyco/opencode/issues/19410) | Agent enters infinite compaction loop, generating huge log files that fill disks. Severity escalated by data-loss risk. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#26090 — Expose LLM response headers on assistant messages](https://github.com/anomalyco/opencode/pull/26090) | Captures headers like `x-litellm-model` so users can see which actual model a proxy routed to. |
| 2 | [#25996 — Add @parcel/watcher platform packages to optionalDependencies](https://github.com/anomalyco/opencode/pull/25996) | Directly fixes [#26049](https://github.com/anomalyco/opencode/issues/26049) — adds Darwin, Linux, Windows native watcher deps. Closed/merged quickly. |
| 3 | [#26079 — Server always generates message ID, stores client ID separately](https://github.com/anomalyco/opencode/pull/26079) | Fixes message ID collisions when multiple clients submit with custom IDs. Refactors to `clientMessageID` pattern. |
| 4 | [#18767 — Mobile Touch Optimization](https://github.com/anomalyco/opencode/pull/18767) | Long-running PR adding full touch/viewport support to OpenCode Web/Desktop for tablet/phone use. |
| 5 | [#25663 — Update ACP support, modernize and fix misc issues](https://github.com/anomalyco/opencode/pull/25663) | Refreshes Agent Communication Protocol integration with fixes for current API surface. |
| 6 | [#25584 — Desktop: add message-level fork action](https://github.com/anomalyco/opencode/pull/25584) | Brings the "fork from this message" UI to Desktop, matching TUI functionality. |
| 7 | [#23557 — Interactive split-footer mode for TUI run command](https://github.com/anomalyco/opencode/pull/23557) | Adds a persistent split-pane footer for `opencode run` with live status and controls. |
| 8 | [#23688 — Markdown preview with Mermaid diagram support](https://github.com/anomalyco/opencode/pull/23688) | Integrates Mermaid v11.4.1 rendering for `.md` file previews — highly requested for documentation-heavy projects. |
| 9 | [#21370 — Preserve assistant message content with reasoning blocks](https://github.com/anomalyco/opencode/pull/21370) | Fixes Anthropic adaptive thinking (Opus 4.6 / Sonnet 4.6) emitting empty text parts between thinking blocks. |
| 10 | [#12822 — Proxy process.env directly instead of snapshotting](https://github.com/anomalyco/opencode/pull/12822) | Fixes environment variable changes at runtime being invisible to OpenCode — critical for dynamic proxy/auth setups. |

---

## 5. Feature Request Trends

1. **VS Code Sidebar Integration** ([#15422](https://github.com/anomalyco/opencode/issues/15422), 14 👍) — Community wants first-class VS Code extension matching Claude Code/Codex UX.
2. **Customizable Status Line** ([#25875](https://github.com/anomalyco/opencode/issues/25875)) — Parity with Claude Code's `statusline` setting, including Go token tracking.
3. **Archived Sessions UI** ([#6680](https://github.com/anomalyco/opencode/issues/6680), 32 comments) — Desktop sidebar should expose archived sessions with a modal browser.
4. **Agent Teams / Multi-Agent** ([#15035](https://github.com/anomalyco/opencode/issues/15035), 22 comments) — Continued demand for orchestration across multiple specialized agents.
5. **TUI Host Hooks for Plugins** ([#26043](https://github.com/anomalyco/opencode/issues/26043)) — Plugin authors need extension points to build advanced TUI addons without forking.
6. **Signal Differentiation for Subagents** ([#26069](https://github.com/anomalyco/opencode/issues/26069)) — Event subscribers need metadata to distinguish parent agent vs. subagent events.

---

## 6. Developer Pain Points

- **v1.14.x Regression Cluster**: Multiple issues ([#26058](https://github.com/anomalyco/opencode/issues/26058), [#25630](https://github.com/anomalyco/opencode/issues/25630), [#25879](https://github.com/anomalyco/opencode/issues/25879)) indicate the 1.14 release line introduced regressions in undo, custom providers, and package contents — eroding confidence in upgrade paths.
- **Electron Desktop Stability**: The Electron migration is producing platform-specific failures: missing native modules on macOS ([#26049](https://github.com/anomalyco/opencode/issues/26049)), file-not-refreshing on Windows ([#26060](https://github.com/anomalyco/opencode/issues/26060)), broken plugin loading via sidecar ([#26085](https://github.com/anomalyco/opencode/issues/26085)), and in-app updater not actually upgrading on Fedora RPM ([#23538](https://github.com/anomalyco/opencode/issues/23538)).
- **Permission Model Gaps**: Subagent permission logic ([#25835](https://github.com/anomalyco/opencode/issues/25835)) and install script env var handling ([#7675](https://github.com/anomalyco/opencode/issues/7675)) don't match documented behavior, causing repeated user frustration.
- **Reasoning Model Compatibility**: Thinking-enabled models (Kimi, DeepSeek) hit provider errors ([#25758](https://github.com/anomalyco/opencode/issues/25758)) and Anthropic adaptive thinking breaks message rendering ([#21370](https://github.com/anomalyco/opencode/pull/21370)) — the agentic layer needs more robust handling of extended reasoning protocols.
- **Silent Failures**: Issues like edit tool crashes ([#24529](https://github.com/anomalyco/opencode/issues/24529)), rate-limit freezes ([#26050](https://github.com/anomalyco/opencode/issues/26050)), and compaction loops ([#19410](https://github.com/anomalyco/opencode/issues/19410)) lack user-visible error states, leaving developers guessing.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-07

## 1. Today's Highlights
It was a highly active day in the Pi ecosystem focused on stream parsing robustness, extension performance, and UI scaling. The community merged several critical fixes—ranging from GPT-5 reasoning level corrections to preventing TUI stack overflows on massive markdown files—while merging an entirely new Next.js graphical web UI for Pi. 

## 2. Releases
No new official releases were published in the last 24 hours. Development remains focused on closing bugs and merging feature PRs in preparation for the next stable cut.

## 3. Hot Issues

1. **[#4228](https://github.com/badlogic/pi-mono/issues/4228) OpenAI stream delta parsing:** OpenAI-completions provider drops data when deltas contain mixed content and tool calls. Needs independent accumulation. (17 comments)
2. **[#4208](https://github.com/badlogic/pi-mono/issues/4208) Terminal rendering corruption in cmux/Ghostty:** Inline image previews via the Kitty graphics path corrupt the display in cmux environments. (12 comments)
3. **[#2870](https://github.com/badlogic/pi-mono/issues/2870) XDG Base Directory compliance:** Linux users are frustrated that Pi clutters the home directory instead of using `$XDG_CONFIG_HOME`. (12 comments, 16 thumbs-up)
4. **[#3108](https://github.com/badlogic/pi-mono/issues/3108) Unrecoverable session on empty tool call name:** Malformed tool calls permanently break session history with 400 errors. (8 comments)
5. **[#2717](https://github.com/badlogic/pi-mono/issues/2717) Configurable context-file discovery:** Users want to customize search scopes and accepted filenames (e.g., `AGENTS.md`). (7 comments, 4 thumbs-up)
6. **[#4185](https://github.com/badlogic/pi-mono/issues/4185) Zsh/tmux bad color contrast:** Default TUI colors are difficult to read in specific terminal multiplexer setups. (5 comments)
7. **[#4141](https://github.com/badlogic/pi-mono/issues/4141) Expired tokens cause hung process:** OpenAI-Codex provider hangs indefinitely if the auth token is expired after an API response. (4 comments)
8. **[#2909](https://github.com/badlogic/pi-mono/issues/2909) Find and Grep tools referenced but disabled:** The default system prompt references tools that users cannot permanently enable. (4 comments)
9. **[#3254](https://github.com/badlogic/pi-mono/issues/3254) Prevent `/model` from overwriting defaults:** Users want temporary model switches to stop persisting to `settings.json`. (4 comments)
10. **[#4226](https://github.com/badlogic/pi-mono/issues/4226) MCP tools type failure:** MCP client converts all parameters to strings, breaking tools expecting native JSON types like booleans. (2 comments)

## 4. Key PR Progress

1. **[#4247](https://github.com/badlogic/pi-mono/pull/4247) [OPEN] Handle mixed chat completion deltas:** Fixes the stream accumulation logic by separating reasoning, content, and tool call accumulators.
2. **[#4219](https://github.com/badlogic/pi-mono/pull/4219) [CLOSED] Next.js Web UI:** Adds a full graphical web interface (`@mariozechner/pi-web-app`) for Pi using Next.js 16, shadcn, and MagicUI.
3. **[#4242](https://github.com/badlogic/pi-mono/pull/4242) [CLOSED] Speed up extension loading:** Parallelizes extension loading using `Promise.all()` and shares a `jiti` instance for an ~1.8x startup speedup.
4. **[#4243](https://github.com/badlogic/pi-mono/pull/4243) [CLOSED] Scale config selector to terminal height:** Dynamically calculates `maxVisible` items in the TUI instead of hardcoding 15 lines.
5. **[#4224](https://github.com/badlogic/pi-mono/pull/4224) [CLOSED] Sync dynamically registered tools:** Fixes MCP tools by syncing dynamically registered tools into the active agent loop context.
6. **[#4221](https://github.com/badlogic/pi-mono/pull/4221) [CLOSED] Fix TUI stack overflow on large content:** Replaces the spread operator in `push()` to prevent `RangeError` when rendering huge markdown files.
7. **[#4220](https://github.com/badlogic/pi-mono/pull/4220) [CLOSED] Fix GPT-5 reasoning levels:** Corrects metadata to hide the unsupported `minimal` reasoning level for Responses-based GPT-5 models.
8. **[#4231](https://github.com/badlogic/pi-mono/pull/4231) [CLOSED] Mouse reporting for extensions:** Exposes `setMouseReporting` and `getRenderedLines` APIs, allowing extensions to build click-to-action and copy-on-select features.
9. **[#4234](https://github.com/badlogic/pi-mono/pull/4234) [CLOSED] Strip skill wrapper XML from HTML export:** Cleans up `<skill ...>` XML fragments leaking into user messages during session exports.
10. **[#4217](https://github.com/badlogic/pi-mono/pull/4217) [CLOSED] Env-override hooks for branding wrappers:** Allows downstream forks to customize app name, config directories, and suppress upstream notifications without patching.

## 5. Feature Request Trends
* **SDK & API Expansion:** A strong push for deeper programmatic access, highlighted by requests for a Python SDK ([#4174](https://github.com/badlogic/pi-mono/issues/4174)), exposing LLM context to extensions ([#3953](https://github.com/badlogic/pi-mono/issues/3953)), and a dedicated `promptCacheKey` decoupled from `sessionId` ([#4245](https://github.com/badlogic/pi-mono/issues/4245)).
* **New Providers & Free Tiers:** The community continues to request first-class support for free or niche endpoints, notably NVIDIA NIM ([#4116](https://github.com/badlogic/pi-mono/issues/4116)) and fixing configuration for Xiaomi MiMo regional providers ([#4143](https://github.com/badlogic/pi-mono/issues/4143)).
* **UI & TUI Enhancements:** Users want richer, highly configurable interfaces. This includes always showing the model provider in the footer ([#4233](https://github.com/badlogic/pi-mono/issues/4233)), native image generation ([#4095](https://github.com/badlogic/pi-mono/issues/4095)), and better visual compatibility across terminal emulators like Ghostty and tmux ([#4185](https://github.com/badlogic/pi-mono/issues/4185)).

## 6. Developer Pain Points
* **Streaming & Session Fragility:** Developers frequently encounter broken states. Expired tokens hang the process ([#4141](https://github.com/badlogic/pi-mono/issues/4141)), malformed tool calls permanently break sessions ([#3108](https://github.com/badlogic/pi-mono/issues/3108)), and context compaction triggers HTTP 400 errors ([#4246](https://github.com/badlogic/pi-mono/issues/4246)).
* **Cross-Platform & Terminal Quirks:** The TUI layer struggles with diverse environments. Developers report broken inline images in cmux ([#4208](https://github.com/badlogic/pi-mono/issues/4208)), un-clickable hyperlinks ([#4180](https://github.com/badlogic/pi-mono/issues/4180)), bad contrast in Zsh/tmux ([#4185](https://github.com/badlogic/pi-mono/issues/4185)), and `cmd.exe` parsing issues on Windows ([#2462](https://github.com/badlogic/pi-mono/issues/2462)).
* **Tool & Context Limitations:** The agent loop's internal mechanics restrict power users. Hardcoded context file discovery prevents monorepo flexibility ([#2717](https://github.com/badlogic/pi-mono/issues/2717)), MCP tools fail due to forced string typing ([#4226](https://github.com/badlogic/pi-mono/issues/4226)), and prompts reference tools (`find`, `grep`) that cannot be permanently enabled ([#2909](https://github.com/badlogic/pi-mono/issues/2909)).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-05-07:

### 1. Today's Highlights
The community sees rapid iteration towards **v0.15.7**, with preview and nightly builds introducing significant performance optimizations like a new `FileReadCache` and proxy setting fixes. Architectural evolution is in full swing, highlighted by a major refactor of the CLI authentication system into a provider registry model and the introduction of an advanced "Agent Team" feature for parallel sub-agent coordination. Additionally, context window and session management bugs remain the most discussed topics among users, prompting core team members to propose reactive compression and daemon-mode architectural overhauls.

### 2. Releases
Three new releases dropped in the last 24 hours (v0.15.7-preview.0, v0.15.6-preview.1, and a nightly build), all incorporating the following core changes:
*   **feat(core):** Implemented a `FileReadCache` to short-circuit unchanged file reads ([PR #3717](https://github.com/QwenLM/qwen-code/pull/3717) by @wenshao).
*   **fix(cli):** Resolved an issue where proxy settings were not being honored ([PR by @cyphercodes](https://github.com/QwenLM/qwen-code/pull/3766)).

### 3. Hot Issues
1.  **Incorrect context window size** ([#3878](https://github.com/QwenLM/qwen-code/issues/3878)): Users report that `settings.json` values for `contextWindowSize` are ignored. This is a critical pain point for local model users, generating significant discussion (4 comments).
2.  **Session JSONL bloat after large file edits** ([#3822](https://github.com/QwenLM/qwen-code/issues/3822)): Editing large files causes session files to massively expand, making `/resume` extremely slow. The root cause has been identified as un-truncated tool call results. 
3.  **Settings.json overridden on startup** ([#3843](https://github.com/QwenLM/qwen-code/issues/3843)): A frustrating bug where Qwen Code completely wipes and replaces user configurations upon launch.
4.  **Local model token overflow loop** ([#3881](https://github.com/QwenLM/qwen-code/issues/3881)): When using local models (like qwen3.6-27b), the tool gets stuck in a loop outputting `/` until the token limit is hit.
5.  **Background task management roadmap** ([#3634](https://github.com/QwenLM/qwen-code/issues/3634)): A highly tracked meta-issue where maintainers outline completed Phase A & B merges and next steps for background agents.
6.  **ACP mode lacks slash command support** ([#3837](https://github.com/QwenLM/qwen-code/issues/3837)): Users integrating with editors like Zed note that skills cannot be selected via `/` in ACP mode.
7.  **ACP mode thinking language inconsistency** ([#3787](https://github.com/QwenLM/qwen-code/issues/3787)): The model's thinking process defaults to English even when the user prompts in a different language.
8.  **SDK CLI process crashes (code 1)** ([#3823](https://github.com/QwenLM/qwen-code/issues/3823)): Regression observed when upgrading `@qwen-code/sdk` from 0.1.5 to 0.1.6/0.1.7.
9.  **Daemon Mode Proposal** ([#3803](https://github.com/QwenLM/qwen-code/issues/3803)): Maintainer @wenshao posted an 18-document design series proposing a persistent daemon mode with a web interface.
10. **First-class native tool registration** ([#3870](https://github.com/QwenLM/qwen-code/issues/3870)): A highly requested feature to move beyond `mcpServers` and allow extensions to register native tools with session-aware runtime context.

### 4. Key PR Progress
1.  **feat(cli): refactor auth around provider registry** ([PR #3864](https://github.com/QwenLM/qwen-code/pull/3864)): Replaces hard-coded auth branches with a scalable provider install plan, separating ModelStudio, Token, and Coding plans.
2.  **feat: add Agent Team experimental feature** ([PR #2886](https://github.com/QwenLM/qwen-code/pull/2886)): Implements parallel sub-agent coordination, allowing a lead agent to spawn a team to tackle different parts of a task simultaneously.
3.  **feat(core): add reactive compression on context overflow** ([PR #3879](https://github.com/QwenLM/qwen-code/pull/3879)): Automatically catches context-window overflow errors, compresses the conversation, and retries the turn—directly addressing frequent context bugs.
4.  **fix(core): rebuild tool registry on subagent Config overrides** ([PR #3873](https://github.com/QwenLM/qwen-code/pull/3873)): Fixes a bug where subagents inherited bound tools from parent agents, causing mutations to execute in the wrong context.
5.  **feat(cli): core built-in i18n coverage** ([PR #3871](https://github.com/QwenLM/qwen-code/pull/3871)): Localizes high-visibility built-in slash commands and UI text to support a global user base.
6.  **fix(cli): warn on ignored provider generation config** ([PR #3883](https://github.com/QwenLM/qwen-code/pull/3883)): Adds helpful startup warnings if users misconfigure generation settings for provider-backed models.
7.  **feat(cli): searchable /resume picker** ([PR #3880](https://github.com/QwenLM/qwen-code/pull/3880)): Introduces free-text search to the `/resume` session picker, allowing users to search by title, prompt, or branch.
8.  **fix(core): filter Mistral reasoning content at request boundary** ([PR #3882](https://github.com/QwenLM/qwen-code/pull/3882)): Strips non-standard `reasoning_content` fields when querying strict Mistral-compatible endpoints.
9.  **feat(core): support QWEN_HOME env var** ([PR #2953](https://github.com/QwenLM/qwen-code/pull/2953)): Allows customization of the `~/.qwen` config directory, crucial for external disk setups.
10. **feat(installer): publish release installer assets** ([PR #3828](https://github.com/QwenLM/qwen-code/pull/3828)): Moves towards standalone execution by publishing `install-qwen.sh` and `.bat` assets directly to GitHub Releases.

### 5. Feature Request Trends
*   **Daemon Mode & Persistent Background Agents:** Strong demand for Qwen Code to run as a background daemon with a web UI, facilitating long-running, uninterrupted tasks.
*   **Enhanced Session Management:** Users want robust tooling for navigating and cleaning up session history, including searchable `/resume` pickers and batch deletion capabilities.
*   **Local / Open-Source Model Compatibility:** A clear trend of users requesting better integration, configuration, and context-window handling for locally deployed models (e.g., via LM Studio or Ollama).
*   **Extension & Tooling Ecosystem:** Requests for native tool registration, fast-apply models, and IDE context injection (cursor position awareness) indicate that developers want deeper, Cursor-like editor integrations.

### 6. Developer Pain Points
*   **Context & Configuration Management:** Developers are frustrated by silent configuration overrides ([#3843](https://github.com/QwenLM/qwen-code/issues/3843)) and ignored context window sizes ([#3878](https://github.com/QwenLM/qwen-code/issues/3878)).
*   **Client Instability with Heavy Loads:** Users running complex tasks for extended periods report that the client automatically halts tasks ([#3730](https://github.com/QwenLM/qwen-code/issues/3730)) or completely crashes.
*   **Session Performance Degradation:** The JSONL bloat issue ([#3822](https://github.com/QwenLM/qwen-code/issues/3822)) severely impacts developers working with large files, turning session recovery (`/resume`) into a bottleneck rather than a convenience.

</details>