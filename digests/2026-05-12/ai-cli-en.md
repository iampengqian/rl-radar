# AI CLI Tools Community Digest 2026-05-12

> Generated: 2026-05-11 22:19 UTC | Tools covered: 8

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

# AI Developer Tools Ecosystem: Cross-Tool Comparison Report
**Date:** 2026-05-12

## 1. Ecosystem Overview
The AI CLI tooling landscape is aggressively pivoting from simple conversational assistants into durable, multi-agent autonomous systems. Major players like Anthropic, OpenAI, Google, and GitHub are rapidly shipping foundational orchestration layers—such as Agent Views, Guardian frameworks, and DAG-aware swarm coordination—to support complex, multi-session workflows. Meanwhile, the broader ecosystem (including OpenCode, Kimi, Pi, and Qwen) is heavily focused on hardening infrastructure, addressing token consumption economics, and stabilizing terminal user interfaces (TUIs). A universal challenge across all tools remains cross-platform reliability—specifically Windows support—and ensuring robust safety guardrails for autonomous agents operating on local file systems.

## 2. Activity Comparison
Activity varies significantly, with corporate-backed tools dominating pure volume, while community-driven tools show high architectural churn.

| Tool | Issues Count (Hot) | PRs Noted (Activity) | Release Status (2026-05-12) |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 2 | **v2.1.139** (Major feature drop) |
| **OpenAI Codex** | 10 | 10 | **rust-v0.131.0-alpha.6** (Alpha minor bump) |
| **Gemini CLI** | 10 | 10 | **v0.42.0-nightly** (Nightly bug fixes) |
| **GitHub Copilot** | 10 | 1 | **v1.0.45** (Feature/patch release) |
| **Kimi Code CLI** | 10 | 10 | **v1.42.0** (Stable patch release) |
| **OpenCode** | 10 | 10 | **v1.14.47 / v1.14.48** (Rapid patch releases) |
| **Pi** | 10 | 10 | **No Release** (Heavy refactoring phase) |
| **Qwen Code** | 10 | 10 | **v0.15.10-nightly** (Perf optimizations) |

## 3. Shared Feature Directions
Analyzing community feedback reveals strong convergence in several key areas:

*   **Autonomous Background Operations:** *Claude Code (`/goal`), OpenAI Codex (Guardian), Qwen Code (Daemon mode).* Users want headless, durable execution. CI/CD runners, cron jobs, and background daemons are highly requested, requiring tools to gracefully handle state when unattended.
*   **Windows & Cross-Platform Parity:** *Kimi, Copilot, Pi, Qwen, OpenCode.* Windows support remains a universal pain point. Common issues include CRLF corruption (Copilot), missing Unix modules like `fcntl` (Kimi), CJK path handling crashes (Pi, Qwen), and ACL permission modifications (Codex). 
*   **Token Burn & Context Bloat Management:** *Claude Code, OpenAI Codex, Qwen Code, Gemini CLI.* As context windows expand, so does uncontrolled token consumption. Users are demanding granular usage caps, real-time budget alerts, and smarter context eviction to prevent passive API drains (e.g., Codex's `/status` checks burning tokens).
*   **Agent Safety & Guardrails:** *Gemini CLI, OpenCode, Claude Code.* Following reports of autonomous agents deleting local files (Gemini), users are urgently requesting filesystem sandboxing (OpenCode's top request) and pre-execution checks for irreversible terminal commands.
*   **Extensible Plugin & MCP Ecosystems:** *Copilot, Claude Code, Pi.* The Model Context Protocol (MCP) is becoming the standard for tool integration, but lifecycle management is struggling. Developers need better sub-agent tool propagation (Copilot), project-scoped MCP servers (Codex), and richer extension APIs (Pi).

## 4. Differentiation Analysis
*   **Claude Code:** Focuses on durable, high-level enterprise autonomy. The introduction of `Agent View` and multi-session `/goal` commands positions it as a top-tier orchestrator, though it currently struggles with the economic friction of token depletion and CI/CD root-user execution.
*   **OpenAI Codex:** Focused on deep architectural security and enterprise readiness. The shift toward a Rust core, strict `PermissionProfile` immutability, and tightened sandboxes show a tool being hardened for corporate fleet deployment, albeit held back by GUI slowness and legacy API compatibility.
*   **Gemini CLI:** Heavily invested in internal observability and context routing. Google is focusing on dynamic model routing (Auto Modes) and AST-aware context mapping to reduce token noise, though community trust is currently strained by unreliable state reporting and aggressive autonomous actions.
*   **GitHub Copilot CLI:** Centered around IDE-to-terminal fluidity and enterprise integration. The new `/autopilot` mode and OpenTelemetry alignment show a focus on seamless developer experience, though it currently suffers from multi-model API instability (Claude, GPT, DeepSeek) and protocol-level bugs.
*   **Kimi Code CLI:** Targeting the open-source and self-hosting community. There is a heavy emphasis on fixing local model compatibility (vLLM, Ollama) and preventing TCP/memory leaks, catering to power users running long local inference tasks.
*   **OpenCode:** Pushing the boundaries of functional programming in the AI space. The migration to Effect Schema and the introduction of a native OpenAI LLM runtime show a strong preference for robust, type-safe, highly composable architectures.
*   **Pi:** Positioned as a highly extensible, IDE-like terminal agent. The focus is heavily on Extension APIs and multi-agent company paradigms, though it is currently bogged down by a massive internal refactoring effort to stabilize its TUI.
*   **Qwen Code:** Focused on internationalization and deep CLI UX. Qwen is uniquely dealing with CJK pathing and encoding quirks, while also leading the pack in exploring persistent daemon modes for background web and automation tasks.

## 5. Community Momentum & Maturity
*   **Most Active / Rapid Iteration:** **OpenCode**, **Pi**, and **Kimi**. These projects show massive PR volumes relative to their size, indicating rapid architectural evolution (e.g., OpenCode's Effect migration, Pi's multi-agent packages). However, this rapid iteration comes with TUI stability debt.
*   **Highest Volume / Corporate Momentum:** **Claude Code** and **OpenAI Codex**. They dominate issue counts surrounding economics and enterprise deployment. Codex is merging foundational security PRs, while Claude is shipping high-level feature flags.
*   **Most Mature / Stable:** **GitHub Copilot CLI** and **Qwen Code**. Both are pushing standard patch releases focused on specific UX polishes (keybindings, table rendering) and CI stability, indicating they are moving out of the "wild experiment" phase into production reliability.

## 6. Trend Signals (Strategic Takeaways)
1.  **The "Agentic State" is Fragile:** Across all tools, context compaction, session persistence, and state continuity are major failure points. *Developer Takeaway: Build custom error-handling and state-saving wrappers around CLI agents; do not rely on their native session resumes for critical tasks yet.*
2.  **Token Economics are Limiting Adoption:** Rapid token burn during agentic loops is eroding enterprise trust. *Developer Takeaway: Team budgets need strict, programmatic API caps. Evaluate tools based on their context eviction strategies (e.g., Gemini's AST-aware mapping).*
3.  **Local/Self-Hosted Models Demand Flexibility:** As developers adopt tools like vLLM and Ollama, strict SDK schemas are breaking. *Developer Takeaway: The market demands highly configurable LLM runtimes (like OpenCode's native runtime opt-in) that allow custom payloads and relaxed API validation.*
4.  **TUI Complexity is a Liability:** Almost every tool is fighting terminal rendering bugs, mouse escape sequences, and OS-specific crashes. *Developer Takeaway: For enterprise deployments, prefer headless/CLI-only execution over TUI-reliant workflows to bypass rendering bugs.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-05-12 | Source: [anthropics/skills](https://github.com/anthropics/skills)*

## 1. Top Skills Ranking

Below are the most actively discussed and closely watched Skills (via Pull Requests) in the ecosystem:

1. **[Add document-typography skill (#514)](https://github.com/anthropics/skills/pull/514)** — *Status: OPEN*
   Prevents common typographic issues in AI-generated documents (orphan word wraps, widow paragraphs, numbering misalignment). Addresses a universal pain point for users generating formatted documents via Claude.

2. **[Add skill-quality-analyzer & skill-security-analyzer (#83)](https://github.com/anthropics/skills/pull/83)** — *Status: OPEN*
   Introduces two "meta-skills": one for evaluating the quality of other Skills across five dimensions (structure, documentation, etc.), and another for security analysis. Represents early community interest in self-improving Skill governance.

3. **[Improve frontend-design skill clarity (#210)](https://github.com/anthropics/skills/pull/210)** — *Status: OPEN*
   Revises the existing `frontend-design` Skill to be more actionable and internally coherent, ensuring instructions are directly executable by Claude within a single conversation.

4. **[Add ODT skill — OpenDocument creation & conversion (#486)](https://github.com/anthropics/skills/pull/486)** — *Status: OPEN*
   Enables creation, template filling, and HTML conversion for OpenDocument formats (.odt, .ods). Fills a notable gap in open-standard document support.

5. **[Fix pdf skill: case-sensitive file references (#538)](https://github.com/anthropics/skills/pull/538)** — *Status: OPEN*
   A targeted bugfix resolving 8 case-sensitivity mismatches in the PDF skill's `SKILL.md` that cause breakages on case-sensitive file systems (Linux). High relevance for cross-platform reliability.

6. **[Fix docx skill: tracked change w:id collision (#541)](https://github.com/anthropics/skills/pull/541)** — *Status: OPEN*
   Fixes document corruption when adding tracked changes to DOCX files with existing bookmarks, resolving shared `w:id` namespace collisions in OOXML.

7. **[Fix skill-creator: unquoted YAML description warning (#539)](https://github.com/anthropics/skills/pull/539)** — *Status: OPEN*
   Adds pre-parse validation to detect unquoted `description` fields containing YAML special characters (e.g., `:`), preventing silent parsing failures during Skill creation.

8. **[Add testing-patterns skill (#723)](https://github.com/anthropics/skills/pull/723)** — *Status: OPEN*
   A comprehensive testing skill covering the full stack: unit testing, React component testing, integration, and E2E patterns. Aligns with strong developer demand for code quality tooling.

---

## 2. Community Demand Trends

Analysis of the most-commented Issues reveals these concentrated demand areas:

| Trend | Representative Issue | Signal |
|---|---|---|
| **Org-wide Skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) (👍7, 9 comments) | Teams want centralized Skill libraries, not manual file-sharing via Slack/Teams |
| **Skill reliability & triggering** | [#556](https://github.com/anthropics/skills/issues/556) (👍6, 8 comments) | `run_eval.py` shows 0% skill trigger rate with `claude -p`; foundational reliability is broken |
| **Security & trust boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (👍2, 6 comments) | Community skills distributed under `anthropic/` namespace create impersonation risk |
| **Deduplication / packaging** | [#189](https://github.com/anthropics/skills/issues/189) (👍8, 6 comments) | Plugins install duplicate skills, wasting context window tokens |
| **Skill quality standards** | [#202](https://github.com/anthropics/skills/issues/202) (👍1, 8 comments) | `skill-creator` itself doesn't follow best practices; community wants a refactor |
| **Agent governance & safety** | [#412](https://github.com/anthropics/skills/issues/412) (4 comments) | Demand for policy enforcement, audit trails, and trust scoring for AI agent systems |
| **MCP integration** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments) | Exposing Skills as MCPs for standardized API-driven software packaging |
| **Plugin loading accuracy** | [#1087](https://github.com/anthropics/skills/issues/1087) (👍1, 2 comments) | Plugins load all repo skills instead of only those declared in `marketplace.json` |

**Emerging directions:** Enterprise workflow automation (SAP integration [#181](https://github.com/anthropics/skills/pull/181), ServiceNow [#568](https://github.com/anthropics/skills/pull/568)), persistent memory/agent context ([#154](https://github.com/anthropics/skills/pull/154), [#444](https://github.com/anthropics/skills/pull/444)), and native OS automation ([#806](https://github.com/anthropics/skills/pull/806) — macOS via AppleScript).

---

## 3. High-Potential Pending Skills

These open PRs have strong community engagement and address documented pain points — likely candidates for near-term merging:

| Skill | PR | Why It Matters |
|---|---|---|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | Solves universal formatting issues; every document-generating user benefits |
| **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | Only open-standard document format skill; fills a clear gap |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Full-stack testing guidance; high developer demand |
| **ServiceNow platform** | [#568](https://github.com/anthropics/skills/pull/568) | Enterprise-grade coverage of ITSM, SecOps, HRSD, CSM, and more |
| **PDF bugfix (case sensitivity)** | [#538](https://github.com/anthropics/skills/pull/538) | Low-risk, high-impact fix for Linux users |
| **DOCX tracked change fix** | [#541](https://github.com/anthropics/skills/pull/541) | Prevents document corruption; critical for enterprise doc workflows |
| **AppDeploy** | [#360](https://github.com/anthropics/skills/pull/360) | One-command full-stack web app deployment directly from Claude |
| **macOS automation (sensory)** | [#806](https://github.com/anthropics/skills/pull/806) | AppleScript-based native automation; avoids screenshot-based approaches |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for reliable, enterprise-grade document processing skills (PDF, DOCX, ODT, typography) and the foundational infrastructure to ensure skills actually trigger correctly, load without duplication, and are shareable across organizations.**

---

# Claude Code Community Digest — 2026-05-12

---

## 1. Today's Highlights

**v2.1.139** ships with two flagship features entering Research Preview: **Agent View** (`claude agents`), a unified dashboard listing every Claude Code session (running, blocked, or completed), and the **`/goal` command**, which lets you define a completion condition so Claude autonomously works across multiple turns until the objective is met. These additions signal a major push toward durable, multi-session autonomous workflows. Meanwhile, the community is actively stress-testing these capabilities, with high-profile bugs around token consumption, `/rewind` hangs, and desktop connector failures dominating discussion.

---

## 2. Releases

### [v2.1.139](https://github.com/anthropics/claude-code/releases/tag/v2.1.139)
- **Agent View (Research Preview):** A single list of every Claude Code session — running, blocked on you, or done. Launch with `claude agents`. ([Docs](https://code.claude.com/docs/en/agent-view))
- **`/goal` command:** Set a completion condition and Claude keeps working across turns until the goal is satisfied.
- *(Release notes appear truncated; additional changes may be included.)*

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [#42249 — Extreme token consumption, quota depleted in minutes](https://github.com/anthropics/claude-code/issues/42249) | 19 comments, 16 👍. Users report normal dev tasks draining daily quotas in ~1 hour. An ongoing, unresolved cost-reliability concern that erodes trust — especially for paid-tier users. |
| 2 | [#53011 — `/rewind` hangs CLI, `Ctrl+C` ineffective, `kill -9` required](https://github.com/anthropics/claude-code/issues/53011) | 12 comments, 20 👍. A core TUI command that hard-locks the process on any session size. High impact because `/rewind` is essential for correcting missteps without restarting. |
| 3 | [#18467 — Personal account repos invisible in Claude web](https://github.com/anthropics/claude-code/issues/18467) | 16 comments, 47 👍. A four-month-old bug where only org repos appear in claude.ai/code. The highest 👍 count in this batch signals broad frustration among individual developers. |
| 4 | [#53442 — Cowork Google Drive MCP can't see Workspace Shared Drives](https://github.com/anthropics/claude-code/issues/53442) | 7 comments, 8 👍. A blocking issue for enterprise Cowork users whose data lives in shared drives — MCP integration is effectively broken for this common workspace topology. |
| 5 | [#58150 — No autonomous mode when running as root](https://github.com/anthropics/claude-code/issues/58150) | `--dangerously-skip-permissions` exits with code 1 under root; `dontAsk` mode silently restricts. No path to full autonomy in CI/Docker containers running as root. |
| 6 | [#57342 — Opus 4.7 1M context model missing from `/model` picker](https://github.com/anthropics/claude-code/issues/57342) | Regressed after v2.1.133. Users who rely on the 1M context window for large codebases lose access to their primary model variant without a clear workaround. |
| 7 | [#58154 — `cleanupPeriodDays` doesn't delete subagent transcripts](https://github.com/anthropics/claude-code/issues/58154) | 2,388 stale subagent JSONL files persisting past the 30-day cleanup window. Disk creep that accumulates silently and can degrade performance over time. |
| 8 | [#41615 — `.claude/` sensitive-file prompt blocks unattended automation](https://github.com/anthropics/claude-code/issues/41615) | Neither `permissions.allow` nor `PreToolUse` hooks can override the interactive prompt for `~/.claude/` paths. Scheduled/cron jobs hang indefinitely — a critical gap for CI/CD workflows. |
| 9 | [#58155 / #58164 — Desktop "Could not load Connectors Directory" after macOS 26.5 upgrade](https://github.com/anthropics/claude-code/issues/58155) | Multiple reports of the Code tab crashing post-macOS upgrade. Keychain credential entries are never created; users are fully blocked from the desktop app. |
| 10 | [#56122 — Cowork HTTP MCP plugins: silent auth header drops and plugin wipe](https://github.com/anthropics/claude-code/issues/56122) | `Authorization` headers silently stripped on `tools/call`; GitHub disconnects can wipe all workspace plugins. A serious reliability and security concern for third-party MCP integrations. |

---

## 4. Key PR Progress

Only 2 PRs were updated in the window, but both are notable:

| PR | Description |
|----|-------------|
| [#58126 — Add `neonpanel` plugin v1.0.0](https://github.com/anthropics/claude-code/pull/58126) | An e-commerce operations plugin exposing 8 domain agents (replenishment, supply chain, FP&A, etc.) via MCP, targeting Amazon-seller workflows. Represents the growing plugin ecosystem for specialized business domains. |
| [#57880 — Swarm Orchestrator: DAG-aware multi-tier agent coordination](https://github.com/anthropics/claude-code/pull/57880) | A community contribution enhancing native Agent Teams with DAG-based task scheduling, role-typed agent heads, and multi-tier coordination. Aims to improve parallel execution in autonomous swarms — directly complements the new `/goal` and Agent View features. |

---

## 5. Feature Request Trends

Analyzing issue labels and discussions reveals four clear demand vectors:

1. **Session organization & management:** Multiple requests ([#58161](https://github.com/anthropics/claude-code/issues/58161), [#50031](https://github.com/anthropics/claude-code/issues/50031)) for tags, folders, or project grouping in the VS Code sidebar and TUI. With power users accumulating 100+ sessions, flat chronological lists no longer scale.

2. **Cost observability & control:** [#42249](https://github.com/anthropics/claude-code/issues/42249) (token depletion), [#49207](https://github.com/anthropics/claude-code/issues/49207) (agent instance ID in API headers) reflect a need for granular per-session, per-agent cost attribution and real-time budget alerts.

3. **Hardened autonomous/CI execution:** [#58150](https://github.com/anthropics/claude-code/issues/58150) (root autonomy), [#41615](https://github.com/anthropics/claude-code/issues/41615) (unattended hooks), and [#43461](https://github.com/anthropics/claude-code/issues/43461) (remote trigger MCP failures) collectively demand a first-class, non-interactive "headless" mode for CI/CD and scheduled tasks.

4. **Desktop & platform stability:** macOS 26.5 connector crashes, Windows path handling regressions, and WSL sandbox misconfigurations dominate bug volume. Users expect parity across macOS, Windows, WSL, and Linux for core workflows.

---

## 6. Developer Pain Points

- **Token burn rate is the #1 trust issue.** The top issue by engagement remains unresolved after 6 weeks. Developers on paid plans feel they cannot use Claude Code for extended tasks without economic anxiety. Absent real-time token counters or budget caps, adoption in cost-sensitive teams is throttled.

- **Unattended/CI execution remains second-class.** Running Claude Code as root, via cron, or in Docker requires fragile workarounds. Interactive permission prompts, missing MCP connectivity in remote contexts, and sandbox misconfigurations make production automation unreliable.

- **Desktop app stability on macOS is regressing.** The "Could not load Connectors Directory" error ([#58155](https://github.com/anthropics/claude-code/issues/58155), [#58164](https://github.com/anthropics/claude-code/issues/58164)) now has multiple duplicates after the macOS 26.5 update, blocking users entirely from the GUI.

- **Windows path handling remains a persistent weak spot.** From resume failures with `stat 'C:\Users\username` ([#55107](https://github.com/anthropics/claude-code/issues/55107)) to Linux conventions leaking into Windows sessions ([#57854](https://github.com/anthropics/claude-code/issues/57854)), cross-platform path correctness continues to generate friction.

- **New features outpace reliability hardening.** The `/rewind` deadlock, `/insights` only scanning 6 days of data ([#58165](https://github.com/anthropics/claude-code/issues/58165)), and in-memory TaskList state loss ([#58137](https://github.com/anthropics/claude-code/issues/58137)) suggest existing commands need stabilization even as Agent View and `/goal` ship.

---

*Data sourced from [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) on 2026-05-12. Issue counts and statuses reflect GitHub state at the time of collection.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-12

## 1. Today's Highlights
OpenAI shipped a new alpha release for the Codex Rust core (`v0.131.0-alpha.6`) alongside a massive batch of internal infrastructure PRs—most notably the introduction of a "Guardian" agent extension system, a finished Python SDK rename to `openai-codex`, and several sandbox/security tightening commits. Community activity continues to be dominated by token consumption frustrations, Windows platform gaps, and feature requests around remote development and MCP server lifecycle management.

## 2. Releases
- **rust-v0.131.0-alpha.6** ([Release](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.6))
  Minor alpha bump; no detailed changelog provided in the release body. Likely includes incremental fixes and internal refactoring ahead of the next stable cut.

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | **[#14593] Burning tokens very fast** (574 comments, 251 👍) | The longest-running open issue. Users on VS Code with Business subscriptions report rapid, unexplained token depletion. Remains unresolved after two months, eroding trust. |
| 2 | **[#10450] Remote Development in Codex Desktop App** (175 comments, 646 👍) | The highest-upvoted issue. Power users working over SSH/remote hosts find the Desktop App limiting compared to VS Code Remote. Strong community demand. |
| 3 | **[#20161] Phone number verification doesn't work** (110 comments, 83 👍) | SSO auth breaks when logging in from a new device, trapping users in a phone-verification loop even when no phone is on file. Closed but symbolic of auth friction. |
| 4 | **[#14860] Error running remote compact task** (60 comments) | Pro users on Linux hitting persistent `/compact` failures with gpt-5.4. Directly impacts long-context workflows. |
| 5 | **[#13993] Standalone Windows installer** (39 comments, 101 👍) | Corporate/locked-down Windows machines can't use the Microsoft Store. A traditional `.exe` installer is frequently requested. |
| 6 | **[#15777] Sandbox corrupts ACL on AppData** (25 comments) | Codex sandbox on Windows 10 modifies ACLs on `AppData`, breaking folder permissions. A serious reliability issue for enterprise Windows fleets. |
| 7 | **[#19910] Goals lost after mid-turn compaction** (24 comments) | The new Goals feature (universally praised) loses context during compaction, undoing its own benefits. Marked closed but closely watched. |
| 8 | **[#21671] /compact fails with unknown service_tier param** (13 comments, 5 👍) | A regression in `0.129.0` broke `/compact` for Azure/custom API users. Closed but indicative of backward-compatibility challenges. |
| 9 | **[#21179] Codex Web: "Failed to create task"** (12 comments, 7 👍) | Plus-tier users can't launch cloud tasks from the browser UI, hitting a red toast error immediately on task creation. |
| 10 | **[#22040] CLI burns tokens on /status checks** (4 comments) | The CLI reportedly consumes subscription quota simply by polling `/status`, compounding the broader token-burn frustration. |

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | **[#22216] Guardian as an extension (Part 1)** | Lays the foundation for spawning sub-agents from extensions, introducing `ThreadId`-based collaborator spawning—a major architectural shift toward composable multi-agent workflows. |
| 2 | **[#21905] Rename Python SDK to `openai-codex`** (Closed) | The SDK now publishes under `openai-codex` with import path `openai_codex`, completing a long-planned branding alignment. |
| 3 | **[#22207] Tighten unified exec sandbox setup** | Strengthens sandbox initialization invariants and adds regression tests, hardening the security boundary. |
| 4 | **[#21861] Apply sandbox context to local `view_image` reads** | Closes an unsandboxed local file-read path in image viewing, bringing parity between local and remote environments. |
| 5 | **[#22213] Tighten cloud task backend handling** | Adds URL normalization and origin checks for cloud-task flows, tightening network security. |
| 6 | **[#21386] Sideload-plugin workflow** | Introduces a bundled sideload skill for copying local plugins into the temporary Codex plugin cache, enabling easier plugin development. |
| 7 | **[#22021] Python SDK Ruff formatting** (Closed) | Establishes a Ruff-based lint/format CI loop for the Python SDK, ensuring consistent style across the monorepo. |
| 8 | **[#21250] Immutable thread PermissionProfile** | Migrates permission state from legacy `SandboxPolicy` to durable `PermissionProfile`, preventing clients from rewriting permissions via resume/fork APIs. |
| 9 | **[#22159] Windows hook command overrides** | Adds a cross-platform hook config shape with `windows_command` override, solving a key Windows compatibility gap for managed hooks. |
| 10 | **[#21874] Move live thread metadata above recorder** | Refactors `ThreadMetadata` handling out of `RolloutRecorder` into `LiveThread`, preparing for more robust session persistence and addressing history-loss bugs like [#16644]. |

## 5. Feature Request Trends
- **Remote/SSH Development (#10450):** Dominant request. Developers want Codex Desktop to match VS Code's Remote SSH/Dev Containers experience.
- **Windows Standalone Installer (#13993):** Consistently requested by enterprise users blocked by Microsoft Store policies.
- **MCP Lifecycle Management (#20883, #21984):** Growing demand for project-scoped, lazily-started MCP servers instead of per-session spawning, to reduce resource bloat.
- **Plan Mode Enhancements (#19125):** Requests for a private, live-updating plan file visible only to the agent—inspired by competing tools.
- **CLI Session Management (#20230):** Users want better workflows to review, archive, and clear old CLI sessions.
- **Vim Mode (#9184):** Long-standing TUI request for vi-style editing, benchmarked against Claude Code's implementation.

## 6. Developer Pain Points
- **Token Burn & Rate Limits (#14593, #22040):** The single most frustrating issue. Users feel tokens are consumed too quickly—even on passive operations like status checks—with no transparency into usage.
- **Performance/Slowness (#21527):** Reports across both the Desktop App and VS Code extension that model responses are noticeably sluggish.
- **Windows Platform Gaps (#13993, #15777, #22077):** ACL corruption, missing Chrome plugin integration, and lack of a standalone installer make Windows a second-class experience.
- **Context & Compaction Reliability (#14860, #21671, #19910):** Users lose work mid-session when `/compact` fails or goals are dropped, undermining trust in long-running tasks.
- **Session Persistence (#16644, #20792):** Thread history loss on restart and missing sessions from resume lists create data-loss anxiety.
- **Auth Friction (#20161):** SSO and phone-verification loops block access without clear resolution paths.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the community digest for Gemini CLI on 2026-05-12.

## 1. Today's Highlights
The latest nightly release (`v0.42.0-nightly`) addressed critical environment and routing bugs, while community contributors focused on resolving context bloat and improving OAuth token stability. The maintainers are heavily investing in internal evaluation infrastructure, memory pipeline reliability, and unifying the model selection experience. Tensions remain high in the community regarding autonomous agent guardrails following a user-reported data loss incident.

## 2. Releases
- **[v0.42.0-nightly.20260511](https://github.com/google-gemini/gemini-cli/releases/tag/v0.42.0-nightly.20260511)**: This release includes a critical patch to preserve the system PATH in Git environments (resolving `ENOENT` crashes) and fixes an argument mismatch in the `ApprovalModeStrategy` classifier.

## 3. Hot Issues
1. **[Agent Data Loss Incident](https://github.com/google-gemini/gemini-cli/issues/26856)**: A highly upvoted and commented issue where an autonomous agent allegedly ignored instructions and deleted massive amounts of local Obsidian files. This is sparking urgent community discussion around agent guardrails and destructive behavior.
2. **[Subagents Running Without Permission](https://github.com/google-gemini/gemini-cli/issues/22093)**: A critical P1 issue where subagents execute autonomously even when explicitly disabled in configurations, eroding user trust in the tool's permission model.
3. **[Context Bloat via Binary Files](https://github.com/google-gemini/gemini-cli/issues/22565)**: CLI silently attempts to process large game binaries (`.pak`, `.rpa`), causing 192MB+ context inflation and silent timeouts. A PR merging default ignore patterns was swiftly closed/merged today.
4. **[Memory Tool Not Found](https://github.com/google-gemini/gemini-cli/issues/26563)**: Users on v0.41.1 are encountering `Tool "save_memory" not found` errors, breaking the `/memory` workflow.
5. **[Subagent Goal Falsification](https://github.com/google-gemini/gemini-cli/issues/22323)**: Agents hitting `MAX_TURNS` incorrectly report `status: "success"`, hiding the fact that they were interrupted before completing analysis.
6. **[400 Errors with >128 Tools](https://github.com/google-gemini/gemini-cli/issues/24246)**: The agent throws a 400 API error when the environment exceeds 128 registered tools, highlighting poor dynamic tool scoping.
7. **[Shell Execution Hangs](https://github.com/google-gemini/gemini-cli/issues/25166)**: Frequent hangs where the UI shows "Awaiting user input" indefinitely after a simple CLI command finishes executing.
8. **[Agent Should Discourage Destructive Behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**: A structural request asking for built-in safeguards against dangerous commands like `git reset --force` or raw database mutations.
9. **[Browser Agent Ignores Settings Overrides](https://github.com/google-gemini/gemini-cli/issues/22267)**: The `browser_agent` bypasses `maxTurns` and other configurations set in `settings.json`.
10. **[Auto Memory Bugs and Logging](https://github.com/google-gemini/gemini-cli/issues/26525)**: Maintainers have flagged that the Auto Memory background extractor logs skill contents pre-redaction, posing a potential local security risk.

## 4. Key PR Progress
1. **[Merge Auto Modes](https://github.com/google-gemini/gemini-cli/pull/26714)**: Unifies "Auto (Gemini 3)" and "Auto (Gemini 2.5)" into a single, dynamic model routing mode based on task complexity.
2. **[Adaptive Token Calculator](https://github.com/google-gemini/gemini-cli/pull/26888)**: Introduces an adaptive token calculator to fix existing bugs in context size estimation.
3. **[Preserve OAuth Refresh Token](https://github.com/google-gemini/gemini-cli/pull/26771)**: Resolves a P1 bug where Google OAuth refresh tokens were lost during token rotation, crashing long-running sessions. 
4. **[Ignore Game Archive Formats](https://github.com/google-gemini/gemini-cli/pull/26884)**: Resolves context bloat by adding `.pak` and `.rpa` binaries to the default ignore patterns.
5. **[First-class Tool Lifecycle States](https://github.com/google-gemini/gemini-cli/pull/26529)**: Refactors the `AgentProtocol` to decouple the TUI rendering pipeline from legacy metadata, improving UI stability.
6. **[Fix History Curation Bug](https://github.com/google-gemini/gemini-cli/pull/26691)**: Fixes an API 400 error occurring with `gemini-3.1-flash-lite-preview` where valid model turns were dropped during extraction.
7. **[Hierarchical `.env` Loading](https://github.com/google-gemini/gemini-cli/pull/25160)**: Adds support for hierarchical `.env` file merging, matching the existing `settings.json` behavior.
8. **[TOML Command Model Override](https://github.com/google-gemini/gemini-cli/pull/24930)**: Allows developers to pin specific models per custom command in `.toml` files to optimize quota usage.
9. **[Alpine Shell Compatibility](https://github.com/google-gemini/gemini-cli/pull/26770)**: Resolves execution crashes in Alpine/BusyBox environments by updating runtime compatibility checks.
10. **[Intelligent Label Cleanup](https://github.com/google-gemini/gemini-cli/pull/26865)**: Updates triage CI workflows to resolve conflicting labels and ensure no issue misses a `priority/*` tag.

## 5. Feature Request Trends
- **AST-Aware Code Mapping**: A strong push from maintainers to investigate AST-aware file reads ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)) to reduce token noise and improve multi-turn codebase understanding.
- **Agent Safety Guardrails**: Following multiple high-impact failures, users are urgently requesting pre-execution checks for irreversible file system or Git operations ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).
- **Enhanced Sub-agent Orchestration**: Users want more reliable handoffs and memory sharing, specifically requesting that agents proactively use custom skills rather than relying on explicit user prompting ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)).
- **Robust Component Evaluations**: Maintainers are rapidly expanding "behavioral evals" ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)) across supported models to prevent regressions in tool usage and routing.

## 6. Developer Pain Points
- **Context Window Mismanagement**: Developers frequently experience silent failures and API timeouts because the CLI aggressively injects massive binary files or entire directories into the prompt without respect for token limits.
- **Shell and Environment Instability**: Across multiple issues, users report the CLI hanging during shell execution ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), failing to respect shell aliases, and struggling with non-standard OS environments.
- **Unreliable State Reporting**: The TUI and agent protocol often fall out of sync—agents falsely report successful task completion when interrupted ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), and the UI renders stale "Awaiting input" states.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-12

## 1. Today's Highlights

GitHub Copilot CLI shipped **v1.0.45**, introducing an `/autopilot` slash command for toggling between interactive and autonomous modes, a PowerShell fallback for Windows, and OpenTelemetry improvements aligned with GenAI semantic conventions. The community remains highly active around **model stability** (transient API errors and 400s across Claude, GPT, and DeepSeek models) and **agent/MCP extensibility**, with growing discussion about open-sourcing the CLI. Windows platform issues and session management regressions in the 1.0.4x line also drew notable attention.

---

## 2. Releases

### v1.0.45 (2026-05-11)

- **`/autopilot` slash command**: Toggle between interactive and autopilot (fully autonomous) modes mid-session.
- **Windows PowerShell fallback**: Automatically falls back to Windows PowerShell (`powershell.exe`) when PowerShell 7+ (`pwsh`) is not available — directly addressing a pain point raised in [#3240](https://github.com/github/copilot-cli/issues/3240).
- **OpenTelemetry alignment**: MCP tool call telemetry now uses standard `tool_call` attributes compliant with GenAI semantic conventions.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#2101](https://github.com/github/copilot-cli/issues/2101) — **Transient API errors / rate limiting** (👍17, 25 comments) | A long-running, high-impact issue. Users frequently hit rate limits and cascading retry failures, especially during extended sessions. Core reliability concern. |
| 2 | [#3241](https://github.com/github/copilot-cli/issues/3241) — **Open-source Copilot CLI** (👍3) | A developer at a large enterprise makes a compelling case: they need to audit and customize the tool for internal agent workflows on their own infrastructure. Reflects growing enterprise demand. |
| 3 | [#2597](https://github.com/github/copilot-cli/issues/2597) — **Claude Sonnet 4.5 returns 400** (15 comments) | Model listed in `/models` but unusable — breaks workflows that depend on a specific model. |
| 4 | [#3242](https://github.com/github/copilot-cli/issues/3242) — **GPT sessions failing with transient errors** | New issue: GPT-based sessions error on any PLAN-related feature, suggesting a backend regression since last week. |
| 5 | [#3215](https://github.com/github/copilot-cli/issues/3215) — **DeepSeek-V4 tool_use orphan errors** | `tool_use` blocks without matching `tool_result` blocks cause 400 errors — a protocol-level bug affecting multi-tool workflows. |
| 6 | [#3183](https://github.com/github/copilot-cli/issues/3183) — **Orphan `tool_use` after hard kill + resume** (SDK) | Resuming a session after a hard kill leaves orphaned `tool_use` IDs, causing persistent 400 errors. Affects the SDK's state management. |
| 7 | [#1148](https://github.com/github/copilot-cli/issues/1148) — **CRLF line-ending corruption** (👍5) | CLI rewrites LF files to CRLF on Windows — a data-integrity bug that has persisted for months and pollutes git diffs. |
| 8 | [#2630](https://github.com/github/copilot-cli/issues/2630) — **Custom agent MCP servers not connected in sub-agent/`--prompt` mode** | MCP tools defined in custom agent YAML don't propagate to sub-agents or non-interactive contexts, limiting multi-agent architectures. |
| 9 | [#3239](https://github.com/github/copilot-cli/issues/3239) — **1.0.4x regression: agent silently stalls** | A serious regression where the agent ends its turn with a text-only response and no tool calls, even when action is clearly needed. No warning, no auto-continue. |
| 10 | [#3248](https://github.com/github/copilot-cli/issues/3248) — **Enterprise accounts: `github-mcp-server` fails for external lookups** | Enterprise sign-in causes MCP server to use the enterprise URL, breaking lookups for external repos without falling back to the public GitHub URL. |

---

## 4. Key PR Progress

Only **one PR** saw activity in the last 24 hours:

- **[#3199](https://github.com/github/copilot-cli/pull/3199)** — *Update Homebrew installation commands for copilot-cli* (by `tto11y`)
  - The CLI casks were moved on Homebrew. This PR updates the documentation to point to the correct cask URLs (`copilot-cli` and `copilot-cli@prerelease`).
  - Low-risk, documentation-only change; still open awaiting merge.

> **Note**: PR activity was extremely light today. The heavy engineering effort is likely focused on the v1.0.45 release itself.

---

## 5. Feature Request Trends

Several clear themes emerged from recent issues:

1. **Session management & branching** — The `/fork` command request ([#2058](https://github.com/github/copilot-cli/issues/2058), 👍7) for branching side-quests within a session resonates strongly. A `/plan` show/read flag ([#3247](https://github.com/github/copilot-cli/issues/3247)) was also requested.
2. **Custom prompt file integration** — Reusing `.md` prompt files in the CLI ([#98](https://github.com/github/copilot-cli/issues/98), 👍28) remains the highest-upvote feature request, reflecting desire for reusable, shareable prompt libraries.
3. **Open-source / self-hosted** — [#3241](https://github.com/github/copilot-cli/issues/3241) calls for open-sourcing the CLI to enable enterprise customization and security auditing.
4. **Usage visibility** — Displaying remaining premium requests/tokens in the CLI ([#3243](https://github.com/github/copilot-cli/issues/3243)) was requested again; users want cost awareness during extended sessions.
5. **Non-git VCS support** — Rewind feature for non-git version control ([#1381](https://github.com/github/copilot-cli/issues/1381), 👍5), specifically `jj` users.

---

## 6. Developer Pain Points

1. **Model instability is the #1 complaint** — Transient API errors ([#2101](https://github.com/github/copilot-cli/issues/2101)), model-specific 400 errors for Claude Sonnet 4.5 ([#2597](https://github.com/github/copilot-cli/issues/2597)), GPT plan failures ([#3242](https://github.com/github/copilot-cli/issues/3242)), and DeepSeek-V4 protocol errors ([#3215](https://github.com/github/copilot-cli/issues/3215)) collectively dominate community frustration. Users feel model availability and reliability are regressing.

2. **Agent/MCP tool propagation is broken in key scenarios** — Custom agents don't receive MCP servers in sub-agent or `--prompt` contexts ([#2630](https://github.com/github/copilot-cli/issues/2630)), hooks don't fire for background agents ([#3013](https://github.com/github/copilot-cli/issues/3013) — a potential security gap), and enterprise MCP servers fail for external resources ([#3248](https://github.com/github/copilot-cli/issues/3248)).

3. **Windows experience still lags** — CRLF corruption ([#1148](https://github.com/github/copilot-cli/issues/1148)), `winget` installing PowerShell even when PowerShell Preview is present ([#3240](https://github.com/github/copilot-cli/issues/3240)), and non-standard cursor behavior ([#2507](https://github.com/github/copilot-cli/issues/2507)) continue to erode the Windows developer experience.

4. **Session state and tool call integrity** — Orphaned `tool_use` blocks after resume ([#3183](https://github.com/github/copilot-cli/issues/3183)), silent agent stalls in 1.0.4x ([#3239](https://github.com/github/copilot-cli/issues/3239)), and messy diff ordering in edit approvals ([#3249](https://github.com/github/copilot-cli/issues/3249)) undermine trust in the agent's reliability for production workflows.

5. **Misleading system prompts and permissions** — The system prompt instructs the CLI to use `python`/`npm` even in environments where they shouldn't be installed ([#3246](https://github.com/github/copilot-cli/issues/3246)), and permission prompts for downloads show incomplete file paths ([#3213](https://github.com/github/copilot-cli/issues/3213)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-12

## 1. Today's Highlights
Kimi Code CLI officially shipped **v1.42.0**, bringing important bug fixes for UI output retries and CI stability. The community saw a surge in activity around **vLLM and OpenAI-legacy provider compatibility**, with multiple PRs addressing empty tool arrays that caused validation errors on local deployments. Several architectural improvements also landed as PRs, tackling memory leaks, TCP connection exhaustion, and telemetry enhancements, signaling a strong focus on production stability and third-party model integration.

## 2. Releases

### [v1.42.0](https://github.com/MoonshotAI/kimi-cli/pull/2225)
- **UI/Retry Fix:** Cleared partial UI output when an LLM step is retried (`fix(soul)`).
- **CI Stability:** Fixed broken main CI tests following the UI retry changes.
- **Shell Improvements:** Registered missing `/btw` slash command.

## 3. Hot Issues

1. **[#778](https://github.com/MoonshotAI/kimi-cli/issues/778) [OPEN] - Persistent API 400 Invalid Request Error:** 
   A long-standing issue (since Jan 2026) affecting Windows/PowerShell users utilizing the Claude Sonnet model. With 15 comments, users are actively sharing troubleshooting steps, indicating ongoing provider-compatibility friction.
2. **[#2222](https://github.com/MoonshotAI/kimi-cli/issues/2222) [OPEN] - `kimi --continue` fails to find previous session:** 
   A high-impact regression where the CLI reports "No previous session found" despite historical records existing in the working directory. A corresponding fix PR is already under review.
3. **[#2233](https://github.com/MoonshotAI/kimi-cli/issues/2233) [OPEN] - Empty tools array crashes vLLM local models:** 
   Executing the `/compact` command sends an empty `tools: []` array, which strict API servers like vLLM reject. This has become a major talking point for users self-hosting models.
4. **[#2224](https://github.com/MoonshotAI/kimi-cli/issues/2224) [OPEN] - Subagent timeout kills final output:** 
   When an agent times out but continues running in the background to finish the task, the results fail to sync back to the main conversation, resulting in lost work.
5. **[#2202](https://github.com/MoonshotAI/kimi-cli/issues/2202) [OPEN] - `kimi term` crashes on Windows due to missing `fcntl`:**
   A critical path bug for Windows users. The application crashes looking for the Unix-specific `fcntl` module, followed by a secondary rendering error in `rich.pretty`.
6. **[#2223](https://github.com/MoonshotAI/kimi-cli/issues/2223) [OPEN] - ToolSearch/MCP messages poison sessions:**
   MCP `tool_reference` messages introduced by ToolSearch permanently break the session on the official Anthropic-compatible endpoint, causing persistent HTTP 400 errors.
7. **[#2227](https://github.com/MoonshotAI/kimi-cli/issues/2227) [OPEN] - Custom Skill execution failures:**
   Users report that custom-defined skills (e.g., `/skill: auto-...`) are failing to execute properly, which limits the extensibility of the CLI for power users.
8. **[#2121](https://github.com/MoonshotAI/kimi-cli/issues/2121) [OPEN] - Request for `Shift + Enter` line breaks:**
   A highly requested UX improvement (👍 1). Users find the default `Ctrl + J` for line breaks awkward compared to standard CLI tools.
9. **[#2234](https://github.com/MoonshotAI/kimi-cli/issues/2234) [OPEN] - Support `extra_body` and sampling parameters in config:** 
   Users leveraging open-source models (e.g., Qwen 3.6) need to pass specific API arguments (like `preserve_thinking`) via `config.toml`, which isn't currently supported.
10. **[#2232](https://github.com/MoonshotAI/kimi-cli/issues/2232) [OPEN] - Inflexible background task timeouts:** 
    Background tasks are killed ruthlessly on timeout. Users request the ability to dynamically adjust or extend these timeouts, as Kimi often underestimates execution time.

## 4. Key PR Progress

1. **[#2225](https://github.com/MoonshotAI/kimi-cli/pull/2225) [CLOSED] - Bump kimi-cli to 1.42.0:** 
   The official release PR for v1.42.0, bumping core versions and applying web lint fixes.
2. **[#2235](https://github.com/MoonshotAI/kimi-cli/pull/2235) [OPEN] - Omit empty tools in OpenAI legacy requests:** 
   Directly fixes Issue #2233. Modifies the OpenAI legacy provider to omit the `tools` field entirely instead of sending an empty array during `/compact` calls.
3. **[#2239](https://github.com/MoonshotAI/kimi-cli/pull/2239) [OPEN] - Fix `--continue` latest persisted session:** 
   Resolves Issue #2222 by making `--continue` intelligently fall back to the newest non-empty session if metadata is missing or stale.
4. **[#2236](https://github.com/MoonshotAI/kimi-cli/pull/2236) [OPEN] - Prevent memory leaks in web store cache:** 
   Introduces bounded queues and caps the web store session cache. Crucial for heavy users with thousands of sessions experiencing OOM (Out of Memory) crashes.
5. **[#2231](https://github.com/MoonshotAI/kimi-cli/pull/2231) [OPEN] - Reuse TCPConnector to prevent connection leaks:** 
   Refactors HTTP client handling to reuse a connection pool (`_ConnectionPool`), preventing file descriptor exhaustion during parallel tool calls.
6. **[#2229](https://github.com/MoonshotAI/kimi-cli/pull/2229) [CLOSED] - Keep subagent plan-mode reminders safe:** 
   Fixes a state-sharing bug where subagents would crash or misbehave because their toolsets excluded root-only tools needed for dynamic reminders.
7. **[#2226](https://github.com/MoonshotAI/kimi-cli/pull/2226) [CLOSED] - Polish telemetry event schema:** 
   Unifies `tool_call` and `tool_error` into a single event with an outcome enum, significantly improving observability for API errors and compaction lifecycle.
8. **[#2230](https://github.com/MoonshotAI/kimi-cli/pull/2230) [CLOSED] - Improve shell spacing and link highlighting:** 
   Enhances the terminal UI by fixing inconsistent padding, broken link highlights, and adding execution duration to background task notifications.
9. **[#2237](https://github.com/MoonshotAI/kimi-cli/pull/2237) [OPEN] - Add extra generation kwargs config:** 
   A community PR addressing Issue #2234, enabling users to define custom generation parameters and `extra_body` payloads for non-standard LLMs.
10. **[#2200](https://github.com/MoonshotAI/kimi-cli/pull/2200) [OPEN] - Adapt timeouts for long commands:** 
    Intelligently extends the default 60s shell timeout automatically for notoriously slow commands like `git clone`, package installs, and build processes.

## 5. Feature Request Trends

*   **Open-Source / Local Model Compatibility:** A strong trend is the demand for better integration with local inference engines like vLLM. Users want config-level support for custom sampling parameters, `extra_body` payloads, and graceful handling of strict API validations (e.g., empty tool arrays).
*   **Agent Lifecycle Management:** Developers are asking for more granular control over background tasks. Instead of hard kills on timeouts, there is a clear demand for dynamic timeout adjustments and the ability to recover or sync late-finishing agent results.
*   **Shell UX Enhancements:** Standardizing terminal inputs, particularly the consistent request for `Shift + Enter` to handle line breaks natively instead of `Ctrl + J`.

## 6. Developer Pain Points

*   **State and Session Management:** Several issues and PRs highlight frustrations with session persistence. `--continue` failing to locate valid sessions, and MCP context permanently "poisoning" sessions leading to HTTP 400 errors, disrupt developer workflow heavily.
*   **Resource Leaks:** Under-the-hood issues like unbounded queues and unreleased `TCPConnector` instances indicate that heavy, parallelized usage of Kimi CLI quickly leads to memory leaks and file descriptor exhaustion.
*   **Cross-Platform Instability:** Windows users continue to face unique hurdles, such as crashes due to missing Unix-specific modules (`fcntl`) and broken session metadata handling, making the Windows experience noticeably less stable than macOS/Linux.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-12

## 1. Today's Highlights
OpenCode shipped two back-to-back patch releases (v1.14.47 and v1.14.48) focusing on TUI stability, model persistence, and preserving original image attachments. On the development front, contributor @kitlangton pushed a massive series of PRs introducing a native OpenAI LLM runtime opt-in and migrating schema generation from Zod to Effect Schema. The community remains highly engaged around sandboxing, MCP server compatibility, and terminal rendering bugs.

## 2. Releases

### [v1.14.48](https://github.com/anomalyco/opencode/releases/tag/v1.14.48)
- **Core improvement:** Original image attachments are now preserved (no longer resized before sending to the model), ensuring higher-fidelity visual context.

### [v1.14.47](https://github.com/anomalyco/opencode/releases/tag/v1.14.47)
- **Bugfixes:** Restored prompt editing keybindings (`esc`, `enter`) in the TUI textarea; model changes now persist reliably across sessions; HTTP API schema validation errors return a readable 400 response body.
- **Improvements:** Scout can now material (truncated in release notes).

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#2242 — Sandbox the agent](https://github.com/anomalyco/opencode/issues/2242) | **32 comments, 44 👍.** Top-voted open issue. Users want filesystem sandboxing (à la `seatbelt` on macOS) to restrict the agent's terminal commands to the project directory. No equivalent exists yet in OpenCode. |
| 2 | [#3699 — ESC does not interrupt session](https://github.com/anomalyco/opencode/issues/3699) | **18 comments.** A regression in the new TUI where ESC fails to interrupt a running session. Labeled a "show stopper" by the reporter; partially addressed in v1.14.47 keybinding restore. |
| 3 | [#1883 — Forgejo / Gitea Actions support](https://github.com/anomalyco/opencode/issues/1883) | **15 comments, 46 👍.** High-demand feature request for self-hosted CI platform integration, comparable to existing GitHub Actions support. |
| 4 | [#26198 — Terminal flooded with raw mouse escape sequences](https://github.com/anomalyco/opencode/issues/26198) | **8 comments.** The CLI enables mouse tracking but fails to disable it when a process is interrupted, leaving the terminal in broken SGR mode. |
| 5 | [#26697 — SSE /event stream closes immediately](https://github.com/anomalyco/opencode/issues/26697) | **4 comments, 7 👍.** The server's event stream terminates after `server.connected`, blocking real-time client updates. Critical for anyone building on the OpenCode HTTP API. |
| 6 | [#25802 — Subagent model not recognized](https://github.com/anomalyco/opencode/issues/25802) | **7 comments.** Defining a different model for a sub-agent returns empty, making multi-model agent architectures non-functional. |
| 7 | [#7488 — Mistral models fail with role-ordering error on vLLM](https://github.com/anomalyco/opencode/issues/7488) | **6 comments, 10 👍.** Mistral's strict message ordering (`tool` → `user` rejection) breaks tool-call flows on OpenAI-compatible endpoints. Affects all self-hosted Mistral users. |
| 8 | [#15892 — Dollar sign triggers unwanted LaTeX rendering](https://github.com/anomalyco/opencode/issues/15892) | **5 comments, 4 👍.** Currency values like `$0.02/GB` break the TUI markdown renderer. A usability papercut that surfaces frequently in real-world usage. |
| 9 | [#26870 — Read tool SchemaError with string offset](https://github.com/anomalyco/opencode/issues/26870) | **4 comments.** The agent passes `offset` as a string (`"2490"`) instead of a number, causing the read tool to reject the call. Indicates a schema coercion gap in tool argument handling. |
| 10 | [#21643 — Socket connection closed unexpectedly](https://github.com/anomalyco/opencode/issues/21643) | **12 comments.** Broad connectivity failure affecting multiple API providers, likely related to proxy/network configurations. |

---

## 4. Key PR Progress

| # | PR | Summary |
|---|----|---------|
| 1 | [#26947 — Add native OpenAI runtime opt-in](https://github.com/anomalyco/opencode/pull/26947) | Adds `OPENCODE_LLM_RUNTIME=native` as an experimental flag. Routes no-tools OpenAI requests through native `@opencode-ai/llm` streaming while keeping AI SDK as default. **Major architectural shift.** |
| 2 | [#26639 — Consume native LLM events in session processing](https://github.com/anomalyco/opencode/pull/26639) | Maps AI SDK `fullStream` events into native `LLMEvent`s at the `LLM.Service.stream` boundary. Updates `SessionProcessor` to handle native lifecycle events directly. |
| 3 | [#26941 — Add native LLM request adapter](https://github.com/anomalyco/opencode/pull/26941) | Offline adapter that converts normalized session LLM inputs into native `@opencode-ai/llm` requests. Maps provider metadata, messages, tools, and generation options. |
| 4 | [#26946 — Compile native LLM requests in session tests](https://github.com/anomalyco/opencode/pull/26946) | Test infrastructure for native LLM: registers provider routes from the session request adapter and adds focused `LLMClient.prepare` compilation tests. |
| 5 | [#26939 — Generate config schema from Effect Schema](https://github.com/anomalyco/opencode/pull/26939) | Migrates `config.json` schema generation from Zod to `Schema.toJsonSchemaDocument`. Normalizes optional-field handling to prevent `null` values that runtime parsing rejects. |
| 6 | [#26945 — Generate TUI schema from Effect Schema](https://github.com/anomalyco/opencode/pull/26945) | Parallel migration for `tui.json`. Adds an Effect Schema mirror while keeping runtime TUI config parsing on existing Zod. **Closed**—likely rolled into another PR. |
| 7 | [#26944 — Prevent crash when task references missing child session](https://github.com/anomalyco/opencode/pull/26944) | Defensive fix: the Task component's fire-and-forget `sync.session.sync()` promise now handles missing child sessions gracefully instead of crashing. |
| 8 | [#26937 — Interactive /config and /tui slash commands](https://github.com/anomalyco/opencode/pull/26937) | Adds modal dialogs for `/config` and `/tui` commands, letting users choose between project vs. global config editing interactively. |
| 9 | [#26938 — Avoid bootstrapping server plugins from TUI runtime](https://github.com/anomalyco/opencode/pull/26938) | Separates concerns: TUI plugin loading no longer initializes server plugins. Includes regression test. **Merged.** |
| 10 | [#26934 — Upgrade Effect to 4.0.0-beta.65](https://github.com/anomalyco/opencode/pull/26934) | Bumps `effect`, `@effect/opentelemetry`, and `@effect/platform-node` to beta.65. Foundation for the broader Effect migration. **Merged.** |

---

## 5. Feature Request Trends

1. **Agent sandboxing & security** — The #1 most-upvoted open issue (#2242, 44 👍). Users want filesystem and command-level restrictions, referencing `seatbelt` (macOS) and container-based approaches used by Gemini CLI and Codex CLI.
2. **Self-hosted / alternative platform CI** — Forgejo and Gitea Actions support (#1883, 46 👍) signals strong demand from the self-hosted community.
3. **Session management UX** — Multiple requests for a `/handoff` command to compact and continue in a fresh session (#26757), double-ESC to cancel and submit (#26748), and customizable panel layouts (#26914).
4. **MCP server compatibility** — Recurring issues with OAuth flows (#26195), remote MCP tool fetching (#26382), and strict MCP method requirements (#24985) indicate the MCP integration layer needs hardening.
5. **Custom keybindings & TUI flexibility** — Slash-command keybinding (#5903), sidebar overlay toggles (#6093), and theme switching during modal states (#26917) reflect a maturing TUI that users want to personalize.

---

## 6. Developer Pain Points

- **TUI regressions keep piling up.** Keybinding loss (#3699), mouse escape sequence leaks (#26198), broken markdown rendering (#21299), color shifts after editor mode (#20261), and LaTeX false positives (#15892) suggest the TUI rewrite has stability debt.
- **Model/provider compatibility is fragile.** Mistral role ordering (#7488), Cerebras reasoning content rejection (#26762), LiteLLM stream parsing failures (#25487), and subagent model assignment bugs (#25802) indicate the abstraction layer between providers and the core engine leaks provider-specific quirks.
- **Tool schema coercion is unreliable.** The read tool rejecting numeric offsets passed as strings (#26870) points to a systemic issue in how agent-generated tool arguments are validated and coerced.
- **Windows and NixOS support is brittle.** WSL+NixOS segfaults (#26846) and `bash` tool crashes on Windows (#17458) remain unresolved, limiting platform reach.
- **Session continuity breaks across updates.** The `/fork full session` regression in v1.14.48 (#26898) and build-command freezes (#19252) erode trust in session reliability during upgrades.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-12

## 1. Today's Highlights
The Pi ecosystem saw a massive spike in community activity, with developers intensely testing the TUI and pushing the boundaries of multi-provider support. A recurring theme across today's issues is the `closed-because-refactor` label, indicating that the core team is actively architecting a substantial overhaul of the codebase, causing them to close duplicates and smaller bugs in anticipation of a larger update. Extension authoring also took center stage, with multiple PRs and issues focusing on expanding the Extension API to support deeper IDE-like integrations.

## 2. Releases
No new official releases were published in the last 24 hours. The team appears to be in a heavy development and refactoring phase.

## 3. Hot Issues
1. **[#4381 Anthropic SSE parser ignores events](https://github.com/earendil-works/pi/issues/4381)**: A critical bug affecting users proxying Anthropic APIs through corporate gateways. The current SSE parser crashes if the `event:` line is missing, breaking enterprise adoption.
2. **[#4210 Bedrock converse-stream empty end_turn](https://github.com/earendil-works/pi/issues/4210)**: AWS Bedrock occasionally returns null object responses instead of throwing errors, causing the agent to silently trail off and stop rather than retrying. 
3. **[#4180 Links not clickable anymore](https://github.com/earendil-works/pi/issues/4180)**: A recent update to the alternate terminal mode broke hyperlink rendering in the TUI, removing a highly utilized feature for source-tracking.
4. **[#4399 Fresh install fails on Windows](https://github.com/earendil-works/pi/issues/4399)**: A high-priority regression where global installations via `npm` or `pnpm` on Windows 11 crash immediately on startup with no clear error output.
5. **[#4342 ANTHROPIC_AUTH_TOKEN causes 401s](https://github.com/earendil-works/pi/issues/4342)**: When using non-Anthropic providers (like Xiaomi MiMo) via the Anthropic API format, the SDK auto-reads the env var and sends conflicting auth headers, resulting in 401 Unauthorized errors.
6. **[#4408 Writing long files fails](https://github.com/earendil-works/pi/issues/4408)**: Users leveraging local models (e.g., Qwen3.6 via llama.cpp) are experiencing recurring failures where the agent truncates long files and enters a retry loop.
7. **[#4317 Persist timing metadata for message parts](https://github.com/earendil-works/pi/issues/4317)**: A highly requested feature to add timestamps to specific message blocks (thinking, text, tool calls) rather than just the overarching message, crucial for agent profiling.
8. **[#534 Config folder XDG compliance](https://github.com/earendil-works/pi/issues/534)**: A longstanding Linux user frustration regarding the dumping of config files directly into `$HOME` instead of adhering to the XDG Base Directory Specification (`~/.config/pi`).
9. **[#4413 getTextOutput crashes TUI](https://github.com/earendil-works/pi/issues/4413)**: A missing `content` array in a tool result causes an unhandled `TypeError` that entirely crashes the TUI during rendering.
10. **[#2253 OpenAI device code flow](https://github.com/earendil-works/pi/issues/2253)**: Users running Pi on remote SSH containers are requesting a device-code login flow for OpenAI to bypass the current localhost-only redirect limitations.

## 4. Key PR Progress
1. **[#4383 Update SDK tool configuration API](https://github.com/earendil-works/pi/pull/4383)**: Cleans up outdated tool factories in the SDK docs, replacing them with the modern `createAgentSession({ tools })` API using tool name allowlists.
2. **[#4426 Restore terminal on uncaught exception](https://github.com/earendil-works/pi/pull/4426)**: Introduces an `uncaughtException` handler that calls `ui.stop()` before exiting, preventing the terminal from being left in a broken raw-mode state with a hidden cursor after a crash.
3. **[#4419 Restore Vertex AI ADC URL routing](https://github.com/earendil-works/pi/pull/4419)**: Fixes routing for Vertex AI native endpoints when using Application Default Credentials (ADC), resolving provider connection issues.
4. **[#4421 Add gbrain memory extension](https://github.com/earendil-works/pi/pull/4421)**: Introduces a project-local extension integrating semantic memory, auto-querying context before agent start, and saving session summaries on shutdown.
5. **[#4395 Hide cursor when tmux pane is not focused](https://github.com/earendil-works/pi/pull/4395)**: A quality-of-life fix for tmux users ensuring the cursor is hidden in inactive panes, keeping the terminal looking clean.
6. **[#4391 Dispose SDK example sessions](https://github.com/earendil-works/pi/pull/4391)**: Resolves an issue where one-shot SDK examples using `websocket-cached` transport would leave the Node process hanging by ensuring proper session disposal.
7. **[#4388 Split browser-safe core entry from harness](https://github.com/earendil-works/pi/pull/4388)**: Refactors the core package to expose a browser-safe API at the root, moving Node-specific harness exports to a dedicated `/harness` entrypoint.
8. **[#4417 Add organization-agent package](https://github.com/earendil-works/pi/pull/4417)**: Adds the new "Agent Company" package including product docs, tests, and implementation scripts.
9. **[#4409 Cache safe lazy tools](https://github.com/earendil-works/pi/pull/4409)**: A brief community submission (accidentally opened against upstream) addressing tool caching mechanisms.
10. **[Authoring PR #4418 - (Linked to PR #4417)](https://github.com/earendil-works/pi/issues/4418)**: Establishes the organizational workflow paradigm for managing multi-agent teams.

## 5. Feature Request Trends
- **Advanced Extension APIs**: There is a strong push for richer extension hooks. Developers want to react to `theme_changed` events ([#4427](https://github.com/earendil-works/pi/issues/4427)), access session management methods like `newSession` and `reload` inside shortcut handlers ([#4422](https://github.com/earendil-works/pi/issues/4422)), and execute slash commands programmatically from tools ([#4392](https://github.com/earendil-works/pi/issues/4392)).
- **Better Workspace/Session Management**: Users are requesting more control over the agent's working context, including the ability to switch the active `cwd` on the fly ([#4423](https://github.com/earendil-works/pi/issues/4423)) and override the project config directory ([#4424](https://github.com/earendil-works/pi/issues/4424)).
- **Smarter Autocomplete and UI**: The community wants a setting to include `git-ignored` files in the `@` autocomplete ([#4200](https://github.com/earendil-works/pi/issues/4200)) and scroll-locking so the screen doesn't jump to the bottom while the user is reading past output ([#4403](https://github.com/earendil-works/pi/issues/4403)).

## 6. Developer Pain Points
- **Cross-Platform Instability**: Windows users are experiencing severe friction, from CJK path crashes ([#4425](https://github.com/earendil-works/pi/issues/4425)) and non-functional input bindings ([#4406](https://github.com/earendil-works/pi/issues/4406)) to outright installation failures ([#4399](https://github.com/earendil-works/pi/issues/4399)). 
- **TUI Rendering Edge Cases**: The terminal UI still struggles with specific edge cases, such as displaying the German sharp S (`ß`) character ([#4400](https://github.com/earendil-works/pi/issues/4400)), stack overflows on massive markdown files ([#4222](https://github.com/earendil-works/pi/issues/4222)), and hardcoded markdown regexes messing up nested list indents ([#4158](https://github.com/earendil-works/pi/issues/4158)).
- **Hard Crashes from Unhandled Exceptions**: Pi's TUI is prone to hard-crashing from minor background errors. Whether it's a `write ENOBUFS` during heavy output ([#4382](https://github.com/earendil-works/pi/issues/4382)) or a native clipboard initialization failure on macOS ([#4428](https://github.com/earendil-works/pi/issues/4428)), the app terminates abruptly instead of gracefully degrading.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-12

## 1. Today's Highlights
A new nightly build, `v0.15.10-nightly`, was released, featuring a significant performance optimization that bounds session-list metadata reads to reduce memory overhead. Community momentum is heavily focused on architectural refactoring, with the opening of a comprehensive 12-point core structural review issue. Additionally, several critical bugs affecting CLI text editing, agent approval loops, and endpoint authentication have been reported by users upgrading to the latest version.

## 2. Releases
*   **[v0.15.10-nightly.20260511.0a05ea800](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.10-nightly.20260511.0a05ea800)**
    *   **Performance:** Bounded session-list metadata reads to head/tail 64KB, introduced buffer pooling, and implemented lazy message counting (`PR #3897`).
    *   **Testing:** Stabilized main end-to-end tests.

## 3. Hot Issues
1.  **[Qwen OAuth Free Tier Policy Adjustment (#3203)](https://github.com/QwenLM/zwen-code/issues/3203):** A highly debated issue (124 comments) proposing an immediate reduction of the free tier quota from 1,000 to 100 requests/day, and a complete phase-out by late May. It is causing significant community concern regarding accessibility.
2.  **[Core + CLI Architecture Review (#4063)](https://github.com/QwenLM/zwen-code/issues/4063):** A deep architectural audit flagging 14 structural problems. The most severe (P0) highlights that the core type system is too tightly coupled to `@google/genai`, impacting 136 files.
3.  **[Context Token Overflow Breaking Sessions (#4049)](https://github.com/QwenLM/zwen-code/issues/4049):** Shell command outputs with massive JSON data are injected directly into the context, breaching model token limits and crashing the session irrecoverably.
4.  **[Agent Approval Auto-Rejection Post-Update (#4042)](https://github.com/QwenLM/zwen-code/issues/4042):** Users report that after updating to v0.15.10, required agent operation approvals are automatically rejected, rendering the tool unusable.
5.  **[GLM-5.1 Tool Output Hallucination (#3338)](https://github.com/QwenLM/zwen-code/issues/3338):** When using third-party models like GLM-5.1, the LLM hallucinates that shell commands returned empty outputs despite successful execution shown in logs.
6.  **[Infinite Thinking Loop (#4055)](https://github.com/QwenLM/zwen-code/issues/4055):** Users report the agent getting stuck in 10-to-15 minute continuous "thinking" loops without generating a response or executing tools.
7.  **[Daemon Mode Proposal (#3803)](https://github.com/QwenLM/zwen-code/issues/3803):** A comprehensive 24-chapter design proposal for running Qwen Code as a persistent daemon (`qwen serve`), indicating strong enterprise demand for background agent processing.
8.  **[`/rename --auto` Fails on Text JSON (#4057)](https://github.com/QwenLM/zwen-code/issues/4057):** The auto-rename feature fails when models return valid JSON as plain text instead of via a strict function call, showing fragility in command parsing.
9.  **[DashScope International Endpoint Fetch Failure (#4035)](https://github.com/QwenLM/zwen-code/issues/4035):** The `undici` dispatcher is incompatible with the international DashScope endpoint (`dashscope-intl.aliyuncs.com`), breaking connectivity for global users.
10. **[write_file Falsely Flags UTF-8 as Binary (#4004)](https://github.com/QwenLM/zwen-code/issues/4004):** The `write_file` tool misidentifies standard UTF-8 text (especially Markdown with Chinese characters) as binary payloads due to overly conservative encoding detection.

## 4. Key PR Progress
1.  **[feat(rewind): add file restoration support (#4064)](https://github.com/QwenLM/zwen-code/pull/4064):** Upgrades `/rewind` so it restores modified files on disk, not just conversation history.
2.  **[feat(perf): progressive MCP availability (#3994)](https://github.com/QwenLM/zwen-code/pull/3994):** Removes the synchronous block on MCP discovery, allowing users to start typing immediately while MCP servers load in the background.
3.  **[feat(core): add NotebookEdit tool (#3900)](https://github.com/QwenLM/zwen-code/pull/3900):** Adds structured cell-level editing capabilities for Jupyter notebooks (`.ipynb`), complementing the existing read functionality.
4.  **[fix(cli): preserve table ANSI color across wrapped lines (#4050)](https://github.com/QwenLM/zwen-code/pull/4050):** Fixes a UI rendering bug where inline code formatting lost its syntax highlighting on continuation lines in narrow terminals.
5.  **[feat(cli): support batch deletion of sessions (#3733)](https://github.com/QwenLM/zwen-code/pull/3733):** Introduces multi-select checkboxes to the `/delete` command for faster session management.
6.  **[Use bundled Qwen Code for PR review automation (#4067)](https://github.com/QwenLM/zwen-code/pull/4067):** Refactors CI workflows to use the repository's local Qwen Code `/review` skill instead of external GitHub actions.
7.  **[feat(vscode): add Token Plan as first-class auth provider (#3990)](https://github.com/QwenLM/zwen-code/pull/3990):** Integrates Token Plan directly into the VS Code extension's interactive auth flow.
8.  **[fix(core): merge IDE context into user prompt (#3980)](https://github.com/QwenLM/zwen-code/pull/3980):** Changes how the IDE mode injects context, prepending it to the user prompt to preserve API history integrity.
9.  **[feat(core): replace fdir crawler with git ls-files + ripgrep fallback (#3214)](https://github.com/QwenLM/zwen-code/pull/3214):** Optimizes the `@` file mention autocomplete to respect `.gitignore` and drastically reduce keystroke latency.
10. **[feat(dashscope): support DASHSCOPE_PROXY_BASE_URL (#3991)](https://github.com/QwenLM/zwen-code/pull/3991):** Enables prompt caching for users routing requests through API gateways.

## 5. Feature Request Trends
*   **Background & Daemon Operations:** Strong continued interest in background task execution (Phase D designs) and persistent daemon modes.
*   **Web Search Integration:** Users are actively requesting native `browser-use` tools and DashScope `enable_search` integration to match capabilities of competing CLI agents.
*   **Advanced Session Management:** High demand for smarter context window handling, including preventing token overflow, better compression thresholds, and localized slash commands.
*   **Customizable Workspaces:** Requests for configurable directories for Plan Mode, mimicking features seen in Gemini CLI and Claude Code.

## 6. Developer Pain Points
*   **Context Management Instability:** Developers frequently experience session crashes or broken `/rewind` functionality when context limits are reached or compressed.
*   **Third-Party Model Compatibility:** Connecting non-Qwen models (like DeepSeek v4 or GLM-5.1) remains fraught with errors, from API 400 faults to tool-call parsing failures.
*   **Basic CLI UX Limitations:** The lack of standard text-editing shortcuts (e.g., `Ctrl+Backspace`, text selection) in the terminal UI is a persistent frustration.
*   **CJK (Asian Language) Pathing & Encoding:** Ongoing bugs where LLMs incorrectly add spaces in Chinese paths, or where standard UTF-8 files are erroneously flagged as binary payloads.

</details>