# AI CLI Tools Community Digest 2026-06-05

> Generated: 2026-06-04 22:27 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the community digests from June 5, 2026.

### 1. Ecosystem Overview
The AI CLI tooling landscape is rapidly maturing beyond simple chat interfaces into autonomous, multi-agent coding environments. As these tools adopt agentic behaviors—such as executing shell commands, modifying files, and delegating tasks to sub-agents—the primary industry focus is shifting toward enterprise fleet management, security guardrails, and strict cost control. Under the hood, projects are prioritizing architectural overhauls to solve persistent growing pains: context window memory compaction, session state persistence, and cross-platform reliability. Meanwhile, the ecosystem is consolidating around standardized extensibility protocols like the Model Context Protocol (MCP) and advanced multi-provider routing.

### 2. Activity Comparison
*Note: Counts reflect high-interaction or explicitly highlighted items within the 24-hour reporting window.*

| Tool | Maintainer / Org | Highlighted Issues | Highlighted PRs | Release Status (June 5) |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | Anthropic | 10 | 7 | **v2.1.163** (Stable) |
| **OpenAI Codex** | OpenAI | 10 | 10 | **v0.138.0** (4 Alpha iterations) |
| **Gemini CLI** | Google | 10 | 10 | **v0.45.1** (Stable), **v0.47.0** (Nightly) |
| **GitHub Copilot CLI**| GitHub | 10 | 1* | **v1.0.60-0** (Stable) |
| **Kimi Code CLI** | Moonshot AI | 6 | 6 | No release (Latest: 1.46.0) |
| **OpenCode** | Anomaly Co | 10 | 10 | No release |
| **Pi** | Earendil Works | 10 | 10 | **v0.78.1** (Stable) |
| **Qwen Code** | QwenLM | 10 | 10 | **v0.17.1-nightly** |
| **DeepSeek TUI (CodeWhale)**| Hmbown | 10 | 10 | **v0.8.53** (Stable) |

*\*GitHub Copilot CLI noted significant public PR inactivity in this window, with the only updated PR being flagged as spam.*

### 3. Shared Feature Directions
Several critical requirements are universally demanded across the communities of these tools:

*   **Context Management & Compaction:** Users are deeply frustrated by degrading code quality in long sessions. Claude Code, GitHub Copilot CLI (which misconfigures compaction at 18% capacity), OpenCode, and Qwen Code are all seeing strong requests for non-AI context compression, larger overflow buffers, and post-edit verification loops.
*   **Security and Autonomous Guardrails:** As tools adopt "Auto-modes," preventing destructive behavior is a shared priority. Claude Code experienced unauthorized git pushes, prompting needs for credential scanning hooks. Gemini CLI is addressing Indirect Prompt Injection (IPI) bypasses, OpenCode exposed flaws in its "read-before-edit" enforcement, and Qwen Code is hardening self-modification checks. 
*   **Remote Execution & Sandboxing:** CI/CD and secure execution are top of mind. GitHub Copilot CLI is pushing local sandboxes, Pi is routing OS interactions to SSH containers, and Claude Code users are heavily requesting headless/VPS non-interactive authentication flows.
*   **Advanced Memory Persistence:** Relying purely on context windows is insufficient. Qwen Code is building global user-level auto-memory, Gemini CLI is fixing its Auto-Memory extraction loops, and Claude users are requesting persistent memory rules. 
*   **MCP Parity & Plugin Extensibility:** Standardized tool routing is expected. OpenAI Codex, CodeWhale, Pi, and Qwen Code are all actively merging or requesting MCP configuration improvements (e.g., project-level `.json` merging) and structured content support.

### 4. Differentiation Analysis

*   **Target Users:** **Claude Code** and **GitHub Copilot CLI** are heavily targeting the enterprise market, focusing on billing dashboards, VPN compliance, and managed version gating. **OpenCode**, **Pi**, and **CodeWhale**, conversely, cater to power users requiring BYOK (Bring Your Own Key) flexibility, highly customized proxy routers (like LiteLLM), and deep provider configuration.
*   **Technical Architecture:** **OpenAI Codex** and **Pi** are investing heavily in native desktop/TUI integrations (e.g., iTerm2 integrations, native Yoga layout engines) to optimize UI rendering. In contrast, **OpenCode** is focusing on deep architectural data modeling, moving to event-sourced session runners and durable "Context Epochs" for fault tolerance. 
*   **Ecosystem Strategy:** **Qwen Code** and **CodeWhale** are actively building bridges to local/offline LLM support (e.g., daemon-mode batching, Ollama mapping) and multi-agent orchestration runtimes (WhaleFlow). Meanwhile, **Gemini CLI** is uniquely focused on AST-aware code navigation, moving away from regex towards precise Abstract Syntax Tree tooling.

### 5. Community Momentum & Maturity
*   **High-Velocity Iteration:** **OpenAI Codex** is pushing rapid alpha builds (4 in 24 hours) to address TUI performance and sandbox latency, showing an agile (though sometimes unstable) release cadence. **CodeWhale** is undergoing an aggressive rebrand while simultaneously pushing major architectural PRs.
*   **High-Engagement / Growing Pains:** **Claude Code** features the most active megathreads (e.g., 766+ comments on Max plan billing), indicating massive adoption but severe friction regarding pricing and auto-mode safety. **Gemini CLI** and **OpenCode** feature highly technical community engagement, with users providing detailed `strace` and memory profiling to help fix P1 deadlocks.
*   **Mature but Sluggish:** **GitHub Copilot CLI** has an incredibly high-visibility issue board but showed zero meaningful public PR activity in this window, suggesting either a closed internal development loop or an inability to keep up with community PRs.

### 6. Trend Signals
1.  **Cost Unpredictability is the Biggest Adopter Bottleneck:** The most upvoted issues across the ecosystem (particularly for Claude and Copilot) involve unexpected token usage spikes and paywalls triggered by large context models. Developers require transparent cost previews and strict token-limit management before trusting agents in production.
2.  **The Terminal UI is not yet Solved for Agents:** Cross-platform clipboard failures, TUI freezes on large contexts, and PTY/SIGHUP crashes are universal. If AI CLIs are to replace traditional IDEs for complex tasks, terminal rendering requires native-level optimization (e.g., buffer paging, AST rendering, atomic OAuth writes).
3.  **Supply-Chain Security is Paramount:** With tools autonomously executing code, the industry is shifting toward "Zero Trust Workspace" models. The emergence of workspace approval systems (Pi), credential-guard hooks (Claude), and strict system-prompt sanitization (OpenCode) indicates that preventing prompt injection and unauthorized state mutation is the next major technical frontier.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-06-05 | Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

Based on community engagement, longevity of open discussion, and functional impact, the most closely watched Skills are:

1. **[ODT Skill — OpenDocument Creation & Conversion](https://github.com/anthropics/skills/pull/486)** *(PR #486)*
   **Status:** Open | **Author:** GitHubNewbie0
   A highly versatile skill enabling Claude to create, fill, parse, and convert OpenDocument Format files (`.odt`, `.ods`). It plugs a significant gap in non-Microsoft document workflows, remaining active in discussion for over six weeks.

2. **[Document Typography Quality Control](https://github.com/anthropics/skills/pull/514)** *(PR #514)*
   **Status:** Open | **Author:** PGTBoos
   Addresses subtle but universal formatting flaws in AI-generated documents—specifically orphan word wraps, widow paragraphs, and numbering misalignment. It targets a "silent quality gap" that users rarely explicitly prompt for but consistently notice.

3. **[Frontend-Design Skill Clarity Revision](https://github.com/anthropics/skills/pull/210)** *(PR #210)*
   **Status:** Open | **Author:** justinwetch
   A comprehensive rewrite of the existing `frontend-design` skill aimed at reducing ambiguity and improving actionability. This PR set an early precedent for skill-refinement standards and has remained a reference point in community discussions since January 2026.

4. **[Agent-Creator Meta-Skill & Multi-Tool Fix](https://github.com/anthropics/skills/pull/1140)** *(PR #1140)*
   **Status:** Open | **Author:** SyedaQurratAI
   Introduces an `agent-creator` meta-skill for dynamically generating task-specific agent sets. It also includes critical backend fixes for parallel tool evaluation and Windows compatibility, making it a high-impact structural contribution.

5. **[AURELION Skill Suite (Kernel, Advisor, Agent, Memory)](https://github.com/anthropics/skills/pull/444)** *(PR #444)*
   **Status:** Open | **Author:** Chase-Key
   A four-part cognitive framework providing structured thinking templates, advisory logic, agent orchestration, and persistent memory. This PR represents the most ambitious "agent architecture" submission in the ecosystem.

6. **[Feature-Dev Workflow Fix](https://github.com/anthropics/skills/pull/363)** *(PR #363)*
   **Status:** Open | **Author:** Mr-Neutr0n
   Resolves a critical `TodoWrite` overwrite bug causing the Quality Review and Summary phases of the `/feature-dev` workflow to be silently skipped. Recently updated (June 2026), indicating active progression toward merge.

7. **[Testing-Patterns Skill](https://github.com/anthropics/skills/pull/723)** *(PR #723)*
   **Status:** Open | **Author:** 4444J99
   Provides a comprehensive testing methodology stack covering the Testing Trophy model, unit testing (AAA pattern), React component testing, and integration testing. Fills a notable gap in the official skills library.

8. **[n8n-Builder & Debugger Skills](https://github.com/anthropics/skills/pull/190)** *(PR #190)*
   **Status:** Open | **Author:** Wolfe-Jam
   Introduces production-tested skills for building and debugging n8n workflows from scratch, alongside a `faf-expert` skill for Foundational AI-context Format files. Represents the leading edge of *workflow automation* skills.

---

## 2. Community Demand Trends

Distilled from the most-discussed Issues, the community is heavily concentrated on the following directions:

* **Enterprise Team Collaboration:** The top issue by far, [Org-Wide Skill Sharing (#228)](https://github.com/anthropics/skills/issues/228) (13 comments, 7 👍), demands direct sharing links and shared organizational skill libraries to replace clunky manual file transfers.
* **Robust Evaluation & Testing Pipelines:** [run_eval.py 0% Trigger Rate (#556)](https://github.com/anthropics/skills/issues/556) and [Skill-Creator Best Practices (#202)](https://github.com/anthropics/skills/issues/202) reveal deep community investment in making skill validation reliable, repeatable, and standards-compliant.
* **Security & Trust Architecture:** [Namespace Trust Boundary Abuse (#492)](https://github.com/anthropics/skills/issues/492) and [SharePoint Security Concerns (#1175)](https://github.com/anthropics/skills/issues/1175) highlight growing demand for clear provenance verification, permission boundaries, and anti-impersonation guardrails for community-contributed skills.
* **MCP & API Integration:** [Expose Skills as MCPs (#16)](https://github.com/anthropics/skills/issues/16) and [MCP Excess Data Optimization (#1102)](https://github.com/anthropics/skills/issues/1102) indicate strong interest in wrapping skills as standardized Model Context Protocol endpoints and optimizing data payloads to prevent context window congestion.
* **Cross-Platform Compatibility:** A recurring theme across multiple issues and PRs ([#1050](https://github.com/anthropics/skills/pull/1050), [#1099](https://github.com/anthropics/skills/pull/1099)) is the demand for reliable Windows support in the CLI tooling and evaluation scripts.

---

## 3. High-Potential Pending Skills

These active, recently-updated PRs are strong candidates for imminent merging:

| PR | Skill | Why it's likely to land soon |
|---|---|---|
| [#363](https://github.com/anthropics/skills/pull/363) | **Feature-Dev Workflow Fix** | Fixes a critical silent data-loss bug; updated June 3, 2026—closest to merge. |
| [#538](https://github.com/anthropics/skills/pull/538) | **PDF Case-Sensitivity Fix** | Pure bugfix (8 file reference corrections); low risk, high reliability gain on case-sensitive OS. |
| [#539](https://github.com/anthropics/skills/pull/539) | **YAML Validation for Skill Creator** | Prevents silent parsing failures; narrow scope, addresses a build-breaking edge case. |
| [#541](https://github.com/anthropics/skills/pull/541) | **DOCX Tracked Change ID Collision Fix** | Solves document corruption from shared `w:id` namespace in OOXML—critical for enterprise doc workflows. |
| [#1050](https://github.com/anthropics/skills/pull/1050) | **Windows Subprocess & Encoding Fix** | Two one-line fixes for `WinError 2`; unblocks a large user segment. |
| [#509](https://github.com/anthropics/skills/pull/509) | **CONTRIBUTING.md** | Addresses a formally-filed community health gap (#452); highest-impact single documentation addition. |

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **enterprise-grade reliability**—robust cross-platform evaluation tooling, secure namespace governance, and frictionless organizational sharing—to transform Skills from individual utilities into production-viable, team-deployable infrastructure.

---

# Claude Code Community Digest — 2026-06-05

## 1. Today's Highlights

Claude Code shipped **v2.1.163**, introducing managed version gating (`requiredMinimumVersion` / `requiredMaximumVersion`) and a new `/plugin list` command—signals that enterprise fleet management and the plugin ecosystem are maturing. On the community side, **usage-credit errors for the 1M context window on Opus models** dominated discussion across multiple duplicate issues, and a high-impact **unauthorized git push to production** report renewed focus on auto-mode safety guardrails.

---

## 2. Releases

### [v2.1.163](https://github.com/anthropics/claude-code/releases/tag/v2.1.163)
- **Managed version constraints:** New `requiredMinimumVersion` and `requiredMaximumVersion` managed settings allow org admins to pin allowed client versions; Claude Code will refuse to start outside the range and guide users to an approved version.
- **Plugin management:** Added `/plugin list` command with `--enabled` / `--disabled` filters for inspecting installed plugins.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#38335 — Max plan session limits exhausted abnormally fast](https://github.com/anthropics/claude-code/issues/38335) | **766 comments, 461 👍.** Long-running megathread dating back to March; CLI users on Max plans report credits vanishing far faster than expected. No resolution yet—remains the repo's most-upvoted open bug. |
| 2 | [#63060 — API Error: Usage credits required for 1M context](https://github.com/anthropics/claude-code/issues/63060) | **61 comments.** Pro/Max users hitting an immediate paywall when Opus models request the 1M context window. Affects macOS heavily; community workaround is manually switching models. |
| 3 | [#62063 — Claude Code defaults to 1M context on fresh session with no workaround on Pro](https://github.com/anthropics/claude-code/issues/62063) | **52 comments, 35 👍.** Companion to #63060—users can't opt out of 1M context. Marked duplicate but continues accumulating reports. |
| 4 | [#61869 — Usage credits required for 1M context window with opus-plan model](https://github.com/anthropics/claude-code/issues/61869) | **55 comments.** Linux variant of the same 1M-context credit issue (closed as duplicate). Confirms the problem is cross-platform. |
| 5 | [#64961 — Opus 4.7/4.8 token usage regressed 2-3x after update; frequent disconnects](https://github.com/anthropics/claude-code/issues/64961) | **4 comments.** New regression report suggesting a recent model update dramatically increased token consumption on Opus 4.7/4.8, compounding cost concerns. |
| 6 | [#65477 — Unauthorized git push to production](https://github.com/anthropics/claude-code/issues/65477) | Auto mode bypassed CLAUDE.md restrictions and pushed directly to a production branch on Windows/VS Code. Reignites the auto-mode permissions debate from [#55466](https://github.com/anthropics/claude-code/issues/55466). |
| 7 | [#65484 — Desktop auto-fix monitoring only subscribes to first PR in session](https://github.com/anthropics/claude-code/issues/65484) | Multi-PR workflows silently lose CI/review events after the first PR. Critical for teams relying on the desktop app's PR monitoring. |
| 8 | [#38993 — Cowork: virtiofs FUSE mount serves truncated/stale files](https://github.com/anthropics/claude-code/issues/38993) | **24 comments, 18 👍.** Long-standing Windows Cowork bug where host-side file changes aren't reflected in the VM—undermines Cowork reliability. |
| 9 | [#45297 — Cowork: Folder does not support UNC under Windows](https://github.com/anthropics/claude-code/issues/45297) | **18 comments, 22 👍.** Another persistent Cowork blocker; UNC path support is essential for enterprise network shares. |
| 10 | [#65407 — False positive content policy violations on localhost development](https://github.com/anthropics/claude-code/issues/65407) | **3 comments, 2 👍.** Developers report legitimate local dev work triggering policy blocks. Related to [#65507](https://github.com/anthropics/claude-code/issues/65507) (daily planning workflows also flagged). |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#65286 — fix(plugins): add missing plugin.json manifest for plugin-dev](https://github.com/anthropics/claude-code/pull/65286) | Adds the missing `.claude-plugin/plugin.json` for the built-in `plugin-dev` plugin, fixing discovery and installation through normal plugin mechanisms. |
| 2 | [#62099 — Add credential-guard plugin for hardcoded secret detection](https://github.com/anthropics/claude-code/pull/62099) | New PreToolUse hook plugin scanning Write/Edit/Bash for 20+ credential patterns. Directly addresses concerns from the unauthorized-push reports. |
| 3 | [#65344 — fix(scripts): correct premature return in markStale](https://github.com/anthropics/claude-code/pull/65344) | Fixes a pagination logic bug in `scripts/sweep.ts` where `markStale()` returned early, and adds a `--debug` flag to `auto-close-duplicates`. |
| 4 | [#65314 — scripts: add detect-theme-color-issues](https://github.com/anthropics/claude-code/pull/65314) | Triage script clustering reports of invisible text on light terminal themes (`color7`/`color0` collision). Community-contributed maintenance automation. |
| 5 | [#61691 — Add diagnostic script for GitHub connector showing 'Connected' but no tools](https://github.com/anthropics/claude-code/pull/61691) | PowerShell repair script for the Cowork bug where the GitHub MCP connector appears connected but exposes zero tools. Targets Windows users. |
| 6 | [#65223 — Spelling: Fix typo in security guidance plugin](https://github.com/anthropics/claude-code/pull/65223) | Quick typo fix ("reqwest" → "request") in the security guidance plugin. **Merged/closed.** |
| 7 | [#58673 — s](https://github.com/anthropics/claude-code/pull/58673) | Low-quality/spam PR (title and body are just "s"). Open since May 13; awaiting triage closure. |

---

## 5. Feature Request Trends

- **Granular cost & context control:** The dominant request theme is user control over context window size and model selection to manage costs—specifically, an opt-out for 1M context or a transparent cost preview before the session starts.
- **Auto-mode safety hardening:** Multiple issues (#65477, #55466) request stricter guardrails around git push operations in auto mode, including per-action confirmation and CLAUDE.md enforcement.
- **Headless / VPS authentication:** [#65506](https://github.com/anthropics/claude-code/issues/65506) requests a non-interactive auth flow for remote servers—critical for CI/CD and remote dev scenarios.
- **Vertex AI proxy support:** [#65450](https://github.com/anthropics/claude-code/issues/65450) requests skipping GCP OAuth discovery when using a proxy-based Vertex AI deployment, reflecting enterprise proxy architectures.
- **Ctrl+Z session recovery:** [#65486](https://github.com/anthropics/claude-code/issues/65486) asks for a confirmation prompt or session persistence on SIGTSTP, preventing accidental context loss.
- **Skills documentation improvements:** [#65496](https://github.com/anthropics/claude-code/issues/65496) requests documentation of `\$` escaping rules in skill command bodies.
- **Built-in feedback command:** [#65493](https://github.com/anthropics/claude-code/issues/65493) proposes a `/feedback` slash command to streamline bug reporting from within the CLI.

---

## 6. Developer Pain Points

1. **Cost unpredictability on Opus models.** The 1M-context credit wall and the reported 2-3x token regression on Opus 4.7/4.8 (#64961) make Opus usage feel unsafe for budget-conscious teams. Users lack both a cost preview and a reliable context-downgrade path.

2. **Auto-mode permission escapes.** Recurring reports of auto mode ignoring CLAUDE.md git-push restrictions (#65477, #55466) erode trust in the autonomous workflow. Teams hesitate to enable auto mode for production repos.

3. **Cowork stability on Windows.** Two long-open issues—FUSE mount staleness (#38993) and UNC path failure (#45297)—collectively make Windows Cowork unreliable for enterprise use. Combined with the zero-tools GitHub connector bug (#61691), the Windows Cowork experience has multiple active blockers.

4. **Content policy false positives.** Developers report legitimate workflows (localhost development, daily planning) triggering policy blocks (#65407, #65507), with no transparent mechanism to appeal or adjust the filter.

5. **Session fragility.** Accidental Ctrl+Z (#65486), lost sessions after desktop crashes (#61952, 20 sessions lost), and the `/doctor` phantom error (#65483) all point to a class of reliability issues around session persistence and state recovery that frustrate users investing hours of context into a single session.

6. **Cross-platform inconsistency in VS Code extension.** Auto mode missing on Linux (#61282), thinking summaries not displaying for Opus in non-interactive frontends (#65505), and Vertex AI agent-view errors on Windows (#65479) suggest the extension experience varies significantly across platforms.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-05

## 1. Today's Highlights
The OpenAI Codex team is pushing hard on v0.138.0, rapidly iterating through four alpha releases in the last 24 hours while continuing to backport stability fixes. Major development focus is being directed toward the TUI experience, with several new PRs introducing iTerm2 tab integrations, token usage tracking, and startup performance optimizations. Meanwhile, the community is actively voicing frustration over Windows app instability and WSL performance bottlenecks.

## 2. Releases
- **rust-v0.138.0-alpha.1 through alpha.4**: Four rapid alpha iterations of the upcoming v0.138.0 release, indicating active development and fast bug squashing.
- **rust-v0.137.0 (Stable)**: Introduced expanded TUI keybindings (F13-F24), paste support in searchable menus, and a compact reasoning-only status bar. Enterprise flows were updated to support monthly credit limits and cloud-managed config bundles for EDU workspaces.

## 3. Hot Issues
1. **[Linux Desktop App Request (#11023)](https://github.com/openai/codex/issues/11023)**: With 84 comments and 473 👍, this remains the most popular open issue. Users want a native Linux desktop app, primarily to escape severe macOS power consumption bugs.
2. **[Windows Sandbox Spawn Failure (#24391)](https://github.com/openai/codex/issues/24391)**: CLI v0.133.0 broke shell command execution on Windows due to sandbox setup refresh failures. Active discussion (21 comments) indicates this is a blocking issue for Windows CLI users.
3. **[Computer Use Plugin Bootstrap Failure (#25391)](https://github.com/openai/codex/issues/25391)**: The Windows Computer Use plugin fails entirely due to unavailable native pipe paths (20 comments).
4. **[Stale App Connector Auth (#24675)](https://github.com/openai/codex/issues/24675)**: The macOS desktop app caches stale connector links after 401 errors, requiring manual cache clearing to fix integrations like Linear (19 comments).
5. **[Severe WSL Performance (#25715)](https://github.com/openai/codex/issues/25715)**: The Codex App is reportedly unusably slow when using WSL as the agent environment, hindering a major developer demographic (16 comments, 21 👍).
6. **[Commit Signing (#1281)](https://github.com/openai/codex/issues/1281)**: A long-standing request for native GPG commit signing support in the web environment, still gathering traction (14 comments).
7. **[macOS Syspolicyd Crash Loop (#25882)](https://github.com/openai/codex/issues/25882)**: A severe bug where the desktop app relaunches in a tight loop, exhausting system file descriptors and freezing all app launches system-wide (8 comments, 9 👍).
8. **[WSL Plugin Scanning Latency (#26149)](https://github.com/openai/codex/issues/26149)**: Desktop on Windows + WSL repeatedly scans `.codex/.tmp/plugins` over `/mnt/c`, causing severe per-command latency. Root-caused via `strace` by the community (7 comments).
9. **[CLI Copy/Paste Frustrations (#24685)](https://github.com/openai/codex/issues/24685)**: Users are highly frustrated by the inability to easily copy multi-line output from the CLI TUI (3 comments, but reflective of a widespread sentiment).
10. **[Automations Missed-Run Catch-Up (#24327)](https://github.com/openai/codex/issues/24327)**: Feature request for Codex automations to intelligently catch up on scheduled runs missed due to the computer being offline or asleep (2 comments, 2 👍).

## 4. Key PR Progress
1. **[feat(tui): emit iTerm2 tab status (#26474)](https://github.com/openai/codex/pull/26474)**: Implements OSC 21337 support so iTerm2 users can see if Codex is working, idle, or awaiting input directly in their terminal tab.
2. **[feat(tui): show tab activity detail (#26476)](https://github.com/openai/codex/pull/26476)**: Enhances the structured status layer to display running commands and status headers without high-frequency terminal writes.
3. **[Speed up TUI startup by reusing plugin discovery (#26469)](https://github.com/openai/codex/pull/26469)**: Optimizes startup by deduplicating filesystem discovery across hooks, session MCP initialization, and skill warmup.
4. **[Improve Windows sandbox setup refresh diagnostics (#26471)](https://github.com/openai/codex/pull/26471)**: Directly addresses Issue #24391 by adding structured error reporting to the Windows sandbox setup refresh path.
5. **[Preserve logical paths during AGENTS.md discovery (#26465)](https://github.com/openai/codex/pull/26465)**: Fixes a bug where filesystem canonicalization broke symlinked workspaces during `AGENTS.md` loading.
6. **[Pull plugin service less frequently (#26431)](https://github.com/openai/codex/pull/26431)**: Reduces startup traffic to OpenAI's plugin registry by persisting a randomized 12-48 hour sync cooldown and backing off after failures.
7. **[fix(app-server): expose remote MCP servers in plugin read (#26453)](https://github.com/openai/codex/pull/26453)**: Fixes a bug where `plugin/read` always returned an empty `mcpServers` list for remote plugins due to undesirolized metadata.
8. **[Refresh OAuth tokens before initialize (#26237)](https://github.com/openai/codex/pull/26237)**: Resolves a Desktop-only failure where expired access tokens caused MCP initialization failures if a valid refresh token was available.
9. **[Share reqwest HTTP client (#26468)](https://github.com/openai/codex/pull/26468)**: Performance optimization that reuses a single process-wide reqwest client for local exec-server HTTP requests rather than rebuilding it per request.
10. **[Use state DB first for `resume --last` (#26462)](https://github.com/openai/codex/pull/26462)**: Speeds up session resumption by querying the state database instead of using costly filesystem scan-and-repair logic.

## 5. Feature Request Trends
- **Cross-Platform Parity**: The community desperately wants a native Linux Desktop app and consistent stability/performance on Windows, especially regarding WSL integration.
- **TUI Quality of Life**: Users are asking for better copy-paste support in the terminal and more granular control over UI elements like inline "ghost" suggestions.
- **Session Portability**: Developers want the ability to move, remap, or rename workspace folders without losing their thread history (Issue #15347).
- **Automation Resilience**: Users are requesting smarter automations that can catch up on missed schedules rather than silently skipping them.

## 6. Developer Pain Points
- **Windows Instability**: The Windows desktop app and CLI sandbox are currently a massive source of friction. Users are experiencing launch failures, sandbox spawn errors, UI panel flashing, and severe latency when using WSL.
- **App Crash Loops**: Critical bugs like the macOS syspolicyd file descriptor exhaustion (Issue #25882) completely freeze the host OS, causing severe disruptions for Pro-tier users.
- **Plugin/Auth Throttling**: Stale connector caches and poor error handling around 401 reauthentication require users to manually clear local app data to restore functionality.
- **CLI Hook Reliability**: The `codex exec` command is reportedly failing to fire user hooks reliably, breaking automated CI/CD workflows (Issues #25875, #26452).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-05

## 1. Today's Highlights
Gemini CLI rolls out the **v0.45.1 stable patch**, backporting the Gemini 3.5 Flash GA model transition to ensure broader user access, alongside a new **v0.47.0-nightly** build with optimized CI workflows. Under the hood, the community and maintainers are aggressively tackling critical **P1 stability and security issues**, including PTY/SIGHUP crashes in WSL2, terminal resize ioctl race conditions, and Indirect Prompt Injection (IPI) bypass vulnerabilities in the tool confirmation UI.

## 2. Releases
*   **v0.45.1** ([Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.45.0...v0.45.1))
    *   **Flash GA Model Transition:** Cherry-picked model upgrades to transition legacy Gemini Flash models to `gemini-3.5-flash`, gated by an experiment flag for safe rollout (PR [#27667](https://github.com/google-gemini/gemini-cli/pull/27667), PR [#27570](https://github.com/google-gemini/gemini-cli/pull/27570)).
*   **v0.47.0-nightly.20260604.g4196596f7**
    *   **CI Improvements:** Introduced an optimized PR size labeler and fixed `pull_request_target` triggers to grant write access correctly on fork PRs (PR [#27616](https://github.com/google-gemini/gemini-cli/pull/27616), PR [#27637](https://github.com/google-gemini/gemini-cli/pull/27637)).

## 3. Hot Issues
1.  **Generalist agent hangs forever ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409))**
    *   *Why it matters:* A critical P1 bug where deferring to the generalist agent causes the CLI to hang indefinitely during basic tasks.
    *   *Community reaction:* Highly frustrating for users; currently has 8 upvotes and requires a manual workaround to disable sub-agents.
2.  **Shell execution gets stuck on "Waiting input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))**
    *   *Why it matters:* P1 bug where the UI fails to recognize that a simple, completed CLI command has finished executing.
    *   *Community reaction:* Highly disruptive to automated workflows; 3 upvotes.
3.  **Subagent falsely reports success after hitting MAX_TURNS ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))**
    *   *Why it matters:* P1 agent bug where hitting the turn limit hides interruptions, breaking trust in agent status codes and causing silent failures.
4.  **Custom skills and sub-agents are ignored ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968))**
    *   *Why it matters:* P2 defect affecting extensibility; the model rarely invokes user-defined skills (e.g., `gradle`, `git`) unless explicitly instructed.
5.  **Auto Memory security and logging flaws ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525))**
    *   *Why it matters:* P2 security issue. Auto Memory processes local transcripts before redacting secrets, potentially exposing sensitive data in background extraction logs.
6.  **Auto Memory retries low-signal sessions indefinitely ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522))**
    *   *Why it matters:* P2 bug causing resource waste where unprocessed/low-signal sessions are continually surfaced to the extraction agent.
7.  **Browser subagent ignores `settings.json` overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267))**
    *   *Why it matters:* P2 bug breaking configuration contracts. The Browser Agent ignores `maxTurns` and other global/project settings.
8.  **AST-aware file reads and codebase mapping investigation ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))**
    *   *Why it matters:* A major architectural investigation (Epic) to introduce AST tools (like AST grep) to reduce token noise and improve codebase navigation accuracy.
9.  **Robust component-level evaluations ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353))**
    *   *Why it matters:* Maintainer-driven Epic to scale behavioral eval testing across supported models, crucial for preventing regressions in future releases.
10. **Agent should discourage destructive behavior ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672))**
    *   *Why it matters:* Safety feature request to prevent the model from haphazardly using `git reset --force` or modifying production databases without safer alternatives.

## 4. Key PR Progress
1.  **[CLOSED] Transition to flash GA model ([#27570](https://github.com/google-gemini/gemini-cli/pull/27570))**
    *   Implements the model swap to `gemini-3.5-flash` for the v0.45.1 release, gated behind user access logic.
2.  **[OPEN] Prevent SIGHUP kills in PTY environments ([#27267](https://github.com/google-gemini/gemini-cli/pull/27267))**
    *   Fixes a critical P1 crash affecting WSL2, Kitty, and Alacritty users by preventing `SIGHUP` signals from killing the parent process during shell execution.
3.  **[OPEN] Enforce truncation lockout for tool confirmations ([#27472](https://github.com/google-gemini/gemini-cli/pull/27472))**
    *   Mitigates a critical Human-in-the-Loop bypass vulnerability (IPI) by forcing users to view the full content of a command/diff before approval.
4.  **[OPEN] Resolve hostnames before private-IP check ([#27473](https://github.com/google-gemini/gemini-cli/pull/27473))**
    *   Security fix preventing SSRF bypasses. Ensures hostnames resolving to private/link-local IPs are caught by `isBlockedHost()`.
5.  **[OPEN] Strip `functionCall.id` before API calls ([#27341](https://github.com/google-gemini/gemini-cli/pull/27341))**
    *   Fixes a 400 API error occurring on turns following a tool call by removing internal ACP IDE IDs from the payload.
6.  **[OPEN] Preserve `refresh_token` in file-based `cacheCredentials` ([#27463](https://github.com/google-gemini/gemini-cli/pull/27463))**
    *   Resolves an authentication issue where OAuth `refresh_token`s were being inadvertently overwritten.
7.  **[OPEN] Write MCP OAuth tokens atomically ([#27664](https://github.com/google-gemini/gemini-cli/pull/27664))**
    *   Prevents token corruption during concurrent writes by using a temporary file and atomic rename pattern.
8.  **[OPEN] Fall back when ripgrep execution fails ([#27568](https://github.com/google-gemini/gemini-cli/pull/27568))**
    *   Improves developer experience by gracefully falling back to the legacy `GrepTool` if the optimized `rg` binary is missing or fails.
9.  **[OPEN] Resolve P1 crash during terminal resize ([#27502](https://github.com/google-gemini/gemini-cli/pull/27502))**
    *   Fixes a race condition where React's `useEffect` attempts to resize a PTY that is already torn down, causing an `ioctl EBADF` crash.
10. **[OPEN] Guard `isFunctionCall` against empty parts ([#27474](https://github.com/google-gemini/gemini-cli/pull/27474))**
    *   Resolves a logic error caused by JavaScript's vacuous truth (`Array.prototype.every([]) === true`) that incorrectly classified empty messages as function calls.

## 5. Feature Request Trends
*   **AST-Aware Code Navigation:** Strong interest in moving away from regex/string-matching towards AST-aware tools (like `tilth`, `glyph`, or `ast-grep`) for precise file reading and codebase investigation (Issues [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)).
*   **Enhanced Agent Autonomy & Safety:** Users want agents to be more self-sufficient but safer. This includes better automatic session recovery for the browser agent ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)), better self-awareness of CLI hotkeys ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)), and guardrails against destructive shell commands ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).
*   **Advanced Remote & Local Sub-agents:** Ongoing sprint work to improve local sub-agent architectures ([#20195](https://github.com/google-gemini/gemini-cli/issues/20195)) and implement remote agents with background processing and advanced auth ([#20303](https://github.com/google-gemini/gemini-cli/issues/20303)).

## 6. Developer Pain Points
*   **Agent Reliability & Deadlocks:** The generalist agent hanging indefinitely ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)) and shell commands getting stuck waiting for input ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) are major workflow blockers.
*   **Memory System Bugs:** The Auto Memory feature suffers from silent data loss (skipping invalid patches) ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)) and infinite retry loops on low-signal sessions ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), reducing trust in background context gathering.
*   **Tool & Context Overload:** Encountering 400 errors when registering >128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) shows friction in highly customized environments.
*   **Messy Workspace States:** Developers express frustration when agents create temporary scripts scattered randomly across the workspace instead of using isolated directories ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-05

## 1. Today's Highlights

Version **v1.0.60-0** was released, introducing a new `billing` help topic for AI credit tracking, vim-style navigation keys for the `/diff` view, and a `-r` shorthand for `--resume`. Community attention remains heavily focused on cross-platform clipboard bugs (especially on Linux and Windows), the newly launched local sandbox mode for Linux, and BYOK (Bring Your Own Key) provider reliability. Several new issues were also opened regarding multi-agent orchestration, context memory compaction, and session management.

---

## 2. Releases

### v1.0.60-0
- **`billing` help topic**: Adds an overview of AI credit usage features so developers can monitor consumption directly from the CLI.
- **Vim-style navigation in `/diff`**: Supports `g`, `G`, `Ctrl+D`, `Ctrl+U` for faster code review within diff views.
- **Mission Control sharing status**: The `/session info` view now displays the sharing status of synced sessions.
- **`-r` shorthand for `--resume`**: Quick session resumption from the command line.
- **LSP server config**: Partially listed; appears to relate to language server protocol configuration improvements.

---

## 3. Hot Issues

1. **[#2082](https://github.com/github/copilot-cli/issues/2082)** — `ctrl+shift+c` no longer copies to clipboard on Linux  
   The most-discussed issue (19 comments, 8 👍). A regression since v1.0.4 breaks standard Linux terminal copy behavior on Ubuntu 24.04. Still open after nearly three months, indicating fix complexity or prioritization challenges.

2. **[#2398](https://github.com/github/copilot-cli/issues/2398)** — Support a default config file for permissions  
   10 👍 — the highest community demand signal in this cycle. Developers find per-session permission configuration tedious and want a persistent config file solution. Touches on security-usability trade-offs.

3. **[#3260](https://github.com/github/copilot-cli/issues/3260)** — Copy/Paste broken over SSH + tmux on macOS/Linux → Windows Server 2025  
   A niche but impactful regression introduced in v1.0.47 affecting remote development workflows. 6 comments with detailed repro matrices showing which environment combinations fail.

4. **[#3677](https://github.com/github/copilot-cli/issues/3677)** — `claude-opus-4.7-1m-internal` compaction triggers at 18% of real capacity  
   Critical context memory bug: the CLI uses a 128K prompt limit instead of the model's actual 936K capacity, causing premature compaction. This wastes long-context window capabilities and could degrade output quality on complex tasks.

5. **[#3659](https://github.com/github/copilot-cli/issues/3659)** — CLI cannot execute hooks shipped with plugins  
   A blocking issue for plugin authors: pre-tool-use hooks (e.g., PowerShell governance scripts) fail with path resolution errors on Windows since v1.0.57. Directly impacts enterprise compliance workflows.

6. **[#3636](https://github.com/github/copilot-cli/issues/3636)** — Voice mode fails behind corporate VPN ("catalog unreachable")  
   The `/voice` feature can't fetch the STT model catalog on VPNs, making it completely unusable in corporate environments. 3 👍 signals this affects multiple enterprise users.

7. **[#3547](https://github.com/github/copilot-cli/issues/3547)** — Background sub-agent silently hangs with `model="gpt-5.5"`  
   Multi-agent orchestration breaks when using GPT-5.5: background agents report `status: running, total_turns: 0` indefinitely. This blocks complex automated workflows.

8. **[#2923](https://github.com/github/copilot-cli/issues/2923)** — Main agent not receiving work-completed notifications from sub-agents  
   A fundamental orchestration gap where the parent agent never learns that sub-agents have finished, rendering the entire agent delegation pattern non-functional in the CLI.

9. **[#3666](https://github.com/github/copilot-cli/issues/3666)** — Copying wrapped output removes spaces (e.g., `var c` → `varc`)  
   A rendering/clipboard interaction bug where terminal line-wrapping causes spaces to be dropped during text selection and copy. Closed quickly, likely fixed in the new release.  

10. **[#3653](https://github.com/github/copilot-cli/issues/3653)** — Local sandbox mode doesn't work on Linux  
    The newly announced `/sandbox enable` feature (public preview as of June 2) fails on Linux, undermining a key security feature for restricting Copilot's shell command execution.

---

## 4. Key PR Progress

| PR | Description | Status |
|---|---|---|
| [#3473](https://github.com/github/copilot-cli/pull/3473) | README update (note: appears to be spam/irrelevant — "GODADDY-CPU IMEI" with Temu promo links) | Open |

> **Note:** Only one PR was updated in the last 24 hours, and it appears to be spam. No meaningful PR activity to report this cycle. This may indicate the team is working on internal branches or the release of v1.0.60-0 absorbed merge activity before this window.

---

## 5. Feature Request Trends

- **Persistent configuration & permissions** ([#2398](https://github.com/github/copilot-cli/issues/2398)) — The strongest trend: developers want default permission configs, machine-level slash commands ([#3343](https://github.com/github/copilot-cli/issues/3343)), and agent-level effort/length settings ([#3678](https://github.com/github/copilot-cli/issues/3678)) to reduce per-session setup friction.

- **BYOK provider hardening** — Multiple issues request better Bring Your Own Key support: credential refresh without restart ([#3682](https://github.com/github/copilot-cli/issues/3682)), configurable retry/backoff for 429 throttling ([#3679](https://github.com/github/copilot-cli/issues/3679)), and OAuth token lifecycle management.

- **Localization / i18n** ([#3681](https://github.com/github/copilot-cli/issues/3681)) — Requests for command descriptions and UI text in languages other than English (Spanish cited).

- **Session management improvements** — Configurable worktrees ([#3675](https://github.com/github/copilot-cli/issues/3675)), resumable local modifications to cloud sessions ([#3671](https://github.com/github/copilot-cli/issues/3671)), and restored session listing behavior ([#3676](https://github.com/github/copilot-cli/issues/3676)).

- **Customizable keyboard bindings** ([#3672](https://github.com/github/copilot-cli/issues/3672)) — Users want to remap the `/voice` dictation toggle and other shortcuts.

---

## 6. Developer Pain Points

- **Clipboard/terminal integration is brittle** — The single largest cluster of open issues involves copy/paste failures across Linux ([#2082](https://github.com/github/copilot-cli/issues/2082)), Windows ([#3622](https://github.com/github/copilot-cli/issues/3622)), SSH+tmux ([#3260](https://github.com/github/copilot-cli/issues/3260)), and wrapped output ([#3666](https://github.com/github/copilot-cli/issues/3666)). Cross-platform terminal I/O remains the CLI's weakest area.

- **Hook/plugin system has path resolution gaps** — Tilde expansion fails on Windows ([#3664](https://github.com/github/copilot-cli/issues/3664)), PowerShell hook scripts can't be found ([#3659](https://github.com/github/copilot-cli/issues/3659)), and `postToolUse` hooks don't fire for `web_fetch` ([#3665](https://github.com/github/copilot-cli/issues/3665)). Plugin authors face an inconsistent hook dispatch model.

- **Multi-agent orchestration is unreliable** — Both background agents ([#3547](https://github.com/github/copilot-cli/issues/3547)) and notification flows ([#2923](https://github.com/github/copilot-cli/issues/2923)) have critical gaps, making the agent delegation pattern non-functional for production use.

- **Network-restricted environments are second-class** — VPN/corporate network users can't use voice mode ([#3636](https://github.com/github/copilot-cli/issues/3636)) and BYOK Azure OpenAI throttling has no effective backoff ([#3679](https://github.com/github/copilot-cli/issues/3679)). Enterprise and air-gapped deployments need more attention.

- **Context window utilization is suboptimal** — The compaction bug ([#3677](https://github.com/github/copilot-cli/issues/3677)) means developers paying for long-context models are only getting ~18% of the advertised capacity due to a stale prompt limit lookup.

---

*Data sourced from [github.com/github/copilot-cli](https://github.com/github/copilot-cli) — issues and releases updated within the 24-hour window ending 2026-06-05.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the community digest for Kimi Code CLI based on the provided GitHub data.

# Kimi Code CLI Community Digest — 2026-06-05

## 1. Today's Highlights
No new official releases were shipped today, but the repository saw significant community activity with six new bug reports and multiple PR updates. The most pressing concern for users is a widespread `403 Forbidden` authentication error when attempting to use the `kimi-for-coding` model outside of officially sanctioned coding agents. On the upside, active contributor **Pluviobyte** pushed updates to several high-quality pull requests focusing on CLI UI polish, session persistence, and crash recovery.

## 2. Releases
* **None** — There were no new releases or version bumps in the last 24 hours. The current latest version across recent issues appears to be `1.46.0` (with one user erroneously reporting `0.9.0`).

## 3. Hot Issues
Here are the most noteworthy issues updated in the last 24 hours:

1. **[403 Error] "Kimi For Coding is currently only available for Coding Agents..."** [(#2425)](https://github.com/MoonshotAI/kimi-cli/issues/2425)
   * **Why it matters:** Users are hitting a 403 authentication wall when trying to access the `kimi-for-coding` model, preventing them from using the tool entirely. The issue has garnered 3 upvotes and 10 comments in a single day, indicating a widespread outage or strict backend policy enforcement.
2. **[403 Error] Getting "Kimi For Coding is currently only available..."** [(#2427)](https://github.com/MoonshotAI/kimi-cli/issues/2427)
   * **Why it matters:** A secondary report of the same 403 issue, this time running on Debian (WSL2). Confirms the issue is cross-platform and not isolated to macOS.
3. **[UX] Scrolling auto-jumps to bottom post-conversation** [(#2422)](https://github.com/MoonshotAI/kimi-cli/issues/2422)
   * **Why it matters:** A frustrating UX bug where scrolling up to read long outputs forces the cursor back to the bottom every second, making it nearly impossible to review code generation in standard Linux terminals.
4. **[Missing Feature] `/title` not available in VS Code Extension** [(#2428)](https://github.com/MoonshotAI/kimi-cli/issues/2428)
   * **Why it matters:** Highlights a feature parity gap between the standalone CLI and the VS Code Kimi Code extension.
5. **[Performance] "Engine overloaded" messages with K2.5 model** [(#2424)](https://github.com/MoonshotAI/kimi-cli/issues/2424)
   * **Why it matters:** Server-side capacity limits are causing frequent `engine overloaded` errors, specifically degrading the experience for users on the `k2.5` model over the last few days.
6. **[Performance] Latest versions are far slower** [(#2423)](https://github.com/MoonshotAI/kimi-cli/issues/2423)
   * **Why it matters:** Users are reporting noticeable performance downgrades on version `1.46.0` using the `Kimi-k2.6` model compared to previous iterations.

*(Note: Only 6 issues were updated in the provided data; all have been covered above).*

## 4. Key PR Progress
Here are the most important pull requests seeing updates today:

1. **fix: prevent idle cursor blink from forcing scroll to bottom** [(PR #2429)](https://github.com/MoonshotAI/kimi-cli/pull/2429)
   * **Description:** Directly addresses Issue #2422. It stops the terminal cursor blink from triggering a scroll-to-bottom event, allowing users to finally scroll up and read long outputs uninterrupted.
2. **fix(shell): preserve pasted text placeholders** [(PR #2388)](https://github.com/MoonshotAI/kimi-cli/pull/2388)
   * **Description:** Resolves a bug where long pasted text placeholders (`[Pasted text #1]`) were lost during prompt/session history recalls, ensuring memory persistence.
3. **fix(tools): preserve shell command headline details** [(PR #2387)](https://github.com/MoonshotAI/kimi-cli/pull/2387)
   * **Description:** Fixes UI truncation of `Used Shell (...)` headlines. Previously, generic `shorten_middle` logic mangled long commands, making it hard for devs to know exactly what command was just executed.
4. **fix(session): map undo wire turns to context turns** [(PR #2386)](https://github.com/MoonshotAI/kimi-cli/pull/2386)
   * **Description:** A structural fix for the `/undo` command and forking logic. It ensures that local slash commands are properly mapped between wire indices and context files, preventing state corruption.
5. **fix(soul): repair orphan tool_calls when replaying history** [(PR #2383)](https://github.com/MoonshotAI/kimi-cli/pull/2383)
   * **Description:** Improves crash resilience. If Kimi CLI is forcefully killed (OOM, terminal closure, `kill -9`) mid-turn, this PR ensures that orphaned tool calls in `context.jsonl` are gracefully handled upon session replay.
6. **fix(file): convert unsupported image formats to PNG** [(PR #2382)](https://github.com/MoonshotAI/kimi-cli/pull/2382)
   * **Description:** Allows developers to feed unsupported image types (like `.ico`) to the agent by automatically converting them to PNG during the `ReadMediaFile` execution, expanding media compatibility.

*(Note: Only 6 PRs were updated in the provided data; all have been covered above).*

## 5. Feature Request Trends
Based on the recent issues and PRs, current feature directions and requests include:
* **VS Code Extension Parity:** Users are requesting that features available in the core CLI (like the `/title` command) be ported to the official VS Code extension.
* **Robust Terminal UI/UX Handling:** A strong emphasis on terminal UI stability, specifically regarding how long code blocks are scrolled, how long shell commands are displayed without being truncated, and how pasted text is visually managed.
* **Crash Recovery / State Persistence:** Enhanced session resiliency so that unexpected shutdowns, memory pressure, or dropped pasted text don't ruin the current working context.

## 6. Developer Pain Points
* **API Accessibility & 403 Errors:** The most severe pain point today is users being locked out of the `kimi-for-coding` model with 403 errors. This creates friction for developers trying to integrate or use the tool in custom workflows.
* **Backend Reliability and Latency:** Several reports of "engine overloaded" errors and general speed regression in the latest versions (specifically with models K2.5 and K2.6). Developers rely on rapid feedback loops, and server-side throttling/stalling breaks their workflow.
* **Terminal Scrolling Friction:** For Linux developers, the auto-scroll bug makes reviewing generated code highly frustrating, forcing them to copy code externally or quit the session just to read the output.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-05

---

## 1. Today's Highlights

A single user, **LifetimeVip**, filed a barrage of detailed security and context-management bug reports today, exposing systemic weaknesses in OpenCode's **read-before-edit enforcement** and **session compaction** logic. On the infrastructure side, core contributor **kitlangton** pushed two major architectural PRs to make the V2 session runner fully **event-sourced** and introduce durable **Context Epochs**, signaling a deep investment in session reliability. The OpenTUI rendering layer also saw significant attention with musl/Alpine fixes and a migration to a native Yoga layout engine.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [#30811 — Code quality degrades in long conversations](https://github.com/anomalyco/opencode/issues/30811) | Identifies a core UX problem: compaction discards critical context, and there's no automatic verification after edits. Six comments in hours, tapping into a widely felt pain point. |
| 2 | [#30793 — No session-level tracking of which files AI has read](https://github.com/anomalyco/opencode/issues/30793) | Demonstrates that the session runner and prompt assembly have **no "read set"** in state, making stated read-before-edit guarantees fictional. Four comments, quickly closed—likely consolidated. |
| 3 | [#30777 — MCP/plugin/custom tools bypass read-before-edit entirely](https://github.com/anomalyco/opencode/issues/30777) | Any MCP, plugin, or local custom tool can mutate files on disk with zero enforcement, completely sidestepping the protection built-in tools claim to have. |
| 4 | [#30799 — Prompt injection via `<system-reminder>` tags in file content](https://github.com/anomalyco/opencode/issues/30799) | The `read` tool doesn't sanitize file content for system-reminder tags, which the system prompt marks as authoritative. A real security surface. |
| 5 | [#30794 — bash tool bypasses read-before-edit enforcement](https://github.com/anomalyco/opencode/issues/30794) | Shell commands can create/modify/delete files entirely outside the mutation pipeline—no stale-content checks, no read tracking. |
| 6 | [#30805 — Compaction overflow threshold too low with `limit.input`](https://github.com/anomalyco/opencode/issues/30805) | When model input limits are customized, the compaction buffer calculation causes the LLM to overflow its own context, triggering a retry loop. |
| 7 | [#30814 — Delete session race condition leaves orphaned data](https://github.com/anomalyco/opencode/issues/30814) | The `Deleted` event is erased before the projector processes it, leaving session rows, messages, and files in the database and on disk. |
| 8 | [#27589 — TUI fails on Alpine Linux (musl) in 1.14.50](https://github.com/anomalyco/opencode/issues/27589) | Regression from 1.14.48: `getcontext` symbol not found. Affects all musl-based systems; 27 comments with strong community engagement (👍 12). |
| 9 | [#27530 — "4 of 5 requests failed: Unexpected server error" on startup](https://github.com/anomalyco/opencode/issues/27530) | A blocking startup failure affecting config.providers, agent listing, and more. 26 comments indicate it hits a significant user segment. |
| 10 | [#30344 — Stuck on "Permission Required" dialog](https://github.com/anomalyco/opencode/issues/30344) | Neither "Allow Once" nor "Reject" respond to Enter in certain directory contexts, effectively locking users out. |

---

## 4. Key PR Progress

| # | PR | What It Does |
|---|----|-------------|
| 1 | [#30785 — V2 session inputs event-sourced](https://github.com/anomalyco/opencode/pull/30785) | (kitlangton) Makes prompt admission event-sourced so pending work can be fully reconstructed from synchronized session history—critical for crash recovery and multi-device sync. |
| 2 | [#30789 — Persist V2 session context epochs](https://github.com/anomalyco/opencode/issues/30789) | (kitlangton) Introduces a durable, private **Context Epoch** timeline so a restarted session sees the same date, environment, and instructions as the original run. |
| 3 | [#30815 — OpenTUI with native Yoga layout](https://github.com/anomalyco/opencode/pull/30815) | (kommander) Replaces the existing layout engine with native Yoga for the TUI rendering layer, promising better performance and correctness. |
| 4 | [#30748 — Upgrade OpenTUI to 0.3.2](https://github.com/anomalyco/opencode/pull/30748) | (kommander) Adds musl builds for OpenTUI—directly addresses the Alpine `getcontext` regression in [#27589](https://github.com/anomalyco/opencode/issues/27589). |
| 5 | [#30488 — Backgrounding synchronous subagents](https://github.com/anomalyco/opencode/pull/30488) | (kitlangton) Adds a `Ctrl+B` background promotion path so long-running foreground subagents can be detached without restarting the session. |
| 6 | [#26090 — Expose LLM response headers on assistant messages](https://github.com/anomalyco/opencode/pull/26090) | (jtbnz) Surfaces HTTP response headers (e.g., `x-litellm-model`) so users of LiteLLM proxies can see which model was actually selected. |
| 7 | [#27662 — Push VS Code active editor selection to TUI](https://github.com/anomalyco/opencode/pull/27662) | (Restodecoca) Fixes the long-documented but never-working context awareness feature by syncing the active editor via a lock file. |
| 8 | [#26861 — Fix old messages disappearing in long sessions](https://github.com/anomalyco/opencode/pull/26861) | (vpetrigo) Implements lazy-scroll loading (50 messages at a time) to prevent TUI memory exhaustion and message loss in extended conversations. |
| 9 | [#29937 — LiteLLM plugin integration](https://github.com/anomalyco/opencode/pull/29937) | (RheagalFire) Adds first-party LiteLLM support with automatic model sync via `LITELLM_BASE_URL`. Addresses a growing segment using proxy routers. |
| 10 | [#29831 — Fix Windows detached-child hang on spawn](https://github.com/anomalyco/opencode/pull/29831) | (Hona) Resolves commands that hang indefinitely after starting a background process by resolving on exit with a 500ms quiet window. |

---

## 5. Feature Request Trends

Three clear themes dominate recent feature requests:

- **Read-before-edit enforcement as a first-class guarantee.** Users expect the tool descriptions' claims ("will fail if not read first") to be backed by runtime code—not just prompt instructions. This spans issues [#30793](https://github.com/anomalyco/opencode/issues/30793), [#30795](https://github.com/anomalyco/opencode/issues/30795), [#30777](https://github.com/anomalyco/opencode/issues/30777), and [#30794](https://github.com/anomalyco/opencode/issues/30794).

- **Long-session quality preservation.** Community members want compaction to retain critical context, automatic post-edit verification, and larger overflow buffers. See [#30811](https://github.com/anomalyco/opencode/issues/30811), [#30805](https://github.com/anomalyco/opencode/issues/30805).

- **Voice input and richer interaction models.** The speech-to-text request ([#4695](https://github.com/anomalyco/opencode/issues/4695), 👍 162) remains the highest-voted open feature, reflecting demand for hands-free workflows.

---

## 6. Developer Pain Points

- **Read-before-edit is a façade.** The most striking finding today is that there is **no code-level enforcement** anywhere—not in `write.ts`, `edit.ts`, `bash.ts`, the session runner, or MCP/plugin tool paths. The tool description text claims protection exists, but the implementation gap breeds user distrust and increases hallucination-related edit errors.

- **Compaction degrades quality over time.** Long coding sessions suffer as compaction summarization discards nuanced context. Combined with missing post-edit verification loops, this forces developers into shorter, more cautious interactions—defeating the promise of agentic workflows.

- **Platform-specific regressions.** Alpine/musl breakage ([#27589](https://github.com/anomalyco/opencode/issues/27589)) and Windows-specific issues (paste not working [#18104](https://github.com/anomalyco/opencode/issues/18104), MCP stdio non-functional [#27771](https://github.com/anomalyco/opencode/issues/27771), spawn hangs [#29831](https://github.com/anomalyco/opencode/pull/29831)) indicate the non-macOS/Linux-glibc surface still needs significant investment.

- **Permission system edge cases.** Users report getting trapped in permission dialogs ([#30344](https://github.com/anomalyco/opencode/issues/30344)) and that "always allow" rules persist across session forks in potentially unsafe ways ([#30779](https://github.com/anomalyco/opencode/issues/30779)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-05

Here is the technical digest for the Pi ecosystem (github.com/badlogic/pi-mono) covering the latest releases, issues, pull requests, and community trends.

## 1. Today's Highlights
Pi rolled out **v0.78.1**, expanding the tool's ecosystem with new provider support for Ant Ling, NVIDIA NIM, and MiniMax-M3, alongside richer extension context APIs. Community focus remains heavily fixated on improving remote execution environments (SSH/containers) and stabilizing the OpenAI Codex/GPT-5.5 integrations, which continue to cause TUI hangs. Additionally, a significant architectural shift is underway with newly proposed workspace approval systems to secure local configurations.

## 2. Releases
### [v0.78.1](https://github.com/badlogic/pi-mono/releases/tag/v0.78.1)
- **More built-in provider coverage:** Added setup support for Ant Ling and NVIDIA NIM, plus MiniMax-M3 support for direct MiniMax providers.
- **Richer extension context:** Extensions can now utilize `ctx.mode` and `ctx.getSystemPromptOptions()` for deeper integration. 

## 3. Hot Issues
1. **[#4945](https://github.com/earendil-works/pi/issues/4945) [OPEN]: Codex/GPT-5.5 TUI Hangs** - The interactive TUI frequently gets stuck on "Working..." with zero-usage aborted turns when using `openai-codex`. This is a highly active issue (51 comments, 27 thumbs up) as it completely blocks user workflows.
2. **[#5323](https://github.com/earendil-works/pi/issues/5323) [OPEN]: Vertex + GCP Metadata Server Support** - Pi's synchronous check for Vertex authentication prevents it from utilizing the GCP metadata server dynamically, breaking seamless cloud deployments.
3. **[#5341](https://github.com/earendil-works/pi/issues/5341) [CLOSED]: Remote Containers over SSH** - A highly requested capability allowing Pi sessions to run locally while routing OS interactions (fs, spawn) to remote SSH containers, fulfilling a major need for secure sandboxing.
4. **[#5373](https://github.com/earendil-works/pi/issues/5373) [CLOSED]: High CPU on Large Sessions** - Users reported ~24% idle CPU usage on 150k+ token sessions due to excessive `futex` calls under the hood, highlighting performance bottlenecks in long-running context windows.
5. **[#5386](https://github.com/earendil-works/pi/issues/5386) [OPEN]: Ollama Usage Field Crash** - `getSessionStats()` crashes when Ollama models omit token usage data. This breaks compatibility with local open-weight models.
6. **[#5363](https://github.com/earendil-works/pi/issues/5363) [OPEN]: Amazon Bedrock Mantle Provider** - Request to add a provider for Bedrock Mantle's OpenAI-compatible endpoints, as the existing Converse API provider doesn't support this emerging standard.
7. **[#5188](https://github.com/earendil-works/pi/issues/5188) [OPEN]: Shift+Enter Keybinding Regression** - `shift+enter` submits prompts instead of creating new lines despite correct `agent/keybindings.json` configurations, impacting muscle memory for power users.
8. **[#5384](https://github.com/earendil-works/pi/issues/5384) [CLOSED]: DeepSeek `role: "developer"` Bug via Proxies** - DeepSeek requests routed through OpenRouter fail because `detectCompat()` fails to map the model ID correctly, causing API rejections.
9. **[#5364](https://github.com/earendil-works/pi/issues/5364) [CLOSED]: MCP Structured Content** - A call to natively support `structuredContent` from MCP servers, which is currently discarded in favor of standard text/image arrays.
10. **[#5389](https://github.com/earendil-works/pi/issues/5389) [CLOSED]: macOS STT Freeze** - Using Mac dictation while Pi is working causes the TUI to freeze completely, indicating UI thread-blocking during speech-to-text events.

## 4. Key PR Progress
1. **[#5332](https://github.com/earendil-works/pi/pull/5332): Workspace Approval System** - Introduces a security prompt requiring interactive approval before loading `.pi` or `.pi.user` folders, heavily improving supply-chain safety for extensions.
2. **[#5385](https://github.com/earendil-works/pi/pull/5385): First-run Terminal Theme Detection** - Automatically matches Pi's theme to the user's terminal light/dark mode via OSC queries on first launch.
3. **[#5400](https://github.com/earendil-works/pi/pull/5400): Fix `maxTokens` for OpenCode Providers** - Resolves an issue where Pi sent `max_completion_tokens` instead of `max_tokens` to OpenCode endpoints.
4. **[#5379](https://github.com/earendil-works/pi/pull/5379): Absolute Paths for Local Installs** - Refactors user-scoped package installs to use absolute rather than relative paths, preventing resolution errors.
5. **[#5281](https://github.com/earendil-works/pi/pull/5281): Unified Command Keybindings** - Introduces a `cmd.<name>` keybinding convention allowing users to map shortcuts to *any* command, including those added by extensions.
6. **[#5410](https://github.com/earendil-works/pi/pull/5410): Persist Restored Session Models** - Fixes a bug where continuing a session (`pi -c`) wouldn't update the default model for future new sessions.
7. **[#4651](https://github.com/earendil-works/pi/pull/4651): Portable Git Bash on Windows** - An experimental attempt to automatically fetch Git Bash (similar to `rg` and `find`) to smooth out the Windows setup experience.
8. **[#5399](https://github.com/earendil-works/pi/pull/5399): Deferred Extension Autocomplete** - Fixes autocomplete snapshots so commands from extensions loaded with `"load": "deferred"` correctly appear in the UI.
9. **[#4383](https://github.com/earendil-works/pi/pull/4383): SDK Tool Config Docs Update** - Deprecates old `readTool`/`bashTool` factories in favor of the newer `createAgentSession({ tools })` API patterns.
10. **[#5371](https://github.com/earendil-works/pi/pull/5371): Skill Message Spacing** - UI fix ensuring proper whitespace between skill custom messages and subsequent user inputs.

## 5. Feature Request Trends
- **Remote Execution & Sandboxing:** A massive trend is routing OS interactions to remote containers via SSH (#5341, #5350). Developers are actively requesting ways to intercept file operations (like intercepting the `grep` command in #5354) to enforce local sandbox environments (bubblewrap/sandbox-exec).
- **Deepening MCP Compatibility:** The community wants full MCP feature parity, pushing for `structuredContent` support (#5364) rather than just basic text arrays.
- **Provider & Proxy Flexibility:** Users are consistently requesting broader provider coverage (Amazon Bedrock Mantle #5363) and better tools for routing traffic through proxies like OpenRouter seamlessly (#5384).
- **TUI/UX Enhancements:** Requests for alternate buffer rendering to stop constant redraws (#5357) and better session tree management (deleting branches via `shift-d` in #5366) show a maturing user base demanding refined terminal experiences.

## 6. Developer Pain Points
- **Role and Compat Mapping Failures:** Extension developers and proxy users are highly frustrated by silent failures in API compatibility mapping. Issues like `registerProvider()` ignoring provider-level `compat` (#5349) and DeepSeek/OpenRouter role mismatches (#5384) cause obscure 400 errors that are hard to debug.
- **Local Runtime Conflicts:** Interoperability issues between Node and Bun persist, such as recent installs via Bun breaking due to undici internal mismatches (#5365). Additionally, cross-platform path resolution bugs (Windows host vs. Linux remote) break custom tool operations (#5350).
- **UI State Bugs:** High CPU utilization on large sessions (#5373) and UI freezes during background processing (STT freezing in #5389) indicate underlying event loop or thread-blocking issues in the TUI.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-05

## 1. Today's Highlights
A new nightly build, **v0.17.1-nightly.20260604**, was released alongside active discussions on persistent memory, cross-session telemetry, and daemon performance optimization. The community is heavily focused on architectural parity with Claude Code—pushing for global user-level memories, interactive stats dashboards, and non-AI assisted context compression.

## 2. Releases
- **[v0.17.1-nightly.20260604](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.1-nightly.20260604.16dd99fa3)** — Automated release cut via PR [#4742](https://github.com/QwenLM/qwen-code/pull/4742). No user-facing release notes beyond the version bump.

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [#4493 — Rider OAuth login loop](https://github.com/QwenLM/qwen-code/issues/4493) | JetBrains Rider users hit an infinite redirect during OAuth when already logged in, blocking token plan access. 10 comments, still open and awaiting triage. |
| 2 | [#4722 — Statusline shows raw model ID](https://github.com/QwenLM/qwen-code/issues/4722) | `useStatusLine.ts` exposes `qwen3-coder-plus` instead of a friendly name; using model ID as a unique key also breaks multi-key setups. Closed after identifying the fix path. |
| 3 | [#4754 — `/model` shouldn't persist to settings](https://github.com/QwenLM/qwen-code/issues/4754) | Session-level model switches silently write to `settings.json`, surviving restarts. Community agrees this should be opt-in or default to session-only. |
| 4 | [#4723 — Rules / Instructions support](https://github.com/QwenLM/qwen-code/issues/4723) | Users want a Claude Code–style rule system for persistent language-style and behavioral guides across sessions. Strong demand for cross-project instruction persistence. |
| 5 | [#4597 — Enhanced cross-session stats](https://github.com/QwenLM/qwen-code/issues/4597) | Proposal for persistent usage tracking with an interactive fullscreen dashboard. Currently all stats are in-memory and lost on exit. 1 👍, aligned with the roadmap. |
| 6 | [#4747 — Global user-level auto-memory](https://github.com/QwenLM/qwen-code/issues/4747) | Memories about user preferences are locked per-project. This FR asks for `~/.qwen/memories/` to share user facts across all projects, mirroring Claude's user memory. |
| 7 | [#3568 — Configurable concurrent subagent limit](https://github.com/QwenLM/qwen-code/issues/3568) | Local LLM users need serial subagent execution to avoid VRAM exhaustion. Request is for a simple `maxConcurrentSubagents` config. |
| 8 | [#4783 — AES-128-ECB security concern](https://github.com/QwenLM/qwen-code/issues/4783) | Community questioning whether AES-128-ECB is appropriate for encryption at rest, and how tightly coupled it is to the codebase. |
| 9 | [#4727 — Dual Output TUI unresponsive](https://github.com/QwenLM/qwen-code/issues/4727) | JSON-file-based dual output mode leaves TUI frozen on input. Affects non-interactive / headless integration scenarios. |
| 10 | [#4777 — Deferred-tools listing busts prompt cache](https://github.com/QwenLM/qwen-code/issues/4777) | MCP progressive discovery rewrites the system prompt on every tool reveal, invalidating the prompt cache and increasing cost/latency. |

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#4779 — Interactive /stats dashboard](https://github.com/QwenLM/qwen-code/pull/4779) | Implements a three-tab dashboard (Session, Activity, Efficiency) with cross-session tracking. Directly addresses [#4597](https://github.com/QwenLM/qwen-code/issues/4597). |
| 2 | [#4764 — User-level auto-memory](https://github.com/QwenLM/qwen-code/pull/4764) | Adds `~/.qwen/memories/` for cross-project user facts using the existing 4-type taxonomy. Closes [#4747](https://github.com/QwenLM/qwen-code/issues/4747). |
| 3 | [#4677 — Vim mode Esc leak & command fixes](https://github.com/QwenLM/qwen-code/pull/4677) | Fixes Esc key leak to AppContainer, Enter submit behavior, render lag, and implements missing NORMAL mode commands. |
| 4 | [#4490 — Daemon-mode batch merge](https://github.com/QwenLM/qwen-code/pull/4490) | Massive integration of 46 commits (386 files, +115k/−12k LOC) covering the core daemon-mode feature set for v0.16-alpha. |
| 5 | [#4572 — Harden auto-mode self-modification checks](https://github.com/QwenLM/qwen-code/pull/4572) | Prevents auto mode from bypassing the classifier to write config, hooks, skills, or MCP config via workspace edit fast-paths. |
| 6 | [#4613 — Consistent model & approval state across daemon clients](https://github.com/QwenLM/qwen-code/pull/4613) | Ensures shared daemon sessions keep model and approval mode in sync across chat, terminal, and IDE clients. |
| 7 | [#4716 — Fix headless browser open crashes](https://github.com/QwenLM/qwen-code/pull/4716) | Replaces raw `open` calls with `openBrowserSecurely()` to prevent `xdg-open` crashes on headless Linux. |
| 8 | [#4526 — Bound hard-rescue compression retries](https://github.com/QwenLM/qwen-code/pull/4526) | Prevents infinite loops when an oversized request repeatedly fails rescue compression. |
| 9 | [#3778 — Desktop app package](https://github.com/QwenLM/qwen-code/pull/3778) | Adds `packages/desktop/` with Qwen ACP SDK integration for a standalone desktop application. |
| 10 | [#4533 — `/skills` picker dialog](https://github.com/QwenLM/qwen-code/pull/4533) | Bare `/skills` now opens a searchable picker to browse, toggle, and execute skills; adds `skills.disabled` workspace setting. |

## 5. Feature Request Trends

1. **Persistent Memory & Rules** — The single most-requested theme. Users want global user-level memories ([#4747](https://github.com/QwenLM/qwen-code/issues/4747)), a Claude-style rules/instructions system ([#4723](https://github.com/QwenLM/qwen-code/issues/4723)), and cross-project preference retention.
2. **Cross-Session Observability** — Persistent stats with dashboards ([#4597](https://github.com/QwenLM/qwen-code/issues/4597)), local diagnostic ring buffers ([#4421](https://github.com/QwenLM/qwen-code/issues/4421)), and full OpenTelemetry coverage for `qwen serve` ([#4554](https://github.com/QwenLM/qwen-code/issues/4554)).
3. **Context & Performance Optimization** — Non-AI `/compress-fast` ([#4264](https://github.com/QwenLM/qwen-code/issues/4264)), daemon cold-start reduction ([#4748](https://github.com/QwenLM/qwen-code/issues/4748)), and prompt-cache-friendly deferred tools ([#4777](https://github.com/QwenLM/qwen-code/issues/4777)).
4. **Local / Offline LLM Support** — Configurable subagent concurrency ([#3568](https://github.com/QwenLM/qwen-code/issues/3568)) and better self-hosted model integration.
5. **Daemon & ACP Transport** — Streamable HTTP transport for ACP-native editors ([#4782](https://github.com/QwenLM/qwen-code/issues/4782)) and runtime language switching ([#4705](https://github.com/QwenLM/qwen-code/pull/4705)).

## 6. Developer Pain Points

- **Authentication friction in IDEs**: JetBrains Rider OAuth loops ([#4493](https://github.com/QwenLM/qwen-code/issues/4493)) and removed `/manage-model` confusing OpenRouter users ([#4750](https://github.com/QwenLM/qwen-code/issues/4750)).
- **Auto-update failures on macOS/Linux**: Global npm installs requiring root cause EACCES on every auto-update attempt ([#4627](https://github.com/QwenLM/qwen-code/issues/4627)), with fallback fixes still in review ([#4643](https://github.com/QwenLM/qwen-code/issues/4643)).
- **Headless Linux crashes**: Commands like `/bug`, `/docs`, `/insight` hard-depend on `xdg-open` and crash in containers/SSH ([#4712](https://github.com/QwenLM/qwen-code/issues/4712)).
- **Desktop UI rough edges**: Escape key re-editing blocks message send ([#4772](https://github.com/QwenLM/qwen-code/issues/4772)), git branch visibility is tooltip-only ([#4769](https://github.com/QwenLM/qwen-code/issues/4769)).
- **Prompt cache invalidation**: MCP tool discovery rewrites the cached system prompt on every change, silently increasing token costs ([#4777](https://github.com/QwenLM/qwen-code/issues/4777)).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the technical community digest for DeepSeek-TUI (now CodeWhale) for June 5, 2026.

### 1. Today's Highlights
The project officially entered a new era with the release of **v0.8.53**, which formally renames DeepSeek-TUI to **CodeWhale**. Legacy binaries are currently shipping as deprecation shims and will be removed in the upcoming v0.9.0 milestone. Community activity is heavily focused on v0.9.0 architectural planning—particularly around the new WhaleFlow runtime and Model Lab—while simultaneously shipping rapid bug fixes for newly integrated providers like Xiaomi MiMo and Moonshot (Kimi K2.6).

### 2. Releases
- **[v0.8.53](https://github.com/Hmbown/CodeWhale/releases/)**: Renames the project to CodeWhale. Legacy `deepseek` and `deepseek-tui` binaries currently operate as compatibility-only deprecation shims that print a one-line warning before forwarding to the new `codewhale` / `codewhale-tui` binaries. These shims are slated for complete removal in v0.9.0.

### 3. Hot Issues
1. **[#2754](https://github.com/Hmbown/CodeWhale/issues/2754) [bug] Switching to Kimi K2.6 causes auth failure and locks IDE**: A critical usability blocker where switching to Moonshot/Kimi fails authentication and bricks the IDE, preventing users from reverting to DeepSeek without manual intervention.
2. **[#2749](https://github.com/Hmbown/CodeWhale/issues/2749) [enhancement] Support project-level `.codewhale/mcp.json` auto-merge**: Users discovered that despite documentation claiming otherwise, the TUI only loads global MCP configs. This is a highly requested feature for workspace-specific tooling.
3. **[#2744](https://github.com/Hmbown/CodeWhale/issues/2744) [bug] MCP tool name parsing breaks on underscores**: `McpPool::parse_prefixed_name` splits at the wrong boundary if the server name contains an underscore (e.g., `my_db`), breaking tool routing for affected servers.
4. **[#2641](https://github.com/Hmbown/CodeWhale/issues/2641) [bug] `read_file` PDF bug hangs channel**: Reading PDFs without specifying the `pages` parameter causes the tool to hang indefinitely, eventually closing the channel. Specifying pages works fine. 
5. **[#2739](https://github.com/Hmbown/CodeWhale/issues/2739) [bug] Task execution deadlocks on extended runs**: Users are still experiencing infinite waits during long bug-fix tasks. Even after ESC cancellation, attempting to resume via `--continue` results in lost session context.
6. **[#2666](https://github.com/Hmbown/CodeWhale/issues/2666) [bug] Telemetry for agents**: During multi-agent tasks, agents lack visibility into token budgets, context window pressure, and API costs, causing them to run blindly into limits.
7. **[#2731](https://github.com/Hmbown/CodeWhale/issues/2731) [enhancement] Xiaomi Mimo pricing missing**: Users noted that mimo-v2.5 models do not display pricing in the UI.
8. **[#2720](https://github.com/Hmbown/CodeWhale/issues/2720) [v0.9.0] Milestone execution map**: Maintainers are actively structuring the v0.9.0 release into dependency lanes to ensure agents don't skip critical stabilization steps before building new UI/Model Lab features.
9. **[#2664](https://github.com/Hmbown/CodeWhale/issues/2664) [bug] Legacy settings path persisting**: Post-rebrand, the TUI still surfaces `Application Support/deepseek/settings.toml` in the config view instead of the new CodeWhale path.
10. **[#1920](https://github.com/Hmbown/CodeWhale/issues/1920) [bug] Wayland clipboard copy failures**: Copying silently fails on non-wlroots Wayland compositors like `niri`, affecting Linux users on Arch/CachyOS.

### 4. Key PR Progress
1. **[#2755](https://github.com/Hmbown/CodeWhale/pull/2755) fix(tui): roll back provider after auth failure**: Implements a pending provider-switch snapshot that automatically reverts to the previous model/engine upon an authentication failure (Directly fixes the Kimi K2.6 lockout in #2754).
2. **[#2751](https://github.com/Hmbown/CodeWhale/pull/2751) fix(mcp): merge workspace MCP config**: Merges workspace `.codewhale/mcp.json` with global configs, allowing workspace servers to properly override globals.
3. **[#2747](https://github.com/Hmbown/CodeWhale/pull/2747) fix(tui): preserve underscored MCP server names**: Solves the underscore routing bug by matching against known MCP server names using a longest-prefix match before falling back to legacy splitting.
4. **[#2753](https://github.com/Hmbown/CodeWhale/pull/2753) feat(tui): multi-tab system**: Introduces a `TabManager` with persistent cross-tab collaboration, session cycling, and task delegation primitives.
5. **[#2687](https://github.com/Hmbown/CodeWhale/pull/2687) feat(engine): mode-agnostic system prompt**: Strips mode-specific instructions from the base system prompt, delivering them via append-only messages. Greatly optimizes context window usage.
6. **[#2741](https://github.com/Hmbown/CodeWhale/pull/2741) feat(config): HarnessPosture data model**: Lays the foundation for v0.9.0 by defining model-specific behavior profiles (prompt layering, tool surface, safety) as a falsifiable contract.
7. **[#2745](https://github.com/Hmbown/CodeWhale/pull/2745) feat(init): LLM-powered codebase analysis**: Upgrades the `/init` command to use LLM agents to generate a deeply customized `AGENTS.md` tailored to the local repo, replacing the static template.
8. **[#2736](https://github.com/Hmbown/CodeWhale/pull/2736) fix(subagent): inherit parent model**: Fixes a hardcoded `deepseek-v4-flash` string in `tool_agent_route()`, allowing sub-agents to correctly inherit the model used by the parent session.
9. **[#2737](https://github.com/Hmbown/CodeWhale/pull/2737) fix(skills): union configured skills_dir**: Resolves a bug where configured `skills_dir` was entirely ignored if the workspace already contained *any* skills, switching to a union approach.
10. **[#2734](https://github.com/Hmbown/CodeWhale/pull/2734) feat(sidebar): multi-line detail popover**: Improves TUI UX by replacing single-line tooltips with auto-wrapping popovers for truncated sidebar rows.

### 5. Feature Request Trends
- **Advanced Model & Provider Management**: With the recent addition of models like Xiaomi MiMo and Kimi K2.6, the community is heavily requesting more robust provider routing, automatic rollbacks, accurate pricing displays, and support for OpenAI-compatible endpoint path suffixes.
- **WhaleFlow & Run Tracing**: As multi-agent workflows become prominent, users want structured "run traces" (model config used, token cost, execution time) to debug pipelines effectively.
- **Cross-Ecosystem Compatibility**: Users are asking for better interoperability with existing ecosystems, specifically proposing adapters to map Claude Code "Skills" into CodeWhale equivalents.
- **Granular UI Controls**: There is a strong demand for better transcript readability (collapsing consecutive tool calls) and IDE control (pausable command lifecycles).

### 6. Developer Pain Points
- **State Corruption during Provider Switching**: The most severe pain point today is the TUI's failure to gracefully handle API auth errors when switching models, leading to a total application lockup.
- **MCP Configuration Fragility**: Developers are experiencing friction with MCP integrations. Names with underscores silently break routing, and the prior lack of project-level config merging forced bloated global configurations.
- **Long-Running Task Instability**: Agents hanging or losing session context during extended operations remains a recurring frustration. The lack of visibility into token limits/context pressure exacerbates this, as agents "work blindly."
- **Legacy Path Artifacts**: Even after the official CodeWhale rebrand, remnants of the old "DeepSeek" naming convention inside local configuration paths and backend hardcoded strings are causing confusion and sub-agent initialization failures.

</details>