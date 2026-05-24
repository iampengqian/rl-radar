# AI CLI Tools Community Digest 2026-05-25

> Generated: 2026-05-24 22:16 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the community digests from May 25, 2026.

## 1. Ecosystem Overview
The AI CLI tool ecosystem is currently characterized by aggressive feature development alongside significant growing pains in foundational reliability. Major incumbents like Claude Code and GitHub Copilot are iterating on complex orchestration workflows (like sub-agents and MCP integrations) while battling severe platform-specific TUI/rendering bugs. Meanwhile, challenger and open-weight tools (Gemini CLI, Qwen Code, OpenCode) are heavily focused on fundamental infrastructure hardening, memory management, and multi-agent orchestration. Across the board, tooling providers are transitioning from simple terminal-based chat interfaces into autonomous background agents, exposing critical gaps in session state management, observability, and cross-platform stability.

## 2. Activity Comparison

| Tool | Updated Issues | PRs Noted | Releases (Last 24h) | Overall Sentiment / Focus |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 10 | 0 (v2.1.150 active) | Regression-heavy; focus on security, MCP breakage, and billing friction. |
| **OpenAI Codex** | 10 | 10 | 0 | Stabilization; major TUI refactors and "Review Story" PRs merging internally. |
| **Gemini CLI** | 10 | 10 | 0 | Core hardening; focus on fixing PTY/shell deadlocks and memory leaks. |
| **GitHub Copilot CLI** | 10 | 0 | 3 (v1.0.52-v1.0.54) | Rapid patching; addressing immediate TUI scrollbar and rendering regressions. |
| **Kimi Code CLI** | 0 | 7 | 0 | Ecosystem integration; focus on ACP streaming and CRLF cross-platform fixes. |
| **OpenCode** | 10 | 10 | 0 | Provider instability; addressing GPT-5.4/DeepSeek latency and infinite retries. |
| **Pi** | 10 | 10 | 0 | TUI stabilization; merged critical fixes for unhandled promises and crashes. |
| **Qwen Code** | 7 | 10 | 1 (v0.16.1-nightly) | Daemon-mode preparation; shipping observability features and alpha release chains. |
| **DeepSeek TUI** | 10 | 10 | 2 (v0.8.42-v0.8.43) | Brand transition (CodeWhale); focus on multi-agent routing and architecture. |

## 3. Shared Feature Directions

*   **Multi-Agent Orchestration & Visibility:** There is a massive industry shift toward parallel sub-agents, but the execution is currently brittle. 
    * *Tools affected:* **Gemini CLI**, **Qwen Code**, **DeepSeek TUI**, **OpenAI Codex**.
    * *Specific needs:* Sub-agents frequently hang or falsely report success (Gemini). Communities are demanding real-time progress panels (Qwen) and bounded parallel-worker orchestration layers (DeepSeek TUI).
*   **Context Compaction & State Management:** Long-running sessions inevitably hit context limits, and the current compaction/summarization strategies are causing data loss.
    * *Tools affected:* **Claude Code**, **OpenAI Codex**, **OpenCode**, **Pi**.
    * *Specific needs:* Compaction frequently wipes entire sessions (Pi) or drops task metadata, requiring session-resume fixes (Codex) and better context pruning (OpenCode).
*   **Terminal (TUI) Rendering & Cross-Platform Stability:** Advanced terminal features are colliding with OS-specific quirks, particularly on Windows and Wayland.
    * *Tools affected:* **GitHub Copilot CLI**, **OpenAI Codex**, **Pi**, **DeepSeek TUI**, **Kimi Code CLI**.
    * *Specific needs:* Scrollbars are breaking text alignment (Copilot), width overflows crash the app (Pi), and CRLF line-endings corrupt files (Kimi, Codex).
*   **Observability and Cost Tracking:** Developers are struggling with "black box" agents and unpredictable token consumption.
    * *Tools affected:* **Qwen Code**, **Claude Code**, **DeepSeek TUI**.
    * *Specific needs:* Users demand local diagnostics frameworks (Qwen), subagent cost visibility (Claude), and live API balance status bars (DeepSeek TUI).

## 4. Differentiation Analysis

*   **Claude Code** is uniquely differentiated by its heavy integration of the Model Context Protocol (MCP) and "Cowork" features. However, it currently faces distinct friction around aggressive AI safety classifiers (blocking legitimate dev work) and enterprise billing bugs.
*   **OpenAI Codex** is treating its CLI as a true desktop application peer, heavily investing in structured PR review workflows (the "Review Story" API). Its main differentiator is dealing with the complexities of local SQLite/JSONL state synchronization.
*   **GitHub Copilot CLI** acts as the baseline extension of the GitHub ecosystem. Unlike others focusing on agentic background tasks, Copilot is uniquely focused on raw terminal interaction ergonomics (IME support, scrollbars, bash hooks) and minimizing latency in local CLI environments.
*   **Gemini CLI** is leaning heavily into code-intelligent infrastructure, specifically proposing AST-aware file reading to reduce token noise. It is also pioneering explicit "destructive behavior prevention" guardrails to stop models from running dangerous shell commands.
*   **Qwen Code** is aggressively pivoting toward a "Mode B" headless daemon architecture (`qwen serve`), focusing on multi-channel adapters (Feishu/Weixin) and standardizing the Agent Client Protocol (ACP) for distributed, multi-client usage.
*   **DeepSeek TUI (CodeWhale)** is distinctively focused on cost optimization for local/cloud inference, proposing a "Dual" routing mode that splits heavy reasoning (Pro models) from simple tool calls (Flash models).

## 5. Community Momentum & Maturity

*   **Rapidly Iterating:** **GitHub Copilot CLI** and **DeepSeek TUI** are shipping rapid-fire releases to address immediate user friction. **Qwen Code** shows massive momentum in merging PRs to prep for its v0.16-alpha daemon release.
*   **Highly Active Contributors:** **Claude Code** and **OpenAI Codex** have mature communities generating massive issue volumes. Notably, Claude Code benefits from super-contributors (like *giruuuuj*) submitting large batches of documentation PRs to bridge knowledge gaps.
*   **Architectural Maturation:** **Pi** and **OpenCode** are showing maturity by refactoring core database schemas and HTTP timeout logic, moving away from MVP architectures toward stable production backends.
*   **Ecosystem Integration:** **Kimi Code CLI** has a quieter but highly focused community, specifically driving enterprise-grade maturity via the Agent Communication Protocol (ACP).

## 6. Trend Signals

1.  **Agentic CLI does not mean Autonomous Safety:** The widespread appearance of "destructive behavior prevention" requests (Gemini) and "AUTO mode denial caps" (Qwen) signals that developers do not trust AI agents with unrestricted system access. Safeguards and explicit permissions are becoming standard requirements.
2.  **The "Statefulness" Crisis:** The industry is hitting a wall regarding local session persistence. The transition of these tools from ephemitional chat interfaces to long-running background agents is resulting in corrupted databases (Codex), massive session JSON buildup (DeepSeek TUI), and data loss (Claude). Next-gen CLI tools must treat local file I/O with database-level reliability.
3.  **Observability as a Core Primitive:** Developers are flying blind. The rapid push for W3C trace propagation (Qwen), HTTP header exposure (OpenCode), and subagent cost tracking (Claude) indicates that standardizing LLM telemetry is the next major frontier for developer tooling.
4.  **Model Routing will become standard:** DeepSeek TUI's "Dual Mode" proposal is an early signal that developers will demand tools that dynamically route tasks to models based on capability and cost, rather than relying on a single monolithic model per session.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-05-25 | Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

Based on sustained community engagement, PR longevity, and ecosystem impact, here are the most closely watched Skills submissions:

| Rank | Skill | Author | Status |
|:---:|-------|--------|--------|
| 1 | **document-typography** | [PGTBoos](https://github.com/PGTBoos) | 🟢 Open |
| 2 | **ODT (OpenDocument)** | [GitHubNewbie0](https://github.com/GitHubNewbie0) | 🟢 Open |
| 3 | **frontend-design (revision)** | [justinwetch](https://github.com/justinwetch) | 🟢 Open |
| 4 | **skill-quality-analyzer & skill-security-analyzer** | [eovidiu](https://github.com/eovidiu) | 🟢 Open |
| 5 | **AURELION Skill Suite (kernel, advisor, agent, memory)** | [Chase-Key](https://github.com/Chase-Key) | 🟢 Open |
| 6 | **ServiceNow Platform** | [Vanka07](https://github.com/Vanka07) | 🟢 Open |
| 7 | **testing-patterns** | [4444J99](https://github.com/4444J99) | 🟢 Open |
| 8 | **shodh-memory** | [varun29ankuS](https://github.com/varun29ankuS) | 🟢 Open |

**Detailed Breakdown:**

1. **[PR #514 – document-typography](https://github.com/anthropics/skills/pull/514)**
   Functionality: Automated typographic quality control for AI-generated documents—fixes orphan word wraps, widow paragraphs at page bottoms, and numbering misalignment. Discussion highlights center on the fact that these typographic issues affect *every* document Claude generates, yet users rarely explicitly request fixes for them. Long active window (Mar 4–13, 2026) suggests iterative refinement.

2. **[PR #486 – ODT / OpenDocument](https://github.com/anthropics/skills/pull/486)**
   Functionality: Full-cycle OpenDocument support (.odt, .ods)—creation, template filling, parsing to HTML, and conversion. Triggers on any mention of ODT/ODS/ODF/LibreOffice. This PR had the longest update tail of any open PR (Mar 1 – Apr 14, 2026), signaling sustained review engagement. Significant because it addresses the open-standard alternative to Microsoft formats in a community that clearly values format diversity.

3. **[PR #210 – frontend-design clarity revision](https://github.com/anthropics/skills/pull/210)**
   Functionality: Not a new skill, but a comprehensive rewrite of the existing `frontend-design` skill for improved actionability. Ensures every instruction is executable by Claude in a single conversation. Represents the community's self-improvement impulse—making existing skills more token-efficient and behaviorally specific.

4. **[PR #83 – skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)**
   Functionality: Two "meta-skills" for the marketplace. The **quality analyzer** evaluates skills across 5 dimensions (structure, documentation, examples, resources, and more). The **security analyzer** audits skills for trust/safety issues. Created Nov 2025, still active in Jan 2026—this is a foundational ecosystem health contribution, essentially "skills for evaluating skills."

5. **[PR #444 – AURELION Suite](https://github.com/anthropics/skills/pull/444)**
   Functionality: A four-skill cognitive framework ecosystem: *aurelion-kernel* (5-floor structured thinking templates), *aurelion-advisor*, *aurelion-agent*, and *aurelion-memory*. Represents the "agentic AI" trend of giving Claude persistent cognitive scaffolding and memory. Updated as recently as May 6, 2026.

6. **[PR #568 – ServiceNow Platform](https://github.com/anthropics/skills/pull/568)**
   Functionality: Broad enterprise-platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM/PPM, Vulnerability Response, Security Incident Response, CSDM, and IntegrationHub. Reflects strong enterprise demand for ERP/platform-specific skills.

7. **[PR #723 – testing-patterns](https://github.com/anthropics/skills/pull/723)**
   Functionality: Full-stack testing guidance using the Testing Trophy model—unit testing (AAA pattern), React component testing, integration testing, and E2E patterns. Addresses a major gap in code-quality skills.

8. **[PR #154 – shodh-memory](https://github.com/anthropics/skills/pull/154)**
   Functionality: Persistent memory system for AI agents that maintains context across conversations. Includes proactive context retrieval, rich memory structuring, and cross-session recall. An early (Dec 2025) entry in the increasingly popular "agent memory" category.

---

## 2. Community Demand Trends

Distilled from the highest-engagement Issues:

| Trend | Evidence | Demand Signal |
|-------|----------|---------------|
| **Org-wide skill sharing & distribution** | [Issue #228](https://github.com/anthropics/skills/issues/228) (13 comments, 7 👍) | Teams want centralized skill libraries, not manual file-sharing via Slack/Teams. Strongest feature request in the repo. |
| **Security & namespace trust boundaries** | [Issue #492](https://github.com/anthropics/skills/issues/492) (6 comments), [Issue #1175](https://github.com/anthropics/skills/issues/1175) | Community skills impersonating the `anthropic/` namespace; concerns about embedding access-control logic in SKILL.md for enterprise docs (SharePoint). Security auditing is a top concern. |
| **Skill evaluation tooling & reliability** | [Issue #556](https://github.com/anthropics/skills/issues/556) (8 comments), [Issue #202](https://github.com/anthropics/skills/issues/202) (8 comments, closed) | `run_eval.py` has a 0% trigger rate; `skill-creator` is too verbose and misnamed. The community urgently wants the skill development/evaluation toolchain to actually work. |
| **Plugin deduplication & packaging** | [Issue #189](https://github.com/anthropics/skills/issues/189) (6 comments, 8 👍), [Issue #1087](https://github.com/anthropics/skills/issues/1087) | `document-skills` and `example-skills` install identical content; plugins load all skills instead of declared subsets. Packaging hygiene is a blocking pain point. |
| **MCP integration & context optimization** | [Issue #16](https://github.com/anthropics/skills/issues/16) (4 comments), [Issue #1102](https://github.com/anthropics/skills/issues/1102) | Expose Skills as MCPs for standardized APIs; MCP returns uncompressed data causing context window congestion. |
| **Cross-platform compatibility (Windows)** | [PR #1099](https://github.com/anthropics/skills/pull/1099), [PR #1050](https://github.com/anthropics/skills/pull/1050) | `run_eval.py` crashes on Windows; `subprocess.Popen` fails with `[WinError 2]`. Windows users are a significant underserved segment. |
| **Enterprise / platform-specific skills** | [PR #568 ServiceNow](https://github.com/anthropics/skills/pull/568), [PR #181 SAP-RPT-1-OSS](https://github.com/anthropics/skills/pull/181), [PR #190 n8n-builder](https://github.com/anthropics/skills/pull/190) | Strong demand for skills targeting specific enterprise platforms (SAP, ServiceNow, n8n, SharePoint). |

---

## 3. High-Potential Pending Skills

These PRs are actively maintained with recent updates and address clear gaps—candidates most likely to merge next:

| PR | Skill | Why It's Ready | Last Active |
|----|-------|----------------|-------------|
| [PR #538](https://github.com/anthropics/skills/pull/538) | **PDF case-sensitivity fix** | Pure bugfix (8 file-reference mismatches), low risk, high impact on Linux systems | Apr 29, 2026 |
| [PR #541](https://github.com/anthropics/skills/pull/541) | **DOCX tracked-change ID collision fix** | Fixes document corruption from `w:id` namespace collisions in OOXML—narrow, well-scoped | Apr 16, 2026 |
| [PR #539](https://github.com/anthropics/skills/pull/539) | **skill-creator YAML validation** | Pre-parse validation for unquoted descriptions with `:` — prevents silent YAML failures | Apr 16, 2026 |
| [PR #1099](https://github.com/anthropics/skills/pull/1099) | **Windows eval.py fix** | Directly resolves [Issue #556](https://github.com/anthropics/skills/issues/556) (8 comments, 6 👍) — high demand | May 24, 2026 |
| [PR #1050](https://github.com/anthropics/skills/pull/1050) | **Windows subprocess + encoding** | Companion to #1099; both are 1-line fixes for Windows compatibility | May 24, 2026 |
| [PR #509](https://github.com/anthropics/skills/pull/509) | **CONTRIBUTING.md** | Addresses [Issue #452](https://github.com/anthropics/skills/issues/452) — raises repo community health score from 25% | Mar 19, 2026 |
| [PR #486](https://github.com/anthropics/skills/pull/486) | **ODT skill** | Longest review cycle (6 weeks); ODT fills a major open-standard document gap | Apr 14, 2026 |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for reliable, enterprise-grade document-format skills (ODT, PDF, DOCX, typography) and the tooling infrastructure to evaluate, secure, and share them across teams.**

---

# Claude Code Community Digest — 2026-05-25

## 1. Today's Highlights

No new releases were shipped in the last 24 hours, but the community was highly active around several critical regressions in v2.1.150, including a potential server-side system prompt injection vector and a Cowork update that completely broke MCP tool binding on macOS. Community contributor **giruuuuj** submitted a large batch of documentation PRs addressing troubleshooting gaps for known issues, signaling strong community-driven knowledge-sharing. Multiple reports also surfaced around Claude Max billing failures and aggressive Usage Policy false positives affecting legitimate security research workflows.

## 2. Releases

No new releases in the last 24 hours. The community remains on v2.1.150, which continues to generate regression reports (see Hot Issues below).

## 3. Hot Issues

1. **[#62061 — Server-side system prompt injection via `tengu_heron_brook` feature flag](https://github.com/anthropics/claude-code/issues/62061)** (👍 36)
   A security-critical report: v2.1.150 allegedly introduces a server-side system prompt injection through a feature flag. Rapidly gaining upvotes and closed quickly—suggests the team is aware. Community reaction is sharply focused on transparency and trust.

2. **[#62072 — Cowork on macOS 1.8555.2: zero MCP tools bind after auto-update](https://github.com/anthropics/claude-code/issues/62072)**
   A severe regression where the auto-update to 1.8555.2 broke all MCP tool loading in Cowork sessions (`.mcpb`, SDK bridge, Custom Connectors, project `.mcp.json`). The spawn pipeline is reportedly missing the `--mcp-config` flag. Blocking for any Cowork+MCP workflow on macOS.

3. **[#60334 — Image processing failures burning conversation tokens (closed)](https://github.com/anthropics/claude-code/issues/60334)** (👍 11, 17 comments)
   Users report recurring `API Error: image could not be processed` messages that consume ~70% of the 5-hour rate-limit window—even in conversations without images. Represents a significant cost and reliability concern.

4. **[#46140 — MCP OAuth completes but Bearer token never sent](https://github.com/anthropics/claude-code/issues/46140)** (👍 5, 16 comments)
   A critical auth bug: the full OAuth 2.1 + PKCE flow succeeds, but the Bearer token is never included in subsequent MCP requests. Blocks all third-party MCP integrations relying on OAuth on claude.ai.

5. **[#62071 — Usage Policy classifier stuck in blocked state for kernel security work](https://github.com/anthropics/claude-code/issues/62071)** (5 comments)
   A Linux kernel engineer doing defensive security research (fuzzing networking subsystems) is repeatedly blocked by cyber-related safeguards—even innocuous follow-ups like "Hi" trigger the block. Highlights over-aggressive AUP classifier tuning.

6. **[#61056 — False Usage Policy violations triggering cyber safeguards](https://github.com/anthropics/claude-code/issues/61056)** (👍 4, 2 comments)
   Similar to #62071—another report of the Usage Policy classifier firing incorrectly. Pattern suggests a systemic issue with the cyber-related safeguard threshold affecting multiple users.

7. **[#41458 — `cleanupPeriodDays: 99999` ignored, 490 sessions silently deleted](https://github.com/anthropics/claude-code/issues/41458)** (👍 1, 10 comments, tagged `data-loss`)
   Despite explicitly setting a 99999-day retention period, Claude Code silently purged 490 sessions. This is a data-loss bug that undermines trust in session persistence configuration. Remains open.

8. **[#16561 — Parse compound Bash commands for granular permission matching](https://github.com/anthropics/claude-code/issues/16561)** (👍 154, 39 comments)
   The highest-upvote open issue in this batch. Compound commands (`&&`, `|`, `;`, `||`) are evaluated as a single permission unit, forcing approval even when all individual components are whitelisted. A long-standing UX pain point for power users.

9. **[#18435 — Multi-account profile switching in Claude Desktop](https://github.com/anthropics/claude-code/issues/18435)** (👍 529, 101 comments)
   The single most upvoted issue in the digest (529 👍). Request for managing multiple Claude accounts with easy profile switching. Strong community demand from users juggling work/personal/project-specific accounts.

10. **[#55124 — Cowork Chrome extension: JS permission prompts fire on every call](https://github.com/anthropics/claude-code/issues/55174)** (👍 1, 4 comments)
    Part of a cluster of Cowork permission persistence bugs (#46205, #51267). "Always allow" approvals don't stick, causing repetitive prompts during manual tasks. A UX blocker for Cowork automation flows.

## 4. Key PR Progress

1. **[#62023 — Fix `@claude` workflow trigger word-boundary false positives](https://github.com/anthropics/claude-code/pull/62023)** by DeliLevente99
   Fixes the GitHub Actions `@claude` trigger to use word-boundary matching, preventing false triggers from `@claude-*` plugin references. Practical CI hygiene fix.

2. **[#61969 — Proposal: CLI-desktop conversation sync](https://github.com/anthropics/claude-code/pull/61969)** by giruuuuj
   Feature proposal for syncing CLI conversation history (`~/.claude/projects/**/*.jsonl`) with the Claude Desktop app. Addresses a long-standing discoverability gap between interfaces.

3. **[#61968 — Docs: AskUserQuestion rewind checkpoint gap](https://github.com/anthropics/claude-code/pull/61968)** by giruuuuj
   Documents why `AskUserQuestion` answers don't create rewind checkpoints (they arrive as `tool_result` blocks, not user-message boundaries) and provides an echo-back workaround.

4. **[#61966 — Docs: Unauthorized phantom messages in tmux](https://github.com/anthropics/claude-code/pull/61966)** by giruuuuj
   Troubleshooting entry for phantom unauthorized messages in tmux sessions, caused by forwarded control sequences interpreted as keypresses. Workaround: disable focus-events.

5. **[#61964 — Docs: SSH remote failure from corrupted plugin archive](https://github.com/anthropics/claude-code/pull/61964)** by giruuuuj
   Documents a failure mode where auto-uploaded plugins/skills during SSH remote sessions have corrupted archives, causing silent failures.

6. **[#61708 — Docs: Invalid model identifier after update](https://github.com/anthropics/claude-code/pull/61708)** by giruuuuj
   Covers the 400 model identifier error caused by `AWS_REGION` + `CLAUDE_CODE_USE_BEDROCK` env var conflicts between Bedrock region resolution and Anthropic API auth.

7. **[#61697 — Docs: Background tasks silently relaunched as duplicates](https://github.com/anthropics/claude-code/pull/61697)** by giruuuuj
   Documents the 90–120 second duplicate relaunch issue when context compaction strips task metadata. Proposes a three-layer fix approach from community analysis.

8. **[#61702 — Docs: Stats cache freeze (`lastComputedDate` stagnation)](https://github.com/anthropics/claude-code/pull/61702)** by giruuuuj
   Addresses the `~/.claude/stats-cache.json` freeze caused by three compounding bugs. Proposes cache versioning with auto-migration.

9. **[#61696 — Docs: `system-reminder` blocks leaking into WebFetch results](https://github.com/anthropics/claude-code/pull/61696)** by giruuuuj
   Documents a v2.1.150 regression where TaskCreate/TaskUpdate nudge blocks leak into WebFetch output. Includes downgrade workaround.

10. **[#61956 — Fix state file path in ralph-wiggum plugin help](https://github.com/anthropics/claude-code/pull/61956)** by xodn348
    Corrects a misleading path reference (`.claude/.ralph-loop.local.md` → `.claude/ralph-loop.local.md`) in the ralph-wiggum plugin help docs.

## 5. Feature Request Trends

- **Multi-account / profile management** (#18435, 529 👍) — The #1 most-upvoted issue. Users need seamless switching between work, personal, and client-specific Claude accounts within Desktop.
- **Granular Bash permission parsing** (#16561, 154 👍) — Compound command splitting for per-component permission evaluation. A top developer-experience request.
- **Message timestamps in TUI** (#2441, 46 👍) — Persistent request to timestamp all interactions for multi-session time-tracking.
- **"Answer Now" for long-running inferences** (#61928) — Request for an interrupt-to-answer mechanism when Claude has been thinking for 5+ minutes.
- **Subagent cost/token visibility** (#60591) — Aggregated cost and token reporting from subagent and agent-team runs exposed via statusline.
- **Rate limit transparency in statusline** (#62082) — Exposing Sonnet-specific weekly rate limits for Claude Max plan users in the `/statusline` hook JSON.

## 6. Developer Pain Points

- **Cowork permission persistence is broken**: A cluster of issues (#46205, #55124, #51267) confirms that "Always allow" approvals don't persist across Cowork sessions and Chrome extension JS calls, forcing repetitive manual approvals. This undermines Cowork's automation value proposition.

- **Session data loss continues unabated**: Both #41458 (retention config ignored) and #59248 (silent cleanup with no recovery) represent data-loss scenarios where users lose conversation transcripts despite explicit configuration. No team response or fix is visible yet.

- **Usage Policy over-classification**: Multiple reports (#62071, #61056) indicate the cyber-related safeguard classifier is too aggressive, blocking legitimate security research (kernel fuzzing, defensive work). Once triggered, the classifier gets "stuck," refusing even trivial follow-up messages.

- **MCP OAuth is fundamentally broken on web**: #46140 shows the full OAuth flow completes but the token is never sent. Combined with #62072 (zero MCP tools binding after auto-update) and #62058 (mid-session `notifications/tools/list_changed` ignored), the MCP ecosystem reliability story is degrading.

- **Billing and subscription issues persist**: #55266 (Max 5x → 20x upgrade failure) and #43276 (Max Plan users blocked from long-context requests) indicate ongoing friction in the Claude Max billing pipeline—particularly problematic for power users on the highest tier.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-25

## 1. Today's Highlights
No new software releases were published today. Instead, the core development team pushed a massive wave of internal pull requests aimed at overhauling the TUI experience, introducing a new "Review Story" diff navigation API, and improving context compaction. Meanwhile, the community continues to grapple with severe Desktop app growing pains, particularly around Windows OS performance, bloated skills/marketplace listings, and session state corruption.

## 2. Releases
*No new releases were recorded in the last 24 hours.*

## 3. Hot Issues

1. **Phone number verification breaks SSO ([#20161](https://github.com/openai/codex/issues/20161))**
   *Why it matters:* With 155 comments and 102 upvotes, this is the most active issue. Users are completely locked out of their accounts when logging in via SSO on new devices due to an enforced, broken phone verification loop.
   *Community Reaction:* High frustration over blocked access, with users reporting stalled workflows across multiple devices.

2. **Windows 11 performance degradation with long threads ([#21299](https://github.com/openai/codex/issues/21299))**
   *Why it matters:* The Desktop app becomes entirely unresponsive in long chat threads, rendering the client useless for extended pair-programming sessions.
   *Community Reaction:* Heavily upvoted by Windows developers who report consistent UI freezes.

3. **Desktop app freezing with image-heavy projects ([#21232](https://github.com/openai/codex/issues/21232))**
   *Why it matters:* A critical blocker for full-stack developers utilizing Codex's image generation capabilities, as rendering generated images pushes the app into a "Not Responding" state.

4. **Conversation history arbitrarily truncated at 50 sessions ([#21128](https://github.com/openai/codex/issues/21128))**
   *Why it matters:* The Desktop UI silently drops older project conversations outside a global window of 50. Users report losing vital working memory and context for long-running projects.

5. **Windows WSL CRLF/LF migration failures ([#23777](https://github.com/openai/codex/issues/23777))**
   *Why it matters:* A tough-to-debug startup failure where line-ending mismatches cause SQLx migration checksums to fail, completely breaking the app-server for Windows/WSL users.

6. **UI stuck in "Thinking" loop, leading to invisible turns ([#24287](https://github.com/openai/codex/issues/24287))**
   *Why it matters:* The app accepts a prompt but gets permanently stuck. Stopping the process fails, and a restart causes the active turn to completely disappear, resulting in data/prompt loss.

7. **CLI reporting false rate limits for Business seats ([#16909](https://github.com/openai/codex/issues/16909))**
   *Why it matters:* Business users are hitting a hard block on CLI usage despite their dashboard showing no rate limits applied to their workspace seats.

8. **Raw ANSI escape sequences rendering in Windows Terminal ([#23740](https://github.com/openai/codex/issues/23740))**
   *Why it matters:* A recent regression in CLI versions 0.131.0+ makes the TUI completely unreadable on Windows Terminal, forcing users to downgrade to 0.130.0.

9. **Massively bloated Skills menu ([#24361](https://github.com/openai/codex/issues/24361))**
   *Why it matters:* Following a recent sync, the Desktop skills/app listing now shows hundreds of irrelevant marketplace/consumer apps (e.g., Korean payment apps), burying actual developer tools.

10. **NUL bytes corrupting session resumption ([#24369](https://github.com/openai/codex/issues/24369))**
    *Why it matters:* Edge-case persistence bug where embedded NUL bytes in persisted function calls cause the Responses API to throw a 400 error upon resume, permanently locking the session.

## 4. Key PR Progress

1. **feat(review-story): add reusable review story API ([#24350](https://github.com/openai/codex/pull/24350))**
   Introduces a foundational API to convert large flat diffs into an ordered, model-authored narrative, making complex code reviews significantly easier to navigate.

2. **feat(review-story): add interactive story cockpit ([#24358](https://github.com/openai/codex/pull/24358))**
   Builds the TUI client for the Review Story API, allowing developers to step through complex PR reviews directly in their terminal via the `/story` command.

3. **feat(tui): add transcript search [3 of 3] ([#23539](https://github.com/openai/codex/pull/23539))**
   Completes the TUI transcript overlay trilogy by adding `Ctrl+F` search capabilities, allowing developers to find arbitrary text inside massive session histories.

4. **add compaction metadata to turn headers ([#24368](https://github.com/openai/codex/pull/24368))**
   Attaches vital dispatch metadata (like `window_id`) to remote and local context compaction requests, an infrastructure step required for better debugging of context limits.

5. **reject empty base64 image inputs ([#24376](https://github.com/openai/codex/pull/24376))**
   Fixes a crash loop by intercepting invalid/empty `data:image/*;base64,` payloads and mapping them to graceful `InvalidImageRequest` errors instead of failing outright.

6. **fix(tui): avoid modifyOtherKeys for unknown tmux formats ([#24371](https://github.com/openai/codex/pull/24371))**
   Resolves a frustrating regression where running Codex inside tmux/iTerm2 caused broken keyboard input capture due to aggressive extended-key mode fallbacks.

7. **Allow promptless exec resume for active goals ([#24321](https://github.com/openai/codex/pull/24321))**
   Fixes a UX annoyance where resuming an active goal required a dummy prompt like "continue". The daemon can now seamlessly resume execution without logging redundant user turns.

8. **Respect hook trust bypass during TUI startup ([#24317](https://github.com/openai/codex/pull/24317))**
   Ensures that headless/automated environments using `--dangerously-bypass-hook-trust` do not get unexpectedly blocked by interactive TUI trust prompts during startup.

9. **Add doctor thread inventory audit ([#24305](https://github.com/openai/codex/pull/24305))**
   Enhances `codex doctor` to detect mismatches between the SQLite state DB and durable JSONL rollout files, aiming to solve the "missing sessions" issue reported by Desktop users.

10. **Avoid repeated marketplace upgrades for alternate layouts ([#24320](https://github.com/openai/codex/pull/24320))**
    Fixes an infinite loop/unneeded sync bug where alternate marketplace plugin layouts (like `.claude-plugin`) were triggering redundant Git auto-upgrades.

## 5. Feature Request Trends
*   **Configurable Local Storage:** Users heavily desire the ability to explicitly configure where Git worktrees and local project sessions are stored, rather than relying on opaque default directories ([#10599](https://github.com/openai/codex/issues/10599)).
*   **Transcript & Context Management:** There is a strong demand for better session longevity tools—specifically, preventing long threads from breaking context windows during compaction ([#24002](https://github.com/openai/codex/issues/24002), [#23589](https://github.com/openai/codex/issues/23589)).
*   **Refined Skills/Marketplace Isolation:** Users are asking for stricter sandboxing or configuration options for the TUI's `$` skills menu to prevent irrelevant consumer ecosystem apps from flooding their developer workspace ([#24145](https://github.com/openai/codex/issues/24145)).

## 6. Developer Pain Points
*   **Windows Performance & Stability:** The Windows Desktop client remains highly unstable compared to its macOS counterpart. Long threads, image generation, and WSL environment integrations frequently cause deep freezes, stuttering, and startup crashes.
*   **Compaction & Context Overflow:** Context compaction continues to be a brittle experience. Developers frequently encounter `context_length_exceeded` errors when resuming long-running sessions, often forcing them to downgrade CLI versions to regain stability.
*   **Session State & Data Loss:** The transition between SQLite and JSONL storage in the app-server appears to cause frequent state corruption. Developers are frustrated by "invisible" turns after restarts, lost conversation histories (the "recent-50" limit), and permanent session resume failures.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-25

## 1. Today's Highlights
No new releases were shipped today, but the community remains highly active in hardening Gemini CLI's core infrastructure. The focus is heavily on fixing critical stability bottlenecks—including subagent delegation flaws, memory system optimizations, and PTY/shell execution hangs—alongside a concerted push to implement AST-aware tools for enhanced codebase mapping. 

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues
1. **[Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409)**: A P1 bug where the CLI hangs forever when deferring to the generalist agent. Highlyfrustrating for users (👍 8), with current workarounds requiring manual prompts to disable sub-agents.
2. **[Subagent falsely reports GOAL success after hitting MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323)**: A critical observability bug where interrupted subagents mask their failures as successful goal completions, silently breaking agent pipelines.
3. **[Shell command execution gets stuck on "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)**: A P1 execution bug where simple CLI commands hang post-completion. A direct pain point for daily users (👍 3).
4. **[Gemini doesn't use custom skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**: Highlights architectural limitations in the agent's routing/dispatch logic, requiring explicit user prompts to trigger custom skills.
5. **[Auto Memory security and retry loop flaws](https://github.com/google-gemini/gemini-cli/issues/26522)**: Part of a cluster of issues highlighting that the Auto Memory extractor leaks secrets into model context before redaction and gets stuck retrying low-signal sessions indefinitely.
6. **[Silent dropping of invalid Auto Memory inbox patches](https://github.com/google-gemini/gemini-cli/issues/26523)**: Exposes data loss risks where malformed patches are silently skipped rather than quarantined, making debugging memory behaviors incredibly difficult.
7. **[400 errors when registering > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)**: A hard blocker for advanced users heavily utilizing MCP servers, hitting API limits because the agent doesn't dynamically scope enabled tools.
8. **[AST-aware file reads, search, and mapping investigation](https://github.com/google-gemini/gemini-cli/issues/22745)**: A major feature EPIC tracking AST integration (e.g., AST grep, tilth) to reduce token noise and improve codebase navigation accuracy.
9. **[Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**: A P1 compatibility bug causing the browser agent to crash on Linux Wayland environments.
10. **[Destructive behavior prevention](https://github.com/google-gemini/gemini-cli/issues/22672)**: Users are requesting built-in guardrails to prevent the model from casually executing dangerous commands like `git reset --force` or dropping databases.

## 4. Key PR Progress
1. **[Prevent PTY memory leak by synchronously deleting active entries](https://github.com/google-gemini/gemini-cli/pull/27154)**: Fixes a critical FD/memory leak in `ShellExecutionService` caused by improper garbage collection of headless terminals.
2. **[Ensure non-interactive shell respects `enableInteractiveShell: false`](https://github.com/google-gemini/gemini-cli/pull/27418)**: Improves native bridge stability by properly handling non-UTF-8 bytes and heap limits in automated/agent loops.
3. **[Serialize concurrent edits to the same file](https://github.com/google-gemini/gemini-cli/pull/27153)**: Resolves a dangerous race condition where `Promise.all` scheduling caused concurrent file writes to overwrite each other's changes.
4. **[Bypass routing classifiers to prevent orphaned function response errors](https://github.com/google-gemini/gemini-cli/pull/27389)**: Fixes a `400 Bad Request` API error caused by history pruning logic separating function calls from their responses.
5. **[Prevent model fabrication when read_file returns binary content](https://github.com/google-gemini/gemini-cli/pull/27412)**: Stops the model from inventing "thoughts" about binary file contents (like PDFs) when it actually lacks the ability to read them.
6. **[Upgrade PTY dependencies](https://github.com/google-gemini/gemini-cli/pull/27147)**: Picks up a crucial upstream macOS `/dev/ptmx` leak fix from the Node.js ecosystem.
7. **[Add `/compress` slash command for ACP](https://github.com/google-gemini/gemini-cli/pull/27151)**: Brings context-window history compaction to ACP sessions, preventing hard context limits during long-running automated tasks.
8. **[Make `--skip-trust` actually load workspace settings](https://github.com/google-gemini/gemini-cli/pull/27137)**: Fixes a mismatch between documentation and behavior where workspace settings (hooks, MCP servers) were dropped even with the flag enabled.
9. **[Prevent exponential token leak in StateSnapshotAsyncProcessor](https://github.com/google-gemini/gemini-cli/pull/26758)**: Fixes a massive context bug where episodic graph nodes weren't filtered after summarization, causing exponential token scaling.
10. **[Add command validation to prevent natural language in shell commands](https://github.com/google-gemini/gemini-cli/pull/27347)**: Fixes a TUI bug where raw natural language input from status lines was accidentally executed or saved as literal shell commands.

## 5. Feature Request Trends
*   **Advanced Codebase Mapping**: Strong momentum toward integrating AST-aware tooling and CLIs (like `tilth`, `glyph`, and `ast-grep`) to enable precise, token-efficient code reading and searching.
*   **Sub-agent Observability and Control**: Users need real-time transparency and granular termination control over delegated subagents, rather than the current "black box" execution model.
*   **Local Agent Backgrounding**: The ability to send exploration, building, and linting sub-agents to the background (e.g., via `Ctrl+B`) to keep the main interactive thread unblocked.
*   **Enhanced Agent Self-Awareness**: Requests to improve the model's intrinsic knowledge of its own CLI flags, configurations, and hotkeys so it can guide users effectively.

## 6. Developer Pain Points
*   **Agent Reliability & Deadlocks**: Developers are frequently experiencing hard hangs during subagent delegation and shell execution, requiring manual process kills.
*   **Context & Memory Mismanagement**: The `StateSnapshot` and `Auto Memory` systems are currently sources of frustration due to silent patch failures, indefinite retry loops, and exponential token leaks.
*   **Unpredictable Tool Routing**: The model ignores custom skills/MCP tools unless explicitly prompted, yet simultaneously attempts to use disabled subagents, indicating flawed dispatch logic.
*   **Unsafe Default Behaviors**: The agent leans toward brute-forcing solutions (e.g., `git reset --force`, creating scattered temp files) rather than utilizing safe, deterministic tooling.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-25

## 1. Today's Highlights
A flurry of releases (v1.0.52 through v1.0.54) dropped over the weekend, addressing terminal rendering bugs—most notably multiline prompt clipping and a bash shell hang caused by PS0/PROMPT_COMMAND. However, the new vertical scrollbar feature introduced in v1.0.52 has immediately sparked reports of text misalignment and resize/reflow clipping, indicating that rendering stability remains a core challenge. Meanwhile, the community is actively flagging Input Method Editor (IME) bugs and MCP UX friction.

## 2. Releases

### **v1.0.54** (2026-05-24)
- General fixes and changes (details pending).

### **v1.0.53** (2026-05-24)
- **Multiline prompts display fully** without content clipping or selection offset.
- `/skills` picker now correctly honors `--config-dir` when saving skill preferences (closes [#2926](https://github.com/github/copilot-cli/issues/2926)).
- **Bash shell sessions no longer hang** when `PS0` or `PROMPT_COMMAND` is set in the environment (closes [#2350](https://github.com/github/copilot-cli/issues/2350)).
- Minor patch iterations (1.0.53-0 through 1.0.53-2) rolled out additional fixes.

### **v1.0.52** (2026-05-23)
- Non-interactive subcommands (`plugin list`, `mcp list`, `help`, `version`) no longer consume `stdin`.
- **Added a vertical scrollbar with mouse drag support** to the main conversation view.
- Switching to Autopilot mode no longer triggers unexpected permission prompts for tool, path, or URL access.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#3502 — Zhuyin IME preedit text accumulates in lower-right corner (macOS)](https://github.com/github/copilot-cli/issues/3502) | CJK input is critical for international users. 16 👍s signal broad impact; preedit text rendering in the wrong location makes Chinese input nearly unusable. |
| 2 | [#2317 — `~/.bash_history` truncated after Copilot executes a Bash command](https://github.com/github/copilot-cli/issues/2317) | Data loss of shell history is a serious trust issue. 8 👍s; root cause traces back to incomplete fixes in earlier issues. |
| 3 | [#3501 — Scroll bar makes text unalign (Windows)](https://github.com/github/copilot-cli/issues/3501) | The new scrollbar from v1.0.52 broke text rendering on Windows consoles. 5 👍s in under 24h. |
| 4 | [#3497 — Terminal output clipped after resize/reflow, hidden text unreachable](https://github.com/github/copilot-cli/issues/3497) | Directly related to the new scrollbar; users losing access to AI responses after terminal resize. 6 👍s. |
| 5 | [#3333 — Android/Termux support broken since v1.0.48 (glibc dependency)](https://github.com/github/copilot-cli/issues/3333) | The Rust native addon (`runtime.node`) hard-depends on glibc, blocking non-glibc environments entirely. Affects mobile/dev-on-device workflows. |
| 6 | [#3414 — Paste regression on GNOME Wayland in 1.0.49](https://github.com/github/copilot-cli/issues/3414) | Wayland is the modern default on Ubuntu/Fedora; paste is a fundamental interaction. Regression from v1.0.48. |
| 7 | [#3426 — Highlighting broken in slash command suggestions (CLOSED)](https://github.com/github/copilot-cli/issues/3426) | Accessibility/theming issue where highlighted suggestion text was nearly unreadable; resolved quickly. |
| 8 | [#3496 — Copy/Paste broken when selecting single-line text from Timeline (Windows)](https://github.com/github/copilot-cli/issues/3496) | Clipboard handling regression on Windows; multi-line works but single-line fails, disrupting common workflows. |
| 9 | [#3500 — Steering messages disappear while pending](https://github.com/github/copilot-cli/issues/3500) | Mid-session steering input appears lost during processing, causing user confusion about whether the command was received. |
| 10 | [#3486 — `/mcp show` unable to scroll all tools for an MCP server](https://github.com/github/copilot-cli/issues/3486) | The MCP tool browser truncates long tool lists; another scrollbar-related UX gap. |

---

## 4. Key PR Progress
No pull requests were updated in the last 24 hours. The development focus appears to be on rapid point releases addressing the rendering and shell integration regressions noted above.

---

## 5. Feature Request Trends

1. **Built-in creation commands** — [#3503](https://github.com/github/copilot-cli/issues/3503) requests `/create-*` skills (agents, hooks, prompts) parity with VS Code's graphical scaffolding.
2. **MCP UX polish** — [#2956](https://github.com/github/copilot-cli/issues/2956) (3 👍) asks for a "Disable MCP" option in the interactive `/mcp show` menu; [#3269](https://github.com/github/copilot-cli/issues/3269) highlights confusing "Authorization successful" messages during failed flows.
3. **Better developer documentation** — [#812](https://github.com/github/copilot-cli/issues/812) requests explicit documentation that `AGENTS.md` is not reloaded after start.
4. **Mobile rendering support** — [#3498](https://github.com/github/copilot-cli/issues/3498) reports that remote CLI sessions don't render in GitHub Mobile (Android).

---

## 6. Developer Pain Points

- **Terminal rendering instability**: The new scrollbar feature (v1.0.52) has triggered a cascade of text alignment, clipping, and reflow issues across Windows, Linux, and macOS. This is the dominant pain point right now.
- **Input method (IME) support**: CJK users are effectively blocked by preedit rendering bugs—high 👍 counts indicate strong community frustration.
- **Platform regressions from native addons**: The Rust-based `runtime.node` addon broke Termux/Android and may signal future compatibility constraints on non-glibc systems.
- **Clipboard & paste regressions**: Separate paste bugs on Wayland and Windows undermine basic daily workflows.
- **Silent failures in the plugin/skill ecosystem**: [#3494](https://github.com/github/copilot-cli/issues/3494) reports that `SKILL.md` files with descriptions exceeding 1024 characters are silently dropped with no warning or error, making debugging difficult for plugin developers.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the community digest for Kimi Code CLI based on the provided data. 

*Note: As the provided dataset contains 0 Issues and only 7 total Pull Requests, the "Hot Issues", "Feature Request Trends", and "Developer Pain Points" sections have been adapted to reflect the actionable insights derived directly from the active Pull Requests.*

---

### 1. Today's Highlights
Community development on May 24, 2026, was highly active, with multiple contributors pushing critical fixes and features. The most prominent focus was on hardening the **Agent Communication Protocol (ACP)** integration, including proper message streaming, session history management, and protocol-level permission handling. Additionally, significant cross-platform stability improvements were proposed to resolve persistent line-ending (CRLF/LF) file corruption issues.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
*There are 0 updated issues to report for today.* However, several open Pull Requests referenced historical issues that remain highly relevant to the community:
*   **Line Ending Corruption (Refs #1952 & #2191):** Users continue to experience issues where Kimi CLI silently converts CRLF to LF on Windows, corrupting files.
*   **ACP Permission Modes (Refs #1414):** Developers utilizing Kimi CLI as a backend agent require the ability to dynamically switch permission modes during an active ACP session.

### 4. Key PR Progress

*   **[#2359 fix(acp): assign message ids to streamed content](https://github.com/MoonshotAI/kimi-cli/pull/2359)** by *huntharo*
    Updates ACP SDK to v0.10.0 support. This ensures that streamed content includes `messageId` values, which is critical for external agent orchestration (like PwrAgent).
*   **[#2363 fix(acp): replay loaded session history](https://github.com/MoonshotAI/kimi-cli/pull/2363)** by *huntharo*
    Builds on #2359 to ensure that ACP `session/load` correctly replays restored history. This is essential for maintaining stateful context when resuming agent tasks.
*   **[#2364 feat(acp): support permission mode switching](https://github.com/MoonshotAI/kimi-cli/pull/2364)** by *huntharo*
    Implements protocol-level ACP permission mode switching for Kimi sessions, allowing dynamic elevation or restriction of tool-use permissions mid-session.
*   **[#2362 fix: retain the original line break style of the file and fix cross-platform CRLF/LF issues](https://github.com/MoonshotAI/kimi-cli/pull/2362)** by *Sisyphbaous-DT-Project*
    A vital fix for Windows developers. It patches `StrReplaceFile` and `WriteFile` to stop the silent conversion of `\r\n` to `\n` by bypassing Python's universal newlines mode.
*   **[#2361 [codex] docs: clarify hooks notification example](https://github.com/MoonshotAI/kimi-cli/pull/2361)** by *Randy-sin*
    Replaces a non-functional `Notification` hook example in the documentation, explicitly clarifying that matchers use notification types, not sink names.
*   **[#2335 docs: fix Notification hook matcher example](https://github.com/MoonshotAI/kimi-cli/pull/2335)** by *he-yufeng*
    A parallel documentation fix that removes the broken `permission_prompt` matcher and updates the hook config fixture with functional examples for background-task notifications.
*   **[#2358 fix(build): correct module-name type in pyproject.toml files](https://github.com/MoonshotAI/kimi-cli/pull/2358)** by *60ke*
    A build-system regression fix that corrects the `module-name` field in `[tool.uv.build-backend]` to use the proper string syntax for single-module packages.

### 5. Feature Request Trends
Based on the current PR pipeline, the strongest feature trend is **external agent interoperability**. Developers are actively building tools that consume Kimi CLI via the Agent Communication Protocol (ACP). To support this, the community is driving features that enable stateful session management, reliable streaming identifiers, and programmatic permission handling.

### 6. Developer Pain Points
*   **ACP Maturity:** Integrators (like PwrAgent) are finding that while ACP support exists, it lacks certain fundamental features required for production use, necessitating community patches for basic message routing and session loading.
*   **Cross-Platform File I/O:** The CLI's internal reading/writing tools still struggle with non-Unix environments. Python's default `readtext()` behavior silently mutating line endings remains a major friction point for Windows-centric developers.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-25

## 1. Today's Highlights
The OpenCode community is actively troubleshooting severe reliability regressions in **GPT-5.4** and **DeepSeek v4** integrations, which are experiencing extreme latency, hangs, and crashes. Contributors are submitting rapid patches for the non-interactive run mode and the `write` tool schema, addressing race conditions where the process exits before the LLM finishes streaming. A significant internal refactor is also underway by core contributors to move database schema ownership into the core package, laying groundwork for future stability.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
Here are the 10 most noteworthy issues driving community discussion today:

*   **[#29079 GPT Models take too long to respond](https://github.com/anomalyco/opencode/issues/29079)** (👍 9, 💬 25): Users report extreme latency with GPT-5.4 (xhigh variant), taking minutes for simple prompts. Related to [#16870](https://github.com/anomalyco/opencode/issues/16870).
*   **[#4704 /undo and /timeline does not revert file edits](https://github.com/anomalyco/opencode/issues/4704)** (👍 15, 💬 18): A long-standing frustration where Git-based undo commands fail to revert file changes properly.
*   **[#11865 Tasks/Subagents with Codex / OpenAI frequently getting stuck](https://github.com/anomalyco/opencode/issues/11865)** (👍 11, 💬 17): OpenAI Codex 5.2 Xhigh hangs indefinitely during subagent tasks without timing out, forcing users to kill the session.
*   **[#6536 [FEATURE]: Mobile App](https://github.com/anomalyco/opencode/issues/6536)** (👍 42, 💬 15): Highly requested feature for a native mobile app (iOS/Android) interface for OpenCode.
*   **[#17505 session/update notifications sent after session/prompt response](https://github.com/anomalyco/opencode/issues/17505)** (👍 5, 💬 12): A race condition impacting ACP providers where late session updates cause UI finalization with empty content.
*   **[#27530 Error: 4 of 5 requests failed: Unexpected server error](https://github.com/anomalyco/opencode/issues/27530)** (👍 8, 💬 11): Users hitting unexpected fatal provider errors on startup, blocking usage entirely.
*   **[#29140 write tool: filePath truncated when content is large](https://github.com/anomalyco/opencode/issues/29140)** (💬 2): Using local LLMs (Ollama/LM Studio) fails because the tool schema processes `content` before `filePath`, causing the model to drop the path.
*   **[#15431 Session freezes after macOS lock screen](https://github.com/anomalyco/opencode/issues/15431)** (👍 5, 💬 4): TUI freezes indefinitely on macOS wake while tasks falsely report "In Progress".
*   **[#29127 v1.15.10 providers list missing DeepSeek](https://github.com/anomalyco/opencode/issues/29127)** (💬 2): A recent regression where the DeepSeek provider completely disappeared from the UI settings.
*   **[#29055 Infinite retry loop on provider failure](https://github.com/anomalyco/opencode/issues/29055)** (💬 2): Fallback system spins infinitely when a provider fails, requiring a manual cap on retries.

## 4. Key PR Progress
Important pull requests addressing core functionality and bugs are actively moving through the pipeline:

*   **[#29132 fix: await event loop in non-interactive opencode run](https://github.com/anomalyco/opencode/pull/29132)**: Fixes a critical bug where `opencode run --format json` exited before the LLM stream completed (closing [#26855](https://github.com/anomalyco/opencode/issues/26855)).
*   **[#29047 fix(opencode): cap retry attempts at 5 to prevent infinite loops](https://github.com/anomalyco/opencode/pull/29047)**: Implements a hard limit on provider retries to unblock the fallback system.
*   **[#29068 refactor(core): move database schema ownership](https://github.com/anomalyco/opencode/pull/29068)**: A major architectural change moving Drizzle schemas and migrations into the core package to streamline database operations.
*   **[#28071 feat: add well-known auth service](https://github.com/anomalyco/opencode/issues/28071)**: Introduces a central `AuthWellKnown` service and shared substitution logic for environment/file variables.
*   **[#12633 feat(tui): add auto-accept mode for permission requests](https://github.com/anomalyco/opencode/pull/12633)**: Adds a `shift+tab` toggle for auto-accepting edit permissions, saving time during rapid iterations.
*   **[#29110 fix(app): restore queued follow-up setting](https://github.com/anomalyco/opencode/pull/29110)**: Re-enables queued follow-up prompts which had been silently disabled/failing.
*   **[#29126 fix(tui): prune messages on prompt submit instead of streaming](https://github.com/anomalyco/opencode/pull/29126)**: Fixes annoying UI scroll jumps during heavy streaming/tool calls.
*   **[#29130 fix(tui): open external editor in worktree cwd](https://github.com/anomalyco/opencode/pull/29130)**: Resolves an issue where the `/editor` command launched in the wrong working directory.
*   **[#26090 feat(session): expose LLM response headers](https://github.com/anomalyco/opencode/pull/26090)**: Appends HTTP response headers (e.g., `x-litelm-model`) to assistant messages, crucial for users using proxy routers.
*   **[#29028 fix(tui): separate thinking header from markdown body](https://github.com/anomalyco/opencode/pull/29028)**: Improves the UI rendering of model reasoning/thinking blocks by separating the header from markdown content.

## 5. Feature Request Trends
*   **Mobile & Remote Control:** There is massive demand for mobile access. Users are requesting native apps ([#6536](https://github.com/anomalyco/opencode/issues/6536)) and workflows to control OpenCode via Android as a portable terminal ([#29121](https://github.com/anomalyco/opencode/issues/29121)).
*   **Robust CLI Interactions:** Developers want safer CLI exits. A popular request is requiring a double `Ctrl+C` pattern (first to interrupt, second to exit) ([#26371](https://github.com/anomalyco/opencode/issues/26371)) to prevent accidental session terminations.
*   **New Provider Integrations:** The community wants broader provider support out-of-the-box, notably requesting CommandCode AI ([#26338](https://github.com/anomalyco/opencode/issues/26338)).

## 6. Developer Pain Points
*   **API Latency and Hanging:** The most prominent frustration is models locking up. GPT-5.4 is suffering severe initial-prompt latency ([#29079](https://github.com/anomalyco/opencode/issues/29079)), OpenAI subagents hang without timeouts ([#11865](https://github.com/anomalyco/opencode/issues/11865)), and DeepSeek v4 hangs strictly due to unhandled `chat_template_kwargs` ([#24264](https://github.com/anomalyco/opencode/issues/24264)).
*   **Local/Open-Source LLM Schema Failures:** Local models using tools often fail due to the `write` tool's schema field order truncating the `filePath` ([#29140](https://github.com/anomalyco/opencode/issues/29140)).
*   **Account Management Friction:** Users are increasingly frustrated by the inability to self-service delete Zen accounts, forcing them to open formal GDPR Article 17 requests via GitHub issues ([#29092](https://github.com/anomalyco/opencode/issues/29092), [#29101](https://github.com/anomalyco/opencode/issues/29101)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-25

## 1. Today's Highlights
The Pi ecosystem experienced a high volume of bug fixes and refinements today, with maintainers merging several critical patches to address TUI crashes, hanging processes, and context compaction failures. Notable advancements were also made in expanding provider support, adding a dedicated DashScope integration for Alibaba's Qwen models, and introducing new tool permission frameworks to enhance agent execution safety.

## 2. Releases
*No new official releases were published in the last 24 hours.*

## 3. Hot Issues
1. **[#2870 Follow XDG Base Directory](https://github.com/earendil-works/pi/issues/2870)**: A highly requested bug (26 👍) pointing out that the CLI clutters the Linux home directory. Users are pushing for compliance with the `$XDG_CONFIG_HOME` standard to keep filesystems clean.
2. **[#4707 Agent hangs during 429 rate limits](https://github.com/earendil-works/pi/issues/4707)**: The agent permanently hangs in a "Working" state if a provider drops the connection due to rate limiting (HTTP 429). A regression tied to Undici fetch, it forces users to manually restart their workflows.
3. **[#4897 RPC mode crashes under high-volume stdout](https://github.com/earendil-works/pi/issues/4897)**: When streaming large outputs in RPC mode, the Pi process abruptly exits with a `write ENOBUFS` error. This is a critical pain point for developers using Pi as a backend child process.
4. **[#4877 Session folder collision](https://github.com/earendil-works/pi/issues/4877)**: Distinct working directories are resolving to the same session folder due to path-separator flattening (e.g., `/a/b/c/d` and `/a-b/c-d`), causing unexpected state overwrites.
5. **[#4945 openai-codex hangs on zero-usage aborted turns](https://github.com/earendil-works/pi/issues/4945)**: Users of `gpt-5.5` are experiencing TUI freezes at `Working...` requiring an Escape abort, resulting in empty, wasted API turns.
6. **[#4879 Expose promptGuidelines on ToolInfo](https://github.com/earendil-works/pi/issues/4879)**: A feature request asking to expose runtime tool guidelines to extensions, enabling better dynamic prompt generation and extension interoperability.
7. **[#4046 Compaction deletes everything](https://github.com/earendil-works/pi/issues/4046)**: A frustrating bug where the agent's context compaction process occasionally wipes the entire session context instead of summarizing it.
8. **[#4946 TUI crashes on over-width lines](https://github.com/earendil-works/pi/issues/4946)**: A rendering edge-case where tool outputs exceeding the terminal width cause the TUI to crash entirely.
9. **[#4160 Pi extensions incompatibility with Bun](https://github.com/earendil-works/pi/issues/4160)**: Users attempting to run Pi extensions via the Bun runtime are blocked because the extension installer strictly looks for `npm` in `$PATH`.
10. **[#4953 Installer PATH collision with asdf](https://github.com/earendil-works/pi/issues/4953)**: The Pi installer unnecessarily prompts to modify the system `PATH` on systems already using `asdf` shims to manage Node versions.

## 4. Key PR Progress
1. **[#4759 fix(coding-agent): configure HTTP idle timeout](https://github.com/earendil-works/pi/pull/4759)**: Merged. Addresses the 429 rate limit hangs by making the HTTP timeout configurable and reverting the default to a safer 5 minutes.
2. **[#4939 Guard pre-prompt compaction continue() on assistant tails](https://github.com/earendil-works/pi/pull/4939)**: Merged. Fixes a crash where the agent would fail with `Cannot continue from message role: assistant` by adding a guard to the `AgentSession` continuation logic.
3. **[#4944 fix(tui): clamp over-width rendered lines](https://github.com/earendil-works/pi/pull/4944)**: Merged. Resolves the TUI crashing bug by ensuring lines exceeding terminal width are securely clamped during rendering.
4. **[#4941 fix(cli): handle main() promise to prevent hanging process](https://github.com/earendil-works/pi/pull/4941)**: Merged. A crucial fix where the unhandled `main()` Promise kept the Node process alive indefinitely after CLI tasks completed.
5. **[#4950 fix(rpc) backpressure retry abort](https://github.com/earendil-works/pi/pull/4950)**: Closed for now. The maintainer noted that fixing RPC backpressure breaks backward compatibility due to non-awaitable interfaces, requiring a larger architectural rethink.
6. **[#4926 Add Alibaba DashScope provider](https://github.com/earendil-works/pi/pull/4926)**: Open. Introduces a first-class provider for Alibaba Bailian, allowing native interaction with `qwen3.7-max` and supporting deep thinking protocols.
7. **[#4651 feat(coding-agent): fetch portable git bash on windows](https://github.com/earendil-works/pi/pull/4651)**: Open/Draft. An experiment to automatically package portable `git bash` (~350MB) for Windows users, reducing local dependency setup friction.
8. **[#4911 feat(ai): add Codex device code login](https://github.com/earendil-works/pi/pull/4911)**: Open. Implements OAuth device code login for OpenAI Codex, allowing easier authentication for headless/remote environments.
9. **[#4954 Expose getToolDefinition to command context](https://github.com/earendil-works/pi/pull/4954)**: Open. Enables extension developers to access the exact input schema of tools, allowing for advanced custom UIs and manual tool testing.
10. **[#4873 Clean up Path Handling](https://github.com/earendil-works/pi/pull/4873)**: Merged. A systematic cleanup of cross-platform path joining logic to prevent issues across different operating systems.

## 5. Feature Request Trends
- **Extension API Expansion**: Developers want deeper hooks into the agent's internal state. Requests like exposing `streamingBehavior` on InputEvents (#4937) and `promptGuidelines` on ToolInfo (#4879) highlight a trend of building more sophisticated, context-aware extensions.
- **Custom/Freeform Tools**: There is a strong push to support raw-string/freeform tool shapes alongside strict JSON schemas (#4948), enabling developers to leverage provider-native tool capabilities without conforming to rigid structures.
- **UI and Layout Customization**: Users are requesting better control over the terminal interface, ranging from tabbed settings menus (#4949) to collapsible UI elements for file reads (#4916), aiming to maximize vertical terminal space.
- **Virtual Environment Support**: Interest is growing in decoupling Pi from local filesystems to run inside cloud virtual file systems or secure sandboxes (#4938).

## 6. Developer Pain Points
- **Process Hangs and Unhandled Promises**: The most prominent frustration today revolves around zombie processes. Whether caused by unhandled async Promises at the CLI entry point, silent background RPC crashes resulting in 30-second timeouts (#4764), or undetected rate limits (#4707), developers struggle with the agent silently failing without throwing actionable errors.
- **Agent State and Compaction Reliability**: Users continue to experience context loss and continuation crashes. When the compaction algorithm fails (#4046) or attempts to continue a session ending in an assistant message (#4951), developers lose active working context, requiring manual intervention and prompt reconstruction.
- **Runtime Compatibility Friction**: The ecosystem still struggles with alternative runtimes and environment configurations. Missing dependencies under strict package managers like `pnpm` (#4842) and hardcoded reliance on `npm` (#4160) remain unnecessary roadblocks for developers using modern toolchains.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-25

## 1. Today's Highlights
The project shipped **v0.16.1-nightly** alongside an aggressive push toward the **v0.16-alpha "Mode B" daemon release**, with the scope officially frozen and the first PR in the F5 release chain already merged. Community activity is heavily focused on **observability and telemetry**, with three new PRs adding W3C trace propagation, AUTO mode safety telemetry, and local diagnostics tooling. Multi-platform channel support also gained traction with new Feishu (Lark) and Weixin adapter fixes.

## 2. Releases

**v0.16.1-nightly.20260524.84f408017**
- **fix(build):** Clean stale outputs before `tsc --build` to prevent TypeScript error TS5055 ([#4453](https://github.com/QwenLM/qwen-code/pull/4453))
- **chore(release):** Version bump to v0.16.1

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [#4175 — Mode B feature-priority roadmap toward v0.16](https://github.com/QwenLM/qwen-code/issues/4175) | The master tracking issue for the `qwen serve` daemon. Stage 1 is merged; this defines the remaining path to production. Scope was frozen today, driving the F5 release chain. 38 comments indicate active debate. |
| 2 | [#4276 — OOM crash](https://github.com/QwenLM/qwen-code/issues/4276) | Node process crashes with >4 GB heap during extended sessions. A critical performance/memory regression affecting heavy users. Still open with 7 comments. |
| 3 | [#4421 — Local diagnostics framework](https://github.com/QwenLM/qwen-code/issues/4421) | Proposes a ring-buffer-based local diagnostic collector with `/bug` bundle generation. Addresses the pervasive "can't reproduce / no debug logs" problem without auto-uploading data. |
| 4 | [#4479 — Daily token consumption statistics](https://github.com/QwenLM/qwen-code/issues/4479) | User reported burning 30M tokens in a single session with no visibility. Directly triggered PR [#4480](https://github.com/QwenLM/qwen-code/pull/4480). High demand for cost transparency. |
| 5 | [#4475 — AUTO mode telemetry and classifier parity](https://github.com/QwenLM/qwen-code/issues/4475) | Follow-up to recent AUTO mode safety alignment work. Requests richer telemetry for debugging classifier denials at fleet scale. |
| 6 | [#4481 — Model ignores language-switch requests](https://github.com/QwenLM/qwen-code/issues/4481) | Model responds in an unintended language and refuses to correct on follow-up. Likely a system-prompt / context adherence issue. |
| 7 | [#4471 — Tasks get stuck](https://github.com/QwenLM/qwen-code/issues/4471) | Interactive task execution hangs at certain steps (e.g., parallel agent fan-out). Possibly related to the new parallel agent display work in PR [#4477](https://github.com/QwenLM/qwen-code/pull/4477). |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#4390 — W3C traceparent + session ID propagation](https://github.com/QwenLM/qwen-code/pull/4390) | Adds distributed tracing headers for deeper observability (sub-issue of #3731). On hold pending discussion on default scoping. |
| 2 | [#4359 — AI-powered PR triage + compliance gates](https://github.com/QwenLM/qwen-code/pull/4359) | Two-layer CI: template completeness enforcement and PR size reviewability checks. Uses Qwen Code itself as the reviewer. |
| 3 | [#4483 — Local launch templates for v0.16-alpha (PR 30a)](https://github.com/QwenLM/qwen-code/pull/4483) | Third PR in the F5 release chain; adds deployment templates for the v0.16-alpha local-only text chat/coding release. |
| 4 | [#4412 — Daemon-mode developer deep-dive docs](https://github.com/QwenLM/qwen-code/pull/4412) | Comprehensive `docs/developers/daemon/` documentation set for contributors working on Mode B. |
| 5 | [#4477 — Live per-agent progress display](https://github.com/QwenLM/qwen-code/pull/4477) | Replaces the collapsed "Agent × 9" line with a real-time multi-agent progress panel. Directly addresses issue #4471. |
| 6 | [#4476 — AUTO mode denial observability and caps](https://github.com/QwenLM/qwen-code/pull/4476) | Adds structured reason boundaries, `PermissionDenied` hooks, and cumulative denial caps for AUTO mode safety. |
| 7 | [#4484 — Cross-client real-time sync fixes (ACP bridge)](https://github.com/QwenLM/qwen-code/pull/4484) | Fixes 5 of 8 gaps where multi-client SSE sessions lost sync (message echo, cancellation propagation, etc.). |
| 8 | [#4472 — ACP Streamable HTTP transport at /acp](https://github.com/QwenLM/qwen-code/pull/4472) | Adds the official Agent Client Protocol transport alongside REST+SSE — a significant extensibility milestone. |
| 9 | [#4379 — Feishu (Lark) channel adapter](https://github.com/QwenLM/qwen-code/pull/4379) | Full WebSocket/Webhook adapter with interactive card streaming, stop button, and concurrent message isolation. |
| 10 | [#4473 — v0.16-alpha known limits + SDK token env fallback (PR 27)](https://github.com/QwenLM/qwen-code/pull/4473) | ✅ **Merged.** First PR in the F5 release chain. Adds alpha banner, known-limits doc, and `QWEN_SERVER_TOKEN` env fallback. |

---

## 5. Feature Request Trends

1. **Observability & diagnostics** — The dominant theme. Local diagnostics ring buffers (#4421), W3C trace propagation (#4390), AUTO mode telemetry (#4475), and improved LogToSpan error handling (#4482) all point to a community demanding better insight into long-running agent sessions.

2. **Token & cost visibility** — Daily/historical token consumption (#4479, #4480) is a high-priority request. Users are burning through tokens with no dashboard or accounting.

3. **Multi-channel / multi-client** — Feishu adapter (#4379), Weixin image fixes (#4464, #4465), and cross-client sync (#4484) show strong momentum toward running Qwen Code as a shared daemon serving multiple frontends simultaneously.

4. **Safety & classifier tooling** — AUTO mode denial caps, permission hooks (#4476), and classifier parity telemetry (#4475) reflect ongoing investment in guardrails for autonomous operation.

5. **Developer ergonomics for daemon mode** — Daemon deep-dive docs (#4412), launch templates (#4483), and the v0.16-alpha roadmap (#4175) indicate the project is preparing for broader contributor adoption of the server architecture.

---

## 6. Developer Pain Points

- **Memory leaks / OOM under load** — Issue [#4276](https://github.com/QwenLM/qwen-code/issues/4276) shows Node heap exceeding 4 GB and crashing. No fix landed yet; this is the most critical unaddressed reliability issue.
- **No token cost tracking** — Users discover massive token usage retroactively (#4479). The closed PR #4480 suggests the initial implementation was incomplete or rejected.
- **Task hangs in interactive mode** — Parallel agent fan-out causes stalls (#4471), forcing users to kill and restart sessions.
- **Language adherence** — The model ignoring explicit language-switch instructions (#4481) hints at prompt prioritization gaps in the instruction-following stack.
- **Fragmented debug information** — Without proactive debug logging, users can't report reproducible bugs (#4421). The proposed local diagnostics framework hasn't landed yet.
- **Build flakiness** — TypeScript error TS5055 from stale build outputs required a nightly patch (#4453), indicating the monorepo build tooling still has rough edges.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-25

## 1. Today's Highlights
The project has officially rebranded to **CodeWhale** with the release of v0.8.42 and v0.8.43, introducing deprecation shims for the legacy binaries that will be removed in v0.9.0. Alongside the cosmetic and architectural overhaul, maintainer Hmbown and the community are driving a massive architectural push toward multi-agent orchestration, introducing standardized sub-agent naming conventions, and proposing a new "Dual" routing mode to optimize inference costs. 

## 2. Releases
- **v0.8.43 & v0.8.42**: Both versions finalize the project's rebranding to **CodeWhale**. The legacy `deepseek` and `deepseek-tui` binaries are currently included as temporary deprecation shims that print a warning and forward execution to `codewhale` / `codewhale-tui`. These shims are slated for complete removal in the upcoming v0.9.0 release. ([Release Notes](https://github.com/Hmbown/CodeWhale))

## 3. Hot Issues
1. **[#1969](https://github.com/Hmbown/CodeWhale/issues/1969) Migration & Session Retention Confusion:** Users are concerned about whether existing sessions, skills, and custom workspace configurations will survive the CodeWhale rename. The lack of clear manual migration documentation is causing friction.
2. **[#2007](https://github.com/Hmbown/CodeWhale/issues/2007) Coordinated Multi-Agent Work:** The maintainer outlines a roadmap to replace the current "School-mode" with a bounded parallel-worker orchestration layer, allowing agents to reconcile disagreements and report back to the central Work surface.
3. **[#1806](https://github.com/Hmbown/CodeWhale/issues/1806) Sub-agent 120s API Timeout:** Users report that parallel sub-agents (`agent_open`) fail consistently on long tasks (e.g., document conversion) due to strict API timeouts, rendering agentic execution nearly unusable for complex workloads.
4. **[#1676](https://github.com/Hmbown/CodeWhale/issues/1676) Proposal for "Dual" Mode:** A highly discussed feature request to route complex reasoning to `deepseek-v4-pro` while delegating simple tool execution to `deepseek-v4-flash`, drastically reducing token costs while maintaining quality.
5. **[#1638](https://github.com/Hmbown/CodeWhale/issues/1638) Session Picker on Startup:** Users are requesting a UI overhaul at launch to display a history of previous sessions, similar to competitor tools, instead of defaulting to a blank conversation.
6. **[#1551](https://github.com/Hmbown/CodeWhale/issues/1551) Custom Status Bar for API Balance:** Users want the ability to configure the bottom status line via scripts to display real-time API quota/balance without breaking flow.
7. **[#1978](https://github.com/Hmbown/CodeWhale/issues/1978) ZenMux / OpenAI-Compatible Provider Support:** The community is pushing for better parity with third-party providers (like OpenRouter) regarding reasoning and cache parsing.
8. **[#1945](https://github.com/Hmbown/CodeWhale/issues/1945) LoongArch64 Architecture Support:** Developers are requesting official compilation support for LoongArch64, which currently fails during the `cargo install` phase due to missing PTY dependencies.
9. **[#2010](https://github.com/Hmbown/CodeWhale/issues/2010) Repo-Local Session JSON Buildup:** A P0 issue highlighting that agentic runs leave hundreds of `session_*.json` files in the workspace, prompting a call for automatic pruning and better directory hygiene.
10. **[#1987](https://github.com/Hmbown/CodeWhale/issues/1987) NSIS Windows Installer:** A request from the community for an easier, non-technical installation method on Windows via an NSIS installer.

## 4. Key PR Progress
1. **[#1910](https://github.com/Hmbown/CodeWhale/pull/1910) Windows Alt-Screen TUI Leak Fix:** Resolves an issue where verbose CLI logging bleeds into the Windows TUI alt-screen because `stderr` cannot be cleanly redirected on Windows.
2. **[#2030](https://github.com/Hmbown/CodeWhale/pull/2030) v0.8.44 Release Gates Repair:** Syncs release metadata and fixes an issue where starting `codewhale` auto-opened the session picker, reverting it to require explicit resume flags (`--resume`, `Ctrl+R`).
3. **[#2008](https://github.com/Hmbown/CodeWhale/pull/2008) ShellDispatcher Abstraction:** Introduces a shell-agnostic command execution layer, improving how the TUI dispatches commands across different OS environments.
4. **[#1848](https://github.com/Hmbown/CodeWhale/pull/1848) Pluggable Tool Registry:** Implements a drop-in plugin system where users can add custom tools simply by placing scripts in `~/.deepseek/tools/` without altering `config.toml`.
5. **[#1911](https://github.com/Hmbown/CodeWhale/pull/1911) Ctrl+Z Draft Recovery:** Adds a single-slot undo buffer to the composer, allowing users to safely restore accidentally cleared prompts via Ctrl+Z.
6. **[#1938](https://github.com/Hmbown/CodeWhale/pull/1938) Wayland Clipboard Fix:** Resolves silent clipboard failures on non-wlroots Wayland compositors (like GNOME Mutter and niri) by prioritizing `wl-copy` over `arboard`.
7. **[#1860](https://github.com/Hmbown/CodeWhale/pull/1860) Stream Data Loss Fix:** Fixes a race condition during npm installation where concurrent streams would corrupt checksum validations (e.g., `seek-macos-arm64`).
8. **[#1992](https://github.com/Hmbown/CodeWhale/pull/1992) LoongArch64 Support:** Upgrades `portable-pty` to v0.9 to fix ioctl compilation blocks, enabling native support for LoongArch64 Linux architectures.
9. **[#1908](https://github.com/Hmbown/CodeWhale/pull/1908) SKILL.md YAML Parsing:** Fixes a bug where multi-line block scalars (`>` or `|`) in SKILL.md frontmatter were ignored, silently breaking custom skill descriptions.
10. **[#1845](https://github.com/Hmbown/CodeWhale/pull/1845) RuntimeTool Trait for Code Execution:** Unifies pluggable code execution backends (Go, TS, Rust) under a standard trait, allowing agentic execution of local scripts safely.

## 5. Feature Request Trends
- **Multi-Agent Orchestration:** A heavy push toward making complex agent workflows readable and manageable, including standardizing sub-agent names around whale species ([#2016](https://github.com/Hmbown/CodeWhale/issues/2016)) and creating agent routing maps.
- **Cost-Optimized Model Routing:** Strong demand for a "Dual" routing mode to separate heavy reasoning (Pro models) from simple tool execution (Flash models).
- **Third-Party Provider Compatibility:** Users want seamless integration with alternative providers via OpenAI-compatible endpoints, focusing on reasoning token caching and proper parity.
- **Enhanced Session Continuity:** A desire for durable slash commands, better workspace switching, and auto-loading repository contexts into session memory to reduce onboarding time per chat.

## 6. Developer Pain Points
- **Agentic Timeouts and Breakages:** Developers are frustrated by hard API timeouts during complex sub-agent tasks, which hinder autonomous multi-step workflows.
- **UI / TUI Friction:** The lack of a startup session picker, inability to easily copy command history, and accidental composer text deletions interrupt daily user flow.
- **State Pollution:** Agentic sessions dumping large volumes of `.json` state files into local repositories is creating directory bloat and making version control messy, even when ignored by Git.
- **Configuration Portability:** The transition to CodeWhale has exposed significant pain regarding the safe migration of existing API endpoints, sessions, and customized skill sets.

</details>