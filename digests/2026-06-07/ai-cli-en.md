# AI CLI Tools Community Digest 2026-06-07

> Generated: 2026-06-06 22:19 UTC | Tools covered: 9

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

Here is the cross-tool comparison and ecosystem analysis report based on the community digests from June 7, 2026.

### 1. Ecosystem Overview
The AI CLI tool landscape is aggressively pivoting from simple terminal-based chat interfaces toward fully autonomous, multi-agent orchestrators capable of executing complex software engineering lifecycles. However, this rapid push for agentic capabilities is colliding with significant platform stability bottlenecks, most notably fragile context memory management and a shared struggle to maintain parity and reliability on Windows and WSL environments. The ecosystem is highly dynamic, with major players shipping rapid patch cycles to address critical memory leaks and TUI deadlocks, while open-source challengers rapidly close the feature gap by mimicking market leaders. 

### 2. Activity Comparison
*Note: Data reflects the 24-hour window preceding the 2026-06-07 digest.*

| Tool | Issues Opened/Updated (24h) | PRs Updated/Merged (24h) | Release Status | Primary Focus Area |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10+ | 5 | **v2.1.166 & v2.1.167** (Patch releases) | Fallback models, Windows stability, Memory lifecycle |
| **OpenAI Codex** | 10+ | 10 | **Alpha 0.138.0-a5 & a6** | Guardian safety, TUI deadlocks, Quota management |
| **Gemini CLI** | 9+ | 10+ | **None** | Gemini 3.5 Flash prep, AST-aware tools, Auth fixes |
| **GitHub Copilot CLI**| 10+ | 0 | **None** | WSL2 CPU spikes, MCP reliability, Agent scope creep |
| **OpenCode** | 10+ | 10 | **None** (v1.16 in-use) | Dynamic workflows, Sandboxing, Integrated browser |
| **Qwen Code** | 10+ | 10 | **v0.17.1-nightly** | `qwen serve` daemon, OOM fixes, Web-shell parity |
| **Pi** | 10+ | 5+ | **None** | Workspace security/approvals, Extension API, TUI fixes |
| **Kimi Code** | 1 | 1 | **None** | Windows daemon WebSockets |
| **DeepSeek TUI** | 10+ | 10+ | **None** (v0.9.0 imminent) | v0.9.0 release hardening, VSCode integration, Keymaps |

### 3. Shared Feature Directions
Despite different underlying models, developer communities are converging on several universal requirements for AI CLI tools:

*   **Resilient Long-Term Memory & Context Management:** Across the board, users are frustrated by context amnesia. *Claude Code*, *OpenCode*, and *Qwen Code* users report severe auto-compaction loops or out-of-memory (OOM) crashes during long sessions, while *Copilot CLI* and *Gemini CLI* suffer from context bloat that silently breaks agent instructions. 
*   **Windows and WSL Platform Parity:** Non-unix environments remain critically underserved. *Claude Code*, *Copilot CLI*, *OpenAI Codex*, and *Kimi Code* all experienced high-priority Windows-specific bugs today, ranging from silent tool drops and unresponsive permission dialogs to massive 215% CPU idle spins and broken WebSockets.
*   **Structured Agent Workflows & Sandboxing:** Developers want reliable multi-agent orchestration, not just chat. *OpenCode*, *Claude Code*, and *Qwen Code* are actively building dynamic workflow engines (e.g., `/workflow` commands). Concurrently, *Pi* and *OpenCode* are focusing heavily on explicit sandboxing and permission approvals to prevent autonomous agents from executing destructive commands.
*   **Daemon/Headless Modes & API Parity:** Tools are being treated as backend engines. *Qwen Code* and *OpenAI Codex* are heavily investing in HTTP/SSE daemon modes (`qwen serve` and `remote-control`), enabling external web-shells and IDEs to manage sessions programmatically.
*   **Cost and Token Visibility:** As agents consume tokens rapidly, users are demanding transparency. *OpenCode*, *DeepSeek TUI*, and *OpenAI Codex* communities are actively requesting unified usage tracking, token heatmaps, and real-time context window indicators.

### 4. Differentiation Analysis
*   **Orchestration Philosophy:** *Claude Code* is targeting tiered "brain + worker" autonomous orchestrators, whereas *OpenAI Codex* is heavily focused on safety guardrails (Refining Guardian policies, Exfiltration prevention). *OpenCode* and *Qwen Code* are taking a community-driven approach via explicit Markdown/YAML workflow definitions.
*   **Technical Underpinnings:** *OpenAI Codex* is aggressively re-architecting its Rust base to fix TUI event-loop deadlocks. *OpenCode* is pushing the boundaries of a self-contained environment by building an integrated browser directly into the TUI. 
*   **Model Agnosticism vs. Walled Gardens:** *OpenCode* is highly differentiated by its focus on LAN provider discovery (mDNS) and unified usage tracking across OpenAI, Anthropic, and local models. In contrast, *Claude Code* and *Copilot CLI* remain tightly coupled to their respective parent ecosystems, focusing instead on deep platform integrations (like VS Code).
*   **IDE vs. TUI Focus:** While most tools are terminal-first, *DeepSeek TUI* is uniquely prioritizing native VSCode Agent View adaptations alongside its terminal interface, recognizing the developer preference for graphical interfaces over raw terminals.

### 5. Community Momentum & Maturity
*   **High-Velocity Core Tools:** *OpenAI Codex*, *Claude Code*, and *Qwen Code* show the highest release momentum, pushing nightly or bi-weekly patches to address critical scaling and memory bugs. Their issue trackers are highly active, indicating strong adoption but also growing pains associated with enterprise-grade usage.
*   **Maturing Open Challengers:** *OpenCode* and *Pi* demonstrate mature open-source development patterns. *Pi* is focusing deeply on SDK stability, XDG compliance, and secure workspace configurations, while *OpenCode* is rapidly merging massive PRs (like token heatmaps and browsers) to achieve feature parity with corporate offerings.
*   **Stabilization Phases:** *DeepSeek TUI* is in a strict feature-freeze, executing an acceptance matrix for its v0.9.0 release, which shows excellent engineering discipline. *Gemini CLI* is taking a deliberate pause on releases to fix critical authentication and tool-scaling bugs before pushing new features.

### 6. Trend Signals & Strategic Takeaways
1.  **The "Agentic Edge" is limited by Context Lifecycle Management:** The biggest blocker for AI CLI tools moving from "copilots" to "autonomous agents" is context window handling. Tools that solve OOM errors, prevent compaction loops, and master memory eviction (e.g., *Qwen Code's* microcompaction PRs) will define the next generation of reliable dev tools.
2.  **Terminal UI (TUI) Event Loops are a Weak Point:** As seen in *Codex* and *Copilot CLI*, single-threaded or poorly managed TUI event loops break when executing heavy multi-agent tool calls. Expect a standard migration toward isolated background threads for tool execution over the next quarter.
3.  **MCP (Model Context Protocol) Requires Hardening:** *Copilot CLI's* runaway server spawning issues signal that MCP needs architectural standardization. Developers looking to build enterprise-grade dev tools must implement robust connection lifecycle management and sandboxed MCP execution.
4.  **The Rise of CLI-to-Web Daemons:** The push by *Qwen Code* and *Codex* to expose local CLI capabilities via HTTP endpoints indicates that the CLI is evolving from a direct user interface into a local gateway, enabling web-UIs, IDEs, and automated CI/CD pipelines to leverage the agent seamlessly.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data snapshot as of 2026-06-07 | Source: [anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking (Most-Discussed PRs)

Below are the community's most-watched Pull Requests, representing the most active new Skill proposals and improvements.

| Rank | Skill / PR | Author | Created | Status |
|:---:|:---|:---|:---:|:---:|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** — Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Addresses a universal pain point: Claude-generated documents often suffer from subtle typographic flaws users rarely think to request fixes for. | PGTBoos | 2026-03-04 | OPEN |
| 2 | **[ODT (OpenDocument)](https://github.com/anthropics/skills/pull/486)** — Enables creation, template filling, parsing, and HTML conversion of `.odt`/`.ods` files. Targets the open-source/ISO-standard document format currently underserved by existing skills. Longest update tail (active through April). | GitHubNewbie0 | 2026-03-01 | OPEN |
| 3 | **[frontend-design (revision)](https://github.com/anthropics/skills/pull/210)** — Overhauls the existing frontend-design skill for improved clarity and single-conversation actionability. One of the oldest active PRs, indicating sustained interest in high-quality UI/UX generation. | justinwetch | 2026-01-05 | OPEN |
| 4 | **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** — Two "meta-skills" that evaluate other skills across five quality dimensions and surface security/trust issues. An early and ambitious self-referential contribution. | eovidiu | 2025-11-06 | OPEN |
| 5 | **[agent-creator](https://github.com/anthropics/skills/pull/1140)** — Meta-skill for generating task-specific agent sets. Bundles critical fixes to `evaluation.py` (multi-tool parallel call handling) and adds Windows support. | SyedaQurratAI | 2026-05-15 | OPEN |
| 6 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** — Comprehensive testing methodology skill: Testing Trophy model, AAA pattern, React component testing, edge cases, and CI guidance. | 4444J99 | 2026-03-22 | OPEN |
| 7 | **[AURELION suite](https://github.com/anthropics/skills/pull/444)** — Four-part cognitive framework (kernel, advisor, agent, memory) for structured professional knowledge management. The most ambitious "AI self-improvement" proposal. | Chase-Key | 2026-02-21 | OPEN |
| 8 | **[n8n-builder & n8n-debugger + faf-expert](https://github.com/anthropics/skills/pull/190)** — Production-tested community skills for n8n workflow automation (build from scratch and debug) and `.faf` persistent context files. | Wolfe-Jam | 2025-12-31 | OPEN |

**Notable repair PRs also attracting attention:** Three targeted fixes by **Lubrsy706** — [PDF case-sensitivity (#538)](https://github.com/anthropics/skills/pull/538), [YAML validation (#539)](https://github.com/anthropics/skills/pull/539), and [DOCX bookmark collision (#541)](https://github.com/anthropics/skills/pull/541) — show a healthy pattern of community-driven quality assurance on existing document skills.

---

## 2. Community Demand Trends

Distilled from the top Issues, the most-anticipated directions for the Skills ecosystem are:

| Trend | Signal | Key Issues |
|:---|:---|:---|
| **Organization & Enterprise Sharing** | Users want one-click skill distribution across teams instead of manual file transfers. | [#228](https://github.com/anthropics/skills/issues/228) (13 comments, 7 👍) |
| **Toolchain Reliability (Windows + Eval)** | `run_eval.py` is fundamentally broken on Windows and has a 0 % skill trigger rate, blocking skill authors from testing. | [#556](https://github.com/anthropics/skills/issues/556) (11 comments), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050) |
| **Security & Namespace Trust** | Community skills masquerading under the `anthropic/` namespace risk trust boundary abuse; users want verified provenance. | [#492](https://github.com/anthropics/skills/issues/492) (7 comments) |
| **MCP Integration** | Exposing Skills as MCP tools so they become callable APIs with typed parameters. | [#16](https://github.com/anthropics/skills/issues/16) (4 comments), [#1102](https://github.com/anthropics/skills/issues/1102) |
| **Deduplication & Packaging Clarity** | Overlapping plugins (`document-skills` vs `example-skills`) waste context window tokens. | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 8 👍) |
| **Multi-file Reference Loading** | Skills split across several reference files can't currently be loaded together; blocks complex skill authoring. | [#1220](https://github.com/anthropics/skills/issues/1220) |
| **Cross-Platform Support (Bedrock)** | Users on AWS Bedrock can't use skills at all — a growing enterprise blocker. | [#29](https://github.com/anthropics/skills/issues/29) |

---

## 3. High-Potential Pending Skills (Active PRs Close to Landing)

These open PRs are technically specific, scoped narrowly, and solve confirmed bugs — making them strong merge candidates in the near term:

| PR | What It Does | Why It's Ready |
|:---|:---|:---|
| **[#538 — PDF case-sensitivity fix](https://github.com/anthropics/skills/pull/538)** | Corrects 8 filename mismatches in `skills/pdf/SKILL.md`. | Pure bug fix, low risk, affects case-sensitive OSes. |
| **[#539 — YAML validation guard](https://github.com/anthropics/skills/pull/539)** | Pre-parse check for unquoted descriptions with `:` characters. | Prevents silent YAML truncation; isolated to validator. |
| **[#541 — DOCX bookmark collision fix](https://github.com/anthropics/skills/pull/541)** | Avoids `w:id` collisions between tracked changes and bookmarks in OOXML. | Fixes real document corruption; well-scoped. |
| **[#1050 — Windows subprocess fix](https://github.com/anthropics/skills/pull/1050)** | Uses `shutil.which("claude")` to resolve `claude.cmd` on Windows. | One-line fix, directly addresses [#556](https://github.com/anthropics/skills/issues/556) symptoms. |
| **[#363 — feature-dev TodoWrite fix](https://github.com/anthropics/skills/pull/363)** | Prevents Phase 6/7 skip in the feature-dev workflow. | Recently updated (June 3); fixes a confirmed logical bug. |
| **[#509 — CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** | Adds community health documentation (addresses [Issue #452](https://github.com/anthropics/skills/issues/452)). | Non-code, high-leverage for onboarding new contributors. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand at the Skills level is for robust document-generation quality (typography, ODT/PDF/DOCX correctness) and trustworthy, cross-platform skill-authoring tooling — users want Skills that produce polished outputs and a development pipeline that actually works on Windows, validates YAML, and shares Skills securely within organizations.**

---

# Claude Code Community Digest — 2026-06-07

## 1. Today's Highlights

Two back-to-back patch releases landed this week: **v2.1.166** introduces a highly requested `fallbackModel` chain and glob-pattern deny rules, while **v2.1.167** ships follow-up reliability fixes. On the issue tracker, a long-standing false-positive Usage Policy filter remains the top-voted open bug (👍 20), and the community is actively debating how to make autonomous "brain-mode" agents production-viable. Several new PRs target proxy/auth edge cases and documentation gaps around subagent tool restrictions.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| [**v2.1.166**](https://github.com/anthropics/claude-code/releases/tag/v2.1.166) | New `fallbackModel` setting (up to 3 models, tried in order on overload/unavailable); `--fallback-model` now works in interactive sessions. Glob pattern support (`"*"`) in deny rule `tool-name` position for blanket tool denial. |
| [**v2.1.167**](https://github.com/anthropics/claude-code/releases/tag/v2.1.167) | Bug fixes and reliability improvements (details sparse; likely hot-fixes on top of 166). |

---

## 3. Hot Issues

1. **[#60366](https://github.com/anthropics/claude-code/issues/60366)** — False-positive Usage Policy block on benign input ("hi"). 74 comments, 👍 20. The over-aggressive content filter remains the top complaint; no acknowledged fix yet.

2. **[#8660](https://github.com/anthropics/claude-code/issues/8660)** — VSCode diff/edit preview never renders on Windows. 48 comments, 👍 70. A persistent, reproducible regression dating back to October 2025 that still isn't resolved.

3. **[#56913](https://github.com/anthropics/claude-code/issues/56913)** — Proposal for tiered autonomous agents (Opus brains + Sonnet workers + persistent state). 25 comments. Sparks active discussion on turning Claude Code from a pair-programmer into a full orchestrator.

4. **[#63015](https://github.com/anthropics/claude-code/issues/63015)** — Auto-compact never fires despite statusline showing "100% context used". 22 comments, 👍 16. A regression in v2.1.153 affecting Max subscribers on 200K mode; sessions grow until crash.

5. **[#46767](https://github.com/anthropics/claude-code/issues/46767)** — Windows tool results silently dropped with "missing due to internal error". 9 comments, 👍 5. A regression since v2.1.101 that undermines trust in tool output on Windows.

6. **[#64729](https://github.com/anthropics/claude-code/issues/64729)** — Claude repeatedly re-discovers solved problems due to weak memory carry-over. 7 comments, 👍 1. Mirrors growing frustration around context persistence across sessions.

7. **[#31422](https://github.com/anthropics/claude-code/issues/31422)** — Cowork skills stored in ephemeral session dirs are silently deleted on cleanup. 6 comments, 👍 10. Data-loss risk for teams investing in skill-building during sessions.

8. **[#65809](https://github.com/anthropics/claude-code/issues/65809)** — Users should pay for results, not internal reasoning tokens. 4 comments. A pricing-philosophy FR that resonates with power users hitting high bills from extended thinking.

9. **[#65918](https://github.com/anthropics/claude-code/issues/65918)** — Experimental CreateTeam peer agents don't inherit workspace auto-approval for sandbox/file ops. 2 comments. Blocks multi-agent workflows behind unexpected permission walls.

10. **[#65839](https://github.com/anthropics/claude-code/issues/65839)** — Claude ignored memory/history, broke correct code, then validated with subagents using wrong criteria. 2 comments. A concrete case study of cascading agent errors when memory is skipped.

---

## 4. Key PR Progress

1. **[#65919](https://github.com/anthropics/claude-code/pull/65919)** — Documents `${CLAUDE_PLUGIN_ROOT}` limitation in subagents (unresolved paths). Helpful for plugin developers hitting silent failures.

2. **[#65916](https://github.com/anthropics/claude-code/pull/65916)** — Clarifies that `allowed-tools` is auto-approval only (not a capability boundary), vs `tools:` in subagent frontmatter which is hard restriction. Critical security semantics.

3. **[#65875](https://github.com/anthropics/claude-code/pull/65875)** — Forwards `ANTHROPIC_BASE_URL` to `agentic_review` child processes, fixing proxy/gateway auth (LiteLLM, Bifrost) for the advisor feature.

4. **[#65666](https://github.com/anthropics/claude-code/pull/65666)** *(closed)* — Attempted dev container build fix (DNS firewall + API key injection). Closed without merge; may be reworked.

5. **[#61584](https://github.com/anthropics/claude-code/pull/61584)** *(closed)* — Switches CI workflows from static `ANTHROPIC_API_KEY` to Workload Identity Federation (OIDC → short-lived token). Auth hardening for infra users.

*(Only 5 PRs were updated in the window; the remaining slots reflect the low PR volume.)*

---

## 5. Feature Request Trends

| Theme | Signal |
|-------|--------|
| **Autonomous / orchestrator mode** | Tiered agent architectures, persistent state, brain+worker patterns ([#56913](https://github.com/anthropics/claude-code/issues/56913)) |
| **Cross-session memory & learning** | Avoid re-solving known problems; persistent skill promotion ([#64729](https://github.com/anthropics/claude-code/issues/64729), [#31422](https://github.com/anthropics/claude-code/issues/31422)) |
| **LaTeX / math rendering in TUI** | Multiple duplicates ([#44479](https://github.com/anthropics/claude-code/issues/44479), [#63139](https://github.com/anthropics/claude-code/issues/63139)); high demand from academic users |
| **Session portability & backup** | Export/restore sessions across reinstalls ([#64721](https://github.com/anthropics/claude-code/issues/64721)) |
| **Cost transparency** | Shift billing from reasoning tokens to observable results ([#65809](https://github.com/anthropics/claude-code/issues/65809)) |
| **Plugin hygiene & management** | Bucket view, overlap detection, de-duplication ([#65437](https://github.com/anthropics/claude-code/issues/65437)) |
| **Cross-product context sharing** | Share project context between Claude.ai Chat and Claude Code ([#65686](https://github.com/anthropics/claude-code/issues/65686)) |

---

## 6. Developer Pain Points

- **Windows is a second-class citizen.** Diff preview broken since Oct 2025 ([#8660](https://github.com/anthropics/claude-code/issues/8660)), tool results silently dropped ([#46767](https://github.com/anthropics/claude-code/issues/46767)), and keyboard input dies after agent session resume ([#65587](https://github.com/anthropics/claude-code/issues/65587)). Collectively these erode confidence on the platform.

- **Context & memory fragility.** Auto-compact failures ([#63015](https://github.com/anthropics/claude-code/issues/63015)), ignored memory/history ([#65839](https://github.com/anthropics/claude-code/issues/65839), [#65795](https://github.com/anthropics/claude-code/issues/65795)), and ephemeral skill deletion ([#31422](https://github.com/anthropics/claude-code/issues/31422)) all point to fragile context lifecycle management that wastes developer time.

- **Overzealous safety filters.** The Usage Policy false positive ([#60366](https://github.com/anthropics/claude-code/issues/60366)) remains unresolved after three weeks and 74 comments, frustrating users who hit blocks on innocuous prompts.

- **Multi-agent permissions are inconsistent.** CreateTeam peer agents don't inherit auto-approval ([#65918](https://github.com/anthropics/claude-code/issues/65918)), and VS Code remote sessions silently soft-deny after a 600s timeout ([#65934](https://github.com/anthropics/claude-code/issues/65934)). The permission model needs clearer boundaries and better timeout handling.

- **Proxy / self-hosted auth gaps.** Missing `ANTHROPIC_BASE_URL` forwarding in child processes ([PR #65875](https://github.com/anthropics/claude-code/pull/65875)) and MCP stdio pipe drops after 10–20 min ([#37482](https://github.com/anthropics/claude-code/issues/37482)) indicate enterprise/proxy deployments still hit rough edges.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-07

## 1. Today's Highlights
The Codex engineering team shipped two rapid-fire Rust alpha releases (`0.138.0-alpha.5` and `0.138.0-alpha.6`) alongside a massive 20+ PR update cycle. Key internal efforts are currently focused on hardening the Remote Control protocol, refining Guardian safety policies for indirect exfiltration, and fixing a deadlock issue in the TUI's `/side` thread preparation. Meanwhile, the community continues to voice significant frustration over passive quota drain, context window bloat, and persistent Windows desktop instability.

## 2. Releases
*   **rust-v0.138.0-alpha.6** ([Release Tag](https://github.com/openai/codex/releases/tag/rust-v0.138.0-alpha.6))
    *   Incremental alpha release for v0.138.0.
*   **rust-v0.138.0-alpha.5** ([Release Tag](https://github.com/openai/codex/releases/tag/rust-v0.138.0-alpha.5))
    *   Previous day's incremental alpha release.

## 3. Hot Issues
1.  **[OPEN] Allow deletion of threads in the Codex app** ([#13018](https://github.com/openai/codex/issues/13018))
    *   *Why it matters:* A highly requested feature (103 👍) since Feb 2026. Users are frustrated by the lack of a UI option to delete threads, currently forcing them to manually dig through `~/.codex/archived_sessions/`.
2.  **[OPEN] Passive Quota Drain** ([#26600](https://github.com/openai/codex/issues/26600))
    *   *Why it matters:* Users report their usage quota decreasing even when the app is completely idle. This is causing widespread suspicion about background processes or session leaks consuming paid limits.
3.  **[OPEN] Customizable Status Line** ([#17827](https://github.com/openai/codex/issues/17827))
    *   *Why it matters:* Users want parity with competitor tools (like Claude Code) to display real-time token usage, context limits, and git branches in the TUI (59 👍).
4.  **[OPEN] CJK Context Duplication with Bedrock GPT-5.5** ([#26305](https://github.com/openai/codex/issues/26305))
    *   *Why it matters:* Streaming outputs in Chinese/CJK are being duplicated into session history. This causes runaway token growth and quickly crashes the session by exceeding the model's maximum context.
5.  **[OPEN] Configuration Pollution** ([#14601](https://github.com/openai/codex/issues/14601))
    *   *Why it matters:* Project-specific trust levels (`projects.xxxx.trusted_level`) are being dumped directly into the global `config.toml`. Users want this separated to keep their global configs clean (38 👍).
6.  **[OPEN] Windows Desktop App Sluggishness / Firewall Issues** ([#25709](https://github.com/openai/codex/issues/25709))
    *   *Why it matters:* Following a recent update, Windows users are experiencing severe performance degradation, potentially tied to Windows firewall interactions, making the app unusable.
7.  **[OPEN] Windows Sandbox Fails to Initialize** ([#17135](https://github.com/openai/codex/issues/17135))
    *   *Why it matters:* On Windows, Codex fails to send messages if the sandbox feature cannot be installed, completely blocking Enterprise users relying on sandboxed execution.
8.  **[OPEN] WSL Shell Poisoning in Desktop App** ([#25317](https://github.com/openai/codex/issues/25317))
    *   *Why it matters:* A regression where the live app-server holds onto deleted helper paths (`CODEX_HOME/tmp/arg0`) in WSL environments, breaking shell integration even after reboots.
9.  **[OPEN] App Freezing During Image Generation** ([#19936](https://github.com/openai/codex/issues/19936))
    *   *Why it matters:* Heavy image generation workflows (Imagen) cause the Desktop app to freeze, highlighting UI thread blocking during intensive tool-call sessions.
10. **[OPEN] Desktop Sidebar "No Chats" Bug** ([#26794](https://github.com/openai/codex/issues/26794))
    *   *Why it matters:* A `thread/list` API bug returns 0 threads when the current working directory is `$HOME`. Since this is the default state, many users log in to an empty sidebar.

## 4. Key PR Progress
1.  **Prepare side threads off the TUI event loop** ([PR #26754](https://github.com/openai/codex/pull/26754))
    *   Fixes a TUI deadlock occurring during `/side` operations when the main thread generates events too rapidly during a slow fork operation.
2.  **Enable standalone web search in code mode** ([PR #26719](https://github.com/openai/codex/pull/26719))
    *   Exposes `web.run` to code mode, allowing nested JavaScript calls to execute standalone web searches and return plaintext output directly to the agent.
3.  **Refine Guardian prompt for indirect exfiltration** ([PR #26287](https://github.com/openai/codex/pull/26287))
    *   Improves internal safety policies by reorganizing guidance around sensitive data, egress, and user authorization, while preserving trusted-user approvals.
4.  **Exclude external tool output from memories** ([PR #26821](https://github.com/openai/codex/pull/26821))
    *   Prevents standalone web-search results from polluting the agent's long-term memory context, optimizing memory relevance.
5.  **fix(remote-control): preserve enrollment on generic websocket 404s** ([PR #26741](https://github.com/openai/codex/pull/26741))
    *   Resolves a bug where generic HTTP 404s during WebSocket handshakes wiped valid remote-control enrollments, causing annoying repeated re-enrollments.
6.  **Support updatedToolOutput for PostToolUse** ([PR #20703](https://github.com/openai/codex/pull/20703))
    *   Empowers `PostToolUse` hooks to modify or redact the `tool_response` before it is fed back to the LLM on the next turn.
7.  **fix(tui): accept prompts with resume and fork** ([PR #26818](https://github.com/openai/codex/pull/26818))
    *   Fixes an argument parsing issue where running `codex fork --last "prompt"` failed because Clap misassigned the prompt as a session ID.
8.  **Handle Ctrl-C for non-TTY unified exec** ([PR #26734](https://github.com/openai/codex/pull/26734))
    *   Enables graceful interruption (`SIGINT`) for long-running background processes by allowing U+0003 writes to non-TTY sessions.
9.  **Harden Git workspace integration paths** ([PR #24138](https://github.com/openai/codex/pull/24138))
    *   Secures Git operations by isolating configurations and stopping the automatic approval of workspace-inspecting commands like `git status`.
10. **Reject PowerShell param blocks in safe-command parsing** ([PR #24092](https://github.com/openai/codex/pull/24092))
    *   Addresses Windows security/parsing by treating top-level PowerShell `param()` blocks as unsupported in the safe-command parser.

## 5. Feature Request Trends
*   **Granular Thread & Session Management:** Users want full control over session histories. Deleting threads ([#13018](https://github.com/openai/codex/issues/13018)) and saving ephemeral `/side` chats to session logs ([#20262](https://github.com/openai/codex/issues/20262)) are highly requested.
*   **Advanced Memory Architectures:** There is a strong push to evolve beyond the monolithic `memory_summary.md`. The community wants topic-based memory directories and explicit controls over when agents can write to memory ([#19758](https://github.com/openai/codex/issues/19758), [#19195](https://github.com/openai/codex/issues/19195)).
*   **Windows Shell Customization:** Developers are asking for the ability to bypass hardcoded PowerShell defaults in favor of Git Bash, improving command generation accuracy for bash-familiar models ([#16717](https://github.com/openai/codex/issues/16717)).
*   **Expanded Remote Control:** Users want the Remote Control feature to support general chats and projectless sessions, not just strictly bound projects ([#22947](https://github.com/openai/codex/issues/22947)).

## 6. Developer Pain Points
*   **Unpredictable Quota and Rate Limits:** The most severe current frustration is passive quota drain. Users are reporting limits dropping while idle ([#26600](https://github.com/openai/codex/issues/26600)) and abrupt changes to Pro tier allowances without clear explanation ([#26512](https://github.com/openai/codex/issues/26512), [#26306](https://github.com/openai/codex/issues/26306)).
*   **Context Window Bloat:** Heavy tool workflows (like web search or image generation) are rapidly inflating context windows with retained outputs, causing sluggish performance and frozen sessions ([#22091](https://github.com/openai/codex/issues/22091), [#26305](https://github.com/openai/codex/issues/26305)).
*   **Windows Platform Instability:** The Windows Desktop app continues to suffer from systemic issues, including sandbox initialization failures, crashes in `chrome.dll`, orphaned `git.exe` processes, and unresponsive UI states ([#17135](https://github.com/openai/codex/issues/17135), [#25376](https://github.com/openai/codex/issues/25376), [#17229](https://github.com/openai/codex/issues/17229)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

## 1. Today's Highlights
No new official releases shipped today, but the maintainers received a massive influx of community pull requests addressing critical security, authentication, and core rendering bugs. A major internal testing PR was also opened to officially promote Gemini 3.1 Flash Lite to GA and introduce support for the upcoming Gemini 3.5 Flash models. Meanwhile, community discussions remain heavily focused on improving agent orchestration, memory system reliability, and AST-aware developer tooling.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
*   **Generalist agent hangs indefinitely** ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)): A P1 bug where the CLI hangs forever when deferring to the generalist agent. The community is highly frustrated (8 👍), noting that the only current workaround is explicitly instructing the model to avoid sub-agents.
*   **Subagent falsely reports success on interruption** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)): A critical masking bug where subagents hit their `MAX_TURNS` limit but incorrectly report `status: "success"`. This makes it incredibly difficult for users to trust autonomous agent completion states.
*   **Security and logging flaws in Auto Memory** ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)): A P2 security concern highlighting that the Auto Memory background agent processes local transcripts before secrets can be redacted. 
*   **Auto Memory stuck in retry loops** ([#26522](https://github.com/google-gemini/gemini-cli/issues/22745)): A major reliability issue where the memory system continuously surfaces low-signal sessions because they are only marked as "processed" if successfully read. 
*   **Custom skills and sub-agents ignored** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)): Users are reporting that Gemini CLI rarely invokes custom skills (e.g., custom gradle/git wrappers) unless explicitly told to, undermining the intended extensibility of the platform.
*   **Shell execution gets stuck awaiting input** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)): A highly upvoted (3 👍) P1 bug where the terminal hangs on "Waiting input" even after a simple, completed CLI command.
*   **AST-aware codebase investigations** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)): An epic tracking the integration of AST-aware tools (like AST grep) to reduce token noise and improve method-level code reading for agents.
*   **400 errors with >128 tools** ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)): A scalability bottleneck where the CLI hits API limits (400 errors) due to poor scoping of enabled tools.
*   **Browser agent ignores settings overrides** ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)): A configuration bug where the browser sub-agent completely ignores `settings.json` parameters like `maxTurns`.
*   **Allow local agents to be backgrounded** ([#22741](https://github.com/google-gemini/gemini-cli/issues/22741)): A popular feature request (2 👍) asking for `Ctrl+B` support to send local sub-agents (like linters/builders) to the background to unblock the main CLI.

## 4. Key PR Progress
*   **Internal testing: Gemini 3.5 Flash & 3.1 Flash Lite GA** ([PR #27705](https://github.com/google-gemini/gemini-cli/pull/27705)): A massive internal PR replacing retired preview models with the stable 3.1 Flash Lite release and laying the groundwork for Gemini 3.5 Flash support.
*   **Fix Gateway Auth Regression** ([PR #27553](https://github.com/google-gemini/gemini-cli/pull/27553) & [PR #27558](https://github.com/google-gemini/gemini-cli/pull/27558)): Two community PRs fixing a P1 regression where custom `GOOGLE_GEMINI_BASE_URL` configurations caused authentication failures.
*   **Harden AI prompt against untrusted data** ([PR #27708](https://github.com/google-gemini/gemini-cli/pull/27708)): A security-focused fix ensuring CI/CD workflows use middle-man files rather than passing potentially unsafe data directly into AI prompts.
*   **Fix Vertex AI Gemini 3 Model Identification** ([PR #27375](https://github.com/google-gemini/gemini-cli/pull/27375)): Fixes a regression where Vertex AI users on Gemini 3.1 lost tool access because the model ID regex failed to parse full resource paths.
*   **Prevent `--resume` from breaking session browser** ([PR #27369](https://github.com/google-gemini/gemini-cli/pull/27369)): Resolves a UI bug where using the `--resume` flag permanently hid active chat sessions from the `/chat` list.
*   **Add ephemeral session mode** ([PR #27365](https://github.com/google-gemini/gemini-cli/pull/27365)): Introduces a `--ephemeral` flag for headless/automated tasks to prevent flooding local session logs.
*   **Fix ripgrep execution fallback** ([PR #27568](https://github.com/google-gemini/gemini-cli/pull/27568)): Ensures the CLI gracefully falls back to the legacy `GrepTool` if the optimized `ripgrep` tool is missing or fails in the target environment.
*   **Add image-grounding hints in function response** ([PR #27711](https://github.com/google-gemini/gemini-cli/pull/27711)): Aims to improve multimodal agent capabilities by injecting image-grounding hints into function call responses.
*   **Fix tmux false positive background detection** ([PR #27572](https://github.com/google-gemini/gemini-cli/pull/27572)): Fixes an annoying regression causing theme-switching and compatibility warnings when running Gemini CLI via `tmux`/`mosh`.
*   **Fix shell history backslash corruption** ([PR #27555](https://github.com/google-gemini/gemini-cli/pull/27555)): Resolves a bug where commands ending in a backslash (e.g., Windows paths) silently mangled the shell history upon the next launch.

## 5. Feature Request Trends
*   **AST-Aware File Operations**: A strong push from the community and maintainers to integrate AST-aware searching (like `tilth` or `glyph`) to give agents structural codebase context, reducing token waste and misaligned file reads.
*   **Agent Background Processing**: Users want the ability to run sub-agents asynchronously in the background or detach them entirely, moving towards a more multiplexed developer workflow.
*   **Destructive Behavior Guardrails**: Requests for built-in safety mechanisms to prevent the agent from autonomously executing destructive git commands (like `git reset --force`) or modifying production databases.
*   **Self-Hosted/Local Agent Ecosystem**: Continued interest in building and executing local "sprints" for sub-agents, allowing users to define highly specific, local agent behaviors.

## 6. Developer Pain Points
*   **Agent Orchestration Reliability**: Developers are experiencing frequent hangs, ignored configurations, and false "success" reports from sub-agents. This creates a frustrating loop where autonomous task delegation feels unreliable.
*   **Token and Tool Bloat**: The CLI struggles with tool limits, resulting in 400 errors when configurations exceed 128 tools. Users feel the agent needs smarter scoping rather than blunt-force tool injection.
*   **Memory System Brittleness**: The new Auto Memory features are causing friction. Developers report infinite retry loops on low-signal sessions, silent patch failures, and lingering security concerns over how unredacted secrets are handled in context.
*   **Terminal/UI Quirks**: Low-level terminal bugs—such as vim `cc` clearing issues, CJK character spacing problems, and shell execution hangs—continue to disrupt daily headless and interactive workflows across different OS environments.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-07

## 1. Today's Highlights

The Copilot CLI community is actively signaling growing pains around **v1.0.60**, with a high-severity WSL2 regression ([#3700](https://github.com/github/copilot-cli/issues/3700)) causing a ~215% CPU spin on the main thread while idle. At the same time, **Model Context Protocol (MCP)** integration continues to be a major friction point—runaway server spawning ([#3701](https://github.com/github/copilot-cli/issues/3701)), missing session persistence ([#3668](https://github/copilot-cli/issues/3668)), and OAuth fan-out issues ([#3706](https://github.com/github/copilot-cli/issues/3706)) suggest the MCP client layer needs architectural hardening. Community demand for **more model choice and affordability** ([#3707](https://github.com/github/copilot-cli/issues/3707), [#3705](https://github/copilot-cli/issues/3705), [#3282](https://github.com/github/copilot-cli/issues/3282)) is also intensifying.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#3700 — WSL2 idle CPU spin at ~215% (v1.0.60 regression)](https://github.com/github/copilot-cli/issues/3700) | High-severity: TUI freezes entirely on WSL2, blocking all workflows. A regression of #2208. 2 👍 |
| 2 | [#3701 — Runaway MCP server spawning loop](https://github.com/github/copilot-cli/issues/3701) | IDE lock-file watcher triggers re-init loops, spawning dozens of duplicate MCP processes. Closed but closely watched. |
| 3 | [#3706 — Remote MCP OAuth fan-out causes rate limits](https://github.com/github/copilot-cli/issues/3706) | A single Azure DevOps MCP server was initialized **79 times** in one session, hammering OAuth endpoints. |
| 4 | [#3547 — Background sub-agent hangs at `total_turns=0` with `gpt-5.5`](https://github.com/github/copilot-cli/issues/3547) | Multi-agent orchestration silently stalls on the latest flagship model; no error surfaced to the user. |
| 5 | [#3655 — Autopilot scope creep: agent self-answers questions & executes unrequested actions](https://github.com/github/copilot-cli/issues/3655) | Trust/safety concern: agents in autopilot mode ignore explicit "stop" and run unbounded commands. |
| 6 | [#3028 — MCP tool-level permissions configuration](https://github.com/github/copilot-cli/issues/3028) | Top feature request (4 👍): users need per-tool allowlists for MCP servers, similar to `trustedFolders`. |
| 7 | [#3282 — Multiple BYOK models in a single session](https://github.com/github/copilot-cli/issues/3282) | Currently requires restarting the CLI to switch BYOK models; users want hot-swappable model config. 3 👍 |
| 8 | [#3652 — 40–80s startup delay in WSL](https://github.com/github/copilot-cli/issues/3652) | `CopilotCLIChatSessionContentProvider.listSessions` bottleneck makes WSL nearly unusable for students on educational quotas. |
| 9 | [#3703 — Context compaction rewrites instructions, introducing errors](https://github.com/github/copilot-cli/issues/3703) | Long-session users hit silent instruction drift after compaction—agents forget style/rules mid-conversation. |
| 10 | [#3704 — Hebrew/Arabic RTL text displayed LTR](https://github.com/github/copilot-cli/issues/3704) | Accessibility gap: BiDi rendering not supported, affecting Hebrew and Arabic-speaking developers. |

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours.

---

## 5. Feature Request Trends

Several clear themes emerge from the latest issues:

- **Model choice & cost:** Requests for open-weight/lower-cost models ([#3707](https://github.com/github/copilot-cli/issues/3707)), broader model access on free tiers ([#3705](https://github.com/github/copilot-cli/issues/3705)), and multi-BYOK model hot-swapping ([#3282](https://github.com/github/copilot-cli/issues/3282)) all point to a community that wants flexible, affordable model selection.
- **MCP hardening:** Configurable per-tool permissions ([#3028](https://github.com/github/copilot-cli/issues/3028)), persistent session IDs ([#3668](https://github.com/github/copilot-cli/issues/3668)), and deduplicated server initialization ([#3706](https://github.com/github/copilot-cli/issues/3706)) are consistently requested.
- **Agent safety & control:** Scope-creep prevention in autopilot ([#3655](https://github.com/github/copilot-cli/issues/3655)), Escape-key UX for queued prompts ([#3692](https://github.com/github/copilot-cli/issues/3692)), and parallel-session permission isolation ([#3563](https://github.com/github/copilot-cli/issues/3563)) reflect demand for more predictable agent behavior.
- **UX polish:** Keyboard shortcut fixes ([#1437](https://github.com/github/copilot-cli/issues/1437)), command alias additions ([#3702](https://github.com/github/copilot-cli/issues/3702)), and BiDi/RTL support ([#3704](https://github.com/github/copilot-cli/issues/3704)) round out the request backlog.

---

## 6. Developer Pain Points

1. **Platform instability on WSL/Windows:** Issues [#3700](https://github.com/github/copilot-cli/issues/3700) (CPU spin), [#3652](https://github.com/github/copilot-cli/issues/3652) (startup delay), and [#1944](https://github.com/github/copilot-cli/issues/1944) (scroll regression) indicate Windows/WSL users are bearing the brunt of regressions.
2. **MCP reliability:** Three distinct MCP issues in 24h ([#3701](https://github.com/github/copilot-cli/issues/3701), [#3668](https://github.com/github/copilot-cli/issues/3668), [#3706](https://github.com/github/copilot-cli/issues/3706)) suggest the MCP client layer lacks production-grade connection lifecycle management.
3. **Silent failures in multi-agent workflows:** Agents that hang without error ([#3547](https://github.com/github/copilot-cli/issues/3547)), overwrite permissions silently ([#3563](https://github.com/github/copilot-cli/issues/3563)), or drift from instructions after compaction ([#3703](https://github.com/github/copilot-cli/issues/3703)) erode trust in agentic features.
4. **Cost anxiety:** Multiple issues ([#3707](https://github.com/github/copilot-cli/issues/3707), [#3705](https://github.com/github/copilot-cli/issues/3705)) explicitly call out pricing and model availability barriers, especially for students and open-source contributors.

---

*Data sourced from `github.com/github/copilot-cli` activity recorded on 2026-06-06 / 2026-06-07.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-07

## 1. Today's Highlights
Activity in the Kimi CLI ecosystem over the past 24 hours was relatively quiet, with no new version releases. However, a critical usability blocker was reported affecting Windows users attempting to utilize the `kimi web` interface. Additionally, repository maintainers updated a significant architectural Pull Request aimed at improving the agent's automated iteration capabilities, signaling that underlying workflow improvements are currently under active review.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Hot Issues
Due to a low-volume reporting day, only **1 issue** was created or updated in the past 24 hours. We are highlighting it below as it represents a critical functional blocker:

*   **#2435 [Bug] Kimi Work tab: "Daimon control WS not ready" + infinite reload at 99%**
    *   **Why it matters:** This is a critical usability bug for Windows developers using the `kimi web` UI. Users are completely locked out of the "Work" tab due to a WebSocket daemon initialization failure, resulting in an infinite loading loop. 
    *   **Community Reaction:** Issue is newly opened with no comments yet, but given the severity of UI hard-locking, it requires immediate triage.
    *   **Link:** [MoonshotAI/kimi-cli Issue #2435](https://github.com/MoonshotAI/kimi-cli/issues/2435)

*(Note: As only one issue was recorded in the 24-hour window, the standard Top-10 list is naturally constrained by today's data.)*

## 4. Key PR Progress
Repository maintainers updated **1 Pull Request** today. While there wasn't enough PR activity to provide a Top-10 list, the following updated PR represents a major architectural shift for the CLI agent:

*   **#1960 feat(soul): RalphFlow architecture with ephemeral context and convergence detection [CLOSED]**
    *   **Description:** This PR introduces the "RalphFlow" architecture, which aims to make the Kimi CLI agent more robust during multi-step automated workflows. It implements ephemeral context files to isolate flow iterations and introduces convergence detection to prevent the agent from falling into infinite loops.
    *   **Link:** [MoonshotAI/kimi-cli PR #1960](https://github.com/MoonshotAI/kimi-cli/pull/1960)

## 5. Feature Request Trends
*Insufficient data for today.* No new feature requests were surfaced in the last 24 hours. 

## 6. Developer Pain Points
Based on today's issue tracker, the primary developer pain point is:
*   **WebSocket Stability on Windows:** The bug report in Issue #2435 highlights ongoing friction with local daemon initialization on Windows environments. The failure of the daemon control WebSocket causes the `kimi web` interface to crash into an infinite reload loop, creating a frustrating developer experience where the UI becomes completely unresponsive at 99% load.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-07

## 1. Today's Highlights

No new releases were published today, but activity remains high with significant emerging bugs in the latest v1.16 build and strong momentum around feature parity with competitor tools. The community is heavily focused on **dynamic workflows**, **permission system reliability**, and **platform stability** (especially on Windows/WSL). Several substantial PRs—ranging from an integrated browser to a new token usage heatmap—show the project pushing toward a more full-featured desktop IDE experience.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

1. **[Sandboxing the agent](https://github.com/anomalyco/opencode/issues/2242)** (#2242, 52 comments, 51 👍)
   The top-voted issue in today's list. Users want the ability to restrict the agent's terminal commands to the current directory, similar to how `gemini-cli` and `codex-cli` use `seatbelt` on macOS. The lack of filesystem sandboxing is a significant security concern for enterprise adoption. No maintainer response yet on a roadmap commitment.

2. **[Auto-compaction loop and generation stoppage](https://github.com/anomalyco/opencode/issues/30680)** (#30680, 6 comments)
   A critical regression: OpenCode enters an infinite auto-compaction loop, burning tokens even in empty folders, and eventually stops generating responses altogether. This renders the tool unusable for affected users and needs urgent attention.

3. **[Permission dialog unresponsive](https://github.com/anomalyco/opencode/issues/27436)** (#27436, 14 comments, 9 👍)
   The "Allow once," "Allow always," and "Reject" buttons in the permission dialog are non-functional or get stuck in a loop, making sessions completely deadlocked. A second report (#30296) confirms the same behavior with both mouse and keyboard input.

4. **[`/undo` doesn't revert file changes](https://github.com/anomalyco/opencode/issues/5474)** (#5474, 27 comments, 12 👍)
   The `/undo` command only rolls back the AI conversation message but leaves file modifications in place—a significant UX bug that breaks expected undo semantics and can lead to unintended code states.

5. **[Dynamic workflows feature requests](https://github.com/anomalyco/opencode/issues/29059)** (#29059, 8 comments, 12 👍) & [#30308](https://github.com/anomalyco/opencode/issues/30308) (4 comments)
   Two issues requesting Claude Code–style project-local workflows for repeatable multi-step automation. Strong community demand for a `/workflow` command, showing users want structured, reproducible agent orchestration.

6. **[Regression: AWS Bedrock SSO broken in v1.16](https://github.com/anomalyco/opencode/issues/31147)** (#31147, 2 comments)
   A regression in the latest release: AWS Bedrock with SSO login fails with `"E is not a function"` during credential resolution. Blocks all AWS Bedrock users on SSO.

7. **[Windows AVX2 illegal instruction crash](https://github.com/anomalyco/opencode/issues/31155)** (#31155, 2 comments)
   OpenCode crashes on Windows machines with older CPUs lacking AVX2 support—even the "baseline" binary fails. This limits hardware compatibility and needs a proper CPU-feature detection/fallback path.

8. **[Windows TUI segfault after long sessions](https://github.com/anomalyco/opencode/issues/31144)** (#31144, 2 comments)
   Segfault inside Bun's `bun:ffi` runtime after ~116 minutes, specifically in `Zig::JSFFIFunction::trampoline`. This points to a memory management issue in the FFI bridge for long-lived sessions.

9. **[Segfault on NixOS+WSL](https://github.com/anomalyco/opencode/issues/26846)** (#26846, 5 comments, 8 👍)
   OpenCode immediately segfaults in NixOS running under WSL. The nix build also fails. Affects a niche but vocal part of the community.

10. **[Unified usage tracking via `/usage`](https://github.com/anomalyco/opencode/issues/9281)** (#9281, 10 comments, 26 👍)
    Highly upvoted feature request for viewing remaining plan usage/limits for authenticated providers (OpenAI, GitHub Copilot, Claude) directly inside the TUI. A corresponding PR (#9545) is in progress.

---

## 4. Key PR Progress

1. **[feat(app): integrated browser with AI agent control](https://github.com/anomalyco/opencode/pull/31143)** (#31143)
   Adds a full embedded browser controlled by the AI agent. Registers `BrowserProvider` for state management across the application. An ambitious move toward making OpenCode a self-contained development environment.

2. **[refactor(server): canonicalize service API](https://github.com/anomalyco/opencode/pull/31049)** (#31049)
   Promotes experimental server APIs to canonical names and reorganizes route groups, authorization, and session middleware. A foundational refactor that standardizes the service layer for future API stability.

3. **[feat(app): token activity heatmap](https://github.com/anomalyco/opencode/pull/31157)** (#31157)
   Adds a GitHub-style contribution heatmap to the home sidebar showing daily token usage over 280 days (40 weeks). Provides users with a visual overview of their AI usage patterns.

4. **[fix(tui): load root sessions safely in dialogs](https://github.com/anomalyco/opencode/pull/31132)** (#31132)
   Fixes the session picker bug (#16270) that only showed ~5 recent sessions despite having hundreds in the DB. Supersedes three prior PRs—addresses a long-standing data loading issue in TUI dialogs.

5. **[feat(opencode): dynamic workflows](https://github.com/anomalyco/opencode/pull/29789)** (#29789)
   Implements project-local workflows runnable via `/workflow <name> arg=value`, with a `/workflows` inspector. Directly addresses the highly requested Claude Code feature parity (#29059).

6. **[feat(opencode): local LAN provider discovery](https://github.com/anomalyco/opencode/pull/27554)** (#27554)
   Adds mDNS + network scanning discovery for local OpenAI-compatible servers in `/connect`. Automatically discovers models on the LAN—great for self-hosted/air-gapped setups.

7. **[feat(session): bi-directional cursor-based pagination](https://github.com/anomalyco/opencode/pull/8535)** (#8535)
   Adds cursor-based pagination for session messages across server, TUI, app, and HTTP API. Essential for long sessions with thousands of messages (addresses #6548).

8. **[feat(usage): unified usage tracking with auth refresh](https://github.com/anomalyco/opencode/pull/9545)** (#9545)
   Implements the `/usage` endpoint for Anthropic Claude, GitHub Copilot, and OpenAI ChatGPT. Exposes `Usage.Service` as the shared orchestration layer with SDK/OpenAPI support.

9. **[feat(tui): auto-accept mode for permission requests](https://github.com/anomalyco/opencode/pull/12633)** (#12633, by thdxr)
   Adds a toggleable auto-edit mode (shift+tab) that auto-accepts edit permissions while still prompting for others. A pragmatic solution to permission-dialog fatigue.

10. **[fix(opencode): DeepSeek pricing test fixture update](https://github.com/anomalyco/opencode/pull/31151)** (#31151)
    Corrects stale DeepSeek model pricing in test fixtures to match official rates from the models.dev API. A focused housekeeping fix to keep billing-related tests accurate.

---

## 5. Feature Request Trends

- **Dynamic/repeatable workflows**: The #1 requested feature category. Multiple issues (#29059, #30308) and a corresponding PR (#29789) show strong demand for Claude Code–style project-local workflow automation with configurable multi-step pipelines.

- **Permission UX overhaul**: Beyond just fixing the broken dialog, users want configurable auto-accept modes (#12633), sandboxed execution (#2242), and granular control over symlink/network access (#30788).

- **Usage visibility & cost control**: Unified usage tracking (#9281, #9545) with 26 👍 is one of the most requested features. Users want to see token consumption and plan limits inside the TUI without switching to provider dashboards.

- **Git GUI integration**: A built-in Git UI for staging, committing, and pushing (#26558) is gaining traction, reflecting user preference for staying within OpenCode rather than switching to a terminal or external tool.

- **Session management improvements**: Configurable session picker limits (#20754, #6138), paginated message loading (#6548, #8535), and two-line session titles (#22480) all point to users working with long-lived, complex sessions.

- **Plugin API extensibility**: Custom status bar widgets (#23539), multimodal image access (#20001), and Anthropic `defer_loading` passthrough (#23298) indicate a maturing plugin ecosystem with requests for richer extension hooks.

---

## 6. Developer Pain Points

- **Platform stability, especially on Windows**: Segfaults on NixOS+WSL (#26846), AVX2 crashes on older CPUs (#31155), long-session FFI crashes (#31144), and mapped network drive issues (#26649) make Windows/WSL a consistently painful experience.

- **Permission system reliability**: Multiple concurrent reports of the permission dialog being completely non-functional (#27436, #30296) represent a critical UX blocker that deadlocks sessions.

- **Regressions in new releases**: v1.16 breaks AWS Bedrock SSO (#31147), and the auto-compaction loop (#30680) can make the tool entirely unusable—suggesting insufficient pre-release testing across provider and platform combinations.

- **Undo semantics**: The `/undo` command not reverting file changes (#5474) violates user expectations and can lead to dangerous code states, especially for users who trust the undo operation to fully revert AI actions.

- **Long-session degradation**: Memory-heavy full history loading (#6548), limited session picker visibility (#16270), and compaction loops (#30680) all show the tool struggling with extended usage patterns common in real development workflows.

- **Typing/input latency**: ~500ms keystroke latency in the desktop app (#28162) due to contenteditable rendering overhead makes the tool feel sluggish despite low resource usage—a frustrating UX regression for daily use.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-07

Here is the technical digest for the `earendil-works/pi` mono-repository based on the last 24 hours of GitHub activity.

## 1. Today's Highlights
The community and core team are heavily focused on extensibility and security, highlighted by a major new Pull Request introducing an interactive approval system for workspace configuration directories. Additionally, several new issues were opened to refine the extension API, including durable context eviction and better RPC type exposure, showing a mature push toward stabilizing the developer SDK. Bug fixes also took center stage in the UI/UX domain, resolving keybinding clashes and TUI autocomplete behaviors.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
1. **[OPEN] [bug] shift+enter submits and does not create new line** ([#5188](https://github.com/earendil-works/pi/issues/5188))
   *Why it matters:* Users are experiencing frustrating keyboard remapping issues where `shift+enter` submits the prompt instead of creating a newline, breaking standard ergonomic expectations for advanced TUI users. (7 comments, 2 👍)
2. **[CLOSED] Add setting to prevent /model from overwriting the persistent default model** ([#3254](https://github.com/earendil-works/pi/issues/3254))
   *Why it matters:* Resolves a major pain point for team standardization. The newly proposed `persistModelSelection` setting stops temporary model switches from overwriting `settings.json`. (7 comments, 2 👍)
3. **[CLOSED] [last read] Support WebSocket transport in openai-responses** ([#3442](https://github.com/earendil-works/pi/issues/3442))
   *Why it matters:* Implements WebSocket transport support for the `openai-responses` provider, bringing latency and streaming improvements over the legacy HTTP/SSE approach. (7 comments)
4. **[CLOSED] [bug] Sessions hang on "working" when used with Anthropic subscription** ([#5291](https://github.com/earendil-works/pi/issues/5291))
   *Why it matters:* A critical connection hang affecting Anthropic Enterprise users was resolved, ensuring session stability for commercial customers. (4 comments, 1 👍)
5. **[CLOSED] A path towards opt-in XDG path layout** ([#5301](https://github.com/earendil-works/pi/issues/5301))
   *Why it matters:* After previous rejections, a concrete implementation path for centralizing directory policies via a `Paths` object has been accepted, pleasing Linux power users. (4 comments)
6. **[CLOSED] feat(coding-agent): add shell completion script generator** ([#4776](https://github.com/earendil-works/pi/issues/4776))
   *Why it matters:* Adding native `pi completion <bash|zsh|fish>` support drastically improves the CLI onboarding experience. (3 comments, 4 👍)
7. **[CLOSED] openai-responses provider ignores compat.supportsDeveloperRole** ([#5456](https://github.com/earendil-works/pi/issues/5456))
   *Why it matters:* Fixed a bug where reasoning models failed on providers that don't explicitly support the `developer` role, preventing provider API errors. (2 comments)
8. **[OPEN] [bug] Invalid models.json syntax crashes during migration** ([#5418](https://github.com/earendil-works/pi/issues/5418))
   *Why it matters:* A raw `JSON.parse` crash obscures the root cause. The fix will add proper error handling and point users to the exact syntax error in `models.json`. (2 comments)
9. **[OPEN] Add UI and validation metadata for spirit prompt arguments** ([#5459](https://github.com/earendil-works/pi/issues/5459))
   *Why it matters:* Proposes extending `&#123;&#123; ... &#125;&#125;` prompt argument placeholders to include UI and validation metadata, enabling KiOS to render dynamic, error-free forms. (1 comment)
10. **[CLOSED] pi.dev/packages renders stale npm packument readme** ([#5453](https://github.com/earendil-works/pi/issues/5453))
    *Why it matters:* Resolves a known npm quirk where the package registry showed outdated or wrong languages by switching the source of truth to the version tarball. (1 comment)

*(Note: Other notable closed issues included multiline prompt navigation fixes [#5454](https://github.com/earendil-works/pi/issues/5454) and extension API enhancements for `sendUserMessage` [#5448](https://github.com/earendil-works/pi/issues/5448).)*

## 4. Key PR Progress
1. **[CLOSED] feat(config): Approval system for workspaces** ([PR #5332](https://github.com/earendil-works/pi/pull/5332))
   *Details:* A massive security enhancement from `mitsuhiko` that requires `.pi` and `.pi.user` directories to be explicitly approved on first interactive load (or via `-f`), preventing malicious workspace config executions.
2. **[CLOSED] fix(tui): make Tab submit slash commands from autocomplete like Enter** ([PR #5450](https://github.com/earendil-works/pi/pull/5450))
   *Details:* Resolves a TUI UX annoyance where hitting `Tab` to accept an autocomplete suggestion left the command sitting in the input field without executing it.
3. **[CLOSED] Fix security issue in vitest** ([PR #5451](https://github.com/earendil-works/pi/pull/5451))
   *Details:* Addresses a known security vulnerability in the repository's `vitest` testing dependency. 
4. **[CLOSED] Codex/native subagents** ([PR #5440](https://github.com/earendil-works/pi/pull/5440) & [PR #5441](https://github.com/earendil-works/pi/pull/5441))
   *Details:* Continued iteration and merging of native sub-agent capabilities, likely refining how `pi` delegates and isolates coding tasks.
5. **[CLOSED] Codex/readme install rewrite** ([PR #5452](https://github.com/earendil-works/pi/pull/5452))
   *Details:* Refactored the project's README and installation instructions, presumably to make the onboarding process clearer for new developers.

*(Note: PRs [#5458](https://github.com/earendil-works/pi/pull/5458) was a minor upstream sync.)*

## 5. Feature Request Trends
* **Native Command Safety / Permission Controls:** A strong trend continues towards sandboxing and fine-grained control. Issues like #3254 (preventing model overwrites) and PR #5332 (interactive workspace approval) pair with requests for native pattern-based `allow/deny` rules for Bash commands (#4459).
* **Declarative & Reproducible Workspaces:** Teams are looking for "Nix-like" determinism. Requests like CREAM for Pi (#2908) highlight the community's desire to lock down models, extensions, and context files for consistent cross-team agent outputs.
* **Richer Extension APIs:** Extension developers are pushing for deeper client hooks. Recent requests include durable context eviction mid-session (#5461), overwriting prompt template expansions dynamically (#5448), and exporting RPC protocol types for UI integrations (#5455).

## 6. Developer Pain Points
* **Keyboard Mapping Clashes:** The TUI's input handling is a notable source of friction. Developers are struggling to remap standard multiline inputs (like `Shift+Enter`) without breaking the default submit behavior (#5188), or getting trapped in unexpected text navigation loops in multiline prompts (#5454).
* **Opaque JSON Errors:** Several users reported that syntax errors in local configuration files (`models.json`) fail silently or throw raw, unhelpful stack traces, making local debugging a guessing game (#5418).
* **Provider Compatibility quirks:** As users route Pi through various custom gateways and enterprise subscriptions (like Anthropic Enterprise), they are hitting frustrating edge-cases, such as ignored compatibility flags (#5456) and persistent "Working..." session hangs (#5291).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-07

## 1. Today's Highlights
A new nightly release (`v0.17.1`) was shipped today, focusing on CLI output fixes. The community saw a massive surge in daemon/web-shell (`qwen serve`) related PRs aimed at closing the feature gap with the TUI client, including new endpoints for session branching, rewinding, and settings management. Additionally, critical OOM and memory leak fixes took center stage as developers pushed patches to stabilize long-running sessions.

## 2. Releases
- **[v0.17.1-nightly.20260606](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.1-nightly.20260606.16c1d9a5a)**
  - **Changes:** Introduced a minor CLI fix to skip internal "thought" parts when copying output, ensuring cleaner clipboard behavior for users.

## 3. Hot Issues
1. **[BUG: Severe OOM with `qwen --resume` and Escape key broken (#4815)](https://github.com/QwenLM/qwen-code/issues/4815)**
   A critical memory leak causing out-of-memory crashes during session resumes. It severely impacts long-running sessions and is currently driving urgent fixes in the core event loop.
2. **[qwen serve: Mode B feature-priority roadmap (#4175)](https://github.com/QwenLM/qwen-code/issues/4175)**
   A heavily discussed (42 comments) umbrella issue tracking the stabilization and production-readiness of the `qwen serve` HTTP/SSE daemon mode. 
3. **[BUG: Compact mode tool merge causes full-screen flash (#4794)](https://github.com/QwenLM/qwen-code/issues/4794)**
   High-friction UI bug where merging tool groups in compact mode (`Ctrl+O`) causes aggressive full-screen terminal flashing due to array resizing in the Ink rendering engine.
4. **[BUG: Version v0.17.0 unable to complete tasks with Ollama (#4657)](https://github.com/QwenLM/qwen-code/issues/4657)
   Users leveraging local LLMs via Ollama are experiencing persistent timeout and task execution failures, highlighting friction in local model integrations.
5. **[BUG: Vim INSERT mode Esc key leak (#4675)](https://github.com/QwenLM/qwen-code/issues/4675)**
   A keybinding regression where pressing `Esc` to switch Vim modes inadvertently triggers Qwen Code's interrupt handler, breaking the workflow for Vim users.
6. **[BUG: Scrolling issues when using Cursor with tmux (#4725)](https://github.com/QwenLM/qwen-code/issues/4725)**
   Annoying TUI bug where attaching to a tmux session forces an aggressive auto-scroll, disrupting terminal UX.
7. **[modelProviders: shared baseUrl cannot be set once for multiple models (#4813)](https://github.com/QwenLM/qwen-code/issues/4813)**
   Configuration limitation requiring users to duplicate `baseUrl` for every model pointing to the same local/remote vLLM server, causing bloated config files.
8. **[Foreground sleep interception blocks legitimate rate-limit backoff (#4707)](https://github.com/QwenLM/qwen-code/issues/4707)**
   Core logic issue where the shell's anti-idling mechanism blocks legitimate `sleep` timers used for API rate-limit retries.
9. **[TUI mode sudden interruptions and context amnesia (#4740)](https://github.com/QwenLM/qwen-code/issues/4740)**
   Intermittent crashes in TUI mode causing the agent to lose context and forget previous instructions mid-task.
10. **[Qwen Code cannot access SMB shared folders on Windows (#4720)](https://github.com/QwenLM/qwen-code/issues/4720)**
    Platform-specific bug preventing the agent from reading network-mounted drives and incorrectly injecting spaces into absolute paths.

## 4. Key PR Progress
1. **[fix(core): prevent OOM by compacting API history and triggering under memory pressure (#4824)](https://github.com/QwenLM/qwen-code/pull/4824)**
   Directly addresses the critical OOM bug (#4815) by running microcompaction on goal-mode continuations and aggressively managing UI history arrays.
2. **[feat(serve): add POST /session/:id/branch for session forking (#4812)](https://github.com/QwenLM/qwen-code/pull/4812)**
   Introduces programmatic session forking via the daemon HTTP surface, enabling web-shell clients to branch conversations without history replay.
3. **[fix(core): isolate OpenAI SDK abort listener leak (#4810)](https://github.com/QwenLM/qwen-code/pull/4810)**
   Plugs a memory leak in the OpenAI SDK by wrapping AbortSignals in per-request child controllers, preventing listener accumulation during long chats.
4. **[feat(serve): add HTTP rewind endpoints (#4820)](https://github.com/QwenLM/qwen-code/pull/4820)**
   Implements `/rewind` endpoints for the daemon, allowing web-shell and SDK clients to revert conversation states and files to previous turns.
5. **[fix: coerce non-string tool params to strings for self-hosted LLMs (#4793)](https://github.com/QwenLM/qwen-code/pull/4793)**
   Fixes a compatibility layer issue where self-hosted models (LMStudio, vLLM) returning non-string tool params caused internal schema validation crashes.
6. **[feat(serve): add hooks diagnostic HTTP/ACP surface (#4822)](https://github.com/QwenLM/qwen-code/pull/4822)**
   Expands daemon capabilities by adding read-only endpoints to query workspace and session hooks, improving remote debugging.
7. **[feat(serve): add /settings slash command for web-shell (#4816)](https://github.com/QwenLM/qwen-code/pull/4816)**
   Bridges the feature gap by bringing the full-stack `/settings` command (API, SDK, React hooks) to the web-shell environment.
8. **[fix(clipboard): use platform-native tools for image paste on Linux (#4647)](https://github.com/QwenLM/qwen-code/pull/4647)**
   Resolves a long-standing issue for WSL2+Wayland users by replacing buggy native modules with standard Linux tools like `wl-paste`.
9. **[feat(cli): add /fork background-agent command (#4780)](https://github.com/QwenLM/qwen-code/pull/4780)**
   Introduces a powerful new paradigm: spawning isolated background agents that inherit full conversation context to execute directives without blocking the main UI.
10. **[feat(cli): enable /directory command in ACP mode (#4826)](https://github.com/QwenLM/qwen-code/pull/4826)**
    Refactors the `/directory` command to return `MessageActionReturn`, finally enabling web-shell users to manage workspace directories.

## 5. Feature Request Trends
- **Daemon/Web-Shell Parity:** There is a massive push toward making `qwen serve` (Mode B) production-ready. The community wants full feature parity with the interactive TUI, specifically requesting programmatic access for session management, rewinding, and settings.
- **Smart Model Routing:** Users are requesting "local help" features—automatic routing of simple tasks to local models (like Ollama) and complex tasks to heavy API models to optimize cost and speed.
- **Declarative Agent Definitions:** Inspired by Claude Code, developers want to define custom agents via Markdown + YAML frontmatter files rather than hardcoding them in TypeScript.

## 6. Developer Pain Points
- **Memory Management in Long Sessions:** Developers are increasingly frustrated by severe OOM errors and garbage collection spikes during multi-hour coding sessions, particularly when using `--resume`. 
- **Terminal UI/UX Friction:** Keybinding leaks (especially with `Esc` and `Ctrl+C`), terminal screen flashing in compact mode, and rendering choppyness during bulk file edits are significantly hurting the interactive coding experience.
- **Self-Hosted/Local Model Instability:** Users utilizing local models via Ollama, vLLM, or LMStudio face frequent schema validation errors, timeouts, and agent loop deadlocks compared to those using first-party APIs.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the community digest for 2026-06-07 based on the provided GitHub data.

# DeepSeek TUI (CodeWhale) Community Digest - 2026-06-07

## 1. Today's Highlights
The CodeWhale (DeepSeek TUI) repository is experiencing a massive surge in v0.9.0 release preparation, with maintainers heavily focused on stabilization, acceptance testing, and documentation. A flurry of merged PRs today formally closed out crucial release gates—including startup checks, UI cutlines, and rollback protocols—signaling that the v0.9.0 tag is imminent. Concurrently, the community is actively submitting quality-of-life improvements, ranging from a modular TUI command refactor to critical fixes for international keyboard layouts.

## 2. Releases
No new official versions were released in the last 24 hours. The repository remains in a pre-release stabilization phase for **v0.9.0**.

## 3. Hot Issues
1. **[v0.9.0 Release Acceptance Matrix](https://github.com/Hmbown/CodeWhale/issues/2729)**: The most active issue (15 comments). Maintainers are defining strict release criteria (stability, UI, rollback) to ensure the massive v0.9.0 update doesn't ship with regressions.
2. **[VSCode Agent View Adaptation](https://github.com/Hmbown/CodeWhale/issues/2580)**: A highly requested feature (9 comments) asking for native integration with VSCode's new Agent View, moving beyond terminal-only interactions. 
3. **[v0.9.0 Open PR Harvest](https://github.com/Hmbown/CodeWhale/issues/2722)**: With 6 comments, maintainers are triaging long-lived branches to decide what makes it into v0.9.0, ensuring agents don't duplicate existing open work.
4. **[Command Dispatch Refactor](https://github.com/Hmbown/CodeWhale/issues/2791)**: A 5-comment architectural discussion proposing a shift from monolithic command matching to a modular strategy pattern to improve maintainability.
5. **[WhaleFlow Starlark Authoring & Compile Gate](https://github.com/Hmbown/CodeWhale/issues/2670)**: Closed after successful implementation. Ensures models can author workflows safely using a restricted Starlark dialect.
6. **[Agent Telemetry and Token Visibility](https://github.com/Hmbown/CodeWhale/issues/2666)**: Highlights a critical pain point where agents blindly consume resources during long tasks without visibility into token budgets or context window pressure.
7. **[Sidebar Truncation Bug](https://github.com/Hmbown/CodeWhale/issues/2694)**: Requests detail popovers for the Work/Tasks/Agents sidebar panels, as long labels are currently truncated beyond recognition.
8. **[Abnormal Stops During Analysis](https://github.com/Hmbown/CodeWhale/issues/2847)**: A user bug report regarding sudden "Stream read error" crashes during active coding sessions, indicating potential API provider communication instability.
9. **[TUI Status Bar MCP Count Error](https://github.com/Hmbown/CodeWhale/issues/2787)**: Bug report where the TUI incorrectly counts MCPs when both global and local `mcp.json` files are present.
10. **[French AZERTY Keyboard Conflict](https://github.com/Hmbown/CodeWhale/issues/2863)**: A highly specific but impactful UX bug where typing `@` via `AltGr` falsely triggers the `Alt+@` sidebar shortcut.

## 4. Key PR Progress
1. **[v0.9.0 Stewardship Integration](https://github.com/Hmbown/CodeWhale/pull/2762)**: The main integration branch for the release. Open and actively tracking release actions without triggering premature publishing.
2. **[Multi-Tab System Core](https://github.com/Hmbown/CodeWhale/pull/2864)**: Closed/Merged. Adds the narrow core persistence layer for the upcoming multi-tab TUI feature.
3. **[AltGr Composer Fix](https://github.com/Hmbown/CodeWhale/pull/2867)**: Closed/Merged. Fixes a major pain point for European users by preventing `AltGr` from swallowing special characters (`@`, `#`, etc.) in the TUI composer.
4. **[Modernize Toward Latest Claude Code](https://github.com/Hmbown/CodeWhale/pull/2865)**: Open. A comprehensive update aligning DeepSeek TUI's behavior, lifecycle, and UI with the latest Claude Code feature set.
5. **[Ghost-Text Follow-Up Prompts](https://github.com/Hmbown/CodeWhale/pull/2781)**: Open. Implements inline ghost-text prompt suggestions using a lightweight API call, mirroring modern AI IDE behaviors.
6. **[Runtime API: Git Status Metadata](https://github.com/Hmbown/CodeWhale/pull/2862)**: Closed/Merged. Exposes Git `head` and `dirty` data to the runtime API to support the new VSCode Agent View.
7. **[Command Group Refactor](https://github.com/Hmbown/CodeWhale/pull/2851)**: Open. First phase of the strategy pattern refactor, moving command behaviors closer to their specific groups rather than using shared files.
8. **[v0.9 Core Gate Evidence](https://github.com/Hmbown/CodeWhale/pull/2857)**: Closed/Merged. Documents the passing of core `fmt`, `check`, `clippy`, and `test` gates for the release.
9. **[v0.9 Credit & Rollback Gates](https://github.com/Hmbown/CodeWhale/pull/2856)**: Closed/Merged. Adds rollback instructions and contributor credits to the changelog.
10. **[Session Save & Undo Runtime API](https://github.com/Hmbown/CodeWhale/pull/2808)**: Open. Adds new endpoints to bring GUI/TUI parity for session snapshots and undo/retry actions.

## 5. Feature Request Trends
* **IDE & GUI Integration**: A massive trend in the issues. Users are actively requesting native integrations with VS Code ([#2580](https://github.com/Hmbown/CodeWhale/issues/2580), [#1584](https://github.com/Hmbown/CodeWhale/issues/1584)), indicating that while the TUI is powerful, developers deeply desire a graphical interface tethered to their existing IDEs.
* **Workflow Engine (WhaleFlow) Enhancements**: Heavy ongoing requests for a typed IR, deterministic replays, and Starlark authoring support. The community wants reliable, auditable, and automated multi-agent workflows.
* **TUI Interface Polish**: Requests for a redesigned home screen ([#2713](https://github.com/Hmbown/CodeWhale/issues/2713)), better transcript collapsing ([#2692](https://github.com/Hmbown/CodeWhale/issues/2692)), and improved sidebar UX show a demand for a cleaner, less cluttered terminal experience.

## 6. Developer Pain Points
* **Keybinding and Layout Conflicts**: International users are experiencing frustrating composer bugs, particularly with `AltGr` on European layouts ([#2863](https://github.com/Hmbown/CodeWhale/issues/2863)). The TUI needs better discrimination between layout modifiers and app shortcuts.
* **Agent Context Blindness**: Developers note that agents lack real-time visibility into token limits and resource usage during complex tasks ([#2666](https://github.com/Hmbown/CodeWhale/issues/2666)), causing agents to unexpectedly fail or halt.
* **UI Truncation Overload**: As the tool gets more complex, the TUI sidebar is becoming overcrowded. Users are frustrated that heavily truncated task/agent names make the dashboard unreadable ([#2694](https://github.com/Hmbown/CodeWhale/issues/2694)).

</details>