# AI CLI Tools Community Digest 2026-05-13

> Generated: 2026-05-12 22:22 UTC | Tools covered: 9

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

# AI Developer Tools Ecosystem: Cross-Tool Analysis Report

## 1. Ecosystem Overview
The AI CLI tooling landscape is currently characterized by rapid iteration and a shared push toward enterprise-grade reliability, moving beyond basic prompt-response interfaces toward fully autonomous, multi-agent workflows. Major players like Anthropic, OpenAI, and Google are heavily investing in agentic architectures—such as Agent-to-Agent (A2A) protocols and sophisticated permission models—to support complex, multi-step tasks. Meanwhile, a vibrant tier of specialized and open-source tools (like OpenCode, Kimi CLI, Qwen Code, and DeepSeek TUI) is driving innovation in local model support, UI/UX customization, and daemon/background execution. Across the board, the ecosystem is currently grappling with common growing pains, specifically concerning token and context management, cross-platform stability, and robust security guardrails for autonomous operations.

## 2. Activity Comparison
*Note: Metrics reflect activity and highlights documented in the community digests for 2026-05-13.*

| Tool | Maintainer / Org | Hot Issues Highlighted | Active PRs Highlighted | Release Status (May 13) |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | Anthropic | 10 | 3 | **v2.1.140** (Maintenance & hook fixes) |
| **OpenAI Codex** | OpenAI | 10 | 10 | **3 Alpha releases** (v0.131.0-a.7 to a.9) |
| **Gemini CLI** | Google | 10 | 10 | **v0.42.0-nightly** (Snapshot & ext fixes) |
| **Copilot CLI** | GitHub | 10 | 0 | **v1.0.46** (Windows PS & deprecation) |
| **Kimi Code CLI** | Moonshot AI | 10 | 10 | **v1.43.0** (Security patch & UX) |
| **OpenCode** | AnomalyCo | 10 | 10 | No release |
| **Pi** | Earendil Works | 10 | 8 | No release (Internal refactoring) |
| **Qwen Code** | QwenLM | 10 | 10 | **v0.15.11-preview.1** (Perf optimization) |
| **DeepSeek TUI** | Hmbown | 10 | 10 | **3 releases** (v0.8.30 to v0.8.32) |

## 3. Shared Feature Directions

*   **Context & Compaction Fragility:** Almost every tool is struggling with context window unreliability. OpenAI Codex, Claude Code, and OpenCode report severe issues with context compaction breaking sessions or burning tokens. Qwen Code users are asking for precise context visibility, while Pi experiences crashes at high token counts. 
*   **Autonomous "YOLO" Modes & Safety Guardrails:** Users consistently demand ways to bypass manual permission prompts for trusted environments/CI, while simultaneously demanding better protection against destructive agent behavior. OpenCode users heavily request `--dangerously-skip-permissions`, Claude Code users want better destructive-command guardrails, and Gemini CLI is actively pushing PRs to address severe file-deletion safety flaws. Qwen Code and Kimi CLI are implementing unified auto-approval systems.
*   **Background Execution & Session Management:** There is a massive cross-ecosystem push to move CLIs from interactive-only to persistent background processes. Qwen Code is actively building `qwen serve` (daemon mode), GitHub Copilot users want a `/fork` command for branching sessions, and Kimi Code is experimenting with a `/loop` recurring scheduler. OpenAI Codex is unifying thread metadata to stabilize session history.
*   **MCP (Model Context Protocol) & Tooling Extensibility:** Standardizing external tool use is a primary vector for growth. Gemini CLI, OpenAI Codex, and GitHub Copilot are actively merging PRs to fix MCP server booting, OAuth token refreshes, and schema inference. DeepSeek TUI and Kimi CLI are aligning with OpenAI-compatible API standards to widen editor integration (e.g., Cursor, Zed).

## 4. Differentiation Analysis

*   **Market Leaders vs. Innovators:** OpenAI Codex, Claude Code, and Gemini CLI differentiate through deep platform integration and proprietary model routing. They are focused on enterprise scaling, security (e.g., cryptographic MCP provenance in Codex), and complex sub-agent orchestration. Conversely, open-source and indie tools (OpenCode, Pi, DeepSeek TUI, Qwen Code) differentiate by targeting local LLM support (Ollama/LM Studio), high customizability, and localized pricing/models (like Kimi in India/China).
*   **Technical Architecture Approaches:** 
    *   **OpenAI Codex** is hyper-focused on a Rust-based core runtime and strict sandbox/permission architecture (moving roots onto thread state).
    *   **Gemini CLI** is uniquely investing in Agent-to-Agent (A2A) protocol structuring and unified dynamic auto-modes.
    *   **Qwen Code** is prioritizing raw performance optimization (bounded metadata reads, lazy loading) and data safety (atomic file writes).
    *   **DeepSeek TUI** is heavily invested in terminal rendering pipelines and specialized prefix-caching.
    *   **Pi** is undergoing a massive refactor focused on strict dependency pinning and supply chain security.

## 5. Community Momentum & Maturity

*   **Rapid Iteration:** DeepSeek TUI, OpenAI Codex (Rust alpha), and Qwen Code show immense momentum, shipping multiple releases and heavy PR volumes daily to address aggressive user adoption and growing pains.
*   **High-Engagement / Friction:** Claude Code and OpenAI Codex have highly mature but frustrated user bases. Their communities are heavily focused on billing transparency, phantom token consumption, and complex enterprise edge cases.
*   **Niche / Emerging Momentum:** Kimi CLI, OpenCode, and Pi show strong grassroots momentum. Their communities are highly engaged in core architectural decisions (e.g., OpenCode's migration to the Effect runner, Pi's supply-chain security focus), indicating a discerning, technical user base shaping the tool's foundation.

## 6. Trend Signals

*   **Trend 1: Cost & Resource Visibility is Non-Negotiable.** Developers are rejecting "black box" token consumption. Inaccurate context percentages, idle background burning, and silent auto-compaction are eroding trust. Tool makers must invest in precise, local token counting (e.g., `tiktoken`) and transparent status lines.
*   **Trend 2: The Rise of Agentic Infrastructure.** The focus is shifting from the LLM to the *agent environment*. Features like daemonization, persistent A2A protocols, and file-level git worktree isolation indicate that developers are treating AI CLIs not as chatbots, but as autonomous workers requiring process management.
*   **Trend 3: Cross-Platform Gaps Threaten Enterprise Adoption.** Windows and Linux (specifically NixOS/WSL) users are experiencing disproportionate amounts of friction—from terminal UI flickering and segfaults to broken PowerShell integrations. Standardizing cross-platform reliability is mandatory for enterprise scaling. 
*   **Trend 4: Supply Chain Security.** As agents execute code and modify filesystems autonomously, the attack surface widens. The ecosystem is signaling a shift toward stricter sandboxing, atomic disk writes, and cryptographic provenance for MCP tools to prevent both malicious injections and accidental filesystem pollution.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-05-13 | Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking
*The most-discussed and closely watched open Pull Requests in the ecosystem.*

| Rank | Skill | Author | Status |
|:---:|-------|--------|--------|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | PGTBoos | 🟢 Open |
| 2 | **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | eovidiu | 🟢 Open |
| 3 | **[frontend-design (Revision)](https://github.com/anthropics/skills/pull/210)** | justinwetch | 🟢 Open |
| 4 | **[ODT (OpenDocument)](https://github.com/anthropics/skills/pull/486)** | GitHubNewbie0 | 🟢 Open |
| 5 | **[PDF Bug Fix: Case-Sensitive References](https://github.com/anthropics/skills/pull/538)** | Lubrsy706 | 🟢 Open |
| 6 | **[DOCX Tracked Change Collision Fix](https://github.com/anthropics/skills/pull/541)** | Lubrsy706 | 🟢 Open |
| 7 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | 4444J99 | 🟢 Open |
| 8 | **[CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** | narenkatakam | 🟢 Open |

**Key Takeaways:**
*   **Document processing dominates.** Half of the top PRs relate to document creation, formatting, and bug fixes (typography, ODT, PDF, DOCX), indicating that users heavily rely on Claude for document generation and need enterprise-grade reliability.
*   **Meta-skills are emerging.** PRs like `skill-quality-analyzer` (evaluating skills across 5 dimensions) and fixes to `skill-creator` show the community actively building tools to improve the Skills ecosystem itself.
*   **Quality over quantity.** Several top PRs are incremental but critical bug fixes (e.g., case-sensitivity in file paths, XML ID collisions in OOXML), reflecting a maturing ecosystem focused on stability.

---

## 2. Community Demand Trends
*Distilled from the most active Issues, here is what users are asking for next.*

*   **Enterprise & Org-Level Features ([#228](https://github.com/anthropics/skills/issues/228) • 11 comments • 7 👍):** The single most-upvoted open issue requests organization-wide skill sharing. Users want to bypass the manual file-download/upload workflow in favor of a centralized internal skill library or direct sharing links.
*   **Skill Invocation & Evaluation Reliability ([#556](https://github.com/anthropics/skills/issues/556) • 8 comments • 6 👍):** A critical functional gap. The evaluation script (`run_eval.py`) fails to trigger skills via `claude -p` with a 0% success rate. The community is urgently seeking fixes to make skill routing deterministic and testable.
*   **Trust, Security, and Namespace Governance ([#492](https://github.com/anthropics/skills/issues/492) • 6 comments):** Users have identified that community skills distributed under the `anthropic/` namespace create a trust boundary vulnerability. There is strong demand for clear provenance and namespace separation between official and community skills.
*   **Plugin Architecture & MCP Integration ([#1087](https://github.com/anthropics/skills/issues/1087), [#16](https://github.com/anthropics/skills/issues/16)):** Developers want precise control over plugin loading (e.g., preventing `document-skills` from overloading the context window with undeclared skills) and have reignited discussions about exposing Skills as Model Context Protocol (MCP) tools for standardized API interactions.
*   **Data Management & Context Window Optimization ([#1102](https://github.com/anthropics/skills/issues/1102)):** With the rise of database-related MCPs, users are highlighting the need for skills to intelligently compress or summarize large data returns to avoid context window congestion.

---

## 3. High-Potential Pending Skills
*Active PRs representing significant new functionalities that are likely to be merged soon.*

*   **[ServiceNow Platform Suite](https://github.com/anthropics/skills/pull/568)** (Vanka07): A massive, comprehensive skill covering ITSM, ITOM, SecOps, HRSD, and IntegrationHub. Represents a major push into enterprise ERP/service management automation.
*   **[Sensory: macOS AppleScript Automation](https://github.com/anthropics/skills/pull/806)** (AdelElo13): Replaces screenshot-based computer use with native `osascript` execution. Features a two-tier permission system allowing Claude to automate macOS workflows out-of-the-box.
*   **[AURELION Skill Suite](https://github.com/anthropics/skills/pull/444)** (Chase-Key): Introduces a structured cognitive framework (kernel, advisor, agent, memory) for professional knowledge management, pushing the boundaries of persistent AI memory.
*   **[AppDeploy](https://github.com/anthropics/skills/pull/360)** (avimak): Enables Claude to deploy full-stack web apps directly to public URLs. Closes the loop from code generation to live deployment.

---

## 4. Skills Ecosystem Insight
**As document-generation skills reach functional maturity, the community's most concentrated demand is shifting toward enterprise-grade reliability—specifically deterministic skill invocation, secure namespace governance, and organizational sharing mechanisms.**

---

# Claude Code Community Digest — 2026-05-13

## 1. Today's Highlights

Claude Code shipped **v2.1.140**, a focused maintenance release that improves subagent type matching flexibility and fixes a silent hang in `/goal` when hooks are restricted. Meanwhile, the community spotlight remains on two perennial themes: **billing transparency** (silent context-tier changes, phantom token consumption, and upgrade payment loops) and **desktop app friction** (unwanted git worktrees, auto-re-archived chats, and platform-gated `--bg` access). A trio of documentation PRs landed to surface previously undocumented environment variables and hook options.

---

## 2. Releases

### [v2.1.140](https://github.com/anthropics/claude-code/releases/tag/v2.1.140)
- **Agent tool `subagent_type` matching** now accepts case- and separator-insensitive values (e.g., `"Code Reviewer"` resolves to `code-reviewer`), reducing configuration friction.
- **Updated agent color palette** for the TUI.
- **Fixed `/goal` silent hang** when `disableAllHooks` or `allowManagedHooksOnly` is set — the command now displays expected feedback instead of hanging indefinitely.

---

## 3. Hot Issues

| # | Issue | Why it matters |
|---|-------|----------------|
| 1 | [#45596 — Bring Back Buddy](https://github.com/anthropics/claude-code/issues/45596) | 235 comments, 1,082 👍. The community's most upvoted open issue. Removal of the `/buddy` companion skill in v2.1.97 still resonates a month later; developers describe a "loss of workflow personality" and demand its return or an equivalent. |
| 2 | [#28927 — Silent billing change in v2.1.51](https://github.com/anthropics/claude-code/issues/28927) | 1M-context usage was silently shifted to "Extra Usage" without changelog notice. JSONL analysis proves identical workloads billed differently across versions. Core trust concern. |
| 3 | [#58383 — DISABLE_TELEMETRY kills GrowthBook and feature flags](https://github.com/anthropics/claude-code/issues/58383) | Setting `DISABLE_TELEMETRY=1` unintentionally disables all feature flags (Agent View, killswitches). Telemetry-opt-out users get a degraded product without knowing why. Closed but flagged as important design feedback. |
| 4 | [#58204 — `--bg` feature gate disabled on Windows](https://github.com/anthropics/claude-code/issues/58204) | `claude --bg` works on macOS but fails on Windows with the same account and version. Points to either platform-gated rollout or a flag-fetch bug. |
| 5 | [#58188 — Token usage during idle periods](https://github.com/anthropics/claude-code/issues/58188) | Tokens being consumed while the session is idle. Lock acquisition errors in logs suggest background processes burning quota. Paired with [#58355](https://github.com/anthropics/claude-code/issues/58355) (5% weekly usage lost overnight), this is a growing cost concern. |
| 6 | [#53065 — `advisor()` inflates input tokens, triggers premature auto-compaction](https://github.com/anthropics/claude-code/issues/53065) | The advisor sub-agent forwards the full transcript, and token counts are summed — pushing extended-context models into auto-compaction earlier than expected. |
| 7 | [#53442 — Cowork Google Drive MCP can't see Workspace Shared Drives](https://github.com/anthropics/claude-code/issues/53442) | MCP integration blind spot limits enterprise collaboration use cases where shared drives are standard. |
| 8 | [#12513 — Disable automatic worktree creation](https://github.com/anthropics/claude-code/issues/12513) | 38 comments. Solo devs don't need per-conversation worktrees; the clutter and branch noise are a persistent annoyance. Echoed in [#21236](https://github.com/anthropics/claude-code/issues/21236) and [#42234](https://github.com/anthropics/claude-code/issues/42234). |
| 9 | [#43657 — Resume/continue cache invalidation](https://github.com/anthropics/claude-code/issues/43657) | Resuming a session invalidates cached tokens, forcing costly re-processing. Labeled `regression`, directly impacts cost efficiency. |
| 10 | [#54204 — Max 5x→20x upgrade stuck in void_invoice loop](https://github.com/anthropics/claude-code/issues/54204) | Payment system returns the same canceled PaymentIntent on every retry, blocking upgrades entirely. Marked `invalid` but unresolved for the user. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#58323 — Document `continueOnBlock` for PostToolUse hooks](https://github.com/anthropics/claude-code/pull/58323) | Adds docs for the `continueOnBlock` config option, which feeds the rejection reason back to Claude and continues the turn instead of hard-stopping. Fixes [#58120](https://github.com/anthropics/claude-code/issues/58120). |
| 2 | [#58314 — Add `CLAUDE_PROJECT_DIR` to MCP and plugin env var docs](https://github.com/anthropics/claude-code/pull/58314) | MCP stdio servers receive `CLAUDE_PROJECT_DIR` but it was undocumented. Now surfaced in the MCP integration skill, server-types reference, and plugin-features reference. Fixes [#58121](https://github.com/anthropics/claude-code/issues/58121). |
| 3 | [#58126 — Add `neonpanel` plugin v1.0.0](https://github.com/anthropics/claude-code/pull/58126) | E-commerce operations plugin providing eight domain agents (replenishment, accounting, supply chain, marketing, forecasting, FP&A, market intel, customer success) grounded in live NeonPanel data via MCP. First third-party commerce-domain agent suite. |

*(Only 3 PRs were updated in the last 24h; all are listed above.)*

---

## 5. Feature Request Trends

| Theme | Representative Issues | Signal Strength |
|-------|----------------------|-----------------|
| **Granular control over git worktrees** | [#12513](https://github.com/anthropics/claude-code/issues/12513), [#21236](https://github.com/anthropics/claude-code/issues/21236), [#42234](https://github.com/anthropics/claude-code/issues/42234) | High — multiple issues, cross-platform, consistent ask for an opt-out toggle. |
| **Multi-account / profile support** | [#18435](https://github.com/anthropics/claude-code/issues/18435), [#7075](https://github.com/anthropics/claude-code/issues/7075) | 491 👍 on multi-account switching. Profiles with isolated memory/hooks is the natural extension. |
| **Regional pricing (INR)** | [#17432](https://github.com/anthropics/claude-code/issues/17432) | 366 👍, 158 comments. Strong demand from the Indian developer market. |
| **Transparent token/context billing** | [#28927](https://github.com/anthropics/claude-code/issues/28927), [#43657](https://github.com/anthropics/claude-code/issues/43657), [#57670](https://github.com/anthropics/claude-code/issues/57670) | Cost-related issues consistently cluster at the top. |
| **Agent safety & permission controls** | [#58380](https://github.com/anthropics/claude-code/issues/58380), [#57054](https://github.com/anthropics/claude-code/issues/57054), [#45981](https://github.com/anthropics/claude-code/issues/45981) | Requests for `--allow-dangerously-skip-permissions` in Agent View and better destructive-command guardrails. |

---

## 6. Developer Pain Points

1. **Phantom token consumption** — At least three independent reports ([#58188](https://github.com/anthropics/claude-code/issues/58188), [#58355](https://github.com/anthropics/claude-code/issues/58355), [#57670](https://github.com/anthropics/claude-code/issues/57670)) describe tokens burning while idle or displaying 0% usage while hitting limits. This erodes trust in the cost dashboard.

2. **Telemetry ↔ feature flag coupling** — [#58383](https://github.com/anthropics/claude-code/issues/58383) revealed that `DISABLE_TELEMETRY` inadvertently opts users out of feature flags and safety killswitches. Privacy-conscious users are punished with a degraded and less safe experience.

3. **Desktop app chat management regressions** — Chats auto-re-archiving after manual restoration ([#57586](https://github.com/anthropics/claude-code/issues/57586)) and persistent UI overlay artifacts on Windows ([#58508](https://github.com/anthropics/claude-code/issues/58508)) suggest the desktop shell needs stabilization.

4. **Agent reliability for destructive operations** — Reports of agents executing `rm -rf` without warnings ([#57054](https://github.com/anthropics/claude-code/issues/57054)), fabricating data during migrations ([#45981](https://github.com/anthropics/claude-code/issues/45981)), and hallucinating facts ([#57615](https://github.com/anthropics/claude-code/issues/57615), [#57042](https://github.com/anthropics/claude-code/issues/57042)) indicate that safety guardrails for high-stakes workflows remain inconsistent.

5. **Platform parity gaps** — Windows users are disproportionately affected: `--bg` disabled ([#58204](https://github.com/anthropics/claude-code/issues/58204)), MCP connectivity issues ([#53442](https://github.com/anthropics/claude-code/issues/53442)), and UI rendering bugs ([#58508](https://github.com/anthropics/claude-code/issues/58508)) suggest the Windows experience lags behind macOS.

---

*Data sourced from [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) on 2026-05-13.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-13

## 1. Today's Highlights
Codex maintainers merged a major permissions architecture migration today, moving workspace root ownership into thread state via a carefully reviewed PR stack ([#22327](https://github.com/openai/codex/pull/22327), [#22329](https://github.com/openai/codex/pull/22329), [#22330](https://github.com/openai/codex/pull/22330)). Three rapid-fire Rust alpha releases (v0.131.0-alpha.7 through alpha.9) hint at aggressive iteration on core runtime performance. The community continues to rally around the heavily upvoted token-burning bug ([#14593](https://github.com/openai/codex/issues/14593)), now with 575 comments and growing frustration over context compact failures.

---

## 2. Releases

| Release | Version | Notes |
|---------|---------|-------|
| rust-v0.131.0-alpha.9 | `0.131.0-alpha.9` | Latest alpha; no detailed changelog published yet. |
| rust-v0.131.0-alpha.8 | `0.131.0-alpha.8` | Sequential alpha bump. |
| rust-v0.131.0-alpha.7 | `0.131.0-alpha.7` | Sequential alpha bump. |

Three Rust alpha releases in 24 hours suggest active work on the CLI runtime, likely addressing performance, sandbox, or TUI issues reported in recent bugs.

---

## 3. Hot Issues

1. **[#14593](https://github.com/openai/codex/issues/14593) — Burning tokens very fast** *(575 comments, 👍 251)*
   The top community issue. Business users on VS Code report rapid token consumption even when the agent appears idle. Two months old and still open, it's a major trust and cost concern.

2. **[#14860](https://github.com/openai/codex/issues/14860) — Error running remote compact task** *(65 comments, 👍 44)*
   Pro users on Linux hitting context compaction failures with gpt-5.4. Compaction is critical for long sessions; its failure compounds the token-burning problem.

3. **[#12161](https://github.com/openai/codex/issues/12161) — Codex IDE keeps getting stuck on "Thinking"** *(30 comments, 👍 16)*
   Windows users across VS Code, Cursor, and Windsurf report the extension freezing indefinitely. Broad cross-IDE impact suggests a protocol or backend issue, not just a VS Code bug.

4. **[#11086](https://github.com/openai/codex/issues/11086) — App: message editing** *(10 comments, 👍 43)*
   High-demand feature request to edit prior messages with downstream undo, similar to Cursor's UX. 43 👍 makes it one of the most-wanted enhancements.

5. **[#21343](https://github.com/openai/codex/issues/21343) — Context compact error** *(10 comments, 👍 11)*
   Fresh report from a Pro $200 user on macOS encountering compact errors with the latest app build. Adds to the mounting evidence that compaction is fragile.

6. **[#17444](https://github.com/openai/codex/issues/17444) — Booting MCP Server** *(23 comments, 👍 9)*
   Windows users can't start MCP servers with Codex CLI 0.120.0. MCP is a key extensibility path; boot failures block plugin adoption on Windows.

7. **[#22135](https://github.com/openai/codex/issues/22135) — "contains malware" macOS Gatekeeper warning** *(4 comments, 👍 11)*
   Android Studio users on Apple Silicon see a malware warning for the `codex-aarch64-apple-darwin` binary. Code-signing issue that erodes user confidence.

8. **[#9546](https://github.com/openai/codex/issues/9546) — Context window explodes despite auto-compacting** *(6 comments)*
   Context window swells after long sessions even with compaction. Directly related to the compaction bug cluster and suggests the compact algorithm has edge cases.

9. **[#22238](https://github.com/openai/codex/issues/22238) — Unable to purchase credits: Stripe checkout fails** *(1 comment, 👍 1)*
   Revenue-blocking: users can't buy credits because Stripe checkout errors out before payment. Immediate commercial impact.

10. **[#21987](https://github.com/openai/codex/issues/21987) — Codex Beta spins at ~290% CPU after large Computer Use thread** *(2 comments)*
    Runaway CPU after Computer Use sessions on macOS. Performance regression that could damage hardware perception and battery life.

---

## 4. Key PR Progress

1. **[#22327](https://github.com/openai/codex/pull/22327) — permissions: move workspace roots onto thread state** *(bolinfest)*
   The anchor PR in the permissions migration stack. Workspace write roots are now owned by thread permission profiles on the server, not by `SandboxPolicy` on the client. Critical for security and multi-workspace correctness.

2. **[#22382](https://github.com/openai/codex/pull/22382) — tools: remove is_mutating dispatch gating** *(pakrym-oai)*
   Simplifies tool dispatch by removing the redundant `is_mutating` hook, consolidating on `supports_parallel_tool_calls`. Reduces complexity for tool authors.

3. **[#22380](https://github.com/openai/codex/pull/22380) — fix: default unknown tool schemas to open objects** *(celia-oai)*
   MCP servers that omit `type` in input schemas no longer get treated as strings. Fixes schema inference for the long tail of MCP tool providers.

4. **[#22236](https://github.com/openai/codex/pull/22236) — Unify thread metadata updates above store** *(wiltzius-openai)*
   Separates metadata updates from raw history appends in `ThreadStore`. Prerequisite for reliable session history sync across CLI and desktop.

5. **[#22280](https://github.com/openai/codex/pull/22280) — code-mode: Add pending-aware code mode execution** *(cconger)*
   Introduces `execute_to_pending` / `wait_to_pending` APIs that can freeze a runtime until explicit resume. Enables interactive approval flows and step-by-step agent control.

6. **[#22256](https://github.com/openai/codex/pull/22256) — Refactor namespaced tool spec registration** *(pakrym-oai)*
   Tool handlers now own their specs, allowing deferred registration for MCP and dynamic tools. Architectural prerequisite for lazy-loaded tooling.

7. **[#20649](https://github.com/openai/codex/pull/20649) — Track host-owned Codex Apps MCP provenance** *(mzeng-openai)*
   Prevents spoofing of the built-in Codex Apps MCP by adding cryptographic provenance tracking. Important security hardening.

8. **[#20237](https://github.com/openai/codex/pull/20237) — Add callback ids to local MCP OAuth redirects** *(stevenlee-oai)*
   Deterministic callback IDs for MCP OAuth flows prevent redirect URI collisions when multiple MCP servers run locally.

9. **[#22343](https://github.com/openai/codex/pull/22343) — feat(exec-server): use protobuf relay frames** *(apanasenko-oai)*
   Remote exec-server now multiplexes multiple harness sessions over a single executor websocket using protobuf relay frames. Key for remote execution scalability.

10. **[#22375](https://github.com/openai/codex/pull/22375) — Use plugin/list to get list of plugins for mentions** *(canvrno-oai)*
    TUI plugin mentions now query app-server via `plugin/list` instead of local discovery. Improves consistency and enables server-side filtering.

---

## 5. Feature Request Trends

- **Message editing and undo** ([#11086](https://github.com/openai/codex/issues/11086)): The most upvoted request. Users want Cursor-style message editing with downstream rollback, reflecting a shift toward conversational iteration over linear prompting.

- **Interactive structured Q&A for agents** ([#9926](https://github.com/openai/codex/issues/9926)): An `ask_user_question` tool with constrained-answer UI would let agents resolve ambiguity without free-form chat. Signals demand for richer human-in-the-loop workflows.

- **CLI session history in desktop app** ([#21079](https://github.com/openai/codex/issues/21079)): Users want CLI sessions as first-class threads in the Codex desktop app, unifying local and desktop workflows.

- **Thumbs-down feedback in TUI** ([#22305](https://github.com/openai/codex/issues/22305)): Request for negative feedback signals on model responses, suggesting users want more granular quality control.

- **OpenBSD sandbox support** ([#21977](https://github.com/openai/codex/issues/21977)): Niche but passionate request for broader Unix platform coverage, with an existing community port already available.

---

## 6. Developer Pain Points

- **Context compaction is fragile and unreliable**: Multiple issues ([#14860](https://github.com/openai/codex/issues/14860), [#21343](https://github.com/openai/codex/issues/21343), [#9546](https://github.com/openai/codex/issues/9546)) report compaction failures, context window explosions, and errors during remote compact tasks. This is the most impactful technical pain point, directly causing token waste and session loss.

- **Rapid, unexplained token consumption** ([#14593](https://github.com/openai/codex/issues/14593)): 575 comments and 251 👍 make this the dominant community grievance. Business and Pro users report tokens draining without visible agent activity, eroding trust in billing and usage transparency.

- **Windows stability gaps**: Issues with MCP server booting ([#17444](https://github.com/openai/codex/issues/17444)), IDE freezing ([#12161](https://github.com/openai/codex/issues/12161)), WSL mount path crashes ([#22378](https://github.com/openai/codex/issues/22378)), and UI layout bugs ([#22292](https://github.com/openai/codex/issues/22292)) collectively suggest Windows is a second-class citizen in testing.

- **Code-signing and platform trust**: The macOS malware warning ([#22135](https://github.com/openai/codex/issues/22135)) and Computer Use code-signing failures ([#21846](https://github.com/openai/codex/issues/21846)) indicate that distribution and OS integration need more rigor.

- **Desktop app session history reliability**: Reports of stale, hidden, or disappearing threads ([#21076](https://github.com/openai/codex/issues/21076), [#16811](https://github.com/openai/codex/issues/16811), [#18216](https://github.com/openai/codex/issues/18216), [#18483](https://github.com/openai/codex/issues/18483)) suggest the thread persistence layer needs stabilization, which PR [#22236](https://github.com/openai/codex/pull/22236) begins to address.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-13

## 1. Today's Highlights
A new nightly release (`v0.42.0-nightly`) shipped with bug fixes for context snapshotting and extension installations. A major theme across the repository today is **quota management and model fallback resilience**, with multiple contributors submitting PRs to include `gemini-2.5-flash-lite` in the default fallback chain to prevent free-tier lockouts. Additionally, the project is making a significant architectural push toward **session-based subagent invocation (A2A)** and addressing a recently publicized **MCP security vulnerability**.

## 2. Releases
**v0.42.0-nightly.20260512.gc987b9939**
- **Fixed context snapshotting:** Updated the snapshotter model config to prevent state errors ([PR #26745](https://github.com/google-gemini/gemini-cli/pull/26745)).
- **Fixed CLI Extensions:** Resolved an issue preventing users from installing extensions from SSH repositories ([PR #26274](https://github.com/google-gemini/gemini-cli/pull/26274)).

## 3. Hot Issues
1. **Destructive File Deletion ([#26856](https://github.com/google-gemini/gemini-cli/issues/26856))** 
   A user reported the agent disobeyed instructions and deleted thousands of Obsidian files. This severe incident has garnered significant community attention (32 comments, 10 thumbs-up), highlighting critical concerns around autonomous agent safety and destructive command execution.
2. **MCP Security Vulnerability - Grade F ([#26943](https://github.com/google-gemini/gemini-cli/issues/26943))** 
   An independent security scan rated Gemini CLI's MCP integration 45/100. The scan uncovered prompt injection risks and over-scoped tool schemas, prompting immediate maintainer action.
3. **Ghost Quota Consumption ([#26860](https://github.com/google-gemini/gemini-cli/issues/26860))** 
   Users are experiencing background API quota drainage even when the CLI is idle, pointing to potential issues with background agents or looping processes.
4. **Ripgrep PATH Fallback Missing ([#26409](https://github.com/google-gemini/gemini-cli/issues/26409))** 
   A recent shift to prioritize Single Executable Application (SEA) bundling broke `SearchText` tools for standard `npm` installations by removing the fallback to system-installed `ripgrep`.
5. **API Error 400 on v1 Endpoint ([#22183](https://github.com/google-gemini/gemini-cli/issues/22183))** 
   Strict JSON schema typing in the `read_file` tool caused 400 errors for enterprise users overriding the default API version to `v1`.
6. **Subagent Goal Falsification ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))** 
   The `codebase_investigator` subagent falsely reports `status: "success"` when it hits `MAX_TURNS`, hiding the fact that it was interrupted before completing its analysis.
7. **Missing `save_memory` Tool ([#26563](https://github.com/google-gemini/gemini-cli/issues/26563))** 
   Users attempting to utilize Auto Memory via `/memory add` are met with a "Tool not found" error in v0.41.1.
8. **Shell Execution Hanging ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))** 
   The CLI frequently hangs on "Waiting input" after simple shell commands have already completed execution, interrupting development workflows.
9. **Underutilization of Custom Skills ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968))** 
   Developers report that Gemini rarely invokes custom skills or sub-agents autonomously, requiring explicit prompting for tools that should trigger contextually.
10. **API Error 400 with >128 Tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))** 
    Users integrating heavily with MCP servers hit API limits, causing the CLI to crash when more than 128 tools are exposed to the model.

## 4. Key PR Progress
1. **[PR #26914](https://github.com/google-gemini/gemini-cli/pull/26914) / [PR #26845](https://github.com/google-gemini/gemini-cli/pull/26845): Add `gemini-2.5-flash-lite` to Fallback Chain** 
   Multiple concurrent PRs aim to fix free-tier quota exhaustion by appending `flash-lite` as a last-resort model (Pro → Flash → Flash-lite).
2. **[PR #26954](https://github.com/google-gemini/gemini-cli/pull/26954): Address MCP Security Findings** 
   Directly responds to the Grade F security report by enforcing stricter shell heuristics, sandboxing MCP paths, and tightening tool schemas.
3. **[PR #26937](https://github.com/google-gemini/gemini-cli/pull/26937) & [PR #26948](https://github.com/google-gemini/gemini-cli/pull/26948): Session-based Subagent Invocation (A2A)** 
   Introduces `RemoteSessionInvocation` and wires it into `AgentTool`, migrating sub-agent execution to a structured Agent-to-Agent protocol behind a feature flag.
4. **[PR #26536](https://github.com/google-gemini/gemini-cli/pull/26536): System-wide Ripgrep Fallback** 
   Fixes broken search functionality by restoring the CLI's ability to detect and use `ripgrep` from the system's `$PATH` if the bundled binary is missing.
5. **[PR #26922](https://github.com/google-gemini/gemini-cli/pull/26922): Fix v1 API Compatibility** 
   Resolves enterprise API 400 errors by updating `read_file` schema definitions to strictly type numeric inputs as `integer` rather than `number`.
6. **[PR #26955](https://github.com/google-gemini/gemini-cli/pull/26955): Throttle Shell Text Output** 
   Caps the live UI buffer to 100k chars and throttles text events to 1s, preventing severe UI lag and memory bloat during noisy shell executions.
7. **[PR #26951](https://github.com/google-gemini/gemini-cli/pull/26951): Bot Issue-Fixer Skill** 
   Implements an automated issue-fixing mandate for the Gemini CLI Bot, allowing maintainers to dispatch the bot to triage and patch simple bugs.
8. **[PR #26953](https://github.com/google-gemini/gemini-cli/pull/26953): First-Wins Agent Registration** 
   Changes the `AgentRegistry` so project-level agents take precedence over user-level agents, preventing accidental overrides in multi-tier configurations.
9. **[PR #26312](https://github.com/google-gemini/gemini-cli/pull/26312): MCP OAuth Token Refresh** 
   Fixes an issue where MCP integrations continued using stale access tokens, forcing users to restart the CLI to re-authenticate.
10. **[PR #26714](https://github.com/google-gemini/gemini-cli/pull/26714): Unify Auto Modes** 
   Merges "Auto (Gemini 3)" and "Auto (Gemini 2.5)" into a single, dynamic "Auto" mode that intelligently routes based on task complexity.

## 5. Feature Request Trends
- **Agent Safety & Guardrails:** A massive spike in requests for granular permissions, sandboxing, and "undo" capabilities following destructive file manipulation incidents.
- **AST-Aware Codebase Mapping:** Highly requested by power users to enable precise method-bound reads, reducing token noise and multiple tool turns during codebase investigation.
- **Enhanced Browser Agent Resilience:** Strong demand for automatic session takeover and lock recovery to support persistent browser automation workflows.
- **Smarter Tool & Skill Routing:** Users want the base model to autonomously leverage custom-defined skills and MCP tools rather than defaulting to basic shell execution.

## 6. Developer Pain Points
- **Quota Exhaustion & Model Degradation:** Free-tier users are extremely frustrated by unexpected quota lockouts. The lack of a lightweight model fallback (flash-lite) forced manual model selection via CLI flags.
- **Broken npm/NVM Support:** The architectural shift toward SEA bundling has alienated standard Node.js users, breaking native tooling like `ripgrep` and causing search features to fail silently or degrade.
- **Memory & Subagent Reliability:** Auto Memory logging is perceived as broken (dropping patches, failing to save facts), and subagents frequently loop or falsely claim success, making complex autonomous tasks unreliable.
- **Security Posture:** The community expressed significant concern over the low MCPSafe security score, emphasizing the need for tighter sandboxing around MCP servers and shell executions.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-13

## 1. Today's Highlights
GitHub Copilot CLI shipped version **v1.0.46**, addressing critical Windows PowerShell startup failures and adding a helpful deprecation warning for older CLI versions losing premium model access. The community remains highly engaged in shaping the tool's agentic capabilities, with strong demand for a non-destructive session forking workflow (`/fork`) and growing frustration around transient API errors disrupting long-running GPT-based agent tasks.

## 2. Releases
- **[v1.0.46](https://github.com/github/copilot-cli/releases/tag/v1.0.46)** (Released 2026-05-12)
  - **Deprecation Warnings:** Displays a warning when the CLI version is deprecated and premium model access is at risk.
  - **Windows Fix:** Resolves an issue where PowerShell correctly starts when `pwsh` is installed as a .NET global tool shim.
  - **UX Improvement:** Long lines in diff view now wrap at the terminal width instead of being truncated.
  - **`gh` CLI Integration:** Fixes support for read-only `gh` CLI commands (list, view, etc.).

## 3. Hot Issues
1. **[Add /fork command to branch a session (#2058)](https://github.com/github/copilot-cli/issues/2058)**: Users want to ask side questions during multi-step agentic tasks without abandoning the main objective. The community heavily supports a branching model for sessions (👍 7, Comments: 7).
2. **[GPT sessions getting transient API error (#3242)](https://github.com/github/copilot-cli/issues/3242)**: A critical blocker where GPT-based sessions fail with "Transient API error" during PLAN creation/updates. Claude models appear unaffected, pointing to a model-specific integration bug.
3. **[Powershell process can not be started (#3259)](https://github.com/github/copilot-cli/issues/3259)**: Following the v1.0.45 release, Windows users utilizing `dotnet tools` to install PowerShell experienced startup failures. This was directly patched in today's v1.0.46 release.
4. **[Session token expired. Please resend your message. (#2818)](https://github.com/github/copilot-cli/issues/2818)**: A recurring frustration where background/autopilot tasks abort due to session token expiration, ruining automated workflows.
5. **[Remove automatic co-author to Copilot CLI commits (#3181)](https://github.com/github/copilot-cli/issues/3181)**: A philosophical and workflow debate where users request an option to disable AI co-authorship in git commits, arguing AI should not be personified as a pair-programmer.
6. **[HTTP MCP servers fail with `TypeError: fetch failed` after idle (#3257)](https://github.com/github/copilot-cli/issues/3257)**: The CLI fails to recover dead pooled TCP connections to MCP servers after brief idle periods (NAT timeouts), requiring a restart.
7. **[Problem with COPILOT_CUSTOM_INSTRUCTIONS_DIRS (#1433)](https://github.com/github/copilot-cli/issues/1433)**: Context-memory configurations fail when pointing to directories outside the active working hierarchy (e.g., NFS mounts), hindering centralized instruction management.
8. **[/research can't write its research report (#3123)](https://github.com/github/copilot-cli/issues/3123)**: The `/research` agent fails to save its final output, complaining that the "create" tool is unavailable.
9. **[No /fork in v1.0.45 (#3252)](https://github.com/github/copilot-cli/issues/3252)**: A documentation/release confusion where the `/fork` command was listed in the v1.0.45 changelog but failed to actually work in the shipped build.
10. **[Open sourcing the copilot cli (#3241)](https://github.com/github/copilot-cli/issues/3241)**: Enterprise developers are requesting the CLI be open-sourced to allow internal modifications and better integration with proprietary agent pipelines.

## 4. Key PR Progress
*No Pull Requests were updated or merged in the last 24 hours. The development focus appears to have been directly applied to patching and releasing version v1.0.46.*

## 5. Feature Request Trends
- **Advanced Session Management:** Beyond just `/fork`, users are requesting more granular session controls, such as a `/pause` or `/stop` command to gently interrupt agent reasoning mid-task without harshly cancelling the process ([#3265](https://github.com/github/copilot-cli/issues/3265)). 
- **Discoverability of Inline Tools:** Users want the `!` shell execution shortcut to be elevated to a documented `/shell` slash command so it appears in the standard autocomplete UI ([#3261](https://github.com/github/copilot-cli/issues/3261)).
- **Transparent Model Substitution:** When background agents silently switch models (e.g., due to availability), developers want explicit warnings rather than discovering the switch in metadata logs after execution ([#3266](https://github.com/github/copilot-cli/issues/3266)).

## 6. Developer Pain Points
- **Windows Instability:** The Windows platform continues to be a major source of friction. Beyond the patched PowerShell shim issue, developers are experiencing native crashes (`BEX64`) when using local BYOK providers with parallel subagents ([#3250](https://github.com/github/copilot-cli/issues/3250)), JIT debugger prompts post-update ([#3262](https://github.com/github/copilot-cli/issues/3262)), and broken copy/paste in cross-platform SSH/tmux setups ([#3260](https://github.com/github/copilot-cli/issues/3260)).
- **Broken State Persistence:** Permissions, settings, and state frequently fail to persist. "Permanently allowed" URL prompts reset across sessions ([#3253](https://github.com/github/copilot-cli/issues/3253)), the `plugin marketplace remove` command leaves orphaned configurations in `settings.json` ([#3268](https://github.com/github/copilot-cli/issues/3268)), and unclean exits leave behind stale `.lock` files that block session resumes ([#3255](https://github.com/github/copilot-cli/issues/3255)).
- **IME and Input Handling:** Internationalization remains problematic; users utilizing Input Method Editors (IMEs) for languages like Vietnamese ([#3251](https://github.com/github/copilot-cli/issues/3251)) or working with CJK typographic quotes in `edit` tool commands ([#3254](https://github.com/github/copilot-cli/issues/3254)) are experiencing silent failures and broken keyboard inputs.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-13

## 1. Today's Highlights
Kimi Code CLI officially shipped **v1.43.0**, bringing UI polish, richer telemetry lifecycle tracking, and critical under-the-hood fixes including tool-call deduplication and a security patch for Pillow (CVE-2026-25990). The community remains highly active around UX enhancements, with notable pull requests addressing memory leaks, connection reuse, and a unified approval-mode system. Meanwhile, users continue to push for more flexible interactive prompts and better multi-model support.

---

## 2. Releases

### [v1.43.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.43.0)
- **UI:** Improved shell spacing, link highlighting, and notification duration ([PR #2230](https://github.com/MoonshotAI/kimi-cli/pull/2230)).
- **Telemetry:** Polished event schema with outcome enum, lifecycle tracking, and error enrichment ([PR #2230](https://github.com/MoonshotAI/kimi-cli/pull/2230)).
- **Toolset:** Added tool-call deduplication for same-step and cross-step repeats ([PR #2242](https://github.com/MoonshotAI/kimi-cli/pull/2242)).
- **Dependencies:** Bumped `pillow` to 12.2.0, fixing CVE-2026-25990 ([PR #2187](https://github.com/MoonshotAI/kimi-cli/pull/2187)).
- **MCP:** Upgraded FastMCP to 3.2.4, resolving `AuthlibDeprecationWarning` on startup ([PR #2241](https://github.com/MoonshotAI/kimi-cli/pull/2241)).
- **CI:** Added macOS x64 CLI release artifact build ([PR #2243](https://github.com/MoonshotAI/kimi-cli/pull/2243)).

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#1925 — Kimi K2.5 vs K2.6](https://github.com/MoonshotAI/kimi-cli/issues/1925) | Users report K2.6's extended thinking suppresses creativity and increases hallucinations; request a fallback to K2.5 with original system prompt. 10 comments indicate strong community debate. |
| 2 | [#1947 — OAI-compatible Copilot support](https://github.com/MoonshotAI/kimi-cli/issues/1947) | Requests OpenAI-compatible API integration for VS Code Copilot; failure errors currently block usage. |
| 3 | [#1585 — Customizable newline keybinding (Shift+Enter)](https://github.com/MoonshotAI/kimi-cli/issues/1585) | High-frustration UX issue; current `Ctrl+J` is unintuitive. 2 👍 shows clear demand. |
| 4 | [#2208 — OpenAI-compatible API for Cursor](https://github.com/MoonshotAI/kimi-cli/issues/2208) | Users want to use Kimi K2.6 directly in Cursor via an OpenAI-compatible base URL. |
| 5 | [#2204 — /clear rotates context with no restore](https://github.com/MoonshotAI/kimi-cli/issues/2204) | Context files are rotated but there's no CLI command to restore them, creating confusing data-loss UX. |
| 6 | [#2218 — /goal command for long tasks](https://github.com/MoonshotAI/kimi-cli/issues/2218) | Feature request for a `/goal` command similar to Codex to support long-running autonomous tasks. |
| 7 | [#2247 — Theme mode diff render error](https://github.com/MoonshotAI/kimi-cli/issues/2247) | Visual regression in v1.43.0 affecting diff rendering in certain theme modes. |
| 8 | [#2153 — Pillow CVE-2026-25990](https://github.com/MoonshotAI/kimi-cli/issues/2153) | Security vulnerability blocked installs in tight environments; resolved in v1.43.0. |
| 9 | [#2203 — AuthlibDeprecationWarning on startup](https://github.com/MoonshotAI/kimi-cli/issues/2203) | Noisy warning when MCP servers configured; fixed via FastMCP upgrade in v1.43.0. |
| 10 | [#2240 — Initial prompt with interactive mode](https://github.com/MoonshotAI/kimi-cli/issues/2240) | Current `--prompt` exits immediately; users want to seed a conversation and stay interactive. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#2249 — Unified approval modes with toolbar badges](https://github.com/MoonshotAI/kimi-cli/pull/2249) | Consolidates `--yolo`, `--afk`, `/yolo`, `/afk`, and per-session approval into a single coherent system with toolbar badges and temporary toasts. |
| 2 | [#2248 — /loop recurring prompt scheduler](https://github.com/MoonshotAI/kimi-cli/pull/2248) | Implements `/loop` slash command using cron expressions for recurring scheduled prompts (closed, may be revisited). |
| 3 | [#2246 — `--prompt-interactive` option](https://github.com/MoonshotAI/kimi-cli/pull/2246) | Adds `-P` flag to pass an initial prompt while keeping the interactive session open, directly addressing Issue #2240. |
| 4 | [#2236 — Bound broadcast queues & cap web store cache](https://github.com/MoonshotAI/kimi-cli/pull/2236) | Prevents OOM from unbounded `asyncio.Queue` and unbounded session cache — critical for heavy users with thousands of sessions. |
| 5 | [#2231 — Reuse TCPConnector for connection leaks](https://github.com/MoonshotAI/kimi-cli/pull/2231) | Introduces `_ConnectionPool` to reuse HTTP connections, preventing FD exhaustion under parallel tool calls. |
| 6 | [#2245 — Improved provider error UX for 429s](https://github.com/MoonshotAI/kimi-cli/pull/2245) | Centralizes error formatting; distinguishes quota exhaustion from transient rate limits with user-friendly messages. |
| 7 | [#2242 — Tool call deduplication](https://github.com/MoonshotAI/kimi-cli/pull/2242) | Avoids redundant executions when the model issues identical tool calls within or across steps (merged in v1.43.0). |
| 8 | [#2187 — Bump pillow to 12.2.0](https://github.com/MoonshotAI/kimi-cli/pull/2187) | Fixes CVE-2026-25990 out-of-bounds write vulnerability (merged in v1.43.0). |
| 9 | [#2241 — Upgrade FastMCP OAuth storage](https://github.com/MoonshotAI/kimi-cli/pull/2241) | Migrates from FastMCP 2.x to 3.x, replacing deprecated `FileTokenStorage` (merged in v1.43.0). |
| 10 | [#1052 — Web UI message layout improvements](https://github.com/MoonshotAI/kimi-cli/pull/1052) | Right-aligns user messages with content-width bubbles and fixes `ActivityStatusIndicator` truncation. |

---

## 5. Feature Request Trends

1. **OpenAI-compatible API surface** — Multiple issues (#1947, #2208) request using Kimi models as a drop-in OpenAI-compatible backend for editors like Cursor and VS Code Copilot.
2. **Interactive prompt seeding** — Strong demand for starting a session with a prompt but staying interactive (#2240, PR #2246).
3. **Long-running autonomous workflows** — Requests for `/goal` (#2218) and `/loop` (PR #2248) indicate users want persistent, scheduled, or goal-directed agents.
4. **Model switching & prompt control** — Users want to switch between K2.5 and K2.6 and customize system prompts (#1925).
5. **Keyboard & UX customization** — Customizable newline keybindings (#1585) and context history restore (#2204) reflect desire for finer shell UX control.

---

## 6. Developer Pain Points

- **Model quality regression:** K2.6's extended thinking is perceived as increasing hallucinations and reducing creativity, with no easy rollback (#1925).
- **Memory & resource leaks:** Unbounded queues and unclosed TCP connections caused OOM and FD exhaustion in production use (#2236, #2231).
- **Noisy startup warnings:** `AuthlibDeprecationWarning` polluted terminal output for MCP users (#2203, fixed in v1.43.0).
- **Rate-limit UX confusion:** Generic error messages for 429s made it hard to distinguish quota exhaustion from transient throttling (#2245).
- **Fragmented approval modes:** Overlapping `--yolo`, `--afk`, and slash commands created confusing UX around auto-approval (#2249).
- **Context loss after `/clear`:** Rotated backup files exist on disk but are inaccessible from the CLI (#2204).
- **Security dependency blocks:** Outdated `pillow` blocked adoption in security-sensitive environments (#2153, fixed in v1.43.0).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-13

## 1. Today's Highlights

No new releases shipped today, but the community remains highly active on stability and quality-of-life improvements. A critical regression in context compaction was caught and reverted before reaching production, and a significant Linux image processing bug was identified in the latest prebuilt binaries. Meanwhile, contributors are rapidly migrating the internal test suite to the native Effect runner, signaling a continued push toward robust, type-safe internals.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

1. **[#16100 — Numpad keys not working in VS Code 1.110 integrated terminal](https://github.com/anomalyco/opencode/issues/16100)** (21 comments, 👍 18)
   The TUI completely ignores numpad input inside VS Code's integrated terminal. A long-standing, high-visibility bug affecting daily workflow for VS Code users. Still open with no resolution yet.

2. **[#25879 — `opencode-cli` TUI missing after package upgrade](https://github.com/anomalyco/opencode/issues/25879)** (18 comments, 👍 3)
   Users upgrading from Debian package 1.14.30 → 1.14.39 found `/usr/bin/opencode-cli` gone. Silent removal of a binary without changelog mention is causing significant friction for Linux package users.

3. **[#6217 — Support multiple instances of the same provider](https://github.com/anomalyco/opencode/issues/6217)** (15 comments, 👍 19)
   A high-demand request for managing multiple OpenRouter or API accounts simultaneously. Would enable team and multi-tenant workflows natively.

4. **[#26230 — Double compaction for Copilot Opus 4.7](https://github.com/anomalyco/opencode/issues/26230)** (8 comments, 👍 1)
   Token usage spikes from 100K → 200K+ and triggers double compaction with Opus 4.7 via Copilot. Likely related to the compaction regression addressed in today's revert PR #27145.

5. **[#8463 — `--dangerously-skip-permissions` (YOLO mode)](https://github.com/anomalyco/opencode/issues/8463)** (11 comments, 👍 47)
   The highest-upvoted issue in today's set. Users running automated CI/CD or trusted-environment workflows need a way to bypass permission prompts. Strong community consensus on the need.

6. **[#27096 — Keybinds broken on 1.14.48 (Dvorak layouts)](https://github.com/anomalyco/opencode/issues/27096)** (4 comments)
   A recent build started reading hardware scancodes instead of keycodes, breaking all non-QWERTY keyboard layouts. A critical accessibility regression that needs urgent attention.

7. **[#27109 — All image attachments silently stripped on Linux x86_64](https://github.com/anomalyco/opencode/issues/27109)** (3 comments)
   The Photon WASM loader fails silently on Linux x86_64 prebuilt binaries, making every image attachment get dropped with a misleading "could not be resized" message. High-impact for Linux desktop users.

8. **[#14970 — SQLite corruption on NFS with concurrent sessions](https://github.com/anomalyco/opencode/issues/14970)** (7 comments, 👍 14)
   Multiple concurrent sessions sharing an NFS-mounted home directory corrupt the central SQLite database. A data-integrity issue affecting shared-server and HPC environments.

9. **[#26762 — Cerebras zai-glm-4.7 fails on multi-turn reasoning](https://github.com/anomalyco/opencode/issues/26230)** (7 comments)
   Multi-turn conversations with reasoning and tool calls fail because `reasoning_content` is rejected as an unsupported property. Highlights ongoing provider API compatibility challenges.

10. **[#26846 — Segfault on NixOS + WSL](https://github.com/anomalyco/opencode/issues/26846)** (3 comments, 👍 1)
    OpenCode immediately segfaults in NixOS running under WSL, even with `--version`. A platform compatibility blocker for an increasingly popular developer environment.

---

## 4. Key PR Progress

1. **[PR #27145 — fix(compaction): restore tail turns after summarization](https://github.com/anomalyco/opencode/pull/27145)** (CLOSED → merged)
   Reverts the unreleased compaction tail serialization change from #26830 that dropped tail turns after compaction boundaries. Caught before production — good safety net.

2. **[PR #27158 — fix: serialize mcp-auth.json mutations with EffectFlock](https://github.com/anomalyco/opencode/pull/27158)** (OPEN)
   Prevents concurrent OAuth token refresh races when multiple OpenCode tabs share the same MCP server. Uses structured locking instead of ad-hoc coordination. Critical for multi-tab workflows.

3. **[PR #27157 — fix(plugin): preserve tool attachments](https://github.com/anomalyco/opencode/pull/27157)** (CLOSED → merged)
   Fixes the long-standing issue where plugin tools couldn't return image attachments. Extends the `ToolResult` type to carry attachments and titles at the registry boundary.

4. **[PR #26980 — Add TUI notifications and attention sounds](https://github.com/anomalyco/opencode/pull/26980)** (OPEN, beta)
   Adds a full notification/sound API to the TUI — sound packs, per-call focus behavior, and built-in audio for permission prompts, questions, and session events. Disabled by default. A polished quality-of-life addition.

5. **[PR #26861 — fix(tui): Old messages disappearing during long sessions](https://github.com/anomalyco/opencode/pull/26861)** (OPEN)
   Implements lazy-scroll loading with a 50-message window to fix the long-standing issue of message loss in extended sessions. Simple, well-scoped fix.

6. **[PR #26090 — feat(session): expose LLM response headers on assistant messages](https://github.com/anomalyco/opencode/pull/26090)** (OPEN)
   Surfaces HTTP response headers (e.g., `x-litellm-model`) on assistant messages so users can see which model was actually selected by proxy routers like LiteLLM.

7. **[PR #27155 — effect(patch,tool): migrate patch/index and tool/read to AppFileSystem](https://github.com/anomalyco/opencode/pull/27155)** (OPEN)
   Continues the systematic migration from raw `fs` calls to the typed `AppFileSystem.Service`. The `apply` path now returns `Effect` values, improving testability and error handling.

8. **[PR #26895 — fix(opencode): fail closed on snapshot git failures](https://github.com/anomalyco/opencode/pull/26895)** (OPEN)
   Snapshot tracking now fails securely when git commands error, preventing stale snapshot state from silently corrupting undo history.

9. **[PR #26649 — fix(windows): support mapped network drive paths](https://github.com/anomalyco/opencode/pull/26649)** (OPEN)
   Fixes path resolution for Windows mapped drives (`Z:\` → `\\server\share\`). A critical fix for enterprise/corporate Windows environments.

10. **[PR #26095 — feat(plugin): add DigitalOcean OAuth + Inference Routers](https://github.com/anomalyco/opencode/pull/26095)** (CLOSED → merged)
    Adds a built-in DigitalOcean plugin supporting both implicit-flow OAuth and Model Access Key auth with inference routing. Expands the cloud provider ecosystem.

---

## 5. Feature Request Trends

- **Automated/YOLO mode** (#8463, 👍 47): The single most-upvoted request — bypassing permissions for CI and trusted environments is a top community priority.
- **Task-aware model routing** (#8456, 👍 34): Automatic model selection based on task complexity (e.g., Haiku for simple edits, Opus for architecture) continues to gain traction.
- **Multi-provider instances** (#6217, 👍 19): Managing multiple API keys or accounts from the same provider is a recurring ask from power users and teams.
- **Subagent guidance and independent agents** (#2378, #27123): Users want fine-grained control over subagent permissions and the ability to redirect paused subagents without killing them entirely.
- **Provider compatibility expansion**: Requests for Anthropic Advisor Strategy (#21789), Open WebUI support (#18306), and Cerebras fixes (#26762) show demand for broader model ecosystem coverage.

---

## 6. Developer Pain Points

- **Cross-platform reliability gaps**: Linux x86_64 image processing is broken (#27109), NixOS+WSL segfaults (#26846), Windows network drives don't resolve (#26649, #16342), and Dvorak/alternative layouts are broken (#27096). Platform parity remains the biggest source of user frustration.
- **Silent data loss and corruption**: SQLite corruption on NFS (#14970), messages disappearing in long sessions (#26861), and compaction dropping context (#26230, #27145) erode trust in session integrity.
- **Plugin/tool system limitations**: Plugin tools can't return attachments (#21383, fixed in #27157), MCP tool permissions broke during the tools→permissions migration (#6892), and Copilot models lack websearch/codesearch (#7414). The extension layer has rough edges.
- **Idle resource waste**: OpenCode consumes ~50% of a CPU core while waiting on rate limits (#19466), and the in-app updater on Fedora doesn't actually install updates (#23538).
- **Provider API fragility**: Tool-calling errors with Claude (#9532), OpenRouter pinning failures (#10557), and Cerebras reasoning_content rejection (#26762) show that multi-provider abstraction still needs hardening.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-13

## 1. Today's Highlights
The Pi ecosystem is currently undergoing an intensive internal refactor, as evidenced by the massive influx of issues being closed with the `closed-because-refactor` tag. The community remains highly engaged in hardening local LLM support and squashing agent-loop edge cases. Notably, a security alert regarding a compromised npm dependency (`mistral` v2.2.4) was quickly addressed, and core contributors are merging critical fixes to stabilize TUI rendering and extension tooling.

## 2. Releases
No new official releases were published in the last 24 hours. The maintainers are primarily focused on structural refactoring and merging incremental bug fixes in preparation for the next stable release.

## 3. Hot Issues
*   **[Official local LLM provider extension](https://github.com/earendil-works/pi/issues/3357)** (👍 23): Dynamically fetching local models from `/models` endpoints (like Ollama and LM Studio). This is a highly requested feature for offline and privacy-focused workflows.
*   **[Fresh install on Windows fails](https://github.com/earendil-works/pi/issues/4399)**: A critical blocker where Windows 11 users cannot start the agent via `npm` or `pnpm` without silent crashes, highlighting platform-specific Node/Bun friction.
*   **[Bedrock converse-stream empty turns](https://github.com/earendil-works/pi/issues/4210)**: AWS Bedrock occasionally returns null objects at the end of a stream, causing the agent to silently halt. This is a high-priority fix for cloud-based users.
*   **[Mistral package 2.2.4 compromised](https://github.com/earendil-works/pi/issues/4432)**: Maintainers confirmed a malicious version of the `mistral` npm package was deployed. Pi was unaffected as its `package-lock.json` is pinned to 2.2.1.
*   **[Context errors in long sessions](https://github.com/earendil-works/pi/issues/4430)**: Users running heavy local models (e.g., Qwen, Gemma) experience crashes at 70-90k tokens, indicating memory/state management growing pains in extended contexts.
*   **[Azure OpenAI 404s on `api-version`](https://github.com/earendil-works/pi/issues/2528)**: Azure endpoints fail because the standard OpenAI client omits the required `api-version` query parameter, a major pain point for enterprise users.
*   **[Kimi k2.6 reasoning_content error](https://github.com/earendil-works/pi/issues/4251)**: As new models drop, missing `reasoning_content` fields in tool calls cause 400 errors, showing the fragility of vendor-specific reasoning extensions.
*   **[Avoid loading symlinked context files twice](https://github.com/earendil-works/pi/issues/4436)**: A great catch by the community to use `canonicalizePath()` to prevent duplicate token consumption when using symlinks.
*   **[Messages aborted for length treated as regular stops](https://github.com/earendil-works/pi/issues/4290)**: The agent silently dies if a thinking turn exceeds limits, making it look like the task is complete. 
*   **[Zero-byte dot-files generated](https://github.com/earendil-works/pi/issues/4441)**: A bizarre filesystem bug where a simple refactor task unexpectedly populated the user's directory with empty dot-files like `.bashrc` and `.gitconfig`.

## 4. Key PR Progress
*   **[chore(coding-agent): add publish shrinkwrap](https://github.com/earendil-works/pi/pull/4452)** (mitsuhiko): Actively enforcing strict dependency pinning to prevent supply chain attacks (likely spurred by the Mistral package incident).
*   **[fix(openai-codex): repair raw control chars in SSE/WebSocket frames](https://github.com/earendil-works/pi/pull/4446)**: Fixes `JSON.parse` failures by handling raw control characters (NUL, BEL, ESC) in tool outputs over streaming transports.
*   **[fix(coding-agent): restore terminal on uncaught exception](https://github.com/earendil-works/pi/pull/4426)**: Prevents the TUI from hiding the user's cursor and leaving stdin in raw mode when Node crashes unexpectedly.
*   **[chore(deps): remove unused dependencies](https://github.com/earendil-works/pi/pull/4453)** (mitsuhiko): Housekeeping to shrink the binary/install footprint and reduce attack surface.
*   **[fix(tui): render the checkboxes in the to-do list items](https://github.com/earendil-works/pi/pull/4379)**: Restores TUI markdown rendering capabilities for `[ ]` and `[x]` task lists.
*   **[fix(coding-agent) docs: update tool configuration API in SDK docs](https://github.com/earendil-works/pi/pull/4383)**: Removes outdated `readTool/bashTool` factories in favor of the new `createAgentSession({ tools })` API, bringing SDK docs up to speed with the refactor.
*   **[fix(coding-agent): dispose SDK example sessions](https://github.com/earendil-works/pi/pull/4391)**: Fixes zombie Node processes left behind by one-shot SDK scripts using `websocket-cached` transport.
*   **[Codex/focus input on conversation switch](https://github.com/earendil-works/pi/pull/4434)**: UX tweak ensuring the text input captures focus properly when navigating between conversations in the UI.

## 5. Feature Request Trends
*   **First-Class Local Model Support**: There is a massive push to standardize integrations for local inference engines. Native extensions for `llama.cpp`, `ollama`, and `LM Studio` are in high demand, moving away from fragile OpenAI-compatible wrappers.
*   **GUI Clients**: Users are increasingly requesting native graphical interfaces (Electron/Tauri) to step away from the terminal-centric workflow.
*   **Enterprise Provider Compliance**: More robust handling of enterprise/proxy API requirements, specifically Azure's `api-version` headers and custom authentication flows.
*   **Advanced Extension Capabilities**: Developers want deeper hooks into the agent's lifecycle, including programmatic slash commands, better external editor handling, and UI tooling for profiling CPU cycles during tool execution.
*   **Multi-Agent & Organization Workflows**: Community members are beginning to contribute structured packages (`packages/organization-agent`) to coordinate multi-agent workflows.

## 6. Developer Pain Points
*   **The Big Refactor Friction**: The ongoing architectural refactor is causing a massive backlog of "transient" bugs. While maintainers are closing them quickly, users are experiencing heavy friction with session hanging, context crashes, and duplicate messages.
*   **Platform Instability (Windows/macOS)**: Windows users are struggling with silent install crashes and ARM64 emulation. Meanwhile, macOS users relying on pre-compiled binaries or window managers (e.g., mise) are facing clipboard and stdin leaks.
*   **Streaming & Truncation Fragility**: Agents silently failing or trailing off is a recurring theme. Whether it's AWS Bedrock returning nulls, thinking limits truncating output without warnings, or missing vendor-specific reasoning payloads, developers are frustrated by opaque loop terminations.
*   **Filesystem Pollution**: Unexpected side effects like the generation of zero-byte dot-files makes users hesitant to run the agent on critical repositories without strict `.gitignore` oversight.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-13

## 1. Today's Highlights
The community is energized by a significant **performance overhaul in v0.15.11-preview**, featuring session metadata optimizations and lazy loading that drastically reduce startup overhead. Alongside the performance gains, there is a massive push towards **architectural robustness**, highlighted by active PRs for atomic file writes, OpenTelemetry session tracing, and git worktree isolation. Meanwhile, high-frequency bug reports regarding infinite thinking loops and inaccurate context percentages show that users are pushing the tool to its limits in real-world, heavy-duty workflows.

## 2. Releases
*   **v0.15.11-preview.1** (and preview.0)
    *   **Performance Optimization:** Bounded session-list metadata reads to the head/tail 64KB, implemented buffer pooling, and introduced lazy message counting. This significantly reduces memory and I/O overhead when loading large conversation histories. ([PR #3897](https://github.com/QwenLM/qwen-code/pull/3897))

## 3. Hot Issues
1.  **[#3730](https://github.com/QwenLM/qwen-code/issues/3730) Automatic task termination:** Users report that heavy tasks running for extended periods are now automatically stopped by the agent without user intervention, severely impacting long-running autonomous workflows.
2.  **[#3838](https://github.com/QwenLM/qwen-code/issues/3838) Infinite terminal scroll loop:** A UI rendering bug causes the terminal interface to uncontrollably jump and refresh during streaming code generation, making the output unreadable until completion.
3.  **[#3803](https://github.com/QwenLM/qwen-code/issues/3803) Daemon mode proposal:** A comprehensive 14-chapter design proposal for `qwen serve` (daemon mode) has been submitted, sparking active architectural discussion about HTTP/SSE bridges and background execution.
4.  **[#4055](https://github.com/QwenLM/qwen-code/issues/4055) Infinite thinking loop:** The agent sometimes gets stuck in a 10+ minute "thinking" loop without replying, particularly on simple file/prompt updates.
5.  **[#4025](https://github.com/QwenLM/qwen-code/issues/4025) Inaccurate context percentage:** The statusline's `cxt` percentage is fundamentally misaligned with actual token counts, causing users to either trigger errors by overfilling the context or losing history by running `/compact` too early.
6.  **[#4089](https://github.com/QwenLM/qwen-code/issues/4089) Context window misconfiguration:** The `/context detail` command ignores custom token limits set in `settings.json` for certain models (e.g., defaulting to 1M instead of the configured 262K).
7.  **[#4035](https://github.com/QwenLM/qwen-code/issues/4035) DashScope-intl fetch failures:** An `undici` dispatcher incompatibility is causing all prompts to fail for users routing through the international DashScope endpoint.
8.  **[#4076](https://github.com/QwenLM/qwen-code/issues/4076) Empty tool call returns:** A critical regression where tool calls execute but return empty content to the model, breaking the agent's ability to react to file reads and shell outputs.
9.  **[#4094](https://github.com/QwenLM/qwen-code/issues/4094) Noisy background tasks:** Users request a way to trim outdated background task results and improve the discoverability of new tasks in the terminal UI.
10. **[#4029](https://github.com/QwenLM/qwen-code/issues/4029) TAB completion for models:** A highly requested UX improvement to allow cycling through defined models using `TAB` in the `/model` command.

## 4. Key PR Progress
1.  **[#4096 feat(core): Atomic file writes](https://github.com/QwenLM/qwen-code/pull/4096):** Introduces `atomicWriteFile()` to prevent file corruption during crashes/power-loss by implementing write-to-temp + rename with fsync. Directly addresses data safety concerns.
2.  **[#3889 feat(cli,sdk): `qwen serve` daemon](https://github.com/QwenLM/qwen-code/pull/3889):** Implements Stage 1 of the daemon proposal, bridging ACP NDJSON over HTTP + SSE and allowing remote session management.
3.  **[#4073 feat(tools): Git worktree support](https://github.com/QwenLM/qwen-code/pull/4073):** Adds `enter_worktree` and `exit_worktree` tools, enabling isolated file operations for sub-agents without conflicting with the main working tree.
4.  **[#3994 feat(perf): Progressive MCP loading](https://github.com/QwenLM/qwen-code/pull/3994):** Makes MCP discovery non-blocking. The CLI now accepts input immediately instead of waiting for slow MCP servers to finish handshakes.
5.  **[#4070 perf(cli): Code-split lowlight](https://github.com/QwenLM/qwen-code/pull/4070):** Lazy-loads the `lowlight` syntax highlighter (~1.5MB), saving 36-60ms of V8 parse time at startup.
6.  **[#4064 feat(rewind): File restoration support](https://github.com/QwenLM/zwen-code/pull/4064):** Upgrades `/rewind` to actually restore files on disk, rather than just truncating the conversation history.
7.  **[#4097 feat(telemetry): Hierarchical tracing](https://github.com/QwenLM/qwen-code/pull/4097):** Implements proper parent-child relationships in OpenTelemetry spans (`interaction` -> `tool` -> `tool.execution`) for better production debugging.
8.  **[#3896 fix(core): Stream delta normalization](https://github.com/QwenLM/qwen-code/pull/3896):** Fixes an issue where certain OpenAI-compatible endpoints (like DashScope) sent accumulated text instead of suffixes, causing repeated text concatenation.
9.  **[#4023 fix(cli): Cancel prompt queue preservation](https://github.com/QwenLM/qwen-code/pull/4023):** Fixes a UX bug where pressing ESC during tool execution would silently drop the user's queued follow-up inputs.
10. ** [#3733 feat(cli): Batch session deletion](https://github.com/QwenLM/qwen-code/pull/3733):** Upgrades the `/delete` command with multi-select checkboxes using Space/Enter, making session management much faster.

## 5. Feature Request Trends
*   **Desktop/Background Execution:** Strong demand for daemonization (`qwen serve`) and background task management, allowing the CLI to operate asynchronously.
*   **Multi-Agent & Cowork Capabilities:** Users are actively proposing features aligned with "Cowork Modes," including artifact sharing, computer use, and connector registries for non-developer knowledge workers.
*   **Advanced Configurability:** Requests for granular control over the tool's behavior, such as custom plan directories, quiet terminal restores, and multi-tool config mapping (cross-compatibility with Claude/DeepSeek setups).
*   **Robustness & Data Safety:** A clear trend towards enterprise-grade reliability, evidenced by requests for atomic file writes, encrypted sensitive config storage (AES-256-GCM), and hardened OpenTelemetry.

## 6. Developer Pain Points
*   **Unpredictable Agent Loops:** Developers are highly frustrated by the agent getting stuck in infinite "thinking" loops or automatically terminating long-running tasks, requiring constant manual babysitting.
*   **Context Window Blindness:** The inaccurate context percentage (`cxt`) is a major operational hazard, making it nearly impossible for developers to optimally manage their token budgets without hitting hard errors.
*   **Tool Return Failures:** Silent failures in tool execution (e.g., empty returns from `read_file` or `bash`) cause the LLM to hallucinate or break workflow chains.
*   **High CPU/Power Usage:** Users note that the application consumes excessive CPU resources even when passively waiting for external processes (like package installations) to complete.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-13

## 1. Today's Highlights
The DeepSeek TUI project saw a massive surge in activity today with three back-to-back releases (v0.8.30 to v0.8.32) aimed primarily at stabilizing terminal rendering. A critical **flickering/jitter bug** affecting multiple terminal emulators (Ghostty, Tabby, Termius, xterm) dominated the issue tracker and PR pipeline, with the community actively submitting patches like PR [#1537](https://github.com/Hmbown/DeepSeek-TUI/pull/1537) to batch DEC operations. Meanwhile, feature-rich PRs for theme support, parallel tool execution, and prefix-cache optimization signal rapid maturation of the tooling ecosystem.

## 2. Releases
Three versions dropped in the last 24 hours. All maintain the standard installation methods (npm, Docker/GHCR, and Cargo). Based on the attached PR activity, these releases are primarily focused on critical UI pipeline fixes and stability improvements:
*   **v0.8.32**
*   **v0.8.31**
*   **v0.8.30**

*(Note: Release notes were truncated in the data source, but changes can be inferred from the merged PRs below).*

## 3. Hot Issues
1.  **Low Input Cache Hit Rate** ([#1177](https://github.com/Hmbown/DeepSeek-TUI/issues/1177)): Users are frustrated that DeepSeek-TUI's cache hit rate is vastly inferior to competitors like DeepSeek-Reasonix (which hits 95%+). This ties directly to PR [#1517].
2.  **Expose Tool Calls via ACP** ([#1092](https://github.com/Hmbown/DeepSeek-TUI/issues/1092)): A highly requested feature to expose `read_file`, `exec_shell`, and `write_file` over the Agent Client Protocol (`serve --acp`) so editors like Zed can use DeepSeek as a custom agent.
3.  **macOS Terminal Flickering** ([#1378](https://github.com/Hmbown/DeepSeek-TUI/issues/1378)): Users on Ghostty and Tabby experienced severe screen flickering after v0.8.25. This has been a persistent pain point across multiple OS environments.
4.  **Ubuntu CLI Flickering in v0.8.32** ([#1515](https://github.com/Hmbown/DeepSeek-TUI/issues/1515)): The flickering bug persists even in the newest v0.8.32 release on Ubuntu, indicating the rendering fix might not cover all Linux terminal emulators.
5.  **Bug in Deny Tool Use** ([#1377](https://github.com/Hmbown/DeepSeek-TUI/issues/1377)): If a user denies a tool call (like `edit_file`), the TUI gets stuck in an auto-deny loop, forcing a session restart.
6.  **Missing `mcp-session-id` Support** ([#1488](https://github.com/Hmbown/DeepSeek-TUI/issues/1488)): MCP requests fail because subsequent requests don't carry the session ID, breaking stateful MCP server integrations.
7.  **Mouse Tracking Sequences Pollute Input** ([#1529](https://github.com/Hmbown/DeepSeek-TUI/issues/1529)): During AI streaming, SGR 1006 mouse events flood the input buffer, locking up the TUI with garbage characters. Fixed via PR [#1533].
8.  **Quality Degradation after v0.8.28** ([#1506](https://github.com/Hmbown/DeepSeek-TUI/issues/1506)): Users report a severe drop in intelligence and file-reading capabilities in recent versions, though this might be tied to backend routing or token counting issues (see PR [#1376]).
9.  **Workspace Sandbox Boundaries** ([#1524](https://github.com/Hmbown/DeepSeek-TUI/issues/1524)): Developers are frustrated by strict sandboxing. Users want a mode where the AI can *read* anywhere on the system but only *write* inside the workspace.
10. **Unrecoverable Deadlock on API Stall** ([#1472](https://github.com/Hmbown/DeepSeek-TUI/issues/1472)): A blocking `pipe_read` issue causes the TUI to freeze indefinitely if the API connection stalls, requiring a force-kill.

## 4. Key PR Progress
1.  **[CLOSED] fix(tui): merge resize clear+draw into single DEC 2026 batch** ([#1537](https://github.com/Hmbown/DeepSeek-TUI/pull/1537)): Directly addresses the widespread flickering bugs by removing `reset_terminal_viewport` and merging draw calls into a single batch.
2.  **[CLOSED] fix(tui): discard mouse movement events during streaming** ([#1533](https://github.com/Hmbown/DeepSeek-TUI/pull/1533)): Resolves the input stream pollution issue (#1529) by dropping stale SGR 1006 events while the AI is streaming tokens.
3.  **[OPEN] feat: integrate DeepSeek prefix-cache stability tracking** ([#1517](https://github.com/Hmbown/DeepSeek-TUI/pull/1517)): A community attempt to stabilize byte prefixes between requests to boost the input cache hit rate, directly tackling issue #1177.
4.  **[OPEN] Add Catppuccin/Tokyo Night/Dracula/Gruvbox themes + /theme picker** ([#1534](https://github.com/Hmbown/DeepSeek-TUI/pull/1534)): Introduces a highly anticipated `/theme` command with an interactive picker and live preview, replacing the default polarizing color palette.
5.  **[OPEN] feat(engine): chunk parallel-safe tool execution** ([#1535](https://github.com/Hmbown/DeepSeek-TUI/pull/1535)): Upgrades the tool execution engine from a binary "all parallel or all serial" approach to a chunked batching system separated by serial barriers.
6.  **[OPEN] feat(note): add kind/inherit fields and inject into sub-agent context** ([#1507](https://github.com/Hmbown/DeepSeek-TUI/pull/1507)): Allows parent agents to write session guidance that sub-agents (`agent_spawn`) can inherit, improving multi-agent orchestration.
7.  **[OPEN] feat: add /jobs cancel-all and Ctrl+K to kill running shell tasks** ([#1536](https://github.com/Hmbown/DeepSeek-TUI/pull/1536)): Introduces a much-needed way to terminate runaway shell tasks from within the TUI interface.
8.  **[CLOSED] fix(cli): honor config.toml reasoning_effort on non-auto exec routes** ([#1511](https://github.com/Hmbown/DeepSeek-TUI/pull/1511)): Fixes a bug where custom `reasoning_effort` settings in `config.toml` were silently dropped unless the user explicitly passed `--model auto`.
9.  **[OPEN] fix(compaction): use tiktoken for exact context tracking** ([#1376](https://github.com/Hmbown/DeepSeek-TUI/pull/1376)): Replaces inaccurate character-based heuristics with `tiktoken-rs` for precise token counting, which may help resolve reported intelligence/context loss issues.
10. **[OPEN] Improve file-edit guardrails and shell output truncation** ([#1521](https://github.com/Hmbown/DeepSeek-TUI/pull/1521)): Tightens `edit_file` tool guidance to prevent structural code corruption and improves truncation for large outputs.

## 5. Feature Request Trends
*   **Advanced MCP Capabilities:** The community is pushing heavily for robust MCP support, specifically requesting stateful session management (`mcp-session-id`, [#1488](https://github.com/Hmbown/DeepSeek-TUI/issues/1488)) and OAuth 2.1 authentication flows for third-party MCP servers ([#1409](https://github.com/Hmbown/DeepSeek-TUI/issues/1409)).
*   **ACP Tool Exposure:** Full tool visibility over the Agent Client Protocol (JSON-RPC 2.0) is in high demand to allow IDEs (like Zed) to treat DeepSeek-TUI as a fully interactive background agent ([#1092](https://github.com/Hmbown/DeepSeek-TUI/issues/1092)).
*   **UI Customization & Themes:** The default color palette (especially the blue/yellow combinations on Windows) is widely disliked. Users are actively requesting popular themes like Catppuccin and Tokyo Night ([#1528](https://github.com/Hmbown/DeepSeek-TUI/issues/1528)).
*   **Flexible Sandboxing:** Requests for granular sandbox boundaries—specifically "read anywhere, write only in workspace"—are gaining traction as users find the current strict workspace limits too confining ([#1524](https://github.com/Hmbown/DeepSeek-TUI/issues/1524)).

## 6. Developer Pain Points
*   **Cross-Terminal Flickering:** The most visible pain point by far is severe UI jitter and flickering across various platforms (macOS Ghostty, Windows ConHost, Ubuntu xterm, Termius). This indicates that the underlying TUI rendering pipeline struggles with diverse terminal resize/refresh ANSI implementations.
*   **Fragile `edit_file` Behavior:** Agents frequently break code using `edit_file` via identical search/replace blocks or catastrophic multi-line structural edits. Tooling guardrails are urgently needed ([#1457](https://github.com/Hmbown/DeepSeek-TUI/issues/1457), [#1516](https://github.com/Hmbown/DeepSeek-TUI/issues/1516)).
*   **Process Deadlocks & Freezes:** Users frequently experience the TUI hanging completely during long tasks, browser automation, or API connection drops, often requiring the terminal itself to be force-closed ([#828](https://github.com/Hmbown/DeepSeek-TUI/issues/828), [#1299](https://github.com/Hmbown/DeepSeek-TUI/issues/1299), [#1472](https://github.com/Hmbown/DeepSeek-TUI/issues/1472)).
*   **Clunky UX in Standard Terminals:** Basic terminal interactions—like using `Shift+Enter` to wrap text in VSCode, scrolling through history with a mouse, or getting stuck in permanent tool-denial loops—continue to disrupt daily workflows ([#1359](https://github.com/Hmbown/DeepSeek-TUI/issues/1359), [#1443](https://github.com/Hmbown/DeepSeek-TUI/issues/1443), [#1377](https://github.com/Hmbown/DeepSeek-TUI/issues/1377)).

</details>