# AI CLI Tools Community Digest 2026-04-15

> Generated: 2026-04-14 22:12 UTC | Tools covered: 7

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

## AI Developer CLI Tools: Cross-Tool Ecosystem Report (2026-04-15)

### 1. Ecosystem Overview
The AI CLI tooling landscape is rapidly transitioning from simple terminal-based chat interfaces into sophisticated, autonomous coding agents. Today's ecosystem is defined by aggressive architectural overhauls aimed at managing deep complexity: context compaction, background agent lifecycle management, and multi-provider API abstractions. A clear fault line is emerging between tools backed by foundational model providers (OpenAI, Anthropic, Google) prioritizing proprietary model integration, and independent/open-source players prioritizing multi-model flexibility and extensibility. Across the board, developers are moving past the novelty of AI generation and demanding production-grade stability, transparent cost controls, and offline resilience.

### 2. Activity Comparison
Activity levels vary significantly, with open-source and newer entrants showing the highest volume of community-driven PRs, while established tools battle scaling and backend integration issues.

| Tool | Owner | Issues (Today) | PRs (Today) | Release Status (Last 24h) | Dominant Focus |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | Anthropic | 10 | 10 | **v2.1.108** & **v2.1.107** | Cache TTL, cost inflation, companion features |
| **OpenAI Codex** | OpenAI | 10 | 10 | Alpha patches (v0.121.0) | Compaction crashes, CPU/Memory leaks, MCP |
| **Gemini CLI** | Google | 10 | 10 | Nightly (v0.39.0) | Offline support, context management, extensions |
| **GitHub Copilot CLI** | GitHub | 10 | 1 | **v1.0.26** | Backend policy errors, MCP reliability |
| **Kimi Code CLI** | MoonshotAI | 10 | 10 | **v1.34.0** | Thinking trace visibility, YOLO mode UX |
| **OpenCode** | Anomaly Co | 10 | 10 | None | Effect.js context preservation, Azure OpenAI |
| **Qwen Code** | QwenLM | 10 | 10 | Nightly (v0.14.4) | Free tier policy backlash, parallel agents |

### 3. Shared Feature Directions
Analyzing community requests and maintainer roadmaps reveals several converging paradigms across the ecosystem:

*   **Advanced Hook Lifecycle & Extensibility:** Developers want deep integration into the agentic loop. **OpenAI Codex** is requesting `PreToolUse`/`PostToolUse` events, **Qwen Code** is merging a `PostTurn` hook event, and **GitHub Copilot CLI** users want dynamic context injection via hooks, signaling a shift from passive tools to programmable agent platforms.
*   **Context & Compaction Resilience:** As models handle larger tasks, managing context windows is critical. **OpenAI Codex**, **GitHub Copilot CLI**, and **Kimi Code** are all battling bugs where context compaction crashes sessions or severs tool-call pairs. **Gemini CLI** is innovating here with a union-find clustering algorithm for semantic context compression.
*   **Windows & WSL Compatibility:** Windows/WSL is universally a second-class citizen. **Claude Code**, **OpenAI Codex**, **Qwen Code**, and **Kimi Code** all report persistent bugs ranging from broken permission persistence and sandbox file corruption to IME/encoding issues with UTF-8/CJK inputs.
*   **Agentic Observability:** Trust requires transparency. **Kimi Code** users are demanding visible thinking traces and live Tokens-Per-Second (TPS) metrics. **Claude Code** and **Qwen Code** communities are requesting desktop HUDs and real-time context/quota visibility.

### 4. Differentiation Analysis
*   **Proprietary vs. Open Extensibility:** **Claude Code** and **GitHub Copilot CLI** focus heavily on deep ecosystem integration (e.g., GitHub Enterprise policies, Anthropic-specific caching mechanisms). In contrast, **OpenCode** and **Qwen Code** are differentiating by building multi-provider abstractions, such as OpenCode's custom binary event streaming for AWS Kiro and Qwen's runtime-level parallel dispatching for weaker third-party models.
*   **Target Audience:** **Kimi Code** and **Qwen Code** show strong localization focuses and cater heavily to cost-sensitive users (e.g., tracking free tier quotas, OOM prevention for local models). **Copilot CLI** and **Codex** are overwhelmingly focused on Enterprise compliance, fleet management, and security guardrails (e.g., policy blocking, YOLO/sandbox restrictions).
*   **Technical Architecture:** **Gemini CLI** is uniquely pushing an "offline-first" architecture (bundling RipGrep into a Single Executable Application). **OpenCode** is making a heavy technical bet on functional reactive programming (Effect.js) to solve asynchronous state loss, a problem other CLI tools are handling via simpler patching.

### 5. Community Momentum & Maturity
*   **Most Active Communities:** **Claude Code** (18,000+ 👍 on core issues) and **OpenAI Codex** (536 comments on token burning alone) have massive, highly engaged user bases driving immediate tactical fixes. **Qwen Code** and **OpenCode** show incredible open-source momentum, with developers actively collaborating on architectural proposals (e.g., Command Platform Refactoring, Effect.js context bridging).
*   **Iterating Fastest:** **Gemini CLI**, **OpenCode**, and **Qwen Code** are iterating at a blistering pace, landing major architectural PRs daily. **Claude Code** and **Kimi Code** show mature, steady iteration, focusing on fine-grained UX controls (cache TTLs, plan review semantics). **GitHub Copilot CLI** appears to be the most bottlenecked today, with only 1 community PR merged, heavily constrained by backend enterprise policy validation bugs.

### 6. Trend Signals
*   **The "Cost of Context" Backlash:** AI CLI tools are burning tokens at an alarming rate. From **Claude Code's** 20K cache inflation bug to **Codex's** exponential token consumption and **Qwen's** slashing of free tiers, the industry is hitting a wall regarding the unit economics of agentic coding. Expect a near-term industry-wide pivot toward hyper-efficient semantic caching and local routing.
*   **Autonomy Requires Granular Consent:** The era of one-size-fits-all "YOLO/Auto-approve" modes is ending. As seen in **Kimi Code**, developers want to auto-approve safe file edits but manually pause for high-risk architectural plans. Autonomous agents must adopt dynamic, context-aware risk assessment.
*   **MCP is the New Battleground:** Model Context Protocol (MCP) is becoming the universal standard for tool integration, but it is currently highly unstable. Massive memory leaks (**Codex**), connection drops (**Copilot CLI**), and strict connection limits (**Qwen**) indicate that MCP server lifecycle management will dictate which CLI tools survive the next year. 
*   **Platform Fragmentation:** The continued poor state of Windows/WSL support across nearly all major AI CLIs leaves a massive gap in the market for tools willing to prioritize cross-platform terminal emulation and filesystem parity.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of April 15, 2026**

## 1. Top Skills Ranking
*(Based on the highest-engagement Pull Requests in the repository)*

| Rank | PR / Skill | Author | Status | Summary |
|:---|:---|:---|:---|:---|
| 1 | [#514 - Add document-typography skill](https://github.com/anthropics/skills/pull/514) | PGTBoos | **OPEN** | **Document Typography:** Prevents orphan word wraps, widow paragraphs, and numbering misalignment in AI-generated documents. Addresses a ubiquitous pain point, as users rarely explicitly request typography fixes but always expect them. |
| 2 | [#83 - Add skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83) | eovdidu | **OPEN** | **Meta-Skills for Skill Quality:** Introduces two marketplace tools that evaluate Skills across five dimensions (Structure/Docs, Security, Performance) and establish community quality standards. Long-running PR spanning Nov 2025–Jan 2026. |
| 3 | [#210 - Improve frontend-design skill clarity](https://github.com/anthropics/skills/pull/210) | justinwetch | **OPEN** | **Frontend Design Overhaul:** Revises an existing Skill to ensure every instruction is actionable within a single conversation, improving internal coherence and steering behavior without ambiguity. |
| 4 | [#486 - Add ODT skill (OpenDocument)](https://github.com/anthropics/skills/pull/486) | GitHubNewbie0 | **OPEN** | **ODT/OpenDocument Support:** Enables creation, template filling, parsing, and conversion of `.odt` and `.ods` files via triggers like "LibreOffice" or "OpenDocument." Recently updated (Apr 14), indicating active review. |
| 5 | [#541 - Fix DOCX tracked change w:id collision](https://github.com/anthropics/skills/pull/541) | Lubrsy706 | **OPEN** | **DOCX Integrity Fix:** Solves document corruption when tracked changes conflict with existing bookmarks due to shared `w:id` space in OOXML. A targeted, critical bug fix. |
| 6 | [#95 - Add comprehensive system documentation & flowcharts](https://github.com/anthropics/skills/pull/95) | TylerALofall | **OPEN** | **System Documentation Skill:** Generates executive summaries, architecture diagrams, and complete lifecycle flowcharts for complex evidence-management-style systems. |
| 7 | [#181 - Add SAP-RPT-1-OSS predictor skill](https://github.com/anthropics/skills/pull/181) | amitlals | **OPEN** | **SAP Predictive Analytics:** Leverages SAP's open-source tabular foundation model (Apache 2.0) for predictive analytics on SAP business data, bridging Claude Code with enterprise ERP workflows. |
| 8 | [#539 - Fix skill-creator YAML special character warning](https://github.com/anthropics/skills/pull/539) | Lubrsy706 | **OPEN** | **YAML Validation Fix:** Adds pre-parse validation to detect unquoted `description` fields with `:` characters, preventing silent parsing failures. Paired with PR #538 (PDF case-sensitivity fix), showcasing sustained contributor investment in tooling quality. |

---

## 2. Community Demand Trends
*(Distilled from highest-engagement Issues)*

**1. Reliability & Skill Triggering** 🔥
The most upvoted issue, [#556](https://github.com/anthropics/skills/issues/556) (👍6), reports a 0% trigger rate when running `claude -p` with installed Skills. Combined with [#62](https://github.com/anthropics/skills/issues/62) (10 comments, skills vanishing) and [#61](https://github.com/anthropics/skills/issues/61) (404 errors on skill loading), the community is urgently demanding **core infrastructure stability**—Skills must reliably load, persist, and activate.

**2. Skill Distribution & Trust Model** 🛡️
Issue [#492](https://github.com/anthropics/skills/issues/492) highlights that community Skills are distributed under the `anthropic/` namespace, creating trust boundary abuse potential. Issue [#189](https://github.com/anthropics/skills/issues/189) (👍7) reports duplicate Skills from overlapping plugin installs. The community wants **clear namespace separation and deduplication**.

**3. Enterprise & Team Workflows** 🏢
Issues [#228](https://github.com/anthropics/skills/issues/228) (org-wide skill sharing), [#29](https://github.com/anthropics/skills/issues/29) (AWS Bedrock compatibility), and [#532](https://github.com/anthropics/skills/issues/532) (enterprise SSO users locked out of API-key features) all point to **enterprise readiness** as a major demand center—organizations need shared skill libraries, cross-platform support, and SSO-compatible tooling.

**4. Skill Standardization via MCP** 🔌
Issue [#16](https://github.com/anthropics/skills/issues/16) proposes exposing Skills as MCPs (Model Context Protocol), turning Skills like `algorithmic-art` into callable API functions (`generateAlgorithmArt({prompt, options})`). This represents the **"Skills-as-API"** vision for composable AI software.

**5. Developer Experience (DX) for Skill Authors** ✍️
Issue [#202](https://github.com/anthropics/skills/issues/202) argues the official `skill-creator` Skill is too verbose and educational, reading like documentation rather than an operational instruction set. The community wants **leaner, execution-focused Skill authoring templates**.

---

## 3. High-Potential Pending Skills
*(Active PRs likely to merge soon based on recency and quality)*

| PR | Skill | Why It's Ready | Activity Signal |
|:---|:---|:---|:---|
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT/OpenDocument** | Fills a major document format gap; updated Apr 14 (1 day ago) | 🟢 Very active |
| [#541](https://github.com/anthropics/skills/pull/541) | **DOCX tracked changes fix** | Targeted, well-documented bug fix for OOXML corruption | 🟢 Active (Apr 7) |
| [#539](https://github.com/anthropics/skills/pull/539) + [#538](https://github.com/anthropics/skills/pull/538) | **YAML validation & PDF case-sensitivity fixes** | Same author, both address specific parsing bugs with clear root causes | 🟢 Paired fixes (Apr 7) |
| [#806](https://github.com/anthropics/skills/pull/806) | **macOS automation via AppleScript** | Novel approach (replaces screenshot-based computer use); two-tier permission model | 🟡 Recent (Apr 2) |
| [#374](https://github.com/anthropics/skills/pull/374) | **x402 BSV micropayments** | Enables natural-language service discovery and payment; unique value proposition | 🟡 Active (Apr 1) |
| [#723](https://github.com/anthropics/skills/pull/723) | **Testing Patterns** | Comprehensive coverage (unit, React, integration, E2E); fills a gap in engineering Skills | 🟡 Recent (Mar 30) |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for foundational infrastructure reliability (persistent skills, reliable triggering, and deduplication) and enterprise-grade distribution (org sharing, namespace trust, and SSO compatibility)—without which the growing catalog of domain-specific Skills cannot deliver value.**

---

# Claude Code Community Digest — 2026-04-15

## 1. Today's Highlights

Claude Code shipped **v2.1.108** and **v2.1.107** in the last 24 hours, introducing a new **recap feature** for context continuity and granular **prompt cache TTL controls** (`ENABLE_PROMPT_CACHING_1H`, `FORCE_PROMPT_CACHING_5M`) across all provider backends—a direct response to the community's long-running complaints about 5-minute cache expiry driving up costs and latency. Meanwhile, the still-open mega-issue on model quality degradation (#42796, 1814 👍) continues to dominate discussion, and a new detailed report on **~20K token cache_creation inflation** in v2.1.100+ (#46917, 149 👍) is gaining rapid traction, suggesting these cache changes may have unintended side effects.

---

## 2. Releases

### [v2.1.108](https://github.com/anthropics/claude-code/releases/tag/v2.1.108)
- **`ENABLE_PROMPT_CACHING_1H`** env var: opt into 1-hour prompt cache TTL on API key, Bedrock, Vertex, and Foundry providers. The older `ENABLE_PROMPT_CACHING_1H_BEDROCK` is deprecated but still honored.
- **`FORCE_PROMPT_CACHING_5M`** env var: force 5-minute TTL for scenarios where the longer cache is undesirable.
- **Recap feature**: provides context continuity between sessions/interactions (details sparse in release notes; likely surfaces a summary of prior work).

### [v2.1.107](https://github.com/anthropics/claude-code/releases/tag/v2.1.107)
- **Thinking hints now appear sooner** during long-running operations, improving perceived responsiveness during extended tool calls.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#42796](https://github.com/anthropics/claude-code/issues/42796) — **Model unusable for complex engineering tasks since Feb update** (1814 👍, 439 comments, CLOSED) | The single most-upvoted issue in the tracker. Reports of degraded reasoning, shorter outputs, and tool-use errors after the February model update. Anthropic closed it, but community sentiment remains raw—this is the canonical reference point for all model-quality complaints. |
| 2 | [#45596](https://github.com/anthropics/claude-code/issues/45596) — **Bring Back Buddy** (681 👍, 167 comments, OPEN) | The `/buddy` companion skill was silently removed in v2.1.97. Thousands of developers lost a beloved feature overnight. A consolidated community plea with no official response yet. |
| 3 | [#46917](https://github.com/anthropics/claude-code/issues/46917) — **~20K token cache_creation inflation in v2.1.100+** (149 👍, 22 comments, OPEN) | Carefully reproducible: same payload, same server, but newer client versions inject ~20K extra `cache_creation_input_tokens`. Likely User-Agent-based server-side routing. Directly increases cost and hits rate limits faster. Critical given today's cache TTL release. |
| 4 | [#41930](https://github.com/anthropics/claude-code/issues/41930) — **Abnormal usage limit drain across all paid tiers since March 23** (64 👍, 85 comments, OPEN) | Multiple root causes identified (cache inflation, over-chunking, silent retries). No formal Anthropic communication. Cross-tier impact makes this a trust issue, not just a billing bug. |
| 5 | [#46445](https://github.com/anthropics/claude-code/issues/46445) — **`/continue` and `/resume` show sessions from all projects** (52 👍, 26 comments, OPEN) | Regression in v2.1.101 broke project-scoping of session history. Now every project sees every other project's sessions—a daily friction point for multi-repo developers. |
| 6 | [#37413](https://github.com/anthropics/claude-code/issues/37413) — **Cowork: 1M context window unavailable on Max 5x** (30 👍, 22 comments, OPEN) | Regression from March 20. Max-tier subscribers paying for 1M context are capped lower in Cowork mode. Direct value-for-money complaint. |
| 7 | [#31724](https://github.com/anthropics/claude-code/issues/31724) — **Add voiceLanguage setting for /voice mode** (34 👍, 9 comments, OPEN) | Voice mode defaults to English; non-English languages (Ukrainian, CJK) produce garbled transcriptions. Growing international user base is blocked from a flagship feature. |
| 8 | [#47699](https://github.com/anthropics/claude-code/issues/47699) — **Cannot paste auth code in Dev Container `/login`** (59 👍, 44 comments, CLOSED) | Dev Container + WSL + VS Code users couldn't complete OAuth via paste. High comment velocity suggests a painful daily workflow break; closed likely because a fix shipped. |
| 9 | [#48059](https://github.com/anthropics/claude-code/issues/48059) — **Model reliability regression: overclaiming, silent deferral, unverified fixes** (3 👍, 4 comments, OPEN) | A nuanced report on the model claiming tasks are done when they aren't, silently deferring work, and leaving unverified edits. Flags an emerging trust-in-agent meta-concern. |
| 10 | [#47962](https://github.com/anthropics/claude-code/issues/47962) — **IME pre-edit buffer cleared during candidate selection** (0 👍, 2 comments, OPEN) | CJK input methods ( McBopomofo, 小麥注音) are broken by TUI redraws during composition. A classic accessibility/internationalization bug that affects a large developer demographic. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#27395](https://github.com/anthropics/claude-code/pull/27395) — **Shell completion for bash, zsh, fish** | Adds a `completion` subcommand with full coverage of all nested subcommands (`auth`, `mcp`, `plugin`, `doctor`, etc.). Long-lived PR (since Feb 21); still open. Would significantly improve CLI UX. |
| 2 | [#47836](https://github.com/anthropics/claude-code/pull/47836) — **Fix plugin hook validator alignment** | Updates `validate-hook-schema.sh` to support both `hooks.json` wrapper format and direct settings-style hook maps. Makes `matcher` optional with warnings. Unblocks plugin authors whose hooks were silently rejected. |
| 3 | [#47830](https://github.com/anthropics/claude-code/pull/47830) — **Subagent cleanup plugin** | Terminates orphaned `claude --resume` processes at session start. Addresses a real resource leak: zombie subagents accumulating CPU/memory across sessions. Practical operational hygiene. |
| 4 | [#47759](https://github.com/anthropics/claude-code/pull/47759) — **notify-on-complete plugin** | Hooks into `Stop` to fire desktop notifications, sounds, or speech when Claude Code finishes a task. Fail-open design (`always approve`). Directly addresses the "walk away and forget" pain point. |
| 5 | [#47760](https://github.com/anthropics/claude-code/pull/47760) — **Usage monitor plugin (SwiftBar)** | macOS menu-bar widget for real-time `/usage` tracking with cached fetching. Self-contained installer. Eliminates the need to run `/usage` manually—pairs well with the new weekly-usage-bar bug (#48135). |
| 6 | [#39148](https://github.com/anthropics/claude-code/pull/39148) — **Preserve-session plugin for path-independent history** | Assigns UUIDs to projects so session history survives directory renames/moves. Includes a demo video. Solves a long-standing data-loss frustration for project reorganization. |
| 7 | [#23853](https://github.com/anthropics/claude-code/pull/23853) — **Replace deprecated npm install in Dockerfile** | Swaps `npm install -g` for the native `curl` installer in the devcontainer Dockerfile. Removes unused build args. Modernizes the container setup. |
| 8 | [#47676](https://github.com/anthropics/claude-code/pull/47676) — **Fix YAML frontmatter in hookify/plugin-dev agents** | Unquoted colons in description fields caused strict YAML parsers to fail. Small but blocks automated plugin validation pipelines. |
| 9 | [#47673](https://github.com/anthropics/claude-code/pull/47673) — **Add missing plugin.json manifest for plugin-dev** | `plugin-dev` was the only plugin without a `plugin.json` manifest, making it invisible to marketplace tooling. |
| 10 | [#47902](https://github.com/anthropics/claude-code/pull/47902) — **Fix ipset duplicate entry errors in devcontainer** (CLOSED) | Added `-exist` flag to `ipset add` in the firewall init script. Prevents errors on container restart. |

---

## 5. Feature Request Trends

1. **Longer & configurable prompt cache TTL** — Today's v2.1.108 directly addresses this, but [#48137](https://github.com/anthropics/claude-code/issues/48137) already asks for TTLs tuned to neurodivergent workflows (reading/climate). Cache duration is now a first-class UX lever, not just a cost knob.

2. **Bring back `/buddy` or equivalent persistent companion** ([#45596](https://github.com/anthropics/claude-code/issues/45596), 681 👍). The community wants a persistent, stateful companion that survives sessions—something more than a skill, less than a full agent.

3. **Desktop HUD / status dashboard** ([#48141](https://github.com/anthropics/claude-code/issues/48141)) — Requests for a heads-up display showing usage, active agents, and session state without invoking slash commands. The SwiftBar usage-monitor PR (#47760) is a community stopgap.

4. **MCP Apps rendering in Preview tool** ([#48132](https://github.com/anthropics/claude-code/issues/48132)) — Extending `preview_start`/`preview_screenshot` to render MCP App resources inline, matching behavior already in claude.ai and Desktop.

5. **Internationalization of `/voice`** ([#31724](https://github.com/anthropics/claude-code/issues/31724)) — A `voiceLanguage` setting for non-English STT. Reflects growing non-English-speaking developer adoption.

---

## 6. Developer Pain Points

1. **Cost & rate-limit inflation without transparency.** The cache_creation inflation bug (#46917, 149 👍), usage drain issue (#41930, 64 👍), and missing weekly usage bar (#48135) converge on one theme: developers feel they're spending more without knowing why. The new 1-hour cache TTL helps, but only if the underlying token inflation is fixed.

2. **Silent regressions in core workflows.** `/continue`/`/resume` project-scoping broke in v2.1.101 (#46445). `/buddy` was silently removed (#45596). Permissions don't persist in Cowork (#46205). Session rules are ignored under task pressure (#48136). Developers are losing trust that upgrades are safe.

3. **Cowork reliability across the board.** Dispatch responses silently dropped (#40179), 1M context window unavailable (#37413), global instructions reverting (#40175), Chrome blocking sites in Cowork mode (#48139). Cowork is the most-bugged area right now, suggesting architectural growing pains.

4. **Model quality & agent trustworthiness.** Overclaiming completion, silent deferral, and unverified fixes (#48059, #48136) compound the original Feb-degradation complaint (#42796). When the model says "done" but isn't, developers must manually verify everything—negating the productivity promise of autonomous agents.

5. **Platform-specific friction (Windows/WSL, Dev Containers).** Auth paste broken in containers (#47699), permission patterns ignored on WSL (#29574), and FUSE mount staleness in VMs (#38993) indicate the Windows/WSL/Dev Container path is significantly less stable than macOS/Linux native.

---

*Digest generated from public GitHub data. Issues and PRs are snapshot-in-time and may have been updated since.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

## 1. Today's Highlights

The OpenAI Codex ecosystem experienced a massive spike in context compaction failures today, driven by a critical regression in CLI v0.120.0 that incorrectly passes the `prompt_cache_retention` parameter. Simultaneously, CPU usage, overheating, and process leaking remain dominant pain points across all platforms. Behind the scenes, the core engineering team is aggressively iterating on MCP (Model Context Protocol) server reliability, model provider abstractions, and a major architectural overhaul of the thread management system.

## 2. Releases

*   **rust-v0.121.0-alpha.9** and **rust-v0.121.0-alpha.8**: Two rapid-fire alpha releases were pushed within the last 24 hours, indicating urgent internal testing likely aimed at stabilizing the `prompt_cache_retention` bug and addressing resource management regressions ahead of a stable v0.121.0 release.

## 3. Hot Issues

1.  **[#14593] [bug, rate-limits] Burning tokens very fast:** (👍 212 | 💬 536) The most active issue in the repo. Business tier users report exponential token consumption, heavily impacting billing and workflow efficiency.
2.  **[#17809] [bug, context, app] Context compaction fails with unknown parameter 'prompt_cache_retention':** (👍 56 | 💬 37) A critical breaking flaw in the Mac desktop app causing automatic context compaction to crash completely. 
3.  **[#11981] [bug, app] Codex app 100% CPU Usage even when only one agent is running:** (👍 8 | 💬 36) A lingering performance issue causing severe thermal throttling and unresponsiveness on macOS.
4.  **[#16231] [bug, extension, regression] High CPU usage on macOS after updating Codex in VS Code:** (👍 49 | 💬 27) Users on Apple Silicon (M5 Pro) are experiencing severe CPU spikes directly linked to the 26.325 VS Code extension update.
5.  **[#16088] [bug, windows-os, sandbox, regression] WSL: starting a thread in a project without .codex leaves behind an empty .codex file:** (👍 53 | 💬 15) A WSL/Windows sandbox regression that corrupts the project directory state by leaving dead files behind.
6.  **[#17812] [bug, CLI, context] Error running remote compact task:** (👍 22 | 💬 12) CLI users running `gpt-5.4` are hitting timeout and compaction errors during active sessions.
7.  **[#12491] [bug, mcp, app] MCP child processes not reaped after task completion — 1300+ zombies, 37GB memory leak:** (👍 3 | 💬 12) A severe memory leak in the Mac GUI where MCP child processes turn into zombie processes, eating up to 37GB of RAM.
8.  **[#14754] [enhancement, hooks] Add PreToolUse and PostToolUse hook events for code quality enforcement:** (👍 6 | 💬 9) A highly requested enhancement to allow developers to enforce code quality gates and block destructive tool calls via hooks.
9.  **[#17813] [bug, CLI, context] Unknown parameter: 'prompt_cache_retention':** (👍 7 | 💬 5) Pro tier users confirm that `codex-cli 0.120.0` fails immediately when attempting to use `gpt-5.4`.
10. **[#17819] [bug, CLI, context, session] 0.120.0 regression: resumed threads fail during remote compaction:** (👍 1 | 💬 3) Users note that downgrading to `v0.119.0` is the current working workaround for the `prompt_cache_retention` compaction crash.

## 4. Key PR Progress

1.  **[#17824] Add local thread store listing:** Refactors filesystem and SQLite thread operations into a dedicated local `ThreadStore` implementation, laying the groundwork for robust thread management.
2.  **[#17763] Send sandbox state through MCP tool metadata:** Introduces an experimental capability (`codex/sandbox-state-meta`) allowing MCP servers to dynamically adhere to a thread's specific sandbox configurations.
3.  **[#17713] feat: add opt-in provider runtime abstraction:** A major architectural addition that abstracts model provider configurations, paving the way for seamless multi-provider support beyond OpenAI's native APIs.
4.  **[#17839] [TUI][Elicitations] Add high-risk app warnings:** Injects `riskLevel` into the MCP protocol to render explicit high-risk warnings (e.g., ⚠ icons) for dangerous operations like Computer Use approvals.
5.  **[#17742] removing network proxy for yolo:** Prevents managed network settings from bleeding into "yolo" / `DangerFullAccess` modes, ensuring true unrestricted bypass operates independently of the guardian proxy.
6.  **[#17843] Add server-level approval defaults for custom MCP servers:** Implements configurable default tool approval modes for custom MCP servers, matching internal Codex app behaviors.
7.  **[#17720] Make skill loading filesystem-aware:** Upgrades the skill loader to natively read repository skills from remote execution environments, improving agentic context awareness.
8.  **[#15936] fix: enforce trusted-before-project ordering for hooks:** Crucial security fix ensuring trusted hooks execute before project-level hooks, preventing lower-precedence project hooks from overriding security blocks.
9.  **[#17805] feat: app-server close thread:** Fixes a backend lifecycle issue by properly implementing thread close routines in the app-server and tying them to the TUI.
10. **[#17684] Adjust default tool search result caps:** Optimizes MCP search behaviors by allowing selected tools to return larger result sets while keeping global defaults conservative.

## 5. Feature Request Trends

*   **Advanced Hooking Lifecycle:** Developers want deeper integration into the agentic loop, specifically demanding `PreToolUse` and `PostToolUse` hook events to enforce custom linting, testing, and security guardrails before code is applied.
*   **TUI / CLI Control Refinements:** Users are requesting more granular control over agentic actions in the terminal, such as the ability to refuse code changes and immediately prompt the agent to explain its reasoning.
*   **Granular Resource Limits:** With memory leaks and CPU spikes dominating bug reports, there is a distinct trend toward wanting user-defined limits on memory, process forking, and CPU utilization per agent thread.

## 6. Developer Pain Points

*   **The v0.120.0 Compaction Crash:** The most acute pain point today is the CLI's inability to compact context or resume older sessions due to a rogue `prompt_cache_retention` parameter. Until v0.121.0 stabilizes, developers are forced to downgrade to v0.119.0.
*   **Resource Mismanagement (CPU & Memory):** Across VS Code, Antigravity, and the native Desktop App, developers are consistently frustrated by extreme CPU temperatures and poor memory cleanup (most notably 37GB MCP memory leaks and zombie processes).
*   **Windows/WSL Instability:** Windows developers continue to face an uphill battle with basic functionality. Literal path-passing errors in Git diffs (`/F:/...`) breaking the Review tab, and WSL sandbox issues destroying project configurations are severely hindering adoption on the Windows platform.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-15

## 1. Today's Highlights
Gemini CLI published the `v0.39.0-nightly` build, featuring critical memory leak fixes in the trace stream wrapper and UI corrections for quota displays. The community and core maintainers are heavily focused on offline resilience and agentic context management, evidenced by a major new Pull Request to bundle RipGrep natively into the Single Executable Application (SEA) and the wiring up of a highly anticipated new Context Manager for agent history. 

## 2. Releases
*   **v0.39.0-nightly.20260414.gdaf500623**
    *   Fixed a memory leak in the trace's `streamWrapper` ([PR #25089](https://github.com/google-gemini/gemini-cli/pull/25089)).
    *   Fixed the quota footer display for non-auto models ([PR #25121](https://github.com/google-gemini/gemini-cli/pull/25121)).

## 3. Hot Issues
1.  **[Non-Interactive / SDK Mode #2023](https://github.com/google-gemini/gemini-cli/issues/2023):** The most upvoted issue (👍 35). Users are requesting a Claude Code-style non-interactive SDK (`-p` flag with `stream-json`) to allow programmatic use cases and iterative session history.
2.  **[Offline Resilience #25323](https://github.com/google-gemini/gemini-cli/issues/25323):** Highlighting a critical startup pain point where failed RipGrep downloads cause a 2+ minute hang. Maintainers are pushing to bundle RipGrep directly into the CLI to ensure offline capabilities.
3.  **[AST-Aware Codebase Mapping #22745](https://github.com/google-gemini/gemini-cli/issues/22745):** An epic tracking the integration of AST-aware tools to allow the model to precisely read method bounds, reducing token noise and misaligned reads.
4.  **[Memory Routing #22819](https://github.com/google-gemini/gemini-cli/issues/22819):** Requests native routing of agent memories—storing global preferences in `~/.gemini/` and project-specific instructions in `.gemini/`. 
5.  **[Proactive Memory Writes #22809](https://github.com/google-gemini/gemini-cli/issues/22809):** Closely tied to memory routing, this asks for the main agent prompt to be tuned so it automatically saves user preferences without manual intervention.
6.  **[Shell Execution Hangs #25166](https://github.com/google-gemini/gemini-cli/issues/25166):** A high-impact bug where simple CLI commands finish executing, but the UI gets stuck showing "Awaiting user input", forcing users to kill the session.
7.  **[Repetitive Permission Prompts #24916](https://github.com/google-gemini/gemini-cli/issues/24916):** The CLI repeatedly prompts for file permissions even when "allow for all future sessions" is selected.
8.  **[Confusing Extension Errors #24966](https://github.com/google-gemini/gemini-cli/issues/24966):** Installing extensions from a GitHub URL currently outputs non-actionable error messages that confuse non-technical users.
9.  **[Max Tool Limit Hit #24246](https://github.com/google-gemini/gemini-cli/issues/24246):** The Gemini CLI throws a 400 API error when extensions push the available tool count over 128, requiring better scoped tool filtering.
10. **[Destructive Agent Behavior #22672](https://github.com/google-gemini/gemini-cli/issues/22672):** Users report the agent occasionally defaults to dangerous commands (e.g., `git reset --force`) instead of seeking safer alternatives when handling complex git operations.

## 4. Key PR Progress
1.  **[Bundle RipGrep Binaries #25342](https://github.com/google-gemini/gemini-cli/pull/25342):** Directly addresses Issue #25323 by bundling pre-built RipGrep binaries into the SEA for offline support and fast startup.
2.  **[Wire up ContextManager and AgentChatHistory #25409](https://github.com/google-gemini/gemini-cli/pull/25409):** A major architectural update hooking up the new context management pipeline, fixing known history and session limitations.
3.  **[MCP Resource Tools #25395](https://github.com/google-gemini/gemini-cli/pull/25395):** Adds core tools for agents to list and read static/dynamic resources exposed by connected MCP servers.
4.  **[Union-Find Context Compaction #24736](https://github.com/google-gemini/gemini-cli/pull/24736):** Implements a union-find clustering algorithm for context compression, allowing semantic grouping of history messages to save tokens.
5.  **[Dynamic Extension Plan Directories (Phase 3) #25384](https://github.com/google-gemini/gemini-cli/pull/25384):** Implements Just-In-Time (JIT) provisioning of plan directories with robust path safety for dynamic extensions.
6.  **[Dynamic Extension Workspace Utilities (Phase 2) #25383](https://github.com/google-gemini/gemini-cli/pull/25383):** Introduces secure path resolution utilities necessary for the Phase 3 JIT implementation.
7.  **[Voice Input with Pluggable Backend #18499](https://github.com/google-gemini/gemini-cli/pull/18499):** A community favorite bringing native voice input using a zero-install Gemini transcription backend or a local Whisper fallback.
8.  **[Fix Extension Install Errors #25410](https://github.com/google-gemini/gemini-cli/pull/25410):** Suppresses noisy keychain and download errors during extension installs, falling through silently to `git clone`.
9.  **[Memory Management for Large Tool Outputs #20406](https://github.com/google-gemini/gemini-cli/pull/20406):** Prevents V8 Out of Memory (OOM) crashes by streaming large shell command outputs directly to disk instead of holding them in memory.
10. **[Custom Keybinding UI Fix #25412](https://github.com/google-gemini/gemini-cli/pull/25412):** Fixes a UI bug where prompts displayed default keyboard shortcuts instead of the user's custom remaps.

## 5. Feature Request Trends
*   **Programmatic / Non-Interactive SDKs:** A strong demand exists for an interactive-agnostic mode, allowing Gemini CLI to function as a backend tool for scripts and larger agentic frameworks.
*   **Advanced Context & Memory Management:** The community wants smarter memory routing (global vs. project), proactive memory saves, and highly efficient context compression to maximize the LLM's context window.
*   **Offline-First Architecture:** Users are driving a trend toward zero-dependency startup, heavily requesting that native binaries (like RipGrep) be bundled into the core executable.
*   **Agent Safety & Self-Awareness:** Requests indicate a desire for agents to understand their execution context better—specifically asking for AST-awareness to prevent sloppy file edits, and approval-mode awareness to prevent agents from attempting blocked operations.

## 6. Developer Pain Points
*   **Startup Latency & Dependency Fetching:** Developers running in restricted or offline network environments experience massive startup delays when the CLI attempts to download missing utilities like RipGrep.
*   **UI/Rendering Glitches over SSH:** Users frequently report broken layouts, thick borders, and scrambled text when running the CLI over SSH, especially on Windows clients. 
*   **Terminal State Desyncs:** The CLI occasionally fails to recognize that a shell command has completed, leaving the terminal in a stuck "Awaiting user input" state.
*   **Persistent Permission Friction:** The security model currently frustrates users by repeatedly prompting for the same file permissions and ignoring "allow always" directives.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-15

## 1. Today's Highlights
Version **v1.0.26** was released, delivering critical stability fixes for agent session compaction and interactive prompts. The community is currently experiencing widespread service disruptions, with a massive influx of users reporting confusing "access denied by policy" errors across Enterprise, Pro Trial, and standard subscriptions. Additionally, MCP server reliability remains a significant concern as multiple users report connection failures.

## 2. Releases
**[v1.0.26](https://github.com/github/copilot-cli/releases/tag/v1.0.26) (2026-04-14)**
*   **Stability:** Fixed an unrecoverable error that crashed agent sessions when context compaction split a tool call across chunks. Fixed spurious directory access prompts appearing inside `find -exec` blocks.
*   **UX:** The Escape key now reliably dismisses `ask_user` and elicitation prompts without getting stuck.
*   **Plugins:** Plugin hooks now receive `PLUGIN_ROOT`, `COPILOT_PLUGIN_ROOT`, and `CLAUDE_PLUGIN_ROOT` environment variables pointing to the plugin's installation directory.
*   **UI:** The session scope selector in the sync prompt is more prominent and fully keyboard-navigable.

## 3. Hot Issues
1.  **[Sporadic policy blocking issue retrieving models (#1595)](https://github.com/github/copilot-cli/issues/1595)** | 👍 9 | 26 comments
    Enterprise users are unable to list models via the `/models` command due to "access denied by Copilot policy" errors, despite having valid subscriptions and remaining premium requests. This remains a highly upvoted, open issue.
2.  **[Misleading "Server failed to connect" error for Copilot Pro Trial (#2686)](https://github.com/github/copilot-cli/issues/2686)** | 👍 8 | 24 comments
    Users on active Copilot Pro Trials are getting false policy denial and MCP server connection errors, pointing to a backend subscription validation bug.
3.  **[Constant 'Authorization error, you may need to run /login' (#2684)](https://github.com/github/copilot-cli/issues/2684)** | 12 comments
    A session-breaking bug where fully authenticated users are repeatedly forced to re-login, disrupting active workflows.
4.  **[Escaping question/prompt mode leaves session stuck (#2681)](https://github.com/github/copilot-cli/issues/2681)** | 1 comment
    Directly relates to today's v1.0.26 patch. Previously, pressing Escape to dismiss an agent's question caused the interface to become entirely unresponsive to `Esc` and `Ctrl+C`.
5.  **[Copilot Pro trial receives confusing error message (#2698)](https://github.com/github/copilot-cli/issues/2698)** | 👍 1 | 6 comments
    Further evidence of the widespread policy validation backend issue preventing users from changing models.
6.  **[Rate limit retry in 58 hours! (#2696)](https://github.com/github/copilot-cli/issues/2696)** | 2 comments
    Users are hitting aggressive, unexplained rate limits (e.g., 58-hour lockouts), suggesting a potential issue with fleet/background agent self-rate-limiting loops.
7.  **[BasicTruncator creates orphaned tool_result messages (#2589)](https://github.com/github/copilot-cli/issues/2589)** | 1 comment
    A technical deep-dive highlighting context compaction flaws where truncating message history splits `tool_use` and `tool_result` pairs, leaving orphaned blocks. (Partially addressed in today's v1.0.26 release).
8.  **[Web Search tool - MCP server error (#2692)](https://github.com/github/copilot-cli/issues/2692)** | 👍 2 | 3 comments
    The official `github-mcp-server` is throwing Streamable HTTP errors when invoking the Web Search tool, breaking web-augmented workflows.
9.  **[MCP servers not available anymore since latest update (#2176)](https://github.com/github/copilot-cli/issues/2176)** | 👍 1 | 4 comments
    An ongoing issue where the LLM loses awareness of configured MCP tools after updates, despite `/mcp show` listing them as active and enabled.
10. **[Allow AI model to actually follow and respect instructions (#2188)](https://github.com/github/copilot-cli/issues/2188)** | 4 comments
    Users are frustrated that models frequently ignore explicit instructions in `SKILL.md` files (e.g., instructions to omit 'Co-author' trailers in commit messages).

## 4. Key PR Progress
*Only 1 pull request was updated in the last 24 hours.*

*   **[Create my-agent.agent.md (#2713)](https://github.com/github/copilot-cli/pull/2713)**
    A community PR demonstrating the creation of custom agent files. While sparse on details, it highlights growing community interest in defining and installing external custom agents (which ties into the new plugin environment variables added in v1.0.26).

## 5. Feature Request Trends
*   **MCP Explicit Triggering:** Users want explicit control over MCP tool invocation via syntax like `@mcp` or `#mcp-` in prompts, rather than relying entirely on the LLM's autonomous selection ([#2690](https://github.com/github/copilot-cli/issues/2690)).
*   **Multi-root Workspace Support:** Developers are requesting `.code-workspace` file parsing to allow Copilot CLI to discover multiple root folders and their respective instruction files ([#1826](https://github.com/github/copilot-cli/issues/1826)).
*   **Advanced Input Modes:** High demand remains for modal editor keybindings, specifically a `vi/vim` input mode for the CLI ([#13](https://github.com/github/copilot-cli/issues/13)).
*   **Dynamic Context via Hooks:** Developers want the ability to inject command output directly into the LLM context window via hooks (similar to Claude Code) for dynamic context loading ([#1139](https://github.com/github/copilot-cli/issues/1139)).
*   **Disabling Auto-Compaction:** Users building long-running, full-context dependent workflows (like audit trails) want an `auto_compact` configuration toggle to disable automatic context truncation ([#947](https://github.com/github/copilot-cli/issues/947)).

## 6. Developer Pain Points
*   **Unreliable Backend Policy Enforcement:** The most critical friction point today is a backend issue misclassifying active subscriptions (Enterprise and Pro Trial) as policy-violating, blocking model access.
*   **MCP Server Reliability:** Connection drops, "Streamable HTTP" errors, and the LLM "forgetting" available MCP tools are frustrating developers trying to build advanced agentic workflows.
*   **Opaque Rate Limiting:** Rate limits are triggering too easily (often without direct user action) and result in massive timeout periods (e.g., 58 hours), severely blocking development time.
*   **Clunky Context Compaction:** The agent's habit of automatically truncating conversation history is breaking complex agent workflows and creating orphaned tool calls, forcing developers to manually manage context windows.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-15

## 1. Today's Highlights
Kimi Code CLI version **1.34.0** was released today, bundling critical stability fixes for background task management and shell UI refinements. A significant portion of the community conversation revolves around recent changes to the **thinking process display**, with multiple users reporting regressions after upgrading to v1.33.0+ and experimenting with the new `kimi-k2.6-code-preview` model. On the tooling front, contributors are actively proposing better UX controls for the `--yolo` mode and enhanced streaming telemetry in the shell.

## 2. Releases

**[v1.34.0](https://github.com/MoonshotAI/kimi-cli/pull/1875)**
Includes the following changes since `1.33.0`:
- **Core:** Fixed a CLI crash when stopping a stuck background agent (`TaskStop` no longer throws an unhandled exception in the event loop).
- **Shell:** Fixed inline diff highlight offsets to properly align with tab-expanded text.
- **Docs:** Updated English and Chinese documentation for new features and tool changes.

## 3. Hot Issues

1. **[#1864](https://github.com/MoonshotAI/kimi-cli/issues/1864) [OPEN] - Please display the full thinking traces in Kimi CLI**
   *Summary:* Users report that the thinking process is missing in v1.33.0. With 8 👍, this is the most upvoted issue of the day, indicating strong user reliance on visible reasoning traces for trust and debugging.

2. **[#1874](https://github.com/MoonshotAI/kimi-cli/issues/1874) [OPEN] - Regarding the length of thinking about k2.6-code-preview**
   *Summary:* A user reports excessive token consumption (60,000+ tokens for 51 rounds of thought) when using the new `k2.6-code-preview` model, disrupting workflows. Highlights growing pains with model upgrades and context management.

3. **[#1865](https://github.com/MoonshotAI/kimi-cli/issues/1865) [OPEN] - Why is the thinking process gone?**
   *Summary:* Another complaint about the missing thinking process in v1.33.0, emphasizing that its removal drastically lowers the user's sense of security.

4. **[#778](https://github.com/MoonshotAI/kimi-cli/issues/778) [OPEN] - API Error: 400 Invalid Request Error**
   *Summary:* A long-standing issue (since Jan 2026) with 14 comments, detailing persistent 400 errors on Windows/PowerShell using Claude models. Shows ongoing cross-platform/cross-model compatibility challenges.

5. **[#1878](https://github.com/MoonshotAI/kimi-cli/issues/1878) [OPEN] - Context compaction picks wrong problem from shared workspace**
   *Summary:* In `--print` mode, the context compactor hallucinates/summarizes the wrong problem directory when multiple exist. A critical issue for agentic workflows in complex workspaces.

6. **[#1867](https://github.com/MoonshotAI/kimi-cli/issues/1867) [OPEN] - `--yolo` should not auto-approve plans in Plan Mode**
   *Summary:* A highly logical feature request asking for a decoupling of tool approval (low risk) from plan approval (high risk) when using auto-approve flags. 

7. **[#1877](https://github.com/MoonshotAI/kimi-cli/issues/1877) [OPEN] - VS Code plug-in: Thinking block cannot be expanded in compact mode**
   *Summary:* VS Code extension bug where `show_thinking_stream` blocks cannot be expanded, compounding the issue of hidden reasoning traces.

8. **[#1873](https://github.com/MoonshotAI/kimi-cli/issues/1873) [OPEN] - Hope to support installation on systems without administrator rights**
   *Summary:* Enterprise users on locked-down Windows machines are blocked from installing recent versions of the CLI.

9. **[#1869](https://github.com/MoonshotAI/kimi-cli/issues/1869) [OPEN] - Emacs-style keybindings in plan review not working**
   *Summary:* Specific terminal compatibility bug on Windows affecting Emacs-style keybindings during interactive plan reviews.

10. **[#1866](https://github.com/MoonshotAI/kimi-cli/issues/1866) [OPEN] - Error when searching files with Chinese UTF8 filenames via `@`**
    *Summary:* File search crashes upon typing the third character of a Chinese UTF8 filename, highlighting encoding edge cases in the interactive shell.

## 4. Key PR Progress

1. **[#1875](https://github.com/MoonshotAI/kimi-cli/pull/1875) [CLOSED] - chore: bump kimi-cli 1.34.0**
   *Summary:* The official release PR for v1.34.0, bumping version numbers and aggregating recent bug fixes.

2. **[#1872](https://github.com/MoonshotAI/kimi-cli/pull/1872) [CLOSED] - feat(shell): add show_thinking_stream config and minor UX fixes**
   *Summary:* Directly addresses the hot community complaints by introducing a config for `show_thinking_stream` and streamlining the indicator to a compact one-liner (e.g., `Thinking ... 3s · 245 tokens · 82 tok/s`).

3. **[#1871](https://github.com/MoonshotAI/kimi-cli/pull/1871) [CLOSED] - fix(background): keep cancelled task strong reference until runner cleans up**
   *Summary:* A critical memory management fix where dropping strong references to cancelled `asyncio` tasks caused Python's GC to prematurely reap them, crashing `prompt_toolkit`.

4. **[#1836](https://github.com/MoonshotAI/kimi-cli/pull/1836) [OPEN] - Fix interactive YOLO plan review semantics**
   *Summary:* An excellent community contribution targeting Issue #1867, separating tool auto-approval from plan review when in YOLO mode.

5. **[#1868](https://github.com/MoonshotAI/kimi-cli/pull/1868) [OPEN] - feat(ui): show live and average tokens per second in shell UI**
   *Summary:* Introduces live TPS metrics during streaming and an average TPS summary at turn boundaries, heavily requested for cost/performance tracking.

6. **[#1818](https://github.com/MoonshotAI/kimi-cli/pull/1818) [CLOSED] - feat: supports list-sessions to list existing sessions**
   *Summary:* Implements a `list-sessions` feature, improving user ability to manage background CLI processes.

7. **[#1876](https://github.com/MoonshotAI/kimi-cli/pull/1876) [OPEN] - feat(soul): register /btw slash command in soul-level registry**
   *Summary:* Architectural improvement allowing the `/btw` command to be accessed across all execution modes (print, web, ACP), not just interactive shell.

8. **[#1405](https://github.com/MoonshotAI/kimi-cli/pull/1405) [OPEN] - feat(web): add Playwright E2E test infrastructure**
   *Summary:* Establishes Playwright testing for the Web frontend, utilizing a `_scripted_echo` provider to catch UI regressions deterministically.

9. **[#1236](https://github.com/MoonshotAI/kimi-cli/pull/1236) [OPEN] - feat(http): enable trust_env in creating aiohttp.ClientSession**
   *Summary:* Fixes proxy handling by allowing `aiohttp` to respect system environment variables, essential for users behind corporate firewalls.

10. **[#1870](https://github.com/MoonshotAI/kimi-cli/pull/1870) [OPEN] - docs(config): clarify quoted TOML keys for dotted model names**
    *Summary:* A quick documentation win preventing user misconfiguration when defining custom models with `.` in their names.

## 5. Feature Request Trends

*   **Granular Auto-Approval (`--yolo`):** Developers want the `--yolo` or `--yes` flags to support nuanced behavior—specifically, auto-executing safe file edits but pausing for explicit approval on high-level architectural plans.
*   **Execution Transparency & Observability:** A massive spike in requests demanding the return of visible thinking traces. Users want control over *how* the model thinks (token limits) and the ability to *see* TPS (tokens per second) and token consumption metrics live.
*   **Enterprise / Constrained Environment Support:** Feature requests are trending towards better support for non-admin Windows installations and seamless proxy integrations, indicating growing adoption among enterprise developers.
*   **Workspace Context Awareness:** Requests for improved context compaction logic, specifically ensuring the agent maintains awareness of the correct working directory in multi-project workspaces.

## 6. Developer Pain Points

*   **Loss of Trust via Hidden Reasoning:** The most prominent frustration today is the regression in v1.33.0 where thinking traces disappeared or became hidden. Developers rely on these traces to verify logic; their absence makes the tool feel like a "black box."
*   **Model Update Induced Friction:** The rollout of `k2.6-code-preview` is causing severe workflow blockages due to "runaway thinking" (excessive, uncontrollable token generation), making the tool too expensive and slow for deterministic tasks.
*   **Agentic Context Hallucinations:** In non-interactive modes (`--print`), the CLI occasionally summarizes the wrong context/workspace. This damages reliability for automated pipelines.
*   **Cross-Platform Terminal Quirks:** Persistent minor frustrations regarding Windows encoding (UTF-8 CJK file searches) and terminal compatibility (Emacs keybindings), affecting the polish of the interactive experience.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-15

## 1. Today's Highlights
OpenCode’s ecosystem saw a massive wave of architectural refactoring today, heavily focused on stabilizing the **Effect.js** context and logger management within the core prompt loop. Several community members and core contributors submitted overlapping fixes to preserve context across asynchronous boundaries. On the user side, an **Azure OpenAI regression** and an influx of **UI draft/input loss** bugs dominated the daily issue tracker.

## 2. Releases
No new official releases were published in the last 24 hours.

## 3. Hot Issues

1. **[#22444 Azure OpenAI Models Failing in Latest Update](https://github.com/anomalyco/opencode/issues/22444):** A critical regression causing all Azure OpenAI models (GPT-5.3-Codex, GPT-5.2-Codex, GPT-5.4 Mini) to fail immediately. This is likely connected to the recent Effect logger/prompt loop refactors.
2. **[#20698 GPT 5.4 "reasoning" Item Error](https://github.com/anomalyco/opencode/issues/20698):** Azure users are seeing persistent crashes during tool calls due to reasoning items not being followed correctly. Users are forced to switch models to continue working.
3. **[#21614 Draft Input Lost on Permission Prompts](https://github.com/anomalyco/opencode/issues/21614) & [#22479 User Input Discarded](https://github.com/anomalyco/opencode/issues/22479):** A highly frustrating UX bug where text being typed by the user is instantly wiped out if a background permission prompt or question interrupts the input flow.
4. **[#20465 Blank Assistant Text with AI SDK v6](https://github.com/anomalyco/opencode/issues/20465):** A regression causing assistant text to render blank in the TUI when MCP servers are enabled, pinpointed to local display handling rather than upstream API issues.
5. **[#11112 Stuck at "Preparing write..."](https://github.com/anomalyco/opencode/issues/11112):** A highly persistent bug (23 thumbs up) where the Prometheus agent gets caught in an infinite loop attempting to write files. 
6. **[#22020 Global AGENTS.md Ignored](https://github.com/anomalyco/opencode/issues/22020):** When a project-level `AGENTS.md` exists, the global `~/.config/opencode/AGENTS.md` is silently ignored, contradicting official documentation and breaking modular rule setups.
7. **[#21911 TS Generics Stripped During Edits](https://github.com/anomalyco/opencode/issues/21911):** A tool-level bug causing the AI edit tool to strip TypeScript generics automatically, with the AI failing to re-add them on subsequent prompts.
8. **[#21230 Project ID Changes After `git init`](https://github.com/anomalyco/opencode/issues/21230):** Running `git init` in an existing project mutates the internal project ID, causing all prior sessions to "disappear" from the TUI.
9. **[#21910 ACP Message Duplication](https://github.com/anomalyco/opencode/issues/21910):** On Windows, the Agent Communication Protocol (ACP) duplicates either the request or the response, unique to OpenCode and not reproducible in Gemini/Copilot CLIs.
10. **[#22469 Feature Request: Image Input for Vision Models](https://github.com/anomalyco/opencode/issues/22469):** Users are requesting native paste/image support for vision-enabled models, currently blocked by a hard error for unsupported files.

## 4. Key PR Progress

1. **[#22497 & #22496 Preserve Context Across Callback Bridges](https://github.com/anomalyco/opencode/pull/22497):** Core fixes by maintainers to capture the active Effect context before crossing async boundaries (MCP, PTY, plugins), replacing bare `Effect.runPromise` with `runPromiseWith(ctx)`.
2. **[#22495 Preserve Draft Through Permission Prompts](https://github.com/anomalyco/opencode/pull/22495):** Fixes the highly reported draft loss bug by preventing the `PromptInput` component from unmounting when a permission dialog blocks the session composer.
3. **[#20491 Add Kiro Provider](https://github.com/anomalyco/opencode/pull/20491):** Introduces AWS/Kiro as a provider, featuring a custom binary event stream protocol integration rather than standard SSE/JSON.
4. **[#22492 Bootstrap `packages/server`](https://github.com/anomalyco/opencode/pull/22492):** Architectural extraction of core server logic into `@opencode-ai/server`, aligning the project with the OpenAPI standard and `opentunnel`.
5. **[#22371 Keep GitHub Copilot Compaction Requests Valid](https://github.com/anomalyco/opencode/pull/22371):** Extends noop tool compatibility to `@ai-sdk/github-copilot` to prevent history compaction errors.
6. **[#22489 Add `--sanitize` Flag to Export](https://github.com/anomalyco/opencode/pull/22489):** Implements a PII/confidential data stripping flag for the `opencode export` command, crucial for enterprise sharing.
7. **[#21729 Preserve Active Agent on `prompt_async`](https://github.com/anomalyco/opencode/pull/21729):** Fixes a bug where programmatic or asynchronous prompts would reset the user's active agent/model back to defaults.
8. **[#22498 Restore Instance Context in Prompt Runs](https://github.com/anomalyco/opencode/pull/22498):** Captures effect context precisely at execution time rather than service startup, fixing workspace mismatch bugs.
9. **[#12822 Proxy Env Directly to `process.env`](https://github.com/anomalyco/opencode/pull/12822):** Stops the core Env service from snapshotting environment variables at init time, fixing dynamic `.env` updates.
10. **[#13854 Stop Streaming Markdown After Message Completes](https://github.com/anomalyco/opencode/pull/13854):** Fixes an OpenTUI bug where completed messages were treated as "streaming," causing the last table row to be permanently hidden.

## 5. Feature Request Trends
*   **Mobile & Touch Optimization:** Continued strong demand for a mobile-friendly Web UI/iOS/Android app, with active PRs focused on touch targets and responsive layouts.
*   **Advanced TUI Controls:** Developers are heavily requesting terminal-native features like Vim/Tmux-style **Copy Mode** and **Virtualized Scrolling** for long sessions.
*   **UX Polish & Verbosity Control:** Users want finer control over AI output density, specifically an option to minimize verbose "thinking" blocks.
*   **Config Hot-Reloading:** A popular request for a command palette action to reload `opencode.json` and `AGENTS.md` without restarting the application.

## 6. Developer Pain Points
*   **Azure/OpenAI API Integration Instability:** Azure users are currently facing a miserable experience, battling both model compatibility errors (#20698) and broad authentication/failure regressions (#22444).
*   **File Editing Edge Cases:** The AI edit tool continues to struggle with non-ASCII encodings (EUC-KR corruption) and complex TypeScript syntax (silently stripping generics).
*   **Interrupt-Driven UX Loss:** The TUI's handling of asynchronous interruptions (like permission prompts) destroys user input state, breaking developer flow.
*   **Pathing and Rules Fragmentation:** Discrepancies between absolute and relative paths in agent rules, alongside global `AGENTS.md` overrides failing, make workspace configuration fragile and unpredictable.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-15

## 1. Today's Highlights

The community is currently on edge due to a proposed policy adjustment to significantly reduce and eventually phase out the Qwen OAuth free tier ([#3203](https://github.com/QwenLM/qwen-code/issues/3203)). Amidst the backlash, the core team and contributors shipped a nightly release focused on SDK context visibility and continued merging critical bug fixes, including better rate-limit error detection in subagents. Pull request activity is surging with architectural improvements to the hook system, new commands, and parallel agent dispatching.

## 2. Releases

**v0.14.4-nightly.20260414.1486e8538**
- **feat(cli/sdk): expose /context usage data in non-interactive mode and SDK API** by @wenshao ([PR #2916](https://github.com/QwenLM/qwen-code/pull/2916)). This enables programmatic access to context window consumption, a crucial feature for SDK integrations and CI pipelines. ([Full Changelog](https://github.com/QwenLM/qwen-code/compare/v0.14.4...v0.14.4-nightly.20260414.1486e8538))

## 3. Hot Issues

1. **[#3203 — Qwen OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203)** (15 comments)
   Proposes cutting the free tier from 1,000 to 100 requests/day immediately and phasing it out entirely by April 20. Community reaction is intensely negative, with developers concerned about being priced out.

2. **[#1742 — 429 Free allocated quota exceeded](https://github.com/QwenLM/qwen-code/issues/1742)** (17 comments, 👍 1)
   A long-running complaint about premature quota exhaustion. Recent activity suggests the backend quota logic has become stricter, fueling more frustration.

3. **[#3267 — Requests limits overview](https://github.com/QwenLM/qwen-code/issues/3267)** (4 comments)
   Users report hitting the daily limit mid-task without completing a single task. Calls for transparent, real-time quota visibility in the CLI.

4. **[#2426 — 免费额度一少再少](https://github.com/QwenLM/qwen-code/issues/2426)** (6 comments)
   Chinese community echoing the same frustration: advertised 1,000 RPD has quietly dropped to an estimated ~300 in practice.

5. **[#289 — Support creating single executable application (SEA)](https://github.com/QwenLM/qwen-code/issues/289)** (6 comments)
   A recurring feature request to bundle Qwen Code into a standalone binary. High demand from users deploying in restricted or non-Node environments.

6. **[#3234 — Allow naming/indexing conversations](https://github.com/QwenLM/qwen-code/issues/3234)** (2 comments)
   Conversations are currently identified by UUIDs only, making retrieval of past sessions nearly impossible. Users want human-readable titles and search.

7. **[#3277 — MCP Client Limited to 2 Connections](https://github.com/QwenLM/qwen-code/issues/3277)** (1 comment)
   Critical bug report: the MCP client's hard limit of 2 connections breaks production multi-node infrastructure. Flagged as production-blocking.

8. **[#2669 — Permission options not persisting in Windows 11 CMD](https://github.com/QwenLM/qwen-code/issues/2669)** (3 comments)
   "Always allow" permissions re-prompt on every run in Windows CMD. A persistent Windows-specific UX regression.

9. **[#350 — Potential loop detected, request halted](https://github.com/QwenLM/qwen-code/issues/350)** (4 comments, 👍 5)
   High-impact bug where repetitive tool calls trigger loop detection and kill the session. Affects complex multi-step tasks significantly.

10. **[#3244 — Command Platform Refactoring proposal](https://github.com/QwenLM/qwen-code/issues/3244)** (1 comment, 👍 1)
    Architectural proposal to elevate commands from a UI add-on to a unified registry/resolver/executor platform. Significant upstream alignment implications.

## 4. Key PR Progress

1. **[#3239 — Run batched subagents in parallel](https://github.com/QwenLM/qwen-code/pull/3239)** (CLOSED)
   By @wenshao. Makes `/review` agents run in parallel at the runtime level instead of depending on model behavior. Guarantees performance gains for weaker models.

2. **[#3276 — Enforce parallel agent dispatch for weaker models](https://github.com/QwenLM/qwen-code/pull/3276)** (OPEN)
   Follow-up to #3239. Strengthens `/review` Step 4 instructions so models like qwen3.6-plus reliably launch all agents in a single turn.

3. **[#3266 — PostTurn hook event](https://github.com/QwenLM/qwen-code/pull/3266)** (OPEN)
   By @zhangxy-zju. Adds a `PostTurn` hook firing at every model turn boundary, enabling custom post-processing and metadata injection.

4. **[#3079 — /batch skill for parallel batch operations](https://github.com/QwenLM/qwen-code/pull/3079)** (OPEN)
   By @doudouOUC. Adds a `/batch` built-in skill for orchestrating large-scale parallel file changes with glob patterns, chunking, and `--dry-run` support.

5. **[#3251 — Fix thought-only responses in GeminiChat stream](https://github.com/QwenLM/qwen-code/pull/3251)** (OPEN)
   By @wenshao. Fixes subagent failures on thinking models (qwen3-thinking, etc.) where empty response text caused silent errors.

6. **[#3246 — Detect rate-limit errors from streamed SSE frames](https://github.com/QwenLM/qwen-code/pull/3246)** (CLOSED, merged)
   By @wenshao. Properly detects `Throttling.AllocationQuota` errors in SSE streams instead of silently failing. Essential fix given current quota volatility.

7. **[#3261 — /history command for saved chat sessions](https://github.com/QwenLM/qwen-code/pull/3261)** (OPEN)
   By @reidliu41. Adds `/history` command for project-scoped session management, including deletion. Directly addresses #3234.

8. **[#3249 — Limit session tab title length](https://github.com/QwenLM/qwen-code/pull/3249)** (CLOSED, merged)
   By @dreamWB. Fixes VS Code tab bar overflow with Unicode-aware truncation (50 code points + `…`). Closes #2873.

9. **[#3248 — Complete hooks support for ACP integration](https://github.com/QwenLM/qwen-code/pull/3248)** (OPEN)
   By @DennisYu07. Adds full lifecycle hooks (SessionStart/End, UserPromptSubmit, Pre/PostToolUse, Stop) to the ACP integration layer.

10. **[#3087 — Managed auto-memory and auto-dream system](https://github.com/QwenLM/qwen-code/pull/3087)** (OPEN)
    By @LaZzyMan. Aligns the `extract` and `dream` memory subsystems with Claude Code patterns and fixes a critical bug preventing `extract` from ever triggering.

## 5. Feature Request Trends

- **Free tier & quota transparency**: The dominant theme. Users want real-time quota visibility, predictable limits, and clarity on reset logic ([#3203](https://github.com/QwenLM/qwen-code/issues/3203), [#3267](https://github.com/QwenLM/qwen-code/issues/3267), [#3074](https://github.com/QwenLM/qwen-code/issues/3074)).
- **Session & conversation management**: Strong demand for named/indexed history, session forking, and searchable conversations ([#3234](https://github.com/QwenLM/qwen-code/issues/3234), [#3261](https://github.com/QwenLM/qwen-code/pull/3261), [#3022](https://github.com/QwenLM/qwen-code/pull/3022)).
- **Hooks & extensibility**: Multiple PRs for HTTP hooks, function hooks, async hooks, LLM-based prompt hooks, and PostTurn events ([#2827](https://github.com/QwenLM/qwen-code/pull/2827), [#3248](https://github.com/QwenLM/qwen-code/pull/3248), [#3266](https://github.com/QwenLM/qwen-code/pull/3266), [#2990](https://github.com/QwenLM/qwen-code/pull/2990)).
- **Parallel/batch processing**: `/batch` skill, parallel subagent dispatch, and runtime-guaranteed concurrency ([#3079](https://github.com/QwenLM/qwen-code/pull/3079), [#3239](https://github.com/QwenLM/qwen-code/pull/3239), [#3276](https://github.com/QwenLM/qwen-code/pull/3276)).
- **Memory & context management**: Auto-memory systems, dream extraction, and context usage visibility ([#3087](https://github.com/QwenLM/qwen-code/pull/3087), [#2916](https://github.com/QwenLM/qwen-code/pull/2916)).

## 6. Developer Pain Points

- **Unpredictable free quota**: The #1 frustration. Limits change without notice, quota resets are opaque, and 429 errors occur far earlier than advertised. The proposed phase-out has created significant uncertainty for hobbyists and evaluators.
- **Loop detection killing sessions**: Repetitive tool calls trigger over-aggressive loop detection ([#350](https://github.com/QwenLM/qwen-code/issues/350), [#223](https://github.com/QwenLM/qwen-code/issues/223)). Complex, multi-step workflows are fragile.
- **Windows compatibility gaps**: Permission persistence failures ([#2669](https://github.com/QwenLM/qwen-code/issues/2669)), PTY issues, and general second-class treatment compared to macOS/Linux.
- **MCP connection limits**: The 2-connection cap ([#3277](https://github.com/QwenLM/qwen-code/issues/3277)) is a hard blocker for production setups with multi-node infrastructure.
- **Thinking model compatibility**: Models that emit thought-only responses cause silent subagent failures ([#3251](https://github.com/QwenLM/qwen-code/pull/3251), [#259](https://github.com/QwenLM/qwen-code/issues/259)). The tooling needs to handle the streaming semantics of reasoning models more robustly.

</details>