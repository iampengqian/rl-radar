# AI CLI Tools Community Digest 2026-05-02

> Generated: 2026-05-01 22:13 UTC | Tools covered: 8

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

# AI Developer Tools Ecosystem Cross-Tool Report (2026-05-02)

## 1. Ecosystem Overview
The AI CLI tools landscape is currently characterized by aggressive architectural overhauls and a push toward multi-agent, multi-environment orchestration. Major players like OpenAI Codex and OpenCode are making deep infrastructural shifts—such as migrating to Effect-native cores or multi-environment filesystem routing—to support increasingly complex, agentic workflows. Meanwhile, provider interoperability has emerged as a critical friction point, with communities across the board grappling with how to handle reasoning tokens (e.g., DeepSeek V4) and strict API schemas in multi-turn tool calls. Overall, the ecosystem is rapidly maturing beyond simple code-generation assistants into foundational, enterprise-grade CI/CD and autonomous development infrastructure, though growing pains around platform stability (especially on Windows) and cost predictability remain prevalent.

## 2. Activity Comparison
*Note: Metrics reflect activity highlighted in the 2026-05-02 daily digests.*

| Tool | Notable Hot Issues | Highlighted PRs | Latest Release | Primary Focus Today |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 2 | v2.1.126 | Cost tracking, AGENTS.md standard, Windows stability |
| **OpenAI Codex** | 10 | 10 | rust-v0.129.0-alpha.2 | Multi-environment wiring, desktop attestation, Windows UI freezes |
| **Gemini CLI** | 10 | 10 | None (P0 Nightly Failed) | Bot triage, session resumption fixes, infinite retry loops |
| **GitHub Copilot CLI**| 10 | 0 | v1.0.40-3 | Headless OAuth for MCP, research sub-agent architecture |
| **Kimi Code CLI** | 4 | 7 | None | MCP robustness, DeepSeek V4 compatibility, subagent isolation |
| **OpenCode** | 10 | 10 | v1.14.31 | Effect-native LLM core, memory leaks, privacy/data leaks |
| **Pi** | 10 | 10 | v0.71.1 | Provider ecosystem expansion, removing legacy providers, local LLMs |
| **Qwen Code** | 6 | 10 | v0.15.6-nightly | File read caching, OpenTelemetry, AI mutation tracking, Desktop App |

## 3. Shared Feature Directions

*   **Reasoning Model Interoperability (DeepSeek V4 / Qwen):** Almost every tool (Kimi, OpenCode, Pi, Qwen) is currently dealing with API compatibility breaks when routing requests through third-party reasoning models. Specifically, passing mandatory `reasoning_content` or strict thinking tokens during multi-turn tool calls is a universal pain point requiring immediate architectural workarounds.
*   **Multi-Agent & Sub-Agent Architectures:** The industry is moving past single-threaded prompts. GitHub Copilot CLI shifted `/research` to an orchestrator/sub-agent model; OpenCode users are demanding runtime model routing per sub-agent; Kimi Code introduced directory overrides for isolated sub-agents; and Gemini is making sub-agents aware of approval modes.
*   **Windows as a Second-Class Citizen:** Across Claude Code, OpenAI Codex, and OpenCode, Windows users are experiencing disproportionate friction. Recurring themes include PowerShell integration bugs, UI/terminal freezes, broken MSIX/WSL paths, and false positive antivirus flags (e.g., Windows Defender flagging Codex).
*   **MCP (Model Context Protocol) Maturation & Reliability:** As MCP becomes the standard for tool integration, communities are hitting infrastructural walls. GitHub Copilot CLI and Kimi Code are addressing headless OAuth, crash resilience, and schema payload limits, while OpenCode is focusing on MCP transport reconnection logic.
*   **Memory & Context Management:** Tokens and memory limits are top-of-mind. OpenAI Codex is facing thread-breaking context compaction failures with GPT-5.5, Pi reported a bug where compaction deletes everything, OpenCode is fighting V8 heap memory leaks, and Qwen introduced caching and compression to manage context windows.

## 4. Differentiation Analysis

*   **Enterprise CI/CD vs. BYOK (Bring Your Own Key):** Tools like **GitHub Copilot CLI** and **OpenAI Codex** are heavily focused on protected enterprise workflows (desktop attestation, OAuth, CI exit codes) and proprietary model routing (GPT-5.5). Conversely, tools like **Pi**, **OpenCode**, and **Qwen Code** are highly differentiated by their agnostic, "BYOK" approaches, prioritizing local LLMs (Ollama, llama.cpp), custom gateway support (Cloudflare, TensorZero), and model cost observability.
*   **Standardization vs. Customization:** **Claude Code** is pushing for ecosystem-wide standardization via `AGENTS.md` to unify AI coding rules. In contrast, **Pi** is leaning into extreme customization, allowing developers to build custom provider extensions, while **Qwen Code** focuses on auditability with AI commit attribution tracking.
*   **Target Platforms:** **Qwen Code** is uniquely focused on the WeChat ecosystem (image sharing CDN), aligning with its regional dominance. **Gemini CLI** and **OpenCode** are dedicating heavy resources to AST-aware navigation and native LLM core refactors (Effect architecture), appealing to highly technical developers looking for deep codebase introspection.

## 5. Community Momentum & Maturity

*   **Rapid Iterators (High Momentum):** **OpenAI Codex** and **Pi** show massive infrastructural momentum. Codex has 10 active PRs actively wiring multi-environment support, while Pi has 10 PRs focused on rapidly expanding its provider/extension ecosystem. **Qwen Code** is also moving exceptionally fast, pushing nightly releases with heavy community contributions.
*   **Maturing Architectures:** **GitHub Copilot CLI** is demonstrating maturity by closing long-standing highly-voted issues (like OAuth for MCP) and refining the CLI for headless agent use. **OpenCode** is in a transitional, complex phase, undertaking a massive Effect-based refactor while battling core stability issues (memory leaks).
*   **Community Tension:** **Claude Code** currently has the most vocal community friction regarding cost and billing regressions (session limits depleting too fast). **OpenAI Codex** users are expressing high frustration over Windows stability and context compaction failures.

## 6. Trend Signals

*   **The Rise of the "Agentic CI/CD" Pipeline:** The push for headless OAuth, non-zero exit codes on failure (Copilot CLI), and desktop attestation (Codex) indicates that AI CLIs are rapidly moving from developer local machines into automated CI/CD pipelines. AI agents are becoming automated reviewers and committers.
*   **Cost & Privacy Auditability:** Trust is a leading indicator of adoption. **Claude Code's** cost regression complaints, **OpenCode's** local network data leaks, and **Qwen Code's** push for AI commit tracking signal a market demand for granular cost observability and strict data sovereignty.
*   **The "Context Compaction" Ceiling:** As models like GPT-5.5 and DeepSeek V4 push the boundaries of context windows, automatic context compaction is repeatedly breaking. The ecosystem is realizing that simply increasing context size introduces fragile memory management overhead, shifting focus to smarter AST-aware navigation and file-caching strategies rather than stuffing the prompt.
*   **Fragmented Tool Configuration:** The strong community demand for `AGENTS.md` (Claude Code) and unified MCP configs (Copilot CLI) reveals developer exhaustion with tool-specific configuration files (`.cursorrules`, `CLAUDE.md`, `.vscode/mcp.json`). Standardizing agentic configuration across the industry is the next major bottleneck to solve.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Analysis Period:** Through 2026-05-02 | **Source:** [anthropics/skills](https://github.com/anthropics/skills)

---

## 1. Top Skills Ranking

The following PRs represent the highest-attention community submissions, measured by sustained discussion and activity volume.

| Rank | Skill | Author | Status | Core Functionality |
|------|-------|--------|--------|-------------------|
| 1 | [**document-typography**](https://github.com/anthropics/skills/pull/514) (#514) | PGTBoos | 🟢 Open | Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents |
| 2 | [**ODT Skill**](https://github.com/anthropics/skills/pull/486) (#486) | GitHubNewbie0 | 🟢 Open | OpenDocument (.odt/.ods) creation, template filling, and ODT↔HTML conversion |
| 3 | [**skill-quality-analyzer & skill-security-analyzer**](https://github.com/anthropics/skills/pull/83) (#83) | eovidiu | 🟢 Open | Meta-skills for evaluating Skill quality (5 dimensions) and security across the ecosystem |
| 4 | [**ServiceNow Platform Skill**](https://github.com/anthropics/skills/pull/568) (#568) | Vanka07 | 🟢 Open | Comprehensive ServiceNow assistant: ITSM, ITOM, SecOps, ITAM/SAM, FSM, SPM, CSDM, IntegrationHub |
| 5 | [**frontend-design (revision)**](https://github.com/anthropics/skills/pull/210) (#210) | justinwetch | 🟢 Open | Rewrites frontend-design skill for clarity, single-conversation actionability, and behavioral specificity |
| 6 | [**SAP-RPT-1-OSS Predictor**](https://github.com/anthropics/skills/pull/181) (#181) | amitlals | 🟢 Open | Integrates SAP's open-source tabular foundation model for predictive analytics on SAP business data |
| 7 | [**sensory (macOS AppleScript)**](https://github.com/anthropics/skills/pull/806) (#806) | AdelElo13 | 🟢 Open | Native macOS automation via `osascript` with a two-tier permission model replacing screenshot-based computer use |
| 8 | [**HADS — Human-AI Document Standard**](https://github.com/anthropics/skills/pull/616) (#616) | catcam | 🟢 Open | Lightweight Markdown convention for technical docs serving both human and AI readers simultaneously |

**Discussion Highlights:**
- **#83** (meta-skills) has been open since Nov 2025, making it the longest-running high-activity PR — reflects strong community interest in self-improving Skill infrastructure.
- **#514** (typography) addresses a universally-felt but rarely-articulated problem: every Claude-generated document has typographic flaws that users rarely think to request fixes for.
- **#806** (macOS automation) sparked interest as a practical alternative to vision-based "computer use," offering direct app scripting without screenshots.

---

## 2. Community Demand Trends

Distilled from the top 15 Issues, five clear demand patterns emerge:

### 🔥 Trend 1: Enterprise & Organization Skill Sharing
[Issue #228](https://github.com/anthropics/skills/issues/228) (👍 7) — Users want org-wide skill libraries with direct sharing links instead of manual `.skill` file distribution via Slack/Teams. **This is the highest-voted open Issue.**

### 🔥 Trend 2: Skill Reliability & Infrastructure Stability
Multiple Issues report foundational breakage:
- [Issue #62](https://github.com/anthropics/skills/issues/62) — Skills disappearing after local file changes
- [Issue #61](https://github.com/anthropics/skills/issues/61) — 404 errors loading skills on Team plans
- [Issue #406](https://github.com/anthropics/skills/issues/406) (👍 4) — Upload/replace returning internal server errors
- [Issue #403](https://github.com/anthropics/skills/issues/403) — Skill version deletion returning 500 errors

**Users expect Skills to work like package managers, not fragile file references.**

### 🔥 Trend 3: Skill Evaluation & Trigger Reliability
[Issue #556](https://github.com/anthropics/skills/issues/556) (👍 6) reports **0% trigger rate** for `run_eval.py` — `claude -p` never invokes Skills/commands regardless of query. This is a critical confidence gap: developers can't test if their Skills actually work.

### 🔥 Trend 4: Security & Namespace Trust Boundaries
[Issue #492](https://github.com/anthropics/skills/issues/492) — Community Skills distributed under `anthropic/` namespace create impersonation risks. Users may grant elevated permissions to Skills they believe are official.

### 🔥 Trend 5: Cross-Platform & API Compatibility
[Issue #29](https://github.com/anthropics/skills/issues/29) — AWS Bedrock users can't use Skills at all. [Issue #16](https://github.com/anthropics/skills/issues/16) — Request to expose Skills as MCPs (Model Context Protocol) for broader interoperability.

---

## 3. High-Potential Pending Skills

These PRs are actively maintained with recent updates and solve clearly validated problems — likely candidates for near-term merging:

| PR | Skill | Why It's Likely to Land |
|----|-------|----------------------|
| [#538](https://github.com/anthropics/skills/pull/538) | **PDF case-sensitivity fix** | Pure bugfix — 8 file reference mismatches break Skills on Linux. Author Lubrsy706 also submitted related fixes #539 and #541, showing deep ecosystem engagement. |
| [#539](https://github.com/anthropics/skills/pull/539) | **YAML validation: unquoted descriptions** | Pre-parse validation catches silent YAML truncation — improves Skill-creator reliability for all future Skills. |
| [#541](https://github.com/anthropics/skills/pull/541) | **DOCX tracked-change ID collision fix** | Fixes actual document corruption caused by shared `w:id` namespace in OOXML — a technically precise, high-impact fix. |
| [#509](https://github.com/anthropics/skills/pull/509) | **CONTRIBUTING.md** | Directly closes [Issue #452](https://github.com/anthropics/skills/issues/452); raises repo's GitHub community health score from 25%. |
| [#666](https://github.com/anthropics/skills/pull/666) | **Remove duplicate skill-creator** | Removes 356-line version that's superseded by a 479-line version in `claude-plugins-official`. Deduplication is uncontroversial. |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive testing stack (philosophy, unit, React, integration, e2e) — aligns with enterprise needs seen in Issues. |
| [#568](https://github.com/anthropics/skills/pull/568) | **ServiceNow platform** | Broad enterprise platform coverage; updated as recently as 2026-04-23, indicating active maintainer engagement. |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for robust Skill infrastructure — reliable triggers, org-wide sharing, evaluation tooling, and namespace security — rather than any single new Skill category; developers want the Skills platform itself to be as dependable as the code it helps generate.**

---

# Claude Code Community Digest — 2026-05-02

## 1. Today's Highlights

Version **v2.1.126** shipped with gateway model discovery and a new `claude project purge` command, improving the experience for users proxying through Anthropic-compatible gateways and those who need to clean up project state. A significant cost-related issue (#55053) is gaining traction, with users reporting that the 5-hour session window depletes 5–10× faster since the evening of April 29. The community also continues to push hard for **AGENTS.md** standardization (#6235), now at 3,764 👍—by far the most-supported issue in the tracker.

---

## 2. Releases

### v2.1.126
- **Gateway model picker**: The `/model` command now fetches and lists models from your gateway's `/v1/models` endpoint when `ANTHROPIC_BASE_URL` is set to an Anthropic-compatible gateway. This is a quality-of-life win for enterprise users running through proxies.
- **`claude project purge [path]`**: New command to delete all Claude Code state for a project—transcripts, tasks, file history, and config entries. Useful for resetting a project or cleaning up before handoffs.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#6235 — Support AGENTS.md](https://github.com/anthropics/claude-code/issues/6235) | **3,764 👍 · 290 comments**. The community wants Claude Code to adopt the emerging `AGENTS.md` standard alongside `CLAUDE.md` for cross-agent interoperability. This is the highest-voted issue in the repo. |
| 2 | [#55053 — Session window depletes 5–10× faster since Apr 29](https://github.com/anthropics/claude-code/issues/55053) | **21 comments · 9 👍**. Users report that light editing sessions now burn 20–25% of the 5-hour window in under an hour. If confirmed, this is a critical cost regression affecting all Max plan users. |
| 3 | [#13354 — Continue when session limit reached](https://github.com/anthropics/claude-code/issues/13354) | **45 comments · 90 👍**. Users want seamless session continuation instead of hard stops when hitting session limits—a friction point that disrupts long coding flows. |
| 4 | [#43713 — `autoAllowBashIfSandboxed` bypassed for shell expansions](https://github.com/anthropics/claude-code/issues/43713) | **18 comments · 41 👍**. Commands with shell expansions, variable substitutions, and other constructs prompt for permission despite sandbox auto-allow being enabled. Undermines the "set and forget" trust model. |
| 5 | [#54497 — Claude Code on Web fails 100% of the time](https://github.com/anthropics/claude-code/issues/54497) | **17 comments**. Web and standalone app users are hitting "Claude Code execution failed" universally, suggesting a potential backend or authentication regression. |
| 6 | [#50270 — v2.1.113+ broken on Termux/Android](https://github.com/anthropics/claude-code/issues/50270) | **17 comments · 36 👍**. The switch to a native glibc binary killed support for Android/Termux. No JS fallback exists. Affects mobile-first developers. |
| 7 | [#54839 — `credit_balance_too_low` despite sufficient credits](https://github.com/anthropics/claude-code/issues/54839) | **13 comments · 10 👍**. Users with healthy credit balances are blocked from all API requests. Billing pipeline issue causing total workflow interruption. |
| 8 | [#14280 — Stream bash output in real-time in VS Code](https://github.com/anthropics/claude-code/issues/14280) | **12 comments · 36 👍**. Long-running commands appear to hang in the VS Code extension because output isn't streamed. Users want real-time feedback. |
| 9 | [#55442 — `isolation="worktree"` branches from origin/HEAD, not orchestrator HEAD](https://github.com/anthropics/claude-code/issues/55442) | **Closed with fix identified.** Agent worktrees branch from stale `origin/master` instead of the current feature branch. Critical for multi-agent workflows. |
| 10 | [#55445 — Cache_creation tokens doubled after migrating to desktop app](https://github.com/anthropics/claude-code/issues/55445) | Fresh report showing 2.18× cache_creation token increase when moving from the VS Code extension to the desktop app, suggesting a materially larger system prompt in the desktop build. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#55433 — Fix PowerShell silent exit on Windows](https://github.com/anthropics/claude-code/pull/55433) | Fixes REPL silently crashing during dense Bash subprocess chains in PowerShell (50+ Bash calls in 10–30 min sessions). Root cause: signal handling edge case on Windows. |
| 2 | [#55425 — Fix drag-and-drop image hang on macOS](https://github.com/anthropics/claude-code/pull/55425) | Fixes session freeze when dragging macOS screenshot thumbnails before the file is fully written to disk. Adds file-readiness validation before processing. |
| 3 | [#45721 — Add Claude Mythos operating contract (CLOSED)](https://github.com/anthropics/claude-code/pull/45721) | Off-topic/spam PR, closed. Notable only as a reminder that high-profile repos attract noise. |

> **Note:** Only 3 PRs were updated in the last 24 hours, so the full list of 10 is not available. The two open PRs (#55433, #55425) are both targeted Windows/macOS stability fixes.

---

## 5. Feature Request Trends

1. **AGENTS.md / cross-agent interoperability** (#6235): The dominant theme. Developers working with multiple AI coding tools want a shared configuration file rather than vendor-specific `CLAUDE.md`, `.cursorrules`, etc.

2. **Session continuity and limits** (#13354, #34835): Users want the ability to continue seamlessly when session limits are hit, and to queue messages or provide additional input while Claude is processing.

3. **Finer-grained permissions and scoping** (#20093, #55451): Requests for runtime-selectable permission modes and file-access scoping in monorepos. Developers want to restrict agent access to specific directories without global bypass.

4. **Real-time output streaming** (#14280): Consistent demand for streaming bash command output in the VS Code extension, especially for long-running builds and tests.

5. **MCP connector parity** (#52586): Routines in Claude Code can't use Claude.ai connectors (Composio, Gmail, LinkedIn), creating an inconsistency between the consumer and developer products.

6. **Better cost visibility and control** (#55053, #55445, #45958): Multiple issues around unexpected token consumption, session window drain, and cost spikes on the desktop app point to a need for better cost instrumentation.

---

## 6. Developer Pain Points

- **Cost and billing regressions are the top frustration this cycle.** The 5-hour session window squeeze (#55053), `credit_balance_too_low` errors with money in the account (#54839), doubled cache_creation tokens on desktop (#55445), and silent token burn during agent stalls (#45958) collectively signal that cost predictability is the #1 concern right now.

- **Platform fragmentation continues to bite.** Android/Termux is broken since the native binary migration (#50270), Windows SSH paths are wrong (#26116), PowerShell silently exits (#55433), and ARM64 Windows has MSIX compatibility issues (#55448). Users on non-macOS platforms feel like second-class citizens.

- **The sandbox/permissions model has trust-eroding gaps.** `autoAllowBashIfSandboxed` doesn't cover shell expansions (#43713), agent team approval gates lack API coverage (#55446), and there's no directory-level scoping for monorepos (#55451). Users who invest in configuring permissions expect them to work comprehensively.

- **Desktop app migration has rough edges.** Missing project-level folders (#53340), renderer SIGTRAP crashes (#54369), and increased token usage (#55445) suggest the desktop app isn't yet at parity with the VS Code extension.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-02

## 1. Today's Highlights
A new alpha version, `rust-v0.129.0-alpha.2`, was released today, alongside significant internal engineering efforts targeting multi-environment support and desktop attestation. The community remains highly active, with notable frustration building around Windows Codex Desktop stability—particularly regarding Browser Use, PowerShell integration, and UI freezing—and ongoing discussions about GPT-5.5 context compaction failures in long-running threads.

## 2. Releases
- **[rust-v0.129.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.2)**: Released today. Notes are brief ("Release 0.129.0-alpha.2"), but this likely includes foundational wiring for the multi-environment architecture currently dominating the open PR stack.

## 3. Hot Issues

1. **[#13542 Windows: bundled rg fails with Access Denied](https://github.com/openai/codex/issues/13542)** (36 comments, 26 👍)
   Codex Desktop on Windows bundles `rg.exe`, but the integrated PowerShell 7 terminal throws "Access Denied." This affects a core workflow (search) and remains unresolved since March 2025.

2. **[#3141 Allow GPU access inside sandbox](https://github.com/openai/codex/issues/3141)** (34 comments, 43 👍)
   A highly requested enhancement since Sept 2025. Users want NVIDIA GPU access for compute-heavy tasks inside Codex's sandboxed environment.

3. **[#5237 Codex reads files outside working directory](https://github.com/openai/codex/issues/5237)** (30 comments, 17 👍)
   A closed but heavily discussed security concern where Codex could read files beyond the working directory without explicit permission.

4. **[#10070 timeout waiting for child process to exit](https://github.com/openai/codex/issues/10070)** (27 comments)
   Windows users on WSL are encountering persistent timeouts during tool calls, breaking agent workflows.

5. **[#18993 Unable to open past conversation history in VS Code extension](https://github.com/openai/codex/issues/18993)** (21 comments, 34 👍)
   A critical UX regression in the VS Code extension where conversation history is entirely inaccessible, drawing significant community frustration.

6. **[#20161 Codex requires phone number unexpectedly](https://github.com/openai/codex/issues/20161)** (20 comments, 18 👍)
   An authentication issue where SSO login on a new device unexpectedly demands a phone number, blocking access for users who haven't linked one.

7. **[#19558 GPT-5.5 remote compaction fails, leaves thread unusable](https://github.com/openai/codex/issues/19558)** (10 comments, 8 👍)
   A critical reliability issue: automatic context compaction fails on GPT-5.5 in Codex Desktop, permanently breaking the current thread and requiring a restart.

8. **[#20591 `/goal` slash command does not work in 0.128.0](https://github.com/openai/codex/issues/20591)** (14 comments)
   A quick-breaking regression in the latest stable release where the `/goal` command silently fails in the CLI.

9. **[#20501 Alt+Enter no longer inserts newline in VS Code WSL terminal](https://github.com/openai/codex/issues/20501)** (10 comments)
   A regression in `0.128.0` that breaks multiline input for WSL users, indicating rushed keyboard handling changes.

10. **[#20315 browser-use marked as trojan by Windows Defender](https://github.com/openai/codex/issues/20315)** (8 comments)
    A serious issue where `browser-client.mjs` is flagged as malicious by Defender, eroding user trust and blocking the Browser Use feature on Windows.

## 4. Key PR Progress

1. **[#20687 Split tool handlers by tool name](https://github.com/openai/codex/pull/20687)**
   Refactors tool registration to bind handlers directly by tool name, cleaning up the internal ownership model and eliminating fragile multiplexing logic.

2. **[#20542 Prune unused code-mode globals](https://github.com/openai/codex/pull/20542)**
   Hides `Atomics`, `SharedArrayBuffer`, and `WebAssembly` from the code-mode runtime to reduce the attack surface and prevent unexpected worker assumptions.

3. **[#20646 Surface multi-environment choices in context](https://github.com/openai/codex/pull/20646)** *(Closed/Merged)*
   Allows the model to view available environments during a turn, setting the stage for complex orchestration without altering the legacy single-environment prompt.

4. **[#20619 Request desktop attestation from app](https://github.com/openai/codex/pull/20619)**
   Introduces `attestation/generate` to ensure protected Codex requests are verified by the connected desktop app, hardening security boundaries.

5. **[#20576 Route git metadata updates through ThreadStore](https://github.com/openai/codex/pull/20576)**
   The first slice of an app-server/core migration, moving thread-identity reads and writes behind a unified `ThreadStore` interface to prepare for remote store support.

6. **[#20577 Use ThreadStore history for core review forks](https://github.com/openai/codex/pull/20577)**
   Follow-up to #20576, migrating loaded-thread review and fork paths to store-backed history boundaries, eliminating direct rollout parsing dependencies.

7. **[#20321 Hook trust metadata and enforcement](https://github.com/openai/codex/pull/20321)**
   Implements persistent hook trust state, ensuring unmanaged hooks require explicit user approval before execution—a vital security improvement for shared hook environments.

8. **[#20530 Support multi-env filesystem tools](https://github.com/openai/codex/pull/20530)**
   Extends multi-environment support to filesystem tools (`apply_patch`, `list_dir`, `view_image`), allowing them to route via `environment_id` during multi-env sessions.

9. **[#20667 Load configured environments from CODEX_HOME](https://github.com/openai/codex/pull/20667)**
   Activates the config-backed environment provider using `CODEX_HOME/environments.toml`, making the multi-environment feature user-accessible for the first time.

10. **[#20653 Report running command durations](https://github.com/openai/codex/pull/20653)**
    Introduces `started_at_ms` tracking and elapsed duration reporting for running commands, improving observability and ThreadHistory accuracy.

## 5. Feature Request Trends
- **Multi-Environment Orchestration**: The dominant theme in current PRs. Users and the core team are actively building towards simultaneous use of local, remote, and containerized environments within a single Codex session.
- **GPU Compute in Sandboxes**: Persistent demand (#3141) for sandbox access to NVIDIA GPUs to unlock ML/CV workflows directly within Codex's execution environment.
- **In-Session Profile Switching**: Requests like [#20635](https://github.com/openai/codex/issues/20635) (`/profile` command) highlight the desire for dynamic model/configuration switching without restarting sessions.
- **Automated Git Workflows**: [#20690](https://github.com/openai/codex/issues/20690) requests auto-opening/updating PRs from Codex Web agents, reflecting a push towards deeper CI/GitHub integration.

## 6. Developer Pain Points
- **Windows Stability**: A disproportionate number of issues involve Windows-specific failures—PowerShell integration, UI freezing (#20214), Settings crashes (#20691), and false antivirus flags (#20315). Windows users clearly feel like second-class citizens.
- **Context Compaction Reliability**: GPT-5.5's larger context is causing compaction failures (#19558) that permanently break threads, pointing to fragility in memory management under heavy use.
- **Authentication & Verification Friction**: Phone number-related auth bugs (#20161, #20351) are unexpectedly locking users out, particularly problematic for international users and those using SSO across multiple devices.
- **Browser Use Instability**: The Browser Use feature is increasingly unstable, especially on Windows (#20315, #20579, #20661), where DOM/screenshot APIs fail and Defender flags components.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-02

## 1. Today's Highlights
The Gemini CLI ecosystem experienced a massive surge in contributor activity today, with numerous community and maintainer PRs addressing critical stability and security issues. Key focus areas included a significant overhaul of the bot's triage system, critical fixes for session resumption and infinite retry loops, and foundational work to make subagents aware of approval modes. However, the day was slightly marred by a **P0 Nightly Release Failure** for version `v0.42.0`, which maintainers will need to address promptly.

## 2. Releases
No new stable releases were published in the last 24 hours.

## 3. Hot Issues
1. **[P0] Nightly Release Failure ([#26326](https://github.com/google-gemini/gemini-cli/issues/26326))**
   The nightly build for `v0.42.0` failed. This is a top priority for maintainers to ensure continuous delivery testing remains green.
2. **Performance Degradation in Complex Projects ([#26197](https://github.com/google-gemini/gemini-cli/issues/26197))**
   Users report 10-minute wait times, making the CLI unusable for serious, complex codebases. This has garnered significant community engagement (6 thumbs up, 10 comments) echoing the frustration.
3. **Session State Split on Resumption ([#24639](https://github.com/google-gemini/gemini-cli/issues/24639))**
   A critical bug where resuming a session keeps internal storage bound to the startup session ID rather than the resumed session, leading to corrupted or split states.
4. **Subagent False Positives on MAX_TURNS ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))**
   `codebase_investigator` reports a `status: "success"` even when it hits the maximum turn limit, silently hiding interruptions and failed executions from the main agent.
5. **Repeated Permission Prompts ([#24916](https://github.com/google-gemini/gemini-cli/issues/24916))**
   The CLI repeatedly asks for file permissions despite users selecting "allow for all future sessions," severely impacting workflow automation. 
6. **Shell Execution Hangs ("Waiting input") ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))**
   The UI hangs while showing "Awaiting user input" long after a simple shell command has already finished executing.
7. **400 Error with >128 Tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))**
   The Gemini API throws a `400 Bad Request` when tool counts exceed safe limits, indicating the agent needs better dynamic scope reduction for enabled tools.
8. **Browser Agent Ignores `settings.json` Overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267))**
   Settings like `maxTurns` are being completely ignored by the Browser Agent, breaking user-defined execution limits.
9. **Agent Creates Tmp Scripts Everywhere ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571))**
   When restricted to shell execution, the model litters random directories with temporary edit scripts, creating a messy workspace and commit overhead.
10. **AST-Aware Tooling Investigation ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))**
    A highly supported maintainer Epic tracking the integration of AST-aware file reads and codebase mapping to reduce token noise and improve navigational accuracy.

## 4. Key PR Progress
1. **[OPEN] Bot Triage & Zombie Issue Policy ([#26354](https://github.com/google-gemini/gemini-cli/pull/26354))**
   Optimizes the backlog by implementing an actor-aware stale issue policy, ensuring maintainers aren't overwhelmed by bot-tagged issues.
2. **[OPEN] Bot Evaluation Feedback Loop ([#26303](https://github.com/google-gemini/gemini-cli/pull/26303))**
   Enhances the Gemini CLI Bot's system prompts to restrict the critique agent to evaluation-only and implement a multi-iteration feedback loop for better automated PR reviews.
3. **[CLOSED/MERGED] Session State Resumption Fix ([#26342](https://github.com/google-gemini/gemini-cli/pull/26342))**
   Resolves the "session state split" issue by resetting session-scoped state properly when a previous session is resumed.
4. **[OPEN] ACP Agent Mode Disconnect Fix ([#26332](https://github.com/google-gemini/gemini-cli/pull/26332))**
   Fixes a disconnect between external editors (JetBrains/Zed) and the CLI where agent mode changes (e.g., Plan, Auto-Edit) were ignored.
5. **[OPEN] Smart Redirect for Unsupported Multimodal Types ([#26352](https://github.com/google-gemini/gemini-cli/pull/26352))**
   Prevents `400 Bad Request` errors by filtering binary audio/video data from tool responses before sending them back to the Gemini API.
6. **[OPEN] Prevent Infinite Retry Loops ([#26306](https://github.com/google-gemini/gemini-cli/pull/26306))**
   Stops the CLI from hanging indefinitely in an infinite polling loop when backend APIs experience persistent outages or quota exhaustion.
7. **[OPEN] Vertex AI Region Override ([#25362](https://github.com/google-gemini/gemini-cli/pull/25362))**
   Adds a `vertexLocation` config setting, fixing a 404 issue when trying to access preview/experimental models restricted to the `global` region.
8. **[CLOSED/MERGED] Stop "System: Please continue" Injection ([#26340](https://github.com/google-gemini/gemini-cli/pull/26340))**
   Removes false-positive re-prompts that occurred when the model ended a turn with no text (e.g., after a fire-and-forget tool call).
9. **[OPEN] Subagent Approval Mode Awareness ([#23608](https://github.com/google-gemini/gemini-cli/pull/23608))**
   Instructs subagents on global Approval Modes (Plan/Auto-Edit) so they stop attempting blocked actions and getting stuck in failure loops.
10. **[OPEN] Escape Key Buffer Fix ([#26339](https://github.com/google-gemini/gemini-cli/pull/26339))**
    Fixes a UX annoyance where hitting the `Escape` key during tool execution unexpectedly cleared the user's input buffer.

## 5. Feature Request Trends
*   **Smarter Code Navigation:** High demand for AST-aware file reading and codebase mapping to reduce token waste and improve code-modification accuracy.
*   **Persistent Memory Routing:** Users and maintainers are pushing for memory subagents that intelligently route context between global user preferences (`~/.gemini/`) and local project conventions (`.gemini/`).
*   **Enhanced Agent Autonomy & Safety:** A clear trend toward making agents proactively write to memory, understand approval modes natively, and self-correct or safely back out of destructive `git` or DB operations.
*   **Infrastructure Upgrades:** Ongoing efforts to upgrade internal utility models from 2.5 Flash Lite to 3.1 Flash Lite.

## 6. Developer Pain Points
*   **Unpredictable Latency:** The CLI is performing well for basic frontend tasks but faces severe latency issues (10+ minute waits) in complex codebases.
*   **State & Config Desyncs:** Developers are frustrated by bugs where settings are ignored, permissions fail to save across sessions, or resumed sessions lose their scoped state.
*   **UI/Terminal Hangs:** A recurring theme involves the CLI getting stuck showing "Waiting input" post-command, requiring users to force-kill the application.
*   **Tooling Limits:** Hitting hard API limits (e.g., 400 errors with >128 tools) indicates growing pains as developers attempt to scale the agent's capabilities.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-02

---

## 1. Today's Highlights

GitHub Copilot CLI lands **v1.0.40** (and a prerelease patch **v1.0.40-3**), headlined by headless OAuth support for MCP servers and a shift of `/research` to an orchestrator/sub-agent architecture. A highly-upvoted feature request for OAuth-based MCP servers (#33, 👍110) was officially closed, signaling delivery on a long-awaited capability. The issue tracker is dominated by MCP reliability concerns, model-availability confusion around Claude Opus, and plugin/extension API inconsistencies—pointing to growing pains as the platform matures for agentic workflows.

---

## 2. Releases

### v1.0.40 (2026-05-01)
- PR branch decoration now renders correctly in the footer regardless of model name length.
- `/clear` and `/new` reset the active custom agent selection properly.
- Assistant responses stream with smoother text output.
- `copilot plugin list` displays the correct version after `copilot plugin update`.

### v1.0.40-3 (prerelease, 2026-05-01)
**Added**
- Support for `client_credentials` OAuth grant type for MCP servers, enabling fully headless/browserless authentication—critical for CI/CD and agent scenarios.

**Improved**
- Prints "Exiting…" to stderr immediately on `Ctrl+C` during prompt mode, making shutdown progress visible.
- `/research` now uses an orchestrator/sub-agent model, improving delegation and tool-use fidelity.

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#33](https://github.com/github/copilot-cli/issues/33) | **Support OAuth HTTP MCP servers** | Closed after 38 comments and 👍110 — the top-voted issue in the repo. Directly enabled the `client_credentials` feature in v1.0.40-3. | 👍110, 38 comments |
| [#1081](https://github.com/github/copilot-cli/issues/1081) | **AggregateError: Failed to list models** | Enterprise users hitting auth-then-failure; 23 comments suggest a non-trivial regression in model discovery for enterprise accounts. | 👍8, 23 comments |
| [#3019](https://github.com/github/copilot-cli/issues/3019) | **Breaking Change: `.vscode/mcp.json` no longer supported** | Removing shared MCP config parity between VS Code and CLI forces teams to maintain duplicate configurations—a significant DX regression. | 👍2, 2 comments |
| [#3067](https://github.com/github/copilot-cli/issues/3067) | **Terminal freezes when stdio MCP child crashes mid-call** | A crashed MCP child process leaves the CLI fully unresponsive (Ctrl+C ignored), requiring force-close. Severity is high for reliability. | 👍0, 1 comment |
| [#3030](https://github.com/github/copilot-cli/issues/3030) | **Sub-agent MCP tool calls fail with `structuredContent` Zod error on JSON arrays** | Orchestrator/sub-agent work in `/research` is undermined if sub-agents can't handle array responses from MCP tools—a regression tied to the new architecture. | 👍0, 1 comment |
| [#3071](https://github.com/github/copilot-cli/issues/3071) | **Cannot use Claude Opus at Pro+ at all** | Users who upgraded to Pro+ specifically for Opus access report consistent failures on every prompt, suggesting a routing or capacity issue. | 👍0, 0 comments |
| [#3066](https://github.com/github/copilot-cli/issues/3066) | **macOS prerelease model picker hides Opus 4.7 reasoning variants** | Internal/high/x-high reasoning tiers are invisible in the `/model` picker despite being routable, limiting power-user access to newer capabilities. | 👍0, 0 comments |
| [#3064](https://github.com/github/copilot-cli/issues/3064) | **Stricter exit codes when MCP servers fail to start (CI use)** | CLI exits 0 even with zero tools available, breaking CI/Agentic Workflow contracts. A must-fix for production pipeline adoption. | 👍0, 0 comments |
| [#3070](https://github.com/github/copilot-cli/issues/3070) | **Custom agent frontmatter: accept array for `model:` field** | Parity request with VS Code chat modes; enabling model pickers in custom agents would improve reusability of agent definitions across tools. | 👍0, 0 comments |
| [#3068](https://github.com/github/copilot-cli/issues/3068) | **`session.setModel()` doesn't update footer UI** | Plugin/extension API inconsistency—model changes take effect for inference but not in the status bar, confusing users. | 👍0, 0 comments |

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours. All activity concentrated on releases and issue triage.

---

## 5. Feature Request Trends

1. **MCP Server Authentication & Reliability** — Headless OAuth (#33, shipped), stricter exit codes (#3064), and crash-resilient stdio handling (#3067) reflect a community pushing MCP toward production-grade robustness.

2. **Cross-Tool Configuration Parity** — Users want a single MCP config that works in both VS Code and CLI (#3019), and agent frontmatter that matches VS Code chat mode semantics (#3070). Toolchain fragmentation is a top concern.

3. **Agent & Session Management** — Requests for remote session deletion (#3072), persistent `keep-alive` defaults (#2880), and proper agent reset on `/clear` (#3038, fixed in v1.0.40) indicate heavy adoption of agentic workflows requiring better lifecycle controls.

4. **Model Access & Visibility** — Multiple issues (#3071, #3066) cluster around Claude Opus availability and reasoning-variant visibility, underscoring demand for transparent, reliable model routing.

5. **Plugin/Extension API Consistency** — Footer not updating on programmatic model switch (#3068), `plugin update` not syncing config (#3058, fixed), and `sessionStart` hooks not firing (#2201) point to a maturing but still inconsistent extension surface.

---

## 6. Developer Pain Points

- **Authentication fragility**: Repeated login prompts (#3057) and enterprise model-listing failures (#1081) erode trust, especially for users who've just adopted the tool.
- **MCP child-process crashes are catastrophic**: When an MCP server dies, the CLI hangs hard (#3067). No graceful degradation, no useful error—just a frozen terminal.
- **Silent failures in CI**: Exit code 0 on no-tool runs (#3064) means pipelines go green even when the agent had nothing to work with. This undermines confidence in agentic CI/CD.
- **Config drift between VS Code and CLI**: Dropping `.vscode/mcp.json` support (#3019) forces teams to maintain two sources of truth, increasing maintenance burden and error surface.
- **Model availability confusion**: Users upgrading to Pro+ for Opus and hitting errors (#3071), or unable to discover reasoning variants (#3066), experience friction that's hard to diagnose without internal routing knowledge.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-02

## 1. Today's Highlights
The Kimi Code CLI community experienced a surge of community-driven bug fixes, with seven new pull requests submitted focusing on MCP robustness, shell integration, and subagent architecture. Notably, developers are actively addressing third-party compatibility, as seen in a critical issue regarding DeepSeek V4's thinking mode API requirements. No official releases were cut in the last 24 hours, indicating the maintainers are likely reviewing this substantial influx of community patches.

## 2. Releases
No new releases were recorded in the past 24 hours. The latest influx of PRs suggests an upcoming stabilization and compatibility patch is currently under review.

## 3. Hot Issues
Here are the most noteworthy issues recently updated by the community:

1. **DeepSeek V4 Compatibility Break in Multi-turn Tool Calls** ([#2141](https://github.com/MoonshotAI/kimi-cli/issues/2141))
   When using DeepSeek V4 Pro with thinking mode enabled, multi-turn conversations with tool calls fail with a `400` error. The root cause is that the API strictly requires `reasoning_content` to be passed back on *all* assistant messages. This is a high-priority integration blocker for users leveraging third-party models.
   
2. **Agent Shell Command Looping & Output Truncation** ([#2142](https://github.com/MoonshotAI/kimi-cli/issues/2142))
   Users are experiencing a critical workflow breakdown where the agent gets stuck looping on the exact same shell command, coupled with unexpected output truncation. This severely impacts autonomous coding tasks.

3. **Kimi K2.6 Excessive Tool Calling in Claude Code** ([#1888](https://github.com/MoonshotAI/kimi-cli/issues/1888))
   Users report that the Kimi K2.6 model "frantically" calls tools when integrated into Claude Code via the CLI. This ongoing issue suggests potential prompt-engineering misalignment between Kimi models and third-party agent frameworks.

4. **PDF.js Wrapper Misconfiguration in Kimi Desktop (Windows 3.0.7)** ([#2143](https://github.com/MoonshotAI/kimi-cli/issues/2143))
   A Windows-specific issue where generated PDF previews incorrectly trigger a download of `viewer.html` because the PDF.js wrapper is incorrectly served with a `Content-Disposition: attachment` header.

## 4. Key PR Progress
The community submitted several high-quality PRs today focusing heavily on MCP stability and core execution environments:

1. **feat(subagents): add work_dir override** ([PR #1933](https://github.com/MoonshotAI/kimi-cli/pull/1933))
   Introduces an optional `work_dir` parameter for the Agent tool. This is a major architectural improvement allowing subagents to operate in isolated directories rather than being forced to use the root session's working directory.

2. **fix(mcp): add schema exposure guardrails** ([PR #2112](https://github.com/MoonshotAI/kimi-cli/pull/2112))
   Prevents chat request failures when MCP servers expose massive lists of tools or large input schemas. Tools are kept registered internally but selectively exposed to the model to prevent context overflow.

3. **fix(mcp): preserve structured content and sanitize refs** ([PR #2139](https://github.com/MoonshotAI/kimi-cli/pull/2139))
   Improves MCP reliability by ensuring machine-readable payloads from `structured_content` aren't dropped, and sanitizes `$ref` nodes in input schemas by removing metadata siblings.

4. **fix(prompt): align multiline input text** ([PR #2144](https://github.com/MoonshotAI/kimi-cli/pull/2144))
   Resolves a UI indentation bug in shell mode where multiline inputs were visually misaligned due to improper handling of the `$ ` prompt prefix and continuation characters.

5. **fix(shell): respect default shell** ([PR #2138](https://github.com/MoonshotAI/kimi-cli/pull/2138))
   Forces the CLI to use the user's `$SHELL` environment variable for Ctrl-X shell mode instead of defaulting immediately to bash, ensuring user environments (like zsh or fish) load correctly.

6. **fix(skill): skip invalid skill encodings** ([PR #2140](https://github.com/MoonshotAI/kimi-cli/pull/2140))
   Hardens the startup sequence by safely skipping non-UTF-8 encoded `SKILL.md` files rather than throwing a fatal crash exception.

7. **fix(hooks): publish permission prompt notifications** ([PR #2137](https://github.com/MoonshotAI/kimi-cli/pull/2137))
   Publishes a `permission_prompt` notification whenever manual approval is requested, ensuring IDE integrations and UI hooks can accurately track approval states.

## 5. Feature Request Trends
Analyzing the current issue and PR trajectory reveals distinct community feature requests:
* **Subagent Isolation:** A growing demand for robust multi-agent execution, specifically the need for subagents to have isolated working directories and contexts (as addressed in PR #1933).
* **Robust Third-Party Model Support:** Developers want seamless interoperability with models like DeepSeek V4 and Claude, requiring the CLI to dynamically handle varying API schema requirements (e.g., mandatory `reasoning_content`).
* **Enhanced MCP Limits & Payload Handling:** As developers connect to diverse MCP servers, there is a clear need for intelligent schema truncation, metadata sanitization, and preservation of structured JSON payloads.

## 6. Developer Pain Points
* **Third-Party API Friction:** Integrating non-Moonshot models remains difficult due to rigid API requirements (like DeepSeek V4's strict reasoning payload rules), causing frustrating `400` errors during complex multi-turn tool-calling.
* **Agent Reliability/Loops:** Agents getting stuck in infinite tool-call or command-execution loops severely degrades trust in autonomous task execution.
* **Environment & Encoding Edge Cases:** Developers frequently encounter startup crashes or minor UI/UX annoyances (like shell defaults and text alignment) that interrupt their workflow, highlighting a need for more defensive programming around local environment variables and file system encodings.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-02

## 1. Today's Highlights

OpenCode rolled out **v1.14.31**, bringing UX fixes for Azure setups, improved child session permission handling, and clearer MCP error messages. On the issue tracker, the **memory megathread** (#20695) continues to dominate community attention, while multiple reports around **DeepSeek V4 reasoning_content handling** and **Windows terminal regressions** signal growing pains with newer models and platforms. Several ambitious architectural PRs—including a native Effect-backed LLM core and instance management overhaul—signal deep infrastructural evolution underway.

---

## 2. Releases

### [v1.14.31](https://github.com/anomalyco/opencode/releases/tag/v1.14.31)

**Core:**
- Azure setup now prompts for the resource name when needed and persists it alongside the API key.
- Task child sessions inherit parent `external_dir` and deny permissions. ([@remorses](https://github.com/remorses))
- Invalid remote MCP URLs now fail with a clear error instead of silently breaking setup.

**Desktop:**
- Restoring saved state (release notes truncated).

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [**#20695** — Memory Megathread](https://github.com/anomalyco/opencode/issues/20695) | 71 comments, 41 👍. The central tracking issue for heap/memory leaks. Maintainers explicitly ask users *not* to paste LLM-generated solutions and instead submit heap snapshots. Performance remains a top concern. |
| 2 | [**#10416** — OpenCode is not private by default?](https://github.com/anomalyco/opencode/issues/10416) | 54 comments, 31 👍. Session title computation leaks outside local networks, discovered via nftables blocking. Raises serious data-sovereignty questions for air-gapped and self-hosted users. |
| 3 | [**#20995** — Gemma 4 tool calling fails via Ollama](https://github.com/anomalyco/opencode/issues/20995) | 43 👍, 17 comments. Streaming `tool_calls` from Gemma 4 (e4b) over Ollama's OpenAI-compatible API aren't recognized, highlighting ongoing growing pains with local model providers. |
| 4 | [**#24722** — DeepSeek thinking mode: reasoning_content not passed back](https://github.com/anomalyco/opencode/issues/24722) | 6 comments, 5 👍. DeepSeek V4 requires `reasoning_content` in subsequent requests after tool calls; omitting it causes 400 errors. A parallel report ([#25311](https://github.com/anomalyco/opencode/issues/25311)) confirms the fix exists in unmerged PRs but didn't land in v1.14.31. |
| 5 | [**#6651** — Dynamic model selection for subagents via Task tool](https://github.com/anomalyco/opencode/issues/6651) | 39 👍, 26 comments. The Task tool currently locks subagents to a single model. Users want runtime model routing per subagent call—a key architectural ask for multi-model workflows. |
| 6 | [**#24529** — Edit tool crashes with undefined filePath](https://github.com/anomalyco/opencode/issues/24529) | 14 comments. The `edit` tool crashes on any existing file modification due to an `output.args.filePath` null reference. A critical usability blocker. |
| 7 | [**#23928** — `<` or `<=` operators cause response cutoff](https://github.com/anomalyco/opencode/issues/23928) | 14 comments. HTML-like angle brackets in AI responses are incorrectly parsed and truncate output. Impacts any code generation involving comparison operators. |
| 8 | [**#16218** — Model repeats response in loop](https://github.com/anomalyco/opencode/issues/16218) | 15 comments. After generating a correct answer, the model loops the same output indefinitely instead of terminating. Affects Windows users particularly. |
| 9 | [**#23720** — Windows `/exit` freezes terminals](https://github.com/anomalyco/opencode/issues/23720) | 7 comments. A regression from v1.14.18→v1.14.19 where `/exit` freezes Hyper and Alacritty and force-closes PowerShell. Still unresolved. |
| 10 | [**#25307** — Desktop API keys stored as plain form data](https://github.com/anomalyco/opencode/issues/25307) | Security concern: Electron's browser nature means API keys entered in the desktop app are saved as autofill form data, accessible to anyone with local access. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [**#24712** — Native LLM core foundation](https://github.com/anomalyco/opencode/pull/24712) | Adds `packages/llm` with Effect-based typed request/event schemas, provider adapters, and tool runtime. Behind `OPENCODE_EXPERIMENTAL_LLM_NATIVE` flag. Major architectural shift. (Vouched, by @kitlangton) |
| 2 | [**#25277** — Move instance loading into Effect service](https://github.com/anomalyco/opencode/pull/25277) | Introduces `InstanceStore` for load, cache, reload, and disposal—removing legacy ALS dependencies from HttpApi middleware. (Vouched, by @kitlangton) |
| 3 | [**#25358** — Preserve workspace adapter context](https://github.com/anomalyco/opencode/pull/25358) | Converts workspace adapters to Effect-native ops while keeping plugin adapters Promise-based at the boundary. Ensures context survives workspace creation flows. (Vouched, by @kitlangton) |
| 4 | [**#25362** — Support model system prompts](https://github.com/anomalyco/opencode/pull/25362) | Adds `provider.<id>.models.<model>.prompt` config for model-level system prompts with proper precedence (agent > model > built-in). Closed—needs compliance review. |
| 5 | [**#25357** — preserveReasoningInContent config for Qwen thinking](https://github.com/anomalyco/opencode/pull/25357) | Adds a `preserveReasoningInContent` flag to fix interoperability with Qwen's `preserve_thinking` mode—mirrors the DeepSeek reasoning_content issue from a different angle. |
| 6 | [**#21114** — Reject unsupported image formats in Read tool](https://github.com/anomalyco/opencode/pull/21114) | Adds an allowlist (JPEG, PNG, GIF, WebP) to the Read tool to prevent sending unsupported images to providers. By @zeke. |
| 7 | [**#24877** — Fix sessions using wrong directory on reopen](https://github.com/anomalyco/opencode/pull/24877) | Session routes were using the *current* request directory instead of the directory the session was created with. Directly addresses session-mixing bugs like [#3551](https://github.com/anomalyco/opencode/issues/3551). By @jlongster. |
| 8 | [**#25359** — "warp" (architecture refactor)](https://github.com/anomalyco/opencode/pull/25359) | By @jlongster. Minimal description but likely a significant internal refactor—details TBD from the codebase. |
| 9 | [**#23212** — Terminal notifications](https://github.com/anomalyco/opencode/pull/23212) | Adds OSC-based terminal notifications for response-ready and attention-needed events. Closed/merged. (Vouched, by @kitlangton) |
| 10 | [**#13854** — Stop streaming markdown after message completes](https://github.com/anomalyco/opencode/pull/13854) | Fixes `TextPart` passing `streaming={true}` unconditionally, which caused opentui to always skip the last table row. Derives streaming state from `message.time.completed`. By @mocksoul. |

---

## 5. Feature Request Trends

1. **Dynamic model routing** — The highest-voted open feature request ([#6651](https://github.com/anomalyco/opencode/issues/6651), 39 👍) asks for per-subagent model selection. This aligns with growing multi-model workflows where users want cheap/fast models for grunt work and powerful models for planning.

2. **Thinking/reasoning mode interoperability** — Multiple issues ([#24722](https://github.com/anomalyco/opencode/issues/24722), [#25311](https://github.com/anomalyco/opencode/issues/25311), [#25357](https://github.com/anomalyco/opencode/pull/25357)) reveal that provider-specific reasoning content handling (DeepSeek V4, Qwen, Gemma 4) is a major friction point. Users want first-class support for extended thinking across all providers.

3. **Multiline chat input** ([#20446](https://github.com/anomalyco/opencode/issues/20446)) — Shift+Enter or equivalent for line breaks remains unsupported, a basic UX gap for power users composing complex prompts.

4. **Plugin lifecycle hooks** ([#10524](https://github.com/anomalyco/opencode/issues/10524), 7 👍) — Plugins need shutdown hooks for graceful cleanup. Essential for plugins like `opencode-sync` that manage external state.

5. **MCP transport resilience** ([#25287](https://github.com/anomalyco/opencode/issues/25287)) — Remote MCP clients lack retry/reconnect logic. As MCP adoption grows, transport-level reliability is becoming critical infrastructure.

---

## 6. Developer Pain Points

1. **Memory leaks remain unresolved.** The 71-comment megathread ([#20695](https://github.com/anomalyco/opencode/issues/20695)) has been open for a month with no definitive fix. Long-running sessions accumulate heap memory, and the debugging workflow (manual heap snapshots) is cumbersome.

2. **Windows is a second-class citizen.** Terminal freezes on `/exit` ([#23720](https://github.com/anomalyco/opencode/issues/23720)), response loops ([#16218](https://github.com/anomalyco/opencode/issues/16218)), path separator mismatches ([#21340](https://github.com/anomalyco/opencode/issues/21340)), and VSCode extension data provider errors ([#10119](https://github.com/anomalyco/opencode/issues/10119)) collectively signal a fragile Windows experience.

3. **Provider compatibility keeps breaking.** DeepSeek V4 reasoning_content ([#24722](https://github.com/anomalyco/opencode/issues/24722)), Gemma 4 tool calls via Ollama ([#20995](https://github.com/anomalyco/opencode/issues/20995)), and AWS Bedrock multi-model sessions ([#24648](https://github.com/anomalyco/opencode/issues/24648)) all fail silently or with cryptic errors. The "bring your own provider" promise strains under provider-specific edge cases.

4. **Privacy expectations are misaligned.** Session title computation phones home ([#10416](https://github.com/anomalyco/opencode/issues/10416)), and the desktop app stores API keys as unencrypted form data ([#25307](https://github.com/anomalyco/opencode/issues/25307)). Users running air-gapped or security-conscious setups are discovering these leaks the hard way.

5. **Edit tool instability.** The core edit tool crashes on routine file modifications ([#24529](https://github.com/anomalyco/opencode/issues/24529)), and angle brackets in AI output cause silent truncation ([#23928](https://github.com/anomalyco/opencode/issues/23928)). These are table-stakes operations that should "just work."

6. **Custom provider onboarding friction.** Docs reference an "other" option that doesn't exist in the UI ([#5937](https://github.com/anomalyco/opencode/issues/5937), [#25297](https://github.com/anomalyco/opencode/issues/25297)), blocking users of OpenAI-compatible endpoints from getting started.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-02

## 1. Today's Highlights
Pi rolls out **v0.71** with a major architectural cleanup: built-in Google Gemini CLI and Google Antigravity providers have been removed, making way for Cloudflare AI Gateway support and a new `websocket-cached` transport for OpenAI Codex. The community is actively filling the provider ecosystem gap, submitting extensions for local LLM engines (llama.cpp, Ollama, LM Studio, vLLM) and cloud providers like DigitalOcean, Xiaomi MiMo, and Volcano Engine. Terminal handling and DeepSeek V4 reasoning compatibility are the bug focus of the day.

## 2. Releases

### [v0.71.1](https://github.com/badlogic/pi-mono/releases/tag/v0.71.1)
- Added `websocket-cached` transport option for OpenAI Codex provider (ChatGPT subscription auth). Reuses the same WebSocket for a session, sending only new conversation items after the first request instead of resending full history — significant latency and token reduction.

### [v0.71.0](https://github.com/badlogic/pi-mono/releases/tag/v0.71.0)
- **Breaking**: Removed built-in Google Gemini CLI and Google Antigravity support. Existing configs must migrate to another provider.
- **New**: Cloudflare AI Gateway provider (`CLOUDFLARE_API_KEY` / `CLOUDFLARE_ACCOUNT_ID` / `CLOUDFLARE_GATEWAY_ID`).

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#3357 Official local LLM provider extension](https://github.com/badlogic/pi-mono/issues/3357) (👍17) | Top-thumbed open issue. Community wants first-class dynamic model discovery (`/models` endpoint) for llama.cpp/Ollama/LM Studio. PR #4007 already addresses this. |
| 2 | [#3208 Custom Thinking Levels per Model](https://github.com/badlogic/pi-mono/issues/3208) (👍13) | Models define their own reasoning levels in `models.json` so `Shift+Tab` only cycles supported levels. Author wants to implement it — core to reasoning UX. |
| 3 | [#3959 Error with Mistral](https://github.com/badlogic/pi-mono/issues/3959) | Mistral returns 404 across all models and API keys; possible provider config regression in 0.71.x. |
| 4 | [#4051 TensorZero-based providers return empty responses in 0.71.0](https://github.com/badlogic/pi-mono/issues/4051) | Regression from the 0.71.0 release — custom TensorZero/TEE providers break entirely. |
| 5 | [#4026 openai-codex-responses: low verbosity regress tool-calling](https://github.com/badlogic/pi-mono/issues/4026) | Default `text.verbosity = "low"` causes gpt-5.3-codex to emit commentary instead of tool calls, stopping mid-task. |
| 6 | [#3940 DeepSeek V4 missing reasoningEffortMap on non-DeepSeek providers](https://github.com/badlogic/pi-mono/issues/3940) | `generate-models.ts` omits `reasoningEffortMap` and `thinkingFormat` for DeepSeek V4 on third-party providers (OpenRouter, etc.). |
| 7 | [#4063 registerProvider ignores models[].baseUrl](https://github.com/badlogic/pi-mono/issues/4063) | Extension API bug — per-model `baseUrl` is silently overridden by provider-level value, breaking multi-endpoint setups. |
| 8 | [#3259 Shift+Enter regression in Zellij](https://github.com/badlogic/pi-mono/issues/3259) | 14 comments; terminal multiplexer compatibility remains a pain point. PR #4037 targets legacy terminal escape sequences. |
| 9 | [#4046 Compaction deletes everything](https://github.com/badlogic/pi-mono/issues/4046) | Context compaction wipes conversation instead of summarizing — critical if reproducible. |
| 10 | [#4017 Antigravity Auth → account disabled (403)](https://github.com/badlogic/pi-mono/issues/4017) | Using Antigravity OAuth triggers ToS violation bans. Timely given its removal in v0.71.0. |

## 4. Key PR Progress

| # | PR | Summary |
|---|----|---------|
| 1 | [#4007 Official local-LLM provider extensions](https://github.com/badlogic/pi-mono/pull/4007) | Adds four ready-to-use extensions: llama.cpp, LM Studio, vLLM, Ollama — each auto-discovers models from the engine's endpoint. Closes #3357. |
| 2 | [#3868 Migrate syntax highlighting to Shiki](https://github.com/badlogic/pi-mono/pull/3868) | Replaces custom highlighting with Shiki for both terminal and HTML export; lazy language loading and theme integration. |
| 3 | [#3856 Cloudflare AI Gateway provider](https://github.com/badlogic/pi-mono/pull/3856) | Implements the Cloudflare provider shipped in v0.71.0 — caching, rate limiting, fallbacks. |
| 4 | [#4005 Xiaomi MiMo provider](https://github.com/badlogic/pi-mono/pull/4005) | Adds Xiaomi's MiMo as an OpenAI-compatible built-in provider (still open). |
| 5 | [#4060 DigitalOcean serverless inference provider](https://github.com/badlogic/pi-mono/pull/4060) | DO inference at `inference.do-ai.run/v1` wired through openai-completions. |
| 6 | [#4062 Fix Vietnamese/IME input with combining marks](https://github.com/badlogic/pi-mono/pull/4062) | Fixes NFD Unicode input lag — important for international users. |
| 7 | [#4053 Expose skills override to extensions](https://github.com/badlogic/pi-mono/pull/4053) | New `pi.registerSkillsOverride()` API lets extensions chain skill overrides. |
| 8 | [#3678 Honor Fireworks Anthropic tool compat](https://github.com/badlogic/pi-mono/pull/3678) | Fixes tool-use errors with Fireworks provider when using Anthropic models. |
| 9 | [#4037 Handle Shift+Enter in legacy terminals](https://github.com/badlogic/pi-mono/pull/4037) | Maps legacy SS3 escape sequences to Shift+Enter for proper newline insertion. |
| 10 | [#3832 Remove Qwen CLI OAuth provider](https://github.com/badlogic/pi-mono/pull/3832) | Qwen free OAuth tier discontinued April 15 — extension and references removed. |

## 5. Feature Request Trends

- **Provider ecosystem expansion**: The dominant theme. Local LLM support (#3357), Volcano Engine/Ark (#3710), Xiaomi MiMo (#4005), DigitalOcean (#4060), and Cloudflare AI Gateway (#3856) all reflect demand to connect Pi to any inference endpoint. The v0.71.0 removal of Gemini CLI/Antigravity accelerates community-built replacements.
- **Reasoning/thinking control**: Custom thinking levels per model (#3208), DeepSeek V4 reasoning effort mapping (#3940, #4073), and verbosity-related tool-calling regression (#4026) show that reasoning UX is a core differentiator users care deeply about.
- **Extension API maturation**: Requests for `registerSkillsOverride`, `getPasteContent`/`replacePaste` (#4059), per-model baseUrl in `registerProvider` (#4063), and gist-based resource installation (#4048) indicate developers are pushing the extension framework to be more capable and consistent.

## 6. Developer Pain Points

- **Provider regressions on minor bumps**: v0.71.0 broke TensorZero providers (#4051) and changed default verbosity causing tool-call failures (#4026). Version upgrades carry real risk for non-OpenAI/Anthropic users.
- **Terminal compatibility fragility**: Shift+Enter in Zellij (#3259), Vietnamese/IME input (#4062), Windows Terminal backspace (#2733), and WSL clipboard paste (#2469) remain recurring issues across terminal emulators and multiplexers.
- **Inconsistency between `models.json` and extension API**: Per-model `baseUrl` works in config files but not through `registerProvider()` (#4063); `skillsOverride` was SDK-only until #4053. The extension API lags behind the config surface.
- **Self-update edge cases**: `pi update --self` fails with custom npm prefixes (Nix users, #3942), blocking a key UX improvement for non-standard setups.
- **Compaction reliability**: (#4046) reports context compaction deleting everything instead of summarizing — if systemic, this undermines a core agent memory feature.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-05-02.

## 1. Today's Highlights
Qwen Code rolled out the **v0.15.6-nightly.20260501** release, featuring a highly anticipated `FileReadCache` to short-circuit unchanged file reads and a vital CLI proxy setting fix. The community saw a massive surge in architectural contributions, particularly around OpenTelemetry hardening, token cost estimation, and safer AI-mutation tracking via mandatory read-before-write enforcement. Additionally, significant strides were made in expanding Qwen's platform footprint with the introduction of a new desktop app package and image-sharing capabilities for the WeChat channel.

## 2. Releases
*   **[v0.15.6-nightly.20260501.8b6b0d64f](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.6-nightly.20260501.8b6b0d64f)**
    *   **feat(core):** Introduced `FileReadCache` to optimize file reading by bypassing unchanged files ([PR #3717](https://github.com/QwenLM/zwen-code/pull/3717)).
    *   **fix(cli):** Resolved proxy configuration honors ([PR by @cyphercodes](https://github.com/QwenLM/qwen-code/pull/3766)).

## 3. Hot Issues
1.  **[Memory Diagnostics Deep Dive (#3000)](https://github.com/QwenLM/qwen-code/issues/3000)**: Requesting native tools for analyzing V8 heap and detecting memory leaks. Highlights a growing need for better runtime observability for heavy agentic processes.
2.  **[DeepSeek v4 Pro API 400 Error (#3772)](https://github.com/QwenLM/qwen-code/issues/3772)**: Users utilizing 3rd-party OpenAI-compatible models (like DeepSeek) are hitting `reasoning_content` API errors during multi-turn conversations, indicating a compatibility gap in how thinking tokens are passed back.
3.  **[Harden OpenTelemetry Configuration (#3731)](https://github.com/QwenLM/qwen-code/issues/3731)**: A push to make OTLP implementations production-ready regarding HTTP behaviors, exporter safety, and shutdown reliability.
4.  **[HTTP OTLP Endpoint Behavior & Signal Routing (#3734)](https://github.com/QwenLM/qwen-code/issues/3734) [CLOSED]**: Subset of the OTel hardening effort, successfully resolved/closed to define explicit URL behaviors for logs, metrics, and traces.
5.  **[VS Code Chat UI Missing (#1916)](https://github.com/QwenLM/qwen-code/issues/1916)**: A usability blocker where users cannot locate the chat interface button in the IDE, pointing to an onboarding/UI clarity issue.
6.  **[Generic Bug / Client Error (#3773)](https://github.com/QwenLM/qwen-code/issues/3773)**: A low-quality bug report that lacks reproduction details, reflecting the ongoing challenge maintainers face with triaging user-submitted errors.

## 4. Key PR Progress
1.  **[Enforce Prior Read Before Mutate (#3774)](https://github.com/QwenLM/qwen-code/pull/3774)**: Builds on the new `FileReadCache` to ensure the AI agent *must* read a file's current state before editing it, preventing blind overwrites.
2.  **[Add Desktop App Package with ACP SDK Integration (#3778)](https://github.com/QwenLM/qwen-code/pull/3778)**: Introduces `packages/desktop/`, significantly expanding Qwen Code beyond the CLI and VS Code environments.
3.  **[WeChat Image CDN Upload Support (#3781)](https://github.com/QwenLM/qwen-code/pull/3781)**: Implements a 4-step CDN upload flow to allow agents to send images through the WeChat channel.
4.  **[Commit Attribution with AI Tracking (#3115)](https://github.com/QwenLM/qwen-code/pull/3115)**: Implements per-file AI contribution tracking in git history, a massive win for enterprise compliance and open-source disclosure.
5.  **[Prevent File Paths from Triggering Slash Commands (#3743)](https://github.com/QwenLM/qwen-code/pull/3743)**: Fixes an annoying CLI bug where pasting absolute paths (like `/Users/name/...`) was incorrectly parsed as a command.
6.  **[Add `--json-schema` for Structured Output (#3598)](https://github.com/QwenLM/qwen-code/pull/3598)**: Adds a headless mode flag to force the LLM to output strictly according to a provided JSON schema.
7.  **[Fix MiniMax Thinking Tags (#3677)](https://github.com/QwenLM/qwen-code/pull/3677)**: Improves OpenAI-provider compatibility by properly parsing `<thinking>` tags from MiniMax endpoints.
8.  **[Auto Compression for ACP Model Sends (#3698)](https://github.com/QwenLM/qwen-code/pull/3698)**: Fixes a context overflow issue by running chat compression *before* sending prompts to the model in Agent Communication Protocol flows.
9.  **[Define HTTP OTLP Endpoint Behavior (#3779)](https://github.com/QwenLM/qwen-code/pull/3779) [CLOSED]**: Implements per-signal endpoint overrides and proper URL appending for OpenTelemetry.
10. **[Add PyPI Release Workflow for Python SDK (#3685)](https://github.com/QwenLM/qwen-code/pull/3685)**: Sets up automated GitHub Actions to seamlessly build and publish `qwen-code-sdk` to PyPI.

## 5. Feature Request Trends
*   **LLM Cost Observability:** There is a massive community push to track token spend and estimate model costs dynamically. (Seen in PRs [#3631](https://github.com/QwenLM/qwen-code/pull/3631), [#3780](https://github.com/QwenLM/qwen-code/pull/3780), and [#3668](https://github.com/QwenLM/qwen-code/pull/3668)).
*   **Enterprise-Grade Telemetry:** Moving beyond basic logging, users want production-ready OpenTelemetry integration with fine-grained control over HTTP OTLP routing and runtime safety.
*   **AI Provenance & Auditability:** A distinct trend toward treating AI as an accountable entity. Features like per-file AI contribution tracking in git and read-before-write enforcement are highly requested to maintain code integrity.
*   **Multi-Modal Channel Expansion:** Extending text-only agent capabilities to include media and native apps, specifically WeChat image uploads and standalone Desktop apps.

## 6. Developer Pain Points
*   **Third-Party Provider Compatibility:** Developers frequently encounter 400 errors when routing Qwen Code through custom OpenAI-compatible endpoints (especially with newer reasoning models like DeepSeek v4) due to how `reasoning_content` is parsed.
*   **Agentic Memory Leaks & Context Management:** Heavy, long-running agents are prone to memory pressure. The lack of native V8 heap diagnostics forces developers to guess when context limits or memory limits are being hit.
*   **CI Flakiness:** Pre-existing ESLint violations and test regressions (like the E2E stdin-close test fixed in [PR #3777](https://github.com/QwenLM/qwen-code/pull/3777)) are causing frequent CI matrix failures, blocking community contributors from merging PRs.

</details>