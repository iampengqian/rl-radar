# AI CLI Tools Community Digest 2026-07-26

> Generated: 2026-07-25 22:15 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the July 26, 2026 community digests.

### 1. Ecosystem Overview
The AI CLI tool ecosystem in mid-2026 is characterized by rapid iteration, aggressive enterprise feature integration, and a shift toward complex multi-agent architectures. Major players like OpenAI, Google, and Anthropic are pushing the boundaries of remote execution, automated security policies, and autonomous pipelines, transforming simple terminal wrappers into comprehensive agentic frameworks. However, this rapid expansion is introducing significant growing pains across the board, particularly in resource management, UI/UX stability, and unpredictable rate limiting. Meanwhile, smaller and independent projects are carving out niches by prioritizing provider agnosticism, local model support, and deep architectural refactoring to maintain stability. 

### 2. Activity Comparison
*Note: Counts reflect explicitly detailed issues and PRs from the July 26 digests.*

| Tool | Issues Noted | PRs Noted | Release Status (Last 24h) | Primary Focus Today |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 3 | **v2.1.220** (Stability patch) | Runaway background agents, quota drain, TUI/UX fixes. |
| **OpenAI Codex** | 10 | 10 | **4x Alpha releases** (v0.146.0) | Enterprise security, network policies, Windows stability. |
| **Gemini CLI** | 10 | 8 | **None** | Internal automation pipelines, AST tools, security redaction. |
| **GitHub Copilot CLI**| 10 | 2 | **None** | Severe memory/session regressions in v1.0.7x. |
| **Kimi Code CLI** | 2 | 4 | **None** | Session state persistence, cross-platform test flakiness. |
| **OpenCode** | 10 | 10 | **v1.18.5** (Bugfixes) | TUI performance optimization, security defaults, AI loop fixes. |
| **Pi** | 10 | 10 | **v0.82.1** (Opus 5) | Claude Opus 5 integration, context compaction stability. |
| **Qwen Code** | 10 | 10 | **Nightly** (v0.21.0) | Dynamic subagent model routing, PR verification automation. |
| **DeepSeek TUI** | 10 | 10 | **None** | Provider independence (breaking DeepSeek hardcodes), God-object refactoring. |

### 3. Shared Feature Directions
*   **Remote Control & Mobile Sync:** Developers want to decouple CLI execution from physical terminals. *Claude Code*, *Kimi Code*, and *OpenAI Codex* users are actively requesting seamless handoffs to mobile or browser interfaces.
*   **Dynamic Subagent Routing & Tooling:** Users want the AI to autonomously manage its resources. *Qwen Code* is implementing dynamic model grade selection for subagents, while *Gemini CLI* and *Claude Code* users are asking for smarter utilization of custom skills and external tool limits.
*   **Advanced Memory & Context Control:** As context windows strain, granular control is required. *Pi* and *GitHub Copilot CLI* are battling compaction limits, while *Qwen Code* and *Gemini CLI* users are demanding pinned/read-only memory files and pre-context secret redaction.
*   **Cost & Quota Transparency:** Unpredictable API limits are a universal pain point. *OpenAI Codex* and *Claude Code* users are complaining about arbitrary rate limits and quota drain, while *Qwen Code* and *Pi* users are requesting per-token cost previews and real-time UI quota indicators.

### 4. Differentiation Analysis
*   **Enterprise vs. Local/Self-Hosted:** *OpenAI Codex* and *Pi* are heavily focused on enterprise readiness, evident by credential brokers, strict network execution scoping, and Bedrock integration. Conversely, *OpenCode* and *DeepSeek TUI* are leaning into local network models, LAN auto-discovery, and provider agnosticism (vLLM, Ollama).
*   **AI-Driven Development Pipelines:** *Gemini CLI* and *Qwen Code* stand out for using AI to build AI. Gemini is building "caretaker" agents for automated issue triage, while Qwen introduced a `@qwen-code /verify` lane to autonomously run A/B load-bearing checks on PR builds.
*   **Security Architectures:** *OpenAI Codex* is hardening OS-level security (macOS binary signing, proxy-owned brokers), whereas *OpenCode* and *Gemini CLI* are reacting to acute vulnerabilities (e.g., OpenCode's `0.0.0.0` cryptominer exploit, Gemini's A2A path traversal defenses).

### 5. Community Momentum & Maturity
*   **Hyper-Active & Iterating:** **OpenAI Codex** (4 alpha releases, 10 PRs) and **Gemini CLI** (massive internal automation PRs) show the highest engineering velocity, though Codex is currently battling severe Windows instability. **Qwen Code** also shows massive momentum with nightly releases and deep architectural PRs.
*   **Stabilizing & Refactoring:** **DeepSeek TUI** and **OpenCode** are in a mature refactoring phase. DeepSeek is aggressively untangling monolithic "God objects" to support multi-provider setups, while OpenCode is implementing lock-free concurrency and native API optimizations.
*   **Stalled or Regressing:** **GitHub Copilot CLI** shows low repository activity (0 releases, 2 closed PRs) while facing critical P1 regressions (OOM crashes, broken `Ctrl+C`), indicating a stall in public open-source iteration compared to peers.

### 6. Trend Signals
*   **The "Autonomy Tax" is Real:** As tools gain the ability to spawn background agents (*Claude Code*) or execute long-running tool chains (*Copilot CLI*), they are incurring massive token drains and memory leaks. The industry trend is shifting toward strictly bounded agent loops, dynamic tool filtering, and manual kill switches.
*   **Terminal UI (TUI) is a Major Bottleneck:** Across *Pi*, *Qwen Code*, *DeepSeek TUI*, and *OpenCode*, synchronous markdown rendering, uncached terminal segmenters, and focus-stealing prompts are consuming full CPU cores and destroying UX. High-performance, lock-free UI rendering will become a major competitive differentiator.
*   **Local & Provider-Agnostic Resurgence:** Developers are increasingly frustrated by hardcoded API endpoints and invisible fallbacks. Projects like *DeepSeek TUI* and *Pi* are gaining favor by treating OpenAI/Anthropic APIs as generic OpenAI-compatible endpoints, allowing enterprise users to route traffic through private gateways securely.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the Claude Code Skills community highlights report based on recent repository activity. 

### 1. Top Skills Ranking
While comment counts on recent PRs are obfuscated, the following open Skill submissions have generated the highest volume of community interaction and repository activity:

*   **Self-Audit Skill** ([PR #1367](https://github.com/anthropics/skills/pull/1367))
    *   **Functionality:** A universal quality gate for AI output that performs mechanical file verification followed by a four-dimension reasoning audit before delivering code.
    *   **Discussion/Status:** Highly active (OPEN). This PR is a direct response to community proposals for reasoning quality gates, aiming to reduce AI hallucinations and undelivered file claims.
*   **Document-Typography Skill** ([PR #514](https://github.com/anthropics/skills/pull/514))
    *   **Functionality:** Automatically prevents common AI document generation flaws, such as orphan words, widow paragraphs, and numbering misalignment. 
    *   **Discussion/Status:** OPEN. The community strongly supports this, noting that users rarely prompt for good typography, making it a perfect candidate for automated Skill behavior.
*   **Skill-Quality-Analyzer & Skill-Security-Analyzer** ([PR #83](https://github.com/anthropics/skills/pull/83))
    *   **Functionality:** Two "meta-skills" designed to evaluate other community Skills across five structural dimensions and scan for security vulnerabilities.
    *   **Discussion/Status:** OPEN. Directly addresses ongoing community concerns (like Issue #492) regarding trust, security, and namespace abuse in community-contributed Skills.
*   **Testing-Patterns Skill** ([PR #723](https://github.com/anthropics/skills/pull/723))
    *   **Functionality:** A comprehensive guide for code testing covering the Testing Trophy model, unit testing (AAA pattern), and React component testing.
    *   **Discussion/Status:** OPEN. A highly requested workflow addition that aims to standardize how Claude Code scaffolds tests for new applications.
*   **ODT (OpenDocument) Skill** ([PR #486](https://github.com/anthropics/skills/pull/486))
    *   **Functionality:** Enables Claude to create, fill, read, and convert `.odt` and `.ods` files, bridging a gap for open-source and ISO-standard document formats.
    *   **Discussion/Status:** OPEN. Expands Claude's document creation capabilities beyond the standard DOCX/PDF formats.

### 2. Community Demand Trends
Analysis of recent Issues reveals clear demand for expanding Claude Code's operational and architectural capabilities:

*   **Agent Governance & Safety:** Significant demand for skills that enforce safety patterns, policy enforcement, trust scoring, and audit trails for AI agent systems ([Issue #412](https://github.com/anthropics/skills/issues/412), [Issue #1385](https://github.com/anthropics/skills/issues/1385)).
*   **State & Context Management:** Users want Skills that manage long-running agent context windows, specifically through symbolic notation for compact, persistent agent memory ([Issue #1329](https://github.com/anthropics/skills/issues/1329)).
*   **Enterprise & Cloud Integrations:** Developers are actively requesting Skills that bridge Claude Code with AWS Bedrock ([Issue #29](https://github.com/anthropics/skills/issues/29)) and handle internal SharePoint Online documents ([Issue #1175](https://github.com/anthropics/skills/issues/1175)).
*   **MCP Standardization:** A push to expose Skills via the Model Context Protocol (MCP), allowing Skills to act as structured API endpoints rather than just text-based instructions ([Issue #16](https://github.com/anthropics/skills/issues/16)).

### 3. High-Potential Pending Skills (Tooling & Bug Fixes)
Several highly technical PRs addressing the core `skill-creator` tooling are currently open. These represent critical infrastructure fixes that are highly likely to merge soon, as they resolve blocking issues preventing Skill development:

*   **Eval Pipeline Recall Fix** ([PR #1298](https://github.com/anthropics/skills/pull/1298)): Fixes a critical bug where the evaluation script (`run_eval.py`) always reports 0% recall, causing the description-optimization loop to optimize against noise. (Addresses [Issue #556](https://github.com/anthropics/skills/issues/556)).
*   **Windows Compatibility Fixes** ([PR #1050](https://github.com/anthropics/skills/pull/1050) & [PR #1099](https://github.com/anthropics/skills/pull/1099)): Resolves `subprocess.Popen` failures, pipe reading crashes, and encoding bugs that currently render the Skill creator completely unusable on Windows. 
*   **YAML Special Character Validation** ([PR #361](https://github.com/anthropics/skills/pull/361) & [PR #539](https://github.com/anthropics/skills/pull/539)): Adds pre-parse checks to prevent silent YAML parsing failures when Skill descriptions contain unquoted colons or hash symbols.
*   **OOXML ID Collision Fix** ([PR #541](https://github.com/anthropics/skills/pull/541)): Fixes document corruption in the DOCX skill where tracked changes collide with existing bookmark IDs.

### 4. Skills Ecosystem Insight
The community's most concentrated demand is shifting from isolated task execution toward **cross-platform stability (specifically Windows support) and robust meta-evaluation tools**, as developers urgently need reliable eval pipelines and security frameworks to safely scale their Claude Code workflows.

---

Here is the Claude Code community digest for July 26, 2026.

### 1. Today's Highlights
Claude Code rolled out a minor maintenance update with version **v2.1.220**, focusing on general stability. The community spotlight is currently fixed on runaway background agents causing severe token drain, alongside highly requested UX improvements for the TUI and VS Code extension. Several critical bugs were also reported today regarding rapid quota consumption and mobile/remote session handling.

### 2. Releases
- **v2.1.220**: A incremental patch release containing general bug fixes and reliability improvements. *(No specific changelog provided)*

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

- **[#40198](https://github.com/anthropics/claude-code/issues/40198) [BUG] Cowork VM fails to start on Windows ARM64** 
  *Impact:* blocker for Snapdragon users. The Cowork VM environment completely fails to initialize on Windows ARM64 architectures (like the Galaxy Book4 Edge).
- **[#1669](https://github.com/anthropics/claude-code/issues/1669) [BUG] Claude Code frequently loses track of directory** 
  *Impact:* High (83 👍). A long-standing, dangerous issue where Claude executes commands in the wrong directory, leading to failed operations and potential accidental file overwrites.
- **[#9340](https://github.com/anthropics/claude-code/issues/9340) Add `--quiet` flag to suppress tool call output** 
  *Impact:* High demand (42 👍). Developers want a way to declutter the TUI in automated/advisory workflows by hiding intermediate tool calls and showing only the final agent response.
- **[#32726](https://github.com/anthropics/claude-code/issues/32726) VSCode extension steals focus** 
  *Impact:* Workflow disruption (45 👍). The VS Code panel automatically reveals itself and steals the cursor focus whenever output is generated, heavily interrupting typing workflows.
- **[#73829](https://github.com/anthropics/claude-code/issues/73829) Nested background agents recursively spawn and loop** 
  *Impact:* Severe. Background agents using `run_in_background` are recursively spawning sub-agents, getting stuck in 6.5+ hour no-op loops, and becoming completely unstoppable.
- **[#75314](https://github.com/anthropics/claude-code/issues/75314) 10 background tasks burn ~1M tokens over 34 hours** 
  *Impact:* Severe cost/security. Similar to the above, background agents got stuck for over a day with no cancellation method, rapidly draining API quotas.
- **[#81234](https://github.com/anthropics/claude-code/issues/81234) Max 20x weekly quota drained 53% in 2 days** 
  *Impact:* Billing/Usage bug. Users on the $200/mo Max plan are reporting wildly inaccurate quota consumption, suspecting flaws in how `cache_read` metering is calculated.
- **[#74325](https://github.com/anthropics/claude-code/issues/74325) `opusplan` silently falls back to Sonnet** 
  *Impact:* Reliability. Developers configuring `opusplan` in `settings.json` for plan mode report it silently downgrading to Sonnet without any user signal.
- **[#67180](https://github.com/anthropics/claude-code/issues/67180) `useAutoModeDuringPlan` never applies on startup** 
  *Impact:* Permissions regression. If a session defaults to plan mode, the "auto mode during plan" toggle is ignored, forcing manual approval for every allowlisted action.
- **[#75360](https://github.com/anthropics/claude-code/issues/75360) Permission dialog silently destroys typed input** 
  *Impact:* UX/A11y flaw. When a permission prompt pops up while the user is typing, the UI steals focus, and the user's in-progress text is irreversibly lost.

### 4. Key PR Progress
Activity in the repository's pull requests focuses on plugin maintenance and UI tweaks:

- **[#39043](https://github.com/anthropics/claude-code/pull/39043) Remove "retro-futuristic" recommendation from Frontend Design Skill** (Open)
- **[#49596](https://github.com/anthropics/claude-code/pull/49596) refactor: extract shared GitHub API client into github-api.ts with tests** (Closed)
- **[#15727](https://github.com/anthropics/claude-code/pull/15727) fix(hookify): correct Python import paths for hook modules** (Closed) - Addresses a breaking `No module named 'hookify'` bug caused by incorrect `CLAUDE_PLUGIN_ROOT` pathing.

### 5. Feature Request Trends
Distilled from the latest issues, the community is asking for:
- **TUI & Input Refinements:** Developers want less cluttered outputs (the `--quiet` flag) and inline rendering for `AskUserQuestion` modals to save vertical space ([#81226](https://github.com/anthropics/claude-code/issues/81226)). 
- **Smarter Autocomplete:** Requests for frecency-based inline autosuggest for standard prompts ([#81244](https://github.com/anthropics/claude-code/issues/81244)) and configurable sorting for the slash-command dropdown ([#80125](https://github.com/anthropics/claude-code/issues/80125), [#81239](https://github.com/anthropics/claude-code/issues/81239)).
- **Remote Task Management:** Better synchronization between the CLI, Desktop app, and Mobile app—specifically pushing subagent permission prompts to mobile ([#81238](https://github.com/anthropics/claude-code/issues/81238)) and fixing remote disconnect errors ([#81155](https://github.com/anthropics/claude-code/issues/81155)).
- **Scheduled Task Reliability:** Stricter execution guarantees for MCP-created scheduled tasks to prevent duplicate firing and ID collisions ([#81241](https://github.com/anthropics/claude-code/issues/81241)).

### 6. Developer Pain Points
The biggest frustrations currently voiced by Claude Code developers include:
- **Runaway Background Agents:** This is a critical pain point. Users are frustrated by unstoppable, recursive background agents that burn millions of tokens over dozens of hours without providing a kill switch ([#73829](https://github.com/anthropics/claude-code/issues/73829), [#75314](https://github.com/anthropics/claude-code/issues/75314)).
- **Invisible Quota Drain:** Closely tied to background processing, users are seeing weekly limits vanish in hours due to suspected `cache_read` metering bugs ([#81234](https://github.com/anthropics/claude-code/issues/81234), [#81245](https://github.com/anthropics/claude-code/issues/81245)).
- **Destructive Focus Stealing:** Whether it's the VS Code extension panel jumping to the foreground, or TUI permission prompts wiping out paragraphs of typed context, unexpected focus shifting is heavily degrading the UX ([#32726](https://github.com/anthropics/claude-code/issues/32726), [#75360](https://github.com/anthropics/claude-code/issues/75360), [#81240](https://github.com/anthropics/claude-code/issues/81240)).
- **Cross-Surface Disconnects:** Project-scoped plugins and configurations working perfectly in the CLI but being silently ignored by the VS Code extension remains a major debugging headache ([#74612](https://github.com/anthropics/claude-code/issues/74612)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for July 26, 2026.

### 1. Today's Highlights
OpenAI Codex continues its rapid development pace with four new Rust alpha releases (v0.146.0) and a wave of over 20 merged pull requests focusing heavily on enterprise security, network policy enforcement, and remote execution stability. Community discussions today were dominated by frustration over non-deterministic weekly rate limits and a surge of reports regarding Windows desktop app instability. 

### 2. Releases
Codex pushed four new Rust alpha builds over the last 24 hours, indicating active iteration on the CLI core:
- **[rust-v0.146.0-alpha.10.1](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.10.1)**
- **[rust-v0.146.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.10)**
- **[rust-v0.146.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.9)**
- **[rust-v0.146.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.8)**

### 3. Hot Issues
1. **[Issue #9508](https://github.com/openai/codex/issues/9508) [enhancement, rate-limits]**: *Make Weekly Limit Reset Deterministic.* With 47 comments, this is the most active issue. Pro users are expressing deep frustration that weekly rate limits reset arbitrarily rather than on a fixed schedule, making it nearly impossible to plan development cycles around quota limits.
2. **[Issue #31836](https://github.com/openai/codex/issues/31836) [bug, app]**: *Projects Sort By Last Updated broken.* The macOS desktop app's UI for sorting projects by "Last updated" only sorts tasks *within* project groups, failing to reorder the projects themselves in the sidebar.
3. **[Issue #4003](https://github.com/openai/codex/issues/4003) [bug, windows-os]**: *Mixed Line Endings on Windows.* A highly upvoted bug (72 👍) where Codex alters file line endings (CRLF vs LF) during patch application, causing messy VCS diffs on Windows machines.
4. **[Issue #28276](https://github.com/openai/codex/issues/28276) [bug, app]**: *Failed to archive conversation.* A desktop app bug preventing users from archiving chats, accompanied by the appearance of phantom, empty conversation threads.
5. **[Issue #35058](https://github.com/openai/codex/issues/35058) [bug, extension]**: *Codex Diff crashes in VS Code.* VS Code users on macOS are hitting "Oops, an error has occurred" whenever trying to view code diffs generated by Codex, rendering the visual review process unusable. 
6. **[Issue #31973](https://github.com/openai/codex/issues/31973) [bug, windows-os, remote]**: *Remote Control stuck in "Reconnecting...".* When Windows remote control drops connection to mobile devices, it permanently hangs without any auto-recovery mechanism.
7. **[Issue #26379](https://github.com/openai/codex/issues/26379) [bug, CLI, tool-calls]**: *Malformed tool_search_call arguments.* The Codex CLI is persisting corrupted arguments during WSL sessions, resulting in HTTP 400 errors and breaking the ability to resume previous sessions.
8. **[Issue #32533](https://github.com/openai/codex/issues/32533) [bug, CLI, connectivity]**: *Responses Lite stranding sessions.* Changing reasoning effort mid-session blocks WebSocket requests until context compaction occurs, stalling CLI workflows. 
9. **[Issue #34471](https://github.com/openai/codex/issues/34471) [bug, computer-use]**: *Computer Use fails on macOS 26.* The Computer Use plugin cannot load `@oai/sky` environments because `nodeRepl.env` returns empty on Apple's latest macOS 26 update.
10. **[Issue #29593](https://github.com/openai/codex/issues/29593) [bug, windows-os, app]**: *Corrupted local state causes restart loop.* The Windows desktop app repeatedly crashes on launch because `chat_processes.json` becomes filled with NUL bytes.

### 4. Key PR Progress
1. **[PR #29752](https://github.com/openai/codex/pull/29752)**: Integrates an experimental proxy-owned *credential broker*. This is a major architectural security update, allowing Codex core to securely replace real credentials with dummy values for managed child processes.
2. **[PR #35267](https://github.com/openai/codex/pull/35267)**: *Hardens network approval cancellation and concurrency*. Enforces strict scoping for network approvals per execution turn and safely cancels denied network executions, improving local security.
3. **[PR #35264](https://github.com/openai/codex/pull/35264)**: *Signs bundled macOS helper binaries*. Fixes a workflow issue where bundled tools like `rg` and `zsh` were bypassing macOS notarization checks, which will prevent Gatekeeper warnings.
4. **[PR #31810](https://github.com/openai/codex/pull/31810)**: *Pipelines ancestor discovery*. Brings significant performance improvements to remote project startup by parallelizing repository root markers and `.agents/skills` directory checks.
5. **[PR #31782](https://github.com/openai/codex/pull/31782)**: *Bounds stdio JSON-RPC frame size*. Protects the CLI from out-of-memory crashes by enforcing a 64 MiB ceiling on incoming JSON-RPC frames from misbehaving stdio servers.
6. **[PR #29845](https://github.com/openai/codex/pull/29845)**: *Windows unified-exec resolution*. Lays the groundwork for a unified Windows executable launching system by introducing explicit application path plumbing.
7. **[PR #35364](https://github.com/openai/codex/pull/35364)**: *Bounds Code Mode metadata headers*. Prevents unbounded HTTP header growth by omitting unbounded tool-name mappings from direct compatibility headers.
8. **[PR #31582](https://github.com/openai/codex/pull/31582)**: *Exposes thread-selected skills*. Improves the `skills/list` API to include skills from executor capability roots selected by specific threads, making tool invocation much more reliable.
9. **[PR #35280](https://github.com/openai/codex/pull/35280)**: *Fixes plugin MCP filtering*. Ensures plugin MCP servers are left untouched when no allowlists are configured, preventing accidental blocking of valid Model Context Protocol servers.
10. **[PR #35275](https://github.com/openai/codex/pull/35275)**: *Traces remote exec-server setup*. Adds vital telemetry spans for remote connection, Noise, and WebSocket rendezvous stages, making remote agent debugging significantly easier.

### 5. Feature Request Trends
- **Transparent Quota & Limit Management**: Developers are asking for deterministic rate limits to plan heavy agentic workflows (Issue #9508). Additionally, there is a push for better management and visibility into local execution states (Issue #29593).
- **Project-Level Skill Repositories**: Users want the ability to link external or workspace-specific Git repositories containing custom skills, so they are automatically loaded per-project rather than relying purely on global `~/.codex/skills` (Issue #21907, Issue #13174).
- **TUI Keybinding Customization**: Users are requesting the ability to swap semantic meanings for keys like `TAB` and `ENTER` to better handle "Steering" vs "Queuing" model inputs (Issue #13044).

### 6. Developer Pain Points
- **Windows OS Instability**: Windows users are bearing the brunt of desktop app bugs today. High-severity issues include permanent UI flickering, inaccessible remote control pairing to Android, and destructive local file corruption (`chat_processes.json` becoming all NULs). 
- **Non-deterministic Rate Limits**: The arbitrary nature of weekly rate-limit resets is causing massive frustration for Pro/Plus users who carefully ration their API/Codex usage. Mid-task lockouts are frequent.
- **Diff & Review Tooling Crashes**: The VS Code extension is currently unstable when rendering full Review/Diff pages generated by Code Mode, forcing developers to rely purely on inline diffs or CLI output to review agent commits.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the community digest for the Gemini CLI project based on the last 24 hours of GitHub activity.

# Gemini CLI Community Digest - 2026-07-26

## 1. Today's Highlights
The past 24 hours saw significant engineering momentum focused on autonomous pipelines and agent reliability, with no new official releases shipped. A massive influx of "caretaker" and "pr-generator" internal infrastructure PRs indicates a major push toward automated issue resolution and AI-driven self-improvement pipelines. Additionally, the community and maintainers remain highly active in addressing subagent stability, terminal UI bugs, and Auto Memory privacy enhancements.

## 2. Releases
**None.** No new versions were released in the last 24 hours.

## 3. Hot Issues
The community and maintainers are heavily focused on agent reliability, context management, and security.

1. **Subagent false success reporting ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))**
   The `codebase_investigator` agent falsely reports success when it actually hits its `MAX_TURNS` limit. This hides interruptions from the user, breaking trust in autonomous task completion.
2. **Generalist agent hanging ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409))**
   Users report the generalist agent hanging indefinitely during simple file operations. Instructing the model not to defer to subagents currently serves as the only workaround.
3. **AST-aware file reading investigation ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))**
   Maintainers are investigating the impact of AST-aware tools for codebase mapping. This could drastically reduce token noise and misaligned reads by allowing the agent to pinpoint exact method bounds.
4. **Subagent permission bypasses ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093))**
   Since v0.33.0, users report subagents executing without permission despite being explicitly disabled in local and global configurations.
5. **Shell command execution deadlocks ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))**
   The CLI occasionally hangs on "Awaiting user input" after executing simple shell commands, requiring users to manually interrupt the terminal.
6. **Security & redaction in Auto Memory ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525))**
   Currently, local transcripts are sent to the extraction model before redaction. This issue proposes adding deterministic, pre-context secret redaction to prevent accidental API key exposure.
7. **Auto Memory infinite retries ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522))**
   The memory extraction agent indefinitely retries parsing "low-signal" sessions because they are not properly marked as processed, causing unnecessary background compute.
8. **Poor subagent/skill utilization ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968))**
   The model rarely autonomously invokes custom skills (like `git` or `gradle`), requiring explicit user prompting.
9. **API Errors with >128 Tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))**
   Users integrating heavy external tooling encounter 400 errors when the agent scope exceeds 128 available tools, highlighting a need for dynamic tool filtering.
10. **Browser agent ignores config overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267))**
    The `BrowserManager` fails to respect project-level `settings.json` overrides (such as `maxTurns`), causing unpredictable browser automation behavior.

## 4. Key PR Progress
Today's PRs highlight a balance between critical CLI bug fixes and the rollout of massive internal automation frameworks.

1. **Bound shell command outputs ([PR #28401](https://github.com/google-gemini/gemini-cli/pull/28401))**
   Fixes a major token-burn issue where massive shell outputs (e.g., verbose build logs, `find /`) were injected directly into the model context.
2. **MCP OAuth Token Refresh Fix ([PR #28481](https://github.com/google-gemini/gemini-cli/pull/28481))**
   Resolves an issue where MCP servers configured via OAuth discovery deleted stored credentials upon refresh, forcing re-auth loops.
3. **Infinite Auth Loop & Memory Leak Fix ([PR #28348](https://github.com/google-gemini/gemini-cli/pull/28348))**
   Addresses `MaxListenersExceededWarning` and a critical infinite authentication loop on Windows.
4. **A2A Server Path Traversal Defense ([PR #28353](https://github.com/google-gemini/gemini-cli/pull/28353))**
   Implements containment checks in the restore command to prevent path traversal (`../../../etc/passwd`) exploits in the A2A server.
5. **SSR Code Generation Pipeline Suite ([PR #28432](https://github.com/google-gemini/gemini-cli/pull/28342), [PR #28433](https://github.com/google-gemini/gemini-cli/pull/28433), [PR #28434](https://github.com/google-gemini/gemini-cli/pull/28434))**
   A series of large PRs introducing an end-to-end pipeline leveraging Firestore locking, containerized workers, and Antigravity agents to autonomously generate PRs from GitHub issues.
6. **Caretaker Agent Evaluation Framework ([PR #28530](https://github.com/google-gemini/gemini-cli/pull/28530), [PR #28532](https://github.com/google-gemini/gemini-cli/pull/28532))**
   Introduces a parallel Git worktree benchmark runner and "LLM-as-a-Judge" rubric to evaluate the automated issue triage system.
7. **CRLF to LF Normalization ([PR #28531](https://github.com/google-gemini/gemini-cli/pull/28531))**
   Fixes a UI bug where side-by-side diffs in Gemini Code Assist failed to highlight changes on Windows due to line-ending mismatches.
8. **Nightly Release CI Retry ([PR #28534](https://github.com/google-gemini/gemini-cli/pull/28534))**
   Adds logic to retry `npm dist-tag rm` during nightly releases, fixing a race condition with Wombat/npm publishing.

## 5. Feature Request Trends
*   **Advanced Codebase Parsing (AST):** Strong momentum toward AST-aware tools rather than relying purely on POSIX bash commands for code exploration, aiming to reduce token usage and increase precision (Issues #22745, #22746).
*   **Zero-Dependency OS Sandboxing:** Requests to leverage the model's native bash capabilities securely without relying on heavy external container setups (Issue #19873).
*   **Subagent Observability & Control:** Users want better visibility into subagent trajectories (e.g., via `/chat share`) and stricter enforcement of tool availability limits to prevent context overflow (Issues #22598, #24246).
*   **Self-Awareness for the CLI:** Requests for the CLI to natively understand its own flags, hotkeys, and limitations so it can guide users without failing (Issue #21432).

## 6. Developer Pain Points
*   **Agent Deadlocks & Hanging:** The most frustrating user experience is the CLI hanging indefinitely—either waiting for phantom user input after shell execution, or locking up completely when deferring to generalist subagents (Issues #25166, #21409).
*   **Model Executing Destructive Commands:** Developers are concerned about the agent using destructive git commands (`git reset --force`) or creating scattered temporary scripts instead of using native file modification tools (Issues #23571, #22672).
*   **Auto Memory Privacy & Noise:** There is growing anxiety around the Auto Memory system reading local transcripts and accidentally exposing API keys or secrets before redaction occurs. Additionally, the memory agent repeatedly scanning "junk" sessions creates unnecessary background noise (Issues #26525, #26522).
*   **Symlink & OS Compatibility Issues:** Basic developer workflows like symlinking agent configurations (Issue #20079) and avoiding terminal UI flicker/corruption on resize or external editor exits (Issues #21924, #24935) remain prevalent pain points.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest (2026-07-26)

## 1. Today's Highlights
The past 24 hours saw no new releases or merged features, but the community reported several critical regressions in recent v1.0.7x updates. Major themes include severe session management bottlenecks (OOM crashes, orphaned worktrees) and broken core functionalities, such as the inability to interrupt active agent runs and failures in the `/ask` command.

## 2. Releases
*No new releases or version updates in the last 24 hours.*

## 3. Hot Issues
Here are the most impactful issues updated or created in the last 24 hours:

*   **[#4251 Session resume OOMs in 1.0.74](https://github.com/github/copilot-cli/issues/4251)** [OPEN]: A critical regression in v1.0.74 causes massive memory spikes (3–4× normal) and CPU locking when resuming large, long-lived sessions, rendering older sessions unresumable.
*   **[#4183 Auto-compaction fails to prevent CAPI 5 MB failures](https://github.com/github/copilot-cli/issues/4183)** [OPEN]: Long-running, tool-heavy sessions are hitting a hard 5 MB API body limit. The context memory auto-compaction feature isn't aggressively trimming tool history to prevent this hard crash. (👍 10)
*   **[#4235 Ctrl+C no longer interrupts active agent runs](https://github.com/github/copilot-cli/issues/4235)** [CLOSED]: A highly disruptive regression where pressing `Ctrl+C` during an active agent run clears the input line but fails to actually cancel the process.
*   **[#4253 `/ask` frequently returns no result](https://github.com/github/copilot-cli/issues/4253)** [OPEN]: Users on v1.0.75 report that the `/ask` command silently fails, executing without throwing an error but returning completely empty responses.
*   **[#4241 Password masking causes token waste](https://github.com/github/copilot-cli/issues/4241)** [OPEN]: A security feature is backfiring; when dummy passwords are masked from the agent, the model burns tokens running Python scripts to read the raw underlying bytes, assuming it's an error.
*   **[#4246 `archive_session` times out and orphans worktrees](https://github.com/github/copilot-cli/issues/4246)** [OPEN]: Archiving large repository worktrees times out after 60 seconds, abandoning the session and consuming massive amounts of disk space without a safe recovery path.
*   **[#4252 Stale model config overwrites `settings.json`](https://github.com/github/copilot-cli/issues/4252)** [OPEN]: Upon exiting an interactive session, the CLI overwrites local settings with its launch-time in-memory model, silently reverting any manual config edits made during the session.
*   **[#4163 Zombie processes accumulate under Copilot PID](https://github.com/github/copilot-cli/issues/4163)** [CLOSED]: v1.0.71 introduced a severe Linux platform bug where finished child processes are not reaped, accumulating as zombies and leaking memory heavily (~2/min). 
*   **[#4247 Plugin marketplace add fails to persist](https://github.com/github/copilot-cli/issues/4247)** [OPEN]: Adding a marketplace via the CLI falsely reports success, but the registration is never written to disk, causing immediate "not found" errors on subsequent queries.
*   **[#4248 `/pr` fails with SSH host aliases](https://github.com/github/copilot-cli/issues/4248)** [OPEN]: The `/pr` command breaks for repositories utilizing SSH host aliases in their `~/.ssh/config`, restricting native GitHub integration for advanced Git users.

## 4. Key PR Progress
Only two pull requests saw activity in the last 24 hours, both of which were closed without merging:

*   **[#23 Create monad.yml](https://github.com/github/copilot-cli/pull/23)** [CLOSED]: An older, static PR regarding a "mystic standards" design file, closed by maintainers.
*   **[#4228 Withdrawn: incorrect scope for #3534](https://github.com/github/copilot-cli/pull/4228)** [CLOSED]: The author withdrew this PR after realizing the changes incorrectly targeted documentation rather than the private clipboard runtime implementation.

## 5. Feature Request Trends
Distilling recent issues, developers are pushing for better integration and contextual awareness:
*   **Cross-Platform Command Parity:** Users want CLI features natively supported in IDE environments. For example, **[#4244]** requests that the `/rename` command be made available—and invokable by the agent—within VS Code's hosted agent sessions.
*   **Smarter Context & Security Handling:** Developers are asking for more robust handling of workspace variables. **[#4241]** highlights the need for an agent-aware password-masking mechanism that doesn't trigger false positive debugging loops.

## 6. Developer Pain Points
The community has expressed mounting frustration with system resource management and architectural regressions in the 1.0.7x release cycle:
*   **Session & Memory Leaks:** In addition to the OOM regression (**[#4251]**) and orphaned worktrees (**[#4246]**), developers are routinely battling infrastructure limits. The 5 MB CAPI payload limit (**[#4183]**) shows that heavy tool usage quickly breaks session continuity.
*   **Broken Fundamentals:** Advanced developers are frustrated when standard workflows break. The inability to kill rogue agents with `Ctrl+C` (**[#4235]**), silent failures in core commands like `/ask` (**[#4253]**), and broken native Git configurations like SSH aliases (**[#4248]**) are severely impacting daily productivity.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the community digest for Kimi Code CLI.

# Kimi Code CLI Community Digest (2026-07-26)

## 1. Today's Highlights
The past 24 hours saw no new official releases, but development remains highly active under the hood. Core contributor Nas01010101 successfully merged three critical fixes addressing session context truncation, frozen system prompts, and file re-upload bugs. Meanwhile, the community is actively discussing a highly upvoted feature request for remote session control (#1282), alongside a newly reported infinite loop bug affecting v1.44.0 (#2557).

## 2. Releases
*No new releases in the last 24 hours.*

## 3. Hot Issues
1. **[OPEN] [enhancement] Feature Request: Remote Control - Continue local sessions from any device** (Issue [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282))
   *Why it matters:* As CLI tools become deeply integrated into complex local environments, developers are increasingly looking for workflow mobility. This 5-month-old request (16 upvotes) asks for the ability to hand off a local terminal session to a mobile device or browser. 
2. **[OPEN] [bug] Dead Loop** (Issue [#2557](https://github.com/MoonshotAI/kimi-cli/issues/2557))
   *Why it matters:* A fresh, zero-comment bug report on v1.44.0 where the CLI gets stuck in an infinite loop during a Kimi Code subscription session. This requires immediate triage as it completely blocks user execution.

*(Note: Only 2 issues saw activity in the last 24 hours.)*

## 4. Key PR Progress
1. **[CLOSED] fix(session): align fork/undo context truncation to wire turns** (PR [#2520](https://github.com/MoonshotAI/kimi-cli/pull/2520))
   *Progress:* Merged. Resolves a critical issue where fork/undo operations would truncate context incorrectly. It includes regression tests and fixes root causes for history mismatches.
2. **[CLOSED] fix(app): refresh stale frozen system prompt on session resume** (PR [#2519](https://github.com/MoonshotAI/kimi-cli/pull/2519))
   *Progress:* Merged. Fixes an annoyance where resuming a session would ignore newly added skills in `~/.kimi/skills/` or recent `AGENTS.md` edits due to an unconditionally adopted frozen prompt.
3. **[CLOSED] fix(web): persist uploads .sent marker so restarts do not re-send files** (PR [#2518](https://github.com/MoonshotAI/kimi-cli/pull/2518))
   *Progress:* Merged. Resolves a context pollution issue in `kimi web` where server restarts caused previously uploaded images and files to be resent with the next prompt.
4. **[OPEN] fix(tests): improve Windows cross-platform test compatibility** (PR [#2558](https://github.com/MoonshotAI/kimi-cli/pull/2558))
   *Progress:* Submitted. A minor but important fix addressing Windows-specific test failures caused by `\n` to `\r\n` conversions during file writes.

*(Note: Only 4 PRs saw activity in the last 24 hours.)*

## 5. Feature Request Trends
* **Seamless Workflow Continuity:** Developers want to decouple the CLI execution environment from a single physical terminal. The request to remote-control local sessions from mobile/web interfaces (#1282) highlights a strong desire for flexible, device-agnostic context management.

## 6. Developer Pain Points
* **Session State & Resume Reliability:** A major source of friction is how the CLI persists and resumes state. Developers are frustrated by stale system prompts overriding new configurations (#2420), history/context shifting incorrectly after forks or undos (#2517, #1974), and duplicated file uploads polluting the context window upon restart (#2413).
* **Cross-Platform Test Flakiness:** Windows compatibility remains a recurring thorn in the development lifecycle, particularly regarding newline character handling in automated tests (#2558).
* **Unrecoverable Execution Loops:** Runtime stability issues, such as the newly reported "Dead Loop" in v1.44.0 (#2557), present critical blockers that require robust fail-safes.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for July 26, 2026.

### 1. Today's Highlights
OpenCode rolled out v1.18.5, bringing critical stability improvements to Mistral and Claude integrations, alongside fixes for OpenAI Responses phase handling. The community was highly active around Desktop UI preferences and critical CLI performance bottlenecks. Meanwhile, contributors submitted major performance enhancements, including a lock-free concurrency refactor and a massive image-pasting optimization for the TUI.

### 2. Releases
*   **[v1.18.5](https://github.com/anomalyco/opencode/releases/tag/v1.18.5)**
    *   **AI Integrations:** Improved Claude adaptive thinking handling across more response shapes, preserved Mistral reasoning history across turns, and stabilized Mistral support.
    *   **Bugfixes:** Avoided OpenAI Responses phase handling that broke conversations and preserved grep symlink paths in search results.

### 3. Hot Issues
1.  **[#37012](https://github.com/anomalyco/opencode/issues/37012) [FEATURE]: Keep legacy layout option** - Users are pushing back on the new UI, requesting a toggle for the legacy layout due to its superior workspace accessibility.
2.  **[#32747](https://github.com/anomalyco/opencode/issues/32747) @ file mentions do not include files created after startup** - A highly impactful TUI bug where newly created files are missing from the `@` mention picker until an app restart, caused by a stale search state.
3.  **[#38789](https://github.com/anomalyco/opencode/issues/38789) [Bug] Desktop v1.18.5: UnsupportedContentType error on project reload** - A regression introduced in v1.18.5 causing project reload failures originating from the generated client SDK.
4.  **[#38791](https://github.com/anomalyco/opencode/issues/38791) Run loop can never exit when message ids are not time-sortable** - A severe bug where imported sessions with non-chronological IDs cause infinite loops until the provider returns a 400 error.
5.  **[#38801](https://github.com/anomalyco/opencode/issues/38801) message="exiting loop"** - TUI users utilizing various OpenAI APIs are experiencing persistent loop exits, rendering the interface unusable.
6.  **[#34442](https://github.com/anomalyco/opencode/issues/34442) Windows Desktop installer is broken offline** - Core tools like `grep` and `glob` fail on offline Windows machines because `ripgrep` is no longer bundled in the installer.
7.  **[#38837](https://github.com/anomalyco/opencode/issues/38837) CLI commands hang on startup** - Lightweight CLI commands (like `session list`) block for minutes because they share a heavy database initialization path (failing on 430MB databases).
8.  **[#38857](https://github.com/anomalyco/opencode/issues/38857) [SECURITY] Cryptominer deployed via unsecured `opencode web`** - A critical security warning: unauthenticated `opencode web` servers exposed on `0.0.0.0` are being actively compromised to deploy Monero cryptominers. 
9.  **[#38874](https://github.com/anomalyco/opencode/issues/38874) Multiple models failing with Internal Server Error** - A widespread provider outage on July 25 caused both free and Go tier models to consistently fail with HTTP 500 errors.
10. **[#36677](https://github.com/anomalyco/opencode/issues/36677) Core: long-lived V2 server enters persistent allocation loop** - The `opencode2 serve` process suffers from a memory leak, eating an entire CPU core and 1.3GB of RAM while idle.

### 4. Key PR Progress
1.  **[#38882](https://github.com/anomalyco/opencode/pull/38882) feat(tui): polish fastboot mode and make default** - Significantly reduces time-to-input by optimizing the TUI startup sequence.
2.  **[#38880](https://github.com/anomalyco/opencode/pull/38880) fix(tui): ~1800x times image pasting performance improvement** - Replaces slow shell spawning (`osascript`, `powershell`) with native clipboard APIs, massively speeding up image pasting.
3.  **[#38743](https://github.com/anomalyco/opencode/pull/38743) refactor(core): settle steps lock-free by joining tool fibers first** - A major architectural refactor that deletes 12 lock semaphores from the v2 runner, eliminating contention and making event settlement completely linear.
4.  **[#38877](https://github.com/anomalyco/opencode/pull/38877) feat: PTY-based interactive secure input for sudo/ssh** - Implements a secure UI prompt to intercept and reply to terminal password requests (sudo/ssh) seamlessly.
5.  **[#38862](https://github.com/anomalyco/opencode/pull/38862) feat(app): add pinned sidebar option** - Introduces a highly requested UI setting to permanently pin the sidebar, preventing accidental collapses.
6.  **[#38894](https://github.com/anomalyco/opencode/pull/38894) fix(native-llm): replace hardcoded provider gate** - Removes hardcoded blocks preventing Google, Bedrock, Azure, and OpenRouter from utilizing the optimized native LLM runtime.
7.  **[#38892](https://github.com/anomalyco/opencode/pull/38892) fix(ai): reconcile responses snapshots** - Safely reconciles streamed text and reasoning with authoritative terminal responses, preventing output duplication.
8.  **[#38900](https://github.com/anomalyco/opencode/pull/38900) tweak(core): simplify skill tool description** - Reduces token usage and improves model accuracy by condensing the Skill tool description.
9.  **[#38896](https://github.com/anomalyco/opencode/pull/38896) feat(opencode): expose POST /question/ask** - Expands plugin and SDK capabilities, allowing programmatic agents to initiate questions rather than just answer them.
10. **[#38889](https://github.com/anomalyco/opencode/pull/38889) feat(desktop): add OPENCODE_PROJECT_DIR env var** - Fixes CWD override issues on macOS, allowing plugins and project-level configs to resolve paths correctly.

### 5. Feature Request Trends
*   **UI Flexibility & Customization:** There is a strong demand for UI toggles, specifically to retain the "legacy layout" (#37012) and pin sidebars (#38862). Users also frequently request basic interface scaling, such as adjustable font sizes (#38884).
*   **LAN & Self-Hosted Model Support:** Developers want better support for local AI networks, evidenced by requests for local LAN provider auto-discovery (#27554) and better connectivity to localized Ollama servers (#38854).
*   **Enterprise & Billing Features:** International business users are requesting annual billing cycles with official invoice/receipt generation (fapiao) for corporate expensing (#20252).
*   **Robust Session Management:** Users desire better visibility into active sessions, such as displaying the session name directly in the TUI status bar (#38881) to avoid context switching.

### 6. Developer Pain Points
*   **Severe Performance Bottlenecks:** The CLI and Desktop apps are struggling with heavy initialization paths. Simple commands hang for minutes on large databases (#38837), and the V2 server suffers from severe memory leaks (#36677).
*   **Fragile AI Loops & Streaming:** Developers pulling in third-party sessions or using specific OpenAI configurations are hitting persistent infinite loops and silent failures where errors are masked as empty `<task_result>` blocks (#38866, #38791, #38801).
*   **Offline / Standalone Degradation:** Recent builds have compromised offline usability. The omission of `ripgrep` from Windows installers (#34442) breaks fundamental search tools for air-gapped developer machines.
*   **Security Defaults:** Exposing the web server on `0.0.0.0` without password protection by default led to active cryptominer deployments (#38857), highlighting frustration over unsafe default configurations for developer tools.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for July 26, 2026.

### 1. Today's Highlights
Pi officially rolled out **v0.82.1**, headlined by the integration of Claude Opus 5 across Anthropic and Amazon Bedrock, bringing adaptive thinking and prompt caching capabilities. The community was highly active in hardening the agent's reliability, submitting critical fixes for context compaction failures, CPU bottlenecks during streaming, and mid-session model switching bugs. Additionally, significant infrastructural improvements landed via PRs to enable offline testing and introduce a new evaluation harness.

### 2. Releases
*   **[v0.82.1](https://github.com/earendil-works/pi/releases/tag/v0.82.1)**
    *   **Claude Opus 5 Integration:** Added support for Anthropic's new default coding model on both Anthropic and Amazon Bedrock providers. Includes support for adaptive thinking (with `xhigh` tiers), inference profiles, and prompt caching.

### 3. Hot Issues
1.  **[#6768: Compaction using Copilot Enterprise not possible](https://github.com/earendil-works/pi/issues/6768)** - Users on Copilot Enterprise licenses are hitting 421 Misdirected Request errors during context compaction. This is a high-impact blocker (11 upvotes) for enterprise users relying on automated context management.
2.  **[#6665: TUI pins a full core while streaming](https://github.com/earendil-works/pi/issues/6665)** - A performance bottleneck where the TUI consumes ~100% of a CPU core during long streaming sessions. The root cause is identified as an uncached `Intl.Segmenter` triggering per-chunk Markdown rebuilds.
3.  **[#7067 & #7065: Model switch breaks session](https://github.com/earendil-works/pi/issues/7067)** - Switching models mid-session (e.g., Qwen to GPT) causes silent failures and HTML gateway errors because Pi doesn't validate context size limits or convert thinking blocks for the new target model. 
4.  **[#7090: Regenerate shrinkwrap for brace-expansion DoS](https://github.com/earendil-works/pi/issues/7090)** - Security flag ensuring `npm-shrinkwrap.json` is updated to `brace-expansion@5.0.8+` to mitigate a fatal memory-exhaustion vulnerability (CVE-2026-14257).
5.  **[#7020: Pi doesn't continue after compaction](https://github.com/earendil-works/pi/issues/7020)** - Long-running coordinator sessions are hanging post-compaction, forcing manual intervention. This disrupts autonomous agentic workflows.
6.  **[#5990: TUI flickers with tall confirm/select dialogs](https://github.com/earendil-works/pi/issues/5990)** - UI renders continuously when a dialog exceeds the terminal viewport height, creating an annoying flickering experience for users with smaller terminal windows.
7.  **[#7048: Compaction summary truncated mid-word](https://github.com/earendil-works/pi/issues/7048)** - If summarization hits the token limit (stopReason: 'length'), Pi incorrectly persists a truncated summary without warning the user or retrying.
8.  **[#7069: "Validation failed for tool 'bash'" errors](https://github.com/earendil-works/pi/issues/7069)** - A regression introduced in v0.82.0 causing persistent validation failures for the native `bash` tool, breaking basic shell command executions.
9.  **[#7115: OpenRouter Inkling capped at 4K output](https://github.com/earendil-works/pi/issues/7115)** - Built-in metadata artificially caps the `thinkingmachines/inkling` model output at 4K tokens due to a failure to parse aggregate output metadata properly.
10. **[#7105: `--provider openai` ignores `OPENAI_API_BASE`](https://github.com/earendil-works/pi/issues/7105)** - The CLI currently hardcodes OpenAI endpoints, breaking compatibility with OpenAI-compatible third-party providers like Moonshot/Kimi.

### 4. Key PR Progress
1.  **[#7081: feat(ai): support Claude Opus 5 on Bedrock](https://github.com/earendil-works/pi/pull/7081)** - Configures Opus 5 requirements for Bedrock, specifically enforcing adaptive thinking and cleaning up unhelpful serialized Node stream errors.
2.  **[#7111: feat: support durable external tool results](https://github.com/earendil-works/pi/pull/7111)** - Introduces a `defer: true` state for tools, allowing session hosts to pause execution and wait for typed results from external processes without fabricating tool-result messages.
3.  **[#7031: fix(coding-agent): run tests offline by default](https://github.com/earendil-works/pi/pull/7031)** - Major CI/CD improvement turning on offline mode by default for all tests to prevent flaky network dependencies.
4.  **[#7114: Add manual redirect URL fallback to OpenRouter login](https://github.com/earendil-works/pi/pull/7114)** - Fixes OAuth login flows for developers using Pi over SSH or inside containers by allowing manual pasting of the callback URL.
5.  **[#7103: fix(coding-agent): support concurrent user bash cancellation](https://github.com/earendil-works/pi/pull/7103)** - Improves UX by allowing users to cleanly cancel overlapping or long-running bash commands via RPC without breaking the session.
6.  **[#7116: fix(tui): truncate over-width lines](https://github.com/earendil-works/pi/pull/7116)** - Prevents the TUI renderer from crashing the entire session when a tool outputs a line wider than the terminal viewport.
7.  **[#7112: fix(coding-agent): normalize path separators](https://github.com/earendil-works/pi/pull/7112)** - Cross-platform UI fix ensuring the terminal footer displays uniform forward slashes (`~/project`) instead of OS-native backslashes on Windows.
8.  **[#7072: fix(coding-agent): cache llama.cpp model catalog](https://github.com/earendil-works/pi/pull/7072)** - Fixes a race condition where Pi wouldn't properly apply the default llama.cpp model at startup due to slow async model refreshing.
9.  **[#7061: fix(openai-completions): handle array content](https://github.com/earendil-works/pi/pull/7061)** - Fixes parsing for non-standard streaming responses (like Databricks Qwen3) that return typed arrays instead of standard strings when tools are present.
10. **[#7085 & #7117: Add eval harness and extension creation eval](https://github.com/earendil-works/pi/pull/7085)** - Implements a new `vitest-evals` workspace to run smoke tests and specifically evaluate the agent's ability to create, reload, and invoke Pi extensions.

### 5. Feature Request Trends
*   **Custom Provider Support:** A strong demand for Pi to treat OpenAI/Anthropic APIs as generic OpenAI-compatible endpoints. Users want to override base URLs easily and forward session-affinity headers to enterprise LLM Gateways ([#7104](https://github.com/earendil-works/pi/issues/7104), [#7105](https://github.com/earendil-works/pi/issues/7105)).
*   **Granular Context Control:** Developers are asking for manual overrides for tool output truncation to save context window space, which is especially crucial for smaller, local models ([#7066](https://github.com/earendil-works/pi/issues/7066)).
*   **Cost Transparency:** Requests to surface pricing metadata directly in the UI, such as a per-token cost preview column in the model selector ([#7101](https://github.com/earendil-works/pi/issues/7101)) and accurate cost reporting for dynamic routing aliases ([#7109](https://github.com/earendil-works/pi/issues/7109)).
*   **Remote/Headless Operations:** A trend of requests focused on using Pi without a local browser, highlighting needs like manual OAuth URL pasting and avoiding UI freezes when remote catalogs are unreachable ([#7113](https://github.com/earendil-works/pi/issues/7113)).

### 6. Developer Pain Points
*   **Context Compaction Instabilities:** Compaction remains the largest source of friction. Users report frequent hangs, broken sessions post-compaction, and summaries getting truncated mid-word without error handling.
*   **Mid-Session Model Switching:** Switching between models with different architectures (e.g., thinking vs. non-thinking) or context limits (272K vs 1M) frequently causes silent failures, HTML errors, or broken tool validation.
*   **TUI Performance & Fragility:** Rendering is consuming too much CPU during active streams due to markdown rebuilds. Furthermore, the core UI is prone to crashing from unexpected data shapes (like oversized permission prompts or tall dialog boxes).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-07-26.

### 1. Today's Highlights
The Qwen Code team rolled out the `v0.21.0-nightly.20260725` release, accompanied by significant architectural improvements to the Web Shell, agent tools, and CI triage workflows. Key developments include the introduction of dynamic model grade selection for subagents and a major overhaul of the `/verify` triage lane to ensure higher PR quality. 

### 2. Releases
*   **v0.21.0-nightly.20260725.1183a4c82** ([Release Notes](https://github.com/QwenLM/qwen-code/releases))
    *   Includes a CLI fix to measure insight days and hours consistently in local time ([PR #7670](https://github.com/QwenLM/qwen-code/pull/7670)).
    *   Features various autofix and core framework refactors integrated over the past 24 hours.

### 3. Hot Issues
1.  **[P1] QQ Bot Session Restore Broken** ([#7721](https://github.com/QwenLM/qwen-code/issues/7721)): A critical bug where `AcpBridge.loadSession()` returns undefined due to a missing `sessionId` in the ACP schema, breaking session restores after bridge restarts. 
2.  **CLI Terminal Scrolling Bug on v0.21.0** ([#7713](https://github.com/QwenLM/qwen-code/issues/7713)): Users report that the terminal automatically scrolls up by one line per keystroke due to an off-by-one error in prompt line height calculation in the new update.
3.  **Missing Token Usage UI** ([#7719](https://github.com/QwenLM/qwen-code/issues/7719)): Developers are frustrated by the lack of real-time token consumption and quota percentage indicators in the CLI interface.
4.  **Subagent Model Grade Selection** ([#7685](https://github.com/QwenLM/qwen-code/issues/7685)): A highly discussed proposal to allow AI to dynamically select model grades (e.g., small/medium/high) for spawned subagents to optimize cost and performance.
5.  **Overwritten TUI Replies** ([#5800](https://github.com/QwenLM/qwen-code/issues/5800)): A persistent P2 UI bug where the last line of assistant replies taller than the terminal view is overwritten upon completion in Static render mode.
6.  **Broken Skill Auto-Complete** ([#7717](https://github.com/QwenLM/qwen-code/issues/7717): Continuous skill mentions (e.g., `/skill1 /skill2`) fail to trigger auto-complete after the first skill.
7.  **IME Candidate Box Misalignment on macOS** ([#7684](https://github.com/QwenLM/qwen-code/issues/7684): In Command mode, multi-line status lines cause the Input Method Editor (IME) candidate box to appear far from the text cursor.
8.  **Unity MCP Connection Failure** ([#7697](https://github.com/QwenLM/qwen-code/issues/7697): The VS Code extension fails to execute Unity MCP tasks, whereas competing tools like Claude Code handle it flawlessly.
9.  **Proposal: External Context Provider** ([#7585](https://github.com/QwenLM/qwen-code/issues/7585): A request for a direct profile allowing interactive CLI processes to retrieve shared context from external admin-bound memory services.
10. **Read-Only Pinned Memory** ([#6801](https://github.com/QwenLM/qwen-code/issues/6801): Users want a `pinned/` subdirectory in the memory folder to protect critical read-only files from being consolidated or altered by the `/dream` feature.

### 4. Key PR Progress
1.  **Subagent Model Selection** ([#7702](https://github.com/QwenLM/qwen-code/pull/7702)): Implements the requested dynamic model parameter for the Agent tool, allowing AI to pick user-defined model grades at spawn time.
2.  **Deep-Verification Triage Lane** ([#7710](https://github.com/QwenLM/qwen-code/pull/7710)): Introduces a sandboxed `@qwen-code /verify` command that runs A/B load-bearing proofs and vacuity checks against PR builds.
3.  **System Ripgrep Fallback** ([#7203](https://github.com/QwenLM/qwen-code/pull/7203)): Resolves ARM64 page-size compatibility issues by verifying bundled `rg` execution and falling back to the system's `ripgrep` if it fails.
4.  **Web Shell Color Parsing** ([#7620](https://github.com/QwenLM/qwen-code/pull/7620): Fixes `parseAnsi` rendering in the Web Shell by correctly consuming 256-color and truecolor SGR sequence arguments.
5.  **Goal v3 Worker Tools** ([#7729](https://github.com/QwenLM/qwen-code/pull/7729)): Adds read/update tools exposing current Goal snapshots and bounded evidence catalogs for exact-turn contexts.
6.  **Plan Argument Redaction** ([#7197](https://github.com/QwenLM/qwen-code/pull/7197)): Improves context hygiene by rewriting the `plan` argument in history entries with a short pointer after `exit_plan_mode` is approved.
7.  **Extension Subagent Protection** ([#7245](https://github.com/QwenLM/qwen-code/pull/7245): Prevents `updateSubagent` from modifying read-only, extension-provided agents, fixing an core security/bypass loophole.
8.  **Hardcoded Rate-Limit Delays** ([#7658](https://github.com/QwenLM/qwen-code/issues/7658)) (Closed Issue/PR context): Adjustments to make the hardcoded 60s/120s/240s SSE streaming rate-limit retry delays configurable.
9.  **E2E Test Deflaking** ([#7725](https://github.com/QwenLM/qwen-code/pull/7725)): Migrates flaky end-to-end tool-control test cases to a `fake-openai-server` to ensure deterministic CI results.
10. **WeChat Credential Security** ([#7726](https://github.com/QwenLM/qwen-code/pull/7726): Fixes a file permission race condition by creating WeChat account credential files with strict permissions from the start.

### 5. Feature Request Trends
*   **Granular Subagent Control & Routing:** Users are heavily requesting ways to dynamically assign model "grades" or capabilities to subagents at runtime, rather than relying on global defaults ([#7685](https://github.com/QwenLM/qwen-code/issues/7685)).
*   **Context & Memory Management:** There is a strong demand for advanced memory architectures, specifically "pinned" read-only files ([#6801](https://github.com/QwenLM/qwen-code/issues/6801)) and external context providers ([#7585](https://github.com/QwenLM/qwen-code/issues/7585)) to manage enterprise knowledge securely.
*   **UI Observability:** Developers want better visibility into performance metrics and token usage directly inside the interface, pushing for features like TPS/TTFT tracking in `/stats` ([#4252](https://github.com/QwenLM/qwen-code/issues/4252)) and overall quota indicators ([#7719](https://github.com/QwenLM/qwen-code/issues/7719)).
*   **Cross-Platform Integration Stability:** Consistent demand for robust third-party integrations, notably for Unity MCP in VS Code ([#7697](https://github.com/QwenLM/qwen-code/issues/7697)) and portable math/markdown rendering across terminal types ([#7700](https://github.com/QwenLM/qwen-code/issues/7700)).

### 6. Developer Pain Points
*   **Terminal Rendering Quirks:** The CLI's Text User Interface (TUI) remains sensitive to terminal environments. The v0.21.0 update introduced a scrolling bug on keystrokes ([#7713](https://github.com/QwenLM/qwen-code/issues/7713)), and long-standing issues with multi-line rendering and IME misalignment on macOS persist ([#5800](https://github.com/QwenLM/qwen-code/issues/5800), [#7684](https://github.com/QwenLM/qwen-code/issues/7684)).
*   **MCP & Extension Fragility:** Connecting to external tools via MCP (like Unity) or installing nested GitHub extensions often fails silently or lacks clear error messaging, causing setup friction ([#7697](https://github.com/QwenLM/qwen-code/issues/7697), [#7568](https://github.com/QwenLM/qwen-code/issues/7568)).
*   **Opaque Resource Consumption:** Without token usage metrics visible in the CLI, developers find it difficult to trust and manage their API quotas effectively during complex agent loops ([#7719](https://github.com/QwenLM/qwen-code/issues/7719)).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the technical community digest for DeepSeek TUI (CodeWhale) based on the July 26, 2026 data.

### 1. Today's Highlights
The community is heavily focused on the upcoming **v0.9.2** release, with massive internal refactoring efforts landing to break apart the TUI's monolithic "god object" and reduce test boilerplate. There is a strong push toward true provider independence (fixing regressions where the CLI silently fell back to DeepSeek) and aggressive global localization (adding Hindi, Russian, Ukrainian, and Indonesian). Meanwhile, critical CI/release pipelines were stabilized to ensure Docker and Homebrew channels correctly sync with the latest v0.9.1 tag.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
Here are the 10 most noteworthy issues driving community and maintainer discussion:

*   **#4520 [ enhancement ]** – **Configurable session token breakdown:** Users are requesting a return to granular token metrics (input/cache/output) in the header bar, reverting a recent UI compaction that only showed a single cumulative total.
*   **#4829 [ bug ]** – **Config validation bricks the CLI:** A critical defect where the setup wizard writes non-DeepSeek models (e.g., GLM-5.2) to the config, but validation strictly rejects them at startup, rendering the tool unusable. 
*   **#3927 [ enhancement ]** – **Offline provider path:** The lack of a provider-independent offline "look around" mode frustrates new users. The community requests an explicit keyless route (Ollama/vLLM) during onboarding.
*   **#3314 [ cleanup ]** – **God object extraction:** The `App` struct in the TUI has ballooned to ~252 fields and ~236 methods. Maintainers are actively splitting this into owned submodules to save the codebase from unmaintainability.
*   **#4831 [ bug ]** – **Test suite config leakage:** Running the workspace test suite twice yields different results because tests are intermittently writing to the developer's *real* `~/.codewhale/config.toml`.
*   **#4683 [ bug ]** – **Intermittent DeepSeek API failures:** Users report flaky network errors (`https://api.deepseek.com/v1/chat/completions`) during prolonged sessions.
*   **#3928 [ bug ]** – **Constitution visibility:** The core base prompt ("constitution") lacks an in-app reader, and custom overrides fail silently without a specific environment flag.
*   **#4828 [ bug ]** – **macOS "underwater" shell breaks commands:** The new default terminal interaction system introduced in v0.9.0 breaks standard macOS commands (`open`, `osascript`) with "exit code -54".
*   **#4832 [ bug ]** – **Model resolution ignores config:** Even when configured for a different provider, the `codew model resolve` command completely ignores the config and falsely reports a DeepSeek fallback.
*   **#3091 & #3093 [ documentation ]** – **Localization parity:** The project is aggressively tracking website parity for its README locales, pushing to bring the main site up to speed with Japanese, Vietnamese, Korean, Spanish, and Portuguese translations.

### 4. Key PR Progress
The team merged significant architectural cleanups and bug fixes:

*   **[PR #4827] refactor(tui): extract App god-object state:** A massive but surgical PR that breaks the 7,200+ line `app.rs` into owned submodules without changing any behavior. 
*   **[PR #4806] refactor(tui): shared test fixtures:** Eliminates 87 heavily duplicated `TuiOptions` literals across 28 test modules, replacing them with a single shared test constructor.
*   **[PR #4830] fix(config): validate against active provider:** Directly resolves the #4829 brick bug, ensuring `default_text_model` validation checks against the user's actual provider rather than defaulting to DeepSeek.
*   **[PR #4765] fix(tui): provider onboarding navigable:** Fixes a UI trap where users on the xAI OAuth route hit a closed loop at startup, making the provider list visible and escapable.
*   **[PR #4826] docs(web): real product pages:** Replaces lazy link-outs on the docs index with fully fleshed-out product pages for Fleet, Sandbox, MCP, and Sub-agents.
*   **[PR #4804] fix(v0.9.2): audit cluster + TUI cleanups:** Lands a large cluster of unreleased v0.9.2 fixes, addressing constitution prefix logic and TUI list reliability.
*   **[PR #4801 & #4802] ci(release): recovery path for derived channels:** Fixes broken deployment pipelines, ensuring Homebrew and Docker containers finally pull the v0.9.1 release instead of lingering on v0.9.0.
*   **[PR #4762] docs(onboarding): add Surf testbed suite:** Introduces "Surf", a deterministic (no-LLM) testbed management suite to help contributors verify changes reliably.
*   **[PR #4798] ci: enforce issue linking:** Adds CI automation requiring every PR to explicitly close an issue or explain why it doesn't, combating repo backlog sprawl.
*   **[PR #4805] i18n(zh-Hans): update Chinese translations:** Synchronizes 17 recently lagging message keys in the Chinese locale back to parity with English.

### 5. Feature Request Trends
*   **Provider Agnosticism & Independence:** A clear trend of moving away from DeepSeek-hardcoded behaviors. Users want first-class support for local (vLLM, Ollama) and alternative models (GLM, Kimi) without the CLI silently forcing DeepSeek fallbacks.
*   **Deep Localization Expansion:** Maintainers are executing a massive global rollout. Upcoming locales actively being tracked include Hindi (requiring Devanagari shaping), Russian, Ukrainian, Indonesian, and Latin American Spanish.
*   **TUI Render Performance:** Heavy demand for refactoring how the TUI calculates tokens, parses markdown, and handles history. The goal is to eliminate synchronous file system calls and `O(N²)` markdown re-parsing during streaming.
*   **Refined Onboarding & Constitution UX:** Users want an easier offline sandbox mode and the ability to actually read, edit, and understand the system's "constitution" (base prompts) natively inside the app.

### 6. Developer Pain Points
The most glaring developer frustrations center around **DeepSeek-centric hardcoded limitations** breaking general usability—such as API URLs failing, models failing to resolve, and setups bricking the CLI because validation refuses non-DeepSeek model IDs. 

From an engineering perspective, **TUI performance degradation** is a recurring headache. Rendering functions are doing too much heavy lifting on the main thread (e.g., synchronous `git status` calls during file pickers, full workspace walks, and deep-cloning history arrays every frame). Furthermore, the codebase had reached a high-friction state regarding testing, with **massive boilerplate and God Objects** requiring constant manual updates just to add a single configuration field, though recent PRs are actively alleviating this.

</details>