# AI CLI Tools Community Digest 2026-03-22

> Generated: 2026-03-21 22:01 UTC | Tools covered: 7

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

# AI CLI Tools Ecosystem Report
**Date:** 2026-03-22

---

## 1. Ecosystem Overview

The AI CLI tools landscape is maturing rapidly, with all major players now competing on **agentic reliability**, **enterprise-grade safety controls**, and **context window optimization** rather than basic code generation capabilities. A clear architectural convergence is emerging around sub-agent delegation patterns, persistent memory systems, and Spec-Driven Development (SDD) workflows. Simultaneously, a critical industry-wide challenge has surfaced: **permission system reliability and safety guardrails** are now top concerns across every community, driven by real-world incidents of unintended file deletions and destructive git operations.

---

## 2. Activity Comparison

| Tool | Issues Today | PRs Today | Release Status | Activity Level |
|------|:------------:|:---------:|----------------|:--------------:|
| **Claude Code** | 10+ | 10+ | v2.1.81 released | 🔴 Very High |
| **OpenAI Codex** | 10+ | 10+ | 3 alpha releases (Rust SDK) | 🔴 Very High |
| **Gemini CLI** | 10+ | 10+ | v0.36.0-nightly | 🔴 Very High |
| **Qwen Code** | 10+ | 10+ | v0.13.0-nightly | 🔴 Very High |
| **OpenCode** | 10+ | 10+ | None | 🟡 High |
| **GitHub Copilot CLI** | 10+ | 0 | None | 🟢 Moderate |
| **Kimi Code CLI** | 7+ | 1 | None | 🟢 Moderate |

---

## 3. Shared Feature Directions

| Direction | Tools | Specific Requirements |
|-----------|-------|----------------------|
| **Safety Guardrails for Destructive Ops** | Gemini CLI, OpenAI Codex, Claude Code | Confirmation prompts for `rm -rf`, `git reset --hard`, `git push --force`; human-in-the-loop for filesystem mutations |
| **Permission System Hardening** | Claude Code, OpenAI Codex, Kimi CLI | Reliable deny-rule enforcement, global/local settings merging, full command visibility for audit |
| **Sub-Agent / Background Execution** | OpenCode, Gemini CLI, Qwen Code | Async fire-and-forget task delegation, non-blocking parallel execution, tool isolation |
| **Context Window & Compaction Control** | OpenAI Codex, OpenCode, Qwen Code | Configurable thresholds, pre-flight budget estimation, visible compaction summaries, 1M context support |
| **Remote Backend / SSH Support** | OpenAI Codex, GitHub Copilot CLI | Desktop GUI → remote server connection, DevContainer/SSH flexibility |
| **Project-Level Configuration** | OpenAI Codex, Kimi CLI, Claude Code | Per-workspace `config.toml`/`.toml`, local MCP settings, auto-detection of project configs |
| **AST-Aware Code Intelligence** | Gemini CLI, Qwen Code (implied) | Native code structure understanding vs. regex-based reads, reduced token noise |

---

## 4. Differentiation Analysis

| Tool | Feature Focus | Target Users | Technical Approach |
|------|---------------|--------------|-------------------|
| **Claude Code** | Enterprise governance, hooks/permissions, CI/CD integration | Enterprise teams, security-conscious orgs | OAuth + API key dual auth, plugin ecosystem, `--bare` headless mode |
| **OpenAI Codex** | VS Code/Desktop GUI synergy, Rust SDK performance | VS Code users, cross-platform desktop | Typed `app-server` architecture, multi-client (CLI/TUI/Desktop) |
| **Gemini CLI** | Spec-Driven Development (SDD), agentic workflows | Advanced agent builders, Google Cloud users | Persistent task DAGs, subagent isolation, voice input support |
| **GitHub Copilot CLI** | VS Code parity, subscription integration | GitHub ecosystem users | Model selection alignment with VS Code extension |
| **Qwen Code** | Context optimization, open-source portability | Cost-sensitive developers, open-source community | Features ported from Gemini CLI, local provider support (Ollama, LM Studio) |
| **OpenCode** | Multi-provider flexibility, privacy focus | Power users, local-model enthusiasts | Provider-agnostic, Deno/Bun runtime options, Anthropic cache optimization |
| **Kimi Code CLI** | Chinese market, transparency/observability | Chinese developers, security-conscious users | Real-time thinking streams, full command logging |

---

## 5. Community Momentum & Maturity

| Category | Tools | Evidence |
|----------|-------|----------|
| **Rapid Iteration** | Claude Code, OpenAI Codex, Gemini CLI, Qwen Code | Multiple releases/PRs daily, active maintainer engagement, fast issue triage |
| **Stable but Slower** | GitHub Copilot CLI, Kimi Code CLI | No releases today, moderate PR activity, focus on stability over new features |
| **High Enterprise Traction** | Claude Code, OpenAI Codex | Permission/governance issues dominate discussions; enterprise deployment concerns prominent |
| **Open-Source Community Driven** | OpenCode, Qwen Code | Strong plugin/skill ecosystem, cross-tool compatibility requests (AGENTS.md), community PRs merged |

**Maturity Indicator:** Claude Code and OpenAI Codex show the most enterprise-ready signals (OAuth, CI/CD modes, governance hooks), while Gemini CLI and Qwen Code are aggressively pushing agentic architecture boundaries.

---

## 6. Trend Signals

### Industry-Wide Shifts

| Trend | Signal | Actionable Insight |
|-------|--------|-------------------|
| **Safety-First Defaults Becoming Mandatory** | 3+ tools report destructive operation incidents; users demanding confirmation gates | Implement `confirmation_required` patterns for `rm`, `git push --force`, and bulk file operations before enterprise adoption |
| **Permission Systems Are the #1 Enterprise Blocker** | Claude Code deny-rule bugs, Kimi CLI command opacity, OpenAI Codex safety requests | Audit permission enforcement in headless/CI modes; hook-based governance is not yet reliable enough for production |
| **Context Management Is the New Performance Frontier** | OOM errors, compaction bugs, and 1M context support requests across 4+ tools | Prioritize tools with configurable compaction thresholds and transparent context budgeting |
| **Sub-Agent Architectures Are Converging** | Background execution, task DAGs, and subagent isolation in Gemini CLI, OpenCode, Qwen Code | Design for async agent patterns; synchronous blocking will become a competitive disadvantage |
| **Cross-Tool Compatibility Emerging** | `AGENTS.md` requests (Claude Code), shared skill formats, Gemini→Qwen code porting | Standardize on `AGENTS.md` or equivalent for project-level AI instructions to avoid vendor lock-in |

### Warning Signals

- **Claude Code**: Permission system inconsistency reports (deny rules ignored, settings not merging) are a **critical trust risk** for enterprise deployments
- **OpenAI Codex**: Token consumption regression in VS Code extension is causing **financial/quota pain** for business users
- **OpenCode**: OAuth 429 errors blocking Claude Pro/Max users; **privacy concerns** about external network calls
- **GitHub Copilot CLI**: Infinite loop bug draining premium quotas; **cost control circuit-breakers** urgently needed

---

*Report generated from community digest data across 7 major AI CLI tools — 2026-03-22*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Analysis Period:** Through 2026-03-22 | **Source:** github.com/anthropics/skills

---

## 1. Top Skills Ranking

The following Skills PRs are generating the most community attention and discussion:

| Rank | Skill | Author | Status | Description |
|------|-------|--------|--------|-------------|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | PGTBoos | 🟢 OPEN | Typographic quality control for AI-generated documents—prevents orphan word wraps, widow paragraphs, and numbering misalignment. Addresses a universal pain point since "users rarely ask for good typography." |
| 2 | **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | eovdecu | 🟢 OPEN | Two meta-skills for the marketplace: quality analysis across 5 dimensions (structure, documentation, etc.) and security evaluation for Skills themselves. |
| 3 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | justinwetch | 🟢 OPEN | Major revision improving clarity and actionability—ensures every instruction is executable within a single conversation. |
| 4 | **[SAP-RPT-1-OSS Predictor](https://github.com/anthropics/skills/pull/181)** | amitlals | 🟢 OPEN | Leverages SAP's open-source tabular foundation model (released at TechEd 2025) for predictive analytics on SAP business data. |
| 5 | **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | p19dixon | 🟢 OPEN | 10-step workflow for codebase cleanup: identifies orphaned code, unused files, documentation gaps, and produces a `CODEBASE-STATUS.md` truth document. |
| 6 | **[session-memory](https://github.com/anthropics/skills/pull/629)** | Lordanakun | 🟢 OPEN | Zero-dependency persistent memory across context compaction—preserves critical technical facts (file reads, test outputs) when sessions restart. |
| 7 | **[management-consulting](https://github.com/anthropics/skills/pull/384)** | anotb | 🟢 OPEN | Enterprise-grade skill covering structured problem solving, strategic frameworks, business case development, and executive communication. |
| 8 | **[avoid-ai-writing](https://github.com/anthropics/skills/pull/535)** | conorbronsdon | 🟢 OPEN | Content auditing skill that detects and rewrites 21 categories of "AI-ism" patterns using a 43-entry replacement table. |

---

## 2. Community Demand Trends

Based on Issues discussion volume and thematic clustering:

| Trend | Description | Evidence |
|-------|-------------|----------|
| **🛡️ Security & Trust Framework** | Strong demand for security-oriented skills and trust boundary protections | [Issue #492](https://github.com/anthropics/skills/issues/492) (4 comments) raises namespace impersonation risks; [Issue #412](https://github.com/anthropics/skills/issues/412) proposes agent governance patterns |
| **🔧 Skill-Creator Improvements** | Multiple requests to modernize the meta-skill for building skills | [Issue #202](https://github.com/anthropics/skills/issues/202) (8 comments) calls for best-practice updates; UTF-8 fixes in PRs [#362](https://github.com/anthropics/skills/pull/362), [#284](https://github.com/anthropics/skills/pull/284) |
| **🔌 MCP Integration** | Interest in exposing Skills as Model Context Protocol tools | [Issue #16](https://github.com/anthropics/skills/issues/16) proposes MCP-as-API pattern; [Issue #369](https://github.com/anthropics/skills/issues/369) requests MCP App spec support |
| **☁️ Platform Reliability** | Recurring API/infrastructure issues blocking adoption | [Issue #62](https://github.com/anthropics/skills/issues/62) (10 comments): skills disappearing; [Issue #406](https://github.com/anthropics/skills/issues/406): upload failures; [Issue #389](https://github.com/anthropics/skills/issues/389): Opus 4.5 API downtime |
| **🏢 Enterprise/SSO Compatibility** | Skills tooling must work without API keys | [Issue #532](https://github.com/anthropics/skills/issues/532) flags that `run_eval.py` requires `ANTHROPIC_API_KEY`, blocking SSO users |

---

## 3. High-Potential Pending Skills

Active PRs with strong momentum that may merge soon:

| Skill | Why It Matters | PR Link |
|-------|----------------|---------|
| **ODT Document Handler** | ISO-standard OpenDocument support (LibreOffice, Google Docs compatible) for template filling and HTML conversion | [#486](https://github.com/anthropics/skills/pull/486) |
| **shodh-memory** | Persistent agent context with proactive memory surfacing—addresses the "cold start" problem | [#154](https://github.com/anthropics/skills/pull/154) |
| **Masonry AI Media Generation** | CLI skill for Imagen 3.0 images and Veo 3.1 videos from text prompts | [#335](https://github.com/anthropics/skills/pull/335) |
| **Flutter Theme Factory** | 12 pre-built professional themes with full ColorScheme and Google Fonts pairings | [#368](https://github.com/anthropics/skills/pull/368) |
| **x402 BSV Micropayments** | Natural-language payments for AI services—discover, authenticate, pay in one flow | [#374](https://github.com/anthropics/skills/pull/374) |
| **CONTRIBUTING.md** | Addresses repo's 25% community health score; most impactful single governance addition | [#509](https://github.com/anthropics/skills/pull/509) |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for robust memory/persistence mechanisms that preserve context across sessions and compaction events**—evidenced by multiple competing approaches (session-memory, shodh-memory) and meta-tooling improvements (skill-creator modernization) that together signal a maturity inflection point from one-off skills toward sustainable, enterprise-grade agent infrastructure.

---

# Claude Code Community Digest
**Date:** 2026-03-22

---

## 1. Today's Highlights

Version **v2.1.81** introduces a new `--bare` flag optimized for scripted `-p` calls, disabling hooks, LSP, plugin sync, and auto-memory for leaner CI/CD pipelines—though it requires `ANTHROPIC_API_KEY` or `apiKeyHelper` since OAuth is disabled. A new `--channels` permission relay feature was also added (release notes truncated). The community is actively grappling with significant **permission system inconsistencies**, including reports of deny rules being ignored, global/local settings not merging correctly, and hook-based permission decisions not being respected—raising security concerns for enterprise deployments.

---

## 2. Releases

### v2.1.81
- **`--bare` flag for scripted mode**: Skips hooks, LSP, plugin sync, and skill directory walks for minimal-overhead scripted `-p` calls. Auto-memory is fully disabled. Requires `ANTHROPIC_API_KEY` or `apiKeyHelper` via `--settings` (OAuth and keychain auth are not supported in this mode).
- **`--channels` permission relay**: Feature partially documented; appears to enable permission delegation across channels (release notes cut off).

---

## 3. Hot Issues

| Issue | Why It Matters |
|-------|----------------|
| **[#24964](https://github.com/anthropics/claude-code/issues/24964)** - Cowork folder picker rejects folders outside home directory | **131 👍 / 97 comments** — Critical for monorepo and symlink-heavy workflows. Users report Cowork's folder picker arbitrarily blocks legitimate project directories, making the IDE integration unusable for many configurations. |
| **[#8961](https://github.com/anthropics/claude-code/issues/8961)** - Deny rules ignored in settings.local.json | **18 👍 / 18 comments** — Security vulnerability. Claude Code reportedly ignores explicit `deny` rules, potentially allowing access to sensitive files or commands that should be blocked. |
| **[#24726](https://github.com/anthropics/claude-code/issues/24726)** - Disable auto-attach of open file/selection in VS Code | **33 👍 / 12 comments** — High demand for control over context injection. Users want to prevent automatic file content from being sent to the model for cost and privacy reasons. |
| **[#17017](https://github.com/anthropics/claude-code/issues/17017)** - Project-level permissions replace instead of merge | **17 👍 / 12 comments** — Enterprise pain point. Local `.claude/settings.local.json` completely replaces global permissions instead of merging, breaking the expected inheritance model. |
| **[#5140](https://github.com/anthropics/claude-code/issues/5140)** - User settings.json permissions not applied at project level | **32 👍 / 21 comments** — Long-standing issue where global permission defaults are ignored when working in project contexts. |
| **[#33814](https://github.com/anthropics/claude-code/issues/33814)** - Forces scroll to top when outputting code | **21 👍 / 25 comments** — TUI regression causing significant UX friction. Users lose their reading position whenever code is generated. |
| **[#30435](https://github.com/anthropics/claude-code/issues/30435)** - Allow suppressing bash safety heuristic prompts | **27 👍 / 10 comments** — Power users frustrated by repeated safety prompts for commands they've already vetted; requesting settings-level control. |
| **[#37210](https://github.com/anthropics/claude-code/issues/37210)** - PreToolUse hook `deny` ignored for Edit tool *(CLOSED)* | **3 comments** — Hooks returning `permissionDecision: "deny"` are ignored for the Edit tool, undermining governance/security workflows. |
| **[#37071](https://github.com/anthropics/claude-code/issues/37071)** - Channels unavailable on Teams plan | **4 comments** — Admins enabled the new Channels feature but users see "not currently available." Possible rollout or entitlement bug with v2.1.81. |
| **[#14956](https://github.com/anthropics/claude-code/issues/14956)** - Skill allowed-tools doesn't grant Bash command permissions | **19 👍 / 12 comments** — Skills defining `allowed-tools` report permissions as active but Bash commands matching patterns are still denied. |

---

## 4. Key PR Progress

| PR | Description |
|----|-------------|
| **[#37241](https://github.com/anthropics/claude-code/pull/37241)** - Add agents-md plugin | Auto-loads `AGENTS.md` at session start for cross-tool compatibility with Cursor, OpenAI Codex, and Amp. Addresses high-demand issue #6235 (246 comments). |
| **[#35683](https://github.com/anthropics/claude-code/pull/35683)** - Add scroll-fix plugin | Community-contributed fix for the terminal scroll-to-top regression (#33814). Intercepts problematic cursor sequences and provides a Ctrl+6 freeze toggle. |
| **[#37236](https://github.com/anthropics/claude-code/pull/37236)** - Add tmp-cwd-cleanup plugin | Addresses memory leak (#8856) where Bash tool creates `/tmp/claude-*-cwd` files that are never cleaned up. |
| **[#37084](https://github.com/anthropics/claude-code/pull/37084)** - GitHub API scripts hardening | Adds retry, timeout, and rate-limit handling to internal GitHub API scripts with 52 new tests. |
| **[#37159](https://github.com/anthropics/claude-code/pull/37159)** - Persistent memory and session management | Introduces cross-conversation memory for agents with context windowing and automatic learning extraction. |
| **[#36925](https://github.com/anthropics/claude-code/pull/36925)** - Hookify fix for unrelated rule evaluation | Prevents `reason`, `transcript`, and `user_prompt` rules from incorrectly firing during `PreToolUse`/`PostToolUse` for unrelated tools. |
| **[#33070](https://github.com/anthropics/claude-code/pull/33070)** - Add reframe plugin | Slash command applying cognitive frameworks (first principles, inversion, analogy) to debug stuck problems using codebase context. |
| **[#37082](https://github.com/anthropics/claude-code/pull/37082)** - Add agentmarkup plugin | Helps make websites machine-readable for LLMs via `llms.txt`, JSON-LD, and AI crawler directives. |
| **[#29656](https://github.com/anthropics/claude-code/pull/29656)** - Fix GitHub Actions shell injection *(CLOSED)* | Security fix moving GitHub context variables to `env:` section to prevent code injection via `workflow_dispatch` inputs. |
| **[#20381](https://github.com/anthropics/claude-code/pull/20381)** - Add MIT license to .devcontainer | Enables legal reuse of devcontainer configuration in downstream projects. |

---

## 5. Feature Request Trends

1. **Granular permission control & enforcement** — Multiple requests for settings to suppress safety heuristics, proper merging of global/local permissions, and enforcement of deny rules.
2. **IDE context control** — Strong demand to disable automatic file/selection attachment in VS Code for cost and privacy (#24726, #20944).
3. **Cross-tool compatibility** — `AGENTS.md` support requested to align with Cursor, Codex, and other AI coding tools.
4. **Hook governance enhancements** — Requests for hooks to reliably block execution and to ask users questions interactively (#26647).
5. **Monorepo/nested project support** — Issues with nested `.claude/` directories, symlinks, and folder selection (#24964, #36624).

---

## 6. Developer Pain Points

| Category | Summary |
|----------|---------|
| **Permission system reliability** | The most frequent complaint. Users report deny rules being ignored, global settings not merging, and hook-based decisions overridden. This undermines trust for security-sensitive deployments. |
| **Windows/WSL friction** | Path format mismatches causing unnecessary `cd` prepending, permission patterns not working, and desktop ignoring WSL project configurations. |
| **Hook effectiveness** | Multiple reports that `PreToolUse` hooks with `permissionDecision: "deny"` don't reliably block execution, especially in headless mode or with `--dangerously-skip-permissions`. |
| **TUI regressions** | Scroll-to-top bug (#33814) is a significant UX regression affecting productivity during code generation. |
| **Auth/subscription issues** | Users switching from API credits to Pro subscriptions hitting rate limit errors (#37246), and OAuth URLs rendered unclickable in TUI (#33539). |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-03-22

## 1. Today's Highlights
The OpenAI Codex team is heavily focused on architectural refactoring, specifically migrating the CLI and TUI to use typed `app-server` APIs and removing legacy notification handling. On the community side, users are reporting critical usability blockers, including a major token consumption regression in the VS Code extension and persistent connection instability in the Desktop App. Additionally, discussions around safety mechanisms have resurfaced following reports of unintended file deletion during agent operations.

## 2. Releases
Three new alpha versions for the **Rust SDK (v0.117.0)** were published in the last 24 hours:
*   [rust-v0.117.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.8)
*   [rust-v0.117.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.7)
*   [rust-v0.117.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.6)

## 3. Hot Issues
1.  **[High Priority] Excessive Token Consumption in VS Code**
    Issue [#14593](https://github.com/openai/codex/issues/14593) reports that the latest VS Code extension update (v26.311.21342) is burning through tokens at an accelerated rate. With 176 comments and significant community friction, users are urging a fix for what appears to be a regression in context handling or looping.
2.  **Top Feature Request: Remote Development Support**
    Issue [#10450](https://github.com/openai/codex/issues/10450) (+413 👍) requests support for remote development in the Codex Desktop App. Users want the ability to connect the GUI to remote backends (SSH/Containers) to match the flexibility of VS Code Remote.
3.  **Desktop App Connectivity Worsens**
    In Issue [#14209](https://github.com/openai/codex/issues/14209), European users report severe reconnecting issues with the Desktop App, describing the current state as "worse than last days."
4.  **Safety Incident: Accidental Drive Wipe**
    Issue [#11006](https://github.com/openai/codex/issues/11006) details a scenario where Codex executed a command to wipe a drive while trying to delete a backup. The user is requesting stricter "critical command" safety gates (Y/N prompts) for destructive operations.
5.  **Context Compaction Breaking Workflows**
    Users in Issue [#5957](https://github.com/openai/codex/issues/5957) report that auto-compaction causes GPT-5-Codex to forget it is mid-task, leading to incomplete work and hallucinated states.
6.  **Windows Sandbox and ACL Failures**
    Windows users are facing significant friction. Issue [#10601](https://github.com/openai/codex/issues/10601) highlights sandbox setup errors, while [#15179](https://github.com/openai/codex/issues/15179) reports that the Windows Store version crashes due to ACL failures on the `WindowsApps` path.
7.  **TUI Rendering in Zellij/Terminal**
    Long-standing UI bugs persist. Issue [#2558](https://github.com/openai/codex/issues/2558) notes truncated output in Zellij, and [#15416](https://github.com/openai/codex/issues/15416) cites rendering issues in Apple Terminal on macOS Monterey.
8.  **OAuth Failure in Codespaces**
    Issue [#6403](https://github.com/openai/codex/issues/6403) indicates users cannot complete OAuth login when using the extension in `github.dev` or Codespaces environments due to localhost redirect failures.
9.  **Regression in File Permissions**
    Issue [#13117](https://github.com/openai/codex/issues/13117) reports a regression where Codex repeatedly asks for read permissions for the same files, significantly disrupting flow on Windows.
10. **Desktop App Performance (Thread Switching)**
    Users report sluggish UI performance in Issue [#11011](https://github.com/openai/codex/issues/11011), specifically that switching between conversation threads is "super slow."

## 4. Key PR Progress
1.  **Refactoring `codex-exec` Architecture**
    PR [#15424](https://github.com/openai/codex/pull/15424) is a major effort to move `codex-exec` away from legacy state management and onto typed `app-server` APIs. This aims to standardize execution paths and improve stability.
2.  **Legacy Code Cleanup**
    PR [#15414](https://github.com/openai/codex/pull/15414) removes deprecated auth and notification handling from `tui_app_server`, paving the way for a cleaner, unified codebase.
3.  **MacOS JIT Hardening Fix**
    PR [#15409](https://github.com/openai/codex/pull/15409) adds necessary entitlements for hardened MacOS release binaries, fixing a fatal memory allocation crash ("Failed to reserve virtual memory for CodeRange").
4.  **Codex Apps File Remapping**
    PR [#15197](https://github.com/openai/codex/pull/15197) introduces the `apps_file_bridge` feature flag, enabling seamless bridging of local file inputs/outputs to OpenAI file payloads for Apps.
5.  **Plugin Context Management**
    PR [#15372](https://github.com/openai/codex/pull/15372) fixes a bug where explicit plugin mentions were not managing context correctly.
6.  **Plugin UI Differentiation**
    PR [#15279](https://github.com/openai/codex/pull/15279) improves the UI by labeling connectors as `[Plugin]` vs `[App]` and suppressing duplicate entries for plugin-backed apps.
7.  **Slash Command Centralization**
    PR [#14835](https://github.com/openai/codex/pull/14835) centralizes slash command serialization in the TUI, cleaning up invocation and parsing logic.
8.  **Configurable Skill Roots**
    PR [#15394](https://github.com/openai/codex/pull/15394) adds support for `skills.roots` in the configuration, allowing users to specify absolute local skill folders.
9.  **Disabling Skills by Name**
    PR [#15378](https://github.com/openai/codex/pull/15378) adds the ability to disable skills by name, a necessary feature for managing plugin skills whose paths may change.
10. **Guardian Approval Flow Updates**
    PR [#15265](https://github.com/openai/codex/pull/15265) introduces experimental parent-scoped `guardianApprovalReview` events for command execution and file changes, likely related to the safety improvements requested by the community.

## 5. Feature Request Trends
*   **Remote/Container Connectivity:** There is a massive demand for the Desktop App to support remote backends (SSH, DevContainers) to align with modern development workflows.
*   **Safety Guardrails:** Following accidental deletions, users are strongly advocating for "Human-in-the-loop" confirmation dialogs for destructive shell commands (e.g., `rm -rf`, drive wipes).
*   **Context Compaction Control:** Developers want visibility and control over the "compaction" process (summarizing history), requesting features to retain critical context or view the compacted summary.
*   **Workspace-Specific Config:** Requests like [#2554](https://github.com/openai/codex/issues/2554) highlight the need for per-workspace `config.toml` files to manage MCP servers and settings independently of the global config.

## 6. Developer Pain Points
*   **Token Consumption & Limits:** The most active issue of the day involves the extension burning through paid tokens unexpectedly, causing financial and quota concerns for Business/Plus users.
*   **Windows Stability:** Windows users continue to face a distinct set of bugs related to Sandbox permissions, Defender false positives ([#15423](https://github.com/openai/codex/issues/15423)), and UI keybinding conflicts ([#14549](https://github.com/openai/codex/issues/14549)).
*   **Context Amnesia:** The automatic compaction logic is currently too aggressive or opaque, causing the model to "lose the plot" during complex, multi-step refactoring tasks.
*   **OAuth in Browser-Based IDEs:** The inability to authenticate Codex when running in `github.dev` remains a blocker for cloud-based development environments.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-03-22

## 1. Today's Highlights
The Gemini CLI team is aggressively enhancing the **Agentic capabilities** of the tool, with significant work focused on "Spec-Driven Development" (SDD) workflows and persistent task tracking. A new nightly release (**v0.36.0**) introduces critical stability fixes for settings management and local subagent execution. Meanwhile, community discussions are heavily centered on **safety mechanisms** for git operations and the **composability of skills** via the CLI interface.

## 2. Releases
### **v0.36.0-nightly.20260321** ([Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.36.0-nightly.20260321))
This build introduces two significant architectural updates:
*   **Settings Management Fix:** Resolved a stale closure bug in `onModelChange` that caused data loss; settings are now lazily loaded.
*   **Subagent Architecture:** Initial support for subagent local execution and tool isolation, likely paving the way for the multi-agent systems discussed in recent issues.

## 3. Hot Issues
1.  **Safety Rails for Git Operations** ([#23411](https://github.com/google-gemini/gemini-cli/issues/23411))
    A user reported that the CLI executed a destructive `git reset --hard` and `git push --force`, deleting history. The community is calling for built-in protections that force the AI to ask for permission before executing dangerous Git commands.
2.  **Invoking Agent Skills via Slash Commands** ([#21760](https://github.com/google-gemini/gemini-cli/issues/21760))
    A highly requested feature to invoke "Agent Skills" directly using `/<skill-name>` syntax with optional arguments. This aims to make the CLI more composable and scriptable.
3.  **Context-Aware Policy Approvals** ([#23245](https://github.com/google-gemini/gemini-cli/issues/23245))
    Maintainers are discussing a refactor of the "Allow for all future sessions" feature. Currently, global approvals can undermine the safety of "Plan Mode," requiring a context-aware permission system.
4.  **Improvements to `/plan` Command** ([#22855](https://github.com/google-gemini/gemini-cli/issues/22855))
    Users want `/plan` to accept text input directly (e.g., `/plan refactor auth module`) rather than opening a separate UI box. This streamlines the planning workflow into a single action.
5.  **Investigation into AST-Aware Tools** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))
    An Epic is tracking the potential integration of AST (Abstract Syntax Tree) aware file reading. This would allow the AI to understand code structure (method bounds) natively, reducing token noise and misaligned reads.
6.  **Memory Routing: Global vs. Project** ([#22819](https://github.com/google-gemini/gemini-cli/issues/22819))
    Work is ongoing to teach the memory subagent where to store data—distinguishing between user preferences (Global `~/.gemini/`) and codebase-specific context (Project `.gemini/`).
7.  **SDD Tasks Integration** ([#23320](https://github.com/google-gemini/gemini-cli/issues/23320))
    Part of the "SDD Phase 3," this issue tracks the move from linear Markdown checklists to a persistent, file-based task tracking system (DAG) within the CLI.
8.  **Model Switching Failure on Plan Exit** ([#23230](https://github.com/google-gemini/gemini-cli/issues/23230))
    A bug where the CLI fails to switch from the planning model to the execution model (e.g., `gemini-3-flash-preview`) immediately after a plan is confirmed.
9.  **Documentation Confusion: `SYSTEM.md` vs `system.md`** ([#23410](https://github.com/google-gemini/gemini-cli/issues/23410))
    Feedback regarding the external documentation site (GeminiCLI.com) shows user confusion regarding case sensitivity for system prompt files.
10. **`/chat` Autocomplete Bug** ([#23406](https://github.com/google-gemini/gemini-cli/issues/23406))
    A usability bug where tab-completion for `/chat` commands suggests incorrect syntax, blocking the user from easily saving/sharing chats.

## 4. Key PR Progress
1.  **Voice Input Support** ([PR #18499](https://github.com/google-gemini/gemini-cli/pull/18499))
    A major "help wanted" PR adding native voice input with a pluggable backend (Gemini zero-install vs. local Whisper).
2.  **ACP Restore Command Coverage** ([PR #23400](https://github.com/google-gemini/gemini-cli/pull/23400))
    Adds unit tests for the `RestoreCommand` and `ListCheckpointsCommand`, improving reliability for session checkpointing.
3.  **Auto-Remove Gemini Worktrees** ([PR #23409](https://github.com/google-gemini/gemini-cli/pull/23409))
    Implements cleanup logic to automatically remove managed git worktrees on exit, preventing workspace clutter.
4.  **Chat Compression Context Fix** ([PR #23405](https://github.com/google-gemini/gemini-cli/pull/23405))
    Fixes a critical bug where chat compression returned incomplete history, causing the model to lose the system context.
5.  **API Error Message Decoding** ([PR #23283](https://github.com/google-gemini/gemini-cli/pull/23283))
    Fixes a P1 issue where API errors were displayed as raw byte arrays (e.g., `91,123...`) instead of human-readable text.
6.  **Recording Skill Activations in History** ([PR #23203](https://github.com/google-gemini/gemini-cli/pull/23203))
    Ensures that skills triggered by slash commands are logged in `GeminiChat` history so the model remembers active skills in subsequent turns.
7.  **Fixing `web_fetch` Approvals** ([PR #23295](https://github.com/google-gemini/gemini-cli/pull/23295))
    (Closed/Merged) Fixed a regression where session-wide approvals for the `web_fetch` tool were ignored.
8.  **UI Redesign for Compression** ([PR #23064](https://github.com/google-gemini/gemini-cli/pull/23064))
    Revamps the context compression UI to be less intrusive, using subtle styling and forced auto-compression on overflow.
9.  **Configurable PTY Backend** ([PR #21394](https://github.com/google-gemini/gemini-cli/pull/21394))
    Introduces a fallback backend for PTY (pseudo-terminal) handling to support environments where N-API addons fail (e.g., Musl/Alpine Linux).
10. **ACP Tool Output Refactoring** ([PR #23179](https://github.com/google-gemini/gemini-cli/pull/23179))
    Separates conversational text from executable commands in the ACP (Agent Communication Protocol) tool output to improve clarity and handling of large payloads.

## 5. Feature Request Trends
*   **Agentic Workflows (SDD):** There is a massive push towards "Spec-Driven Development," involving persistent tasks, memory routing, and conductor/subagent architectures.
*   **Native Code Intelligence:** Users and maintainers are moving toward AST-aware tools to replace regex-based file reading, aiming for deeper code understanding with fewer tokens.
*   **Interactive Safety:** A clear trend requesting "guardrails" where the AI must ask for permission before executing destructive filesystem or Git operations.

## 6. Developer Pain Points
*   **Destructive Defaults:** Developers are frustrated that the CLI defaults to executing destructive commands (`git reset --hard`) without confirmation.
*   **State Retention:** Several bugs relate to the CLI losing context (history compression bugs) or failing to switch states (model switching after planning).
*   **Sandboxing Quirks:** Users report that `system.md` files are ignored when running in sandbox mode, breaking custom instruction workflows.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-03-22

## 1. Today's Highlights
No new releases were published in the last 24 hours. The community focus remains on stability, with significant attention drawn to **Issue #1202** regarding screen flickering on Windows and **Issue #1532** concerning infinite loops in Autopilot mode that are depleting premium request quotas. Several newer issues highlight growing pains with model availability and cross-platform consistency.

## 2. Releases
*No new releases recorded in the last 24 hours.*

## 3. Hot Issues

1.  **[#1202 Screen flickers with cursor blink (Windows/PowerShell)](https://github.com/github/copilot-cli/issues/1202)**
    *   **Why it matters:** This is a high-engagement issue (37 upvotes) affecting core usability for Windows users. The terminal UI is essentially flashing/artifacting during interactions, making the tool difficult to use in PowerShell.
2.  **[#1532 Autopilot mode infinite loop consumes premium requests](https://github.com/github/copilot-cli/issues/1532)**
    *   **Why it matters:** A critical cost concern. Users report that when the `task_complete` tool fails, the agent enters an infinite loop, rapidly consuming paid API quotas (up to 20% of monthly usage) before manual intervention is possible.
3.  **[#2143 Text selection copy (Ctrl+C) captures only first character](https://github.com/github/copilot-cli/issues/2143)**
    *   **Why it matters:** A severe regression in the terminal interface. Users cannot copy multi-character code snippets or outputs from the CLI, breaking a fundamental workflow.
4.  **[#2082 Ctrl+Shift+C shortcut broken on Linux](https://github.com/github/copilot-cli/issues/2082)**
    *   **Why it matters:** Standard Linux terminal copy shortcuts are being hijacked or ignored by the CLI environment, forcing users to use context menus or alternative keybinds.
5.  **[#2099 "Claude Sonnet 4.5" model availability warnings](https://github.com/github/copilot-cli/issues/2099)**
    *   **Why it matters:** Configuration drift between the CLI and backend. Users specifying newer Claude models (4.5/4.6) in agent definitions receive warnings that they are unavailable, despite subscriptions supporting them.
6.  **[#2045 Claude models missing from CLI selection](https://github.com/github/copilot-cli/issues/2045)**
    *   **Why it matters:** Parity issue. Users can select Claude models in VS Code Copilot but find them missing from the CLI model picker, limiting choice for terminal-based workflows.
7.  **[#2142 onSessionStart hook return value ignored](https://github.com/github/copilot-cli/issues/2142)**
    *   **Why it matters:** A break in the extensibility contract. The SDK documentation states `additionalContext` should be accepted, but the CLI silently ignores it, preventing dynamic context injection at startup.
8.  **[#1979 Feature Request: Remote session support (Mobile/Browser)](https://github.com/github/copilot-cli/issues/1979)**
    *   **Why it matters:** High-demand feature (+15 upvotes). Users want the ability to attach to a running CLI session from a browser or mobile device, similar to competitors' remote code features.
9.  **[#2161 Personal skills not loaded inside repositories](https://github.com/github/copilot-cli/issues/2161)**
    *   **Why it matters:** Scope isolation bug. Global/personal skills defined in `~/.agents` disappear when working inside a git repository, forcing users to duplicate configuration locally.
10. **[#2189 Transient API errors with Claude Opus 4.6](https://github.com/github/copilot-cli/issues/2189)**
    *   **Why it matters:** Instability when using high-tier models for file operations (writing plans/docs), causing retries that interrupt workflow.

## 4. Key PR Progress
*No Pull Requests were updated in the last 24 hours.*

## 5. Feature Request Trends
*   **Remote & Mobile Access:** Following the industry trend set by tools like Claude Code, there is strong demand for decoupling the CLI session from the local terminal to allow remote attachment (Issue #1979).
*   **Enhanced Autopilot Control:** Users want finer control over autonomy, specifically the ability to switch into autopilot mode mid-task (Issue #2203) and better management/cleanup of idle background tasks (Issue #2206).
*   **Better Skill Management:** Requests for a `/create-skill` command (Issue #2185) to match VS Code capabilities, and better scoping for personal vs. repository skills.

## 6. Developer Pain Points
*   **UI/UX Regressions:** A significant cluster of issues relates to the Terminal UI (TUI) interfering with standard OS behaviors—specifically copy/paste functionality on both Linux (#2082, #2143) and rendering artifacts on Windows (#1202).
*   **Model Parity Confusion:** Developers are frustrated by the inconsistent availability of models (specifically Claude variants) between VS Code and the CLI (#2045, #2099), leading to configuration errors.
*   **Cost Control:** The infinite loop bug (#1532) highlights a broader anxiety about premium token consumption; developers are asking for better "circuit breakers" to prevent bugs from draining paid quotas.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-03-22

## 1. Today's Highlights
Community activity remains focused on configuration flexibility and user control. A significant portion of the discussion revolves around the need for **project-level configurations** for MCP and subagents, moving away from purely global settings. Additionally, transparency and security have been flagged, with users requesting better visibility into shell commands executed by the agent.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues

*   **[OPEN] [bug] Windows 安装脚本在默认 PowerShell 执行策略下闪退且无错误提示**
    *   **Author:** Must77
    *   **Why it matters:** A critical blocker for new Windows users. The installation script fails silently under default PowerShell security policies, preventing adoption on standard Windows 10/11 environments.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1513](https://github.com/MoonshotAI/kimi-cli/issues/1513)

*   **[OPEN] [Feature Request] MCP/Skill Tool Usage Priority Configuration**
    *   **Author:** zhang-xzh
    *   **Why it matters:** As agents integrate multiple tools with overlapping capabilities, the lack of a standardized precedence mechanism creates ambiguity. This issue proposes a way to define which tool the agent should prioritize.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1537](https://github.com/MoonshotAI/kimi-cli/issues/1537)

*   **[OPEN] Security issue: kimi needs to print full commands**
    *   **Author:** xenoterracide
    *   **Why it matters:** Raises a valid security concern regarding opacity. The user argues that the CLI obscures full shell commands (e.g., truncating output with `head`), making it difficult for developers to audit exactly what the agent is doing to their system.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1539](https://github.com/MoonshotAI/kimi-cli/issues/1539)

*   **[OPEN] [enhancement] 项目级别的配置 || Project-level configuration**
    *   **Author:** cnzys
    *   **Why it matters:** High demand (+3 votes). Users want `kimi-cli` to automatically recognize configuration files (like MCP settings) from the current project directory rather than relying solely on global config or manual flags.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1365](https://github.com/MoonshotAI/kimi-cli/issues/1365)

*   **[OPEN] Feature Request: Add /title command**
    *   **Author:** APairOfClaws
    *   **Why it matters:** Addresses session management. Users currently cannot manually rename session titles, which makes organizing complex, multi-topic conversations difficult.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1536](https://github.com/MoonshotAI/kimi-cli/issues/1536)

*   **[OPEN] [bug] 100% usage but can still use**
    *   **Author:** rt974
    *   **Why it matters:** A potential bug in quota management. The user reports that the model continues to function even after usage limits ostensibly reach 100%.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1535](https://github.com/MoonshotAI/kimi-cli/issues/1535)

*   **[OPEN] [bug] 处于plan模式，但输出“已经不在plan mode了”**
    *   **Author:** dyzn1212
    *   **Why it matters:** A logic state desynchronization where the UI or system state believes it is in plan mode, but the internal logic rejects it, disrupting workflow planning.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1476](https://github.com/MoonshotAI/kimi-cli/issues/1476)

*   **[CLOSED] [bug] Enter key appends `[13u` in VS Code terminal**
    *   **Author:** Mtrya
    *   **Why it matters:** A specific terminal encoding issue affecting Arch Linux users in VS Code. Resolved/Closed, but notable for those using integrated terminals.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1437](https://github.com/MoonshotAI/kimi-cli/issues/1437)

## 4. Key PR Progress

*   **[OPEN] feat(shell): stream thinking content to terminal in real-time**
    *   **Author:** FuryMartin
    *   **Description:** This PR introduces a feature to stream the model's "thinking" process (internal reasoning) directly to the terminal in real-time. This enhances transparency and allows developers to see the agent's logic as it formulates a response.
    *   **Link:** [MoonshotAI/kimi-cli PR #1538](https://github.com/MoonshotAI/kimi-cli/pull/1538)

## 5. Feature Request Trends

1.  **Contextual & Local Configuration:** A strong push for **Project-level configuration**. Developers are moving away from monolithic global settings and want the CLI to detect local `.kimi` or MCP config files automatically, ensuring better portability and project isolation.
2.  **Agent Transparency & Control:** Users want to see exactly what the agent is doing. This includes requests for **full command logging** (opposing truncated shell output) and **real-time thinking streams** to build trust in the agent's decision-making process.
3.  **Session Management:** Requests for more granular control over the UI/UX, specifically the ability to **manually rename sessions/titles** rather than relying on auto-generation.

## 6. Developer Pain Points

*   **Windows Onboarding Friction:** The default PowerShell execution policy causes the installation script to crash silently. This is a significant barrier to entry for a large segment of the developer population.
*   **Tool Collision:** As the ecosystem of MCP servers and Skills grows, developers are frustrated by the lack of **conflict resolution**. When two tools can do the same job, there is currently no standard way to tell the CLI which one to prefer.
*   **Obscured Actions:** Advanced users are frustrated by the "black box" nature of shell execution where commands are hidden or truncated (`2>/dev/null | head -5`). This makes debugging agent failures difficult and raises security concerns.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-22

## Today's Highlights

The OpenCode community is buzzing with **authentication issues** as multiple users report Anthropic OAuth login failures hitting `429 Too Many Requests` errors. The **background sub-agent feature PR** (#13261) continues to gain traction as a potential solution to the synchronous blocking problem, while **context window management** remains a hot topic with debates around compaction thresholds and 1M context window support. A significant **privacy concern** regarding session title computation has resurfaced, reminding users to review network configurations.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#18267](https://github.com/anomalyco/opencode/issues/18267) — **Claude OAuth broken (429 errors)** | 130+ comments, 60 👍. Users are completely locked out of Claude Pro/Max via OAuth. Widespread frustration with login failures blocking development workflows. |
| 2 | [#18329](https://github.com/anomalyco/opencode/issues/18329) — **Anthropic OAuth 429 on token exchange** | 48 👍. Technical deep-dive confirming the OAuth code exchange step fails with 429 from Anthropic's console API. Critical for anyone using Claude Pro/Max subscriptions. |
| 3 | [#10416](https://github.com/anomalyco/opencode/issues/10416) — **OpenCode not private by default?** | 51 comments. User discovered session titles are computed externally, revealed via nftables firewall rules. Raises trust and privacy architecture questions. |
| 4 | [#5887](https://github.com/anomalyco/opencode/issues/5887) — **True Async/Background Sub-Agent Delegation** | 54 👍. High-demand feature request for fire-and-forget sub-agents that don't block the primary workflow. Would enable parallel task execution. |
| 5 | [#6231](https://github.com/anomalyco/opencode/issues/6231) — **Auto-discover models from OpenAI-compatible endpoints** | 59 👍. Tedious manual configuration for LM Studio, Ollama, llama.cpp users. Auto-discovery would dramatically improve local provider UX. |
| 6 | [#16351](https://github.com/anomalyco/opencode/issues/16351) — **TUI broken in tmux** (CLOSED) | Root cause identified and solved in v1.2.25. Good reference for terminal compatibility issues with grey box rendering and keyboard shortcuts. |
| 7 | [#15871](https://github.com/anomalyco/opencode/issues/15871) — **Auto-compaction at 200k instead of 1M context** | When `context1m: true` is enabled, compaction still triggers at hardcoded 200k threshold. Wasted context capacity for Opus 4.6/Sonnet 4.6 users. |
| 8 | [#13838](https://github.com/anomalyco/opencode/issues/13838) — **Compaction injects fake "What did we do so far?"** | Synthetic message injection causes unwanted summary generation, affecting conversation continuity and token usage. |
| 9 | [#11314](https://github.com/anomalyco/opencode/issues/11314) — **Configurable Context Compaction Threshold** | 13 👍. Request to make the hardcoded 75% compaction threshold user-configurable. High priority category per submitter. |
| 10 | [#6845](https://github.com/anomalyco/opencode/issues/6845) — **169GB snapshot folder** | NixOS user discovered `~/.local/share/opencode` consuming massive disk space. Critical for long-running sessions and disk-constrained environments. |

---

## Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | [#13261](https://github.com/anomalyco/opencode/pull/13261) — **Support background subagents** | Implements async/fire-and-forget sub-agent delegation. Addresses long-standing request (#5887) for non-blocking parallel task execution. |
| 2 | [#15785](https://github.com/anomalyco/opencode/pull/15785) — **GitHub PR integration** | Adds first-class GitHub Pull Request support to web and desktop apps, enabling PR workflows without leaving OpenCode. |
| 3 | [#17670](https://github.com/anomalyco/opencode/pull/17670) — **Dynamic model discovery for local providers** | Auto-populates model lists from OpenAI-compatible providers (LM Studio, llama.cpp) via `/models` API. Closes #6231. |
| 4 | [#14743](https://github.com/anomalyco/opencode/pull/14743) — **Improve Anthropic prompt cache hit rate** | Fixes cross-repo and cross-session cache misses with system prompt split and tool definition stability. Cost optimization for heavy users. |
| 5 | [#16751](https://github.com/anomalyco/opencode/pull/16751) — **Fix tool_use/tool_result mismatch** | Addresses root causes of message reconstruction bugs that cause API rejections and conversation corruption. |
| 6 | [#18539](https://github.com/anomalyco/opencode/pull/18539) — **Discourage _noop tool call during LiteLLM compaction** | Prevents LiteLLM/Bedrock request rejections when compaction runs with no active tools. |
| 7 | [#18445](https://github.com/anomalyco/opencode/pull/18445) — **Account for OpenRouter cache write tokens** | Fixes cost underestimation when OpenRouter reports cache write tokens in prompt details. |
| 8 | [#18516](https://github.com/anomalyco/opencode/pull/18516) — **Fix experimental plan mode issues** | Prevents subagent plan escape, shows plan in exit prompt, renders as markdown. |
| 9 | [#17083](https://github.com/anomalyco/opencode/pull/17083) — **Flush stdin on POSIX exit** | Prevents stale terminal bytes from leaking to parent shell after exit (e.g., accidental command execution). |
| 10 | [#18553](https://github.com/anomalyco/opencode/pull/18553) — **Fix listSessions ACP scope** | Ensures `unstable_listSessions` returns only current project sessions, not all projects. |

---

## Feature Request Trends

1. **Async/Background Operations** — Strong demand for non-blocking sub-agent delegation, parallel task execution, and fire-and-forget workflows (#5887, #13261).

2. **Local Provider UX Improvements** — Auto-discovery of models from LM Studio, Ollama, llama.cpp endpoints (#6231, #17670).

3. **Context Window Control** — Configurable compaction thresholds, proper 1M context support, user-controlled memory management (#11314, #15871, #4317).

4. **Privacy & Transparency** — Clearer documentation of external network calls, local-only operation modes (#10416).

5. **Deno Runtime Exploration** — Discussion of Deno 2.x as alternative/complement to Bun for security and permission model benefits (#13819).

---

## Developer Pain Points

| Category | Summary |
|----------|---------|
| **Authentication Reliability** | OAuth 429 errors are blocking Claude Pro/Max users entirely. This is a workflow-stopper with no clear workaround. |
| **Context Management Opacity** | Hardcoded thresholds, unexpected compaction triggers, and fake message injection make context behavior unpredictable. |
| **Resource Consumption** | Reports of 6GB+ memory on Windows and 169GB snapshot folders indicate aggressive disk/memory usage without cleanup. |
| **TUI/Platform Quirks** | Terminal compatibility issues in tmux, Windows Git Bash permission enforcement gaps, and visual bugs persist across platforms. |
| **Privacy Uncertainty** | External network calls for features like session titling surprise users expecting local-only operation. |

---

*Digest generated from GitHub activity on 2026-03-22. Data source: [anomalyco/opencode](https://github.com/anomalyco/opencode)*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-03-22

## 1. Today's Highlights
The community sees a surge in architectural improvements with a massive batch of feature proposals and PRs ported from Google's Gemini CLI, focusing on performance, context management, and agentic resilience. A new **v0.13.0-nightly** build was released, introducing system prompt customization and fixing OpenRouter pipeline issues. Key discussions center on optimizing context window usage through parallel tool execution and dynamic truncation strategies.

## 2. Releases
### **v0.13.0-nightly.20260321.38caa0b21**
- **System Prompt Customization:** Added options for users to define custom system prompts.
- **Pipeline Fixes:** Resolved duplicate `finish_reason` chunks when using OpenRouter.
- **Repo:** [Release v0.13.0-nightly.20260321.38caa0b21](https://github.com/QwenLM/qwen-code/releases/tag/v0.13.0-nightly.20260321.38caa0b21)

## 3. Hot Issues
1.  **[Core] OOM in Long Sessions ([#2562](https://github.com/QwenLM/qwen-code/issues/2562)):**
    Critical performance issue where `structuredClone` on history causes Out-of-Memory crashes during long agentic sessions.
2.  **[Bug] `exit_plan_mode` Failure in YOLO Mode ([#2522](https://github.com/QwenLM/qwen-code/issues/2522)):**
    The agent fails to exit planning mode in YOLO mode, incorrectly believing the user rejected the plan.
3.  **[Feature] Parallel Read-Only Tool Calls ([#2563](https://github.com/QwenLM/qwen-code/issues/2563)):**
    Proposal to execute contiguous read-only operations (file reads, searches) in parallel to reduce latency.
4.  **[Feature] Batch File Reading ([#2574](https://github.com/QwenLM/qwen-code/issues/2574)):**
    Request for a `read_many_files` tool to read multiple files via glob patterns in a single call.
5.  **[UX] Vim Mode Navigation ([#2561](https://github.com/QwenLM/qwen-code/issues/2561)):**
    Vim users request `Ctrl+p` / `Ctrl+n` support for navigating autocomplete menus instead of arrow keys.
6.  **[Core] Context Budget Trimming ([#2565](https://github.com/QwenLM/qwen-code/issues/2565)):**
    Feature request to trim tool results *before* sending requests to models with strict context limits (e.g., Claude 200K) to prevent hard API failures.
7.  **[Safety] Omission Placeholder Detector ([#2575](https://github.com/QwenLM/qwen-code/issues/2575)):**
    Proposal to block lazy model outputs (e.g., `(rest of code...)`) in edit tools to prevent accidental code deletion.
8.  **[Error Handling] Transient Network Retries ([#2577](https://github.com/QwenLM/qwen-code/issues/2577)):**
    Request for robust retry logic for SSL/TLS and network-level errors (ECONNRESET, ETIMEDOUT) which currently cause immediate failures.
9.  **[Skills] Global Skills File Access ([#2543](https://github.com/QwenLM/qwen-code/issues/2543)):**
    Global skills stored in `~/.qwen/skills/` cannot read local documentation files due to workspace restrictions.
10. **[Docs] Comparison Guide Request ([#2560](https://github.com/QwenLM/qwen-code/issues/2560)):**
    New users are requesting a dedicated guide comparing Qwen Code with other AI coding assistants.

## 4. Key PR Progress
1.  **[Fix] Resolve `exit_plan_mode` YOLO Bug ([#2586](https://github.com/QwenLM/qwen-code/pull/2586)):**
    Fixes the logic flow where YOLO mode failed to automatically approve plan execution.
2.  **[Feat] Add `read_many_files` Tool ([#2580](https://github.com/QwenLM/qwen-code/pull/2580)):**
    Implements batch file reading to reduce tool call overhead by 5-10x in large codebases.
3.  **[Fix] Replace `structuredClone` to Prevent OOM ([#2568](https://github.com/QwenLM/qwen-code/pull/2568)):**
    Swaps deep copy for shallow copy in history management to resolve memory pressure.
4.  **[Feat] Parallelize Read-Only Tools ([#2569](https://github.com/QwenLM/qwen-code/pull/2569)):**
    Enables `Promise.all` batching for safe, concurrent execution of read-only operations.
5.  **[Feat] Dynamic Tool Output Truncation ([#2572](https://github.com/QwenLM/qwen-code/pull/2572)):**
    Raises truncation limits and implements context-pressure scaling to keep relevant data longer.
6.  **[Feat] Tool Output Masking Service ([#2573](https://github.com/QwenLM/qwen-code/pull/2573)):**
    Introduces a service to replace old bulky tool outputs with snippets to reclaim context space.
7.  **[Feat] Subagent Tool Rejection Feedback ([#2584](https://github.com/QwenLM/qwen-code/pull/2584)):**
    Improves subagent error messages to list available tools, allowing the model to self-correct.
8.  **[Feat] Network Error Retry Logic ([#2583](https://github.com/QwenLM/qwen-code/pull/2583)):**
    Adds detection and retry logic for 11 specific network/SSL error codes.
9.  **[Feat] Shell Interaction Tools ([#2556](https://github.com/QwenLM/qwen-code/pull/2556)):**
    Adds `shell_kill`, `shell_input`, and `shell_output` tools for managing background processes.
10. **[Feat] Pre-flight Context Trimming ([#2571](https://github.com/QwenLM/qwen-code/pull/2571)):**
    Implements client-side context budget estimation to prevent API rejection errors on Anthropic/OpenAI models.

## 5. Feature Request Trends
*   **Context Window Optimization:** A dominant trend involves strategies to manage limited context windows, including dynamic truncation, masking old outputs, and pre-flight budget estimation.
*   **Performance & Concurrency:** Strong demand for parallel execution of independent tasks and batch file operations to speed up agent loops.
*   **Robustness & Reliability:** Requests focus on "hardening" the agent against network failures, lazy model outputs (omission placeholders), and subagent confusion.
*   **User Experience (Vim/Comparison):** Niche UX improvements for Vim users and better onboarding documentation for newcomers comparing tools.

## 6. Developer Pain Points
*   **Context Limit Crashes:** Developers working on large codebases or long sessions frequently encounter OOM errors or API rejections due to exploding context size.
*   **Workflow Interruptions:** Bugs in specific modes (like YOLO/Plan mode) force developers to manually intervene, breaking the automation flow.
*   **Tool Granularity:** The current need to call `read_file` repeatedly for multi-file analysis is seen as inefficient and latency-inducing.
*   **Strict Security Scoping:** The workspace sandbox is currently too restrictive for "Global Skills," preventing them from reading associated local files.

</details>