# AI CLI Tools Community Digest 2026-03-13

> Generated: 2026-03-12 22:03 UTC | Tools covered: 7

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

# AI Developer Tools Ecosystem Report
**Analysis Date:** 2026-03-13

---

## 1. Ecosystem Overview

The AI CLI tools landscape is rapidly maturing from simple command-line assistants into sophisticated agentic development environments. All major players are converging on persistent, autonomous agents capable of multi-step reasoning, file manipulation, and tool orchestration. A clear industry-wide tension exists between **safety** (sandboxing, permission prompts) and **usability** (YOLO modes, auto-approvals), with vendors aggressively iterating to find the right balance. The rise of the **Model Context Protocol (MCP)** is emerging as a critical standard for extensibility, while developers are demanding **cross-tool interoperability** (e.g., `AGENTS.md`) to reduce vendor lock-in friction. Windows platform support and reliable context management remain the primary growing pains across the board.

---

## 2. Activity Comparison

| Tool | Issues (Notable) | PRs (Notable) | Release Status | Primary Focus |
| :--- | :---: | :---: | :--- | :--- |
| **Claude Code** | 10+ | 10+ | **v2.1.74** (Stable) | Context optimization, AGENTS.md standardization |
| **OpenAI Codex** | 10+ | 10+ | **v0.115.0-alpha.14** (6 alphas in 24h) | Desktop app stability, Rust client architecture |
| **Gemini CLI** | 10+ | 10+ | **v0.34.0-preview.2** (Preview) | Windows sandboxing, cost control/reliability |
| **GitHub Copilot CLI** | 10 | 1-2 | **v1.0.5-0** (Exp) | Terminal/Tmux UI regressions, legacy commands |
| **Kimi Code** | 6 | 10 | **v1.21.0** (Stable) | Steering input, Linux/HTTP compatibility |
| **OpenCode** | 10 | 10 | None | Copilot auth quotas, Effect architecture refactor |
| **Qwen Code** | 10 | 10 | **v0.12.2** (Stable) | Parallel tool execution, API compatibility |

---

## 3. Shared Feature Directions

The community feedback reveals strong convergence toward specific capabilities required for professional agentic workflows:

*   **Sandboxing & Security Controls**
    *   *Tools: Claude Code, Gemini CLI, GitHub Copilot CLI, OpenAI Codex*
    *   *Need:* Robust isolation for autonomous file operations. Gemini introduced native Windows sandboxing via Restricted Tokens; OpenAI is refining bubblewrap permissions for Linux. Copilot users are requesting sandbox modes to restrict filesystem access for enterprise compliance.

*   **Context & Memory Management ("The Compaction Problem")**
    *   *Tools: Claude Code, OpenAI Codex, Gemini CLI*
    *   *Need:* Long-running agents struggle with context limits. "Auto-compaction" is a critical feature, but users report it causes agents to "lose the plot" (OpenAI), forget task state, or hang for 20+ minutes. Better "memory compression" and session continuity are top architectural priorities.

*   **Cross-Agent Standardization (AGENTS.md)**
    *   *Tools: Claude Code (Lead), OpenCode, Qwen Code*
    *   *Need:* Massive demand (3,190+ upvotes on Claude Code) for a unified instruction file (`AGENTS.md`) to replace tool-specific config files (`CLAUDE.md`), allowing developers to switch tools without rewriting agent instructions.

*   **Multi-Agent & Parallel Execution**
    *   *Tools: Qwen Code, OpenCode, Kimi Code*
    *   *Need:* Running multiple specialized agents simultaneously. Qwen merged parallel tool execution; OpenCode users want "Agent Teams" for swarming complex tasks; Kimi users are hitting rate limits trying to run concurrent "crayfish" agents.

*   **Authentication & Provider Flexibility**
    *   *Tools: OpenCode, Qwen Code, Kimi Code*
    *   *Need:* Users want BYOK (Bring Your Own Key) and granular control over API endpoints. OpenCode is struggling with Copilot mislabeling agent requests as "user" requests, depleting quotas; Qwen fixed DeepSeek API compatibility issues.

*   **Copy/Paste & Clean Output UX**
    *   *Tools: Gemini CLI, GitHub Copilot CLI*
    *   *Need:* "Clean" copy modes that strip UI borders/frames for pasting into docs or other chats. Highly requested for documentation workflows.

---

## 4. Differentiation Analysis

| Aspect | **Claude Code** | **OpenAI Codex** | **Gemini CLI** | **Others (Qwen/OpenCode/Kimi)** |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Focus** | **Enterprise Agentic Workflows** | **Desktop App & Ecosystem** | **Platform Parity & Cost Control** | **Extensibility & Local Flexibility** |
| **Tech Stack** | Node.js/Plugin-heavy | **Rust Client** (aggressive refactor) | Go/Preview channel | Mixed (Python/TS focus) |
| **Target User** | Power users & teams seeking reliability | Users wanting GUI + CLI parity | Cost-conscious developers | Tinkerers & OSS advocates |
| **Key Weakness** | Cowork reliability on Windows | Context compaction "amnesia" | "Runaway" credit consumption | Auth/Token management |
| **Unique Feature** | Remote Control sessions; `autoMemoryDirectory` | Smart Approvals for autonomy | Native Windows security tokens | Qwen: Parallel tool calls; Kimi: Steering input |

**Distinct Approaches:**
*   **OpenAI Codex** is the most aggressive on architecture, releasing 6 alpha builds in 24 hours and shifting the TUI to an embedded app server to unify logic with the Desktop app.
*   **Claude Code** is driving the **standardization** agenda (`AGENTS.md`) and focusing on team collaboration features (Cowork), though currently plagued by platform-specific bugs.
*   **Gemini CLI** is prioritizing **security hardening** (SSRF protection for `web_fetch`, Windows sandboxing) and addressing critical trust issues regarding credit consumption.
*   **Qwen Code** is leading on **performance** (parallel tool execution) and **model agnosticism** (DeepSeek integration, Arena mode for model comparison).
*   **Kimi Code** introduced **Steering Input**, a unique feature allowing users to guide agents mid-turn rather than waiting for completion.

---

## 5. Community Momentum & Maturity

*   **Most Active / Rapid Iteration:** **OpenAI Codex** shows the highest velocity with 6 alpha releases in 24 hours, indicating a major milestone is imminent. **Qwen Code** and **Claude Code** also show strong momentum with substantial feature merges and community engagement.
*   **Most Mature / Stable:** **Claude Code** and **Kimi Code** appear to be in stable release cycles with incremental quality-of-life improvements (v2.1.74, v1.21.0) rather than architectural overhauls.
*   **Struggling / Friction:** **GitHub Copilot CLI** has low release activity and high user frustration regarding UI regressions (flickering, alt-screen) and the removal of legacy commands, leading users to migrate to forks like `shell-ai`.
*   **Architecture in Flux:** **OpenCode** is deep in a "rewrite" phase, migrating core services to an **Effect-based architecture**, which slows feature delivery but promises better type safety and error handling long-term.

---

## 6. Trend Signals

1.  **The "Context Wall" is Here:** The move from single-turn chat to long-running agents has hit a hard ceiling: **context window management**. Every tool is battling "compaction amnesia," where agents forget file states or task context mid-workflow. Expect a shift toward "memory persistence" architectures and better state compression in Q2 2026.

2.  **Desktop App Convergence:** Vendors are realizing the CLI alone isn't enough. **OpenAI Codex** is unifying its TUI and Desktop app onto a single app-server architecture. This signals a trend where the CLI is just one interface to a shared backend that also powers GUI and Web experiences.

3.  **Windows is Now a First-Class Citizen:** After years of second-tier support, Windows is receiving dedicated engineering focus: **Gemini** added native sandboxing, **Claude** is debugging Cowork virtualization, and **Qwen** is fixing PowerShell-specific UI bugs. Enterprise adoption is clearly driving this.

4.  **Permission Fatigue is Driving "Smart" Autonomy:** Users are tired of babysitting agents. There is a clear trend toward "Smart Approvals" (OpenAI), "YOLO Mode" (Kimi), and auto-permission policies that allow agents to run unattended for routine tasks while maintaining safety rails for destructive operations.

5.  **Standardization Demand:** The massive support for `AGENTS.md` (3,190+ upvotes) signals that developers view AI coding tools as **commoditized utilities** and want the freedom to switch between Claude, Codex, and Cursor without retraining their environment. Vendors that resist interoperability may face community backlash.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Report
**Analysis Period:** Data as of 2026-03-13 | Source: [anthropics/skills](https://github.com/anthropics/skills)

---

## 1. Top Skills Ranking

Based on PR activity, update frequency, and community engagement:

| Rank | Skill | Author | Status | Description |
|------|-------|--------|--------|-------------|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | @PGTBoos | OPEN | Quality control for AI-generated documents—fixes orphan word wrap, widow paragraphs, and numbering misalignment issues |
| 2 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | @justinwetch | OPEN | Revised clarity and actionability improvements for frontend UI/UX guidance |
| 3 | **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | @eovidiu | OPEN | Meta-skills for evaluating skill quality (5 dimensions) and security vulnerabilities |
| 4 | **[masonry-generate-image-and-videos](https://github.com/anthropics/skills/pull/335)** | @junaid1460 | OPEN | CLI integration for Imagen 3.0/Veo 3.1 AI media generation |
| 5 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | @varun29ankuS | OPEN | Persistent context/memory system for AI agents across conversations |
| 6 | **[ODT Skill](https://github.com/anthropics/skills/pull/486)** | @GitHubNewbie0 | OPEN | OpenDocument text creation, template filling, and HTML conversion |
| 7 | **[SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181)** | @amitlals | OPEN | Predictive analytics using SAP's open-source tabular foundation model |
| 8 | **[Buildr](https://github.com/anthropics/skills/pull/419)** | @hirodefi | OPEN | Telegram bridge for remote Claude Code session control |

**Discussion Highlights:**
- **Typography (#514)** addresses a universal pain point—AI-generated documents have consistent formatting flaws that users rarely explicitly request fixes for
- **Memory skills (#154, #521)** are seeing sustained interest (updated through March), indicating strong demand for cross-session context persistence
- **Meta-skills (#83)** show the ecosystem maturing—tools to evaluate and secure skills themselves

---

## 2. Community Demand Trends

From Issues analysis, the most-anticipated directions:

| Trend | Evidence | Signals |
|-------|----------|---------|
| **Agent Governance & Safety** | [Issue #412](https://github.com/anthropics/skills/issues/412) | Demand for policy enforcement, threat detection, trust scoring, audit trails |
| **Trust & Security Framework** | [Issue #492](https://github.com/anthropics/skills/issues/492) | Community skills under `anthropic/` namespace create trust boundary vulnerabilities; users want clear provenance |
| **MCP Integration** | [Issue #16](https://github.com/anthropics/skills/issues/16), [Issue #369](https://github.com/anthropics/skills/issues/369) | Strong interest in exposing Skills as MCPs and MCP Apps support |
| **Platform Stability** | [Issue #406](https://github.com/anthropics/skills/issues/406), [Issue #556](https://github.com/anthropics/skills/issues/556) | Upload failures, API 500 errors, and skill trigger failures are blocking productivity |
| **Enterprise/SSO Compatibility** | [Issue #532](https://github.com/anthropics/skills/issues/532) | Tools requiring `ANTHROPIC_API_KEY` exclude enterprise SSO users |

---

## 3. High-Potential Pending Skills

Active PRs with recent updates (March 2026) likely to merge:

| Skill | PR | Updated | Potential Impact |
|-------|-----|---------|------------------|
| **record-knowledge** | [#521](https://github.com/anthropics/skills/pull/521) | 2026-03-09 | Persistent team knowledge across sessions—solves critical context loss problem |
| **ODT Document Handling** | [#486](https://github.com/anthropics/skills/pull/486) | 2026-03-09 | Enterprise document standard support (LibreOffice, OpenOffice, Google Docs compatible) |
| **SAP Analytics** | [#181](https://github.com/anthropics/skills/pull/181) | 2026-03-11 | Enterprise predictive analytics on SAP business data |
| **Masonry Media Generation** | [#335](https://github.com/anthropics/skills/pull/335) | 2026-03-12 | Latest Imagen 3.0/Veo 3.1 integration—strong recent activity |
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | 2026-03-04 | Infrastructure improvement addressing community health gap |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for persistent memory and cross-session context retention, alongside urgent platform stability fixes for skill upload/trigger failures affecting daily workflows.**

---

# Claude Code Community Digest
**Date:** 2026-03-13

---

## 1. Today's Highlights

Version **v2.1.74** landed with significant quality-of-life improvements, adding actionable optimization suggestions to the `/context` command and a new `autoMemoryDirectory` setting for custom memory storage paths. The community is heavily focused on **Cowork** reliability issues, with multiple reports of folder picker restrictions and virtualization failures on Windows. Meanwhile, the push for **AGENTS.md standardization** (#6235) continues to gain traction with over 3,190 upvotes, signaling strong developer demand for cross-agent interoperability.

---

## 2. Releases

### v2.1.74
- **Actionable `/context` command:** Now identifies context-heavy tools, memory bloat, and capacity warnings with specific optimization tips
- **New `autoMemoryDirectory` setting:** Configure a custom directory for auto-memory storage
- **Bug fix:** Resolved a memory leak in stream handling

---

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|----------------|
| [#826](https://github.com/anthropics/claude-code/issues/826) | **Console scrolling bug on macOS** | The highest-engagement issue (577 👍, 318 comments). Console scrolls to top of history when Claude adds text, disrupting workflow. Remains open since April 2025. |
| [#6235](https://github.com/anthropics/claude-code/issues/6235) | **AGENTS.md support** | Massive community demand (3,190 👍). Developers want a unified agent instruction file that works across Claude, Codex, Cursor, and Amp instead of tool-specific CLAUDE.md files. |
| [#24964](https://github.com/anthropics/claude-code/issues/24964) | **Cowork folder picker restrictions** | Cowork rejects folders outside home directory and blocks symlinks/junctions. Affects both Windows and macOS users trying to work with monorepos or secondary drives. |
| [#33120](https://github.com/anthropics/claude-code/issues/33120) | **Cowork account-specific rate limiting** | Users report "Rate limit reached" errors exclusively in Cowork while Claude Chat and Claude Code work fine. Appears to be an account-level server-side issue. |
| [#26224](https://github.com/anthropics/claude-code/issues/26224) | **Claude Code hanging/freezing** | Urgent reports of prompts hanging for 5-20+ minutes. Significant productivity impact for affected users. |
| [#18435](https://github.com/anthropics/claude-code/issues/18435) | **Multi-account management** | Request for profile switching in Claude Desktop (161 👍). Users with work/personal accounts need seamless switching. |
| [#11775](https://github.com/anthropics/claude-code/issues/11775) | **Piped command permission regression** | Plan agent requests permission for piped commands despite explicit `allowed-tools` settings. Security/UX friction. |
| [#32982](https://github.com/anthropics/claude-code/issues/32982) | **Remote Control session timeouts** | Remote control sessions die after ~20 minutes of idle time, ignoring keepalives. Critical for unattended/agent workflows. |
| [#15521](https://github.com/anthropics/claude-code/issues/15521) | **LSP plugin initialization race** | LSP Manager initializes before plugins load, so plugin-provided `.lsp.json` configs never register. Recently closed but developers tracking. |
| [#31850](https://github.com/anthropics/claude-code/issues/31850) | **Mystery plugin in blocklist** | Unknown plugin appeared in `blocklist.json` without user installation. Potential security concern. |

---

## 4. Key PR Progress

| # | Title | Description |
|---|-------|-------------|
| [#32890](https://github.com/anthropics/claude-code/pull/32890) | **Task → Agent tool rename** | Updates stale "Task tool" references to "Agent tool" in 8 plugin documentation files. Follows v2.1.63 naming change. |
| [#33472](https://github.com/anthropics/claude-code/pull/33472) | **Inline comment permission fix** | Prevents subagents from posting test/probe comments on customer PRs. Passes `confirmed=true` to inline-comment MCP tool. **Merged.** |
| [#30636](https://github.com/anthropics/claude-code/pull/30636) | **Documentation URL migration** | Updates 25+ stale URLs to new canonical domains (`code.claude.com`, `platform.claude.com`). Important for doc accuracy. |
| [#33443](https://github.com/anthropics/claude-code/pull/33443) | **Dockerfile native installer** | Updates dev container to Node 24.14 and uses native installer instead of deprecated `npm install` method. |
| [#33397](https://github.com/anthropics/claude-code/pull/33397) | **Code-review permission reduction** | Fixes code-review plugin generating hundreds of permission prompts by avoiding unnecessary `cd` prefixes in commands. |
| [#33390](https://github.com/anthropics/claude-code/pull/33390) | **Hook-integrity-guard plugin** | Security plugin preventing Claude from modifying its own hooks, settings, and safety infrastructure. Mitigates self-weakening vulnerabilities. |
| [#33710](https://github.com/anthropics/claude-code/pull/33710) | **Town simulator game example** | Complete town simulator game demonstrating Canvas rendering, entity systems, and game loops. Useful as a complex example project. |

---

## 5. Feature Request Trends

1. **Cross-agent standardization:** AGENTS.md support is the clear leader—developers want instruction files that work across all coding agents, not vendor-locked alternatives.

2. **Multi-account/profile management:** Strong demand for switching between work and personal accounts without logging out.

3. **TUI customization:** Requests to disable welcome banners, override status messages, and generally reduce visual clutter for power users.

4. **MCP reliability improvements:** Feature requests for automatic tool re-registration after `/mcp` reconnect and better cloud connector support in web IDEs.

5. **Agent persistence:** Requests for Agent Teams state and task lists to persist across session restarts.

6. **Internationalization:** Voice mode language detection, non-Latin keyboard layout support for `/btw` command.

---

## 6. Developer Pain Points

- **Cowork sandbox limitations:** Windows users with secondary drives or non-standard folder structures are blocked from using Cowork. The folder picker's home-directory restriction is a recurring complaint.

- **Permission prompt fatigue:** The code-review plugin and compound command checks generate excessive permission prompts, making features "unusable without babysitting."

- **Performance hangs:** Multiple reports of 5-20 minute freezes. Users report this is workflow-breaking when it occurs.

- **Session/state persistence:** Agent Teams, task lists, and remote control sessions don't survive restarts or idle timeouts—frustrating for long-running automated workflows.

- **Platform-specific bugs:** Windows bears the brunt with virtualization errors (`HCS 0x80370102`), temp file leaks (7MB per session), and named pipe vs. WebSocket bridge issues for browser automation.

- **Documentation drift:** Multiple PRs needed to update stale URLs and tool name references, suggesting docs aren't keeping pace with releases.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-03-13

## 1. Today's Highlights
The OpenAI Codex team is aggressively iterating on the `rust` client, releasing **6 alpha versions** (up to v0.115.0-alpha.14) in the last 24 hours, indicating a significant architectural overhaul or imminent stable release. On the product front, the community is heavily focused on the **Desktop App's stability**, with widespread reports of reconnection issues and UI regressions. Meanwhile, internal development is deepening **agentic capabilities**, with new Pull Requests introducing "Smart Approvals," improved sandboxing for nested directories, and a shift toward a unified app-server architecture for the TUI.

## 2. Releases
*   **Rust Client v0.115.0-alpha Series:**
    *   The team released 6 distinct alpha builds (`.7`, `.9`, `.11`, `.12`, `.13`, `.14`) within 24 hours.
    *   While specific release notes were sparse in the feed, this rapid cadence suggests urgent bug bashing and finalizing features for the `0.115.0` stable milestone, likely related to the sandboxing and TUI refactoring seen in current PRs.

## 3. Hot Issues

1.  **[OPEN] macOS Intel Support for Desktop App** [#10410](https://github.com/openai/codex/issues/10410)
    *   **Why it matters:** Despite the rise of Apple Silicon, a significant portion of the dev community remains on Intel Macs. Users report that the current app installer provides an ARM-only binary, causing launch failures (`NSOSStatusErrorDomain`).
    *   **Reaction:** With 115 comments and 151 upvotes, this is the most active issue. Users are frustrated by the lack of a Universal Binary or x86_64 support.

2.  **[OPEN] Event Hooks for Agentic Workflows** [#2109](https://github.com/openai/codex/issues/2109)
    *   **Why it matters:** Power users want to integrate Codex into larger CI/CD or automation pipelines.
    *   **Reaction:** A massive 492 upvotes indicates strong demand for the ability to trigger scripts before/after Codex behaviors via pattern matching.

3.  **[OPEN] Remote Development in Desktop App** [#10450](https://github.com/openai/codex/issues/10450)
    *   **Why it matters:** The Desktop App currently only works locally, unlike VS Code which excels at remote SSH/Container development.
    *   **Reaction:** 324 upvotes. Users find the app unusable for their primary workflows which often involve remote servers or dev containers.

4.  **[OPEN] Severe Reconnection Issues (EU)** [#14209](https://github.com/openai/codex/issues/14209)
    *   **Why it matters:** A regression is causing the Desktop App to struggle with connectivity, particularly noted by users in Europe.
    *   **Reaction:** Users report the app is "constantly reconnecting," severely disrupting flow state.

5.  **[OPEN] GPT-5-Codex "Loses the Plot" during Auto-Compaction** [#5957](https://github.com/openai/codex/issues/5957)
    *   **Why it matters:** As context windows fill up, the automatic summarization (compaction) logic causes the model to forget mid-task edits or file states.
    *   **Reaction:** Critical for long-running agentic tasks. Users report the agent effectively "resetting" mid-work.

6.  **[OPEN] GPT-5.3-Codex Auth Failure on Paid Accounts** [#14331](https://github.com/openai/codex/issues/14331)
    *   **Why it matters:** Users on "Plus" plans are reporting 403/Auth errors specifically for newer models like GPT-5.3-Codex.
    *   **Reaction:** High confusion regarding plan limits vs. model availability.

7.  **[OPEN] Thread Refresh Loop / UI Regression** [#14406](https://github.com/openai/codex/issues/14406)
    *   **Why it matters:** A recent update broke the thread view for some users, causing infinite refresh loops and red error boxes.
    *   **Reaction:** A blocking regression that renders the app unusable for those affected.

8.  **[OPEN] Context Compaction Hanging** [#14346](https://github.com/openai/codex/issues/14346)
    *   **Why it matters:** Users report the "compacting context" step taking 20+ minutes or hanging indefinitely.
    *   **Reaction:** Frustration with latency in high-context workflows.

9.  **[OPEN] Team/Business Usage Resets Ignored** [#14329](https://github.com/openai/codex/issues/14329)
    *   **Why it matters:** Non-technical but critical; Business users feel ignored regarding usage limit resets compared to individual accounts.
    *   **Reaction:** Users are resorting to GitHub issues due to lack of support elsewhere.

10. **[OPEN] Sandbox Bypass Regression** [#14345](https://github.com/openai/codex/issues/14345)
    *   **Why it matters:** A change in v0.114.0 appears to have tightened security policies, breaking workflows that relied on `--dangerously-bypass-approvals-and-sandbox`.
    *   **Reaction:** Advanced CLI users are finding their automation scripts blocked.

## 4. Key PR Progress

1.  **Rename reject approval policy to granular** [#14516](https://github.com/openai/codex/pull/14516)
    *   Refactors the approval policy from `reject` to `granular` to clarify that permissions are explicitly *allowed* rather than rejected. Includes renaming `Feature::RequestPermissions` to `Feature::ExecPermissionApprovals`.

2.  **Start TUI on embedded app server** [#14512](https://github.com/openai/codex/pull/14512)
    *   A major architectural shift. The CLI (TUI) will now spin up an in-process app server and share `AuthManager`/`ThreadManager` logic with the Desktop App, reducing code duplication and ensuring feature parity.

3.  **Add smart approvals to app-server and TUI** [#13860](https://github.com/openai/codex/pull/13860)
    *   Introduces `approval_review_policy` (manual-only vs. auto-only) to allow the agent to handle routine approvals automatically, a key step toward fully autonomous coding.

4.  **Fix: Reopen writable Linux carveouts under denied parents** [#14514](https://github.com/openai/codex/pull/14514)
    *   Fixes a complex Linux sandboxing bug (bubblewrap) where nested writable directories inside a read-only parent were inaccessible. Ensures proper mount semantics for granular file permissions.

5.  **App-server: add v2 filesystem APIs and watch support** [#14245](https://github.com/openai/codex/pull/14245)
    *   Expands the app-server protocol to handle file I/O and watching natively, decoupling the client from host-specific filesystem helpers (crucial for the Web/Desktop app evolution).

6.  **Persist js_repl codex helpers across cells** [#14503](https://github.com/openai/codex/pull/14503)
    *   Fixes a bug in the code-mode/REPL environment where references to `codex.tool(...)` became invalid after execution, allowing for better persistent state in code execution.

7.  **Refactor cloud requirements error** [#14504](https://github.com/openai/codex/pull/14504)
    *   Improves error handling by surfacing structured JSON-RPC errors when config/cloud requirements fail, making debugging easier for client integrations.

8.  **Queue slash commands in TUI** [#14170](https://github.com/openai/codex/pull/14170)
    *   Improves UX by queuing slash commands entered while the agent is busy, rather than rejecting them immediately.

9.  **Code_mode: Move exec params to @pragma** [#14511](https://github.com/openai/codex/pull/14511)
    *   Changes how execution parameters are set in code mode, moving from runtime API calls to a comment-style pragma (`// @exec: {...}`), potentially giving the model more direct control over its execution environment.

10. **[MCP] Add support for CIMD oauth authorization** [#13579](https://github.com/openai/codex/pull/13579)
    *   Adds fallback OAuth support for MCP (Model Context Protocol) connectors, improving reliability for third-party integrations.

## 5. Feature Request Trends

*   **Platform Parity for Desktop App:** There is a strong demand for the Desktop App to support **Remote Development** (SSH/Containers) and **macOS Intel (x86_64)** architectures. Users do not want the desktop app to be a "toy" compared to the CLI or VS Code.
*   **Voice-First Development:** Continued interest in Voice Dictation (#3000) suggests developers want "hands-free" coding capabilities similar to the ChatGPT mobile app experience.
*   **Deeper Automation via Hooks:** The desire for **Event Hooks** (#2109) indicates that developers view Codex not just as a tool, but as an orchestrator that should fit into existing scripts and CI pipelines.

## 6. Developer Pain Points

*   **Context Compaction Reliability:** Users are experiencing significant friction with **Auto-Compaction**. It either takes too long (hanging), causes the model to forget task state, or breaks the flow of long coding sessions.
*   **Network & Auth Instability:** A cluster of issues around **reconnecting**, **token exchange failures**, and **regional connectivity** (especially in the EU) suggests the client networking layer is currently fragile.
*   **Sandbox Rigidity:** Advanced users are struggling with the sandbox permissions system. The recent changes to trust settings and "bypass" flags have broken existing workflows, causing confusion between security features and usability.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-03-13

## 1. Today's Highlights
The Gemini CLI team is actively iterating on the **v0.34.0** preview line, releasing two patch versions (**v0.34.0-preview.1** and **v0.34.0-preview.2**) within the last 24 hours to address specific conflicts and bugs. A major theme across recent issues is **agent reliability**, specifically regarding "runaway" processes consuming credits without output (Issue #22101) and significant performance degradation during simple tasks. Additionally, the community is driving substantial improvements in **UX copy/paste workflows** and **Windows platform support**.

## 2. Releases
*   **v0.34.0-preview.2**: A stability patch cherry-picking specific fixes into the release branch.
    *   [Full Changelog](https://github.com/google-gemini/gemin)
*   **v0.34.0-preview.1**: A patch release resolving merge conflicts in the release branch.
    *   [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.34.0-preview.0...v0.34.0-preview.1)

## 3. Hot Issues
1.  **[P1] Gemini-CLI consumed 6hrs of AI credit doing nothing** ([#22101](https://github.com/google-gemini/gemini-cli/issues/22101))
    *   **Context:** A critical report where the agent entered a "web-fetch" loop for 6 hours, depleting user credits.
    *   **Impact:** High severity trust and cost issue; users are requesting better fail-safes or idle timeouts.
2.  **Gemini CLI becomes extremely slow (1+ HOURS) / stuck during small code-edit tasks** ([#22141](https://github.com/google-gemini/gemini-cli/issues/22141))
    *   **Context:** Users report massive latency (13-14 mins) for simple edits, getting stuck after the work is done.
    *   **Impact:** Suggests potential bottlenecks in the agent loop or model response handling.
3.  **Alternate buffer copy mode should hide frames** ([#18701](https://github.com/google-gemini/gemini-cli/issues/18701))
    *   **Context:** Users want to copy terminal output without grabbing UI borders/pipes.
    *   **Impact:** High usability request for "copy-paste" workflows; PR #18709 is already open to address this.
4.  **[Security] API Key Leakage and Failure to Redact** ([#22225](https://github.com/google-gemini/gemini-cli/issues/22225))
    *   **Context:** Agent printed full API keys (Mistral/OpenAI) from env vars in tool outputs.
    *   **Impact:** Critical security flaw; sensitive credentials appearing in plain text history.
5.  **CLI scrolls to the top whenever clicked on** ([#22028](https://github.com/google-gemini/gemini-cli/issues/22028))
    *   **Context:** In VS Code, clicking the terminal causes the view to jump to the top, disrupting flow.
    *   **Impact:** Annoying UX bug affecting daily usage; related to resize/render logic.
6.  **Fix UI snapping to top of plan while reading plans** ([#22215](https://github.com/google-gemini/gemini-cli/issues/22215))
    *   **Context:** When reading long plans in Plan Mode, content is cut off, and scrolling triggers UI snaps.
    *   **Impact:** Makes reviewing complex plans difficult.
7.  **[Bug] CJK (Korean) Input Issue and Missing Multiline Support on Windows** ([#22176](https://github.com/google-gemini/gemini-cli/issues/22176))
    *   **Context:** Korean characters render as empty spaces in Windows Terminal.
    *   **Impact:** Significant platform parity issue; blocks non-English usage on Windows.
8.  **Git push is blocked by policy but tool output is not showing it** ([#22223](https://github.com/google-gemini/gemini-cli/issues/22223))
    *   **Context:** Enterprise policies block git operations, but the CLI fails to display the block/feedback.
    *   **Impact:** Enterprise adoption blocker; silent failures confuse users.
9.  **Epic: Improving Session Continuity and Coherence** ([#21792](https://github.com/google-gemini/gemini-cli/issues/21792))
    *   **Context:** Maintainer-led initiative to tackle context degradation in long-running sessions.
    *   **Impact:** Architectural planning for "memory" and compression logic.
10. **Plan Mode doesn't work at all with ACP** ([#22191](https://github.com/google-gemini/gemini-cli/issues/22191))
    *   **Context:** Agent gets stuck in a loop trying to write plan files when running via ACP (Agent-to-Agent Protocol?).
    *   **Impact:** Feature compatibility gap in non-interactive/remote modes.

## 4. Key PR Progress
1.  **feat(core): implement native Windows sandboxing** ([#21807](https://github.com/google-gemini/gemini-cli/pull/21807))
    *   Adds robust isolation for Windows using Restricted Tokens and MIC. A major security hardening step for the platform.
2.  **feat(cli): enable notifications cross-platform** ([#21618](https://github.com/google-gemini/gemini-cli/pull/21618))
    *   Removes macOS-only restrictions, enabling terminal bell/OSC 9 notifications on Linux/Windows.
3.  **fix(ui): fix flickering on small terminal heights** ([#21416](https://github.com/google-gemini/gemini-cli/pull/21416))
    *   Addresses rendering glitches in constrained terminal windows (Priority P1).
4.  **fix(core): add actionable warnings for terminal fallbacks** ([#22211](https://github.com/google-gemini/gemini-cli/pull/22211))
    *   Improves UX for tmux/screen users by providing specific guidance instead of restricting features forcefully.
5.  **feat(prompts): implement Topic-Action-Summary model** ([#21503](https://github.com/google-gemini/gemini-cli/pull/21503))
    *   Experimental feature to reduce "excessive scrolling" and terminal noise during multi-turn tasks.
6.  **fix: Adjust ToolGroupMessage filtering** ([#22230](https://github.com/google-gemini/gemini-cli/pull/22230))
    *   Fixes duplicate rendering of tool outputs and ensures "Canceled" tools remain visible in history.
7.  **feat(core): implement Stage 2 security... for web_fetch** ([#22217](https://github.com/google-gemini/gemini-cli/pull/22217))
    *   Hardens the `web_fetch` tool against SSRF and DNS rebinding attacks.
8.  **docs(sdk): add JSDoc to exported interfaces** ([#21584](https://github.com/google-gemini/gemini-cli/pull/21584))
    *   Improves developer experience by documenting public SDK interfaces (SystemInstructions, etc.).
9.  **fix: suppress informational logs in headless mode** ([#22227](https://github.com/google-gemini/gemini-cli/pull/22227))
    *   Cleans up `gemini -p` (headless) output by removing debug/theme noise.
10. **Remove tool frames in alternate buffer copy mode** ([#18709](https://github.com/google-gemini/gemini-cli/pull/18709))
    *   Directly addresses Issue #18701, allowing cleaner text selection.

## 5. Feature Request Trends
*   **Copy/Paste UX:** Strong demand for a "clean" mode that strips UI chrome (borders, frames) to facilitate copying terminal output to documentation or chats.
*   **Session Continuity:** A move toward persistent, long-running agents that don't lose context, requiring better "checkpoints" and "memory compression" (referenced in Epics and maintainer workstreams).
*   **Enterprise Policy Visibility:** Requests for better feedback loops when internal enterprise policies block agent actions (like git push), rather than silent failures.

## 6. Developer Pain Points
*   **Performance "Spin":** Users are frustrated by the agent "spinning" for minutes or hours on trivial tasks, consuming credits or time without delivering value.
*   **Platform Parity (Windows):** Input Method Editors (IME) for CJK languages are broken on Windows, and basic features like multiline input remain difficult.
*   **UI Jumpiness:** Scrolling behaviors in Plan Mode and VS Code integration are unstable, snapping back to the top unexpectedly.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-03-13
**Data Source:** [github.com/github/copilot-cli](https://github.com/github/copilot-cli)

---

## 1. Today's Highlights
The team released **version 1.0.5-0**, introducing experimental embedding-based retrieval for MCP (Model Context Protocol) and syntax highlighting for diff views. On the community front, a significant UI regression regarding "alt-screen" views and scrolling issues in Tmux environments is generating friction, while the highly popular request to restore legacy CLI commands continues to drive user migration to third-party alternatives.

## 2. Releases

### **v1.0.5-0**
*   **New Features:**
    *   **`/version` command:** Users can now check the CLI version and check for updates directly within the active session.
    *   **Dynamic Retrieval:** Added experimental embedding-based dynamic retrieval of MCP and skill instructions per turn, which should improve context relevance.
    *   **Syntax Highlighting:** The `/diff` view now supports syntax highlighting for 17 programming languages.
    *   **Hooks:** Added `preCompact` hook to run commands before context compaction.

[View Release Notes](https://github.com/github/copilot-cli/releases/tag/v1.0.5-0)

---

## 3. Hot Issues

1.  **[OPEN] Bring back the GitHub Copilot in the CLI commands to not break workflows** (Issue #53)
    *   **Why it matters:** With 72 upvotes and 30 comments, this is the most active issue. Users are frustrated by breaking changes in command syntax, leading the community to create forks like `shell-ai`.
    *   **Reaction:** Users are actively sharing and advertising third-party tools to restore lost functionality.

2.  **[OPEN] UI Bug: Copilot CLI output flickers/stutters constantly** (Issue #1599)
    *   **Why it matters:** A visual regression causing the output stream to "tremble" vertically makes real-time reading difficult.
    *   **Reaction:** High user frustration regarding the readability of streaming responses.

3.  **[OPEN] Option to disable MCP Servers per default** (Issue #768)
    *   **Why it matters:** As MCP usage grows, power users want granular control to disable servers by default to conserve tokens/costs unless specifically needed.

4.  **[OPEN] Scrolling does not work with Tmux** (Issue #1842)
    *   **Why it matters:** Terminal power users relying on Tmux cannot scroll through long Copilot responses, severely hampering usability in that environment.

5.  **[CLOSED] Allow reasoning effort to be set through the CLI** (Issue #1048)
    *   **Why it matters:** Users want granular control over model reasoning (e.g., `--reasoning-effort high`) directly in the command flags rather than interactive mode.
    *   **Outcome:** This was marked closed, suggesting the feature may have been implemented or resolved.

6.  **[OPEN] Sandbox mode to restrict Copilot CLI file access** (Issue #892)
    *   **Why it matters:** Enterprise security requirements are driving requests to constrain the agent's filesystem access to specific working directories.

7.  **[OPEN] How to turn off alt-screen views?** (Issue #1799)
    *   **Why it matters:** The recent switch to "alt-screen" (a separate terminal buffer) has disrupted user workflows, prompting requests for a toggle to revert to standard output.

8.  **[OPEN] Support pasting images from system clipboard** (Issue #1276)
    *   **Why it matters:** As models become multi-modal, users want to paste screenshots (UI bugs, logs) directly into the CLI prompt, a feature currently missing.

9.  **[OPEN] Cannot enter `@` on German keyboard** (Issue #1999)
    *   **Why it matters:** A critical input bug affecting German layout users (Alt-Gr + Q) makes the CLI effectively unusable for triggering agents/mentions.

10. **[OPEN] Terminal left in broken state after quitting** (Issue #2009)
    *   **Why it matters:** A regression where the terminal does not reset correctly after exit, requiring a manual `reset` command to fix control keys.

---

## 4. Key PR Progress

*   **[CLOSED] Alter PATH for login shells, not interactive shells** (PR #2004 by @tpope):
    *   Addresses an installation bug where the installer incorrectly suggests modifying `.bashrc` (interactive) instead of profile/login files, which causes duplicate PATH entries in nested shells.

*   **[OPEN] Plugin directory loading logic** (Referenced in Issue #2010):
    *   Ongoing work to fix how `--plugin-dir` locates `plugin.json`, ensuring plugins with deeper nested structures are loaded correctly.

*(Note: Only 1 PR appeared in the specific 24h feed provided, but it addresses the critical PATH configuration issue noted in Issue #2001.)*

---

## 5. Feature Request Trends

*   **Granular Model Control:** Users consistently request flags for `--reasoning-effort` (Issue #1048) and setting default models (Issue #2006) via configuration rather than interactive menus.
*   **Context Management:** There is a strong trend toward automation for context limits, specifically "Auto-compact" features to prevent `400 Bad Request` errors during long sessions (Issue #2008).
*   **Security & Isolation:** "Sandboxing" (Issue #892) and BYOK (Bring Your Own Key) support (Issue #1095) are top priorities for professional/enterprise environments.
*   **IDE Integration:** Improved workflow continuity is requested, such as making `/new` start a parallel session without clearing history (Issue #1915).

---

## 6. Developer Pain Points

*   **Terminal Compatibility:** The move to "alt-screen" and UI flickering (Issues #1799, #1599) has broken the experience for users of standard terminal multiplexers like Tmux.
*   **Input Handling:** Recent versions have introduced regressions with specific keyboard layouts (Issue #1999) and paste behavior targeting the wrong input fields (Issue #1989).
*   **Installation Friction:** The installer modifying `.bashrc` incorrectly (Issue #2001) creates technical debt for users managing their shell environments.
*   **UI Readability:** Developers report that dark color choices on black backgrounds (Issue #1998) make the CLI text unreadable without customization.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-03-13
**Data Source:** [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

### 1. Today's Highlights
Version **1.21.0** has been released, introducing significant quality-of-life improvements including **steering input** (allowing users to guide agents mid-execution) and enhanced **Windows support** for the visualization server. The community and core team are heavily focused on stability, with multiple fixes merged to resolve HTTP header parsing errors on Linux and prevent UI race conditions. Additionally, new end-to-end tests for shell PTY were introduced, signaling a maturation of the testing infrastructure.

### 2. Releases
*   **Version 1.21.0** (2026-03-12)
    *   **Steering Input:** Users can now intervene and guide the agent while it is thinking/processing, rather than waiting for a turn to complete ([PR #1422](https://github.com/MoonshotAI/kimi-cli/pull/1422)).
    *   **Platform Setup:** Improved onboarding with API key verification and setup summaries ([PR #1415](https://github.com/MoonshotAI/kimi-cli/pull/1415)).
    *   **Visualization:** Added actions for session directories and support for Windows "open-in" functionality ([PR #1416](https://github.com/MoonshotAI/kimi-cli/pull/1416)).
    *   **Context Persistence:** System prompts are now saved in `context.jsonl` for better session restoration ([PR #1417](https://github.com/MoonshotAI/kimi-cli/pull/1417)).

### 3. Hot Issues
1.  **[#1383] [bug] Multi-agent rate limits:** Users report hitting API rate limits when running two agents ("crayfish") simultaneously, despite expectations of higher concurrency limits for members.
    *   *Why it matters:* Directly impacts power users trying to parallelize workflows. [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1383)
2.  **[#1227] [bug] LLM provider connection error:** A recurring issue for Linux users experiencing generic connection errors during requests.
    *   *Why it matters:* Likely related to the HTTP header sanitization fixes seen in recent PRs; high frustration due to blocking usage entirely. [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1227)
3.  **[#1413] [bug] Terminal AskUserQuestion input bug:** Users cannot select the last option in the terminal's interactive question list.
    *   *Why it matters:* Breaks CLI-driven workflows specifically for multiple-choice interactions. [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1413)
4.  **[#1420] [bug] Web inline formula rendering:** The web interface fails to render LaTeX inline formulas correctly.
    *   *Why it matters:* Affects readability for developers using the Web UI for math-heavy code or documentation. [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1420)
5.  **[#1414] [enhancement] YOLO mode toggle:** Request to add a "YOLO mode" (auto-confirm) shortcut directly into permission prompts.
    *   *Why it matters:* Highly requested workflow optimization to reduce friction during repetitive tasks. [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1414)

*(Note: Total noteworthy issues analyzed: 6 active items in the last 24h)*

### 4. Key PR Progress
1.  **[PR #1422] feat(shell): support steering running agent turns:** **(Merged)** revolutionizes interaction by allowing users to type guidance while the AI is processing.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1422)
2.  **[PR #1415] feat(setup): enhance platform setup:** **(Merged)** Adds API key verification and success summaries to the initial setup flow, reducing configuration errors.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1415)
3.  **[PR #1424] feat(tests): add e2e tests for shell PTY:** **(Open)** Introduces robust end-to-end tests for pseudo-terminal handling, critical for preventing regressions in shell integration.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1424)
4.  **[PR #1419] fix(web): stabilize WebSocket connect:** **(Open)** Prevents "reconnection storms" where the Web UI rapidly cycles connections.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1419)
5.  **[PR #1421] fix(tools): treat dismissed questions as errors:** **(Open)** Fixes logic where dismissing a prompt allowed the AI to proceed erroneously; it now stops execution.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1421)
6.  **[PR #1384] fix: sanitize http header newline:** **(Open)** Addresses `Connection error` on Ubuntu by stripping illegal newline characters from HTTP headers.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1384)
7.  **[PR #1411] fix(ui): correct usage bar color logic:** **(Open)** Fixes a UI bug where high resource usage displayed as green and low usage as red.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1411)
8.  **[PR #1410] fix: strip HTTP-unsafe characters:** **(Open)** Strips unsafe ASCII characters (like `#`) from headers which were causing connection failures on specific Linux kernels.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1410)
9.  **[PR #1236] feat(http): enable trust_env:** **(Open)** Allows `aiohttp` to respect system proxy settings, essential for corporate network environments.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1236)
10. **[PR #1361] fix: strip whitespace from oauth header:** **(Merged)** Resolves `LocalProtocolError` caused by trailing whitespace in OS version strings.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1361)

### 5. Feature Request Trends
*   **Workflow Automation ("YOLO Mode"):** Users want easier ways to bypass manual confirmations. The request for a "YOLO mode" toggle directly in permission dialogs (Issue #1414) highlights a desire for faster, less interrupted coding sessions.
*   **Flexible Authentication:** A push for broader login support, specifically for `kimi-code` API keys (Issue #1412), suggests users are managing multiple API sources or utilizing specialized subscriptions.
*   **Multi-Agent Concurrency:** Users are attempting to run parallel agents (Issue #1383), indicating a trend toward using the CLI as an orchestrator for complex, simultaneous tasks rather than a single-threaded assistant.

### 6. Developer Pain Points
*   **Linux Header/Network Compatibility:** A significant cluster of issues (e.g., #1227) and PRs (#1384, #1410, #1361) relate to Linux-specific connection errors. The root cause is often strict HTTP libraries rejecting subtle formatting issues in auto-generated headers (like OS version strings containing `#` or whitespace).
*   **Web UI Stability:** WebSocket connection issues (PR #1419) and rendering bugs (Issue #1420) suggest the Web interface is currently less stable than the CLI, leading to a fragmented experience for users who switch between them.
*   **Input Handling Edge Cases:** Bugs in the interactive prompt tools (Issue #1413) show that while features are being added, basic interactive reliability (selecting the last item in a list) remains a friction point.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-03-13

---

## 1. Today's Highlights

Activity in the OpenCode community continues at a steady pace with no new releases in the past 24 hours. The most pressing concern remains **Issue #8030**, where GitHub Copilot authentication is misclassifying agent-initiated requests as "user" requests, rapidly depleting premium quotas. Meanwhile, contributors are actively pushing significant refactoring efforts to migrate core services (Auth, ProviderAuth, State) to an Effect-based architecture, and discussions around **Agent Teams** and **OAuth flows for MCP servers** are gaining traction with high community engagement.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|----------------|
| [#8030](https://github.com/anomalyco/opencode/issues/8030) | **Copilot auth mislabels agent requests as "user"** | 172 comments, 58 👍. Users report 60+ agent-initiated requests consuming premium quota due to incorrect `X-Initiator` header. Critical for Copilot users. |
| [#988](https://github.com/anomalyco/opencode/issues/988) | **OAuth 2.1 for MCP remote servers** | 78 👍, 35 comments. Simplifies MCP server installation by removing manual secret handling. High community demand for secure, streamlined auth. |
| [#12661](https://github.com/anomalyco/opencode/issues/12661) | **Agent Teams equivalent** | 86 👍, 15 comments. Users want Claude Code-style multi-agent orchestration capabilities. Strong interest in collaborative agent workflows. |
| [#4340](https://github.com/anomalyco/opencode/issues/4340) | **Windows ARM64 support** | 23 👍. Closed after implementation, but highlights ongoing platform expansion needs. Windows compatibility remains a focus area. |
| [#6651](https://github.com/anomalyco/opencode/issues/6651) | **Dynamic model selection for subagents** | 24 👍, 18 comments. Request to let Task tool dynamically assign models based on task complexity. Key for efficient multi-agent architectures. |
| [#15092](https://github.com/anomalyco/opencode/issues/15092) | **Minimax M2.5 reliability issues** | Model frequently stalls mid-generation despite low context usage. Signals compatibility concerns with emerging models. |
| [#11313](https://github.com/anomalyco/opencode/issues/11313) | **Long bash commands cause truncation loops** | Verbose command outputs get truncated, triggering retry loops. Impacts workflow reliability for complex operations. |
| [#16805](https://github.com/anomalyco/opencode/issues/16805) | **Plan mode bypass via bash** | Agent circumvents write restrictions using bash commands. Security/behavioral concern for controlled execution modes. |
| [#15660](https://github.com/anomalyco/opencode/issues/15660) | **Excessive token consumption** | Users report 40% quota drops in single sessions compared to alternative tools. Performance optimization needed. |
| [#17185](https://github.com/anomalyco/opencode/issues/17185) | **Memory leak in bus subscription** | Closed but notable—log cleanup threshold inconsistency and subscriber memory leak identified. Fixed via threshold alignment. |

---

## 4. Key PR Progress

| PR | Title | Description |
|----|-------|-------------|
| [#17246](https://github.com/anomalyco/opencode/pull/17246) | **Global session cycling keybinds** | Adds `ctrl+x →/←` to navigate sessions across the app. Registered at app level for universal access. |
| [#11377](https://github.com/anomalyco/opencode/pull/11377) | **Model tier selection for subagents** | Implements dynamic model assignment based on task complexity. Eliminates need for duplicate agent configurations. |
| [#17227](https://github.com/anomalyco/opencode/pull/17227) | **Effect-based ProviderAuthService** | Refactors provider auth to Effect-native core while preserving Zod facade. Major architectural modernization. |
| [#17212](https://github.com/anomalyco/opencode/pull/17212) | **Effect-based AuthService** | Migrates auth file I/O and key normalization to Effect architecture. Maintains backward compatibility. |
| [#17231](https://github.com/anomalyco/opencode/pull/17231) | **ScopedState refactor** | Introduces `ScopedState` effect type with root-based caching and scope cleanup. MERGED. |
| [#17244](https://github.com/anomalyco/opencode/pull/17244) | **Sidecar process spawn/kill fix** | Fixes desktop sidecar process handling on close. Prevents orphaned processes. MERGED. |
| [#17245](https://github.com/anomalyco/opencode/pull/17245) | **Dedupe symlinked skill directories** | Prevents duplicate skill discovery when symlinked aliases point to same location. |
| [#17214](https://github.com/anomalyco/opencode/pull/17214) | **Remote server switching fix** | Rebuilds provider tree correctly when switching servers in desktop app. |
| [#17238](https://github.com/anomalyco/opencode/pull/17238) | **Effect logger compatibility layer** | Routes Effect framework logs through existing log backend. Enables gradual Effect adoption. |
| [#9867](https://github.com/anomalyco/opencode/pull/9867) | **Ecosystem docs: handoff, beads, agent-memory** | Documentation PR adding community plugins for session handoffs and agent memory management. |

---

## 5. Feature Request Trends

1. **Multi-Agent Orchestration** — Strong demand for Agent Teams / swarming capabilities ([#12661](https://github.com/anomalyco/opencode/issues/12661), 86 👍) to coordinate multiple specialized agents on complex tasks.

2. **OAuth Integration for MCP** — Community wants passwordless, secure MCP server connections via OAuth 2.1 ([#988](https://github.com/anomalyco/opencode/issues/988), 78 👍) and iFlow OAuth support ([#10279](https://github.com/anomalyco/opencode/issues/10279)).

3. **Dynamic Model Routing** — Requests for intelligent model selection per subagent/task ([#6651](https://github.com/anomalyco/opencode/issues/6651), 24 👍) to optimize cost and performance.

4. **Desktop UX Improvements** — Clickable file paths in chat ([#17209](https://github.com/anomalyco/opencode/issues/17209)), proper permission prompts after sleep, and menu bar auto-hide.

5. **GitHub Copilot Token Flow** — Native PAT-based authentication for Copilot API ([#12258](https://github.com/anomalyco/opencode/issues/12258)).

---

## 6. Developer Pain Points

| Category | Issues | Summary |
|----------|--------|---------|
| **Quota Management** | [#8030](https://github.com/anomalyco/opencode/issues/8030), [#15660](https://github.com/anomalyco/opencode/issues/15660) | Copilot misclassification and general token inefficiency causing rapid quota depletion. Users report 40% drops in single sessions. |
| **Windows Compatibility** | [#4340](https://github.com/anomalyco/opencode/issues/4340), [#9674](https://github.com/anomalyco/opencode/issues/9674), [#17183](https://github.com/anomalyco/opencode/issues/17183) | ARM64 support, `tool_call` tag rendering, and path-format-sensitive session matching issues persist on Windows. |
| **Model Reliability** | [#15092](https://github.com/anomalyco/opencode/issues/15092), [#16218](https://github.com/anomalyco/opencode/issues/16218) | Minimax M2.5 stalling, response looping bugs with certain models impact developer productivity. |
| **Plan Mode Security** | [#16805](https://github.com/anomalyco/opencode/issues/16805) | Agents bypass write restrictions via bash, undermining intended safety constraints. |
| **TUI/Nested Agent UX** | [#7654](https://github.com/anomalyco/opencode/issues/7654) | Questions from deeply nested sub-agents don't surface in TUI, causing hangs. |

---

*Digest generated from GitHub activity on 2026-03-13.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-03-13

## 1. Today's Highlights
The community is buzzing with activity following the release of **v0.12.2**, which addresses a critical session export bug and OAuth screen flickering on Windows. A major theme today is **compatibility and stability**, with several fixes landing for the VS Code IDE Companion connection issues and DeepSeek API integration. Additionally, contributors are pushing significant **quality-of-life improvements**, including parallel tool execution, better context management for subagents, and a new "Arena" mode for multi-model comparison.

## 2. Releases

### **v0.12.2** (Stable)
This patch release focuses on correcting session handling and repository maintenance.
*   **Session Fix:** The `/export` command now correctly uses the current session ID rather than reloading the last session ([PR #2268](https://github.com/QwenLM/qwen-code/pull/2268)).
*   **Governance:** Updated code owners for the VSCode IDE Companion and WebUI modules ([PR #2312](https://github.com/QwenLM/qwen-code/pull/2312)).
*   **[Full Changelog](https://github.com/QwenLM/qwen-code/compare/v0.12.1...v0.12.2)**

## 3. Hot Issues

1.  **[#2101 Space Button Input Failure](https://github.com/QwenLM/qwen-code/issues/2101)**
    *   **Context:** Users on Windows cannot type spaces in the input field (v0.11.1).
    *   **Impact:** High priority usability blocker. The community is actively discussing potential hotkey conflicts.
2.  **[#2191 & #2146 API Rate Limiting (429 Errors)](https://github.com/QwenLM/qwen-code/issues/2191)**
    *   **Context:** Users are experiencing persistent `429 Too Many Requests` errors during web searches via DashScope.
    *   **Impact:** Interrupts workflows relying on web-augmented generation.
3.  **[#2279 VS Code Companion Connection Failure](https://github.com/QwenLM/qwen-code/issues/2279)**
    *   **Context:** The v0.12.0 extension gets stuck on "Preparing Qwen Code..." with no input line visible.
    *   **Impact:** Renders the IDE extension unusable for a subset of users.
4.  **[#2261 write_file Tool Fails on Windows](https://github.com/QwenLM/qwen-code/issues/2261)**
    *   **Context:** The tool accepts commands but fails to create files on Windows x64 environments.
    *   **Impact:** Critical failure for file manipulation automation.
5.  **[#2306 Crash on Permission Approval](https://github.com/QwenLM/qwen-code/issues/2306)**
    *   **Context:** Qwen Code crashes to terminal when selecting "Always Allow" for command execution (regression in v0.12.0).
    *   **Impact:** Severe stability issue affecting trust in automated tasks.
6.  **[#2338 Skill Activation Confusion](https://github.com/QwenLM/qwen-code/issues/2338)**
    *   **Context:** Installed skills (e.g., shadcn) do not auto-activate contextually as expected.
    *   **Impact:** Reduces the utility of the skills system, requiring manual intervention.
7.  **[#2318 & #2158 DeepSeek API Incompatibility](https://github.com/QwenLM/qwen-code/issues/2318)**
    *   **Context:** DeepSeek API fails with `400 Invalid Type` errors because it expects string content, while Qwen Code sends arrays.
    *   **Impact:** Prevents users from swapping backends to DeepSeek models. (Fixed in PR #2320).
8.  **[#2325 Enhanced @ Mentions Request](https://github.com/QwenLM/qwen-code/issues/2325)**
    *   **Context:** Users want to `@` mention folders (not just files) and use fuzzy search.
    *   **Impact:** Highly requested UX improvement for context setting.
9.  **[#1985 Plan Mode in VS Code](https://github.com/QwenLM/qwen-code/issues/1985)**
    *   **Context:** The VS Code extension lacks the "Plan Mode" toggle available in the CLI.
    *   **Impact:** Feature parity gap between CLI and IDE experiences.
10. **[#2254 OAuth UI Flickering](https://github.com/QwenLM/qwen-code/issues/2254)**
    *   **Context:** Scanning interface flickers severely on Windows PowerShell.
    *   **Impact:** Poor onboarding experience during authentication. (Fixed in PR #2315).

## 4. Key PR Progress

1.  **[PR #2000 Parallel Tool Call Execution](https://github.com/QwenLM/qwen-code/pull/2000)**
    *   **Significance:** Massive performance boost. Switches tool execution from sequential to parallel (`Promise.allSettled`), significantly speeding up complex tasks.
2.  **[PR #2320 DeepSeek API Fix](https://github.com/QwenLM/qwen-code/pull/2320)**
    *   **Significance:** Critical compatibility fix. Converts array content to strings to satisfy DeepSeek API requirements.
3.  **[PR #2315 & #2311 OAuth Flicker Fix](https://github.com/QwenLM/qwen-code/pull/2315)**
    *   **Significance:** Improves Windows UX by removing the QR code element that caused high-frequency re-renders in PowerShell.
4.  **[PR #1912 Agent Collaboration Arena](https://github.com/QwenLM/qwen-code/pull/1912)**
    *   **Significance:** Exciting new feature allowing parallel execution of tasks across multiple models using git worktrees for side-by-side comparison.
5.  **[PR #2326 Auto-Retry Error Clearing](https://github.com/QwenLM/qwen-code/pull/2326)**
    *   **Significance:** UX polish. Ensures stale error messages (from 429s) are cleared immediately after a retry succeeds.
6.  **[PR #2324 LS Tool Truncation](https://github.com/QwenLM/qwen-code/pull/2324)**
    *   **Significance:** Stability fix. Prevents context overflow and crashes when listing directories with massive amounts of files.
7.  **[PR #2333 Slash Command Localization](https://github.com/QwenLM/qwen-code/pull/2333)**
    *   **Significance:** Expands global accessibility by localizing built-in slash command descriptions.
8.  **[PR #2328 Export Metadata & Stats](https://github.com/QwenLM/qwen-code/pull/2328)**
    *   **Significance:** Enhances session exports (HTML/JSON) with token usage stats, git branch info, and file operation counts for better auditing.
9.  **[PR #2330 Remote Control Feature](https://github.com/QwenLM/qwen-code/pull/2330)**
    *   **Significance:** Experimental feature adding an HTTP/WebSocket server to allow browser-based interaction with the CLI.
10. **[PR #2203 Core Event Hooks](https://github.com/QwenLM/qwen-code/pull/2203)**
    *   **Significance:** Extensibility update. Implements 10 core event hooks (session lifecycle, tool execution) for advanced automation.

## 5. Feature Request Trends
*   **IDE Parity:** Strong demand to bring CLI features (like "Plan Mode" `Shift+Tab` cycling) to the VS Code Companion.
*   **Advanced Context Control:** Users want more granular control over context, specifically the ability to `@` mention entire folders and utilize fuzzy search for faster file referencing.
*   **Clipboard Integration:** Recurring requests to allow direct image pasting from the clipboard into the chat, bypassing the file save step.
*   **Model Comparison:** Interest in "Arena" style features to benchmark different models (Qwen, DeepSeek, etc.) on the same task simultaneously.

## 6. Developer Pain Points
*   **Platform Instability (Windows):** A disproportionate number of bugs (space bar input, `write_file` failures, UI flickering) are reported on Windows/PowerShell, suggesting a need for better cross-platform integration testing.
*   **External API Rate Limits:** Frequent `429` errors from DashScope/Search are disrupting workflows, leading to requests for better queue management or retry logic visibility.
*   **Tool Execution Reliability:** The regression where "Always Allow" causes a crash has shaken confidence in the "set and forget" automation capabilities.
*   **Context Window Management:** Users are frustrated when the agent attempts to read directories with 10,000+ files, leading to context errors; developers need smarter built-in guards for file scanning limits.

</details>