# AI CLI Tools Community Digest 2026-04-23

> Generated: 2026-04-22 22:12 UTC | Tools covered: 7

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

# AI Developer Tools Ecosystem Cross-Tool Analysis Report
**Date:** 2026-04-23

## 1. Ecosystem Overview
The AI CLI tooling ecosystem is experiencing a rapid maturation phase, transitioning from basic prompt-based interfaces to complex, multi-agent, and autonomous terminal environments. Market leaders (Anthropic, OpenAI, Google, GitHub) and aggressive challengers (OpenCode, Qwen, Moonshot) are heavily investing in sandboxing, context persistence, and Model Context Protocol (MCP) integrations. However, this breakneck pace of innovation is generating significant growing pains: cross-platform regressions, opaque token metering, and fragile agent architectures are currently dominating community discourse across the board.

## 2. Activity Comparison
Activity for the digest cycle of 2026-04-23 indicates highly active iteration, with Gemini CLI and OpenCode leading community engagement, while OpenAI and Qwen push rapid-fire releases.

| Tool | Vendor / Origin | Issues Noted | Key PRs Noted | Release Status | Top Community Issue Focus |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | Anthropic | 10 | 14 | v2.1.117 (Released) | Unannounced feature removals (`/buddy`), Quota opacity |
| **OpenAI Codex** | OpenAI | 10 | 10 | Alpha 8 & 9 (CLI) | Sandbox regressions, macOS CPU/Memory leaks |
| **Gemini CLI** | Google | 10 | 10 | v0.39.0-preview 1 & 2 | Runaway agents, Permission friction |
| **GitHub Copilot CLI**| GitHub | 10 | 2 | v1.0.35-3 & 4 (Released) | Premium request metering bugs, Session resume breaks |
| **Kimi Code CLI** | Moonshot AI | 10 | 10 | v1.38.0 (Released) | Token drain (CoT), OAuth race conditions |
| **OpenCode** | Anomaly / OSS | 10 | 10 | None (v1.4.x) | Copilot API silent breaks, Windows TUI bugs |
| **Qwen Code** | QwenLM / Alibaba| 10 | 10 | v0.15.0 (Released) | Free tier policy, Local model config failures |

## 3. Shared Feature Directions
Analyzing community feedback reveals convergent needs across the ecosystem:

*   **Robust Sandboxing & Granular Permissions (Codex, Gemini, Copilot, Claude):** Users are universally frustrated by brittle sandboxes that break basic Git/Edit workflows or prompt fatigue. There is a shared demand for persistent, fine-grained permission profiles (per-tool, per-directory) and enterprise-managed policies.
*   **Context Persistence & Compaction (Claude, Gemini, Qwen, Kimi):** As agents handle complex tasks, they hit memory limits. Users are demanding better context compaction that doesn't cause agent "drift," memory routing (global vs. project), and post-compact hooks to re-inject behavioral instructions.
*   **Session Resumption & Observability (Copilot, OpenCode, Qwen):** The shift to long-running agents requires durable sessions. Tools are rushing to add session naming, cloud-backed state, and live diagnostic tools (e.g., TPS counters, `/doctor` commands).
*   **Local & Open-Weight Model Support (OpenCode, Qwen):** Power users want the freedom to use local models (via Ollama, vLLM) without being forced through cloud OAuth gates or proprietary provider constraints.
*   **MCP Reliability (Codex, Claude, Kimi):** The Model Context Protocol is becoming standard, but resource leaks (orphaned processes) and complex configurations remain significant pain points.

## 4. Differentiation Analysis
While features converge, target audiences and architectural philosophies differ:

*   **Enterprise & Governance Focus (OpenAI Codex, GitHub Copilot):** Codex is aggressively rebuilding its core architecture (legacy `SandboxPolicy` to `PermissionProfile`), heavily targeting enterprise admins via TOML config. Copilot is deeply integrated into the GitHub billing fabric but is struggling with premium request metering transparency.
*   **Autonomous & Multi-Agent Focus (Claude Code, Gemini CLI):** Claude Code focuses on deep agent teammate/cowork workflows (with tmux integration) and CLI infrastructure. Gemini CLI is investing heavily in AST-aware codebase mapping and structural context to prevent "runaway" agents.
*   **IDE & Open Interoperability (OpenCode, Qwen Code):** OpenCode acts as an agnostic bridge, dealing heavily with the intricacies of multiple LSPs (Kotlin, C#) and provider quirks (Kimi, Copilot APIs). Qwen Code is pioneering Agent Communication Protocol (ACP) hooks to deeply embed within diverse IDEs like Zed and JetBrains.
*   **Agile Challengers (Kimi Code):** Kimi focuses on highly autonomous flows ("Yolo mode") but faces architectural hurdles with token depletion due to deep Chain-of-Thought reasoning.

## 5. Community Momentum & Maturity
*   **Most Rapid Iteration:** **OpenAI Codex** (two alpha releases in one day alongside a massive 7-PR architecture stack) and **Qwen Code** (major v0.15.0 release with heavy background agent UX updates). **Gemini CLI** is also moving fast with multiple preview patches.
*   **Highest Community Friction:** **Claude Code** has the most intensely voted issue of the day (905 👍 for "Bring Back Buddy"), indicating a mature, highly engaged user base that resists top-down breaking changes. **Copilot CLI** is facing severe trust erosion due to billing/metering bugs.
*   **OSS / Community-Driven Momentum:** **OpenCode** has no recent releases but generates massive PR volumes centered around fixing provider-specific quirks and LSP reliability, showing a healthy, reactive open-source maintenance cycle.

## 6. Trend Signals
For technical decision-makers and developers, today's digest highlights clear industry trends:

1.  **Metering & Cost Opacity is the Biggest Trust Threat:** Across almost all proprietary tools (Copilot, Claude, Kimi), users report unpredictable token burn and quota exhaustion. Providers must invest in real-time, granular token/cost transparency dashboards to retain enterprise trust.
2.  **Security vs. Usability Trade-off in Sandboxing:** Sandboxes are currently breaking developer workflows (e.g., Git commits). Until tools offer seamless, non-blocking isolation, users will resort to `--dangerously-bypass-approvals` flags, negating the security model.
3.  **"Context Compaction" is the Next Bottleneck:** As agentic workflows become standard, so do long-context limits. The quality of an AI tool will soon be defined by how gracefully it handles memory compaction without losing behavioral instructions (the "PostCompact" problem).
4.  **Plugin/MCP Ecosystems are Maturing:** The shift from built-in monolithic features to lifecycle hooks, MCP server support, and ACP protocols indicates that the market is moving toward highly extensible, composable developer environments.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-04-23 | Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

Below are the most actively discussed and highly anticipated Skills pull requests in the ecosystem, ranked by community engagement:

**1. Typography Quality Control for Documents ([PR #514](https://github.com/anthropics/skills/pull/514))**
* **Functionality:** Prevents common typographic issues in AI-generated documents, including orphan word wraps, widow paragraphs, and numbering misalignment.
* **Highlights:** Addresses a "silent" quality gap—users rarely prompt for good typography, but its absence degrades document quality. 
* **Status:** `OPEN`

**2. Meta-Skills for Quality & Security Analysis ([PR #83](https://github.com/anthropics/skills/pull/83))**
* **Functionality:** Introduces `skill-quality-analyzer` and `skill-security-analyzer` to evaluate and grade skills across five dimensions (structure, documentation, security, etc.).
* **Highlights:** Represents a maturing ecosystem where the community builds tools to self-regulate and improve Skill standards.
* **Status:** `OPEN`

**3. Frontend-Design Skill Revamp ([PR #210](https://github.com/anthropics/skills/pull/210))**
* **Functionality:** Revises the existing frontend-design skill for better actionability and internal coherence, ensuring instructions are immediately executable by Claude.
* **Highlights:** Tackles the prevalent issue of Skills acting as "dev docs" rather than operational instructions.
* **Status:** `OPEN`

**4. OpenDocument (ODT) Format Support ([PR #486](https://github.com/anthropics/skills/pull/486))**
* **Functionality:** Enables Claude to read, create, fill templates, and convert OpenDocument formats (.odt, .ods) to HTML.
* **Highlights:** Bridges a significant gap for open-source and enterprise users relying on LibreOffice and ISO-standard document formats.
* **Status:** `OPEN`

**5. Comprehensive Testing Patterns ([PR #723](https://github.com/anthropics/skills/pull/723))**
* **Functionality:** A full-stack testing skill covering the Testing Trophy model, React component testing, integration, and E2E patterns.
* **Highlights:** Fulfills a massive developer demand for standardized, opinionated testing workflows generated by AI.
* **Status:** `OPEN`

**6. macOS Automation via AppleScript ([PR #806](https://github.com/anthropics/skills/pull/806))**
* **Functionality:** Replaces screenshot-based "computer use" with native `osascript` (AppleScript) commands for Tier 1 and Tier 2 macOS automation.
* **Highlights:** A highly innovative approach to giving Claude reliable, native OS control without visual parsing.
* **Status:** `OPEN`

**7. Persistent Agent Memory / shodh-memory ([PR #154](https://github.com/anthropics/skills/pull/154))**
* **Functionality:** A persistent memory system that allows AI agents to recall context across different conversations.
* **Highlights:** Directly addresses context-window limitations, allowing Claude to maintain project history over time.
* **Status:** `OPEN`

**8. The HADS Standard & Document Converter ([PR #616](https://github.com/anthropics/skills/pull/616) & [PR #622](https://github.com/anthropics/skills/pull/622))**
* **Functionality:** Introduces the Human-AI Document Standard (HADS), a Markdown convention optimized for AI readability, along with a converter tool.
* **Highlights:** Anticipates a future where AI agents are the primary consumers of technical documentation.
* **Status:** `OPEN`

---

## 2. Community Demand Trends

Analysis of open Issues reveals clear trends in what users want from the Skills ecosystem next:

* **Enterprise Workflow & Collaboration:** The most upvoted open issue requests **org-wide skill sharing** ([Issue #228](https://github.com/anthropics/skills/issues/228)), indicating heavy demand for team-based Skill libraries rather than isolated personal use.
* **Robustness & Bug Fixing in Core Tools:** Users report critical failures, such as a 0% trigger rate for skills during evals ([Issue #556](https://github.com/anthropics/skills/issues/556)) and duplicated context from overlapping plugins ([Issue #189](https://github.com/anthropics/skills/issues/189)). The community urgently wants reliable Skill invocation and cleaner package separation.
* **Platform & API Expansion:** Developers are actively requesting paths to expose Skills as **MCPs (Model Context Protocol)** ([Issue #16](https://github.com/anthropics/skills/issues/16)) and support for third-party platforms like **AWS Bedrock** ([Issue #29](https://github.com/anthropics/skills/issues/29)).
* **Security & Trust Boundaries:** With the rise of community Skills, users are flagging namespace vulnerabilities (e.g., unofficial skills masking as `anthropic/`) and demanding stricter validation ([Issue #492](https://github.com/anthropics/skills/issues/492)).
* **SSO / Enterprise Authentication:** Multiple issues highlight that Skill creation tools requiring direct `ANTHROPIC_API_KEY` break for SSO/Enterprise users ([Issue #532](https://github.com/anthropics/skills/issues/532)).

---

## 3. High-Potential Pending Skills

These open PRs feature active, granular discussions and solve specific, high-impact problems, making them strong candidates for imminent merging:

* **`fix(docx)`: Prevent OOXML w:id Collision ([PR #541](https://github.com/anthropics/skills/pull/541))**
  * *Why it matters:* Fixes silent document corruption when adding tracked changes to documents with existing bookmarks. Highly specific, technical, and safe to merge.
* **`fix(pdf)`: Case-Sensitive File References ([PR #538](https://github.com/anthropics/skills/pull/538))**
  * *Why it matters:* Fixes broken references in PDF skills on case-sensitive operating systems (Linux). A straightforward, critical bug fix.
* **`fix(skill-creator)`: YAML Special Character Validation ([PR #539](https://github.com/anthropics/skills/pull/539) & [PR #361](https://github.com/anthropics/skills/pull/361))**
  * *Why it matters:* Prevents silent parsing failures when Skill descriptions contain unquoted YAML characters (like `:` or `{`). Greatly improves the Skill creation developer experience.

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **operational robustness (reliable triggering, YAML validation, and bug-free document generation) and enterprise-grade workflow features (SSO support, secure namespace isolation, and org-wide sharing).**

---

# Claude Code Community Digest — 2026-04-23

---

## 1. Today's Highlights

Claude Code v2.1.117 shipped yesterday with forked subagent support for external builds and persistent model selections, but the release is already generating heat: multiple reports confirm a regression causing `/proc/self/fd/3: Permission denied` errors in sandboxed Bash tool calls across Linux, WSL, and Docker environments. Meanwhile, the community-driven "Bring Back Buddy" campaign continues its relentless growth (905 👍), and a cluster of new issues around quota depletion on Max (20x) plans signals a deepening cost-transparency problem. On the contribution side, a new WinGet publishing workflow PR and a DNS resolution fix for dev containers highlight community infrastructure improvements.

---

## 2. Releases

### [v2.1.117](https://github.com/anthropics/claude-code/releases/tag/v2.1.117)

- **Forked subagents on external builds**: Enabled via the `CLAUDE_CODE_FORK_SUBAGENT=1` environment variable, allowing external/third-party builds to use the forked subagent architecture previously limited to Anthropic-hosted builds.
- **Agent frontmatter `mcpServers` for `--agent` sessions**: MCP server configurations defined in agent frontmatter are now loaded when running main-thread agent sessions via the `--agent` flag, improving declarative agent setup.
- **Improved `/model` persistence**: Model selections made via the `/model` command now persist across restarts, even when a project configuration pins a default model — addressing a long-standing friction point.

---

## 3. Hot Issues

### 1. [#45596 — Bring Back Buddy](https://github.com/anthropics/claude-code/issues/45596) | 👍 905 | 210 comments
The removal of the `/buddy` companion feature in v2.1.97 without notice continues to dominate the issue tracker. Now approaching 1,000 upvotes, it remains the single most-voted open issue and a symbol of community frustration with unannounced feature removals.

### 2. [#51837 — v2.1.117 regression: parallel Bash tool calls corrupt fd 3 in nested-Docker sandbox](https://github.com/anthropics/claude-code/issues/51837) | 👍 3 | 7 comments
A same-day regression report: parallel Bash invocations within a single turn corrupt file descriptor 3 in Docker-based sandbox setups, causing `Permission denied` on `/proc/self/fd/3`. Labeled as a **regression**, this directly impacts CI/CD and containerized workflows.

### 3. [#51865 — Bash tool exit 126 with "permission denied: /proc/self/fd/3" on Fedora 43 + zsh](https://github.com/anthropics/claude-code/issues/51865) | 👍 3 | 4 comments
A related but distinct manifestation of the fd 3 permission issue on Fedora, blocking `git` writes, `ls -la`, and `gh` CLI operations. Together with #51837, this suggests a systemic sandbox breakage in v2.1.117.

### 4. [#45756 — Pro Max 5x Quota Exhausted in 1.5 Hours Despite Moderate Usage](https://github.com/anthropics/claude-code/issues/45756) | 👍 140 | 47 comments
Users on the Pro Max 5x tier report quota depletion in under two hours with moderate usage patterns. 47 comments indicate widespread concern about cost predictability and quota accounting accuracy.

### 5. [#52135 — Max (20x) weekly limit depletes disproportionately — 51% mid-week](https://github.com/anthropics/claude-code/issues/52135) | 👍 0 | 3 comments
Even the top-tier Max 20x plan is under scrutiny: the original poster documents 51% quota depletion mid-week and ~17% vanishing within minutes of a session reset, suggesting the multiplier may not reflect real-world usage capacity.

### 6. [#49268 — Thinking summaries missing on Opus 4.7](https://github.com/anthropics/claude-code/issues/49268) | 👍 36 | 20 comments
Opus 4.7 changed the default for the `display` parameter in extended thinking, causing Claude Code's harness to stop rendering thinking summaries. Affects all users of the latest Opus model and degrades transparency of agent reasoning.

### 7. [#14258 — PostCompact Hook Event and Compaction Content Control](https://github.com/anthropics/claude-code/issues/14258) | 👍 32 | 17 comments
A well-argued feature request for a `PostCompact` hook that would let users re-inject behavioral frameworks from `CLAUDE.md` after compaction events. Without it, compaction paraphrases carefully crafted instructions, causing behavioral drift in long sessions.

### 8. [#13354 — Continue when session limit is reached](https://github.com/anthropics/claude-code/issues/13354) | 👍 83 | 40 comments
A long-standing feature request for seamless session continuation when usage limits are hit, rather than an abrupt termination. 40 comments and 83 upvotes indicate strong demand for graceful degradation.

### 9. [#52139 — Ink renderer crashes in spawned teammate agents during tmux mode](https://github.com/anthropics/claude-code/issues/52139) | 👍 0 | 2 comments
The React-based Ink terminal renderer crashes in teammate agent subprocesses during tmux-based multi-agent sessions. This affects the newer agent-team/cowork workflows and could block adoption of collaborative agent patterns.

### 10. [#37442 — Subagents don't inherit bypassPermissions mode from parent session](https://github.com/anthropics/claude-code/issues/37442) | 👍 0 | 7 comments
When `bypassPermissions` is set in user settings, subagents still prompt for tool permissions — defeating the purpose of unattended/headless workflows. 7 comments confirm this is reproducible and impacts automation pipelines.

---

## 4. Key PR Progress

### 1. [#51948 — Add workflow for publishing package to WinGet repository](https://github.com/anthropics/claude-code/pull/51948) (OPEN)
Introduces a GitHub Actions workflow to automatically publish Claude Code to Microsoft's WinGet package manager on every stable release. Uses `microsoft/winget-create` and resolves [issue #17160](https://github.com/anthropics/claude-code/issues/17160). A significant step for first-class Windows distribution.

### 2. [#51875 — Sort unique IPs from DNS resolution before using in ipset(8)](https://github.com/anthropics/claude-code/pull/51875) (OPEN)
Fixes a dev container startup failure where `dig` returns duplicate A records from CNAME chain expansion, causing `ipset` to abort under `set -e`. Sorts and deduplicates resolved IPs before passing to `ipset`. Supersedes earlier attempts (#50293, #42701).

### 3. [#24509 — fix(plugin-dev): add marketplace.json entry example in create-plugin](https://github.com/anthropics/claude-code/pull/24509) (CLOSED → MERGED)
Adds a canonical `marketplace.json` entry example to the `create-plugin` command scaffolding, preventing Claude from inferring the wrong field name (`path` instead of `source`). Small but impactful for the plugin ecosystem.

### 4–13. Closed PRs from GoodshytGroup
PRs [#50643](https://github.com/anthropics/claude-code/pull/50643), [#50638](https://github.com/anthropics/claude-code/pull/50638), [#50637](https://github.com/anthropics/claude-code/pull/50637), [#50595](https://github.com/anthropics/claude-code/pull/50595), [#50578](https://github.com/anthropics/claude-code/pull/50578), [#50565](https://github.com/anthropics/claude-code/pull/50565), [#47895](https://github.com/anthropics/claude-code/pull/47895), [#47421](https://github.com/anthropics/claude-code/pull/47421), [#46914](https://github.com/anthropics/claude-code/pull/46914), [#46912](https://github.com/anthropics/claude-code/pull/46912), [#46153](https://github.com/anthropics/claude-code/pull/46153), [#46151](https://github.com/anthropics/claude-code/pull/46151), [#46150](https://github.com/anthropics/claude-code/pull/46150) — All from the same external contributor and all closed without merge. These relate to a "Mythos/Veriflow" project and include CI workflows, changelogs, and brand kit assets. They appear to be a coordinated external contribution that did not meet merge criteria.

---

## 5. Feature Request Trends

**Persistent context and memory across sessions** — The dominant theme. Users want `CLAUDE.md` frameworks to survive compaction (#14258), long sessions to be treated as a valid pattern rather than wasteful (#52056), and session limits to support graceful continuation (#13354). The underlying demand is for *durable, predictable agent behavior* rather than stateless turn-taking.

**Cost transparency and quota predictability** — Multiple issues across all tiers (Pro 5x, Max 20x, Team) report opaque quota depletion rates (#45756, #52135, #51912, #52138). Users are asking for real-time token accounting, clear multiplier semantics, and predictable session budgets.

**Fine-grained MCP and agent configuration** — Requests for per-agent MCP server toggles to manage context budget (#52142), custom project display names (#52144), and reliable inheritance of permission modes by subagents (#37442) all point to a maturing user base running complex multi-tool, multi-agent setups.

**Model reasoning quality regression** — Several reports (#52041, #49268) flag degraded reasoning consistency and memory adherence in Claude 4.7 compared to 4.6, with one user noting 17+ rounds of bot reviews on a single PR. This signals user sensitivity to model quality changes introduced alongside Claude Code tooling updates.

---

## 6. Developer Pain Points

**v2.1.117 sandbox regression is the most urgent blocker.** The `/proc/self/fd/3: Permission denied` error (#51837, #51865, #52118) manifests across Docker, Fedora, and WSL environments, blocking basic operations like `git`, `ls`, and `gh`. Multiple independent reports with reproduction steps suggest a systemic issue in the Bash tool's sandbox wrapper that needs a fast patch.

**Cost unpredictability is eroding trust.** Across Pro, Max, and Team tiers, users report quota depletion rates that don't match the advertised multipliers. The lack of granular token-level visibility into what's consuming quota — combined with session resets that don't clearly replenish it — is generating frustration at every subscription level.

**Compaction breaks agent behavior.** The absence of a `PostCompact` hook means that carefully crafted `CLAUDE.md` instructions get paraphrased during compaction, causing behavioral drift in long-running sessions. This is especially painful for users running autonomous or semi-autonomous agent loops.

**Agent/team infrastructure is fragile.** Ink renderer crashes in tmux teammate agents (#52139), subagents not inheriting permission bypasses (#37442), and SSH remote MCP config mismatches (#25664) all indicate that the newer multi-agent and cowork features need hardening before they're production-reliable.

**AVX requirement in native binaries excludes older hardware.** Issue [#50384](https://github.com/anthropics/claude-code/issues/50384) reports illegal instruction crashes on CPUs without AVX support, a regression introduced after v2.1.112 that quietly drops support for a non-trivial slice of Linux server hardware.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-23

## 1. Today's Highlights
OpenAI shipped two rapid-fire Rust CLI pre-releases (`0.123.0-alpha.8` and `0.123.0-alpha.9`), signaling aggressive iteration toward the next stable CLI bump. On the engineering side, a massive internal migration from legacy `SandboxPolicy` to a canonical `PermissionProfile` abstraction dominates the open PR queue, touching everything from the TUI to MCP and app-server protocols. Meanwhile, the community is sounding alarms on several regressions: high CPU/memory usage in the macOS Desktop app, `apply_patch` sandbox hangs, and brittle MCP Computer Use permissions that constantly re-prompt or fail.

---

## 2. Releases
- **rust-v0.123.0-alpha.9** — Latest alpha build; no detailed changelog published yet.
- **rust-v0.123.0-alpha.8** — Previous alpha build, released earlier the same day.
  > Both suggest imminent stabilization. Developers on alpha tracks should test sandbox and permission workflows.

---

## 3. Hot Issues

| # | Issue | Why it matters |
|---|-------|----------------|
| 1 | [#16231 — High CPU on macOS after VS Code extension update](https://github.com/openai/codex/issues/16231) | 58 👍, 42 comments. A regression in extension `26.325.31654` causes sustained high CPU and heat on Apple Silicon (M5 Pro / macOS Tahoe). Top-voted issue this cycle. |
| 2 | [#14936 — bwrap approval prompt shown for almost every command](https://github.com/openai/codex/issues/14936) | 56 comments, tagged *sandbox, regression*. Users on Linux CLI `0.115.0` report approval fatigue from the bubblewrap sandbox, severely impacting full-auto workflows. |
| 3 | [#14860 — Error running remote compact task](https://github.com/openai/codex/issues/14860) | 40 comments. The "compact" context-compression endpoint returns 503 errors for Pro users on `gpt-5.4`, blocking long-context sessions. |
| 4 | [#17525 — Every normal edit requires skipping sandbox on Ubuntu](https://github.com/openai/codex/issues/17525) | 24 comments. Another sandbox regression where routine file edits are blocked, forcing users to bypass the sandbox entirely — a security concern. |
| 5 | [#18333 — Desktop repeatedly starts full MCP stacks for new sessions](https://github.com/openai/codex/issues/18333) | 13 comments. Every new session or subagent spins up a fresh MCP server fleet, causing severe slowdown and memory pressure on macOS. |
| 6 | [#18881 — MCP child processes leak in long-running daemons](https://github.com/openai/codex/issues/18881) | A `--dangerously-bypass-approvals-and-sandbox` daemon accumulated **492 orphaned MCP children** in 15 hours. Critical leak for production daemon users. |
| 7 | [#18522 & #18896 — Computer Use approval denied after restart or for specific apps](https://github.com/openai/codex/issues/18522) | MCP-driven "Computer Use" permissions don't persist across restarts and fail for apps like Chrome even after granting Screen Recording + Accessibility. |
| 8 | [#19020 — apply_patch hangs under workspace-write sandbox on macOS](https://github.com/openai/codex/issues/19020) | `apply_patch` deadlocks under the normal sandboxed path but succeeds with `--dangerously-bypass-approvals-and-sandbox`. Directly impacts full-auto reliability. |
| 9 | [#18918 — Windows sandbox DENY ACLs break git commits in .git](https://github.com/openai/codex/issues/18918) | The Windows sandbox applies deny ACLs to `.git` directories inside `writable_roots`, making `git commit` impossible without sandbox bypass. |
| 10 | [#12343 — Sandbox assigned to entire user profile tree on Windows](https://github.com/openai/codex/issues/12343) | Security concern: CodexSandboxOffline/Online permissions are overly broad, potentially exposing the full user profile. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#19008 — Implement remote thread store methods](https://github.com/openai/codex/pull/19008) | Wires gRPC shim methods for a remote thread store, enabling cloud-backed session persistence. |
| 2 | [#18878 — Trace tool and code-mode boundaries (rollout_trace)](https://github.com/openai/codex/pull/18878) | Extends rollout tracing across tool dispatch and code-mode runtimes — critical for debugging complex agent loops. PR 3/5 in a tracing stack. |
| 3 | [#18372 — Show action required in terminal title](https://github.com/openai/codex/pull/18372) | Updates the TUI terminal title to indicate when Codex is blocked on user approval, improving UX for background terminal usage. |
| 4 | [#18385 — Support MCP tools in hooks](https://github.com/openai/codex/pull/18385) | Unlocks lifecycle hooks for all tool types (not just Bash), enabling `PreToolUse`/`PostToolUse` hooks for MCP tools. |
| 5 | [#19046 — exec-server: require explicit filesystem sandbox cwd](https://github.com/openai/codex/pull/19046) | Cleanup PR in the `PermissionProfile` migration stack — removes implicit `current_dir()` reads in favor of explicit cwd parameters. |
| 6 | [#18280–#18286 — PermissionProfile migration stack (bolinfest)](https://github.com/openai/codex/pull/18280) | A 7-PR stack migrating the entire permission model from legacy `SandboxPolicy` to `PermissionProfile` across protocol, TUI, MCP, app-server, and rollout layers. |
| 7 | [#18584 — Wire remote streamable HTTP MCP (4/4)](https://github.com/openai/codex/pull/18584) | Completes remote MCP support, enabling `experimental_environment = "remote"` to route MCP through HTTP instead of local stdio. |
| 8 | [#18893 — Support hooks in config.toml and requirements.toml](https://github.com/openai/codex/pull/18893) | Lets enterprise admins ship managed hook policy through TOML config files, eliminating the need for a separate `hooks.json`. |
| 9 | [#19014 — Add includeTurns parameter to thread/resume](https://github.com/openai/codex/pull/19014) | Optimizes session resumption by allowing callers to skip fetching turns and go straight to pagination. |
| 10 | [#19044 — Guide Windows to use -WindowStyle Hidden for Start-Process](https://github.com/openai/codex/pull/19044) | Prevents visible PowerShell windows from spawning when Codex runs `Start-Process` on Windows — a small but impactful UX fix. |

---

## 5. Feature Request Trends

1. **Granular, persistent permission profiles** — Users want per-tool, per-MCP-server, and per-directory permission rules that persist across sessions and don't require constant re-approval. ([#16171](https://github.com/openai/codex/issues/16171), [#16301](https://github.com/openai/codex/issues/16301), [#19015](https://github.com/openai/codex/issues/19015))
2. **Hooks parity with competitors** — The community explicitly references Claude Code's hook model and wants `PermissionRequest` events, MCP tool hooks, and programmatic auto-approve flows. ([#16301](https://github.com/openai/codex/issues/16301), [#18385](https://github.com/openai/codex/pull/18385))
3. **Remote/cloud-native MCP and thread storage** — Demand for remote MCP environments and cloud-backed session history is growing, especially for Codespaces and CI use cases. ([#6403](https://github.com/openai/codex/issues/6403), [#19008](https://github.com/openai/codex/pull/19008), [#18584](https://github.com/openai/codex/pull/18584))
4. **Better Windows/WSL first-class support** — Requests for native WSL path handling, proper Windows sandbox ACLs, and integrated terminal fixes. ([#18506](https://github.com/openai/codex/issues/18506), [#18918](https://github.com/openai/codex/issues/18918), [#12343](https://github.com/openai/codex/issues/12343))
5. **Enterprise-managed configuration** — Admins want hooks, permissions, and skill policies deliverable via `requirements.toml` or similar managed channels. ([#18893](https://github.com/openai/codex/pull/18893))

---

## 6. Developer Pain Points

- **Sandbox regressions are the top frustration.** Across Linux (bwrap, landlock), macOS (apply_patch hangs, Gatekeeper blocks), and Windows (DENY ACLs on `.git`), the sandbox is breaking basic edit/commit workflows. Multiple users report being forced to use `--dangerously-bypass-approvals-and-sandbox` as a workaround, defeating the security model. ([#14936](https://github.com/openai/codex/issues/14936), [#17525](https://github.com/openai/codex/issues/17525), [#19020](https://github.com/openai/codex/issues/19020), [#18918](https://github.com/openai/codex/issues/18918), [#16451](https://github.com/openai/codex/issues/16451))

- **MCP reliability and resource leaks.** MCP child process leaks (#18881), full MCP stack restarts per session (#18333), and broken Computer Use permissions (#18522, #18896, #18975) make MCP-dependent workflows fragile and expensive. This is especially painful for users running long-lived agents or daemon mode.

- **Compact endpoint failures.** The `remote compact task` error appears across at least three issues (#14860, #13784, #11954, #19009), spanning CLI, Desktop, and VS Code. Users on Pro and Azure plans encounter 503 errors that abruptly terminate long-context sessions, with no clear workaround.

- **Desktop app resource consumption.** High CPU (#16231) and high memory (#14666, #18589) on the native Mac app erode trust, especially on Apple Silicon where performance is expected to be excellent.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for 2026-04-23.

## 1. Today's Highlights
Gemini CLI is actively iterating towards its v0.39.0 stable release with two patch versions rolled out today to address downstream merge fixes. The community and core maintainers are heavily focused on **agent autonomy and safety**, evidenced by new pull requests introducing real-time shell output streaming, stricter workspace trust in headless mode, and permanent tool approvals by default. On the tooling front, maintainers are making deep investments in **AST-aware code mapping** and dynamic agent memory routing to improve codebase comprehension and context persistence.

## 2. Releases
*   **[v0.39.0-preview.2](https://github.com/google-gemini/gemini-cli/pull/25776):** Patch release cherry-picking commit `d6f88f8` into the `v0.39.0-preview` branch.
*   **[v0.39.0-preview.1](https://github.com/google-gemini/gemini-cli/pull/25766):** Patch release cherry-picking commit `a4e98c0` into the `v0.39.0-preview` branch. 

## 3. Hot Issues
1.  **[Subagent reports success when hitting MAX_TURNS (#22323)](https://github.com/google-gemini/gemini-cli/issues/22323):** A high-priority bug where subagents falsely report `status: "success"` when interrupted by turn limits, hiding execution failures from the main agent.
2.  **[AST-aware file reads and codebase mapping (#22745)](https://github.com/google-gemini/gemini-cli/issues/22745):** Maintainers are investigating integrating AST tools (like Tilth or Glyph) to allow agents to precisely read method bounds and map codebases with fewer tokens.
3.  **[Shell execution hangs awaiting input (#25166)](https://github.com/google-gemini/gemini-cli/issues/25166):** A highly upvoted issue where the CLI gets stuck waiting for user input even after a simple shell command has successfully completed.
4.  **[Repetitive permission prompts (#24916)](https://github.com/google-gemini/gemini-cli/issues/24916):** Users report that the "Allow for all future sessions" setting frequently fails, causing the CLI to repeatedly ask for file permissions.
5.  **[Memory routing: Global vs. Project (#22819)](https://github.com/google-gemini/gemini-cli/issues/22819):** An architectural proposal to route agent memory correctly (e.g., user preferences in `~/.gemini/` vs. codebase specifics in `.gemini/`).
6.  **[Agent overwrites temp scripts in random spots (#23571)](https://github.com/google-gemini/gemini-cli/issues/23571):** When restricted to shell execution, the model creates messy edit scripts across workspace directories, making git cleanup difficult.
7.  **[Subagent awareness of active approval modes (#23582)](https://github.com/google-gemini/gemini-cli/issues/23582):** Highlights that subagents attempt blocked tool calls because they lack context regarding active constraints like Plan Mode.
8.  **[Gemini CLI fails on temporary Windows paths (#25216)](https://github.com/google-gemini/gemini-cli/issues/25216):** Running the CLI in `--yolo` mode on PowerShell triggers an `EISDIR` crash when encountering specific drive paths (e.g., `A:\a`).
9.  **[Broken UI layout for streaming tables (#25218)](https://github.com/google-gemini/gemini-cli/issues/25218):** Tables re-render on every chunk during streaming, causing inaccessible and broken layouts in screen reader mode.
10. **[Agents should discourage destructive Git commands (#22672)](https://github.com/google-gemini/gemini-cli/issues/22672):** A request to prevent the model from using dangerous commands like `git reset --force` when safer alternatives exist.

## 4. Key PR Progress
1.  **[Enable permanent tool approval by default (#25823)](https://github.com/google-gemini/gemini-cli/pull/25823):** Directly addresses permission fatigue by flipping the default for `enablePermanentToolApproval` to `true`.
2.  **[Wire up new ContextManager and AgentChatHistory (#25409)](https://github.com/google-gemini/gemini-cli/pull/25409):** A foundational agent refactor replacing legacy history structures to improve context handling.
3.  **[Stream output flag for run_shell_command (#25825)](https://github.com/google-gemini/gemini-cli/pull/25825):** Introduces `stream_output: true` for background shell tasks, closing the "blind gap" where the model waits blindly for long-running processes.
4.  **[Secure .env loading and enforce workspace trust (#25814)](https://github.com/google-gemini/gemini-cli/pull/25814):** Security hardening to prevent headless CLI executions from loading malicious local configurations in untrusted directories.
5.  **[Support JSONL session logs in memory services (#25816)](https://github.com/google-gemini/gemini-cli/pull/25816):** Upgrades memory and summary services to natively parse JSONL logs, ensuring startup summaries generate correctly for newer sessions.
6.  **[Retain Gemini 3 thoughts in history (#25810)](https://github.com/google-gemini/gemini-cli/pull/25810):** Fixes silent data loss where Gemini 3 `thought` parts and `thoughtSignatures` were dropped during streaming consolidation.
7.  **[Add --session-id flag (#24976)](https://github.com/google-gemini/gemini-cli/pull/24976):** Allows developers to specify deterministic session IDs for headless/orchestration use cases and later resume them.
8.  **[Prevent duplicate SessionStart system message (#25827)](https://github.com/google-gemini/gemini-cli/pull/25827):** Fixes an interactive UI bug causing startup system messages to render twice.
9.  **[Fix command injection shell vulnerability (#24170)](https://github.com/google-gemini/gemini-cli/pull/24170):** Prevents shell substitution syntax (`$()`, `<()`) in arguments from being executed by the shell interpreter.
10. **[Handle line endings in ignore file parsing (#23895)](https://github.com/google-gemini/gemini-cli/pull/23895):** Resolves cross-platform bugs by properly splitting CRLF, LF, and CR line endings in ignore parsers.

## 5. Feature Request Trends
*   **Enhanced Codebase Comprehension:** Strong momentum toward AST-aware tools to give the agent structural code awareness rather than relying on raw text searches.
*   **Smarter Agent Memory:** Requests for agents to proactively save context and correctly route global preferences vs. project-specific configurations.
*   **Agent Safety & Guardrails:** Community demand for built-in protections against destructive Git operations, runaway script generation, and infinite tool-retry loops.
*   **Accessibility & UI Polish:** Active requests to fix rendering artifacts in SSH sessions, streaming tables, and UI borders, ensuring the terminal interface remains accessible.

## 6. Developer Pain Points
*   **Permission Friction:** The CLI frequently "forgets" user approvals, re-prompting for the same file permissions and interrupting workflow.
*   **Runaway Agents:** Agents often execute unnecessary additional features after finishing a requested task, or get stuck in retry loops when hitting MAX_TURNS without failing gracefully.
*   **Background Execution Blindness:** Lack of real-time stdout streaming for background shell tasks makes debugging hanging processes difficult for developers. 
*   **Cross-platform Instability:** Windows users continue to experience edge-case crashes (e.g., drive path resolution) and persistent terminal rendering bugs when using SSH/tmux.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-23

## 1. Today's Highlights
Two rapid-fire releases dropped in the last 24 hours: **v1.0.35-3** and **v1.0.35-4**. The headliners are **named session management** (`--name` / `--resume=<name>`) and a GitHub-style **contribution graph** on the `/usage` page. On the issue tracker, the community is heavily focused on **premium request metering bugs**, **model availability inconsistencies**, and a **regression that breaks session resume** after upgrading to the latest build.

---

## 2. Releases

### v1.0.35-4
| Category | Change |
|---|---|
| **Added** | `--name` flag to name sessions and `--resume=<name>` to resume them by name |
| **Improved** | LSP servers in `lsp.json` now support configurable spawn, initialization, and warmup timeouts |
| **Improved** | Context window indicator in the statusline is now **hidden by default** |
| **Improved** | MCP OAuth moved into the shared run |

### v1.0.35-3
| Category | Change |
|---|---|
| **Added** | GitHub-style contribution graph on `/usage` — adapts to terminal color mode and falls back to distinct glyphs in no-color terminals |
| **Improved** | Rendering performance for large text output in the timeline |
| **Improved** | Sync task calls now block until completion |

---

## 3. Hot Issues

1. **[#2725](https://github.com/github/copilot-cli/issues/2725) — GPT-5.4 model picker hides "Extra High" effort level** *(CLOSED, 31 comments, 21 👍)*
   The `/model` picker for GPT-5.4 only shows Low/Medium/High even though `xhigh` works at runtime. The UI inconsistency with actual model capabilities is causing user confusion. High engagement suggests this affects many daily users.

2. **[#2591](https://github.com/github/copilot-cli/issues/2591) — Single session consuming 80-100 premium requests** *(OPEN, 28 comments, 12 👍)*
   Each tool invocation or thinking step in an agentic flow consumes additional premium requests. One user reported a single request burning through 80–100 quota. This is a critical metering concern for users on limited plans.

3. **[#107](https://github.com/github/copilot-cli/issues/107) — Segfault on Alpine Linux during tool calls** *(OPEN, 12 comments, 4 👍)*
   Any tool call triggers a segmentation fault in Alpine containers. Despite being open since September 2025, it remains unresolved — a pain point for containerized workflows.

4. **[#1326](https://github.com/github/copilot-cli/issues/1326) — Option to disable all animations** *(OPEN, 10 comments, 19 👍)*
   Users want a CLI switch to disable thinking animations for accessibility, SSH-over-slow-network, and screen-reader use cases. Strong 👍 count signals broad demand.

5. **[#2899](https://github.com/github/copilot-cli/issues/2899) — Session resume broken after upgrade to 1.0.35-3** *(OPEN, 1 comment, 3 👍)*
   Strict schema validation in the new release rejects legacy `session.compaction_complete` events, making older sessions unloadable. This is a **regression introduced today** and will likely affect many upgraders.

6. **[#2900](https://github.com/github/copilot-cli/issues/2900) — Can't resume sessions after 4/22 update (Windows)** *(OPEN, 1 comment)*
   A companion report to #2899: after running `/update`, session resume dumps the user back to the shell and reports corrupt/missing session files. Windows-specific or general regression under investigation.

7. **[#892](https://github.com/github/copilot-cli/issues/892) — Sandbox mode to restrict file access** *(OPEN, 7 comments, 37 👍)*
   The highest-👍 open feature request. Users want to constrain the agent's filesystem access to a working directory. Critical for trust and enterprise adoption.

8. **[#2625](https://github.com/github/copilot-cli/issues/2625) — Poor rendering performance in long sessions** *(OPEN, 4 comments, 3 👍)*
   Terminal hangs for 30–45 seconds as conversations grow. Clearing history fixes it, pointing to an unbounded rendering cost issue.

9. **[#2661](https://github.com/github/copilot-cli/issues/2661) / [#2878](https://github.com/github/copilot-cli/issues/2878) — Opus 4.5 / 4.6 model availability** *(CLOSED/OPEN, 7 & 6 comments)*
   Models disappearing from the picker or returning 400 errors. Reflects ongoing friction around model rollout synchronization between CLI and VS Code extensions.

10. **[#2317](https://github.com/github/copilot-cli/issues/2317) — `~/.bash_history` truncated after tool execution** *(OPEN, 1 comment, 6 👍)*
    When Copilot runs a Bash tool, it truncates the user's shell history file, ignoring `HIST*` settings. Data-loss-adjacent bug that deserves attention.

---

## 4. Key PR Progress

| PR | Status | Description |
|---|---|---|
| [#2887](https://github.com/github/copilot-cli/pull/2887) | CLOSED | **Safe cleanup of older direct-install binaries.** When users reinstall via `install.sh` into a different prefix, stale binaries accumulate. This PR makes cleanup automatic with an opt-out flag. |
| [#1333](https://github.com/github/copilot-cli/pull/1333) | OPEN | **Minor grammar and Markdown formatting fixes.** Non-functional documentation polish; still awaiting merge. |

*Note: Only 2 PRs were updated in the last 24 hours. The bulk of today's activity is in releases and issues.*

---

## 5. Feature Request Trends

| Theme | Representative Issues | Signal |
|---|---|---|
| **Session management & cleanup** | [#1451](https://github.com/github/copilot-cli/issues/1451) (19 👍), [#2869](https://github.com/github/copilot-cli/issues/2869), [#1687](https://github.com/github/copilot-cli/issues/1687) (34 👍 — phone access) | Users want better lifecycle control: delete, cleanup, and remote access to sessions. |
| **Security & sandboxing** | [#892](https://github.com/github/copilot-cli/issues/892) (37 👍), [#879](https://github.com/github/copilot-cli/issues/879) | Constrain file access and move to sequential approval — enterprise readiness asks. |
| **Accessibility & rendering control** | [#1326](https://github.com/github/copilot-cli/issues/1326) (19 👍), [#2676](https://github.com/github/copilot-cli/issues/2676) | Disable animations, prevent title modification. Important for remote/SSH and accessibility. |
| **Clipboard & input improvements** | [#1452](https://github.com/github/copilot-cli/issues/1452), [#2680](https://github.com/github/copilot-cli/issues/2680) | Image paste support and shell command history recall inside the `!` prefix mode. |
| **LSP configurability** | [#1392](https://github.com/github/copilot-cli/issues/1392) (5 👍) | Configurable timeouts for LSP initialization — directly addressed in v1.0.35-4. |
| **Auth flexibility** | [#2705](https://github.com/github/copilot-cli/issues/2705) | Managed Identity support for Azure Foundry BYOK scenarios. |

---

## 6. Developer Pain Points

- **Premium request metering is unreliable.** Multiple issues ([#2591](https://github.com/github/copilot-cli/issues/2591), [#2797](https://github.com/github/copilot-cli/issues/2797), [#2889](https://github.com/github/copilot-cli/issues/2889)) report wildly fluctuating quota percentages and single sessions consuming 80+ requests. This erodes trust in the billing/quota system.

- **Session regression on upgrade.** The v1.0.35-3 release broke backward compatibility with older session files ([#2899](https://github.com/github/copilot-cli/issues/2899), [#2900](https://github.com/github/copilot-cli/issues/2900)). Users running `/update` lose access to in-progress work — a particularly painful experience.

- **Model picker desync.** Models that work at the API level (GPT-5.4 xhigh, Opus 4.5/4.6) are hidden or throw errors in the CLI picker ([#2725](https://github.com/github/copilot-cli/issues/2725), [#2661](https://github.com/github/copilot-cli/issues/2661), [#2878](https://github.com/github/copilot-cli/issues/2878)). The CLI lags behind VS Code in model availability.

- **Rendering performance degrades with session length.** Long conversations cause 30–45 second hangs ([#2625](https://github.com/github/copilot-cli/issues/2625)). The timeline rendering improvements in v1.0.35-3 may help, but users report the issue persists.

- **Plugin/marketplace installation failures.** The `anthropics/claude-plugins-official` marketplace continues to fail validation ([#1996](https://github.com/github/copilot-cli/issues/1996), [#1287](https://github.com/github/copilot-cli/issues/1287)), and installed plugins don't properly merge MCP server configs ([#2709](https://github.com/github/copilot-cli/issues/2709)). The plugin ecosystem remains fragile.

---

*Digest generated from public GitHub data on 2026-04-23. Data source: [github.com/github/copilot-cli](https://github.com/github/copilot-cli).*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-23

## 1. Today's Highlights
Kimi Code CLI rolled out **v1.38.0**, introducing telemetry tracking and a critical fix for the kosong/Anthropic parallel tool use provider. The day's community activity was heavily dominated by **authentication and OAuth stability fixes**, with multiple PRs addressing a race condition where single 401 errors improperly deleted user credentials. Additionally, developers continue to report platform-specific friction—particularly on Windows and within IDE-integrated terminals.

## 2. Releases
### **v1.38.0**
*   **feat(telemetry):** Integrated telemetry tracking across interactive and non-interactive modes ([PR #1798](https://github.com/MoonshotAI/kimi-cli/pull/1798) by @RealKai42).
*   **fix(kosong/anthropic):** Merged parallel `tool_results` into a single user message to comply strictly with the Anthropic Messages API spec ([PR #1978](https://github.com/MoonshotAI/kimi-cli/pull/1978) by @wbxl2000).
*   *Note: Accompanied by a bump of the internal `kosong` library to v0.51.0.* ([PR #2009](https://github.com/MoonshotAI/kimi-cli/pull/2009))

## 3. Hot Issues
1.  **KimiCode Usage Calculation Problems** ([#1994](https://github.com/MoonshotAI/kimi-cli/issues/1994)): Users report that K2.6's long chain-of-thought rapidly consumes token limits (running out in 2 questions). This is the most upvoted issue of the day (👍 3) as users question the fairness of token vs. request-based billing.
2.  **Configurable Approval Request Timeout** ([#1823](https://github.com/MoonshotAI/kimi-cli/issues/1823)): *[CLOSED]* A highly requested feature (👍 2) highlighting the friction with the hardcoded 5-minute timeout for background approvals, which auto-cancels long-running tasks.
3.  **IDEA Terminal Crash** ([#1990](https://github.com/MoonshotAI/kimi-cli/issues/1990)): A critical bug where sending a message in JetBrains IDEA causes the terminal to close completely. 
4.  **Windows Python 3.13 Asyncio Compatibility** ([#1997](https://github.com/MoonshotAI/kimi-cli/issues/1997)): The `kimi` command hangs infinitely on Windows due to an asyncio deadlock in Python 3.13 (the version installed by the official script).
5.  **OAuth Race Prevention Architecture** ([#2006](https://github.com/MoonshotAI/kimi-cli/issues/2006)): Maintainer tracking issue for a major architectural overhaul to prevent concurrent CLI instances from wiping each other's refreshed tokens.
6.  **Trae IDE Third-Party BaseURL Support** ([#2007](https://github.com/MoonshotAI/kimi-cli/issues/2007)): Users request official support for connecting Kimi CLI via Trae's newly gray-tested third-party BaseURL feature, which is currently rejected by Kimi's backend.
7.  **Alt-Screen Redraws in Neovim** ([#1998](https://github.com/MoonshotAI/kimi-cli/issues/1998)): A request for an opt-out of high-frequency redraws/alt-screen to prevent UI tearing when running Kimi inside Neovim's `:terminal` emulator.
8.  **Shift+Enter for Newline** ([#2010](https://github.com/MoonshotAI/kimi-cli/issues/2010)): A UX request to align Kimi CLI with modern chat standards (ChatGPT, Slack) by mapping `Shift+Enter` to insert a newline instead of requiring `Ctrl-J` or `Alt-Enter`.
9.  **Yolo Mode Overriding Skills** ([#1989](https://github.com/MoonshotAI/kimi-cli/issues/1989)): Developers note that Yolo (non-interactive) mode bypasses custom Skill-defined workflow steps, requesting a way to enforce strict agent workflows even in autonomous modes.
10. **fastmcp AuthlibDeprecationWarning** ([#1995](https://github.com/MoonshotAI/kimi-cli/issues/1995)): Python 3.13 users are seeing noisy `AuthlibDeprecationWarning` logs on every invocation due to an outdated `fastmcp` dependency.

## 4. Key PR Progress
1.  **[CLOSED] fix(auth): Do not delete credentials file on a single refresh 401** ([#1996](https://github.com/MoonshotAI/kimi-cli/pull/1996)): A crucial fix by @wbxl2000 that stops the CLI from obliterating the user's whole credentials file if a background refresh encounters a transient 401 error.
2.  **[OPEN] fix(chat-provider): Preserve refreshed OAuth token on connection recovery** ([#2004](https://github.com/MoonshotAI/kimi-cli/pull/2004)): Prevents network retry logic from reverting to a stale API key after an OAuth token has just been rotated.
3.  **[OPEN] fix(term, app): Prevent TTY hang on exit and close MCP connections** ([#1985](https://github.com/MoonshotAI/kimi-cli/pull/1985)): Resolves unresponsive terminal states by forcing non-blocking I/O during Unix cursor positioning and cleaning up orphaned MCP connections on shutdown.
4.  **[OPEN] fix(proxy): Strip unsupported IPv6 CIDRs from NO_PROXY** ([#2000](https://github.com/MoonshotAI/kimi-cli/pull/2000)): Prevents an `httpx` startup crash by filtering out IPv6 CIDRs in proxy environment variables that the underlying HTTP client cannot parse.
5.  **[OPEN] fix(soul): Re-inject yolo reminder after context compaction** ([#2003](https://github.com/MoonshotAI/kimi-cli/pull/2003)): Fixes an issue where autonomous "yolo mode" reverted to standard interactive behavior after the LLM's context window was automatically compacted/summarized.
6.  **[CLOSED] fix(soul): Carry approval cancellation feedback to ApprovalResult** ([#1979](https://github.com/MoonshotAI/kimi-cli/pull/1979)): Improves UX by correctly returning "approval timed out" to the agent instead of misleadingly stating "Rejected by user" when a background task times out.
7.  **[CLOSED] fix(install): Fix uv not found error on Windows** ([#1993](https://github.com/MoonshotAI/kimi-cli/pull/1993)): Corrects a pathing bug in the installation script that prevented Windows users from automatically bootstrapping the `uv` package manager.
8.  **[OPEN] fix(streaming): Avoid replaying large tool call payloads** ([#1928](https://github.com/MoonshotAI/kimi-cli/pull/1928)): Optimizes UI performance by stopping the CLI from resending massive file payloads over the wire during incremental `ToolCallProgress` updates.
9.  **[OPEN] test(background): Fix flaky approval-wait tests** ([#2008](https://github.com/MoonshotAI/kimi-cli/pull/2008)): Replaces tight `asyncio.sleep` polling loops with deterministic `wait_for_status` hooks to prevent false CI failures on slow runners.
10. **[OPEN] feat(soul): RalphFlow architecture** ([#1960](https://github.com/MoonshotAI/kimi-cli/pull/1960)): Proposes a fascinating community contribution for an automated iteration framework using ephemeral context files and convergence detection to prevent infinite agentic loops.

## 5. Feature Request Trends
*   **IDE & Editor Convergence:** Strong demand to make Kimi CLI play nicely within the boundaries of modern IDEs. This includes requests for Trae IDE BaseURL support ([#2007](https://github.com/MoonshotAI/kimi-cli/issues/2007)), fixing JetBrains terminal crashes ([#1990](https://github.com/MoonshotAI/kimi-cli/issues/1990)), and Neovim `:terminal` buffer compatibility ([#1998](https://github.com/MoonshotAI/kimi-cli/issues/1998)).
*   **Autonomous Agent Workflow Control:** As users push Yolo mode into production, there is a distinct trend toward wanting stricter guardrails. Examples include preventing infinite agentic loops ([#1960](https://github.com/MoonshotAI/kimi-cli/pull/1960)), enforcing Skill workflows in non-interactive modes ([#1989](https://github.com/MoonshotAI/kimi-cli/issues/1989)), and more robust background approval handling ([#1823](https://github.com/MoonshotAI/kimi-cli/issues/1823)).
*   **Multi-agent Context Optimization:** Requests for optimizing how parallel agents share state to save expensive main-agent decoding cycles ([#1362](https://github.com/MoonshotAI/kimi-cli/issues/1362), [#1991](https://github.com/MoonshotAI/kimi-cli/issues/1991)).

## 6. Developer Pain Points
*   **Token Consumption vs. CoT:** The most vocal frustration today is token depletion. Because Kimi K2.6 utilizes deep chain-of-thoughts, users feel their subscriptions are drained too quickly, making the CLI too expensive for routine automated tasks ([#1994](https://github.com/MoonshotAI/kimi-cli/issues/1994)).
*   **OAuth Token Flakiness:** The CLI's authentication layer has been fragile, causing users to be repeatedly forced to `/login` during active sessions. While maintainers have aggressively patched the race conditions ([#1996](https://github.com/MoonshotAI/kimi-cli/pull/1996), [#2004](https://github.com/MoonshotAI/kimi-cli/pull/2004)), the frequency of these issues has been a major disruption.
*   **Windows & Network Friction:** Developers on Windows or behind corporate proxies continue to hit hard walls. Hanging processes due to Python 3.13 `asyncio` bugs ([#1997](https://github.com/MoonshotAI/kimi-cli/issues/1997)) and crashes caused by IPv6 proxy configurations ([#2000](https://github.com/MoonshotAI/kimi-cli/pull/2000)) indicate that platform-specific edge cases still need stabilization.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-23

## 1. Today's Highlights
The OpenCode community remains highly active with no new official releases in the past 24 hours, shifting focus entirely to bug triage and feature proposals. Heavy discussion continues around Copilot provider compatibility—specifically a silent breaking change for Claude Opus 4.6 "max" effort—and significant progress was made on LSP client reliability with a new pull diagnostics PR for C#/Roslyn support. Windows users continue to report desktop app and TUI input bugs, while the plugin ecosystem expands with requests for voice input, team integrations, and native Ollama support.

---

## 2. Releases
No new releases in the last 24 hours. The community continues working off version 1.4.x.

---

## 3. Hot Issues

1. **[#2177] Allow explicitly changing working directory** (39 comments, 👍 87)
   A long-standing request to let users `cd` mid-conversation via `!` command mode. Errors like "... is not in the current working directory" frequently block multi-directory workflows. Strong community demand. [#2177](https://github.com/anomalyco/opencode/issues/2177)

2. **[#22788] Copilot: `output_config.effort "max"` no longer supported by Claude Opus 4.6** (12 comments, 👍 16)
   A silent Copilot API change broke the `max` effort variant overnight. Users report it worked one day and failed the next, highlighting fragility in provider integrations. [#22788](https://github.com/anomalyco/opencode/issues/22788)

3. **[#16218] Model repeats same response in a loop** (13 comments)
   A critical bug where the model generates a correct answer but then loops it infinitely, consuming quota. Affects Copilot plugin users on recent OpenCode versions. [#16218](https://github.com/anomalyco/opencode/issues/16218)

4. **[#4279] Extra space in tool name causes failures and quota burn** (9 comments)
   Models like Kimi K2 prepend spaces to tool names (`" bash"` vs `"bash"`), causing OpenCode to fail and sometimes enter repetitive action loops. [#4279](https://github.com/anomalyco/opencode/issues/4279)

5. **[#3116] Kotlin LSP support** (12 comments, 👍 13)
   Users struggle with incorrect file URI schemes on Windows when connecting the Kotlin LSP. Companion issue [#23873](https://github.com/anomalyco/opencode/issues/23873) (7 comments) reports timeouts and broken pull-diagnostics, with one user noting "I went through the code and... it's a mess." [#3116](https://github.com/anomalyco/opencode/issues/3116)

6. **[#23599] System theme no longer shows through system colors** (9 comments, 👍 14) — *CLOSED*
   A regression broke the one theme that respected terminal default colors. Quickly triaged and closed. [#23599](https://github.com/anomalyco/opencode/issues/23599)

7. **[#22292] Managed settings bypassed via `OPENCODE_PERMISSION` env var** (5 comments)
   A security-relevant gap where admin-managed config in `/etc/opencode/opencode.json` can be overridden by environment variables, breaking intended policy enforcement. [#22292](https://github.com/anomalyco/opencode/issues/22292)

8. **[#23875] Desktop app: resize glitch and input not accepting text on Windows 11** (6 comments)
   Two bugs in the new desktop app—pane resizing sticks to the mouse cursor, and the input field refuses keyboard input. High visibility for Windows onboarding. [#23875](https://github.com/anomalyco/opencode/issues/23875)

9. **[#6096] Experimental tokens-per-second display** (15 comments, 👍 44)
   Popular feature request to show TPS per message response. Ties into broader plugin extensibility needs (see [#18969](https://github.com/anomalyco/opencode/issues/18969) for `tui.footer.items` hook proposal). [#6096](https://github.com/anomalyco/opencode/issues/6096)

10. **[#16763] AWS Bedrock pricing appears off by 5×** (4 comments, 👍 1)
    Users report OpenCode dramatically overestimates Bedrock token costs (showing $0.10 for 20K tokens), eroding trust in cost tracking. [#16763](https://github.com/anomalyco/opencode/issues/16763)

---

## 4. Key PR Progress

1. **[PR #23771] Support pull diagnostics in the LSP client**
   Major fix for C# workflows—adds pull diagnostics so Roslyn correctly reports errors after edits instead of waiting for push events that never come. Reduces error detection time from 3s+ to near-instant. [#23771](https://github.com/anomalyco/opencode/pull/23771)

2. **[PR #23612] Fix Roslyn LSP crash and workspace symbol query**
   Resolves a Roslyn language server crash caused by missing sync ranges and fixes workspace symbol lookups. Complements the pull-diagnostics PR above. [#23612](https://github.com/anomalyco/opencode/pull/23612)

3. **[PR #21370] Preserve assistant message content with reasoning blocks**
   Fixes empty text parts between Anthropic thinking blocks on Opus 4.6+/Sonnet 4.6, where content was silently dropped. [#21370](https://github.com/anomalyco/opencode/pull/21370)

4. **[PR #23886] Coerce numeric tool call IDs for OpenAI-compatible providers** — *CLOSED*
   NVIDIA NIM (Kimi K2.5) returns numeric tool call IDs instead of strings, violating the OpenAI spec. This PR adds type coercion to prevent crashes. [#23886](https://github.com/anomalyco/opencode/pull/23886)

5. **[PR #13854] Stop streaming markdown after message completes**
   Fixes a bug where `TextPart` always set `streaming={true}`, causing the last table row to be hidden even for completed messages. [#13854](https://github.com/anomalyco/opencode/pull/13854)

6. **[PR #23671] Add favorite and recent sections to model pickers**
   QoL improvement for the desktop app model picker—shows favorited and recently used models at the top. [#23671](https://github.com/anomalyco/opencode/pull/23671)

7. **[PR #21907] Add `--model free` resolution**
   Introduces `Provider.resolveSelection()` that maps `--model free` to a random zero-cost model, improving onboarding for free-tier users. [#21907](https://github.com/anomalyco/opencode/pull/21907)

8. **[PR #23890] Runtime-aware search service with `fff-bun`**
   Adds a `Search` abstraction that uses `fff-bun` under Bun and falls back to ripgrep under Node/desktop—laying groundwork for faster file operations. [#23890](https://github.com/anomalyco/opencode/pull/23890)

9. **[PR #18767] Mobile touch optimization for the desktop app**
   Touch-friendly UX improvements for tablet/mobile use while preserving the desktop experience. [#18767](https://github.com/anomalyco/opencode/pull/18767)

10. **[PR #12732] Team TUI integration—sidebar, header, sync, and dialog**
    Full TUI surface for multi-agent teams: sidebar panels, header badges, team dialog, and real-time event sync. Third in a three-PR series. [#12732](https://github.com/anomalyco/opencode/pull/12732)

---

## 5. Feature Request Trends

- **Plugin extensibility for persistent UI:** The `tui.footer.items` hook ([#18969](https://github.com/anomalyco/opencode/issues/18969)) and voice input plugin gaps ([#17425](https://github.com/anomalyco/opencode/issues/17425)) indicate strong demand for richer TUI plugin surfaces beyond ephemeral toasts.
- **Local/offline model integration:** Native Ollama support ([#21396](https://github.com/anomalyco/opencode/issues/21396)) and `--model free` resolution ([PR #21907](https://github.com/anomalyco/opencode/pull/21907)) reflect a push toward zero-cost, air-gapped, and local-first workflows.
- **Better context transparency:** Source-level context breakdowns ([#20631](https://github.com/anomalyco/opencode/issues/20631)) and lazy-loading agent descriptions ([#13188](https://github.com/anomalyco/opencode/issues/13188)) aim to reduce token waste and give developers more control.
- **Multi-project/worktree workflows:** Tab interfaces for git worktrees ([#23857](https://github.com/anomalyco/opencode/issues/23857)) and directory switching ([#2177](https://github.com/anomalyco/opencode/issues/2177)) are consistently requested by power users.
- **Platform packaging:** Fedora Copr repo ([#22572](https://github.com/anomalyco/opencode/issues/22572)) and Homebrew version mismatches ([#23904](https://github.com/anomalyco/opencode/issues/23904)) show demand for smoother Linux package management.

---

## 6. Developer Pain Points

- **Provider volatility:** Silent Copilot API changes ([#22788](https://github.com/anomalyco/opencode/issues/22788)), Kimi K2 space-in-tool-name bugs ([#4279](https://github.com/anomalyco/opencode/issues/4279)), and Go subscription quota errors ([#23887](https://github.com/anomalyco/opencode/issues/23887), [#23722](https://github.com/anomalyco/opencode/issues/23722)) make multi-provider reliability a top frustration.
- **Windows is a second-class citizen:** TUI copy-paste bugs ([#5046](https://github.com/anomalyco/opencode/issues/5046)), desktop resize/input glitches ([#23875](https://github.com/anomalyco/opencode/issues/23875)), LSP URI scheme errors ([#3116](https://github.com/anomalyco/opencode/issues/3116)), and keyboard shortcut conflicts ([#20395](https://github.com/anomalyco/opencode/issues/20395)) form a recurring pattern.
- **Unintended side effects:** OpenCode executing `pip3 install` despite restrictive configs ([#22100](https://github.com/anomalyco/opencode/issues/22100)) and managed settings being bypassable ([#22292](https://github.com/anomalyco/opencode/issues/22292)) raise security and trust concerns.
- **Response truncation and looping:** Multiple reports of models cutting off mid-response ([#22861](https://github.com/anomalyco/opencode/issues/22861), [#23721](https://github.com/anomalyco/opencode/issues/23721)) or repeating in infinite loops ([#16218](https://github.com/anomalyco/opencode/issues/16218)) waste tokens and break workflows.
- **Cost tracking accuracy:** Bedrock pricing off by 5× ([#16763](https://github.com/anomalyco/opencode/issues/16763)) undermines confidence in usage dashboards.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-23

## 1. Today's Highlights

Qwen Code officially shipped **v0.15.0**, marking a significant milestone that transitions the project into its next release cycle. The update introduces complete **ACP (Agent Communication Protocol) hooks support** and a heavily optimized **compact mode UX**, paving the way for more sophisticated IDE integrations and background agent workflows. Meanwhile, the community remains highly active around **OAuth free tier policy changes** and **local model configuration issues**, with a surge of PRs addressing terminal UX, streaming parser concurrency, and slash command stability.

## 2. Releases

### [v0.15.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.0)
The main stable release of the day, bundling major new capabilities:
- **feat(acp): complete hooks support for ACP integration** (#3248 by @DennisYu07) — Enables full lifecycle hooks for ACP mode, critical for IDE extensions like Zed and JetBrains.
- **feat: optimize compact mode UX — shortcuts, settings sync, and safety** (#3100 by @chiga0) — Streamlines the compact/inline mode with better keyboard shortcuts, cross-session settings sync, and safety guardrails.

*Note: v0.15.0-preview.2, v0.14.5-preview.0, and v0.14.5-nightly.20260422 were also published with identical changelogs as staging/nightly artifacts leading up to the stable cut.*

---

## 3. Hot Issues

1. **[#3203 — Qwen OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203)** ⚡ *113 comments*
   The dominant community discussion. A proposal to reduce the free tier from 1,000 to 100 requests/day and eventually phase it out entirely has drawn massive feedback. Users are concerned about the impact on hobbyists, students, and open-source contributors. Still open and awaiting triage.

2. **[#3384 — Unable to add OpenAI-compatible local LLM](https://github.com/QwenLM/qwen-code/issues/3384)** 🖥️ *8 comments*
   Users running Qwen3.6-35B-A3B on vLLM locally cannot get Qwen Code to connect despite correct `settings.json` configuration. Reflects a broader pain point around local model onboarding.

3. **[#3496 — webSearch feature unavailable after free tier suspension](https://github.com/QwenLM/qwen-code/issues/3496)** 🔍 *5 comments*
   Users report that the built-in web search tool broke after the OAuth free quota change, and request compatibility with Chinese search APIs (Alibaba Bailian, ByteDance, GLM).

4. **[#3307 — "Temporarily out of stock" Alibaba Cloud Coding Plan](https://github.com/QwenLM/qwen-code/issues/3307)** 💳 *4 comments*
   The paid plan for Qwen 3.6 Plus access via Alibaba Cloud has been showing "out of stock" for a week, blocking paying users from accessing the service.

5. **[#3530 — Maximum update depth exceeded when switching models](https://github.com/QwenLM/qwen-code/issues/3530)** 🐛 *3 comments*
   A React rendering loop crash triggered by the `/model` command's autocomplete suggestions. Directly addressed by PR #3533 (fix slash completion render loop).

6. **[#1280 — Cannot use locally deployed Ollama Qwen3-Coder](https://github.com/QwenLM/qwen-code/issues/1280)** 🏠 *3 comments*
   Long-standing issue (since Dec 2025) where local Ollama models fail with auth errors. Still unresolved, indicating a gap in the local model setup flow.

7. **[#2596 — CLI keeps appending `</output>` artifacts](https://github.com/QwenLM/qwen-code/issues/2596)** ✂️ *2 comments*
   The model periodically injects stray `</output>` closing tags into its responses, corrupting code generation. A quality-of-life issue affecting daily usage.

8. **[#3515 / #3504 / #3501 — Wave of 401 authentication errors](https://github.com/QwenLM/qwen-code/issues/3515)** 🔐 *2 comments each*
   A cluster of issues reporting persistent `401 invalid access token` errors across CLI and VS Code extension, even after successful login. Likely related to token refresh logic or the OAuth policy transition.

9. **[#3520 — Tool ran without output or errors](https://github.com/QwenLM/qwen-code/issues/3520)** 🤖 *2 comments*
   Silent tool execution failures on v0.14.5 where shell tools complete with no output, making debugging impossible. Possibly related to the streaming parser concurrency fixes in PR #3525.

10. **[#3532 — How to configure local models properly?](https://github.com/QwenLM/qwen-code/issues/3532)** 📖 *1 comment*
    Frustration from users following official documentation for local model setup but still hitting authentication prompts. Highlights documentation gaps in the local deployment workflow.

---

## 4. Key PR Progress

1. **[PR #3525 — fix(core): scope StreamingToolCallParser per stream](https://github.com/QwenLM/qwen-code/pull/3525)** ✅ *Merged*
   Fixes the root cause of `Model stream ended with empty response text` errors in subagents. The parser was a singleton per `Converter`, causing concurrent streams to corrupt each other's state. Critical for multi-agent stability.

2. **[PR #3533 — fix(cli): stop slash completion render loop](https://github.com/QwenLM/qwen-code/pull/3533)** 🔧
   Stabilizes `useResumeCommand()` callback dependencies to prevent the `Maximum update depth exceeded` crash when typing `/model `. Directly fixes issue #3530.

3. **[PR #3460 — feat(cli): auto-detect terminal theme](https://github.com/QwenLM/qwen-code/pull/3460)** ✅ *Merged*
   Adds automatic dark/light terminal detection via `COLORFGBG` and `OSC 11` queries. Resolves three open issues (#2998, #3053, #2135) about invisible text in iTerm2 and light-background terminals.

4. **[PR #3521 — fix(core): never merge distinct parallel tool-call ids](https://github.com/QwenLM/qwen-code/pull/3521)** ✅ *Merged*
   Prevents the streaming parser from merging chunks from different tool calls that share the same `index` (a DashScope/Qwen provider quirk). Essential fix for parallel tool call reliability.

5. **[PR #3502 — feat(web-search): replace built-in web_search with MCP](https://github.com/QwenLM/qwen-code/pull/3502)** 🏗️
   Architecturally significant change: removes all built-in web search providers (DashScope, Tavily, Google, GLM) in favor of user-configurable MCP servers. Gives users full control over their search backend.

6. **[PR #3488 — feat(cli): background-agent UI — pill, combined dialog, detail view](https://github.com/QwenLM/qwen-code/pull/3488)** 🎨
   Adds the user-facing surface for background agents: a status-line pill showing running agent count, a combined tasks dialog, and a detail view. Completes the background agent control feature.

7. **[PR #3318 — feat(cli): API preconnect to reduce first-call latency](https://github.com/QwenLM/qwen-code/pull/3318)** ⚡
   Fires an early HEAD request to warm TCP+TLS connections, saving 100-200ms on the first API call. Smart skip conditions for proxy environments.

8. **[PR #3519 — feat(cli): unified image paste](https://github.com/QwenLM/qwen-code/pull/3519)** 🖼️
   Unifies all image input paths (Cmd+V, base64 text, drag-drop) under a single `[Image #N]` placeholder UX. Fixes macOS-specific paste bugs and adds new input sources.

9. **[PR #3377 — feat(cli): Phase 2 — slash command multi-mode expansion](https://github.com/QwenLM/qwen-code/pull/3377)** ✅ *Merged*
   Expands 13 built-in slash commands to work in `non_interactive` and `acp` modes, returning machine-readable output. Key enabler for IDE integrations and CI/CD workflows.

10. **[PR #3404 — feat(cli): /doctor diagnostic command](https://github.com/QwenLM/qwen-code/pull/3404)** ✅ *Merged*
    Adds a comprehensive `/doctor` command that checks Node.js version, auth status, network connectivity, and configuration validity. Directly addresses the recurring "how do I configure this?" pain point.

---

## 5. Feature Request Trends

- **Local model integration improvements**: The most persistent theme. Users want first-class support for Ollama, vLLM, and other OpenAI-compatible backends without authentication friction (#3384, #1280, #3532).

- **Web search flexibility**: Moving away from a single built-in provider toward user-chosen search backends, especially Chinese API compatibility (#3496, #3502).

- **Terminal UX polish**: Auto theme detection, flicker-free rendering, and better contrast handling across diverse terminal emulators (#2998, #3053, #2135, #3013).

- **Session management**: Named sessions, session preview in `/resume`, and better history navigation (#3510, #3190, #2619, #3531).

- **Background agent observability**: Visibility into what background/sub agents are doing, with status indicators and task management (#3488, #1267).

- **IDE integration depth**: Better ACP mode support for Zed, JetBrains, and VS Code, including plan mode fixes and hook lifecycle management (#1151, #3511, #3377).

---

## 6. Developer Pain Points

- **Authentication and token management**: The single most reported frustration. A wave of 401 errors (#3515, #3504, #3501, #3524, #3514, #3506) suggests the token refresh mechanism is unreliable, especially during the OAuth policy transition. Users report being locked out even after successful login.

- **Local model configuration is confusing**: Despite documentation, users consistently fail to connect local LLMs (#3384, #1280, #3532). The tool still prompts for OAuth even when a local endpoint is configured. The `/auth` flow doesn't clearly distinguish between cloud and local providers.

- **Free tier uncertainty**: The proposed quota reduction (1000 → 100 requests/day) and eventual phase-out (#3203) has created anxiety in the community. Users are unsure whether to invest time learning the tool if free access will disappear. The "out of stock" Coding Plan (#3307) compounds this by blocking the paid alternative.

- **Streaming and concurrency bugs**: Parallel tool calls and subagent flows produce silent failures, empty responses, and merged output (#3520, #3516, #2596). These are particularly painful because they're non-deterministic and hard to reproduce.

- **Permission prompt fatigue**: Users report excessive permission requests during normal operations (#2906), far more frequent than competing tools like Claude Code or Codex, disrupting workflow momentum.

</details>