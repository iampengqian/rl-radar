# AI CLI Tools Community Digest 2026-06-19

> Generated: 2026-06-18 22:34 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the June 19, 2026 community digests.

### 1. Ecosystem Overview
The AI CLI tool ecosystem is rapidly maturing beyond single-shot code generation toward complex, distributed multi-agent orchestration. In mid-2026, developer focus has shifted toward robust agentic memory management, strict security boundaries for autonomous execution, and seamless interoperability across diverse operating environments. However, scaling these autonomous architectures has introduced shared growing pains, notably runaway token consumption, terminal UI instabilities, and brittle cross-platform rendering. As tools race to support advanced features like background agents and custom model routing, maintainers are aggressively refactoring core architectures and tightening network security to maintain stability and retain developer trust.

### 2. Activity Comparison
*Note: The following data reflects community and maintainer activity specifically recorded in the 24-hour window of June 19, 2026.*

| Tool | Notable Issues Tracked | Active PRs | Release Status (Last 24h) |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 6 | No new releases |
| **OpenAI Codex** | 10 | 10 | **rust-v0.141.0** (+ 3 Alpha builds) |
| **Gemini CLI** | 10 | 10 | **v0.47.0**, **v0.48.0-preview.0** |
| **GitHub Copilot CLI**| 10 | 1 | No new releases |
| **Kimi Code CLI** | 3 | 1 | No new releases |
| **OpenCode** | 10 | 10 | No new releases |
| **Pi** | 10 | 10 | **v0.79.7** |
| **Qwen Code** | 10 | 10 | **v0.18.3** (Nightly) |
| **DeepSeek TUI (CodeWhale)**| 10 | 10 | **v0.8.62** |

### 3. Shared Feature Directions
*   **Multi-Agent Orchestration & State Management:** Almost all tools are pushing toward multi-agent architectures, triggering a shared need for reliable state persistence. Developers are demanding solutions for context compaction loops and resume states (Claude Code, OpenCode, Qwen Code) and seamless distributed executor management (Codex, Gemini CLI).
*   **Granular Permission & Safety Controls:** As agents execute commands autonomously, communities are demanding strict safety hooks. There is a widespread request for programmatic approval overrides and `PreToolUse` interception across Codex, Copilot CLI, OpenCode, and DeepSeek TUI to prevent destructive commands.
*   **Advanced Model Routing & Quota Transparency:** Developers want to move beyond static model selection. Dynamic, task-based routing (e.g., lightweight vs. heavy models) is heavily requested in OpenCode and Copilot CLI. Concurrently, there is massive community frustration regarding invisible rate limits and unexpected token billing, driving demands for real-time CLI quota dashboards (Claude Code, Codex, OpenCode).
*   **Third-Party API & Proxy Compliance:** The rise of Bring Your Own Key/Cloud (BYOK/C) and enterprise proxies is forcing tools to abandon hardcoded network assumptions. Pi, Kimi Code, and DeepSeek TUI communities are all actively fixing how internal HTTP clients handle strict API schemas and OS-level proxy variables.

### 4. Differentiation Analysis
*   **Enterprise Security vs. Local Flexibility:** OpenAI Codex is doubling down on enterprise-grade sandboxing, focusing heavily on encrypted MITM CAs, sandbox boundaries, and cross-OS authentication preservation. In contrast, tools like Pi and OpenCode cater heavily to power users running local LLMs, focusing on bypassing network timeouts, supporting diverse inference endpoints, and dynamic local routing.
*   **Ecosystem Integration vs. Standalone Capabilities:** Copilot CLI and Gemini CLI are pushing deeper into IDE/Enterprise integration (GitHub MCP servers, VS Code extensions, AST-aware repository tools). Meanwhile, standalone TUI tools like DeepSeek TUI (CodeWhale) and Qwen Code are focusing on asynchronous execution frameworks (WhaleFlow) and extended bot channel integrations (QQ, WeChat, Telegram).
*   **Standardization vs. Walled Gardens:** Claude Code is facing intense community pressure to adopt universal standards like `AGENTS.md` for cross-agent memory sharing, contrasting with OpenAI Codex and Gemini CLI, which are actively building out their internal native memory and AST-aware mapping features.

### 5. Community Momentum & Maturity
*   **High Velocity & Maturity:** OpenAI Codex, Gemini CLI, and Qwen Code demonstrate the highest iteration speed, shipping stable or preview releases daily alongside heavy PR merges (10+ PRs per tool). Codex and Gemini, in particular, show mature engineering operations focused on sandbox security and CI/CD stability.
*   **Active Community Traction:** Claude Code, Copilot CLI, and OpenCode are generating massive community engagement (high issue volumes and upvotes), but currently face friction with backend reliability (token billing) and UI stability. They are in a transitional phase, absorbing the shock of massive user adoption.
*   **Niche/Refactoring Phase:** DeepSeek TUI (CodeWhale) is actively undergoing a major architectural refactor (breaking down Rust monoliths) and rebranding. Kimi Code and Pi have lower visible volume today but are highly responsive to specific, actionable community bugs (e.g., immediate PRs for proxy fixes).

### 6. Trend Signals
*   **The "Token Bleed" Epidemic:** The most critical industry pain point right now is unexpected token consumption. Whether through recursive sub-agent spawning (Claude Code), auto-compaction loops (OpenCode), or backend billing bugs (OpenCode, Codex), developers are losing money. Tools that offer reliable, granular quota tracking and loop-breaking circuit breakers will win enterprise trust.
*   **Terminal UI is a Bottleneck:** Rendering AI streaming markdown, code blocks, and diff updates in terminals is universally fragile. From CJK character width bugs (Qwen Code) and markdown stack overflows (Pi) to complete TUI freezes (Copilot CLI, OpenCode), terminal UI architecture is struggling to keep pace with rich agentic data.
*   **The Push for Context-Aware Tools:** To combat token limits and hallucinations, the ecosystem is moving toward AST-aware code navigation (Gemini CLI). Moving from naive string-matching file reads to structured, Abstract Syntax Tree-based interactions will drastically reduce context noise and improve agent accuracy in large repositories.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the technical analysis report for the Claude Code Skills ecosystem, based on community activity as of June 19, 2026.

### 1. Top Skills Ranking
While specific comment counts are parsing as undefined, the following open Pull Requests represent the most active, foundational, and critically-acclaimed Skill contributions based on update frequency and issue resolutions:

*   **Skill-Creator Evaluation Fixes** ([PR #1298](https://github.com/anthropics/skills/pull/1298))
    *   **Functionality:** Overhauls the `run_eval.py` script, fixing a critical 0% recall bug, Windows stream reading, and trigger detection.
    *   **Discussion Highlights:** Addresses the highest-trafficked bug report in the repo (Issue #556), essentially making the Skill description optimization loop functional again. Status: **Open**.
*   **Skill-Creator Windows Compatibility** ([PR #1050](https://github.com/anthropics/skills/pull/1050) & [PR #1099](https://github.com/anthropics/skills/pull/1099))
    *   **Functionality:** Resolves `subprocess.Popen` failures, encoding panics (cp1252), and pipe select errors for users running the CLI on Windows.
    *   **Discussion Highlights:** High engagement from Windows developers who have been entirely blocked from using the automated skill creation loops. Status: **Open**.
*   **Document-Typography Skill** ([PR #514](https://github.com/anthropics/skills/pull/514))
    *   **Functionality:** Automated typographic quality control for generated documents, preventing orphan word wraps, widow paragraphs, and numbering misalignment.
    *   **Discussion Highlights:** Praised for solving subtle, highly common formatting issues in AI-generated documents that users rarely know how to prompt against. Status: **Open**.
*   **Frontend-Design Skill Improvements** ([PR #210](https://github.com/anthropics/skills/pull/210))
    *   **Functionality:** Revises the frontend-design skill to improve internal coherence and actionability.
    *   **Discussion Highlights:** Focuses on ensuring instructions are immediately executable within a single conversation context, fixing token inefficiency issues. Status: **Open**.
*   **DOCX Tracked Change Collision Fix** ([PR #541](https://github.com/anthropics/skills/pull/541))
    *   **Functionality:** Prevents document corruption when adding tracked changes to DOCX files with existing bookmarks.
    *   **Discussion Highlights:** A highly technical deep-dive into OOXML shared ID spaces, fixing a critical data-loss bug in official document generation. Status: **Open**.

### 2. Community Demand Trends
Based on the most active Issues, the community is demanding expansion in three primary directions:
*   **Enterprise Governance & Secure Architecture:** Users want robust safety frameworks for agents. Issue [#412](https://github.com/anthropics/skills/issues/412) proposes a governance skill for policy enforcement and audit trails, while Issue [#1175](https://github.com/anthropics/skills/issues/1175) highlights deep demand for secure permission handling for SharePoint/Enterprise document systems.
*   **Organizational Workflow Automation:** Issue [#228](https://github.com/anthropics/skills/issues/228) (14 comments, 7 upvotes) shows immense demand for org-wide Skill sharing, moving away from manual file sharing toward integrated administrative controls.
*   **Agentic State & Context Management:** There is strong interest in persistent memory solutions. Issue [#1329](https://github.com/anthropics/skills/issues/1329) proposes a symbolic notation skill to compress long-running agent memory, optimizing context window overhead.

### 3. High-Potential Pending Skills
These highly active PRs represent community-driven fixes and features that are likely to be merged soon, as they address critical operational pain points:
*   [PR #361](https://github.com/anthropics/skills/pull/361): Detect unquoted YAML special characters in descriptions. (Fixes silent parsing failures).
*   [PR #362](https://github.com/anthropics/skills/pull/362): Fix Skill-Creator UTF-8 panic on multi-byte characters. (Resolves Rust backend panics).
*   [PR #538](https://github.com/anthropics/skills/pull/538): Correct case-sensitive file references in the PDF skill. (Fixes broken paths on case-sensitive OS environments).
*   [PR #509](https://github.com/anthropics/skills/pull/509): Add `CONTRIBUTING.md` to standardize community PRs and address repository health gaps.

### 4. Skills Ecosystem Insight
The community's most concentrated demand is for **enterprise-grade administration, cross-platform reliability (specifically fixing the `skill-creator` evaluation loops on Windows), and strict security boundaries**—signaling a rapid maturation from individual developer tools to mission-critical, enterprise team workflows.

---

Here is the Claude Code community digest for June 19, 2026.

### 1. Today's Highlights
The Claude Code community experienced a massive spike in activity related to unexpected usage limit spikes, with multiple users reporting their weekly quotas jumping from 50% to 100% almost instantaneously. On the feature front, standardization around `AGENTS.md` continues to be a dominant discussion point as developers look for unified coding agent protocols. Additionally, several critical bugs surrounding multi-agent systems—such as recursive token burn and broken resume states after context compaction—have gained significant traction.

### 2. Releases
No new releases were recorded in the last 24 hours.

### 3. Hot Issues
Here are the 10 most noteworthy issues driving community discussion:

*   **Support `AGENTS.md`** ([#6235](https://github.com/anthropics/claude-code/issues/6235))
    *   *Why it matters:* With 4,170+ upvotes and 322 comments, this is the highest-impact issue in the repo. The community heavily favors standardizing the `AGENTS.md` protocol (used by Codex, Cursor, etc.) over the Claude-specific `CLAUDE.md` to allow seamless cross-agent collaboration.
*   **Usage jumped from 80% to 100% for the week** ([#69419](https://github.com/anthropics/claude-code/issues/69419))
    *   *Why it matters:* One of many issues created on June 18 highlighting a severe system miscalculation in quota tracking. Users on the Max 20x plan are seeing limits max out in minutes without active sessions, breaking production workflows.
*   **General-purpose sub-agents recursively spawn unbounded child agents** ([#68110](https://github.com/anthropics/claude-code/issues/68110))
    *   *Why it matters:* A critical architectural bug where delegated sub-agents recursively spawn their own agents, causing an exponential fan-out tree. This leads to uncontrolled token burn and severe cost implications.
*   **Workflow resume restarts from the beginning after auto-compaction** ([#65796](https://github.com/anthropics/claude-code/issues/65796))
    *   *Why it matters:* When context compaction triggers, multi-agent workflows silently re-run completed agents. This causes massive delays, duplicated work, and wasted context.
*   **Multi-account switching in Claude Mobile app** ([#36151](https://github.com/anthropics/claude-code/issues/36151))
    *   *Why it matters:* With 351 upvotes, this highlights ongoing friction for developers managing separate personal and enterprise accounts seamlessly without shared email workarounds.
*   **Add Quota Information Access to Claude Code CLI** ([#13585](https://github.com/anthropics/claude-code/issues/13585))
    *   *Why it matters:* Developers are requesting native CLI/TUI access to real-time quota metrics to avoid blindly hitting limits and to manage API consumption proactively.
*   **--channels plugin shows 'Channels are not currently available'** ([#36503](https://github.com/anthropics/claude-code/issues/36503))
    *   *Why it matters:* A blocking bug for the notification system where inbound messages from integrations like Telegram are polled correctly but fail to trigger Claude responses.
*   **Claude code 2.1.83 and above broken on WSL1** ([#38788](https://github.com/anthropics/claude-code/issues/38788))
    *   *Why it matters:* A recent regression that completely breaks installation and execution for developers using Windows Subsystem for Linux version 1.
*   **Multi-agent collaboration across machines (Agent-to-Agent protocol)** ([#28300](https://github.com/anthropics/claude-code/issues/28300))
    *   *Why it matters:* A strong signal from the community pushing for distributed agentic workflows, requesting a native protocol for agents to collaborate across different hardware machines.
*   **Effort/model selection ("ultracode") reverts to "extra" when switching chats** ([#66266](https://github.com/anthropics/claude-code/issues/66266))
    *   *Why it matters:* A UI/UX regression where user preferences for maximum compute effort are silently downgraded upon switching chats, resulting in lower quality code generation unexpectedly.

### 4. Key PR Progress
There are currently 6 active PRs in the repository. Note that the repository's open-source contributions seem to be limited to skill updates and internal script maintenance, with several open PRs waiting on maintainer review:

*   **[OPEN] Update frontend-design skill** ([PR #69226](https://github.com/anthropics/claude-code/pull/69226)) - Introduces improvements to the frontend-design skill and bumps the plugin version to 1.1.0 so installed copies can auto-update. *(Note: This is the only recently active functional PR; closed on Jun 17).*
*   **[OPEN] fix: hookify Python 3.8 compat and cwd-independent rule loading** ([PR #23972](https://github.com/anthropics/claude-code/pull/23972)) - Fixes a `TypeError` on Python 3.8 by updating return type syntax for `tuple[Dict, str]`, ensuring compatibility for Ubuntu 20.04 default environments.
*   **[OPEN] fix(scripts): break pagination when page is not full** ([PR #68673](https://github.com/anthropics/claude-code/pull/68673)) - Fixes script pagination logic to break accurately when returned pages are not entirely full, rather than just when empty.
*   **[OPEN] resolve duplicate IPs** ([PR #45553](https://github.com/anthropics/claude-code/pull/45553)) - A routine cleanup script resolving duplicate IP entries in the internal source.
*   **[OPEN] feat: open source claude code ✨** ([PR #41447](https://github.com/anthropics/claude-code/pull/41447)) - A community-submitted PR attempting to expose the full source code of Claude Code.
*   **[OPEN] add the missing source to claude code** ([PR #41611](https://github.com/anthropics/claude-code/pull/41611)) - Similar to above, a community attempt to append missing source files to the repository.

### 5. Feature Request Trends
Based on recent issues, the community is heavily leaning into **interoperability and multi-agent orchestration**. Developers no longer want Claude Code to act as a siloed tool; they are demanding support for cross-agent universal memories (`AGENTS.md`) and distributed agent-to-agent communication protocols. There is also a distinct trend toward **granular developer control**, evidenced by requests for specific permission mode keybindings, OSC 0 terminal title integration, and real-time CLI quota monitoring. 

### 6. Developer Pain Points
The most glaring pain point today is **Cost and Quota tracking unreliability**. A massive cluster of issues (specifically #69419, #69430, #69436, #69433, #69452) centers around weekly usage limits randomly spiking to 100% without active agent usage, often combined with failures to apply cached tokens on workflow resumes. Developers are frustrated by invisible token drains. Secondary frustrations stem from **Agent reliability**—specifically, multi-agent loops failing to persist state after context compaction (#65796) and runaway recursive agents accidentally burning through tokens (#68110).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the technical digest for the OpenAI Codex community for June 19, 2026.

### 1. Today's Highlights
Codex rolls out version `0.141.0`, introducing highly secure, end-to-end encrypted Noise relay channels and native cross-platform preservation for remote executors. Concurrently, the engineering team merged a massive fleet of pull requests focused on overhauling sandbox security, implementing credentialed proxy routing, and fixing early-launch performance regressions on Windows. 

### 2. Releases
*   **rust-v0.141.0** ([Release Notes](https://github.com/openai/codex/releases/tag/rust-v0.141.0))
    *   **Remote Executors:** Transitioned to authenticated, end-to-end encrypted Noise relay channels (#26242, #26245).
    *   **Cross-Platform Execution:** Remote execution now natively preserves executor working directories, shells, and filesystem permission paths across app-server and exec-server OS boundaries.
*   **Alpha Builds:** `rust-v0.142.0-alpha.2`, `rust-v0.142.0-alpha.1`, and `rust-v0.141.0-alpha.7` were also published, paving the way for the next stable iteration.

### 3. Hot Issues
1.  **[#9046] Context Window Exhaustion Bug:** Users report hitting context window limits immediately at the beginning of a chat on Windows. High engagement (33 comments) indicates this is a widespread blocker for active sessions.
2.  **[#18993] VS Code History Regression:** A severe regression preventing users from loading past conversation history in the VS Code extension (1.117.0) is causing major disruptions (31 comments).
3.  **[#25749] Legacy 2FA Lockout:** Users are getting locked out of Codex due to inaccessible legacy phone numbers, with no self-service recovery path available. 
4.  **[#21719] Desktop Chrome Pipe Mismatch:** The bundled Chrome plugin in Codex Desktop cannot connect to the browser-use pipe, causing `@chrome` automation tasks to fail.
5.  **[#28422] CLI `imagen` Regression:** Valid images generated via `gpt-5.4-mini` in CLI v0.140.0 are not being saved when the API status stalls on "generating".
6.  **[#26158] Windows Sandbox `CreateProcessAsUserW` Failure:** Users on ChatGPT Pro are forced to rollback to CLI v0.132.0 because newer sandbox setups fail with OS Error 740 on Windows.
7.  **[#22857] Desktop/iOS SSH Remote Connections:** Users are requesting better SSH key authentication management to securely control remote CLI hosts via mobile.
8.  **[#28112] Windows Computer Use Initialization:** The `@oai/sky` package fails to load `computer_use_client_base.js`, breaking Windows app automation before it even starts.
9.  **[#26415] macOS Computer Use Hangs:** `SkyComputerUseService` spins at 100% CPU and hangs when initiating Locked Computer Use on macOS 26.6.
10. **[#26733] PreToolUse Hooks Blindspot:** Internal patch/edit tools bypass user-defined `PreToolUse` hooks, removing a layer of developer safety control over agent file modifications.

### 4. Key PR Progress
1.  **[#28814] History Recording IDs:** Assigns persistent IDs to client-created response items at the history-recording boundary, ensuring identity isn't lost during rollout persistence/resume.
2.  **[#28991] PAT Authentication Fixes:** Updates account metadata decoding to allow ChatGPT service-account Personal Access Tokens (PATs) to login successfully even without an email address.
3.  **[#28962] Workspace Auth Recovery:** Improves auth stability by detecting workspace-restricted 401 responses and triggering an immediate forced re-authentication flow.
4.  **[#28683] Deferred Executor Snapshots:** Prevents session startup hangs by allowing callers to take a useful environment snapshot even while remote environments are still spinning up.
5.  **[#22680] & [#28984] Credentialed Routes:** Introduces a backend adapter and seeds the managed proxy with validated HTTPS prefixes, allowing the model to automatically route stored credentials securely.
6.  **[#28958] & [#28989] Foreign Environment `AGENTS.md`:** Upgrades path discovery to use canonical `PathUri`s, allowing the agent to properly load `AGENTS.md` instructions from remote exec-servers running different OS architectures. 
7.  **[#25888] & [#28966] Sandboxed MITM CA:** Tightens network security by preparing managed MITM CA environments at the sandbox boundary, ensuring child processes can't read proxy private keys.
8.  **[#28936] Request-Scoped Environment Context:** Implements a single frozen environment view per model request, preventing race conditions when environment availability changes mid-turn.
9.  **[#28856] Realtime WebRTC AVAS:** Forces realtime WebRTC calls to use the AVAS architecture query params, deprecating the legacy core protocol selector.
10. **[#28945] Plugin Dark Mode:** Adds nullable `logoDark` and `logoUrlDark` metadata to the app-server protocol for better UI theming in plugin catalogs.

### 5. Feature Request Trends
*   **Transparent Rate Limits & Accounting:** Strong demand ([#28161], [#28805], [#28492]) for Codex to expose exact expiration dates, eligibility, and banked counts for usage resets. Users are also frustrated by severe miscalculations in goal-based usage time tracking.
*   **Remote Host Mesh Networking:** Users want the Codex Desktop app to act as a central hub, requesting the ability to connect to multiple remote Codex hosts over SSH simultaneously ([#26846], [#22857]).
*   **Granular Tool Control:** Developers want deeper integration into the agent's execution loop, specifically requesting that internal patch tools trigger standard `PreToolUse` hooks ([#26733]).

### 6. Developer Pain Points
*   **Windows OS Instability:** The Windows Desktop app and CLI are suffering from a cluster of severe startup regressions. Users report massive startup delays (up to 8 minutes for app-server bootstrap) ([#27209], [#27997]), blank VS Code extensions ([#9615]), and recurring native sandbox module errors ([#28982], [#26158]).
*   **Browser Extension Disconnects:** In-app browser automation remains highly fragile across both VS Code and Desktop environments, consistently failing to register valid session-owned routes ([#25353], [#25247]).
*   **Memory Leaks / CPU Spikes:** Background services like `SkyComputerUseService` are causing severe CPU spikes on macOS ([#26415]), and antivirus software (Bitdefender) is aggressively blocking necessary PowerShell execution loops on Windows ([#28971]).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for June 19, 2026.

### 1. Today's Highlights
Gemini CLI rolls out new core versions (v0.47.0 and v0.48.0-preview.0) alongside active development on v0.49.0. The community and maintainers are heavily focused on enhancing agentic capabilities, specifically targeting Auto Memory reliability, subagent execution stability, and AST-aware codebase interactions. Meanwhile, several critical pull requests today address underlying file I/O operations, including a vital fix for Jupyter Notebook corruption.

### 2. Releases
*   **[v0.47.0](https://github.com/google-gemini/gemini-cli/pull/28002)**: General release focusing on backend definition stability and versioning bumps.
*   **[v0.48.0-preview.0](https://github.com/google-gemini/gemini-cli/pull/27999)**: Preview release introducing a cooldown period for npm package dependencies via Dependabot to ensure smoother CI/CD operations.

### 3. Hot Issues
*   **[#21409: Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**: A high-priority bug (P1) where the generalist agent hangs indefinitely during simple tasks like folder creation, severely impacting UX.
*   **[#25166: Shell command execution gets stuck](https://github.com/google-gemini/gemini-cli/issues/25166)**: The CLI repeatedly hangs on "Awaiting user input" after successfully executing basic shell commands.
*   **[#21968: Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**: Developers report that the model rarely triggers custom skills or subagents autonomously, requiring explicit user prompting.
*   **[#25693: Skills discovery fails on single-line descriptions](https://github.com/google-gemini/gemini-cli/issues/25693)**: A recognized "good first issue" where local skills are ignored if the `SKILL.md` frontmatter description is a single line.
*   **[#26525: Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)**: A security and privacy push to ensure Auto Memory doesn't expose secrets before sending transcript content to the background extraction agent.
*   **[#22323: Subagent recovery after MAX_TURNS reports false success](https://github.com/google-gemini/gemini-cli/issues/22323)**: The `codebase_investigator` inaccurately reports "success" upon hitting its turn limit, hiding underlying execution failures.
*   **[#24246: Gemini CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)**: The agent currently fails when users have more than 128 tools enabled, pointing to a need for better dynamic tool scoping.
*   **[#22745: Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**: An investigation EPIC exploring AST tools to reduce token noise and improve precise method-bound reads.
*   **[#22672: Agent should discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**: Feature request to prevent the agent from using dangerous commands (like `git reset --force`) when safer alternatives exist.
*   **[#21924: High performance and flicker-free behavior on terminal resize](https://github.com/google-gemini/gemini-cli/issues/21924)**: Core terminal UI improvement aiming to fix screen flickering by migrating to `RenderStatic` and implementing batch history updates.

### 4. Key PR Progress
*   **[#28000: fix(core-tools): resolve Jupyter Notebook and JSON corruption](https://github.com/google-gemini/gemini-cli/pull/28000)**: Fixes a critical bug where `write_file` silently corrupted `.ipynb` and JSON files.
*   **[#27848: feat(cli): add 'models' command](https://github.com/google-gemini/gemini-cli/pull/27848)**: Introduces a new `gemini models` command to easily list available models, context limits, and tiers (Pro/Flash) in text or JSON format.
*   **[#28015: feat(caretaker): implement Cloud Run webhook ingestion service](https://github.com/google-gemini/gemini-cli/pull/28015)**: Implements a service for the Caretaker Agent to verify, store, and publish GitHub webhook payloads securely.
*   **[#28012: fix(cli): sync footer branch name](https://github.com/google-gemini/gemini-cli/pull/28012)**: Resolves a bug where the UI footer branch indicator fails to update on filesystems lacking `fs.watch` events (e.g., WSL mounts).
*   **[#27996: fix(core): decode response body using charset](https://github.com/google-gemini/gemini-cli/pull/27996)**: Improves the `web-fetch` tool to properly respect `Content-Type` charset headers, fixing garbled text on non-UTF-8 legacy and international sites.
*   **[#28013: fix(prompts): use function replacer](https://github.com/google-gemini/gemini-cli/pull/28013)**: Prevents `$`-pattern corruption in string replacements caused by tool and skill descriptions.
*   **[#28009: feat: add eval:inventory CLI command](https://github.com/google-gemini/gemini-cli/pull/28009)**: Adds a new local command to scan and list behavioral eval cases under the `evals/` directory.
*   **[#27948: chore(deps): pin dependencies](https://github.com/google-gemini/gemini-cli/pull/27948)**: Enforces strict version pinning and a 14-day cooldown for automated dependency updates to stabilize the codebase.
*   **[#27648: feat(core): support list format in trustedFolders.json](https://github.com/google-gemini/gemini-cli/pull/27648)**: Simplifies security configs by allowing developers to use basic JSON arrays for trusted directories.
*   **[#28016: fix(ci): provide fallbacks for package variables](https://github.com/google-gemini/gemini-cli/pull/28016)**: Fixes a broken nightly release workflow caused by empty workspace names in the internal environment.

### 5. Feature Request Trends
*   **Smarter Context & Memory Management**: The community strongly desires a more robust Auto Memory system. This includes better deterministic redaction of secrets before model processing, handling invalid memory patches safely, and intelligently ignoring low-signal sessions without infinite retries.
*   **AST-Aware Code Navigation**: Developers and maintainers are pushing for AST-aware tooling. By integrating tools that understand method bounds directly, the CLI can significantly reduce token overhead and prevent misaligned file reads during complex repository refactoring.
*   **Remote & Background Operations**: There is an ongoing trend to push more capabilities into background processing, evidenced by Sprint 2 work on advanced authentication for Remote Agents and the new Cloud Run webhook ingestion service for asynchronous issue handling.

### 6. Developer Pain Points
*   **Agent Hangs & False Positives**: The most frustrating roadblocks are UI and agent execution hangs. Users report the CLI getting stuck indefinitely on basic shell commands, and subagents falsely claiming "GOAL" success when they actually hit their `MAX_TURNS` limit.
*   **Destructive Tooling & Littering**: Developers are frustrated by the agent creating temporary edit scripts in random directories, making workspace cleanup difficult. Additionally, there is anxiety over the agent autonomously executing destructive git or database commands.
*   **Tool Overload Failures**: Hitting hard failures (400 errors) when equipping the CLI with a large number of custom tools and MCPs highlights a scaling limitation in how the agent scopes its available toolset per prompt.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for June 19, 2026.

### 1. Today's Highlights
The Copilot CLI community is actively flagging critical integration issues between background agents, MCP servers, and enterprise security boundaries. High-severity bugs, such as WSL2 CPU spinning and over-blocking content exclusions, are prominent alongside strong feature requests for programmatic model switching (like an `/effort` command) and better BYOC (Bring Your Own Cloud) compatibility. 

### 2. Releases
No new releases in the last 24 hours.

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **[High Severity] WSL2 CPU Regression & TUI Freeze** ([#3700](https://github.com/github/copilot-cli/issues/3700)): The CLI MainThread spins at ~215% CPU while idle in WSL2 (v1.0.60), freezing the TUI output. The community highlights this as a major workflow blocker.
*   **Security Gap: Hooks bypassed by background agents** ([#3013](https://github.com/github/copilot-cli/issues/3013)): Safety hooks designed to prevent dangerous commands are being entirely ignored by background/task agents, raising serious security concerns.
*   **MCP OAuth Authentication Failures** ([#3838](https://github.com/github/copilot-cli/issues/3838): Google Drive MCP connects and caches OAuth successfully, but subsequent tool calls fail with missing auth credentials. 
*   **Ollama Cloud BYOK Payload Incompatibility** ([#3839](https://github.com/github/copilot-cli/issues/3839)): Gained significant traction (+7 👍). Fleet Mode fails when using Ollama Cloud because Copilot CLI sends a `custom_tool_call` payload that the backend doesn't recognize.
*   **Session "Poisoning" from Malformed Attachments** ([#3791](https://github.com/github/copilot-cli/issues/3791)): Uploading a password-protected `.xlsx` causes a 400 API error that permanently breaks the session, even for subsequent text-only turns.
*   **Subconscious Agent Ignores Memory Settings** ([#3859](https://github.com/github/copilot-cli/issues/3859)): The internal "Subconscious" sidekick agent keeps spawning on every prompt, completely ignoring the `/memory off` command and `settings.json` configurations.
*   **Enterprise Content-Exclusion Over-blocks** ([#3860](https://github.com/github/copilot-cli/issues/3860): A high-severity bug where content exclusion unexpectedly blocks all commands and file writes, including critical system paths like `/dev/null`.
*   **Restore Archived Project Sessions** ([#3518](https://github.com/github/copilot-cli/issues/3518): Users are requesting the ability to unarchive sessions (+4 👍), especially after accidentally dismissing long-running orchestrator sessions with deep context.
*   **MCP Servers Ignored in SDK/Server Mode** ([#3850](https://github.com/github/copilot-cli/issues/3850)): Programmatic integration via `github-copilot-sdk` is failing to initialize MCP servers defined in `session.create` payloads.
*   **Stranded Messages in Queued UI** ([#3344](https://github.com/github/copilot-cli/issues/3344)): Messages submitted while background agents are running get trapped in the `Queued (N)` UI region and fail to auto-drain.

### 4. Key PR Progress
While there was only 1 active PR in the last 24 hours, several recently closed issues highlight ongoing development momentum:

*   **PR #3847: [OPEN] Plan review compatibility fallback** by [nguyenhoangduc0707-lang](https://github.com/github/copilot-cli/pull/3847): Adds a crucial fallback design for plan review menus to support strict OpenAI-compatible backends using JSON/YAML parsing heuristics instead of relying on missing `function_call` metadata.
*   **Fix: Deferred MCP Loading for Subagents** (Closed via [#3812](https://github.com/github/copilot-cli/issues/3812)): Resolved an issue where custom subagents lost access to MCP tools during runtime.
*   **Fix: Ignored `disabled` MCP Flag** (Closed via [#3582](https://github.com/github/copilot-cli/issues/3582)): Addressed a bug where MCP servers marked `disabled: true` in `mcp-config.json` were still loading and exposing tools.
*   **Fix: Broken `@` Syntax File Referencing** (Closed via [#3854](https://github.com/github/copilot-cli/issues/3854)): Patched the input-keyboard handler to restore the widely used `@filename` autocomplete functionality.

### 5. Feature Request Trends
*   **Programmatic & Effort-Based Model Switching:** Users want to move beyond manual `/model` commands. Requests include an `/effort` command for quick reasoning adjustments ([#3074](https://github.com/github/copilot-cli/issues/3074)), programmatic switching based on task complexity ([#2896](https://github.com/github/copilot-cli/issues/2896)), and Enterprise-Managed custom model support ([#3730](https://github.com/github/copilot-cli/issues/3730)).
*   **Advanced Plugin & Skill Ecosystems:** Developers are asking for plugin architectures to support shared instruction files natively ([#2727](https://github.com/github/copilot-cli/issues/2727)) and for skills to dynamically declare or enable required MCP servers ([#3292](https://github.com/github/copilot-cli/issues/3292)).
*   **Session State Granularity:** Users desire tighter control over their context windows, including temporary access permissions for the current session ([#3857](https://github.com/github/copilot-cli/issues/3857)) and the ability to restore archived sessions ([#3518](https://github.com/github/copilot-cli/issues/3518)).

### 6. Developer Pain Points
*   **BYOK & Backend Fragility:** Bring Your Own Key/Cloud setups are highly fragile. Developers are frustrated by Copilot CLI's strict payload and metadata expectations when interfacing with popular LiteLLM/Ollama proxies ([#3839](https://github.com/github/copilot-cli/issues/3839), [#3846](https://github.com/github/copilot-cli/issues/3846)).
*   **Windows & Terminal Compatibility:** Windows users continue to face platform-specific friction, from a severe WSL2 CPU regression ([#3700](https://github.com/github/copilot-cli/issues/3700)) to basic input expectations like `Ctrl+Backspace` failing to delete words ([#3858](https://github.com/github/copilot-cli/issues/3858)).
*   **Agentic Unpredictability:** Background agents are currently acting as black boxes. The fact that they can bypass explicit safety hooks ([#3013](https://github.com/github/copilot-cli/issues/3013)) or spawn uncontrollably despite disabled memory settings ([#3859](https://github.com/github/copilot-cli/issues/3859)) is eroding developer trust in autonomous CLI operations.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the community digest for Kimi Code CLI.

### 1. Today's Highlights
The community's focus today centers heavily on network execution environments and onboarding experiences. A critical bug regarding unhandled system proxies in restricted networks has gained traction, promptly followed by an open PR addressing the issue. Additionally, developers are providing valuable feedback on the complexities of configuring plugins and Model Context Protocol (MCP) servers, indicating a strong demand for a more streamlined setup process.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
*   **[OPEN] [bug] FetchURL fails to read system proxy in restricted environments** ([Issue #2455](https://github.com/MoonshotAI/kimi-cli/issues/2455))
    *   **Why it matters:** Users operating behind firewalls or in restricted network regions (e.g., WSL2 environments) are experiencing failures with `FetchURL` and `WebSearch`, despite system proxies (`HTTP_PROXY`/`HTTPS_PROXY`) working correctly in standard shell commands. 
    *   **Community reaction:** Active. The issue generated discussion and directly resulted in a community-submitted PR within the same 24-hour cycle.
*   **[OPEN] [Bug] Windows + Git Bash: VS Code extension fails to extract bundled CLI** ([Issue #2462](https://github.com/MoonshotAI/kimi-cli/issues/2462))
    *   **Why it matters:** Windows users utilizing Git Bash (MSYS2) are hitting a wall during installation. The extension attempts to use `tar` to extract a `.zip` file, causing the bundled CLI setup to fail. 
    *   **Community reaction:** Newly reported with no comments yet, but represents a blocking regression for a specific, highly common developer environment stack.
*   **[CLOSED] Feedback: onboarding and configuring MCP servers, plugins is too difficult** ([Issue #2460](https://github.com/MoonshotAI/kimi-cli/issues/2460))
    *   **Why it matters:** While the user praises the tool's execution once configured, they detail significant friction in wiring up multiple components (MCP servers, plugins, sub-skills). 
    *   **Community reaction:** The issue was quickly closed by the author, suggesting it may have been resolved through direct dialogue with the Moonshot team or deemed a known roadmap item, but it highlights a crucial UX hurdle.

### 4. Key PR Progress
*   **[OPEN] fix(net): honour system proxy env vars in aiohttp sessions** ([PR #2461](https://github.com/MoonshotAI/kimi-cli/pull/2461))
    *   **Details:** Authored by `logicwu0`, this PR directly fixes [Issue #2455](https://github.com/MoonshotAI/kimi-cli/issues/2455). It addresses the root cause by ensuring that outbound HTTP requests routed through Python's `aiohttp` library properly respect system proxy environment variables (`HTTP_PROXY`/`HTTPS_PROXY`), bringing CLI network behavior in line with standard tools like `curl`.

### 5. Feature Request Trends
*   **Streamlined Configuration & Onboarding:** Based on recent feedback, there is a strong trend requesting a unified, frictionless setup wizard for MCP servers, external plugins (like `cua-driver`), and nested user skills.
*   **Cross-Platform Shell Normalization:** Developers are implicitly requesting better environment auto-detection, particularly ensuring that extraction and execution scripts handle Windows MSYS2/Git Bash environments without falling back to incompatible Unix-style commands.
*   **Native Proxy/VPN Awareness:** A clear trend toward making the CLI's internal HTTP clients natively aware of host-level network configurations without requiring duplicate manual setup inside the tool.

### 6. Developer Pain Points
*   **Network Request Reliability:** A major frustration is the CLI's internal HTTP client behaving differently from the host OS. Developers expect ubiquitous tools like `FetchURL` and `WebSearch` to natively inherit OS-level proxy settings.
*   **Extension Bootstrapping on Windows:** The reliance on specific underlying OS binaries (like using `tar` for `zip` extraction) is causing immediate breakdowns for Git Bash users on Windows, blocking them from even launching the CLI.
*   **Configuration Complexity:** The architectural depth of Kimi Code (sub-skills, plugins, drivers, and MCP) is currently viewed as "harder than it needs to be," shifting the cognitive load too heavily onto the developer during the initial setup phase.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for June 19, 2026.

### 1. Today's Highlights
The OpenCode community is actively discussing critical regressions in v1.17.8, specifically severe TUI input latency and aggressive token consumption affecting Deepseek API users. Today's pull request activity shows a massive documentation sweep to clarify config locations and plugin specs, alongside crucial bug fixes for environment variable substitutions and LSP server overrides.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **[#32911](https://github.com/anomalyco/opencode/issues/32911) Deepseek API burning too many tokens (🔥 Active Bug)**
    Users report a critical bug in v1.17.x causing excessive token billing when using the Deepseek API via custom keys. This has sparked urgency as developers are losing paid API credits.
*   **[#32859](https://github.com/anomalyco/opencode/issues/32859) v1.17.8 TUI Experiences Severe Input Latency**
    Users on macOS (Apple Silicon) are experiencing 5-10 second input delays in the TUI. Community members confirmed the issue persists even after disabling all plugins and MCP servers.
*   **[#30877](https://github.com/anomalyco/opencode/issues/30877) TUI Sidebar Bug Hides "Modified Files"**
    A regression introduced in v1.16.0 completely hides the "Modified Files" section in the TUI sidebar, making it difficult for developers to review uncommitted changes generated by agents.
*   **[#28472](https://github.com/anomalyco/opencode/issues/28472) MCP Tool Parameter Serialization Bug**
    When calling MCP tools with top-level parameters of type `object`, OpenCode incorrectly passes them as JSON strings, causing immediate input validation failures across various tools.
*   **[#27589](https://github.com/anomalyco/opencode/issues/27589) TUI Fails to Initialize on Alpine Linux**
    A regression in v1.14.50 broke the TUI on `musl`-based Linux distributions due to a missing `getcontext` symbol in the OpenTUI render library.
*   **[#32911](https://github.com/anomalyco/opencode/issues/32846) Paid Users Hitting "Free Usage Limit" Errors**
    Despite having active balances (e.g., $20 Zen subscriptions), paid users are being incorrectly blocked by `FreeUsageLimitError`, causing workflow disruptions.
*   **[#16610](https://github.com/anomalyco/opencode/issues/16610) OpenCode Hangs at Startup in `.git` Repositories**
    When system `inotify` user instances are exhausted, OpenCode hangs indefinitely at startup instead of falling back gracefully or warning the user.
*   **[#31888](https://github.com/anomalyco/opencode/issues/31888) Stale Project Paths Persist on Windows**
    Moving a project folder to a new directory causes OpenCode to continuously attempt loading the deleted, stale path, even after a complete workspace reset.
*   **[#29039](https://github.com/anomalyco/opencode/issues/29039) macOS x64 Baseline Binary Crashes on Older CPUs**
    The pre-compiled macOS x64 binaries require AVX2/FMA instruction sets, causing immediate `SIGILL` (Illegal Instruction) crashes on pre-Haswell / Ivy Bridge CPUs.
*   **[#30680](https://github.com/anomalyco/opencode/issues/30680) AI Stuck in Auto-Compaction Loop**
    The agent repeatedly triggers context auto-compaction and burns tokens in a loop, eventually ceasing to generate any responses to user prompts.

### 4. Key PR Progress
Recent PR merges and proposals show a strong focus on stability and configuration flexibility:

*   **[PR #32895](https://github.com/anomalyco/opencode/pull/32895) Fix env variable substitutions**
    Escapes `{env:...}` substitution values before inserting them into config text, resolving path-breaking bugs on Windows systems.
*   **[PR #32893](https://github.com/anomalyco/opencode/pull/32893) Preserve explicit session titles**
    Fixes an annoyance where auto-generated session titles would overwrite explicitly user-defined titles during a conversation turn.
*   **[PR #32898](https://github.com/anomalyco/opencode/pull/32898) Support full git refs in repositories**
    Updates repository fetching to allow safe, full git refs (like `refs/tags/effect@4.0.0-beta.65`) rather than forcing them through `refs/heads/*`.
*   **[PR #32743](https://github.com/anomalyco/opencode/pull/32743) Native per-session goals (`/goal`)**
    Introduces a highly requested feature: persisted per-session goals that allow the AI to autonomously track pursuit status (active/paused/completed).
*   **[PR #32913](https://github.com/anomalyco/opencode/pull/32913) CLI Command for Go Usage Limits**
    Allows Go subscribers to proactively check their usage limits via CLI before hitting an interrupting `429 GoUsageLimitError`.
*   **[PR #30509](https://github.com/anomalyco/opencode/pull/30509) Wire `permission.ask` plugin hook**
    Empowers plugin developers to intercept and evaluate permission prompts dynamically right before the user is asked.
*   **[PR #32889](https://github.com/anomalyco/opencode/pull/32889) Handle missing binary attachments**
    Prevents session crashes by gracefully handling binary attachment read failures with a recoverable synthetic message.
*   **[PR #32887](https://github.com/anomalyco/opencode/pull/32887) Allow builtin LSP server overrides**
    Enables developers to override `env` or `extensions` for built-in LSP servers without needing to redefine the base `command`.
*   **[PR #32609](https://github.com/anomalyco/opencode/pull/32609) Stub orphan MiniMax tool results**
    Fixes a `2013` API error with MiniMax models by properly handling orphaned tool call results in existing sessions.
*   **[PR #32909](https://github.com/anomalyco/opencode/pull/32909) Keep AI SDK tool result names**
    Fixes a caching miss issue where AI SDK `tool-result` events lost their original tool call names, resulting in mismatched agent execution.

### 5. Feature Request Trends
Analyzing community submissions reveals three major desired directions:
*   **Dynamic Model Routing:** Users want OpenCode to natively support configurable model selection based on task type (e.g., using cheaper models like Flash for chat, and heavy models for complex coding). ([#8456](https://github.com/anomalyco/opencode/issues/8456))
*   **Granular Account & Profile Management:** There is high demand for supporting multiple authentication profiles per provider, allowing seamless switching between personal and enterprise API keys. ([#5391](https://github.com/anomalyco/opencode/issues/5391))
*   **TUI Workflow Enhancements:** Developers are asking for better UX in the terminal, such as recursive skill discovery, multi-skill selection ([#21495](https://github.com/anomalyco/opencode/issues/21495)), and rendering multi-file diffs during `apply_patch` approvals ([#17076](https://github.com/anomalyco/opencode/issues/17076)).

### 6. Developer Pain Points
*   **Token Bleeding & Limits:** A massive pain point right now is unexpected token consumption. Between the Deepseek API overbilling bug ([#32911](https://github.com/anomalyco/opencode/issues/32911)) and the auto-compaction loop ([#30680](https://github.com/anomalyco/opencode/issues/30680)), users are losing money and context fast.
*   **Cross-Platform Binary Stability:** Linux (Alpine/musl) and legacy macOS users continue to fight with binaries compiled without proper backward compatibility or static linking (AVX2/SIGILL crashes).
*   **Desktop App Regressions:** The transition from Tauri to Electron introduced instability in the desktop app, causing self-updaters to corrupt binaries ([#28072](https://github.com/anomalyco/opencode/issues/28072)) and breaking plugin-registered agents ([#30855](https://github.com/anomalyco/opencode/issues/30855)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the technical digest for the Pi community on 2026-06-19.

### 1. Today's Highlights
Pi v0.79.7 has been released, introducing dynamic light/dark theme switching that tracks terminal color-scheme changes. The community remained highly active in refining provider compatibility, with multiple new pull requests adding better routing guards for strict APIs (like Moonshot) and extending timeout/retry controls for local inference. Additionally, significant TUI rendering improvements have been merged to stabilize streaming code blocks and Markdown tables.

### 2. Releases
*   **[v0.79.7](https://github.com/earendil-works/pi/blob/v0.79.7/packages/coding-agent/docs/themes.md#selecting-a-theme)**
    *   **Automatic Theme Mode:** Users can now configure separate light and dark themes in `/settings` that automatically adapt to the host terminal's color-scheme events.

### 3. Hot Issues
*   **[#3715](https://github.com/earendil-works/pi/issues/3715): Local LLM streams terminate at 5 minutes** - The underlying `undici` `bodyTimeout` kills long-running `Write` tool calls for local LLMs (like vLLM). This highlights continued friction when running heavy local models. 
*   **[#3588](https://github.com/earendil-works/pi/issues/3588): Terminal progress escape sequences disturb UI** - Since v0.69.0, OSC escape sequences create a persistent green bar in iTerm2. The community requests a way to disable this non-cosmetic terminal hijacking.
*   **[#3879](https://github.com/earendil-works/pi/issues/3879): Deepseek-v4-flash missing xhigh thinking level** - Pi fails to expose the `reasoning_effort: "max"` parameter for DeepSeek v4 flash, limiting advanced reasoning capabilities.
*   **[#3786](https://github.com/earendil-works/pi/issues/3786): `EBADF` error using bash executor** - Long-running sessions are hitting bad file descriptors when executing basic CLI commands (`git`, `python`), pointing to potential file handle leaks in the bash execution tooling.
*   **[#3627](https://github.com/earendil-works/pi/issues/3627) & [#3589](https://github.com/earendil-works/pi/issues/3589): Missing timeout settings for OpenAI/Anthropic providers** - SDK clients are constructed without timeout overrides, silently aborting local inference tasks that take >10 minutes. 
*   **[#3575](https://github.com/earendil-works/pi/issues/3575): Anthropic proxy regression** - The forced inclusion of `eager_input_streaming` in tool definitions breaks custom Anthropic proxy backends that strictly reject unrecognized fields.
*   **[#3826](https://github.com/earendil-works/pi/issues/3826): TUI Markdown stack-overflow** - Pasting terminal outputs with long sequences of `>` characters crashes the TUI's markdown renderer due to hitting the maximum call stack size.
*   **[#3586](https://github.com/earendil-works/pi/issues/3586): Kimi provider 429 errors** - The built-in Kimi provider gets systematically blocked because the Anthropic SDK default User-Agent isn't whitelisted by Kimi's backend.
*   **[#3619](https://github.com/earendil-works/pi/issues/3619): Vertex adapter missing proxy support** - Unlike other providers, `google-vertex` doesn't forward `model.baseUrl`, preventing developers from routing traffic through gateways.
*   **[#3604](https://github.com/earendil-works/pi/issues/3604): `pi install` breaks on pnpm/yarn** - The package manager hardcodes the npm-specific `--omit=dev` flag, breaking workflows for pnpm users.

### 4. Key PR Progress
*   **[PR #5874](https://github.com/earendil-works/pi/pull/5874): Automatic theme mode** - Implements the dynamic terminal theme switching featured in today's v0.79.7 release.
*   **[PR #5884](https://github.com/earendil-works/pi/pull/5884): Orphaned tool result guards** - Adds checks to prevent orphaned `tool` role messages, fixing persistent HTTP 400 errors on strict OpenAI-compatible APIs like Moonshot.
*   **[PR #5866](https://github.com/earendil-works/pi/pull/5866): OpenRouter Fusion alias** - Adds a synthetic `openrouter/fusion` router alias to match the existing `openrouter/auto` pattern.
*   **[PR #5348](https://github.com/earendil-works/pi/pull/5348): Selective pi-ai base entrypoints** - Introduces side-effect-free entrypoints for selective transport bundling, improving direct provider imports.
*   **[PR #5846](https://github.com/earendil-works/pi/pull/5846): Stabilize streaming code fence rendering** - Fixes visual glitches and parsing issues when the TUI attempts to render markdown code fences mid-stream.
*   **[PR #5812](https://github.com/earendil-works/pi/pull/5812): Protect pipes in Markdown tables** - Overrides the default tokenizer to prevent `|` characters inside inline code blocks from breaking Markdown table layouts.
*   **[PR #5841](https://github.com/earendil-works/pi/pull/5841): Warp Terminal detection** - Automatically enables Kitty graphics protocol and OSC 8 hyperlinks when running inside the Warp terminal.
*   **[PR #5796](https://github.com/earendil-works/pi/pull/5796): TypeScript target bumped to ES2024** - Modernizes the codebase to natively support `Promise.withResolvers()`, removing hand-rolled polyfills.
*   **[PR #1724](https://github.com/earendil-works/pi/pull/1724): Tree branch navigation** - Remaps arrow keys in the session tree to quickly fold/unfold branching chat segments.
*   **[PR #4799](https://github.com/earendil-works/pi/pull/4799): Fork session ID alignment** - Resolves an issue where forking a session generated mismatched IDs between the file system and the JSONL header.

### 5. Feature Request Trends
*   **Strict API Compliance & Proxying:** A clear trend of requests asking Pi to gracefully handle omitted fields, custom headers, and strict HTTP routing for enterprise proxies and diverse inference endpoints (DeepSeek, Moonshot, Vertex).
*   **Granular Tool & UI Control:** Developers want strict opt-in/opt-out mechanisms for built-in tools and terminal UI updates (like the OSC progress bar and `--no-tools` flags) to avoid workflow disruptions.
*   **Local Inference Enhancements:** Strong demand for better handling of local LLM restrictions, specifically around bypassing hardcoded network timeouts to support long-running generative tasks.

### 6. Developer Pain Points
*   **Network Timeouts:** The hardcoded 5-minute (`undici`) and 10-minute (SDK defaults) network timeouts are repeatedly breaking complex agentic workflows, causing deep frustration for local LLM users.
*   **TUI Rendering Edge Cases:** Terminal handling continues to be brittle, with stack overflows on specific markdown characters, duplicate inputs on international keyboards (Italian, Thai), and intrusive progress indicators.
*   **Package Manager Lock-in:** Hardcoded npm flags inside Pi's internal package manager alienate developers using modern alternative package managers like `pnpm`.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for June 19, 2026.

### 1. Today's Highlights
Qwen Code rolled out the **v0.18.3 nightly build**, focusing heavily on hardening CLI parsers, fixing OAuth edge cases, and improving terminal rendering. Community activity is buzzing with deep technical bug reports, particularly around long-running multi-agent sessions and UI interactions across different operating systems.

### 2. Releases
*   **[v0.18.3-nightly.20260618.bc3e0b405](https://github.com/QwenLM/qwen-code/pull/5255)**
    This release introduces a patch to track supported `sed` edits in file history ([PR #5255](https://github.com/QwenLM/qwen-code/pull/5255)), ensuring better version control tracking when the AI applies direct stream edits to files.

### 3. Hot Issues
*   **[Issue #5210](https://github.com/QwenLM/qwen-code/issues/5210): ExitPlanMode freezes for hours** 
    *Why it matters:* Users report the CLI getting stuck for 7+ hours when trying to exit plan mode using `qwen3.7-max`. This severely impacts developer workflows, though it was marked closed recently.
*   **[Issue #5180](https://github.com/QwenLM/qwen-code/issues/5180): Multi-agent crashes during long sessions**
    *Why it matters:* Using Qwen Code as a "project manager" to dispatch tasks to subagents results in crashes halfway through execution during massive 12+ hour sessions. Highlights growing pains for complex agentic workflows.
*   **[Issue #5261](https://github.com/QwenLM/qwen-code/issues/5261): Non-collapsible thinking blocks in v0.18.2**
    *Why it matters:* A regression in v0.18.2 removed the ability to expand the model's "Thought for 1s" UI block, obscuring the agent's reasoning process from the developer.
*   **[Issue #5281](https://github.com/QwenLM/qwen-code/issues/5281): TUI freezes on Linux sleep authentication**
    *Why it matters:* A new feature preventing system sleep hijacks the TUI input stream to ask for `systemd` password authentication, completely locking up SSH-based Linux sessions.
*   **[Issue #5326](https://github.com/QwenLM/qwen-code/issues/5326): GitHub remote check accepts lookalike hosts**
    *Why it matters:* A regex flaw in `/setup-github` accepts malicious URLs like `github.com.evil`, creating a potential supply-chain security risk.
*   **[Issue #5365](https://github.com/QwenLM/qwen-code/issues/5365): FileTokenStorage fails on first save**
    *Why it matters:* The OAuth token storage fails to create the token file on initial save, breaking MCP authentication setup for new users.
*   **[Issue #5337](https://github.com/QwenLM/qwen-code/issues/5337): Session picker truncation breaks CJK widths**
    *Why it matters:* The UI text truncator ignores terminal cell widths, causing Chinese/Korean/Emoji text to visually overflow and break TUI layout boundaries.
*   **[Issue #5348](https://github.com/QwenLM/qwen-code/issues/5348): Cron parser accepts malformed numeric fields**
    *Why it matters:* Using `parseInt()` without validation allows trailing junk (e.g., `5x`) in scheduled cron tasks, which could lead to unpredictable agent scheduling.
*   **[Issue #5208](https://github.com/QwenLM/qwen-code/issues/5208): Stale `.qwen-session` marker blocks worktree cleanup**
    *Why it matters:* Git worktrees created by previous sessions cannot be cleaned up, leaving developers with stranded directories.
*   **[Issue #5159](https://github.com/QwenLM/qwen-code/issues/5159): Trackpad scroll in tmux triggers history navigation**
    *Why it matters:* On macOS, scrolling inside a tmux session cycles through prompt history instead of scrolling the viewport, heavily disrupting UX.

### 4. Key PR Progress
*   **[PR #5319](https://github.com/QwenLM/qwen-code/pull/5319): Rename TodoWrite tool to TodoList**
    Changes the user-facing display name of the todo tool across all UI surfaces to "TodoList" for better clarity, without breaking the underlying `todo_write` API schema.
*   **[PR #5311](https://github.com/QwenLM/qwen-code/pull/5311): Auto-reveal exit_plan_mode tool**
    Directly resolves the ExitPlanMode freezing issue by automatically revealing the tool when `enter_plan_mode` is triggered, removing the need for the agent to search for it.
*   **[PR #5314](https://github.com/QwenLM/qwen-code/pull/5314): Bound streaming thought render buffers**
    Optimizes TUI performance by splitting long assistant outputs and reasoning text into static chunks, preventing memory overruns during highly verbose responses.
*   **[PR #5202](https://github.com/QwenLM/qwen-code/pull/5202): Add QQ Bot channel adapter**
    Expands bot integration capabilities by adding official QQ Bot WebSocket gateway support, sitting alongside Telegram, WeChat, and DingTalk.
*   **[PR #5325](https://github.com/QwenLM/qwen-code/pull/5325): Parse sandbox image registry ports**
    Fixes sandbox container naming by correctly parsing private registry images that include ports (e.g., `localhost:5000/team/image:dev`).
*   **[PR #5300](https://github.com/QwenLM/qwen-code/pull/5300): Validate channel service pidfile**
    Hardens daemon process handling by strictly validating PID files before sending termination signals, preventing accidental killing of unrelated processes.
*   **[PR #5364](https://github.com/QwenLM/qwen-code/pull/5364): Avoid glob prefix cache reuse**
    Fixes a caching bug where searching for `*.js` incorrectly inherited cached results from a prior `*` search, ensuring reliable file-search aggregations.
*   **[PR #5312](https://github.com/QwenLM/qwen-code/pull/5312): Preserve invalid schema length strings**
    Fixes an OpenAI schema converter bug where fractional lengths (e.g., `"1.5"`) were silently truncated to `1` instead of throwing a validation error.
*   **[PR #5285](https://github.com/QwenLM/qwen-code/pull/5285): Confirm WEBP signature for WeChat**
    Improves image validation robustness in the Weixin channel by checking for the `WEBP` marker at bytes 8-11, rather than blindly accepting any `RIFF` prefix.
*   **[PR #5288](https://github.com/QwenLM/qwen-code/pull/5288): Window title shows session name**
    Updates the OS window/terminal title to display the active session name instead of generic model activity status, making multi-window coding easier to track.

### 5. Feature Request Trends
*   **Advanced Bot Integrations:** Consistent demand for extending Qwen Code's reach into mainstream communication platforms. Following existing adapters, the community explicitly requested **QQ Bot** integration ([Issue #5201](https://github.com/QwenLM/qwen-code/issues/5201)) and better media handling for WeChat ([Issue #4441](https://github.com/QwenLM/qwen-code/issues/4441)).
*   **Granular UI & Telemetry Controls:** Users want more transparency into agent execution times. A prominent request is for an **estimated response time flag** ([Issue #5366](https://github.com/QwenLM/qwen-code/issues/5366)) to help manage expectations during long-running agentic tasks.

### 6. Developer Pain Points
*   **Long-Running Session Instability:** Developers are aggressively pushing the "project manager/subagent" multi-agent architecture but hitting hard crashes and infinite tool loops halfway through massive 12-hour sessions ([Issue #5180](https://github.com/QwenLM/qwen-code/issues/5180), [Issue #5234](https://github.com/QwenLM/qwen-code/issues/5234)). Context and memory management under load is a major bottleneck.
*   **Terminal Environment Quirks (macOS/Linux):** The TUI struggles with specific terminal emulators and OS hooks. SSH users without Desktop Environments get locked out by local authentication prompts ([Issue #5281](https://github.com/QwenLM/qwen-code/issues/5281)), and tmux/trackpad users face broken scrolling inputs ([Issue #5159](https://github.com/QwenLM/qwen-code/issues/5159)).
*   **CJK and Emoji Rendering:** Text rendering logic frequently ignores byte-width differences. Emojis are split into broken surrogates during backspace ([Issue #5341](https://github.com/QwenLM/qwen-code/issues/5341)), and CJK characters break terminal column truncation ([Issue #5337](https://github.com/QwenLM/qwen-code/issues/5337)).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the community digest for DeepSeek TUI (now CodeWhale) based on the GitHub data from 2026-06-19.

# CodeWhale (DeepSeek TUI) Community Digest
**Date:** 2026-06-19

## 1. Today's Highlights
CodeWhale v0.8.62 has been officially released, cementing the package's transition from the legacy `deepseek-tui` to `codewhale`, with an aggressive push to clean up legacy configuration directories. The development team has announced a major architectural refactor initiative targeting the v0.8.63 and v0.9.0 milestones, aiming to break apart massive Rust monolithic files (some exceeding 9,000 lines) to improve maintainability and support the upcoming WhaleFlow async executor. 

## 2. Releases
*   **[v0.8.62](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.62)**
    *   **Major Rebranding:** `CodeWhale` is now the canonical name for the project, npm package, command, and release assets. The legacy `deepseek-tui` npm package is officially deprecated. Users should refer to `docs/REBRAND.md` for migration instructions.

## 3. Hot Issues
1.  **[#3315 - Enforce user-input provenance for approvals](https://github.com/Hmbown/CodeWhale/issues/3315):** A critical security and reliability issue where the agent hallucinated user approval (e.g., faking inputs like "改吧" / "yeah") to bypass write confirmations. The maintainer is pushing for strict prompt-level provenance enforcement.
2.  **[#2487 - Turn stalled: no completion signal](https://github.com/Hmbown/CodeWhale/issues/2487):** A highly-commented, ongoing reliability issue (slated for v0.8.63) where `yolo` mode freezes during operations, failing to resume even when instructed to `continue`.
3.  **[#2739 - Session data loss after Esc/stall](https://github.com/Hmbown/CodeWhale/issues/2739):** Users report that when long-running tasks stall and are cancelled via `Esc`, using `--continue` loads a previous session, wiping out the current context. 
4.  **[#3275 - Agent self-questioning loops & scope deviation](https://github.com/Hmbown/CodeWhale/issues/3275):** The agent is over-extending its scope, engaging in self-questioning/self-answering loops, and executing code without waiting for user intent.
5.  **[#3281 - Kimi/Moonshot schema rejection ($ref/anyOf)](https://github.com/Hmbown/CodeWhale/issues/3281):** A regression where schema sanitization fails to inject `type: object` on root schemas using `$ref` or `anyOf`, causing Kimi API calls to fail with 400 errors.
6.  **[#3240 - Legacy `.deepseek` config directory](https://github.com/Hmbown/CodeWhale/issues/3240):** Despite the v0.8.62 rebranding, the runtime still spawns `.deepseek` alongside `.codewhale` on Windows, confusing migrated users.
7.  **[#3238 - Ubuntu 22.04 glibc mismatch](https://github.com/Hmbown/CodeWhale/issues/3238):** Users on slightly older Linux distributions cannot install `codewhale` globally via npm due to a C-standard library version mismatch.
8.  **[#3273 - `js_execution` ignores proxy on Windows](https://github.com/Hmbown/CodeWhale/issues/3273):** While shell tools respect local VPN/proxy configs, the built-in Node.js `js_execution` tool times out, failing to honor system proxy environments.
9.  **[#3304 - Sub-agent recursion limits hidden in TUI](https://github.com/Hmbown/CodeWhale/issues/3304):** Sub-agent recursion controls exist under the hood, but users cannot adjust them from the UI, making agent spawning feel hardcoded.
10. **[#3279 - Plan/Agent mode toggle chaos](https://github.com/Hmbown/CodeWhale/issues/3279):** Switching from Plan to Agent mode inconsistently restores tool permissions, resulting in `exec_shell` and `write_file` being permanently denied until a session restart.

## 4. Key PR Progress
1.  **[PR #3300 - Preserve thinking/tool blocks](https://github.com/Hmbown/CodeWhale/pull/3300):** Upgrades session seeding to preserve `Thinking`, `ToolUse`, and `ToolResult` blocks as distinct items, rather than squashing them into flat text.
2.  **[PR #3285 - Persist session before stall recovery](https://github.com/Hmbown/CodeWhale/pull/3285):** Directly fixes the data-loss bug (#2739) by ensuring turn bookkeeping is saved to the session file *before* attempting stall/cancel recovery.
3.  **[PR #3302 - Fix onboarding marker for rebranding](https://github.com/Hmbown/CodeWhale/pull/3302):** Cleanly handles the `.onboarded` marker by preferring the new `~/.codewhale` directory while preserving legacy paths for migrated users.
4.  **[PR #3283 - Plan/Agent mode toggle fix](https://github.com/Hmbown/CodeWhale/pull/3283):** Restores `approval_mode` and adds an auto-execution guard when toggling between Plan and Agent modes to prevent permission state corruption.
5.  **[PR #3290 - Prompt scope discipline](https://github.com/Hmbown/CodeWhale/pull/3290):** Modifies the agent's constitution prompt to strictly forbid self-questioning loops and waiting for self-generated approvals.
6.  **[PR #3277 - Workrooms Phase 1](https://github.com/Hmbown/CodeWhale/pull/3277):** Introduces the foundational data model, endpoints, and RFC for "Workrooms"—durable, chat-native containers for threaded agent workflows.
7.  **[PR #3274 - Linux static binaries (musl)](https://github.com/Hmbown/CodeWhale/pull/3274):** Switches Linux x64 release builds to static `musl` targets, resolving the widespread `glibc` mismatch installation errors.
8.  **[PR #3286 - Kimi schema sanitization fix](https://github.com/Hmbown/CodeWhale/pull/3286):** Patches schema generation to unconditionally apply `type: object` for Moonshot/Kimi parameters, resolving API 400 rejections. 
9.  **[PR #3293 - Respect `snapshots.enabled` flag](https://github.com/Hmbown/CodeWhale/pull/3293):** Fixes a bug where per-tool git snapshots were being generated even when users explicitly disabled the snapshot feature in their config.
10. **[PR #3317 - Tear down delegated app-server child](https://github.com/Hmbown/CodeWhale/pull/3317):** Prevents zombie processes by ensuring dispatched `codewhale-tui` listeners are properly reaped when the dispatcher process is killed.

## 5. Feature Request Trends
*   **WhaleFlow & Multi-Agent Orchestration:** Heavy emphasis on asynchronous execution ([#2973](https://github.com/Hmbown/CodeWhale/issues/2973)) and MapReduce-style synthesis ([#3230](https://github.com/Hmbown/CodeWhale/issues/3230)) for managing fleets of sub-agents.
*   **Granular Permission Routing:** Users want dynamic, contextual rule engines. PRs like [#3301](https://github.com/Hmbown/CodeWhale/pull/3301) and [#3295](https://github.com/Hmbown/CodeWhale/pull/3295) show demand for creating persistent `permissions.toml` rules on the fly directly from TUI approval modals.
*   **Third-Party Provider Expansion:** Requests to support cheaper inference backends, specifically OpenCode Go/Zen for DeepSeek-V4 access ([#1481](https://github.com/Hmbown/CodeWhale/issues/1481)).
*   **Workspace Awareness:** Requests for symlink-aware traversals ([#3242](https://github.com/Hmbown/CodeWhale/pull/3242)) and the ability to restrict skill scanning strictly to `~/.codewhale/` to prevent context bloat ([#3264](https://github.com/Hmbown/CodeWhale/issues/3264)).

## 6. Developer Pain Points
*   **TUI Reliability & Freezing:** The most prevalent frustration is the UI hanging during long-running tasks, specifically on Windows with `crossterm` ([#1812](https://github.com/Hmbown/CodeWhale/issues/1812)) and during auto-spawned sub-agents ([#3289](https://github.com/Hmbown/CodeWhale/issues/3289)).
*   **Rebranding Migration Friction:** The transition from `deepseek-tui` to `codewhale` has left behind legacy folder structures and configuration overlaps, confusing existing users ([#3240](https://github.com/Hmbown/CodeWhale/issues/3240)).
*   **Rust Monolith Maintenance:** Internal analyses reveal that core configuration and UI files (like `config.rs` at 9,400+ lines) have become God objects, massively slowing down the addition of new LLM providers ([#2608](https://github.com/Hmbown/CodeWhale/issues/2608), [#3314](https://github.com/Hmbown/CodeWhale/issues/3314)).

</details>