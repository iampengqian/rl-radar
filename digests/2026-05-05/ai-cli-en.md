# AI CLI Tools Community Digest 2026-05-05

> Generated: 2026-05-04 22:17 UTC | Tools covered: 8

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

Here is the cross-tool comparison report based on the community digests from May 5, 2026.

### 1. Ecosystem Overview
The AI CLI tool ecosystem is rapidly maturing from simple terminal-based chat interfaces into autonomous, multi-modal agents integrated directly into developer workflows. As these tools adopt complex reasoning models and multi-agent architectures, they are confronting significant challenges in system reliability, cost management, and state concurrency. The current development landscape is defined by an aggressive push toward native IDE and remote environment integrations, accompanied by rigorous internal architectural refactoring to handle deep reasoning tokens and extended context windows. Meanwhile, community contributions are heavily聚焦 on hardening terminal user interfaces, improving local LLM support, and building robust guardrails for unattended background execution.

### 2. Activity Comparison
Activity metrics based on the last 24 hours of tracking:

| Tool | Maintainer | Release Status | Issues Updated | PRs Updated | Top Issue Focus |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | Anthropic | No release | 10 | 4 | Stream timeouts & CLI freezing |
| **OpenAI Codex** | OpenAI | 2 Alpha Releases | 10 | 10 | Context window limits & safety false positives |
| **Gemini CLI** | Google | 1 Nightly Build | 10 | 10 | AST-aware mapping & subagent reliability |
| **GitHub Copilot** | GitHub | v1.0.41-0 | 10 | 0 | Premium request metering & cost predictability |
| **Kimi Code** | Moonshot AI | No release | 5 | 1 | Thinking model UI clutter & Windows crashes |
| **OpenCode** | Anomaly Co | No release | 10 | 10 | Thinking model stability & provider errors |
| **Pi** | Badlogic | v0.73.0 | 10 | 10 | Local LLM support & TUI streaming lag |
| **Qwen Code** | QwenLM | 1 Nightly Build | 10 | 10 | Concurrency safety & file clobbering |

### 3. Shared Feature Directions
Several core requirements span across the entire ecosystem, driven by the shift toward deep reasoning models and autonomous agents:
*   **Cost Visibility & Control:** Across the board, users are frustrated by opaque token consumption and quota limits. *GitHub Copilot* faces backlash over per-tool-call premium metering draining quotas in a single session. *Claude Code* and *OpenAI Codex* users report unexpectedly high token consumption from reasoning models (GPT-5.5/Claude) and demand real-time context window indicators.
*   **Thinking/Reasoning Model Compatibility:** The introduction of reasoning models (DeepSeek V4, Kimi K2, OpenAI o-series) has exposed a shared architectural pain point: passing `reasoning_content` across multi-turn tool calls. *OpenCode* and *Kimi Code* are actively addressing 400 API errors and UI clutter caused by unmanaged reasoning streams.
*   **Terminal UI (TUI) Stability & Accessibility:** The shift to alt-screen buffers and complex streaming outputs is breaking fundamental terminal expectations. Users of *GitHub Copilot*, *Qwen Code*, and *Claude Code* are reporting broken scrollback, resize rendering artifacts, and broken paste functionalities (especially over SSH and on macOS/Wayland).
*   **Agentic Memory & Context Persistence:** Tools are recognizing the need for cross-session memory to avoid cold starts. *Gemini CLI* is architecting global vs. project-scoped memory routing, *Kimi Code* introduced a third-party memory plugin, and *Qwen Code* is actively optimizing auto-memory latency so it doesn't block main prompts.

### 4. Differentiation Analysis
*   **OpenAI Codex vs. Claude Code:** Codex is deeply focused on enterprise scale and data pipeline architecture, heavily refactoring its backend into a `ThreadStore` system. Claude Code is currently battling core reliability issues (stream drops, CLI freezes) and user trust erosion regarding permission-model bypasses.
*   **The Open/Niche Agnostics (OpenCode, Pi, Qwen Code):** These tools differentiate by offering provider-agnostic gateways. *Pi* has officially merged extensions for local LLM providers (Ollama, llama.cpp), whereas *OpenCode* is heavily focused on enterprise cloud integrations (AWS SSO, Azure Entra ID) and advanced architecture (removing its Hono backend). *Qwen Code* is leading in safe concurrency for multi-agent workflows via `FileReadCache`.
*   **Ecosystem Integration (GitHub Copilot vs. Gemini CLI):** Copilot leverages its native GitHub ecosystem but faces friction in cross-platform parity (breaking `.vscode/mcp.json` support). Gemini CLI is heavily invested in IDE task synchronization and AST-aware codebase mapping to reduce token waste natively.

### 5. Community Momentum & Maturity
*   **Rapid Iterators (OpenAI, Google, Qwen, Pi):** OpenAI Codex, Gemini CLI, Pi, and Qwen Code show high momentum, pushing aggressive refactors, nightly builds, and merging large community PRs. They are actively architecting for next-gen context windows (1M+ tokens) and multi-agent protocols.
*   **Stabilizing Giants (Claude Code, GitHub Copilot):** These tools show signs of growing pains typical of massive user bases. Copilot is in a post-release stabilization phase, dealing with the fallout of metering changes. Claude Code is experiencing a bottleneck in maintainer review velocity for community PRs while bogged down by persistent, highly-upvoted API reliability bugs.
*   **Emerging Players (Kimi Code, OpenCode):** These communities are highly focused on niche technical friction, such as OS-level crashes and specific model provider quirks, indicating they are transitioning from early adopters to daily-driver reliability.

### 6. Trend Signals
*   **Multi-Agent Concurrency is the Next Frontier:** The silent data loss from parallel agent writes highlighted in *Qwen Code* and *Claude Code* issues shows that multi-agent workflows are outpacing file-system safety. Expect a standardization of file locking, read-caching, and worktree isolations across all tools.
*   **Quota Exhaustion will Drive Provider Diversification:** The severe backlash over hidden API costs and fast-draining quotas (especially on $200/mo plans) will accelerate the adoption of tools like *OpenCode*, *Pi*, and *Qwen Code* that allow seamless routing to cheaper local models or alternative providers.
*   **The Rise of Standardized Agent Protocols:** The implementation of Agent Communication Protocol (ACP) in *Gemini CLI*, *OpenCode*, and *Qwen Code* signals a shift towards interoperable agents. Developers are beginning to expect CLI tools to function as standardized backend services that can plug into various IDEs (like Zed or VS Code) rather than isolated siloed applications.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** `github.com/anthropics/skills` (as of 2026-05-05)

## 1. Top Skills Ranking
*Based on the most active and attention-grabbing Pull Requests in the repository.*

1. **[Add document-typography skill](https://github.com/anthropics/skills/pull/514)** (PR #514)
   * **Status:** Open
   * **Functionality:** Prevents common typographic errors in AI-generated documents, such as orphan word wraps and widow paragraphs.
   * **Discussion Highlights:** Addresses a subtle but universal pain point where users rarely prompt for good typography but always expect it. 

2. **[Improve frontend-design skill clarity](https://github.com/anthropics/skills/pull/210)** (PR #210)
   * **Status:** Open
   * **Functionality:** Revises the existing frontend-design skill to ensure instructions are actionable and coherent for Claude within a single context window.
   * **Discussion Highlights:** Focuses on token efficiency and shifting the skill from educational theory to operational execution.

3. **[Add skill-quality-analyzer and skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** (PR #83)
   * **Status:** Open
   * **Functionality:** Introduces two meta-skills for the marketplace to evaluate other skills across five dimensions (e.g., structure, documentation) and identify security vulnerabilities.
   * **Discussion Highlights:** Highly anticipated as it provides much-needed governance and quality assurance tooling for the expanding skills ecosystem.

4. **[Add ServiceNow platform skill](https://github.com/anthropics/skills/pull/568)** (PR #568)
   * **Status:** Open
   * **Functionality:** A broad assistant for enterprise ServiceNow workflows, covering ITSM, SecOps, ITAM, and IntegrationHub.
   * **Discussion Highlights:** Represents a strong community push for deep enterprise IT service management (ITSM) integrations.

5. **[Add testing-patterns skill](https://github.com/anthropics/skills/pull/723)** (PR #723)
   * **Status:** Open
   * **Functionality:** A comprehensive testing stack guide covering the Testing Trophy model, unit testing, React component testing, and naming conventions.
   * **Discussion Highlights:** Fills a critical gap in Claude Code's native capabilities for rigorous software testing standards.

6. **[Add claude-obsidian-reporter](https://github.com/anthropics/skills/pull/664)** (PR #664)
   * **Status:** Open
   * **Functionality:** Reads Git commits to automatically write structured daily, weekly, and monthly reports directly into an Obsidian vault.
   * **Discussion Highlights:** Highlights the community's demand for bridging Claude Code with personal knowledge management (PKM) tools.

## 2. Community Demand Trends
*Distilled from highly active GitHub Issues, here are the most anticipated Skill directions and ecosystem needs:*

* **Enterprise & Team Workflow Collaboration:** Users are desperately requesting native org-wide skill sharing ([Issue #228](https://github.com/anthropics/skills/issues/228)) to avoid clunky manual `.skill` file sharing via Slack/Teams.
* **Security & Trust Verification:** The community is concerned about the `anthropic/` namespace being spoofed by community creators ([Issue #492](https://github.com/anthropics/skills/issues/492)). There is a high demand for "agent governance" and verified, safe skill boundaries.
* **Reliability & Fundamental Tooling:** Correcting basic functionality bugs is a top priority, specifically resolving duplicate context pollution from identical plugins ([Issue #189](https://github.com/anthropics/skills/issues/189)) and fixing non-existent skill trigger rates ([Issue #556](https://github.com/anthropics/skills/issues/556)).
* **MCP (Model Context Protocol) Integration:** Users want Skills automatically exposed as MCPs to standardize the API interfaces of AI software ([Issue #16](https://github.com/anthropics/skills/issues/16)).
* **Cloud & API Agnosticism:** Strong requests for documentation on how to deploy Skills seamlessly via AWS Bedrock ([Issue #29](https://github.com/anthropics/skills/issues/29)) and enterprise SSO paths that bypass the need for static `ANTHROPIC_API_KEY`s ([Issue #532](https://github.com/anthropics/skills/issues/532)).

## 3. High-Potential Pending Skills
*Active PRs representing high-value functionalities likely to land in the repository soon:*

* **[Add ODT skill](https://github.com/anthropics/skills/pull/486)** (PR #486): Brings native creation, parsing, and template filling for OpenDocument Formats (.odt, .ods), fulfilling open-source ISO standard document needs.
* **[Fix DOCX tracked change w:id collision](https://github.com/anthropics/skills/pull/541)** (PR #541): Solves a critical OOXML document corruption bug when adding tracked changes to documents with existing bookmarks.
* **[Add sensory skill](https://github.com/anthropics/skills/pull/806)** (PR #806): Replaces screenshot-based computer use with native macOS automation via AppleScript (`osascript`), featuring a two-tier permission system.
* **[Added AppDeploy skill](https://github.com/anthropics/skills/pull/360)** (PR #360): Enables Claude to directly deploy and manage full-stack web apps to a public URL.
* **[Fix YAML special characters in skill-creator](https://github.com/anthropics/skills/pull/539)** (PR #539): A critical meta-tooling fix that prevents silent parsing failures when validating new community skills.

## 4. Skills Ecosystem Insight
**The community's most concentrated demand is transitioning from single-use creative generation skills toward robust enterprise-grade operational tooling—specifically focusing on internal sharing capabilities, strict security namespace governance, and automated CI/CD or PKM (Personal Knowledge Management) workflows.**

---

# Claude Code Community Digest — 2026-05-05

## 1. Today's Highlights

No new releases shipped in the past 24 hours, but the community remains highly active around stability and cost concerns. Two persistent API connectivity issues—stream idle timeouts (#46987, 178 comments) and session freezing (#26224, 99 comments)—continue to dominate discussion, together accumulating 275 👍. Meanwhile, fresh bug reports around Auto Mode hook interactions, subagent worktree isolation, and desktop app UI failures signal growing pains as the platform expands beyond its core CLI experience.

---

## 2. Releases

No new releases in the past 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| 1 | [#46987 — Stream idle timeout / partial response](https://github.com/anthropics/claude-code/issues/46987) | A top-voted bug (👍158) causing API streams to drop mid-response on macOS. Labeled `duplicate` suggesting a known root cause, yet unresolved for nearly a month. | 178 comments; users report multiple occurrences daily; significant workflow disruption. |
| 2 | [#26224 — CLI hanging/freezing for 5–20+ minutes](https://github.com/anthropics/claude-code/issues/26224) | Core reliability issue where Claude Code becomes unresponsive on heaps of prompts. Marked `[URGENT!!!]` by the author. | 99 comments, 👍117; users sharing workarounds; ongoing since Feb 2026. |
| 3 | [#15942 — Visual Studio 2026 integration](https://github.com/anthropics/claude-code/issues/15942) | Highest-voted feature request (👍266) requesting IDE integration beyond VS Code. Signals strong enterprise demand. | 98 comments; active discussion about extension architecture. |
| 4 | [#9348 — "Allow all edits" setting not respected](https://github.com/anthropics/claude-code/issues/9348) | Permission-mode regression where a trusted setting is ignored mid-session, forcing repeated approvals. Labeled `has repro` and `oncall`. | 53 comments, 👍50; impacts power users who rely on unattended operation. |
| 5 | [#45775 — Gmail MCP `create_draft` missing `threadId`](https://github.com/anthropics/claude-code/issues/45775) | MCP integration regression in claude.ai's Gmail connector; drafts can't be threaded. | 30 comments, 👍23; affects users relying on email automation workflows. |
| 6 | [#6275 — Text loss on Up Arrow key press](https://github.com/anthropics/claude-code/issues/6275) | Long-standing TUI bug: pressing Up Arrow while composing a prompt instantly erases all typed text. | 20 comments, 👍34; "super annoying" for users writing long prompts; open since Aug 2025. |
| 7 | [#52979 — Excessive token usage (~20k–30k) for trivial prompts](https://github.com/anthropics/claude-code/issues/52979) | Cost-area bug where simple prompts consume unexpectedly high tokens, impacting subscription budgets. | 9 comments; resonates with broader cost concerns across multiple issues. |
| 8 | [#55523 — Auto Mode silently weakened by hook auto-blocks](https://github.com/anthropics/claude-code/issues/55523) | New issue (filed May 2) revealing that hooks can undermine Auto Mode's autonomy, making it functionally equivalent to "Accept Edits On." | 4 comments; important architectural concern for agent reliability. |
| 9 | [#56137 — `isolation: "worktree"` doesn't isolate subagent writes](https://github.com/anthropics/claude-code/issues/56137) | Freshly filed (May 4); the worktree isolation mode for subagents doesn't prevent writes to the main working tree—defeating the isolation guarantee. | 1 comment; early but critical for multi-agent workflows. |
| 10 | [#34566 — Oversized images brick sessions silently](https://github.com/anthropics/claude-code/issues/56137) | Images exceeding size limits are passed into context without validation, causing irrecoverable session failures. | 12 comments; labeled `has repro`; data-loss–adjacent severity. |

---

## 4. Key PR Progress

Only 4 PRs saw updates in the past 24 hours, reflecting the no-release quiet period:

| PR | Title | Status | Summary |
|----|-------|--------|---------|
| [#55864](https://github.com/anthropics/claude-code/pull/55864) | Session-persist plugin (client-side state preservation) | **Open** | Addresses the pain point of losing all context when closing a window mid-task. Proposes client-side session snapshots as a stopgap while server-side persistence (#55860) is developed. |
| [#55832](https://github.com/anthropics/claude-code/pull/55832) | Remove stray content from plugin-validator.md | **Open** | Cleanup PR removing accidental conversational text from documentation. |
| [#33007](https://github.com/anthropics/claude-code/pull/33007) | Fix hookify field mapping for `stop` and `prompt` events | **Closed** | Corrected a bug where `Rule.from_dict()` mis-routed stop/prompt event patterns to the wrong field. Fixes #32153. |
| [#33006](https://github.com/anthropics/claude-code/pull/33006) | Align code-review plugin README with actual workflow | **Closed** | Documentation fix syncing the README with the current validation-based code-review architecture. Fixes #32459. |

> **Note:** With only 4 PRs updated and 2 already closed, contribution velocity appears low. The open PRs are community-contributed and await maintainer review.

---

## 5. Feature Request Trends

Three clear directions emerge from recent issues:

1. **IDE Expansion Beyond VS Code** — VS 2026 integration (#15942, 👍266) is the single most-upvoted issue. Users want Claude Code wherever they code, not just in VS Code and the terminal.

2. **Cost Visibility & Control** — Multiple requests converge on giving developers better budget awareness:
   - Expose rate-limit percentages to `statusLine` command (#56138)
   - Reduce excessive token consumption for trivial prompts (#52979)
   - Add caching frontmatter for subagents to cut redundant API calls (#56134)
   - Confusion around monthly usage limits depleting unexpectedly (#54635)

3. **Session & State Resilience** — Users want sessions that survive interruptions:
   - Session persistence plugin (#55864, PR)
   - Date/time injection into prompts for temporal awareness (#32913)
   - Stable JSONL schema documentation for external tool integration (#53516)
   - TUI diff visibility controls (#37951)

4. **Agent Isolation & Autonomy** — As multi-agent workflows mature, developers need reliable sandboxing:
   - Worktree isolation that actually isolates (#56137)
   - Auto Mode that can't be silently weakened by hooks (#55523)

---

## 6. Developer Pain Points

**API Reliability is the #1 frustration.** The two most-engaged issues are stream timeouts (#46987) and CLI freezing (#26224), together representing ~275 👍 and 277 comments. ECONNRESET errors (#56017, #56140) compound this—users report failures burning through all 10 retry attempts. These aren't edge cases; they affect daily development workflows.

**Cost unpredictability ranks second.** Multiple issues (#52979, #54635, #56134) describe scenarios where token usage or subscription limits behave unexpectedly. Users on $200/month plans report hitting limits after just 52 minutes of use. The inability to monitor rate-limit consumption programmatically (#56138) exacerbates anxiety.

**TUI polish gaps persist.** Long-standing UX bugs—text loss on Up Arrow (#6275, open since Aug 2025), scrollback duplication on resize (#46834), broken paste on Linux (#55575)—suggest the terminal interface needs stabilization as the user base grows beyond early adopters.

**Windows support feels second-class.** A disproportionate share of recent issues originates from Windows users: unresponsive send buttons (#56123), session rename regressions (#40781), mic transcription disappearing (#55349), and markdown auto-linking false positives (#53602).

**Permission model erosion undermines trust.** The "Allow all edits" regression (#9348, 👍50) and Auto Mode hook bypass (#55523) both describe scenarios where user-configured trust boundaries are silently ignored—precisely the kind of behavior that erodes confidence in agentic tooling.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-05

## 1. Today's Highlights
Two new Rust core alpha releases (`0.129.0-alpha.4` and `0.129.0-alpha.5`) dropped within 24 hours, signaling aggressive iteration on the underlying engine. On the issue tracker, GPT-5.5’s 400K context limit and aggressive safety false positives dominated discussions, while internally the team pushed nearly 20 PRs to refactor session history into a new `ThreadStore` and overhaul analytics/tool-event pipelines.

## 2. Releases
- **rust-v0.129.0-alpha.5** — Incremental alpha following alpha.4; no detailed changelog published yet. ([Release](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.5))
- **rust-v0.129.0-alpha.4** — Prepares groundwork for the upcoming 0.129 stable branch. ([Release](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.4))

## 3. Hot Issues

| # | Issue | Why it matters |
|---|-------|----------------|
| 1 | [#19464 — Support 1M token context for GPT-5.5](https://github.com/openai/codex/issues/19464) | Top-voted issue (152 👍, 119 comments). Users argue the 400K window in Codex is artificially lower than the API’s 1M, limiting large codebase analysis. |
| 2 | [#20161 — Phone number verification doesn't work](https://github.com/openai/codex/issues/20161) | Auth flow is broken for SSO cross-device login (62 comments). Blocking users from accessing Codex entirely. |
| 3 | [#11023 — Codex desktop app for Linux](https://github.com/openai/codex/issues/11023) | Long-standing request (114 👍) reignited by macOS thermal issues; community offers to maintain Flatpak/RPM packages. |
| 4 | [#17615 — "I cannot assist with that request" false positive (Azure)](https://github.com/openai/codex/issues/17615) | Safety check overreach on legitimate coding tasks; now closed but highlights ongoing calibration problems. |
| 5 | [#8259 — Format Markdown tables for human readability](https://github.com/openai/codex/issues/8259) | High-impact TUI UX issue (103 👍); misaligned whitespace makes table output unreadable in terminal. |
| 6 | [#20864 — Desktop App laggy from scanning all session rollout files](https://github.com/openai/codex/issues/20864) | Performance regression where the app reads every JSONL in `~/.codex/sessions` instead of an index, causing UI freezes. |
| 7 | [#19230 — Revert: Fast service tier should not be default](https://github.com/openai/codex/issues/19230) | Users report unexpected routing to "Fast" tier after #19053, degrading quality for enterprise users who didn't opt in. |
| 8 | [#19403 — False positive cyber-safety flag on public docs research](https://github.com/openai/codex/issues/19403) | Passive webhosting documentation research triggered security flags; adds to growing chorus on safety-check calibration. |
| 9 | [#21050 — Weekly quota draining insanely fast](https://github.com/openai/codex/issues/21050) | Pro ($200/mo) users report GPT-5.5 quota depletion far exceeding expected usage, possibly tied to context-window sizing. |
| 10 | [#20987 — Memory enabled in config but runtime blocks saving learnings](https://github.com/openai/codex/issues/20987) | Read-only memory instructions are injected at runtime despite user config, preventing the agent from persisting learnings. |

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#20575 — Migrate app-server thread history to ThreadStore](https://github.com/openai/codex/pull/20575) | Moves token-usage replay, rollback, and review reads off direct JSONL parsing into `ThreadStore`, enabling remote store backends. |
| 2 | [#20577 — Use ThreadStore history for core review forks](https://github.com/openai/codex/pull/20577) | Companion to #20575; ensures fork/review paths also use store-backed history instead of raw rollout files. |
| 3 | [#20647 — Route process tools to selected environments](https://github.com/openai/codex/pull/20647) | Adds model-facing environment targeting for shell tools when multiple environments are exposed in a turn. |
| 4 | [#21059 — Rename agent identity login to access token](https://github.com/openai/codex/pull/21059) | Exposes `CODEX_ACCESS_TOKEN` env var and `codex login --with-access-token`, hiding internal "Agent Identity" terminology. |
| 5 | [#21069 — Spill large hook outputs from context](https://github.com/openai/codex/pull/21069) | Caps hook-injected content (e.g., `additionalContext`, `Stop` prompts) to prevent unbounded context bloating. |
| 6 | [#21085 — Use app/list for TUI app catalog](https://github.com/openai/codex/pull/21085) | TUI catalog now loaded via backend `app/list` API with live update notifications, removing client-side assembly. |
| 7 | [#21089 — Fix fork --last cwd filtering](https://github.com/openai/codex/pull/21089) | Aligns `codex fork --last` with `resume --last` by sharing a cwd-scope helper for session lookup. |
| 8 | [#21090 — Dedupe fallback model metadata warnings](https://github.com/openai/codex/pull/21090) | Stops repeating per-turn fallback metadata warnings, tightening provider-prefix lookup logic. |
| 9 | [#20715 — Make realtime sideband startup async](https://github.com/openai/codex/pull/20715) | Moves WebRTC sideband WS join off the voice-start critical path, reducing call setup latency. |
| 10 | [#17089 / #17090 — Tool item event schemas & lifecycle emission](https://github.com/openai/codex/pull/17089) | Introduces stable typed analytics payloads for tool usage and wires them into the app-server item lifecycle reducer. |

## 5. Feature Request Trends
1. **Extended context windows** — The single most-upvoted theme: users want Codex to expose the full GPT-5.5 1M-token context, not the capped 400K.
2. **Linux desktop support** — Sustained demand for a native Linux app, with community members volunteering to maintain Flatpak/RPM distributions.
3. **Richer TUI/CLI input** — Shift+Enter for multi-line prompts, interactive structured questionnaires (`ask_user_question`), and better Markdown table rendering.
4. **Unified session history** — CLI sessions should appear in the desktop app's history as first-class threads, closing the gap between the two surfaces.
5. **Hooks & subagent observability** — Developers want hook events that distinguish main agent vs. subagent sessions for better CI/CD integration.

## 6. Developer Pain Points
- **Safety-check overreach** — Multiple false-positive reports (cyber-security flags on public docs, legal text collection) are eroding trust in the guardrail system, especially for enterprise users on Azure.
- **Quota and rate-limit opacity** — Several issues cite unexpectedly fast quota drain on GPT-5.5, with no clear telemetry or UI to understand consumption.
- **Desktop app performance regressions** — Session rollout scanning (#20864) and memory leaks >10GB (#19381) on Windows suggest the app needs better resource management.
- **Fragmented auth flows** — Phone verification loops, missing model pickers after reinstalls, and inconsistent SSO behavior indicate the authentication layer needs stabilization.
- **Config vs. runtime contradictions** — Users enable features (memory, service tier) in config only to have runtime defaults override them, leading to confusion and wasted debugging time.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-05

## 1. Today's Highlights
A new nightly build (`v0.42.0-nightly`) was shipped, featuring significant modularization of the Agent Communication Protocol (ACP) client and documentation workflow improvements. The community remains highly active in hardening the core agent loop, with new PRs addressing chat history compression usability, IDE task update race conditions, and configuration persistence regressions. Meanwhile, top-voted issues highlight a strong demand for AST-aware codebase mapping, better subagent reliability, and proactive memory management.

## 2. Releases
*   **v0.42.0-nightly.20260504.g37edd1d4d**
    *   **Documentation:** Updated workflows with workspace trust ([PR #26150](https://github.com/google-gemini/gemini-cli/pull/26150)).
    *   **Architecture:** Refactored the monolithic `acpClient` into specialized, modular files ([PR #26143](https://github.com/google-gemini/gemini-cli/pull/26143)).
    *   **Testing:** General test fixes applied.

## 3. Hot Issues
1.  **[OPEN] Subagent Masks MAX_TURNS Failure as Success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))**
    *   *Why it matters:* A critical reliability bug where the `codebase_investigator` subagent hits its turn limit and reports `status: "success"`, hiding the fact that it was interrupted and failed to complete its analysis. (👍 2)
2.  **[OPEN] AST-Aware Codebase Mapping & Search ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))**
    *   *Why it matters:* An Epic investigating AST-aware tools to allow precise method-bound reads and reduce token waste. This is a highly anticipated architectural upgrade for complex codebases. (👍 1)
3.  **[OPEN] Shell Command Execution Hangs ("Waiting input") ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))**
    *   *Why it matters:* The CLI frequently hangs after executing simple shell commands, forcing users to manually intervene. This is currently the highest-upvoted user-facing bug. (👍 3)
4.  **[CLOSED] Request for `/bug-memory` Command ([#25337](https://github.com/google-gemini/gemini-cli/issues/25337))**
    *   *Why it matters:* Users previously had to jump through Chrome DevTools hoops to report memory leaks. This friction led to a successful feature request (now implemented in recent PRs) for automated heap snapshots.
5.  **[OPEN] Permission Prompts Loop on Same Files ([#24916](https://github.com/google-gemini/gemini-cli/issues/24916))**
    *   *Why it matters:* A security/workflow annoyance where "allow for all future sessions" fails to persist, causing the CLI to repeatedly prompt for file access.
6.  **[OPEN] Agent Should Block/Discourage Destructive Behavior ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672))**
    *   *Why it matters:* Prevents the model from running dangerous commands (e.g., `git reset --force` or raw DB mutations) when safer alternatives exist. (👍 1)
7.  **[OPEN] Proactive Memory Writes via System Prompt ([#22809](https://github.com/google-gemini/gemini-cli/issues/22809))**
    *   *Why it matters:* The agent currently doesn't know *when* to save context. This issue tracks tuning the prompt to autonomously remember user preferences and corrections. (👍 1)
8.  **[OPEN] Memory Routing: Global vs. Project Scope ([#22819](https://github.com/google-gemini/gemini-cli/issues/22819))**
    *   *Why it matters:* Proposes a structured memory hierarchy (e.g., personal preferences in `~/.gemini/`, project-specific context in `.gemini/`) to prevent context bleed. (👍 2)
9.  **[OPEN] Gemini CLI 400 Error with >128 Tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))**
    *   *Why it matters:* Users extending the CLI hit a hard API limit. The agent needs better dynamic scoping/filtering of enabled tools.
10. **[OPEN] Model Creates Tmp Scripts in Random Spots ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571))**
    *   *Why it matters:* When restricted to shell execution, the agent litters the workspace with edit scripts, causing significant cleanup overhead for the developer.

## 4. Key PR Progress
1.  **[OPEN] Fix Configuration Persistence Regressions ([#26464](https://github.com/google-gemini/gemini-cli/pull/26464))**
    *   Fixes a systemic bug where `settings.json` silently disappears or reverts to defaults during an active session.
2.  **[OPEN] Queue Messages During Compression ([#26467](https://github.com/google-gemini/gemini-cli/pull/26467))**
    *   Introduces an `isCompressing` state so users can continue typing and queue messages while the CLI compresses chat history, eliminating UI freezes.
3.  **[OPEN] Fix Race Condition in IDE Task Updates ([#26469](https://github.com/google-gemini/gemini-cli/pull/26469))**
    *   Resolves a regression where the connected IDE misses task updates due to a validation race condition.
4.  **[OPEN] Add `/bug-memory` Command & Auto Heap Snapshot ([#25639](https://github.com/google-gemini/gemini-cli/pull/25639))**
    *   Implements the highly requested `/bug-memory` command, auto-capturing V8 heap snapshots when RSS exceeds 2GB to easily debug memory leaks.
5.  **[OPEN] Support @-Mentioning Files in AskUser Dialog ([#26465](https://github.com/google-gemini/gemini-cli/pull/26465))**
    *   Adds an `AutocompleteTextInput` component, allowing users to seamlessly attach files via `@` inside custom user prompt dialogs.
6.  **[OPEN] Fix Home Directory Warning Logic ([#25890](https://github.com/google-gemini/gemini-cli/pull/25890))**
    *   Resolves an annoyance where the "running in home directory" warning triggered incorrectly when `GEMINI_CLI_HOME` was configured.
7.  **[OPEN] Randomize Sandbox Container Names ([#26014](https://github.com/google-gemini/gemini-cli/pull/26014))**
    *   Replaces the sequential container naming allocator with a 12-hex random suffix, fixing race conditions when launching two CLIs simultaneously.
8.  **[OPEN] Handle 'forever' as a Session Retention Period ([#24179](https://github.com/google-gemini/gemini-cli/pull/24179))**
    *   Gracefully handles the string "forever" in session cleanup settings, preventing the CLI from throwing an "Invalid retention period format" error.
9.  **[OPEN] Build and Attach Unsigned macOS Binaries ([#26462](https://github.com/google-gemini/gemini-cli/pull/26462))**
    *   Updates the CI release workflows to automatically build and attach `x64` and `arm64` macOS binaries to GitHub releases.
10. **[CLOSED] Filter Unsupported Multimodal Types from Tool Responses ([#26352](https://github.com/google-gemini/gemini-cli/pull/26352))**
    *   Prevents `400 Bad Request` API errors by automatically stripping binary audio/video data from `functionResponse` payloads.

## 5. Feature Request Trends
*   **Advanced Codebase Awareness:** Strong demand for AST-level code mapping to reduce token waste and improve codebase navigation, moving beyond basic text search ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
*   **Smarter Agent Memory:** Users want the agent to autonomously route context between global and project scopes, and to proactively remember user preferences without manual intervention ([#22809](https://github.com/google-gemini/gemini-cli/issues/22809), [#22819](https://github.com/google-gemini/gemini-cli/issues/22819)).
*   **Guardrails and Safety:** Calls for the agent to inherently recognize and avoid destructive Git or database operations, favoring safer alternatives ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).
*   **Improved Terminal UI Accessibility:** Better handling of streaming table rendering for screen readers and SSH sessions ([#24675](https://github.com/google-gemini/gemini-cli/issues/24675), [#24546](https://github.com/google-gemini/gemini-cli/issues/24546)).

## 6. Developer Pain Points
*   **Repetitive Permission Prompts:** The CLI's failure to remember "allow for all sessions" forces users to repeatedly approve the same files, breaking flow state ([#24916](https://github.com/google-gemini/gemini-cli/issues/24916)).
*   **Stuck Shell Executions:** Processes hanging after completion and showing an erroneous "Awaiting user input" state is a major productivity blocker ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)).
*   **Workspace Litter:** Users restricting the model to shell execution often find their directories cluttered with temporary scripts ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).
*   **Hidden Subagent Failures:** Subagents hitting maximum turn limits silently report success, giving developers false confidence in incomplete results ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)).
*   **SSH/Environment Rendering Bugs:** Scrambled text and broken table layouts when running over SSH or in alternate screen buffers make the CLI unusable in remote environments ([#24202](https://github.com/google-gemini/gemini-cli/issues/24202), [#25218](https://github.com/google-gemini/gemini-cli/issues/25218)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-05

## 1. Today's Highlights
GitHub Copilot CLI shipped version **v1.0.41-0**, headlined by a new `--attachment` flag for non-interactive mode and much-improved reliability for file edits. The community remains highly active around **premium request metering**—a closed issue revealing that a single session can consume 80–100 requests continues to draw upvotes and discussion. Meanwhile, a cluster of new issues highlights ongoing friction with **MCP configuration**, **terminal rendering on macOS**, and **model access restrictions** in enterprise environments.

---

## 2. Releases

**v1.0.41-0**
- **Added:** `--attachment` flag in non-interactive (`-p`/`--prompt`) mode, allowing images and native documents to be attached to the initial prompt.
- **Improved:** Reliability of file edits via better recovery from fuzzy or misaligned edit blocks.
- **Fixed:** `@`-mention completion now works correctly for `./` relative paths.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [#2591](https://github.com/github/copilot-cli/issues/2591) — *Infinite premium requests consumed per tool invocation* | Closed but with 31 comments and 13 👍; reveals that a single agent session can burn 80–100 premium requests due to per-tool-call metering. Directly impacts cost predictability for all users. |
| 2 | [#3101](https://github.com/github/copilot-cli/issues/3101) — *Failed to load models: access denied by Copilot policy* | Enterprise users on v1.0.40 are blocked from `/model` by policy denial, echoing an earlier issue. Two 👍 already. |
| 3 | [#3019](https://github.com/github/copilot-cli/issues/3019) — *Breaking Change: .vscode/mcp.json no longer supported* | Removing shared MCP config between VS Code and CLI forces teams to maintain duplicate files. Three comments, two 👍. |
| 4 | [#1799](https://github.com/github/copilot-cli/issues/1799) — *How to turn off alt-screen views?* | The alt-screen rendering introduced recently has caused multiple regressions; users want a toggle. Nine comments, four 👍. |
| 5 | [#953](https://github.com/github/copilot-cli/issues/953) — *Over excessive permissions request* | OAuth scope asks for R/W on everything; users want repo-level granularity. Seven comments, three 👍, still open since Jan. |
| 6 | [#2052](https://github.com/github/copilot-cli/issues/2052) — *Persistent token/context usage indicator* | Requests an always-visible status bar showing context window utilization. Eleven 👍—the most-upvoted feature request updated today. |
| 7 | [#3104](https://github.com/github/copilot-cli/issues/3104) — *macOS: Ctrl+V / Cmd+V does not paste clipboard images* | Image paste works on Windows but fails on macOS due to terminal emulator limitations. Companion issue [#3105](https://github.com/github/copilot-cli/issues/3105) covers broken backspace behavior on image tokens. |
| 8 | [#3098](https://github.com/github/copilot-cli/issues/3098) — *PowerShell `$home` variable footgun* | Case-insensitive `$home` can overwrite the user's real home directory during agent-authored cleanup scripts. Critical safety guardrail request. |
| 9 | [#2693](https://github.com/github/copilot-cli/issues/2693) — *`2>/dev/null` still requires permission* | Harmless shell redirections trigger permission prompts, disrupting agent flow. One 👍, still unresolved since April. |
| 10 | [#3106](https://github.com/github/copilot-cli/issues/3106) — *Task tool hot-reload gap for new agents* | Adding `.agent.md` files mid-conversation doesn't update the `task` tool's enum, forcing a session restart. |

---

## 4. Key PR Progress

No pull requests were created or updated in the last 24 hours. This likely reflects a post-release stabilization window following the v1.0.41-0 ship.

---

## 5. Feature Request Trends

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Cost observability & controls** | [#2591](https://github.com/github/copilot-cli/issues/2591), [#2052](https://github.com/github/copilot-cli/issues/2052), [#3111](https://github.com/github/copilot-cli/issues/3111) | Users want real-time token usage, request counters, and agent thinking timers to manage premium spend. |
| **Per-repo & per-project MCP config** | [#2528](https://github.com/github/copilot-cli/issues/2528), [#3019](https://github.com/github/copilot-cli/issues/3019), [#3100](https://github.com/github/copilot-cli/issues/3100) | Strong demand for `.github/mcp.json` or restored `.vscode/mcp.json` parity to avoid duplicating server definitions. |
| **Finer-grained permissions & security** | [#953](https://github.com/github/copilot-cli/issues/953), [#1607](https://github.com/github/copilot-cli/issues/1607), [#2693](https://github.com/github/copilot-cli/issues/2693), [#3098](https://github.com/github/copilot-cli/issues/3098) | Community wants repo-scoped OAuth, session-level tool permission primitives, and guardrails against destructive shell commands. |
| **Headless / non-interactive improvements** | [#3109](https://github.com/github/copilot-cli/issues/3109), [#2665](https://github.com/github/copilot-cli/issues/2665) | Listing agents outside a session and loading extensions in `-p`/`-i` mode are recurring asks for CI/CD pipelines. |
| **Model flexibility** | [#2758](https://github.com/github/copilot-cli/issues/2758), [#2524](https://github.com/github/copilot-cli/issues/2524), [#3099](https://github.com/github/copilot-cli/issues/3099) | Users want sub-agents to honor model preferences, stable model persistence across sessions, and broader model availability for personal accounts. |

---

## 6. Developer Pain Points

1. **Premium request metering is opaque and disproportionate.** The single-session / per-tool-call counting model (#2591, #1770) means a quick interaction can exhaust a user's entire quota, with no upfront warning or visible counter. This is the top source of frustration.

2. **MCP configuration fragmentation.** Breaking `.vscode/mcp.json` support (#3019) and lacking per-repo MCP files (#2528) force teams to maintain divergent configs for IDE vs. CLI workflows, undermining the "one toolchain" promise.

3. **Alt-screen terminal rendering regressions.** The switch to alternate screen buffers breaks scrollback (#3110) and disrupts established workflows (#1799), with no configuration toggle to revert.

4. **macOS input parity.** Image paste (#3104) and token backspace behavior (#3105) lag behind Windows, reducing the usefulness of the new `--attachment` feature for a large portion of the developer base.

5. **Permission prompts for benign commands.** Shell tools that include redirections like `2>/dev/null` or harmless reads still require manual approval (#2693), slowing down autonomous agent workflows and eroding trust in `--allow-all` modes.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-05

## 1. Today's Highlights
No new official releases were published today, but the community saw a surge in high-quality feature contributions and plugin ecosystem growth. The standout item is a community PR implementing a highly-requested toggle for hiding thinking model output, alongside the introduction of **kimi-mneme**, a new third-party plugin enabling persistent cross-session memory. UX improvements around keybindings and Web UI status indicators also dominated discussions.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues
*   **[#2160 [bug] Inexplicable crash during operation](https://github.com/MoonshotAI/kimi-cli/issues/2160)**
    *   **Why it matters:** Users on Windows (NT 10.0.26200.0 x64) running v1.41.0 are reporting frequent, unexplained CLI crashes during active sessions.
    *   **Community Reaction:** 3 comments so far, with users currently sharing environment details to isolate the crash trigger.
*   **[#1632 Feature Request: Option to hide thinking content](https://github.com/MoonshotAI/kimi-cli/issues/1632)**
    *   **Why it matters:** Using reasoning models like `kimi-k2-thinking-turbo` clutters the terminal with verbose "Thinking..." output. Users want the reasoning quality without the UI noise.
    *   **Community Reaction:** Highly requested (2 thumbs up). This issue has already prompted a community PR (see below).
*   **[#1585 Feature Request: Customizable keybinding for inserting newlines](https://github.com/MoonshotAI/kimi-cli/issues/1585)**
    *   **Why it matters:** The current default newline shortcut (`Ctrl+J`) is counter-intuitive for many developers. Users are requesting standard `Shift+Enter` support.
    *   **Community Reaction:** Strong frustration expressed regarding the current UX ("稀烂的换行模式"), with 1 thumbs up and active discussion on keybinding mapping.
*   **[#2161 Plugin Showcase: kimi-mneme](https://github.com/MoonshotAI/kimi-cli/issues/2161)**
    *   **Why it matters:** Introduces a third-party plugin solving the "blank slate" problem by enabling persistent cross-session memory.
    *   **Community Reaction:** Positive initial reception (1 comment), marking a maturing step for the Kimi CLI plugin ecosystem.
*   **[#2159 Show yolo & afk mode status in Web UI](https://github.com/MoonshotAI/kimi-cli/issues/2159)**
    *   **Why it matters:** Users utilizing automated/yolo modes cannot easily see if these states are active from the Web UI, leading to potential operational errors.

*(Note: 5 issues were updated in the last 24 hours; all are included above).*

## 4. Key PR Progress
*   **[#2158 feat(ui): add Ctrl+T toggle for thinking content visibility](https://github.com/MoonshotAI/kimi-cli/pull/2158)**
    *   **Description:** Directly addresses Issue #1632. Adds a runtime toggle (`Ctrl+T`) to hide or show the real-time thinking stream from reasoning models. By default, the verbose thinking output is hidden, significantly cleaning up the terminal UI during complex tasks.

*(Note: 1 PR was updated in the last 24 hours; it is included above).*

## 5. Feature Request Trends
Based on recent issue tracker activity, community feature requests are heavily clustered around three areas:
1.  **Thinking Model UX/UI Management:** As Kimi rolls out advanced reasoning models, developers need finer control over the terminal output, specifically the ability to suppress verbose reasoning traces.
2.  **Terminal Input Customization:** Developers desire standard, configurable terminal interactions (e.g., remapping newline inputs to `Shift+Enter`), indicating that default Emacs/vim-style bindings are a friction point.
3.  **Web UI State Visibility:** Requests to surface internal CLI states (like YOLO or AFK modes) to the Web UI, showing a growing user base that relies on the graphical interface for monitoring unattended CLI tasks.

## 6. Developer Pain Points
*   **Windows Stability:** Unprompted CLI crashes on modern Windows architectures (Issue #2160) remain a critical blocker for a significant portion of the dev base.
*   **Interrupted Workflows via Keybindings:** The default newline input method is heavily criticized for breaking developer flow. Users are struggling to perform basic multi-line edits intuitively.
*   **Context Loss Between Sessions:** The need for a third-party plugin (kimi-mneme) to maintain context highlights that the native CLI currently lacks built-in memory persistence, forcing users to re-establish context at the start of every session.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-05

## 1. Today's Highlights
The OpenCode community is actively battling reliability issues with newer "thinking" models, specifically around how the platform handles `reasoning_content` across multi-turn conversations. Provider support remains a hot topic, with multiple high-traffic bugs reported against Kimi K2.5/K2.6 and DeepSeek V4 via the OpenCode Go subscription. Behind the scenes, contributors are making significant architectural strides, notably exploring the removal of the Hono backend and implementing crucial fixes for config precedence and AWS SSO session management.

## 2. Releases
No new official releases were recorded in the last 24 hours. The latest tagged version remains **v1.14.33**, which community members are actively testing against recent bug reports.

## 3. Hot Issues
1. **Always stuck at "Preparing write..."** ([#11112](https://github.com/anomalyco/opencode/issues/11112)): A highly upvoted (👍 27) and heavily commented (62 comments) ongoing issue where tool execution gets trapped in an infinite abort/retry loop during write operations.
2. **OpenCode Go + Kimi K2.6/K2.5 returns 'Provider returned error'** ([#23887](https://github.com/anomalyco/opencode/issues/23887)): A persistent CLI error blocking Kimi models on v1.14.20+, gathering 37 comments as users try to isolate the provider vs. client-side cause.
3. **Gemini 3 Pro function calling fails - missing `thoughtSignature` support** ([#4832](https://github.com/anomalyco/opencode/issues/4832)): A recently closed issue highlighting Google Gemini 3 Pro's strict new requirements for `thoughtSignature` during tool use.
4. **DeepSeek V4: reasoning_content 400 error persists on v1.14.31** ([#25311](https://github.com/anomalyco/opencode/issues/25311)): Users note that fixes exist in unmerged PRs, but multi-turn conversations still fail reliably due to missing reasoning parameters.
5. **DeepSeek thinking mode: reasoning_content not passed back for tool call turns** ([#24722](https://github.com/anomalyco/opencode/issues/24722)): Directly related to the above, this issue details how omitting `reasoning_content` in subsequent tool calls breaks the DeepSeek API.
6. **Very frequent errors when using OpenAI** ([#23944](https://github.com/anomalyco/opencode/issues/23944)): Users utilizing `openai/gpt-5.4` are experiencing high volumes of `server_error` responses, causing severe workflow disruptions.
7. **Entra Authentication for MCP doesn't work** ([#12308](https://github.com/anomalyco/opencode/issues/12308): Enterprise users are blocked from using Entra ID for MCP servers due to resource URI mismatches during the authorization request.
8. **tool_choice: 'required' incompatible with thinking-enabled models** ([#15226](https://github.com/anomalyco/opencode/issues/15226)): An architectural clash where OpenCode's strict use of `toolChoice: "required"` for structured outputs breaks reasoning-focused models.
9. **ACP over WebSocket for remote/network access** ([#13388](https://github.com/anomalyco/opencode/issues/13388)): A popular feature request asking for the Agent Client Protocol (ACP) to be exposed over WebSockets for better remote development experiences.
10. **Local ollama missing under providers in GUI** ([#25125](https://github.com/anomalyco/opencode/issues/25125)): New users are frustrated by the lack of a GUI flow to connect local Ollama instances without resorting to manual CLI configuration.

## 4. Key PR Progress
1. **[Research] Delete Hono backend** ([PR #25667](https://github.com/anomalyco/opencode/pull/25667)): A massive architectural spike by @kitlangton exploring the removal of Hono, resulting in ~9,009 lines deleted. Vital for long-term backend simplification.
2. **Fix: Project `.opencode/` config now overrides global `~/.opencode`** ([PR #25121](https://github.com/anomalyco/opencode/pull/25121)): @bainos fixed a critical config precedence bug where global settings were silently overriding project-specific configurations.
3. **Fix: Preserve reasoning providerMetadata across model switches** ([PR #23104](https://github.com/anomalyco/opencode/pull/23104)): Directly addresses thinking-model instability by ensuring Anthropic thinking blocks aren't stripped when models are swapped mid-session.
4. **Fix: Handle AWS SSO session expiry with automatic re-login** ([PR #23525](https://github.com/anomalyco/opencode/pull/23525)): Improves the enterprise AWS Bedrock experience by intercepting credential errors and transparently spawning an `aws sso login` flow.
5. **Jlongster/warp 2** ([PR #25768](https://github.com/anomalyco/opencode/pull/25768)): Core maintainer @jlongster opened a major new PR, hinting at deep structural or performance updates based on the "warp" architecture.
6. **Fix: Preserve ChatGPT OAuth refresh token** ([PR #25765](https://github.com/anomalyco/opencode/pull/25765)): Resolves an authentication bug where OAuth access token refreshes inadvertently wiped the existing refresh token.
7. **Fix: remove TUI worker SSE bridge hang path** ([PR #19496](https://github.com/anomalyco/opencode/pull/19496)): Replaces worker-side SSE bridging with direct GlobalBus→RPC forwarding to eliminate annoying UI hangs.
8. **Docs: Add knowledge.yaml KCP manifest** ([PR #15839](https://github.com/anomalyco/opencode/pull/15839)): Introduces a Knowledge Context Protocol manifest to standardize static context indexing for the repository.
9. **Improve v2 session message rendering** ([PR #25634](https://github.com/anomalyco/opencode/pull/25634)): Enhances the TUI/UI experience by fixing sync ordering and improving how inline tool errors and durations are visually rendered.
10. **Add opencode-permission-guard to ecosystem plugins** ([PR #25747](https://github.com/anomalyco/opencode/pull/25747)): Adds a community-built plugin that monitors file permission errors and surfaces native OS notifications.

## 5. Feature Request Trends
* **Enhanced Agent Configurability:** Developers want more control over custom agents, including extensible lifecycle message injection ([#25753](https://github.com/anomalyco/opencode/issues/25753)) and "LLM Council" support to query multiple models simultaneously ([#4789](https://github.com/anomalyco/opencode/issues/4789)).
* **Remote & Network Access:** A strong push to expose ACP via WebSockets ([#13388](https://github.com/anomalyco/opencode/issues/13388)) so OpenCode can seamlessly integrate with remote IDEs and editors like Zed.
* **Developer Quality of Life:** Requests for a `/btw` side-chat command for context-unrelated questions ([#25709](https://github.com/anomalyco/opencode/issues/25709)), automatic code formatting hooks ([#25759](https://github.com/anomalyco/opencode/issues/25759)), and multi-account per provider setups ([#25738](https://github.com/anomalyco/opencode/issues/25738)).

## 6. Developer Pain Points
* **Thinking/Reasoning Model Stability:** The most prominent frustration is the poor handling of `reasoning_content`. Users of Kimi K2.5/K2.6 and DeepSeek V4 experience constant 400 errors because OpenCode strips or fails to pass back necessary reasoning tokens during multi-turn tool calls.
* **Provider Compatibility Gaps:** Users are annoyed that modern features like model variations (e.g., GPT-5.4 xhigh via Azure) or disabling thinking mode for specific models don't work smoothly out of the box.
* **"Preparing write..." Freezes:** A highly upvoted recurring bug where the AI loops continuously in the background, failing to actually write files to disk without user intervention.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for 2026-05-05.

### 1. Today's Highlights
Pi `v0.73.0` has been released, introducing API billing for the Xiaomi MiMo provider alongside new regional Token Plan configurations. The community saw an explosion of activity around local LLM support, highlighted by the merging of official extensions for llama.cpp, LM Studio, vLLM, and Ollama. Additionally, significant performance and stability improvements landed in the codebase, including a crucial fix for TUI streaming lag and extended HTTP retry handling for edge cases.

### 2. Releases
- **v0.73.0**: Introduced API billing for Xiaomi models. Users interacting with Xiaomi must now use API keys and configure regional providers via `xiaomi-token-plan-{cn,ams,sgp}`.

### 3. Hot Issues
1. **[#3357] [OPEN] Official local LLM provider extension**: With 21 👍, this was one of the most requested features. The issue asked for dynamic model fetching from local base URLs, which the community resolved via new official extensions.
2. **[#3208] [CLOSED] Custom Thinking Levels per Model**: Garnering 13 👍, this feature request to allow `models.json` to define custom cycling levels for `Shift+Tab` is now marked as in-progress.
3. **[#4022] [CLOSED] Antigravity Models not working**: Users reported critical failure with Antigravity models prompting an unsupported version error. 
4. **[#4157] [OPEN] Error running `pi-update` on Windows**: A significant platform-specific bug where Windows users face `NODE_TLS_REJECT_UNAUTHORIZED` warnings and TLS insecurity during updates.
5. **[#4142] [OPEN] macOS image paste hard-abort**: A severe crash where attempting to paste an image in a macOS seatbelt sandbox without proper pasteboard permissions kills the Pi process.
6. **[#4163] [CLOSED] `pi -p` silently no-ops when prompt starts with `---`**: A critical CLI pipeline bug where prompts beginning with YAML front matter caused the agent to emit a session event but silently fail to run.
7. **[#4151] [CLOSED] Resource-loader reloads on every turn**: A performance bottleneck in embedded runners (OpenClaw) where `DefaultResourceLoader.reload()` redundantly re-scanned extensions on every agent turn.
8. **[#4143] [OPEN] Xiaomi MiMo Token Plan regional providers not working**: Following the v0.73.0 release, users reported authentication friction, noting that manually setting regional tokens in `auth.json` fails to populate Mimo models in the UI.
9. **[#4149] [OPEN] Expose `getSupportedThinkingLevels` from `pi-ai`**: Developers requested the public exposure of internal thinking level functions to better manage model capabilities in third-party extensions.
10. **[#4177] [CLOSED] Pi `/copy` fails silently on Wayland**: On Arch/Hyprland, the `/copy` command falsely reports success while leaving the clipboard empty.

### 4. Key PR Progress
1. **[#4154] feat(coding-agent): add official local-LLM provider extensions**: Merged. Implements async-factory custom providers for llama.cpp, LM Studio, vLLM, and Ollama, resolving the top local LLM feature request.
2. **[#4165] fix(coding-agent): stream bash output incrementally**: Merged. Authored by `mitsuhiko`, this fixes TUI freezing by throttling expensive UI updates during high-volume stdout streams.
3. **[#3887] [OPEN] feat: image content**: Introduces a new API mirroring the stream API to allow agents to output image blocks via Google/OpenRouter models.
4. **[#4170] & [#4171] fix(ai): preserve OpenRouter reasoning with Responses API**: Fixes a bug where OpenAI Responses stream handling failed when output item events completed out of order via OpenRouter.
5. **[#3737] fix(ai): correct GPT-5.5 context metadata**: Corrects context windows for GPT-5.5 variations, setting native OpenAI to 1,050,000 and Codex routes to 400,000.
6. **[#4159] fix(coding-agent): retry on transient HTTP 404/408 status responses**: Enhances retry resilience by adding 404 and 408 to the exponential backoff harness, preventing hard errors from provider CDN edges (notably Cerebras).
7. **[#4148] Fix active tool updates during running agent sessions**: Resolves a race condition where tools added mid-session weren't visible to the current prompt loop due to a stale backing array.
8. **[#4162] feat(coding-agent): allow comments and trailing commas in `models.json`**: Quality-of-life improvement allowing users to annotate model configs using standard JSONC syntax (`//` comments).
9. **[#3596] fix(coding-agent): strip trailing `index.js|ts` from extension labels**: Cleans up the startup banner by removing ugly file extensions from loaded extension names.
10. **[#4156] Fix the wrong branch compaction diagram**: Corrects a documentation inaccuracy where the compacted message was incorrectly appended to the old branch.

### 5. Feature Request Trends
- **Local LLM Integration**: There is a massive push toward self-hosting. The community wants seamless, zero-configuration connections to local inference engines like Ollama, LM Studio, and llama.cpp.
- **Python SDK Support**: Multiple requests (e.g., #4174) highlight a demand for a Python wrapper around `pi-agent-core` and `pi-ai` to allow Python-centric developers to integrate Pi into their existing scripts.
- **Tooling & Interoperability Standards**: Developers are actively discussing standardizing how AI agents identify themselves to external tools, specifically proposing environment variables like `AGENT=pi` over proprietary formats.

### 6. Developer Pain Points
- **Closed-Because-BigRefactor**: A recurring theme among recent bug closures is the `closed-because-bigrefactor` tag. While a major refactor is underway, developers are expressing frustration that active, reproducible bugs (like the Wayland clipboard and macOS crashes) are being closed automatically rather than patched.
- **Runtime & Sandbox Crashes**: Developers running Pi in embedded environments (like OpenClaw) or alternative runtimes (Bun) are experiencing hard crashes, CPU spinning, and unhandled promise rejections.
- **CLI Pipeline Reliability**: Issues like `pi -p` no-oping on specific string inputs and expired OpenAI Codex tokens causing hung processes indicate that non-interactive/programmatic usage still lacks robust error handling.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-05

## 1. Today's Highlights
Qwen Code rolled out **v0.15.6-nightly.20260504**, introducing a critical `FileReadCache` to optimize file reads and pave the way for safe file mutations. A major architectural theme today is **concurrency safety and performance**: multiple PRs address stale-file overwrites, session JSONL bloat, and auto-memory latency, signaling a maturing focus on enterprise-grade reliability. Background task management also advanced, with new proposals for Ctrl+B foreground-to-background task promotion and surfacing auto-memory "dream" tasks in the UI.

## 2. Releases

**[v0.15.6-nightly.20260504.e617f20d1](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.6-nightly.20260504.e617f20d1)**
- **feat(core): add FileReadCache and short-circuit unchanged Reads** by [@wenshao](https://github.com/QwenLM/qwen-code/pull/3717) — introduces a session-scoped cache for file reads, avoiding redundant I/O and laying the groundwork for safe-edit checks.
- **fix(cli): honor proxy setting** by [@cyphercodes](https://github.com/QwenLM/qwen-code/pull/3766) — resolves a networking issue where proxy environment variables were ignored.

---

## 3. Hot Issues

1. **[#3839 — Silent file clobbering during Edit/WriteFile](https://github.com/QwenLM/qwen-code/issues/3839)**
   - Files modified externally between a Read and Write are silently overwritten. Affects parallel agent workflows. Community flag is high since this is a data-integrity risk; PR #3840 is already open.

2. **[#3822 — Session JSONL bloat causes `/resume` hang](https://github.com/QwenLM/qwen-code/issues/3822)**
   - Large-file edits bloat session JSONL with unchecked `originalContent`/`fileDiff` fields, making `/resume` crawl or freeze at "Loading sessions...". Resonates with power users working on large repos.

3. **[#3838 — Terminal infinite scroll/refresh loop during output](https://github.com/QwenLM/qwen-code/issues/3838)**
   - Streaming output triggers a visual "refresh storm" in the terminal, making the UI unreadable until output finishes. A critical UX blocker for daily CLI users.

4. **[#3634 — Background task management roadmap](https://github.com/QwenLM/qwen-code/issues/3634)**
   - The master tracking issue for background agent execution. Phases A & B are merged; community is actively following Phase D planning for Ctrl+B-style task promotion.

5. **[#3213 & #3824 — Terminal resize display corruption](https://github.com/QwenLM/qwen-code/issues/3213)**
   - Windows/Wayland terminal resizing leaves residual blue border artifacts (likely an Ink 6.2.3 reflow mismatch). A persistent UI polish issue affecting developer experience.

6. **[#3823 — SDK 0.1.6/0.1.7 upgrade causes CLI process exit (code 1)](https://github.com/QwenLM/qwen-code/issues/3833)**
   - Regression in `@qwen-code/sdk` breaks existing integrations with a non-descriptive error, blocking SDK adoption.

7. **[#3837 — ACP mode doesn't support slash commands in Zed](https://github.com/QwenLM/qwen-code/issues/3837)**
   - Users in Zed's Agent-Client-Protocol mode can't use `/` to select skills, limiting editor integration functionality.

8. **[#3805 — Long-running sessions lose tool read/glob content](https://github.com/QwenLM/qwen-code/issues/3805)**
   - Extended sessions result in read/glob tools failing to retrieve or send content to the LLM. Tied to potential memory/state leaks in long-lived sessions.

9. **[#3829 — Cannot paste images on Wayland](https://github.com/QwenLM/qwen-code/issues/3829)**
   - Despite having `wl-clipboard` installed, image pasting fails on Wayland-based Linux distros. A recurring Linux desktop gap.

10. **[#3821 — Support macOS/readline/emacs shortcuts (Ctrl+p/n)](https://github.com/QwenLM/qwen-code/issues/3821)**
    - Request for standard macOS/emacs-style keyboard navigation. Reflects a need for better platform-native input handling.

---

## 4. Key PR Progress

1. **[#3774 — Enforce prior read before Edit/WriteFile](https://github.com/QwenLM/qwen-code/pull/3774)** by @wenshao
   - Builds on the new `FileReadCache` to mandate that the LLM has read a file's current state before mutating it. A cornerstone for safe, multi-step editing.

2. **[#3840 — Refuse Edit/WriteFile when file changed since last read](https://github.com/QwenLM/qwen-code/pull/3840)** by @ihubanov
   - Complements #3774 by checking `FileReadCache` staleness on the write path. Prevents silent overwrites and directly fixes Issue #3839.

3. **[#3814 — Prevent auto-memory recall from blocking main request](https://github.com/QwenLM/qwen-code/pull/3814)** by @B-A-M-N
   - Reduces auto-memory side-query timeout from 5s to 1s and avoids blocking the main request. Fixes a ~5s latency penalty on every user turn.

4. **[#3815 — Use per-model settings for fast model side queries](https://github.com/QwenLM/qwen-code/pull/3815)** by @B-A-M-N
   - Isolates `fastModel` config so `extra_body` and `reasoning` params from the main model don't leak into lighter background queries.

5. **[#3836 — Surface and cancel auto-memory dream tasks](https://github.com/QwenLM/qwen-code/pull/3836)** by @wenshao
   - Exposes background memory consolidation ("dream") tasks in the unified task UI, allowing users to monitor and cancel them.

6. **[#3798 — Classify retryable transport failures vs deterministic errors](https://github.com/QwenLM/qwen-code/pull/3798)** by @B-A-M-N
   - Smart error classification ensures only transient provider errors (429, 500s) are retried, while auth/bad-request errors (401, 400) fail immediately.

7. **[#3819 — Prevent duplicate MCP processes from concurrent discovery](https://github.com/QwenLM/qwen-code/pull/3819)** by @B-A-M-N
   - Adds an in-flight guard to MCP server discovery, preventing race conditions that spawn duplicate child processes.

8. **[#3797 — Add /model list subcommand](https://github.com/QwenLM/qwen-code/pull/3797)** by @B-A-M-N
   - Enables dynamic model discovery via `/model list`, querying OpenAI-compatible `/models` endpoints in a scriptable format.

9. **[#3762 — VSCode extension: message edit/rewind and metadata UI](https://github.com/QwenLM/qwen-code/pull/3762)** by @DragonnZhang
   - Brings full message editing, rewind capabilities, and rich metadata display to the VSCode extension, closing the UX gap with the CLI.

10. **[#3214 — Replace fdir crawler with git ls-files + ripgrep](https://github.com/QwenLM/qwen-code/pull/3214)** by @scrollDynasty
    - Swaps the slow, full-tree `fdir` scan for a two-tier `git ls-files` + `ripgrep` strategy for `@` file autocomplete. Massive perf win for large repos.

---

## 5. Feature Request Trends

- **Background Task Orchestration**: Significant momentum around the background task roadmap (#3634), with specific proposals for foreground-to-background promotion via Ctrl+B (#3831). Users want full control over long-running agents.
- **Structured Output in Headless Mode**: PR #3598 introduces `--json-schema` for scriptable, structured JSON responses in CI/CD pipelines. Reflects growing enterprise adoption.
- **Cross-Editor Feature Parity**: Issues like #3837 (ACP slash commands) and PR #3762 (VSCode UI features) highlight a push for consistent functionality across CLI, Zed, and VSCode clients.
- **Path-Conditional Skill Activation**: Ongoing work (#3830) to gate skill discovery based on tool result paths shows a trend toward smarter, context-aware agent behavior.

---

## 6. Developer Pain Points

- **UI Rendering Stability**: A cluster of terminal rendering issues—resize artifacts (#3213, #3824), infinite scroll loops (#3838), and Wayland clipboard bugs (#3829)—indicate the Ink-based terminal UI needs fundamental rendering hardening.
- **State & Session Bloat**: Session JSONL unbounded growth (#3822) and long-running session tool failures (#3805) reveal memory management weaknesses under extended use, directly impacting heavy daily users.
- **SDK Stability Regressions**: The 0.1.6/0.1.7 SDK update breaking changes (#3823) with opaque "code 1" exits are eroding integrator confidence; clearer error surfacing is needed.
- **Concurrency Safety**: Silent data loss from parallel writes (#3839) is a critical trust issue. While PRs #3774 and #3840 address this, the gap existed for too long, highlighting the risks of multi-agent architectures without robust file locking.

</details>