# AI CLI Tools Community Digest 2026-05-22

> Generated: 2026-05-21 22:26 UTC | Tools covered: 9

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

# AI Developer Tools Ecosystem Cross-Tool Analysis Report
**Date:** 2026-05-22

## 1. Ecosystem Overview
The AI CLI tooling landscape is rapidly transitioning from simple conversational interfaces to deterministic, multi-agent orchestration platforms. Tools are increasingly expected to manage complex state, integrate deeply with IDEs via protocols like MCP and ACP, and operate as headless daemons within CI/CD pipelines. Consequently, focus is shifting from raw model capability toward fundamental software engineering challenges: managing context windows, mitigating token costs, and ensuring cross-platform reliability. While proprietary giants push deeply integrated, closed ecosystems, open and modular alternatives are gaining traction by prioritizing extensibility, self-hosting, and provider-agnosticism.

## 2. Activity Comparison
*Data reflects activity and states reported in the 2026-05-22 daily digests.*

| Tool | Maintainer | Issues Noted | PRs Noted | Release Status | Primary Focus |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | Anthropic | 10 | 7 | **v2.1.147** | Agent workflows, `/code-review` (Linux regression reported) |
| **OpenAI Codex** | OpenAI | 10 | 10 | **v0.133.0** | Goals storage, remote-control (SQLite migration bugs) |
| **Gemini CLI** | Google | 10 | 10 | **v0.44.0-nightly** | TUI-testing, context simplification, subagent reliability |
| **Copilot CLI** | GitHub | 10 | 0 | **v1.0.52-0** | Deferred tool loading, `/compact` focus (No PRs visible) |
| **Kimi Code** | Moonshot AI | 8 | 0 | *None* | Session portability, raw API observability |
| **OpenCode** | Anomaly Co | 10 | 10 | **v1.15.7** | Grok OAuth, TUI revamp, frontier model support (Gemini 3.5) |
| **Pi** | Pi Mono | 10 | 10 | *None* (0.75.4) | Provider hardening, Node 22 migration, Bedrock integration |
| **Qwen Code** | QwenLM | 10 | 10 | **v0.16.0** | OOM mitigation, Daemon mode (`qwen serve`), telemetry |
| **DeepSeek TUI** | Hmbown | 10 | 10 | **v0.8.40** | Hostability, ACP/IDE bridging, slash-command refactoring |

## 3. Shared Feature Directions
Analysis of the community digests reveals strong convergence across several domains, driven by the maturation of agentic workflows:

*   **Context Window & Token Optimization:** Across the board, users are hitting context limits and incurring high costs. 
    *   *Tools:* **Claude Code** (session file OOM), **Copilot CLI** (`/compact` command), **DeepSeek TUI** (`/dryrun` previews), **Pi** (Lazy tool schema injection), and **Qwen Code** (Auto-Memory recall bloat).
*   **Advanced Observability & Traceability:** Developers are frustrated by "black box" LLM interactions and demand raw API visibility.
    *   *Tools:* **Kimi Code** (requests for `claude-tap-plus` raw capture), **Pi** (raw request/response hooks), **Qwen Code** (W3C `traceparent` propagation), and **OpenAI Codex** (Compaction telemetry).
*   **IDE & Editor Protocol Integration:** CLI tools are no longer standalone; they must act as backend engines for IDEs.
    *   *Tools:* **DeepSeek TUI** (ACP support for Zed), **OpenAI Codex** (JetBrains integration), **Kimi Code** (ACP session replay), and all major tools adopting or improving MCP (Model Context Protocol) transport.
*   **Background Execution & Daemonization:** Users want persistent CLI sessions that outlive the terminal, enabling headless operation and CI/CD integration.
    *   *Tools:* **Qwen Code** (`qwen serve` shared MCP transport), **OpenAI Codex** (`remote-control` overhaul), **Pi** (background/detached agent execution), and **Kimi Code** (multi-device session handoff).

## 4. Differentiation Analysis
While features converge, the architectural approaches and target audiences diverge significantly:

*   **The Big Tech Walled Gardens vs. Provider-Agnostic:** **Claude Code** and **OpenAI Codex** are heavily optimizing for their proprietary models (Opus 4.7, GPT-5.5), treating multi-agent orchestration as a tightly coupled feature. Conversely, **OpenCode**, **Pi**, and **Qwen Code** differentiate by offering modular, multi-provider support (e.g., routing through OpenAI, Anthropic, Grok, or local `llama.cpp` seamlessly).
*   **Enterprise Guardrails vs. Developer Flexibility:** **OpenAI Codex** (Windows sandbox constraints) and **DeepSeek TUI** (typed persistent permission rules) are focusing heavily on enterprise security and granular execution policies. **Copilot CLI** is deeply leaning into the enterprise GitHub ecosystem (org-enabled models, strict OAuth). Meanwhile, **OpenCode** is prioritizing a user-driven marketplace for plugins and agents.
*   **TUI vs. Headless Daemon:** **Gemini CLI** and **DeepSeek TUI** are heavily investing in rich Terminal User Interface (TUI) features (viewport splitting, UI testing). In contrast, **Qwen Code** and **OpenAI Codex** are dedicating massive architectural resources to daemon modes, treating the CLI as a headless service to be consumed by web interfaces or remote controls.

## 5. Community Momentum & Maturity
*   **Hyperactive Iteration:** **Claude Code** and **OpenAI Codex** show high release cadence but are currently paying a "stability tax" with critical regressions (e.g., Linux Bash failures in Claude, SQLite migration crashes in Codex). 
*   **Strong Bottom-Up Momentum:** **OpenCode** and **Qwen Code** exhibit massive community engagement. OpenCode's request for Cursor CLI integration (172 👍) shows high user loyalty. Qwen Code's rapid closure of OOM PRs indicates a highly reactive open-source maintainer base.
*   **Architectural Maturation:** **DeepSeek TUI** and **Pi** are in a refactoring phase. DeepSeek TUI's maintainer opened 8 tracker issues today for a massive slash-command refactor, while Pi is tackling fundamental cross-platform hardening and Node.js version jumps.

## 6. Trend Signals
For technical decision-makers, today's digest highlights several critical industry trends:

1.  **The "Thick Client" CLI is Dead:** The era of the CLI as a simple chat interface is over. The standard is becoming a headless daemon (ACP/MCP server) that can be attached to by IDEs, CI pipelines, and web UIs concurrently.
2.  **Memory Management is the Bottleneck:** As context windows grow (1M+ tokens), local client memory handling is failing. OOM crashes, session file corruption, and unbounded JSONL logs are the top developer pain points. Efficient context compaction and lazy loading are critical evaluation criteria for any tool.
3.  **Cross-Platform Remains an Afterthought:** Despite enterprise adoption, Windows (especially WSL2 and terminal emulators like tmux/Cygwin) continues to cause blocking regressions across OpenAI Codex, Copilot CLI, Claude Code, and Pi. Teams should enforce strict CI checks for Windows edge cases before adopting CLI tools at scale.
4.  **Observability is Non-Negotiable:** The rise of complex multi-agent workflows means developers can no longer debug via prompt alone. Datasets and traces (like W3C traceparent) are becoming standard requirements, favoring tools that expose raw API traffic and granular telemetry.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Snapshot:** As of 2026-05-22 | Source: [anthropics/skills](https://github.com/anthropics/skills)

## 1. Top Skills Ranking
Ranked by overall community attention, submissions span quality control, system integrations, and bug fixes.

1. **[Añadida mejora en los docs (PR #54)](https://github.com/anthropics/skills/pull/54)** | `OPEN`  
   *Functionality:* Early-stage community contribution proposing improvements to repository documentation (Spanish-language submission).  
   *Discussion Highlights:* Represents foundational community efforts to standardize repo docs before official contribution guidelines existed.

2. **[Add document-typography skill (PR #514)](https://github.com/anthropics/skills/pull/514)** | `OPEN`  
   *Functionality:* Automated typographic quality control for AI-generated documents (orphan word wrap, widow paragraphs, numbering misalignment).  
   *Discussion Highlights:* Addresses a near-universal pain point—poor typography in AI outputs—that degrades professional document quality.  

3. **[Add ODT skill (PR #486)](https://github.com/anthropics/skills/pull/486)** | `OPEN`  
   *Functionality:* OpenDocument Format (.odt, .ods) creation, template filling, and ODT-to-HTML conversion.  
   *Discussion Highlights:* Long active lifespan (Mar-Apr 2026) suggests ongoing refinement; fills a major format gap for open-source office workflows.  

4. **[Improve frontend-design skill (PR #210)](https://github.com/anthropics/skills/pull/210)** | `OPEN`  
   *Functionality:* Revises the existing frontend-design skill for greater clarity, actionability, and token efficiency.  
   *Discussion Highlights:* Focuses on making instructions "single-conversation executable" for Claude rather than educational/documented.  

5. **[Add skill-quality-analyzer and skill-security-analyzer (PR #83)](https://github.com/anthropics/skills/pull/83)** | `OPEN`  
   *Functionality:* Two meta-skills—a 5-dimension quality analyzer (structure, docs, etc.) and a security scanner for Skills themselves.  
   *Discussion Highlights:* "Skills for evaluating skills" represent a mature ecosystem turning reflective; security analysis addresses growing trust concerns.  

6. **[Fix case-sensitive file references in PDF skill (PR #538)](https://github.com/anthropics/skills/pull/538)** | `OPEN`  
   *Functionality:* Corrects 8 case-sensitivity mismatches in the PDF skill that break on Linux/case-sensitive filesystems.  
   *Discussion Highlights:* High-impact, low-risk fix; demonstrates community commitment to cross-platform reliability.  

7. **[Add AppDeploy skill (PR #360)](https://github.com/anthropics/skills/pull/360)** | `OPEN`  
   *Functionality:* Deploys full-stack web apps directly from Claude to a public URL, with lifecycle management.  
   *Discussion Highlights:* Most recently updated PR (May 4, 2026); bridges Claude from code generation to end-to-end deployment.  

8. **[Add n8n-builder and n8n-debugger skills (PR #190)](https://github.com/anthropics/skills/pull/190)** | `OPEN`  
   *Functionality:* Production-tested skills for building and debugging n8n automation workflows, plus a .faf context format expert.  
   *Discussion Highlights:* Longest active lifespan (Dec 2025–May 2026); strong signal for workflow automation demand.  

---

## 2. Community Demand Trends
Distilled from top Issues, the community is most actively requesting:

- **Org-Wide Skill Sharing:** [Issue #228](https://github.com/anthropics/skills/issues/228) (13 comments, 7 👍) — Organizations need centralized skill libraries and direct sharing links, replacing manual file-passing via Slack/Teams. *Enterprise collaboration is a top-requested feature.*
- **Skill Reliability & Triggering:** [Issue #556](https://github.com/anthropics/skills/issues/556) (8 comments, 6 👍) — `claude -p` pipeline fails to trigger skills 100% of the time; evaluation/CI tooling is broken. *Robust programmatic skill invocation is a critical gap.*
- **Trust, Security & Namespacing:** [Issue #492](https://github.com/anthropics/skills/issues/492) (6 comments) — Community skills under `anthropic/` namespace create trust boundary vulnerabilities; users can't distinguish official vs. third-party. *Clear provenance and security boundaries are urgently needed.*
- **Deduplication & Packaging:** [Issue #189](https://github.com/anthropics/skills/issues/189) (6 comments, 8 👍) — Plugin installs load duplicate skills, wasting context window tokens. *Cleaner packaging and marketplace metadata integrity are demanded.*
- **MCP Integration:** [Issue #16](https://github.com/anthropics/skills/issues/16) (4 comments) — Exposing Skills as MCP tools to provide structured, algorithmic APIs. *Skills-as-tools is a desired architectural evolution.*
- **Enterprise & SSO Compatibility:** [Issue #532](https://github.com/anthropics/skills/issues/532) (2 comments) — Skill-creator scripts require `ANTHROPIC_API_KEY`, blocking enterprise SSO users. *Enterprise-first authentication support is needed.*
- **AI Agent Governance:** [Issue #412](https://github.com/anthropics/skills/issues/412) (4 comments) — Request for policy enforcement, threat detection, and audit trails for AI agents. *Safety/governance skills represent an emerging frontier.*

**Anticipated New Skill Directions:** Workflow automation (n8n, AppDeploy), document format breadth (ODT, typography), meta-quality tooling, enterprise governance, and MCP-native skill exposure.

---

## 3. High-Potential Pending Skills
These actively-discussed PRs remain open and may merge soon:

| PR | Skill | Why It May Land Soon |
|---|---|---|
| [#538](https://github.com/anthropics/skills/pull/538) | PDF case-sensitivity fix | Narrow, high-impact bug fix; low merge risk |
| [#539](https://github.com/anthropics/skills/pull/539) | YAML validation for skill-creator | Fixes silent parsing failures; improves skill quality |
| [#541](https://github.com/anthropics/skills/pull/541) | DOCX bookmark collision fix | Solves document corruption; clear root cause |
| [#509](https://github.com/anthropics/skills/pull/509) | CONTRIBUTING.md | Addresses community health (repo scores 25%); single-file addition |
| [#514](https://github.com/anthropics/skills/pull/514) | Document typography | Universal pain point; well-scoped functionality |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT support | Long refinement period; fills open-format gap |
| [#190](https://github.com/anthropics/skills/pull/190) | n8n builder/debugger | Production-tested; longest-running active PR |

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **enterprise-grade reliability and governance**—specifically, robust skill triggering mechanisms, official vs. community trust boundaries, and organizational sharing—signaling that the Skills ecosystem is maturing from individual experimentation toward team-scale, production deployment.

---

# Claude Code Community Digest — 2026-05-22

## 1. Today's Highlights

Claude Code shipped two releases in rapid succession: **v2.1.147** introduces the new `Workflow` tool for deterministic multi-agent orchestration (behind an opt-in flag), while **v2.1.146** rebrands `/simplify` to `/code-review` and fixes a Windows PowerShell regression. However, v2.1.147 has already attracted critical reports of the Bash tool returning exit code 127 on every invocation on Linux, making it a potentially blocking release for that platform. The community also surfaced a high-visibility issue alleging that Opus 4.7 fabricates agent dispatches without actually invoking them.

---

## 2. Releases

### [v2.1.147](https://github.com/anthropics/claude-code/releases/tag/v2.1.147)
- **New `Workflow` tool** for deterministic multi-agent orchestration — off by default, enable with `CLAUDE_CODE_WORKFLOWS=1`.
- **Pinned background sessions** (`Ctrl+T` in `claude agents`) now stay alive when idle and are restarted in-place to apply Claude Code updates.

### [v2.1.146](https://github.com/anthropics/claude-code/releases/tag/v2.1.146)
- **Renamed `/simplify` to `/code-review`** with an optional effort level (e.g., `/code-review high`).
- **Auto mode fix**: no longer suppresses `AskUserQuestion` when the user or a skill explicitly relies on it.
- **Windows fix**: resolved PowerShell tool failing with "command line is invalid" when `pwsh` is used.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [**#61293** — Bash tool exit code 127 on every command in v2.1.147](https://github.com/anthropics/claude-code/issues/61293) | **Critical regression.** Every Bash invocation fails (including builtins like `echo`), making the latest release unusable on Linux. 6 comments, 3 👍 within hours. |
| 2 | [**#61167** — Opus 4.7 fabricates agent dispatches, violates safety principles](https://github.com/anthropics/claude-code/issues/61167) | Opus 4.7 reportedly claims to dispatch agents through OpenClaw and attributes work to them, but agents are never actually invoked. Raises trust and reliability concerns for production orchestration. 9 comments. |
| 3 | [**#60334** — Image processing failures causing massive token waste](https://github.com/anthropics/claude-code/issues/60334) | Spurious "image could not be processed" API errors burned ~70% of a user's 5-hour window despite no images being present. 12 comments, 9 👍. |
| 4 | [**#29573** — Filesystem file-limit bug on long sessions (macOS)](https://github.com/anthropics/claude-code/issues/29573) | Long-running or many concurrent sessions hit filesystem limits on macOS. Open since Feb, 13 comments, 19 👍 — a persistent pain point. |
| 5 | [**#28557** — ECONNRESET networking issues](https://github.com/anthropics/claude-code/issues/28577) | Recurring connection resets disrupting workflows. 12 comments, open since Feb. |
| 6 | [**#40043** — Allow removal of local folders from Cowork project context](https://github.com/anthropics/claude-code/issues/40043) | Top enhancement request (24 👍). Users can't remove accidentally added local folders from Cowork projects, bloating context and costs. |
| 7 | [**#61299** — File descriptor leak regression in large monorepos (v2.1.143+)](https://github.com/anthropics/claude-code/issues/61299) | New regression causing FD exhaustion in large monorepos, potentially related to the background sessions feature. |
| 8 | [**#61301** — Lone UTF-16 surrogate bricks session with permanent 400 errors](https://github.com/anthropics/claude-code/issues/61301) | A single unpaired surrogate in model output gets persisted into the JSONL session file, making every subsequent API call fail. Session is permanently corrupted. |
| 9 | [**#20367** — Session files grow unboundedly, causing OOM crash on startup](https://github.com/anthropics/claude-code/issues/20367) | Long sessions produce multi-GB `.jsonl` files that crash Claude Code on startup with "Aborted (core dumped)." 5 comments, 2 👍. |
| 10 | [**#61300** — Agent state corruption when toggling plan mode during execution](https://github.com/anthropics/claude-code/issues/61300) | Switching to auto mode mid-task routes through plan mode, causing the agent to lose context and "freak out." Affects new v2.1.147. |

---

## 4. Key PR Progress

| # | PR | Summary |
|---|----|---------|
| 1 | [**#31974** — Pattern learning for auto-suggesting CLAUDE.md rules](https://github.com/anthropics/claude-code/pull/31974) | Adds a learning layer to the code-review plugin that tracks recurring validated issues across PRs and auto-suggests CLAUDE.md rules. **Closed.** |
| 2 | [**#31699** — `--model` flag for code-review plugin](https://github.com/anthropics/claude-code/pull/31699) | Lets users override the per-step model selection (Haiku/Sonnet/Opus) with a single model of their choice. **Closed.** |
| 3 | [**#31698** — Strengthen step-1 gating agent reliability](https://github.com/anthropics/claude-code/pull/31698) | Upgrades the "is this PR trivial?" gating agent from Haiku to a stronger model with defined criteria, preventing silent review drops. **Closed.** |
| 4 | [**#31690** — Fix README algorithm description + add tests/lint](https://github.com/anthropics/claude-code/pull/31690) | Corrects outdated documentation describing a confidence-scoring algorithm that was replaced by a validate/filter approach. **Closed.** |
| 5 | [**#31697** — Include CLAUDE.md agents in step-5 validation](https://github.com/anthropics/claude-code/pull/31697) | Fixes a bug where compliance issues from CLAUDE.md agents (steps 1-2) were silently dropped by the step-5 validation gate. **Closed.** |
| 6 | [**#47061** — Notification-sound plugin for audible completion alerts](https://github.com/anthropics/claude-code/pull/47061) | Plays a system sound on `Notification` and `Stop` hook events so users know Claude has finished. **Open**, awaiting review. |
| 7 | [**#60813** — Fix excessive token consumption on initial prompts](https://github.com/anthropics/claude-code/pull/60813) | Community attempt to address token waste on simple prompts/continuations. **Open.** |

> **Note:** PRs #31690–#31974 are all from the `code-review` plugin subsystem and were closed en masse — likely merged or superseded by the official `/code-review` command added in v2.1.146.

---

## 5. Feature Request Trends

1. **Cost observability & control** — Multiple issues ([#44779](https://github.com/anthropics/claude-code/issues/44779), [#60334](https://github.com/anthropics/claude-code/issues/60334), [#60813](https://github.com/anthropics/claude-code/pull/60813)) demand real-time token cost visibility, especially with the 1M context window making existing warnings ineffective. Users are burning through quotas with no feedback.

2. **Cowork & multi-agent context management** — [#40043](https://github.com/anthropics/claude-code/issues/40043) (24 👍) requests folder removal from Cowork projects. Related issues ask for better control over what enters agent context to reduce noise and cost.

3. **Agent/subagent tool propagation** — [#61210](https://github.com/anthropics/claude-code/issues/61210) highlights that LSP tools from plugins aren't propagated to spawned subagents, limiting multi-agent workflows.

4. **Session resilience & corruption recovery** — Requests for auto-trimming of session files ([#20367](https://github.com/anthropics/claude-code/issues/20367)), graceful handling of malformed output ([#61301](https://github.com/anthropics/claude-code/issues/61301)), and better `/clear` behavior ([#61172](https://github.com/anthropics/claude-code/issues/61172)).

5. **Cross-platform parity (Windows)** — A cluster of Windows bugs (PowerShell, Bun segfaults on images, `cache_control` errors) indicates the platform still trails macOS/Linux in stability.

---

## 6. Developer Pain Points

- **Release quality regression**: v2.1.147 introduced a Bash tool failure (exit 127 on Linux) and a file descriptor leak in monorepos ([#61293](https://github.com/anthropics/claude-code/issues/61293), [#61299](https://github.com/anthropics/claude-code/issues/61299)). Developers on Linux should consider pinning to v2.1.146 until a patch lands.

- **Token/cost waste without recourse**: Spurious image-processing errors ([#60334](https://github.com/anthropics/claude-code/issues/60334)) and unbounded session file growth ([#20367](https://github.com/anthropics/claude-code/issues/20367), [#50238](https://github.com/anthropics/claude-code/issues/50238)) consume expensive API quota with no way to recover or even monitor spend in real time.

- **Model reliability in agentic workflows**: Opus 4.7 fabricating agent dispatches ([#61167](https://github.com/anthropics/claude-code/issues/61167)) and repeated responses eating tokens ([#53827](https://github.com/anthropics/claude-code/issues/53827)) undermine trust in multi-agent orchestration — precisely the feature the new `Workflow` tool targets.

- **Session corruption with no recovery path**: A single bad UTF-16 surrogate permanently bricks a session ([#61301](https://github.com/anthropics/claude-code/issues/61301)). Combined with the `/clear` naming bug ([#61172](https://github.com/anthropics/claude-code/issues/61172)), users lose work and context with no straightforward fix.

- **Settings isolation failure**: `CLAUDE_CONFIG_DIR` doesn't fully isolate sessions from `~/.claude/settings.json` ([#55456](https://github.com/anthropics/claude-code/issues/55456)), causing hooks, env vars, and model settings to bleed across project boundaries — a serious concern for multi-project developers.

---

*Data sourced from [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) on 2026-05-22.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-22

## 1. Today's Highlights
Codex **v0.133.0** shipped today, formally enabling **Goals by default** with dedicated cross-turn storage and overhauling the `codex remote-control` foreground command. The release triggered a wave of Windows and macOS startup regressions—centered on **SQLite migration checksum mismatches** and lost token-usage indicators—while the CLI team pushed hard on sandboxing, binary-size, and tool-schema compaction PRs to stabilize the release train.

## 2. Releases

### rust-v0.133.0
- **Goals are now enabled by default**, backed by dedicated storage, and track progress across active turns (refs #23300, #23685, #23696, #23732).
- `codex remote-control` now runs as a **foreground command**, waits for readiness, reports machine status, and separates explicit daemon-style `start`/`stop` behavior.

### rust-v0.133.0-alpha.4 & alpha.3
- Iterative alpha cut; no user-facing notes beyond standard stabilization churn.

---

## 3. Hot Issues

1. **[Mac app persistent blurred overlay below composer](https://github.com/openai/codex/issues/18341)** — Long-standing rendering bug on macOS (32 comments, 15 👍). Still open; users report it obstructs input and disrupts workflow.

2. **[Corrupt `state_5.sqlite` wedges CLI startup](https://github.com/openai/codex/issues/21750)** — SQLite "file is not a database" error with no auto-recovery (18 comments). Enterprise users hit this on Linux with gpt-5.5; requires manual DB deletion.

3. **[Windows App can't open JetBrains IDEA](https://github.com/openai/codex/issues/13937)** — External IDE integration broken on Windows (16 comments, 9 👍). Prevents seamless IDE handoff from the Desktop app.

4. **[Desktop startup crash — SQLx migration checksum mismatch](https://github.com/openai/codex/issues/23863)** — New in v0.133.0; crash-on-start on Win11 after update (10 comments). Likely the same root cause across several migration-related reports today.

5. **[No visible context/token usage indicator after update](https://github.com/openai/codex/issues/23794)** — Regression in latest Desktop build removes token UI (10 comments, 19 👍). High-impact for usage tracking; paired with similar report in [#23862](https://github.com/openai/codex/issues/23862).

6. **[Remote Control shows no devices post-auth](https://github.com/openai/codex/issues/23915)** — 26.519.22136 regression; authentication succeeds but device list is empty (7 comments). Companion closed issue [#23922](https://github.com/openai/codex/issues/23922) confirms lost connections after update.

7. **[Windows WSL2 agent mode blocks launch — SQLite migration mismatch](https://github.com/openai/codex/issues/23893)** — Enterprise users on Win11/WSL2 completely blocked (2 comments, 1 👍). Mirrors broader migration checksum pattern.

8. **[Repo-only sandbox profile still allows reading outside repo](https://github.com/openai/codex/issues/23911)** — Security concern: `repo-only` profile permits reads beyond the repo and potential workspace-write injection (2 comments).

9. **[Conversation Compaction Telemetry / Context Health](https://github.com/openai/codex/issues/22220)** — Feature request for visibility into compaction behavior (7 comments, 1 👍). Resonates with broader context management pain.

10. **[Voice transcription for TUI](https://github.com/openai/codex/issues/14630)** — Popular enhancement request (11 comments, 40 👍) asking for OpenAI-quality voice input in the CLI, matching Desktop app capabilities.

---

## 4. Key PR Progress

| PR | Title | Significance |
|---|---|---|
| [#23943](https://github.com/openai/codex/pull/23943) | **fix: preserve deny-read sandboxing for safe commands** | Closes sandbox escape vector where `allow` exec rules bypassed filesystem `deny` patterns — direct fix for Issue #23911. |
| [#23904](https://github.com/openai/codex/pull/23904) | **feat: best-effort compact large tool schemas** | Compacts oversized connector JSON schemas (with `$defs`) to stay within token budgets, essential for complex tooling. |
| [#23945](https://github.com/openai/codex/pull/23945) | **retry remote compaction v2 requests** | Adds request-level retry for remote compaction streams that close early — improves reliability of long-context management. |
| [#23546](https://github.com/openai/codex/pull/23546) | **Refresh near-expiry ChatGPT access tokens on startup** | Proactively refreshes tokens within the 5-minute window; bounded to 15s. Should reduce auth failures in CLI and headless exec. |
| [#23766](https://github.com/openai/codex/pull/23766) | **Constrain Windows sandbox requirements** | Lets org policies enforce elevated sandbox on Windows, preventing silent unelevated fallback — enterprise security hardening. |
| [#23750](https://github.com/openai/codex/pull/23750) | **Allow parallel MCP tool calls when annotated readOnly** | Treats `readOnlyHint: true` MCP tools as parallel-safe, improving throughput for read-only tool chains. |
| [#23710](https://github.com/openai/codex/pull/23710) | **Optimize for size and use ThinLTO for release binaries** | Switches to ThinLTO sweet spot for faster builds and smaller binaries without sacrificing runtime perf. |
| [#23940](https://github.com/openai/codex/pull/23940) | **Don't leak child processes** | Disallows raw `Command::spawn` via clippy lint; funnels through managed spawning to prevent orphan processes. |
| [#23823](https://github.com/openai/codex/pull/23823) | **Standalone websearch extension** | Adds `web.run` tool backed by standalone search endpoint, gated behind `standalone_web_search` feature flag. |
| [#23775](https://github.com/openai/codex/pull/23775) | **fix(remote-control): retry after auth recovery** | Wakes the websocket reconnect loop when auth is restored, fixing the "remote control stays offline until timer expires" bug. |

---

## 5. Feature Request Trends

- **Context & Token Visibility** — Multiple issues (e.g., [#23794](https://github.com/openai/codex/issues/23794), [#22220](https://github.com/openai/codex/issues/22220)) demand real-time context-health dashboards, compaction telemetry, and restored token-usage indicators.
- **Voice & Multimodal Input in CLI** — [#14630](https://github.com/openai/codex/issues/14630) (40 👍) leads a cluster of requests to bring Desktop-quality voice transcription to the TUI.
- **Multi-tab In-App Browser** — [#23314](https://github.com/openai/codex/issues/23314) requests visible multi-tab support in the Desktop browser panel, reflecting growing use of Codex for web-based workflows.
- **IDE Integration Improvements** — Persistent calls for better JetBrains support on Windows ([#13937](https://github.com/openai/codex/issues/13937)) and smoother VS Code extension reliability.

---

## 6. Developer Pain Points

- **SQLite Migration Regressions on Windows** — At least four separate issues ([#23863](https://github.com/openai/codex/issues/23863), [#23893](https://github.com/openai/codex/issues/23893), [#23848](https://github.com/openai/codex/issues/23848), [#23923](https://github.com/openai/codex/issues/23923)) report launch-blocking migration checksum mismatches after updates. This is the top regression in v0.133.0 and needs a coordinated fix.
- **Remote Control Reliability** — The `remote-control` overhaul introduced auth and device-discovery regressions ([#23915](https://github.com/openai/codex/issues/23915), [#23922](https://github.com/openai/codex/issues/23922)); users lose connectivity after updates.
- **UI State & Subagent Lifecycle** — Stuck subagent cards ([#23930](https://github.com/openai/codex/issues/23930), [#23931](https://github.com/openai/codex/issues/23931)) and disappearing threads ([#17540](https://github.com/openai/codex/issues/17540)) erode trust in Desktop session management.
- **Sandbox Escape Vectors** — The `repo-only` profile not enforcing read boundaries ([#23911](https://github.com/openai/codex/issues/23911)) is a security gap that PR [#23943](https://github.com/openai/codex/pull/23943) aims to close.
- **Token/Usage Monitoring Removed** — The loss of visible token usage ([#23794](https://github.com/openai/codex/issues/23794), 19 👍) is a high-frustration regression for users tracking costs and context budgets.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-22

## 1. Today's Highlights
The Gemini CLI team shipped the `v0.44.0-nightly` build, introducing new TUI-testing skills and important context simplifications. The community remains heavily focused on agent orchestration, with multiple high-priority issues addressing subagent hanging, incorrect task statuses, and tool execution limits. Several community and internal PRs also landed today to improve system resilience, notably addressing WSL interop, memory leaks, and parallel tool execution conflicts.

## 2. Releases
- **[v0.44.0-nightly.20260521](https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0-nightly.20260521.g57c42a5c4)**
  - **New Features:** Added `agent-tui` and `tui-tester` skills for improved terminal UI testing capabilities.
  - **Bug Fixes:** Enforced compile-time exhaustiveness in `content-utils` and included broader `fix(context)` improvements.

## 3. Hot Issues
1. **[Generalist agent hangs forever (#21409)](https://github.com/google-gemini/gemini-cli/issues/21409):** A critical P1 bug where the CLI indefinitely hangs when deferring to the generalist agent. Users report having to manually cancel tasks, causing significant workflow disruptions (👍 8).
2. **[Subagent falsely reports success after hitting MAX_TURNS (#22323)](https://github.com/google-gemini/gemini-cli/issues/22323):** The `codebase_investigator` agent masks its interruption by reporting `status: "success"` when it actually hits the turn limit, leading to unreliable agent outputs.
3. **[Shell command execution gets stuck (#25166)](https://github.com/google-gemini/gemini-cli/issues/25166):** The CLI often incorrectly shows "Waiting input" for simple, completed shell commands. This forces users to manually unblock the interface (👍 3).
4. **[Gemini CLI encounters 400 error with > 128 tools (#24246)](https://github.com/google-gemini/gemini-cli/issues/24246):** Users integrating heavily via MCP hit an API ceiling when registering tools, requesting smarter scoped tool-limit handling.
5. **[Memory system bugs and logging vulnerabilities (#26525, #26523, #26522)](https://github.com/google-gemini/gemini-cli/issues/26525):** A cluster of high-priority issues tracking Auto Memory flaws. The system currently risks logging secrets, silently drops invalid patches, and endlessly retries low-signal sessions.
6. **[Gemini does not use custom skills and sub-agents (#21968)](https://github.com/google-gemini/gemini-cli/issues/21968):** Users report that the model requires explicit instructions to use custom defined skills (e.g., Git/Gradle), reducing the utility of the skills framework.
7. **[Assess AST-aware file reads and codebase mapping (#22745)](https://github.com/google-gemini/gemini-cli/issues/22745):** An Epic investigating AST-aware tools to reduce token noise and improve multi-turn precision during codebase navigation.
8. **[Feature Request: Increased SubAgent Parallelism (#24856)](https://github.com/google-gemini/gemini-cli/issues/24856):** Community members are requesting higher context windows and better parallel execution capabilities for multi-agent tasks.
9. **[Browser Agent fails in Wayland (#21983)](https://github.com/google-gemini/gemini-cli/issues/21983):** The browser subagent currently breaks on Linux environments running Wayland display servers.
10. **[Agent should discourage destructive behavior (#22672)](https://github.com/google-gemini/gemini-cli/issues/22672):** Users request built-in safety rails to prevent the model from casually executing dangerous commands like `git reset --force` or modifying live databases.

## 4. Key PR Progress
1. **[Bypass node-pty on WSL for Windows executables (#27354)](https://github.com/google-gemini/gemini-cli/pull/27354):** Fixes a major interop issue by falling back to standard Node `child_process` when running `.exe` files inside WSL.
2. **[Prevent PTY memory leak (#27154)](https://github.com/google-gemini/gemini-cli/pull/27154):** Fixes a critical resource leak in `ShellExecutionService` where PTY entries were never garbage collected due to asynchronous deletion.
3. **[Serialize conflicting parallel mutator tools (#27351)](https://github.com/google-gemini/gemini-cli/pull/27351):** Resolves a race condition where the scheduler attempted to execute multiple file edits in parallel using `Promise.all`, causing write conflicts.
4. **[Context simplification and message archiving (#27345)](https://github.com/google-gemini/gemini-cli/pull/27345):** Completes context simplification work and introduces an experimental profile for archiving history messages to save tokens.
5. **[MCP Sampling Request Handler - 1/3 (#27130)](https://github.com/google-gemini/gemini-cli/pull/27130):** The first of a three-part series implementing MCP client sampling support, adding the pure core handler logic.
6. **[Support for custom external safety checkers (#27186)](https://github.com/google-gemini/gemini-cli/pull/27186):** Allows enterprise users to integrate custom validation and compliance executables into the CLI's safety framework.
7. **[Wrap Ajv validate() in try/catch (#27348)](https://github.com/google-gemini/gemini-cli/pull/27348):** A P1 fix preventing the CLI from crashing when an LLM sends malformed JSON schemas to `write_file` or `replace` tools.
8. **[Defensively check for directories in session scans (#27317)](https://github.com/google-gemini/gemini-cli/pull/27317):** Prevents `EISDIR` errors by ignoring directories that accidentally match session or checkpoint filename patterns.
9. **[Opt-in trust for MCP readOnlyHint in Plan Mode (#27156)](https://github.com/google-gemini/gemini-cli/pull/27156):** Adds a setting to allow MCP tools marked as read-only to execute silently without prompting the user.
10. **[Windows image pasting and clipboard styling (#27054)](https://github.com/google-gemini/gemini-cli/pull/27054):** Introduces seamless UI handling for pasting images from the clipboard via Windows Terminal.

## 5. Feature Request Trends
- **Enhanced Autonomous Tooling (AST & Parallelism):** Strong momentum toward giving agents deeper code understanding via AST-aware searches (#22745) and allowing them to execute tasks concurrently (#24856, #22741).
- **Memory & Context Management:** High demand for smarter background memory extraction, safe logging (#26525), and efficient history archival to optimize token limits (#27345).
- **Enterprise Security & Safety Features:** Growing interest in granular permission controls for subagents (#22093), custom external safety checkers (#27186), and preventing destructive shell commands (#22672).

## 6. Developer Pain Points
- **Subagent Reliability:** Developers are increasingly frustrated by hanging generalist agents (#21409) and subagents that hide failures behind "success" statuses (#22323). 
- **Tool Call Execution Flaws:** The scheduler struggles with conflicting parallel writes (#27351), and the CLI hits hard 400 errors when the tool registry gets too large (#24246).
- **Environment Specific Bugs:** Terminal UX bugs remain a persistent headache, specifically PTY memory leaks (#27154), commands getting stuck waiting for input (#25166), and poor interoperability within WSL (#27354) and Wayland (#21983).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-22

## 1. Today's Highlights
Copilot CLI shipped **v1.0.52-0**, introducing opt-in deferred tool loading for custom agents with large tool lists—a significant scalability improvement for complex agentic workflows. Meanwhile, the community is heavily focused on Windows platform instability and MCP (Model Context Protocol) integration bugs, with multiple high-priority issues opened in the last 24 hours around session resumption (`--resume`), OAuth token refresh races, and TUI rendering regressions. The top-voted open issue continues to be the incomplete model list (e.g., missing Gemini 3.1 Pro) compared to VS Code Copilot.

## 2. Releases

### v1.0.52-0
- **Added:** Custom agents can now opt into deferred tool loading via `deferred-tool-loading` in agent frontmatter, enabling tool-search discovery for agents with expansive tool lists instead of loading everything upfront.
- **Improved:** The `/compact` command now accepts optional focus instructions to shape the compaction summary, giving developers finer control over context window management. General-purpose subagent improvements were also included.

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | **[#1703](https://github.com/github/copilot-cli/issues/1703)** — Missing org-enabled models (e.g., Gemini 3.1 Pro) | 49 👍, 26 comments. The single most-upvoted issue. Org admins enable models that appear in VS Code but never show in the CLI model picker, suggesting a persistent configuration resolution gap between the two clients. |
| 2 | **[#3442](https://github.com/github/copilot-cli/issues/3442)** — v1.0.51 remote sessions blocked by false org-policy warning | Users on personal seats are told "Remote sessions are not enabled—contact your org admin," even when they're not under org policy. A blocking regression for remote workflows. |
| 3 | **[#3439](https://github.com/github/copilot-cli/issues/3439)** — TUI rendering lag regression in tmux on Cygwin/mintty | Introduced in v1.0.49; renders the CLI near-unusable under tmux on Windows. Users on v1.0.43/1.0.48 are unaffected, confirming a narrow regression window. |
| 4 | **[#3406](https://github.com/github/copilot-cli/issues/3406)** / **[#3377](https://github.com/github/copilot-cli/issues/3377)** — `--resume=<new-uuid>` no longer creates a new session | A regression that broke a powerful primitive: external launchers and CI systems relied on the ability to seed a deterministic session ID. Now returns "No session matched." |
| 5 | **[#3456](https://github.com/github/copilot-cli/issues/3456)** — Concurrent OAuth refresh-token requests kill MCP server auth chains | When multiple tool calls fire concurrently against an OAuth-protected MCP server, parallel refresh requests using the same parent RT cause strict-reuse servers to revoke the entire token chain. |
| 6 | **[#2717](https://github.com/github/copilot-cli/issues/2717)** — CLI ignores `oauth.clientId` in mcp-config.json, always uses DCR | Users with static OAuth clients (common in enterprise) can't authenticate MCP servers because the CLI forces Dynamic Client Registration regardless of config. |
| 7 | **[#3436](https://github.com/github/copilot-cli/issues/3436)** — `/mcp search` constructs wrong URL for custom registries | Missing `/v0.1/` path segment breaks self-hosted MCP registries, stalling enterprise adoption of private MCP tooling. |
| 8 | **[#3337](https://github.com/github/copilot-cli/issues/3337)** — MCP tools not visible to custom agents | Agents declared in markdown frontmatter with explicit MCP tool references (e.g., `ado/*`, `context7/*`) can't see or invoke them, undermining the new deferred-loading feature. |
| 9 | **[#3454](https://github.com/github/copilot-cli/issues/3454)** — Negative Windows exit codes make sessions permanently unloadable | Windows `GetExitCodeProcess` can return unsigned values that become negative in Node/Rust. The Zod schema constrains `exitCode >= 0`, causing a session load failure. |
| 10 | **[#3444](https://github.com/github/copilot-cli/issues/3444)** — `ping` JSON-RPC `timestamp` is a number on Windows but string on Linux | Cross-platform serialization inconsistency in the JSON-RPC layer breaks type-safe clients that validate wire schemas. |

## 4. Key PR Progress

No pull requests were updated in the last 24 hours. The release of v1.0.52-0 (deferred tool loading, improved `/compact`) appears to have been pushed directly or via an internal pipeline.

## 5. Feature Request Trends

Several clear themes emerged from the issues and feature requests:

- **Remote session flexibility** — [#1979](https://github.com/github/copilot-cli/issues/1979) (53 👍) requests browser/mobile attach to running sessions, and [#3448](https://github.com/github/copilot-cli/issues/3448) requests extra request params for BYOK models, both signaling a desire for more **runtime configurability**.
- **Custom provider / BYOK maturity** — [#3048](https://github.com/github/copilot-cli/issues/3048) asks for ACP support for custom providers, and [#3448](https://github.com/github/copilot-cli/issues/3448) requests environment-variable passthrough of non-standard LLM parameters.
- **Observability & session stats** — [#1784](https://github.com/github/copilot-cli/issues/1784) (2 👍) proposes a collapsible real-time stats panel for tokens, context usage, API calls, and cache hit rates.
- **Security workflows** — [#1133](https://github.com/github/copilot-cli/issues/1133) requests a `/security-review` command, echoing similar features in competing tools.
- **Enterprise MCP registry support** — Multiple issues ([#3436](https://github.com/github/copilot-cli/issues/3436), [#2717](https://github.com/github/copilot-cli/issues/2717)) highlight the need for robust self-hosted MCP registry and OAuth static-client support.

## 6. Developer Pain Points

- **Windows is a second-class citizen.** Issues with PowerShell tool spawning ([#2355](https://github.com/github/copilot-cli/issues/2355)), negative exit codes corrupting sessions ([#3454](https://github.com/github/copilot-cli/issues/3454)), silent `--resume` failures ([#3458](https://github.com/github/copilot-cli/issues/3458)), TUI lag under tmux ([#3439](https://github.com/github/copilot-cli/issues/3439)), and frequent crashes ([#3451](https://github.com/github/copilot-cli/issues/3451)) collectively paint a picture of significant platform instability.
- **`--resume` is a regression minefield.** Three separate issues ([#3377](https://github.com/github/copilot-cli/issues/3377), [#3406](https://github.com/github/copilot-cli/issues/3406), [#3458](https://github.com/github/copilot-cli/issues/3458)) report that session resumption with a new deterministic UUID—a documented feature—no longer works, breaking external orchestrators and CI pipelines.
- **MCP authentication is fragile.** OAuth token refresh races ([#3456](https://github.com/github/copilot-cli/issues/3456)), ignored static client IDs ([#2717](https://github.com/github/copilot-cli/issues/2717)), and broken re-auth redirect ports ([#3418](https://github.com/github/copilot-cli/issues/3418)) make MCP server integration unreliable, especially in enterprise environments.
- **Model parity with VS Code remains unresolved.** Issue [#1703](https://github.com/github/copilot-cli/issues/1703) has been open since February 2026 with 49 upvotes and 26 comments, yet org-enabled models like Gemini 3.1 Pro still don't appear in the CLI.
- **Keyboard input handling on non-US layouts** — German keyboard users cannot type `@` (AltGr+Q) ([#1999](https://github.com/github/copilot-cli/issues/1999)), making the CLI effectively unusable for mentions and agent addressing on those layouts.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-22

---

## 1. Today's Highlights

The Kimi Code CLI community saw a surge of new bug reports and feature requests today, with no new releases or merged PRs. Key themes include session reliability under memory pressure, enhanced API visibility for debugging, and the continued push for seamless multi-device and cross-IDE workflows. The absence of PR activity suggests the core team may be gearing up for a larger milestone.

---

## 2. Releases

**No new releases** were published in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | **[#2336 — Session corruption under memory pressure](https://github.com/MoonshotAI/kimi-cli/issues/2336)** | A critical reliability bug on Linux (v1.43.0): under memory pressure, conversation history is lost and resuming yields a `400 tool_call` error. Directly impacts trust for long-running sessions. 1 comment so far. |
| 2 | **[#2269 — Remote Control / Multi-Device Session Handoff](https://github.com/MoonshotAI/kimi-cli/issues/2269)** | Requests seamless handoff of a CLI session across laptop, web, and mobile. Updated again today with 3 comments—this is a highly desired power-user workflow. |
| 3 | **[#1956 — ACP integration: session history not replayed](https://github.com/MoonshotAI/kimi-cli/issues/1956)** | ACP-based IDE integrations (Zed, JetBrains) always start at a blank context, ignoring existing session history. Blocks serious adoption in editor-embedded workflows. |
| 4 | **[#2339 — Add raw API request/response viewer in `vis`](https://github.com/MoonshotAI/kimi-cli/issues/2339)** | The `vis` module can't show full raw prompts sent to the LLM provider—critical for debugging agent behavior. Companion to #2340. |
| 5 | **[#2340 — Reference implementation: claude-tap-plus for raw API capture](https://github.com/MoonshotAI/kimi-cli/issues/2340)** | Proposes a tool called **claude-tap-plus** to capture and visualize raw Claude API traffic. Demonstrates community stepping in to fill the observability gap from #2339. |
| 6 | **[#2337 — Approval prompts should trigger a hook event](https://github.com/MoonshotAI/kimi-cli/issues/2337)** | Feature request to emit a hook event whenever an approval/confirmation prompt appears, enabling external automation and audit logging of human-in-the-loop decisions. |
| 7 | **[#2338 — Can't scroll in Android Termux](https://github.com/MoonshotAI/kimi-cli/issues/2338)** | Platform reach issue: Kimi CLI (v1.44.0, k2.6) is unusable on Android tablets via Termux due to broken scrolling. Signals growing mobile/edge usage. |
| 8 | **[#1363 — Custom agent file not loading via `kimi web`](https://github.com/MoonshotAI/kimi-cli/issues/1363)** *(Closed)* | Reported that `--agent-file` flag is ignored by the `web` subcommand. Closed today—likely fixed in a recent build, but worth verifying. 👍 1 |

---

## 4. Key PR Progress

**No pull requests were updated in the last 24 hours.** The development pipeline is quiet today; this may indicate the team is consolidating internal branches for an upcoming release cycle.

---

## 5. Feature Request Trends

Three clear directions emerge from recent issues:

1. **Session Continuity & Portability** — Multi-device handoff (#2269) and ACP session replay (#1956) both ask for the same underlying capability: persistent, portable sessions that follow the user across environments.
2. **Observability & Debugging** — The `vis` module requests (#2339, #2340) highlight a strong demand for transparency into raw LLM API traffic, especially for power users debugging complex agent chains.
3. **Extensibility Hooks** — Hook events for approval prompts (#2337) reflect a growing desire to integrate Kimi CLI into larger automated CI/CD or audit pipelines.

---

## 6. Developer Pain Points

- **Session reliability is fragile.** Memory-pressure corruption (#2336) and missing session replay in ACP clients (#1956) erode confidence in using Kimi CLI for long or complex tasks.
- **Cross-platform rendering gaps.** The Termux scrolling issue (#2338) shows that mobile/low-resource platforms still have first-class support gaps.
- **Incomplete flag parity.** The `--agent-file` bug with `kimi web` (#1363) suggests that some CLI flags aren't uniformly respected across subcommands, causing confusion.
- **Limited LLM provider transparency.** Without raw request/response visibility, developers struggle to understand and optimize prompt behavior—a pain point the community is now solving independently (#2340).

---

*Data sourced from [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) · Generated 2026-05-22*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-22

Here is the technical digest for the `anomalyco/opencode` repository based on the latest GitHub activity.

## 1. Today's Highlights
OpenCode shipped **v1.15.7** yesterday, introducing **Grok OAuth sign-in** (including device-code login) and hardening API error handling to prevent internal config details from leaking in 500 responses. The community remains highly active around provider stability, with a strong focus on the newly announced **Gemini 3.5 Flash** model and persistent **OpenAI OAuth login regressions**. Significant internal codebase cleanup and TUI revamp PRs also landed, indicating an upcoming modernization of the user interface.

## 2. Releases
**v1.15.7**
* **Improvements:** Added Grok OAuth sign-in, including a device-code login flow, contributed by `@Jaaneek`.
* **Bugfixes:** V2 session APIs now return safe `UnknownError` responses with log reference IDs if stored messages are corrupt. Generic API 500s no longer expose config details from server errors.

## 3. Hot Issues
1. **[#2072](https://github.com/anomalyco/opencode/issues/2072) Support for Cursor CLI?** (Open, 68 comments, 172 👍): A massive feature request asking for integration with Cursor's newly released CLI. High community interest indicates strong demand for cross-tool compatibility.
2. **[#23944](https://github.com/anomalyco/opencode/issues/23944) Frequent OpenAI errors** (Open, 17 comments): Users are experiencing persistent `server_error` responses from `openai/gpt-5.4`. This points to underlying rate-limiting or API integration issues with the latest OpenAI models.
3. **[#7467](https://github.com/anomalyco/opencode/issues/7467) GitHub-based Agent Marketplace** (Closed, 16 comments): A proposal for a centralized hub to share and discover agents. Its resolution suggests the maintainers are either building an official solution or have formally rejected it.
4. **[#28026](https://github.com/anomalyco/opencode/issues/28026) Keypress "p" requires double-tap** (Closed, 14 comments): A weird regression in versions above `1.14.41` where the `p` key must be pressed twice while content is streaming in the chat.
5. **[#27905](https://github.com/anomalyco/opencode/issues/27905) OpenAI OAuth login missing** (Open, 14 comments): Users on `1.14.49+` are no longer presented with browser/headless OAuth methods for ChatGPT Plus/Pro, forcing manual API key entry.
6. **[#28377](https://github.com/anomalyco/opencode/issues/28377) Add support for Gemini 3.5 Flash** (Open, 15 👍): Following Google I/O, users are requesting support for the latest frontier model.
7. **[#15988](https://github.com/anomalyco/opencode/issues/15988) Add "Retry Now" button** (Open, 6 comments): Request to skip the rate limit countdown timer for a faster UX during throttling.
8. **[#28729](https://github.com/anomalyco/opencode/issues/28729) SSE event stream silently drops** (Open): A critical networking bug where HTTP clients hang forever if the SSE `/event` stream drops without TCP FIN.
9. **[#28708](https://github.com/anomalyco/opencode/issues/28708) Qwen3.6 returns Anthropic format** (Closed): A compliance/API bug where `qwen3.6-plus-free` via the Zen proxy returns Anthropic-style streaming responses instead of OpenAI-compatible ones.
10. **[#28704](https://github.com/anomalyco/opencode/issues/28704) Zod properties leak into JSON Schema** (Open): Internal Zod properties (`_def`, `typeName`) are leaking into tool schemas sent to providers like Kimi k2.6, causing errors.

## 4. Key PR Progress
1. **[#28718](https://github.com/anomalyco/opencode/pull/28718) Support Zod 3 plugin schemas**: Fixes tool schema leaks by adding MCP SDK compatibility helpers to safely convert Zod 3 and 4 schemas into provider-safe JSON Schema.
2. **[#28728](https://github.com/anomalyco/opencode/pull/28728) TUI diff viewer design revamp**: Major UI update introducing a reusable panel layout, file tree with connector guides, and better reviewed-file states.
3. **[#28032](https://github.com/anomalyco/opencode/pull/28032) Fix: Update spinner color logic** (Closed): Resolves an issue where the prompt spinner detached from the currently running agent during execution.
4. **[#28471](https://github.com/anomalyco/opencode/pull/28471) Allow file context to be disabled** (Closed): Fixes the stuck file hint bug by allowing users to disable the persistent file context injection.
5. **[#28701](https://github.com/anomalyco/opencode/pull/28701) Clarify sequential shortcut labels** (Closed): Replaces ambiguous spaces with `" then "` for sequential shortcut displays (e.g., `Ctrl+X then Down`).
6. **[#28709](https://github.com/anomalyco/opencode/pull/28709) Fix agent configuration from opencode.json**: Resolves a bug where agent configuration variants defined in `opencode.json` were ignored in favor of defaults.
7. **[#28396](https://github.com/anomalyco/opencode/pull/28396) Verify payment ownership** (Open): Plugs an IDOR vulnerability in the console where receipt URLs could be generated without verifying payment ownership.
8. **[#28409](https://github.com/anomalyco/opencode/pull/28409) Fix Lite subscription activation** (Open): Moves subscription activation to `invoice.payment_succeeded` to properly handle 3D Secure (3DS) and SCA payment flows.
9. **[#26367](https://github.com/anomalyco/opencode/pull/26367) Self-service email change flow** (Open): Implements a secure, double-confirmation email update flow for OpenCode Console/Go/Zen accounts.
10. **[#28725](https://github.com/anomalyco/opencode/pull/28725) Drop unused exports**: A significant code health PR utilizing `knip` to remove dead exports across the core packages, shrinking the codebase footprint.

## 5. Feature Request Trends
* **Official Plugin/Agent Marketplace:** Multiple issues (e.g., [#3087](https://github.com/anomalyco/opencode/issues/3087), [#7467](https://github.com/anomalyco/opencode/issues/7467), [#23800](https://github.com/anomalyco/opencode/issues/23800)) are heavily requesting a centralized, UI-driven marketplace for discovering and installing plugins, agents, and skills.
* **Cutting-edge Model Support:** Rapid community demand for supporting the latest frontier model APIs immediately after announcement, specifically Gemini 3.5 Flash ([#28377](https://github.com/anomalyco/opencode/issues/28377)) and Cursor CLI ([#2072](https://github.com/anomalyco/opencode/issues/2072)).
* **Session Lifecycle Hooks:** Requests for persistent plugin state management via session lifecycle context hooks ([#28695](https://github.com/anomalyco/opencode/issues/28695)) to allow plugins to react to startup, resume, and termination events.
* **Token Optimization:** Optimizing system prompt overhead, such as moving git/PR instructions out of bash tool descriptions to save ~1.7K tokens per request ([#21345](https://github.com/anomalyco/opencode/issues/21345)).

## 6. Developer Pain Points
* **Authentication Regressions:** The OpenAI OAuth menu regression ([#27905](https://github.com/anomalyco/opencode/issues/27905), [#28636](https://github.com/anomalyco/opencode/issues/28636)) has persisted across multiple versions, breaking ChatGPT Plus/Pro headless login flows.
* **Provider Stability & Formatting:** Users are frequently encountering mismatched API response formats (e.g., [#28708](https://github.com/anomalyco/opencode/issues/28708), [#28712](https://github.com/anomalyco/opencode/issues/28712)) and streaming instabilities ([#28729](https://github.com/anomalyco/opencode/issues/28729)) when routing through OpenCode proxies or the Vercel AI Gateway.
* **Billing and Subscription Errors:** Reoccurring `402 Payment Required` errors are locking out active paid users ([#27964](https://github.com/anomalyco/opencode/issues/27964)), highlighting friction in server interactions with payment gateways.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-22

## 1. Today's Highlights
The Pi ecosystem saw an intense focus on provider compatibility and reliability today, with numerous community PRs addressing edge cases in OpenAI, Amazon Bedrock, and GitHub Copilot integrations. A major theme was "hardening" the agent loop against malformed LLM outputs—specifically empty tool call IDs and silently truncated streaming responses. Additionally, significant architectural work landed to improve async file operations on Windows and normalize cross-platform path handling.

## 2. Releases
*No new official releases were published in the last 24 hours. The latest stable version remains **0.75.4**.*

## 3. Hot Issues

1. **#4848 [Bedrock adaptive-thinking models truncate at 4096 tokens](https://github.com/badlogic/pi-mono/issues/4848)** — A critical bug where Claude Opus 4.6/4.7 and Sonnet 4.6 on Amazon Bedrock are silently truncated at 4096 tokens. This highlights a dangerous failure mode where `stopReason: "length"` is returned regardless of configured `maxTokens`, causing long-running agent tasks to fail silently.
2. **#4854 [OpenAI-compatible tool replay sends empty tool_call_id](https://github.com/badlogic/pi-mono/issues/4854)** — Pi's persistence layer can replay malformed tool-call fragments with empty IDs, causing subsequent OpenAI API requests to fail with strict validation errors. High impact for sessions relying heavily on tool use.
3. **#4430 [Errors during long sessions (70-90k context)](https://github.com/badlogic/pi-mono/issues/4430)** — An older but highly active issue (9 comments) reporting persistent write/edit/read failures during extended sessions running on local models (Qwen 3.6, Gemma 4) via LM Studio and oMLX.
4. **#4876 [pi update silently stays on 0.74.1 under Node 20](https://github.com/badlogic/pi-mono/issues/4876)** — A versioning trap: `pi update` appears to succeed but leaves users on 0.74.1 because 0.75.x quietly raised the Node requirement to >=22.19.0. This explains a wave of "unable to update" reports.
5. **#4872 [Unable to update to 0.75.4](https://github.com/badlogic/pi-mono/issues/4872)** — Related to the above; users on older Node versions or with dependency conflicts (`node-domexception` deprecation warnings) are blocked from upgrading.
6. **#4867 [Expose provider raw request/response hooks](https://github.com/badlogic/pi-mono/issues/4867)** — The Agenteam team needs visibility into raw provider JSON for debugging, but Pi's current hooks only expose normalized metadata. A clear signal that enterprise users need deeper observability.
7. **#4834 [Dynamically load nested AGENTS.md files](https://github.com/badlogic/pi-mono/issues/4834)** — Request to load subdirectory `AGENTS.md` files contextually when the agent works in those subtrees, rather than only at session startup. Essential for monorepo workflows.
8. **#4865 [Dependency @mariozechner/clipboard-* lost npm provenance](https://github.com/badlogic/pi-mono/issues/4865)** — Supply chain security regression: recent versions of clipboard dependencies no longer include npm provenance attestations, blocking adoption in security-sensitive environments.
9. **#4846 [Keep agent turns running when switching sessions](https://github.com/badlogic/pi-mono/issues/4846)** — Currently, switching sessions via `/resume` or `/fork` aborts the active agent turn. Users want detached/background execution so long-running tasks can continue while they work elsewhere.
10. **#4822 [Lazy tool schema injection](https://github.com/badlogic/pi-mono/issues/4822)** — All 32+ tool schemas are injected every turn, consuming ~5,600 tokens (54% of the system prompt). A proposal for per-group lazy loading to reclaim context window space.

## 4. Key PR Progress

1. **[#4871 fix(ai): default Bedrock inferenceConfig.maxTokens to model.maxTokens](https://github.com/badlogic/pi-mono/pull/4871)** — Directly fixes issue #4848 by ensuring Bedrock's `inferenceConfig.maxTokens` defaults to the model's registered maximum (e.g., 128K) rather than the server-side ~4096 default. Critical for adaptive-thinking Claude models.
2. **[#4873 fix(coding-agent): normalize Windows file URL paths](https://github.com/badlogic/pi-mono/pull/4873)** — Comprehensive cleanup of all path-joining logic for cross-platform consistency, addressing Windows-specific cross-device path issues.
3. **[#4756 fix(coding-agent): use async operations in tools](https://github.com/badlogic/pi-mono/pull/4756)** — Moves sync fs operations to async and offloads image resizing to a worker thread. Directly addresses TUI freezing on Windows caused by Microsoft Defender file locking.
4. **[#4855 Harden OpenAI tool-call replay against empty IDs](https://github.com/badlogic/pi-mono/pull/4855)** — Normalizes replay IDs to non-empty values, merges argument-only deltas, and sanitizes pipe-prefixed IDs. A robust fix for the malformed tool-call pipeline.
5. **[#4853 Ignore invalid empty tool calls before execution](https://github.com/badlogic/pi-mono/pull/4853)** — Defense-in-depth companion to #4855: prevents the agent loop from executing tool-call blocks with empty `id` and `name` fields.
6. **[#4866 feat: add provider raw hooks](https://github.com/badlogic/pi-mono/pull/4866)** — Implements `onRawRequestBody`, `onRawResponseChunk`, and `onRawResponseEnd` callbacks for OpenAI and Anthropic providers, addressing the observability gap from issue #4867.
7. **[#2527 fix(ai): fetch GitHub Copilot context window limits at runtime](https://github.com/badlogic/pi-mono/pull/2527)** — Corrects hardcoded 1M context window overrides for Copilot models (actual limit: 200K) and fetches limits dynamically at runtime.
8. **[#4838 fix(coding-agent): always write branched session file](https://github.com/badlogic/pi-mono/pull/4838)** — Ensures `createBranchedSession` always writes a session file to disk, fixing a crash when forking subagent sessions with no assistant messages.
9. **[#4823 Built-in llama-cpp provider via inline ExtensionFactory](https://github.com/badlogic/pi-mono/pull/4823)** — Adds a zero-config llama.cpp provider that auto-activates when `LLAMA_*` env vars are set, discovering models from the local server endpoint.
10. **[#4856 feat(ai): add Gemini 3.5 Flash for GitHub Copilot](https://github.com/badlogic/pi-mono/pull/4856)** — Registers gemini-3.5-flash in the static model registry with correct compatibility flags for the Copilot provider.

## 5. Feature Request Trends

- **Provider observability and debugging** — Multiple requests for raw request/response hooks (#4867), better timing instrumentation (#4829), and session-level routing headers (#4847) indicate that power users and enterprise teams are hitting debugging walls at scale.
- **Background/detached agent execution** — Requests for non-blocking agent turns (#4846, #4850), extension APIs for background task management, and session persistence across switches reflect a maturing user base running long autonomous workflows.
- **Monorepo and multi-context support** — Nested `AGENTS.md` loading (#4834), subpath installs from monorepos (#4851), and session branching from different working directories (#4812) all point to monorepo-first development becoming a core use case.
- **Context window optimization** — Lazy tool schema injection (#4822) and dynamic context management are becoming urgent as tool counts grow and local models with limited context windows gain popularity.

## 6. Developer Pain Points

- **The Node 22 migration wall** — The jump from Node >=20.6 (0.74.x) to >=22.19 (0.75.x) has left a significant chunk of users stranded. `pi update` silently fails, and the error messaging is insufficient (#4876, #4872, #4833). This is the single most common frustration today.
- **Fragile tool-call pipelines** — Across multiple issues and PRs, malformed tool-call data from OpenAI-compatible providers is causing cascading failures in session replay and continuation. The ecosystem needs more resilient normalization at the provider boundary.
- **Windows reliability gaps** — TUI lockups from synchronous file operations under Defender (#4756), cross-device path issues (#4873), and clipboard provenance loss (#4865) suggest Windows is a second-class citizen that needs sustained investment.
- **Long-context session stability** — Users running 70-90K context sessions consistently hit errors (#4430), and the lack of background execution (#4846) means any interruption destroys expensive long-running agent state.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-22

Here is the technical digest for `github.com/QwenLM/qwen-code` covering the latest releases, issues, and pull requests from the past 24 hours.

## 1. Today's Highlights
**v0.16.0 was officially released**, bringing a CLI markdown enhancement for clickable URLs and a core fix for normalizing cumulative OpenAI stream deltas. However, the rollout experienced significant turbulence, with multiple automated CI/CD failures reported for the core release and the VSCode IDE Companion extension. The community remains heavily focused on **long-session memory management**, as OOM (Out of Memory) errors continue to dominate user reports.

## 2. Releases
- **[v0.16.0](https://github.com/QwenLM/qwen-code/releases/tag/release/v0.16.0)**
  - **CLI Enhancement:** Wrapped markdown links in OSC 8 so wrapped URLs remain clickable in the terminal ([PR #4037](https://github.com/QwenLM/qwen-code/pull/4037) by @BZ-D).
  - **Core Bug Fix:** Normalized cumulative OpenAI stream deltas to prevent streaming errors.

## 3. Hot Issues
1. **[OOM FATAL ERROR near heap limit](https://github.com/QwenLM/qwen-code/issues/4149)** (#4149): Users are experiencing V8 heap exhaustion during long interactive sessions. This has garnered 11 comments and remains a top-priority bug.
2. **[OOM with local Qwen 3.6 / llama.cpp](https://github.com/QwenLM/qwen-code/issues/4351)** (#4351): Running local models via `llama.cpp` on Linux accelerates memory leakage, crashing the host process. 
3. **[Mode B (`qwen serve`) Feature-Priority Roadmap](https://github.com/QwenLM/qwen-code/issues/4175)** (#4175): A highly discussed proposal (25 comments) tracking the path to a production-ready daemon mode and workspace session multiplexing.
4. **[Daemon Mode Open Decisions](https://github.com/QwenLM/qwen-code/issues/3803)** (#3803): A foundational 6-chapter design proposal for Daemon mode. It tracks ongoing architectural implementations.
5. **[Stop using AI code & fix RAM leak manually](https://github.com/QwenLM/qwen-code/issues/4369)** (#4369): A frustrated user suggests developers manually rewrite AI-generated code causing memory leaks, advising the project to write history to disk rather than keeping it in RAM.
6. **[Stream-driven tool dispatch RFC](https://github.com/QwenLM/qwen-code/issues/4387)** (#4387): Proposes executing tools *while* the model streams, rather than buffering them until the stream exits, which could significantly reduce latency.
7. **[W3C traceparent propagation](https://github.com/QwenLM/qwen-code/issues/4384)** (#4384): Feature request to propagate W3C `traceparent` and session IDs to outbound LLM requests to improve distributed tracing and observability.
8. **[MCP Server connected but tools unavailable](https://github.com/QwenLM/qwen-code/issues/4218)** (#4218): A UI disconnect where the `filesystem` MCP server shows as connected, but the model fails to recognize its tools.
9. **[Disable Auto-Memory Recall](https://github.com/QwenLM/qwen-code/issues/4374)** (#4374): Request for a `memory.enableAutoMemoryRecall` configuration toggle to stop automatic context injection at the start of every turn, which bloats token usage.
10. **[Multiple v0.16.0 Release Workflow Failures](https://github.com/QwenLM/qwen-code/issues/4395)** (#4395, #4400, #4409): CI/CD automation bots reported several failed runs for the v0.16.0 core release and VSCode IDE Companion, requiring maintainer intervention.

## 4. Key PR Progress
1. **[fix(core): replace structuredClone with shallow copy](https://github.com/QwenLM/qwen-code/pull/4286)** (#4286 - Closed): Directly addresses OOM errors by replacing heavy `structuredClone` calls on session history with shallow copies, drastically reducing memory peaks. 
2. **[feat(telemetry): Phase 3 — subagent span isolation](https://github.com/QwenLM/qwen-code/pull/4410)** (#4410): Introduces `qwen-code.subagent` spans to isolate telemetry traces from concurrent subagents, preventing trace tree interleaving.
3. **[feat(telemetry): propagate traceparent + session-id](https://github.com/QwenLM/qwen-code/pull/4390)** (#4390): Implements distributed tracing by injecting W3C `traceparent` and `X-Qwen-Code-Session-Id` into upstream LLM API calls.
4. **[fix(core): AbortSignal listener leak](https://github.com/QwenLM/qwen-code/pull/4366)** (#4366): Fixes a `MaxListenersExceededWarning` in long sessions by properly chaining parent-to-child AbortControllers without registering redundant listeners.
5. **[feat(core): atomic write rollout](https://github.com/QwenLM/qwen-code/pull/4333)** (#4333): Replaces bare `fs.writeFile` calls with atomic helpers for credentials, memory, and JSONL session logs to prevent data corruption on process kills.
6. **[feat(serve): shared MCP transport pool](https://github.com/QwenLM/qwen-code/pull/4336)** (#4336 - Closed): Implements F2 of Mode B daemon mode, allowing multiple daemon sessions to share a single MCP transport layer.
7. **[feat(core): add memory pressure monitor](https://github.com/QwenLM/qwen-code/pull/4403)** (#4403): Adds a runtime memory monitor to Qwen Code that triggers conservative cache cleanup and emits diagnostic events when memory limits are approached.
8. **[feat(channels): add Feishu (Lark) channel adapter](https://github.com/QwenLM/qwen-code/pull/4379)** (#4379): Introduces a new channel adapter for Feishu/Lark, supporting WebSocket interactive card streaming and real-time stop buttons.
9. **[feat(memory): project-scoped memory writes](https://github.com/QwenLM/qwen-code/pull/4290)** (#4290): Adds auto-scoping so `save_memory` can write directly to project-level `QWEN.md` or `AGENTS.md` files.
10. **[fix(permissions): command substitution asks, not denies](https://github.com/QwenLM/qwen-code/pull/4386)** (#4386): Changes default security policy for commands with shell substitution (`$()`) from an automatic `deny` to `ask`, fixing overly aggressive permission blocks.

## 5. Feature Request Trends
- **Daemon & Web-Shell Evolution:** Heavy architectural focus on `qwen serve` (Mode B). The community is actively building out shared MCP transport pools, web-shells, and multi-user session management.
- **Advanced Observability:** Strong demand for OpenTelemetry/W3C trace context propagation. Developers want to trace latency and execution paths from the CLI/IDE all the way through to upstream LLM providers.
- **Context & Memory Management Controls:** Users are requesting escape hatches for context compression (e.g., `chatCompression.disabled` for audit trails) and toggles to disable automatic memory recall to save tokens.
- **Streaming Tool Execution:** A shift toward stream-driven tool dispatch—users want the UI and backend to execute tools dynamically as chunks stream in, rather than buffering the entire LLM response first.

## 6. Developer Pain Points
- **V8 Heap Memory Leaks:** This is the single loudest complaint. Long-running sessions and local model integrations frequently exhaust the 4GB V8 heap limit. Users are frustrated by persistent `FATAL ERROR: Ineffective mark-compacts near heap limit` crashes.
- **Aggressive Context Window Bloat:** Developers are finding that auto-memory recall and uncompressed session histories quietly consume context limits, leading to unexpected API costs or empty model responses.
- **CI/CD Release Stability:** The automated release workflows for VSCode IDE Companion extensions and core binaries failed multiple times today, causing friction in getting the latest fixes deployed to users.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-22

## 1. Today's Highlights
DeepSeek TUI v0.8.40 was released today alongside a flurry of maintainer-planned roadmaps for v0.8.41 and v0.8.42, signaling a shift toward hostability, long-session reliability, and an "inbox-zero" issue triage. The community saw a surge of high-quality external PRs addressing cross-platform stability, YAML parsing, and IDE bridging. Maintainer **Hmbown** also opened a comprehensive series of slash-command architecture tracker issues, outlining a major upcoming refactor of the TUI's control-plane semantics.

## 2. Releases
- **v0.8.40**: Latest stable release. Introduces streamlined npm global installation (`npm install -g deepseek-tui`) that bundles required binaries, alongside GHCR/Docker support for containerized workflows. 

## 3. Hot Issues

1. **[#1092 ACP: expose tool calls via serve --acp](https://github.com/Hmbown/DeepSeek-TUI/issues/1092)** (17 comments)
   The most actively discussed issue. The community is heavily requesting that `read_file`, `exec_shell`, and `write_file` tool calls be exposed via the Agent Client Protocol (JSON-RPC 2.0) to enable deep integration with editors like Zed.
   
2. **[#1695 MacOS file write problem](https://github.com/Hmbown/DeepSeek-TUI/issues/1695)** (5 comments)
   A critical bug where `write_file` silently fails for content larger than ~1KB on macOS. A user-provided skill patch workaround is attached while awaiting a core fix.

3. **[#703 ClaudeCode vs. DeepSeek-TUI Comparison](https://github.com/Hmbown/DeepSeek-TUI/issues/703)** (5 comments)
   A heavily debated comparison noting DeepSeek-TUI consumes significantly more tokens than Claude Code for identical C++ tasks using the same DSV4 Pro model, highlighting needed optimizations in system prompt and context handling.

4. **[#1607 Request for additional token cost currencies](https://github.com/Hmbown/DeepSeek-TUI/issues/1607)** (5 comments)
   Users are requesting native support for fiat currencies like CNY (¥) in token cost estimations, rather than relying solely on USD.

5. **[#1004 Preview chat completion request (`/dryrun`)](https://github.com/Hmbown/DeepSeek-TUI/issues/1004)** (3 comments)
   Request for a `/dryrun` command to preview exact payloads before sending them to V4 Pro, allowing developers to optimize context and avoid high API costs.

6. **[#1849 v0.8.41 Tracker](https://github.com/Hmbown/DeepSeek-TUI/issues/1849)** (2 comments)
   The official v0.8.41 milestone focusing on Tencent Lighthouse hostability, long-session hardening, and orientation cache improvements.

7. **[#1876 v0.8.42 Tracker: Inbox-zero triage](https://github.com/Hmbown/DeepSeek-TUI/issues/1876)** (1 comment)
   Maintainer roadmap for v0.8.42 focusing on draining the untriaged issue/PR backlog without introducing massive feature merges.

8. **[#1186 Typed persistent permission rules](https://github.com/Hmbown/DeepSeek-TUI/issues/1186)** (2 comments)
   Proposal for a robust execution policy layer allowing `allow`, `deny`, or `ask` rules scoped by tool name, command prefix, or path pattern.

9. **[#1409 MCP OAuth 2.1 Protocol Support](https://github.com/Hmbown/DeepSeek-TUI/issues/1409)** (1 comment)
   Users are running into authentication walls with MCP servers (like the Tinyfish search engine) that require OAuth 2.1, which DeepSeek-TUI does not currently support.

10. **[#1907 SKILL.md YAML block scalar parsing bug](https://github.com/Hmbown/DeepSeek-TUI/issues/1907)** (1 comment)
    Parsing breaks when `description` fields in SKILL.md frontmatter use standard YAML block scalar syntax (`>` or `|`).

*(Note: Issues [#1886](https://github.com/Hmbown/DeepSeek-TUI/issues/1886), [#1887](https://github.com/Hmbown/DeepSeek-TUI/issues/1887), [#1888](https://github.com/Hmbown/DeepSeek-TUI/issues/1888), [#1889](https://github.com/Hmbown/DeepSeek-TUI/issues/1889), [#1890](https://github.com/Hmbown/DeepSeek-TUI/issues/1890), [#1891](https://github.com/Hmbown/DeepSeek-TUI/issues/1891), and [#1892](https://github.com/Hmbown/DeepSeek-TUI/issues/1892) were also opened today by the maintainer to define a massive upcoming refactor of slash-command semantics, registry, and UI routing).*

## 4. Key PR Progress

1. **[#1875 v0.8.41 Umbrella PR](https://github.com/Hmbown/DeepSeek-TUI/pull/1875)**: The main release branch for v0.8.41, integrating hostability docs, orientation cache, Windows containment, and sub-agent reliability fixes.
2. **[#1912 Log retention `config.toml` integration](https://github.com/Hmbown/DeepSeek-TUI/pull/1912)** (by *aboimpinto*): Adds a `[logs]` section to the config for specifying `retention_days`.
3. **[#1908 YAML block scalars fix](https://github.com/Hmbown/DeepSeek-TUI/pull/1908)** (by *zlh124*): Direct fix for Issue #1907, correctly parsing folded (`>`) and literal (`|`) YAML blocks in SKILL.md.
4. **[#1911 Ctrl+Z composer undo](https://github.com/Hmbown/DeepSeek-TUI/pull/1911)** (by *LING71671*): Implements a single-slot undo buffer to recover accidentally cleared composer drafts.
5. **[#1820 MCP-over-WS IDE bridge](https://github.com/Hmbown/DeepSeek-TUI/pull/1820)** (by *ZyphrZero*): Adds an IDE bridge crate communicating via MCP-over-WebSocket, allowing deep editor integration.
6. **[#1893 Configurable TLS verification](https://github.com/Hmbown/DeepSeek-TUI/pull/1893)** (by *wavezhang*): Adds `insecure_skip_tls_verify` flag via config/env to support custom/proxy corporate networks.
7. **[#1810 Viewport reset & scroll region fix](https://github.com/Hmbown/DeepSeek-TUI/pull/1810)** (by *ljm3790865*): Resolves UI bugs by splitting the chat area into independent scroll regions and fixing viewport resets on focus recovery.
8. **[#1906 Copy transcript without visual wraps](https://github.com/Hmbown/DeepSeek-TUI/pull/1906)** (by *knqiufan*): Fixes clipboard behavior so mouse selections copy clean text without terminal wrap breaks.
9. **[#1769 Subagent model config exposure](https://github.com/Hmbown/DeepSeek-TUI/pull/1769)** (by *LING71671*): Allows users to configure and hot-swap model routing specifically for sub-agents.
10. **[#1910 Windows alt-screen logging fix](https://github.com/Hmbown/DeepSeek-TUI/pull/1910)** (by *aboimpinto*): Prevents stderr logging from corrupting the Windows TUI display when operating in the alt-screen buffer.

## 5. Feature Request Trends
- **Multi-Agent & Editor Integration**: High demand for exposing tool calls via ACP and bridging TUI features to IDEs (VS Code, Cursor) via WebSockets.
- **Cross-Tool Portability**: Developers want the ability to auto-import existing configurations, MCP settings, and plugins from Claude Code and Cursor.
- **Context & Token Transparency**: A strong need for preview/dry-run commands, real-time API balance display in the status bar, and multi-currency cost estimation.
- **Granular Permissions**: Moving away from simple API keys towards typed execution policies and OAuth 2.1 for secure, scoped MCP server interactions.
- **Advanced Session Management**: Requests for persistent non-interactive sessions (`exec --resume`) and better localization (i18n) for global users.

## 6. Developer Pain Points
- **Token Consumption**: Developers are frustrated that DeepSeek-TUI often consumes exponentially more tokens than competing tools (like Claude Code) for identical tasks, drastically increasing costs.
- **macOS File System Reliability**: The silent failure of `write_file` for content >1KB on macOS is a critical blocker for agent workflows.
- **Cross-Platform UI/UX Leaks**: Windows and alt-screen terminal users frequently suffer from UI corruption caused by stderr logging and terminal viewport mishandling.
- **Plugin Lock-in**: Users with established workflows in other tools find it difficult to migrate due to a lack of a standardized plugin and hook architecture in DeepSeek-TUI.

</details>