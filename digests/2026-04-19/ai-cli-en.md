# AI CLI Tools Community Digest 2026-04-19

> Generated: 2026-04-18 22:05 UTC | Tools covered: 7

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

# AI Developer Tools Ecosystem Report — 2026-04-19

## 1. Ecosystem Overview
The AI CLI tools landscape is currently characterized by aggressive platform maturation and a shift from basic code generation toward complex, autonomous multi-agent workflows. Established players and open-source challengers alike are battling critical friction points around system stability, context window management, and cross-platform sandbox security. Meanwhile, foundational architectural changes—such as persistent background daemons, hardware-backed attestation, and IDE parity—are being rapidly shipped to support enterprise-grade, long-running developer automation. 

## 2. Activity Comparison
*Note: Activity metrics reflect the volume of notable issues and PRs highlighted in today's community digests.*

| Tool | Notable Issues Highlighted | Notable PRs Highlighted | Release Status (Last 24h) |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 5 | **v2.1.114** (Patch release) |
| **OpenAI Codex** | 10 | 10 | **rust-v0.122.0-alpha.9 & .10** (2 Alpha releases) |
| **Gemini CLI** | 10 | 10 | None |
| **GitHub Copilot CLI** | 10 (+4 closed) | 1 | None (Active triage for v1.0.3x) |
| **Kimi Code CLI** | 10 | 4 | None |
| **OpenCode** | 10 | 10 | **v1.4.11** (Patch), v1.4.12 (Recalled) |
| **Qwen Code** | 10 | 10 | **v0.14.5-nightly** |

## 3. Shared Feature Directions
*   **Autonomous Agent Reliability (Claude Code, Gemini CLI, Kimi Code, Qwen Code):** A universal pain point is agents falling into infinite tool loops or falsely reporting task success. Communities are demanding better stagnation detection, strict `MAX_TURNS` enforcement, and graceful loop recovery.
*   **Fine-Grained Permissions & Sandboxing (Claude Code, OpenAI Codex, OpenCode):** Developers require granular, idempotent security controls. There is a shared demand for parsing compound bash commands, proper globbing for file permissions, and fixing systemic sandbox overreach (particularly Windows ACL corruption in Codex).
*   **Session State & Memory Management (Gemini CLI, Qwen Code, Copilot CLI, Kimi Code):** Tools are converging on the need for persistent daemon modes, session forking/rewinding, and structured memory routing (separating global preferences from project-level context).
*   **Terminal UI & Non-Interactive Hardening (Copilot CLI, Qwen Code, OpenCode):** There is a strong push to fix terminal rendering regressions (CJK text wrapping, SSH scrambling) and ensure headless/CI workflows output reliable exit codes and session transcripts without silent failures.

## 4. Differentiation Analysis
*   **Claude Code** is heavily focused on enterprise compliance and multi-agent orchestration ("Agent Teams"). Its community friction centers heavily on complex billing, OAuth integration gaps, and model behavioral auditability.
*   **OpenAI Codex** is differentiating through deep OS-level hardware integration (TPM-backed device keys) and ambitious "Goal Mode" stacks for long-running autonomous tasks. However, it currently suffers from severe desktop app stability regressions.
*   **Gemini CLI** is investing deeply in internal developer tooling and compiler-level awareness, prioritizing AST-aware codebase mapping and V8 heap snapshot debugging to solve context noise and memory bloat.
*   **GitHub Copilot CLI** focuses on top-tier UI/UX and model configuration (effort levels), but is currently bottlenecked by backend rate-limiting opacity and enterprise policy engine bugs.
*   **Kimi Code** is heavily model-centric, grappling with the behavioral quirks of its proprietary K2.6 model ("overthinking"), while rapidly shipping architectural fixes for subagent working directory contexts.
*   **OpenCode** acts as an aggregation layer (supporting multiple LLM providers). Its differentiation lies in rapid feature parity across CLI, Desktop, and Web GUIs, though it is currently bogged down by TUI rendering overhauls and provider billing misattribution.
*   **Qwen Code** is undergoing a forced strategic pivot from a freemium OAuth model to an API-key/BYOK provider ecosystem, driving a massive influx of authentication-related issues and migration friction.

## 5. Community Momentum & Maturity
*   **Rapid Iterators:** **OpenAI Codex**, **Claude Code**, and **Qwen Code** show the highest release momentum right now. Codex is iterating aggressively on its Rust core (two alpha releases in 24 hours), while Qwen is pushing nightly builds to triage critical auth migration paths.
*   **Active Open-Source Contribution:** **Gemini CLI** and **OpenCode** boast highly active contributor bases, with double-digit PRs addressing core architectural issues like plugin initialization race conditions and memory routing. 
*   **Maintainer Bottlenecks:** **GitHub Copilot CLI** shows a stark contrast between high issue engagement (2742 comments on a rate-limit bug) and remarkably low PR activity (1 PR in 24 hours), suggesting an internal development bottleneck or closed-loop triage. 
*   **Community Tension:** **Qwen Code** and **Kimi Code** are currently facing the highest community friction—Qwen due to the sudden sunsetting of its free tier, and Kimi due to runaway model behavior consuming user API credits.

## 6. Trend Signals
1.  **The BYOK (Bring Your Own Key) Standard:** Qwen's sudden OAuth shutdown highlights a critical industry lesson: developers require transparent, portable API key management. Relying solely on hosted free tiers is proving to be a fragile strategy for enterprise CI/CD pipelines.
2.  **The Shift to "Agentic Memory":** The era of stateless CLI prompts is ending. The simultaneous development of persistent daemon modes (Kimi), Goal Mode (Codex), and memory routing architecture (Gemini) indicates that CLI tools are rapidly evolving into persistent background services.
3.  **Windows Sandboxing is a Solved Problem—Done Poorly:** Across the ecosystem, Windows users are disproportionately impacted by aggressive sandboxing (Codex altering system ACLs) and environment fragmentation (EFTYPE errors in Gemini, broken updates in Copilot). Cross-platform security isolation needs standardized approaches.
4.  **Observability over Opacity:** Whether it is Claude Code's audit logs, Kimi's request for live streaming reasoning, or Copilot's rate-limit dashboards, developers are rejecting "black box" AI. Transparent tool execution and real-time resource usage metrics are becoming mandatory for tool adoption.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**
*Data Source: `github.com/anthropics/skills` | Snapshot Date: 2026-04-19*

---

### 1. Top Skills Ranking
Based on the current repository data, there are no active or historical Pull Requests with community comments. The repository currently tracks 0 total PRs, resulting in an empty leaderboard for this period. 

*No PRs to display.*

### 2. Community Demand Trends
Activity in the Issues tracker currently shows 0 open or closed discussions. Because no community requests or bug reports have been submitted as of this snapshot, anticipated directions (such as workflow automation, code review, or test generation) cannot be extrapolated.

*No Issues to display.*

### 3. High-Potential Pending Skills
There are no pending (unmerged) or draft Skills with active community discussion at this time. 

*No pending PRs to display.*

### 4. Skills Ecosystem Insight
Because the repository currently shows zero activity in both Pull Requests and Issues as of April 19, 2026, the ecosystem is either in a nascent stage or awaiting its first wave of community skill contributions to establish concrete demand trends.

---

# Claude Code Community Digest — 2026-04-19

## 1. Today's Highlights

Version **v2.1.114** shipped with a targeted fix for a permission dialog crash in agent teams, while the issue tracker saw a surge of new bugs around stream idle timeouts, Cowork VM initialization failures on Windows, and auto-mode silently hanging when sandbox permissions reject tool calls. Community feature requests are coalescing around improved transparency for tool calls, better cron timezone handling, and more granular permission matching for compound bash commands.

---

## 2. Releases

**[v2.1.114](https://github.com/anthropics/claude-code/releases/tag/v2.1.114)**
- Fixed a crash in the permission dialog when an agent teams teammate requested tool permission.

---

## 3. Hot Issues

1. **[#34229](https://github.com/anthropics/claude-code/issues/34229) — Phone verification (707 comments, 👍 785)**
   The single most-commented issue in the repo. Users are frustrated by phone verification requirements blocking access. Marked `invalid` by maintainers but continues to attract heavy community engagement.

2. **[#26224](https://github.com/anthropics/claude-code/issues/26224) — Claude Code hanging / freezing / stuck (84 comments, 👍 102)**
   Persistent reports of sessions freezing for 5–20+ minutes. Open since February and still receiving updates; highlights a deep reliability concern for long-running sessions.

3. **[#3433](https://github.com/anthropics/claude-code/issues/3433) — Cannot connect to GitHub's remote MCP server via OAuth (45 comments, 👍 121)**
   An older, well-upvoted bug affecting Linux users trying to use GitHub's remote MCP with OAuth. Still open after 9 months, signaling a difficult-to-fix auth layer problem.

4. **[#45335](https://github.com/anthropics/claude-code/issues/45335) — Claude Max 5x gift subscription auto-canceled (34 comments)**
   Users report gift subscriptions reverting to the Free plan without action. Raises trust concerns around billing/subscription management.

5. **[#20745](https://github.com/anthropics/claude-code/issues/20745) — Model setting changes globally across all sessions (27 comments, 👍 51)**
   A regression where switching models in one session affects all active sessions. A core UX issue for developers running multiple parallel sessions across projects.

6. **[#16561](https://github.com/anthropics/claude-code/issues/16561) — Parse compound Bash commands for per-component permission matching (22 comments, 👍 141)**
   The highest 👍 count among enhancement issues. Compound commands (`&&`, `|`, `;`) require manual approval even when all sub-commands are individually allowed. Strong community demand for finer-grained permission parsing.

7. **[#50456](https://github.com/anthropics/claude-code/issues/50456) — Auto-updater silently broke Claude Code on macOS 11 Big Sur (7 comments)**
   A regression introduced by the auto-updater rendering Claude Code unusable on older macOS. Affects users on unsupported-but-functional platforms.

8. **[#45996](https://github.com/anthropics/claude-code/issues/45996) — `/export` produces 0-byte files and empty clipboard (11 comments, 👍 10)**
   The rendering pipeline returns an empty string, breaking session export. Directly impacts developers who archive or share session transcripts.

9. **[#50532](https://github.com/anthropics/claude-code/issues/50532) — Auto mode hangs silently on sandbox/permission rejection (2 comments)**
   New today. When a tool call is rejected by sandbox policies in auto mode, the session hangs with no feedback. Critical for headless/CI workflows.

10. **[#50513](https://github.com/anthropics/claude-code/issues/50513) — Complex engineering behavior regression across sessions (4 comments, 👍 2)**
    Users are requesting root-cause analysis and auditability guarantees for model behavior regressions. Reflects growing enterprise concern about reproducibility.

---

## 4. Key PR Progress

1. **[#50301](https://github.com/anthropics/claude-code/pull/50301) — `feat(plugins): add flappy-claude terminal game`**
   A fun community plugin adding a Flappy Bird clone via `/flappy-claude`. Demonstrates the extensibility of the plugin system.

2. **[#50293](https://github.com/anthropics/claude-code/pull/50293) — `fix: use -exist flag in ipset add to prevent duplicate entry errors`**
   Defensive fix in the devcontainer firewall init script, making it idempotent across re-runs. A quality-of-life improvement for contributors.

3. **[#46024](https://github.com/anthropics/claude-code/pull/46024) — `docs: document --exclude-dynamic-system-prompt-sections in README`**
   Documents a flag that moves per-machine dynamic sections out of the system prompt and into the first user message, improving prompt cache hit rates. Useful for cost-sensitive API users.

4. **[#46095](https://github.com/anthropics/claude-code/pull/46095) — `Add Claude Mythos operating contract for Veriflow immune system`**
   An unconventional PR adding an "operating contract" for an immune-system-style verification flow. Likely to face scrutiny for scope and relevance.

5. **[#20448](https://github.com/anthropics/claude-code/pull/20448) — `Add web4-governance plugin for AI governance with R6 workflow`**
   Proposes a governance plugin with trust tensors and audit trails. Open since January; reflects the community's interest in accountability tooling.

---

## 5. Feature Request Trends

| Theme | Representative Issues | Signal |
|---|---|---|
| **Fine-grained Bash permissions** | [#16561](https://github.com/anthropics/claude-code/issues/16561) (👍141) | Parse compound commands; match individual components against allowlists |
| **Tool call transparency** | [#50416](https://github.com/anthropics/claude-code/issues/50416) (👍1) | Show full tool call details instead of abbreviated "Calling xcode" labels |
| **Model session isolation** | [#20745](https://github.com/anthropics/claude-code/issues/20745) (👍51) | Per-session model settings instead of global mutation |
| **Cron timezone support** | [#50529](https://github.com/anthropics/claude-code/issues/50529) | IANA timezone field for scheduled triggers in routines |
| **RTL / i18n support** | [#45906](https://github.com/anthropics/claude-code/issues/45906) | Right-to-Left rendering for Hebrew and other RTL languages |
| **Opt-out of malware reminders** | [#50516](https://github.com/anthropics/claude-code/issues/50516) | Allow disabling the per-`Read` malware-check system reminder to reduce token cost |
| **Model behavior auditability** | [#50513](https://github.com/anthropics/claude-code/issues/50513) | RCA reports and audit logs for model behavior regressions |

---

## 6. Developer Pain Points

- **Session stability remains the top concern.** The hanging/freezing issue ([#26224](https://github.com/anthropics/claude-code/issues/26224), 84 comments, 👍102) and stream idle timeouts ([#49500](https://github.com/anthropics/claude-code/issues/49500), [#50534](https://github.com/anthropics/claude-code/issues/50534)) continue to erode trust for developers relying on long-running or headless sessions.

- **Cowork (multi-agent VMs) is fragile on Windows.** Multiple duplicate issues ([#49391](https://github.com/anthropics/claude-code/issues/49391), [#49514](https://github.com/anthropics/claude-code/issues/49514), [#47990](https://github.com/anthropics/claude-code/issues/47990)) report "process exited with code 1" and virtualization failures on Windows 11. The feature appears to be unreliable outside macOS/Linux.

- **Context compaction destroys scrollback.** A long-standing UX complaint ([#18204](https://github.com/anthropics/claude-code/issues/18204), [#41903](https://github.com/anthropics/claude-code/issues/41903)). When compaction triggers, terminal history is wiped and users lose conversation continuity. No fix has shipped despite repeated reports.

- **Permission system friction.** Compound commands bypass allowlists ([#16561](https://github.com/anthropics/claude-code/issues/16561)), auto mode silently hangs on rejection ([#50532](https://github.com/anthropics/claude-code/issues/50532)), and the new agent teams permission crash (fixed in v2.1.114) all point to the permission layer being a consistent source of bugs and UX pain.

- **MCP OAuth integration gaps.** GitHub MCP OAuth on Linux ([#3433](https://github.com/anthropics/claude-code/issues/3433)) and Microsoft 365 MCP OAuth on Windows ([#46539](https://github.com/anthropics/claude-code/issues/46539)) are both broken. These block key integrations and have been open for extended periods.

- **Silent failures in automated/CI workflows.** Issues like 0-byte exports ([#45996](https://github.com/anthropics/claude-code/issues/45996)), auto-updater breakage ([#50456](https://github.com/anthropics/claude-code/issues/50456)), and silent sandbox hangs are especially painful because they offer no diagnostic output, making debugging difficult.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-19

## 1. Today's Highlights
The OpenAI Codex team is aggressively iterating on platform availability and autonomous capabilities, shipping two rapid-fire Rust alpha releases alongside a massive 5-part "Goal Mode" PR stack that introduces persistent, autonomous task execution. Platform expansion is a clear priority: new TPM-backed device key providers for Linux and Windows were introduced, and Intel Mac users are finally getting official desktop support. Meanwhile, the community remains highly engaged on desktop app stability, with several high-profile bugs regarding CPU spikes, session delays, and sandbox security ACLs dominating the discussion boards.

## 2. Releases
*   **rust-v0.122.0-alpha.10** ([Tag](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.10))
*   **rust-v0.122.0-alpha.9** ([Tag](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.9))
    *   *Note: Two Rust core releases dropped within 24 hours, indicating rapid core iteration and stabilization ahead of a stable v0.122.0 release.*

## 3. Hot Issues

1.  **[#10410](https://github.com/openai/codex/issues/10410) [CLOSED] macOS Intel (x86_64) support:** With 188 comments and 288 👍s, this is a massive community win. The team is finally addressing this via PR #18500, bringing the desktop app to Intel Macs. 
2.  **[#18264](https://github.com/openai/codex/issues/18264) [CLOSED] Message send delayed ~8 seconds:** A recent desktop update introduced a severe latency bug in new sessions. Closed after significant community traction (29 comments, 28 👍).
3.  **[#18258](https://github.com/openai/codex/issues/18258) [OPEN] 'Computer Use plugin unavailable' on macOS:** Users are encountering missing plugin errors despite files existing locally. A community-sourced workaround involving `~/.codex/config.toml` and cache path repairs is circulating while awaiting an official fix.
4.  **[#15777](https://github.com/openai/codex/issues/15777) [OPEN] Sandbox corrupts ACL on Windows AppData:** A critical security/permissions issue on Windows where the Codex sandbox alters Access Control Lists for the entire user profile tree.
5.  **[#9046](https://github.com/openai/codex/issues/9046) [OPEN] Context window exhaustion on fresh chats:** Users report hitting context limits prematurely, even at the very beginning of a chat.
6.  **[#12343](https://github.com/openai/codex/issues/12343) [CLOSED] Sandbox assigned to entire user profile (Windows 11):** Similar to the ACL bug, this highlighted severe overreach in Windows sandboxing, which the team has recently closed.
7.  **[#10695](https://github.com/openai/codex/issues/10695) [OPEN] App Sandbox blocks GitHub Fix CI skill:** The sandbox isolates Keychain and `GH_TOKEN`, breaking the built-in GitHub CI skills. 
8.  **[#12777](https://github.com/openai/codex/issues/12773) [OPEN] Multi-Window Support for macOS:** A highly requested enhancement (20 👍) to allow multiple independent instances of the desktop app for multi-tasking across projects.
9.  **[#18341](https://github.com/openai/codex/issues/18341) [OPEN] Blurred overlay on Intel Macs:** Following the alpha desktop release for Intel, users are reporting UI rendering glitches (persistent translucent overlays).
10. **[#18467](https://github.com/openai/codex/issues/18467) [CLOSED] Desktop app pegs CPU on macOS:** A severe performance regression causing fan surges and system lag even on trivial requests. 

## 4. Key PR Progress

1.  **[#18500](https://github.com/openai/codex/pull/18500) Support `codex app` on macOS (Intel) and Windows:** Implements the highly anticipated fix for Issue #10410, ensuring the CLI acts as a platform-aware entry point for downloading the correct Desktop app architecture.
2.  **[#18073 to #18077] Goal Mode Stack (1/5 to 5/5):** A massive architectural addition spanning state foundation, app-server APIs, model tools, core runtime, and finally, the TUI UX. This introduces persistent "goals" allowing the agent to autonomously manage long-running tasks and budget token usage.
3.  **[#18438](https://github.com/openai/codex/pull/18438) & [#18436](https://github.com/openai/codex/pull/18436) Linux & Windows TPM Device Keys:** Replaces software-based key storage with hardware-backed TPM2 (Linux) and CNG (Windows) for secure, non-exportable device attestation.
4.  **[#18504](https://github.com/openai/codex/pull/18504) Rebrand approvals to auto-review:** Cleans up internal config schema naming from "guardian_subagent" to the user-facing "auto_review" naming convention.
5.  **[#18413](https://github.com/openai/codex/pull/18413) Add namespaces to dynamic tools:** Improves tool dispatch by allowing dynamic tools to carry explicit namespaces rather than relying on echo-based routing.
6.  **[#18441](https://github.com/openai/codex/pull/18441) Avoid false shell snapshot cleanup warnings:** Fixes a noisy log issue where shell snapshot temp files triggered harmless but alarming `Drop` warnings during startup.
7.  **[#18499](https://github.com/openai/codex/pull/18499) Fix plugin cache panic:** Resolves a crashing bug (Issue #16637) where the plugin cache panicked if the current working directory was unavailable during absolute path normalization.
8.  **[#18274](https://github.com/openai/codex/pull/18274) Canonicalize file system permissions:** Lays the groundwork for the new `PermissionProfile` system by establishing stable, lossless file-system permission semantics.
9.  **[#18502](https://github.com/openai/codex/pull/18502) Support multiple cwd filters for thread list:** Quality-of-life API update allowing clients to query threads across multiple project worktrees simultaneously rather than paginating individually.
10. **[#18459](https://github.com/openai/codex/pull/18459) Test --add-dir workspace writes:** Directly addresses Issue #18448 by adding test coverage to ensure `--add-dir` actually grants write permissions to shell commands, closing a gap in CLI sandboxing.

## 5. Feature Request Trends
*   **Autonomous / Long-Running Task Management:** Users want agents that can run longer without context crashing or needing manual intervention (e.g., fine-grained context per task, specialized models for context compaction). The team's "Goal Mode" PR stack directly answers this.
*   **Enhanced Desktop UI / UX:** Multi-window support, keyboard-first modal navigation for replies, and safe two-step deletion flows for session history are highly requested.
*   **Granular Sandboxing & Permissions:** There is a strong push for better security scoping on Windows (fixing ACLs), more granular default tool approval modes, and exact control over read/write directories.

## 6. Developer Pain Points
*   **Desktop App Stability:** The latest desktop app updates have introduced frustrating regressions, including 8-second send delays, intense CPU throttling, and UI overlay bugs.
*   **Windows Security & Sandboxing:** Windows developers face persistent friction with the sandbox modifying system-wide ACLs and taking over user profile directories, making the tool feel invasive.
*   **Context Window Management:** Hitting context limits too quickly—even on fresh prompts—continues to disrupt workflows, indicating a need for better default compaction or larger memory allocation for high-tier users.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-19

## 1. Today's Highlights
The Gemini CLI community is experiencing a surge in contributions aimed at enhancing the agent's internal awareness and tooling capabilities, with significant focus on AST-aware codebase mapping, memory routing, and subagent behavioral evaluations. Core stability and developer experience remain top priorities, as seen in multiple pull requests addressing environment configuration parsing, terminal rendering bugs, and non-interactive mode metrics. 

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
*   **AST-Aware Codebase Mapping ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))**: An epic investigating AST-aware file reads to reduce token noise and improve method bounds navigation. High engagement indicates the community is eager for more precise, IDE-like code intelligence from the CLI agent.
*   **Persistent Permission Prompts ([#24916](https://github.com/google-gemini/gemini-cli/issues/24916))**: A frustrating UX bug where the CLI repeatedly asks for file permissions despite being told to "allow for all future sessions."
*   **Shell Execution Hanging ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))**: A highly upvoted issue where the CLI gets stuck showing "Waiting input" after a simple shell command finishes, directly blocking automated workflows.
*   **Subagent Goal Falsification ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))**: A critical P1 bug where subagents falsely report `status: "success"` after hitting the `MAX_TURNS` limit, hiding execution interruptions from the main agent.
*   **Memory Routing Architecture ([#22819](https://github.com/google-gemini/gemini-cli/issues/22819))**: An architectural discussion on implementing global (`~/.gemini/`) vs. project (`.gemini/`) memory separation, crucial for contextual agent awareness.
*   **Prompting Proactive Memory ([#22809](https://github.com/google-gemini/gemini-cli/issues/22809))**: A complement to the memory routing issue, focusing on tuning the main agent's system prompt to actively save user preferences (e.g., "I prefer tabs over spaces") without being explicitly told to do so.
*   **Destructive Behavior Guardrails ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672))**: A safety-focused request to prevent the model from casually using dangerous commands like `git reset --force` when safer alternatives exist.
*   **Browser Agent Config Overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267))**: A P2 bug where the Browser Agent completely ignores `settings.json` configurations like `maxTurns`, causing uncontrolled execution loops.
*   **SSH Terminal Scrambling ([#24202](https://github.com/google-gemini/gemini-cli/issues/24202))**: Users running Gemini CLI over SSH on Windows are experiencing scrambled UI text, rendering the tool unusable in remote development environments.
*   **Tool Limit 400 Errors ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))**: The CLI crashes with a 400 error when more than 128 (expandable to 400+) tools are available, highlighting the need for better dynamic tool scoping.

## 4. Key PR Progress
*   **Heap Snapshot Debugging ([PR #25639](https://github.com/google-gemini/gemini-cli/pull/25639))**: Introduces a `/bug-memory` command that auto-captures V8 heap snapshots when memory exceeds 2GB, vastly improving out-of-memory bug reporting.
*   **Boolean Environment Coercion ([PR #25608](https://github.com/google-gemini/gemini-cli/pull/25608))**: Fixes a pervasive configuration bug where interpolated env variables failed validation because they weren't being parsed from strings to booleans.
*   **ACP Auto Memory Boot ([PR #25626](https://github.com/google-gemini/gemini-cli/pull/25626))**: Ensures Auto Memory starts consistently during Agent Communication Protocol (ACP) sessions, aligning behavior with standard TUI sessions.
*   **Accurate Telemetry Models ([PR #25633](https://github.com/google-gemini/gemini-cli/pull/25633))**: Fixes session transcript hydration by recording the actual `modelVersion` returned by the server chunk, fixing stats skew during A/B model routing.
*   **Signal Forwarding on Relaunch ([PR #25605](https://github.com/google-gemini/gemini-cli/pull/25605))**: Resolves zombie process issues by ensuring `SIGTERM` and `SIGHUP` signals are properly forwarded to child processes during app relaunches.
*   **API Key URI Encoding Fix ([PR #25578](https://github.com/google-gemini/gemini-cli/pull/25578))**: Resolves authentication failures for API keys containing periods by conforming to RFC 3986 unreserved character parsing.
*   **Windows Ripgrep EFTYPE Fix ([PR #25378](https://github.com/google-gemini/gemini-cli/pull/25378))**: Fixes `spawn EFTYPE` errors on Windows by adding architecture checks before executing downloaded `grep_search` binaries.
*   **ANSI Theme Contrast Fix ([PR #25223](https://github.com/google-gemini/gemini-cli/pull/25223))**: Resolves a UI bug where ANSI themes incorrectly used hardcoded hex colors, resulting in unreadable low-contrast terminal text.
*   **Non-Interactive Stats Output ([PR #20536](https://github.com/google-gemini/gemini-cli/pull/20536))**: Wires up the `/stats` command to correctly output data to stdout when running in headless/non-interactive mode.
*   **Model Favoriting & Cycling ([PR #25072](https://github.com/google-gemini/gemini-cli/pull/25072))**: Introduces a highly requested UX feature allowing users to save favorite models and cycle through them via keyboard shortcuts.

## 5. Feature Request Trends
*   **Advanced Context & Memory Management**: Users and maintainers are heavily investing in making the agent "smarter" about context. There is a strong trend toward AST-based code mapping, intelligent global vs. project memory routing, and proactive preference saving.
*   **Agent Safety & Recovery**: Features ensuring the agent behaves safely are highly requested. This includes stopping destructive shell commands, recovering gracefully from `MAX_TURNS` limits, and handling subagent tool call rejections.
*   **Tailored Terminal UX**: Users are asking for better adaptation to specific terminal environments, notably requests for SSH environment detection to prevent UI scrambling, and enhanced accessibility features like improved screen-reader rendering for streaming tables.

## 6. Developer Pain Points
*   **State and Permission Amnesia**: A major frustration is the CLI forgetting states—whether it's repeatedly asking for file permissions that have already been granted globally, or subagents lying about their execution status when hitting turn limits.
*   **Configuration Fragmentation**: Developers are experiencing "configuration fatigue." Boolean settings fail silently due to env var parsing issues, config UI options are inconsistently named (e.g., "hide" vs "show"), and specific agents (like the Browser Agent) ignore `settings.json` entirely.
*   **Cross-Platform Instability**: Windows and remote developers face significant friction. Breakages related to PowerShell paths (`A:\`), ARM vs x64 binary execution (`EFTYPE`), and scrambled UI over SSH connections remain prevalent pain points.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-19

## 1. Today's Highlights
The community remains highly active around the v1.0.3x release series, with several critical bugs drawing significant attention. **Rate limiting** continues to be a major friction point, spawning multiple issues about UI transparency and Pro+ account limits. Meanwhile, a cluster of UI regressions—including missing effort levels for GPT-5.x models, invisible agent names, and CJK text wrapping errors—suggests the latest rendering overhaul needs stabilization.

## 2. Releases
No new releases in the last 24 hours. The community is actively triaging issues against versions **v1.0.31** and **v1.0.32**.

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| 1 | [#2725 — GPT-5.4 model picker hides "Extra High" effort level](https://github.com/github/copilot-cli/issues/2725) | The `/model` picker only shows Low/Medium/High for GPT-5.4, yet `xhigh` works at runtime—UI/runtime inconsistency confuses users. | **16 👍 / 21 comments** — Highest engagement issue right now. |
| 2 | [#2739 — xhigh reasoning removed for gpt-5.4 and gpt-5.3-codex](https://github.com/github/copilot-cli/issues/2739) | Companion to #2725; users report both models are "useless" without xhigh reasoning. | **4 👍 / 2 comments** — Strong emotional language signals high user impact. |
| 3 | [#2742 — Persistent Global 429 Rate Limit on Paid Pro+ Account](https://github.com/github/copilot-cli/issues/2742) | Pro+ users hitting hard rate limits across all interfaces for hours, even after reboots. | Signals a potential backend quota bug affecting paying customers. |
| 4 | [#2818 — Session token expired during long tasks](https://github.com/github/copilot-cli/issues/2818) | Long-running autopilot sessions abort mid-task with "Session token expired," ruining unattended workflows. | **2 👍** — Directly undermines the core autopilot/agent use case. |
| 5 | [#2777 — Agent name no longer visible in v1.0.31](https://github.com/github/copilot-cli/issues/2777) | The agent identifier disappeared from the status bar, making it hard to know which agent is active. | **2 👍 / 2 comments** — Visual regression in the terminal rendering layer. |
| 6 | [#1954 — Regression: XDG_CONFIG_HOME ignored](https://github.com/github/copilot-cli/issues/1954) | Config directory environment variable no longer respected; `COPILOT_HOME` is not a valid workaround because it also redirects state. | **4 👍** — Affects Linux power users with custom config layouts. |
| 7 | [#2583 — Copilot update command not working on Windows](https://github.com/github/copilot-cli/issues/2583) | `copilot update` and `/update` have been broken since v1.0.17 on Windows. | **8 comments** — Windows platform installation pain point. |
| 8 | [#2825 — CJK text wrapping error](https://github.com/github/copilot-cli/issues/2825) | CJK characters occupy 2 terminal columns but are treated as 1, causing broken line breaks in input. | Important for internationalization; affects all East Asian language users. |
| 9 | [#2482 — task_complete not written to output in non-interactive mode](https://github.com/github/copilot-cli/issues/2482) | In `--autopilot` mode with `claude-opus-4.6`, agent sometimes produces no output despite completing its task. | **1 👍** — Critical for CI/CD and automation pipelines. |
| 10 | [#2814 — Local MCP URLs banned despite MCP approval policy exemption](https://github.com/github/copilot-cli/issues/2814) | Enterprise users report that explicitly allowed local MCP server URLs are still being blocked. | Blocks enterprise MCP adoption; policy engine logic bug. |

**Notable closed issues:** [#1723](https://github.com/github/copilot-cli/issues/1723) (VS Code `/ide` workspace detection), [#2769](https://github.com/github/copilot-cli/issues/2769) (Pro+ weekly rate limit reset), [#1452](https://github.com/github/copilot-cli/issues/1452) (clipboard image paste — possibly now supported), [#2771](https://github.com/github/copilot-cli/issues/2771) (v1.0.30 prompt UI bars).

## 4. Key PR Progress
Only **1 PR** was updated in the last 24 hours:

| PR | Title | Status | Notes |
|----|-------|--------|-------|
| [#2800](https://github.com/github/copilot-cli/pull/2800) | Add initial devcontainer configuration | 🟡 Open | Adds devcontainer setup for contributors. Minimal description; appears to be a community contribution for improving the development environment. |

*PR activity is notably low compared to the high issue volume, suggesting the maintainers may be backlogged or working internally.*

## 5. Feature Request Trends

Several clear themes emerged from today's issue stream:

1. **Rate Limit Transparency & UX** — Multiple requests ([#2827](https://github.com/github/copilot-cli/issues/2827), [#2828](https://github.com/github/copilot-cli/issues/2828)) for a persistent rate-limit usage indicator and clearer guidance when limits are hit, rather than surprise blocking.

2. **Agent Output Management** — [#2821](https://github.com/github/copilot-cli/issues/2821) requests a toggle to collapse/expand verbose agent thinking (similar to Claude Code CLI), and [#2826](https://github.com/github/copilot-cli/issues/2826) wants proper Markdown table rendering in `ask_user` responses.

3. **Custom Paths & Extensibility** — [#2829](https://github.com/github/copilot-cli/issues/2829) asks for CLI-configurable search paths for custom skills, prompts, and agents.

4. **Non-Interactive / Automation Hardening** — [#2482](https://github.com/github/copilot-cli/issues/2482) and [#2815](https://github.com/github/copilot-cli/issues/2815) highlight gaps in headless/CI workflows (missing output, lack of prompt IDs in hooks).

5. **Session Resilience** — [#2818](https://github.com/github/copilot-cli/issues/2818) (token expiration), [#2500](https://github.com/github/copilot-cli/issues/2500) (compaction killing sessions), and [#2822](https://github.com/github/copilot-cli/issues/2822) (shell initialization timeout) all point to a desire for more robust, long-running sessions.

## 6. Developer Pain Points

- **Rate limits are a top frustration.** Pro+ users are hitting persistent 429 errors ([#2742](https://github.com/github/copilot-cli/issues/2742)), weekly resets aren't firing correctly ([#2769](https://github.com/github/copilot-cli/issues/2769)), and there's zero visibility into current usage ([#2827](https://github.com/github/copilot-cli/issues/2827)). This is the single most complained-about category.

- **Model configuration regressions in v1.0.27+.** The disappearing `xhigh` effort level for GPT-5.x models ([#2725](https://github.com/github/copilot-cli/issues/2725), [#2739](https://github.com/github/copilot-cli/issues/2739), [#2823](https://github.com/github/copilot-cli/issues/2823)) and invisible agent names ([#2777](https://github.com/github/copilot-cli/issues/2777)) suggest the UI refactoring in recent releases introduced several visual/state bugs.

- **Windows and Linux platform stability gaps.** Windows users report broken update commands ([#2583](https://github.com/github/copilot-cli/issues/2583)) and unclear experimental flags ([#2820](https://github.com/github/copilot-cli/issues/2820)), while Linux users face XDG config regressions ([#1954](https://github.com/github/copilot-cli/issues/1954)) and shell session initialization timeouts ([#2822](https://github.com/github/copilot-cli/issues/2822)).

- **Process lifecycle management.** MCP server child processes surviving CLI exit ([#2817](https://github.com/github/copilot-cli/issues/2817)) and OOM kills on Android/Termux ([#2816](https://github.com/github/copilot-cli/issues/2816)) indicate resource cleanup needs attention.

- **Enterprise MCP policy enforcement** is broken for local URLs ([#2814](https://github.com/github/copilot-cli/issues/2814)), and `/remote` generates invalid 404 URLs for enterprise users ([#2813](https://github.com/github/copilot-cli/issues/2813))—both blocking enterprise adoption.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-19

## 1. Today's Highlights
The community is actively grappling with model behavior and agent stability issues. A significant portion of today's discussions revolves around the Kimi K2.6 model's tendency to "overthink," which users report is causing infinite loops, repetitive rumination, and diminished creativity. On the infrastructure side, contributors are making substantial architectural improvements to the CLI's subagent working directory inheritance and streaming payload efficiency.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues

1. **Kimi K2.6 Model Quality Regression** ([#1925](https://github.com/MoonshotAI/kimi-cli/issues/1925)): Users are reporting that the K2.6 model's extensive thinking process drowns out creativity and increases hallucinations, requesting a rollback option to K2.5 with its previous system prompt.
2. **Global API Temperature Parameter Bug** ([#1924](https://github.com/MoonshotAI/kimi-cli/issues/1924)): A critical API-level bug is rejecting *all* temperature values (even the valid 0.6) for users on the Kimi Coding Plan, affecting third-party integrations like OpenAI SDK and Hermes Agent.
3. **Subagent Infinite Loop** ([#1927](https://github.com/MoonshotAI/kimi-cli/issues/1927)): On CLI v1.36.0, subagents are getting stuck reading the same file hundreds of times in an infinite loop, requiring manual process termination.
4. **Subagent Working Directory Context Loss** ([#1931](https://github.com/MoonshotAI/kimi-cli/issues/1931)): When a parent agent `cd`s into a git worktree and spawns a subagent, the subagent falls back to the root directory, breaking complex git workflows. 
5. **Continuous Model Rumination** ([#1926](https://github.com/MoonshotAI/kimi-cli/issues/1926)): Similar to the infinite loop issue, users report the model continuously thinking and outputting the exact same content repeatedly after recent updates.
6. **Request for Granular Interactivity** ([#1923](https://github.com/MoonshotAI/kimi-cli/issues/1923)): Developers are frustrated by the CLI hiding its internal reasoning. The community is requesting incremental streaming of responses to allow for early error detection rather than just outputting the final minimal result.
7. **VSCode Extension "Plan Mode" Disconnect** ([#1672](https://github.com/MoonshotAI/kimi-cli/issues/1672)): Users find the VSCode plugin's current plan mode—generating a markdown file for the user to read—highly disruptive, requesting an interactive, in-chat planning experience similar to Codex.
8. **Project-Level Custom System Prompts** ([#1856](https://github.com/MoonshotAI/kimi-cli/issues/1856)): A highly requested feature (👍 1) asking for the CLI to automatically pick up a `\system_prompt.md` file at the project root to override default behaviors.
9. **WSL2 Login Flow Broken on Windows** ([#1916](https://github.com/MoonshotAI/kimi-cli/issues/1916)): Windows users running Ubuntu-24.04 via WSL2 report that the `/login` command incorrectly redirects them straight to the subscription page, bypassing actual authentication.
10. **Request for Resident Server Mode** ([#1929](https://github.com/MoonshotAI/kimi-cli/issues/1929)): Developers are asking for a background daemon mode (similar to `codex app server`) to allow the CLI to initialize and reuse persistent sessions via sockets/APIs.

## 4. Key PR Progress

1. **[OPEN] feat(subagents): add work_dir override for subagent dispatch** ([#1933](https://github.com/MoonshotAI/kimi-cli/pull/1933)): Directly addresses Issue #1931 by introducing an optional `work_dir` parameter to the Agent tool, allowing subagents to correctly inherit or override the parent's working directory.
2. **[OPEN] fix(streaming): avoid replaying large tool call payloads** ([#1928](https://github.com/MoonshotAI/kimi-cli/pull/1928)): Fixes a performance lag (Issue #1786) where the CLI was unnecessarily resending full accumulated tool-call arguments on every `ToolCallProgress` update.
3. **[OPEN] refactor(yolo): refine yolo scope to preserve plan review and AskUserQuestion** ([#1932](https://github.com/MoonshotAI/kimi-cli/pull/1932)): Improves the `--yes`/yolo mode by stopping the auto-approval of ExitPlanMode and preserving user-intent questions, enhancing autonomous safety.
4. **[CLOSED] revert: undo accidentally-pushed anthropic thinking effort refactor** ([#1917](https://github.com/MoonshotAI/kimi-cli/pull/1917)): Maintainers reverted two commits (`54598f74` and `f698c37e`) related to adaptive thinking support for Anthropic models that bypassed standard PR review protocols.

## 5. Feature Request Trends
*   **Model Switching & Configuration:** Strong pushback against the default K2.6 behavior, with users demanding the ability to easily rollback models (like K2.5) or set custom system prompts at the project level to regain control over coding style and creativity.
*   **Transparent Reasoning/Streaming:** A growing demand for "unfinished" or incremental thought streaming. Developers want to see the agent's reasoning steps live rather than waiting for a final output, which currently feels like a "black box."
*   **Persistent Daemon Modes:** Requests to move away from stateless, single-run CLI executions toward background servers (`resident server`) that can maintain and reuse session contexts.
*   **IDE-Native Interactivity:** Dissatisfaction with file-based workflows (like outputting plans to `.md` files); users want richer, interactive UI/UX directly within their terminal or IDE chat interfaces.

## 6. Developer Pain Points
*   **Runaway Agents & Loops:** The most critical current frustration is subagents getting stuck in infinite loops or repetitive rumination, chewing through context windows and API credits without completing tasks.
*   **Opinionated Model Behaviors:** The Kimi K2.6 model's aggressive internal reasoning is actively hindering developer workflows, causing delays and hallucinations, making the tool feel less reliable for nuanced coding tasks.
*   **Broken Git/Worktree Contexts:** Advanced developers utilizing `git worktree` are finding the CLI unusable because subagents lose their directory context the moment they are spawned.
*   **Unpredictable API Constraints:** Hardcoded, overly strict API limitations (like the temperature bug blocking everything except exactly 0.6) are causing silent failures for users integrating Kimi via standard OpenAI SDKs.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-19

Here is the technical digest for the `anomalyco/opencode` project based on the latest GitHub activity.

## 1. Today's Highlights
OpenCode rolled out **v1.4.11** to patch workspace routing and sync issues, but the community was quickly sidetracked by the accidental publication of **v1.4.12**, which resulted in broken Homebrew installations due to missing release assets. The TUI and Desktop GUI continue to experience significant growing pains, with multiple highly-commented issues reporting rendering failures on the latest versions. Meanwhile, the contributor community remains highly active, submitting several critical architectural PRs addressing message normalization, session reconstruction, and new plugin integrations.

## 2. Releases
*   **[v1.4.11](https://github.com/anomalyco/opencode/releases/tag/v1.4.11)**
    *   **Core:** Fixed workspace routing so requests accurately reach the correct workspace instance.
    *   **Core:** Stopped share sync attempts for sessions that were never shared, reducing unnecessary network traffic.

## 3. Hot Issues

1.  **TUI Hangs on Startup ([#5485](https://github.com/anomalyco/opencode/issues/5485))**
    *   *Why it matters:* With 49 comments, this is a highly disruptive bug where the TUI becomes completely stuck on launch.
    *   *Reaction:* Users are actively discussing workarounds and expressing concern over config/conversation data preservation during reinstalls.
2.  **Blank Desktop Window on macOS Tahoe ([#22630](https://github.com/anomalyco/opencode/issues/22630))**
    *   *Why it matters:* OpenCode Desktop is completely unresponsive on the latest macOS 26.4 Tahoe beta.
    *   *Reaction:* Rapidly accumulating comments from developers testing Apple's latest OS updates.
3.  **Broken Homebrew Formula for v1.4.12 ([#23315](https://github.com/anomalyco/opencode/issues/23315) & [#23347](https://github.com/anomalyco/opencode/issues/23347))**
    *   *Why it matters:* A phantom v1.4.12 release caused `brew upgrade` to fail with 404 errors, blocking updates via package managers.
    *   *Reaction:* High engagement (+7 thumbs up) due to the immediate impact on developer workflows.
4.  **UI Render Failure & Config Loss in 1.4.7+ ([#23211](https://github.com/anomalyco/opencode/issues/23211))**
    *   *Why it matters:* Upgrading to 1.4.7 or newer causes the UI to fail rendering and wipes authenticated model configurations.
    *   *Reaction:* Critical blocker for users attempting to update to the latest stable versions.
5.  **Copilot Subagent Billing Misattribution ([#20859](https://github.com/anomalyco/opencode/issues/20859))**
    *   *Why it matters:* Subagent models are being ignored when using the GitHub Copilot provider, resulting in all actions being billed to the expensive orchestrator model (Claude Opus 4.6).
    *   *Reaction:* High concern among users managing API billing and provider quotas.
6.  **Massive WSL Performance Degradation ([#23285](https://github.com/anomalyco/opencode/issues/23285))**
    *   *Why it matters:* Users on WSL experienced an 80x slowdown in fuzzy search after upgrading to v1.4, severely impacting large monorepos.
7.  **Hidden Thinking Blocks in Web/Desktop UI ([#7866](https://github.com/anomalyco/opencode/issues/7866) & [#8789](https://github.com/anomalyco/opencode/issues/8789))**
    *   *Why it matters:* Unlike the TUI, the Desktop/Web GUIs hide reasoning blocks upon response completion, removing transparency for AI actions.
8.  **`OPENCODE_FAST_BOOT` Breaks Custom Agents ([#23305](https://github.com/anomalyco/opencode/issues/23305))**
    *   *Why it matters:* Fast boot bypasses necessary agent resolution, breaking `--agent` flags.
    *   *Reaction:* Quickly resolved/closed after identifying the specific commit causing the regression.
9.  **Unprotected Session Deletion Shortcuts ([#21236](https://github.com/anomalyco/opencode/issues/21236) & [#10815](https://github.com/anomalyco/opencode/issues/10815))**
    *   *Why it matters:* Accidental keybindings (Ctrl+Shift+Backspace / Cmd+Shift+Delete) permanently delete active sessions without confirmation, causing data loss.
10. **Runaway Memory Growth in Renderer ([#22084](https://github.com/anomalyco/opencode/issues/22084))**
    *   *Why it matters:* v1.4.3+ suffers from a severe memory leak ending in a Zig panic (ud2 trap) in the title/renderer path.

## 4. Key PR Progress

1.  **[PR #23335] Restore reasoning variants for openai-compatible providers**
    *   Restores `low` / `medium` / `high` reasoning parameters for deepseek, glm, and minimax models routed through the OpenAI SDK.
2.  **[PR #16751] Fix tool\_use and tool\_result mismatch reconstruction**
    *   Addresses a core LLM protocol issue by fixing the root causes of mismatched tool calls and adding safety nets during session reconstruction.
3.  **[PR #16750] Skip empty-text filtering for assistant messages**
    *   Fixes Anthropic API rejections caused by aggressive filtering of empty text in messages containing thinking blocks.
4.  **[PR #22753] Move plugin initialization to config layer**
    *   A major architectural refactor moving plugin initialization earlier in the stack, fixing TUI launch race conditions.
5.  **[PR #14307] Use parentID matching for prompt loop exit**
    *   Replaces fragile ID ordering with parentID graph traversal, fixing complex message rendering and loop exit bugs.
6.  **[PR #17083] Flush stdin on POSIX exit**
    *   Prevents stale terminal bytes from leaking into the parent shell upon exiting OpenCode on macOS/Linux.
7.  **[PR #22676] Implement proper globbing for permissions**
    *   Upgrades the permission system for "edit", "read", and "external_directory" to support actual glob patterns instead of basic string matching.
8.  **[PR #23289] Filter out invalid entries in auth list**
    *   Fixes the `opencode auth list` command returning `undefined` when non-auth keys (like `$schema`) are present in `auth.json`.
9.  **[PR #22461] Prevent stale project.sync() overwrites**
    *   Fixes race conditions in the TUI where out-of-order async responses overwrite current state with older data.
10. **[PR #23339] Allow full-session forks from the session dialog**
    *   Introduces the ability to fork an entire session from the TUI without needing to select a specific intermediate message.

## 5. Feature Request Trends

*   **Model Integrations:** Strong community demand for rapid integration of the newest frontier models, specifically **Kimi K2.6** ([#22408](https://github.com/anomalyco/opencode/issues/22408)) and proper support for **Claude Opus 4.7** ([#22852](https://github.com/anomalyco/opencode/issues/22852)).
*   **Multi-Workspace / Aggregation:** Users want better monorepo and worktree support, specifically requesting a root folder for aggregating sessions across subdirectories ([#1877](https://github.com/anomalyco/opencode/issues/1877)).
*   **Usage & Quota Tracking:** Highly requested feature (+21 thumbs up) to integrate a `/usage` command to track remaining plan limits for providers like Codex, Copilot, and Claude directly within the TUI ([#9281](https://github.com/anomalyco/opencode/issues/9281)).
*   **ACP Question Tool Support:** Requests to enable the question tool for Agent Client Protocol (ACP) clients like Zed ([#13752](https://github.com/anomalyco/opencode/issues/13752)).

## 6. Developer Pain Points

*   **Data Loss via Shortcuts:** Developers are frustrated by destructive actions mapped to common keybinds (like Ctrl+C and Ctrl+Shift+Backspace) that immediately destroy session state without confirmation dialogs ([#23323](https://github.com/anomalyco/opencode/issues/23323)).
*   **Desktop/TUI Stability:** The transition to v1.4.x has introduced critical rendering failures across platforms, from blank windows on macOS Tahoe ([#22630](https://github.com/anomalyco/opencode/issues/22630)) to missing UI elements on Windows ([#23011](https://github.com/anomalyco/opencode/issues/23011)).
*   **Paste Functionality in TUI:** A glaring UX blocker remains on Windows/Ubuntu where users cannot paste API keys via Ctrl+V, Ctrl+Shift+V, or right-click during the `/connect` flow ([#9922](https://github.com/anomalyco/opencode/issues/9922)).
*   **Tooling Environment Handling:** Performance in WSL mounted drives is deteriorating ([#23285](https://github.com/anomalyco/opencode/issues/23285)), and Nerd Font/Powerline glyphs still fail to render in the embedded terminal ([#20044](https://github.com/anomalyco/opencode/issues/20044)), degrading the experience for developers using customized environments.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-19

## 1. Today's Highlights
The Qwen Code ecosystem is currently experiencing significant turbulence following the abrupt discontinuation of the Qwen OAuth free tier on April 15. The repository is flooded with authentication errors (401/403) as users struggle to migrate to alternative providers. On the development front, a new nightly release introduces Agent Communication Protocol (ACP) hooks and compact mode UX enhancements, while community contributors are actively submitting PRs to patch `/btw` bugs, add VSCode feature parity, and improve the CLI startup experience.

## 2. Releases
*   **v0.14.5-nightly.20260418.418acc548**
    *   **feat(acp):** Added complete hooks support for ACP integration ([PR #3248](https://github.com/QwenLM/qwen-code/pull/3248)).
    *   **feat:** Optimized compact mode UX, including shortcuts, settings sync, and safety improvements ([PR #3100](https://github.com/QwenLM/qwen-code/pull/3100)).
    *   **feat(hooks):** Initial additions for HTTP Hooks support.

## 3. Hot Issues
1.  **[OPEN] Qwen OAuth Free Tier Policy Adjustment** ([#3203](https://github.com/QwenLM/qwen-code/issues/3203)): With 97 comments, this is the epicenter of community frustration. The sudden drop from 1,000 daily requests to 100, followed by a complete shutdown of the free tier, caught many developers off guard.
2.  **[OPEN] API Error: 401 invalid access token** ([#3403](https://github.com/QwenLM/qwen-code/issues/3403)): A high-priority symptom of the OAuth shutdown. Users are reporting persistent 401 errors even when the CLI is entirely idle.
3.  **[OPEN] Authenticated error** ([#3427](https://github.com/QwenLM/qwen-code/issues/3427)): Users successfully complete the Google login flow but are immediately blocked by a 401 error upon sending a message. 
4.  **[OPEN] Unable to add OpenAI-compatible local LLM** ([#3384](https://github.com/QwenLM/qwen-code/issues/3384)): Users attempting to pivot to self-hosted models (e.g., via VLLM) are struggling with provider configuration in `~/.qwen/settings.json`, highlighting friction in local LLM setup.
5.  **[OPEN] Feedback for “Authentication” page** ([#3382](https://github.com/QwenLM/qwen-code/issues/3382)): The official documentation still displays outdated OAuth free-tier information, causing confusion for new users setting up the tool.
6.  **[OPEN] /auth is not available** ([#3274](https://github.com/QwenLM/qwen-code/issues/3274)): Users are trying to follow migration guides to use OpenRouter but find that the `/auth` command is unresponsive or missing in their current client version.
7.  **[OPEN] Qwen reports API error each time after restart** ([#3417](https://github.com/QwenLM/qwen-code/issues/3417)): A persistence bug where the client fails to read the API key from `settings.json` on boot, forcing users to manually re-enter their Alibaba Cloud credentials every session.
8.  **[OPEN] Fireworks provider is not available on `qwen auth`** ([#3413](https://github.com/QwenLM/qwen-code/issues/3413)): Despite being listed as an alternative in the README, the CLI's interactive auth menu does not expose Fireworks as a valid provider option.
9.  **[OPEN] Startup hangs on "Initializing..." when checkpointing is enabled** ([#2862](https://github.com/QwenLM/qwen-code/issues/2862)): A regression causing the application to freeze indefinitely on launch if session checkpointing is active.
10. **[OPEN] Chat messages are displayed in the wrong order** ([#3273](https://github.com/QwenLM/qwen-code/issues/3273)): A UI rendering bug where new user prompts visually appear above previous assistant responses, breaking conversational context.

## 4. Key PR Progress
1.  **feat(vscode): replace OAuth with Coding Plan / API Key provider setup** ([PR #3398](https://github.com/QwenLM/qwen-code/pull/3398)): A crucial hotfix replacing the deprecated OAuth flow in the VSCode extension with a new interactive setup supporting API keys and Coding Plans.
2.  **fix(cli): let /btw use live conversation context** ([PR #3429](https://github.com/QwenLM/qwen-code/pull/3429)): Resolves an issue where the `/btw` side-question command failed if a cached snapshot didn't already exist, allowing it to tap into the live context.
3.  **fix(cli): /clear dismisses active /btw side-question dialog** ([PR #3431](https://github.com/QwenLM/qwen-code/pull/3431) & [PR #3428](https://github.com/QwenLM/qwen-code/pull/3428)): Two parallel fixes ensuring that `/clear` resets the main history and properly terminates any active `/btw` state.
4.  **feat(cli): add early input capture to prevent keystroke loss during startup** ([PR #3319](https://github.com/QwenLM/qwen-code/pull/3319)): Buffers keystrokes during the 200-500ms REPL initialization window so fast-typing developers don't lose their first commands.
5.  **feat(cli): add API preconnect to reduce first-call latency** ([PR #3318](https://github.com/QwenLM/qwen-code/pull/3318)): Implements a fire-and-forget HEAD request during startup to warm TCP/TLS connections, shaving 100-200ms off the initial API call.
6.  **[0.15.0] feat(vscode-companion): enable Plan Mode toggle and approval UI** ([PR #2551](https://github.com/QwenLM/qwen-code/pull/2551)): Brings CLI feature parity to VSCode by allowing users to cycle through `plan → default → auto-edit → yolo` modes.
7.  **[0.15.0] feat(vscode-companion): support /export session command** ([PR #2592](https://github.com/QwenLM/qwen-code/pull/2592)): Introduces native `/export` functionality to the IDE companion, allowing sessions to be saved directly from the editor.
8.  **feat(core): enhanced loop detection with stagnation + validation-retry checks** ([PR #3236](https://github.com/QwenLM/qwen-code/pull/3236)): Improves agent reliability by detecting tool validation retry loops and injecting stop directives to break stuck cycles.
9.  **feat(cli): add session rewind and restore flows** ([PR #3292](https://github.com/QwenLM/qwen-code/pull/3292)): Allows users to browse active session history and rewind the state to a previous prompt, enabling easy branching of workflows.
10. **fix(skill/review): enforce parallel agent dispatch for weaker models** ([PR #3276](https://github.com/QwenLM/qwen-code/pull/3276)): Forces models like `qwen3.6-plus` to launch review agents in parallel rather than falling back to slow sequential execution.

## 5. Feature Request Trends
*   **Seamless Third-Party Provider Integration:** Following the death of the free tier, there is a massive demand for one-click migration to OpenRouter, Fireworks, and local LLMs. Users want the CLI/IDE to seamlessly configure these endpoints.
*   **VSCode CLI-Parity:** Continued demand to bring powerful CLI-native features (like `/skills` secondary pickers, session `/export`, and Plan Mode) to the VSCode IDE companion.
*   **Session Management and "Time Travel":** Developers are asking for robust history controls, specifically session rewinding and the ability to branch conversations from previous states without restarting.

## 6. Developer Pain Points
*   **Authentication Chaos:** The overwhelming majority of community pain right now stems from the sudden OAuth sunsetting. Users are experiencing a looping combination of 401/403 errors, broken provider documentation, missing `/auth` commands, and poor session API-key persistence.
*   **UI Performance and Jank:** Historical and ongoing issues like severe input lag ([#2395](https://github.com/QwenLM/qwen-code/issues/2395)) and terminal scroll bouncing ([#3144](https://github.com/QwenLM/qwen-code/issues/3144)) continue to erode the core user experience.
*   **Agent Reliability:** Developers still face friction with tool execution, including infinite agent loops, missing context during side-questions (`/btw`), and reasoning history loss when switching models.

</details>