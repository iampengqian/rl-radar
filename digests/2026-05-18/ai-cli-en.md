# AI CLI Tools Community Digest 2026-05-18

> Generated: 2026-05-17 22:40 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the community digests from May 18, 2026.

# AI Developer CLI Tools: Cross-Tool Ecosystem Report (2026-05-18)

## 1. Ecosystem Overview
The AI CLI tooling landscape is currently characterized by aggressive feature iteration mixed with growing pains surrounding platform stability and memory management. Major players like OpenAI, Anthropic, and Google are racing to embed advanced agentic capabilities—such as multi-agent orchestration, AST-aware tooling, and autonomous background processing—into their command-line interfaces. Meanwhile, a thriving tier of specialized and open-source tools (OpenCode, Pi, Qwen Code, DeepSeek-TUI) is pushing the boundaries of model routing flexibility and BYOK (Bring Your Own Key) architectures. Across the board, teams are navigating severe friction points regarding cross-platform parity (especially Windows/WSL), OAuth reliability, out-of-memory (OOM) crashes, and erratic context compaction as these CLI agents attempt to support longer, autonomous workflows.

## 2. Activity Comparison
Tool parity and development velocity vary significantly, with some tools prioritizing deep architectural refactoring while others focus on rapid community-driven feature releases.

| Tool | Hot Issues Tracked | Active PRs Tracked | Release Status (May 18) |
| :--- | :--- | :--- | :--- |
| **OpenAI Codex** | 10 | 10 | No Release |
| **Claude Code** | 10 | 10 | No Release |
| **Gemini CLI** | 10 | 10 | No Release |
| **OpenCode** | 10 | 10 | **v1.15.4** Released |
| **Qwen Code** | 10 | 10 | **v0.16.0-preview.0** Released |
| **DeepSeek-TUI** | 10 | 10 | **v0.8.39** Released |
| **GitHub Copilot CLI**| 10 | 1 | No Release |
| **Pi** | 10 | 10 | **v0.75.0** Released |
| **Kimi Code CLI** | 5 | 4 | No Release |

## 3. Shared Feature Directions
Despite disparate ecosystems, community demands and maintainer roadmaps are converging on several core capabilities:

*   **Advanced Context & Compaction Management:** Users are running severely long-lived agentic sessions, leading to a universal need for better memory management. **DeepSeek-TUI**, **Qwen Code**, and **OpenAI Codex** are all actively addressing OOM errors, deadlocks, and "forgetful" agents caused by aggressive or broken context compression.
*   **Windows and WSL Parity:** Windows users remain a second-class citizen across the board. **Claude Code**, **GitHub Copilot CLI**, **Kimi Code CLI**, and **Pi** are all battling high-priority complaints ranging from hardcoded PowerShell dependencies and broken `glibc` compilations to basic input (Shift+Enter/Ctrl+V) and markdown rendering failures.
*   **Robust Multi-Agent / Sub-Agent Orchestration:** The shift from single-prompts to autonomous swarms is clear. **Gemini CLI**, **OpenAI Codex**, and **DeepSeek-TUI** communities are heavily focused on the stability of sub-agents, requesting fixes for zombie processes, inherited context waste, and "lossy" data returns from child to parent agents.
*   **Third-Party Provider & OpenAI-Compatible Routing:** Users want the freedom to swap underlying models seamlessly. **DeepSeek-TUI**, **Qwen Code**, **Pi**, and **OpenCode** are dedicating massive engineering effort to parsing `reasoning_content` accurately, fixing custom model routing, and preventing malformed payloads when using non-native LLM providers (e.g., MiniMax, xAI, local vLLM).
*   **Skill Discovery & Hook Extensibility:** Developers want deeply customizable CLI experiences. **OpenCode** and **Gemini CLI** are leading the push toward AST-aware file reading and skill-discovery commands, while **Claude Code**, **OpenAI Codex**, and **GitHub Copilot CLI** users are requesting better visibility into plugin hooks (like `postToolUse`) to build custom overlays and HUDs.

## 4. Differentiation Analysis
*   **Claude Code & GitHub Copilot CLI** are heavily entrenched in the enterprise IDE ecosystem but are currently suffering from backend authentication and platform instability. Copilot CLI is uniquely criticized for token inefficiency and artificial context caps, while Claude Code faces intense scrutiny over autonomous data-safety (unintended file deletion).
*   **OpenAI Codex & Gemini CLI** represent the "heavyweight" agentic platforms, focusing heavily on core infrastructure. Codex is undergoing a massive `SandboxPolicy` migration, and Gemini CLI is hyper-focused on deterministic AST tooling and self-correcting memory loops.
*   **Qwen Code & DeepSeek-TUI** differentiate via rapid, high-volume release cadences targeting power users and localized markets. They are heavily focused on daemon/serve modes (`Mode B`) and resolving high-throughput token drain issues.
*   **Pi & OpenCode** cater to highly technical developers seeking composable, BYOK-friendly architectures. Pi uniquely focuses on extreme provider flexibility (routstr, Together AI, xAI) and is even debating a Rust rewrite for performance, while OpenCode acts as a thin, Effect.js-driven client prioritizing LSP integration.
*   **Kimi Code CLI** is focused on bridging the gap between terminal and IDE, heavily prioritizing unblocked multimodal inputs (image pasting) and unified approval UX (`yolo` vs `afk` modes) over raw architectural overhauls.

## 5. Community Momentum & Maturity
**OpenAI Codex, Gemini CLI, and Claude Code** show the highest volume of structural refactoring, indicating maturing codebases preparing for enterprise scale. However, they carry the baggage of "second-system syndrome" (e.g., complex OAuth failures, buggy rate-limit accounting).

Conversely, **Pi, Qwen Code, and DeepSeek-TUI** demonstrate the highest community *momentum* and iteration speed. They are shipping tangible features (daemon modes, provider integrations, text-selection UIs) daily. **GitHub Copilot CLI** appears to be the most stagnant in this snapshot, facing severe user backlash regarding inefficiency while showing minimal PR activity to address it.

## 6. Trend Signals
*   **The OOM Crisis is the Industry Bottleneck:** As context windows balloon (up to 1M tokens), CLI tools are routinely crashing trying to manage them. Token-based compaction is failing. Expect a near-future industry shift toward semantic compression, AST-referenced memory, and localized context states to keep CLI memory footprints manageable.
*   **Democratization of the Orchestrator:** The market is shifting away from walled gardens. Developers explicitly want "thin CLI orchestrators" that allow them to plug in local LLMs, specialized APIs, and custom tool-schemas without friction. The winners of the CLI wars will be those who abstract the model layer completely.
*   **Zero-Trust Agentic Architectures:** As tools gain the ability to execute destructive shell commands or alter codebases autonomously, the community is demanding zero-trust architectures, containerized proxies, and external safety checkers. Safety is no longer just about filtering harmful text; it is about constraining autonomous file-system actions.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-05-18 | Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

*(Note: Comment counts were unavailable in the dataset; this ranking is derived from the top-trafficked PRs based on update frequency, update recency, and community issue overlap.)*

| Rank | Skill | PR | Author | Status |
|---|---|---|---|---|
| 1 | **AppDeploy** — Full-stack web app deployment from Claude | [#360](https://github.com/anthropics/skills/pull/360) | avimak | 🟢 Open |
| Deploy and manage web apps to a public URL directly from a Claude session. Manages the full lifecycle including status checks and versioning. Active through May 2026, indicating sustained review interest. |
| 2 | **AURELION Suite** (Kernel, Advisor, Agent, Memory) | [#444](https://github.com/anthropics/skills/pull/444) | Chase-Key | 🟢 Open |
| A four-part cognitive framework for professional knowledge management. The "Kernel" provides a 5-floor structured thinking template; "Memory" adds persistent context. Most recently updated May 6—the freshest active PR in the dataset. |
| 3 | **pdf / SKILL.md Case-Sensitivity Fix** | [#538](https://github.com/anthropics/skills/pull/538) | Lubrsy706 | 🟢 Open |
| Critical bugfix: corrects 8 case-sensitivity mismatches (e.g., `REFERENCE.md` → `reference.md`) that break the PDF skill on case-sensitive file systems (Linux). Updated as recently as April 29, suggesting it is in active review. |
| 4 | **ODT (OpenDocument) Skill** | [#486](https://github.com/anthropics/skills/pull/486) | GitHubNewbie0 | 🟢 Open |
| Enables creation, template filling, parsing, and ODT↔HTML conversion for OpenDocument files (.odt, .ods). Fills a major gap in the document-generation pipeline alongside the existing DOCX skill. |
| 5 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | PGTBoos | 🟢 Open |
| Automated quality control for AI-generated documents: fixes orphan word wraps, widow paragraphs, and numbering misalignment. Addresses a universal pain point since "users rarely ask for good typography" but always notice when it's bad. |
| 6 | **DOCX Tracked Change ID Collision Fix** | [#541](https://github.com/anthropics/skills/pull/541) | Lubrsy706 | 🟢 Open |
| Prevents document corruption when tracked changes conflict with existing bookmarks due to shared `w:id` namespaces in OOXML. A high-severity fix for enterprise document workflows. |
| 7 | **ServiceNow Platform Skill** | [#568](https://github.com/anthropics/skills/pull/568) | Vanka07 | 🟢 Open |
| Broad enterprise skill covering ITSM, ITOM, SecOps, ITAM/SAM, FSM, SPM, CSDM, and IntegrationHub. Represents the most ambitious enterprise-platform integration submitted to date. |
| 8 | **Sensory — macOS Automation via AppleScript** | [#806](https://github.com/anthropics/skills/pull/806) | AdelElo13 | 🟢 Open |
| Replaces screenshot-based "computer use" with direct `osascript` calls. Features a two-tier permission model (Tier 1 out-of-the-box, Tier 2 requiring Accessibility permissions). |

---

## 2. Community Demand Trends

Distilled from the top-trafficked Issues:

| Trend | Signal Issues | Insight |
|---|---|---|
| **Enterprise / Org Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (13 comments, 👍7) | The #1 most-discussed issue. Users want shared skill libraries and direct sharing links instead of manual `.skill` file distribution via Slack/Teams. |
| **Skill Evaluation & Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (8 comments, 👍6), [#202](https://github.com/anthropics/skills/issues/202) (closed, 8 comments) | `run_eval.py` shows a 0% skill trigger rate with `claude -p`. The community is demanding reproducible evaluation tooling and better `skill-creator` defaults. |
| **Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (6 comments, 👍2) | Community skills distributed under the `anthropic/` namespace enable impersonation. Users are calling for namespace isolation and signing. |
| **Plugin Architecture Fixes** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 👍8), [#1087](https://github.com/anthropics/skills/issues/1087) (2 comments, 👍1) | `document-skills` and `example-skills` install duplicate or excess skills, bloating the context window. Clean plugin boundaries are a top infrastructure request. |
| **MCP Integration** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments), [#1102](https://github.com/anthropics/skills/issues/1102) (2 comments) | Users want Skills exposed as MCPs with defined APIs, and are already hitting context congestion when MCPs return uncompressed data. |
| **Bedrock / Enterprise SSO Support** | [#29](https://github.com/anthropics/skills/issues/29), [#532](https://github.com/anthropics/skills/issues/532) | Skills tooling (especially `run_eval.py`) requires `ANTHROPIC_API_KEY`, which enterprise/SSO users don't have. Broad demand for SSO-compatible authentication. |

---

## 3. High-Potential Pending Skills

These open PRs are actively being updated and could merge soon:

| Skill | PR | Why It's Likely to Land |
|---|---|---|
| **PDF Case-Sensitivity Fix** | [#538](https://github.com/anthropics/skills/pull/538) | Narrow, high-severity bugfix (breaks on Linux). Low risk, high impact. Updated April 29. |
| **DOCX ID Collision Fix** | [#541](https://github.com/anthropics/skills/pull/541) | Prevents data corruption—a blocking issue for enterprise document workflows. |
| **YAML Validation in skill-creator** | [#539](https://github.com/anthropics/skills/pull/539) | Pre-parse validation catching unquoted YAML descriptions with `:` characters. Directly supports the skill-creator improvements demanded in Issue #202. |
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | Addresses the repo's 25% community health score. Pure documentation; low merge friction. |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Covers unit, integration, and E2E testing with the Testing Trophy model. Fills a gap with no overlap against existing skills. |
| **Frontend-Design Improvement** | [#210](https://github.com/anthropics/skills/pull/210) | Revision of an existing skill for clarity and actionability—improves rather than adds, lowering review scope. |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for enterprise-grade skill infrastructure—org-wide sharing, reliable evaluation pipelines, and secure namespace isolation—rather than any single new Skill capability.**

---

# Claude Code Community Digest — 2026-05-18

## 1. Today's Highlights

No new releases were shipped in the last 24 hours. The issue tracker remains dominated by a cluster of long-standing authentication and OAuth failures—many nearing stale closure without confirmed fixes—as well as ongoing regressions in the Windows TUI. On the pull request side, community contributions continue to address hook output handling, security architecture, and developer tooling.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#12204](https://github.com/anthropics/claude-code/issues/12204) — *Invalid API key / black screen in VS Code extension 2.0.5.0* | 25 comments, 7 👍. A persistent auth failure that blocks VS Code users entirely after OAuth. Still unresolved despite months of activity. |
| 2 | [#44256](https://github.com/anthropics/claude-code/issues/44256) — *OAuth Authorize button returns 500* | 20 comments, 9 👍. Server-side 500 on `auth.anthropic.com` prevents login across platforms. High community traction for a critical-path bug. |
| 3 | [#44277](https://github.com/anthropics/claude-code/issues/44277) — *OAuth timeout on macOS VS Code* | 12 comments. Part of an April 6 OAuth outage cluster; macOS-specific timeout behavior compounds the auth unreliability. |
| 4 | [#44265](https://github.com/anthropics/claude-code/issues/44265) — *OAuth token always expired after login (v2.1.92)* | 6 comments, 5 👍. Token is obtained but immediately reported as expired—suggests a clock-skew or token-persistence bug. |
| 5 | [#50159](https://github.com/anthropics/claude-code/issues/50159) — *Shift+Enter regression on v2.1.113 (Windows TUI)* | 6 comments, 3 👍. Labeled `regression`. A recurring Windows input bug that reappears across versions, frustrating CLI-first users. |
| 6 | [#37135](https://github.com/anthropics/claude-code/issues/37135) — *Stop hooks hang on large JSON block responses (regression since 2.1.78)* | 6 comments. Hooks returning large payloads cause indefinite hangs, directly impacting automated CI/CD workflows. |
| 7 | [#40043](https://github.com/anthropics/claude-code/issues/40043) — *Allow removal of local folders from Cowork context* | 7 comments, **19 👍**—the highest thumbs-up count in this batch. Strong demand for finer-grained context control in multi-agent Cowork projects. |
| 8 | [#44288](https://github.com/anthropics/claude-code/issues/44288) — *Unintended file deletion outside requested scope* | 4 comments. **Data-loss severity.** Claude executed `rm` on an untracked file outside the allow list, raising permissions and safety concerns. |
| 9 | [#39418](https://github.com/anthropics/claude-code/issues/39418) — *No line numbers in VS Code plugin for modified files* | 3 comments, 5 👍. Open bug affecting code review workflows inside the IDE extension. |
| 10 | [#51677](https://github.com/anthropics/claude-code/issues/51677) — *Codicon font blocked by webview CSP (tofu characters)* | 1 comment, 4 👍. Extends a previously auto-closed issue; diff markers render as empty boxes on v2.1.116 due to Content Security Policy. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | [#52668](https://github.com/anthropics/claude-code/pull/52668) — *fix(hookify): include hook-specific output for warnings* | Closed. Adds `additionalContext` so hook warnings reach Claude's context on PreToolUse/PostToolUse events. Fixes #40380. |
| 2 | [#52666](https://github.com/anthropics/claude-code/pull/52666) — *docs: fix README brand casing* | Closed. Normalizes "Github" → "GitHub" and "MacOS" → "macOS". Documentation housekeeping. |
| 3 | [#10036](https://github.com/anthropics/claude-code/pull/10036) — *Allow ENV vars to extend allowed hosts list* | Open since Oct 2025. Refactors domain allowlisting so users can add custom hosts via environment variables—useful for private MCP servers. |
| 4 | [#7262](https://github.com/anthropics/claude-code/pull/7262) — *feat: Add MCP tool discovery CLI commands* | Open. Introduces non-interactive CLI commands for MCP tool/server discovery, enabling automation and debugging workflows. |
| 5 | [#5855](https://github.com/anthropics/claude-code/pull/5855) — *feat: Zero-trust architecture for env variable security* | Open. A 60-line security hook for client-side secret detection, addressing #2695. Lightweight but impactful for credential safety. |
| 6 | [#5490](https://github.com/anthropics/claude-code/pull/5490) — *Containerized Claude Code with host credential proxy* | Open. Runs Claude Code in a container while keeping credentials on the host via a proxy—no secrets enter the container. |
| 7 | [#6964](https://github.com/anthropics/claude-code/pull/6964) — *fix(workflows): Add /bin and /usr/bin to PATH* | Open. Resolves `spawn ps ENOENT` errors in long-running CI scripts by ensuring standard system paths are present. |
| 8 | [#9262](https://github.com/anthropics/claude-code/pull/9262) — *docs: Enforce task tool and model metadata* | Open. Documents `claude-3-5-haiku-latest` model usage and mandates the Task tool for commit workflows to enforce context isolation. |
| 9 | [#9446](https://github.com/anthropics/claude-code/pull/9446) — *docs: Add Community Marketplaces section* | Open. Adds a README section linking to third-party plugin marketplaces, improving ecosystem discoverability. |
| 10 | [#6754](https://github.com/anthropics/claude-code/pull/6754) — *Document RTL support for Claude CLI in VS Code* | Open. Provides instructions for fixing Hebrew/Arabic/Persian rendering in VS Code's integrated terminal. |

---

## 5. Feature Request Trends

1. **Cowork & Agent Context Control** — The highest-engagement request (#40043, 19 👍) asks for granular folder exclusion in Cowork projects. A related request (#34310) seeks a command to clear context for all teammates in an agent team, indicating strong demand for multi-agent session management.

2. **Session Organization & Naming** — #41770 highlights frustration with auto-generated session names and mixed project conversations. Users want manual naming, per-project grouping, and better search.

3. **Accessibility & Customization** — #44248 requests customizable fonts in the TUI renderer, and #44321 proposes auto-exiting idle sessions to reclaim memory, reflecting needs from developers running long-lived or multiple concurrent sessions.

4. **Plugin Ecosystem & Security** — Documentation fixes (#43722) and community marketplace listings (#9446) point to a maturing plugin ecosystem, while the zero-trust security PR (#5855) signals developer demand for safer credential handling.

---

## 6. Developer Pain Points

- **Authentication & OAuth Reliability** — At least **8 of the top 30 issues** relate to OAuth failures (500 errors, token expiry, timeouts) across macOS, Windows, and Linux. Many are months old and nearing stale closure without resolution, eroding trust in the login flow.
- **Windows Platform Parity** — Shift+Enter regressions (#50159), Bedrock OTel helper failures (#39959), CSP font issues (#51677), and rate-limit credit drain (#44310) show Windows as a consistently second-class citizen.
- **Recurring Regressions** — Bugs like Shift+Enter (#50159) and stop-hook hangs (#37135) keep reappearing after supposed fixes, suggesting insufficient regression test coverage.
- **Data Safety & Permissions** — Issue #44288 reports Claude deleting an untracked file outside its allow list, a critical safety gap that undermines confidence in autonomous operation.
- **Stale Management Frustration** — Numerous issues are being auto-closed as stale despite remaining unfixed (e.g., #51677, #26836), prompting users to re-file duplicates and fragment the issue history.

---

*Data sourced from [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) on 2026-05-18.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-18

## 1. Today's Highlights
No new Codex releases were published today. However, the engineering team submitted a massive volume of internal pull requests—primarily focused on deprecating the legacy Windows `SandboxPolicy` in favor of a new `PermissionProfile` system and optimizing TUI startup latency. On the community side, multiple reports surfaced regarding severe rate-limit accounting bugs, and the highly-upvoted IDE-integrated diff feature request continues to gain significant traction.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues

1. **[IDE-Integrated Diff / Approval Flow](https://github.com/openai/codex/issues/2998)**: The most upvoted active issue (+164 👍). The community strongly desires the terminal's red/green diff approval flow to be ported directly into IDEs, moving beyond the limitations of the current CLI-only experience.
2. **[GPT-5.5 Remote Compaction Breaks Threads](https://github.com/openai/codex/issues/19558)**: A critical regression where GPT-5.5 automatic context compaction fails and permanently bricks the active thread, forcing users to start over.
3. **[CLI Stream Disconnections](https://github.com/openai/codex/issues/13245)**: A persistent and highly commented connectivity bug causing the CLI to fail reconnection after 5 attempts.
4. **[Weekly Usage Limit Drops at 5-Hour Boundaries](https://github.com/openai/codex/issues/23188)**: Users are experiencing sudden drops in their weekly usage quota (e.g., from 70% down to 7%) when the shorter 5-hour limit resets, pointing to a core backend accounting bug.
5. **[Rate Limit Window Desync](https://github.com/openai/codex/issues/23190)**: The macOS app and web dashboard show conflicting usage limits and reset windows for the same account.
6. **[`/goal` Loop Burning Weekly Limits](https://github.com/openai/codex/issues/22833)**: A costly agent bug where `/goal` gets stuck requesting execution-time permissions in a loop, rapidly depleting the user's weekly quota without accomplishing tasks.
7. **[iOS/macOS Remote Control Broken](https://github.com/openai/codex/issues/22773)**: A 403 error is currently blocking mobile clients from controlling desktop hosts, breaking remote workflows.
8. **[Windows Chat History Lost After Update](https://github.com/openai/codex/issues/23193)**: Older chats disappear from the UI following an update, even though the underlying SQLite data remains intact locally.
9. **[Cyber-Safety Filter False Positives on Business Plan](https://github.com/openai/codex/issues/22554)**: The safety check continues to trigger on verified users' own application code, despite prior individual identity verification via chatgpt.com.
10. **[Windows `automation_update` Inconsistency](https://github.com/openai/codex/issues/23172)**: Tool calls for managing recurring automations are inconsistently exposed across different chats within the exact same Windows desktop session.

## 4. Key PR Progress

1. **[Harden CLI rate limit window labels](https://github.com/openai/codex/pull/22929)**: Refactors the CLI to stop hardcoding "5-hour" and "1-week" limits, enabling it to dynamically display generalized rate-limit periods returned by the server.
2. **[Optimize TUI startup terminal probes](https://github.com/openai/codex/pull/23175)** & **[Start fresh TUI thread in background](https://github.com/openai/codex/pull/23176)**: A two-part performance overhaul that parallelizes terminal probes and defers `thread/start` to drastically reduce launch-to-input latency in the CLI.
3. **[Windows Sandbox `PermissionProfile` Migration](https://github.com/openai/codex/pull/22896)** (associated PRs [#22918](https://github.com/openai/codex/pull/22918), [#22923](https://github.com/openai/codex/pull/22923), [#23167](https://github.com/openai/codex/pull/23167)): A massive structural refactor deprecating the legacy `SandboxPolicy` across the Windows sandbox IPC boundary, write roots, and thread store.
4. **[Cap diagnostic log payloads](https://github.com/openai/codex/pull/23180)**: Introduces a utility to truncate massive diagnostic logs to 16K, preventing log sinks from being overwhelmed by risky payloads.
5. **[Make multi-agent v2 tool namespace configurable](https://github.com/openai/codex/pull/23147)**: Adds configuration and validation for Responses-compatible namespace values for V2 multi-agent tools. 
6. **[Accept string input for Python turns](https://github.com/openai/codex/pull/23162)**: SDK improvement allowing Python `thread.turn` and `turn.steer` to accept plain strings directly, simplifying the developer experience.
7. **[Drop parent setup context from forked agents](https://github.com/openai/codex/pull/23145)** & **[Deduplicate forked subagent instructions](https://github.com/openai/codex/pull/22995)**: Fixes multi-agent memory issues where forked child agents inherited duplicate developer instructions and wasted context windows.
8. **[Defer v1 multi-agent tools behind tool search](https://github.com/openai/codex/pull/23144)**: Hides legacy V1 multi-agent tools when newer tool search namespaces are enabled, reducing prompt clutter.
9. **[thread-store: store permission profiles](https://github.com/openai/codex/pull/23165)**: Upgrades the thread persistence layer to save the richer `PermissionProfile` data rather than legacy `SandboxPolicy` objects.
10. **[Add keepalive in app-server WS client](https://github.com/openai/codex/pull/23199)**: Implements WebSocket keepalive between the app-server and exec-server, likely aimed at fixing the widespread stream disconnection issues seen in recent bugs.

## 5. Feature Request Trends

*   **IDE & UI Integrations**: Strong demand persists for moving CLI-exclusive features into the Desktop App and IDEs. Top requests include porting the red/green diff approval flow to IDE extensions ([#2998](https://github.com/openai/codex/issues/2998)) and allowing custom chat titles to replace auto-generated defaults ([#23203](https://github.com/openai/codex/issues/23203)).
*   **Expanded Hook System Visibility**: Developers are pushing for deeper TUI customization via the external hook system. Requests include exposing internal decision prompts (like "Implement this plan?") to external overlays ([#19328](https://github.com/openai/codex/issues/19328)) and allowing hook context to be passed to the model without rendering visual clutter in the TUI ([#21696](https://github.com/openai/codex/issues/21696)).
*   **Cross-Platform & Mobile Workflow Parity**: Users want unified features across operating systems, specifically requesting `/goal` support for the Windows app with the ability to resume those goals from mobile devices ([#23202](https://github.com/openai/codex/issues/23202)).
*   **Native File Handling in Browser Use**: As Codex Browser Use matures, users are frustrated that `<input type="file">` controls are currently completely ignored, blocking automated web testing and CMS workflows ([#20785](https://github.com/openai/codex/issues/20785)).

## 6. Developer Pain Points

*   **Rate Limit Bugs & Accounting Desyncs**: The most acute developer pain point today is erratic rate limiting. Users report erratic drops in weekly quotas ([#23188](https://github.com/openai/codex/issues/23188)), conflicting data between the web and desktop UIs ([#23192](https://github.com/openai/codex/issues/23192)), and non-deterministic reset windows ([#9508](https://github.com/openai/codex/issues/9508)). Agent loops burning through these glitchy limits compound the frustration.
*   **Fragile Remote SSH / Mobile Connectivity**: Setting up native remote control via SSH—particularly for Windows or Linux hosts bridging to iOS—is proving highly brittle, hard-coded, and prone to silent failures or 403 errors ([#23102](https://github.com/openai/codex/issues/23102), [#22965](https://github.com/openai/codex/issues/22965), [#22773](https://github.com/openai/codex/issues/22773)).
*   **Recurring Authentication and MCP Refresh Failures**: Integrations like Supabase MCP are severely hindered by repetitive OAuth token refresh loops during the `initialize` phase, breaking automated workflows ([#13852](https://github.com/openai/codex/issues/13852)).
*   **Excessive Disk I/O**: Agent sessions on VSCode/VSCodium are generating excessive SQLite WAL writes during streaming because TRACE logs ignore the `RUST_LOG` environment variable ([#17320](https://github.com/openai/codex/issues/17320)), degrading system performance.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-18

## 1. Today's Highlights
The Gemini CLI ecosystem saw intense community and maintainer focus on **agent stability and memory reliability**, with multiple high-priority PRs addressing critical PTY memory leaks, shell execution hangs, and session log recursive loops. Concurrently, architectural discussions around **AST-aware tooling** and **Auto Memory extraction quality** highlight a strategic push toward more efficient, deterministic, and self-aware agent behaviors in the core CLI. 

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues

1. **[Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)** `[P1]`
   Deferring to the generalist agent causes indefinite hangs during simple tasks. Instructing the model to avoid sub-agents is the current workaround. This is a high-friction blocker for standard workflows (👍 7).
2. **[Subagent falsely reports success on `MAX_TURNS` interruption](https://github.com/google-gemini/gemini-cli/issues/22323)** `[P1]`
   Subagents hitting their maximum turn limit terminate with `status: "success"` instead of throwing an error. This masks incomplete analysis and silently poisons the primary agent's context.
3. **[Gemini underutilizes custom skills and sub-agents](https://github.com/google-gemini/gemini-cli/issues/21968)** `[P2]`
   Users report that Gemini ignores custom skills (e.g., custom `gradle` or `git` skills) unless explicitly prompted, indicating a flaw in the model's autonomous tool-selection heuristics.
4. **[Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** `[P2]`
   An Epic exploring AST-aware tools (like AST grep) to allow precise method-bound reads and searches. This aims to reduce wasted tokens and minimize misaligned file reads.
5. **[Shell command execution stuck on "Waiting input"](#25166)** `[P1]`
   Gemini frequently hangs after executing simple, non-interactive CLI commands, leaving the shell active while falsely displaying "Awaiting user input."
6. **[Auto Memory silently retries low-signal sessions](https://github.com/google-gemini/gemini-cli/issues/26522)** `[P2]`
   The background memory extractor re-processes the same low-signal sessions indefinitely because it only marks sessions as "processed" following a successful transcript read.
7. **[Subagents running without permission](https://github.com/google-gemini/gemini-cli/issues/22093)** `[P2]`
   Since `v0.33.0`, agents like the generalist activate and execute even when explicitly set to "disabled" in user configurations.
8. **[Agent should discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** `[P2]`
   The agent occasionally defaults to dangerous commands (e.g., `git reset --force`, unsafe DB modifications) instead of prioritizing safe alternatives.
9. **[CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** `[P2]`
   Users combining various extensions hit an API ceiling (400 errors) when the total number of MCP tools and native tools exceeds model limits.
10. **[Periodic reflection and skill recommendation](https://github.com/google-gemini/gemini-cli/issues/21421)** `[P2]`
    A feature request for the CLI to autonomously reflect on its execution trajectory and recommend generating or updating custom skills based on the current workflow.

## 4. Key PR Progress

1. **[Prevent PTY memory leak via synchronous deletion](https://github.com/google-gemini/gemini-cli/pull/27154)**
   Fixes a critical FD/memory leak in `ShellExecutionService` where PTY entries were never garbage collected due to a race condition in background Promise `.then()` handlers.
2. **[Exclude `.gemini/tmp/` from agent search tools](https://github.com/google-gemini/gemini-cli/pull/27174)**
   Stops `grep_search`, `glob`, and `ripgrep` from recursively indexing active session `.jsonl` logs, preventing massive context bloat.
3. **[Prevent dropping valid model turns with empty text parts](https://github.com/google-gemini/gemini-cli/pull/27170)**
   Cures an API 400 error caused by aggressive history filtering that dropped entire model turns if they contained an empty `text: ""` alongside a valid `functionCall`.
4. **[Wire `AgentSession` invocations into `agent-tool`](https://github.com/google-gemini/gemini-cli/pull/26948)**
   Introduces session-based subagent invocations gated behind the `adk.agentSessionSubagentEnabled` feature flag, likely paving the way for better stateful agent orchestration.
5. **[Non-interactive env and PTY skip for Full Access mode](https://github.com/google-gemini/gemini-cli/pull/27157)**
   Resolves shell execution hangs by automatically injecting non-interactive flags (`-y`) for common tools (`npm`, `pip`, `git`) when running in Full Access mode.
6. **[Fix `/tasks/metadata` double response](https://github.com/google-gemini/gemini-cli/pull/27175)**
   Fixes a race condition causing `ERR_HTTP_HEADERS_SENT` crashes by ensuring early returns after sending HTTP 501 responses.
7. **[Restore extension after failed update](https://github.com/google-gemini/gemini-cli/pull/27115)**
   Improves extension resilience by taking backups prior to updates and rolling back the previous extension if the new version fails to load.
8. **[Opt-in trust for MCP `readOnlyHint` in Plan Mode](https://github.com/google-gemini/gemini-cli/pull/27156)**
   Adds `general.plan.trustReadOnlyHint` setting so Plan Mode stops prompting the user on every strictly read-only MCP tool execution.
9. **[Add custom external safety checkers](https://github.com/google-gemini/gemini-cli/pull/27186)**
   Implements Phase 5 of the safety checker system, allowing enterprise users to integrate custom executables for compliance and security validation.
10. **[Support for Windows image pasting and clipboard styling](https://github.com/google-gemini/gemini-cli/pull/27054)**
    Enhances cross-platform UX by correctly handling empty bracketed-paste sequences from Windows Terminal for seamless image uploads.

## 5. Feature Request Trends
*   **Agent Self-Awareness & Reliability:** Strong demand for the CLI to understand its own mechanics ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)) and autonomously manage its configuration by generating custom skills based on workflow patterns ([#21421](https://github.com/google-gemini/gemini-cli/issues/21421)).
*   **Advanced Background Processing:** Users want the ability to send local subagents to the background ([#22741](https://github.com/google-gemini/gemini-cli/issues/22741)) to unblock the main thread during long-running tasks (e.g., builds).
*   **AST-Aware Code Navigation:** Maintainers and contributors are actively pushing for AST tooling ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) to replace clumsy text-based search/Grep with syntax-aware code comprehension, reducing token waste.
*   **Enterprise Security & Safety Hooks:** Trends toward robust guardrails, including preventing destructive commands ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)) and implementing external safety checkers.

## 6. Developer Pain Points
*   **Agent Hangs and Zombie Processes:** By far the biggest frustration is the CLI freezing. Generalist agent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell commands waiting for non-existent input ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), and Windows-specific zombie processes severely disrupt continuous usage.
*   **Autonomous Disobedience:** Developers are frustrated when the CLI ignores explicit configurations—such as utilizing sub-agents when disabled ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) or ignoring custom skills ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)).
*   **Silent Failures and Bad Statuses:** Subagents reporting "success" when hitting MAX_TURNS ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) and Auto Memory endlessly looping on bad data ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)) make debugging agentic workflows incredibly opaque.
*   **Context Pollution:** The model frequently litters directories with temporary scripts ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) and historically bloated context by scanning its own logs ([#27174](https://github.com/google-gemini/gemini-cli/pull/27174)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for 2026-05-18.

# GitHub Copilot CLI Community Digest — 2026-05-18

## 1. Today's Highlights
No new releases were shipped in the last 24 hours, leaving the community's focus entirely on escalating platform stability issues and feature parity requests. High-friction bugs—particularly surrounding Windows 11 compatibility and a recent `glibc` dependency breaking Android/Termux installations—continue to dominate discussions. Meanwhile, heavy attention was drawn to context management and model efficiency, with several users actively comparing Copilot CLI's token consumption and context limits unfavorably against competitors like Claude Code and Gemini CLI.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues
Here are the 10 most noteworthy issues currently shaping the community conversation:

*   **[#1680](https://github.com/github/copilot-cli/issues/1680) Windows 11 completely unusable due to `pwsh.exe` hardcoding (👍 10):** A high-impact, long-standing bug. The CLI is hardcoded to look for PowerShell 7 (`pwsh.exe`) in six places, causing a complete system failure for Windows 11 users who only have PowerShell 5.1 (`powershell.exe`) installed natively.
*   **[#3333](https://github.com/github/copilot-cli/issues/3333) Android/Termux support broken in v1.0.48+:** A recent architectural change introduced a native Rust addon compiled against `glibc`. Because Android's Node.js utilizes Bionic libc, the CLI immediately crashes on Android/Termux environments.
*   **[#3359](https://github.com/github/copilot-cli/issues/3359) Severe token inefficiency with Qwen models:** Users are reporting that utilizing the `qwen3.6-plus` model through Copilot CLI consumes up to 40% of their token quota in hours, whereas performing identical tasks in Claude Code uses only 3%.
*   **[#3355](https://github.com/github/copilot-cli/issues/3355) Claude Opus 4.6 context window artificially capped at 200K (👍 1):** Despite the model's native 1M token context capability, Copilot CLI enforces a 200K token limit. This results in aggressive, premature context compaction during deep technical sessions.
*   **[#2181](https://github.com/github/copilot-cli/issues/2181) Regression in custom instructions loading (👍 1):** A regression in v1.0.9 prevents instruction files specified via the `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` environment variable from loading correctly, breaking complex team workflows.
*   **[#2980](https://github.com/github/copilot-cli/issues/2980) `postToolUse` hook context not injected (👍 1):** When `postToolUse` hooks emit `additionalContext` via JSON, the Copilot CLI captures the output but fails to forward it into the active agent context window, breaking advanced plugin integrations.
*   **[#3358](https://github.com/github/copilot-cli/issues/3358) `/remote` toggle fails in long sessions:** The `/remote on` command silently stops functioning partway through long-running sessions, and standard off/on toggle remediation does not recover the connection.
*   **[#3345](https://github.com/github/copilot-cli/issues/3345) Hooks not loading in non-interactive mode:** Repository-level hook files (`.github/hooks/*.json`) are completely ignored when the CLI is run in non-interactive print mode (`copilot -p`), though they load perfectly in interactive mode.
*   **[#3360](https://github.com/github/copilot-cli/issues/3360) Plugin marketplace browse fails:** Attempting to browse the newly included `awesome-copilot` marketplace results in a "templates not found" warning.
*   **[#3351](https://github.com/github/copilot-cli/issues/3351) Silent crash on Windows post-update:** Users are experiencing a total failure to launch the CLI (with zero output/feedback) after applying a pending update via the `/update` command.

## 4. Key PR Progress
*   **[#3353](https://github.com/github/copilot-cli/pull/3353) Copilot subscription no longer required:** An open PR updating the documentation and likely configuration access controls to reflect that a paid Copilot subscription is no longer required to utilize the CLI.

*(Note: Only 1 pull request showed activity in the last 24 hours.)*

## 5. Feature Request Trends
Analysis of recent issues reveals a strong trend toward **Claude Code and Gemini CLI parity**. Developers are actively requesting features present in rival CLI tools:
*   **Automated Prompt Scheduling:** Users want built-in slash commands (`/every`, `/after`) to schedule recurring or one-shot prompts within a session, eliminating the need for clunky external shell loops ([#3356](https://github.com/github/copilot-cli/issues/3356)).
*   **Centralized Configuration:** A request for a unified `/config` interactive editor to manage fragmented settings spread across multiple distinct slash commands ([#3352](https://github.com/github/copilot-cli/issues/3352)).
*   **0-Token Intent Classification:** Inspiration was drawn from Gemini CLI, requesting a lightweight pre-processing step to evaluate whether a prompt actually needs to be sent to the "Big Brain" (expensive) models, saving unnecessary token burn ([#3357](https://github.com/github/copilot-cli/issues/3357)).

## 6. Developer Pain Points
*   **Unoptimized Token Consumption & Context Management:** The most significant developer friction point right now is cost efficiency. Users are frustrated by the CLI's apparent over-utilization of tokens (especially with non-OpenAI models) and arbitrary context window caps that force premature memory loss.
*   **BYOK "Second-Class" Experience:** Developers bringing their own API keys (BYOK) noted a lack of feature support, specifically the inability to toggle or view a model's internal "thinking/reasoning" pane via standard keyboard shortcuts ([#3354](https://github.com/github/copilot-cli/issues/3354)).
*   **Platform Regression Instability:** Maintenance and fundamental execution of the CLI on non-standard platforms (Windows native environments, Android/Termux) are degrading with recent updates, causing silent crashes or hard blocks that disrupt daily workflows.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-18

## 1. Today's Highlights
No new official releases were shipped in the last 24 hours, but the community remained highly active in identifying platform-specific bugs and proposing architectural improvements. Notable discussions include demands for extensibility APIs for custom HUD plugins and critical memory leak fixes currently under review. The focus clearly remains on stabilizing cross-platform behavior (especially Windows) and refining the auto-approval UX.

## 2. Releases
*No new releases were recorded in the last 24 hours.*

## 3. Hot Issues

1. **[#2317](https://github.com/MoonshotAI/kimi-cli/issues/2317) [OPEN] Plan mode file paths not clickable in VSCode Extension**
   * **Why it matters:** A UI friction point in the VS Code webview. Users cannot click file paths generated in Plan mode, breaking seamless navigation and slowing down workflow. 
   * **Community Reaction:** Early reports confirm the issue on macOS (Darwin arm64).

2. **[#2316](https://github.com/MoonshotAI/kimi-cli/issues/2316) [OPEN] Feature Request: Extensibility APIs for Statusline / HUD Plugins**
   * **Why it matters:** Reflects a mature and growing ecosystem. Users want to build custom statusline/HUD plugins (similar to `claude-hud`) rather than waiting for official UI updates.
   * **Community Reaction:** Highly anticipated; developers are asking for decentralized extension interfaces.

3. **[#2315](https://github.com/MoonshotAI/kimi-cli/issues/2315) [OPEN] Ctrl+V image paste fails in VS Code Integrated Terminal (Windows)**
   * **Why it matters:** Multimodal coding is a key feature, but Windows users are completely blocked from pasting images from the clipboard directly into the CLI.
   * **Community Reaction:** Zero feedback shown so far, but it represents a critical platform-specific feature gap.

4. **[#2194](https://github.com/MoonshotAI/kimi-cli/issues/2194) [CLOSED] Agent generates PowerShell 7.x syntax incompatible with default PS 5.x**
   * **Why it matters:** A recurring Windows-side execution failure. The agent assumes modern PS 7.x cmdlets, which fail on Windows' native PS 5.x, causing script crashes.
   * **Community Reaction:** Resolved, but highlights the ongoing need for stricter OS environment grounding for the LLM.

5. **[#2192](https://github.com/MoonshotAI/kimi-cli/issues/2192) [CLOSED] Agent repeatedly generates Unix pipeline commands (head/tail) on Windows**
   * **Why it matters:** Similar to #2194, the model defaults to Unix/Linux paradigms. Executing `head` or `tail` on standard Windows setups throws errors.
   * **Community Reaction:** Fix verified and closed. 

*(Note: Only 5 issues were updated in the data source within the last 24 hours, all of which are detailed above as they represent the top current community topics).*

## 4. Key PR Progress

1. **[#2236](https://github.com/MoonshotAI/kimi-cli/pull/2236) [OPEN] Fix memory leaks in broadcast queues and web store cache**
   * **Summary:** Prevents Out-of-Memory (OOM) crashes by bounding `asyncio.Queue` for slow consumers and capping the web store's `_sessions_cache`. Crucial for long-running sessions and heavy users.

2. **[#2249](https://github.com/MoonshotAI/kimi-cli/pull/2249) [OPEN] Unified approval modes with toolbar badges and temporary toasts**
   * **Summary:** UX overhaul that consolidates confusing, overlapping auto-approval mechanisms (`--yolo`, `--afk`, slash commands) into a single coherent system with clear visual feedback.

3. **[#1360](https://github.com/MoonshotAI/kimi-cli/pull/1360) [CLOSED] Replace `platform.version()` with `system+release` for HTTP headers**
   * **Summary:** Fixes a silent Linux crash where kernel strings starting with `#` violated HTTP header specs, resulting in `httpx.LocalProtocolError`. A critical fix for Linux HTTP clients.

4. **[#1127](https://github.com/MoonshotAI/kimi-cli/pull/1127) [CLOSED] Tweak web UI details**
   * **Summary:** General UI polish and visual refinements for the web dashboard interface.

*(Note: Only 4 PRs were updated in the data source within the last 24 hours, all detailed above).*

## 5. Feature Request Trends
Based on recent issues, the community is pushing heavily in two distinct directions:
* **UI/UX Extensibility:** Advanced users are no longer satisfied with static interfaces and are requesting underlying APIs to build custom HUDs, statuslines, and deeply integrated local plugins.
* **Granular Approval Controls:** The need for dynamic, clearly communicated auto-approval states (merging the concepts of "yolo" mode and "afk" mode) shows that developers want the CLI to run autonomously but with safer, highly visible guardrails.

## 6. Developer Pain Points
* **Windows OS Blind Spots:** The most prominent frustration is the agent's failure to natively understand Windows environments. Generating Unix commands (`head`, `tail`) or modern PowerShell 7 syntax on default Windows setups continuously breaks terminal execution flows.
* **Multimodal Input Friction:** Clipboard image pasting fails silently in standard IDE integrated terminals, making multimodal prompting feel inconsistent and platform-dependent.
* **Approval UX Confusion:** The current array of auto-approve flags and commands is disjointed, leading to user hesitation regarding what level of autonomy the CLI currently has.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-18

## 1. Today's Highlights

OpenCode shipped **v1.15.4**, a targeted bugfix release that resolves project-scoped bus event routing for file watchers, fixes custom LSP server refresh events, and hides background subagent task instructions unless experimental mode is enabled. Meanwhile, the community is heavily focused on reliability—clipboard copy failures across Linux and macOS, package manager compatibility (Bun installs broken since v1.15.1), and plugin hook regressions from the recent Effect.js refactor dominate discussions. On the feature side, skill discovery and invocation continues to be the strongest theme, with multiple issues and PRs converging on better skill management.

---

## 2. Releases

### [v1.15.4](https://github.com/anomalyco/opencode/releases/tag/v1.15.4)

**Core bugfixes:**
- **Project-scoped bus events fixed** — File watcher and update notifications now correctly reach the intended instance instead of leaking across projects.
- **Custom LSP server refresh events** — Refresh notifications are now properly sent after custom LSP servers initialize, fixing stale diagnostics.
- **Background subagent task instructions hidden** — These are now suppressed unless the experimental background mode flag is enabled, reducing noise in normal usage.

---

## 3. Hot Issues

1. **[#4283](https://github.com/anomalyco/opencode/issues/4283) — Copy To Clipboard not working** (93 comments, 83 👍)
   The longest-running clipboard issue. Users select text in the TUI response but nothing is copied. Affects multiple OS versions. Despite the age (opened Nov 2025), it remains open and is one of the most-upvoted issues in the project.

2. **[#24713](https://github.com/anomalyco/opencode/issues/24713) — Copy shows popup but clipboard unchanged on Linux** (9 comments)
   A more specific variant of the clipboard problem on Linux terminals. The UI falsely reports success, undermining user trust. Likely related to the same root cause as #4283.

3. **[#27906](https://github.com/anomalyco/opencode/issues/27906) — v1.15.1+ breaks Bun installs** (6 comments, 3 👍)
   The new postinstall lifecycle scripts required since v1.15.1 are incompatible with Bun (and other package managers that block lifecycle scripts by default). This is a blocking adoption issue for Bun users and potentially Deno/pnpm strict-mode users.

4. **[#7006](https://github.com/anomalyco/opencode/issues/7006) — `permission.ask` plugin hook defined but never triggered** (10 comments, 12 👍)
   The permissions plugin hook, introduced in PR #6319, was silently broken by the Effect.js refactor. This blocks anyone building custom permission flows. See also the root-cause identification in [#28066](https://github.com/anomalyco/opencode/issues/28066).

5. **[#28066](https://github.com/anomalyco/opencode/issues/28066) — Regression: permission.ask hook dropped in Effect refactor (38e0dc9)** (2 comments)
   Precise bisect identified commit `38e0dc9` (Mar 20) as the culprit. The hook worked from `ca03127` through `f0...` and was lost during the "Move service state into InstanceState" refactor. A clean target for a targeted fix.

6. **[#26667](https://github.com/anomalyco/opencode/issues/26667) — session.processor crashes sidecar on unhandled AbortError** (6 comments)
   LLM streaming interruptions (network timeout, API disconnection, cancellation) cause an unhandled `AbortError` that propagates up the Effect.js fiber stack and crashes the entire sidecar. A reliability-critical fix is needed.

7. **[#7846](https://github.com/anomalyco/opencode/issues/7846) — [FEATURE]: Add /skills command to list and quick-invoke skills** (23 comments, 74 👍)
   The most-upvoted open feature request. Users want a discoverable way to list and invoke skills without memorizing names. Complementary to #24587 (`$skill-name` inline syntax) and #7716 (marketplace discovery).

8. **[#15728](https://github.com/anomalyco/opencode/issues/15728) — Read tool cannot pass image data to vision-capable models** (11 comments)
   When referencing image files, the Read tool fails to convert them to proper visual input for models like Qwen 3.5-plus. This limits multimodal workflows significantly.

9. **[#28036](https://github.com/anomalyco/opencode/issues/28036) — Writing .sh files hangs OpenCode ~60s** (3 comments)
   After the write tool creates/modifies a `.sh` file, the bash LSP triggers an `InstanceRef not provided` error, causing a ~57-second hang before the next LLM response. Confirmed across multiple model providers.

10. **[#25240](https://github.com/anomalyco/opencode/issues/25240) — Desktop freezes after git commit — connection leak between Desktop (Node) and CLI (Rust)** (3 comments)
    Post-commit, the Desktop app gradually freezes as HTTP/SSE connections to the Rust sidecar leak. Severity scales with the number of changed files. A significant Desktop reliability issue.

---

## 4. Key PR Progress

1. **[#28080](https://github.com/anomalyco/opencode/pull/28080) — Fix Kimi K2.6 model detection (k2p6 handler)** (Open)
   Adds a custom handler for the `kimi-for-coding` provider and fixes multiple code paths that failed to handle the `k2p6` model ID. Closes #23933.

2. **[#27954](https://github.com/anomalyco/opencode/pull/27954) — Fix: sort app sessions by updated time** (Open)
   Resolves the "Load More" appearing random by aligning the backend's selection/pagination (was using created time) with the sidebar display (uses updated time). A UX fix with real local DB investigation behind it.

3. **[#26090](https://github.com/anomalyco/opencode/pull/26090) — Expose LLM response headers on assistant messages** (Open)
   When using LiteLLM proxy with auto-router, the actual model selected is only in HTTP response headers. This PR exposes `x-litellm-model` and similar headers on assistant messages for transparency.

4. **[#27770](https://github.com/anomalyco/opencode/pull/27770) — Bridge custom tool Zod metadata** (Closed/Merged)
   Bridges Zod metadata from config-scoped custom tool schemas into the JSON Schema conversion path, ensuring custom tool parameter validation works correctly with installed plugin packages.

5. **[#27945](https://github.com/anomalyco/opencode/pull/27945) — Dialog prompt submit keybind + opentui event sink** (Closed)
   Adds keybind support for dialog prompt submission and introduces an event sink in opentui. Infrastructure for more interactive TUI dialogs.

6. **[#23172](https://github.com/anomalyco/opencode/pull/23172) — OpenAI native compaction support** (Closed)
   WIP implementation of native context compaction for OpenAI models, reducing token usage on long conversations. Expected to resurface in a refined form.

7. **[#23087](https://github.com/anomalyco/opencode/pull/23087) — Stop using orphaned assistant messages for working state** (Closed)
   Fixed the progress bar, sidebar spinner, and followup dock all treating incomplete assistant messages as "still working," causing phantom loading states. Closes 4 linked bugs.

8. **[#23068](https://github.com/anomalyco/opencode/pull/23068) — Add session metadata support** (Closed)
   Introduces a metadata field on sessions for SDK clients to persist JSON metadata. Enables external tooling to annotate sessions without schema changes.

9. **[#23053](https://github.com/anomalyco/opencode/pull/23053) — Enable SQLite auto-vacuum and periodic maintenance** (Closed)
   Addresses DB bloat by enabling incremental auto-vacuum and adding periodic maintenance. Includes a one-time migration. Closes #16729.

10. **[#28079](https://github.com/anomalyco/opencode/pull/28079) — Throw error on invalid enum params in tool calls** (Open)
    Follow-up to #27770, adding validation that throws on invalid enum-type parameters in tool calls rather than silently accepting bad input. Improves debuggability for plugin authors.

---

## 5. Feature Request Trends

**Skill discovery and invocation** is the dominant feature cluster this cycle:
- **/skills command** ([#7846](https://github.com/anomalyco/opencode/issues/7846), 74 👍) for listing and quick-invoking skills
- **$skill-name inline syntax** ([#24587](https://github.com/anomalyco/opencode/issues/24587)) for explicit skill invocation within prompts
- Both reference but differ from marketplace discovery (#7716) and sidebar display (#7533), suggesting a growing skill ecosystem that needs navigation tooling

**Session lifecycle management** is another emerging cluster:
- Native session goals with `/goal` ([#27167](https://github.com/anomalyco/opencode/issues/27167), 10 👍) for persistent task tracking
- Project deletion in Desktop ([#28030](https://github.com/anomalyco/opencode/issues/28030))
- Quick unarchive in TUI ([#28053](https://github.com/anomalyco/opencode/issues/28053))
- Sticky last-prompt display ([#28035](https://github.com/anomalyco/opencode/issues/28035))

**Multimodal and file handling** requests continue to grow:
- Image data passthrough for vision models ([#15728](https://github.com/anomalyco/opencode/issues/15728))
- Drag-and-drop for Office files ([#27689](https://github.com/anomalyco/opencode/issues/27689))

**SDK ergonomics** improvements sought:
- Per-session plugin disabling ([#28069](https://github.com/anomalyco/opencode/issues/28069))
- Type-safe prompt body formats ([#26408](https://github.com/anomalyco/opencode/issues/26408))

---

## 6. Developer Pain Points

1. **Clipboard copy is systemically broken** — Issues [#4283](https://github.com/anomalyco/opencode/issues/4283) (93 comments, 83 👍) and [#24713](https://github.com/anomalyco/opencode/issues/24713) represent a fundamental TUI UX failure that has persisted for 6+ months across all major platforms. The false-positive "copied" toast is particularly damaging to user trust.

2. **Effect.js refactor regressions** — The "Move service state into InstanceState" refactor (`38e0dc9`) silently broke the `permission.ask` plugin hook ([#7006](https://github.com/anomalyco/opencode/issues/7006), [#28066](https://github.com/anomalyco/opencode/issues/28066)) and is implicated in the AbortError sidecar crash ([#26667](https://github.com/anomalyco/opencode/issues/26667)). The Effect.js fiber stack makes error propagation harder to trace.

3. **Package manager fragmentation** — v1.15.1's postinstall scripts broke Bun installs ([#27906](https://github.com/anomalyco/opencode/issues/27906)), and Windows got a corrupted binary in v1.15.3 ([#27963](https://github.com/anomalyco/opencode/issues/27963)). These distribution issues block new users at the door.

4. **LSP-related hangs** — Writing `.sh` files triggers a 57-second hang ([#28036](https://github.com/anomalyco/opencode/issues/28036)), and the `InstanceRef not provided` error suggests LSP instance management is fragile when the tool pipeline interacts with language servers.

5. **Connection leak in Desktop architecture** — The Node-to-Rust sidecar HTTP/SSE connection leak post-git-commit ([#25240](https://github.com/anomalyco/opencode/issues/25240)) is an architectural reliability concern that worsens with larger codebases.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-18

## 1. Today's Highlights
Pi rolls out **v0.75.0**, bumping the minimum Node.js version to 22.19.0 and fixing a critical proxy-routing bug in compaction. Meanwhile, the previous v0.74.1 introduced **image generation support** and a new **Together AI provider**. The community remains highly engaged around Windows/WSL stability, new provider integrations, and an ambitious proposal to **rewrite Pi in Rust**.

## 2. Releases

### v0.75.0
- **Breaking:** Minimum supported Node.js version raised to **22.19.0**.
- **Fixed:** Compaction summary calls now correctly use custom agent stream functions, preserving proxy-backed LLM routing ([#4484](https://github.com/earendil-works/pi/issues/4484)).
- **Fixed:** System prompt and context file handling improvements.

### v0.74.1
- **New Feature: Image Generation** — Added image generation APIs, generated image model metadata, and built-in OpenRouter image generation support inherited from `@earendil-works/pi-ai`.
- **New Feature: Together AI Provider** — Added Together AI as a built-in provider with `/login` API-key authentication.

---

## 3. Hot Issues

1. **[#4609 Rewrite Pi in Rust](https://github.com/earendil-works/pi/issues/4609)** — Author `badlogic` proposed a full Rust rewrite, sparking 9 comments and 5 👍s. Community is debating performance gains vs. ecosystem disruption.

2. **[#4505 400 error with MiMo models: reasoning_content not preserved in multi-turn tool use](https://github.com/earendil-works/pi/issues/4505)** — Using MiMo models via `xiaomi-token-plan` fails on second turn with 400 errors. 10 comments, 4 👍s. Affects all Xiaomi MiMo users doing tool-calling workflows.

3. **[#4315 package-lock.json missing resolved/integrity entries since v0.74.0](https://github.com/earendil-works/pi/issues/4315)** — Incomplete lockfile breaks offline/reproducible builds (e.g., Nix `buildNpmPackage`). 6 comments, 6 👍s — highest thumbs-up count, indicating strong community demand for reproducible installs.

4. **[#4587 Pi tries to install npm extensions system-global on Linux](https://github.com/earendil-works/pi/issues/4587)** — `pi install <npm-extension>` attempts global install to `/usr/lib/node_modules/`, causing `EACCES` errors. 13 comments highlight Linux usability friction.

5. **[#4399 Fresh install on Windows fails to run the pi agent](https://github.com/earendil-works/pi/issues/4399)** — Both `npm` and `pnpm` global installs on Windows 11 exit silently with no clear error. 7 comments; critical for Windows adoption.

6. **[#4646 Agent conversation stalls after 0.75.0 upgrade](https://github.com/earendil-works/pi/issues/4646)** — Users on `gpt-5.3-codex` report Pi becomes completely unresponsive post-upgrade. Potential regression in v0.75.0.

7. **[#4644 Update check advertises new version before npm package is available](https://github.com/earendil-works/pi/issues/4644)** — Race condition between `pi.dev/api/latest-version` and npm publish causes failed `pi update` runs.

8. **[#4642 Pi stuck in permanent 413 loop with GitHub Copilot](https://github.com/earendil-works/pi/issues/4642)** — Multiple image tool results cause Copilot API's ~5MB body limit to be exceeded, creating an infinite retry loop.

9. **[#4365 External editor leaks stdin to Pi](https://github.com/earendil-works/pi/issues/4365)** — Using `ctrl+g` to open nvim sends keystrokes to Pi instead. Affects pre-compiled releases; 3 👍s.

10. **[#4229 Incorrect input capabilities for Xiaomi MiMo models](https://github.com/earendil-works/pi/issues/4229)** — Image support flags for `mimo-v2.5` and `mimo-v2.5-pro` are swapped across all Xiaomi providers, causing multimodal requests to fail or be rejected.

---

## 4. Key PR Progress

1. **[#4600 Route compaction through streamFn](https://github.com/earendil-works/pi/pull/4600)** (by `mitsuhiko`) — Fixes [#4484](https://github.com/earendil-works/pi/issues/4484) by ensuring compaction respects custom stream functions, critical for proxy users. **Merged into v0.75.0.**

2. **[#4541 Use XML boundaries in system prompt](https://github.com/earendil-works/pi/pull/4541)** (by `herrnel`) — Replaces `##` header-based delimiters with explicit XML tags for context file boundaries, preventing agent confusion when users include markdown headers in `AGENT.md`/`CLAUDE.md`.

3. **[#4622 Map Copilot GPT-5 minimal thinking to low](https://github.com/earendil-works/pi/pull/4622)** (by `mattiacerutti`) — Fixes 400 errors where Copilot provider exposes `minimal` thinking level unsupported by GPT-5.x models; maps it to `low`.

4. **[#4603 Update OpenAI Codex model list](https://github.com/earendil-works/pi/pull/4603)** (by `mattiacerutti`) — Refreshes model catalog and pricing from [models.dev](https://models.dev), removes deprecated model references in tests.

5. **[#4630 Add xAI Grok OAuth provider](https://github.com/earendil-works/pi/pull/4630)** (by `DaviRain-Su`) — Full OAuth login flow, token refresh, and provider registration for xAI Grok models with regression tests.

6. **[#4639 Add --new-session-id flag](https://github.com/earendil-works/pi/pull/4639)** (by `ingafrustum`) — Enables CI runners and multi-agent orchestrators to predetermine session UUIDs for reliable session-file correlation.

7. **[#4636 Add routing.run provider](https://github.com/earendil-works/pi/pull/4636)** (by `bas3line`) — Adds routing.run as a built-in OpenAI-compatible provider with generated model catalog entries.

8. **[#4112 Switch Xiaomi default to API billing](https://github.com/earendil-works/pi/pull/4112)** (by `Phoen1xCode`) — Splits Xiaomi provider into API billing (default) and regional token-plan variants, following the MiniMax/Moonshot pattern.

9. **[#4627 Fix WSL Markdown rendering](https://github.com/earendil-works/pi/pull/4627)** (by `DKeAlvaro`) — Resolves raw-text markdown output in WSL environments, fixing code blocks, headers, and heading styles.

10. **[#4606 Null check for error handling in RPC mode](https://github.com/earendil-works/pi/pull/4606)** (by `unitdhda`) — Prevents crashes when API providers return malformed error responses missing the `error` field.

---

## 5. Feature Request Trends

- **New provider integrations dominate.** The community is actively requesting and contributing providers: Together AI (shipped), xAI Grok OAuth, routing.run, Routstr (Cashu/Lightning billing), and regional Xiaomi variants. The bar for adding OpenAI-compatible providers is clearly well-documented.

- **Embedded/headless orchestration.** Requests for `--new-session-id`, non-interactive mode fixes, and programmatic session control signal growing use of Pi as a backend agent in CI pipelines and multi-agent systems.

- **OpenAI Codex Fast mode.** Users want first-class support for OpenAI Codex Fast mode as a service-tier setting, separate from thinking-level configuration.

- **Session tree format.** The proposal to switch from linear JSONL to a tree structure with `uuid`/`parentUuid` ([#316](https://github.com/earendil-works/pi/issues/316)) continues to inform ongoing refactoring of session storage.

---

## 6. Developer Pain Points

- **Windows/WSL is a first-class pain point.** Issues with global npm installs, `fd` download failures, unquoted shell arguments in paths with spaces, and broken markdown rendering collectively indicate Windows support needs stabilisation.

- **Package manager detection is fragile.** Multiple issues (`pi update` failing with pnpm, ownership check mismatches, lockfile integrity) suggest the package management layer needs a more robust abstraction over npm/pnpm/bun.

- **Version update UX is broken.** Users are repeatedly prompted to update to versions not yet on npm, or updates succeed but the version check doesn't reset — eroding trust in the self-update mechanism.

- **Provider-specific edge cases cause silent failures.** Whether it's Xiaomi's `reasoning_content` handling, Copilot's body-size limits, Mistral's URL parsing via `undici`, or `ANTHROPIC_AUTH_TOKEN` leaking into non-Anthropic providers, multi-provider support is brittle and needs more integration testing.

- **Post-v0.75.0 regressions.** The Node 22.19.0 floor and compaction changes appear to have introduced session-stalling behaviour for some users, suggesting the release may need a rapid patch.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-18

## 1. Today's Highlights
The project rolls into the **v0.16 preview cycle** with two new preview releases and a massive push toward production-ready **`qwen serve` (Mode B)**, including a dozen daemon-related PRs covering MCP guardrails, filesystem boundaries, and device-flow OAuth. Meanwhile, **memory management (OOM)** remains the elephant in the room, dominating the issue tracker with multiple active threads. A release workflow failure for v0.16.0-preview.0 also flagged operational hiccups.

---

## 2. Releases

- **v0.16.0-preview.0** ([Release notes](https://github.com/QwenLM/qwen-code/releases))
  - `feat(cli)`: Wrap markdown links in **OSC 8** so wrapped URLs stay clickable in terminal emulators (PR [#4037](https://github.com/QwenLM/qwen-code/pull/4037) by @BZ-D).
  - `fix(core)`: Normalize cumulative OpenAI stream deltas into suffixes, preventing garbled streaming output (PR [#3896](https://github.com/QwenLM/qwen-code/pull/3896) by @chiga0).
  - `fix(cli)`: Auto-restore improvements.

- **v0.15.12-preview.3** — Backports the same OSC 8 markdown link wrapping, stream delta normalization, and auto-restore fix to the v0.15.x line.

> ⚠️ Note: The automated release workflow for v0.16.0-preview.0 failed ([#4244](https://github.com/QwenLM/qwen-code/issues/4244)), so artifact publishing may be delayed.

---

## 3. Hot Issues

| # | Issue | Why it matters |
|---|-------|---------------|
| 1 | [#3203 — Qwen OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203) | 126 comments. Proposal to slash the free tier from 1,000 → 100 req/day and fully phase it out by June 20. Heavily debated by the community due to impact on hobbyists and open-source contributors. |
| 2 | [#4149 — JavaScript heap out of memory (fatal)](https://github.com/QwenLM/qwen-code/issues/4149) | 10 comments. One of several OOM reports; V8 hits the ~4 GB ceiling during long sessions. Symptomatic of a systemic memory leak. |
| 3 | [#4175 — Mode B (`qwen serve`) feature-priority roadmap toward v0.16](https://github.com/QwenLM/qwen-code/issues/4175) | 8 comments. The master roadmap issue for daemon/serve mode, tracking everything from auth to filesystem boundaries. Central to the v0.16 release. |
| 4 | [#4116 — Critical session management error](https://github.com/QwenLM/qwen-code/issues/4116) | 6 comments. Users encounter critical crashes during active sessions, likely tied to the same OOM/session corruption chain. |
| 5 | [#3548 — Configurable `plansDirectory` for Plan Mode](https://github.com/QwenLM/qwen-code/issues/3548) | 5 comments. Feature parity request with Gemini CLI / Claude Code for custom plan directories. Closed but signals strong demand for flexible project structures. |
| 6 | [#4076 — Tool calls returning no actual content (zh)](https://github.com/QwenLM/qwen-code/issues/4076) | 5 comments. When using third-party OpenAI-compatible endpoints (SiliconFlow + GLM-5.1), tool calls silently return empty content. |
| 7 | [#4246 — Project-level skills not recognized](https://github.com/QwenLM/qwen-code/issues/4246) | 3 comments. Skills placed in project `.qwen/skills/` aren't loaded, but global `~/.qwen/skills/` works. A configuration regression affecting custom workflows. |
| 8 | [#4223 — mimo-v2.5-pro API 400 error on second tool call](https://github.com/QwenLM/qwen-code/issues/4223) | 3 comments. `reasoning_content` field handling breaks iterative tool use with certain providers, a recurring compatibility pain point. |
| 9 | [#4148 — Queued user prompts not logged to JSONL](https://github.com/QwenLM/qwen-code/issues/4148) | 2 comments. Prompts typed during active tool execution are silently lost from session logs, undermining reproducibility. |
| 10 | [#4254 — Memory leaks ("It keeps eating and eating memory till it crashes")](https://github.com/QwenLM/qwen-code/issues/4254) | 1 comment. Blunt report with screenshot showing linear memory growth. Captures widespread frustration with OOM issues. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | [#4247 — MCP client guardrails (Wave 3 PR 14)](https://github.com/QwenLM/qwen-code/pull/4247) | Adds an in-process MCP client counter, slot-reservation enforcement, and `--mcp-client-budget` / `--mcp-budget-mode` CLI flags to prevent resource exhaustion in daemon mode. |
| 2 | [#4256 — Stream idle watchdog for silent responses](https://github.com/QwenLM/qwen-code/pull/4256) | Implements an idle timeout around streamed `next()` calls, aborting hung SSE connections and surfacing `STREAM_IDLE_TIMEOUT` errors. Addresses weak-network hangs. |
| 3 | [#4255 — Auth device-flow route (Wave 4 PR 21)](https://github.com/QwenLM/qwen-code/pull/4255) | Brokers OAuth 2.0 Device Authorization Grant through the daemon, so remote clients trigger login while tokens land on the daemon filesystem. Key for multi-client Mode B. |
| 4 | [#4250 — FileSystemService boundary (Wave 4 PR 18)](https://github.com/QwenLM/qwen-code/pull/4250) | Pure refactor introducing per-request workspace filesystem boundaries with symlink-aware checks, ignore/trust policies, and audit hooks — a security hardening prerequisite. |
| 5 | [#4251 — Preflight and env diagnostics routes (Wave 3 PR 13)](https://github.com/QwenLM/qwen-code/pull/4251) | Adds `GET /workspace/env` and `GET /workspace/ready` read-only routes so clients can check daemon health without spawning an ACP child. |
| 6 | [#4249 — Workspace memory and agents CRUD (Wave 4 PR 16)](https://github.com/QwenLM/qwen-code/pull/4249) | First Wave 4 mutation route surface — HTTP CRUD for workspace-scoped memory and sub-agents, using strict mutation guards. |
| 7 | [#4242 — Fix rewind turns after compression](https://github.com/QwenLM/qwen-code/pull/4242) | Aligns compressed-history summaries with the rewind UI so `/rewind` correctly targets recent uncompressed turns. Fixes #4046. |
| 8 | [#4253 — Restore file history snapshots on resume](https://github.com/QwenLM/qwen-code/pull/4253) | Persists file-history snapshots into session records and rehydrates them on resume, preventing data loss after session restarts. |
| 9 | [#4243 — Preserve read-before-write state across idle microcompaction](https://github.com/QwenLM/qwen-code/pull/4243) | Fixes a bug where idle context cleanup caused the assistant to "forget" files it had already read, forcing redundant re-reads. |
| 10 | [#4176 — Close tool_use↔tool_result invariant across all failure paths](https://github.com/QwenLM/qwen-code/pull/4176) | Fixes an unrecoverable wedge on weak-network connections (e.g., DeepSeek-V4-Pro over Anthropic protocol) where orphan `tool_result` messages cause API 400 errors. |

---

## 5. Feature Request Trends

1. **Production-ready `qwen serve` (Mode B)** — The dominant theme. The community and core team are pushing hard on daemon infrastructure: auth, filesystem isolation, MCP guardrails, preflight checks, and multi-client session management. This is the v0.16 centerpiece.

2. **Session reliability & long-horizon workflows** — Requests for hardened `/goal` primitives ([#4228](https://github.com/QwenLM/qwen-code/issues/4228)), system sleep prevention during tasks ([#4257](https://github.com/QwenLM/qwen-code/issues/4257)), and robust `/rewind` / file-history persistence indicate users are running multi-hour autonomous sessions and need resilience.

3. **Performance observability** — Requests for `/stats` to expose **TPS** and **TTFT** metrics ([#4252](https://github.com/QwenLM/qwen-code/issues/4252)) and OpenTelemetry hardening ([#3731](https://github.com/QwenLM/qwen-code/issues/3731)) show demand for production-grade telemetry.

4. **Provider & model flexibility** — Users want explicit DashScope-compatible endpoint configuration ([#4138](https://github.com/QwenLM/qwen-code/issues/4138)) and broader model availability under OpenAI auth ([#4258](https://github.com/QwenLM/qwen-code/issues/4258)), reflecting a diverse ecosystem of third-party LLM backends.

5. **ACP SDK session lifecycle** — Upgrade to `@agentclientprotocol/sdk` 0.21.0 for `resumeSession` / `closeSession` / `forkSession` ([#4227](https://github.com/QwenLM/qwen-code/issues/4227)) signals a push toward standardized agent session management.

---

## 6. Developer Pain Points

- **🔴 OOM / Memory leaks (Critical, systemic)** — The single most complained-about issue. At least 5 separate issues ([#4149](https://github.com/QwenLM/qwen-code/issues/4149), [#4185](https://github.com/QwenLM/qwen-code/issues/4185), [#2868](https://github.com/QwenLM/qwen-code/issues/2868), [#728](https://github.com/QwenLM/qwen-code/issues/728), [#2945](https://github.com/QwenLM/qwen-code/issues/2945), [#4254](https://github.com/QwenLM/qwen-code/issues/4254), [#2036](https://github.com/QwenLM/qwen-code/issues/2036)) report V8 heap exhaustion at 2–4 GB, especially during long sessions, large context models, and after `/compress`. No comprehensive fix has landed yet; token-based compaction appears insufficient.

- **🟠 Weak-network reliability** — Silent SSE drops causing orphan tool results and API 400 errors are a recurring pattern, especially with Anthropic-protocol backends on unstable connections ([#4177](https://github.com/QwenLM/qwen-code/issues/4177), [#4176](https://github.com/QwenLM/qwen-code/pull/4176), [#4256](https://github.com/QwenLM/qwen-code/pull/4256)).

- **🟠 Third-party provider compatibility** — `reasoning_content` field handling breaks iterative tool calls with models like mimo-v2.5-pro and DeepSeek-V4-Pro ([#4223](https://github.com/QwenLM/qwen-code/issues/4223)). Empty tool-call responses on non-Qwen endpoints ([#4076](https://github.com/QwenLM/qwen-code/issues/4076)). The OpenAI-compatible layer needs provider-aware normalization.

- **🟡 Session state loss after idle/compression** — Context trimming during idle periods or after `/compress` causes the assistant to "forget" previously read files ([#4239](https://github.com/QwenLM/qwen-code/issues/4239)) and breaks rewind mapping ([#4046](https://github.com/QwenLM/qwen-code/pull/4242)). PRs [#4243](https://github.com/QwenLM/qwen-code/pull/4243) and [#4253](https://github.com/QwenLM/qwen-code/pull/4253) are addressing this.

- **🟡 OAuth free tier uncertainty** — The proposed quota reduction ([#3203](https://github.com/QwenLM/qwen-code/issues/3203), 126 comments) has created significant anxiety among free-tier users and open-source contributors, with no official decision announced yet.

---

*Data sourced from [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) on 2026-05-18.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

## DeepSeek-TUI Community Digest — 2026-05-18

### 1. Today's Highlights
DeepSeek-TUI released **v0.8.39**, continuing rapid iteration on provider compatibility and TUI stability. The community remains highly engaged around third-party OpenAI-compatible API integration, with multiple PRs submitted today to fix model routing and `reasoning_content` parsing errors. Under the hood, there is a strong push toward resolving context window management deadlocks and sub-agent orchestration limits.

### 2. Releases
- **[v0.8.39](https://github.com/Hmbown/DeepSeek-TUI/releases/tag/v0.8.39)**: Released over the last 24 hours. This version appears focused on refining the installer footprint and distribution, ensuring seamless `npm` and Docker/GHCR deployments for both binaries. (Note: The maintainer has already opened [#1736](https://github.com/Hmbown/DeepSeek-TUI/issues/1736) to track regressions from v0.8.38/v0.8.39 for the upcoming v0.8.40 patch).

### 3. Hot Issues
1. **[#1615](https://github.com/Hmbown/DeepSeek-TUI/issues/1615) [bug] Docker 拉取直接跑乱码**: The most commented issue (161 comments). Running the Docker image causes severe UI corruption/mojibake, sometimes requiring a hard Linux server reset, highlighting critical environment/setup flaws in the container distribution.
2. **[#1177](https://github.com/Hmbown/DeepSeek-TUI/issues/1177) [bug] 输入缓存命中率太低了**: Users report abysmal prompt caching hit rates compared to similar tools (like DeepSeek-Reasonix), leading to unnecessary token consumption and costs.
3. **[#743](https://github.com/Hmbown/DeepSeek-TUI/issues/743) [bug] token消耗增大了很多**: A critical concern where users report massive token drains (e.g., 400 million tokens in half a day) due to overly dense API request payloads. 
4. **[#1425](https://github.com/Hmbown/DeepSeek-TUI/issues/1425) [bug] 执行大文本处理工程后会话中断卡死**: Trying to analyze large texts (e.g., a 3-million-word novel) causes the session to freeze when spawning multiple sub-agents due to `agent_wait` timeouts.
5. **[#1738](https://github.com/Hmbown/DeepSeek-TUI/issues/1738) [bug] sub-agent deep-analysis results are lossy**: Opened by the repo owner (`Hmbown`). Parent agents currently receive heavily compressed summaries from child agents, losing structured data upon completion.
6. **[#1293](https://github.com/Hmbown/DeepSeek-TUI/issues/1293) [enhancement] 是否只允许官方api 接入？**: A highly requested discussion asking for OpenAI-compatible API routing for locally deployed models and third-party platforms.
7. **[#1714](https://github.com/Hmbown/DeepSeek-TUI/issues/1714) [bug] 为什么通过openai 配置第三方模型不能访问**: Users configuring non-DeepSeek providers (like MiniMax) via the `openai` provider setting are hitting 400 Bad Request errors due to silent model overrides.
8. **[#1673](https://github.com/Hmbown/DeepSeek-TUI/issues/1673) [bug] reasoning_content 字段导致第三方中转严重错乱**: Streaming `reasoning_content` from non-official endpoints causes every token to render as a separate block, breaking the TUI layout completely.
9. **[#1472](https://github.com/Hmbown/DeepSeek-TUI/issues/1472) [question] Deadlock: process hangs unrecoverably**: When an API connection stalls, the TUI process deadlocks on `pipe_read` and ignores `Ctrl+C`, requiring a force kill.
10. **[#1736](https://github.com/Hmbown/DeepSeek-TUI/issues/1736) [bug] v0.8.40 regression bug bash**: The official tracker for fallout from the v0.8.38/v0.8.39 releases, specifically addressing over-eager changes in the provider-aware `/model` picker.

### 4. Key PR Progress
1. **[#1740](https://github.com/Hmbown/DeepSeek-TUI/pull/1740) fix(config): honor explicit custom model for non-DeepSeek providers**: Fixes a major pain point where explicitly passed custom models (e.g., `--model MiniMax-M2.7`) were silently overwritten by DeepSeek defaults.
2. **[#1743](https://github.com/Hmbown/DeepSeek-TUI/pull/1743) fix(client): replay reasoning_content for DeepSeek models on openai provider**: Resolves 400 errors when pointing the OpenAI provider at DeepSeek reasoning models by properly handling `reasoning_content` across turns.
3. **[#1742](https://github.com/Hmbown/DeepSeek-TUI/pull/1742) fix(tui): surface thinking-only turns instead of silently ending**: Fixes a bug where models emitting *only* a reasoning block (empty content) caused the engine to silently fail or hang.
4. **[#1741](https://github.com/Hmbown/DeepSeek-TUI/pull/1741) fix(client): keep mutation-tool result confirmations off wire dedup**: Fixes a macOS bug where `write_file` silently failed for content >1KB due to aggressive wire deduplication truncating file hashes.
5. **[#1751](https://github.com/Hmbown/DeepSeek-TUI/pull/1751) fix(tui): sub-agent uses objective for name, circuit-breaker**: Improves sub-agent observability by slugifying session names based on objectives, and replaces hard step caps with circuit breakers.
6. **[#1744](https://github.com/Hmbown/DeepSeek-TUI/pull/1744) fix(shell): preserve quoted args on Windows cmd /C invocation**: Fixes a Windows-specific bug where quoted arguments (like `git commit -m "..."`) were incorrectly split.
7. **[#1746](https://github.com/Hmbown/DeepSeek-TUI/pull/1746) feat(theme): add support for custom UI themes**: Introduces a flexible theme registry and allows inline color overrides via `config.toml`.
8. **[#1726](https://github.com/Hmbown/DeepSeek-TUI/pull/1726) feat(composer): mouse + keyboard text selection**: Implements highly requested UI text manipulation (mouse drag select, Shift+Arrow select, Ctrl+X/C) in the input composer.
9. **[#1723](https://github.com/Hmbown/DeepSeek-TUI/pull/1723) feat: configurable auto-compact threshold**: Addresses context saturation deadlocks by adding a `Ctrl+L` keybinding and configuration for automatic context compaction.
10. **[#1376](https://github.com/Hmbown/DeepSeek-TUI/pull/1376) fix(compaction): use tiktoken for exact context tracking**: Replaces character-based heuristics with `tiktoken-rs` for accurate token counting to prevent context overflow errors.

### 5. Feature Request Trends
- **OpenAI-Compatible API Endpoints**: Strong community demand to decouple the tool from DeepSeek's official API, allowing seamless integration with local models, vLLM, SGLang, and third-party platforms (MiniMax, OpenAI) via standardized provider schemas.
- **Advanced Context Management**: Users want more granular control over context windows and caching. Requests include manual/auto-compaction thresholds, accurate token counting UI, and better prompt caching to reduce latency and costs.
- **Robust Sub-Agent Orchestration**: For complex, large-scale tasks (like repository analysis or novel processing), there is a clear need for reliable sub-agent spawning without timeout deadlocks or loss of structured data.
- **Terminal UI Refinements**: Developers are asking for native-feeling TUX capabilities, including mouse/keyboard text selection, better multiline input handling, and consistent scrollbar/history navigation.

### 6. Developer Pain Points
- **Token Drain & API Costs**: Unoptimized payload sizes and poor prompt cache hit rates are causing massive token consumption, making the tool expensive for heavy daily use.
- **Third-Party Provider Fragility**: The most prominent bug cluster involves OpenAI-compatible endpoints. DeepSeek-TUI frequently mishandles provider routing, drops custom models, and chokes on non-standard `reasoning_content` payloads, leading to 400 errors or UI corruption.
- **System Deadlocks**: The TUI is prone to completely freezing during context saturation (>99%) or during network stalls, often ignoring `Ctrl+C` and requiring users to `kill -9` the process.
- **Docker & WSL2 Reliability**: Developers continue to face friction running the tool in containerized/virtualized environments, encountering permission errors, locale-based mojibake, and missing dependencies (like `pdftotext` and `edition2024` Rust flags).

</details>