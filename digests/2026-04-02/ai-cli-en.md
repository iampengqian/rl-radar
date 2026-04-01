# AI CLI Tools Community Digest 2026-04-02

> Generated: 2026-04-01 22:08 UTC | Tools covered: 7

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
**Report Date:** 2026-04-02

---

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing a **fragmentation crisis around terminal UI stability**, with nearly every major tool battling rendering regressions, scrollback issues, and cross-platform inconsistencies. Simultaneously, there's an aggressive **architectural consolidation toward Rust and TypeScript** as projects outgrow Python's async limitations and seek better performance. The dominant theme across all communities is **frustration with opaque token consumption and quota management**, suggesting a maturing market where developer trust is eroding due to billing unpredictability. Notably, **Model Context Protocol (MCP) has emerged as the universal standard** for tool extensibility, adopted across all major platforms.

---

## 2. Activity Comparison

| Tool | Hot Issues | Key PRs | Latest Release | Primary Focus |
|------|-----------|---------|----------------|---------------|
| **Claude Code** | 10 | 10 | v2.1.89 | Terminal rendering regressions, billing transparency, session persistence |
| **OpenAI Codex** | 10 | 10 | rust-v0.119.0-alpha.2 | Architecture refactoring (Rust crates), VS Code CPU/memory issues, token consumption |
| **Gemini CLI** | 10 | 10 | v0.37.0-preview.0 | OAuth/quota errors, subagent architecture, UI performance |
| **GitHub Copilot CLI** | 10 | 0 | v1.0.16-0 | Model parity with VS Code, alt-screen usability, headless auth |
| **Kimi Code CLI** | 10 | 10 | v1.29.0 | Windows compatibility, Python→TypeScript rewrite proposal, TUI responsiveness |
| **OpenCode** | 10 | 10 | v1.3.13 | Memory leaks, Copilot/Anthropic integration, context management strategies |
| **Qwen Code** | 10 | 10 | v0.14.0-preview.4 | Model availability, external integrations, ACP connection stability |

**Activity Leader:** OpenAI Codex and Gemini CLI show the highest architectural churn with major refactoring efforts. **Qwen Code** leads in feature velocity with 6 merged PRs for v0.14.0.

---

## 3. Shared Feature Directions

| Direction | Tools Involved | Specific Requirements |
|-----------|----------------|----------------------|
| **Terminal UI Stability** | Claude Code, GitHub Copilot CLI, Kimi Code, OpenCode | Alt-screen mode controversy, scrollback preservation, rendering artifacts—users universally reject losing terminal history |
| **Token/Quota Transparency** | Claude Code (#38335), OpenAI Codex (#14593), Gemini CLI (#24384, #24396) | Real-time usage dashboards, billing visibility, "burning tokens" without feedback |
| **Headless/CI Authentication** | Claude Code (#22992), GitHub Copilot CLI (v1.0.15), Gemini CLI | RFC 8628 Device Code Flow, non-interactive login for automation pipelines |
| **Subagent Architecture** | Gemini CLI (v0.36.0), OpenAI Codex (#15915), Qwen Code (#1783, #2698) | Independent model selection per subagent, approval mode awareness, analytics |
| **MCP Ecosystem** | All tools | Universal adoption for tool extensibility; demand expanding to Resources and Prompts |
| **Context Management Evolution** | OpenCode (#4659), Kimi Code (#1691), Claude Code | Sliding window vs. summarization, incremental memory, preserving inception context |
| **Windows Platform Parity** | Kimi Code (v1.29.0), OpenAI Codex (#15277), OpenCode, Qwen Code (#2780) | CRLF handling, PowerShell path resolution, sandbox compatibility |

---

## 4. Differentiation Analysis

| Tool | Strategic Focus | Target User | Technical Approach |
|------|-----------------|-------------|-------------------|
| **Claude Code** | Enterprise power users, complex agentic workflows | Professional developers with Max/Pro subscriptions | TypeScript, plugin ecosystem, hook system for extensibility |
| **OpenAI Codex** | IDE integration, modular architecture | VS Code-centric developers, enterprise teams | Aggressive Rust migration, crate extraction (`codex-mcp`, `codex-tools`) |
| **Gemini CLI** | Google Cloud ecosystem integration, subagent orchestration | GCP users, multi-project teams | Multi-registry architecture, Vertex AI native support |
| **GitHub Copilot CLI** | GitHub-native workflow, enterprise compliance | Existing Copilot subscribers, org-managed developers | Native GitHub auth, org policy enforcement |
| **Kimi Code CLI** | Rapid iteration, community-driven architecture | Cost-conscious developers, Chinese market | Python→Bun/TypeScript transition proposed |
| **OpenCode** | Provider flexibility, runtime agnosticism | Multi-model users, self-hosted deployments | Bun with Hono adapters, exploring Deno alternative |
| **Qwen Code** | External integrations, automation | Teams needing chat platform integration (Telegram, WeChat) | Channels platform, cron/scheduling capabilities |

**Key Differentiator:** **Qwen Code** uniquely targets background automation with cron-style scheduling. **OpenCode** leads in provider flexibility. **Claude Code** has the most sophisticated hook/permission system. **OpenAI Codex** is deepest into Rust performance optimization.

---

## 5. Community Momentum & Maturity

| Category | Tools | Evidence |
|----------|-------|----------|
| **Rapid Iteration** | Qwen Code, Kimi Code | Multiple preview releases in 24 hours, community rewrite proposals gaining traction |
| **Architectural Maturation** | OpenAI Codex, Gemini CLI | Major refactoring efforts (crate extraction, multi-registry), alpha/beta staging |
| **Regression Recovery** | Claude Code | v2.1.89 introduced critical display bugs; community actively diagnosing, PRs for fixes in progress |
| **Enterprise Traction** | GitHub Copilot CLI, Claude Code | Focus on org-level model policies, device auth, fine-grained permissions |
| **Platform Catch-up** | Kimi Code, OpenAI Codex | Windows fixes, macOS Intel support requests remain unresolved |

**Momentum Leader:** **Qwen Code** shows highest merge velocity (6 PRs merged). **Maturity Leader:** **OpenAI Codex** demonstrates systematic architectural planning with staged crate extraction.

---

## 6. Trend Signals

### Critical Industry Shifts

1. **Python CLI Era Ending** — Kimi Code's community-proposed Bun+TypeScript+React Ink rewrite (#1707) reflects a broader realization: Python's async model is fundamentally mismatched to responsive TUI requirements. Expect migrations across the ecosystem.

2. **Billing Trust Crisis** — With 312+ comments on Claude Code's quota issue (#38335) and 369+ on Codex token consumption (#14593), **developers are losing faith in usage transparency**. Tools that provide real-time dashboards will gain competitive advantage.

3. **Alt-Screen Rejection** — The "flicker-free" and "alt-screen" features are being rejected across Claude Code, GitHub Copilot CLI, and Kimi Code. **Developers prioritize terminal workflow continuity over visual polish.**

4. **Subagent Specialization** — The ability to assign cheaper/faster models to subagents (Qwen Code #2698, Gemini CLI multi-registry) indicates a shift toward **cost-optimized multi-model architectures**.

5. **MCP as Infrastructure** — MCP is no longer a differentiator; it's expected infrastructure. The next battleground is **MCP Resources and Prompts** support, not just Tools.

6. **CI/CD Integration Gap** — Device code flow is partially implemented but session hooks, token validation, and headless reliability remain broken across tools. **Enterprise automation adoption is blocked** until resolved.

### Strategic Recommendations

- **For Tool Builders:** Prioritize scrollback preservation, real-time token visibility, and Windows compatibility before adding new features.
- **For Enterprise Adopters:** GitHub Copilot CLI and Claude Code lead in org-policy support; OpenAI Codex and Gemini CLI are better for custom integrations.
- **For Developers:** Monitor OpenAI Codex's Rust migration as a potential performance benchmark; Qwen Code's Channels platform for chat integrations.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Analysis Period:** Through 2026-04-02 | **Source:** [anthropics/skills](https://github.com/anthropics/skills)

---

## 1. Top Skills Ranking

Based on community engagement and attention, here are the most notable Skills from the period:

| Rank | Skill | Author | Status | Focus |
|------|-------|--------|--------|-------|
| 1 | **document-typography** | PGTBoos | OPEN | Document Quality |
| 2 | **frontend-design** (revision) | justinwetch | OPEN | UI/UX Guidance |
| 3 | **skill-quality-analyzer / skill-security-analyzer** | eoviciu | OPEN | Meta/Tooling |
| 4 | **ODT (OpenDocument)** | GitHubNewbie0 | OPEN | Document Format |
| 5 | **CONTRIBUTING.md** | narenkatakam | OPEN | Repo Infrastructure |
| 6 | **SAP-RPT-1-OSS predictor** | amitlals | OPEN | Enterprise/ML |
| 7 | **shodh-memory** | varun29ankuS | OPEN | Agent Memory |
| 8 | **quality-playbook** | andrewstellman | OPEN | QA Automation |

### Detailed Analysis

**1. [document-typography](https://github.com/anthropics/skills/pull/514)** — *Typographic quality control for generated documents*
- **Functionality:** Automatically prevents orphan word wraps, widow paragraphs, and numbering misalignments in AI-generated documents—addressing subtle but pervasive quality issues.
- **Discussion Highlights:** Positioned as solving "problems users rarely ask about but notice when missing"; strong appeal for professional document workflows.
- **Status:** OPEN (Created 2026-03-04)

**2. [frontend-design (revision)](https://github.com/anthropics/skills/pull/210)** — *Improved clarity and actionability*
- **Functionality:** Rewrites the frontend-design skill to be more actionable, ensuring every instruction is executable within a single conversation.
- **Discussion Highlights:** Focuses on reducing ambiguity and improving internal coherence; addresses token efficiency concerns.
- **Status:** OPEN (Created 2026-01-05, active through March)

**3. [skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** — *Meta-skills for the ecosystem*
- **Functionality:** Two meta-skills—quality analyzer (5 dimensions: structure, documentation, examples, resources, usability) and security analyzer for skill validation.
- **Discussion Highlights:** Early contribution to ecosystem tooling; enables community self-policing of skill quality.
- **Status:** OPEN (Created 2025-11-06)

**4. [ODT Skill](https://github.com/anthropics/skills/pull/486)** — *OpenDocument text creation and parsing*
- **Functionality:** Full ODT support—create, template-fill, and parse OpenDocument files (ISO/IEC 26300 standard); compatible with LibreOffice, Google Docs, OnlyOffice.
- **Discussion Highlights:** Addresses enterprise/open-source document standards gap; recently active (updated 2026-03-26).
- **Status:** OPEN

**5. [CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** — *Community health infrastructure*
- **Functionality:** Addresses repo's 25% community health score by adding contribution guidelines.
- **Discussion Highlights:** Practical improvement to lower barriers for new contributors; closes [Issue #452](https://github.com/anthropics/skills/issues/452).
- **Status:** OPEN

**6. [SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181)** — *Enterprise predictive analytics*
- **Functionality:** Leverages SAP's open-source tabular foundation model (released Teched 2025) for predictive analytics on SAP business data.
- **Discussion Highlights:** Bridges enterprise SAP ecosystems with Claude Code; Apache 2.0 licensed.
- **Status:** OPEN

**7. [shodh-memory](https://github.com/anthropics/skills/pull/154)** — *Persistent context for AI agents*
- **Functionality:** Maintains context across conversations via proactive memory surfacing and structured memory storage.
- **Discussion Highlights:** Addresses fundamental limitation of stateless AI conversations; active interest through March 2026.
- **Status:** OPEN

**8. [quality-playbook](https://github.com/anthropics/skills/pull/659)** — *Automated quality system generation*
- **Functionality:** Revives traditional QA practices using AI—generates test strategies based on *requirements* rather than source code.
- **Discussion Highlights:** Differentiated approach from code-based test generators; focuses on requirements-to-tests pipeline.
- **Status:** OPEN

---

## 2. Community Demand Trends

Analysis of Issues reveals the following anticipated directions:

| Trend | Description | Evidence |
|-------|-------------|----------|
| **Agent Governance & Safety** | Patterns for policy enforcement, threat detection, trust scoring in agentic systems | [Issue #412](https://github.com/anthropics/skills/issues/412) |
| **Org-Wide Skill Sharing** | Direct sharing within organizations without manual file transfer | [Issue #228](https://github.com/anthropics/skills/issues/228) (👍 3) |
| **Skills-as-MCPs** | Exposing Skills as Model Context Protocol tools for standardized APIs | [Issue #16](https://github.com/anthropics/skills/issues/16) |
| **Enterprise/SSO Compatibility** | Skills tooling that works without `ANTHROPIC_API_KEY` (for SSO users) | [Issue #532](https://github.com/anthropics/skills/issues/532) |
| **AWS Bedrock Integration** | Cross-platform skill execution beyond Anthropic API | [Issue #29](https://github.com/anthropics/skills/issues/29) |
| **Skill-creator Best Practices** | Overhaul of skill-creator to be actionable, not educational | [Issue #202](https://github.com/anthropics/skills/issues/202) (👍 1) |

---

## 3. High-Potential Pending Skills

Active PRs with strong momentum that may merge soon:

| Skill | PR | Differentiation |
|-------|-----|-----------------|
| **plan-task** | [#522](https://github.com/anthropics/skills/pull/522) | Persists multi-step plans across sessions via `.claude/tasks/` Markdown files |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Comprehensive testing stack (Testing Trophy, AAA pattern, React Testing Library) |
| **Buildr (Telegram bridge)** | [#419](https://github.com/anthropics/skills/pull/419) | Mobile control of Claude Code sessions via Telegram bot |
| **masonry-generate-image-and-videos** | [#335](https://github.com/anthropics/skills/pull/335) | Imagen 3.0 / Veo 3.1 media generation CLI integration |
| **codebase-inventory-audit** | [#147](https://github.com/anthropics/skills/pull/147) | Systematic orphan code detection and documentation gap analysis |

**Critical Fixes Approaching Merge:**
- [fix(docx): tracked change w:id collision](https://github.com/anthropics/skills/pull/541) — Prevents document corruption
- [fix(pdf): case-sensitive file references](https://github.com/anthropics/skills/pull/538) — Linux compatibility

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for infrastructure improvements (skill-creator overhaul, org-sharing, enterprise SSO support) and quality-assurance tooling (typography control, testing patterns, quality playbooks) that elevate output reliability across all skill domains.**

---

*Report generated from 50 PRs and 15 Issues analyzed. Data snapshot: 2026-04-02.*

---

# Claude Code Community Digest
**2026-04-02**

---

## Today's Highlights

Version **v2.1.89** landed with two significant additions: a `"defer"` permission decision for `PreToolUse` hooks enabling headless sessions to pause and resume, and a `CLAUDE_CODE_NO_FLICKER=1` environment variable for flicker-free alt-screen rendering. However, the release appears to have introduced regressions—multiple users report terminal display issues where conversation history disappears, and the new rendering behavior may be destroying scrollback by default. The community is actively investigating these issues.

---

## Releases

### v2.1.89
- **`"defer"` permission for hooks**: Headless sessions can now pause at a tool call and resume with `-p --resume` to have the hook re-evaluate permissions
- **Flicker-free rendering opt-in**: Set `CLAUDE_CODE_NO_FLICKER=1` to enable alt-screen rendering with virtualized scrollback

---

## Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | **[#38335](https://github.com/anthropics/claude-code/issues/38335)** — Max plan session limits exhausted abnormally fast | 312 comments, 254 👍. Users report CLI usage consuming quotas at ~5x normal rate since March 23. High-impact billing concern affecting power users. |
| 2 | **[#40524](https://github.com/anthropics/claude-code/issues/40524)** — Conversation history invalidated on subsequent turns | 58 comments, 134 👍. Regression causing context loss mid-conversation. Labeled `regression`, `has repro`. Critical for workflow continuity. |
| 3 | **[#41814](https://github.com/anthropics/claude-code/issues/41814)** — Messages disappear from terminal after v2.1.89 | 21 comments, 42 👍. Direct regression from latest release—user prompts and assistant responses vanish during active sessions. |
| 4 | **[#41965](https://github.com/anthropics/claude-code/issues/41965)** — Flicker-free rendering destroys scrollback | Reports that the new `CLAUDE_CODE_NO_FLICKER` behavior may be enabled by default, wiping terminal scrollback after ~2 pages. |
| 5 | **[#42244](https://github.com/anthropics/claude-code/issues/42244)** — Terminal content disappearing (Linux/IntelliJ) | Another v2.1.89 regression confirming display issues across platforms. Labeled `regression`. |
| 6 | **[#42239](https://github.com/anthropics/claude-code/issues/42239)** — Project slash commands no longer appear | Closed but notable—v2.1.89 broke `.claude/commands/` discovery. Downgrade to v2.1.81 restores functionality. |
| 7 | **[#38055](https://github.com/anthropics/claude-code/issues/38055)** — Cowork update deletes chat history | Minor version updates permanently removing scheduled tasks and history on Windows. Data-loss severity. |
| 8 | **[#22992](https://github.com/anthropics/claude-code/issues/22992)** — Device-code auth for headless environments | Long-standing request (created Feb 2026) for RFC 8628 OAuth flow. Critical for CI/CD and server usage. |
| 9 | **[#34210](https://github.com/anthropics/claude-code/issues/34210)** — Silent deletion of date-prefixed files | Claude Code mistakenly deletes files like `2026-03-14_session_notes.md` from `~/.claude/sessions/` as stale PID files. Data-loss bug. |
| 10 | **[#42256](https://github.com/anthropics/claude-code/issues/42256)** — Oversized images re-sent on every message | When images exceed API limits, they're not dropped—instead they're re-sent indefinitely, wasting tokens. |

---

## Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | **[#42245](https://github.com/anthropics/claude-code/pull/42245)** — Add EvalView plugin | AI agent regression testing via structural diffs of tool calls against golden baselines. |
| 2 | **[#39148](https://github.com/anthropics/claude-code/pull/39148)** — preserve-session plugin | Path-independent session history using UUIDs—survives directory renames and moves. |
| 3 | **[#41568](https://github.com/anthropics/claude-code/pull/41568)** — Rust implementation rewrite | Ambitious 16-crate workspace reimplementation for performance. Community-driven. |
| 4 | **[#41518](https://github.com/anthropics/claude-code/pull/41518)** — Open source extraction | Extracted 1,906 TypeScript source files from npm package source maps. |
| 5 | **[#42205](https://github.com/anthropics/claude-code/pull/42205)** — Fix hookify tool matcher parsing | Normalizes matcher strings with spaces around separators. |
| 6 | **[#42162](https://github.com/anthropics/claude-code/pull/42162)** — Fix hookify relative imports | Enables plugin to work when installed via plugin cache. |
| 7 | **[#40777](https://github.com/anthropics/claude-code/pull/40777)** — Recommended settings template | Balanced `settings-recommended.json` with sandbox enabled and safe git commands pre-allowed. |
| 8 | **[#27306](https://github.com/anthropics/claude-code/pull/27306)** — Fix devcontainer login hanging | Resolves OAuth callback binding issue in Ubuntu containers. Merged. |
| 9 | **[#20765](https://github.com/anthropics/claude-code/pull/20765)** — PDF Guard plugin | Prevents "PDF too large" infinite loop bug. Merged. |
| 10 | **[#42265](https://github.com/anthropics/claude-code/pull/42265)** — Fix deprecated plugin install docs | Updates npm references to native install commands, fixes stale links. |

---

## Feature Request Trends

1. **Usage visibility & quota management** — Multiple requests (#9617, #29539) for real-time usage dashboards, 5-hour window visibility, and date-range filtering in `/insights`
2. **Headless/CI authentication** — Strong demand for device-code flow (#22992) and better non-interactive login
3. **Session persistence** — Requests for path-independent sessions, hot-reload of environment variables (#42251), and protection against update-related data loss
4. **UI configurability** — Adjustable conversation history display length (#42204), effort setting persistence (#42254, #42262)

---

## Developer Pain Points

1. **v2.1.89 regressions** — Terminal display issues, scrollback destruction, and broken slash commands are blocking upgrades for many users
2. **Opaque rate limiting** — Max/Pro users experiencing sudden quota exhaustion without visibility into consumption (#38335, #41590, #41886)
3. **Data loss on updates** — Multiple reports of session history, scheduled tasks, and config files being deleted during minor version updates
4. **Token waste from unhandled errors** — Oversized images being re-sent indefinitely (#42256) indicates missing error recovery in tool execution

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-04-02

## 1. Today's Highlights
The Codex team is aggressively refactoring the core architecture, with multiple PRs merged today extracting tool specifications and MCP runtime logic into dedicated crates (`codex-tools`, `codex-mcp`) to improve modularity. A new alpha release for the Rust binding (**v0.119.0-alpha.2**) is now available. On the community front, significant friction continues regarding **token consumption rates** and **performance regressions** in the VS Code extension, while demand for **macOS Intel support** and **advanced remote control features** remains high.

## 2. Releases
*   **rust-v0.119.0-alpha.2**
    *   The latest alpha release for the Rust binding is now available.
    *   [View Release](https://github.com/openai/codex/releases/tag/rust-v0.119.0-alpha.2)

## 3. Hot Issues

1.  **[Bug] Excessive Token Consumption (#14593)**
    *   **Why it matters:** This is the most active issue today (+369 comments). Users report that the extension is "burning tokens" at an unusually high rate, significantly impacting usage costs.
    *   [Issue #14593](https://github.com/openai/codex/issues/14593)

2.  **[Enhancement] macOS Intel (x86_64) Support (#10410)**
    *   **Why it matters:** With 154 comments and 226 👍, this remains a top feature request. Users on Intel Macs are still waiting for a compatible build of the Codex Desktop App.
    *   [Issue #10410](https://github.com/openai/codex/issues/10410)

3.  **[Enhancement] Codex Remote Control (#9224)**
    *   **Why it matters:** Users want the ability to control the local Codex CLI from the mobile ChatGPT app. This workflow would allow developers to initiate tasks remotely.
    *   [Issue #9224](https://github.com/openai/codex/issues/9224)

4.  **[Bug] VS Code "Code Helper" High CPU Usage (#15764)**
    *   **Why it matters:** A regression in recent VS Code extension versions (post-26.313) is causing the renderer process to spike to >100% CPU when applying patches, severely impacting IDE performance.
    *   [Issue #15764](https://github.com/openai/codex/issues/15764)

5.  **[Enhancement] LSP Integration for CLI (#8745)**
    *   **Why it matters:** Highly requested (+222 👍). Users want the CLI to auto-detect and install Language Servers to improve code awareness and diagnostic accuracy without relying on an IDE.
    *   [Issue #8745](https://github.com/openai/codex/issues/8745)

6.  **[Bug] Windows Sandbox `apply_patch` Failures (#15277)**
    *   **Why it matters:** A critical bug prevents `apply_patch` from working correctly on Windows after the first write in a sandbox-owned directory, hindering the agentic coding workflow on Windows.
    *   [Issue #15277](https://github.com/openai/codex/issues/15277)

7.  **[Enhancement] IDE-Integrated Diff Approval (#2998)**
    *   **Why it matters:** Users want the CLI's robust diff/approval flow (red/green diffs) available directly inside the VS Code extension UI, rather than confined to the terminal.
    *   [Issue #2998](https://github.com/openai/codex/issues/2998)

8.  **[Bug] CLI Window Resizing Truncates Output (#5576)**
    *   **Why it matters:** A persistent UI bug where the TUI output remains truncated after resizing the terminal window back to full size, forcing users to restart the session.
    *   [Issue #5576](https://github.com/openai/codex/issues/5576)

9.  **[Bug] High Memory Usage in Desktop App (#14666)**
    *   **Why it matters:** Reports that the Desktop App is leaking memory and consuming excessive resources ("behaving like a crackhead"), affecting system stability.
    *   [Issue #14666](https://github.com/openai/codex/issues/14666)

10. **[Enhancement] Voice Transcription for TUI (#16404)**
    *   **Why it matters:** A recent update removed voice transcription from the CLI. Users are requesting its restoration or documentation of a workaround, as the Desktop App dictation is not a viable replacement for terminal-first workflows.
    *   [Issue #16404](https://github.com/openai/codex/issues/16404)

## 4. Key PR Progress

1.  **Extract MCP into `codex-mcp` crate (#15919)**
    *   A major architectural refactor moving MCP (Model Context Protocol) runtime/server code out of `codex-core` into a dedicated `codex-mcp` crate to reduce coupling.
    *   [PR #15919](https://github.com/openai/codex/pull/15919)

2.  **Extract Tool Config/Spec into `codex-tools` (#16379, #16471, #16477)**
    *   The team is flattening the `codex-core` crate by moving static tool definitions, specs, and discovery helpers into `codex-tools`. This improves maintainability and separates runtime logic from metadata.
    *   [PR #16379](https://github.com/openai/codex/pull/16379) | [PR #16471](https://github.com/openai/codex/pull/16471)

3.  **Add Realtime WebRTC External Audio Bridge (#16396)**
    *   **Closed/Merged.** Introduces a shared WebRTC transport to bridge PCM input, improving audio handling for realtime features.
    *   [PR #16396](https://github.com/openai/codex/pull/16396)

4.  **Fix TUI Review Turn Steering Race (#16468)**
    *   **Closed/Merged.** Fixes a race condition where the TUI failed to update the thread event store immediately, causing input errors during review turns.
    *   [PR #16468](https://github.com/openai/codex/pull/16468)

5.  **Subagent Analytics (#15915)**
    *   Introduces custom telemetry events for subagent threads, allowing better monitoring of agentic behaviors and performance.
    *   [PR #15915](https://github.com/openai/codex/pull/15915)

6.  **Permission System Migration (#15914)**
    *   Begins migrating runtime state from the legacy `SandboxPolicy` enum to a more granular `PermissionProfile` system, allowing better control over filesystem and network permissions.
    *   [PR #15914](https://github.com/openai/codex/pull/15914)

7.  **Fix Windows Bazel Rust Test Coverage (#16460)**
    *   Addresses build system issues on Windows by patching `rules_rust` to ensure MSVC linking works correctly for test targets.
    *   [PR #16460](https://github.com/openai/codex/pull/16460)

8.  **Remove Workspace Crate Features (#16469, #16473)**
    *   **Closed/Merged.** Cleanup effort to remove workspace crate features (like `disable-default-metrics-exporter`) that interfered with Bazel build consistency.
    *   [PR #16469](https://github.com/openai/codex/pull/16469)

9.  **Login: Handle Auth Refresh Interval (#16480)**
    *   Improves the provider auth token flow by treating `refresh_interval_ms=0` as "never auto-refresh," fixing issues with command-backed bearer auth.
    *   [PR #16480](https://github.com/openai/codex/pull/16480)

10. **Strongly Typed Guardian Assessment (#16448)**
    *   Refactors the `GuardianAssessmentEvent` action field from a JSON blob to a strict sum type, improving type safety and code clarity.
    *   [PR #16448](https://github.com/openai/codex/pull/16448)

## 5. Feature Request Trends
*   **Deeper IDE Integration:** Users want the powerful features of the CLI (specifically the diff approval flow) available natively in the VS Code UI.
*   **LSP Support in CLI:** There is strong demand for the CLI to be "smart" about code independently of an IDE, requesting built-in LSP support for better context and diagnostics.
*   **Remote & Mobile Workflow:** Developers want to treat their local Codex instance as a remote agent accessible via mobile devices, blurring the line between local CLI and cloud agent.
*   **Platform Parity:** Significant demand remains for supporting legacy hardware (macOS Intel) and fixing platform-specific bugs on Windows and Linux (AppArmor).

## 6. Developer Pain Points
*   **Resource & Performance Regressions:** The latest VS Code extensions are causing high CPU load (>100%) and memory leaks, making the tool difficult to use for extended periods.
*   **Token Drain:** Users are frustrated by rapid token consumption, fearing that the tool is inefficient or looping silently in the background.
*   **Platform Instability:** Linux users are encountering sandbox failures with AppArmor, and Windows users face persistent pathing and patching issues.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-04-02
**Data Source:** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. Today's Highlights
The project released **v0.36.0** and cut the first preview for **v0.37.0**, signaling significant progress in subagent architecture and testing infrastructure. A critical discussion has emerged regarding **OAuth token handling** and quota management, with community members actively debugging "HTTP 429" errors through custom workarounds. Additionally, the team focused heavily on UI stability and performance, submitting multiple PRs to address scrolling issues, memory management, and I/O bottlenecks.

## 2. Releases

### **v0.37.0-preview.0**
*   **Centralized Test Agents:** Refactored test agents into `test-utils` for better reusability ([PR #23616](https://github.com/google-gemini/gemini-cli/pull/23616)).
*   **Config Revert:** Reverted the change that disabled agents by default ([PR #23672](https://github.com/google-gemini/gemini-cli/pull/23672)).

### **v0.36.0 (Stable)**
*   **Multi-Registry Architecture:** Introduced multi-registry support and tool filtering specifically for subagents ([PR #22712](https://github.com/google-gemini/gemini-cli/pull/22712)).

## 3. Hot Issues

1.  **[OPEN] Persistent HTTP 429 / Rate Limit Errors** [#24384](https://github.com/google-gemini/gemini-cli/issues/24384)
    *   **Why it matters:** Users are hitting constant quota errors even with valid sessions.
    *   **Reaction:** The community is sharing a `bash` workaround alias that forces token re-authentication by modifying `oauth_creds.json`, indicating a deep frustration with current session resilience.

2.  **[OPEN] False "Rate Limit Exceeded" on Paid Tiers** [#24396](https://github.com/google-gemini/gemini-cli/issues/24396)
    *   **Why it matters:** Paid "AI Pro" users are incorrectly flagged for quota limits.
    *   **Reaction:** Users report that the CLI relies on the $10/mo developer credit rather than the Pro subscription, causing confusion about actual entitlements.

3.  **[OPEN] CLI Hangs Infinitely on Restricted Accounts** [#24371](https://github.com/google-gemini/gemini-cli/issues/24371)
    *   **Why it matters:** A P1 critical bug where the TUI enters an infinite loading loop instead of throwing a 403/Auth error, forcing users to kill the process.

4.  **[OPEN] AST-Aware File Reads Investigation** [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
    *   **Why it matters:** An Epic exploring Abstract Syntax Tree (AST) tools to reduce token noise and improve code navigation precision for the agent.

5.  **[OPEN] Unresponsive Input After `/copy` Command** [#24098](https://github.com/google-gemini/gemini-cli/issues/24098)
    *   **Why it matters:** UX bug where the input field freezes after copying text, requiring a restart of the input flow.

6.  **[OPEN] Subagent Awareness of Approval Modes** [#23582](https://github.com/google-gemini/gemini-cli/issues/23582)
    *   **Why it matters:** Subagents currently ignore "Plan Mode" or "Auto-Edit Mode," potentially conflicting with user constraints.

7.  **[OPEN] UI Extraneous Empty Lines** [#24434](https://github.com/google-gemini/gemini-cli/issues/24434)
    *   **Why it matters:** P1 priority fix for cluttered history output caused by unintended margin logic.

8.  **[OPEN] Memory Routing: Global vs. Project** [#22819](https://github.com/google-gemini/gemini-cli/issues/22819)
    *   **Why it matters:** A request to separate user preferences (Global) from codebase context (Project) to improve context relevance.

9.  **[OPEN] Subagent Reports False Success on Max Turns** [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
    *   **Why it matters:** Agents claim "Goal Success" even when interrupted by `MAX_TURNS`, hiding incomplete analysis from the user.

10. **[OPEN] CLI 400 Error with >128 Tools** [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
    *   **Why it matters:** The CLI crashes when tool scope exceeds limits, highlighting a need for smarter tool filtering.

## 4. Key PR Progress

1.  **[OPEN] feat(cli): ignoreLocalDotEnv setting** [#24473](https://github.com/google-gemini/gemini-cli/pull/24473)
    *   Adds `advanced.ignoreLocalDotEnv` to isolate the CLI from project-specific environment variables, enhancing security.

2.  **[OPEN] perf(core): Lazy Stat & Parallel I/O** [#24461](https://github.com/google-gemini/gemini-cli/pull/24461)
    *   Major performance optimization for `GlobTool` and `ReadManyFiles` using lazy stats and platform-aware caching.

3.  **[OPEN] fix(ui): Resolve Unwanted Vertical Spacing** [#24449](https://github.com/google-gemini/gemini-cli/pull/24449)
    *   Refactors `ToolGroupMessage` to remove double-spacing glitches in the history view (P1).

4.  **[OPEN] feat(cli): Default Loading Phrases to 'off'** [#24342](https://github.com/google-gemini/gemini-cli/pull/24342)
    *   Changes default UI behavior to hide "tips" during loading for a cleaner interface.

5.  **[OPEN] feat(core): Plan Versioning and Diffing** [#24377](https://github.com/google-gemini/gemini-cli/pull/24377)
    *   Introduces versioned backups of plans (e.g., `plan.v1.md`) and color-coded diffs when users reject a plan.

6.  **[OPEN] fix(cli): Cloud Shell Vertex AI Override** [#24455](https://github.com/google-gemini/gemini-cli/pull/24455)
    *   Fixes a bug where `GOOGLE_CLOUD_PROJECT` was incorrectly overridden in Cloud Shell, breaking Vertex AI auth.

7.  **[OPEN] feat(cli): Auto Configure Memory Heap** [#24474](https://github.com/google-gemini/gemini-cli/pull/24474)
    *   Proposes auto-configuring the max heap size to eliminate common Out of Memory (OOM) crashes.

8.  **[OPEN] feat(core): Agent Protocol UI Types** [#24275](https://github.com/google-gemini/gemini-cli/pull/24275)
    *   Adds `_meta.legacyState` typing support to facilitate better rendering of complex agent protocols.

9.  **[OPEN] feat(core): Background Memory Service** [#24272](https://github.com/google-gemini/gemini-cli/issues/24272) *(Tracking Issue)*
    *   Proposes a background service to scan past sessions and extract reusable skills automatically.

10. **[OPEN] fix(ui): Leverage Ink TerminalBuffer** [#24468](https://github.com/google-gemini/gemini-cli/pull/24468)
    *   Refactors the `VirtualizedList` to support static rendering and fixes stale scroll references.

## 5. Feature Request Trends
*   **Persistent & Context-Aware Memory:** Strong demand for a memory system that distinguishes between global user preferences and project-specific facts, alongside background extraction of "skills" from history.
*   **Enhanced Code Intelligence:** Users and maintainers are pushing for AST-aware tools to allow the agent to navigate codebases via logic structure rather than just text search.
*   **Robust Plan Management:** Requests for version control on generated plans, including diffs and backups, rather than simple overwrites.

## 6. Developer Pain Points
*   **Auth & Quota Instability:** The most significant friction point is the "HTTP 429" and OAuth token handling, where standard flows fail, forcing users to manually hack credential files.
*   **UI Latency & Rendering:** Developers report frustrating scroll behavior (flashing, jumping) and unresponsive inputs during long chats or specific commands like `/copy`.
*   **Subagent Opaqueness:** Difficulty debugging subagents that report "Success" when they actually failed or timed out, obscuring the root cause of errors.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-04-02

## 1. Today's Highlights
The Copilot CLI team is actively iterating on configuration management and authentication flows, releasing patches (v1.0.15 to v1.0.16) that refine MCP server handling and deprecate legacy settings. The community is currently focused on model availability parity across clients and friction regarding the "alt-screen" UI mode, which many users find hinders terminal workflow efficiency.

## 2. Releases
### **v1.0.16-0**
*   **Fixed:** MCP servers now load correctly after login, user switch, and `/mcp reload`. The BYOK Anthropic provider now respects `maxOutputTokens` limits.
*   **Removed:** The deprecated `marketplaces` repository setting has been removed in favor of `extraKnownMarketplaces`.

### **v1.0.15 & v1.0.15-x Series**
*   **Model Updates:** Removed support for legacy `gpt-5.1-codex` variants.
*   **MCP Config:** Introduced RPCs for persistent MCP server configuration (`list`, `add`, `update`, `remove`).
*   **Auth:** Added Device Code Flow (RFC 8628) as a fallback for OAuth in headless/CI environments.
*   **UI:** The Copilot mascot now blinks; user switcher lists accounts alphabetically.

## 3. Hot Issues
1.  **[OPEN] Org-Enabled Models Missing in CLI (#1703)**
    Users report that models enabled at the organization level (e.g., Gemini 3.1 Pro) appear in VS Code but are missing from the CLI. This hinders enterprise adoption where specific model standardization is required.
2.  **[OPEN] Usability Regression with Alt-Screen (#2334)**
    A high-engagement issue where users argue the "alt-screen" mode removes essential terminal features like scrollback history and text finding, significantly disrupting established workflows.
3.  **[CLOSED] Custom Slash Commands from `.github/prompts` (#618)**
    A highly requested feature (93 👍) to support custom slash commands via a local directory, similar to VS Code and competitor tools. While recently closed, the high interest suggests it is a priority for the user base.
4.  **[OPEN] Transient API Errors & Rate Limits (#2101)**
    Users are experiencing "transient API errors" that cascade into rate limits, blocking usage. This stability issue is a major pain point for active users.
5.  **[OPEN] Sandbox Mode for File Access (#892)**
    A request for a "sandbox" capability to restrict the CLI's file system access to a specific working directory, critical for security-conscious environments and CI pipelines.
6.  **[OPEN] Shift+Enter Keybinding Conflict (#1481)**
    Users are frustrated that `SHIFT + ENTER` executes prompts instead of creating a line break (the standard in most chat interfaces), forcing a workflow adjustment.
7.  **[OPEN] Fine-Grained Token Permission Visibility (#223)**
    The "Copilot Requests" permission is missing for org-owned fine-grained tokens, preventing proper automation setup in corporate environments.
8.  **[OPEN] Tool Whitelist for Interactive Mode (#1973)**
    Developers want a middle ground between approving every tool call and `/allow-all`, specifically requesting a whitelist for safe, read-only operations (grep, cat, git log).
9.  **[OPEN] CRLF Line Ending Corruption (#1148)**
    A cross-platform bug where the CLI forces CRLF line endings on files that originally used LF, causing git diff noise and potential build issues.
10. **[OPEN] Model Entitlement Mismatch (#2393)**
    Users with valid subscriptions see Claude models locked behind an "Upgrade" prompt in the CLI (`/model`) despite having access via the web interface.

## 4. Key PR Progress
*No Pull Requests were updated in the last 24 hours.*

## 5. Feature Request Trends
*   **MCP Parity:** Strong demand for full MCP support, specifically **Resources and Prompts** (#1518) in addition to tools, and robust configuration management via CLI.
*   **Customization & Extensibility:** Users want deeper customization, including **custom themes** (#1504) and **prompt libraries** (`.github/prompts`).
*   **Safety & Control:** Increased requests for granular control over agent behavior, such as **tool whitelists** (#1973) and **sandbox modes** (#892).
*   **Terminal UI (TUI) Polish:** Significant feedback on the TUI experience, with users pushing for the return of standard terminal scrollback (`no-alt-screen`) and standard keybinding adherence.

## 6. Developer Pain Points
*   **Model Availability Confusion:** A recurring frustration is the discrepancy between models available in VS Code/Web vs. the CLI, leading to confusion regarding entitlements and organizational policies.
*   **Headless & CI Friction:** While Device Code Flow was added, issues remain regarding token validation formats (#2431) and session hooks not firing (#2415), complicating automation efforts.
*   **UI/UX Disruption:** The "alt-screen" implementation is a major point of friction, breaking native terminal features like scrolling and searching history.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest - 2026-04-02

## 1. Today's Highlights
Version **1.29.0** has been released, marking a significant stability milestone with critical fixes for Windows (CRLF line endings, PowerShell paths) and proxy support (SOCKS scheme). The community is actively engaging with architectural discussions, highlighted by a ambitious proposal to rewrite the CLI from Python to **Bun + TypeScript + React Ink** to resolve persistent UI/UX issues. Additionally, the backlog of high-quality enhancements—such as hierarchical `AGENTS.md` loading and the new `/title` command—has been cleared, signaling a shift toward refining the agent's interaction model.

## 2. Releases

### **v1.29.0**
This version focuses heavily on platform compatibility and fixing long-standing UX grievances.
*   **Windows Fixes:** Resolved a critical bug where `writetext` converted LF to CRLF, corrupting source files. Fixed the "PowerShell not found" error by resolving the full shell path.
*   **Proxy & Network:** Added support for the `socks://` proxy scheme (normalized to `socks5://`) and added `Cache-Control` headers to the web server to prevent white-screen errors after upgrades.
*   **Agent Capabilities:** Implemented **hierarchical `AGENTS.md` loading**, allowing project-level instructions to cascade down to sub-directories.
*   **UX:** Added the `/title` (alias `/rename`) command for manual session management and fixed a bug where auto-title would overwrite manual renames.

## 3. Hot Issues

1.  **[OPEN] Architectural Rewrite Proposal ([#1707](https://github.com/MoonshotAI/kimi-cli/pull/1707))**
    *   *Context:* While technically a PR, it addresses recurring UX complaints found in issues like **#1682** (double Enter to execute) and **#1681** (rendering glitches).
    *   *Details:* User `Yuandiaodiaodiao` proposes a complete rewrite using **Bun + TypeScript + React Ink**. The argument is that Python is a "failure" for this TUI use case, causing complex async state management issues and rendering bugs that are trivial in React-based Ink frameworks.

2.  **[OPEN] UX: Double Enter Requirement ([#1682](https://github.com/MoonshotAI/kimi-cli/issues/1682))**
    *   *Why it matters:* A high-friction interaction bug. Users expect autocomplete (e.g., `/cl` -> `/clear`) to execute immediately upon hitting Enter, but currently, it only completes the text, requiring a second keystroke.
    *   *Reaction:* Users compare this unfavorably to competitors like Claude Code, citing it as a major flow-breaker.

3.  **[OPEN] UI Rendering Glitches ([#1681](https://github.com/MoonshotAI/kimi-cli/issues/1681))**
    *   *Why it matters:* Users report abnormal character spacing (e.g., `a dd-dir`) and disappearing slashes.
    *   *Reaction:* This feeds into the narrative that the current Python TUI library stack is struggling with cross-terminal compatibility.

4.  **[OPEN] Windows Shell Tool Broken ([#1702](https://github.com/MoonshotAI/kimi-cli/issues/1702))**
    *   *Why it matters:* The shell tool failed completely on Windows installed via `uv`, looking for `powershell.exe` in the wrong path.
    *   *Status:* A fix is already proposed in PR **#1703**, addressing the `WinError 2`.

5.  **[OPEN] Dynamic Loading of MCP Servers ([#1708](https://github.com/MoonshotAI/kimi-cli/issues/1708))**
    *   *Why it matters:* Currently, adding/removing MCP servers requires a CLI restart.
    *   *Request:* Users want "Hot-swapping" capabilities to load/unload skills and servers during active sessions for a more fluid development experience.

6.  **[OPEN] Incremental Session Memory ([#1691](https://github.com/MoonshotAI/kimi-cli/issues/1691))**
    *   *Why it matters:* The current `/compact` command is expensive and sometimes fails on long contexts.
    *   *Proposal:* Suggests "Incremental Session Memory" to achieve zero-cost context compression rather than relying on massive, monolithic summarization calls.

7.  **[CLOSED] AGENTS.md Priority ([#1596](https://github.com/MoonshotAI/kimi-cli/issues/1596))**
    *   *Context:* Users reported agents ignoring `AGENTS.md` instructions (e.g., "only reply 'I don't know'") and proceeding to write code.
    *   *Resolution:* Addressed in v1.29.0 via PR **#1700**, which implements hierarchical loading to better enforce project constraints.

8.  **[OPEN] Skill Discovery Limitations ([#1705](https://github.com/MoonshotAI/kimi-cli/issues/1705))**
    *   *Why it matters:* The current discovery mechanism is too rigid, looking only in specific local/remote paths.
    *   *Request:* Enhancement to discover skills from installed plugins (e.g., `superpowers@claude-plugins-official`) rather than just hardcoded marketplaces.

9.  **[CLOSED] Feature Request: /title Command ([#1536](https://github.com/MoonshotAI/kimi-cli/issues/1536))**
    *   *Context:* Auto-generated titles were often meaningless for complex sessions.
    *   *Resolution:* Implemented in v1.29.0 (PR **#1685**), allowing users to manually rename sessions for better organization.

10. **[OPEN] Proxy Scheme Support ([#1674](https://github.com/MoonshotAI/kimi-cli/issues/1674))**
    *   *Context:* CLI crashed with "Unknown scheme" when using `socks://` (common in V2RayN).
    *   *Resolution:* Fixed in v1.29.0 (PR **#1694**) by normalizing `socks://` to `socks5://`.

## 4. Key PR Progress

1.  **[OPEN] Refactor: Python to Bun + TypeScript ([#1707](https://github.com/MoonshotAI/kimi-cli/pull/1707))**
    *   A massive community contribution attempting a full rewrite. It removes the Web UI to focus purely on a native terminal experience using React Ink. This is currently the most discussed PR.

2.  **[CLOSED] Hierarchical AGENTS.md Loading ([#1700](https://github.com/MoonshotAI/kimi-cli/pull/1700))**
    *   Merged into v1.29.0. Enables cascading configuration from git root to current directory, ensuring agent instructions are context-aware at different project depths.

3.  **[CLOSED] Add /title Command & Unified State ([#1685](https://github.com/MoonshotAI/kimi-cli/pull/1685))**
    *   Merged. Adds manual rename capabilities via `/title` or `/rename` and consolidates session metadata into a single `state.json`, cleaning up the data architecture.

4.  **[OPEN] Fix: Resolve Full PowerShell Path ([#1703](https://github.com/MoonshotAI/kimi-cli/pull/1703))**
    *   Fixes the broken shell tool on Windows by using `shutil.which` to find the absolute path to PowerShell, rather than assuming it is in the global PATH.

5.  **[CLOSED] Fix: LF to CRLF Conversion on Windows ([#1693](https://github.com/MoonshotAI/kimi-cli/pull/1693))**
    *   Merged. A critical fix for Windows users where the tool was silently changing line endings. It forces binary write mode to preserve original line endings.

6.  **[CLOSED] Fix: Normalize SOCKS Proxy ([#1694](https://github.com/MoonshotAI/kimi-cli/pull/1694))**
    *   Merged. Improves network compatibility by automatically rewriting `socks://` env vars to `socks5://` for `httpx/aiohttp` compatibility.

7.  **[OPEN] Fix: Diff Inline Highlight Offsets ([#1709](https://github.com/MoonshotAI/kimi-cli/pull/1709))**
    *   Addresses a visual bug where highlights in diff views were misaligned when tabs were expanded to spaces.

8.  **[CLOSED] Fix: Web Cache-Control Headers ([#1696](https://github.com/MoonshotAI/kimi-cli/pull/1696))**
    *   Merged. Fixes the "White Screen of Death" on upgrade by preventing browsers from caching `index.html`, which often referenced deleted hashed asset files.

9.  **[CLOSED] Feat: Paste Threshold Env Vars ([#1698](https://github.com/MoonshotAI/kimi-cli/pull/1698))**
    *   Merged. Adds `KIMI_CLI_PASTE_CHAR_THRESHOLD` and `KIMI_CLI_PASTE_LINE_THRESHOLD` to help terminals that struggle with large text pastes (e.g., XShell over SSH).

10. **[OPEN] Fix: Guard Trafilatura Import ([#1597](https://github.com/MoonshotAI/kimi-cli/pull/1597))**
    *   Prevents a cascading failure on Python 3.13 where `charset-normalizer` binaries are incompatible. It defers the import to prevent startup crash.

## 5. Feature Request Trends

*   **Architecture Modernization:** A strong push from the community to move away from Python for CLI UI/UX, favoring Node.js/Bun ecosystems (React Ink) for better rendering and event handling.
*   **Dynamic Agent Capabilities:** Requests are moving from static configuration to dynamic management—users want to load/unload tools and MCP servers on the fly without restarting the session.
*   **Context Management Efficiency:** As context windows grow, so does the cost of managing them. There is a trend toward "incremental" or "zero-cost" memory compression techniques to replace heavy summarization calls.

## 6. Developer Pain Points

*   **Windows Compatibility:** Developers on Windows face a "second-class citizen" experience with broken Shell tools, line ending corruption (CRLF), and path resolution issues.
*   **TUI Responsiveness:** The Terminal UI is perceived as laggy or buggy (rendering artifacts, input handling delays), significantly impacting the perceived speed of the agent.
*   **Context/Agent Drift:** Users are frustrated when agents ignore project-level instructions (`AGENTS.md`), though the v1.29.0 hierarchical loading aims to alleviate this.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-02

## Today's Highlights

OpenCode v1.3.12 introduces **prompt caching for Google Vertex Anthropic** with cache token tracking, alongside critical fixes for Azure provider options and TUI plugin slot mounting. The community is actively discussing **context management strategies** with a proposed "sliding window" approach as an alternative to current compaction methods. Meanwhile, **GitHub Copilot integration with Opus 4.6** remains problematic due to assistant message prefill errors, affecting a significant number of users.

---

## Releases

### [v1.3.13](https://github.com/anomalyco/opencode/releases/tag/v1.3.13)
- Bump opentui version

### [v1.3.12](https://github.com/anomalyco/opencode/releases/tag/v1.3.12)
**Core:**
- ✨ Enabled **prompt caching and cache token tracking** for Google Vertex Anthropic provider
- 🐛 Fixed Azure provider options forwarding correctly after AI SDK v6 migration

**TUI:**
- 🐛 Fixed plugin `replace` slots mounting content more than once

*Thank you to 2 community contributors for this release.*

---

## Hot Issues

| # | Title | Why It Matters |
|---|-------|----------------|
| **[#13768](https://github.com/anomalyco/opencode/issues/13768)** | [bug] Model does not support assistant message prefill / Github Copilot with Opus 4.6 | **High impact** — 50 comments, 18 👍. Users working with Opus 4.6 via Copilot experience frequent session interruptions. Critical for enterprise Copilot adopters. |
| **[#4659](https://github.com/anomalyco/opencode/issues/4659)** | [FEATURE] Sliding window context management | **Major architecture discussion** — 25 comments. Proposes sliding window approach vs. current "amputation and recapitulation" compaction strategy for long-running sessions. |
| **[#15714](https://github.com/anomalyco/opencode/issues/15714)** | [zen] Big pickle usage exceeded | **Billing confusion** — Users surprised by sudden free tier limits on BigPickle from OpenCode Zen without prior notification. |
| **[#8003](https://github.com/anomalyco/opencode/issues/8003)** | [FEATURE] VS Code Integration for Diff Preview | **Top requested** — 41 👍. Current TUI diff preview is painful for large files; users want native VS Code integration. |
| **[#17047](https://github.com/anomalyco/opencode/issues/17047)** | Tool.define() unbounded memory leak | **Critical bug** — 18 👍. `Tool.define()` causes `RangeError: Maximum call stack size exceeded` in long-running server mode due to accumulating wrapper closures. |
| **[#19952](https://github.com/anomalyco/opencode/issues/19952)** | Critical Resource Exhaustion in TypeScript LSP | **System stability** — TypeScript LSP opened 190,000+ file descriptors by indexing entire `node_modules`, ignoring `tsconfig.json` exclusions. |
| **[#7006](https://github.com/anomalyco/opencode/issues/7006)** | permission.ask plugin hook not triggered | **Plugin ecosystem** — New Permissions system's hook is defined but never fired, blocking custom auto-approval workflows. |
| **[#20544](https://github.com/anomalyco/opencode/issues/20544)** | Unable to use Anthropic models with Copilot subscription | **Provider integration** — Recent regression blocking Anthropic models through Copilot provider after device authorization. |
| **[#17376](https://github.com/anomalyco/opencode/issues/17376)** | [Web] Infinite Authentication Loop | **Web Terminal unusable** — Users stuck in continuous login prompts when accessing Terminal in OpenCode Web v1.2.25. |
| **[#13819](https://github.com/anomalyco/opencode/issues/13819)** | Discussion: Deno runtime alternative to Bun | **Architecture exploration** — With Deno 2.x's full npm compatibility, community discussing potential runtime diversification. |

---

## Key PR Progress

| PR | Title | Status | Description |
|----|-------|--------|-------------|
| **[#19953](https://github.com/anomalyco/opencode/pull/19953)** | fix(lsp): MEMORY LEAK - TypeScript server uses native project config | OPEN | Fixes 190k+ file descriptor leak by properly specifying local `tsserver` path and respecting `tsconfig.json` exclusions. |
| **[#18335](https://github.com/anomalyco/opencode/pull/18335)** | refactor(server): replace Bun serve with Hono node adapters | BETA | Decouples HTTP server from Bun runtime using `@hono/node-server`, enabling more flexible deployment options. |
| **[#18308](https://github.com/anomalyco/opencode/pull/18308)** | refactor: replace BunProc with Npm module using @npmcli/arborist | CLOSED | Replaced Bun-native package management with deterministic npm-based installs via arborist. |
| **[#15926](https://github.com/anomalyco/opencode/pull/15926)** | feat: add MCP Apps support for rich iframe UIs | OPEN | Enables MCP servers to render interactive UIs in sandboxed iframes — no feature flag required. |
| **[#15178](https://github.com/anomalyco/opencode/pull/15178)** | feat(cli): add -a global mode for session list | OPEN | Adds `--all` flag to `opencode session list` for cross-project session visibility. |
| **[#20367](https://github.com/anomalyco/opencode/pull/20367)** | fix: normalize filepath in FileTime to prevent Windows path mismatch | CLOSED | Fixes Windows "must read first" false errors by normalizing paths consistently. |
| **[#20551](https://github.com/anomalyco/opencode/pull/20551)** | refactor(core): significantly speed up slow revert functionality | OPEN | Optimizes `Snapshot.revert` for large operations by batching instead of single-file handling. |
| **[#19955](https://github.com/anomalyco/opencode/pull/19955)** | feat(llm): integrate GitLab DWS tool approval with permission system | OPEN | Wires GitLab Duo Workflow Service approval checkpoints into OpenCode's permission system. |
| **[#17803](https://github.com/anomalyco/opencode/pull/17803)** | Remove CLI from electron app | BETA | Refactors desktop app to spawn server via `Server.listen` in Electron main process instead of bundled CLI. |
| **[#19386](https://github.com/anomalyco/opencode/pull/19386)** | fix(tui): sync terminal background to theme via OSC 11 | OPEN | Fixes pixel gutter artifacts by properly synchronizing terminal background with theme colors. |

---

## Feature Request Trends

1. **Context Management Evolution** — Strong push for "sliding window" context retention (#4659) vs. current summarization-based compaction. Users want to preserve inception context while sliding the window forward.

2. **IDE Integration** — Multiple requests for VS Code integration (#8003) for diff preview, recognizing TUI limitations for large file review.

3. **Session Export & Management** — Requests for markdown/JSON export (#9387) and global session listing (#14561) for better workflow continuity.

4. **TUI UX Enhancements** — Blender-style workspace tabs (#20535), persistent footer status displays (#18969), and better terminal resizing handling.

5. **Provider Expansion** — Community requesting more model support (GLM-5.1 #19965, Kimi models #20259) and better multi-provider authentication flows.

---

## Developer Pain Points

| Category | Issue | Impact |
|----------|-------|--------|
| **Memory/Stability** | Tool.define() leak (#17047), LSP file descriptor exhaustion (#19952) | System freezes, SSH session kills, production instability |
| **Windows Experience** | Path normalization (#20354), TUI resize crashes (#7943), PowerShell tool confusion (#20527) | Platform feels second-class |
| **Copilot/Anthropic Integration** | Prefill errors (#13768), model access failures (#20544) | Enterprise adoption blocked |
| **Plugin System** | Hooks not firing (#7006), subpath resolution (#20555) | Plugin developers blocked from extending functionality |
| **Billing Transparency** | Sudden BigPickle limits (#15714), cache hit issues (#15338) | Trust erosion with Zen service |

---

*Digest generated from 50 issues and 20 PRs updated in the last 24 hours.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-04-02

## 1. Today's Highlights
The community is buzzing with the **v0.14.0 release cycle**, seeing multiple preview builds (up to `preview.4`) which focus heavily on stabilizing path handling for extensions and proxy configurations. A significant portion of user discussion revolves around **model availability** (specifically requests for Qwen3.6) and the integration of features from competing leaked coding tools. Meanwhile, the development team is aggressively merging features for the upcoming stable release, including a new **Channels platform** for chat integrations and enhanced **MCP/ACP connection reliability**.

## 2. Releases
Several iterations were released in the last 24 hours, focusing on refinements for the v0.14.0 milestone:
*   **[v0.14.0-preview.4](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.0-preview.4)**
    *   **Fix:** Added `.qwen` path replacement in markdown files during extension installation.
    *   **Fix:** Normalized proxy URLs to support addresses lacking a protocol prefix (e.g., `http://`).
*   **[v0.14.0-preview.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.0-preview.3)**
*   **[v0.13.2-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.13.2-preview.0) & Nightly**
    *   Backported fixes for extension path handling.

## 3. Hot Issues
1.  **[OPEN] Project-level Insight Support** ([#2040](https://github.com/QwenLM/qwen-code/issues/2040))
    *   **Why:** The highest-commented issue. Users find the current "machine-level" Insight functionality limiting and need to view analytics/metrics per individual project.
2.  **[OPEN] Request to Take Over `iflow cli`** ([#2721](https://github.com/QwenLM/qwen-code/issues/2721))
    *   **Why:** With `iflow cli` shutting down, users are petitioning for Qwen Code to inherit its features, indicating a desire for specific workflow capabilities currently missing in Qwen.
3.  **[CLOSED] Incorporate features from leaked `claw-code`** ([#2803](https://github.com/QwenLM/qwen-code/issues/2803))
    *   **Why:** Reflects community reaction to recent industry "leaks." Users want Qwen to adopt the architecture or ideas from the leaked `instructkr/claw-code` repository.
4.  **[OPEN] Qwen3.6 Availability** ([#2759](https://github.com/QwenLM/qwen-code/issues/2759))
    *   **Why:** Users are frustrated that newer models (Qwen3.6) appear in third-party tools ("OpenCode") faster than in the official Qwen Code client.
5.  **[OPEN] CLI Configuration & Proxy Errors** ([#2736](https://github.com/QwenLM/qwen-code/issues/2736))
    *   **Why:** Reports of `Invalid URL` errors when running CLI commands, often linked to proxy settings, blocking users from starting the tool.
6.  **[OPEN] Path Recognition Anomalies** ([#2780](https://github.com/QwenLM/qwen-code/issues/2780))
    *   **Why:** Users copying paths directly from Windows explorer address bars encounter parsing errors (e.g., whitespace handling) in Qwen Code.
7.  **[OPEN] Web UI Freezing & Unresponsive Tasks** ([#2775](https://github.com/QwenLM/qwen-code/issues/2775))
    *   **Why:** Critical usability bug where long-running tasks cannot be canceled, freezing the browser session.
8.  **[OPEN] Missing Parameters in Tool Execution** ([#2783](https://github.com/QwenLM/qwen-code/issues/2783))
    *   **Why:** The model is frequently hallucinating tool calls (e.g., `WriteFile`, `shell`) without required parameters like `content` or `command`, breaking workflows.
9.  **[OPEN] Subagent LLM Customization** ([#1783](https://github.com/QwenLM/qwen-code/issues/1783))
    *   **Why:** Strong demand for sub-agents to use different (cheaper/faster) models than the primary agent.
10. **[OPEN] MCP Tool Permission Issues** ([#2782](https://github.com/QwenLM/qwen-code/issues/2782))
    *   **Why:** The SDK fails to request user approval for MCP tools, stalling execution silently.

## 4. Key PR Progress
1.  **[OPEN] feat(cli, webui): add follow-up suggestions feature** ([#2525](https://github.com/QwenLM/qwen-code/pull/2525))
    *   Adds "Next-Step Suggestions" (similar to Claude Code's NES) after task completion (e.g., suggesting "commit this").
2.  **[OPEN] feat: add multi-language support for /insight HTML report** ([#2805](https://github.com/QwenLM/qwen-code/pull/2805))
    *   Internationalizes the `/insight` command output, making the tool accessible to a global user base.
3.  **[OPEN] fix(vscode): inherit model selection for new chat tabs** ([#2802](https://github.com/QwenLM/qwen-code/pull/2802))
    *   Fixes a UX annoyance where opening a new chat tab would reset the model selection to default instead of keeping the user's choice.
4.  **[MERGED] feat(cron): add in-session loop scheduling with cron tools** ([#2731](https://github.com/QwenLM/qwen-code/pull/2731))
    *   Introduces session-scoped recurring jobs, allowing the AI to monitor long-running ops (like CI/CD) automatically.
5.  **[MERGED] feat(channels): add extensible Channels platform** ([#2628](https://github.com/QwenLM/qwen-code/pull/2628))
    *   A major v0.14.0 feature enabling Qwen Code integration with Telegram, WeChat, and DingTalk via a plugin system.
6.  **[MERGED] feat(extension): Add npm registry support** ([#2719](https://github.com/QwenLM/qwen-code/pull/2719))
    *   Allows teams to distribute Qwen Code extensions via private or public npm registries.
7.  **[OPEN] feat: improve ACP connection reliability** ([#2804](https://github.com/QwenLM/qwen-code/pull/2804))
    *   Attempts to address persistent ACP process crashes with spawn retry logic and auto-reconnection.
8.  **[MERGED] feat: add cross-provider model selection for subagents** ([#2698](https://github.com/QwenLM/qwen-code/pull/2698))
    *   Enables sub-agents to use a different provider/model than the main conversation (e.g., using a cheaper model for simple tasks).
9.  **[OPEN] feat(sdk): expose CLI pass-through options in QueryOptions** ([#2808](https://github.com/QwenLM/qwen-code/pull/2808))
    *   Enhances the SDK to allow hooks, extensions, and sandbox settings to be passed programmatically.
10. **[MERGED] fix(cli): enhance KeypressProvider with kitty sequence timeout** ([#2612](https://github.com/QwenLM/qwen-code/pull/2612))
    *   Fixes input issues (specifically IME) in VS Code integrated terminals using the Kitty protocol.

## 5. Feature Request Trends
*   **Model Parity & Selection:** Users are vocally demanding immediate support for the latest models (specifically **Qwen3.6**) and greater flexibility in assigning different models to sub-agents or "fast" tasks.
*   **Project-Scoped Context:** There is a strong trend toward isolation. Users want "Insight" and context to be scoped to specific projects rather than the global machine level.
*   **External Integrations:** Requests to integrate with or absorb features from other tools (like the defunct `iflow cli` or the leaked `claw-code`) suggest users are looking for a unified "super-tool" that combines the best UX from the ecosystem.
*   **Automation & Background Tasks:** Interest in "cron" or "loop" features indicates a shift toward using Qwen Code as a background agent for monitoring CI/CD and long-running processes.

## 6. Developer Pain Points
*   **ACP/Connection Stability:** A recurring theme in both issues and PRs is the fragility of the ACP (Agent Client Protocol) connection. Users frequently experience "frozen" sessions or orphan processes that require manual killing.
*   **Tool Hallucinations:** Developers are frustrated when the model attempts to use tools (WriteFile, Shell) but omits required parameters, forcing retries.
*   **Configuration Complexity:** Setting up proxies, LSP, and authentication (OAuth vs. Coding Plan) remains a hurdle, with several users reporting silent failures or "Invalid URL" crashes on startup.
*   **Platform Specifics (Windows/IDE):** Windows users specifically cite issues with Git Bash integration and path handling, while IDE users report issues with input method editors (IME) and orphaned child processes.

</details>