# AI CLI Tools Community Digest 2026-04-14

> Generated: 2026-04-13 22:12 UTC | Tools covered: 7

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

# AI Developer Tools Ecosystem: Cross-Tool Analysis Report (2026-04-14)

## 1. Ecosystem Overview
The AI CLI tooling landscape is undergoing rapid maturation, shifting from basic prompt-response interfaces to complex, agentic workflows. Today's digests reveal a sector heavily focused on architectural refactoring for better context management, offline/enterprise readiness, and deeper IDE integrations. However, this rapid growth is accompanied by growing pains: billing opacity, context compaction bugs, and cross-platform instability (especially on Windows) are dominant friction points across the board. The ecosystem is currently defined by a tension between aggressive feature expansion (multi-modal, voice, subagents) and the urgent need for core reliability and cost transparency.

## 2. Activity Comparison
*Note: Metrics reflect activity highlighted in the 2026-04-14 community digests.*

| Tool | Maintainer | Release Status | Hot Issues Highlighted | Key PRs Highlighted | Primary Focus Today |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | Anthropic | **v2.1.105** (Shipped) | 10 (High engagement: 574, 1711 👍) | 10 | Cost inflation, MCP OAuth, Opensourcing |
| **OpenAI Codex** | OpenAI | **rust-v0.121.0-alpha.6** (Alpha) | 10 (High engagement: 529 comments) | 10 | App infrastructure, Realtime/Voice, CPU spikes |
| **Gemini CLI** | Google | **v0.37.2** (Patch) | 10 (Enterprise focus) | 10 | Offline support, Context architecture, YOLO mode |
| **GitHub Copilot CLI**| GitHub | **v1.0.25** (Shipped) | 10 (Billing focus) | 0 (Merged prior) | MCP registry, Premium quota drain |
| **Kimi Code CLI** | MoonshotAI | **v1.33.0** (Shipped) | 10 (UX/Session focus) | 10 | Multi-session management, Thinking UI |
| **OpenCode** | Anomaly/Community | **None** (Dev cycle) | 10 (Proxy/Billing focus) | 10 | AppRuntime refactor, Provider compat (LiteLLM) |
| **Qwen Code** | QwenLM | **v0.14.4** (Shipped) | 10 (Perf/CJK focus) | 10 | Startup profiling, Loop detection, CJK support |

## 3. Shared Feature Directions
Despite different maintainers, the communities are driving remarkably similar requirements:

*   **Billing Transparency & Quota Drain:** The most urgent shared pain point. **Claude Code**, **GitHub Copilot CLI**, **OpenAI Codex**, and **OpenCode** all face severe community backlash regarding opaque token consumption. Users are specifically demanding real-time per-request telemetry and visibility into how background agentic loops consume premium quotas.
*   **Advanced Context & Session Management:** All tools are moving beyond single-session limitations. **Qwen Code**, **Kimi Code**, and **GitHub Copilot CLI** are actively implementing session persistence, history rollback, and `/resume` features. Meanwhile, core context handling is being overhauled, seen in **OpenCode's** AppRuntime refactoring and **Gemini CLI's** decoupled ContextManager.
*   **Enterprise & Offline Readiness:** Air-gapped and restricted environments are a priority. **Gemini CLI** is bundling `ripgrep` for offline support, **OpenAI Codex** is introducing agent identity for async enterprise tasks, and tools across the board are addressing strict permission and sandboxing flows.
*   **Windows Platform Parity:** Windows users remain second-class citizens. Critical bugs block adoption across **Claude Code** (secondary drive support), **OpenAI Codex** (HRESULT firewall/sandbox bugs), **OpenCode** (compaction halts), and **Kimi Code** (bash/command mismatches).
*   **MCP & Extensibility:** Model Context Protocol (MCP) is the clear winner for tool integration. **GitHub Copilot CLI** shipped an MCP registry, **Claude Code** is fixing OAuth flows for MCPs, and **OpenCode/Qwen** are refining MCP server compatibility and hook systems.

## 4. Differentiation Analysis
*   **OpenAI Codex** is targeting the standalone desktop application market, heavily investing in its Rust core, voice/realtime audio connections, and custom sandboxing, distancing itself from standard VS Code extension paradigms.
*   **Claude Code** is leaning into high-end, power-user workflows (e.g., git worktree switching, PreCompact hooks), but faces pushback from enterprise users demanding open-source transparency and resolution to high-tier ($200/mo) pricing issues.
*   **Gemini CLI** is uniquely focused on edge-case enterprise stability—prioritizing air-gapped support (Single Executable Applications), strict policy engine overrides (YOLO mode), and AST-aware file mapping to reduce token noise.
*   **GitHub Copilot CLI** differentiates via frictionless setup and native integration into the GitHub ecosystem, highlighted by its MCP registry install feature, though it currently suffers from rigid API validation rules.
*   **OpenCode** acts as the community's open-source, provider-agnostic swiss-army knife. Its development is entirely consumed by fixing proxy compatibility (e.g., LiteLLM, Azure, AWS Kiro) and standardizing multi-provider billing telemetry.
*   **Kimi Code & Qwen Code** are driving massive improvements in internationalization (CJK support, word segmentation) and localized developer experience, competing directly on startup latency and terminal UI fluidity.

## 5. Community Momentum & Maturity
**Claude Code** and **OpenAI Codex** exhibit the highest raw engagement, but their momentum is currently dragged down by scaling and billing controversies (e.g., Claude's 1,700+ upvote issues, Codex's 529-comment token-burning thread). This indicates tools that have successfully captured power users but are struggling with infrastructure trust.

In contrast, **Qwen Code**, **Kimi Code**, and **Gemini CLI** show highly structured, iteration-driven momentum. They are rapidly shipping targeted fixes (CJK support, offline binaries, compact thinking) based on organized P1 issue tracking. **OpenCode** shows the strongest open-source maturity, with coordinated, architectural PRs replacing legacy async facades with robust runtime patterns.

## 6. Trend Signals
1.  **The "Agentic Billing" Crisis is Here:** As tools shift from simple chat to autonomous "YOLO" modes and multi-step subagents, token consumption is spiraling out of control. Providers that do not offer granular, real-time telemetry and configurable agent limits will lose enterprise trust.
2.  **MCP Standardization is Critical:** The industry has rallied around MCP, but the integration is fragile. Issues with dots in filenames, OAuth persistence, and schema validation indicate an urgent need for standardized MCP testing suites.
3.  **Context Compaction is an Unsolved Bottleneck:** Across multiple platforms (notably OpenCode and OpenAI Codex), context summarization/compaction breaks flows, triggers infinite loops, or silently drops context. Better "memory routing" (global vs. project) is the next frontier.
4.  **Developer Recommendation:** Technical decision-makers should delay standardizing teams on $100-$200/mo pro tiers until quota telemetry tools mature. For enterprise deployment in restricted environments, Gemini CLI's offline approach or OpenCode's provider-agnostic architecture currently offer the most stable foundations.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-04-14)

Based on activity data from the official [anthropics/skills](https://github.com/anthropics/skills) repository, here is an analysis of the most significant community activity, emerging trends, and pending developments.

---

## 1. Top Skills Ranking
*Ranked by community engagement, relevance, and functional impact. All listed PRs are currently in an **[OPEN]** state.*

1. **[PR #514 - `document-typography`](https://github.com/anthropics/skills/pull/514)**: Proposes a typographic quality control skill to prevent orphan words, widow paragraphs, and numbering misalignments in AI-generated documents. Addresses a nearly universal pain point for users generating formatted documents.
2. **[PR #486 - `ODT (OpenDocument)` Support](https://github.com/anthropics/skills/pull/486)**: Introduces comprehensive creation, template filling, and parsing capabilities for `.odt` files. Highly demanded for enterprise users relying on LibreOffice and open-standard workflows.
3. **[PR #83 - `skill-quality-analyzer` & `skill-security-analyzer`](https://github.com/anthropics/skills/pull/83)**: Adds two essential "meta-skills" to the marketplace. The quality analyzer evaluates skills across five dimensions, while the security analyzer provides vital safety checks—crucial for ecosystem maturation.
4. **[PR #541 - `DOCX` Tracked Changes Fix](https://github.com/anthropics/skills/pull/541)**: A critical bug fix that prevents document corruption by resolving `w:id` namespace collisions between tracked changes and bookmarks in OOXML files.
5. **[PR #210 - Frontend-Design Skill Improvements](https://github.com/anthropics/skills/pull/210)**: Refines the existing frontend-design skill for better clarity and actionability, ensuring instructions are highly specific and executable within a single conversation context.
6. **[PR #154 - `shodh-memory`](https://github.com/anthropics/skills/pull/154)**: Implements a persistent memory system for AI agents, allowing Claude to maintain context and recall past discoveries across different sessions.
7. **[PR #521 - `record-knowledge`](https://github.com/anthropics/skills/pull/521)**: Similar to `shodh-memory`, this skill allows Claude Code to record workarounds and discovered knowledge in persistent Markdown entries, directly addressing session-to-session context loss.
8. **[PR #806 - `sensory` (macOS Automation)](https://github.com/anthropics/skills/pull/806)**: Replaces screenshot-based computer use with native AppleScript (`osascript`) automation for macOS, utilizing a two-tier permission system for direct app scripting.

---

## 2. Community Demand Trends
*Distilled from highly-trafficked Issues, here are the most anticipated directions for new Skills and infrastructure.*

* **Enterprise & Team Workflows:** There is heavy demand for org-wide infrastructure. ([Issue #228](https://github.com/anthropics/skills/issues/228)) requests direct organization-level skill sharing to replace clunky manual file transfers, while platform stability issues ([Issue #406](https://github.com/anthropics/skills/issues/406)) regarding skill uploads/versions indicate scaling growing pains.
* **Cross-Platform / API Support:** Users are actively seeking ways to deploy Skills beyond the standard Claude Code interface. Notable requests include utilizing Skills via AWS Bedrock ([Issue #29](https://github.com/anthropics/skills/issues/29)) and exposing Skills as MCPs (Model Context Protocol) to create standardized software APIs ([Issue #16](https://github.com/anthropics/skills/issues/16)).
* **Security & Governance:** As the ecosystem grows, so do security concerns. The community is calling for AI agent governance patterns ([Issue #412](https://github.com/anthropics/skills/issues/412)) and addressing trust boundary abuse, where community skills are mistakenly distributed under the official `anthropic/` namespace ([Issue #492](https://github.com/anthropics/skills/issues/492)).
* **Tooling & Evaluation Reliability:** Developers want robust evaluation frameworks. The fact that `run_eval.py` currently yields a 0% skill trigger rate ([Issue #556](https://github.com/anthropics/skills/issues/556)) and requires unusable API keys for SSO users ([Issue #532](https://github.com/anthropics/skills/issues/532)) is a major bottleneck for skill creators.

---

## 3. High-Potential Pending Skills
*Active PRs addressing critical gaps that are likely to be merged soon.*

* **[PR #509 - `CONTRIBUTING.md`](https://github.com/anthropics/skills/pull/509):** Directly addresses the repo's poor community health score by adding clear contribution guidelines—a foundational requirement for scaling open-source submissions.
* **[PR #539 - `skill-creator` YAML Fix](https://github.com/anthropics/skills/pull/539):** Fixes silent YAML parsing failures caused by unquoted special characters in descriptions. Essential for preventing widespread skill creation errors.
* **[PR #538 - PDF Skill Case-Sensitivity Fix](https://github.com/anthropics/skills/pull/538):** Corrects file referencing mismatches that break the PDF skill on case-sensitive operating systems (like Linux).
* **[PR #362 - UTF-8 Validation Fix](https://github.com/anthropics/skills/pull/362):** Resolves Rust panics in the validator when processing multi-byte characters, ensuring global/international usability for skill creation.

---

## 4. Skills Ecosystem Insight
The community's most concentrated demand is shifting from foundational document creation toward **persistent memory, enterprise-grade team sharing, and strict security governance** within the Skills ecosystem.

---

# Claude Code Community Digest — 2026-04-14

---

## 1. Today's Highlights

Claude Code shipped **v2.1.105** with new worktree switching, PreCompact hooks, and background plug monitoring — incremental but meaningful power-user features. The community's dominant conversation continues to be **usage-limit drain and cost inflation**, with multiple high-engagement issues (574 and 386 comments respectively) still awaiting substantive resolution. Meanwhile, the grassroots **"Bring Back Buddy"** campaign (604 👍) signals strong user attachment to removed TUI features.

---

## 2. Releases

### [v2.1.105](https://github.com/anthropics/claude-code/releases/tag/v2.1.105)
- **`EnterWorktree` gains a `path` parameter** — switch directly into an existing worktree without manual git operations, improving multi-branch workflows.
- **PreCompact hook support** — hooks can now block context compaction by exiting with code 2 or returning `{"decision":"block"}`, giving users fine-grained control over when context is summarized.
- **Background monitor support for plug** — enables plug-in background process monitoring.

*(v2.1.104 was also tagged but shipped with an empty changelog.)*

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [#38335](https://github.com/anthropics/claude-code/issues/38335) — **Max plan session limits exhausted abnormally fast since March 23** | 574 comments, 399 👍. The single most-discussed issue. CLI users on paid tiers report drastically reduced session times. Still open with no root-cause fix announced. |
| 2 | [#42796](https://github.com/anthropics/claude-code/issues/42796) — **Claude Code unusable for complex engineering tasks (Feb updates)** | 386 comments, **1,711 👍** — the highest upvote count in the tracker. Closed but emblematic of ongoing model-quality concerns since early 2026. |
| 3 | [#45596](https://github.com/anthropics/claude-code/issues/45596) — **Bring Back Buddy** | 151 comments, 604 👍. Community campaign to restore the `/buddy` companion skill removed silently in v2.1.97. Highlights dissatisfaction with unannounced feature removals. |
| 4 | [#41930](https://github.com/anthropics/claude-code/issues/41930) — **Widespread abnormal usage limit drain across all paid tiers** | 82 comments. Attempts to consolidate the multiple cost/limit reports into a single root-cause analysis. Identifies multiple potential causes, criticizes Anthropic communication. |
| 5 | [#46987](https://github.com/anthropics/claude-code/issues/46987) — **Stream idle timeout — partial response received** | 50 comments, 45 👍. Intermittent API streaming failures disrupting active sessions. Possibly infrastructure-side. |
| 6 | [#46917](https://github.com/anthropics/claude-code/issues/46917) — **v2.1.100+ inflates cache_creation by ~20K tokens vs v2.1.98** | 14 comments, 97 👍. Reproducible A/B comparison showing server-side token inflation tied to User-Agent version routing. Directly impacts cost. |
| 7 | [#45756](https://github.com/anthropics/claude-code/issues/45756) — **Pro Max 5x quota exhausted in 1.5 hours** | 27 comments, 124 👍. Quantifies the limit-drain problem: $200/month tier lasting under 2 hours of moderate use on WSL. |
| 8 | [#47483](https://github.com/anthropics/claude-code/issues/47483) — **Opus 4.6 quality regression — confident but unverified claims** | Reports progressive factual accuracy decline over 100+ sessions. Model increasingly skips tool-based verification. Raises questions about silent model updates. |
| 9 | [#47185](https://github.com/anthropics/claude-code/issues/47185) — **Linear MCP OAuth fails with "Invalid client"** | OAuth flow breaks due to ephemeral loopback port + metadata-URL clientId mismatch. Blocks Linear integration entirely. |
| 10 | [#29583](https://github.com/anthropics/claude-code/issues/29583) — **Cowork cannot use folders outside home directory on Windows** | 94 comments, 119 👍. Multi-drive Windows setups (secondary D:\ drive) are incompatible with Cowork. Long-running unresolved platform gap. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#47554](https://github.com/anthropics/claude-code/pull/47554) — **Fix: MCP OAuth token persistence** | Implements platform-native credential storage (keychain/credential manager) so OAuth tokens survive across sessions. Directly addresses the Supabase/MCP re-auth pain point. |
| 2 | [#47490](https://github.com/anthropics/claude-code/pull/47490) — **feat(hookify): add `ask` action support** | Adds `action: ask` to PreToolUse hooks, enabling interactive approval prompts from custom hook rules. Falls back to warnings on non-interactive hooks. |
| 3 | [#47514](https://github.com/anthropics/claude-code/pull/47514) — **fix(security-guidance): skip doc files for substring checks** | Prevents false-positive security heuristic triggers on documentation/plaintext files while preserving path-based workflow checks. |
| 4 | [#47502](https://github.com/anthropics/claude-code/pull/47502) — **fix(security-guidance): cross-platform Python launcher** | Replaces direct Python invocation with a Node-based launcher that resolves the Python binary path on Windows and Unix, fixing the security-guidance hook on Windows. |
| 5 | [#47178](https://github.com/anthropics/claude-code/pull/47178) — **feat(examples): session auto-title hook** *(CLOSED/merged)* | Adds a `UserPromptSubmit` hook example that auto-injects a title-setting instruction on the first message of each session. Useful utility for session management. |
| 6 | [#41518](https://github.com/anthropics/claude-code/pull/41518) — **Fully Open Source Claude Code** | Extracted 1,906 TypeScript source files from the shipped `cli.js.map`, added Bun build configuration. Symbolic community effort to push for open-sourcing. |
| 7 | [#41447](https://github.com/anthropics/claude-code/pull/41447) — **feat: open source claude code ✨** | Another open-source advocacy PR referencing 5 linked issues. Unlikely to merge but demonstrates sustained community demand. |
| 8 | [#46095](https://github.com/anthropics/claude-code/pull/46095) / [#47421](https://github.com/anthropics/claude-code/pull/47421) — **Claude Mythos / Veriflow immune system** | Repeated submissions of an "operating contract" plugin. Likely AI-generated; no substantive code contribution. |
| 9 | [#38105](https://github.com/anthropics/claude-code/pull/38105) — **WhatsApp channel plugin** *(CLOSED)* | Moved to standalone repo after DMCA takedown on source fork. Demonstrates third-party channel integration interest. |
| 10 | [#47532](https://github.com/anthropics/claude-code/pull/47532) — **Rename marketplace for AgentNXT deployment** | Marketplace/deployment configuration PR; minimal description. Appears to be an external agent framework integration attempt. |

---

## 5. Feature Request Trends

1. **Transparent usage and cost telemetry** — The dominant theme. Users want real-time token accounting, per-request cost breakdowns, and clear documentation of what drives quota consumption (#38335, #41930, #41506, #45756, #46917).

2. **Restoration of removed TUI/skills features** — The `/buddy` removal galvanized users. The community wants deprecated features communicated in changelogs and, ideally, a path to re-enable them (#45596).

3. **Robust MCP OAuth across providers** — OAuth flows are broken for Linear, Supabase, Snowflake, and other MCP servers. Users want persistent token storage, scope configuration, and dynamic client registration support (#38102, #47185, #42419, #47554).

4. **Full Windows/platform parity** — Multi-drive Windows setups, WSL token inflation, and permission persistence gaps remain unresolved. Windows is clearly a second-class citizen (#29583, #43197, #41722, #47071, #12070).

5. **Model choice and context flexibility on Max plans** — Users paying $100–$200/month want Sonnet 4.6 with 1M context (not just Opus) and clarity on whether model quality is being silently throttled (#34773, #42796, #47483, #44015).

6. **Open-sourcing Claude Code** — Persistent community pressure with multiple PRs attempting source extraction and builds (#41447, #41518).

---

## 6. Developer Pain Points

- **Quota drain without explanation is the #1 frustration.** Since late March, users across Pro, Max 5x, and Max 20x tiers report 3–5x faster limit exhaustion with no configuration changes. Anthropic has not issued a formal incident report, and individual issues receive boilerplate responses. This erodes trust among the highest-paying users.

- **Silent model degradation or undisclosed rate-limiting.** Multiple experienced users (#42796, #44015, #47483) report that Opus 4.6 quality drops mid-session or mid-week — shorter responses, skipped tool calls, confident hallucinations. The suspicion is either hidden throttling or silent model swaps, and the lack of transparency amplifies frustration.

- **OAuth is a reliability minefield for MCP integrations.** The MCP ecosystem is a key differentiator for Claude Code, but OAuth flows are broken across major providers (Linear, Snowflake, Supabase). Ephemeral loopback ports, missing refresh tokens, and no persistent credential storage make MCP unusable for auth-protected services.

- **Windows support gaps block enterprise adoption.** Cowork fails on secondary drives, permissions don't persist, statusline binaries don't capture output, and token inflation is worse on WSL. For organizations standardizing on Windows, these are adoption blockers.

- **Changelog silence on removals.** The `/buddy` skill was removed without changelog entry or deprecation notice. Developers who built workflows around it woke up to `Unknown skill: buddy`. This pattern undermines confidence in building on the platform.

---

*Data sourced from [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) on 2026-04-14.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

## OpenAI Codex Community Digest — 2026-04-14

### 1. Today's Highlights
The OpenAI Codex team is making significant internal infrastructure pushes, notably advancing a feature-gated "agent identity" system and introducing realtime text/audio connection modes in the `app-server`. On the community side, performance and CPU utilization continue to be the dominant frustration for VS Code extension users, while Windows Desktop App adoption is exposing multiple UI and sandbox stability bugs.

### 2. Releases
*   **rust-v0.121.0-alpha.6** and **rust-v0.121.0-alpha.4** were released in the last 24 hours. These rapid alpha iterations indicate active foundational development on the Rust core, likely paving the way for the threading, realtime connection, and identity features currently appearing in pull requests.

### 3. Hot Issues

1.  **[OPEN] #14593 [bug, rate-limits] Burning tokens very fast**
    A critical issue for Business tier users where the VS Code extension burns through tokens rapidly. Garnered **200 upvotes** and **529 comments**, making it the most active issue. Users are demanding transparency on background token usage and context compaction.
    URL: `openai/codex Issue #14593`

2.  **[OPEN] #10450 [enhancement, app] Remote Development in Codex Desktop App**
    A highly requested feature (**535 upvotes**, 112 comments) asking for SSH/Remote Dev support in the Desktop App to match standard VS Code workflows.
    URL: `openai/codex Issue #10450`

3.  **[OPEN] #13041 [bug] WebSocket upgrade succeeds then server closes with 1008 Policy**
    A frequent pain point for Linux users experiencing a WebSocket reconnect loop that degrades into HTTPS fallback. Has gathered **114 upvotes** and extensive troubleshooting logs from the community.
    URL: `openai/codex Issue #13041`

4.  **[OPEN] #13476 [bug, mcp, regression] Excessive approval prompts for Playwright MCP**
    A regression in `codex-cli 0.107.0` where users are bombarded with excessive sandbox approval prompts when using Playwright MCP, stalling automated workflows.
    URL: `openai/codex Issue #13476`

5.  **[OPEN] #15764 [bug, extension, regression] Code Helper exceeds 100% CPU**
    A severe regression affecting all VS Code extension versions newer than `26.313.41514`. The renderer process spikes above 100% CPU when applying code patches.
    URL: `openai/codex Issue #15764`

6.  **[OPEN] #16849 [bug, extension] open-in-targets error loop causes high CPU**
    A related CPU spike issue. The webview queries `open-in-targets` every minute, fails, and throws a recurring error loop that locks up the IDE renderer.
    URL: `openai/codex Issue #16849`

7.  **[OPEN] #17644 [bug, sandbox, CLI] Sandbox blocks Metal/GPU IOKit access on macOS**
    Using MLX on an M4 Mac crashes Python subprocesses because `danger-full-access` sandbox mode still blocks GPU IOKit calls, severely limiting local AI dev workflows.
    URL: `openai/codex Issue #17644`

8.  **[OPEN] #17686 [bug, windows-os, sandbox] Windows app sandbox setup fails (HRESULT 0x80070057)**
    A blocking Windows bug where the sandbox fails to build outbound firewall rules on boot, breaking network access for the app.
    URL: `openai/codex Issue #17686`

9.  **[OPEN] #17596 [bug, windows-os, app] "New Thread" is not clickable**
    A significant UI hit-testing bug on Windows 11 preventing users from starting new threads or navigating back to the app when the sidebar is expanded.
    URL: `openai/codex Issue #17596`

10. **[OPEN] #17615 [bug, safety-check] False refusal: "I cannot assist with that request"**
    Users report the CLI (`0.118.0`) triggering false safety rejections on standard development prompts, halting productivity.
    URL: `openai/codex Issue #17615`

### 4. Key PR Progress

1.  **PR #17701: Add realtime connection mode to app-server protocol**
    A massive architectural addition enabling explicit text/audio realtime connections. Modifies `app-server`, core, API, and TUI to emit transcript deltas. Will likely enable voice-driven coding in the near future.
    URL: `openai/codex PR #17701`

2.  **PR #17387 & #17388: Agent Identity & Task Registration**
    Part of a 4-PR stack implementing feature-gated agent identity support. Allows backend authorization via `AgentAssertion` and caches agent tasks per thread, crucial for asynchronous and multi-step agentic workflows.
    URL: `openai/codex PR #17387`

3.  **PR #17373 & #17372: app-server keyed serialization**
    Refactors `MessageProcessor` to handle initialized service RPCs concurrently. Introduces per-key FIFO queues for stateful requests without blocking unkeyed initialized connection RPCs, improving TUI/App responsiveness.
    URL: `openai/codex PR #17373`

4.  **PR #17697 & #17659: Remote Thread Store Bridge**
    Introduces a formal interface and bridge for remote thread storage, signaling an impending move toward seamless state syncing across CLI, App, and extension environments.
    URL: `openai/codex PR #17697`

5.  **PR #17022: Significantly improve standalone installer**
    Revamps the installer to place binaries in versioned subdirectories (`CODEX_HOME/packages/standalone/...`) and replaces the old `codex.js` launcher with a more robust execution mechanism.
    URL: `openai/codex PR #17022`

6.  **PR #17611: Fix Windows CI flake: shell timeout race**
    Resolves a major testing headache where Windows CI falsely classified commands as timed out if the process exited right as the expiration timer fired.
    URL: `openai/codex PR #17611`

7.  **PR #17678: Use stale cloud requirements cache fallback**
    Improves startup resilience for Business/Enterprise accounts by allowing a same-identity signed stale cache to be used if remote loading times out.
    URL: `openai/codex PR #17678`

8.  **PR #15730: Harden symlinked output and project config writes**
    Fixes a security gap in bubblewrap (Linux) where `--output-last-message` paths and `.codex/config.toml` could be exploited via symlinks. Uses `O_NOFOLLOW` to enforce read-only leaf policies.
    URL: `openai/codex PR #15730`

9.  **PR #17674: Route apply_patch through the environment filesystem**
    Decouples `apply_patch` from local self-exec paths, routing it entirely through the sandboxed environment filesystem to ensure safer and more consistent patch applications.
    URL: `openai/codex PR #17674`

10. **PR #17564: Add guardian context to PermissionRequest hooks**
    Improves the agentic permission flow by routing approvals through "guardian" first, passing the advisory context into the `PermissionRequest` hook before prompting the user.
    URL: `openai/codex PR #17564`

### 5. Feature Request Trends

*   **Remote Development Support:** The community heavily desires native SSH/Remote container support in the standalone Desktop App (Issue #10450) to match standard VS Code parity.
*   **Advanced TUI Controls:** Developers are asking for deeper terminal control, specifically configurable hotkeys (Issue #3049), properly formatted Markdown tables for CLI readability (Issue #8259), and a new `/loop` command for recurring automated prompts (Issue #15679).
*   **Context & Project Portability:** Users want the ability to migrate or resume conversation threads when a local project folder is moved to a new path (Issue #11022).
*   **Multimodal Capabilities:** There is continued demand for native image generation and visual asset creation directly within the Codex agent loop (Issue #8758).

### 6. Developer Pain Points

*   **VS Code Extension CPU Overheating:** The most severe recurring complaint is the extension causing extreme CPU spikes (>100%) and physical overheating, particularly on MacBooks. This is traced to renderer bugs during code patching (Issue #15764) and error loops in webview polling (Issue #16849).
*   **Windows App Instability:** The Windows Desktop App is currently plagued by UI hit-testing bugs (where buttons are unclickable), sandbox networking failures (firewall HRESULT errors), and an inability to cleanly close the application (Issues #17596, #17686, #17322).
*   **Aggressive Safety Overrides:** Developers are expressing high frustration over false-positive safety refusals in the CLI, blocking standard coding tasks (Issue #17615).
*   **Rapid Token Depletion:** Business and Pro users are burning through subscription limits far faster than expected, likely due to poor context management or hidden background requests (Issues #14593, #17663).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-14

## 1. Today's Highlights
A quick patch release (**v0.37.2**) went out to address outstanding bugs from the v0.37.1 cycle. The community and core maintainers are heavily focused on **offline support and enterprise readiness**, evidenced by active discussions around bundling `ripgrep` to prevent 2+ minute startup hangs in air-gapped environments. Additionally, maintainers are pushing significant architectural improvements, including decoupled context management, memory routing, and YOLO mode policy fixes.

## 2. Releases
- **[v0.37.2](https://github.com/google-gemini/gemini-cli/releases/tag/v0.37.2)**: A targeted patch that cherry-picks a specific fix into the `v0.37.1` release line to resolve immediate stability issues. 
  *(Full Changelog: [v0.37.1...v0.37.2](https://github.com/google-gemini/gemini-cli/compare/v0.37.1...v0.37.2))*

## 3. Hot Issues
1. **[Failing to download RipGrep slows startup (#25323)](https://github.com/google-gemini/gemini-cli/issues/25323)**: A highly discussed issue where CLI startup waits 2+ minutes if `ripgrep` download fails (e.g., in restricted/air-gapped networks). The community is pushing to bundle `ripgrep` by default.
2. **[CLI crashes on startup with npm EOVERRIDE (#15627)](https://github.com/google-gemini/gemini-cli/issues/15627)**: A long-standing P2 bug causing instant crashes in directories with conflicting `package.json` overrides. 
3. **[Sandbox `~/.gemini` permission denied (#15376)](https://github.com/google-gemini/gemini-cli/issues/15376)**: A P1 bug affecting Podman users, where chat history fails to save inside sandboxes due to `EACCES` errors.
4. **[Shell execution gets stuck "Waiting input" (#25166)](https://github.com/google-gemini/gemini-cli/issues/25166)**: A tricky core bug where the UI hangs after simple CLI commands finish executing, mistakenly thinking user input is needed.
5. **[Repetitive permission prompts for the same file (#24916)](https://github.com/google-gemini/gemini-cli/issues/24916)**: Users report that "allow for all future sessions" sometimes fails to stick, forcing repeated approvals.
6. **[AST-aware file reads and mapping (#22745)](https://github.com/google-gemini/gemini-cli/issues/22745)**: An Epic exploring AST-aware tools to reduce token noise and improve codebase mapping precision.
7. **[Memory routing: Global vs. Project (#22819)](https://github.com/google-gemini/gemini-cli/issues/22819)**: A highly upvoted feature request to separate global user preferences from project-specific memories.
8. **[Gemini CLI encounters 400 error with > 128 tools (#24246)](https://github.com/google-gemini/gemini-cli/issues/24246)**: The CLI fails when context is bloated with too many tools, highlighting the need for better dynamic tool scoping.
9. **[Subagents awareness of Active Approval Modes (#23582)](https://github.com/google-gemini/gemini-cli/issues/23582)**: Subagents currently attempt actions that violate active constraints (like Plan Mode), wasting tokens before being blocked by the Policy Engine.
10. **[Gemini Code Assist Enterprise cannot use Gemini 3 (#15036)](https://github.com/google-gemini/gemini-cli/issues/15036)**: Enterprise users hitting sudden "Requested entity was not found" errors when trying to access newer models.

## 4. Key PR Progress
1. **[feat: bundle ripgrep binaries into SEA for offline support (#25342)](https://github.com/google-gemini/gemini-cli/pull/25342)**: Directly addresses the startup hang by packaging `ripgrep` directly into the Single Executable Application (SEA) for air-gapped environments.
2. **[fix(core): prevent YOLO mode from being downgraded (#25341)](https://github.com/google-gemini/gemini-cli/pull/25341)**: Critical security/UX fix stopping the policy engine from downgrading YOLO mode to `ASK_USER` based on heuristics.
3. **[perf(core): improve memory management for large tool output (#20406)](https://github.com/google-gemini/gemini-cli/pull/20406)**: Mitigates V8 Out of Memory (OOM) errors by writing massive shell command outputs to disk instead of keeping them in memory.
4. **[feat(core): introduce decoupled ContextManager and Sidecar architecture (#24752)](https://github.com/google-gemini/gemini-cli/pull/24752)**: Major architectural refactor introducing a sidecar pattern for context management, improving agent context handling.
5. **[improve(core): require recurrence evidence before extracting skills (#25147)](https://github.com/google-gemini/gemini-cli/pull/25147)**: Tightens the skill extraction agent so it doesn't automatically create skills for one-off incidents.
6. **[feat(cli): add ACP host input requests (#24664)](https://github.com/google-gemini/gemini-cli/pull/24664)**: Allows ACP clients to handle `ask_user` and `exit_plan_mode` flows directly, improving non-interactive host integrations.
7. **[fix(telemetry): implement bounded structural truncation (#25136)](https://github.com/google-gemini/gemini-cli/pull/25136)**: Prevents JSON parsing errors and OOM crashes from massive telemetry payloads.
8. **[fix(core): prevent secondary crash in ModelRouterService finally block (#25333)](https://github.com/google-gemini/gemini-cli/pull/25333)**: Prevents a `TypeError` from hiding the actual routing error if the model router fails.
9. **[Fix/command injection shell (#24170)](https://github.com/google-gemini/gemini-cli/pull/24170)**: Addresses a command injection vulnerability in `run_shell_command` where `$()` or backticks were incorrectly executed.
10. **[feat: support hierarchical .env file loading (#25160)](https://github.com/google-gemini/gemini-cli/pull/25160)**: Brings multi-scope environment variable loading to the CLI, mirroring how `settings.json` operates.

## 5. Feature Request Trends
- **Smarter Memory Management**: High demand for the CLI to remember context more effectively across sessions without bloating the prompt. This includes global vs. project memory routing (#22819) and prompting the agent to proactively save user preferences (#22809).
- **Advanced Codebase Awareness**: Significant interest in AST-aware tooling (#22745, #22746) so the agent can precisely read method bounds and map codebases with fewer token-consuming errors.
- **Non-Interactive / Enterprise UX**: Requests for better headless/CI execution, highlighted by work on ACP input requests (#24664) and handling execution hangs without UI (#25166).
- **UI/Terminal Fidelity**: Appeals for improved terminal rendering, such as fixing broken table streaming (#25218), enabling mouse cursor clicking in prompts (#24630), and adding Vim-mode cursor shapes (#18390).

## 6. Developer Pain Points
- **Startup Latency & Fragility**: The CLI hanging on startup due to failed `ripgrep` downloads or crashing due to `npm` override errors is a major frustration for developers wanting a fast, reliable loop.
- **Broken Permission Flows**: Users are experiencing decision fatigue because the CLI repeatedly asks for permissions on the exact same files (#24916), and sometimes downgrades explicit "YOLO" (auto-approve) modes inappropriately (#25341).
- **Agent Destructiveness & Messiness**: Developers are asking for guardrails against destructive behavior (like unwarranted `git reset --force`) (#22672) and complain about agents polluting directories with temporary scripts (#23571).
- **Tool Bloat Overhead**: When the CLI integrates heavily with external tools/MCPs, it easily breaches the >128 tool limit, causing hard `400` API errors and requiring manual intervention (#24246).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-14

## 1. Today's Highlights
GitHub Copilot CLI shipped version **v1.0.25**, headlining native MCP server installation from the registry with guided configuration directly in the CLI—a major DX improvement for extensibility. The release also includes fixes for session management (`/resume` Esc key behavior, model persistence in history) and initial support for ACP clients to provide MCP servers. Community activity remains high around premium request consumption bugs, enterprise policy inconsistencies, and a strong appetite for image clipboard support.

## 2. Releases

### v1.0.25 (2026-04-13)
- **MCP Server Registry Install**: Install MCP servers from the registry with guided configuration directly in the CLI—streamlines plugin and tool setup without manual JSON editing.
- **Bug Fix — `/resume` Esc key**: Esc key now works correctly after a failed `/resume` session lookup.
- **Session Model Persistence**: Resolved model is persisted in session history; model changes are deferred during active turns, preventing mid-turn model shifts.
- **ACP Enhancement**: ACP clients can now provide MCP servers (stdio transport), expanding agent-to-tool integration paths.

## 3. Hot Issues

1. **[#2591](https://github.com/github/copilot-cli/issues/2591) — Infinite premium requests consumed per tool invocation/thinking step** ⚠️ CRITICAL
   A single session request can burn 80–100 premium requests as each agent tool call or thinking step triggers a separate request. 25 comments, 11 👍—this is a billing and fairness crisis for users on limited quotas. No fix yet.

2. **[#223](https://github.com/github/copilot-cli/issues/223) — "Copilot Requests" permission missing for org-owned fine-grained tokens**
   Enterprise users cannot see or set the "Copilot Requests" permission on organization-owned PATs, blocking corporate automation workflows. 20 comments, 63 👍—highest upvote count in this period. Still open.

3. **[#1481](https://github.com/github/copilot-cli/issues/1481) — SHIFT+ENTER executes prompt instead of line break** (CLOSED)
   Standard chat UX expects SHIFT+ENTER for newlines; Copilot CLI uses CTRL+ENTER. 22 comments, 11 👍. Closed but widely discussed—UX alignment with industry norms.

4. **[#1595](https://github.com/github/copilot-cli/issues/1595) — Sporadic enterprise policy blocking on model retrieval**
   Users with valid Enterprise subscriptions get "access denied by Copilot policy" on `/models` despite all models being allowed. 18 comments, 8 👍. Intermittent and frustrating for enterprise admins.

5. **[#1157](https://github.com/github/copilot-cli/issues/1157) — Global Hooks Configuration (CLOSED)**
   Request for `UserPromptSubmit`, `Stop`, and `Notification` event hooks at global scope rather than per-repo `.github/copilot-hooks.json`. 12 comments, 25 👍. Closed—likely addressed in recent releases.

6. **[#1687](https://github.com/github/copilot-cli/issues/1687) — Access active CLI session from phone**
   Remote monitoring/control of running Copilot CLI sessions from mobile. 34 👍—second-highest upvote count. Reflects growing use of long-running agent tasks.

7. **[#892](https://github.com/github/copilot-cli/issues/892) — Sandbox mode to restrict filesystem access**
   Propose constraining the agent to a working directory, preventing reads/writes outside the workspace root. 31 👍, 7 comments. Security-critical for enterprise adoption and CI/CD pipelines.

8. **[#1276](https://github.com/github/copilot-cli/issues/1276) — Paste images from clipboard into prompts**
   Vision-capable workflows are blocked by the inability to paste screenshots. 9 comments, 6 👍. Duplicated in [#2409](https://github.com/github/copilot-cli/issues/2409) and [#2675](https://github.com/github/copilot-cli/issues/2675), showing strong demand.

9. **[#2551](https://github.com/github/copilot-cli/issues/2551) — 503 errors with Opus 4.5 and Sonnet 4.5**
   HTTP/2 GOAWAY connection terminated errors when using newer models. 8 comments. May be upstream API capacity issue rather than CLI-specific.

10. **[#2581](https://github.com/github/copilot-cli/issues/2581) — MCP tools with dots in names rejected with 400**
    MCP spec allows dots in tool names, but Copilot CLI's API validation rejects them (`^[a-zA-Z0-9_-]{1,128}$`). 2 comments, 2 👍. A spec compliance gap that breaks third-party MCP servers.

## 4. Key PR Progress
No pull requests were updated in the last 24 hours. The release of v1.0.25 likely absorbed recent PR work. Notable closed issues (e.g., #1157 global hooks, #1481 SHIFT+ENTER, #1244 `/usage` command, #1283 MCP over HTTP) suggest corresponding PRs were merged prior to this window.

## 5. Feature Request Trends

| Theme | Representative Issues | Signal Strength |
|---|---|---|
| **Image / multimodal input** | #1276, #2409, #2675 | High (3 separate issues, recurring) |
| **Session management & persistence** | #2019 (delete sessions), #2635 (persist storage choice), #1394 (persist usage stats), #893 (compaction bugs) | High |
| **Enterprise & permissions** | #223 (fine-grained tokens), #1595 (policy blocking), #2471 (OTel telemetry parity) | High |
| **Security & sandboxing** | #892 (filesystem sandbox) | Medium-High (31 👍) |
| **Mobile / remote access** | #1687 (phone access) | Medium (34 👍) |
| **Plugin/MCP extensibility** | #1665 (project-scoped plugins), #2581 (dots in MCP tool names), #2657 (URL-based plugin sources) | Medium |
| **UX keybinding alignment** | #1481 (SHIFT+ENTER), #853 (CTRL+L screen clear) | Medium (closed, likely fixed) |
| **Hooks & automation** | #1157 (global hooks), #2643 (silent hook rewrites) | Medium |

## 6. Developer Pain Points

- **Premium request consumption is opaque and excessive.** Issue #2591 reveals that a single user prompt can cascade into 80–100 premium requests during agentic tool use. Users lack real-time visibility into per-turn consumption (see also #1394 — no persisted usage stats). This is the top billing/trust concern.
- **Enterprise policy enforcement is unreliable.** Sporadic "access denied by Copilot policy" (#1595) and missing fine-grained token permissions (#223) erode confidence for org-wide rollouts.
- **Clipboard and image workflows are broken or missing.** Linux users face `spawn xclip ENOENT` errors on right-click copy (#2158), and no platform supports pasting images from clipboard despite three separate feature requests.
- **Hook system limitations.** Hooks must be configured per-repo (#1157), and `preToolUse` hooks cannot silently rewrite commands without triggering confirmation dialogs (#2643).
- **Session management gaps.** No way to delete saved sessions (#2019), storage preference resets on every launch (#2635), and model changes mid-turn cause unpredictable behavior (addressed in v1.0.25 but user confidence needs rebuilding).
- **MCP compatibility gaps.** Dots in tool names break the API (#2581), URL-sourced plugins aren't supported (#2657), and project-scoped plugin configuration doesn't exist (#1665)—all friction points for the extensibility ecosystem GitHub is building.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-14

## 1. Today's Highlights

Kimi Code CLI shipped two releases in quick succession—**v1.32.0** and **v1.33.0**—bringing a compact "thinking" indicator, MCP tool output truncation, PyInstaller subcommand fixes, and a unified "Kimi for Code" model branding. The community is actively discussing session management, thinking-process display, and Windows compatibility, with several high-quality external PRs submitted today.

---

## 2. Releases

### [v1.33.0](https://github.com/MoonshotAI/kimi-cli/pull/1861)
- **Unified model display**: Refactored hardcoded `kimi-k2.5` references into a generic "Kimi for Code" label across the welcome screen and `/login` tip ([#1860](https://github.com/MoonshotAI/kimi-cli/pull/1860)). This eliminates the need to touch UI strings on every model version bump.

### [v1.32.0](https://github.com/MoonshotAI/kimi-cli/pull/1858)
- **MCP tool output truncation**: Truncate tool output to 100K characters and gracefully handle unsupported content types ([#1843](https://github.com/MoonshotAI/kimi-cli/pull/1843)).
- **PyInstaller fix**: Include lazy CLI subcommands in the binary bundle ([#1831](https://github.com/MoonshotAI/kimi-cli/pull/1831)).
- **Compact thinking indicator**: Replaced the verbose multi-line thinking preview with a single-line animated `Thinking` label showing elapsed time, token count, and tokens/sec pulse ([#1857](https://github.com/MoonshotAI/kimi-cli/pull/1857)).

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#1814 — Session query & restore from CLI](https://github.com/MoonshotAI/kimi-cli/issues/1814) | Users want `kimi-cli --list-sessions` outside the TUI so they can find and resume sessions without guessing directories. Aligns with growing demand for multi-session management. |
| 2 | [#1853 — Multi-session status view in TUI](https://github.com/MoonshotAI/kimi-cli/issues/1853) | Requests rich session state (TODO progress, waiting-for-confirm, file I/O) inside the TUI, not just a flat list. Reflects power-user workflow needs. |
| 3 | [#1632 — Hide thinking content for thinking models](https://github.com/MoonshotAI/kimi-cli/issues/1632) | Users want reasoning quality without screen clutter. Gained 👍 1; directly relates to the new compact thinking feature shipped in v1.32. |
| 4 | [#1864 — Display full thinking traces](https://github.com/MoonshotAI/kimi-cli/issues/1864) | The counter-point to #1632: after the compact indicator shipped, some users report thinking traces disappeared entirely on `kimi-for-coding`. Likely a regression from the compact refactor. |
| 5 | [#1859 — Thinking process gone (Chinese)](https://github.com/MoonshotAI/kimi-cli/issues/1859) | Same regression report from another user on v1.32.0 with `kimi-for-coding` on macOS. Suggests the compact thinking change may have unintentionally suppressed output for managed models. |
| 6 | [#823 — Auth failed after several rounds](https://github.com/MoonshotAI/kimi-cli/issues/823) | A long-standing auth token refresh bug (👍 2, 14 comments). Users must open a new terminal to recover. Still referenced by the community. |
| 7 | [#1856 — Project-level custom system prompt](https://github.com/MoonshotAI/kimi-cli/issues/1856) | Proposes a `system_prompt.md` override at the project level—analogous to `.cursorrules`. Zero-config per-project customization is a frequent ask. |
| 8 | [#1855 — Always executes Linux commands on Windows](https://github.com/MoonshotAI/kimi-cli/issues/1855) | The model defaults to bash syntax on Windows. Users want a configurable shell preference (bash/cmd/PowerShell). |
| 9 | [#1862 — FetchURL duplicates GitHub issue body](https://github.com/MoonshotAI/kimi-cli/issues/1862) | Trafilatura extraction path returns the same text as both body and comment. Already has a matching fix PR (#1863). |
| 10 | [#1830 — VSCode extension slash skills require typing first](https://github.com/MoonshotAI/kimi-cli/issues/1830) | Slash commands don't appear until the user types something, breaking discoverability in the VSCode extension. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#1857 — Compact thinking indicator](https://github.com/MoonshotAI/kimi-cli/pull/1857) | **Merged (v1.32.0)**. Replaced multi-line thinking preview with a single-line animated display. May be linked to the thinking-trace disappearance reports. |
| 2 | [#1860 — Unified "Kimi for Code" branding](https://github.com/MoonshotAI/kimi-cli/pull/1860) | **Merged (v1.33.0)**. Removed three hardcoded `kimi-k2.5` references; model display now uses a single `managed_model_label`. |
| 3 | [#1850 — Fix MCP servers on Windows](https://github.com/MoonshotAI/kimi-cli/pull/1850) | **Merged**. Fixed five independent Windows issues: UTF-8 encoding (CJK GBK), command-line argument quoting, batch wrapper, stderr polling, and `ensure_utf8()` star label. |
| 4 | [#1851 — O(1) notification dedupe](https://github.com/MoonshotAI/kimi-cli/pull/1851) | **Merged**. Replaced per-call directory scan with an in-memory index, eliminating ~1 Hz redundant I/O for background task notifications. |
| 5 | [#1863 — Fix FetchURL duplicated comments](https://github.com/MoonshotAI/kimi-cli/pull/1863) | **Open**. Switches HTML extraction to inspect Trafilatura main text and comments separately; suppresses when they normalize to identical content. Includes regression test. |
| 6 | [#1767 — YOLO mode for Web UI](https://github.com/MoonshotAI/kimi-cli/pull/1767) | **Open**. Extends auto-approve (YOLO) mode to the Web interface with backend API and toggle UI. |
| 7 | [#1839 — `/delete` command for sessions](https://github.com/MoonshotAI/kimi-cli/pull/1839) | **Open**. Adds `/delete [session_id]` (alias `/remove`) with safety constraints (cannot delete current session, early validation). |
| 8 | [#1637 — Route MCP logs to loguru, not TUI](https://github.com/MoonshotAI/kimi-cli/pull/1637) | **Open**. Stops MCP server log notifications (e.g., SearXNG) from dumping into the TUI via RichHandler; redirects to loguru. |
| 9 | [#1852 — Log hook task exceptions](https://github.com/MoonshotAI/kimi-cli/pull/1852) | **Open**. Replaces silent `lambda` exception swallowing in 6 hook callback sites with proper `logger.error` calls. |
| 10 | [#1587 — Shell mode output injection & persistent `cd`](https://github.com/MoonshotAI/kimi-cli/pull/1587) | **Merged**. Ctrl+X shell output now enters conversation context; `cd` persists via real shell resolution + `os.chdir()` sync. |

---

## 5. Feature Request Trends

1. **Multi-session management**: The strongest signal today. Users want CLI flags (`--list-sessions`), rich TUI status views, and quick session switching—moving from single-session to a workspace metaphor ([#1814](https://github.com/MoonshotAI/kimi-cli/issues/1814), [#1853](https://github.com/MoonshotAI/kimi-cli/issues/1853), [#1839](https://github.com/MoonshotAI/kimi-cli/pull/1839)).

2. **Thinking process control**: A clear polarity—some want compact/hidden thinking ([#1632](https://github.com/MoonshotAI/kimi-cli/issues/1632)), others want full traces visible ([#1864](https://github.com/MoonshotAI/kimi-cli/issues/1864)). The ideal solution is a configurable display level.

3. **Project-level customization**: Custom system prompts per project ([#1856](https://github.com/MoonshotAI/kimi-cli/issues/1856)) mirrors the `.cursorrules` / `.claude` pattern gaining traction across AI coding tools.

4. **Windows shell awareness**: Configurable default shell (bash/cmd/PowerShell) ([#1855](https://github.com/MoonshotAI/kimi-cli/issues/1855)) and the MCP Windows fix ([#1850](https://github.com/MoonshotAI/kimi-cli/pull/1850)) indicate the Windows experience is a growing priority.

---

## 6. Developer Pain Points

- **Thinking trace regression**: At least two reports ([#1864](https://github.com/MoonshotAI/kimi-cli/issues/1864), [#1859](https://github.com/MoonshotAI/kimi-cli/issues/1859)) indicate that the compact thinking refactor in v1.32 may have inadvertently suppressed thinking output entirely for `kimi-for-coding` users. This needs prompt investigation.

- **Auth token lifecycle**: Issue [#823](https://github.com/MoonshotAI/kimi-cli/issues/823) (open since January, 14 comments, 👍 2) continues to frustrate users who hit "Authorization failed" mid-conversation. A robust token refresh mechanism is still awaited.

- **Windows command mismatches**: The model generating bash commands on Windows ([#1855](https://github.com/MoonshotAI/kimi-cli/issues/1855)) and the MCP Windows breakage ([#1850](https://github.com/MoonshotAI/kimi-cli/pull/1850)) highlight that cross-platform parity remains a significant gap.

- **Silent hook failures**: Exception swallowing in hook callbacks ([#1852](https://github.com/MoonshotAI/kimi-cli/pull/1852)) has made debugging extension and hook issues harder than necessary for plugin developers.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-14

---

## 1. Today's Highlights

The OpenCode community is experiencing significant friction around **provider billing and authentication**, with GitHub Copilot users reporting aggressive premium request consumption and OpenAI/ChatGPT auth options disappearing. Core architectural refactoring continues at a healthy pace, with vouched contributors actively removing legacy async facades in favor of the `AppRuntime` pattern. Notably, the AI SDK v6 integration and GPT-5.x reasoning parameters are generating a cluster of compatibility bugs with third-party proxies like LiteLLM.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Hot Issues

1. **[#8030](https://github.com/anomalyco/opencode/issues/8030) — Copilot auth misclassifies agent requests as "user," burning premium quotas**
   214 comments, 79 thumbs-up. Users report that GitHub Copilot's Opus 4.5 integration fails to set the `X-Initiator: agent` header on ~60 agent-initiated requests, rapidly depleting monthly premium quotas. This is the highest-engagement issue and remains unresolved, causing real cost impact.

2. **[#10416](https://github.com/anomalyco/opencode/issues/10416) — Session titles computed outside user's network, raising privacy concerns**
   53 comments, 30 thumbs-up. A user with strict outbound firewall rules discovered that session title generation requires external network access even when using locally-hosted LLMs. This challenges OpenCode's privacy-by-default positioning and has sparked broader discussion about telemetry scope.

3. **[#15533](https://github.com/anomalyco/opencode/issues/15533) — Auto-compaction infinite loop when assistant ends turn naturally**
   13 comments. `SessionCompaction.process()` unconditionally injects a synthetic "Continue..." message after the assistant finishes with `finish === "stop"`, creating an infinite loop. This is related to the broader compaction reliability theme seen in multiple issues.

4. **[#17516](https://github.com/anomalyco/opencode/issues/17516) — `opencode run` hangs indefinitely after tool completion**
   11 comments. The non-interactive `opencode run` command never exits after the model finishes its work, requiring manual process termination. This blocks CI/CD and scripting use cases.

5. **[#11301](https://github.com/anomalyco/opencode/issues/11301) — Processing stops after compaction on Windows (every time)**
   10 comments, 7 thumbs-up. A reliable repro where compaction on Windows always halts processing, requiring manual "continue" prompts. This appears related to #15533 but is Windows-specific.

6. **[#22351](https://github.com/anomalyco/opencode/issues/22351) — `reasoningSummary` injection breaks LiteLLM proxy for GPT-5.x**
   2 comments (closed). OpenCode auto-injects `reasoningSummary: "auto"` for GPT-5 models, which LiteLLM doesn't recognize, causing `BadRequestError`. A fix PR (#22352) was opened the same day.

7. **[#20465](https://github.com/anomalyco/opencode/issues/20465) — Blank assistant text with AI SDK v6 when MCP servers enabled**
   7 comments. A regression from v1.3.4 where assistant responses don't render in the TUI when any MCP server is active. Disabling MCP restores behavior, pointing to a streaming/rendering conflict.

8. **[#20859](https://github.com/anomalyco/opencode/issues/20859) — Subagent models ignored in Copilot provider; all requests billed to orchestrator**
   5 comments. Even when cheaper models are configured for subagents, GitHub Copilot billing attributes all premium requests to the orchestrator model (Claude Opus 4.6). Compounds the billing pain from #8030.

9. **[#22238](https://github.com/anomalyco/opencode/issues/22238) — Nested API error message extraction has short-circuit bug**
   2 comments (closed). `body.message || body.error || body.error?.message` fails when `body.error` is an object, because the truthy object prevents reaching `.message`. A clean, targeted bug fix.

10. **[#22288](https://github.com/anomalyco/opencode/issues/22288) — TODO tasks hang indefinitely, never transition to completed**
    2 comments (closed). The TODO progress-tracking feature doesn't mark items as completed even after underlying work finishes, making multi-step operations appear perpetually pending.

---

## 4. Key PR Progress

1. **[#22347](https://github.com/anomalyco/opencode/pull/22347) — Consolidate sync events into global event stream** (jlongster, CLOSED)
   Merges sync-specific events into the global event stream with `type: "sync"`, eliminating sync-specific bugs and providing a unified tap point for external integrations. Architecturally significant.

2. **[#22342](https://github.com/anomalyco/opencode/pull/22342) — Remove async facade exports from permission module** (kitlangton, OPEN)
   Routes all permission callers through `AppRuntime.runPromise(...)`, continuing the systematic removal of service-local async facades in favor of the Effect runtime pattern.

3. **[#22339](https://github.com/anomalyco/opencode/pull/22339) — Remove async facade exports from session/revert** (kitlangton, OPEN)
   Parallel to #22342, removes `makeRuntime`-backed async facades from `session/revert.ts`. Part of a coordinated refactoring effort across multiple modules.

4. **[#22352](https://github.com/anomalyco/opencode/pull/22352) — Guard `reasoningSummary` injection for openai-compatible providers** (nazarhnatyshen, OPEN)
   Fixes the LiteLLM/GPT-5.x incompatibility by scoping `reasoningSummary` injection to first-party OpenAI provider only. Directly addresses #22351 and #22350.

5. **[#22326](https://github.com/anomalyco/opencode/pull/22326) — Prune LSP clients for deleted workspace roots** (kitlangton, OPEN)
   Proactively shuts down LSP processes when their workspace root is deleted, preventing stale clients from lingering in the UI. Includes Effect-style regression tests.

6. **[#20491](https://github.com/anomalyco/opencode/pull/20491) — Add Kiro (AWS) provider** (NachoFLizaur, OPEN)
   Implements a new provider for AWS's Kiro API, which uses a binary event stream protocol distinct from SSE/JSON. Requires custom AI SDK integration.

7. **[#21703](https://github.com/anomalyco/opencode/pull/21703) — Replace native ripgrep with embedded WASM backend** (nexxeln, OPEN)
   Eliminates the native `rg` download/spawn path in favor of a WASM-based ripgrep service running in a web worker. Significant for portability and reducing external dependencies.

8. **[#20775](https://github.com/anomalyco/opencode/pull/20775) — Sanitize array schemas missing `items` for all providers** (Krishnachaitanyakc, OPEN)
   Some MCP servers return array schemas without an `items` field, causing validation failures across providers. This PR adds defensive sanitization.

9. **[#22245](https://github.com/anomalyco/opencode/pull/22245) — Add Task tool delegation instructions to Gemini system prompt** (rrmistry, OPEN)
   The `gemini.txt` system prompt was missing sub-agent delegation instructions present in `anthropic.txt`, causing Gemini models to underperform on multi-agent tasks.

10. **[#13854](https://github.com/anomalyco/opencode/pull/13854) — Fix TUI streaming markdown render for completed messages** (mocksoul, OPEN)
    `TextPart` passes `streaming={true}` unconditionally, causing the TUI to always skip the last table row. Derives streaming state from `message.time.completed` for correct final rendering.

---

## 5. Feature Request Trends

- **Context visibility and management** — [#6152](https://github.com/anomalyco/opencode/issues/6152) (73 👍) requests a `/context`-style TUI dialog showing token usage breakdown per session component. This reflects growing user need to understand and optimize context window utilization.

- **Paste text editing** — [#8501](https://github.com/anomalyco/opencode/issues/8501) (133 👍, highest thumb count) wants expandable/editable pasted text blocks instead of the current `[Pasted ~N lines]` summary. Strong community demand for better prompt editing ergonomics.

- **Agent orchestration** — [#12711](https://github.com/anomalyco/opencode/issues/12711) proposes flat agent teams with parallel execution, named messaging, and multi-model coordination. Signals demand beyond the current sequential subagent model.

- **Prompt history search** — [#5062](https://github.com/anomalyco/opencode/issues/5062) requests `Ctrl+R` reverse-i-search for prompt history, a bash-like UX improvement with broad appeal.

- **Jupyter notebook support** — [#11409](https://github.com/anomalyco/opencode/issues/11409) asks for native `.ipynb` file editing, reflecting OpenCode's expanding use beyond traditional codebases.

- **Permission plugin hooks** — [#22311](https://github.com/anomalyco/opencode/issues/22311) requests wiring `permission.ask` into the plugin system, enabling custom authorization flows.

---

## 6. Developer Pain Points

- **GitHub Copilot billing is a critical concern.** Issues [#8030](https://github.com/anomalyco/opencode/issues/8030) and [#20859](https://github.com/anomalyco/opencode/issues/20859) together paint a picture where Copilot users face double jeopardy: agent requests are misclassified as user requests, and subagent model selections are ignored for billing. This creates unpredictable and inflated costs.

- **Compaction reliability remains broken for many users.** The infinite loop in [#15533](https://github.com/anomalyco/opencode/issues/15533) and the Windows-specific halt in [#11301](https://github.com/anomalyco/opencode/issues/11301) indicate that auto-compaction — a core feature for long sessions — still fails regularly, forcing manual intervention.

- **Provider compatibility with GPT-5.x reasoning params is fragile.** The `reasoningSummary` auto-injection breaks LiteLLM ([#22351](https://github.com/anomalyco/opencode/issues/22351)), Azure ([#20698](https://github.com/anomalyco/opencode/issues/20698)), and potentially other openai-compatible providers. OpenCode's aggressive provider-specific parameter injection needs a more robust gating mechanism.

- **`opencode run` non-interactive mode is unreliable.** [#17516](https://github.com/anomalyco/opencode/issues/17516) reports the process never exits, which fundamentally blocks automation and CI/CD adoption — a key enterprise use case.

- **Windows users face disproportionate instability.** Compaction failures, proxy authentication issues ([#22289](https://github.com/anomalyco/opencode/issues/22289)), and TODO state corruption ([#22288](https://github.com/anomalyco/opencode/issues/22288)) all cluster on Windows, suggesting the platform needs dedicated QA attention.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-14

## 1. Today's Highlights

Qwen Code shipped **v0.14.4**, bringing CJK word segmentation improvements and a critical VS Code ACP session fix. The community is highly active around **startup performance optimization** and **loop detection enhancements**, with multiple PRs and P1 issues filed to address these core bottlenecks. A notable policy discussion about reducing the OAuth free tier quota has also sparked significant community attention.

---

## 2. Releases

### [v0.14.4](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.4) (also preview and nightly builds)
Three key changes landed across all release tracks:
- **feat(cli): CJK word segmentation and Ctrl+arrow navigation optimization** ([PR #2942](https://github.com/QwenLM/qwen-code/pull/2942)) — a major usability improvement for Chinese/Japanese/Korean users.
- **fix(vscode): force fresh ACP session on new-session action** ([PR #2874](https://github.com/QwenLM/qwen-code/pull/2874)) — resolves stale session state in the VS Code companion.
- **feat: replace telemetry** — partial note, likely a telemetry stack refresh.

---

## 3. Hot Issues

1. **[#1922](https://github.com/QwenLM/qwen-code/issues/1922) — [BUG] Edit tool unable to edit files in latest version** (16 comments, CLOSED)
   A regression in the edit tool that broke Python file modifications. Previously fixed but reappeared in v0.10.5. High comment count shows how critical the edit tool is to daily workflows.

2. **[#2973](https://github.com/QwenLM/qwen-code/issues/2973) — Poor system prompt adherence** (6 comments, OPEN)
   Users report the model frequently ignores custom system prompts. This strikes at the reliability of agentic behavior customization.

3. **[#1149](https://github.com/QwenLM/qwen-code/issues/1149) — PDF file reading support** (5 comments, OPEN)
   A long-running request since Dec 2025. The tool currently cannot extract text from PDFs, a common need for codebase documentation workflows.

4. **[#3144](https://github.com/QwenLM/qwen-code/issues/3144) — Terminal scroll jumps rapidly during agent execution** (4 comments, 1 👍, OPEN)
   The terminal buffer bounces 10-30 times/second during streaming, making the CLI nearly unusable during long agent runs. A UX-blocking bug.

5. **[#3037](https://github.com/QwenLM/qwen-code/issues/3037) — `qwen3.6-plus` model listed but API returns 400** (4 comments, CLOSED)
   Model selector shows an unsupported model ID. Points to model catalog sync issues between the client and backend.

6. **[#3203](https://github.com/QwenLM/qwen-code/issues/3203) — OAuth Free Tier Policy Adjustment proposal** (1 comment, OPEN)
   A proposal to cut the free tier from 1,000 to 100 requests/day and phase it out entirely by a deadline. Major implications for open-source adoption.

7. **[#3108](https://github.com/QwenLM/qwen-code/issues/3108) — ACP/VS Code hook support incomplete** (1 comment, OPEN)
   Only `PermissionRequest` is wired into ACP; `PreToolUse`, `PostToolUse`, and other hooks are missing, breaking parity with the CLI path.

8. **[#3011](https://github.com/QwenLM/qwen-code/issues/3011) — [P1] Startup Optimization** (OPEN)
   A meta-P1 issue tracking multiple startup performance bottlenecks identified through comparison with Claude Code. Blocks several sub-issues.

9. **[#3169](https://github.com/QwenLM/qwen-code/issues/3169) — Typing `exit` should quit the CLI** (3 comments, CLOSED)
   A usability gap vs. Claude Code and Copilot CLI. Especially relevant for mobile/Termux users.

10. **[#3140](https://github.com/QwenLM/qwen-code/issues/3140) — `agents.md` vs `qwen.md` support** (2 comments, CLOSED)
    Users migrating from iFlow CLI want `agents.md` auto-injected into context, questioning whether renaming is required. Highlights friction in tool migration.

---

## 4. Key PR Progress

1. **[#2936](https://github.com/QwenLM/qwen-code/pull/2936) — Fork subagent for context sharing** (OPEN)
   Implements P0 fork subagent that inherits the parent's full conversation context and shares the prompt cache via `CacheSa`. A foundational change for multi-agent orchestration.

2. **[#3236](https://github.com/QwenLM/qwen-code/pull/3236) — Enhanced loop detection with stagnation + validation-retry checks** (OPEN)
   Adds tool validation retry loop detection, thought/action stagnation checks, and EAGAIN pty error fixes. Directly addresses infinite-agent-loop pain points.

3. **[#3232](https://github.com/QwenLM/qwen-code/pull/3232) — Startup performance profiler** (OPEN)
   Adds a lightweight profiler activated via `QWEN_CODE_PROFILE_STARTUP=1` with 7 checkpoints in `main()`. Outputs JSON timing reports. Companion to P1 issue #3011.

4. **[#2550](https://github.com/QwenLM/qwen-code/pull/2550) — Fix input lag in long VS Code conversations** (OPEN)
   Resolves 5+ second keystroke delay by extracting message list into `React.memo` and memoizing the input bar. A critical UX fix for power users.

5. **[#3214](https://github.com/QwenLM/qwen-code/pull/3214) — Replace fdir crawler with `git ls-files` + ripgrep** (OPEN)
   Two-tier file search: primary `git ls-files`, fallback `ripgrep --files`. Eliminates full-tree re-scan on every keystroke and respects `.gitignore`. Closes #3137.

6. **[#3087](https://github.com/QwenLM/qwen-code/pull/3087) — Managed auto-memory and auto-dream system** (OPEN)
   Introduces automatic memory extraction after tool calls and background "dream" consolidation. Enables cross-session learning without manual user action.

7. **[#3190](https://github.com/QwenLM/qwen-code/pull/3190) — `/chat` file commands for session management** (OPEN)
   Adds `/chat -s <name>`, `/chat -l`, `/chat -r <name>`, `/chat -d <name>` for named session persistence. Addresses the UUID-only identification pain point.

8. **[#3229](https://github.com/QwenLM/qwen-code/pull/3229) — Attribute `/stats` rows to originating subagent** (OPEN)
   Threads subagent metadata into stats so users can distinguish API calls from main vs. subagents. Essential for cost tracking in multi-agent workflows.

9. **[#2916](https://github.com/QwenLM/qwen-code/pull/2916) — Expose `/context` usage data in SDK/non-interactive mode** (CLOSED)
   Enables programmatic `getContextUsage()` API for SDK consumers. Important for headless/CI integrations.

10. **[#3237](https://github.com/QwenLM/qwen-code/pull/3237) — Fix build: invoke tsx directly instead of npx** (OPEN)
    Fixes build failures under Bun by calling `tsx` via `node --import` directly. Unblocks contributors using alternative runtimes.

---

## 5. Feature Request Trends

- **Session management & history**: Multiple requests for session naming ([#3234](https://github.com/QwenLM/qwen-code/issues/3234)), conversation rollback/double-ESC ([#3186](https://github.com/QwenLM/qwen-code/issues/3186)), and `/undo` ([#2342](https://github.com/QwenLM/qwen-code/issues/2342)). Users want Claude Code–level session control.
- **JetBrains/IntelliJ plugin**: Strong demand for a native IDEA plugin ([#2247](https://github.com/QwenLM/qwen-code/issues/2247)) — the ACP experience is seen as inferior to the VS Code companion.
- **Custom model rules**: Requests for per-project or per-session model rules (language, coding style) ([#3117](https://github.com/QwenLM/qwen-code/issues/3117)).
- **Multi-provider support**: Calls for GitHub Copilot login ([#3128](https://github.com/QwenLM/qwen-code/issues/3128)) and custom `baseUrl` for Gemini providers ([#3166](https://github.com/QwenLM/qwen-code/issues/3166)).
- **PDF/binary file reading**: A persistent request since late 2025, still unresolved ([#1149](https://github.com/QwenLM/qwen-code/issues/1149)).

---

## 6. Developer Pain Points

- **Terminal UX during streaming**: Rapid scroll bouncing ([#3144](https://github.com/QwenLM/qwen-code/issues/3144)) and lack of dark/light theme auto-detection ([#2998](https://github.com/QwenLM/qwen-code/issues/2998)) make CLI usage jarring.
- **CJK path handling**: Numeric characters in file paths cause unwanted spaces ([#2703](https://github.com/QwenLM/qwen-code/issues/2703)), breaking file operations on Chinese-language systems.
- **Startup latency**: P1 tracking ([#3011](https://github.com/QwenLM/qwen-code/issues/3011)) reveals no production startup measurement exists. Multiple performance bottlenecks identified vs. competitors.
- **VS Code companion parity**: Hooks not fully wired ([#3108](https://github.com/QwenLM/qwen-code/issues/3108)), tab UI overflow ([#2873](https://github.com/QwenLM/qwen-code/issues/2873)), and missing commands create a second-class experience vs. the CLI.
- **Quota/API instability**: Model list sync errors ([#3037](https://github.com/QwenLM/zwen-code/issues/3037)), data inspection false positives ([#3119](https://github.com/QwenLM/qwen-code/issues/3119)), connection drops ([#3231](https://github.com/QwenLM/qwen-code/issues/3231)), and proposed free tier cuts ([#3203](https://github.com/QwenLM/qwen-code/issues/3203)) are eroding trust among free-tier users.

</details>