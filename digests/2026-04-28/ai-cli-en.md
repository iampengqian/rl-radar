# AI CLI Tools Community Digest 2026-04-28

> Generated: 2026-04-27 22:14 UTC | Tools covered: 8

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

# AI Developer Tools Ecosystem Cross-Tool Report
**Date:** 2026-04-28

## 1. Ecosystem Overview
The AI CLI tooling landscape is currently characterized by aggressive feature iteration and rapid architectural maturation, as tools transition from simple terminal wrappers into sophisticated, agentic coding environments. Major players like OpenAI Codex are overhauling core internals (permissions, cloud execution), while others like Gemini CLI and Kimi Code focus on fundamental stability, terminal rendering, and memory management. A clear industry-wide shift is occurring toward deeply integrated, context-aware agents capable of autonomous execution, cloud delegation, and workspace-wide AST (Abstract Syntax Tree) comprehension. However, this rapid evolution is exposing significant growing pains, particularly concerning strict schema handling for third-party reasoning models, opaque billing/credit systems, and fragile Terminal User Interfaces (TUIs).

## 2. Activity Comparison
Activity remains high across the board, though release cycles vary from rapid daily patching to internal architectural sprints. 

| Tool | Updated Issues (Today) | Active PRs (Today) | Release Status (Last 24h) | Focus Area |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10+ | 10 | **No release** (v2.1.120) | TUI freezing bugs, API regressions, git worktree support |
| **OpenAI Codex** | 10+ | 10 | **Alpha releases only** (rust-v0.126.0-alpha.8) | `PermissionProfile` migration, cloud execution, billing/credit UI |
| **Gemini CLI** | 10+ | 10 | **Nightly** (v0.41.0-nightly) | Workspace trust enforcement, memory management, auth fixes |
| **GitHub Copilot CLI**| 10+ | 0 | **No release** (v1.0.36) | Autopilot infinite loops, quota consumption, plugin isolation |
| **Kimi Code** | 7+ | 10 | **No release** (v1.39.0) | Approval timeout overhauls, session observability |
| **OpenCode** | 10+ | 10 | **Patches** (v1.14.27, v1.14.28) | Next-gen model support, AST tools, session persistence |
| **Pi** | 10+ | 10 | **Active patching** (v0.70.3 to v0.70.5) | Local LLM timeouts, self-updating binary, new providers |
| **Qwen Code** | 10+ | 10 | **Nightly** (v0.15.2-nightly) | DeepSeek V4 API compatibility, managed background shells |

## 3. Shared Feature Directions
*   **AST-Aware Code Intelligence:** Moving beyond flat-text file reading to reduce token waste and enable precise code editing. *(Active in Gemini CLI #22745, OpenCode PR #24515)*.
*   **Third-Party Reasoning Model Compatibility:** A major ecosystem pain point. Tools are struggling to adapt to the strict API schemas of external reasoning models (like DeepSeek V4) which reject standard fields (`eager_input_streaming`) or require specific context handling (`reasoning_content`). *(Affecting OpenCode #24627, Pi #3779, Qwen Code #3579)*.
*   **Advanced Context & Memory Management:** Need for smarter routing between global/project-scoped memory, explicit context window inspection, and better session compaction. *(Active in Gemini CLI, OpenCode PR #24210, Claude Code)*.
*   **Agent Lifecycle & Timeout Control:** Moving away from rigid, hardcoded timeouts toward indefinite agent loops governed by turn lifecycles and circuit breakers. *(Active in Kimi Code #2087, Pi #3715, GitHub Copilot CLI)*.
*   **Cloud & Remote Execution:** Shifting agentic workloads from local sandboxes to remote executors and cloud environments. *(Active in OpenAI Codex PR #19575, GitHub Copilot CLI)*.

## 4. Differentiation Analysis
*   **Architectural Paradigms:** **OpenAI Codex** is heavily investing in a Rust-based core (`codex-rs`) and strict cryptographic agent identity (JWTs/JWKS) for enterprise-grade cloud execution. In contrast, tools like **OpenCode** and **Qwen Code** are focusing heavily on immediate model extensibility, pushing SQLite symbol indexing and rapid integration of diverse models like GPT-5.5 and DeepSeek-V4.
*   **Target User Base:** **GitHub Copilot CLI** is currently dominated by enterprise concerns: opaque "premium request" billing, auto-top-up failures, and rigid safety flags. Conversely, **Kimi Code** and **Pi** are highly focused on the power-user/developer tinkerer, addressing multi-session management, local LLM timeouts, and CLI self-updaters.
*   **Security Boundaries:** **Gemini CLI** and **Claude Code** are heavily focused on workspace trust, permission models, and system-prompt enforcement. Gemini is explicitly blocking destructive filesystem operations (e.g., replacing `/etc/passwd`), while Claude Code deals with architectural bypass vulnerabilities in `CLAUDE.md`.

## 5. Community Momentum & Maturity
*   **Rapid Iterators:** **Pi**, **OpenCode**, and **Qwen Code** show incredible velocity. Pi shipped 3 patch releases in a single day to fix a startup crash, while Qwen Code and OpenCode are swiftly adopting newly released models (GPT-5.5, DeepSeek-V4).
*   **Internal Architect Focus:** **OpenAI Codex** and **Claude Code** appear to be in heavy architectural refactoring phases internally. Codex is replacing legacy `SandboxPolicy` with `PermissionProfile`, while Claude Code is dealing with long-standing TUI rendering bugs (Ink framework) and Minified JS crashes.
*   **Community Frustration:** **GitHub Copilot CLI** has high community interaction but zero public PR activity today, resulting in mounting frustration over infinite billing loops. **Gemini CLI** is struggling with initial onboarding friction (OAuth 403s) and update looping.

## 6. Trend Signals & Strategic Takeaways
1.  **The "Bring Your Own Model" (BYOM) Tax is High:** Developers expect CLI tools to seamlessly support any OpenAI-compatible endpoint (LM Studio, vLLM, Ollama, DeepSeek). Tools that pass provider-specific headers (like Anthropic's `cache_control`) to generic endpoints are facing 400 errors. *Takeaway: CLI architectures must strictly segregate provider-specific API payloads from generic OpenAI-schema payloads.*
2.  **Agentic Autonomy Requires Billing Circuit Breakers:** The emergence of "infinite loops" silently draining paid tokens/credits (seen in Copilot CLI and Claude Code) is eroding user trust. *Takeaway: Autonomy must be paired with hard cost caps, idle timeouts, and transparent per-step cost previews.*
3.  **Context Windows are Hitting Real Limits:** As models advertise 400K to 1M token contexts, CLI tools are struggling to actually utilize them. Compaction fails, subagents crash, and UIs freeze. *Takeaway: Pure context size is no longer the bottleneck; intelligent context routing (AST indexing, compaction, and memory tiering) is the next engineering frontier.*
4.  **Terminal UIs are Fragile:** Across almost all tools (Claude, Gemini, Qwen, Kimi), TUI rendering bugs—flickering, freezing on ESC, broken line wrapping, and JSON corruption—are a major drag on UX. *Takeaway: AI CLI developers need to invest heavily in robust terminal rendering frameworks, as standard React/Ink approaches are breaking down under complex streaming agent outputs.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (2026-04-28)

## 1. Top Skills Ranking

The most-watched and actively discussed Skills are defined by their high utility for enterprise workflows, quality assurance, and ecosystem robustness.

1. **document-typography ([PR #514](https://github.com/anthropics/skills/pull/514))**
   - **Functionality:** Prevents typographic anomalies in AI-generated documents, specifically targeting orphan word wraps, widow paragraphs, and numbering misalignment.
   - **Status:** [OPEN]
   - **Highlights:** Addresses a universal pain point—every document Claude generates is susceptible to these subtle formatting flaws. Highly anticipated because it elevates output polish without requiring user intervention.

2. **ODT OpenDocument Skill ([PR #486](https://github.com/anthropics/skills/pull/486))**
   - **Functionality:** Enables creation, template filling, parsing, and HTML conversion for OpenDocument Format files (.odt, .ods).
   - **Status:** [OPEN]
   - **Highlights:** Fills a major gap for users in open-source and ISO-standard enterprise environments, reducing dependency on proprietary document formats.

3. **skill-quality-analyzer & skill-security-analyzer ([PR #83](https://github.com/anthropics/skills/pull/83))**
   - **Functionality:** Introduces two "meta skills" to the marketplace. The quality analyzer evaluates skills across five dimensions (structure, documentation, etc.), while the security analyzer scans for vulnerabilities.
   - **Status:** [OPEN]
   - **Highlights:** A critical proposal for ecosystem maturity, providing standardized tooling to evaluate and secure community-contributed skills before deployment.

4. **sensory: macOS Automation via AppleScript ([PR #806](https://github.com/anthropics/skills/pull/806))**
   - **Functionality:** Replaces screenshot-based computer use with native `osascript` (AppleScript) automation for macOS, featuring a two-tier permission model.
   - **Status:** [OPEN]
   - **Highlights:** Represents a major leap in local OS automation, allowing Claude to interact directly with native applications rather than relying on visual parsing.

5. **HADS: Human-AI Document Standard ([PR #616](https://github.com/anthropics/skills/pull/616))**
   - **Functionality:** Implements a lightweight Markdown convention for writing technical documentation optimized for both human and AI consumption.
   - **Status:** [OPEN]
   - **Highlights:** Tackles the emerging paradigm where AI agents read documentation before humans do, streamlining the documentation maintenance burden.

6. **fix(docx): Tracked Change Collision Fix ([PR #541](https://github.com/anthropics/skills/pull/541))**
   - **Functionality:** Prevents document corruption by resolving shared `w:id` namespace collisions between bookmarks and tracked changes in OOXML files.
   - **Status:** [OPEN]
   - **Highlights:** A vital bugfix for users relying on collaborative DOCX editing features, demonstrating the community's focus on enterprise-grade document fidelity.

7. **Remove Duplicate skill-creator ([PR #666](https://github.com/anthropics/skills/pull/666))**
   - **Functionality:** Consolidates the `skill-creator` skill by removing the inferior version in favor of the strictly more capable one in `claude-plugins-official`.
   - **Status:** [OPEN]
   - **Highlights:** Highlights ongoing ecosystem hygiene efforts and the need for better synchronization across Anthropic's official repositories.

## 2. Community Demand Trends

Distilled from the most active Issues, the community is heavily focused on **infrastructure reliability, enterprise readiness, and collaborative workflows**:

- **Org-Wide Skill Sharing & Permissions ([Issue #228](https://github.com/anthropics/skills/issues/228), [Issue #492](https://github.com/anthropics/skills/issues/492)):** Strong demand for centralized skill libraries and direct sharing links within organizations. Concurrently, users are raising alarms about community skills operating under the `anthropic/` namespace, highlighting a need for clear trust boundaries and namespace isolation.
- **Evaluation & Benchmarking Tooling ([Issue #556](https://github.com/anthropics/skills/issues/556), [Issue #202](https://github.com/anthropics/skills/issues/202)):** High demand for reliable `run_eval.py` execution and standardized skill-creator guidelines. Users want deterministic ways to test if skills actually trigger in the CLI (`claude -p`) and prefer concise, execution-focused instructions over verbose developer documentation.
- **Platform Reliability & API Stability ([Issue #406](https://github.com/anthropics/skills/issues/406), [Issue #61](https://github.com/anthropics/skills/issues/61)):** Recurring complaints regarding internal server errors (500s) during skill upload, deletion, and loading. A stable, bug-free management interface is a foundational requirement for the ecosystem's growth.
- **Cross-Platform & API Support ([Issue #29](https://github.com/anthropics/skills/issues/29), [Issue #16](https://github.com/anthropics/skills/issues/16)):** Continued interest in adapting Skills for AWS Bedrock and exposing Skills as standardized MCPs (Model Context Protocols) to bridge the gap between internal skills and external software APIs.
- **Agent Governance & Memory ([Issue #412](https://github.com/anthropics/skills/issues/412), [PR #154](https://github.com/anthropics/skills/pull/154)):** Growing demand for skills related to AI safety patterns, policy enforcement, and persistent memory systems that maintain context across conversational sessions.

## 3. High-Potential Pending Skills

The following open PRs have sustained community attention and address clear gaps, making them strong candidates for near-term merging:

- **[PR #514](https://github.com/anthropics/skills/pull/514) - `document-typography`:** Solves a universal formatting problem; extremely high applicability.
- **[PR #486](https://github.com/anthropics/skills/pull/486) - `odt`:** OpenDocument support is a frequent enterprise request; this PR has remained active through mid-April.
- **[PR #539](https://github.com/anthropics/skills/pull/539) & [PR #538](https://github.com/anthropics/skills/pull/538) - YAML Validation & PDF Case-Sensitivity Fixes:** Fundamental robustness improvements to core skill validation and PDF generation that clear immediate technical debt.
- **[PR #723](https://github.com/anthropics/skills/pull/723) - `testing-patterns`:** A comprehensive skill covering the full testing stack (Trophy model, AAA pattern, React Testing Library, API integration). Highly aligned with developer workflows.
- **[PR #509](https://github.com/anthropics/skills/pull/509) - `CONTRIBUTING.md`:** A crucial infrastructural addition to improve the repo's community health score from 25% and standardize the contribution process.

## 4. Skills Ecosystem Insight

The community's most concentrated demand centers on **enterprise-grade document generation fidelity, secure org-wide skill distribution, and robust evaluation tooling to ensure skills actually trigger and execute as intended.**

---

# Claude Code Community Digest — 2026-04-28

---

## 1. Today's Highlights

The **v2.1.120 `--resume`/`--continue` regression** dominates today's activity, with at least 7 duplicate issues filed in 48 hours reporting a minified JS crash (`g9H`/`UKH`/`FKH is not a function`). The **Rewind/ESC terminal freeze** is the second major theme, with multiple reports of unrecoverable hangs across macOS and Linux. No new releases shipped in the last 24 hours, so users affected by these regressions should stay on **v2.1.119** until a patch lands. Bedrock/Vertex users are also surfacing breaking API incompatibilities with newer model inference profiles.

---

## 2. Releases

No new releases in the last 24 hours. The latest shipped version remains **v2.1.120**, which introduced the `--resume`/`--continue` regression detailed below.

---

## 3. Hot Issues

| # | Issue | Why it matters |
|---|-------|----------------|
| 1 | [#53086 — `--resume`/`--continue` crash: "g9H is not a function" (v2.1.120 regression)](https://github.com/anthropics/claude-code/issues/53086) | **32 👍** — The top-voted issue this cycle. A JS runtime crash in the REPL mount effect (`onSessionRestored` stub missing) breaks all session-resume flows. Workaround: `claude --new` then `/resume` from the REPL. |
| 2 | [#13480 — Oversized image breaks conversation permanently](https://github.com/anthropics/claude-code/issues/13480) | **72 👍 / 72 comments** — Long-running open bug with no fix. Attaching an image that exceeds internal limits corrupts the session irrecoverably. |
| 3 | [#4805 — ESC key causes complete terminal freeze](https://github.com/anthropics/claude-code/issues/4805) | **16 👍 / 19 comments** — Critical TUI bug. Pressing ESC renders the entire terminal unresponsive, requiring force-kill. Still open since July 2025. |
| 4 | [#52209 — Rewind freezes terminal, unable to exit or navigate](https://github.com/anthropics/claude-code/issues/52209) | **13 👍 / 15 comments** — Closed but a cluster of duplicates remains open (#53804). Rewind UI traps users with no recovery path. |
| 5 | [#53804 — Rewind freezes terminal on macOS arm64 (v2.1.119)](https://github.com/anthropics/claude-code/issues/53804) | Fresh report confirming the rewind freeze persists even on v2.1.119, indicating a deeper TUI rendering issue. |
| 6 | [#51439 — Bedrock `thinking.type.enabled` not supported by newer inference profiles](https://github.com/anthropics/claude-code/issues/51439) | Claude Code sends `thinking.type: "enabled"` but newer Bedrock models (via inference profile ARNs) require `"adaptive"`. Results in 400 errors. |
| 7 | [#51711 — Opus 4.7 via Bedrock inference profiles fails](https://github.com/anthropics/claude-code/issues/51711) | Companion to #51439 — Opus 4.7 specifically rejects `thinking.type: "enabled"`. Claude Code can't detect the underlying model behind an ARN. |
| 8 | [#51855 — Agent-team pane crashes with `<Box>` nested inside `<Text>`](https://github.com/anthropics/claude-code/issues/51855) | **10 👍** — Agent-teams mode TUI crash when teammate recap contains inline markdown code spans. Ink rendering bug. |
| 9 | [#53223 — CLAUDE.md/AGENTS.md instruction compliance is architecturally unenforced](https://github.com/anthropics/claude-code/issues/53223) | Raises security concerns that system-prompt-level instructions in `CLAUDE.md` are not architecturally guaranteed, with documented real-world bypass scenarios. |
| 10 | [#53827 — Multiple repeat responses eating tokens](https://github.com/anthropics/claude-code/issues/53827) | Claude enters a loop of repeated responses, consuming tokens and destroying context. No workaround identified. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | [#53949 — Update HackerOne links in SECURITY.md](https://github.com/anthropics/claude-code/pull/53949) | Housekeeping fix updating Anthropic's responsible disclosure program URLs. |
| 2 | [#43824 — Fix shell injection in `claude-dedupe-issues.yml`](https://github.com/anthropics/claude-code/pull/43824) | **Security fix** — addresses a high-severity `run-shell-injection` finding from Semgrep in the dedup GitHub Action. Uses proper variable interpolation. |
| 3 | [#41447 — feat: open source claude code ✨](https://github.com/anthropics/claude-code/pull/41447) | Community mega-PR (open since March) consolidating multiple open-source requests. Symbolic but tracks sentiment. |
| 4 | [#33224 — feat(devcontainer): configurable Node.js version](https://github.com/anthropics/claude-code/pull/33224) | Bumps default DevContainer from Node 20 → Node 24 (LTS, since 20 hits EOL April 2026). Configurable via `NODE_VERSION` env var. |
| 5 | [#33234 — fix(commit-commands): handle initial commit](https://github.com/anthropics/claude-code/pull/33234) | Fixes `/commit` failing on repos with zero commits by falling back from `git diff HEAD` to `git diff --cached`. |
| 6 | [#5609 — feat(devcontainer): hybrid static/dynamic IP firewall](https://github.com/anthropics/claude-code/pull/5609) | Enhances DevContainer firewall with Meta API CIDR ranges + dynamic IP sets for CDN/load-balanced services. |
| 7 | [#30823 — feat(plugins): vibeguard prompt guard](https://github.com/anthropics/claude-code/pull/30823) | Community plugin that blocks prompt submission when secrets/PII patterns are detected, printing a redacted placeholder version. |
| 8 | [#53874 — Model selector shows misleading Sonnet 1M pricing](https://github.com/anthropics/claude-code/pull/53874) | Corrects `/model` selector pricing display for Sonnet extended-context usage. |
| 9 | [#53278 — Worktree sessions report wrong branch in system prompt](https://github.com/anthropics/claude-code/issues/53278) | (Related PR discussion) Claude Code reports the main-repo branch instead of the worktree branch in `gitStatus`. Affects multi-worktree CI workflows. |
| 10 | [#53614 — Double-Esc and `/mcp` hang when MCP server port is filtered](https://github.com/anthropics/claude-code/issues/53614) | MCP connection to a firewalled port blocks the TUI event loop, preventing Esc-Esc and `/mcp` from responding. Needs a connection timeout. |

> **Note:** A cluster of PRs from `carycooper777` (bounty-hunting bot) modified only `README.md` with billing complaints and were omitted as noise.

---

## 5. Feature Request Trends

1. **Conditional/automated `/compact` for headless workflows** ([#19877](https://github.com/anthropics/claude-code/issues/19877)) — Users running Claude Code in CI/CD and long automated sessions want Claude to invoke `/compact` on its own when context grows too large.
2. **Configurable `persistHookOutput` threshold** ([#50571](https://github.com/anthropics/claude-code/issues/50571)) — Hooks returning >10K characters of `additionalContext` get silently persisted to temp files. Developers want control over this limit for rich MCP tooling.
3. **Architectural enforcement of `CLAUDE.md` instructions** ([#53223](https://github.com/anthropics/claude-code/issues/53223)) — Not just a feature request but a security design ask: guarantee that project-level guardrails can't be bypassed by model behavior.
4. **Remote Control unstick mechanism** ([#51267](https://github.com/anthropics/claude-code/issues/51267)) — Mobile/remote sessions that hang mid-execution have no way to recover remotely; a cancel/unstick API is requested.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Regressions in rapid releases** | v2.1.120 broke `--resume`/`--continue` for *all* users. Seven duplicate issues in 2 days. Minified stack traces (`g9H`, `UKH`, `FKH`) make debugging impossible for the community. Users are pinning to v2.1.119 as a workaround. |
| **Terminal/TUI freezes with no recovery** | ESC key and Rewind both cause unrecoverable terminal hangs requiring force-quit, across macOS and Linux. These have been open for months (#4805 since July 2025) and cluster in recent duplicates. |
| **Bedrock/Vertex API compatibility lag** | Newer Bedrock inference profiles and Opus 4.7 reject the `thinking.type: "enabled"` parameter Claude Code sends. Users on AWS/Google cloud provider integrations are blocked from using latest models. |
| **Context loss from repeated responses** | #53827 reports Claude entering loops that waste tokens and corrupt conversation state — particularly painful on paid Max plans. |
| **Worktree git awareness** | Multiple reports (#53278, #54072) that Claude Code misreports the current branch inside git worktrees, undermining trust in its git context for automated commits and PRs. |
| **Noise from automated bounty PRs** | The repo is being spammed by an automated bounty-hunting account submitting README-only PRs with billing complaints, making it harder to find legitimate community contributions. |

---

*Data sourced from [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) on 2026-04-28.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-28

Here is the technical analysis and community digest for the `openai/codex` repository based on the latest GitHub activity.

## 1. Today's Highlights
Codex development is heavily focused on refactoring core internals, specifically migrating from legacy `SandboxPolicy` to a unified `PermissionProfile` system and introducing cloud execution capabilities. In the public sphere, the community is actively voicing frustrations regarding credit allocation, severe performance regressions in the CLI resume picker, and context compaction failures affecting GPT-5.5. 

## 2. Releases
No stable releases were published in the last 24 hours. However, the Rust codebase (`codex-rs`) saw a rapid succession of alpha iterations, indicating active internal development:
* **rust-v0.126.0-alpha.8**, **alpha.7**, **alpha.6**, and **alpha.4** were released. Details are sparse, but this version bump likely corresponds to the new cloud executor registration and MCP tool unification PRs seen today.

## 3. Hot Issues
1. **[P0 Blocker] Remote compact task fails 100% with GPT-5.5** ([#19486](https://github.com/openai/codex/issues/19486)): A critical server-side bug completely breaks GPT-5.5 when conversations hit the auto-compact context limit, forcing users to abandon threads.
2. **Regression: CLI resume picker slowed to 8-60s** ([#19483](https://github.com/openai/codex/issues/19483)): The `0.124.0` update introduced a severe performance degradation in session resumption, stalling developer workflows. 
3. **Credits disappeared without usage records** ([#19242](https://github.com/openai/codex/issues/19242)): Users report credits vanishing from their accounts with no corresponding API usage logs, sparking trust and billing concerns.
4. **Support 1M token context for GPT-5.5** ([#19464](https://github.com/openai/codex/issues/19464)): With the API supporting up to 1M tokens, the community is heavily requesting that the Codex UI/CLI lift its current 400K context window limitation.
5. **Auto top-up fails when weekly limit is reached** ([#19872](https://github.com/openai/codex/issues/19872)): A breaking bug in the billing system where hitting the weekly usage cap halts the auto top-up feature from triggering.
6. **"Fast" service tier should not be the default** ([#19230](https://github.com/openai/codex/issues/19230)): Developers are frustrated by a silent change making the `Fast` service tier default for enterprise users, leading to unexpected routing and billing behaviors.
7. **Desktop idle usage drain via background memory generation** ([#19732](https://github.com/openai/codex/issues/19732)): The Codex Desktop app is silently consuming weekly credits in the background while idle to generate memories (`gpt-5.4` requests).
8. **MCP tool invocation regressed for local providers** ([#19871](https://github.com/openai/codex/issues/19871)): Users utilizing Ollama and local providers via MCP have been blocked since `v0.117.0` due to a tool invocation regression.
9. **Persistent blurred overlay on Intel Macs** ([#18341](https://github.com/openai/codex/issues/18341)): A lingering UI bug affecting Intel Mac users running macOS 15.0.1, making the app difficult to use due to a translucent composer overlay.
10. **Spark usage blocked by global usage limits** ([#19868](https://github.com/openai/codex/issues/19868)): Users with remaining specialized "Spark" credits cannot use them if their standard global weekly limit has been exhausted.

## 4. Key PR Progress
1. **Unified mentions in TUI** ([#19068](https://github.com/openai/codex/pull/19068)): Introduces an improved, unified `@` mention interface in the Terminal User Interface for referencing files, commands, and context.
2. **Trace cancelled inference streams** ([#19839](https://github.com/openai/codex/pull/19839)): Fixes observability by recording partial outputs and gracefully closing provider streams when a user cancels an LLM request mid-generation.
3. **Add cloud executor registration to exec-server** ([#19575](https://github.com/openai/codex/pull/19575)): Lays the groundwork for remote execution by allowing a local `codex exec-server` to register and connect via websocket to `codex-cloud-environments`.
4. **Permissions: Store thread sessions as profiles** ([#19776](https://github.com/openai/codex/pull/19776)): Part of a massive architectural migration to remove legacy `SandboxPolicy` in favor of `PermissionProfile` to streamline state authority.
5. **Permissions: Require profiles in TUI thread state** ([#19773](https://github.com/openai/codex/pull/19773)): Ensures the TUI strictly relies on the new `PermissionProfile` rather than treating it as an optional add-on to legacy sandbox states.
6. **Verify agent identity JWTs with JWKS** ([#19764](https://github.com/openai/codex/pull/19764)): Security enhancement enforcing cryptographic verification (via backend JWKS) of AgentIdentity tokens, preventing the execution of forged JWT payloads.
7. **Unify deferred and normal MCPs** ([#19881](https://github.com/openai/codex/pull/19881)): Refactors the `ToolRouter` to merge split `mcp_tools` and `deferred_mcp_tools` lists, fixing spec resolution for dynamic tool loading.
8. **Fix plugin MCP approval policy** ([#19537](https://github.com/openai/codex/issues/19537)): Resolves an issue where "Always allow" preferences for MCP tools loaded via plugin manifests were not being reliably saved or applied.
9. **ChatGPT Library file upload/download hooks** ([#19458](https://github.com/openai/codex/pull/19458)): Implements native `store_in_library` support for file uploads, seamlessly integrating Codex file handling with the ChatGPT ecosystem.
10. **Migrate thread turns list to thread store** ([#19280](https://github.com/openai/codex/pull/19280)): Moves thread turn history to the new `ThreadStore`, paving the way for better offline support and reduced memory overhead.

## 5. Feature Request Trends
* **Remote Development & Cloud Execution:** Strong demand for native remote SSH/container support in the Desktop App ([#10450](https://github.com/openai/codex/issues/10450)) to match VS Code workflows.
* **Maximum Context Window Utilization:** Developers are eager to push GPT-5.5 to its advertised 1M context limit inside the CLI/App, finding the current 400k cap restrictive for large codebases ([#19464](https://github.com/openai/codex/issues/19464)).
* **Built-in Code Editor:** Requests are trending towards making the Codex Desktop App a complete IDE rather than just a chat interface, explicitly asking for features similar to Cursor ([#19636](https://github.com/openai/codex/issues/19636)).
* **Enhanced TUI Navigability:** Requests to upgrade static outputs (like `/diff`) into interactive, navigable TUI explorers ([#18149](https://github.com/openai/codex/issues/18149)).

## 6. Developer Pain Points
* **Credit & Billing Volatility:** The transition to a "weekly credit/limit" system is highly turbulent. Developers are experiencing silent credit drains via background tasks ([#19732](https://github.com/openai/codex/issues/19732)), phantom credit disappearances ([#19242](https://github.com/openai/codex/issues/19242)), and broken auto-top-ups ([#19872](https://github.com/openai/codex/issues/19872)), making consistent work impossible.
* **Aggressive and Inaccurate Safety Flags:** Users continue to express frustration over false-positive cyber-safety refusals during passive web research or documentation reads, breaking deep-work flows without recourse ([#19204](https://github.com/openai/codex/issues/19204), [#19403](https://github.com/openai/codex/issues/19403)).
* **App Instability on Large Histories:** The Desktop App struggles to maintain performance when local conversation histories grow large, causing typing delays, UI freezes, and random exits ([#18693](https://github.com/openai/codex/issues/18693)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-28

## 1. Today's Highlights
A new nightly release (`v0.41.0-nightly`) introduces headless workspace trust enforcement and secure `.env` loading, signaling a stronger focus on CI/CD security boundaries. Community activity remains dominated by authentication friction—including OAuth 403 errors and persistent Homebrew update looping—as well as significant strides in memory management, AST-aware code mapping, and terminal state hardening.

## 2. Releases
- **v0.41.0-nightly.20260427.g42587de73**
  - `fix(core)`: Only show `list` suggestion if partial input is empty ([PR #25821](https://github.com/google-gemini/gemini-cli/pull/25821), by @cynthialong0-0)
  - `feat(cli)`: Secure `.env` loading and enforce workspace trust in headless mode ([PR by @ehedlund](https://github.com/google-gemini/gemini-cli/pull/25821))

## 3. Hot Issues
| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [#25984 — Homebrew update loop: 0.38.2 → 0.39.1](https://github.com/google-gemini/gemini-cli/issues/25984) | Users run `brew upgrade` but CLI still reports an outdated version; 👍 5 indicates broad impact. |
| 2 | [#21773 — Yellow background makes UI intolerable](https://github.com/google-gemini/gemini-cli/issues/21773) | 9 comments; default theme color choice is blocking adoption on Linux terminals. |
| 3 | [#22745 — Assess AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745) | Epic exploring AST-based tools to reduce token waste and improve code navigation. |
| 4 | [#22525 — CLI spews unrelated Polish conversation from another user](https://github.com/google-gemini/gemini-cli/issues/22525) | Cross-user data leak in chat output—critical trust and privacy concern. |
| 5 | [#23535 — CLI exits silently on wrong API key](https://github.com/google-gemini/gemini-cli/issues/23535) | Poor first-run experience; raw error with no remediation guidance. |
| 6 | [#25447 — "Generator not initialized" on new auth login](https://github.com/google-gemini/gemini-cli/issues/25447) | Blocks onboarding for brand-new users trying the web auth flow. |
| 7 | [#24916 — Permissions repeatedly requested for the same file](https://github.com/google-gemini/gemini-cli/issues/24916) | "Allow for all future sessions" fails to stick, eroding trust in the permission model. |
| 8 | [#25166 — Shell command hangs "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166) | 👍 3; agent gets stuck thinking a finished command is still active. |
| 9 | [#24285 — CLI replaces local /etc/passwd](https://github.com/google-gemini/gemini-cli/issues/24285) | Suggests insufficient guardrails on destructive filesystem operations. |
| 10 | [#23717 — Inconsistent workspace boundary enforcement](https://github.com/google-gemini/gemini-cli/issues/23717) | Scripts escape workspace via generic bash tool, undermining security model. |

## 4. Key PR Progress
| # | PR | Description |
|---|----|-------------|
| 1 | [#26063 — Restrict permissions on project temp dir tree](https://github.com/google-gemini/gemini-cli/pull/26063) | Tightens file-system permissions on `~/.gemini/` state (logs, memory, checkpoints). |
| 2 | [#26066 — Treat transient errors as non-terminal](https://github.com/google-gemini/gemini-cli/pull/26066) | Prevents silent fallback from user-selected model to Flash during rate limits. |
| 3 | [#25291 — User-friendly error on invalid API keys](https://github.com/google-gemini/gemini-cli/pull/25291) | Replaces raw SDK crash with guided message pointing to `gemini login`. |
| 4 | [#26073 — Fix remaining issues with generalist profile](https://github.com/google-gemini/gemini-cli/pull/26073) | Continues stabilization of the default agent persona. |
| 5 | [#25912 — Apply compact tool output to MCP tools](https://github.com/google-gemini/gemini-cli/pull/25912) | Extends `compactToolOutput` to MCP servers, reducing token noise for third-party tools. |
| 6 | [#25639 — Add /bug-memory command and auto heap snapshot](https://github.com/google-gemini/gemini-cli/pull/25639) | Auto-captures V8 heap snapshot when RSS > 2 GB; new `/bug-memory` slash command. |
| 7 | [#20738 — Configurable maxFileCount for file search](https://github.com/google-gemini/gemini-cli/pull/20738) | Exposes `context.fileFiltering.maxFileCount` and warns on truncation in large repos. |
| 8 | [#26079 — Better error message for failed cloudshell-gca auth](https://github.com/google-gemini/gemini-cli/pull/26079) | P1 fix giving actionable guidance when Cloud Shell auth falls over. |
| 9 | [#26043 — Settings persistence & OAuth URL truncation fix](https://github.com/google-gemini/gemini-cli/pull/26043) | Ensures settings survive deprecated-value migration; fixes OAuth URL cut off in alternate buffer. |
| 10 | [#25944 — Harden terminal state recovery & keypress parsing](https://github.com/google-gemini/gemini-cli/pull/25944) | Prevents Ctrl+L and other shortcuts from dying after message responses. |

## 5. Feature Request Trends
- **AST-aware code intelligence** (#22745, #22746): Community wants the agent to understand code structure rather than treat files as flat text, aiming for fewer tokens and more precise edits.
- **Smarter memory routing** (#22819, #22809): Demand for global vs. project-scoped memory with proactive writes based on user corrections and stated preferences.
- **Plan versioning & diffs** (#17794): Users want iterative planning with revision tracking instead of silent overwrites.
- **Configurable limits & transparency** (#20738): Exposing hidden limits (e.g., 20k file cap) so large-workspace users aren't silently truncated.
- **Agent awareness of approval modes** (#23582): Subagents should respect Plan/Auto-Edit constraints in their instructions, not just via policy enforcement.

## 6. Developer Pain Points
- **Authentication friction is the top gatekeeper.** OAuth 403s (#26080), typo'd scopes (#23504), `IneligibleTierError` (#20425), and "Generator not initialized" (#25447) collectively block a significant slice of new users across platforms.
- **Homebrew update detection is stale.** Multiple reports (#25984, #26081) show `brew upgrade` reporting success while the CLI insists it's outdated—likely a version-detection caching bug.
- **Permission model doesn't stick.** Recurring prompts for the same file (#24916) and inconsistent workspace boundary enforcement (#23717) make the security UX feel unpredictable.
- **Terminal rendering bugs persist.** Yellow background (#21773), thick borders (#24915), SSH text scrambling (#24202), and broken streaming tables (#25218) suggest the Ink-based TUI layer needs a stabilization pass.
- **Destructive actions lack guardrails.** The agent replacing `/etc/passwd` (#24285) or editing `.gitignore`d files (#22881) highlights gaps in the safety boundary enforcement that the new headless trust feature begins to address.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-28

## 1. Today's Highlights
No new releases or pull requests were published in the last 24 hours, but the issue tracker remains highly active with 44 issues updated. The dominant themes are **autopilot infinite loops consuming premium request quotas**, plugin/configuration isolation bugs, and several new accessibility and terminal rendering requests. The community continues to push for better quota transparency and more robust agent loop-termination logic.

---

## 2. Releases
No new releases in the last 24 hours. The latest identified version in issues is **1.0.36**.

---

## 3. Hot Issues

1. **[#2591](https://github.com/github/copilot-cli/issues/2591)** — *Single session consumes 80-100 premium requests per invocation*
   The most-discussed issue (31 comments, 13 👍). A single session request triggers cascading premium requests on every tool invocation/thinking step. Closed but closely related to ongoing quota complaints; users consider this the root cause of rapid quota drain.

2. **[#1703](https://github.com/github/copilot-cli/issues/1703)** — *Org-enabled models (e.g., Gemini 3.1 Pro) missing from CLI model list*
   25 comments and the highest 👍 count (40) of any open issue. Copilot CLI shows a reduced model list compared to VS Code Copilot under the same org/account. Highlights inconsistency across GitHub Copilot surfaces.

3. **[#1477](https://github.com/github/copilot-cli/issues/1477)** — *Autonomous continuation silently spends premium requests after model completion*
   9 comments, 18 👍. The agent continues autonomously and bills premium requests even after the model has completed its response. Seen as a budget-control failure.

4. **[#2374](https://github.com/github/copilot-cli/issues/2374)** — *Autopilot enters infinite loop*
   7 comments. After approving a `/plan`, autopilot loops indefinitely. Users report no circuit-breaker or max-iteration limit.

5. **[#2969](https://github.com/github/copilot-cli/issues/2969)** — *Autopilot infinite loop on externally blocked task, drains quota*
   3 comments. When the agent can't satisfy a prerequisite, autopilot relaunches indefinitely—one premium request per iteration—until quota exhaustion. A damaging variant of the loop bug.

6. **[#3000](https://github.com/github/copilot-cli/issues/3000)** — *`--config-dir` does not isolate plugins (always reads root `config.json`)*
   3 comments. `--config-dir` fails to redirect plugin/MCP config reads, undermining multi-project isolation. Filed just yesterday.

7. **[#2977](https://github.com/github/copilot-cli/issues/2977)** — *Custom skills not loading in latest version*
   3 comments, 1 👍. Skills from `~/.copilot/skills` and `~/.claude/skills` fail to load after a recent update, breaking custom workflows.

8. **[#2769](https://github.com/github/copilot-cli/issues/2769)** — *Copilot Pro+ weekly rate limit not resetting*
   8 comments, 3 👍. Pro+ subscribers report rate limits persisting past the expected reset window. Closed, but users continue to chime in.

9. **[#2812](https://github.com/github/copilot-cli/issues/2812)** — *Native binary crashes with SIGSEGV on macOS Apple Silicon*
   1 comment. The `copilot-darwin-arm64` binary exits silently with code 1 on macOS arm64. A blocking installation issue for affected users.

10. **[#2991](https://github.com/github/copilot-cli/issues/2991)** — *Windows Terminal setup doesn't work in WSL*
    1 comment. CLI refuses to detect Windows Terminal when running under WSL's default `$TERM=xterm-256color`. Affects the growing WSL user base.

---

## 4. Key PR Progress
No pull requests were updated in the last 24 hours.

---

## 5. Feature Request Trends

| Trend | Representative Issues | Signal |
|---|---|---|
| **Quota visibility & controls** | [#2591](https://github.com/github/copilot-cli/issues/2591), [#1477](https://github.com/github/copilot-cli/issues/1477), [#2969](https://github.com/github/copilot-cli/issues/2969) | Community wants per-step cost previews, hard caps, and loop-termination guards before premium requests are consumed. |
| **Terminal rendering improvements** | [#2372](https://github.com/github/copilot-cli/issues/2372) (disable auto-scroll), [#1787](https://github.com/github/copilot-cli/issues/1787) (collapsible color-coded sections), [#2405](https://github.com/github/copilot-cli/issues/2405) (mouse scroll routing) | Users want finer-grained control over scroll, output folding, and mouse event handling in both VS Code and standalone terminals. |
| **Configuration & plugin isolation** | [#3000](https://github.com/github/copilot-cli/issues/3000), [#2977](https://github.com/github/copilot-cli/issues/2977), [#2880](https://github.com/github/copilot-cli/issues/2880) (`keep-alive` default) | Demand is growing for project-scoped configs, reliable skill loading, and persistent CLI flag defaults. |
| **Accessibility** | [#3005](https://github.com/github/copilot-cli/issues/3005) (screen reader feedback for Ctrl+T), [#3004](https://github.com/github/copilot-cli/issues/3004) (Nerd Font glyph visibility) | New accessibility-focused requests are appearing, indicating an expanding user base with diverse needs. |
| **Interactive tool/agent UX** | [#3001](https://github.com/github/copilot-cli/issues/3001) (alt+tab to spawned shells), [#3002](https://github.com/github/copilot-cli/issues/3002) (agent instructs impossible TUI interaction), [#2999](https://github.com/github/copilot-cli/issues/2999) (background explore agents too slow) | Users want the agent to understand its own limitations with interactive terminals and to better coordinate background sub-agents. |

---

## 6. Developer Pain Points

1. **Autopilot infinite loops are the #1 frustration.** Multiple issues ([#2374](https://github.com/github/copilot-cli/issues/2374), [#2969](https://github.com/github/copilot-cli/issues/2969), [#1477](https://github.com/github/copilot-cli/issues/1477)) report loops that silently burn through premium request quotas with no circuit-breaker. This is eroding trust in autopilot mode.

2. **Premium request billing feels opaque and unpredictable.** Users cannot predict how many requests a single invocation will cost ([#2591](https://github.com/github/copilot-cli/issues/2591)), and rate-limit resets are unreliable ([#2769](https://github.com/github/copilot-cli/issues/2769)). The community is asking for upfront cost estimates and hard spending caps.

3. **Plugin and skill loading regressions break workflows.** The latest version failing to load custom skills ([#2977](https://github.com/github/copilot-cli/issues/2977)) and `--config-dir` not isolating plugins ([#3000](https://github.com/github/copilot-cli/issues/3000)) undermine multi-project setups and MCP-based extensions.

4. **Clipboard and input bugs on Windows/macOS.** Copy-paste issues ([#2998](https://github.com/github/copilot-cli/issues/2998), [#2997](https://github.com/github/copilot-cli/issues/2997)) and the native macOS binary crash ([#2812](https://github.com/github/copilot-cli/issues/2812)) are blocking daily usage for affected developers.

5. **Agent awareness of its own terminal constraints.** The agent instructs users to interact with spawned TUIs they can't access ([#3002](https://github.com/github/copilot-cli/issues/3002), [#3001](https://github.com/github/copilot-cli/issues/3001)), and background explore agents waste resources by duplicating already-found information ([#2999](https://github.com/github/copilot-cli/issues/2999)). Smarter orchestration is needed.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-28

## 1. Today's Highlights

The community remains highly active with **no new releases** in the past 24 hours, but significant progress is being made on several architectural improvements. The most notable development is a concentrated effort to overhaul the **approval timeout system**, with multiple PRs addressing a long-standing 5-minute hardcoded limit that has frustrated users of long-running agent workflows. Additionally, contributors are investing in **observability and developer experience**, with new PRs exposing runtime identity (PID + session ID) and dynamic terminal titles to help developers manage concurrent sessions.

---

## 2. Releases

No new releases were published in the last 24 hours. The latest public version remains **v1.39.0**.

---

## 3. Hot Issues

1. **[#1823](https://github.com/MoonshotAI/kimi-cli/issues/1823) — Configurable Approval Request Timeout (or Unlimited)** ⭐2 👍5 comments
   A top community request. The hardcoded 300-second approval timeout auto-cancels long-running operations, breaking complex multi-step agent workflows. With 2 thumbs-up and active discussion, this is a high-impact pain point. Multiple PRs (#2087, #2086) are now directly targeting this.

2. **[#2074](https://github.com/MoonshotAI/kimi-cli/issues/2074) — `/web` mode JavaScript MIME type error on Windows**
   In v1.39.0, the `/web` local server serves JavaScript files with incorrect MIME types on Windows 10, making the web UI completely unusable. This is a blocking regression for anyone using the web interface on Windows.

3. **[#2091](https://github.com/MoonshotAI/kimi-cli/issues/2091) — Session becomes extremely slow after extensive MATLAB work**
   A single session degrades to several seconds per token after prolonged use (specifically with MATLAB code), while other sessions remain fast. This suggests a session-specific memory or context accumulation bug that worsens over time.

4. **[#2090](https://github.com/MoonshotAI/kimi-cli/issues/2090) — First-line extra character indentation**
   A UI rendering bug on WSL2 where the first line of text output has an extra character of indentation. While minor, it's a visual annoyance that affects daily readability.

5. **[#2089](https://github.com/MoonshotAI/kimi-cli/issues/2089) — Request: remove session execution from UI** `[enhancement]`
   User requests a simpler way to delete session execution history without manually navigating to filesystem folders. A quality-of-life improvement for session management.

6. **[#2081](https://github.com/MoonshotAI/kimi-cli/issues/2081) — Text rendering breaks at line wrap boundaries on Linux** `[enhancement]`
   Words are visually cut off at line wrap boundaries in Linux terminals, related to scrollbar rendering. Affects terminal UX across multiple Linux terminal emulators.

7. **[#2051](https://github.com/MoonshotAI/kimi-cli/issues/2051) — Shell transcript hides skill and flow slash prompts** `[CLOSED]`
   Interactive shell suppresses echo for `/skill:*` and `/flow:*` inputs, making the transcript confusing. Already resolved by merged PR #2052.

---

## 4. Key PR Progress

1. **[#2087](https://github.com/MoonshotAI/kimi-cli/pull/2087) — `fix(approval)`: scope pending requests to turn lifecycle** `[OPEN]`
   Directly addresses Issue #1823. Makes approval waits **indefinite by default** and cancels them through the existing `ApprovalSource` lifecycle when the owning turn exits, rather than using a hardcoded 5-minute timer. This is the core architectural fix the community has been waiting for.

2. **[#2082](https://github.com/MoonshotAI/kimi-cli/pull/2082) — `feat(session)`: expose runtime identity (pid + session id)** `[OPEN]`
   Adds externally observable signals (process title, handshake file) mapping a running PID to a Kimi session ID. Essential for monitoring tools, process managers, and debugging concurrent sessions.

3. **[#2083](https://github.com/MoonshotAI/kimi-cli/pull/2083) — `feat(proctitle)`: set dynamic terminal title with cwd + session topic** `[OPEN]`
   Sets the terminal/tab title dynamically to show `cwd + session topic`, resolving a regression since v1.15.0. Makes juggling multiple concurrent sessions across different projects practical.

4. **[#2088](https://github.com/MoonshotAI/kimi-cli/pull/2088) — `chore(config)`: raise default max_steps_per_turn from 500 to 1000** `[OPEN]`
   Doubles the agent step limit per turn, giving long multi-step agent workflows more headroom before hitting `MaxStepsReached`. Reflects the community trend toward increasingly complex agentic workflows.

5. **[#2003](https://github.com/MoonshotAI/kimi-cli/pull/2003) — `fix(soul)`: re-inject yolo reminder after context compaction** `[CLOSED]`
   Fixes a subtle bug where the non-interactive-mode ("yolo") reminder was lost after context compaction, potentially causing unexpected behavior in automated pipelines. A stability win for CI/CD use cases.

6. **[#2085](https://github.com/MoonshotAI/kimi-cli/pull/2085) — `test(ai)`: add e2e accuracy benchmarks** `[OPEN]`
   Introduces accuracy-driven E2E testing using 15 examples from Terminal Bench 2. A significant shift from correctness-only testing to **measuring how agent/harness/RAG changes affect rollout success rate**. This is a maturity milestone for the project's testing strategy.

7. **[#1852](https://github.com/MoonshotAI/kimi-cli/pull/1852) — `fix`: log hook task exceptions instead of silently discarding them** `[OPEN]`
   Replaces silent exception swallowing in 6 hook callback sites (`PreToolUse`, `PostToolUse`, `PreLLM`, `PostCompact`, `SubagentStop`) with proper `logger.error` calls. Critical for debuggability — hook failures were previously invisible.

8. **[#2052](https://github.com/MoonshotAI/kimi-cli/pull/2052) — `fix(shell)`: echo workflow slash inputs** `[CLOSED]`
   Fixes Issue #2051 by echoing `/skill:*` and `/flow:*` inputs in the shell transcript while keeping control commands suppressed. A clean UX fix that was merged and shipped.

9. **[#2080](https://github.com/MoonshotAI/kimi-cli/pull/2080) — `fix(web)`: show diff content in ToolInput instead of raw JSON** `[OPEN]`
   Improves the `/web` UI to render actual diff content instead of raw JSON strings in the `<ToolInput/>` component. A meaningful usability improvement for the web interface.

10. **[#2050](https://github.com/MoonshotAI/kimi-cli/pull/2050) — `fix(utils)`: detect virtual interface IPs** `[OPEN]`
    Fixes WebSocket 403 rejections when accessing `kimi web` via Tailscale, WireGuard, or Docker bridges. The root cause was `get_network_addresses()` only checking physical interfaces. Important for remote and containerized workflows.

---

## 5. Feature Request Trends

| Trend | Signal |
|-------|--------|
| **Flexible timeouts & agent lifecycle control** | #1823 (approval timeout), #2088 (max steps), #2087 (indefinite approvals) — users want agents that can run longer without arbitrary caps |
| **Better session management UX** | #2089 (delete sessions), #2082 (PID↔session mapping), #2083 (dynamic titles) — power users juggle multiple sessions and need better tooling |
| **Terminal rendering fidelity** | #2090 (indentation), #2081 (line wrap), #2051 (slash echo) — the TUI experience still has rough edges across different platforms |
| **Web UI parity** | #2074 (MIME type), #2080 (diff rendering) — the `/web` mode needs stabilization to match CLI quality |

---

## 6. Developer Pain Points

- **Hardcoded limits blocking real workflows**: The 5-minute approval timeout (#1823) and 500-step turn cap (#2088) are the most frequently cited blockers. Developers running complex refactors, large codebase analysis, or multi-file edits consistently hit these walls. PR #2087 and #2088 directly address this, indicating the maintainers are aware.

- **Platform-specific rendering issues**: WSL2 indentation bugs (#2090), Linux terminal line-wrap corruption (#2081), and Windows MIME type errors (#2074) show that cross-platform terminal rendering remains a persistent challenge. These are low-severity individually but collectively erode trust.

- **Silent failures and poor debuggability**: Hook exceptions being silently discarded (#1852) and the yolo-mode reminder vanishing after compaction (#2003) highlight that the system has too many "silent failure" modes. Developers in CI/CD pipelines are particularly affected when things break without logs.

- **Session state management friction**: No easy way to clean up session history (#2089), session-specific slowdowns after heavy use (#2091), and no way to identify which OS process maps to which session (#2082) — the session lifecycle needs a more thoughtful redesign for power users.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-28

## 1. Today's Highlights
OpenCode shipped two patch releases (v1.14.27 and v1.14.28) focusing on shell configurability, terminal noise reduction, and a fix for `opencode upgrade` on Bun installations. The community is actively discussing next-generation model support (GPT-5.5, DeepSeek-V4) and grappling with a recurring `eager_input_streaming` validation error affecting multiple providers. Meanwhile, several contributor PRs aim to harden session persistence, improve TUI copy/select behavior, and introduce AST-based code intelligence tooling.

---

## 2. Releases

### [v1.14.28](https://github.com/anomalyco/opencode/releases/tag/v1.14.28)
- **Fixed** `opencode upgrade` failing for Bun installs unless run inside a directory containing `package.json`.

### [v1.14.27](https://github.com/anomalyco/opencode/releases/tag/v1.14.27)
- **Added** configurable default shell for terminals and agent shell commands, manageable via Desktop settings.
- **Reduced** extraneous terminal noise during TUI workspace creation.
- **TUI:** Provider connection checks are now hidden until onboarding is complete; default toast timeout restored.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|--------------------|
| 1 | [#24628 — Storage Persistence Bug: Session Processor Not Writing to Disk Since Jan 31](https://github.com/anomalyco/opencode/issues/24628) | Critical data-loss scenario: sessions complete successfully but are never persisted to disk. Affects all data from Feb onward. | 10 comments, rapidly escalated; closed after triage but underlying concern about data recovery persists. |
| 2 | [#24627 / #24634 — `eager_input_streaming` field not permitted](https://github.com/anomalyco/opencode/issues/24627) | Multiple providers reject tool definitions containing `eager_input_streaming`, causing chat failures on Windows Desktop and TUI. | 6–3 comments each; users on MiniMax M2.5, Kimi, and others hitting this immediately after upgrading. |
| 3 | [#24039 — Add GPT-5.5 support for OpenAI provider](https://github.com/anomalyco/opencode/issues/24039) | Top feature request by 👍 (14). Users want first-class `gpt-5.5` model config, proper context window handling, and pricing alignment. | 19 comments; closed as completed (likely addressed in recent builds). |
| 4 | [#23887 — Kimi K2.6/K2.5 returns 'Provider returned error' on CLI](https://github.com/anomalyco/opencode/issues/23887) | OpenCode Go provider works for all models except Kimi K2.6/K2.5; suggests a model-specific serialization or API issue. | 24 comments; confirmed across Windows (#16685) and Linux. |
| 5 | [#24184 — IDE/editor context persists after closing file](https://github.com/anomalyco/opencode/issues/24184) | Since v1.14.23, closed files remain as injected context, causing the LLM to make incorrect assumptions. | 18 comments; affects daily workflow reliability. |
| 6 | [#24561 — GPT-5.5 OAuth context behaves as ~400k instead of 1M](https://github.com/anomalyco/opencode/issues/24561) | Effective context window is inconsistent between GPT-5.4 (1M) and GPT-5.5 (~400k), breaking compaction behavior. | 7 comments; closed, likely linked to the GPT-5.5 support fix. |
| 7 | [#24327 — ~30 catch blocks silently swallow errors across core modules](https://github.com/anomalyco/opencode/issues/24327) | Empty `catch {}` blocks in auth, session, and message handling hide failures, making debugging nearly impossible. | 5 comments; quality/observability concern for contributors. |
| 8 | [#10490 — Config option to disable copy-on-select behavior](https://github.com/anomalyco/opencode/issues/10490) | Long-standing TUI request (21 👍) to allow disabling mouse copy-on-select via `opencode.json`. | 12 comments; PR #24674 now addresses this. |
| 9 | [#24093 — Support DeepSeek-V4 models](https://github.com/anomalyco/opencode/issues/24093) | DeepSeek V4 was just released; provider needs API alignment for new model identifiers and pricing. | 8 comments, 11 👍; closed as completed. |
| 10 | [#22292 — Managed settings bypassed via OPENCODE_PERMISSION env var](https://github.com/anomalyco/opencode/issues/22292) | Enterprise security gap: managed config (`/etc/opencode/opencode.json`) can be overridden via environment variables and object merging. | 7 comments; follow-up to two prior security-hardening issues. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| 1 | [#24515 — Hash-anchored edits, AST tools, Symbol Index, Dependency Graph](https://github.com/anomalyco/opencode/pull/24515) | Ambitious new feature: `patch_file` with hash anchors, `ast_query`/`ast_edit` tools, persistent SQLite Symbol Index, and dependency graph for context intelligence. | Open |
| 2 | [#24512 — Refactor v2 session events as schemas](https://github.com/anomalyco/opencode/pull/24512) | Reworks session events from schema classes to const definitions with sync metadata; simplifies stepper matching. | Open (Beta) |
| 3 | [#23390 — Consume Enter in dialog useKeyboard handlers](https://github.com/anomalyco/opencode/pull/23390) | Fixes the bug where pressing Enter on an update dialog inadvertently submits the underlying prompt. | Closed (merged) |
| 4 | [#24674 — Preserve terminal selection when copy-on-select is disabled](https://github.com/anomalyco/opencode/pull/24674) | When `OPENCODE_EXPERIMENTAL_DISABLE_COPY_ON_SELECT=1` is set, terminal selection is preserved under native control. | Open |
| 5 | [#24116 — Avoid E2BIG during batched snapshot revert checkout](https://github.com/anomalyco/opencode/pull/24116) | Snapshot revert now batches file paths to avoid hitting OS argument-length limits on large snapshots. | Open |
| 6 | [#24678 — Disable in-app updater for non-AppImage Linux installs](https://github.com/anomalyco/opencode/pull/24678) | Prevents RPM/DEB installs from restarting without applying updates; avoids confused state. | Open |
| 7 | [#21996 — Surface nested subagent prompts](https://github.com/anomalyco/opencode/pull/21996) | Shows permission/question prompts from deeply nested subagents, not just direct children. | Closed (merged) |
| 8 | [#24677 — Remove compaction summary dividers](https://github.com/anomalyco/opencode/pull/24677) | Cleans up `---` divider lines in compaction summaries while preserving Markdown section structure. | Open |
| 9 | [#24680 — Resolve --agent names case-insensitively](https://github.com/anomalyco/opencode/pull/24680) | `opencode run --agent <name>` no longer requires exact case matching on agent IDs. | Open |
| 10 | [#24210 — Add /context command](https://github.com/anomalyco/opencode/pull/24210) | New TUI command to inspect what context a session is actually using, helping users reason about context window consumption. | Open |

---

## 5. Feature Request Trends

- **Next-gen model support** is the dominant theme: GPT-5.5 (#24039, 14 👍), DeepSeek-V4 (#24093, 11 👍), and Kimi K2.6 compatibility (#23887) are all highly requested. Users expect rapid provider updates when new models drop.
- **Context window transparency and control** is increasingly demanded — `/context` (PR [#24210](https://github.com/anomalyco/opencode/pull/24210)), compaction model overrides ([#24655](https://github.com/anomalyco/opencode/issues/24655)), and SQLite Symbol Index ([#24560](https://github.com/anomalyco/opencode/issues/24560)) all reflect desire to understand and optimize what fills the context window.
- **Configurable TUI behavior** remains a steady request stream: copy-on-select toggle (#10490, 21 👍), archived sessions in Desktop (#6680, 4 👍), and shell configurability (shipped in v1.14.27).
- **Enterprise/managed settings hardening** is a growing concern, with users flagging bypass vectors in managed config (#22292).

---

## 6. Developer Pain Points

- **Provider compatibility regressions** are a recurring frustration — the `eager_input_streaming` validation error (#24627, #24634) broke workflows for users of MiniMax, Kimi, and other providers overnight, and the Kimi K2.5/K2.6 provider error has persisted across multiple releases.
- **Stale context injection** (#24184) undermines trust in the LLM's responses, as closed-file context silently pollutes prompts.
- **Silent error swallowing** (#24327) across ~30 catch blocks makes debugging production issues extremely difficult for both maintainers and users.
- **Session data loss** (#24628) — even when closed, the prospect of months of missing persisted sessions is alarming for users relying on OpenCode for long-running projects.
- **TUI polish gaps** continue to surface: footer model state going stale (#23741), update dialog intercepting Enter (#23803), and copy-on-select being unconfigurable (#10490) collectively degrade the daily terminal experience.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for 2026-04-28, based on repository activity from the past 24 hours.

## 1. Today's Highlights
The Pi mono-repo had a highly active day, shipping three rapid-fire patch releases (v0.70.3 to v0.70.5) to address critical startup crashes, HTML export bugs, and to introduce a built-in self-updater. The milestone `pi update` feature, contributed by core maintainer @mitsuhiko, marks a significant UX improvement. Meanwhile, the community was buzzing with new provider integrations—most notably Cloudflare Workers AI and AI Gateway—and several deep-dive bug reports concerning local LLM timeouts and sandbox environments.

## 2. Releases
*   **[v0.70.3](https://github.com/badlogic/pi-mono/releases/tag/v0.70.3):** Introduced `pi update` for self-updating the binary in addition to packages, and added support for Azure Cognitive Services endpoints. *(Note: This release introduced a regression causing startup failures, which was addressed in subsequent patches).*
*   **[v0.70.4](https://github.com/badlogic/pi-mono/releases/tag/v0.70.4):** Fixed a packaged `pi` startup failure where the session selector was incorrectly importing a source-only utility path.
*   **[v0.70.5](https://github.com/badlogic/pi-mono/releases/tag/v0.70.5):** Fixed an HTML export bug where ANSI-renderer trailing padding was incorrectly preserved as extra blank wrapped lines.

## 3. Hot Issues
1.  **Local LLM timeouts at 5 minutes ([#3715](https://github.com/badlogic/pi-mono/issues/3715)):**
    Streaming against local OpenAI-compatible backends (like vLLM) dies after 5 minutes due to undici's default `bodyTimeout`. The community is frustrated that internal timeout settings cannot bypass this cap, affecting long tool calls.
2.  **v0.70.3 Startup Crash ([#3846](https://github.com/badlogic/pi-mono/issues/3846)):**
    A bad import path in the session selector caused the packaged binary to crash on launch with `ERR_MODULE_NOT_FOUND`. (Fixed in v0.70.4 via PR [#3827](https://github.com/badlogic/pi-mono/pull/3827)).
3.  **`pi install` Package Manager Conflicts ([#3823](https://github.com/badlogic/pi-mono/issues/3823)):**
    If Pi is installed via `pnpm`, `pi install` fails because it attempts to use `npm` under the hood. Users are requesting that the tool respects the globally configured package manager.
4.  **OpenCode/minimax-m2.5-free 400 Errors ([#3779](https://github.com/badlogic/pi-mono/issues/3779)):**
    The provider rejected requests because Pi was sending unsupported Anthropic-specific API fields (`eager_input_streaming`, `cache_control`). Addressed in PR [#3802](https://github.com/badlogic/pi-mono/pull/3802).
5.  **Request for Image Generation Support ([#3817](https://github.com/badlogic/pi-mono/issues/3817)):**
    A highly discussed proposal to add native handling for OpenRouter/provider image-generation responses via a new `ImageContent` type in assistant messages.
6.  **DeepSeek V4 Flash Reasoning Silently Clamped ([#3787](https://github.com/badlogic/pi-mono/issues/3787)):**
    `xhigh` reasoning effort was being downgraded to `high` without user notification due to an unrecognized model ID in `models.ts`.
7.  **Symlinked Resource Path Inconsistencies ([#3767](https://github.com/badlogic/pi-mono/issues/3767)):**
    `pi config` and runtime headers resolve symlinked directories (`~/.pi/agent/`) inconsistently, causing configuration failures for users with shared/symlinked setups. Fixed in PR [#3818](https://github.com/badlogic/pi-mono/pull/3818).
8.  **Cloudflare AI Provider Requests ([#3850](https://github.com/badlogic/pi-mono/issues/3850)):**
    Users are requesting native support for Cloudflare Workers AI and AI Gateway for open-source models and caching/observability layers.
9.  **Broken Docs Links ([#3838](https://github.com/badlogic/pi-mono/issues/3838)):**
    The documentation site was appending double `/latest/latest/` paths to internal links, resulting in 404s. Fixed in PR [#3837](https://github.com/badlogic/pi-mono/pull/3837).
10. **Aggressive Autolink Corruption ([#3815](https://github.com/badlogic/pi-mono/issues/3815)):**
    An overzealous autolink transformation was wrapping generic `<name>.<extension>` strings in markdown links, corrupting AI source code generation and tool I/O.

## 4. Key PR Progress
1.  **Add built-in update command ([#3680](https://github.com/badlogic/pi-mono/pull/3680)):**
    Authored by @mitsuhiko, this allows `pi` to manage its own global binary updates, forming the backbone of the new v0.70.3 feature.
2.  **feat(ai): add Cloudflare AI Gateway as a provider ([#3856](https://github.com/badlogic/pi-mono/pull/3856)):**
    An open PR introducing Cloudflare AI Gateway to proxy OpenAI/Anthropic requests with caching, rate limiting, and analytics.
3.  **feat(ai): add Cloudflare Workers AI as a provider ([#3851](https://github.com/badlogic/pi-mono/pull/3851)):**
    Adds OpenAI-compatible support for open-source models hosted on Cloudflare's infrastructure.
4.  **fix(coding-agent): escape exported image data ([#3819](https://github.com/badlogic/pi-mono/pull/3819)):**
    Resolves an HTML injection/XSS vector where malformed base64 image data could break out of `src` attributes during HTML exports.
5.  **fix(coding-agent,ai): fallback to /proc/self/environ in Bun sandbox ([#3801](https://github.com/badlogic/pi-mono/pull/3801)):**
    A critical fix for Bun users where running inside a Linux sandbox (Landlock/seccomp) wiped `process.env`, crashing API key detection.
6.  **fix(coding-agent): close temp file fd after late truncation ([#3803](https://github.com/badlogic/pi-mono/pull/3803)):**
    Resolves a file descriptor leak causing `EBADF` / `EMFILE` crashes during prolonged bash executor sessions.
7.  **fix(coding-agent): dedupe symlinked resources ([#3818](https://github.com/badlogic/pi-mono/pull/3818)):**
    Canonicalizes paths across the codebase to fix bugs where symlinked config directories were being parsed incorrectly.
8.  **fix(ai): disable unsupported Anthropic fields for opencode minimax ([#3802](https://github.com/badlogic/pi-mono/pull/3802)):**
    Prevents Pi from sending unsupported Anthropic-specific caching/streaming fields to non-Anthropic providers.
9.  **add azure cognitive services as provider ([#3799](https://github.com/badlogic/pi-mono/pull/3799)):**
    Extends Azure OpenAI support to accept `*.cognitiveservices.azure.com` endpoints alongside standard endpoints.
10. **Remove Qwen CLI OAuth provider extension ([#3832](https://github.com/badlogic/pi-mono/pull/3832)):**
    Housekeeping PR to remove non-functional extensions following the discontinuation of Qwen's free OAuth tier on April 15.

## 5. Feature Request Trends
*   **Multi-modal Outputs:** Developers are pushing for native image-generation support, asking Pi to evolve from a text/code generator to a multi-modal interface capable of handling image output natively ([#3817](https://github.com/badlogic/pi-mono/issues/3817)).
*   **Advanced Sub-Agent Orchestration:** There is strong interest in RFCs proposing interactive sessions as "orchestrator" agents that can delegate tasks to sub-agents with independent, disk-persisted sessions ([#3783](https://github.com/badlogic/pi-mono/issues/3783)).
*   **Expanded Model UI:** Users are requesting better UX for the `/model` command, specifically asking for a new tab exposing the full list of +800 models without manually editing `models.json` ([#3804](https://github.com/badlogic/pi-mono/issues/3804), [#3858](https://github.com/badlogic/pi-mono/issues/3858)).
*   **Terminal Context Awareness:** Developers want extensions to be notified of `window_focus` and `window_blur` events to enable context-aware TUI workflows ([#3822](https://github.com/badlogic/pi-mono/issues/3822)).

## 6. Developer Pain Points
*   **Local/Custom LLM Timeouts:** Developers utilizing Pi with local hardware or self-hosted endpoints are frequently hitting rigid, hardcoded HTTP client timeouts (e.g., the 5-minute undici cap), stalling complex, long-running agentic tasks.
*   **Runtime Environment Configuration:** The tool is struggling with alternative runtimes and isolated environments. Multiple issues cropped up today regarding Pi's inability to detect global packages or environment variables when using `bun` instead of `npm`, or when executing within sandboxed environments like Linux namespaces ([#3809](https://github.com/badlogic/pi-mono/issues/3809), [#3801](https://github.com/badlogic/pi-mono/pull/3801)).
*   **Overzealous Output Manipulation:** Unnecessary behind-the-scenes modifications to AI outputs—like aggressive autolinking or improper ANSI padding—are breaking reproducible code outputs and causing display rendering crashes ([#3815](https://github.com/badlogic/pi-mono/issues/3815), [#3814](https://github.com/badlogic/pi-mono/issues/3814)).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

## Qwen Code Community Digest — 2026-04-28

### 1. Today's Highlights
The community is heavily focused on achieving seamless compatibility with third-party reasoning models like DeepSeek V4, with multiple reports highlighting API 400 errors caused by mishandled `reasoning_content`. Significant architectural progress was made on background task management, as core contributors merged foundational agent-control mechanisms and opened PRs for a managed shell pool. Finally, the TUI rendering and flickering issues saw active patching, promising a much smoother terminal experience for CLI users.

### 2. Releases
**[v0.15.2-nightly.20260427.3b0b6c052](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.2-nightly.20260427.3b0b6c052)**
*   **feat:** Added Catalan language support (`@jordimas` via [#3643](https://github.com/QwenLM/zwen-code/pull/3643)).
*   **fix (vscode-companion):** Fixed slash command completion not triggering correctly after message submit (`@yiliang114` via [#3609](https://github.com/QwenLM/zwen-code/pull/3609)).
*   **fix (cli):** Patched guard gradient rendering issues in the terminal UI.

### 3. Hot Issues
1.  **[Issue #3579](https://github.com/QwenLM/zwen-code/issues/3579) & [Issue #3619](https://github.com/QwenLM/zwen-code/issues/3619): DeepSeek V4 `reasoning_content` API 400 Errors.** 
    *Why it matters:* Users are experiencing widespread 400 errors when using DeepSeek V4. The API strictly requires `reasoning_content` in thinking mode to be passed back, but Qwen Code is currently stripping or dropping it during tool calls or model switches.
2.  **[Issue #3679](https://github.com/QwenLM/zwen-code/issues/3679): DeepSeek V4 Context Window Mismatch.**
    *Why it matters:* The official DS-V4 model is advertised with a 1M context window, but Qwen Code incorrectly reports it as 131.3K via the `/context` command, limiting the agent's usable context scope.
3.  **[Issue #3638](https://github.com/QwenLM/zwen-code/issues/3638): Terminal UI Flickering ("My eyes are blinded").**
    *Why it matters:* Users utilizing specific providers (e.g., GLM5.0) are experiencing severe UI flickering in the terminal, breaking core usability.
4.  **[Issue #3644](https://github.com/QwenLM/zwen-code/issues/3644): Rewind Fails with IDE Integration.**
    *Why it matters:* The `/rewind` command silently breaks when `ide.enabled` is set to `true` in `settings.json`, affecting users who bridge VS Code with the CLI.
5.  **[Issue #3669](https://github.com/QwenLM/zwen-code/issues/3669): Custom Model Thinking Tags Incompatibility.**
    *Why it matters:* Custom models (like MiniMax m2.7) use distinct data tags for thinking, which Qwen Code fails to parse, resulting in broken thought-process rendering.
6.  **[Issue #3664](https://github.com/QwenLM/zwen-code/issues/3664): Subagent Exceeds Context Window.**
    *Why it matters:* While the main agent respects `contextWindowSize`, background subagents do not, leading to unexpected crashes during large-scale background codebase exploration.
7.  **[Issue #3530](https://github.com/QwenLM/zwen-code/issues/3530): Maximum Update Depth Exceeded on Model Switch.**
    *Why it matters:* Switching models using the `/model` command throws a React `useEffect` infinite loop error, disrupting UI state management. 
8.  **[Issue #3616](https://github.com/QwenLM/zwen-code/issues/3616): MCP Tool Images Break Strict OpenAI Compat.**
    *Why it matters:* MCP tools returning images (like Playwright screenshots) violate the strict OpenAI `messages` schema, causing 400 errors on strict local servers like LM Studio.
9.  **[Issue #3678](https://github.com/QwenLM/zwen-code/issues/3678): Light Theme for Exported HTML.**
    *Why it matters:* A highly requested UX improvement. Users report eye strain from the dark-only theme in exported session HTML files and request a toggle.
10. **[Issue #2688](https://github.com/QwenLM/zwen-code/issues/2688): Tokenization Issues with CJK Filenames.**
    *Why it matters:* A persistent nuisance where the model persistently inserts spaces between Chinese and English characters in file paths, breaking terminal commands and file reads.

### 4. Key PR Progress
1.  **[PR #3682](https://github.com/QwenLM/zwen-code/pull/3682): Stop stripping reasoning on model switch.** Resolves the critical DeepSeek V4 bug (#3579) by ensuring thought blocks aren't destroyed when switching models or loading history.
2.  **[PR #3642](https://github.com/QwenLM/zwen-code/pull/3642): Managed background shell pool.** Replaces detached background processes (`&`) with a managed registry, allowing agents to query output or terminate long-running tasks.
3.  **[PR #3673](https://github.com/QwenLM/zwen-code/pull/3673): autoSkill Extraction.** Introduces a background agent that automatically reviews conversations with >20 tool calls to save reusable workflows as local project skills.
4.  **[PR #3663](https://github.com/QwenLM/zwen-code/pull/3663): Harden TUI Flicker.** Specifically targets the bounds-checking and rendering metrics causing the UI flickering reported in Issue #3638.
5.  **[PR #3617](https://github.com/QwenLM/zwen-code/pull/3617): Fix Media in Tool Results.** Fixes OpenAI schema violations by moving media content (screenshots) from `role: "tool"` to a follow-up `role: "user"` message.
6.  **[PR #3656](https://github.com/QwenLM/zwen-code/pull/3656): Recover Glued JSONL Records.** Adds a brace-depth scanner to fix session corruption issues where concatenated JSON records (`}{` on a single line) caused session load failures.
7.  **[PR #3680](https://github.com/QwenLM/zwen-code/pull/3680): Expand TUI Markdown Rendering.** Upgrades terminal markdown to support richer constructs like Mermaid diagrams and LaTeX math blocks.
8.  **[PR #3645](https://github.com/QwenLM/zwen-code/pull/3645): Fix OPENAI_MODEL Precedence.** Resolves a regression to ensure `/model` selections take precedence over environment variables (`OPENAI_MODEL`).
9.  **[PR #3627](https://github.com/QwenLM/zwen-code/pull/3627): macOS Desktop App Installer.** Creates a `.app` bundle for macOS, allowing users to launch Qwen Code natively from Spotlight or Launchpad.
10. **[PR #3214](https://github.com/QwenLM/zwen-code/pull/3214): Replace fdir Crawler with git ls-files.** Optimizes file indexing by respecting `.gitignore` and utilizing `ripgrep`, drastically speeding up autocomplete in large repositories.

### 5. Feature Request Trends
*   **Cross-Platform IDE Support:** Users are requesting official extensions beyond VS Code, with a strong push for a native Visual Studio extension ([Issue #3625](https://github.com/QwenLM/zwen-code/issues/3625)).
*   **Expanded Protocol Support:** A noticeable demand for broader protocol compatibility, specifically requesting HTTP MCP support within ACP mode ([Issue #3549](https://github.com/QwenLM/zwen-code/issues/3549)) and OSC notify support for terminal multiplexers ([Issue #2528](https://github.com/QwenLM/zwen-code/issues/2528)).
*   **Custom Model UI Adaptability:** Users are frequently requesting better structural handling for diverse third-party models, such as configurable thinking tags ([Issue #3669](https://github.com/QwenLM/zwen-code/issues/3669)) and accurate context window definitions.

### 6. Developer Pain Points
*   **Third-Party Reasoning Model Integration:** The strict schema requirements of external reasoning models (particularly DeepSeek V4's handling of `reasoning_content`) are causing widespread friction. Developers expect seamless "bring your own key" compatibility, but currently face 400 errors during multi-turn tool calls.
*   **Session & Context Persistence:** Users are frustrated by session fragility. Reaching context limits often forces a new session, and old sessions frequently fail to load due to slight JSONL parsing errors (e.g., [Issue #3606](https://github.com/QwenLM/zwen-code/issues/3606)).
*   **File System Tokenization Quirks:** Non-English developers continue to battle LLM tokenization quirks where the model forces spaces into CJK (Chinese/Japanese/Korean) file paths, silently breaking shell execution.

</details>