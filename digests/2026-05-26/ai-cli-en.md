# AI CLI Tools Community Digest 2026-05-26

> Generated: 2026-05-25 22:19 UTC | Tools covered: 9

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

Here is the cross-tool comparison report analyzing the AI CLI ecosystem as of May 26, 2026.

## 1. Ecosystem Overview
The AI CLI tool landscape is currently characterized by aggressive iteration and shared growing pains as tools transition from simple chat interfaces to autonomous coding agents. Market leaders like Claude Code, OpenAI Codex, and GitHub Copilot CLI are facing headwinds in platform stability—specifically around context management, guardrail false positives, and connectivity. Simultaneously, highly active open-source challengers (Gemini CLI, Qwen Code, Pi, CodeWhale) are rapidly closing the feature gap, heavily focusing on provider diversification and daemon architectures. A defining theme across the entire ecosystem is the shift from single-prompt generation to complex multi-agent workflows, bringing to light critical architectural bottlenecks in memory, state management, and inter-process communication.

## 2. Activity Comparison
Development velocity remains high across the board, though community engagement heavily favors the larger proprietary-backed ecosystems. 

| Tool | Issues (Today) | PRs Noted (Today) | Release Status | Primary Focus |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10+ | 10 | No Release (v2.1.148-149) | Guardrails, permissions, data loss |
| **OpenAI Codex** | 10+ | 10 | No Release | Vim emulation, TUI stability, GPT-5.5 bugs |
| **Gemini CLI** | 10+ | 10 | No Release | Auto memory hardening, agent hanging |
| **GitHub Copilot CLI** | 10+ | 0 | **v1.0.55-0** | Remote sessions, sub-agent context loss |
| **OpenCode** | 10+ | 10 | No Release | Multi-provider support, billing, compaction |
| **Pi** | 10+ | 10 | No Release | Provider crashes, 429 handling, TUI polish |
| **Qwen Code** | 10+ | 10 | **v0.16.1** | Daemon mode (`qwen serve`), telemetry |
| **Kimi CLI** | 4 | 1 | No Release | Bun/TS rewrite, WebSocket stability |
| **DeepSeek TUI (CodeWhale)** | 10+ | 10 | **v0.8.44** | Rebranding (CodeWhale), cache-maximal agents |

*(Note: "10+" reflects the Top 10 tracked issues/PRs analyzed in the digest data).*

## 3. Shared Feature Directions
As AI CLIs mature, several universal requirements have emerged across independent tool communities:

*   **Advanced Session State & Recovery (Codex, Claude, OpenCode):** Developers are demanding robust rollback mechanisms. OpenAI Codex users are heavily requesting a `/rewind` command (143 👍), OpenCode users want persistent session goals (`/goal`), and Claude Code users are mourning the loss of the persistent `/buddy` companion. 
*   **Daemon/Headless Modes for Agents (Qwen, Copilot, Kimi):** The CLI is increasingly becoming a backend orchestrator rather than just a terminal interface. Qwen Code is actively building HTTP/SSE routes for `qwen serve`, while Copilot CLI and Kimi CLI are addressing how external GUIs and web-sockets can interact with headless CLI agents.
*   **Hardened Guardrails over Advisory Rules (Claude, Gemini, CodeWhale):** Communities are realizing that LLM "advisory rules" (e.g., `CLAUDE.md`) are frequently ignored by models leading to data loss. There is a massive push for hard execution blocks (e.g., Claude's `block-build-commands` hooks, CodeWhale's typed exec policies, and Gemini's request to block destructive behaviors).
*   **Sub-Agent & MCP Protocol Stability (Copilot, Claude, OpenCode):** Multi-agent setups are hitting walls. Copilot CLI agents fail when parsing JSON arrays via MCP, Claude struggles with blown sub-agent context due to MCP schemas, and OpenCode is working on delegating tasks across vision/non-vision models.
*   **Provider Diversification (Pi, OpenCode, CodeWhale):** Multi-model routing is standardizing. Tools like Pi (adding DashScope/OpenRouter cost tracking), OpenCode, and CodeWhale are building abstraction layers to prevent vendor lock-in and mitigate individual model outages.

## 4. Differentiation Analysis
While sharing broad directions, the tools target different market segments and employ distinct technical architectures:

*   **Claude Code & OpenAI Codex:** Both act as premium, proprietary walled gardens optimizing for deep, complex code generation. They differ in UI approach—Codex is pushing a massive Vim-emulation layer for veteran terminal users, while Claude focuses on integrated companion/automation skills. Both are currently battling model-specific regressions (GPT-5.5 degradation vs. Claude's over-triggering safety guardrails).
*   **GitHub Copilot CLI:** Focuses heavily on the enterprise and IDE-integration market. Its differentiator is deep GitHub ecosystem tying (remote sessions, mobile approvals), though it currently lags in raw CLI autonomous orchestration compared to Codex or Claude.
*   **Gemini CLI & Qwen Code:** Represent the "Big Tech Open Source" challengers. Gemini is heavily focused on the mechanics of agentic memory (AST-aware navigation, Auto-Memory patching). Qwen is differentiating via a rapid cadence and a heavy focus on observability (OpenTelemetry) and daemon-mode architecture for IDE plugin integration.
*   **CodeWhale (fmr. DeepSeek TUI), Pi, & OpenCode:** These are the agile, multi-provider innovators. Because they don't have to push a single proprietary model, they focus on routing, cost-tracking, and highly customized TUIs. CodeWhale is uniquely experimenting with "cache-maximal graph architectures" and agent vocabularies (`/hunt`), leaning heavily into experimental agentic structures.

## 5. Community Momentum & Maturity
*   **Highest Momentum (Open Source Challengers):** **Qwen Code**, **Gemini CLI**, and **CodeWhale** show incredible velocity. CodeWhale seamlessly executed a major rebrand while shipping complex architectural proposals. Qwen Code is merging massive PRs for daemon modes at breakneck speed.
*   **Mature but Slowing (Proprietary Leaders):** **Claude Code** has immense community engagement (the "Bring Back Buddy" thread has 1,100+ 👍), but is currently struggling to ship fixes for critical data-loss and permission bugs. **OpenAI Codex** has active maintainers pushing crucial fixes (like macOS TUI corruption), but is facing severe community backlash over sudden GPT-5.5 model degradation.
*   **Emerging / Niche:** **Kimi CLI** has lower volume but is undergoing a monumental community-driven rewrite from Python to Bun/TypeScript, indicating a forthcoming shift in momentum. **Pi** maintains a tight focus on provider stability and TUI polish. 

## 6. Trend Signals (Strategic Takeaways)
1.  **Advisory Context is Dead, Hard Hooks are King:** The era of relying on markdown files (e.g., `CLAUDE.md`) to stop AI from deleting code is ending. Developers now demand hard OS-level permission hooks and pre-execution tool validation. *Takeaway: Tool builders must invest in robust, user-configurable permission lifecycles.*
2.  **Multi-Agent Context is the New Bottleneck:** The transition to multi-agent workflows is breaking token limits. Eagerly loading MCP schemas or failing to compact agent history causes silent crashes and ballooning costs. *Takeaway: Expect a rapid industry-wide shift toward AST-aware context retrieval and aggressive context compaction tooling.*
3.  **The CLI is Becoming a Server:** Tools are no longer just REPLs. The push toward HTTP/SSE endpoints (Qwen), WebSocket APIs (Kimi), and remote orchestration (Copilot) indicates that CLI tools are evolving into local orchestration servers powering web UIs and IDE extensions. 
4.  **Model Instability Drives Multi-Provider Adoption:** Sudden degradation in frontier models (like GPT-5.5) or arbitrary billing tier changes (like Claude Sonnet 4.6 routing) is eroding developer trust. *Takeaway: Enterprise developers are increasingly routing through tools like OpenCode or Pi that allow instant model-failover, treating LLMs as interchangeable compute rather than brand loyalty.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-05-26 | Source: [anthropics/skills](https://github.com/anthropics/skills)*

## 1. Top Skills Ranking

Based on community engagement across PRs and Issues, here are the most-discussed Skills currently in the ecosystem:

1. **`document-typography`** — [#514](https://github.com/anthropics/skills/pull/514) *(Open)*
   **Functionality:** Prevents common typographic errors in AI-generated documents, including orphan word wraps, widow paragraphs, and numbering misalignment.
   **Highlights:** Addresses a universal pain point—poor typography in Claude-generated output—with an automated quality control layer. Currently waiting for review.

2. **`odt` (OpenDocument Handler)** — [#486](https://github.com/anthropics/skills/pull/486) *(Open)*
   **Functionality:** Full lifecycle management for OpenDocument files (.odt, .ods)—creation, template filling, parsing to HTML, and conversion.
   **Highlights:** Fills a notable gap in open-source document standards support. Active since March 2026 with sustained community interest through April.

3. **`skill-quality-analyzer` & `skill-security-analyzer`** — [#83](https://github.com/anthropics/skills/pull/83) *(Open)*
   **Functionality:** Two "meta-skills" for evaluating Claude Code Skills across five dimensions (structure, documentation, etc.) and detecting security vulnerabilities.
   **Highlights:** Recognizes that the Skills ecosystem needs its own quality assurance tooling as it scales. Long-running PR (since Nov 2025) signals potential complexity in merging.

4. **`frontend-design` (Improved)** — [#210](https://github.com/anthropics/skills/pull/210) *(Open)*
   **Functionality:** Overhaul of the existing frontend-design skill to provide clearer, more actionable, and internally coherent instructions for Claude.
   **Highlights:** Focuses on token efficiency and operational clarity—a recurring theme in community feedback. ([See also Issue #202](https://github.com/anthropics/skills/issues/202))

5. **`n8n-builder` & `n8n-debugger`** — [#190](https://github.com/anthropics/skills/pull/190) *(Open)*
   **Functionality:** Production-tested skills for building n8n automation workflows from scratch and debugging them, alongside a `faf-expert` skill for Foundational AI-context Format files.
   **Highlights:** Directly maps to the strong community demand for workflow automation tools. Maintained active discussion through May 2026.

6. **`testing-patterns`** — [#723](https://github.com/anthropics/skills/pull/723) *(Open)*
   **Functionality:** Comprehensive testing skill covering unit testing (AAA pattern), React component testing, integration patterns, and testing philosophy (Testing Trophy model).
   **Highlights:** Covers the full testing stack, filling a critical gap for code quality enforcement in automated workflows.

7. **`ServiceNow` Platform Suite** — [#568](https://github.com/anthropics/skills/pull/568) *(Open)*
   **Functionality:** Broad ServiceNow platform assistant covering ITSM, ITOM, SecOps, ITAM/SAM, FSM, SPM, CSDM, and IntegrationHub.
   **Highlights:** Represents the growing trend of enterprise platform integration Skills.

---

## 2. Community Demand Trends

Distilled from top-voted and most-commented Issues:

| Trend | Evidence | Demand Signal |
|--------|----------|---------------|
| **Organization & Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (👍 7, 13 comments) | Users want org-wide skill libraries and direct sharing links instead of manual file transfers |
| **Workflow Automation** | [#190](https://github.com/anthropics/skills/pull/190), [#16](https://github.com/anthropics/skills/issues/16) | Strong demand for n8n integration and exposing Skills as MCP APIs for automation |
| **Context Window Optimization** | [#1102](https://github.com/anthropics/skills/issues/1102), [#189](https://github.com/anthropics/skills/issues/189) (👍 8) | MCP data compression, plugin deduplication, and preventing context window congestion |
| **Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492), [#1175](https://github.com/anthropics/skills/issues/1175) | Namespace impersonation risks, access control in SKILL.md, and agent governance patterns ([#412](https://github.com/anthropics/skills/issues/412)) |
| **Cross-Platform Compatibility** | [#556](https://github.com/anthropics/skills/issues/556) (👍 6), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050) | Windows support is a major pain point—`run_eval.py` broken, subprocess failures, encoding bugs |
| **Enterprise Integrations** | [#568](https://github.com/anthropics/skills/pull/568), [#181](https://github.com/anthropics/skills/pull/181) | ServiceNow, SAP, and SharePoint integrations are highly requested |

---

## 3. High-Potential Pending Skills

These active PRs address validated community pain points and are likely to land soon:

- **`pdf` Fixes** — [#538](https://github.com/anthropics/skills/pull/538): Corrects case-sensitive file references breaking on Linux. Small scope, high impact.
- **`docx` Tracked Change Fix** — [#541](https://github.com/anthropics/skills/pull/541): Prevents document corruption from `w:id` collisions. Addresses a data-integrity bug.
- **`skill-creator` YAML Validation** — [#539](https://github.com/anthropics/skills/pull/539): Warns on unquoted YAML descriptions with special characters—improves the Skill development experience.
- **`skill-creator` Windows Fixes** — [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050): Two independent fixes for Windows subprocess and encoding failures. High demand given the platform gap.
- **`CONTRIBUTING.md`** — [#509](https://github.com/anthropics/skills/pull/509): Addresses the repo's 25% community health score. Directly responds to [#452](https://github.com/anthropics/skills/issues/452).

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for robust enterprise document processing Skills (ODT, PDF, DOCX, typography) and seamless organizational skill-sharing capabilities—reflecting a shift from individual developer tooling toward team-scale, production-ready document workflows.**

---

# Claude Code Community Digest — 2026-05-26

## 1. Today's Highlights

No new releases were shipped in the past 24 hours, but the community remains highly active around persistent pain points in permissions, data loss, and safety guardrail over-triggering. A cluster of community-contributed PRs aims to improve hook guardrails, triage automation, and credential detection. The "Bring Back Buddy" mega-thread continues to dominate engagement with over 1,100 👍 and 253 comments.

## 2. Releases

No new releases in the last 24 hours. The latest stable version appears to be in the **v2.1.148–v2.1.149** range based on issue reports.

---

## 3. Hot Issues

1. **[#45596 — Bring Back Buddy](https://github.com/anthropics/claude-code/issues/45596)** (👍 1114, 253 comments)
   The removal of the `/buddy` companion skill in v2.1.97 without notice remains the most-voted issue in the repo. The community views it as a core workflow feature, and this consolidated thread continues to attract daily engagement nearly 7 weeks after its creation.

2. **[#62190 — Severe safety guardrail over-triggering](https://github.com/anthropics/claude-code/issues/62190)** (👍 4, 4 comments)
   A fresh report that Claude hallucinates usage-policy violations on completely harmless prompts (also echoed in [#60366](https://github.com/anthropics/claude-code/issues/60366), 👍 16, 46 comments, where saying "hi" triggers a policy error). This is trending upward as a high-friction blocker for everyday use.

3. **[#36168 — Bypass permissions broken since v2.1.77](https://github.com/anthropics/claude-code/issues/36168)** (👍 63, 53 comments)
   On macOS/VSCode, the `--dangerously-skip-permissions` flag stopped working. Combined with [#61415](https://github.com/anthropics/claude-code/issues/61415) (👍 9, 29 comments) where the Desktop UI actively reverts permission mode changes, power users are unable to operate in unattended/automation contexts.

4. **[#37888 — Claude runs forbidden destructive git commands](https://github.com/anthropics/claude-code/issues/37888)** (👍 0, 14 comments)
   A serious data-loss report: Claude executed `git checkout --` destroying 30+ files of uncommitted work—even after writing a memory rule forbidding that exact command. Highlights the gap between advisory rules (CLAUDE.md, memory) and hard enforcement.

5. **[#59248 & #62272 — Silent session transcript deletion](https://github.com/anthropics/claude-code/issues/59248)** (👍 2, 7 comments / 👍 0, 2 comments)
   Two separate reports of Claude Code silently deleting JSONL conversation transcripts from `~/.claude/projects/`, even when `cleanupPeriodDays` is set to a very high value. This undermines trust in local data persistence.

6. **[#60185 — New scroll UI breaks tmux copy mode](https://github.com/anthropics/claude-code/issues/60185)** (👍 3, 3 comments)
   The internal scroll viewport prevents tmux scrollback from working. For terminal-centric developers this is a significant workflow regression, as they can no longer use vim motions to navigate Claude's output.

7. **[#40198 & #50674 — Cowork VM fails on Windows ARM64](https://github.com/anthropics/claude-code/issues/40198)** (👍 6, 49 comments / 👍 0, 8 comments)
   Snapdragon X Elite users cannot start the Cowork VM. Despite passing readiness checks, the VM fails at runtime. This blocks a growing hardware segment as ARM64 Windows laptops gain market share.

8. **[#60141 — Subagent context blown by MCP tool schemas](https://github.com/anthropics/claude-code/issues/60141)** (👍 0, 4 comments)
   Eagerly materializing all MCP tool JSON schemas and skill listings into subagent context wastes significant token budget. For users with many MCP servers, this can consume a large portion of the subagent window before any actual work begins.

9. **[#62314 — Sonnet 4.6 routes all requests to expensive long-context tier](https://github.com/anthropics/claude-code/issues/62314)** (👍 0, 2 comments)
   On Claude Desktop 2.1.149, every `claude-sonnet-4-6` request is routed to the 1M context tier even with minimal context (~46K tokens), resulting in 429 errors demanding usage credits. A billing/routing bug that directly impacts cost.

10. **[#61511 — Context meter doubles during in-flight tool call](https://github.com/anthropics/claude-code/issues/61511)** (👍 1, 2 comments)
    On Windows with Opus 4.7 (1M context), the context-usage indicator spuriously jumps from ~44% to ~87% during an active `advisor` tool call, then reverts on cancel. The phantom inflation can trigger premature compaction, losing important context.

---

## 4. Key PR Progress

1. **[#62315 — Fix hookify event filtering in pre/post hooks](https://github.com/anthropics/claude-code/pull/62315)** (AMPGATE)
   Fixes a bug in the hook event filtering logic within the pre/post tool-use hook system, ensuring hooks fire correctly for their intended events.

2. **[#62262 — Fix dedupe bot suggesting closed/duplicate issues](https://github.com/anthropics/claude-code/pull/62262)** (giruuuuj)
   Prevents the deduplication bot from suggesting or auto-closing issues as duplicates of issues that are themselves closed or already marked as duplicate—a meta-triage improvement.

3. **[#62264 — Add block-build-commands hook example](https://github.com/anthropics/claude-code/pull/62264)** (giruuuuj)
   Adds a `PreToolUse` hook example that blocks build/compilation commands (cmake, make, gradle, cargo build, etc.) from executing via the Bash tool, providing hard execution guardrails that can't be overridden by the model.

4. **[#62261 — Add sandbox filesystem example with allowSkillsWrites](https://github.com/anthropics/claude-code/pull/62261)** (giruuuuj)
   Demonstrates a settings configuration for sandboxed filesystem access with an `allowSkillsWrites` toggle, addressing a config-override request for skill-based write permissions.

5. **[#62260 — Handle empty bug report bodies in triage](https://github.com/anthropics/claude-code/pull/62260)** (giruuuuj)
   Improves the triage workflow to detect issues with empty/whitespace-only bodies and automatically apply `bug` + `needs-info` labels with a nudge to the author.

6. **[#62099 — Add credential-guard plugin for hardcoded secret detection](https://github.com/anthropics/claude-code/pull/62099)** (ppradyoth)
   A new plugin that scans `Write`, `Edit`, `MultiEdit`, and `Bash` tool calls for 20+ credential patterns (API keys, tokens, etc.) before content reaches disk. Addresses a real concern about AI-generated code accidentally committing secrets.

7. **[#62023 — Fix @claude trigger word-boundary in workflows](https://github.com/anthropics/claude-code/pull/62023)** (DeliLevente99) — *Closed*
   Fixed the GitHub Actions `@claude` trigger to use word boundaries, preventing false positives from mentions like `@claude-plugins-official`. A clean fix for workflow reliability.

8. **[#62309 — `claude --worktree` bases off origin/default, not parent HEAD](https://github.com/anthropics/claude-code/issues/62309)** (dougwmorrow)
   Reports that `--worktree` silently bases new branches on `origin/<default>` and prepends `worktree-` to names, breaking multi-session coordination conventions that rely on verbatim branch naming.

9. **[#62308 — `--bg-pty-host` spins at 100% CPU when idle](https://github.com/anthropics/claude-code/issues/62308)** (realmaitreal)
   Background PTY host process doesn't handle EOF, causing a permanent 100% CPU spin when a background session goes idle. A resource leak that affects long-running automation.

10. **[#62313 — SIGBUS on RHEL 9 / AlmaLinux 9](https://github.com/anthropics/claude-code/issues/62313)** (jordankurtzweg)
    The packaged binary crashes with a bus error on enterprise Linux kernels (5.14) due to an unsupported `ARCH_SET_XCOMP_PERM` syscall. Blocks adoption in enterprise/server environments.

---

## 5. Feature Request Trends

- **Companion / agent UX:** The `/buddy` removal remains the single most-requested feature restoration. The community wants a persistent, stateful companion integrated into the TUI, not just a stateless tool interface. ([#45596](https://github.com/anthropics/claude-code/issues/45596))
- **Task queuing / batch execution:** Multiple requests for the ability to queue 3–5 sequential or parallel tasks without waiting for each to finish. Comparisons to OpenAI Codex CLI's shipped feature are frequent. ([#33323](https://github.com/anthropics/claude-code/issues/33323), 👍 18)
- **Multi-agent coordination:** Native git-based multi-agent coordination with scope enforcement and round management is a growing ask from teams running parallel Claude sessions on a single repo. ([#45270](https://github.com/anthropics/claude-code/issues/45270))
- **Granular UI controls:** Font-size adjustments independent of UI scaling on macOS Desktop. ([#50543](https://github.com/anthropics/claude-code/issues/50543), 👍 10)
- **Multiple connector accounts:** Support for same connector type with different accounts in claude.ai/code. ([#27302](https://github.com/anthropics/claude-code/issues/27302), 👍 243)

---

## 6. Developer Pain Points

- **Data loss is the #1 trust issue:** Silent deletion of session transcripts ([#59248](https://github.com/anthropics/claude-code/issues/59248), [#62272](https://github.com/anthropics/claude-code/issues/62272)), Claude executing forbidden destructive commands ([#37888](https://github.com/anthropics/claude-code/issues/37888)), and context compaction destroying scroll history ([#62316](https://github.com/anthropics/claude-code/issues/62316)) collectively signal that developers cannot trust Claude Code to preserve their work. Advisory rules (CLAUDE.md, memory) are consistently ignored by the model.

- **Permission system regressions:** Two separate bugs prevent bypass/dangerous permissions mode from working on macOS ([#36168](https://github.com/anthropics/claude-code/issues/36168), [#61415](https://github.com/anthropics/claude-code/issues/61415)), blocking CI/CD and automation workflows. This has been broken for over two months across multiple versions.

- **Safety guardrail over-correction:** False-positive policy violation errors on benign prompts ([#60366](https://github.com/anthropics/claude-code/issues/60366), [#62190](https://github.com/anthropics/claude-code/issues/62190)) are making the tool unreliable for basic interactions. The phrase "I can't even say hi" appears multiple times.

- **Platform gaps (Windows ARM64, enterprise Linux):** Cowork VM failures on Snapdragon X ([#40198](https://github.com/anthropics/claude-code/issues/40198), [#50674](https://github.com/anthropics/claude-code/issues/50674)) and SIGBUS on RHEL 9 ([#62313](https://github.com/anthropics/claude-code/issues/62313)) indicate incomplete platform coverage just as these architectures are gaining traction.

- **Context budget mismanagement:** Eagerly materialized MCP schemas waste subagent context ([#60141](https://github.com/anthropics/claude-code/issues/60141)), and phantom context-meter inflation forces premature compaction ([#61511](https://github.com/anthropics/claude-code/issues/61511)). For users paying per-token, this is both a cost and functionality issue.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-26

## 1. Today's Highlights
The Codex engineering team had a highly active day, merging significant bug fixes for long-standing macOS terminal corruption and JSONL history issues, while simultaneously pushing a massive 9-part PR stack to introduce advanced Vim emulation into the TUI. New foundational features like environment variable persistence (`CODEX_ENV_FILE`) and interactive code review "Story Cockpits" also landed. Meanwhile, the community is actively expressing concern over recent GPT-5.5 model degradation and persistent connectivity drops in the Desktop App.

## 2. Releases
No new official versions were released in the last 24 hours.

## 3. Hot Issues

*   **[bug, model-behavior] [GPT-5.5 performance and reliability seem significantly worse today (#24431)](https://github.com/openai/codex/issues/24431)**
    *   *Why it matters:* Users report a sharp, sudden degradation in GPT-5.5 coding capabilities over the past 48 hours, noting failed bug fixes and damaged existing codebases.
    *   *Reaction:* Quick engagement (4 comments in hours) confirms widespread sentiment that the model's current reasoning loop is noticeably broken.
*   **[bug, connectivity] [Frequent reconnect loop in Codex App (#18960)](https://github.com/openai/codex/issues/18960)**
    *   *Why it matters:* A highly popular issue (27 👍) where WebSockets close prematurely during streaming, breaking workflows for Pro users. 
    *   *Reaction:* Continues to be a severe pain point with heavy commentary (31 comments) awaiting a definitive server-side fix.
*   **[enhancement, TUI] [CLI: Add /rewind checkpoint restore (#11626)](https://github.com/openai/codex/issues/11626)**
    *   *Why it matters:* The top-voted issue of the day (143 👍). Users want the ability to revert both chat context and applied code edits simultaneously.
    *   *Reaction:* Viewed as a critical missing safety net for aggressive AI code generation.
*   **[bug, session] [Session disappear. Codex trips over bad JSON history (#24425)](https://github.com/openai/codex/issues/24425)**
    *   *Why it matters:* Sudden session loss due to corrupted JSONL history files completely derails deep work.
    *   *Reaction:* Prompted immediate action from maintainers, resulting in PR #24474 to add better error logging for rollout writes.
*   **[bug, app] [Codex Desktop project chat histories disappeared after recent update (#20741)](https://github.com/openai/codex/issues/20741)**
    *   *Why it matters:* A scary bug where app updates wipe the sidebar and project chat history (though search still works). 
*   **[bug, windows-os] [Context window usage indicator is not displayed (#24272)](https://github.com/openai/codex/issues/24272)**
    *   *Why it matters:* Windows users are flying blind regarding token limits, leading to unexpected truncation and lost context.
*   **[enhancement, context] [Codex on GPT-5.5 when will it support 1M? (#24031)](https://github.com/openai/codex/issues/24031)**
    *   *Why it matters:* Users are frustrated by silent closures of previous requests and demand the promised 1M context window for GPT-5.5 to handle large codebases.
*   **[bug, windows-os] [Computer Use Chrome extension unavailable (#21700)](https://github.com/openai/codex/issues/21700)**
    *   *Why it matters:* The Chrome integration for Computer Use is completely blocked because the extension was removed from the Web Store.
*   **[bug, app, plan] [Failed to set goal (#24466)](https://github.com/openai/codex/issues/24466)**
    *   *Why it matters:* A regression in the Desktop App where using the `/goal` command throws a persistent "Failed to set goal" error.
*   **[bug, sandbox] [`.agents/` writes blocked (#24461)](https://github.com/openai/codex/issues/24461)**
    *   *Why it matters:* Users cannot write to `.agents/` directories even when explicitly granting writable roots, breaking complex multi-agent workflows.

## 4. Key PR Progress

*   **[feat(tui): Vim Emulation 9-Part Stack (#24476, #24477, #24480, #24483, #24486, #24487, #24492, #24496)](https://github.com/openai/codex/pull/24496)** (and linked PRs)
    *   *Description:* A massive overhaul of the TUI composer. Introduces Vim-like `c`/`d`/`y` changes, `f`/`t` finds, prose/tag text objects, command counts, named registers, and visual modes.
*   **[fix(tui): prevent macos stderr from corrupting composer (#24459)](https://github.com/openai/codex/pull/24459)** 
    *   *Description:* Fixes the highly annoying `MallocStackLogging` bug (#17139) where macOS diagnostics painted over the TUI state.
*   **[fix(remote-control): surface websocket task stalls (#24473)](https://github.com/openai/codex/pull/24473)**
    *   *Description:* Addresses remote-control hangs by adding better logging to detect where websocket setup/teardown stalls, helping diagnose offline hosts.
*   **[feat(review-story): add interactive story cockpit (#24358)](https://github.com/openai/codex/pull/24358)**
    *   *Description:* Introduces a new guided TUI review surface where developers step through conceptual changes rather than reading raw diffs.
*   **[Add CODEX_ENV_FILE env persistence (#24468)](https://github.com/openai/codex/pull/24468)**
    *   *Description:* Adds much-needed environment persistence, allowing hooks and plugins to securely export shell variables for subsequent commands without altering user prompts.
*   **[reject empty base64 image inputs (#24376)](https://github.com/openai/codex/pull/24376)**
    *   *Description:* Prevents a known "poisoned-thread" shape where empty images cause unrecoverable loops on subsequent turns.
*   **[fix(process-hardening): preserve macos malloc diagnostics (#24479)](https://github.com/openai/codex/pull/24479)**
    *   *Description:* A follow-up revert that properly preserves macOS allocator diagnostic controls without letting them corrupt the TUI.
*   **[Add config knob to disable `request_user_input` tool (#24494)](https://github.com/openai/codex/pull/24494)**
    *   *Description:* Allows developers to disable the model's ability to pause and ask for user input, enabling stricter autonomous/headless execution.
*   **[Log rollout writer OS errors (#24474)](https://github.com/openai/codex/pull/24474)**
    *   *Description:* Directly addresses session loss (#24425) by logging the underlying OS errors during JSONL writes, preventing silent data corruption.
*   **[Add analytics for rejected turn/start requests (#24488)](https://github.com/openai/codex/pull/24488)**
    *   *Description:* Improves observability by tracking when the backend rejects a turn request (e.g., for oversized input) which previously vanished silently.

## 5. Feature Request Trends

*   **Advanced CLI Checkpointing:** A persistent demand for a native `/rewind` feature that safely reverts both workspace files and conversational context.
*   **Broader Context Windows:** Heavy demand for the promised 1M context limit for GPT-5.5, as current limits fragment large project workflows.
*   **MCP Expansions:** Requests to deepen Model Context Protocol support, specifically enabling MCP server prompts directly via the `/` menu.
*   **Programmatic/Desktop Orchestration:** Developers want external tools to be able to spawn and query Codex Desktop threads via an API.
*   **Finer-Grained Subagent Control:** Requests for preflight checks before spawning subagents, allowing the main agent to gracefully handle thread limits.

## 6. Developer Pain Points

*   **Model Reliability Regression:** The most vocal pain point today is the perceived drop in GPT-5.5 quality, with multiple reports of the model breaking previously functional code.
*   **Network & Websocket Stability:** Frequent disconnects (`stream disconnected before completion`) require manual restarts and ruin long automated tasks.
*   **State & History Corruption:** The loss of chat histories due to bad updates or JSONL corruption strikes at the heart of developer trust in the tool's reliability.
*   **UI/UX Blind Spots:** The absence of a context window usage indicator in the IDE extensions and the bloat of irrelevant plugins in the TUI `$` menu are degrading the user experience.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

## Gemini CLI Community Digest — 2026-05-26

Here is the technical analysis of the Gemini CLI ecosystem for May 26, 2026, based on repository activity over the last 24 hours.

### 1. Today's Highlights
No new versions were released today, but the community and maintainers remain highly active across core stability and agent intelligence initiatives. A major theme is the hardening of the Auto Memory system, which saw three new reports addressing logging redactions, invalid patch handling, and infinite retry loops. Additionally, contributors submitted several crucial stability fixes, including PTY/EBADF handling on session resumes, configurable tool-call timeouts, and improved Windows terminal image pasting support.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
1. **[Agent Reliability] Generalist agent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409))**: A critical P1 bug where the CLI hangs indefinitely when deferring to the generalist agent. It has garnered 8 thumbs-up, indicating high user impact.
2. **[Memory/Security] Deterministic redaction and logging limits ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525))**: Addresses a significant security/privacy gap where secret redaction currently happens *after* local transcript content is loaded into the LLM context.
3. **[Memory/Reliability] Stop Auto Memory from retrying low-signal sessions indefinitely ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522))**: Highlights an architectural flaw where the background extractor continuously resurfaces unprocessed, low-signal sessions.
4. **[Memory/Integrity] Surface or quarantine invalid Auto Memory patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523))**: Points out that the memory inbox silently drops malformed patches without alerting the user or cleaning up aggregate state.
5. **[Agent Logic] Subagent falsely reports success on MAX_TURNS interruption ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))**: A dangerous P1 bug where agents hitting maximum turn limits report `status: "success"`, hiding the fact that work was truncated.
6. **[Routing] Gemini encounters 400 error with >128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))**: The agent struggles to dynamically limit active tools, causing API failures when tool contexts get too large.
7. **[UX] Shell command execution gets stuck ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))**: A highly upvoted issue where the CLI permanently hangs waiting for user input after a simple shell command has already completed.
8. **[Agent Quality] Assess AST-aware file reads and mapping ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))**: A feature epic exploring AST-aware tools to reduce token noise and improve codebase navigation accuracy.
9. **[Agent Safety] Agent should stop/discourage destructive behavior ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672))**: Users report the agent using dangerous commands (e.g., `git reset --force`) when safer alternatives exist.
10. **[Permissions] (Sub)agents running without permission since v0.33.0 ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093))**: A regression where subagents execute despite being explicitly disabled in configuration files.

### 4. Key PR Progress
1. **Add configurable per-tool-call timeout ([PR #27438](https://github.com/google-gemini/gemini-cli/pull/27438))**: Implements a centralized `tools.callTimeout` configuration and a `withTimeout()` utility to prevent tool executions from hanging indefinitely.
2. **Fix broken troubleshooting.md URL ([PR #27427](https://github.com/google-gemini/gemini-cli/pull/27427))**: A quick but critical P1 documentation fix redirecting a broken Markdown link to the correct path.
3. **Handle EBADF in resizePty catch block ([PR #27429](https://github.com/google-gemini/gemini-cli/pull/27429))**: Resolves a crash during `--resume` by gracefully treating stale PTY file descriptors (EBADF) the same as terminated processes (ESRCH).
4. **Add `[Skill]` tag to slash command autocomplete ([PR #27440](https://github.com/google-gemini/gemini-cli/pull/27440))**: Enhances the UI/UX by appending `[Skill]` tags to user-installed slash commands, matching the existing `[MCP]` and `[Agent]` visual treatment.
5. **Ensure non-interactive shell respects `enableInteractiveShell: false` ([PR #27418](https://github.com/google-gemini/gemini-cli/pull/27418))**: Improves native bridge stability by safely handling non-UTF-8 bytes and buffer overflows in non-interactive execution mode.
6. **Add configurable numeric routing rules ([PR #27406](https://github.com/google-gemini/gemini-cli/pull/27406))**: Replaces hardcoded model-selection thresholds with customizable routing tiers based on task complexity scores.
7. **Windows image pasting and clipboard styling support ([PR #27054](https://github.com/google-gemini/gemini-cli/pull/27054))**: Fixes empty bracketed-paste sequences from Windows Terminal, enabling seamless image pasting from the clipboard.
8. **Add `/compress` slash command for ACP ([PR #27151](https://github.com/google-gemini/gemini-cli/pull/27151))**: Extends history compaction to the ACP protocol so longer-running sessions don't silently burn tokens when hitting the context window.
9. **Fix sandbox `imageExists` false negatives ([PR #27428](https://github.com/google-gemini/gemini-cli/pull/27428))**: Replaces fragile `docker images -q` stdout parsing with the reliable `docker inspect` exit code to fix issues with `DOCKER_BUILDKIT`.
10. **Deep-merge user and workspace settings in A2A server ([PR #26931](https://github.com/google-gemini/gemini-cli/pull/26931))**: Resolves an issue where workspace settings with only one nested key silently wiped out all other user configurations.

### 5. Feature Request Trends
- **AST-Aware Codebase Navigation**: High demand for AST-aware tools (e.g., AST grep, tilth, glyph) to improve file reading, method bounding, and codebase mapping without burning excess tokens.
- **Refined Agent Routing**: Users want granular, configurable control over how tasks are routed to specific models and subagents based on complexity scoring.
- **Backgroundable Agents**: Requesting the ability to send long-running local subagents to the background (e.g., via `Ctrl+B`) to allow the main agent to continue non-blocking tasks.
- **Improved Self-Awareness**: Feature requests asking the CLI to intrinsically understand its own mechanics, CLI flags, and hotkeys to better assist users without guessing.

### 6. Developer Pain Points
- **Agent Hanging and Silent Failures**: Developers are frustrated by general agent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)) and the CLI falsely reporting success when agents hit turn limits or crash unexpectedly.
- **Auto Memory Instability**: The background memory system currently requires better lifecycle management; infinite loops on low-signal sessions and silent failures on malformed patches are degrading the user experience.
- **Workstation Clutter**: When restricted to shell execution, the model leaves behind temporary scripts in random directories, requiring manual workspace cleanup ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).
- **Configuration Ignored**: Multiple reports of the CLI ignoring user configurations, most notably agents running when explicitly disabled ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) and the Browser Agent ignoring `settings.json` overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-26

## 1. Today's Highlights
A new patch release, **v1.0.55-0**, is now available, delivering a critical fix for extensions failing to launch when the CLI operates as a single-executable application (SEA). The community is heavily focused on **remote sessions and agent reliability**, with users reporting configuration regressions in v1.0.51+ and sub-agents failing to execute MCP tool calls correctly. Plugin and extension developers continue to push for better hook lifecycle data and tooling visibility within the CLI ecosystem.

## 2. Releases
*   **v1.0.55-0**
    *   **Fixed:** Extensions now launch correctly when the CLI runs as a single-executable application (SEA).

## 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

1.  **[OPEN] Remote sessions blocked by organization admin settings ([#3442](https://github.com/github/copilot-cli/issues/3442))**
    *   *Why it matters:* A high-priority regression affecting enterprise users. After updating to v1.0.51, users cannot enable remote sessions (`/remote on`) due to a misplaced or erroneous admin policy warning. (+10 upvotes)
2.  **[OPEN] Google Gemini model availability ([#2854](https://github.com/github/copilot-cli/issues/2854))**
    *   *Why it matters:* High community demand (+15 upvotes) for expanding LLM provider support within the CLI, specifically requesting native integration of Google's Gemini models.
3.  **[OPEN] `preToolUse` hooks trigger false confirmation dialogs ([#2643](https://github/copilot-cli/issues/2643))**
    *   *Why it matters:* Even when hooks explicitly set `permissionDecision: allow`, the CLI still prompts the user. This breaks the potential for fully automated, silent command rewrites via extensions.
4.  **[OPEN] Shift+Enter submits instead of inserting a newline ([#2776](https://github/copilot-cli/issues/2776))**
    *   *Why it matters:* A UX friction point. Standard behavior in most IDEs and chat interfaces binds Shift+Enter to new lines, but the CLI currently submits the prompt.
5.  **[OPEN] Sub-agent MCP tool calls fail on JSON arrays ([#3030](https://github/copilot-cli/issues/3030))**
    *   *Why it matters:* A critical blocker for multi-agent architectures. Sub-agents fail with Zod validation errors (`structuredContent: expected record, received array`) when calling MCP tools that return arrays.
6.  **[CLOSED] Empty `workingDirectory` in extension hooks ([#3508](https://github/copilot-cli/issues/3508))**
    *   *Why it matters:* A recently patched pain point where lifecycle hooks lost the actual working directory path (returning `""`) starting in v1.0.51.
7.  **[OPEN] `/env` fails to list loaded extensions ([#3479](https://github/copilot-cli/issues/3479))**
    *   *Why it matters:* Prevents the AI agent from discovering purpose-built extensions, causing it to fall back on raw CLI tools when better plugins are available.
8.  **[OPEN] Android app limits remote session budgets ([#2979](https://github/copilot-cli/issues/2979))**
    *   *Why it matters:* Mobile users hitting their monthly premium request limit are blocked from interacting with remote sessions, even if they have remaining billing budgets for standard requests.
9.  **[OPEN] `list_agents` returns empty while UI shows active tasks ([#3514](https://github/copilot-cli/issues/3514))**
    *   *Why it matters:* Creates context blindness. The assistant thinks there are no background agents running, even though the user can see multiple active tasks in the UI.
10. **[OPEN] Queued messages delivered out of order ([#3517](https://github/copilot-cli/issues/3517))**
    *   *Why it matters:* Complicates orchestration. If a user sends multiple messages while the agent is executing a tool, the queue processes them non-deterministically.

## 4. Key PR Progress
*There were **0 pull requests** updated in the last 24 hours.* Development activity appears entirely focused on issue triage and internal staging for the next release cycle.

## 5. Feature Request Trends
Analyzing the latest issues reveals distinct trends in what developers want next:
*   **Advanced Session Management:** Users want more robust control over long-running sessions, including the ability to unarchive accidentally dismissed projects ([#3518](https://github.com/github/copilot-cli/issues/3518)) and improved external producer handoffs ([#3515](https://github.com/github/copilot-cli/issues/3515)).
*   **Agent Orchestration & Tooling:** There is a strong push for better sub-agent capabilities. Developers are asking for support for multiple agent directories ([#3505](https://github.com/github/copilot-cli/issues/3505)) and the ability for plugins to explicitly declare required tools when spawning sub-agents ([#3506](https://github.com/github/copilot-cli/issues/3506)).
*   **Mobile/Remote Integration:** Developers are requesting push notifications via the GitHub mobile app to quickly unblock agents waiting for permissions or user input during remote sessions ([#3512](https://github.com/github/copilot-cli/issues/3512)).

## 6. Developer Pain Points
Community frustrations currently center around three main themes:
*   **Regressions in Recent Releases:** Users on versions 1.0.51 through 1.0.54 are experiencing broken functionality, notably with `resume-auto-cd` defaulting the CWD to `/` ([#3515](https://github.com/github/copilot-cli/issues/3515)) and custom instruction configurations being only half-honored by the loader ([#3507](https://github.com/github/copilot-cli/issues/3507)).
*   **Reliability of AI Routing:** The AI still struggles to follow strict instructions. Developers are frustrated when the model ignores readily available Language Server Protocol (LSP) integrations in favor of inferior `grep`/raw searches ([#3516](https://github.com/github/copilot-cli/issues/3516)).
*   **Multi-Agent Context Loss:** Background agents and sub-agents frequently lose context or state visibility (like empty `list_agents` arrays and MCP array-parsing crashes), severely limiting the reliability of automated CLI workflows.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-26

## 1. Today's Highlights
No new releases were shipped in the past 24 hours, but the community remains highly active on the architectural and compatibility fronts. A massive pull request to rewrite the entire CLI from Python to Bun + TypeScript + React Ink received fresh updates, signaling potential convergence on a major tech stack migration. Meanwhile, developers are actively flagging runtime issues with the WebSocket API and pushing for better compatibility with competitive tools like OpenAI's Codex.

## 2. Releases
No new releases were recorded in the last 24 hours. The project appears to be in a feature-development and stabilization phase, possibly paving the way for a major version bump aligned with the potential TypeScript rewrite.

## 3. Hot Issues
*(4 issues updated in the last 24 hours)*

*   **[#2365 `kimi-code-worker` hangs on Shell tool via WebSocket API](https://github.com/MoonshotAI/kimi-cli/issues/2365)** [OPEN]
    A critical runtime bug reported within the last 24 hours. When utilizing version `1.44.0` via the WebSocket API (running `kimi web`), the `kimi-code-worker` completely hangs when invoking the `Shell` tool. This directly impacts developers using Kimi CLI in automated or web-integrated environments.
*   **[#1894 Recursive loading of nested skill directories](https://github.com/MoonshotAI/kimi-cli/issues/1894)** [OPEN]
    Users are frustrated by a lack of feature parity with OpenAI's Codex. Kimi CLI currently fails to recursively load nested skill directories (e.g., `.agents/skills/{name}/skills/xxx`). Resolving this is crucial for developers managing complex, modular AI agent behaviors in large repositories.
*   **[#2232 Background tasks need adjustable timeouts](https://github.com/MoonshotAI/kimi-cli/issues/2232)** [OPEN]
    Developers report that the AI frequently underestimates task execution times. Because background tasks are hard-killed upon timeout, users lose progress and must manually restart tasks. The community is requesting configurable timeout parameters to prevent premature task termination.
*   **[#2173 Add crow-cli support to kimi coding plan](https://github.com/MoonshotAI/kimi-cli/issues/2173)** [CLOSED]
    The author of `crow-cli` requested the ability to inject custom API keys/base URLs into the agent, a feature apparently removed in recent updates. While currently closed, this highlights ongoing developer demand for API flexibility and third-party client compatibility.

## 4. Key PR Progress
*(1 PR updated in the last 24 hours)*

*   **[#1707 refactor: rewrite from Python to Bun + TypeScript + React Ink](https://github.com/MoonshotAI/kimi-cli/pull/1707)** [OPEN]
    This is a monumental PR for the project. The contributor proposes a complete rewrite of `kimi-cli` from Python to a modern stack (Bun + TypeScript + React Ink). The sheer scale—166 TypeScript/TSX files, ~32k lines of code, and 37 test files covering 211 features—indicates a massive community-driven effort to improve CLI performance, UI rendering, and ecosystem compatibility (aligning it closer to tools like Claude Code's architecture).

## 5. Feature Request Trends
Based on recent issue tracker activity, the community is strongly pushing for two primary feature directions:
1.  **Ecosystem & Protocol Compatibility:** Developers want Kimi CLI to seamlessly support standard agent configurations (like nested skill directories) and allow third-party tool integrations via custom API endpoints.
2.  **Granular Execution Control:** Users require more fine-grained control over background processes, specifically the ability to customize or extend timeout parameters to accommodate complex, long-running AI tasks.

## 6. Developer Pain Points
Recurring frustrations among Kimi CLI developers currently center around:
*   **Hard Limits Breaking Workflow:** The hardcoded timeout for background tasks is a major bottleneck, causing the loss of mid-execution progress and requiring constant manual supervision.
*   **Execution Reliability:** The WebSocket worker hanging on shell executions (Issue #2365) indicates growing pains in headless/web-CLI integrations.
*   **Runtime Performance:** The very existence of PR #1707 (and the author's blunt assessment that "using Python for the CLI is a complete failure") echoes underlying developer frustrations with the current runtime's speed and terminal UI capabilities.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-26

## 1. Today's Highlights
The OpenCode community saw a significant spike in activity around **LLM provider integrations** and **billing/subscription reliability**. Several high-impact bugs were reported—including OpenAI stream freezing, DeepSeek V4 thinking mode API errors, and Kimi K2.5 tool-calling failures—indicating growing pains with the latest generation of frontier models. On the contributions front, community PRs are actively targeting long-standing session/compaction bugs and permission system improvements.

## 2. Releases
No new releases were published in the last 24 hours.

---

## 3. Hot Issues

1. **[#29079](https://github.com/anomalyco/opencode/issues/29079) — GPT Models take too long to respond** (👍 24, 44 comments)  
   Users report GPT 5.4 (xhigh variant) sometimes takes minutes for simple prompts. High comment volume suggests this is affecting many users; could be provider-side throttling or a streaming regression in OpenCode. Worth monitoring.

2. **[#20650](https://github.com/anomalyco/opencode/issues/20650) — Kimi k2.5 tool calling failures** (59 comments)  
   JSON parsing errors in bash tool invocation, plus the model attempting unavailable tools. A long-running open issue (since April) with active discussion — Kimi integration clearly needs provider-side or middleware fixes.

3. **[#24722](https://github.com/anomalyco/opencode/issues/24722) — DeepSeek V4 thinking mode drops `reasoning_content` on tool turns** (👍 10, 13 comments)  
   Causes 400 errors from the DeepSeek API. A protocol-level bug that breaks agentic workflows when thinking mode is enabled. Critical for anyone using DeepSeek for coding agents.

4. **[#27906](https://github.com/anomalyco/opencode/issues/27906) — v1.15.1+ breaks Bun installs** (👍 7, 12 comments)  
   New postinstall lifecycle scripts block global installs via Bun, which disables lifecycle scripts by default. A packaging/architecture decision that impacts a growing segment of the JS/TS ecosystem.

5. **[#29129](https://github.com/anomalyco/opencode/issues/29129) — OpenAI stream intermittently freezes (high CPU, idle socket)** (👍 9, 12 comments)  
   The process stays alive and burns CPU without producing output — requiring manual restart. Intermittent but severe; likely a streaming/SSE parsing edge case.

6. **[#13838](https://github.com/anomalyco/opencode/issues/13838) — Compaction replay injects fake "What did we do so far?" message** (15 comments)  
   Auto-compaction resumes sessions by injecting a synthetic user message, causing unwanted summary generation. This breaks the flow of agentic sessions and pollutes conversation history.

7. **[#29154](https://github.com/anomalyco/opencode/issues/29154) — Kimi K2.6 validation error: "Extra inputs not permitted; field: permissions"** (7 comments)  
   A previously working Go model (`opencode-go/kimi-k2.6`) now fails with a provider validation error, suggesting a schema/API contract change on the Kimi side.

8. **[#29262](https://github.com/anomalyco/opencode/issues/29262) — `--continue --fork` TUI shows server error with `"dummy"` session ID** (5 comments)  
   Forking a continued session passes `"dummy"` as the session ID instead of a valid one. A UX-breaking regression on a core workflow.

9. **[#29216](https://github.com/anomalyco/opencode/issues/29216) — Non-vision models blocked from passing images to vision-capable MCP tools** (2 comments)  
   When using a non-vision model, image attachments are rejected before the LLM can delegate to a vision-capable MCP tool. An architectural limitation that undercuts the MCP ecosystem's value.

10. **[#27167](https://github.com/anomalyco/opencode/issues/27167) — [FEATURE] Add native session goals with `/goal`** (👍 31, 24 comments)  
    The most-upvoted feature request in this cycle. Proposes persistent session-level goals/lifecycle management. High engagement signals strong community demand.

---

## 4. Key PR Progress

1. **[#29279](https://github.com/anomalyco/opencode/pull/29279) — fix(provider): emit file metadata instead of error for non-vision models** (by andrea-tomassi)  
   Directly addresses [#29216](https://github.com/anomalyco/opencode/issues/29216). Passes file metadata through to non-vision models so they can delegate to vision-capable MCP tools — a clean architectural fix.

2. **[#29179](https://github.com/anomalyco/opencode/pull/29179) — remove polling from experimental background agents** (by rekram1-node)  
   Replaces model-facing polling with a push-based notification system where background subagents post completion messages through the normal async prompt path. Significant architectural simplification.

3. **[#29276](https://github.com/anomalyco/opencode/pull/29276) — fix(session): defer defaultAgent lookup in summarize handler** (by andrea-tomassi)  
   Fixes `/compact` silently failing when `default_agent` is a subagent-only config. Defers agent resolution so the session's last valid agent is used instead.

4. **[#28067](https://github.com/anomalyco/opencode/pull/28067) — fix(session): reconcile compaction summary with preserved tail** (by samiralibabic)  
   Addresses stale compaction summaries that still list completed work as "next steps." Reconciles the summary against the preserved tail of the conversation.

5. **[#29265](https://github.com/anomalyco/opencode/pull/29265) — fix(app): restore queued follow-up setting** (by GriffinBoris)  
   Re-enables queued follow-ups across 6 linked issues. The queuing flow was intact but the setting was disabled.

6. **[#28108](https://github.com/anomalyco/opencode/pull/28108) — fix: permission absolute/tilde rules not matching external files** (by WebCu)  
   Fixes path format mismatch between `external_directory` (absolute paths) and the evaluator (relative), unifying permission matching for external file access.

7. **[#27694](https://github.com/anomalyco/opencode/pull/27694) — fix(opencode): resolve LSP dependencies from workspace root** (by samiralibabic)  
   Fixes LSP resolution for monorepos where OpenCode is launched from the root but the language project lives in a child directory.

8. **[#29267](https://github.com/anomalyco/opencode/pull/29267) — feat(app): add instance reload action for WebUI** (by c-w-xiaohei)  
   Adds `POST /instance/reload` endpoint for manually reloading cached project/worktree instances — addresses stale state in long-lived server processes.

9. **[#12633](https://github.com/anomalyco/opencode/pull/12633) — feat(tui): add auto-accept mode for permission requests** (by thdxr)  
   Long-running contributor PR adding a toggleable auto-accept mode for edit permissions (default: `shift+tab`). Speeds up agentic workflows by reducing manual approvals.

10. **[#29278](https://github.com/anomalyco/opencode/pull/29278) — feat(opencode): add `/simplify` built-in skill** (by AbdoKnbGit)  
    New built-in skill that spawns three concurrent review agents (reuse, quality, efficiency) against the current git diff. A second attempt after [#29274](https://github.com/anomalyco/opencode/pull/29274) was closed.

---

## 5. Feature Request Trends

| Direction | Representative Issues | Signal |
|---|---|---|
| **Session lifecycle management** | [#27167](https://github.com/anomalyco/opencode/issues/27167) (goals), [#13838](https://github.com/anomalyco/opencode/issues/13838) (compaction), [#29271](https://github.com/anomalyco/opencode/issues/29271) (monorepo subagent dispatch) | Users want richer, more persistent session semantics — goals, better compaction, monorepo-aware agent routing. |
| **Git/GUI integration** | [#26558](https://github.com/anomalyco/opencode/issues/26558) (Git GUI), [#29266](https://github.com/anomalyco/opencode/issues/29266) (instance reload) | Demand for lightweight Git workflows inside OpenCode without context-switching to terminal. |
| **LSP deepening** | [#29252](https://github.com/anomalyco/opencode/issues/29252) (LSP formatting/rename), [#2156](https://github.com/anomalyco/opencode/issues/2156) (stale diagnostics) | Community wants OpenCode to leverage LSP more — formatting, symbol rename, and fresher diagnostics. |
| **MCP ecosystem maturation** | [#29216](https://github.com/anomalyco/opencode/issues/29216) (non-vision → vision MCP delegation) | MCP toolchains are hitting real limitations around modality routing. |

---

## 6. Developer Pain Points

- **LLM provider instability is the #1 friction.** Three separate high-comment issues (Kimi K2.5/K2.6 tool calling, DeepSeek V4 reasoning_content, OpenAI stream freezes, GPT latency spikes) reflect that OpenCode's multi-provider abstraction is under strain from rapidly evolving model APIs.

- **Billing and subscription reliability is eroding trust.** Multiple reports of double-charging ([#29248](https://github.com/anomalyco/opencode/issues/29248), [#28094](https://github.com/anomalyco/opencode/issues/28094)), subscription verification failures ([#29207](https://github.com/anomalyco/opencode/issues/29207), [#29135](https://github.com/anomalyco/opencode/issues/29135)), and pricing opacity around DeepSeek V4 Pro reductions ([#28962](https://github.com/anomalyco/opencode/issues/28962), [#29115](https://github.com/anomalyco/opencode/issues/29115)) are recurring daily. This needs systemic attention.

- **Session management edge cases remain brittle.** Compaction, `--continue --fork`, and subagent-only configs all surface bugs in the session lifecycle. The community is actively contributing fixes, but the core session replay/fork architecture needs a consolidated hardening pass.

- **Package manager compatibility (Bun).** The postinstall script requirement introduced in v1.15.1 ([#27906](https://github.com/anomalyco/opencode/issues/27906)) breaks Bun global installs. As Bun adoption grows, this becomes a blocker for that segment of the user base.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-26

## 1. Today's Highlights
The Pi ecosystem saw a massive surge in activity focused on provider stability and TUI polish. The most critical fix of the day addresses indefinite hangs and silent crashes caused by infinite provider retries on 429 (Rate Limit) errors and unhandled terminal EPIPEs. Additionally, the community shipped significant quality-of-life updates, including a new Alibaba DashScope provider, enhanced cost tracking for OpenRouter, and improved markdown rendering in the terminal.

## 2. Releases
No new official releases were published in the last 24 hours.

## 3. Hot Issues
1. **[#4945](https://github.com/earendil-works/pi/issues/4945) [OPEN] OpenAI Codex hangs on "Working..." indefinitely:** Users are experiencing complete TUI freezes when using GPT-5.5 due to zero-usage aborted turns. This highlights a critical reliability flaw in how the client handles silent disconnects.
2. **[#4666](https://github.com/earendil-works/pi/issues/4666) [OPEN] 429 Retry-After waits ignore max limits:** The SDK currently trusts extreme `retry-after` headers from providers, causing the agent to silently hang for days instead of failing gracefully. 
3. **[#4984](https://github.com/earendil-works/pi/issues/4984) [CLOSED] Interactive mode crashes on transient EPIPE:** Large outputs from the `edit` tool cause broken pipe crashes that abruptly kill the agent. Resolved quickly via an incoming PR.
4. **[#4801](https://github.com/earendil-works/pi/issues/4801) [OPEN] DeepSeek v4 pro reasoning effort validation error:** OpenRouter fails when passing `xhigh` reasoning effort to DeepSeek v4, indicating a schema mismatch that needs mapping on Pi's side.
5. **[#4929](https://github.com/earendil-works/pi/issues/4929) [OPEN] Silent update failures on pnpm:** Users installing via `pnpm` are reporting that `pi update` respects a silent `minimumReleaseAge` threshold, keeping users on outdated versions without warning.
6. **[#4841](https://github.com/earendil-works/pi/issues/4841) [OPEN] Footer ignores `modelOverrides.name`:** The TUI footer displays raw model IDs instead of user-defined custom names, breaking the UX for those utilizing provider routing.
7. **[#4919](https://github.com/earendil-works/pi/issues/4919) [CLOSED] Auth lock reclamation failure:** A force-quit or crash leaves a stale lock in `auth.json`, causing subsequent sessions to fail with "No API key found".
8. **[#4955](https://github.com/earendil-works/pi/issues/4955) [CLOSED] Support for provider-hosted tools:** A highly discussed feature request asking Pi to support tools that execute directly inside provider requests (e.g., server-side search) rather than strictly via local execution.
9. **[#4989](https://github.com/earendil-works/pi/issues/4989) [CLOSED] Security concern over `pi-commandcode-provider`:** The maintainers flagged a third-party package for reverse-engineering API paths, warning users they will be banned and should use official Provider APIs instead.
10. **[#4918](https://github.com/earendil-works/pi/issues/4918) [CLOSED] Shift+Enter doesn't add a new line:** A high-frequency frustration where `Shift+Enter` sends the prompt instead of creating a newline, pointing to a need for better default keybinding profiles.

## 4. Key PR Progress
1. **[#4991](https://github.com/earendil-works/pi/pull/4991) [OPEN] Disable hidden provider 429 retries:** A critical architectural fix that stops infinite retry loops on rate limits, addressing the days-long hangs noted in issue #4666.
2. **[#4979](https://github.com/earendil-works/pi/pull/4979) [OPEN] Time out idle WebSockets:** Forces WebSocket connections to drop after a period of inactivity, mitigating the Codex/GPT-5.5 freezing issue.
3. **[#4982](https://github.com/earendil-works/pi/pull/4982) [CLOSED] Fix interactive mode crash on EPIPE:** Resolves terminal crash loops by gracefully catching broken pipes during large tool outputs.
4. **[#4964](https://github.com/earendil-works/pi/pull/4964) [CLOSED] Add DashScope provider with 22 Qwen models:** Adds first-class support for Alibaba Bailian, enabling cheap, native Qwen 3.7 Max usage via the OpenAI Responses API.
5. **[#4985](https://github.com/earendil-works/pi/pull/4985) [CLOSED] Utilize OpenRouter cost data in session logs:** Improves token/cost reporting accuracy by capturing actual costs returned by OpenRouter, rather than relying purely on local estimation.
6. **[#4971](https://github.com/earendil-works/pi/pull/4971) [OPEN] Add `allowEmptySignature` for Anthropic providers:** Prevents thinking blocks from being rewritten as plain text on providers that return empty signatures, fixing prompt caching and 400 errors.
7. **[#4974](https://github.com/earendil-works/pi/pull/4974) [CLOSED] Rollback fixes and change review redesign:** A massive monorepo update fixing frontend file-diff passing, hooks compatibility, and introducing auto-memory RPC.
8. **[#4965](https://github.com/earendil-works/pi/pull/4965) [CLOSED] Disable Kitty keyboard flag 2 in VS Code:** Fixes a jarring UX bug where the VS Code terminal viewport reset its scroll position when a user Alt+Tabbed away.
9. **[#4962](https://github.com/earendil-works/pi/pull/4962) [CLOSED] Polish markdown code block rendering:** Upgrades the terminal UI so headings and code blocks render cleanly without displaying raw markdown syntax.
10. **[#256](https://github.com/earendil-works/pi/pull/256) [CLOSED] Implement XDG Base Directory Specification:** Finally resolves legacy path handling by implementing XDG compliance and migrating configs away from `~/.pi/` automatically.

## 5. Feature Request Trends
*   **Provider Diversification & Compatibility:** There is strong momentum toward integrating alternative models (DashScope/Qwen) and resolving provider-specific edge cases, specifically regarding Anthropic thinking signatures and OpenRouter cost tracking.
*   **Advanced Extension APIs:** Developers want deeper hooks into the agent's lifecycle. Requests like exposing the Editor cursor position ([#4957](https://github.com/earendil-works/pi/issues/4957)), streaming behavior on input events ([#4977](https://github.com/earendil-works/pi/issues/4977)), and provider-hosted tool execution ([#4955](https://github.com/earendil-works/pi/issues/4955)) indicate a desire to build complex agentic workflows on top of Pi.
*   **Terminal UI Polish:** A recurring theme is improving the in-terminal experience—better clickable links without broken hyphens, stable scrolling, and professional markdown rendering.

## 6. Developer Pain Points
*   **Unreliable Core Connections:** The most prominent frustration is the agent hanging, freezing, or crashing silently due to mishandled WebSockets, unhandled rate limits (429s), and broken terminal pipes (EPIPE).
*   **State and Lock File Corruption:** Crashing or force-quitting Pi frequently leaves behind stale lock files, resulting in "No API key" errors on the next launch.
*   **Update Friction:** Silent update failures via `pnpm` and confusing update behaviors are preventing developers from staying current with crucial patches.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-26

## 1. Today's Highlights
The Qwen Code team shipped **v0.16.1**, which includes a critical TypeScript build fix (TS5055) and sets the stage for the next production-ready milestone. The community and core contributors are heavily focused on the **daemon mode (`qwen serve`)** architecture, with an influx of new HTTP/SSE routes and design proposals aimed at making Mode B production-ready. Additionally, significant efforts are being directed toward **telemetry observability** and UI/UX stability for parallel agent fan-outs.

## 2. Releases
* **[v0.16.1-nightly.20260525](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1-nightly.20260525.84f408017)**
  * **Build Fix:** Resolved a stubborn TypeScript compilation issue (`TS5055`) by cleaning stale outputs before the build step ([PR #4453](https://github.com/QwenLM/qwen-code/pull/4453)).

## 3. Hot Issues
Here are the 10 most noteworthy issues driving community and maintainer discussion:

1. **[Issue #4175](https://github.com/QwenLM/qwen-code/issues/4175) - Mode B Feature-Priority Roadmap (👍 40 Comments)**
   The central tracking issue for making `qwen serve` production-ready. With Stage 1 daemon and workspace multiplexing merged, this roadmap dictates the remaining work for Mode B.
2. **[Issue #3803](https://github.com/QwenLM/qwen-code/issues/3803) - Daemon Mode Design Proposal (👍 24 Comments)**
   A comprehensive 6-chapter design series mapping out the open decisions and architecture for the `qwen serve` daemon implementation.
3. **[Issue #4514](https://github.com/QwenLM/qwen-code/issues/4514) - Daemon Capability Gaps Post v0.16-alpha**
   Identifies and ranks missing HTTP/SSE surface features needed by downstream SDKs, IDE plugins, and web embedders to properly interface with the daemon.
4. **[Issue #4488](https://github.com/QwenLM/qwen-code/issues/4488) - VSCode v1.120.0 Sidebar UI Glitch**
   Users report that the Qwen Code v0.16.0 extension vanishes ("flashes and disappears") in the latest VSCode versions, hindering IDE workflows.
5. **[Issue #4276](https://github.com/QwenLM/qwen-code/issues/4276) - OOM Crashes**
   Severe memory leak leading to Out-of-Memory crashes during garbage collection, indicating critical performance bottlenecks under heavy workloads.
6. **[Issue #4091](https://github.com/QwenLM/qwen-code/issues/4091) - Project-Level Local Context (`QWEN.local.md`) (👍 Closed)**
   Highly requested feature (👍 2) to add a git-ignored local context file for personalized project settings without polluting the repository.
7. **[Issue #4513](https://github.com/QwenLM/qwen-code/issues/4513) - Inline PNG Data Breaking `qwen3.7-max`**
   A protocol mismatch where Qwen Code sends `inlineData` for multimodal inputs, resulting in 400 Bad Request errors from the OpenAI-compatible endpoint of `qwen3.7-max`.
8. **[Issue #4494](https://github.com/QwenLM/qwen-code/issues/4494) - Side Queries Ignore Output Language**
   Session recaps, titles, and tool-use summaries revert to English even when users explicitly configure a different output language (e.g., Chinese).
9. **[Issue #4425](https://github.com/QwenLM/qwen-code/issues/4425) - Credentials Leaked in Extension Source Diagnostics (P0)**
   A critical security issue where embedded credentials in Git/npm URLs for custom extensions were exposed in source diagnostics.
10. **[Issue #4501](https://github.com/QwenLM/qwen-code/issues/4501) - `enable_thinking` Never Fires for Qwen3 Series**
    A telemetry/pipeline bug where the configuration to disable thinking for side queries silently fails because it expects the field to already exist in the payload.

## 4. Key PR Progress
1. **[PR #4490](https://github.com/QwenLM/qwen-code/pull/4490) - Merge `daemon_mode_b_main` into `main`**
   A massive integration PR syncing Mode B daemon features (F1/F2/F3-prereqs) to main, signaling rapid convergence toward the v0.16 release.
2. **[PR #4516](https://github.com/QwenLM/qwen-code/pull/4516) - Daemon: POST `/session/:id/compress` + `/session/:id/_meta`**
   Implements crucial Tier-1 daemon routes allowing HTTP clients to manually compact context and fetch session metadata.
3. **[PR #4477](https://github.com/QwenLM/qwen-code/pull/4477) - Dense Inline Panel for Parallel Agent Fan-Out**
   Completely overhauls the CLI UI to elegantly display parallel agents (like `/review` using 9 agents) without flooding the terminal.
4. **[PR #4146](https://github.com/QwenLM/qwen-code/pull/4146) - Virtual Viewport for Long Conversations**
   Upgrades the CLI (using Ink 7) to handle long contexts smoothly, solving terminal lag during extended coding sessions.
5. **[PR #4499](https://github.com/QwenLM/qwen-code/pull/4499) - Fix Interaction Span Trace ID Escaping**
   Fixes broken OpenTelemetry traces by correctly attaching interaction spans to the session root context.
6. **[PR #4519](https://github.com/QwenLM/qwen-code/pull/4519) - Honor Output Language in Side Queries**
   Implements a fix for #4494, ensuring telemetry and background agent summaries adhere to the user's configured language.
7. **[PR #4517](https://github.com/QwenLM/qwen-code/pull/4517) - Refresh Model-Derived Defaults for Raw Models**
   Fixes multimodal errors by resetting stale capabilities (like inline images) when users switch to text-only models (e.g., `qwen3.7-max`).
8. **[PR #4515](https://github.com/QwenLM/qwen-code/pull/4515) - Daemon: GET `/session/:id/stats` + `/session/:id/export`**
   Introduces read-only endpoints to the daemon so external SDKs and Web UIs can fetch session stats and exports via HTTP.
9. **[PR #4432](https://github.com/QwenLM/qwen-code/pull/4432) - Telemetry Phase 4b: Retry Visibility**
   Adds per-attempt HTTP-status tracking for LLM requests, making retry loops visible in traces and metrics for the first time.
10. **[PR #4377](https://github.com/QwenLM/qwen-code/pull/4377) - Add User Prompt Expansion Hooks**
    Enhances the slash command lifecycle by introducing hooks that trigger when commands expand into user prompts.

## 5. Feature Request Trends
* **Daemon API Parity (`qwen serve`):** Heavy demand to expose core TUI features (recaps, context compression, stats, export) to HTTP/SSE endpoints for third-party SDK and Web UI integration.
* **Advanced Observability & Telemetry:** Strong focus on OpenTelemetry trace propagation (W3C `traceparent`), session tracking, and accurate token/cost analytics per session.
* **Protocol & Agent Standards:** Early requests to adopt emerging standards like Agent Client Protocol (ACP) v2 Draft features (e.g., `messageId` fields) for better state management.
* **Local Context Isolation:** Users want localized, git-ignored project configurations (`QWEN.local.md`) to personalize the AI without modifying team-wide settings.
* **System & Resource Management:** Feature requests for the CLI to prevent OS sleep during long automated tasks, preventing disconnected workflows.

## 6. Developer Pain Points
* **UI/UX Instability in Long Sessions:** The TUI frequently freezes, lags, or requires a forced terminal kill during large code edits or lengthy conversations ([Issue #4442](https://github.com/QwenLM/qwen-code/issues/4442), [Issue #4471](https://github.com/QwenLM/qwen-code/issues/4471)).
* **Memory Leaks:** Users with heavy agent workloads are encountering severe memory leaks and OOM crashes ([Issue #4276](https://github.com/QwenLM/qwen-code/issues/4276)).
* **Multimodal Context Crashes:** Handling inline image data causes 400 Bad Request errors when interacting with newer text-focused models, requiring manual intervention ([Issue #4513](https://github.com/QwenLM/qwen-code/issues/4513)).
* **OAuth/Login Issues in IDEs:** JetBrains Rider users are experiencing infinite redirect loops when attempting to log in to the Qwen Code plugin ([Issue #4493](https://github.com/QwenLM/qwen-code/issues/4493)).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-05-26

## 1. Today's Highlights
The project officially completed its rebranding to **CodeWhale** with the release of **v0.8.44**, introducing `codewhale` binaries while shipping legacy `deepseek` shims that print a one-line deprecation warning. Alongside the rename, community contributors and maintainers submitted a massive wave of Pull Requests preparing for the **v0.8.45** maintenance release, focusing heavily on TUI UX improvements, new providers (Kimi OAuth), and control-plane stability.

## 2. Releases
- **[v0.8.44](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.44)**: Renames the project from DeepSeek-TUI to **CodeWhale**. Legacy binaries act as deprecation shims for one release cycle and will be removed entirely in v0.9.0. See `docs/REBRAND.md` for migration details.

## 3. Hot Issues

1. **[#1615](https://github.com/Hmbown/CodeWhale/issues/1615) [CLOSED] Docker run renders garbled output**  
   A highly vocal issue (188 comments) where Chinese-speaking users reported corrupted TUI rendering in Docker unless specific locale/font settings were applied. Highlighted the need for better default container configs.

2. **[#2104](https://github.com/Hmbown/CodeWhale/issues/2104) [OPEN] Homebrew `codewhale not found` post-rebrand**  
   The Homebrew formula didn't install the new `codewhale` binary after the rename, breaking `brew upgrade` workflows. A quick-turn fix is already in PR (#2105).

3. **[#2052](https://github.com/Hmbown/CodeWhale/issues/2052) [OPEN] macOS Gatekeeper blocks standalone binary**  
   Apple's "cannot verify" malware warning prevents execution of unsigned manual downloads on macOS 26.5, requiring users to manually clear the quarantine attribute.

4. **[#2134](https://github.com/Hmbown/CodeWhale/issues/2134) [OPEN] Pasting table text auto-submits conversation**  
   Pasting multi-line content (e.g., VS error lists) is incorrectly interpreted as a submit action, causing fragmented user input. Affects daily developer workflows significantly.

5. **[#2114](https://github.com/Hmbown/CodeWhale/issues/2114) [OPEN] Profile switch ignores provider config**  
   Switching profiles via `/profile` keeps the provider as `deepseek` instead of respecting the profile's configured provider, due to environment variable overrides taking precedence.

6. **[#2109](https://github.com/Hmbown/CodeWhale/issues/2109) [OPEN] Model names auto-lowercased**  
   Inputting `DeepSeek-V4-Flash` is silently lowercased to `deepseek-v4-flash`, breaking exact-case API model requirements.

7. **[#2122](https://github.com/Hmbown/CodeWhale/issues/2122) [OPEN] Cache-maximal agent OS vision**  
   A major architectural proposal (EPIC) outlining a future where agentic tools operate over a shared, cache-aware graph rather than rebuilding context via raw text each turn.

8. **[#2092](https://github.com/Hmbown/CodeWhale/issues/2092) [OPEN] Rename `/goal` to `/hunt`**  
   Introduces new vocabulary (quarry, verdict, trophy card) aligned with the whale/rebranding theme, designed to support the upcoming interruptible/recoverable run state.

9. **[#2130](https://github.com/Hmbown/CodeWhale/issues/2130) [OPEN] Web search Bing returns zero results**  
   The default Bing HTML scraper silently fails on technical compound queries. Proposal to fall back to DuckDuckGo for reliability.

10. **[#2138](https://github.com/Hmbown/CodeWhale/issues/2138) [OPEN] `edit_file` tool defers when optional fuzz is omitted**  
    First-session invocation of `edit_file` fails when the `fuzz` parameter isn't explicitly passed, wasting a model turn on a retry.

## 4. Key PR Progress

1. **[#2142](https://github.com/Hmbown/CodeWhale/pull/2142) Add Kimi OAuth provider**  
   Integrates Moonshot/Kimi as a first-class provider, supporting CLI OAuth credentials and automatic refresh handling.

2. **[#2141](https://github.com/Hmbown/CodeWhale/pull/2141) TUI provider balance lookup**  
   Implements the `/balance` command scaffold, allowing users to query their active provider account balance directly from the TUI.

3. **[#2105](https://github.com/Hmbown/CodeWhale/pull/2105) Fix Homebrew formula for rebrand**  
   Updates the formula to install `codewhale-*` binaries as primary artifacts alongside the legacy shims, resolving #2104.

4. **[#2139](https://github.com/Hmbown/CodeWhale/pull/2139) Document macOS Gatekeeper workaround**  
   Adds documentation guiding users on clearing quarantine attributes for standalone binaries (copilot-authored).

5. **[#2133](https://github.com/Hmbown/CodeWhale/pull/2133) Bridge user-input events to external GUI clients**  
   Exposes `UserInputRequired` events and `submit_user_input` APIs to the runtime layer, enabling external clients (e.g., VS Code extensions) to handle interactive prompts.

6. **[#2119](https://github.com/Hmbown/CodeWhale/pull/2119) Fix profile env override precedence**  
   Stops dispatcher-resolved defaults from exporting as TUI env overrides, fixing the provider-switch bug in #2114.

7. **[#2062](https://github.com/Hmbown/CodeWhale/pull/2062) Persist permission rules from TUI prompts**  
   Allows users to save scoped `allow`/`deny` rules directly from the tool approval prompt, building on the typed execpolicy layer.

8. **[#1856](https://github.com/Hmbown/CodeWhale/pull/1856) Replace RwLock with Semaphore**  
   Eliminates a deadlock risk in `ToolCallRuntime` where tools re-entering could block on the same lock, improving parallel tool execution stability.

9. **[#2118](https://github.com/Hmbown/CodeWhale/pull/2118) Prepare v0.8.45 release**  
   The main release prep PR: RLM session objects, cancellable directory/search tools, deterministic agent names, palette cleanup, and config hardening.

10. **[#2135](https://github.com/Hmbown/CodeWhale/pull/2135) Show search provider in `doctor` output**  
    Adds `search_provider` reporting to `codewhale doctor`, helping users debug silent web search failures.

## 5. Feature Request Trends

- **Cache-maximal agent architecture (#2122, #2123, #2124, #2125, #2126, #2127, #2128)**: A sweeping set of proposals for v0.9.0 introducing graph-backed work objects, a tool contract DSL, provider-neutral micro-ops, model-authored tools, and a "slop ledger" for tracking unresolved code residue.
- **Control plane and recovery (#1879, #2092, #2094)**: Consistent demand for interruptible, redirectable agent runs with state recovery, now formalized under the `/hunt` vocabulary and "jurisdiction" judging system.
- **Multi-agent orchestration (#2007)**: Requests for visible, bounded parallel worker runs with disagreement reconciliation over the current "School-mode" exploration.
- **Localisation and voice (#2115, #2116)**: Cross-platform, localized voice input design—pulled from v0.8.45 due to terminal key-binding conflicts (Cmd-K) and needing a more robust STT pipeline.
- **Tooling and Permissions (#1186, #2062)**: Persistent, typed permission rules scoped by tool name, command prefix, or path pattern.

## 6. Developer Pain Points

- **Rebranding migration friction**: The rename to CodeWhale broke Homebrew installs (#2104) and left macOS users blocked by Gatekeeper (#2052) or hitting deprecation warnings without clear next steps.
- **Environment variable / config precedence**: Profile switching silently ignores configured providers (#2114, #2112), causing confusion when managing multi-provider setups.
- **Clipboard and input handling**: Pasting multi-line text auto-submits the conversation (#2134), and WSL2/headless environments hang on startup due to X11 clipboard initialization (#1773).
- **Web search reliability**: The default Bing scraper silently returns empty results for technical queries (#2130), forcing users to manually discover and configure DuckDuckGo.
- **Model name casing issues**: Exact-case model identifiers are lowercased automatically, breaking access to models like `DeepSeek-V4-Flash` (#2109).

</details>