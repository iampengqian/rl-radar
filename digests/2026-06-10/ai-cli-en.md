# AI CLI Tools Community Digest 2026-06-10

> Generated: 2026-06-09 22:27 UTC | Tools covered: 9

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

## 1. Ecosystem Overview
The AI CLI tools landscape on June 10, 2026, is defined by aggressive multi-model expansion and the growing pains of autonomous agent architectures. Major players are rapidly shipping new model integrations—such as Claude Fable 5, Gemini 3.5 Flash, and GPT-5.5—often resulting in immediate backend, safety-classifier, and provisioning instability. Beneath the surface of feature drops, ecosystems are heavily investing in transport security, standardized communication protocols (ACP/MCP), and background daemon reliability. Meanwhile, the space is actively fragmenting between all-in-one managed platforms and highly extensible, provider-agnostic clients.

## 2. Activity Comparison
*(Based on activity highlighted in the June 10, 2026 digests)*

| Tool | Issues Noted | PRs Noted | Release Status | Primary Focus |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 15+ | 10 | **v2.1.170** (Fable 5 rollout) | Fable 5 integration; resolving severe safety classifier false positives and agent token leaks. |
| **OpenAI Codex** | 10 | 10 | **rust-v0.139.0** | GPT-5.5 model provisioning (404 errors); Noise Protocol security; TUI Plugin marketplace. |
| **Gemini CLI** | 10 | 10 | **v0.45.3 / v0.46.0-preview** | Agent hang resolution; path traversal security; AST-aware codebase context. |
| **GitHub Copilot CLI**| 10 | 0 | **v1.0.61** | UI/UX settings improvements; addressing critical v1.0.60 plugin regressions and MCP lifecycle issues. |
| **Qwen Code** | 10 | 10 | **v0.18.0-preview.1** | Daemon architecture parity; ACP transport integration; OOM and memory leak mitigation. |
| **Pi** | 10 | 10 | **v0.79.1** | Day-one Fable 5 support; multi-cloud provider expansion; TUI and trust gate UX. |
| **OpenCode** | 10 | 10 | *No new release* | Core filesystem search refactor; ACP compatibility; memory/prompt caching failures. |
| **DeepSeek TUI** | 10 | 10 | **v0.8.55** (CodeWhale rebrand) | Package migration; YOLO mode safety; token optimization to achieve Codex parity. |
| **Kimi Code CLI** | 1 | 0 | *No new release* | Bug triaging for basic tool reliability (`Edit` tool failures) on the newest `k2.6` model. |

## 3. Shared Feature Directions
*   **Multi-Agent & Subagent Stability:** Across the board, delegating tasks to background agents is fraught with reliability issues. Gemini users face hangs on generalist deferral, Claude Code users report "resurrected" agents burning tokens, and Qwen experiences severe OOM crashes during session resumes.
*   **Standardized Protocols (ACP & MCP):** Tools are converging on interoperability standards. Qwen Code, OpenCode, and DeepSeek TUI are actively implementing Agent Communication Protocol (ACP) for IDE integrations. GitHub Copilot and OpenCode are wrestling with Model Context Protocol (MCP) server lifecycle management and connection scaling.
*   **Security, Auth, and Trust UX:** As AI agents gain more autonomy, developers are demanding better safety controls. Claude Code, Pi, and GitHub Copilot are actively iterating on "trust gates," prompt injection defenses, and permission management for local execution and file editing.
*   **Memory & Context Management:** There is a strong push to overcome context window limitations via persistent memory. OpenCode users are tracking memory leaks, Qwen users want global user-level memory, and DeepSeek TUI is proposing "hippocampal memory" systems.

## 4. Differentiation Analysis
*   **Vendor Monoliths vs. Provider-Agnostic Clients:** Native vendor tools (Claude Code, OpenAI Codex, Gemini CLI) are heavily focused on tight integration with their own proprietary new models (Fable 5, GPT-5.5, Gemini 3.5) and often face backend provisioning outages. Conversely, tools like Pi and OpenCode differentiate by offering day-one, cross-provider support and complex routing logic, appealing to users who mix local models (Ollama) with cloud APIs.
*   **Enterprise Governance vs. Solo Developer Flexibility:** GitHub Copilot CLI is uniquely bottlenecked by enterprise model parity and organizational IAM policies. In contrast, tools like DeepSeek TUI/CodeWhale and Qwen Code are prioritizing highly customizable, per-session configurations and local "YOLO" modes for solo devs who prioritize speed over enterprise compliance.
*   **Platform Maturity:** Kimi Code CLI is currently lagging, showing fundamental tool-execution regressions with new models, whereas platforms like OpenAI Codex and Gemini CLI are tackling much deeper architectural issues like secure transport protocols (Noise Protocol) and AST-level code comprehension.

## 5. Community Momentum & Maturity
*   **High Momentum & Iteration:** **Qwen Code** and **Pi** show explosive developer momentum, shipping massive architectural refactors (filesystem search, ACP parity, hundreds of lines of new daemon methods) and responding to community feedback within hours (e.g., Pi's rapid trust UX iteration). **DeepSeek TUI (CodeWhale)** is iterating rapidly despite friction from its major rebranding.
*   **Mature but Bureaucratic:** **OpenAI Codex** and **Claude Code** have massive, highly vocal communities with extreme engagement (issues gaining 100+ upvotes in days), but their development cycles are impacted by monolithic backend infrastructure and internal safety classifiers that frequently alienate power users.
*   **Slower / Maintenance Phases:** **GitHub Copilot CLI** shows a quiet PR pipeline, with users frustrated by long-ignored feature requests. **Kimi Code CLI** is currently experiencing a lull, with the community focused entirely on basic bug triaging rather than feature expansion.

## 6. Trend Signals
*   **New Model Rollouts are Systemically Fragile:** The simultaneous GPT-5.5 404 errors and Claude Fable 5 safety false-positives indicate that AI CLI developers can no longer rely on day-one model availability. *Takeaway:* Teams should implement automated model fallback routing within their CLI configurations to prevent workflow blockages.
*   **Token Bleed is a Critical Cost Vector:** Issues like Codex ingesting its own logs, Claude agents resurrecting silently, and OpenCode breaking prompt caching architectures reveal that autonomous agents frequently leak tokens. *Takeaway:* Enterprises must implement hard, external quota limits and strict daemon lifecycle monitoring before deploying AI CLIs at scale.
*   **The Shift from Text Search to Structural Code Awareness:** Gemini CLI's push for AST-aware tools and OpenCode's filesystem search refactoring signal an industry move away from brute-force text context injection toward precise, abstract syntax tree routing. *Takeaway:* Future AI CLI efficiency gains will come from the tool's ability to filter code context structurally rather than simply expanding token context windows.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Snapshot: 2026-06-10 | Repository: [anthropics/skills](https://github.com/anthropics/skills)**

## 1. Top Skills Ranking

Based on sustained community attention, update frequency, and issue cross-references, here are the most impactful skills currently active in the repository:

| Rank | Skill / PR | Core Functionality | Status |
| :--- | :--- | :--- | :--- |
| **1** | **[document-typography (#514)](https://github.com/anthropics/skills/pull/514)** | Automated typographic quality control for AI-generated documents (fixes orphan/widow lines, numbering misalignment). | Open |
| **2** | **[ODT Support (#486)](https://github.com/anthropics/skills/pull/486)** | End-to-end creation, template filling, and HTML conversion for OpenDocument Formats (.odt, .ods). | Open |
| **3** | **[Meta-Skill Analyzers (#83)](https://github.com/anthropics/skills/pull/83)** | Adds `skill-quality-analyzer` and `skill-security-analyzer` to evaluate skills across 5 dimensions (structure, security, etc.). | Open |
| **4** | **[feature-dev Workflow Fix (#363)](https://github.com/anthropics/skills/pull/363)** | Critical bug fix for the `feature-dev` skill where TodoWrite overwrites cause Quality Review and Summary phases to be skipped. | Open |
| **5** | **[Testing Patterns (#723)](https://github.com/anthropics/skills/pull/723)** | Comprehensive full-stack testing skill covering the Testing Trophy model, React component testing, and integration patterns. | Open |
| **6** | **[n8n-Builder & Debugger (#190)](https://github.com/anthropics/skills/pull/190)** | Production-tested skills for building and debugging n8n workflows, plus `.faf` AI-context file management. | Open |
| **7** | **[shodh-memory (#154)](https://github.com/anthropics/skills/pull/154)** | Persistent memory/context system allowing AI agents to maintain rich context across multiple distinct conversations. | Open |
| **8** | **[ServiceNow Platform Suite (#568)](https://github.com/anthropics/skills/pull/568)** | Broad enterprise assistant covering ITSM, SecOps, ITAM, FSM, CSDM, and IntegrationHub scripting. | Open |

*Note: While the `skill-creator` utility is heavily discussed, the list above focuses on actual functional capabilities being proposed for the marketplace.*

## 2. Community Demand Trends

Analysis of community Issues reveals four clear vectors for future Skill development:

*   **Ecosystem Trust & Security:** Users are increasingly concerned about namespace collisions and trust boundaries. [Issue #492](https://github.com/anthropics/skills/issues/492) highlights the dangers of community skills masking as official Anthropic skills, pointing to a strong need for standardized **security and provenance verification skills**.
*   **Enterprise Collaboration & IAM:** There is a strong push for organization-level skill management. [Issue #228](https://github.com/anthropics/skills/issues/228) (13 comments) requests seamless org-wide sharing, indicating high demand for **Enterprise IT/Admin skills** (like the proposed ServiceNow suite) and better permission handling ([Issue #1175](https://github.com/anthropics/skills/issues/1175)).
*   **Cross-Platform & Cloud Integrations:** Users are actively looking to deploy Skills beyond standard local environments, with specific requests for **AWS Bedrock compatibility** ([Issue #29](https://github.com/anthropics/skills/issues/29)) and **MCP (Model Context Protocol) exposures** ([Issue #16](https://github.com/anthropics/skills/issues/16)).
*   **Framework & Tooling Stability:** The community is heavily invested in the "meta" tooling of Skills themselves. Multiple high-activity issues ([#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169)) focus on fixing the `skill-creator` evaluation scripts (specifically fixing 0% recall/trigger rates in `run_eval.py` on Windows and Unix).

## 3. High-Potential Pending Skills

These open Pull Requests feature active maintenance and address specific, highly-requested gaps. They are strong candidates for near-term merging:

*   **[feat: implement agent-creator skill (#1140)](https://github.com/anthropics/skills/pull/1140)**: Introduces an agent-creator meta-skill while simultaneously fixing critical parallel tool evaluation bugs and adding Windows support. Highly synergistic with current ecosystem needs.
*   **[fix(docx): prevent tracked change w:id collision (#541)](https://github.com/anthropics/skills/pull/541)**: Solves a specific document corruption bug in the official DOCX skill where tracked changes collide with OOXML bookmark IDs.
*   **[fix(skill-creator): warn on unquoted YAML (#539)](https://github.com/anthropics/skills/pull/539)**: A crucial quality-of-life fix for skill creators that prevents silent parsing failures when YAML special characters are left unquoted.
*   **[fix(pdf): correct case-sensitive references (#538)](https://github.com/anthropics/skills/pull/538)**: Fixes broken file references in the PDF skill that fail on case-sensitive operating systems (Linux).

## 4. Skills Ecosystem Insight

The community's most concentrated demand is shifting toward **tooling reliability (fixing evaluation/trigger scripts) and enterprise-grade trust/security**, as developers look to transition Skills from novel local assistants into standardized, shareable organizational infrastructure.

---

# Claude Code Community Digest — 2026-06-10

---

## 1. Today's Highlights

Anthropic shipped **v2.1.170**, introducing **Claude Fable 5**—a new "Mythos-class" model that the company describes as its most capable generally-available model to date. However, the launch has been rocky: a wave of community reports indicates that Fable 5's integrated safety classifier is producing widespread **false positives**, unexpectedly forcing fallback to Opus 4.8 during legitimate security-review and self-hosting tasks. The day's issue tracker is dominated by this single theme, making Fable 5's usability the central community conversation.

---

## 2. Releases

### v2.1.170
- **Claude Fable 5** model enabled for general access; described as exceeding all prior GA models in capability.
- **Fixed session** (details sparse—likely a stability patch for session persistence/restoration).
- Announcement: [anthropic.com/news/claude-fable-5-mythos-5](https://www.anthropic.com/news/claude-fable-5-mythos-5)

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#26224](https://github.com/anthropics/claude-code/issues/26224) — **Claude Code hanging/freezing for 5–20+ minutes** (114 comments, 141 👍) | The single most-upvoted open bug. A long-standing issue where the CLI becomes unresponsive on large prompt heaps. Remains unresolved after months, generating sustained community frustration. |
| 2 | [#66614](https://github.com/anthropics/claude-code/issues/66614) — **`claude-opus-4-8` cannot be used as advisor when request model is `claude-fable-5`** (3 comments) | Direct API-level incompatibility between Fable 5 and the Opus 4.8 advisor service on day one. Blocks multi-model workflows immediately. |
| 3 | [#66680](https://github.com/anthropics/claude-code/issues/66680) — **Fable 5 incorrectly flagged as unsafe, forcing Opus 4.8 fallback** (1 comment) | On Linux/CLI, the safety classifier rejects virtually every prompt and silently downgrades the model, rendering Fable 5 unusable for many developer-mode users. |
| 4 | [#66670](https://github.com/anthropics/claude-code/issues/66670) — **Unexpected model switch from Fable 5 to Opus 4.8** (1 comment) | Same false-positive pattern on macOS during a pre-launch vulnerability scan—precisely the use case Fable 5 should excel at. |
| 5 | [#66662](https://github.com/anthropics/claude-code/issues/66662) — **Safety system blocks benign sysadmin/self-hosting tasks** (2 comments) | Over-triggering content policy on routine infrastructure work. Suggests the safety classifier's threshold is too aggressive for developer workflows. |
| 6 | [#66682](https://github.com/anthropics/claude-code/issues/66682) — **Advisor service unavailable on v2.1.170** (1 comment) | Fable 5's debut is further hampered by an advisor service outage; some users can't access the model at all. |
| 7 | [#66594](https://github.com/anthropics/claude-code/issues/66594) — **Bedrock API Error 400: data retention mode 'default' unavailable for Fable 5** (4 comments, 4 👍) | AWS Bedrock users hit a data-retention configuration incompatibility with the new model on launch day. |
| 8 | [#66339](https://github.com/anthropics/claude-code/issues/66339) — **Background agents resurrect after being stopped, consuming 160k+ tokens over 21h** (4 comments) | A critical cost-control failure: stopped agents silently restart and burn tokens against user intent. Raises trust and billing concerns. |
| 9 | [#66358](https://github.com/anthropics/claude-code/issues/66358) — **Agents daemon EAUTH after auto-update (control-key version skew)** (2 comments, 3 👍) | Auto-update from 2.1.168→2.1.169 orphaned background workers, causing authentication rejection. Highlights risks of live daemon updates. |
| 10 | [#66604](https://github.com/anthropics/claude-code/issues/66604) — **Long sessions lose date/time awareness after date-rollover system reminder** (1 comment) | Multi-hour sessions spanning midnight produce artifacts with stale temporal references. A subtle but impactful correctness bug for long-running agent work. |

**Pattern:** At least **6 of the top 10 issues** are directly caused by Fable 5's safety classifier and model-switching behavior, indicating a systemic launch-day problem.

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#66608](https://github.com/anthropics/claude-code/pull/66608) — **Fix false-positive usage policy block on lattice gauge theory question (Fable 5)** | Community-submitted patch (via REAPR bot) targeting the safety classifier's over-triggering on academic physics prompts. |
| 2 | [#66607](https://github.com/anthropics/claude-code/pull/66607) — **Fix Fable 5 safety classifier auto-switch to Opus during authorized security testing** | Addresses the core complaint: prevents mid-session model downgrade during in-scope pen-test/security tasks. |
| 3 | [#66372](https://github.com/anthropics/claude-code/pull/66372) — **Detect Docker daemon failures via `$LASTEXITCODE` in devcontainer** | Fixes a PowerShell issue where `docker info` non-zero exits silently, causing false "Docker ready" reports in the devcontainer prerequisite check. |
| 4 | [#66573](https://github.com/anthropics/claude-code/pull/66573) — **Restore dead error handlers in `ralph-wiggum` plugin broken by `set -euo pipefail`** | Two error-handling paths in `stop-hook.sh` were unreachable due to early exits from strict mode. |
| 5 | [#66416](https://github.com/anthropics/claude-code/pull/66416) — **Fix plugin-dev validator scripts aborting on first finding** | Validator scripts with `set -e` stopped at the first error instead of collecting all findings. |
| 6 | [#66577](https://github.com/anthropics/claude-code/pull/66577) — **Sync `security-guidance` marketplace entry with plugin metadata** | Version and description mismatch between `marketplace.json` and `plugin.json`. |
| 7 | [#66650](https://github.com/anthropics/claude-code/pull/66650) / [#66575](https://github.com/anthropics/claude-code/pull/66575) — **Fix `pr-review-toolkit` author name "Daisy" → "Daisy Hollman"** | Two duplicate PRs fixing the same manifest inconsistency in the bundled plugin. |
| 8 | [#65286](https://github.com/anthropics/claude-code/pull/65286) — **Add missing `plugin.json` manifest for `plugin-dev`** | The plugin was undiscoverable through normal installation flows due to a missing manifest. |
| 9 | [#66572](https://github.com/anthropics/claude-code/pull/66572) — **Fix repeated image-processing API errors consuming usage limit** (WIP) | Addresses a token-burn loop where failed image processing keeps retrying and draining quota. |
| 10 | [#65619](https://github.com/anthropics/claude-code/pull/65619) — **Align `frontend-design` plugin author metadata** (closed) | Fixed malformed dual-author string in `plugin.json`. |

---

## 5. Feature Request Trends

1. **Local penetration testing / security auditing support** — Multiple issues ([#66687](https://github.com/anthropics/claude-code/issues/66687), [#66664](https://github.com/anthropics/claude-code/issues/66664), [#66665](https://github.com/anthropics/claude-code/issues/66665)) request the ability to run authorized security audits and pen-tests on their own codebases without triggering content-policy blocks. This is the loudest demand signal today.

2. **Per-agent model and effort configuration** — [#66402](https://github.com/anthropics/claude-code/issues/66402) requests independent `/model` and `/effort` settings per agent in fleet view, since current global mutation of `settings.json` breaks multi-agent workflows.

3. **Task summaries before long-running operations** — [#66677](https://github.com/anthropics/claude-code/issues/66677) proposes that Claude display a plan/spec summary at the start of long tasks so users can intervene early if the direction is wrong.

4. **Global "always allow" for Chrome extension** — [#66125](https://github.com/anthropics/claude-code/issues/66125) asks for a blanket permission bypass to avoid per-site dialogs in the Claude for Chrome extension.

5. **Remote control model propagation** — [#66666](https://github.com/anthropics/claude-code/issues/66666) and [#66663](https://github.com/anthropics/claude-code/issues/66663) highlight that model changes made on either side of a remote-control session don't sync, pointing to demand for bidirectional state consistency.

---

## 6. Developer Pain Points

- **Fable 5 safety classifier is overzealous.** The dominant frustration is the model's tendency to auto-switch to Opus 4.8 during legitimate development tasks—security reviews, vulnerability scans, self-hosting configuration, and even academic physics questions. Users feel penalized for using the model for its intended purpose.

- **Background agent cost leaks.** Agents that resurrect after being stopped ([#66339](https://github.com/anthropics/claude-code/issues/66339)) and unexpected token consumption while inactive ([#65687](https://github.com/anthropics/claude-code/issues/65687)) erode trust in the cost model. Developers running fleets of agents need reliable kill semantics.

- **Long-standing CLI stability regression unresolved.** Issue [#26224](https://github.com/anthropics/claude-code/issues/26224) (freezing/hanging) has been open since February 2026 with 141 upvotes and no fix. It remains a top source of community dissatisfaction.

- **Plugin metadata and validation quality.** Several PRs fix broken error handlers, missing manifests, and inconsistent metadata across the plugin ecosystem, suggesting the plugin infrastructure needs more robust CI validation.

- **Fleet/multi-agent configurability gaps.** The lack of per-agent model, effort, and cost controls makes the agents/fleet view ([`claude agents`](https://github.com/anthropics/claude-code/issues/66402)) impractical for teams wanting heterogeneous agent pools.

---

*Digest generated from public GitHub data. All links point to [`github.com/anthropics/claude-code`](https://github.com/anthropics/claude-code).*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-10

## 1. Today's Highlights
The `gpt-5.5` rollout is hitting major turbulence today, with multiple highly-upvoted issues reporting 404 "Model not found" errors across CLI, Desktop, and regional endpoints. Meanwhile, the Codex team shipped **rust-v0.139.0**, introducing standalone web search in code mode and improved JSON schema compaction. Under the hood, a massive 10-PR "Noise Protocol" stack is being merged to bolster exec-server transport security, alongside new foundational work for a shared TUI Plugin marketplace.

## 2. Releases
### [rust-v0.139.0](https://github.com/openai/codex/releases/tag/rust-v0.139.0)
*   **Web Search in Code Mode:** Code mode can now call standalone web search directly (including from nested JS tool calls) and receive plaintext results.
*   **Schema Handling:** Tool and connector input schemas now preserve `oneOf` and `allOf`. Large schemas maintain a shallower structure when compacted.

### [rust-v0.138.0](https://github.com/openai/codex/releases/tag/rust-v0.138.0)
*   **Desktop Handoff:** The `/app` command can now hand off the current CLI thread directly into Codex Desktop on macOS and native Windows.
*   **Windows UX:** Windows workspace launches can open directly into Desktop instead of halting at a manual prompt.
*   **Media:** Local image attachments and standalone image generation support added.

## 3. Hot Issues
1.  **[Issue #26892](https://github.com/openai/codex/issues/26892) [79👍]:** `gpt-5.5` is listed as available locally but real requests fail with 404 'Model not found' in both Desktop and CLI. *A widespread blocker preventing users from utilizing the newest model.*
2.  **[Issue #9203](https://github.com/openai/codex/issues/9203) [274👍]:** "Please make `/undo` back". *A massively popular feature request highlighting that unintended file modifications/deletions without git tracking are currently irreversible.*
3.  **[Issue #24391](https://github.com/openai/codex/issues/24391) [25👍]:** Windows sandbox spawn setup refresh fails on CLI 0.133.0. *A critical regression blocking Windows developers from executing shell commands safely.*
4.  **[Issue #20741](https://github.com/openai/codex/issues/20741) [14👍]:** Desktop project chat histories disappeared after a recent update. *A data-loss bug causing major frustration for users losing session context on macOS.*
5.  **[Issue #25246](https://github.com/openai/codex/issues/25246) [7👍]:** Tracker: Codex business access-tokens broken (401 unauthorized). *Enterprise/Business users are completely locked out due to failing enterprise access token endpoints.*
6.  **[Issue #13937](https://github.com/openai/codex/issues/13937) [10👍]:** Codex Windows App cannot open JetBrains IDEA. *Workflow integration gap where external IDE launch protocols fail on Windows.*
7.  **[Issue #23122](https://github.com/openai/codex/issues/23122) [14👍]:** Codex Mobile setup QR on Android resolves to an unhandled link. *Mobile onboarding is completely broken for Android/ColorOS users due to a deep-link routing failure.*
8.  **[Issue #18299](https://github.com/openai/codex/issues/18299) [24👍]:** Display dot files and folders. *Users cannot view `.agents` or `.codex` configs in the Desktop file viewer, limiting UI transparency.*
9.  **[Issue #26867](https://github.com/openai/codex/issues/26867) [7👍]:** GitHub PR review uses deactivated workspace after migration. *Auth/permissions bug preventing migrated accounts from performing code reviews.*
10. **[Issue #27131](https://github.com/openai/codex/issues/27131) [1👍]:** Codex self-ingests local session JSONL logs during token-usage investigation. *Nasty feedback loop where context ingestion causes runaway token growth and skyrocketing costs.*

## 4. Key PR Progress
1.  **[PR #27127](https://github.com/openai/codex/pull/27127): Route terminal Codex output to realtime.** *Ensures voice/realtime mode reads back the orchestrator's final result, fixing missing audio feedback for typed messages.*
2.  **[PR #17931](https://github.com/openai/codex/pull/17931): Support encrypted local secrets for keyring auth.** *Bypasses the Windows Credential Manager's 2,560-byte blob limit, fixing Windows auth persistence failures for large OAuth payloads.*
3.  **[PR #27109](https://github.com/openai/codex/pull/27109): Add Guardian catalog diagnostics metadata.** *Adds request-level evidence to debug cases where auto-review models fall back unexpectedly.*
4.  **[PR #27252](https://github.com/openai/codex/pull/27252): Clarify Guardian fail-closed wording.** *Improves UX by distinguishing between a hard policy denial and a backend error in the Guardian safety reviewer.*
5.  **[PR #24092](https://github.com/openai/codex/pull/24092): Reject PowerShell param blocks in safe-command parsing.** *Hardens the Windows sandbox by closing a parser loophole that could bypass read-only command approvals.*
6.  **[PR #26239](https://github.com/openai/codex/pull/26239): exec-server: Noise channel foundation.** *The foundational PR for a massive 10-part stack implementing the Noise Protocol framework for secure exec-server transport.*
7.  **[PR #26701](https://github.com/openai/codex/pull/26701): TUI Plugin Sharing 1 - Add remote plugin identity.** *The first step in enabling a shared TUI plugin marketplace, allowing local/remote plugin resolution.*
8.  **[PR #26703](https://github.com/openai/codex/pull/26703): TUI Plugin Sharing 3 - Render remote plugin catalog sections.** *Builds out the TUI directory UI to display remote plugin catalogs properly.*
9.  **[PR #26705](https://github.com/openai/codex/pull/26705): TUI Plugin Sharing 5 - Polish remote plugin catalog rows.** *Final polish for the TUI plugin stack, refining admin/installation wording and deduplication.*
10. **[PR #26247](https://github.com/openai/codex/pull/26247): exec-server: Noise executor transport.** *Completes the secure transport layer for the new Noise protocol, ensuring safe command execution over the wire.*

## 5. Feature Request Trends
*   **Session Safety & Rollbacks:** A massive community push (led by [#9203](https://github.com/openai/codex/issues/9203)) is demanding an `/undo` command or rollback mechanism to easily recover from unintended AI actions, especially in non-git directories.
*   **Context & History Management:** Users want better control over their context window, requesting features like session export ([#13267](https://github.com/openai/codex/issues/13267)) and better UI visibility into hidden configuration files ([#18299](https://github.com/openai/codex/issues/18299)).
*   **Skill-Scoped Overrides:** Developers are asking for the ability to temporarily override models and reasoning effort levels on a per-skill basis ([#22908](https://github.com/openai/codex/issues/22908)) without altering the global agent config.
*   **Inline IDE Completions:** Continued demand for Ghost Text / Inline Suggestions in the VS Code extension ([#11898](https://github.com/openai/codex/issues/11898)), bridging the gap between CLI "big changes" and editor "micro-changes".

## 6. Developer Pain Points
*   **GPT-5.5 Rollout Failures:** The most prominent pain point today is the `gpt-5.5` 404 errors. Local metadata exposes the model as available, but backend requests fail completely across all interfaces (CLI, Desktop, API, Bedrock) ([#26892](https://github.com/openai/codex/issues/26892), [#27021](https://github.com/openai/codex/issues/27021), [#26860](https://github.com/openai/codex/issues/26860)).
*   **Windows Instability:** Windows users continue to face severe platform-specific friction, including broken sandbox setups ([#24391](https://github.com/openai/codex/issues/24391)), full WSL crashes caused by Codex OOM errors ([#18041](https://github.com/openai/codex/issues/18041)), and local states being wiped after power losses ([#26990](https://github.com/openai/codex/issues/26990)).
*   **Context Bloat & Runaway Tokens:** Session management is costing users real money. Unchecked compaction histories are bloating logs up to 2GB ([#24948](https://github.com/openai/codex/issues/24948)), and a nasty bug causes Codex to ingest its own JSONL logs during token investigations ([#27131](https://github.com/openai/codex/issues/27131)).
*   **Cross-Platform Auth/Account Bugs:** Migrating accounts or using enterprise tokens is breaking down. Business access tokens are returning 401s ([#25246](https://github.com/openai/codex/issues/25246)), and migrating from Business to Personal workspaces breaks GitHub PR review integrations ([#26867](https://github.com/openai/codex/issues/26867)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-10

## 1. Today's Highlights
Gemini CLI saw a burst of release activity today, patching the stable `v0.45` and preview `v0.46` branches to fix a Vertex AI model mapping issue, while rolling out new nightly and internal testing for the upcoming Gemini 3.5 Flash models. The community and contributors remain heavily focused on hardening the agent subsystem, particularly addressing subagent hangs, path traversal security vulnerabilities in skill management, and Auto Memory reliability.

## 2. Releases
*   **v0.45.3 (Stable Patch):** Cherry-picked a fix for Vertex AI model mapping (PR [#27769](https://github.com/google-gemini/gemini-cli/pull/27769)).
*   **v0.46.0-preview.3 (Preview Patch):** Applied the same Vertex AI model mapping fix to the preview branch (PR [#27768](https://github.com/google-gemini/gemini-cli/pull/27768)).
*   **v0.47.0-nightly.20260609:** Updated Antigravity transition banner limits and removed experimental text from browser agent documentation.

## 3. Hot Issues
1.  **[#21409 Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409):** A critical P1 bug where deferring to the generalist agent causes the CLI to hang indefinitely. Highly requested with 8 👍, users note it forces them to manually instruct the model to avoid subagents.
2.  **[#24246 Gemini CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246):** Users hitting API limits when enabling too many tools. The community is looking for smarter agent-side scoping of active tools.
3.  **[#25166 Shell command execution gets stuck](https://github.com/google-gemini/gemini-cli/issues/25166):** A P1 bug where the TUI hangs on "Awaiting user input" after a simple shell command finishes, frustrating terminal workflows.
4.  **[#26525 Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525):** Security/privacy concern where Auto Memory potentially exposes secrets in logs before the extraction model has a chance to redact them.
5.  **[#22323 Subagent recovery hides interruptions](https://github.com/google-gemini/gemini-cli/issues/22323):** When a subagent hits `MAX_TURNS`, it falsely reports `status: "success"`, hiding the fact that it timed out before completing its analysis.
6.  **[#27766 Thinking Bug](https://github.com/google-gemini/gemini-cli/issues/27766):** Fresh bug report highlighting severe latency issues where the agent gets stuck "thinking" for 7+ minutes on trivial tasks.
7.  **[#21968 Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968):** Users report that explicitly defined custom skills (e.g., for Gradle or Git) are ignored by the model unless strictly commanded to use them.
8.  **[#21983 browser subagent fails in wayland](https://github.com/google-gemini/gemini-cli/issues/21983):** P1 compatibility issue preventing Linux users on Wayland from utilizing the browser agent.
9.  **[#22745 AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745):** An investigation EPIC exploring AST tools (like AST grep) to allow the agent to read code methods precisely, reducing token noise and missed reads.
10. **[#26522 Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522):** Auto Memory gets stuck in a loop re-processing empty or low-signal sessions because it only marks them as processed if explicitly read.

## 4. Key PR Progress
1.  **[#27767 fix(cli): prevent path traversal vulnerabilities during skill install](https://github.com/google-gemini/gemini-cli/pull/27767):** Crucial security patch mitigating path traversal risks in `installSkill`, `linkSkill`, and `uninstallSkill`. (Follow-up to #27659).
2.  **[#27760 fix: use gemini-3.5-flash for all auth types including Vertex AI](https://github.com/google-gemini/gemini-cli/pull/27760):** Resolves an issue where Vertex AI and ADC auth flows failed to correctly map the `gemini-3.5-flash` model ID.
3.  **[#27705 Promote Gemini 3.1 Flash Lite to GA and support Gemini 3.5 Flash](https://github.com/google-gemini/gemini-cli/pull/27705):** Massive internal testing PR preparing the CLI for the next generation of default models.
4.  **[#27772 refactor(core): standardize tool output formatting](https://github.com/google-gemini/gemini-cli/pull/27772):** Introduces a `wrapUntrusted` helper to unify text transformations across external tools (MCP, shell, web-fetch), improving agent stability.
5.  **[#27698 fix(core): Ensure zero-quota limits fail fast to prevent retry loop hang](https://github.com/google-gemini/gemini-cli/pull/27698):** Prevents the CLI from getting trapped in a futile 10-attempt retry loop when a user has a hard quota limit of `0`.
6.  **[#27391 fix(cli): filter internal session context from history during resumption](https://github.com/google-gemini/gemini-cli/pull/27391):** Cleans up the TUI by preventing raw XML `session_context` blocks from being displayed when resuming a session.
7.  **[#27771 Fix MCP header encoding for non-ASCII values](https://github.com/google-gemini/gemini-cli/pull/27771):** Resolves an encoding bug where non-ASCII characters (e.g., Unicode text) in MCP HTTP transport headers caused discovery to crash.
8.  **[#27770 Avoid persisting empty resume sessions](https://github.com/google-gemini/gemini-cli/pull/27770):** Improves session management by filtering out empty or immediately-quit sessions from the `/resume` flow.
9.  **[#27765 Add documentation and migration commands for Antigravity CLI](https://github.com/google-gemini/gemini-cli/pull/27765):** Introduces platform-aware support to help users transition from Gemini CLI to the new Antigravity CLI.
10. **[#27619 fix(core): implement atomic update in MCP tool discovery](https://github.com/google-gemini/gemini-cli/pull/27619):** Fixes a "tool not found" error during transient network drops by ensuring atomic updates to the MCP tool registry.

## 5. Feature Request Trends
*   **Codebase Structural Awareness:** Strong momentum behind integrating Abstract Syntax Tree (AST) tools (Issues [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)). Developers want the agent to understand code structurally rather than via raw text search to reduce token waste and improve accuracy.
*   **Local Agent Backgrounding:** Users want the ability to send local subagents to the background (Issue [#22741](https://github.com/google-gemini/gemini-cli/issues/22741)) using keyboard shortcuts (like `Ctrl+B`) so they can continue working while the CLI handles exploration or builds.
*   **Resilient Browser & Remote Agents:** Requests to improve the `browser_agent`'s handling of locked profiles/sessions (Issue [#22232](https://github.com/google-gemini/gemini-cli/issues/22232)) and advancing authentication for remote agents (Issue [#20303](https://github.com/google-gemini/gemini-cli/issues/20303)).
*   **Better Self-Awareness:** The agent needs to understand its own mechanics better, specifically knowing its exact CLI flags and hotkeys without hallucinating (Issue [#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).

## 6. Developer Pain Points
*   **Agent Unreliability & Infinite Loops:** The most prominent frustration is the CLI hanging. Whether it's the generalist agent hanging forever (Issue [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell commands getting stuck waiting for input (Issue [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), or the model getting trapped in endless "thinking" loops (Issue [#27766](https://github.com/google-gemini/gemini-cli/issues/27766)), users are frequently forced to manually kill and restart processes.
*   **Ignored Tooling Configurations:** Developers are annoyed that custom skills, agents, and configurations (like `maxTurns` in `settings.json`) are silently ignored by the model (Issues [#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).
*   **Messy Workspace Generation:** When restricted to shell execution, the model litters random directories with temporary scripts instead of writing to `/tmp` or standard build directories, creating cleanup overhead (Issue [#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-10

## 1. Today's Highlights
GitHub Copilot CLI shipped **v1.0.61**, bringing UI polish to the `/agents` picker and a new interactive `/settings` dialog for browsing and editing all user configurations in one place. A resume-session blank screen bug was also fixed. The community remains highly active around MCP server integrations, worktree behavior, and a v1.0.60 plugin regression affecting `additionalContext` injection.

---

## 2. Releases

### [v1.0.61](https://github.com/github/copilot-cli/releases/tag/v1.0.61) (2026-06-09)
- **Polished `/agents` picker & Create New Agent wizard** with consistent borders, headers, and styled inputs.
- **Fixed blank screen on session resume** — resuming a local session could previously leave the TUI blank.
- **New `/settings` interactive dialog** — browse and edit all user settings from one unified place.
- Minor improvements to local session resume flow.

---

## 3. Hot Issues

| # | Issue | Why it matters |
|---|-------|----------------|
| 1 | [#53 — Bring back GitHub Copilot in the CLI commands](https://github.com/github/copilot-cli/issues/53) | With 75 👍 and 31 comments, this is the repository's most-upvoted open issue. The community has begun building alternatives (e.g., `shell-ai`) after 6+ months of no official response. A bellwether for community trust. |
| 2 | [#1703 — Org-enabled models (e.g. Gemini 3.1 Pro) missing from CLI](https://github.com/github/copilot-cli/issues/1703) | 54 👍, 29 comments. The CLI shows a reduced model list vs. VS Code Copilot even when models are org-enabled. Blocks enterprise adoption of multi-model strategies. |
| 3 | [#3596 — "Not authenticated" on model list after session resume](https://github.com/github/copilot-cli/issues/3596) | 10 👍. Resuming a session breaks `/model` authentication, forcing users to start fresh. Directly impacts session persistence workflows. |
| 4 | [#3727 — Regression in v1.0.60: userPromptSubmitted hook additionalContext no longer injected](https://github.com/github/copilot-cli/issues/3727) | Zeroed in to a 31-minute window before v1.0.60 shipped. Plugin hooks that inject context into the planner silently stopped working — critical for anyone using custom prompt augmentation. |
| 5 | [#2243 — Worktrees should be disabled by default](https://github.com/github/copilot-cli/issues/2243) vs. [#1613 — Built-in git worktree lifecycle management](https://github.com/github/copilot-cli/issues/1613) | A polarity pair (8 👍 vs. 31 👍). One camp wants worktrees off by default due to merge-back nightmares; the other wants richer worktree lifecycle support. Signals a configuration UX gap. |
| 6 | [#3701 — Runaway MCP server spawning on Windows](https://github.com/github/copilot-cli/issues/3701) | IDE lock-file watcher triggers a re-init loop, spawning MCP servers repeatedly. Closed but highlights fragility in MCP host lifecycle on Windows. |
| 7 | [#3731 — Restore web_fetch access to private networks](https://github.com/github/copilot-cli/issues/3731) | v1.0.60 blocked private-network fetches for security, breaking enterprise agents that read internal templates. A policy-vs-usability tension. |
| 8 | [#3601 — Bash tool drops non-ASCII characters (LC_CTYPE=C)](https://github.com/github/copilot-cli/issues/3601) | Shells spawned with `LANG="" LC_CTYPE="C"` silently strip CJK and accented characters. A blocking issue for international developer teams. |
| 9 | [#3706 — Remote MCP OAuth fan-out causes rate limits](https://github.com/github/copilot-cli/issues/3706) | A single session triggered 79 MCP client initializations against one Azure DevOps server. Highlights scaling issues in the MCP host connection manager. |
| 10 | [#3732 — Edit tool corrupts non-UTF-8 bytes](https://github.com/github/copilot-cli/issues/3732) | Files with legacy single-byte codepage bytes (CP1252) are silently corrupted to U+FFFD on edit. Data-loss bug affecting projects with mixed encodings. |

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours. The pipeline is quiet, which may indicate the team is batch-preparing changes for an upcoming release cycle.

---

## 5. Feature Request Trends

1. **MCP Server Configuration & Lifecycle** — Multiple issues ([#3548](https://github.com/github/copilot-cli/issues/3548), [#3083](https://github.com/github/copilot-cli/issues/3083), [#3706](https://github.com/github/copilot-cli/issues/3706)) request persistent MCP server enablement via config, auto-loading from `.mcp.json`, and better connection lifecycle management. MCP is clearly the hottest integration surface.

2. **Enterprise & Custom Model Support** — [#1703](https://github.com/github/copilot-cli/issues/1703) (org-enabled models) and [#3730](https://github.com/github/copilot-cli/issues/3730) (enterprise-managed custom models) reflect strong demand for parity between CLI and VS Code Copilot in multi-model, enterprise environments.

3. **Session Portability** — [#3729](https://github.com/github/copilot-cli/issues/3729) (share local sessions across machines) and [#3596](https://github.com/github/copilot-cli/issues/3596) (auth persistence on resume) point to a desire for seamless session continuity across devices and reconnects.

4. **Worktree Control** — The tension between [#1613](https://github.com/github/copilot-cli/issues/1613) (richer worktree management) and [#2243](https://github.com/github/copilot-cli/issues/2243) (disable by default) suggests the community needs a clear opt-in/out model with safer defaults.

5. **Observability & Plugin Hooks** — [#3725](https://github.com/github/copilot-cli/issues/3725) (OpenTelemetry skill-level spans) and [#2540](https://github.com/github/copilot-cli/issues/2540) (plugin `preToolUse` hooks not firing) indicate a maturing plugin ecosystem demanding better telemetry and reliable hook execution.

---

## 6. Developer Pain Points

- **Encoding & Internationalization** — At least three issues ([#3601](https://github.com/github/copilot-cli/issues/3601), [#3732](https://github.com/github/copilot-cli/issues/3732), [#3726](https://github.com/github/copilot-cli/issues/3726)) involve broken handling of non-ASCII/non-UTF-8 content. This is a recurring blind spot that disproportionately affects international users and legacy codebases.

- **Regression Velocity** — v1.0.60 introduced at least one plugin-breaking regression ([#3727](https://github.com/github/copilot-cli/issues/3727)) and a private-network fetch block ([#3731](https://github.com/github/copilot-cli/issues/3731)) that broke enterprise workflows. Developers are frustrated by breaking changes arriving without migration notes.

- **Windows Platform Gaps** — Uninstall failures ([#3662](https://github.com/github/copilot-cli/issues/3662)), editor launch issues ([#3733](https://github.com/github/copilot-cli/issues/3733)), clipboard encoding ([#3726](https://github.com/github/copilot-cli/issues/3726)), and terminal zoom interception ([#3735](https://github.com/github/copilot-cli/issues/3735)) collectively paint a picture of Windows as a second-class platform.

- **Long-Standing Ignored Requests** — Issue [#53](https://github.com/github/copilot-cli/issues/53) (75 👍, open since Sept 2025) remains unanswered after 9 months. The perception of silence erodes confidence, even as the release cadence remains active.

- **Session Reliability** — Blank screens on resume (fixed in v1.0.61), auth loss on resume ([#3596](https://github.com/github/copilot-cli/issues/3596)), and `cwd`/`branch` not persisting ([#2655](https://github.com/github/copilot-cli/issues/2655)) suggest the session persistence layer needs architectural hardening.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-10

## 1. Today's Highlights
Activity around the Kimi Code CLI repository was relatively quiet over the past 24 hours, with no new version releases or Pull Requests submitted. The community's focus was directed entirely toward a newly opened bug report regarding tool reliability. Specifically, users are actively reporting failures with the integrated `Edit` tool when running the latest `v0.12.0` client alongside the newer `k2.6` model.

## 2. Releases
*No new releases were published in the last 24 hours. The current stable version remains v0.12.0.*

## 3. Hot Issues
*Note: Only 1 Issue was created or updated in the last 24 hours.*

*   **[#2443 [OPEN] [bug] Edit tool keeps failing in new kimi-code](https://github.com/MoonshotAI/kimi-cli/issues/2443)**
    *   **Author:** iaindooley
    *   **Why it matters:** A critical path for automated coding agents is reliable file manipulation. If the `Edit` tool is failing frequently at the output stage, it severely degrades the CLI's ability to autonomously write or refactor code. 
    *   **Community Reaction:** Newly created with no comments or upvotes yet, but given the user is running the latest stack (v0.12.0 + model `k2.6` on Debian), this issue serves as an immediate signal for maintainers to check for potential regressions in the newest model's tool-calling capabilities.

## 4. Key PR Progress
*No Pull Requests were created or updated in the last 24 hours.*

## 5. Feature Request Trends
*Due to the limited dataset (only 1 issue opened/updated in the past 24 hours), broader feature request trends cannot be accurately determined for today. The current focus of the community is purely on bug triaging rather than feature ideation.*

## 6. Developer Pain Points
Based on today's snapshot, the primary developer friction point revolves around **tool execution stability during model transitions**. 
*   **Model/Version Compatibility:** The failure of the `Edit` tool when using the `k2.6` model indicates that as MoonshotAI rolls out newer underlying models, the CLI's existing tool-execution interfaces may be experiencing prompt formatting or parsing regressions, requiring frequent debugging by end-users.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## OpenCode Community Digest — 2026-06-10

### 1. Today's Highlights
Activity in the OpenCode repository remains high with no new official releases shipped in the last 24 hours, but the core team and contributors are actively merging foundational refactors. The most significant movement is a major overhaul of the core filesystem search architecture and continued progress on Agent Communication Protocol (ACP) compatibility. On the issue tracker, memory management, prompt caching performance, and billing confusion dominated community discussions.

---

### 2. Releases
No new releases were published in the last 24 hours.

---

### 3. Hot Issues

*   **[#20695] Memory Megathread** — 91 comments, 64 👍
    A centralized hub for tracking memory leak reports. The maintainers explicitly warn users not to post LLM-generated solutions and instead request heap snapshots to aid debugging. This remains the most active issue on the tracker.
    [View Issue](https://github.com/anomalyco/opencode/issues/20695)

*   **[#2072] Support for Cursor?** — 70 comments, 183 👍
    Following Cursor’s release of its own CLI, the community is heavily requesting native integration or API support within OpenCode. With 183 upvotes, this is clearly a highly requested feature.
    [View Issue](https://github.com/anomalyco/opencode/issues/2072)

*   **[#13984] Cannot copy and paste in CLI** — 45 comments, 20 👍
    A critical UX bug where text copied in the CLI fails to paste externally. Despite showing a "copied to clipboard" confirmation, the OS clipboard remains empty.
    [View Issue](https://github.com/anomalyco/opencode/issues/13984)

*   **[#3472] Context awareness in VS Code** — 38 comments, 26 👍
    Users report that the VS Code extension's context awareness feature fails to pass selected code to the agent. This indicates a breakdown in the IDE-to-agent context bridge.
    [View Issue](https://github.com/anomalyco/opencode/issues/3472)

*   **[#27167] Add native session goals with `/goal`** — 38 comments, 66 👍
    A popular feature request to introduce a persistent `/goal` command to define and track the lifecycle/objective of a session across multiple agent interactions.
    [View Issue](https://github.com/anomalyco/opencode/issues/27167)

*   **[#906] Paste to attach image** — 34 comments, 22 👍
    Users want the ability to paste images directly from the clipboard into the chat interface, rather than relying solely on drag-and-drop. 
    [View Issue](https://github.com/anomalyco/opencode/issues/906)

*   **[#31525] Prompt loop reloads all messages, breaking cache** — 3 comments
    A highly technical but crucial bug affecting Anthropic API costs. The prompt loop reloads all messages from the DB every iteration, breaking object identity and defeating prompt cache byte-identity.
    [View Issue](https://github.com/anomalyco/opencode/issues/31525)

*   **[#31498] Extremely bad developer prompt** — 6 comments, 1 👍
    A user critique of OpenCode's base developer prompt, noting it frequently confuses the agent with trivial tasks (e.g., using `mv` for a file). Sparks discussion on system prompt optimization.
    [View Issue](https://github.com/anomalyco/opencode/issues/31498)

*   **[#31560] Bedrock API unsupported field with Fable 5** — 3 comments
    A breaking bug preventing the use of Anthropic's Fable 5 model via AWS Bedrock due to OpenCode sending invalid data retention parameters.
    [View Issue](https://github.com/anomalyco/opencode/issues/31560)

*   **[#26508] & [#28226] "ZEN scam" / GO subscription confusion** — 16 combined comments
    Multiple users report severe UX friction during the GO subscription flow, resulting in accidental purchases of a third-party "ZEN" API key instead of an official OpenCode subscription.
    [View Issue #26508](https://github.com/anomalyco/opencode/issues/26508) | [View Issue #28226](https://github.com/anomalyco/opencode/issues/28226)

---

### 4. Key PR Progress

*   **[#31566] refactor(core): unify filesystem search service**
    A massive architectural refactor replacing the legacy search engine and `LocationSearch` with a unified, cwd-based `Search` service. It caches find indexes per cwd for responsive autocomplete and consolidates filesystem endpoints.
    [View PR](https://github.com/anomalyco/opencode/pull/31566)

*   **[#31392] feat(acp): stage edits for native review in ACP clients**
    Introduces compatibility with native file review interfaces in Agent Communication Protocol (ACP) clients like Zed and Devin, allowing seamless staging of AI-generated edits.
    [View PR](https://github.com/anomalyco/opencode/pull/31392)

*   **[#31570] feat: drive reasoning variants from models.dev**
    Eliminates ~500 lines of hardcoded reasoning variant tables by dynamically pulling `reasoning_options` from the models.dev registry for 431+ models.
    [View PR](https://github.com/anomalyco/opencode/pull/31570)

*   **[#30957] fix(core): evict Bedrock SDK cache on expired STS credentials**
    Resolves a silent failure where AWS Bedrock models became unresponsive after 60 minutes because the AI SDK held onto expired STS credentials.
    [View PR](https://github.com/anomalyco/opencode/pull/30957)

*   **[#31564] fix(core): surface NamedError detail without doubling the tag**
    Fixes a `NamedError` bug where `Error.message` was identical to `Error.name`, causing diagnostic logging to obscure the actual error details.
    [View PR](https://github.com/anomalyco/opencode/pull/31564)

*   **[#29447] feat(opencode): add task model override**
    Allows the primary agent to specify a different LLM model for subagents at runtime via the Task tool, optimizing cost/speed for delegated tasks.
    [View PR](https://github.com/anomalyco/opencode/pull/29447)

*   **[#30509] feat(permission): wire permission.ask plugin hook**
    Implements the `permission.ask` plugin hook, allowing custom plugins to intercept and manage runtime permission requests.
    [View PR](https://github.com/anomalyco/opencode/pull/30509)

*   **[#30508] fix(permission): prevent doom_loop infinite popups**
    Fixes an infinite UI loop that occurred when unhandled permission rejections triggered repeated popups.
    [View PR](https://github.com/anomalyco/opencode/pull/30508)

*   **[#29995] fix(edit): preserve leading whitespace in TrimmedBoundaryReplacer**
    Fixes a code application bug where indentation/leading whitespace was stripped during edit operations, corrupting file formatting.
    [View PR](https://github.com/anomalyco/opencode/pull/29995)

*   **[#31552] fix(plugin): skip cross-kind plugins in readV1Plugin**
    Resolves a server crash caused by the plugin loader attempting to execute cross-kind plugins in the wrong detection mode.
    [View PR](https://github.com/anomalyco/opencode/pull/31552)

---

### 5. Feature Request Trends

*   **External IDE/CLI Integrations:** High demand for native support of external tools within the OpenCode ecosystem, specifically Cursor CLI ([#2072](https://github.com/anomalyco/opencode/issues/2072)) and advanced MCP client capabilities ([#28567](https://github.com/anomalyco/opencode/issues/28567)).
*   **Advanced Context & Session Management:** Users want better long-term context handling. Key requests include native persistent session goals ([#27167](https://github.com/anomalyco/opencode/issues/27167)) and better context window limits for local models ([#31433](https://github.com/anomalyco/opencode/issues/31433)).
*   **Media & Input Upgrades:** Pasting images directly into the prompt ([#906](https://github.com/anomalyco/opencode/issues/906)) and supporting drag-and-drop for Microsoft Office files ([#27689](https://github.com/anomalyco/opencode/issues/27689)) are highly requested to improve multi-modal workflows.

---

### 6. Developer Pain Points

*   **Memory Leaks & Prompt Caching:** Resource management remains a sore spot. Memory leaks ([#20695](https://github.com/anomalyco/opencode/issues/20695)) require continuous user monitoring, while architectural flaws in the prompt loop ([#31525](https://github.com/anomalyco/opencode/issues/31525)) are breaking Anthropic's prompt caching, drastically increasing API costs.
*   **Clipboard & Input Failures:** Broken OS clipboard interactions ([#13984](https://github.com/anomalyco/opencode/issues/13984)) and multi-line paste splitting into multiple messages ([#23524](https://github.com/anomalyco/opencode/issues/23524)) are causing severe daily friction for terminal users.
*   **Context Awareness in VS Code:** The VS Code extension's failure to pass selected code context ([#3472](https://github.com/anomalyco/opencode/issues/3472), [#22235](https://github.com/anomalyco/opencode/issues/22235)) undermines the core value proposition of the IDE integration. 
*   **Billing UX Confusion:** The UI flow for the "GO" subscription is leading to accidental purchases of unrelated "ZEN" API keys ([#26508](https://github.com/anomalyco/opencode/issues/26508)), causing frustration and distrust among paying users.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-10

## 1. Today's Highlights
Pi **v0.79.1** ships with day-one support for **Claude Fable 5** across Anthropic and Amazon Bedrock, complete with adaptive thinking and a new `xhigh` effort tier. The release also introduces default positional arguments in prompt templates (`${1:-7}`), and a flurry of merged PRs already adds sibling **Claude Mythos 5** models and fixes Fable-specific thinking quirks. Meanwhile, the newly introduced "Project Trust" security gate sparked immediate community debate, driving quick iterative improvements to trust UX and extension APIs.

## 2. Releases
### v0.79.1
- **Claude Fable 5** — Available on Anthropic and Amazon Bedrock providers; supports adaptive thinking and `xhigh` reasoning effort.
- **Prompt template defaults** — Positional arguments in templates now accept defaults (e.g., `${1:-7}`), making reusable prompts more flexible without requiring every argument.

## 3. Hot Issues

1. **[#5514](https://github.com/earendil-works/pi/issues/5514) — Project Trust Feature Feedback** (👍 12, 24 comments)
   The newly shipped trust-gating prompt annoyed power users who open many folders and don't want repeated trust dialogs across machines. The thread quickly generated design alternatives, leading directly to PR #5549.

2. **[#4984](https://github.com/earendil-works/pi/issues/4984) — Interactive mode crash on transient terminal EPIPE** (13 comments)
   EPIPE errors from closed terminal pipes crash Pi unexpectedly. Marked *in progress*, it highlights fragility in the Node.js TUI signal handling.

3. **[#4877](https://github.com/earendil-works/pi/issues/4877) — Session folder collision** (👍 2, 11 comments)
   Path-to-folder-name hashing can map two distinct paths (`/a/b/c/d` vs `/a-b/c-d`) to the same session directory, risking cross-contamination of session state.

4. **[#5363](https://github.com/earendil-works/pi/issues/5363) — Add amazon-bedrock-mantle provider** (👍 3, 7 comments)
   Requests an OpenAI-compatible Bedrock Mantle provider for GPT-5.5/5.4 models that don't use the standard Converse API. Already addressed by PR #5509.

5. **[#5464](https://github.com/earendil-works/pi/issues/5464) — Local models: 3-5 min "Working" latency** (7 comments)
   Ollama users report multi-minute stalls on trivial messages, suggesting Pi's agent loop may be doing expensive work (context compaction, model warm-up) unnecessarily for local models.

6. **[#5427](https://github.com/earendil-works/pi/issues/5427) — OpenAI Codex transport issues** (👍 4, 4 comments)
   Codex SSE connections time out after 10 s and then fail permanently, making the provider unusable until restart. Regression in v0.78.x.

7. **[#5511](https://github.com/earendil-works/pi/issues/5511) — Error: context shift is disabled** (4 comments)
   Context compaction fails with a 502 at ~51% utilization, blocking long sessions on certain providers. Directly impacts heavy-codebase workflows.

8. **[#5531](https://github.com/earendil-works/pi/issues/5531) — Kimi K2.6 ignores `thinking off`** (5 comments)
   Despite the UI showing *Thinking off*, tokens are still spent on reasoning, pointing to a provider-specific payload gap.

9. **[#5046](https://github.com/earendil-works/pi/issues/5046) — Persist thinking level to session only** (5 comments)
   Users frequently toggle thinking levels and don't want every change written to global settings. Resolved by merged PR #5270.

10. **[#5559](https://github.com/earendil-works/pi/issues/5559) — Azure GPT-5.5/5.4 context window is 1M, not 272k** (2 comments)
    Static model metadata underreports the Azure context limit, causing premature compaction and wasted context capacity.

## 4. Key PR Progress

| PR | Description | Status |
|---|---|---|
| [#5563](https://github.com/earendil-works/pi/pull/5563) | Adds **Claude Fable 5 & Mythos 5** model metadata for the Anthropic provider, marking them as always-adaptive thinking models. | Closed (merged) |
| [#5561](https://github.com/earendil-works/pi/pull/5561) | Adds **Fable 5** to the **Amazon Bedrock** provider with adaptive thinking and `xhigh` effort support. | Open |
| [#5567](https://github.com/earendil-works/pi/pull/5567) | Fixes Fable 5 crash when `thinking off` is selected — nulls the thinking param since Fable doesn't support disabled mode. | Open |
| [#5553](https://github.com/earendil-works/pi/pull/5553) | Implements **prompt template argument defaults** (`${N:-default}`) with single-pass substitution and tests. | Closed (merged) |
| [#5549](https://github.com/earendil-works/pi/pull/5549) | Overhauls **project trust UX**: global toggle, parent-folder inheritance, one-click trust in the approval dialog. | Closed (merged) |
| [#5270](https://github.com/earendil-works/pi/pull/5270) | Makes model and thinking-level changes **session-only by default**, stopping global-settings pollution. | Closed (merged) |
| [#5509](https://github.com/earendil-works/pi/pull/5509) | New **Amazon Bedrock Mantle** OpenAI Responses provider for GPT-5.5/5.4 on Bedrock's OpenAI-compatible endpoint. | Open |
| [#5547](https://github.com/earendil-works/pi/pull/5547) | Adds `PI_EXPERIMENTAL=1` **feature guard** as described in RFC 0043, enabling opt-in experimental features. | Closed (merged) |
| [#5555](https://github.com/earendil-works/pi/pull/5555) | Fixes dropped **reasoning signatures** when streamed before tool_calls (affects OpenRouter + Gemini). | Closed (merged) |
| [#5562](https://github.com/earendil-works/pi/pull/5562) | Fixes **Markdown loose list rendering** — inserts blank lines between list items per CommonMark spec. | Open |

## 5. Feature Request Trends

- **Trust & security UX refinement** — The trust gate is here to stay, but users want granular control: global disable toggles, parent-folder inheritance, and extension API exposure (`isProjectTrusted`).
- **Multi-cloud / edge provider expansion** — Strong demand for non-Converse Bedrock endpoints (Mantle), Azure corrections (1M context, stateless mode), and OpenRouter cost inheritance.
- **Session-level configuration over global** — Model selection, thinking level, and other transient preferences should default to per-session scope rather than writing to `~/.pi/`.
- **Local-model performance parity** — Ollama and other local providers trigger unnecessary agent-loop overhead; users expect sub-second response times for simple prompts.
- **CJK & terminal compatibility** — Recurring requests for proper CJK word wrapping, tmux image rendering, and kitty key-handling fixes, reflecting Pi's growing international user base.

## 6. Developer Pain Points

- **Unhelpful error messages**: Invalid `models.json` crashes with a raw `JSON.parse` stack trace and no filename hint ([#5418](https://github.com/earendil-works/pi/issues/5418)); context compaction errors are equally opaque ([#5511](https://github.com/earendil-works/pi/issues/5511)).
- **Provider-specific parameter mismatches**: Silent failures where `maxTokens` maps to the wrong API field ([#5331](https://github.com/earendil-works/pi/issues/5331)), or Azure defaults to stateful mode causing dropped reasoning ([#5530](https://github.com/earendil-works/pi/issues/5530)), erode trust in provider reliability.
- **Terminal rendering regressions**: Links not clickable after alternate-term-mode switch ([#4180](https://github.com/earendil-works/pi/issues/4180)), viewport locked during streaming on Windows ([#5192](https://github.com/earendil-works/pi/issues/5192)), and broken tmux inline images ([#5098](https://github.com/earendil-works/pi/issues/5098)) suggest the TUI layer needs more integration testing across terminal emulators.
- **Local model latency**: Multi-minute "Working" stalls ([#5464](https://github.com/earendil-works/pi/issues/5464)) make local-only workflows impractical, pushing developers back to cloud providers.
- **Extension API gaps**: Extensions cannot query project trust status ([#5523](https://github.com/earendil-works/pi/issues/5523)) and custom tool operations receive host-OS-resolved paths, breaking cross-platform SSH workflows ([#5350](https://github.com/earendil-works/pi/issues/5350)).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-10

## 1. Today's Highlights

The Qwen Code team has kicked off the **v0.18.0 release cycle**, pushing two preview releases (`v0.18.0-preview.0` and `v0.18.0-preview.1`) within the last 24 hours, starting with a CLI fix to skip thought parts during copy output. The community remains highly engaged around the **daemon/serve architecture**, with ACP (Agent Client Protocol) Streamable HTTP transport nearing full parity and several PRs hardening the background automation layer. Extension ecosystem improvements—ranging from project-level installs to archive sources—also saw significant traction today.

## 2. Releases

- **v0.18.0-preview.1** & **v0.18.0-preview.0** — Initial v0.18.0 preview builds. Changes include the `v0.17.1` release chore and `fix(cli): skip thought parts in copy output` by [@he-yufeng](https://github.com/he-yufeng) ([PR #4742](https://github.com/QwenLM/zwen-code/pull/4742)). These are early pre-release builds; expect rapid iteration as the v0.18 stabilization cycle begins.

## 3. Hot Issues

1. **[#4514](https://github.com/QwenLM/qwen-code/issues/4514) — Tracking `qwen serve` daemon capability gaps (14 comments)**  
   A meta-tracking issue mapping remaining gaps in the HTTP/SSE daemon surface post-v0.16-alpha. Critical for anyone relying on remote/IDE integrations, it's becoming the central planning board for daemon maturity.

2. **[#4782](https://github.com/QwenLM/qwen-code/issues/4782) — ACP Streamable HTTP transport implementation (4 comments)**  
   The daemon now implements the ACP Streamable HTTP transport at `/acp`, enabling adapter-free connections from Zed, Goose, and JetBrains. This is a major interoperability milestone.

3. **[#4815](https://github.com/QwenLM/qwen-code/issues/4815) — Severe OOM with `--resume` and broken Escape key (CLOSED, 9 comments)**  
   A critical P1 bug where session resume triggers OOM within ~10 minutes and the Escape key becomes non-functional. The community confirmed 100% reproducibility; closure suggests a fix landed in the v0.18 previews.

4. **[#4615](https://github.com/QwenLM/qwen-code/issues/4615) — Project-scoped `.mcp.json` with pending approval semantics (5 comments)**  
   Requests that workspace-local MCP server configs require explicit user approval before starting. Important for credential security in multi-developer environments.

5. **[#4727](https://github.com/QwenLM/qwen-code/issues/4727) — Dual Output mode TUI unresponsive (5 comments)**  
   When using named pipes (`--json-file` / `--input-file`), the TUI freezes on input submission. Directly relevant to PR [#4894](https://github.com/QwenLM/qwen-code/pull/4894) which addresses FIFO blocking.

6. **[#4747](https://github.com/QwenLM/qwen-code/issues/4747) — Global user-level auto-memory at `~/.qwen/memories/` (CLOSED, 4 comments)**  
   Currently memories are per-project; users want cross-project user preference persistence. Closure indicates this may have been accepted or a PR is in flight.

7. **[#4904](https://github.com/QwenLM/qwen-code/issues/4904) — Cannot switch to newer models on Coding Plan (2 comments)**  
   Users on the Coding Plan tier report `qwen3.7-plus` is unavailable through the CLI despite being accessible in Claude. A model availability matrix mismatch that's frustrating paying users.

8. **[#4729](https://github.com/QwenLM/qwen-code/issues/4729) — Runtime snapshot prefix leaks into `settings.model.name` (CLOSED, 3 comments)**  
   On restart, internal runtime prefixes like `$runtime|openai|` stack in the model name, causing 404 errors. A configuration corruption bug affecting OpenAI-compatible providers.

9. **[#4888](https://github.com/QwenLM/qwen-code/issues/4888) — IDEA plugin `ask_user_question` not showing text (3 comments)**  
   The JetBrains plugin renders question dialogs without text or input fields—only submit/cancel buttons. A high-impact UX blocker for IDE users.

10. **[#4876](https://github.com/QwenLM/qwen-code/issues/4876) — Subagent image reading returns irrelevant content (3 comments)**  
    When a subagent uses `read_file` on images, the model returns unrelated content, while the main agent handles it correctly. Highlights a tool-context isolation bug in the multi-agent stack.

## 4. Key PR Progress

1. **[#4827](https://github.com/QwenLM/qwen-code/pull/4827) — ACP/REST parity: 29 new `_qwen/*` methods (+935 lines)** by @chiga0  
   Achieves full ACP/REST method parity for the daemon, adding session extensions (recap, shell, detach), workspace ops, and more. Foundational for editor integrations.

2. **[#4890](https://github.com/QwenLM/qwen-code/pull/4890) — Add `/cd` command** by @qqqys  
   Allows changing the session working directory without restart, with path validation and workspace trust prompts. Addresses a long-standing workflow friction point.

3. **[#4835](https://github.com/QwenLM/qwen-code/pull/4835) — Project-level extension install and management** by @BZ-D  
   Extensions can now be scoped to `project` (`.qwen/extensions/`) in addition to `user` scope, enabling team-shareable extension configurations.

4. **[#4897](https://github.com/QwenLM/qwen-code/pull/4897) — Persist file history snapshots for cross-session `/rewind`** by @doudouOUC  
   Moves `FileHistorySnapshot` from in-memory to JSONL, enabling `/rewind` to work after process exit. Critical for session resume reliability.

5. **[#4850](https://github.com/QwenLM/qwen-code/pull/4850) — Interactive multi-tab `/extensions` manager** by @BZ-D  
   Transforms `/extensions` into a three-tab UI (Installed / Discover / Sources) covering the full extension lifecycle. A major UX upgrade for extension management.

6. **[#4853](https://github.com/QwenLM/qwen-code/pull/4853) — `enter_plan_mode` tool and Plan Approval Gate** by @callmeYe  
   Lets the model proactively enter plan mode for complex tasks, with an approval gate before execution. A key piece of the autonomous agent safety story.

7. **[#4894](https://github.com/QwenLM/qwen-code/pull/4894) — Fix FIFO blocking in Dual Output bridge** by @chiga0  
   Opens named pipes with `O_RDWR | O_NONBLOCK` when no reader is connected, preventing the TUI freeze reported in [#4727](https://github.com/QwenLM/qwen-code/issues/4727).

8. **[#4810](https://github.com/QwenLM/qwen-code/pull/4810) — Isolate OpenAI SDK abort listener leak** by @yiliang114  
   Wraps `AbortSignal` in per-request child controllers to prevent memory leaks from the SDK's internal listener accumulation. Directly relevant to OOM issues like [#4815](https://github.com/QwenLM/qwen-code/issues/4815).

9. **[#4161](https://github.com/QwenLM/qwen-code/pull/4161) — Add `/auto-improve` command** by @DragonnZhang  
   A session-scoped loop for small, verifiable repository improvements with scheduling and local state tracking. An ambitious autonomous code improvement feature.

10. **[#3778](https://github.com/QwenLM/qwen-code/pull/3778) — Desktop app package with Qwen ACP SDK integration** by @DragonnZhang  
    Adds a full `packages/desktop/` package integrating the ACP SDK, paving the way for a standalone Qwen Code desktop application.

## 5. Feature Request Trends

- **Memory & Context Management**: Strong demand for global user-level memory ([#4747](https://github.com/QwenLM/qwen-code/issues/4747)), configurable user-profile constraints ([#4898](https://github.com/QwenLM/qwen-code/issues/4898)), and time-awareness in responses ([#4899](https://github.com/QwenLM/qwen-code/issues/4899)) show users want smarter, persistent context across sessions and projects.

- **Daemon & ACP Maturity**: The serve/daemon surface dominates discussion, with ACP transport parity ([#4782](https://github.com/QwenLM/qwen-code/issues/4782)), session lifecycle management, and IDE plugin reliability being key themes. This is clearly the architectural priority for v0.18.

- **Extension & MCP Ecosystem**: Requests for archive/URL installation ([#4910](https://github.com/QwenLM/qwen-code/issues/4910)), in-process Python MCP servers ([#4889](https://github.com/QwenLM/qwen-code/issues/4889)), and project-scoped `.mcp.json` ([#4615](https://github.com/QwenLM/qwen-code/issues/4615)) indicate the community wants a rich, secure, and easy-to-configure tool/plugin layer.

- **Multi-Agent & Workflow Automation**: Porting Dynamic Workflows/Ultracode ([#4721](https://github.com/QwenLM/qwen-code/issues/4721)), background session flag persistence ([#4884](https://github.com/QwenLM/qwen-code/issues/4884)), and plan-mode tooling ([PR #4853](https://github.com/QwenLM/qwen-code/pull/4853)) reflect growing interest in sophisticated multi-agent orchestration.

## 6. Developer Pain Points

- **OOM & Memory Leaks**: The severe OOM on session resume ([#4815](https://github.com/QwenLM/qwen-code/issues/4815)) and the OpenAI SDK abort listener leak ([PR #4810](https://github.com/QwenLM/zwen-code/pull/4810)) are causing production crashes. These are high-priority reliability regressions that undermine trust in long-running sessions.

- **Model Switching & Configuration Fragility**: Runtime prefix leaking into settings ([#4729](https://github.com/QwenLM/zwen-code/issues/4729)), inability to switch to newer models on Coding Plan ([#4904](https://github.com/QwenLM/zwen-code/issues/4904)), and shared `baseUrl` duplication across providers ([#4813](https://github.com/QwenLM/zwen-code/issues/4813)) make multi-model setups fragile and error-prone.

- **IDE Plugin Immaturity**: The JetBrains plugin failing to render question dialogs ([#4888](https://github.com/QwenLM/zwen-code/issues/4888)) and indistinguishable models across providers in OpenWork ([#4877](https://github.com/QwenLM/zwen-code/issues/4877)) suggest the IDE integration layer needs significant hardening before it's production-ready.

- **Dual Output / Non-Interactive Mode**: FIFO blocking causing TUI freezes ([#4727](https://github.com/QwenLM/zwen-code/issues/4727)) makes the dual-output mode—critical for CI/CD and programmatic usage—unreliable. The fix in [PR #4894](https://github.com/QwenLM/zwen-code/pull/4894) is eagerly awaited.

- **Terminal Rendering Glitches**: Fragmented scrollback on resize ([#4891](https://github.com/QwenLM/zwen-code/issues/4891)), cursor stalling at wrap boundaries ([PR #4852](https://github.com/QwenLM/zwen-code/pull/4852)), and double-press down-arrow for subagent navigation ([#4907](https://github.com/QwenLM/zwen-code/issues/4907)) collectively erode the interactive CLI experience.

---

*Data sourced from [github.com/QwenLM/qwen-code](https://github.com/QwenLM/zwen-code) activity through 2026-06-10 00:00 UTC.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-10

## 1. Today's Highlights
The project released **v0.8.55**, officially rebranding the tool to **CodeWhale**, adding support for Together AI, OpenAI Codex, and a model catalog. This major identity shift has triggered several migration-related bugs as users attempt to update from the legacy `deepseek-tui` package. Meanwhile, maintainers have flooded the tracker with proposals targeting **token optimization and benchmark parity** against OpenAI's Codex CLI, alongside significant architectural improvements like a proposed hippocampal memory system for infinite-context recall.

## 2. Releases
- **[v0.8.55](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.55)**: Rebrands the canonical project, command, and npm package to `CodeWhale`. The legacy `deepseek-tui` npm package is now deprecated. It introduces dedicated **Together AI** and **OpenAI Codex** provider support, and ships a new **Model Catalog**. Users on older versions must follow `docs/REBRAND.md` to migrate.

## 3. Hot Issues
1. **[#2942](https://github.com/Hmbown/CodeWhale/issues/2942) [Bug] Agent executing unsolicited actions:** Users report the agent hallucinating instructions and acting autonomously, breaking projects. Sparks discussion around safety in YOLO mode. *(5 comments)*
2. **[#2922](https://github.com/Hmbown/CodeWhale/issues/2922) [Bug] YOLO mode verbosity:** The agent wastes tokens by repeatedly confirming it is in YOLO mode before every atomic action. *(4 comments)*
3. **[#2931](https://github.com/Hmbown/CodeWhale/issues/2931) [Closed] Auto-update notifications:** A widely approved proposal to add a background HTTP check on startup to notify users of new versions. *(3 comments)*
4. **[#2935](https://github.com/Hmbown/CodeWhale/issues/2935) [Enhancement] Hippocampal memory system:** Proposes an infinite-context memory architecture using memagents and semantic search to replace the current 1M-token window limitations. *(2 comments)*
5. **[#2924](https://github.com/Hmbown/CodeWhale/issues/2924) [Bug] npm update failures:** Users cannot upgrade to `codewhale` via npm, highlighting broken paths in the v0.8.55 rebrand release. *(1 comment)*
6. **[#2917](https://github.com/Hmbown/CodeWhale/issues/2917) [Bug] Cargo spawn failure:** Changing the binary name from `deepseek` to `codewhale` broke `cargo` installations, leaving the runtime unable to locate the new binary on PATH. *(1 comment)*
7. **[#1990](https://github.com/Hmbown/CodeWhale/issues/1990) [Enhancement] Global remote workbench:** Maintainener Hmbown outlines a US-first infra lane using AWS/DigitalOcean + Telegram to control the agent remotely. *(3 comments)*
8. **[#889](https://github.com/Hmbown/CodeWhale/issues/889) [Enhancement] Paseo Integration:** Community requests ACP protocol support for remote task delegation via the Paseo mobile app. *(2 comments)*
9. **[#2960](https://github.com/Hmbown/CodeWhale/issues/2960) [Bug] Broken rebrand migration path:** Formal tracking issue for fixing the `deepseek update` failure and providing clear copy-pasteable instructions for users. 
10. **[#1846](https://github.com/Hmbown/CodeWhale/issues/1846) [Enhancement] Unviewable proposed changes:** Users cannot see code diffs before approving them in the current TUI approval pane, blocking safe manual review. *(1 comment)*

## 4. Key PR Progress
1. **[#2925](https://github.com/Hmbown/CodeWhale/pull/2925) Add Together AI provider:** Implements canonical support across CLI, TUI, auth, and model registry for the newly released Together AI integration.
2. **[#2943](https://github.com/Hmbown/CodeWhale/pull/2943) Normalize macOS modifiers:** Fixes frustrating keyboard mapping issues by normalizing `Cmd` (SUPER) to `Ctrl` for terminal shortcuts on macOS.
3. **[#2949](https://github.com/Hmbown/CodeWhale/pull/2949) Decouple `allow_shell` from static prompt:** Moves shell permissions to the per-turn `<runtime_prompt>` tag to improve DeepSeek prefix caching efficiency.
4. **[#2933](https://github.com/Hmbown/CodeWhale/issues/2933) Hippocampal memory & YOLO cleanup:** Suppresses annoying YOLO mode announcements and improves tool/subagent error readability.
5. **[#2947](https://github.com/Hmbown/CodeWhale/pull/2947) Guide long shell work to background:** Fixes issue #2939 where long-running `sleep` or polling commands completely stalled the agent's turn.
6. **[#2945](https://github.com/Hmbown/CodeWhale/pull/2945) Render hotbar in sidebar:** Begins implementing the UI sidebar hotbar layer with compact two-row slot layouts.
7. **[#2946](https://github.com/Hmbown/CodeWhale/pull/2946) Update Bocha web search:** Updates endpoints and handles the new response shapes for the Bocha web-search tool.
8. **[#2941](https://github.com/Hmbown/CodeWhale/pull/2941) Fix background shell cancellation:** Fixes an unreliable UI state sync issue where the Tasks sidebar didn't update immediately after killing a background job.
9. **[#2928](https://github.com/Hmbown/CodeWhale/pull/2928) Fix API key precedence:** Ensures the TUI prefers explicitly passed `--api-key` CLI arguments over saved root keys, fixing auth for providers like Volcengine Ark.
10. **[#2932](https://github.com/Hmbown/CodeWhale/pull/2932) Localize mode-picker:** Adds internationalization (i18n) across 7 locales for the Mode Picker UI.

## 5. Feature Request Trends
- **Token & Prompt Diet (Codex Parity):** A massive cluster of issues (#2952, #2953, #2956, #2957, #2958, #2959) driven by the maintainer focus heavily on reducing input/output token bloat and stripping down the static prompt footprint to match Codex CLI costs.
- **Remote & Mobile Workbenches:** Users and maintainers are pushing for mobile-first, remote-controlled development setups, specifically requesting integrations with Telegram (#2964), DigitalOcean, AWS, and Paseo (#889).
- **Advanced Memory Management:** Requests to surpass current LLM context limits (#2935) via architectural changes like memagents, semantic search, and automated context compaction.
- **Robust TUI/UX Auditing:** Frequent demands for better UI management of diffs before approval (#1846), persistent session sidebars (#2934), and clearer task status tracking.

## 6. Developer Pain Points
- **Broken Rebrand Migration:** The transition from `deepseek-tui` to `codewhale` has caused severe friction. Developers report broken Cargo installations (#2917) and `npm update` dead-ends (#2924, #2960) where the runtime simply fails to spawn the new binary.
- **Agentic Overstepping & Verbosity:** Developers are frustrated by safety and efficiency issues in autonomous modes. The agent hallucinates and executes unapproved tasks (#2942), or conversely, wastes time and tokens repeatedly narrating its current permission mode (#2922).
- **Benchmark Asymmetry:** Without a clear harness, developers find it difficult to benchmark CodeWhale against alternatives, complaining about padded token metrics due to hidden internal tool schemas and verbose system prompts (#2952, #2954).

</details>