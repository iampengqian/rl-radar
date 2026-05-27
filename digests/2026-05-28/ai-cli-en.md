# AI CLI Tools Community Digest 2026-05-28

> Generated: 2026-05-27 22:29 UTC | Tools covered: 9

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

Here is the cross-tool comparison report for the AI developer tools ecosystem based on the community digests from May 28, 2026.

## 1. Ecosystem Overview

The AI CLI tooling landscape is rapidly transitioning from simple conversational interfaces to complex, autonomous agent orchestrators. Tools are now expected to manage long-lived sessions, coordinate subagents, and interact deeply with local and remote environments. Consequently, the primary engineering challenges have shifted toward managing massive context windows, ensuring terminal UI stability across diverse operating systems, and safely executing unrestricted shell commands. Both open-source and proprietary tools are converging on a "daemon-first" architecture, prioritizing headless execution, CI/CD integration, and robust API provider routing.

## 2. Activity Comparison

*Note: "Issues" and "PRs" reflect the count of highly active items documented in today's digest cycle.*

| Tool | Issues Tracked | Key PRs Tracked | Release Status (May 28, 2026) |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 10 | **v2.1.152** (Stable) |
| **OpenAI Codex** | 10 | 10 | v0.135.0-alpha.1 & alpha.2 (Pre-release) |
| **Gemini CLI** | 10 | 10 | **v0.44.0** (Stable), v0.45.0 (Preview/Nightly) |
| **GitHub Copilot CLI**| 10 | 0 | **v1.0.55-6** (Stable) |
| **Kimi Code CLI** | 5 | 6 | **v1.45.0** (Stable) |
| **OpenCode** | 10 | 10 | **v1.15.11** (Stable) |
| **Pi** | 10 | 10 | **v0.76.0** (Stable) |
| **Qwen Code** | 10 | 10 | **v0.16.2** (Stable/Nightly) |
| **DeepSeek TUI (CodeWhale)**| 10 | 10 | **v0.8.47** (Stable, Rebranding) |

## 3. Shared Feature Directions

*   **Multi-Agent Orchestration & Inter-Session Communication:** A universal demand for managing complex workflows. *Claude Code* users want persistent disk-backed task queues and parent-child process signaling. *OpenAI Codex* users are requesting an "Orchestrator mode," while *Qwen Code* is actively building daemon-bridge architectures to allow external MCP clients to control subagents.
*   **Context Window Management:** As models scale to 1M+ tokens, unbounded context growth is breaking workflows. *GitHub Copilot CLI* and *OpenAI Codex* both suffer from heavy auto-compaction triggered by system bloat. *Pi* has introduced an RPC flag to explicitly exclude bash outputs from the context, while *OpenCode* is actively fixing bugs where reasoning tokens are dropped during tool calls.
*   **Windows & Terminal UI Stability:** Cross-platform rendering is a major pain point. GNOME Wayland copy/paste is broken in *GitHub Copilot CLI*; *Claude Code* has mouse-tracking regressions on Linux; *Gemini CLI* is experiencing native PTY resize crashes; and *DeepSeek TUI* is battling PowerShell input leaks and UI flickering. 
*   **Enterprise Auth & MCP Friction:** All tools are struggling with OAuth, SSL inspection, and rate limits in corporate environments. *OpenAI Codex*, *GitHub Copilot CLI*, and *Qwen Code* all report high-severity authentication loop or timeout issues. Furthermore, repetitive MCP tool approval prompts are frustrating power users in both *Claude Code* and *OpenAI Codex*.

## 4. Differentiation Analysis

*   **Anthropic (Claude Code):** Focuses heavily on enterprise team workflows and governance, evidenced by features like `disallowed-tools` frontmatter for sandboxing and debates over source-controlled skill libraries. It currently leads in complex multi-agent deployment but struggles with desktop resource leaks (e.g., 31GB RAM accumulation).
*   **OpenAI (Codex):** Highly focused on platform extensibility and IDE integration. Current differentiation lies in feature-gated infrastructure like independent Python SDKs, local image generation extensions, and encrypted local secrets for keyring auth. However, it suffers from backend latency unreliability.
*   **Google (Gemini CLI):** Prioritizing deep code intelligence and memory systems. Unique focus on AST-aware code navigation (moving away from regex) and structured agent memory, though currently hampered by subagents falsely reporting success when hitting internal limits.
*   **GitHub Copilot CLI:** Deeply integrated into the GitHub ecosystem but hindered by context limits. Unique friction comes from IDE-level constraints where built-in tools consume 73% of the 200k context window before the user even types a prompt.
*   **Aggregator / Open-Source Tools (OpenCode, Pi):** Highly focused on provider-agnosticism and local networking. *Pi* and *OpenCode* are differentiating by adding dynamic model discovery, custom fetch hooks for corporate proxies, and robust automation IDs, acting as thin, highly configurable wrappers over proprietary models.
*   **Upstart/Regional Tools (Kimi, Qwen, DeepSeek/CodeWhale):** Heavily focused on architectural overhauls, rebranding, and cost visibility. *Kimi* is migrating from Python to TypeScript; *Qwen* is pioneering telemetry and AI-native issue triage; *CodeWhale* is pushing the boundaries of prefix-caching architectures to lower inference costs.

## 5. Community Momentum & Maturity

*   **High Momentum / High Friction:** **Claude Code** and **OpenAI Codex** have the most vocal, enterprise-heavy communities. Their issue trackers are dominated by high-stake architectural debates (multi-agent coordination) and severe production regressions. **GitHub Copilot CLI** is iterating rapidly (v1.0.55-6) but facing severe pushback due to TUI regressions.
*   **Rapid Iteration / Infrastructure Building:** **Qwen Code** and **OpenCode** show massive contributor momentum. *Qwen* has a high volume of substantial architectural PRs (daemon workspaces, OpenTelemetry), while *OpenCode* is aggressively integrating community fixes for diverse providers.
*   **Maturing / Transitioning:** **Kimi CLI** and **DeepSeek TUI (CodeWhale)** are in transitional states. *CodeWhale* is successfully executing a major rebrand but suffering expected distribution friction (e.g., Homebrew breakage). *Kimi* is actively managing a Python-to-TypeScript migration.

## 6. Trend Signals

1.  **The Terminal is the new IDE (and it's struggling):** Developers want autonomous agents living directly in the terminal. However, the influx of TUI crashes (Wayland, tmux, Cygwin, Zellij) indicates that current GUI/TUI frameworks are struggling to handle complex, streaming, multi-pane agent outputs.
2.  **Reasoning Token Management is the Next Bottleneck:** As advanced models (DeepSeek, OpenAI o-series, Opus) output hidden "reasoning" tokens, CLI tools are failing to preserve these across tool calls or mid-session model switches, breaking agentic continuity. First-class reasoning token handling is a required industry fix.
3.  **Daemon Mode & Headless CI/CD:** The CLI is no longer just for humans. The rapid development of explicit session IDs (`--session-id`), headless execution modes, and OpenTelemetry tracing reveals that developers are embedding these CLIs directly into automated pipelines, GitHub Actions, and cron-based codebase maintenance.
4.  **Cost Telemetry is Non-Negotiable:** Whether it's tracking API account balances directly in the TUI footer (CodeWhale) or exporting token accounting (Qwen Code), developers are demanding hard metrics on agent expenditure to justify and optimize autonomous workflows.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-05-28 | Source: [github.com/anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking

The following are the most actively discussed and high-attention Skills Pull Requests in the ecosystem:

| Rank | Skill Name | Author | Status | PR Link |
|:---:|---|---|:---:|---|
| 1 | **document-typography** | PGTBoos | 🟢 OPEN | [#514](https://github.com/anthropics/skills/pull/514) |
| 2 | **ODT (OpenDocument)** | GitHubNewbie0 | 🟢 OPEN | [#486](https://github.com/anthropics/skills/pull/486) |
| 3 | **frontend-design** (Improvement) | justinwetch | 🟢 OPEN | [#210](https://github.com/anthropics/skills/pull/210) |
| 4 | **skill-quality-analyzer & skill-security-analyzer** | eovidiu | 🟢 OPEN | [#83](https://github.com/anthropics/skills/pull/83) |
| 5 | **PDF Fix (Case-Sensitive Refs)** | Lubrsy706 | 🟢 OPEN | [#538](https://github.com/anthropics/skills/pull/538) |
| 6 | **ServiceNow Platform** | Vanka07 | 🟢 OPEN | [#568](https://github.com/anthropics/skills/pull/568) |
| 7 | **AURELION Skill Suite** | Chase-Key | 🟢 OPEN | [#444](https://github.com/anthropics/skills/pull/444) |
| 8 | **n8n-builder & n8n-debugger** | Wolfe-Jam | 🟢 OPEN | [#190](https://github.com/anthropics/skills/pull/190) |

### Detailed Breakdown

**#1 — document-typography** ([PR #514](https://github.com/anthropics/skills/pull/514))
Addresses a universal pain point: typographic quality in AI-generated documents. Tackles orphan word wrap, widow paragraphs at page bottoms, and numbering misalignment. High attention because it affects *every* document Claude generates, yet users rarely think to explicitly request good typography. Status: **Open** (March 2026).

**#2 — ODT / OpenDocument** ([PR #486](https://github.com/anthropics/skills/pull/486))
Enables creation, template filling, parsing, and HTML conversion of `.odt` and `.ods` files (OpenDocument Format). Long-lived PR with activity spanning March–April 2026, signaling sustained community interest in open-standard document support. Status: **Open**.

**#3 — frontend-design (revision)** ([PR #210](https://github.com/anthropics/skills/pull/210))
Not a new skill but a significant overhaul of the existing `frontend-design` skill, making instructions more actionable and internally coherent for Claude in single-conversation contexts. Long discussion tail (Jan–Mar 2026). Status: **Open**.

**#4 — Meta-skills: quality & security analyzers** ([PR #83](https://github.com/anthropics/skills/pull/83))
Two "meta skills" that evaluate other skills across five quality dimensions (structure, documentation, examples, etc.) and perform security analysis. One of the earliest high-attention PRs (Nov 2025), reflecting community demand for skill-authoring guardrails. Status: **Open**.

**#5 — PDF case-sensitivity fix** ([PR #538](https://github.com/anthropics/skills/pull/538))
A targeted bugfix correcting 8 uppercase-to-lowercase file reference mismatches in the PDF skill's `SKILL.md` that break on case-sensitive filesystems (Linux). Companion fixes include YAML validation ([#539](https://github.com/anthropics/skills/pull/539)) and OOXML `w:id` collision prevention ([#541](https://github.com/anthropics/skills/pull/541)) — all by the same contributor, indicating concentrated quality-improvement effort. Status: **Open**.

**#6 — ServiceNow Platform** ([PR #568](https://github.com/anthropics/skills/pull/568))
A broad enterprise-oriented skill covering ITSM, ITOM, ITAM/SAM, FSM, SPM, CSDM, Vulnerability Response, Security Incident Response, and IntegrationHub. Represents the strong enterprise/platform-integration direction of the ecosystem. Status: **Open**.

**#7 — AURELION Skill Suite** ([PR #444](https://github.com/anthropics/skills/pull/444))
A four-skill cognitive framework (kernel, advisor, agent, memory) for structured thinking and persistent knowledge management. Long review cycle (Feb–May 2026) suggests complexity and thorough community scrutiny. Status: **Open**.

**#8 — n8n-builder & n8n-debugger** ([PR #190](https://github.com/anthropics/skills/pull/190))
Workflow automation skills for building and debugging n8n workflows, plus a `.faf` file expert. Production-tested by the author. Very long issue lifetime (Dec 2025 – May 2026) shows persistent interest in automation tooling. Status: **Open**.

---

## 2. Community Demand Trends

Distilled from the top Issues, the most-anticipated new directions are:

### 🔒 Security & Trust
- **Namespace trust boundaries** ([Issue #492](https://github.com/anthropics/skills/issues/492)): Community is alarmed that third-party skills can be distributed under the `anthropic/` namespace, impersonating official content. Demand for a verified/signed skill distribution model.
- **Agent governance** ([Issue #412](https://github.com/anthropics/skills/issues/412)): Requests for safety patterns covering policy enforcement, threat detection, trust scoring, and audit trails for agentic systems.

### 🏢 Enterprise & Org-Level Features
- **Org-wide skill sharing** ([Issue #228](https://github.com/anthropics/skills/issues/228), 👍 7, 13 comments — *most-discussed issue*): Organizations want a shared skill library or direct sharing links instead of manually exchanging `.skill` files via Slack/Teams.

### 🔌 MCP & Integration
- **Skills-as-MCPs** ([Issue #16](https://github.com/anthropics/skills/issues/16)): Strong demand to expose Skills as Model Context Protocol tools, providing a standardized API surface for AI software interoperability.
- **MCP data overflow** ([Issue #1102](https://github.com/anthropics/skills/issues/1102)): Requests for context-window-aware data compression when Skills interface with databases via MCP.

### 🛠️ Core Tooling Reliability
- **`run_eval.py` trigger failure** ([Issue #556](https://github.com/anthropics/skills/issues/556), 👍 6): The skill evaluation harness has a 0% trigger rate, blocking skill authors from testing their work. Companion Windows fixes in [PR #1099](https://github.com/anthropics/skills/pull/1099) and [PR #1050](https://github.com/anthropics/skills/pull/1050).
- **Plugin duplication** ([Issue #189](https://github.com/anthropics/skills/issues/189), 👍 8): `document-skills` and `example-skills` bundles install identical skills, wasting context window tokens.
- **Selective skill loading** ([Issue #1087](https://github.com/anthropics/skills/issues/1087)): Plugins load all 17 skills from a repo instead of only the 4 declared in `marketplace.json`.

### 🌐 Platform Compatibility
- **AWS Bedrock support** ([Issue #29](https://github.com/anthropics/skills/issues/29)) and **Windows compatibility** ([PR #1050](https://github.com/anthropics/skills/pull/1050), [PR #1099](https://github.com/anthropics/skills/pull/1099)): Users want Skills to work seamlessly across cloud providers and operating systems.

---

## 3. High-Potential Pending Skills

These actively-discussed PRs are strong candidates for near-term merging:

| PR | Skill | Why It's Close | Link |
|---|---|---|---|
| **#538** | PDF case-sensitivity fix | Narrow, targeted bugfix with clear impact on Linux users | [#538](https://github.com/anthropics/skills/pull/538) |
| **#539** | YAML validation for skill-creator | Small, preventive fix; no design debate needed | [#539](https://github.com/anthropics/skills/pull/539) |
| **#541** | DOCX tracked-change ID collision | Specific OOXML corruption fix with clear root cause | [#541](https://github.com/anthropics/skills/pull/541) |
| **#1099** | Windows subprocess crash fix | Unblocks Windows users entirely; 1-line core fix | [#1099](https://github.com/anthropics/skills/pull/1099) |
| **#1050** | Windows `claude.cmd` + encoding fix | Companion to #1099; both address the same platform gap | [#1050](https://github.com/anthropics/skills/pull/1050) |
| **#509** | CONTRIBUTING.md | Resolves [Issue #452](https://github.com/anthropics/skills/issues/452); directly improves repo health score | [#509](https://github.com/anthropics/skills/pull/509) |
| **#514** | document-typography | Broadly applicable; solves a universal output-quality gap | [#514](https://github.com/anthropics/skills/pull/514) |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade reliability—secure skill distribution with verified namespaces, cross-platform evaluation tooling that actually works, and efficient context-window management—far outpacing demand for any single new skill category.**

---

# Claude Code Community Digest — 2026-05-28

---

## 1. Today's Highlights

Version **v2.1.152** shipped with significant enhancements to the code review workflow: `/code-review --fix` now automatically applies review findings (reuse, simplification, efficiency suggestions) to the working tree, and `/simplify` has been rebased to invoke it. Skills and slash commands also gained a new `disallowed-tools` frontmatter key for finer-grained tool control. On the issue tracker, the community is actively debating multi-agent coordination patterns, Windows Cowork stability, and Opus 4.7 model regression reports — signaling growing enterprise adoption and longer-session usage.

---

## 2. Releases

### v2.1.152
- **`/code-review --fix`** now applies review suggestions (reuse, simplification, efficiency) directly to the working tree after a review completes; `/simplify` is now an alias for `/code-review --fix`.
- **`disallowed-tools` frontmatter** — Skills and slash commands can declare tools to remove from the agent's available set, enabling tighter sandboxing of custom commands.
- *(Release notes appear truncated in the data source; additional changes may apply.)*

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#36151](https://github.com/anthropics/claude-code/issues/36151) — Multi-account switching (Mobile) | 276 👍 and 73 comments make this the top-voted open issue. Enterprise and agency users who manage multiple Claude accounts on mobile are blocked by the current single-account limitation. |
| 2 | [#62272](https://github.com/anthropics/claude-code/issues/62272) — Chat JSONLs deleted despite high `cleanupPeriodDays` | Potential **data-loss** bug: conversation transcripts are silently removed on updates/restarts even when users set a 100-year retention. Directly threatens auditability and session continuity. |
| 3 | [#62940](https://github.com/anthropics/claude-code/issues/62940) — Opus 4.7 (1M ctx) regressing on prompt fidelity & scope discipline | Reports that in long sessions the model misreads short prompts and expands narrow fixes into sweeping rewrites. High-severity signal for anyone using Opus 4.7 in production. |
| 4 | [#61936](https://github.com/anthropics/claude-code/issues/61936) — Mouse tracking breaks right-click & text selection (Linux, regression) | A regression in v2.1.150: xterm mouse reporting interferes with standard terminal interactions on GNOME Terminal/X11. Affects daily usability for Linux developers. |
| 5 | [#59915](https://github.com/anthropics/claude-code/issues/59915) — Intermittent terminal rendering corruption in VS Code | 42 👍. Clicking/dragging over garbled output forces partial re-renders. Closed but closely watched — indicates fragility in the TUI rendering pipeline. |
| 6 | [#61748](https://github.com/anthropics/claude-code/issues/61748) — Desktop app subprocess accumulation (~31 GB RAM) | Dispatched-task child processes are never reaped; 150+ processes accumulate over 38 hours. Critical for heavy Cowork/Dispatch users on macOS. |
| 7 | [#13585](https://github.com/anthropics/claude-code/issues/13585) — Add Quota Information Access to CLI | 84 👍. Users have no CLI visibility into remaining API credits or rate limits. Long-standing request that resurfaces with every billing cycle. |
| 8 | [#30953](https://github.com/anthropics/claude-code/issues/30953) — Desktop should honor `managed-settings.json` for all permissions | Re-approving MCP tools, Bash, and file permissions every session is a major friction point for managed/enterprise deployments. |
| 9 | [#62631](https://github.com/anthropics/claude-code/issues/62631) — Inter-session wake/notify for parent-child coordination | Reflects the community's push toward persistent multi-agent architectures where child sessions can signal idle/completion to orchestrator parents. |
| 10 | [#62935](https://github.com/anthropics/claude-code/issues/62935) — Sessions inconsistently sync to Claude iOS app | Cross-platform session visibility is unreliable; some CLI sessions appear on iOS while others don't. Undermines the "seamless multi-device" promise. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#62941](https://github.com/anthropics/claude-code/pull/62941) — `fix(ralph-wiggum): correctly read last assistant text` | Fixes the Ralph Wiggum stop hook to parse the full transcript instead of only the last line, preventing silent termination of active loops. |
| 2 | [#62906](https://github.com/anthropics/claude-code/pull/62906) — `fix(ralph-wiggum): prefix with bash for Windows path safety` | Adds `bash` interpreter prefix to the stop-hook command so paths with spaces work correctly on Windows (Git Bash/MSYS). |
| 3 | [#62821](https://github.com/anthropics/claude-code/pull/62821) — `docs: env-bridge workaround for plugin-MCP session-id` | Documents how plugin-MCP authors can bridge per-session identity today (workaround for missing `CLAUDE_CODE_SESSION_ID` in plugin stdio env). |
| 4 | [#61742](https://github.com/anthropics/claude-code/pull/61742) — `[docs] Agent View TUI working directory limitation` | Clarifies that dispatched sessions inherit the TUI's cwd and documents a tmux-based workaround. Closes #61546. |
| 5 | [#62622](https://github.com/anthropics/claude-code/pull/62622) — `fix: resolve 10 bugs across scripts and workflows` | Hardens CI: replaces hardcoded repo names with env vars, adds null-safety for scheduled events, improves error handling in label scripts. *(Closed/merged.)* |
| 6 | [#41447](https://github.com/anthropics/claude-code/pull/41447) — `feat: open source claude code ✨` | A community PR aggregating five "open-source Claude Code" requests. Not merged, but serves as a barometer for community desire around transparency. |
| 7 | [#50733](https://github.com/anthropics/claude-code/issues/50733) — Shell snapshot base64 encoding obfuscation | *(Tracked as issue but relevant to PR pipeline.)* Highlights that shell-snapshot function serialization uses `eval "$(base64 -d)"` even for benign code, making security audits harder. |
| 8 | [#54629](https://github.com/anthropics/claude-code/issues/54629) — Propagate MCP trace context (`_meta`, SEP-414) | Feature request for MCP observability; community is already drafting PRs for upstream MCP spec alignment. |
| 9 | [#59066](https://github.com/anthropics/claude-code/issues/59066) — File-system-based agent task queue | Proposes a persistent, disk-backed task queue for multi-agent coordination. Signals where the plugin/extension ecosystem is heading. |
| 10 | [#62334](https://github.com/anthropics/claude-code/issues/62334) — Allow existing sessions to communicate | Request for inter-session messaging. Low-comment count but conceptually aligned with the multi-agent coordination trend dominating the tracker. |

---

## 5. Feature Request Trends

1. **Multi-agent & inter-session orchestration** — The single strongest theme. Requests for persistent task queues ([#59066](https://github.com/anthropics/claude-code/issues/59066)), parent-child wake/notify ([#62631](https://github.com/anthropics/claude-code/issues/62631)), and cross-session communication ([#62334](https://github.com/anthropics/claude-code/issues/62334)) all point to users building complex, multi-terminal workflows and hitting the limits of the current single-session model.

2. **Enterprise permission & settings management** — Persistent permission profiles ([#30953](https://github.com/anthropics/claude-code/issues/30953)), multi-account support ([#36151](https://github.com/anthropics/claude-code/issues/36151)), and quota visibility ([#13585](https://github.com/anthropics/claude-code/issues/13585)) are all long-running enterprise asks that resurface regularly.

3. **Source-controlled & shared skills** — Linking a Git repo as the canonical source for organization-level skills ([#28729](https://github.com/anthropics/claude-code/issues/28729)) reflects teams wanting version-governed, shareable prompt/skill libraries.

4. **Observability & MCP integration depth** — Propagating trace context through MCP tool calls ([#54629](https://github.com/anthropics/claude-code/issues/54629)) and fixing OAuth flows for connectors like BigQuery ([#62271](https://github.com/anthropics/claude-code/issues/62271)) show the ecosystem maturing toward production-grade integrations.

5. **Cross-device session continuity** — Session sync between CLI, desktop, and iOS ([#62935](https://github.com/anthropics/claude-code/issues/62935)) and remote-control bridge reliability ([#62924](https://github.com/anthropics/claude-code/issues/62924)) indicate users expect a seamless multi-device experience.

---

## 6. Developer Pain Points

- **Windows Cowork instability** — Multiple fresh bugs ([#62938](https://github.com/anthropics/claude-code/issues/62938), [#62937](https://github.com/anthropics/claude-code/issues/62937), [#42119](https://github.com/anthropics/claude-code/issues/42119)) report `sessiondata.vhdx` path mismatches, EXDEV cross-drive rename failures, and unbounded cache growth. Windows + Cowork is currently a rough experience.

- **Long-session model regression** — Reports of Opus 4.7 losing prompt fidelity and scope discipline in extended sessions ([#62940](https://github.com/anthropics/claude-code/issues/62940)), agents falsely marking work as "PASS" ([#62604](https://github.com/anthropics/claude-code/issues/62604)), and behavioral drift away from user-granted autonomy ([#62917](https://github.com/anthropics/claude-code/issues/62917)). These converge on a common theme: **long-context reliability is degrading** and undermines trust in autonomous workflows.

- **Silent data loss** — Chat transcripts deleted despite high retention settings ([#62272](https://github.com/anthropics/claude-code/issues/62272)) and backend overwrites of user config ([#62901](https://github.com/anthropics/claude-code/issues/62901)) erode confidence in local state management.

- **Desktop resource leaks** — Unreaped subprocesses accumulating to 31 GB RAM ([#61748](https://github.com/anthropics/claude-code/issues/61748)) force periodic restarts and make long-running dispatch workflows impractical.

- **Repetitive permission prompts** — Lack of persistent permission profiles means every new session re-asks for MCP, Bash, and file access ([#30953](https://github.com/anthropics/claude-code/issues/30953)), a daily annoyance for power users.

- **TUI rendering & interaction bugs** — Terminal rendering corruption in VS Code ([#59915](https://github.com/anthropics/claude-code/issues/59915)), mouse tracking breaking text selection on Linux ([#61936](https://github.com/anthropics/claude-code/issues/61936)), and broken file-link navigation in the VS Code panel ([#44713](https://github.com/anthropics/claude-code/issues/44713)) collectively signal that the terminal UI layer needs stabilization.

---

*Digest generated from public GitHub data on 2026-05-28. Issue/PR counts reflect state at time of extraction.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-28

## 1. Today's Highlights
Two new Rust alpha releases (`v0.135.0-alpha.1` and `v0.135.0-alpha.2`) were tagged, signalling an imminent stable bump. The issue tracker is dominated by connectivity and performance regressions in GPT‑5.5 workloads, with OAuth authentication failures and "Fast" mode stalls drawing the most community heat. On the pull‑request side, maintainers merged infrastructure for an independent Python SDK beta release, MCP server status exposure, and a feature‑gated image generation extension—laying groundwork for the next wave of Codex platform capabilities.

---

## 2. Releases

- **[rust-v0.135.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.135.0-alpha.2)**
- **[rust-v0.135.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.135.0-alpha.1)**

Both are pre‑release alpha cuts; no formal changelogs published beyond the version bump. Developers on the bleeding edge should validate against the new `starlark 0.14.0` dependency graph and refreshed advisory configuration introduced in today's PRs.

---

## 3. Hot Issues

1. **[#24665](https://github.com/openai/codex/issues/24665) — OAuth Broken: "NoneType object is not iterable"** · 👍 49 · 💬 31  
   Teams relying on ChatGPT/Codex OAuth (not API keys) are completely blocked. The `NoneType` error suggests a regression in the Hermes auth agent. High 👍 count indicates widespread impact; likely needs a hotfix.

2. **[#24422](https://github.com/openai/codex/issues/24422) — GPT-5.5 Fast feels as slow as Standard** · 👍 24 · 💬 30  
   Over the past two days, GPT-5.5 Fast mode has regressed to Standard‑like latency with long thinking/context/search stalls. Affects basic tasks (10–20 min). Community suspects backend routing or capacity issues.

3. **[#14346](https://github.com/openai/codex/issues/14346) — Context Compaction Hanging** · 👍 20 · 💬 25  
   VS Code extension users on GPT-5.4 Extra High see the context window fill and hang during compaction. Long‑running issue; still reproducible on latest extension.

4. **[#7727](https://github.com/openai/codex/issues/7727) — Add "Delete" option to Task context menu** · 👍 93 · 💬 20  
   Highest 👍 of any open issue this cycle. Users still cannot permanently delete tasks in the VS Code plugin, only cut/copy. Strong community demand for basic task hygiene.

5. **[#24260](https://github.com/openai/codex/issues/24260) — gpt-5.5 xhigh turn stalled 30 min before first output** · 👍 8 · 💬 12  
   Desktop app stalls over 30 minutes on `xhigh` reasoning before producing any visible output, then resumes normally. Points to a streaming/polling gap for long reasoning traces.

6. **[#24373](https://github.com/openai/codex/issues/24373) — Google Drive Sheets connector read-only after reinstall; 429s on shared quota** · 👍 3 · 💬 11  
   Google Drive plugin can read but not write sheets; shared read quota also triggers 429 rate‑limit errors. Signals broken OAuth scopes or quota keying.

7. **[#24269](https://github.com/openai/codex/issues/24269) — /Goal Always Fails** · 👍 5 · 💬 9  
   The new Goal feature always errors out for Pro users. Blocks adoption of a flagship orchestration capability.

8. **[#16911](https://github.com/openai/codex/issues/16911) — Constant MCP Tool approval prompts** · 👍 9 · 💬 7  
   MCP tools repeatedly request approval even after being whitelisted. A persistent UX friction that hurts autonomous agent workflows.

9. **[#24098](https://github.com/openai/codex/issues/24098) — Windows elevated sandbox fails with "spawn setup refresh"** · 👍 0 · 💬 8  
   After CLI update to 0.133.0, elevated Windows sandboxes break while unelevated ones work. Blocks Windows power users who need admin‑level sandboxing.

10. **[#24807](https://github.com/openai/codex/issues/24807) — Feature request: Orchestrator mode toggle for large tasks** · 👍 0 · 💬 2  
    Requests an "Orchestrator mode" alongside Plan mode to keep large engineering tasks from polluting conversation context. Aligns with broader agent‑orchestration trends.

---

## 4. Key PR Progress

| PR | Title | Why It Matters |
|---|---|---|
| [#24828](https://github.com/openai/codex/pull/24828) | Add independent beta release for the Python SDK | Decouples SDK beta lifecycle from the runtime package, enabling faster iteration for Python consumers. |
| [#24723](https://github.com/openai/codex/pull/24723) | Feature-gated standalone image generation extension | Introduces a local image generation path independent of hosted Responses, with fallback to hosted tool. |
| [#24829](https://github.com/openai/codex/pull/24829) | ThreadStore item pagination types | Lays groundwork for efficient paginated item/turn listing in app‑server, improving scalability for long threads. |
| [#24805](https://github.com/openai/codex/pull/24805) | CODEX_ENV_FILE for SessionStart hooks | Lets hooks set PATH, venv, or conda state that persists across subsequent shell tool calls—major DX win. |
| [#15730](https://github.com/openai/codex/pull/15730) | Harden symlinked output and project config writes | Rejects symlinked `--output-last-message` paths and project configs with `O_NOFOLLOW`, mitigating sandbox escape vectors. |
| [#17931](https://github.com/openai/codex/pull/17931) | Encrypted local secrets for keyring auth | Overcomes Windows Credential Manager's 2,560‑byte blob limit for large OAuth/MCP tokens by keeping them encrypted locally. |
| [#24698](https://github.com/openai/codex/pull/24698) | Expose MCP server info as part of server status | Enables richer MCP UX in apps by surfacing server metadata via the app‑server status endpoint. |
| [#19880](https://github.com/openai/codex/pull/19880) | Cancel Windows sandbox on network denial | Fixes Windows sandbox not respecting network denial from Guardian/proxy, preventing silent command continuation. |
| [#14891](https://github.com/openai/codex/pull/14891) | Preserve detached children in Linux sandbox | Allows intentionally detached descendants to survive after the one‑shot helper exits, fixing daemon‑spawning workflows. |
| [#24820](https://github.com/openai/codex/pull/24820) | Update starlark to 0.14.0 | Keeps execpolicy on the current upstream release; significant lockfile churn but necessary for security advisories. |

---

## 5. Feature Request Trends

1. **Agent Orchestration & Large‑Task Modes** — Requests for "Orchestrator mode," `/Goal` reliability fixes, and subagent lifecycle controls dominate. Users want Codex to manage multi‑step engineering workflows without context pollution.

2. **Task & Conversation Management** — The 93‑👍 "Delete task" request (#7727) and thread pagination PRs show demand for better housekeeping: delete, archive, and paginate long threads.

3. **IDE & TUI Power‑User Features** — Vim text objects (`ciw`, `diw`), disable auto‑update, shell‑mode toggle refinements, and LaTeX rendering indicate a maturing power‑user base.

4. **Remote & Mobile Enhancements** — Android/iOS Remote Control history loading, thread sync, and connection reliability requests are increasing as mobile‑driven development grows.

5. **Auth & Secrets Improvements** — Encrypted local secrets, API‑key remote registration, and network diagnostics scaffolding point toward more robust, cross‑platform auth flows.

---

## 6. Developer Pain Points

- **OAuth/Auth Instability** — The OAuth outage (#24665) and keyring size limits on Windows create hard blockers for teams not using API keys. Auth regressions consistently generate the highest engagement.
- **Performance & Latency Regressions** — GPT-5.5 Fast mode stalls (#24422) and 30‑minute xhigh thinking delays (#24260) erode trust. Developers expect deterministic, predictable latency tiers.
- **Stream Disconnections & Timeouts** — Multiple reports of CLI stalls for exactly 300 s (#23807) and streams disconnecting before completion (#24747) suggest backend keep‑alive or gateway issues.
- **Windows Sandbox & CLI Parity** — Elevated sandbox failures (#24098), double‑paste bugs (#21638), and credential size limits highlight continued second‑class treatment of Windows.
- **MCP Repeated Approval Prompts** — The constant re‑approval loop (#16911) undermines the autonomous agent value proposition and is a frequent source of frustration in long‑running sessions.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-28

## 1. Today's Highlights
The Gemini CLI ecosystem sees active stabilization today with the rollout of the **v0.44.0 stable release** and preparations for **v0.45.0** via preview and nightly channels. Major engineering efforts are currently focused on hardening core terminal infrastructure—specifically resolving native PTY resize crashes—and refining the agent memory system to prevent excessive API polling. The community remains highly engaged regarding subagent reliability and the need for AST-aware code analysis.

## 2. Releases
*   **v0.44.0 (Stable):** Introduces a stable baseline, including a major refactor eliminating `no-unsafe` rules, alongside previous nightly patches.
*   **v0.45.0-preview.0:** Includes early fixes for Termux users, preventing relaunch and resize remount loops.
*   **v0.45.0-nightly.20260527:** Bundles the devtools package to avoid module resolution errors and integrates early polling fixes.

## 3. Hot Issues
1.  **Generalist agent hangs indefinitely ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)):** A P1 bug where simple tasks cause the CLI to hang forever when deferring to the generalist agent, forcing users to manually instruct the model to avoid subagents. (👍 8)
2.  **Subagent falsely reports success on `MAX_TURNS` ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)):** A P1 issue where the `codebase_investigator` subagent hits the maximum turn limit but incorrectly reports `status: "success"`, hiding the interruption from the user.
3.  **Shell execution gets stuck awaiting input ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)):** A P1 bug where simple, completed CLI commands remain visually active and hang the interface. (👍 3)
4.  **v0.44.0 PTY Resize Crash ([#27499](https://github.com/google-gemini/gemini-cli/issues/27499)):** A newly reported crash in Unix terminals (`ioctl(2) failed, EBADF`) directly tied to terminal resizing in the latest stable release.
5.  **Gemini ignores custom skills and subagents ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)):** Users report that the CLI will not autonomously use heavily customized skills (e.g., Gradle/Git tools) unless explicitly instructed to do so.
6.  **Auto Memory retries low-signal sessions indefinitely ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)):** The background memory extractor lacks a "processed" flag for low-signal sessions, causing it to repeatedly poll the same transcripts and waste tokens.
7.  **Auto Memory lacks deterministic redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)):** A security concern where secrets are read into model context before the extraction prompt attempts to redact them.
8.  **400 errors with >128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)):** The CLI hits API limits when too many MCP tools are registered, highlighting a need for better dynamic tool filtering.
9.  **Browser subagent fails on Wayland ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)):** The browser agent crashes on Wayland environments, requiring detection and fallback to headless mode. (👍 1)
10. **Agent should prevent destructive behavior ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)):** Users request built-in safety checks to stop the model from executing dangerous commands like `git reset --force` on production databases. (👍 1)

## 4. Key PR Progress
1.  **[OPEN] fix(core): harden PTY resize against native crashes ([#27496](https://github.com/google-gemini/gemini-cli/pull/27496)):** Implements a defense-in-depth strategy to prevent `libc++abi` crashes in `node-pty` when a UI-triggered resize happens during process exit.
2.  **[OPEN] fix(a2a): stop after unsupported metadata listing ([#27101](https://github.com/google-gemini/gemini-cli/pull/27101)):** Fixes a bug where persistent task stores crashed by ensuring an immediate return after a `501` response.
3.  **[OPEN] fix(core): handle multi-line escaped quotes in stripShellWrapper ([#27467](https://github.com/google-gemini/gemini-cli/pull/27467)):** Replaces manual regex with `shell-quote` to reliably extract complex multi-line shell commands.
4.  **[OPEN] fix(cli): include all Executing subagent tool calls in state ([#22590](https://github.com/google-gemini/gemini-cli/pull/22590)):** Improves scheduler state visibility by passing through all executing subagent calls, not just those awaiting approval.
5.  **[MERGED] feat: prompt replay cache ([#27497](https://github.com/google-gemini/gemini-cli/pull/27497)):** Introduces `CachingContentGenerator` to cache identical prompt calls, significantly reducing redundant token usage and speeding up local interactions.
6.  **[MERGED] fix(agents): surface recovered subagent termination reasons ([#22325](https://github.com/google-gemini/gemini-cli/pull/22325)):** Directly addresses Issue #22323 by ensuring recovered subagent runs are no longer masked as clean `GOAL` successes.
7.  **[MERGED] fix: prevent codebase_investigator infinite retry loop ([#23113](https://github.com/google-gemini/gemini-cli/pull/23113)):** Halts infinite schema validation retries when the investigator agent misses required parameters, protecting API quotas.
8.  **[MERGED] fix: allow configured MCP servers in non-interactive mode ([#27215](https://github.com/google-gemini/gemini-cli/pull/27215)):** Enforces a default-DENY posture for MCP tools in headless environments while allowing explicit opt-in auto-approval.
9.  **[MERGED] fix(browser): auto-fallback to headless on Linux ([#23236](https://github.com/google-gemini/gemini-cli/pull/23236)):** Resolves Wayland/Headless crashes by dynamically detecting display servers and falling back safely.
10. **[OPEN] fix(cli): add F10 fallback for approval mode cycling ([#26088](https://github.com/google-gemini/gemini-cli/pull/26088)):** Improves terminal compatibility (especially Windows/WezTerm) where `Shift+Tab` fails, adding F10 as an alternative keybinding.

## 5. Feature Request Trends
*   **AST-Aware Code Navigation:** Strong interest in shifting from regex-based file reads to AST-aware tools (e.g., AST grep, Tilth) for the `codebase_investigator` to reduce token waste and improve precision ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)).
*   **Server-Driven Model Management:** A push to centralize model routing and configuration via `LoadCodeAssist` instead of relying solely on local CLI flags ([#20878](https://github.com/google-gemini/gemini-cli/issues/20878)).
*   **Advanced Agent Self-Awareness:** Requests for the CLI to natively understand its own hotkeys, flags, and mechanics so it can guide users without hallucinating its capabilities ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).

## 6. Developer Pain Points
*   **Agent Reliability & Masking:** Developers are frustrated when subagents hang indefinitely or falsely report success after hitting invisible limits, breaking automation workflows.
*   **Terminal UI Flakiness:** Native crashes on resize (`EBADF`), shell commands getting stuck awaiting input, and external editor corruptions are causing frequent interruptions.
*   **Memory System Chatter:** Auto Memory needs better signal detection; it currently wastes background tokens retrying low-signal sessions and processing malformed patches.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-28

## 1. Today's Highlights
The GitHub Copilot CLI team rolled out a rapid succession of patch releases (up to v1.0.55-6), officially enabling the new cell-based terminal renderer for all users and introducing the highly requested `/autopilot` (aliased as `/goal`) command to keep autonomous sessions focused. Community activity is currently dominated by critical regressions in the 1.0.49+ terminal rendering updates—specifically widespread copy/paste failures on Linux/GNOME Wayland and TUI lag on Windows/Cygwin—and significant friction around context window consumption in heavy MCP/plugin environments. 

## 2. Releases
*   **v1.0.55-6**
    *   **Added:** `/autopilot <objective>` command (with `/goal` as an alias) to keep autopilot focused on specific tasks.
    *   **Improved:** Enabled the cell-based terminal renderer by default for all users; added a warning for when remote-controlled sessions are disabled by org policy; improved extension log capturing.
*   **v1.0.55-5**
    *   **Improved:** MCP configuration now opens in a dedicated screen with scrollable server and tool lists to handle large configurations better.
*   **v1.0.55-4 & v1.0.55-2**
    *   General fixes and changes.
*   **v1.0.55-3**
    *   **Added:** Real-time status messages for long-running hooks in the timeline; support for `pluginDirectories` on `session.create` and `session.resume` RPCs for SDK clients; ability to delete remote sessions directly from the session picker.

## 3. Hot Issues
1.  **[OPEN] Fine-grained tokens missing "Copilot Requests" permission for orgs** ([#223](https://github.com/github/copilot-cli/issues/223)): Highly requested (+72 👍), this issue blocks enterprise users from using org-owned PATs for corporate automations.
2.  **[OPEN] Terminal scrolling usability regression** ([#2205](https://github.com/github/copilot-cli/issues/2205)): Users are frustrated that mouse scrolling navigates inputs instead of the agent's output history, breaking standard terminal workflows.
3.  **[OPEN] Windows/Cygwin TUI lag in tmux** ([#3439](https://github.com/github/copilot-cli/issues/3439)): A rendering regression introduced in v1.0.49 causes severe stuttering and freezing in Windows terminal emulators.
4.  **[OPEN] Copilot CLI fails behind corporate SSL inspection** ([#333](https://github.com/github/copilot-cli/issues/333)): Enterprise users continue to face `fetch failed` errors due to man-in-the-middle proxies, highlighting a significant enterprise adoption blocker.
5.  **[OPEN] Multi-root workspace support missing** ([#1826](https://github.com/github/copilot-cli/issues/1826)): The CLI currently ignores `.code-workspace` files, failing to discover `AGENTS.md` and context from additional workspace folders.
6.  **[CLOSED] Copy/Paste regression on Linux/GNOME Wayland** ([#3414](https://github.com/github/copilot-cli/issues/3414) & [#3395](https://github.com/github/copilot-cli/issues/3395)): A widespread regression in v1.0.49 broke text pasting on Ubuntu Wayland, though community tracking indicates it may be getting patched.
7.  **[CLOSED] Copy stopped working on Ubuntu** ([#3483](https://github.com/github/copilot-cli/issues/3483)): Mouse right-click and standard keyboard shortcuts currently fail to copy text to the clipboard, capturing standard terminal inputs.
8.  **[OPEN] System/Tools consume 73% of context window** ([#3539](https://github.com/github/copilot-cli/issues/3539)): Heavy MCP users report immediate auto-compaction on session start, as built-in tools and servers eat up 146k/200k tokens before the first prompt.
9.  **[OPEN] Unbounded recursive glob causes 30s startup freeze** ([#3543](https://github.com/github/copilot-cli/issues/3543)): Setting `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` to large directories (like `$HOME`) causes a TUI freeze at launch due to unoptimized file scanning.
10. **[OPEN] Response text missing from stdout in non-interactive mode** ([#3544](https://github.com/github/copilot-cli/issues/3544)): Breaking CI/CD automations, the CLI renders output to the TUI buffer instead of stdout when using the `-p` flag.

## 4. Key PR Progress
*Note: There were 0 pull requests updated in the data source for the last 24 hours. Development focus appears to be entirely on the rapid v1.0.55 patch releases.*

## 5. Feature Request Trends
*   **Deep IDE Integration:** Users strongly desire the CLI to natively respect VS Code user settings and multi-root workspace configurations (`.code-workspace`), aiming for a seamless transition between editor and terminal ([#146](https://github.com/github/copilot-cli/issues/146), [#1826](https://github.com/github/copilot-cli/issues/1826)).
*   **Advanced Agent & Plugin Customization:** Developers are pushing for Claude-style cross-CLI tool compatibility and agent profiles that can preload specific skills via YAML frontmatter ([#3531](https://github.com/github/copilot-cli/issues/3531), [#3532](https://github.com/github/copilot-cli/issues/3532)).
*   **Frictionless Plugin Lifecycle Management:** Users want automatic plugin updates in the CLI to reduce manual maintenance and avoid running outdated extensions ([#2734](https://github.com/github/copilot-cli/issues/2734)).

## 6. Developer Pain Points
*   **Terminal Rendering & Input Regressions:** The recent updates to the TUI and mouse-handling have broken core clipboard operations (copy/pasting) across Linux Wayland and WSL2 ([#3483](https://github.com/github/copilot-cli/issues/3483), [#3534](https://github.com/github/copilot-cli/issues/3534), [#2205](https://github.com/github/copilot-cli/issues/2205)).
*   **Context Window Bloat:** Advanced users combining multiple MCP servers and plugins are finding the 200k context tier insufficient, as system prompts crowd out user prompts and trigger aggressive, unwanted auto-compaction ([#3539](https://github.com/github/copilot-cli/issues/3539)).
*   **Non-Interactive/CI Mode Instability:** Programmatic execution is currently unreliable. Windows users face silent crashes when piping outputs ([#3188](https://github.com/github/copilot-cli/issues/3188)), while Unix users find responses missing from stdout entirely in `-p` mode ([#3544](https://github.com/github/copilot-cli/issues/3544)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-28

## 1. Today's Highlights
Kimi CLI rolled out version **v1.45.0**, featuring a misleading quota error fix and significant improvements to toolset deduplication. The community is highly engaged with the platform's architectural transition, proposing advanced networking solutions like HTTP abort signal propagation and API key pooling for subagents. Meanwhile, maintainers have initiated a formal deprecation and migration workflow, actively merging documentation banners and notices to guide users toward the new TypeScript rewrite, `kimi-code`.

## 2. Releases
*   **[v1.45.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.45.0)**
    *   **Bug Fix:** Resolved a misleading "Quota exceeded" prefix that appeared on all 403 errors ([PR #2342](https://github.com/MoonshotAI/kimi-cli/pull/2342) by @liruifengv).
    *   **Feature:** Improved toolset deduplication using sparse reminders and canonical arguments ([PR #23](https://github.com/MoonshotAI/kimi-cli/pull/23) by @jackfish212).

## 3. Hot Issues
*   **[#2375](https://github.com/MoonshotAI/kimi-cli/issues/2375) - Propagate abort signal to HTTP fetch layer:** Users are experiencing delayed cancellations because the current stop mechanism is cooperative-only. Propagating the abort signal directly to the HTTP fetch layer would allow instant stream cancellation.
*   **[#2368](https://github.com/MoonshotAI/kimi-cli/issues/2368) - Foreground subagents exhaust API rate limits:** Running concurrent foreground subagents causes severe rate-limit contention and 429 errors, highlighting a bottleneck in the current single API key architecture.
*   **[#2376](https://github.com/MoonshotAI/kimi-cli/issues/2376) - Add deprecation banner for TypeScript rewrite:** With the Python-based CLI being superseded by `kimi-code`, the community requests clear VitePress deprecation banners to redirect users to the new documentation.
*   **[#1623](https://github.com/MoonshotAI/kimi-cli/issues/1623) - Kimi Web random refreshes:** An ongoing, highly upvoted bug where the web interface randomly refreshes, disrupting developer workflows and overall user experience.
*   **[#1774](https://github.com/MoonshotAI/kimi-cli/issues/1774) - `@mention` file path error:** A closed bug report regarding path resolution errors when using `@mention` in the Kimi Web UI within the home directory.

## 4. Key PR Progress
*   **[#2369](https://github.com/MoonshotAI/kimi-cli/pull/2369) [OPEN] - API key pool for subagents:** Directly addressing issue #2368, this PR introduces a round-robin `APIKeyPool` allocator to allow parallel subagent execution without rate-limit bottlenecks.
*   **[#2377](https://github.com/MoonshotAI/kimi-cli/pull/2377) [CLOSED] - Evolution to Kimi Code successor:** Merged a comprehensive set of migration notices and a dismissible site-top banner across VitePress docs and README to announce the TypeScript `kimi-code` transition.
*   **[#2378](https://github.com/MoonshotAI/kimi-cli/pull/2378) [CLOSED] - Docs router redirect fix:** Fixed the documentation landing page auto-redirect by correctly implementing `useRouter()` and `withBase()` for GitHub Pages subpath compatibility.
*   **[#2350](https://github.com/MoonshotAI/kimi-cli/pull/2350) [OPEN] - Tolerate non-UTF8 worker output:** Resolves a crash on Windows where child processes emitting locale-encoded bytes (like cp1252) caused `UnicodeDecodeError`s, replacing strict decoding with error-tolerant handling.
*   **[#1637](https://github.com/MoonshotAI/kimi-cli/pull/1637) [OPEN] - Route MCP server log notifications:** Cleans up the TUI by intercepting MCP server log notifications (e.g., from SearXNG) and routing them through `loguru` instead of dumping them into the user's interface.
*   **[#2335](https://github.com/MoonshotAI/kimi-cli/pull/2335) [OPEN] - Fix Notification hook matcher example:** Improves developer documentation by replacing a non-functional `permission_prompt` hook example with functional background-task notification types.

## 5. Feature Request Trends
*   **Robust Concurrency & Rate Limiting:** Developers are actively utilizing subagents for parallel tasks but hitting API boundaries. There is a strong demand for native, intelligent rate-limit distribution, API key pooling, and concurrency management.
*   **Real-time Network Control:** A trend towards lower-level HTTP stream management is emerging, with requests for instant abort signals to bypass cooperative cancellation, reflecting a need for snappier, user-controlled UX.
*   **Smarter Tooling Deduplication:** The focus on toolset improvements (seen in v1.45.0) indicates an ongoing trend to optimize LLM context windows by removing redundant tool calls and arguments.

## 6. Developer Pain Points
*   **Platform Transition Confusion:** With the Python CLI entering maintenance mode in favor of the TypeScript rewrite, developers are encountering fractured documentation and require clear, unified migration paths.
*   **Cross-Platform Encoding Crashes:** Windows developers continue to face hidden worker failures due to strict UTF-8 decoding assumptions, causing friction in non-English or legacy terminal environments.
*   **Noisy UI Logs:** Unwanted background process logs (like MCP server info) bleeding into the TUI creates visual clutter, forcing developers to sift through internal system noise to find relevant task outputs.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-28

Here is the technical digest for the OpenCode project over the last 24 hours.

## 1. Today's Highlights
OpenCode shipped version **v1.15.11**, introducing a configurable `headerTimeout` for provider requests and experimental push-based updates for background agents. However, the new default 10-second timeout has already triggered a wave of regressions for slower OpenAI endpoints, dominating today's issue tracker. Meanwhile, the contributor community remains highly active, submitting critical fixes for Windows file watcher crashes, structured output retries, and config override hierarchies.

## 2. Releases
*   **v1.15.11**
    *   **Core Improvements:** Added a `headerTimeout` configuration for provider requests (defaulting to 10s for OpenAI setups). Experimental background agents now push updates without polling.
    *   **Configuration:** Users can now set only `modalities.input` or `modalities.output` (contributor: @robposch).

## 3. Hot Issues
1.  **[GPT Models takes too long to respond](https://github.com/anomalyco/opencode/issues/29079) (#29079):** Users report extreme latency variations with GPT-5.4 (xhigh). This gathered 94 comments and 46 thumbs-ups, highlighting general concerns about OpenAI endpoint reliability and routing.
2.  **[OpenAI provider headers timeout after 10000ms on 1.15.11](https://github.com/anomalyco/opencode/issues/29548) (#29548):** A direct regression from today's release. The new default `headerTimeout` is too aggressive for some network setups, though users confirmed it is easily fixed via config adjustment.
3.  **[DeepSeek V4 Pro reasoning_content error](https://github.com/anomalyco/opencode/issues/24569) (#24569) / [Not preserved across tool calls](https://github.com/anomalyco/opencode/issues/28945) (#28945):** DeepSeek continues to drop `reasoning_content` during tool calls, resulting in HTTP 400 errors. The community is actively tracking this across multiple issues.
4.  **[v1.15.1+ Breaks Bun Installs](https://github.com/anomalyco/opencode/issues/27906) (#27906):** OpenCode's reliance on `postinstall` lifecycle scripts continues to block global installations via Bun and other restricted package managers.
5.  **[Desktop task execution interrupted on Windows](https://github.com/anomalyco/opencode/issues/29589) (#29589):** Windows users are experiencing severe stability issues with active tasks crashing due to invalid file watcher handles and `undici` termination errors.
6.  **[Custom OpenAI-compatible providers fail with image attachments](https://github.com/anomalyco/opencode/issues/20802) (#20802):** Vision-capable models on custom providers are not receiving image attachments correctly via the session API.
7.  **[Shift+Enter keybinding not working](https://github.com/anomalyco/opencode/issues/1505) (#1505) / [#16043](https://github.com/anomalyco/opencode/issues/16043):** A highly requested UX fix (100 👍). Users on macOS (especially Ghostty + tmux) cannot insert newlines via `Shift+Return`, having to rely on `Ctrl+J` instead.
8.  **[format.json_schema.retryCount is ignored](https://github.com/anomalyco/opencode/issues/25430) (#25430):** Structured output requests fail immediately instead of retrying when the model outputs invalid JSON.
9.  **[opencode run fails when OPENCODE_SERVER_PASSWORD is set](https://github.com/anomalyco/opencode/issues/24204) (#24204):** CLI headless execution fails to authenticate correctly when server auth environment variables are present.
10. **[Kimi K2.6 reasoning_content missing](https://github.com/anomalyco/opencode/issues/29619) (#29619):** Similar to the DeepSeek issues, Moonshot AI's K2.6 fails during tool calls when thinking mode is enabled.

## 4. Key PR Progress
1.  **[fix(session): handle undici TypeError:terminated and retry file watcher (Windows)](https://github.com/anomalyco/opencode/pull/29627) (#29627):** Directly addresses the critical Windows interrupt bug (#29589) by fixing file watcher subscriptions and undici crashes.
2.  **[fix(session): respect format.retryCount and fix OutputFormat encoding](https://github.com/anomalyco/opencode/pull/29632) (#29632):** Resolves the structured output failure (#25430) by wiring up the retry logic for invalid JSON schema responses.
3.  **[fix(cli): authenticate run in-process server requests](https://github.com/anomalyco/opencode/pull/24205) (#24205):** Fixes the headless CLI crash (#24204) when `OPENCODE_SERVER_PASSWORD` is enabled.
4.  **[feat(provider): implement dynamic model discovery for OpenRouter](https://github.com/anomalyco/opencode/pull/27382) (#27382):** A massive improvement replacing the static `models.dev` list with dynamic fetching, solving numerous model compatibility issues.
5.  **[fix(opencode): project .opencode/ config now overrides global](https://github.com/anomalyco/opencode/pull/25121) (#25121):** Fixes a config merge logic error so local project settings correctly take precedence over `~/.opencode` globals.
6.  **[fix(opencode): preserve reasoning providerMetadata across model switches](https://github.com/anomalyco/opencode/pull/23104) (#23104):** Crucial fix for agentic workflows, ensuring Anthropic thinking blocks aren't stripped when models are swapped mid-session.
7.  **[fix(auth): treat corrupted auth.json as empty instead of crashing](https://github.com/anomalyco/opencode/pull/29562) (#29562):** Improves client resilience by gracefully handling corrupted auth states from interrupted disk writes.
8.  **[feat(config): load commands from .agents](https://github.com/anomalyco/opencode/pull/27973) (#27973):** Extends custom agent capabilities by discovering slash commands from `.agents/commands/**/*.md`.
9.  **[fix(transform): skip trailing assistant messages in applyCaching for GitHub Copilot](https://github.com/anomalyco/opencode/pull/29609) (#29609):** Fixes a caching bug where Copilot gateway requests failed due to provider options being stamped on the wrong message role.
10. **[fix(acp): include shell command and file path in permission prompts](https://github.com/anomalyco/opencode/pull/28921) (#28921):** Great UX improvement for security/ACP permissions, showing users exactly what file or shell command is requesting access.

## 5. Feature Request Trends
*   **Native Provider Integrations:** High demand for built-in authentication support for emerging AI coding assistants and hosts, specifically CommandCode (#26338), Kimi / Moonshot AI (#12156), and various free-tier proxy gateways.
*   **MCP & Agent Enhancements:** Users want deeper Model Context Protocol integration, specifically asynchronous MCP server loading to speed up cold starts (#20755), and the ability for MCP resource reading (#29245). Plugin hooks injecting AI-visible context is also highly requested (#17412).
*   **Real-time & Streaming Upgrades:** A continued push to deprecate REST approaches in favor of WebSockets, specifically requesting support for OpenAI's Realtime API (#14891).

## 6. Developer Pain Points
*   **Reasoning Token/Content Handling:** The absolute most frustrating issue right now for developers using advanced models is handling `reasoning_content`. Providers like DeepSeek and Kimi mandate it be passed back to the API, but OpenCode frequently drops it during tool calls or model switches, breaking complex agentic workflows.
*   **Timeout & Latency Defaults:** The hard-coded 10-second OpenAI timeout default caught many users off-guard today, pointing to a need for smarter, auto-scaling timeout thresholds based on the model or provider type.
*   **Package Manager Friction:** The reliance on `postinstall` scripts remains a significant hurdle for users of modern, security-first package managers like Bun.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-28

## 1. Today's Highlights
Pi rolls out **v0.76.0**, introducing explicit `--session-id` flags for robust automation workflows and an RPC-level `excludeFromContext` flag to keep bash outputs out of your model's context window. Alongside the release, the community saw a massive surge in contributions, with core maintainers merging long-awaited fixes for TUI keyboard protocol issues, provider metadata corrections for GPT-5.5, and critical fixes for model configuration leaking across global project settings.

## 2. Releases
- **v0.76.0**
  - **Explicit Session IDs for Automation:** Added a `--session-id <id>` CLI flag allowing scripts to create or resume an exact project-local session deterministically.
  - **RPC Context Control:** RPC clients can now pass `excludeFromContext` to the `bash` command, preventing tool outputs from consuming valuable model context limits.

## 3. Hot Issues
1. **[#4945](https://github.com/earendil-works/pi/issues/4945) [OPEN] OpenAI Codex hangs on `Working...`**: Users report `gpt-5.5` leaving the interactive TUI stuck with zero usage and no streamed text, forcing aborted turns. (👍 21, Comments: 37)
2. **[#3357](https://github.com/earendil-works/pi/issues/3357) [OPEN] Official local LLM provider extension**: A highly requested feature (👍 33) to dynamically fetch model lists from a `baseUrl`, vastly improving hookups to `llama.cpp`, `ollama`, and `LM Studio`.
3. **[#3259](https://github.com/earendil-works/pi/issues/3259) [OPEN] Regression: Shift+Enter inside Zellij**: A persistent TUI bug where `Shift+Enter` fails to insert a newline when Pi runs inside the Zellij terminal multiplexer. (Comments: 16)
4. **[#4874](https://github.com/earendil-works/pi/issues/4874) [CLOSED] Allow CLI callers to provide session ID**: Directly resolved by today's v0.76.0 release, this issue highlighted the need for programmatic session naming. 
5. **[#5087](https://github.com/earendil-works/pi/issues/5087) [CLOSED] OpenAI GPT-5.5 context window capped at 272K**: Pi was incorrectly capping `gpt-5.5` at 272K tokens instead of the actual 1,050,000-token limit.
6. **[#5089](https://github.com/earendil-works/pi/issues/5089) [CLOSED] Doesn't respect `timeoutMs` past a certain value**: Users running heavy local LLMs on CPUs found that long reads breach timeouts, exposing limits in Pi's internal timeout handling.
7. **[#2023](https://github.com/earendil-works/pi/issues/2023) [OPEN] Add `pi.runWhenIdle()` to schedule work**: Developers want a reliable API to trigger actions (like runtime reloads) only after the LLM agent has fully settled. (Comments: 11)
8. **[#4160](https://github.com/earendil-works/pi/issues/4160) [CLOSED] Pi extensions do not play nice with Bun**: Highlighted a hard dependency on `npm` for extension installation, creating friction for users running purely Bun-based environments.
9. **[#5039](https://github.com/earendil-works/pi/issues/5039) [CLOSED] Extend `bash` RPC command for `excludeFromContext`**: A direct counterpart to today's v0.76.0 feature request, enabling extensions to run hidden bash commands.
10. **[#5040](https://github.com/earendil-works/pi/issues/5040) [OPEN] `PI_CODING_AGENT_SESSION_DIR` forces flat storage**: Setting a custom session directory breaks expected nesting, causing Pi to list sessions from all projects globally rather than scoping them.

## 4. Key PR Progress
1. **[#5076](https://github.com/earendil-works/pi/pull/5076) [CLOSED] feat(session): Explicit session id naming**: Implements the `--session-id` flag (matching `--session` prefix behavior) to close #4874.
2. **[#5091](https://github.com/earendil-works/pi/pull/5091) [OPEN] fix(tui): harden keyboard protocol negotiation**: Submitted by `mitsuhiko`, this aims to permanently resolve the frustrating Zellij `Shift+Enter` regression (#3259).
3. **[#5086](https://github.com/earendil-works/pi/pull/5086) [CLOSED] Fix OpenAI GPT-5.5 context window**: Updates model metadata to correctly allow the 1.05M token context limit for `gpt-5.5`.
4. **[#5071](https://github.com/earendil-works/pi/pull/5071) [CLOSED] fix(coding-agent): save enabledModels to project settings**: Fixes a settings leak where model preferences saved via `pi update` were globally applied across all local projects.
5. **[#5060](https://github.com/earendil-works/pi/pull/5060) [CLOSED] feat(ai): add custom fetch hook**: Implements an optional `fetch` field in StreamOptions, enabling custom HTTP routing for enterprise proxy setups.
6. **[#5050](https://github.com/earendil-works/pi/pull/5050) [CLOSED] fix: propagate setModel/setThinkingLevel to running agent loop**: Fixes a bug where extensions changing models mid-loop wouldn't take effect until the next user prompt.
7. **[#4979](https://github.com/earendil-works/pi/pull/4979) [CLOSED] fix(codex): timeouts for websockets**: Adds forced timeouts and mimics Codex's strict connection behavior to mitigate the Codex hanging issue (#4945).
8. **[#5090](https://github.com/earendil-works/pi/pull/5090) [CLOSED] feat: add NVIDIA NIM provider**: Adds native NVIDIA NIM support as an OpenAI-compatible provider within `packages/ai`.
9. **[#5067](https://github.com/earendil-works/pi/pull/5067) [CLOSED] fix(tui): preserve ASCII punctuation word boundaries**: Uses `Intl.Segmenter` to ensure proper text cursor movement (e.g., stopping at `.` and `:`).
10. **[#5085](https://github.com/earendil-works/pi/pull/5085) [OPEN] Expose full tool definitions from getAllTools**: Proposes giving read-only copies of full tool definitions directly to extensions for better dynamic introspection.

## 5. Feature Request Trends
- **Deep Local/Cloud Model Flexibility**: Users are pushing hard for native integrations with local servers (Ollama, LM Studio) and specialized cloud providers (NVIDIA NIM, Anthropic on Vertex AI), requesting dynamic model fetching and custom `fetch` hooks for complex routing.
- **Robust Automation & CI/CD Integrations**: Programmatic control is highly sought after. Features like explicit session IDs, idle-triggered hooks (`runWhenIdle`), and structured tool calling indicate users are embedding Pi deeper into automated pipelines.
- **Context Window Management**: As context limits expand (e.g., GPT-5.5's 1M+ tokens), developers want finer control over context pollution, sparking requests to exclude specific tool outputs or strip system prompt documentation.

## 6. Developer Pain Points
- **Agent Hanging & Timeouts**: Interactive sessions locking up (especially with OpenAI Codex) and strict WebSocket timeouts are causing broken workflows.
- **Terminal Multiplexer Quirks**: Running Pi inside modern terminal environments like Zellij continues to break keyboard inputs, creating friction for power users.
- **Runtime Environment Lock-in**: Node/npm assumptions under the hood block developers attempting to adopt alternative runtimes like Bun.
- **Global State Leakage**: Settings like `enabledModels` or `SESSION_DIR` unexpectedly polluting global scopes rather than staying localized to active projects.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-28

## 1. Today's Highlights
Qwen Code shipped **v0.16.2** alongside its preview and nightly tracks, focusing on build stability by resolving a persistent TypeScript 5055 compilation error. The community saw a massive surge in architectural activity surrounding **Daemon Mode**, with multiple pull requests submitted to introduce server-side shell execution, OpenTelemetry tracing, and MCP server bridging. Meanwhile, Windows users continue to report environment and rendering friction, prompting ongoing discussions about terminal integration and UI flickering.

## 2. Releases
* **v0.16.2**, **v0.16.1-preview.0**, and **v0.16.1-nightly.20260527** were released.
  * **Key Change:** All three releases include a build fix that cleans stale outputs before `tsc --build` to prevent the `TS5055` error. ([PR #4453](https://github.com/QwenLM/qwen-code/pull/4453) by @doudouOUC).

## 3. Hot Issues
1. **OOM Crashes under Heavy Load** ([#4276](https://github.com/QwenLM/qwen-code/issues/4276)): A critical performance bug where GC gets stuck and the Node.js process crashes at ~4GB memory. Highly relevant for users working on large codebases.
2. **Windows CMD vs. PWSH Environment** ([#4562](https://github.com/QwenLM/qwen-code/issues/4562)): The CLI defaults to `cmd.exe` on Windows, breaking commands like `ls`. Users are requesting native PowerShell support.
3. **Rider IDE OAuth Login Loop** ([#4493](https://github.com/QwenLM/qwen-code/issues/4493)): JetBrains Rider users are caught in an infinite redirect loop when attempting to authenticate via Alibaba Cloud.
4. **CLI Suicides via `taskkill`** ([#4537](https://github.com/QwenLM/qwen-code/issues/4537)): A bad-case scenario where the AI agent runs `taskkill /F /IM node.exe` to restart a Vite server, inadvertently killing the Qwen CLI process itself and wiping session state.
5. **Google Authentication 504 Timeouts** ([#4317](https://github.com/QwenLM/qwen-code/issues/4317)): Users are experiencing persistent `504 Gateway Time-out` errors when polling for device tokens via Google OAuth.
6. **Flickering in Compact Mode** ([#4561](https://github.com/QwenLM/qwen-code/issues/4561)): On Windows, the compact rendering mode (which hides the thinking process) causes severe screen flickering during task execution.
7. **WinkTerm Remote Terminal Integration** ([#4566](https://github.com/QwenLM/qwen-code/issues/4566)): A proposal to integrate WinkTerm's Agent API for "human-in-the-loop" remote SSH/terminal sessions sharing the same PTY as the AI.
8. **Misleading "Compressed Turn" Error** ([#4579](https://github.com/QwenLM/qwen-code/issues/4579)): Using the `--continue` flag with mid-turn messages triggers a false error preventing users from rewinding the session.
9. **Missing Files in Submodule `@` Completion** ([#4568](https://github.com/QwenLM/qwen-code/issues/4568)): When using `@` to reference files, the autocomplete shows submodule directories but fails to list the files inside them.
10. **Inconsistent Command Substitution Security** ([#4093](https://github.com/QwenLM/qwen-code/issues/4093)): Shell security checks for command substitutions (`$()`) are applied inconsistently, creating opaque execution blocks for agents.

## 4. Key PR Progress
1. **feat(daemon): Server-side shell command execution** ([PR #4576](https://github.com/QwenLM/qwen-code/pull/4576)): Implements the `POST /session/:id/shell` route, allowing direct shell execution in daemon mode via `!` prefix without routing through the LLM.
2. **refactor(serve): Extract DaemonWorkspaceService** ([PR #4563](https://github.com/QwenLM/qwen-code/pull/4563)): Major architectural refactor extracting workspace capabilities into a `DaemonWorkspaceService` facade to decouple HTTP routing from session management.
3. **feat(serve): Runtime MCP server add/remove** ([PR #4552](https://github.com/QwenLM/qwen-code/pull/4552)): Adds mutate-gated HTTP routes to dynamically add or replace MCP servers in the daemon registry without requiring a restart.
4. **feat(sdk): Add serve-bridge MCP server** ([PR #4555](https://github.com/QwenLM/qwen-code/pull/4555)): Introduces a `qwen-serve-bridge` enabling MCP-compatible clients (Claude Desktop, Cursor) to interact with the qwen-code agent via stdio.
5. **feat(skill): Add `/triage` skill** ([PR #4570](https://github.com/QwenLM/qwen-code/pull/4570)): Adds a dedicated skill for AI-native PR admission and automated issue triage directly within the CLI.
6. **feat(stats): Expose token usage for cost visibility** ([PR #4564](https://github.com/QwenLM/qwen-code/pull/4564)): Implements persistent token accounting, allowing users to view daily/monthly usage and export data via the `/stats` command.
7. **fix(core): Preserve uid/gid in atomicWriteFile** ([PR #4431](https://github.com/QwenLM/qwen-code/pull/4431)): Fixes a POSIX issue where atomic file writes silently stripped original `uid`/`gid`, breaking shared-write files and Docker bind mounts.
8. **feat(telemetry): Trace daemon prompt lifecycle** ([PR #4556](https://github.com/QwenLM/qwen-code/pull/4556)): Integrates OpenTelemetry context propagation across daemon HTTP routes and ACP prompt dispatch for better distributed tracing.
9. **fix(core): Guard oversized resumed history sends** ([PR #4531](https://github.com/QwenLM/qwen-code/pull/4531)): Adds a hard token-limit guard for resumed sessions to prevent context overflow from inaccurate compression records.
10. **feat(web-shell): Context-usage API + dialog UX** ([PR #4573](https://github.com/QwenLM/qwen-code/pull/4573)): Implements a full pipeline for the daemon web-shell to report context window usage and refactors the web UI dialog experience.

## 5. Feature Request Trends
* **Daemon Mode Enhancements:** A clear trajectory towards persistent background services, including requests for a Web UI, remote SSH agent integration (WinkTerm), and session task snapshots.
* **Better Local/Small Model Support:** Continued community demand for a "lite mode" that enables CLI agentic workflows on smaller models (e.g., qwen3-4b) deployed on resource-constrained machines.
* **Deep CI/CD Integration:** High interest in GitHub Actions compatibility and AI-native PR management workflows (e.g., the new `/triage` and `/simplify` skill requests).
* **Granular Cost & Telemetry Controls:** Users are actively requesting better visibility into token consumption and strict OpenTelemetry standards for tracing complex multi-step agent operations.

## 6. Developer Pain Points
* **Windows Friction:** Windows remains a problematic environment. Users are frustrated by hard-coded `cmd.exe` defaults, broken shell commands, and severe UI flickering in compact rendering mode.
* **Authentication Instability:** OAuth login flows (especially Google and JetBrains Rider) are fragile, with users frequently locked out by 504 timeouts or infinite redirect loops.
* **Reckless Shell Commands:** The AI's ability to execute broad shell commands (like `taskkill /F /IM node.exe` or command substitutions) without safety guardrails causes spontaneous CLI crashes and lost progress.
* **Context Management Edge Cases:** Resuming sessions and rewinding turns frequently result in false errors or oversized context payloads, breaking the continuity of long-term coding sessions.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the community digest for 2026-05-28.

## 1. Today's Highlights
CodeWhale (formerly DeepSeek-TUI) officially released **v0.8.47**, introducing a Verification Gate, Goal Tools, DuckDuckGo as the default search, and the long-awaited project rebrand. The legacy `deepseek` binaries currently ship as deprecation shims but will be entirely removed in v0.9.0. The community and core team remain highly active, with substantial architectural refactoring, new third-party provider support, and critical TUI rendering fixes dominating the latest PRs and issues.

## 2. Releases
- **[v0.8.47](https://github.com/Hmbown/CodeWhale/releases/)**: Brought online the Verification Gate and Goal Tools, and switched the default search engine to DuckDuckGo. Crucially, this release renames the project to **CodeWhale**. The legacy `deepseek` and `deepseek-tui` binaries will print a deprecation warning and forward to `codewhale` for one release cycle before being dropped completely in v0.9.0.

## 3. Hot Issues
1. **[Docker pulling causes gibberish/crash #1615](https://github.com/Hmbown/CodeWhale/issues/1615)**: Users are experiencing severe terminal breakdowns and server hangs when running the Docker image with custom APIs, accumulating 190 comments and reflecting major frustrations with container stability.
2. **[ctrl+C cancel and reinput #1757](https://github.com/Hmbown/CodeWhale/issues/1757)**: A highly requested UX enhancement to restore input text after canceling a generation request (Ctrl+C), solving the pain point of terminal text selection and copying.
3. **[Homebrew distribution fails: `codewhale` not found #2104](https://github.com/Hmbown/CodeWhale/issues/2104)**: A fall-out from the v0.8.47 rebrand where Homebrew upgrades are failing to add the new `codewhale` binary to the PATH.
4. **[Dual Mode proposal #1676](https://github.com/Hmbown/CodeWhale/issues/1676)**: A popular architectural proposal to route reasoning tasks to `deepseek-v4-pro` and tool execution to `deepseek-v4-flash` to optimize performance and reduce token costs.
5. **[PowerShell input leak on crash #2261](https://github.com/Hmbown/CodeWhale/issues/2261)**: During a TUI process crash on Windows, user input is leaking out of the TUI sandbox directly into the host PowerShell, creating a severe security and execution hazard.
6. **[Sub-agent fanout saturates TUI #2211](https://github.com/Hmbown/CodeWhale/issues/2211)**: Highlighted by the maintainer as a release blocker, background sub-agents and shell work are compounding to hit the max-agents limit, freezing the TUI during heavy tasks.
7. **[Systematic prefix-cache stability #2264](https://github.com/Hmbown/CodeWhale/issues/2264)**: A deep-dive proposal requesting the system to enforce strict prefix-cache invariant rules, inspired by `deepseek-reasonix`'s 99%+ cache hit architecture to lower costs.
8. **[Shell hardcoded to cmd.exe #1779](https://github.com/Hmbown/CodeWhale/issues/1779)**: Windows users are frustrated that the tool ignores PowerShell/WSL preferences, hardcoding `cmd.exe /C` which strips quotes and breaks complex command execution.
9. **[Large paste hangs TUI #2159](https://github.com/Hmbown/CodeWhale/issues/2159)**: Pasting large blocks of text triggers an automatic, but fatal, conversion to the `@file` syntax causing the TUI to freeze completely.
10. **[Premature new version banner #2254](https://github.com/Hmbown/CodeWhale/issues/2254)**: The static "v0.8.47 available" status bar banner overrides custom user cost displays and cannot be dismissed, disrupting established workflows.

## 4. Key PR Progress
1. **[feat: add Xiaomi MiMo provider support #2240](https://github.com/Hmbown/CodeWhale/pull/2240)**: Introduces first-class support for Xiaomi's MiMo models via a dedicated token-plan API endpoint, highlighting expanding provider diversity.
2. **[feat(permissions): add typed persistent tool permission rules #2242](https://github.com/Hmbown/CodeWhale/pull/2242)**: Implements an end-to-end typed permission system for tool execution, allowing users to set persistent `allow`, `deny`, or `ask` policies based on tool names and paths.
3. **[feat(shell_dispatcher): isolate shell dispatcher layer #2290](https://github.com/Hmbown/CodeWhale/pull/2290)**: The foundational PR for solving the Windows `cmd.exe` hardcoding issue, establishing a shell-agnostic dispatcher for sandbox and foreground command execution.
4. **[fix(engine): recover from stalled in-progress turns #2283](https://github.com/Hmbown/CodeWhale/pull/2283)**: Fixes a critical watchdog blind spot where a stalled turn left the TUI in a permanent loading state by adding a 5-minute stall timeout recovery mechanism.
5. **[feat(tui): independent scroll regions #2113](https://github.com/Hmbown/CodeWhale/pull/2113)**: Splits the chat area into independently scrolling conversation and tool output regions, vastly improving UX during complex agent operations.
6. **[feat: add account balance status bar item #2257](https://github.com/Hmbown/CodeWhale/pull/2257)**: Carries over previous work to display DeepSeek account balance directly in the TUI footer via an opt-in configuration.
7. **[feat(cache): surface prefix hash drift #2289](https://github.com/Hmbown/CodeWhale/pull/2289)**: Adds telemetry and warnings to the TUI when the stable prefix hash changes between turns, directly addressing the push for better cache stability.
8. **[fix(tui): suppress verbose CLI logging on Windows alt-screen #2295](https://github.com/Hmbown/CodeWhale/pull/2295)**: A clean replacement PR resolving issues where verbose `stderr` logs leak into the Windows alternate screen buffer.
9. **[feat: add Claude theme #2267](https://github.com/Hmbown/CodeWhale/pull/2267)**: Adds a 9th preset theme to the TUI aligning with the aesthetic color palette of Anthropic's Claude Code.
10. **[feat(update): add check-only release diagnostics #2291](https://github.com/Hmbown/CodeWhale/pull/2291)**: Introduces a non-destructive `update --check` flag to verify if the installed binary is current without triggering an actual upgrade.

## 5. Feature Request Trends
- **Multi-Provider & Multi-Model Routing**: The community strongly desires flexible provider support (Issue [#2247](https://github.com/Hmbown/CodeWhale/issues/2247)) and intelligent dual-model routing strategies (Issue [#1676](https://github.com/Hmbown/CodeWhale/issues/1676)) to balance cost and reasoning power.
- **Shell & OS Parity**: There is a major push to modernize the shell execution layer, specifically demanding native PowerShell/WSL support on Windows (Issue [#1779](https://github.com/Hmbown/CodeWhale/issues/1779)) and better macOS binary verification handling (Issue [#2052](https://github.com/Hmbown/CodeWhale/issues/2052)).
- **Context & Session Resilience**: Users want better handling of session states, highlighted by requests for a `/new` command to properly reset sessions (Issue [#2234](https://github.com/Hmbown/CodeWhale/issues/2234)) and robust input recovery on cancellation (Issue [#1757](https://github.com/Hmbown/CodeWhale/issues/1757)).
- **Cost Visibility**: Tracking API expenditure is a high priority, evident from the requests for prefix-cache optimization (Issue [#2264](https://github.com/Hmbown/CodeWhale/issues/2264)) and visible balance/cost tracking in the status line (Issue [#2254](https://github.com/Hmbown/CodeWhale/issues/2254), Issue [#1871](https://github.com/Hmbown/CodeWhale/issues/1871)).

## 6. Developer Pain Points
- **Rebranding Friction**: The transition to CodeWhale is causing immediate upgrade friction, particularly breaking Homebrew installations (Issue [#2104](https://github.com/Hmbown/CodeWhale/issues/2104)) and triggering unwanted, static upgrade banners that override user UIs (Issue [#2254](https://github.com/Hmbown/CodeWhale/issues/2254)).
- **TUI Input State Vulnerability**: Developers are frequently encountering bugs where the TUI fails to properly capture or relinquish input focus, resulting in text executing raw commands in the host terminal (Issue [#2261](https://github.com/Hmbown/CodeWhale/issues/2261)) or losing copied text.
- **UI Rendering Limits**: The TUI struggles with heavy workloads and large payloads. Sub-agents easily max out the sidebar limits during standard release work (Issue [#2211](https://github.com/Hmbown/CodeWhale/issues/2211)), long outputs are obscured by the status line (Issue [#2244](https://github.com/Hmbown/CodeWhale/issues/2244)), and large copy-pastes crash the interface (Issue [#2159](https://github.com/Hmbown/CodeWhale/issues/2159)).

</details>