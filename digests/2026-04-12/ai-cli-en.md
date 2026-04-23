# AI CLI Tools Community Digest 2026-04-12

> Generated: 2026-04-11 22:04 UTC | Tools covered: 7

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

Here is the cross-tool comparison report based on the community digests from April 12, 2026.

# AI Developer CLI Tools: Ecosystem Analysis Report

## 1. Ecosystem Overview
The AI CLI tooling landscape is aggressively transitioning from simple terminal-based chat interfaces into sophisticated, autonomous agentic environments. Established tools like OpenAI Codex and Anthropic's Claude Code are focusing on enterprise-grade sandboxing, multi-agent orchestration, and distributed remote execution. Meanwhile, emerging contenders like Gemini CLI, Kimi CLI, and Qwen Code are rapidly iterating on core extensibility, multi-channel integrations, and sub-agent memory management. Throughout the ecosystem, developer demands are converging around reliability, transparent billing/usage, and the need for stable, cross-platform execution—particularly as these tools become deeply embedded in critical CI/CD and daily engineering workflows.

## 2. Activity Comparison
Activity levels vary significantly, with OpenAI Codex and the newer entrants (Kimi, Qwen, Gemini) showing the highest volume of code iterations today, while Claude Code and OpenCode communities remain heavily focused on unresolved grievances.

| Tool | Issues (Hot/Discussed Today) | PRs Updated/Opened Today | Release Status (April 12) |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 8 | No new releases |
| **OpenAI Codex** | 10 | 14+ | `rust-v0.120.0` (Stable) & Alpha builds |
| **Gemini CLI** | 10 | 10 | `v0.39.0-nightly` |
| **GitHub Copilot CLI** | 10 | 1 | `v1.0.24` (Released April 10) |
| **Kimi Code CLI** | 7 | 10 | No new releases (Latest: v1.31.0) |
| **OpenCode** | 10 | 10 | No new releases |
| **Qwen Code** | 10 | 10 | `v0.14.3-nightly` |

## 3. Shared Feature Directions
*   **Windows OS Parity & Stability:** A universal pain point. Claude Code, OpenAI Codex, OpenCode, and GitHub Copilot are all fielding major user complaints regarding broken terminal UIs, CRLF line ending corruptions, child process timeouts, and silenced tool errors on Windows/WSL.
*   **Sub-Agent & Distributed Orchestration:** Tools are rapidly moving beyond single-agent loops. OpenAI Codex is building "waypoints" for multi-host remote execution, Qwen Code is introducing background child agents, and OpenCode/Gemini CLI are both building frameworks for multi-agent collaboration and lifecycle management.
*   **Advanced Permission Hooks & Sandboxing:** As agents become more autonomous, execution boundaries are tightening. OpenAI Codex introduced `deny-read` stacks and `PermissionRequest` hooks, GitHub Copilot rolled out `preToolUse` hooks, and Kimi CLI implemented configurable approval timeouts. 
*   **Session & Memory Continuity:** Users want persistent, safe resumability across contexts. Gemini CLI is pioneering AST-aware codebase mapping and global vs. project memory routing, while Kimi CLI, Qwen Code, and OpenCode are heavily focused on robust session renaming, deletion, and non-global `/resume` scopes.

## 4. Differentiation Analysis
*   **Claude Code vs. OpenAI Codex (Enterprise Infrastructure):** Claude Code is currently battling significant community backlash regarding billing anomalies, silent feature removals (`/buddy`), and model regression. Conversely, Codex is focused on deep technical infrastructure—shipping WebRTC voice support, real-time V2 streaming, and distributed compute execution.
*   **The Open/Multi-Provider Frontier (OpenCode, Qwen, Kimi):** Unlike the locked-down ecosystems of Anthropic/OpenAI, OpenCode is heavily focused on cross-provider compatibility (Copilot Business, Kimi K2.5, Z.AI). Qwen Code differentiates itself via cross-platform channels (Telegram bots with voice support) and localization.
*   **Intelligent Context Handling (Gemini CLI):** Google's Gemini CLI is setting itself apart by tackling foundational memory and routing issues. It focuses on proactive memory writes, AST-level codebase mapping to save tokens, and solving sub-agent "false success" bugs.
*   **GitHub Copilot CLI:** Remains uniquely positioned as a thin client heavily reliant on the VS Code ecosystem. Its primary focus is catching up to terminal competitors regarding sandbox modes, multi-session controls, and multimodal inputs (e.g., image pasting).

## 5. Community Momentum & Maturity
*   **High Momentum / Fast Iteration:** **OpenAI Codex**, **Kimi CLI**, **Qwen Code**, and **Gemini CLI** show the most momentum. Kimi and Qwen saw 10+ community PRs opened in a single day, indicating highly active open-source communities rapidly filling feature gaps. Codex maintains a high cadence of complex, merged infrastructure PRs.
*   **Mature but Stagnated / Friction:** **Claude Code** has a highly mature and deeply engaged community (issues with 1,300+ upvotes), but is currently suffering from a lack of maintainer responsiveness to critical regressions. **GitHub Copilot CLI** is experiencing severe friction, with practically no external PR activity and buggy internal releases hindering developer trust.
*   **Emerging / Stabilizing:** **OpenCode** is actively maturing, transitioning from feature-requests to hardcore infrastructure fixes (SQLite session sharding, prompt cache determinism) to stabilize the platform for enterprise use.

## 6. Trend Signals
1.  **"Autonomy Requires Hard Boundaries":** The sudden industry-wide implementation of permission hooks (Codex, Copilot) and sandboxing (Qwen) signals that vendors recognize AI agents executing destructive bash commands is a critical liability. Expect standardized, OS-level sandboxing to become a default feature within 6 months.
2.  **Billing Anxiety Will Dictate UX:** Developers are highly sensitive to invisible token drain. Claude Code's billing confusion and Copilot's infinite premium request loops show that transparent, deterministic token counting in multi-step agent flows is now a core requirement, not just a nice-to-have.
3.  **The Terminal is Failing the AI:** Across almost all tools, developers are reporting flickering TUIs, GPU-hungry animations, and clipboard issues. This suggests that standard terminal rendering protocols (like rendering markdown and real-time tool execution) are hitting their limits, which will accelerate the shift toward hybrid desktop apps (e.g., Electron-based wrappers) or deep IDE integrations. 
4.  **Multi-Agent is the Next Bottleneck:** The transition from single-prompt execution to background task queuing and multi-agent "storms" (as seen in Kimi's infinite loop bug) shows that memory routing and context isolation between agents will be the primary technical hurdle for CLI tools later this year.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Analysis Period:** Through 2026-04-12 | **Repository:** [anthropics/skills](https://github.com/anthropics/skills)

---

## 1. Top Skills Ranking (Most-Discussed PRs)

Based on community engagement, update velocity, and attention indicators, here are the top 8 most-watched Skills pull requests:

1. **[PR #514 — document-typography](https://github.com/anthropics/skills/pull/514)** | Author: PGTBoos | 🟢 OPEN
   **Functionality:** Automated typographic quality control for AI-generated documents, preventing orphan word wraps, widow paragraphs, and numbering misalignment.
   **Discussion Highlights:** Addresses a universal pain point—users rarely think to request good typography, but its absence degrades every document Claude produces. High perceived value.

2. **[PR #210 — Improve frontend-design skill](https://github.com/anthropics/skills/pull/210)** | Author: justinwetch | 🟢 OPEN
   **Functionality:** Overhauls the existing frontend-design skill for greater clarity, actionability, and single-conversation executability.
   **Discussion Highlights:** Meta-improvement to an existing core skill; long-lived PR (open since Jan 2026) with ongoing community refinement.

3. **[PR #83 — skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | Author: eovidiu | 🟢 OPEN
   **Functionality:** Two meta-skills for the marketplace: one evaluates skill quality across 5 dimensions (structure, documentation, etc.); the other scans for security issues.
   **Discussion Highlights:** Represents the emerging "skills-for-skills" meta-layer; early PR that established quality benchmarks for the ecosystem.

4. **[PR #486 — ODT Skill (OpenDocument)](https://github.com/anthropics/skills/pull/486)** | Author: GitHubNewbie0 | 🟢 OPEN
   **Functionality:** Enables creation, template filling, and HTML parsing of `.odt` files (ISO-standard format used by LibreOffice, Google Docs, etc.).
   **Discussion Highlights:** Recently updated (Apr 10); fills a significant gap in document format coverage alongside the existing DOCX and PDF skills.

5. **[PR #541 — fix(docx): tracked change ID collision](https://github.com/anthropics/skills/pull/541)** | Author: Lubrsy706 | 🟢 OPEN
   **Functionality:** Prevents document corruption when tracked changes collide with existing bookmark IDs in OOXML's shared `w:id` namespace.
   **Discussion Highlights:** A critical correctness fix; demonstrates the community maturing existing document skills beyond initial functionality.

6. **[PR #659 — quality-playbook](https://github.com/anthropics/skills/pull/659)** | Author: andrewstellman | 🟢 OPEN
   **Functionality:** Generates automated quality systems using traditional quality engineering practices (requirements-based testing, not source-based test stubs).
   **Discussion Highlights:** Philosophy-driven approach that leverages AI to make heavyweight QA practices affordable for every project.

7. **[PR #806 — sensory: macOS AppleScript automation](https://github.com/anthropics/skills/pull/806)** | Author: AdelElo13 | 🟢 OPEN
   **Functionality:** Teaches Claude to use `osascript` for native macOS automation via AppleScript, with a two-tier permission model (no special permissions for Tier 1).
   **Discussion Highlights:** A potential alternative to screenshot-based computer use; notable for native OS integration.

8. **[PR #374 — x402 BSV micropayments](https://github.com/anthropics/skills/pull/374)** | Author: Calgooon | 🟢 OPEN
   **Functionality:** Enables natural-language-driven micropayments for AI service discovery, authentication, and payment via the x402 protocol on BSV.
   **Discussion Highlights:** Represents the emerging intersection of AI agents and financial protocols; niche but forward-looking.

---

## 2. Community Demand Trends (From Issues)

Analysis of the top 15 issues reveals five concentrated demand areas:

| Trend | Signal Issues | Demand Summary |
|---|---|---|
| **Platform Reliability** | [#406](https://github.com/anthropics/skills/issues/406) (upload failures), [#403](https://github.com/anthropics/skills/issues/403) (delete 500 errors), [#61](https://github.com/anthropics/skills/issues/61) (404 load errors) | Core skill management APIs are fragile; users cannot reliably upload, replace, or delete skills. This is the **#1 operational blocker**. |
| **Skills-as-MCPs** | [#16](https://github.com/anthropics/skills/issues/16) (Expose Skills as MCPs) | Strong demand to expose Skills via the Model Context Protocol, turning skills into callable API endpoints (`generateAlgorithmArt({prompt})`). |
| **Org/Team Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (org-wide sharing), [#62](https://github.com/anthropics/skills/issues/62) (skills disappearing) | Organizations need centralized skill libraries with direct sharing links instead of manual `.skill` file distribution via Slack/Teams. |
| **Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (namespace abuse), [#412](https://github.com/anthropics/skills/issues/412) (agent governance) | Community skills impersonating the `anthropic/` namespace create trust vulnerabilities; governance and safety patterns are requested. |
| **Evaluation & Tooling** | [#556](https://github.com/anthropics/skills/issues/556) (0% eval trigger rate), [#202](https://github.com/anthropics/skills/issues/202) (skill-creator best practices) | The evaluation framework (`run_eval.py`) is fundamentally broken—skills never trigger during testing. The skill-creator itself needs rework for token efficiency. |
| **Enterprise/SSO Compatibility** | [#532](https://github.com/anthropics/skills/issues/532), [#29](https://github.com/anthropics/skills/issues/29) (Bedrock support) | Enterprise users on SSO or AWS Bedrock are largely locked out of skill tooling that requires direct API keys. |

---

## 3. High-Potential Pending Skills (Active PRs Close to Merging)

These open PRs show recent activity (updated within the last 30 days) and address clearly identified gaps:

| PR | Skill | Why It's Likely to Land | Last Updated |
|---|---|---|---|
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT Document Skill** | Fills the OpenDocument gap; ISO-standard format with broad ecosystem support | Apr 10 |
| [#541](https://github.com/anthropics/skills/pull/541) | **DOCX tracked-change fix** | Critical correctness fix for an already-merged document skill | Apr 7 |
| [#539](https://github.com/anthropics/skills/pull/539) | **YAML validation fix** | Prevents silent parsing failures in skill frontmatter; improves skill-creator reliability | Apr 7 |
| [#538](https://github.com/anthropics/skills/pull/538) | **PDF case-sensitivity fix** | Fixes broken file references on Linux; straightforward 8-line correction | Apr 7 |
| [#659](https://github.com/anthropics/skills/pull/659) | **quality-playbook** | Addresses testing/QA gap with a requirements-based philosophy; complements existing testing-patterns PR | Mar 29 |
| [#806](https://github.com/anthropics/skills/pull/806) | **macOS AppleScript automation** | Novel OS-level integration; two-tier permission model is well-designed | Apr 2 |

**Key observation:** The three Lubrsy706 PRs (#541, #539, #538) form a coordinated batch of bugfixes that collectively harden the document skill pipeline—these are high-merge-probability.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for robust, reliable document-generation skills (DOCX, PDF, ODT, typography) that produce production-quality output without corruption or formatting errors—and the infrastructure to evaluate, secure, and share those skills at scale.**

---

# Claude Code Community Digest — 2026-04-12

## 1. Today's Highlights

No new releases were shipped in the last 24 hours, but the community remains highly active around several critical issues. The most notable ongoing story is the backlash over the silent removal of the `/buddy` skill in v2.1.97 ([#45596](https://github.com/anthropics/claude-code/issues/45596)), which has amassed 471 thumbs-up and 127 comments in just three days. Meanwhile, a **critical Windows regression** in v2.1.101 ([#46767](https://github.com/anthropics/claude-code/issues/46767)) where tool results are silently dropped is demanding immediate attention.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

1. **[#45596 — "Bring Back Buddy"](https://github.com/anthropics/claude-code/issues/45596)** (127 comments, 👍 471)
   The `/buddy` companion skill was silently removed in v2.1.97 with no changelog entry. Thousands of developers lost a beloved workflow feature overnight. The community is consolidating pleas for its return, describing it as a core productivity feature, not a novelty.

2. **[#42796 — "Claude Code is unusable for complex engineering tasks with Feb updates"](https://github.com/anthropics/claude-code/issues/42796)** (285 comments, 👍 1358)
   Now closed but still the highest-engagement issue in the tracker. Users report a significant degradation in model capability for complex multi-step engineering workflows since February. The sheer vote count (1358) signals deep community frustration with model regression.

3. **[#41930 — "Widespread abnormal usage limit drain across all paid tiers"](https://github.com/anthropics/claude-code/issues/41930)** (74 comments, 👍 54)
   A detailed investigation into unexpected usage consumption spikes since March 23. The author identifies multiple root causes and criticizes Anthropic's lack of formal communication. Affects all tiers including Max subscribers.

4. **[#26224 — "Claude Code is hanging / freezing / stuck for 5-20+ minutes"](https://github.com/anthropics/claude-code/issues/26224)** (70 comments, 👍 96)
   A long-running urgent issue where Claude Code freezes on heaps of prompts for extended periods. Still open after nearly two months, with continued reports confirming the problem persists across recent versions.

5. **[#46767 — Tool results silently dropped on Windows (regression in 2.1.101)](https://github.com/anthropics/claude-code/issues/46767)** (2 comments)
   A **critical same-day regression**: all tools return "missing due to internal error" on Windows after updating to 2.1.101. Silent data loss makes this particularly dangerous — users may not notice tool failures immediately.

6. **[#42569 / #46780 — 1M context window incorrectly billed as Extra Usage on Max plan](https://github.com/anthropics/claude-code/issues/42569)** (4+ comments across duplicates)
   Multiple reports confirm that the 1M context window is being charged as "Extra Usage" rather than covered under the $200 Max plan. This is a billing correctness issue that directly impacts trust for paying subscribers.

7. **[#46606 — VS Code extension bootstrap times out on network-mounted filesystems](https://github.com/anthropics/claude-code/issues/46606)** (5 comments)
   The VS Code extension's startup handshake fails when the working directory is on a network mount. Increasingly relevant as more developers work with remote/containerized filesystems.

8. **[#45996 — `/export` produces 0-byte files and empty clipboard](https://github.com/anthropics/claude-code/issues/45996)** (3 comments)
   The export command is completely broken — the rendering pipeline returns an empty string. A fundamental workflow tool (sharing conversation context) is non-functional.

9. **[#44486 — CoworkVMService crashes when USB drive cannot be mounted as Plan9 share](https://github.com/anthropics/claude-code/issues/44486)** (4 comments)
   The Cowork VM crashes on Windows when external/USB drives fail to mount. This is a stability issue affecting the Cowork sandboxing feature that could take down entire sessions.

10. **[#46774 — `/resume` shows sessions from all directories — safety risk](https://github.com/anthropics/claude-code/issues/45596)** (2 comments)
    Resuming a session can inadvertently modify files in a different project because `/resume` lists sessions globally, not scoped to the current working directory. A real safety hazard for developers managing multiple codebases.

---

## 4. Key PR Progress

| PR | Author | Description |
|---|---|---|
| [#28714](https://github.com/anthropics/claude-code/pull/28714) | karljtaylor | **Automated issue triage & weekly digest via Claude API** — Uses Haiku 4.5 for per-issue labeling (~$0.001/issue) and Sonnet 4.6 for weekly digests. Labels are additive suggestions only; maintainers retain full control. Still open. |
| [#14130](https://github.com/anthropics/claude-code/pull/14130) | fvolcic | **Update code-review plugin for claude-code-action** — Reduces agent count from 4 to 2, removes secondary validation pass, adds inline committable suggestions. Closed but relevant for CI/CD integrations. |
| [#46450](https://github.com/anthropics/claude-code/pull/46450) | Nietzsche-Ubermensch | **Optimized duplicate comment detection** — Refactors to a single backward loop instead of excessive iterations. A performance improvement for the TUI rendering pipeline. |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | gameroman | **Open source Claude Code** — A community PR attempting to open-source the repository. References five canonical "open source" requests. Symbolic of strong community desire for transparency. |
| [#46620](https://github.com/anthropics/claude-code/pull/46620) | HumanBotRafid | **Rafid Prompt Tool** — A Next.js app for AI prompt optimization with Quick Optimise and Deep Build modes. Community-contributed tooling. |
| [#46732](https://github.com/anthropics/claude-code/pull/46732) | Dippp10 | **Enhance README documentation** — Documentation improvement PR, addressing onboarding clarity. |
| [#46095](https://github.com/anthropics/claude-code/pull/46095) | GoodshytGroup | **Claude Mythos operating contract for Veriflow** — A speculative/novel PR adding an "immune system" operating contract. Unlikely to merge but reflects creative community engagement. |
| [#45721](https://github.com/anthropics/claude-code/pull/45721) | GoodshytGroup | **Previous iteration of the Mythos/Veriflow PR** — Closed, replaced by #46095. |

> **Note:** Only 8 PRs saw updates in the last 24 hours, and none were merged by maintainers. Community-contributed PRs remain in limbo.

---

## 5. Feature Request Trends

The issues from the past day reveal several clear demand vectors:

- **Skill & companion restoration** — The `/buddy` removal backlash ([#45596](https://github.com/anthropics/claude-code/issues/45596)) is the loudest signal. Users want persistent, customizable AI companions integrated into their TUI workflow.

- **Billing & usage transparency** — Multiple issues ([#41930](https://github.com/anthropics/claude-code/issues/41930), [#42569](https://github.com/anthropics/claude-code/issues/42569), [#41158](https://github.com/anthropics/claude-code/issues/41158)) call for accurate usage reporting, correct Max plan coverage, and proactive communication about billing anomalies.

- **Fine-grained permission controls** — Requests for auto-approval of compound commands ([#32985](https://github.com/anthropics/claude-code/issues/32985)), better bash permission matching ([#46785](https://github.com/anthropics/claude-code/issues/46785)), and consistent permission prompt UX ([#46781](https://github.com/anthropics/claude-code/issues/46781)).

- **Cowork & VM stability** — Windows Cowork VM issues ([#38188](https://github.com/anthropics/claude-code/issues/38188), [#44486](https://github.com/anthropics/claude-code/issues/44486)) and plugin persistence bugs ([#40600](https://github.com/anthropics/claude-code/issues/40600)) indicate the sandboxed environment needs hardening before it's production-ready.

- **CLI/automation ergonomics** — `--wait-on-usage-limit` for non-interactive sessions ([#41502](https://github.com/anthropics/claude-code/issues/41502)), scoped `/resume` ([#46774](https://github.com/anthropics/claude-code/issues/46774)), and message timestamps ([#44763](https://github.com/anthropics/claude-code/issues/44763)).

---

## 6. Developer Pain Points

1. **Silent feature removals without communication.** The `/buddy` elimination with zero changelog mention has eroded trust. Developers build workflows around features that can vanish overnight.

2. **Windows is a second-class citizen.** Today alone: a critical regression dropping tool results silently ([#46767](https://github.com/anthropics/claude-code/issues/46767)), broken `/model` picker in PowerShell ([#46759](https://github.com/anthropics/claude-code/issues/46759)), Cowork VM ACL issues ([#38188](https://github.com/anthropics/claude-code/issues/38188)), and Plan9 mount crashes ([#44486](https://github.com/anthropics/claude-code/issues/44486)).

3. **Billing uncertainty on Max plans.** Users paying $200/month are seeing 1M context usage charged as "Extra Usage" with conflicting information from support ([#42569](https://github.com/anthropics/claude-code/issues/42569), [#46780](https://github.com/anthropics/claude-code/issues/46780)). This undermines the core value proposition.

4. **Performance & reliability regressions go unfixed for months.** The hanging/freezing issue ([#26224](https://github.com/anthropics/claude-code/issues/26224)) has been open since February with 96 thumbs-up and no resolution. Model quality regression ([#42796](https://github.com/anthropics/claude-code/issues/42796)) gathered 1,358 votes before being closed.

5. **Plugin marketplace DX is rough.** Validation errors are opaque ([#46786](https://github.com/anthropics/claude-code/issues/46786)), plugins don't persist across restarts ([#40600](https://github.com/anthropics/claude-code/issues/40600)), and documentation is stale — creating a frustrating round-trip for plugin developers.

---

*Data sourced from [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) on 2026-04-12.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-12

## 1. Today's Highlights

Codex shipped **rust-v0.120.0** (stable) and continued iterating on the **v0.121.0-alpha** line, headlined by Realtime V2 background-agent streaming and a significantly improved hook-activity display in the TUI. The PR pipeline is dominated by three major themes: a new **multi-host remote execution** ("waypoints") system, a comprehensive **deny-read sandbox** permissions stack, and the introduction of **PermissionRequest hooks** that let project hooks approve or deny commands before they reach the user. Meanwhile, the community is actively pushing back on the new context-remaining progress bar and reporting persistent Windows/WSL timeout issues.

---

## 2. Releases

### rust-v0.120.0 (stable)
- **Realtime V2 streaming**: Background agent progress can now stream while work is still running, and follow-up responses are queued until the active response completes ([#17264], [#17306]).
- **Hook activity TUI overhaul**: Live running hooks are shown separately from completed hook output, making the TUI easier to scan during long turns.
- *Note:* The [issue #17313] feedback suggests the accompanying context-remaining progress bar change in this release was not well-received.

### rust-v0.119.0 (previous stable)
- **Realtime voice sessions** now default to the v2 WebRTC path with configurable transport, voice selection, native TUI media support, and expanded app-server coverage ([#16960], [#17057], et al.).
- **MCP Apps & custom MCP servers**: Initial support landed for integrating external MCP tools and servers.

### Alpha builds
- **v0.121.0-alpha.2** / **v0.121.0-alpha.1** / **v0.120.0-alpha.3**: Pre-release iteration; no detailed changelogs published yet.

---

## 3. Hot Issues

| # | Issue | Why it matters | Community reaction |
|---|-------|---------------|-------------------|
| 1 | [#14860 — Error running remote compact task](https://github.com/openai/codex/issues/14860) | Affects Linux users on gpt-5.4 with remote/compact tasks; 26 comments, 18 👍 — highest engagement today. | Frustration over repeated timeouts with no stable workaround. |
| 2 | [#10070 — timeout waiting for child process to exit (Windows/WSL)](https://github.com/openai/codex/issues/10070) | Long-standing Windows reliability blocker; still open since Jan 2026. | Users report the issue persists across multiple CLI versions. |
| 3 | [#17313 — New context-remaining progress bar is a downgrade](https://github.com/openai/codex/issues/17313) | Direct feedback on v0.120.0 TUI changes; 12 👍 in ~1 day. | Community prefers the previous indicator; calls the new one less informative. |
| 4 | [#16857 — High GPU usage from "thinking" animation](https://github.com/openai/codex/issues/16857) | Desktop app renders a tiny animation that spikes GPU usage on macOS. | 9 👍; users want an option to disable or simplify the animation. |
| 5 | [#17354 — Recent thread history wiped in app, present in CLI](https://github.com/openai/codex/issues/17354) | Data-loss-adjacent: conversation history disappeared in the desktop app but survives in CLI. | Concern over reliability of local storage sync. |
| 6 | [#17480 — Interrupted streams loop retries without progress](https://github.com/openai/codex/issues/17480) | Agent retry loop can spin visibly without making substantive progress after interruption. | Raises questions about backoff strategy and UX during failures. |
| 7 | [#17139 — macOS MallocStackLogging warning on v0.118.0](https://github.com/openai/codex/issues/17139) | Regression emitting spurious stderr warnings on macOS. | Nuisance but undermines trust in output cleanliness. |
| 8 | [#8852 — Windows TUI missing shaded background](https://github.com/openai/codex/issues/8852) | Visual parity issue on native Windows terminals. | 6 👍; acknowledged as long-running cosmetic gap. |
| 9 | [#17449 — Clear redundant approvals in same turn](https://github.com/openai/codex/issues/17449) | When a turn produces multiple approval requests for the same operation, users must approve each one individually. | Calls for session-level approval deduplication. |
| 10 | [#15736 — Improve user message contrast in CLI TUI](https://github.com/openai/codex/issues/15736) | Accessibility/usability concern: user messages hard to distinguish from Codex responses on certain themes. | 2 👍; requests consistent styling tokens. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | [#17362 — Multi-host remote execution (waypoints)](https://github.com/openai/codex/pull/17362) | Adds a shared multi-host execution registry with SSH-backed host backends, allowing `exec_command` to target remote hosts via `host_id`. Major infrastructure shift for distributed workflows. |
| 2 | [#15977 — Enforce exact deny-read paths](https://github.com/openai/codex/pull/15977) | Base PR in the deny-read stack: adds exact-path deny-read enforcement in the filesystem sandbox and hardens bypass paths. |
| 3 | [#15978 — Managed deny-read requirements](https://github.com/openai/codex/pull/15978) | Extends requirements parsing to accept managed `permissions.filesystem.deny_read` entries. **Merged.** |
| 4 | [#15979 — Managed deny-read patterns](https://github.com/openai/codex/pull/15979) | Top of the deny-read stack: adds glob-pattern deny-read support with macOS Seatbelt generation. |
| 5 | [#17382 — Bash PermissionRequest hooks](https://github.com/openai/codex/pull/17382) | Introduces hooks for Bash command approval prompts, enabling project-level auto-approve/deny before user prompts. |
| 6 | [#17477 — request_permissions PermissionRequest hooks](https://github.com/openai/codex/pull/17477) | Extends the hook system to the model-facing `request_permissions` tool, completing the approval escape-hatch surface. |
| 7 | [#17419 — Support prolite plan type](https://github.com/openai/codex/pull/17419) | Fixes rate-limit fetch failures caused by an unrecognized `prolite` subscription tier. **Merged.** |
| 8 | [#17358 — Prior-conversation # mentions with autocomplete](https://github.com/openai/codex/pull/17358) | Adds `#` mention support in the TUI composer to reference and continue prior conversations, with autocomplete. |
| 9 | [#17472 — Show current GitHub PR in TUI status](https://github.com/openai/codex/pull/17472) | Surfaces the PR associated with the current branch in the TUI status line and terminal title via `gh pr view`. |
| 10 | [#17393 — Unwrap PowerShell commands for exec policy](https://github.com/openai/codex/pull/17393) | Fixes a Windows exec-policy bypass by unwrapping `powershell`/`pwsh` invocations and evaluating the inner command against prefix rules. |

Other notable activity: [#17486] (Guardian timeout semantics), [#17489] (millisecond-precision unique timestamps for cursors), [#17425] (auto-upgrade configured marketplaces), [#17405] (usage nudge reapply with account-refresh dedup), and [#17266] (hook status rendering improvements, **merged**).

---

## 5. Feature Request Trends

Several clear themes emerged from the 30 most-discussed issues:

1. **TUI/UX polish**: Better contrast, persistent diffs after refusal, semantic narrative views, and agent attribution on action rows. Users want denser, more informative TUI output.
2. **Multi-agent & parallel execution**: Proposals for a `codex multiverse` command ([#13509]), sub-agent tier overrides ([#13728]), and per-agent command display ([#11815]) indicate strong interest in orchestrating multiple agents.
3. **Windows parity**: Spell-checking ([#13895]), WSL-friendly file pickers ([#13758]), terminal hyperlinks ([#13213]), and the "Open in" menu ([#13775]) remain recurrent asks.
4. **Session & context continuity**: Long-horizon multi-session support ([#13241]), conversation-based worktrees from PRs ([#13903]), and prior-conversation mentions all point to a desire for persistent, resumable development workflows.
5. **Extensibility**: Custom slash commands from `SKILL.md` ([#13893]) and IDE quick-file-selection buttons ([#13662]) show demand for more configurable, editor-integrated workflows.

---

## 6. Developer Pain Points

- **Remote/compact task timeouts**: Issues [#14860] and [#14587] report consistent failures running remote compact tasks on Linux, with no resolution after a month. This is the top-pain-point by engagement.
- **Windows reliability**: The child-process timeout issue ([#10070]) has been open since January 2026 with 20 comments, and the missing TUI shading ([#8852]) since early January — Windows users feel like second-class citizens.
- **UI regressions**: The new context progress bar ([#17313]) and GPU-hungry thinking animation ([#16857]) both drew swift negative feedback, suggesting insufficient UX testing before release.
- **Repetitive approval friction**: Multiple approval prompts for the same operation in a single turn ([#17449]) and diff changes hiding after refusal ([#13517]) interrupt developer flow.
- **Thread/data loss**: The wiped thread history bug ([#17354]) undermines confidence in the desktop app's local storage, especially for users who rely on conversation continuity.
- **Retry loops without progress**: The visible retry spinning on interrupted streams ([#17480]) erodes trust that the agent is making meaningful forward progress during failures.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-12

## 1. Today's Highlights
A new nightly build (`v0.39.0-nightly.20260411`) was released today, featuring a key patch for multi-byte UTF-8 decoding in API errors, an automated documentation audit, and new debugging UI options. On the community front, major architectural discussions dominated the Issues tab, with significant maintainer focus on AST-aware codebase mapping, smarter memory routing for subagents, and fixing terminal rendering regressions. Meanwhile, the PR pipeline saw robust external contributions aimed at improving terminal compatibility, theme accessibility, and tooling architecture.

## 2. Releases
- **[v0.39.0-nightly.20260411.0957f7d3e](https://github.com/google-gemini/gemini-cli/releases/tag/v0.39.0-nightly.20260411.0957f7d3e)**
  - **fix:** Decode Uint8Array and multi-byte UTF-8 characters properly in API error messages.
  - **chore:** Automated documentation audit results applied.
  - **feat(ui):** Added new debugging options to the interface.

## 3. Hot Issues
1. **[AST-Aware File Reads & Codebase Mapping (EPIC)](https://github.com/google-gemini/gemini-cli/issues/22745):** An ongoing investigation into utilizing Abstract Syntax Trees for precise file reads and codebase navigation. The goal is to reduce token noise and minimize misaligned reads during agent turns.
2. **[Recurring Permission Prompts](https://github.com/google-gemini/gemini-cli/issues/24916):** Users are frustrated that the CLI repeatedly asks for file permissions, failing to honor "allow for all future sessions." 
3. **[Browser Agent Settings Override Bug](https://github.com/google-gemini/gemini-cli/issues/22267):** The Browser Agent is currently ignoring `settings.json` overrides (like `maxTurns`), breaking custom workflow configurations.
4. **[Memory Routing: Global vs. Project](https://github.com/google-gemini/gemini-cli/issues/22819):** A highly upvoted workstream tracking the implementation of intelligent memory routing—ensuring user preferences are saved globally while codebase-specific memories stay local.
5. **[Proactive Memory Writes](https://github.com/google-gemini/gemini-cli/issues/22809):** Tied to memory routing, this issue proposes updating the main agent's system prompt to know *when* to save memories based on user corrections or stated preferences.
6. **[Subagents Lack Approval Mode Awareness](https://github.com/google-gemini/gemini-cli/issues/23582):** Subagents are attempting tool calls that violate active constraints (like Plan Mode) because they lack context about the active Approval Mode.
7. **[Agent Creates Tmp Scripts in Random Directories](https://github.com/google-gemini/gemini-cli/issues/23571):** When restricted to shell execution, the model litters workspaces with edit scripts, creating cleanup overhead.
8. **[Subagent MAX_TURNS False Success](https://github.com/google-gemini/gemini-cli/issues/22323):** A high-priority bug where subagents report `status: "success"` even when they hit the maximum turn limit and fail to complete their analysis.
9. **[exit_plan_mode Hook Regression](https://github.com/google-gemini/gemini-cli/issues/25054):** A recent PR swapped `plan_path` for `plan_filename`, breaking user hooks meant to auto-archive plan files.
10. **[Thick Black Border UI Glitch](https://github.com/google-gemini/gemini-cli/issues/24915):** A visual bug producing thick black borders around the prompt bar, negatively impacting the CLI user experience.

## 4. Key PR Progress
1. **[feat(cli): add /enhance command (#25135)](https://github.com/google-gemini/gemini-cli/pull/25135):** Introduces a `/enhance` command allowing users to use the LLM to refactor and expand their draft prompts using conversation history.
2. **[refactor(cli): migrate core tools to native ToolDisplay (#25186)](https://github.com/google-gemini/gemini-cli/pull/25186):** Shifts UI rendering control directly to the tools by deprecating the legacy `returnDisplay` adapter in favor of a native `ToolDisplay` object.
3. **[fix: resolve Ghostty/raw-mode False Cancellation (#25026)](https://github.com/google-gemini/gemini-cli/pull/25026):** Fixes a blocking bug where OAuth flows prematurely aborted with a "cancelled by user" error in the Ghostty terminal or VS Code WSL.
4. **[Support XDG config, cache, and tmp directories (#25181)](https://github.com/google-gemini/gemini-cli/pull/25181):** Makes the CLI XDG-aware while adding specific environment variable overrides (`$GEMINI_CONFIG_DIR`, `$GEMINI_CACHE_DIR`) to improve Linux ecosystem compatibility.
5. **[fix: false positive binary detection (#24685)](https://github.com/google-gemini/gemini-cli/pull/24685):** Replaces naive high-byte heuristics with proper UTF-8 multibyte validation to stop valid source files from being flagged as binary.
6. **[feat: support hierarchical .env file loading (#25160)](https://github.com/google-gemini/gemini-cli/pull/25160):** Mirrors the multi-scope behavior of `settings.json` so that global and project-level `.env` files are loaded correctly.
7. **[Fix(core): retry additional OpenSSL 3.x SSL errors (#25187)](https://github.com/google-gemini/gemini-cli/pull/25187):** Patches streaming failures in OpenSSL 3.x by adding updated TLS alert strings to the retryable error list.
8. **[feat: add github colorblind themes (#15504)](https://github.com/google-gemini/gemini-cli/pull/15504):** Long-standing community contribution adding GitHub dark/light colorblind themes based on GitHub's Primer Design system.
9. **[feat(ui): automatic light/dark switching (#18753)](https://github.com/google-gemini/gemini-cli/pull/18753):** Extends theme switching to allow users to configure specific light/dark themes that trigger automatically based on terminal background luminance.
10. **[fix(mcp): add httpMethod config for StreamableHTTP (#24883)](https://github.com/google-gemini/gemini-cli/pull/24883) *(Closed/Merged)*:** Resolved MCP connection issues for servers requiring POST for initial handshakes (e.g., n8n).

## 5. Feature Request Trends
- **Intelligent Agent Memory Management:** Strong community demand for the CLI to autonomously distinguish between global user preferences and project-specific instructions, and to write to these memory stores proactively.
- **Codebase Context via AST:** Moving beyond flat file reads towards Abstract Syntax Tree aware tools for precise method-level code mapping and searching.
- **Robust Subagent Orchestration:** Better handling of subagent lifecycles, specifically ensuring they respect policy constraints, handle turn limits honestly, and don't pollute directories with temporary files.
- **Advanced UI Customization:** Multiple requests for granular theming (colorblind support, light/dark transitions) and fixing UI rendering glitches (tree views, prompt bar borders).

## 6. Developer Pain Points
- **SSH & Terminal Compatibility:** Users running the CLI over SSH or using specific terminals (like Ghostty) are experiencing scrambled text, OAuth cancellations, and minified React errors. 
- **Agent Destructive Behaviors:** Developers are expressing frustration with the agent using risky git commands (`--force`, `reset`) or creating unnecessary cleanup overhead via random script generation.
- **Repetitive Permission Prompts:** A high-frequency frustration where the CLI forgets file access permissions across sessions or turns.
- **Configuration Regressions:** Recent changes have broken user-defined hooks and `settings.json` overrides, impacting automated workflows.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-12

## 1. Today's Highlights
The repository saw a hive of activity surrounding the newly released **v1.0.24**, which introduces long-awaited support for VS Code model display names (e.g., "Claude Sonnet 4.5") and `preToolUse` hook enhancements. However, these hook improvements have immediately sparked several bug reports regarding confirmation dialog behavior and missing feedback, indicating a bumpy rollout. Meanwhile, a critical issue regarding premium request consumption during agentic loops continues to gain significant community traction.

## 2. Releases

### [v1.0.24](https://github.com/github/copilot-cli/releases/tag/v1.0.24) (Released 2026-04-10)
* **Model Flexibility:** The custom agent model field now accepts display names and vendor suffixes directly from VS Code (e.g., "Claude Sonnet 4.5", "GPT-5.4 (copilot)"), resolving prior model resolution errors.
* **Hook Enhancements:** `preToolUse` hooks now correctly respect `modifiedArgs`, `updatedInput`, and `additionalContext` fields.
* **Terminal Fixes:** Terminal states involving alt screen, raw mode, and cursor positions are now correctly restored upon exiting.

## 3. Hot Issues

1. **[OPEN] [Infinite Premium Requests Consumed per Tool Invocation](https://github.com/github/copilot-cli/issues/2591)** (18 comments, 9 👍)
   * **Why it matters:** A single agentic loop or thinking step is consuming 80-100 premium requests. This is a critical blocker for Pro users relying on autonomous agents.
2. **[OPEN] [CLI Constantly Getting 400 Errors for Invalid Request Body](https://github.com/github/copilot-cli/issues/1274)** (17 comments, 7 👍)
   * **Why it matters:** Users are experiencing a 95% failure rate when attempting code reviews on diff files, pointing to potential severe server-side or request-crafting regressions.
3. **[CLOSED] ["Claude Sonnet 4.5" is not available](https://github.com/github/copilot-cli/issues/2099)** (13 comments)
   * **Why it matters:** Highly requested fix that was officially resolved in the v1.0.24 release notes, allowing seamless cross-platform model naming.
4. **[OPEN] [Add Sandbox Mode to Restrict File Access](https://github.com/github/copilot-cli/issues/892)** (5 comments, 30 👍)
   * **Why it matters:** Security-conscious users are urgently requesting workspace boundaries to prevent the AI agent from reading or modifying files outside the project root.
5. **[OPEN] [Allow Cancellation of Enqueued Messages](https://github.com/github/copilot-cli/issues/1857)** (6 comments, 13 👍)
   * **Why it matters:** Users cannot abort or remove queued messages (via `Ctrl+Q`). If an agent goes off the rails, users are forced to watch it execute unwanted steps.
6. **[OPEN] [Feature Request: Hit Alt+V to Paste Image from Clipboard](https://github.com/github/copilot-cli/issues/476)** (12 comments, 57 👍)
   * **Why it matters:** The highest-upvoted active feature request. Users want parity with competitor tools (like Claude Code) for multimodal input in the TUI.
7. **[OPEN] [Copilot Update Command Is Not Working](https://github.com/github/copilot-cli/issues/2583)** (6 comments)
   * **Why it matters:** The `copilot update` command has been broken since version 1.0.17, forcing users to manually reinstall to fetch critical patches.
8. **[OPEN] [preToolUse: silent command rewrite via updatedInput triggers confirmation dialog](https://github.com/github/copilot-cli/issues/2643)** (New)
   * **Why it matters:** v1.0.24's new hook enhancements have a caveat—developers cannot silently rewrite commands; the CLI forces an interactive prompt every time.
9. **[OPEN] [Session resume fails when tool.execution_complete writes raw multiline content](https://github.com/github/copilot-cli/issues/2649)** (New)
   * **Why it matters:** Corrupted `events.jsonl` logs break session resumes, disrupting developer workflows when trying to pick up where they left off.
10. **[OPEN] [Subagent streaming deltas not emitted to SDK consumers](https://github.com/github/copilot-cli/issues/2645)** (New)
    * **Why it matters:** SDK developers are not receiving `assistant.message_delta` events from parallel subagents, making real-time UI integration for custom tools difficult.

## 4. Key PR Progress

1. **[OPEN] [install: guard against duplicate PATH entries on reinstall](https://github.com/github/copilot-cli/pull/2565)** by @marcelsafin
   * **Summary:** Fixes an annoying shell configuration bug where running the CLI installer twice appends duplicate paths to the user's shell profile. 
   *(Note: Only 1 PR was updated in the last 24 hours. The repository maintainers appear to be relying on internal/themed branches for the recent v1.0.24 release.)*

## 5. Feature Request Trends

* **Advanced Session & Agent Control:** Developers want more granular control over running agents. There is a strong push for the ability to cancel active/queued requests, view exact model routing per sub-agent, and see agent turns visualized (Issue #1900).
* **Multimodal TUI Support:** The CLI is lagging behind desktop AI chat interfaces. Users heavily desire native image pasting (Issue #476, 57 👍) directly in the terminal.
* **Security and Sandboxing:** As agents become more autonomous, restricting their file system boundaries (Issue #892) and safely managing permission hooks (Issue #2647) are top of mind for enterprise users.
* **Better Text Editing in Prompts:** Standard terminal GUI interactions are missing. Developers are asking for native Shift+Arrow and Ctrl+A text selection (Issue #2644) in the prompt input area.

## 6. Developer Pain Points

* **Buggy Hook Implementations:** The new `preToolUse` update is causing friction. Users are frustrated that providing "ask" feedback doesn't route back to the agent, and silent rewrites trigger unwanted confirmation dialogs.
* **Auto-Update Failures:** Getting the CLI to stay updated is a recurring theme. Whether due to broken `copilot update` commands (Issue #2583) or general auto-updater lag requiring multiple sessions (Issue #2408), version management remains unstable.
* **Multi-Session Resource Bleeding:** Running multiple CLI windows or using `/resume` results in unexpected API point deductions and corrupted session files (Issues #2648, #2649), heavily penalizing power users.
* **API Reliability:** A sudden influx of transient API errors (Issue #2641) and 400 Bad Request codes (Issue #1274) are interrupting agentic workflows, often forcing users to manually retry tasks.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-12

## 1. Today's Highlights

The Kimi Code CLI community saw a surge of community-driven contributions, with **10 new pull requests** opened in a single day addressing high-visibility issues. Key themes include new slash commands (`/delete`, `/loop`), timeout configurability improvements, and critical UX fixes for the completion menu. No new releases were shipped today.

---

## 2. Releases

**No new releases** were published in the last 24 hours. The latest stable version remains **1.31.0**.

---

## 3. Hot Issues

1. **[#1783 [Feature Request] Add /delete command to remove sessions](https://github.com/MoonshotAI/kimi-cli/issues/1783)** — Users must manually delete session folders from `~/.kimi/sessions/`. A `/delete` slash command is requested for better session management, disk cleanup, and removing sensitive data. Already has a corresponding PR (#1839).

2. **[#1752 Slash command completion menu should appear for exact match](https://github.com/MoonshotAI/kimi-cli/issues/1752)** — When typing an exact match like `/editor`, the completion menu disappears and arrow keys stop working. Partial matches like `/edit` work fine. A UX regression affecting daily workflows; PR #1841 directly addresses this.

3. **[#1761 [bug] Kimi-CLI does not respect task timeout parameters](https://github.com/MoonshotAI/kimi-cli/issues/1761)** — On Linux (v1.30), configured timeouts are being ignored, causing persistent hangs. This is a reliability blocker for automated/CI use cases. PR #1840 offers a fix by normalizing `timeout_s` aliases.

4. **[#1830 [bug] VSCode extension can't use slash skills before typing something](https://github.com/MoonshotAI/kimi-cli/issues/1830)** — Selecting a `/skill:*` completion before typing any text triggers immediate submission, making it impossible to add a task description. Fixed in PR #1838.

5. **[#1823 Feature Request: Configurable Approval Request Timeout](https://github.com/MoonshotAI/kimi-cli/issues/1823)** — The hardcoded 5-minute approval timeout is too short for long-running tasks (e.g., large refactors, code reviews). Users request configurable or unlimited timeouts. PR #1837 implements `approval.timeout_s` with support for `0` (unlimited). 👍 1

6. **[#1835 [bug] SetTodoList storm in v1.31.0](https://github.com/MoonshotAI/kimi-cli/issues/1835)** — The model enters an infinite loop of `SetTodoList` calls, a regression persisting from previous versions. No comments yet; may require model-side or prompt-level mitigation.

7. **[#1833 Feature Request: /loop command](https://github.com/MoonshotAI/kimi-cli/issues/1833)** — Requests parity with Claude Code's `/loop` command for running prompts on a schedule (e.g., monitoring deploys). PR #1834 was opened the same day.

---

## 4. Key PR Progress

1. **[#1843 fix(tools): truncate MCP tool output and handle unsupported content types](https://github.com/MoonshotAI/kimi-cli/pull/1843)** — Adds a 100K char budget to MCP tool results. Tools like Playwright can return 500KB+ DOM dumps or multi-MB base64, causing API 400 errors or pipe stalls. Critical stability fix for MCP-heavy workflows.

2. **[#1839 feat(shell): add /delete command for session removal](https://github.com/MoonshotAI/kimi-cli/pull/1839)** — Implements `/delete [session_id]` (alias: `/remove`) with safety guards: cannot delete the current session, invalid IDs rejected early. Closes #1783.

3. **[#1837 feat(config): make approval timeout configurable](https://github.com/MoonshotAI/kimi-cli/pull/1837)** — Adds `approval.timeout_s` config (default 300s). Setting `0` enables unlimited wait. Closes #1823.

4. **[#1841 fix(slash): show completion menu for exact command matches](https://github.com/MoonshotAI/kimi-cli/pull/1841)** — Removes the early-return in `SlashCommandCompleter` that hid the menu on exact match. Includes updated unit tests. Closes #1752.

5. **[#1840 fix(shell): normalize timeout_s alias for shell/acp timeouts](https://github.com/MoonshotAI/kimi-cli/pull/1840)** — Accepts `timeout_s` as an alias for `timeout`, rejects unsupported keys (`timeout_ms`, `timeoutSeconds`) with explicit errors, and validates conflicts. Addresses #1761.

6. **[#1838 fix(cli): prevent immediate submit when selecting /skill completions](https://github.com/MoonshotAI/kimi-cli/pull/1838)** — Fixes #1830 by making slash completion submission behavior semantics-aware — selecting a `/skill:*` no longer auto-submits before the user adds task text.

7. **[#1836 Fix interactive YOLO plan review semantics](https://github.com/MoonshotAI/kimi-cli/pull/1836)** — Separates user-feedback availability from YOLO auto-approval: tool calls are auto-approved, but `AskUserQuestion` and plan review remain interactive in shell mode. Important for safety in automated workflows.

8. **[#1834 feat(soul): add /loop command for scheduled prompt repetition](https://github.com/MoonshotAI/kimi-cli/pull/1834)** — Implements `/loop [interval] [prompt]` for recurring tasks (e.g., `/loop 5m check if deploy finished`). Parity with Claude Code's scheduled tasks. Closes #1833.

9. **[#1709 fix(diff): align inline highlight offsets with tab-expanded text](https://github.com/MoonshotAI/kimi-cli/pull/1709)** — Fixes a subtle diff rendering bug where inline highlights misalign when tabs are expanded to spaces. Improves code review readability.

10. **[#1842 docs: update en/zh docs for new features and tool changes](https://github.com/MoonshotAI/kimi-cli/pull/1842)** — Comprehensive doc update covering `custom_headers`, `ReadMediaFile`, `SetTodoList` query/clear modes, sensitive file filtering, `Grep` offset docs, and wire protocol changes.

---

## 5. Feature Request Trends

- **Session lifecycle management** — `/delete` for session removal (#1783) is the most concrete request; broader session orchestration (rename, archive, export) may follow.
- **Timeout configurability across the stack** — Approval timeouts (#1823), task timeouts (#1761), and shell timeouts (#1840) all point to users running longer, more complex automation workflows where hardcoded limits are blockers.
- **Claude Code parity** — `/loop` scheduled prompts (#1833) explicitly references Claude Code. Users are evaluating Kimi CLI against competitors and requesting feature-matching.
- **Slash command UX polish** — Completion menu behavior (#1752, #1830) is a recurring friction point, suggesting the interactive shell needs more rigorous edge-case testing.

---

## 6. Developer Pain Points

- **Timeouts are a cross-cutting frustration** — Whether it's approval timeouts (#1823), task execution timeouts (#1761), or shell tool timeouts (#1840), developers consistently hit hard limits that interrupt long-running workflows. The community is patching this from multiple angles.
- **MCP tool output causes silent failures** — Large MCP responses (Playwright DOM dumps, base64 payloads) crash the CLI with opaque API 400 errors (#1843). Users working with browser automation or media-heavy tools are especially affected.
- **SetTodoList infinite loop regression** — The "storm" bug (#1835) persists into v1.31.0, wasting tokens and stalling sessions. This appears to be a model/prompt-level issue rather than a simple code fix, making resolution harder.
- **Interactive shell edge cases** — Exact-match completion (#1752) and premature skill submission (#1830) erode confidence in the REPL experience. These are small bugs with outsized daily impact on developer productivity.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-12

## 1. Today's Highlights

Activity around OpenCode remains highly focused on Windows platform stability, with multiple high-engagement issues highlighting persistent struggles with clipboard handling, line endings, and process crashes. On the feature front, community contributors are actively proposing architectural enhancements for multi-agent orchestration, session-level model routing, and a more flexible plugin system. Several important infrastructure PRs—ranging from SQLite session sharding to CRLF preservation and token accumulation fixes—signal a maturing codebase preparing for enterprise-grade reliability.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Hot Issues

1. **[#4340 — Windows arm64 support](https://github.com/anomalyco/opencode/issues/4340)** *(41 comments, 23 👍)*
   A long-running feature request for native Windows arm64 support. High thumbs-up count signals strong demand from the growing ARM developer audience. Still closed, indicating it may be on the roadmap but unresolved.

2. **[#13984 — Cannot copy/paste in CLI](https://github.com/anomalyco/opencode/issues/13984)** *(23 comments, 8 👍)*
   Users report that "copied to clipboard" feedback appears but nothing pastes. A core UX blocker for daily CLI usage. Remains open with no clear fix yet.

3. **[#9787 — Sudden "killed" process with garbled output](https://github.com/anomalyco/opencode/issues/9787)** *(9 comments)*
   Chinese-language report of the TUI process being killed mid-task with corrupted output. Potentially related to memory limits or encoding issues in large project contexts.

4. **[#10119 — VSCode extension "no data provider" error](https://github.com/anomalyco/opencode/issues/10119)** *(9 comments, 9 👍)*
   The official VSCode extension shows an empty panel with a data provider error. Affects onboarding for VSCode users and remains unfixed.

5. **[#16685 — "Provider returned error" with Kimi K2.5 on Windows](https://github.com/anomalyco/opencode/issues/16685)** *(9 comments, 3 👍)*
   Consistent provider errors with the Kimi K2.5 model via OpenCode Go on Windows. Highlights gaps in provider compatibility testing.

6. **[#1573 — ASK MODE to save tokens](https://github.com/anomalyco/opencode/issues/1573)** *(8 comments)*
   Proposes a lightweight conversation mode that skips tool/agent loading. A simple "hi" costs ~17.7K tokens due to full context injection—a recurring frustration.

7. **[#22027 — Multi-agent session with auto-delegation](https://github.com/anomalyco/opencode/issues/22027)** *(6 comments)*
   Ambitious proposal for multi-agent collaboration within a single session. Author is seeking confirmation before creating a PR. Reflects strong community interest in agentic orchestration.

8. **[#21910 — ACP messages duplicated on Windows](https://github.com/anomalyco/opencode/issues/21910)** *(5 comments, 1 👍)*
   Messages are duplicated when using `opencode acp` on Windows. Not reproducible in other ACP clients, confirming an OpenCode-specific issue.

9. **[#15825 — MCP tool output invisible in UI](https://github.com/anomalyco/opencode/issues/15825)** *(3 comments, 6 👍)*
   MCP tools execute correctly and feed the LLM, but results are never rendered to the user. Root cause identified in the `GenericTool` component—a fix is straightforward.

10. **[#22042 — Z.AI Coding Plan returns empty responses](https://github.com/anomalyco/opencode/issues/22042)** *(2 comments)*
    Reasoning models like GLM-5.1 via the `zhipuai-coding-plan` provider return empty output because `thinking` config isn't applied. Quickly closed by PR #22041.

---

## 4. Key PR Progress

1. **[#21579 — Per-session SQLite sharding](https://github.com/anomalyco/opencode/pull/21579)** *(sjawhar)*
   Introduces per-session-tree SQLite databases for messages, parts, todos, and events. A significant infrastructure change for scalability and data isolation.

2. **[#21574 — Harden prompt loop and async session handling](https://github.com/anomalyco/opencode/pull/21574)** *(sjawhar)*
   Fixes prompt-loop deadlocks and race conditions in `prompt_async`/cancel paths. Closes 3 separate issues—improves overall session stability.

3. **[#20217 — Preserve CRLF line endings and BOM on Windows](https://github.com/anomalyco/opencode/pull/20217)** *(konglingdi1)*
   Prevents silent CRLF→LF conversion during file writes. Directly addresses the top Windows pain point (#6348, #18616).

4. **[#20758 — Copilot Business/Enterprise support](https://github.com/anomalyco/opencode/pull/20758)** *(kiranvk-2011)*
   Fixes bearer token exchange, dynamic endpoints, and VS Code identity headers so Copilot Business/Enterprise users can authenticate. Unlocks a large enterprise user base.

5. **[#22077 — Accumulate tokens across multi-step tool calls](https://github.com/anomalyco/opencode/pull/22077)** *(KonstantinMirin)*
   Token counts are overwritten instead of accumulated during multi-step tool calls. This PR fixes the accounting, improving cost visibility.

6. **[#22075 — `@model` / `@small_model` config references](https://github.com/anomalyco/opencode/pull/22075)** *(thypon)*
   Allows config fields to use `@model` and `@small_model` aliases instead of hardcoding `provider/id` strings. Reduces config drift when switching default models.

7. **[#22041 — Fix thinking for Z.AI & Korean IME truncation](https://github.com/anomalyco/opencode/pull/22041)** *(claudianus)*
   Two fixes in one: enables thinking for `zhipuai-coding-plan` and prevents Korean IME input truncation. Already closed/merged.

8. **[#21535 — Deterministic queued message wrapping for prompt cache](https://github.com/anomalyco/opencode/pull/21535)** *(Sathvik-1007)*
   Eliminates in-memory mutation of queued user messages that broke prompt cache determinism. Important for cost optimization and reproducibility.

9. **[#22070 — Allow session permission updates via PATCH](https://github.com/anomalyco/opencode/pull/22070)** *(remorses)*
   Adds `permission` to the `PATCH /session/{sessionID}` endpoint, enabling runtime permission rule updates. Closes two issues.

10. **[#18767 — Mobile touch optimization](https://github.com/anomalyco/opencode/pull/18767)** *(noahbentusi)*
    Optimizes the OpenCode app for touch/mobile interaction while preserving desktop UX. Reflects growing usage on tablets and mobile devices.

---

## 5. Feature Request Trends

- **Multi-agent orchestration:** Proposals for multi-agent sessions with auto-delegation (#22027), built-in "Ask" agents for codebase discovery (#21742), and session-level model switching APIs (#22043) all point toward a vision of OpenCode as a multi-agent platform.
- **Token-efficient modes:** ASK MODE (#1573) and `chat.model` pre-call routing hooks (#18793) reflect strong demand for lighter-weight, cheaper interaction patterns that skip full tool/agent loading.
- **Plugin extensibility:** Requests for Solid runtime plugin support (#22045), `chat.model` hooks (#18793), and structured workflow plugins like BMAD (#21842) show the community wants a richer, more composable plugin ecosystem.
- **Desktop/Web UX improvements:** Multi-window support (#22033), timeline access from Ctrl-P (#21757), and markdown preview toggles (#22079) indicate users are pushing for a more polished IDE-like experience.

---

## 6. Developer Pain Points

- **Windows is a second-class citizen:** Clipboard failures (#13984), CRLF corruption (#6348), Bash detection issues (#22054), network access problems (#15273), session history loss (#17765), and ACP message duplication (#21910) collectively paint a picture of a platform that works great on macOS/Linux but frustrates Windows users daily.
- **Token cost opacity:** Spending ~17.7K tokens on a greeting (#1573) and inaccurate token counting in multi-step flows (#21913) make cost management unpredictable—a critical concern for teams.
- **Provider/model compatibility gaps:** Kimi K2.5 errors (#16685), GPT 5.3 thinking not rendering (#12523), Z.AI empty responses (#22042), and missing "Other" provider option (#8820) erode trust in the provider abstraction layer.
- **UI/UX friction:** Invisible MCP tool output (#15825), VSCode extension breakage (#10119), white-screen crashes (#22048), and Cyrillic character corruption (#22082) suggest the presentation layer needs hardening across all frontends (TUI, Web, Desktop, VSCode).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

## Qwen Code Community Digest — 2026-04-12

A daily technical summary of the `github.com/QwenLM/qwen-code` repository activity.

### 1. Today's Highlights

The community is highly active in polishing the CLI/UX experience and expanding platform integrations. A standout PR introduces voice message support for the Telegram channel, while several critical bug fixes address terminal behaviors (like Shift+Enter newline insertion) and OpenAI-compatible provider pipeline failures. On the issue tracker, users are heavily requesting a GUI, better proxy support for channels, and fixes for the API content moderation filter triggering false positives.

---

### 2. Releases

*   **v0.14.3-nightly.20260411.55bcec70d**
    *   **Summary:** A nightly release addressing edge cases in the current `v0.14.3` cycle.
    *   **Full Changelog:** [`v0.14.3...v0.14.3-nightly.20260411.55bcec70d`](https://github.com/QwenLM/qwen-code/compare/v0.14.3...v0.14.3-nightly.20260411.55bcec70d)

---

### 3. Hot Issues

1.  **False Positives in API Content Filter ([#3119](https://github.com/QwenLM/qwen-code/Issue/3119), [#3145](https://github.com/QwenLM/qwen-code/Issue/3145))**
    *   *Why it matters:* Users are hitting `InternalError.Algo.DataInspectionFailed` during standard coding tasks or Markdown editing, indicating the upstream safety filter is overly aggressive and blocking legitimate workflow.
2.  **Agent Naming Fails with CJK Characters ([#3149](https://github.com/QwenLM/qwen-code/Issue/3149))**
    *   *Why it matters:* Agents defined with Chinese names cannot be invoked or managed via CLI commands, a surprising localization gap for a China-based ecosystem. 
3.  **Request for a Graphical User Interface ([#3143](https://github.com/QwenLM/qwen-code/Issue/3143))**
    *   *Why it matters:* Terminal-averse users are struggling with CLI configurations (like switching models). A GUI would significantly lower the barrier to entry.
4.  **Terminal Scroll Flickering During Streaming ([#3144](https://github.com/QwenLM/qwen-code/Issue/3144))**
    *   *Why it matters:* The UI suffers from rapid buffer jumping (10-30 times/sec) during token streaming, causing a notably poor UX for developers using the CLI.
5.  **Duplicate Sessions on `/resume` ([#3152](https://github.com/QwenLM/qwen-code/Issue/3152))**
    *   *Why it matters:* Attempting to continue from `PROJECT_SUMMARY.md` spawns a new session ID instead of resuming the exact conversation history, breaking session continuity.
6.  **MCP Connection Indicators Stuck on Disconnected ([#3147](https://github.com/QwenLM/zqwen-code/Issue/3147))**
    *   *Why it matters:* MCP installations are succeeding, but the UI falsely reports them as disconnected, creating user confusion regarding tool availability.
7.  **Ignoring `.gitignore` in File Mentions ([#3142](https://github.com/QorumLM/zqwen-code/Issue/3142))**
    *   *Why it matters:* Users want a `respectGitignore` setting (similar to Claude Code) so the `@files` feature doesn't surface compiled/build artifacts in the search results.
8.  **Support for `agents.md` Compatibility ([#3140](https://github.com/QwenLM/qwen-code/Issue/3140))**
    *   *Why it matters:* Users migrating from other agentic CLI tools (like `iflow`) want native injection of `agents.md` without having to manually rename their files to `qwen.md`.
9.  **GitHub Copilot Model Integration ([#3128](https://github.com/QwenLM/qwen-code/Issue/3128))**
    *   *Why it matters:* Users are requesting native authentication support to easily route Qwen Code's tooling capabilities through their existing GitHub Copilot quotas.
10. **Proxy Failures in Telegram Channel ([#3122](https://github.com/QwenLM/qwen-code/Issue/3122))**
    *   *Why it matters:* HTTP proxies are ignored during the Telegram `getMe` handshake on Windows, making it impossible to run channel integrations in restricted corporate networks.

---

### 4. Key PR Progress

1.  **[OPEN] feat(channels): add voice message support in TelegramAdapter ([#3150](https://github.com/QwenLM/qwen-code/Pull/3150))**
    *   *Progress:* Adds a `message:voice` handler. Audio is saved as a temp file and processed as an attachment, allowing users to send voice prompts to the bot.
2.  **[OPEN] fix(followup): fix follow-up suggestions not working on OpenAI-compatible providers ([#3151](https://github.com/QwenLM/qwen-code/Pull/3151))**
    *   *Progress:* Squashes 5 pipeline bugs (including hardcoded model names and ignored `fastModel` configs) that caused silent failures when generating follow-up suggestions for third-party LLMs.
3.  **[OPEN] feat(cli): support tools.sandboxImage in settings ([#3146](https://github.com/QwenLM/qwen-code/Pull/3146))**
    *   *Progress:* Implements first-class `tools.sandboxImage` configuration via `settings.json`, establishing a clear CLI > Env Var > Settings > Default resolution hierarchy.
4.  **[OPEN] feat: optimize compact mode UX — shortcuts, settings sync ([#3100](https://github.com/QwenLM/qwen-code/Pull/3100))**
    *   *Progress:* Enhances the `Ctrl+O` compact mode by adding a discoverability overlay to the help menu and ensuring UI state syncs immediately when toggled in settings.
5.  **[OPEN] feat(core): add run_in_background support for Agent tool ([#3076](https://github.com/QwenLM/qwen-code/Pull/3076))**
    *   *Progress:* Enables asynchronous sub-agent execution. Parent agents can now spawn child agents to run in the background and receive a notification upon completion.
6.  **[OPEN] feat(cli): queue input editing — pop queued messages ([#2871](https://github.com/QwenLM/qwen-code/Pull/2871))**
    *   *Progress:* Introduces a mechanism allowing users to edit queued messages using ↑/ESC while the AI is streaming, preventing wasted turns due to typos.
7.  **[OPEN] feat(session): add rename, delete, and auto-title generation ([#3093](https://github.com/QwenLM/qwen-code/Pull/3093))**
    *   *Progress:* Brings robust session management to CLI and VSCode, allowing users to rename, delete, or auto-title conversations, and resume them via `--resume <title>`.
8.  **[MERGED] fix(core): cap recursive file crawler at 100k entries ([#3138](https://github.com/QwenLM/qwen-code/Pull/3138))**
    *   *Progress:* Resolved an OOM crash. When `@` is typed, the autocomplete file search no longer recursively crawls infinitely; it safely caps at 100,000 entries.
9.  **[MERGED] fix: use latest assistant token count on resume ([#3109](https://github.com/QwenLM/qwen-code/Pull/3109))**
    *   *Progress:* Fixes a bug where resuming a compressed session showed stale context usage. The UI now accurately reports the token count from the last API call.
10. **[MERGED] ci(release): parallelize release validation ([#3132](https://github.com/QwenLM/qwen-code/Pull/3132))**
    *   *Progress:* CI/CD optimization. The GitHub Release workflow is restructured to run validation paths in parallel, dramatically speeding up deployment times.

---

### 5. Feature Request Trends

*   **Cross-Platform Channel Integrations:** High interest in connecting the agent to messaging apps (Telegram voice messages, WeChat fixes, DingTalk) and third-party commercial LLM endpoints (GitHub Copilot).
*   **Agent Context & Memory Improvements:** Strong demand for better context management, shown by requests for `agents.md` compatibility, `.gitignore` respect in search, and robust session renaming/resumption workflows.
*   **GUI / Web Interface:** A recurring theme from users struggling with terminal configurations, asking for a dedicated desktop or web UI to manage models and settings.
*   **Asynchronous & Background Operations:** Developers are pushing for the CLI to handle background agents, concurrent execution, and long-running shell tasks (e.g., sudo prompts) better.

---

### 6. Developer Pain Points

*   **Overzealous Content Moderation:** The upstream API's `DataInspectionFailed` error is falsely flagging benign code/Markdown, causing frustrating workflow interruptions.
*   **CJK Localization Gaps:** The inability to name agents using Chinese characters highlights a broader pain point where native language support breaks down at the system/CLI level.
*   **Terminal UI Instability:** Scroll flickering and lack of proper newline insertion (`Shift+Enter` support is a known struggle) degrade the daily driver experience for terminal users.
*   **Configuration Precedence Issues:** Users are confused when workspace settings silently override global models, and CLI flags for things like proxy settings fail to propagate down to channel modules.

</details>