# AI CLI Tools Community Digest 2026-04-26

> Generated: 2026-04-25 22:06 UTC | Tools covered: 8

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

# AI Developer CLI Tools: Ecosystem Analysis Report (2026-04-26)

## 1. Ecosystem Overview

The AI CLI tooling ecosystem is currently in a phase of rapid, high-velocity iteration, transitioning from basic code-completion assistants to complex, autonomous coding agents. A clear architectural shift is occurring across the board toward multi-agent orchestration, local tool integration (via MCP), and "YOLO" or fully autonomous execution modes. However, this rapid expansion is introducing significant growing pains. Teams are actively battling platform instability—ranging from token context compaction failures to severe resource mismanagement (CPU spikes and OOM crashes)—as they attempt to integrate increasingly powerful foundation models like GPT-5.5 and DeepSeek V4 into developer workflows.

## 2. Activity Comparison

| Tool | Maintainer | Open Issues Active (Today) | PRs Active (Today) | Release Status (Last 24h) | Primary Focus Area |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | Anthropic | 10 | 8 | None (v2.1.119) | Enterprise security, billing/accounting, API stability |
| **OpenAI Codex** | OpenAI | 10 | 10 | `0.126.0-alpha.1 & 2` (Rust) | Architectural rewrites (Permissions), GPT-5.5 integration |
| **Gemini CLI** | Google | 10 | 10 | `v0.40.0-preview.4` | Agent reliability, AST context, subagent orchestration |
| **Copilot CLI** | GitHub | 10 | 1 | None | Quota protection, agent loop guardrails, remote SSH |
| **Kimi Code** | Moonshot AI | 7 | 5 | None (v1.39.0) | Git worktree isolation, Windows regressions, editor integration |
| **OpenCode** | Anomaly Co | 10 | 10 | `v1.14.25` | DeepSeek V4 integration, YOLO mode, RAG pipelines |
| **Pi** | Badlogic | 10 | 10 | None (v0.70.2) | Cross-model reasoning, proxy compatibility, provider expansion |
| **Qwen Code** | QwenLM | 10 | 10+ | None | OpenAI API compliance, CLI performance, IDE integration |

## 3. Shared Feature Directions

Despite different underlying models, the community feedback across these tools reveals unified demands for next-generation agent capabilities:

*   **Autonomous "YOLO" Modes & Guardrails:** Users are pushing for fully automated workflows. OpenCode (#11831) and Kimi Code (#2072) are actively discussing "YOLO" modes that skip manual approvals. Conversely, because agents can spiral out of control, there is massive demand for guardrails: GitHub Copilot (#2969) and Gemini CLI (#22672) users are urgently requesting loop-detection and quota-protection to prevent infinite retry cycles from burning paid tokens.
*   **Model Context Protocol (MCP) Standardization:** Managing external tools is a top priority. GitHub Copilot (#2528), Kimi Code (#2047), Gemini CLI, and Qwen Code communities are all requesting better, project-scoped (`.json`) MCP server configurations to allow seamless, localized agent-tool interactions.
*   **Cross-Provider API & Reasoning Fragility:** As users swap models (e.g., moving from Claude to DeepSeek V4 or GPT-5.5), maintaining reasoning state is a universal pain point. OpenCode (#24190), Pi (#3691), and Qwen Code (#3579) all feature highly active threads regarding `reasoning_content` failing to round-trip correctly during multi-turn conversations or context compaction. 
*   **State Management and Rollbacks:** Developers do not trust AI tools with their codebases yet. OpenAI Codex (#9203), OpenCode (#5474), and Qwen Code (#3441) all show high engagement for "Undo" features and conversation "Rewind" capabilities that actually revert file changes, not just chat state.

## 4. Differentiation Analysis

*   **Anthropic (Claude Code) & GitHub (Copilot CLI):** Focus heavily on enterprise and team deployments. Claude Code is tackling complex billing accounting for multi-agent setups (Opus orchestrator + Haiku subagents) and enterprise multi-user Linux security. Copilot CLI is deeply integrated into the VS Code Remote/SSH ecosystem, focusing on organizational guardrails and corporate quota management.
*   **OpenAI (Codex) & Anomaly Co (OpenCode):** Pushing the boundaries of local infrastructure and provider-agnosticism. Codex is executing a massive foundational rewrite in Rust to overhaul its sandboxing and permissions architecture. OpenCode is acting as a highly compatible bridge, focusing on custom HTTP APIs, local RAG pipelines, and fixing Azure/DeepSeek provider compatibility issues.
*   **Google (Gemini CLI) & QwenLM (Qwen Code):** Focused on deep workspace context and IDE parity. Gemini CLI is pioneering AST-aware file reading to reduce token waste, while Qwen Code is heavily investing in strict OpenAI API compliance to ensure its local CLI works flawlessly with open-source routing proxies.
*   **Moonshot AI (Kimi Code) & Badlogic (Pi):** Prioritizing developer quality-of-life and extensibility. Kimi Code distinguishes itself with architectural proposals like Git worktree isolation for parallel AI sessions. Pi acts as a highly extensible playground, rapidly rolling out new provider integrations (Together AI, Volcano Engine) and focusing heavily on plugin APIs (`pi.runWhenIdle()`).

## 5. Community Momentum & Maturity

**Rapid Iterators:** **OpenAI Codex**, **Gemini CLI**, **OpenCode**, **Pi**, and **Qwen Code** show the highest PR velocity (10+ PRs daily), indicating active, open development. OpenAI Codex and Gemini CLI are shipping rapid-fire alpha/preview releases to address immediate architectural gaps. 
**Enterprise Maturity:** **Claude Code** and **GitHub Copilot CLI** show lower PR volumes but highly focused issue threads regarding billing, plan limits, and cross-platform reliability, signaling a more mature, controlled (and possibly less community-open) release cycle tailored for enterprise stakeholders. 
**Emerging Player:** **Kimi Code** is showing strong momentum in solving practical multi-session developer workflows but currently struggles with basic QA regressions (e.g., Windows encoding bugs).

## 6. Trend Signals (Strategic Takeaways)

1.  **The "Context Compaction" Crisis:** As models like GPT-5.5 and DeepSeek V4 support massive context windows, CLI tools are failing to compact them gracefully. Compaction routinely breaks tooling, loses system instructions, and corrupts multi-turn reasoning. *Takeaway: Efficient, non-destructive context management is currently the highest-priority unsolved engineering challenge in AI coding agents.*
2.  **Cost & Quota Trust is Fragile:** Across all platforms, users on $200/mo "Pro" plans are reporting that agents can burn through weekly quotas in 20 minutes due to infinite loops and aggressive token burning. *Takeaway: AI CLI tools must implement strict circuit breakers, transparent token accounting, and cost caps before they can be reliably adopted in corporate environments.*
3.  **Terminal UI (TUI) Reliability Remains Subpar:** Despite the shift to "agents," basic terminal rendering is broken across the board. Mouse scrolling glitches (Copilot), CPU spikes (Codex, OpenCode), and rendering bugs (Claude) are eroding user trust. *Takeaway: Teams need to prioritize fundamental desktop performance and TUI stability over flashy new agent features.*
4.  **Open-Source Routing is the Norm:** Developers do not want to be locked into a single model provider. Tools like OpenCode, Pi, and Qwen Code are gaining traction specifically because they offer seamless routing to local models (Ollama, vLLM) and alternative APIs. *Takeaway: Provider-agnosticism and local-first execution are no longer niche features; they are baseline requirements for the developer community.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Analysis Period:** Data as of 2026-04-26 | **Source:** [github.com/anthropics/skills](https://github.com/anthropics/skills)

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | PR | Skill Name | Author | Status |
|------|-----|------------|--------|--------|
| 1 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | PGTBoos | 🟢 Open |
| 2 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer & skill-security-analyzer** | eovidiu | 🟢 Open |
| 3 | [#210](https://github.com/anthropics/skills/pull/210) | **frontend-design (improved)** | justinwetch | 🟢 Open |
| 4 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT (OpenDocument)** | GitHubNewbie0 | 🟢 Open |
| 5 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 4444J99 | 🟢 Open |
| 6 | [#568](https://github.com/anthropics/skills/pull/568) | **ServiceNow platform** | Vanka07 | 🟢 Open |
| 7 | [#539](https://github.com/anthropics/skills/pull/539) | **skill-creator YAML fix** | Lubrsy706 | 🟢 Open |
| 8 | [#806](https://github.com/anthropics/skills/pull/806) | **sensory (macOS AppleScript)** | AdelElo13 | 🟢 Open |

**Key Takeaways per Skill:**

- **document-typography** (#514): Addresses orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents — a universal pain point that affects nearly every Claude document output.

- **skill-quality-analyzer & skill-security-analyzer** (#83): Two "meta-skills" that evaluate other Skills across 5 quality dimensions and flag security vulnerabilities. Represents early community interest in self-improving tooling.

- **frontend-design v2** (#210): A clarity revision making instructions directly actionable for Claude rather than educational for humans. Directly addresses the criticism raised in [Issue #202](https://github.com/anthropics/skills/issues/202).

- **ODT Skill** (#486): Adds OpenDocument (.odt, .ods) creation, template filling, and ODT-to-HTML conversion — filling a notable gap in open-standard document support.

- **testing-patterns** (#723): Covers the full testing stack (unit, integration, E2E, React components) using the Testing Trophy model. Broadly applicable to any Claude Code user working in software.

- **ServiceNow platform** (#568): An unusually comprehensive enterprise skill covering ITSM, ITOM, HRSD, SecOps, SAM, and CSDM — signals enterprise adoption of the Skills framework.

- **skill-creator YAML fix** (#539): Fixes silent YAML parsing failures when `description` fields contain unquoted special characters (`:`). A critical robustness fix for the Skill authoring pipeline.

- **sensory (macOS automation)** (#806): Replaces screenshot-based computer use with native AppleScript automation, featuring a two-tier permission model. Represents a novel "agent-as-OS-user" paradigm.

---

## 2. Community Demand Trends (from Issues)

From the top 15 most-commented Issues, four clear demand vectors emerge:

### 🔥 Trend 1: Org-Wide Skill Sharing & Distribution
- [Issue #228](https://github.com/anthropics/skills/issues/228) (👍5, 9 comments): Teams want shared skill libraries, not manual `.skill` file sharing via Slack/Teams.
- **Signal:** Skills are moving from individual power-user tools to team/enterprise infrastructure.

### 🔥 Trend 2: Trust, Security & Namespace Governance
- [Issue #492](https://github.com/anthropics/skills/issues/492) (👍2, 4 comments): Community skills distributed under `anthropic/` namespace create trust boundary abuse potential.
- [Issue #412](https://github.com/anthropics/skills/issues/412): Proposal for an agent-governance skill with policy enforcement and audit trails.
- **Signal:** As the ecosystem grows, provenance verification and security scanning are becoming critical.

### 🔥 Trend 3: Evaluation & Reliability Infrastructure
- [Issue #556](https://github.com/anthropics/skills/issues/556) (👍6, 6 comments): `run_eval.py` shows 0% trigger rate — skills are never invoked during evaluation. Fundamental testing tooling is broken.
- [Issue #532](https://github.com/anthropics/skills/issues/532): Description optimizer requires `ANTHROPIC_API_KEY`, blocking enterprise/SSO users.
- **Signal:** The community needs robust eval infrastructure before the ecosystem can scale with confidence.

### 🔥 Trend 4: Skill-as-MCP & Interoperability
- [Issue #16](https://github.com/anthropics/skills/issues/16) (4 comments): Proposal to expose Skills as MCP (Model Context Protocol) servers, turning skills into callable API endpoints.
- **Signal:** There's appetite for Skills to become composable building blocks in a broader agent ecosystem, not just Claude Code plugins.

### 🔥 Trend 5: Duplicate & Conflicting Skills
- [Issue #189](https://github.com/anthropics/skills/issues/189) (👍7, 5 comments): `document-skills` and `example-skills` packages install identical content, wasting context window tokens.
- [PR #666](https://github.com/anthropics/skills/pull/666): `skill-creator` exists in two repos with divergent capabilities.
- **Signal:** Curation and deduplication are emerging as operational challenges.

---

## 3. High-Potential Pending Skills (Active PRs, Not Yet Merged)

These PRs have recent activity and address clear gaps — likely candidates for near-term merging:

| PR | Skill | Why It Matters | Last Active |
|-----|-------|----------------|-------------|
| [#541](https://github.com/anthropics/skills/pull/541) | **DOCX tracked-change fix** | Fixes document corruption from `w:id` collisions — critical for anyone editing Word docs | Apr 16 |
| [#538](https://github.com/anthropics/skills/pull/538) | **PDF case-sensitivity fix** | 8 file reference mismatches break PDF skill on Linux | Apr 16 |
| [#509](https://github.com/anthropics/skills/pull/509) | **CONTRIBUTING.md** | Addresses repo's 25% community health score; prerequisite for sustainable growth | Mar 19 |
| [#997](https://github.com/anthropics/skills/pull/997) | **xiao (Xiaomi vacuum)** | IoT/agent convergence — Claude as a physical device controller | Apr 21 |
| [#154](https://github.com/anthropics/skills/pull/154) | **shodh-memory** | Persistent cross-conversation context; addresses a fundamental agent limitation | Mar 3 |
| [#335](https://github.com/anthropics/skills/pull/335) | **Masonry (image/video gen)** | Bridges Claude to Imagen 3.0/Veo 3.1 for multimodal generation | Mar 14 |

**Notable:** Three of the six are **bug fixes** (Lubrsy706's trio: #539, #541, #538), all submitted the same day and consistently maintained — suggesting a dedicated community contributor focused on Skill infrastructure quality.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for robust Skill evaluation tooling and organizational sharing infrastructure** — without reliable ways to test, distribute, and trust Skills at scale, the ecosystem's growth is outpacing its operational maturity.

---

# Claude Code Community Digest — 2026-04-26

## 1. Today's Highlights

No new releases shipped in the last 24 hours. The community's attention remains focused on **stream idle timeout errors**—the top issue (#46987) now has 141 comments and 128 👍, with duplicates piling up across platforms. Meanwhile, Bedrock users are hitting a breaking change around `thinking.type` parameter handling for newer models, and several new TUI freezes and input bugs were reported on the latest CLI version (2.1.119).

---

## 2. Releases

No new releases in the last 24 hours. The latest known version in circulation is **v2.1.119** (referenced in multiple new bug reports).

---

## 3. Hot Issues

1. **[#46987](https://github.com/anthropics/claude-code/issues/46987) — Stream idle timeout errors on macOS** *(141 comments, 128 👍)*
   The single most-active issue. Users on the Anthropic API are seeing `API Error: Stream idle timeout - partial response received` multiple times per session. Marked as a duplicate but continues to attract reports. No official fix yet.

2. **[#36151](https://github.com/anthropics/claude-code/issues/36151) — Multi-account switching in Claude Mobile** *(45 comments, 147 👍)*
   Highest 👍 count of any open issue. Users want seamless account switching in the mobile app without a shared email. Community sentiment: this is a basic productivity blocker for consultants and agencies.

3. **[#31537](https://github.com/anthropics/claude-code/issues/31537) — Low credit balance after top-up** *(23 comments)*
   Users report that credit balances don't reflect top-ups in real time, causing interruptions to active sessions. Billing reliability is a trust concern.

4. **[#47252](https://github.com/anthropics/claude-code/issues/47252) — Ultraplan stream idle timeout on WSL** *(20 comments)*
   The Ultraplan (research preview) refinement step consistently fails with the same stream timeout error during plan refinement. Blocks the entire Ultraplan workflow on WSL.

5. **[#49479](https://github.com/anthropics/claude-code/issues/49479) — ESC during MCP tool call kills all Python stdio MCPs** *(5 comments, regression)*
   A regression from v2.1.104: pressing Escape while an MCP tool call is running destroys all Python-based stdio MCP servers, requiring a full restart. Has a 30-line repro. Community frustration is high.

6. **[#51439](https://github.com/anthropics/claude-code/issues/51439) & [#51711](https://github.com/anthropics/claude-code/issues/51711) — Bedrock `thinking.type.enabled` vs `adaptive` breakage** *(9 combined comments)*
   Claude Code v2.1.116 sends `thinking.type: "enabled"`, but Opus 4.7 and newer Bedrock inference profiles require `thinking.type: "adaptive"`. Results in a hard 400 error. **Blocks all Bedrock users on latest models.**

7. **[#53363](https://github.com/anthropics/claude-code/issues/53363) — Same assistant response rendered 16 times** *(new, 2 comments)*
   A TUI rendering bug where a single user message causes the assistant response to be duplicated 16 times in the terminal. Reported on v2.1.119 with Sonnet 4.6.

8. **[#52502](https://github.com/anthropics/claude-code/issues/52502) — Token limits drain fast with Opus orchestrator + Haiku subagents** *(9 comments)*
   Max 20x plan users report session and weekly limits depleting disproportionately when Opus is used purely as an orchestrator dispatching to Haiku subagents. Cost accounting appears to over-attribute tokens to the orchestrator.

9. **[#53361](https://github.com/anthropics/claude-code/issues/53361) — `/tmp/claude-settings-{hash}.json` collision on multi-user Linux** *(new)*
   In Cowork mode, ccd-cli writes settings to a deterministic `/tmp` path based on a hash, causing collisions when multiple Linux users share a host. Permissions (644) make this both a functional bug and a security concern.

10. **[#50238](https://github.com/anthropics/claude-code/issues/50238) — Desktop OOM crash on large `.jsonl` transcripts** *(2 comments)*
    The `/stats` scanner reads every transcript file synchronously with no per-file size limit. Any `.jsonl` transcript exceeding ~1 GB triggers a V8 heap OOM, crashing the desktop app at startup.

---

## 4. Key PR Progress

1. **[#53204](https://github.com/anthropics/claude-code/pull/53204) — Add `sql_injection` and `hardcoded_secret` patterns to security-guidance plugin**
   Adds two new detection patterns (SQL injection via f-strings, hardcoded secrets) to the PreToolUse security hook, bringing the pattern count from 9 to 11.

2. **[#53203](https://github.com/anthropics/claude-code/pull/53203) — Add README for security-guidance plugin**
   Documentation-only PR adding a README to the only plugin in `/plugins` that lacked one. Includes pattern table, hook description, and configuration examples.

3. **[#46024](https://github.com/anthropics/claude-code/pull/46024) — Document `--exclude-dynamic-system-prompt-sections` flag**
   Documents the print-mode prompt caching flag that moves per-machine dynamic sections from the system prompt into the first user message for better cache reuse.

4. **[#46025](https://github.com/anthropics/claude-code/pull/46025) — Add Linux subprocess isolation and `CLAUDE_CODE_SCRIPT_CAPS` docs**
   Documents PID namespace isolation under `CLAUDE_CODE_SUBPROCESS_ENV_SCRUB` and the `CLAUDE_CODE_SCRIPT_CAPS` env var. Includes a hardened settings JSON example for managed deployments.

5. **[#40458](https://github.com/anthropics/claude-code/pull/40458) — Normalize `Europe/Kiev` to `Europe/Kyiv`**
   Adds a timezone normalization utility mapping legacy IANA aliases to canonical names. Fixes `Europe/Kiev` → `Europe/Kyiv` for systems with older tzdata.

6. **[#41447](https://github.com/anthropics/claude-code/pull/41447) — "Open source Claude Code"** *(community PR)*
   A community-submitted PR attempting to open-source the codebase. References multiple related issues. Unlikely to be merged but highlights strong community demand.

7. **[#53354](https://github.com/anthropics/claude-code/pull/53354) — Add files via upload**
   Appears to be a low-quality community PR uploading a ZIP file. Likely to be closed as invalid.

8. **[#47532](https://github.com/anthropics/claude-code/pull/47532) — Rename marketplace for AgentNXT deployment** *(closed)*
   A closed PR related to marketplace naming. Minimal context in the description.

---

## 5. Feature Request Trends

| Trend | Representative Issues | Signal |
|---|---|---|
| **Mobile & multi-account support** | [#36151](https://github.com/anthropics/claude-code/issues/36151) (147 👍), [#35637](https://github.com/anthropics/claude-code/issues/35637) | Top-voted open issue. Users need multi-account switching and full remote-control parity on mobile. |
| **Ghostty terminal support** | [#24189](https://github.com/anthropics/claude-code/issues/24189) (61 👍) | Agent teams / teammateMode split-pane backend for Ghostty. Strong demand from early adopters of the Ghostty terminal. |
| **TUI control & quiet mode** | [#5985](https://github.com/anthropics/claude-code/issues/5985) (22 👍), [#53352](https://github.com/anthropics/claude-code/issues/53352) | Requests for spinner text suppression (especially for non-English users) and real-time verbose reasoning display for advanced users. |
| **Desktop ↔ CLI settings sync** | [#52679](https://github.com/anthropics/claude-code/issues/52679) | Sharing configuration between Claude Desktop and Claude Code CLI so the desktop app is context-aware of the local install. |
| **Launch preview panel control** | [#51587](https://github.com/anthropics/claude-code/issues/51587) | Option to disable auto-open of the Launch preview panel on Write/Edit operations. |

---

## 6. Developer Pain Points

- **Stream idle timeouts are the #1 pain point.** The error affects macOS, WSL, and Linux across plan mode, Ultraplan, and normal sessions. Multiple duplicate issues are stacking up with no acknowledged fix or timeline ([#46987](https://github.com/anthropics/claude-code/issues/46987), [#47252](https://github.com/anthropics/claude-code/issues/47252)).

- **Bedrock compatibility is broken for Opus 4.7.** The `thinking.type` mismatch ([#51439](https://github.com/anthropics/claude-code/issues/51439), [#51711](https://github.com/anthropics/claude-code/issues/51711)) is a hard blocker for any Bedrock user trying to access newer models via inference profiles.

- **TUI input freezes persist across versions.** Double-Esc freezing resumed sessions ([#53227](https://github.com/anthropics/claude-code/issues/53227)), `/rewind` after `/resume` console freezes ([#52268](https://github.com/anthropics/claude-code/issues/52268)), and CLI pausing on focus loss ([#52166](https://github.com/anthropics/claude-code/issues/52166)) indicate a systemic input dispatch problem in the TUI layer.

- **Context compaction causes quality regressions.** After auto-compact, Claude ignores `CLAUDE.md` and recreates files from scratch ([#45869](https://github.com/anthropics/claude-code/issues/45869)), and compact triggers at the wrong threshold despite overrides ([#53358](https://github.com/anthropics/claude-code/issues/53358)).

- **Cost and token accounting for orchestrator/agent patterns is opaque and possibly incorrect.** Users on the Max 20x plan report disproportionate limit depletion with Opus+Haiku agent setups ([#52502](https://github.com/anthropics/claude-code/issues/52502)), and simple tasks drag for days when orchestrator agents ignore memory constraints ([#52930](https://github.com/anthropics/claude-code/issues/52930)).

- **Multi-user Linux deployments have security gaps.** Shared `/tmp` settings files with predictable paths and restrictive permissions ([#53361](https://github.com/anthropics/claude-code/issues/53361)) and missing per-file size limits causing OOM ([#50238](https://github.com/anthropics/claude-code/issues/50238)) suggest the product needs hardening for team/enterprise use.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-26

## 1. Today's Highlights
The OpenAI Codex team shipped two new Rust alpha releases (`0.126.0-alpha.1` and `0.126.0-alpha.2`) alongside a massive architectural push to migrate the entire permissions system to a new `PermissionProfile` backbone. GPT-5.5 rate-limiting and context-compaction bugs dominated community discussion, with multiple reports of Pro tier usage being drained in minutes rather than hours. 

## 2. Releases
- **[rust-v0.126.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.2)** and **[rust-v0.126.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.1)**: Two rapid-fire alpha releases were published in the last 24 hours, indicating active iteration on the Rust core leading up to a stable `0.126.0` milestone.

## 3. Hot Issues

1. **[High CPU usage on macOS after updating VS Code extension (#16231)](https://github.com/openai/codex/issues/16231)**
   * **Why it matters:** Users on Apple Silicon (M5 Pro) are experiencing severe CPU spikes and thermal throttling. With 60 comments and 58 thumbs-up, this is currently the most active bug in the repo.
2. **[Codex app 100% CPU Usage with a single agent (#11981)](https://github.com/openai/codex/issues/11981)**
   * **Why it matters:** A lingering issue where the desktop app maxes out CPU even during minimal workloads. 43 comments show growing frustration among Mac users.
3. **[Support standalone Windows installer (`codex-setup.exe`) (#13993)](https://github.com/openai/codex/issues/13993)**
   * **Why it matters:** Corporate/enterprise users on Windows are blocked by Microsoft Store restrictions. This is the highest upvoted issue of the day (76 👍), reflecting strong demand for a traditional `.exe` installer.
4. **[Support 1M token context for GPT-5.5 in Codex (#19464)](https://github.com/openai/codex/issues/19464)**
   * **Why it matters:** The API supports 1M tokens for GPT-5.5, but Codex caps it at 400K. Users are eager for feature parity, driving 32 comments in two days.
5. **[Please make "/undo" back (#9203)](https://github.com/openai/codex/issues/9203)**
   * **Why it matters:** The highest upvoted issue overall (154 👍). Accidental, non-Git-tracked file deletions are a critical pain point, and users desperately want a built-in undo mechanism.
6. **[Pro plan 5-hour usage limit depleted in ~20 minutes (#19571)](https://github.com/openai/codex/issues/19571)**
   * **Why it matters:** $200/mo Pro subscribers are hitting their weekly usage caps in minutes due to GPT-5.5's high token burn rate, which is severely undermining trust in the subscription's value.
7. **[GPT-5.5 remote compaction fails and leaves thread unusable (#19558)](https://github.com/openai/codex/issues/19558)**
   * **Why it matters:** GPT-5.5's large context causes compaction failures that break active sessions entirely, compounding the rate-limiting frustrations.
8. **[macOS startup failure: unsupported feature `workspace_dependencies` (#19220)](https://github.com/openai/codex/issues/19220)**
   * **Why it matters:** A recent update completely broke the app launch for a segment of macOS users. High priority due to "app won't open" severity.
9. **[Windows elevated sandbox causing all commands to fail (#10090)](https://github.com/openai/codex/issues/10090)**
   * **Why it matters:** Business tier Windows users are blocked from executing CLI commands due to `CreateProcessAsUserW` permission errors in the sandbox.
10. **[VS Code extension not loading previous conversations (#19478)](https://github.com/openai/codex/issues/19478)**
    * **Why it matters:** Session history fails to load in remote VS Code setups, interrupting developer workflows and losing active agent state.

## 4. Key PR Progress

1. **[permissions: make runtime config profile-backed (#19391)](https://github.com/openai/codex/pull/19391)**
   * Foundational architectural shift making `PermissionProfile` the canonical shape for runtime config, replacing the legacy `SandboxPolicy`.
2. **[permissions: derive compatibility policies from profiles (#19392)](https://github.com/openai/codex/pull/19392)**
   * Eliminates drift risk between new profiles and legacy cached projections, ensuring denied globs and external enforcement remain intact.
3. **[permissions: migrate approval and sandbox consumers to profiles (#19393)](https://github.com/openai/codex/pull/19393)**
   * Migrates core approval/escalation paths to use profiles directly, ensuring distinct handling for `Disabled` vs `External` environments.
4. **[Restore persisted model provider on thread resume (#19287)](https://github.com/openai/codex/pull/19287)**
   * Fixes a major bug where cross-provider conversations (e.g., Azure OpenAI) would break upon resuming a thread. Closes [#15219](https://github.com/openai/codex/issues/15219).
5. **[[mcp] Save Plugin MCP policies to config.toml (#19537)](https://github.com/openai/codex/pull/19537)**
   * Fixes MCP "Always allow" preferences by saving them in `config.toml` under `plugins.<plugin>.mcp_servers`.
6. **[Fix filtered thread-list resume regression in TUI (#19591)](https://github.com/openai/codex/pull/19591)**
   * Fixes a regression in `codex resume` that broke the TUI resume picker when using metadata-filtered thread listings.
7. **[Move config loading into codex-config (#19487)](https://github.com/openai/codex/pull/19487)**
   * Refactors the codebase to consolidate configuration loading logic exclusively into the `codex-config` crate for better maintainability.
8. **[fix(tui): reflow scrollback on terminal resize (#18575)](https://github.com/openai/codex/pull/18575)**
   * Sweeping UI fix that resolves 6 open issues related to broken scrollback rendering when the user resizes their terminal window.
9. **[Unwrap PowerShell commands for exec policy (#17393)](https://github.com/openai/codex/pull/17393)**
   * Patches a Windows-specific security bypass where malicious commands wrapped in `pwsh` could evade `prefix_rule` execution policies.
10. **[Reserve missing preserved paths in Linux sandbox policy (#18446)](https://github.com/openai/codex/pull/18446)**
    * Security fix ensuring `.codex` and `.agents` metadata directories are explicitly protected under workspace write sandboxes, alongside `.git`.

## 5. Feature Request Trends
- **Expanded Context Windows:** Overwhelming demand for Codex to support the full 1M token context limit of GPT-5.5, rather than the current 400k cap.
- **OS & Installer Parity:** Windows and FreeBSD users are pushing for better platform support, specifically requesting standalone `.exe` installers to bypass Microsoft Store limitations.
- **Robust Safety Nets:** A massive community push for the return of `/undo` (154 👍) and better handling of `.env` secrets in setup scripts.
- **App Reliability:** Users want increased session caps and persistent conversations in the VS Code extension.

## 6. Developer Pain Points
- **GPT-5.5 Cost & Rate Limiting:** The transition to GPT-5.5 has severely impacted the utility of the tool. Developers are highly frustrated by unstable context compaction that leaves threads unusable, combined with aggressive rate limits that deplete weekly Pro ($200) quotas in as little as 20 minutes.
- **Resource Mismanagement:** Persistent CPU and memory spikes on macOS (affecting both Apple Silicon and Intel Macs) continue to erode user experience and trust in the Desktop app.
- **Sandbox Brittleness:** Windows and Linux power users remain frustrated by fragile sandbox implementations that consistently fail on mapped network drives, during PowerShell execution, or when requiring elevated permissions.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-26

## 1. Today's Highlights
Gemini CLI issued a quick patch release (v0.40.0-preview.4) to address a critical cherry-pick from the previous preview branch. The community and maintainers remain highly active, with significant architectural discussions emerging around **AST-aware codebase mapping** and **subagent context recovery**. Additionally, contributor momentum is surging in the core CLI space, introducing robust new features like local Ollama context compression and versioned pre-write file backups.

## 2. Releases
- **[v0.40.0-preview.4](https://github.com/google-gemini/gemini-cli/releases/tag/v0.40.0-preview.4)**: A targeted patch release cherry-picking commit `048bf6e` to fix an issue carried over from `v0.40.0-preview.3`.

## 3. Hot Issues
1. **[#25025 - 403 Permission Error](https://github.com/google-gemini/gemini-cli/issues/25025)**: A critical auth issue where valid OAuth tokens suddenly result in 403 errors during API requests. Needs triage.
2. **[#22745 - AST-Aware File Reads](https://github.com/google-gemini/gemini-cli/issues/22745)**: Maintainers are assessing the impact of introducing AST-aware tools to reduce misaligned reads and token noise, which could drastically improve agent efficiency.
3. **[#22323 - Subagent False Successes](https://github.com/google-gemini/gemini-cli/issues/22323)**: A high-priority bug where subagents hitting `MAX_TURNS` incorrectly report a `GOAL` success status, hiding task interruptions from the main agent.
4. **[#24916 - Repeated Permission Prompts](https://github.com/google-gemini/gemini-cli/issues/24916)**: A friction point where the CLI fails to remember "allow for all future sessions" directives for specific files.
5. **[#25166 - Shell Execution Hangs](https://github.com/google-gemini/gemini-cli/issues/25166)**: The CLI repeatedly gets stuck waiting for user input on simple, already-completed shell commands (👍 3).
6. **[#25979 - Browser Agent Action Counter Bug](https://github.com/google-gemini/gemini-cli/issues/25979)**: The `maxActionsPerTask` limit in the Browser Agent persists across multiple delegations, breaking task isolation.
7. **[#22819 - Global vs. Project Memory Routing](https://github.com/google-gemini/gemini-cli/issues/22819)**: Architectural work to map user preferences (Global `~/.gemini/`) versus codebase context (Project `.gemini/`) correctly (👍 2).
8. **[#23582 - Subagent Approval Mode Awareness](https://github.com/google-gemini/gemini-cli/issues/23582)**: Subagents currently lack context regarding active constraints (like Plan Mode), leading to blocked tool calls and conflicting instructions.
9. **[#25216 - EISDIR Crash on Windows](https://github.com/google-gemini/gemini-cli/issues/25216)**: A crash triggered by running the CLI in YOLO mode from temporary paths on Windows (e.g., `A:\`).
10. **[#22672 - Destructive Git Operations](https://github.com/google-gemini/gemini-cli/issues/22672)**: Requests for built-in guardrails to prevent the model from using destructive commands (like `git reset --force`) when safer alternatives exist.

## 4. Key PR Progress
1. **[#25915 - Local Ollama `/compress` Routing](https://github.com/google-gemini/gemini-cli/pull/25915)**: Introduces `OllamaCompressClient` to route context compression to local models (e.g., `gemma3:4b`), saving main model tokens.
2. **[#25947 - Versioned Pre-Write Backups](https://github.com/google-gemini/gemini-cli/pull/25947)**: Implements a native, session-scoped transactional file backup system to prevent destructive file modification loops by agents.
3. **[#25912 - Compact Output for MCP Tools](https://github.com/google-gemini/gemini-cli/pull/25912)**: Extends `compactToolOutput` to MCP tools, preventing massive console spam from external tool executions.
4. **[#25971 & #25962 - Config Naming Standardization](https://github.com/google-gemini/gemini-cli/pull/25971)**: Refactors config options to use positive boolean semantics (e.g., changing `hide*` to `show*`) with auto-migration for legacy configs.
5. **[#25980 - Crash Fix for Non-Path @-Mentions](https://github.com/google-gemini/gemini-cli/pull/25980)**: Prevents `ENAMETOOLONG` crashes when JSON-like or malformed text is pasted and captured as an @-mention file path.
6. **[#25943 - Ctrl+Backspace Fallback](https://github.com/google-gemini/gemini-cli/pull/25943)**: Adds a `modifyOtherKeys` fallback for terminal environments where Ctrl+Backspace word deletion isn't natively functioning.
7. **[#25975 - Env Vars in MCP Server Args](https://github.com/google-gemini/gemini-cli/pull/25975)**: Fixes a bug preventing environment variables from being expanded in `args`, `command`, and `cwd` MCP server configurations.
8. **[#25578 - API Key Parsing Fix](https://github.com/google-gemini/gemini-cli/pull/25578)**: Resolves an issue where API keys containing periods (allowed by RFC 3986) were rejected as invalid during auth.
9. **[#25788 - Live Streaming for Discovered Tools](https://github.com/google-gemini/gemini-cli/pull/25788)**: Enables real-time `stdout`/`stderr` streaming for local tools registered via `discoveryCommand`.
10. **[#25653 - Fix `gemini extensions new` Build](https://github.com/google-gemini/gemini-cli/pull/25653)**: Resolves a build path omission that caused the extension creation wizard to fail due to missing example templates.

## 5. Feature Request Trends
- **Agent Reliability & Guardrails**: High demand for agents to better understand their execution context, specifically regarding safety (avoiding `--force` flags) and policy constraints (Plan/Auto-Edit modes).
- **Advanced Codebase Context**: Strong momentum toward AST-aware tooling for precise code reading, searching, and mapping to reduce token waste and LLM hallucinations.
- **Memory & State Management**: Persistent requests for smarter memory routing (global vs. project) and proactive memory writes, alongside better state management (fixing false success reports and broken action counters in subagents).

## 6. Developer Pain Points
- **Agent Halts & Infinite Loops**: Developers are frustrated by agents getting stuck in "Waiting input" states or entering repetitive loops because they fail to recognize tool rejections or turn limits.
- **Cross-Platform Terminal Quirks**: Windows and SSH users continue to face severe usability blockers, including screen scrambling over SSH, path resolution crashes (`EISDIR`), and terminal buffer corruption when exiting external editors.
- **Workspace Pollution**: The agent's tendency to scatter temporary edit scripts across directories instead of using a sandbox or centralized temp directory creates significant cleanup overhead.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-26

## 1. Today's Highlights

No new releases shipped in the past 24 hours, but the community remains highly active around **agent reliability and resource-quota guardrails**. A cluster of new issues highlights that autopilot mode can enter infinite retry loops—burning through premium requests—which has become the most urgent theme of the day. On the feature side, requests for **per-repository MCP configuration**, a **master instructions file**, and **local auto-memory** signal strong demand for more project-scoped and privacy-conscious customization.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [#2969 — Autopilot infinite loop on externally blocked task](https://github.com/github/copilot-cli/issues/2969) | Agent admits it can't proceed yet autopilot keeps relaunching it, consuming one premium request per iteration until quota is exhausted. Directly impacts cost trust. |
| 2 | [#1540 — Endless loop eats all quota](https://github.com/github/copilot-cli/issues/1540) | Older but updated today; model (Opus 4.6 / Haiku) loops looking for `task_complete` tool. Paired with #2969, this reveals a systemic lack of loop/failure detection in agent orchestration. |
| 3 | [#2971 — Autopilot write ops fail silently after SSH reconnect, causing infinite retry loop](https://github.com/github/copilot-cli/issues/2971) | In VS Code Remote SSH dev containers, permission prompts can't reach the user after a network reconnect, so every write tool permanently fails and the agent loops. Niche but severe for remote workflows. |
| 4 | [#2205 — Mouse scroll navigates input history instead of output](https://github.com/github/copilot-cli/issues/2205) | 6 👍, 8 comments. A long-standing terminal-rendering regression that breaks basic UX for reviewing agent output. Community is vocal about this. |
| 5 | [#2528 — Per-repository MCP server config](https://github.com/github/copilot-cli/issues/2528) | 5 👍. Requests `.github/mcp.json` support so MCP servers can be project-scoped—mirroring existing patterns for custom instructions and LSP config. High strategic value for team workflows. |
| 6 | [#2976 — Master instructions file](https://github.com/github/copilot-cli/issues/2976) | Wants a global, session-agnostic instruction file Copilot always follows. Closed but sparked discussion; aligns with broader desire for persistent, cross-project customization. |
| 7 | [#2972 — Esc cancels agent but clears typed input buffer](https://github.com/github/copilot-cli/issues/2972) | UX gap: interrupting a running agent destroys whatever you've already typed. A small but frequent friction point for power users. |
| 8 | [#2966 — Built-in tooling for managing multiple concurrent CLI sessions](https://github.com/github/copilot-cli/issues/2966) | Feature request for first-class multi-session management, especially relevant with `--yolo --autopilot`. Reflects growing "power-user ops" usage patterns. |
| 9 | [#2967 — Opus 4.7 small context window triggers auto-compact too frequently](https://github.com/github/copilot-cli/issues/2971) | Effective context appears much smaller than GPT 5.4 under the same tier, causing disruptive mid-task compaction. Raises model parity concerns. |
| 10 | [#2930 — Local auto-memory (agent-initiated, no remote storage)](https://github.com/github/copilot-cli/issues/2930) | Enterprise orgs disable cloud-backed Copilot Memory; this proposes purely local knowledge accumulation. Important for adoption in security-sensitive environments. |

---

## 4. Key PR Progress

Only **one pull request** saw activity in the last 24 hours:

| PR | Title | Notes |
|----|-------|-------|
| [#2970](https://github.com/github/copilot-cli/pull/2970) | Create `devcontainer.json` | Contributed by **Huynhthuongg**. Adds a dev container definition to the repo, lowering the barrier for contributors to set up a consistent development environment. No comments yet; early in review. |

> With just a single community PR in play, today's momentum is clearly tilted toward issue discussion rather than code contributions.

---

## 5. Feature Request Trends

Several clear themes emerge from recent issues:

| Trend | Representative Issues | Signal Strength |
|-------|----------------------|-----------------|
| **Per-project / per-repo configuration** | #2528 (repo-level MCP config), #2976 (master instructions) | 🔴 High — mirrors `.github/copilot-instructions.md` and `.github/lsp.json` patterns users already know |
| **Agent loop / quota protection** | #2969, #1540, #2971 | 🔴 High — multiple reports of unbounded premium-request consumption; needs circuit-breaker logic |
| **Local-first / privacy-conscious features** | #2930 (local auto-memory) | 🟡 Medium — enterprise blocker for Copilot Memory adoption |
| **Multi-session & power-user workflows** | #2966 (concurrent session management) | 🟡 Medium — driven by `--yolo --autopilot` usage |
| **Model parity & context fairness** | #2967 (Opus 4.7 context), #2974 (Pro+ model access) | 🟡 Medium — users expect equal capabilities across subscription tiers |
| **Terminal UX polish** | #2205 (scroll), #2972 (Esc clears input), #2968 (Windows URL wrapping) | 🟡 Medium — small frictions that compound for daily users |

---

## 6. Developer Pain Points

1. **Premium request burn from infinite loops.** The most urgent pain point. When an agent can't complete a task, autopilot mode retries indefinitely with no backoff or quota-aware gating. Users are losing paid quota while asleep or away (#2969, #1540).

2. **Permission system brittleness in remote/SSH setups.** After network reconnects in VS Code Remote SSH containers, the CLI can no longer prompt the user for permissions, causing all write operations to fail permanently and the agent to loop (#2971).

3. **Terminal rendering regressions.** Scrolling through agent output is broken (navigates input history instead), and long URLs don't render as clickable links in Windows Terminal (#2205, #2968). These degrade daily usability.

4. **Lack of persistent, project-scoped customization.** Users want MCP servers, instructions, and memory anchored to repos or globally applied—not locked to a single user-level config (#2528, #2976, #2930).

5. **Input buffer lost on agent interrupt.** Pressing Esc to stop a running agent discards anything already typed, forcing users to re-compose their prompts (#2972).

---

*Digest generated from public GitHub data on 2026-04-26. Data source: [github.com/github/copilot-cli](https://github.com/github/copilot-cli).*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-26

## 1. Today's Highlights
No new releases shipped in the last 24 hours, but the community remains highly active around v1.39.0 regressions and new architectural proposals. A batch of v1.39.0-specific bugs—particularly around Windows encoding and the `/web` mode—signal a rough edge in the latest release that will likely require a hotfix. On the PR front, two ambitious contributions—a **git worktree isolation mode** and an **ACP approval notification system**—stand to meaningfully improve multi-session workflows and editor integration.

## 2. Releases
No new releases in the last 24 hours. The current latest version remains **v1.39.0** (released 2026-04-25).

## 3. Hot Issues

1. **[#2070](https://github.com/MoonshotAI/kimi-cli/issues/2070) — Windows 中文系统 v1.38.0+ 内置 skill 文件编码错误** *(Bug, 👍 0)*
   The v1.39.0 upgrade breaks on Chinese-locale Windows: built-in skill files are not UTF-8 encoded, causing a decode failure on startup. This is a blocking regression for a large segment of users and is likely a quick-fix candidate.

2. **[#2074](https://github.com/MoonshotAI/kimi-cli/issues/2074) — v1.39.0 `/web` mode JS MIME type error** *(Bug, 👍 0)*
   The locally-served web UI sends JavaScript files with an incorrect `Content-Type`, preventing the page from loading at all on Windows 10. Combined with #2070, this paints a picture of insufficient pre-release QA on Windows.

3. **[#2059](https://github.com/MoonshotAI/kimi-cli/issues/2059) — Error responses still consume tokens** *(Bug, 👍 0)*
   Users are frustrated that failed or errored API calls count against their token quota. On the 99-plan tier this directly impacts perceived value; the community expects errors to be either free or transparently accounted for.

4. **[#1823](https://github.com/MoonshotAI/kimi-cli/issues/1823) — Configurable approval timeout (or unlimited)** *(Enhancement, 👍 2)*
   Though marked CLOSED, the author explicitly notes it is **not actually resolved**. The hardcoded 5-minute timeout on approval requests is too short for review-heavy workflows. Small but significant signal that the issue lifecycle needs attention.

5. **[#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) — Remote Control: continue local sessions from any device** *(Enhancement, 👍 3)*
   A highly-requested quality-of-life feature to hand off a running CLI session to a phone or tablet browser. Three upvotes make it one of the most popular open requests, speaking to a desire for mobility in developer workflows.

6. **[#2072](https://github.com/MoonshotAI/kimi-cli/issues/2072) — Yolo mode blocks `AskUserQuestion`** *(Enhancement, 👍 0)*
   The reporter identifies a design conflation: auto-approve should not imply non-interactive. When Yolo mode is active, the agent cannot ask clarifying questions, which silently degrades output quality.

7. **[#2071](https://github.com/MoonshotAI/kimi-cli/issues/2071) — Mandatory project skill loading gates (`.kimi/require-skills`)** *(Enhancement, 👍 0)*
   Proposes a gate mechanism that forces the agent to load defined skills before modifying source code. Addresses a real governance gap in agentic coding: ensuring workflow compliance (e.g., TDD, security review) before writes.

## 4. Key PR Progress

1. **[#2073](https://github.com/MoonshotAI/kimi-cli/pull/2073) — Git worktree support for isolated sessions**
   Adds `--worktree` / `-W` flag so each kimi session runs in its own git worktree. This eliminates file conflicts and branch-switching overhead when running parallel sessions on the same repo. Potentially a game-changer for monorepo workflows.

2. **[#2068](https://github.com/MoonshotAI/kimi-cli/pull/2068) — ACP approval-required notifications**
   Emits a `kimi/approval_required` custom notification to ACP clients before an approval request is sent. This enables editor extensions (Zed, VS Code) to surface approval prompts natively rather than relying on the terminal.

3. **[#1960](https://github.com/MoonshotAI/kimi-cli/pull/1960) — RalphFlow: ephemeral context + convergence detection**
   Introduces an automated iteration architecture that runs each step in an isolated temporary context file and detects convergence to prevent infinite loops. An ambitious architectural contribution that could make autonomous coding sessions more reliable.

4. **[#2047](https://github.com/MoonshotAI/kimi-cli/pull/2047) — Load `~/.kimi/mcp.json` in ACP server sessions**
   Fixes a gap where `kimi acp` (used by external editors) ignored locally configured MCP servers, giving users only built-in tools. A targeted fix with outsized impact on editor-integration power users.

5. **[#1896](https://github.com/MoonshotAI/kimi-cli/pull/1896) — Honor `http_proxy` env vars via `aiohttp trust_env=True`** *(CLOSED)*
   Ensures standard proxy environment variables are respected. Critical for corporate and restricted-network environments. Status: closed—awaiting confirmation of merge or alternative fix.

## 5. Feature Request Trends

| Trend | Issues | Signal |
|---|---|---|
| **Multi-session & isolation** | #2073 (worktree PR), #1282 (remote sessions) | Developers want to run parallel kimi sessions safely, whether across devices or branches. |
| **Smarter approval & autonomy controls** | #1823 (timeout), #2072 (yolo vs. non-interactive), #2068 (ACP notifications) | Users want fine-grained control over when the agent asks for permission vs. acts autonomously. |
| **Project governance & guardrails** | #2071 (mandatory skill gates) | Teams want enforceable policies that constrain agent behavior to defined workflows. |
| **Cross-device & mobility** | #1282 (remote control) | Handing off sessions to mobile devices is a recurring quality-of-life request. |

## 6. Developer Pain Points

- **v1.39.0 regressions on Windows** — Encoding bugs (#2070) and MIME-type issues (#2074) suggest the latest release shipped with inadequate Windows testing. Users on non-English locales are blocked entirely.
- **Token accounting feels unfair** — Errored requests consuming tokens (#2059) erodes trust in the billing model, especially on metered plans.
- **Hardcoded limits block real workflows** — The 5-minute approval timeout (#1823) is too rigid for code-review-heavy teams; the fact that the issue is marked CLOSED but unresolved adds frustration.
- **Editor integration gaps** — ACP mode missing MCP tool loading (#2047) and lacking approval notifications (#2068, #2040) indicate that the editor-integration story is still immature compared to the terminal experience.
- **Yolo mode's false dichotomy** — Conflating auto-approve with headless/non-interactive mode (#2072) silently reduces output quality when users just want to skip manual approvals, not skip clarification questions.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-26

---

## 1. Today's Highlights

OpenCode shipped **v1.14.25**, bringing important fixes to permission configuration rule ordering, richer LSP permission prompts, and corrected shell working directory handling. The community is heavily focused on **DeepSeek V4 integration issues**, with multiple high-comment threads reporting that `reasoning_content` is not properly round-tripped in multi-turn conversations, causing widespread 400 errors. On the contribution side, there's notable momentum around expanding provider compatibility (Azure API versioning, output limits) and enriching the plugin ecosystem (RAG pipelines, agent memory, vision fallback).

---

## 2. Releases

### v1.14.25
- **Permission config preservation**: Fixed rule order in permission configuration and added full IntelliSense support for tool permission keys.
- **LSP permission prompts**: Prompts now surface request details including the operation, target file, and cursor position, giving users better context before approving.
- **Shell working directory**: Shell commands now maintain the correct working directory after login shell startup files run, fixing a subtle but annoying path issue.

---

## 3. Hot Issues

1. **[#24190](https://github.com/anomalyco/opencode/issues/24190) — DeepSeek V4 `reasoning_content` not round-tripped (400 error on multi-turn tool calls)** (23 comments, 7 👍)
   The top issue by engagement. DeepSeek V4 Pro/Flash multi-turn conversations fail from the second turn onward because `reasoning_content` from thinking mode isn't passed back to the API. This is a blocking issue for anyone using DeepSeek V4 with tool calls.

2. **[#5474](https://github.com/anomalyco/opencode/issues/5474) — `/undo` only rolls back conversation, not file changes** (21 comments, 7 👍)
   A long-standing bug: `/undo` reverts the chat message but leaves AI-written file changes intact, creating a dangerous mismatch between conversation state and workspace state. Community members consider this a trust-breaking issue.

3. **[#14808](https://github.com/anomalyco/opencode/issues/14808) — Plugin `session.created` event not firing** (17 comments, 12 👍)
   Plugins subscribing to the event bus never receive `session.created`, effectively breaking any plugin that needs to initialize on session start. High 👍 count signals strong plugin developer frustration.

4. **[#24083](https://github.com/anomalyco/opencode/issues/24083) — DeepSeek thinking mode `reasoning_content` must be passed back** (8 comments, 9 👍) *[CLOSED]*
   Original report of the DeepSeek reasoning_content issue. Closed, likely addressed in recent patches, but see #24190 for ongoing reports.

5. **[#11831](https://github.com/anomalyco/opencode/issues/11831) — YOLO Mode: Auto-Approve All Permission Prompts** (6 comments, 20 👍)
   The highest-👍 issue in this window. Power users want a configurable mode to skip all "ask" permission prompts while still respecting explicit `deny` rules. Strong demand from users running autonomous agent workflows.

6. **[#13715](https://github.com/anomalyco/opencode/issues/13715) — Subagent permission asks silently hang the TUI** (5 comments, 10 👍)
   Nested subagents that require permission cause the TUI to hang indefinitely — the permission prompt is emitted but never rendered. Critical for multi-agent architecture reliability.

7. **[#13999](https://github.com/anomalyco/opencode/issues/13999) — Azure OpenAI Responses API missing `?api-version=` query param** (4 comments, 8 👍)
   Azure Cognitive Services endpoints fail because OpenCode doesn't append the required `api-version` query parameter to Responses API calls, blocking GPT-5.x-Codex model usage on Azure.

8. **[#24342](https://github.com/anomalyco/opencode/issues/24342) — Main & Sub-agents randomly freeze indefinitely ("thinking" forever)** (6 comments, 1 👍)
   A hard-to-reproduce but impactful freeze bug where the frontend permanently shows "thinking" after the LLM inference has already terminated. Affects both main and sub-agent workflows unpredictably.

9. **[#24316](https://github.com/anomalyco/opencode/issues/24316) — Progress halts with Qwen 3.6 35b-a3b naked tool call** (7 comments)
   Local model users report that Qwen 3.6 35b via llama.cpp produces a naked tool call that causes OpenCode to stall in the console. Highlights fragility in handling non-standard tool call formats from local inference engines.

10. **[#19466](https://github.com/anomalyco/opencode/issues/19466) — OpenCode uses ~50% CPU core while idle (rate-limit retry)** (4 comments, 4 👍)
    While waiting on API rate limits, OpenCode spins at ~50% of a single i9-14900 core. A resource efficiency problem that affects users working with quota-limited API keys.

---

## 4. Key PR Progress

1. **[#24395](https://github.com/anomalyco/opencode/pull/24395) — `feat(memory)`: Add agent_memory table and memory-tools plugin**
   Introduces a persistent `agent_memory` table with a companion `memory-tools` plugin, enabling cloud backup/restore of agent memory across sessions. A foundational piece for long-running autonomous workflows.

2. **[#24386](https://github.com/anomalyco/opencode/pull/24386) — `fix(provider)`: Preserve Azure API version**
   Fixes [#13999](https://github.com/anomalyco/opencode/issues/13999) by ensuring `api-version` is appended to Azure Cognitive Services Responses API requests. Unblocks GPT-5.x usage on Azure.

3. **[#24384](https://github.com/anomalyco/opencode/pull/24384) — `fix(provider)`: Respect configured output limit**
   `ProviderTransform.maxOutputTokens()` was capping all model output limits at a 32K fallback. This fix lets users configure higher output limits per model, essential for models supporting larger contexts.

4. **[#24367](https://github.com/anomalyco/opencode/pull/24367) — `fix(zen)`: Stop double-counting reasoning_tokens** *[CLOSED/MERGED]*
   Corrects OpenAI-compatible usage reporting where `completion_tokens` already includes `reasoning_tokens` — Zen was reporting both separately, inflating token counts and cost estimates.

5. **[#24394](https://github.com/anomalyco/opencode/pull/24394) — `feat(httpapi)`: Bridge project git init endpoint**
   Bridges `POST /project/git/init` through the experimental HttpApi path with deferred active-instance reload. Part of the ongoing HttpApi migration effort.

6. **[#24383](https://github.com/anomalyco/opencode/pull/24383) — `fix`: Move session roots filter from client-side to SQL layer**
   Fixes a UX bug where subagent child sessions filled up the `LIMIT 100` query before root sessions in the TUI session dialog. Moving the filter to SQL ensures only root sessions appear in the picker.

7. **[#24382](https://github.com/anomalyco/opencode/pull/24382) — `feat(llm)`: Auto-describe images via vision fallback**
   When the active model lacks vision support (DeepSeek, GLM, Haiku, etc.), this PR automatically routes images through a vision-capable model for description. Removes a common friction point for coding-focused LLMs.

8. **[#17455](https://github.com/anomalyco/opencode/pull/17455) — `feat(rag)`: Add local retrieval pipeline and search tooling**
   A substantial contribution adding a local RAG pipeline with embedding-based retrieval. Enables OpenCode to index and search local codebases without relying on external services.

9. **[#13854](https://github.com/anomalyco/opencode/pull/13854) — `fix(tui)`: Stop streaming markdown after message completes**
   `TextPart` was passing `streaming={true}` unconditionally, causing finished messages to skip the last table row. Now properly derives streaming state from `message.time.completed`.

10. **[#23987](https://github.com/anomalyco/opencode/pull/23987) — `fix(tui)`: Show skills in autocomplete dropdown**
    Skills were functional in the web app but invisible in the TUI autocomplete. This fix surfaces them properly, improving feature parity between interfaces.

---

## 5. Feature Request Trends

- **YOLO/Auto-approve mode** ([#11831](https://github.com/anomalyco/opencode/issues/11831), 20 👍): Overwhelming demand for a trust-based auto-approve mode that respects explicit `deny` rules but skips all interactive prompts. Driven by autonomous/CI workflows.
- **Plugin TUI extensibility** ([#20504](https://github.com/anomalyco/opencode/issues/20504), [#24376](https://github.com/anomalyco/opencode/issues/24376)): Multiple requests for additional TUI plugin slots — one for assistant message metadata (e.g., throughput stats), another for general-purpose UI injection points.
- **Mobile/touch optimization** ([#24346](https://github.com/anomalyco/opencode/issues/24346), [#14657](https://github.com/anomalyco/opencode/issues/14657)): Requests for native mouse wheel scrolling on macOS and multi-window/tabs for the desktop app.
- **IDE context management** ([#24184](https://github.com/anomalyco/opencode/issues/24184)): Better lifecycle handling for editor context — currently stale file references persist after closing files, misleading the LLM.
- **Agent memory & RAG** ([#24395](https://github.com/anomalyco/opencode/pull/24395), [#17455](https://github.com/anomalyco/opencode/pull/17455)): Community is actively building persistent memory and local retrieval infrastructure, signaling strong demand for long-context agent capabilities.

---

## 6. Developer Pain Points

- **DeepSeek V4 `reasoning_content` round-tripping** is the single biggest pain point right now, with at least **4 duplicate issues** ([#24190](https://github.com/anomalyco/opencode/issues/24190), [#24261](https://github.com/anomalyco/opencode/issues/24261), [#24334](https://github.com/anomalyco/opencode/issues/24334), [#24130](https://github.com/anomalyco/opencode/issues/24130)). Multi-turn conversations are completely broken for DeepSeek V4 users.
- **TUI rendering glitches** continue to accumulate: color corruption after editor mode ([#20261](https://github.com/anomalyco/opencode/issues/20261)), raw escape sequences on PuTTY/MobaXterm ([#16819](https://github.com/anomalyco/opencode/issues/16819)), header chip text clipping on Ghostty ([#22417](https://github.com/anomalyco/opencode/issues/22417)), and mouse sequence leaks after exit ([#20458](https://github.com/anomalyco/opencode/issues/20458)). Terminal compatibility remains an ongoing struggle.
- **`/undo` is unreliable** ([#5474](https://github.com/anomalyco/opencode/issues/5474)): Reverting only the conversation without reverting file changes undermines user confidence in the tool's safety guarantees.
- **Windows friction persists**: External directory `deny` not enforced in Git Bash ([#16126](https://github.com/anomalyco/opencode/issues/16126)), random agent freezes ([#24342](https://github.com/anomalyco/opencode/issues/24342)), and subagent subscription errors with GPT-5.5 ([#24292](https://github.com/anomalyco/opencode/issues/24292)).
- **CPU/resource waste during idle** ([#19466](https://github.com/anomalyco/opencode/issues/19466)): 50% core utilization while waiting on rate limits suggests missing backoff/sleep logic in the retry loop.
- **Plugin event bus reliability** ([#14808](https://github.com/anomalyco/opencode/issues/14808)): `session.created` not reaching plugins breaks the extension model for anyone building session-scoped integrations.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-26

Here is the technical digest for the `badlogic/pi-mono` repository based on the last 24 hours of activity.

## 1. Today's Highlights
Pi experienced a high-volume weekend influx of community contributions, bug reports, and feature requests, with maintainers actively triaging issues using the `closed-because-weekend` label. Activity centered heavily on expanding provider support—highlighted by the integration of Together AI, Ark (Volcano Engine), and CrofAI—as well as critical fixes for cross-model reasoning tool calls and OpenAI-compatible streaming payloads. 

## 2. Releases
No new official releases were published in the last 24 hours. The repository remains on the recently tagged `v0.70.2`.

## 3. Hot Issues
1. **Feature Request: Custom Thinking Levels per Model** ([#3208](https://github.com/badlogic/pi-mono/issues/3208))
   The highest-upvoted issue of the day. The author proposes allowing `models.json` to define granular thinking levels via `pi.registerProvider()`, preventing `Shift+Tab` from cycling through unsupported states. The community is highly engaged (9 comments, 8 thumbs up) in discussing the best API design approach.
2. **Bash tool not reading from `settings.json`** ([#3521](https://github.com/badlogic/pi-mono/issues/3521))
   A critical path bug on Windows where the Bash tool fails to find a shell despite `shellPath` being explicitly set. Users are actively sharing workarounds while awaiting a core fix.
3. **Schedule work after the agent settles** ([#2023](https://github.com/badlogic/pi-mono/issues/2023))
   A deep architectural request for a `pi.runWhenIdle()` API. This would allow extensions to safely queue actions (like `/reload-runtime`) only after the primary agent loop has fully settled, avoiding race conditions.
4. **DeepSeek V4 Pro reasoning clamped to `high`** ([#3662](https://github.com/badlogic/pi-mono/issues/3662))
   Users discovered that `xhigh` reasoning effort is being silently downgraded to `high` because `supportsXhigh()` in `models.ts` lacks the specific regex/flag for the new `deepseek-v4-pro` identifier.
5. **Local LLM streams hitting 5-minute timeout** ([#3715](https://github.com/badlogic/pi-mono/issues/3715))
   Long-running tool calls against local OpenAI-compatible backends (like vLLM) crash with `UND_ERR_BODY_TIMEOUT` due to `undici`'s default 5-minute cap, which Pi's `retry.provider.timeoutMs` currently cannot override. 
6. **Anthropic SSE parser crashes on proxy `[DONE]` sentinel** ([#3708](https://github.com/badlogic/pi-mono/issues/3708))
   Connecting to Anthropic through certain proxy endpoints causes a `SyntaxError` because the upstream appends an OpenAI-style `data: [DONE]` terminator after Anthropic's native `message_stop` event, which `parseJsonWithRepair` fails to handle.
7. **Intermittent `spawn EBADF` for tools** ([#3706](https://github.com/badlogic/pi-mono/issues/3706))
   A regression introduced in `v0.70.2` causing intermittent "Bad File Descriptor" errors when executing `bash` or custom tools, forcing some users to rollback to `v0.70.0`.
8. **`/tree` cancellation leaves Pi stuck as compacting** ([#3688](https://github.com/badlogic/pi-mono/issues/3688))
   When an extension cancels `/tree` navigation, Pi fails to clear the `session.isCompacting` state, causing subsequent user inputs to be indefinitely queued as "after compaction" messages.
9. **Compaction exceeds `model.maxTokens`** ([#3722](https://github.com/badlogic/pi-mono/issues/3722))
   The core compaction algorithm calculates `max_tokens` dynamically but fails to clamp it against the specific model's absolute maximum context limit, leading to crashes on models with smaller context windows.
10. **DeepSeek V4 via NVIDIA emits raw DSML** ([#3712](https://github.com/badlogic/pi-mono/issues/3712))
   Tool calls made through NVIDIA's OpenAI-compatible endpoint occasionally leak raw DeepSeek DSML markers (e.g., `<｜DSML｜tool_calls`) into the assistant text stream rather than structured tool calls, breaking the agent loop.

## 4. Key PR Progress
1. **feat(ai): add together provider** ([PR #3624](https://github.com/badlogic/pi-mono/pull/3624))
   Introduces native support for Together AI, automatically sourcing tool-capable models from `models.dev` and configuring default API key handling.
2. **feat(ai): add Ark (Volcano Engine) provider** ([PR #3709](https://github.com/badlogic/pi-mono/pull/3709))
   Implements the Ark provider using the OpenAI-compatible Responses API, bringing native support for Volcano Engine LLMs, including streaming and reasoning capabilities.
3. **fix(coding-agent): clear tree navigation busy state on cancel** ([PR #3690](https://github.com/badlogic/pi-mono/pull/3690))
   Resolves a dead-loop bug where cancelling `/tree` extensions left the agent stuck in an unresolvable compaction queuing state.
4. **fix: preserve thinking blocks for cross-model reasoning** ([PR #3691](https://github.com/badlogic/pi-mono/pull/3691))
   Fixes a context-crushing bug where `transformMessages()` stripped `reasoning_content` when crossing model providers, breaking DeepSeek R1/V4 Pro multi-turn sessions.
5. **fix(bedrock): check `model.name` for prompt caching** ([PR #3527](https://github.com/badlogic/pi-mono/pull/3527))
   Corrects an AWS Bedrock integration flaw where Claude-specific features failed because the system was checking opaque inference profile ARNs instead of the actual model name.
6. **Capture resolved model from OpenAI-compatible streams** ([PR #3696](https://github.com/badlogic/pi-mono/pull/3696))
   Improves routing transparency by capturing the actual model resolved by providers like OpenRouter `auto`, rather than retaining the generic requested model slug.
7. **fix(ai): fall back to placeholder for empty Anthropic `tool_use.id`** ([PR #3664](https://github.com/badlogic/pi-mono/pull/3664))
   Prevents 400 API errors by ensuring `normalizeToolCallId` always generates a valid, non-empty string matching Anthropic's strict regex requirements.
8. **perf(mom): parallelize thread message deletion** ([PR #3714](https://github.com/badlogic/pi-mono/pull/3714))
   Replaces sequential deletion loops with `Promise.allSettled` to drastically reduce network latency when cleaning up threads.
9. **Add built-in update command** ([PR #3680](https://github.com/badlogic/pi-mono/pull/3680))
   Introduces a `pi update` command allowing the CLI to self-update without requiring user intervention via npm/package managers.
10. **chore(models): regenerate `models.generated.ts`** ([PR #3719](https://github.com/badlogic/pi-mono/pull/3719))
   Updates the core model manifest to include support for the newly released `github-copilot/gpt-5.5` endpoint.

## 5. Feature Request Trends
* **Greater Agent Loop Control:** Developers want programmatic control over the agent's execution state. This is evident in requests for `pi.runWhenIdle()` ([#2023](https://github.com/badlogic/pi-mono/issues/2023)), a `/retry` command for API limit errors ([#3684](https://github.com/badlogic/pi-mono/issues/3684)), resuming the agentic loop without sending a "message" ([#3721](https://github.com/badlogic/pi-mono/issues/3721)), and specifying exit codes for `ctx.shutdown` ([#3726](https://github.com/badlogic/pi-mono/issues/3726)).
* **Customization of Reasoning & Models:** Users are frequently requesting the ability to fine-tune reasoning efforts on the fly. The top issue of the day asks for custom thinking levels per model ([#3208](https://github.com/badlogic/pi-mono/issues/3208)), while another requests a toggle to prevent `/model` commands from permanently overwriting `settings.json` ([#3254](https://github.com/badlogic/pi-mono/issues/3254)).

## 6. Developer Pain Points
* **Proxy and Gateway Compatibility:** A massive pain point is running Pi behind custom network gateways. Users are reporting SSL mismatches ([#3683](https://github.com/badlogic/pi-mono/issues/3683)), NTLM authentication failures ([#3713](https://github.com/badlogic/pi-mono/issues/3713)), and SSE parsing crashes caused by proxy-injected payloads ([#3708](https://github.com/badlogic/pi-mono/issues/3708)).
* **Weekend Triage Friction:** The community feels friction regarding issue lifecycle management. Several users and contributors were confused by the `closed-because-weekend` automation, prompting a documentation update via [PR #3725](https://github.com/badlogic/pi-mono/pull/3725) to clarify the maintainer gatekeeping and triage policies.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-26

## 1. Today's Highlights
It was a highly active day in the Qwen Code community with 20 new or updated Pull Requests focusing heavily on OpenAI API compatibility, CLI UX improvements, and LSP/Skill infrastructure. While no new official releases were cut, maintainers and contributors pushed significant fixes for strict OpenAI provider compliance, VS Code companion slash commands, and a new conversation rewind feature. High-priority bugs regarding performance slowdowns, MCP connection limits, and proxy misconfigurations remain central discussion points among users.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
Here are the 10 most noteworthy issues driving community discussion today:

1. **[#311](https://github.com/QwenLM/qwen-code/issues/311) qwen code is working slowly:** A highly upvoted (👍 5) performance issue. Users report that compared to its base inspiration (Gemini CLI), Qwen Code suffers from noticeable latency across multiple machines, making it a primary target for optimization.
2. **[#3277](https://github.com/QwenLM/qwen-code/issues/3277) MCP Client Limited to 2 Connections:** A critical, production-blocking bug. Users scaling multi-node infrastructure are hitting an artificial 2-connection limit on MCP clients, resulting in potential data loss.
3. **[#643](https://github.com/QwenLM/qwen-code/issues/643) Xcode cannot use qwen3-coder-plus:** A high-priority bug causing Xcode integrations to fail with the error `[] is too short - 'tools'`, blocking Apple ecosystem developers.
4. **[#528](https://github.com/QwenLM/qwen-code/issues/528) Parameter "todos" must be an array:** Users self-hosting `Qwen3-coder-flash` via vLLM are encountering API parameter errors, highlighting friction in local deployment setups.
5. **[#384](https://github.com/QwenLM/qwen-code/issues/384) Tool names are not allowed to be [search]:** A P1 API error (`400 InternalError.Algo.InvalidParameter`) occurring even without custom tools defined, suggesting a backend parameter-handling glitch.
6. **[#1281](https://github.com/QwenLM/qwen-code/issues/1281) Ollama returns JSON-format responses:** When deployed via Ollama, the model sometimes returns raw JSON instead of parsed actions, breaking the CLI execution flow.
7. **[#224](https://github.com/QwenLM/qwen-code/issues/224) GPT-5 'temperature' parameter unsupported:** Users trying to route traffic to OpenAI's GPT-5 are failing because Qwen Code defaults to passing `temperature: 0`.
8. **[#3579](https://github.com/QwenLM/qwen-code/issues/3579) DeepSeek API 400 error:** A reopened bug highlighting a conflict in how the client strips `reasoning_content` when switching between different AI providers.
9. **[#3464](https://github.com/QwenLM/qwen-code/issues/3464) Severe degradation with third-party models:** Users report that while native Qwen models work well, third-party models like GLM-5 experience severe capability degradation and tool-call failures.
10. **[#568](https://github.com/QwenLM/qwen-code/issues/568) IDE module didn't start:** Users are experiencing disconnection failures when trying to activate the companion extension in VS Code.

## 4. Key PR Progress
Contributors submitted several impactful Pull Requests today focusing on robustness and developer experience:

1. **[#3617](https://github.com/QwenLM/qwen-code/pull/3617) Split tool-result media for strict OpenAI compat:** Fixes a major compliance issue where images/media in tool results crashed strict OpenAI-compatible servers. Media is now correctly split into a follow-up user message.
2. **[#3620](https://github.com/QwenLM/qwen-code/pull/3620) Use string content for single-text messages:** Fixes a crash with specific backends (like sglang's deepseek-v4 template) by ensuring single-text messages are formatted as strings, not arrays.
3. **[#3318](https://github.com/QwenLM/qwen-code/pull/3318) Add API preconnect to reduce first-call latency:** Tackles the widespread performance complaints (e.g., Issue #311) by firing a fire-and-forget HEAD request at startup to warm TCP+TLS, saving 100-200ms.
4. **[#3441](https://github.com/QwenLM/qwen-code/pull/3441) Add conversation rewind feature:** Introduces a much-requested `/rewind` command and double-ESC UI to allow users to roll back conversation history.
5. **[#820](https://github.com/QwenLM/qwen-code/pull/820) Correctly handle proxy environment variables:** Fixes a critical bug where `NO_PROXY` was ignored, preventing corporate users behind proxies from connecting to internal LLM servers.
6. **[#3604](https://github.com/QwenLM/qwen-code/pull/3604) Parallelize skill loading + path-conditional activation:** Replaces nested `for-await` loops with `Promise.all` to speed up cold-boot skill loading significantly.
7. **[#3507](https://github.com/QwenLM/qwen-code/pull/3507) Add sticky todo panel to CLI:** Introduces a persistent UI panel for task tracking so users don't have to scroll back through outputs to check progress.
8. **[#3624](https://github.com/QwenLM/qwen-code/pull/3624) & [#3623](https://github.com/QwenLM/qwen-code/pull/3623) Auth flow improvements:** Two PRs by `doudouOUC` that add missing API Key options to the interactive auth menu and correctly distinguish between standard OpenAI and Alibaba Cloud Coding Plans.
9. **[#3598](https://github.com/QwenLM/qwen-code/pull/3598) Add `--json-schema` for structured output:** Enables headless CLI users to enforce structured JSON outputs via a schema file, crucial for CI/CD and scripting pipelines.
10. **[#3615](https://github.com/QwenLM/qwen-code/pull/3615) Fix LSP documentation and tool invocation:** Cleans up stale LSP documentation and tweaks prompts to significantly increase the model's likelihood of successfully calling LSP tools.

## 5. Feature Request Trends
Analyzing the open issues reveals three distinct trends in what the community is asking for:
*   **Advanced MCP Management:** Users are outgrowing basic single-server MCP setups and are requesting branching and higher connection limits for complex, multi-node production environments (Issue #2466, #3277).
*   **Deeper IDE Integration:** There is a strong desire for native-feeling IDE integrations. Users want seamless diff management, visible "Accept/Close Diff" commands natively in VS Code, and better companion extension stability (Issue #1105, #568).
*   **Session State & History Management:** Developers are asking for better ways to manage conversational context. Requests include persistent named sessions, better handling of `/init` context updates without losing history, and robust rollback/rewind mechanisms (Issue #1316, PR #3190, PR #3441).

## 6. Developer Pain Points
*   **Cross-Provider API Fragility:** The biggest frustration is the inconsistency when using non-Qwen endpoints. Switching to OpenAI, DeepSeek, Ollama, or local vLLM frequently results in `400 Bad Request` errors due to rigid parameter handling (e.g., `temperature`, `todos` array formatting, and `reasoning_content` stripping).
*   **Performance & UI Freezes:** Beyond API latency, developers report high memory usage (7GB+), UI freezing, and severe input lag, especially when handling large files (1800+ lines of code) or running within certain terminal emulators like Wrap.
*   **Local Deployment Friction:** Setting up local models via Ollama often results in broken tool calls or unparsed JSON responses, indicating a gap in how the client handles non-cloud model endpoints.

</details>