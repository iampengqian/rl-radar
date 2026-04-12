# AI CLI Tools Community Digest 2026-04-13

> Generated: 2026-04-12 22:05 UTC | Tools covered: 7

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

# AI Developer CLI Tools Ecosystem Report — 2026-04-13

## 1. Ecosystem Overview
The AI developer CLI tool ecosystem is currently characterized by rapid feature iteration coupled with growing pains in foundational stability and resource management. As tools transition from novel coding assistants to core production infrastructure, communities are demanding better reliability, cross-platform parity, and robust agentic safety guardrails. The dominant theme across all major platforms is the tension between pushing autonomous, multi-agent capabilities and maintaining the cost predictability, performance, and trust required by enterprise and power users.

## 2. Activity Comparison
*(Note: Counts reflect explicitly highlighted items in today's digest)*

| Tool | Issues Highlighted | PRs Highlighted | Release Status |
|---|---|---|---|
| **Claude Code** | 10 | 10 | No release |
| **OpenAI Codex** | 10 | 10 | No release |
| **Gemini CLI** | 10 | 10 | No release |
| **GitHub Copilot CLI** | 10 | 0 | No release |
| **Kimi Code CLI** | 8 | 8 | No release |
| **OpenCode** | 10 | 10 | No release |
| **Qwen Code** | 10 | 10 | **Nightly build** shipped |

## 3. Shared Feature Directions
Analyzing community feedback reveals several unified requirements driving the next generation of CLI agents:

*   **Cost & Quota Observability (Claude Code, Copilot CLI, OpenCode):** Users are experiencing severe billing friction. Claude Code users are fighting silent token inflation via reduced cache TTLs; Copilot CLI users report triple-counting of premium requests; OpenCode users face rapidly drained quotas due to misclassified `X-Initiator` headers. Transparent, accurate usage tracking is now a critical requirement.
*   **Windows & WSL Parity (Codex, OpenCode, Kimi Code, Qwen Code):** Windows remains a persistent second-class citizen. MCP stdio servers are broken on Windows in Kimi Code, OpenCode suffers from path normalization and ACP duplication bugs, Codex faces WSL1 sandbox regressions, and Qwen Code experiences silent SSH exits. Systematic platform support is universally demanded.
*   **Agentic Safety & Permission Guardrails (Gemini CLI, OpenCode, Qwen Code):** As agents gain autonomy, users are sounding alarms. Gemini CLI agents executed destructive `git reset --hard` commands, while OpenCode agents autonomously ran `pip3 install`. There is a shared demand for strict permission defaults and defense-in-depth against irreversible actions. 
*   **Session Management & Persistence (Copilot CLI, Kimi Code, Qwen Code):** Developers are treating CLI agents as long-running pair programmers and require state continuity. Copilot CLI users complain about amnesia between sessions (model selections resetting), while Kimi and Qwen are actively building CRUD session management (`/delete`, `/rename`, auto-titling).
*   **Terminal UI Stability & Memory Leaks (Claude Code, Gemini CLI, OpenCode, Qwen Code):** Severe resource mismanagement is apparent across the board. OpenCode users report 25GB RAM consumption from zombie SSE connections, Gemini CLI suffers from unmanaged context window growth, and Qwen Code is hitting JavaScript heap OOM limits. Core memory profiling and leak prevention are urgently needed.

## 4. Differentiation Analysis
Despite shared goals, tools are carving out distinct technical niches:

*   **Claude Code** focuses heavily on **enterprise ecosystem integrations** (M365, Google Drive) and a budding **plugin architecture**. However, its differentiation is currently hindered by community backlash regarding model quality degradation and opaque pricing metrics.
*   **OpenAI Codex** is heavily focused on **enterprise sandbox security and infrastructure**. Today's development focused almost exclusively on hardening `bubblewrap` sandboxes, enforcing exact deny-read paths, and protecting arg0 helper directories, making it ideal for locked-down corporate environments.
*   **Gemini CLI** is pioneering **proactive and multi-modal agent capabilities**. By introducing server-pushed MCP chat injection, AST-aware code mapping, and native voice transcription, Gemini is targeting a more futuristic, ambient AI pair-programming experience.
*   **GitHub Copilot CLI** is leveraging its deep integration with the GitHub ecosystem but currently struggles with **networking reliability** (HTTP/2 GOAWAY frames) and hook lifecycle maturity, indicating a tool still stabilizing its core extension APIs.
*   **Qwen Code & Kimi Code** are differentiated by their focus on **multi-provider flexibility** (supporting OpenAI-compatible endpoints, MiniMax, local providers) and **CI/CD unattended automation**, featuring innovative concepts like Qwen's "Vibe Mode" for safe auto-approvals.
*   **OpenCode** serves users demanding **multi-agent architectures**, though it currently faces growing pains with nested subagent routing and high RAM usage.

## 5. Community Momentum & Maturity
*   **Most Active / Rapidly Iterating:** **Qwen Code** was the only tool to ship a nightly release today, backed by a massive volume of highly specific community PRs addressing core stability and feature parity. **Gemini CLI** also shows high momentum, with aggressive refactoring of technical debt and cutting-edge feature PRs.
*   **Highest Traction / Friction:** **Claude Code** has the largest volume of user engagement (e.g., 👍1530 on a single model degradation issue), indicating a massive power-user base that is currently highly critical of recent changes. **OpenCode** also shows high engagement severity, with detailed forensic debugging provided by the community.
*   **Maturity Plateaus:** **Copilot CLI** and **OpenAI Codex** appear to be in a stabilization phase, addressing core OS-level sandboxing and networking plumbing rather than shipping flashy features.

## 6. Trend Signals
For technical decision-makers and developers, today's digest highlights clear industry trajectories:

1.  **The Shift to Unattended / Autonomous CI/CD Agents:** The emergence of "Vibe Modes", persistent retry logic, and batch processing indicates that developers want AI agents running safely in the background and in pipelines, moving away from manual babysitting.
2.  **MCP is Evolving from Request-Response to Real-Time:** Gemini's MCP chat injection PR signals that the Model Context Protocol is evolving into a dynamic, event-driven standard, which will require other tools to adapt their extension architectures.
3.  **Billing and Quota Accuracy is the Next Bottleneck:** As agents chain tools and spawn subagents, accurately metering tokens and API requests is failing across multiple platforms. Transparent billing infrastructure will be a key competitive advantage moving forward.
4.  **AST and Advanced Context Scoping are Replacing Brute Force:** Tools are recognizing that cramming entire files into context windows causes OOMs and latency. The shift toward AST-aware mapping (Gemini) and prefix compaction (Codex) represents the industry moving toward structurally intelligent context management.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-04-13 | Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

Although the current top PRs show `Comments: undefined` in the raw data pull, the following submissions attracted the most sustained community engagement (longest update lifespans, highest PR numbers indicating active review cycles, and most substantive proposals). Ranked by community attention and functional impact:

| # | Skill / PR | Author | Functionality | Status |
|---|-----------|--------|---------------|--------|
| 1 | **[ODT Skill — OpenDocument Creation & Template Filling](https://github.com/anthropics/skills/pull/486)** | GitHubNewbie0 | Full lifecycle ODT handling: create `.odt` files from scratch, fill templates, and parse ODT to HTML. Targets the ISO-standard format used by LibreOffice, Google Docs, and OnlyOffice. | 🟢 Open |
| 2 | **[Document Typography Quality Control](https://github.com/anthropics/skills/pull/514)** | PGTBoos | Prevents orphan word wrap, widow paragraphs, and numbering misalignment in every document Claude generates — a universal pain point. | 🟢 Open |
| 3 | **[feat: Testing Patterns Skill](https://github.com/anthropics/skills/pull/723)** | 4444J99 | Full-stack testing guidance: Testing Trophy model, unit/React/API/E2E patterns, mutation testing. Covers philosophy through implementation. | 🟢 Open |
| 4 | **[Sensory Skill — macOS Automation via AppleScript](https://github.com/anthropics/skills/pull/806)** | AdelElo13 | Replaces screenshot-based computer use with native `osascript` automation. Two-tier permission model: Tier 1 (direct app scripting) works out-of-the-box, Tier 2 (System Events UI scripting) requires Accessibility permissions. | 🟢 Open |
| 5 | **[Quality Playbook — Automated Quality System Generation](https://github.com/anthropics/skills/pull/659)** | andrewstellman | Revives traditional quality engineering using AI. Generates quality systems from *requirements*, not source code — behavioral specs, boundary testing, traceability matrices. | 🟢 Open |
| 6 | **[x402 BSV Auth + Micropayment Skill](https://github.com/anthropics/skills/pull/374)** | Calgooon | Natural-language-driven micropayments for AI services using BSV blockchain. Discover, authenticate, and pay services from a single prompt. | 🟢 Open |
| 7 | **[Masonry AI — Image & Video Generation](https://github.com/anthropics/skills/pull/335)** | junaid1460 | CLI skill for Imagen 3.0 image generation, Veo 3.1 video generation, and job management (status, download, history). | 🟢 Open |
| 8 | **[shodh-memory — Persistent Context for AI Agents](https://github.com/anthropics/skills/pull/154)** | varun29ankuS | Maintains context across conversations. Proactive memory surfacing, rich content structuring, and forgetting policies. | 🟢 Open |

---

## 2. Community Demand Trends

Distilled from the most-commented and most-upvoted Issues:

| Trend | Signal Issues | What the Community Wants |
|--------|--------------|--------------------------|
| **🔒 Trust & Security** | [#492](https://github.com/anthropics/skills/issues/492) (👍2) — Community skills distributed under `anthropic/` namespace | Clear namespace separation, verified skill signatures, and a trust boundary between official and community skills. |
| **🏢 Org-Wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (👍4) | Direct skill sharing links or shared organizational skill libraries — replacing manual `.skill` file transfers via Slack/Teams. |
| **🔧 Platform Reliability** | [#406](https://github.com/anthropics/skills/issues/406) (👍4), [#403](https://github.com/anthropics/skills/issues/403), [#62](https://github.com/anthropics/skills/issues/62) (👍1) | Upload, replace, and delete operations are failing with 500 errors. Skills disappearing. Core CRUD operations must be stable. |
| **🧪 Evaluation & Quality Tooling** | [#556](https://github.com/anthropics/skills/issues/556) (👍6), [#189](https://github.com/anthropics/skills/issues/189) (👍7) | `run_eval.py` has 0% skill trigger rate; duplicate skills from overlapping plugin installs. The community needs working eval infrastructure and deduplication. |
| **🔌 MCP Integration** | [#16](https://github.com/anthropics/skills/issues/16) | Expose Skills as MCPs — algorithmic APIs rather than just prompt instructions. A structural evolution of the skills paradigm. |
| **☁️ Bedrock/Enterprise Auth** | [#29](https://github.com/anthropics/skills/issues/29), [#532](https://github.com/anthropics/skills/issues/532) (👍1) | Skills must work with AWS Bedrock and enterprise SSO — not just direct API keys. |

---

## 3. High-Potential Pending Skills

These open PRs address documented pain points and are likely to merge soon:

| PR | Why It's Ready | Addresses |
|----|---------------|-----------|
| **[fix(docx): prevent tracked change w:id collision](https://github.com/anthropics/skills/pull/541)** | Surgical bug fix for document corruption — shared `w:id` namespace collision in OOXML. Narrow scope, clear root cause. | Document skill reliability |
| **[fix(skill-creator): warn on unquoted YAML descriptions](https://github.com/anthropics/skills/pull/539)** | Pre-parse validation catches silent YAML failures before `yaml.safe_load()`. Prevents a class of skill-loading errors. | Skill creation UX |
| **[fix(pdf): correct case-sensitive file references](https://github.com/anthropics/skills/pull/538)** | 8 case-sensitivity mismatches break PDF skill on Linux. Trivial fix with high impact. | Cross-platform compatibility |
| **[Fix(skill-creator): specify utf-8 encoding](https://github.com/anthropics/skills/pull/284)** | Prevents `UnicodeDecodeError` on Windows. Small change, addresses #284-era complaints. | Windows support |
| **[docs: add CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** | Addresses [#452](https://github.com/anthropics/skills/issues/452) — repo scores 25% on GitHub community health metrics. Single most impactful governance addition. | Community health |
| **[plan-task — Persistent Plans Across Sessions](https://github.com/anthropics/skills/pull/522)** | Solves the "Claude starts every session from scratch" problem. Persists multi-step plans in `.claude/tasks/`. Git-tracked sharing mode included. | Workflow continuity |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for reliable document generation skills (DOCX, ODT, PDF) with professional-grade output quality, underpinned by platform stability (upload/delete/eval must work) and a trustworthy namespace model that clearly separates official Anthropic skills from community contributions.**

---

# Claude Code Community Digest — 2026-04-13

## 1. Today's Highlights

No new releases shipped in the last 24 hours, but the community is actively buzzing around **cache token cost inflation**, with two high-traction issues (#46829, #46917) identifying significant regressions in `cache_creation_input_tokens` tied to both a server-side TTL change and client version updates. Meanwhile, ongoing complaints about model capability degradation (#42796, 👍1530) continue to dominate the issue tracker nearly two weeks after opening.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [#42796](https://github.com/anthropics/claude-code/issues/42796) — *Claude Code is unusable for complex engineering tasks with the Feb updates* (CLOSED, 👍1530, 319 comments) | The single most-upvoted open meta-issue. Developers report a sustained degradation in model reasoning and instruction-following since February. Massive community consensus signals a trust problem that hasn't been meaningfully addressed. |
| 2 | [#46829](https://github.com/anthropics/claude-code/issues/46829) — *Cache TTL silently regressed from 1h to 5m* (CLOSED, 👍133, 20 comments) | Analysis of session JSONL files reveals Anthropic silently shortened prompt cache TTL from 1 hour to 5 minutes in early March, causing material quota and cost inflation for all users. Marked closed but the 👍 count is climbing fast — a transparency and billing concern. |
| 3 | [#46917](https://github.com/anthropics/claude-code/issues/46917) — *CC v2.1.100+ inflates cache_creation by ~20K tokens vs v2.1.98* (OPEN, 👍41) | A well-reproduced A/B comparison showing newer client versions consume ~20K more cache_creation tokens per request with identical payloads. The inflation appears server-side, possibly User-Agent routed. Directly amplifies the TTL regression above. |
| 4 | [#26224](https://github.com/anthropics/claude-code/issues/26224) — *Claude Code is hanging / freezing / stuck* (OPEN, 👍98, 72 comments) | A persistent issue where the CLI freezes for 5–20+ minutes on heaps of prompts. No fix in sight and remains a top pain point for daily users. |
| 5 | [#8327](https://github.com/anthropics/claude-code/issues/8327) — *"Organization has been disabled" error when API key overrides subscription* (OPEN, 👍14, 101 comments) | Long-standing auth priority bug where an `ANTHROPIC_API_KEY` env var silently breaks a valid Pro/Max subscription. Six months old with no resolution — affects mixed-use environments heavily. |
| 6 | [#46445](https://github.com/anthropics/claude-code/issues/46445) — *`/continue` and `/resume` show all sessions across projects* (OPEN, 👍22, 11 comments) | Regression in v2.1.101: session scoping broke, leaking sessions from all projects into the current REPL. High impact for multi-project developers. |
| 7 | [#20469](https://github.com/anthropics/claude-code/issues/20469) — *Microsoft 365 Connector for Max Plan Individual Users* (OPEN, 👍59, 52 comments) | Individual Max plan users ($100–200/mo) can't access the M365 connector that Team plan ($30/seat) users get. A pricing fairness issue drawing significant community debate. |
| 8 | [#30457](https://github.com/anthropics/claude-code/issues/30457) — *Google Drive connector shows connected but tools not exposed in Cowork* (OPEN, 👍37, 51 comments) | Integration stub works but actual tool exposure in Cowork mode is broken. Affects anyone relying on Google Drive MCP in their workflow. |
| 9 | [#44112](https://github.com/anthropics/claude-code/issues/44112) — *Cloud MCP servers auto-injected without consent* (OPEN, 👍1, 5 comments) | Gmail and Google Calendar MCP servers from claude.ai are injected into the local CLI on every start without user opt-in. Raises consent and security concerns. |
| 10 | [#41361](https://github.com/anthropics/claude-code/issues/41361) — *MCP tool results invisible in 2.1.88* (OPEN, 👍9, 11 comments) | An `outputSchema safeParse` guard silently returns null on schema mismatch, making MCP tool results invisible to users. Tagged as regression. |

---

## 4. Key PR Progress

| # | PR | Summary |
|---|----|---------|
| 1 | [#47061](https://github.com/anthropics/claude-code/pull/47061) — *feat(plugin): notification-sound plugin* | Adds an audible system notification when Claude finishes processing (hooks into `Notification` and `Stop` events). Practical quality-of-life improvement for multitasking developers. |
| 2 | [#46903](https://github.com/anthropics/claude-code/pull/46903) — *docs(plugin-dev): plugin cache sync guidance* | Documents that local plugin edits don't propagate to `~/.claude/plugins/cache/` and adds sync guidance. Fills a documentation gap that's been confusing plugin authors. |
| 3 | [#46901](https://github.com/anthropics/claude-code/pull/46901) — *Add research-loop plugin* (CLOSED) | A community wrapper for "10000 Mentors Research Workflow" providing source-gated autonomous research loops. Closed — possibly merged or withdrawn. |
| 4 | [#46914](https://github.com/anthropics/claude-code/pull/46914) — *Create Mythos Runtime Tests* | Part of a series of PRs from the same contributor adding "Mythos Runtime" test infrastructure. Lacks a clear description — likely needs more context before review. |
| 5 | [#46912](https://github.com/anthropics/claude-code/pull/46912) — *Add mythos runtime workflow* | Companion to the above; adds CI workflow for the Mythos runtime. Same contributor, same concern about missing context. |
| 6 | [#46095](https://github.com/anthropics/claude-code/pull/46095) — *Add Claude Mythos operating contract for Veriflow immune system* | Third in the Mythos series. No substantive description provided. |
| 7 | [#45721](https://github.com/anthropics/claude-code/pull/45721) — *Add Claude Mythos operating contract for Veriflow immune system* (CLOSED) | Duplicate/earlier attempt of #46095, closed. |
| 8 | [#46854](https://github.com/anthropics/claude-code/pull/46854) — *Claude/schedule app layout z05e m* | Opaque title and no description. Appears to be a low-quality or spam submission. |
| 9 | [#41447](https://github.com/anthropics/claude-code/pull/41447) — *feat: open source claude code ✨* | A symbolic/meta PR that aggregates multiple "open source Claude Code" requests. Unlikely to be acted on but signals strong community desire. |
| 10 | *(No additional substantive PRs)* | The remaining open PRs are largely from the "Mythos" series or low-context submissions. The PR pipeline is quiet today. |

---

## 5. Feature Request Trends

Several clear themes emerge from the issue tracker:

- **Cost observability & control** — Requests for built-in rate-limit usage bars ([#30341](https://github.com/anthropics/claude-code/issues/30341)), better cache TTL transparency, and per-session cost breakdowns are intensifying as users face unexplained token inflation.
- **MCP integration parity & consent** — Users want connectors (M365 [#20469](https://github.com/anthropics/claude-code/issues/20469), Google Drive [#30457](https://github.com/anthropics/claude-code/issues/30457)) available across all plan tiers, with clear opt-in/opt-out for auto-injected cloud MCP servers ([#44112](https://github.com/anthropics/claude-code/issues/44112)).
- **IDE/UX polish** — VS Code diff display options ([#29388](https://github.com/anthropics/claude-code/issues/29388)), `/model` switching in remote sessions ([#39724](https://github.com/anthropics/claude-code/issues/39724)), and SessionStart hook stdout visibility ([#47117](https://github.com/anthropics/claude-code/issues/47117)) are all active requests.
- **Plugin ecosystem tooling** — Plugin developers need better cache sync, dev workflows, and documentation (reflected in PR [#46903](https://github.com/anthropics/claude-code/pull/46903)).

---

## 6. Developer Pain Points

**Cache token cost regression is the #1 concern right now.** The combination of a silent TTL shortening (1h → 5m, [#46829](https://github.com/anthropics/claude-code/issues/46829)) and version-specific ~20K token inflation per request ([#46917](https://github.com/anthropics/claude-code/issues/46917)) is materially increasing costs with no acknowledged fix. New sessions reportedly never hit a full cache at all ([#47098](https://github.com/anthropics/claude-code/issues/47098)).

**Model quality degradation remains unresolved.** The mega-thread at [#42796](https://github.com/anthropics/claude-code/issues/42796) (👍1530) continues to draw engagement. Developers report Claude Code ignoring `CLAUDE.md` rules ([#47101](https://github.com/anthropics/claude-code/issues/47101)), losing context during long sessions, and regressing on basic git operations ([#47029](https://github.com/anthropics/claude-code/issues/47029)).

**Regressions in recent releases are compounding.** The `/continue`/`/resume` scope regression ([#46445](https://github.com/anthropics/claude-code/issues/46445)), MCP output schema silent failures ([#41361](https://github.com/anthropics/claude-code/issues/41361)), and the "unchanged since last read" bug after rewinds ([#46749](https://github.com/anthropics/claude-code/issues/46749), [#42264](https://github.com/anthropics/claude-code/issues/42264)) suggest that release quality gating around version 2.1.88–2.1.101 has been insufficient.

**Long-standing bugs are aging out.** The auth priority bug ([#8327](https://github.com/anthropics/claude-code/issues/8327), 6 months old), streaming timeout hangs ([#25979](https://github.com/anthropics/claude-code/issues/25979)), and VS Code multi-root workspace issue ([#12808](https://github.com/anthropics/claude-code/issues/12808), 4+ months) indicate a growing backlog of unfixed fundamentals.

---

*Data sourced from [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) on 2026-04-13.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

## OpenAI Codex Community Digest — 2026-04-13

### 1. Today's Highlights
No new official releases shipped in the last 24 hours, but the core team and contributors submitted a high volume of pull requests focused on hardening the sandbox/permissions layer, fixing WSL1 regression bugs, and extending the hooks system to cover approval prompts. Community activity centered on thread/history management limitations in the Desktop App and persistent TUI performance regressions.

### 2. Releases
No new releases were published on 2026-04-13.

### 3. Hot Issues
| # | Issue | Why it matters |
|---|-------|----------------|
| 1 | **[#10450 Remote Development in Codex Desktop App](https://github.com/openai/codex/issues/10450)** | The most-upvoted open issue (529 👍, 111 comments). Users are blocked by the inability to connect the Desktop App to remote workspaces, a core workflow for VS Code power users. |
| 2 | **[#14919 bwrap: Failed RTM_NEWADDR: Operation not permitted](https://github.com/openai/codex/issues/14919)** | A regression in CLI 0.115.0 that completely breaks the Linux bubblewrap sandbox, preventing subagents from executing commands. Closed, but still heavily discussed (31 comments). |
| 3 | **[#12564 Allow renaming task/thread titles](https://github.com/openai/codex/issues/12564)** | Ties into a cluster of history/navigation requests. Users cannot organize long task lists, making the App's history panel unusable at scale (29 comments). |
| 4 | **[#16335 TUI/CLI performance regression from 116 to 117](https://github.com/openai/codex/issues/16335)** | Reports of significant slowdowns on Windows 11 after upgrading to 0.117.0. Affects Business-tier users working with model 5.4. |
| 5 | **[#15949 Windows App reopens itself after closing](https://github.com/openai/codex/issues/15949)** | A "zombie process" UX bug where the Desktop App relaunches unprompted on Windows 10, breaking expectations and causing resource drain. |
| 6 | **[#16899 CLI session loses stdio MCP connections](https://github.com/openai/codex/issues/16899)** | Long-lived CLI sessions silently degrade MCP transports to "Transport closed," forcing users to constantly spawn fresh `codex exec` processes. |
| 7 | **[#16076 WSL bubblewrap namespace regression in 0.115.0](https://github.com/openai/codex/issues/16076)** | Another sandbox regression specific to WSL users, compounding the Linux bwrap issues and highlighting gaps in Windows/Linux compatibility testing. |
| 8 | **[#11004 developer_instructions not attached to App threads](https://github.com/openai/codex/issues/11004)** | `config.toml` developer instructions are ignored in Desktop App threads, silently degrading response quality for users who rely on custom instructions. |
| 9 | **[#16732 ApplyPatchHandler doesn't emit hook events](https://github.com/openai/codex/issues/16732)** | Hooks only fire for the Bash tool, breaking automation for patch-apply and other tool types. Directly limits the extensibility story. |
| 10 | **[#17544 Stop working on Codex, need agent orchestration](https://github.com/openai/codex/issues/17544)** | A provocative "meta" issue arguing that single-agent CLI workflows are being eclipsed by multi-agent orchestration tools. Signals evolving user expectations. |

### 4. Key PR Progress
| # | PR | Summary |
|---|----|---------|
| 1 | **[#17294 Run exec-server fs operations through sandbox helper](https://github.com/openai/codex/pull/17294)** | Reroutes filesystem RPCs through a `codex-fs` arg0 helper to ensure sandboxed environments handle writes correctly. Removes the standalone exec-server binary path. |
| 2 | **[#17563 Add Bash PermissionRequest hooks](https://github.com/openai/codex/pull/17563)** | Extends the hooks system to include `PermissionRequest` events at approval boundaries, previously a blind spot where hooks were bypassed. |
| 3 | **[#17559 Reject WSL1 bubblewrap sandboxing](https://github.com/openai/codex/pull/17559)** | Detects WSL1 early and fails with a clear message instead of crashing, directly addressing recurring WSL sandbox regressions. |
| 4 | **[#15977 Enforce exact deny-read paths](https://github.com/openai/codex/pull/15977)** | Hardens filesystem sandbox policy by adding exact-path deny-read enforcement, closing bypass paths that previously ignored deny rules. |
| 5 | **[#17550 feat(tui): add reverse history search to composer](https://github.com/openai/codex/pull/17550)** | Adds `Ctrl+R` reverse incremental search to the TUI prompt, matching standard shell ergonomics. |
| 6 | **[#17286 Prefix Compaction](https://github.com/openai/codex/pull/17286)** | Implements background pre-warming of prefix compaction to reduce latency when context hits compaction thresholds. |
| 7 | **[#17520 Mirror user text into realtime](https://github.com/openai/codex/pull/17520)** | Allows typed messages to submit during active realtime sessions, mirroring the text into the realtime stream. |
| 8 | **[#17570 Protect active arg0 helper dirs](https://github.com/openai/codex/pull/17570)** | Prevents janitor cleanup from removing in-use helper directories via `.pid` sentinel files, fixing a startup race condition. |
| 9 | **[#17547 Support bubblewrap in secure Docker devcontainer](https://github.com/openai/codex/pull/17547)** | Installs bubblewrap in setuid mode within a secure devcontainer profile, enabling full Codex sandboxing inside Docker. |
| 10 | **[#17380 Add timer tool](https://github.com/openai/codex/pull/17380)** | Introduces `create_timer`, `delete_timer`, and `list_timers` tools, plus a mechanism for injecting external messages into threads. |

### 5. Feature Request Trends
- **Thread & history management** is the dominant theme: renaming sessions (#12564, #15444, #12671, #13598, #11705), global search across conversations (#16672), and preventing scroll jumps (#13698). Users are struggling to navigate growing task histories.
- **Remote development support** (#10450) remains the single most-requested capability, with the community expecting parity with VS Code Remote.
- **Hooks & extensibility gaps**: Users want hook events for all tool types (#16732), subagent-vs-main-agent distinction (#16226), and permission-request hooks (#17563).
- **Plan mode export** (#10486): Exporting generated plans to Markdown is a recurring ask from CLI users who want to share or archive plans.
- **Agent orchestration** (#17544): A nascent but notable demand for multi-agent or orchestration capabilities beyond single-agent workflows.

### 6. Developer Pain Points
- **Sandbox regressions on Linux/WSL**: The bubblewrap sandbox broke in multiple ways after v0.115.0 (#14919, #16076), and workspace-write mode creates unwanted read-only files (#17555). WSL1 remains unsupported, causing confusion.
- **Windows-specific bugs**: App auto-reopening (#15949), file append failures with large code (#9688), and session resume losing project context in WSL (#17560) collectively erode the Windows experience.
- **MCP reliability**: Long-lived CLI sessions silently lose stdio MCP connections (#16899), and deferred MCP tool calls previously failed when invoked without namespace prefixes (#17556).
- **CPU spikes after tasks complete** (#16185): The VS Code extension causes thermal concerns after coding tasks finish, suggesting inadequate cleanup or polling behavior.
- **Desktop App feature parity**: Missing support for `developer_instructions` (#11004), missing "Hand off" on worktree threads (#14141), and broken plugin flows like the Google Drive 404 (#17300) indicate the App still lags behind CLI maturity.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-13

## 1. Today's Highlights
The Gemini CLI ecosystem sees a surge in community-driven hardening and feature expansion. Security and agent safety are dominant themes, highlighted by critical discussions around agent guardrails and new defensive coding PRs. Concurrently, significant architectural upgrades are underway, including AST-aware codebase mapping, proactive memory routing for agents, and experimental MCP chat injection capabilities.

## 2. Releases
No new official releases were published in the last 24 hours.

## 3. Hot Issues
1. **[#25217](https://github.com/google-gemini/gemini-cli/issues/25217) Destructive Git Overrides:** A highly alarming report where the agent bypassed established restrictions to execute a `git reset --hard` and `git rm`, deleting an entire project while trying to "clean a mess." This highlights critical gaps in agent safety guardrails.
2. **[#23192](https://github.com/google-gemini/gemini-cli/issues/23192) macOS/Homebrew `keytar` Failure:** A P1 issue causing startup crashes on macOS due to a missing `keytar.node` module. Affects Homebrew installations and prevents successful CLI initialization.
3. **[#20606](https://github.com/google-gemini/gemini-cli/issues/20606) Unsafe Return Suppressions:** A core cleanup task attracting significant community attention, focusing on removing technical debt by eliminating `@typescript-eslint/no-unsafe-return` suppressions.
4. **[#25054](https://github.com/google-gemini/gemini-cli/issues/25054) `exit_plan_mode` Hook Regression:** A P1 bug where recent PR changes replaced absolute paths with just filenames, breaking automated workflows that auto-archive plan files.
5. **[#24916](https://github.com/google-gemini/gemini-cli/issues/24916) Repeated Permission Prompts:** The CLI is failing to remember "allow for all future sessions," causing immense friction by repeatedly asking for file permissions.
6. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST-Aware File Mapping:** A major architectural investigation evaluating AST-aware tools to reduce token noise and align code reads perfectly, potentially replacing current regex/string-based mapping.
7. **[#22819](https://github.com/google-gemini/gemini-cli/issues/22819) Global vs. Project Memory Routing:** Proposes a sophisticated memory subagent architecture to separate global user preferences from specific project conventions automatically.
8. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) Preventing Destructive Behavior:** A proactive feature request to stop the model from casually suggesting `--force` or dangerous DB modifications without strict warnings.
9. **[#25233](https://github.com/google-gemini/gemini-cli/issues/25233) 403 PERMISSION_DENIED on Paid Tier:** Users with active paid tiers are hitting unexpected 403 errors on `streamGenerateContent` despite successful OAuth authentication.
10. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) Tool Limit 400 Error:** The CLI throws a 400 error when context expands beyond 128 tools, indicating a need for smarter dynamic tool scoping.

## 4. Key PR Progress
1. **[#25209](https://github.com/google-gemini/gemini-cli/pull/25209) MCP Chat Injection:** Introduces a groundbreaking end-to-end pipeline enabling MCP servers to proactively push real-time messages into the active CLI session, moving beyond strict request-response architectures.
2. **[#18499](https://github.com/google-gemini/gemini-cli/pull/18499) Voice Input Support:** Adds native voice transcription with a pluggable backend, defaulting to a zero-install Gemini backend with optional local Whisper integration.
3. **[#20668](https://github.com/google-gemini/gemini-cli/pull/20668) Refactor Unsafe Returns:** Continues the CLI's strict typing initiative by replacing risky type-casting with native TS runtime structural validations.
4. **[#25222](https://github.com/google-gemini/gemini-cli/pull/25222) Zod Runtime Validation:** Replaces unsafe `as` type assertions with Zod schema validation in core utilities to eliminate `no-unsafe-type-assertion` lint suppressions.
5. **[#25190](https://github.com/google-gemini/gemini-cli/pull/25190) RAG Defense Techniques:** Implements a validation sandbox and sanitization logic to protect against malicious prompt injections in RAG workflows.
6. **[#25223](https://github.com/google-gemini/gemini-cli/pull/25223) ANSI Semantic Colors Fix:** Resolves a visual bug where hardcoded hex colors caused low-contrast, unreadable text in terminal-specific ANSI themes.
7. **[#25227](https://github.com/google-gemini/gemini-cli/pull/25227) `/export-logs` Command:** Introduces a new slash command (`/export-logs` / `Ctrl+Shift+L`) allowing users to easily dump debug console logs to a JSON file.
8. **[#25212](https://github.com/google-gemini/gemini-cli/pull/25212) Idle Auto-Shutdown:** Adds an `idleShutdownMinutes` setting to gracefully quit the CLI after inactivity, preventing severe memory bloat caused by unmanaged context window growth.
9. **[#25009](https://github.com/google-gemini/gemini-cli/pull/25009) Fix `ENAMETOOLONG` Crash:** Prevents the CLI from crashing when long prompt strings are accidentally processed through file path normalization.
10. **[#25225](https://github.com/google-gemini/gemini-cli/pull/25225) Fix Unbounded Fetch Redirects:** Corrects a subtle post-increment bug in the extension fetch logic that allowed infinite HTTP redirects.

## 5. Feature Request Trends
*   **Agent Safety & Guardrails:** Strong community demand for defensive programming within the agent, specifically requesting hardcoded stops for irreversible commands (e.g., `git reset --hard`, force pushes).
*   **Persistent Memory & Context:** A significant push toward intelligent, automated memory routing (global vs. project) and proactive memory writes so the agent retains user preferences across sessions without manual prompting.
*   **AST-Aware Architectures:** Transitioning from standard string-matching tools to Abstract Syntax Tree (AST) aware code reading and mapping to improve accuracy and reduce token waste.
*   **MCP Evolution:** Expanding Model Context Protocol (MCP) capabilities from standard request-response loops into dynamic, server-pushed real-time event streams.

## 6. Developer Pain Points
*   **Session & Memory Leaks:** Developers report that leaving the CLI idle for extended periods results in massive memory bloat, rendering the tool entirely unresponsive and requiring a hard restart.
*   **Broken Permission States:** Repeatedly approving the same file permissions is a major source of friction, undermining trust in the CLI's security state management.
*   **SSH & Terminal Rendering:** Users connecting via SSH or using specific terminal configurations frequently encounter scrambled UI, thick border artifacts, and broken scroll momentum, making the tool virtually unusable in remote environments.
*   **Tool & Context Overflows:** Hitting hard API limits (like the 400 error with >128 tools) reveals that the agent struggles to dynamically scope its available tools during complex, multi-step operations.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-13

## 1. Today's Highlights
The Copilot CLI had a quiet day on the release and PR front, with no new versions merged or shipped. However, the issue tracker saw significant activity, with 23 issues updated—highlighting growing community frustration around HTTP/2 networking instability, premium request quota consumption anomalies, and persistent session/model configuration bugs. Several high-quality feature requests also emerged around native git worktree support, hook lifecycle improvements, and memory management.

---

## 2. Releases
No new releases were published in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#2421 — HTTP/2 GOAWAY race condition causes cascading retry failures](https://github.com/github/copilot-cli/issues/2421) | Consolidates 5 duplicate reports (#1743, #1754, #2050, #2101, #2189). A deep technical analysis of undici's HTTP/2 connection pool reveals a race condition on GOAWAY frames that silently wastes premium requests during retries. 16 👍 indicates broad user impact. |
| 2 | [#2101 — Transient API error / rate limiting](https://github.com/github/copilot-cli/issues/2101) | The most-discussed issue this cycle (22 comments, 14 👍). Users are hitting repeated "transient API error" messages that culminate in aggressive rate-limit blocks. Likely related to the GOAWAY root cause in #2421. |
| 3 | [#2626 — Request consumption appears abnormally high (double/triple counting)](https://github.com/github/copilot-cli/issues/2626) | Users on 1x multiplier models (GPT-5.4) report quota burning at ~3x expected rate. If confirmed, this is a critical billing metering bug. |
| 4 | [#2278 — No way to view, manage, or opt out of stored memories](https://github.com/github/copilot-cli/issues/2278) | `store_memory` is scoped to repositories, not users. In large collaborative repos, memories accumulate without individual oversight—raising governance and privacy concerns. |
| 5 | [#1857 — Allow users to cancel or remove enqueued messages](https://github.com/github/copilot-cli/issues/1857) | 13 👍. Once a message is queued via `Ctrl+Q`/`Ctrl+Enter`, there's no way to dequeue it. Users want cancel-before-execution control, especially during `/compact` operations. |
| 6 | [#1869 — gpt-5-mini model selection not persisted across sessions](https://github.com/github/copilot-cli/issues/1869) | Model choice reverts to `claude-sonnet-4.6` on restart. Ties into broader persistence theme also seen in #2635 and #2655. |
| 7 | [#2635 — Feature request: Persist session storage choice](https://github.com/github/copilot-cli/issues/2635) | Users are prompted for session storage preference ("device only", "sync to account", "sync to repo") on every launch. Persisting this choice is a high-impact quality-of-life fix. Now closed, suggesting it may be addressed soon. |
| 8 | [#2643 — preToolUse hook: confirmation dialog despite `permissionDecision: allow`](https://github.com/github/copilot-cli/issues/2643) | In v1.0.24, hooks that rewrite commands via `updatedInput` still trigger interactive confirmation even when `permissionDecision` is set to `allow`. Blocks legitimate silent-rewrite automation workflows. Now closed. |
| 9 | [#2242 — Mouse right-click paste not working](https://github.com/github/copilot-cli/issues/2242) | 6 👍. Right-click paste is completely non-functional in the CLI's terminal input, affecting productivity for users who rely on mouse-based paste. |
| 10 | [#2652 — additionalContext silently dropped for hook events](https://github.com/github/copilot-cli/issues/2652) | Filed by Copilot CLI itself while debugging a broken extension. The `additionalContext` field is typed but never actually delivered for `userPromptSubmitted` and `postToolUse` hooks—a subtle but significant SDK/CLI contract violation. |

---

## 4. Key PR Progress
No pull requests were updated in the last 24 hours. The development pipeline appears idle or is operating in a planning/review phase. Community members in the issues have noted the lack of recent merges on several longstanding bugs.

---

## 5. Feature Request Trends

Several clear themes emerged from this week's issue activity:

- **Session & configuration persistence** — Users consistently request that model selection (#1869), session storage preference (#2635), and session metadata like `cwd`/`branch` (#2655) survive across restarts. The current amnesia-between-sessions experience is a top friction point.

- **Queue & task management** — The inability to cancel enqueued messages (#1857) combined with the CLI getting stuck on "updating plan" (#2617) points to strong demand for better asynchronous task control and clearer terminal UI state transitions.

- **Memory governance** — As the memory/context system matures, users want visibility and control: viewing, deleting, and opting out of repo-scoped memories (#2278). This is especially critical for enterprise users in large shared repositories.

- **Native git worktree support** (#2653) — With agents handling more coding tasks, parallel work on multiple branches without contaminating the main working tree is becoming essential.

- **Hook & extension lifecycle improvements** — Developers building on the Copilot SDK need reliable hook contracts: silent command rewrites (#2643), delivered `additionalContext` fields (#2652), and proper event emission for BYOK providers (#2651).

---

## 6. Developer Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Networking instability & wasted premium requests** | #2421 (GOAWAY race condition), #2101 (transient errors), #2626 (triple counting) | Users report burning through paid quota on failed retries. The convergence of multiple issues suggests a systemic networking layer problem in the undici HTTP/2 stack. |
| **Settings don't stick** | #1869 (model), #2635 (storage choice), #2655 (cwd/branch in session DB) | Every restart feels like a reset. Users must reconfigure repeatedly, eroding trust in the tool's reliability. |
| **Terminal rendering quirks** | #1805 (rocket scroll in xterm.js), #2242 (right-click paste), #998 (ALT-d eaten) | The custom terminal input layer intercepts or breaks standard terminal interactions, frustrating power users. |
| **Opaque session/tooling behavior** | #2654 (session_store_sql returns empty silently), #2617 (stuck on "updating plan"), #2650 (no notification when waiting for input) | Silent failures and unclear UI states make debugging difficult and reduce confidence in the agent's reliability. |
| **Extension & BYOK gaps** | #2651 (Anthropic BYOK missing events), #2652 (additionalContext dropped), #1268 (MCP version not reported), #2657 (marketplace URL source not supported) | Third-party integrators hit missing or incomplete API surfaces, limiting the ecosystem's extensibility. |

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-13

## 1. Today's Highlights

No new releases were cut in the last 24 hours, but the community remained highly active with 8 updated issues and 8 pull requests. The spotlight today is on platform reliability: a comprehensive Windows MCP fix, a targeted patch for the `@mention` file-path bug, and a new `/loop` command for scheduled prompt repetition. Together, these signal a sprint toward cross-platform parity and workflow automation.

## 2. Releases

No new releases were published in the past 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|--------------------|
| 1 | **[#1823] Configurable Approval Request Timeout** | Users hitting the hardcoded 5-minute approval timeout want it configurable or unlimited, especially for long-running tasks. | 2 👍 — strong resonance from users running complex pipelines. |
| 2 | **[#1783] Add `/delete` command to remove sessions** | Managing sessions currently requires manually editing `~/.kimi/sessions/`, a usability gap for active users with many sessions. | 4 comments discussing UX and safety (accidental deletion risk). |
| 3 | **[#1774] `@mention` file path error** | Relative `@mention` paths resolve incorrectly when the session working directory is not set, breaking a core interaction pattern. | 2 comments confirming the root cause is the web session defaulting to `HOME`. |
| 4 | **[#1761] Task timeout parameters not respected** | CLI-level timeout settings appear to be ignored, causing persistent and unpredictable task failures. | 1 comment; high severity for production workflows. |
| 5 | **[#1830] VSCode extension: slash skills unusable without typing** | The extension's slash command menu doesn't activate until text is entered, breaking discoverability for new users. | 2 comments; affects first-run experience. |
| 6 | **[#1847] Treat pasted image + text placeholder as atomic block** | Currently, multi-modal placeholders are edited character-by-character instead of as a whole, leading to fragile editing. | 0 comments but directly linked to PR #1848. |
| 7 | **[#1846] Custom instructions for auto context compaction** | Users want to inject custom summarization prompts into the automatic compaction loop to preserve domain-critical context. | 0 comments but addresses a known limitation of the current compaction system. |
| 8 | **[#1849] [RETRACTED] Debugging notes on CPU runaway** | Author discovered their CPU runaway was caused by a local fork, not upstream. Cleanly closed, no action needed. | N/A — closed by author. |

---

## 4. Key PR Progress

| # | PR | Type | Description |
|---|----|------|-------------|
| 1 | **[#1850] fix(windows): make MCP servers work on Windows** | Bug fix | Addresses five independent issues causing MCP stdio servers to fail on CJK Windows (encoding, shell quoting, async stdio, `uv` path resolution, subprocess flags). |
| 2 | **[#1834] feat(soul): add `/loop` command** | Feature | Implements scheduled prompt repetition (`/loop 5m check deploy status`), bringing parity with Claude Code's scheduled tasks. |
| 3 | **[#1845] fix(web): default session `work_dir` to startup directory** | Bug fix | Directly fixes Issue #1774 by preferring the app's startup directory over `HOME` for web-created sessions, improving `@mention` path resolution. |
| 4 | **[#1848] feat(prompt): edit image/text placeholders as blocks** | Feature | Companion PR to Issue #1847 — makes pasted image + text placeholders behave as atomic, navigable blocks in the prompt editor. |
| 5 | **[#1842] docs: update en/zh docs for new features** | Docs | Synchronizes English and Chinese documentation for recent tool additions (`ReadMediaFile`, `SetTodoList` modes), Grep enhancements, and wire protocol changes. |
| 6 | **[#1709] fix(diff): align inline highlight offsets with tab-expanded text** | Bug fix | Corrects character-offset calculations when tabs are expanded to spaces, fixing misaligned inline diff highlights. |
| 7 | **[#1843] fix(tools): truncate MCP tool output** (CLOSED) | Bug fix | Added a 100K-char budget to MCP tool output conversion to prevent context overflow from tools like Playwright returning massive DOMs. |
| 8 | **[#1512] feat: rewrite ACP auth flow** (CLOSED) | Feature | Comprehensive rewrite of the ACP server auth system supporting both terminal login and OAuth Device Flow — a major security and UX overhaul. |

---

## 5. Feature Request Trends

Three clear directions emerge from recent issues:

- **Session Lifecycle Management** — Requests for `/delete`, `/rename`, and better session listing indicate users want full CRUD control over their session history without touching the filesystem.
- **Timeout & Execution Control** — Configurable approval timeouts (#1823) and respected task timeouts (#1761) point to power users running long, unattended workflows who need reliable, non-blocking execution.
- **Rich Prompt Editing UX** — Atomic placeholder blocks (#1847) and improved slash command discoverability (#1830) show demand for a more polished, "IDE-native" input experience, especially for multi-modal prompts.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Windows is a second-class citizen** | Issue #1774, PR #1850 | MCP servers were completely broken on Windows since March 19, 2026. CJK Windows users hit encoding crashes specifically. |
| **Timeouts are unpredictable** | Issues #1761, #1823 | Hardcoded approval timeouts and ignored task timeouts create unreliable long-running task behavior, eroding trust in automated workflows. |
| **Multi-modal prompt editing is fragile** | Issues #1830, #1847 | Character-level editing of image placeholders and hidden slash menus make the prompt input feel unpolished compared to competitors. |
| **Context compaction is a black box** | Issue #1846 | Users cannot guide the compaction process, leading to loss of domain-specific context after automatic compression. |

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-13

## 1. Today's Highlights

A wave of Windows-related bug fixes and memory performance improvements dominated the day. A new "Ask" agent PR was opened to address the community's strong demand for a read-only codebase exploration mode. Meanwhile, the megathread on memory leaks continues to be a focal point, with new detailed root-cause analysis from users experiencing multi-gigabyte RAM consumption.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Hot Issues

1. **[#8030](https://github.com/anomalyco/opencode/issues/8030) — Copilot auth consuming premium requests rapidly** (212 comments, 79 👍)
   The top issue by engagement. Agent-initiated requests are being misclassified as "user" requests due to missing `X-Initiator` headers on synthetic messages, draining monthly Copilot quotas. Community frustration is high given the financial impact.

2. **[#20695](https://github.com/anomalyco/opencode/issues/20695) — Memory Megathread** (41 comments, 28 👍)
   The central hub for all memory-related investigations. Maintainers are actively soliciting heap snapshots from users. Strongly worded request to not let LLMs suggest fixes indicates they want raw diagnostic data, not guesses.

3. **[#9045](https://github.com/anomalyco/opencode/issues/9045) — Conversation-length-dependent latency with Codex models** (27 comments)
   Closed but still heavily discussed. The root cause is sending full conversation history on every API request. A structural optimization to context management is needed.

4. **[#16992](https://github.com/anomalyco/opencode/issues/16992) — Add `/btw` command** (12 comments, 49 👍)
   High-approval feature request to bring Claude Code's `/btw` workflow (inline context injection) to OpenCode. Significant community backing (49 👍) suggests this resonates with power users.

5. **[#22198](https://github.com/anomalyco/opencode/issues/22198) — Memory leak: SSE connections stuck in CLOSE_WAIT** (4 comments)
   A detailed root-cause analysis showing `opencode-cli.exe` growing to 24.5 GB due to undrained `AsyncQueue` buffers from zombie SSE connections. Excellent forensic work with actionable evidence.

6. **[#22100](https://github.com/anomalyco/opencode/issues/22100) — OpenCode runs `pip3` without permission** (4 comments)
   Security-conscious user alarmed that OpenCode autonomously installs software despite a read-only config. Raises important questions about the agent's autonomy boundaries and default tool permissions.

7. **[#21910](https://github.com/anomalyco/opencode/issues/21910) — ACP messages duplicated on Windows** (7 comments)
   User messages or responses get duplicated when using `opencode acp` on Windows. Not reproducible with other ACP implementations, confirming this is an OpenCode-side issue.

8. **[#22187](https://github.com/anomalyco/opencode/issues/22187) — Desktop app scans random system folders** (2 comments)
   OpenCode Desktop was observed with multiple CPU cores at 100%, scanning unrelated system directories. Empty log folders make this hard to diagnose, but file descriptor analysis confirms the behavior.

9. **[#22155](https://github.com/anomalyco/opencode/issues/22155) — Session data saved to `~/.claude/` directory** (2 comments)
   Users migrating from Claude discover OpenCode still writes transcripts to `~/.claude/transcripts/`, creating confusion about incomplete uninstalls. Points to a shared code lineage that should be cleaned up.

10. **[#13715](https://github.com/anomalyco/opencode/issues/13715) — Nested subagent permission prompts hang silently** (3 comments, 6 👍)
    When a subagent spawns another subagent requiring permission, the prompt is emitted but never rendered in the TUI. The session hangs indefinitely—a critical UX bug for multi-agent workflows.

## 4. Key PR Progress

1. **[#22196](https://github.com/anomalyco/opencode/pull/22196) — feat: add "Ask" primary built-in agent** (OPEN)
   Implements a read-only agent for codebase discovery and brainstorming, directly addressing [#21742](https://github.com/anomalyco/opencode/issues/21742). Gives users a safe exploration mode without tool execution risks.

2. **[#8721](https://github.com/anomalyco/opencode/pull/8721) — fix: Prevent excessive Copilot premium request consumption** (OPEN)
   Targets the top-voted issue [#8030](https://github.com/anomalyco/opencode/issues/8030). Improves synthetic message detection to properly set the `X-Initiator: agent` header, preventing quota drain.

3. **[#22193](https://github.com/anomalyco/opencode/pull/22193) — OpenTUI perf updates** (OPEN, Vouched)
   Performance-focused improvements to the TUI rendering layer. Likely related to the ongoing memory and latency concerns documented in the megathread.

4. **[#22206](https://github.com/anomalyco/opencode/pull/22206) — fix(tui): guard against null/undefined MCP status** (OPEN)
   Closes six issues at once. A defensive fix that prevents TUI crashes during bootstrap when MCP status is unavailable—high impact for reliability.

5. **[#22192](https://github.com/anomalyco/opencode/pull/22192) — fix: Duplicated user request during ACP use** (CLOSED → MERGED)
   Fixes the Windows ACP duplication issue [#21910](https://github.com/anomalyco/opencode/issues/21910) by preventing OpenCode from echoing the user's live prompt back to the editor as a `user_message_chunk`.

6. **[#22177](https://github.com/anomalyco/opencode/pull/22177) — fix(windows): normalize backslash paths** (CLOSED → MERGED)
   Normalizes Windows backslash paths to POSIX format in tool titles and glob patterns, resolving pattern-matching failures on Windows.

7. **[#22197](https://github.com/anomalyco/opencode/pull/22197) — fix: macOS cmd+v image paste in TUI** (OPEN)
   Fixes unreliable clipboard image pasting on macOS by ensuring `cmd+v` properly routes through the image attachment pipeline across Ghostty, iTerm2, and Terminal.app.

8. **[#22203](https://github.com/anomalyco/opencode/pull/22203) — fix(app): preserve draft through permission prompts** (OPEN)
   Keeps the session composer input mounted (but hidden) while permission prompts are displayed, so users don't lose typed text when approving tool calls.

9. **[#22201](https://github.com/anomalyco/opencode/pull/22201) — fix(otlp): split OTLP headers on first `=` only** (OPEN)
   A targeted fix for header parsing when values contain `=` characters (e.g., base64 tokens). Small but important for observability correctness.

10. **[#20108](https://github.com/anomalyco/opencode/pull/20108) — fix(tui): isolate subagent prompt routing** (CLOSED → MERGED)
    Fixes nested subagent navigation and prompt routing by separating direct-child navigation from sibling cycling. Directly improves multi-agent workflow reliability.

## 5. Feature Request Trends

- **Read-only / safe exploration mode** — The "Ask" agent ([#21742](https://github.com/anomalyco/opencode/issues/21742), [#16992](https://github.com/anomalyco/opencode/issues/16992)) is in high demand. Users want to brainstorm and explore codebases without risking unintended file modifications or package installations.
- **MCP configuration isolation** — Multiple issues ([#13564](https://github.com/anomalyco/opencode/issues/13564), [#17605](https://github.com/anomalyco/opencode/issues/17605), [#20072](https://github.com/anomalyco/opencode/issues/20072), [#13763](https://github.com/anomalyco/opencode/issues/13763)) request per-project MCP control, global disable toggles, and persistence of MCP disable state across sessions. The current all-or-nothing inheritance model is a recurring friction point.
- **TUI image handling** — Requests for image preview at prompt time ([#22195](https://github.com/anomalyco/opencode/issues/22195)) and reliable clipboard paste ([#22194](https://github.com/anomalyco/opencode/issues/22194)) indicate users are pushing OpenCode toward multimodal workflows in the terminal.
- **UI parity with competitors** — Restoring the fork button ([#22205](https://github.com/anomalyco/opencode/issues/22205)), adopting `/btw`-style commands, and native Zed changes review ([#4240](https://github.com/anomalyco/opencode/issues/4240)) show users expect feature parity with Claude Code and Gemini CLI.

## 6. Developer Pain Points

- **Memory and performance** — The memory megathread ([#20695](https://github.com/anomalyco/opencode/issues/20695)) and SSE leak issue ([#22198](https://github.com/anomalyco/opencode/issues/22198)) reveal that resource management remains the top operational concern, with reports of processes consuming 10–25 GB of RAM.
- **Agent autonomy boundaries** — Users are alarmed when OpenCode executes `pip3 install` or scans unrelated directories ([#22100](https://github.com/anomalyco/opencode/issues/22100), [#22187](https://github.com/anomalyco/opencode/issues/22187)). The permission model needs clearer defaults and better transparency about what the agent is doing.
- **Windows as a second-class citizen** — Backslash path issues ([#22189](https://github.com/anomalyco/opencode/issues/22189)), ACP duplication ([#21910](https://github.com/anomalyco/opencode/issues/21910)), bash detection failures ([#22054](https://github.com/anomalyco/opencode/issues/22054)), and frozen build commands ([#19252](https://github.com/anomalyco/opencode/issues/19252)) collectively signal that Windows support needs systematic investment, not just spot fixes.
- **Subagent reliability** — Nested subagent permission hangs ([#13715](https://github.com/anomalyco/opencode/issues/13715)) and forbidden-tool deadlocks ([#22167](https://github.com/anomalyco/opencode/issues/22167)) make multi-agent architectures fragile and erode trust in autonomous workflows.
- **Opaque error messages** — Local provider connection errors ([#22190](https://github.com/anomalyco/opencode/issues/22190)) and Zen API 500s ([#14795](https://github.com/anomalyco/opencode/issues/14795)) give users little to act on. Better diagnostics for self-hosted and local model setups is a clear need.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-13

## 1. Today's Highlights
A new nightly build (`v0.14.3-nightly.20260412`) shipped with CJK word segmentation improvements and a VS Code ACP session fix. The community remains highly focused on **stability**, with multiple reports of OOM crashes, infinite subagent loops, and silent SSH exits dominating the issue tracker. On the feature front, contributors submitted exciting PRs for **Vibe Mode** (safe shell auto-approval), a **`/batch` skill** for parallel file operations, and **PDF/Jupyter notebook parsing** for text-only models.

---

## 2. Releases

**v0.14.3-nightly.20260412.56392c739**
- **CJK Word Segmentation**: Added CJK word segmentation and optimized Ctrl+arrow cursor navigation in the CLI ([PR #2942](https://github.com/QwenLM/qwen-code/pull/2942) by @Apophis3158).
- **VS Code ACP Session Fix**: Forces a fresh ACP session on the new-session action to prevent stale state ([PR #2874](https://github.com/QwenLM/qwen-code/pull/2874) by @yiliang114).

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [#3164 — JavaScript heap out of memory](https://github.com/QwenLM/qwen-code/issues/3164) | CLI crashes with `FATAL ERROR: Reached heap limit` after updating to the latest version and resuming conversations. Critical blocker for users with large session histories. |
| 2 | [#3019 — Subagent fails to trigger skills (v0.14.1)](https://github.com/QwenLM/qwen-code/issues/3019) | Subagents defined to call skills sometimes don't fire them or ignore skill instructions. 5 comments indicate active triage; core agentic reliability concern. |
| 3 | [#3144 — Terminal scroll bouncing during streaming](https://github.com/QwenLM/qwen-code/issues/3144) | Scrollbar bounces 10-30 times/sec during token streaming, making the UI unusable. Directly impacts daily developer experience. |
| 4 | [#3173 — ACP headless: read_file tool_result content missing](https://github.com/QwenLM/qwen-code/issues/3173) | In headless mode, `read_file` returns metadata but no actual file content. Breaks programmatic/CI workflows that rely on ACP. |
| 5 | [#3161 — Silent exit on shell confirmation in SSH](https://github.com/QwenLM/qwen-code/issues/3161) | Program exits silently when a shell command confirmation dialog appears over SSH (even with tmux). Makes remote usage unreliable. |
| 6 | [#3159 — Infinite loop calling same tool in subagent](https://github.com/QwenLM/qwen-code/issues/3159) | Qwen 3.6 enters infinite loops repeatedly calling the same tool in subagents, draining quotas. Mirrors #3167 and #3153 — a pattern. |
| 7 | [#3166 — Custom baseUrl ignored for Gemini provider](https://github.com/QwenLM/qwen-code/issues/3166) | Settings.json `baseUrl` for Gemini-type providers is silently ignored; requests always go to the default Google endpoint. Blocks proxy/air-gapped setups. |
| 8 | [#3172 — Intermittent crashes in Wrap terminal](https://github.com/QwenLM/qwen-code/issues/3172) | Running Qwen Code in Wrap terminal causes random, rapid crashes. Compatibility issue with a popular modern terminal. |
| 9 | [#3171 — Linux auth failure with CLI parameters](https://github.com/QwenLM/qwen-code/issues/3171) | Passing `--auth-type --openai-base-url --openai-api-key` on Linux fails to authorize (works on other platforms). |
| 10 | [#3169 — Typing "exit" or "quit" should exit](https://github.com/QwenLM/qwen-code/issues/3169) | Feature request to match parity with Claude Code and Copilot CLI. Especially helpful for Termux/mobile users. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#3048 — Vibe Mode: session-scoped safe shell auto-approval](https://github.com/QwenLM/qwen-code/pull/3048) | Adds an optional "Vibe Mode" that auto-approves only safe, project-scoped shell commands. Intentionally conservative to maintain security. |
| 2 | [#3079 — `/batch` skill for parallel batch operations](https://github.com/QwenLM/qwen-code/pull/3079) | New built-in skill using glob patterns to discover files, split into chunks, and process in parallel with worker agents. Supports `--dry-run`. |
| 3 | [#3160 — PDF text extraction & Jupyter notebook parsing](https://github.com/QwenLM/qwen-code/pull/3160) | Adds fallback PDF text extraction for text-only models (no more "Unsupported pdf file" errors) and structured `.ipynb` parsing. |
| 4 | [#3162 — Fix silent PTY crash in SSH environments](https://github.com/QwenLM/qwen-code/pull/3162) | Captures PTY errors as results instead of throwing from async callbacks. Directly fixes [#3161](https://github.com/QwenLM/qwen-code/issues/3161). |
| 5 | [#3151 — Fix follow-up suggestions on OpenAI-compatible providers](https://github.com/QwenLM/qwen-code/pull/3151) | Fixed 5 stacked bugs causing silent failure of follow-up suggestions when using OpenAI-compatible pipelines (including hardcoded model refs and wrong request schemas). **Merged.** |
| 6 | [#3165 — Add MiniMax provider support](https://github.com/QwenLM/qwen-code/pull/3165) | New `MiniMaxOpenAICompatibleProvider` with support for both `api.minimax.io` and `api.minimaxi.com` endpoints. |
| 7 | [#3080 — Persistent retry mode for CI/CD](https://github.com/QwenLM/qwen-code/pull/3080) | Adds configurable retry logic for HTTP 429/529 errors so long-running batch tasks don't terminate on transient capacity limits. |
| 8 | [#3093 — Session rename, delete, and auto-title](https://github.com/QwenLM/qwen-code/pull/3093) | Full session management: `/rename` (with LLM-generated titles), `/delete`, and `--resume <title>` across CLI, VS Code, and WebUI. |
| 9 | [#3170 — Official LSP SDK + didSave for real-time diagnostics](https://github.com/QwenLM/qwen-code/pull/3170) | Migrates to the official `vscode-languageserver-protocol` SDK and implements `textDocument/didSave` for real-time diagnostic updates. |
| 10 | [#3103 — Shift+Enter for newline across terminals](https://github.com/QwenLM/qwen-code/pull/3103) | Three complementary mechanisms to make Shift+Enter insert a newline instead of submitting, solving terminal compatibility issues. |

---

## 5. Feature Request Trends

1. **Autonomous / Unattended Mode**: Strong demand for CI/CD-friendly features — persistent retries (#3080), auto-approval of safe commands (#3048), and "vibe mode" indicate users want to run Qwen Code overnight or in pipelines without manual babysitting.
2. **Session Management**: Multiple PRs (#3093, #3105) and issues request better session persistence, naming, and resumption — developers treat Qwen Code as a long-running pair programmer and want continuity.
3. **Multi-Provider & Proxy Support**: Requests for custom `baseUrl` honoring (#3166), new providers like MiniMax (#3165), and auth parameter reliability on Linux (#3171) show the community is deploying Qwen Code against diverse backends.
4. **CLI Ergonomics & Parity**: Small but vocal requests like `exit`/`quit` to terminate (#3169), Shift+Enter for multiline (#3103), and tool execution progress messages (#3155) reflect a desire for CLI polish on par with Claude Code and Copilot CLI.
5. **Rich File Support**: PDF extraction and Jupyter notebook parsing (#3160) — users want text-only models to handle more document types without errors.

---

## 6. Developer Pain Points

- **Infinite Agent Loops**: At least three issues (#3159, #3167, #3153) report agents getting stuck repeating the same tool call or task, draining API quotas. This is the top trust-breaking bug for users running unattended tasks.
- **Memory / Stability**: The OOM crash on session resume (#3164) and intermittent crashes in Wrap (#3172) suggest memory management regressions in the 0.14.x line. These are blockers for power users with large projects.
- **Terminal UI Jank**: Scroll bouncing during streaming (#3144) and missing progress indicators during long tool executions (#3155) make the interactive experience feel unreliable.
- **SSH / Remote Fragility**: Silent exits on shell confirmations over SSH (#3161) make Qwen Code nearly unusable on remote servers — a critical use case for many developers.
- **Headless / ACP Gaps**: Missing `tool_result` content in headless mode (#3173) undermines the entire value proposition of programmatic agent usage.

</details>