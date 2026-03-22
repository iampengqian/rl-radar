# AI CLI Tools Community Digest 2026-03-23

> Generated: 2026-03-22 22:02 UTC | Tools covered: 7

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

# AI CLI Tools Ecosystem Cross-Tool Analysis
**Report Date:** 2026-03-23 | **Analyst:** Senior Technical Analyst, AI Developer Tools

---

## 1. Ecosystem Overview

The AI CLI tooling ecosystem is maturing rapidly, with all major players now competing on **reliability, session integrity, and IDE integration** rather than just model capabilities. A clear industry-wide transition is underway from simple chat interfaces to **agentic workflows** requiring persistent sessions, parallel subagent execution, and autonomous task loops. However, this complexity has exposed critical infrastructure gaps—particularly around session resumption, context compaction, and cross-platform stability—that are now the primary friction points for enterprise adoption. The convergence toward standardized protocols (LSP, ACP, MCP) signals that the ecosystem is moving from experimental tooling toward production-grade developer infrastructure.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Primary Focus Area |
|------|:------------:|:---------:|----------------|-------------------|
| **Claude Code** | 50 | 4 | No release | Session data integrity, authentication stability, Windows kernel crashes |
| **OpenAI Codex** | 10+ | 10 | No release | Permission/approval infrastructure, TUI rendering, LSP integration |
| **Gemini CLI** | 10 | 10 | No release | AST/LSP integration, Spec-Driven Development, memory management |
| **GitHub Copilot CLI** | 10 | 0 | No release | Model parity with VS Code, session corruption recovery |
| **Kimi Code CLI** | 7 | 7 | No release | Network resilience, YOLO mode automation, session management |
| **OpenCode** | 50 | 20 | No release | Authentication fixes, ACP protocol compliance, provider integrations |
| **Qwen Code** | 10 | 10 | **v0.13.0-nightly** | Context window management, VSCode IDE parity |

**Key Observation:** OpenCode shows the highest PR velocity (20 PRs), while Claude Code and OpenCode are processing the most issue volume (50 each), indicating active community engagement but also potential stability concerns.

---

## 3. Shared Feature Directions

| Direction | Tools Involved | Specific Requirements |
|-----------|----------------|----------------------|
| **LSP Integration** | Gemini CLI, OpenAI Codex | Built-in Language Server Protocol support for semantic code intelligence, diagnostics, and go-to-definition without IDE dependency |
| **Session Resumption & Integrity** | Claude Code, Gemini CLI, Copilot CLI, Kimi CLI | Global session resume across directories, crash recovery for corrupted JSON logs, prevention of history loss during compaction |
| **Context Window Management** | Claude Code, Gemini CLI, Qwen Code | Visibility into token consumption, dynamic truncation strategies, context breakdown commands, masking services |
| **"YOLO Mode" / Auto-Approval** | Kimi CLI, OpenCode, Qwen Code | Persistent auto-approval for trusted environments, scoped policy approvals, reduced friction for automation workflows |
| **Cross-Platform Stability** | Claude Code, OpenAI Codex, Copilot CLI | Windows sandbox/BSOD fixes, Linux namespace errors, macOS TUI rendering issues |
| **IDE-CLI Feature Parity** | Copilot CLI, Qwen Code, OpenAI Codex | Model availability parity (Gemini, Claude variants), slash command consistency, session handoff between web UI and terminal |
| **Agent Communication Protocol (ACP)** | OpenCode, Kimi CLI | Timing compliance for session updates, YOLO mode support in external protocols, state synchronization |

---

## 4. Differentiation Analysis

| Tool | Feature Focus | Target User Profile | Technical Approach |
|------|---------------|---------------------|-------------------|
| **Claude Code** | Enterprise session management, plugin ecosystem, hook extensibility | Power users, teams requiring audit trails, plugin developers | Plugin mutex systems, stop hooks, AGENTS.md cross-tool compatibility |
| **OpenAI Codex** | Permission infrastructure, approval persistence, guardian systems | Security-conscious enterprises, regulated industries | Stacked PRs for exec approval persistence, network approval typing |
| **Gemini CLI** | Spec-Driven Development (SDD), memory architecture, AST-aware tooling | Large codebase maintainers, monorepo teams | TrackerService DAGs, memory routing (global vs project), LSP diagnostics |
| **GitHub Copilot CLI** | Model parity, multimodal input, VS Code integration | GitHub-centric developers, existing Copilot subscribers | SDK hooks, additionalContext APIs (currently broken), session branching |
| **Kimi Code CLI** | Network resilience, automation workflows, remote development | Mobile/remote developers, CI/CD automation | Retry logic for unstable connections, configurable compaction providers |
| **OpenCode** | Multi-provider support, protocol compliance, headless automation | Self-hosted users, multi-cloud teams, automation engineers | Kiro/AWS provider, ACP spec compliance, serve/attach remote sessions |
| **Qwen Code** | Context optimization, VSCode companion depth | VSCode users, token-conscious developers | Tool output masking, dynamic truncation, OpenAI Responses API adoption |

**Notable Technical Divergence:** Gemini CLI and Qwen Code are investing heavily in **context window intelligence** (AST-aware reads, masking services), while Claude Code and OpenAI Codex focus on **permission infrastructure** and **session durability**. This suggests a split between tools optimizing for *context efficiency* versus *operational safety*.

---

## 5. Community Momentum & Maturity

| Tool | Community Activity | Iteration Speed | Maturity Indicators |
|------|-------------------|-----------------|---------------------|
| **Claude Code** | 🟢 High (50 issues/day) | 🟡 Moderate (4 PRs) | Long-standing issues (#11775 - 15 comments over time), plugin ecosystem emerging, enterprise feature requests |
| **OpenAI Codex** | 🟢 Active | 🟢 High (10 stacked PRs) | Systematic infrastructure work (permission persistence), coordinated development, clear architectural vision |
| **Gemini CLI** | 🟢 Active | 🟢 High (10 PRs) | GSoC proposals, architectural debates (memory routing), "zero noise" CI policies indicate production focus |
| **GitHub Copilot CLI** | 🟡 Moderate | 🔴 Low (0 PRs) | Feature gap complaints (model parity), broken SDK hooks, appears under-resourced relative to VS Code extension |
| **Kimi Code CLI** | 🟡 Moderate | 🟢 High (7 PRs) | Rapid response to issues (PRs filed same day as bugs), community-driven fixes, emerging tool |
| **OpenCode** | 🟢 Highest (50 issues, 20 PRs) | 🟢 Highest | Most active development, but highest bug volume suggests stability concerns, auth crises need resolution |
| **Qwen Code** | 🟢 Active | 🟢 High (10 PRs + release) | Only tool with a release today, systematic IDE companion development, context management innovation |

**Assessment:**
- **Most Mature:** OpenAI Codex (systematic infrastructure investment)
- **Fastest Iteration:** OpenCode (20 PRs), but with stability trade-offs
- **Emerging Strongly:** Qwen Code (only release, deep feature work)
- **Concerning Signals:** GitHub Copilot CLI (zero PR activity, broken documented features)

---

## 6. Trend Signals

### Industry-Wide Patterns

| Trend | Signal | Strategic Implication |
|-------|--------|----------------------|
| **Session Integrity as Critical Path** | 4+ tools report session loss, corruption, or resume failures | Enterprise adoption requires **guaranteed state persistence**—this is the new reliability baseline |
| **Context Window Visibility** | Gemini CLI `/context` command, Qwen masking service, Claude compaction hooks | Developers need **token budget transparency** to manage costs and prevent "amnesia" in long sessions |
| **YOLO Mode Demand** | Kimi (#1541), OpenCode (#9808), Qwen (#2570) all request persistent auto-approval | Power users want **automation-capable defaults** with opt-in safety, not friction-by-default |
| **LSP as CLI Primitive** | Gemini CLI (#23464), Codex (#8745) both pursuing native LSP | CLI tools are becoming **IDE-equivalent** in code intelligence, not just chat interfaces |
| **Protocol Standardization (ACP/MCP)** | OpenCode ACP timing fixes, Qwen MCP readOnlyTools, Claude MCP issues | The ecosystem is converging on **interoperability protocols** for agent communication and tool integration |
| **Windows as Second-Class Citizen** | Claude BSOD (#35710), Codex sandbox crashes (#14729), Copilot WSL issues | Cross-platform support remains **genuinely difficult**—Windows-specific testing is underinvested |

### Recommendations for Technical Decision-Makers

1. **For Enterprise Adoption:** Prioritize OpenAI Codex or Claude Code for their investment in permission infrastructure and session durability. Avoid GitHub Copilot CLI until SDK hooks are fixed.

2. **For Monorepo/Large Codebase Teams:** Gemini CLI's AST-aware tooling and memory routing architecture make it the strongest candidate for complex projects.

3. **For Automation/CI Workflows:** Kimi CLI and OpenCode are leading in YOLO mode support and headless capabilities, but OpenCode's current auth crisis requires monitoring.

4. **For Token-Conscious Development:** Qwen Code's context masking and dynamic truncation represent the state-of-the-art in context window management.

5. **Watch Signal:** The industry is converging on **LSP + ACP + MCP** as the protocol stack for agentic tooling. Tools investing in native protocol support (Gemini CLI, OpenCode) will have integration advantages.

---

*Report generated from analysis of 187 issues and 61 PRs across 7 major AI CLI tools.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Analysis Period:** Data as of 2026-03-23

## 1. Top Skills Ranking

The following Pull Requests represent the most active community contributions to the Claude Code Skills ecosystem:

| Rank | Skill | Author | Status | Focus Area |
|------|-------|--------|--------|------------|
| 1 | **document-typography** | PGTBoos | OPEN | Document Quality |
| 2 | **frontend-design** | justinwetch | OPEN | UI/UX Development |
| 3 | **skill-quality-analyzer / skill-security-analyzer** | eovidiu | OPEN | Meta/Developer Tools |
| 4 | **SAP-RPT-1-OSS predictor** | amitlals | OPEN | Enterprise/Analytics |
| 5 | **codebase-inventory-audit** | p19dixon | OPEN | Code Maintenance |
| 6 | **shodh-memory** | varun29ankuS | OPEN | Agent Infrastructure |
| 7 | **management-consulting** | anotb | OPEN | Business Strategy |
| 8 | **session-memory** | Lordanakun | OPEN | Agent Infrastructure |

### Detailed Analysis:

**1. [document-typography](https://github.com/anthropics/skills/pull/514)** *(PGTBoos)*
- **Functionality:** Automated typographic quality control for AI-generated documents—prevents orphan word wrap, widow paragraphs, and numbering misalignment issues that plague every document Claude generates.
- **Status:** OPEN (Created 2026-03-04)
- **Significance:** Addresses a universal pain point users rarely explicitly request but consistently experience.

**2. [frontend-design skill improvement](https://github.com/anthropics/skills/pull/210)** *(justinwetch)*
- **Functionality:** Comprehensive revision improving clarity, actionability, and internal coherence of frontend design guidance—ensures instructions are executable within single conversations.
- **Status:** OPEN (Created 2026-01-05, updated through March)
- **Significance:** Long-standing community contribution improving core development workflow skills.

**3. [skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** *(eovidiu)*
- **Functionality:** Two meta-skills for the marketplace—quality analysis across 5 dimensions (20% weight each) and security analysis for skill validation.
- **Status:** OPEN (Created 2025-11-06)
- **Significance:** "Skills for building skills"—enables community to self-police and elevate skill quality standards.

**4. [SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181)** *(amitlals)*
- **Functionality:** Leverages SAP's open-source tabular foundation model (Apache 2.0, released at SAP TechEd 2025) for predictive analytics on SAP business data.
- **Status:** OPEN (Created 2025-12-28, active through March 2026)
- **Significance:** Enterprise-grade predictive analytics integration for business users.

**5. [codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** *(p19dixon)*
- **Functionality:** 10-step systematic workflow producing `CODEBASE-STATUS.md` as single source of truth—identifies orphaned code, unused files, documentation gaps, and infrastructure bloat.
- **Status:** OPEN (Created 2025-12-16)
- **Significance:** Essential for legacy codebase maintenance and technical debt management.

**6. [shodh-memory](https://github.com/anthropics/skills/pull/154)** *(varun29ankuS)*
- **Functionality:** Persistent memory system maintaining context across conversations—teaches Claude when to call `proactive_context` and how to structure rich memories.
- **Status:** OPEN (Created 2025-12-19)
- **Significance:** Addresses fundamental agent limitation of conversation-bound context.

**7. [management-consulting](https://github.com/anthropics/skills/pull/384)** *(anotb)*
- **Functionality:** Structured problem solving, strategic framework application, business case development, and executive communication—activates on competitive positioning, market entry, and implementation planning queries.
- **Status:** OPEN (Created 2026-02-13, recently updated 2026-03-20)
- **Significance:** Enterprise/business use case expansion for Claude Code.

**8. [session-memory](https://github.com/anthropics/skills/pull/629)** *(Lordanakun)*
- **Functionality:** Preserves critical technical facts across context compaction and session restarts with zero dependencies—solves silent loss of tool outputs (file reads, test output, path information).
- **Status:** OPEN (Created 2026-03-13)
- **Significance:** Zero-dependency approach to the persistent memory problem.

---

## 2. Community Demand Trends

Analysis of Issues reveals the following high-demand Skill directions:

| Trend Category | Demand Signal | Representative Issues |
|----------------|---------------|------------------------|
| **Agent Memory & Persistence** | High | #154, #629, multiple memory-related PRs |
| **Security & Governance** | Critical | [#492](https://github.com/anthropics/skills/issues/492) (trust boundary abuse), [#412](https://github.com/anthropics/skills/issues/412) (agent governance) |
| **MCP Integration** | Strong | [#16](https://github.com/anthropics/skills/issues/16) (Expose Skills as MCPs), [#369](https://github.com/anthropics/skills/issues/369) (MCP Apps support) |
| **Enterprise/SSO Compatibility** | Blocking | [#532](https://github.com/anthropics/skills/issues/532) (API key requirement blocks SSO users) |
| **Cross-Platform Support** | Moderate | [#29](https://github.com/anthropics/skills/issues/29) (AWS Bedrock compatibility) |
| **Skill Quality Standards** | Emerging | [#202](https://github.com/anthropics/skills/issues/202) (best practices for skill-creator) |

**Key Insight:** Security concerns are escalating—Issue #492 (2👍, 4 comments) highlights that community skills distributed under `anthropic/` namespace enable "trust boundary abuse" where users may grant elevated permissions to skills they believe are official.

---

## 3. High-Potential Pending Skills

These active PRs are likely to merge soon based on community engagement and maintainers updates:

| PR | Skill | Merge Readiness | Blocking Factors |
|----|-------|-----------------|------------------|
| [#509](https://github.com/anthropics/skills/pull/509) | CONTRIBUTING.md | **High** | Documentation-only, addresses community health gap (Issue #452) |
| [#674](https://github.com/anthropics/skills/pull/674) | skill-creator design-phase guidance | **High** | Builds on official internal lessons article |
| [#359](https://github.com/anthropics/skills/pull/359) | YAML quoting requirement docs | **High** | Documentation fix preventing parser errors |
| [#362](https://github.com/anthropics/skills/pull/362) | UTF-8 panic fix | **High** | Bug fix for multi-byte character handling |
| [#664](https://github.com/anthropics/skills/pull/664) | claude-obsidian-reporter | **Medium** | Recently created (2026-03-16), addresses documentation automation |
| [#384](https://github.com/anthropics/skills/pull/384) | management-consulting | **Medium** | Recently updated, addresses enterprise gap |

**Infrastructure Fixes Poised for Merge:**
- [#284](https://github.com/anthropics/skills/pull/284): UTF-8 encoding fix for skill-creator (cross-platform consistency)
- [#36](https://github.com/anthropics/skills/pull/36): Frontmatter validation fix

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for persistent agent memory systems that survive context compaction and session boundaries, alongside critical security infrastructure to distinguish official from community skills in the trust boundary.**

**Supporting Evidence:**
- 3+ memory-related PRs (#154, #629) actively developed
- Security Issue #492 (trust boundary vulnerability) received 2👍 and ongoing discussion
- Enterprise authentication barriers (#532, #406, #403) blocking adoption

---

# Claude Code Community Digest — 2026-03-23

## Today's Highlights

A quiet release day with no new versions shipped, but the community is actively surfacing **critical bugs around session management and data integrity**. Multiple reports detail conversation history loss during session resume, context compaction issues, and authentication token expiry killing active agents. Several security-conscious PRs are in review, including a fix for Windows BSOD caused by parallel filesystem operations.

---

## Releases

No releases in the last 24 hours.

---

## Hot Issues

1. **[#32479](https://github.com/anthropics/claude-code/issues/32479) — GitHub Connector not recognized by Claude** (43 comments, 56 👍)
   A high-engagement issue where GitHub Connector shows as connected in Claude Desktop but isn't detected by Claude Code. Frustrating users for 2+ weeks with no resolution.

2. **[#30021](https://github.com/anthropics/claude-code/issues/30021) — "Create PR" button missing in Web/iOS UI** (38 comments, 62 👍)
   After pushing code, the PR creation UI fails to render the button on iOS. High user demand for this core Git workflow feature.

3. **[#37437](https://github.com/anthropics/claude-code/issues/37437) — Session resume breaks conversation history** (5 comments)
   **Data loss bug**: API 403 retries corrupt the `parentUuid` chain, causing entire conversation history to disappear on resume. Critical for long-running sessions.

4. **[#37490](https://github.com/anthropics/claude-code/issues/37490) — Background task fork bomb** (5 comments)
   When a background Bash task hangs, Claude Code respawns it infinitely, potentially crashing the system. Has repro steps.

5. **[#37324](https://github.com/anthropics/claude-code/issues/37324) — Session token expires with concurrent subagents** (4 comments, 3 👍)
   Spawning multiple isolated agents causes authentication to fail mid-session. Blocks parallel agent workflows.

6. **[#36460](https://github.com/anthropics/claude-code/issues/36460) — `--channels` flag ignored on Max plan** (11 comments, 14 👍)
   Discord/Telegram integration silently disabled for personal Max subscriptions. Users discovering feature limitations without warning.

7. **[#37135](https://github.com/anthropics/claude-code/issues/37135) — Stop hooks hang on large JSON** (4 comments)
   Regression in v2.1.78: plugin Stop hooks with large JSON payloads hang indefinitely. Blocks plugin developers.

8. **[#37418](https://github.com/anthropics/claude-code/issues/37418) — MCP screenshot makes session unusable** (4 comments)
   After a screenshot pushes the request over 20MB, the session permanently errors on every message. No recovery path.

9. **[#37574](https://github.com/anthropics/claude-code/issues/37574) — Destructive DB command without confirmation** (2 comments)
   Claude autonomously ran `doctrine:fixtures:load` without `--append`, purging dev database. Raises safety concerns for destructive operations.

10. **[#11775](https://github.com/anthropics/claude-code/issues/11775) — Plan agent ignores allowed piped commands** (15 comments, 22 👍)
    Long-standing regression where permission settings for piped commands are ignored by the Plan agent.

---

## Key PR Progress

1. **[#35710](https://github.com/anthropics/claude-code/pull/35710) — Fix Windows BSOD (Wof.sys) from parallel fs operations**
   Critical fix adding a tool-mutex plugin to limit concurrent filesystem calls that trigger Windows kernel crashes. Awaiting review.

2. **[#37241](https://github.com/anthropics/claude-code/pull/37241) — Add agents-md plugin** *(CLOSED)*
   Auto-loads `AGENTS.md` at session start for cross-tool compatibility (Cursor, Codex, Amp). Addresses [#6235](https://github.com/anthropics/claude-code/issues/6235) with 246 comments.

3. **[#37082](https://github.com/anthropics/claude-code/pull/37082) — Add agentmarkup plugin**
   New plugin for making websites machine-readable via `llms.txt`, JSON-LD, and AI crawler directives. Includes auto-trigger.

4. **[#36253](https://github.com/anthropics/claude-code/pull/36253) — Hook examples for file guard, session primer, notifications**
   Documentation/examples PR adding practical hook patterns for common workflows.

---

## Feature Request Trends

| Theme | Description |
|-------|-------------|
| **Hook system expansion** | Requests for `session_id` in all hook types ([#37339](https://github.com/anthropics/claude-code/issues/37339)), `PostCompact` firing in new session context ([#37101](https://github.com/anthropics/claude-code/issues/37101)) |
| **Channel integrations** | Slash commands (`/clear`, `/compact`) via Telegram/Discord ([#37342](https://github.com/anthropics/claude-code/issues/37342)) |
| **Self-awareness APIs** | Expose `session_id` and context window usage to the AI model itself ([#36678](https://github.com/anthropics/claude-code/issues/36678)) |
| **UI customization** | Customizable "thinking" verbs in TUI ([#36262](https://github.com/anthropics/claude-code/issues/36262)) |

---

## Developer Pain Points

- **Session/History Data Loss**: Multiple reports of conversation history disappearing due to compaction, broken `parentUuid` chains, and abnormal exits ([#37437](https://github.com/anthropics/claude-code/issues/37437), [#37103](https://github.com/anthropics/claude-code/issues/37103), [#37449](https://github.com/anthropics/claude-code/issues/37449))

- **Resume Visibility**: CLI sessions missing from `/resume` list; `TeamCreate` sessions permanently hidden ([#37474](https://github.com/anthropics/claude-code/issues/37474), [#37099](https://github.com/anthropics/claude-code/issues/37099))

- **Authentication Instability**: Token expiry killing active agents, especially with concurrent subagents ([#37468](https://github.com/anthropics/claude-code/issues/37468), [#37324](https://github.com/anthropics/claude-code/issues/37324))

- **Context Compaction Side Effects**: `/branch` inheriting full context, Cowork losing scrollable history, no post-compact hooks in session context ([#36000](https://github.com/anthropics/claude-code/issues/36000), [#37273](https://github.com/anthropics/claude-code/issues/37273))

- **Platform-Specific Crashes**: Windows BSOD, macOS slow responses, Linux fork bombs — all lack graceful degradation ([#37408](https://github.com/anthropics/claude-code/issues/37408), [#37490](https://github.com/anthropics/claude-code/issues/37490))

---

*Digest generated from 50 issues and 4 PRs updated in the last 24 hours.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-03-23

---

## 1. Today's Highlights

Development activity remains focused on strengthening the **permission and approval infrastructure** within the Codex application server, evident from a series of stacked PRs introducing exec approval persistence and UI request handling. In the community, the push for **LSP integration** in the CLI continues to dominate discussions with significant engagement, while users report critical usability hindrances including **TUI rendering glitches** and **Windows-specific sandbox failures**.

---

## 2. Releases

No new releases were recorded in the last 24 hours.

---

## 3. Hot Issues

1.  **[LSP Integration Request](https://github.com/openai/codex/issues/8745)**: The top issue proposes built-in Language Server Protocol support for the CLI to enable auto-detection/installation of language servers, aiming to improve code intelligence and diagnostics (+200 👍).
2.  **[Token Refresh Loop](https://github.com/openai/codex/issues/9634)**: Users are experiencing a blocking authentication bug where the refresh token is invalidated, forcing repeated logouts. This affects Pro users on `gpt-5.2-codex`.
3.  **[ChatGPT Integration](https://github.com/openai/codex/issues/2153)**: A popular request (+94 👍) asks for seamless session handoff between Codex CLI and ChatGPT to leverage web search/UI features before returning to the terminal for execution.
4.  **[Windows `codex-command-runner` Crash](https://github.com/openai/codex/issues/14729)**: A critical failure on Windows VS Code Insiders prevents Codex from editing files, crashing with exit code `0xc0000022`.
5.  **[TUI Response Truncation](https://github.com/openai/codex/issues/10901)**: A regression in CLI `v0.98.0` is causing the first paragraph of responses to be cut off, disrupting the reading flow.
6.  **[Sandbox Directory Leak](https://github.com/openai/codex/issues/5237)**: A security concern where Codex reads files outside the working directory. This issue was recently updated/CLOSED, suggesting a fix or resolution path.
7.  **[Diff Viewer Enhancement](https://github.com/openai/codex/issues/2932)**: Users want an improved diff experience in VS Code, specifically requesting the use of the native VS Code diff viewer instead of the current sidebar implementation (+20 👍).
8.  **[Markdown Table Formatting](https://github.com/openai/codex/issues/8259)**: The TUI currently renders markdown tables with broken whitespace, making them unreadable (+34 👍).
9.  **[Bubblewrap Subagent Failure](https://github.com/openai/codex/issues/12572)**: Linux users on Ubuntu 24.04 are encountering `RTM_NEWADDR` errors with Bubblewrap, preventing subagents from executing commands.
10. **[API High Error Rate](https://github.com/openai/codex/issues/15105)**: Reports of widespread API failures affecting CLI users, with "high demand" errors persisting for roughly 2 hours.

---

## 4. Key PR Progress

1.  **[PR #15470: Add request_permissions profile persistence core support](https://github.com/openai/codex/pull/15470)**: Foundational work for persisting user permission profiles across sessions.
2.  **[PR #15471: Add request_permissions UI support](https://github.com/openai/codex/pull/15471)**: Complements the core persistence PR by adding the necessary UI layer for permission requests.
3.  **[PR #15472: Add exec approval profile persistence core support](https://github.com/openai/codex/pull/15472)**: Implements the backend logic to save and restore execution approval settings.
4.  **[PR #15473: Add exec approval app-server support](https://github.com/openai/codex/pull/15473)**: Integrates the new exec approval logic into the application server.
5.  **[PR #15464: Remove smart_approvals alias migration](https://github.com/openai/codex/pull/15464)**: Technical debt cleanup removing legacy `smart_approvals` migration code in favor of `guardian_approval`.
6.  **[PR #15312: fix(tui): restore clean agent thread replay and streaming](https://github.com/openai/codex/pull/15312)**: Fixes corruption in agent thread views by preferring completed payloads over legacy deltas.
7.  **[PR #14822: Core reference turn context state](https://github.com/openai/codex/pull/14822)**: Refactors context management to centralize reference-turn bookkeeping, improving reliability during context compaction.
8.  **[PR #15442: Core: defer fork context injection to first turn](https://github.com/openai/codex/pull/15442)**: Optimizes fork startup by deferring context injection, reducing startup overhead.
9.  **[PR #15469: Type parent item ids for network approval reviews](https://github.com/openai/codex/pull/15469)**: Enhances type safety for network approval reviews by threading typed parent IDs through the event system.
10. **[PR #14733: Show turn-context diffs when backtracking](https://github.com/openai/codex/pull/14733)**: Improves the UX of backtracking by displaying diffs of permission/mode changes in the TUI.

---

## 5. Feature Request Trends

*   **Deep Editor/Protocol Integration**: Strong demand for **LSP support** (#8745) and native **VS Code Diff viewer** integration (#2932) indicates users want Codex to leverage existing IDE intelligence rather than treating the editor as a simple text buffer.
*   **Workflow Continuity**: Requests for **ChatGPT-to-CLI session handoff** (#2153) suggest users want to use the ChatGPT web UI for research/planning and the CLI for implementation without losing context.
*   **TUI Refinement**: Users are pushing for better visual fidelity in the terminal, specifically regarding **Markdown table rendering** (#8259) and precise indentation handling (#8258).

---

## 6. Developer Pain Points

*   **Windows Stability**: A significant cluster of issues affect Windows users specifically, including **PowerShell prefix handling** (#8537), **sandbox process timeouts** (#10070), and **critical extension crashes** (#14729).
*   **TUI Reliability**: The CLI interface is suffering from rendering regressions, notably **text truncation** (#10901) and **malloc debug text leaking** into the input field (#11555).
*   **Sandboxing & Permissions**: Users find the current sandbox implementation restrictive or buggy, with reports of **unauthorized file access** (#5237) and **Linux namespace errors** blocking subagent execution (#12572).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-03-23

## 1. Today's Highlights
Activity remains high in the `gemini-cli` repository with no new releases, but significant architectural work is underway. A major push for **AST-aware tooling** and **LSP integration** aims to drastically improve code context handling, while the **Spec-Driven Development (SDD)** workstream continues to refine agent planning and memory management. Additionally, a strong focus on "noise reduction" in testing and logging suggests the team is prioritizing stability and developer ergonomics.

## 2. Releases
*   **No new releases** were published in the last 24 hours.

## 3. Hot Issues
1.  **[GSoC] Terminal-Integrated Performance Investigation** ([#23365](https://github.com/google-gemini/gemini-cli/issues/23365))
    *   A priority P2 proposal for Google Summer of Code to build CLI skills for memory dump analysis and performance profiling. It proposes a lighter alternative to full Debug Adapter Protocol (DAP) integration, sparking active discussion (42 comments) on how to handle investigative workflows efficiently.

2.  **Symlink Handling in File Search** ([#22171](https://github.com/google-gemini/gemini-cli/issues/22171))
    *   A critical bug (P1) where `bfsFileSearch` and grep tools silently skip symbolic links. This breaks context gathering in symlink-heavy projects (e.g., monorepos), preventing the agent from finding documentation or linked files.

3.  **Uncapped Buffer Causing OOM** ([#22170](https://github.com/google-gemini/gemini-cli/issues/22170))
    *   Another high-priority bug in the shell execution service. While string output is capped, the raw `Buffer` array is not, leading to Out of Memory (OOM) crashes during shell commands with massive outputs.

4.  **Assessing AST-Aware Tools** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))
    *   An epic tracking the investigation into AST-aware file reads and search. The goal is to reduce token noise and agent turns by precisely targeting method bounds rather than reading entire files or using regex.

5.  **Support Passing Prompts to `/plan`** ([#22855](https://github.com/google-gemini/gemini-cli/issues/22855))
    *   A usability request to allow users to kick off planning in a single command (e.g., `/plan refactor auth module`) rather than entering a separate prompt box, streamlining the SDD workflow.

6.  **Global Session Resumption** ([#23489](https://github.com/google-gemini/gemini-cli/issues/23489))
    *   Currently, `--resume` only works within the specific project folder. This issue requests global session resolution using GUIDs so developers can resume work from any directory.

7.  **Context-Aware Policy Approvals** ([#23245](https://github.com/google-gemini/gemini-cli/issues/23245))
    *   Highlights a security/usability gap where "Allow for all future sessions" applies globally. The request is to scope these approvals specifically to "Plan Mode" vs. standard execution to maintain integrity.

8.  **Looping Agent Behavior** ([#22933](https://github.com/google-gemini/gemini-cli/issues/22933))
    *   Reports an agent stuck in a logic loop regarding session ID writes and policy checks, indicating issues with the agent's internal error recovery logic.

9.  **Memory Routing: Global vs. Project** ([#22819](https://github.com/google-gemini/gemini-cli/issues/22819))
    *   A foundational architectural issue defining where the memory subagent should store data—distinguishing between user preferences (Global `~/.gemini/`) and codebase specifics (Project `.gemini/`).

10. **ioctl(2) EBADF Error** ([#17729](https://github.com/google-gemini/gemini-cli/issues/17729))
    *   A recurring, older error related to terminal control logic (`ioctl`), resurfacing in the last 24 hours. It interrupts simple workflows like setting up `.gitignore` rules.

## 4. Key PR Progress
1.  **LSP Integration for Diagnostics** ([#23464](https://github.com/google-gemini/gemini-cli/pull/23464))
    *   Introduces standalone LSP support, enabling the agent to receive compiler diagnostics, hover info, and go-to-definition capabilities directly in the terminal without an IDE.

2.  **Global Cross-Folder Session Resume** ([#23490](https://github.com/google-gemini/gemini-cli/pull/23490))
    *   Implements the ability to resume a session via GUID from any folder, decoupling session history from the current working directory.

3.  **UX Extension** ([#23487](https://github.com/google-gemini/gemini-cli/pull/23487))
    *   Adds a specialized extension for the Gemini CLI team to enforce TUI standards and manage development environments via git worktrees.

4.  **Context Window Breakdown Command** ([#22856](https://github.com/google-gemini/gemini-cli/pull/22856))
    *   Adds a `/context` slash command that renders a visual bar chart showing exactly what is consuming the model's context window (system prompts, tools, memory, history).

5.  **Refactor Subagent Configuration** ([#23161](https://github.com/google-gemini/gemini-cli/pull/23161))
    *   Fixes a bug where subagent configuration changes (like model selection) required a restart. Changes now apply immediately during the running session.

6.  **LLM-Suggested Policy Scoping** ([#21650](https://github.com/google-gemini/gemini-cli/pull/21650))
    *   Enhances security by using Gemini Flash to suggest specific policy rules when a user approves a tool, rather than defaulting to broad permissions.

7.  **Fix Subagent Tool Failure UI** ([#23187](https://github.com/google-gemini/gemini-cli/pull/23187))
    *   Corrects a UI bug where failed shell commands (non-zero exit code) were misleadingly displayed with a green checkmark.

8.  **Zero Noise Policy in CI** ([#23478](https://github.com/google-gemini/gemini-cli/pull/23478))
    *   Adds a custom reporter to enforce a "zero noise" policy in tests, automatically failing CI if passing tests output logs to stdout/stderr.

9.  **Optimize Slash Command Lookup** ([#23488](https://github.com/google-gemini/gemini-cli/pull/23488))
    *   Performance refactor optimizing command parsing from a two-pass lookup to a single-pass helper function.

10. **Debug Logger Cleanup** ([#23482](https://github.com/google-gemini/gemini-cli/pull/23482))
    *   Replaces massive JSON dumps in debug mode with concise summaries, significantly reducing log noise during hook lifecycle events.

## 5. Feature Request Trends
*   **Deep Code Intelligence:** Strong movement toward integrating AST (Abstract Syntax Tree) and LSP (Language Server Protocol) capabilities directly into the CLI to provide the agent with "IDE-like" semantic understanding.
*   **Spec-Driven Development (SDD) Enhancements:** Requests are trending toward tighter integration of planning (`/plan`), memory routing, and task tracking (`TrackerService`), moving away from static markdown checklists to dynamic DAGs.
*   **Global vs. Project Scoping:** Users and maintainers are distinguishing more clearly between "personal" preferences (global) and "project" knowledge, requesting distinct storage and retrieval logic for each.

## 6. Developer Pain Points
*   **Context Loss in Complex Structures:** Developers are frustrated by the CLI's inability to navigate symlinked directories or heavy monorepos, leading to incomplete context and hallucinations.
*   **Agent Stability & Loops:** High-frequency reports of agents getting stuck in logic loops or failing to switch models correctly after planning phases (e.g., stuck on Flash when it should switch).
*   **Noisy Debugging:** There is a clear push from maintainers to clean up test suites and debug logs, indicating that verbose logging has been hampering productivity and CI reliability.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-03-23

---

## 1. Today's Highlights

The Copilot CLI community is actively discussing feature parity discrepancies between the CLI and VS Code extensions, particularly regarding model availability (Gemini 3.1 Pro, Claude Opus 4.6). Stability concerns are top of mind, with multiple reports of **transient API errors** interrupting file operations and several issues related to session corruption after crashes or heavy usage. Additionally, developers using the experimental SDK hooks have identified that `additionalContext` return values are being silently ignored.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|----------------|
| [#1703](github/copilot-cli Issue #1703) | **Copilot CLI does not list all org-enabled models** | Users report significant feature gap vs VS Code; org-enabled models like Gemini 3.1 Pro are missing. High engagement (👍 20, 12 comments). |
| [#2189](github/copilot-cli Issue #2189) | **Transient API error with Claude Opus 4.6** | Blocks write operations mid-task, forcing retries. Affects premium model users heavily. (👍 3) |
| [#2214](github/copilot-cli Issue #2214) | **v1.0.10 unable to CREATE or EDIT files** | Critical bug where file modifications hang with API retry errors while reads work fine. |
| [#2209](github/copilot-cli Issue #2209) | **Long-lived session shows as corrupted on resume** | Heavy sessions (200+ requests) fail to resume despite valid JSON logs, disrupting complex workflows. |
| [#2217](github/copilot-cli Issue #2217) | **CLI needs better crash recovery** | After abnormal termination, trailing null bytes in `events.jsonl` prevent session loading. |
| [#2142](github/copilot-cli Issue #2142) | **onSessionStart hook additionalContext ignored** | SDK documentation promises a feature the CLI silently disregards, breaking expected hook behavior. |
| #2082 | **ctrl+shift+c broken on Linux** | Common terminal copy shortcut stopped working in v1.0.4+, frustrating Linux users. (👍 2) |
| [#1585](github/copilot-cli Issue #1585) | **macOS Cmd+C broken with alt-screen mode** | Experimental flag enables TUI mouse reporting that blocks native copy. (👍 6) |
| #1313 | **Session Branching** | Feature request for forking conversation history—highly requested for non-linear workflows. (👍 5) |
| #1276 | **Support pasting images from clipboard** | Multimodal prompts (screenshots, UI bugs) can't be used in CLI. (👍 4) |

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours.

---

## 5. Feature Request Trends

- **Model Parity with VS Code:** Strong demand for CLI to expose all org-enabled models (Gemini 3.1 Pro, Claude variants) available in VS Code (#1703, #2045, #1395).
- **Session Management Enhancements:** Branching conversations (#1313), resuming corrupted sessions (#2209, #2217), and persisting custom agent defaults (#2212).
- **Multimodal Input:** Native image paste support for visual debugging and screenshot-based prompts (#1276).
- **Agent & Plugin Configuration:** Agent-scoped skills to reduce context bloat (#2207), persistent default agents (#2212), and proper hook merging for extensions (#2210).

---

## 6. Developer Pain Points

| Category | Summary |
|----------|---------|
| **API Reliability** | Transient API errors block file writes (#2189, #2214), severely impacting productivity. |
| **Session Stability** | Long or crashed sessions become unloadable due to JSON parsing issues (#2209, #2217). |
| **Platform-Specific UX** | Copy shortcuts broken on Linux and macOS in recent versions (#2082, #1585); low-contrast text selection in dark themes (#2216). |
| **Context & Hook Issues** | `excludeAgent` not applying to subagents (#2211); extension hooks replaced instead of merged (#2210); `additionalContext` silently ignored (#2142). |
| **Terminal Integration** | Scrolling misbehavior in IntelliJ terminal (#2215); WSL CPU spinning with large sessions (#2208). |

---

*End of digest.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-03-23

## 1. Today's Highlights
The community focused heavily on **usability and robustness** over the last 24 hours. Key contributions include a PR to implement a highly requested `/title` command and significant work on retry logic to prevent session termination during network instability. Additionally, discussions around "YOLO mode" (auto-approval) persistence and Zed editor integration highlight a growing demand for seamless, uninterrupted automation workflows.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues
1.  **[#1540 Generation terminates on unstable networks](https://github.com/MoonshotAI/kimi-cli/issues/1540)**
    *   **Why it matters:** Users on unstable connections (e.g., mobile hotspots) report that streaming generation crashes entirely instead of retrying.
    *   **Reaction:** High relevance for remote developers; PR #1544 has already been submitted to address this.
2.  **[#1548 Model performance degradation](https://github.com/MoonshotAI/kimi-cli/issues/1548)**
    *   **Why it matters:** Users report a noticeable drop in coding quality and effectiveness in version `1.24.0` compared to previous builds.
    *   **Reaction:** Requires immediate attention from the model maintenance team to verify regression.
3.  **[#1547 Authorization failed mid-generation](https://github.com/MoonshotAI/kimi-cli/issues/1547)**
    *   **Why it matters:** Interrupts workflow with repeated login errors during active sessions on Linux.
    *   **Reaction:** Suggests potential issues with token refresh logic or session persistence in the latest version.
4.  **[#1542 ACP/Zed Integration Gaps](https://github.com/MoonshotAI/kimi-cli/issues/1542)**
    *   **Why it matters:** Users migrating from Claude Code find Kimi's ACP implementation lacking "YOLO mode" and silent failure handling.
    *   **Reaction:** Highlights friction for users trying to adopt Kimi as a drop-in replacement in IDEs like Zed.
5.  **[#1536 Request for `/title` command](https://github.com/MoonshotAI/kimi-cli/issues/1536)**
    *   **Why it matters:** Auto-generated titles are often insufficient for complex, multi-topic sessions.
    *   **Reaction:** Strong community desire for manual metadata control; already addressed by PR #1543.
6.  **[#1541 Persist YOLO mode locally](https://github.com/MoonshotAI/kimi-cli/issues/1541)**
    *   **Why it matters:** Users are frustrated by having to re-enable auto-approval (YOLO) for every new session.
    *   **Reaction:** Reflects a need for "set and forget" configuration for trusted environments.
7.  **[#38 (Referenced) CTRL+Z handling](https://github.com/MoonshotAI/kimi-cli/issues/38)**
    *   **Why it matters:** Long-standing bug where keyboard interrupts behave incorrectly in raw mode.
    *   **Reaction:** Revived by PR #1545, which finally offers a technical fix for this legacy "wontfix" issue.

## 4. Key PR Progress
1.  **[#1543 feat(shell): add /title slash command](https://github.com/MoonshotAI/kimi-cli/pull/1543)**
    *   Implements `/title <string>` to manually rename sessions, resolving #1536. Includes persistence via `SessionState`.
2.  **[#1544 fix: retry on protocol errors and 504](https://github.com/MoonshotAI/kimi-cli/pull/1544)**
    *   Introduces retry logic for streaming failures (504 Gateway Timeout/Protocol errors) to prevent session crashes on flaky networks.
3.  **[#1549 feat(plugin): add configurable compaction providers](https://github.com/MoonshotAI/kimi-cli/pull/1549)**
    *   Advanced feature allowing users to designate a specific model for context compaction rather than reusing the main chat model.
4.  **[#1525 feat: add yolo mode option in approval dialog](https://github.com/MoonshotAI/kimi-cli/pull/1525)** (Closed/Merged)
    *   Adds an "Approve all" button directly in the interactive permission dialog, streamlining the activation of YOLO mode.
5.  **[#1545 fix(keyboard): clear ISIG/IEXTEN](https://github.com/MoonshotAI/kimi-cli/pull/1545)**
    *   Technical fix to the terminal raw mode handling to prevent `SIGTSTP` suspension bugs when using keyboard shortcuts.
6.  **[#1131 feat: add AgentHooks support](https://github.com/MoonshotAI/kimi-cli/pull/1131)** (Closed)
    *   Adds infrastructure for "dogfooding" via hooks, including built-in safety features like blocking dangerous commands and enforcing tests.
7.  **[#1376 feat: add --sessions/--list-sessions](https://github.com/MoonshotAI/kimi-cli/pull/1376)**
    *   Improves CLI workflow by adding flags to list and interactively select previous sessions directly from the command line.

## 5. Feature Request Trends
*   **Workflow Automation (YOLO Mode):** A distinct trend is emerging around "YOLO mode"—users want it persistent across restarts (#1541), accessible via dialogs (#1525), and exposed in external protocols like ACP (#1542).
*   **Session Management:** Users are requesting finer control over their session history, specifically the ability to rename sessions (#1536) and easily list/switch between them (#1376).
*   **Modular Infrastructure:** Advanced users are pushing for decoupling components, such as using separate models for context compaction (#1549) or hooking into the agent lifecycle for custom logic (#1131).

## 6. Developer Pain Points
*   **Fragility on Remote Connections:** The CLI's inability to handle network jitter gracefully (terminating instead of retrying) is a major blocker for users working remotely or on mobile data (#1540).
*   **Repetitive Configuration:** Developers express fatigue at having to constantly re-apply settings (like YOLO mode or session preferences) every time a new instance is launched (#1541).
*   **Integration Friction:** Users attempting to embed Kimi CLI into IDEs (like Zed) via ACP are hitting walls regarding feature parity (missing YOLO mode) and error feedback (#1542).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-23

## Today's Highlights

Authentication issues with **Claude Pro/Max** are dominating community attention this cycle, with multiple high-engagement bug reports citing "Invalid Token" and "Invalid Code" errors during OAuth flows. On the development front, contributors are actively pushing fixes for **ACP (Agent Communication Protocol)** timing issues, **MCP server state persistence**, and a new **Kiro provider** integration. Several feature discussions around **interactive shell execution** and **automated task loops** are gaining traction, signaling strong community interest in more powerful automation capabilities.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | **[#3472](https://github.com/anomalyco/opencode/issues/3472)** — [bug] Context awareness | Long-standing issue (18 👍) about VSCode extension not detecting selected code when querying the agent. Core UX gap affecting daily workflows. |
| 2 | **[#18315](https://github.com/anomalyco/opencode/issues/18315)** — Claude Pro/Max auth: Invalid token | Critical auth failure (28 👍) blocking Claude Pro/Max users from connecting. High urgency with multiple confirmations. |
| 3 | **[#18342](https://github.com/anomalyco/opencode/issues/18342)** — Claude Pro/Max: Invalid code | Related OAuth issue (37 👍) where copied tokens are rejected as "INVALID CODE." Likely same root cause as #18315. |
| 4 | **[#9808](https://github.com/anomalyco/opencode/issues/9808)** — Support for sudo/password commands | Highly requested (18 👍) feature for `sudo`, SSH, and Ansible password prompts. Currently blocked by disconnected stdin in Bash tool. |
| 5 | **[#4672](https://github.com/anomalyco/opencode/issues/4672)** — GitHub Agent stuck | GitHub Agent hangs at "Sending Message to opencode..." — affects CI/automation use cases. |
| 6 | **[#10616](https://github.com/anomalyco/opencode/issues/10616)** — `tool_use` without `tool_result` | API contract violation causing agent errors. Indicates message handling edge cases in long conversations. |
| 7 | **[#17505](https://github.com/anomalyco/opencode/issues/17505)** — ACP session/update timing | `session/update` notifications arriving after `end_turn` breaks ACP spec compliance and causes empty UI states. |
| 8 | **[#16367](https://github.com/anomalyco/opencode/issues/16367)** — Agent hangs with `serve` + `attach` | Remote sessions enter infinite loop when permissions are set to "ask." Critical for headless/remote workflows. |
| 9 | **[#18552](https://github.com/anomalyco/opencode/issues/18552)** — Cloudflare Workers AI not working | Provider integration broken with malformed URL (unresolved `${CLOUDFLARE_ACCOUNT_ID}`). |
| 10 | **[#18001](https://github.com/anomalyco/opencode/issues/18001)** — `/loop` command for automation | Feature request (3 👍) for iterative/automated task execution — aligns with growing agentic workflow demand. |

---

## Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | **[#18670](https://github.com/anomalyco/opencode/pull/18670)** — fix: symlink-loop recursion | Prevents infinite recursion during skill discovery when symlink loops exist in external directories. |
| 2 | **[#18408](https://github.com/anomalyco/opencode/pull/18408)** — feat: Kiro provider | Adds Kiro as a new provider using AWS CodeWhisperer-backed Claude models via Builder ID SSO. |
| 3 | **[#16343](https://github.com/anomalyco/opencode/pull/16343)** — feat: system prompt audit | Audits and removes redundancies in system prompts; adds CI check for prompt overspec. |
| 4 | **[#17529](https://github.com/anomalyco/opencode/pull/17529)** — fix: DeepSeek reasoning_content | Fixes Error 400 by properly transforming reasoning content for DeepSeek API compatibility. |
| 5 | **[#17814](https://github.com/anomalyco/opencode/pull/17814)** — feat: initial syncing implementation | Foundation for cross-device/cross-session syncing (draft status). |
| 6 | **[#13854](https://github.com/anomalyco/opencode/pull/13854)** — fix: TUI streaming markdown | Derives streaming state from message completion to prevent missing last table row in rendered output. |
| 7 | **[#18662](https://github.com/anomalyco/opencode/pull/18662)** — feat: interactive update flow | Adds confirmation dialog for major/minor releases instead of auto-updating. |
| 8 | **[#18663](https://github.com/anomalyco/opencode/pull/18663)** — fix: ACP mode sync | Syncs model and variant when activating session modes in ACP. |
| 9 | **[#11638](https://github.com/anomalyco/opencode/pull/11638)** — feat: rich text clipboard | Adds formatted content copying with cross-editor compatibility (Linux Wayland/X11, macOS). |
| 10 | **[#18579](https://github.com/anomalyco/opencode/pull/18579)** — refactor: Bus service migration | Migrates to Effect PubSub + InstanceState for better subscription management and cleanup. |

---

## Feature Request Trends

1. **Interactive Shell Execution** — Strong demand for stdin passthrough to support `sudo`, SSH passphrases, GPG, and Ansible prompts ([#9808](https://github.com/anomalyco/opencode/issues/9808), [#18659](https://github.com/anomalyco/opencode/issues/18659), [#3228](https://github.com/anomalyco/opencode/issues/3228)).

2. **Automated Task Loops** — Requests for native `/loop` commands or continuous execution modes for autonomous agent workflows ([#18001](https://github.com/anomalyco/opencode/issues/18001), [#18636](https://github.com/anomalyco/opencode/issues/18636)).

3. **Plugin System Extensibility** — Plugin hooks for dynamic model routing and subagent inheritance ([#18666](https://github.com/anomalyco/opencode/issues/18666), [#18644](https://github.com/anomalyco/opencode/issues/18644)).

4. **Desktop QoL Improvements** — Minimize-to-tray, better project sync, and improved web UI workspace settings ([#18134](https://github.com/anomalyco/opencode/issues/18134), [#13626](https://github.com/anomalyco/opencode/issues/13626), [#14656](https://github.com/anomalyco/opencode/issues/14656)).

5. **ACP Protocol Compliance** — Multiple reports on notification timing violating the ACP spec lifecycle ([#17505](https://github.com/anomalyco/opencode/issues/17505), [#18672](https://github.com/anomalyco/opencode/issues/18672)).

---

## Developer Pain Points

- **Claude Pro/Max Authentication Broken** — The most upvoted issues this cycle (#18315, #18342) indicate a widespread auth regression affecting Claude subscribers. Users report reinstalling and clearing caches without success.

- **Remote/Headless Sessions Unreliable** — Agent hangs with `opencode serve` + `opencode attach` (#16367) and permission check mismatches in headless mode (#7876) are blocking automation workflows.

- **Model Dropdown Scalability** — With 366+ configured models, the UI can't surface all options ([#18651](https://github.com/anomalyco/opencode/issues/18651)). Needs pagination or search.

- **AWS Bedrock Pricing Miscalculation** — Reported 5x pricing discrepancy ([#16763](https://github.com/anomalyco/opencode/issues/16763)) raises concerns about cost tracking accuracy.

- **TUI Localization Issues** — Chinese text disappearing when Ctrl+P menu opens ([#7650](https://github.com/anomalyco/opencode/issues/7650)) suggests CJK rendering edge cases.

- **Context Awareness Gaps** — The long-open #3472 highlights that VSCode selection context isn't reliably passed to the agent, undermining a core advertised feature.

---

*Digest generated from 50 issues and 20 PRs updated in the last 24 hours.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest - 2026-03-23

## 1. Today's Highlights
The community sees heavy activity in the VSCode IDE Companion ecosystem, with multiple PRs introducing deep feature parity with the CLI, including `/insight`, `/export`, and specialized agent execution displays. On the core front, significant engineering effort is focused on **context window management**, introducing dynamic truncation and "masking" services to optimize long agentic sessions. A new nightly build (v0.13.0) also fixes critical pipeline issues regarding OpenRouter compatibility.

## 2. Releases
*   **[v0.13.0-nightly.20260322.38caa0b21](https://github.com/QwenLM/qwen-code/releases/tag/v0.13.0-nightly.20260322.38caa0b21)**
    *   **Bump:** Version bumped to 0.13.0.
    *   **Fix:** Resolved duplicate `finish_reason` chunks coming from OpenRouter pipelines.
    *   **Feat:** Added options for system prompt customization.

## 3. Hot Issues
1.  **[#2596 - Qwen CLI keeps adding `}` at the end](https://github.com/QwenLM/qwen-code/issues/2596)**
    *   **Why:** A high-priority generation bug where the model hallucinates closing syntax during code generation tasks.
    *   **Reaction:** Users report this breaks automated PR workflows; currently flagged for triage.
2.  **[#2597 - When asked to squash, did an interactive rebase](https://github.com/QwenLM/qwen-code/issues/2597)**
    *   **Why:** Highlights an agency/interpretation gap. The user wanted the AI to perform the squash, but the AI initiated an interactive rebase for the user to do it manually.
    *   **Reaction:** Sparks discussion on whether the AI should be "helpful" (instructional) or "agentic" (autonomous).
3.  **[#2589 - Request: Open multiple Qwen instances in VSCode](https://github.com/QwenLM/qwen-code/issues/2589)**
    *   **Why:** Users with multi-monitor setups or parallel workflows want to run concurrent chats (similar to Claude Code).
    *   **Reaction:** Validated user need for parallel task processing.
4.  **[#1083 - Strange error when starting](https://github.com/QwenLM/qwen-code/issues/1083)**
    *   **Why:** A long-standing startup crash related to "Invalid number of stops" configuration.
    *   **Reaction:** Continued troubleshooting for legacy Homebrew installations.
5.  **[#2570 - MCP Servers need `readOnlyTools` config](https://github.com/QwenLM/qwen-code/pull/2570) (Related PR)**
    *   **Why:** While a PR, the underlying issue is that read-only MCP servers (like search) are treated as "write" operations, forcing unnecessary sequential execution and slowing down the agent.
6.  **[#2572 - Aggressive Tool Truncation](https://github.com/QwenLM/qwen-code/pull/2572) (Related PR)**
    *   **Why:** Developers are finding that the current 25K char limit cuts off vital context early in sessions.
7.  **[#2517 - Empty tools array causes API validation errors](https://github.com/QwenLM/qwen-code/pull/2517) (Related PR)**
    *   **Why:** Sending `tools: []` to strict OpenAI-compatible APIs causes crashes.
8.  **[#2588 - Native OpenAI Responses API Support](https://github.com/QwenLM/qwen-code/pull/2588) (Related PR)**
    *   **Why:** Users are eager to switch to the newer `/v1/responses` endpoint for better standardization.
9.  **[#2593 - /insight command in VSCode](https://github.com/QwenLM/qwen-code/pull/2593) (Related PR)**
    *   **Why:** Addresses the user need for generating reports without leaving the IDE.
10. **[#2591 - Model Metadata Loss on Switch](https://github.com/QwenLM/qwen-code/pull/2591) (Related PR)**
    *   **Why:** A UX bug where switching models in a tab resets the visible context window size indicator.

## 4. Key PR Progress
1.  **[#2588 - feat(core): OpenAI Responses API native support](https://github.com/QwenLM/qwen-code/pull/2588)**
    *   Implements full support for the OpenAI `/v1/responses` endpoint as a distinct provider type, allowing users to leverage the latest API standard.
2.  **[#2573 - feat(core): Tool output masking service](https://github.com/QwenLM/qwen-code/pull/2573)**
    *   A sophisticated solution for long context windows: replaces old verbose tool outputs with snippets in-context while keeping full data on disk.
3.  **[#2572 - feat(core): Dynamic tool output truncation](https://github.com/QwenLM/qwen-code/pull/2572)**
    *   Upgrades static limits (25K -> 80K chars) and introduces dynamic scaling based on context pressure, preventing premature data loss.
4.  **[#2590 - feat(vscode-ide-companion): Dedicated agent execution display](https://github.com/QwenLM/qwen-code/pull/2590)**
    *   Improves the UI for sub-agent tasks, moving away from generic tool cards to a structured display with progress and status tracking.
5.  **[#2593 - feat(vscode-ide-companion): Support /insight command](https://github.com/QwenLM/qwen-code/pull/2593)**
    *   Brings the CLI's analysis capability directly into the VSCode extension.
6.  **[#2592 - feat(vscode-companion): Support /export session](https://github.com/QwenLM/qwen-code/pull/2592)**
    *   Adds native session export functionality to the IDE, ensuring CLI feature parity.
7.  **[#2570 - feat(mcp): Add readOnlyTools config](https://github.com/QwenLM/qwen-code/pull/2570)**
    *   Optimizes agentic speed by allowing MCP servers to declare read-only status, enabling parallel tool execution.
8.  **[#2517 - fix: Omit empty tools array](https://github.com/QwenLM/qwen-code/pull/2517)**
    *   Hardens API request handling to prevent validation errors when no tools are defined.
9.  **[#2587 - fix(vim): Ctrl+N/Ctrl+P navigation](https://github.com/QwenLM/qwen-code/pull/2587)**
    *   Quality-of-life fix for Vim users, enabling standard navigation keys for autocomplete menus.
10. **[#2591 - fix(vscode-ide-companion): Preserve model metadata](https://github.com/QwenLM/qwen-code/pull/2591)**
    *   Fixes a UI glitch where the context size indicator failed to update correctly when switching models.

## 5. Feature Request Trends
*   **Parallelism & Multitasking:** Users are increasingly requesting the ability to run multiple concurrent sessions or instances within the IDE (Issue #2589), reflecting a shift towards "agentic swarms" or parallel workflows.
*   **Context Management Visibility:** There is a strong trend towards understanding and managing the context window. PRs regarding masking (#2573) and dynamic truncation (#2572) suggest the community is pushing the limits of token usage.
*   **IDE Parity:** The gap between CLI and VSCode Extension capabilities is actively being closed, with heavy demand to port CLI commands (like `/insight` and `/export`) natively to the GUI.

## 6. Developer Pain Points
*   **Model Hallucination in Workflow:** Developers are frustrated when the CLI outputs artifacts like `}` (Issue #2596) or misunderstands "squash" as "start interactive rebase" (Issue #2597), requiring manual cleanup.
*   **Context "Amnesia":** Aggressive truncation settings have been cutting off necessary tool outputs, forcing developers to re-run tools or start fresh sessions.
*   **API Rigidity:** Strict validation on OpenAI-compatible endpoints (Issue #2517) causes unnecessary crashes when tool definitions are empty, interrupting development flow.

</details>