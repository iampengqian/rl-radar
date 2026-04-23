# AI CLI Tools Community Digest 2026-04-16

> Generated: 2026-04-15 22:12 UTC | Tools covered: 7

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

# AI CLI Tools Ecosystem Report — 2026-04-16

## 1. Ecosystem Overview
The AI developer tools ecosystem is currently characterized by an aggressive shift from simple code completion tools to autonomous, agentic workflows, resulting in significant growing pains across all major platforms. Token consumption, cost opacity, and abrupt rate limiting have emerged as dominant friction points for developers. Under the hood, development teams are heavily investing in remote execution environments, multi-agent architecture isolation, and modular plugin marketplaces to support increasingly complex developer demands. Meanwhile, platforms are iterating rapidly through patch releases to address critical security vulnerabilities and stability regressions inherent in these fast-evolving agentic systems.

## 2. Activity Comparison
*Activity measured based on the provided daily digest highlights for 2026-04-16.*

| Tool | Highlighted Hot Issues | Highlighted Key PRs | Release Status | Dominant Community Theme |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 8 | **v2.1.110** (Stable) | Cost inflation, data loss, permission bypasses |
| **OpenAI Codex** | 10 | 10 | **v0.121.0** (Stable) | Marketplace plugins, remote execution environments |
| **Gemini CLI** | 10 | 10 | **v0.38.1** (Stable) | Voice mode integration, local models, context compaction |
| **GitHub Copilot CLI** | 10 | 2 | **v1.0.27** (Stable) | Abrupt weekly rate limits, hidden reasoning levels |
| **Kimi Code CLI** | 10 | 10 | **v1.35.0** (Stable) | Reasoning transparency, VS Code parity |
| **OpenCode** | 10 | 10 | **v1.4.6** (Stable) | Multi-model compatibility, telemetry, security patches |
| **Qwen Code** | 10 | 10 | **v0.14.5** (Stable) | Free tier discontinuation, monetization bottlenecks |

## 3. Shared Feature Directions
Developers across the ecosystem are converging on several critical requirements to make AI agents viable for production workflows:

*   **Cost and Context Transparency:** Across the board, developers are frustrated by opaque token burning. This manifests as token inflation complaints in Claude Code (#46917), rapid quota drain in Codex (#14593), and sudden weekly rate limits in Copilot CLI (#2696). Users are demanding exact context usage metrics and visibility.
*   **Advanced Context Compaction:** As context windows fill up during complex tasks, binary truncation is failing. Gemini CLI is pioneering "Union-Find Context Compaction" (clustering older messages into a cold forest), while Codex users are heavily requesting manual `/compact` controls (#11325).
*   **Multi-Agent Isolation & Memory:** Tools are shifting towards orchestrating sub-agents, requiring robust isolation. Qwen Code is building "Agent Team" features (#2886), Gemini CLI is isolating extension states for sub-agents (#25396), and Claude Code is addressing broken `worktree` isolation for background agents (#48811). 
*   **Reasoning/Thinking Transparency:** Users require visibility into the model's thought process to build trust and debug issues. Kimi Code reverted to streaming traces by default due to massive backlash, and Copilot CLI users are frustrated by the hiding of "Extra High" reasoning effort levels (#2725).
*   **Extensible Plugin/Marketplace Systems:** Both OpenAI Codex (shipping a curated marketplace in v0.121.0) and Kimi Code (seeking Codex-compatible skill structures) are standardizing how agents utilize external tools and prompts.

## 4. Differentiation Analysis

*   **Claude Code & OpenAI Codex:** Focused heavily on enterprise-grade, autonomous background agents. Codex is differentiating by building deep structural support for remote/ephemeral execution environments (environment registries) and a plugin marketplace. Claude Code is leaning into complex plugin hooks but currently struggling with trust and safety boundaries (unauthorized `rm -rf`, permission regressions).
*   **Gemini CLI:** Pioneering multi-modal and local-first CLI development. It stands alone in actively merging real-time Voice Mode capabilities and streamlining local model setup (e.g., Gemma). It also focuses on AST-aware code intelligence rather than relying purely on string matching.
*   **GitHub Copilot CLI:** Operating strictly within the GitHub/Microsoft ecosystem, this tool is maturing platform integration (VS Code, WSL). However, it is differentiated by its top-down monetization friction, facing severe user pushback against fleet-agent token usage and new weekly rate limits.
*   **Qwen Code & Kimi Code:** These tools are rapidly capturing the Asian market by focusing on localized cross-platform parity (e.g., Windows GBK encoding fixes) and integrating tightly with regional cloud providers. Qwen is aggressively pushing multi-agent parallelization, though it is currently overshadowed by sudden monetization bottlenecks.
*   **OpenCode:** Targeting the polyglot power-user. It differentiates itself by normalizing multi-provider compatibility (Azure, Ollama, Anthropic, local). Its development focuses heavily on abstracting provider quirks and maintaining open-source telemetry and observability standards.

## 5. Community Momentum & Maturity
*   **Rapidly Iterating:** **Gemini CLI**, **OpenAI Codex**, and **Claude Code** show the highest engineering momentum, landing foundational architecture overhauls (remote execution registries, voice modes, memory event busses) alongside frequent patches.
*   **Highest Friction/Volume:** **Claude Code** and **OpenAI Codex** communities are generating massive issue volumes (500+ comments on single issues), highlighting that while these tools are heavily utilized for production tasks, their rapid push toward autonomous agents is outpacing stability and safety testing.
*   **Emerging/Transitioning:** **Kimi Code** and **Qwen Code** are moving fast to close the feature gap with Western counterparts (adding settings UI, OAuth, auto-titling), but are facing steep community pushback regarding UI parity and abrupt API tier changes. **OpenCode** acts as a mature stabilizer, prioritizing cross-model bug fixes and observability over flashy features.

## 6. Trend Signals
1.  **The "Agentic Premium" is Driving Users Away:** Autonomous agents consume tokens at an alarming rate, and vendors are attempting to throttle this via rate limits or inflated pricing. Technical decision-makers must monitor token economics closely, as seen in Copilot's 58-hour retry errors and Qwen's abrupt tier discontinuation.
2.  **Security and Permission Models are Fracturing:** As CLIs execute complex bash commands, the standard "allow/deny" prompts are failing. Critical data-loss bugs (executing `rm -rf` on case-insensitive systems) and sandbox false positives indicate that the industry desperately needs a more robust, context-aware permission framework for AI agents.
3.  **Local-First and Open-Weight Models are Becoming Standard:** With API costs and rate limits fluctuating violently, there is a clear trend toward local fallbacks. Gemini CLI integrating `whisper.cpp` and Gemma, and OpenCode users pushing for Ollama support, signal that enterprise architectures should design for hybrid local/cloud agent execution.
4.  **Standardized Plugin Architectures are Imminent:** The rapid adoption of MCP (Model Context Protocol) and marketplace systems across Codex, Claude, and Kimi indicates that custom tool retrieval and standard context sharing will be the baseline expectation for any enterprise CLI tool by late 2026.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-04-16 | Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

Below are the most-discussed and highest-activity Skills (Pull Requests) in the ecosystem, based on community engagement, revision history, and thematic impact.

| Rank | Skill / PR | Functionality & Discussion | Status |
|:---:|:---|:---|:---|
| 1 | [**document-typography** (#514)](https://github.com/anthropics/skills/pull/514) | Prevents orphan word wraps, widow paragraphs, and numbering misalignment in AI-generated documents. Addresses a universal pain point: users rarely ask for good typography, but notice when it's bad. | **Open** |
| 2 | [**skill-quality-analyzer & skill-security-analyzer** (#83)](https://github.com/anthropics/skills/pull/83) | Two meta-skills for evaluating any Skill across five quality dimensions (structure, documentation, security, etc.) and flagging vulnerabilities. Long-running PR with significant iteration. | **Open** |
| 3 | [**frontend-design (revision)** (#210)](https://github.com/anthropics/skills/pull/210) | Rewrites the existing frontend-design Skill for actionability—ensuring every instruction is executable by Claude in a single conversation, eliminating vague guidance. | **Open** |
| 4 | [**ODT (OpenDocument)** (#486)](https://github.com/anthropics/skills/pull/486) | Full lifecycle Skill for `.odt`/`.ods` files: create, fill templates, parse ODT to HTML, and convert. Supports open-source/ISO standard document workflows (LibreOffice compatibility). | **Open** |
| 5 | [**DOCX tracked-change fix** (#541)](https://github.com/anthropics/skills/pull/541) | Critical bug fix: prevents document corruption when the DOCX Skill adds tracked changes to documents with existing bookmarks, caused by `w:id` namespace collisions in OOXML. | **Open** |
| 6 | [**CONTRIBUTING.md** (#509)](https://github.com/anthropics/skills/pull/509) | Adds contributor guidelines to address the repo's low (25%) community health score. Closes [issue #452](https://github.com/anthropics/skills/issues/452). | **Open** |
| 7 | [**x402 BSV micropayments** (#374)](https://github.com/anthropics/skills/pull/374) | Enables Claude to discover, authenticate, and pay AI services via BSV micropayments from natural language (image generation, transcription, storage). | **Open** |
| 8 | [**sensory (macOS AppleScript)** (#806)](https://github.com/anthropics/skills/pull/806) | Native macOS automation via `osascript` instead of screenshot-based computer use. Two-tier permission model for direct scripting vs. System Events UI automation. | **Open** |

---

## 2. Community Demand Trends

Analysis of the most-commented Issues reveals concentrated demand in five areas:

| Trend | Evidence | Key Issues |
|:---|:---|:---|
| **Trust & Security** | Namespace impersonation concerns; community skills under `anthropic/` create trust boundary abuse | [#492](https://github.com/anthropics/skills/issues/492) (👍2), [#412](https://github.com/anthropics/skills/issues/412) |
| **Skill Reliability & Evaluation** | 0% trigger rate in eval harness; skills disappearing after updates; description optimizer broken for SSO users | [#556](https://github.com/anthropics/skills/issues/556) (👍6), [#62](https://github.com/anthropics/skills/issues/62) (👍1, 10 comments), [#532](https://github.com/anthropics/skills/issues/532) |
| **Duplicate/Overlapping Skills** | `document-skills` and `example-skills` plugins install identical content, wasting context window tokens | [#189](https://github.com/anthropics/skills/issues/189) (👍7) |
| **Org-Wide Sharing** | No native way to share skills across teams; current workflow requires manual `.zip` distribution via Slack/Teams | [#228](https://github.com/anthropics/skills/issues/228) (👍4) |
| **MCP Integration** | Exposing Skills as Model Context Protocol tools for programmatic discovery and invocation | [#16](https://github.com/anthropics/skills/issues/16) |
| **Platform Compatibility** | Recurring requests for AWS Bedrock support and enterprise SSO compatibility | [#29](https://github.com/anthropics/skills/issues/29), [#532](https://github.com/anthropics/skills/issues/532) |
| **Skill Lifecycle Management** | Upload failures (500 errors), inability to delete skill versions, "not found" errors on load | [#406](https://github.com/anthropics/skills/issues/406) (👍4), [#403](https://github.com/anthropics/skills/issues/403), [#61](https://github.com/anthropics/skills/issues/61) |

---

## 3. High-Potential Pending Skills

These active PRs are technically mature and address real gaps—they are strong candidates for near-term merging:

| PR | Why It's Likely to Land | Merged? |
|:---|:---|:---|
| [**#541 — DOCX tracked-change fix**](https://github.com/anthropics/skills/pull/541) | Targeted bug fix with clear root cause (OOXML `w:id` collision); directly prevents data corruption | No |
| [**#538 — PDF case-sensitivity fix**](https://github.com/anthropics/skills/pull/538) | Corrects 8 file reference mismatches that break PDF Skill on Linux; trivial, non-controversial fix | No |
| [**#539 — YAML validation fix**](https://github.com/anthropics/skills/pull/539) | Prevents silent YAML parsing failures from unquoted descriptions with `:` characters | No |
| [**#362 — UTF-8 panic fix**](https://github.com/anthropics/skills/pull/362) | Resolves Rust panics on multi-byte characters in `quick_validate.py`; internationalization-critical | No |
| [**#509 — CONTRIBUTING.md**](https://github.com/anthropics/skills/pull/509) | Directly addresses repo health gap; lowest-friction path to improving community contribution flow | No |
| [**#521 — record-knowledge**](https://github.com/anthropics/skills/pull/521) | Solves the cross-session context loss problem—Claude's most fundamental UX gap in code mode | No |
| [**#723 — testing-patterns**](https://github.com/anthropics/skills/pull/723) | Full-stack testing skill (unit, React, integration, E2E) aligned with testing trophy philosophy | No |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for robust, reliable document-generation Skills (DOCX/ODT/PDF) combined with a trustworthy Skill quality-assurance and evaluation framework—reflecting that users want production-grade output, not just prompting templates.**

---

# Claude Code Community Digest — 2026-04-16

## 1. Today's Highlights

Claude Code shipped **v2.1.110**, introducing a new flicker-free `/tui fullscreen` mode and decoupling the verbose transcript toggle (`Ctrl+O`) from the new `/focus` command. Community attention remains dominated by **token cost inflation** — multiple issues now report 2–3× output token increases and ~20K cache_creation inflation traced to recent versions — alongside continued fallout from session limits on the Max plan (603 comments and climbing). Several **critical data-loss and security issues** were also filed today, including unauthorized `rm -rf` execution on case-insensitive filesystems and bash commands bypassing the permission system.

---

## 2. Releases

### [v2.1.110](https://github.com/anthropics/claude-code/releases/tag/v2.1.110)
- **`/tui` command and `tui` setting**: Run `/tui fullscreen` to switch to flicker-free rendering within the same conversation.
- **`Ctrl+O` remapped**: Now toggles between normal and verbose transcript only. The focus view is toggled separately via the new `/focus` command.
- Added `autoSc` (truncated — likely auto-scroll improvement).

### [v2.1.109](https://github.com/anthropics/claude-code/releases/tag/v2.1.109)
- Improved the extended-thinking indicator with a rotating progress hint.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [#38335](https://github.com/anthropics/claude-code/issues/38335) — **Max plan session limits exhausted abnormally fast** (603 💬, 412 👍) | The single most-discussed issue. Since March 23, CLI users on the Max plan report session limits draining far faster than expected. Still open after 3 weeks with no resolution. |
| 2 | [#46917](https://github.com/anthropics/claude-code/issues/46917) — **~20K cache_creation token inflation in v2.1.100+** (29 💬, 162 👍) | Has-repro investigation showing server-side token inflation tied to User-Agent routing. Directly increases costs for all users on recent versions. |
| 3 | [#48808](https://github.com/anthropics/claude-code/issues/48808) — **2–3× output token increase since v2.1.96** | New report today extending the cost-inflation theme: output tokens have doubled or tripled across recent versions. If confirmed, this compounds the cache issue. |
| 4 | [#48792](https://github.com/anthropics/claude-code/issues/48792) — **Unauthorized `rm -rf` on case-insensitive filesystem** | Critical data-loss bug: Claude Code executed `rm -rf` that destroyed an entire project directory due to case-insensitive path resolution on macOS. |
| 5 | [#48770](https://github.com/anthropics/claude-code/issues/48770) — **`brew install` executed without permission prompt** | Security regression: the Bash tool ran `brew install kubeconform` without user approval despite no matching allow rule. Undermines trust in the permission system. |
| 6 | [#46445](https://github.com/anthropics/claude-code/issues/46445) — **`/continue` and `/resume` show sessions across all projects** (27 💬, 52 👍) | Regression in v2.1.101: session listing is no longer scoped to the current project directory, breaking established workflows. |
| 7 | [#48281](https://github.com/anthropics/claude-code/issues/48281) — **Desktop app crashing with new version** (7 💬) | Multiple users report the macOS desktop app crashes after the latest update. |
| 8 | [#48782](https://github.com/anthropics/claude-code/issues/48782) — **160 session JSONL files deleted, auto-memory saves nothing** | Claude Code deleted 60,702 messages of session history and the memory system retained no information about months of work. |
| 9 | [#48158](https://github.com/anthropics/claude-code/issues/48158) — **Dark mode redesign feels like a regression** (12 💬, 26 👍) | Significant community backlash to the claude.ai/code UI redesign; users want the previous theme or an option to revert. |
| 10 | [#48811](https://github.com/anthropics/claude-code/issues/48811) — **Worktree flag ignored for concurrent background agents** | Agent isolation broken: the `worktree` flag is silently ignored when running concurrent background agents, risking file conflicts. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#48714](https://github.com/anthropics/claude-code/pull/48714) — **Stop hook example: proposal scraper** | Adds a Stop hook that persists proposal blocks from assistant responses to `PROPOSALS.md`, surviving session crashes and context compaction. |
| 2 | [#47830](https://github.com/anthropics/claude-code/pull/47830) — **subagent-cleanup plugin** | Terminates orphaned `claude --resume` processes at session start, preventing CPU/memory leaks from accumulating across sessions. |
| 3 | [#39148](https://github.com/anthropics/claude-code/pull/39148) — **preserve-session plugin** | Assigns path-independent UUIDs to projects so session history survives directory renames, moves, or copies. |
| 4 | [#48377](https://github.com/anthropics/claude-code/pull/48377) — **Fix semgrep shell-injection rule** | Addresses a CI/CD security rule for GitHub Actions context variable interpolation. |
| 5 | [#48353](https://github.com/anthropics/claude-code/pull/48353) — **Align agent-development skill metadata** | Fixes skill naming to match directory structure and agnix parsing rules. |
| 6 | [#48342](https://github.com/anthropics/claude-code/pull/48342) – [#48341](https://github.com/anthropics/claude-code/pull/48341) — **YAML frontmatter fixes (8 PRs by Rohan5commit)** | A systematic batch of PRs fixing invalid YAML frontmatter across `plugin-dev`, `pr-review-toolkit`, and related plugin files so agnix can parse them correctly. |
| 7 | [#48351](https://github.com/anthropics/claude-code/pull/48351) — **Hookify writing-rules skill name alignment** | Renames skill to match directory naming conventions. |
| 8 | [#48352](https://github.com/anthropics/claude-code/pull/48352) — **Escape `<example>` tag in create-plugin docs** | Prevents agnix from treating prose XML references as unclosed tags. |

---

## 5. Feature Request Trends

1. **Session persistence and memory continuity** — The #1 theme. [#48799](https://github.com/anthropics/claude-code/issues/48799) (118 autonomous sessions worth of data) and [#48782](https://github.com/anthropics/claude-code/issues/48782) both demand durable agent state that survives context fills, crashes, and session resets.

2. **UI/theme customization and rollback** — [#48158](https://github.com/anthropics/claude-code/issues/48158), [#48706](https://github.com/anthropics/claude-code/issues/48706), and [#48807](https://github.com/anthropics/claude-code/issues/48807) (customizable spinner words) all point to users wanting control over the visual experience rather than forced redesigns.

3. **Desktop ↔ CLI parity** — [#48803](https://github.com/anthropics/claude-code/issues/48803) (project subagents on desktop), [#37323](https://github.com/anthropics/claude-code/issues/37323) (`/btw` in VS Code), and [#48809](https://github.com/anthropics/claude-code/issues/48809) (CLI session import) all request feature consistency across surfaces.

4. **Linux credential security** — [#47955](https://github.com/anthropics/claude-code/issues/47955) requests `libsecret` integration so sensitive plugin credentials aren't stored in plaintext on Linux.

5. **Per-prompt undo/rewind** — [#43755](https://github.com/anthropics/claude-code/issues/43755) asks for granular rewind in the Desktop app, reflecting a broader need for safer experimentation workflows.

---

## 6. Developer Pain Points

- **Token cost inflation is the dominant concern.** Between [#46917](https://github.com/anthropics/claude-code/issues/46917) (cache_creation inflation), [#48808](https://github.com/anthropics/claude-code/issues/48808) (2–3× output tokens), and [#38335](https://github.com/anthropics/claude-code/issues/38335) (Max plan limits), developers feel recent versions are significantly more expensive with no clear explanation. The User-Agent routing hypothesis suggests a server-side regression.

- **Permission system regressions erode trust.** Unauthorized `rm -rf` ([#48792](https://github.com/anthropics/claude-code/issues/48792)), `brew install` bypassing approval ([#48770](https://github.com/anthropics/claude-code/issues/48770)), and ignored `PermissionDecision` in VS Code ([#36286](https://github.com/anthropics/claude-code/issues/36286)) collectively suggest the safety boundary layer has weakened across recent releases.

- **Session/data loss remains unresolved.** Multiple issues ([#48782](https://github.com/anthropics/claude-code/issues/48782), [#48799](https://github.com/anthropics/claude-code/issues/48799)) document catastrophic loss of conversation history and memory state, with no built-in recovery mechanism. Developers running long autonomous agent loops are particularly affected.

- **Desktop app stability.** Crashes ([#48281](https://github.com/anthropics/claude-code/issues/48281)), layout clipping ([#48476](https://github.com/anthropics/claude-code/issues/48476)), and UI regressions ([#48158](https://github.com/anthropics/claude-code/issues/48158)) suggest the recent desktop redesign shipped with quality issues.

- **Agent isolation is incomplete.** The `worktree` flag being silently ignored ([#48811](https://github.com/anthropics/claude-code/issues/48811)) and the lack of session persistence for agents ([#48799](https://github.com/anthropics/claude-code/issues/48799)) indicate the agent/subagent architecture needs hardening before it's safe for production concurrent use.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-16

## 1. Today's Highlights

OpenAI shipped **Codex CLI v0.121.0 (stable)** introducing a new `codex marketplace add` command for installing plugins from GitHub, git URLs, local directories, and direct `marketplace.json` URLs, alongside TUI prompt-history improvements with `Ctrl+R` reverse search. Internally, the engineering team landed a significant **environment registry** stack and a **remote MCP stdio** transport series, signaling imminent support for remote/ephemeral execution environments and remote MCP server hosting. On the community side, the evergreen token-burning bug (#14593) crossed 542 comments, and a newly closed context-compaction failure (#17809) highlights ongoing growing pains around prompt-cache parameter handling.

---

## 2. Releases

| Version | Type | Key Changes |
|---|---|---|
| **rust-v0.121.0** | Stable | `codex marketplace add` + app-server marketplace installation support (#17087, #17717, #17756); TUI prompt history with `Ctrl+R` reverse search and local recall |
| **rust-v0.122.0-alpha.1** | Alpha | Pre-release for next cycle (no public changelog yet) |
| **rust-v0.121.0-alpha.10…14** | Alpha | Iterative alpha fixes leading up to v0.121.0 stable |

**Takeaway:** The marketplace plugin system is the headline feature—developers can now curate and install Codex extensions from any GitHub repo or local path, opening the door to a rich plugin ecosystem.

---

## 3. Hot Issues

1. **[#14593](https://github.com/openai/codex/issues/14593) — Burning tokens very fast** *(542 comments, 222 👍)*
   Business-tier users report extremely rapid token consumption in VS Code. With half a thousand comments, this remains the #1 pain point; no definitive fix has landed yet.

2. **[#17809](https://github.com/openai/codex/issues/17809) — Context compaction fails with unknown parameter 'prompt_cache_retention'** *(38 comments, 56 👍)* ⚡ **CLOSED**
   Automatic context compaction in the Mac app crashed with an API parameter error. Closed within ~24 hours, likely addressed server-side or via the new alpha releases.

3. **[#12764](https://github.com/openai/codex/issues/12764) — 401 Unauthorized on codex CLI** *(95 comments, 5 👍)*
   Persistent auth failures against `chatgpt.com/backend-api/codex/responses` affecting multiple CLI versions. Still open; suggests an ongoing session/auth token issue.

4. **[#11325](https://github.com/openai/codex/issues/11325) — Manual /compact command in Codex app** *(51 comments, 141 👍)*
   Widely requested feature: bring the CLI's `/compact` context-management command to the desktop app. High 👍 count signals strong community demand.

5. **[#8648](https://github.com/openai/codex/issues/8648) — Codex replies to earlier messages instead of latest** *(41 comments, 33 👍)*
   Multi-turn conversation context confusion where the model responds to an earlier user message. Affects reliability of agentic workflows.

6. **[#16231](https://github.com/openai/codex/issues/16231) — High CPU usage on macOS after VS Code extension update** *(33 comments, 50 👍)*
   Regression in extension v26.325 causing thermal and CPU spikes on Apple Silicon (M5 Pro, macOS Tahoe). Still unresolved.

7. **[#2628](https://github.com/openai/codex/issues/2628) — Project-specific MCPs** *(28 comments, 140 👍)* ⚡ **CLOSED**
   Request to load MCP server configs per-project rather than globally. Closed—possibly addressed by recent PR work on environment/MCP configuration.

8. **[#17624](https://github.com/openai/codex/issues/17624) — Review tab stuck on "Loading diff" on Windows** *(15 comments, 13 👍)*
   Windows path handling bug where `/F:/...` is passed literally to `git diff`. Blocks code review entirely for Windows users.

9. **[#17525](https://github.com/openai/codex/issues/17525) — Every edit on Ubuntu requires skipping sandbox** *(12 comments)*
   Regression in v0.120.0 where normal file edits trigger sandbox violations on Ubuntu 24.04, forcing users to bypass security protections.

10. **[#16857](https://github.com/openai/codex/issues/16857) — High GPU usage from thinking animation** *(11 comments, 15 👍)*
    A tiny loading animation in the macOS app causes significant GPU spikes. Indicates rendering inefficiency in the Electron/Tauri UI layer.

---

## 4. Key PR Progress

1. **[#18010](https://github.com/openai/codex/pull/18010) — Add environment registry support** ⚡ **CLOSED/MERGED**
   Introduces an ID-keyed environment registry with default-environment fallback. Foundation for remote and containerized execution environments.

2. **[#18013](https://github.com/openai/codex/pull/18013) — Add environment registry to exec-server**
   Extends the registry into the execution server with `EnvironmentConfig`, registration, lookup, and listing—storage/caching layer only.

3. **[#18014](https://github.com/openai/codex/pull/18014) — Thread environment selection through core spawn**
   Threads `environment_id` through core thread creation; resolves the selected environment at session spawn time.

4. **[#18015](https://github.com/openai/codex/pull/18015) — Expose environment selection in app-server thread APIs**
   Adds `thread/start.environmentId` plus `environment/register` and `environment/list` app-server endpoints.

5. **[#17873](https://github.com/openai/codex/pull/17873) — Add runtime model provider abstraction** ⚡ **CLOSED/MERGED**
   Introduces a `ModelProvider` trait with `Arc<dyn ModelProvider>` in turn/client state. Key step toward multi-provider support beyond OpenAI's own models.

6. **[#17974](https://github.com/openai/codex/pull/17974) — Wire remote MCP stdio through executor** *(5/5 in series)*
   Completes the remote MCP stdio stack: selects local or executor stdio at client startup based on MCP server environment settings.

7. **[#17987](https://github.com/openai/codex/pull/17987) — Add executor process transport for MCP stdio** *(4/5)*
   Adds an `rmcp` transport backed by executor process read/write, enabling MCP servers to run in remote execution environments.

8. **[#18009](https://github.com/openai/codex/pull/18009) — Route thread reads through thread store**
   Migrates `thread_read` and `get_thread_summary` to use the `ThreadStore` interface, enabling future remote thread persistence.

9. **[#17978](https://github.com/openai/codex/pull/17978) — Persist and prewarm agent tasks per thread**
   Persists registered agent tasks in session state and prewarms task registration on identity registration success—improves thread-resume reliability.

10. **[#17996](https://github.com/openai/codex/pull/17996) — Add codex_hook_run analytics event**
    Adds product analytics for hook handler executions (success/failure/block), giving the team visibility into the new hooks system.

---

## 5. Feature Request Trends

| Theme | Representative Issues | Community Signal |
|---|---|---|
| **Project-level & per-directory config** | [#2628](https://github.com/openai/codex/issues/2628) (project MCPs), [#3120](https://github.com/openai/codex/issues/3120) (per-project config.toml), [#12115](https://github.com/openai/codex/issues/12115) (nested AGENTS.md) | 140 + 35 + 27 👍 — very strong demand |
| **Context management controls** | [#11325](https://github.com/openai/codex/issues/11325) (manual /compact), [#14969](https://github.com/openai/codex/issues/14969) (select model for plan), [#13206](https://github.com/openai/codex/issues/13206) (plan_model config) | 141 + 5 + 8 👍 |
| **Flexible sandbox model** | [#18005](https://github.com/openai/codex/issues/18005) (no-sandbox mode for Windows), [#17644](https://github.com/openai/codex/issues/17644) (Metal/GPU IOKit access), [#17525](https://github.com/openai/codex/issues/17525) (Ubuntu sandbox) | Recurring cross-platform frustration |
| **Resource/performance optimization** | [#16857](https://github.com/openai/codex/issues/16857) (GPU animation), [#16231](https://github.com/openai/codex/issues/16231) (CPU spikes), [#10530](https://github.com/openai/codex/issues/10530) (macOS CPU) | Multiple reports on macOS/VS Code |

**Summary:** The community is converging on three big asks: (1) **project-scoped configuration** for MCP servers, hooks, and AGENTS.md; (2) **finer-grained control** over context compaction and model selection per mode; and (3) **sandbox flexibility** especially on Windows and Linux where the current model is either too restrictive or broken.

---

## 6. Developer Pain Points

- **Token consumption opacity (#14593):** Business users are burning through tokens without clear visibility into why. With 542 comments and no resolution, this is eroding trust among paying customers.
- **Performance regressions in extensions & desktop app:** High CPU/GPU usage reports (#16231, #10530, #16857, #17977) span both VS Code and native apps, particularly on Apple Silicon. These regressions appear to spike after agent tasks complete or when revisiting old chats.
- **Sandbox friction on Linux & Windows:** Ubuntu users face sandbox false-positives blocking normal edits (#17525), Windows users must re-run sandbox setup per workspace (#18005), and macOS sandbox blocks legitimate GPU access for MLX (#17644). The all-or-nothing sandbox model needs refinement.
- **Auth & quota confusion:** 401 errors (#12764) and inconsistent quota displays (#17764, #12708) suggest fragile session management across CLI, app, and extension surfaces.
- **Windows path handling bugs:** Literal `/F:/...` paths breaking `git diff` (#17624) and file reference links not working (#17649) indicate insufficient Windows-native testing.
- **Hooks system gaps:** Repo-local `.codex/config.toml` hook configurations don't fire in interactive sessions (#17532), limiting the new plugin/marketplace system's utility for team-shared workflows.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-16

## 1. Today's Highlights
The Gemini CLI ecosystem is seeing significant momentum in **Voice Mode** development and foundational architectural overhauls. The release of v0.38.1 patches a recent stable release, while v0.39.0-preview.0 introduces simplified policy priorities and a new memory testing harness. Behind the scenes, major structural changes—including dynamic extension provisioning, sandbox refactoring, and local model support—are actively shaping the next generation of the CLI.

## 2. Releases
*   **v0.38.1**: A targeted patch release cherry-picking a fix for v0.38.0. ([Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.38.0...v0.38.))
*   **v0.38.0**: Introduces a fix to refresh the slash command list after `/skills reload` and ensures the `complete_task` tool executes correctly.
*   **v0.39.0-preview.0**: Brings refactored policy priorities, consolidated read-only rules, and a new memory usage integration test harness.
*   **v0.40.0-nightly.20260415**: Updates generalist agent documentation and improves MCP error code handling.

## 3. Hot Issues
1.  **RipGrep Download Failures Cripple Startup** ([#25323](https://github.com/google-gemini/gemini-cli/issues/25323)): If RipGrep download fails (e.g., due to GitHub access restrictions), the CLI hangs for 2+ minutes. The community suggests failing fast or bundling the dependency.
2.  **Insanely Long Thinking Time** ([#25397](https://github.com/google-gemini/gemini-cli/issues/25397)): Users are experiencing instances where the agent gets "stuck" in prolonged thinking cycles without returning results.
3.  **Persistent Permission Prompts** ([#24916](https://github.com/google-gemini/gemini-cli/issues/24916)): A frustrating regression where the CLI repeatedly asks for file permissions, ignoring the "allow for all future sessions" configuration.
4.  **AST-Aware File Reading Investigation** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)): An Epic exploring AST-aware tools to read exact method bounds, reducing token noise and eliminating misaligned reads.
5.  **Systematic Instruction-Following Failures** ([#22261](https://github.com/google-gemini/gemini-cli/issues/22261)): A deep-dive from a daily user detailing persistent scope boundary violations and agentic loop behaviors over 336 production sessions.
6.  **Shell Execution Gets Stuck** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)): CLI hangs with "Waiting input" after a simple shell command completes, blocking the agentic loop.
7.  **Voice Mode Privacy & Compliance** ([#25491](https://github.com/google-gemini/gemini-cli/issues/25491)): A timely request to add UX warnings clarifying data privacy when cloud-based voice transcription is active.
8.  **Voice Mode Latency & Cutoff** ([#25495](https://github.com/google-gemini/gemini-cli/issues/25495)): Reports of high end-of-speech latency and dropped sentences (buffer cutoff) when using the Gemini Live backend compared to local Whisper.
9.  **Broken CONTRIBUTING.md Links** ([#25488](https://github.com/google-gemini/gemini-cli/issues/25488)): CI link checker failures due to paths resolving to a non-existent `docs/docs/` directory, impacting new contributors.
10. **Subagent Approval Mode Awareness** ([#23582](https://github.com/google-gemini/gemini-cli/issues/23582)): Subagents currently attempt blocked tool calls because they lack context regarding the active global approval mode (e.g., Auto-Edit).

## 4. Key PR Progress
1.  **Real-time Voice Mode** ([PR #24174](https://github.com/google-gemini/gemini-cli/pull/24174)): Implements voice-to-text dictation directly in the terminal, supporting both the Gemini Live API and local `whisper.cpp` backends.
2.  **Local Model Setup (`gemini gemma`)** ([PR #25498](https://github.com/google-gemini/gemini-cli/pull/25498)): Introduces a new command suite for streamlined local model setup and LiteRT server log inspection.
3.  **Union-Find Context Compaction** ([PR #24736](https://github.com/google-gemini/gemini-cli/pull/24736)): Introduces union-find clustering for agent history, graduating older messages to a "cold forest" instead of doing a binary token-boundary split.
4.  **MemoryService Event Bus** ([PR #25394](https://github.com/google-gemini/gemini-cli/pull/25394)): Wires a pluggable `MemoryService` event bus into the CLI lifecycle, allowing external memory providers to hook into core events.
5.  **Sandbox Permission Overrides** ([PR #25338](https://github.com/google-gemini/gemini-cli/pull/25338)): Fixes an issue where strict `.git` directory protections overrode explicit user write permissions across macOS and Linux sandboxes.
6.  **Dynamic Extension Provisioning** ([PR #25384](https://github.com/google-gemini/gemini-cli/pull/25384)): Implements secure, dynamic resolution and on-demand provisioning of plan directories for extensions.
7.  **Sub-agent Extension Isolation** ([PR #25396](https://github.com/google-gemini/gemini-cli/pull/25396)): Uses `AsyncLocalStorage` to isolate the `activeExtensionName` context, preventing state leakage during concurrent sub-agent execution.
8.  **Large Tool Output OOM Fix** ([PR #20406](https://github.com/google-gemini/gemini-cli/pull/20406)): Prevents V8 Out of Memory errors by streaming large shell command outputs directly to disk rather than holding them in memory.
9.  **Telemetry Structural Truncation** ([PR #25344](https://github.com/google-gemini/gemini-cli/pull/25344)): Implements a bounded, recursive truncation strategy for telemetry payloads to prevent JSON parsing errors safely.
10. **Sandbox Abstraction Layer** ([PR #25489](https://github.com/google-gemini/gemini-cli/pull/25489)): Refactors OS-specific sandbox managers into a centralized `AbstractOsSandboxManager` base class to standardize permission logic across Windows, Mac, and Linux.

## 5. Feature Request Trends
*   **Voice Mode Polish**: A massive influx of feature requests aiming to make Voice mode production-ready, including cursor-aware text insertion ([#25494](https://github.com/google-gemini/gemini-cli/issues/25494)), dynamic audio wave UI ([#25493](https://github.com/google-gemini/gemini-cli/issues/25493)), and better UX for model selection ([#25492](https://github.com/google-gemini/gemini-cli/issues/25492)).
*   **Proactive Agent Memory**: Strong demand for routing memory correctly (global vs. project) ([#22819](https://github.com/google-gemini/gemini-cli/issues/22819)) and tuning the main agent prompt to trigger memory writes proactively based on user corrections ([#22809](https://github.com/google-gemini/gemini-cli/issues/22809)).
*   **Advanced Code Intelligence**: Users and maintainers are pushing for AST-aware CLI tools to map codebases accurately ([#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) instead of relying purely on string/regex matching.
*   **Local-First Computing**: Growing interest in local model orchestration (e.g., Gemma) and mirroring Whisper models locally for privacy and reliability ([#25496](https://github.com/google-gemini/gemini-cli/issues/25496)).

## 6. Developer Pain Points
*   **Agentic Reliability**: Developers are experiencing high friction with agent looping, extended "thinking" hangs, and systematic instruction-following failures during complex multi-file edits.
*   **Environment & UI Bugs**: Scrambled text over SSH ([#24202](https://github.com/google-gemini/gemini-cli/issues/24202)), broken screen rendering during streaming tables ([#25218](https://github.com/google-gemini/gemini-cli/issues/25218)), and thick UI borders ([#24915](https://github.com/google-gemini/gemini-cli/issues/24915)) remain persistent complaints.
*   **Context & Sandbox Friction**: The model frequently creates tmp scripts in random directories ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)), and developers hit friction when explicit file write permissions clash with internal sandbox governance rules.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-16

## 1. Today's Highlights
GitHub Copilot CLI rolled out **v1.0.27** yesterday, bringing a trio of highly requested UX and platform fixes: clearer trial-status messaging, inline `@files` / `#issues` hints in the status bar, and a long-awaited WSL clipboard BOM fix. On the community side, **rate-limiting** exploded as the dominant theme—multiple new issues report "weekly" rate limits with absurd retry windows (up to 58 hours), overshadowing productive discussions on model reasoning levels and MCP reliability.

## 2. Releases

### v1.0.27 (2026-04-15)
- **Copilot Pro trial pause messaging** — Replaces the generic policy error with a clear explanation when a trial is paused, directly addressing [#2686].
- **Status bar hints** — Shows `@files` and `#issues` hints while typing, and `/help` when the slash command picker is open.
- **WSL clipboard fix** — Clipboard copy on WSL no longer leaks an invisible BOM character into pasted text.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|--------------------|
| 1 | [#2686 — Misleading "Server failed to connect" error for active Copilot Pro Trial](https://github.com/github/copilot-cli/issues/2686) | Directly triggered the v1.0.27 messaging fix; users on active trials were blocked with confusing errors. | 25 comments, 9 👍; now closed after release. |
| 2 | [#2696 — Rate limit retry in 58 hours!](https://github.com/github/copilot-cli/issues/2696) | A new "weekly" rate limit reportedly asks users to wait **58 hours**, suggesting a backend regression. | 5 comments, 4 👍; triage pending. |
| 3 | [#2741 — Very sudden "user_weekly_rate_limited" error](https://github.com/github/copilot-cli/issues/2741) | Another report of the new weekly limit appearing without warning, questioning whether this is intentional. | 2 comments; opened same day as release. |
| 4 | [#2725 — GPT-5.4 /model picker hides Extra High effort level](https://github.com/github/copilot-cli/issues/2725) | The UI only shows Low/Medium/High for GPT-5.4, yet `xhigh` still works at runtime—an inconsistency that confuses power users. | 3 comments, 6 👍. |
| 5 | [#2739 — xhigh reasoning removed for gpt-5.4 and gpt-5.3-codex](https://github.com/github/copilot-cli/issues/2739) | Companion to #2725; users report `xhigh` is missing from the picker, calling the models "useless" without it. | 1 comment; high frustration. |
| 6 | [#618 — Custom slash commands from .github/prompts directory](https://github.com/github/copilot-cli/issues/618) | The top-voted open feature request (95 👍, 30 comments) asks for Claude-Code-style custom commands. Now closed—possibly shipping soon. | 95 👍, 30 comments. |
| 7 | [#2336 — Strange rate limit message](https://github.com/github/copilot-cli/issues/2336) | A moderate task triggered a rate limit after ~30 seconds of background agent work, raising concerns about agent token budgets. | 13 comments, 2 👍. |
| 8 | [#2082 — ctrl+shift+c no longer copies on Linux](https://github.com/github/copilot-cli/issues/2082) | A basic terminal shortcut regression affecting Ubuntu users since v1.0.4; still open after a month. | 16 comments, 7 👍. |
| 9 | [#2232 — CLI stopped loading .mcp.json or .vscode/mcp.json](https://github.com/github/copilot-cli/issues/2232) | MCP config loading regressed in v1.0.11; critical for users relying on custom tool servers. | 8 comments, 11 👍; closed. |
| 10 | [#2712 — MS legal/monetary liability for rate limit behavior](https://github.com/github/copilot-cli/issues/2712) | User argues the rate-limit system can trigger without explicit user action (fleet/background agents), raising liability concerns. | 4 comments, 2 👍. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| 1 | [#2587 — Add automated issue classification with GitHub Agentic Workflows](https://github.com/github/copilot-cli/pull/2587) | Introduces an AI-powered workflow using `gh-aw` to auto-apply `area:` and `triage` labels on issue open/reopen. | Closed (merged) |
| 2 | [#2565 — Guard against duplicate PATH entries on reinstall](https://github.com/github/copilot-cli/pull/2565) | Prevents the installer from appending duplicate PATH lines when run twice without a shell restart. | Open |
| 3 | [#1617 — Top-level cleanup: move examples/gradio and add scripts](https://github.com/github/copilot-cli/pull/1617) | Reorganizes repo structure by moving `gradio/` to `examples/` and adding helper scripts. | Closed (invalid) |
| 4 | [#1850 — Create blank.yml](https://github.com/github/copilot-cli/pull/1850) | Spam/placeholder PR. | Closed (invalid) |
| 5 | [#1916 — Rename install.sh to 1install.sh](https://github.com/github/copilot-cli/pull/1916) | Unsubstantiated rename PR. | Closed (invalid) |
| 6 | [#2069 — Create devcontainer.json](https://github.com/github/copilot-cli/pull/2069) | Adds a devcontainer file; closed as invalid. | Closed (invalid) |
| 7 | [#2713 — Create my-agent.agent.md](https://github.com/github/copilot-cli/pull/2713) | External contributor PR adding an agent template. | Closed (invalid) |

> **Note:** Only 2 of 7 recent PRs are substantive (#2587 merged, #2565 open). The rest are spam/invalid, suggesting the repo could benefit from stricter PR templates or gating.

---

## 5. Feature Request Trends

1. **Custom Slash Commands & Prompts** — [#618] (95 👍) leads demand for `.github/prompts/` support, aligning with Claude Code's custom commands pattern.
2. **Animation & UX Controls** — [#1326] (18 👍) requests a blanket "disable all animations" flag; [#2541] (closed) asked to disable the eye animation specifically.
3. **MCP Explicit Triggering** — [#2690] proposes `@mcp` or `#mcp-` syntax to force specific MCP tool invocation, reflecting frustration with unreliable autonomous MCP selection.
4. **Persisted Permissions** — [#2284] (5 👍) wants `/add-dir` permissions to survive across sessions instead of being session-scoped.
5. **Per-Model Effort Level Parity** — [#2725] and [#2739] highlight demand for `xhigh` reasoning to be consistently available and visible for GPT-5.x models.

---

## 6. Developer Pain Points

| Theme | Evidence | Sentiment |
|-------|----------|-----------|
| **Rate Limiting Opacity & Aggressiveness** | [#2696] (58h retry), [#2336], [#2741], [#2712], [#2545] | 🔴 High frustration — users encounter new "weekly" limits without warning; fleet/agent workflows can self-trigger limits. |
| **Reasoning Level Regressions** | [#2725], [#2739] | 🟠 Moderate — `xhigh` hidden or removed for flagship models undermines power-user workflows. |
| **MCP Reliability** | [#2232], [#2282], [#2630] | 🟠 Moderate — MCP configs fail to load, connections drop, custom agents don't inherit MCP tools. |
| **Platform Regression (Linux)** | [#2082] | 🟡 Persistent — basic clipboard shortcut broken for a month on Ubuntu. |
| **Authentication Loops** | [#254] | 🟡 Niche but painful — repeated re-login prompts despite valid credentials. |
| **Headless / kqueue Leaks** | [#2389], [#2707] | 🟡 Edge-case but critical for CI — file descriptor leaks eventually break all tool execution. |

---

*Digest generated from public GitHub data on 2026-04-16. All issue and PR numbers link to their respective pages on `github.com/github/copilot-cli`.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

## Kimi Code CLI Community Digest — 2026-04-16

### 1. Today's Highlights
Kimi CLI rolled out **v1.35.0**, headlined by a highly anticipated change: defaulting `show_thinking_stream` to `true` so new installations immediately see the model's reasoning trace. Under the hood, the release also patches a critical session deadlock in the Web UI and fixes watchdog reconnection conflicts during pending approvals. Community activity is heavily focused on VS Code plugin parity, OAuth reliability, and broader compatibility with standard developer environments.

---

### 2. Releases

**v1.35.0** ([#1901](https://github.com/MoonshotAI/kimi-cli/pull/1901))
* **Streaming thinking by default:** Fresh installs now show the `show_thinking_stream` preview automatically; users who prefer the compact 1.32 indicator can opt out via config.
* **Web UI deadlock fix:** Clears stale in-flight prompts on error to prevent `is_busy` getting stuck at `True` ([#1890](https://github.com/MoonshotAI/kimi-cli/pull/1890)).
* **Watchdog fix:** Prevents watchdog reconnect while an approval or question prompt is pending ([#1899](https://github.com/MoonshotAI/kimi-cli/pull/1899)).
* **Docs housekeeping:** Misplaced 1.34.0 changelog entries corrected ([#1885](https://github.com/MoonshotAI/kimi-cli/pull/1885)).

---

### 3. Hot Issues

| # | Issue | Why it matters |
|---|-------|----------------|
| 1 | [#1864](https://github.com/MoonshotAI/kimi-cli/issues/1864) – Display full thinking traces | 10 👍 / 11 comments. Users consider the reasoning trace essential for trust and debugging. Its removal was seen as a major regression. |
| 2 | [#1865](https://github.com/MoonshotAI/kimi-cli/issues/1865) – Thinking process disappeared | 3 👍. Chinese-speaking users echo the same frustration; worded as "pure negative optimization." |
| 3 | [#1877](https://github.com/MoonshotAI/kimi-cli/issues/1877) – VS Code compact-mode thinking block won't expand | Directly affects day-to-day IDE workflow for power users who rely on compact mode. |
| 4 | [#1882](https://github.com/MoonshotAI/kimi-cli/issues/1882) – `WriteFile` should request permission first | Timeout during generation forces re-runs; pre-flight permission would improve async workflows. |
| 5 | [#1897](https://github.com/MoonshotAI/kimi-cli/issues/1897) – Web UI hangs on MCP server failure | Unreachable MCP server crashes the worker, leaving the UI spinning forever. Critical reliability bug. |
| 6 | [#1905](https://github.com/MoonshotAI/kimi-cli/issues/1905) – `/login` OAuth wait can't be cancelled | Users are trapped in the authorization flow with no <kbd>Esc</kbd> support. Fix already proposed in PR #1906. |
| 7 | [#1560](https://github.com/MoonshotAI/kimi-cli/issues/1560) & [#1902](https://github.com/MoonshotAI/kimi-cli/issues/1902) – VS Code Skill sends immediately on selection | Breaks the expected "select → edit → send" pattern; multiple duplicate reports highlight the pain. |
| 8 | [#1889](https://github.com/MoonshotAI/kimi-cli/issues/1889) – SubAgent file changes invisible in VS Code change list | Undermines code-review workflows when edits happen silently. |
| 9 | [#1898](https://github.com/MoonshotAI/kimi-cli/issues/1898) – Request for OAI-compatible API | Users want to plug Kimi directly into VS Code's native Copilot/OAI interface instead of using a separate extension. |
| 10 | [#1894](https://github.com/MoonshotAI/kimi-cli/issues/1894) – Nested skill directories not loaded | Codex-compatible skill structure isn't recognized, breaking multi-level skill organizations. |

---

### 4. Key PR Progress

| PR | Title | What it does |
|----|-------|--------------|
| [#1900](https://github.com/MoonshotAI/kimi-cli/pull/1900) | Default `show_thinking_stream` to true | **Merged.** Flips the config default; updates docs and examples. Core enabler of today's release. |
| [#1899](https://github.com/MoonshotAI/kimi-cli/pull/1899) | Fix watchdog reconnect during pending approval | **Merged.** Prevents watchdog from interrupting an active approval/question prompt in Web UI. |
| [#1890](https://github.com/MoonshotAI/kimi-cli/pull/1890) | Clear stale in-flight prompts on error | **Merged.** Resolves session busy deadlock caused by unhandled exceptions crashing the worker. |
| [#1906](https://github.com/MoonshotAI/kimi-cli/pull/1906) | Fix OAuth wait cancellation in `/login` | **Open.** Adds cancellable wait path so <kbd>Esc</kbd> exits the device-code polling loop. |
| [#1892](https://github.com/MoonshotAI/kimi-cli/pull/1892) | Unified `/setting` command | **Open.** Full-screen TUI panel consolidating model, editor, theme, YOLO, plan mode, and thinking config. |
| [#1896](https://github.com/MoonshotAI/kimi-cli/pull/1896) | Honor `http_proxy` env vars | **Open.** Adds `trust_env=True` to `aiohttp.ClientSession` for proxy-friendly enterprise setups. |
| [#1893](https://github.com/MoonshotAI/kimi-cli/pull/1893) | Fix non-UTF-8 filenames from `git ls-files` on Windows | **Open.** Explicitly sets UTF-8 encoding to prevent GBK-related crashes on Chinese Windows. |
| [#1767](https://github.com/MoonshotAI/kimi-cli/pull/1767) | YOLO mode for Web UI | **Closed (rework needed).** Adds auto-approve toggle to the Web interface; likely to be resubmitted. |
| [#1876](https://github.com/MoonshotAI/kimi-cli/pull/1876) | Register `/btw` as soul-level command | **Open.** Makes `/btw` available across all modes (print, web, ACP), not just interactive shell. |
| [#1848](https://github.com/MoonshotAI/kimi-cli/pull/1848) | Edit image & pasted-text as blocks | **Open.** Refactors prompt attachments into editable block placeholders, improving multimodal workflows. |

---

### 5. Feature Request Trends

1. **Thinking / Reasoning Transparency** – The single loudest theme. Users want full, expandable, streaming thinking traces in both CLI and VS Code, with configurable verbosity.
2. **VS Code Extension Parity** – Multiple requests ask for the VS Code plugin to match CLI behavior: skill selection without auto-send, visible sub-agent edits, and proper thinking-block rendering.
3. **Unified Settings UX** – A consolidated `/setting` command or UI surface is requested to replace scattered slash commands (`/model`, `/editor`, `/theme`, `/yolo`, `/plan`).
4. **OAI-Compatible API Endpoint** – Users want to use Kimi models through standard OpenAI-compatible tooling (Copilot, Continue, etc.) rather than a bespoke extension.
5. **Permission-First Tooling** – Requests for `WriteFile` and similar tools to request approval before long-running generation, reducing wasted work on timeouts.
6. **Codex Compatibility** – Nested skill directories and broader skill-format alignment with OpenAI Codex are being asked for by teams managing shared agent configs.

---

### 6. Developer Pain Points

* **Thinking trace removal felt like a downgrade.** The cluster of issues (#1864, #1865, #1877, #1904) shows that removing or hiding reasoning output erodes trust. The v1.35.0 default flip should alleviate this, but VS Code rendering still needs attention.
* **VS Code plugin maturity gap.** Auto-sending skills, invisible sub-agent edits, and broken compact-mode thinking blocks make the IDE experience feel unpolished compared to the CLI.
* **Reliability under failure conditions.** MCP server crashes hang the Web UI (#1897), OAuth flows trap users (#1905), and session deadlocks persist from unhandled exceptions—error resilience needs hardening.
* **Corporate / restricted-network friction.** Lack of proxy support (#1896) and no OAI-compatible endpoint (#1898) block adoption in enterprise environments.
* **Windows locale encoding issues.** Non-UTF-8 filenames from Git cause crashes on Chinese Windows (#1893, #1886), a recurring cross-platform pain point.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-16

## 1. Today's Highlights
OpenCode shipped three rapid-fire patch releases (v1.4.4 → v1.4.6) focused on observability, prompt reliability, and MCP OAuth persistence. A critical vulnerability ([PR #22661](https://github.com/anomalyco/opencode/pull/22661)) involving arbitrary JS execution via `new Function()` was patched, and the long-standing GitHub Copilot premium-request billing issue ([Issue #8030](https://github.com/anomalyco/opencode/issues/8030)) received a targeted fix ([PR #22567](https://github.com/anomalyco/opencode/pull/22567)). Community attention continues to cluster around multi-model compatibility (Azure OpenAI, Gemini, Kimi K2.6) and telemetry/observability improvements.

---

## 2. Releases

### v1.4.6
- **Core:** Fixed snapshot staging for very long file lists (performance regression); fixed OTEL header parsing when values contain `=`.
- **Desktop:** Fixed prompt submission state inconsistencies causing failed sends; improved session title input spacing.

### v1.4.5
- **Core:** AI SDK telemetry spans now export to OTLP trace backends; experimental question API schema and OpenAPI spec exposed from `@opencode-ai/server`; reusable question handler factory for custom API hosts.
- **Desktop:** Desktop shell commands now start from the home directory.

### v1.4.4
- **Core:** Restored instance/logger context during prompt runs; kept GitHub Copilot compaction requests valid; restored flat reply shape for question API; persisted MCP OAuth connections completing immediately.
- **Desktop:** *(included in bulk release)*

---

## 3. Hot Issues

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| 1 | [#8030](https://github.com/anomalyco/opencode/issues/8030) — Copilot "user" request misclassification | Consumed premium request quota rapidly via agent-initiated calls missing the `X-Initiator: agent` header. | **221 comments**, 79 👍 — highest-engagement issue; fix merged in [PR #22567](https://github.com/anomalyco/opencode/pull/22567). |
| 2 | [#266](https://github.com/anomalyco/opencode/issues/266) — Gemini edit tool failures | Persistent `oldString not found` errors due to whitespace mismatches. | 36 comments, 14 👍 — long-running model-compat pain point. |
| 3 | [#4406](https://github.com/anomalyco/opencode/issues/4406) — Mandatory read-before-edit | Forces redundant Read calls even when file content is already in context, wasting tokens. | 34 comments, flagged `good first issue` — onboarding-friendly refactor opportunity. |
| 4 | [#20698](https://github.com/anomalyco/opencode/issues/20698) — GPT 5.4 Azure reasoning errors | Constant `"Item of type 'reasoning' was provided without its required following item"` after tool calls. | 24 comments — blocks Azure enterprise users on latest OpenAI models. |
| 5 | [#22444](https://github.com/anomalyco/opencode/issues/22444) — Azure OpenAI models broken after update | All Azure models fail post-upgrade; broad enterprise impact. | 8 comments, 3 👍 — urgent regression. |
| 6 | [#22644](https://github.com/anomalyco/opencode/issues/22644) — Qwen models removed from Go subscription | Models silently disappeared; affects users relying on OpenCode Go tier. | 4 comments, 6 👍 — same-day report on v1.4.6. |
| 7 | [#21746](https://github.com/anomalyco/opencode/issues/21746) — Gemma 4 26B never thinks | Local model via llama.cpp doesn't trigger reasoning in OpenCode but works elsewhere. | 9 comments — highlights local-model integration gaps. |
| 8 | [#22617](https://github.com/anomalyco/opencode/issues/22617) — WASM ripgrep SIMD breaks `@` search on non-AVX2 CPUs | Upgrade to v1.4.6 killed file fuzzy search on older hardware. | 2 comments — regression introduced in latest release. |
| 9 | [#8832](https://github.com/anomalyco/opencode/issues/8832) — Permissions not respected | Configured allow/deny rules for bash commands are ignored at runtime. | 13 comments, 3 👍 — trust/security concern. |
| 10 | [#22630](https://github.com/anomalyco/opencode/issues/22630) — Desktop blank on macOS Tahoe 26.4 | v1.4.6 Desktop shows unresponsive white window on latest macOS beta. | 3 comments — platform-compat regression. |

---

## 4. Key PR Progress

| PR | Description | Significance |
|----|-------------|--------------|
| [#22661](https://github.com/anomalyco/opencode/pull/22661) | Remove `new Function()` code injection vulnerability | **Critical security fix** — eliminated arbitrary JS execution vector in `parseToolParams`. |
| [#22567](https://github.com/anomalyco/opencode/pull/22567) | Auto-continuing compaction tracked as agent-initiated for Copilot | Directly resolves [#8030](https://github.com/anomalyco/opencode/issues/8030) — prevents premium quota burn. |
| [#22652](https://github.com/anomalyco/opencode/pull/22652) | CLI perf: reduce dependencies | Shared npm service for plugins; moves test files out of `src/` — improves cold-start time. |
| [#22670](https://github.com/anomalyco/opencode/pull/22670) | Avoid org lookup during config startup | Uses persisted `active_org_id` instead of blocking `Account.orgs` call — faster boot. |
| [#22653](https://github.com/anomalyco/opencode/pull/22653) | Improve telemetry tracing and request spans | Registers OTel context manager so AI SDK spans flow into Effect trace tree — closes observability gap. |
| [#22609](https://github.com/anomalyco/opencode/pull/22609) | Add ACP `writeTextFile` client capability | Fixes ACP file syncing for clients advertising `fs.writeText` — broader protocol compatibility. |
| [#21860](https://github.com/anomalyco/opencode/pull/21860) | Preserve thinking block signatures across model switches | Fixes Anthropic "thinking blocks cannot be modified" in long sessions; touches 7 related issues. |
| [#22404](https://github.com/anomalyco/opencode/pull/22404) | Fix Opus prefill rejection during tool-call loops with thinking | Resolves `"This model does not support assistant message prefill"` when thinking is enabled. |
| [#22666](https://github.com/anomalyco/opencode/pull/22666) | Inline `$skill` invocations in prompt composer | Implements [#15617](https://github.com/anomalyco/opencode/issues/15617) — autocomplete for skills via `$` prefix. |
| [#12822](https://github.com/anomalyco/opencode/pull/12822) | Proxy `process.env` dynamically instead of snapshotting | Fixes env vars set after startup being invisible — critical for proxy and dynamic config use-cases. |

---

## 5. Feature Request Trends

1. **New model integrations** — Kimi K2.6 ([#22408](https://github.com/anomalyco/opencode/issues/22408), 12 👍), continued demand for Gemini and Qwen model-family support.
2. **Delayed/repeated task queues** — [#5408](https://github.com/anomalyco/opencode/issues/5408) (18 👍) requests loop-based prompt submission with learning capture.
3. **Inline skill invocation** — [#15617](https://github.com/anomalyco/opencode/issues/15617) wants `$skill-name` syntax anywhere in a prompt; already being implemented in [PR #22666](https://github.com/anomalyco/opencode/pull/22666).
4. **Selective message copying** — [#22648](https://github.com/anomalyco/opencode/issues/22648) requests granular transcript export instead of all-or-nothing.
5. **Selective proxy support** — [#16847](https://github.com/anomalyco/opencode/issues/16847) asks for API-only proxy without global system proxy.

---

## 6. Developer Pain Points

- **Model-provider compatibility is the #1 friction.** Azure OpenAI reasoning errors ([#20698](https://github.com/anomalyco/opencode/issues/20698), [#22444](https://github.com/anomalyco/opencode/issues/22444)), Gemini edit failures ([#266](https://github.com/anomalyco/opencode/issues/266)), Cloudflare AI Gateway parameter mismatches ([#22374](https://github.com/anomalyco/opencode/issues/22374)), and local Ollama hangs ([#22132](https://github.com/anomalyco/opencode/issues/22132)) all point to the abstraction layer struggling to normalize provider quirks.
- **Thinking/reasoning block handling remains brittle.** Multiple issues ([#17011](https://github.com/anomalyco/opencode/issues/17011), [#21746](https://github.com/anomalyco/opencode/issues/21746), [#4832](https://github.com/anomalyco/opencode/issues/4832)) and PRs ([#21860](https://github.com/anomalyco/opencode/pull/21860), [#22404](https://github.com/anomalyco/opencode/pull/22404)) show that extended thinking across model switches, compaction, and tool-call loops is a persistent source of crashes.
- **Platform and hardware regressions in patch releases.** Non-AVX2 CPUs lose `@` search ([#22617](https://github.com/anomalyco/opencode/issues/22617)), macOS Tahoe gets a blank window ([#22630](https://github.com/anomalyco/opencode/issues/22630)), WSL2 TUI freezes on Node v25 ([#18132](https://github.com/anomalyco/opencode/issues/18132)), and Windows ARM64 can't start the TUI ([#20767](https://github.com/anomalyco/opencode/issues/20767)).
- **Permission and security defaults are too permissive.** Users report rules being ignored ([#8832](https://github.com/anomalyco/opencode/issues/8832)), default allow-all is surprising ([#2632](https://github.com/anomalyco/opencode/issues/2632)), and `auth login <url>` executes remote commands without confirmation ([#22191](https://github.com/anomalyco/opencode/issues/22191)).
- **Resource leaks in long sessions.** `/tmp` `.so` artifacts exhaust disk ([#16996](https://github.com/anomalyco/opencode/issues/16996)), and bash tool memory usage is high enough to warrant a dedicated fix ([PR #22660](https://github.com/anomalyco/opencode/pull/22660)).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-04-16.

# Qwen Code Community Digest (2026-04-16)

## 1. Today's Highlights
The most significant update today is the official discontinuation of the Qwen OAuth free tier. Version **v0.14.5** was released to enforce this change, block new signups, and update UI messaging. Unsurprisingly, this policy shift has dominated the issue tracker, generating massive community feedback regarding the abrupt quota reductions. On the technical side, maintainers and contributors are actively merging performance optimizations and iterating on advanced multi-agent architectures.

## 2. Releases
*   **[v0.14.5](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.5)**: This release officially discontinues the Qwen OAuth free tier. It also introduces context usage data exposure in non-interactive mode/SDK, adds a startup performance profiler, and implements fork subagent params at construction time. 

## 3. Hot Issues
1.  **[Qwen OAuth Free Tier Policy Adjustment #3203](https://github.com/QwenLM/qwen-code/issues/3203) [OPEN]**: A highly discussed thread (46 comments) regarding the abrupt reduction of the free tier from 1,000 to 100 requests/day before its ultimate shutdown.
2.  **[429 Free allocated quota exceeded #1742](https://github.com/QwenLM/qwen-code/issues/1742) [CLOSED]**: An older but highly upvoted bug report (19 comments) where users experienced premature quota limits, foreshadowing today's official tier discontinuation.
3.  **[Qwen OAuth authentication succeeded, but requests fail #3281](https://github.com/QwenLM/qwen-code/issues/3281) [OPEN]**: Users report that despite successful authentication, the API immediately rejects requests due to the newly enforced free tier quota limits.
4.  **[MCP Client Limited to 2 Connections #3277](https://github.com/QwenLM/qwen-code/issues/3277) [OPEN]**: A critical bug report warning that the Qwen Code MCP client artificially limits connections to 2, breaking production multi-node infrastructure.
5.  **[Requests limits overview #3267](https://github.com/QwenLM/qwen-code/issues/3267) [OPEN]**: Users are expressing frustration over the opaque nature of rate limits, noting that complex tasks drain the quota much faster than expected.
6.  **[Poor adherence to system prompts #2973](https://github.com/QwenLM/qwen-code/issues/2973) [OPEN]**: Developers report that the underlying model frequently ignores complex system prompts, reducing agent reliability.
7.  **[Shell commands silently fail with node_modules #3289](https://github.com/QwenLM/qwen-code/issues/3289) [OPEN]**: A deep-dive bug showing that `chokidar` watcher configurations in the skill manager silently swallow stdout/stderr when `node_modules` are present.
8.  **[IDE displays Context 0% before error #3296](https://github.com/QwenLM/qwen-code/issues/3296) [OPEN]**: A UI bug where the IDE falsely reports 0% context usage right before crashing with a quota exceeded error.
9.  **[No Pro plan available #3272](https://github.com/QwenLM/qwen-code/issues/3272) [OPEN]**: Users willing to pay for the tool are frustrated that the Pro plan is constantly listed as "sold out," leaving them without a migration path.
10. **[LSP diagnosis not updated after edit #3243](https://github.com/QwenLM/qwen-code/issues/3243) [OPEN]**: A technical bug where the agent fails to pick up the latest LSP diagnostics immediately after editing a file, causing it to base subsequent decisions on stale data.

## 4. Key PR Progress
1.  **[feat(auth): discontinue Qwen OAuth free tier #3291](https://github.com/QwenLM/qwen-code/pull/3291) [CLOSED]**: Updates client-side messaging, blocks new OAuth signups, and adds persistent startup warnings for existing free tier users.
2.  **[fix(cli): block discontinued qwen-oauth model selection #3299](https://github.com/QwenLM/qwen-code/pull/3299) [CLOSED]**: Follow-up fix to gracefully handle the OAuth discontinuation by marking the option as "Discontinued" in the ModelDialog UI.
3.  **[fix(tool-registry): add lazy factory registration with inflight concurrency dedup #3297](https://github.com/QwenLM/qwen-code/pull/3297) [OPEN]**: Fixes a P0 concurrency bug where tools could be instantiated twice, leaking SubagentManager event listeners.
4.  **[feat(cli): add startup optimization with API preconnect #3085](https://github.com/QwenLM/qwen-code/pull/3085) [OPEN]**: Improves startup latency by warming TCP+TLS connections via a fire-and-forget HEAD request before the first actual API call.
5.  **[refactor(cli): replace slash command whitelist with capability-based filtering #3283](https://github.com/QwenLM/qwen-code/pull/3283) [OPEN]**: Modernizes the CLI architecture by removing hardcoded slash command whitelists in favor of a self-describing metadata model.
6.  **[feat: add Agent Team experimental feature #2886](https://github.com/QwenLM/qwen-code/pull/2886) [OPEN]**: Introduces a major experimental feature allowing the lead agent to spawn and coordinate a team of sub-agents working in parallel.
7.  **[feat(cli): attribute /stats rows to originating subagent #3229](https://github.com/QwenLM/qwen-code/pull/3229) [OPEN]**: Enhances observability by ensuring API calls made by subagents are correctly attributed to them in the `/stats` dashboard, rather than being merged under the main agent.
8.  **[fix(skill/review): enforce parallel agent dispatch for weaker models #3276](https://github.com/QwenLM/qwen-code/pull/3276) [OPEN]**: Optimizes the `/review` skill by forcing models like `qwen3.6-plus` to launch review agents in parallel rather than defaulting to a serial execution.
9.  **[feat(session): add rename, delete, and auto-title generation #3093](https://github.com/QwenLM/qwen-code/pull/3093) [OPEN]**: Brings much-needed session management to the CLI/WebUI, allowing users to rename, delete, and auto-generate titles for chat sessions.
10. **[fix(editor): detect Zed.app on macOS when CLI is not in PATH #3303](https://github.com/QwenLM/qwen-code/pull/3303) [OPEN]**: A quality-of-life fix for macOS users that correctly locates the Zed editor even if its CLI symlink isn't strictly in the system PATH.

## 5. Feature Request Trends
*   **Alternative/Fallback Model Support**: With the abrupt end of the free tier, there is a massive surge in requests for seamless fallback model configurations (e.g., env vars like `OPENAI_FALLBACK_MODEL`) and easier integrations with third-party providers like OpenRouter, Fireworks, and SiliconFlow.
*   **Advanced Hook Systems**: Developers are pushing for more extensible middleware, particularly LLM-based prompt hooks and comprehensive HTTP/Webhook support to intercept and validate agent actions securely.
*   **Context and Token Optimization**: Users want more granular control over how context is built. Requests include moving file trees to the bottom of the prompt to preserve context caches, and exposing exact token/request usage metrics directly in the IDE.

## 6. Developer Pain Points
*   **Jarring Free Tier Sunsetting**: The community is frustrated not just by the loss of the free tier, but by the immediate breakage of workflows. The error messaging, quota tracking, and documentation updates were out of sync, causing confusion.
*   **Monetization Bottlenecks**: Users willing to migrate to paid tiers are blocked by the "Sold Out" status of Pro plans, forcing them to seek complex, manual third-party API configurations.
*   **UI/UX Instabilities**: Beyond API limits, developers are encountering annoying local bugs, such as chat messages rendering out of order, terminal buffer freezing, and Shift+Enter failing to insert newlines correctly across different terminal emulators.

</details>