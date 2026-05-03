# OpenClaw Ecosystem Digest 2026-05-04

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-03 22:10 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-04

## 1. Today's Overview
OpenClaw is exhibiting exceptionally high activity, with 500 issues and 500 pull requests updated in the last 24 hours. The project is pushing forward rapidly on its plugin ecosystem and gateway performance, as evidenced by three recent releases (culminating in v2026.5.3-beta.2). However, this rapid pace is accompanied by significant scaling pains: the open issue backlog remains massive (421 active), and community discussions highlight recurring architectural bottlenecks like gateway memory leaks, runtime degradation, and context window management. Overall, the project is healthy but clearly in a transitional phase of optimizing its monolithic gateway architecture to handle multi-agent loads.

## 2. Releases
Three recent releases were tracked, focusing heavily on external plugin support, performance, and agent tooling:
*   **v2026.5.3-beta.2** ([openclaw/openclaw](https://github.com/openclaw/openclaw)): Introduces a new bundled `file-transfer` plugin. It adds `file_fetch`, `dir_list`, `dir_fetch`, and `file_write` tools for binary file ops on paired nodes. Crucially, it implements a strict default-deny per-node path policy requiring explicit operator approval, significantly boosting security.
*   **v2026.5.2** & **v2026.5.2-beta.3** ([openclaw/openclaw](https://github.com/openclaw/openclaw)): Focuses on stabilizing external plugin installations. It covers npm-first cutover, doctor repair mechanisms for stale/missing packages, and beta-channel fallbacks. Gateway and agent hot paths were made leaner to improve overall responsiveness.

## 3. Project Progress
While the vast majority of today's 393 open PRs are actively being reviewed, maintainers merged 107 PRs. Progress is heavily focused on system stability, security, and distributed capabilities:
*   **Distributed Agent Communication:** PR [#43656](https://github.com/openclaw/openclaw/pull/43656) introduces cross-gateway `sessions_send` and `sessions_spawn` via `gateway.peers`, allowing agents to communicate across different physical machines.
*   **Security Hardening:** PR [#43585](https://github.com/openclaw/openclaw/pull/43585) fixed config `$include` path vulnerabilities (NUL + length CWE-22 defense), and PR [#43469](https://github.com/openclaw/openclaw/pull/43469) added injection threat scanning for Markdown `.md` skill definitions.
*   **Quality of Life & UI:** PR [#43416](https://github.com/openclaw/openclaw/pull/43416) added a much-needed copy button for assistant messages in the Control UI, while [#43495](https://github.com/openclaw/openclaw/pull/43495) implemented `<notts>` tags to prevent TTS from reading code blocks aloud.
*   **Memory & Context:** PR [#43306](https://github.com/openclaw/openclaw/pull/43306) landed importance-weighted temporal decay for memory search, allowing the agent to forget outdated information more naturally.

## 4. Community Hot Topics
The community is highly engaged, with core discussions centering on context management, system stability, and deployment architectures:
*   **Context Management & Token Waste:** The most discussed issue is [#22438](https://github.com/openclaw/openclaw/issues/22438) (16 comments), proposing tiered bootstrap file loading. Users are frustrated by large workspaces wasting LLM tokens on every session/cron job. 
*   **Gateway Reliability on Windows:** Issue [#73323](https://github.com/openclaw/openclaw/issues/73323) (15 comments) reports chronic runtime degradation on Windows 11 (pricing fetch timeouts, Telegram polling stalls).
*   **Security Contexts in UI:** Issue [#32473](https://github.com/openclaw/openclaw/issues/32473) (15 comments) highlights a regression where Control UI requires HTTPS/localhost secure context, breaking remote HTTP VPS deployments.
*   **Monolith vs. Distributed Architecture:** Issue [#42026](https://github.com/openclaw/openclaw/issues/42026) (RFC) proposes splitting the monolithic gateway into a Control Plane and Agent Runtime. This reflects a growing consensus among power users that the current architecture strains under multi-agent workloads.

## 5. Bugs & Stability
Regressions and gateway stability issues dominate the bug tracker, though fix PRs are already in flight for several critical items:
*   **Critical - Gateway Leak Triad:** Issue [#73655](https://github.com/openclaw/openclaw/issues/73655) details a severe leak manifesting as Manifest EADDRINUSE loops and WS handshake starvation. Fix PR [#43443](https://github.com/openclaw/openclaw/pull/43443) is addressing the related launchd restart race condition.
*   **Critical - WebChat Transcript Loss:** Issue [#76804](https://github.com/openclaw/openclaw/issues/76804) (5.2 regression) notes that assistant text responses streamed to WebChat aren't persisted to the session transcript. 
*   **High - Agent Output Truncation:** Issue [#76307](https://github.com/openclaw/openclaw/issues/76307) (Closed/Resolved) reported deterministic truncation of long agent replies at ~25-80 chars. 
*   **High - Plugin Startup Blocking:** Issue [#74209](https://github.com/openclaw/openclaw/issues/74209) notes that default bundled plugins (like Bonjour) block gateway startup after upgrades. Fix PR [#76961](https://github.com/openclaw/openclaw/pull/76961) improves `doctor` plugin repair to preserve pinned versions.
*   **High - Session Context Confusion:** Issue [#32296](https://github.com/openclaw/openclaw/issues/32296) reports agents replying to previous messages instead of current ones.

## 6. Feature Requests & Roadmap Signals
Based on user requests, the next versions will likely focus on cost controls and enhanced file handling:
*   **Write Tool Append Mode:** Users are highly requesting an append mode for the `write` tool ([#40001](https://github.com/openclaw/openclaw/issues/40001)), as isolated cron sessions currently overwrite shared memory files. This is partially addressed by the new `file-transfer` plugin, but native append is needed.
*   **Granular Cost Governance:** Multiple requests like per-hour spending ceilings ([#38248](https://github.com/openclaw/openclaw/issues/38248)) and per-agent cost budgets ([#42475](https://github.com/openclaw/openclaw/issues/42475)) indicate users need strict kill-switches to prevent runaway failover model costs.
*   **Private Network Access:** Issue [#39604](https://github.com/openclaw/openclaw/issues/39604) requests `tools.web.fetch.allowPrivateNetwork` to allow agents to reach internal network addresses, essential for self-hosted enterprise tooling.

## 7. User Feedback Summary
Users love the rapid feature iteration but are experiencing friction with operational stability, especially on Windows and within Docker. Deploying OpenClaw in Docker with sandboxing is still painful due to workspace mount issues ([#31331](https://github.com/openclaw/openclaw/issues/31331)). Furthermore, frustration is mounting over silent media drops in messaging channels; users want visibility when an agent fails to attach a file ([#69310](https://github.com/openclaw/openclaw/pull/69310)). The passionate (albeit slightly hyperbolic) open letter in issue [#65302](https://github.com/openclaw/openclaw/issues/65302) underscores that power users care deeply about the project but feel overwhelmed by regressions introduced during fast updates.

## 8. Backlog Watch
Several critical issues and promising PRs require maintainer attention to push through the review bottleneck:
*   **Memory Search Recursive Paths:** Issue [#34400](https://github.com/openclaw/openclaw/issues/34400) requests recursive subdirectory search for `memory_search`—essential for daily journaling users—yet it has been open since March with no assigned PR.
*   **Auth Profile Cooldown Flaw:** PR [#76963](https://github.com/openclaw/openclaw/pull/76963) fixes a bug where a single malformed session blocks the entire shared provider auth profile. Needs urgent review/merge.
*   **Control UI Archived Sessions:** PR [#76964](https://github.com/openclaw/openclaw/pull/76964) aims to filter archived sessions in the Control UI, a necessary UX fix for long-term users.
*   **Missing MathJax/LaTeX Support:** Issue [#42840](https://github.com/openclaw/openclaw/issues/42840) remains unaddressed, limiting UI usability for technical/scientific use cases.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report for the AI agent and personal AI assistant open-source ecosystem based on the May 4, 2026 community digests.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently in a high-velocity, transitional phase. Projects are rapidly evolving from simple single-model chat interfaces into complex, multi-agent orchestration platforms capable of autonomous task execution. A clear architectural inflection point has been reached: monolithic gateway designs are showing scaling pains, driving a consensus toward modular runtimes, plug-in ecosystems, and distributed control planes. Meanwhile, the rapid proliferation of frontier models with advanced "reasoning" capabilities (e.g., DeepSeek V4, Claude Opus) is forcing maintainers to universally rethink context management, token efficiency, and memory durability. 

### 2. Activity Comparison
*Note: Issue/PR counts reflect volume updated/touched in the last 24 hours. Health Score is an assessment of project momentum, responsiveness, and stability.*

| Project | Issues (24h) | PRs (24h) | Release Status | Health / Momentum Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | **Active** (v2026.5.3-beta.2) | **High** (Massive scale, but experiencing scaling pains) |
| **Hermes Agent** | 50 | 50 | None (Stabilizing) | **High** (Strong community, heavy security focus) |
| **ZeroClaw** | 50 | 46 | None (Targeting v0.8.0) | **High** (Aggressive desktop app/Tauri push) |
| **NanoClaw** | 12 | 50 | None (Stabilizing v2.x) | **High** (Excellent merge ratio, aggressive bug squashing) |
| **CoPaw (QwenPaw)** | 31 | 16 | Beta (`1.1.6b1` cut) | **Medium-High** (High engagement, memory stability issues) |
| **PicoClaw** | 5 | 18 | Nightly (`v0.2.8`) | **Medium-High** (Strong edge-computing focus) |
| **ZeptoClaw** | 5 | 22 | None | **Medium** (Solo-maintainer, excellent architectural pacing) |
| **IronClaw** | 20 | 35 | None (Production on v0.27.0) | **Medium** (Massive internal "Reborn" refactor, critical bugs in prod) |
| **NanoBot** | 6 | 23 | None (On `v0.1.5.post3`) | **Medium** (Active, focus on safety guard edge-cases) |
| **Moltis** | 1 | 3 | None | **Stable** (Low velocity, focused on sandbox infrastructure) |
| **LobsterAI** | 1 | 2 | None | **Stable/Low** (Stale PRs, awaiting maintainer review) |
| **NullClaw** | 0* | 0 | None | **Stable/Low** (Quiet, focused on low-resource philosophy) |
| **TinyClaw** | 0 | 0 | None | **Inactive** |

### 3. OpenClaw's Position
As the core reference implementation, OpenClaw operates at a scale an order of magnitude higher than its peers (500 daily updates). 
*   **Advantages:** Its plugin ecosystem and distributed communication capabilities (`sessions_spawn` across gateways) are unmatched. It serves as the benchmark for advanced features like importance-weighted temporal memory decay and cross-node file transfers.
*   **Technical Approach:** Unlike Hermes or PicoClaw which are heavily optimizing for token efficiency and local LLMs, OpenClaw assumes a cloud-scale, multi-agent infrastructure. However, this monolithic approach is currently its biggest liability compared to IronClaw's decoupled "Control Plane/Agent Runtime" vision.
*   **Community Size:** It possesses the largest, most vocal user base, though it is currently generating significant friction due to Docker/Windows operational regressions and context token waste. 

### 4. Shared Technical Focus Areas
Analyzing the backlog across projects reveals universal challenges in the current AI agent landscape:
*   **Reasoning Model Adaptation:** Handling "thinking/reasoning" tokens without breaking context or UI. *Projects: PicoClaw, ZeroClaw, CoPaw, and Moltis are all actively patching DeepSeek V4/Claude Opus streaming and context persistence.*
*   **Token & Context Optimization:** Reducing the massive token overhead caused by tool schemas and system prompts. *Projects: OpenClaw (tiered bootstrap), Hermes (lazy tool schema loading), and NanoClaw (RULES.md diet).*
*   **Tool Execution Sandboxing:** Securely executing LLM-generated code locally and in the cloud. *Projects: Moltis (cloud-agnostic Vercel/Firecracker sandboxes), NullClaw (Linux Landlock integration), OpenClaw (container mount fixes).*
*   **Safety Guard Rails:** Preventing agents from silently dropping messages or executing malicious/faulty commands. *Projects: NanoBot (safety guard false positives), IronClaw (LLM config wipe protection), Hermes (bundled skill write guards).*

### 5. Differentiation Analysis
*   **Target Hardware:** **NullClaw** and **PicoClaw** explicitly target edge computing and low-resource environments (Android/Termux, Raspberry Pi, relying on local LLMs/Ollama). In contrast, **OpenClaw** and **IronClaw** target enterprise/power-users running always-on servers and complex multi-agent workloads.
*   **Architectural Philosophy:** **IronClaw** is uniquely undergoing a massive "Reborn" refactor to implement an event-sourced, durable audit execution model (highly enterprise-focused). **ZeptoClaw** is building a highly structured, Rust-native middleware pipeline for self-improving agent loops. 
*   **Platform Interface:** **ZeroClaw** is heavily differentiating by building a native Tauri-based desktop app (macOS menu bar), whereas **LobsterAI** is positioning itself as a central web-based (Electron) hub to orchestrate external agents like OpenClaw and Hermes. **CoPaw** relies on an Electron desktop wrapper but is deeply integrated with the Feishu/WeChat ecosystem.

### 6. Community Momentum & Maturity
*   **Rapid Iterators (Moving Fast, Breaking Things):** **OpenClaw**, **ZeroClaw**, and **Hermes**. These projects have massive PR merge rates but are accumulating regressions (e.g., OpenClaw's memory leaks, Hermes' provider auth failures, ZeroClaw's config mismatches).
*   **Stabilizers (High Bug-Squash Focus):** **NanoClaw**, **NanoBot**, and **CoPaw**. These projects are currently reacting to previous feature drops. NanoClaw had an exceptionally responsive day (merging 35 PRs) to stabilize its v2 architecture. 
*   **Architectural Phases (Low External Velocity):** **IronClaw**, **ZeptoClaw**, and **Moltis**. Development is highly strategic, characterized by large infrastructural PRs (Reborn refactor, Middleware pipelines, multi-backend sandboxes) currently sitting in review. 

### 7. Trend Signals
For technical decision-makers and AI agent developers, the current ecosystem activity provides clear directional signals for the future of personal AI agents:
1.  **The Move to "Autonomous Orchestration":** Users are no longer satisfied with chat-and-reply. The highest-demand feature requests (e.g., Hermes' *Cron-to-Live Gateway*, CoPaw's *mid-guidance execution*) require agents to perform continuous background tasks, manage multi-turn scheduling, and inject data into active sessions autonomously.
2.  **Cost-Aware Routing is Mandatory:** As users deploy multi-agent setups, unbounded token consumption from tool schemas and system prompts is a critical pain point. Dynamic model routing—using cheap models for routine tasks and invoking frontier models for complex reasoning (e.g., Hermes' *Planning Consultant* proposal, NanoClaw's *per-group overrides*)—will become a standard framework requirement.
3.  **Self-Improvement Guardrails:** The community is demanding explicit boundaries on agent autonomy. Projects like Hermes and ZeptoClaw are actively implementing write-approval policies and telemetry sidecars because users do not trust agents to autonomously modify core skills or push to Git without oversight.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-04

## 1. Today's Overview
The NanoBot project is currently experiencing very high developmental momentum, operating as a highly active open-source endeavor. Today's activity includes 23 updated Pull Requests (with 7 merged/closed) and 6 updated Issues, indicating a strong ratio of code contributions to issue reporting. The primary focus of the maintainers and community is heavily skewed towards hardening agent security, specifically fixing safety guard edge-cases, and improving local LLM deployment stability. Without any new official releases cut today, the project remains in an active feature-development and bug-fixing phase, heavily iterating on its edge capabilities and developer SDK.

## 2. Releases
No new official releases were published today. The project is currently on version `v0.1.5.post3` based on user reports.

## 3. Project Progress
Seven pull requests were merged or closed today, successfully advancing several key areas of the project:
*   **Security & Workspace Boundaries:** A significant architectural change was merged in [PR #3614](https://github.com/HKUDS/nanobot/pull/3614), which replaced the fatal workspace guard abort with a softer, more precise throttling mechanism. This was paired with [PR #3613](https://github.com/HKUDS/nanobot/pull/3613) (closed), which prevented safety guard false positives, such as blocking commands utilizing `/dev/null`.
*   **Terminal UX:** [PR #3609](https://github.com/HKUDS/nanobot/pull/3609) was merged to cleanly route retry-wait messages, resolving garbled ANSI text in interactive CLI mode (closing [Issue #3600](https://github.com/HKUDS/nanobot/issues/3600)).
*   **CLI Authentication:** [PR #2727](https://github.com/HKUDS/nanobot/pull/2727) was closed, bringing in a new `nanobot provider logout` command to clear OAuth credentials.
*   **WebUI & Infrastructure:** [PR #3583](https://github.com/HKUDS/nanobot/pull/3583) improved the beta WebUI turn completion and chat isolation. Additionally, [PR #3606](https://github.com/HKUDS/nanobot/pull/3606) fixed a critical cron job bug where `jobs.json` was silently overwritten post-container restart.

## 4. Community Hot Topics
*   **Provider Authentication ([Issue #2665](https://github.com/HKUDS/nanobot/issues/2665)):** A highly requested topic regarding the inability to re-authenticate OpenAI Codex via OAuth after changing accounts. This has accumulated 3 comments. The underlying user need is seamless multi-tenant or account-switching capabilities for CLI providers.
*   **Subagent Concurrency ([Issue #3611](https://github.com/HKUDS/nanobot/issues/3611) / [PR #3615](https://github.com/HKUDS/nanobot/pull/3615)):** There is strong community engagement around preventing Out-Of-Memory (OOM) crashes on local LLM servers by limiting concurrent subagents. This highlights a growing user base running NanoBot on consumer hardware.
*   **Extensibility Architecture ([PR #3564](https://github.com/HKUDS/nanobot/pull/3564)):** An open proposal to introduce `HookCenter`, a typed-event hook system replacing the older method-override pattern. This suggests the community desires a more robust, decoupled plugin architecture for external developers.

## 5. Bugs & Stability
Several bugs were reported today, revealing a cluster of regressions and edge cases in the current version:
1.  **Critical/Silent Failure:** [Issue #3605](https://github.com/HKUDS/nanobot/issues/3605) reports that the safety guard abort silently drops the turn without delivering an error message to the user. (Fix pending via [PR #3613](https://github.com/HKUDS/nanobot/pull/3613)).
2.  **Regression/Workspace Guard:** [Issue #3599](https://github.com/HKUDS/nanobot/issues/3599) reports false positives triggering "Command blocked by safety guard" post-upgrade to `v0.1.5.post3`. (Fix merged via [PR #3614](https://github.com/HKUDS/nanobot/pull/3614)).
3.  **Bridge/Media Handling:** [Issue #3604](https://github.com/HKUDS/nanobot/issues/3604) highlights that WhatsApp voice messages fail to download. (Fix pending via [PR #3607](https://github.com/HKUDS/nanobot/pull/3607)).
4.  **CLI Visual Bug:** [Issue #3600](https://github.com/HKUDS/nanobot/issues/3600) details how API retry messages mix into streamed output, causing terminal garbage text in SSH environments. (Fix merged via [PR #3609](https://github.com/HKUDS/nanobot/pull/3609)).

## 6. Feature Requests & Roadmap Signals
*   **Subagent Throttling:** [Issue #3611](https://github.com/HKUDS/nanobot/issues/3611) requests `maxConcurrentSubagents` to prevent local OOM. With [PR #3615](https://github.com/HKUDS/nanobot/pull/3615) already addressing this, it is highly likely to be a flagship feature in the next release.
*   **Provider Logout:** [Issue #2665](https://github.com/HKUDS/nanobot/issues/2665) highlights the need for an OAuth logout. With [PR #3612](https://github.com/HKUDS/nanobot/pull/3612) and previously closed PRs implementing this, it should be natively supported soon.
*   **Event-Driven Plugins:** [PR #3564](https://github.com/HKUDS/nanobot/pull/3564) (HookCenter) signals a future roadmap shift towards enterprise-grade plugin support.
*   **CLI UI Upgrade:** [PR #3601](https://github.com/HKUDS/nanobot/pull/3601) proposes a panel-based terminal display, indicating an upcoming modernization of the core `nanobot chat` user interface.

## 7. User Feedback Summary
Users are heavily utilizing NanoBot across diverse channels (CLI, Telegram, WhatsApp), but are encountering friction with recently introduced safety mechanisms. Specifically, users are frustrated by false positive blocks on standard shell commands (like using `/dev/null`), making the agent feel unpredictably restrictive. Furthermore, the reliance on NanoBot as an interface for local AI models (Ollama, mlx_lm) is evident; users are pushing the tool's multi-agent capabilities to the limit of their hardware, resulting in OOM crashes. The community is highly engaged in resolving these issues, showing a healthy balance of bug reporters and proactive contributors.

## 8. Backlog Watch
*   **SDK Observability:** [PR #3254](https://github.com/HKUDS/nanobot/pull/3254) aims to wire up `RunResult.tools_used` and `RunResult.messages`. Open since April 17, this crucial SDK fix needs a maintainer review.
*   **SSRF Protection:** [PR #3252](https://github.com/HKUDS/nanobot/pull/3252) (detecting non-HTTP schemes in SSRF) and [PR #3235](https://github.com/HKUDS/nanobot/pull/3235) (failing closed on DNS errors) have been open for weeks. Given the recent focus on safety guards, these security PRs require prioritization.
*   **Heartbeat Reasoning:** [PR #1443](https://github.com/HKUDS/nanobot/pull/1443) (decoupling heartbeat reasoning from notification) has been open since early March and is at risk of becoming a long-term stale PR.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-04

## 1. Today's Overview
Hermes Agent experienced a highly active day with 50 issues and 50 pull requests updated within the last 24 hours. The project is currently dealing with a heavy influx of bug reports related to provider integrations (Anthropic, OpenAI, Xiaomi) and platform-specific edge cases (Telegram, Discord, Slack). Security and token optimization are major themes in the pull request pipeline, with multiple contributors submitting targeted fixes. No new version was released today, indicating that the maintainers are likely stabilizing the codebase for a future patch release. Overall, project health is strong but the high volume of open issues (46 open, 43 open PRs) suggests a growing need for triage and merge reviews.

## 2. Releases
No new releases were published today. The repository remains without a tagged release for this period, and the community is actively providing patches that will likely culminate in a forthcoming minor or patch version update.

## 3. Project Progress
Seven pull requests were merged or closed today, and 43 remain open. Key advancements include:
- **Security Patches**: PR [#19374](https://github.com/NousResearch/hermes-agent/pull/19374) (Teams approval button access control), PR [#19379](https://github.com/NousResearch/hermes-agent/pull/19379) (code-level guard against modifying bundled skills).
- **Token/Performance Optimization**: PR [#18295](https://github.com/NousResearch/hermes-agent/pull/18295) (Numba-accelerated OPD token span matching) was closed/merged.
- **Crash Fixes**: PR [#19373](https://github.com/NousResearch/hermes-agent/pull/19373) (AttributeError in context compressor dedup), PR [#19363](https://github.com/NousResearch/hermes-agent/pull/19363) & [#19368](https://github.com/NousResearch/hermes-agent/pull/19368) (vision tool TypeError guards).
- **Platform Fixes**: PR [#19371](https://github.com/NousResearch/hermes-agent/pull/19371) (Telegram help command sanitization), PR [#19366](https://github.com/NousResearch/hermes-agent/pull/19366) (Discord stale slash command pruning), PR [#19378](https://github.com/NousResearch/hermes-agent/pull/19378) (kanban board sharing across profiles).
- **Infrastructure**: PR [#19365](https://github.com/NousResearch/hermes-agent/pull/19365) resolved all npm audit findings, PR [#19380](https://github.com/NousResearch/hermes-agent/pull/19380) added MCP session auto-reconnect.

## 4. Community Hot Topics
The most actively discussed issues reveal deep community engagement around autonomy, token efficiency, and provider compatibility:

1. **[#5712 True Autonomy — Cron-to-Live Gateway Injection](https://github.com/NousResearch/hermes-agent/issues/5712)** (6 comments, 4 👍): Users want cron job results automatically injected into active gateway chat sessions, reflecting demand for continuous, always-on AI agent workflows.
2. **[#8430 Context Length Config Ignored](https://github.com/NousResearch/hermes-agent/issues/8430)** (6 comments): Users setting `model.context_length` in config.yaml find the value ignored for models with <64k token windows, indicating a config-layer override bug.
3. **[#15080 Claude Max OAuth Rejected](https://github.com/NousResearch/hermes-agent/issues/15080)** (6 comments): Claude Max subscribers cannot authenticate via OAuth tokens, suggesting an auth handshake incompatibility with Anthropic's latest subscription tier.
4. **[#6839 Lazy Tool Schema Loading](https://github.com/NousResearch/hermes-agent/issues/6839)** (4 comments, 7 👍): The highest-reaction issue proposes two-pass tool injection to cut ~5,000 tokens per API call, reflecting strong demand for local-model efficiency.
5. **[#19046 Excessive Anthropic Branding](https://github.com/NousResearch/hermes-agent/issues/19046)** (3 comments): Users concerned that Hermes sends excessive identifying headers to Anthropic, potentially triggering rate limits or degraded service.

## 5. Bugs & Stability
Bugs are ranked by severity and impact:

### P0 / Critical
- **No P0 bugs open** (PR [#19379](https://github.com/NousResearch/hermes-agent/pull/19379) addresses a P0 security gap where bundled skills could be modified by the LLM — fix PR submitted).

### P1 / High
- **[#15080 Claude Max OAuth HTTP 400](https://github.com/NousResearch/hermes-agent/issues/15080)**: Auth failure for Claude Max subscribers. No fix PR yet.
- **[#13248 Empty-response retry loop in Slack](https://github.com/NousResearch/hermes-agent/issues/13248)**: Causes runaway retry loops on `claude-opus-4-7` in Slack group threads. No fix PR yet.
- **[#14128 Gateway shutdown hangs — PID file race](https://github.com/NousResearch/hermes-agent/issues/14128)**: systemd restart failures on Feishu gateway. No fix PR yet.
- **PR [#19373 Compressor AttributeError](https://github.com/NousResearch/hermes-agent/pull/19373)**: Context compression crashes on non-string tool content. Fix PR submitted.
- **PR [#19374 Teams approval button open access](https://github.com/NousResearch/hermes-agent/pull/19374)**: Security vulnerability allowing unauthorized approval clicks. Fix PR submitted.

### P2 / Medium
- **[#19294 Browser executable path ignored](https://github.com/NousResearch/hermes-agent/issues/19294)**: `_chromium_installed()` ignores env vars, gating browser tools unnecessarily.
- **[#19287 Telegram images not passed to vision](https://github.com/NousResearch/hermes-agent/issues/19287)**: Images arrive as file paths, model never sees pixels.
- **[#19214 terminal.cwd foot-gun](https://github.com/NousResearch/hermes-agent/issues/19214)**: Config key silently pins CLI to `$HOME` — CLOSED.
- **[#19348 Kanban profile isolation](https://github.com/NousResearch/hermes-agent/issues/19348)**: Workers spawn with profile-local DB instead of shared board — CLOSED, fix PR [#19378](https://github.com/NousResearch/hermes-agent/pull/19378) submitted.
- **[#11529 Context bursting in long sessions](https://github.com/NousResearch/hermes-agent/issues/11529)**: UI freeze on long context — CLOSED.
- **PR [#19370 Azure content filter false positives](https://github.com/NousResearch/hermes-agent/pull/19370)**: Rephrases compression preamble to avoid jailbreak detection. Fix PR submitted.

## 6. Feature Requests & Roadmap Signals
Several feature requests signal the direction the community wants Hermes to evolve:

1. **Lazy Tool Schema Loading** ([#6839](https://github.com/NousResearch/hermes-agent/issues/6839), 7 👍) and **Hybrid Tool Pre-Selection** ([#13332](https://github.com/NousResearch/hermes-agent/issues/13332)): Both target reducing the ~14,000-token tool overhead per turn. Likely candidates for the next major version.
2. **Semantic Skill Retrieval with FTS5** ([#17649](https://github.com/NousResearch/hermes-agent/issues/17649)): Replace broadcasting all 167 skills with on-demand search, cutting ~4,500 tokens/turn.
3. **True Autonomy — Cron-to-Live Sessions** ([#5712](https://github.com/NousResearch/hermes-agent/issues/5712), 4 👍): Bridge cron job outputs into real-time gateway chats for always-on agent workflows.
4. **Planning Consultant — `/consult` command** ([#19344](https://github.com/NousResearch/hermes-agent/issues/19344)): Allow cost-effective models to invoke frontier models for complex reasoning on demand.
5. **CLI Auto-Queue with Crash Recovery** ([#13072](https://github.com/NousResearch/hermes-agent/issues/13072)): Smart interrupt handling and message queuing in CLI mode.
6. **Anthropic Tool Search for MCP** ([#18074](https://github.com/NousResearch/hermes-agent/issues/18074)): Leverage Anthropic's beta Tool Search API to reduce MCP token overhead.
7. **Self-improvement write approval policy** ([#19324](https://github.com/NousResearch/hermes-agent/issues/19324)): Users want control over what the agent learns autonomously, especially git operations.

**Prediction**: Token optimization features (#6839, #13332, #17649) are the most likely to land in the next release given community demand and aligned PR activity.

## 7. User Feedback Summary
Real user pain points extracted from today's issues:

- **Provider compatibility frustration**: Users report issues across Anthropic OAuth ([#15080](https://github.com/NousResearch/hermes-agent/issues/15080)), Azure content filters ([#19362](https://github.com/NousResearch/hermes-agent/issues/19362)), Xiaomi model ID normalization ([#19239](https://github.com/NousResearch/hermes-agent/issues/19239)), MiniMax connection drops ([#6838](https://github.com/NousResearch/hermes-agent/issues/6838)), indicating the multi-provider abstraction layer needs hardening.
- **Context and memory reliability**: Multiple reports of context compression failures, memory not persisting ([#14420](https://github.com/NousResearch/hermes-agent/issues/14420)), session data loss on crash ([#19244](https://github.com/NousResearch/hermes-agent/issues/19244)), and config overrides being ignored ([#8430](https://github.com/NousResearch/hermes-agent/issues/8430)).
- **Autonomy guardrails needed**: Users appreciate self-improvement capabilities but want explicit controls — the agent auto-pushing to git ([#19324](https://github.com/NousResearch/hermes-agent/issues/19324)) and modifying bundled skills are cited as overstepping.
- **Platform integration gaps**: Telegram vision ([#19287](https://github.com/NousResearch/hermes-agent/issues/19287)), Slack retry loops ([#13248](https://github.com/NousResearch/hermes-agent/issues/13248)), and Feishu gateway hangs ([#14128](https://github.com/NousResearch/hermes-agent/issues/14128)) indicate the gateway/platform layer needs stabilization.
- **Token cost sensitivity**: Multiple feature requests targeting token reduction reflect users running Hermes on local or cost-sensitive models.

## 8. Backlog Watch
The following high-impact issues and PRs deserve maintainer attention:

| Item | Why It Matters | Status |
|------|---------------|--------|
| [#6839 Lazy Tool Schema Loading](https://github.com/NousResearch/hermes-agent/issues/6839) (7 👍) | Highest-reaction issue; blocks local-model efficiency | Open since 2026-04-09, no PR yet |
| [#5712 True Autonomy — Cron-to-Live Injection](https://github.com/NousResearch/hermes-agent/issues/5712) (4 👍) | Core autonomy feature request | Open since 2026-04-07, no PR |
| [#5021 Per-turn Session Flush](https://github.com/NousResearch/hermes-agent/issues/5021) | Data loss on force-exit affects all CLI users | Open since 2026-04-04, no PR |
| [#11020 Browser Session Lifecycle](https://github.com/NousResearch/hermes-agent/issues/11020) | 4 related bugs making headed browser unusable | Open since 2026-04-16, no PR |
| [#15080 Claude Max OAuth](https://github.com/NousResearch/hermes-agent/issues/15080) | Blocks paying Anthropic subscribers | Open since 2026-04-24, no fix PR |
| [#10835 Expose Memory via MCP](https://github.com/NousResearch/hermes-agent/issues/10835) | Cross-agent memory sharing; high ecosystem value | Open since 2026-04-16, no PR |
| [PR #19379 Security: bundled skill write guard](https://github.com/NousResearch/hermes-agent/pull/19379) (P0) | Prevents LLM from modifying system skills | Open, needs urgent review |
| [PR #19374 Teams approval security](https://github.com/NousResearch/hermes-agent/pull/19374) (P1) | Fixes open-access vulnerability | Open, needs urgent review |
| [#8430 Context Length Config Ignored](https://github.com/NousResearch/hermes-agent/issues/8430) | Config override bug affecting non-flagship models | Open since 2026-04-12, no fix PR |

**Recommendation**: Maintainers should prioritize reviewing the two security PRs (#19379, #19374) and triaging the P1 provider auth issues (#15080, #13248, #14128) to maintain user trust across the multi-provider ecosystem.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-05-04

## 1. Today's Overview
PicoClaw demonstrates robust development momentum as it actively iterates towards its next stable milestone. The project recorded a healthy influx of 18 pull requests (6 merged/closed) and 5 issues (1 closed) in the past 24 hours. The release of the `v0.2.8-nightly.20260503` build indicates that maintainers are aggressively integrating community contributions and preparing for an upcoming stable release. Current development is heavily focused on expanding model provider compatibility, hardening execution environments, and enhancing multi-agent orchestration. Overall, the project's health is strong, characterized by rapid bug resolution and active feature development.

## 2. Releases
- **nightly: v0.2.8-nightly.20260504.a94ba821**
  - **Overview:** Automated nightly build integrating the latest `main` branch commits.
  - **Changes included in this cycle:** Fixes for MCP initialization, provider-specific schema sanitization (Gemini), new streaming reasoning support (DeepSeek, Xiaomi Mimo), and improved gateway PID management.
  - **Stability Warning:** This is an automated build and may be unstable. Use with caution in production environments.
  - **Full Changelog:** [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

## 3. Project Progress
Six pull requests were successfully merged/closed today, marking significant progress in project stability and documentation:
- **Agent Resilience:** [PR #2669](https://github.com/sipeed/picoclaw/pull/2669) introduced configurable network error retries with exponential backoff for the LLM call pipeline, significantly improving agent loop stability during transient network drops.
- **Provider Compatibility:** [PR #2681](https://github.com/sipeed/picoclaw/pull/2681) fixed a critical HTTP 400 crash when using Google Gemini with MCP tools by introducing a shared schema sanitizer. Additionally, [PR #2717](https://github.com/sipeed/picoclaw/pull/2717) added strict provider error detection for DeepSeek vision limitations. 
- **Infrastructure & Dependencies:** AWS Bedrock runtime dependencies were bumped ([PR #2735](https://github.com/sipeed/picoclaw/pull/2735)), and documentation for default model configuration was corrected ([PR #2682](https://github.com/sipeed/picoclaw/pull/2682)).
- **Runtime Events (Closed):** [PR #2677](https://github.com/sipeed/picoclaw/pull/2677), a major architectural enhancement introducing a unified runtime event infrastructure, was closed, signaling a potential shift in how observability will be handled in future iterations.

## 4. Community Hot Topics
- **Expanding Provider Support (Ollama Cloud):** [Issue #2225](https://github.com/sipeed/picoclaw/issues/2225) (10 comments) continues to generate significant discussion. Users are actively requesting cloud credential support for Ollama, highlighting a strong user base deploying self-hosted LLMs alongside Ollama's managed cloud endpoints.
- **Android / Edge Computing Stability:** [PR #2462](https://github.com/sipeed/picoclaw/pull/2462) remains an active focal point for users running PicoClaw on resource-constrained devices (Android TV/Termux). The extensive discussion around Telegram duplicate retries and streaming outputs reveals a highly engaged edge-computing community depending on the Android builds.
- **Parallel Agent Orchestration:** [PR #2754](https://github.com/sipeed/picoclaw/pull/2754) introduces synchronous multi-subagent parallel calls. This represents a major architectural leap, indicating that the community is pushing PicoClaw from a single-agent assistant framework into a complex, multi-agent orchestration platform.

## 5. Bugs & Stability
Several high-impact bugs were reported and addressed today:
1. **Critical: MCP Zombie State (Fix Open):** [Issue #2725](https://github.com/sipeed/picoclaw/pull/2725) / [Issue #2744](https://github.com/sipeed/picoclaw/issues/2744). If MCP servers fail to connect, the agent loop exits, leaving the gateway running but unresponsive (zombie state). *A fix is currently under review in PR #2725.*
2. **High: Bash Exec Relative Path Bug (Fix Open):** [Issue #2749](https://github.com/sipeed/picoclaw/issues/2749). The Bash tool incorrectly evaluates relative paths as filesystem root-absolute paths, breaking localized workspace executions. *Fix proposed in [PR #2750](https://github.com/sipeed/picoclaw/pull/2750).*
3. **Medium: Android v0.2.8 Tab Access:** [Issue #2744](https://github.com/sipeed/picoclaw/issues/2744) reports a complete loss of data access across UI tabs in the latest Android release.
4. **Medium: Build from Source:** [Issue #2753](https://github.com/sipeed/picoclaw/issues/2753) notes that the `picoclaw-launcher` binary is missing when building from the main branch today.
5. **Low: Gateway Stale PID:** [Issue #2751](https://github.com/sipeed/picoclaw/pull/2751) fixed an issue where a reused PID from a crashed gateway would block new instances from starting.

## 6. Feature Requests & Roadmap Signals
Recent issues and open PRs provide clear signals about the v0.2.8 stable roadmap:
- **Advanced Multimodal & Reasoning:** [PR #2755](https://github.com/sipeed/picoclaw/pull/2755) introduces streaming `reasoning_content` and video media support, driven by new providers like Xiaomi Mimo. [PR #2740](https://github.com/sipeed/picoclaw/pull/2740) is also finalizing DeepSeek thinking-mode token streaming.
- **Dynamic Routing:** [PR #2696](https://github.com/sipeed/picoclaw/pull/2696) enables per-request dynamic headers for MCP servers from channel contexts, paving the way for complex multi-tenant authentication flows.
- **UI & Configuration Overhaul:** [PR #2752](https://github.com/sipeed/picoclaw/pull/2752) proposes a massive improvement to the web UI, introducing upstream model fetching, validation, and connectivity testing.
- **Prediction:** The next stable release will be heavily focused on **provider-agnostic reasoning integration**, **multi-agent parallelization**, and **MCP connection resilience**.

## 7. User Feedback Summary
- **Pain Points:** Users are experiencing friction with edge deployments (Android/Termux) and local build processes. Furthermore, strict API validations from providers like Gemini and DeepSeek are causing frequent crashes, causing headaches for users utilizing complex tool schemas or vision inputs.
- **Use Cases:** PicoClaw is actively being used as a persistent home-automation/assistant node on Android TV boxes via Telegram, as an interface for local LLMs (Llama.cpp, Ollama), and as a multi-model orchestration layer routing between GLM-4, DeepSeek, and OpenAI.
- **Sentiment:** Generally positive but demanding; users are submitting sophisticated, high-quality bug reports and PRs (e.g., schema sanitization, parallel subagents), indicating an advanced, developer-heavy user base.

## 8. Backlog Watch
The following items require immediate maintainer attention as they have been sitting idle or are facing stale status:
- **[Issue #2225](https://github.com/sipeed/picoclaw/issues/2225):** The Ollama cloud credentials request has been open since late March with heavy community discussion but no official PR yet.
- **[PR #2239](https://github.com/sipeed/picoclaw/pull/2239):** A request to modify Docker Compose with privileged modes has been open since early April and is now marked stale.
- **[PR #2462](https://github.com/sipeed/picoclaw/pull/2462):** The crucial Codex streaming output and Telegram duplicate retries fix has been open for nearly a month awaiting merge.
- **[PR #2647](https://github.com/sipeed/picoclaw/pull/2647):** The DuckDuckGo default search configuration fix is facing delays, leaving web search YAML configurations broken for the broader user base.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-04

## 1. Today's Overview
NanoClaw experienced a **very high activity day** on May 3rd, with 50 pull requests updated and 12 issues touched (8 closed, 4 open). The project is clearly in a phase of aggressive stabilization and community-driven bug fixing following the recent v2 architecture rollout. The ratio of merged-to-open PRs (35 merged vs. 15 open) indicates a responsive merge process and active contributor base. The majority of work centers on container runtimes, chat channel adapters (Telegram, Discord, iMessage), and migration UX. No new releases were cut today, suggesting these fixes are accumulating for a forthcoming patch or minor release.

---

## 2. Releases
**No new releases** were published today.

---

## 3. Project Progress

**35 PRs were merged/closed today.** Notable advancements include:

- **Setup/Auth:** [#2229](https://github.com/qwibitai/nanoclaw/pull/2229) (closed/merged) now recognizes `ANTHROPIC_AUTH_TOKEN` during setup verification, resolving the long-standing [#853](https://github.com/qwibitai/nanoclaw/issues/853) from March. This closes a gap where Claude Code CLI users couldn't complete NanoClaw setup.
- **Container fixes:** [#2236](https://github.com/qwibitai/nanoclaw/pull/2236) corrects a `WORKDIR` vs. mount path mismatch where the agent's workspace was invisible at runtime. [#2230](https://github.com/qwibitai/nanoclaw/pull/2230) fixes `--user` flag incompatibility with rootless Podman.
- **Chat channels:** [#2213](https://github.com/qwibitai/nanoclaw/pull/2213) fixes silent drops of media-only Telegram messages (photos/videos without captions). [#2215](https://github.com/qwibitai/nanoclaw/pull/2215) wires up Discord channels and fixes webhook delivery.
- **Model compatibility:** [#2132](https://github.com/qwibitai/nanoclaw/pull/2132) pins `thinking.display='summarized'` for Opus 4.7, preventing silent thinking-block loss in transcripts.
- **RULES.md diet:** [#2219](https://github.com/qwibitai/nanoclaw/issues/2219) (tracking issue, closed) reports ~12K bytes removed from `RULES.md`, reducing token waste.
- **Third-party integrations:** [#2097](https://github.com/qwibitai/nanoclaw/pull/2097) adds a Lore Context semantic memory skill for cross-session memory. [#2228](https://github.com/qwibitai/nanoclaw/pull/2228) adds partial team support for Baget AI personas.

---

## 4. Community Hot Topics

**Most active issues by comment count:**

- [#853](https://github.com/qwibitai/nanoclaw/issues/853) — *ANTHROPIC_AUTH_TOKEN support* (3 comments, originally opened 2026-03-09). A long-lived pain point for Claude Code CLI users that was finally closed today via PR #2229. **Underlying need:** NanoClaw's auth surface must keep pace with the official Claude CLI's evolving credential mechanisms.
- [#2223](https://github.com/qwibitai/nanoclaw/issues/2223), [#2221](https://github.com/qwibitai/nanoclaw/issues/2221), [#2220](https://github.com/qwibitai/nanoclaw/issues/2220) — Each with 1 comment. Filed by the same maintainer (`andrebrov`), these represent an **active audit of the `main` container's runtime behavior**, covering identity conflation, missing `gh` CLI, and ghost messages to deregistered chats. This suggests a focused reliability sprint.

**Open questions drawing attention:**

- [#2234](https://github.com/qwibitai/nanoclaw/issues/2234) — llama.cpp compatibility. User reports setup hangs at "Your assistant didn't reply in time" despite llama.cpp responding. This is a signal of growing demand for **non-Anthropic LLM backends**.
- [#2200](https://github.com/qwibitai/nanoclaw/issues/2200) & [#2199](https://github.com/qwibitai/nanoclaw/issues/2199) — OpenRC init system support. The installer and Telegram pairing both fail on non-systemd systems. Indicates the **Linux distribution surface** needs broadening.

---

## 5. Bugs & Stability

**Ranked by severity:**

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **High** | [#2227](https://github.com/qwibitai/nanoclaw/issues/2227) | `engage_mode='always'` silently drops *all* group messages — no case in `evaluateEngage()` switch. Agents with this config are effectively deaf in groups. | Open, no fix PR yet |
| **High** | [#2214](https://github.com/qwibitai/nanoclaw/issues/2214) | iMessage local-mode adapter never delivers inbound messages to host. Silent failure, no errors logged. | Open, no fix PR yet |
| **Medium** | [#2221](https://github.com/qwibitai/nanoclaw/issues/2221) | `gh` CLI missing from agent container (regression). Agent can't manage GitHub issues/PRs. | Closed (likely resolved in container image rebuild) |
| **Medium** | [#2220](https://github.com/qwibitai/nanoclaw/issues/2220) | Agent posts to deregistered Telegram chat when no response needed. | Closed |
| **Medium** | [#2223](https://github.com/qwibitai/nanoclaw/issues/2223) | Agent conflates Telegram handle with its identity. | Closed |
| **Medium** | [#2200](https://github.com/qwibitai/nanoclaw/issues/2200) | Telegram pairing hangs on OpenRC systems. | Open |
| **Low** | [#2199](https://github.com/qwibitai/nanoclaw/issues/2199) | Docker fails to start on OpenRC during install. | Open |
| **Low** | [#2234](https://github.com/qwibitai/nanoclaw/issues/2234) | llama.cpp setup verification times out. | Open |

**Key observation:** The `engage_mode='always'` bug (#2227) is particularly dangerous because it's a silent data-loss scenario — every group message is dropped with no error. This should be a priority fix.

---

## 6. Feature Requests & Roadmap Signals

- **Interval-based scheduling** ([PR #2237](https://github.com/qwibitai/nanoclaw/pull/2237)): Adds `@every:<ms>` recurrence with drift correction. Signals a push toward more flexible task scheduling beyond cron expressions.
- **Per-group model & effort overrides** ([PR #2233](https://github.com/qwibitai/nanoclaw/pull/2233)): Allows different agent groups to use different models or reasoning effort levels. This is a **multi-tenant / cost optimization** signal.
- **MCP server-side tool filtering by trust tier** ([#2217](https://github.com/qwibitai/nanoclaw/issues/2217)): The SDK tool catalog is 38K tokens (79 tools), with ~13-16K of preventable waste. Dynamic filtering by container tier would significantly reduce token spend.
- **llama.cpp compatibility** ([#2234](https://github.com/qwibitai/nanoclaw/issues/2234)): User demand for local/open-source model backends.
- **Semantic memory via Lore Context** ([PR #2097](https://github.com/qwibitai/nanoclaw/pull/2097), merged): Cross-session memory beyond file-based `CLAUDE.local.md`.

**Prediction for next release:** The accumulation of container fixes, channel adapter fixes, and setup/auth improvements suggests the next release will likely be a **v2.x patch** focused on stability, with interval scheduling and per-group model overrides as the headline features.

---

## 7. User Feedback Summary

**Pain points identified:**

1. **Init system incompatibility** — Users on OpenRC Linux ([#2199](https://github.com/qwibitai/nanoclaw/issues/2199), [#2200](https://github.com/qwibitai/nanoclaw/issues/2200)) are completely blocked during installation. The project assumes systemd.
2. **Silent message drops** — Multiple issues (#2227, #2214, #2213) involve messages being silently lost with no error. This erodes user trust.
3. **Setup verification rigidity** — The auth token issue (#853) persisted for nearly two months, blocking Claude Code CLI users from completing setup.
4. **Local model support** — Users expect llama.cpp to "just work" since Claude Code supports it (#2234), but NanoClaw's setup verification doesn't accommodate non-Anthropic endpoints.
5. **Headless device UX** — Setup messaging incorrectly promises a browser window on headless devices ([PR #2212](https://github.com/qwibitai/nanoclaw/pull/2212)).

**Positive signals:** Fast resolution of the `ANTHROPIC_AUTH_TOKEN` issue, active maintainer-driven reliability auditing (issues #2219–#2223), and strong community PR flow (35 merged today) suggest a healthy, responsive project.

---

## 8. Backlog Watch

| Item | Age | Concern | Link |
|------|-----|---------|------|
| **#2227** — `engage_mode='always'` drops all group messages | 1 day | Silent data loss, no fix PR yet. Should be treated as P0. | [Issue #2227](https://github.com/qwibitai/nanoclaw/issues/2227) |
| **#2214** — iMessage local-mode delivers nothing | 1 day | Core channel functionality broken for macOS local users. No fix PR. | [Issue #2214](https://github.com/qwibitai/nanoclaw/issues/2214) |
| **#2234** — llama.cpp compatibility | 1 day | Growing demand for open-source model backends; setup verification assumes Anthropic. Needs architectural discussion. | [Issue #2234](https://github.com/qwibitai/nanoclaw/issues/2234) |
| **#2200** / **#2199** — OpenRC support | 1 day | Two related issues from the same user. Installer and Telegram pairing are both broken on non-systemd Linux. Needs unified fix. | [Issue #2200](https://github.com/qwibitai/nanoclaw/issues/2200) / [Issue #2199](https://github.com/qwibitai/nanoclaw/issues/2199) |
| **PR #2237** — Interval-based recurrence | 1 day | Feature-complete PR with no comments yet. Needs maintainer review. | [PR #2237](https://github.com/qwibitai/nanoclaw/pull/2237) |
| **PR #2233** — Per-group model overrides | 1 day | Small config feature with no review activity yet. | [PR #2233](https://github.com/qwibitai/nanoclaw/pull/2233) |

**Priority recommendation:** Issues #2227 and #2214 represent silent failures in core messaging paths and should be addressed before the next release.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-05-04

## 1. Today's Overview
NullClaw experienced a low-code-volume day, with no merged pull requests, closed issues, or new software releases within the last 24 hours. However, the project exhibits healthy ongoing community engagement, as evidenced by sustained commentary on recently opened issues. Discussions remain heavily focused on optimizing NullClaw for its core mission: running securely and efficiently on low-resource and weak hardware devices. Overall project status is stable, though the lack of recent releases suggests maintainers may be in a planning or code-review phase.

## 2. Releases
No new releases were recorded today. 

## 3. Project Progress
No pull requests were merged or closed in the last 24 hours. Consequently, no direct feature advancements or code-level fixes were implemented today. The development pipeline currently appears quiet, with no active PRs awaiting review.

## 4. Community Hot Topics
The community's attention is currently anchored by two open issues discussing foundational architectural improvements:

*   **[Issue #871](https://github.com/nullclaw/nullclaw/issues/871) - Critical: web_search is impractical on low-resource devices without direct DuckDuckGo support (2 comments):** Users are actively discussing the challenges of relying on external APIs like Brave Search for `web_search` on weak devices. The underlying need is for a zero-dependency, lightweight built-in scraping or search capability (specifically via DuckDuckGo) to maintain the project's "low-resource" promise without requiring paid API keys.
*   **[Issue #882](https://github.com/nullclaw/nullclaw/issues/882) - sandbox: default to Landlock on Linux, stop probing external tools at startup (1 comment):** Contributors are discussing moving away from probing external tools like `firejail` and `bwrap` at startup. The underlying need here is for a cleaner, faster, and more secure initialization process that relies on native Linux kernels (Landlock) rather than spawning child processes to test for available sandboxing tools.

## 5. Bugs & Stability
*   **HIGH SEVERITY:** **[Issue #871](https://github.com/nullclaw/nullclaw/issues/871) - `web_search` impracticality on low-resource devices:** Categorized as a bug regarding usability. NullClaw's `web_search` tool essentially breaks the project's core philosophy by requiring heavy external dependencies or paid APIs to function correctly on cheap/weak hardware. *No fix PRs are currently open.*
*   **LOW/MEDIUM SEVERITY:** **[Issue #882](https://github.com/nullclaw/nullclaw/issues/882) - Sandbox startup probing issues:** The current method of probing for sandbox tools by spawning child processes at startup causes recurring initialization issues and lag. *No fix PRs are currently open.*

## 6. Feature Requests & Roadmap Signals
Based on the active issues, two strong roadmap signals have emerged that will likely define the next major version or upcoming patch releases:
*   **Direct DuckDuckGo Integration:** A shift towards a native, free search aggregation method to bypass external API requirements.
*   **Landlock Sandbox Defaulting:** A structural refactor of the Linux sandboxing backend to eliminate reliance on external tools (`docker`, `firejail`), moving instead to Linux kernel-native restrictions. This would significantly speed up startup times and reduce the dependency footprint.

## 7. User Feedback Summary
Real-world user feedback indicates a high degree of satisfaction with the project's intended low-footprint philosophy, but reveals friction in actual deployment. Users operating on cheap, low-resource devices feel that current integrations (like the Brave Search API requirement) betray the project's lightweight core use case. Additionally, system administrators and users are experiencing friction with startup latency and sandbox configuration, expressing a strong preference for native, out-of-the-box solutions rather than complex external tool probing.

## 8. Backlog Watch
*   **[Issue #871](https://github.com/nullclaw/nullclaw/issues/871) (Open since 2026-04-25):** This issue is approaching 10 days without a resolution or an attached PR. Given that it is tagged as a "Critical" usability bug for the target demographic, it urgently requires maintainer triage to either confirm a roadmap timeline for DuckDuckGo support or suggest a temporary workaround.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-05-04

## 1. Today's Overview
The IronClaw project is experiencing exceptionally high architectural development activity, dominated almost entirely by the massive "Reborn" internal substrate refactor. Over the last 24 hours, the repository saw 20 updated issues and 35 active pull requests, indicating a rapid, heavily engineered sprint. While the core team and contributors push forward on next-generation runtime and state management capabilities, several critical bugs have surfaced in the current v0.27.0 production release. The project is currently in a dual phase of stabilizing existing user-facing functionality while aggressively preparing its underlying architecture for future scale.

## 2. Releases
No new releases were recorded today. The production environment remains on version `v0.27.0`.

## 3. Project Progress
Significant merge activity occurred today, focusing heavily on merging architectural Reborn testing and dependency updates, while several extensive feature PRs remain open for review.

*   **Host Runtime & Memory Tests Merged:** PR [#3170](https://github.com/nearai/ironclaw/pull/3170) was merged, successfully landing vertical gate coverage for HostRuntime and memory backends.
*   **CI Stabilization:** PR [#3234](https://github.com/nearai/ironclaw/pull/3234) was merged to replace a deleted E2E preflight test, fixing broken CI pipelines. Additionally, PR [#3235](https://github.com/nearai/ironclaw/pull/3235) is open to unblock Live Canary auth lanes.
*   **Reborn Substrate Advancement:** The core team is preparing to land the `reborn-integration` branch into `main` behind default-off gates via PR [#3230](https://github.com/nearai/ironclaw/pull/3230). Open PRs for event projection ([#3212](https://github.com/nearai/ironclaw/pull/3212)) and event store backends ([#3171](https://github.com/nearai/ironclaw/pull/3171)) show active progress on Reborn's durable audit/logging capabilities. 
*   **New Contributor Features:** Substantial open PRs from new contributors include Slack Socket Mode integration ([#1549](https://github.com/nearai/ironclaw/pull/1549)) and NEAR Intents financial automation features (e.g., multi-asset DCA and mission scaffolding in [#3224](https://github.com/nearai/ironclaw/pull/3224) and [#3223](https://github.com/nearai/ironclaw/pull/3223)).

## 4. Community Hot Topics
The most actively discussed issues highlight a friction point between architectural planning and production stability.

*   **Reborn Architecture Trackers:** Issues [#3016](https://github.com/nearai/ironclaw/issues/3016) (AgentLoopHost facade) and [#3013](https://github.com/nearai/ironclaw/issues/3013) (TurnCoordinator) are the central hubs for the ongoing refactor, featuring extensive cross-linking and architectural debate by core contributor `serrrfirat`. 
*   **Terminal and Headless Usability:** `thomasmaerz` has ignited a strong thread regarding UI/UX friction in headless environments, specifically calling out terminal corruption on `/quit` ([#3228](https://github.com/nearai/ironclaw/issues/3228)) and silent clipboard failures ([#3227](https://github.com/nearai/ironclaw/issues/3227)). This underlying need suggests that a significant portion of the user base deploys IronClaw via SSH or LXC containers, relying heavily on TUI rather than web interfaces.

## 5. Bugs & Stability
Several high-to-critical severity bugs were reported today against the `v0.27.0` release, primarily affecting LLM providers and configurations.

1.  **[CRITICAL] LLM Configuration Wiped on Restart:** Issue [#3229](https://github.com/nearai/ironclaw/issues/3229) reports that the LLM provider fallback mechanism permanently overwrites user DB configurations upon startup. *No known fix PR is open yet.*
2.  **[HIGH] Terminal Corruption on Exit:** Issue [#3228](https://github.com/nearai/ironclaw/issues/3228) notes that mouse tracking fails to disable correctly on `/quit` in multiplexed (tmux/screen) sessions, breaking the terminal. *No known fix PR is open yet.*
3.  **[HIGH] Gemini API `thought_signature` Drops:** Issues [#3225](https://github.com/nearai/ironclaw/issues/3225) and [#3214](https://github.com/nearai/ironclaw/issues/3214) (closed in favor of 3225) highlight persistent HTTP 400 errors with Gemini 3.x models during tool loops. *Fix submitted in PR [#3226](https://github.com/nearai/ironclaw/pull/3226) (currently closed/revision pending).*
4.  **[MEDIUM] DeepSeek Tool Calling:** Issue [#3201](https://github.com/nearai/ironclaw/issues/3201) confirms tool use is failing for `deepseek-v4-flash`. *No known fix PR is open yet.*

## 6. Feature Requests & Roadmap Signals
The immediate roadmap is entirely consumed by the **"Reborn" cutover**, but financial and channel integration signals are clear.

*   **Reborn Execution Model:** A massive swath of new issues ([#3238](https://github.com/nearai/ironclaw/issues/3238), [#3237](https://github.com/nearai/ironclaw/issues/3237), [#3236](https://github.com/nearai/ironclaw/issues/3236), [#3232](https://github.com/nearai/ironclaw/issues/3232)) defines the exact contracts for cancellation, HTTP syscalls, and turn persistence. This signals that the next major version will feature robust, enterprise-grade execution sandboxing.
*   **Automated Financial Workflows:** PRs [#3224](https://github.com/nearai/ironclaw/pull/3224) and [#3223](https://github.com/nearai/ironclaw/pull/3223) strongly signal an upcoming built-in ecosystem for NEAR protocol DeFi pass-through, allowing the AI to manage basket DCA schedules securely.

## 7. User Feedback Summary
User feedback currently reflects a steep divide between the "legacy" v0.27.0 users and the core architects. 
*   **Pain Points:** Enterprise and power-users running headless servers are frustrated by environmental assumptions (e.g., requiring X11/Wayland for clipboard, breaking terminals on exit). Additionally, users attempting to use alternative LLM backends (Gemini, DeepSeek) are hitting breaking changes in tool-calling implementations. 
*   **Satisfaction:** The rapid response to the Gemini `thought_signature` issue and the active CI/E2E test fixes show that maintainers are highly engaged with community bug reports, even while managing an architectural refactor.

## 8. Backlog Watch
*   **PR [#1549](https://github.com/nearai/ironclaw/pull/1549) (Slack Socket Mode):** This is an "XL" sized, highly-anticipated community contribution open since March 21st. It requires final maintainer attention to merge, as it solves a major pain point for NAT-restricted deployments.
*   **PR [#2973](https://github.com/nearai/ironclaw/pull/2973) & [#2593](https://github.com/nearai/ironclaw/pull/2593) (Dependabot):** Dependency bumps for Rust crates and GitHub Actions have been stalled since late April. Merging these is crucial for keeping the CI/CD pipeline secure and functional ahead of the Reborn substrate merge.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the project digest for LobsterAI based on the provided data for May 4, 2026.

### 1. Today's Overview
LobsterAI experienced a low-velocity, maintenance-focused day with no new releases, merged pull requests, or closed issues. The project currently has one active issue and two open pull requests, both of which are aging and flagged as stale. Despite the lack of new code merging today, the open development pipeline indicates a continued focus on performance optimization (specifically regarding SQLite) and expanding analytics capabilities (Skill execution statistics). Overall project health appears stable but currently experiencing a lull in active maintainer merges.

### 2. Releases
*   **No new releases** were published today. There are no breaking changes or migration notes to report.

### 3. Project Progress
*   No PRs were merged and no issues were closed today. 
*   However, two existing PRs saw activity/update signals:
    *   **SQLite Performance Optimization:** PR [#812](https://github.com/netease-youdao/LobsterAI/pull/812) remains open. It introduces a 500ms debounce and asynchronous writing mechanism for SQLite to prevent main thread blocking in the Electron app.
    *   **Skill Analytics:** PR [#871](https://github.com/netease-youdao/LobsterAI/pull/871) remains open. It introduces a new UI feature to parse OpenClaw session data and display Skill execution statistics.

### 4. Community Hot Topics
*   The most notable community interaction today is a new feature request: Issue [#1880](https://github.com/netease-youdao/LobsterAI/issues/1880). The user is requesting the integration of **Hermes Agent and OpenClaw** as connectable AI agents, using Open WebUI's agent connection flow as a specific UX benchmark. This highlights a strong underlying community need for standardized, plug-and-play agent interoperability within the LobsterAI ecosystem.

### 5. Bugs & Stability
*   **No new bugs or crashes** were reported by users in the last 24 hours.
*   **Underlying Stability PR in Progress:** While not a new bug report, PR [#812](https://github.com/netease-youdao/LobsterAI/pull/812) addresses a severe pre-existing stability issue where synchronous database writes (`fs.writeFileSync`) were causing the Electron main thread to freeze during streaming. A fix is currently pending maintainer review.

### 6. Feature Requests & Roadmap Signals
*   **Agent Integration (Issue [#1880](https://github.com/netease-youdao/LobsterAI/issues/1880)):** A user requested native support for connecting external agents (Hermes Agent, OpenClaw) with a streamlined, one-click user experience. This suggests that multi-agent architecture and external API/tool compatibility are highly desired by the user base.
*   **Roadmap Prediction:** If maintainers approve the current open PRs, the next minor version will likely feature significant performance enhancements for local database operations and deeper analytics for OpenClaw-based skill tracking. 

### 7. User Feedback Summary
*   **Pain Points:** Users running high-frequency streaming operations are experiencing UI freezes (as evidenced by the ongoing work in PR [#812](https://github.com/netease-youdao/LobsterAI/pull/812)).
*   **Use Cases:** Users are actively looking to use LobsterAI as a central hub to orchestrate external AI agents and desire intuitive, visually appealing UIs to track agent/worker performance (Issue [#1880](https://github.com/netease-youdao/LobsterAI/issues/1880), PR [#871](https://github.com/netease-youdao/LobsterAI/pull/871)).

### 8. Backlog Watch
*   **PR [#812](https://github.com/netease-youdao/LobsterAI/pull/812) & PR [#871](https://github.com/netease-youdao/LobsterAI/pull/871):** Both pull requests were created on March 25, 2026, and have been marked as **[stale]**. They received an automated update/activity bump today but remain unmerged and lack recent maintainer comments. These high-value PRs (addressing core performance and UI features) urgently require a maintainer review to determine if they require additional changes or are ready for merging.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-04

## 1. Today's Overview
The Moltis project is currently exhibiting a moderate level of open-source activity, with development heavily focused on expanding infrastructure capabilities and refining provider integrations. In the last 24 hours, the repository saw three open Pull Requests updated and one new active Issue opened, with no PRs merged or Issues closed during this window. The open PRs indicate a strong strategic push toward flexible sandbox environments for cloud deployments and improving third-party LLM provider compatibility. No new releases were cut today, suggesting that the development team is likely stabilizing the upcoming features—such as the remote sandbox support and DeepSeek reasoning fixes—before a formal tag. Overall, project health remains stable, with active feature iteration and prompt bug reporting by the community.

## 2. Releases
No new releases were recorded today (2026-05-04). The development phase appears to be focused on gathering upstream fixes and finalizing major feature branches (e.g., multi-backend sandbox support) for a future milestone release.

## 3. Project Progress
Although no Pull Requests were merged today, three significant PRs were updated, indicating active development in the pipeline:
*   **Remote & Multi-Backend Sandbox Support:** [PR #942](https://github.com/moltis-org/moltis/pull/942) by `penso` continues to advance. This feature introduces cloud-agnostic sandboxing (Vercel, Daytona, Firecracker) for environments where Docker-in-Docker isn't viable. This is a critical infrastructure update that will significantly ease self-hosting on platforms like Render or Fly.io.
*   **DeepSeek Reasoning Replay:** [PR #961](https://github.com/moltis-org/moltis/pull/961) by `penso` aims to fix how persisted chat histories handle DeepSeek's reasoning content, ensuring proper continuity for OpenAI-compatible follow-up requests.
*   **Local TTS Documentation Overhaul:** [PR #962](https://github.com/moltis-org/moltis/pull/962) by `penso` updates documentation for local Text-to-Speech providers (Piper and Coqui), pointing users to actively maintained forks and fixing missing configuration steps.

## 4. Community Hot Topics
The most notable community interactions today center around tool execution reliability and self-hosting infrastructure:
*   **Tool Execution Failures:** [Issue #963](https://github.com/moltis-org/moltis/issues/963) was opened by `Cstewart-HC` and immediately highlights a pain point in how the AI agent executes terminal commands.
*   **Self-Hosting & Cloud Deployments:** The continued work on [PR #942](https://github.com/moltis-org/moltis/pull/942) addresses a recurring underlying need in the AI agent community: secure, isolated code execution in cloud environments without exposing the host system or requiring complex Docker setups. 
*   **Local AI Tooling:** [PR #962](https://github.com/moltis-org/moltis/pull/962) underscores the community's ongoing interest in running Moltis fully offline or locally using open-source TTS models, requiring up-to-date documentation to match the rapidly changing local AI ecosystem.

## 5. Bugs & Stability
*   🔴 **High Severity: Schema Validation Collapse in Tool Calls** - [Issue #963](https://github.com/moltis-org/moltis/issues/963)
    *   **Details:** User `Cstewart-HC` reported that `exec` calls intermittently fail with a `missing=command` error. This occurs during pre-dispatch schema validation *before* the execution hooks or tools are actually invoked.
    *   **Impact:** This is a critical agent reliability issue. When the model outputs malformed or empty arguments for a tool call, the system failsafe currently collapses, rejecting commands that the model has already successfully activated. 
    *   **Fix Status:** No fix PRs have been submitted for this specific issue as of today.

## 6. Feature Requests & Roadmap Signals
Based on the current open PRs and Issues, the near-term roadmap for Moltis is heavily focused on **execution robustness and cloud-agnostic deployments**. 
*   **Multi-Backend Sandboxes:** Once [PR #942](https://github.com/moltis-org/moltis/pull/942) is merged, users can expect official support for deploying Moltis seamlessly on DigitalOcean, Fly.io, and Vercel. This signals a strategic push to make Moltis a highly portable cloud assistant.
*   **Model Provider Compatibility:** [PR #961](https://github.com/moltis-org/moltis/pull/961) shows an ongoing commitment to supporting cutting-edge model features (like DeepSeek V4 reasoning). Future versions will likely include more granular handling of "thought/reasoning" tokens.

## 7. User Feedback Summary
Users are actively testing the agent in complex, real-world environments. The primary user pain points identified today revolve around **agent reliability during tool usage**. When an AI model attempts to run a command but formats the JSON payload incorrectly, users experience frustrating interruptions (as seen in [Issue #963](https://github.com/moltis-org/moltis/issues/963)). On the positive side, community contributors like `penso` are actively smoothing out these friction points, specifically by ensuring local models (TTS) and external reasoning models (DeepSeek) integrate seamlessly with the Moltis ecosystem. 

## 8. Backlog Watch
Currently, the open issues and PRs are relatively fresh. However, maintainers should keep an eye on the following:
*   **[Issue #963](https://github.com/moltis-org/moltis/issues/963):** Because it involves pre-dispatch schema validation, resolving it might require architectural decisions regarding how strictly Moltis enforces tool arguments versus attempting to auto-heal or re-prompt malformed model outputs.
*   **[PR #942](https://github.com/moltis-org/moltis/pull/942):** Open since April 30th, this large architectural change needs rigorous review to ensure it doesn't break existing local Docker sandbox implementations for current users. Maintainer attention is highly recommended to push this toward merging.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-05-04

## 1. Today's Overview
CoPaw (also known as QwenPaw) is currently experiencing very high community engagement, with 31 issues and 16 pull requests updated in the last 24 hours. The maintainers are actively triaging the backlog, having closed 11 issues and merged/closed 5 PRs within this single day. The project appears to be in an active development phase leading up to a new release, as evidenced by the recent merging of a version bump PR to `1.1.6b1`. However, the lack of an official stable release today, combined with a high volume of bug reports regarding memory and core agent stability, suggests the project is navigating typical growing pains associated with a rapidly expanding open-source AI assistant ecosystem.

## 2. Releases
While there is no official stable release published today, the maintainers merged PR [#4012](https://github.com/agentscope-ai/QwenPaw/pull/4012) which bumps the project version to `1.1.6b1`. This indicates that a beta release or release candidate is currently being prepared and may be tagged imminently.

## 3. Project Progress
Today saw significant progress in closing out existing work and preparing the codebase for the next iteration:
*   **Version Bumping:** PR [#4012](https://github.com/agentscope-ai/QwenPaw/pull/4012) was merged to prepare for the `1.1.6b1` release.
*   **Documentation Updates:** PR [#4013](https://github.com/agentscope-ai/QwenPaw/pull/4013) closed after updating the official documentation to align with the v1.1.5 release.
*   **Error Handling & Memory Poisoning:** PR [#559](https://github.com/agentscope-ai/QwenPaw/pull/559) was merged, addressing a critical issue where failed user messages caused session poisoning by removing them from agent memory.
*   **Provider Expansion & Refactoring:** PR [#1055](https://github.com/agentscope-ai/QwenPaw/pull/1055) was closed after successfully adding MiniMax as a built-in provider.
*   **Error Code Infrastructure:** PR [#1642](https://github.com/agentscope-ai/QwenPaw/pull/1642) was merged, introducing a structured error code system to improve debugging.

## 4. Community Hot Topics
The most actively discussed issues center around multi-agent isolation and long-term memory management, highlighting that users are deploying CoPaw for complex, persistent tasks:
*   **Agent Workspace Isolation (8 comments):** Issue [#3936](https://github.com/agentscope-ai/QwenPaw/issues/3936) discusses the need for strict workspace isolation between different agents. Users are frustrated that current file protection acts as a global blacklist rather than a per-agent whitelist, indicating a strong need for multi-tenant security.
*   **Telegram Audio Support (5 comments):** Issue [#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516) remains active, detailing how `AudioContent` from voice messages fails to convert for LLM processing. (Note: Community member *karls0r* has already submitted PR [#4021](https://github.com/agentscope-ai/QwenPaw/pull/4021) to fix this).
*   **Auto-Memory Noise (1 👍, 2 comments):** Issue [#3944](https://github.com/agentscope-ai/QwenPaw/issues/3944) requests the exclusion of heartbeat and cron tasks from the Auto-Memory feature, as automated system tasks are being incorrectly saved as "experiences."
*   **Advanced Model Features (2 comments):** Issue [#3996](https://github.com/agentscope-ai/QwenPaw/issues/3996) highlights that DeepSeek V4 integration is currently limiting thinking modes to binary on/off, whereas the API supports granular levels like `xhigh` and `max`.

## 5. Bugs & Stability
Several high-impact bugs related to memory, session management, and local deployments were reported today:
*   **Memory Search Failures:** 
    *   Issue [#3977](https://github.com/agentscope-ai/QwenPaw/issues/3977): `memory_search` throws an `AttributeError: 'list' object has no attribute 'get'`.
    *   Issue [#4018](https://github.com/agentscope-ai/QwenPaw/issues/4018): Updates reset the `embedding_model_config`, causing vector search to silently fail. (Fix proposed in PR [#4007](https://github.com/agentscope-ai/QwenPaw/pull/4007)).
*   **Local Model Context Loss:** Issue [#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991) reports that local Ollama channels fail to carry conversation history, resulting in zero session memory. This does not happen with cloud APIs.
*   **Network Reconnection Failure:** Issue [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017) notes that enabling `HEARTBEAT.md` breaks the agent's ability to automatically reconnect to messaging channels after a temporary network interruption, requiring a manual restart.
*   **Long-Running Task Timeouts:** Issue [#3976](https://github.com/agentscope-ai/QwenPaw/issues/3976) reports that the `UnifiedQueueManager` incorrectly cleans up "idle" sessions even when an AI is actively formulating a complex response, resulting in lost AI replies.

## 6. Feature Requests & Roadmap Signals
The community is heavily pushing for CoPaw to evolve from a simple chat interface into a robust, enterprise-ready desktop application:
*   **Desktop OS Integration:** A highly requested theme is minimizing to the system tray. Users requested this explicitly for Windows in Issue [#3979](https://github.com/agentscope-ai/QwenPaw/issues/3979) and it is backed by an existing feature request in Issue [#2430](https://github.com/agentscope-ai/QwenPaw/issues/2430).
*   **Enhanced Memory Management:** Issue [#3995](https://github.com/agentscope-ai/QwenPaw/issues/3995) requests a complete overhaul of the Markdown-based memory system, asking for lifecycle management, automatic archiving, and write-conflict detection.
*   **Execution Control:** Users want the ability to interrupt and terminate ongoing AI processes directly from integrated channels like Feishu/WeChat (Issue [#4010](https://github.com/agentscope-ai/QwenPaw/issues/4010)), and a Codex-style "mid-guidance" feature to inject prompts while the AI is actively processing (Issue [#4019](https://github.com/agentscope-ai/QwenPaw/issues/4019)).
*   **Model Fallbacks:** Issue [#4011](https://github.com/agentscope-ai/QwenPaw/issues/4011) requests fallback model support to ensure high availability if the primary LLM goes down.

## 7. User Feedback Summary
Users generally express high satisfaction with CoPaw's flexibility but are encountering friction with daily operational stability. The primary pain points revolve around **state persistence** (losing session history with Ollama, updates wiping embedding configs) and **UI/UX maturity** (lack of system tray minimization, inability to delete single messages in the UI as requested in Issue [#4001](https://github.com/agentscope-ai/QwenPaw/issues/4001)). Users deploying complex, multi-agent setups are starting to hit boundaries in agent sandboxing and file permissions, signaling that the user base is transitioning from hobbyists to power-users attempting real-world workflow automations.

## 8. Backlog Watch
*   **Long-standing Telegram Audio Bug:** Issue [#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516) has been open since mid-March. PR [#4021](https://github.com/agentscope-ai/QwenPaw/pull/4021) is now open and awaiting maintainer review to finally resolve this.
*   **Agent External Delegation Timeout:** PR [#3928](https://github.com/agentscope-ai/QwenPaw/pull/3928) fixes a critical infinite wait bug when agents delegate tasks to external ACP agents. It is currently under review and should be prioritized for the upcoming `1.1.6` stable release.
*   **Skill Encoding Corruption:** Issue [#3019](https://github.com/agentscope-ai/QwenPaw/issues/3019) notes that Chinese characters in `skill.json` corrupt the file upon skill uninstallation, breaking the default agent. PR [#4016](https://github.com/agentscope-ai/QwenPaw/pull/4016) is open to address this but requires maintainer validation.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-05-04

## 1. Today's Overview
ZeptoClaw experienced a high-throughput day with **22 pull requests** updated (19 merged/closed) and **5 issues** updated (4 open, 1 closed), indicating aggressive feature integration and housekeeping. The project remains in an active development phase with a sole contributor (qhkm) driving core features while Dependabot handled routine dependency maintenance. No new software releases were cut today, suggesting the merged work is staging for a future milestone. The activity signals a healthy, single-maintainer open-source project executing on a clear technical roadmap.

**GitHub:** [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)

---

## 2. Releases
No new releases were published today.

---

## 3. Project Progress

### Major Merged PRs

| PR | Area | Significance |
|---|---|---|
| [#564](https://github.com/qhkm/zeptoclaw/pull/564) | Agent middleware | **Largest functional PR today.** Lands phase 1 of middleware framework (#399): `Middleware` trait, `PipelineBuilder`, 11 middleware implementations, and pipeline execution engine — all additive, not yet wired into agent loop. This is the cherry-picked rebase of the older #404. |
| [#404](https://github.com/qhkm/zeptoclaw/pull/404) | Agent middleware | Original scaffolding PR (March) closed in favor of the cleaner #564. |

### Dependency Bumps (19 merged via Dependabot)
- **Rust:** tokio `1.50.0` → `1.51.1` ([#550](https://github.com/qhkm/zeptoclaw/pull/550)), lettre `0.11.20` → `0.11.21` ([#563](https://github.com/qhkm/zeptoclaw/pull/563)), libc `0.2.184` → `0.2.185` ([#560](https://github.com/qhkm/zeptoclaw/pull/560)), zip `8.4.0` → `8.5.1` ([#555](https://github.com/qhkm/zeptoclaw/pull/555)), webpki-roots `1.0.6` → `1.0.7` ([#558](https://github.com/qhkm/zeptoclaw/pull/558))
- **JS:** astro `6.0.x` → `6.1.6` in two docs sites ([#552](https://github.com/qhkm/zeptoclaw/pull/552), [#557](https://github.com/qhkm/zeptoclaw/pull/557)), starlight `0.38.2` → `0.38.3` ([#554](https://github.com/qhkm/zeptoclaw/pull/554), [#559](https://github.com/qhkm/zeptoclaw/pull/559)), vite `8.0.0` → `8.0.8` in /panel ([#561](https://github.com/qhkm/zeptoclaw/pull/561))
- **CI/Actions:** taiki-e/install-action ([#562](https://github.com/qhkm/zeptoclaw/pull/562)), cargo-deny-action ([#556](https://github.com/qhkm/zeptoclaw/pull/556)), action-gh-release `2.6.1` → `3.0.0` ([#553](https://github.com/qhkm/zeptoclaw/pull/553)), upload-artifact ([#551](https://github.com/qhkm/zeptoclaw/pull/551))
- **Docker:** Debian base bump ([#549](https://github.com/qhkm/zeptoclaw/pull/549))

### Open PRs Awaiting Review
| PR | Status | Purpose |
|---|---|---|
| [#571](https://github.com/qhkm/zeptoclaw/pull/571) | Open | Trigger-phrase nudges in `longterm_memory` description |
| [#570](https://github.com/qhkm/zeptoclaw/pull/570) | Open | Positioning and comparison claims alignment |
| [#566](https://github.com/qhkm/zeptoclaw/pull/566) | Open | Docs refresh (LOC counts, channel list, test status) |

**Assessment:** The middleware framework landing (#564) is the architectural highlight — it introduces the plugin pipeline pattern that future agent-loop features (self-improvement, skill management) will rely on. The three open docs PRs suggest the maintainer is also investing in project presentation and onboarding.

---

## 4. Community Hot Topics

Activity today is **entirely maintainer-driven** with zero community comments on any issue or PR opened today. The most discussed item is:

- **[#541 — Liquid AI (LFM) provider integration](https://github.com/qhkm/zeptoclaw/issues/541)** (2 comments, closed today): Edge-native non-transformer model provider (LFM-1B/3B/7B) via LEAP SDK. Closed status suggests either completion or deferral. This is the only item with any community-style engagement.

All 4 open issues and 3 open PRs from today have **0 comments and 0 reactions**, indicating solo development with no external community participation at this time.

---

## 5. Bugs & Stability

**No bug reports, crash reports, or regression issues were filed today.**

All closed issues were either feature requests completed or chore items. The closed Liquid AI integration (#541) may have been completed or deferred — its summary doesn't indicate blockers.

The Dependabot bumps (especially tokio `1.51.1` which includes fixes, and action-gh-release major version bump to `3.0.0`) contribute to ongoing stability, though the major CI action bump ([#553](https://github.com/qhkm/zeptoclaw/pull/553)) warrants monitoring for workflow changes.

---

## 6. Feature Requests & Roadmap Signals

Today's issues reveal a coherent **self-improving agent loop** roadmap inspired by the Hermes Agent pattern, executed in explicit phases:

| Phase | Issue | Feature | Status |
|---|---|---|---|
| 1 | [#567](https://github.com/qhkm/zeptoclaw/issues/567) | `skill_manage` tool — CRUD on user skills via agent conversation | Open |
| 1.5 | [#569](https://github.com/qhkm/zeptoclaw/issues/569) | Trigger-phrase nudges in `longterm_memory` description | Open (PR [#571](https://github.com/qhkm/zeptoclaw/pull/571) ready) |
| 2 | [#568](https://github.com/qhkm/zeptoclaw/issues/568) | Per-skill usage telemetry sidecar (`~/.zeptoclaw/skills/.usage.json`) | Open |
| — | [#565](https://github.com/qhkm/zeptoclaw/issues/565) | Positioning docs alignment | Open (PR [#570](https://github.com/qhkm/zeptoclaw/pull/570) ready) |

**Prediction for next version:**
- **Phase 1 (`skill_manage`)** and **Phase 1.5 (trigger nudges)** are likely to ship together — PR #571 is already open and #567 appears implementable with the middleware framework from #564 now landed.
- The **middleware wiring** (phase 2 of #399) to actually integrate the 11 middleware implementations into the agent loop is the logical next architectural step.
- **Liquid AI provider** (#541) closure may signal it shipped or was deprioritized in favor of the self-improvement loop.

---

## 7. User Feedback Summary

**No external user feedback was captured today.** All issues and PRs were authored by `qhkm` or `dependabot[bot]`. Zero comments from community members, zero reactions on any item.

This is consistent with a **single-maintainer project in early-to-mid architectural phase** where the primary user is the maintainer themselves, building toward a personal AI assistant infrastructure. The docs alignment work (#565, #566, #570) suggests preparation for broader visibility and potential community onboarding.

---

## 8. Backlog Watch

| Item | Age | Concern | Action Needed |
|---|---|---|---|
| [#567 — `skill_manage` tool](https://github.com/qhkm/zeptoclaw/issues/567) | <1 day | Phase 1 of self-improvement loop; no PR yet | Prioritize implementation — middleware framework (#564) now landed, unblocking this |
| [#568 — Usage telemetry sidecar](https://github.com/qhkm/zeptoclaw/issues/568) | <1 day | Phase 2; depends on Phase 1 (#567) completing | Block until #567 ships |
| [#399 — Middleware pipeline meta-issue](https://github.com/qhkm/zeptoclaw/issues/399) | Older | Phase 1 PR (#564) merged but middleware not wired into agent loop | Maintainer should track phase 2 wiring milestone |
| [#541 — Liquid AI integration](https://github.com/qhkm/zeptoclaw/issues/541) | 11 days | Closed today with minimal context on resolution | Consider adding closure comment noting outcome (shipped vs. deferred) |

**Overall health assessment:** ZeptoClaw is architecturally ambitious but entirely single-contributor. The middleware framework landing and structured self-improvement roadmap are positive signals. The primary risk is bus factor — the project would benefit from onboarding contributors, and the current docs alignment work may be a step toward that. Dependency hygiene is excellent (19 bumps merged cleanly). No releases since data began tracking, so shipping a tagged version would be a meaningful milestone to demonstrate stability.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-04

## 1. Today's Overview
ZeroClaw is experiencing a high-velocity development phase, characterized by a massive daily volume of 50 updated issues and 46 pull requests. The project is currently in a heavy iteration cycle, with 21 PRs merged or closed, indicating strong integration momentum despite the absence of an official release today. Activity is heavily focused on expanding the newly introduced Tauri-based desktop application (specifically for macOS) and stabilizing configuration/provider compatibility for multi-modal AI agents. While community contributions and feature requests are surging, several high-severity bugs related to context memory, security policies, and provider handling require careful maintainer review to ensure platform stability.

## 2. Releases
No new releases were published today. The latest development activity suggests the project is staging changes for an upcoming release (likely `v0.7.4` or `v0.8.0` based on PR targets and tracking issues).

## 3. Project Progress
Significant forward progress was made today across documentation, security, and installation workflows through 21 merged/closed PRs:
*   **Security Policy Fixed:** [PR #5939](https://github.com/zeroclaw-labs/zeroclaw/pull/5939) successfully resolved a frustrating shell policy bug where `git -C <path>` was being blocked due to case-insensitive conflation with `git -c`.
*   **Installer & Config Improvements:** The prebuilt binary installation path was fixed to properly extract web dashboard assets ([PR #6154](https://github.com/zeroclaw-labs/zeroclaw/pull/6154)), and outdated YOLO/local testing configuration examples were updated in the documentation ([PR #6194](https://github.com/zeroclaw-labs/zeroclaw/pull/6194)). 
*   **Vision/Provider Handling:** Non-vision providers no longer break when receiving image markers during context compression ([PR #6189](https://github.com/zeroclaw-labs/zeroclaw/pull/6189)).
*   **Documentation Overhaul:** The massive RFC #5576 documentation restructuring initiative completed its archival and alignment phases ([PR #5589](https://github.com/zeroclaw-labs/zeroclaw/pull/5589), [PR #5590](https://github.com/zeroclaw-labs/zeroclaw/pull/5590)).

## 4. Community Hot Topics
The most actively discussed issues highlight critical user needs regarding provider compatibility and user experience:
*   **DeepSeek V4 Multi-turn Failure ([Issue #6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233) - 7 comments):** The top-discussed issue reveals that reasoning content is dropped in plain-text assistant messages during multi-turn conversations with DeepSeek V4, causing 400 Bad Request errors. This is tightly linked to the open [PR #6107](https://github.com/zeroclaw-labs/zeroclaw/pull/6107).
*   **Installer and Config Friction ([Issue #6149](https://github.com/zeroclaw-labs/zeroclaw/issues/6149) - 4 comments, [Issue #6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) - 3 comments):** Users are frequently reporting that the documentation and install scripts do not align with the current binary, leading to non-working local testing setups and missing web dashboard assets.
*   **Sudo/Security Workflow Blockers ([Issue #5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809) - 3 comments, 2 upvotes):** Users expressed significant frustration (and satisfaction upon its closure) with the security sandbox overly aggressively blocking legitimate git commands.

## 5. Bugs & Stability
Several high-priority bugs were reported or updated today, with a few posing significant stability or security risks:
*   **S0 - Data Loss / Security Risk:** [Issue #5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) reports severe context spillage where Discord chat context is leaking into scheduled cron executions. This is currently blocked and needs a reliable reproduction step from the community.
*   **S1 - Workflow Blocked (Approval Bypass):** [Issue #6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) reveals that supervised tool approvals do not surface in the daemon web UI via the WebSocket gateway, effectively breaking supervised autonomy. 
*   **S2 - Provider/Config Mismatches:** Fallback provider chains are ignoring `[providers.X]` configs ([Issue #5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803)) and the `self-test` command incorrectly defaults to localhost ([Issue #6051](https://github.com/zeroclaw-labs/zeroclaw/issues/6051)).
*   **Fixes in Progress:** The root cause for the DeepSeek streaming issue is addressed in [PR #6107](https://github.com/zeroclaw-labs/zeroclaw/pull/6107), and memory context markers are being refactored to prevent future bugs in [PR #6319](https://github.com/zeroclaw-labs/zeroclaw/pull/6319).

## 6. Feature Requests & Roadmap Signals
A massive cluster of feature requests was opened today by a single contributor (`theonlyhennygod`), signaling a strong push toward **v0.7.7 Desktop App Parity**. 
*   **macOS Tauri App Ecosystem:** A flood of issues ([#6331](https://github.com/zeroclaw-labs/zeroclaw/issues/6331) to [#6343](https://github.com/zeroclaw-labs/zeroclaw/issues/6343)) outlines the complete requirements for a production-ready macOS menu-bar app, including universal binaries, `.dmg` notarization, auto-updates, and native permission flows (Microphone, Screen Recording, Accessibility). 
*   **Node Management:** [Issue #6346](https://github.com/zeroclaw-labs/zeroclaw/issues/6346) proposes a CLI and dashboard health check system for multi-machine ZeroClaw nodes.
*   **UX Enhancements:** Users are requesting UI throttling for outbound replies ([Issue #6345](https://github.com/zeroclaw-labs/zeroclaw/issues/6345)) and native drag-and-drop image support in the web chat ([Issue #5649](https://github.com/zeroclaw-labs/zeroclaw/issues/5649)).
*   **Upcoming Version Targeting:** The open [PR #6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266) (a large config schema v3 migration) is explicitly targeting an `integration/v0.8.0` branch, indicating the next major milestone will feature breaking config changes.

## 7. User Feedback Summary
Users are actively utilizing ZeroClaw across diverse hardware and channels, but friction points remain in initial setup. 
*   **Hardware Edge Cases:** The community is enthusiastic about running the agent on edge devices, with an accepted issue for a Raspberry Pi deployment guide ([Issue #4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704), 3 upvotes) highlighting OOM issues during fat-LTO compilation.
*   **Multi-Platform Chat:** Users are integrating ZeroClaw with Discord, Telegram, and Matrix. Feedback shows pain points in channel-specific file handling ([Issue #6177](https://github.com/zeroclaw-labs/zeroclaw/issues/6177)) and non-vision models breaking when receiving photos via Telegram ([Issue #5897](https://github.com/zeroclaw-labs/zeroclaw/issues/5897)). 
*   **Overall Sentiment:** Users are highly engaged and willing to contribute fixes and RFCs. Dissatisfaction is mostly localized to outdated documentation lagging behind the rapid pace of the Rust backend and config schema updates.

## 8. Backlog Watch
*   **Needs Maintainer Review:** [Issue #6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) (Web dashboard ignoring Approval Manager) has a `needs-maintainer-review` label and poses a significant functional block for users utilizing supervised agent modes.
*   **Requires Community Reproduction:** The high-severity context spillage bug ([Issue #5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415)) is currently sitting in a `blocked` state waiting for a reproducible test case.
*   **Stale Large PRs:** Several large-scope PRs, such as the hot-switch model UI updates ([PR #6101](https://github.com/zeroclaw-labs/zeroclaw/pull/6101)) and the initial desktop menu bar implementation ([PR #5265](https://github.com/zeroclaw-labs/zeroclaw/pull/5265)), are marked as needing author action to address review feedback and move forward.

</details>