# AI CLI Tools Community Digest 2026-06-04

> Generated: 2026-06-03 22:40 UTC | Tools covered: 9

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

# AI Developer Tools Ecosystem Cross-Tool Analysis — 2026-06-04

## 1. Ecosystem Overview
The AI CLI tooling landscape on June 4, 2026, is characterized by aggressive iteration toward multi-agent orchestration, enterprise-grade security, and cross-platform stability. Major players like OpenAI and Google are rapidly hardening their Rust/Go cores and advancing multi-agent infrastructures, while emerging contenders focus on niche integrations and workflow customization. The overarching industry shift has moved from simple prompt-response CLI wrappers to sophisticated autonomous agents requiring robust memory management, complex permissions, and seamless desktop integration.

## 2. Activity Comparison
Activity levels vary significantly, with OpenAI Codex and Google Gemini CLI leading internal development, while OpenCode and Pi see high community architectural contributions.

| Tool | Open Issues (Featured) | Active PRs (Featured) | Release Status (Last 24h) | Primary Focus |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 1 | **v2.1.162** (Patch) | UX Friction, Token Waste, Multi-Agent |
| **OpenAI Codex** | 10 | 10 | **v0.137.0-alpha.4/5** (Alpha) | CI/CD Hardening, Multi-Agent v2, WSL Latency |
| **Gemini CLI** | 10 | 10 | **v0.45.0, v0.46.0-pre** (Minor/Prev) | Core Stability, Gemini 3.5 Flash Transit, AST |
| **GitHub Copilot** | 10 | 1 | None | CJK Input Bugs, Context Window Bloat |
| **Kimi Code** | 7 | 1 | None | Web/Project UX, State Management |
| **OpenCode** | 10 | 10 | None | Architecture V2 Reg, CPU/Timeout Regressions |
| **Pi** | 10 | 10 | None | Multi-Cloud Providers, Approval Systems |
| **Qwen Code** | 10 | 10 | **v0.17.1** (Patch) | Daemon Stability, Dynamic Workflows, CJK |
| **DeepSeek TUI** | 10 | 10 | **v0.8.52** (Minor) | Rebranding, Multi-provider Ergonomics |

## 3. Shared Feature Directions
Analysis of community requests and PRs reveals highly synchronized priorities across the ecosystem:

*   **Advanced Multi-Agent & Background Orchestration:** Developers are pushing past simple chat loops. **Claude Code**, **OpenAI Codex**, and **Gemini CLI** are actively addressing bugs where sub-agents hang or mask failures. **Qwen Code** and **OpenCode** are introducing backgroundable agents (`Ctrl+B`) and secure workflow sandboxes (`node:vm`).
*   **Strict Security & Permission Sandboxing:** As agents gain filesystem access, users are demanding guardrails. **GitHub Copilot** users heavily petition for filesystem sandboxing; **OpenCode** is addressing unauthorized `auth.json` access; and **Pi** is merging interactive workspace approval systems for extensions.
*   **Context Window & Memory Management:** Across the board, agents choke on their own toolchains. **GitHub Copilot** and **Claude Code** face severe backlash over MCP servers and system prompts consuming >70% of the context window. Meanwhile, **Qwen Code**, **Gemini CLI**, and **Claude Code** users are demanding reliable global/cross-project memory and fixes for broken auto-compact states.
*   **Terminal UI (TUI) & Internationalization Fixes:** Basic terminal interactions remain fragile. CJK (Chinese, Japanese, Korean) IME rendering and input bugs are top pain points simultaneously for **GitHub Copilot**, **Qwen Code**, and **OpenCode**. Furthermore, `Shift+Enter` keybinding failures are a universally shared frustration (reported in **OpenCode**, **GitHub Copilot**, and **Pi**).

## 4. Differentiation Analysis
*   **Platform & Cloud Alignment:** Tools are polarizing between open/agnostic and proprietary ecosystems. **OpenAI Codex** and **Gemini CLI** are deeply optimizing for their proprietary models (Codex `5.4`, Gemini `3.5 Flash`), whereas **Pi**, **CodeWhale (DeepSeek TUI)**, and **OpenCode** are heavily prioritizing multi-cloud routing (Vertex, Bedrock, Hugging Face, local vLLM).
*   **Enterprise vs. Individual Focus:** **OpenAI Codex** and **GitHub Copilot** are uniquely focused on enterprise CI/CD hardening (e.g., Azure Key Vault code signing) and corporate plugin governance. In contrast, **Kimi Code** and **Qwen Code** are differentiating by building localized web UIs and localized provider integrations tailored to the Asian market.
*   **Architectural Paradigms:** **CodeWhale** is taking a radically declarative approach with "WhaleFlow" and typed branch/leaf workflows. **OpenCode** is heavily leveraging functional programming (Effect-ts) for durable V2 session runtimes. **Claude Code** remains focused on autonomous DevOps sub-agents, though it currently struggles with reliability.

## 5. Community Momentum & Maturity
*   **Rapid Iterators:** **OpenAI Codex** and **Gemini CLI** demonstrate the highest internal velocity, shipping multiple alphas/previews and merging 10+ core PRs daily. **CodeWhale** shows massive open-source momentum, aggressively pushing towards a major v0.9.0 architectural refactor.
*   **Stalled / Friction States:** **Claude Code** and **GitHub Copilot** show signs of pipeline bottlenecks today (only 1 PR updated each), despite massive user engagement. They are accumulating highly-upvoted open issues (e.g., Claude's copy/paste bug, Copilot's context bloat) that are months old, indicating a lag between community feedback and merged resolutions.
*   **Architectural Growth:** **OpenCode**, **Pi**, and **Qwen Code** are in a maturing state, replacing monolithic legacy code with scalable registries (V2 Commands/Skills) and securing multi-provider infrastructure.

## 6. Trend Signals (Strategic Takeaways)
1.  **The "Context Bloat" Crisis:** The transition to agentic workflows is breaking token economics. When MCP tool definitions consume 146k/200k tokens before the first prompt (as seen in Copilot), context limits become the primary bottleneck. *Action: Dev tool teams must aggressively implement AST-aware tooling (like Gemini is exploring) and dynamic tool scoping.*
2.  **MCP is Still Fragile for Enterprise:** While Model Context Protocol is the standard for tool integration, it currently leaks memory, loops infinitely during compaction, and breaks on non-OpenAI providers. *Action: Enterprise adopters should enforce strict MCP allowlists and monitor for OOM kills.*
3.  **The Death of the Hardcoded Agent:** 2026 marks the shift to "Dynamic Workflows" and "Harness Profiles" (as seen in Qwen and CodeWhale). Developers want models to self-select tools based on the task, rather than exposing a massive static schema that degrades model reliability.
4.  **TUI Basics Still Matter:** AI companies are building multi-agent clouds while fundamental terminal UX (copy/paste formatting, `Shift+Enter`, CJK rendering) remains broken. *Action: Product teams must prioritize cross-platform terminal input standards to stop bleeding power users.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data snapshot as of 2026-06-04 | Repository: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

Below are the community's most-watched and actively discussed Skill submissions (Pull Requests), representing the cutting edge of what Claude Code may soon support natively.

| Rank | Skill | PR | Status |
|:---:|-------|:---|:------:|
| 1 | **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open |
| 2 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open |
| 3 | **frontend-design (improved)** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open |
| 4 | **skill-quality-analyzer & skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open |
| 5 | **PDF fixes (case-sensitive refs)** | [#538](https://github.com/anthropics/skills/pull/538) | 🟡 Open |
| 6 | **agent-creator + eval fix** | [#1140](https://github.com/anthropics/skills/pull/1140) | 🟡 Open |
| 7 | **ServiceNow platform** | [#568](https://github.com/anthropics/skills/pull/568) | 🟡 Open |
| 8 | **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open |

### Detailed Breakdown

1. **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) — Quality-control skill that prevents common typographic errors in AI-generated documents: orphan word wrap (1–6 words spilling onto the next line), widow paragraphs (section headers stranded at page bottom), and numbering misalignment. Fills a widely-felt gap since users rarely explicitly prompt for good typography but always expect it.

2. **ODT — OpenDocument creation, template filling & HTML conversion** ([#486](https://github.com/anthropics/skills/pull/486)) — Enables Claude to create, fill, read, and convert `.odt`/`.ods` files. Triggers on any mention of OpenDocument, LibreOffice, or ISO-standard document formats. Notably long-lived (open since March 2026, updated through mid-April), indicating active review iteration.

3. **frontend-design (clarity & actionability revision)** ([#210](https://github.com/anthropics/skills/pull/210)) — Revises the existing frontend-design skill to ensure every instruction is actionable within a single conversation and specific enough to steer Claude's behavior without ambiguity. Community interest reflects demand for higher-quality UI/UX output.

4. **skill-quality-analyzer & skill-security-analyzer (meta-skills)** ([#83](https://github.com/anthropics/skills/pull/83)) — Two "meta-skills" for the marketplace: a quality analyzer evaluating skills across five dimensions (structure, documentation, examples, resources, compliance), and a security analyzer. Signals the community's maturing focus on skill *reliability* rather than just quantity.

5. **PDF skill fixes — case-sensitive file references** ([#538](https://github.com/anthropics/skills/pull/538)) — Fixes 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` where `REFERENCE.md` and `FORMS.md` were referenced in uppercase but the actual files are lowercase. A targeted but critical fix for case-sensitive filesystems (Linux).

6. **agent-creator + multi-tool eval fix** ([#1140](https://github.com/anthropics/skills/pull/1140)) — Adds an `agent-creator` meta-skill for task-specific agent sets, fixes `evaluation.py` to handle multiple parallel tool calls, and adds Windows support via `%APPDATA%` paths. Addresses [Issue #1120](https://github.com/anthropics/skills/issues/1120) directly.

7. **ServiceNow platform** ([#568](https://github.com/anthropics/skills/pull/568)) — Broad enterprise skill covering ITSM, ITOM, ITAM/SAM, FSM, SPM, CSDM, Vulnerability Response, Security Incident Response, and IntegrationHub. Represents the strongest enterprise-platform entry in the ecosystem.

8. **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) — Comprehensive testing skill covering the full stack: Testing Trophy philosophy, unit testing (AAA pattern, naming, edge cases), React component testing (Testing Library), integration testing, and E2E patterns.

---

## 2. Community Demand Trends

Distilled from the top Issues, these are the most-anticipated directions the community wants the Skills ecosystem to address:

| Trend | Signal Issues | Description |
|--------|--------------|-------------|
| **Organization-wide skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) (👍 7, 13 comments) | Users want shared skill libraries or direct sharing links instead of manually downloading `.skill` files and sending via Slack/Teams. |
| **Skill evaluation reliability** | [#556](https://github.com/anthropics/skills/issues/556) (👍 6, 9 comments), [#202](https://github.com/anthropics/skills/issues/202) (8 comments, closed) | `run_eval.py` has a 0% trigger rate; `skill-creator` reads like dev docs, not an operational skill. The community wants robust evaluation tooling. |
| **Windows compatibility** | [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050) | Multiple PRs addressing subprocess pipe crashes, `PATHEXT` issues, and encoding bugs on Windows. A clear platform-gap. |
| **Security & trust boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (👍 2, 7 comments), [#1175](https://github.com/anthropics/skills/issues/1175) | Community skills distributed under `anthropic/` namespace create trust vulnerabilities; SharePoint access-control concerns highlight enterprise security needs. |
| **Skill-as-MCP / API exposure** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments) | Exposing Skills as MCPs to create standardized, callable software interfaces — a recurring architectural request. |
| **Multi-file reference bundling** | [#1220](https://github.com/anthropics/skills/issues/1220) | Skills split across multiple reference files currently only load `SKILL.md` into context; users need all refs bundled automatically. |
| **AWS Bedrock compatibility** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments) | Users want Skills to work with AWS Bedrock-hosted Claude, not just `claude.ai`. |
| **Context window optimization** | [#1102](https://github.com/anthropics/skills/issues/1102) | MCP-returned data bloat is congesting the context window; compression or pagination solutions needed. |

---

## 3. High-Potential Pending Skills

These active PRs have not yet been merged but show strong community engagement and may land soon:

| PR | Skill | Why It's Promising |
|:---|-------|-------------------|
| [#538](https://github.com/anthropics/skills/pull/538) | **PDF case-sensitivity fix** | Small, targeted, bug-fix PR with no design ambiguity — highest merge probability. |
| [#539](https://github.com/anthropics/skills/pull/539) | **YAML validation for unquoted descriptions** | Pre-parse validation catching `:` in unquoted description fields; addresses silent YAML failures. |
| [#541](https://github.com/anthropics/skills/pull/541) | **DOCX tracked-change w:id collision fix** | Fixes real document corruption from ID-space collisions in OOXML — a high-severity, low-risk change. |
| [#1050](https://github.com/anthropics/skills/pull/1050) | **Windows subprocess + encoding fixes** | Two one-line fixes with clear reproduction paths; multiple Windows PRs suggest reviewer priority. |
| [#1099](https://github.com/anthropics/skills/pull/1099) | **run_eval.py Windows crash fix** | Directly addresses the 0% trigger rate reported in [Issue #556](https://github.com/anthropics/skills/issues/556). |
| [#363](https://github.com/anthropics/skills/pull/363) | **feature-dev TodoWrite overwrite fix** | Fixes Phases 6–7 being silently skipped during `/feature-dev` workflow; updated as recently as June 3. |
| [#509](https://github.com/anthropics/skills/pull/509) | **CONTRIBUTING.md** | Addresses [Issue #452](https://github.com/anthropics/skills/issues/452); raises GitHub community health score from 25% — process infrastructure PRs often merge faster. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand at the Skills level is for robust skill evaluation tooling and cross-platform (especially Windows) compatibility** — evidenced by multiple overlapping Issues and PRs targeting `run_eval.py`'s 0% trigger rate, subprocess failures on Windows, and the ongoing refinement of the `skill-creator` meta-skill itself.

---

# Claude Code Community Digest — 2026-06-04

---

## 1. Today's Highlights

Claude Code shipped **v2.1.162**, adding visibility into agent blocking states and fixing native search tool handling. The community remains focused on long-standing UX friction around **terminal copy/paste formatting** (the #1 issue by votes) and **cost/token waste** from image processing failures and context rebuilding. Several new bugs were filed around **auto-compact not triggering**, **triplicated streaming output**, and **model instruction-following regressions** on the latest Claude 4.8 builds.

---

## 2. Releases

### v2.1.162
- **`claude agents --json` now includes `waitingFor`** — shows what a waiting session is blocked on (e.g., a permission prompt). Useful for orchestration scripts monitoring multi-agent pipelines.
- **`--tools` explicit Grep/Glob handling fixed** — on native builds with embedded search, explicitly listing `Grep`/`Glob` now correctly provides the dedicated search tools instead of silently ignoring them.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#18170](https://github.com/anthropics/claude-code/issues/18170) — **Copy/paste includes unwanted indentation and trailing spaces** (256 👍, 120 comments) | The single most-upvoted open issue. Terminal formatting artifacts corrupt every code block copied out of Claude Code, breaking the most fundamental developer workflow. No fix in 5 months. |
| 2 | [#60366](https://github.com/anthropics/claude-code/issues/60366) — **"Hi" triggers Usage Policy false positive** (71 comments) | Completely benign greetings are flagged as policy violations, blocking sessions. Indicates an overly aggressive content filter that erodes trust. |
| 3 | [#60334](https://github.com/anthropics/claude-code/issues/60334) — **Image processing failures burning 70% of 5h token window** (46 comments, closed) | Phantom image-processing errors consume massive token budgets even when no images are present. Users report hundreds of dollars wasted. |
| 4 | [#20412](https://github.com/anthropics/claude-code/issues/20412) — **Claude.ai MCP servers auto-injected without opt-in → OOM kills** (133 👍, 36 comments) | Silent MCP sync from claude.ai creates duplicate servers and causes OOM on constrained systems. Labeled `oncall` but still open since January. |
| 5 | [#15199](https://github.com/anthropics/claude-code/issues/15199) — **CLI formatting artifacts break copy/paste, waste tokens on workarounds** (81 👍) | Companion to #18170 — 2-space indentation and hard 80-char line breaks in all output. Token cost is incurred when asking Claude to re-format its own output. |
| 6 | [#43454](https://github.com/anthropics/claude-code/issues/43454) — **apply-seccomp fails on Linux** (32 👍, 19 comments) | Sandbox initialization regression on Linux; `setgroups` write fails. Blocks Claude Code entirely on affected distros. |
| 7 | [#52871](https://github.com/anthropics/claude-code/issues/52871) — **MCP OAuth trailing slash breaks Entra ID auth** (12 👍) | A single trailing slash on the `resource` parameter causes AADSTS9010010. Corporate/enterprise users with Entra ID-backed MCP servers are completely blocked. |
| 8 | [#62534](https://github.com/anthropics/claude-code/issues/62534) — **Long streamed responses triplicate output sections** (3 comments) | On 3000+ token responses, middle chunks get re-emitted, producing visible triplication. A TUI rendering bug that corrupts output reliability. |
| 9 | [#65172](https://github.com/anthropics/claude-code/issues/65172) — **DevOps subagent missed 8.5-day AWS cost anomaly ($80 burn)** | Autonomous monitoring agent failed to catch a real cost spike despite explicit daily check instructions. Exposes reliability gaps in multi-agent delegations. |
| 10 | [#65173](https://github.com/anthropics/claude-code/issues/65173) — **Auto-memory not persisted across sessions despite standing instruction** | CLAUDE.md-mandated memory persistence silently fails, forcing full context rebuilds each session. Direct token-waste impact. |

---

## 4. Key PR Progress

Only **one PR** saw activity in the last 24 hours:

- **[#22919](https://github.com/anthropics/claude-code/pull/22919)** — `feat(plugins): add collab plugin for Socratic mentoring mode` by [augmnt](https://github.com/augmnt) — **CLOSED** without merge.
  - Proposed a plugin transforming Claude into a Socratic mentor that asks guiding questions instead of writing code directly.
  - Interesting pedagogical direction, but closed after 4 months with no merge. Signals that the plugin architecture may still be evolving or that this use-case is out of scope for the current plugin model.

*Note: PR activity was extremely light today (1 total). The low throughput suggests the team may be focused on internal development or a larger upcoming release.*

---

## 5. Feature Request Trends

Distilled from issue labels and community discussion:

1. **Multi-agent orchestration** — Agent-to-Agent protocol across machines ([#28300](https://github.com/anthropics/claude-code/issues/28300)), multi-agent coordination bug post-mortems ([#54393](https://github.com/anthropics/claude-code/issues/54393)), and DevOps subagent reliability ([#65172](https://github.com/anthropics/claude-code/issues/65172)). This is the dominant theme.
2. **Cross-device/session persistence** — Session groups not syncing across devices ([#65177](https://github.com/anthropics/claude-code/issues/65177)), auto-memory failures ([#65173](https://github.com/anthropics/claude-code/issues/65173)). Users expect seamless continuity.
3. **MCP server governance** — Opt-in controls for auto-synced MCP servers ([#20412](https://github.com/anthropics/claude-code/issues/20412)), OAuth fixes for enterprise providers ([#52871](https://github.com/anthropics/claude-code/issues/52871)), and richer write operations in first-party integrations ([#51040](https://github.com/anthropics/claude-code/issues/51040)).
4. **Windows parity** — MSIX install failures ([#59883](https://github.com/anthropics/claude-code/issues/59883)), console window suppression for child processes ([#65171](https://github.com/anthropics/claude-code/issues/65171)). Windows support clearly lags macOS/Linux.
5. **Output quality & model behavior** — Instruction following regressions on Claude 4.8 ([#65178](https://github.com/anthropics/claude-code/issues/65178)), code quality degradation at x-high effort ([#65195](https://github.com/anthropics/claude-code/issues/65195)), sub-agent over-editing configs ([#63356](https://github.com/anthropics/claude-code/issues/63356)).

---

## 6. Developer Pain Points

- **Copy/paste is fundamentally broken.** Issues [#18170](https://github.com/anthropics/claude-code/issues/18170) and [#15199](https://github.com/anthropics/claude-code/issues/15199) (combined 337 👍) describe the same core problem: terminal formatting artifacts corrupt every code block. After 5+ months with no resolution, developers are paying tokens to ask Claude to reformat its own output. This is the community's top frustration.

- **Token waste from preventable errors.** Image processing phantom errors ([#60334](https://github.com/anthropics/claude-code/issues/60334)), auto-compact not triggering ([#65035](https://github.com/anthropics/claude-code/issues/65035)), and auto-memory persistence failures ([#65173](https://github.com/anthropics/claude-code/issues/65173)) all cause unnecessary context rebuilds that consume real budgets. Developers on paid tiers feel this acutely.

- **Content filter false positives block normal usage.** Saying "hi" triggers a Usage Policy error ([#60366](https://github.com/anthropics/claude-code/issues/60366)), and CVP-approved users report being blocked on benign queries ([#61889](https://github.com/anthropics/claude-code/issues/61889)). The filter's aggressiveness is undermining basic reliability.

- **Enterprise/corporate MCP integrations are fragile.** Entra ID OAuth breakage ([#52871](https://github.com/anthropics/claude-code/issues/52871)), OOM from auto-injected servers ([#20412](https://github.com/anthropics/claude-code/issues/20412)), and missing write operations in first-party connectors ([#51040](https://github.com/anthropics/claude-code/issues/51040)) collectively make MCP adoption risky in enterprise environments.

- **Platform gaps on Windows and Android/Termux.** Hardcoded `/tmp` paths ([#15637](https://github.com/anthropics/claude-code/issues/15637)), MSIX install failures ([#59883](https://github.com/anthropics/claude-code/issues/59883)), and flashing console windows ([#65171](https://github.com/anthropics/claude-code/issues/65171)) show non-macOS/Linux platforms are second-class citizens.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-04

## 1. Today's Highlights
The Codex team released two rapid-fire Rust core alpha updates (**v0.137.0-alpha.4** and **v0.137.0-alpha.5**) alongside significant internal PRs focused on hardening CI/CD macOS code signing and managing native HTTP state lifecycles. On the community side, Windows/WSL users are raising the alarm over severe performance bottlenecks, while the removal of the popular `5.3-codex` model in favor of `5.4` is triggering widespread pushback regarding increased costs and degraded quality. 

## 2. Releases
*   **rust-v0.137.0-alpha.5** ([Release](https://github.com/openai/codex/releases/tag/rust-v0.137.0-alpha.5)): Latest alpha iteration.
*   **rust-v0.137.0-alpha.4** ([Release](https://github.com/openai/codex/releases/tag/rust-v0.137.0-alpha.4)): Preceding alpha iteration released earlier in the day.

## 3. Hot Issues

1.  **Missing Context/Token Usage Indicator** ([#23794](https://github.com/openai/codex/issues/23794)): *Closed*. A highly upvoted issue (👍 160) where the UI no longer displays token usage metrics. While officially closed in the tracker, users are actively tracking this to see if it reappears in the upcoming stable releases.
2.  **Highly Requested Linux Desktop App** ([#11023](https://github.com/openai/codex/issues/11023)): *Open*. With 452 upvotes, this remains the most popular enhancement request. The community remains highly engaged (81 comments), waiting for an official Linux native app to escape macOS power-consumption bugs.
3.  **UI Reconnection Loops** ([#14297](https://github.com/openai/codex/issues/14297)): *Closed*. Users reported the app executing 5 "Reconnecting..." loops before generating a response. High comment volume (44) indicates this was a widespread frustration.
4.  **General Unresponsiveness / Slow Speeds** ([#21527](https://github.com/openai/codex/issues/21527)): *Open*. Widespread performance regression reported across both the Desktop App and VS Code extensions.
5.  **Stale App Connector Link on 401** ([#24675](https://github.com/openai/codex/issues/24675)): *Open*. Auth bug where Codex Desktop caches stale connector links (e.g., for Linear) after a reauth event, requiring manual cache clearing to fix. 
6.  **MCP Tools Breaking with Non-OpenAI Providers** ([#26234](https://github.com/openai/codex/issues/26234)): *Open*. Critical for local-model users. MCP tools fail to register when using Codex CLI with Ollama, LM Studio, or OpenRouter due to OpenAI-specific namespace serialization.
7.  **WSL2 Severe Latency / Plugin Scanning** ([#26149](https://github.com/openai/codex/issues/26149)): *Open*. Codex Desktop on Windows + WSL is nearly unusable because the app repeatedly scans `.codex/.tmp/plugins` over the `/mnt/c` bridge, causing massive latency.
8.  **Model Request: Bring Back `5.3-codex`** ([#26183](https://github.com/openai/codex/issues/26183)): *Open*. Developers are unhappy with the forced migration to `5.4`, citing that it is more expensive and less balanced for practical software engineering than `5.3-codex`.
9.  **Rate Limit Drain Discrepancy** ([#26253](https://github.com/openai/codex/issues/26253)): *Open*. Users report rate limits dropping suddenly from 77% to 0% in under a minute, signaling a backend telemetry or billing miscalculation.
10. **Broken Image Rendering** ([#26187](https://github.com/openai/codex/issues/26187)): *Open*. Generated images in the Codex App are currently rendering as broken image placeholders, blocking visual development workflows.

## 4. Key PR Progress

1.  **[CI] Sign macOS release artifacts with Azure Key Vault** ([#26252](https://github.com/openai/codex/pull/26252)): Hardens the CI pipeline by moving the Developer ID private key out of GitHub and using GitHub OIDC with Azure Key Vault for secure code signing.
2.  **Manage native HTTP state lifecycle** ([#26140](https://github.com/openai/codex/pull/26140)): Improves auth flow by defining strict rules for login, token refresh, and logout, ensuring proper cleanup of local HTTP/WebSocket states.
3.  **Prioritize implicit Codex Apps MCP tools** ([#26263](https://github.com/openai/codex/pull/26263)): Normalizes MCP tool loading to properly detect and prioritize implicit links, fixing tool visibility bugs for integrations.
4.  **Workspace Mutation Tools (PR 4 of 6)** ([#25334](https://github.com/openai/codex/pull/25334)): Introduces model tools for changing working directories, crucial for enabling robust stacked-PR and Git-worktree workflows.
5.  **Route AGENTS.md loading through environment filesystems** ([#26205](https://github.com/openai/codex/pull/26205)): Fixes workspace instructions for remote/child agents so they read their `AGENTS.md` files from their actual environment instead of the host filesystem.
6.  **Support v2 personal access tokens** ([#25731](https://github.com/openai/codex/pull/25731)): Implements `at-` opaque token support for `codex login`, enabling distinct handling of modern PATs vs legacy agent JWTs.
7.  **Rewrite oversized tool outputs during remote compaction** ([#26251](https://github.com/openai/codex/pull/26251)): Merged fix that rewrites large outputs instead of deleting them during history compaction, preserving conversation incrementality.
8.  **Multi-agent v2 config cataloging** ([#26254](https://github.com/openai/codex/pull/26254)): Merged feature enabling model metadata to select multi-agent v2 behavior without breaking legacy `agents.max_threads` configurations.
9.  **Expose account token usage to TUI** ([#25345](https://github.com/openai/codex/pull/25345)): Introduces a native `/usage` command to the CLI, allowing users to view token activity inline without leaving their terminal.
10. **Add prompt_writes approval mode** ([#25908](https://github.com/openai/codex/pull/25908)): Merged. Introduces a strict enterprise configuration option to force manual approval specifically for file-modifying actions.

## 5. Feature Request Trends

*   **Model Selection Control:** Users are strongly petitioning for the ability to lock or select specific model versions (specifically requesting the return of `gpt-5.3-codex`), citing that newer models do not universally improve their coding workflows.
*   **Desktop App Expansion:** Demand for a native Linux desktop application remains massive.
*   **Advanced CLI Configuration:** Developers are requesting more granular `config.toml` overrides, such as machine-specific configurations (`[overrides.<machine-name>.<config-key>]`).
*   **Terminal/IDE Integrations:** Requests for tighter integration with terminal emulators, such as iTerm2's OSC 21337 tab-status protocol, to monitor background Codex sessions more effectively.

## 6. Developer Pain Points

*   **Windows/WSL Performance:** Windows users running projects via WSL2 are experiencing severe latency. The Desktop App appears to bottleneck heavily when bridging the Windows/Linux filesystem boundary (specifically scanning `/mnt/c`), whereas running the CLI natively in WSL remains fast.
*   **Rate Limit Opacity and Bugs:** Users are highly frustrated by unpredictable rate limits. Several reports note limits draining exponentially faster than expected or dropping from high percentages to 0% instantly, eroding trust in the usage dashboard.
*   **Third-Party Model Integrations:** Developers attempting to use local LLMs or alternative gateways (Ollama, OpenRouter) are blocked by OpenAI-specific payload structures that silently break MCP tool calling.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-04

## 1. Today's Highlights
Gemini CLI kicks off June with rapid version iterations, releasing **v0.45.0** and **v0.46.0-preview** within the same 24-hour window. The releases heavily focus on core terminal stability—specifically resolving PTY resize native crashes and Termux relaunch loops. Meanwhile, the community and internal maintainers are actively addressing critical agent reliability bottlenecks, including generalist agent hangs, memory system flaws, and a transition to the new **Gemini 3.5 Flash** model family.

## 2. Releases
Three distinct versions were released in the last day, highlighting active patching and preview rollouts:
*   **[v0.45.0](https://github.com/google-gemini/gemini-cli/pull/27642)**: Stable release focusing on shell stability. Fixes a frustrating loop where Termux continuously relaunched and resized, alongside standard version bumps.
*   **[v0.46.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.46.0-preview.0)**: Introduces a crucial patch hardening PTY (Pseudo-Terminal) resize events to prevent native crashes. 
*   **[v0.46.0-preview.1](https://github.com/google-gemini/gemini-cli/pull/27656)**: A fast-follow cherry-pick patch applied to the v0.46.0 preview branch to ensure release stability.

## 3. Hot Issues
Here are the 10 most noteworthy issues currently shaping the Gemini CLI roadmap:

1.  **Generalist agent hangs indefinitely ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409))**: A high-priority bug where the CLI hangs forever when deferring to the generalist agent (even for simple tasks like folder creation). Users have to manually instruct the model to avoid sub-agents as a workaround. (+8 👍)
2.  **Robust component-level evaluations ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353))**: Maintainers are tracking an Epic to expand behavioral evaluation tests across the 6 supported models, ensuring better reliability in future releases.
3.  **AST-aware file reads and mapping ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))**: A major feature investigation exploring AST-aware tools to allow the agent to precisely read method bounds in a single call, reducing token noise and misaligned reads.
4.  **Subagent recovery masks interruptions ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))**: When a subagent hits its `MAX_TURNS` limit, it incorrectly reports `"status: success"`, hiding the fact that the task was actually interrupted and incomplete.
5.  **Agent doesn't utilize custom skills ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968))**: Users are frustrated that the CLI ignores custom skills and sub-agents unless explicitly prompted, severely limiting automated workflows.
6.  **"Waiting input" shell hang ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))**: The UI gets stuck displaying "Awaiting user input" for shell commands that have already finished executing, forcing users to kill the session. (+3 👍)
7.  **Gemini 3.5 Flash login failures ([#27632](https://github.com/google-gemini/gemini-cli/issues/27632))**: A recent influx of users reporting OAuth token exchange failures during "Sign in with Google", resulting in hard blocks on usage.
8.  **Auto Memory retries low-signal sessions indefinitely ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522))**: The Auto Memory system continuously re-surfaces unprocessed, low-signal sessions because the extraction agent skips reading them.
9.  **Browser Agent fails on Wayland ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983))**: The browser subagent consistently fails for Linux users running Wayland display servers.
10. **400 Error with >128 Tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))**: Heavy MCP users are hitting API limits. The CLI encounters a 400 error when context Window exceeds tool limits, highlighting the need for better dynamic tool scoping.

## 4. Key PR Progress
Recent pull requests show a strong focus on security, UI rendering, and next-gen model support:

1.  **[PR #27645](https://github.com/google-gemini/gemini-cli/pull/27645)**: Updates the 'auto' mode to default to **Gemini 3.5 Flash** over the older 3.0 Preview when the user has GA access.
2.  **[PR #27614](https://github.com/google-gemini/gemini-cli/pull/27614)**: Implements foundational support for the Gemini 3.5 Flash model family, introducing `gemini-3.5-flash-preview` and `gemini-3.5-flash-lite-preview`.
3.  **[PR #27659](https://github.com/google-gemini/gemini-cli/pull/27659)**: Mitigates three severe path traversal vulnerabilities in the skill management subsystem (`install`, `link`, `uninstall`).
4.  **[PR #27572](https://github.com/google-gemini/gemini-cli/pull/27572)**: Fixes a regression where CLI incorrectly detected white backgrounds when running inside `tmux`/`mosh`, causing UI theme issues.
5.  **[PR #27619](https://github.com/google-gemini/gemini-cli/pull/27619)**: Fixes "tool not found" errors during network drops by implementing atomic updates for MCP tool discovery, preserving the last known good state.
6.  **[PR #27639](https://github.com/google-gemini/gemini-cli/pull/27639)**: Disables auto-update checks for Google corporate/internal binaries to prevent conflicts in enterprise environments.
7.  **[PR #25786](https://github.com/google-gemini/gemini-cli/pull/25786)**: Enhances the `/copy` command to allow specifying an index (e.g., `/copy 2`) and properly extracts text from MCP tool outputs.
8.  **[PR #27505](https://github.com/google-gemini/gemini-cli/pull/27505)**: Squashes a rendering bug that injected incorrect spacing between wide CJK characters, improving internationalization.
9.  **[PR #21541](https://github.com/google-gemini/gemini-cli/pull/21541)**: Adds fallback logic for `EBUSY` file system errors and recovers gracefully from corrupted TOML parses.
10. **[PR #27570](https://github.com/google-gemini/gemini-cli/pull/27570)**: Safely transitions legacy Flash models to GA behind an experiment flag.

## 5. Feature Request Trends
Analyzing the issue tracker reveals three distinct feature trajectories:
*   **Deep Codebase Awareness**: High demand for AST-aware CLI tools ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)). Users want the agent to map codebases structurally rather than relying on regex, reducing token waste and hallucinations.
*   **Better Background/Remote Agent Control**: Requests for local agents to be backgroundable via shortcuts like `Ctrl+B` ([#22741](https://github.com/google-gemini/gemini-cli/issues/22741)) and epics focused on advanced auth for remote agents ([#20303](https://github.com/google-gemini/gemini-cli/issues/20303)).
*   **Refined Memory & Safety Mechanisms**: Growing requests for deterministic memory redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), mechanisms to prevent destructive `git` commands ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)), and better self-awareness of CLI capabilities ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).

## 6. Developer Pain Points
Developers and end-users are currently expressing frustration with several core stability issues:
*   **UI/Process Deadlocks**: Hangs are the most visible pain point. Whether it's the generalist agent hanging indefinitely ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), the shell stuck waiting for input on completed commands ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), or crashes during `get-shit-done` hooks ([#22186](https://github.com/google-gemini/gemini-cli/issues/22186)), users are frequently forced to kill processes.
*   **Messy Workspace Generation**: When restricted from direct edits, the model frequently litters directories with temporary shell scripts, leaving developers to manually clean up the repo before commits ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).
*   **Hidden Tool Limits & Ghost Permissions**: Users with expansive MCP setups are hitting silent 400 errors due to tool limits ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)). Additionally, agents are executing subroutines without explicit permission ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)), eroding trust in the CLI's autonomous capabilities.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## GitHub Copilot CLI Community Digest — 2026-06-04

### 1. Today's Highlights
No new releases were shipped in the last 24 hours, but the community remains highly active. A critical batch of CJK (Chinese, Japanese, Korean) input rendering and IME bugs were reported today, alongside growing friction over context window limits consumed heavily by MCP servers and enterprise plugins. Several highly-upvoted feature requests—most notably filesystem sandboxing—continue to gain traction.

### 2. Releases
No new releases or patches were published in the last 24 hours. The current active version appears to be `v1.0.59`, which is implicated in multiple newly reported bugs today.

### 3. Hot Issues

1. **[OPEN] Add sandbox mode to restrict file access** ([#892](github/copilot-cli Issue #892))
   - **Why it matters:** The highest-upvoted open issue (👍 49). Users want to constrain the code agent’s filesystem permissions to a specified workspace root to prevent accidental modifications outside the project.
   - **Community reaction:** Strong consensus that this is a critical safety feature for trusting the agent in production environments.

2. **[CLOSED] SHIFT + ENTER should spawn a line break** ([#1481](github/copilot-cli Issue #1481))
   - **Why it matters:** The most-discussed issue (24 comments). Users are frustrated that `SHIFT + ENTER` executes the prompt instead of inserting a newline, defying standard chat application conventions.
   - **Community reaction:** Widespread agreement; developers are annoyed by the deviation from standard UX and accidental premature executions.

3. **[OPEN] System/Tools consume 73% of context window, triggering auto-compaction** ([#3539](github/copilot-cli Issue #3539))
   - **Why it matters:** With multiple MCP servers and plugins configured, the system prompt eats 146k/200k tokens before the user even sends their first message, instantly degrading model performance.
   - **Community reaction:** Users with complex setups are experiencing severe degradation in session memory and tool reliability.

4. **[OPEN] Cannot enter @ on German keyboard (Alt-Gr + q)** ([#1999](github/copilot-cli Issue #1999))
   - **Why it matters:** A critical input bug that effectively renders the CLI unusable for German layout users, as the `@` character is essential for mentions and emails.
   - **Community reaction:** Ongoing frustration over the lack of international keyboard support.

5. **[CLOSED] Paste is not working in GitHub Copilot terminal** ([#1733](github/copilot-cli Issue #1733))
   - **Why it matters:** PowerShell and CMD users report that standard paste commands are broken, inserting garbage strings instead of clipboard contents.
   - **Community reaction:** High disruption to basic developer workflows, particularly for Windows users.

6. **[OPEN] CLI cannot execute hooks shipped with plugins** ([#3659](github/copilot-cli Issue #3659))
   - **Why it matters:** As of `v1.0.57`, preToolUse hooks shipped with plugins are throwing exceptions, completely blocking prompt execution.
   - **Community reaction:** A blocking issue for users relying on enterprise plugin governance and auditing.

7. **[OPEN] Enterprise MCP allowlist schemas exceed token limit → infinite compaction loop** ([#3542](github/copilot-cli Issue #3542))
   - **Why it matters:** Ties into the context window issue (#3539). Enterprise allowlists force persistent compaction loops, making the CLI entirely unstable for enterprise configurations.
   - **Community reaction:** Critical pain point for enterprise compliance workflows.

8. **[CLOSED] CJK characters typed after a Space are invisible in the prompt** ([#3654](github/copilot-cli Issue #3654))
   - **Why it matters:** A regression from the cell-based terminal renderer introduced in `v1.0.55`. Chinese characters typed after spaces are invisible until selected.
   - **Community reaction:** Part of a broader wave of CJK rendering regressions reported today (see also #3648, #3650, #3536).

9. **[CLOSED] Bash tool exit-code sentinel uses bash `$?` syntax in fish** ([#3619](github/copilot-cli Issue #3619))
   - **Why it matters:** The CLI assumes bash for exit-code detection, breaking error handling for `fish` shell users (who use `$status`).
   - **Community reaction:** Highlights a lack of robust cross-shell compatibility.

10. **[OPEN] Strange "Somebody else is owning the clipboard" message** ([#3172](github/copilot-cli Issue #3172))
    - **Why it matters:** A bizarre clipboard-handling bug that breaks terminal layout rendering when copying between applications.
    - **Community reaction:** Users find it confusing and disruptive (👍 5).

### 4. Key PR Progress
*(Note: Only 1 PR was updated in the last 24 hours)*

1. **[OPEN] Create xcopilotcli** ([PR #3651](github/copilot-cli PR #3651)) — Authored by `XavierMP14`.
   - **Summary:** A new structural PR created today. Details and description are currently sparse. Community review is pending.

*(Due to the low volume of PR updates in the last 24 hours, a full 10-PR summary cannot be generated for this period.)*

### 5. Feature Request Trends
- **Sandboxing & Security:** Restricting the agent's filesystem access to a specific working directory remains the dominant feature request ([#892](github/copilot-cli Issue #892)).
- **BYOM (Bring Your Own Model) Expansion:** Users want native support for local inference endpoints like LM Studio, Ollama, and llama.cpp, not just Anthropic configurations ([#3624](github/copilot-cli Issue #3624)).
- **Context Window Management:** Strong demand for better visibility and control over token usage, specifically distinguishing input vs. output token breakdowns ([#3612](github/copilot-cli Issue #3612)) and preventing MCP/plugin definitions from consuming the entire context ([#3539](github/copilot-cli Issue #3539)).
- **Session Management:** Auto-naming terminal sessions based on conversational context to make tab/taskbar navigation easier ([#3645](github/copilot-cli Issue #3645)).
- **Multilingual Voice Input:** Requests for customizable STT models and support for languages beyond English and Spanish, specifically French ([#3656](github/copilot-cli Issue #3656), [#3658](github/copilot-cli Issue #3658)).
- **Agent Flow Improvements:** Auto-switching to the "Auto" model when exiting plan mode to optimize the transition from planning to implementation ([#3660](github/copilot-cli Issue #3660)).

### 6. Developer Pain Points
- **CJK & International Input Regressions:** A localized but severe outbreak of bugs today regarding CJK text rendering (invisible characters, layout corruption) and IME composition (window flickering) on Windows ([#3648](github/copilot-cli Issue #3648), [#3650](github/copilot-cli Issue #3650), [#3654](github/copilot-cli Issue #3654), [#3045](github/copilot-cli Issue #3045)). International keyboards (German layout) are also fundamentally broken ([#1999](github/copilot-cli Issue #1999)).
- **Context Window Bloat:** MCP servers, enterprise schemas, and plugins are silently consuming ~70%+ of the context window, causing immediate auto-compaction and degraded AI memory before the user even begins interacting ([#3539](github/copilot-cli Issue #3539), [#3542](github/copilot-cli Issue #3542)).
- **Windows Platform Instability:** Windows users are disproportionately affected today, facing issues ranging from unbootable uninstallers ([#3662](github/copilot-cli Issue #3662)) and infinite taskbar animations ([#3657](github/copilot-cli Issue #3657)) to corrupted `events.jsonl` files following OS crashes ([#3593](github/copilot-cli Issue #3593)).
- **Keyboard Shortcut Friction:** Developers are continually frustrated by non-standard input bindings (e.g., `SHIFT + ENTER` executing instead of creating a newline, broken `Ctrl+C` in Tmux) and the lack of an `ESC` key binding to interrupt streaming model responses ([#1481](github/copilot-cli Issue #1481), [#3587](github/copilot-cli Issue #3587), [#3607](github/copilot-cli Issue #3607)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-04

## 1. Today's Highlights
No new releases were published in the last 24 hours, but community activity remains highly focused on user experience (UX) and architectural design. A critical architectural flaw was reported regarding session history management: session resumes currently override newly generated system prompts, which prevents skills and configuration updates from taking effect. Additionally, several feature requests indicate a strong community desire for improved web-mode interactions, including a project-based session model and better handling of inline images.

## 2. Releases
*No new releases were recorded in the last 24 hours.*

## 3. Hot Issues
Although only 7 issues were updated today, they highlight significant UX and architectural considerations. Here are the top discussions:

*   **#2420 [OPEN] Session resume overrides system prompt:** A critical bug where resuming an old session uses a stale `_system_prompt` from `context.jsonl`, bypassing new skills and config updates from `load_agent()`. This is a major pain point for long-running projects. 
    🔗 [MoonshotAI/kimi-cli Issue #2420](https://github.com/MoonshotAI/kimi-cli/issues/2420)
*   **#2421 [OPEN] Request for a Project Model:** A proposal to group sessions by "project" in the web UI. The author suggests creating shared memory and database indexing within a project to reduce token consumption across sessions. 
    🔗 [MoonshotAI/kimi-cli Issue #2421](https://github.com/MoonshotAI/kimi-cli/issues/2421)
*   **#2306 [CLOSED] APC protocol playback bug:** A detailed analysis of session history failing to render in both `kimi acp` (Zed integration) and `kimi web` modes after restarts or session switches. 
    🔗 [MoonshotAI/kimi-cli Issue #2306](https://github.com/MoonshotAI/kimi-cli/issues/2306)
*   **#2419 [OPEN] Web UI copy/paste bug:** Users are unable to copy content from code blocks or boxes in the `kimi web` interface running on Windows 11. 
    🔗 [MoonshotAI/kimi-cli Issue #2419](https://github.com/MoonshotAI/kimi-cli/issues/2419)
*   **#2418 [OPEN] Replay mode friction:** A user complaint regarding the `kimi web` experience. The automatic replay upon switching sessions causes noticeable delays, prompting a request to disable or optimize this feature. 
    🔗 [MoonshotAI/kimi-cli Issue #2418](https://github.com/MoonshotAI/kimi-cli/issues/2418)
*   **#1847 [CLOSED] Image/Text block placeholder handling:** A UX enhancement request to treat pasted images and text as single, unified blocks (similar to rival CLIs) so they can be selected or deleted as a whole, rather than character by character. 
    🔗 [MoonshotAI/kimi-cli Issue #1847](https://github.com/MoonshotAI/kimi-cli/issues/1847)
*   **#751 [CLOSED] Execute slash commands immediately:** A UX request to eliminate the need to press "Enter" twice when selecting slash commands from the menu. 
    🔗 [MoonshotAI/kimi-cli Issue #751](https://github.com/MoonshotAI/kimi-cli/issues/751)

## 4. Key PR Progress
*   **#1848 [CLOSED] feat(prompt): edit image and pasted-text placeholders as blocks:** This PR aimed to implement the UX improvements requested in Issue #1847. It intended to refactor the prompt logic so that pasted images and text placeholders are treated as atomic blocks, allowing whole-block deletion and navigation. *Note: The PR was closed without merging.*
    🔗 [MoonshotAI/kimi-cli PR #1848](https://github.com/MoonshotAI/kimi-cli/pull/1848)

*(Note: Only 1 PR was updated in the last 24 hours.)*

## 5. Feature Request Trends
Analyzing recent issues reveals three distinct feature trends:
1.  **Project-Level Context Management:** Users want to move beyond isolated session contexts. Grouping sessions into "Projects" with shared memory and vector indexes is highly desired to save tokens and maintain project-wide continuity.
2.  **Web Client Ergonomics:** There is a strong push to mature the `kimi web` interface. Users are requesting smoother session switching (specifically removing/caching the heavy "replay" loading sequence) and fixing basic UI interactions like copy-pasting generated code.
3.  **Rich Input Refactoring:** Users expect modern CLI/web prompt inputs to handle rich media natively. Treating pasted images and associated text as singular "block" elements is seen as a standard UX requirement for developer tools.

## 6. Developer Pain Points
*   **State Management Conflicts:** The most pressing technical pain point is how Kimi handles state persistence (Issue #2420). Because old system prompts unconditionally override fresh configurations during a session resume, developers cannot seamlessly update skills or prompts without starting completely new sessions.
*   **Web UI Latency:** The mandatory "replay" mechanism in the web client creates high friction. Developers quickly lose patience with the UI hanging to replay history every time they switch context.
*   **Cross-Platform / Cross-Tool Quirks:** Developers working across Linux and Windows (via web) or integrating with editors like Zed (via ACP protocol) are encountering broken histories and basic functional gaps (like copy-pasting text), which disrupts the core coding workflow.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-04

## 1. Today's Highlights

The OpenCode ecosystem saw a surge in architectural development today, headlined by the introduction of new V2 registries for commands and skills aimed at improving extensibility and parity with competing AI coding agents. Performance regressions took center stage in the issue tracker, with community members reporting critical spikes in CPU usage and OpenAI provider timeouts following recent upgrades. Additionally, several new provider integrations and critical security patches indicate a maturing and rapidly expanding platform.

## 2. Releases

No new official releases were published in the last 24 hours.

## 3. Hot Issues

1. **#1505 [CLOSED] - Shift+Enter Keybinding Failure:** With 126 comments and 101 upvotes, this remains an incredibly high-impact bug. Users reported `shift+enter` failing to insert newlines, forcing reliance on `ctrl+j`. The high engagement highlights how critical reliable keybindings are to the TUI editor experience. ([GitHub Link](https://github.com/anomalyco/opencode/issues/1505))
2. **#28996 [OPEN] - Startup Crashes on Debian/Wezterm:** Users are experiencing hard crashes that kill their terminal emulator during initialization. The inability to start the application represents a severe regression for the Linux user base. ([GitHub Link](https://github.com/anomalyco/opencode/issues/28996))
3. **#30086 [OPEN] - Severe CPU Usage Spikes:** A critical performance regression limiting users from running 10+ concurrent sessions down to just 3 without severe system lag. This is currently a major pain point for power users. ([GitHub Link](https://github.com/anomalyco/opencode/issues/30086))
4. **#29548 [OPEN] - OpenAI Provider Header Timeouts:** A regression introduced in `v1.15.11` causing `Provider response headers timed out after 10000ms`. Users have to manually override `headerTimeout`, pointing to an issue with the default HTTP configurations. ([GitHub Link](https://github.com/anomalyco/opencode/issues/29548))
5. **#29992 [OPEN] - Broken Auto-Scroll on Manual Override:** The TUI fails to resume auto-scrolling after a user manually scrolls up to read previous context and returns to the bottom, breaking the continuous reading experience during generation. ([GitHub Link](https://github.com/anomalyco/opencode/issues/29992))
6. **#30125 [CLOSED] - Global MCP Panel Not Rendering:** The UI incorrectly displays "No MCPs configured" despite active global configurations in `opencode.json`. This causes significant confusion for users setting up Model Context Protocol integrations. ([GitHub Link](https://github.com/anomalyco/opencode/issues/30125))
7. **#30616 [CLOSED] - Unauthorized Agent Access Report:** A user reported an AI agent accessing `auth.json` without permission, triggering a security compliance review. This underscores ongoing concerns about filesystem permission boundaries for autonomous agents. ([GitHub Link](https://github.com/anomalyco/opencode/issues/30616))
8. **#16610 [OPEN] - Startup Hang on Low inotify Limits:** OpenCode hangs indefinitely in `.git` repositories if Linux `fs.inotify.max_user_instances` is restricted, lacking proper error fallback or user warnings. ([GitHub Link](https://github.com/anomalyco/opencode/issues/16610))
9. **#24217 [OPEN] - Uninterruptible TUI Loops:** Pressing `ESC` to stop a generation on Windows causes the TUI to enter an infinite loop, completely failing to interrupt the active DeepSeek model process. ([GitHub Link](https://github.com/anomalyco/opencode/issues/24217))
10. **#30618 [OPEN] - Rigid Review Panel Sizing:** The session panel max-width is hardcoded to 45% of the viewport, preventing developers using ultrawide monitors from optimizing their screen real estate. ([GitHub Link](https://github.com/anomalyco/opencode/issues/30618))

## 4. Key PR Progress

1. **PR #30632 - Embedded V2 Session Runtime:** Lays the foundation for an Effect-native embedded runtime, enabling durable prompt admission, execution separation, and replayable session projections for local-first consumers. ([GitHub Link](https://github.com/anomalyco/opencode/pull/30632))
2. **PR #30624 - Core Command Registry:** Introduces a new location-scoped `CommandV2` registry with ordered transforms, normalizing legacy inline command configs into the V2 architecture. ([GitHub Link](https://github.com/anomalyco/opencode/pull/30624))
3. **PR #30617 - Skill Registry and Agent Loading:** Centralizes legacy and V2 Markdown agent definitions into a new core `SkillV2` source registry with directory/URL discovery. ([GitHub Link](https://github.com/anomalyco/opencode/pull/30617))
4. **PR #30623 - OpenAI WebSocket Timeout Fix:** Resolves the widespread OpenAI timeout regression (#29548) by disabling the HTTP-oriented response-header timeout specifically when websocket adapters are utilized. ([GitHub Link](https://github.com/anomalyco/opencode/pull/30623))
5. **PR #30629 - External Command Discovery:** Closes #27972 and #14240 by enabling slash command discovery from external directories like `.agents/commands/` and `.claude/commands/`. ([GitHub Link](https://github.com/anomalyco/opencode/pull/30629))
6. **PR #30488 - Sync Subagent Backgrounding:** Adds a highly requested feature to detach/ promote synchronous task subagents to the background via an experimental API and `ctrl+b` TUI shortcut. ([GitHub Link](https://github.com/anomalyco/opencode/pull/30488))
7. **PR #30620 - Azure OpenAI `xhigh` Effort Fix:** Fixes #24313 by correctly mapping the `xhigh` reasoning effort parameter for versioned Azure GPT-5 models (5.1/5.4/5.5). ([GitHub Link](https://github.com/anomalyco/opencode/pull/30620))
8. **PR #30614 - Desktop URL Protocol Validation:** A critical security fix preventing arbitrary OS command execution (e.g., `file:`, `smb:`, `ms-msdt:`) by validating URL protocols before invoking `shell.openExternal`. ([GitHub Link](https://github.com/anomalyco/opencode/pull/30614))
9. **PR #30630 - Task Variant Preservation:** Ensures that subagents and delegated background tasks correctly inherit and preserve the parent model's specific variant parameters. ([GitHub Link](https://github.com/anomalyco/opencode/pull/30630))
10. **PR #30628 - Removal of Zed Extension:** Cleans up the repository by completely removing the in-repo Zed extension manifest and its automated release/sync workflows. ([GitHub Link](https://github.com/anomalyco/opencode/pull/30628))

## 5. Feature Request Trends

*   **Ecosystem Parity & Extensibility:** There is a strong community push for cross-agent standardization, specifically demanding configurable search paths for commands and agents (Issue #14240, PR #30629) to match conventions from tools like Claude.
*   **Agent Presets:** Users are requesting the ability to configure and save "agent presets" (Issue #29626) to avoid the repetitive manual configuration of subagents across different tasks.
*   **Cloud/Enterprise Provider Integrations:** A consistent demand for out-of-the-box support for enterprise-grade proxy layers and specific cloud endpoints, notably LiteLLM (PR #29937), Snowflake Cortex (PR #29901), and Gab.AI (PR #30622).
*   **Robust Session Management:** Users want more durable session title generation (Issue #29734) and better handling of stream truncations (PR #26167) to prevent silent failures and loss of context.

## 6. Developer Pain Points

*   **Version-Induced Instability:** The recent `v1.15.x` releases have introduced severe operational friction, highlighted by hard terminal crashes at startup (Issue #28996) and unexplained CPU spikes (Issue #30086).
*   **TUI UI Quirks:** The Terminal UI still struggles with core UX workflows. Auto-scrolling fails under manual interruption (Issue #29992), and interruption commands like `ESC` cause infinite loops on Windows (Issue #24217).
*   **Opaque Error Handling:** Developers are frustrated by silent failures, such as MCP configurations not appearing in the UI (Issue #30125) or session titles failing to generate without logging errors (Issue #29734).
*   **Cross-Platform Gaps:** Linux-specific filesystem limits (like `inotify` caps causing hangs, Issue #16610) and the lack of native macOS clipboard fallbacks (Issue #12800) remain persistent thorns for non-Linux/macOS development workflows.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-04

Here is the technical digest for the `earendil-works/pi` repository based on the latest GitHub activity.

## 1. Today's Highlights
Pi's developer community is actively expanding the tool's multi-cloud and vendor ecosystem, with a strong focus on integrating new AI providers like Anthropic Vertex, Amazon Bedrock Mantle, and MiniMax-M3. Under the hood, several critical patches address core performance and stability bottlenecks, including high CPU usage during idle states on large sessions and context-window crashes resulting from uncompressed tool-result images. Notable architectural proposals also seek to introduce workspace approval systems for extensions and native support for MCP structured content.

## 2. Releases
*No new official releases were published in the last 24 hours.*

## 3. Hot Issues
1. **[OPEN] Anthropic provider modifies thinking blocks (#5223)**: Multi-turn conversations using Claude Opus 4.8 with adaptive thinking are failing with 400 errors mid-session because the provider modifies thinking blocks in the latest assistant message. (14 comments, 5 👍)
2. **[OPEN] High idle CPU and syscall rate on large sessions (#5373)**: A critical performance issue where Pi consumes ~24% CPU at idle on sessions with 150k+ tokens due to heavy syscall overhead. (1 comment)
3. **[OPEN] Windows bash detector fails on non-default paths (#5103)**: Git Bash is undetected on Windows if installed outside `C:\Program Files`, breaking shell tool functionality for custom installations. (5 comments)
4. **[OPEN] Improve Vertex + GCP metadata server support (#5323)**: Pi's synchronous check for Vertex authentication misses ephemeral GCP metadata server tokens, requiring suboptimal workarounds. (4 comments)
5. **[OPEN] shift+enter submits instead of creating a new line (#5188)**: Custom keybindings for `shift+enter` fail to trigger a new line, despite `ctrl+j` working with identical configurations. (3 comments)
6. **[OPEN] options.maxTokens silently ignored for opencode-go provider (#5331)**: The `opencode-go` provider maps `maxTokens` to an unsupported `max_completion_tokens` parameter, resulting in incorrect context window limits. (2 comments)
7. **[OPEN] Bash tool truncates command output (#5303)**: Child processes holding `stdout` past exit cause the bash tool to silently truncate command outputs (e.g., during `git commit` with `lint-staged`). (2 comments)
8. **[CLOSED] Tool-result images bypass resize and compaction (#5369)**: Full-resolution images bypass the `resizeImage` budget, eventually causing uncompactable sessions and 413 "prompt too long" loops. (1 comment)
9. **[CLOSED] Phantom follow-up prompts (#5368)**: The agent hallucinates and executes a second, unrelated action immediately after completing a user's actual request. (1 comment)
10. **[CLOSED] Extension tool name collisions abort Pi on startup (#5316)**: If multiple extensions register the same tool name across different `.pi` directories, the CLI hard-crashes via `process.exit(1)`. (3 comments)

## 4. Key PR Progress
1. **[OPEN] feat(ai): add Anthropic Vertex provider (#5262)**: Implements a built-in `anthropic-vertex` provider for running Claude models within Google Cloud Vertex AI by injecting an `AnthropicVertex` SDK client.
2. **[OPEN] feat(config): Approval system for workspaces (#5332)**: Introduces an interactive security approval mechanism for `.pi` and `.pi.user` extension folders on first load to prevent unauthorized code execution.
3. **[OPEN] Add selective pi-ai base entrypoints (#5348)**: Adds side-effect-free `@earendil-works/pi-ai/base` entrypoints to optimize bundling and allow explicit transport registration for custom providers.
4. **[OPEN] fix(coding-agent): add a space between the skill and user messages (#5371)**: Resolves a UI rendering bug where skill custom messages and user text ran together without whitespace.
5. **[CLOSED] fix(coding-agent): recover from request-size overflow by dropping oldest images (#5370)**: Resolves Anthropic 32MB request limits by modifying `isContextOverflow()` to successfully drop oversized images during compaction.
6. **[CLOSED] docs: add containerization guide and Gondolin example (#5356)**: Expands the official documentation with guidance on containerization architectures for Pi environments.
7. **[CLOSED] fix(coding-agent): isolate tool result status background (#5360)**: Corrects a visual glitch where the tool call preview and final result area bled into one another upon completion.
8. **[CLOSED] feat(ai): add ZAI Coding Plan China provider (#5333)**: Adds a localized `zai-coding-cn` provider pointing to the `open.bigmodel.cn` API endpoint for Chinese users.
9. **[CLOSED] fix(ai): remove stale codex models (#5346)**: Cleans up the `openai-codex` provider by removing sunset models (`gpt-5.2` and `gpt-5.3-codex`) that are no longer accessible.
10. **[CLOSED] ai: add custom-header support to Bedrock provider (#5178)**: Brings the AWS Bedrock provider to parity by allowing custom HTTP headers, enabling corporate proxy gateway support.

## 5. Feature Request Trends
*   **Provider & Cloud Expansion**: High demand for localized and specialized AI endpoints, including MiniMax-M3, ZAI Coding Plan China, and Amazon Bedrock Mantle.
*   **Advanced Tool Configuration**: Users want more granular control over their workspace environments, pushing for features like MCP `structuredContent` support and programmatic extension commands via `ctx.runCommand()`.
*   **Session Management UX**: Strong community interest in improving session tree navigation, specifically the ability to delete old branches.
*   **Agent Thinking Parameters**: Requests to expose max-effort AI parameters, such as adding a `"max"` level to the `ThinkingLevel` enum for Anthropic models.

## 6. Developer Pain Points
*   **Context Window & Memory Limits**: Unhandled large payloads (specifically raw screenshots bypassing compaction budgets) frequently crash sessions. Developers using vision/browser tools are highly impacted by resulting 413 errors.
*   **Local Environment Fragility**: Windows users continue to face friction with shell pathing, terminal UI resizing, and Bun/Node.js runtime polyfill mismatches (`webidl.util.markAsUncloneable`).
*   **Timeout & Streaming Truncation**: Local model runners (e.g., Ollama, llama.cpp) experience premature request kills and silent output loss during long-running inference or multi-process bash execution.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-04

## 1. Today's Highlights
Qwen Code officially shipped **v0.17.1**, a quick patch release that addresses a false "compressed turn" rewind error encountered when mid-turn messages are present. The broader v0.17.0 release cycle also introduced a highly requested fix for CJK (Chinese/Japanese/Korean) IME input rendering. Community momentum remains high around daemon stability, standalone installation improvements, and a newly proposed "Dynamic Workflows" multi-agent execution model.

## 2. Releases
*   **[v0.17.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.1)**: Patch release fixing a false "compressed turn" error during message rewinding when mid-turn messages exist.
*   **[v0.17.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.0-preview.0)**: Introduced the core rewind fix and laid the groundwork for recent CLI and UI improvements.

## 3. Hot Issues
1.  **[Unable to add OpenAI-compatible local LLM #3384](https://github.com/QwenLM/qwen-code/issues/3384)**: A highly commented ongoing issue where users struggle to route local vLLM models through the OpenAI-compatible provider setup.
2.  **[Runtime snapshot prefix leaks into settings #4729](https://github.com/QwenLM/qwen-code/issues/4729)**: A severe configuration bug where internal runtime prefixes stack onto `model.name` upon restart, eventually causing 404 "model does not exist" errors.
3.  **[Statusline shows model ID instead of name #4722](https://github.com/QwenLM/qwen-code/issues/4722)**: UI limitation where raw model IDs are displayed. Using the ID as a unique key also breaks multi-key configurations.
4.  **[Feature: Global user-level auto-memory #4747](https://github.com/QwenLM/qwen-code/issues/4747)**: Users request cross-project memory capabilities (similar to Claude's memory) so preferences don't have to be re-learned for every new workspace.
5.  **[Shell commands hang or return no output #4743](https://github.com/QwenLM/qwen-code/issues/4743)**: Sudden regression where shell commands fail to terminate or produce output, severely blocking agent workflows.
6.  **[Daemon parallel subAgent text interleaving (串台) #4687](https://github.com/QwenLM/qwen-code/issues/4687)**: In daemon mode, parallel subAgents (e.g., during `/review`) interleave text chunks, causing garbled output in the UI.
7.  **[Please disable auto-created skills #4714](https://github.com/QwenLM/qwen-code/issues/4714)**: Developers express frustration with hallucinated, auto-generated skills that override custom instructions and cause unpredictable behavior.
8.  **[API Body Timeout Errors for self-hosted models #4711](https://github.com/QwenLM/qwen-code/issues/4711)**: Users running slow local models request configurable body timeouts to prevent crashes at 80-85% generation progress.
9.  **[CJK IME composition appears at the wrong position #3456](https://github.com/QwenLM/qwen-code/issues/3456)**: A critical UX blocker for Asian language users where IME candidate boxes appear on an extra line instead of at the cursor.
10. **[`/manage-model` removed? #4750](https://github.com/QwenLM/qwen-code/issues/4750)**: Users reporting a missing model management UI, causing confusion over how to configure OpenRouter and local models in v16+.

## 4. Key PR Progress
1.  **[fix(rewind): false "compressed turn" error #4626](https://github.com/QwenLM/qwen-code/pull/4626)**: The core merge included in v0.17.1 that stabilizes mid-turn message handling.
2.  **[feat(core): Workflow tool P1 — node:vm sandbox + sequential agent() #4732](https://github.com/QwenLM/qwen-code/pull/4732)**: Implements the first phase of "Dynamic Workflows," allowing model-authored JS scripts to run in a secure sandbox.
3.  **[fix: strip runtime snapshot prefix before persisting model.name #4734](https://github.com/QwenLM/qwen-code/pull/4734)**: Directly counters Issue #4729, preventing configuration corruption on restart.
4.  **[feat(input): move physical cursor to visual cursor for IME #4652](https://github.com/QwenLM/qwen-code/pull/4652)**: Solves the longstanding CJK input bug by ensuring the terminal physical cursor aligns with the visual layout.
5.  **[feat(acp): support desktop qwen integration #4728](https://github.com/QwenLM/qwen-code/pull/4728)**: Expands ACP support to allow seamless connection with desktop GUI clients.
6.  **[fix(daemon): isolate parallel subAgent text streams #4689](https://github.com/QwenLM/qwen-code/pull/4689)**: Resolves the "text garbling" issue by properly isolating stream chunks from parallel subAgents.
7.  **[feat(cli): standalone auto-update support #4629](https://github.com/QwenLM/zwen-code/pull/4629)**: Implements self-updating capabilities for standalone binaries (checking SHA256, atomic replacements).
8.  **[feat(telemetry): daemon OTel metrics #4749](https://github.com/QwenLM/qwen-code/pull/4749)**: Adds 11 OpenTelemetry metric instruments to the daemon to monitor HTTP latency, queue waits, and memory heaps.
9.  **[fix(clipboard): platform-native image paste on Linux #4647](https://github.com/QwenLM/qwen-code/pull/4647)**: Drops a buggy native module in favor of `wl-paste`/`xclip` to fix image pasting in WSL2/Wayland environments.
10. **[chore(integration): merge daemon_mode_b_main into main #4490](https://github.com/QwenLM/qwen-code/pull/4490)**: A massive periodic integration merge syncing F1-F5 daemon features into the main branch.

## 5. Feature Request Trends
*   **Advanced Multi-Agent Workflows**: Heavy demand for orchestrating agents, highlighted by requests to port "Dynamic Workflows" (Issue #4721) and the P1 PR for a `node:vm` sandbox.
*   **Cross-Project Context & Memory**: Users want global rules, instructions, and memories that persist across projects rather than being siloed (Issue #4747, #4723).
*   **Granular CLI & UI Interactions**: Micro-UX improvements are highly requested, such as copying specific historical messages via `/copy N` (Issue #4744) and better terminal scrolling in tmux (Issue #4725).
*   **Self-Hosted Model Flexibility**: Continued demand for better integration with local models, specifically surrounding extended API timeouts (Issue #4711) and fixing provider routing.

## 6. Developer Pain Points
*   **Local / Self-Hosted Model Setup**: Configuring OpenAI-compatible endpoints remains brittle. Timeout limits, missing `/manage-model` commands, and prefix-leaking bugs make using custom models frustrating.
*   **Unwanted Autonomous Behavior**: Developers are increasingly annoyed by the tool auto-creating "skills" that conflict with their established guidelines, requesting an immediate toggle to disable this feature.
*   **Daemon Mode Stability**: While the daemon mode aims to improve performance, developers are currently battling UI latency, garbled text streams from parallel agents, and cold-start delays.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the community digest for DeepSeek-TUI (now CodeWhale) for 2026-06-04.

## 1. Today's Highlights
The project officially solidifies its transition from **DeepSeek-TUI to CodeWhale**, dropping legacy binaries in recent releases while maintaining v0.8.x backward compatibility. The core team and contributors are heavily focused on a massive v0.9.0 roadmap centered around **WhaleFlow** (declarative multi-agent workflows), **Model Lab/Hugging Face integration**, and the new **Agentic Harness Creator**. Meanwhile, recent PR merges indicate rapid stabilization in v0.8.53, specifically resolving multi-provider configuration state issues and enhancing tool surface ergonomics.

## 2. Releases
*   **[v0.8.52](https://github.com/Hmbown/CodeWhale/releases/)**: Continues the project rename to **CodeWhale**. The legacy `deepseek` and `deepseek-tui` binaries now act strictly as deprecation shims that print a warning and forward to the new `codewhale` / `codewhale-tui` binaries. These legacy shims are scheduled for complete removal in v0.9.0.
*   **[v0.8.51](https://github.com/Hmbown/CodeWhale/releases/)**: Tagged as the "Arcee provider, cycle removal, compaction improvements, and community harvest" release, cementing multi-provider support and initial codebase rebranding.

## 3. Hot Issues
1.  **[EPIC: v0.9.0 WhaleFlow branch/leaf workflow mode (#2667)](https://github.com/Hmbown/CodeWhale/issues/2667)**: Outlines the flagship v0.9.0 feature: a typed branch-and-leaf workflow runtime allowing background pods, bounded agent fan-out, and deterministic trace replay.
2.  **[EPIC: Make Hugging Face a first-class surface (#2705)](https://github.com/Hmbown/CodeWhale/issues/2705)**: Proposes deep Hugging Face integration, treating it not just as an OpenAI-compatible endpoint but as a native surface for datasets, Spaces, and model cards.
3.  **[Agentic Harness Creator (#2695)](https://github.com/Hmbown/CodeWhale/issues/2695)**: A highly ambitious request to allow CodeWhale to dynamically observe model behavior, infer failure modes, and auto-generate/perfect model-specific harness profiles.
4.  **[v0.9.0 File Decomposition RFC (#2719)](https://github.com/Hmbown/CodeWhale/issues/2719)**: Addresses technical debt by proposing the breakup of massive files (`config.rs`, `ui.rs`), which currently make provider additions a 15+ file chore.
5.  **[Provider switching state split (#2663)](https://github.com/Hmbown/CodeWhale/issues/2663)**: A critical bug where session settings and persisted config could mix different providers (e.g., MiMo model with Arcee base URL), resulting in broken API calls.
6.  **[First-time initialization failures (#759)](https://github.com/Hmbown/CodeWhale/issues/759)**: The highest-comment open issue (11 comments). Users are frustrated that the TUI fails to guide initial API key setup or generate `config.toml` out-of-the-box.
7.  **[Tool Surface Diet (#2681)](https://github.com/Hmbown/CodeWhale/issues/2681)**: Highlights that the tool catalog has grown too large, confusing lesser-capable models. Proposes a strict deprecation policy for legacy aliases.
8.  **[HarnessProfile schema (#2696)](https://github.com/Hmbown/CodeWhale/issues/2696)**: Lays the groundwork for a new profile registry that separates "how we call the model" (provider) from "how we prompt the model" (posture/context).
9.  **[Auth status lacks multi-provider support (#2716)](https://github.com/Hmbown/CodeWhale/issues/2716)**: `codewhale auth status` currently fails to scope checks to specific providers, making credential management confusing.
10. **[Hugging Face Spaces & Jobs workflows (#2710)](https://github.com/Hmbown/CodeWhale/issues/2710)**: Proposes explicit, user-approved workflows for running evals and demos via HF Spaces directly from the TUI.

## 4. Key PR Progress
1.  **[feat: add WhaleFlow (#2482)](https://github.com/Hmbown/CodeWhale/pull/2482)**: Introduces the new `crates/whaleflow` module for JSON-config-driven sub-agent orchestration with topological scheduling and file-scoped isolation.
2.  **[fix(tui): persist provider switches to config (#2718)](https://github.com/Hmbown/CodeWhale/pull/2718)**: Crucial fix ensuring `/provider` commands persist to `config.toml`, preventing split-state issues like the MiMo/Arcee bug.
3.  **[feat(project): deprecate WHALE.md; add .codewhale/constitution.json (#2688)](https://github.com/Hmbown/CodeWhale/pull/2688)**: Cleans up repo-level instructions by splitting them into `AGENTS.md` and a machine-parseable `.codewhale/constitution.json`.
4.  **[fix(subagent): clearer role vocab & lifecycle signals (#2684)](https://github.com/Hmbown/CodeWhale/pull/2684)**: Normalizes sub-agent role schemas and reduces confusion in the sub-agent lifecycle.
5.  **[feat: support Xiaomi MiMo Token Plan mode (#2627)](https://github.com/Hmbown/CodeWhale/pull/2627)**: Adds native support for Xiaomi MiMo clusters via new provider modes and env variable aliases.
6.  **[feat(agent): classify model families (#2525)](https://github.com/Hmbown/CodeWhale/pull/2525)**: Adds a shared `ModelFamily` primitive to ensure the TUI, desktop, and runtime APIs handle model affordances consistently.
7.  **[fix(tui): make provider key replacement discoverable (#2717)](https://github.com/Hmbown/CodeWhale/pull/2717)**: Adds an inline `r` shortcut in the provider picker UI so users can easily re-enter API keys without leaving the flow.
8.  **[Add configurable path_suffix for OpenAI-compat endpoints (#2558)](https://github.com/Hmbown/CodeWhale/pull/2558)**: Allows users to override API paths (e.g., `/chat/completions`) for strict third-party OpenAI-compatible providers.
9.  **[feat(engine): mode-agnostic system prompt (#2687)](https://github.com/Hmbown/CodeWhale/pull/2687)**: Refactors the system prompt to be strictly mode-agnostic, moving mode instructions to append-only system messages for better prefix caching.
10. **[fix(tui): hide shell prompt guidance when disabled (#2638)](https://github.com/Hmbown/CodeWhale/pull/2638)**: Prevents the TUI from advertising shell tools in the UI when `allow_shell = false` is set in the config.

## 5. Feature Request Trends
*   **Deep Hugging Face Integration**: A massive push to make HF a first-class citizen, moving beyond simple API routing to native Hub browsing, model passport metadata, and Spaces orchestration.
*   **Dynamic Harness Profiles**: The community wants CodeWhale to automatically adapt its prompting/tool strategy based on the specific model being used, evolving these profiles over time via "trace evidence."
*   **Multi-Provider Ergonomics**: As the number of supported LLM providers grows, there is a high demand for smoother credential management, provider-scoped auth commands, and clear status UI.
*   **Tool Surface Minimization ("Diet")**: To improve model reliability, users and core devs are advocating for the removal of legacy/duplicate tool aliases and a leaner, more deterministic tool catalog.

## 6. Developer Pain Points
*   **Multi-Provider Config Split-Brain**: The most prominent operational headache is provider state (Model, Base URL, API key) desyncing between the active session and `config.toml`, causing mixed-provider API errors.
*   **Fragmented Onboarding**: New users continue to struggle with the initialization flow. The TUI fails to reliably generate the `config.toml` or guide users through API key setup on first launch (Issue #759).
*   **Overgrown Tool Schema / Codebase Complexity**: Contributors note that adding a new provider currently requires touching 15+ files due to monolithic code (`config.rs`). Similarly, models occasionally hallucinate tools due to the bloated tool catalog, forcing a necessary refactor in v0.9.0.

</details>