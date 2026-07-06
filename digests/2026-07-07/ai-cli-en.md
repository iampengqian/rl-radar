# AI CLI Tools Community Digest 2026-07-07

> Generated: 2026-07-06 22:23 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the July 7, 2026 community digests.

### 1. Ecosystem Overview
The AI CLI tool ecosystem on July 7, 2026, is characterized by a rapid transition from simple code generators to complex, multi-agent orchestration platforms. Major players like OpenAI Codex, Gemini CLI, and OpenCode are heavily refactoring their core architectures to support durable execution, advanced sandboxing, and native multi-agent routing. Meanwhile, platform-specific friction—such as aggressive safety filters, usage limits, and cross-platform compatibility issues—remains the primary obstacle to enterprise adoption. Developers are now demanding production-grade reliability, demanding stricter guardrails, granular context management, and transparent token consumption tracking over mere baseline coding capabilities.

### 2. Activity Comparison
*Note: The following data reflects activity explicitly logged in the July 7 digests.*

| Tool | Issues Noted | PRs Noted | Release Status | Primary Focus Today |
| :--- | :---: | :---: | :--- | :--- |
| **Claude Code** | 10 | 2 | No new releases | Managing hyper-sensitive safety filters; model routing bugs. |
| **OpenAI Codex** | 10 | 10 | `0.143.0-alpha.37` | Refactoring agent lifecycles; multi-agent telemetry; Linux parity. |
| **Gemini CLI** | 10 | 10 | `v0.51.0-nightly` | Dependency overhaul; fixing infinite loops; AST-aware code navigation. |
| **GitHub Copilot CLI**| 10 | 0 | `v1.0.69-2` | Enterprise configuration; BYOK model support; voice mode fixes. |
| **Kimi Code CLI** | 2 | 0 | No new releases | UI rendering stability; third-party IDE integration (ACP). |
| **OpenCode** | 10 | 10 | `v1.17.14` | v2.0 architecture prep; CodeMode sandbox; database bloat fixes. |
| **Pi** | 10 | 10 | No new releases | LLM provider reliability; TUI bug fixes; strict JSON parsing. |
| **Qwen Code** | 10 | 10 | `v0.19.6-nightly` | Multi-workspace daemons; fixing token drains (zombie sessions). |
| **DeepSeek TUI** | 3 | 6 | v0.8.67 (in-testing)| Staged command refactoring; UTF-8 stability; sub-agent sandboxing. |

### 3. Shared Feature Directions
*   **Advanced Sandboxing & Execution (Codex, Gemini, OpenCode, DeepSeek, Qwen):** Tools are moving beyond basic bash execution. OpenCode and Codex are building "CodeModes" (jitless, sandboxed environments for AI scripts), while Gemini and DeepSeek are pushing for environment-level tool restrictions for sub-agents.
*   **Multi-Agent Routing & Orchestration (Claude, Copilot, Codex, DeepSeek):** There is a massive push to deploy specialized sub-agents. Codex and OpenCode are refactoring event lifecycles to support this, while Claude and Copilot users are actively requesting ways to configure, route, and constrain these agents.
*   **Context Window Management & Compaction (Codex, Gemini, OpenCode, Pi, Qwen):** As sessions grow longer, tools are implementing AST-aware reading (Gemini), strict context budgets for PDFs/files (Qwen), and manual/durable compaction barriers (OpenCode, Codex) to prevent out-of-memory errors and token waste.
*   **Enterprise Security, BYOK, & Config (Copilot, Pi, OpenCode, Codex):** Developers want vendor flexibility. Copilot users are demanding Bring Your Own Key (BYOK) and private endpoints, while Pi is adding native support for routing gateways like Requesty and Doubao.
*   **Tool & Provider Transparency (Claude, OpenAI, OpenCode, Pi):** Communities are rebelling against silent fallbacks. Whether it's Claude downgrading from Opus to Sonnet, OpenAI quietly compacting context, or Pi hallucinating empty tool outputs, developers demand clear visibility into rate limits, cache hits, and model switches.

### 4. Differentiation Analysis
*   **Architecture & Lifecycle:** Codex, Gemini, and OpenCode are undergoing painful but necessary foundational refactors (e.g., canonical event systems, durable execution states) to support next-gen features. In contrast, tools like Claude Code and Copilot CLI are battling higher-level UX and wrapper issues, such as web-to-CLI bridges and voice mode integrations.
*   **Sandboxing Philosophy:** Gemini relies on OS-level restrictions (making `~/.gitconfig` read-only), while OpenCode is building an isolated JavaScript VM (CodeMode with promise chaining). Codex forces its own bundled toolchains (like `pnpm`), causing friction with host environments.
*   **Target Audience:** Copilot CLI is leaning heavily into Enterprise compliance (managed plugins, local models). Pi is positioning itself as the highly customizable, "bring-your-own-provider" tool for power users. Kimi Code is differentiating by exposing telemetry to third-party IDEs via protocols like ACP.

### 5. Community Momentum & Maturity
*   **Hyper-Active Iteration:** OpenAI Codex, Gemini CLI, OpenCode, and Qwen Code show the highest momentum, each merging 10+ PRs and pushing nightly/alpha builds within a 24-hour cycle. They are rapidly building out infrastructure.
*   **Mature Stabilization & Tension:** Claude Code has a massive, highly engaged community (issues with 700+ comments) but is currently bottlenecked by unresolved regressions and safety filter tuning. 
*   **Boutique / Niche Focus:** DeepSeek TUI and Kimi Code have lower volume but are targeting specific technical debts (e.g., command refactoring, internationalization) and ecosystem integrations. GitHub Copilot CLI operates via a closed CI/CD pipeline (0 public PRs), indicating a more guarded, enterprise-first release strategy.

### 6. Trend Signals
*   **The "Guardrail" Backlash is Real:** Overzealous safety filters (Claude's Opus 4.8, OpenCode's Fable 5) and AI "hallucinations of success" (DeepSeek, Pi) are severely breaking developer trust. The industry trend is shifting toward deterministic constraints and strict-mode parsing over autonomous AI judgment.
*   **Token Economics Drive Architecture:** The threat of "zombie sessions" (Qwen), silent auto-compaction (Codex), and unbounded local database growth (OpenCode) is forcing CLI tools to build enterprise-grade telemetry and quota management directly into the terminal UI.
*   **Death of the "Single Agent":** The single LLM thread is obsolete. The industry is decisively moving toward orchestrated "Fleets" or multi-agent systems, which necessitates massive underlying changes to how terminals handle idle states, context isolation, and RPC events.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Based on the data provided, here is the Claude Code Skills community highlights report.

### 1. Top Skills Ranking
While PR comment counts were omitted from the dataset, we can assess the most actively discussed and influential skills by cross-referencing community Issues, bug reports, and update frequencies:

*   **skill-creator** (Meta-Skill)
    *   **Functionality:** The official tool for generating, validating, and optimizing new skills. It includes an automated evaluation loop (`run_loop.py` / `run_eval.py`) to test if skill descriptions trigger correctly.
    *   **Discussion Highlights:** This is currently the most heavily debated component in the ecosystem. Multiple contributors have identified that the evaluation loop returns a `0% recall` error on both Unix and Windows systems, meaning the optimizer is currently running against noise. Furthermore, the community has flagged that the skill's documentation is too verbose and reads like developer docs rather than actionable AI instructions ([Issue #202](https://github.com/anthropics/skills/issues/202)).
    *   **Status:** Open (Active bug fixes pending).
*   **document-typography** ([PR #514](https://github.com/anthropics/skills/pull/514))
    *   **Functionality:** Automatically prevents orphan words, widow paragraphs, and numbering misalignment in AI-generated documents.
    *   **Discussion Highlights:** Highly praised for solving a subtle but ubiquitous issue in AI-generated outputs that users rarely explicitly prompt for.
    *   **Status:** Open.
*   **testing-patterns** ([PR #723](https://github.com/anthropics/skills/pull/723))
    *   **Functionality:** Provides a comprehensive guide for software testing, including the Testing Trophy model, unit testing (AAA pattern), and React component testing.
    *   **Discussion Highlights:** Viewed as a much-needed addition to bridge the gap between code generation and enterprise-grade quality assurance.
    *   **Status:** Open.
*   **color-expert** ([PR #1302](https://github.com/anthropics/skills/pull/1302))
    *   **Functionality:** Self-contained expertise for color spaces (OKLCH, CAM16), naming systems, and contrast optimization.
    *   **Discussion Highlights:** Recognized as a highly specialized, well-structured utility for frontend and design workflows.
    *   **Status:** Open.
*   **sensory** ([PR #806](https://github.com/anthropics/skills/pull/806))
    *   **Functionality:** Enables native macOS automation via AppleScript (`osascript`) instead of relying on screenshot-based computer use.
    *   **Discussion Highlights:** Uses a clever two-tier permission system, sparking conversations about secure, native OS integrations versus graphical UI automation.
    *   **Status:** Open.
*   **self-audit** ([PR #1367](https://github.com/anthropics/skills/pull/1367))
    *   **Functionality:** A universal quality gate that forces the AI to mechanically verify output files (checking for existence) and run a four-dimension reasoning audit before delivering responses.
    *   **Discussion Highlights:** Tackles the ongoing industry problem of AI hallucinations and broken file deliveries, generating significant community interest.
    *   **Status:** Open.

### 2. Community Demand Trends
By analyzing the most active Issues, the community is clearly pushing for capabilities beyond simple document generation:

*   **Skill Discovery & Governance:** There is massive demand for structured organization sharing ([Issue #228](https://github.com/anthropics/skills/issues/228)) and strict security protocols. Users are deeply concerned about trust boundary abuse, where malicious community skills could be disguised under the `anthropic/` namespace ([Issue #492](https://github.com/anthropics/skills/issues/492), [Issue #412](https://github.com/anthropics/skills/issues/412)).
*   **Agent Memory Optimization:** With long-running agentic workflows taking up more context, users are requesting skills like **compact-memory** ([Issue #1329](https://github.com/anthropics/skills/issues/1329)) to convert persistent prose notes into efficient symbolic notation.
*   **MCP Standardization:** Power users want to expose Skills as Model Context Protocol (MCP) servers to create standardized, callable software APIs rather than just markdown instructions ([Issue #16](https://github.com/anthropics/skills/issues/16)).

### 3. High-Potential Pending Skills
These open PRs represent highly valuable, structurally sound additions that are likely to land in the official repository soon:

*   **ODT Skill (OpenDocument Format)** - [PR #486](https://github.com/anthropics/skills/pull/486): Fills a major gap by allowing Claude to create, fill, and convert `.odt` and `.ods` files, supporting open-source enterprise standards.
*   **Skill-Quality-Analyzer & Skill-Security-Analyzer** - [PR #83](https://github.com/anthropics/skills/pull/83): Meta-skills designed to evaluate other skills across five quality dimensions and check for security vulnerabilities before deployment.
*   **SAP-RPT-1-OSS Predictor** - [PR #181](https://github.com/anthropics/skills/pull/181): Integrates SAP's open-source tabular foundation model for predictive analytics, showcasing a strong enterprise use-case.
*   **Frontend-Design Enhancements** - [PR #210](https://github.com/anthropics/skills/pull/210): A highly actionable refinement that rewrites vague frontend instructions into concrete, single-conversation actionables for better UI generation.

### 4. Skills Ecosystem Insight
The community's most concentrated demand at the Skills level right now is to **stabilize the core `skill-creator` evaluation engine and establish strict security namespaces**, ensuring that future skills are reliably triggered, OS-agnostic, and safe for enterprise deployment.

---

Here is the Claude Code community digest for July 7, 2026.

### 1. Today's Highlights
The community activity over the past 24 hours is largely dominated by widespread frustration with hyper-sensitive safety filters on Opus 4.8 and a massive influx of false-positive cybersecurity blocks. Developers are also actively discussing advanced model routing behaviors—specifically how agents handle fallbacks and overrides between Fable 5, Sonnet, and Opus during complex sessions. No new releases were deployed today, leaving several critical bugs and regressions affecting workflows unresolved.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
1. **[#38335](https://github.com/anthropics/claude-code/issues/38335) [BUG] Claude Max plan session limits exhausted abnormally fast since March 23, 2026** *(792 comments, 467 👍)*
A long-standing and highly active thread regarding CLI session limits draining far too quickly. With nearly 800 comments, the community remains highly frustrated by the lack of a resolution for Max plan throttling.
2. **[#66671](https://github.com/anthropics/claude-code/issues/66671) [Bug] Fable 5 model safety measures blocking normal conversation content** *(10 comments)*
Users report that the new Fable 5 model aggressively blocks benign inputs (like saying "Hi"). This highlights ongoing regressions in model safety tuning.
3. **[#73365](https://github.com/anthropics/claude-code/issues/73365) [BUG] Advisor always "unavailable" with Fable 5 advisor (Opus 4.8 main)** *(6 comments, 23 👍)*
When configuring Opus 4.8 as the main model with Fable 5 as an advisor, the advisor consistently fails to load and reports as "unavailable" across all sessions. 
4. **[#48024](https://github.com/anthropics/claude-code/issues/48024) Ultraplan teleport: refined plan does not return to originating CLI session** *(5 comments)*
A critical workflow break: when users refine an `/ultraplan` session on the web, the results no longer teleport back to the originating CLI session, breaking the hybrid web/CLI development loop.
5. **[#72430](https://github.com/anthropics/claude-code/issues/72430) [BUG] Cloud routines have no non-interactive way to trust a project-scoped `.mcp.json`** *(3 comments)*
The recent untrusted-workspace security gate has broken automated cloud routines. Developers have no way to pre-approve project-scoped MCP servers in headless environments.
6. **[#74325](https://github.com/anthropics/claude-code/issues/74325) [Bug] `opusplan` silently falls back to Sonnet during plan mode** *(2 comments)*
Users configuring global `opusplan` modes are encountering a silent downgrade where Claude Code switches to Sonnet without throwing an error or providing a signal to the user.
7. **[#73879](https://github.com/anthropics/claude-code/issues/73879) [Bug] Subagent per-call model overrides not preserved on session resume** *(2 comments)*
Upon resuming a session, explicit subagent model overrides (e.g., forcing a subagent to use Sonnet) are dropped, and `/status` inaccurately reports the overarching session model for all agents.
8. **[#74901](https://github.com/anthropics/claude-code/issues/74901) [Bug][cyber] Safety filter halted session on a frustrated exclamation** *(2 comments)*
Representative of a massive spam of duplicate issues filed today: Opus 4.8's cyber safety filters are aggressively halting authorized work because of user frustration (e.g., cursing) rather than actual technical threats.
9. **[#74931](https://github.com/anthropics/claude-code/issues/74931) [BUG] Chrome extension bridge: account-level single "active worker" evicts idle sessions** *(1 comment)*
A recent regression causing the Chrome extension bridge to enforce a single active worker per account, aggressively evicting scheduled or idle browser sessions (Error code 4090).
10. **[#74939](https://github.com/anthropics/claude-code/issues/74939) Weighted Behavior Training Always Overrides Guardrails** *(3 comments)*
A deeper architectural complaint regarding prompt-level instructions (rules, hooks, agreements) being completely bypassed by model weight-level training priors.

### 4. Key PR Progress
*(Note: Only 2 PRs saw activity in the last 24 hours, both community-driven)*
1. **[#74722](https://github.com/anthropics/claude-code/pull/74722) feat(commit-commands): support Conventional Branch naming in `/commit-push-pr`** *(OPEN)*
Enhances the git workflow by allowing developers to automatically generate Conventional Branch compliant names (`<type>/<description>`) based on diff analysis.
2. **[#74857](https://github.com/anthropics/claude-code/pull/74857) docs: clarify plugin MCP configuration scope** *(CLOSED)*
Documentation update aimed at clarifying the isolation between plugin-bundled `mcpServers` and user-level `~/.claude.json` MCP allow/deny lists to prevent misconfigurations.

### 5. Feature Request Trends
* **Granular Notification Hooks:** Users are requesting built-in, distinct audio alerts for different terminal states—specifically differentiating between "task done" and "needs input/permission prompt" ([#73384](https://github.com/anthropics/claude-code/issues/73384)).
* **Headless Trust Mechanisms:** With the push for CI/CD integration, there is a strong need for non-interactive ways to bypass UI prompts and pre-trust workspace configurations and `.mcp.json` files for cloud routines ([#72430](https://github.com/anthropics/claude-code/issues/72430)).
* **Deep Research Integration:** Requests to expose "Deep Research" capabilities directly within the CLI via a `/research` slash command ([#10124](https://github.com/anthropics/claude-code/issues/10124)).
* **Strict Guardrail Enforcement:** Developers want a reliable architecture to lock agent behaviors so that base model updates or weight priors cannot easily bypass explicit system prompt guardrails ([#74939](https://github.com/anthropics/claude-code/issues/74939)).

### 6. Developer Pain Points
* **Over-Abundant Safety Filters:** The most overwhelming pain point today is Opus 4.8's cyber-safety filter. It is producing massive amounts of false positives, blocking routine tasks like sharing drone ID stickers, reversing proprietary wire formats, or simply reacting to user frustration with an exclamation point ([#74924](https://github.com/anthropics/claude-code/issues/74924), [#74960](https://github.com/anthropics/claude-code/issues/74960), [#74980](https://github.com/anthropics/claude-code/issues/74980)).
* **Model Routing Opacity:** Developers are confused by silent model fallbacks. When the system downgrades from `opusplan` to Sonnet or fails to load an advisor model without explicit errors, it severely degrades trust in agentic workflows ([#74325](https://github.com/anthropics/claude-code/issues/74325), [#73879](https://github.com/anthropics/claude-code/issues/73879)).
* **Update Stability on Windows:** The native Windows auto-updater continues to fail silently, leaving developers trapped on older versions despite successful download confirmations ([#74733](https://github.com/anthropics/claude-code/issues/74733)).
* **Broken UI/Cross-Platform Bridges:** Recent updates have broken fundamental integrations, such as the Chrome extension session management ([#74931](https://github.com/anthropics/claude-code/issues/74931)) and basic clipboard copy/paste functionalities on Linux TUI environments ([#74946](https://github.com/anthropics/claude-code/issues/74946)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the community digest for OpenAI Codex on 2026-07-07.

### 1. Today's Highlights
The Codex ecosystem saw heavy iteration over the past 24 hours, headlined by the release of CLI version `0.143.0-alpha.37` and a massive push to refactor the `core` agent lifecycle into a canonical event system. Developers are actively testing multi-agent and thread-resume architectures, while the community continues to express significant frustration over recurring macOS security alerts and aggressive context compaction burning through usage limits.

### 2. Releases
*   **[rust-v0.143.0-alpha.37](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.37)**
    *   The latest CLI alpha bump continues building out the infrastructure for canonical tool execution and multi-agent telemetry.

### 3. Hot Issues
1.  **[#11023: Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)** - *695 Upvotes, 150 Comments.* The community's demand for a native Linux desktop client remains the most highly requested feature, primarily driven by users trying to escape high power consumption and thermal issues on macOS.
2.  **[#30364: GPT-5.5 reasoning-token clustering](https://github.com/openai/codex/issues/30364)** - *223 Upvotes, 128 Comments.* A critical model-behavior investigation revealing that `gpt-5.5` output tokens disproportionately cluster at specific boundaries (516, 1034, 1552), resulting in degraded reasoning performance on complex tasks. 
3.  **[#8648: Codex replies to earlier messages](https://github.com/openai/codex/issues/8648)** - *55 Upvotes, 87 Comments.* A persistent context bug where the agent hallucinates or responds to previous turns in multi-message conversations instead of the latest prompt.
4.  **[#31033: Context automatically compacted / RUINS SESSIONS](https://github.com/openai/codex/issues/31033)** - *5 Comments.* A critical bug on Windows where Codex aggressively auto-compacts context, ruining long coding sessions and rapidly burning through usage resets.
5.  **[#30440: Codex uses bundled pnpm instead of host toolchain](https://github.com/openai/codex/issues/30440)** - *21 Upvotes, 18 Comments.* Sandbox isolation is breaking local build scripts because Codex forces the use of its bundled package managers rather than respecting the host environment's toolchain.
6.  **[#23195: Mac OS could not open codex because it's malware](https://github.com/openai/codex/issues/23195)** - *17 Upvotes, 16 Comments.* A severe roadblock for Enterprise/Business users where macOS suddenly flags the Codex helper as malware mid-session and blocks execution. 
7.  **[#16933: CLI renders hook additionalContext as visible dev message](https://github.com/openai/codex/issues/16933)** - *14 Comments.* A UI/UX breaking change where background hook contexts are being rendered directly into the developer transcript, cluttering the interface.
8.  **[#28161: Show expiration dates for usage resets](https://github.com/openai/codex/issues/28161)** - *47 Upvotes.* A highly requested quality-of-life enhancement asking OpenAI to display exact expiration timestamps for available rate-limit resets.
9.  **[#31258: Drag-and-drop image causes hard crash](https://github.com/openai/codex/issues/31258)** - *5 Comments.* The macOS desktop app suffers an immediate hard crash when attempting to drag a generated image out of the app and into Finder.
10. **[#29908: apply_patch fails with Bubblewrap on Ubuntu 24.04](https://github.com/openai/codex/issues/29908)** - *8 Comments.* Linux users are completely blocked from running sandboxed tool calls and `apply_patch` due to loopback/userns configuration errors in Bubblewrap.

### 4. Key PR Progress
1.  **[#31296: refactor(protocol): map canonical tool items to legacy events](https://github.com/openai/codex/pull/31296)** - The foundational PR that enables backward compatibility for the new lifecycle mapping, allowing producers to switch to canonical `TurnItem` events seamlessly.
2.  **[#31299: feat(core): emit canonical sub-agent activity items](https://github.com/openai/codex/pull/31299)** - Implements the new event lifecycle for MultiAgentV2, projecting sub-agent activity into legacy events for UI/CLI consumption.
3.  **[#31304: core: make idle thread shutdown atomic](https://github.com/openai/codex/pull/31304)** - A massive stability improvement that gates child-completion and MCP activity on a cancellation-safe lifecycle, preventing premature session terminations.
4.  **[#31282: app-server: reuse loaded threads when resume config matches](https://github.com/openai/codex/pull/31282)** - Optimizes thread resumption by reusing loaded states when configurations match, falling back to a cold-resume only after an atomic idle claim.
5.  **[#31303: feat(code-mode): allow disabling V8 JIT](https://github.com/openai/codex/pull/31303)** - Introduces support for running code-mode in "jitless" mode, a crucial security and stability addition for sandboxed environments.
6.  **[#30202: bundle code mode host in release packages](https://github.com/openai/codex/pull/30202)** - Streamlines deployment by automatically building, signing, and packaging the `codex-code-mode-host` alongside primary release binaries across all OS environments.
7.  **[#31284: Warn when configured service tiers are unsupported](https://github.com/openai/codex/pull/31284)** - Fixes silent fallbacks by explicitly warning developers if their selected model doesn't support their requested `service_tier`, aiding in rate-limit debugging.
8.  **[#30676: telemetry(exec-server): trace Noise virtual streams](https://github.com/openai/codex/pull/30676)** - Part of a massive telemetry overhaul, this PR carries RPC trace context through encrypted streams to measure queueing, framing, and physical send metrics.
9.  **[#31155: fix: release thread writer after failed shutdown](https://github.com/openai/codex/pull/31155)** - Fixes a memory/state leak where a terminal session would report a successful shutdown but leave active writer leases registered in the local store.
10. **[#31266: Stabilize Windows managed proxy ports](https://github.com/openai/codex/pull/31266)** - Resolves Windows sandbox firewall drift by stabilizing the loopback proxy ports used by offline identities.

### 5. Feature Request Trends
*   **Platform Parity & Linux Support:** The overwhelming majority of feature requests center around bringing full feature parity (and a native desktop app) to Linux. 
*   **Better Visibility for Background Operations:** Developers want cleaner separation between agent context and UI, specifically requesting that MCP hooks, temporal awareness tools, and sub-agent activities remain invisible to the transcript while still being trackable via sidebar UI ([#21696](https://github.com/openai/codex/issues/21696), [#31275](https://github.com/openai/codex/issues/31275)).
*   **First-Class CLI Features:** Power users are requesting that features currently locked behind the Desktop app—such as Computer Use ([#20851](https://github.com/openai/codex/issues/20851))—be exposed directly as first-class capabilities in the CLI.
*   **Rate-Limit Transparency:** Users are asking for clear, deterministic visibility into their rate limits, particularly regarding the expiration windows for usage resets.

### 6. Developer Pain Points
*   **macOS Security & Malware False Positives:** Recurring reports of macOS Gatekeeper flagging Codex as malware mid-session continue to severely disrupt workflows, particularly for Business and Pro tier users.
*   **Rate Limits & Aggressive Context Compaction:** Pro and Enterprise users are burning through $200/mo plans remarkably fast. This is exacerbated by bugs causing rapid token consumption, slow responses, and an aggressive auto-compaction system that destroys long-running agent context prematurely.
*   **Sandbox Tooling Isolation:** Codex's sandbox is overly restrictive, often ignoring host toolchains (e.g., forcing bundled `pnpm` or failing Bubblewrap setups on modern Linux kernels), which breaks local build scripts and testing pipelines.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for July 7, 2026.

### 1. Today's Highlights
Gemini CLI rolled out its latest v0.51.0 nightly build alongside a massive dependency overhaul, bumping core libraries like `@google/genai` to v2.10.0. The community and maintainers are heavily focused on enhancing agentic capabilities, evident from new feature implementations like MCP elicitation and critical fixes targeting agent looping, file corruption, and sandbox security.

### 2. Releases
*   **v0.51.0-nightly.20260706.gf7af4e518**: Automated nightly version bump. 
    *   **Full Changelog**: [Compare v0.51.0-nightly.20260705...v0.51.0-nightly.20260706](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260705.gf7af4e518...v0.51.0-nightly.20260706.gf7af4e518)

### 3. Hot Issues
1.  **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent recovery after MAX_TURNS is reported as GOAL success**: A P1 bug where the `codebase_investigator` falsely reports success after hitting the MAX_TURNS limit, hiding execution interruptions from the user.
2.  **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs**: A highly disruptive issue (8 👍) where the CLI hangs indefinitely for up to an hour when deferring simple tasks (like folder creation) to the generalist subagent.
3.  **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell command execution gets stuck**: A core bug where the CLI hangs and falsely displays "Awaiting user input" long after a simple shell command has successfully completed.
4.  **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) Zero-Dependency OS Sandboxing & Post-Execution Intent Routing**: A major feature proposal to leverage Gemini 3's native bash affinity safely without compromising user security or UX.
5.  **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) Assess AST-aware file reads and mapping**: An investigation epic to improve agent efficiency by using AST-aware tools for precise method reading and codebase navigation, reducing token noise.
6.  **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) Robust component-level evaluations**: An infrastructure epic to expand behavioral evaluation tests across the 6 supported Gemini models to catch regressions.
7.  **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini does not use skills and sub-agents enough**: Users report that the model rarely triggers custom skills or subagents autonomously, requiring explicit prompt instructions.
8.  **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Add deterministic redaction for Auto Memory**: A security enhancement request to prevent secrets in local transcripts from reaching the model's context before the LLM attempts to redact them.
9.  **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186) get-shit-done output hook causes crash**: A P1 bug where specific complex agent outputs crash the Gemini CLI entirely during the user summary print phase.
10. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 400 Error with > 128 tools**: An agent scoping issue where enabling too many tools causes API rejections, requesting smarter tool-limit management.

### 4. Key PR Progress
1.  **[PR #28295](https://github.com/google-gemini/gemini-cli/pull/28295) Bump @google/genai from 1.30.0 to 2.10.0**: Major underlying SDK upgrade that will enable new core model features and stability.
2.  **[PR #28089](https://github.com/google-gemini/gemini-cli/pull/28089) Implement MCP elicitation capability**: Adds `form` and `url` elicitation modes to the core MCP client, aligning with the latest Model Context Protocol spec.
3.  **[PR #28164](https://github.com/google-gemini/gemini-cli/pull/28164) Limit recursive reasoning turns**: Protects local CPU and API quotas by enforcing a strict 15-turn limit on recursive agent reasoning per single user request.
4.  **[PR #27971](https://github.com/google-gemini/gemini-cli/pull/27971) Strip thoughts from scrubbed history turns**: Resolves "Thought Leakage" where the model's internal reasoning polluted plain-text history and caused infinite monologue loops.
5.  **[PR #28221](https://github.com/google-gemini/gemini-cli/pull/28221) Make ~/.gitconfig read-only in macOS sandbox**: An important security fix that prevents sandboxed agents from modifying global git configs (blocking potential hooks/pager exploits).
6.  **[PR #28223](https://github.com/google-gemini/gemini-cli/pull/28223) Bypass LLM correction for JSON and IPYNB files**: Fixes a critical bug where `write_file` and `replace` tools corrupted structural files by applying natural language corrections.
7.  **[PR #28216](https://github.com/google-gemini/gemini-cli/pull/28216) Exclude transient CI configs from workspace**: Prevents transient GitHub Actions credential files (`gha-creds-*.json`) from accidentally being read into the agent's context.
8.  **[PR #28299](https://github.com/google-gemini/gemini-cli/pull/28299) Preserve escape sequences in string literals**: Disables aggressive unescaping to stop the CLI from converting literal `\n` or `\t` into actual newlines/tabs when writing code.
9.  **[PR #28068](https://github.com/google-gemini/gemini-cli/pull/28068) Guard message inspectors against empty parts**: Fixes a JavaScript `vacuously true` logic bug that misclassified empty model messages as valid function calls.
10. **[PR #28244](https://github.com/google-gemini/gemini-cli/pull/28244) Update policy engine docs**: Replaces dangerous test commands in the documentation (like `rm -rf /`) with safer alternatives for testing deny rules.

### 5. Feature Request Trends
*   **Advanced Sandboxing & Safety**: Strong demand for zero-dependency OS sandboxing and guardrails that prevent destructive commands (`git reset --force`, DB modifications) without hindering the model's preference for bash.
*   **AST-Aware Code Navigation**: Interest in shifting from raw string-based file reading to Abstract Syntax Tree (AST) mapping. This will allow agents to read specific method bounds precisely, lowering token usage and misaligned reads.
*   **MCP & Elicitation Expansions**: Pushing the CLI to fully support modern MCP specifications, including interactive `form` and `url` elicitation for smoother external tool integrations.
*   **Agent Transparency**: Making agent behavior more visible, such as surfacing subagent trajectories in `/chat share` and including subagent context in `/bug` reports.

### 6. Developer Pain Points
*   **Infinite Loops & Hangs**: The most prevalent frustration is the CLI freezing. Whether it's waiting on the generalist agent, waiting on a completed shell command, or the model getting stuck in "thought monologues", these hangs severely break developer flow.
*   **Poor Subagent Autonomy**: Developers are frustrated that custom skills and subagents are ignored unless explicitly invoked via prompt engineering.
*   **File Corruption via LLM "Corrections"**: The agent overstepping its bounds and corrupting strict syntax files (JSON/Jupyter Notebooks) or messing up escape sequences during writes.
*   **Workspace Pollution**: The agent writing temporary edit scripts in random directories instead of using a centralized temp folder, leaving a messy git workspace behind.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for July 7, 2026.

### 1. Today's Highlights
The community activity over the past 24 hours highlights a strong push toward enterprise configuration and local model integration. A new CLI release (v1.0.69-2) landed, bringing improved OAuth flows for MCP servers and UX fixes for terminal rendering. Meanwhile, developer discussions are heavily focused on plugin management, local/BYOK (Bring Your Own Key) model support, and persistent friction with the voice mode installer and cross-platform hooks.

### 2. Releases
**v1.0.69-2** introduces several UX and functional improvements:
*   **Added:** `/rubber-duck` command is now visible in pre-auth help and self-documentation.
*   **Improved:** MCP servers can now be accessed via the CLI OAuth callback flow; fixed a UI clipping issue where the `/user` switch picker hint bar was hidden below the terminal edge.
*   **Fixed:** Patched an issue related to including files inside `n` (truncated in release notes).

### 3. Hot Issues
Here are the 10 most noteworthy issues updated in the last 24 hours:

*   **[#4003] Support custom model endpoint in Copilot CLI (like VS Code)** | 👍 0 | [Link](github/copilot-cli Issue #4003)
    *Why it matters:* Developers want parity with VS Code, specifically requesting the ability to route Copilot CLI requests to local or private model endpoints for testing and enterprise compliance.
*   **[#3028] MCP permissions** | 👍 5 | [Link](github/copilot-cli Issue #3028)
    *Why it matters:* As MCP server usage grows, the community is requesting granular allowlists (similar to trusted folders) to restrict or permit specific tools for security and sandboxing.
*   **[#3945] Memories are leaking between repositories** | 👍 0 | [Link](github/copilot-cli Issue #3945)
    *Why it matters:* A dangerous context bug where Copilot CLI hallucinates "facts" from previous repositories when initializing a brand new git project, breaking expected context isolation.
*   **[#1428] Bash Tool Incompatible with Nix Shell Environment** | 👍 7 | [Link](github/copilot-cli Issue #1428)
    *Why it matters:* Commands hang for 30+ seconds and crash when executed inside a Nix develop shell, a major blocker for developers using reproducible build environments.
*   **[#3074] Add an `/effort` command to quickly switch reasoning effort** | 👍 6 | [Link](github/copilot-cli Issue #3074)
    *Why it matters:* Users find switching reasoning depth via `/model` too cumbersome. A quick toggle would allow dynamic performance tuning per prompt.
*   **[#4001] `.claude/settings.json` hooks fail on Windows** | 👍 0 | [Link](github/copilot-cli Issue #4001)
    *Why it matters:* Windows compatibility is broken for repo settings; hooks execute via PowerShell instead of Bash, and `$CLAUDE_PROJECT_DIR` fails to resolve, causing all tooling to fail-closed.
*   **[#4034] Hook subprocess stdin write-end left open (no EOF)** | 👍 0 | [Link](github/copilot-cli Issue #4034)
    *Why it matters:* A low-level but highly disruptive bug where tool-use hooks hang indefinitely because the CLI doesn't close the stdin write-end, breaking documented `$(cat)` patterns.
*   **[#4024] Voice mode: bundled ASR models fail silently** | 👍 0 | [Link](github/copilot-cli Issue #4024)
    *Why it matters:* The `/voice` command captures audio successfully, but a routing bug causes all transcriptions to return empty across all three bundled models.
*   **[#3596] Error loading model list: Error: Not authenticated** | 👍 11 | [Link](github/copilot-cli Issue #3596)
    *Why it matters:* Resuming older sessions breaks the auth state, preventing users from listing or switching models via `/model` until they start a completely fresh session.
*   **[#1389] Multi-Agent Workflow System with Collaborative AI Team** | 👍 17 | [Link](github/copilot-cli Issue #1389)
    *Why it matters:* The highest upvoted feature request in this batch, asking for orchestrated multi-agent architecture (e.g., an agent for architecture, another for testing) rather than a single agent.

### 4. Key PR Progress
*Note: There have been 0 public pull requests updated in the last 24 hours. Copilot CLI development appears to be operating via a closed or internal CI/CD pipeline.*

### 5. Feature Request Trends
Based on recent issue tracking, the community is advocating for three major feature directions:
1.  **Model & Provider Flexibility:** Strong demand for BYOK (Bring Your Own Key) and custom endpoints (#4003, #4037). Developers want to route CLI requests to Foundry Local Core, private Azure endpoints, or local LLMs.
2.  **Advanced Plugin & Agent Configuration:** Users are outgrowing global configurations. There is a distinct trend asking for repository/project-scoped plugins (#1665), enterprise-managed plugin marketplaces (#4039), and multi-agent orchestration (#1389).
3.  **Granular Memory & Permissions:** Developers want local-only, agent-initiated memory that respects strict enterprise security policies without leaking context across projects (#2930, #3945, #3028).

### 6. Developer Pain Points
*   **Voice Mode Brittleness:** The new `/voice` feature is experiencing multiple severe regressions. Beyond the silent ASR routing failure (#4024), the voice installer is failing for many users due to unauthorized 401 errors when attempting to fetch `Microsoft.AI.Foundry.Local.Core` from a private feed instead of Nuget (#4035).
*   **Cross-Platform Tooling Breaks:** Windows and Nix developers are running into hard blockers. The enforcement of repo settings hooks fails entirely on Windows due to shell incompatibilities (#4001), and the bash tool hangs indefinitely in Nix shells (#1428).
*   **Plugin UX Quirks:** Routine tasks in the plugin ecosystem are frustrating users. For example, uninstalling a plugin currently triggers AI credit usage just to resolve the `rm` alias to the `uninstall` command, a process users feel should be a standard, free CLI operation (#4032).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the community digest for Kimi Code CLI.

# Kimi Code CLI Community Digest — 2026-07-07

## 1. Today's Highlights
The Kimi Code CLI community experienced a quiet deployment cycle over the last 24 hours with no new releases or merged pull requests. However, the issue tracker highlights a strong demand for deeper ecosystem integration, particularly from developers building custom IDE clients using the Agent Client Protocol (ACP). Meanwhile, core terminal stability remains a priority, as seen in a newly reported UI rendering bug affecting Windows users.

## 2. Releases
*No new releases or version bumps were recorded in the last 24 hours. The CLI remains on version 0.22.0.*

## 3. Hot Issues
*(Note: Based on the 2 issues updated in the last 24 hours)*

*   **Terminal UI Deformation on Windows** 
    *   [Issue #2485](https://github.com/MoonshotAI/kimi-cli/issues/2485) `[bug]`
    *   **Why it matters:** A user on Windows 11 running v0.22.0 reports that prolonged CLI usage causes the terminal UI to become "confused" and clip text, specifically causing the first menu option to disappear. UI rendering bugs directly impact developer productivity and trust in the tool. 
    *   **Community Reaction:** The issue has received initial engagement (1 comment) but requires maintainers to investigate potential memory leaks or state-refresh anomalies in the terminal renderer.

*   **Expose Usage Limits via ACP** 
    *   [Issue #2486](https://github.com/MoonshotAI/kimi-cli/issues/2486) `[enhancement]`
    *   **Why it matters:** A developer building an ACP (Agent Client Protocol) client for Visual Studio 2026 is requesting the ability to programmatically fetch Kimi Code usage limits and reset times. Exposing this data would allow third-party IDE integrations to display native quota warnings, significantly improving the developer experience for Kimi ecosystem partners.
    *   **Community Reaction:** Newly opened with no comments yet, representing an important architectural request for broader IDE interoperability.

## 4. Key PR Progress
*No new pull requests were opened, updated, or merged in the last 24 hours.*

## 5. Feature Request Trends
*   **Third-Party IDE Integration via ACP:** Developers are actively looking to build Kimi Code clients in non-native environments (such as Visual Studio 2026). There is a clear trend of requesting that internal CLI metadata (like token usage, limits, and reset times) be exposed via standard protocols like ACP, allowing seamless integration into external IDE UIs.

## 6. Developer Pain Points
*   **Terminal Rendering Stability:** A primary pain point for CLI users—particularly on Windows environments—is terminal rendering degradation over long sessions. Developers expect robust state management where UI elements (like selection menus) remain stable and fully visible without requiring terminal restarts. 
*   **Opaque Usage Telemetry:** Without programmatic access to rate limits and usage metrics, developers using third-party clients or building wrappers face friction, as they cannot easily surface quota exhaustion states to the end user.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the technical digest for the OpenCode community based on the July 7, 2026 data snapshot.

# OpenCode Community Digest - 2026-07-07

## 1. Today's Highlights
OpenCode rolled out **v1.17.14**, introducing a highly anticipated "code mode" MCP adapter for running confined orchestration scripts, alongside crucial fixes for MCP tool metadata validation. The community is heavily focused on the upcoming **v2.0 architectural overhaul**, evidenced by a flurry of upstream PRs addressing durable execution, plugin lifecycles, and the new CodeMode sandbox. However, the day also brought operational friction, with widespread reports of internal server errors, unbounded database growth, and frustration regarding OpenCode Go subscription billing.

## 2. Releases

### **v1.17.14**
This incremental release sets the stage for deeper agentic workflows while patching critical infrastructure bugs.
* **Core Improvements**: Added a code mode MCP adapter that allows users to run confined orchestration scripts against connected MCP tools. The `execute` tool is now hidden by default unless code mode is explicitly enabled.
* **Bugfixes**: Resolved an issue where paginated MCP tool catalogs lost crucial tool metadata and output schema validation. Preserved truncated output states.

## 3. Hot Issues

1. **[FEATURE] Adjust Go usage limits after DeepSeek V4 Pro price reduction** ([#28846](https://github.com/anomalyco/opencode/issues/28846))
   * **Context**: Following a permanent 75% price drop for the DeepSeek V4 Pro API, the community (82+ 👍) is petitioning OpenCode to proportionally adjust the usage limits for the "Go" subscription tier.
2. **[FEATURE] Allow expanding pasted text (e.g. `[Pasted ~1 lines]`)** ([#8501](https://github.com/anomalyco/opencode/issues/8501))
   * **Context**: With over 200 upvotes, this is a highly requested UI enhancement. Users want the ability to expand and edit text snippets that are automatically summarized by the prompt interface to prevent context bloat.
3. **[BUG] `no such column: name` post-upgrade** ([#31119](https://github.com/anomalyco/opencode/issues/31119))
   * **Context**: Users returning to the platform after updating to 1.16.x/1.17.x are hitting a hard block due to a database schema migration bug. 
4. **[OpenCode Go] GLM-5.2 prompt cache drops to ~500 tokens** ([#33998](https://github.com/anomalyco/opencode/issues/33998))
   * **Context**: A technical deep-dive into the OpenCode Go gateway revealing that the GLM-5.2 prompt cache drops unexpectedly, severely impacting latency and token efficiency for power users.
5. **[BUG] False positive content-filter on `claude-fable-5`** ([#35475](https://github.com/anomalyco/opencode/issues/35475))
   * **Context**: Developer frustration is mounting over guardrails blocking benign queries. Worse, cache writes are still being billed (~$20 lost in one instance) even when output is totally blocked by the filter.
6. **[BUG] Unbounded growth of the `event` table** ([#33356](https://github.com/anomalyco/opencode/issues/33356))
   * **Context**: A critical infrastructure report indicating that the local SQLite store (`opencode.db`) lacks retention policies, causing it to balloon to 13GB+ on long-running instances and crash local volumes.
7. **[BUG] Global config ignored when `.claude/CLAUDE.md` exists** ([#35552](https://github.com/anomalyco/opencode/issues/35552))
   * **Context**: A regression where `instructions` defined in `opencode.jsonc` are silently overridden by Claude-specific files, breaking multi-agent configurations.
8. **[BUG] Prompt leaks between sessions** ([#35587](https://github.com/anomalyco/opencode/issues/35587))
   * **Context**: An alarming privacy/usability bug where executing commands in concurrent independent sessions results in history bleed-over.
9. **[FEATURE] Cross-project session picker** ([#35581](https://github.com/anomalyco/opencode/issues/35581))
   * **Context**: A request to update the TUI `/session` picker to allow users to view and resume sessions globally across all projects, rather than being scoped to the current directory.
10. **[DISCUSSION] The OpenCode funneling scam** ([#34754](https://github.com/anomalyco/opencode/issues/34754))
    * **Context**: High-tension community pushback regarding a confusing UX flow that allegedly "funnels" users into purchasing a "Zen" subscription when they intended to buy "Go". 

## 4. Key PR Progress

1. **[core] Multiple clones of same repo are different projects** ([PR #35311](https://github.com/anomalyco/opencode/pull/35311))
   * Fixes a long-standing project isolation issue, ensuring that multiple clones of the same repository do not clash or overwrite each other's state.
2. **[core/app] Load capped review patches** ([PR #35621](https://github.com/anomalyco/opencode/pull/35621))
   * Introduces lazy loading for review patches omitted by the 10MB aggregate cap, adding literal, file-scoped VCS diff requests to optimize performance.
3. **[core] Finalize session event lifecycle** ([PR #35272](https://github.com/anomalyco/opencode/pull/35272))
   * Major v2.0 refactor flattening tool/provider continuation states. Introduces durable execution states (`started`, `succeeded`, `failed`, `interrupted`).
4. **[core] Add durable compaction barrier** ([PR #35371](https://github.com/anomalyco/opencode/pull/35371))
   * Generalizes session input into a typed durable inbox, allowing manual compaction barriers to block unpromoted queues and execute compaction safely at the wall.
5. **[core] Make path-local instruction discovery durable** ([PR #35497](https://github.com/anomalyco/opencode/pull/35497))
   * Redesigns subdirectory `AGENTS.md` injection. Previously injected as synthetic history (which got lost in compaction), they are now durable, schema-backed events.
6. **[tui] Old messages disappearing during long sessions** ([PR #26861](https://github.com/anomalyco/opencode/pull/26861))
   * Implements lazy-scroll loading in the TUI, fetching the next 50 older messages when the user scrolls within 5px of the top, fixing UI truncation bugs.
7. **[codemode] Support promise chaining** ([PR #35617](https://github.com/anomalyco/opencode/pull/35617))
   * Expands CodeMode capabilities by supporting eager sandbox promise chaining (`then`, `catch`, `finally`) with deferred handler execution.
8. **[codemode] Support loop sequence syntax** ([PR #35618](https://github.com/anomalyco/opencode/pull/35618))
   * Adds support for destructuring assignment targets in `for-of` loops and left-to-right comma expression evaluation within the sandbox.
9. **[tui] Disable diff-viewer keybinds when modals are open** ([PR #34258](https://github.com/anomalyco/opencode/pull/34258))
   * Fixes input collision issues where commands like `ctrl+p` would trigger diff-viewer shortcuts while command palette modals were active.
10. **[core] Ignore attachments in compaction estimates** ([PR #35616](https://github.com/anomalyco/opencode/pull/35616))
    * Fixes compaction estimation logic by projecting the canonical request to text context and ignoring native media/tool-result files to prevent premature context compaction.

## 5. Feature Request Trends

* **Advanced CodeMode & Sandboxing**: With v1.17.14 shipped, there is a massive push to expand CodeMode capabilities. PRs are actively adding complex JavaScript/Promise semantics, mathematical operations, and loop syntax to allow AI to execute localized scripts safely.
* **V2 Durability & Plugin Architecture**: The codebase is undergoing a massive architectural shift. "Durable execution" is the theme of the week, with core maintainers rewriting session lifecycles, compaction barriers, and local file discovery (`AGENTS.md`) to survive state resets.
* **Desktop/TUI Quality of Life**: Developers want finer control over the UI. Popular requests include favoriting/pinning models, expanding auto-summarized pasted text, localized (zh-CN) menu translations, and global cross-project session pickers.

## 6. Developer Pain Points

* **Billing & Guardrail Friction**: Multiple high-comment issues highlight frustration with OpenCode Go subscription gating. Developers report being charged for cache writes on blocked outputs ([#35475](https://github.com/anomalyco/opencode/issues/35475)), hitting usage limits without consuming tokens ([#35568](https://github.com/anomalyco/opencode/issues/35568)), and UI dark patterns regarding Zen vs Go subscriptions.
* **Local Infrastructure Bloat & Migration Bugs**: Returning users are encountering hard crashes due to bad DB migrations ([#31119](https://github.com/anomalyco/opencode/issues/31119)). Furthermore, long-running instances are silently consuming disk space because event tables in the local SQLite DB are never compacted ([#33356](https://github.com/anomalyco/opencode/issues/33356)).
* **Session Isolation Failures**: A critical lack of isolation is impacting developer workflows. Users are seeing prompts leak between active sessions ([#35587](https://github.com/anomalyco/opencode/issues/35587)), and local configuration files are overriding global directives unexpectedly ([#35552](https://github.com/anomalyco/opencode/issues/35552)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for July 7, 2026.

### 1. Today's Highlights
The Pi community was highly active in refining LLM provider interactions and fixing edge-case bugs in the terminal UI (TUI). Key discussions centered around correctly handling Anthropic's newer thinking blocks, preventing token cache double-counting, and improving tool-call strictness. Several impactful provider fixes and extension hooks were also merged to enhance overall agent stability.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community engagement today:

*   **[OPEN] Thinking blocks stripped in newer Claude models** ([#6376](https://github.com/earendil-works/pi/issues/6376)): Users report that Pi is inappropriately removing thinking blocks for Sonnet 5 and Opus 4.7/4.8 because of changes in how the Anthropic API omits thinking text. Maintainers need to update the ingestion logic to support newer model behaviors.
*   **[CLOSED] Cache hit rate denominator double-counts tokens** ([#6355](https://github.com/earendil-works/pi/issues/6355) & [#6353](https://github.com/earendil-works/pi/issues/6353)): A high-impact bug where the footer's Cache Hit % (CH%) was mathematically incorrect. Pi was double-counting cache tokens on top of input tokens (which already include cache reads/writes), leading to inaccurate context window metrics.
*   **[CLOSED] OpenAI Responses API mislabels empty tool results** ([#6103](https://github.com/earendil-works/pi/issues/6103)): A long-standing bug where tools returning empty output (like `grep` finding nothing) were unconditionally labeled as `"(see attached image)"`, causing LLM hallucinations. 
*   **[OPEN] `/fork` spawns extra sessions on Enter** ([#6321](https://github.com/earendil-works/pi/issues/6321)): Pressing Enter multiple times during a fork operation queues up new sessions because the UI selector doesn't close until the async fork process fully completes. 
*   **[OPEN] NVIDIA NIM `ResourceExhausted` not retryable** ([#6364](https://github.com/earendil-works/pi/issues/6364)): Pi's retry pattern doesn't recognize gRPC-based model server errors. Users request adding `ResourceExhausted` to the retryable error patterns to prevent immediate agent crashes.
*   **[CLOSED] Model defs missing `thinkingLevelMap`** ([#6371](https://github.com/earendil-works/pi/issues/6371)): Sonnet 5 and 4.6 definitions were missing explicit mappings, hiding the `xhigh` reasoning tier from the UI picker.
*   **[OPEN] Add `agent_idle` RPC event for extensions** ([#6363](https://github.com/earendil-works/pi/issues/6363)): Extension authors are requesting a better event hook to detect when an agent is fully settled, rather than relying on `agent_end` (which can falsely trigger on mid-run errors).
*   **[CLOSED] TUI segfaults on small-ICU Node builds** ([#6359](https://github.com/earendil-works/pi/issues/6359)): Pi's TUI crashes with a segmentation fault on minimal RHEL containers due to a null dereference in `Intl.Segmenter`, highlighting a need for better headless/minimal-environment support.
*   **[CLOSED] Paste counter bug on backspace** ([#6362](https://github.com/earendil-works/pi/issues/6362)): A UX nit where deleting a multi-line paste marker via backspace doesn't correctly decrement the paste counter for subsequent pastes.
*   **[CLOSED] Doubao provider support request** ([#6328](https://github.com/earendil-works/pi/issues/6328)): A proposal to add Doubao (Volcengine Ark) as a native OpenAI-compatible provider, heavily requested by the developer community using models in China.

### 4. Key PR Progress
Here are the 10 most important Pull Requests updated today:

*   **[MERGED] feat(coding-agent): add `before_provider_headers` extension hook** ([#6350](https://github.com/earendil-works/pi/pull/6350)): Empowers extensions to modify HTTP headers, making it vastly easier to integrate Pi with custom LLM gateways and corporate proxies.
*   **[OPEN] feat(ai): support constrained sampling** ([#6341](https://github.com/earendil-works/pi/pull/6341)): Introduces opt-in JSON-schema constrained sampling (`strict` mode) for tool arguments, forcing the LLM to output valid configurations natively.
*   **[OPEN] fix(ai): stop salvaging malformed tool-call JSON** ([#6285](https://github.com/earendil-works/pi/pull/6285)): A major architectural shift to stop auto-repairing truncated JSON from LLMs. Malformed arguments will now be preserved as raw strings to prevent silent execution failures.
*   **[OPEN] fix(ai,agent): normalize null message content** ([#6343](https://github.com/earendil-works/pi/pull/6343)): Hardens API ingestion boundaries by defensively normalizing missing/null message content arrays, fixing a recurring source of agent loop crashes.
*   **[MERGED] fix(coding-agent): correct cache hit rate denominator** ([#6352](https://github.com/earendil-works/pi/pull/6352)): The official fix for the token double-counting bug reported in the issues, ensuring accurate token usage math.
*   **[MERGED] feat(ai): add Requesty as native provider** ([#5472](https://github.com/earendil-works/pi/pull/5472)): Integrates the Requesty AI gateway natively, allowing users to easily route requests without relying on generic OpenAI-compatible wrappers.
*   **[MERGED] feat(coding-agent): InlineExtension type** ([#6267](https://github.com/earendil-works/pi/pull/6267)): Improves the developer experience for extension writers by adding proper TypeScript support for named inline extension factories.
*   **[MERGED] Improve project-local pi config** ([#6309](https://github.com/earendil-works/pi/pull/6309)): Adds a `-l` flag to `pi config` to directly open project-specific resource configurations, preventing conflicts with global settings.
*   **[MERGED] fix(ai): support GLM-5.2 tool calls** ([#6356](https://github.com/earendil-works/pi/pull/6356)): Resolves missing tool-call deltas in GLM-5.2 streaming responses by falling back to non-streaming chat completions when tools are present.
*   **[MERGED] feat(coding-agent): add tool result limiter extension example** ([#6349](https://github.com/earendil-works/pi/pull/6349)): Adds official documentation/example code for developers looking to cap massive tool outputs before they blow up the LLM context window.

### 5. Feature Request Trends
Based on recent issues, the community is asking for three major categories of features:
1.  **Deeper Extension Lifecycle Control:** Developers want better event hooks (`agent_idle`) and session-scoped overrides (`setModel` without mutating global configs). There is also strong interest in deferring extension loading (lazy/async) to improve startup times.
2.  **Broader Native Provider Support:** High demand for native integrations for regional and enterprise gateways, including Doubao, Requesty, and WebSocket support for Azure OpenAI.
3.  **Advanced Context Management:** Requests for server-side tools (like OpenRouter's web search) and custom commands for `/share` to support non-GitHub workflows.

### 6. Developer Pain Points
*   **LLM Hallucinations from Empty States:** Empty tool outputs were being tagged as images, and malformed JSON was being "best-effort guessed" by Pi, leading to silent failures where the agent assumes success. Developers are pushing for strict-mode parsing.
*   **Model Configuration Drift:** As providers (like Anthropic) update their models to omit thinking blocks or change reasoning tiers, Pi's hardcoded mappings (like `anthropic.models.ts`) are breaking agent flows.
*   **Environment-Specific Crashes:** Linux/X11 clipboard bindings in Bun binaries are silently failing ([#6250](https://github.com/earendil-works/pi/issues/6250)), and minimal Node installations (small-ICU) are causing TUI segfaults, causing friction for backend/server deployments.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for July 7, 2026.

### 1. Today's Highlights
Qwen Code rolled out a new nightly release (`v0.19.6-nightly.20260706`) focusing on automated repository management, including stronger PR triage gates and batch detection. The community was highly active in addressing context window limitations and token consumption, with major patches landing to handle large file reads and PDF extractions safely. Additionally, significant architectural work landed today to support multiple workspaces and optimize daemon performance.

### 2. Releases
*   **[v0.19.6-nightly.20260706.47f62a466](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.6-nightly.20260706.47f62a466)**
    *   Strengthened the PR triage gate with batch detection, problem existence checks, and red flag pattern recognition to improve automated repository health.

### 3. Hot Issues
1.  **[#3203: Qwen OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203)** - A massive ongoing discussion (149 comments) regarding the policy change to reduce the daily free quota to 100 requests/day and the impending complete phase-out of the free tier on July 20.
2.  **[#6378: RFC: Support multiple workspaces in one qwen serve daemon](https://github.com/QwenLM/qwen-code/issues/6378)** - A highly active feature design discussion (19 comments) proposing a shift from the `1 daemon = 1 workspace` model to `1 daemon = N workspaces`.
3.  **[#6144: Incorrect context window calculation](https://github.com/QwenLM/qwen-code/issues/6144)** - Users report context window calculation bugs when configuring custom instances, leading to unexpected model switching and usage limits.
4.  **[#6264: /review skill consumes large amounts of tokens](https://github.com/QwenLM/qwen-code/issues/6264)** - Developers are reporting excessive token consumption when using the automated review skill, impacting API quotas heavily.
5.  **[#5964: Zombie sessions burning tokens (僵尸会话)](https://github.com/QwenLM/qwen-code/issues/5964)** - A critical P1 bug where background agent sessions fail to auto-disconnect, silently draining API balances (e.g., 30M tokens over 8 hours) without proper logging.
6.  **[#6312: Reduce per-session overhead on daemon session-creation](https://github.com/QwenLM/qwen-code/issues/6312)** - Tracking issue for optimizing synchronous I/O operations that degrade performance when spawning new sessions in the ACP child process.
7.  **[#6338: Stabilize tool schema order](https://github.com/QwenLM/qwen-code/issues/6338)** - An architectural fix to enforce deterministic tool declaration order, preventing unnecessary prompt cache misses.
8.  **[#6318: Unable to /rewind after /compress](https://github.com/QwenLM/qwen-code/issues/6318)** - Users are unable to rollback sessions to pre-compression states, breaking expected history navigation workflows.
9.  **[#6246: Self-termination of qwen_code processes](https://github.com/QwenLM/qwen-code/issues/6246)** - A dangerous execution bug where Qwen Code inadvertently kills its own Node.js process when asked to stop a background script.
10. **[#6408: Large PDF reads overflow prompt context](https://github.com/QwenLM/qwen-code/issues/6408)** - Injecting full `pdftotext` output from large documents causes immediate context overflow errors, breaking downstream requests.

### 4. Key PR Progress
1.  **[#6409: fix(core): Gate large PDF text extraction](https://github.com/QwenLM/qwen-code/pull/6409)** - Adds a PDF read budget policy so text-only models receive lightweight references instead of blowing up the prompt context with huge text dumps.
2.  **[#6404: fix(core): Support large text range reads](https://github.com/QwenLM/qwen-code/pull/6404)** - Replaces the hard 10MB file rejection limit with bounded line-range reads, allowing models to safely read large logs and text files.
3.  **[#6410: feat(cli): Add Phase 2a workspace foundation](https://github.com/QwenLM/qwen-code/pull/6410)** - Implements the foundational CLI parsing to support repeating `--workspace` flags, setting the stage for multi-workspace daemons.
4.  **[#6400: feat(web-shell): add Session Overview panel and in-window split view](https://github.com/QwenLM/qwen-code/pull/6400)** - Introduces a "mission control" UI for monitoring and interacting with multiple daemon sessions simultaneously.
5.  **[#6389: feat(scheduled-tasks): run each task in its own dedicated session](https://github.com/QwenLM/qwen-code/pull/6389)** - Isolates scheduled web shell tasks into dedicated, named sessions for better run history and log tracking.
6.  **[#6354: feat(core): add maxSubAgents setting](https://github.com/QwenLM/qwen-code/pull/6354)** - Adds a configuration cap to limit the number of parallel sub-agents, queuing additional requests to prevent system overloading.
7.  **[#6345: fix(cli): smoother streaming table rendering](https://github.com/QwenLM/qwen-code/pull/6345)** - UI polish to prevent flashing and jittering when rendering live markdown tables in the terminal.
8.  **[#6405: fix(cli): use EnvHttpProxyAgent to respect NO_PROXY](https://github.com/QwenLM/qwen-code/pull/6405)** - Resolves a critical networking issue where proxy settings bypassed local `NO_PROXY` exclusions, breaking internal network requests.
9.  **[#6259: feat(daemon): persist session artifacts across restarts](https://github.com/QwenLM/qwen-code/pull/6259)** - Implements V2 persistence for daemon session artifacts, allowing restorable snapshots and tombstone handling across restarts.
10. **[#6377: fix(shell): block kill commands using pgrep](https://github.com/QwenLM/qwen-code/pull/6377)** - Fixes a process execution vulnerability by blocking `pgrep` command substitution patterns that previously allowed the agent to kill its own host process.

### 5. Feature Request Trends
*   **Daemon Multi-Workspaces & Session Management:** There is a strong architectural push to decouple daemon processes from single workspaces. The community wants better session artifact persistence, isolated scheduled tasks, and split-view monitoring for managing multiple agent environments concurrently.
*   **Granular Tool & Context Configuration:** Users are requesting tighter control over how tools behave and consume resources. Proposals include `tools.visible` for immediate LLM access without `tool_search`, `maxSubAgents` to throttle parallel execution, and dedicated `--compaction` models for context compression.
*   **Advanced Memory & Event Hooks:** Requests for smarter memory extraction (e.g., natural language memory intents for channels) and expanded lifecycle hooks (e.g., `PreToolUse` permission decisions) indicate users want deeper programmatic control over agent behaviors.

### 6. Developer Pain Points
*   **Context Window & Token Mismanagement:** Developers are highly frustrated by invisible token drains. "Zombie sessions" burning API balances and large file/PDF reads silently overflowing context windows are major operational risks.
*   **Windows Compatibility & Shell Bugs:** Shell tooling continues to be fragile on Windows. Issues with non-UTF-8 console code pages producing garbled output, and commands failing due to missing Unix tools (like `cat`), remain frequent blockers.
*   **Network & Proxy Configuration:** Enterprise developers are running into strict networking environments where Qwen Code's proxy agent ignores local `NO_PROXY` rules, complicating internal integrations.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the technical community digest for DeepSeek TUI (CodeWhale) for July 7, 2026.

# DeepSeek TUI (CodeWhale) Community Digest
**Date:** 2026-07-07 | **Repository:** [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)

### 1. Today's Highlights
The community focused heavily on CLI robustness and internationalization today, with new merged fixes addressing UTF-8 fuzzy matching panics and localized onboarding flows. A new v0.8.67 release candidate targeting Fleet and Workflow usability was evaluated, though the broader v0.9.0 architecture remains deferred. Meanwhile, core architectural discussions dominated the issues, particularly around enforcing stricter tool sandboxing for sub-agents and refining AI adherence to project "constitutions."

### 2. Releases
*No official new releases were published in the last 24 hours.* However, [PR #4047](https://github.com/Hmbown/CodeWhale/issues/4047) confirms a **v0.8.67** release candidate is currently being fast-tracked to `main`, focusing on Fleet/Workflow usability and retiring legacy "whaleflow" naming conventions.

### 3. Hot Issues
*Note: 3 issues were active in the last 24 hours.*
*   **[#4032 [bug] Codewhale not following the constitution](https://github.com/Hmbown/CodeWhale/issues/4032)** *(21 comments)*: A highly active discussion where users report the AI ignoring established scripts and writing unauthorized temporary ones. Highlights the ongoing struggle with AI context adherence and rule enforcement.
*   **[#4042 [bug, enhancement] feat: Environment-level tool sandboxing for sub-agents](https://github.com/Hmbown/CodeWhale/issues/4042)** *(7 comments)*: A critical feature request to enforce `tool_restrictions` across all execution contexts (sessions, sub-agents, Fleet workers, MCP servers) to prevent unauthorized tool execution.
*   **[#2870 [documentation, v0.9.0, cleanup, tui] EPIC: staged command-boundary refactor](https://github.com/Hmbown/CodeWhale/issues/2870)** *(10 comments)*: An ongoing tracking epic for decoupling command boundaries ahead of the v0.9.0 cutover, ensuring smaller, mergeable layers for the TUI.

### 4. Key PR Progress
*Note: 6 active PRs in the last 24 hours.*
*   **[PR #4047: Release 0.8.67](https://github.com/Hmbown/CodeWhale/issues/4047) [CLOSED]**: Merges the Fleet/Workflow usability release candidate to `main`, officially renaming `whaleflow` to `workflow` and fixing goal-timer bugs.
*   **[PR #4045: [codex] fix edit_file UTF-8 fuzzy cursor panic](https://github.com/Hmbown/CodeWhale/issues/4045) [OPEN]**: Resolves a critical panic where `edit_file` fuzzy matching crashed when slicing through multibyte CJK characters by correcting the normalized cursor advance.
*   **[PR #4044: fix(onboarding): localize dynamic welcome steps](https://github.com/Hmbown/CodeWhale/issues/4044) [OPEN]**: Upgrades the first-run TUI experience by localizing welcome screens and rendering `Next:` steps dynamically based on actual onboarding gates.
*   **[PR #4043: fix(cli): reset SIGPIPE to SIG_DFL](https://github.com/Hmbown/CodeWhale/issues/4043) [OPEN]**: Fixes an annoying crash where piping output into early-exit commands (like `codewhale doctor | head`) caused a "Broken pipe" panic instead of a clean termination.
*   **[PR #4046: Layer 5.1: User command registry and loading boundary](https://github.com/Hmbown/CodeWhale/issues/4046) [CLOSED]**: Verification PR confirming that the user-defined Markdown/frontmatter command boundaries already satisfy acceptance criteria, requiring zero new production code.
*   **[PR #3969: Add per-sub-agent provider routing](https://github.com/Hmbown/CodeWhale/issues/3969) [OPEN]**: Held back intentionally for v0.8.68, this PR introduces execution provider routing for sub-agents, aligning with the upcoming fleet/routing redesign.

### 5. Feature Request Trends
*   **Granular Sandboxing & Routing:** Developers are pushing for environment-level control over AI tools, requesting the ability to restrict tools per sub-agent or Fleet worker (Issue #4042, PR #3969).
*   **Command Architecture Refactoring:** There is a strong drive to clean up legacy command structures (like the "whaleflow" rename) and prepare the TUI for the eventual v0.9.0 cutover via staged refactors (Issue #2870, PR #4046, PR #4047).
*   **Globalization (i18n):** Expanding accessibility through dynamic localization for onboarding flows and multi-byte character support (PR #4044, PR #4045).

### 6. Developer Pain Points
*   **AI Hallucinations & Context Defiance:** Users are frustrated when the AI acts autonomously, bypassing provided project scripts and justifying its own unauthorized workarounds instead of strictly adhering to the established "constitution" (Issue #4032).
*   **CLI Pipeline Stability:** Piping DeepSeek TUI outputs into standard Unix utilities results in hard panics rather than graceful exits, breaking standard developer workflows (PR #4043).
*   **Multi-byte/CJK Instability:** Text manipulation features like `edit_file` remain fragile when handling non-ASCII character sets, causing disruptive crashes during fuzzy matching (PR #4045).

</details>