# AI CLI Tools Community Digest 2026-04-24

> Generated: 2026-04-24 01:09 UTC | Tools covered: 8

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

## Cross-Tool Comparison: AI CLI Ecosystem Digest (2026-04-24)

### 1. Ecosystem Overview
The AI CLI tool ecosystem is experiencing a rapid transition from simple text-based chat interfaces to sophisticated, autonomous agent platforms capable of complex software engineering tasks. Tools are converging on core agentic primitives—such as subagent orchestration, persistent memory, and Model Context Protocol (MCP) integrations—while competing on model support, enterprise readiness, and system-level reliability. Underneath this rapid feature expansion, however, lies a shared set of growing pains: developers are increasingly frustrated by token consumption opacity, platform-specific instabilities (especially on Windows), and brittle terminal rendering. 

### 2. Activity Comparison
Activity varies significantly, with open-source and newer entrants showing high iteration speeds, while enterprise tools face scale-related support bottlenecks.

| Tool | Maintainer | New/Updated Issues | New/Updated PRs | Release Status (Last 24h) |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | Anthropic | 10+ | 10 | **v2.1.119** (Stable) |
| **OpenAI Codex** | OpenAI | 10+ | 10+ | **v0.124.0** (Stable) |
| **Gemini CLI** | Google | 10 | 10 | **v0.39.0** (Stable), **v0.40.0-preview.2** |
| **GitHub Copilot CLI**| GitHub | 10 | 1 | **v1.0.35** (Stable) |
| **Kimi Code CLI** | Moonshot AI | 10 | 10 | *No new release* |
| **OpenCode** | Anomaly Co | 10 | 10 | **v1.14.21 & v1.14.22** (Patches) |
| **Pi** | badlogic | 10 | 10 | **v0.70.0** (Stable) |
| **Qwen Code** | QwenLM | 10 | 10 | **v0.15.1** (Stable) |

### 3. Shared Feature Directions
Despite different underlying models, the developer community is driving CLI tooling toward a unified set of requirements:

*   **Advanced Agentic Observability & Control:** Across the board, users want to know what subagents are doing. OpenCode (#23785), Kimi (#2041), and Qwen (#3471) are actively adding subagent status indicators and live transcripts.
*   **Yolo/Autopilot Mode Refinements:** Unattended execution is a major focus. Gemini is preventing accidental downgrades of "YOLO mode", Kimi is splitting `yolo` and `afk` modes (#2045), and Copilot users want granular auto-approve whitelisting (#2921).
*   **First-Class Multi-Provider & Local LLM Support:** Users demand the ability to easily swap models. OpenAI Codex added native Amazon Bedrock support, while OpenCode, Pi, and Qwen communities are actively pushing for local VLLM/llama.cpp integrations and OpenAI-compatible provider fallbacks.
*   **MCP (Model Context Protocol) Stability:** Integration with external tools remains brittle. Claude Code users are blocked by OAuth limitations and proxy 502s, Gemini fixed an MCP server stderr deadlock (#25893), and Kimi had to patch strict JSON schemas to maintain MCP compatibility.
*   **Persistent Memory & Session Continuity:** Claude users want cross-platform history, OpenCode is battling memory leaks to preserve session state, and Gemini is implementing global vs. project-scoped memory routing.

### 4. Differentiation Analysis
*   **OpenAI Codex & GitHub Copilot:** Focused heavily on enterprise and IDE integration. Codex is building complex infrastructure for background agents/identity (HAI reintroduction), while Copilot is refining TUI features (tab completion, session management). However, both suffer from closed-eccosystem friction, such as Copilot's model parity gap versus VS Code and Codex's sandbox permission confusion.
*   **Claude Code:** Deeply focused on complex engineering workflows and enterprise configurability (e.g., custom `prUrlTemplate`). However, it is currently facing severe community backlash regarding Opus 4.7's token consumption, opaque usage limits, and the silent sunsetting of beloved features like the `/buddy` pair-programming mode.
*   **Gemini CLI:** Differentiated by its focus on deep terminal UX (e.g., bundled ripgrep for offline support, LaTeX rendering) and cognitive architecture (AST-aware mapping, auto-memory scratchpads).
*   **Kimi, Qwen, and OpenCode:** Moving much faster in open, modular architectures. Qwen and OpenCode are highly responsive to the newest model drops (rapid support for GPT-5.5 and Kimi K2.6). Kimi is focused on tight editor integration (Zed, JetBrains) and specialized sandboxes (E2B), though it suffers from strict proprietary API schemas.

### 5. Community Momentum & Maturity
*   **Rapid Iterators (OpenCode, Qwen, Pi, Kimi):** These tools show high PR velocity and rapid patch cycles (e.g., OpenCode's double-patch release, Qwen's immediate loop-patches). Their communities are highly engaged in bug-fixing but face scaling and stability issues (e.g., Qwen's React UI loops, OpenCode's memory leaks).
*   **Enterprise Titans (Claude Code, OpenAI Codex):** High issue volume but slower response to community grievances. Claude Code has massive, consolidated megathreads regarding model regressions, while Codex struggles with platform-wide testing (frequent startup blockers and Windows binary missing). 
*   **Stable Evolvers (Gemini CLI, Copilot CLI):** Gemini shows a methodical approach to agentic reliability (e.g., availability-aware routing). Copilot has lower PR visibility but steadily pushes pragmatic UX fixes, even as its community pushes back on rate-limiting constraints.

### 6. Trend Signals
*   **Token Cost Shock is Real:** As models scale to Opus 4.7 and GPT-5.5, context window and auto-compact behaviors are draining quotas faster than users can track. Transparent, real-time token auditing and accurate `/context` reporting will soon be a mandatory feature, not a luxury. 
*   **Windows is a Second-Class Citizen:** Almost every tool reported severe Windows-specific bugs today—be it missing binaries (Codex), EISDIR crashes (Gemini), AV false positives (OpenCode), or TTY hangs (Kimi). Teams prioritizing cross-platform reliability will win a massive, underserved market.
*   **Standardization is Required for Agent Scaling:** Developers want programmable control via Python SDKs (Qwen), standardized JSON schemas for tools (MCP friction), and granular sandboxing. The era of monolithic, unobserved AI agents is ending in favor of controllable, observable agent loops.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-04-24 | Source: [github.com/anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

The followingPull Requests represent the most-discussed and closely watched community submissions in the repository.

| Rank | Skill | Author | Status |
|:---:|---|---|:---:|
| 1 | **Document Typography** | [PGTBoos](https://github.com/PGTBoos) | 🟢 Open |
| 2 | **Skill Quality & Security Analyzers** | [eovidiu](https://github.com/eovisiu) | 🟢 Open |
| 3 | **Frontend Design Improvements** | [justinwetch](https://github.com/justinwetch) | 🟢 Open |
| 4 | **ODT (OpenDocument) Support** | [GitHubNewbie0](https://github.com/GitHubNewbie0) | 🟢 Open |
| 5 | **Skill Creator YAML Fix** | [Lubrsy706](https://github.com/Lubrsy706) | 🟢 Open |
| 6 | **DOCX Tracked Changes Fix** | [Lubrsy706](https://github.com/Lubrsy706) | 🟢 Open |
| 7 | **Testing Patterns** | [4444J99](https://github.com/4444J99) | 🟢 Open |
| 8 | **ServiceNow Platform** | [Vanka07](https://github.com/Vanka07) | 🟢 Open |

**Detailed Breakdown:**

1. **[#514 — Document Typography Skill](https://github.com/anthropics/skills/pull/514)**
   A quality-control skill that prevents orphaned word wraps, widow paragraphs, and numbering misalignments in AI-generated documents. Fills a universal pain point since typographic issues affect virtually every document Claude generates. Status: **Open**.

2. **[#83 — Skill Quality & Security Analyzers](https://github.com/anthropics/skills/pull/83)**
   Proposes two meta-skills for the marketplace: `skill-quality-analyzer` (evaluates structure, documentation, and best practices) and `skill-security-analyzer` (identifies vulnerabilities in skill definitions). A key submission for ecosystem maturity. Status: **Open** since Nov 2025.

3. **[#210 — Frontend Design Skill Clarity](https://github.com/anthropics/skills/pull/210)**
   Revises the existing `frontend-design` skill for improved actionability and internal coherence. Ensures every instruction is actionable within a single conversation turn. Status: **Open**.

4. **[#486 — ODT OpenDocument Skill](https://github.com/anthropics/skills/pull/486)**
   Adds comprehensive OpenDocument Format (`.odt`, `.ods`) creation, template filling, parsing, and HTML conversion. Addresses the open-source/ISO standard document gap. Actively updated through mid-April. Status: **Open**.

5. **[#539 — Skill Creator YAML Validation Fix](https://github.com/anthropics/skills/pull/539)**
   Adds pre-parse validation in `quick_validate.py` to detect unquoted YAML `description` fields containing special characters (`:`). Prevents silent parsing failures. A critical developer-experience fix. Status: **Open**.

6. **[#541 — DOCX w:id Collision Fix](https://github.com/anthropics/skills/pull/541)**
   Resolves document corruption when the DOCX skill adds tracked changes to documents with existing bookmarks, caused by shared `w:id` namespace collisions in OOXML. Status: **Open**.

7. **[#723 — Testing Patterns Skill](https://github.com/anthropics/skills/pull/723)**
   Comprehensive testing skill covering the Testing Trophy model, unit testing (AAA pattern), React component testing, integration testing, and E2E patterns. Recently updated. Status: **Open**.

8. **[#568 — ServiceNow Platform Skill](https://github.com/anthropics/skills/pull/568)**
   A broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, Vulnerability Response, and IntegrationHub. Represents the growing enterprise-platform demand. Status: **Open**.

---

## 2. Community Demand Trends

Analysis of the most-commented Issues reveals five clear demand vectors:

| Trend | Representative Issue | Signal |
|---|---|---|
| **Org-wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (9 comments, 👍5) | Organizations want shared skill libraries instead of manual file transfers |
| **Robust Evaluation Tooling** | [#556](https://github.com/anthropics/skills/issues/556) (6 comments, 👍6) | `run_eval.py` has a 0% trigger rate—skill evaluation is broken |
| **Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (4 comments, 👍2) | Community skills under `anthropic/` namespace enable impersonation |
| **Deduplication & Governance** | [#189](https://github.com/anthropics/skills/issues/189) (5 comments, 👍7) | Identical skills across plugin packs waste context window tokens |
| **MCP Integration** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments) | Community wants Skills exposed as Model Context Protocol servers |
| **Agent Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) (4 comments) | Demand for policy enforcement, threat detection, and audit trails |
| **Enterprise Auth Compatibility** | [#532](https://github.com/anthropics/skills/issues/532) (2 comments) | SSO/enterprise users locked out of skill-creator tooling that requires `ANTHROPIC_API_KEY` |

**Key takeaway:** The community is transitioning from "build new skills" to "govern, share, and validate skills at scale."

---

## 3. High-Potential Pending Skills

These actively-maintained PRs have strong momentum and are likely candidates for merging:

| PR | Skill | Why It's Promising | Link |
|---|---|---|---|
| **#539** | YAML Validation Fix | Solves a universal skill-creator pain point; narrow scope, low merge risk | [PR #539](https://github.com/anthropics/skills/pull/539) |
| **#541** | DOCX Collision Fix | Critical data-loss bug; well-diagnosed root cause | [PR #541](https://github.com/anthropics/skills/pull/541) |
| **#538** | PDF Case-Sensitivity Fix | Simple 8-line fix; breaks on Linux CI | [PR #538](https://github.com/anthropics/skills/pull/538) |
| **#486** | ODT Support | Fills a major format gap; actively updated through April | [PR #486](https://github.com/anthropics/skills/pull/486) |
| **#666** | Remove Duplicate Skill Creator | Cleanup PR; strictly improves repo hygiene | [PR #666](https://github.com/anthropics/skills/pull/666) |
| **#509** | CONTRIBUTING.md | Addresses the repo's 25% community health score | [PR #509](https://github.com/anthropics/skills/pull/509) |
| **#997** | Xiaomi Robot Vacuum (xiao) | Novel IoT/agent integration; CLI-first design | [PR #997](https://github.com/anthropics/skills/pull/997) |
| **#806** | macOS AppleScript Automation | Enables native OS automation without screenshots | [PR #806](https://github.com/anthropics/skills/pull/806) |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade skill lifecycle management—reliable evaluation tooling, namespace-based trust boundaries, and organization-level sharing—signaling that Claude Code Skills are maturing from individual productivity aids into governed team infrastructure.**

---

# Claude Code Community Digest — 2026-04-24

---

## 1. Today's Highlights

Claude Code v2.1.119 landed with persistent `/config` settings and a new `prUrlTemplate` for custom code-review URLs, marking a continued push toward enterprise configurability. The community remains focused on two dominant themes: persistent frustration over **Opus 4.7 token consumption and performance regressions**, and a still-simmering outcry over the **removal of the `/buddy` skill** (now at 935 👍). Meanwhile, contributor **sakal-s** submitted a flurry of open-source tooling fixes, signaling healthy external maintenance momentum.

---

## 2. Releases

### [v2.1.119](https://github.com/anthropics/claude-code/releases/tag/v2.1.119)

- **Persistent `/config` settings** — Theme, editor mode, verbose, and other toggles now save to `~/.claude/settings.json` and participate in the full project/local/policy override precedence chain. This is a quality-of-life win for developers who previously had to re-set preferences every session.
- **`prUrlTemplate` setting** — Allows redirecting the footer PR badge to a custom code-review platform (e.g., Gerrit, Phabricator) instead of always pointing at GitHub. Useful for enterprises with non-GitHub review workflows.
- Truncated changelog note (`Added CLA…`) suggests additional changes not fully visible in the data.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| 1 | [#42796](https://github.com/anthropics/claude-code/issues/42796) — **Model unusable for complex engineering tasks (Feb updates)** | The single most-engaged issue in the tracker. Reports of degraded reasoning, shorter outputs, and broken multi-file workflows since February model updates. | **2,077 👍 / 583 comments** — flagship community grievance, still referenced in new issues daily. |
| 2 | [#45596](https://github.com/anthropics/claude-code/issues/45596) — **Bring Back Buddy** | `/buddy` was silently removed in v2.1.97 with no deprecation notice. It was a widely-used companion feature for pair-programming workflows. | **935 👍 / 216 comments** — consolidated plea with strong emotional attachment; marked as `duplicate` but continues attracting support. |
| 3 | [#41930](https://github.com/anthropics/claude-code/issues/41930) — **Abnormal usage limit drain across all paid tiers** | Multiple root causes identified for faster-than-expected token consumption since March 23. No formal Anthropic communication. | **85 👍 / 108 comments** — trust-eroding lack of transparency; cross-tiers affected. |
| 4 | [#52596](https://github.com/anthropics/claude-code/issues/52596) — **Incorrect token estimates for Opus 4.7 (200K)** | `/context` shows 1M-token "Free space" when the 200K Opus 4.7 variant is selected, making budget planning impossible. | 4 comments; directly impacts cost management. |
| 5 | [#52519](https://github.com/anthropics/claude-code/issues/52519) — **Auto-compact threshold change not documented** | v2.1.117 raised Opus 4.7 auto-compact from ~200K to ~1M tokens, dramatically increasing per-session consumption without changelog clarity. | Users feel sandbagged by stealth cost changes. |
| 6 | [#52612](https://github.com/anthropics/claude-code/issues/52612) — **Usage jumped 75%→100% with no prompts running** | Passive usage drain observed on v2.1.119; user was idle and still hit their cap. | 2 comments; potential background process or metering bug. |
| 7 | [#52645](https://github.com/anthropics/claude-code/issues/52645) — **Opus 4.7 regression vs 4.6** | Reports of increased guessing, reduced rule compliance, and "wild swings" making Opus 4.7 non-functional for some harnesses. | Reinforces the broader model regression narrative. |
| 8 | [#52638](https://github.com/anthropics/claude-code/issues/52638) — **OAuth MCP servers fail without dynamic client registration** | Slack MCP and others require static client registration; Claude Code only supports RFC 7591 dynamic registration. | Blocks enterprise MCP adoption for services like Slack. |
| 9 | [#48277](https://github.com/anthropics/claude-code/issues/48277) — **Sustained 502 from Gmail MCP proxy** | `mcp-proxy.anthropic.com` returning Cloudflare 502s for 2+ hours, affecting the hosted Gmail integration. | 5 comments; ongoing reliability concern for hosted MCP. |
| 10 | [#24057](https://github.com/anthropics/claude-code/issues/24057) — **MCP/Hooks/Plugins should auto-reload** | Config changes force full session restart, losing context. Compared to "rebooting Windows 95." | **8 👍 / 24 comments** — high-friction developer experience that compounds with other context-loss issues. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| 1 | [#47676](https://github.com/anthropics/claude-code/pull/47676) | **Fix YAML parsing in hookify/plugin-dev agents** — Quotes colon-containing `description:` fields that strict YAML parsers rejected. | Closed (merged) |
| 2 | [#47674](https://github.com/anthropics/claude-code/pull/47674) | **Fix devcontainer theme typo** — Corrects "powerline10k" → "powerlevel10k" in Dockerfile comment. | Closed (merged) |
| 3 | [#47673](https://github.com/anthropics/claude-code/pull/47673) | **Add missing plugin.json manifest** — `plugin-dev` was the only plugin without a manifest, breaking marketplace discovery. | Closed (merged) |
| 4 | [#26328](https://github.com/anthropics/claude-code/pull/26328) | **Session Manager plugin** — Adds `/session-manager:delete`, `/session-manager:list`, and `/session-manager:clean` commands for session lifecycle management. Addresses a top-requested gap. | Closed |
| 5 | [#52239](https://github.com/anthropics/claude-code/pull/52239) | **Fix 404 $schema URL** — Redirects marketplace schema from a non-existent `anthropic.com` URL to SchemaStore.org. | Closed (merged) |
| 6 | [#52418](https://github.com/anthropics/claude-code/pull/52418) | **Prevent heredoc injection in ralph loop** — Splits state-file writes so prompts are handled with `printf` (verbatim) instead of unquoted heredoc (expandable). | Open |
| 7 | [#52417](https://github.com/anthropics/claude-code/pull/52417) | **Add explicit sort to auto-close-duplicates query** — Fixes GitHub API returning newest-first, which wasted API calls filtering for 3-day-old issues. | Open |
| 8 | [#52416](https://github.com/anthropics/claude-code/pull/52416) | **Escape regex metacharacters in frontmatter fields** — Prevents `.` in field names like `my.setting` from matching arbitrary characters. | Open |
| 9 | [#52415](https://github.com/anthropics/claude-code/pull/52415) | **Normalize whitespace in completion promise** — Aligns stored vs. extracted promise text comparison to avoid false negatives from consecutive spaces. | Open |
| 10 | [#41518](https://github.com/anthropics/claude-code/pull/41518) | **Fully open-source Claude Code** — Extracts 1,906 TypeScript sources from the npm package's source map, adds Bun bundler config. Builds and runs `--version`/`--help`. | Open (ambitious community initiative) |

---

## 5. Feature Request Trends

1. **Model transparency and cost controls** — The dominant request pattern. Users want real-time, accurate token counts per action; clear documentation of threshold/compact changes; and tools to audit *why* a session consumed X tokens. Issues like [#52519](https://github.com/anthropics/claude-code/issues/52519) and [#52612](https://github.com/anthropics/claude-code/issues/52612) exemplify this.

2. **Cross-platform session/memory continuity** — Sharing conversation history between `claude.ai` and Claude Code ([#52641](https://github.com/anthropics/claude-code/issues/52641)), and persistent memory across sessions, remain top asks.

3. **Hot-reload for MCP/Hooks/Plugins** — Zero-downtime config changes ([#24057](https://github.com/anthropics/claude-code/issues/24057)) is widely supported; the current restart-every-time flow is the #1 infrastructure UX complaint.

4. **Ephemeral hook context** — Transient hook output that doesn't bloat the context window ([#45849](https://github.com/anthropics/claude-code/issues/45849)), critical for long-running memory-injection hooks.

5. **Enterprise OAuth flexibility for MCP** — Static client registration support ([#52638](https://github.com/anthropics/claude-code/issues/52638)) to connect to services like Slack MCP that don't implement RFC 7591.

6. **IDE polish** — Hiding extended thinking blocks in VS Code ([#52640](https://github.com/anthropics/claude-code/issues/52640)) and propagating session names to terminal titles ([#44281](https://github.com/anthropics/claude-code/issues/44281), [#52639](https://github.com/anthropics/claude-code/issues/52639)).

---

## 6. Developer Pain Points

- **Opus 4.7 cost shock** — The combination of a raised auto-compact threshold, potentially incorrect `/context` displays, and higher per-prompt token consumption is exhausting weekly limits far faster than 4.6. Multiple independent reports ([#52153](https://github.com/anthropics/claude-code/issues/52153), [#52612](https://github.com/anthropics/claude-code/issues/52612), [#44197](https://github.com/anthropics/claude-code/issues/44197), [#52645](https://github.com/anthropics/claude-code/issues/52645)) suggest a systemic metering or efficiency problem rather than isolated incidents.

- **Silent regressions and undocumented changes** — Users consistently flag that model behavior, compact thresholds, and feature removals (`/buddy`) ship without changelog entries or migration guidance. This erodes trust, especially for teams relying on Claude Code in production CI/CD pipelines.

- **Usage limits feel opaque and unpredictable** — Several issues ([#52472](https://github.com/anthropics/claude-code/issues/52472), [#52612](https://github.com/anthropics/claude-code/issues/52612)) report limits resetting early or draining passively, with no diagnostic tools to audit consumption. The absence of an Anthropic response on the broad "abnormal drain" meta-issue ([#41930](https://github.com/anthropics/claude-code/issues/41930)) is a recurring frustration.

- **Context loss on config changes** — Every MCP/Hook/Plugin tweak requires a full restart, destroying accumulated session context. This is especially painful during multi-hour debugging sessions where config iteration is frequent.

- **Hosted MCP reliability** — The Gmail MCP proxy's sustained 502 errors ([#48277](https://github.com/anthropics/claude-code/issues/48277)) and missing OAuth write scopes ([#47383](https://github.com/anthropics/claude-code/issues/47383)) undermine confidence in Anthropic's hosted MCP infrastructure as a production-ready layer.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-24

## 1. Today's Highlights
OpenAI shipped **Codex v0.124.0**, bringing quick reasoning controls (`Alt+,` / `Alt+.`) to the TUI and multi-environment support to app-server sessions. On the infrastructure side, a massive "HAI reintroduction" PR stack landed to add background agent task auth and AgentIdentity JWT login, signaling a major push toward autonomous, programmable agents. Meanwhile, the community flagged a cluster of v0.124.0 regressions—missing platform binaries on Windows/Linux and sandbox permission quirks—that are likely to see hotfixes soon.

## 2. Releases

### rust-v0.124.0
- **TUI quick reasoning controls**: `Alt+,` lowers reasoning, `Alt+.` raises it; accepted model upgrades now reset reasoning to the new model's default instead of carrying over stale settings. ([#18866](https://github.com/openai/codex/issues/18866), [#19085](https://github.com/openai/codex/issues/19085))
- **Multi-environment app-server sessions**: app-server sessions can now manage multiple environments (detail truncated, but a significant architectural expansion).

### rust-v0.123.0
- **Built-in Amazon Bedrock provider** with configurable AWS profile support ([#18744](https://github.com/openai/codex/issues/18744)).
- **`/mcp verbose` command** for full MCP server diagnostics, resources, and resource templates while keeping plain `/mcp` fast ([#18610](https://github.com/openai/codex/issues/18610)).
- Plugin MCP loading now accepts both `mcpServers` formats.

### Alpha pre-releases
- `0.124.0-alpha.1` / `alpha.2` / `alpha.3` — incremental preview builds leading to the stable v0.124.0.

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#10450 — Remote Development in Codex Desktop App](https://github.com/openai/codex/issues/10450) | 156 comments, 595 👍. The top-voted feature request: users want to connect the Desktop App to remote dev environments (SSH containers, remote VMs) like VS Code Remote. |
| 2 | [#16231 — High CPU usage on macOS after VS Code extension update](https://github.com/openai/codex/issues/16231) | 47 comments. A regression in extension 26.325.31654 causing sustained high CPU & heat on Apple Silicon M5 Pro (macOS Tahoe 26.4). Actively impacting daily workflows. |
| 3 | [#11023 — Linux Desktop App request](https://github.com/openai/codex/issues/11023) | 59 👍. Strong demand for a native Linux build; currently the app is macOS-only. |
| 4 | [#19196 — 'Full Access' permissions still sandbox network calls](https://github.com/openai/codex/issues/19196) | Users granting "Full Access" expect no sandbox, yet network calls are still blocked on v0.124.0. Core trust/permissions issue. |
| 5 | [#18341 — Persistent blurred overlay on Intel Mac](https://github.com/openai/codex/issues/18341) | 12 comments. Intel Macs (macOS 15.0.1) show a translucent UI layer below the composer, making the App unusable for a notable user segment. |
| 6 | [#19243 — Missing `@openai/codex-win32-x64` on Windows v0.124](https://github.com/openai/codex/issues/19243) | v0.124.0 fails to start on Windows due to a missing optional native dependency — a day-one blocking regression. |
| 7 | [#19204 — Flagged while already being verified](https://github.com/openai/codex/issues/19204) | Safety-check UX regression: users are re-flagged even after approving an action, eroding trust in the verification flow. |
| 8 | [#17390 — Unable to use after update (Windows CLI)](https://github.com/openai/codex/issues/17390) | CLI 0.119.0 broke on Windows (PowerShell), was closed but reflects a pattern of Windows platform fragility. |
| 9 | [#19199 — v0.124.0 fails to start with hook config present](https://github.com/openai/codex/issues/19199) | 2 comments. A config parsing regression (`invalid type: map, expected a sequence in 'hooks'`) blocks users with `codex_hooks` enabled. Closed, likely fixed in-tree. |
| 10 | [#19220 — macOS startup failure: unsupported feature `workspace_dependencies`](https://github.com/openai/codex/issues/19220) | v26.422.20832 fails to launch entirely after an update, showing an unsupported feature enablement error. High-severity startup blocker. |

## 4. Key PR Progress

| # | PR | Summary |
|---|----|---------|
| 1 | [#18950 — feat: let model providers own model discovery](https://github.com/openai/codex/pull/18950) | Refactors `codex-models-manager` so providers handle their own `/models` requests and auth, making it easier to add new backends (Bedrock, Azure, etc.). |
| 2 | [#19246 — Increase app-server WebSocket outbound buffer](https://github.com/openai/codex/pull/19246) | Fixes #18203 by increasing the outbound writer queue for remote TUI clients, preventing dropped notifications during bursts. |
| 3 | [#19247 — chore: apply truncation policy to `unified_exec`](https://github.com/openai/codex/pull/19247) | Ensures `truncation_policy` is respected for `unified_exec` and `write_stdin`, preventing untruncated output from leaking into stored state. |
| 4 | [#19244 — Update unix socket transport to use WebSocket upgrade](https://github.com/openai/codex/pull/19244) | Unix socket app-server connections now perform a standard HTTP WebSocket upgrade, aligning local and remote transports. |
| 5 | [#19231 — permissions: make profiles represent enforcement](https://github.com/openai/codex/pull/19231) | Overhauls `PermissionProfile` to distinguish Codex-managed sandboxing, disabled sandbox, and external sandbox — directly addresses #19196-type confusion. |
| 6 | [#19048 — feat: expose AWS account state from `account/read`](https://github.com/openai/codex/pull/19048) | Lets app clients distinguish AWS auth from other providers, completing the Bedrock UX. |
| 7 | [#19240 — fix: allow AgentIdentity through Apps MCP gates](https://github.com/openai/codex/pull/19240) | Extends MCP refresh paths to accept AgentIdentity JWT auth, not just ChatGPT tokens — key for programmatic agent access. |
| 8 | [#19054 / #19051 / #19049 / #19047 — HAI reintroduction stack](https://github.com/openai/codex/pull/19054) | A 4-PR stack adding background agent task primitives, ChatGPT runtime registration, AgentIdentity JWT login, and inference auth — the foundation for autonomous background agents. |
| 9 | [#18897 — Add sticky environment API and thread state](https://github.com/openai/codex/pull/18897) | Introduces sticky environment selections persisted across thread/turn boundaries in app-server v2, improving session continuity. |
| 10 | [#19218 — CLI: add macOS seatbelt debug flags](https://github.com/openai/codex/pull/19218) | Adds `--allow-mach-service`, `--allow-appleevent-destination`, and `--allow-lsopen` for finer-grained sandbox debugging on macOS. |

## 5. Feature Request Trends

1. **Remote & Linux support**: [#10450](https://github.com/openai/codex/issues/10450) (remote dev) and [#11023](https://github.com/openai/codex/issues/11023) (Linux app) remain the #1 and #2 most-upvoted requests. Users increasingly work in cloud/WSL environments and need the Desktop App to reach those workspaces.
2. **Finer-grained permissions & sandbox control**: Multiple issues (#19196, #19190, #19210) reveal users want clearer sandbox semantics — "Full Access" should mean full access, and sandbox escapes should request escalation rather than silently fail.
3. **Session UX improvements**: [#18884](https://github.com/openai/codex/issues/18884) requests a Claude-style `/recap` command and `/btw` alias; [#18993](https://github.com/openai/codex/issues/18993) asks for reliable conversation history. Users want richer session management.
4. **Adjustable UI layout**: [#16669](https://github.com/openai/codex/issues/16669) asks for adjustable chat content width in the Desktop App, reflecting dissatisfaction with the narrow fixed-width layout.
5. **Better rate-limit transparency**: [#19215](https://github.com/openai/codex/issues/19215) reports hitting GPT-5.5 limits very early on Business plans; users want clearer quota visibility.

## 6. Developer Pain Points

- **Windows is a second-class citizen**: Missing native binaries (#19243, #13555), PowerShell regressions (#17390), `cmake` output capture failures (#14453), and sandbox `.git/index.lock` permission errors (#19190) collectively paint a picture of an unreliable Windows experience.
- **Sandbox permission confusion**: "Full Access" doesn't actually disable the sandbox (#19196), and sandbox errors block `git` and `codex review` operations (#19190, #19210) without clear escalation prompts, frustrating users who expect sandbox boundaries to be transparent.
- **Extension instability**: The VS Code extension continues to cause high CPU (#16231), flash/blinking UI (#19181), broken conversation history (#18993), and oversized system prompts (#19212), making it the roughest surface in the Codex ecosystem.
- **Safety-check UX friction**: Users report being re-flagged after already verifying actions (#19204, #19245), and false-positive security-risk flags on benign local refactors undermine confidence in the safety system.
- **Startup-blocking regressions go untested**: v0.124.0 introduces hook config parse failures (#19199) and unsupported-feature crashes on macOS (#19220) that prevent the tool from launching at all — suggesting pre-release smoke tests don't cover common config permutations or older hardware.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-24

## 1. Today's Highlights
Gemini CLI rolls out **v0.39.0 (stable)** and **v0.40.0-preview.2**, with the nightly branch already pushing toward v0.41.0. The release emphasizes stability—simplified policy priorities, an OpenSSL streaming retry fix, and bundled ripgrep for offline single-executable support. Meanwhile, the community is actively discussing quality-of-life improvements around **memory management**, **shell execution reliability**, and **model routing availability**.

## 2. Releases

- **v0.39.0** ([Changelog PR #25848](https://github.com/google-gemini/gemini-cli/pull/25848))
  - Simplified plan policy priorities and consolidated read-only rules
  - Added memory usage integration test harness
- **v0.40.0-preview.2** ([Changelog PR #25846](https://github.com/google-gemini/gemini-cli/pull/25846))
  - Retry logic for additional OpenSSL 3.x SSL errors during streaming
- **v0.41.0-nightly.20260423** ([Release notes](https://github.com/google-gemini/gemini-cli/releases))
  - Fix: prevent YOLO mode from being accidentally downgraded ([PR #25341](https://github.com/google-gemini/gemini-cli/pull/25341))
  - Feature: bundle ripgrep binaries into SEA for offline support ([PR #25342](https://github.com/google-gemini/gemini-cli/pull/25342))

## 3. Hot Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent falsely reports success after hitting MAX_TURNS (P1)**  
   The `codebase_investigator` subagent reports `status: "success"` even when interrupted, hiding incomplete analysis from users. 👍 2

2. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell execution hangs with "Waiting input" after command completes**  
   Commands that have already finished remain stuck, blocking the agent loop. Multiple users confirm this; 👍 3.

3. **[#24916](https://github.com/google-gemini/gemini-cli/issues/24916) — Repeated permission prompts for the same file**  
   "Allow for all future sessions" is not reliably persisted, causing friction in agentic workflows.

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST-aware file reads, search, and mapping (EPIC)**  
   Investigating whether AST-aware tools can reduce misaligned reads and token noise. Could significantly improve `codebase_investigator`.

5. **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571) — Model creates tmp scripts in random directories**  
   When shell execution is restricted, the model scatters edit scripts across the workspace, creating cleanup overhead.

6. **[#25216](https://github.com/google-gemini/gemini-cli/issues/25216) — EISDIR crash on temporary path `A:\` (Windows)**  
   CLI crashes with `EISDIR` when launched in certain Windows temporary paths under PowerShell.

7. **[#22819](https://github.com/google-gemini/gemini-cli/issues/22819) — Memory routing: global vs. project scope**  
   Requests proper separation of user preferences (global `~/.gemini/`) vs. project-specific memory (`.gemini/`). 👍 2

8. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) — Browser Agent ignores `settings.json` overrides**  
   `maxTurns` and other config overrides are silently ignored by the Browser Agent despite correct merging in `AgentRegistry`.

9. **[#24202](https://github.com/google-gemini/gemini-cli/issues/24202) — Scrambled text over SSH sessions**  
   Windows users SSH-ing into Linux cloudtops see garbled terminal output, making the CLI unusable in remote dev environments.

10. **[#25895](https://github.com/google-gemini/gemini-cli/issues/25895) — Improve auto-memory skill extraction with session scratchpads**  
    Current auto-memory relies on compact summaries that lose workflow details; proposes scratchpad-based extraction for recurring skill detection.

## 4. Key PR Progress

| PR | Area | Summary |
|---|---|---|
| [#25885](https://github.com/google-gemini/gemini-cli/pull/25885) (P0) | core | **Fix ENOENT crash** from `proper-lockfile` race condition during startup — prevents launch crashes when multiple commands run concurrently |
| [#25888](https://github.com/google-gemini/gemini-cli/pull/25888) (P1) | repo | **Cognitive Repository architecture** — introduces `gemini-cli-bot` metrics and automated "Pulse" maintenance / "Brain" investigation workflows |
| [#25873](https://github.com/google-gemini/gemini-cli/pull/25873) | memory | **Persist auto-memory scratchpad** in session metadata — reduces avg extractor turns from 13.2 → 11.0 (−16.7%) |
| [#25893](https://github.com/google-gemini/gemini-cli/pull/25893) | core | **Fix MCP server deadlock** — drains `stderr` unconditionally so MCP servers writing to stderr don't fill pipe buffers |
| [#25886](https://github.com/google-gemini/gemini-cli/pull/25886) | routing | **Availability-aware auto-routing** — falls back to Flash when Pro times out; introduces "Best Effort Pro" setting |
| [#25409](https://github.com/google-gemini/gemini-cli/pull/25409) | agent | **Wire up new ContextManager and AgentChatHistory** — foundational refactor for context handling |
| [#25882](https://github.com/google-gemini/gemini-cli/pull/25882) | cli | **Restrict Ctrl+Backspace detection to Windows Terminal only** — fixes `cmd.exe`/PowerShell sending `\b` being misinterpreted as word deletion |
| [#25802](https://github.com/google-gemini/gemini-cli/pull/25802) | cli | **Render LaTeX as Unicode in TUI** — converts tokens like `$\to$` → `→` for readable math output in the terminal |
| [#25877](https://github.com/google-gemini/gemini-cli/pull/25877) (P1) | ui | **`compactToolOutputAllowlist` setting** — lets users extend the compact tool output list for custom tooling |
| [#24174](https://github.com/google-gemini/gemini-cli/pull/24174) | voice | **Real-time voice mode** — cloud transcription via Gemini Live API + local Whisper (`whisper.cpp`) backend |

## 5. Feature Request Trends

- **Smarter memory & learning**: Persistent scratchpads, global vs. project memory routing, and proactive memory writes are recurring themes. Users want the agent to learn preferences across sessions without manual intervention.
- **AST-aware code understanding**: Community and maintainers alike are pushing for AST-based file reads and codebase mapping to reduce token waste and improve precision of code navigation.
- **Robustness in agent orchestration**: Better subagent recovery, tool-call rejection handling, and tracker updates during replanning reflect demand for more reliable multi-agent workflows.
- **Terminal & accessibility polish**: LaTeX rendering, screen reader support, SSH compatibility, and Windows Terminal fixes indicate strong demand for first-class terminal UX.

## 6. Developer Pain Points

- **Startup reliability**: Lockfile race conditions (`ENOENT` crashes) and synchronous network calls during boot cause intermittent launch failures — a top frustration.
- **Shell execution hangs**: The "Waiting input" deadlock ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) is a blocking issue for agentic workflows, forcing users to manually intervene.
- **Permission persistence**: Repeated permission prompts ([#24916](https://github.com/google-gemini/gemini-cli/issues/24916)) erode trust in "YOLO mode" and auto-approve settings.
- **Windows/SSH experience**: Path handling crashes, scrambled terminal output over SSH, and `cmd.exe` keybinding mismatches make the CLI fragile for remote and Windows developers.
- **MCP server integration**: The stderr deadlock bug ([PR #25893](https://github.com/google-gemini/gemini-cli/pull/25893)) reveals that third-party MCP server integration still has sharp edges — pipe buffer deadlocks are difficult to diagnose.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-24

## 1. Today's Highlights

GitHub Copilot CLI rolled out **v1.0.35**, bringing highly-requested quality-of-life improvements including tab-completion for slash commands, proper `$SHELL` respect for shell escape commands (`!`), and remote session permission prompt fixes. The community remains intensely focused on **rate limiting behavior**—multiple issues report aggressive retries on HTTP 429s and subagent failures during rate-limited periods. Meanwhile, the release directly addressed a user feature request by adding `/session delete` and `delete-all` subcommands.

---

## 2. Releases

**[v1.0.35](https://github.com/github/copilot-cli/releases/tag/v1.0.35)** (2026-04-23)

- **Slash command tab-completion:** Arguments and subcommands now support tab-completion, significantly improving CLI ergonomics.
- **Shell escape respects `$SHELL`:** The `!` escape commands now invoke your configured `$SHELL` instead of hardcoding `/bin/sh`.
- **Remote session permission prompts:** The TUI now correctly displays permission prompts in remote sessions.
- **Session selector improvements:** Branch names and idle/in-use status are now visible.

**[v1.0.35-6](https://github.com/github/copilot-cli/releases/tag/v1.0.35-6)** (2026-04-23)
- **Improved:** Session sync prompt now uses clearer labels and explains GitHub.com cross-device sync.

**[v1.0.35-5](https://github.com/github/copilot-cli/releases/tag/v1.0.35-5)** (2026-04-23)
- **Added:** `COPILOT_GH_HOST` environment variable for GitHub hostname, taking precedence over `GH_HOST`.
- **Added:** `Ctrl+Y` (in addition to `Tab`) to accept highlighted options in completion popups (@-mentions, paths, slash commands).
- **Added:** `/session delete`, `/session delete <id>`, and `/session delete-all` subcommands.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [#1703](https://github.com/github/copilot-cli/issues/1703) — **Copilot CLI doesn't list all org-enabled models (e.g. Gemini 3.1 Pro)** | Open since Feb, 24 comments, 38 👍. The CLI shows a reduced model list vs. VS Code for the same org. High community frustration around feature parity between IDE and CLI. |
| 2 | [#2760](https://github.com/github/copilot-cli/issues/2760) — **Implement proper HTTP retry logic for 429 responses** | 7 comments. The CLI aggressively retries on rate-limit responses (20+ retries/min), creating a retry storm. Closed but highlights core infra concern. |
| 3 | [#2787](https://github.com/github/copilot-cli/issues/2787) — **Endless rate limit prompts** | 5 comments. Users hit "wait 6 seconds" loops that never resolve. Symptom of the broader rate-limit UX crisis. |
| 4 | [#2741](https://github.com/github/copilot-cli/issues/2741) — **Very sudden "user_weekly_rate_limited"** | 5 comments. New weekly rate limit felt unexpected and poorly communicated to users. |
| 5 | [#2840](https://github.com/github/copilot-cli/issues/2840) — **Rate limit aborts subagents** | 3 comments. When rate-limited, spawned subagents immediately fail and dump work back to the main agent, breaking multi-agent workflows. |
| 6 | [#1347](https://github.com/github/copilot-cli/issues/1347) — **XDG_CONFIG_HOME not supported correctly** | 8 comments, 13 👍. Copilot ignores standard Linux `XDG_CONFIG_HOME` directory conventions, breaking MCP configuration paths. |
| 7 | [#2900](https://github.com/github/copilot-cli/issues/2900) — **Can't resume sessions after update** | 2 comments. A `/update` on 4/22 corrupted session files, forcing users to start over. Directly impacts workflow continuity. |
| 8 | [#2937](https://github.com/github/copilot-cli/issues/2937) — **macOS segfault: EXC_BAD_ACCESS (SIGSEGV)** | New today. CLI crashes immediately on launch for some macOS users, rendering it completely unusable. |
| 9 | [#2416](https://github.com/github/copilot-cli/issues/2416) — **Sub-agents can't see skills from own plugin (token truncation)** | 5 comments. Custom agents see only 29 truncated skills due to `<available_skills>` token limits, breaking plugin ecosystems. |
| 10 | [#2858](https://github.com/github/copilot-cli/issues/2858) — **Collapse compaction summary by default** | 2 comments. After auto-compaction, hundreds of lines of XML-like summary flood the terminal, pushing useful context off-screen. |

---

## 4. Key PR Progress

Only one PR was updated in the last 24 hours:

| PR | Description |
|----|-------------|
| [#2565](https://github.com/github/copilot-cli/pull/2565) — **install: guard against duplicate PATH entries on reinstall** | Prevents the installer from appending duplicate PATH configuration lines to shell profiles when run multiple times without a shell restart. Straightforward UX fix for a common setup annoyance. Still open, awaiting review/merge. |

> **Note:** PR activity was minimal today. The bulk of engineering effort appears directed at the v1.0.35 release cycle.

---

## 5. Feature Request Trends

Several clear themes emerge from recent issues:

1. **Per-agent model selection & reasoning effort** — Multiple requests ([#2939](https://github.com/github/copilot-cli/issues/2939), [#2904](https://github.com/github/copilot-cli/issues/2904)) want custom agents to specify their own model and reasoning effort independently, citing Claude Agent SDK parity.

2. **Granular tool/permission whitelisting** — [#2921](https://github.com/github/copilot-cli/issues/2921) and [#2908](https://github.com/github/copilot-cli/issues/2908) request subcommand-level permission control (e.g., allow `mvn test` but block `mvn publish`), with JetBrains Copilot cited as precedent.

3. **Repo-level MCP configuration** — [#2938](https://github.com/github/copilot-cli/issues/2938) requests support for `.mcp.json` in the repo root so teams can share MCP server configs without individual setup.

4. **Programmatic model switching** — [#2896](https://github.com/github/copilot-cli/issues/2896) wants the AI itself to switch models based on task complexity, rather than requiring manual `/model` selection.

5. **Codebase indexing parity with VS Code** — [#20](https://github.com/github/copilot-cli/issues/20) (10 👍, open since Sep 2025) remains a long-standing request for repository-level indexing support in the CLI.

6. **Custom diff rendering** — [#2884](https://github.com/github/copilot-cli/issues/2884) wants more granular, word-level diff highlighting and customization options for the edit tool's output.

---

## 6. Developer Pain Points

1. **Rate limiting is the dominant frustration.** At least 5 active issues report rate-limit-related problems: endless prompts (#2787), retry storms (#2760), weekly limits (#2741), subagent aborts (#2840), and autopilot malfunction (#2754). The UX around rate limiting feels broken and poorly communicated.

2. **Model parity gap vs. VS Code.** Issue #1703 (38 👍, still open after 2 months) remains the most-upvoted issue. Developers expect the same model availability across all Copilot surfaces and are confused when the CLI lags behind.

3. **Session reliability.** Corrupted sessions after updates (#2900), expired session tokens breaking long-running tasks (#2818), and the lack of session management commands (now partially addressed in v1.0.35) undermine trust in the CLI for serious work.

4. **Custom agent limitations.** Token truncation of skill lists (#2416), inability to override models per subagent (#2939), and missing per-agent reasoning effort config (#2904) indicate the custom agent framework still lacks the flexibility developers need.

5. **Platform-specific instability.** A new macOS segfault (#2937) and a Windows TUI corruption bug (#2864) suggest ongoing platform-specific edge cases, particularly around terminal rendering and process spawning.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-24

## 1. Today's Highlights
The community saw a massive surge in bug reports and feature requests surrounding **UI/UX latency** and **model behavior**, with no new official releases issued today. A significant portion of pull requests focused on refining the `--yolo` mode, fixing broken MCP (Model Context Protocol) integrations, and improving agent observability. The underlying "Moonshot Flavored JSON Schema" restrictions also came under heavy scrutiny as they continue to block compatibility with standard external tools.

## 2. Releases
*No new official releases were published in the last 24 hours. The repository remains on recent tags (v1.37.0 / v1.38.0 source checkouts), with active development happening on the main branch.*

## 3. Hot Issues

1. **[Model Quality] [Kimi K2.5 vs K2.6](https://github.com/MoonshotAI/kimi-cli/issues/1925)**
   Users are reporting significant regressions in the K2.6 model, noting that its "thinking" process drowns out creativity and increases hallucinations. The community (8 comments) is actively requesting a way to roll back to K2.5 with its previous system prompt.
2. **[Critical Bug] [Terminal Closes in IDEA](https://github.com/MoonshotAI/kimi-cli/issues/1990)**
   Sending a message via Kimi CLI in JetBrains IDEA causes the entire terminal to close directly. This critical integration bug interrupts developer workflows.
3. **[UX] [VS Code Notification for Approvals](https://github.com/MoonshotAI/kimi-cli/issues/2040)**
   When VS Code is minimized, users miss CLI approval dialogs. Developers are requesting native `showInformationMessage` OS notifications for pending approvals.
4. **[Performance] [Git Subprocess Typing Lag](https://github.com/MoonshotAI/kimi-cli/issues/2038)**
   The bottom toolbar's continuous polling for git branch/status is causing noticeable keystroke lag during normal typing, isolated via binary search by the user.
5. **[Architecture] [JSON Schema MCP Incompatibility](https://github.com/MoonshotAI/kimi-cli/issues/1595)**
   Moonshot's strict "flavored" JSON Schema requires explicit `type` fields where standard schemas do not, breaking compatibility with many standard MCP servers. *(Closed, addressed by PR #2030).*
6. **[Performance] [Extreme Typing Latency in Modal Inputs](https://github.com/MoonshotAI/kimi-cli/issues/2032)**
   Severe keystroke lag occurs when typing in inline modal inputs (like "Reject" feedback or "Other" options), pointing to UI rendering bottlenecks.
7. **[Integrations] [IDEA Terminal Crashes / Session Loss](https://github.com/MoonshotAI/kimi-cli/issues/2049)**
   Session history is lost upon resuming a session (`/sessions`), despite appearing on the screen initially.
8. **[UX] [Notification Hook Failures](https://github.com/MoonshotAI/kimi-cli/issues/2048)**
   The `Notification` hook with `matcher="permission_prompt"` never triggers, breaking documented automation workflows.
9. **[Integrations] [UTF-8 BOM Config Parse Error](https://github.com/MoonshotAI/kimi-cli/issues/2043)**
   If `config.toml` is saved with a UTF-8 BOM, the CLI crashes on startup with a generic "Empty key" TOML error.
10. **[Architecture] [Missing PTY Allocation for Interactive Commands](https://github.com/MoonshotAI/kimi-cli/issues/2037)**
    The Shell tool explicitly closes `stdin` and doesn't allocate a PTY, causing interactive CLI commands (like `ssh-add` or `sudo`) to corrupt input or hang.

## 4. Key PR Progress

1. **[Fix] [Load MCP in ACP Sessions](https://github.com/MoonshotAI/kimi-cli/pull/2047)**
   Fixes a bug where `kimi acp` (used by editors like Zed) ignored local MCP configurations, leaving users with only built-in tools.
2. **[Fix] [Unblock AskUserQuestion in Yolo Mode](https://github.com/MoonshotAI/kimi-cli/pull/2045)**
   Refactors `--yolo` mode by splitting "auto-approve" and "non-interactive" into orthogonal modes (`yolo` vs. `afk`), stopping the CLI from falsely telling the model it cannot ask questions.
3. **[Fix] [MCP JSON Schema Type Validation](https://github.com/MoonshotAI/kimi-cli/pull/2030)** *(Closed/Merged)*
   Resolves API validation errors by automatically injecting missing `type` fields into MCP tool parameters, smoothing over Moonshot's strict JSON Schema requirements.
4. **[Feat] [RalphFlow Architecture](https://github.com/MoonshotAI/kimi-cli/pull/1960)**
   Introduces an automated iteration framework with ephemeral context and convergence detection to prevent infinite agent loops while maintaining clean main context.
5. **[Fix] [Scope Project Skills Prompt](https://github.com/MoonshotAI/kimi-cli/pull/2044)**
   Fixes a bug where project-level skills were invisible to the model by scope-grouping them in the system prompt and honoring project overrides.
6. **[Fix] [Correct /usage Gauge Colors](https://github.com/MoonshotAI/kimi-cli/pull/2046)**
   Fixes inverted color thresholds in the `/usage` command so that low remaining quota actually displays warning colors.
7. **[Fix] [Show Active Agent Task Count](https://github.com/MoonshotAI/kimi-cli/pull/2041)**
   Adds subagent execution counts to the prompt status bar, giving users better observability when multi-agent runs make the CLI appear stalled.
8. **[Feat] [E2B Sandbox Integration](https://github.com/MoonshotAI/kimi-cli/pull/659)**
   Implements an `E2BKaos` class to allow executing kaos operations securely inside E2B cloud sandboxes.
9. **[Fix] [TTY Hang on Exit](https://github.com/MoonshotAI/kimi-cli/pull/1985)**
   Resolves a lingering TTY hang during shutdown by switching terminal reads to non-blocking and properly closing MCP connections on exit.
10. **[Feat] [KIMI_MODEL_THINKING_KEEP Env Var](https://github.com/MoonshotAI/kimi-cli/pull/2029)** *(Closed/Merged)*
    Introduces an environment variable to forward `thinking.keep` to the Moonshot API, allowing developers to persist model thinking outputs.

## 5. Feature Request Trends
* **Better Agentic Control & Observability:** Users want granular control over model thinking tokens (e.g., preserving K2.5 logic vs K2.6) and the ability to inject mid-processing instructions (#1925, #2042). There is also a strong need to see subagent context usage in parent statistics (#2024).
* **Seamless Editor Integration:** Requests for standard native OS notifications for pending approvals (#2040) and Yolo-mode switching directly in the Web UI (#2033) are gaining traction.
* **Plugin & Tooling Compatibility:** A continued push towards universal compatibility, specifically requesting Claude-compatible local plugin support layers (#1714) and less rigid JSON Schema validation for third-party MCP servers.

## 6. Developer Pain Points
* **UI/UX Latency:** A highly frustrating trend is input lag. Developers report severe keystroke delays triggered simply by typing at the prompt (due to Git subprocess polling) or inside modal dialogs (#2038, #2032).
* **Terminal & Session Instability:** Users running the CLI inside IDEs (specifically JetBrains IDEA) are experiencing fatal crashes (#1990) and lost session histories (#2049).
* **Strict API Schemas & PTY Limitations:** Moonshot's customized API requirements continually break standard MCP tool integrations, requiring constant patching. Furthermore, the lack of PTY allocation in the CLI's internal shell tool makes using standard interactive terminal commands (like `sudo`) impossible without weird hangs (#2037).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-24

## 1. Today's Highlights

OpenCode shipped two rapid-fire patch releases (**v1.14.21** and **v1.14.22**) addressing LSP diagnostics for C# and Kotlin, Git worktree detection, and desktop session state bugs. The community is heavily focused on **GPT-5.5 integration**, with multiple issues and a quick-fix PR already in flight. Meanwhile, the ongoing **memory megathread** continues to attract reports, and two targeted memory-fix PRs were opened to address unbounded SSE stream growth and stale gitignored files in the shadow snapshot index.

---

## 2. Releases

### [v1.14.22](https://github.com/anomalyco/opencode/releases/tag/v1.14.22)
- **Core:** Respect `.npmrc` settings during npm installs; persist custom icon overrides per project.

### [v1.14.21](https://github.com/anomalyco/opencode/releases/tag/v1.14.21)
- **Core:** Support pull diagnostics from LSP servers (C#, Kotlin); fix project detection for bare Git repos and worktrees (contributor: @StevenTCramer); improve session compaction for long threads; preserve UTF-8 encoding.

---

## 3. Hot Issues

1. **[#20695](https://github.com/anomalyco/opencode/issues/20695) — Memory Megathread** (63 comments, 39 👍)
   The central tracking issue for all memory leak reports. Maintainers are collecting heap snapshots and caution against LLM-generated suggestions. Two new PRs (#24058, #24059) directly target subsets of this problem.

2. **[#8785](https://github.com/anomalyco/opencode/issues/8785) — Bun has crashed** (28 comments)
   Recurring Bun runtime crashes on Windows x64. Still open with no definitive fix; the recent v1.14.6 crash reports (#22683) suggest the problem may be evolving rather than resolving.

3. **[#24039](https://github.com/anomalyco/opencode/issues/24039) — GPT-5.5 support for OpenAI provider** (11 comments, 12 👍, Closed)
   Request for first-class `gpt-5.5` model support. Closed rapidly after PR [#24055](https://github.com/anomalyco/opencode/pull/24055) added it to the Codex OAuth allowed list.

4. **[#22408](https://github.com/anomalyco/opencode/issues/22408) — Kimi K2.6 integration** (21 comments, 18 👍, Closed)
   Community request to integrate Moonshot's Kimi K2.6 and K2.6-code-preview models. Strong interest signals demand for more non-US model provider options.

5. **[#14808](https://github.com/anomalyco/opencode/issues/14808) — Plugin `session.created` event not firing** (15 comments, 12 👍)
   Plugins subscribing to the event bus never receive `session.created`. Blocks memory and state-management plugins like Engram. Still unresolved.

6. **[#22683](https://github.com/anomalyco/opencode/issues/22683) — v1.4.6 constantly crashing** (11 comments)
   After the memory leak errors were quelled, the app now crashes silently. Users report the problem across platforms with OmO plugin loaded.

7. **[#16612](https://github.com/anomalyco/opencode/issues/16612) — Stale context: replies to previous turn** (10 comments, 5 👍)
   The assistant occasionally responds to an earlier user message instead of the latest one. A reliability issue that erodes trust during focused coding sessions.

8. **[#19515](https://github.com/anomalyco/opencode/issues/19515) — Workspace folders / multi-directory support** (22 👍, 3 comments)
   High-upvote feature request for explicit multi-root workspace support, akin to VS Code workspaces. Currently the most-wanted architectural enhancement.

9. **[#22852](https://github.com/anomalyco/opencode/issues/22852) — Claude Opus 4.7 thinking blocks not persisted** (11 comments, Closed)
   Thinking content is omitted by default in Claude Opus 4.7 and OpenCode doesn't properly persist what's available. Closed, likely addressed upstream.

10. **[#24069](https://github.com/anomalyco/opencode/issues/24069) — Norton Antivirus flags OpenCode as malware** (2 comments, Closed)
    Affecting Windows users, Norton started quarantining OpenCode binaries. Highlights the ongoing code-signing and trust challenge for developer tools.

---

## 4. Key PR Progress

| PR | Type | Description |
|---|---|---|
| [#24055](https://github.com/anomalyco/opencode/pull/24055) | Fix | Adds `gpt-5.5` to Codex OAuth allowed model list. **Closed/merged.** |
| [#24058](https://github.com/anomalyco/opencode/pull/24058) | Fix | Prevents unbounded memory growth from stuck SSE streams when TCP half-close leaves `stream.onAbort` unfired on Bun. **Closed/merged.** Directly addresses [#20695](https://github.com/anomalyco/opencode/issues/20695). |
| [#24059](https://github.com/anomalyco/opencode/pull/24059) | Fix | Evicts gitignored files from shadow snapshot index — files staged before being added to `.gitignore` no longer linger forever. **Closed/merged.** |
| [#23783](https://github.com/anomalyco/opencode/pull/23783) | Fix | Fixes TUI navigation into grandchild sessions from subagent view — `moveFirstChild()` previously only saw direct children. |
| [#23785](https://github.com/anomalyco/opencode/pull/23785) | Feature | Adds subagent status indicator in the TUI prompt footer, giving real-time visibility into spawned agent activity. |
| [#23794](https://github.com/anomalyco/opencode/pull/23794) | Feature | Implements an interactive terminal tool backed by persistent PTY sessions, enabling the agent to use the integrated terminal instead of spawning new shells (Phases 1+2 of [#23449](https://github.com/anomalyco/opencode/issues/23449)). |
| [#23890](https://github.com/anomalyco/opencode/pull/23890) | Feature | Runtime-aware search service using `fff-bun` under Bun and ripgrep under Node — significant perf optimization for file search. |
| [#16108](https://github.com/anomalyco/opencode/pull/16108) | Feature | Adds `.local.md` variants for instruction files (`AGENTS.local.md`, `CLAUDE.local.md`) so machine-specific instructions can live alongside shared ones without being committed. |
| [#24068](https://github.com/anomalyco/opencode/pull/24068) | Fix | Avoids `E2BIG` errors during batched snapshot revert by using `--pathspec-from-file=-` via stdin instead of argv. **Closed/merged.** |
| [#18306](https://github.com/anomalyco/opencode/pull/18306) | Feature | Adds Open WebUI as a provider, expanding self-hosted model options for air-gapped or private deployments. |

---

## 5. Feature Request Trends

- **New model integrations dominate**: GPT-5.5 (#24039, #24036), Kimi K2.6 (#22408), Nvidia NIM (#24044). The community moves fast when new models drop, and OpenCode is expected to support them within days.
- **Subagent observability**: Multiple requests (#22233, #23028, #23785) ask for better visibility into which subagent is running, what model it's using, and how long it's been active. The TUI currently provides almost no feedback.
- **Multi-root workspaces** (#19515, 22 👍): The top-upvoted feature request. Users working across monorepos or microservices want native multi-directory support without symlink workarounds.
- **Persistent UI hooks for plugins** (#18969): Plugin authors want `tui.footer.items` so status displays (token trackers, TPS meters) don't rely on disruptive toast spam.
- **Integrated PTY terminal tool** (#23449, #23794): Letting the agent reuse the built-in terminal instead of spawning new processes — better for state, env vars, and shell history continuity.

---

## 6. Developer Pain Points

- **Memory leaks remain the #1 reliability concern.** The megathread (#20695) is the most-commented open issue. The root causes are heterogeneous (SSE streams, shadow snapshot index, Bun GC behavior), meaning no single fix will close it.
- **Windows stability lags behind.** Bun crashes (#8785), antivirus false positives (#24069), `.cmd` execution bypassing permissions (#23907), and clipboard failures over SSH+tmux (#15907) all disproportionately affect Windows users.
- **LSP regressions erode confidence.** Java LSP broke in v1.3.13 (#20452) and is still unresolved. Pull-diagnostics support landed in v1.14.21, but the pattern of LSP regressions with each minor bump is frustrating Java, C#, and Kotlin developers.
- **Stale context in conversations** (#16612) is a trust killer — when the assistant replies to a previous turn, users question whether they can rely on it for precise, sequential work.
- **Security tooling conflicts** (#24069) — Norton flagging OpenCode binaries as malware leaves Windows users dead in the water. Code signing and vendor allow-list coordination remain unaddressed at scale.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-24

## 1. Today's Highlights
Pi officially shipped version **v0.70.0**, introducing a highly requested fuzzy-search login flow that streamlines provider authentication for users with complex configurations. Alongside the release, the community saw a massive influx of open-source contributions, including native **Together AI** integration, support for the upcoming **GPT-5.5**, and critical fixes for terminal rendering (Sixel images) and clipboard stability on macOS. 

## 2. Releases
- **v0.70.0** ([v0.70.0](https://github.com/badlogic/pi-mono/releases/tag/v0.70.0))
  - **Searchable Auth Provider Login Flow:** The `/login` provider selector now supports fuzzy search/filtering, making it significantly faster to find providers when many are configured. (Authored by [@mitsuhiko](https://github.com/mitsuhiko) via [PR #3572](https://github.com/badlogic/pi-mono/pull/3572))

## 3. Hot Issues
1. **#3588 [Terminal Escape Sequences Disturbing UI](https://github.com/badlogic/pi-mono/issues/3588):** Users report that OSC progress sequences introduced in v0.69.0 create intrusive UI glitches (e.g., animated green lines in iTerm2). The community is actively discussing making these configurable or disabling them by default. *(10 comments)*
2. **#3208 [Custom Thinking Levels per Model](https://github.com/badlogic/pi-mono/issues/3208):** A popular request to let models define custom thinking levels in `models.json` so `Shift+Tab` only cycles through supported states. *(7 comments, 6 thumbs-up)*
3. **#3600 [Enter Key Randomly Fails](https://github.com/badlogic/pi-mono/issues/3600):** A critical session bug where prompt submission abruptly stops working mid-session, forcing users to restart the CLI. *(7 comments)*
4. **#2980 [Speed up `pi update`](https://github.com/badlogic/pi-mono/issues/2980):** An ongoing deep-dive by contributors to optimize the CLI startup costs and parallelize npm package updates for `pi update`. *(9 comments)*
5. **#3582 [Segfault in clipboard.linux-x64-gnu.node](https://github.com/badlogic/pi-mono/issues/3582):** High-frequency bash outputs (like `rsync`) are causing a hard crash/segfault in the native Linux clipboard module. *(4 comments)*
6. **#3575 [Proxy Regression in Anthropic Backends](https://github.com/badlogic/pi-mono/issues/3575):** The `eager_input_streaming` field in tool definitions is causing strict `anthropic-messages` proxies to return `400` errors. *(4 comments)*
7. **#3604 [`pi install` Fails with pnpm/yarn](https://github.com/badlogic/pi-mono/issues/3604):** Hardcoded npm flags (`--omit=dev`) in the `git:` package flow break custom package managers. *(3 comments)*
8. **#3589 [Timeouts Silently Abort Local Inference](https://github.com/badlogic/pi-mono/issues/3589):** SDK clients for OpenAI/Anthropic lack timeout configs, silently killing requests taking longer than 10 minutes, heavily impacting local inference users. *(3 comments)*
9. **#3586 [Kimi Coding Systematic 429s](https://github.com/badlogic/pi-mono/issues/3586):** Missing `User-Agent` headers in the built-in provider cause Kimi's backend to reject valid requests as overloaded. *(3 comments)*
10. **#3599 [TUI Text Leak in tmux Popups](https://github.com/badlogic/pi-mono/issues/3599):** Pasting multi-line text inside a tmux popup leaks stray `[106;5u` CSI-u fragments into the prompt. *(3 comments)*

## 4. Key PR Progress
1. **[#3624 Add Together AI Provider](https://github.com/badlogic/pi-mono/pull/3624):** Introduces native Together AI support via its OpenAI-compatible Chat Completions API, including auto-detection for tool-capable models. *(Open)*
2. **[#3615 Add GPT-5.5](https://github.com/badlogic/pi-mono/pull/3615):** Adds the new GPT-5.5 model to the core configurations. *(Closed/Merged)*
3. **[#3618 Align GPT-5.5 Codex Capabilities](https://github.com/badlogic/pi-mono/pull/3618):** Applies appropriate Codex capabilities and specific pricing multipliers for GPT-5.5. *(Closed/Merged)*
4. **[#3603 Add Sixel Image Support](https://github.com/badlogic/pi-mono/pull/3603):** Implements `img2sixel` to fix image rendering issues in Windows Terminal and VS Code embedded terminals. *(Closed/Merged)*
5. **[#3623 Fix CSI-u Bracketed Paste Bug](https://github.com/badlogic/pi-mono/pull/3623):** Resolves the annoying text leak happening when pasting text inside tmux popups. *(Open)*
6. **[#3620 Fix Native Clipboard Race Condition](https://github.com/badlogic/pi-mono/pull/3620):** Awaits the native clipboard before emitting OSC 52, eliminating a crash panic on macOS. *(Closed/Merged)*
7. **[#3593 Retry on HTTP2 Failures](https://github.com/badlogic/pi-mono/pull/3593):** Introduces retry logic for AWS Bedrock's "http2 request did not get a response" errors. *(Closed/Merged)*
8. **[#3583 Route Hardcoded Branding](https://github.com/badlogic/pi-mono/pull/3583):** Refactors hardcoded "pi" strings to use `APP_NAME`, making the tool easier to rebrand/white-label. *(Closed/Merged)*
9. **[#3607 Double-Press Footer Hint](https://github.com/badlogic/pi-mono/pull/3607):** Adds a visual cue in the UI when a user is in the 500ms window of a double-press shortcut (like Ctrl+C). *(Closed/Merged)*
10. **[#3197 Graceful Turn Interruption](https://github.com/badlogic/pi-mono/pull/3197):** Introduces `interrupt()` to `pi-agent-core`, allowing agents to be stopped without destroying in-flight tool work. *(Open)*

## 5. Feature Request Trends
- **Agent Configuration & Hooks:** Developers are pushing for deeper extension APIs, specifically raw stream response hooks ([#3605](https://github.com/badlogic/pi-mono/issues/3605)) and better event lifecycles for agent interruptions. 
- **Local & Self-Hosted Inference Support:** There is a strong desire to make Pi friendlier to local inference (e.g., llama.cpp). Users are actively requesting the ability to disable strict timeouts ([#3589](https://github.com/badlogic/pi-mono/issues/3589)) and customize token thinking levels ([#3208](https://github.com/badlogic/pi-mono/issues/3208)).
- **Package Manager Flexibility:** As the ecosystem grows, users want standard CLI tools (`pi install`, `pi update`) to gracefully handle alternative package managers like `pnpm` and `yarn` without hardcoded npm flags ([#3604](https://github.com/badlogic/pi-mono/issues/3604)).

## 6. Developer Pain Points
- **Terminal Compatibility & UI Pollution:** The introduction of OSC progress sequences is causing severe visual bugs across popular terminals (iTerm2, Ghostty, Termux). The community feels these should be opt-in or configurable rather than default behavior ([#3588](https://github.com/badlogic/pi-mono/issues/3588), [#3610](https://github.com/badlogic/pi-mono/issues/3610)).
- **Strict API Provider Handling:** Several networking issues stem from Pi sending non-conforming or unsupported headers/payloads to strict proxies (e.g., missing User-Agent for Kimi ([#3586](https://github.com/badlogic/pi-mono/issues/3586)), bad `session_id` headers via Envoy/nginx ([#3579](https://github.com/badlogic/pi-mono/issues/3579)), and unhandled `api-version` parameters for Azure ([#2528](https://github.com/badlogic/pi-mono/issues/2528))).
- **Session/State Fragility:** Users are experiencing frustrating mid-session bugs, such as prompt submission completely breaking ([#3600](https://github.com/badlogic/pi-mono/issues/3600)) and losing typed prompts upon early submission failures ([#3571](https://github.com/badlogic/pi-mono/issues/3571)).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-24

## 1. Today's Highlights
Version **v0.15.1** and its corresponding nightly build were released today, delivering critical bug fixes for the `ReadFile` tool loop issue and the `StreamingToolCallParser` scoping bug. The community remains highly active around local LLM configuration difficulties and the ongoing OAuth free tier quota reduction, while contributors submitted several exciting PRs—including a Python SDK, rich OSC terminal notifications, and conversation rewind functionality.

## 2. Releases
**v0.15.1** & **v0.15.1-nightly.20260424**
- **`ReadFile` Fix**: Treats an empty `pages` parameter as unset, resolving a loop bug where models defaulting optional strings to `""` would repeatedly read from line 1. ([PR #3559](https://github.com/QwenLM/qwen-code/pull/3559))
- **Streaming Parser Fix**: Scopes `StreamingToolCallParser` per stream rather than per Converter, preventing cross-stream state corruption. ([PR #3525](https://github.com/QwenLM/qwen-code/pull/3525))
- **Session Auto-Titling**: Automatically generates a 3-7 word session title via the fast model after the first assistant turn, with a `/rename --auto` command. ([PR #3540](https://github.com/QwenLM/qwen-code/pull/3540))
- **Shell Time Indicator**: Combines elapsed time and timeout into a single unified CLI display. ([PR #3512](https://github.com/QwenLM/qwen-code/pull/3512))

## 3. Hot Issues
1. **[OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203)** (117 comments): A highly debated proposal to reduce the free tier from 1,000 to 100 requests/day and eventually phase it out entirely. Huge community backlash from hobbyists and open-source contributors.
2. **[Read Tool Stuck in Loop](https://github.com/QwenLM/qwen-code/issues/3473)**: The `offset` parameter is ignored, causing the agent to endlessly read the first 100 lines. Now officially resolved in today's v0.15.1 release.
3. **[Maximum Update Depth Exceeded on Model Switch](https://github.com/QwenLM/qwen-code/issues/3530)**: A React `useEffect` infinite loop error crashes the CLI when using the `/model` command. 2 thumbs up indicate this is affecting multiple users.
4. **[Unable to Add OpenAI-Compatible Local LLM](https://github.com/QwenLM/qwen-code/issues/3384)**: Users are struggling to connect local VLLM instances due to confusing settings and authentication requirements overriding local configs.
5. **[Local Model Configuration Confusion](https://github.com/QwenLM/qwen-code/issues/3532)**: Despite following documentation, local setups keep triggering the Qwen OAuth authentication flow, blocking access to local models.
6. **["Temporarily Out of Stock" for Alibaba Cloud Plan](https://github.com/QwenLM/qwen-code/issues/3307)**: The paid Coding Plan for Qwen 3.6 Plus access on Alibaba Cloud has been unavailable for purchase for over a week.
7. **[Kimi-K2.5 Model API Error](https://github.com/QwenLM/qwen-code/issues/3553)**: `tool_calls.type` parameter validation fails when using the Kimi-K2.5 model, indicating compatibility issues with third-party model APIs.
7. **[Duplicate Provider Configurations](https://github.com/QwenLM/qwen-code/issues/3555)**: Users cannot configure the same model across multiple OpenAI-compatible providers as a fallback mechanism, a critical need for stability.
9. **[Tool Ran Without Output or Errors](https://github.com/QwenLM/qwen-code/issues/3520)**: Silent tool failures in v0.14.5 leave developers with no actionable feedback during agent execution.
10. **[Alibaba Cloud Coding Plan Out of Stock](https://github.com/QwenLM/qwen-code/issues/3307)**: Continuously out of stock for a week, causing frustration for users willing to pay for access but unable to do so.

## 4. Key PR Progress
1. **[Python SDK Implementation](https://github.com/QwenLM/qwen-code/pull/3494)**: Introduces `packages/sdk-python`, supporting `async query`, `query_sync`, and process transport for programmatic control.
2. **[Conversation Rewind Feature](https://github.com/QwenLM/qwen-code/pull/3441)**: Adds a double-ESC and `/rewind` slash command to rollback conversation history to a specific turn and restart from there.
3. **[Rich Terminal Notifications (OSC)](https://github.com/QwenLM/qwen-code/pull/3562)**: Replaces the basic terminal bell with protocol-specific system notifications for iTerm2, Kitty, and Ghostty.
4. **[Image Paste & Data URL Support](https://github.com/QwenLM/qwen-code/pull/3519)**: Unifies pasting base64/data URLs, dragging image files, and clipboard images under a single `[Image #N]` placeholder UX.
5. **[ACP Agent Tool Call Concurrency](https://github.com/QwenLM/qwen-code/pull/3463)**: Fixes sequential execution of multiple Agent tool calls, now running ACP subagents concurrently to reduce latency.
6. **[Model-Facing Agent Control](https://github.com/QwenLM/qwen-code/pull/3471)**: Adds `task_stop`, `send_message`, and live transcript reading for parent agents to control background subagents mid-flight.
7. **[OPENAI_MODEL Precedence Fix](https://github.com/QwenLM/qwen-code/pull/3567)**: Ensures `OPENAI_MODEL` takes proper precedence over `QWEN_MODEL` in CLI resolution for OpenAI-compatible auth flows.
8. **[Telemetry Documentation Update](https://github.com/QwenLM/qwen-code/pull/3498)**: Clarifies the Alibaba Cloud Managed Service for OpenTelemetry in ARMS with direct console entry links.
9. **[Traditional Chinese UI Support](https://github.com/QwenLM/qwen-code/pull/3569)**: Adds `zh-TW` as a selectable UI language option via `/language ui zh-TW`.
10. **[Queued Slash Commands Fix](https://github.com/QwenLM/qwen-code/pull/3523)**: Prevents queued slash commands from being injected mid-turn, deferring them properly until the app returns to idle.

## 5. Feature Request Trends
- **Local LLM Support & Offline Workflows**: A dominant trend. Users want seamless, OAuth-free connections to local models (VLLM, llama.cpp) with configurable concurrency limits for resource-constrained hardware ([Issue #3568](https://github.com/QwenLM/qwen-code/issues/3568)).
- **Multi-Provider Redundancy**: The ability to configure the same model across multiple API providers for automatic failover ([Issue #3555](https://github.com/QwenLM/qwen-code/issues/3555)).
- **Agent Refinement & Control Features**: Requests for built-in `/simplify` code-review workflows ([Issue #3565](https://github.com/QwenLM/qwen-code/issues/3565)), configurable Plan Mode directories ([Issue #3548](https://github.com/QwenLM/qwen-code/issues/3548)), and ACP HTTP MCP support ([Issue #3549](https://github.com/QwenLM/qwen-code/issues/3549)).
- **Developer Ergonomics**: CLI voice input ([Issue #3110](https://github.com/QwenLM/qwen-code/issues/3110)), SSL bypass flags for self-signed certs ([Issue #3535](https://github.com/QwenLM/qwen-code/issues/3535)), and a self-update command (`qwen --update`) ([Issue #3551](https://github.com/QwenLM/qwen-code/issues/3551)).

## 6. Developer Pain Points
- **Authentication Overrides Local Configurations**: The most persistent frustration. Users meticulously configure local endpoints, but the CLI forces Qwen OAuth authentication, completely blocking their workflow ([Issue #3384](https://github.com/QwenLM/qwen-code/issues/3384), [Issue #3532](https://github.com/QwenLM/qwen-code/issues/3532)).
- **Tool Looping & Silent Failures**: Agents getting stuck reading the first 100 lines of a file repeatedly, or tools returning no output/errors, causes wasted tokens and user intervention ([Issue #3473](https://github.com/QwenLM/qwen-code/issues/3473), [Issue #3520](https://github.com/QwenLM/qwen-code/issues/3520)).
- **UI/React Stability Issues**: Infinite React update loops when changing models or listing skills severely disrupt CLI usage ([Issue #3530](https://github.com/QwenLM/qwen-code/issues/3530), [Issue #3566](https://github.com/QwenLM/qwen-code/issues/3566)).
- **Third-Party Model Compatibility**: Non-Qwen models (like Kimi-K2.5) easily break tool-calling expectations due to strict parameter validation ([Issue #3553](https://github.com/QwenLM/qwen-code/issues/3553)).
- **Access & Quota Anxiety**: The combination of the proposed OAuth free-tier reduction and the Alibaba Cloud Coding Plan being "out of stock" leaves users feeling squeezed out of the ecosystem ([Issue #3203](https://github.com/QwenLM/qwen-code/issues/3203), [Issue #3307](https://github.com/QwenLM/qwen-code/issues/3307)).

</details>