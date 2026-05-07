# AI CLI Tools Community Digest 2026-05-08

> Generated: 2026-05-07 22:18 UTC | Tools covered: 8

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

Here is the cross-tool comparison report for the AI CLI tools ecosystem based on the community digests from 2026-05-08.

### 1. Ecosystem Overview
The AI CLI tools landscape is currently characterized by rapid iteration, aggressive platform expansion, and the growing pains of cross-platform and multi-provider support. Major players like Anthropic, OpenAI, and Google are heavily pushing agent orchestration, memory management, and tool-use capabilities, while open-source and regional alternatives aggressively compete on provider extensibility and open architectures. As these tools transition from experimental novelties to core production infrastructure, developer focus has pivoted heavily toward enterprise-grade reliability—specifically demanding stable non-interactive execution, robust IDE integrations, and predictable token/cost accounting.

### 2. Activity Comparison
Activity levels vary significantly across the ecosystem, with some tools stabilizing while others push major architectural refactors.

| Tool | New Issues / Hot Issues Tracked | Key PRs Updated | Release Status (May 8, 2024) |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 Hot Issues | 4 | Quiet (No releases) |
| **OpenAI Codex** | 10 Hot Issues | 10 | **v0.129.0** (Stable) & v0.130.0-alpha.1 |
| **Gemini CLI** | 10 Hot Issues | 10 | **v0.42.0-nightly** |
| **GitHub Copilot CLI** | 10 Hot Issues | 0 | **v1.0.44-0 to v1.0.44-2** (Pre-releases) |
| **Kimi Code CLI** | 8 Hot Issues | 7 | Quiet (No releases) |
| **OpenCode** | 10 Hot Issues | 10 | **v1.14.40** & **v1.14.41** (Patches) |
| **Pi** | 10 Hot Issues | 10 | **v0.74.0** & **v0.73.1** (Migration) |
| **Qwen Code** | 10 Hot Issues | 10 | **v0.15.7** & **v0.15.8** (Patches) |

### 3. Shared Feature Directions
Despite different backers and architectures, the community needs across these tools are converging on several critical fronts:

*   **Advanced Agent Orchestration & Observability:** Users are frustrated by all-or-nothing agent controls and lack of transparency in sub-agents.
    *   *Tools:* Claude Code, Copilot CLI, Gemini CLI, Qwen Code.
    *   *Specific Needs:* Pause/cancel/steer capabilities for running agents, sub-agent telemetry, and fixing "false success" states when agents hit max turns.
*   **Cross-Provider Normalization & BYOK Resiliency:** As users route requests through OpenAI-compatible endpoints, local models (Ollama/llama.cpp), or enterprise gateways (Azure/Bedrock), they are hitting streaming and context boundaries.
    *   *Tools:* Copilot CLI, OpenCode, Pi, Qwen Code.
    *   *Specific Needs:* Proper handling of stream deltas (normalizing cumulative vs. suffix text), fixing cross-provider thinking/reasoning block corruptions, and passing custom payload configurations (`extraBody`).
*   **Enterprise CI/CD & Non-Interactive Stability:** Automation workflows relying on non-interactive prompts (`-p` flags) or stdout piping are breaking.
    *   *Tools:* Copilot CLI, Pi, Qwen Code.
    *   *Specific Needs:* Ensuring CLI execution exits properly without hanging, fixing stdout pipe race conditions, and token-level JSON streaming for headless integrations.
*   **Terminal UI Modernization (Vim & Accessibility):** Power users are demanding richer and more standard terminal interactions.
    *   *Tools:* OpenAI Codex, Copilot CLI, Kimi Code.
    *   *Specific Needs:* Native Vim editing modes, text object support, and standard keybinds like `Shift+Enter` for multi-line input.

### 4. Differentiation Analysis
*   **Vendor Lock-in vs. Neutrality:** 
    *   *Claude Code & Gemini CLI* act primarily as gated clients to their proprietary models, focusing heavily on native sandbox safety, memory systems (Gemini), and proprietary context compaction.
    *   *OpenCode & Pi* differentiate as model-agnostic/Bring-Your-Own-Key (BYOK) ecosystems, dedicating heavy engineering resources to bridging OpenAI, Anthropic, and local LLM protocols.
*   **Platform vs. Framework Approach:**
    *   *OpenAI Codex & GitHub Copilot CLI* blur the lines between IDE extensions, desktop apps, and pure CLIs, resulting in massive CI pipelines dedicated to OS-specific stabilization (e.g., Windows filesystem pressure).
    *   *Qwen Code* is pushing a "remote-control" headless architecture, treating the CLI less as a standalone app and more as a daemon that external UIs or scripts can manipulate via WebSockets.
*   **Local & Global Focus:**
    *   *Kimi Code* shows a strong focus on internationalization (e.g., Chinese IME fixes) and multimodal inputs.
    *   *Pi* targets the terminal-enthusiast niche (supporting Kitty graphics protocols, terminal multiplexers like Ghostty/cmux) and hyper-optimized startup times via extension caching.

### 5. Community Momentum & Maturity
*   **Rapid Iterators (OpenAI, Qwen, OpenCode):** These projects showed high throughput on May 8th, merging double-digit PRs and shipping rapid patches. They are actively responding to daily user friction but also introducing regressions that require immediate hotfixes.
*   **Platform Builders (Google Gemini, Anthropic Claude):** These communities are dealing with architectural growing pains. Their issue trackers are dominated by enterprise-scale friction—billing errors, proxy failures, and broad filesystem guardrails—suggesting an enterprise user base pushing the tools to their limits.
*   **Stabilizers (GitHub Copilot CLI, Kimi Code, Pi):** Copilot and Kimi are working through fundamental UX kinks (input handling, pre-release pipe failures) before finalizing their 1.0.x branches. Pi is undergoing structural rebranding and optimizing core extension loading.

### 6. Trend Signals
*   **Windows is the Weakest Link:** Nearly every tool reported critical Windows regressions, from clipboard failures and PTY rendering to UNC path crashes and build race conditions. The ecosystem is struggling to standardize terminal behaviors on Windows compared to POSIX systems.
*   **Context Compaction is Breaking Point:** Token management—specifically context window auto-compaction—is a major sore spot across tools. Handling high-context models like Opus 4.7 or GPT-5.5 frequently leads to duplicate compactions, context loss, or hard session crashes, representing a fundamental architectural bottleneck in AI coding.
*   **CLI-to-CLI Interoperability:** The emergence of MCP (Model Context Protocol) and ACP (Agent Client Protocol) shows that developers increasingly expect these agents to talk to *each other*. Issues around MCP server boot failures and OAuth authentication friction indicate the ecosystem is moving rapidly toward composable, multi-agent workflows. 
*   **Cost & Quota Trust is Faltering:** Several top-voted issues across Claude, Gemini, and Copilot involve dashboard quota miscalculations and over-billing. As AI coding tools become daily drivers, transparent, real-time token metrics (tokens/second, exact context usage) are becoming mandatory for user retention.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of: 2026-05-08 | Source: [github.com/anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking

Although raw comment counts are not fully exposed in the current dataset, the following Pull Requests represent the most actively maintained, updated, and substantial community-submitted Skills based on update frequency, PR descriptions, and cross-references in Issues.

| Rank | Skill | Author | Status | Link |
|:---:|-------|--------|--------|------|
| 1 | **skill-quality-analyzer & skill-security-analyzer** | `eovdieu` | 🟢 OPEN | [PR #83](https://github.com/anthropics/skills/pull/83) |
| 2 | **frontend-design (revision)** | `justinwetch` | 🟢 OPEN | [PR #210](https://github.com/anthropics/skills/pull/210) |
| 3 | **document-typography** | `PGTBoos` | 🟢 OPEN | [PR #514](https://github.com/anthropics/skills/pull/514) |
| 4 | **ODT (OpenDocument)** | `GitHubNewbie0` | 🟢 OPEN | [PR #486](https://github.com/anthropics/skills/pull/486) |
| 5 | **ServiceNow Platform Suite** | `Vanka07` | 🟢 OPEN | [PR #568](https://github.com/anthropics/skills/pull/568) |
| 6 | **AppDeploy** | `avimak` | 🟢 OPEN | [PR #360](https://github.com/anthropics/skills/pull/360) |
| 7 | **testing-patterns** | `4444J99` | 🟢 OPEN | [PR #723](https://github.com/anthropics/skills/pull/723) |
| 8 | **AURELION Skill Suite** | `Chase-Key` | 🟢 OPEN | [PR #444](https://github.com/anthropics/skills/pull/444) |

### Skill Summaries & Discussion Highlights

**① skill-quality-analyzer & skill-security-analyzer** ([PR #83](https://github.com/anthropics/skills/pull/83))
Meta-skills that evaluate other Skills across five quality dimensions (structure, documentation, security, etc.). Open since Nov 2025, this is one of the longest-lived PRs and signals strong community appetite for **Skill-linting and self-improving tooling**.

**② frontend-design (revision)** ([PR #210](https://github.com/anthropics/skills/pull/210))
A significant rewrite of the existing frontend-design Skill to improve actionability and reduce ambiguity. Highlights the community's focus on making Skills more **directive and executable** rather than educational.

**③ document-typography** ([PR #514](https://github.com/anthropics/skills/pull/514))
Addresses orphan/widow lines, numbering misalignment, and other typographic issues in AI-generated documents. Fills a universal pain point—**output formatting quality**—that affects every user.

**④ ODT (OpenDocument Format)** ([PR #486](https://github.com/anthropics/skills/pull/486))
Enables creation, template-filling, parsing, and HTML conversion for `.odt`/`.ods` files. Extends document Skills beyond Microsoft formats into **open-source/ISO-standard territory**.

**⑤ ServiceNow Platform Suite** ([PR #568](https://github.com/anthropics/skills/pull/568))
A comprehensive enterprise Skill covering ITSM, ITOM, SecOps, HRSD, CSM, SPM, CSDM, and IntegrationHub. Represents the strongest push into **enterprise platform automation**.

**⑥ AppDeploy** ([PR #360](https://github.com/anthropics/skills/pull/360))
Enables Claude to deploy full-stack web apps to public URLs directly. Addresses the **deploy-from-chat** workflow and was updated as recently as 2026-05-04.

**⑦ testing-patterns** ([PR #723](https://github.com/anthropics/skills/pull/723))
Comprehensive testing guidance covering the Testing Trophy model, unit/React/e2e patterns, and CI integration. Responds to demand for **code-quality enforcement Skills**.

**⑧ AURELION Skill Suite** ([PR #444](https://github.com/anthropics/skills/pull/444))
A four-Skill cognitive framework (kernel, advisor, agent, memory) for structured thinking and persistent knowledge management. Most recently updated (2026-05-06), indicating **active development momentum**.

---

## 2. Community Demand Trends

Analysis of the top 15 Issues reveals five clear demand clusters:

| Trend | Signal Issues | What the Community Wants |
|-------|--------------|--------------------------|
| **Org-wide Skill Sharing & Management** | [#228](https://github.com/anthropics/skills/issues/228) (👍7), [#189](https://github.com/anthropics/skills/issues/189) (👍8) | Shared skill libraries within organizations; deduplication of overlapping plugins |
| **Skill Evaluation & Reliability Tooling** | [#202](https://github.com/anthropics/skills/issues/202), [#556](https://github.com/anthropics/skills/issues/556) (👍6) | Better eval tooling (`run_eval.py` fixes), updated skill-creator best practices, reliable trigger mechanisms |
| **Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (👍2), [#412](https://github.com/anthropics/skills/issues/412) | Namespace separation for community vs. official Skills; agent governance patterns |
| **API & Platform Stability** | [#406](https://github.com/anthropics/skills/issues/406) (👍4), [#403](https://github.com/anthropics/skills/issues/403), [#532](https://github.com/anthropics/skills/issues/532) | Fix upload/delete/replace failures; remove `ANTHROPIC_API_KEY` dependency for SSO users |
| **Cross-Platform & Interoperability** | [#29](https://github.com/anthropics/skills/issues/29), [#16](https://github.com/anthropics/skills/issues/16) | AWS Bedrock support; MCP (Model Context Protocol) exposure for Skills |

**Key Insight:** The most upvoted issues are not about new Skill *types* but about **infrastructure—sharing, deduplication, security, and platform reliability**.

---

## 3. High-Potential Pending Skills

These open PRs have strong indicators (recent updates, substantial scope, bug-fix nature) suggesting they are likely to merge:

| PR | Skill | Why It's Close | Link |
|----|-------|----------------|------|
| **#538** | PDF case-sensitivity fix | Pure bug fix, 8 references corrected; low risk | [PR #538](https://github.com/anthropics/skills/pull/538) |
| **#541** | DOCX tracked-change ID collision | Fixes document corruption; narrow, well-scoped | [PR #541](https://github.com/anthropics/skills/pull/541) |
| **#539** | skill-creator YAML validation | Pre-parse validation; directly addresses [#202](https://github.com/anthropics/skills/issues/202) | [PR #539](https://github.com/anthropics/skills/pull/539) |
| **#509** | CONTRIBUTING.md | Addresses community health gap ([#452](https://github.com/anthropics/skills/issues/452)); infrastructure, not a Skill | [PR #509](https://github.com/anthropics/skills/pull/509) |
| **#360** | AppDeploy | Active through May 2026; addresses deploy-from-chat demand | [PR #360](https://github.com/anthropics/skills/pull/360) |
| **#444** | AURELION Suite | Updated 2026-05-06; comprehensive memory/cognition framework | [PR #444](https://github.com/anthropics/skills/pull/444) |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for robust Skills infrastructure—reliable sharing/deduplication mechanisms, security namespaces, and stable APIs—rather than any single new Skill category.**

---

# Claude Code Community Digest — 2026-05-08

## 1. Today's Highlights

It's a quiet day on the release front with no new versions shipped in the last 24 hours, but the community remains highly active on the issue tracker. A critical macOS Tahoe sandbox regression is drawing urgent attention, as Claude Code v2.1.132+ appears to lock files in `~/Documents` so that non-Anthropic applications cannot read them. Meanwhile, Windows users continue to report a disproportionately high share of crashes, clipboard failures, and proxy incompatibilities, suggesting the platform still needs stabilization work.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Hot Issues

| # | Issue | Why it matters |
|---|-------|----------------|
| 1 | [#57024 — macOS Tahoe sandbox regression: files written by Claude Code become unreadable by other apps](https://github.com/anthropics/claude-code/issues/57024) | **Critical regression.** After updating to v2.1.132, every file Claude Code touches under `~/Documents/` becomes inaccessible to iTerm2, Terminal.app, and other non-Anthropic apps. Marked as a regression against v2.1.128. |
| 2 | [#27302 — Support multiple connector accounts (same connector, different accounts)](https://github.com/anthropics/claude-code/issues/27302) | The top-voted open enhancement (+221 👍, 168 comments) keeps gaining traction. Enterprise users who manage multiple accounts for the same connector (e.g., several GitHub orgs) still have no workaround. |
| 3 | [#57096 — "Out of extra usage" rejection while Max plan shows 35% remaining](https://github.com/anthropics/claude-code/issues/57096) | A cost/billing accuracy bug that erodes trust. Users on the Max plan are being denied service despite the dashboard showing plenty of quota. |
| 4 | [#50252 — Linux behind HTTP CONNECT proxy: Bun runtime fetch race condition + 3 cascading regressions](https://github.com/anthropics/claude-code/issues/50252) | Detailed `strace`-level root-cause analysis shows the Bun runtime's `fetch()` hangs intermittently through proxies, a blocker for corporate/air-gapped environments. |
| 5 | [#53961 — macOS crashes from Claude running `find /`](https://github.com/anthropics/claude-code/issues/53961) | Claude's Bash tool executing a broad `find /` causes kernel-level resource exhaustion requiring daily reboots on macOS. Highlights the need for smarter filesystem traversal guardrails. |
| 6 | [#42797 — Auto-mode ignores `permissions.ask` setting](https://github.com/anthropics/claude-code/issues/42797) | A permissions bypass where auto-mode silently skips user-configured `ask` prompts, undermining trust in the permission model (+12 👍). |
| 7 | [#48806 — Chrome + Control Chrome failures in Cowork Mode](https://github.com/anthropics/claude-code/issues/48806) | Cowork Mode's browser integration is unreliable on macOS, breaking a key collaborative workflow. 18 comments indicate broad reproduction. |
| 8 | [#57065 — Full crash on UNC network paths (Windows)](https://github.com/anthropics/claude-code/issues/57065) | Any UNC path (e.g., `\\192.168.1.93\tmp\file`) immediately kills the process. A hard blocker for teams using network shares on Windows. |
| 9 | [#57098 — Alt-V "No image found in clipboard" on Windows 11](https://github.com/anthropics/claude-code/issues/57098) | Clipboard image pasting is non-functional on Windows 11, even with images confirmed present. Especially affects AWS Bedrock users. |
| 10 | [#34476 — No way to cancel/stop spawned agent team without killing the session](https://github.com/anthropics/claude-code/issues/34476) | When Claude spawns parallel agents, users have no "stop" control — the only option is nuking the entire session, losing all context. |

## 4. Key PR Progress

Only 4 PRs saw updates today, but each addresses a real documentation or correctness gap:

1. **[#57108 — Fix hookify enabled boolean parsing](https://github.com/anthropics/claude-code/pull/57108)** — Parses the `enabled` frontmatter field as a strict boolean, accepting standard YAML variants (`true/false`, `yes/no`, `on/off`, `1/0`) and rejecting invalid truthy strings. Adds unit tests. A clean correctness fix for the hooks system.

2. **[#57046 — docs: clarify hook blocking exit code](https://github.com/anthropics/claude-code/pull/57046)** — Clarifies that only exit code `2` blocks hook execution; other non-zero codes are non-blocking. Fixes [#44707](https://github.com/anthropics/claude-code/issues/44707). Essential reading for anyone writing custom hooks.

3. **[#53949 — Update HackerOne links in SECURITY.md](https://github.com/anthropics/claude-code/pull/53949)** — Housekeeping: updates outdated HackerOne submission and program page URLs. Closed/merged.

4. **[#56334 — docs: Add Windows Developer Mode note for symlink support](https://github.com/anthropics/claude-code/pull/56334)** — Adds a troubleshooting note that Windows requires Developer Mode for symlinks, addressing silent "0 tokens" failures from background agents (refs [#55263](https://github.com/anthropics/claude-code/issues/55263)).

## 5. Feature Request Trends

Several clear themes emerge from the issue tracker:

- **Multi-account / multi-tenant support** — [#27302](https://github.com/anthropics/claude-code/issues/27302) remains the #1 requested feature. Enterprise users need to switch between accounts on the same connector without re-authenticating.
- **TUI polish and configurability** — Requests to hide inline diffs ([#37951](https://github.com/anthropics/claude-code/issues/37951)), improve the diff view to show only session changes ([#18541](https://github.com/anthropics/claude-code/issues/18541)), and fix terminal cursor interference ([#674](https://github.com/anthropics/claude-code/issues/674)) all point to a community that wants finer control over the terminal UI.
- **Agent orchestration controls** — Users want the ability to pause, cancel, or steer spawned agents mid-flight ([#34476](https://github.com/anthropics/claude-code/issues/34476), [#57082](https://github.com/anthropics/claude-code/issues/57082)) rather than the current all-or-nothing session kill.
- **Cost transparency and quota accuracy** — Multiple issues ([#57096](https://github.com/anthropics/claude-code/issues/57096), [#51633](https://github.com/anthropics/claude-code/issues/51633)) report mismatches between actual availability and what the UI reports.

## 6. Developer Pain Points

- **Windows is a second-class citizen.** UNC path crashes ([#57065](https://github.com/anthropics/claude-code/issues/57065)), clipboard failures ([#57098](https://github.com/anthropics/claude-code/issues/57098)), Unicode rendering ([#34247](https://github.com/anthropics/claude-code/issues/34247)), proxy issues, and symlink requirements without clear errors ([#56334](https://github.com/anthropics/claude-code/pull/56334)) collectively paint a picture of a platform that needs dedicated stabilization.
- **The duplicate-tag bot is causing harm.** [#19267](https://github.com/anthropics/claude-code/issues/19267) reports that the GitHub bot that auto-tags duplicates is creating "impenetrable webs" of incorrect cross-references, leading to real bugs being auto-closed. The community is frustrated.
- **Proxy/corporate-network support is brittle.** The Bun runtime race condition ([#50252](https://github.com/anthropics/claude-code/issues/50252)) is a blocking issue for anyone behind an HTTP CONNECT proxy, with no workaround available.
- **Permissions model has gaps.** Auto-mode ignoring `permissions.ask` ([#42797](https://github.com/anthropics/claude-code/issues/42797)) and the inability to control spawned agents ([#34476](https://github.com/anthropics/claude-code/issues/34476)) undermine confidence in Claude Code's safety guardrails — a critical concern for production use.
- **Billing/quota display is unreliable.** Users are being locked out despite showing remaining quota ([#57096](https://github.com/anthropics/claude-code/issues/57096)), or seeing zero usage despite heavy activity ([#51633](https://github.com/anthropics/claude-code/issues/51633)). This directly impacts paid users and erodes trust.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-08

## 1. Today's Highlights
A new stable CLI release (v0.129.0) introduces modal Vim editing in the TUI composer and a redesigned workflow resume/fork picker, while the first v0.130.0 alpha lands for early adopters. On the infrastructure side, OpenAI merged a large Windows CI stabilization stack—addressing long-standing race conditions and filesystem pressure—and shipped architectural refactors for MCP tool handling, thread storage, and telemetry. Community activity remains dominated by performance regressions on macOS, Azure compaction failures, and a growing chorus requesting finer-grained IDE/App UX controls.

---

## 2. Releases

- **rust-v0.129.0 (stable)**
  - TUI now supports modal Vim editing in the composer (`/vim`, default-mode config, Vim-specific keymap contexts).
  - Redesigned resume/fork picker, raw scrollback mode, `/ide` context injection, and improved workflow resumption/copy workflows.
- **rust-v0.130.0-alpha.1** — First alpha for the next minor branch; no user-facing changelog yet.
- **rust-v0.129.0-alpha.13–15** — Iterative alpha builds leading up to the stable 0.129.0 cut.

---

## 3. Hot Issues

1. **[#16231 — High CPU usage on macOS after VS Code extension update](https://github.com/openai/codex/issues/16231)** *(65 comments · 60 👍)*
   A regression in extension v26.325.31654 causes sustained high CPU and thermals on Apple Silicon (M5 Pro / macOS Tahoe). With 60 thumbs-up it is the top-voted open issue; users report fans spinning continuously during normal coding.

2. **[#12564 — Allow renaming task/thread titles](https://github.com/openai/codex/issues/12564)** *(38 comments · 82 👍)*
   The most up-voted enhancement request. History navigation is painful without editable titles; the community is asking for a simple rename capability in the sidebar.

3. **[#12161 — Codex IDE keeps getting stuck on "Thinking"](https://github.com/openai/codex/issues/12161)** *(28 comments)*
   A persistent Windows bug where the extension stalls indefinitely. Affects VS Code, Cursor, and Windsurf, suggesting a shared protocol-layer hang rather than a single editor issue.

4. **[#17444 — Booting MCP Server (Windows)](https://github.com/openai/codex/issues/17444)** *(21 comments)*
   Users on Windows 10/11 can't reliably start MCP servers from the CLI, blocking agent-to-agent workflows such as Codex-as-MCP inside Claude Code.

5. **[#20552 — Toggle File Tree unreliable in Codex App](https://github.com/openai/codex/issues/20552)** *(21 comments)*
   The macOS desktop app's `View > Toggle File Tree` command often silently fails to reveal the tree, eroding trust in the new native app shell.

6. **[#19009 — Compact fails in CLI and VS Code Extension (Azure)](https://github.com/openai/codex/issues/19009)** *(15 comments)*
   Remote compaction against Azure OpenAI / Foundry endpoints errors out, making long-context sessions unsustainable for enterprise users.

7. **[#21569 — gpt-5.5 compact_remote high-demand failures on Azure](https://github.com/openai/codex/issues/21569)** *(4 comments)*
   A newer, more specific Azure report: compaction reliably fails at ~244 k tokens due to capacity limits, stalling CLI sessions.

8. **[#21383 — Vim composer: support inner-word text objects (`ciw`, `diw`, `yiw`)](https://github.com/openai/codex/issues/21383)** *(6 comments)*
   Building on the brand-new Vim mode, power users immediately requested standard Vim text objects—showing strong adoption intent for the feature shipped yesterday.

9. **[#16099 — High GPU usage when Codex App is on-screen (macOS)](https://github.com/openai/codex/issues/16099)** *(7 comments · 8 👍)*
   Separate from the CPU issue, the desktop app consumes 50–90 % GPU simply when visible, suggesting unthrottled rendering or animation loops.

10. **[#20988 — Codex searches the web too frequently and at unnecessary times](https://github.com/openai/codex/issues/20988)** *(5 comments, closed)*
    Users report the model defaults to web search even for local-knowledgeable tasks, burning credits and adding latency. Closed—likely addressed in a recent model update—but indicative of ongoing model-behavior tuning sensitivity.

---

## 4. Key PR Progress

| PR | Author | Summary |
|----|--------|---------|
| [#21587 — Fix agent job cancellation races](https://github.com/openai/codex/pull/21587) | starr-openai | Makes job stop cancellation atomic and worker assignment conditional, eliminating a core source of flaky CI runs. Base of the 5-PR Windows stabilization stack. |
| [#21588 — Harden Windows-sensitive tests](https://github.com/openai/codex/pull/21588) | starr-openai | Makes realtime, sandbox, resume, and metadata-denial tests deterministic on Windows; avoids PowerShell module autoload noise in sandbox output. |
| [#21589 — Tune Windows nextest scheduling](https://github.com/openai/codex/pull/21589) | starr-openai | Adds configurable thread counts, serializes process-heavy tests, and increases timeouts for arm64 Windows lanes. |
| [#21590 — Use Dev Drive for Windows CI](https://github.com/openai/codex/pull/21590) | starr-openai | Moves temp-heavy paths and Bazel caches to the faster Dev Drive, reducing filesystem pressure on Windows runners. |
| [#21591 — Re-enable Windows sccache in Rust CI](https://github.com/openai/codex/pull/21591) | starr-openai | Re-enables sccache with pinned v0.14.0 and stores cache on Dev Drive, targeting faster and more reliable builds. |
| [#21595 — Simplify MCP tool handler plumbing](https://github.com/openai/codex/pull/21595) | pakrym-oai | Removes dedicated MCP payload variants, legacy `AfterToolUse` translation, and side-channel metadata—making `ToolRegistry` MCP-agnostic. |
| [#21465 — Remove ToolName display helper](https://github.com/openai/codex/pull/21465) | pakrym-oai | Forces structural tool identity comparison instead of string-based matching, preventing subtle routing bugs. |
| [#21596 — Remove remote thread store implementation](https://github.com/openai/codex/pull/21596) | wiltzius-openai | Moves remote thread-store backend and protobuf artifacts to an internal crate, cleaning up the public core API. |
| [#21577 — Add managed hook suppression](https://github.com/openai/codex/pull/21577) | abhinav-oai | Lets admins suppress noisy managed-hook lifecycle notifications without allowing user config to hide local/plugin hooks. |
| [#21574 — Add Cargo profiling build profile](https://github.com/openai/codex/pull/21574) | zanie-oai *(closed/merged)* | Adds a `profiling` profile that cuts clean build time from 18 min to 13 min and incremental from 12 min to 6 min by relaxing LTO, accelerating perf work. |

---

## 5. Feature Request Trends

- **Vim power-user features** — After the v0.129.0 Vim composer launch, requests immediately expanded to text objects (`ciw`, `diw`), visual-line mode, and custom `.vimrc`-style configs ([#21383](https://github.com/openai/codex/issues/21383)).
- **Session & history management** — Renameable threads ([#12564](https://github.com/openai/codex/issues/12564)), better session sync between CLI and App ([#21513](https://github.com/openai/codex/issues/21513)), and disk-based session rehydration for MCP use ([#12596](https://github.com/openai/codex/issues/12596)) are consistently requested.
- **Git commit signing & repo integration** — Native GPG/SSH commit signing in Codex Web/App ([#1281](https://github.com/openai/codex/issues/1281)) and better WSL repo detection ([#17991](https://github.com/openai/codex/issues/17991)) remain open asks.
- **Rich content rendering** — Inline LaTeX math ([#14985](https://github.com/openai/codex/issues/14985)) and proper RTL/Farsi support ([#21563](https://github.com/openai/codex/issues/21563)) reflect a global user base pushing beyond ASCII-centric UX.
- **Plugin & skill extensibility** — Editable plugin installs ([#16252](https://github.com/openai/codex/issues/16252)) and less opinionated default skills ([#16127](https://github.com/openai/codex/issues/16127)) indicate developers want more control over automation behavior.
- **Config portability** — Restore project-level `profiles` in `config.toml` ([#21580](https://github.com/openai/codex/issues/21580)) after a recent removal; users consider this a breaking change.

---

## 6. Developer Pain Points

1. **Platform-specific performance regressions** — High CPU on macOS ([#16231](https://github.com/openai/codex/issues/16231)) and high GPU ([#16099](https://github.com/openai/codex/issues/16099)) are the top-voted bugs. Users on Apple Silicon feel the extension became unusable after a recent update.
2. **Azure/enterprise compaction failures** — Remote compaction reliably errors at high context lengths against Azure OpenAI ([#19009](https://github.com/openai/codex/issues/19009), [#21569](https://github.com/openai/codex/issues/21569)), effectively blocking long-running agent sessions for enterprise customers.
3. **Windows reliability gaps** — MCP server boot failures ([#17444](https://github.com/openai/codex/issues/17444)), "Thinking" hangs ([#12161](https://github.com/openai/codex/issues/12161)), WSL connectivity ([#8814](https://github.com/openai/codex/issues/8814)), and browser-use startup errors ([#19450](https://github.com/openai/codex/issues/19450)) collectively paint a picture of Windows as a second-class citizen that the new CI stack aims to fix.
4. **Model behavior unpredictability** — Excessive web searching ([#20988](https://github.com/openai/codex/issues/20988)) and goal/context loss after mid-turn compaction ([#19910](https://github.com/openai/codex/issues/19910)) erode trust in the agent's autonomy.
5. **General sluggishness** — Multiple reports of slow responses across both the VS Code extension and the Codex App ([#21527](https://github.com/openai/codex/issues/21527)), suggesting back-end capacity or routing issues are affecting perceived latency.

---

*Digest generated from public GitHub data on 2026-05-08. Links point to `github.com/openai/codex`.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-08

## 1. Today's Highlights
The Gemini CLI team pushes towards the **v0.42.0 release** with a new nightly build focusing on non-interactive JSON output and shell safety evaluations. Community and maintainer activity is heavily focused on overhauling the **Auto Memory system** (Addressing silent failures and v1/v2 command overlaps) and refining **CI/CD triage automation** to reduce bot spam and improve issue categorization. Additionally, critical patches were merged to address dependency security (Hono) and Windows PTY rendering bugs.

## 2. Releases
- **[v0.42.0-nightly.20260507.ga809bc7c5](https://github.com/google-gemini/gemini-cli/releases)**
  - **JSON Output Fix:** Fixed an issue providing JSON output for `AgentExecutionStopped` in non-interactive mode.
  - **Safety Evaluations:** Introduced new shell command safety evals to improve agent reliability.

## 3. Hot Issues
1. **[#21256: Agent Performance Bottlenecks](https://github.com/google-gemini/gemini-cli/issues/21256)** 
   *Why it matters:* The highest-commented issue highlights severe performance lags, with users reporting 20-minute wait times for simple string replacements.
2. **[#26211: Google AI Pro Subscription Not Recognized](https://github.com/google-gemini/gemini-cli/issues/26211)**
   *Why it matters:* Users changing their Gmail addresses are unexpectedly dropped to the free tier, breaking their workflows due to quota limits.
3. **[#26563: "save_memory" Tool Not Found](https://github.com/google-gemini/gemini-cli/issues/26563)**
   *Why it matters:* The `/memory add` command throws a confusing error. This is a direct collision between legacy v1 commands and the active development of Memory v2.
4. **[#26525: Deterministic Redaction for Auto Memory](https://github.com/google-gemini/gemini-cli/issues/26525)**
   *Why it matters:* Addresses a critical security gap where the Auto Memory extractor pulls local secrets into the model context *before* attempting to redact them.
5. **[#25166: Shell Execution Gets Stuck "Waiting Input"](/https://github.com/google-gemini/gemini-cli/issues/25166)**
   *Why it matters:* CLI hangs after completing simple commands, requiring manual intervention and interrupting automated workflows.
6. **[#22323: Subagent False "Success" on MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323)**
   *Why it matters:* Agents hitting their max turn limit report a `GOAL` success status, hiding task interruptions and creating false positives in automation.
7. **[#24916: Repeated Permission Prompts](https://github.com/google-gemini/gemini-cli/issues/24916)**
   *Why it matters:* Persistent frustrations with the CLI ignoring "allow for all future sessions" directives, constantly asking for the same file permissions.
8. **[#22745: Investigating AST-Aware File Reads](https://github.com/google-gemini/gemini-cli/issues/22745)**
   *Why it matters:* Maintainers are tracking an architectural shift towards AST-aware code mapping, which could drastically reduce token noise and improve tool accuracy.
9. **[#26659: Auto Memory Empty Inbox Bug](https://github.com/google-gemini/gemini-cli/issues/26659)**
   *Why it matters:* A mismatch where the UI claims memory patches were extracted, but the `/memory inbox` remains empty due to silent patch dropping.
10. **[#21983: Browser Agent Fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**
    *Why it matters:* Linux users on Wayland environments are experiencing hard crashes with the browser subagent.

## 4. Key PR Progress
1. **[#26672: CI Triage Comment Spam Fix](https://github.com/google-gemini/gemini-cli/pull/26672)**
   Fixes the scheduled triage bot posting internal reasoning as public spam on every issue.
2. **[#26675: ACP Mode for Xcode](https://github.com/google-gemini/gemini-cli/pull/26675)**
   Enables the `ask_user` tool in Agent Client Protocol mode to support Xcode human-in-the-loop workflows.
3. **[#26464: Fix Configuration Persistence](https://github.com/google-gemini/gemini-cli/pull/26464)**
   Resolves severe regressions where `settings.json` would silently vanish or revert to defaults during active sessions.
4. **[#26605: Hide Legacy Memory Command](https://github.com/google-gemini/gemini-cli/pull/26605)**
   Cleans up the UX by hiding the broken `/memory add` subcommand when Memory V2 is active.
5. **[#26565: Windows PTY Binary False-Positive](https://github.com/google-gemini/gemini-cli/pull/26565)**
   Fixes an issue where ANSI/VT escape sequences on Windows triggered a false binary detection, halting model output.
6. **[#26432: Improved Auth Error Messages](https://github.com/google-gemini/gemini-cli/pull/26432)**
   Replaces vague stack traces with helpful error messages for missing API keys and HTTP 401s.
7. **[#26655: Snapshotter Improvements](https://github.com/google-gemini/gemini-cli/pull/26655)**
   Core platform update enhancing context snapshotting capabilities.
8. **[#26666: Codebase-Aware Effort Triage](https://github.com/google-gemini/gemini-cli/pull/26666)**
   Upgrades the CI pipeline to automatically analyze codebase complexity when categorizing issue effort levels.
9. **[#26673: Bump Hono to 4.12.18](https://github.com/google-gemini/gemini-cli/pull/26673)**
   Critical dependency update integrating upstream security fixes for the Hono web framework.
10. **[#25643: Throttle UI Re-renders](https://github.com/google-gemini/gemini-cli/pull/25643)**
    Fixes UI jank and freezes by throttling React re-renders during high-volume shell output (e.g., `npm test`).

## 5. Feature Request Trends
*   **Smarter Code Navigation (AST Integration):** Strong momentum behind adopting AST-aware file reading and codebase mapping (Issue [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)) to reduce token consumption and file-read errors.
*   **Advanced Memory Management:** High demand for a reliable, transparent, and deterministic Auto Memory system (Issues [#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26659](https://github.com/google-gemini/gemini-cli/issues/26659)), specifically prioritizing security and seamless UI integration.
*   **Safe Execution Environments:** Users and maintainers are pushing for safer default behaviors, such as restricting destructive shell commands (`git reset --force`) and implementing stricter shell safety evals (Issue [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).
*   **Globalization & Accessibility:** Consistent community requests for BiDi/RTL language support (PR [#25243](https://github.com/google-gemini/gemini-cli/pull/25243)) and screen-reader friendly streaming tables (Issue [#25218](https://github.com/google-gemini/gemini-cli/issues/25218)).

## 6. Developer Pain Points
*   **UI Hangs and Shell Instability:** Developers report frequent UI deadlocks, particularly shell commands getting stuck in an "Awaiting user input" state after execution completes (Issue [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)).
*   **Agent Unreability & Lapses:** Subagents reporting false successes when hitting MAX_TURNS (Issue [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) or ignoring custom skills and configurations (Issue [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)) are eroding trust in complex agentic workflows.
*   **Tooling Boundary Friction:** Windows users face significant friction due to PTY false positives (PR [#26565](https://github.com/google-gemini/gemini-cli/pull/26565)), and Wayland users remain unable to utilize the browser agent seamlessly.
*   **Persistently Broken Configurations:** Settings persistence remains a major headache, with configurations silently failing to save or falling out of sync during a session (PR [#26464](https://github.com/google-gemini/gemini-cli/pull/26464)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-08

## 1. Today's Highlights

GitHub Copilot CLI shipped a rapid succession of v1.0.44 prereleases (v1.0.44-0 through v1.0.44-2), focusing heavily on shell integration improvements (fixing `!` prefix commands and alias/rc support), model display accuracy, and quota display for Free-tier users. Meanwhile, the community raised significant regressions around non-interactive mode (`-p`/`--prompt`) on both Windows and macOS, and a cluster of BYOK/custom provider issues around effort levels and model validation suggest the multi-provider surface is still stabilizing.

---

## 2. Releases

**v1.0.44-2**
- **Added:** Optional `prerelease` argument to `copilot update` and `/update` to fetch the latest prerelease build.
- **Fixed:** Shell commands via the `!` prefix now work correctly across all shell configurations.

**v1.0.44-1**
- **Improved:** Shell aliases and rc file settings are now respected in `!` commands.

**v1.0.44-0**
- **Improved:** Timeline now displays the resolved model for rubber-duck sub-agents (e.g., `Rubber-duck(claude-opus-4.7)`).
- **Fixed:** Quota display correctly shows remaining usage for Free users (previously always showed 100% used).
- **Fixed:** Tool permissions granted in autopilot mode are preserved after `/clear`.

---

## 3. Hot Issues

1. **[#2082 — `ctrl+shift+c` no longer copies on Linux](https://github.com/github/copilot-cli/issues/2082)**
   A regression since v1.0.4 breaks the standard Linux terminal copy shortcut. 18 comments and growing; high-impact for Linux daily-driver workflows.

2. **[#3188 — Windows non-interactive mode exits 1 with empty streams when stdout is piped](https://github.com/github/copilot-cli/issues/3188)**
   `copilot.exe` silently fails when stdout is anything other than a PowerShell native redirect, breaking CI/CD and all non-PowerShell automation on v1.0.44-0. Critical for enterprise pipelines.

3. **[#3186 — `-p`/`--prompt` tokenizes on whitespace on Windows](https://github.com/github/copilot-cli/issues/3186)**
   Multi-word non-interactive prompts are broken on v1.0.44-0, making the entire `-p` flag unusable for most real prompts. Likely related to the stdout-pipe issue above.

4. **[#3189 — `copilot -p` exits 1 silently on macOS with no output or logs](https://github.com/github/copilot-cli/issues/3189)**
   A parallel non-interactive regression on macOS: exits immediately with code 1, zero bytes output, no log file. Together with #3188, non-interactive mode appears broken across platforms on the 1.0.44 prerelease line.

5. **[#3162 — Custom MCP servers falsely reported as "blocked by policy"](https://github.com/github/copilot-cli/issues/3162)**
   Registry-listed MCP servers are incorrectly flagged as policy-blocked in v1.0.42, a false-negative in registry validation that blocks legitimate tool integrations.

6. **[#3159 — Effort level ignored during `/model` switch](https://github.com/github/copilot-cli/issues/3159)**
   When switching models with an explicit effort level, the previous model's effort is retained. Closed quickly, likely addressed in the 1.0.44 series.

7. **[#3185 — BYOK Anthropic: default `medium` reasoning effort breaks Claude Haiku 4.5](https://github.com/github/copilot-cli/issues/3185)**
   The CLI unconditionally sends `reasoning_effort: "medium"` for unregistered BYOK models, causing 400 errors on models that don't support adaptive thinking. A regression from 1.0.18.

8. **[#3135 — BYOK statusline shows "medium" despite `--effort high`](https://github.com/github/copilot-cli/issues/3135)**
   Display-only mismatch: the request is sent correctly but the status line misreports the effort level. Part of a broader BYOK effort-level tracking issue.

9. **[#3181 — Remove automatic co-author on Copilot CLI commits](https://github.com/github/copilot-cli/issues/3181)**
   Users request the ability to opt out of the `Co-authored-by: Copilot` trailer. Philosophical split between transparency advocates and those who see AI as a tool, not a collaborator.

10. **[#3183 — SDK: orphan `tool_use` after hard kill + resume causes persistent 400 errors](https://github.com/github/copilot-cli/issues/3183)**
    After a hard kill and session resume, orphaned `tool_use` blocks without matching `tool_result` entries cause persistent API 400 errors. Affects the `@github/copilot` SDK package directly.

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours.

---

## 5. Feature Request Trends

- **Configurable system prompt / token overhead reduction** ([#2627](https://github.com/github/copilot-cli/issues/2627)): The ~20,500-token system prompt consumes ~10% of a 200K context window before any user content. Community asks for a way to slim or customize fixed instructions.

- **Vi/Vim input mode** ([#13](https://github.com/github/copilot-cli/issues/13), 👍 58): The highest-upvoted open issue. Modal editing support remains the most-requested UX enhancement.

- **Session pause/steering** ([#1928](https://github.com/github/copilot-cli/issues/1928)): Users want the ability to pause a running Copilot session mid-task to inject corrections, rather than waiting for completion or killing the session.

- **Deeper sub-agent nesting** ([#1374](https://github.com/github/copilot-cli/issues/1374)): Requests for sub-agents to call further sub-agents beyond a single level, enabling more complex agentic workflows.

- **ACP custom provider support** ([#3048](https://github.com/github/copilot-cli/issues/3048)): `--acp` mode currently ignores `COPILOT_PROVIDER_*` environment variables, blocking custom provider usage in non-interactive/CI scenarios.

- **Copilot Subconscious / REM on session close** ([#3190](https://github.com/github/copilot-cli/issues/3190)): A new feature-flagged concept to run a background reflection/memory-consolidation process at session end.

---

## 6. Developer Pain Points

- **Non-interactive mode regressions across platforms:** Issues #3188, #3186, and #3189 collectively indicate that `copilot -p` is fundamentally broken on the v1.0.44 prerelease line on Windows (stdout pipe failures, whitespace tokenization) and macOS (silent exit 1). This is the most urgent blocker for CI/CD and automation users.

- **BYOK/custom provider rough edges:** Multiple issues (#3185, #3135, #3159, #1752) highlight fragility in how custom providers handle model registry lookups, effort levels, and model name validation. The catch-all `medium` reasoning effort breaks models that don't support it.

- **MCP integration reliability:** False policy blocks (#3162), connection failures on Windows (#2282), and missing `capabilities.tasks` negotiation (#2538) suggest the MCP surface needs hardening, especially for third-party server integrations.

- **Permission model friction:** Redirecting stderr (`2>/dev/null`) still triggers permission prompts (#2693), and permissions aren't consistently preserved across session operations, adding friction to power-user workflows.

- **Windows platform stability:** Installation failures post-v1.0.40 (#3160), PowerShell tool spawn failures (#2355), and the general `!` command shell issues reflect ongoing platform-specific instability.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-08

## 1. Today's Highlights
The community had an active day focused on platform stability and developer experience, with 8 new or updated issues and 7 pull requests. Key fixes include patches for Windows binary versioning, retry UI artifacts, and hook content extraction. Multiple feature requests around streaming capabilities and input ergonomics also gained traction.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues

1. **[#2010](https://github.com/MoonshotAI/kimi-cli/issues/2010) — Shift+Enter for newline in prompt input**
   A long-standing request to adopt the now-universal `Shift+Enter` shortcut for inserting newlines instead of relying on `Ctrl-J` or `Alt-Enter`. Aligning with conventions from ChatGPT, Discord, and Slack would reduce friction for new users. Low engagement so far but high UX impact.

2. **[#2178](https://github.com/MoonshotAI/kimi-cli/issues/2178) — Blank FileVersionInfo on Windows blocks VS Code extension**
   On Windows, `kimi.exe` v1.41.0 ships with empty `FileVersionInfo`, causing the official VS Code extension to reject the binary as incompatible. A critical blocker for Windows users that already has a corresponding fix PR (#2181).

3. **[#2182](https://github.com/MoonshotAI/kimi-cli/issues/2182) — macOS screenshot drag-and-drop fails due to TemporaryItems race**
   Dragging a macOS screenshot thumbnail directly into the terminal fails to attach the image because of a race condition with `TemporaryItems`. Affects a popular macOS workflow for multimodal input.

4. **[#2179](https://github.com/MoonshotAI/kimi-cli/issues/2179) — No incremental token deltas in `stream-json` output mode**
   The `--print --output-format stream-json` mode buffers entire turns instead of emitting token-level deltas, making it unsuitable for real-time downstream tooling. A significant limitation for developers building on top of the CLI.

5. **[#2175](https://github.com/MoonshotAI/kimi-cli/issues/2175) — Hardcoded model display name ignores backend `display_name`**
   `model_display_name()` in `llm.py` overrides the backend-provided name (e.g., "Kimi-k2.6") with a hardcoded "kimi-for-coding" string. Fix PR (#2174) already submitted by the same contributor.

6. **[#2172](https://github.com/MoonshotAI/kimi-cli/issues/2172) — MCP OAuth fails with `client_secret_basic` method**
   The OAuth client rejects servers that return `client_secret_basic` as the token endpoint auth method, only accepting `none` or `client_secret_post`. Limits interoperability with certain MCP OAuth providers.

7. **[#2180](https://github.com/MoonshotAI/kimi-cli/issues/2180) — Request for `/task` command in `kimi cli web`**
   Users want a dedicated `/task` command in the web interface for managing background or long-running tasks. No comments yet but reflects demand for better async workflow management.

8. **[#2173](https://github.com/MoonshotAI/kimi-cli/issues/2173) — Third-party tool (`crow-cli`) cannot use Kimi Coding Plan with API key**
   The author of `crow-cli` reports that the Kimi coding plan no longer allows injecting an API key and base URL into external agents, breaking a previously working workflow. Raises questions about API access policy changes.

## 4. Key PR Progress

1. **[#2181](https://github.com/MoonshotAI/kimi-cli/pull/2181) — Add Windows binary version info** (OPEN)
   Generates a PyInstaller version-info file from `pyproject.toml` and injects it into Windows builds. Adds CI assertions to prevent empty `FileVersionInfo` in future releases. Directly fixes #2178.

2. **[#2177](https://github.com/MoonshotAI/kimi-cli/pull/2177) — Clear partial UI output on LLM step retry** (OPEN)
   When a streamed LLM call fails mid-output and tenacity retries, the aborted text is now cleared before the retry renders. Prevents confusing concatenated output from failed and successful attempts.

3. **[#2176](https://github.com/MoonshotAI/kimi-cli/pull/2176) — Extract text from ContentPart for `UserPromptSubmit` hook** (OPEN)
   Fixes hooks receiving an empty `prompt` when user input is a `list[ContentPart]` (the default). Ensures regex matchers in hooks actually work for structured message formats. Resolves #2148.

4. **[#2174](https://github.com/MoonshotAI/kimi-cli/pull/2174) — Respect backend `display_name` for kimi-for-coding** (OPEN)
   Removes the hardcoded override that forced the model name to always show as "kimi-for-coding". Now correctly displays names like "Kimi-k2.6" as returned by the backend. Resolves #2175.

5. **[#2138](https://github.com/MoonshotAI/kimi-cli/pull/2138) — Respect default shell in shell mode** (OPEN)
   Passes `$SHELL` to `create_subprocess_shell` for Ctrl-X shell mode and prefers the user's default shell over a bash fallback. Includes regression tests for shell detection logic.

6. **[#2139](https://github.com/MoonshotAI/kimi-cli/pull/2139) — Preserve structured MCP content and sanitize `$ref` nodes** (OPEN)
   Appends MCP `structured_content` as JSON text so tool results retain machine-readable payloads. Also sanitizes `$ref` siblings in input schemas to prevent metadata leakage to the model.

7. **[#1127](https://github.com/MoonshotAI/kimi-cli/pull/1127) — Tweak web UI details** (CLOSED)
   A long-running UI polish PR from February that was closed without merging. Likely superseded by other design changes.

## 5. Feature Request Trends

- **Streaming & real-time output**: Multiple requests (#2179) for token-level streaming in JSON mode, indicating strong developer demand for building real-time downstream integrations.
- **Input ergonomics**: `Shift+Enter` support (#2010) continues to be requested; aligning with industry-standard chat UX is a recurring theme.
- **Web interface commands**: The `/task` command request (#2180) signals that users want richer command palates and async task management in the web UI.
- **Third-party API access**: The `crow-cli` issue (#2173) highlights a desire for flexible API key usage across external agents, not just the official CLI.

## 6. Developer Pain Points

- **Windows support gaps**: Blank version info (#2178) blocking VS Code integration shows Windows remains a second-class citizen in CI/release pipelines.
- **Hook system fragility**: The `UserPromptSubmit` hook silently failing with structured content (#2176) reveals that the hook system hasn't kept up with internal data format changes.
- **Hardcoded overrides causing confusion**: The model display name override (#2175) masks backend improvements and misleads users about which model they're actually using.
- **OAuth/MCP interoperability**: The `client_secret_basic` rejection (#2172) limits which MCP servers can be used, frustrating developers in enterprise or multi-provider environments.
- **macOS multimodal workflow breakage**: The screenshot drag-and-drop failure (#2182) undermines a key selling point of multimodal coding assistance on macOS.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-08

## 1. Today's Highlights

OpenCode shipped two rapid-fire patch releases (v1.14.40 and v1.14.41) addressing formatter output handling, remote config support, and CORS/auth ordering. The community is actively wrestling with model-specific edge cases around thinking blocks, double compaction, and provider compatibility, as evidenced by a surge of issues around Opus 4.7 and Bedrock integrations. On the PR front, contributors are pushing forward a native LLM core foundation, neovim editor context integration, and a long-awaited fix for the double compaction bug.

## 2. Releases

### v1.14.41
- **Core Bugfix:** Restored formatter output handling so formatting still works when formatters write to stdout or stderr. ([@ferdinandyb](https://github.com/ferdinandyb))
- **Core Improvement:** Warping a session to another workspace can now carry over uncommitted file changes.
- **TUI Bugfix:** Restored custom provider handling (truncated in notes).

### v1.14.40
- **Core Improvement:** Support for `.well-known/opencode` configs that point to a separate remote config file.
- **Core Bugfix:** Preserve assistant text when replaying signed reasoning blocks. ([@edevil](https://github.com/edevil))
- **Core Bugfix:** Return consistent not-found errors for missing sessions.
- **Core Bugfix:** Apply CORS headers before auth.

---

## 3. Hot Issues

1. **[#24529](https://github.com/anomalyco/opencode/issues/24529) — Edit tool crashes with `undefined is not an object` on existing file modification** (23 comments)
   Critical crash when the `edit` tool is invoked with a non-empty `oldString`. Closed, likely addressed in recent releases, but the high comment count shows how many users hit this core workflow blocker.

2. **[#5374](https://github.com/anomalyco/opencode/issues/5374) — Feature: Show tokens/second** (16 comments, 👍 66)
   Long-standing request for real-time and average tokens/s display. Highest 👍 count of any open issue this cycle — clearly a pain point for users benchmarking across providers.

3. **[#8816](https://github.com/anomalyco/opencode/issues/8816) — Provide `llms.txt` and docs as markdown** (13 comments, 👍 26)
   Request for a machine-parseable documentation artifact so LLMs and tooling can ingest OpenCode docs directly. Aligns with the growing `llms.txt` ecosystem trend.

4. **[#15059](https://github.com/anomalyco/opencode/issues/15059) — Multiple system prompts break Qwen3.5-* models** (9 comments)
   Plugin-injected system prompts cause model failures. Highlights fragility in how OpenCode handles system prompt composition for non-Anthropic/OpenAI models.

5. **[#20902](https://github.com/anomalyco/opencode/issues/20902) — Bash tool hangs when command spawns background child processes** (7 comments, 👍 5)
   `npm run build &` and similar commands cause the bash tool to hang until timeout. A significant friction point for build-oriented workflows.

6. **[#25873](https://github.com/anomalyco/opencode/issues/25873) — Bash tool fails with 'readonly property' error in v1.14.34+** (7 comments)
   Minified binary introduces `TypeError: Attempted to assign to readonly property`. Root cause confirmed by reporter — regression from build pipeline changes.

7. **[#25879](https://github.com/anomalyco/opencode/issues/25879) — What happened to the `opencode-cli` TUI?** (7 comments)
   Users report the `opencode-cli` binary disappeared from debian packages after v1.14.30. Documentation gap around packaging changes is causing confusion.

8. **[#26230](https://github.com/anomalyco/opencode/issues/26230) — Double compaction for Copilot Opus 4.7** (3 comments)
   Token usage jumps from 100K to 200K+ when switching to Opus 4.7 through Copilot, triggering double compaction. Actively being addressed by [PR #26235](https://github.com/anomalyco/opencode/pull/26235).

9. **[#23926](https://github.com/anomalyco/opencode/issues/23926) — Bedrock Claude Opus 4.7 replays thinking blocks through OpenAI-compatible transform** (3 comments)
   Thinking blocks from Bedrock Claude are incorrectly routed through the interleaved reasoning transform designed for OpenAI-compatible providers. Cross-provider normalisation bug.

10. **[#26237](https://github.com/anomalyco/opencode/issues/26237) — MCPs toggle not working** (3 comments)
    Stale MCP server entries persist in the TUI toggle UI even after uninstallation, and the space-bar toggle is unresponsive. UX regression in the MCP management flow.

---

## 4. Key PR Progress

1. **[#24712](https://github.com/anomalyco/opencode/pull/24712) — Add native LLM core foundation** (by kitlangton)
   Introduces `packages/llm` — a native Effect-based LLM core with typed request/event schemas, provider adapters, and tool runtime. Gated behind `OPENCODE_EXPERIMENTAL_LLM_NATIVE`. A foundational architectural shift.

2. **[#26235](https://github.com/anomalyco/opencode/pull/26235) — Fix: prevent double compaction when task already pending** (by nonsleepr)
   Directly addresses [Issue #26230](https://github.com/anomalyco/opencode/issues/26230). Adds a pending-task check before triggering compaction, preventing the duplicate run that inflated token usage for Opus 4.7 via Copilot.

3. **[#26234](https://github.com/anomalyco/opencode/pull/26234) — feat(tui): add nvim editor context polling** (by shreyassanthu77)
   Uses nvim RPC to probe running Neovim instances and surface editor context (open buffers, cursor position) in the TUI. Major editor integration milestone.

4. **[#26233](https://github.com/anomalyco/opencode/pull/26233) — fix(provider): propagate `options.extraBody` for openai-compatible providers** (by jeremy-newhouse)
   Fixes a silent drop of `extraBody` config from `opencode.json`. Closes three separate issues ([#13584](https://github.com/anomalyco/opencode/issues/13584), [#23995](https://github.com/anomalyco/opencode/issues/23995), [#24264](https://github.com/anomalyco/opencode/issues/24264)) — high impact for users customizing provider requests.

5. **[#26239](https://github.com/anomalyco/opencode/pull/26239) — feat(opencode): add `/menu` slash command** (by altendky)
   Adds a `/menu` command equivalent to `Ctrl+P`, improving accessibility for users whose terminals intercept certain keybindings.

6. **[#26236](https://github.com/anomalyco/opencode/pull/26236) — fix: force OAuth flow when server accepts unauthenticated connections** (by Sanjay-doppalapudi)
   Fixes a subtle auth bug where Google Drive MCP server returned HTTP 200 without auth, causing silent auth failures. Ensures OAuth is properly enforced.

7. **[#12822](https://github.com/anomalyco/opencode/pull/12822) — fix(env): proxy directly to `process.env` instead of snapshotting** (by jerome-benoit)
   Replaces the init-time `process.env` snapshot with a live proxy, ensuring runtime env changes (e.g., from MCP servers) are visible to the process.

8. **[#24725](https://github.com/anomalyco/opencode/pull/24725) — fix(tui): sort session picker by full updated timestamp** (by Sleepful)
   Session picker now sorts by actual update time rather than grouping by calendar day then creation time. Prevents recently-active sessions from being buried.

9. **[#26130](https://github.com/anomalyco/opencode/pull/26130) — test(tui): Shift+Tab cycles agents; Tab triggers autocomplete** (by lacymorrow)
   Regression tests asserting keybind invariants — ensures Tab autocomplete and Shift+Tab agent cycling never collide. Quality guardrail PR.

10. **[#18767](https://github.com/anomalyco/opencode/pull/18767) — feat(app): Mobile Touch Optimization** (by noahbentusi)
    Touch-optimized overlays, larger tap targets, and swipe gestures for the OpenCode desktop app on mobile/tablet form factors. Preserves desktop UX behind responsive breakpoints.

---

## 5. Feature Request Trends

- **Performance observability:** Tokens/s display ([#5374](https://github.com/anomalyco/opencode/issues/5374), 👍 66) remains the most-upvoted open request. Users want granular throughput metrics per provider to make informed model selections.

- **Machine-parseable documentation:** `llms.txt` and markdown docs export ([#8816](https://github.com/anomalyco/opencode/issues/8816), 👍 26) reflects demand from users integrating OpenCode into agentic workflows and RAG pipelines.

- **Configurable session management:** Disabling automatic diff summarization ([#26035](https://github.com/anomalyco/opencode/issues/26035)), better scroll/navigation ([#6257](https://github.com/anomalyco/opencode/issues/6257)), and session history persistence ([#7380](https://github.com/anomalyco/opencode/issues/7380)) indicate users want finer control over long-running sessions.

- **Editor and tooling integration:** Neovim context polling ([PR #26234](https://github.com/anomalyco/opencode/pull/26234)), MCP server improvements, and ACP registry fixes point to strong demand for first-class editor and agent-protocol integrations.

---

## 6. Developer Pain Points

- **Thinking block handling across providers:** Multiple issues ([#13286](https://github.com/anomalyco/opencode/issues/13286), [#18254](https://github.com/anomalyco/opencode/issues/18254), [#23926](https://github.com/anomalyco/opencode/issues/23926), [#24909](https://github.com/anomalyco/opencode/issues/24909)) reveal that reasoning/thinking block replay is fragile when switching between Anthropic, OpenAI, and Bedrock providers mid-session. The v1.14.40 fix for signed reasoning blocks is a start, but cross-provider normalization remains a major sore spot.

- **Bash tool reliability:** Background process hangs ([#20902](https://github.com/anomalyco/opencode/issues/20902)), readonly property errors in minified builds ([#25873](https://github.com/anomalyco/opencode/issues/25873)), and agents getting stuck during build commands ([#26225](https://github.com/anomalyco/opencode/issues/26225)) collectively indicate the shell execution layer needs hardening, especially for build-intensive workflows.

- **Compaction and token management:** Double compaction ([#26230](https://github.com/anomalyco/opencode/issues/26230)) and premature monthly token exhaustion ([#26245](https://github.com/anomalyco/opencode/issues/26245)) suggest the token accounting and session compaction logic has edge cases that waste user quota, particularly with high-context models like Opus 4.7.

- **TUI regressions and missing documentation:** The missing `opencode-cli` binary ([#25879](https://github.com/anomalyco/opencode/issues/25879)), blank screen with plugins ([#26217](https://github.com/anomalyco/opencode/issues/26217)), and MCP toggle failures ([#26237](https://github.com/anomalyco/opencode/issues/26237)) highlight that recent packaging and TUI changes have introduced UX regressions without adequate release note coverage.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-08

## 1. Today's Highlights
Pi officially finalized its repository and package namespace migration to `earendil-works/pi-mono` with the release of **v0.74.0**, backed by a seamless self-update mechanism introduced in v0.73.1. The community remains highly active in addressing terminal rendering quirks (especially around Kitty graphics and IME inputs) and is aggressively optimizing extension startup performance through shared module caching and parallel loading. 

## 2. Releases
- **[v0.74.0](https://github.com/earendil-works/pi/releases/tag/v0.74.0)**: Updated repository links and package references to reflect the move to the `@earendil-works/*` npm scope.
- **[v0.73.1](https://github.com/earendil-works/pi/releases/tag/v0.73.1)**: Added self-update support for the npm scope migration, allowing existing global installs of `@mariozechner/pi-coding-agent` to seamlessly transition to the new package name.

## 3. Hot Issues
1. **[#4228 OpenAI delta handling breaks tool calls](https://github.com/earendil-works/pi/issues/4228)**: Streaming deltas containing mixed content and tool calls weren't accumulated independently. A critical fix for OpenAI provider stability that garnered significant community discussion (18 comments).
2. **[#4208 Kitty graphics corrupt cmux/Ghostty rendering](https://github.com/earendil-works/pi/issues/4208)**: Inline image previews break terminal displays inside terminal multiplexers due to a fragile direct Kitty graphics path (14 comments).
3. **[#3357 Dynamic model fetching for local LLMs](https://github.com/earendil-works/pi/issues/3357)**: Proposes fetching models dynamically from `{baseUrl}/models` to improve workflows with local providers like `llama.cpp` and `ollama`. Highly requested with 23 👍.
4. **[#4210 Bedrock converse-stream empty stops](https://github.com/earendil-works/pi/issues/4210)**: AWS Bedrock occasionally returns null objects instead of throwing errors, causing the agent to trail off and stop silently.
5. **[#4279 CLI hangs after non-interactive prompts](https://github.com/earendil-works/pi/issues/4279)**: Running `pi -p "say Hi"` causes the app to hang instead of returning to the shell after execution, breaking scripting workflows.
6. **[#4253 Chinese IME input duplication](https://github.com/earendil-works/pi/issues/4253)**: Characters are duplicated or lost when using Chinese IME under the Kitty keyboard protocol.
7. **[#4257 WebSocket errors halt agent loop](https://github.com/earendil-works/pi/issues/4257)**: Transient WebSocket transport errors completely stop the coding-agent loop instead of triggering a retry.
8. **[#2871 Context grows unbounded during long tool loops](https://github.com/earendil-works/pi/issues/2871)**: Auto-compaction fails to trigger mid-turn, causing context usage to far exceed configured limits.
9. **[#4272 Azure OpenAI multi-turn reasoning failure](https://github.com/earendil-works/pi/issues/4272)**: Multi-turn conversations fail on Azure when `store: false` is set, due to Pi attempting to replay non-persisted reasoning items.
10. **[#2616 Sync-only SessionManager blocks async persistence](https://github.com/earendil-works/pi/issues/2616)**: Widespread use of `appendFileSync` and `readFileSync` blocks async/database-backed persistence, limiting scalable session storage.

## 4. Key PR Progress
1. **[#4247 feat(ai): handle mixed chat completion deltas](https://github.com/earendil-works/pi/pull/4247)**: Fixes #4228 by introducing separate accumulators for content and tool calls during streaming.
2. **[#4261 fix(tui): keep kitty image redraws inside TUI](https://github.com/earendil-works/pi/pull/4261)**: Resolves scroll region corruption by constraining Kitty image graphics strictly within TUI boundaries.
3. **[#4242 perf(coding-agent): parallel extension loading](https://github.com/earendil-works/pi/pull/4242)**: Replaces sequential `for...await` with `Promise.all` to significantly reduce extension load times.
4. **[#4255 perf(coding-agent): shared jiti instance](https://github.com/earendil-works/pi/pull/4255)**: Further speeds up startup by implementing a shared `jiti` singleton with a module cache for extensions.
5. **[#4256 fix(openai-responses): multi-turn reasoning fix](https://github.com/earendil-works/pi/pull/4256)**: Resolves #4272 by stripping non-persisted reasoning items on Azure when `store: false`.
6. **[#4252 fix(tui): Chinese IME input dedup](https://github.com/earendil-works/pi/pull/4252)**: Fixes character duplication and loss for IME users on terminals utilizing the Kitty keyboard protocol.
7. **[#4264 fix(extensions): expose label/execute in ToolInfo](https://github.com/earendil-works/pi/pull/4264)**: Empowers extensions to override MCP Direct Tools' rendering via a last-write-wins approach.
8. **[#3887 feat: image content](https://github.com/earendil-works/pi/pull/3887)**: Introduces an API to support image blocks, enabling the agent to output images natively (supports Google/OpenRouter).
9. **[#4281 feat(tui): show/hide cursor on focus change](https://github.com/earendil-works/pi/pull/4281)**: Improves UX by hiding the cursor when the terminal window loses focus.
10. **[#4277 feat(ai): add gpt-5.5-chat-latest](https://github.com/earendil-works/pi/pull/4277)**: Adds support for OpenAI's newly announced default Instant model to the provider catalog.

## 5. Feature Request Trends
- **Local and Self-Hosted LLM Enhancements**: Strong demand for better integration with local AI infrastructures, specifically dynamic model fetching (`/models`) for tools like Ollama and llama.cpp (#3357).
- **Broader Provider Support**: Users want native support for emerging models and providers, such as Together AI (#3624), GPT-5.5-instant (#4275), and Cursor's Composer models (#2451).
- **Rich Media Handling**: Requests for robust inline image handling, including pasting images from the clipboard directly into the TUI (#2144, #3887).
- **Agent Resilience**: High interest in making the agent loop more robust against provider errors, such as automatically retrying on empty Bedrock turns (#4210) or WebSocket disconnects (#4257).

## 6. Developer Pain Points
- **Terminal/TUI Compatibility**: The transition to advanced terminal features (like Kitty graphics and keyboard protocols) is causing display corruption and input duplication across various setups (cmux, Ghostty, Windows Terminal, CJK keyboards) (#4208, #4253, #767).
- **Context Management Reliability**: Developers are frustrated by the agent exceeding token limits. The context window growing unbounded and auto-compaction failing to trigger mid-turn breaks long, complex task loops (#2871, #4274).
- **Extension Startup Overhead**: Extension loading is bottlenecking Pi's startup time, requiring community PRs to implement fundamental optimizations like shared caching and async parallel loading (#4240, #4254).
- **CLI Scriptability**: Basic CLI execution flags (like `-p`) failing to exit properly disrupt headless runs and CI/CD automations (#4279).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

## Qwen Code Community Digest — 2026-05-08

### 1. Today's Highlights
Qwen Code shipped **v0.15.8**, a quick-turn patch that fixes a symlink regression in the skills directory and tightens the prior-read enforcement in the E2E tool-control tests. The release sits atop the newly minted **v0.15.7**, which introduced a significant performance optimization: a `FileReadCache` that short-circuits unchanged file reads, alongside a community-contributed proxy fix for the CLI. The broader community discussion today was heavily anchored by sub-agent observability, API reliability, and a major push toward a "remote-control" architecture for headless session management.

### 2. Releases

*   **v0.15.8** ([PR #3928](https://github.com/QwenLM/zwen-code/pull/3928))
    *   Fixed a regression from PR #3604 where symlinks pointing outside the skills directory were blocked.
    *   Aligned tool-control E2E tests with prior-read enforcement logic.
*   **v0.15.7** ([PR #3766](https://github.com/QwenLM/zwen-code/pull/3766))
    *   **Performance:** Introduced `FileReadCache` to short-circuit unchanged file reads, saving token overhead and latency.
    *   **Networking:** Added support for proxy settings in the CLI (by @cyphercodes).

### 3. Hot Issues

1.  **[#3901](https://github.com/QwenLM/zwen-code/issues/3901) - Multi-line paste triggers multiple submissions:** Pasting code/logs into the CLI treats newlines as `Enter`, causing fragmented prompts. A high-priority usability blocker for interactive terminal users.
2.  **[#3881](https://github.com/QwenLM/zwen-code/issues/3881) - Local Qwen 3.6-27B enters infinite slash (`/`) generation:** Users connecting to local deployments via OpenAI-compatible endpoints experience infinite token generation on the first prompt.
3.  **[#3913](https://github.com/QwenLM/zwen-code/issues/3913) - Symlink skills regression:** A strict containment validation broke external symlink loading. Quickly identified by the community and resolved in today's v0.15.8 patch.
4.  **[#3925](https://github.com/QwenLM/zwen-code/issues/3925) - Monitor tool notifications misrouted in sub-agents:** Events from a sub-agent's Monitor tool are incorrectly bubbling up to the main agent, polluting the UI context.
5.  **[#3877](https://github.com/QwenLM/zwen-code/issues/3877) - `.env` API key ignored:** The CLI forces interactive auth setup despite `OPENCODE_GO_API_KEY` being properly set in `~/.qwen/.env`.
6.  **[#3899](https://github.com/QwenLM/zwen-code/issues/3899) - Ctrl+O freezes CLI in long conversations:** Toggling from compact to verbose mode causes the TUI to hang due to terminal rendering overhead.
7.  **[#3678](https://github.com/QwenLM/zwen-code/issues/3678) - Light theme for `/export` HTML:** Highly requested (👍 3) feature to save exported session HTMLs in an eye-friendly light theme.
8.  **[#3829](https://github.com/QwenLM/zwen-code/issues/3829) - Wayland image paste failure:** Despite having `wl-clipboard` installed, image pasting remains broken for Linux Wayland users.
9.  **[#3936](https://github.com/QwenLM/zwen-code/issues/3936) - Broken Russian text (Mojibake):** Severe encoding/character rendering issues breaking Cyrillic text in the UI.
10. **[#3888](https://github.com/QwenLM/zwen-code/issues/3888) - Model stream ends without finish reason:** Intermittent API stream drops leaving the client hanging without a completion signal.

### 4. Key PR Progress

1.  **[#3929 / #3930 / #3931](https://github.com/QwenLM/zwen-code/pull/3931) - Remote Control Architecture (Stack):** A massive 3-part PR stack introducing a headless HTTP/WebSocket remote-control server for Qwen Code, enabling external integrations and daemon-like session management.
2.  **[#3933](https://github.com/QwenLM/zwen-code/pull/3933) - Fix monitor notifications for sub-agents:** Resolves #3925 by routing monitor event callbacks strictly to the agent that spawned them, preventing cross-context pollution.
3.  **[#3932](https://github.com/QwenLM/zwen-code/pull/3932) - Accept partial reads in prior-read enforcement:** Relaxes the strict "full file read" cache requirement, allowing the model to efficiently cache reads even when targeting specific offsets/limits in large files.
4.  **[#3864](https://github.com/QwenLM/zwen-code/pull/3864) - Provider-first auth registry:** A major refactor unifying API keys, OAuth, and token plans into a single provider-centric configuration pipeline in `settings.json`.
5.  **[#3896](https://github.com/QwenLM/zwen-code/pull/3896) - Normalize cumulative OpenAI stream deltas:** Fixes a critical bug where non-standard upstream APIs (like DashScope) sent full accumulated text instead of suffixes, resulting in exponentially duplicated output.
6.  **[#3827](https://github.com/QwenLM/zwen-code/pull/3827) - Unify retry delay policy:** Standardizes API retry logic with exponential backoff, jitter, and `Retry-After` header parsing across the codebase.
7.  **[#3935](https://github.com/QwenLM/zwen-code/pull/3935) - Add `/commit` slash command:** Streamlines Git workflows by adding a native `/commit` (alias `/ci`) command to stage all changes and commit with auto-generated co-authorship.
8.  **[#3934](https://github.com/QwenLM/zwen-code/pull/3934) - Sanitize Mistral reasoning content:** Adds a dedicated Mistral provider to strip `reasoning_content` from payloads, fixing compatibility issues with Mistral's OpenAI-compatible endpoint.
9.  **[#3927](https://github.com/QwenLM/zwen-code/pull/3927) - Virtual viewport design (ink 7):** A design-first PR tackling the TUI flickering and freezing issues in long conversations by proposing a virtualized viewport for the React Ink UI.
10. **[#3847](https://github.com/QwenLM/zwen-code/pull/3847) - OTel Trace ID in debug logs:** Injects `trace_id` and `span_id` into local debug log files, allowing developers to correlate CLI behavior with OpenTelemetry backends.

### 5. Feature Request Trends
*   **Advanced Sub-Agent Observability:** Users want deep visibility into sub-agent operations, specifically requesting access to the sub-agent's internal TODO lists and full chain-of-thought, rather than just the tool call history.
*   **TUI & Input Modernization:** A strong demand for modern terminal input standards, including proper multi-line pasting without auto-submission, native text selection, and `Ctrl+Backspace` word deletion.
*   **Deep API Resiliency & Routing:** As the user base diversifies across local, proxy, and commercial APIs, there is a clear trend toward demanding robust connection handling: exponential backoff, model downgrade fallbacks, and strict stream delta normalization.
*   **External Telemetry Integrations:** Growing interest in plugging Qwen Code into existing observability stacks (e.g., Arize Phoenix) via OpenInference-compliant tracing.

### 6. Developer Pain Points
*   **Cross-Platform Clipboard & Input Woes:** The TUI input layer remains fragile. Wayland users are disproportionately affected by image pasting failures, and multi-line text pasting fundamentally breaks the interactive prompt flow across all OSes.
*   **Streaming Protocol Inconsistencies:** Connecting to non-Qwen or locally quantized models frequently breaks the client due to mismatched stream expectations (e.g., missing `finish_reason` or cumulative deltas). This causes infinite generation loops or hard CLI crashes.
*   **Environment Configuration Ignored:** Several users reported frustration with the CLI ignoring `.env` variables or forcing re-authentication, adding friction to automated or air-gapped workflows.

</details>