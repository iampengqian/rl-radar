# AI CLI Tools Community Digest 2026-03-17

> Generated: 2026-03-16 22:06 UTC | Tools covered: 7

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

# AI CLI Tools Ecosystem Cross-Tool Analysis Report
**Date: 2026-03-17**

---

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing rapid maturation with all major players now supporting agentic workflows, subagent architectures, and MCP (Model Context Protocol) integrations. Competitive pressure is driving rapid iteration, with GitHub Copilot CLI and Qwen Code releasing multiple stability patches while OpenCode and Gemini CLI push architectural refactoring efforts. A clear inflection point is emerging around enterprise readiness—authentication, air-gapped deployment, and cost control have become top community priorities across all platforms. The ecosystem shows signs of consolidation around common patterns (Plan/Execute modes, background agents, skills systems) while differentiating on model flexibility and platform-specific optimizations.

---

## 2. Activity Comparison

| Tool | Issues (24h Activity) | PRs (24h Activity) | Release Status | Community Engagement Trend |
|------|----------------------|--------------------| ---------------|---------------------------|
| **Claude Code** | 10+ active | 9 active | No release | High friction (auth, rate limits) |
| **OpenAI Codex** | 10 active | 10 active | v0.115.0 released | Elevated (token crisis) |
| **Gemini CLI** | 10 active | 10 active | v0.34.0-preview.4, v0.33.2 | Moderate (Plan Mode focus) |
| **GitHub Copilot CLI** | 10 active | 2 active | 3 patches (v1.0.6-0→2) | High (UI stability) |
| **Kimi Code CLI** | 6 active | 7 active | No release | Moderate (ecosystem expansion) |
| **OpenCode** | 10 active | 10 active | v1.2.27 released | High (billing/performance) |
| **Qwen Code** | 10 active | 10 active | v0.12.4, v0.12.5 | Elevated (Windows issues) |

---

## 3. Shared Feature Directions

| Feature Direction | Tools Involved | Specific Requirements |
|-------------------|----------------|----------------------|
| **Remote/Mobile Control** | Claude Code (#15922), OpenAI Codex (#9224), Gemini CLI (#18197), GitHub Copilot CLI | Native mobile companion apps or remote CLI control; background task execution |
| **Subagent Orchestration & Control** | Claude Code, OpenAI Codex (#14671, #14841), Gemini CLI (#22093, #22323), OpenCode (#8554), Qwen Code | Transparent subagent behavior, configurable spawning limits, cost controls per subagent |
| **Authentication & Enterprise SSO** | Claude Code (#34229, #29579), OpenAI Codex (#1056), OpenCode (#3936), GitHub Copilot CLI (#33) | OAuth for MCP servers, Azure Entra support, GitHub Enterprise SSO, air-gapped support |
| **Plan Mode Reliability** | Gemini CLI (#22266, #22507), GitHub Copilot CLI (#1663), Claude Code | Context preservation post-approval, strict plan-only execution without side effects |
| **Context Window & Memory Management** | Claude Code (#34685, #35085), OpenCode (#12338), Gemini CLI (#21792), Qwen Code (#1924) | JIT context loading, reliable large-context (1M tokens), session persistence, compression quality |
| **Cross-Platform Stability** | Claude Code (#24964, #11447), OpenAI Codex (#2020, #9115), Qwen Code (#2395, #2423), GitHub Copilot CLI (#239) | Windows encoding, light terminal themes, UI flickering, symlink handling |
| **Cost & Quota Transparency** | Claude Code (#29579, #18873), OpenAI Codex (#14593), OpenCode (#8030), Qwen Code (#2426) | Accurate usage tracking, model parameter respect, clear rate limit feedback |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach | Key Differentiator |
|------|---------------|-------------|-------------------|-------------------|
| **Claude Code** | Code review workflows, Git integration | Professional developers, enterprise teams | Hook-based plugin system, GitLab/GitHub parity | Strong `/code-review` and GPG commit support; ARM support pending |
| **OpenAI Codex** | Multi-modal precision, SDK ecosystem | Full-stack developers, ISVs | Python SDK, websocket-based app-server, native installers | `view_image` for visual tasks; MCP tool image materialization |
| **Gemini CLI** | Plan Mode, browser automation | DevOps, QA engineers | JIT context loading, singleton browser instances | Browser agent visual feedback; LSP query tool for semantic analysis |
| **GitHub Copilot CLI** | VS Code integration, model flexibility | GitHub ecosystem users | Dynamic tool discovery for Claude/Gemini | Tightest VS Code parity; org-level model management |
| **Kimi Code CLI** | Third-party agent backend | Kimi K2 model users, platform builders | OAuth flexibility, MCP resilience | Opencode agent support; Web UI with tunneling awareness |
| **OpenCode** | Self-hosted, air-gapped enterprise | Enterprise, regulated industries | Effect-based architecture, skill system | GitHub Enterprise focus; recursive LLM patterns |
| **Qwen Code** | Local model support, Windows-first | Windows developers, local-LLM users | LM Studio/Ollama native support | Bundled `/review` skill; UTF-8 Windows fixes |

---

## 5. Community Momentum & Maturity

### **Rapid Iterators (High Velocity)**
- **GitHub Copilot CLI**: 3 releases in 24 hours addressing memory leaks and HTTP/2 race conditions—sign of responsive but potentially unstable codebase
- **Qwen Code**: 2 releases with Windows-focused fixes; high PR throughput (10 active)
- **OpenCode**: Daily releases with major architectural refactoring (Effect pattern migration)

### **Stable Maturity**
- **OpenAI Codex**: Methodical release cadence (v0.115.0), focus on SDK/API surface area and security hardening
- **Gemini CLI**: Preview + stable dual-track releases; systematic approach to Plan Mode stabilization

### **Community Friction Indicators**
- **Claude Code**: No releases but 212+ comments on phone verification bug—suggests potential support bottleneck
- **OpenCode**: 188 comments on Copilot quota misclassification—billing trust issue
- **OpenAI Codex**: 42 👍 on VS Code token consumption crisis—enterprise blocker

### **Emerging Contenders**
- **Kimi Code CLI**: Lower volume but strategic Opencode integration signals platform play
- **Qwen Code**: Strong Windows focus fills gap left by Unix-first competitors

---

## 6. Trend Signals

### **Industry Trends from Community Feedback**

| Trend | Signal | Implication for Developers |
|-------|--------|---------------------------|
| **Agentic Reliability over Capability** | Subagent control issues across 5/7 tools; Plan Mode bugs in 3 tools | Prioritize deterministic behavior and visibility over feature breadth when selecting tools |
| **Cost Control is Enterprise-Grade Requirement** | Quota bleeding (OpenCode #8030), token waste (Codex #14593), broken model params (Claude #18873) | Implement usage monitoring; test subagent cost isolation before production deployment |
| **Air-Gapped/Self-Hosted Demand Rising** | OpenCode #2224, #8549; Kimi #1445; Qwen #2385 | Enterprises increasingly require offline-capable AI tooling—local model support is competitive advantage |
| **Session Continuity is Table Stakes** | Context degradation (Claude #34685), session loss (Gemini #21792), history bugs (Copilot #2053) | Long-running workflows require session persistence testing; JIT context loading is emerging best practice |
| **Platform Parity Expectations** | Model availability gaps (Copilot #1703), VS Code vs CLI feature discrepancies | Organizations expect consistent capabilities across IDE extensions and CLI—verify parity before commitment |
| **MCP Becoming Standard** | OAuth for MCP (Copilot #33), MCP image handling (Codex #14854), MCP resilience (Kimi #1450) | Model Context Protocol is winning the tool integration standard—prioritize MCP-compatible tooling |

### **Strategic Recommendations**

1. **For Enterprise Adoption**: OpenCode and Qwen Code lead on self-hosted/local model support; Claude Code and Codex lead on workflow integration depth
2. **For Cost-Sensitive Workloads**: Test subagent model parameter respect (Claude Code #18873, Codex #14671 are red flags); GitHub Copilot CLI's dynamic tool discovery may offer better cost control
3. **For Windows Developers**: Qwen Code is investing most heavily in Windows fixes; Codex and Claude Code have outstanding Windows-specific bugs
4. **For Multi-Agent Architectures**: Gemini CLI's tool isolation PR (#22708) and OpenCode's recursive LLM request (#8554) indicate emerging sophistication in subagent management

---

*Report generated from 7 AI CLI tool community digests dated 2026-03-17*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** github.com/anthropics/skills | **Snapshot Date:** 2026-03-17

---

## 1. Top Skills Ranking

Based on repository activity, creation date, and update recency, here are the community's most active Skill submissions:

| Rank | Skill | Author | Status | Description |
|------|-------|--------|--------|-------------|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | @PGTBoos | OPEN | Typographic quality control for AI-generated documents—prevents orphan word wrap, widow paragraphs, and numbering misalignment. |
| 2 | **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | @eovidiu | OPEN | Meta-skills for evaluating Claude Skills across 5 dimensions (structure, security, documentation, etc.). Longest-running active PR. |
| 3 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | @justinwetch | OPEN | Revised frontend-design skill with improved clarity, actionability, and internal coherence for UI/UX tasks. |
| 4 | **[masonry-generate-image-and-videos](https://github.com/anthropics/skills/pull/335)** | @junaid1460 | OPEN | CLI skill for AI-powered image (Imagen 3.0) and video (Veo 3.1) generation via Masonry AI. |
| 5 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | @varun29ankuS | OPEN | Persistent memory system for AI agents that maintains context across conversations. |
| 6 | **[ODT Skill](https://github.com/anthropics/skills/pull/486)** | @GitHubNewbie0 | OPEN | OpenDocument text creation, template filling, and ODT-to-HTML parsing (ISO/IEC 26300 standard). |
| 7 | **[Buildr - Telegram Bridge](https://github.com/anthropics/skills/pull/419)** | @hirodefi | OPEN | Bridge Claude Code sessions to Telegram for mobile control—message mirroring, task management, and remote session control. |
| 8 | **[Google Workspaces Suite](https://github.com/anthropics/skills/pull/299)** | @meticulo3366 | OPEN | 6 skills for email triage, drafting, calendar management, and task integration via GOG CLI. |

---

## 2. Community Demand Trends

Analysis of open Issues reveals these emerging demand directions:

| Trend | Description | Key Issue(s) |
|-------|-------------|--------------|
| **Security & Trust Boundaries** | Strong concern about community skills appearing under `anthropic/` namespace, creating impersonation risks. Users want clear provenance verification. | [#492](https://github.com/anthropics/skills/issues/492) |
| **Agent Governance & Safety** | Demand for skills teaching policy enforcement, threat detection, trust scoring, and audit trails for AI agent systems. | [#412](https://github.com/anthropics/skills/issues/412) |
| **MCP Integration** | Community wants Skills exposed as Model Context Protocol (MCP) tools for better API standardization and interoperability. | [#16](https://github.com/anthropics/skills/issues/16) |
| **Enterprise/SSO Compatibility** | Multiple reports that skill-creator tools requiring `ANTHROPIC_API_KEY` exclude enterprise SSO users without API keys. | [#532](https://github.com/anthropics/skills/issues/532) |
| **AWS Bedrock Support** | Users requesting compatibility with AWS Bedrock deployments beyond direct Anthropic API. | [#29](https://github.com/anthropics/skills/issues/29) |
| **Duplicate Skill Management** | Plugin architecture causing identical skills to load from different packages, wasting context window. | [#189](https://github.com/anthropics/skills/issues/189) |

---

## 3. High-Potential Pending Skills

Active PRs with strong utility that may merge soon:

| Skill | Why It Matters | PR Link |
|-------|----------------|---------|
| **SAP-RPT-1-OSS Predictor** | Enterprise predictive analytics on SAP business data using SAP's open-source tabular foundation model. | [#181](https://github.com/anthropics/skills/pull/181) |
| **codebase-inventory-audit** | 10-step workflow for identifying orphaned code, unused files, and documentation gaps—produces `CODEBASE-STATUS.md`. | [#147](https://github.com/anthropics/skills/pull/147) |
| **windows-screenshot-paste** | AutoHotkey v2 solution enabling `Ctrl+V` image pasting in Claude Code on Windows Terminal. | [#646](https://github.com/anthropics/skills/pull/646) |
| **UTF-8 Validation Fix** | Critical fix for skill-creator panics on multi-byte characters (CJK, emoji, etc.). | [#362](https://github.com/anthropics/skills/pull/362) |
| **YAML Parser Guard** | Detects unquoted special characters in skill descriptions that cause silent YAML parsing failures. | [#361](https://github.com/anthropics/skills/pull/361) |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade reliability features—security provenance, cross-platform compatibility (Windows/Bedrock/SSO), and persistent agent memory—that transform Claude Code from a personal tool into a production-ready automation platform.**

---

# Claude Code Community Digest
**Date: 2026-03-17**

---

## 1. Today's Highlights

No new releases were published in the last 24 hours. Community activity remains high with significant discussions around authentication issues (phone verification, rate limiting), ARM processor support for Cowork, and several platform-specific bugs affecting Windows and macOS users. Notable progress on community-contributed fixes includes GitLab integration for code review and improved GPG commit workflows.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| Issue | Why It Matters |
|-------|----------------|
| [#34229 - Phone Verification Bug](https://github.com/anthropics/claude-code/issues/34229) | **212 comments, 268 👍** — The most-discussed issue currently. Users report being locked out due to phone verification failures. Marked as `[invalid]` but community engagement suggests widespread impact. |
| [#24964 - Cowork Folder Picker Limitations](https://github.com/anthropics/claude-code/issues/24964) | **89 comments, 113 👍** — Long-standing bug where Cowork's folder picker rejects folders outside the home directory and blocks symlinks/junctions. Affects both Windows and macOS users with non-standard project layouts. |
| [#29579 - Rate Limit Despite Max Subscription](https://github.com/anthropics/claude-code/issues/29579) | **73 comments, 30 👍** — Claude Max subscribers hitting rate limits at only 16% usage. Raises concerns about subscription value and API quota management. |
| [#11447 - Tabs Indentation Editing Broken](https://github.com/anthropics/claude-code/issues/11447) | **35 comments, 35 👍** — Claude cannot edit files using tabs for indentation. A fundamental code editing bug affecting many codebases, open since Nov 2025. |
| [#30864 - ARM Processor Support for Cowork](https://github.com/anthropics/claude-code/issues/30864) | **32 comments, 35 👍** — Feature request for ARM processor compatibility with Cowork. Critical for Apple Silicon and ARM server deployments. |
| [#18873 - Task Tool Model Parameter Broken](https://github.com/anthropics/claude-code/issues/18873) | **8 comments, 6 👍** — The `model` parameter in Task tool returns 404, blocking cost-optimized workflows and causing "10-30x unnecessary spending." High-impact for multi-model architectures. |
| [#34685 - Opus 4.6 1M Context Degradation](https://github.com/anthropics/claude-code/issues/34685) | **8 comments** — Claude Opus 4.6 with 1M context window shows degradation starting at 40% usage, recommending restart by 48%. Concerning for long-session workflows. |
| [#32699 - OTEL Telemetry Regression](https://github.com/anthropics/claude-code/issues/32699) | **7 comments** — OpenTelemetry stopped working after v2.1.72 auto-update. Affects observability and monitoring integrations. |
| [#31804 - macOS Sandbox Configuration Bug (CLOSED)](https://github.com/anthropics/claude-code/issues/31804) | **4 comments, 18 👍** — macOS sandbox enablement showed Linux prerequisites instead. Recently closed, suggesting a fix may be incoming. |
| [#35077 - SDK Stream Closure Bug](https://github.com/anthropics/claude-code/issues/35077) | **2 comments** — `query()` closes stdin while background subagents are still running, causing "Stream closed" errors. Critical for Agent SDK users running parallel workflows. |

---

## 4. Key PR Progress

| PR | Description |
|----|-------------|
| [#34951 - GitLab Support for /code-review](https://github.com/anthropics/claude-code/pull/34951) | Adds automatic GitHub/GitLab detection and full GitLab support (including self-hosted) to the `/code-review` command. Addresses issue #26932. |
| [#30521 - GPG Pinentry Guard Plugin](https://github.com/anthropics/claude-code/pull/30521) | PreToolUse hook preventing broken GPG pinentry prompts during git commits when `commit.gpgsign=true`. Fixes commit workflow for GPG users. |
| [#32755 - Edit Verifier Plugin](https://github.com/anthropics/claude-code/pull/32755) | PostToolUse hook that verifies Edit tool operations actually succeeded, catching silent failures from whitespace mismatches or already-modified code. |
| [#35039 - Fix ralph-loop Empty Array Bug](https://github.com/anthropics/claude-code/pull/35039) | Removes `set -u` flag to handle empty `PROMPT_PARTS` array when running `/ralph-loop` without arguments. |
| [#34930 - Community Plugins Documentation](https://github.com/anthropics/claude-code/pull/34930) | Adds Community Plugins section to README with entries like "Bouncer" (Gemini-based quality gate) and other external projects. |
| [#34798 - Terminal Scroll Fix Analysis (CLOSED)](https://github.com/anthropics/claude-code/pull/34798) | Root cause analysis for terminal scrolling to top during agent execution. Implements Ctrl+6 freeze toggle workaround for Windows Terminal. |
| [#34789 - Windows Chrome Bridge Workaround (CLOSED)](https://github.com/anthropics/claude-code/pull/34789) | PowerShell script and patches to fix Chrome extension bridge connection failures on Windows. |
| [#35085 - Session Listing Bug](https://github.com/anthropics/claude-code/issues/35085) | `fetchSessions()` drops large sessions from "Past Conversations" when `.jsonl` files exceed ~128KB. Data loss concern for heavy users. |
| [#34821 - Custom Model Aliases for Task Tool](https://github.com/anthropics/claude-code/issues/34821) | Feature request to support custom model aliases when spawning subagents via Task tool, enabling proxy/routing workflows. |
| [#33373 - Configurable Feedback Surveys](https://github.com/anthropics/claude-code/issues/33373) | Feature request for configurable feedback survey frequency and triggers. |

---

## 5. Feature Request Trends

1. **ARM/Apple Silicon Support** — Native ARM processor support for Cowork (#30864) remains a top request from the community.

2. **Mobile Companion App** — Remote session interaction via mobile (#15922) continues to gather interest for on-the-go workflow management.

3. **Custom Model Aliases** — Users routing through proxies (LiteLLM, OpenRouter) need custom model alias registration for Task tool subagents (#34821).

4. **Improved Cost Controls** — Mixed-model architectures and cost-optimized workflows are blocked by Task tool model parameter issues (#18873).

5. **Better Sandbox/Security Configuration** — Multiple issues around sandbox enablement (#31804, #34044) indicate demand for clearer security controls.

---

## 6. Developer Pain Points

| Pain Point | Details |
|------------|---------|
| **Authentication & Access** | Phone verification (#34229) and OAuth conflicts with environment variables (#33330) are blocking user access. Rate limiting confusion (#29579, #34413) frustrates paying subscribers. |
| **Cross-Platform Inconsistencies** | Windows users face signature verification issues (#26457), Chrome bridge failures (#34789), and proxy blocking (#11897). macOS users deal with sandbox config bugs (#31804) and plugin marketplace visibility (#18250). |
| **Context Window Degradation** | Opus 4.6 1M context shows degradation well before 50% capacity (#34685), undermining value of large context for long sessions. |
| **Cost Optimization Blocked** | Task tool's broken `model` parameter (#18873) prevents users from implementing cost-effective subagent strategies, leading to 10-30x overspending. |
| **Session Data Loss** | Large sessions disappearing from history (#35085) and background subagent stream closures (#35077) affect reliability for power users. |
| **Tab Indentation** | Long-standing inability to edit tab-indented files (#11447) remains unresolved after 4+ months. |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-03-17

## 1. Today's Highlights

The Codex team has rolled out **version 0.115.0**, introducing full-resolution image inspection capabilities via `view_image` and `codex.emitImage`, significantly enhancing the agent's ability to handle precision visual tasks. On the infrastructure front, there is a major push to secure the **app-server** with mandatory websocket authentication for non-loopback listeners and a new **Python SDK** structure. However, the community is voicing significant frustration regarding the **VS Code extension**, citing rapid token consumption and unstable authentication flows on Windows.

## 2. Releases

### **rust-v0.115.0**
*   **Visual Precision:** Supported models can now request full-resolution image inspection through `view_image` and `codex.emitImage(..., detail: "original")`.
*   **JS Environment:** `js_repl` now exposes `codex.cwd` and `codex.homeDir` for better file system context.

---

## 3. Hot Issues

1.  **[High Priority] Token Consumption Crisis in VS Code** [#14593](https://github.com/openai/codex/Issue/14593)
    *   **Why:** Users report the latest VS Code extension (v26.311.21342) is burning through tokens at an unsustainable rate.
    *   **Reaction:** 42 upvotes and 66 comments indicate this is a critical blocker for Business users.

2.  **[Auth] 401 Unauthorized Errors on CLI** [#12764](https://github.com/openai/codex/Issue/12764)
    *   **Why:** A persistent authentication failure causing `401 Unauthorized` errors when the CLI connects to `chatgpt.com`.
    *   **Reaction:** Active for a month with 74 comments; users are frequently disconnected mid-stream.

3.  **[Feature] Remote Control from Mobile** [#9224](https://github.com/openai/codex/Issue/9224)
    *   **Why:** Highly requested feature (153 upvotes) to remote control desktop CLI sessions via the ChatGPT mobile app.
    *   **Reaction:** Users are currently hacking this together manually and want native support.

4.  **[UI] Light Background Terminal Support** [#2020](https://github.com/openai/codex/Issue/2020)
    *   **Why:** Hard-coded dark-mode colors make the CLI invisible for light-theme users.
    *   **Reaction:** 44 upvotes; users feel this conflicts with Codex's goal of universal compatibility.

5.  **[Bug] Subagent Configuration Ignored** [#14671](https://github.com/openai/codex/Issue/14671)
    *   **Why:** Custom model/reasoning configs for subagents are not being respected, causing unexpected behavior in multi-agent workflows.

6.  **[Bug] Infinite Agent Spawning Loop** [#14841](https://github.com/openai/codex/Issue/14841)
    *   **Why:** Models like `o3-mini` get stuck repeatedly spawning the same subagent until hitting thread limits.
    *   **Reaction:** Critical logic failure for automated workflows.

7.  **[Bug] Sandbox Failures with Symlinks** [#14694](https://github.com/openai/codex/Issue/14694)
    *   **Why:** `apply_patch` fails if `~/.codex` is a symlink to another partition (bubblewrap bind error).
    *   **Reaction:** Affects users with complex storage setups.

8.  **[Bug] VS Code "Undo" Not Working** [#7291](https://github.com/openai/codex/Issue/7291)
    *   **Why:** The extension fails to revert changes when the user clicks "Undo".
    *   **Reaction:** Long-standing issue (since Nov 2025) affecting trust in the extension's safety net.

9.  **[Windows] PowerShell Host Failure** [#13917](https://github.com/openai/codex/Issue/13917)
    *   **Why:** Desktop app fails to start PowerShell host on Windows (Error 8009001d), blocking usage entirely.

10. **[Bug] Zellij Incompatibility** [#9115](https://github.com/openai/codex/Issue/9115)
    *   **Why:** TUI renders incorrectly or crashes within the Zellij terminal multiplexer.
    *   **Reaction:** 29 upvotes from power users who rely on terminal multiplexers.

---

## 4. Key PR Progress

1.  **[Security] Websocket Auth for App Server** [#14847](https://github.com/openai/codex/Pull/14847)
    *   Adds transport-level authentication for websockets, enforcing "fail closed" security for non-loopback listeners.

2.  **[Feature] MCP Tool Image Materialization** [#14854](https://github.com/openai/codex/Pull/14854)
    *   Enables Codex to handle images returned by MCP tools by saving them to temp files and passing local references to the model.

3.  **[Feature] Python SDK Public API** [#14446](https://github.com/openai/codex/Pull/14446)
    *   Refines the Python SDK surface, exposing `Codex`, `Thread`, and `Turn` classes for better programmatic control.

4.  **[Feature] User Prompt Submit Hook** [#14626](https://github.com/openai/codex/Pull/14626)
    *   Introduces a hook that runs before a user's prompt is executed, allowing for filtering, blocking, or context injection.

5.  **[Fix] Symlinked Sandbox CWD** [#14849](https://github.com/openai/codex/Pull/14849)
    *   Fixes sandbox crashes when the current working directory is a symlinked path.

6.  **[Enhancement] Native Installer Overhaul** [#13986](https://github.com/openai/codex/Pull/13986)
    *   Improves the native installer to handle binaries and dependencies via `CODEX_HOME` rather than relying on the old JS launcher.

7.  **[Refactor] Thread Lifecycle via App-Server** [#14699](https://github.com/openai/codex/Pull/14699) & [#14711](https://github.com/openai/codex/Pull/14711)
    *   Moves thread management (fresh sessions, resume, fork) from direct core access to the app-server RPC, enabling better notifications and skill updates.

8.  **[Security] macOS Keychain Shared Access** [#14855](https://github.com/openai/codex/Pull/14855)
    *   Routes keychain access through native Security.framework APIs and uses a shared access group for better credential management.

9.  **[Telemetry] Escalations and Approvals** [#14840](https://github.com/openai/codex/Pull/14840)
    *   Adds telemetry hooks for tracking user escalations and approval flows (likely related to guardrails).

10. **[Fix] Invalid MDM Config Handling** [#14818](https://github.com/openai/codex/Pull/14818)
    *   Prevents a fleet-wide outage scenario where a single invalid MDM (Mobile Device Management) policy entry could crash the app config loader.

---

## 5. Feature Request Trends

*   **Remote Management:** Strong demand for a "Codex Remote Control" feature to manage desktop CLI instances from mobile devices or other interfaces.
*   **Accessibility / Theming:** Continued requests for Light Background terminal support, indicating the current hardcoded color palette is a barrier to entry.
*   **Trust & Safety Configurability:** Users want to bypass manual approval prompts for "trusted" projects (Issue #14599) to reduce friction in active development cycles.
*   **Azure Entra Auth:** Enterprise users are pushing for `DefaultAzureCredential` support to integrate Codex with existing identity providers (Issue #1056).

## 6. Developer Pain Points

*   **Extension Instability:** The VS Code extension is currently unstable for many, specifically regarding token efficiency and the reliability of the "Undo" functionality.
*   **Sandbox Friction:** The security sandbox (bubblewrap) frequently clashes with non-standard setups (symlinks, specific directory structures), breaking core features like `apply_patch`.
*   **Looping Behavior:** Agentic workflows are prone to getting stuck in recursive loops (spawning infinite subagents), wasting tokens and time.
*   **Configuration Scoping:** Confusion regarding where configuration lives (e.g., `AGENTS.override.md` and `developer_instructions`), with reports that the desktop app ignores CLI config files.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-03-17

## 1. Today's Highlights
The Gemini CLI team is focused on stabilizing the new subagent architecture, releasing patches **v0.34.0-preview.4** and **v0.33.2** to address specific regressions. A major theme across the board is "Session Continuity," with significant effort directed toward fixing the Plan Mode (which suffers from context dropping and hallucinations) and implementing Just-In-Time (JIT) context loading to improve performance. Additionally, new infrastructure is being laid to support background execution for remote agents and better tool isolation for subagents.

## 2. Releases
*   **v0.34.0-preview.4**: A patch release cherry-picking a fix (commit `48130eb`) into the preview branch.
    *   [View Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.34.0-preview.4)
*   **v0.33.2**: A stable patch release resolving conflicts for the same critical fix backported to the stable line.
    *   [View Release](https://github.com/google-gemini/gemini-cli/compare/v0.33.1...v0.33.2)

## 3. Hot Issues
1.  **Agent "Ghosts" After Plan Approval** ([#22266](https://github.com/google-gemini/gemini-cli/issues/22266)): A critical bug where the agent silently drops context immediately after a user approves a `/plan`, failing to transition into execution.
2.  **Plan Mode Stuck or Regressing** ([#22507](https://github.com/google-gemini/gemini-cli/issues/22507), [#22307](https://github.com/google-gemini/gemini-cli/issues/22307)): Users report Plan Mode getting stuck in infinite thought loops or displaying plans based on previous requests rather than current ones.
3.  **Subagents Ignoring Disabled Configs** ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)): Since v0.33.0, users report subagents (like "generalist") activating despite being explicitly disabled in settings, raising permission and control concerns.
4.  **False "Goal Success" on Max Turns** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)): Subagents hitting `MAX_TURNS` incorrectly report `status: success` and `Termination Reason: GOAL`, hiding the fact that the task was actually interrupted.
5.  **Browser Agent Fails on Wayland** ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)): Linux users on Wayland environments are experiencing failures with the browser subagent.
6.  **Settings.json Overrides Ignored** ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)): The Browser Agent is reportedly ignoring global and project-level configuration overrides, limiting user control over parameters like `maxTurns`.
7.  **"Get-Shit-Done" Crash** ([#22186](https://github.com/google-gemini/gemini-cli/issues/22186)): A high-priority crash occurring during the output hook of the `get-shit-done` workflow, disrupting complex container setups.
8.  **Session Continuity Epic** ([#21792](https://github.com/google-gemini/gemini-cli/issues/21792)): Maintainers have opened an epic to address context degradation in long-running sessions, acknowledging current bottlenecks in linear chat history.
9.  **CLI Scrolling to Top on Click** ([#22028](https://github.com/google-gemini/gemini-cli/issues/22028)): A UI bug in VS Code where the terminal scrolls to the top whenever the user clicks anywhere in the window.
10. **Destructive Git Behavior** ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)): Requests for the agent to prefer safer alternatives to commands like `git reset --force` when managing complex operations.

## 4. Key PR Progress
1.  **Sandboxing Plan Mode Paths** ([#22737](https://github.com/google-gemini/gemini-cli/pull/22737)): Fixes path hallucinations by restricting the LLM to write plans only to the designated `plansDir`.
2.  **JIT Context Loading** ([#22736](https://github.com/google-gemini/gemini-cli/pull/22736)): Enables Just-In-Time loading of `GEMINI.md` files by default, replacing eager loading to speed up startup in large repos.
3.  **Background Task UI Infrastructure** ([#22740](https://github.com/google-gemini/gemini-cli/pull/22740)): Generalizes the background task UI (Ctrl+B) to support execution types beyond shell commands, paving the way for background remote agents.
4.  **Tool Isolation for Subagents** ([#22708](https://github.com/google-gemini/gemini-cli/pull/22708)): Introduces the foundation for isolating tools per subagent, allowing specific MCP servers and toolsets to be dedicated to specific agents.
5.  **Fixing Terminal Escape Sequences** ([#22682](https://github.com/google-gemini/gemini-cli/pull/22682)): Prevents mouse tracking escape sequences from leaking into the shell prompt after exiting the CLI.
6.  **LSP Query Tool** ([#22580](https://github.com/google-gemini/gemini-cli/pull/22580)): Introduces a new tool for semantic code analysis (definitions, references) via Language Server Protocol (LSP).
7.  **Browser Input Blocker Fix** ([#22562](https://github.com/google-gemini/gemini-cli/pull/22562)): Ensures the input blocker overlay persists across page navigations during browser agent automation.
8.  **Browser Cursor Animations** ([#22416](https://github.com/google-gemini/gemini-cli/pull/22416)): Adds visual feedback (click dots and scroll indicators) so users can see exactly what the browser agent is doing.
9.  **Persistent Browser Sessions** ([#21306](https://github.com/google-gemini/gemini-cli/pull/21306)): Optimizes the browser agent by maintaining a singleton browser instance across subagent calls rather than spinning up a new Chrome process every time.
10. **Injection Service Refactor** ([#22544](https://github.com/google-gemini/gemini-cli/pull/22544)): Architectural change replacing `UserHintService` with a unified `InjectionService` to better support background tasks and source-aware injection.

## 5. Feature Request Trends
*   **Subagent Transparency & Control:** Strong demand for better visibility into subagent behavior (e.g., seeing trajectories via `/chat share` in [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)) and stricter control over when they activate.
*   **Safety & "Guard Rails":** Users want the CLI to avoid destructive commands (like `git reset --force`) and handle resources safely, suggesting a need for a "safety layer" in the execution pipeline.
*   **Memory Management:** Moves to replace `save_memory` with a dedicated memory subagent ([#22716](https://github.com/google-gemini/gemini-cli/issues/22716)) indicate a trend toward more structured, durable context management.
*   **Remote Agent Backgrounding:** Requests to push long-running remote agent calls to the background ([#18197](https://github.com/google-gemini/gemini-cli/issues/18197)) to keep the main loop responsive.

## 6. Developer Pain Points
*   **Plan Mode Instability:** The Plan Mode is currently the source of significant friction, suffering from "ghosting" (context loss), "stuck" states, and confusion between current and previous plans.
*   **UI/UX "Paper Cuts":** Minor but frequent annoyances such as the CLI scrolling to the top on click ([#22028](https://github.com/google-gemini/gemini-cli/issues/22028)) and misleading "Action Required" icons ([#21925](https://github.com/google-gemini/gemini-cli/issues/21925)) are degrading the user experience.
*   **Subagent Unpredictability:** Developers are frustrated by subagents running without permission ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) or claiming success when they actually timed out ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), making debugging difficult.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-03-17

## 1. Today's Highlights
The Copilot CLI team released three patches (v1.0.6-0 through v1.0.6-2) in rapid succession, introducing dynamic tool discovery for Claude models and significant memory leak fixes. The community is actively discussing UI stability, specifically screen flickering in long conversations (Issue #239), and model availability parity between the CLI and VS Code extensions.

## 2. Releases

### **v1.0.6-2**
*   **Memory Management:** Reduced memory usage by removing redundant environment variable copies during child process spawns.
*   **Bug Fixes:** Fixed a memory leak by freeing tree-sitter WASM objects after parsing and resolved an auto-update recovery bug.
*   [View Release](https://github.com/github/copilot-cli/releases/tag/v1.0.6-2)

### **v1.0.6-1**
*   **Stability:** Fixed session crashes caused by HTTP/2 connection pool race conditions during sub-agent operations.
*   **Usability:** Fixed the "Remaining Requests" widget for Copilot Free users and improved memory handling for streaming output.
*   [View Release](https://github.com/github/copilot-cli/releases/tag/v1.0.6-1)

### **v1.0.6-0**
*   **New Features:** Enabled dynamic tool search and usage for Claude models; added support for Open Plugin spec file locations.
*   [View Release](https://github.com/github/copilot-cli/releases/tag/v1.0.6-0)

## 3. Hot Issues

1.  **Screen Flickering in Long Sessions** [#239](https://github.com/github/copilot-cli/issues/239)
    *   **Context:** Users report that conversations exceeding 10 messages cause the screen to flicker and scroll to the top unexpectedly.
    *   **Reaction:** This is the most active issue (34 comments, 66 thumbs up), indicating a critical need for TUI stability improvements.

2.  **OAuth Support for Remote MCP Servers** [#33](https://github.com/github/copilot-cli/issues/33)
    *   **Context:** A highly supported request (105 👍) to enable OAuth authentication for remote MCP servers like Figma and Atlassian.
    *   **Reaction:** Community views this as essential for enterprise integration with external tooling.

3.  **Missing Models in CLI vs. VS Code** [#1703](https://github.com/github/copilot-cli/issues/1703)
    *   **Context:** Users noticed that org-enabled models (specifically Gemini 3.1 Pro) appear in VS Code but are missing from the CLI model list.
    *   **Reaction:** Frustration regarding feature parity and confusion over authorization policies.

4.  **Claude Sonnet 4.6 Execution Failures** [#2050](https://github.com/github/copilot-cli/issues/2050)
    *   **Context:** Users encounter `HTTP/2 GOAWAY` connection errors when using Claude Sonnet 4.6 for heavier tasks, while Gemini 3 Pro works fine.
    *   **Reaction:** Concerns about reliability when using third-party models via the CLI.

5.  **Agent Implements Changes During Plan Mode** [#1663](https://github.com/github/copilot-cli/issues/1663)
    *   **Context:** A bug where the agent writes code and edits files despite being instructed to only create a plan (`[[PLAN]]` prefix).
    *   **Reaction:** Undermines trust in "safe" planning modes intended for review-before-execution workflows.

6.  **Vertical Scroll Bar Removal** [#2053](https://github.com/github/copilot-cli/issues/2053)
    *   **Context:** A regression in v1.0.5 completely removed the scroll bar, preventing users from viewing history or "thinking" processes.
    *   **Reaction:** Immediate negative feedback on usability regression.

7.  **Org-Owned Token Permissions** [#223](https://github.com/github/copilot-cli/issues/223)
    *   **Context:** Fine-grained tokens owned by organizations do not display the "Copilot Requests" permission, blocking enterprise automation.
    *   **Reaction:** A blocker for corporate environments enforcing non-personal service accounts.

8.  **Terminal Flickering in Visual Studio** [#1811](https://github.com/github/copilot-cli/issues/1811)
    *   **Context:** Specific to Visual Studio's integrated terminal, the UI flickers and jumps during MCP loading.
    *   **Reaction:** Highlights environment-specific rendering bugs.

9.  **Reasoning Effort via CLI Flag** [#1048](https://github.com/github/copilot-cli/issues/1048)
    *   **Context:** Users want to set `--reasoning-effort` directly via command line flags (e.g., `high`) for non-interactive scripts.
    *   **Reaction:** Popular request for power users automating complex tasks.

10. **Linux Clipboard Shortcut Broken** [#2082](https://github.com/github/copilot-cli/issues/2082)
    *   **Context:** The standard `ctrl+shift+c` copy shortcut stopped working in recent versions on Linux.
    *   **Reaction:** Basic workflow disruption for Linux users.

## 4. Key PR Progress

*   **[OPEN] Devcontainer Support** [#2069](https://github.com/github/copilot-cli/pull/2069)
    *   Proposes adding a `devcontainer.json` to streamline development environment setup.
*   **[OPEN] Install Script Rename** [#1916](https://github.com/github/copilot-cli/pull/1916)
    *   A housekeeping PR renaming the installation script; activity noted but low context.

*(Note: Only 2 active PRs were recorded in the data source for this period.)*

## 5. Feature Request Trends

*   **Advanced Model Configuration:** Users are requesting deeper control over model parameters via the CLI, specifically setting "reasoning effort" levels and default model preferences for automation scripts.
*   **Enterprise & Integrations:** Strong demand for **OAuth support in MCP servers** and **Azure DevOps repository support** for the `/delegate` command.
*   **Session Management:** Users desire better control over conversation history and flow, evidenced by requests for a `/fork` command to handle "side quests" without losing the main context.
*   **Accessibility:** Requests to suppress the "Type @ to mention..." prompt indicator to improve screen reader usability.

## 6. Developer Pain Points

*   **Memory & Stability:** The release of v1.0.6-1 and v1.0.6-2 confirms that **memory leaks** and **HTTP/2 race conditions** were causing crashes. However, users still report UI jank (flickering/scrolling) in extended sessions.
*   **UI Regressions:** The removal of the scroll bar and breaking standard Linux copy shortcuts (Ctrl+Shift+C) in recent updates have frustrated daily users.
*   **Agent Reliability:** Developers are experiencing unpredictable agent behavior, such as **ignoring skills** unless explicitly prompted or **executing code** during planning mode, which hampers trust in autonomous operations.
*   **Platform Parity:** A recurring frustration is the lack of model parity between the CLI and VS Code extensions, leading to confusion about what features are actually available to org-users.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-03-17

## 1. Today's Highlights
The community focused heavily on **ecosystem expansion and stability**, highlighted by a closed request to support the **Opencode** third-party agent, signaling a push for broader platform compatibility. Simultaneously, a flurry of Pull Requests addressed critical Web UI bugs and architectural improvements, specifically targeting MCP server resilience and OAuth flexibility for custom providers. The most notable bug report involves file mentions (`@`) failing in the latest v1.18.0 release, which has already attracted a community-submitted fix.

## 2. Releases
**None** recorded in the last 24 hours.

## 3. Hot Issues

1.  **[#752](https://github.com/MoonshotAI/kimi-cli/issues/752) [CLOSED] Support for Opencode Agent**
    *   **Context:** A proposal to support third-party coding agent "Opencode" to attract more Kimi K2 users.
    *   **Significance:** This feature request was marked closed, suggesting the team is actively integrating or evaluating Opencode support, a win for interoperability.
2.  **[#1375](https://github.com/MoonshotAI/kimi-cli/issues/1375) [OPEN] File mentions (@) broken in v1.18.0**
    *   **Context:** Users report that `@` file mentions cannot locate files in the latest version.
    *   **Significance:** A critical regression affecting core usability. A fix is already pending in PR #1403, indicating high priority.
3.  **[#1449](https://github.com/MoonshotAI/kimi-cli/issues/1449) [OPEN] Claude Code `ENABLE_TOOL_SEARCH` API Error**
    *   **Context:** Enabling `ENABLE_TOOL_SEARCH` causes a 400 Invalid Request Error when using Claude Code integration.
    *   **Significance:** Highlights friction in cross-model compatibility, specifically regarding tool-use definitions between Kimi and Claude.
4.  **[#1443](https://github.com/MoonshotAI/kimi-cli/issues/1443) [CLOSED] Session switch crashes**
    *   **Context:** `/sessions` command crashes due to unhandled `_system_prompt` role in `Context.restore()`.
    *   **Significance:** Addressed quickly; indicates fragility in session state management which needs robust backward compatibility.
5.  **[#1343](https://github.com/MoonshotAI/kimi-cli/issues/1343) [OPEN] Slow startup on Windows via `uv`**
    *   **Context:** Significant startup latency (~800ms+) on Windows when installed via `uv tool install`.
    *   **Significance:** A performance bottleneck likely caused by dependency loading (`loguru`, `encodings`) affecting developer experience on Windows.
6.  **[#1452](https://github.com/MoonshotAI/kimi-cli/issues/1452) [OPEN] `kimi web` 404 Error**
    *   **Context:** `uv run kimi web` starts the server but returns 404 on root access.
    *   **Significance:** Blocks immediate testing/usage of the new Web UI via standard tunneling methods.

## 4. Key PR Progress

1.  **[#1403](https://github.com/MoonshotAI/kimi-cli/pull/1403) Fix file-mention scope**
    *   Fixes the critical issue where `@` mentions failed in large repos by scoping the file walk to the typed directory prefix rather than scanning the whole project.
2.  **[#1450](https://github.com/MoonshotAI/kimi-cli/pull/1450) MCP Server connection resilience**
    *   Prevents the CLI from crashing on MCP server connection failures. Introduces graceful degradation and circuit breakers for unstable tool connections.
3.  **[#1445](https://github.com/MoonshotAI/kimi-cli/pull/1445) Remove mandatory OAuth for ACP**
    *   Allows ACP protocol usage without Kimi OAuth if `KIMI_BASE_URL` or `KIMI_API_KEY` env vars are set. Essential for enterprise/private deployment scenarios.
4.  **[#1448](https://github.com/MoonshotAI/kimi-cli/pull/1448) Clipboard fallback for Web UI**
    *   Fixes silent copy failures in non-secure contexts (like VS Code port-forwarding) by falling back from `navigator.clipboard` to `execCommand`.
5.  **[#1447](https://github.com/MoonshotAI/kimi-cli/pull/1447) [CLOSED] Global config sync in Web UI**
    *   Ensures that model changes in one browser tab update the state across all open tabs connected to the same server.
6.  **[#1446](https://github.com/MoonshotAI/kimi-cli/pull/1446) Web Chat UI type fix**
    *   Corrects a prop type mismatch (`button type` vs `buttons`) in the web chat interface components.
7.  **[#1444](https://github.com/MoonshotAI/kimi-cli/pull/1444) T* Framework Implementation**
    *   An experimental feature adding "thermodynamic regime management" to tool execution. Introduces complex logic for ACT/HOLD/REFUSE decisions based on prompt "temperature".

## 5. Feature Request Trends
*   **Third-Party Agent Support:** Strong interest in making Kimi CLI the backend for other agents like Opencode, rather than just a standalone tool.
*   **Tool Search Capabilities:** Users are actively trying to utilize `ENABLE_TOOL_SEARCH`, suggesting a demand for more agentic, autonomous file/code discovery behaviors.
*   **Flexible Auth Models:** The trend toward removing mandatory OAuth (PR #1445) aligns with user needs for local-first or proxy-based workflows.

## 6. Developer Pain Points
*   **Windows Performance:** Start-up times remain suboptimal on Windows, particularly with the `uv` installer, due to Python import overhead.
*   **Regression in Core Features:** The breakage of `@` file mentions (Issue #1375) in recent releases has disrupted workflows for users with large codebases.
*   **Web UI Accessibility:** Issues with 404s and clipboard access in tunnel/port-forwarding environments (Issues #1452, #1448) indicate the Web UI needs better support for remote development scenarios.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-17

## Today's Highlights

OpenCode **v1.2.27** shipped today with significant architectural refactoring, moving core services (Question, Permission, File, Skill) to an Effect-based pattern for better reliability and composability. The community is buzzing about **Copilot authentication issues** consuming premium quotas at an alarming rate, while performance concerns around **memory leaks and CPU spikes** on macOS continue to draw attention. On the positive side, new PRs introduce `/skills` autocomplete in the web UI and text-based custom command support.

---

## Releases

### v1.2.27
A focused maintenance release with architectural improvements:
- **VCS watcher** logic fix for if-statements
- **Legacy permission module** deleted
- Pending entry cleanup when questions are aborted
- SIGHUP exit handler removed
- **PermissionNext effectified** and ALS bug fixed in InstanceState
- Branded ID schemas inlined
- **QuestionService refactored** to use effects

---

## Hot Issues

| # | Title | Why It Matters |
|---|-------|----------------|
| [#8030](https://github.com/anomalyco/opencode/issues/8030) | **Copilot auth sets too many requests as "user"** | 188 comments, 64 👍. Users report Copilot Opus 4.5 burning through monthly quotas because agent-initiated requests are incorrectly tagged with `X-Initiator: user` instead of `agent`. Critical billing impact. |
| [#3936](https://github.com/anomalyco/opencode/issues/3936) | **GitHub Enterprise authorization broken** | 52 comments. Users can't authenticate with GitHub Enterprise deployments—blocking enterprise adoption entirely. |
| [#12687](https://github.com/anomalyco/opencode/issues/12687) | **Severe memory leak causing kernel panic (macOS)** | 43 comments. Intensive use leads to disk swell and forced system restarts. Critical for power users running long sessions. |
| [#12338](https://github.com/anomalyco/opencode/issues/12338) | **1M tokens not working for Opus 4.6** | 29 comments, 24 👍. Despite enabling extended context, users hit a 200k wall. Blocks complex codebase analysis. |
| [#2224](https://github.com/anomalyco/opencode/issues/2224) | **Air-gapped installation support** | 23 comments, 24 👍. Kubernetes users in restricted environments can't run OpenCode without external connectivity. Strong enterprise demand. |
| [#7002](https://github.com/anomalyco/opencode/issues/7002) | **Regression in v1.1.3 breaking edit tool** | 25 comments. Invalid `filePath` argument errors after upgrade—disrupts core coding workflows. |
| [#16331](https://github.com/anomalyco/opencode/issues/16331) | **Permissions ignored** | 17 comments. Configured `deny` rules for `.env` files are bypassed. Security-conscious teams are blocked. |
| [#8549](https://github.com/anomalyco/opencode/issues/8549) | **Web UI requires internet access** | 9 comments, 8 👍. Corporate users behind firewalls can't use the web interface even with self-hosted models. |
| [#13838](https://github.com/anomalyco/opencode/issues/13838) | **Compaction injects fake "What did we do so far?" message** | 8 comments. Session resume triggers unwanted summary generation, confusing context and wasting tokens. |
| [#8554](https://github.com/anomalyco/opencode/issues/8554) | **Recursive LLM pattern support** | 11 comments, 11 👍. Feature request for programmatic sub-LLM calls in loops—enabling advanced agentic patterns from academic research. |

---

## Key PR Progress

| # | Title | Description |
|---|-------|-------------|
| [#17847](https://github.com/anomalyco/opencode/pull/17847) | **GitHub Copilot Enterprise integration fix** | ✅ **MERGED** — Removes legacy auth code, requires `opencode auth login` for Enterprise. TUI/Desktop connect flows will get prompting support next. |
| [#17844](https://github.com/anomalyco/opencode/pull/17844) | **Add /skills command and inline autocomplete** | ✅ **MERGED** — Brings TUI skill discovery to web UI. Typing `/` mid-text shows skill-only autocomplete popover. |
| [#16918](https://github.com/anomalyco/opencode/pull/16918) | **OpenCode 2.0 refactor** | Massive ongoing effort: LSP server improvements, dynamic formatter path resolution, npm bin link fixes, and core infrastructure upgrades. |
| [#16750](https://github.com/anomalyco/opencode/pull/16750) | **Fix Anthropic API rejections for thinking blocks** | Prevents empty-text filtering on assistant messages that causes API errors with extended thinking. |
| [#17083](https://github.com/anomalyco/opencode/pull/17083) | **Flush stdin on POSIX exit** | Fixes stale bytes leaking to shell after exit—prevents mysterious terminal corruption. |
| [#16751](https://github.com/anomalyco/opencode/pull/16751) | **Fix tool_use/tool_result mismatch** | Comprehensive fix for session reconstruction issues causing mismatched tool states. |
| [#17849](https://github.com/anomalyco/opencode/pull/17849) | **Effectify SkillService** | Converts Skill namespace to scoped service class with lazy init and proper error handling. Aligns with v1.2.27 architecture direction. |
| [#17845](https://github.com/anomalyco/opencode/pull/17845) | **Effectify FileService** | ✅ **MERGED** — File operations converted to ServiceMap pattern with lazy cache initialization. |
| [#17841](https://github.com/anomalyco/opencode/pull/17841) | **Text-based custom command files** | Extends command discovery beyond markdown—supports `.txt` and other plaintext formats. |
| [#12307](https://github.com/anomalyco/opencode/pull/12307) | **Ctrl+R prompt history search** | Bash-style reverse-i-search in TUI. Fuzzy search through prompt history with Ctrl+R cycling. |

---

## Feature Request Trends

1. **Remote & Air-gapped Workflows** — Strong demand for self-hosted web UI bundles, Kubernetes-ready deployments, and VS Code-style remote workspace support ([#2224](https://github.com/anomalyco/opencode/issues/2224), [#5608](https://github.com/anomalyco/opencode/issues/5608), [#8549](https://github.com/anomalyco/opencode/issues/8549)).

2. **Advanced Agentic Patterns** — Recursive LLM calls, sub-agent orchestration, and programmable multi-model workflows ([#8554](https://github.com/anomalyco/opencode/issues/8554), [#11865](https://github.com/anomalyco/opencode/issues/11865)).

3. **Enterprise Auth & Permissions** — GitHub Enterprise SSO, OAuth token resilience, and granular access control that respects configured deny rules ([#3936](https://github.com/anomalyco/opencode/issues/3936), [#16331](https://github.com/anomalyco/opencode/issues/16331), [#9111](https://github.com/anomalyco/opencode/issues/9111)).

4. **Multi-session TUI Experience** — Chrome-style tabs for simultaneous session workflows ([#12548](https://github.com/anomalyco/opencode/issues/12548)).

5. **Voice Input & Dictation** — Plugin extensibility gaps blocking voice-enabled coding ([#17425](https://github.com/anomalyco/opencode/issues/17425)).

---

## Developer Pain Points

- **Quota bleeding** from misclassified Copilot requests causing unexpected billing spikes ([#8030](https://github.com/anomalyco/opencode/issues/8030))
- **Performance instability** on macOS with memory leaks leading to system crashes during extended sessions ([#12687](https://github.com/anomalyco/opencode/issues/12687), [#17843](https://github.com/anomalyco/opencode/issues/17843))
- **Token limits** not reflecting configured model capabilities despite settings ([#12338](https://github.com/anomalyco/opencode/issues/12338))
- **Session state corruption** after stream interruptions, leaving permanent "Thinking..." spinners ([#17680](https://github.com/anomalyco/opencode/issues/17680))
- **TUI regressions** including broken copy-on-selection and numeric input issues in WezTerm ([#17796](https://github.com/anomalyco/opencode/issues/17796), [#11325](https://github.com/anomalyco/opencode/issues/11325))
- **Subagent hangs** with OpenAI/Codex requiring manual session restarts ([#11865](https://github.com/anomalyco/opencode/issues/11865))

---

*Digest generated from 50 issues and 20 PRs updated in the last 24 hours.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest - 2026-03-17

## 1. Today's Highlights
Version **v0.12.5** has been released, primarily focusing on stability improvements and critical bug fixes for Windows encoding issues. The community is actively discussing UI responsiveness, with several P1 priority issues opened regarding input lag and startup performance on Windows. Additionally, there is a strong push from the community for enhanced subagent capabilities and simplified configuration workflows.

## 2. Releases

### **v0.12.5**
- **Stability:** Simplified integration tests for better SDK reliability ([#2410](https://github.com/QwenLM/qwen-code/pull/2410)).
- **Windows Fix:** Resolved encoding issues for non-ASCII output in Windows shells ([#2423](https://github.com/QwenLM/qwen-code/pull/2423)).
- **Link:** [Release v0.12.5](https://github.com/QwenLM/qwen-code/releases/tag/v0.12.5)

### **v0.12.4**
- **New Skill:** Added bundled `/review` skill for out-of-the-box code review ([#2348](https://github.com/QwenLM/qwen-code/pull/2348)).
- **Resilience:** Improved handling of individual LLM failures in qualitative insights ([#2361](https://github.com/QwenLM/qwen-code/pull/2361)).

## 3. Hot Issues

1.  **[#2395 Severe Input Lag](https://github.com/QwenLM/qwen-code/issues/2395)**
    *   **Why:** Users report a 5+ second delay when typing in the chat window (VS Code extension), severely impacting workflow. Marked as P1.
2.  **[#1094 DevContainer Connection Failure](https://github.com/QwenLM/qwen-code/issues/1094)**
    *   **Why:** Critical connection failure when using VS Code Insiders with DevContainers, preventing CLI-to-IDE communication.
3.  **[#2427 Simplify API Key Configuration](https://github.com/QwenLM/qwen-code/issues/2427)**
    *   **Why:** High-frustration feedback regarding the complex `settings.json` configuration. Users are requesting a CLI-based setup similar to OpenCode.
4.  **[#1924 Context Compression Issues](https://github.com/QwenLM/qwen-code/issues/1924)**
    *   **Why:** Reports of "useless" compression and buggy `contextWindowSize` handling when using local models (llama.cpp), leading to context management failures.
5.  **[#984 Docker Container Isolation](https://github.com/QwenLM/qwen-code/issues/984)**
    *   **Why:** Users working inside Docker containers (specifically in Cursor IDE) cannot connect to the host IDE.
6.  **[#2382 Extension Compatibility](https://github.com/QwenLM/qwen-code/issues/2382)**
    *   **Why:** Regression reports where v0.12.2 worked but v0.12.3+ fails to initialize ("Preparing Qwen Code..." hang).
7.  **[#2426 API Quota Changes](https://github.com/QwenLM/qwen-code/issues/2426)**
    *   **Why:** Users report significant reduction in free daily API request quotas, sparking discussion about service limits.
8.  **[#1081 Sandbox Integration](https://github.com/QwenLM/qwen-code/issues/1081)**
    *   **Why:** IDE integration fails when running Qwen Code inside a sandboxed environment (Docker/Podman) due to connection errors.
9.  **[#2325 Enhanced @ Mentions](https://github.com/QwenLM/qwen-code/issues/2325)**
    *   **Why:** Request to upgrade `@` mention to support folders and fuzzy search, improving context selection granularity.
10. **[#2401 Keyboard Unresponsiveness](https://github.com/QwenLM/qwen-code/issues/2401)**
    *   **Why:** Specific bug where pressing `Caps Lock` inside the VS Code terminal stops all keyboard input recognition.

## 4. Key PR Progress

1.  **[#2423 Fix Windows Encoding](https://github.com/QwenLM/qwen-code/pull/2423)** (Merged)
    *   Forces UTF-8 output in PowerShell and improves encoding detection to fix garbled CJK characters.
2.  **[#2411 Increase Output Token Limit](https://github.com/QwenLM/qwen-code/pull/2411)** (Merged)
    *   Doubles the `DEFAULT_OUTPUT_TOKEN_LIMIT` from 8K to 16K, allowing for longer model responses.
3.  **[#2417 Symlinked Skills Support](https://github.com/QwenLM/qwen-code/pull/2417)** (Merged)
    *   Enables loading skills from symlinked directories, supporting hot-reload and easier local development.
4.  **[#2356 Auto-detect Max Tokens](https://github.com/QwenLM/qwen-code/pull/2356)** (Merged)
    *   Fixes truncated responses for non-Qwen models (Claude, GPT) by auto-detecting `max_tokens` if not explicitly configured.
5.  **[#2425 Reverse Command Search](https://github.com/QwenLM/qwen-code/pull/2425)** (Open)
    *   Updates `Ctrl+R` history search to show the most recent commands first for better usability.
6.  **[#2400 System Prompt Customization](https://github.com/QwenLM/qwen-code/pull/2400)** (Open)
    *   Introduces SDK and CLI options to override or append to the default system prompt.
7.  **[#2404 Tool Call Loss Prevention](https://github.com/QwenLM/qwen-code/pull/2404)** (Open)
    *   Fixes streaming bugs where tool calls disappeared if function names arrived late or finish chunks were duplicated.
8.  **[#2420 Skip Rate-Limit Delay](https://github.com/QwenLM/qwen-code/pull/2420)** (Open)
    *   Allows users to press `Ctrl+Y` to skip the 60-second retry delay during rate-limiting.
9.  **[#2385 Local Model Support](https://github.com/QwenLM/qwen-code/pull/2385)** (Open)
    *   Adds native support for LM Studio and Ollama via OpenAI-compatible local APIs.
10. **[#2352 Hooks Extension Mechanism](https://github.com/QwenLM/qwen-code/pull/2352)** (Open)
    *   Implements a lifecycle hook system for extensions to execute commands on specific events.

## 5. Feature Request Trends
*   **Configuration Usability:** A strong demand to move away from JSON configuration files toward interactive CLI setups (wizards) for API keys and providers.
*   **Advanced Context Control:** Users want more granular control over context, including folder-level `@` mentions, portable project-local chat history, and better context compression algorithms.
*   **Subagent Parity:** Requests to bring Qwen Code's subagent system up to par with competitors (specifically Claude Code), including better output visualization and variable passing.

## 6. Developer Pain Points
*   **Windows Stability:** High frequency of reports regarding encoding issues, slow startup times, and UI glitches (input lag, Caps Lock bug) on Windows 11.
*   **IDE Connection Reliability:** Recurring issues where the CLI fails to connect to the VS Code Companion extension, particularly in remote environments (DevContainers, Docker, WSL).
*   **Documentation & UX:** Frustration with "messy" documentation and the complexity of setting up environment variables compared to other tools.

</details>