# AI CLI Tools Community Digest 2026-05-10

> Generated: 2026-05-09 22:11 UTC | Tools covered: 8

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

## AI Developer Tools Ecosystem Report — 2026-05-10

### 1. Ecosystem Overview
The AI CLI tools landscape is currently characterized by rapid iteration, aggressive architectural refactoring, and a universal push toward agent autonomy and daemonization. Tools are evolving from simple terminal-based chat interfaces into headless, programmable orchestrators capable of driving complex CI/CD pipelines and multi-agent workflows. However, this accelerated growth is introducing shared growing pains, notably in context/memory management, streaming reliability, and cross-platform stability—particularly on Windows. 

### 2. Activity Comparison
Development velocity and community engagement vary significantly across the ecosystem. OpenAI Codex and Gemini CLI lead in active pipeline throughput, while tools like Pi and OpenCode are undergoing disruptive, heavy refactoring.

| Tool | Maintainer | New Issues (Today) | Active PRs (Today) | Release Status (Last 24h) |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | Anthropic | 10 | 0 | 2 maintenance patches (v2.1.137/138) |
| **OpenAI Codex** | OpenAI | 10 | 10 | Stable (v0.130.0) + 3 Alpha builds |
| **Gemini CLI** | Google | 10 | 10 | No new releases |
| **GitHub Copilot**| GitHub | 10 | 0 | No new releases |
| **Kimi Code CLI** | MoonshotAI | 10 | 11 | No new releases |
| **OpenCode** | Anomaly Co | 10 | 10 | 3 rapid patches (v1.14.42-v.44) |
| **Pi** | Earendil Works | 10 | 10 | No new releases |
| **Qwen Code** | QwenLM | 10 | 10 | CLI Preview + Python SDK release |

### 3. Shared Feature Directions
Analyzing community feedback and PR pipelines reveals several converging trends across the ecosystem:
*   **Unattended Automation & Daemonization:** There is a massive industry shift toward headless execution. **OpenAI Codex** shipped `codex remote-control`, **Qwen Code** is building `qwen serve`, **Pi** introduced `--mode worker-loop`, and **OpenCode** users are demanding "YOLO mode" for CI/CD environments.
*   **Context Compaction Reliability:** As context windows stretch, managing memory is a universal pain point. **Claude Code**, **OpenAI Codex**, and **GitHub Copilot CLI** all suffer from aggressive or broken auto-compaction loops that drop active goals and inflate costs.
*   **Windows as a Second-Class Citizen:** Every single tool reviewed is battling Windows compatibility. **Kimi Code** merged a landmark PR switching to Git Bash, **OpenAI Codex** is plagued by shell freezes and missing plugins, **OpenCode** faces Defender SmartScreen blocks, and **Claude Code** struggles with extension activations.
*   **Programmatic SDKs & Structured Output:** Developers want to embed these tools into broader applications. **Qwen Code** shipped a Python SDK, **Qwen Code** and **GitHub Copilot CLI** are working on structured JSON schema outputs, and **OpenAI Codex** added HTTP health probes for containerized deployments.
*   **Right-to-Left (RTL) Support:** Both **Claude Code** and **OpenAI Codex** communities highlighted requests for native Arabic and Hebrew rendering.

### 4. Differentiation Analysis
*   **Anthropic (Claude Code):** Focuses heavily on enterprise integration (VS Code/Cursor ecosystems) and fine-grained permission hooks. However, its primary differentiator is currently a negative one: severe user friction over cloud capacity, Max plan quotas, and cost-inflation bugs.
*   **OpenAI (Codex):** Leading the pack in headless ecosystem integration and UI state management. Their focus is heavily skewed toward mobile-to-desktop remote control, managed git worktrees, and plugin visibility controls.
*   **Google (Gemini CLI):** Prioritizing deep agentic reliability and system-level hardening. They are uniquely focused on advanced memory algorithms (union-find graph clustering) and AST-aware code reading to reduce token waste.
*   **GitHub (Copilot CLI):** Distinguished by its multi-model "Bring Your Own Key" (BYOK) architecture. Their specific challenge is wire-protocol stability across heterogeneous LLMs (DeepSeek, Azure OpenAI, Claude).
*   **Qwen Code:** Highly focused on the developer SDK ecosystem and daemonization. They are actively building the infrastructure for background agents and strict, schema-enforced outputs.
*   **Pi (Earendil Works):** Strongest focus on terminal-native UX and hardware-level integrations (e.g., Cmd+V image pasting in macOS terminals, automatic Ollama context window discovery). 

### 5. Community Momentum & Maturity
*   **Rapid Iterators (OpenAI Codex, Kimi Code, Qwen Code):** These tools show high PR merge velocities and rapid alpha cadences. They are shipping foundational features rapidly, though **OpenCode** demonstrates the risks of this approach (having to issue 3 patches in one day due to a broken backend migration).
*   **Stabilizers (Claude Code, GitHub Copilot CLI):** These communities exhibit high issue volumes (often with massive comment counts on specific bugs, like Claude's #38335 with 706 comments) but slower merge cadences. They are in the "scaling and stabilizing" phase of maturity.
*   **Architectural Churn (Pi, OpenCode):** Both communities are currently experiencing turbulence due to major backend refactoring (Hono to Effect, npm organization changes). Users are expressing frustration over breaking changes and bulk issue closures.

### 6. Trend Signals
*   **The CLI is becoming an API:** The era of interactive Terminal User Interfaces (TUIs) as the sole interaction model is ending. The demand for daemonized background processes, structured JSON outputs, and SDKs signals that developers are treating AI CLIs as programmable infrastructure rather than just chat interfaces.
*   **Windows Tooling Remains a Moat:** The assumption of POSIX-compliant environments (fcntl, standard bash utilities) is actively breaking down in AI tooling. Tools that successfully abstract Windows shell differences (like Kimi Code's Git Bash pivot) will capture a massive, currently underserved developer base.
*   **Model-Agnosticism is Fragile:** As seen in GitHub Copilot CLI and Pi, wiring multiple LLM providers into a single agent loop introduces severe fragility regarding tool-call schemas, stream truncation, and error handling. Robust, normalized abstraction layers for LLM APIs will be a critical area for open-source contribution moving forward.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Snapshot: 2026-05-10 | Repository: [anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking
*Based on PR activity, update frequency, and community engagement.*

1. **[PR #514 – Add document-typography skill](https://github.com/anthropics/skills/pull/514)** `[OPEN]`
   **Functionality:** Automated typographic quality control for AI-generated documents, preventing orphan word wraps, widow paragraphs, and numbering misalignment.
   **Highlights:** Addresses a near-universal pain point—every document Claude generates is susceptible to these subtle formatting flaws. Active updates through mid-March 2026 suggest iterative refinement based on review feedback.

2. **[PR #538 – Fix case-sensitive file references in PDF skill](https://github.com/anthropics/skills/pull/538)** `[OPEN]`
   **Functionality:** Corrects 8 case-sensitivity mismatches in the PDF skill's `SKILL.md` that break functionality on case-sensitive file systems (Linux).
   **Highlights:** A focused, high-quality bug fix. Updated as recently as late April 2026, indicating active maintainer review and strong likelihood of merging.

3. **[PR #541 – Fix DOCX tracked change ID collision](https://github.com/anthropics/skills/pull/541)** `[OPEN]`
   **Functionality:** Prevents document corruption in the DOCX skill by resolving shared `w:id` namespace collisions between tracked changes and existing bookmarks.
   **Highlights:** Tackles a deep OOXML specification issue. Demonstrates the high technical bar for document-processing skills and the community's attention to enterprise-grade stability.

4. **[PR #486 – Add ODT (OpenDocument) skill](https://github.com/anthropics/skills/pull/486)** `[OPEN]`
   **Functionality:** Enables creation, template filling, parsing, and HTML conversion of OpenDocument Format files (`.odt`, `.ods`).
   **Highlights:** Updated through mid-April 2026. Fills a major gap for open-source/ISO-standard document workflows, strongly complementing the existing DOCX and PDF skills.

5. **[PR #539 – Fix YAML description parsing in skill-creator](https://github.com/anthropics/skills/pull/539)** `[OPEN]`
   **Functionality:** Adds pre-parse validation to detect unquoted `description` fields containing YAML special characters (e.g., `:`), preventing silent skill failures.
   **Highlights:** A "meta-skill" improvement that makes the skill creation process more robust for the entire ecosystem.

6. **[PR #723 – Add testing-patterns skill](https://github.com/anthropics/skills/pull/723)** `[OPEN]`
   **Functionality:** A comprehensive skill covering the full testing stack, from philosophy (Testing Trophy model) to unit testing, React component testing, and E2E patterns.
   **Highlights:** High developer utility; addresses software engineering best practices rather than a specific tool or API.

7. **[PR #444 – Add AURELION skill suite](https://github.com/anthropics/skills/pull/444)** `[OPEN]`
   **Functionality:** A four-part cognitive and memory framework (Kernel, Advisor, Agent, Memory) for structured professional knowledge management.
   **Highlights:** Updated as recently as early May 2026. Represents a trend toward complex, multi-agent cognitive architectures rather than simple single-task skills.

8. **[PR #806 – Add macOS AppleScript automation skill](https://github.com/anthropics/skills/pull/806)** `[OPEN]`
   **Functionality:** Enables native macOS automation via `osascript`, bypassing the need for screenshot-based "computer use" interactions.
   **Highlights:** Introduces a two-tier permission system for direct app scripting and UI automation, pushing the boundaries of what Claude Code can do on the desktop.

---

## 2. Community Demand Trends
*Distilled from the most active GitHub Issues.*

*   **Enterprise & Team Collaboration:** The most upvoted open issue ([#189](https://github.com/anthropics/skills/issues/189) 👍8, [#228](https://github.com/anthropics/skills/issues/228) 👍7) demands better org-wide skill sharing and the elimination of duplicate skills across plugins. Teams want seamless distribution, not manual file sharing.
*   **Platform Reliability & Access:** Users are heavily frustrated by breaking changes in skill loading ([#62](https://github.com/anthropics/skills/issues/62)), upload errors ([#406](https://github.com/anthropics/skills/issues/406) 👍4), and the inability to use skills with AWS Bedrock or Enterprise SSO ([#29](https://github.com/anthropics/skills/issues/29), [#532](https://github.com/anthropics/skills/issues/532)).
*   **Security & Trust Boundaries:** Issue [#492](https://github.com/anthropics/skills/issues/492) (👍2) highlights a critical architecture request: the community wants clear namespace separation (e.g., `anthropic/` vs `community/`) to prevent unofficial skills from masquerading as official ones.
*   **MCP & API Integration:** Since late 2025, users ([#16](https://github.com/anthropics/skills/issues/16)) have been eager for Skills to be exposed as Model Context Protocol (MCP) tools, signaling a desire for programmatic, API-driven skill invocation rather than purely conversational triggers.
*   **Meta-Skill Improvements:** There is a strong demand to upgrade the `skill-creator` tool ([#202](https://github.com/anthropics/skills/issues/202)) to be more token-efficient and instruction-oriented, alongside fixing the evaluation pipeline ([#556](https://github.com/anthropics/skills/issues/556) 👍6).

---

## 3. High-Potential Pending Skills
*Active PRs likely to land in the official repository soon.*

*   **[PR #360 – AppDeploy Skill](https://github.com/anthropics/skills/pull/360):** Full-stack web app deployment directly from Claude. Updated May 2026; fits perfectly into DevOps automation workflows.
*   **[PR #568 – ServiceNow Platform Skill](https://github.com/anthropics/skills/pull/568):** A massive, broad-coverage skill for enterprise ITSM, SecOps, and ITAM. High potential for enterprise adoption.
*   **[PR #509 – CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509):** Not a skill, but crucial infrastructure. This PR addresses a critical community health gap (raising the repo score from 25% to 71%), streamlining future community contributions.
*   **[PR #154 – shodh-memory](https://github.com/anthropics/skills/pull/154):** Persistent context and memory management for AI agents. A foundational capability for long-running or complex multi-step tasks.

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **enterprise-grade reliability and collaboration features**—specifically, robust document processing, organizational skill sharing, and strict security boundaries between official and community-generated content.

---

# Claude Code Community Digest — 2026-05-10

## 1. Today's Highlights

Two maintenance releases shipped (**v2.1.137** and **v2.1.138**), with the notable fix being a Windows VS Code extension activation failure in v2.1.137 and internal fixes in v2.1.138. However, the release appears to have introduced new regressions: users on both macOS and Linux are reporting that `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE` is still ignored, and Windows users are encountering extension activation failures in Cursor and possibly VS Code itself. Community sentiment continues to be dominated by the long-running **Max plan session limit (#38335, 706 comments)** and a now-closed but highly-upvoted **cache TTL regression (#46829, 👍 241)**.

## 2. Releases

- **[v2.1.138](https://github.com/anthropics/claude-code/releases/tag/v2.1.138)** — Internal fixes only; no user-facing changelog.
- **[v2.1.137](https://github.com/anthropics/claude-code/releases/tag/v2.1.137)** — Fixed VS Code extension failing to activate on Windows.

> **Note:** The v2.1.137 Windows fix may not be complete — [#57533](https://github.com/anthropics/claude-code/issues/57533) reports the extension still fails to activate in Cursor.

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#38335](https://github.com/anthropics/claude-code/issues/38335) — Max plan session limits exhausted abnormally fast (CLI) | The single most-commented issue (706 comments, 👍 455). A months-long regression burning through Max plan quotas far faster than expected. Still open. |
| 2 | [#46829](https://github.com/anthropics/claude-code/issues/46829) — Cache TTL silently regressed from 1h → 5m | Closed, but with 👍 241 it's the highest-upvoted issue. Directly linked to the cost/quota inflation in #38335. Community analysis of JSONL logs proved the regression. |
| 3 | [#42776](https://github.com/anthropics/claude-code/issues/42776) — Desktop fails to relaunch on Windows (orphaned process file lock) | 72 comments. A blocking startup issue for Windows users that remains unresolved. |
| 4 | [#57533](https://github.com/anthropics/claude-code/issues/57533) — Extension fails to activate in Cursor (regression) | Filed today, labeled **regression**. May be related to the v2.1.137 fix attempt. Directly affects VS Code–ecosystem users. |
| 5 | [#57567](https://github.com/anthropics/claude-code/issues/57567) — `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE` still ignored in v2.1.138 | Reports the env var has been broken across 60+ patch versions (v2.1.79 → v2.1.138). Closed as duplicate, but the underlying bug persists. |
| 6 | [#57490](https://github.com/anthropics/claude-code/issues/57490) — Auto-compaction fires despite being explicitly disabled | Companion to the above — auto-compact triggers even when turned off via `/config`. Closed, but confirms a systemic compaction-control bug. |
| 7 | [#57692](https://github.com/anthropics/claude-code/issues/57692) — Opus 4.7 xHigh performance degradation post-Colossus-1 rollout | Fresh report tying model performance regression to the May 6 Colossus-1 capacity rollout. Could signal infrastructure-side issues. |
| 8 | [#8327](https://github.com/anthropics/claude-code/issues/8327) — "Organization has been disabled" when `ANTHROPIC_API_KEY` overrides subscription | 112 comments. A long-standing auth priority/ordering issue affecting users who have both API keys and subscriptions. |
| 9 | [#57688](https://github.com/anthropics/claude-code/issues/57688) — Auto Mode not available in Shift+Tab cycle on Max plan | Reports that the v2.1.111+ auto-mode availability for Max plans isn't working on Linux. Permission model regression. |
| 10 | [#55464](https://github.com/anthropics/claude-code/issues/55464) — Security plugin false-positives on `ast.literal_eval()` | The `eval_injection` hook flags the safe `ast.literal_eval()` function. Affects anyone using the security-guidance plugin in Python projects. |

## 4. Key PR Progress

No pull requests were updated in the last 24 hours. The development pipeline appears quiet on the community contribution front.

## 5. Feature Request Trends

1. **Cloud sync for settings, skills, and memory** — [#22648](https://github.com/anthropics/claude-code/issues/22648) (👍 30) and [#57678](https://github.com/anthropics/claude-code/issues/57678) both request account-level sync of `~/.claude/` configuration. This is a repeated ask (cited duplicates: #6037, #19634, #13461, #12119).

2. **Programmatic context management** — [#48690](https://github.com/anthropics/claude-code/issues/48690) requests a `clear_context` tool for MCP-driven and autonomous sessions where the user can't type `/compact` manually.

3. **RTL language support** — [#38005](https://github.com/anthropics/claude-code/issues/38005) (👍 24) asks for Hebrew and Arabic right-to-left rendering in Desktop and Cowork.

4. **Single-key model cycling** — [#38966](https://github.com/anthropics/claude-code/issues/38966) proposes Cmd+Tab-style rotation through pinned models in the TUI.

5. **Scalable plugin SKILL.md scanning** — [#57690](https://github.com/anthropics/claude-code/issues/57690) requests that skill discovery be scoped to declared paths rather than a broad recursive scan.

## 6. Developer Pain Points

- **Cost/quota inflation remains the #1 grievance.** The twin issues of cache TTL regression (#46829) and fast session exhaustion (#38335) have been open for months with no definitive resolution. Users have resorted to analyzing their own JSONL logs to prove the problem.

- **Auto-compaction is unreliable and uncontrollable.** Multiple issues (#57567, #57490, #52390, #56271) confirm that `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE` is ignored, compaction fires when disabled, and auto-compact on session start *reduces* available context. This cluster of bugs affects power users running long sessions.

- **Windows is a second-class platform.** Extension activation failures (#42776, #57533), desktop relaunch issues, and Cowork connector bugs (#57589) consistently appear on Windows. Each release seems to fix one Windows bug while introducing another.

- **Auth/key precedence confusion.** When `ANTHROPIC_API_KEY` is set alongside a subscription, the error messaging is misleading (#8327, 112 comments), wasting significant developer troubleshooting time.

- **Ephemeral settings and no portability.** The lack of cloud sync for configuration forces manual maintenance across machines and risks skill/memory loss, compounded by plugins ignoring `CLAUDE_CONFIG_DIR` (#57683).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

## OpenAI Codex Community Digest — 2026-05-10

### 1. Today's Highlights
The Codex team shipped version `0.130.0` alongside three new `0.131.0` alpha builds, introducing a dedicated `codex remote-control` headless entrypoint, plugin hook visibility, and sharing metadata controls. Parallel to the release, engineering efforts were heavily focused on the TUI—refactoring state management, improving markdown table rendering, and adding goal management commands—while the community actively reported Windows-specific UI and plugin availability bugs.

### 2. Releases
- **rust-v0.130.0** ([Release 0.130.0](https://github.com/openai/codex/releases/tag/rust-v0.130.0)): Stable release adding plugin details for bundled hooks, link metadata/controls for sharing, and the new `codex remote-control` entrypoint for headless app-server management.
- **rust-v0.131.0-alpha.1 / alpha.2 / alpha.4** ([alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.4)): Rapid alpha iterations preparing for the next feature drop (details truncated, but indicate active pre-release stabilization).

### 3. Hot Issues
1. **[#9224 — Codex Remote Control](https://github.com/openai/codex/issues/9224)** (👍 378, 47 comments): Highly requested feature to control a desktop CLI from the ChatGPT mobile app. The new `codex remote-control` release directly addresses this.
2. **[#9544 — Remote compact stream disconnection](https://github.com/openai/codex/issues/9544)** (👍 14, 49 comments): Closed but heavily discussed; users reported persistent "stream disconnected before completion" errors during remote tasks.
3. **[#16857 — High GPU usage from thinking animation](https://github.com/openai/codex/issues/16857)** (👍 26, 24 comments): Desktop app renders a "thinking" animation that spikes GPU load; users want a static or efficient alternative.
4. **[#17444 — Booting MCP Server on Windows](https://github.com/openai/codex/issues/17444)** (👍 8, 21 comments): Windows users consistently struggle with MCP server initialization failures.
5. **[#19910 — Goals lost after mid-turn compaction](https://github.com/openai/codex/issues/19910)** (18 comments): Critical for the new Goals feature; active goal state is lost during compaction, requiring `/goal edit` (addressed in today's PRs).
6. **[#18960 — Frequent WebSocket reconnect loops](https://github.com/openai/codex/issues/18960)** (👍 18, 18 comments): Desktop app hit streaming failures causing repeated reconnections, disrupting workflows.
7. **[#18404 — Computer Use unavailable on macOS Intel](https://github.com/openai/codex/issues/18404)** (👍 6, 15 comments): Intel Mac users see the Computer Use plugin as "unavailable" despite the MCP server being enabled.
8. **[#21598 — Chrome plugin unavailable in EU/Norway](https://github.com/openai/codex/issues/21598)** (👍 4, 8 comments): Regional gating appears to incorrectly block the `@Chrome` skill for EU/UK Windows users.
9. **[#16374 — Windows shell/UI freezes](https://github.com/openai/codex/issues/16374)** (👍 7, 13 comments): Desktop app intermittently freezes the entire Windows shell; opening Settings temporarily resolves it.
10. **[#21299 — Laggy long chat threads on Windows](https://github.com/openai/codex/issues/21299)** (2 comments): Performance degradation in extended sessions makes the app unresponsive after each message.

### 4. Key PR Progress
1. **[PR #21866 — Split ChatWidget state](https://github.com/openai/codex/pull/21866)**: Refactors monolithic `ChatWidget` state into focused modules for transcript, turn lifecycle, and connectors—improving maintainability.
2. **[PR #21870 — Avoid blocking TUI on agent metadata](https://github.com/openai/codex/pull/21870)**: Fixes UI freezes during large subagent fan-outs by making metadata hydration non-blocking.
3. **[PR #21954 — Fix goal update + `/goal edit` command](https://github.com/openai/codex/pull/21954)**: Adds user-requested goal editing in the TUI and fixes a bug where goal state was lost on objective updates.
4. **[PR #21972 — Add hook visibility hints](https://github.com/openai/codex/pull/21972)**: Reduces noisy hook lifecycle output and gives users/admins control over hook notification visibility.
5. **[PR #21577 — Managed hook suppression](https://github.com/openai/codex/pull/21577)**: Allows admins to suppress managed hook notifications without hiding user-configured hooks.
6. **[PR #21435 — Managed worktrees in TUI](https://github.com/openai/codex/pull/21435)**: Brings first-class Git worktree management to the CLI/TUI, aligning with the App's managed worktree support.
7. **[PR #18202 — Windows deny-read parity](https://github.com/openai/codex/pull/18202)**: Adds Windows enforcement for `access = none` read restrictions, achieving policy parity with macOS/Linux sandboxes.
8. **[PR #21956 — Fix npm update loops](https://github.com/openai/codex/pull/21956)**: Resolves confusing update loops where multiple Codex installs cause the updater to mutate the wrong binary.
9. **[PR #20252 — Responsive Markdown tables in TUI](https://github.com/openai/codex/pull/20252)**: Renders markdown tables that adapt to terminal width and survive resizes.
10. **[PR #21963 — exec-server HTTP health endpoints](https://github.com/openai/codex/pull/21963)**: Adds standard HTTP health probes to `codex exec-server`, improving containerized deployment compatibility.

### 5. Feature Request Trends
- **Remote & Mobile Control**: Controlling Codex from mobile devices or headless environments remains the top-requested category ([#9224](https://github.com/openai/codex/issues/9224)), now partially addressed by `codex remote-control`.
- **Environment & Account Isolation**: Multi-tenant workflows requesting separate auth, config, and billing contexts per project ([#14330](https://github.com/openai/codex/issues/14330)).
- **Notification & Attention Management**: Users want proactive alerts when Codex is awaiting permission or attention ([#10081](https://github.com/openai/codex/issues/10081)).
- **MCP Logging Surface**: Requests to expose MCP `notifications/message` to the model's conversation, not just internal tracing ([#18056](https://github.com/openai/codex/issues/18056)).
- **RTL Text Support**: Arabic and Hebrew users need native right-to-left rendering ([#5826](https://github.com/openai/codex/issues/5826)).
- **Windows ARM64 Native Support**: ARM Surface devices currently run Codex in emulation ([#17491](https://github.com/openai/codex/issues/17491)).

### 6. Developer Pain Points
- **Windows is a second-class citizen**: The majority of high-comment issues involve Windows-specific problems—MCP boot failures, shell freezes, missing Chrome plugin, broken newlines in Zed, app-server stdout corruption on non-English locales, and lack of native ARM64 support.
- **Session performance degradation**: Long-running threads cause UI freezes and unresponsiveness across platforms ([#21299](https://github.com/openai/codex/issues/21299), [#21948](https://github.com/openai/codex/issues/21948)).
- **Context & Goal state loss**: Mid-turn compaction drops active goals and audit data ([#19910](https://github.com/openai/codex/issues/19910)), undermining trust in the Goals feature.
- **Connectivity instability**: WebSocket reconnect loops and stream disconnections disrupt active work ([#18960](https://github.com/openai/codex/issues/18960), [#9544](https://github.com/openai/codex/issues/9544)).
- **Regional feature gating bugs**: EU/UK users encounter unavailable plugins despite meeting prerequisites ([#21598](https://github.com/openai/codex/issues/21598), [#21788](https://github.com/openai/codex/issues/21788)).
- **Confusing CLI update UX**: Update notifications cause copy-paste errors and update loops ([#21967](https://github.com/openai/codex/issues/21967), [PR #21956](https://github.com/openai/codex/pull/21956)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-10

## 1. Today's Highlights
No new releases were cut in the last 24 hours, but the repository saw significant activity around **memory system reliability** and **agent stability**. A critical P1 bug was reported regarding an exponential token leak in the `StateSnapshotAsyncProcessor`, which was immediately paired with a community-submitted fix. Additionally, the core maintainers and contributors pushed a heavy volume of PRs focusing on Windows compatibility, streaming robustness, and context compaction improvements.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Hot Issues

1. **Exponential Token Leak in StateSnapshotAsyncProcessor** ([#26757](https://github.com/google-gemini/gemini-cli/issues/26757))
   *A severe P1 bug where episodic context graphs cause exponential token scaling, crashing background processors. The community reacted quickly, with a corresponding PR submitted the same day.*
2. **"Action Required" Hand Icon Fails to Dismiss** ([#21925](https://github.com/google-gemini/gemini-cli/issues/21925))
   *A highly-commented (17 comments) UX frustration where the CLI incorrectly prompts for user input during long-running shell scripts. It remains open with an ongoing PR attempting to fix the timing logic.*
3. **`save_memory` Tool Not Found Error** ([#26563](https://github.com/google-gemini/gemini-cli/issues/26563))
   *Users on v0.41.1 are finding the `/memory add` command broken, severely impacting workflows that rely on persistent agent context.*
4. **Subagent Goal Falsely Reported as Successful** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))
   *A critical agent reliability issue where subagents hitting `MAX_TURNS` report a "GOAL" success status, silently hiding the interruption from the user.*
5. **Permission Prompts Repeatedly Trigger for the Same File** ([#24916](https://github.com/google-gemini/gemini-cli/issues/24916))
   *A persistent security/UX annoyance where "allow for all future sessions" fails to stick, causing constant interruptions during agentic workflows.*
6. **Assess Impact of AST-Aware File Reads** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))
   *A highly supported Epic investigating AST-aware tools to reduce token noise and improve codebase navigation accuracy. Maintainers are actively evaluating third-party tools like `tilth` or `glyph`.*
7. **Shell Command Execution Stuck on "Waiting Input"** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))
   *Agents hang after executing simple CLI commands. This has garnered significant community traction (3 👍) as it causes workflow deadlocks requiring manual intervention.*
8. **Auto Memory Security and Logging Gaps** ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525))
   *Highlights a security concern where Auto Memory extraction prompts process transcript content (potentially containing secrets) before redaction occurs.*
9. **CLI Crashes on 400 Error with >128 Tools** ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))
   *Highlights a scaling limitation: the agent struggles to narrow down tool scopes, resulting in API errors when MCP/server integrations push available tools past the limit.*
10. **Model Creates Unnecessary TMP Scripts** ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571))
    *An annoying agentic behavior where the model pollutes the workspace with temporary edit scripts, making workspace cleanup and version control difficult.*

## 4. Key PR Progress

1. **[PR #26758](https://github.com/google-gemini/gemini-cli/pull/26758): Fix exponential token leak in StateSnapshotAsyncProcessor**
   Directly addresses today's P1 issue (#26757) by filtering previously summarized nodes from `targets` to prevent context graph explosion.
2. **[PR #24736](https://github.com/google-gemini/gemini-cli/pull/24736): Union-find context compaction for AgentHistoryProvider**
   Introduces an advanced compression strategy using union-find clustering to graduate messages from hot buffers to cold forests based on semantic similarity.
3. **[PR #26734](https://github.com/google-gemini/gemini-cli/pull/26734): Resolve audio/wav API errors and context overestimation**
   Fixes critical API rejection errors caused by incorrectly nesting audio data within `function_response.parts`.
4. **[PR #25279](https://github.com/google-gemini/gemini-cli/pull/25279): Correct action_required timing logic**
   Aims to resolve the widespread UX issue where the CLI falsely displays the "Action Required" hand icon during long-running processes.
5. **[PR #26306](https://github.com/google-gemini/gemini-cli/pull/26306): Prevent infinite retry loop on persistent backend errors**
   Fixes a CLI liveness failure where the app hangs indefinitely during backend outages or quota exhaustion.
6. **[PR #25980](https://github.com/google-gemini/gemini-cli/pull/25980): Don't crash on non-path @-mentions**
   Hardens the interactive prompt against crashes caused by pasting JSON-like content or malformed tool-call paths (fixes `ENAMETOOLONG` errors).
7. **[PR #25234](https://github.com/google-gemini/gemini-cli/pull/25234): Support clipboard image paste in WSL2**
   Resolves silent clipboard paste failures for WSL2 users by gracefully falling back when standard Wayland/X11 env vars are missing.
8. **[PR #26752](https://github.com/google-gemini/gemini-cli/pull/26752): Add Windows shell fallback support**
   Greatly improves enterprise/Windows compatibility by adding fallbacks when `powershell.exe` or `cmd.exe` are restricted by policy.
9. **[PR #26755](https://github.com/google-gemini/gemini-cli/pull/26755): Docs: Contributor guide for writing behavioral evals**
   Adds `evals/CONTRIBUTING.md` to lower the barrier for OSS developers writing behavioral evaluation tests using the `TestRig` API.
10. **[PR #26743](https://github.com/google-gemini/gemini-cli/pull/26743): Restore ripgrep PATH fallback lookup**
    Fixes an accessibility issue for npm/nvm users where the CLI failed to detect globally installed `rg` binaries on the system PATH.

## 5. Feature Request Trends

*   **Advanced Codebase Awareness (AST):** Strong momentum behind AST-aware tools and mappings to give the agent precise method bounds, reducing wasted tokens and read errors (#22745, #22746).
*   **Robust Component Evaluations:** A clear push toward expanding behavioral evals for tool selection, web usage, and task planning to ensure agent reliability at scale (#24353, #23415, #23416).
*   **UI and Terminal Polish:** Requests to hide specific slash commands (#25178), fix accessibility table streaming (#25218), and improve indentation trees (#22816).
*   **Safer and Resilient Agents:** Users want the agent to natively avoid destructive commands like `git reset --force` (#22672) and recover gracefully from locked browser profiles (#22232).

## 6. Developer Pain Points

*   **Agent Reliability and Hallucinations:** Developers are frustrated by agents silently failing or faking success. Subagents hiding `MAX_TURNS` interruptions (#22323) and unused custom skills/instructions (#21968) severely erode trust in complex automated tasks.
*   **State and Memory Fragility:** The auto-memory system is currently a source of friction, plagued by missing tools (#26563), ignored low-signal sessions (#26522), and silent patch failures (#26523).
*   **Permission and Security Friction:** The security model currently interrupts workflows unnecessarily. Repeated prompts for previously approved files (#24916) and pre-redaction secret exposure in memory (#26525) are major pain points.
*   **Execution Hangs:** The CLI frequently deadlocks, either from shell execution getting stuck awaiting input (#25166), crashing during specific output hooks (#22186), or aggressively retrying unresponsive backends (#26306).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for 2026-05-10.

---

## 1. Today's Highlights
No new releases or merged Pull Requests were recorded over the past 24 hours. However, the issue tracker saw a spike in activity around multi-model compatibility, session state management, and agent tooling autonomy. Notably, the community reported critical edge cases involving silent CLI exits, infinite memory compaction loops, and unresponsiveness during model quota fallbacks.

## 2. Releases
**None.** 
There were no new releases or patched versions published in the last 24 hours.

## 3. Hot Issues

1. **[Non-interactive mode fails silently on macOS (#3189)](https://github.com/github/copilot-cli/issues/3189)**
   `copilot -p` is exiting immediately with code 1, generating zero output and no logs. Because interactive mode (`copilot -i`) remains functional, this points to a specific regression in the headless execution pipeline, heavily impacting CI/CD workflows. 

2. **[Infinite compaction loop during long sessions (#3216)](https://github/copilot-cli/issues/3216)**
   When approaching the context limit (~136 turns) with complex prompts and PDF attachments, the agent using Claude Sonnet 4.6 falls into an infinite directory-listing and memory-compaction loop. This represents a severe failure in context memory management for deep, persistent sessions.

3. **[Model fallback requires a full restart (#3217)](https://github.com/github/copilot-cli/issues/3217)**
   When users exhaust their premium quota, the Auto model fallback successfully updates the UI status line to a new model (e.g., GPT-4.1) but fails to resume the actual agent loop. Users are forced to manually restart the session.

4. **[DeepSeek-V4 tool calls result in 400 errors (#3215)](https://github/copilot-cli/issues/3215)**
   Multi-modal support takes a hit as DeepSeek-V4 (Flash/Pro) fails due to mismatched `tool_use` and `tool_result` API blocks. This highlights ongoing inconsistencies in how the CLI maps tool schemas across different third-party LLM providers.

5. **[Hosted-mode agents fail to write files autonomously (#3209)](https://github.com/github/copilot-cli/issues/3209)**
   In premium/hosted mode, the agent loop ignores auto-allowed permissions and outright refuses to autonomously execute `write`, `edit`, or `create_file` tools, requiring manual approval for every generation step.

6. **[preToolUse hooks trigger redundant confirmation dialogs (#2643)](https://github.com/github/copilot-cli/issues/2643)**
   A long-standing friction point (active since April). If a `preToolUse` hook rewrites a command with `permissionDecision: allow`, the CLI ignores the silent flag and still prompts the user with an interactive confirmation dialog.

7. **[BYOK Azure ignores `wire_api` configuration (#3208)](https://github.com/github/copilot-cli/issues/3208)**
   When configuring Azure OpenAI via BYOK, the CLI ignores `wire_api: completions` and forces requests to the Responses API using a hardcoded, rejected `api-version`. This effectively breaks custom Azure Enterprise endpoints.

8. **[Critical PowerShell `$home` footgun (#3098)](https://github.com/github/copilot-cli/issues/3098)**
   Due to PowerShell's case-insensitivity, generated scripts using a local `$home` variable overwrite the read-only system `$HOME` variable, inadvertently mutating or deleting user profiles during cleanup steps (e.g., `Remove-Item -Recurse -Force`).

9. **[CLI skips the 'a' character on macOS (#3211)](https://github.com/github/copilot-cli/issues/3211)**
   A bizarre and highly disruptive input parsing bug where the CLI drops the 'a' character during fast typing (e.g., `git add` becomes `git dd`), severely breaking terminal workflows across both VS Code and external terminals.

10. **[Request to delete remote agent sessions (#3072)](https://github.com/github/copilot-cli/issues/3072)**
    A highly requested UX enhancement. Currently, the `/resume` menu allows the deletion of local sessions but arbitrarily blocks the deletion of remote sessions, leaving users with a cluttered workspace.

## 4. Key PR Progress
No Pull Requests were created, updated, or merged within the last 24 hours. Development merging appears to be paused or pending review.

## 5. Feature Request Trends
- **Robust Remote Session Management:** Developers are pushing for feature parity between local and remote sessions, specifically the ability to prune or delete remote agent sessions via the `/resume` interface (Issue #3072).
- **Seamless Auto-Fallback State Recovery:** There is a strong need for the CLI's "Auto" quota fallback mechanism to gracefully resume state rather than simply updating the UI and stalling (Issue #3217).
- **Silent Command Rewrites via Hooks:** Plugin developers want the ability to seamlessly mutate commands behind the scenes using `updatedInput` without triggering user-facing permission dialogs (Issue #2643).

## 6. Developer Pain Points
- **Cross-Model API Instability:** The shift towards BYOK (Bring Your Own Key) and multi-model architectures is exposing severe fragilities in the CLI's wire-protocol handling, breaking integrations with Azure OpenAI completions and DeepSeek-V4.
- **Agent Autonomy Friction:** Users continue to express frustration over the agent's inability to autonomously execute file modifications. Between preToolUse confirmation loops and strict write-tool blocks in hosted mode, users are forced to babysit the CLI.
- **Input/Environment Quirks:** Low-level, environment-specific bugs are severely impacting usability. The macOS keystroke-dropping issue and the WSL symlink canonical path resolution override are breaking core terminal ergonomics and automated scripting workflows.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-10

## 1. Today's Highlights
No new releases shipped today, but the maintainers and contributors were extremely active in hardening the Windows experience—merging a landmark PR to switch the default Shell backend from PowerShell to Git Bash, and opening fixes for `kimi term` crashes and console-window spam. Activity also spiked around **WebUI reliability** (AFK mode propagation, long-filename layout fixes) and **server-side overload concerns**, with a user reporting persistent 429 `engine_overloaded` errors on the official Kimi platform for over 48 hours.

---

## 2. Releases
No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|----------------|
| [#640](https://github.com/MoonshotAI/kimi-cli/issues/640) | **CLI stuck in read loop** | A long-standing bug (open since Jan) where Kimi re-reads the same file endlessly, hogging resources. Still unresolved with 6 comments—hints at deeper agent-loop issues. |
| [#2162](https://github.com/MoonshotAI/kimi-cli/issues/2162) | **Cannot Login** | Users on non-standard platforms (Asahi Linux/ARM) are unable to authenticate, raising questions about platform-specific auth flows. |
| [#1618](https://github.com/MoonshotAI/kimi-cli/issues/1618) | **Allow bash/zsh shell executor on Windows** | Closed in favor of **PR #2186** (Git Bash default), marking a major UX shift for Windows devs. |
| [#2209](https://github.com/MoonshotAI/kimi-cli/issues/2209) | **Persistent 429 engine_overloaded for 48h+** | Cloud-server users report Kimi K2.6 returning continuous 429s. Diagnostic files attached—may indicate capacity limits on the official platform. |
| [#2208](https://github.com/MoonshotAI/kimi-cli/issues/2208) | **OpenAI-compatible API for use in Cursor** | A popular request to expose Kimi K2.6 as an OpenAI-compatible endpoint so it can be used directly in third-party tools like Cursor. |
| [#2206](https://github.com/MoonshotAI/kimi-cli/issues/2206) | **WebUI sidebar action buttons hidden by long filenames** | UI layout bug making workspace files unmanageable; fixed the same day in PR #2207. |
| [#2204](https://github.com/MoonshotAI/kimi-cli/issues/2204) | **No way to restore rotated `/clear` history** | `/clear` rotates context files but offers no restore path—users lose conversation continuity with no recovery mechanism. |
| [#2203](https://github.com/MoonshotAI/kimi-cli/issues/2203) | **AuthlibDeprecationWarning on every startup with MCP** | Noisy deprecation warning from `authlib` when MCP servers are configured, cluttering the CLI experience on macOS. |
| [#2202](https://github.com/MoonshotAI/kimi-cli/issues/2202) | **`kimi term` crashes on Windows (missing `fcntl`)** | Windows users hit an immediate crash due to POSIX-only `fcntl` dependency in the Toad terminal backend, followed by a secondary `rich.pretty` error. |
| [#2201](https://github.com/MoonshotAI/kimi-cli/issues/2201) | **AFK mode and `--no-restrict-sensitive-apis` mutually exclusive** | WebUI users cannot combine unattended (AFK) mode with unrestricted APIs, limiting automation scenarios. |

---

## 4. Key PR Progress

| # | Title | What It Does |
|---|-------|--------------|
| [#2186](https://github.com/MoonshotAI/kimi-cli/pull/2186) **[MERGED]** | **Switch Windows Shell backend to Git Bash** | Replaces PowerShell with `bash.exe` (from Git for Windows) as the default Shell tool, eliminating the most common cross-platform friction. Resolves #1618. |
| [#2212](https://github.com/MoonshotAI/kimi-cli/pull/2212) **[MERGED]** | **Tighten Windows PowerShell guidance** | Updates the Shell tool description to explicitly call out missing Unix utilities (`head`, `grep`, etc.) on default Windows installs. |
| [#2177](https://github.com/MoonshotAI/kimi-cli/pull/2177) **[MERGED]** | **Clear partial UI output on LLM retry** | When a streamed LLM call fails mid-output and tenacity retries, the old partial text is now cleared so the retry doesn't appear concatenated. |
| [#2213](https://github.com/MoonshotAI/kimi-cli/pull/2213) **[MERGED]** | **Unbreak CI after #2177** | Follow-up fix initializing `_current_step_retry` in test fixtures and bumping protocol version literals to `"1.10"`. |
| [#2205](https://github.com/MoonshotAI/kimi-cli/pull/2205) **[MERGED]** | **Register `/btw` slash command** | The `/btw` command was functional but invisible in completions and `/help`; now properly registered. |
| [#2190](https://github.com/MoonshotAI/kimi-cli/pull/2190) **[MERGED]** | **Add app_name & build_sha to telemetry** | Enriches telemetry with build provenance and distinguishes manual vs. manual-with-prompt compaction triggers. |
| [#817](https://github.com/MoonshotAI/kimi-cli/pull/817) **[MERGED]** | **Add `/context` command** | Long-running community PR finally merged—introduces a `/context` command to display current context information. |
| [#2210](https://github.com/MoonshotAI/kimi-cli/pull/2210) **[OPEN]** | **Fail cleanly on Windows for `kimi term`** | Makes `kimi term` exit gracefully on Windows with a clear message about POSIX dependencies, closing #2202. |
| [#2211](https://github.com/MoonshotAI/kimi-cli/pull/2211) **[OPEN]** | **Propagate AFK mode to Web workers** | Ensures worker subprocesses spawned by `kimi --afk web` inherit the non-interactive flag, preventing unwanted approval prompts. |
| [#2207](https://github.com/MoonshotAI/kimi-cli/pull/2207) **[OPEN]** | **Fix WebUI long-filename sidebar overflow** | CSS/layout fix to keep action buttons visible regardless of filename length in the Workspace files sidebar. |

---

## 5. Feature Request Trends

1. **OpenAI-Compatible API Endpoint** — The most voiced request (#2208): users want to use Kimi K2.6 in Cursor and other tools via a standard `/v1/chat/completions` style endpoint.
2. **History & Context Recovery** — Demand for a way to restore rotated context backups (#2204) and more granular `/context` introspection (#817, now merged).
3. **Shell/Platform Flexibility on Windows** — Consistent demand for POSIX-compatible shells on Windows (#1618, resolved) and clean handling of unsupported features like `kimi term` (#2202, #2210).
4. **Unattended Automation Mode** — Users want AFK + unrestricted API access for CI/CD and headless deployments (#2201, #2211).
5. **Platform Reliability / Capacity** — Multiple reports of 429 errors (#2209) suggest users are pushing the hosted Kimi platform's limits and need better rate-limit handling or capacity communication.

---

## 6. Developer Pain Points

- **Windows is Still a Second-Class Citizen:** Despite today's Git Bash migration (#2186), Windows users continue to hit crashes (`kimi term`, `fcntl`), missing utilities, and console-window spam (#2197, #2199). The POSIX assumption runs deep in the codebase.
- **Server Overload & Rate Limiting:** The 48-hour 429 issue (#2209) on the official Kimi platform is a significant pain point for production users, with no clear mitigation beyond waiting.
- **Context Management Gaps:** The lack of a history restore mechanism after `/clear` (#2204) creates real risk of lost work, especially in long agentic sessions.
- **Noisy Startup Warnings:** Authlib deprecation warnings (#2203) and similar logging noise erode confidence in CLI stability for daily-driver usage.
- **MCP & Third-Party Integration Friction:** Multiple issues and PRs (#2203, #2113, #2183) touch on MCP server configuration, image path handling, and terminal forwarding—indicating the integration surface is still rough.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-10

## 1. Today's Highlights
The OpenCode project experienced a turbulent day following the release of **v1.14.42**, which introduced a major backend migration (Hono → Effect HttpApi). This change caused widespread TUI bootstrap failures and startup crashes for users with certain plugins, prompting the maintainers to issue rapid patches in **v1.14.43** and **v1.14.44**. Alongside firefighting, the team also shipped exciting new features like the "Scout" agent, HTTP response compression, and automatic workspace sync.

## 2. Releases
*   **v1.14.44**: Released to fix a critical migration bug where existing workspaces failed to upgrade due to the newly added `time_used` field.
*   **v1.14.43**: Acted as a hotfix for the v1.14.42 crash. It ensured provider/config APIs remain functional even if auth loaders inject non-JSON options, and fixed ACP updates to include tool image attachments (Thanks to community contributor @SteffenDE).
*   **v1.14.42**: A significant release featuring HTTP API response compression for large payloads, a new "Scout" agent for repo research and dependency inspection, and automatic discovery/registration for adapter-backed workspaces.

## 3. Hot Issues
1.  **[#26546](https://github.com/anomalyco/opencode/issues/26546) Non-descript startup error on v1.14.42:** Users reported immediate TUI crashes with empty responses. This was the flagship issue for the Hono migration fallout, resolved by the subsequent v1.14.43 patch.
2.  **[#26568](https://github.com/anomalyco/opencode/issues/26568) Rapid-fire release fatigue:** Users expressed frustration over being prompted to update multiple times in a single hour, highlighting the chaotic release cadence needed to patch v1.14.42.
3.  **[#26557](https://github.com/anomalyco/opencode/issues/26557) Breaking Plugin API changes:** The `api.command` namespace was silently removed in v1.14.42. Developers are frustrated by the lack of a deprecation cycle or migration guide.
4.  **[#5887](https://github.com/anomalyco/opencode/issues/5887) True Async Sub-Agent Delegation:** A highly requested feature (+68 👍) requesting "fire-and-forget" background agents instead of synchronous, blocking sub-agent flows.
5.  **[#8463](https://github.com/anomalyco/opencode/issues/8463) YOLO mode requested:** A highly upvoted feature (+44 👍) asking for a `--dangerously-skip-permissions` flag for automated CI/CD or trusted local environments.
6.  **[#26321](https://github.com/anomalyco/opencode/issues/26321) Desktop `PATH` inconsistencies:** On macOS, the Desktop app uses a minimal shell `PATH` (missing Homebrew, etc.) while the CLI correctly preserves the user's zsh `PATH`.
7.  **[#26198](https://github.com/anomalyco/opencode/issues/26198) Terminal mouse escape sequences:** The CLI sometimes fails to disable mouse tracking when a process is interrupted, leaving the terminal in an unusable raw input state.
8.  **[#26587](https://github.com/anomalyco/opencode/issues/26587) Microsoft Defender SmartScreen blocks app:** The v1.14.42 Windows installer is being flagged as malicious by Windows Defender, blocking user upgrades.
9.  **[#24316](https://github.com/anomalyco/opencode/issues/24316) Qwen 3.6 tool calls hang:** Users running local models (like Qwen 3.6 35b-a3b via LM Studio) are experiencing progress halts due to naked tool calls in the console.
10. **[#25202](https://github.com/anomalyco/opencode/issues/25202) GPT-5.5 compaction behavior:** Users noticed GPT-5.5 token counts behave differently than GPT-5.4, hitting hard compaction thresholds much sooner in long sessions.

## 4. Key PR Progress
1.  **[#26548](https://github.com/anomalyco/opencode/pull/26548) Revert Hono deletion:** A critical temporary fix that restored the Hono backend to fix the mass startup failures caused by plugin auth wire-format mismatches.
2.  **[#26582](https://github.com/anomalyco/opencode/pull/26582) Backfill workspace `time_used`:** Fixed the v1.14.43 migration bug where active workspaces were given a `0` timestamp and sorted to the bottom of recent lists.
3.  **[#26584](https://github.com/anomalyco/opencode/pull/26584) Wrap SDK Errors:** Fixed an annoying UI bug where HTTP errors from the Effect HttpApi migration were rendered in the TUI as `[object Object]` instead of readable error messages.
4.  **[#26581](https://github.com/anomalyco/opencode/pull/26581) Fix workspace query schemas:** Resolved a 400 error bug where the runtime decoder rejected unknown query fields (`directory`, `workspace`) during parallel SDK bootstrap fetches.
5.  **[#26583](https://github.com/anomalyco/opencode/pull/26583) Fix `read` permission patterns:** Standardized the `read` tool to check permissions against relative worktree paths, matching the behavior of `edit` and `write`.
6.  **[#26588](https://github.com/anomalyco/opencode/pull/26588) Fix `opencode run` exit codes:** Resolves an issue where the CLI would exit with code `0` even when encountering model errors, breaking shell scripts and CI pipelines.
7.  **[#26580](https://github.com/anomalyco/opencode/pull/26580) Normalize Windows paths:** Fixes a bug where Windows Desktop users lost all session history upon restarting the client due to path format mismatches.
8.  **[#26579](https://github.com/anomalyco/opencode/pull/26579) Accept legacy summary diffs:** Hardened session diff consumers to prevent crashes when migrating older sessions missing `patch` and file details.
9.  **[#14625](https://github.com/anomalyco/opencode/pull/14625) CLI non-zero exit codes:** An older community PR finally gaining traction to ensure the CLI properly signals failures to the host shell.
10. **[#18235](https://github.com/anomalyco/opencode/pull/18235) Add offline mode:** Introduces a "kill switch" for non-essential outbound network connections, highly requested for privacy-sensitive or air-gapped environments.

## 5. Feature Request Trends
*   **Agent Autonomy:** There is a strong desire for more asynchronous agent workflows, specifically "fire-and-forget" sub-agent delegation and multi-LLM structured team debates.
*   **Unattended Automation:** Users want easier ways to bypass permission prompts (YOLO mode) and better CLI exit-code handling for headless CI/CD pipeline integration.
*   **Plugin API Control:** Developers want more pre-call routing power (e.g., a `chat.model` hook) and are demanding strict API stability to prevent breaking changes.
*   **Local Model Stability:** A significant trend involves hardening OpenCode for local, open-weight models (Qwen, via LM Studio/llama.cpp), which sometimes output imperfect tool-call schemas.

## 6. Developer Pain Points
*   **TUI Bootstrap Instability:** The migration from Hono to Effect HttpApi caused cascading 400 errors and raw object rendering, severely degrading the core TUI experience.
*   **Breaking Changes without Migration Paths:** Plugin developers are deeply frustrated by silent API removals (like `api.command`), forcing them to reverse-engineer diffs to keep their extensions working.
*   **Environment Discrepancies:** Discrepancies between how the CLI and Desktop app handle environment variables (specifically the `$PATH` on macOS) continue to cause tool execution failures.
*   **Aggressive Defender Flagging:** Windows developers are consistently blocked by Microsoft Defender SmartScreen, disrupting update cadences and eroding trust.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-10

## 1. Today's Highlights
The Pi community is experiencing a massive wave of issue closures and refactoring activity, largely marked by a sweeping `closed-because-bigrefactor` and `closed-because-weekend` tagging effort across the repository. Additionally, the maintainers recently transitioned the project's npm organization from `@mariozechner/pi-coding-agent` to `@earendil-works/pi-coding-agent`, which has sparked active community discussion regarding breaking changes to extensions. There were no new official software releases today, but a substantial amount of bug fixing and feature merging took place.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
1. **Organization Change Explanation ([#4349](https://github.com/earendil-works/pi/issues/4349))**: Users are requesting official communication regarding the sudden package migration from `@mariozechner` to `@earendil-works`. The invasive nature of this change has broken existing extensions and caused confusion.
2. **Hard Crash on CTRL-O ([#4357](https://github.com/earendil-works/pi/issues/4357))**: A critical bug where pressing `CTRL-O` causes a core dump due to an uninitialized Theme state (`Theme not initialized`), also echoed in [#4333](https://github.com/earendil-works/pi/issues/4333).
3. **Core Dump on /resume ([#4355](https://github.com/earendil-works/pi/issues/4355))**: Attempting to resume a session with no active sessions triggers a fatal Mark-Compact GC garbage collection loop and memory limit crash.
4. **Bun WebSockets Ignore Proxy Environments ([#4346](https://github.com/earendil-works/pi/issues/4346))**: Since v0.72.0, the OpenAI Codex provider silently bypasses `https_proxy` when using the `auto` transport with Bun, breaking workflows in restricted networks.
5. **Auth Token Leakage to Non-Anthropic Providers ([#4342](https://github.com/earendil-works/pi/issues/4342))**: When using the `anthropic-messages` API for third-party providers (like Xiaomi MiMo), the SDK incorrectly appends `ANTHROPIC_AUTH_TOKEN` alongside the custom `x-api-key`, resulting in immediate 401 Unauthorized errors.
6. **Silent Stream Truncation ([#4345](https://github.com/earendil-works/pi/issues/4345))**: OpenAI-compatible custom providers will silently accept interrupted streams as "done" rather than triggering an auto-retry, resulting in incomplete code generation without warning.
7. **Agent Freezes After Edit Tool Use ([#4343](https://github.com/earendil-works/pi/issues/4343))**: The TUI agent completely freezes when an `edit` tool call applies changes to disk but fails to record the `toolResult` in the session JSONL, halting the agent loop indefinitely.
8. **Thinking Level UI Confusion ([#4350](https://github.com/earendil-works/pi/issues/4350), [#4344](https://github.com/earendil-works/pi/issues/4344))**: Users are frustrated that the TUI displays and allows toggling of thinking levels (like 'xhigh') even when the selected model (e.g., Kimi K2.6) explicitly doesn't support it. 
9. **Kimi K2.6 Tool Call Error ([#4251](https://github.com/earendil-works/pi/issues/4251))**: Using reasoning models on certain providers fails with a `reasoning_content is missing` error, interrupting the agent message chain.
10. **Zsh/tmux Color Rendering ([#4185](https://github.com/earendil-works/pi/issues/4185))**: A highly upvoted visual bug reporting terrible contrast and bad colors when running Pi within tmux/zsh setups, still actively discussed by the community.

## 4. Key PR Progress
1. **[PR #4354](https://github.com/earendil-works/pi/pull/4354)** `fix(ai): respect proxy envs in bun's websocket`: Fixes a major networking issue where Bun's WebSocket implementation ignored proxy env vars. The PR manually injects proxy arguments to restore expected network behavior.
2. **[PR #4339](https://github.com/earendil-works/pi/pull/4339)** `fix: prevent ANTHROPIC_AUTH_TOKEN env var leaking`: Resolves the 401 auth bug by ensuring the Anthropic SDK's auto-pulled environment token doesn't bleed into non-Anthropic proxy requests.
3. **[PR #4351](https://github.com/earendil-works/pi/pull/4351)** `feat: auto-discover Ollama context windows`: Removes the hardcoded 128K context window fallback for Ollama models by automatically fetching the correct limits from `/api/show`, vastly improving local LLM context management.
4. **[PR #4347](https://github.com/earendil-works/pi/pull/4347)** `fix(tui): CJK text extraction`: Fixes crucial rendering bugs for double-width CJK characters in the terminal UI, resolving text selection and extraction issues for international developers.
5. **[PR #4352](https://github.com/earendil-works/pi/pull/4352)** `Fix turn-boundary compaction resume flow`: Prevents the TUI agent from freezing during session compaction by ensuring the system waits for event persistence and properly manages tool-result boundaries.
6. **[PR #4329](https://github.com/earendil-works/pi/pull/4329)** `feat(coding-agent): add --mode worker-loop`: Introduces a new bus-driven task dispatch mode via Unix sockets, replacing a legacy Node wrapper for CI/CD or automated agent environments.
7. **[PR #4331](https://github.com/earendil-works/pi/pull/4331)** `feat: support Cmd+V image paste`: Brilliant macOS UX fix that detects empty bracketed pastes and falls back to checking the clipboard for image data, bringing Cmd+V image support to macOS terminals.
8. **[PR #4348](https://github.com/earendil-works/pi/pull/4348)** `feat(ai): Add retries to Google Vertex AI`: Passes the `retry.provider.maxRetries` argument down to the Vertex AI provider to handle frequent and annoying 429 rate-limit errors automatically.
9. **[PR #4335](https://github.com/earendil-works/pi/pull/4335)** `Normalize Copilot API base URL`: Fixes GitHub Copilot proxy endpoints by automatically stripping the `business` subdomain, ensuring standard API resolution.
10. **[PR #4356](https://github.com/earendil-works/pi/pull/4356)** `pi dart`: An interesting, though quickly closed, attempt to port or integrate Pi bindings for Dart.

## 5. Feature Request Trends
* **Enhanced Model Parameter Control**: Developers continue to request granular control over LLM generation parameters (temperature, top_p, top_k) directly within the UI/config ([#1837](https://github.com/earendil-works/pi/issues/1837)).
* **Robust Extension APIs**: There is a strong push to expose more internal states to extensions, such as fetching editor cursor coordinates via `ExtensionUIContext` ([#4309](https://github.com/earendil-works/pi/issues/4309)).
* **UI Polish and State Awareness**: Users want the UI to be contextually aware of the active model's capabilities (e.g., hiding thinking levels if a model doesn't support them) ([#4350](https://github.com/earendil-works/pi/issues/4350)) and providing persistent UI elements like always-visible model footers ([#4233](https://github.com/earendil-works/pi/issues/4233)).
* **Portable Configurations**: Requests for shell/path settings to universally support `~` and `$HOME` variables so developer dotfiles remain portable across machines ([#4353](https://github.com/earendil-works/pi/issues/4353)).

## 6. Developer Pain Points
* **Terminal Compatibility Woes**: Developers using non-standard terminal emulators (Wezterm with Kitty keyboard protocols, tmux, specific versions of Warp/iTerm2) are experiencing broken keybindings (like `Esc`) and rendering artifacts.
* **Opaque Agent Failures**: When the agent loops indefinitely, says "working" but does nothing, or silently accepts truncated streams, developers lose trust in the tool. There is a high demand for better timeout handling, auto-retry logic for broken connections, and transparent error logs.
* **Disruptive Refactoring and Poor Communication**: The sudden shift in the npm organization scope, combined with massive bulk closures of valid issues tagged with `closed-because-bigrefactor` or `closed-because-weekend`, is causing notable community friction. Users feel that valid bugs are being swept under the rug during architectural transitions.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-10

## 1. Today's Highlights
Qwen Code officially shipped the first preview of its Python SDK (`qwen-code-sdk` v0.1.0rc0) alongside CLI version v0.15.10-preview.0, marking a significant step toward programmatic integrations. The community remains highly active on the architectural front, with substantial progress on the `qwen serve` daemon mode, structured JSON output for headless CLI, and performance overhauls for session resumption. Meanwhile, a controversial proposal to severely limit the Qwen OAuth free tier continues to dominate user discussions.

## 2. Releases
*   **[v0.15.10-preview.0](https://github.com/QwenLM/qwen-code/releases)**: Introduced CLI validation for the `/model` command arguments and added core logging for the actual OpenAI wire request to aid in debugging.
*   **[v0.15.9-nightly.20260509](https://github.com/QwenLM/qwen-code/releases)**: Includes the `/model` validation fix and release chores.
*   **[sdk-python-v0.1.0-preview.0](https://github.com/QwenLM/qwen-code/releases)**: Published the `qwen-code-sdk` package to PyPI (version `0.1.0rc0`), enabling Python-native interactions with the Qwen Code agent.

## 3. Hot Issues
1.  **[Qwen OAuth Free Tier Policy Adjustment #3203](https://github.com/QwenLM/qwen-code/issues/3203)**: A proposal to reduce the daily free quota from 1,000 to 100 requests and phase out the free tier entirely. It has sparked massive feedback (123 comments) from the community regarding the future accessibility of the tool.
2.  **[File type detection misidentifies encrypted files as binary #3964](https://github.com/QwenLM/qwen-code/issues/3964)**: A P1 regression where `edit`/`write_file` mistakenly identify source files (like `.c` or `.cpp`) as binary payloads in encrypted/DRM file systems.
3.  **[Qwen code automatically stops long tasks #3730](https://github.com/QwenLM/qwen-code/issues/3730)**: A P1 bug where the agent suddenly commands itself to stop during heavy, multi-day tasks without user intervention.
4.  **[API connected, but fail to fetch #3914](https://github.com/QwenLM/qwen-code/issues/3914)**: Widespread connection drop issues (`fetch failed`) affecting custom OpenAI-compatible endpoints (like OpenRouter).
5.  **[Daemon mode (`qwen serve`) proposal #3803](https://github.com/QwenLM/qwen-code/issues/3803)**: A comprehensive 24-chapter design proposal for running Qwen Code as a persistent background daemon, gaining strong traction.
6.  **[AI-powered `/commit` command redesign #4000](https://github.com/QwenLM/qwen-code/issues/4000)**: Tracking the redesign of the `/commit` slash command to leverage AI for drafting messages rather than acting as a basic `git add -A` wrapper.
7.  **[SDK CLI process exits with code 1 #3823](https://github.com/QwenLM/qwen-code/issues/3823)**: Users report that upgrading `@qwen-code/sdk` from 0.1.5 to 0.1.6/0.1.7 causes random crashes during model execution.
8.  **[Plan mode flickering in Ghostty terminal #3979](https://github.com/QwenLM/qwen-code/issues/3979)**: A UI rendering bug causing continuous screen flashing in the Ghostty terminal after the agent finishes replying in plan mode.
9.  **[Weixin channel bot sends grey images #3993](https://github.com/QwenLM/qwen-code/issues/3992)**: When integrating with WeChat, valid PNG images generated by the bot show up as grey placeholders.
10. **[Model stream ends without a finish reason #3888](https://github.com/QwenLM/qwen-code/issues/3888)**: Stream handling errors where the API connection drops without a proper finish reason, interrupting workflows.

## 4. Key PR Progress
1.  **[feat(cli,sdk): qwen serve daemon (Stage 1) #3889](https://github.com/QwenLM/qwen-code/pull/3889)**: Implements the foundational HTTP daemon bridging ACP NDJSON over HTTP+SSE, pushing the daemon mode proposal toward reality.
2.  **[fix(core): File misclassification (Issue #3964) #4002](https://github.com/QwenLM/qwen-code/pull/4002)**: Addresses the encrypted-FS binary detection bug by fixing the cacheable flag and file reading logic.
3.  **[feat(cli): add structured JSON schema output #4001](https://github.com/QwenLM/qwen-code/pull/4001)** (and related **[#3598](https://github.com/QwenLM/qwen-code/pull/3598)**): Introduces `--json-schema` for headless mode, allowing programmatic users to enforce strict JSON outputs.
4.  **[perf(core): Bound session-list metadata reads #3897](https://github.com/QwenLM/qwen-code/pull/3897)**: Optimizes `/resume` by bounding reads to head/tail 64KB, drastically improving load times for large session histories.
5.  **[feat(core,cli): Two-phase session listing #3989](https://github.com/QwenLM/qwen-code/pull/3989)**: Splits session listing to render the UI instantly while metadata hydrates in the background.
6.  **[fix(core): Deduplicate geminiChat recovery text #3966](https://github.com/QwenLM/qwen-code/pull/3966)**: Fixes an issue where model continuations after hitting `MAX_TOKENS` would duplicate text chunks.
7.  **[refactor(core): TaskBase envelope #3970](https://github.com/QwenLM/qwen-code/pull/3970)**: Lays the groundwork for unifying task registries by introducing a shared envelope for task persistence.
8.  **[feat(tools): On-demand deferred tool schemas #3589](https://github.com/QwenLM/qwen-code/pull/3589)**: Implements `ToolSearch` to shrink default tool declarations by ~15K tokens, improving context window efficiency.
9.  **[feat(cli): Ctrl+B promote keybind #3969](https://github.com/QwenLM/qwen-code/pull/3969)**: Completes the foreground-to-background task promotion feature for better asynchronous task management.
10. **[fix(core): Normalize OpenAI stream deltas #3896](https://github.com/QwenLM/qwen-code/pull/3896)**: Fixes content echoing issues with OpenAI-compatible endpoints that send accumulated text instead of incremental suffixes.

## 5. Feature Request Trends
*   **Daemonization & SDK Integration**: A strong push toward persistent background processes (`qwen serve`) and robust Python/Node SDKs for embedding Qwen Code into broader CI/CD and automation workflows.
*   **Structured Data & Headless Execution**: High demand for strict JSON output (`--json-schema`) to reliably parse agent outputs in automated pipelines without fragile regex parsing.
*   **Enhanced Sub-Agent Observability**: Requests to expose TODO lists and better monitor tool routing for sub-agents, making complex multi-agent workflows easier to debug.
*   **Git/AI Workflows**: Interest in deeply integrated AI git workflows, starting with intelligent `/commit` message drafting.

## 6. Developer Pain Points
*   **Streaming & Compatibility Instability**: Frequent errors with OpenAI-compatible endpoints and custom providers, manifesting as "stream ended without finish reason," fetch failures, and improperly chunked deltas.
*   **Performance & UI Jank**: Developers continue to struggle with CLI responsiveness, noting UI freezing on narrow terminals, severe flickering in modern GPU terminals (like Ghostty), and heavy `/resume` loading times.
*   **Path & Configuration Overrides**: Config issues persist, such as the tool stripping JSON comments in `settings.json`, tilde (`~`) expansion failures in `cwd`, and overriding configurations on startup.

</details>