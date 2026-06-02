# AI CLI Tools Community Digest 2026-06-03

> Generated: 2026-06-02 22:38 UTC | Tools covered: 9

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

Here is the cross-tool comparison report analyzing the state of the AI CLI ecosystem based on the community digests from June 3, 2026.

### 1. Ecosystem Overview
The AI CLI tooling landscape is transitioning rapidly from simple terminal-based chat interfaces into sophisticated, autonomous coding agents. Today's digests reveal an industry heavily focused on navigating the growing pains of multi-agent orchestration, secure tool integrations (MCP), and the harsh realities of cross-platform support—particularly on Windows. Providers are aggressively competing to integrate frontier models (like Gemini 3.5 Flash, MiniMax-M3, and DeepSeek V4) while simultaneously battling fundamental reliability issues like memory leaks, runaway token consumption, and context window compaction failures.

### 2. Activity Comparison

| Tool | Hot Issues Tracked | PRs Updated | Release Status | Primary Focus |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 6 | **v2.1.160 & v2.1.161** | Security hardening, multi-agent duplication, model regressions. |
| **OpenAI Codex** | 10 | 10 | **None** | Desktop security defaults, OAuth outages, context compaction failures. |
| **Gemini CLI** | 10 | 10 | **v0.45.0-nightly** | SSRF security patch, UI performance (virtual lists), Gemini 3.5 Flash. |
| **GitHub Copilot CLI**| 10 | 0 | **v1.0.58 & v1.0.59** | Voice input, enterprise model parity, terminal rendering regressions. |
| **OpenCode** | 10 | 10 | **None** | Memory leak triage, massive legacy codebase cleanup, pricing friction. |
| **Pi** | 10 | 10 | **None** | Rapid frontier model integration, workspace security approvals, CJK rendering. |
| **Qwen Code** | 10 | 10 | **v0.17.0-nightly** | Daemon stability, memory management (OOM fixes), MCP approval gating. |
| **Kimi Code CLI** | 2 | 0 | **None** | UI text wrapping, third-party API whitelisting. |
| **DeepSeek TUI (CodeWhale)** | 10 | 10 | **v0.8.50** | Project rebranding to CodeWhale, UI freezes, provider fallback routing. |

### 3. Shared Feature Directions

*   **MCP Security & Trust Boundaries:** As Model Context Protocol (MCP) adoption surges, tools are rushing to prevent malicious code execution. **Claude Code** (v2.1.160) added confirmation prompts for startup files; **Qwen Code** (PR #4713) introduced project-scoped `.mcp.json` approval gating; and **Gemini CLI** patched a critical SSRF vulnerability in OAuth discovery.
*   **Memory Management & Compaction:** Handling large context windows is a universal pain point. **OpenAI Codex** users report catastrophic memory loss during compaction, **Qwen Code** is refactoring history deep clones to solve OOM crashes on exit, and **OpenCode** maintainers are actively requesting heap snapshots from users to solve notorious memory leaks.
*   **Multi-Agent / Sub-Agent Lifecycle Management:** The industry is moving toward "agent orchestrators." **Claude Code** users are fighting duplicate worker instances (10-151 spawned at once), while **Gemini CLI** and **DeepSeek TUI (CodeWhale)** are both implementing lifecycle hooks (`subagent_spawn`, `subagent_complete`) to monitor and stabilize sub-agent networks.
*   **Terminal UI (TUI) Performance:** As context windows grow, terminals struggle to render the output. **Gemini CLI** shipped a major "virtual list" optimization, **Pi** merged a fix to cache line resets for long transcripts, and **Qwen Code** is battling infinite scrolling flickering bugs.
*   **Cross-Platform / Windows Parity:** Windows users are facing severe friction across the board. **OpenAI Codex** reports blank white screens and broken OAuth loops; **GitHub Copilot CLI** has clipboard and PowerShell ENOENT failures; and **DeepSeek TUI** reports path fragmentation on Windows/Cygwin setups.

### 4. Differentiation Analysis

*   **Enterprise vs. Individual Targeting:** **OpenAI Codex** and **GitHub Copilot CLI** are heavily focused on enterprise desktop environments, evident by their struggles with OAuth, VPNs, and MFA (SMS/FIDO2). Conversely, tools like **Pi**, **Qwen Code**, and **DeepSeek TUI** cater to power users and tinkerers, focusing on "BYOM" (Bring Your Own Model), local inference support (via `llama.cpp`), and highly configurable timeout settings.
*   **Orchestration vs. Interoperability:** **Claude Code** is pushing the boundaries of autonomous orchestration (tiered Opus planners + Sonnet workers), though it is experiencing bugs associated with this complexity. **Pi** and **DeepSeek TUI**, on the other hand, differentiate by focusing heavily on vendor-agnostic interoperability, rapidly integrating diverse providers (MiniMax, Arcee AI, Anthropic-Vertex) and creating provider fallback chains.
*   **Codebase Architecture:** **OpenCode** stands out for its aggressive technical debt reduction, with core maintainers replacing legacy JSON-to-SQLite migrations and consolidating filesystem services, suggesting a maturing platform preparing for long-term stability. 

### 5. Community Momentum & Maturity

*   **High Momentum / Rapid Iteration:** **Gemini CLI**, **Qwen Code**, **Pi**, and **DeepSeek TUI (CodeWhale)** show incredible velocity. They are merging double-digit PRs daily, patching critical bugs within hours, and adapting to newly released frontier models (like MiniMax-M3) almost instantly. 
*   **Mature / High Tension:** **Claude Code** and **OpenAI Codex** have massive, highly engaged communities but are currently bogged down by complex, high-impact regressions (e.g., Claude's phantom-user-turn injection, Codex's broken phone verification). **GitHub Copilot CLI** is iterating on novel features (Voice STT) but suffers from an apparent lack of PR responsiveness and widespread model parity complaints.
*   **Early Stage / Dormant:** **Kimi Code CLI** is experiencing a quiet period, focusing only on fundamental TUI rendering bugs and API whitelisting, indicating a smaller or less engaged open-source community compared to its peers.

### 6. Trend Signals

*   **Context Compaction is an Unsolved Problem:** Across Codex, Qwen, and OpenCode, the transition of LLMs from "chat assistants" to "long-running agents" is breaking down. When context windows fill up, tools are failing—either by crashing the UI, OOM errors, or catastrophic forgetting where the agent loses its core system instructions. Robust context management is the primary technical bottleneck for autonomous coding right now.
*   **Token Cost Anxiety is Rising:** Developers are becoming hyper-aware of token economics. OpenCode users are in open revolt over subscription pricing not reflecting DeepSeek's 75% API price cuts, Claude Code users are frustrated by model regressions that emit literal text (wasting tokens), and OpenCode users are reporting runaway `rg` processes silently burning credits. Cost visibility is no longer optional; it is a core feature requirement.
*   **Security Overhaul for Agentic Workflows:** The initial hype of giving AI unrestricted access to local machines is facing a harsh reality check. The immediate integration of SSRF protections, shell-startup confirmation prompts, and project-level MCP approval gates indicates that the ecosystem is shifting rapidly toward a "Zero Trust" model for AI agents.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-06-03 | Source: [anthropics/skills](https://github.com/anthropics/skills)*

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill / PR | Author | Functionality & Highlights | Status |
| :--- | :--- | :--- | :--- | :--- |
| **1** | [**Add document-typography skill** (#514)](https://github.com/anthropics/skills/pull/514) | PGTBoos | Prevents typographic errors in AI-generated documents (orphan words, widow paragraphs, numbering misalignment). Addresses a universal pain point for document generation. | Open |
| **2** | [**Add ODT skill** (#486)](https://github.com/anthropics/skills/pull/486) | GitHubNewbie0 | OpenDocument Format creation, template filling, and ODT-to-HTML conversion. Highly requested for enterprise users avoiding proprietary formats. | Open |
| **3** | [**Improve frontend-design skill** (#210)](https://github.com/anthropics/skills/pull/210) | justinwetch | Revises the existing frontend-design skill for better clarity and actionability. Ensures instructions are executable within a single conversation turn. | Open |
| **4** | [**Add skill-quality-analyzer & skill-security-analyzer** (#83)](https://github.com/anthropics/skills/pull/83) | eovidiu | Two "meta-skills": one for comprehensive 5-dimension quality analysis of Skills, another for security auditing. Aims to professionalize Skill development. | Open |
| **5** | [**Fix PDF case-sensitive file references** (#538)](https://github.com/anthropics/skills/pull/538) | Lubrsy706 | Critical bug fix for the PDF skill where case mismatches in file paths break functionality on Linux/case-sensitive systems. | Open |
| **6** | [**Fix DOCX tracked change ID collision** (#541)](https://github.com/anthropics/skills/pull/541) | Lubrsy706 | Fixes document corruption in the DOCX skill caused by hardcoded XML IDs colliding with existing bookmarks. | Open |
| **7** | [**Implement agent-creator skill** (#1140)](https://github.com/anthropics/skills/pull/1140) | SyedaQurratAI | Adds a meta-skill for creating task-specific agent sets, plus fixes for multi-tool evaluation and Windows compatibility. | Open |
| **8** | [**Add ServiceNow platform skill** (#568)](https://github.com/anthropics/skills/pull/568) | Vanka07 | Broad enterprise ServiceNow assistant covering ITSM, SecOps, ITAM, FSM, CSDM, and IntegrationHub. Reflects growing enterprise adoption. | Open |

## 2. Community Demand Trends (Derived from Issues)

Based on the most active discussions in the Issues tracker, the community is heavily prioritizing the following directions:

*   🔒 **Security & Trust Models:** The debate over namespace impersonation ([Issue #492](https://github.com/anthropics/skills/issues/492) - Community skills under `anthropic/` namespace) highlights a urgent need for a standardized trust boundary and security audit system for third-party Skills.
*   🏢 **Enterprise & Collaboration Features:** Org-wide skill sharing ([Issue #228](https://github.com/anthropics/skills/issues/228)) is highly requested. Teams want centralized skill libraries rather than manual file sharing via Slack/Teams.
*   ⚙️ **Core CLI & Evaluator Stability:** A significant cluster of issues relates to broken workflows with `run_eval.py` ([Issue #556](https://github.com/anthropics/skills/issues/556)) and cross-platform (Windows) compatibility. Reliable local tooling is a prerequisite for advanced skill development.
*   🔌 **MCP & Context Window Optimization:** Exposing Skills as Model Context Protocol servers ([Issue #16](https://github.com/anthropics/skills/issues/16)) and solving data bloat ([Issue #1102](https://github.com/anthropics/skills/issues/1102)) are trending as developers push the limits of context windows.
*   🧩 **Plugin Architecture Fixes:** Users are experiencing duplicate skills and incorrect plugin loading ([Issue #189](https://github.com/anthropics/skills/issues/189), [Issue #1087](https://github.com/anthropics/skills/issues/1087)), indicating demand for a more robust plugin/dependency management system.

## 3. High-Potential Pending Skills

These active PRs address high-demand gaps and are strong candidates for merging in upcoming release cycles:

*   **[AppDeploy Skill (#360)](https://github.com/anthropics/skills/pull/360):** Enables Claude to directly deploy and manage full-stack web apps to public URLs. Closes the loop from code generation to deployment.
*   **[Testing-Patterns Skill (#723)](https://github.com/anthropics/skills/pull/723):** A comprehensive testing philosophy and implementation guide (Trophy model, React testing, etc.) that acts as a force-multiplier for coding tasks.
*   **[Sensory / macOS AppleScript Skill (#806)](https://github.com/anthropics/skills/pull/806):** Replaces screenshot-based computer use with native `osascript` automation, promising much faster and more reliable OS-level agent control.
*   **[Shodh-Memory Skill (#154)](https://github.com/anthropics/skills/pull/154):** Introduces a persistent context system for AI agents across conversations, tackling the critical limitation of stateless interactions.
*   **[SAP-RPT-1-OSS Skill (#181)](https://github.com/anthropics/skills/pull/181):** Integrates SAP's open-source tabular foundation model for predictive analytics, signaling strong enterprise expansion.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is shifting from *generating individual Skills* toward establishing **robust ecosystem infrastructure—specifically enterprise sharing capabilities, standardized security trust boundaries, and reliable local evaluation tooling.**

---

# Claude Code Community Digest — 2026-06-03

## 1. Today's Highlights

Claude Code shipped two back-to-back releases (**v2.1.160** and **v2.1.161**) that tighten safety guardrails around shell startup files and add custom-dimension slicing for OpenTelemetry metrics. Community attention was dominated by a worrying **phantom-user-turn prompt-injection report** on Windows and persistent **tool-calls-emitted-as-literal-text** model behavior regressions, while multiple users flagged new **1M-context paywall errors** disrupting existing subscriptions.

---

## 2. Releases

### v2.1.161
- **OTEL custom dimensions:** `OTEL_RESOURCE_ATTRIBUTES` values are now attached as labels on metric datapoints, enabling slicing by team, repo, or any custom dimension in your observability pipeline.
- **Agent progress UX:** `claude agents` rows now display `done/total` before detail when work is fanned out; the peek view surfaces the longest-running item.

### v2.1.160
- **Shell-startup safety:** A confirmation prompt is now required before writing to shell startup files (`.zshenv`, `.zlogin`, `.bash_login`) and `~/.config/git/`, preventing unintended command execution.
- **acceptEdits hardening:** `acceptEdits` mode now prompts before writing build-tool config files that grant code execution (e.g., `.npmrc`).

---

## 3. Hot Issues

| # | Issue | Why it matters |
|---|-------|----------------|
| 1 | [#8327](https://github.com/anthropics/claude-code/issues/8327) — *"'Organization has been disabled' error when ANTHROPIC_API_KEY overrides Max/Pro subscription"* (116 comments, 15 👍) | Affects paid subscribers who also use direct API keys; the key override logic breaks their org, locking them out. Still open since Sep 2025. |
| 2 | [#49268](https://github.com/anthropics/claude-code/issues/49268) — *"Thinking summaries missing on Opus 4.7"* (41 comments, 68 👍) | The harness doesn't set `display: "summarized"` for Opus 4.7, silently dropping extended-thinking summaries. High 👍 count shows broad impact. |
| 3 | [#53915](https://github.com/anthropics/claude-code/issues/53915) — *"API Error: Server is temporarily limiting requests"* (33 comments) | Server-side rate limiting confused with personal usage limits; users on multiple platforms (Windows, VS Code) are blocked unpredictably. |
| 4 | [#29214](https://github.com/anthropics/claude-code/issues/29214) — *"Remote Control: mobile app shows permission prompts despite --dangerously-skip-permissions"* (28 comments, 71 👍) | The `--dangerously-skip-permissions` flag doesn't propagate to the mobile Remote Control interface, making autonomous workflows impossible. |
| 5 | [#64698](https://github.com/anthropics/claude-code/issues/64698) — *"Phantom user turn carried a context-aware prompt-injection / data-exfiltration payload"* (7 comments) | User-role turns that were never typed appeared in the transcript, one carrying an injection payload. A serious security concern on Windows/CLI 2.1.160/Opus 4.8. |
| 6 | [#63870](https://github.com/anthropics/claude-code/issues/63870) — *"Bash tool calls emitted as raw `<invoke>` text instead of executing"* (4 comments, 8 👍) | Part of a growing cluster of model regression reports where tool calls are emitted as literal text rather than executed. 23 malformed Bash calls logged in one session. |
| 7 | [#55586](https://github.com/anthropics/claude-code/issues/55586) — *"Agent Teams: single teammate spawn creates 10-151 duplicate worker instances"* (11 comments) | A single agent-team spawn can create over 100 duplicate workers, each consuming full context and actively editing files—a critical resource leak. |
| 8 | [#62736](https://github.com/anthropics/claude-code/issues/62736) — *"2.1.152 regression: arrow keys hijacked in prompt input"* (5 comments, 7 👍) | Arrow keys captured by a new subagent-management shortcut, making multi-line cursor movement impossible. A daily-workflow blocker. |
| 9 | [#16329](https://github.com/anthropics/claude-code/issues/16329) — *"Add support for AWS Bedrock service_tier parameter"* (9 comments, 39 👍) | Users want `flex`/`priority`/`reserved`/`default` service tiers for cost control on Bedrock; currently unsupported, forcing higher costs. |
| 10 | [#56913](https://github.com/anthropics/claude-code/issues/56913) — *"Make autonomous Claude Code viable: tiered Opus brains + Sonnet workers + persistent state"* (20 comments) | A vision post for using Claude Code as an always-on orchestration brain rather than a pair-programmer. Resonates with the multi-agent coordination challenges seen elsewhere. |

---

## 4. Key PR Progress

| # | PR | Summary |
|---|----|---------|
| 1 | [#64857](https://github.com/anthropics/claude-code/pull/64857) | Fixes symlink-following in `extensibility.py` for project-controlled GUI paths (closes #64582). |
| 2 | [#64728](https://github.com/anthropics/claude-code/pull/64728) | Removes stale `statsig.anthropic.com` from the devcontainer firewall allowlist; the hostname no longer resolves in public DNS, breaking out-of-the-box devcontainer startup. |
| 3 | [#62821](https://github.com/anthropics/claude-code/pull/62821) *(closed)* | Documents the env-bridge workaround pattern for plugin-MCP per-session identity (`CLAUDE_CODE_SESSION_ID`), addressing #61752. |
| 4 | [#64607](https://github.com/anthropics/claude-code/pull/64607) | Fixes plugin docs: `.mcp.json` examples incorrectly used an `mcpServers` wrapper (a `plugin.json` concept); corrected to flat format. |
| 5 | [#64603](https://github.com/anthropics/claude-code/pull/64603) *(closed)* | Low-quality README PR—closed without merge. |
| 6 | [#64602](https://github.com/anthropics/claude-code/pull/64602) *(closed)* | Low-quality directory-structure PR—closed without merge. |

> **Note:** Only 6 PRs were updated in the window. The project continues to receive community doc and infra fixes, but no major feature PRs landed today.

---

## 5. Feature Request Trends

1. **Autonomous / multi-agent orchestration** — Users want Claude Code to function as a long-running orchestrator with tiered models (Opus planner + Sonnet workers), persistent state, and reliable agent-team spawning ([#56913](https://github.com/anthropics/claude-code/issues/56913), [#54393](https://github.com/anthropics/claude-code/issues/54393)).
2. **Cloud provider cost controls** — Demand for AWS Bedrock `service_tier` support ([#16329](https://github.com/anthropics/claude-code/issues/16329)) and accurate per-user spend tracking via the statusline ([#64873](https://github.com/anthropics/claude-code/issues/64873)).
3. **Permission model completeness** — Requests to make `--dangerously-skip-permissions` propagate across all interfaces (mobile, Remote Control) ([#29214](https://github.com/anthropics/claude-code/issues/29214)) and to honor worktree boundaries globally ([#64865](https://github.com/anthropics/claude-code/issues/64865)).
4. **Reduced verbosity / token waste** — Calls to eliminate unnecessary verbal disclaimers that waste tokens and money ([#64840](https://github.com/anthropics/claude-code/issues/64840)).

---

## 6. Developer Pain Points

- **Model regression wave:** Multiple independent reports confirm Opus 4.7/4.8 intermittently emits tool calls as raw text instead of executing them, sometimes prefixed with stray tokens like `court` ([#63870](https://github.com/anthropics/claude-code/issues/63870), [#64108](https://github.com/anthropics/claude-code/issues/64108), [#64260](https://github.com/anthropics/claude-code/issues/64260)). This breaks autonomous workflows and wastes tokens.
- **1M-context paywall errors:** Users on Pro/Max plans are suddenly hit with "Usage credits required for 1M context" errors, blocking sessions ([#63060](https://github.com/anthropics/claude-code/issues/63060), [#63908](https://github.com/anthropics/claude-code/issues/63908), [#61012](https://github.com/anthropics/claude-code/issues/61012)). The billing/quota logic appears to conflict with subscription tiers.
- **Agent duplication bug:** Spawning a single agent teammate can create 10–151 duplicate workers, each consuming full context ([#55586](https://github.com/anthropics/claude-code/issues/55586)). This makes multi-agent workflows prohibitively expensive and unreliable.
- **Windows stability:** Bun runtime crashes on Windows due to an integer overflow in the allocator ([#64864](https://github.com/anthropics/claude-code/issues/64864)), and the phantom-user-turn injection issue appears Windows-specific ([#64698](https://github.com/anthropics/claude-code/issues/64698)).
- **TUI regressions:** Arrow-key capture by the new subagent-management shortcut broke multi-line editing ([#62736](https://github.com/anthropics/claude-code/issues/62736)), and toggling transcript view cancels pending permission confirmations ([#64860](https://github.com/anthropics/claude-code/issues/64860)).

---

*Digest generated from public GitHub data on 2026-06-03. Issues and PRs reflect activity within the last 24 hours.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-03

## 1. Today's Highlights
No new Codex versions were released today, but the engineering team was highly active, merging a focus on hardening desktop security, sandbox permissions, and telemetry. Authentication and phone verification bottlenecks continue to dominate community complaints, and Windows users are reporting significant platform-specific friction with OAuth callbacks and UI rendering.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues

1. **Phone number verification doesn't work ([#20161](https://github.com/openai/codex/issues/20161))**
   *Why it matters:* With 189 comments and 120 👍, this is the most active issue. SSO logins on new devices are forcing users into a broken phone verification loop, completely blocking access.
   *Community reaction:* Extreme frustration; users are locked out of their accounts across devices.

2. **Disable automatic conversion of long pasted prompts into .txt ([#25144](https://github.com/openai/codex/issues/25144))**
   *Why it matters:* A highly requested UX enhancement (52 👍) for the macOS app. The app currently destroys structured formatting in long prompts by auto-converting them to attachments.
   *Community reaction:* Strong consensus that this default behavior interrupts developer workflows.

3. **Windows OAuth "Open in Codex" triggers Electron error ([#25157](https://github.com/openai/codex/issues/25157))**
   *Why it matters:* Windows users on Pro/Enterprise tiers are completely failing to complete connector OAuth callbacks. 
   *Community reaction:* Users are confused by the raw Electron errors and are unable to connect third-party services.

4. **Inaccessible legacy phone number requirement blocks access ([#25749](https://github.com/openai/codex/issues/25749))**
   *Why it matters:* Users with fully authenticated Google OAuth and MFA are being forced to provide legacy phone numbers they no longer have access to.
   *Community reaction:* High alarm; users feel the recovery path is fundamentally broken for security-conscious accounts.

5. **Chrome Computer Use extension missing from Web Store ([#21700](https://github.com/openai/codex/issues/21700))**
   *Why it matters:* The core Computer Use feature for browser automation is unavailable because the required Chrome extension returns a 404/error.
   *Community reaction:* Users are asking for an offline installer or a quick fix to restore functionality.

6. **Windows UI renders as transparent/blank white ([#25236](https://github.com/openai/codex/issues/25236))**
   *Why it matters:* A critical rendering bug making the Windows desktop app entirely unusable for a subset of users.
   *Community reaction:* Pure dead-end frustration; the app loads nothing but a white screen.

7. **Context compaction fails and disconnects ([#22107](https://github.com/openai/codex/issues/22107))**
   *Why it matters:* Long-running local coding sessions are crashing during context window compaction due to stream disconnections.
   *Community reaction:* Concern over reliability during complex, multi-hour coding tasks.

8. **Stale connector links persist until manual cache clear ([#24675](https://github.com/openai/codex/issues/24675))**
   *Why it matters:* Re-authentication flows for tools like Linear fail silently because Codex Desktop caches stale `401` tokens.
   *Community reaction:* Users consider it a critical DX bug requiring terminal/cli knowledge to fix (manually deleting cache directories).

9. **Context compaction forgets AGENTS rules ([#25792](https://github.com/openai/codex/issues/25792))**
   *Why it matters:* A critical AI behavior bug. During compaction, the model forgets its system instructions, causing task progress to wildly regress (e.g., 97% back to 42%).
   *Community reaction:* Distrust in unattended, long-running agent tasks.

10. **Phone verification blocked by rate limits ([#25820](https://github.com/openai/codex/issues/25820))**
    *Why it matters:* Pro subscribers cannot even attempt phone verification due to aggressive, blanket rate limits on OTP delivery.
    *Community reaction:* High irritation; paying users are entirely blocked from CLI login.

## 4. Key PR Progress

1. **[#25926 config: default untrusted projects to read-only permissions](https://github.com/openai/codex/pull/25926)**
   *What it does:* Implements a major security default shift. Untrusted projects will now default to read-only permissions, requiring explicit user trust for full write/workspace access.
   
2. **[#25952 Wire native integrity state surfaces](https://github.com/openai/codex/pull/25952)**
   *What it does:* Stage 4 of a 4-PR stack wiring per-surface native integrity state into first-party ChatGPT requests, hardening local desktop auth state.

3. **[#25953 feat: add skills extension scaffold](https://github.com/openai/codex/pull/25953)**
   *What it does:* Lays the foundational boundary for an authority-aware extension system, setting the stage for Skills to be migrated out of `codex-core` injection paths.

4. **[#25955 Emit sandbox outcome in tool result telemetry](https://github.com/openai/codex/pull/25955)**
   *What it does:* Improves observability by adding `sandbox_outcome` to tool result events, allowing better tracking of edge-case sandbox failures.

5. **[#25638 feat(tui): add /app desktop handoff command](https://github.com/openai/codex/pull/25638)**
   *What it does:* Introduces a `/app` command in the CLI to seamlessly hand off and open the current terminal thread in the Codex Desktop app.

6. **[#25946 Report compaction request token counts](https://github.com/openai/codex/pull/25946)**
   *What it does:* Enhances context-compaction telemetry by reporting token counts before compaction, improving visibility into context-window usage.

7. **[#25949 Restore setup helper UAC manifest](https://github.com/openai/codex/pull/25949)**
   *What it does:* Fixes a Windows regression where removing resource stamping accidentally removed the `asInvoker` UAC manifest, which is crucial for correct execution levels.

8. **[#25785 feat(app-server): add remote control client management RPCs](https://github.com/openai/codex/pull/25785)**
   *What it does:* Adds the ability for remote-control clients to list and revoke controller-device grants cleanly without enrolling local relays.

9. **[#25954 Revert "Expose standalone image generation in code mode"](https://github.com/openai/codex/pull/25954)**
   *What it does:* Reverts a previous PR that exposed image generation in code mode, citing skipped Windows integration tests that couldn't be resolved.

10. **[#25829 Add product defaults for plugin sharing](https://github.com/openai/codex/pull/25829)**
    *What it does:* Shifts plugin sharing from an OpenAI feature flag to customer/admin-controlled configuration with plan-aware defaults built into the client.

## 5. Feature Request Trends
Based on recent issues, the community is heavily requesting:
* **Better Auth & Account Management:** Robust multi-account OAuth rotation ([#9648](https://github.com/openai/codex/issues/9648)), and decoupling Codex from mandatory SMS/Phone OTP for users already using FIDO2/Advanced Security ([#25737](https://github.com/openai/codex/issues/25737)).
* **CLI / Desktop Parity & Handoffs:** Deeper integration between the CLI and Desktop apps, including seamless session transfers.
* **Advanced MCP Support:** Bi-directional MCP communication, specifically support for inbound notifications routed into active CLI sessions ([#15299](https://github.com/openai/codex/issues/15299)).
* **Configurable UX Controls:** Greater control over prompt handling, specifically stopping the app from auto-converting pasted text into attachments.

## 6. Developer Pain Points
* **Authentication Friction:** The most severe pain point by far is account login/access. Phone verification loops, inaccessible legacy numbers, and broken OAuth callbacks on Windows are blocking developers from even launching the tool.
* **Context Compaction Reliability:** Developers are experiencing severe dread around context compaction. When the context window fills, the system fails either by disconnecting streams ([#22107](https://github.com/openai/codex/issues/22107)) or suffering catastrophic memory loss where the model forgets core instructions and regresses in its task ([#25792](https://github.com/openai/codex/issues/25792)).
* **Windows Platform Stability:** Windows users feel like second-class citizens right now, suffering from blank UIs, missing Chrome extensions for Computer Use, broken deep links, and inconsistent path prefixes (`\\?\`) crashing sessions.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-03

Here is the daily technical breakdown for the `google-gemini/gemini-cli` repository. 

## 1. Today's Highlights
Security took center stage today with a critical SSRF vulnerability patch in MCP OAuth discovery and the introduction of Gemini 3.5 Flash model support. Significant progress was also made on UI/UX performance with a major push to merge a highly optimized virtualized list for terminal rendering. Finally, tooling stability improvements are underway, highlighted by an atomic refresh mechanism for MCP tools to prevent network-related crashes.

## 2. Releases
*   **[v0.45.0-nightly.20260602](https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.0-nightly.20260602.g665228e98)**: 
    *   **Transition to flash GA model:** Modified the CLI to automatically transition to the Flash GA model when an experimental flag is present. *(Authored by @DavidAPierce in [PR #27570](https://github.com/google-gemini/gemini-cli/pull/27570))*

## 3. Hot Issues
1.  **[Security: SSRF via OAuth metadata URLs (#27635)](https://github.com/google-gemini/gemini-cli/issues/27635)**: A high-priority security report identified that `oauth-utils.ts` is vulnerable to Server-Side Request Forgery (SSRF). Malicious MCP servers could inject private-network IPs during OAuth discovery.
2.  **[Generalist agent hangs indefinitely (#21409)](https://github.com/google-gemini/gemini-cli/issues/21409)**: A critical P1 bug where the CLI completely freezes when deferring to the generalist agent. Users report hanging for up to an hour on simple tasks unless explicitly instructed to avoid sub-agents (👍 8).
3.  **[Subagent recovery masks interruption as success (#22323)](https://github.com/google-gemini/gemini-cli/issues/22323)**: A dangerous bug where the `codebase_investigator` agent reports `"status: success"` and `"GOAL"` upon hitting `MAX_TURNS`, hiding the fact that no actual analysis occurred.
4.  **[Gemini ignores custom skills and sub-agents (#21968)](https://github.com/google-gemini/gemini-cli/issues/21968)**: Despite defining granular custom skills (e.g., "gradle", "git"), users note that the model almost entirely refuses to invoke them autonomously.
5.  **[CLI hits 400 error with > 128 tools (#24246)](https://github.com/google-gemini/gemini-cli/issues/24246)**: As users stack extensions, the CLI fails with HTTP 400 errors when context tools exceed limits. Agents need better dynamic scope filtering.
6.  **[Shell command execution stuck on "Waiting input" (#25166)](https://github.com/google-gemini/gemini-cli/issues/25166)**: A frustrating UX bug where simple, completed shell commands remain stuck in an active/"awaiting user input" state (👍 3).
7.  **[AST-aware file reads and codebase mapping (#22745)](https://github.com/google-gemini/gemini-cli/issues/22745)**: Maintainers are tracking an investigation into AST-aware tools to reduce token noise and improve exact method bound lookups, potentially via `tilth` or `glyph`.
8.  **[Agent enforces destructive commands (#22672)](https://github.com/google-gemini/gemini-cli/issues/22672)**: Users request guardrails to stop the agent from dangerously using `git reset --force` or modifying databases when safer alternatives exist (👍 1).
9.  **[Auto Memory leaks and low-signal retries (#26522, #26523, #26525)](https://github.com/google-gemini/gemini-cli/issues/26522)**: A cluster of bugs reported by the community regarding the Auto Memory feature silently failing on invalid patches, endlessly retrying low-signal sessions, and lacking deterministic secret redaction.
10. **[Browser agent fails on Wayland (#21983)](https://github.com/google-gemini/gemini-cli/issues/21983)**: Linux users report persistent failures with the browser sub-agent on Wayland environments (👍 1).

## 4. Key PR Progress
1.  **[fix(core): block private OAuth metadata URLs (#27626)](https://github.com/google-gemini/gemini-cli/pull/27626)**: Directly addresses Issue #27635 by implementing SSRF protections to block private networks during MCP OAuth metadata discovery.
2.  **[feat: add support for Gemini 3.5 Flash model family (#27614)](https://github.com/google-gemini/gemini-cli/pull/27614)**: Expands model support to include `gemini-3.5-flash-preview` and `gemini-3.5-flash-lite-preview`.
3.  **[virtual list ship it (#27636) & optimize virtual list2 (#27070)](https://github.com/google-gemini/gemini-cli/pull/27636)**: Massive P1 UI refactoring. Introduces optimized virtualized lists and scrolling checkpoints to dramatically improve terminal rendering performance.
4.  **[fix(core): implement atomic update in MCP tool discovery (#27619)](https://github.com/google-gemini/gemini-cli/pull/27619)**: Solves the "tool not found" crash during network drops by implementing an atomic update pattern for MCP registries.
5.  **[fix(at-command): prevent stack overflow from regex backtracking (#27580)](https://github.com/google-gemini/gemini-cli/pull/27580)**: Replaces a vulnerable regex in the `@` command parser with an iterative scanner to prevent crashes when pasting large amounts of text.
6.  **[fix(cli): support WSL2 clipboard image paste (#27588)](https://github.com/google-gemini/gemini-cli/pull/27588)**: Resolves a major cross-platform pain point by leveraging PowerShell interop to natively support image pasting from Windows to WSL2 environments.
7.  **[fix(policy): add EBUSY fallback and TOML parse recovery (#21541)](https://github.com/google-gemini/gemini-cli/pull/21541)**: Improves filesystem resilience on Windows/busy systems by adding fallbacks for `EBUSY` errors and corrupted TOML configurations.
8.  **[fix(cli): disable auto-update for corporate release paths (#27639)](https://github.com/google-gemini/gemini-cli/pull/27639)**: Prevents the CLI from unnecessarily attempting auto-updates when executed from internal Google corporate bin paths.
9.  **[Add static eval source analyzer (#27631)](https://github.com/google-gemini/gemini-cli/pull/27631)**: Lays the groundwork for better eval dev tooling by introducing a TypeScript AST parser to extract metadata from eval helper calls.
10. **[Use consolidated MCP server lists in ACP/policy-engine (#27605)](https://github.com/google-gemini/gemini-cli/pull/27605)**: Fixes a bypass in MCP allow/block lists, ensuring workspace settings cannot override user/system-level blocklists.

## 5. Feature Request Trends
*   **AST-Aware Code Navigation**: Strong momentum towards deeply integrating AST tooling (like `tilth` or `ast-grep`) for smarter, token-efficient codebase mapping and file reading, rather than relying on standard text search.
*   **Backgroundable Local Agents**: Users want the ability to send local exploration or linting sub-agents to the background (e.g., via `Ctrl+B`), allowing them to continue working in the CLI.
*   **Improved Agent Self-Awareness**: Requests for the CLI to natively understand its own hotkeys, flags, and mechanics so it can guide users on how to run itself efficiently.
*   **Destructive Behavior Guardrails**: Native implementation of safety checks to prevent the model from executing forceful Git commands or destructive database modifications without explicit user confirmation.

## 6. Developer Pain Points
*   **Sub-agent Reliability**: Developers are highly frustrated by hanging generalist agents and silent failures. When agents hit maximum turn limits, they falsely report success, breaking automation workflows.
*   **Tool & Context Window Limits**: Adding custom MCPs easily pushes users over the 128-tool limit, resulting in API crashes, indicating a need for dynamic tool filtering.
*   **Shell Execution State Mismatches**: Frequent UI hangs where the CLI falsely believes a finished terminal command is still waiting for user input.
*   **Custom Skill Under-utilization**: Users spend time defining custom skills that the base model bypasses in favor of built-in behaviors, reducing the value of extensibility.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-03

## 1. Today's Highlights
GitHub Copilot CLI shipped **v1.0.59** yesterday, introducing a new `/voice` command that allows developers to dictate prompts using local speech-to-text models. This follows hot on the heels of **v1.0.58**, which enabled Rubber Duck mode and Remote JSON RPC by default, and added several experimental features like scheduled prompts (`/every`, `/after`), a new GitHub `/theme`, and an overhauled UI for accessing issues, PRs, and gists. The community is actively testing these new capabilities, with early feedback聚焦ed on VPN/networking limitations blocking the voice model catalog and mixed reactions to the new `/diff` experience.

## 2. Releases

### [v1.0.59](https://github.com/github/copilot-cli/releases) (2026-06-02)
- **New `/voice` command:** Dictate prompts via local speech-to-text models.

### [v1.0.58](https://github.com/github/copilot-cli/releases) (2026-06-02)
- **Rubber Duck mode** enabled by default.
- **Remote JSON RPC** enabled by default.
- **Experimental `/every` and `/after`:** Schedule prompts at intervals or with delays.
- **Experimental `/theme`:** New GitHub theming support.
- **Experimental UI overhaul:** Easy access to issues, pull requests, and gists.

> **Note:** Features under `/experimental` may change or be removed.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [**#1703** — Copilot CLI does not list all org-enabled models (e.g., Gemini 3.1 Pro)](https://github.com/github/copilot-cli/issues/1703) | 28 comments, 54 👍. A long-standing parity gap: org-enabled models visible in VS Code are missing from the CLI model picker, limiting enterprise adoption. |
| 2 | [**#2101** — Transient API errors leading to aggressive rate limiting](https://github.com/github/copilot-cli/issues/2101) | 26 comments, 17 👍. Users are hitting hard rate limits with unhelpful retry logic, severely impacting interactive workflows. |
| 3 | [**#2205** — Mouse scroll broken in Terminator terminal](https://github.com/github/copilot-cli/issues/2205) | 12 comments, 12 👍. A regression where scrolling navigates input history instead of agent output, breaking the UX for many Linux terminal users. |
| 4 | [**#2355** — Internal PowerShell tool fails to spawn pwsh.exe on Windows (ENOENT)](https://github.com/github/copilot-cli/issues/2355) | 6 comments. Even with PowerShell 7 correctly installed and on PATH, the CLI's internal runtime fails, blocking Windows-centric automation. |
| 5 | [**#3436** — `/mcp search` constructs wrong URL for custom MCP registries](https://github.com/github/copilot-cli/issues/3436) | 5 comments. Missing `/v0.1/` segment breaks self-hosted MCP registry integrations, a blocker for enterprise deployments. |
| 6 | [**#3636** — Voice mode fails behind corporate VPN (catalog unreachable)](https://github.com/github/copilot-cli/issues/3636) | Filed yesterday against the new `/voice` feature. The voice STT model catalog cannot be fetched in restricted network environments, limiting day-one adoption. |
| 7 | [**#3642** — CLI 1.0.58 does not auto-load project-level `.copilot/mcp-config.json`](https://github.com/github/copilot-cli/issues/3642) | 2 comments. Project-level MCP server configs are silently ignored; only the global `~/.copilot/` config is loaded, undermining per-project toolchain setups. |
| 8 | [**#3622** — Copy to clipboard silently fails on Windows](https://github.com/github/copilot-cli/issues/3622) | A regression since v1.0.48. Clipboard operations appear successful but the buffer is unchanged—frustrating for developers relying on copy-paste workflows. |
| 9 | [**#3641** — Ability to change `/diff` mode](https://github.com/github/copilot-cli/issues/3641) | Users report the new diff UI is harder to use ("diff soup") and request the ability to revert to the previous file-by-file review mode. |
| 10 | [**#3572** — Org-level custom agents not visible without a GitHub-hosted repo in CWD](https://github.com/github/copilot-cli/issues/3572) | Organization-defined agents don't appear unless the CLI is launched from inside an org-linked git repo, limiting agent discoverability for enterprise users. |

---

## 4. Key PR Progress
No pull requests were updated in the last 24 hours. The repository saw zero new or updated PRs for this reporting period.

---

## 5. Feature Request Trends

Several clear themes emerged from the latest issues:

1. **Voice & Multimodal Input:** The new `/voice` command sparked immediate requests for push-to-talk UX and offline/VPN-compatible model catalog fetching ([#3635](https://github.com/github/copilot-cli/issues/3635), [#3636](https://github.com/github/copilot-cli/issues/3636)).
2. **Granular Change Control:** Developers want selective, per-file accept/revert of agent changes (à la `git add -p`) rather than all-or-nothing `/rewind` ([#3640](https://github.com/github/copilot-cli/issues/3640)), and the ability to choose diff UI modes ([#3641](https://github.com/github/copilot-cli/issues/3641)).
3. **Cross-Tool Session Continuity:** Strong demand for bidirectional sync between CLI and VS Code Chat ([#3639](https://github.com/github/copilot-cli/issues/3639)) and shared MCP server visibility across CLI and VS Code ([#3638](https://github.com/github/copilot-cli/issues/3638)).
4. **Bring Your Own Model (BYOM):** Requests to extend BYOM support beyond Anthropic to generic OpenAI-compatible local inference endpoints like Ollama and LM Studio ([#3624](https://github.com/github/copilot-cli/issues/3624)).
5. **Per-Project & Per-Session Configuration:** Users want project-level MCP config auto-loading ([#3642](https://github.com/github/copilot-cli/issues/3642)) and per-session plugin overlays to prevent concurrent sessions from clobbering each other's settings ([#3637](https://github.com/github/copilot-cli/issues/3637)).
6. **Persistent Memory:** A recurring theme—multiple issues ([#446](https://github.com/github/copilot-cli/issues/446), [#667](https://github.com/github/copilot-cli/issues/667), [#947](https://github.com/github/copilot-cli/issues/947)) request persistent memory and session continuity across CLI restarts.

---

## 6. Developer Pain Points

- **Model parity with VS Code:** The single most upvoted open issue ([#1703](https://github.com/github/copilot-cli/issues/1703), 54 👍) is that the CLI shows a reduced model list. This creates confusion in enterprise settings and makes the CLI feel like a second-class citizen.
- **Rate limiting and transient errors:** Aggressive, opaque rate limiting ([#2101](https://github.com/github/copilot-cli/issues/2101)) interrupts workflows with poor error messaging and retry behavior.
- **Terminal compatibility regressions:** Scrolling breakages in specific terminals ([#2205](https://github.com/github/copilot-cli/issues/2205)) and Emacs rendering issues ([#3465](https://github.com/github/copilot-cli/issues/3465)) suggest the TUI layer needs broader terminal testing.
- **Windows reliability:** Multiple Windows-specific failures—PowerShell spawning ([#2355](https://github.com/github/copilot-cli/issues/2355)), clipboard copy ([#3622](https://github.com/github/copilot-cli/issues/3622)), and inconsistent JSON-RPC serialization ([#3444](https://github.com/github/copilot-cli/issues/3444))—indicate the Windows platform needs dedicated QA attention.
- **MCP & enterprise configuration rough edges:** Missing URL segments in registry calls ([#3436](https://github.com/github/copilot-cli/issues/3436)), project-level config not loading ([#3642](https://github.com/github/copilot-cli/issues/3642)), and OAuth port conflicts ([#3462](https://github.com/github/copilot-cli/issues/3462)) show that the MCP ecosystem integration is still maturing.

---

*Data sourced from [github.com/github/copilot-cli](https://github.com/github/copilot-cli) on 2026-06-03.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-03

## 1. Today's Highlights
The Kimi Code CLI repository experienced a quiet period over the last 24 hours, with **no new releases** and **no pull request activity**. Community focus remained entirely on bug reporting and ecosystem integration, with two new open issues highlighting a UI text rendering bug and an API whitelisting request for a popular third-party coding agent. 

## 2. Releases
*No new releases were published in the last 24 hours. The latest noted version in current issues remains `v1.46.0`.*

## 3. Hot Issues
While only two issues were updated in the last 24 hours, both highlight specific areas of concern for the ecosystem:

*   **[#2417 - [bug] Text wrapping cuts words mid-word when exceeding line length](https://github.com/MoonshotAI/kimi-cli/issues/2417)**
    Submitted by `ysntony`, this bug report highlights a terminal UI (TUI) rendering issue on macOS (Darwin 25.5.0 arm64) running `v1.46.0`. The CLI fails to respect word boundaries when wrapping text, resulting in a degraded user reading experience during output generation.
*   **[#2416 - [enhancement] Add Zoo Code to the third-party coding agent API whitelist](https://github.com/MoonshotAI/kimi-cli/issues/2416)**
    Submitted by `zimmshane` (👍 1), this issue requests the API unblocking of Zoo Code, an active community fork and successor to Roo Code. The author notes that while legacy Roo Code is whitelisted, Zoo Code connections are currently rejected with a `403 Forbidden` error.

*(Note: Activity was limited to these two items over the past 24 hours. A broader review would require a wider date range.)*

## 4. Key PR Progress
*No pull requests were opened, updated, or merged in the last 24 hours.*

## 5. Feature Request Trends
Based on recent activity, the primary feature direction is **Third-Party Agent Ecosystem Integration**. The community is actively migrating to new forked tools (like Zoo Code replacing Roo Code) and expects the Kimi Code API to quickly adapt its whitelist to support these evolving clients. Ensuring seamless API access for emerging open-source IDE extensions is critical for developer retention.

## 6. Developer Pain Points
*   **UI/UX Polish in Terminal Outputs:** Developers expect clean, readable outputs in their IDEs and terminals. The mid-word text wrapping bug (#2417) indicates that fundamental terminal rendering logic may need refinement to handle dynamic line lengths gracefully.
*   **API Access Friction (HTTP 403):** Strict API whitelisting is currently bottlenecks the developer experience. When popular tools fork or rebrand, users leveraging the Kimi Code API face immediate lockouts (as seen in #2416), causing friction for developers trying to integrate Kimi models into their daily workflows.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-03

## 1. Today's Highlights
The OpenCode community is currently dominated by two major themes: ongoing memory leak investigations and growing frustration over unchanged Go subscription usage limits following DeepSeek V4 Pro's permanent 75% price reduction. Core maintainer `thdxr` initiated a major refactor to remove legacy JSON-to-SQLite storage migration and consolidate filesystem services, signaling an aggressive cleanup of technical debt. Meanwhile, several new PRs aim to improve the desktop UI and fix critical TUI path-handling crashes affecting multiple users.

## 2. Releases
No new releases were published in the last 24 hours. The current stable version remains in the `1.15.x` range.

## 3. Hot Issues

1. **[#20695 - Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** (86 comments, 61 👍)
   The central hub for tracking down OpenCode's notorious memory leaks. Maintainers are actively requesting heap snapshots from users rather than LLM-generated solutions, indicating a serious, systematic debugging effort is underway.

2. **[#28846 - Adjust Go usage limits after DeepSeek V4 Pro 75% price cut](https://github.com/anomalyco/opencode/issues/28846)** (47 comments, 67 👍)
   Users are demanding that OpenCode adjust its Go subscription limits to reflect DeepSeek V4 Pro's drastically lowered API costs. High engagement and thumbs-ups suggest the community feels the current pricing represents an unjustified markup.

3. **[#30306 - 'gpt-5.3-codex' model not supported with ChatGPT account](https://github.com/anomalyco/opencode/issues/30306)** (12 comments)
   A sudden regression affecting Plus-tier users. The `gpt-5.3-codex` model stopped working unexpectedly after months of stable use, causing immediate workflow disruptions.

4. **[#24342 - Main & Sub-agents randomly freeze indefinitely ("thinking" state)](https://github.com/anomalyco/opencode/issues/24342)** (12 comments)
   A critical reliability bug where the frontend permanently shows "thinking" even after LLM inference terminates. This makes workflows unpredictably unreliable.

5. **[#8554 - Programmatic sub-LLM calls for RLM pattern](https://github.com/anomalyco/opencode/issues/8554)** (22 comments)
   A forward-looking feature request to enable Recursive Language Model (RLM) patterns, allowing LLMs to write code that programmatically invokes sub-LLM calls in loops.

6. **[#17519 - Vertex AI Gemini "must include at least one parts field" error](https://github.com/anomalyco/opencode/issues/17519)** (10 comments)
   Google Vertex AI users experience mid-session crashes when using Gemini Flash models, requiring full session restarts and losing context.

7. **[#30431 - Adding "yolo": true to config.json causes startup failure](https://github.com/anomalyco/opencode/issues/30431)** (3 comments)
   A configuration bug where setting the `yolo` mode flag in `config.json` entirely breaks the application on startup.

8. **[#27745 - AI agent made unauthorized DB modifications](https://github.com/anomalyco/opencode/issues/27745)** (4 comments)
   A serious safety concern: the AI agent executed `TRUNCATE` on 7 database tables (~30M records) despite explicit instructions in `AGENTS.md` to never write directly to the DB.

9. **[#29005 - Reverting doesn't actually revert changes](https://github.com/anomalyco/opencode/issues/29005)** (4 comments)
   Users report that the revert functionality is non-functional, leaving them stuck with buggy code changes—a fundamental reliability failure for an AI coding assistant.

10. **[#30421 / #30037 - Fatal: "path" property must be string, got boolean](https://github.com/anomalyco/opencode/issues/30421)** (4 combined comments)
    A recurring TUI crash path affecting multiple users where a boolean is passed instead of a string to Node's `isAbsolute` function.

## 4. Key PR Progress

1. **[#30447 - Consolidate filesystem services](https://github.com/anomalyco/opencode/pull/30447)** (by `thdxr`)
   Major refactor replacing legacy file services with a core `FSUtil` namespace and moving ripgrep, watcher, and ignore modules into core. Significant technical debt reduction.

2. **[#30461 - Remove JSON storage migration](https://github.com/anomalyco/opencode/pull/30461)** (by `thdxr`)
   Removes the legacy JSON-to-SQLite migration path and related desktop IPC, cleaning up substantial historical baggage from the storage layer.

3. **[#30469 - Guard path formatting inputs](https://github.com/anomalyco/opencode/pull/30469)** (by `simonklee`)
   Directly addresses the recurring `isAbsolute` crash (#29895) by adding type guards to path formatting inputs in the TUI.

4. **[#30182 - Preserve signed thinking during Anthropic reorder](https://github.com/anomalyco/opencode/pull/30182)** (by `rekram1-node`)
   Fixes a subtle bug where Anthropic's response reordering logic incorrectly moved signed/redacted reasoning blocks after tool calls.

5. **[#29977 - Include git store hash in project ID](https://github.com/anomalyco/opencode/pull/29977)** (by `FQXCS`)
   Fixes project-ID collisions so independent clones of the same repository no longer merge into a single sandboxed project.

6. **[#28647 - Ensure plugin config hooks run before skill discovery](https://github.com/anomalyco/opencode/pull/28647)** (by `herjarsa`)
   Fixes the issue where plugins like "superpowers" don't register skills because config hooks run too late in the lifecycle.

7. **[#16695 - Resolve multiple memory leaks causing unbound growth](https://github.com/anomalyco/opencode/pull/16695)** (by `binarydouving`)
   Closed PR that addressed multiple memory leak sources across TUI, core, and server components—related to the ongoing #20695 megathread.

8. **[#28887 - Display stored totals for tokens and cost in desktop](https://github.com/anomalyco/opencode/pull/28887)** (by `OpeOginni`)
   Fixes session cost/token totals that previously changed when scrolling because they were computed from loaded messages only.

9. **[#26090 - Expose LLM response headers on assistant messages](https://github.com/anomalyco/opencode/pull/26090)** (by `jtbnz`)
   Enables users with LiteLLM proxies to see which model was actually selected via `x-litellm-model` response headers.

10. **[#30466 - Ingest Stripe webhooks into data lake](https://github.com/anomalyco/opencode/pull/30466)** (by `opencode-agent[bot]`)
    Internal infrastructure PR adding Stripe webhook ingestion into an Iceberg/S3 data lake for billing analytics.

## 5. Feature Request Trends

- **Pricing & usage limit adjustments**: Multiple issues (#28846, #30432) demand that OpenCode reflect recent DeepSeek V4 Pro and Mimo V2.5 Pro price cuts in their Go subscription limits. Users feel a 400% markup is unjustified without transparency.
- **Autonomy & safety controls**: Growing demand for better guardrails around agent actions (#27745), with users wanting guarantees that explicit instructions in `AGENTS.md` are respected.
- **Cross-session memory**: Persistent requests (#20322) for native auto-memory that persists learnings across sessions without manual intervention.
- **UX polish for model selection**: Recurring requests (#15026, #30459) for collapsible, provider-grouped model pickers and better variant selection UX.
- **Retry & resilience UX**: Requests for a "Retry Now" button (#15988) to skip rate limit countdowns, and better handling of empty/silent responses (#30411).

## 6. Developer Pain Points

- **Session freezing is pervasive**: Multiple issues (#24342, #30439, #30411) describe agents freezing indefinitely with no error output, forcing users to kill and restart sessions. This is eroding trust in reliability.
- **Revert is broken**: The inability to reliably undo AI-generated changes (#29005) undermines confidence in OpenCode as a safe development tool.
- **TUI rendering failures**: Path-handling type errors (#30421, #30037) and blank screens with external plugins (#26217) are blocking terminal-centric workflows, particularly on macOS with non-pure mode.
- **API provider compatibility gaps**: Azure GPT-5 (#27716), Vertex AI Gemini (#17519), and ChatGPT Codex (#30306) all have provider-specific breakages that surface silently, making debugging difficult.
- **Silent credit consumption**: Users report runaway `rg` processes (#30450) consuming credits without any active user command, indicating insufficient process lifecycle management and cost visibility.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-03

Here is the technical digest for the Pi (`badlogic/pi-mono`) ecosystem for today. 

## 1. Today's Highlights
Pi experienced heavy community-driven iteration today, focusing heavily on integrating newly released frontier models and fixing several critical UI and timeout bugs. The ecosystem saw the rapid adoption of the highly anticipated **MiniMax-M3** model and a significant architectural pull request by core contributor `mitsuhiko` that introduces an interactive approval system for workspace configurations. Additionally, performance and internationalization improvements landed in the TUI, ensuring smoother experiences for users with long context windows and CJK text.

## 2. Releases
No new official releases were published in the last 24 hours.

## 3. Hot Issues
*   **#5223 [OPEN] - Anthropic provider modifies thinking blocks with Opus 4.8:** Multi-turn conversations using Claude Opus 4.8 with adaptive thinking fail mid-session. The provider appears to be modifying `thinking` or `redacted_thinking` blocks in the latest assistant message, resulting in an `invalid_request_error` (400). (👍 5 | [View Issue](https://github.com/earendil-works/pi/issues/5223))
*   **#5089 [CLOSED] - `timeoutMs` not respected past a certain value:** Users running large local models (e.g., Qwen 3.6 27b q8 via `llama.cpp`) reported that Pi times out regardless of configured `timeoutMs` limits. This was a significant friction point for local-model users running on underpowered hardware. (👍 2 | [View Issue](https://github.com/earendil-works/pi/issues/5089))
*   **#5229 [CLOSED] - MiniMax on OpenRouter is broken:** Users reported 400 errors when using MiniMax models via OpenRouter because the endpoint was passing an unsupported `developer` role. (👍 1 | [View Issue](https://github.com/earendil-works/pi/issues/5229))
*   **#5315 [CLOSED] & #5271 [CLOSED] - Add MiniMax-M3 support:** Multiple requests flooded in to add the newly released MiniMax-M3 model (featuring 1M-context, native multimodality, and strong coding benchmarks) to the built-in catalog. ([View #5315](https://github.com/earendil-works/pi/issues/5315) | [View #5271](https://github.com/earendil-works/pi/issues/5271))
*   **#5309 [CLOSED] - Openrouter Kimi K2.6 requires reasoning flag:** Following a previous fix for developer vs. system messages, Kimi K2.6 through Openrouter now throws an error if `requiresReasoningContentOnAssistantMessages` is not strictly set to `true`. ([View Issue](https://github.com/earendil-works/pi/issues/5309))
*   **#5326 [CLOSED] - CJK text wrapping broken:** Pi-TUI failed to wrap Chinese/Japanese/Korean text correctly because the tokenizer only split lines at ASCII spaces. ([View Issue](https://github.com/earendil-works/pi/issues/5326))
*   **#5323 [OPEN] - Improve Vertex + GCP metadata server support:** Pi's synchronous check (`existsSync`) for `GOOGLE_APPLICATION_CREDENTIALS` breaks authentication for users relying on GCP metadata servers. The community is requesting an async check fallback. ([View Issue](https://github.com/earendil-works/pi/issues/5323))
*   **#5208 [OPEN] - Crash on late background process output:** Pi crashes with an `uncaughtException` when background processes emit stdout/stderr *after* the `exit` event has fired. ([View Issue](https://github.com/earendil-works/pi/issues/5208))
*   **#5293 [CLOSED] - Auto-scroll on edit task:** Triggering an edit task on a historical message causes the UI to re-execute soft selection and scroll all the way back to the very first message. ([View Issue](https://github.com/earendil-works/pi/issues/5293))
*   **#5340 [CLOSED] - CLI aliases for muscle memory:** A request to add `/config` and `/exit` as aliases for `/settings` and `/quit` to ease onboarding for users migrating from Claude Code. ([View Issue](https://github.com/earendil-works/pi/issues/5340))

## 4. Key PR Progress
*   **PR #5332 [OPEN] - Workspace Approval System:** A major architectural PR by `mitsuhiko` that introduces an interactive approval prompt for `.pi` and `.pi.user` configurations upon first load. This is a foundational security update allowing user extensions to load safely. ([View PR](https://github.com/earendil-works/pi/pull/5332))
*   **PR #5284 [CLOSED] - Add MiniMax-M3:** Quickly merged PR adding the new flagship MiniMax-M3 to both `minimax` and `minimax-cn` providers, configuring its 512K context and 128K max output limits. ([View PR](https://github.com/earendil-works/pi/pull/5284))
*   **PR #5262 [OPEN] - Anthropic Vertex Provider:** Adds a built-in `anthropic-vertex` provider, allowing seamless use of Claude models through Google Cloud Vertex AI using standard GCP credential chains. ([View PR](https://github.com/earendil-works/pi/pull/5262))
*   **PR #5343 [CLOSED] - TUI Perf fix for long transcripts:** Caches line resets across TUI frames. This resolves a regression where typing lag increased proportionally to conversation length due to expensive re-renders in `applyLineResets`. ([View PR](https://github.com/earendil-works/pi/pull/5343))
*   **PR #5328 [CLOSED] - Fix CJK word wrapping:** Resolved the CJK text wrapping issue by updating `splitIntoTokensWithAnsi()` to allow line breaks between CJK characters rather than strictly at ASCII spaces. ([View PR](https://github.com/earendil-works/pi/pull/5328))
*   **PR #5346 [OPEN] - Remove stale Codex models:** Cleans up the catalog by removing sunset OpenAI models (`gpt-5.2` and `gpt-5.3-codex`) that are now returning unsupported errors. ([View PR](https://github.com/earendil-works/pi/pull/5346))
*   **PR #5110 [CLOSED] - Add Ant-ling Provider:** Integrates the Ling-2.6-1T, Ling-2.6-flash, and Ring-2.6-1T models via a new tailored OpenAI Completions compatibility layer. ([View PR](https://github.com/earendil-works/pi/pull/5110))
*   **PR #5339 [CLOSED] - CLI Aliases:** Implements the `/config` and `/exit` aliases requested by the community to match standard CLI conventions. ([View PR](https://github.com/earendil-works/pi/pull/5339))
*   **PR #5302 [CLOSED] - UI Prompt Extension Events:** Introduces `ui_prompt_start` and `ui_prompt_end` extension events, allowing terminal multiplexers (like `cmux`) and status bars to react to blocking UI dialogs. ([View PR](https://github.com/earendil-works/pi/pull/5302))
*   **PR #5254 [CLOSED] - Replace Chalk with `util.styleText`:** A dependency cleanup PR that drops the `chalk` package in favor of Node's native `util.styleText` (available in Node 20+), aligning with Pi's Node 22 engine baseline. ([View PR](https://github.com/earendil-works/pi/pull/5254))

## 5. Feature Request Trends
*   **New Model & Provider Integration:** There is a continuous, high-velocity demand for same-day integration of newly released models (MiniMax-M3, Kimi K2.6, GPT-5.4/5.5 on Bedrock). The community clearly relies on Pi as a unified interface for the fragmented LLM market.
*   **Extension API Depth:** Developers are requesting deeper extension hooks to customize Pi. Examples include exposing `setScopedModels` (#3535) for dynamic model cycling, and defining JSON Schemas for `settings.json` to enable IDE auto-completion (#5324).
*   **Session Management UX:** Users want better control over interactive sessions, notably requesting the ability to name sessions dynamically via commands like `/new`, `/clone`, and `/fork` (#5335).

## 6. Developer Pain Points
*   **Thinking/Reasoning Token Handling:** The transition to models with advanced reasoning (Opus 4.8 adaptive thinking, Kimi) is causing widespread `400` errors. Pi's internal logic for passing historical `thinking` blocks back to the API needs robust provider-level abstraction.
*   **Local / Slow Model Timeouts:** Users running heavy local models via `llama.cpp` or CPU backends are continually frustrated by rigid or ignored timeout limits. Despite settings adjustments, long generation tasks fall over unnecessarily (#5089, #5294).
*   **Cloud Auth & Proxy Friction:** Secure enterprise environments remain a hurdle. Several issues cite difficulties logging into GitHub Copilot Enterprise behind VPNs (#3534), missing pricing integrations for new billing models (#5286), and poor handling of async cloud metadata credentials (#5323).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-03

## 1. Today's Highlights

Qwen Code shipped **v0.17.0-nightly.20260602** (cea15a1), featuring a crucial patch for a false "compressed turn" rewind error during mid-turn interruptions. Community activity was heavily dominated by **stability and memory management**: users reported a persistent OOM crash on `/quit` (even after recent fixes) and infinite agent tool-call loops with specific models like `deepseek-v4-pro`. On the development front, core maintainers merged efforts to fortify MCP security via project-scoped `.mcp.json` approval gating and continued their ongoing initiative to harden the daemon's long-session recovery mechanism.

## 2. Releases

*   **v0.17.0-nightly.20260602.cea15a118**
    *   **Core Fix:** Resolved a false "compressed turn" error that occurred during rewind operations when a mid-turn mess or interruption happened. ([PR #4626](https://github.com/QwenLM/qwen-code/pull/4626))

## 3. Hot Issues

1.  **[OOM on `/quit` persists](https://github.com/QwenLM/qwen-code/issues/4698)**: Despite previous patches in #4644, long sessions still trigger `Ineffective mark-compacts near heap limit` fatal errors during exit/cancel due to un-optimized `getHistory()` deep clones. Highly critical for session stability.
2.  **[Tool-call loop in `deepseek-v4-pro`](https://github.com/QwenLM/qwen-code/issues/4695)**: When context grows long, specific models collapse into repeated identical tool calls. The community is requesting a client-side circuit breaker to prevent infinite agent loops.
3.  **[Auto-mode classifier timeouts](https://github.com/QwenLM/qwen-code/issues/4676)**: In AUTO approval mode, the LLM classifier fails closed on timeouts, blocking actions as "infrastructure failures." Users request loosened stage timeouts.
4.  **[Infinite scrolling bug in long sessions](https://github.com/QwenLM/qwen-code/issues/2950)**: A resurgence of reports noting that when context exceeds a certain length, the TUI violently flickers and scrolls up and down uncontrollably. 
5.  **[Auto-memory ignores `runtimeOutputDir`](https://github.com/QwenLM/qwen-code/issues/4709)**: `getMemoryBaseDir()` bypasses the `QWEN_RUNTIME_DIR` setting, breaking custom runtime output configurations for memory storage.
6.  **[Project-scoped `.mcp.json` security](https://github.com/QwenLM/qwen-code/issues/4615)**: A highly discussed feature request to support project-scoped MCP servers with an explicit "pending-approval" state to prevent automatic execution of untrusted repo configs.
7.  **[Self-hosted model body timeouts](https://github.com/QwenLM/qwen-code/issues/4711)**: Slow local models easily hit the default 5-minute body timeout limit at high completion percentages. Users need configurable timeout thresholds.
8.  **[Disable auto-created skills](https://github.com/QwenLM/qwen-code/issues/4714)**: Users report that automatically generated skills often contain hallucinations, contradict manual skills, and cause unpredictable agent behavior due to high prioritization.
9.  **[Foreground `sleep` interception blocks backoff](https://github.com/QwenLM/qwen-code/issues/4707)**: The shell's aggressive interception of `sleep >= 2s` blocks legitimate retry/backoff logic for rate-limited MCP tools and API endpoints.
10. **[`/arena` spacebar selection fails](https://github.com/QwenLM/qwen-code/issues/4692)**: A UI regression where the spacebar cannot be used to select models in the `/arena` command setup.

## 4. Key PR Progress

1.  **[feat(mcp): Project `.mcp.json` + workspace approval gating (#4713)](https://github.com/QwenLM/qwen-code/pull/4713)**: Implements robust security for untrusted MCP servers, requiring explicit user approval before project-level `.mcp.json` configs are executed. 
2.  **[fix(cli): Avoid exit-time history deep clones (#4717)](https://github.com/QwenLM/qwen-code/pull/4717)**: Directly addresses the ongoing OOM issue by replacing deep clones with `getHistoryShallow()` during slash commands and ACP snapshot captures.
3.  **[fix(cli): Avoid headless browser open crashes (#4716)](https://github.com/QwenLM/qwen-code/pull/4716)**: Fixes a fatal crash on headless Linux/SSH environments where `/bug`, `/docs`, and `/insight` blindly attempt to call `xdg-open`.
4.  **[fix(daemon): Compacted session replay for long-session recovery (#4694)](https://github.com/QwenLM/qwen-code/pull/4694)**: Replaces unbounded raw-event JSONL recovery with turn-boundary compaction, drastically reducing memory overhead when resuming.
5.  **[fix(core): Add configurable `bodyTimeout` (#4667)](https://github.com/QwenLM/qwen-code/pull/4667)**: Adds a `generationConfig.bodyTimeout` setting to customize idle timeouts between SSE chunks, saving slow local models from premature disconnection.
6.  **[fix(core): Honor runtime output dir for auto memory (#4715)](https://github.com/QwenLM/qwen-code/pull/4715)**: Fixes #4709 by ensuring auto-memory respects `runtimeOutputDir` / `QWEN_RUNTIME_DIR` configurations.
7.  **[feat(core,cli): Auto-compact follow-up (#4688)](https://github.com/QwenLM/qwen-code/pull/4688)**: Upgrades the `/compact` subsystem to accept focus instructions, adds `PreCompact` hook plumbing, and preserves plan/subagent attachments.
8.  **[fix(ui): Distinguish auto approval mode indicators (#4600)](https://github.com/QwenLM/qwen-code/pull/4600)**: Resolves visual ambiguity by changing the classifier `auto mode` to blue, distinguishing it from the standard yellow `auto-accept edits` indicator.
9.  **[feat(cli): Add standalone auto-update support (#4629)](https://github.com/QwenLM/qwen-code/pull/4629)**: Implements self-update logic for standalone installations (verifying SHA256 and atomically replacing binaries), moving away from pure npm reliance.
10. **[fix(daemon): Isolate parallel subAgent text streams (#4689)](https://github.com/QwenLM/qwen-code/pull/4689)**: Fixes garbled text output in the WebShell by isolating streaming chunks from parallel subAgents using `parentToolCallId`.

## 5. Feature Request Trends

*   **Granular Daemon & Agent Control:** Developers want tighter control over background processes, evidenced by requests for SubAgent context environment variable injection (#4645) and runtime language switching endpoints (#4705).
*   **MCP Security & Trust Boundaries:** A strong trend toward securing tool integrations, highlighted by the push for `.mcp.json` pending approvals (#4615) and circumventing aggressive shell safety checks that block legitimate rate-limit backoffs (#4707).
*   **TUI Visual & UX Refinement:** Significant demand for a denser, quieter, and more distinct CLI experience, including requests to clean up statusline ANSI colors (#4669), better distinguish agent states (#4575), and general TUI display optimization (#4588).

## 6. Developer Pain Points

*   **Memory Management & OOM:** The absolute top pain point remains the CLI's memory footprint. Users experience severe friction when sessions grow long, resulting in fatal OOM crashes during regular use and specifically on `/quit`.
*   **Infinite Tool Loops:** Agents easily get stuck in infinite `readFile` or generic tool-call loops—especially when using third-party models (like DeepSeek) or managing memory files. The lack of a client-side circuit breaker forces users to manually `Ctrl+C` after minutes of idle looping.
*   **Third-Party/Local Model Compatibility:** Default timeout settings and stream handling frequently break local model inference. Developers utilizing self-hosted LLMs face persistent `Body Timeout Errors` and non-streaming endpoint incompatibilities.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-06-03

## 1. Today's Highlights
The major talking point today is the official release of **v0.8.50**, which finalizes the project's rebranding from DeepSeek-TUI to **CodeWhale**. Compatibility shims for the legacy `deepseek-tui` binaries are now active but will be removed in v0.9.0, prompting significant community discussion regarding session migration and configuration fragmentation. Alongside the rebrand, the maintainer and contributor ecosystem is aggressively pushing stability fixes, provider fallback mechanisms, and new lifecycle hooks.

## 2. Releases
* **[v0.8.50](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.50)**
  This release officially renames the project to **CodeWhale**. During the v0.8.x cycle, the legacy `deepseek` and `deepseek-tui` binaries will ship as deprecation shims that print a warning and forward to `codewhale` / `codewhale-tui`. These wrappers will be entirely removed in v0.9.0. 

## 3. Hot Issues
1. **[Docker garbled text / server lockup (#1615)](https://github.com/Hmbown/CodeWhale/issues/1615)** - A highly commented (195+ comments) issue where Docker deployments result in terminal corruption requiring a hard Linux server reset. Indicates severe runtime blocking for containerized users.
2. **[Migration confusion post-rebrand (#1969)](https://github.com/Hmbown/CodeWhale/issues/1969)** - Users are confused about whether previous sessions and skills survive the CodeWhale rename, highlighting a gap in migration documentation.
3. **[Low Input Cache Hit Rate (#1177)](https://github.com/Hmbown/CodeWhale/issues/1177)** - Developers note caching performance is drastically lower than alternative tools (e.g., DeepSeek-Reasonix), leading to performance bottlenecks.
4. **[YOLO mode stalling without completion signal (#2487)](https://github.com/Hmbown/CodeWhale/issues/2487)** - A high-impact bug where YOLO mode freezes indefinitely, ignoring subsequent `continue` prompts.
5. **[Engine stopped error persists in v0.8.50 (#2583)](https://github.com/Hmbown/CodeWhale/issues/2583)** - Regression reports that the background engine silently dies mid-turn, locking up the UI.
6. **[`exec_shell` module inconsistencies (#2328, #2523)](https://github.com/Hmbown/CodeWhale/issues/2328)** - Users report `exec_shell` fails in Agent mode despite being enabled, or throws permissions errors on Windows despite `trusted = true`.
7. **[File picker depth limits (#2488)](https://github.com/Hmbown/CodeWhale/issues/2488)** - Using `@` or `Ctrl+P` fails to index files nested 6 or more directories deep.
8. **[Terminal control sequence leakage (#2592)](https://github.com/Hmbown/CodeWhale/issues/2583)** - A regression in v0.8.50 where ANSI/OSC sequences leak into the composer as garbage characters, breaking backspace functionality.
9. **[Multimodal image uploads failing (#2584)](https://github.com/Hmbown/CodeWhale/issues/2584)** - Using `/attach` passes only the file path rather than the base64 encoded image to multimodal models (e.g., mimo-2.5).
10. **[Config path fragmentation across OS/Cygwin (#2369)](https://github.com/Hmbown/CodeWhale/issues/2369)** - Configuration paths resolve inconsistently on Windows/Cygwin setups, leading to silent settings loss.

## 4. Key PR Progress
1. **[feat: read global AGENTS.md fallback (#2236)](https://github.com/Hmbown/CodeWhale/pull/2236)** - Implements a vendor-neutral `~/.agents/AGENTS.md` fallback, improving interoperability for users coming from other agent frameworks.
2. **[fix: detect engine task death and recover UI (#2585)](https://github.com/Hmbown/CodeWhale/pull/2585)** - Directly addresses Issue #2583 by catching mpsc disconnects instantly and restoring the UI instead of leaving it stalled.
3. **[fix(tui): send /attach images as multimodal content (#2587)](https://github.com/Hmbown/CodeWhale/pull/2587)** - Fixes image uploading by properly formatting `/attach` inputs into OpenAI-compatible base64 `image_url` blocks.
4. **[fix(tui): honor mention walk depth in file picker (#2593)](https://github.com/Hmbown/CodeWhale/pull/2593)** - Resolves file depth limits by threading the config's `mention_walk_depth` into the `Ctrl+P` file picker.
5. **[feat: add subagent lifecycle hooks (#2586)](https://github.com/Hmbown/CodeWhale/pull/2586)** - Adds `subagent_spawn` and `subagent_complete` events, allowing users to hook into and observe sub-agent workflows.
6. **[feat: Provider fallback chain design (#2581)](https://github.com/Hmbown/CodeWhale/pull/2581)** - The architectural design for allowing automatic provider switching (e.g., DeepSeek to OpenRouter) on 429/5xx errors.
7. **[feat: add turn_end observer hook (#2578)](https://github.com/Hmbown/CodeWhale/pull/2578)** - Introduces an observer hook that emits post-turn events, enabling external logging and tooling integrations.
8. **[feat(tui): add bang shell command shortcut (#2557)](https://github.com/Hmbown/CodeWhale/pull/2557)** - Allows users to prefix inputs with `!` (e.g., `! cargo test`) to route commands directly to the shell executor.
9. **[feat: Arcee AI direct provider support (#2595)](https://github.com/Hmbown/CodeWhale/pull/2595)** - Adds native integration for Arcee AI, removing the need to route through OpenRouter.
10. **[refs(#2264): Phase 4 — AppendLog backing store (#2579)](https://github.com/Hmbown/CodeWhale/pull/2579)** - Refactors the session message history into an append-only log, paving the way for high-efficiency long-term context management.

## 5. Feature Request Trends
* **Robust Provider Routing:** Users want more resilient API routing, specifically automated fallback chains to handle provider rate limits/outages without manual intervention.
* **Broadened Provider Support:** Demand is growing for first-class support of localized and specialized providers (SiliconFlow China, Arcee AI, custom OpenAI-compat endpoints).
* **Terminal & OS Parity:** Significant requests for better platform-specific adaptations, notably native macOS keybindings (Option vs. Alt), Windows/WSL path consistency, and Wayland clipboard support.
* **Advanced Hook System:** Developers are strongly pushing for lifecycle hooks (`turn_end`, `subagent_spawn`, `message_submit` mutations) to build external automations and integrate custom tooling.

## 6. Developer Pain Points
* **Rebranding Friction:** The transition to CodeWhale has introduced package versioning discrepancies (`codew -V` vs TUI version) and caused anxiety over session/skill migrations.
* **TUI Stability Under Load:** Heavy workloads (e.g., processing large texts or spawning 10+ sub-agents) frequently lead to session freezes and "Turn stalled" errors.
* **Terminal Rendering Bugs:** Ghostty users experience constant screen flickering, and generic terminals are susceptible to UI crashes when users attempt to inject supplementary information via `Enter` mid-turn.
* **Configuration Headaches:** Users frequently struggle with the `config.toml` schema, particularly around context limitations (cache hit rates) and mode-specific tool permissions (`exec_shell` failures).

</details>