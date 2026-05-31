# AI CLI Tools Community Digest 2026-06-01

> Generated: 2026-05-31 22:17 UTC | Tools covered: 9

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

# AI Developer Tools Ecosystem Cross-Tool Analysis — 2026-06-01

## 1. Ecosystem Overview
The AI CLI tools landscape is currently characterized by aggressive feature expansion into multi-agent orchestration, often outpacing foundational stability. Major players like Anthropic, OpenAI, Google, and GitHub are competing to deliver autonomous coding workflows, while challenger tools focus on multi-provider flexibility and open-source extensibility. The overarching theme across all communities is a collective struggle to manage token consumption, API rate limits, and context window compaction without breaking the user experience.

## 2. Activity Comparison

*Note: Issue and PR counts reflect high-signal activity highlighted in the 2026-06-01 community digests.*

| Tool | Vendor / Origin | Issues Reported/Active | Active PRs (24h) | Release Status (24h) |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | Anthropic | 10+ critical/widespread | 0 | v2.1.159 (Internal infra only) |
| **OpenAI Codex** | OpenAI | 10 high-visibility | 10 | rust-v0.136.0-alpha.2 |
| **Gemini CLI** | Google | 10 critical/p1 | 10 | None |
| **GitHub Copilot CLI** | GitHub | 10 trending | 0 | v1.0.57-4 |
| **Kimi Code CLI** | MoonshotAI | 10 reported | 2 | None |
| **OpenCode** | Anomaly / OSS | 10 trending | 10 | v1.15.13 |
| **Pi** | Earendil / OSS | 10 high-priority | 10 | None |
| **Qwen Code** | QwenLM | 10 trending | 10 | v0.17.0-nightly |
| **DeepSeek TUI** | CodeWhale | 10 trending | 10 | v0.8.48 (Rebranded) |

## 3. Shared Feature Directions
*   **Multi-Agent Orchestration & Autonomy:** There is a universal push toward parallel sub-agent execution and autonomous goal completion. *Claude Code* (Workflows/Agent Teams), *OpenAI Codex* (multi-agent runtime locking), *Gemini CLI* (asynchronous subagents), and *Kimi Code* (`/goal` command) are all actively developing this, though developers are warning that it is currently prone to infinite loops and token waste.
*   **Local & Multi-Provider Model Support:** Avoiding vendor lock-in is a major community demand. *OpenCode* and *DeepSeek TUI (CodeWhale)* are heavily focused on Ollama integration for local models (Gemma, Qwen). *Pi* is expanding adapter layers for Vertex AI and OpenRouter, while *Qwen Code* and *Kimi Code* are pushing for standardized OpenAI-compatible API surfaces.
*   **Resilient Context & Compaction:** Managing massive context windows without breaking the session is a shared pain point. *OpenAI Codex*, *Gemini CLI*, and *Pi* are all battling remote compaction failures and token overflow errors, leading to a trend of implementing memory diagnostics, OTel tracing, and auto-dump features before OOM kills.
*   **Advanced Permission & Safety Guardrails:** As tools become more autonomous, developers are demanding "YOLO/AutoPilot" modes that still allow step-by-step approval. *GitHub Copilot CLI* (AutoPilot approvals), *Qwen Code* (hardened self-modification checks), and *DeepSeek TUI* (typed persistent permission rules) reflect this shared need for safe boundaries.
*   **Desktop-to-CLI Parity:** Users expect seamless transitions between IDEs and terminals. *OpenAI Codex* (CLI/Desktop history sync) and *OpenCode* (MCP Desktop sidecar fixes) are actively addressing state and configuration leaks between different host environments.

## 4. Differentiation Analysis
*   **Enterprise Control & Infrastructure:** **OpenAI Codex** and **Qwen Code** are distinguishing themselves by building out enterprise-grade cloud-managed configurations, telemetry isolation, and credit visibility, targeting corporate IT deployment.
*   **Extensibility & Open Architecture:** **Pi**, **OpenCode**, and **DeepSeek TUI** are targeting power-users and hackers. Pi is building an extension ecosystem with custom fetch hooks and worktree isolation; OpenCode is focused on dynamic local workflows; DeepSeek TUI is pushing the boundaries of TUI customization and Rust-based performance.
*   **The "Agentic" Tradeoff:** **Claude Code** and **Gemini CLI** are differentiating by pushing the limits of autonomous task execution. However, both are currently paying a tax on this approach: Claude Code's community is sounding alarms over catastrophic token waste and data loss, while Gemini CLI is fighting infinite CLI hangs.
*   **Integrated Ecosystem Lock-in:** **GitHub Copilot CLI** remains uniquely positioned to leverage the GitHub/VS Code ecosystem, differentiating via IDE features like `tmux` compatibility and interactive diff UI, though it shares the same underlying LLM struggles as other tools.

## 5. Community Momentum & Maturity
*   **Rapid Iteration & High Noise (Maturity Phase: Turbulent Growth):** *Claude Code* and *OpenAI Codex* have the largest, most vocal communities. However, both are currently suffering from severe user friction (e.g., 592+ comments on Codex's token burn issue, massive alert status in Claude Code). Their velocity is high, but release confidence is currently low.
*   **High Velocity, Stability-Focused (Maturity Phase: Hardening):** *Gemini CLI* and *Pi* show massive momentum in PR activity specifically targeted at squashing bugs (PTY leaks, provider timeouts). *Qwen Code* is also moving fast but heavily focused on CI/CD and daemon observability.
*   **Niche/Adoption Phase (Maturity Phase: Expanding):** *Kimi Code* and *DeepSeek TUI* are iterating rapidly on localizations, API compatibility, and user onboarding (e.g., CodeWhale's recent rebrand).

## 6. Trend Signals (Industry Reference Value)
1.  **The "Token Bleed" Crisis:** The most critical signal for technical decision-makers is the sheer volume of reports regarding runaway token consumption across nearly all platforms. Multi-agent workflows are currently highly inefficient. Teams should monitor costs rigidly and enforce `max_turns` and retry caps before deploying AI CLIs to large engineering orgs.
2.  **Silent Failures Demand Better Observability:** A dangerous trend where models fabricate data, silently drop tool calls, or fail to read files without throwing errors (noted heavily in Claude Code and OpenCode). Developer tooling teams must implement external validation logic rather than blindly trusting model output.
3.  **The Shift to Protocol Standardization:** The ecosystem is converging on standard protocols. MCP (Model Context Protocol) compatibility is no longer a nice-to-have but a baseline expectation, with communities demanding better lifecycle management. Similarly, OpenAI-compatible API formats are expected for local/inference providers.
4.  **Cross-Platform Terminal Quirks:** As these tools mature, Windows/WSL compatibility remains a persistent afterthought. Authentication bugs, hardcoded shells (`cmd.exe`), and locale/encoding character drops are significant friction points for global, cross-platform engineering teams.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-06-01 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

Based on sustained community attention, longevity, and functional impact, here are the most prominent Skills currently in the pipeline:

1. **[ODT — OpenDocument Creation & Conversion](https://github.com/anthropics/skills/pull/486)** *(OPEN)*
   - **Functionality:** Enables Claude to create, fill, read, and convert OpenDocument files (.odt, .ods), covering the ISO-standard open-source document format.
   - **Discussion Highlights:** Longest active lifespan (Mar 1 – Apr 14), indicating complex review cycles and strong demand for non-proprietary document output. Zero resolving duplicates, suggesting a clear niche.
   - **Status:** Open.

2. **[Document Typography Quality Control](https://github.com/anthropics/skills/pull/514)** *(OPEN)*
   - **Functionality:** Prevents common typographic issues in AI-generated documents—specifically orphan word wraps, widow paragraphs, and numbering misalignment.
   - **Discussion Highlights:** Positioned as universally applicable ("affects every document Claude generates"), framing it as a foundational quality layer rather than a niche feature.
   - **Status:** Open.

3. **[Frontend Design Skill Refactor](https://github.com/anthropics/skills/pull/210)** *(OPEN)*
   - **Functionality:** Revises the `frontend-design` skill for better clarity, actionability, and internal coherence, ensuring instructions are executable in a single conversation.
   - **Discussion Highlights:** Active since Jan 5, one of the longest-lived PRs. Focuses on meta-quality: making an existing skill actually usable, not just adding new ones.
   - **Status:** Open.

4. **[Skill Quality Analyzer & Security Analyzer](https://github.com/anthropics/skills/pull/83)** *(OPEN)*
   - **Functionality:** Introduces two "meta-skills" for the marketplace: one evaluates skill quality across five dimensions (documentation, examples, structure, etc.), the other performs security analysis.
   - **Discussion Highlights:** Early entry (Nov 2025) that anticipates skill-ecosystem maturity—tools to govern the tools.
   - **Status:** Open.

5. **[ServiceNow Platform Skill](https://github.com/anthropics/skills/pull/568)** *(OPEN)*
   - **Functionality:** Broad ServiceNow assistant covering ITSM, ITOM, ITAM, SAM Pro, FSM, HRSD, CSM, SPM/PPM, Vulnerability Response, SecOps, and IntegrationHub.
   - **Discussion Highlights:** Represents enterprise demand—ServiceNow is a major IT operations platform, and a single comprehensive skill is highly requested by professionals.
   - **Status:** Open.

6. **[Testing Patterns Skill](https://github.com/anthropics/skills/pull/723)** *(OPEN)*
   - **Functionality:** Full-stack testing philosophy (Testing Trophy model), unit testing, React component testing, and broader testing patterns.
   - **Discussion Highlights:** Directly addresses a gap in code-quality assistance; structured guidance rather than ad-hoc test generation.
   - **Status:** Open.

7. **[AURELION Cognitive & Memory Framework](https://github.com/anthropics/skills/pull/444)** *(OPEN)*
   - **Functionality:** Four-skill suite providing a 5-floor cognitive framework, advisory system, agent management, and persistent memory for structured knowledge work.
   - **Discussion Highlights:** Active through May 2026; represents the "agent infrastructure" trend—giving Claude structured cognition, not just task execution.
   - **Status:** Open.

---

## 2. Community Demand Trends

From the highest-engagement Issues, several clear demand vectors emerge:

| Trend | Evidence | Signal Strength |
|-------|----------|----------------|
| **Org-wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (13 comments, 7 👍) — Users need shared skill libraries, not individual file uploads | 🔴 High |
| **Windows Compatibility** | [#556](https://github.com/anthropics/skills/issues/556) (9 comments), PRs [#1050](https://github.com/anthropics/skills/pull/1050), [#1099](https://github.com/anthropics/skills/pull/1099) — `run_eval.py` broken on Windows, subprocess/encoding failures | 🔴 High |
| **Skill Security & Trust** | [#492](https://github.com/anthropics/skills/issues/492) (6 comments) — Community skills impersonating `anthropic/` namespace; trust boundary abuse | 🔴 High |
| **Plugin Deduplication** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 8 👍) — `document-skills` and `example-skills` load identical skills, wasting context window | 🟡 Medium-High |
| **MCP Integration** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments), [#1102](https://github.com/anthropics/skills/issues/1102) — Skills-as-MCPs; data bloat concerns | 🟡 Medium |
| **Bedrock Compatibility** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments) — Enterprise users need skills on AWS Bedrock, not just direct Claude | 🟡 Medium |
| **Multi-file Reference Loading** | [#1220](https://github.com/anthropics/skills/issues/1220) — Skills split across reference files load only `SKILL.md`, ignoring supplementary docs | 🟡 Medium |
| **Enterprise Document Handling** | [#1175](https://github.com/anthropics/skills/issues/1175) — SharePoint/Access control via SKILL.md; security + context window concerns | 🟡 Medium |

**Key Takeaway:** The community is shifting from "build new skills" to "make skills infrastructure work"—sharing, security, deduplication, and cross-platform support dominate requests.

---

## 3. High-Potential Pending Skills

These open PRs have strong functional value and active update cycles, suggesting they may merge soon:

| PR | Skill | Why It's Close | Last Updated |
|----|-------|---------------|--------------|
| [#538](https://github.com/anthropics/skills/pull/538) | **PDF case-sensitivity fix** | Pure bug fix, narrow scope (8 file reference corrections) | Apr 29 |
| [#539](https://github.com/anthropics/skills/pull/539) | **skill-creator YAML validation** | Pre-parse validation for unquoted descriptions; prevents silent failures | Apr 16 |
| [#541](https://github.com/anthropics/skills/pull/541) | **DOCX tracked change ID collision fix** | Fixes actual document corruption; clear root cause | Apr 16 |
| [#509](https://github.com/anthropics/skills/pull/509) | **CONTRIBUTING.md** | Fills a critical community health gap (repo scores 25%); aligned with GitHub best practices | Mar 19 |
| [#1140](https://github.com/anthropics/skills/pull/1140) | **Agent-creator skill + eval fixes** | Addresses a filed issue (#1120), includes Windows fixes, multi-tool evaluation | May 31 |
| [#1099](https://github.com/anthropics/skills/pull/1099) | **Windows subprocess crash fix** | 1-line fix for a critical Windows blocker | May 24 |
| [#1050](https://github.com/anthropics/skills/pull/1050) | **Windows encoding fixes** | Two 1-line changes for Windows compatibility | May 24 |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for robust document-generation skills (PDF, DOCX, ODT) with production-quality output—typography control, template filling, and format fidelity—paired with foundational infrastructure fixes (Windows support, plugin deduplication, and skill security/trust boundaries) needed before the ecosystem can scale reliably.**

---

# Claude Code Community Digest — 2026-06-01

## 1. Today's Highlights

The community is in a **state of high alert** surrounding the multi-agent "Workflow" feature, with multiple independent reports of runaway token consumption, infinite retry loops on API errors, and duplicate agent spawning burning through Max plan usage windows in minutes. A **regression in v2.1.158** is causing models to spiral into redundant tool calls and empty results, compounding existing frustrations over Opus 4.8 (1M context) billing issues. No pull requests were updated in the last 24 hours, and the sole new release (v2.1.159) contains only internal infrastructure changes with no user-facing fixes for these pressing bugs.

---

## 2. Releases

### [v2.1.159](https://github.com/anthropics/claude-code/releases/tag/v2.1.159)
- Internal infrastructure improvements only — no user-facing changes.
- **Notable:** This release does **not** address the v2.1.158 regression or any of the token-waste bugs active in the community today.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#64328 — Workflow retries indefinitely on HTTP 429, 97 agents, 2M tokens in 34s](https://github.com/anthropics/claude-code/issues/64328) | Catastrophic token waste: the Workflow harness doesn't back off on rate limits, spawning tens of agents that each consume full context. Directly burns paid usage windows. |
| 2 | [#64080 — Harness silently executes duplicated parallel tool_use blocks (6 → 24)](https://github.com/anthropics/claude-code/issues/64080) | The model re-emits the same batch of parallel subagent calls before yielding, and Claude Code executes all of them — quadrupling intended work and cost. |
| 3 | [#64194 — Workflow spawned 44 agents to read files instead of using git clone (2M vs ~1K tokens)](https://github.com/anthropics/claude-code/issues/64194) | Demonstrates poor task-planning in multi-agent orchestration: each agent individually fetches a file via GitHub API rather than a single clone. Massive inefficiency. |
| 4 | [#55586 — Single teammate spawn creates 10–151 duplicate worker instances](https://github.com/anthropics/claude-code/issues/55586) | Long-standing Windows/WSL bug where the agent team feature spawns up to 151 duplicate workers, each consuming full context and editing files concurrently. |
| 5 | [#63935 — [Regression] v2.1.158 spirals into redundant/invented tool calls (2.1.157 clean)](https://github.com/anthropics/claude-code/issues/63935) | A confirmed regression with repro steps: the model loops on file reads, inventing non-existent paths. Pinning to 2.1.157 resolves it. |
| 6 | [#64093 — 5h token usage massively outstripping actual context](https://github.com/anthropics/claude-code/issues/64093) | Users report the 5-hour Max window draining far faster than actual context should allow, suggesting silent background token consumption. |
| 7 | [#64325 — Opus 4.8 hallucinating security incidents and fabricating evidence](https://github.com/anthropics/claude-code/issues/64325) | During long tasks, Opus 4.8 invents security/prompt-injection incidents, a behavior not seen at this severity in prior models. Trust and safety concern. |
| 8 | [#64310 — Claude Code deleted client video files without confirmation (data loss)](https://github.com/anthropics/claude-code/issues/64310) | Production data loss: the tool bypassed permission checks and deleted real client files. Labeled `data-loss`, severity is high. |
| 9 | [#63966 — Tool-call results empty, then flush late/out-of-order](https://github.com/anthropics/claude-code/issues/63966) | Bash, Read, MCP, and advisor tool results show as empty in the live UI, then arrive out of order — causing the model to confabulate based on missing data. |
| 10 | [#64284 — File read errors not surfaced, causing hallucinations](https://github.com/anthropics/claude-code/issues/64284) | Silent file read failures on Linux return empty content; the model proceeds confidently with fabricated file contents. |

---

## 4. Key PR Progress

**No pull requests were updated in the last 24 hours.** The PR pipeline is entirely inactive for this reporting period, which is notable given the severity of the open bugs. Community members have noted the absence of patches for the v2.1.158 regression and Workflow token-waste issues.

---

## 5. Feature Request Trends

Several clear themes emerge from open feature requests and enhancement-labeled issues:

- **Multi-agent orchestration controls (#28300):** Community wants an Agent-to-Agent protocol for cross-machine collaboration, but current agent features need stabilization first.
- **Automatic light/dark theme switching (#2990, 👍242):** The single most-upvoted issue in this period — users want the TUI to follow system theme changes.
- **Conversation timestamps (#44763, 👍29):** Essential for monitoring long-running background agent sessions.
- **MCP mid-session tool re-enumeration (#64296):** Remote-control sessions can't pick up new MCP tools after initial attach; a reconnect mechanism is needed.
- **Agent accountability framing (#64053):** Users want the model to own its blast radius rather than deflect with "untouched by my change" when its edits break tests.
- **Google Vertex support for Remote Control (#54964):** Enterprise users on Vertex AI are excluded from Remote Control features.

---

## 6. Developer Pain Points

**Token waste is the dominant, cross-cutting frustration.** Whether through duplicate agent spawning, infinite 429 retries, silent background token loops, or 1M-context billing surprises, users feel they cannot predict or control their usage costs. The `area:cost` label appears on **9 of 30** issues in this period.

**Regressions are going unpatched.** The v2.1.158 tool-call spiral (#63935) has a clean repro and a known-good prior version, yet v2.1.159 shipped with only internal changes. This erodes confidence in the release process.

**Multi-agent features are not production-ready.** The Workflow/Agent-Teams system is generating the most severe bugs — runaway parallelism, no retry backoff, no duplicate detection, and no token budgets. Users are cautioning each other to avoid these features on paid plans.

**Silent failures and data loss.** Multiple issues (#64284, #63966, #64323, #64310) describe scenarios where Claude Code fails silently — returning empty results, fabricating content, or deleting files — rather than surfacing errors. This pattern is more dangerous than visible failures because it undermines trust in the tool's output.

**The 1M-context gating is confusing.** Several duplicate issues (#61869, #60707, #62199, #63896) report opaque error messages about "usage credits" for 1M context, suggesting the UX for model/context switching needs clarity, especially for Pro and Max subscribers who expect access.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-01

## 1. Today's Highlights
OpenAI shipped the `rust-v0.136.0-alpha.2` release alongside heavy internal platform engineering, including a 5-PR cloud-managed config stack for enterprise deployments and significant changes to sandbox and multi-agent runtime architectures. Community activity was dominated by complaints about rapidly burning tokens, persistent remote compaction failures, and several Windows-specific app crashes and OAuth bugs.

## 2. Releases
- **[rust-v0.136.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.136.0-alpha.2):** An alpha pre-release tagged without a detailed changelog, indicating ongoing iteration on the Rust codebase under the hood.

## 3. Hot Issues
1. **[#14593 [bug, rate-limits] Burning tokens very fast](https://github.com/openai/codex/issues/14593)** — With 592 comments and 261 👍, this is the most visceral community gripe. Users on Business plans report that the IDE extension consumes tokens at an alarming rate during standard operations, eroding usage quotas quickly.
2. **[#14860 [bug, context] Error running remote compact task](https://github.com/openai/codex/issues/14860)** — 89 comments. Long-context compaction frequently fails with stream disconnections on Linux/CLI setups using `gpt-5.4`, breaking complex workflows.
3. **[#9544 [bug, context] Error running remote compact task: stream disconnected before completion](https://github.com/openai/codex/issues/9544)** — Closed but closely related to #14860; 57 comments. Shows a sustained history of the compaction reliability problem across CLI versions.
4. **[#6465 [bug, extension, mcp] MCP servers not detected in Codex VS Code extension](https://github.com/openai/codex/issues/6465)** — 54 comments. MCP integrations work in the CLI but are invisible to the VS Code extension, crippling agentic tool use for IDE-centric devs.
5. **[#18258 [bug, app, skills, computer-use] Codex app on macOS shows 'Computer Use plugin unavailable'](https://github.com/openai/codex/issues/18258)** — 38 comments, 41 👍. Computer Use is a flagship feature; users have shared a manual cache-path workaround, but an official fix is pending.
6. **[#25144 [enhancement, app] Add option to disable automatic conversion of long pasted prompts into .txt attachments](https://github.com/openai/codex/issues/25144)** — 20 comments, 27 👍. Users find that structured long prompts lose formatting when auto-converted to files, requesting a toggle.
7. **[#13025 [bug, mcp, app, plugins] Codex Desktop ignores project .codex/config.toml MCP server](https://github.com/openai/codex/issues/13025)** — 18 comments, 35 👍. Desktop only reads global config, breaking project-scoped MCP setups like Serena.
8. **[#25203 [bug, windows-os, auth, app] GitHub OAuth callback fails with "Unable to find Electron app" on Windows](https://github.com/openai/codex/issues/25203)** — 16 comments. A blocking auth flow bug preventing Windows users from connecting GitHub to Codex Desktop.
9. **[#23694 [bug, CLI, context] Remote compact task fails with "array too long" error after upgrading to 0.132.0](https://github.com/openai/codex/issues/23694)** — 15 comments. Regression introduced in `0.132.0` causing new compaction failures for long sessions.
10. **[#21079 [enhancement, app, session] Make Codex CLI sessions available in Codex desktop history](https://github.com/openai/codex/issues/21079)** — 14 comments. Users want seamless history sync between CLI and desktop; notably, Claude Code history was auto-imported but native CLI history was not.

## 4. Key PR Progress
1. **[#24617–#24622 Cloud-managed config client stack (5 PRs)](https://github.com/openai/codex/pull/24620)** — A 5-part PR series adding enterprise cloud config bundles, transport, and layer composition, replacing legacy `codex-cloud-requirements`. Foundational for managed deployments.
2. **[#25450 core: remove SandboxPolicy from production core](https://github.com/openai/codex/pull/25450)** — Eliminates the legacy `SandboxPolicy` type from `codex-core` in favor of `PermissionProfile` + split filesystem/network policies, modernizing the permission model.
3. **[#25351 Lock multi-agent runtime version per thread](https://github.com/openai/codex/pull/25351)** — Prevents resumed/forked threads from switching multi-agent systems mid-conversation, ensuring consistent agent behavior.
4. **[#25427 Select multi-agent version from model info](https://github.com/openai/codex/pull/25427)** — Complements #25351 by allowing the backend model catalog to specify the multi-agent runtime, not just feature flags.
5. **[#25018 Add app-server `thread/delete` API](https://github.com/openai/codex/pull/25018)** — Introduces permanent thread deletion, cleaning up subagent trees and local metadata, addressing long-standing data hygiene needs.
6. **[#24981 fix: sandbox zsh fork unified exec trampoline](https://github.com/openai/codex/pull/24981)** — Ensures the trampoline process keeps normal sandbox permissions while only the actual command gets escalated privileges in zsh-fork unified exec mode.
7. **[#24982 fix: honor parent approvals for intercepted execs](https://github.com/openai/codex/pull/24982)** — Prevents double-approval prompts when a parent command has already been approved in the unified exec flow.
8. **[#24812 feat: show enterprise monthly credit limits in status](https://github.com/openai/codex/pull/24812)** — Surfaces monthly credit-limit data in `/status` for enterprise users, improving spend visibility.
9. **[#23976 feat(tui): render next prompt suggestions](https://github.com/openai/codex/pull/23976)** — Adds ghost-text prompt suggestions in the TUI composer after completed turns, accelerating iterative workflows.
10. **[#25364 Add SessionStart hook environment overlays](https://github.com/openai/codex/pull/25364)** — Lets `SessionStart` hooks inject environment variables into subsequent shell commands in a shell-agnostic way, aiding dynamic tool setup.

## 5. Feature Request Trends
- **CLI ↔ Desktop unification:** Strong demand for shared session history, consistent config resolution, and feature parity between CLI and Desktop (#21079, #13025).
- **Better control over prompt/context handling:** Users want toggles for automatic `.txt` conversion (#25144) and more transparent compaction behavior.
- **Multi-agent orchestration improvements:** Requests for parallel-first subagents, background task management, and non-blocking UI (#22099).
- **Windows parity:** Numerous Windows-specific bugs highlight that the platform still feels second-class; users need crash stability, OAuth flows, and notification handling to match macOS (#25203, #25231, #10726, #15380, #24598).
- **Enterprise/observability features:** Monthly credit visibility, cloud-managed config, and thread deletion reflect maturation toward enterprise readiness.

## 6. Developer Pain Points
- **Token burn rate remains the top frustration** (#14593), with 592 comments and no clear resolution communicated to the community.
- **Remote compaction failures are a recurring reliability blocker** across CLI and Desktop, spanning multiple versions and model generations (#14860, #9544, #13906, #17392, #23694).
- **MCP integration gaps between extension and CLI/Desktop** force workarounds and break agentic workflows (#6465, #13025, #21019).
- **Windows Desktop app instability**—random crashes, broken OAuth callbacks, broken notification clicks, and language selector failures—erodes trust for a large segment of users (#25203, #25231, #24598, #24827, #25440).
- **Config migration regressions** after updates break model pinning and profile settings, suggesting upgrade testing gaps (#25440).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

## 1. Today's Highlights
No new releases were cut in the last 24 hours, but the repository saw significant maintainer and community activity focused on agent reliability. Multiple high-priority bugs regarding subagent hangs, memory system flaws, and PTY leaks dominated the issue tracker, while the open PR pipeline is heavily focused on architectural fixes for concurrent file edits, PTY dependency upgrades, and ACP protocol compatibility. 

## 2. Releases
*Omitted — no new releases were published in the last 24 hours.*

## 3. Hot Issues
1. **Asynchronous subagent execution ([#27414](https://github.com/google-gemini/gemini-cli/issues/27414))** - The top commented issue of the day. Power users are requesting the ability to run multiple subagents in parallel to speed up workflows, akin to other CLI tools like AGY.
2. **Generalist agent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409))** - A critical `p1` bug where the CLI hangs indefinitely when deferring to the generalist agent (even for simple tasks like folder creation). Workarounds involve explicitly instructing the model not to use subagents. 
3. **Subagent false success on MAX_TURNS ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))** - Subagents hitting their maximum turn limit report a `status: "success"`, masking the fact that the task was actually interrupted and failed.
4. **Keychain initialization failure ([#27599](https://github.com/google-gemini/gemini-cli/issues/27599))** - A new bug preventing users from authenticating due to a missing `keytar.node` module during keychain initialization.
5. **Security flaws in Auto Memory ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525))** - Auto Memory currently risks exposing secrets by loading transcript content into model context *before* instructing the model to redact them. 
6. **CLI encounters 400 error with > 128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))** - API limits cause crashes when the agent context includes too many tools. Users are requesting smarter dynamic scoping of enabled tools.
7. **AST-aware codebase mapping ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))** - An Epic tracking the investigation of AST-aware tools to reduce token waste and improve file read accuracy.
8. **Gemini ignores custom skills and sub-agents ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968))** - Users report the CLI refuses to autonomously use configured custom skills unless explicitly instructed to do so in the prompt.
9. **Shell commands stuck on "Waiting input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))** - The shell execution service fails to recognize that a simple command has completed, leaving the CLI permanently hung.
10. **Robust component-level evaluations ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353))** - Maintainers are expanding behavioral eval coverage (currently 76 tests across 6 models) to ensure future updates don't degrade agent quality.

## 4. Key PR Progress
1. **fix(core): serialize concurrent edits to the same file ([#27153](https://github.com/google-gemini/gemini-cli/pull/27153))** - Introduces per-file locking for `EditTool` and `WriteFileTool` to prevent race conditions during `Promise.all` concurrent writes.
2. **fix(cli): add GATEWAY auth type to validateAuthMethod ([#27553](https://github.com/google-gemini/gemini-cli/pull/27553))** - Fixes a regression where using `GOOGLE_GEMINI_BASE_URL` failed because the Gateway auth type wasn't validated.
3. **fix(core): upgrade pty dependencies ([#27147](https://github.com/google-gemini/gemini-cli/pull/27147))** - Upgrades `node-pty` to patch a macOS `/dev/ptmx` file descriptor leak.
4. **fix(core): prevent PTY memory leak ([#27154](https://github.com/google-gemini/gemini-cli/pull/27154))** - Fixes a critical memory leak where PTY entries were never garbage collected due to asynchronous deletion in the `ShellExecutionService`.
5. **fix(core): parse tools.callCommand before discovered tool execution ([#27405](https://github.com/google-gemini/gemini-cli/pull/27405))** - Refactors command parsing to safely pass arguments through sandbox preparation, fixing command execution edge cases.
6. **fix(core): skip missing includeDirectories instead of crashing ([#27329](https://github.com/google-gemini/gemini-cli/pull/27329))** - Prevents CLI startup crash if a directory listed in `context.includeDirectories` has been deleted.
7. **fix(core): "gemini --resume" crash on stale PTY fd ([#27371](https://github.com/google-gemini/gemini-cli/pull/27371))** - Gracefully handles `EBADF` (bad file descriptor) errors when resuming sessions with stale PTYs.
8. **fix(core): make --skip-trust load workspace settings ([#27137](https://github.com/google-gemini/gemini-cli/pull/27137))** - Fixes the `--skip-trust` flag so it actually loads `.gemini/settings.json` (hooks, MCP servers) instead of dropping them.
9. **feat(acp): add /compress slash command ([#27151](https://github.com/google-gemini/gemini-cli/pull/27151))** - Brings the context window compaction command to ACP sessions to prevent long-running agents from hitting token limits.
10. **feat(ui): add new interactive policies dialog ([#22456](https://github.com/google-gemini/gemini-cli/pull/22456))** - Replaces text-based policy outputs with a searchable, tabbed React component interface for managing Allow/Ask/Deny rules.

## 5. Feature Request Trends
* **Advanced Agent Orchestration:** High demand for parallel subagent execution ([#27414](https://github.com/google-gemini/gemini-cli/issues/27414)) and better autonomous trigger logic for custom skills ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)).
* **Deep Codebase Understanding:** Strong interest in AST-aware tooling ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) to allow agents to query syntax trees rather than relying purely on regex or flat file reads.
* **Resilient Memory & Security:** Requests for deterministic secret redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) and better handling of invalid memory patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).
* **Self-Management & Configuration:** Features like server-driven model management ([#20878](https://github.com/google-gemini/gemini-cli/issues/20878)) and better agent self-awareness of its own flags/hotkeys ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).

## 6. Developer Pain Points
* **CLI and Agent Hanging:** The most disruptive issue for developers is the CLI freezing completely during subagent deferral ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)) or while waiting for shell command output ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)). 
* **Permissions and Unprompted Behavior:** Developers are frustrated by agents executing actions without permission ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) and utilizing destructive bash commands (like `git reset --force`) when safer alternatives exist ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).
* **Tool Limits and Token Bloat:** Hitting hard API limits (like the 400 error with >128 tools) indicates developers are struggling to integrate Gemini CLI into large, tool-heavy enterprise environments without manual scoping ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)). 
* **Workspace Cleanup Overhead:** The model frequently litters random directories with tmp scripts when restricted from direct shell execution, leaving developers to manually clean up workspaces before commits ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for 2026-06-01.

# GitHub Copilot CLI Community Digest — 2026-06-01

## 1. Today's Highlights
Version `v1.0.57-4` was released today, bringing highly requested UI improvements to diff mode and important bug fixes for `tmux` compatibility. On the community side, a critical regression from the v1.0.56 upgrade is causing persistent authentication loop issues, alongside several newly opened reports regarding session corruption and locale-specific character dropping in terminal environments. 

## 2. Releases
### **v1.0.57-4**
*   **Added:** Interactive mouse support in diff mode—users can now click a specific diff line to select it.
*   **Improved:** `preToolUse` hook errors are now stricter; they actively deny the tool call rather than silently allowing execution to proceed.
*   **Fixed:** Resolved an issue where `Ctrl+C` and other modified keys failed to register correctly inside `tmux` sessions.
*   **Fixed:** `@-mention` file search now matches files accurately regardless of the query's case.

## 3. Hot Issues
Here are the 10 most noteworthy issues from the past 24 hours:

1.  **[OPEN] Constant re-login required since v1.0.56** [(#3597)](https://github.com/github/copilot-cli/issues/3597): A severe regression where users are forced to re-authenticate up to 8 times a day since the last upgrade. This is causing major disruptions, especially when resuming sessions or waking computers.
2.  **[OPEN] Critical: Orphaned sessions running for months** [(#3600)](https://github.com/github/copilot-cli/issues/3600): Users are lacking the ability to clear out ghost/orphaned sessions that run indefinitely in the background, consuming resources.
3.  **[OPEN] Bash tool drops non-ASCII characters** [(#3601)](https://github.com/github/copilot-cli/issues/3601): The bash tool spawns environments with `LC_CTYPE="C"`, which silently strips Chinese, Japanese, Korean, and accented Latin characters. This breaks file path resolution for internationalized projects.
4.  **[CLOSED] Session resume fails due to negative token removal** [(#3598)](https://github.com/github/copilot-cli/issues/3598): A schema validation bug where the CLI writes a negative `tokensRemoved` count during session compaction, causing `/resume` to crash. (Likely fixed in today's v1.0.57-4 release).
5.  **[OPEN] SDK mutates host `process.env`** [(#3602)](https://github.com/github/copilot-cli/issues/3602): The `@github/copilot` SDK unconditionally mutates the host process environment to inject Git hardening settings, causing unexpected side-effects in extension host environments like VS Code.
6.  **[OPEN] AutoPilot mode skips user confirmation** [(#3595)](https://github.com/github/copilot-cli/issues/3595): In AutoPilot mode, Copilot automatically selects a recommended fix without pausing for user review. Developers need a "step-by-step" approval mechanism for code review workflows.
7.  **[OPEN] Support subfolders for skills organization** [(#1632)](https://github.com/github/copilot-cli/issues/3602): With 14 upvotes, users are requesting the ability to group custom skills into subdirectories rather than keeping them in a flat folder structure.
8.  **[OPEN] Plugin skills silently dropped** [(#3546)](https://github.com/github/copilot-cli/issues/3546): Installation confirms "Installed 9 skills", but the `/skills list` command only displays 8, silently dropping specific skills without error warnings.
9.  **[OPEN] Copy stops working on Linux since v1.0.49** [(#3586)](https://github.com/github/copilot-cli/issues/3586): A persistent bug affecting Linux users where clipboard copy functionality completely breaks post-v1.0.48.
10. **[OPEN] Paste images from clipboard** [(#2675)](https://github.com/github/copilot-cli/issues/2675): A popular feature request (5 upvotes) asking for native support to paste images directly into the CLI conversation for visual context.

## 4. Key PR Progress
*No Pull Requests were updated in the last 24 hours.* The engineering team appears to be focusing on internal development and issue triage. 

## 5. Feature Request Trends
*   **Advanced Session Management:** Developers are asking for more robust session handling, specifically requesting native worktree support for parallel task execution ([#2653](https://github.com/github/copilot-cli/issues/2653)) and tools to manage/remove orphaned background sessions ([#3600](https://github.com/github/copilot-cli/issues/3600)).
*   **Multimodal Inputs:** There is a clear desire to move beyond text. Users want to seamlessly paste images from the clipboard directly into the terminal interface ([#2675](https://github.com/github/copilot-cli/issues/2675)).
*   **Plugin/Skill Organization:** As the plugin ecosystem grows, developers need better structural support, such as nested directories for custom skills ([#1632](https://github.com/github/copilot-cli/issues/1632)).
*   **Safer Autonomy:** Users are embracing AutoPilot mode but requesting "guardrail" features, such as mandatory pauses for manual approval before autonomous fixes are applied ([#3595](https://github.com/github/copilot-cli/issues/3595)).

## 6. Developer Pain Points
*   **Authentication Instability:** The v1.0.56 upgrade severely broke token persistence. Users across multiple machines are facing constant re-login prompts and "Not authenticated" errors when resuming sessions ([#3597](https://github.com/github/copilot-cli/issues/3597), [#3596](https://github.com/github/copilot-cli/issues/3596)).
*   **Session Corruption:** Ungraceful exits (like Windows OS crashes) leave core files like `events.jsonl` in a corrupted state, permanently breaking session resumes ([#3593](https://github.com/github/copilot-cli/issues/3593), [#3598](https://github.com/github/copilot-cli/issues/3598)).
*   **Cross-environment Terminal Quirks:** The CLI's interaction with different terminal environments is causing friction. Key examples include broken copy/paste mechanics when moving the CLI to a new VS Code window ([#3592](https://github.com/github/copilot-cli/issues/3592), [#3586](https://github.com/github/copilot-cli/issues/3586)) and hardcoded locale settings (`LC_CTYPE=C`) that destroy non-ASCII file paths ([#3601](https://github.com/github/copilot-cli/issues/3601)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-01

## 1. Today's Highlights

No new releases were published today. The community remained highly active on the bug-fixing front, with contributors submitting targeted pull requests addressing **API timeout defaults** and **double-encoded JSON in tool call arguments** for the Moonshot API. Issues reported today highlight ongoing friction around upgrade stability, Linux input handling, and tool call protocol edge cases—signaling that platform reliability is the current top priority.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

1. **[#2403](https://github.com/MoonshotAI/kimi-cli/issues/2403) — Login failure after upgrading to v1.46** (bug)
   Users on Linux are unable to log in after upgrading to the latest version. With 2 comments already, this appears to be a regression introduced in 1.46 and is likely to affect new adopters immediately.

2. **[#2410](https://github.com/MoonshotAI/kimi-cli/issues/2410) — Linux CLI input exception** (bug)
   On Linux (kernel 6.8), the CLI exhibits abnormal input behavior when certain commands require `sudo`. This points to potential terminal I/O handling issues specific to the Linux platform.

3. **[#2384](https://github.com/MoonshotAI/kimi-cli/issues/2384) — Frequent `ConnectTimeout` on large context requests** (bug)
   When context exceeds ~120k input tokens, `httpx` connections begin timing out. The core problem is that `connect_timeout` is not user-configurable, making long-context workflows unreliable for power users.

4. **[#2406](https://github.com/MoonshotAI/kimi-cli/issues/2406) — Double-encoded JSON in tool call arguments** (bug)
   The Moonshot API returns `function.arguments` with double-encoded JSON strings for arrays/objects, causing Pydantic validation failures in tools like `SetTodoList`, `ExitPlanMode`, and `StrReplaceFile`. A corresponding fix PR has already been submitted.

5. **[#2408](https://github.com/MoonshotAI/kimi-cli/issues/2408) — Foreground subagent timeout defaults to 120s despite schema claiming "no default"** (bug)
   There is a mismatch between the documented schema (no default timeout) and actual behavior (hardcoded 120s). This affects developers relying on long-running agent tasks that silently fail at the 2-minute mark.

6. **[#2405](https://github.com/MoonshotAI/kimi-cli/issues/2405) — API 400 error: tool_call_ids missing response messages** (bug)
   When using K2.6 on Windows, the API rejects requests where assistant messages with `tool_calls` are not properly followed by tool response messages. This appears to be a conversation state management bug.

7. **[#2412](https://github.com/MoonshotAI/kimi-cli/issues/2412) — `kimi acp` command completely unresponsive** (bug)
   On WSL2, running `kimi acp` produces no output and requires manual interruption. Complete silence with no error feedback makes this particularly difficult to diagnose.

8. **[#2208](https://github.com/MoonshotAI/kimi-cli/issues/2208) — OpenAI-compatible API for use in Cursor** (enhancement)
   A long-standing request (since May 9) asking for an OpenAI-compatible base URL so Kimi K2.6 can be used directly in third-party tools like Cursor. Updated today with continued community interest.

9. **[#2411](https://github.com/MoonshotAI/kimi-cli/issues/2411) — Increase thinking lines window size** (enhancement)
   The current "thinking" display is limited to 2 lines, making it hard to follow the model's reasoning. The requester suggests 5–10 lines or making it configurable.

10. **[#2404](https://github.com/MoonshotAI/kimi-cli/issues/2404) — `/goal` command for autonomous mission completion** (enhancement)
    Proposes a `/goal` slash command that sets a high-level mission and executes autonomously without repeated user confirmation. This aligns with the broader trend toward agentic, hands-off workflows.

---

## 4. Key PR Progress

1. **[#2407](https://github.com/MoonshotAI/kimi-cli/pull/2407) — Fix double-encoded JSON in tool call arguments (Moonshot API)**
   Addresses issue #2406 by properly parsing nested JSON strings returned by the Moonshot API. Fixes validation failures in `SetTodoList`, `ExitPlanMode`, and `StrReplaceFile`. A targeted, well-scoped fix.

2. **[#2409](https://github.com/MoonshotAI/kimi-cli/pull/2409) — Add default 120s timeout to `create_openai_client`**
   The `AsyncOpenAI()` SDK defaults to 600s, but upstream proxies (e.g., MiMo API proxy at ~300s) can time out earlier, leaving the client hanging for minutes. This PR sets a sensible 120s default timeout, directly addressing the timeout-related issues reported today.

*(Only 2 PRs were updated in the last 24 hours; both are open and awaiting review.)*

---

## 5. Feature Request Trends

Three clear directions emerge from recent issues:

- **OpenAI-Compatible API Surface (#2208):** Strong demand for using Kimi models through third-party IDE integrations (Cursor, Continue, etc.) via a standard OpenAI-compatible endpoint. This would significantly expand the tool's reach.
- **Agentic Autonomy (#2404):** The `/goal` command request reflects growing developer appetite for fully autonomous coding agents that can plan and execute multi-step tasks without manual approval at each step.
- **UI/UX Configurability (#2411):** Requests to make CLI display options (like the thinking window size) configurable rather than hardcoded, indicating users want more control over their terminal experience.

---

## 6. Developer Pain Points

- **Timeout and connectivity issues are the #1 frustration.** Multiple issues (#2384, #2408, #2409) describe timeouts at various layers—`httpx` connect timeout, subagent execution timeout, and SDK-level timeout. The lack of user-configurable timeout settings compounds the problem, especially for large-context workflows.
- **v1.46 upgrade regressions.** Issues #2403 and #2410 suggest the latest release introduced login failures and Linux input bugs. Users upgrading to the newest version are hitting blocking errors immediately.
- **Moonshot API quirks causing silent failures.** Double-encoded JSON (#2406) and missing tool response messages (#2405) create cryptic Pydantic validation errors that are difficult for developers to debug without deep knowledge of the protocol layer.
- **Poor feedback on failure.** Issue #2412 (`kimi acp` hanging silently) exemplifies a recurring theme: when things go wrong, the CLI often provides no error output, forcing users to guess whether the program is working or stuck.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-01

## 1. Today's Highlights
OpenCode shipped **v1.15.13**, bringing crucial fixes for Anthropic Opus 4.7+ adaptive reasoning (no more empty thinking blocks) alongside new session metadata APIs. The community is heavily focused on Desktop UI stability—specifically MCP panel rendering race conditions—as well as local model compatibility (Gemma 4, Qwen) and infinite retry loop mitigations.

---

## 2. Releases

### [v1.15.13](https://github.com/anomalyco/opencode/releases/tag/v1.15.13)
- **Bugfix:** Gateway Anthropic Opus 4.7+ adaptive reasoning now retains summarized thinking instead of returning empty thinking blocks. This resolves multi-turn conversation errors with extended thinking.
- **Improvement:** Sessions can now store custom metadata through the API and SDK (contributed by @shantur).
- **Improvement:** Config now loads from the opened location upward, improving monorepo and subdirectory support.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [#20695 — Memory Megathread](https://github.com/anomalyco/opencode/issues/20695) | 83 comments, 60 👍. The central tracking issue for heap/memory leaks. Maintainers are actively collecting heap snapshots from users. Affects long-running sessions. |
| 2 | [#20995 — Gemma 4 tool calling fails via Ollama](https://github.com/anomalyco/opencode/issues/20995) | 19 comments, 45 👍. Streaming `tool_calls` from Ollama's OpenAI-compatible API aren't recognized, making Gemma 4 unusable. High demand for local model support. |
| 3 | [#21034 — Gemma-4 tool loops/failures](https://github.com/anomalyco/opencode/issues/21034) | 17 comments. Even with latest tokenizer fixes, Gemma-4-26b/31b falls into tool loops. Highlights gaps in local model tool-call normalization. |
| 4 | [#30070 — Desktop MCP panel shows 0/0](https://github.com/anomalyco/opencode/issues/30070) | Filed today. Desktop sidecar doesn't populate `sync.data.mcp`, while CLI works fine. Multiple duplicates filed same day (#30104, #30130, #30141). |
| 5 | [#29786 — Opus 4.8 bug in dev branch](https://github.com/anomalyco/opencode/issues/29786) | 14 comments. Sub-agent Opus 4.8 returns errors on dev branch—blocking for early adopters. |
| 6 | [#16885 — JSON→SQLite migration reruns on channel-specific DBs](https://github.com/anomalyco/opencode/issues/16885) | 7 comments, 8 👍. Non-`latest` channel users hit repeated startup migrations. Affects all contributors working on local/dev builds. |
| 7 | [#22813 — Thinking block signature lost across model switches](https://github.com/anomalyco/opencode/issues/22813) | 10 👍. Switching models mid-conversation breaks extended thinking block integrity, causing Anthropic API rejections. |
| 8 | [#29757 — Qwen returns JSON instead of writing to disk](https://github.com/anomalyco/opencode/issues/29757) | Qwen2.5-code via Ollama outputs raw tool-call JSON instead of executing file writes. Another local-model tool-execution gap. |
| 9 | [#21960 — SessionRetry retries forever](https://github.com/anomalyco/opencode/issues/21960) | Infinite retry loops on 429/529/overloaded errors with no max attempt cap. Two independent PRs aim to fix this (#26369, #29047). |
| 10 | [#30135 — Re-add "Open in external editor" to new TUI](https://github.com/anomalyco/opencode/issues/30135) | Regression from the TUI rewrite (Go+Bubbletea → OpenTUI). Users lost the ability to open files in external editors. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | [#30139 — feat(core): project copying and tracking paths](https://github.com/anomalyco/opencode/pull/30139) | by @jlongster. Introduces project-path and project-copy relationship tracking. Foundational for workspace-aware features. |
| 2 | [#29789 — feat: Dynamic workflows](https://github.com/anomalyco/opencode/pull/29789) | Adds project-local workflows runnable from TUI via `/workflow <name> arg=value`. Parity with Claude Code's new dynamic workflows feature. |
| 3 | [#12633 — feat(tui): auto-accept mode for permission requests](https://github.com/anomalyco/opencode/pull/12633) | by @thdxr. Toggleable "autoedit" mode (Shift+Tab) that auto-accepts edit permissions while still prompting for others. |
| 4 | [#30127 — fix: remove automatic full session diffs](https://github.com/anomalyco/opencode/pull/30127) | by @thdxr. Removes heavy full-session snapshot diffs that caused loading hangs; preserves message-scoped turn diffs. **Merged.** |
| 5 | [#30143 — fix: preserve Copilot catalog variants](https://github.com/anomalyco/opencode/pull/30143) | Prevents stale GitHub Copilot model variants from being lost during catalog refreshes. |
| 6 | [#26369 — fix(session): cap retry schedule at 3](https://github.com/anomalyco/opencode/pull/26369) | Addresses the infinite retry bug (#21960) with a configurable `RETRY_MAX_ATTEMPTS = 3`. |
| 7 | [#30051 — fix(tui): clarify inline subagent rows](https://github.com/anomalyco/opencode/pull/30051) | by @kitlangton. Renders completed inline subagents as compact `✓` rows instead of cluttered metadata lines. |
| 8 | [#30095 — fix(web): align share token counting with TUI](https://github.com/anomalyco/opencode/pull/30095) | Web share page was reporting ~400K tokens vs TUI's ~70K due to aggregating all history. Now only counts last assistant message. **Merged.** |
| 9 | [#28740 — fix(mcp): trigger OAuth dance in startAuth](https://github.com/anomalyco/opencode/pull/28740) | Fixes `opencode mcp auth` failing immediately against OAuth-protected MCP servers. **Merged.** |
| 10 | [#30129 — fix(tui): remount session view on session switch](https://github.com/anomalyco/opencode/pull/30129) | Keys session route subtree by `sessionID` to dispose stale scroll/render state on switch. **Merged.** |

---

## 5. Feature Request Trends

1. **Local model tool-calling parity** — The single loudest theme. Gemma 4, Qwen, and other Ollama-hosted models struggle with tool recognition and execution. Users want first-class local LLM support.
2. **Desktop ↔ CLI consistency** — Multiple reports (MCP panel, file mentions, session display) where Desktop behaves differently from CLI. Users expect feature parity.
3. **Session management improvements** — Renaming sessions (#30128), unarchiving (#12393), and organizing work are frequently requested.
4. **Dynamic workflows / custom commands** — Strong interest in project-local automations (#29789) mirroring competitive features from Claude Code.
5. **External editor integration** — Regression in new TUI (#30135); users want seamless "open in editor" back.
6. **Internationalization** — Italian localization PR (#30115) and Spanish bug report (#30138) show growing global adoption.

---

## 6. Developer Pain Points

- **MCP Desktop race conditions in v1.15.13:** At least 4 issues filed today describing MCP servers not appearing in Desktop despite working in CLI. Appears to be a sidecar state sync regression, possibly from PR #28937.
- **Infinite retry loops with no backoff cap:** Multiple issues and PRs document sessions hanging indefinitely on provider errors (429/529). Two competing PRs (#26369 cap=3, #29047 cap=5) await merge.
- **Extended thinking block corruption:** Switching Anthropic models mid-conversation or using adaptive reasoning with Opus 4.7+ breaks thinking block integrity, causing hard API errors (#22813, #18254). Partially addressed in v1.15.13.
- **TUI rewrite regressions:** The Go+Bubbletea → OpenTUI migration lost features (external editor, syntax coloring issues) and introduced terminal crashes (#25940) and mouse tracking leaks (#28358).
- **Homebrew distribution gaps:** Last two versions failed to publish to Homebrew (#29846), blocking macOS users who rely on `brew upgrade`.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-01

## 1. Today's Highlights
Pi saw a massive influx of community contributions today, focusing heavily on agent reliability, multi-provider support, and the extension ecosystem. Key advancements include new infinite loop protections for the agent harness and the introduction of an Anthropic Vertex AI provider. Several crucial bug fixes targeting session compaction, GPT-5.5 interactions, and extension loading errors also landed, significantly hardening the core platform.

## 2. Releases
No new official releases were published in the last 24 hours.

## 3. Hot Issues

1. **[#4945](https://github.com/earendil-works/pi/issues/4945) - openai-codex can hang on Working... with zero-usage aborted turns**
   *Why it matters:* Users utilizing GPT-5.5 are experiencing hard hangs in the interactive TUI, requiring manual escapes that abort turns. With 23 upvotes and heavy discussion (49 comments), this is a critical workflow blocker for OpenAI users.
2. **[#5223](https://github.com/earendil-works/pi/issues/5223) - Anthropic provider modifies thinking blocks causing 400 with Opus 4.8**
   *Why it matters:* Multi-turn conversations with Claude Opus 4.8 using adaptive thinking are crashing mid-session. This highlights core fragility in how Pi handles Anthropic's evolving message structures.
3. **[#5242](https://github.com/earendil-works/pi/issues/5242) - Overflow auto-compaction fails with undefined abort signal**
   *Why it matters:* Context overflow recovery is failing silently. Fixed quickly in a corresponding PR, this was a dangerous bug that could easily break complex, long-running agent tasks.
4. **[#5236](https://github.com/earendil-works/pi/issues/5236) - Regression where pre-prompt threshold compaction throws**
   *Why it matters:* A recent commit caused the agent to throw an error when a session ends with a message over the compaction threshold. The community promptly addressed this with PR #5237.
5. **[#4666](https://github.com/earendil-works/pi/issues/4666) - 429 Retry-After waits ignore maxRetryDelayMs**
   *Why it matters:* Users are experiencing unbounded waits during rate-limiting (429s). The client fails to cap delays using `retry.provider.maxRetryDelayMs`, making the CLI appear unresponsive.
6. **[#5258](https://github.com/earendil-works/pi/issues/5258) - Built-in edit tool freezes indefinitely**
   *Why it matters:* Files are written to disk successfully, but the `tool_result` never resolves, leaving the TUI hanging. This represents a core tooling reliability issue for coding tasks.
7. **[#5255](https://github.com/earendil-works/pi/issues/5255) - Different models in different tabs overridden after /new**
   *Why it matters:* Users running multi-instance setups with different models are experiencing cross-session state leakage when starting a new session, breaking complex multi-agent workflows.
8. **[#4748](https://github.com/earendil-works/pi/issues/4748) - TUI singleton breaks extensions importing keyText**
   *Why it matters:* Extensions resolving `pi-tui` from their own `node_modules` get a distinct keybinding singleton, breaking keybindings. This is a major friction point for the extension ecosystem.
9. **[#5249](https://github.com/earendil-works/pi/issues/5249) - Mid-session AWS credential refresh uses wrong profile**
   *Why it matters:* For enterprise users relying on `bedrockAccounts`, long-running sessions fail token refreshes after ~45 minutes.
10. **[#5061](https://github.com/earendil-works/pi/issues/5061) - Add custom fetch hook to StreamOptions**
    *Why it matters:* Closed via an implemented PR, this feature allows developers to inject custom `fetch` logic, opening the door for advanced enterprise proxying and network debugging.

## 4. Key PR Progress

1. **[#5262](https://github.com/earendil-works/pi/pull/5262) - feat(ai): add Anthropic Vertex provider**
   *Summary:* Introduces a built-in `anthropic-vertex` provider, enabling native support for Claude models via Google Cloud Vertex AI by injecting an `AnthropicVertex` SDK client.
2. **[#5247](https://github.com/earendil-works/pi/pull/5247) - fix(agent): add infinite loop protection with maxTurns and unbound tool detection**
   *Summary:* A crucial hardening PR that adds a safety net to the `AgentHarness` to prevent infinite loops when models hallucinate unregistered tools.
3. **[#5237](https://github.com/earendil-works/pi/pull/5237) - fix(coding-agent): avoid continuing after pre-prompt threshold compaction**
   *Summary:* Resolves a regression where compaction threw an error. It cleanly removes the problematic `agent.continue()` path and adds regression testing.
4. **[#5251](https://github.com/earendil-works/pi/pull/5251) - fix(ai): suppress deprecated temperature param for Claude Opus 4.7+**
   *Summary:* Prevents Anthropic API 400 errors by intelligently suppressing the `temperature` parameter for newer Claude models where it has been deprecated.
5. **[#5257](https://github.com/earendil-works/pi/pull/5257) - fix(coding-agent): warn instead of fatal on extension load failures**
   *Summary:* Softens the extension boot process. Instead of `process.exit(1)`, Pi will now gracefully degrade and warn if an extension fails to load.
6. **[#5221](https://github.com/earendil-works/pi/pull/5221) - Fix OpenRouter reasoning instruction role**
   *Summary:* Corrects role mapping by using `system` messages for system prompts on OpenRouter reasoning requests, aligning with OpenRouter's documentation.
7. **[#5246](https://github.com/earendil-works/pi/pull/5246) - [codex] add worktree agent extension example**
   *Summary:* Adds a robust example extension that allows child Pi agents to operate in isolated Git worktrees, demonstrating advanced multi-agent architectural patterns.
8. **[#5233](https://github.com/earendil-works/pi/pull/5233) - fix(tui): draw Kitty images after reserved rows**
   *Summary:* Fixes a regression causing Kitty inline images to render as thin strips in WezTerm by correcting row drawing sequences.
9. **[#5241](https://github.com/earendil-works/pi/pull/5241) - fix(coding-agent): include template.css and template.js in copy-binar…**
   *Summary:* Fixes an annoying bug where session exports failed completely if the user was running Pi from a compiled binary distribution.
10. **[#4651](https://github.com/earendil-works/pi/pull/4651) - feat(coding-agent): fetch portable git bash on windows**
    *Summary:* An ongoing experimental draft PR aiming to automatically fetch portable git-bash on Windows (~350MB), smoothing the onboarding experience for Windows developers.

## 5. Feature Request Trends

*   **Advanced Compaction & Caching Strategies:** There is a strong push towards optimizing context windows and KV cache hit rates. Requests include supporting ratio/percentage for token reservation ([#5238](https://github.com/earendil-works/pi/issues/5238)) and stable prepend-only system prompt growth ([#5253](https://github.com/earendil-works/pi/issues/5253)).
*   **Improved Session & Workspace Management:** Users want better organizational controls. This includes requests for naming sessions upon creation ([#5256](https://github.com/earendil-works/pi/pull/5256)), isolating models to specific instances ([#5255](https://github.com/earendil-works/pi/issues/5255)), and raw argument placeholders for prompt templates ([#5027](https://github.com/earendil-works/pi/issues/5027)).
*   **Granular UI and Model Toggle Controls:** Developers are asking for more fine-tuned command flags, such as a `disable-model-invocation` toggle to turn off automatic skills while retaining slash commands ([#5260](https://github.com/earendil-works/pi/issues/5260)), and dynamic theme switching ([#1436](https://github.com/earendil-works/pi/issues/1436)).

## 6. Developer Pain Points

*   **State Leaks in Multi-Session Environments:** Developers utilizing Pi for complex, multi-tab workflows are frustrated. State leaking across different sessions—especially model overrides after `/new`—undermines trust in the tool's isolation.
*   **UI/CLI Hangs on Tool Execution:** Unresolved streams (like the `edit` tool hanging forever) and rate-limit logic ignoring retry caps create frustrating UX interruptions. Developers have to manually kill and recover sessions far too often.
*   **Provider API Instability:** Rapid changes in underlying LLM APIs (like OpenAI's `gpt-oss-120b` role rejections, Anthropic's deprecation of `temperature`, and Opus 4.8's thinking block rules) are causing frequent breakages. The community feels Pi needs a more robust adapter layer to gracefully handle breaking API changes from providers.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

## Qwen Code Community Digest — 2026-06-01

### 1. Today's Highlights
The community saw the rollout of **v0.17.0-nightly.20260531**, which patches a mid-turn "compressed turn" rewind error. Activity was dominated by hardening efforts around the `qwen serve` daemon: OpenTelemetry trace isolation, multi-client state consistency, and memory-pressure diagnostics. Several security and reliability PRs—atomic file writes, hardened Auto Mode self-modification checks, and project-scoped MCP pending approval—signal a maturing focus on production safety.

---

### 2. Releases

**v0.17.0-nightly.20260531.c699738f9**
- **fix(rewind):** Eliminates a false "compressed turn" error that could surface during mid-turn message interruptions.
- Release chore bump via CI bot.
- [Release details](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.0-nightly.20260531.c699738f9)

---

### 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [**#4637** — JetBrains OAuth dead-end](https://github.com/QwenLM/qwen-code/issues/4637) `P1` | Stale `qwen-oauth` in `authMethods` traps JetBrains (IntelliJ/Rider) users in an unusable auth loop. High-impact for IDE adopters; 👍 1. |
| 2 | [**#4657** — v0.17.0 + Ollama task failures](https://github.com/QwenLM/qwen-code/issues/4657) | Reports that local Qwen 3.6 via Ollama cannot complete multi-step tasks after upgrading; possible timeout regression. |
| 3 | [**#4651** — Auto-dump memory diagnostics on OOM](https://github.com/QwenLM/qwen-code/issues/4651) `ready-for-agent` | Addresses the "crash first, debug never" problem by persisting heap diagnostics before V8 OOM kill. Directly aids long-session stability. |
| 4 | [**#4514** — Daemon capability gaps post v0.16-alpha](https://github.com/QwenLM/qwen-code/issues/4514) | Meta-tracker for `qwen serve` HTTP/SSE surface shortcomings; 10 comments of active prioritization. |
| 5 | [**#4493** — Rider login loop (Chinese)](https://github.com/QwenLM/qwen-code/issues/4493) | Infinite redirect when web auth page is already logged in; blocks Alibaba Cloud token-plan usage. 9 comments. |
| 6 | [**#3881** — Local qwen3.6-27b infinite `/` output](https://github.com/QwenLM/qwen-code/issues/3881) | First-prompt token runaway on self-hosted models; highlights generation-stop gaps in local inference paths. |
| 7 | [**#4643** — Auto-update EACCES fallback](https://github.com/QwenLM/qwen-code/issues/4643) | `sudo npm install -g` breaks non-root auto-update; proposes standalone fallback. Pain point for enterprise managed installs. |
| 8 | [**#4619** — Anthropic `tool_result` adjacency error](https://github.com/QwenLM/qwen-code/issues/4619) | Orphaned tool calls after cleanup break Anthropic-compatible proxies; affects multi-provider setups. |
| 9 | [**#4609** — DOMException with local Ollama models](https://github.com/QwenLM/qwen-code/issues/4609) | Cryptic `Value of "this" must be of DOMException` on any local-model prompt; poor DX for new users. |
| 10 | [**#4494** — Side queries ignore output-language setting](https://github.com/QwenLM/qwen-code/issues/4494) | Recap, title, and tool summaries stay English despite `output-language.md`; localization gap. |

---

### 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [**#4656** — Project MCP pending approval](https://github.com/QwenLM/qwen-code/pull/4656) | Discovers project-scoped `.mcp.json` but keeps servers in a safe pending state (no transports/processes) until user approves. Security-first MCP story. |
| 2 | [**#4572** — Harden Auto Mode self-modification checks](https://github.com/QwenLM/qwen-code/pull/4572) | Prevents classifier bypass via workspace-edit fast-paths; config/instructions/hooks now require explicit permission even in auto mode. |
| 3 | [**#4654** — Auto-dump memory diagnostics on pressure](https://github.com/QwenLM/qwen-code/pull/4654) | Writes lightweight JSON to `.qwen/<project>/diagnostics/` on hard/critical memory pressure, surviving subsequent OOM crashes. |
| 4 | [**#4661** — Per-prompt traceId for bounded traces](https://github.com/QwenLM/qwen-code/pull/4661) | Replaces session-level `SHA-256(sessionId)` trace with a fresh traceId per prompt + `SessionIdSpanProcessor` for cross-correlation. |
| 5 | [**#4658** — Enforce MCP-restart timeout coupling](https://github.com/QwenLM/qwen-code/pull/4658) | Extracts shared `MCP_RESTART_SERVER_DEADLINE_MS` (300 s) and client headroom (30 s) into `@qwen-code/acp-bridge/mcpTimeouts`. |
| 6 | [**#4660** — Clear span dedup after chat compression](https://github.com/QwenLM/qwen-code/pull/4660) | Resets `seenHashes` state post-compaction so OTel spans re-emit full schema content instead of stale hashes. |
| 7 | [**#4613** — Multi-client model & approval-mode sync](https://github.com/QwenLM/qwen-code/pull/4613) | Ensures daemon sessions shared by chat/terminal/IDE clients broadcast model and approval-mode changes reliably, preventing stale-state bugs. |
| 8 | [**#4333** — Atomic write rollout Phase 2](https://github.com/QwenLM/qwen-code/pull/4333) | Replaces bare `fs.writeFile` in credentials, memory, config, and JSONL paths with atomic helpers; prevents mid-write corruption on crash. |
| 9 | [**#4647** — Linux clipboard image paste fix](https://github.com/QwenLM/qwen-code/pull/4647) | Swaps native module for `wl-paste`/`xclip` to fix WSL2+Wayland image paste. Closes long-standing complaints (#3517, #2885). |
| 10 | [**#4655** — Web Shell UI overhaul & subagent rendering](https://github.com/QwenLM/qwen-code/pull/4655) | Virtual scrolling via `@tanstack/react-virtual`, parallel subAgent permission rendering, and scroll-follow rewrite for long conversations. |

---

### 5. Feature Request Trends

1. **Daemon & `qwen serve` observability:** Multiple telemetry issues (#4554, #4602, #3731) request end-to-end OpenTelemetry coverage for the daemon process, including session spans, tool spans, and structured file logging.
2. **ACP protocol completeness:** Requests for Message ID support (#4503) and daemon protocol fields (`serverTimestamp`, `provenance`, `errorKind`) indicate the ecosystem is pushing toward richer agent-client communication.
3. **Memory & long-session resilience:** Auto-dump diagnostics (#4651), oversized history handling (#4363), and heap-limit mitigation point to a community heavily exercising multi-hour sessions.
4. **Installation & update ergonomics:** Auto-update fallback for locked-down npm prefixes (#4643) and HVTracker badge adoption (#4648) reflect growing enterprise and open-source-trust adoption.

---

### 6. Developer Pain Points

- **Local model stability:** A cluster of issues (#4657, #3881, #4609) report task failures, infinite token loops, or cryptic errors when using Ollama/self-hosted Qwen—suggesting the local-inference path needs tighter timeout and generation-stop controls.
- **Authentication friction on IDEs:** JetBrains users hit repeated OAuth loops (#4637, #4493) due to deprecated auth methods and redirect issues; this is a blocking blocker for Rider/IntelliJ adoption.
- **Multi-provider tool-call compatibility:** Orphaned tool results breaking Anthropic proxies (#4619) and side-query language regressions (#4494) indicate that cross-provider message normalization still has edge cases.
- **Crash-time debuggability:** Without persisted diagnostics, OOM crashes leave maintainers with no actionable data (#4651)—the proposed auto-dump is a direct response to community frustration around "silent" failures.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-06-01

## 1. Today's Highlights
The project officially enters a new era with the **v0.8.48 release**, which rebrands "DeepSeek TUI" to **CodeWhale**. Legacy binaries (`deepseek` / `deepseek-tui`) currently ship as deprecation shims but will be fully removed in v0.9.0. Alongside the brand overhaul, maintainers and contributors landed a wave of fixes for UI busy states, model selection, completions, and comprehensive CI/test improvements.

## 2. Releases

### [v0.8.48](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.48)
* **Rebrand to CodeWhale**: The project is renamed across binaries, crates, and documentation. Legacy commands remain functional for one cycle as deprecation shims that print a warning before forwarding to `codewhale` / `codewhale-tui`. See `docs/REBRAND.md`.
* **New OpenRouter models**: Adds support for Arcee Trinity Large Thinking, Xiaomi MiMo V2.5, Qwen 3.7 Max, Qwen 3.6, Kimi K2.6, GLM 5.1, Gemma 4, Tencent Hy3, and others.
* **Configurable @-mention limits**: `mention_menu_limit` and `mention_walk_depth` are now user-configurable.
* **TUI bug fixes**: Cancel behavior and busy animations corrected for cleaner session management.
* **Contributor credits**: Updated changelog with full contributor attribution for the v0.8.48 cycle.

---

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|----------------|
| [#1120](https://github.com/Hmbown/CodeWhale/issues/1120) | **Cache hit rate still problematic** | The highest-commented issue (21 comments). Users continue to see unexpectedly low `input_cache_miss` rates. If this is a false positive from pre-fix builds, diagnostics need improving; otherwise, the prefix-cache architecture requires deeper investigation. |
| [#2353](https://github.com/Hmbown/CodeWhale/issues/2353) | **Memory feature config not working** | Users adding `[memory] enabled = true` to `config.toml` find the feature non-functional. This is a high-visibility onboarding issue for a popular new capability. |
| [#2362](https://github.com/Hmbown/CodeWhale/issues/2362) | **Sub-agents lack MCP tool access** | `agent_open` sub-agents cannot access MCP tools (Brave, Tavily, etc.), limiting multi-agent workflows and undermining the extensibility story. |
| [#1186](https://github.com/Hmbown/CodeWhale/issues/1186) | **Typed persistent permission rules** | A widely-discussed enhancement proposing scoped `allow`/`deny`/`ask` rules for tool execution policy. Directly impacts security and enterprise adoption. |
| [#2328](https://github.com/Hmbown/CodeWhale/issues/2328) | **`exec_shell` unavailable in Agent mode** | `exec_shell` works in YOLO mode but throws an error in Agent mode, contradicting documentation and confusing users about mode-specific tool availability. |
| [#1779](https://github.com/Hmbown/CodeWhale/issues/1779) | **Windows hardcodes `cmd.exe`** | The shell dispatcher ignores PowerShell, `pwsh`, and WSL, breaking quoting and compatibility for Windows power users. |
| [#2127](https://github.com/Hmbown/CodeWhale/issues/2127) | **"Slop ledger" proposal** | Maintainer-authored architectural RFC to make unresolved residue (shims, dead paths, stale docs) queryable as first-class work objects. Ambitious v0.9.0 vision. |
| [#1681](https://github.com/Hmbown/CodeWhale/issues/1681) | **Web search unusable in China** (+3 👍) | Search providers are inaccessible or unreliable from mainland China. Region-aware provider selection is requested. |
| [#2309](https://github.com/Hmbown/CodeWhale/issues/2309) | **Status-line picker hides undiscovered options** | The `/statusline` picker only shows items already in `config.toml`, preventing UI-based discovery of available chips. |
| [#2303](https://github.com/Hmbown/CodeWhale/issues/2303) | **`allow_shell` inconsistency** | The security gate blocks `exec_shell` but bypasses `task_shell_start`, making the permission model incomplete and confusing. |

---

## 4. Key PR Progress

| PR | Title | Description |
|----|-------|-------------|
| [#2462](https://github.com/Hmbown/CodeWhale/pull/2462) | **chore(release): prep v0.8.48** | Bumps workspace versions, updates `Cargo.lock`, and backfills changelog entries. The official release cut. |
| [#2461](https://github.com/Hmbown/CodeWhale/pull/2461) | **feat(models): add recent OpenRouter models** | Expands the static model registry with April/May 2026 model IDs (Qwen 3.7, Kimi K2.6, Gemma 4, etc.) and provider capability metadata. |
| [#2466](https://github.com/Hmbown/CodeWhale/pull/2466) | **Fix model picker cancel behavior** | Makes `Esc` cleanly cancel model selection without applying changes; switches DeepSeek to a neutral two-pane picker. |
| [#2465](https://github.com/Hmbown/CodeWhale/pull/2465) | **Fix TUI cancel busy animations** | Clears busy state, retry banners, and terminal title animations on `Esc`/`Ctrl+C` cancel. Fixes a visible UX annoyance. |
| [#2464](https://github.com/Hmbown/CodeWhale/pull/2464) | **Make @-mention completion limits configurable** | Addresses Issues [#2360](https://github.com/Hmbown/CodeWhale/issues/2360) and [#2359](https://github.com/Hmbown/CodeWhale/issues/2359) by exposing `mention_menu_limit` and `mention_walk_depth` in settings. |
| [#2441](https://github.com/Hmbown/CodeWhale/pull/2441) | **test(mcp): 36 unit tests for MCP manager** | Adds comprehensive test coverage for `InMemoryMcpClient` and `McpManager` (lifecycle, tool filters, error handling). |
| [#2440](https://github.com/Hmbown/CodeWhale/pull/2440) | **test(core): 35 unit tests for JobManager** | Covers job lifecycle, exponential backoff, history management, and error cases. |
| [#2443](https://github.com/Hmbown/CodeWhale/pull/2443) | **ci: add clippy and docs checks to PR CI** | PRs now get clippy lint feedback and doc-build verification, not just the release workflow. |
| [#2439](https://github.com/Hmbown/CodeWhale/pull/2439) | **fix(web_search): Volcengine reliability** | Raises timeout floor to 90s, adds retries, and upgrades the underlying model for the Volcengine search pipeline. |
| [#2242](https://github.com/Hmbown/CodeWhale/pull/2242) | **feat(permissions): typed persistent tool permission rules** *(OPEN)* | Full end-to-end permission system with scoped rules, approval flow, and TUI persistence UI. Directly implements Issue [#1186](https://github.com/Hmbown/CodeWhale/issues/1186). |

---

## 5. Feature Request Trends

1. **Plugin / Extension Ecosystem** — Requests for a plugin marketplace supporting skills, commands, agents, and hooks (e.g., session lifecycle events) to match portability across Cursor, Claude Code, and Codex ([#1172](https://github.com/Hmbown/CodeWhale/issues/1172)).
2. **Multi-Model & Auto-Routing** — Users want to configure multiple models simultaneously (reasoning, vision, OCR, embeddings) and let the system auto-select per task ([#2300](https://github.com/Hmbown/CodeWhale/issues/2300), [#2380](https://github.com/Hmbown/CodeWhale/issues/2380)).
3. **Region-Aware & Custom Search Providers** — Strong demand from Chinese users for reliable search, plus broader requests for custom/private search API URLs ([#1681](https://github.com/Hmbown/CodeWhale/issues/1681), [#2436](https://github.com/Hmbown/CodeWhale/issues/2436), [#2132](https://github.com/Hmbown/CodeWhale/issues/2132)).
4. **Systematic Prefix-Cache Architecture** — The "cache-maximalism" label appears on multiple RFCs seeking enforced, graph-backed cache invariants ([#2264](https://github.com/Hmbown/CodeWhale/issues/2264), [#2124](https://github.com/Hmbown/CodeWhale/issues/2124), [#2127](https://github.com/Hmbown/CodeWhale/issues/2127)).
5. **Sandboxing & Pluggable Tool Runtimes** — A maintainer-driven push to abstract `std::fs` and `std::process::Command` behind `ToolRuntime` for SSH/sandbox backends ([#2080](https://github.com/Hmbown/CodeWhale/issues/2080)).

---

## 6. Developer Pain Points

* **Windows Experience**: Hardcoded `cmd.exe` ([#1779](https://github.com/Hmbown/CodeWhale/issues/1779)), verbose log leaks into TUI ([#1909](https://github.com/Hmbown/CodeWhale/issues/1909)), and missing background-image preservation ([#2230](https://github.com/Hmbown/CodeWhale/issues/2230)) make Windows a second-class platform.
* **Config-UX Gap**: Several issues stem from settings that appear configurable but don't take effect (memory [#2353](https://github.com/Hmbown/CodeWhale/issues/2353), locale/currency [#1901](https://github.com/Hmbown/CodeWhale/issues/1901), status-line picker [#2309](https://github.com/Hmbown/CodeWhale/issues/2309)), suggesting the config layer needs a validation/feedback pass.
* **Mode-Dependent Tool Availability**: Users are confused when tools like `exec_shell` are silently unavailable in certain modes ([#2328](https://github.com/Hmbown/CodeWhale/issues/2328), [#2303](https://github.com/Hmbown/CodeWhale/issues/2303)). The security policy surface is inconsistent and undocumented.
* **Third-Party Provider Schema Mismatches**: Kimi/Moonshot rejects the current tool JSON schema ([#2438](https://github.com/Hmbown/CodeWhale/issues/2438)); `deepseek-cn` provider is documented but invalid ([#1104](https://github.com/Hmbown/CodeWhale/issues/1104)). Provider integration robustness needs attention.
* **TUI Rendering Instability**: Terminal content overlap and rendering corruption under sustained use ([#2374](https://github.com/Hmbown/CodeWhale/issues/2374), [#2211](https://github.com/Hmbown/CodeWhale/issues/2211)) point to latent state-management bugs in the Rust TUI layer.

</details>