# AI CLI Tools Community Digest 2026-04-18

> Generated: 2026-04-17 22:09 UTC | Tools covered: 7

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

# AI Developer Tools Ecosystem Cross-Tool Report
*Date: 2026-04-18*

## 1. Ecosystem Overview
The AI CLI tooling landscape is undergoing rapid maturation, shifting from simple prompt-based assistants to complex, multi-agent systems capable of autonomous execution. Major players—including Anthropic, OpenAI, Google, GitHub, and emerging open-source competitors—are aggressively iterating on their command-line and desktop interfaces to capture the developer workflow. The current development cycle is heavily defined by the transition toward native runtime binaries for performance, the integration of deep sandboxing and permission controls, and a shared struggle to manage context window constraints and compute costs. Meanwhile, friction between enterprise subscription models and actual usage limits is emerging as a critical trust barrier across the board.

## 2. Activity Comparison
Activity across the ecosystem is high, with tools releasing multiple versions per day and managing substantial community feedback.

| Tool | Issues Highlighted | PRs Noted | Release Status (2026-04-18) |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 5 | **v2.1.113** (Transitioned to native binary spawn; added network domain sandboxing) |
| **OpenAI Codex** | 10 | 10 | **v0.122.0-alpha.5 to alpha.8** (Aggressive Rust alpha sprinting for core runtime) |
| **Gemini CLI** | 10 | 10 | **v0.38.2** (Targeted patch release for v0.38.x branch stabilization) |
| **GitHub Copilot CLI** | 10 | 1 | **v1.0.32** (Added auto model selection and usage limit warnings) |
| **Kimi Code CLI** | 10 | 10 | **v1.36.0** (Raised max agent steps to 500; added Opus 4.7 adaptive thinking) |
| **OpenCode** | 10 | 10 | **v1.4.8 to v1.4.10** (Shipped 3 releases: LLM Gateway support, critical crash/regression fixes) |
| **Qwen Code** | 10 | 10 | **v0.15.0-preview.0** (Shipped complete ACP hooks, compact mode UX) |

## 3. Shared Feature Directions
Analysis of the community trackers reveals several unified engineering pushes across the ecosystem:

*   **Multi-Agent & Sub-Agent Orchestration:** The transition from single prompts to delegated agent workflows is universal. *Claude Code* is battling teammate permission handshakes and IDE MCP passthrough; *Codex* is building a subagent mailbox system; *Kimi CLI* raised its max steps to 500 to accommodate longer chains; and *Qwen Code* is actively pursuing subagent parity with Claude.
*   **Context Compaction & Token Efficiency:** Managing the context window is a top priority. *Codex* merged a prefix compaction PR; *OpenCode* is working on OpenAI native compaction; *Copilot CLI* added manual `/compact`; and *Qwen Code* shipped compact mode UX improvements.
*   **Windows / WSL2 as a First-Class Citizen:** Cross-platform reliability is failing specifically at the Windows/WSL2 layer. Users are reporting critical friction in *Claude Code* (UNC path issues), *Codex* (slow `/mnt/c` writes), *Gemini CLI* (UI scrambling over SSH), *OpenCode* (WASM-SIMD parsing errors), and *Kimi CLI* (login stalls).
*   **Advanced Sandboxing & Permissions:** As agents execute code, permission granularity is tightening. *Claude Code* introduced `deniedDomains` for network control, while *Codex* established a canonical `PermissionProfile` abstraction for file system access.
*   **Billing, Quotas, and Entitlement Confusion:** Trust is eroding due to opaque billing. *Claude Code* has a 1,450+ comment thread on Max usage limits; *Copilot CLI* is bleeding "premium requests" per tool call; and *Qwen Code* is in uproar over the abrupt shutdown of its free OAuth tier.

## 4. Differentiation Analysis

*   **Architectural Approaches:** *Claude Code* and *Codex* are heavily investing in core runtime performance, with Claude moving to per-platform native binaries and Codex executing a massive Rust refactor. Conversely, *Gemini CLI* and *OpenCode* are focusing on system-level observability, AST-aware mapping, and OTEL integration.
*   **Target Audiences:** *Copilot CLI* and *Codex* are heavily focused on bridging the Desktop IDE experience with the CLI, prioritizing remote development containers. *Kimi CLI* and *Qwen Code* are differentiating by acting as highly customizable, multi-model gateways (e.g., integrating Opus, Gemini, and local models like Gemma).
*   **Enterprise vs. Individual:** *Qwen Code* and *OpenCode* are uniquely focused on "bring-your-own-endpoint" architectures (supporting Databricks, local VLLM, OpenAI-compatible APIs), catering to developers who want to bypass vendor metering. *Claude* and *Copilot* are tied deeply to their respective proprietary subscription ecosystems.

## 5. Community Momentum & Maturity

*   **Rapid Iterators (Codex, OpenCode, Kimi):** *OpenAI Codex* (4 alphas in 24h), *OpenCode* (3 stable releases in 24h), and *Kimi CLI* are in a state of aggressive feature sprinting, shipping major architectural refactors rapidly, though introducing regressions at a high rate.
*   **Mature Stabilizers (Claude Code, Copilot CLI):** These tools have massive, highly engaged user bases. Their issues are more systemic and complex (e.g., agent safety invariant violations in Claude, fundamental billing misalignments in Copilot). PR velocity appears slower because changes require deeper architectural caution.
*   **Ecosystem Disruptors (Qwen Code, Gemini CLI):** *Qwen Code* has massive community momentum but is currently overshadowed by a self-inflicted billing/policy crisis. *Gemini CLI* has a highly active open-source base driving foundational features like RTL/BiDi support and local model integration.

## 6. Trend Signals & Strategic Takeaways
For technical decision-makers, current community signals suggest the following industry shifts:

1.  **Agents are Fragile:** The industry push toward "agentic coding" is outpacing runtime stability. Infinite loops (Gemini, Kimi), runaway token spend (Kimi, Copilot), and silent crashes (OpenCode, Claude) indicate that unattended autonomous coding is not yet ready for mission-critical production. Require strict step/budget limits in CI/CD implementations.
2.  **The Premium Request Pricing Model is Broken:** The shift from flat-rate to "premium request" consumption is actively harming developer trust. A single agent task triggers cascading billing events. Engineering managers must monitor token consumption dashboards closely, as current vendor metering logic is highly erratic.
3.  **Model-Agnostic Shells are the Future:** The rise of tools like *OpenCode*, *Kimi*, and *Qwen* highlights a developer preference for decoupling the agent framework from the LLM provider. Architecting your internal tooling to allow hot-swapping models (e.g., routing to Claude for planning, and a local model for refactoring) will be key to cost control.
4.  **Beware the WSL2 Trap:** If your engineering organization operates on Windows via WSL2, delay adoption of current-generation AI CLIs for production use. File system mounting bugs, WASM compilation errors, and UI rendering failures represent a severe daily friction cost.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** `github.com/anthropics/skills` (as of 2026-04-18)

## 1. Top Skills Ranking
Based on community engagement, update frequency, and functional impact, here are the most-discussed Skills (Pull Requests) currently in the ecosystem:

*   **[#514 Add document-typography skill](https://github.com/anthropics/skills/pull/514)** | `Status: OPEN`
    *Functionality:* Prevents typographic issues in AI-generated documents, specifically targeting orphan word wraps, widow paragraphs, and numbering misalignment.
    *Highlights:* Addresses a widespread "invisible" quality issue in LLM outputs. Highly anticipated because users rarely prompt for good typography, making proactive intervention highly valuable.
*   **[#83 Add skill-quality-analyzer and skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | `Status: OPEN`
    *Functionality:* Introduces two "meta-skills" to the marketplace. One evaluates skills across five structural/documentation dimensions, while the other scans for security vulnerabilities.
    *Highlights:* A highly ambitious PR that provides the community with necessary quality-control tools for the Skills ecosystem itself. Active since late 2025.
*   **[#210 Improve frontend-design skill clarity](https://github.com/anthropics/skills/pull/210)** | `Status: OPEN`
    *Functionality:* Revises the existing frontend-design skill to ensure instructions are strictly actionable by Claude within a single context window.
    *Highlights:* Focuses on token efficiency and reducing LLM ambiguity, acknowledging that verbose skills often degrade performance.
*   **[#486 Add ODT skill — OpenDocument creation](https://github.com/anthropics/skills/pull/486)** | `Status: OPEN`
    *Functionality:* Enables Claude to create, fill, read, and convert OpenDocument Format files (.odt, .ods) to HTML.
    *Highlights:* Frequently updated; fills a major gap for open-source and enterprise document standard support. 
*   **[#806 feat: add sensory skill — macOS automation](https://github.com/anthropics/skills/pull/806)** | `Status: OPEN`
    *Functionality:* Replaces screenshot-based computer vision with native AppleScript (`osascript`) automation for macOS.
    *Highlights:* Introduces a two-tier permission system (standard vs. System Events UI automation), offering a significantly faster and more reliable approach to local OS control.
*   **[#374 Add x402 BSV auth + micropayment skill](https://github.com/anthropics/skills/pull/374)** | `Status: OPEN`
    *Functionality:* Allows Claude to discover, authenticate, and execute micropayments for external AI services using natural language.
    *Highlights:* A novel integration blending agentic workflows with web monetization protocols.
*   **[#362 Fix skill-creator UTF-8 panic](https://github.com/anthropics/skills/pull/362)** | `Status: OPEN`
    *Functionality:* Replaces character-based length checks with UTF-8 byte-length validation to prevent the CLI from crashing during multi-byte character processing.
    *Highlights:* A critical stability patch for international users and non-English workflows.

## 2. Community Demand Trends
Analyzing the most active Issues reveals clear bottlenecks and requested directions for the ecosystem:

*   **Robust Enterprise & Team Sharing:** The highest-voted issue ([#228 - Enable org-wide skill sharing](https://github.com/anthropics/skills/issues/228)) demands direct sharing links and organizational libraries, moving away from manual `.skill` file sharing via Slack/Teams.
*   **Security & Namespace Integrity:** Users are flagging critical trust-boundary vulnerabilities ([#492](https://github.com/anthropics/skills/issues/492)). There is a strong demand for namespace separation to prevent community skills from masquerading as official `anthropic/` skills.
*   **Core Infrastructure & Pipeline Fixes:** Users are experiencing a 0% trigger rate in evaluation scripts ([#556](https://github.com/anthropics/skills/issues/556)) and duplicate context bloat from overlapping plugins ([#189](https://github.com/anthropics/skills/issues/189)). The community urgently wants reliable skill-triggering logic and deduplicated context windows.
*   **Cross-Platform / API Parity:** Users are actively requesting ways to use custom skills via AWS Bedrock ([#29](https://github.com/anthropics/skills/issues/29)) and asking for Skills to be exposed as standard MCP tools ([#16](https://github.com/anthropics/skills/issues/16)).

## 3. High-Potential Pending Skills
These open PRs show active development and strong functional value, making them likely candidates for an upcoming merge:

*   **[PR #541 - Fix DOCX tracked change w:id collision](https://github.com/anthropics/skills/pull/541):** Solves a silent data corruption issue in OOXML files when using tracked changes alongside bookmarks. 
*   **[PR #521 - Add record-knowledge skill](https://github.com/anthropics/skills/pull/521):** Introduces persistent context memory (`.claude/knowledge/entries/`), allowing Claude to bypass context-amnesia between sessions.
*   **[PR #509 - Add CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509):** A vital repository health update aimed at raising the repo's community health score from 25% and standardizing open-source contributions.
*   **[PR #539 - Fix YAML special characters parsing](https://github.com/anthropics/skills/pull/539):** Adds pre-parse validation to catch unquoted YAML fields, preventing silent failures during skill creation.

## 4. Skills Ecosystem Insight
The community is currently most concentrated on solving **context and infrastructure reliability**—specifically demanding persistent cross-session memory, seamless org-wide sharing, and strict trust boundaries for the skill marketplace.

---

# Claude Code Community Digest — 2026-04-18

## 1. Today's Highlights

Claude Code shipped **v2.1.113**, a significant release that transitions the CLI from bundled JavaScript to spawning a native per-platform binary, and introduces a new `sandbox.network.deniedDomains` setting for finer-grained network access control. The issue tracker continues to be dominated by **Cowork stability problems on Windows**, post-**Opus 4.7** model integration bugs, and the long-running Max subscription usage limits thread, which just crossed **1,450 comments**. Several new issues also highlight **MCP tool exposure and token overhead** as growing concerns for power users.

---

## 2. Releases

### [v2.1.113](https://github.com/anthropics/claude-code/releases/tag/v2.1.113)
- **Native binary spawn**: The CLI now spawns a platform-specific native Claude Code binary (via per-platform optional dependencies) instead of running bundled JavaScript. This should improve startup latency and runtime performance across macOS, Linux, and Windows.
- **`sandbox.network.deniedDomains` setting**: A new sandbox configuration that allows developers to block specific domains even when a broader `allowedDomains` wildcard (e.g., `*`) would otherwise permit them. Essential for locked-down enterprise environments.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#16157 — Instantly hitting usage limits with Max subscription](https://github.com/anthropics/claude-code/issues/16157) | The single most-commented issue (1,450 comments, 681 👍). Max plan users report hitting opaque usage caps almost immediately, eroding trust in the subscription model. No official fix yet. |
| 2 | [#49865 — Team leader crashes with "getAppState is not a function" on teammate permission request](https://github.com/anthropics/claude-code/issues/49865) | A hard crash in the multi-agent "team leader" workflow when a teammate requests tool approval. Closed quickly, suggesting a fast-triage or hotfix, but highlights fragility in agent-to-agent permission handshakes. |
| 3 | [#49268 — Thinking summaries missing on Opus 4.7](https://github.com/anthropics/claude-code/issues/49268) | Opus 4.7 changed the default `display` behavior for extended thinking. Claude Code's harness doesn't set `display: "summarized"`, causing thinking blocks to disappear entirely. A concrete API contract mismatch. |
| 4 | [#49689 — Opus 4.6 removed from model picker after Opus 4.7 release](https://github.com/anthropics/claude-code/issues/49689) | Users who relied on Opus 4.6 lost access overnight. Raises concerns about model deprecation cadence and backward compatibility. |
| 5 | [#49313 — Cmd+Delete removes all prompt lines instead of current line](https://github.com/anthropics/claude-code/issues/49313) | A high-impact TUI editing bug on macOS/VS Code (36 👍). Multi-line prompt editing is a core workflow, and accidental full deletion is destructive. |
| 6 | [#47180 — Cowork scheduled tasks ignore "Always allow" permissions](https://github.com/anthropics/claude-code/issues/47180) | Cowork's scheduled task runner re-prompts for previously approved folder/tool permissions on every invocation, defeating the purpose of "Always allow." Critical for automation reliability. |
| 7 | [#45390 — 1M context incorrectly requires extra usage on Max plan](https://github.com/anthropics/claude-code/issues/45390) | Max plan includes 1M context, but the CLI's model-selection gating incorrectly rejects it and demands `/extra-usage` enrollment. A billing/entitlement logic bug. |
| 8 | [#43147 — Edits during plan mode before user approval](https://github.com/anthropics/claude-code/issues/43147) | Plan mode is supposed to be read-only, but Claude Code proceeds to edit files before the user approves the plan. Violates a core safety invariant. |
| 9 | [#50120 — Expose IDE MCP tools as agent-callable](https://github.com/anthropics/claude-code/issues/50120) | IDE integrations (e.g., `claudecode.nvim`) expose tools like `openFile` and `getOpenEditors` via WebSocket MCP, but the CLI only surfaces `getDiagnostics` to agents. A request for full MCP tool passthrough. |
| 10 | [#48277 — Sustained 502 from mcp-proxy.anthropic.com (Gmail MCP)](https://github.com/anthropics/claude-code/issues/48277) | Anthropic's hosted Gmail MCP proxy has been returning 502s for extended periods. Highlights reliability concerns with hosted MCP infrastructure. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#39148 — feat: add preserve-session plugin](https://github.com/anthropics/claude-code/pull/39148) | Introduces a plugin that assigns path-independent UUIDs to projects, preserving session history when directories are renamed, moved, or copied. Addresses a long-standing UX pain point. |
| 2 | [#49825 — Fix devcontainer firewall init script duplicate IPs](https://github.com/anthropics/claude-code/pull/49825) | Devcontainer startup was failing due to duplicate IP entries in the firewall init script. Fix adds `sort -u` deduplication for resilience. |
| 3 | [#49767 — docs: Warp marketplace plugin setup](https://github.com/anthropics/claude-code/pull/49767) | Documents setup steps for the Warp terminal marketplace plugin, including `jq` dependency and end-to-end verification for live session notifications. |
| 4 | [#49596 — refactor: extract shared GitHub API client](https://github.com/anthropics/claude-code/pull/49596) | Extracts a shared `github-api.ts` utility with tests, reducing duplication across the codebase. A maintainability win. |
| 5 | [#1 — Create SECURITY.md](https://github.com/anthropics/claude-code/pull/1) | The repo's inaugural PR, adding a security policy document. Closed/resolved, but notable as the foundational security disclosure channel. |

> *Note: Only 5 PRs were updated in the last 24 hours. The remaining PR pipeline appears quiet, likely ahead of the v2.1.113 release merge window.*

---

## 5. Feature Request Trends

1. **Automatic light/dark theme switching** ([#2990](https://github.com/anthropics/claude-code/issues/2990), 237 👍) — The top-voted feature request. Users want Claude Code to follow system-level theme changes, instead of requiring manual `/theme` switches.

2. **Full IDE MCP tool passthrough** ([#50120](https://github.com/anthropics/claude-code/issues/50120)) — Developers want all IDE-exposed MCP tools (`openFile`, `getOpenEditors`, `getCurrentSelection`, `saveDocument`) to be agent-callable, not just `getDiagnostics`.

3. **Per-session MCP server profiles** ([#50189](https://github.com/anthropics/claude-code/issues/50189)) — Power users with 10+ MCP servers are incurring ~2,500+ tokens of overhead per message. They request the ability to scope MCP tool loading to specific sessions or task types.

4. **Persistent project-level session names** ([#33029](https://github.com/anthropics/claude-code/issues/33029)) — `/rename` resets on `/clear`. Users want project-level session name persistence.

5. **Expose effort level to statusline/JSONL** ([#50175](https://github.com/anthropics/claude-code/issues/50175)) — The `/effort` setting (standard/high/x-high/max) is invisible to external tooling. Developers want it exposed in statusline JSON and session JSONL for orchestration workflows.

---

## 6. Developer Pain Points

- **Cowork instability on Windows** — Multiple issues ([#50156](https://github.com/anthropics/claude-code/issues/50156), [#50168](https://github.com/anthropics/claude-code/issues/50168), [#50187](https://github.com/anthropics/claude-code/issues/50187)) report Cowork workspace failures, silent errors, and SIGSEGV crashes on Windows, signaling the platform remains a second-class citizen for multi-agent workflows.

- **Opus 4.7 migration friction** — The model transition broke thinking summaries ([#49268](https://github.com/anthropics/claude-code/issues/49268)), removed Opus 4.6 from the picker ([#49689](https://github.com/anthropics/claude-code/issues/49689)), and introduced stream idle timeouts ([#49619](https://github.com/anthropics/claude-code/issues/49619)). Users are bearing integration costs with each model bump.

- **Usage limits and entitlement confusion** — The 1,450-comment [#16157](https://github.com/anthropics/claude-code/issues/16157) mega-thread, combined with [#45390](https://github.com/anthropics/claude-code/issues/45390) (1M context gating) and [#49616](https://github.com/anthropics/claude-code/issues/49616) (early limit resets), shows the Max plan's value proposition remains unclear and the enforcement logic is buggy.

- **Windows UNC path / mapped drive issues** — Persistent conversations fail ([#34125](https://github.com/anthropics/claude-code/issues/34125), [#50170](https://github.com/anthropics/claude-code/issues/50170)) because `fs.realpath` resolves to UNC paths, breaking project-key hashing. A systemic issue for enterprise Windows users.

- **Plan mode safety violations** — [#43147](https://github.com/anthropics/claude-code/issues/43147) and [#49653](https://github.com/anthropics/claude-code/issues/49653) show that plan mode can either make edits before approval or reject valid auto-approval on Max plans. The permission/plan-mode interaction layer needs hardening.

---

*Data sourced from [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) on 2026-04-18.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-18

## 1. Today's Highlights
The Codex team shipped four rapid-fire Rust alpha releases (`0.122.0-alpha.5` through `alpha.8`), signaling aggressive iteration on the core runtime. On the issue tracker, Desktop App stability is under the microscope: users report 8-second message send delays, severe memory pressure from MCP stacks, and broken file hyperlinks. Meanwhile, the open PR queue is packed with foundational sandbox refactors, a new subagent mailbox system, and prefix compaction that promises to cut context waste.

---

## 2. Releases

| Version | Notes |
|---|---|
| **rust-v0.122.0-alpha.8** | Latest in the alpha train; no detailed changelog published yet. |
| **rust-v0.122.0-alpha.7** | Preceding alpha build. |
| **rust-v0.122.0-alpha.6** | Preceding alpha build. |
| **rust-v0.122.0-alpha.5** | Preceding alpha build. |

> The cadence (four alphas in 24 h) suggests active sprinting toward a stable `0.122.0`. Expect consolidated release notes once it lands.

---

## 3. Hot Issues

1. **[#10450] Remote Development in Codex Desktop App** — *OPEN, 141 comments, 👍 564*  
   The single most-upvoted issue in the window. Users want the Desktop App to connect to remote workspaces (SSH/containers) the way VS Code Remote does. Community reaction is strongly positive; it's seen as a must-have for real-world adoption.  
   🔗 https://github.com/openai/codex/issues/10450

2. **[#12764] CLI 401 Unauthorized** — *CLOSED, 96 comments*  
   A persistent auth failure hitting the ChatGPT backend for `codex-cli 0.104.0`. While now closed, the high comment count shows how many users were bitten by token/session expiry edge cases.  
   🔗 https://github.com/openai/codex/issues/12764

3. **[#11325] Manual /compact command in Codex App** — *CLOSED, 56 comments, 👍 146*  
   CLI users can compact context on demand; Desktop App users cannot. This gap frustrates power users managing long sessions. Closed, implying it's now addressed.  
   🔗 https://github.com/openai/codex/issues/11325

4. **[#17615] Azure "I cannot assist" false positive** — *CLOSED, 28 comments*  
   Safety-check regression on Azure-hosted GPT-5.2 rejecting benign requests. Likely a policy-layer misconfiguration; closure suggests a fix has been deployed.  
   🔗 https://github.com/openai/codex/issues/17615

5. **[#17313] New context progress bar is a downgrade** — *CLOSED, 19 comments, 👍 44*  
   TUI users feel the replacement indicator is less informative than the prior design. Closed—potentially reverted or redesigned.  
   🔗 https://github.com/openai/codex/issues/17313

6. **[#18258] macOS 'Computer Use plugin unavailable'** — *OPEN, 18 comments, 👍 24*  
   Bundled plugin files exist on disk, but the app still reports the plugin as missing. A config workaround (`features.apps = true`) has surfaced in the issue body.  
   🔗 https://github.com/openai/codex/issues/18258

7. **[#8758] Image generation from Codex** — *CLOSED, 18 comments, 👍 50*  
   Long-standing request to let Codex produce visual assets (diagrams, banners) inline. Closed status hints at upcoming or shipped support.  
   🔗 https://github.com/openai/codex/issues/8758

8. **[#17649] VS Code extension file links broken** — *OPEN, 12 comments*  
   Clicking any file reference in the extension chat does nothing—regardless of format. A hard blocker for navigation-heavy workflows.  
   🔗 https://github.com/openai/codex/issues/17649

9. **[#13762] WSL mode writes to Windows `/mnt/c`** — *OPEN, 12 comments*  
   Desktop App uses the Windows `CODEX_HOME` inside WSL, storing worktrees on the slow `/mnt/c` filesystem instead of the native Linux FS. Critical for Windows + WSL developers.  
   🔗 https://github.com/openai/codex/issues/13762

10. **[#18333] Desktop starts full MCP stack per subagent** — *OPEN, 7 comments*  
    Every new session or subagent spins up a complete MCP server stack, causing memory bloat and UI jank. A high-impact architectural issue.  
    🔗 https://github.com/openai/codex/issues/18333

---

## 4. Key PR Progress

| PR | Title | Why It Matters |
|---|---|---|
| [#18401](https://github.com/openai/codex/pull/18401) | **Support multiple managed environments** | Refactors `EnvironmentManager` to own keyed environments, laying groundwork for remote/container dev (#10450). |
| [#18400](https://github.com/openai/codex/pull/18400) | **Subagent parent mailbox messaging** | Adds `send_parent_message` tool and interrupt/enqueue delivery modes—critical for multi-agent orchestration. |
| [#17286](https://github.com/openai/codex/pull/17286) | **Prefix Compaction** | Pre-warms compaction in the background so context is trimmed earlier without blocking the user; should materially reduce token waste. |
| [#18274](https://github.com/openai/codex/pull/18274) + [#18275](https://github.com/openai/codex/pull/18275) | **Canonical FS permissions & semantic intersection** | Establishes `PermissionProfile` as the stable abstraction for sandbox rules, enabling safer approval flows. |
| [#18391](https://github.com/openai/codex/pull/18391) | **Emit hooks for apply_patch edits** | Fixes a blind spot where the primary edit path silently skipped `PreToolUse`/`PostToolUse` hooks—essential for policy enforcement. |
| [#18296](https://github.com/openai/codex/pull/18296) | **Fix fs sandbox helper for apply_patch** | Passes split filesystem policy through patch contexts and keeps legacy Landlock compatibility. |
| [#18399](https://github.com/openai/codex/pull/18399) | **App-server ThreadStore adapter** | Unifies thread metadata writes behind `ThreadStore`, enabling cleaner state management across Desktop and CLI. |
| [#17752](https://github.com/openai/codex/pull/17752) | **Marketplace remove command & shared logic** | Deduplicates plugin removal code between CLI and app-server RPC paths. |
| [#17836](https://github.com/openai/codex/pull/17836) | **tmux-aware OSC 9 notifications** | Wraps terminal notifications in tmux DCS passthrough so they actually reach users inside multiplexers. |
| [#18392](https://github.com/openai/codex/pull/18392) | **Fix hang on turn/interrupt** | Resolves a deadlock where `turn/interrupt` RPC would hang if the target turn had already completed. |

---

## 5. Feature Request Trends

- **Remote & container development** — Overwhelming demand (#10450, 564 👍) for SSH/remote workspace support in the Desktop App, aligning with the multi-environment PR work.
- ** richer media generation** — Image/visual asset creation inside Codex (#8758) remains a popular ask for project scaffolding.
- **Manual context control** — Users want `/compact` and similar context-management commands exposed in the Desktop App (#11325), not just the CLI.
- **Plugin & marketplace maturity** — Requests for inline plugin toggling, reliable plugin loading, and cross-repo plugin sources reflect a maturing plugin ecosystem.
- **Sandbox granularity** — Multiple issues request finer control over sandbox ACLs (Metal/GPU access, network policies, Landlock compatibility).

---

## 6. Developer Pain Points

1. **Sandbox regressions on every release** — `apply_patch` failures, Landlock incompatibilities (#18069), and incorrect ACLs (#14585) keep recurring as the team refactors the permission model.
2. **Windows/WSL friction** — From worktree placement on `/mnt/c` (#13762) to orphaned `dotnet.exe` processes (#15413) to broken file links (#17649), Windows users face a disproportionate number of bugs.
3. **Desktop App performance** — 8-second message delays (#18264), MCP stack memory pressure (#18333), and shell freezes (#16374) indicate the Electron/Tauri app needs optimization.
4. **Auth & rate-limit confusion** — 401 errors (#12764) and false Cloudflare/WAF rate limits (#17880) suggest the session-based auth flow for non-API users is fragile.
5. **Token efficiency regressions** — Users report 60%+ token usage increases on identical prompts after upgrading CLI versions (#18345), eroding cost-effectiveness.

---

*Digest generated from public GitHub activity on `openai/codex` for 2026-04-18.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for 2026-04-18.

# Gemini CLI Community Digest: 2026-04-18

## 1. Today's Highlights
Gemini CLI issued a patch release, **v0.38.2**, aimed at stabilizing the v0.38.x release branch. Alongside this patch, the community and core maintainers are heavily focused on architectural improvements, specifically addressing agent reliability issues like infinite loops, memory routing, and AST-aware codebase mapping. Additionally, several ambitious community contributions are pushing the client toward better enterprise readiness, including RTL/BiDi language support, local model management via `gemini gemma`, and expanded Vertex AI region routing.

## 2. Releases
*   **[v0.38.2](https://github.com/google-gemini/gemini-cli/compare/v0.38.1...v0.38.2)**: A targeted patch release cherry-picking specific fixes into the `v0.38.1` branch to resolve recent regressions and improve overall CLI stability. 

## 3. Hot Issues
1.  **[#25323 Startup delay on RipGrep failure](https://github.com/google-gemini/gemini-cli/issues/25323)**: The CLI hangs for 2+ minutes at startup if it fails to download RipGrep. Maintainers are discussing failing fast and potentially bundling the dependency.
2.  **[#25603 403 PERMISSION_DENIED on Google One AI Ultra](https://github.com/google-gemini/gemini-cli/issues/25603)**: Users with active AI Ultra subscriptions are hitting persistent 403 errors on the new v0.38.2 release using Google Auth. 
3.  **[#22745 Assess AST-aware file reads](https://github.com/google-gemini/gemini-cli/issues/22745)**: A major epic investigating Abstract Syntax Tree (AST) tools. This aims to reduce token noise and improve codebase mapping precision for the core agent.
4.  **[#25602 Infinite loop during Google Search](https://github.com/google-gemini/gemini-cli/issues/25602)**: The agent enters an endless thinking state when executing a Google Search tool call.
5.  **[#25166 Shell commands stuck "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)**: The UI permanently hangs after simple CLI commands finish executing, incorrectly assuming the command is awaiting user input.
6.  **[#24916 Repeated permission prompts](https://github.com/google-gemini/gemini-cli/issues/24916)**: Users report that setting file access to "allow for all future sessions" occasionally fails to persist, causing continuous permission prompts.
7.  **[#22819 Global vs. Project Memory Routing](https://github.com/google-gemini/gemini-cli/issues/22819)**: A highly requested architectural workstream to correctly separate user-wide preferences (global `~/.gemini/`) from codebase-specific instructions (project `.gemini/`).
8.  **[#23571 Agent creates tmp scripts randomly](https://github.com/google-gemini/gemini-cli/issues/23571)**: When restricted from direct file editing, the model litters workspace directories with temporary shell scripts, creating cleanup overhead.
9.  **[#20977 ACP AgentThoughtChunk never emitted](https://github.com/google-gemini/gemini-cli/issues/20977)**: In experimental ACP mode, streaming updates completely drop `AgentThoughtChunk` events, breaking integrations that rely on agent thinking data.
10. **[#24202 Scrambled UI over SSH](https://github.com/google-gemini/gemini-cli/issues/24202)**: Running the CLI over an SSH connection results in severe text scrambling, rendering the tool unusable. A helper function to detect SSH environments is currently being scoped.

## 4. Key PR Progress
1.  **[#25601 feat(config): split memoryManager flag](https://github.com/google-gemini/gemini-cli/pull/25601)**: Refactors the memory flag to separate the `MemoryManagerAgent` from the background skill-extraction service, allowing independent control.
2.  **[#25498 feat(cli): add streamlined gemini gemma setup](https://github.com/google-gemini/gemini-cli/pull/25498)**: Introduces the `gemini gemma` command to easily set up local models, alongside `gemini gemma logs` to inspect the LiteRT server.
3.  **[#25243 feat: implement universal RTL/BiDi support](https://github.com/google-gemini/gemini-cli/pull/25243)**: Brings comprehensive Right-to-Left (RTL) language support to the CLI terminal UI while preserving ANSI styling escape codes.
4.  **[#25138 fix(core): resolve nested plan directory duplication](https://github.com/google-gemini/gemini-cli/pull/25138)**: Fixes an issue where Plan Mode created redundant nested directories by centralizing path resolution logic.
5.  **[#25513 feat(vertex): add settings for Vertex AI request routing](https://github.com/google-gemini/gemini-cli/pull/25513)**: Adds `settings.json` support for Vertex AI request routing headers, enabling advanced traffic configuration.
6.  **[#25362 feat(vertex): add vertexLocation config](https://github.com/google-gemini/gemini-cli/pull/25362)**: Allows users to override the default `us-central1` Vertex AI region, fixing 404 errors when trying to access region-locked preview models.
7.  **[#25461 fix(core): throttle shell text output UI updates](https://github.com/google-gemini/gemini-cli/pull/25461)**: Throttles React re-renders during fast shell output to prevent severe UI lag during verbose build commands.
8.  **[#25066 fix(core): silently handle EPERM](https://github.com/google-gemini/gemini-cli/pull/25066)**: Prevents the CLI from crashing when attempting to read workspace folders with restricted OS permissions (like `~/.Trash` on macOS).
9.  **[#21439 feat(cli): add active checkpoint tag fallback](https://github.com/google-gemini/gemini-cli/pull/21439)**: Enhances `/chat save` by automatically reusing the most recent checkpoint tag, smoothing out complex conversational workflows.
10. **[#21873 fix(core): hang when subagent calls tool](https://github.com/google-gemini/gemini-cli/pull/21873)**: Resolves tool name collisions and execution hangs when subagents attempt to call MCP tools.

## 5. Feature Request Trends
*   **Advanced Context & AST:** High demand for AST-aware file reading and codebase mapping. Developers want the agent to understand code boundaries intrinsically rather than relying on text-matching.
*   **Proactive Memory Management:** Strong interest in the agent proactively remembering user preferences, tool choices, and project conventions without manual injection into prompts.
*   **Local Model Integration:** Significant momentum behind the `gemini gemma` initiative, showing a clear desire for seamless switching between cloud models and local inference servers.
*   **Enterprise Cloud Configuration:** Increased requests for granular Vertex AI controls, specifically regarding region routing, custom endpoints, and billing classifications.

## 6. Developer Pain Points
*   **Agent Infinite Loops:** Developers are frequently frustrated by the agent looping endlessly on web searches or when subagent tools are rejected.
*   **Terminal Rendering Bugs:** UI bugs remain a major annoyance, particularly scrolling jumps in long chats, broken table rendering during streaming, and full UI corruption when operating over SSH.
*   **Authentication and Permissions:** Users report inconsistent behavior in permission persistence, and recently, active Google subscriptions failing to authorize the newly patched CLI API endpoints.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-18

## 1. Today's Highlights
Version 1.0.32 was released yesterday, introducing an `auto` model selection option, short session ID prefixes for resuming sessions, weekly usage limit warnings, and a new debug flag. Meanwhile, the community remains highly active around model availability and rate-limiting issues, with several trending bugs rapidly accumulating upvotes and comments in the past 24 hours.

## 2. Releases

### [v1.0.32](https://github.com/github/copilot-cli/releases/tag/v1.0.32) (2026-04-17)
- **Auto Model Selection:** Select `auto` as your model to let Copilot automatically pick the best available model for each session.
- **Short Session IDs:** Allow short session ID prefixes (7+ hex chars) with `--resume` and `/resume` instead of requiring the full ID.
- **Usage Warnings:** Show warnings when approaching 75% and 90% of your weekly usage limit.
- **Feedback Fallback:** `/feedback` saves the bundle to `TEMP` when the working directory is not writable.
- **Debug Info:** Add `--print-debug-info` flag to display version, terminal capabilities, and environment variables.

### [v1.0.32-1](https://github.com/github/copilot-cli/releases/tag/v1.0.32-1) (2026-04-17)
- **Fixed:** `/feedback` saves the bundle to `TEMP` when the working directory is not writable.

### [v1.0.32-0](https://github.com/github/copilot-cli/releases/tag/v1.0.32-0) (2026-04-17)
- **Added:** `auto` model selection, `--print-debug-info` flag, usage limit warnings at 75%/90%, and support attachment improvements.

---

## 3. Hot Issues

1. **[#2591](https://github.com/github/copilot-cli/issues/2591) — Single session consumes 80-100 premium requests** (27 comments, 👍12)  
   A single agent invocation triggers cascading premium request consumption per tool call/thinking step. Users report exhausting weekly quotas in one session. High community frustration; signals a critical billing fairness issue.

2. **[#1703](https://github.com/github/copilot-cli/issues/1703) — Org-enabled models (e.g., Gemini 3.1 Pro) missing from CLI** (21 comments, 👍33)  
   The CLI shows a reduced model list compared to VS Code Copilot under the same org/account. The most-upvoted model issue; affects enterprise users relying on multi-model strategies.

3. **[#2725](https://github.com/github/copilot-cli/issues/2725) — GPT-5.4 model picker hides "Extra High" effort level** (20 comments, 👍15)  
   The `/model` picker only shows Low/Medium/High for GPT-5.4, even though `xhigh` works when manually specified. Inconsistency between UI and runtime behavior.

4. **[#2336](https://github.com/github/copilot-cli/issues/2336) — Strange rate limit message after moderate task** (16 comments, 👍4)  
   Users hit unexpected rate limits on moderate tasks. The error messaging is confusing, and the relationship to the new weekly limits is unclear.

5. **[#575](https://github.com/github/copilot-cli/issues/575) — Bash execution environment hangs on macOS** (32 comments, 👍1, CLOSED)  
   All shell commands hang indefinitely on macOS M1 Max. While closed, it remains a reference point for environment-specific execution hangs.

6. **[#1750](https://github.com/github/copilot-cli/issues/1750) — XDG_CONFIG_HOME uses dot-prefixed subdirectory** (7 comments, 👍11, CLOSED)  
   Config stored at `$XDG_CONFIG_HOME/.copilot/` violates XDG convention. Closed but related to ongoing open issues [#1347](https://github.com/github/copilot-cli/issues/1347) and [#1954](https://github.com/github/copilot-cli/issues/1954).

7. **[#1347](https://github.com/github/copilot-cli/issues/1347) — XDG_CONFIG_HOME not supported correctly** (7 comments, 👍12)  
   Config directory resolution fails when `XDG_CONFIG_HOME` is set. Affects Linux power users and those with custom home directory layouts.

8. **[#1838](https://github.com/github/copilot-cli/issues/1838) — CLI hangs in Nix/direnv environments** (6 comments, 👍9)  
   Subprocess I/O deadlock when launched from Nix flake-based dev environments. The bash tool times out on every command. Impacts the Nix community significantly.

9. **[#2789](https://github.com/github/copilot-cli/issues/2789) — Remaining usage displayed incorrectly** (5 comments, 👍3, CLOSED)  
   After upgrading to v1.0.31, usage display shows errors/negative values. Directly relates to the new usage warnings in v1.0.32.

10. **[#2416](https://github.com/github/copilot-cli/issues/2416) — Sub-agents see truncated skill lists** (4 comments, 👍1, CLOSED)  
    Custom agents only see 29 truncated skills due to `<available_skills>` token truncation, while the default agent sees all. Limits plugin extensibility.

---

## 4. Key PR Progress

1. **[#2800](https://github.com/github/copilot-cli/pull/2800) — Add initial devcontainer configuration** (OPEN)  
   Introduces a devcontainer setup, lowering the barrier for contributors. The only PR updated in the last 24 hours; community contribution.

*(Note: Only 1 PR was updated in the past 24 hours. The remaining top issues above had no accompanying PRs with recent activity.)*

---

## 5. Feature Request Trends

| Trend | Signal Issues | Demand Level |
|---|---|---|
| **Full org-enabled model parity with VS Code** | [#1703](https://github.com/github/copilot-cli/issues/1703) (👍33), [#2725](https://github.com/github/copilot-cli/issues/2725) (👍15) | 🔴 High |
| **Better text editing (Ctrl+Backspace, selection)** | [#1160](https://github.com/github/copilot-cli/issues/1160) | 🟡 Medium |
| **Review mode for PRs/changes** | [#1529](https://github.com/github/copilot-cli/issues/1529) | 🟡 Medium |
| **ACP: MCP config passed at session creation** | [#1255](https://github.com/github/copilot-cli/issues/1255), [#1040](https://github.com/github/copilot-cli/issues/1040) (👍6) | 🟡 Medium |
| **Proper XDG Base Directory compliance** | [#1347](https://github.com/github/copilot-cli/issues/1347) (👍12), [#1750](https://github.com/github/copilot-cli/issues/1750) (👍11), [#1954](https://github.com/github/copilot-cli/issues/1954) (👍4) | 🔴 High |

---

## 6. Developer Pain Points

- **Rate limiting confusion & premium request blowout:** The single biggest frustration this cycle. Issues [#2591](https://github.com/github/copilot-cli/issues/2591), [#2336](https://github.com/github/copilot-cli/issues/2336), [#2742](https://github.com/github/copilot-cli/issues/2742), [#2769](https://github.com/github/copilot-cli/issues/2769), and [#2797](https://github.com/github/copilot-cli/issues/2797) all report runaway request consumption, unclear limits, broken resets, and nonsensical usage percentages. The new `auto` model and warnings in v1.0.32 partially address this, but the underlying metering logic appears unreliable.

- **Model availability gaps vs. VS Code:** Enterprise users are frustrated that CLI lacks models visible in VS Code under the same org ([#1703](https://github.com/github/copilot-cli/issues/1703)). This fragmentation undermines the "same Copilot everywhere" promise.

- **Environment hangs (Nix/direnv, WSL, macOS):** Execution hangs remain a persistent pain point across diverse environments ([#1838](https://github.com/github/copilot-cli/issues/1838), [#575](https://github.com/github/copilot-cli/issues/575)), with the CLI becoming unusable in non-standard shell setups.

- **XDG config non-compliance:** A recurring theme across at least 3 issues affecting Linux developers who follow standard directory conventions. Despite [#1750](https://github.com/github/copilot-cli/issues/1750) being closed, the regression in [#1954](https://github.com/github/copilot-cli/issues/1954) suggests the fix was incomplete.

- **Agent/skill discovery issues:** Sub-agents can't see full skill lists ([#2416](https://github.com/github/copilot-cli/issues/2416)), the wrong agent is sometimes selected ([#935](https://github.com/github/copilot-cli/issues/935)), and autopilot enters infinite loops ([#2374](https://github.com/github/copilot-cli/issues/2374)). The agent orchestration layer needs maturation.

- **Security concern — password echo in WSL:** [#2542](https://github.com/github/copilot-cli/issues/2542) reports sudo passwords displayed in plain text during WSL prompts, posing a real security risk during screen sharing or recordings.

---

*Data sourced from [github.com/github/copilot-cli](https://github.com/github/copilot-cli) on 2026-04-18.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

## Kimi Code CLI Community Digest — 2026-04-18

### 1. Today's Highlights

Version **1.36.0** was released, headlined by a major increase in the default `max_steps_per_turn` from 100 to 500—significantly raising the ceiling for complex, multi-step agent workflows. On the provider side, the team landed proper **Claude Opus 4.7 adaptive-thinking support**, added extended thinking-effort levels (`xhigh`, `max`), and shipped several Web UI fixes for markdown rendering and broken code-block buttons. A rapid revert-and-reland sequence around the Anthropic thinking refactor shows the team iterating carefully on this critical integration.

---

### 2. Releases

**v1.36.0** ([PR #1922](https://github.com/MoonshotAI/kimi-cli/pull/1922))
| Area | Change |
|------|--------|
| Core | Default `max_steps_per_turn` raised **100 → 500** ([#1908](https://github.com/MoonshotAI/kimi-cli/pull/1908)) |
| Shell | Moon-spinner fallback now shown during all active turn gaps ([#1909](https://github.com/MoonshotAI/kimi-cli/pull/1909)) |
| Build | PyInstaller onedir mode skills-path fix ([#1912](https://github.com/MoonshotAI/kimi-cli/pull/1912)) |
| Provider | Anthropic Opus 4.7 adaptive thinking + extended effort levels ([#1918](https://github.com/MoonshotAI/kimi-cli/pull/1918)) |
| Web | Markdown spacing fix ([#1921](https://github.com/MoonshotAI/kimi-cli/pull/1921)); copy/download/preview button fix ([#1920](https://github.com/MoonshotAI/kimi-cli/pull/1920)) |

---

### 3. Hot Issues

| # | Issue | Why it matters |
|---|-------|----------------|
| 1 | [#1874](https://github.com/MoonshotAI/kimi-cli/issues/1874) — k2.6-code-preview thinking length | User reports a single sub-agent hitting **51 rounds and 60 k+ output tokens** of "meaningless" thinking after being auto-upgraded to k2.6-code-preview. Directly related to today's `max_steps` change and signals the need for smarter budget controls. 👍 1 |
| 2 | [#1888](https://github.com/MoonshotAI/kimi-cli/issues/1888) — K2.6 excessive tool calls in Claude Code | Kimi K2.6 "madly" calls tools when used inside Claude Code, echoing concerns that newer models loop aggressively without throttle. |
| 3 | [#1903](https://github.com/MoonshotAI/kimi-cli/issues/1903) — Error 400 with kimi-for-coding | Recurring 400 errors on the default subscription model; 5 comments in 2 days suggest a provider-side regression that needs triage. |
| 4 | [#1923](https://github.com/MoonshotAI/kimi-cli/issues/1923) — Bad Interactivity | Request for incremental streaming of reasoning instead of surfacing only minimal final output—core UX ask from power users. |
| 5 | [#1672](https://github.com/MoonshotAI/kimi-cli/issues/1672) — VS Code plan mode UX | Plan mode writes to an external `.md` file, which feels "disconnected." Users want inline plan rendering like Codex. 👍 1 |
| 6 | [#1680](https://github.com/MoonshotAI/kimi-cli/issues/1680) — Independent font size in VS Code panel | Cannot resize Kimi chat panel font without affecting other VS Code panes. 👍 1 |
| 7 | [#1919](https://github.com/MoonshotAI/kimi-cli/issues/1919) — MCP server response parsing | MCP JSON responses are silently stripped beyond `content.text`, breaking workflows that rely on structured tool output. |
| 8 | [#1916](https://github.com/MoonshotAI/kimi-cli/issues/1916) — WSL2 support | Login flow under Win11 WSL2 (Ubuntu 24.04) stalls at the subscription page; no CLI response. |
| 9 | [#1914](https://github.com/MoonshotAI/kimi-cli/issues/1914) — Installation fails where GitHub is unreachable | `uv` bootstrapper ultimately pulls binaries from GitHub Releases, blocking installs in China and other restricted networks. |
| 10 | [#1910](https://github.com/MoonshotAI/kimi-cli/issues/1910) — IntelliJ IDEA CLI no response | CLI shows no output inside JetBrains IDEA; potential terminal-integration issue. |

---

### 4. Key PR Progress

| PR | Title | Significance |
|----|-------|--------------|
| [#1922](https://github.com/MoonshotAI/kimi-cli/pull/1922) | `chore(release): bump to 1.36.0` | Release PR bundling all today's shipped changes. |
| [#1908](https://github.com/MoonshotAI/kimi-cli/pull/1908) | `feat(core): increase default max_steps_per_turn 100→500` | Unlocks longer agentic chains; answers community demand for more complex task handling. |
| [#1918](https://github.com/MoonshotAI/kimi-cli/pull/1918) | `feat(kosong): Opus 4.7 adaptive thinking` | Adds proper adaptive-thinking protocol, new `xhigh`/`max` effort levels, and wires `output_config.effort` through Anthropic and OpenAI paths. |
| [#1917](https://github.com/MoonshotAI/kimi-cli/pull/1917) | `revert: undo accidentally-pushed anthropic refactor` | Cleanly reverts direct-to-main commits so they could be re-landed through proper review (#1918). |
| [#1911](https://github.com/MoonshotAI/kimi-cli/pull/1911) | `fix(kosong): support adaptive thinking Opus 4.7+` | Community contributor fix: removes hard-coded `opus-4.6` check, future-proofing for Opus ≥ 4.6. Open, complementary to #1918. |
| [#1920](https://github.com/MoonshotAI/kimi-cli/pull/1920) | `fix(web): unresponsive copy/download/preview buttons` | Radix `TooltipTrigger asChild` was overwriting real `onClick` handlers; now fixed. |
| [#1921](https://github.com/MoonshotAI/kimi-cli/pull/1921) | `fix(web): markdown rendering spacing` | Corrects spacing artifacts in the Web UI rendered markdown. |
| [#1912](https://github.com/MoonshotAI/kimi-cli/pull/1912) | `fix(build): PyInstaller onedir skills path` | Fixes built-in skill resolution when using `onedir` binary builds. |
| [#1798](https://github.com/MoonshotAI/kimi-cli/pull/1798) | `feat(telemetry): integrate across interactive & non-interactive modes` | Large telemetry integration PR; still open and likely under review. |
| [#1712](https://github.com/MoonshotAI/kimi-cli/pull/1712) | `feat(web): --agent-file for kimi web` | Enables custom agent-spec YAML for web sessions, recently merged. |

---

### 5. Feature Request Trends

| Direction | Evidence |
|-----------|----------|
| **Transparency & streaming of reasoning** | [#1923](https://github.com/MoonshotAI/kimi-cli/issues/1923) asks for incremental reasoning display; [#1874](https://github.com/MoonshotAI/kimi-cli/issues/1874) complains about opaque, excessive internal thinking. |
| **Thinking-budget & step controls** | Community wants configurable caps on thinking tokens and agent loops, especially after k2.6 auto-upgrades. |
| **Better VS Code integration** | Independent font sizing ([#1680](https://github.com/MoonshotAI/kimi-cli/issues/1680)), inline plan mode ([#1672](https://github.com/MoonshotAI/kimi-cli/issues/1672))—both small UX changes with outsized daily impact. |
| **Broader IDE support** | Issues for JetBrains IDEA ([#1910](https://github.com/MoonshotAI/kimi-cli/issues/1910)) and WSL2 ([#1916](https://github.com/MoonshotAI/kimi-cli/issues/1916)) indicate growing demand outside VS Code. |
| **Reliable installation in restricted networks** | GitHub-based `uv` bootstrapping blocks users behind firewalls ([#1914](https://github.com/MoonshotAI/kimi-cli/issues/1914)); mirrors or proxy-aware scripts needed. |

---

### 6. Developer Pain Points

1. **Excessive model looping & unbounded token spend** — The combination of k2.6's extended thinking and the new 500-step default has users worried about runaway agents burning tokens without useful output. Smarter stopping criteria and configurable budgets are urgently requested.

2. **MCP structured-data loss** — Tool responses are flattened to `content.text`, discarding JSON payloads that downstream workflows depend on. This silently breaks integrations and is hard to debug.

3. **Installation & connectivity friction** — SSL failures on api.kimi.com ([#53](https://github.com/MoonshotAI/kimi-cli/issues/53)), GitHub-unreachable regions ([#1914](https://github.com/MoonshotAI/kimi-cli/issues/1914)), and WSL2 login stalls ([#1916](https://github.com/MoonshotAI/kimi-cli/issues/1916)) collectively form a long-tail reliability barrier, especially for users in China.

4. **Multi-model provider quirks** — Error 400 on kimi-for-coding ([#1903](https://github.com/MoonshotAI/kimi-cli/issues/1903)) and Opus 4.7 thinking regressions highlight the fragility of the multi-provider abstraction layer as new model versions ship.

5. **IDE parity** — VS Code gets new features first; JetBrains and Web UI users encounter dead-end bugs (no response, broken buttons) that lag behind, eroding cross-platform confidence.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## OpenCode Community Digest — 2026-04-18

---

### 1. Today's Highlights

OpenCode shipped three rapid-fire releases (v1.4.8–v1.4.10) within 24 hours, headlined by a new **LLM Gateway provider** with config and usage reporting, plus critical fixes for a crash in experimental mode and a regression that prevented project-level provider configs (notably Bedrock) from loading. Community activity remains intense: users are reporting new regressions around agent sessions terminating prematurely, Desktop blank-window bugs on macOS Tahoe, and broken `@file` performance on Windows/WSL2—while contributors are pushing forward on OpenAI native compaction, Kimi K2.6 support, and TUI observability improvements.

---

### 2. Releases

| Version | Highlights |
|---------|-----------|
| **v1.4.10** | Restored workspace history on reconnect for existing sessions; passed OTEL exporter settings into managed workspaces; normalized provider metadata defaults so models load even with incomplete catalog data. ([Release](https://github.com/anomalyco/opencode/releases/tag/v1.4.10)) |
| **v1.4.9** | Added **LLM Gateway** as a provider with config support and model usage reporting (contributor: @smakosh); limited GitHub Copilot Opus 4.7 to medium reasoning effort to prevent unsupported variant errors (@OpeOginni); improved remote workspace reconnection with exponential backoff and clearer failure messages. ([Release](https://github.com/anomalyco/opencode/releases/tag/v1.4.9)) |
| **v1.4.8** | Fixed crash when experimental mode was enabled; allowed plugin tools to return metadata in execute results (@jquense); showed real filenames instead of `/dev/null` in revert diffs; improved workspace session handling for deleted workspaces; fixed Windows `ctrl+z` terminal suspend. ([Release](https://github.com/anomalyco/opencode/releases/tag/v1.4.8)) |

---

### 3. Hot Issues

1. **[#23110](https://github.com/anomalyco/opencode/issues/23110) — Regression: No providers load from project config (Bedrock) in 1.4.7/1.4.8** (👍 4, 10 comments)  
   A critical regression where upgrading to 1.4.7/1.4.8 causes all model providers to disappear from the TUI. Downgrading to 1.4.6 restores functionality. Likely related to the provider metadata normalization changes addressed in v1.4.10.

2. **[#13490](https://github.com/anomalyco/opencode/issues/13490) — High CPU usage since 1.1.60 with Ghostty** (👍 3, 8 comments)  
   A persistent perf issue where specific plugins combined with the Ghostty terminal cause sustained high CPU. The problem vanishes when switching tabs, pointing to a rendering loop or polling issue that remains unresolved across multiple versions.

3. **[#23098](https://github.com/anomalyco/opencode/issues/23098) — Desktop 1.4.8 stuck on splash screen** (6 comments)  
   Users upgrading from 1.4.4 to 1.4.8 report the Desktop app can't get past the splash screen. No workaround confirmed yet; this is blocking upgrades for affected users.

4. **[#22862](https://github.com/anomalyco/opencode/issues/22862) — Glob tool fails with WASM parsing error in WSL2** (👍 2, 6 comments)  
   The glob tool throws a `wasm-simd is not enabled` error for any pattern in WSL2, while other tools (read, edit, bash) work fine. A Windows/WSL2-specific WASM compilation issue affecting core file-search functionality.

5. **[#22630](https://github.com/anomalyco/opencode/issues/22630) — Desktop blank window on macOS 26.4 Tahoe** (7 comments)  
   OpenCode Desktop shows a completely blank, unresponsive window on the macOS Tahoe beta (M3 Pro). Likely a WebKit/renderer compatibility issue with the upcoming OS.

6. **[#22408](https://github.com/anomalyco/opencode/issues/22408) — Kimi K2.6 integration request** (👍 14, 6 comments)  
   Strong community demand (14 thumbs-up) for Kimi K2.6 and K2.6-code-preview model support. Already has a corresponding PR (#22509) in progress.

7. **[#4821](https://github.com/anomalyco/opencode/issues/4821) — Add ability to unqueue messages** (👍 34, 12 comments)  
   The most upvoted issue in this window: users want to remove messages from the queue after submitting them, especially when over-correcting the agent causes it to invent fixes for non-existent problems.

8. **[#21079](https://github.com/anomalyco/opencode/issues/21079) — package-lock.json ignores ~/.npmrc registry** (👍 11, 6 comments)  
   OpenCode generates `.opencode/package-lock.json` without respecting user-configured npm registries, breaking workflows for users behind private registries or mirrors.

9. **[#23131](https://github.com/anomalyco/opencode/issues/23131) — CLI `--port` flag no longer works** (4 comments)  
   Both `--port` CLI flag and `server.port` config are being ignored. Appears to be an intentional change that wasn't communicated, frustrating users who rely on custom ports.

10. **[#21534](https://github.com/anomalyco/opencode/issues/21534) — Agent stopping unexpectedly mid-task** (👍 2, 2 comments)  
    The agent halts after seconds or minutes without completing tasks or indicating why. Multiple users report the same pattern—the agent prints its todo list, then silently stops. Closely related to #23183 and #21893.

---

### 4. Key PR Progress

1. **[#23172](https://github.com/anomalyco/opencode/pull/23172) — OpenAI native compaction support** (WIP, beta)  
   Adds native context-window compaction for OpenAI-compatible providers, a critical feature for long-running agent sessions that currently fail when context fills up.

2. **[#22509](https://github.com/anomalyco/opencode/pull/22509) — Kimi K2.6-code-preview model support**  
   Client-side integration for the Kimi K2.6 model family, addressing the popular feature request in #22408. Enables manual configuration via `opencode.json`.

3. **[#23189](https://github.com/anomalyco/opencode/pull/23189) — Auto-tag route spans with route params** (contributor: @kitlangton)  
   Extracts Hono route parameters (session.id, message.id, etc.) as OTEL span attributes, making every HTTP route span searchable by its IDs—significantly improving observability.

4. **[#23188](https://github.com/anomalyco/opencode/pull/23188) — Stabilize TUI theme persistence and KV writes** (beta)  
   Fixes TUI theme mode startup to use renderer theme detection, ensures only explicit manual changes persist, and serializes/locks `kv.json` writes to prevent corruption across processes.

5. **[#23185](https://github.com/anomalyco/opencode/pull/23185) — Show session ID in TUI sidebar on non-prod channels** (contributor: @kitlangton)  
   Renders the current session ID under the session title on local/dev/beta channels, enabling easier correlation of running conversations with telemetry data.

6. **[#23186](https://github.com/anomalyco/opencode/pull/23186) — Zod-from-Schema: StructWithRest (catchall) support** (contributor: @kitlangton)  
   Third walker extension in the Schema-to-Zod pipeline, adding support for `Schema.StructWithRest` (Zod's `.catchall()`). Required for the evolving type-system infrastructure.

7. **[#5092](https://github.com/anomalyco/opencode/pull/5092) — `{env:VAR}` interpolation in agent/command markdown frontmatter**  
   Enables dynamic model selection via environment variables in markdown agent definitions, unlocking flexible per-environment agent configurations.

8. **[#23181](https://github.com/anomalyco/opencode/pull/23181) — Refactor npm install API to object-based package spec** (by @thdxr)  
   Replaces string-concatenation package specs with structured objects (`{name, version?}`), making the npm install API safer and more extensible. Closed but sets the pattern.

9. **[#15697](https://github.com/anomalyco/opencode/pull/15697) — Collapsible questions popup in TUI** (contributor: @iamdavidhill)  
   Makes the questions/permission popup collapsible, reducing visual clutter during agent runs that require frequent user confirmations.

10. **[#7984](https://github.com/anomalyco/opencode/pull/7984) — Databricks provider support**  
    Full Databricks Foundation Model API provider with per-model SDK routing (Claude, GPT, etc.), enabling enterprise users to connect to Databricks workspace pay-per-token endpoints.

---

### 5. Feature Request Trends

- **New model/provider support** remains the top request category: Kimi K2.6 (#22408, 👍 14), Databricks (#7984), and LLM Gateway (shipped in v1.4.9) all reflect demand for broader model choice, especially for non-OpenAI/Anthropic providers.
- **Session and message management** is a recurring theme: unqueuing messages (#4821, 👍 34), agent stop/recovery (#21534, #23183), and retry resilience for transient upstream failures (#21893) all point to users wanting more control over long-running conversations.
- **Customization and theming**: requests for `$OPENCODE_CONFIG_DIR/themes` support (#23157) and fixes to terminal background detection (#22615) show growing desire for visual personalization.
- **CLI/SDK ergonomics**: `--dangerously-skip-permissions` (#7137), `/model x/y` quick-switch (#2490), and `{env:VAR}` in markdown agents (#5092) all reflect power users wanting faster, scriptable workflows.
- **Context transparency**: finer-grained context panel breakdowns (#20631) indicate users want to understand and optimize token usage per source.

---

### 6. Developer Pain Points

- **Regressions on every release cycle**: v1.4.7/1.4.8 broke provider loading (#23110), Desktop splash screens (#23098), port configuration (#23131), and plugin startup (#23147). The velocity of shipping is impressive but regression testing—especially for Desktop, WSL2, and non-default providers—is clearly strained.
- **Agent reliability during long tasks**: multiple reports (#21534, #23183, #21893) of agents silently stopping mid-task without error messages or recovery paths. This is the single most damaging issue for unattended/build-mode workflows.
- **Windows/WSL2 as a second-class platform**: WASM-SIMD errors in glob (#22862), slow `@file` performance (#22627), terminal state corruption (#12434), and missing `ctrl+z` support collectively suggest Windows users encounter friction at every layer.
- **Private registry / enterprise proxy breakage**: `package-lock.json` ignoring `~/.npmrc` (#21079) and the new npm install API refactor (#23181) both touch a nerve for enterprise users behind private npm registries.
- **Desktop app stability**: blank windows on macOS Tahoe (#22630) and splash-screen freezes (#23098) indicate the Electron/Tauri Desktop wrapper needs hardening before it can be considered production-ready.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-18

## 1. Today's Highlights

The Qwen Code community is experiencing significant turbulence following the abrupt discontinuation of the Qwen OAuth free tier (reduced to 100 req/day on April 15th, full shutdown imminent on April 20th). This policy change has triggered a massive influx of 401 authentication errors, dominating the issue tracker. On the engineering front, the **v0.15.0-preview.0** release introduces complete ACP hooks support and compact mode UX improvements, while the VSCode Companion extension is rapidly maturing with multiple PRs targeting feature parity with the CLI.

---

## 2. Releases

### [v0.15.0-preview.0](https://github.com/QwenLM/qwen-code/releases)
- **ACP Integration**: Complete hooks support for ACP integration ([PR #3248](https://github.com/QwenLM/qwen-code/pull/3248) by @DennisYu07)
- **Compact Mode UX**: Shortcuts, settings sync, and safety optimizations ([PR #3100](https://github.com/QwenLM/qwen-code/pull/3100) by @chiga0)
- **HTTP Hooks**: New HTTP hook capabilities added

### [v0.14.5-nightly.20260417](https://github.com/QwenLM/qwen-code/releases)
- Nightly build containing the same ACP hooks and compact mode changes for the stable branch.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [#3203 — OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203) 🔥 | **90 comments.** The most discussed issue. Users are alarmed by the sudden quota reduction from 1,000→100 req/day with an April 20th full shutdown. Major trust and accessibility concern for the community. |
| 2 | [#1855 — OAuth session persists after switching to API key](https://github.com/QwenLM/qwen-code/issues/1855) | 11 comments. Long-standing auth state bug where switching from OAuth to a paid API key leaves stale sessions, causing 401 errors. Critical migration path issue given the free tier shutdown. |
| 3 | [#3348 — 401 invalid access token](https://github.com/QwenLM/qwen-code/issues/3348) | 7 comments, 7 👍. Representative of **6+ duplicate issues** (#3396, #3391, #3390, #3403, #3405, #3406) all reporting the same 401 error. A widespread auth regression in v0.14.5. |
| 4 | [#3267 — Requests limits overview](https://github.com/QwenLM/qwen-code/issues/3267) | Users report exhausting quota before completing a single task. Calls for transparent usage dashboards and real-time limit visibility. |
| 5 | [#3281 — OAuth succeeds but quota immediately exceeded](https://github.com/QwenLM/qwen-code/issues/3281) | Authentication flow reports success, but any request immediately fails. Points to a disconnect between auth and quota enforcement systems. |
| 6 | [#2409 — Subagent parity with Claude Code](https://github.com/QwenLM/qwen-code/issues/2409) | 6 comments, 3 👍. Strategic feature request: Qwen Code's subagent system is estimated at ~40-45% parity with Claude Code. Community wants accelerated development here. |
| 7 | [#3338 — GLM-5.1 hallucinates empty shell output](https://github.com/QwenLM/qwen-code/issues/3338) | 4 comments. When using third-party models (GLM-5.1 via Zhipu API), the agent incorrectly claims shell commands returned no output despite successful execution. Related to [#3361](https://github.com/QwenLM/qwen-code/issues/3361). |
| 8 | [#3384 — Unable to add OpenAI-compatible local LLM](https://github.com/QwenLM/qwen-code/issues/3384) | Users running local models (Qwen3.6-35B-A3B on VLLM) can't configure them properly. Documentation gaps in model provider setup. |
| 9 | [#2034 — Customize/disable "thinking" quotes in TUI](https://github.com/QwenLM/qwen-code/issues/2034) | 3 comments, 4 👍. Users find the rotating witty phrases ("Greasin' the cogs") unprofessional. Related to older [#1387](https://github.com/QwenLM/qwen-code/issues/1387). Strong demand for meaningful status messages. |
| 10 | [#3382 — Feedback for Authentication docs](https://github.com/QwenLM/qwen-code/issues/3382) | Documentation still references the discontinued free tier, causing confusion. Directly impacts new user onboarding. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | [#3398 — Replace OAuth with Coding Plan/API Key flow in VSCode](https://github.com/QwenLM/qwen-code/pull/3398) | **Timely critical fix.** Replaces the discontinued OAuth login in the VSCode extension with interactive provider setup supporting Coding Plan, Alibaba API Key, and Custom API Key. |
| 2 | [#3404 — Add `/doctor` diagnostic command](https://github.com/QwenLM/qwen-code/pull/3404) | New slash command for comprehensive environment health checks (Node.js, auth, API connectivity). Directly addresses the flood of 401-related issues by giving users self-diagnostic tools. |
| 3 | [#3297 — Fix tool registry concurrent instantiation bug](https://github.com/QwenLM/qwen-code/pull/3297) | **P0 bugfix.** Race condition where concurrent `ensureTool()` calls duplicated tool instances, leaking SubagentManager listeners. Introduces lazy factory registration with inflight dedup. |
| 4 | [#3214 — Replace fdir crawler with git ls-files + ripgrep](https://github.com/QwenLM/qwen-code/pull/3214) | Major performance improvement for `@` file mention autocomplete. Eliminates full-directory re-scan on every keystroke; respects `.gitignore`. |
| 5 | [#3339 — Path-based context rules from `.qwen/rules/`](https://github.com/QwenLM/qwen-code/pull/3339) | Adds YAML frontmatter rule files with `paths:` field for conditional injection. Reduces token waste and provides file-type-specific guidance. |
| 6 | [#2550 — Fix input lag in long VSCode conversations](https://github.com/QwenLM/qwen-code/pull/2550) | Fixes 5+ second keystroke delay in VSCode Companion by extracting message list into `React.memo`, reducing re-render cost from O(n) to O(1). |
| 7 | [#2551 — Plan Mode toggle in VSCode Companion](https://github.com/QwenLM/qwen-code/pull/2551) | Brings CLI feature parity with `plan → default → auto-edit → yolo` approval mode cycling, including Tab shortcut support. |
| 8 | [#3165 — Add MiniMax provider support](https://github.com/QwenLM/qwen-code/pull/3165) | Community contribution adding MiniMax as an OpenAI-compatible provider, expanding the model ecosystem. |
| 9 | [#3407 — Fix auto-submit on number key press](https://github.com/QwenLM/qwen-code/pull/3407) | UX bugfix: number keys in `AskUserQuestionDialog` highlighted options but didn't submit, causing user confusion. Now auto-submits like the standard approval dialog. |
| 10 | [#3381 — Reduce terminal redraw cursor movement](https://github.com/QwenLM/qwen-code/pull/3381) | Addresses viewport jumping during interactive streaming output by optimizing multiline redraw sequences. |

---

## 5. Feature Request Trends

1. **Transparent usage & quota visibility** — Multiple issues demand a real-time requests dashboard, remaining-quota display, and clearer rate limit messaging. The free tier changes have amplified this significantly.
2. **Third-party model reliability** — Growing demand for robust OpenAI-compatible API support (local LLMs, GLM-5.1, MiniMax). Users want reliable tool execution output parsing across diverse model providers.
3. **Subagent system maturity** — Community is tracking parity with Claude Code's subagent capabilities. Batch/parallel execution ([#3043](https://github.com/QwenLM/qwen-code/issues/3043)) and dedicated agent display in VSCode are active development areas.
4. **TUI/UX professionalism** — Persistent requests to replace witty loading phrases with meaningful status indicators, add TODO task lists in CLI, and improve Vim mode keybindings.
5. **Path-aware context rules** — Demand for project-specific, file-pattern-based instruction injection (`.qwen/rules/`) to reduce token waste and improve accuracy.

---

## 6. Developer Pain Points

1. **Authentication chaos** — The #1 pain point. The combination of OAuth free tier shutdown, stale session bugs, and 401 token errors has created a perfect storm. At least 8 issues in 24h report the same auth failure. The migration path from free OAuth to paid plans is poorly documented and technically broken (session persistence bug [#1855](https://github.com/QwenLM/qwen-code/issues/1855)).
2. **Quota exhaustion without visibility** — Users hit limits mid-task with no warning or dashboard. The reduction to 100 req/day makes even basic operations unreliable for free-tier users.
3. **Third-party model integration fragility** — Models like GLM-5.1 fail to correctly parse tool execution results, hallucinating empty output. This undermines Qwen Code's value as a model-agnostic agent framework.
4. **VSCode Companion latency** — Long conversations cause 5+ second input delay in the IDE extension, a fundamental productivity killer being addressed in [#2550](https://github.com/QwenLM/qwen-code/pull/2550).
5. **Terminal rendering issues** — Viewport jumping during streaming output and screen flickering when scrolling back through task history remain persistent annoyances for CLI users.

</details>