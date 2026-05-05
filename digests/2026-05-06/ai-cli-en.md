# AI CLI Tools Community Digest 2026-05-06

> Generated: 2026-05-05 22:17 UTC | Tools covered: 8

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

Here is the cross-tool comparison report analyzing the AI CLI developer tools ecosystem based on community activity from May 6, 2026.

## 1. Ecosystem Overview
The AI CLI tools landscape is rapidly maturing from simple terminal-based chat interfaces into sophisticated, multi-environment agentic systems capable of autonomous code generation, execution, and PR management. As these tools transition toward complex orchestration—handling background tasks, multi-agent teams, and local/remote environments—they are encountering shared scaling challenges, particularly concerning resource management, networking stability, and provider compatibility. The current development cycle across the board is heavily dominated by bug fixes and architectural refactors aimed at stabilizing these advanced autonomous workflows, indicating a phase of industry consolidation rather than raw feature experimentation. Enterprise readiness, specifically proxy support, security policies, and CI/CD integration, is becoming the primary battleground for user adoption.

## 2. Activity Comparison
*Activity metrics are based on the specific "Hot Issues" and "Key PR Progress" items explicitly detailed in the community digests for the 2026-05-06 window.*

| Tool | Hot Issues Tracked | Key PRs Tracked | Release Status (Last 24h) | Primary Development Focus |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 5 | **v2.1.128** (Stable) | Billing/credit fairness, Team agents, MCP tooling |
| **OpenAI Codex** | 10 | 10 | **v0.129.0-alpha.7** (Alpha) | Multi-environment architecture, Cloud PRs, Memory leaks |
| **Gemini CLI** | 10 | 10 | **v0.41.0 / v0.42.0-preview** (Stable/Preview) | Policy engine (YOLO mode) fixes, Infinite loop prevention |
| **GitHub Copilot CLI** | 10 | 0 | **v1.0.41 / v1.0.42-0** (Stable/Exp) | Plugin scoping, Non-interactive mode, Policy evaluation |
| **Kimi Code CLI** | 3 | 2 | *None* | Platform support (ARM/WSL), Autonomous loop detection |
| **OpenCode** | 10 | 10 | **v1.14.34–v1.14.39** (5 patches) | Desktop proxy/enterprise networking, Session management |
| **Pi** | 10 | 14 | *Pending (Big Refactor)* | Token waste reduction, TUI rendering, Local LLM support |
| **Qwen Code** | 10 | 10 | **v0.15.6-nightly** (Nightly) | Background task UI, Terminal rendering, Provider compat |

## 3. Shared Feature Directions
*   **Agent Loop Prevention and Convergence:** As tools attempt longer autonomous tasks, infinite "thinking" loops are burning resources. *Gemini CLI* is struggling with stuck agents, *Kimi Code* is proposing "RalphFlow" architecture for convergence detection, and *OpenAI Codex* users are reporting 75GB+ memory leaks from runaway desktop processes.
*   **Advanced Background & Sub-Agent Management:** The industry is moving toward multi-agent orchestration. *Qwen Code* and *OpenCode* are actively shipping "session warping" and background dream tasks, while *Claude Code* is battling bugs related to its new "Agent Teams / Cowork" functionality.
*   **Windows and WSL Compatibility:** Cross-platform parity remains a major hurdle. *OpenAI Codex* has severe I/O degradation on WSL worktrees, *OpenCode* is fixing native shell executions for local MCPs, and *Kimi Code* is experiencing hard crashes on WSL.
*   **Plugin and Provider Extensibility:** Communities are demanding richer extension ecosystems. *GitHub Copilot CLI* users are pushing for project-scoped plugins, *Pi* is adding official local-LLM provider extensions (Ollama/LM Studio), and *Qwen Code* is normalizing parsing for diverse OpenAI-compatible endpoints.
*   **Enterprise Networking & Proxies:** Corporate readiness is a central theme. *OpenCode* shipped 5 rapid patches just for proxy/CSP fixes, while *Claude Code* and *GitHub Copilot CLI* users are reporting friction with corporate policy evaluations and token refresh drops.

## 4. Differentiation Analysis
*   **Proprietary vs. Provider-Agnostic:** *Claude Code*, *OpenAI Codex*, and *Gemini CLI* act as walled-garden clients optimizing for their respective foundational models (e.g., Claude's Agent Teams, Codex's GPT-5.5 1M context push). Conversely, *OpenCode*, *Pi*, and *Qwen Code* differentiate by focusing on multi-provider orchestration, allowing users to swap between local models, OpenAI, Anthropic, and regional APIs seamlessly.
*   **Cloud vs. Local-First Execution:** *OpenAI Codex* is heavily investing in Codex Cloud (remote execution and PR creation), though it is currently facing systemic outages. *Pi* and *Kimi Code* take a distinctly local-first approach, focusing on terminal rendering, local CLI lifecycles, and avoiding cloud-dependency bottlenecks.
*   **Plugin vs. Extension Models:** *GitHub Copilot CLI* is leveraging the broader GitHub ecosystem, focusing on Skills, Agents, and MCP policy management for enterprise CI/CD integration. *OpenCode* is focusing heavily on deep runtime plugin hooks (e.g., `stream.delta` and `stream.aborted` events) for utility builders.

## 5. Community Momentum & Maturity
*   **Hyper-Active & Iterating Rapidly:** **OpenCode** and **Qwen Code** show signs of hyper-iteration, shipping multiple daily releases to address user feedback rapidly. **OpenAI Codex** is pushing massive PR stacks (10 complex architectural changes in one day) indicating rapid infrastructure overhauls.
*   **High Volume / Mature Scaling Pains:** **Claude Code** and **Gemini CLI** have massive megathread issues (e.g., 685 and 188 comments respectively) regarding rate limits and infinite loops, indicating extremely large user bases frustrated by the friction of scaling LLM interactions.
*   **Architectural Transitions:** **Pi** and **OpenAI Codex** are currently in the midst of deep foundational refactors (evidenced by Pi's `closed-because-bigrefactor` tags and Codex's multi-PR environment stack), temporarily shifting momentum away from feature releases toward core stability.
*   **Niche / Catching Up:** **Kimi Code CLI** has a quieter community currently focused on fundamental platform stability (ARM64 support) rather than advanced feature parity.

## 6. Trend Signals
1.  **Context Window Management is the Critical Bottleneck:** Users are aggressively hitting context limits and compaction bugs. *OpenAI Codex* users demanding 1M tokens, *Qwen Code* users hitting hard truncation errors, and *Pi* users experiencing token waste via duplicated compaction calls indicate that efficient context management is the highest-priority technical challenge to solve right now.
2.  **The Rise of Agentic CI/CD:** The demand for non-interactive, reliable automation is surging. *GitHub Copilot CLI* users requesting better `--autopilot` modes and *OpenAI Codex* users demanding working Cloud PR generation show that developers want to integrate AI CLIs directly into automated deployment pipelines, not just use them as interactive chatbots.
3.  **Token Transparency and Fairness are Make-or-Break:** Communities are fiercely reactive to invisible resource consumption. *Claude Code*'s ultrareview credit bugs and *Pi*'s concurrent compaction token burns highlight that AI tools must provide granular observability into API costs and usage to maintain developer trust.
4.  **Local Execution and Sandbox Safety are Non-Negotiable:** Users want autonomous power without systemic risk. *Gemini CLI* users demanding safer agent defaults (preventing `git reset --force`), and *Qwen Code* enforcing "read-before-edit" mechanisms show a trend toward constraining agents to prevent destructive behaviors on local machines.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** `github.com/anthropics/skills` | **Snapshot Date:** 2026-05-06

## 1. Top Skills Ranking
*(Ranked by PR activity, update recency, and community discussion utility)*

1. **[PR #514 – `document-typography`](https://github.com/anthropics/skills/pull/514)** | *Author: PGTBoos | Status: OPEN*
   A quality-control skill for AI-generated documents that automatically resolves orphan word wraps, widow paragraphs, and numbering misalignments. Addresses a universal pain point for users generating formatted documents via Claude. 

2. **[PR #210 – `frontend-design`](https://github.com/anthropics/skills/pull/210)** | *Author: justinwetch | Status: OPEN*
   A major revision of the existing frontend-design skill. The PR strips away vague concepts to ensure every instruction is immediately actionable by Claude within a single conversation, significantly boosting token efficiency and UI/UX output quality.

3. **[PR #486 – `odt` (OpenDocument)](https://github.com/anthropics/skills/pull/486)** | *Author: GitHubNewbie0 | Status: OPEN*
   Introduces comprehensive OpenDocument support (.odt, .ods), allowing Claude to create, fill templates, parse ODT to HTML, and convert open-standard document formats natively.

4. **[PR #568 – `servicenow`](https://github.com/anthropics/skills/pull/568)** | *Author: Vanka07 | Status: OPEN*
   A massive enterprise-focused Skill turning Claude into a broad ServiceNow platform assistant, covering ITSM, SecOps, ITAM, HRSD, and IntegrationHub scripting. 

5. **[PR #541 – `docx` Tracked Changes Fix](https://github.com/anthropics/skills/pull/541)** | *Author: Lubrsy706 | Status: OPEN*
   A critical bugfix Skill preventing document corruption. It resolves `w:id` namespace collisions in OOXML when adding tracked changes to documents that already contain bookmarks.

6. **[PR #723 – `testing-patterns`](https://github.com/anthropics/skills/pull/723)** | *Author: 4444J99 | Status: OPEN*
   Introduces a full-stack testing Skill based on the Testing Trophy model, guiding Claude through unit testing (AAA pattern), React component testing, and integration/edge-case strategies.

7. **[PR #83 – Meta Skills: `skill-quality-analyzer` & `skill-security-analyzer`](https://github.com/anthropics/skills/pull/83)** | *Author: eovsidu | Status: OPEN*
   Introduces tooling to evaluate other Skills. The quality analyzer scores Skills on structure and documentation, while the security analyzer checks for prompt injection risks and unsafe patterns.

***

## 2. Community Demand Trends
Based on the most-upvoted and active GitHub Issues, the community is heavily leaning toward the following unmet needs:

* **Enterprise & Organizational Workflows:** High demand for native org-wide Skill sharing to eliminate manual `.skill` file distribution via Slack/Teams ([Issue #228](https://github.com/anthropics/skills/issues/228), 👍 7).
* **Robust Document Generation & Management:** Users want reliable generation of complex formats (DOCX, PPTX) without corruption, alongside better API reliability for uploading/deleting Skills ([Issue #406](https://github.com/anthropics/skills/issues/406), 👍 4; [Issue #403](https://github.com/anthropics/skills/issues/403)).
* **Tooling Reliability (Evals & Bedrock):** A significant blocker for power users is the failure of `run_eval.py` to trigger Skills via CLI ([Issue #556](https://github.com/anthropics/skills/issues/556), 👍 6), alongside recurring requests for native AWS Bedrock compatibility ([Issue #29](https://github.com/anthropics/skills/issues/29)).
* **Security & Trust Boundaries:** As the ecosystem grows, users are demanding better namespace segregation to prevent community Skills from impersonating official Anthropic capabilities ([Issue #492](https://github.com/anthropics/skills/issues/492), 👍 2).

***

## 3. High-Potential Pending Skills
These PRs are currently open but address immediate developer needs and show signs of active iteration, making them strong candidates for an upcoming merge:

* **[PR #806 – `sensory` (macOS AppleScript Automation)](https://github.com/anthropics/skills/pull/806):** Replaces clunky screenshot-based computer use with native, tiered AppleScript automation for macOS. Highly requested paradigm shift for local automation.
* **[PR #539 – `skill-creator` YAML Fix](https://github.com/anthropics/skills/pull/539):** Fixes silent YAML parsing failures when descriptions contain unquoted special characters (like colons). Crucial for improving the baseline stability of all newly created community Skills.
* **[PR #360 – `appdeploy`](https://github.com/anthropics/skills/pull/360):** Allows Claude to directly deploy full-stack web applications to public URLs. Currently highly active (last updated May 4, 2026) and fills a massive gap in end-to-end development workflows.

***

## 4. Skills Ecosystem Insight
The community's most concentrated demand is shifting from isolated code-generation skills toward **reliable end-to-end document formatting, enterprise platform integrations (like ServiceNow), and frictionless deployment pipelines.**

---

# Claude Code Community Digest — 2026-05-06

---

## 1. Today's Highlights

Claude Code **v2.1.128** shipped today with quality-of-life improvements including random session colors, MCP server tool-count visibility, `.zip` plugin support, and expanded `--channels` console support. The community is inflamed over **ultrareview** credit consumption bugs—multiple reports arrived today where `/ultrareview` crashes burned free credits without producing results. Meanwhile, the long-running **Max plan session limit** issue (#38335) continues to dominate discussion with 685 comments and 453 thumbs-up, and **Agent Teams** (cowork) is drawing fresh bug reports around auth hangs, stale member status, and broken web-based sessions.

---

## 2. Releases

### [v2.1.128](https://github.com/anthropics/claude-code/releases/tag/v2.1.128)

| Change | Impact |
|---|---|
| Bare `/color` (no args) now picks a random session color | Easier session visual differentiation |
| `/mcp` now shows tool count for connected servers and flags 0-tool servers | Better MCP debugging UX |
| `--plugin-dir` now accepts `.zip` plugin archives | Simplified plugin distribution |
| `--channels` now works with console (AP) | Expanded channel/transport support |

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|---|---|
| 1 | [#38335 — Max plan session limits exhausted abnormally fast (CLI)](https://github.com/anthropics/claude-code/issues/38335) | **685 comments, 453 👍.** The single most-voted open issue. Users on Max plans report session limits draining far faster than expected since March 2026. No official fix yet; the issue remains the de facto megathread for rate-limit complaints. |
| 2 | [#46987 — API Error: Stream idle timeout – partial response received](https://github.com/anthropics/claude-code/issues/46987) | **180 comments, 159 👍.** Recurring stream timeout errors affecting multiple users daily. Particularly painful for long-running sessions on macOS. Labeled `duplicate` but still accumulating reports. |
| 3 | [#56435 — /ultrareview crashed on large PR, consumed 2/3 free credits](https://github.com/anthropics/claude-code/issues/56435) | Opened **today**. `/ultrareview` crashed twice on a large PR, consuming credits without output. Part of a cluster of same-day ultrareview credit-burn reports (see also #56396, #56445). |
| 4 | [#56396 — Ultrareview free runs consumed on large-scope branch reviews with empty findings](https://github.com/anthropics/claude-code/issues/56396) | Opened **today**. Same pattern: ultrareview returns no findings but deducts free-run quota. Users are requesting credit restoration. |
| 5 | [#56445 — /ultrareview crashed before producing findings, free run consumed and expired same day](https://github.com/anthropics/claude-code/issues/56396) | Opened **today**. Time-sensitive refund request—free runs expired May 5. Highlights the urgency of the ultrareview reliability problem. |
| 6 | [#56407 — Teams functionality broken: stuck members, stale status, incorrect token counts](https://github.com/anthropics/claude-code/issues/56407) | Opened **today**. Agent Teams (cowork) showing dead members, 0-token updates, inaccessible logs. Suggests the Teams feature has regressions after recent updates. |
| 7 | [#56449 — Agent Teams unavailable in Claude Code on the web despite experimental flag](https://github.com/anthropics/claude-code/issues/56449) | Opened **today**. `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` set in project settings, but team tools are not injected in web sessions. Points to a platform parity gap. |
| 8 | [#53439 — Cowork stuck on "Authenticating…" forever (M4 Mac mini, macOS Tahoe)](https://github.com/anthropics/claude-code/issues/53439) | Cowork authentication hangs indefinitely on Apple Silicon. Possibly related to OAuth token refresh logic. |
| 9 | [#56426 — Session limit blocks access despite available credits and low usage percentage](https://github.com/anthropics/claude-code/issues/56426) | Opened **today** on v2.1.128. User has unused paid credits and only 10% weekly usage but is still session-limited. Reinforces #38335 concerns. |
| 10 | [#52151 — Opus 4.7 1M via Bedrock: VSCode extension stream ends with 0 events](https://github.com/anthropics/claude-code/issues/52151) | Bedrock + Opus 4.7 at 1M context causes the VS Code extension to receive empty streams while CLI works fine. Bedrock compatibility remains an ongoing pain point. |

---

## 4. Key PR Progress

| PR | Description | Status |
|---|---|---|
| [#56334 — docs: Add Windows Developer Mode note for symlink support](https://github.com/anthropics/claude-code/pull/56334) | Documents that Windows Developer Mode is required for symlinks, addressing silent "0 tokens" failures in background agents (#55263). Practical dev-doc fix. | Open |
| [#9369 — fix: Line-specific spinner/status updates to prevent terminal flicker](https://github.com/anthropics/claude-code/pull/9369) | Replaces `console.clear()` / full-buffer redraws with targeted line updates. Eliminates visual flicker and scroll history loss. Long-running community fix originally opened Oct 2025. | Closed |
| [#53949 — Update HackerOne links in SECURITY.md](https://github.com/anthropics/claude-code/pull/53949) | Corrects HackerOne submission form and program page URLs in the security policy. Housekeeping. | Open |
| [#56179 — Remove 'statsig.anthropic.com' from firewall script](https://github.com/anthropics/claude-code/pull/56179) | `statsig.anthropic.com` returns NXDOMAIN; removes stale entry from firewall allow-list script. Relevant for enterprise users with restricted networks. | Open |
| [#56176 — Claude/book outline bootstrap toolkit](https://github.com/anthropics/claude-code/pull/56176) | Appears to be a low-quality/spam PR with an incoherent title and empty description. | Open |

> **Note:** Only 5 PRs were updated in the last 24 hours, so the full 10-PR table cannot be filled. PR velocity appears low today.

---

## 5. Feature Request Trends

Distilled from open issues updated in the past 24 hours:

1. **Customizable keybindings (Enter / Ctrl+Enter behavior)** — [#5064](https://github.com/anthropics/claude-code/issues/5064) (43 👍) and [#2054](https://github.com/anthropics/claude-code/issues/2054) (76 👍) both request configurable newline/send shortcuts. Especially critical for CJK-language users where Enter conventionally confirms input.

2. **VS Code extension: disable auto-attach of open file/selection** — [#24726](https://github.com/anthropics/claude-code/issues/24726) (103 👍). Users want granular control over what context the sidebar extension automatically injects.

3. **AWS Bedrock + AWS SSO support in `claude remote-control`** — [#28795](https://github.com/anthropics/claude-code/issues/28795) (64 👍). Enterprise users on Bedrock with SSO auth are blocked from using remote-control features.

4. **UserPromptSubmit hooks: non-blocking "handled" decision** — [#42178](https://github.com/anthropics/claude-code/issues/42178). Hooks currently can only `block` (which shows error framing); there's no clean way to return successful output from a hook without triggering an agent invocation.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Impact |
|---|---|---|
| **Session limits / rate limiting opacity** | #38335 (453 👍), #56426, #56417 | Users with paid credits and low usage percentages are still hitting hard session caps. The limit-reset logic and quota visibility remain opaque, fueling ongoing frustration. |
| **`/ultrareview` reliability and credit fairness** | #56435, #56396, #56445 (all opened today) | Three separate reports of ultrareview crashes consuming limited free credits without producing output. No automatic credit recovery mechanism exists. |
| **MCP HTTP transport tools not callable** | #56186, #50403 | Servers show "Running" with correct tool counts, but tools aren't injected into the model context. Affects both CLI and extension users on HTTP-based MCP servers. |
| **Chrome MCP domain navigation blocks** | #50606, #51273, #55706 | Since v2.1.111+, the Claude-in-Chrome MCP `navigate` tool returns "Navigation to this domain is not allowed" for all domains. Labeled as a regression. |
| **Agent Teams / Cowork instability** | #56407, #55404, #56449, #53439 | Stuck auth, stale member status, 0-token displays, missing tools on web platform. Teams is clearly in an unstable state across desktop, CLI, and web. |
| **Bedrock provider compatibility** | #52151, #46987, #28795 | Stream parsing failures, SSO auth gaps, and empty responses on Bedrock—especially with Opus 4.7 at extended context lengths. |

---

*Digest generated from GitHub activity on `anthropics/claude-code` for the 24-hour window ending 2026-05-06.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-06

## 1. Today's Highlights
The OpenAI engineering team is pushing a massive multi-PR stack to overhaul environment execution and tool routing, signaling an imminent shift toward robust local/cloud multi-environment support. The community is currently experiencing severe growing pains with **Codex Cloud**, as multiple high-profile reports indicate that the PR creation feature is broadly broken. Additionally, performance and reliability issues are taking center stage, with users reporting extreme memory leaks (up to 75GB+) in the desktop app and requests to expand GPT-5.5's context window to its full 1M token capacity.

## 2. Releases
- **rust-v0.129.0-alpha.6 & rust-v0.129.0-alpha.7:** The core Rust backend received two rapid-fire alpha releases over the last 24 hours, likely laying the groundwork for the new environment management, stdio transports, and tool routing changes currently being merged.

## 3. Hot Issues

1. **[Support 1M token context for GPT-5.5 in Codex](https://github.com/openai/codex/issues/19464)** (126 comments, 159 👍)
   *Why it matters:* Users are frustrated that GPT-5.5 is capped at a 400K context window inside Codex despite API support for 1M tokens. This is the highest-upvoted active issue, reflecting a massive demand for larger context limits for extensive codebases.
2. **[Codex Cloud failing to create PR across multiple repos](https://github.com/openai/codex/issues/21227)** (7 comments, 8 👍)
   *Why it matters:* A critical workflow block. Users are consistently hitting "Failed to create PR" in the cloud environment, stalling CI/CD integrations.
3. **[Codex Web cannot open PRs](https://github.com/openai/codex/issues/21000)** (7 comments, 8 👍)
   *Why it matters:* A separate confirmation of the above issue affecting the Web UI, indicating a systemic breakdown in Cloud PR generation capabilities.
4. **[Codex memory grows to 75GB+ during basic session](https://github.com/openai/codex/issues/20740)** (3 comments)
   *Why it matters:* Severe memory leak in the Desktop app causing macOS to crash due to out-of-memory errors, severely impacting developer reliability.
5. **[Codex app 100% CPU Usage even when only one agent is running](https://github.com/openai/codex/issues/11981)** (49 comments, 14 👍)
   *Why it matters:* An ongoing, highly commented issue causing machine unresponsiveness. It remains unresolved and active since February.
6. **[Windows WSL stores worktrees on /mnt/c instead of WSL filesystem](https://github.com/openai/codex/issues/13762)** (20 comments, 24 👍)
   *Why it matters:* Causes massive disk I/O performance degradation for Windows developers using WSL, misplacing project worktrees.
7. **[Frequent reconnect loop: websocket closed by server](https://github.com/openai/codex/issues/18960)** (17 comments, 15 👍)
   *Why it matters:* Streaming failures are causing constant reconnect loops in the Desktop app, disrupting agent task completion.
8. **[Automations silently fall back to workspace-write sandbox](https://github.com/openai/codex/issues/15310)** (7 comments, 5 👍)
   *Why it matters:* A safety/permissions bypass bug where scheduled desktop automations ignore `danger-full-access` configs until a user manually intervenes.
9. **[Codex does not auto-refresh routed MCP OAuth tokens](https://github.com/openai/codex/issues/17265)** (7 comments, 10 👍)
   *Why it matters:* MCP server integrations break silently once an access token expires, despite refresh tokens being stored locally.
10. **[Thread metadata causes huge titles and unbounded SQLite growth](https://github.com/openai/codex/issues/21211)** (2 comments)
    *Why it matters:* Storing full user prompts as thread titles is causing severe performance degradation in the local SQLite thread navigation UI.

## 4. Key PR Progress

1. **[Add CODEX_HOME environments TOML provider](https://github.com/openai/codex/pull/20666)**
   *Summary:* Introduces a TOML-backed configuration provider for execution environments, moving away from single legacy URLs.
2. **[Add stdio exec-server client transport](https://github.com/openai/codex/pull/20664)**
   *Summary:* Enables Codex to start an exec-server process and communicate via JSON-RPC over stdio, allowing clean client-lifecycle management.
3. **[Load configured environments from CODEX_HOME](https://github.com/openai/codex/pull/20667)**
   *Summary:* Activates the new `EnvironmentManager` so standard Codex entrypoints can seamlessly discover and utilize local/remote environments.
4. **[Support updatedInput hook rewrites](https://github.com/openai/codex/pull/20527)**
   *Summary:* Empowers `PreToolUse` and `PermissionRequest` hooks to dynamically rewrite tool inputs before execution, fixing a major limitation for middleware integrators.
5. **[Route view_image through selected environments](https://github.com/openai/codex/pull/21143) & [Route apply_patch through selected environments](https://github.com/openai/codex/pull/21048)**
   *Summary:* Two crucial PRs ensuring that resource-heavy actions (image viewing, file patching) are securely routed through the newly established multi-environment architecture.
6. **[Propagate cache key and service tiers in compact](https://github.com/openai/codex/pull/21249)**
   *Summary:* Fixes context compaction so that `prompt_cache_key` and `service_tier` aren't lost, preventing silent routing errors and cache misses during session optimization.
7. **[feat(app-server): API proposal for better thread loading performance](https://github.com/openai/codex/pull/20532)**
   *Summary:* Directly addresses the SQLite/UI freezes by proposing a refined API for paginating and loading thread histories.
8. **[Use string service tiers in session protocol](https://github.com/openai/codex/pull/20971)**
   *Summary:* Refactors session/op/app-server protocols to use string-based tier IDs instead of a closed enum, allowing more flexible model routing.
9. **[Support Always Allow for MCP app messages](https://github.com/openai/codex/pull/21231)**
   *Summary:* Adds scoped "Always Allow" configurations for MCP App interfaces, drastically reducing friction and prompt spam for trusted MCP tools.
10. **[chore(app-server-protocol): split up v2.rs](https://github.com/openai/codex/pull/21251)**
    *Summary:* A necessary mechanical refactor breaking down a monolithic Rust file into modular components, speeding up future protocol iteration.

## 5. Feature Request Trends

- **Expanded Context Windows:** The community is aggressively requesting full API parity for context limits, specifically asking for 1M tokens for GPT-5.5.
- **Advanced Context Management:** Users want smarter memory handling, such as "compact context and implement plan" modes, and better visibility into cache expiration timers.
- **Enhanced TUI/CLI Utilities:** Requests for better UX, such as copying full multi-step responses (`/copy`) rather than just the latest step.
- **Broader OS Support:** Continued demand for native support outside the big three OSs (e.g., FreeBSD builds via NPM).
- **Richer Hook/Tool Ecosystem:** Developers are asking for `PreToolUse` to apply to *all* tools (like `read_file` and `grep`), not just Bash, to build robust middleware.

## 6. Developer Pain Points

- **Broken Cloud PR Generation:** The most immediate pain point today is the inability to create PRs via Codex Cloud/Web, halting automated team workflows.
- **Resource Exhaustion:** Extreme memory leaks (upwards of 75GB) and 100% CPU utilization on desktop are severely degrading the developer experience and crashing host machines.
- **Windows/WSL Friction:** Windows developers continue to struggle with poor directory mapping (`/mnt/c`) and locked files, causing performance drops and broken tooling.
- **Session & Metadata Bloat:** Unbounded thread metadata and eager history hydration are turning the local SQLite store into a bottleneck, causing the UI to freeze during thread navigation.
- **Authentication Drops:** Token handling for MCP servers is currently unreliable, forcing developers to manually re-authenticate or restart sessions to restore tool functionality.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for 2026-05-06.

## 1. Today's Highlights
May 5th was an active day for the Gemini CLI project, marked by the simultaneous release of the stable **v0.41.0** and the inaugural **v0.42.0-preview.0**. The maintenance team and community contributors heavily focused on squashing critical bugs in the Policy Engine (fixing broken YOLO/AUTO_EDIT modes) and implementing several quality-of-life improvements like Unicode LaTeX rendering and ripgrep fallback detection. Additionally, maintainers kicked off a major architectural push to harden the Auto Memory system's security and reliability.

## 2. Releases
*   **[v0.41.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.41.0)** (Stable): Includes UI refinements like showing `list` suggestions only on empty inputs, bundled with critical patches from preview.2 and preview.3.
*   **[v0.41.1](https://github.com/google-gemini/gemini-cli/pull/26545)** (Stable Patch): Cherry-picks a critical fix for command redirection in YOLO/AUTO_EDIT modes.
*   **[v0.42.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.42.0-preview.0)**: Introduces a fix preventing auto-updates from switching to less stable channels.
*   **[v0.42.0-preview.1](https://github.com/google-gemini/gemini-cli/pull/26544)**: Cherry-picks the YOLO/AUTO_EDIT redirection fix into the new preview branch.
*   **[v0.42.0-nightly.20260505](https://github.com/google-gemini/gemini-cli/releases/tag/v0.42.0-nightly.20260505)**: Includes UI rendering fixes for LaTeX-to-Unicode and clearing the skills consent dialog before reloads.

## 3. Hot Issues
1.  **[Agent gets stuck for 1+ hours on small edits (#22141)](https://github.com/google-gemini/gemini-cli/issues/22141):** With 188 comments and 151 thumbs-up, this is the most active issue. Users report the agent looping endlessly during trivial code modifications, pointing to severe core agent performance degradation.
2.  **[Stuck in "thinking loop" for hours (#26116)](https://github.com/google-gemini/gemini-cli/issues/26116):** A recent surge in reports (echoing #22141) where the CLI gets trapped in infinite thought loops, dramatically inflating 2-minute tasks into 2-hour ordeals.
3.  **[Subagent falsely reports success on MAX_TURNS (#22323)](https://github.com/google-gemini/gemini-cli/issues/22323):** A critical `priority/p1` bug where subagents report `"status: success"` and terminate with `"GOAL"` even when they hit their max turn limit, effectively failing silently.
4.  **[Repetitive permission requests in auto-accept modes (#24772)](https://github.com/google-gemini/gemini-cli/issues/24772):** Highly frustrating UX issue where the agent repeatedly asks for tool permissions even when explicitly put into `auto-accept` mode.
5.  **[Pro tier stuck at 0 usage / infinite thinking (#25238)](https://github.com/google-gemini/gemini-cli/issues/25238):** Reports that the usage reset clock stopped functioning after a recent update, resulting in infinite loops for Pro subscribers. 
6.  **[Chat history corruption in Context Manager (#26521, fixed via PR)](https://github.com/google-gemini/gemini-cli/pull/26534):** A significant core bug causing chat context corruption that was quickly addressed today by maintainer `joshualitt`.
7.  **[Browser Agent ignores settings.json overrides (#22267)](https://github.com/google-gemini/gemini-cli/issues/22267):** Users report that `settings.json` configuration for `maxTurns` and other parameters are completely bypassed by the Browser Agent.
8.  **[AST-aware codebase mapping investigation (#22745)](https://github.com/google-gemini/gemini-cli/issues/22745):** A maintainer workstream exploring AST-aware file reads to reduce misaligned reads, cut token noise, and improve tool efficiency.
9.  **[Policy Engine downgrades commands in YOLO mode (#26542, fixed via PR)](https://github.com/google-gemini/gemini-cli/pull/26542):** A regression breaking YOLO and AUTO_EDIT modes, where safe shell redirects (pipes) were being unexpectedly downgraded to `ASK_USER`.
10. **[Memory system bugs and patch validation (#26516, #26520, #26523)](https://github.com/google-gemini/gemini-cli/issues/26516):** Maintainer `SandyTao520` opened a cluster of issues exposing how the Auto Memory system silently skips malformed patches, retries low-signal sessions indefinitely, and allows overly broad target paths.

## 4. Key PR Progress
1.  **[fix(core): resolve policy engine bugs affecting tool approvals (#26540)](https://github.com/google-gemini/gemini-cli/pull/26540):** A `priority/p1` fix resolving a bug where regex null-bytes and faulty logic prevented tool approvals from persisting, causing the constant "ask for permission" loops.
2.  **[fix(core): allow redirection in YOLO/AUTO_EDIT modes without sandboxing (#26542)](https://github.com/google-gemini/gemini-cli/pull/26542):** Resolves a regression that downgraded shell commands with redirects/pipes to `ASK_USER`, heavily disrupting automated workflows.
3.  **[fix(core): Fix chat corruption bug in context manager (#26534)](https://github.com/google-gemini/gemini-cli/pull/26534):** Critical fix for underlying corruption happening within the conversation context manager.
4.  **[feat(core): add system-wide fallback for ripgrep detection (#26536)](https://github.com/google-gemini/gemini-cli/pull/26536):** Improves CLI setup on Linux/Windows by falling back to system-installed `ripgrep` if the bundled vendor binary is missing.
5.  **[Tighten private Auto Memory patch allowlist (#26535)](https://github.com/google-gemini/gemini-cli/pull/26535):** Security and reliability hardening ensuring memory patches can only target `MEMORY.md` and direct sibling markdown files in the project directory.
6.  **[fix(cli): render LaTeX-style output as Unicode in the TUI (#25802)](https://github.com/google-gemini/gemini-cli/pull/25802):** Merged into the latest nightly, improving terminal readability by rendering LaTeX outputs natively as Unicode characters.
7.  **[feat(bot): enforce evaluation role and multi-iteration feedback loop (#26303)](https://github.com/google-gemini/gemini-cli/pull/26303):** Upgrades the Gemini CLI Bot's system prompts to enforce an evaluation-only role for the critique agent and improve automated PR feedback.
8.  **[fix: handle RangeError when conversation exceeds JSON serializable size (#25364)](https://github.com/google-gemini/gemini-cli/pull/25364):** Prevents V8 `RangeError` crashes (`Invalid string length`) when chat contexts grow beyond memory limits during massive sessions.
9.  **[refactor(cli): migrate core tools to native ToolDisplay property (#25186)](https://github.com/google-gemini/gemini-cli/pull/25186):** Major refactor deprecating the legacy `returnDisplay` adapter, giving tools native control over how their UI renders in the TUI.
10. **[ci(release): build and attach unsigned macOS binaries to releases (#26462)](https://github.com/google-gemini/gemini-cli/pull/26462):** Improves distribution by automatically building and uploading macOS (`x64` and `arm64`) binaries to release assets.

## 5. Feature Request Trends
*   **AST-Aware Codebase Parsing:** Strong momentum behind investigating and integrating tools like `tilth` or `glyph` to map codebases structurally rather than relying purely on text-based searches. 
*   **Robust Component Evals:** A push toward higher quality assurance through robust behavioral evaluation testing for supported models before they hit end-users.
*   **Safer Agent Defaults:** Requests for the agent to inherently avoid destructive shell behavior (e.g., preventing automatic `git reset --force` or destructive database mutations) without explicit user override.

## 6. Developer Pain Points
*   **Infinite Loops and Latency:** The most severe frustration by far is the agent getting stuck in "thinking" loops or taking hours for minor code edits, causing users to abandon sessions.
*   **Broken Autonomous Modes:** The combination of recent Policy Engine regressions and ignored `settings.json` overrides means that developers trying to use `YOLO`, `AUTO_EDIT`, or persistent browser sessions are experiencing hard-blocks and interrupted workflows.
*   **Friction with Permissions:** The CLI routinely drops its memory of granted permissions between files, requiring constant re-approval for identical actions in the same session.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-06

---

## 1. Today's Highlights

Version **v1.0.42-0** introduces an experimental **rubber-duck agent** for GPT sessions powered by Claude, while the stable **v1.0.41** release delivers significant UX improvements including faster startup via deferred authentication, automatic shell completion installation, and a smarter slash-command picker. The community remains highly active around **plugin/agent scoping**, **MCP permissions**, and **non-interactive mode reliability**, with several new issues filed today reflecting growing enterprise and power-user adoption.

---

## 2. Releases

### v1.0.42-0 (experimental)
- **Added:** Rubber-duck agent for GPT sessions, powered by Claude — available under `/experimental`.

### v1.0.41 (stable)
- CLI renders the UI immediately while authentication resolves in the background, noticeably improving perceived startup time.
- Shell completions for **bash, zsh, and fish** are now automatically installed on first run and kept up to date after `copilot update`.
- Tab-completing slash commands that accept arguments now appends a trailing space for smoother input.

### v1.0.41-1 (patch)
- Slash command picker now searches command **descriptions** and underlines matched characters.
- Memory tool confirmation prompt surfaces the **scope** (repository vs. user) when requesting storage permission.
- SQL todo timeline entries render more accurately for `INSERT OR IGNORE` / `REPLACE` statements.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|--------------------|
| 1 | [#677 — Bash Tool Fails with `posix_spawnp` Error After Extended Use](https://github.com/github/copilot-cli/issues/677) | Long-running or multiple bash operations eventually crash with a spawn error, undermining agent reliability in complex workflows. | 35 comments, 11 👍 — one of the longest-running agent bugs. Closed but closely watched. |
| 2 | [#2421 — HTTP/2 GOAWAY Race Condition Causes Cascading Retry Failures](https://github.com/github/copilot-cli/issues/2421) | A low-level undici connection-pool race silently wastes premium requests and causes flaky failures on enterprise networks. | 7 comments, 16 👍 — consolidates 5 duplicate issues; highest 👍 among open issues. |
| 3 | [#978 — Skills Not Used Unless Explicitly Stated](https://github.com/github/copilot-cli/issues/978) | Custom skills defined in `AGENTS.md` are ignored unless the user explicitly names them, limiting the value of the skills system. | 12 comments, 6 👍 — ongoing since Jan 2026. |
| 4 | [#1665 — Support Plugins Scoped to Project/Repository](https://github.com/github/copilot-cli/issues/1665) | Plugins are currently per-user only, making team-shared or repo-specific workflows fragile. | 5 comments, 11 👍 — strong demand for project-level scoping. |
| 5 | [#2795 — `--agent` Does Not Work with `--plugin-dir` in Non-Interactive Mode](https://github.com/github/copilot-cli/issues/2795) | Combining `--agent`, `--plugin-dir`, and `-p` breaks agent discovery, blocking CI/CD automation use cases. | 4 comments, 14 👍 — highest 👍 among recent issues. |
| 6 | [#334 — Add Shell Completions](https://github.com/github/copilot-cli/issues/334) | Long-standing feature request now resolved in v1.0.41 with auto-install completions. | 9 comments, 11 👍 — closed; validates the new release approach. |
| 7 | [#1707 — 3rd-Party MCP Servers Disabled Despite No Policy](https://github.com/github/copilot-cli/issues/1707) | Regression in v0.0.418 blocked MCP servers for users whose orgs have no restrictive policy. | 7 comments — closed after fix, but highlights fragility of policy evaluation. |
| 8 | [#3129 — `copilot plugin update` Doesn't Sync Version to config.json](https://github.com/github/copilot-cli/issues/3129) | After updating a plugin, the version in `config.json` stays stale, causing confusion and potential downgrade loops. | 2 comments — regression from v1.0.41, also seen in #3058. |
| 9 | [#3101 — Failed to Load Models: Access Denied by Copilot Policy](https://github.com/github/copilot-cli/issues/3101) | Enterprise users on v1.0.40 are blocked from model selection due to a policy evaluation error. | 2 comments, 3 👍 — recurring enterprise blocker (duplicate of #2691 pattern). |
| 10 | [#2012 — Session File Corrupted by U+2028/U+2029 Breaks `/resume`](https://github.com/github/copilot-cli/issues/2012) | Unicode line/paragraph separators in `events.jsonl` cause `JSON.parse` failures, making session resume unreliable. | 3 comments, 2 👍 — niche but impactful for session persistence. |

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours. The team appears focused on issue triage and the v1.0.41/v1.0.42 release cycle.

---

## 5. Feature Request Trends

Analyzing the full issue backlog, several clear themes emerge:

1. **Project/Repo-Scoped Plugins & Agents** — Multiple issues ([#1665](https://github.com/github/copilot-cli/issues/1665), [#2795](https://github.com/github/copilot-cli/issues/2795), [#3131](https://github.com/github/copilot-cli/issues/3131)) request that plugins, agents, and their resources be loadable per-repository rather than globally, enabling team-portable configurations.

2. **MCP Permissions & Policy Granularity** — Issues ([#3028](https://github.com/github/copilot-cli/issues/3028), [#3125](https://github.com/github/copilot-cli/issues/3125)) ask for finer-grained control over which MCP tools are allowed, plus real-time tool-list updates mid-turn.

3. **Non-Interactive / CI Mode Improvements** — Requests for reliable `--autopilot`, exit codes, and agent invocation ([#2482](https://github.com/github/copilot-cli/issues/2482), [#2524](https://github.com/github/copilot-cli/issues/2524), [#2795](https://github.com/github/copilot-cli/issues/2795)) indicate growing production/automation usage.

4. **Sub-Agent Tool Restrictions** — [#3133](https://github.com/github/copilot-cli/issues/3133) proposes `blocked_tools`/`allowed_tools` for task-tool sub-agents, reflecting multi-agent orchestration needs.

5. **Session Management Overhaul** — Requests for alphanumeric session IDs ([#3128](https://github.com/github/copilot-cli/issues/3128)), robust resume ([#2012](https://github.com/github/copilot-cli/issues/2012)), and local session store clarity ([#2654](https://github.com/github/copilot-cli/issues/2654)) show the session lifecycle needs maturation.

---

## 6. Developer Pain Points

- **Networking & Premium Request Waste** — The HTTP/2 GOAWAY race condition ([#2421](https://github.com/github/copilot-cli/issues/2421)) silently consumes premium tokens, a serious cost and reliability concern for teams on paid plans.

- **Plugin Lifecycle Fragility** — Plugin updates not syncing to config ([#3129](https://github.com/github/copilot-cli/issues/3129), [#3058](https://github.com/github/copilot-cli/issues/3058)), leftover `.git` directories in installed plugins ([#3132](https://github.com/github/copilot-cli/issues/3132)), and missing resource loading for plugin-installed agents ([#3131](https://github.com/github/copilot-cli/issues/3131)) collectively signal that the plugin subsystem needs stabilization.

- **Terminal Rendering & UX** — Flickering output ([#1716](https://github.com/github/copilot-cli/issues/1716)) and mouse-scroll misrouting in VSCode ([#2405](https://github.com/github/copilot-cli/issues/2405)) degrade daily use, especially during long agent responses.

- **Enterprise Policy & Model Access** — Policy evaluation regressions block model loading ([#2661](https://github.com/github/copilot-cli/issues/2661), [#3101](https://github.com/github/copilot-cli/issues/3101)), creating friction for organizational rollouts.

- **Authentication on Restricted Environments** — Browser-based auth failures on headless or locked-down machines ([#3130](https://github.com/github/copilot-cli/issues/3130), [#2953](https://github.com/github/copilot-cli/issues/2953)) remain a hurdle for enterprise CI and Windows users without admin rights.

---

*Data sourced from [github.com/github/copilot-cli](https://github.com/github/copilot-cli) on 2026-05-06.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-06

## 1. Today's Highlights

The Kimi Code CLI community experienced a quiet day on the release front, with no new versions shipped in the last 24 hours. However, user-submitted bug reports indicate emerging stability concerns across diverse environments, specifically targeting API interactions on Linux, login flows on ARM architectures, and unexpected crashes on WSL. Behind the scenes, community contributors are actively refining the CLI's architecture and testing infrastructure to improve agent loop management and test reliability.

## 2. Releases

*No new releases were published in the last 24 hours. The latest public version remains at **v1.41.0**.*

## 3. Hot Issues

Although there were only 3 active issues updated today, they highlight critical environmental and authentication edge cases:

*   **[#2164](https://github.com/MoonshotAI/kimi-cli/issues/2164) - API Error 400 on Linux Fedora 43 (v1.40.0)**
    Users are encountering `400 Bad Request` errors when routing requests to the `k2.6` model via the Kimi Code open platform. This suggests a potential breaking change or malformed payload structure in recent API interactions.
*   **[#2162](https://github.com/MoonshotAI/kimi-cli/issues/2162) - Cannot Login on Asahi Linux (aarch64) (v1.41.0)**
    A complete authentication failure on ARM64 architectures (specifically Asahi Fedora). This is a high-priority blocker as it prevents CLI initialization entirely on Apple Silicon and ARM-based Linux workstations.
*   **[#2163](https://github.com/MoonshotAI/kimi-cli/issues/2163) - Random Crashes on WSL (v1.41.0)**
    Developers using Windows Subsystem for Linux (Ubuntu 22-26) are experiencing unpredictable CLI crashes while using API keys with the `k2.6` model. WSL remains a critical environment for enterprise developers, making memory management or I/O race conditions here a notable pain point.

## 4. Key PR Progress

Two significant open pull requests saw activity today, focusing on core agent architecture and test suite stability:

*   **[#1960](https://github.com/MoonshotAI/kimi-cli/pull/1960) - `feat(soul)`: RalphFlow architecture with ephemeral context and convergence detection**
    A major architectural proposal introducing `RalphFlow`. This framework aims to solve the classic AI agent problem of infinite loops in automated workflows. It implements ephemeral context (isolating iterations to temporary files) and convergence detection. This PR is a foundational step toward enabling reliable, long-running autonomous coding agents.
*   **[#2008](https://github.com/MoonshotAI/kimi-cli/pull/2008) - `test(background)`: fix flaky approval-wait tests via wait_for_status**
    Targets test suite flakiness in `test_agent_tool.py`. The previous implementation polled task status with a rigid 200ms budget, which frequently failed on slower CI runners due to the `asyncio.create_task` + `asyncio.to_thread` execution hops. Updating this to a dynamic `wait_for_status` approach will significantly improve CI/CD reliability for the BackgroundAgentRunner.

## 5. Feature Request Trends

While today's active feed was dominated by bug reports, the ongoing progress in PRs points to a strong developmental focus on **Agentic Workflow Reliability**. The community and core contributors are heavily prioritizing:
*   **Autonomous Convergence:** Preventing infinite loops during long-context code generation.
*   **Ephemeral/Isolated Execution:** Sandboxing agent steps to protect the main conversation context.
*   **CI/CD Observability:** Improving background task status tracking.

## 6. Developer Pain Points

*   **Hardware/OS Fragmentation:** The CLI is suffering from platform-specific bugs, particularly regarding Asahi Linux (ARM64) architecture support and WSL (Windows) memory/IO handling. 
*   **API Stability:** The recent `k2.6` model updates appear to be generating unhandled `400 Bad Request` errors, interrupting standard developer workflows.
*   **Authentication Reliability:** Login mechanisms are failing for edge-case environments, suggesting the auth library may not be fully compatible with non-x86_64 system architectures.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-06

## 1. Today's Highlights

OpenCode shipped a rapid-fire series of five patch releases (v1.14.34–v1.14.39) over the past 24 hours, focusing heavily on session management, CSP/proxy fixes, and the new "session warping" feature. Community activity is surging around desktop proxy/networking reliability and CSP regressions affecting the embedded web terminal. Meanwhile, contributors are actively fixing workspace management edge cases and provider compatibility bugs.

---

## 2. Releases

**v1.14.34–v1.14.39** (5 releases in 24h)

- **v1.14.39** (Desktop): Respects `HTTP_PROXY` and related proxy environment variables; returns `null` gracefully instead of crashing when stored values can't be read.
- **v1.14.38** (Core + Desktop): Relaxes default CSP to allow arbitrary `connect-src` origins for embedded UI requests. Desktop now trusts system CA certificates for HTTPS connections.
- **v1.14.37** (Core + Desktop): Canceling a task now cascades to child subtask sessions. V2 session rendering gets cleaner tool states, better compaction summaries, and more accurate timing. New **session warping** — move a session into another workspace or back to the local project.
- **v1.14.35** (Core): Preserves diff patch boundaries when file contents include `diff --git` text, preventing broken session diff rendering.
- **v1.14.34** (Core): Adds PTY connection tickets for more reliable authenticated terminal websockets. Adds v2 session failure events for clients to detect failed runs. Improves shell command handling for Bash, PowerShell, and cmd.

---

## 3. Hot Issues

1. **[#24418](https://github.com/anomalyco/opencode/issues/24418) — CLI stuck on "Loading plugins..." on Windows (CLOSED, 24 comments)**
   Intermittent startup hang affecting Windows users since v1.14.25, forcing terminal closure. High comment volume signals this is a widespread frustration point.

2. **[#4443](https://github.com/anomalyco/opencode/issues/4443) — Start in plan mode by default? (OPEN, 21 comments, 24 👍)**
   Users with editor-integrated workflows (e.g., Helix) accidentally edit code when they intend to plan. Strong upvote count shows demand for a `default_mode` config option.

3. **[#11830](https://github.com/anomalyco/opencode/issues/11830) — Multi-Account OAuth with Auto-Relogin (OPEN, 21 comments, 16 👍)**
   Rate-limit exhaustion on a single OAuth account halts work entirely. Users want credential rotation and automatic re-auth across multiple accounts per provider.

4. **[#25893](https://github.com/anomalyco/opencode/issues/25893) — Web terminal broken in v1.14.38: CSP blocks Ghostty WASM (OPEN, 6 👍)**
   A regression from the CSP fix in v1.14.38 — `data:` URIs needed by the Ghostty WASM terminal are blocked. Directly contradicts the intent of the release fix.

5. **[#14970](https://github.com/anomalyco/opencode/issues/14970) — SQLite corruption on NFS with concurrent sessions (OPEN, 14 👍)**
   Multiple concurrent sessions on NFS-mounted home directories corrupt the shared `opencode.db`. Critical for enterprise/shared-storage environments.

6. **[#25835](https://github.com/anomalyco/opencode/issues/25835) — Subagent asks for permission it already has (OPEN)**
   A subagent with explicit `allow` rules still prompts the user, indicating a permissions evaluation regression in subagent contexts.

7. **[#25928](https://github.com/anomalyco/opencode/issues/25928) — MCP toggle switch is purely cosmetic (OPEN)**
   Enabling a disabled MCP server via the UI toggle doesn't stick visually until restart, though the backend applies the change. Confusing UX.

8. **[#25895](https://github.com/anomalyco/opencode/issues/25895) — Agent refuses to auto-commit despite AGENTS.md instructions (CLOSED)**
   Users place "always commit" instructions in agent config, but behavior remains inconsistent. Highlights the gap between instruction-following reliability and user expectations.

9. **[#25918](https://github.com/anomalyco/opencode/issues/25918) — `tool.execute.after` plugin hook declared but never triggered (OPEN)**
   The plugin SDK exposes a hook that the runtime never invokes, silently breaking any plugin relying on post-tool-execution logic. Erodes plugin developer trust.

10. **[#25769](https://github.com/anomalyco/opencode/issues/25769) — z.ai model list suddenly truncated (OPEN)**
    A provider (z.ai) changed available models without notice, and OpenCode's model catalog didn't adapt. Users lost access to previously usable models like GLM-4.6V.

---

## 4. Key PR Progress

1. **[#25925](https://github.com/anomalyco/opencode/pull/25925) — Fallback ID for streaming tool calls missing `id`**
   Providers like NVIDIA (kimi-k2.5) omit the `id` field in streaming deltas. This PR generates a fallback UUID, preventing `InvalidResponseDataError` crashes on every MCP tool call.

2. **[#25898](https://github.com/anomalyco/opencode/pull/25898) — List root sessions in session picker (CLOSED)**
   Removes a hardcoded 30-day filter and requests root sessions with a bounded limit, preventing child sessions from consuming the picker result window.

3. **[#25920](https://github.com/anomalyco/opencode/pull/25920) — Native Windows shell execution for local MCP servers**
   Fixes a critical Windows bug where `StdioClientTransport` doesn't invoke a native shell, causing local MCP servers (e.g., WordPress) to fail on connection.

4. **[#25760](https://github.com/anomalyco/opencode/pull/25760) — Cancel queued messages without aborting session**
   Adds a "Cancel" option on queued messages that removes them from the queue without disrupting the active generation — a long-requested UX improvement.

5. **[#25573](https://github.com/anomalyco/opencode/pull/25573) — Route provider options through cf-ai-gateway (CLOSED)**
   Fixes `reasoningEffort` and `variant` inputs being silently dropped for Cloudflare AI Gateway models using the `ai-gateway-provider` SDK.

6. **[#25894](https://github.com/anomalyco/opencode/pull/25894) — Fix workspace handling in `/new` and `/warp` (CLOSED)**
   Follow-up to the new session warping feature: ensures the selected warp workspace is used when creating new sessions, and fixes warping back to local projects.

7. **[#25915](https://github.com/anomalyco/opencode/pull/25915) — Filter connected workspaces in warp dialog**
   Deduplicates and filters the workspace picker to only show actually connected workspaces, preventing users from selecting stale entries.

8. **[#14741](https://github.com/anomalyco/opencode/pull/14741) — Plugin hooks: `stream.delta` and `stream.aborted`**
   Adds real-time stream observation hooks for plugins — `stream.delta` fires on text/reasoning/tool deltas, `stream.aborted` fires on cancellation. Enables monitoring and analytics plugins.

9. **[#25244](https://github.com/anomalyco/opencode/pull/25244) — Avoid preview child MCP bootstraps**
   Prevents hover/sidebar project previews from registering MCP bootstraps, which caused stale MCP server connections and resource leaks.

10. **[#25818](https://github.com/anomalyco/opencode/pull/25818) — Type session not-found errors on Effect error channel**
    Moves session get/fork/remove not-found failures onto typed Effect error channels with proper HTTP 404 responses. Improves API reliability and developer experience for integrators.

---

## 5. Feature Request Trends

- **Workflow automation & reliability:** Users want agents to consistently follow instructions (auto-commit, auto-plan-mode) without manual intervention. The gap between configured behavior and actual behavior is a recurring theme.
- **Multi-account & provider resilience:** Multi-Account OAuth rotation (#11830), cross-region Bedrock inference profiles (#25885), and dynamic model catalog updates (#25769) all point to users operating at scale across multiple providers.
- **Plugin system maturity:** Requests for `chat.model` pre-call routing (#18793), working `tool.execute.after` hooks (#25918), and stream observation hooks (#14741) show the plugin ecosystem is hitting its ceiling and needs deeper runtime integration points.
- **Localization & accessibility:** Chinese translation completion (#25800), message translation (#25923), and mobile touch optimization (#18767) indicate growing international and non-desktop usage.
- **Local-first intelligence:** The local Relevance Index request (#4986) resurfaces regularly — users want semantic code search that doesn't depend on cloud LLM context windows.

---

## 6. Developer Pain Points

- **Windows is a second-class citizen:** Plugin loading hangs (#24418), shell execution failures for MCP servers (#25920), process termination killing OpenCode (#25930), and path glob parsing bugs (#11317) collectively paint a picture of Windows-specific friction across CLI, TUI, and desktop.
- **Provider compatibility is fragile:** Silent option dropping (cf-ai-gateway #24432), missing tool call IDs (NVIDIA/kimi #25925), Jinja template crashes after compaction (LM Studio #25168), and model list truncation (z.ai #25769) mean users cycling through providers hit unexpected breakage frequently.
- **Session and workspace state management is brittle:** SQLite corruption under NFS (#14970), stale layout state across servers (#18302), agent color swapping (#13451), and session picker showing child instead of root sessions all stem from insufficient state isolation.
- **Permissions and agent reliability:** Subagents ignoring their own allow rules (#25835) and agents refusing to follow explicit commit instructions (#25895) undermine trust in autonomous operation — the core value proposition.
- **Desktop networking/enterprise readiness:** The rapid succession of proxy support (#v1.14.39), system CA trust (#v1.14.38), CSP fixes, and CSP regressions (#25893) show the desktop app is still stabilizing its HTTP stack for corporate environments.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-06

## 1. Today's Highlights
The Pi ecosystem saw a massive surge in community activity, with over 30 issues and 14 pull requests updated in the last 24 hours. A significant portion of today's traffic was closed out and tagged with `closed-because-bigrefactor`, strongly suggesting that the core team is actively merging a major architectural overhaul. Key focus areas from the community include TUI rendering edge cases (especially around alternate screen modes), provider compatibility fixes for local LLMs and regional APIs, and several token-wasting bugs related to compaction and duplicated messages.

## 2. Releases
No new official releases were published in the last 24 hours. The high volume of `closed-because-bigrefactor` tags indicates that changes are currently being consolidated into an upcoming major release.

## 3. Hot Issues
Here are the 10 most noteworthy issues driving community discussion today:

1. **[Corrupted session via orphaned tool_use blocks](https://github.com/badlogic/pi-mono/issues/4189)**: Network drops or crashes leave `tool_use` blocks without matching `tool_result` blocks, making subsequent API calls fail with 400 errors. Unrecoverable states are a critical pain point for agents.
2. **[Concurrent `compact()` calls burn tokens](https://github.com/badlogic/pi-mono/issues/4203)**: Calling `compact()` while another compaction is running spins up a parallel LLM summary request, effectively doubling token costs unexpectedly. 
3. **[Zsh/tmux bad colors/contrast](https://github.com/badlogic/pi-mono/issues/4185)**: Users running Pi within tmux are experiencing broken colors upon launch. This highlights ongoing challenges with terminal compatibility in the TUI renderer.
4. **[Duplicated user messages in API input](https://github.com/badlogic/pi-mono/issues/4197)**: A race condition with `_pendingNextTurnMessages` causes outgoing HTTP bodies to contain duplicate user messages, silently doubling token usage for prompts.
5. **[Wayland `/copy` reports success but fails](https://github.com/badlogic/pi-mono/issues/4177)**: On Arch/Hyprland, the clipboard command falsely reports success while the clipboard remains empty.
6. **[Anthropic OAuth `/login` URL missing parameters](https://github.com/badlogic/pi-mono/issues/4173)**: Users trying to connect Pi to their Claude Code Pro subscriptions are blocked because the generated OAuth URL is rejected by Anthropic.
7. **[Pi reads the same files repeatedly](https://github.com/badlogic/pi-mono/issues/3441)**: Pi re-reads files it already has in context before making edits, unnecessarily filling up the context window.
8. **[Homebrew upgrade command mismatch](https://github.com/badlogic/pi-mono/issues/4194)**: Pi universally suggests `pi update` when a new version is available, failing to detect if it was installed via Homebrew (which requires `brew upgrade`).
9. **[Moonshot K2.6 multi-turn tool-call replay fails](https://github.com/badlogic/pi-mono/issues/4179)**: Moonshot's API requires a non-empty `reasoning_content` placeholder, which Pi's openai-completions adapter was not providing.
10. **[Z.ai provider risks account bans](https://github.com/badlogic/pi-mono/issues/4187)**: The `zai` provider is sending SDK-based headers to a "Coding Plan" endpoint, violating Z.ai's official usage policy and risking user bans.

## 4. Key PR Progress
Today saw 14 PRs updated, focusing heavily on provider compatibility, terminal rendering, and quality of life improvements.

1. **[Add official local-LLM provider extensions](https://github.com/badlogic/pi-mono/pull/4186)**: Introduces four new async-factory custom providers (Ollama, LM Studio, etc.) as extensions, allowing local model usage without core schema changes.
2. **[Reject re-entry into `AgentSession.compact()`](https://github.com/badlogic/pi-mono/pull/4202)**: Directly addresses Issue #4203, preventing concurrent compaction from burning tokens by locking the method.
3. **[Preserve scrollback on content-driven redraws](https://github.com/badlogic/pi-mono/pull/4204)**: Fixes a TUI issue where full redraws wiped the terminal's scrollback buffer, ensuring users can still scroll up through historical outputs.
4. **[Support interactive login selection](https://github.com/badlogic/pi-mono/pull/4190)**: Enhances the OAuth login flow by allowing users to easily switch between the URL and device code flows, and fixes `cmd+click` URL behavior.
5. **[Fix LM Studio invisible reasoning blocks](https://github.com/badlogic/pi-mono/pull/4191)**: Ensures reasoning tokens are properly displayed when using local models via the OpenAI Responses API format.
6. **[Non-empty reasoning_content placeholder for Moonshot K2.6](https://github.com/badlogic/pi-mono/pull/4178)**: Implements configurable provider fallbacks for reasoning content to fix 400 errors on multi-turn tool calls.
7. **[Allow comments and trailing commas in `models.json`](https://github.com/badlogic/pi-mono/pull/4162)**: A major quality-of-life improvement allowing developers to annotate their model configurations using standard JSONC syntax.
8. **[Add `autocompleteNoIgnore` setting](https://github.com/badlogic/pi-mono/pull/4199)**: Allows users to include git-ignored files (like local configs or build artifacts) in the `@` file autocomplete menu.
9. **[Brand the localhost OAuth callback page](https://github.com/badlogic/pi-mono/pull/4183)**: Allows developers using Pi as an embedded library to customize the logo and title on the local OAuth redirect page.
10. **[Image content API](https://github.com/badlogic/pi-mono/pull/3887)**: Introduces a new streaming API to support image blocks, enabling the agent to output images directly via models like Google or OpenRouter.

## 5. Feature Request Trends
Analyzing the open issues and PRs reveals clear trends in how the community wants to evolve Pi:
* **Advanced Terminal Support:** A high demand for better handling of modern terminal features, including clickable links (Issue [#4180](https://github.com/badlogic/pi-mono/issues/4180)), inline image previews across multiplexers (Issue [#4208](https://github.com/badlogic/pi-mono/issues/4208)), and dynamic theme backgrounds (Issue [#4206](https://github.com/badlogic/pi-mono/issues/4206)).
* **Extension & SDK APIs:** Developers want richer programmatic access. Notable requests include typed cross-extension service registries moving away from untyped event buses (Issue [#4207](https://github.com/badlogic/pi-mono/issues/4207)), and exposing model thinking level clamps (Issue [#4149](https://github.com/badlogic/pi-mono/issues/4149)).
* **Package Manager/Runtimes Agnosticism:** Users want Pi to play nice outside standard Node/npm environments, notably requesting better Bun support (Issue [#4160](https://github.com/badlogic/pi-mono/issues/4160)) and improved Homebrew lifecycle management (Issue [#4194](https://github.com/badlogic/pi-mono/issues/4194)).

## 6. Developer Pain Points
Community frustrations currently cluster around a few key areas:
* **Silent Token Waste:** Developers are frustrated by bugs that silently inflate token usage. Duplicated user messages (Issue [#4197](https://github.com/badlogic/pi-mono/issues/4197)), concurrent compaction (Issue [#4203](https://github.com/badlogic/pi-mono/issues/4203)), and the agent re-reading files already in context (Issue [#3441](https://github.com/badlogic/pi-mono/issues/3441)) heavily impact API costs.
* **Agent Stability:** The agent occasionally hangs in a "working" state without feedback (Issue [#2317](https://github.com/badlogic/pi-mono/issues/2317)), and sessions are easily corrupted by orphaned tool calls during network interruptions (Issue [#4189](https://github.com/badlogic/pi-mono/issues/4189)), forcing users to abandon active context.
* **Runtime Fragility:** Expired API tokens hanging the process (Issue [#4141](https://github.com/badlogic/pi-mono/issues/4141)) and startup latency bloat when using `@latest` npm extensions (Issue [#1291](https://github.com/badlogic/pi-mono/issues/1291)) degrade the core CLI experience.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-06

## 1. Today's Highlights
Qwen Code shipped **v0.15.6-nightly.20260505**, introducing a new `FileReadCache` to optimize file read operations and a proxy settings fix for the CLI. The community is heavily focused on **observability and background task management**, with new OpenTelemetry trace injection proposals and background "dream" memory tasks surfacing in the TUI. Developer discussions are also heating up around third-party model compatibility (MiniMax, DeepSeek) and terminal UI rendering stability.

## 2. Releases
### [v0.15.6-nightly.20260505.2e69d641d](https://github.com/QwenLM/qwen-code/pull/3766)
- **feat(core): add FileReadCache and short-circuit unchanged Reads** — Reduces redundant file reads by caching file contents at the session level, significantly improving tool-call efficiency for large codebase analysis.
- **fix(cli): honor proxy setting** — Resolves an issue where user-defined proxy configurations were ignored during outgoing API requests.

## 3. Hot Issues
1. **[#3838 Terminal UI infinite scroll/refresh loop](https://github.com/QwenLM/qwen-code/issues/3838)** — A critical UI bug where streaming model output causes violent flickering and infinite scrollbar growth in the terminal. The community confirms this is a rendering layer issue rather than model behavior.
2. **[#3652 Input length exceeds 983,616 token limit](https://github.com/QwenLM/qwen-code/issues/3652)** — Long conversations hit an `InternalError.Algo.InvalidParameter` hard limit, forcing users to start new chats and lose vital context.
3. **[#3841 Add WebSearch support via DashScope](https://github.com/QwenLM/qwen-code/issues/3841)** — Opened by maintainer @wenshao, this tracks the fact that Qwen Code is the only major Code Agent CLI lacking a WebSearch tool. Plans to leverage DashScope's existing server-side `web_search`.
4. **[#3634 Background task management roadmap](https://github.com/QwenLM/qwen-code/issues/3634)** — The master tracking issue for background agents. Phases A & B are merged, with ongoing work on user-facing background task UI and cancellation.
5. **[#3843 Settings.json overridden on startup](https://github.com/QwenLM/qwen-code/issues/3843)** — Users report Qwen Code completely replaces their `settings.json` on launch, destroying custom configurations.
6. **[#3669 & #3387 Custom model thought field rendering](https://github.com/QwenLM/qwen-code/issues/3669)** — Using MiniMax/OpenAI-compatible endpoints causes `<thinking>` tags to leak into visible output instead of rendering in the dedicated thoughts UI.
7. **[#3770 Cannot switch focus between parallel SubAgents](https://github.com/QwenLM/qwen-code/issues/3770)** — A regression from PR #3721 where `Ctrl+E` cannot toggle focus between parallel-running background SubAgents without causing dual-reflow flicker.
8. **[#3817 Race condition in MCP creates duplicate processes](https://github.com/QwenLM/qwen-code/issues/3817)** — Reinitializing MCP servers during restart triggers a race condition that spawns duplicate, orphaned MCP processes.
9. **[#3846 Inject OTel traceId/spanId into debug logs](https://github.com/QwenLM/qwen-code/issues/3846)** — Aims to correlate debug log files with OpenTelemetry traces for better production debugging in Alibaba Cloud SLS/Grafana.
10. **[#3765 Side queries use wrong model's settings](https://github.com/QwenLM/qwen-code/issues/3765)** — Fast model side-queries (recap, title generation) incorrectly inherit the main model's `extra_body.enable_thinking` config, causing unexpected behavior.

## 4. Key PR Progress
1. **[PR #3814: Fix auto-memory recall blocking main request](https://github.com/QwenLM/qwen-code/pull/3814)** — Resolves a 5-second delay on every user turn caused by the auto-memory recall side-query blocking the main execution path with an `AbortSignal.timeout`.
2. **[PR #3852: Activate skills from discovered result paths](https://github.com/QwenLM/qwen-code/pull/3852)** — Improves path-conditional skill activation so that broad discovery selectors (e.g., `**/*.ts`) successfully trigger skills based on discovered results, not just inputs.
3. **[PR #3774: Enforce prior read before Edit/WriteFile](https://github.com/QwenLM/qwen-code/pull/3774)** — A safety mechanism requiring the model to have seen a file's current content in the session before allowing mutations, preventing blind overwrites.
4. **[PR #3847: OTel traceId/spanId log injection](https://github.com/QwenLM/qwen-code/pull/3847)** — Implements the observability feature from #3846, adding `withSpan` wrappers to correlate API calls and tool executions with debug logs.
5. **[PR #3815: Use per-model settings for fast model side queries](https://github.com/QwenLM/qwen-code/pull/3815)** *(Merged)* — Prevents main model settings (`extra_body`, `samplingParams`) from leaking into fast model requests.
6. **[PR #3849: Cross-authType model resolution in ModelRegistry](https://github.com/QwenLM/qwen-code/pull/3849)** — Refactors model resolution logic from the client layer into the data layer (`ModelRegistry` + `ModelsConfig`), improving multi-provider architecture.
7. **[PR #3799: Normalize OpenAI-compatible model list parsing](https://github.com/QwenLM/qwen-code/pull/3799)** — Standardizes `/models` endpoint response parsing to handle diverse shapes (standard, bare arrays, nested objects) from providers like DeepSeek and Ollama.
8. **[PR #3680: Expand TUI markdown rendering](https://github.com/QwenLM/qwen-code/pull/3680)** — Brings rich Markdown rendering to the terminal, including Mermaid diagrams, LaTeX math, task lists, and blockquotes.
9. **[PR #3836: Surface and cancel auto-memory dream tasks](https://github.com/QwenLM/qwen-code/pull/3836)** — Integrates silent background memory consolidation tasks into the unified Background Tasks UI, allowing users to monitor and cancel them.
10. **[PR #3842: Add signal.reason convention for ShellExecutionService](https://github.com/QwenLM/qwen-code/pull/3842)** — The foundational plumbing (PR-1 of 3) for `Ctrl+B` promotion of a running foreground shell to a background process, introducing a `ShellAbortReason` union type.

## 5. Feature Request Trends
- **AI-Assisted Attribution & Compliance**: A strong push for granular tracking of AI-generated code vs. human code in git history ([PR #3115](https://github.com/QwenLM/qwen-code/pull/3115)), reflecting enterprise compliance needs.
- **Deeper Third-Party Model Compatibility**: Users want seamless integration with diverse OpenAI-compatible providers (MiniMax, DeepSeek, local proxies), specifically around thought rendering tags and non-interactive model switching ([#3410](https://github.com/QwenLM/qwen-code/issues/3410), [PR #3783](https://github.com/QwenLM/qwen-code/pull/3783)).
- **Rich Headless & CI/CD Integration**: Growing demand for structured output in headless mode (`--json-schema` in [PR #3598](https://github.com/QwenLM/qwen-code/pull/3598)) and reliable programmatic CLI execution.
- **Web Search Tooling**: Closing the gap with competitor CLIs by integrating native web search capabilities ([#3841](https://github.com/QwenLM/qwen-code/issues/3841)).

## 6. Developer Pain Points
- **Terminal UI Instability**: The infinite scrolling/flickering bug ([#3838](https://github.com/QwenLM/qwen-code/issues/3838)) is a major frustration, making complex code generation unreadable and requiring manual interrupts.
- **Configuration State Loss**: Users are distressed by `settings.json` being wiped on startup ([#3843](https://github.com/QwenLM/qwen-code/issues/3843)), destroying carefully tuned multi-provider configurations.
- **Context Window Limitations**: Hard truncation errors on long conversations ([#3652](https://github.com/QwenLM/qwen-code/issues/3652)) disrupt developer flow, with no graceful context eviction or summarization fallback currently in place.
- **Async & Concurrency Bugs**: Race conditions in MCP process management ([#3817](https://github.com/QwenLM/qwen-code/issues/3817)) and blocking side-queries ([#3814](https://github.com/QwenLM/qwen-code/pull/3814)) indicate growing pains in the tool's asynchronous execution engine.

</details>