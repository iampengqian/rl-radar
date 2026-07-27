# AI CLI Tools Community Digest 2026-07-28

> Generated: 2026-07-27 22:19 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the July 28, 2026 community digests.

### 1. Ecosystem Overview
The AI CLI ecosystem is rapidly maturing, transitioning from simple code-completion interfaces into highly autonomous, multi-agent orchestration platforms. As of mid-2026, the dominant technical challenge has shifted toward managing complex multi-agent workflows, preserving context over long sessions, and fortifying security boundaries like sandboxing and tool execution. Toolmakers are heavily prioritizing cross-platform stability—particularly addressing Windows/WSL edge cases and terminal rendering quirks—alongside robust Model Context Protocol (MCP) integrations. Meanwhile, as agentic capabilities scale, billing transparency, quota management, and API drift across multiple LLM providers have emerged as critical friction points for enterprise and individual developers alike.

### 2. Activity Comparison
The development pace across the tracked tools varies from rapid daily iterations to consolidation phases. 

| Tool | Issues Highlighted | PRs Highlighted | Release Status (Last 24h) |
| :--- | :---: | :---: | :--- |
| **Claude Code** | 10 | 8 | No new releases |
| **OpenAI Codex** | 10 | 10 | 2 Alpha builds (v0.146.0-a12, a13) |
| **Gemini CLI** | 10 | 10 | 1 Nightly build (v0.54.0) |
| **GitHub Copilot CLI** | 10 | 6 | 1 Release (v1.0.76-0) |
| **Kimi Code CLI** | 4 | 4 | No new releases |
| **OpenCode** | 10 | 10 | 2 Releases (v1.18.6, v1.18.7) |
| **Pi** | 10 | 10 | No new releases |
| **Qwen Code** | 10 | 10 | 1 Nightly build + 2 Benchmark POCs |
| **DeepSeek TUI** | 4 | 10 | No new releases (v0.9.2 RC phase) |

### 3. Shared Feature Directions
*   **Multi-Agent Orchestration & Reliability:** Almost all tools are battling subagent reliability. *Claude Code* (conclusion amnesia, prompt injection), *OpenAI Codex* (MultiAgent V2 disk bloat), *Gemini CLI* (hanging indefinitely), *GitHub Copilot CLI* (preventing unwanted model delegation), and *Qwen Code* (sub-agent deadlocks) all highlight the industry's struggle to make child agents reliable, secure, and context-aware.
*   **MCP (Model Context Protocol) Hardening:** Standardizing external tool integration is a major focus. *OpenAI Codex*, *Gemini CLI*, and *Kimi Code CLI* are actively fixing OAuth flows, normalizing schemas, and improving plugin discovery latencies to make MCP production-ready.
*   **Terminal & Windows Compatibility:** Cross-platform UI consistency remains elusive. *OpenAI Codex*, *GitHub Copilot CLI*, and *OpenCode* are fighting severe Windows/Terminal rendering bugs. Meanwhile, *Kimi Code CLI* and *DeepSeek TUI* are specifically tackling non-UTF-8 (GBK) crashes and terminal layer intercepts (like `tmux` capturing the Spacebar).
*   **Billing, Quotas, & Context Transparency:** Developers demand granular control over hidden context and costs. *Claude Code* and *OpenAI Codex* are facing user revolts over broken rate limits and surprise API credit drains. *OpenCode* and *GitHub Copilot CLI* are actively building unified tracking dashboards for multi-provider usage.

### 4. Differentiation Analysis
*   **Architectural Approach:** *OpenAI Codex* and *Pi* are heavily focused on deep backend integrations, optimizing interoperability with competing models, custom BYOK gateways, and cross-provider routing. In contrast, *Claude Code* and *Gemini CLI* are tightly coupling sub-agents and AST-aware file readers directly into their proprietary ecosystems to maximize native model capabilities.
*   **Target Audiences:** *GitHub Copilot CLI* and *OpenCode* are doubling down on frictionless IDE/Developer experiences (e.g., Autopilot defaults, VS Code integrations, expanding pasted context). *DeepSeek TUI* and *Pi* are catering to power users who require granular, deterministic control over terminal UI states, control-plane routing, and fleet management.
*   **Security Posture:** *Qwen Code* and *Gemini CLI* are uniquely prioritizing strict environment isolation—patching IPC sandbox escapes, enforcing macOS seatbelts, and hardening Auto Memory redaction to prevent accidental secret leakage.

### 5. Community Momentum & Maturity
*   **High Velocity & Scale:** *OpenAI Codex*, *Gemini CLI*, and *Claude Code* exhibit massive scale, processing dozens of community issues and PRs daily. Codex and Gemini are aggressively pushing nightly/alpha builds, indicating a highly resourced, rapid-iteration engineering approach.
*   **Focused Consolidation:** *DeepSeek TUI* and *Kimi Code CLI* show a more mature, focused community currently stabilizing major version bumps (v0.9.2 RC) and standardizing localized provider integrations. 
*   **Ecosystem Flexibility:** *OpenCode* and *Pi* have highly active communities driven by extensibility, focusing on external plugin architectures, custom routing, and OAuth provider agnosticism rather than core AI model training.

### 6. Trend Signals
*   **The "Context Storage" Crisis:** As agentic sessions run for hours, local storage is choking. Codex (2GB session logs) and Gemini (workspace pollution) signal an urgent industry need for AST-aware context reading and aggressive, automated local disk compaction.
*   **Provider API Drift is Costly:** A major trend is the silent failure caused by assuming OpenAI-compatible APIs behave identically. Pi (Z.AI token mismatches) and OpenCode (Vertex routing 404s) highlight the critical need for adaptive API translation layers in multi-model CLI tools.
*   **Hidden System Prompting Friction:** *Claude Code's* `heron_brook` issue highlights a growing developer backlash against invisible system prompts that neuter agentic capabilities. Builders require transparent, deterministic control over how delegation and context windows are managed under the hood.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the technical community highlights report for the Claude Code Skills ecosystem based on recent repository activity.

### 1. Top Skills Ranking
While all top PRs currently show an "undefined" comment count (indicating a data parsing gap), the following submissions have driven the most sustained community engagement and repository updates:

*   **[Skill-Creator Ecosystem Overhaul](https://github.com/anthropics/skills/pull/1298)** (Related: [PR #1099](https://github.com/anthropics/skills/pull/1099), [PR #1050](https://github.com/anthropics/skills/pull/1050))
    *   **Functionality:** Fixes critical evaluation bugs in `run_eval.py` and `improve_description.py` where the description optimization loop was reporting 0% recall due to Windows subprocess pipe issues and artifact installation paths.
    *   **Status:** Open. This is the most heavily active PR cluster, spawned from major community issues like [#556](https://github.com/anthropics/skills/issues/556) and [#1061](https://github.com/anthropics/skills/issues/1061).
*   **[Self-Audit: Mechanical Verification + Four-Dimension Reasoning Quality Gate](https://github.com/anthropics/skills/pull/1367)**
    *   **Functionality:** A universal output auditing skill that verifies claimed output files mechanically, followed by a reasoning audit in damage-severity priority order.
    *   **Status:** Open.
*   **[Document-Typography Skill](https://github.com/anthropics/skills/pull/514)**
    *   **Functionality:** Acts as typographic quality control for AI-generated documents, fixing orphan words, widow paragraphs, and numbering misalignment.
    *   **Status:** Open.
*   **[Skill-Quality-Analyzer & Skill-Security-Analyzer](https://github.com/anthropics/skills/pull/83)**
    *   **Functionality:** Introduces meta-skills to the marketplace that analyze other skills for structural quality, documentation, and security vulnerabilities.
    *   **Status:** Open.
*   **[Testing-Patterns Skill](https://github.com/anthropics/skills/pull/723)**
    *   **Functionality:** Provides comprehensive code testing guidance based on the Testing Trophy model, including unit tests, React component testing, and edge cases.
    *   **Status:** Open.

### 2. Community Demand Trends
By analyzing the most active Issues, the community is pushing demand toward three specific areas:
*   **Governance, Trust, and Security:** Users are highly concerned about the blurred lines between official and community skills. Issue [#492](https://github.com/anthropics/skills/issues/492) highlights the dangers of community skills being distributed under the `anthropic/` namespace, driving demand for built-in trust scoring and policy enforcement (supported by proposals like [Issue #412](https://github.com/anthropics/skills/issues/412)).
*   **Memory & Context Management:** The ecosystem is hitting context limits. Issue [#1487](https://github.com/anthropics/skills/issues/1487) reports the `claude-api` skill eagerly consuming 156k tokens in a single call. Consequently, there is massive demand for memory compaction tools (e.g., [Issue #1329](https://github.com/anthropics/skills/issues/1329) proposing a *compact-memory* skill) and plan-file hygiene to manage context bloat.
*   **Enterprise & Team Collaboration:** Users are increasingly treating Claude Code as an enterprise tool. Issue [#228](https://github.com/anthropics/skills/issues/228) requests org-wide skill sharing, bypassing the need to manually pass around `.skill` files.

### 3. High-Potential Pending Skills
These highly refined, functional PRs address specific, widely-acknowledged pain points and are strong candidates for imminent merging:
*   **[Add plan-file-hygiene skill](https://github.com/anthropics/skills/pull/1479)**: Addresses the persistent issue of planning artifacts accumulating without a lifecycle (Issue #1417). Offers a clean, automated cleanup mechanism.
*   **[Add pyxel skill for retro game development](https://github.com/anthropics/skills/pull/525)**: Mature integration with `pyxel-mcp` for running and iterating on Python retro games.
*   **[Fix skill-creator UTF-8 panic on multi-byte characters](https://github.com/anthropics/skills/pull/362)**: Crucial infrastructure fix replacing character-based length checks with byte-length validation to stop Rust panics on international text.
*   **[Prevent tracked change w:id collision with existing bookmarks](https://github.com/anthropics/skills/pull/541)**: Essential bugfix for the DOCX skill that prevents file corruption caused by hardcoded OOXML IDs.

### 4. Skills Ecosystem Insight
The community's most concentrated demand is for robust **skill lifecycle management**—specifically, fixing the broken local evaluation tools, managing token context exhaustion, and establishing verifiable security boundaries between official and community-developed skills.

---

Here is the Claude Code community digest for July 28, 2026.

### 1. Today's Highlights
No new releases were rolled out in the last 24 hours, but the community has been highly active in reporting edge cases around multi-agent orchestration and subagent boundary behaviors. Billing and entitlement checks remain a hot topic following a recent mass billing incident and ongoing subscription misconfigurations across Max tiers. Meanwhile, several valuable community PRs were submitted to harden plugin architecture, fix devcontainer firewalls, and resolve documentation 404s.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
*   **[BUG] July 17 mass billing incident** ([#81703](https://github.com/anthropics/claude-code/issues/81703)): A user reported $704.71 in disputed charges after subscription usage was incorrectly routed to paid API usage credits during an acknowledged Anthropic incident. Highlights ongoing pain points with metering fail-safes.
*   **[BUG] Fable 5 gated behind usage credits on Max** ([#79360](https://github.com/anthropics/claude-code/issues/79360)): Users authenticating via `claude setup-token` with inference-only scopes are incorrectly prompted for API credits, locking them out of Fable 5 despite having active Max subscriptions. 
*   **[BUG] Remote Control connection failure** ([#78933](https://github.com/anthropics/claude-code/issues/78933): The `/remote-control` command in the desktop app crashes on connection attempts with a `Cannot read properties of undefined (reading 'session_url')` error.
*   **[BUG] Idle CLI sessions burn 100%+ CPU** ([#81353](https://github.com/anthropics/claude-code/issues/81353)): Originally thought to be caused by OS sleep/resume, updated instrumentation reveals that recurring ~1.1-hour CPU spikes occur in completely idle CLI sessions, racking up massive CPU overhead.
*   **[BUG] `heron_brook` prompt silently overrides delegation** ([#80988](https://github.com/anthropics/claude-code/issues/80988)): v2.1.219 injects an invisible prompt block preventing Opus 5 from utilizing the AgentTool unless explicitly requested, completely ignoring user-configured delegation policies.
*   **[BUG] Opus 5 orchestration reversal** ([#81786](https://github.com/anthropics/claude-code/issues/81786): In heavy multi-agent sessions (40h+, 95+ dispatches), Opus 5 exhibits conclusion amnesia—re-anchoring its final decision to the most recent subagent report, resulting in multiple contradictory outcomes in a single hour.
*   **[BUG] Prompt injection at subagent spawn boundary** ([#81784](https://github.com/anthropics/claude-code/issues/81784): A critical safety report detailing a recurring exploit where background subagents complete instantly without tool use, returning system-prompt-shaped text fragments via the tool result channel.
*   **[BUG] Silent exclusion of custom agents** ([#81781](https://github.com/anthropics/claude-code/issues/81781): Once the number of custom agent `.md` files in `~/.claude/agents/` grows past an unspecified threshold, Claude Code begins silently dropping valid agents from the subagent registry.
*   **[FEATURE] Multi-account switching in Mobile app** ([#36151](https://github.com/anthropics/claude-code/issues/36151): A highly requested (509 upvotes) plea to allow account switching in the Claude Mobile app without sharing an email address, aiming to simplify enterprise and personal workflows.
*   **[FEATURE] Shared context across Claude suite** ([#30675](https://github.com/anthropics/claude-code/issues/30675)): Users are heavily requesting unified memory across Claude Code CLI, Claude.ai web, Cowork, and mobile to remove the friction of rebuilding context when switching environments.

### 4. Key PR Progress
*   **PR #81673:** Fixes a devcontainer firewall setup issue where a single NXDOMAIN (`statsig.anthropic.com`) aborted the entire `init-firewall.sh` script, leaving the network half-configured.
*   **PR #81672:** Decouples the `hookify` plugin imports from its installation directory name, allowing it to be imported correctly when installed via the marketplace.
*   **PR #81670:** Adds crucial shell quoting around `${CLAUDE_PLUGIN_ROOT}` to prevent hook breakages when projects are located in directories containing spaces.
*   **PR #81576:** Corrects the documentation for the `security-guidance` plugin, which falsely claimed to use a `PreToolUse` hook and underestimated its pattern list size.
*   **PR #81540:** An automated PR (rewarded at $200) addressing a "Usage leak" bug, successfully passing repository validation and tests.
*   **PR #81500:** Resolves multiple 404 errors pointing to the deprecated AWS gateway walkthrough links inside the `examples/gateway/aws` directory.
*   **PR #20448:** Introduces `web4-governance`, a proposed lightweight plugin bringing T3 trust tensors, entity witnessing, and R6 audit trails to AI agent workflows. 

### 5. Feature Request Trends
*   **Unified Cross-Platform Context:** Developers want seamless session and context sharing between Claude Code, Cowork, web, and mobile apps. Contextual siloing is currently the biggest hurdle for multi-environment workflows.
*   **Orchestration & Fleet Management:** As multi-agent dispatches become common, there is a strong demand for better fleet visibility, reliable agent isolation, and preventing subagent context collapse or rogue behavior.
*   **Granular UI & Session Controls:** Users are requesting the ability to delete or edit specific portions of conversation history inline, alongside more configurable mouse/keyboard behaviors in interactive TUI menus.

### 6. Developer Pain Points
*   **Billing & Entitlement Fragility:** Users are increasingly frustrated by safety nets that fail during backend incidents, resulting in surprise API credit drains. Additionally, token-based authentications (`setup-token`) routinely fail to read subscription entitlements properly.
*   **Subagent Reliability:** Trust in multi-agent orchestration is eroding. Developers report critical bugs where agents delete harness state, bypass security boundaries via prompt injection, or silently fail to spawn when registries grow too large.
*   **Invisible System Prompting:** The discovery of hidden prompt injections like `heron_brook` that quietly neuter agentic capabilities (like delegation) is causing friction for developers building complex automation without clear opt-outs.
*   **Windows UX Disruptions:** Subprocess spawns continue to flash disruptive terminal windows on Windows, and recurring Enter-key mapping bugs disrupt basic prompt composition flows.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for July 28, 2026.

### 1. Today's Highlights
Codex pushed two new Rust alpha builds (`v0.146.0-alpha.12` and `alpha.13`) alongside a massive barrage of backend optimizations, multi-agent enhancements, and Windows stability fixes. The community was highly vocal about Windows Desktop instability—specifically surrounding the in-app browser and sandbox—and recurring frustrations with rate limits and session log bloat. 

### 2. Releases
*   **[rust-v0.146.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.13)**
*   **[rust-v0.146.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.12)**
*(Note: Specific changelogs for these alpha releases are pending, but recent merged PRs indicate heavy focus on MultiAgent V2 architecture, Windows process management, and telemetry).*

### 3. Hot Issues
*   **[#31606](https://github.com/openai/codex/issues/31606) [bug, rate-limits, app] Reset failed, did not apply and 1 reset is wasted** (52 comments, 61 upvotes)
    *A highly upvoted issue where Pro users lose their reset quota without the system actually resetting. This remains a major source of user friction.*
*   **[#31573](https://github.com/openai/codex/issues/31573) [bug, auth, mcp, CLI] OAuth authentication fails at issuer validation** (26 comments, 60 upvotes)
    *A high-priority CLI bug affecting MCP integrations where OAuth validation breaks down, widely supported by the community.*
*   **[#32683](https://github.com/openai/codex/issues/32683) [bug, windows-os, app, browser] Codex App crashes in CrBrowserMain...** (27 comments, 8 upvotes)
    *Pro (20x) users report consistent Windows crashes (0xC0000005) when the agent attempts to utilize the embedded Browser Use tool.*
*   **[#24948](https://github.com/openai/codex/issues/24948) [bug, TUI] Codex session logs grow to 700MB-2GB...** (24 comments, 1 upvote)
    *Users are experiencing massive local disk bloat due to unoptimized TUI compaction history and raw tool outputs.*
*   **[#35058](https://github.com/openai/codex/issues/35058) [bug, extension] Codex Diff crashes with “Oops, an error has occurred”...** (20 comments, 48 upvotes)
    *The VS Code Codex Diff viewer is completely broken for macOS Apple Silicon users, throwing errors after every file edit.*
*   **[#20500](https://github.com/openai/codex/issues/20500) [enhancement, codex-web, auth] Feature request: support multiple named accounts...** (20 comments, 90 upvotes)
    *The top-voted feature request today: users want hard privacy boundaries and explicit account selection for multiple connectors within a single Codex session.*
*   **[#34061](https://github.com/openai/codex/issues/34061) [bug, CLI, subagent] Insane Codex Disk Usage from Subagents** (14 comments)
    *Similar to the TUI bloat, MultiAgent V2/V3 subagents are generating massive amounts of local disk usage, choking user hard drives.*
*   **[#35352](https://github.com/openai/codex/issues/35352) [bug, windows-os, app, browser] Desktop exits when embedded browser GPU process crashes...** (12 comments)
    *Another critical Windows Desktop crash tied to unsigned SwiftShader fallbacks failing when the embedded browser's GPU process dies.*
*   **[#35552](https://github.com/openai/codex/issues/35552) [bug, rate-limits, CLI] FUCK YOU OPENAI, FUCK YOU** (11 comments)
    *Frustration has boiled over for at least one user regarding CLI rate limits, highlighting growing tension around daily usage caps.*
*   **[#35097](https://github.com/openai/codex/issues/35097) [bug, CLI, subagent] gpt-5.6-luna is marked as MultiAgent V1, so V2 spawn_agent rejects it** (3 comments, 5 upvotes)
    *A regression/compatibility issue where `gpt-5.6-luna` is incorrectly tagged, preventing it from spawning under the new V2 agent framework.*

### 4. Key PR Progress
*   **[PR #35656](https://github.com/openai/codex/pull/35656) Preserve multi-agent settings across config representations**
    *Standardizes how `multi_agent_v2` configurations are saved and layered, preventing legacy boolean toggles from being overwritten.*
*   **[PR #35655](https://github.com/openai/codex/pull/35655) Terminate Windows non-TTY processes on interrupt**
    *Fixes a critical Windows bug where `Ctrl-C` via `write_stdin` failed to actually terminate running processes.*
*   **[PR #35675](https://github.com/openai/codex/pull/35675) Prepare MCP and plugin recommendations concurrently**
    *Significant latency optimization: MCP discovery and endpoint plugin recommendations now run concurrently instead of sequentially.*
*   **[PR #35671](https://github.com/openai/codex/pull/35671) Route curated plugins by authentication mode**
    *Enhances plugin routing logic so capabilities correctly follow the active auth mode (ChatGPT, Remote, or API) after account switches.*
*   **[PR #35623](https://github.com/openai/codex/pull/35623) Parse Claude and Cursor session records separately**
    *Improves Codex's interoperability with rival AI tools by properly sanitizing and parsing imported Cursor and Claude session logs.*
*   **[PR #35649](https://github.com/openai/codex/pull/35649) Preserve TUI input when terminal focus returns**
    *Fixes an annoying TUI bug where returning focus to the terminal window blocked the input loop and swallowed keystrokes.*
*   **[PR #35670](https://github.com/openai/codex/pull/35670) Raise the Windows exec yield floor to 10 seconds**
    *Improves Windows execution stability by clamping the initial `exec_command` yield time to a minimum of 10 seconds.*
*   **[PR #35653](https://github.com/openai/codex/pull/35653) Test developer instruction inheritance for multi-agent workers**
    *Ensures that developer prompts and instructions survive context compaction and forking inside the MultiAgent V2 architecture.*
*   **[PR #35678](https://github.com/openai/codex/pull/35678) Preserve paginated thread metadata across resumes**
    *Fixes an issue where resuming large threads would overwrite the original preview, title, and first user message with truncated suffix data.*
*   **[PR #35642](https://github.com/openai/codex/pull/35642) Make OpenTelemetry provider shutdown idempotent**
    *Prevents exporter crashes by guarding the telemetry provider so it shuts down cleanly and only once.*

### 5. Feature Request Trends
*   **Multi-Account & Enterprise SSO Support:** A massive push from the community to allow multiple separately authorized accounts per connector ([#20500](https://github.com/openai/codex/issues/20500)), alongside requests for reliable OAuth lifecycles for Enterprise SSO within MCP ([#35006](https://github.com/openai/codex/issues/35006)).
*   **Better Context Fidelity:** Developers want Codex to accurately track "residual fidelity"—knowing exactly what context was omitted, kept, or compacted across tool calls and sessions ([#35528](https://github.com/openai/codex/issues/35528)).
*   **TUI & Editor Refinements:** Continued requests for native Vim mode retention after prompt submission in the CLI ([#21804](https://github.com/openai/codex/issues/21804)).

### 6. Developer Pain Points
*   **Windows Desktop Stability:** The Windows app is currently highly unstable, particularly the embedded browser (CrBrowserMain/SwiftShader crashes), WSL pathing resolutions, and sandbox read operations following power outages.
*   **Disk & Memory Bloat:** Codex is leaking massive amounts of data locally. Developers are frustrated by session logs growing up to 2GB and unoptimized subagent disk usage that remains on the system even after task completion.
*   **Quotas & Rate Limits:** The "reset" logic is failing to apply correctly, and aggressive CLI rate limits are causing severe interruptions, culminating in high tensions among Pro and 20x tier subscribers.
*   **UI/UX Glitches in Extensions:** The VS Code extension Diff viewer is completely broken for macOS users, and the Windows app context donut UI recently regressed, making it hard for developers to track agent context limits visually.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for July 28, 2026.

### 1. Today's Highlights
Gemini CLI rolled out a new nightly build (v0.54.0) alongside a massive dependency overhaul, bumping over 75 npm packages and upgrading the core `@google/genai` SDK to v2.12.0. Community and maintainer attention is heavily focused on fortifying security boundaries—specifically around sandbox profiles, MCP OAuth flows, and API key handling—while also tackling deep-rooted agent behaviors like subagent reliability and Auto Memory retention.

### 2. Releases
*   **v0.54.0-nightly.20260727** ([Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.54.0-nightly.20260726.g3818efbbf...v0.54.0-nightly.20260727.g3818efbbf))
    *   Automated nightly bump. Accompanied by several automated dependency merges including `execa` v10.0.0, `lint-staged` v17.1.0, and a significant update to the `@google/genai` SDK.

### 3. Hot Issues
1.  **[Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**: A critical bug where the `codebase_investigator` subagent falsely reports success after hitting its turn limit. This masks underlying execution failures and breaks autonomous workflows.
2.  **[Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409)**: Users report the generalist agent hanging forever on simple tasks like folder creation. The current community workaround is explicitly disabling subagent deferral.
3.  **[Robust component-level evaluations (EPIC)](https://github.com/google-gemini/gemini-cli/issues/24353)**: Maintainers are expanding the CLI's behavioral testing matrix (76 tests across 6 models) to improve component reliability and eval infrastructure. 
4.  **[Assess AST-aware file reads and codebase mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**: A proposed architectural shift to integrate Abstract Syntax Tree (AST) tools for more precise, token-efficient file reading and code navigation.
5.  **[Add deterministic redaction to Auto Memory](https://github.com/google-gemini/gemini-cli/issues/26525)**: A security-focused issue highlighting that secret redaction currently happens *after* context is sent to the extraction model, requesting pre-processing redaction.
6.  **[Shell execution gets stuck "Waiting for input"](https://github.com/google-gemini/gemini-cli/issues/25166)**: A high-priority bug where simple, non-interactive shell commands cause the CLI to hang indefinitely while awaiting user input.
7.  **[Gemini CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)**: The CLI fails when users have a large number of custom tools/MCPs enabled, pointing to a need for dynamic tool scoping.
8.  **[Agent should discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**: Users are requesting guardrails to prevent the agent from executing destructive git commands (e.g., `git reset --force`) when safer alternatives exist.
9.  **[Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)**: Configuration overrides like `maxTurns` are being bypassed by the Browser Agent, breaking enterprise policy enforcement.
10. **[Model frequently creates tmp scripts in random spots](https://github.com/google-gemini/gemini-cli/issues/23571)**: Workspace pollution issue where the agent litters directories with temporary execution scripts instead of utilizing native file editing tools.

### 4. Key PR Progress
1.  **[PR #28551: Fall back to embedded macOS seatbelt profiles](https://github.com/google-gemini/gemini-cli/pull/28551)**: Fixes a critical startup crash on macOS sandbox mode (`-s`) by embedding `.sb` profiles directly into the bundle.
2.  **[PR #28481: Refresh MCP OAuth tokens with stored client ID](https://github.com/google-gemini/gemini-cli/pull/28481)**: Resolves a frustrating loop where OAuth token refreshes failed, deleted credentials, and forced re-authentication on every CLI restart.
3.  **[PR #28485: Add `gemini-3.5-flash` to model selector](https://github.com/google-gemini/gemini-cli/pull/28485)**: Fixes a legacy path bug that prevented users from selecting the newest 3.5/3.6 Flash models in the UI.
4.  **[PR #28523: Enforce explicit tag length in file keychain](https://github.com/google-gemini/gemini-cli/pull/28523)**: Enhances local credential security by enforcing strict 128-bit authentication tags across Node.js runtimes.
5.  **[PR #28531: Normalize CRLF to LF in a2a-server](https://github.com/google-gemini/gemini-cli/pull/28531)**: Fixes an issue where Windows users saw broken side-by-side diffs in Gemini Code Assist due to line-ending mismatches.
6.  **[PR #28549: Disclose Plan Mode read-only status as a server claim](https://github.com/google-gemini/gemini-cli/pull/28549)**: Improves security transparency by ensuring users know that "read-only" execution in Plan Mode relies on MCP server hints rather than CLI-level enforcement.
7.  **[PR #28546: Strip Authorization header when using `GEMINI_API_KEY`](https://github.com/google-gemini/gemini-cli/pull/28546)**: Prevents leftover headers from breaking API requests when authenticating via API keys.
8.  **[PR #28446: Use native fetch for OAuth token exchange](https://github.com/google-gemini/gemini-cli/pull/28446)**: Fixes headless/VPS server login crashes ("Premature close") by replacing custom fetch wrappers with native Node.js implementations.
9.  **[PR #28364: Deep-merge user model config over defaults](https://github.com/google-gemini/gemini-cli/pull/28364)**: Resolves configuration issues where deeply nested user overrides (like `generateContentConfig`) were lost during shallow merges.
10. **[PR #28369: Add local report command for behavioral evals](https://github.com/google-gemini/gemini-cli/pull/28369)**: Introduces a new developer utility (`npm run eval:report`) to aggregate pass rates from Vitest, aiding custom model benchmarking.

### 5. Feature Request Trends
*   **Advanced Context & Code Navigation**: Strong momentum behind AST-aware tools ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) to replace naive file reading, which will drastically reduce token noise and improve mapping.
*   **Enhanced Subagent Orchestration**: Requests for better trajectory visibility ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), explicit limits on local subagent sprints ([#20195](https://github.com/google-gemini/gemini-cli/issues/20195)), and improved agent self-awareness regarding tool availability ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).
*   **Cross-Platform Stability & Terminal UX**: Demand for better rendering pipelines on terminal resizes ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)), robust external editor handling ([#24935](https://github.com/google-gemini/gemini-cli/issues/24935)), and seamless Windows/PowerShell support.

### 6. Developer Pain Points
*   **Agent Reliability & Hangs**: The most frequent frustration is the agent hanging indefinitely during basic shell operations or when deferring to subagents ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166), [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)).
*   **Workspace Pollution**: Developers are annoyed by the model's tendency to generate temporary scripts in random directories instead of using safe, inline file modifications ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).
*   **Auto Memory Bugs**: The background memory extraction system is proving overly aggressive, getting stuck retrying low-signal sessions indefinitely ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)) and silently dropping invalid memory patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for 2026-07-28.

### 1. Today's Highlights
GitHub Copilot CLI rolled out release v1.0.76-0, introducing performance enhancements for Model Context Protocol (MCP) tools and a highly requested default for Autopilot mode. The community was highly active in reporting terminal rendering glitches on Windows/WSL and discovering a critical bug where empty model turns permanently brick active sessions. Several feature requests also gained traction, pushing for better model context and agent delegation controls.

### 2. Releases
**v1.0.76-0** brings the following improvements and fixes:
* **Performance:** MCP tools now load faster from definition-scoped snapshots, complete with opt-outs for process-wide and per-server caching.
* **UX Improvement:** Autopilot now stays selected by default after triggering `task_complete`. Users can revert to interactive mode after each task by setting `stayInAutopilot` to `false`.
* **Bugfix:** Restored an early warning that was previously missing when running unsupported operations.

### 3. Hot Issues
Here are the top 10 noteworthy issues from the community:

* **[#4188 Regression on plan-mode blocking shell commands](https://github.com/github/copilot-cli/issues/4188)**: Users report plan mode now blocks essential shell commands (like `gh`), hindering the ability to read or create issues during the planning phase.
* **[#4183 Auto-compaction fails to prevent 5MB CAPI limits](https://github.com/github/copilot-cli/issues/4183)**: Long, tool-heavy sessions hit a permanent failure when the serialized CAPI Responses request exceeds the 5MB limit, bypassing current auto-compaction limits.
* **[#4161 `task_complete` unavailable after switching to autopilot](https://github.com/github/copilot-cli/issues/4161)**: A regression causing the `task_complete` tool to disappear when switching back to autopilot mode, despite previous fixes asserting it would always be available.
* **[#4263 Responses disappear on Windows Terminal](https://github.com/github/copilot-cli/issues/4263)**: A frustrating UI bug where content disappears during terminal scrolling when using split panes in Windows Terminal. 
* **[#4269 Empty model turn bricks session](https://github.com/github/copilot-cli/issues/4269)**: A critical bug where an empty model turn is persisted as `content: null`, causing strict OpenAI-compatible endpoints to reject all subsequent requests in the session.
* **[#1730 `sessionStart` hook does not fire](https://github.com/github/copilot-cli/issues/1730)**: Hooks defined in `.github/hooks/*.json` are failing to execute upon session startup, heavily impacting custom plugin workflows.
* **[#1381 Rewind requires Git](https://github.com/github/copilot-cli/issues/1381)**: The "Rewind" feature is locked behind git repository requirements, frustrating users of alternative VCS systems like Jujutsu (`jj`).
* **[#4270 Claude Sonnet 5 delegation issues](https://github.com/github/copilot-cli/issues/4270)**: Users complain that selecting Claude Sonnet 5 for deep reasoning results in the model improperly delegating the core tasks to a lesser agent.
* **[#4118 `/app` ignores working directory](https://github.com/github/copilot-cli/issues/4118)**: The `/app` slash command fails to auto-select the current working directory, forcing manual directory selection. 
* **[#4163 Zombie processes on Linux](https://github.com/github/copilot-cli/issues/4163)**: Copilot CLI v1.0.71 fails to reap child processes on Linux, causing system zombies to accumulate rapidly under the Copilot PID.

### 4. Key PR Progress
* **[#1598 fix: add trap to clean up temp directory](https://github.com/github/copilot-cli/pull/1598)**: Adds a trap in `install.sh` to ensure temporary directories are properly cleaned up during unexpected installation failures or network errors.
* **[#1609 Update instructions for adding permissions in PAT](https://github.com/github/copilot-cli/pull/1609)**: Improves developer onboarding by clarifying the exact UI navigation path required for `Copilot Requests` PAT permissions.
* **[#1116 Fix misleading doc - 0x models dont reduce quota](https://github.com/github/copilot-cli/pull/1116)**: Addresses documentation that incorrectly implied 0x models still consumed usage quota, aligning docs with actual behavior.
* **[#988 chore(docs): add missing prefix to brew command](https://github.com/github/copilot-cli/pull/988)**: Fixes a typo in the Homebrew installation instructions that caused the recommended command to fail.
* **[#1333 Fix minor grammar and Markdown formatting issues](https://github.com/github/copilot-cli/pull/1333)**: Routine but helpful maintenance to improve the readability of the repository's documentation.
* **[#4224 OTel spans omit billing attributes](https://github.com/github/copilot-cli/issues/4224)** *(Issue/PR Context)*: Ongoing discussions to patch OpenTelemetry spans so that external cost accounting accurately tracks AI credit consumption during subagent delegation. 
*(Note: Several invalid/spam PRs regarding Jekyll deployments, UI components, and unrelated repo config changes were omitted).*

### 5. Feature Request Trends
* **ACP & External Client Parity**: There is a strong push from the community to bring interactive CLI features to the Agent Client Protocol (ACP). Users want `usage_update` events emitted for AI credits/context windows ([#4233](https://github.com/github/copilot-cli/issues/4233)) and the ability to change `contextTier` mid-session in clients like Zed ([#4275](https://github.com/github/copilot-cli/issues/4275)).
* **Granular Agent & Model Routing Control**: Developers are requesting more sophisticated agent orchestration. This includes automatically switching models between the planning and execution phases ([#2792](https://github.com/github/copilot-cli/issues/2792)) and giving users strict controls to prevent high-tier models from delegating work to lesser agents ([#4270](https://github.com/github/copilot-cli/issues/4270)).
* **VCS Agnosticism**: As developers adopt modern alternative VCS tools, there is a growing trend requesting that core Copilot CLI features (like Rewind) decouple from strict Git dependencies ([#1381](https://github.com/github/copilot-cli/issues/1381)).

### 6. Developer Pain Points
* **Windows Terminal/Tmux Rendering**: A significant cluster of user pain points revolves around terminal UI rendering, specifically in WSL, `tmux`, `screen`, and Windows Terminal split panes. Prompts vanishing upon submission, scroll-buffer anomalies, and clipboard access failures are highly disruptive to daily workflows ([#4191](https://github.com/github/copilot-cli/issues/4191), [#4159](https://github.com/github/copilot-cli/issues/4159), [#4263](https://github.com/github/copilot-cli/issues/4263)).
* **Opaque Credit Consumption**: Developers are frustrated by hidden or unexpected AI credit drains. This includes credit consumption on session restarts/resumes ([#3886](https://github.com/github/copilot-cli/issues/3886)) and missing billing data in observability tools when subagents are utilized ([#4224](https://github.com/github/copilot-cli/issues/4224)).
* **Tooling Pattern Matching Constraints**: Built-in CLI tools frequently fail basic operations, such as the `glob` tool requiring `**/` prefixes for any multi-segment path matching ([#4271](https://github.com/github/copilot-cli/issues/4271)), slowing down agentic workflows.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the community digest for the Kimi Code CLI project.

# Kimi Code CLI Community Digest (2026-07-28)

## 1. Today's Highlights
No new official releases were shipped today, but the community has been highly active in identifying and patching critical environment and execution bugs. The current development focus is heavily centered on improving Windows compatibility (specifically GBK/non-UTF-8 encoding crashes) and stabilizing tool execution flows (hooks and MCP integrations).

## 2. Releases
*No new releases in the last 24 hours.*

## 3. Hot Issues
*Note: 4 issues were updated today. All are listed below.*

*   **[VS Code Extension] Approval prompts intermittently never render ([#2563](https://github.com/MoonshotAI/kimi-cli/issues/2563))**
    *   **Context:** On macOS (darwin-arm64) using the `kimi-k3` model, approval prompts for `ExitPlanMode` and tool permissions are failing to render, leading to indefinite stalls or a silent 600-second timeout.
    *   **Why it matters:** Extensions stalling silently creates a severely degraded developer experience (DX) and breaks automated workflows.
*   **Hooks silently dropped before completion ([#2564](https://github.com/MoonshotAI/kimi-cli/issues/2564))**
    *   **Context:** `PostToolUse` and `PostToolUseFailure` hooks configured in `config.toml` are being collected by the Garbage Collector (GC) before they finish executing, causing non-deterministic behavior.
    *   **Why it matters:** Custom hooks are crucial for enterprise CI/CD integrations and linting. Unreliable hook execution undermines trust in the CLI's automation capabilities.
*   **[VS Code Extension] Plan mode file path not clickable in chat webview ([#2317](https://github.com/MoonshotAI/kimi-cli/issues/2317))**
    *   **Context:** A UI bug in the VS Code extension (v0.5.10) where file paths generated in Plan mode are not clickable. 
    *   **Why it matters:** Community members have noted this heavily impacts navigation and code review velocity.
*   **Login failed: Network is unreachable ([#1070](https://github.com/MoonshotAI/kimi-cli/issues/1070))**
    *   **Context:** Older bug report (v1.9.0) regarding SSL/network connection failures to `auth.kimi.com:443`. 
    *   **Why it matters:** Recently updated/closed, suggesting ongoing community interest in network proxy configurations and authentication reliability.

## 4. Key PR Progress
*Note: 4 PRs were updated today. All are listed below.*

*   **[PR #2561] Fix UnicodeEncodeError on startup when stdio uses a non-UTF-8 encoding**
    *   Fixes a fatal crash on Windows when launching `kimi` from Git Bash using the GBK codec, specifically failing on the block character `▐` in the welcome banner logo. 
*   **[PR #2560] Fix UnicodeEncodeError in web banner when stdout is non-UTF-8 (Windows)**
    *   Similar to the startup crash, this fixes `kimi web` crashing on Windows (Chinese locale/codepage 936) when stdout is redirected. Both PRs drastically improve Windows stability.
*   **[PR #2539] fix(mcp): normalize tools for Moonshot API**
    *   Improves Model Context Protocol (MCP) tool integration by generating stable Moonshot-compatible aliases for tool names and properly mapping missing root `object` types in schemas.
*   **[PR #2562] fix(llm): allow disabling prompt cache key**
    *   Introduces a new configuration setting (`prompt_cache_key: boolean`) to omit session-derived cache keys for custom LLM providers, preserving default behavior for managed Kimi providers but offering flexibility for custom endpoints.

## 5. Feature Request Trends
*   **Robust Custom Integrations (MCP & Hooks):** Developers are building complex toolchains and expect deterministic execution. There is a strong demand for rock-solid MCP schema normalization and guaranteed lifecycle execution for `PostToolUse` hooks.
*   **Provider & LLM Flexibility:** Users desire granular control over LLM configurations, specifically the ability to toggle prompt caching behavior when routing away from the default managed Kimi provider.
*   **Cross-Platform Consistency (Windows):** A significant trend of contributions is aimed at making the CLI resilient to localized Windows environments (non-UTF-8 encodings like GBK).

## 6. Developer Pain Points
*   **Windows Encoding Crashes:** Non-UTF-8 legacy encodings (GBK/Codepage 936) repeatedly break the CLI's rendering logic (banners, UI elements) during startup or output redirection. 
*   **Silent UI Failures in VS Code:** Developers are experiencing "silent" failures—such as unrendered approval prompts resulting in 600-second timeouts, or non-clickable file paths—which interrupt deep-work states and require manual restarts.
*   **Non-deterministic Lifecycle Execution:** Background tasks and hooks being prematurely killed by the Garbage Collector is a major frustration for developers relying on the CLI for automated, unattended execution.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for July 28, 2026.

### 1. Today's Highlights
OpenCode rolled out desktop stability patches (v1.18.6 and v1.18.7) addressing UI freezing and macOS fullscreen issues, though some users are still reporting lingering renderer crashes with drag-and-drop plugins. The community remains highly engaged on quality-of-life features, with massive support for expanding pasted context and a strong push for unified API usage tracking. Meanwhile, core contributors are actively merging fixes to prevent session loss and improve tool schema reliability.

### 2. Releases
*   **[v1.18.7](https://github.com/anomalyco/opencode/releases)**: Focused on Desktop bugfixes. Removed the extra titlebar inset during macOS fullscreen. Fixed a bug where shadowed commands incorrectly reappeared in the command palette. Added scrolling support to the project selector dropdown for long lists. 
*   **[v1.18.6](https://github.com/anomalyco/opencode/releases)**: Fixed a core issue where refreshing one Git branch reference moved another branch's checkout. Improved Desktop API compatibility across directory, project, session, and terminal flows, and patched legacy MCP bugs.

### 3. Hot Issues
*   **[#4283](https://github.com/anomalyco/opencode/issues/4283) - Copy To Clipboard is not working**: A highly impactful, long-standing bug (107 👍 / 116 comments) where selecting response text in the TUI fails to copy. 
*   **[#8501](https://github.com/anomalyco/opencode/issues/8501) - [FEATURE] Allow expanding pasted text**: The top-voted feature request (219 👍) asks for the ability to expand/edit summarized pasted text (e.g., `[Pasted ~1 lines]`) to give users better prompt control.
*   **[#9281](https://github.com/anomalyco/opencode/issues/9281) - Add unified usage tracking via /usage**: Users want a built-in command to track rate limits and usage quotas across multiple OAuth providers (31 👍 / 11 comments).
*   **[#29703](https://github.com/anomalyco/opencode/issues/29703) - Allow changing project folder path without losing session**: Renaming or moving a project directory currently wipes chat history, frustrating developers who reorganize their file systems.
*   **[#38844](https://github.com/anomalyco/opencode/issues/38844) - The close button does not work**: A critical regression where closing a project via the UI freezes the screen completely on Desktop v1.18.5.
*   **[#38830](https://github.com/anomalyco/opencode/issues/38830) - AutoScroller plugin depends on Scroller plugin**: A recurring fatal renderer error on v1.18.7 when opening Settings or drag-and-drop views, pointing to an internal plugin dependency failure.
*   **[#34040](https://github.com/anomalyco/opencode/issues/34040) - TUI autocomplete does not list files inside configured references**: Typing `@home` for an external directory reference stops at the alias instead of autocompleting nested files.
*   **[#37894](https://github.com/anomalyco/opencode/issues/37894) - opencode web: UI non-functional in empty dir**: Starting the web UI in an empty workspace throws `UnknownError` and renders the chat invisible.
*   **[#21524](https://github.com/anomalyco/opencode/issues/21524) - prompt_async does not wake idle sessions**: An API orchestration bug where HTTP 204 is returned, but the assistant turn fails to engage, breaking automated workflows.
*   **[#39069](https://github.com/anomalyco/opencode/issues/39069) - Vertex Anthropic routing issues**: Claude models on Google Vertex are routed to the wrong publisher namespace, returning 404s.

### 4. Key PR Progress
*   **[PR #39174](https://github.com/anomalyco/opencode/pull/39174) - Reload discovered plugins from source edits**: Fixes a core bug where edits to `plugins/*.{ts,js}` were suppressed by Config's equality checks, enabling smoother local plugin development.
*   **[PR #39200](https://github.com/anomalyco/opencode/pull/39200) - Finalize assistant messages on failure**: Ensures the prompt loop cleanly saves and finalizes assistant messages even if processor setup or execution defects mid-run.
*   **[PR #9545](https://github.com/anomalyco/opencode/pull/9545) - Add OAuth provider usage tracking**: Implements read-only usage tracking for four major OAuth providers, directly solving Issue #9281.
*   **[PR #39189](https://github.com/anomalyco/opencode/pull/39189) - Restore queued messages on session interruption**: Fixes a UX annoyance where interrupting the agent with `ESC` while typing would discard the user's in-progress message.
*   **[PR #39176](https://github.com/anomalyco/opencode/pull/39176) - Automatic discovery of models from providers**: Adds a generic mechanism for providers to pull `/v1/models` endpoints for dynamic, automatic model updating.
*   **[PR #39197](https://github.com/anomalyco/opencode/pull/39197) - Rewrite codex request body for ChatGPT backend**: Adjusts OpenCode's standard request body to comply with the specific requirements of the ChatGPT OAuth backend gateway.
*   **[PR #38534](https://github.com/anomalyco/opencode/pull/38534) - Emit ready event for startup notifications**: Adds a `tui.toast.mount` lifecycle event allowing server plugins to cleanly push startup notifications to the TUI.
*   **[PR #39177](https://github.com/anomalyco/opencode/pull/39177) - Drop invalid optional tool inputs**: Improves tool execution resilience by retrying Effect schema tool input decoding after automatically stripping invalid top-level optional fields.
*   **[PR #39192](https://github.com/anomalyco/opencode/pull/39192) - Apply configured provider filter to recent models**: Fixes a config bug where recently used models would linger in the UI even after their provider was removed from settings.
*   **[PR #36872](https://github.com/anomalyco/opencode/pull/36872) - Install AppStream metainfo in Linux packages**: Ensures generated AppStream XML data is correctly included in `.deb` and `.rpm` packages for Linux desktop integration.

### 5. Feature Request Trends
*   **Prompt Transparency & Control**: Users want less "magic" and more control over context windows. The massive popularity of expanding pasted text (#8501) and requests for better mouse/copy separation (#34063) highlight a need for more granular text handling.
*   **Workspace & Session Portability**: Developers frequently reorganize their environments. There is a strong trend requesting that project directories be mutable without wiping historical context (#29703, #39199).
*   **Provider & Model Visibility**: As users bring multiple API keys and OAuth providers into OpenCode, there is a distinct trend toward wanting centralized dashboards for model discovery (#39176) and unified quota tracking (#9281).
*   **Programmatic & Multi-Session Control**: Power users are running headless or multi-TUI setups. Requests for unified server routing (#39181) and reliable async prompting (#21524) show a maturing user base building automated pipelines on top of OpenCode.

### 6. Developer Pain Points
*   **Desktop UI Freezes**: The most prominent pain point across multiple OS environments (macOS, Windows) is the Desktop app completely freezing when closing a project (#38844, #38885, #38979) or interacting with specific plugins like AutoScroller (#38830, #39162).
*   **TUI Mouse & Clipboard Quirks**: Long-standing friction remains in the terminal interface regarding mouse capture. Users are frustrated that enabling mouse scrolling hijacks clipboard selection, with no fine-grained control over the two behaviors (#34063, #4283).
*   **Cloud Provider Routing Complexity**: Setting up niche cloud models (like Anthropic via Google Vertex) is error-prone due to hardcoded namespace assumptions, resulting in 404s and breaking multi-cloud agent workflows (#39069).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the technical digest for the Pi community on July 28, 2026.

### 1. Today's Highlights
Pi saw a massive wave of community debugging and enhancements over the last 24 hours, heavily focused on improving LLM provider compatibility (Z.AI, Bedrock, Anthropic) and hardening extension architecture. Key efforts include preventing tokenizer crashes from multimodal markers, properly routing AWS credentials, and adding deeper programmatic control for extension developers. 

### 2. Releases
*No new releases were deployed in the last 24 hours.*

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **Ephemeral Model/Thinking Changes** ([#5263](https://github.com/earendil-works/pi/issues/5263)): A highly upvoted request (+10) to make in-session model and thinking-level changes ephemeral by default, preventing them from permanently altering global configurations. 
*   **Anthropic Session Affinity** ([#7161](https://github.com/earendil-works/pi/issues/7161)): Developers noted that the `anthropic-messages` route skips sending the `x-client-request-id` header. This breaks session grouping for custom proxy gateways trying to manage account routing.
*   **System Prompt Bash Bias** ([#7128](https://github.com/earendil-works/pi/issues/7128)): A recent addition to the default system prompt encourages the agent to inspect `PI_*` environment variables, which is inadvertently causing the AI to run unnecessary bash commands.
*   **Z.AI `max_tokens` Mismatch** ([#7143](https://github.com/earendil-works/pi/issues/7143)): Pi is sending `max_completion_tokens` to Z.AI providers, which only accept `max_tokens`, causing outputs to fall back to defaults and truncate mid-reasoning.
*   **API for Agent Markdown Mutation** ([#6747](https://github.com/earendil-works/pi/issues/6747)): An ongoing request for an extension API that allows rendering custom markdown (like math formulas) in the UI without actually mutating the raw text sent to the LLM.
*   **Bedrock `credential_process` Support** ([#7170](https://github.com/earendil-works/pi/issues/7170)): AWS Bedrock users are unable to authenticate when using external credential processes via `~/.aws/credentials`.
*   **MiniMax-M3 Reasoning Breakage** ([#7140](https://github.com/earendil-works/pi/issues/7140)): Users of MiniMax-M3 report that `<think>` tags break after context compaction, requesting support for a `reasoning_split` parameter to fix rendering.
*   **`pre_response` Extension Gate** ([#7137](https://github.com/earendil-works/pi/issues/7137)): A request for an extension hook that intercepts assistant draft messages before emission, allowing extensions to block, redact, or require revisions—mirroring existing `tool_call` gates.
*   **TUI Performance in Remote Sandboxes** ([#7194](https://github.com/earendil-works/pi/issues/7194)): Developers using Pi over websocket PTY streams are experiencing heavy lag due to the UI doing a full re-render every 1 second when a tool card scrolls out of the viewport.
*   **Git Extension Installation Poisoning** ([#7189](https://github.com/earendil-works/pi/issues/7189)): Failed `pi install git` commands leave behind a dirty directory state that blocks all future installation attempts.

### 4. Key PR Progress
Here are the top 10 PRs actively shaping the codebase:

*   **PR #7174:** Fixes the Z.AI provider token mismatch by correctly sending `max_tokens` instead of `max_completion_tokens`.
*   **PR #7172:** Adds the missing `x-client-request-id` to the Anthropic API path, fixing proxy session affinity issues.
*   **PR #7176:** Resolves an AWS Bedrock bug where ambient AWS keys were overriding the explicitly configured Pi Bedrock profile.
*   **PR #7081:** Adds support for Claude Opus 5 on Bedrock, correctly configuring the model to use adaptive thinking.
*   **PR #7163:** Introduces a high-performance SQLite FTS5 search index for the `SessionRepo`, optimizing local session history searches.
*   **PR #7184 / #7181:** Prevents multimodal tokenizer crashes by scrubbing stray media markers (`|image|`) from tool outputs when no image data is attached.
*   **PR #7191:** Exposes `ctx.scopedModels` to extensions, giving companion apps programmatic access to the session's active model list.
*   **PR #7169:** Improves `AGENTS.md` and `CLAUDE.md` context loading by deduplicating byte-identical files discovered during the cwd-to-root walk.
*   **PR #6881:** Improves cost tracking by preferring provider-reported costs (e.g., upstream BYOK costs from Vercel AI Gateway) over Pi's internal catalog rates.
*   **PR #7176:** Adds an isolated regression test for `autocompleteMaxVisible` persistence to prevent settings from resetting upon restart.

### 5. Feature Request Trends
*   **Advanced Extension Hooks:** The developer community is pushing for richer programmatic control inside Pi. Requests for `pre_response` interceptors (#7137), read-only scoped model contexts (#7192), and UI markdown overrides (#6747) indicate a strong desire to build complex, reactive companion tools on top of Pi.
*   **State & Compaction Management:** As context windows grow, users want tighter control over how state is preserved and compressed. This includes requests for durable external compaction strategies (#7127) and better handling of reasoning tags during compaction (#7140).
*   **Stricter Environment Isolation:** There is a recurring theme around making sessions safer and more predictable. Users want in-session changes to be ephemeral by default (#5263) and need preflight auth checks to validate provider configurations without mutating Pi's state (#7152).

### 6. Developer Pain Points
*   **Cross-Provider API Drift:** A major frustration is the assumption that OpenAI-compatible APIs behave identically. Developers are hitting silent failures because providers like Z.AI silently ignore OpenAI-specific parameters like `max_completion_tokens` (#7143).
*   **TUI Jank and Instability:** Keyboard mapping issues, such as Shift+Enter submitting instead of creating a newline on Windows (#7175), and full UI re-renders breaking remote sessions (#7194) remain persistent frustrations for terminal users.
*   **Package Management Fragility:** The extension ecosystem shows signs of brittleness. Minor schema validation typos in third-party packages cause silent, unrecoverable core crashes (#7187), and failed Git installs leave cached artifacts that block future attempts (#7189).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-07-28.

### 1. Today's Highlights
Qwen Code rolled out the `v0.21.0-nightly` build alongside two non-production benchmark POCs targeting SWE-bench Verified. Community activity in the last 24 hours was heavily dominated by a batch of critical security patches for the Qwen Desktop's Electron IPC and MCP proxy, as well as significant core stability improvements addressing long-context streaming drops and silent API quota retries. Meanwhile, the Web Shell received massive enhancements, including native voice support, folder pickers, and a complete Git branching UI.

### 2. Releases
*   **[v0.21.0-nightly.20260727.c003e1718](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.0-nightly.20260727.c003e1718)**: Introduced a fix for local time measurement in CLI insights and various autofix refactors.
*   **dsw-manual-poc-20260727-2 / dsw-manual-poc-20260727-1**: Non-production benchmark prereleases evaluating performance against `swe-bench/swe-bench-verified@2`. Note: Benchmark status is currently **QUARANTINED** (500/500 completed, 376 resolved).

### 3. Hot Issues
*   **[#7768] & [#7769] Security: Desktop IPC bridge & MCP denial bypass** (CLOSED): A major security concern was raised where the Electron main process executed MCP tools without authorization checks. Furthermore, denied tools could be bypassed if the AI initiated a new SSE session. *Why it matters:* Critical vulnerability in agentic execution flows requiring immediate hardening.
*   **[#7832] YOLO mode socket close on large generation** (OPEN): Headless YOLO mode (`-p`) fails during large code generation (500+ lines) due to DashScope gateway closing TCP connections. *Why it matters:* Blocks developers from autonomously generating full application files.
*   **[#7831] ECONNRESET on contexts > 150k tokens** (OPEN): API calls repeatedly fail with `ECONNRESET` when conversation context exceeds ~150k tokens. *Why it matters:* Indicates underlying networking or gateway timeouts degrading long-context coding sessions.
*   **[#7841] Silent retries on exhausted API quota (429)** (OPEN): Permanent quota-exhaustion errors are treated as transient rate limits, causing qwen-code to retry silently without notifying the user. *Why it matters:* Breaks automation pipelines by wasting time on unrecoverable states.
*   **[#7835] Sub-agents deadlocking on user questions** (OPEN): Sub-agents can ask questions, but the main agent fails to collect them or forward them to the user, causing infinite hangs. *Why it matters:* Major architectural blocker for multi-agent orchestration.
*   **[#7770] Code interpreter sandbox escape risk** (OPEN): The Linux code interpreter sandbox can write to the host machine if the MCP proxy is internet-exposed. *Why it matters:* High-risk security flaw for local developer environments.
*   **[#6762] Skill Context Lifecycle Management** (OPEN): Feature request to manage `SKILL.md` bodies in memory, which currently live in context forever. *Why it matters:* Highly requested performance optimization to prevent context bloat.
*   **[#7828] Stale Git branch in footer** (OPEN): The UI footer fails to update the branch name after a switch occurs. *Why it matters:* Minor but high-frequency visual friction for Git users.
*   **[#7779] Kitty keyboard protocol teardown bug** (OPEN): VP teardown leaves Kitty keyboard flags enabled on the main screen, causing terminal UI glitches. *Why it matters:* Degrades the terminal experience for advanced CLI users.
*   **[#7697] Unity MCP integration failure in VSCode** (CLOSED): VS Code extension fails to connect to Unity MCP, whereas competitors like Claude Code succeed. *Why it matters:* Highlights compatibility gaps in the current VSCode IDE companion extension.

### 4. Key PR Progress
*   **[PR #7842] Fast-fail permanent 429s**: Addressing issue #7841, this PR implements immediate failure with a friendly message when the API returns a permanently exhausted quota, saving retry budgets.
*   **[PR #7484] Bridge tool-result images for text-only models**: Ingenious routing layer allowing text-only primary models to ingest images discovered during tool execution, including screenshots and structured errors.
*   **[PR #7731] Web Shell Git UI suite**: Adds an IntelliJ-style branch picker popover, commit dialog, and native "Create PR" flow directly inside the Web Shell environment.
*   **[PR #7859] & [PR #7839] Native Live Voice for Web Shell**: Introduces macOS "press Command twice" voice interactions, alongside web-shell specific hold/tap microphone capture modes.
*   **[PR #7809] Image zoom tool**: Implements a deferred, read-only `zoom_image` capability, allowing models to crop and magnify specific regions of static images for better visual grounding.
*   **[PR #7827] Safe-mode MCP preservation**: Fixes a critical bug where `--safe-mode` aggressively dropped caller-supplied MCP servers, ensuring explicit CLI arguments are respected.
*   **[PR #7826] Smart GitHub notification dispatch**: Routes GitHub webhook events by reason (mentions, assignments, reviews), optimizing agent context by filtering out irrelevant comments.
*   **[PR #7855] Fix `--effort` threading**: Resolves a silent failure where `--effort low/medium` flags were ignored, forcing the full agent roster to spin up anyway.
*   **[PR #7849] Native workspace folder picker**: Adds a native OS file picker to the Web Shell's Add Workspace dialog, significantly improving local filesystem onboarding.
*   **[PR #7810] Isolate Web Shell session drafts**: Scopes prompt history and unsent drafts to the active workspace, preventing cross-workspace context bleeding.

### 5. Feature Request Trends
*   **Context Window & Memory Optimization**: Strong demand for lifecycle management of skills/tools (Issue #6762) to prevent context bloat, especially as developers push past 150k token limits.
*   **Robust Multi-Agent Communication**: Developers want reliable handoffs between the main agent and sub-agents (Issue #7835), specifically requesting standardization on how sub-agents request and receive user input.
*   **Enhanced Channel & Tool Routing**: Several requests to make agent triggers smarter, such as dispatching GitHub webhooks contextually (Issue #7807) and pushing generated images directly via DingTalk (Issue #7687).

### 6. Developer Pain Points
*   **Streaming & Long-Context Instability:** Generating large files or sustaining long conversations frequently results in socket closures (`UND_ERR_SOCKET`) and `ECONNRESET` errors, disrupting complex coding workflows.
*   **Silent Failures in Automation:** Headless and automated pipelines are suffering from "silent" issues—such as infinite sub-agent hangs, silent quota retries (429s), and `--effort` flags being ignored—making debugging difficult.
*   **Security Configuration in Desktop App:** The Electron-based Desktop app is currently a significant source of anxiety, suffering from insecure `webPreferences`, exposed IPC bridges, and MCP denial bypasses.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the community digest for the DeepSeek-TUI project based on the July 28, 2026 data snapshot.

### 1. Today's Highlights
The DeepSeek-TUI project is currently in a heavy consolidation phase, finalizing its **v0.9.2 release candidate**. The past 24 hours saw a massive merge of prepared "harvest" PRs addressing everything from multi-provider billing and routing control planes to UI accessibility and TTY/PTY reliability. Key focuses include ensuring seamless Kimi-K3 and OpenCode Zen integrations, alongside crucial fixes for terminal block behaviors over SSH.

### 2. Releases
*No new official releases were published in the last 24 hours. The project remains focused on integrating and testing the v0.9.2 release candidate.*

### 3. Hot Issues
*(Note: 4 total issues updated in the window)*
*   **[#4930] [bug] Enter during foreground shell should detach it before steering** ([URL](https://github.com/Hmbown/CodeWhale/issues/4930))
    *   **Why it matters:** When a Bash command blocks the agent (e.g., `cargo build`), users instinctively hit Enter to type a new prompt, which currently causes a confusing UI failure. This impacts core workflow fluidity for long-running agentic tasks.
*   **[#4925] [enhancement] Add `thinking_default_expanded` setting** ([URL](https://github.com/Hmbown/CodeWhale/issues/4925))
    *   **Why it matters:** Reasoning blocks currently collapse by default, forcing users to press Space to expand them. This is a major pain point for SSH/tmux users where the terminal layer often captures the Space key.
*   **[#4907] [bug, reliability] ci(web): main push always fails** ([URL](https://github.com/Hmbown/CodeWhale/issues/4907))
    *   **Why it matters:** A deterministic CI failure on `main` where the Web Frontend deploy trigger contradicts manual-only preflight checks. Maintainers are actively addressing CI/CD stability for the v0.9.2 release.
*   **[#4751] Settings IA rework: Fleet/Models section boundaries** ([URL](https://github.com/Hmbown/CodeWhale/issues/4751))
    *   **Why it matters:** Drives a cleanup of the TUI's Information Architecture, specifically removing legacy fallback models from the UI and properly categorizing Goal-command and Workflow toggles out of the Fleet section.

### 4. Key PR Progress
*   **[#4928] feat(tui): add `thinking_default_expanded` setting** ([URL](https://github.com/Hmbown/CodeWhale/pull/4928)) - *Closed/Merged*. Directly resolves the SSH/tmux spacebar capture bug by allowing reasoning blocks to render expanded by default.
*   **[#4931] Migrate QA PTY test harness from vt100 to rio-vt** ([URL](https://github.com/Hmbown/CodeWhale/pull/4931)) - *Open*. A major infrastructure upgrade swapping the QA terminal parser to Rio's terminal engine (`rio-vt`) for more accurate visible rendering assertions.
*   **[#4929] fix(acp): preserve numeric JSON-RPC IDs** ([URL](https://github.com/Hmbown/CodeWhale/pull/4929)) - *Open*. Fixes a compatibility clash where numeric IDs were coerced to strings for Zed, breaking `avante.nvim`'s Lua table key callbacks. 
*   **[#4911] v0.9.2 release candidate integration (umbrella)** ([URL](https://github.com/Hmbown/CodeWhale/pull/4911)) - *Closed*. The massive 82-commit umbrella PR used to run hosted CI and code review on the combined v0.9.2 candidate branch.
*   **[#4920] fix: kimi-k3 selection** ([URL](https://github.com/Hmbown/CodeWhale/pull/4920)) - *Closed*. Resolves a critical routing defect where session memory unconditionally outranked the explicit `--model` flag, causing `kimi-k3` requests to wrongly execute on `kimi-k2.7-code`.
*   **[#4917] fix(routing): scope Auto model routing to active provider** ([URL](https://github.com/Hmbown/CodeWhale/pull/4917)) - *Closed*. Closes a security/architecture gap where the `Auto` turn could silently route traffic to a provider the user did not explicitly select.
*   **[#4919] feat: lane control-plane contract, nonblocking /lane interrupt** ([URL](https://github.com/Hmbown/CodeWhale/pull/4919)) - *Closed*. Introduces a 3,250-line control-plane contract to establish CLI/TUI fleet parity with TOCTOU-safe mutations and bounded sanitized receipts.
*   **[#4467] Feat/opencode zen provider** ([URL](https://github.com/Hmbown/CodeWhale/pull/4467)) - *Closed*. Adds OpenCode Zen as a fully model-aware provider, correctly routing Zen models across Responses, Anthropic Messages, and Chat Completions.
*   **[#4927] fix(billing): dispatch-receipt classification** ([URL](https://github.com/Hmbown/CodeWhale/pull/4927)) - *Closed*. Ensures finished turns are billed strictly from dispatch receipts, preventing mid-turn provider switches from rebilling or corrupting cost tracking.
*   **[#4908] I18n(zh-Hans): update simplified-Chinese translations** ([URL](https://github.com/Hmbown/CodeWhale/pull/4908)) - *Closed*. A massive translation quality improvement pass covering all 1,134 language keys based on an adversarial review.

### 5. Feature Request Trends
Based on the issue tracker and PR payloads, the community and maintainers are pushing heavily on:
*   **Robust Terminal/SSH Handling:** Users want configurations that bypass terminal-layer quirks (like tmux capturing the Spacebar) and better foreground process management (e.g., auto-detaching shells when new prompts are entered).
*   **Strict Multi-Provider Parity:** There is zero tolerance for "lying resolves" (requesting one model but getting another). The community demands strict flag-overrides-memory hierarchies and scoped `Auto` routing that never leaves the active provider without explicit permission.
*   **Granular UI/UX Control:** Requests lean towards deep customization of the interface, such as theme contrast adjustments, persistent session rails, and exact "Fleet" configurations for deterministic model routing. 

### 6. Developer Pain Points
*   **Terminal Capture Intercepts:** Developing and using TUIs over SSH/tmux remains a high-frequency frustration, with standard keybindings (like Space) failing silently and breaking core features like reasoning-block expansion.
*   **Blocking Foreground Execution:** The agent's inability to gracefully accept new steering commands (via Enter) while a foreground bash command is running causes UX friction.
*   **Provider/Model Routing Reliability:** Session memory previously overriding explicit CLI flags (`--model`, `--provider`) has been a massive source of friction, particularly when testing new models like Kimi-K3. 
*   **Flaky Web CI:** Maintainers are actively battling the `web.yml` GitHub Action, which is currently failing on push events due to misconfigured Cloudflare deploy triggers.

</details>