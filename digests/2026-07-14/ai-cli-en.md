# AI CLI Tools Community Digest 2026-07-14

> Generated: 2026-07-13 22:15 UTC | Tools covered: 9

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

Here is the cross-tool comparison report for the AI CLI ecosystem based on the July 14, 2026 community digests.

### 1. Ecosystem Overview
The AI CLI tooling landscape in mid-2026 is characterized by a rapid transition from simple conversational interfaces to complex, multi-agent execution environments. Tools are aggressively integrating next-generation foundation models (e.g., GPT-5.6, DeepSeek V4, Kimi K2.7) while grappling with the architectural overhead they introduce, specifically regarding context window management and token compaction. There is a strong, ecosystem-wide push towards standardizing IDE integration via the Agent Client Protocol (ACP) and Model Context Protocol (MCP), moving CLI tools into centralized daemon processes. Consequently, developer friction has shifted from basic model reasoning capabilities to local infrastructure constraints, such as OS-level sandboxing conflicts, subagent state management, and UI latency.

### 2. Activity Comparison
*Note: The following metrics are based on the explicit issues and PRs tracked in today's (July 14, 2026) community digests.*

| Tool | Issues Tracked (24h) | PRs Tracked (24h) | Release Status | Primary Focus Area |
| :--- | :---: | :---: | :--- | :--- |
| **Claude Code** | 10 | 3 | No new releases | Subagent reliability, security hooks |
| **OpenAI Codex** | 10 | 10 | `0.144.3` & `0.145.0-alpha.7` | Windows sandbox stability, context refactoring |
| **Gemini CLI** | 10 | 10 | Nightly (`v0.52.0`) | Agent loop stability, async I/O performance |
| **Copilot CLI** | 10 | 0 | No new releases | OS integration bugs, JSON observability |
| **Kimi Code CLI** | 2 | 9 | No new releases | ACP parity, dynamic context budgeting |
| **OpenCode** | 10 | 10 | `v1.17.19` & `v1.17.20` | GPT-5.6 support, V2 TUI development |
| **Pi (pi-mono)** | 10 | 10 | No new releases | Context compaction UX, provider compatibility |
| **Qwen Code** | 10 | 10 | Desktop `v0.0.5` | Daemon mode (`qwen serve`), ACP compliance |
| **DeepSeek TUI** | 6 | 8 | Pre-release (`v0.8.68`) | Provider schema fixes, versioned agent receipts |

### 3. Shared Feature Directions
*   **Context Compaction & Lifecycle Management:** Almost every tool is battling the complexity of massive context windows. **Pi**, **OpenAI Codex**, and **OpenCode** are actively refactoring compaction logic to prevent silent data loss, UI blocking, or infinite loops. **Gemini CLI** and **Pi** are specifically trying to move compaction to background or post-execution processes to keep the terminal responsive.
*   **Standardized Agent & IDE Protocols (ACP/MCP):** Tools are moving away from monolithic designs toward daemon architectures that serve IDEs. **Qwen Code** and **Kimi Code CLI** are heavily focused on Agent Client Protocol (ACP) compliance to support editors like Zed and JetBrains natively. Meanwhile, **OpenAI Codex** is treating its apps as HTTP MCP servers, and **Claude Code** is fixing MCP payload bugs.
*   **Subagent Orchestration & Reliability:** Developers want reliable background agents, but tools are struggling with execution loops. **Claude Code**, **Gemini CLI**, **Qwen Code**, and **Copilot CLI** all report critical bugs where subagents hang infinitely, consume catastrophic amounts of RAM, or report false "success" statuses when hitting turn limits.
*   **Next-Gen Model Support (GPT-5.6 & DeepSeek V4):** **OpenCode**, **Pi**, and **OpenAI Codex** are aggressively merging patches to support GPT-5.6 (Sol, Luna, Terra) and DeepSeek V4, addressing strict tool-calling constraints, reasoning content drops, and OAuth integration.

### 4. Differentiation Analysis
*   **Architectural Approaches:** **OpenAI Codex** and **Gemini CLI** are undergoing deep architectural refactoring (e.g., moving state to `StepContext` or time-budgeting recursive reasoning). In contrast, **Qwen Code** and **Kimi Code CLI** are focused on external-facing parity—building daemon modes (`qwen serve`) and respecting competitor config files (`CLAUDE.md`) to lower switching barriers.
*   **Target Environments:** **OpenAI Codex** and **Copilot CLI** are battling heavily with Windows desktop environments, fighting OS-level security features like Smart App Control and ACL permissions. **OpenCode** is targeting enterprise users with monorepo support and Azure/AWS integrations, while **DeepSeek TUI** caters to niche power users, focusing on BSD/NetBSD compatibility and highly customized terminal UI experiences.
*   **Security vs. Autonomy:** **Claude Code** is tightening security boundaries (fixing `bypassPermissions` overrides and sandbox network constraints), whereas **Gemini CLI** is building zero-dependency OS sandboxes to allow agents unhindered use of POSIX tools. **Qwen Code** is attempting to implement automated background workflows (`/goal` command) that persist in IM channels.

### 5. Community Momentum & Maturity
*   **High Momentum & Rapid Iteration:** **OpenAI Codex**, **Gemini CLI**, **OpenCode**, and **Qwen Code** show the highest velocity, each tracking 10 active PRs and shipping nightly or bi-daily releases. They are actively dismantling legacy architectures to support multi-agent systems.
*   **Maturity & Stability Focus:** **Claude Code** and **Copilot CLI** appear to be in a stabilization phase, with today’s digests highlighting zero new releases and communities heavily focused on patching UI friction, OS regressions, and memory leaks rather than shipping net-new features.
*   **Niche / Emerging Ecosystems:** **Pi**, **Kimi Code CLI**, and **DeepSeek TUI** show highly focused community activity. **Pi** acts as a crucial polyglot wrapper, rapidly patching integration issues for new models. **Kimi** and **DeepSeek** are aggressively expanding their market share by ensuring compatibility with standard protocols (ACP/MCP) and popular IDEs.

### 6. Trend Signals
*   **Compaction is the New Memory Management:** As models natively support 1M+ token contexts, the new bottleneck is how tools compress and retain that history. Buggy compaction leads to broken sessions, drained API budgets, and lost code. Vendors must prioritize transparent, predictable context summarization.
*   **The Death of the Single-Process CLI:** The transition from local executables to network-accessible daemons (e.g., `qwen serve`) standardizes how IDEs interact with AI. Developers building custom workflows should prioritize ACP/MCP compliance over hardcoding to specific CLI tools.
*   **Cross-Platform Tooling is Fractured:** Despite the maturity of AI models, foundational CLI execution remains brittle. Windows sandboxing/antivirus conflicts, Linux Snap clipboard restrictions, and macOS Dock spam are persistent friction points that degrade trust in autonomous workflows.
*   **Cost Attribution in Agentic Loops:** As multi-agent architectures become standard, developers are demanding granular telemetry (e.g., Copilot CLI’s request for JSON cost metrics, DeepSeek TUI’s versioned exec receipts) to track how background subagents consume premium API quotas.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the technical analysis report for the Claude Code Skills ecosystem based on recent community activity.

### 1. Top Skills Ranking & Discussion Highlights
While the dataset's comment counts were obfuscated, cross-referencing PR activity with the most active community Issues reveals the following high-attention Skills and submissions:

*   **skill-creator (Meta-Skill Ecosystem)** 
    *   **Functionality:** The foundational tool used by the community to author, validate, and optimize new Skills.
    *   **Discussion Highlights:** This area is currently generating the most noise. Multiple PRs ([#1298](https://github.com/anthropics/skills/pull/1298), [#1323](https://github.com/anthropics/skills/pull/1323), [#1099](https://github.com/anthropics/skills/pull/1099)) and Issues ([#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169)) highlight severe Windows compatibility bugs (`PATHEXT`, encoding) and a broken evaluation loop (`run_eval.py`) that paralyzes Skill creation by reporting `recall=0%`.
*   **document-skills (ODT, PDF, DOCX)** 
    *   **Functionality:** Parsing, creating, and formatting complex document formats. 
    *   **Discussion Highlights:** PRs like [#486 (ODT support)](https://github.com/anthropics/skills/pull/486) and [#514 (Typography)](https://github.com/anthropics/skills/pull/514) are highly requested. However, the ecosystem is currently plagued by namespace and duplication issues, as noted in [Issue #189](https://github.com/anthropics/skills/issues/189) where identical content is being installed across different plugin paths.
*   **self-audit / Reasoning Quality Gate** 
    *   **Functionality:** A mechanical verification and reasoning audit executed before an AI delivers its final output. 
    *   **Discussion Highlights:** Proposed in [PR #1367](https://github.com/anthropics/skills/pull/1367) and [Issue #1385](https://github.com/anthropics/skills/issues/1385), this meta-skill aims to solve AI hallucinations by verifying claimed output files exist before completing a task, drawing significant community interest for system reliability.
*   **Skill Validation & Security Analyzers** 
    *   **Functionality:** Pre-parse validation for YAML structures and security trust-boundary checks.
    *   **Discussion Highlights:** PRs like [#539](https://github.com/anthropics/skills/pull/539) and [#361](https://github.com/anthropics/skills/pull/361) fix silent parsing failures, while [Issue #492](https://github.com/anthropics/skills/issues/492) raises critical alarms about malicious actors using the `anthropic/` namespace to phish users.

### 2. Community Demand Trends
Based on the open Issues, the community is pushing for expansion in four key directions:

*   **Enterprise & Governance:** Strong demand for organizational-level controls. Users want agent governance patterns ([Issue #412](https://github.com/anthropics/skills/issues/412)), secure handling of SharePoint documents ([Issue #1175](https://github.com/anthropics/skills/issues/1175)), and org-wide Skill sharing capabilities ([Issue #228](https://github.com/anthropics/skills/issues/228)).
*   **Ecosystem Security & Trust:** Following the namespace spoofing discovery ([Issue #492](https://github.com/anthropics/skills/issues/492)), there is a massive push for cryptographic signing or stricter namespace isolation to distinguish official Anthropic Skills from community submissions.
*   **AI Self-Regulation & Memory Optimization:** Users want Claude to manage its own context better. Proposals like the *compact-memory* skill ([Issue #1329](https://github.com/anthropics/skills/issues/1329)) and *self-audit* pipelines aim to reduce token bloat and enforce pre-delivery quality gates.
*   **Cloud Provider Portability:** Developers are actively requesting clear pathways to use Skills outside of native Anthropic APIs, specifically asking for AWS Bedrock compatibility ([Issue #29](https://github.com/anthropics/skills/issues/29)) and MCP (Model Context Protocol) integrations ([Issue #16](https://github.com/anthropics/skills/issues/16)).

### 3. High-Potential Pending Skills
These PRs address critical pain points and have a high likelihood of merging soon based on their technical necessity:

*   **[PR #1298](https://github.com/anthropics/skills/pull/1298): fix(skill-creator) recall & Windows stream reading**
    *   *Why it's close:* It comprehensively addresses the #1 blocker in the ecosystem right now ([Issue #556](https://github.com/anthropics/skills/issues/556)). By fixing the 0% recall bug and parallel worker file collisions, it unblocks the entire Skill creation pipeline.
*   **[PR #539](https://github.com/anthropics/skills/pull/539) & [PR #361](https://github.com/anthropics/skills/pull/361): YAML validation for special characters**
    *   *Why it's close:* Both PRs elegantly solve a silent failure issue where unquoted colons or brackets in `SKILL.md` descriptions break the YAML parser. This is a fundamental stability fix for the marketplace.
*   **[PR #1367](https://github.com/anthropics/skills/pull/1367): self-audit skill**
    *   *Why it's close:* It provides a universal, tech-stack-agnostic way to verify file existence and reasoning quality, directly answering the community's call for more reliable agent outputs.
*   **[PR #509](https://github.com/anthropics/skills/pull/509): docs: add CONTRIBUTING.md**
    *   *Why it's close:* The repository currently scores poorly (25%) on GitHub community health metrics. Merging this standardizes community submissions and sets clear guidelines.

### 4. Skills Ecosystem Insight
**One-sentence summary:** The community's most concentrated demand is shifting from creating domain-specific document skills toward establishing **trust, security, and cross-platform stability** (specifically Windows support and YAML validation) within the Skill-creator infrastructure itself.

---

Here is the Claude Code community digest for July 14, 2026.

### 1. Today's Highlights
No new releases or core application updates were rolled out in the last 24 hours. However, the community remained highly active, with heavy focus on patching plugin behaviors and fixing the `hookify` utility via community pull requests. Meanwhile, significant friction continues to surround subagent reliability, memory management, and sandbox network constraints.

### 2. Releases
*No new releases or version updates were recorded in the last 24 hours.*

### 3. Hot Issues
*   **Windows OAuth Authentication Timeout** ([#33238](https://github.com/anthropics/claude-code/issues/33238)): A critical, long-standing bug where `auth.anthropic.com` fails to resolve via DNS on Windows, making authentication impossible. It continues to gain heavy community traction (150 comments, 44 upvotes).
*   **OOM Crashes Under Multi-Subagent Load** ([#74001](https://github.com/anthropics/claude-code/issues/74001)): On Linux, spawning 5-7 background agents causes individual CLI processes to balloon to ~6.5 GB RAM each, resulting in kernel OOM-killer terminations due to the `CliGovernor` failing to evict them.
*   **Silent Data Loss in Nested TUI Sessions** ([#67603](https://github.com/anthropics/claude-code/issues/67603)): A regression where TUI sessions spawned under ConPTY (inside IDEs/electron apps) stop writing transcript records. This silently breaks session history and breaks the `--resume` functionality.
*   **Sandbox Blocks Localhost Connections** ([#28018](https://github.com/anthropics/claude-code/issues/28018): A highly requested enhancement (67 upvotes) to allow outbound TCP connections to `localhost`/`127.0.0.1`. Currently, the sandbox blocks this, crippling local Docker integration testing.
*   **GitHub MCP Malformed JSON-RPC Payload** ([#64654](https://github.com/anthropics/claude-code/issues/64654)): The GitHub MCP plugin consistently fails with an HTTP 400 error due to a missing version tag in the payload (41 upvotes). 
*   **Edit Tool Converts Tabs to Spaces** ([#26996](https://github.com/anthropics/claude-code/issues/26996)): The Edit tool silently converts tabs to spaces, resulting in repeated match failures when interacting with tab-indented files.
*   **File Picker `.ignore` Regressions** ([#30176](https://github.com/anthropics/claude-code/issues/30176) & [#14904](https://github.com/anthropics/claude-code/issues/14904)): Two active bug reports highlight that both `.ignore` and `.gitignore` files are actively disregarded by the Claude Code file picker, flooding the context with unintended files.
*   **`bypassPermissions` Overrides PreToolUse "ask"** ([#77212](https://github.com/anthropics/claude-code/issues/77212)): A critical security pain point where `PreToolUse` hooks configured to prompt the user ("ask") are silently auto-approved if the session runs in `bypassPermissions` mode. 
*   **Nested Subagents Fail on Resume** ([#75043](https://github.com/anthropics/claude-code/issues/75043)): Child agents spawned by orchestrator subagents default to async, break communication with the parent, and throw `TaskStop` ownership errors after a session resume.
*   **Post-Compaction Session Breakage** ([#60523](https://github.com/anthropics/claude-code/issues/60523)): A deep-dive root cause analysis showing that `advisor()` breaks sessions after compaction due to a `parentUuid` tree mismatch, causing widespread `--resume` failures.

### 4. Key PR Progress
*Note: Only 3 Pull Requests were updated in the last 24 hours, all targeting the `hookify` plugin and documentation.*
*   **[PR #77292](https://github.com/anthropics/claude-code/pull/77292):** Fixes a documentation mismatch where plugin READMEs referenced incorrect marketplace names, causing manual installation commands to fail.
*   **[PR #77289](https://github.com/anthropics/claude-code/pull/77289):** Resolves a Windows-specific bug in the `hookify` plugin where UTF-8 encoding and prompt field mapping issues caused `UserPromptSubmit` rules to fail silently.
*   **[PR #77260](https://github.com/anthropics/claude-code/pull/77260):** Enhances the `hookify` plugin by mapping simple prompt rules to `UserPromptSubmit` payloads and ensuring file rules properly inspect text passed to the `Write` tool. Adds regression tests for Edit, Write, and prompt rules.

### 5. Feature Request Trends
*   **Advanced Subagent Configuration:** Developers want granular control over multi-agent setups, specifically per-agent model provider routing (e.g., local Ollama for subagents, Anthropic for orchestrators) ([#38698](https://github.com/anthropics/claude-code/issues/38698)).
*   **Desktop UI Customization:** Strong demand for UI adjustments in the desktop app, particularly manual reordering of sidebar groups ([#72126](https://github.com/anthropics/claude-code/issues/72126)) and adjustable font sizes for the Code tab ([#48237](https://github.com/anthropics/claude-code/issues/48237)).
*   **Automated Lifecycle Management:** Requests for automatic cleanup of older CLI versions during the update process to prevent disk bloat on Linux systems ([#77294](https://github.com/anthropics/claude-code/issues/77294)).

### 6. Developer Pain Points
*   **Windows Instability:** Windows users continue to face an uphill battle, from severe DNS resolution failures during OAuth ([#33238](https://github.com/anthropics/claude-code/issues/33238)) to broken Cowork project context mounting ([#76187](https://github.com/anthropics/claude-code/issues/76187)).
*   **Subagent Resource Consumption:** Background agents are leaking memory massively, causing system instability and kernel OOM kills even on high-spec Linux machines ([#74001](https://github.com/anthropics/claude-code/issues/74001)).
*   **Fragile Session State and `--resume` Failures:** Developers are consistently frustrated by transcript data loss ([#67603](https://github.com/anthropics/claude-code/issues/67603)) and state corruption during context compaction ([#60523](https://github.com/anthropics/claude-code/issues/60523)), making session resumption highly unreliable.
*   **Sandbox Rigidness:** The network sandbox is currently too restrictive for modern local-first development, actively blocking connections to local Docker containers and local databases ([#28018](https://github.com/anthropics/claude-code/issues/28018)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for July 14, 2026.

### 1. Today's Highlights
The Codex team rolled out version `0.144.3` alongside a new `0.145.0-alpha.7`, focusing heavily on backend stability, Windows sandbox optimizations, and architectural refactoring of context handling. While several high-severity regressions—such as the GPT-5.6 context truncation—were swiftly addressed and closed, the community remains highly vocal regarding persistent Windows desktop performance issues and missing rate-limit resets.

### 2. Releases
*   **[rust-v0.144.3](https://github.com/openai/codex/releases/tag/rust-v0.144.3)**: A chore release containing no new merged PR changes, serving as a version bump following `0.144.2`.
*   **[rust-v0.144.2](https://github.com/openai/codex/releases/tag/rust-v0.144.2)**: Implemented crucial bug fixes, specifically reverting a prompting regression that affected the Guardian auto-review policy, request formats, and tool behavior ([PR #32672](https://github.com/openai/codex/pull/32672)).
*   **[rust-v0.145.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.7)**: The latest alpha build, paving the way for the next minor version upgrade.

### 3. Hot Issues
*   **[SEVERE REGRESSION] GPT-5.6 Sol context cut again ([#32806](https://github.com/openai/codex/issues/32806))** - *Closed*. A critical bug where `gpt-5.6-sol` context was abruptly cut from 353K to 258K instead of the advertised 1.05M. This garnered significant community attention due to its impact on complex agentic workflows but was quickly resolved.
*   **Codex Desktop freezes/stutters on Windows 11 ([#20214](https://github.com/openai/codex/issues/20214))** - *Open*. Despite having sufficient system resources (AMD Ryzen 5, 32GB RAM), the Windows app continues to suffer from severe performance issues. It remains highly upvoted (48 👍), indicating a widespread problem.
*   **Codex Desktop project chat histories disappeared ([#20741](https://github.com/openai/codex/issues/20741))** - *Open*. An ongoing macOS-specific bug where recent updates wipe out local project histories. Users on high-end machines (M5 Max) report persistent data loss.
*   **Infinite auto-compaction loop consumes usage limits ([#31351](https://github.com/openai/codex/issues/31351))** - *Open*. A critical flaw where the app gets stuck compacting a resumed conversation, rapidly burning through ~30% of the user's usage limit.
*   **GPT-5.5 forces MultiAgentV2 despite being disabled ([#31097](https://github.com/openai/codex/issues/31097))** - *Open*. Developers are frustrated that GPT-5.5 overrides local configuration flags to force MultiAgentV2, while simultaneously hiding documented custom-agent controls.
*   **Windows sandbox breaks `.git` directories in `writable_roots` ([#18918](https://github.com/openai/codex/issues/18918))** - *Open*. A long-standing Windows issue where the sandbox applies DENY ACLs to `.git` folders, entirely breaking the ability to make git commits.
*   **Codex CLI 0.143.0 `shell_command` failure ([#31639](https://github.com/openai/codex/issues/31639))** - *Closed*. A prominent bug on Windows 11 where every shell call failed with `unsupported call: shell_commandshell_command`.
*   **Antivirus false positives halting workflows ([#32331](https://github.com/openai/codex/issues/32331), [#31419](https://github.com/openai/codex/issues/31419))** - *Open*. Windows Defender and Norton 360 are repeatedly flagging Codex's unsigned executables (like `codex-computer-use.exe`) as Trojans, disrupting normal operations. 
*   **Codex IDE extension fails over VS Code Remote-SSH ([#26951](https://github.com/openai/codex/issues/26951))** - *Open*. A frustrating connectivity issue where the IDE extension gets stuck loading over SSH, even though the local CLI operates normally.
*   **Missing bankable reset credits ([#30726](https://github.com/openai/codex/issues/30726))** - *Open*. Multiple Pro and Plus users report never receiving the banked rate-limit resets promised by OpenAI, severely bottlenecking their testing.

### 4. Key PR Progress
*   **[PR #32875](https://github.com/openai/codex/pull/32875): Use model catalog policies for Guardian auto review**. Improves Guardian prompt adherence by introducing an `auto_review.policy` field, ensuring better policy config fallbacks during automated code reviews.
*   **[PR #32881](https://github.com/openai/codex/pull/32881): Broaden remote compaction model fallback**. Fixes an issue where resuming a conversation would fail if the previous model was deprecated or removed, making compaction much more resilient.
*   **[PR #32864](https://github.com/openai/codex/pull/32864): Coalesce concurrent Windows sandbox setup requests**. Optimizes Windows performance by deduplicating identical sandbox setup payloads that are triggered concurrently, reducing system overhead.
*   **[PR #30000](https://github.com/openai/codex/pull/30000): Prototype Codex Apps as virtual HTTP MCP servers**. A massive architectural shift proposing that Codex Apps be treated as ordinary HTTP MCP servers outside the core, unifying how tools are discovered and executed.
*   **[PR #31437](https://github.com/openai/codex/pull/31437): Require elevated-only Windows policy for network proxies**. Fixes an annoyance where network proxies would unexpectedly trigger Windows UAC prompts, ensuring backend selection respects the configured sandbox level.
*   **[PR #31443](https://github.com/openai/codex/pull/31443): Retry transient Codex Apps connector omissions**. Adds client-side resilience by retrying `tools/list` responses to prevent active plugin connectors from disappearing from the cache.
*   **[PR #31737](https://github.com/openai/codex/pull/31737) (Parts 1-5): Step Context Refactoring**. A massive 5-part architectural overhaul moving reasoning effort and request-scoped state out of the long-lived `TurnContext` and into `StepContext`, preventing asynchronous tasks from using stale snapshots.
*   **[PR #32866](https://github.com/openai/codex/pull/32866): Allow responses after image generation**. Removes the strict instruction that prohibited LLM text responses immediately following image outputs.
*   **[PR #31890](https://github.com/openai/codex/pull/31890): Package code mode host as a managed resource**. Fixes fragile runtime crashes by treating `codex-code-mode-host` as a managed dependency rather than relying on install-specific entrypoint paths.
*   **[PR #30120](https://github.com/openai/codex/pull/30120): Enforce deny-read during command escalation**. Enhances security boundaries by ensuring administrator-defined `deny-read` rules remain active even when a command is escalated, without fully bypassing the sandbox.

### 5. Feature Request Trends
While bug fixes dominated the tracker, underlying feature requests and architectural expectations are clear:
*   **Robust Remote Development Support**: Users heavily desire a flawless VS Code Remote-SSH experience, pushing for the IDE extension to achieve the same stability as the local CLI.
*   **Granular Agent Configuration**: Developers want strict adherence to local config files, specifically requesting the ability to reliably disable features like `MultiAgentV2` and easily access custom-agent controls.
*   **Persistent Context Usage Limits**: A strong demand for the fulfillment of "bankable" rate-limit resets so developers can safely pause work without losing allocated compute time.
*   **Seamless Browser Automation**: Requests to harden the Chrome plugin to handle complex tasks (like file uploads and authenticated forms) without hanging or failing due to code-signing identity errors.

### 6. Developer Pain Points
*   **Windows App Instability**: The Codex Desktop app on Windows 10/11 is currently the largest source of friction. Users report massive memory leaks, UI stuttering, and stuck `git.exe` polling processes that severely degrade system performance.
*   **Sandbox Conflicts with Windows Security**: The local Windows Sandbox feature constantly clashes with Smart App Control, Norton 360, and Windows Defender. Unsigned executables and denied `.git` ACLs are actively blocking standard development workflows.
*   **Context and Compaction Failures**: High-tier subscribers (Pro x20) are experiencing catastrophic context truncation (the 1M context drop) and infinite auto-compaction loops, which not only break agent trains of thought but burn through expensive usage quotas.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for July 14, 2026.

### 1. Today's Highlights
The Gemini CLI ecosystem is heavily focused this cycle on hardening agent reliability, specifically targeting subagent execution loops, memory systems, and shell tool performance. A new nightly build was shipped to clarify Code Assist tier messaging, while the community and core maintainers submitted massive structural fixes to prevent infinite agent hangs, secure local environments, and eliminate UI stuttering.

### 2. Releases
*   **[v0.52.0-nightly.20260713](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260710.ga4c91ce19...v0.52.0-nightly.20260713.gf354eebaf)**
    *   **Privacy Fix:** Introduced a clear message when an account lacks a Code Assist tier, preventing silent failures and confusion during authentication and usage limits.

### 3. Hot Issues
*   **[Subagent recovery after MAX_TURNS is reported as GOAL success (#22323)](https://github.com/google-gemini/gemini-cli/issues/22323)** - A critical reliability bug where the `codebase_investigator` subagent reports a successful "GOAL" completion even after hitting its max turn limit without doing any actual analysis. This misleads the primary agent.
*   **[Generalist agent hangs (#21409)](https://github.com/google-gemini/gemini-cli/issues/21409)** - A high-impact issue (8 👍) where deferring to the generalist agent causes infinite hangs on simple operations like folder creation. Users are forced to explicitly disable subagents to maintain functionality.
*   **[Gemini does not use skills and sub-agents enough (#21968)](https://github.com/google-gemini/gemini-cli/issues/21968)** - Developers report that despite defining clear descriptions for custom skills (like Gradle or Git), the model rarely triggers them autonomously, requiring explicit user prompting.
*   **[Stop Auto Memory from retrying low-signal sessions indefinitely (#26522)](https://github.com/google-gemini/gemini-cli/issues/26522)** - Auto Memory constantly re-surfaces low-signal sessions because the extraction agent skips reading them, leaving them permanently marked as unprocessed.
*   **[Shell command execution gets stuck with "Waiting input" (#25166)](https://github.com/google-gemini/gemini-cli/issues/25166)** - Shell execution frequently hangs on simple commands, displaying an "Awaiting user input" state even after the underlying process has securely terminated.
*   **[Robust component level evaluations (#24353)](https://github.com/google-gemini/gemini-cli/issues/24353)** - Maintainers are scaling up behavioral evals (currently 76 tests across 6 Gemini models) to systematically catch regressions in agent behaviors.
*   **[Add deterministic redaction and reduce Auto Memory logging (#26525)](https://github.com/google-gemini/gemini-cli/issues/26525)** - A major security/privacy concern where Auto Memory reads local transcripts and sends them to the extraction model *before* secrets are redacted. 
*   **[Gemini CLI encounters 400 error with > 128 tools (#24246)](https://github.com/google-gemini/gemini-cli/issues/24246)** - Hitting a hard API limit when over 128 MCP tools are installed. The CLI needs better dynamic scoping or tool-limit management.
*   **[Browser Agent ignores settings.json overrides (#22267)](https://github.com/google-gemini/gemini-cli/issues/22267)** - Configuration overrides like `maxTurns` are being ignored by the Browser Agent, breaking automated workflows.
*   **[Agent should stop/discourage destructive behavior (#22672)](https://github.com/google-gemini/gemini-cli/issues/22672)** - Users request stronger guardrails after observing the model executing dangerous commands like `git reset --force` when safer alternatives exist.

### 4. Key PR Progress
*   **[PR #28164: fix(core): limit recursive reasoning turns per single user request](https://github.com/google-gemini/gemini-cli/pull/28164)** - Implements a strict limit (15 turns) on recursive reasoning per user request to protect local CPU resources and API quotas from infinite loops.
*   **[PR #28389: fix(core): add real-world time budget to prevent infinite-loop event-driven agent state transitions](https://github.com/google-gemini/gemini-cli/pull/28389)** - Introduces a shared deadline (`sendMessageStream`) to forcibly terminate agent state transitions that fall into infinite event-driven loops.
*   **[PR #28397: fix(core): remove synchronous I/O from shell tool critical path](https://github.com/google-gemini/gemini-cli/pull/28397)** - Replaces blocking `fs.existsSync` and `fs.statSync` calls in the shell tool with async `node:fs/promises`, directly resolving React Ink terminal UI stuttering.
*   **[PR #28388: fix(core): scope tools.core wildcard deny to built-in tools](https://github.com/google-gemini/gemini-cli/pull/28388)** - Fixes a severe bug where using a wildcard `DENY` rule for `tools.core` accidentally disabled all MCP tools.
*   **[PR #28394: fix(core): remove temp files on background process exit](https://github.com/google-gemini/gemini-cli/pull/28394)** - Fixes a resource leak where temporary directories were permanently left behind in the host OS temp folder during background shell execution.
*   **[PR #28387: fix(cli): guard customDeepMerge against circular references](https://github.com/google-gemini/gemini-cli/pull/28387)** - Prevents the settings manager from crashing via unbounded recursion when parsing configuration objects with circular references.
*   **[PR #28319: refactor(a2a-server): enforce path trust check prior to environment loading](https://github.com/google-gemini/gemini-cli/pull/28319)** - Security update ensuring workspace path trust checks execute *before* workspace-level environment variables are loaded via `AsyncLocalStorage`.
*   **[PR #28316: fix(a2a-server): ensure task cancellation aborts execution loop](https://github.com/google-gemini/gemini-cli/pull/28316)** - Eradicates "ghost executions" in Agent-to-Agent mode by ensuring stream termination when a user cancels a task. 
*   **[PR #28391: fix(core): enrich shared project quota limit errors with setup hint](https://github.com/google-gemini/gemini-cli/pull/28391)** - Improves DX by appending actionable troubleshooting hints to HTTP 429 `RESOURCE_EXHAUSTED` errors.
*   **[PR #28256: fix(core): add /nix/store to trusted system paths](https://github.com/google-gemini/gemini-cli/pull/28256)** - Adds `/nix/store` to the hardcoded trust allowlist, fixing untrusted binary errors for Ripgrep and other tools for NixOS/darwin users.

### 5. Feature Request Trends
*   **Advanced Codebase Mapping (AST-aware):** Strong demand for AST-aware file reads and navigation. Users want the agent to parse method bounds natively to reduce token noise and prevent misaligned reads, potentially integrating tools like `tilth` or `glyph` (Issue #22745).
*   **Zero-Dependency OS Sandboxing:** As Gemini models natively prefer chaining POSIX tools (`grep`, `sed`, `awk`), there is a major push to build a zero-dependency OS sandbox paired with post-execution intent routing to allow safe, unhindered bash usage (Issue #19873).
*   **Subagent Trajectory Visibility:** Developers need better debugging tools, specifically requesting that subagent thought processes and trajectories be natively viewable via `/chat share` (Issue #22598).
*   **Agent Self-Awareness:** Requests to fine-tune the agent's understanding of its own CLI flags, mechanics, and hotkeys so it can guide users without hallucinating its own capabilities (Issue #21432).

### 6. Developer Pain Points
Developers are currently experiencing significant friction around **agent loop stability**. Frequent infinite hangs during subagent deferrals, coupled with false "success" statuses when max turns are hit, make orchestrating complex tasks unreliable. Furthermore, **terminal UI performance** is a major frustration, with background processes leaking temp files and synchronous file I/O causing severe screen flickering and input latency. Finally, **tool configuration limits** remain an overarching pain point; hitting hard API limits errors (>128 tools) and having MCP tools accidentally wiped out by global wildcard rules severely disrupts advanced workflow setups.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for July 14, 2026.

### 1. Today's Highlights
The past 24 hours show no new releases or merged Pull Requests, but the community has been highly active in reporting edge cases across Linux environments, multi-agent orchestration, and IDE/UI interference. A significant portion of the open issues highlights regressions in OS-level integrations—such as snap package clipboard failures and macOS Dock spam—and a strong demand for better observability and control over background subagents. 

### 2. Releases
*No new releases or pre-releases were published in the last 24 hours.*

### 3. Hot Issues
Here are the 10 most impactful issues updated or created in the last 24 hours:

*   **[#2082] [OPEN] ctrl+shift+c no longer copies to clipboard on Linux**
    *Why it matters:* A highly upvoted (👍 11) and active (23 comments) ongoing issue. Breaking standard terminal copy/paste shortcuts heavily degrades the UX for Linux developers. 
    [Link](github/copilot-cli Issue #2082)
*   **[#4102] [OPEN] Native V8 array-length crash during active tool-heavy turns**
    *Why it matters:* A critical, low-level memory crash (V8 abort) triggered during complex agentic turns and session resumes. It poses a significant stability risk for power users running multiple concurrent tasks.
    [Link](github/copilot-cli Issue #4102)
*   **[#4024] [OPEN] Voice mode: all bundled ASR models fail silently**
    *Why it matters:* Voice mode is completely broken due to a `MultiModalProcessor` routing bug in Foundry Local Core. The UI shows audio capture, but transcription silently returns empty data across all available models.
    [Link](github/copilot-cli Issue #4024)
*   **[#4096] [OPEN] Third-party MCP server tools missing from CLI sessions**
    *Why it matters:* OAuth tokens for MCP servers (like Atlassian) are successfully authenticated in the main app but fail to bridge to spawned CLI sessions. This breaks critical agentic workflows relying on external tool integrations.
    [Link](github/copilot-cli Issue #4096)
*   **[#2881] [OPEN] Autopilot mode enters infinite loop, draining premium requests**
    *Why it matters:* A high-severity bug where autopilot mode gets stuck printing `● Continuing autonomously` without making progress. This continuously drains paid premium API requests until the user force-stops the process.
    [Link](github/copilot-cli Issue #2881)
*   **[#4110] [OPEN] ctrl+x → b fails to background a blocking `read_bash` call**
    *Why it matters:* Users have no escape hatch to background/interrupt the agent when it is blocked inside an async shell polling command, causing the terminal UI to freeze indefinitely.
    [Link](github/copilot-cli Issue #4110)
*   **[#4107] [OPEN] `--output-format json` omits token/cost usage**
    *Why it matters:* Critical for CI/CD and observability. The JSON terminal output lacks the detailed token count and cost metrics that internal OTel (OpenTelemetry) exposes, making it hard to track usage programmatically.
    [Link](github/copilot-cli Issue #4107)
*   **[#4109] [OPEN] `/copy` fails with "Connection refused" on Linux snap**
    *Why it matters:* A packaging bug. The snap distribution of Copilot CLI is missing the required x11/wayland plug, rendering the clipboard completely inaccessible to the application.
    [Link](github/copilot-cli Issue #4109)
*   **[#4108] [OPEN] Python appears in macOS Dock when Copilot CLI starts LSP servers**
    *Why it matters:* Background Python LSP (Language Server Protocol) processes are registering as GUI apps. This disrupts the terminal-first experience by spamming the macOS Dock with persistent Python icons.
    [Link](github/copilot-cli Issue #4108)
*   **[#4101] [OPEN] `write_agent` may block until background agent starts processing**
    *Why it matters:* Asynchronous agent delegation is currently bottlenecked. Sending a message to an idle background agent blocks the main thread, queuing new user inputs instead of returning control immediately.
    [Link](github/copilot-cli Issue #4101)

### 4. Key PR Progress
*There were no Pull Requests updated, opened, or merged in the last 24 hours.*

### 5. Feature Request Trends
*   **Advanced Subagent Orchestration via CLI:** Developers want granular control over background agents directly from the command line. Requests include adding `--subagent <name>` flags for non-interactive runs ([#4058](github/copilot-cli Issue #4058)) and preventing `write_agent` from blocking user input ([#4101](github/copilot-cli Issue #4101)).
*   **Enhanced Non-Interactive Observability:** Programmatic users are requesting better telemetry for CI/CD pipelines, specifically asking for exact token counts and cost tracking to be included in the JSON output format ([#4107](github/copilot-cli Issue #4070)).
*   **ACP Identity Preservation:** As parallel agent execution grows, there is a distinct need to preserve source identity in Agent Communication Protocol (ACP) streams, rather than flattening subagent outputs into the parent stream ([#4106](github/copilot-cli Issue #4106)).
*   **Clear UI for Extended Context Pricing:** Users are requesting better keyboard navigation and transparency in the `/models` overlay to view extended context (1M token) pricing sheets ([#4059](github/copilot-cli Issue #4059)).

### 6. Developer Pain Points
*   **Linux Environment Regressions:** Linux users are facing multiple systemic friction points. From broken copy/paste shortcuts ([#2082](github/copilot-cli Issue #2082)) and snap-package clipboard restrictions ([#4109](github/copilot-cli Issue #4109)) to input blocking on bash tooling ([#4110](github/copilot-cli Issue #4110)), the terminal integration experience on Linux is currently highly brittle.
*   **Agent Runaway & State Management:** Developers are frustrated by losing control of automated agents. Infinite loops that drain paid premium requests ([#2881](github/copilot-cli Issue #2881)) and UI bugs where plan mode stealthily disables itself ([#1272](github/copilot-cli Issue #1272)) severely degrade trust in autonomous workflows.
*   **OS-Level UI Leakage:** Background processes bleeding into the host OS—such as Python LSP servers cluttering the macOS Dock ([#4108](github/copilot-cli Issue #4108))—highlight a need for stricter process isolation for headless/CLI-only tools.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-14

## 1. Today's Highlights
The Kimi Code CLI community is actively focused on enhancing enterprise workflow integrations and fixing state management edge cases. A significant portion of recent development centers on fixing Agent Client Protocol (ACP) parity gaps—ensuring IDE clients like Zed and JetBrains have the same capabilities as the interactive CLI. Additionally, contributors are making substantial improvements to context window utilization and agent configuration compatibility.

## 2. Releases
*No new releases in the last 24 hours.*

## 3. Hot Issues
*(2 issues tracked in the last 24h)*

*   **[ACP] Structured questions fail over Agent Client Protocol** ([Issue #2495](https://github.com/MoonshotAI/kimi-cli/issues/2495))
    *   **Why it matters:** When running in ACP server mode (`kimi acp`), `AskUserQuestion` resolves with an empty dict, making interactive structured questions completely unusable for IDE integrations. This blocks agentic workflows in external clients.
*   **[Bug] Resuming forked sessions causes corrupted output** ([Issue #2496](https://github.com/MoonshotAI/kimi-cli/issues/2496))
    *   **Why it matters:** Using `kimi -r` on a forked session results in corrupted output (reported on Windows 10). Session state integrity is critical for complex, long-running development tasks.

## 4. Key PR Progress
*(9 active PRs updated in the last 24h)*

*   **[Context Management] Dynamic completion budgeting** ([PR #2494](https://github.com/MoonshotAI/kimi-cli/pull/2494))
    *   Replaces the fixed 32k provider cap with the remaining model context window for completions. It also introduces `KIMI_MODEL_MAX_COMPLETION_TOKENS` as a new hard cap, greatly improving long-context handling.
*   **[Feature] Support for `CLAUDE.md` discovery** ([PR #2487](https://github.com/MoonshotAI/kimi-cli/pull/2487))
    *   Adds automatic loading of `CLAUDE.md` and `.claude/CLAUDE.md` alongside `AGENTS.md`. This allows seamless migration and interoperability for projects already configured for Claude Code.
*   **[UX] Actionable error for fresh installs** ([PR #2488](https://github.com/MoonshotAI/kimi-cli/pull/2488))
    *   Improves the `LLMNotSet` error message to guide users directly to `kimi login`, smoothing the onboarding experience for Homebrew installs.
*   **[Bugfix] Plan-mode tool bindings restored after `/init`** ([PR #2489](https://github.com/MoonshotAI/kimi-cli/pull/2489))
    *   Fixes a critical state bug where `/init` created a throwaway soul that inadvertently corrupted shared tool instances (like `ExitPlanMode` and `Write`).
*   **[ACP] Load global MCP config in ACP server** ([PR #2490](https://github.com/MoonshotAI/kimi-cli/pull/2490))
    *   Resolves a major parity gap: `kimi acp` now loads globally configured MCP servers, allowing IDE clients (Zed, JetBrains) to utilize custom tools just like the interactive CLI.
*   **[Bugfix] Background agent duration tracking** ([PR #2493](https://github.com/MoonshotAI/kimi-cli/pull/2493))
    *   Fixes a telemetry bug where background *agent* tasks failed to record `started_at`, causing their run duration to be silently lost (background *bash* tasks were unaffected).
*   **[Bugfix] String truncation math corrected** ([PR #2492](https://github.com/MoonshotAI/kimi-cli/pull/2492))
    *   Fixes the `shorten_middle` utility function, which previously failed to account for the 3-character ellipsis, resulting in strings that exceeded the target width.
*   **[UX] Redirect stdio MCP stderr to logs** ([PR #2259](https://github.com/MoonshotAI/kimi-cli/pull/2259))
    *   Cleans up the interactive terminal by routing stdio MCP subprocess stderr directly to `~/.kimi/logs/mcp/<server>.log` instead of flooding the user's screen.
*   **[UX] Adaptive timeouts for shell commands** ([PR #2200](https://github.com/MoonshotAI/kimi-cli/pull/2200))
    *   Intelligently extends the default 60s shell timeout for notoriously slow commands (git operations, package installs, builds), preventing premature task termination.

## 5. Feature Request Trends
*   **IDE & ACP Parity:** Strong emphasis on ensuring feature parity between the CLI and external orchestration tools. Developers want MCP configurations and interactive structural prompts to work identically across Zed, JetBrains, and the terminal.
*   **Ecosystem Interoperability:** Desire for Kimi CLI to natively respect configuration files from competing or complementary tools (e.g., `CLAUDE.md`), making it easier to drop Kimi into existing polyglot tech stacks.
*   **Smarter Resource Allocation:** Requests for dynamic context allocation (utilizing full remaining context windows) rather than relying on arbitrary, fixed token caps.

## 6. Developer Pain Points
*   **Session State Fragility:** State is easily corrupted when performing advanced operations like session forking/resuming, or when initialization commands (`/init`) inadvertently mutate shared tool states.
*   **MCP & CLI Cleanliness:** Dealing with noisy terminals caused by leaking MCP stderr output has been a noted frustration, alongside the need for more intelligent command execution timeouts for heavy build processes.
*   **Opaque Onboarding Errors:** Default error messages (like missing LLM configurations) currently lack actionable guidance, leading to friction for first-time CLI users.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for July 14, 2026.

### 1. Today's Highlights
OpenCode v1.17.19 and v1.17.20 were released, headlined by comprehensive support for the GPT-5.6 model family across Azure AI and OpenAI (including OAuth fixes for Luna Responses Lite). The V2 desktop and TUI continue active development, with contributors merging the `dev` branch into `v2` and submitting numerous UI fixes to improve asynchronous states, optimistic rendering, and theming. Meanwhile, Windows users reported several critical regressions regarding path handling and case-sensitive permission parsing that require attention.

### 2. Releases
*   **[v1.17.20](https://github.com/anomalyco/opencode/releases/tag/v1.17.20)**
    *   **Core:** Removed an obsolete Codex workaround that was interfering with OpenAI Luna Responses Lite requests.
    *   **Improvements:** Updated Azure AI support for the GPT-5.6 family.
*   **[v1.17.19](https://github.com/anomalyco/opencode/releases/tag/v1.17.19)**
    *   **Core:** Added support for OpenAI pro reasoning mode.
    *   **Core:** Disabled response storage by default for xAI Responses.
    *   **Core:** Added OAuth support for Luna Responses Lite and implemented Codex context limits for GPT-5.6.

### 3. Hot Issues
1.  **[#36140](https://github.com/anomalyco/opencode/issues/36140) GPT-5.6 Luna returns model not found with ChatGPT OAuth** *(Closed)*
    The most active issue (101 👍). Users experienced HTTP 404 errors when calling `gpt-5.6-luna` via ChatGPT OAuth. This was addressed in the recent PRs dropping Luna-specific workarounds.
2.  **[#36729](https://github.com/anomalyco/opencode/issues/36729) gpt-5.6-luna still returns Model not found on v1.17.19** *(Closed)*
    A regression follow-up showing that users on v1.17.19 still faced model resolution issues with `gpt-5.6-luna` while using codex-cli as a baseline. 
3.  **[#36211](https://github.com/anomalyco/opencode/issues/36211) [FEATURE]: Support Azure connect with GPT‑5.6 family** *(Closed)*
    Highly requested (9 👍) feature to bring GPT-5.6 models (Sol, Luna, Terra) to Azure connect. This was officially implemented in the v1.17.20 release.
4.  **[#33356](https://github.com/anomalyco/opencode/issues/33356) Unbounded growth of the `event` table** *(Open)*
    A critical performance issue where the local SQLite store (`opencode.db`) grows uncontrollably (reaching 13GB+) on long-lived instances due to un-pruned event-sourcing snapshots.
5.  **[#36280](https://github.com/anomalyco/opencode/issues/36280) Worker subprocess crashes with SIGILL on Intel i5-7200U** *(Open)*
    On older Kaby Lake CPUs, the CLI crashes with an illegal CPU instruction, triggering a recursive crash-handler cascade that exhausts system memory.
6.  **[#36580](https://github.com/anomalyco/opencode/issues/36580) [2.0] tui: MCP server dialogs show an empty list** *(Open)*
    In the upcoming V2 TUI, the MCP server picker and status modal incorrectly report no registered servers, despite `opencode2 mcp list` functioning normally.
7.  **[#36681](https://github.com/anomalyco/opencode/issues/36681) [Bug] Windows path references and permissions on external directories** *(Open)*
    Windows users are unable to configure external directories due to path normalization breaking the configuration schema.
8.  **[#35265](https://github.com/anomalyco/opencode/issues/35265) ResourceExhausted: Worker local total request limit reached** *(Open)*
    Recurring rate-limit exhaustion errors in worker subprocesses that are crashing workflows, with no built-in mitigation currently available.
9.  **[#36605](https://github.com/anomalyco/opencode/issues/36605) [2.0] [FEATURE]: Support cross-location subagents in V2 monorepos** *(Open)*
    A request to enhance OpenCode V2 to allow subagents to operate seamlessly across different locations within a monorepo setup.
10. **[#36764](https://github.com/anomalyco/opencode/issues/36764) Headless `opencode run` @agent mentions don't route** *(Open)*
    In non-interactive headless mode, `@agent` mentions are ignored and silently fall back to the primary agent model, causing unexpected billing and routing side-effects.

### 4. Key PR Progress
1.  **[#36770](https://github.com/anomalyco/opencode/pull/36770) chore: merge dev into v2**
    A massive structural merge combining `dev`'s legacy OpenAI compatibility bridge and V2 UI panels with V2's drag/drop and normalized model catalog.
2.  **[#36745](https://github.com/anomalyco/opencode/pull/36745) fix(core): clamp compaction output budget** *(Closed)*
    Fixes a V2 auto-compaction issue where models advertising large context windows (like Kimi K2.7) would compact after every single step.
3.  **[#36143](https://github.com/anomalyco/opencode/pull/36143) fix(opencode): support GPT-5.6 Responses Lite** *(Closed)*
    Ensures GPT-5.6 Sol, Terra, and Luna models use the correct Responses Lite request contract when authenticating via ChatGPT OAuth.
4.  **[#36759](https://github.com/anomalyco/opencode/pull/36759) fix(tui): distinguish asynchronous UI states**
    Improves V2 TUI UX by giving distinct visual states for loading, loaded-empty, filtered-empty, and failure across selectors and search.
5.  **[#36320](https://github.com/anomalyco/opencode/pull/36320) feat(llm): support GPT-5.6 prompt cache new options**
    Implements specialized prompt caching behavior for GPT-5.6 models while preserving standard behavior for older OpenAI models.
6.  **[#36752](https://github.com/anomalyco/opencode/pull/36752) fix(opencode): read cache write tokens from raw usage**
    Fixes a billing telemetry bug where Anthropic models served via an OpenAI-compatible gateway always reported `cache.write: 0`.
7.  **[#36755](https://github.com/anomalyco/opencode/pull/36755) fix(opencode): add configurable timeout to Task tool**
    Introduces an optional timeout argument to the Task tool, preventing subagents from hanging indefinitely.
8.  **[#36768](https://github.com/anomalyco/opencode/pull/36768) refactor(codemode): rename Sandbox terminology to CodeMode** *(Closed)*
    A mechanical codebase rename to accurately reflect that the JavaScript-like interpreter is a confined "CodeMode", not a strict "Sandbox".
9.  **[#36772](https://github.com/anomalyco/opencode/pull/36772) chore(codemode): run tests in CI**
    Identifies and fixes a CI gap where 787+ tests in `packages/codemode` were completely skipped by the `bun turbo test` configuration.
10. **[#26861](https://github.com/anomalyco/opencode/pull/26861) fix(tui): Old messages disappearing during long sessions**
    Adds lazy-scroll loading to the TUI, fetching the next 50 older messages when the user scrolls within 5px of the top boundary.

### 5. Feature Request Trends
*   **Enterprise & Monorepo Support:** High demand for scaling OpenCode in enterprise environments, specifically requesting cross-location subagent execution in large monorepos (#36605) and deeper GitLab/Azure integrations.
*   **Session Portability & Export:** Multiple requests for better control over session data, including automatic exports after use (#36720) and timestamped, prompt-only transcript exports (#35128).
*   **Advanced Caching Controls:** As context windows grow, developers are requesting more granular control over caching behaviors, notably the new GPT-5.6 prompt cache options (#36320).
*   **Expanded Language Provider Support:** Requests for out-of-the-box LSP integrations for older but heavily used languages, such as Pascal/Delphi (#36756).

### 6. Developer Pain Points
*   **Windows Instability:** Windows developers are highly frustrated by path normalization bugs (#36681, #36734) and case-sensitive permission parsing (#36696, #36690) that cause configs to fail silently or block operations.
*   **Headless Execution Reliability:** Using `opencode run` in automated pipelines is proving brittle. Developers report silent routing failures with `@agent` tags (#36764) and random startup hangs before API activity begins (#36763).
*   **Local Resource Bloat:** Long-running instances are prone to catastrophic failure due to SQLite databases ballooning to 13GB+ without automatic retention/compaction (#33356).
*   **Permission Map Complexity:** Configuring least-privilege environments is overly difficult; developers note that `"*": "deny"` fallbacks unintentionally destroy the tool configuration for all agents (#36765).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for July 14, 2026.

### 1. Today's Highlights
The Pi community is actively hardening compatibility with next-generation models, specifically focusing on integration issues with the newly released GPT-5.6 and DeepSeek V4. There is also a massive community push to refine "compaction" (context summarization), with multiple PRs addressing cost efficiency, UI blocking, and memory retention. Extension capabilities are expanding rapidly, highlighted by new agent-driven memory tools and proposals for richer multimodal input.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
*   **#6477 - Compaction breaks on Codex gpt-5.6-luna:** [Link](https://github.com/earendil-works/pi/issues/6477)
    *Why it matters:* The newly released `gpt-5.6-luna` fails during context compaction with a 404 error. This is a high-priority regression affecting Codex subscribers, indicated by its 11 upvotes.
*   **#6522 - `max_completion_tokens` sends 1 token (400 Bad Request):** [Link](https://github.com/earendil-works/pi/issues/6522)
    *Why it matters:* When using proxies with misreported context windows, Pi can attempt to send a `max_completion_tokens` limit of 1, resulting in immediate 400 errors and breaking the session entirely.
*   **#6571 - Assistant text emitted before tool calls is swallowed:** [Link](https://github.com/earendil-works/pi/issues/6571)
    *Why it matters:* A frustrating UX bug where models emitting `[text A] → [tool call] → [text B]` result in Text A never rendering in the TUI, even though the LLM registers it in context. 
*   **#6606 - Proactive compaction to avoid blocking user input:** [Link](https://github.com/earendil-works/pi/issues/6606)
    *Why it matters:* Currently, compaction runs *before* processing a user's prompt. The community wants this moved to *after* the response, preventing the TUI from hanging for 10-30 seconds while the user is trying to work.
*   **#6567 - Anthropic crash when `message_delta` omits usage:** [Link](https://github.com/earendil-works/pi/issues/6567)
    *Why it matters:* Streaming from Anthropic-compatible providers (like MiniMax) crashes with a `TypeError` if the API response skips the `usage` object, requiring a fix to safely skip empty usage fields.
*   **#6603 - Fixed image estimate breaks compaction budgets:** [Link](https://github.com/earendil-works/pi/issues/6603)
    *Why it matters:* Pi uses a static token estimate for images regardless of resolution. Retained screenshots (e.g., 2044x990 PNGs) silently eat up the `keepRecentTokens` budget, destroying context limits.
*   **#6433 - DeepSeek V4 thinking mode crashes session:** [Link](https://github.com/earendil-works/pi/issues/6433)
    *Why it matters:* DeepSeek V4 Pro/Flash crashes the TUI silently when `thinking` is enabled, caused by `reasoning_content` failing to persist during tool-call history replays.
*   **#6303 - Uncapped exponential retry backoff:** [Link](https://github.com/earendil-works/pi/issues/6303)
    *Why it matters:* Despite a config for max delay, Pi doesn't use it. A 7th retry attempt can hang the agent for ~4 minutes, making transient network errors feel like total freezes.
*   **#6509 - Extension-reported usage in footer:** [Link](https://github.com/earendil-works/pi/issues/6509)
    *Why it matters:* A strong proposal to let extensions (like sub-agents) report their own LLM costs via `ctx.ui.setUsage`, giving developers an accurate, aggregated spend view in the footer.
*   **#6563 - TUI drops image blocks from user messages:** [Link](https://github.com/earendil-works/pi/issues/6563)
    *Why it matters:* While the LLM receives pasted images, the interactive chat transcript drops them from the UI, making it confusing for users to track multimodal interactions.

### 4. Key PR Progress
*   **#6599 - feat(memory): agent-driven `memory_save` tool:** [Link](https://github.com/earendil-works/pi/pull/6599)
    *Progress:* Merged a major memory overhaul allowing agents to actively save memories, replacing costly cosine-gating and double-LLM confirmations with a single, efficient LLM call per `/compact`.
*   **#6584 - fix: forward provider options to summary requests:** [Link](https://github.com/earendil-works/pi/pull/6584)
    *Progress:* Fixes underlying compaction architecture by passing `SimpleStreamOptions` inherited from the active session, resolving authentication and routing crashes.
*   **#6594 - feat: sqlite session storage:** [Link](https://github.com/earendil-works/pi/pull/6594)
    *Progress:* Opens up highly requested SQLite support, dramatically reducing tree-walking overhead by targeting compaction nodes directly.
*   **#6611 - anthropic-messages: skip usage fields if empty:** [Link](https://github.com/earendil-works/pi/pull/6611)
    *Progress:* Safely merges parsing safeguards to prevent `TypeError` crashes when hitting Anthropic-compatible proxies that omit token counts.
*   **#6588 - ai: OpenAI and Codex forced tool calls:** [Link](https://github.com/earendil-works/pi/pull/6588)
    *Progress:* Resolves cases where models ignored instructions not to call tools, enforcing strict tool-calling constraints for both OpenAI and Codex APIs.
*   **#6496 - fix(ai): support OpenRouter session affinity:** [Link](https://github.com/earendil-works/pi/pull/6496)
    *Progress:* Resolves prompt caching failures on OpenRouter by dynamically injecting `x-session-id` headers based on provider requirements.
*   **#6572 - Render image blocks in interactive user messages:** [Link](https://github.com/earendil-works/pi/pull/6572)
    *Progress:* Fixes TUI mismatches by successfully capturing clipboard images, attaching them to upcoming prompts, and rendering image blocks directly in the terminal transcript.
*   **#6580 - feat(tui): v2 full-history pager:** [Link](https://github.com/earendil-works/pi/pull/6580)
    *Progress:* Introduces a built-in pager for the experimental TUI v2 (`pi --tui v2`), allowing users to scroll back through their full retained logical history, circumventing terminal scrollback limits.
*   **#6613 - rpc: sanitize unpaired UTF-16 surrogates:** [Link](https://github.com/earendil-works/pi/pull/6613)
    *Progress:* Fixes corrupted JSONL outputs in RPC mode that occurred when emojis were split across streaming chunks, improving stability for programmatic clients like Emacs.
*   **#6216 - feat: Add Amazon Bedrock Mantle OpenAI Responses provider:** [Link](https://github.com/earendil-works/pi/pull/6216)
    *Progress:* Massive provider expansion merging native support for AWS Bedrock Mantle via the OpenAI Responses API.

### 5. Feature Request Trends
*   **Cost & Context Transparency:** Developers want strict visibility into agent operations. This includes preventing compaction from writing to expensive provider caches (#6618), accurate token estimations for large images (#6603), and aggregated cost reporting for background sub-agents (#6509).
*   **Richer Multimodal Interactions:** There is a strong desire to push beyond text, specifically requests to support video and audio forwarding in standard prompts alongside existing image support (#3200).
*   **Advanced Provider Customization:** As the ecosystem grows, users want deeper control over provider quirks, such as forcing adaptive thinking for specific Bedrock models (#6212) and removing unsupported thinking levels for DeepSeek V4 (#6521).

### 6. Developer Pain Points
*   **Broken Next-Gen Model Support:** Upgrading to models like `gpt-5.6-luna` or DeepSeek V4 is currently highly unstable due to hardcoded originator strings and dropped `reasoning_content` payloads.
*   **Context Compaction UX:** The compaction lifecycle remains the largest source of friction. Developers are frustrated by UI hangs before prompts are processed (#6606), silent token-draining image retentions (#6603), and general compaction crashes with Azure and Codex providers.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-07-14.

### 1. Today's Highlights
The Qwen Code community is aggressively pushing towards its v1.0 release (targeted for late July 2026), focusing heavily on stabilizing the `qwen serve` daemon, achieving Agent Client Protocol (ACP) compliance, and hardening security baselines. Desktop version `v0.0.5` was released, while backend and CLI efforts saw major refactoring in CI/CD pipelines, subagent communication, and streaming retry logic.

### 2. Releases
*   **desktop-v0.0.5:** The latest desktop iteration was published. No specific breaking changes were listed in the brief changelog, but it aligns with the ongoing upstream core updates. [View release notes](https://github.com/QwenLM/qwen-code/compare/desktop-v0.0.4...desktop-v0.0.5).

### 3. Hot Issues
1.  **[1.0 Release Plan — Draft Triage](https://github.com/QwenLM/qwen-code/issues/6821)**: Maintainers have outlined the scope for v1.0, strictly defining it as "stable daemon + ACP compliance + zero-data-loss streaming + security baseline." Features like IM channels and extension management will be postponed to v1.0.x.
2.  **[Daemon Mode Proposal & Tracking](https://github.com/QwenLM/qwen-code/issues/3803)**: A massive design series driving the `qwen serve` daemon implementation. This remains the central architectural piece for enabling remote editor connections.
3.  **[RFC: Multiple workspaces in one daemon](https://github.com/QwenLM/qwen-code/issues/6378)**: A proposal to allow a single `qwen serve` process to manage multiple workspaces concurrently (`1 daemon = N workspaces x N sessions`), fundamentally changing how remote clients connect.
4.  **[Weak Subagent Communication](https://github.com/QwenLM/qwen-code/issues/5239)**: Users report that subagents fail silently without notifying the main session. The community is requesting robust bidirectional communication and lifecycle monitoring between parent and child agents.
5.  **[ACP Streamable HTTP Transport](https://github.com/QwenLM/qwen-code/issues/4782)**: ACP is now exposed via `/acp`, allowing native editors like Zed, JetBrains, and Goose to connect to `qwen serve` without requiring custom adapter code.
6.  **[Broken Mouse Text Selection in Windows](https://github.com/QwenLM/qwen-code/issues/6808)**: A UI regression where SGR mouse tracking in `ScrollableList` bypasses the viewport gate, breaking native click-and-drag text selection in Windows Terminal and PowerShell.
7.  **[Skill Context Lifecycle Management](https://github.com/QwenLM/qwen-code/issues/6762)**: A request to unload or compress `SKILL.md` files in the model's context. Currently, skill bodies stay in the conversation history forever, rapidly consuming token limits.
8.  **[Garbled Terminal on Ctrl-C Exit](https://github.com/QwenLM/qwen-code/issues/6776)**: Quitting the CLI via Ctrl-C sometimes leaves the terminal in a broken state, outputting escape codes (e.g., `9;5u`) instead of processing keypresses.
9.  **[Memory Access Out of Bounds (WASM)](https://github.com/QwenLM/qwen-code/issues/6820)**: Runtime WASM errors are crashing the CLI for Linux users, specifically related to `getComputedWidth` rendering calculations.
10. **[Third-Party API Compatibility in Auto Mode](https://github.com/QwenLM/qwen-code/issues/6791)**: The `auto` permission classifier fails to handle proxied DeepSeek (passing thinking tags) and official MiniMax models (missing `tool-choice`), causing parsing errors and timeouts.

### 4. Key PR Progress
1.  **[feat(serve): add extension management v2 (#6825)](https://github.com/QwenLM/qwen-code/pull/6825)**: Introduces policy-based activation for extensions across multiple workspaces in the daemon.
2.  **[feat(serve): Add workspace-qualified Voice (#6839)](https://github.com/QwenLM/qwen-code/pull/6839)**: Completes Phase 4b by enabling trusted runtimes to handle batch and streaming transcription via workspace-qualified REST/WebSocket routes.
3.  **[fix(core): re-land malformed stream retry (#6794)](https://github.com/QwenLM/qwen-code/pull/6794)**: Re-introduces retry logic for malformed streamed responses while fixing false positives that incorrectly flagged legitimate tool calls.
4.  **[refactor(review): share the probe-worktree path helper (#6841)](https://github.com/QwenLM/qwen-code/pull/6841)**: Hardens the `/review` testing harness by isolating test-efficacy probes in disposable git worktrees, preventing source mutation in shared review trees.
5.  **[feat(ci): add recoverable stale failure patrol (#6766)](https://github.com/QwenLM/qwen-code/pull/6766)**: Adds a scheduled GitHub Action running every 10 minutes to automatically detect and recover from stale CI failures on PRs targeting `main`.
6.  **[feat(serve): add model API error & retry metrics (#6837)](https://github.com/QwenLM/qwen-code/pull/6837)**: Enhances the Daemon Status UI with a Model API health chart, visualizing LLM provider errors and automatic backoff retries.
7.  **[feat(acp): expose tool-call preparation lifecycle (#6819)](https://github.com/QwenLM/qwen-code/pull/6819)**: Updates ACP to emit a `phase: preparing` status when a provider supplies a tool call ID, improving UI feedback for deferred tool execution.
8.  **[fix(prompt-cache): stabilize deferred tool calls (#6723)](https://github.com/QwenLM/qwen-code/pull/6723)**: Resolves prompt caching invalidation by keeping the provider tool declaration set stable, returning target schemas as model-visible content instead.
9.  **[perf(core): reduce Git snapshot processes (#6784)](https://github.com/QwenLM/qwen-code/pull/6784)**: Optimizes CLI performance by combining branch and short-status reads into a single `git status --short --branch` process.
10. **[fix(memory): resolve root symlinks (#6842)](https://github.com/QwenLM/qwen-code/pull/6842)**: Fixes `isAllowedMemoryPath` logic to correctly permit managed-memory writes under symlinked base directories.

### 5. Feature Request Trends
*   **Daemon & Multi-Workspace Scalability**: The transition from local CLI to a robust `qwen serve` backend is the dominant theme. The community wants multi-workspace support, hot-reloadable IM channels (DingTalk/Feishu), and true multiplayer "shared agent" capabilities.
*   **Context & Token Optimization**: Users are demanding better mechanisms to manage context limits. Highly discussed topics include unloading unused skills (`SKILL.md`) and establishing a `pinned/` memory directory to protect critical reference files from automated `/dream` context consolidation.
*   **Persistent & Long-Horizon Workflows**: Requests for long-running background automations, such as hardening the `/goal` command into a reliable primitive and implementing persistent agents in chat channels.
*   **Editor & Environment Parity**: Expanding ACP (Agent Client Protocol) compliance to ensure seamless integration with popular IDEs (Zed, JetBrains, VSCode) and improving terminal compatibility (WSL2/Linux clipboard support, native mouse selection).

### 6. Developer Pain Points
*   **Terminal UI Quirks**: Developers frequently express frustration with the CLI rendering layer. Issues include garbled multi-line diffs in permission dialogs, truncated tool summaries, and broken terminal states upon forced exits (Ctrl-C).
*   **Subagent Reliability**: Building complex agentic workflows is currently hindered by poor child-agent observability. Subagents fail without triggering notifications to the parent session, forcing developers to write clunky workarounds (e.g., monitoring dummy files for activity).
*   **Third-Party API Fragility**: Auto-mode's request classifier struggles with non-official APIs (like newapi proxies) and varying model specs (e.g., DeepSeek's thinking tags, MiniMax's lack of `tool-choice`), causing agents to crash or hang.
*   **CI/CD Flakiness**: E2E testing and SDK release workflows have hit multiple blockers recently due to registry dependency issues and stale CI runs, slowing down community PR merges.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the community digest for DeepSeek-TUI (CodeWhale) based on the recent GitHub activities.

### 1. Today's Highlights
The community is actively preparing for the **v0.8.68 release**, with a strong focus on hardening terminal reliability, refining the underwater TUI experience, and establishing versioned execution contracts for subagents. Significant progress was also made in expanding LLM provider support (including a new MiniMax integration) and fixing platform-specific bugs, notably restoring full NetBSD/BSD compatibility. 

### 2. Releases
No official stable releases were published in the last 24 hours. However, [PR #4361](https://github.com/Hmbown/CodeWhale/pull/4361) opens the release candidate for **v0.8.68**, integrating stability patches for the TUI composer, mouse interactions, and subagent workflows.

### 3. Hot Issues
*   **[Issue #4329](https://github.com/Hmbown/CodeWhale/issues/4329) [CLOSED]**: Reported `HTTP 400` errors from the Anthropic API caused by mismatched `tool_use` IDs and `tool_result` blocks. *Why it matters:* Tool-use reliability is critical for agent loops; this highlights ongoing growing pains in mapping tool lifecycles. 
*   **[Issue #4355](https://github.com/Hmbown/CodeWhale/issues/4355) [OPEN]**: Addresses the need to persist stateful terminal identity and safely handle restart limitations. *Why it matters:* Prevents the client from mistaking reused PIDs or stale local records for live shells after a restart.
*   **[Issue #4358](https://github.com/Hmbown/CodeWhale/issues/4358) [OPEN]**: Requests expanded PTY testing coverage for work-surface and approval mouse interactions. *Why it matters:* Ensures that exact mouse routing and stop-confirm UI behaviors do not break in live terminal environments.
*   **[Issue #4356](https://github.com/Hmbown/CodeWhale/issues/4356) [OPEN]**: Proposes versioned exec stream receipts and tool lifecycle metadata. *Why it matters:* Replaces inferred execution facts with an additive, typed contract, improving replayability, support, and cost attribution.
*   **[Issue #4359](https://github.com/Hmbown/CodeWhale/issues/4359) [OPEN]**: Highlights ambiguous `Esc/stop` semantics for detached background agents. *Why it matters:* Defining parent-stop semantics will prevent successful background task detachments from being accidentally perceived as cancellations.
*   **[Issue #4357](https://github.com/Hmbown/CodeWhale/issues/4357) [OPEN]**: Focuses on finishing "underwater" receipt settling and phase-aware ambient motions in the TUI. *Why it matters:* Polishes the UI/UX by introducing dynamic responses to active work without breaking reduced-motion accessibility settings.

*(Note: 6 total issues were updated in the last 24h; all are detailed above.)*

### 4. Key PR Progress
*   **[PR #4361](https://github.com/Hmbown/CodeWhale/pull/4361) [OPEN]**: Integrates the v0.8.68 release candidate, bringing UI polish to the underwater TUI while stabilizing workflows, tasks, and settings.
*   **[PR #4360](https://github.com/Hmbown/CodeWhale/pull/4360) [OPEN]**: Fixes browser link opening on BSD systems (NetBSD, FreeBSD, etc.), which previously fell through to an "unsupported platform" error.
*   **[PR #4354](https://github.com/Hmbown/CodeWhale/pull/4354) [OPEN]**: Adds dedicated MiniMax Messages provider support, including global and China Base URLs, registering MiniMax-M3 and MiniMax-M2.7 with verified pricing metadata.
*   **[PR #4352](https://github.com/Hmbown/CodeWhale/pull/4352) [CLOSED]**: Earlier iteration of the MiniMax Messages-compatible route, successfully merged into the broader provider registry effort.
*   **[PR #4351](https://github.com/Hmbown/CodeWhale/pull/4351) [OPEN]**: Updates the offline scorecard to bind costs directly to exact provider/model routes, ensuring that unpriced or custom gateway routes fail safely.
*   **[PR #4349](https://github.com/Hmbown/CodeWhale/pull/4349) [CLOSED]**: Updates `Cargo.toml` dependencies to allow the project to build under NetBSD and other BSD variants by generating missing `rquickjs` bindings.
*   **[PR #4348](https://github.com/Hmbown/CodeWhale/pull/4348) [CLOSED]**: Corrects token billing logic for Anthropic, ensuring `cache_creation_input_tokens` are billed at published 5-minute write rates rather than being folded into cache misses.
*   **[PR #4347](https://github.com/Hmbown/CodeWhale/pull/4347) [CLOSED]**: Adds comprehensive Korean (`ko`) locale support to the TUI, translating over 752 leaf keys.
*   **[PR #4346](https://github.com/Hmbown/CodeWhale/pull/4346) [CLOSED]**: Sanitizes the `input_schema` for the Anthropic adapter, resolving `HTTP 400` crashes caused by top-level `oneOf`/`anyOf`/`allOf` declarations in tool definitions.
*   **[PR #4353](https://github.com/Hmbown/CodeWhale/pull/4353) [CLOSED]**: Updates `AGENTS.md` with specific setup instructions and caveats for developers using Cursor Cloud dev-environments.

### 5. Feature Request Trends
Based on recent project tracking, development is trending heavily toward **agent lifecycle management and observability**. There is a distinct push for *versioned execution receipts* and *stateful terminal identity* to make agent workflows safer, replayable, and easier to attribute costs to. Additionally, the community shows sustained interest in **provider extensibility**, specifically requesting first-class support for emerging models like MiniMax-M3 and demanding more granular, transparent cost-tracking tied directly to provider routes. 

### 6. Developer Pain Points
Developers continue to express frustration with **schema compatibility across different LLM providers**. A recurring issue is the Anthropic API's strict rejection of standard JSON schema compositions (`oneOf`, `anyOf`) in tool definitions, alongside rigid `tool_use` to `tool_result` mapping requirements that easily trigger `HTTP 400` errors. Furthermore, **cross-platform compatibility** remains a friction point, as developers on BSD-based operating systems frequently encounter broken foundational features (such as dependency building and browser linking) due to hardcoded platform gates favoring only Windows, macOS, and Linux.

</details>