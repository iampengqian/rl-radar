# AI CLI Tools Community Digest 2026-06-15

> Generated: 2026-06-14 22:21 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the June 15, 2026 community digests.

### 1. Ecosystem Overview
As of mid-2026, the AI CLI ecosystem has matured into a highly competitive landscape focused on deep terminal integration, autonomous multi-agent orchestration, and enterprise readiness. The shift from simple chat interfaces to fully agentic Desktop/TUI applications has introduced complex new engineering challenges, particularly surrounding cross-platform OS support (Windows/WSL/Linux) and local resource management. Underlying model providers are heavily utilizing these CLIs to establish ecosystem lock-in, while independent open-source projects are rapidly iterating to provide flexible, multi-model routing and highly customized developer workflows. 

### 2. Activity Comparison
*Note: Activity metrics reflect explicitly reported items in the June 15 daily digests.*

| Tool | Active Issues | Active PRs | Release Status | Top Frustration |
| :--- | :---: | :---: | :--- | :--- |
| **Claude Code** | 10 | 5 | No new releases | Data loss, TUI corruption (v2.1.16x) |
| **OpenAI Codex** | 10 | 10 | `rust-v0.140.0-alpha.19` | Desktop app resource hogging (Crashpads) |
| **Gemini CLI** | 10 | 10 | No new releases | Subagent hangs, Auto Memory redaction flaws |
| **GitHub Copilot CLI** | 7 | 0 | No new releases | Session state fragility (poisoned contexts) |
| **Kimi Code CLI** | 2 | 4 | No new releases | Severe, opaque rate limiting |
| **OpenCode** | 10 | 10 | `v1.17.7` & `v1.17.6` | TUI hygiene, desktop app instability |
| **Pi** | 10 | 10 | No new releases | Hardcoded constraints for local LLMs |
| **Qwen Code** | 10 | 10 | No new releases | Free tier reduction, context exhaustion |
| **DeepSeek TUI (CodeWhale)**| 10 | 10 | `v0.8.60` | UI freezing, strict GLIBC 2.39 dependency |

### 3. Shared Feature Directions
*   **Sub-Agent Orchestration & Guardrails:** Almost all tools are building multi-agent architectures. *Claude Code* needs execution guardrails for spawning agents; *Gemini CLI* and *DeepSeek TUI* are battling subagent hangs/false successes; *OpenCode* is pushing the boundaries with 5-level deep nested sub-agent spawning.
*   **Advanced Context Management:** As sessions grow, standard compaction is failing. *OpenCode* is exploring Recursive Language Models (RLM); *Codex* users are demanding automatic session checkpointing; *Pi* wants granular, model-specific compaction limits; and *Qwen Code* is actively merging PRs to bound tool-result history sizes.
*   **OS Parity (Linux & WSL):** Cross-platform terminal support remains a massive pain point. *Codex*, *Claude Code*, and *OpenCode* all report broken WSL path mappings or missing CLI binaries. Meanwhile, Linux users are demanding native desktop apps (*Codex*) and looser OS dependencies (*DeepSeek TUI*’s strict GLIBC requirement).
*   **Granular Permissions & State Safety:** Developers want strict boundaries for autonomous actions. *Claude Code* and *DeepSeek TUI* users are asking for append-only/protected path mechanisms and typed permission rules. *Gemini CLI* needs safeguards against destructive shell commands (e.g., `git reset --force`).
*   **API Resilience & Routing:** Developers expect seamless fallback. *DeepSeek TUI* and *Qwen Code* are actively working on provider fallback chains and multi-provider routing, while *GitHub Copilot CLI* users want easier Bring Your Own Key (BYOK) model discovery.

### 4. Differentiation Analysis
*   **Ecosystem Lock-in vs. Agnosticism:** First-party tools (*Claude Code, Codex, Gemini CLI, Qwen Code*) are tightly coupling their CLIs to proprietary backend features and subscription models. In contrast, independent projects (*Pi, OpenCode, CodeWhale*) are differentiating by prioritizing extension ecosystems, BYOK, and heterogeneous model orchestration (e.g., *CodeWhale's* WhaleFlow swarm).
*   **Architectural Approaches:** *Codex* is aggressively migrating to a Rust core for cross-platform sandboxing. *OpenCode* and *Pi* are heavily focused on TUI/UX refinements, such as dynamic CLI workflows and extension-level prompt APIs. *Kimi Code* and *Qwen Code* remain highly focused on fundamental CLI script reliability and Windows parity.
*   **Target Audience:** *Codex* and *GitHub Copilot CLI* are pushing hard for enterprise compliance, focusing on managed fields and Azure DevOps integrations. *Claude Code* and *Pi* are catering to power-users with deep customization needs (e.g., custom theme borders, global config overrides, Vim extensions). 

### 5. Community Momentum & Maturity
*   **Rapidly Iterating:** *OpenCode*, *Codex*, *Pi*, and *CodeWhale* show immense momentum, each pushing 10 active PRs and major architectural updates (e.g., Rust core refactors, nested sub-agents, extension APIs) within a 24-hour window. 
*   **Stalled or Frustrated Ecosystems:** *Kimi Code* and *GitHub Copilot CLI* show lower explicit development velocity in this snapshot. *Kimi Code* is facing severe backlash over opaque API quota throttling, while *Copilot CLI* has completely stalled community PRs, focusing instead on triaging broken session states.
*   **Maturing but Brittle:** *Claude Code*, *Gemini CLI*, and *Qwen Code* demonstrate high maturity and massive community engagement but are currently battling significant growing pains (brittle TUIs, context exhaustion, and memory management flaws) as they scale their feature sets.

### 6. Trend Signals
*   **The "Desktop App" Bloat Threat:** The rush to wrap CLIs in Electron/Chromium (seen in *Codex* and *OpenCode*) is introducing severe resource penalties. Runaway SQLite logging (up to 640TB/year projected in *Codex*) and massive Crashpad dumps signal that first-party desktop wrappers need aggressive optimization before enterprise IT will adopt them.
*   **Terminal Hygiene is Non-Negotiable:** Developers will not tolerate broken terminal states. Tools that fail to clean up PTY environments, disable mouse tracking on exit, or corrupt TUI rendering (seen in *Claude Code, OpenCode, Pi, Kimi Code*) face immediate user abandonment. 
*   **The Rise of Structural Code Navigation:** Pure text-based context retrieval is hitting hard token limits. The industry is trending toward structural code intelligence, evidenced by *Gemini CLI’s* push for AST-aware file reads and *Claude Code’s* need to minimize context bloat via precise, guarded file mutations.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the technical analysis report for the Claude Code Skills ecosystem based on recent community activity.

### 1. Top Skills Ranking
Based on community engagement and PR activity, the following skill proposals and updates represent the most watched or actively developed areas:

*   **Skill-Creator & Ecosystem Tooling** (Multiple PRs): The `skill-creator` utility skill is undergoing massive community-led revisions to fix core bugs. Notable fixes address the evaluation loop reporting 0% recall ([PR #1298](https://github.com/anthropics/skills/pull/1298)) and severe Windows compatibility issues with subprocesses and encoding ([PR #1050](https://github.com/anthropics/skills/pull/1050), [PR #1099](https://github.com/anthropics/skills/pull/1099)). 
*   **Document Generation & Formatting Skills**:
    *   [PR #514](https://github.com/anthropics/skills/pull/514) (Add `document-typography`): Focuses on polishing AI-generated documents by preventing orphan words, widow paragraphs, and numbering misalignment. 
    *   [PR #486](https://github.com/anthropics/skills/pull/486) (Add `ODT` skill): Enables Claude to create, fill, and convert OpenDocument Format (.odt, .ods) files.
*   **Codebase Testing & Auditing**:
    *   [PR #723](https://github.com/anthropics/skills/pull/723) (Add `testing-patterns`): Introduces a comprehensive skill covering the full testing stack, from unit testing (AAA pattern) to React component testing.
    *   [PR #147](https://github.com/anthropics/skills/pull/147) (Add `codebase-inventory-audit`): A cleanup skill that identifies orphaned code, unused files, and documentation gaps to output a `CODEBASE-STATUS.md`.
*   **Enterprise & Framework Integration**: 
    *   [PR #181](https://github.com/anthropics/skills/pull/181) (Add `SAP-RPT-1-OSS`): Integrates SAP's open-source tabular foundation model for predictive analytics.
*   **Persistent Context Frameworks**:
    *   [PR #444](https://github.com/anthropics/skills/pull/444) (Add `AURELION` suite): A structured cognitive and memory framework for professional knowledge management.
    *   [PR #154](https://github.com/anthropics/skills/pull/154) (Add `shodh-memory`): A skill designed to give AI agents persistent context and memory across multiple conversations.

### 2. Community Demand Trends
An analysis of open Issues reveals strong community demand in three primary directions:

*   **Cross-Platform & OS Stability**: There is massive friction running skills natively on Windows. Users are actively requesting fixes for Unix-first assumptions in Python scripts, specifically regarding `cp1252` encoding, multi-byte UTF-8 panics ([Issue #1169](https://github.com/anthropics/skills/issues/1169), [Issue #1061](https://github.com/anthropics/skills/issues/1061)), and subprocess `PATHEXT` failures.
*   **Enterprise & Team Collaboration**: Users are pushing for organizational-level skill management. [Issue #228](https://github.com/anthropics/skills/issues/228) highlights the demand for org-wide skill sharing and direct sharing links, rather than manual file uploads. Additionally, [Issue #1175](https://github.com/anthropics/skills/issues/1175) shows demand for strict access-control patterns when handling internal SharePoint Online documents.
*   **Security & Trust Boundaries**: As the ecosystem grows, users are concerned about malicious impersonation. [Issue #492](https://github.com/anthropics/skills/issues/492) raises alarms about community skills masquerading under the trusted `anthropic/` namespace, requesting stricter validation and namespace isolation.

### 3. High-Potential Pending Skills
The following PRs are currently open, actively discussed, and solve immediate pain points, making them highly likely to be merged or officially adopted soon:

*   [PR #541](https://github.com/anthropics/skills/pull/541) - **fix(docx)**: Prevents document corruption by fixing tracked change `w:id` collisions with existing OOXML bookmarks. This is a critical stability fix for document generation.
*   [PR #538](https://github.com/anthropics/skills/pull/538) - **fix(pdf)**: Corrects case-sensitive file references (e.g., `REFERENCE.md` vs `reference.md`) in SKILL.md that break PDF generation on case-sensitive OS environments like Linux.
*   [PR #509](https://github.com/anthropics/skills/pull/509) - **docs**: Introduces a much-needed `CONTRIBUTING.md` to standardize community submissions and improve the repository's health metrics.

### 4. Skills Ecosystem Insight
At the Skills level, the community's most concentrated demand is for robust cross-platform CLI execution (specifically Windows compatibility) and standardized security guardrails to ensure trusted, organization-wide skill sharing.

---

Here is the Claude Code community digest for June 15, 2026.

### 1. Today's Highlights
Community activity over the past 24 hours has been dominated by critical bug reports and regressions following the rollout of the v2.1.16x-2.1.17x TUI updates. Key concerns include severe Terminal UI rendering issues on macOS/WSL and data-loss scenarios stemming from both file-overwrites and recent updates. Feature-wise, the community is pushing heavily for better Windows/WSL support and safer execution guardrails for agent teams.

### 2. Releases
No new releases were published in the last 24 hours. 

### 3. Hot Issues
1. **[Feature Request] Multi-account switching in Claude Mobile app ([#36151](https://github.com/anthropics/claude-code/issues/36151))**
   With 88 comments and 341 upvotes, this long-standing request remains highly active. Users are frustrated by the inability to easily switch between personal and enterprise accounts without sharing email aliases.
2. **[Bug] TUI Renderer corrupts screen in long iTerm2 sessions ([#68461](https://github.com/anthropics/claude-code/issues/68461))**
   A major regression introduced after v2.1.162. The CLI emits massive cursor-up sequences during long or resumed macOS iTerm2 sessions, anchoring prompts to row 1 and breaking the UI.
3. **[Bug] Write tool causes irrecoverable data loss on governed files ([#67917](https://github.com/anthropics/claude-code/issues/67917))**
   Developers warn that the Write tool's default full-file-replacement behavior is dangerous. There is a strong demand for an append-only mechanism or protected-path safeguard.
4. **[Bug] v2.1.150: Scroll wheel no longer scrolls conversation ([#65833](https://github.com/anthropics/claude-code/issues/65833))**
   A highly disruptive WSL/Windows regression where the mouse scroll wheel now sends arrow keys, cycling through input history instead of scrolling the TUI output. 
5. **[Bug] Database content deleted after Claude Code update ([#67892](https://github.com/anthropics/claude-code/issues/67892))**
   A critical data-loss report where a user lost months of database data following an update to Claude Fable 5 (v2.1.170). 
6. **[Bug] Cowork: Global instructions silently revert to older version ([#40175](https://github.com/anthropics/claude-code/issues/40175))**
   A persistent bug in cowork mode where saving global instructions appears successful but silently reverts to an older state behind the scenes.
7. **[Bug] SendMessage tool referenced but not available ([#38183](https://github.com/anthropics/claude-code/issues/38183))**
   Agent continuation is broken following the removal of the `resume` parameter, leaving the `SendMessage` tool dangling and breaking complex agent workflows.
8. **[Bug] Remote Control (claude rc) on mobile drops image attachments ([#68459](https://github.com/anthropics/claude-code/issues/68459))**
   Users report that image attachments sent from Android/iOS devices during a `claude rc` session never reach the model, silently dropping context without error.
9. **[Bug] Malformed tool calls with stray text prefix in MCP sessions ([#68472](https://github.com/anthropics/claude-code/issues/68472))**
   During extended MCP sessions (>150k tokens), `claude-opus-4-7` occasionally prefixes tool calls with stray text (e.g., `court\n`), causing runtime rejections.
10. **[Bug] Agent deletes empty directories in plan mode without confirmation ([#68455](https://github.com/anthropics/claude-code/issues/68455))**
    Despite being constrained to plan mode, Claude agents are bypassing permissions and autonomously deleting empty directories, raising security and execution predictability concerns.

### 4. Key PR Progress
*Note: Most PRs submitted recently have been automated bounties or spam, requiring stricter manual review.*
1. **[PR #68423: fix(scripts): don't auto-close assigned issues in sweep](https://github.com/anthropics/claude-code/pull/68423)**
   A valuable maintenance PR that updates `scripts/sweep.ts` to prevent the bot from auto-closing issues that are actively assigned to team members, fixing a frustrating workflow bug.
2. **[PR #67699: Claude autonomously ran background scripts calling a paid external](https://github.com/anthropics/claude-code/pull/67699)**
   A bounty-based PR (via NVIDIA AI) attempting to fix a serious security concern where Claude autonomously triggered paid external scripts. 
3. **[PR #67409: Account downgraded due to billing error](https://github.com/anthropics/claude-code/pull/67409)**
   Another automated AI bounty PR attempting to address system-level account billing downgrade errors.
4. **[PR #67722: Claude autonomously ran background scripts calling a paid external](https://github.com/anthropics/claude-code/pull/67722)**
   A closed duplicate PR attempting to add GitHub Action workflows to deduplicate issues automatically. 
5. **[PR #1: Create SECURITY.md](https://github.com/anthropics/claude-code/pull/1)**
   An ancient administrative PR from early 2025 that was surfaced and updated in the last 24 hours, presumably during a repository security audit or policy sweep.

### 5. Feature Request Trends
* **Agent Execution Guardrails:** Developers are requesting strict interception tools for agent teams. A prominent example is the request for a `TeammateSpawning` hook ([#68448](https://github.com/anthropics/claude-code/issues/68448)) to inspect spawn prompts before instantiation, reflecting a need for safer multi-agent orchestration.
* **Native WSL Integration:** Windows/WSL users continue to rally behind native desktop integration ([#49933](https://github.com/anthropics/claude-code/issues/49933)), tired of proxy workarounds and terminal mismatches.
* **Granular File Mutation Controls:** Users want mechanisms to prevent AI hallucinations from destroying state files, asking for append-only modes and protected paths for governed files ([#67917](https://github.com/anthropics/claude-code/issues/67917)).
* **UI Customization:** Requests for the ability to dismiss persistent global UI banners, such as model availability announcements ([#68471](https://github.com/anthropics/claude-code/issues/68471)).

### 6. Developer Pain Points
* **TUI Instability (v2.1.150+):** The recent terminal renderer updates have caused high friction. Developers are wasting time dealing with corrupted iTerm2/Ghostty screens ([#68461](https://github.com/anthropics/claude-code/issues/68461)) and broken input cycling on WSL ([#65833](https://github.com/anthropics/claude-code/issues/65833)).
* **Data Loss & Autonomy Risks:** There is growing anxiety about autonomous file system operations. Incidents of agents deleting directories in plan mode ([#68455](https://github.com/anthropics/claude-code/issues/68455)) and the `Write` tool's destructive full-file-replacement default are eroding developer trust.
* **Security & Context Bloat:** Disconnected MCP integrations are aggressively spamming `system-reminder` tags into the context window ([#68462](https://github.com/anthropics/claude-code/issues/68462)), while false-positive usage policy blocks are interrupting legitimate defensive security audits ([#67152](https://github.com/anthropics/claude-code/issues/67152)).
* **Mobile/Remote Friction:** The Remote Control (`claude rc`) feature is currently hampered by silently dropped image attachments and unavailable debugging commands ([#68460](https://github.com/anthropics/claude-code/issues/68460)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the technical digest for the OpenAI Codex repository for June 15, 2026.

### 1. Today's Highlights
The Codex ecosystem is actively iterating on its Desktop App and CLI, pushing out a new Rust core alpha (`v0.140.0-alpha.19`) alongside major architectural PRs focusing on cross-platform sandboxing, multi-tool installations, and enterprise security. However, the community is currently voicing significant frustration over OS parity (specifically Linux and Windows/WSL), aggressive local resource consumption by the Desktop App, and recent regressions in task completion times. 

### 2. Releases
*   **rust-v0.140.0-alpha.19** ([Release Notes](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.19))
    *   The latest Rust core alpha was published in the last 24 hours, paving the way for under-the-hood architectural improvements aligning with the recent PRs for path containment and tool namespacing.

### 3. Hot Issues
*   **[#11023](https://github.com/openai/codex/issues/11023) - Codex desktop app for Linux (👍 568, 💬 107)**
    *   *Why it matters:* The highest-voted issue in this cycle. Linux developers feel left behind, especially as Mac users report high power consumption. The lack of a native Linux desktop app remains a massive gap in the ecosystem.
*   **[#13993](https://github.com/openai/codex/issues/13993) - Support standalone Windows installer (`codex-setup.exe`) (👍 146, 💬 73)**
    *   *Why it matters:* Enterprise and corporate Windows users are heavily restricted by Microsoft Store policies. A standalone `.exe` installer is critical for broader enterprise adoption.
*   **[#21527](https://github.com/openai/codex/issues/21527) - Codex is really too slow (💬 29)**
    *   *Why it matters:* A general performance complaint where both the VS Code extension and Desktop App are suffering from high latency. This ties into recent reports of task time regressions.
*   **[#28077](https://github.com/openai/codex/issues/28077) - Codex tasks regressed from under 5 minutes to 30-50 minutes (💬 3)**
    *   *Why it matters:* A critical regression in Desktop App v26.609.41114 where task execution time exploded by 10x. Users are reporting that the agent gets stuck or processes context incredibly slowly. 
*   **[#25921](https://github.com/openai/codex/issues/25921) - Desktop continuously generates Crashpad dumps (+5GB per day) (💬 6)**
    *   *Why it matters:* A severe resource leak. The macOS Desktop app is rapidly generating crash dumps in the background, quickly consuming disk space and indicating underlying Chromium/Electron renderer instability.
*   **[#28224](https://github.com/openai/codex/issues/28224) - SQLite feedback logs can write ~640 TB/year (💬 2)**
    *   *Why it matters:* A newly reported bug showing that local SQLite logging runs wild, posing a serious threat to developer SSD endurance.
*   **[#27915](https://github.com/openai/codex/issues/27915) - Linux users cannot access banked usage resets (💬 6)**
    *   *Why it matters:* Linux users are penalized by OpenAI's flexible rate-limit reset mechanism because it requires the Desktop App, which isn't supported on Linux.
*   **[#28074](https://github.com/openai/codex/issues/28074) & [#22423](https://github.com/openai/codex/issues/22423) - WSL integration broken & CLI binary not located (💬 6 & 26)**
    *   *Why it matters:* A flurry of recent issues indicating that setting up WSL runtimes on the Windows Desktop app breaks path mappings (e.g., incorrectly mapping `/mnt/e/` to `C:\mnt\e\`) and fails to locate the bundled CLI binary.
*   **[#10823](https://github.com/openai/codex/issues/10823) - Unable to compact context in VERY long-running session (💬 29)**
    *   *Why it matters:* Deep work sessions (multiple resumes) are hitting context window limits and failing to compact remotely, forcing users to abandon long-running contexts.
*   **[#23891](https://github.com/openai/codex/issues/23891) - In-app browser blocks HTTPS localhost (💬 5)**
    *   *Why it matters:* Local web developers are blocked from testing self-signed localhost certs because the Chromium-based in-app browser lacks a "proceed anyway" bypass for `ERR_CERT_AUTHORITY_INVALID`.

### 4. Key PR Progress
*   **[#28165](https://github.com/openai/codex/pull/28165) - Use PathUri in filesystem permission paths for exec-server**
    *   Refactors filesystem path containment to be generic, a foundational step toward allowing the `app-server` and `exec-server` to run seamlessly on different operating systems (improving WSL/Linux support).
*   **[#27640](https://github.com/openai/codex/pull/27640) - Support multi-tool install requests**
    *   Upgrades the plugin installation API from single-target installs to supporting flat lists or categorized lists, greatly improving the agent's ability to autonomously set up its own tooling.
*   **[#28008](https://github.com/openai/codex/pull/28008) & [#28009](https://github.com/openai/codex/pull/28009) - External Agent Import Telemetry & Accounting**
    *   Adds the necessary contracts and telemetry to track background imports and report artifact-level results for external-agent configurations.
*   **[#27666](https://github.com/openai/codex/pull/27666) - Add managed field support to `requirements.toml`**
    *   Introduces enforcement invariants for managed auth, telemetry, and shell settings, bridging the gap for enterprise deployments relying on `config.toml` layers.
*   **[#27886](https://github.com/openai/codex/pull/27886) & [#25888](https://github.com/openai/codex/pull/25888) - Guardian Security & MITM CA Environment**
    *   Refines Guardian egress rules to preserve explicit user authorization for data sharing, while preparing the environment for Materialized Child MITM Certificate Authorities (likely for advanced local traffic inspection/proxying).
*   **[#27917](https://github.com/openai/codex/pull/27917) - Add explicit realtime speech and silent context APIs**
    *   Gives the app control over what backend text is vocalized in the Realtime voice model, preventing the voice agent from being too "chatty" by reading out progress updates and preambles.
*   **[#27794](https://github.com/openai/codex/pull/27794) - Remove terminal resize reflow flag gates**
    *   Cleans up legacy code by making the `terminal_resize_reflow` feature permanently enabled in the CLI TUI.
*   **[#26434](https://github.com/openai/codex/pull/26434) - Preserve hook trust bypass in codex exec threads**
    *   Fixes a bug where the `--dangerously-bypass-hook-trust` flag was lost when the `app-server` reloaded config, ensuring untrusted hooks continue to run in background exec threads.
*   **[#27963](https://github.com/openai/codex/pull/27963) - Reference writable roots from environment context**
    *   Deduplicates developer permissions messages by pointing the LLM to the structured `<filesystem>` environment context rather than listing out writable roots repeatedly.

### 5. Feature Request Trends
*   **OS Parity & Desktop Support:** The community is loudly demanding platform equality. Linux users desperately want a native Desktop App to match Mac/Windows, while Windows users want a standalone `.exe` installer (bypassing the MS Store) and seamless WSL integration.
*   **Session State Management & Recovery:** Developers are asking for "Projects" (similar to ChatGPT Projects) with shared memory across chats ([#13836](https://github.com/openai/codex/issues/13836)), as well as automatic session checkpointing ([#28218](https://github.com/openai/codex/issues/28218)) to resume unattended workflows after network drops or crashes.
*   **Enhanced MCP & Hooks Flexibility:** Users migrating from tools like Cursor want more robust hooking capabilities ([#18051](https://github.com/openai/codex/issues/18051)) for custom data reporting and deeper MCP integrations.
*   **Local Developer Experience:** Web devs need the in-app browser to bypass self-signed cert errors for local HTTPS servers ([#23891](https://github.com/openai/codex/issues/23891)).

### 6. Developer Pain Points
*   **Resource Consumption & Stability:** The Codex Desktop App is behaving like a resource hog. Developers are frustrated by runaway processes—including the app generating gigabytes of crash dumps a day ([#25921](https://github.com/openai/codex/issues/25921)) and aggressive SQLite database writes that threaten SSD lifespans ([#28224](https://github.com/openai/codex/issues/28224)).
*   **Broken Windows/WSL Pathing:** The Desktop App's integration with WSL is highly fragile. Fresh installs are failing to locate the CLI binary, and WSL is incorrectly mapping Windows paths ([#28174](https://github.com/openai/codex/issues/28174)), stalling Windows-based development.
*   **Context Window Management:** Long-running agents are crashing into hard context limits. Remote compaction tasks are failing under heavy load ([#10823](https://github.com/openai/codex/issues/10823)), forcing developers to lose valuable context and start over.
*   **Recent Speed Regressions:** Multiple users have noted that recent app updates have caused task execution times to balloon from a few minutes to nearly an hour ([#28077](https://github.com/openai/codex/issues/28077)), severely impacting productivity.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for June 15, 2026.

### 1. Today's Highlights
The Gemini CLI community is buzzing with discussions around improving agent reliability, specifically addressing subagent hang-ups and refining Auto Memory capabilities. Security and stability are major focal points today, evidenced by multiple high-priority PRs fixing workspace-trust dialog flaws, command injection vulnerabilities, and session corruption recovery. 

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Hot Issues
1. **Generalist agent hangs indefinitely ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409))**
   A high-impact P1 bug where the generalist agent hangs forever during simple operations (like folder creation). Users are forced to manually instruct the model not to defer to subagents to keep working.
2. **Subagent false success on MAX_TURNS interruption ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))**
   The `codebase_investigator` subagent reports `status: "success"` even when it hits the maximum turn limit before doing any actual analysis, silently hiding the interruption from the user.
3. **Auto Memory security and redaction flaws ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525))**
   Auto Memory currently sends local transcript content to the background extraction agent *before* redacting secrets. Maintainers are pushing for deterministic, pre-LLM secret redaction.
4. **AST-aware file reads and codebase mapping investigations ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))**
   An Epic tracking the integration of AST-aware tools (like AST grep) to allow the agent to read method bounds precisely in a single call, thereby reducing token noise and navigation turns.
5. **Reluctance to use custom skills/sub-agents ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968))**
   Developers report that Gemini rarely utilizes custom-defined skills (e.g., gradle, git) autonomously, requiring explicit user prompting for tasks that closely match the skill descriptions.
6. **Shell command execution gets stuck ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))**
   A frustrating P1 bug where the CLI hangs on "Awaiting user input" long after a simple shell command has successfully finished executing.
7. **400 Error triggered by >128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))**
   Users integrating heavy toolchains encounter API limits. The CLI currently fails to intelligently scope or limit enabled tools when the total exceeds 128.
8. **Auto Memory infinite retry on low-signal sessions ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522))**
   If the extraction agent decides a session is low-signal and skips reading it, the session remains "unprocessed" and gets surfaced repeatedly on subsequent runs.
9. **Browser Agent ignores `settings.json` overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267))**
   Users report that the browser subagent completely ignores global or project-level configuration overrides, such as `maxTurns`.
10. **Agents running without permission since v0.33.0 ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093))**
    A regression where subagents begin executing automatically, despite agents being explicitly disabled in user configurations in favor of standard MCP functionality.

### 4. Key PR Progress
1. **[PR #27915](https://github.com/google-gemini/gemini-cli/pull/27915) - Trust dialog discloses hook shapes (P1 Security)**
   Fixes a critical security issue where the folder-trust dialog displayed the *inverse* of the hooks set to run, allowing hidden `SessionStart` hooks to execute arbitrary shell commands upon clicking "Trust".
2. **[PR #27910](https://github.com/google-gemini/gemini-cli/pull/27910) - Bound web search tool latency (P1)**
   Implements a 120-second local timeout around the `google_web_search` utility, aborting hung requests and returning a clear error so the agent can gracefully recover.
3. **[PR #27916](https://github.com/google-gemini/gemini-cli/pull/27916) - GCP project ID format validation**
   Prevents the Auto Memory feature from storing invalid GCP project display names or aliases, which were causing cascading 403 and `CONSUMER_INVALID` API errors.
4. **[PR #27905](https://github.com/google-gemini/gemini-cli/pull/27905) - Keep recreated session files loadable**
   Ensures that if a session file is deleted during runtime, subsequent `appendFileSync` calls recreate it in a valid JSONL state, preventing irreversible session corruption.
5. **[PR #27859](https://github.com/google-gemini/gemini-cli/pull/27859) - Native drag-and-drop and clipboard image pasting**
   Introduces first-class terminal drag-and-drop and `Cmd+V`/`Ctrl+V` image pasting, bringing robust visual multimodal capabilities to standard terminal emulators.
6. **[PR #27904](https://github.com/google-gemini/gemini-cli/pull/27904) - Load JSONL sessions when projectHash is missing**
   Fixes legacy fallback logic that attempted to parse entire session files via `JSON.parse`, which crashed the CLI when encountering multiline JSONL records.
7. **[PR #27914](https://github.com/google-gemini/gemini-cli/pull/27914) - Don't offer to resume unsaved sessions**
   Resolves UX confusion where the CLI printed `To resume this session: gemini --resume <id>` for sessions that were silently disabled due to disk space (`ENOSPC`) errors.
8. **[PR #27887](https://github.com/google-gemini/gemini-cli/pull/27887) - Honor custom theme borders**
   Fixes an issue where documented custom theme colors (like `border.default`) failed to apply on terminals reporting background colors via OSC 11.
9. **[PR #27906](https://github.com/google-gemini/gemini-cli/pull/27906) - Skip background cleanup when listing sessions**
   Resolves a race condition where an unawaited background cleanup task could delete session files at the exact moment `--list-sessions` was actively scanning them.
10. **[PR #27575](https://github.com/google-gemini/gemini-cli/pull/27575) - Prevent command injection (Closed)**
   A merged security patch replacing shell-interpolated `execSync` calls with safe `spawnSync` to prevent command injection via shell metacharacters in the IDE and editor utility paths.

### 5. Feature Request Trends
* **AST-Aware Agentic Tooling:** Strong momentum is building around integrating AST-grep and structural code tools to help the agent understand and navigate repositories with precision, minimizing token bloat.
* **Procedural Safeguards:** Users are requesting built-in safety rails to prevent destructive behaviors (e.g., `git reset --force` or DB modifications) unless explicitly confirmed.
* **Smarter Skill Routing:** Developers want the base model to better recognize and proactively invoke custom-defined skills and subagents autonomously based on context.
* **Robust Multimodal Workflows:** Terminal-level image ingestion (drag-and-drop and pasting) is being actively developed to bring CLI parity to web-based multimodal AI tools.

### 6. Developer Pain Points
* **Subagent Instability:** Agents hanging indefinitely or claiming "success" after hitting hidden `MAX_TURNS` limits are significantly disrupting developer trust in autonomous workflows.
* **Auto Memory Noise:** The background extraction agent frequently spins on low-signal sessions, struggles with malformed patches, and risks leaking environment secrets before redaction.
* **State & Session Persistence:** Managing JSONL session states is highly brittle, with minor disk errors, missing hashes, or file deletions frequently leading to crashed sessions or corrupt histories.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the community digest for GitHub Copilot CLI based on the June 15, 2026 data snapshot.

### 1. Today's Highlights
Activity over the last 24 hours has been entirely community-driven, with no new releases or merged Pull Requests. The focus remains on triaging newly submitted feature requests, such as BYOK model discovery and Azure DevOps integration. Additionally, the community is actively discussing critical session stability bugs, including memory duplication errors and attachment poisoning, which currently dominate the issue tracker.

### 2. Releases
*No new releases or version updates were published in the last 24 hours.*

### 3. Hot Issues
*Note: 7 issues were active today. Here are the most impactful items shaping the current community discussion:*

*   **Duplicate Item Errors with Context Memory** ([#3558](github/copilot-cli Issue #3558)) - **👍 7 | 4 comments**
    *   *Why it matters:* Users are hitting persistent `CAPIError: 400` websocket errors caused by duplicate items being sent to the model. This seems rooted in the context-memory handling and is currently the most upvoted active issue, significantly degrading the chat experience.
*   **Agent Skills Scripts Executed in Wrong Folder** ([#956](github/copilot-cli Issue #956)) - **👍 2 | 6 comments**
    *   *Why it matters:* This long-standing bug (open since January) highlights a discrepancy between Copilot CLI's execution path and the official `agentskills.io` specification for file references. It breaks the reliability of custom agent skills.
*   **Feature Request: Opt-in Model Discovery for BYOK / Custom Providers** ([#3795](github/copilot-cli Issue #3795))
    *   *Why it matters:* As Bring Your Own Key (BYOK) setups become more common, the requirement to manually pass exact model identifiers is becoming a major UX bottleneck. This feature request asks for automatic API querying to list available provider models.
*   **Add Azure DevOps Work Items to Up Next** ([#3794](github/copilot-cli Issue #3794))
    *   *Why it matters:* Enterprise users operating in hybrid environments want the global "Up next" inbox to surface assigned Azure DevOps (ADO) work items alongside standard GitHub issues, bridging the gap between supported ADO repos and native GitHub task management.
*   **Malformed Attachment Poisons Session** ([#3791](github/copilot-cli Issue #3791))
    *   *Why it matters:* A severe reliability bug where attaching an unsupported or encrypted file (e.g., a password-protected `.xlsx`) permanently breaks the session. All subsequent text-only prompts fail with a 400 error, forcing the user to restart the CLI.
*   **Garbled Issue Report** ([#3793](github/copilot-cli Issue #3793))
    *   *Why it matters:* Submitted as a low-quality bug report containing only hash-like strings and no context. Serves as a reminder for the community to adhere to issue templates to maintain triage efficiency. 
*   **Spam/Invalid Submission** ([#3796](github/copilot-cli Issue #3796))
    *   *Why it matters:* Rapidly closed by maintainers as invalid spam ("hhhhhhh"). Highlights the ongoing maintenance effort required to keep the issue tracker clean.

### 4. Key PR Progress
*There were no Pull Requests updated, opened, or merged in the last 24 hours.*

### 5. Feature Request Trends
*   **BYOK & Custom Provider UX Enhancements:** There is a strong push to make custom model integrations more seamless. Users want the CLI to intelligently discover available models via provider APIs rather than relying on strict manual environment variables or CLI flags (Issue #3795).
*   **Cross-Platform Enterprise Task Management:** As Copilot CLI expands its footprint, users expect unified dashboards. The request to integrate Azure DevOps work items into the GitHub-centric "Up next" panel (Issue #3794) points to a trend of users wanting a single pane of glass for multi-platform developer workflows.

### 6. Developer Pain Points
*   **Session State Fragility:** The most prominent frustration today is session crashing. If a malformed file is attached (Issue #3791) or context memory generates duplicate payload items (Issue #3558), the session enters a permanent failure state (400 errors). Developers are expressing frustration that single bad inputs aren't gracefully isolated or skipped.
*   **Agent Skill Reliability:** Developers building automated workflows are running into friction with basic file path resolutions. The failure to accurately execute local scripts based on standard specs (Issue #956) undermines trust in the agent capabilities.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the community digest for the Kimi Code CLI project.

# Kimi Code CLI Community Digest - 2026-06-15

### 1. Today's Highlights
The past 24 hours saw no new official releases for Kimi Code CLI, but the community remained highly active on the development and feedback fronts. Significant focus was placed on core tool reliability and Windows compatibility, evidenced by new bug fixes for file editing and the closure of several long-standing Windows-centric pull requests. Meanwhile, friction continues to grow among enterprise users regarding rate limits and quota transparency on the "Code Plan" subscription.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
*(Note: 2 issues updated in the last 24 hours)*
*   **[#2123] [enhancement] 限速，限额严重 (Severe Rate Limiting and Quotas)**
    *   **Author:** littlePoBoy | **Comments:** 2 | **Updated:** 2026-06-14
    *   **Overview:** A highly critical issue where a developer reports that the advertised "300–1200 requests per 5 hours" for the Code Plan actually yields around 60 calls in practice. The user expresses extreme frustration over the lack of transparent quota metrics (only showing a percentage used) and reports an unfulfilled refund request, citing consumer protection laws.
    *   **Link:** [MoonshotAI/kimi-cli Issue #2123](https://github.com/MoonshotAI/kimi-cli/issues/2123)
*   **[#2451] [bug] System prompt conflicting with my desired workflow**
    *   **Author:** iaindooley | **Comments:** 0 | **Updated:** 2026-06-14
    *   **Overview:** A Debian user running Kimi Code v0.12.0 with the `k2.7-coding` model reports that the internal system prompt is actively conflicting with their strict, custom development guidelines. This highlights ongoing challenges with prompt injection and customization for enterprise workflows.
    *   **Link:** [MoonshotAI/kimi-cli/issues/2451)

### 4. Key PR Progress
*(Note: 4 PRs updated in the last 24 hours)*
*   **[#2452] [OPEN] fix(tools): fail StrReplaceFile when a multi-edit hunk is unmatched**
    *   **Summary:** A crucial bug fix proposing that `StrReplaceFile` should throw an immediate error if *any* specific edit hunk fails to match, rather than only erroring out if the entire file content remains completely unchanged. This prevents silent failures during complex multi-step refactoring.
    *   **Link:** [MoonshotAI/kimi-cli PR #2452](https://github.com/MoonshotAI/kimi-cli/pull/2452)
*   **[#839] [CLOSED] feat(shell): add configurable shell support for Windows**
    *   **Summary:** A previously opened PR aimed at introducing configurable shell support for Windows environments. Its closure indicates a resolution or pivot in how the CLI handles Windows shell execution.
    *   **Link:** [MoonshotAI/kimi-cli PR #839](https://github.com/MoonshotAI/kimi-cli/pull/839)
*   **[#2018] [CLOSED] feat: add Alt+V paste support for Windows Terminal**
    *   **Summary:** Addressed a UX blocker where Windows Terminal intercepts `Ctrl+V`, preventing `prompt_toolkit` from receiving the paste event. The PR successfully added `Alt+V` as a reliable fallback keybinding.
    *   **Link:** [MoonshotAI/kimi-cli PR #2018](https://github.com/MoonshotAI/kimi-cli/pull/2018)
*   **[#2020] [CLOSED] fix: use per-process log filenames to prevent rotation lock on Windows**
    *   **Summary:** Fixed a concurrency issue on Windows where multiple Kimi processes would crash with a `PermissionError [WinError 32]` because they contested access to `kimi.log`. The fix implements unique per-process log files (e.g., `kimi.{pid}.log`).
    *   **Link:** [MoonshotAI/kimi-cli PR #2020](https://github.com/MoonshotAI/kimi-cli/pull/2020)

### 5. Feature Request Trends
Based on recent community activity, the primary feature requests and enhancement trends include:
*   **API Usage Transparency:** Strong demand for exact API call metrics and hard numbers regarding quotas, moving away from abstract "percentage used" dashboards.
*   **Custom Prompt Overrides:** Developers require deeper configuration layers to override or bypass default system prompts to fit strict, proprietary coding standards.
*   **Windows Environment Parity:** A persistent need for better native Windows integration, specifically regarding terminal keybindings (paste support) and process concurrency (logging).

### 6. Developer Pain Points
*   **Opaque Rate Limiting & Dropped Tiers:** The most severe pain point is the disconnect between marketed API throughputs and actual throttled performance. Developers are hitting invisible rate limits well before reaching advertised quotas, causing disruptions in automated development loops.
*   **Silent Tool Failures:** The current implementation of file editing tools (like `StrReplaceFile`) masks errors during multi-hunk replacements. Developers waste time assuming a script executed successfully when it actually silently skipped a non-matching replacement.
*   **Native Windows Friction:** Running multiple instances of the CLI on Windows has historically resulted in log-locking crashes, and basic keyboard shortcuts (like Paste) require workarounds, making the Windows experience less smooth than Unix environments.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for June 15, 2026.

### 1. Today's Highlights
OpenCode rolled out critical stability patches in v1.17.7, addressing plugin client routing, PTY environment variables, and MCP server compatibility. The community is highly engaged with advanced agentic workflows, driving massive interest in nested sub-agent spawning and dynamic workflows. Meanwhile, desktop and TUI users are pushing for better session isolation and UI stability, especially during long-running coding tasks.

### 2. Releases
*   **[v1.17.7](https://github.com/anomalyco/opencode/releases)**: Delivered core bugfixes ensuring plugin client requests reuse the active server rather than assuming the default local port. It also improved shell tool visibility for ACP and ensured plugin-provided environment variables properly apply to PTY sessions.
*   **[v1.17.6](https://github.com/anomalyco/opencode/releases)**: Focused on Model Context Protocol (MCP) stability by explicitly declaring OpenCode's supported client capabilities, greatly improving third-party MCP server compatibility.

### 3. Hot Issues
1.  **[#28846](https://github.com/anomalyco/opencode/issues/28846) [FEATURE]: Adjust Go usage limits after DeepSeek V4 Pro price reduction** - *Closed*. With DeepSeek V4 Pro dropping 75% in price, the community (79 upvotes) successfully lobbied to adjust subscription limits.
2.  **[#11829](https://github.com/anomalyco/opencode/issues/11829) [FEATURE]: RLM Context Management** - *Open*. Highly upvoted request to implement Recursive Language Models, treating context as an external queryable environment rather than relying on sliding windows and compaction.
3.  **[#5305](https://github.com/anomalyco/opencode/issues/5305) [FEATURE]: Plugin Hook for Instant TUI Commands** - *Open*. Users want the ability to execute plugin commands instantly in the TUI without having to route through the LLM agent loop.
4.  **[#28957](https://github.com/anomalyco/opencode/issues/28957) [BUG]: "Upstream idle timeout exceeded"** - *Open*. An ongoing bug affecting macOS Tahoe users where infrastructure upstream idles out unexpectedly during the "writing-plans" skill.
5.  **[#25832](https://github.com/anomalyco/opencode/issues/25832) [BUG]: Cannot read images anymore** - *Open*. Vision-enabled models are suddenly failing to process PNG/JPG inputs, disrupting UI development workflows.
6.  **[#30355](https://github.com/anomalyco/opencode/issues/30355) fix(session): inherit parent directory + workspaceID in subagent sessions** - *Open*. Highlights a workspace coherence bug where HTTP server mode subagents inherit the daemon's cwd instead of the parent session's context.
7.  **[#12503](https://github.com/anomalyco/opencode/issues/12503) [FEATURE]: Add font customization** - *Open*. A highly requested UI feature (9 upvotes) to set font family, size, and weight via `opencode.json`.
8.  **[#32336](https://github.com/anomalyco/opencode/issues/32336) TUI: incomplete terminal teardown on exit** - *Open*. Exiting via `/exit` leaves terminals in a broken state, failing to disable mouse tracking and bracketed paste.
9.  **[#31526](https://github.com/anomalyco/opencode/issues/31526) SQLite auto_vacuum disabled** - *Open*. Database files grow indefinitely due to `auto_vacuum` being set to NONE, causing massive disk bloat over long sessions.
10. **[#30763](https://github.com/anomalyco/opencode/issues/30763) [FEATURE]: TUI Session flags** - *Open*. Users are requesting lightweight, user-defined status tags (todo, doing, done) to manage multiple sessions visually.

### 4. Key PR Progress
1.  **[#32301](https://github.com/anomalyco/opencode/pull/32301) feat: nested sub-agent spawning** - Introduces the ability for subagents to spawn their own subagents up to 5 levels deep, fixing critical state-transition bugs.
2.  **[#32331](https://github.com/anomalyco/opencode/pull/32331) feat(app): stabilize long session timelines** - Moves code highlighting off the main thread to fix scrolling, overlapping, and rendering bugs during extended Desktop sessions.
3.  **[#29789](https://github.com/anomalyco/opencode/pull/29789) feat: Dynamic workflows** - Adds Claude Code-style project-local workflows that execute via `/workflow <name> arg=value` directly in the TUI.
4.  **[#24289](https://github.com/anomalyco/opencode/pull/24289) fix: Repair truncated JSON tool inputs** - Implements `jsonrepair` to gracefully fix malformed or truncated JSON arguments from LLMs, preventing tool execution failures.
5.  **[#32299](https://github.com/anomalyco/opencode/pull/32299) feat(tui): add thread commands and session graph** - Adds `/thread` and `/tree` slash commands to manage conversational branches visually.
6.  **[#9545](https://github.com/anomalyco/opencode/pull/9545) feat(usage): unified usage tracking** - Implements built-in usage tracking for OAuth providers (Claude, Copilot, ChatGPT) and exposes it via `GET /usage`.
7.  **[#32262](https://github.com/anomalyco/opencode/pull/32262) feat(opencode): markdown export** - Upgrades the `opencode export` command to output readable Markdown transcripts in addition to JSON.
8.  **[#32349](https://github.com/anomalyco/opencode/pull/32349) feat(plan): enable plan mode by default** - Proposes making Plan Mode the default behavior for the agent.
9.  **[#23108](https://github.com/anomalyco/opencode/pull/23108) feat(opencode): Bedrock cache_point_ttl** - Introduces prompt caching configurations for AWS Bedrock users to optimize API costs.
10. **[#27805](https://github.com/anomalyco/opencode/pull/27805) Discover running serve instances** - Adds Effect-backed discovery so the TUI can seamlessly connect to background servers.

### 5. Feature Request Trends
*   **Advanced Context & Agent Orchestration**: A clear push toward complex, multi-layered AI workflows. Users want nested sub-agents ([#32301](https://github.com/anomalyco/opencode/pull/32301)), dynamic CLI workflows ([#29789](https://github.com/anomalyco/opencode/pull/29789)), and revolutionary context handling like RLM ([#11829](https://github.com/anomalyco/opencode/issues/11829)).
*   **Workspace & Session Management**: Developers are running multiple sessions simultaneously and need better tools to organize them. Requests include session status tags ([#30763](https://github.com/anomalyco/opencode/issues/30763)), threaded conversational graphs ([#32299](https://github.com/anomalyco/opencode/pull/32299)), and saved prompt bookmarks ([#24017](https://github.com/anomalyco/opencode/issues/24017)).
*   **Seamless Remote Development**: SSH and remote environments remain a priority. Users are actively requesting SSH remote directory references ([#31901](https://github.com/anomalyco/opencode/issues/31901)) and native WSL execution for the Windows Desktop app ([#32197](https://github.com/anomalyco/opencode/issues/32197)).

### 6. Developer Pain Points
*   **TUI & Terminal Hygiene**: Terminal environments are sensitive to OpenCode's hooks. Users report frustrating copy/paste bugs ([#15604](https://github.com/anomalyco/opencode/issues/15604)), collapsed newlines ([#16521](https://github.com/anomalyco/opencode/issues/16521)), unresponsive stop buttons ([#32310](https://github.com/anomalyco/opencode/issues/32310)), and broken terminal states upon exit ([#32336](https://github.com/anomalyco/opencode/issues/32336)).
*   **Desktop App Instability**: The Windows desktop client is suffering from UI refresh failures ([#32303](https://github.com/anomalyco/opencode/issues/32303)) and unexpected crashes ([#32334](https://github.com/anomalyco/opencode/issues/32334), [#32330](https://github.com/anomalyco/opencode/issues/32330)) during critical coding tasks.
*   **Provider & Auth Quirks**: Managing API limits and third-party connections remains a hurdle. Users are fighting missing auth headers ([#25757](https://github.com/anomalyco/opencode/issues/25757)), upstream timeouts with newer models like Qwen 3.7 Max ([#32346](https://github.com/anomalyco/opencode/issues/32346)), and inaccessible vision/image input capabilities ([#25832](https://github.com/anomalyco/opencode/issues/25832)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for 2026-06-15.

### 1. Today's Highlights
The Pi ecosystem sees significant activity in extension APIs and terminal UX, with new merged support for extension-level prompt guidelines, slash-command execution in injected prompts, and first-run terminal theme detection. The community has been highly active in identifying and resolving regressions introduced in the `0.79.x` release, particularly surrounding Anthropic cache retention TTLs and OpenAI streaming behaviors. Notably, official support for xAI Grok OAuth login landed today, expanding the platform's multi-model capabilities.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **[Anthropic Cache Costs Inflated](https://github.com/earendil-works/pi/issues/5703)** - A closed bug revealed that Pi's `cacheRetention: "long"` was silently degraded to 5 minutes instead of 1 hour because the required Anthropic beta header was missing, significantly driving up API costs.
*   **[Escape Key Fails to Stop Subagents](https://github.com/earendil-works/pi/issues/5685)** & **[Issue #5736](https://github.com/earendil-works/pi/issues/5736)** - Users reported that pressing `Escape` to interrupt tasks no longer reliably terminates background/subagents, leaving processes running in the background. 
*   **[Shrinkwrap Causing Duplicate Module Instances](https://github.com/earendil-works/pi/issues/5653)** - Installing both `pi-ai` and `pi-coding-agent` creates duplicate copies on disk, breaking the module-level API provider registry. 
*   **[Exclude Custom Messages from Context](https://github.com/earendil-works/pi/issues/5654)** - A highly requested feature to add an `excludeFromContext` flag for custom messages via `sendMessage()`, preventing UI status updates from polluting the LLM's context window.
*   **[CLI Hangs with Long-Lived MCP Servers](https://github.com/earendil-works/pi/issues/5687)** - Commands like `pi list` and `pi update` hang indefinitely if an installed extension runs a persistent MCP server.
*   **[OpenAI Provider Timeouts](https://github.com/earendil-works/pi/issues/3627)** - Local LLM developers highlighted a major pain point: the 10-minute hardcoded timeout on `openai-*` providers breaks workflows when using slower local inference.
*   **[GPT-5.5 Context Window Mismatch](https://github.com/earendil-works/pi/issues/5644)** - Pi was incorrectly mapping context limits for OpenAI's newly released GPT-5.5 (Codex vs API limits).
*   **[Cache Control TTL Proxy Conflicts](https://github.com/earendil-works/pi/issues/5718)** - A regression in v0.79.0 where explicit `cache_control` TTLs on tool blocks conflict with proxies (like OpenCode/zen) that rewrite system TTLs, causing 400 errors.
*   **[WezTerm Image Rendering Bug](https://github.com/earendil-works/pi/issues/5618)** - The `read` tool is chunking and failing to render images properly in the WezTerm terminal due to TUI protocol mismatches.
*   **[Global vs Local Config Overlap](https://github.com/earendil-works/pi/issues/5671)** - Armin Ronacher (`mitsuhiko`) initiated a discussion on resolving the overlapping `$HOME/.pi` global settings and local project `.pi` directories.

### 4. Key PR Progress
Recent pull requests show a strong focus on extension tooling and reliability:

*   **[feat(extensions): add vim-like modal editor extension](https://github.com/earendil-works/pi/pull/2331)**: Merged a massive community contribution bringing Vim modes (Normal, Insert, Visual, Command-line), motions, and operators directly into the Pi TUI.
*   **[feat(coding-agent): add extension prompt guideline API](https://github.com/earendil-works/pi/pull/5711)**: Implements a new API allowing extensions to inject custom prompt guidelines dynamically.
*   **[feat(extensions): support allowCommands option in sendUserMessage](https://github.com/earendil-works/pi/pull/5732)**: Enables extensions to programmatically trigger slash commands via prompt template expansion.
*   **[Add excludeFromContext for custom messages](https://github.com/earendil-works/pi/pull/5678)**: Implements the highly requested feature to prevent specific custom messages from being sent to the LLM during compaction or conversion.
*   **[codex: add xAI Grok account OAuth login](https://github.com/earendil-works/pi/pull/5714)**: Introduces native OAuth, device-code login, and routing support for Grok subscription models.
*   **[feat: detect first-run terminal theme](https://github.com/earendil-works/pi/pull/5385)**: Automatically detects the user's terminal color scheme via OSC on the first run to apply an appropriate Pi theme.
*   **[fix(coding-agent): defer extension reload requests safely](https://github.com/earendil-works/pi/pull/5735)**: Makes `ctx.reload()` awaitable and prevents race conditions by only running extension reloads at safe execution boundaries.
*   **[Require terminal events for OpenAI Responses streams](https://github.com/earendil-works/pi/pull/5526)**: Fixes a bug where OpenAI response streams would randomly halt, forcing users to type "continue".
*   **[feat(coding-agent): Add tool instrumentation for execution profiling](https://github.com/earendil-works/pi/pull/5731)**: Adds performance profiling to track tool execution times.
*   **[fix(ai/model): adjust minimax-m3 context size](https://github.com/earendil-works/pi/pull/5701)**: Corrects the Minimax-M3 context limit to 524,288 tokens to prevent OpenRouter API rejections.

### 5. Feature Request Trends
*   **Advanced Extension Capabilities**: Developers are pushing for deeper programmatic control, requesting extension-level prompt guidelines, raw provider response hooks (`after_provider_response`), and better context exclusion for framework status messages.
*   **Multi-Session & Agent Management**: High demand for native TUI support to juggle and seamlessly switch between multiple concurrent live agent sessions.
*   **Granular Context & Compaction Control**: Requests for model-specific compaction limits, allowing smaller local LLMs to define their own `reserveTokens` and `keepRecentTokens` limits independently of global settings.
*   **Official Extension Marketplace**: Requests for a structured, categorized marketplace with a rating system to discover productivity extensions more easily.

### 6. Developer Pain Points
*   **Hardcoded Constraints for Local LLMs**: Developers utilizing OpenAI-compatible local inference are hitting hardcoded 10-minute timeouts and arbitrary summary approval hangs, breaking long-running agentic loops.
*   **Package Management & Distribution**: Friction remains around npm distribution, including broken pnpm global self-updates, undiscovered semver ranges (`^`), and module duplication causing registry map teardowns.
*   **Terminal Cleanup on Exit**: A recurring frustration where external interrupts (like `SIGTERM` or pressing `Escape`) leave the terminal in a broken state (raw mode left on, Kitty keyboard protocols still active), requiring a terminal restart.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-06-15.

### 1. Today's Highlights
The Qwen Code community is actively focused on resolving critical memory management and tool-execution bugs, particularly around handling large context histories and agent orchestration. A major point of friction remains the recently adjusted OAuth free tier policy, which has sparked significant community debate. On the development front, contributors are steadily merging architectural refactors to decouple model routing from authentication and improve tool-result compaction.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
*   **[#3203 [OPEN] Qwen OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203)**: Generating massive community feedback (135 comments). Users are highly concerned about the sudden reduction of the daily free quota from 1,000 to 100 requests and the impending total phase-out of the free tier.
*   **[#5080 [OPEN] [Bug] Aliyun Standard API Key and Token Plan endpoint mixup](https://github.com/QwenLM/qwen-code/issues/5080)**: Users report 401 errors when switching models between Aliyun DashScope standard keys (`sk-xxx`) and Token Plan providers, highlighting authentication routing friction.
*   **[#5083 [OPEN] TUI freezes due to zombie subprocesses](https://github.com/QwenLM/qwen-code/issues/5083)**: A critical Linux bug where the TUI freezes completely because defunct bash and MCP child processes are not properly reaped.
*   **[#5101 [OPEN] Large tool results carried through provider history](https://github.com/QwenLM/qwen-code/issues/5101)**: Qwen Code currently passes repeated, massive tool outputs back to the provider history, quickly exhausting context limits and degrading performance.
*   **[#5102 [OPEN] Provider-requested side effect execution](https://github.com/QwenLM/qwen-code/issues/5102)**: A security concern where Qwen Code executes provider-requested shell commands despite a permission-contract probe denying the action.
*   **[#5099 [CLOSED] Duplicate tool-result history](https://github.com/QwenLM/qwen-code/issues/5099)**: Identified a bug where reusing a tool-call ID caused duplicate tool results to be sent to the provider, corrupting conversation state.
*   **[#5055 [OPEN] Trojan false positive on VSCode Extension](https://github.com/QwenLM/qwen-code/issues/5055)**: Windows Defender is flagging the latest VSCode companion `.vsix` (v0.18.0) with a trojan detection (`JS/ShaiWorm.DBA!MTB`), blocking developer installations.
*   **[#4218 [OPEN] MCP filesystem tools not available to model](https://github.com/QwenLM/qwen-code/issues/4218)**: Despite the UI showing an MCP server as connected, the underlying AI model fails to receive tool definitions, blocking file operations.
*   **[#4845 [OPEN] Config migration from Claude Code](https://github.com/QwenLM/qwen-code/issues/4845)**: A highly requested feature to add a `/import-config` command to seamlessly port MCP servers, rules, and custom commands from Claude Code to Qwen Code.
*   **[#4723 [CLOSED] Support for Rules/Instructions](https://github.com/QwenLM/qwen-code/issues/4723)**: Developers are asking for a global, persistent rule/instruction system (similar to Claude Code) for setting language styles and cross-session guides.

### 4. Key PR Progress
*   **[PR #5111 fix(core): Bound active tool result history](https://github.com/QwenLM/qwen-code/pull/5111)**: Directly addresses issue #5101 by adding an active history budget, utilizing existing microcompaction paths to clear older oversized tool results while preserving recent context.
*   **[PR #5089 refactor(core): extract Protocol enum and decouple model identity](https://github.com/QwenLM/qwen-code/pull/5089)**: A significant architectural refactor changing `AuthType` to a free-form string and introducing a `Protocol` enum. This decouples provider identity from SDK routing, preventing bugs like the one seen in Issue #5080.
*   **[PR #4894 fix(dual-output): prevent FIFO blocking on startup](https://github.com/QwenLM/qwen-code/pull/4894)**: Resolves TUI unresponsiveness by implementing non-blocking `O_RDWR` for named pipes, preventing the CLI from hanging when no reader is connected.
*   **[PR #5115 fix(core): ignore agent names without active teams](https://github.com/QwenLM/qwen-code/pull/5115)**: Fixes an issue where the bundled `/review` skill would fail and loop if a `name` parameter was passed without active agent teams enabled.
*   **[PR #4967 fix(core): coerce numeric string params in SchemaValidator](https://github.com/QwenLM/qwen-code/pull/4967)**: Improves MCP tool reliability by automatically parsing clean numeric strings (`"3"` → `3`) when integers are expected, preventing schema validation failures.
*   **[PR #4520 fix(core): truncate model-facing tool output](https://github.com/QwenLM/qwen-code/pull/4520)**: Shift string truncation logic from individual shell tools directly into the `CoreToolScheduler`, bounding the size of tool results recorded into the conversation history.
*   **[PR #5073 fix: warn on oversized context instructions](https://github.com/QwenLM/qwen-code/pull/5073)**: Adds a helpful startup warning if `QWEN.md` or context instructions consume more than 15% of the active model's context window.
*   **[PR #4242 fix(cli): map rewind turns after compression](https://github.com/QwenLM/qwen-code/pull/4242)**: Ensures the `/rewind` feature accurately restores correct history snapshots and boundaries after conversation compression occurs.
*   **[PR #4989 ci: add scheduled autofix workflow](https://github.com/QwenLM/qwen-code/pull/4989)**: Introduces an autonomous CI workflow that uses Qwen Code to automatically claim, reproduce, and patch one stale bug report daily.
*   **[PR #4841 fix(cli): close @path completion dropdown](https://github.com/QwenLM/qwen-code/pull/4841)**: A UX fix that immediately closes the autocomplete dropdown when a user accepts an `@path` suggestion via Enter.

### 5. Feature Request Trends
*   **Ecosystem & Tooling Interoperability**: There is a strong push to make Qwen Code play nicer with other AI tools. Requests for direct config migration from Claude Code (#4845), global rule/instruction setups (#4723), and seamless MCP server integrations (#4218) are trending.
*   **Advanced Context Management**: As sessions grow longer, developers are demanding better handling of memory and context windows. Proposals include better `max_tokens` truncation recovery (#4964), line-wrapping for long status bars (#5064), and visual indicators for the active model in the UI (#5104).
*   **Custom Provider Support**: Users want robust support for arbitrary providers, driving the need for decoupled SDK routing (#5090) to easily switch between local OpenAI-compatible endpoints, DashScope, and other API providers.

### 6. Developer Pain Points
*   **Context Window & Memory Exhaustion**: The most prominent technical pain point is the client-side mishandling of large payloads. Developers frequently experience broken sessions, provider schema errors, and out-of-memory crashes because Qwen Code passes massive, un-truncated tool outputs (e.g., shell stdout) back through the provider history (#5101, #5099, #4364).
*   **Quota and Pricing Friction**: The abrupt reduction of the free tier quota and unavailability of the Pro tier for purchase have frustrated everyday developers who rely on the free OAuth entry point for daily work (#3203, #3272).
*   **MCP Tool Reliability**: Setting up Model Context Protocol servers is bumpy. Users are frustrated when the UI falsely reports a successful connection, but the model fails to invoke the tools due to schema mismatches or underlying communication drops (#4218, #4967).
*   **Zombie Processes & TUI Hangs**: Linux developers face severe reliability issues where un-reaped zombie subprocesses cause the entire interactive TUI to freeze, requiring manual process termination (#5083).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the community digest for the DeepSeek TUI (now CodeWhale) project.

### 1. Today's Highlights
The project is officially completing its transition from `deepseek-tui` to **CodeWhale** with the rollout of [v0.8.60](https://github.com/Hmbown/CodeWhale), deprecating the legacy npm package. Development is heavily focused on architectural scaling, with the introduction of the "WhaleFlow" foundation for heterogeneous-model swarm orchestration and numerous fixes targeting Windows UI freezing and sub-agent timeouts.

### 2. Releases
*   **[v0.8.60](https://github.com/Hmbown/CodeWhale)**: Marks the canonical rename to CodeWhale. The legacy `deepseek-tui` npm package is deprecated and will no longer receive updates. Users migrating from older `v0.8.x` releases are advised to follow the guidelines in `docs/REBRAND.md`.

### 3. Hot Issues
1.  **[Issue #2487](https://github.com/Hmbown/CodeWhale/issue/2487) - Frequent YOLO Mode Stalling:** Users report frequent execution freezes in `yolo` mode with a "Turn stalled" error, requiring manual restarts. This reliability bug is causing significant workflow interruptions.
2.  **[Issue #3147](https://github.com/Hmbown/CodeWhale/issue/3147) - Windows MSBuild Tracker Failure:** `cmake --build` commands are unusable in the CodeWhale shell due to MSBuild FileTracker initialization failures on Windows environments.
3.  **[Issue #1812](https://github.com/Hmbown/CodeWhale/issue/1812) - Windows Crossterm Poll UI Freeze:** Deep intermittent UI freezes on Windows 11 leave the keyboard and screen unresponsive while the process hangs in the background.
4.  **[Issue #1679](https://github.com/Hmbown/CodeWhale/issue/1679) - SSE Multi-Agent Timeouts & UI Glitches:** Parallel multi-agent tasks on Windows 11 continue to hit a 45-second timeout limit, accompanied by UI rendering corruption. 
5.  **[Issue #2629](https://github.com/Hmbown/CodeWhale/issue/2629) - Third-Party Provider 401 Auth Errors:** CodeWhale is returning `401 invalid api key` errors when connecting to OpenAI-compatible endpoints like SiliconFlow and Tencent Cloud TokenHub.
6.  **[Issue #1067](https://github.com/Hmbown/CodeWhale/issue/1067) - GLIBC 2.39 Hard Dependency:** Linux users on slightly older distributions (like Ubuntu 22.04 with glibc 2.35) are completely blocked from running the new binary, which strictly requires glibc 2.39. 
7.  **[Issue #2574](https://github.com/Hmbown/CodeWhale/issue/2574) - Provider Fallback Chain:** Users are requesting an automated fallback mechanism to switch API providers if the primary one returns quota (429) or server (5xx) errors.
8.  **[Issue #3066](https://github.com/Hmbown/CodeWhale/issue/3066) - Broken Cost Tracking for 3rd-Party Models:** Pricing and token cost tracking only functions for DeepSeek and Xiaomi MiMo models, returning `None` for Kimi, Qwen, OpenAI, and OpenRouter routing.
9.  **[Issue #1186](https://github.com/Hmbown/CodeWhale/issue/1186) - Typed Persistent Permission Rules:** A highly requested enhancement to add permanent `allow`, `deny`, or `ask` rules scoped by tool name, command prefix, or workspace path.
10. **[Issue #2739](https://github.com/Hmbown/CodeWhale/issue/2739) - Infinite Wait State on Long Tasks:** Long-running bug fixes occasionally deadhead into an infinite wait state. Canceling and attempting to resume via `--continue` results in a total loss of the previous session context.

### 4. Key PR Progress
1.  **[PR #3225](https://github.com/Hmbown/CodeWhale/pull/3225) - v0.8.61 Assembly & WhaleFlow Foundation:** Assembles 28 commits over `main` for the v0.8.61 release, including community harvests, freeze fixes, and the foundational architectural layer for "WhaleFlow."
2.  **[PR #2779](https://github.com/Hmbown/CodeWhale/pull/2779) - Provider Fallback Chain:** Introduces `fallback_providers = [...]` parsing to the configuration model, allowing seamless routing to secondary LLMs during primary API outages.
3.  **[PR #2646](https://github.com/Hmbown/CodeWhale/pull/2646) - Cargo Publish Hardening:** Fixes workspace dependency ordering during `release_crates` to prevent cargo from attempting to publish packages before their freshly-versioned dependencies.
4.  **[PR #2811](https://github.com/Hmbown/CodeWhale/pull/2811) - VSCode Extension Scaffold:** Introduces the Phase 0 official VSCode extension, allowing users to open CodeWhale, start the local HTTP runtime, and check status from inside the editor.
5.  **[PR #2102](https://github.com/Hmbown/CodeWhale/pull/2102) - Deferred Native Tools:** Optimizes TUI boot times by deferring the loading of non-core native tools, materializing them via `ToolSearch` only when requested.
6.  **[PR #2795](https://github.com/Hmbown/CodeWhale/pull/2795) - Auth Error Enrichment:** Improves debugging for 401 errors by attaching request context (provider, base URL, key type, and redacted fingerprint) to authentication failure logs.
7.  **[PR #2770](https://github.com/Hmbown/CodeWhale/pull/2770) - Trusted Workspace MCP Merge:** Allows trusted workspaces to safely merge local `.codewhale/mcp.json` configurations with global MCP setups without directory escape vulnerabilities.
8.  **[PR #2771](https://github.com/Hmbown/CodeWhale/pull/2771) - LLM-Guided `AGENTS.md` Init:** Updates the `/init` command to analyze project context and dynamically generate an `AGENTS.md` file via the LLM, replacing the previous static template.
9.  **[PR #2803](https://github.com/Hmbown/CodeWhale/pull/2803) - Pausable Custom Commands:** Adds `pausable: true` frontmatter support for custom slash commands, enabling users to pause complex workflows mid-execution.
10. **[PR #2103](https://github.com/Hmbown/CodeWhale/pull/2103) - Mouse Capture History Fix:** Resolves an issue where blanket Windows overrides prevented users from using arrow keys to scroll through history when mouse capture was enabled.

### 5. Feature Request Trends
*   **Heterogeneous Model Orchestration (WhaleFlow):** Strong momentum towards building a "swarm" architecture that supports heterogeneous workers (e.g., DeepSeek, GLM, MiniMax, Kimi) collaborating on a single task with a final synthesis/reduce pass.
*   **Agent Autonomy & Guardrails:** Demand for sub-agents to self-manage better. This includes auto-deriving minimized permission sets, requesting user clarification via the UI rather than the chat stream, and tracking token/cost budgets dynamically during long tasks.
*   **API Resilience:** Requests for built-in resilience against network and provider instability, highlighted by the demand for automated provider fallback chains and checkpointing long-running sub-agent tasks.

### 6. Developer Pain Points
*   **Windows Instability:** Windows users are experiencing severe friction, notably UI freezing due to `crossterm` polling issues and SSE multi-agent timeouts breaking parallel workflows.
*   **Rebranding & Deployment Friction:** The transition from `deepseek-tui` to `CodeWhale` has caused path/launch issues for users updating via `npm` or `cargo`. Furthermore, strict compilation requiring GLIBC 2.39 has alienated users on stable enterprise Linux distributions (like Ubuntu 22.04).
*   **Sub-Agent Reliability:** Sub-agents frequently stall or hang indefinitely during long execution windows. Worse, when users attempt to escape or resume the session, context is often permanently lost, forcing workflows to start from scratch.

</details>