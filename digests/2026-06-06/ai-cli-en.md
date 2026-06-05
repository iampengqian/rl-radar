# AI CLI Tools Community Digest 2026-06-06

> Generated: 2026-06-05 22:22 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the community digests from June 6, 2026.

### 1. Ecosystem Overview
The AI CLI tooling ecosystem is currently characterized by rapid architectural maturation and a shift toward agentic orchestration, though it is heavily constrained by backend API fragility. Major players like OpenAI, Anthropic, and Google are bolting complex "deep research," workflow engines, and multi-agent capabilities onto their CLIs, frequently resulting in token-burn and context compaction bugs. Interoperability is becoming a focal point, with the Model Context Protocol (MCP) acting as a critical bridge to external tools—despite current growing pains like zombie processes, timeout limits, and OAuth failures. Meanwhile, the long-tail ecosystem is seeing a shift from Python/Node.js wrappers toward highly optimized, standalone single-binary executables (e.g., Rust/Go) to address memory management and startup latency.

### 2. Activity Comparison
*Note: Data reflects activity mentioned in the provided 24-hour digest window.*

| Tool | Hot Issues Tracked | Active PRs Noted | Release Status (Last 24h) | Dominant Theme |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 6 | **v2.1.165** (Patch) | Token consumption cost blowouts |
| **OpenAI Codex** | 10 | 10 | **v149.2.0** (rusty-v8) | Windows/WSL I/O latency |
| **Gemini CLI** | 10 | 10 | **v0.45.2 / v0.46.0-preview** | Agent hanging & API quota limits |
| **GitHub Copilot CLI** | 10 | 2 | **v1.0.60** (Minor feature/patch) | Terminal UX & platform regressions |
| **Kimi Code CLI** | 1 | 6 | **v1.47.0** (Successor migration) | Migration to single-binary architecture |
| **OpenCode** | 10 | 10 | **v1.16.2** (Minor/Major) | Provider compatibility & long-context |
| **Pi** | 10 | 10 | None | Multi-agent workflows & compaction |
| **Qwen Code** | 10 | 10 | **v0.17.1-nightly** | Daemon parity & self-hosted LLMs |
| **DeepSeek TUI** | 10 | 10 | None (v0.9.0 prep) | Architecture refactoring |

### 3. Shared Feature Directions
*   **Context Compaction & Memory Management:** Tools are struggling to maintain context in long sessions. *OpenAI Codex* (infinite loops), *Claude Code* (token burning), *Pi* (compaction crashes), and *DeepSeek TUI* (hard compaction) are all actively trying to solve long-window degradation without losing critical state.
*   **Robust MCP Integration:** The Model Context Protocol is a universal standard-in-waiting, but currently brittle. *Claude Code*, *Copilot CLI*, *Kimi CLI*, and *DeepSeek TUI* all reported high-priority bugs regarding zombie processes, dropped connections, and OAuth token management with MCP servers.
*   **Windows / WSL I/O Bottlenecks:** Cross-platform execution on Windows remains painful. *OpenAI Codex* (filesystem scanning), *Gemini CLI* (PTY interop), *Copilot CLI* (ARM64 crashes), and *Qwen Code* (clipboard issues) are all dedicating significant engineering resources to WSL and native Windows compatibility.
*   **Multi-Agent & Workflow Orchestration:** Moving beyond single-turn prompts. *Pi*, *DeepSeek TUI (WhaleFlow)*, *OpenAI Codex*, and *OpenCode* are all introducing parallel execution, chained sub-agents, and persistent background workers.

### 4. Differentiation Analysis
*   **Proprietary API Tight Coupling vs. Open Provider Architectures:** *Claude Code*, *Codex*, and *Gemini CLI* are tightly coupled to their parent company's models, leading to pain points specifically around forced context windows and opaque rate limits. Conversely, *OpenCode*, *Qwen Code*, *Pi*, and *DeepSeek TUI* are differentiating by building open provider architectures that allow seamless fallback routing, self-hosted LLM support (vLLM/Ollama), and local gateway discovery.
*   **Enterprise Security vs. Developer Ergonomics:** *GitHub Copilot CLI* and *OpenCode* are prioritizing enterprise features, such as restricting agent sandbox permissions, mitigating supply-chain risks from repository hooks, and passing corporate firewall rules. On the other end, *DeepSeek TUI* and *Claude Code* are leaning heavily into developer ergonomics, focusing on UI tweaks like ghost-text follow-ups, rich inline shell output, and deep terminal integration.
*   **Architectural Re-basing:** *Kimi CLI* and *Qwen Code* represent a distinct trend of moving away from interpreted languages (Python/Node) to compiled binaries to escape OOM errors and improve startup times, contrasting with the heavy Node.js/Rust FFI approaches of the US-centric incumbents.

### 5. Community Momentum & Maturity
*   **High Velocity Maturity (Codex, Claude, Gemini):** These tools show signs of enterprise adoption pushing them to their limits. Their issue trackers are dominated by billing trust issues, deep-system resource leaks (macOS PTY exhaustion), and complex state management. They iterate fast but carry high technical debt.
*   **Rapid Expansion & Architecture Shifts (OpenCode, Qwen, DeepSeek TUI):** These communities are highly engaged in foundational re-architecture. DeepSeek TUI is actively harvesting community PRs for a major v0.9.0 refactor, while OpenCode is tackling a massive "Desktop v2" tab architecture. 
*   **Stabilization Phase (Copilot CLI, Kimi CLI):** Copilot CLI is currently bogged down in fundamental platform regressions (copy/paste and sleep/wake bugs), showing lower PR velocity. Kimi CLI is in a pure transitional state, acting merely as a bridge to a new binary.

### 6. Trend Signals (Strategic Takeaways)
1.  **The "Token Bleed" Crisis is Real:** Engineering leaders must monitor AI CLI spend closely. As seen with Claude Code's `deep-research` and Codex's compaction loops, autonomous agents can easily burn millions of tokens in the background with zero usable output. Cost observability (like *OpenCode*'s new GET /usage endpoint) is a critical upcoming feature.
2.  **Terminal UI is a Major Friction Point:** A surprising number of high-engagement issues across Copilot, Kimi, and DeepSeek relate to fundamental terminal UX—specifically, scrollback buffer breakage due to forced "alt-screen" modes and input field regressions. DevEx teams should prioritize standard terminal feature parity over flashy UI components.
3.  **Self-Hosted Gateways are the Enterprise Standard:** Heavy demand across Qwen, OpenCode, and Pi for AWS Bedrock compatibility, OpenRouter routing, and local LLM support indicates that enterprise developers refuse to rely on a single API provider. Tooling must be provider-agnostic and support standard API schemas.
4.  **Security is Becoming a Prerequisite:** The rise of requests for sandboxing (OpenCode, Gemini), secure hook execution (Copilot), and workspace isolation (Pi) signals that organizations are moving these tools from "experimental" to "production," where rogue shell commands or malicious repo configs pose unacceptable supply-chain risks.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-06-06 | Source: [github.com/anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking
*Based on community activity, engagement, and discussion volume across the top PRs and Issues.*

1. **[PR #514 – document-typography](https://github.com/anthropics/skills/pull/514)** | `OPEN` | 👍 0
   **Functionality:** Automated typographic quality control for AI-generated documents, fixing orphan word wraps, widow paragraphs, and numbering misalignment.
   **Discussion Highlights:** Addresses a "silent but universal" pain point—users rarely prompt for good typography, but poor formatting degrades every document Claude produces. The skill is designed to apply these fixes proactively.

2. **[PR #486 – ODT (OpenDocument)](https://github.com/anthropics/skills/pull/486)** | `OPEN` | 👍 0
   **Functionality:** Enables creation, template filling, parsing, and HTML conversion of OpenDocument Format files (.odt, .ods).
   **Discussion Highlights:** Long-lived PR (active from March to mid-April). Fills a notable gap in the official collection, which leans heavily toward proprietary formats like DOCX/PDF, by supporting open-source/ISO standard document workflows.

3. **[PR #444 – AURELION Skill Suite](https://github.com/anthropics/skills/pull/444)** | `OPEN` | 👍 0
   **Functionality:** A four-part cognitive framework (kernel, advisor, agent, memory) providing structured thinking templates and persistent professional knowledge management for AI collaboration.
   **Discussion Highlights:** One of the most ambitious community submissions. Active through early May, it represents a trend toward "meta-cognitive" skills that govern how Claude reasons rather than just what it produces.

4. **[PR #83 – skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | `OPEN` | 👍 0
   **Functionality:** Two "meta-skills" for the marketplace: a 5-dimension quality evaluator for skills and a security analyzer.
   **Discussion Highlights:** Self-referential tooling—skills that evaluate other skills. Indicates community interest in establishing quality and security standards for the growing ecosystem.

5. **[PR #190 – n8n-builder & n8n-debugger](https://github.com/anthropics/skills/pull/190)** | `OPEN` | 👍 0
   **Functionality:** Production-tested community skills for building and debugging n8n automation workflows.
   **Discussion Highlights:** Represents strong demand for workflow automation capabilities. Also bundles a `faf-expert` skill for persistent project context via `.faf` files.

6. **[PR #363 – feature-dev Fix](https://github.com/anthropics/skills/pull/363)** | `OPEN` | 👍 0
   **Functionality:** Fixes a critical TodoWrite overwrite bug in the `feature-dev` skill that silently skips Quality Review (Phase 6) and Summary (Phase 7) during the workflow.
   **Discussion Highlights:** Recently updated (June 3rd). Addresses a subtle but impactful reliability bug in a core development workflow skill.

7. **[PR #541 – DOCX Tracked Change Fix](https://github.com/anthropics/skills/pull/541)** | `OPEN` | 👍 0
   **Functionality:** Prevents document corruption when adding tracked changes to DOCX files with existing bookmarks, fixing OOXML `w:id` namespace collisions.
   **Discussion Highlights:** Deep technical fix for a real data-loss scenario. Shows the community's engagement with the intricacies of the official document skills.

---

## 2. Community Demand Trends
*Distilled from the most active Issues.*

| Trend | Evidence | Anticipated Direction |
| :--- | :--- | :--- |
| **Enterprise & Org Features** | [Issue #228](https://github.com/anthropics/skills/issues/228) (13 comments, 👍 7) | **Org-wide skill sharing.** Users want direct sharing links or a shared internal library, moving away from manual `.skill` file transfers via Slack/Teams. |
| **Robust Evaluation & Testing** | [Issue #556](https://github.com/anthropics/skills/issues/556) (11 comments, 👍 6) | **Fixing the evaluation loop.** The `run_eval.py` script has a 0% skill trigger rate, breaking the skill optimization and testing workflow. A critical fix for skill creators. |
| **Security & Trust Boundaries** | [Issue #492](https://github.com/anthropics/skills/issues/492) (7 comments, 👍 2) | **Namespacing & verification.** Community skills currently masquerade under the `anthropic/` namespace. Users are demanding clear boundaries to distinguish official vs. community trust levels. |
| **Deduplication & Bloat Control** | [Issue #189](https://github.com/anthropics/skills/issues/189) (6 comments, 👍 8) | **Ecosystem hygiene.** Installing official bundles (`document-skills` + `example-skills`) currently duplicates identical skills, wasting context window tokens. |
| **MCP Integration** | [Issue #16](https://github.com/anthropics/skills/issues/16) & [Issue #1102](https://github.com/anthropics/skills/issues/1102) | **Skills-as-tools & data compression.** Strong demand to expose Skills as MCPs for programmatic access, alongside optimizations to prevent large MCP data returns from congesting the context window. |

---

## 3. High-Potential Pending Skills
*Active PRs that address critical bugs or high-demand features and are likely to land soon.*

*   **[PR #538](https://github.com/anthropics/skills/pull/538) & [PR #539](https://github.com/anthropics/skills/pull/539) (by Lubrsy706):** A pair of crucial fixes for the official PDF and skill-creator tools. #538 resolves case-sensitivity bugs in markdown references (breaking Linux workflows), while #539 adds validation to prevent YAML parsing failures.
*   **[PR #1099](https://github.com/anthropics/skills/pull/1099) & [PR #1050](https://github.com/anthropics/skills/pull/1050):** Two separate community PRs fixing critical Windows compatibility issues in the `skill-creator` evaluation scripts (subprocess crashes and pipe encoding errors).
*   **[PR #509](https://github.com/anthropics/skills/pull/509):** Adds a `CONTRIBUTING.md` to address the repo's low community health score. A foundational improvement that will streamline future skill merges.
*   **[PR #1140](https://github.com/anthropics/skills/pull/1140):** Introduces an `agent-creator` meta-skill and fixes multi-tool evaluation bugs, directly tackling the evaluation issues raised in [Issue #556](https://github.com/anthropics/skills/issues/556).

---

## 4. Skills Ecosystem Insight
**The community's most concentrated demand is for robust, enterprise-grade operational infrastructure—specifically fixing broken evaluation scripts, establishing security/trust boundaries between official and community skills, and mitigating context-window bloat caused by duplicate or overly verbose skills.**

---

# Claude Code Community Digest — 2026-06-06

## 1. Today's Highlights

Version **v2.1.165** was released with unspecified bug fixes and reliability improvements. On the issue tracker, **cost and token consumption** continues to dominate community discussion: a high-engagement bug about forced 1M-context sessions on Pro plans (#62063, 58 comments) and a freshly-opened report of phantom token usage while Claude Code is idle (#65687) both gained significant traction. Meanwhile, the new `/deep-research` skill is drawing fire for burning millions of tokens and then aborting on structured-output failures (#65500, #65731).

---

## 2. Releases

- **v2.1.165** — Bug fixes and reliability improvements. No detailed changelog published.
  [Release →](https://github.com/anthropics/claude-code/releases)

---

## 3. Hot Issues

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| 1 | [#62063 — Defaults to 1M context on fresh session (Pro plan)](https://github.com/anthropics/claude-code/issues/62063) | Pro-plan users are auto-enrolled into the highest-cost context window with no workaround, dramatically inflating spend. | 58 comments, 35 👍 — highest engagement today; flagged as duplicate but unresolved. |
| 2 | [#36146 — First message pinned at top of VS Code chat panel](https://github.com/anthropics/claude-code/issues/36146) | Long-standing UX regression in the VS Code extension makes scrolling confusing; over two months old. | 22 comments, 22 👍 — sustained frustration. |
| 3 | [#52472 — Weekly usage limit resets early](https://github.com/anthropics/claude-code/issues/52472) | Reset timer changes mid-cycle, causing users to lose remaining quota unexpectedly. | 21 comments; trust/credibility concern for billing. |
| 4 | [#57580 — macOS PTY file-descriptor leak exhausts system PTYs](https://github.com/anthropics/claude-code/issues/57580) | Long Bash-heavy sessions leak fd handles until `forkpty` fails system-wide, requiring a restart. | 9 comments, 17 👍 — reproducible, impacts power users. |
| 5 | [#65500 — deep-research aborts run after burning ~3.5M tokens](https://github.com/anthropics/claude-code/issues/65500) | Schema-bound subagent failures cascade and produce zero usable output after massive consumption. | 2 comments but high severity; skill is effectively unusable for some. |
| 6 | [#65731 — deep-research hits server rate limits by default](https://github.com/anthropics/claude-code/issues/65731) | Default workflow triggers API rate-limit errors, compounding cost concerns. | Filed same day; indicates a systemic workflow issue. |
| 7 | [#65687 — Token usage spike while Claude Code is inactive](https://github.com/anthropics/claude-code/issues/65687) | Users observe continued consumption when the tool is idle, suggesting a background loop or leak. | 5 comments on day one; financial impact. |
| 8 | [#16837 — MCP_TIMEOUT values > 60s ignored](https://github.com/anthropics/claude-code/issues/16837) | Long-running MCP servers are killed prematurely; configurable timeout is not respected. | 12 comments, 13 👍 — has reliable repro. |
| 9 | [#64365 — Executed destructive `adb shell pm clear` against instruction](https://github.com/anthropics/claude-code/issues/64365) | Agent ran a permanent-data-loss command explicitly forbidden by the user; tagged `data-loss`. | 3 comments; raises safety/trust questions. |
| 10 | [#65721 — False-positive Usage Policy blocks on biomedical vocabulary](https://github.com/anthropics/claude-code/issues/65721) | Safety classifier trips mid-session on accumulated context rather than individual turns, disrupting academic work. | Filed today; affects legitimate research workflows. |

---

## 4. Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| [#65666 — Fix dev container issues](https://github.com/anthropics/claude-code/pull/65666) | Resolves DNS failures in the firewall during devcontainer build and adds a mechanism to inject the API key from the local environment. | Open |
| [#65619 — fix(plugins): align frontend-design author with marketplace entry](https://github.com/anthropics/claude-code/pull/65619) | Corrects malformed `author.name`/`author.email` fields in `plugin.json` where two authors were packed into single strings. Fixes [#61785](https://github.com/anthropics/claude-code/issues/61785). | Open |
| [#65344 — fix(scripts): correct premature return in markStale + --debug flag](https://github.com/anthropics/claude-code/pull/65344) | Fixes a pagination logic bug in `sweep.ts` that caused stale-issue processing to exit early; adds `--debug` to `auto-close-duplicates.ts`. | Open |
| [#44742 — fix: diagnostic tool + root cause analysis for session persistence data loss](https://github.com/anthropics/claude-code/pull/44742) | Addresses a critical data-loss bug where VS Code extension fails to persist conversation transcripts to disk across restarts. Adds `diagnose-session-persistence.ts` utility. | Closed |
| [#58673 — (spam/placeholder)](https://github.com/anthropics/claude-code/pull/58673) | Single-character title/body — appears to be a placeholder or accidental submission. | Open |
| [#65723 — (off-topic)](https://github.com/anthropics/claude-code/pull/65723) | Unrelated content — likely spam. | Open |

> **Note:** Only 6 PRs were updated in the window; of those, 3 contain meaningful contributions.

---

## 5. Feature Request Trends

1. **Custom keybinding actions & TUI control** — [#65735](https://github.com/anthropics/claude-code/issues/65735) requests a generic bindable action to send literal text or run commands from a keypress; [#65743](https://github.com/anthropics/claude-code/issues/65743) asks for readline-style tab-autocomplete completing to the longest common prefix.
2. **Model instruction-following improvements** — [#13689](https://github.com/anthropics/claude-code/issues/13689) (13 comments) tracks persistent failures where the model ignores system/CLAUDE.md instructions.
3. **Loop/memory budget advisors** — [#65712](https://github.com/anthropics/claude-code/issues/65712) proposes "Loop Pilot," a pre-loop hook using historical behavior memory to help the model self-moderate and avoid infinite tool-call loops.
4. **Transparency around session classification** — [#60955](https://github.com/anthropics/claude-code/issues/60955) highlights the undocumented "Classify session states" toggle and asks for clarity on its privacy and cost implications.

---

## 6. Developer Pain Points

- **Uncontrolled token costs.** The dominant theme across multiple issues is that users feel unable to predict or control spending — whether from forced 1M-context windows (#62063), phantom idle consumption (#65687), or deep-research runs that burn millions of tokens with no output (#65500, #65731).
- **Agent reliability & safety.** Users report the model executing destructive commands despite explicit instructions (#64365) and conflating inferred conclusions with empirical measurements in production contexts (#64812), eroding trust in autonomous mode.
- **MCP integration fragility.** OAuth client re-registers on every authentication (#59460), timeouts are silently capped at 60s (#16837), and diagnostic alerts persist after removing MCP config (#65738), making the MCP ecosystem feel brittle.
- **Platform-specific resource leaks.** The macOS PTY exhaustion bug (#57580) and the false disk-full report on Intel Macs (#65166) show that long-running sessions still hit OS-level limits.
- **TUI/UX polish gaps.** Pinned messages in VS Code (#36146), full-renders during tool calls (#52866), and feedback prompts blocking interaction (#65744) signal that the terminal and extension UIs need refinement.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-06

## 1. Today's Highlights
Codex engineering pushed a massive batch of foundational pull requests today, headlined by the introduction of **Responses Lite** (a streamlined standalone tools pathway) and significant architectural refactoring of the goal runtime into a dedicated extension. On the community side, **Windows/WSL performance degradation** continues to dominate issue reports, with users identifying specific cross-mount I/O bottlenecks. A new `rusty_v8` release (v149.2.0) also landed, bringing underlying V8 engine updates to the Rust tooling.

## 2. Releases
* **rusty-v8-v149.2.0**: The sole release in the last 24 hours, updating the core V8 JavaScript engine bindings used by Codex's Rust execution environment (`codex-rs`). 
  * [Release Tag](https://github.com/openai/codex/releases/tag/rusty-v8-v149.2.0)

## 3. Hot Issues
1. **[#25715](https://github.com/openai/codex/issues/25715) Unusable Slow with WSL as Agent environment**: A highly upvoted issue (👍 28) reporting severe latency in the Codex Desktop App when using WSL, making routine operations lag heavily.
2. **[#24391](https://github.com/openai/codex/issues/24391) Windows sandbox: spawn setup refresh fails**: A critical bug in CLI v0.133.0 breaking shell command execution on Windows (👍 22).
3. **[#26104](https://github.com/openai/codex/issues/26104) Cannot open older chat sessions**: A regression introduced in a recent Desktop update is silently breaking backward compatibility for older chat history.
4. **[#25882](https://github.com/openai/codex/issues/25882) macOS app relaunches in a tight loop**: A severe system-wide bug where Codex exhausts `syspolicyd` file descriptors, freezing macOS app launches (👍 10).
5. **[#12299](https://github.com/openai/codex/issues/12299) "Hit usage limit" at 10% remaining**: An ongoing frustration for Plus users where the IDE extension miscalculates remaining rate limits (👍 1, but high comment velocity).
6. **[#26149](https://github.com/openai/codex/issues/26149) WSL repeatedly scans `.tmp/plugins`**: Users used `strace` to prove that Desktop app latency is caused by constant filesystem scanning over `/mnt/c` (👍 13).
7. **[#26659](https://github.com/openai/codex/issues/26659) Custom STDIO MCP server tools not exposed**: Tools are registered and pass `tools/list`, but silently fail to appear in the Desktop thread UI.
8. **[#26661](https://github.com/openai/codex/issues/26661) Computer Use unavailable on Windows Store build**: The native pipe helper paths are failing specifically for the AppX/Store distribution of Codex.
9. **[#26656](https://github.com/openai/codex/issues/26656) Infinite Context Compaction Loop**: The VS Code extension is aggressively compacting context continuously, eating tokens and breaking workflows.
10. **[#17265](https://github.com/openai/codex/issues/17265) MCP OAuth tokens not auto-refreshing**: A long-standing bug where routed MCP server credentials expire but fail to use the stored refresh token (👍 17).

## 4. Key PR Progress
1. **[#26490](https://github.com/openai/codex/pull/26490) Use standalone tools for Responses Lite**: Implements a new streamlined execution path that routes web search and image generation directly through Codex executors rather than hosted Responses tools.
2. **[#26548](https://github.com/openai/codex/pull/26548) Finish moving goal runtime to extension**: Major architectural shift completing the transition of the goal management system into an extension-based API, allowing better modularity.
3. **[#26681](https://github.com/openai/codex/pull/26681) Allow creating a new goal after completion**: Unlocks agent chaining by permitting agents to self-append new goals dynamically after completing prior objectives.
4. **[#25731](https://github.com/openai/codex/pull/25731) Support v2 personal access tokens**: Introduces opaque `at-` token classification and `/whoami` hydration for modern PAT authentication flows.
5. **[#26687](https://github.com/openai/codex/pull/26687) Pair thread environment settings**: Fixes a silent desync bug where thread `cwd` and environment selections could detach from one another between turns.
6. **[#26657](https://github.com/openai/codex/pull/26657) `apply_patch` uses sandbox on Windows**: Crucial fix ensuring filesystem built-ins route correctly through the Windows sandbox metadata.
7. **[#26669](https://github.com/openai/codex/pull/26669) Bound WSL local curated discovery**: Directly addresses [Issue #26149](https://github.com/openai/codex/issues/26149) by bounding the installed-app expansion to prevent catastrophic I/O latency on WSL mounts.
8. **[#26686](https://github.com/openai/codex/pull/26686) Propagate client UI capabilities**: Adds semantic MCP UI capabilities to the app-server handshake, allowing MCP servers to request specific UI rendering (like WebViews) based on the client.
9. **[#25976](https://github.com/openai/codex/pull/25976) Use stable item IDs for Responses API**: Improves idempotency and state management by ensuring Codex generates stable IDs for round-tripped API items.
10. **[#26680](https://github.com/openai/codex/pull/26680) Report compaction analytics**: Adds tracking for retained image count and summary tokens to help diagnose context compaction issues (vital for [Issue #26656](https://github.com/openai/codex/issues/26656)).

## 5. Feature Request Trends
* **Traditional Windows Installer Support**: Heavily requested ([#13993](https://github.com/openai/codex/issues/13993), 👍 135) to bypass corporate, offline, or policy restrictions tied to the Microsoft Store.
* **Full Editor Tab Support for VS Code**: Users want Codex sessions dockable as standard editor tabs ([#20951](https://github.com/openai/codex/issues/20951)) instead of being confined to the sidebar panel.
* **Enhanced MCP Configuration**: A desire for deeper CLI exposure for MCP settings, such as passing default tool approval modes during the `codex mcp add` command ([#25442](https://github.com/openai/codex/issues/25442)).
* **Per-Instance Model Selection**: Requests for isolated model state per TUI instance so that testing different models simultaneously doesn't overwrite global configs ([#25560](https://github.com/openai/codex/issues/25560)).
* **Customizable UI Settings in Desktop**: Calls for basic desktop settings, specifically the ability to toggle spellchecking on/off ([#25431](https://github.com/openai/codex/issues/25431)).

## 6. Developer Pain Points
* **Cross-Mount Windows/WSL Latency**: The most severe recurring pain point. Running the Desktop App on Windows while targeting a WSL environment triggers painful latency. The core issue isn't WSL itself, but the Desktop App's inefficient scanning of cross-mount filesystems (`/mnt/c`), a bottleneck the CLI avoids.
* **Context Compaction Instability**: Compaction logic is currently causing severe headaches—ranging from infinite compaction loops that waste tokens ([#26656](https://github.com/openai/codex/issues/26656)) to failed remote compact tasks ([#14860](https://github.com/openai/codex/issues/14860)). 
* **Opaque Rate Limiting Logic**: Developers are highly frustrated by hitting hard usage limits while the UI/extension claims significant quota remains ([#12299](https://github.com/openai/codex/issues/12299), [#26668](https://github.com/openai/codex/issues/26668)). The telemetry gap between actual backend limits and frontend displays needs resolution.
* **Sandbox and Exec failures on Windows**: The `spawn setup refresh` error is a recurring nightmare for Windows users, breaking fundamental agent capabilities (shell commands, browser control, node_repl).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-06

## 1. Today's Highlights
Gemini CLI saw active patching across its release branches today, rolling out fixes for `v0.45.2` and `v0.46.0-preview.2` alongside a new nightly build. The contributor community remained highly focused on core stability, submitting several critical pull requests to address terminal rendering bugs, API payload rejections, and startup crashes. Meanwhile, tracking issues highlight an ongoing strategic push by maintainers to improve agent self-awareness, AST-aware codebase mapping, and Auto Memory reliability.

## 2. Releases
*   **v0.45.2 (Stable Patch):** Backported a patch ([PR #27700](https://github.com/google-gemini/gemini-cli/pull/27700)) to ensure CLI transition and deprecation banners are consistently visible to users rather than being hidden after 5 displays.
*   **v0.46.0-preview.2 (Preview Patch):** Applied the same transition banner fix ([PR #27699](https://github.com/google-gemini/gemini-cli/pull/27699)) to the preview release track.
*   **v0.47.0-nightly.20260605:** Automated nightly version bump ([PR #27680](https://github.com/google-gemini/gemini-cli/pull/27680)).

## 3. Hot Issues
1.  **[Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** *(👍 8)*: A critical P1 bug where deferring to the generalist agent causes the CLI to hang indefinitely. Users report having to manually instruct the model to avoid sub-agents to continue working.
2.  **[Shell command execution gets stuck](https://github.com/google-gemini/gemini-cli/issues/25166)** *(👍 3)*: A P1 bug where simple CLI commands permanently hang, showing "Awaiting user input" even after the shell process has finished executing.
3.  **[Subagent recovery masks interruptions](https://github.com/google-gemini/gemini-cli/issues/22323)** *(👍 2)*: The `codebase_investigator` subagent falsely reports `status: "success"` when it hits `MAX_TURNS`, hiding the fact that the analysis was interrupted and incomplete.
4.  **[Gemini ignores custom skills and sub-agents](https://github.com/google-gemini/gemini-cli/issues/21968)**: Users are frustrated that the model rarely invokes custom skills (e.g., specialized gradle/git skills) autonomously, requiring explicit instructions to do so.
5.  **[AST-aware file reads and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** *(👍 1)*: An investigation Epic exploring AST-aware tools to allow precise method-bound reads, reducing token noise and multi-turn misalignment.
6.  **[Security: Auto Memory redaction & logging](https://github.com/google-gemini/gemini-cli/issues/26525)**: A P2 security issue highlighting that the Auto Memory extraction agent processes local transcripts and only redacts secrets *after* they enter the model's context.
7.  **[Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**: The memory system gets stuck in a retry loop because it only marks sessions as "processed" if the agent explicitly reads them via `read_file`.
8.  **[400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)**: The agent crashes with a 400 API error when the environment has over 400 tools enabled, highlighting the need for better dynamic tool filtering.
9.  **[Symlinked sub-agents not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)**: A friction point for power users—`~/.gemini/agents/filename.md` is ignored by the CLI if it is a symlink.
10. **[Browser Agent ignores settings overrides](https://github.com/google-gemini/gemini-cli/issues/22267)**: The Browser Agent currently ignores global or project-level `settings.json` configurations like `maxTurns`.

## 4. Key PR Progress
1.  **[fix(core): strip functionCall.id before API call](https://github.com/google-gemini/gemini-cli/pull/27341)**: Fixes a 400 "Unknown name 'id'" error on subsequent turns by preventing internal ACP IDE IDs from leaking into the Gemini API payload.
2.  **[fix(core): Ensure zero-quota limits fail fast](https://github.com/google-gemini/gemini-cli/pull/27698)**: Prevents a futile 10-attempt retry loop hang when hitting a hard quota limit of `0` on unbilled/free-tier accounts.
3.  **[fix(core): bypass node-pty on WSL for Windows executables](https://github.com/google-gemini/gemini-cli/pull/27354)**: Resolves PTY interop crashes on Windows Subsystem for Linux (WSL) by implementing an automatic fallback to standard Node `child_process` for `.exe` files.
4.  **[fix(core): treat configured includeDirectories as optional](https://github.com/google-gemini/gemini-cli/pull/27701)**: Switches the startup loop to lenient directory loading, preventing a startup crash if an optional directory (like `.kilocode/rules`) is missing.
5.  **[fix(agents): prevent duplicate agent loading](https://github.com/google-gemini/gemini-cli/pull/27695) / [fix: dedupe home agent directories](https://github.com/google-gemini/gemini-cli/pull/27694)**: Two separate PRs addressing an issue where launching the CLI from the home directory caused duplicate agent warnings.
6.  **[fix(core): hide ignored folders from session context](https://github.com/google-gemini/gemini-cli/pull/27678)**: Removes `.gitignore` and `.geminiignore` ignored directories from the initial `session_context` tree to reduce token overhead.
7.  **[fix(cli): fall back for oversized bug report URLs](https://github.com/google-gemini/gemini-cli/pull/27591)**: Fixes a `/bug` command crash on Android/Termux by implementing a fallback when GitHub issue template URLs exceed system URL limits.
8.  **[fix: wrap Ajv validate() in try/catch](https://github.com/google-gemini/gemini-cli/pull/27348)**: Prevents an `undefined` crash in `write_file`/`replace` tools when the LLM sends unexpected parameter shapes to the Ajv schema validator.
9.  **[fix(cli): handle tmux false positive background detection](https://github.com/google-gemini/gemini-cli/pull/27572)**: Fixes a regression causing inappropriate theme switching and compatibility warnings when running Gemini CLI inside `tmux`/`mosh`.
10. **[Prevent extra spaces on CJK continuation cells](https://github.com/google-gemini/gemini-cli/pull/27505)**: Squashes a rendering bug that injected erroneous spaces between wide characters, improving cross-platform terminal serialization for international users.

## 5. Feature Request Trends
*   **AST-Aware Code Navigation**: A strong push from maintainers and the community to integrate AST tools (like `tilth` or `glyph`) for more precise, token-efficient file reading and codebase mapping.
*   **Agent Autonomy & Self-Awareness**: Requests for agents to better understand their own mechanics, limits, and custom skills, utilizing sub-agents more intelligently rather than requiring constant explicit user guidance.
*   **Robust Sub-Agent Infrastructure**: High demand for remote/background agent capabilities, specifically surrounding secure task-level auth, persistent browser sessions, and local agent sprints.

## 6. Developer Pain Points
*   **Tool/Agent Hanging**: The most prominent developer frustration is the CLI hanging indefinitely during shell execution or when sub-agents are invoked, often requiring hard process kills.
*   **API Quota & Tool Scoping**: Users are experiencing harsh failures (400 errors or infinite retry loops) due to API limits, either from unbilled quotas or massive tool counts that the agent fails to filter down dynamically.
*   **Workspace Pollution**: Developers report friction with the model creating temporary scripts in random directories and Auto Memory logging spam, both of which leave the workspace cluttered and require manual cleanup.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-06-06

## 1. Today's Highlights
GitHub Copilot CLI rolled out **v1.0.60**, which improves path traversal in slash-commands, expands reasoning effort levels for Anthropic models across all plans, and resolves a frustrating blank-screen bug affecting terminal multiplexer users. However, the release has immediately sparked a wave of new platform-specific regressions—particularly on Windows and Linux (Alpine/musl)—alongside growing community demand for better security controls around MCP OAuth tokens and repository hooks.

---

## 2. Releases

### v1.0.60 (2026-06-05)
- **Tab completes `..` parent traversal** in slash-command path arguments instead of incorrectly switching tabs.
- **Anthropic max reasoning effort level added**, and all effort levels are now available on every plan tier.
- **Blank screen after waking from sleep** inside a terminal multiplexer is now fixed.

---

## 3. Hot Issues

| # | Issue | Why it matters |
|---|-------|----------------|
| 1 | **[#2101](https://github.com/github/copilot-cli/issues/2101)** — `Transient API error / Rate limit` (👍 17, 27 comments) | Long-running frustration with frequent rate-limiting on model requests; high engagement suggests systemic throttling concerns. |
| 2 | **[#2334](https://github.com/github/copilot-cli/issues/2334)** — `Bring back no-alt-screen` (👍 28, 6 comments) | Most-upvoted issue in this window; users report losing scrollback, find, and standard terminal UX when alt-screen is forced. |
| 3 | **[#3687](https://github.com/github/copilot-cli/issues/3687)** — `copilot.exe fatal-aborts under load (BEX64) on Windows ARM64` | Hard crash (no graceful shutdown) when restoring multiple Windows Terminal tabs under memory pressure; reproducible across v1.0.57–1.0.60. |
| 4 | **[#3698](https://github.com/github/copilot-cli/issues/3698)** — `MCP server connect leak: unbounded child processes` | Slow/unreachable stdio MCP servers cause Copilot CLI to spawn zombie child processes without bound, pinning CPU and degrading the entire machine. |
| 5 | **[#3696](https://github.com/github/copilot-cli/issues/3696)** — `Auto-update downloads linux-x64 on Alpine/musl` | Breaks `runtime.node` loading entirely on Alpine containers after an auto-update picks the wrong package. |
| 6 | **[#3697](https://github.com/github/copilot-cli/issues/3697)** — `Option to disable repository hooks (supply-chain risk)` | Directly references the Miasma worm campaign; asks for a kill-switch for repo-provided hooks to mitigate config-injection attacks. |
| 7 | **[#3547](https://github.com/github/copilot-cli/issues/3547)** — `Background sub-agent hangs at total_turns=0 with gpt-5.5` | Dispatch reports success, but the sub-agent never starts executing; silent failure is dangerous for production automation. |
| 8 | **[#3596](https://github.com/github/copilot-cli/issues/3596)** — `Error loading model list: Not authenticated on resumed session` (👍 8) | Resuming a session invalidates authentication context, blocking the `/model` command; forces users to start fresh sessions. |
| 9 | **[#3693](https://github.com/github/copilot-cli/issues/3693)** — `CTRL+Z unexpectedly quits Copilot CLI` | Standard undo shortcut triggers a graceful exit; fundamentally conflicts with every developer's muscle memory. |
| 10 | **[#3683](https://github.com/github/copilot-cli/issues/3683)** — `Windows shell commands have no console handle since v1.0.57` | Breaks `Clear-Host` and MSAL interactive browser auth in PowerShell tool, blocking Windows-based authentication flows. |

---

## 4. Key PR Progress
> *Note: Only 2 PRs were updated in the last 24 hours, and neither is a feature-bearing contribution from the core team.*

| PR | Status | Description |
|----|--------|-------------|
| **[#3651](https://github.com/github/copilot-cli/pull/3651)** | Open | Community PR to create `xcopilotcli` — appears to be an experimental/exploratory contribution with no linked issue. |
| **[#3473](https://github.com/github/copilot-cli/pull/3473)** | Open | README metadata update (project name). External contributor PR; not merge-ready. |

*The low PR velocity suggests most engineering effort is currently directed toward internal release stabilization and issue triage rather than new feature branches.*

---

## 5. Feature Request Trends

Analysis of the 26 updated issues reveals these dominant feature directions:

1. **Security & supply-chain hardening** — Requests for secure credential storage for MCP OAuth tokens ([#2783](https://github.com/github/copilot-cli/issues/2783)), disabling repo hooks ([#3697](https://github.com/github/copilot-cli/issues/3697)), and more transparent sub-agent permission context ([#3684](https://github.com/github/copilot-cli/issues/3684)).
2. **Session resilience & persistence** — Multiple issues around session resume/fork failures ([#3694](https://github.com/github/copilot-cli/issues/3694), [#3689](https://github.com/github/copilot-cli/issues/3689), [#3695](https://github.com/github/copilot-cli/issues/3695)), auth state loss on resume ([#3596](https://github.com/github/copilot-cli/issues/3596)), and persistent permissions config ([#2398](https://github.com/github/copilot-cli/issues/2398)).
3. **Terminal UX parity** — Strong demand to restore non-alt-screen mode ([#2334](https://github.com/github/copilot-cli/issues/2334)), fix clipboard/copy-paste regression ([#2344](https://github.com/github/copilot-cli/issues/2344), [#2998](https://github.com/github/copilot-cli/issues/2998), [#3693](https://github.com/github/copilot-cli/issues/3693)), and persistent session name display ([#3415](https://github.com/github/copilot-cli/issues/3415)).
4. **BYOK & credential lifecycle** — Refresh short-lived BYOK credentials without restarting ([#3682](https://github.com/github/copilot-cli/issues/3682)).
5. **Cost observability** — Expose AI credit consumption in hooks for external tracking ([#3686](https://github.com/github/copilot-cli/issues/3686)).
6. **Platform completeness** — Voice mode for `linux-arm64` ([#3690](https://github.com/github/copilot-cli/issues/3690)), stable Windows ARM64 support ([#3687](https://github.com/github/copilot-cli/issues/3687)), and correct musl packaging ([#3696](https://github.com/github/copilot-cli/issues/3696)).

---

## 6. Developer Pain Points

- **Copy/paste is fundamentally broken** — Multiple reports confirm that selecting text pastes the *previous* clipboard contents ([#2998](https://github.com/github/copilot-cli/issues/2998)), native terminal copy-on-select is overridden ([#2344](https://github.com/github/copilot-cli/issues/2344)), and `Ctrl+Z` exits the tool instead of undoing ([#3693](https://github.com/github/copilot-cli/issues/3693)). This is a daily friction point for every user.
- **Session management is fragile** — Users cannot reliably resume ([#3689](https://github.com/github/copilot-cli/issues/3689), [#3694](https://github.com/github/copilot-cli/issues/3694)), fork ([#3695](https://github.com/github/copilot-cli/issues/3695)), or maintain auth across sessions ([#3596](https://github.com/github/copilot-cli/issues/3596)), eroding trust in stateful workflows.
- **Platform regressions on Windows and Alpine** — Fatal crashes ([#3687](https://github.com/github/copilot-cli/issues/3687)), missing console handles ([#3683](https://github.com/github/copilot-cli/issues/3683)), and broken auto-updates on musl ([#3696](https://github.com/github/copilot-cli/issues/3696)) block adoption on significant developer populations.
- **MCP reliability & resource leaks** — Zombie process accumulation ([#3698](https://github.com/github/copilot-cli/issues/3698)) and silent sub-agent hangs ([#3547](https://github.com/github/copilot-cli/issues/3547)) make MCP-based automation unreliable in production.
- **Rate limiting is a persistent blocker** — The long-open transient API error issue ([#2101](https://github.com/github/copilot-cli/issues/2101)) continues to accumulate comments, suggesting the throttling model does not match real-world developer workflows.
- **Alt-screen regression** — The forced switch to alt-screen mode removes standard terminal affordances (scrollback, find, history), and is the most upvoted issue in this cycle ([#2334](https://github.com/github/copilot-cli/issues/2334), 👍 28).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-06

Here is the technical community digest for the Kimi Code CLI ecosystem based on the latest GitHub activity.

## 1. Today's Highlights
The major headline today is a strategic evolution in the project's architecture: MoonshotAI is officially guiding users toward a next-generation, rebuilt single-binary successor called **Kimi Code CLI**. The current Python-based repository has been retroactively renamed back to **Kimi CLI** to avoid namespace collisions. To facilitate a smooth transition without disruptive forced migrations, version **1.47.0** was released today, introducing native `/upgrade` commands that automatically migrate user configurations to the new standalone client.

## 2. Releases
### [v1.47.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.47.0)
*   **Successor Migration Guide**: Introduced an in-product `/upgrade` command and welcome screen nudges to help users seamlessly transition to the new Kimi Code single-binary executable.
*   **Bug Fix (Tools)**: Fixed an issue where trailing outputs in error briefs were missing, and ensured that briefs are rendered strictly as plain text ([PR #2389](https://github.com/MoonshotAI/kimi-cli/pull/2389)).
*   **Documentation**: Updated project naming to "Kimi CLI" and added official links to the Kimi Code CLI successor ([PR #2431](https://github.com/MoonshotAI/kimi-cli/pull/2431)).

## 3. Hot Issues
*(Note: Only 1 issue was updated in the last 24 hours. It is highlighted below for relevance.)*
*   **[Issue #2430](https://github.com/MoonshotAI/kimi-cli/issues/2430) — [bug] auto logged out in the middle of a task**
    *   **Context**: A Windows user running model `kimi-k2.6` reported that the CLI unexpectedly logged them out while a background task was executing. 
    *   **Why it matters**: Session state and authentication persistence during long-running autonomous tasks are critical for developer trust. Although quickly closed, it highlights potential token-refresh or network-interrupt handling gaps on specific OS environments.

## 4. Key PR Progress
Here are the most important Pull Requests merged or updated in the last 24 hours:

1.  **[PR #2431](https://github.com/MoonshotAI/kimi-cli/pull/2431) [CLOSED] docs: rename project to Kimi CLI and link to Kimi Code CLI successor**
    *   Clarifies the distinction between the legacy Python CLI and the new architecture, officially pointing the README to `MoonshotAI/kimi-code`.
2.  **[PR #2432](https://github.com/MoonshotAI/kimi-cli/pull/2432) [CLOSED] feat(shell): guide users to upgrade to the new Kimi Code**
    *   Implements the user-facing migration path. Notably, the UI design avoids "scary wind-down wording" or forced prompts, relying instead on an opt-in `/upgrade` command.
3.  **[PR #2433](https://github.com/MoonshotAI/kimi-cli/pull/2433) [CLOSED] chore(release): bump kimi-cli to 1.47.0**
    *   The version bump commit synchronizing the `kimi-cli` and `kimi-code` wrappers to the latest release.
4.  **[PR #2434](https://github.com/MoonshotAI/kimi-cli/pull/2434) [OPEN] fix: suppress MCP connection errors and handle LLM double-serialization**
    *   A critical fix for heavy Model Context Protocol (MCP) users (e.g., using Notion or code-index servers). It prevents event loop crashes when an MCP connection drops unexpectedly and fixes a bug where LLM outputs were being double-serialized.
5.  **[PR #2429](https://github.com/MoonshotAI/kimi-cli/pull/2429) [OPEN] fix: prevent idle cursor blink from forcing scroll to bottom in Linux terminals**
    *   Resolves a major UX frustration for Linux users where reading long outputs was impossible because an idle cursor blink forced the terminal view to jump to the bottom every second.
6.  **[PR #2389](https://github.com/MoonshotAI/kimi-cli/pull/2389) [CLOSED] fix(tools): include trailing output in error briefs**
    *   Improves error visibility by ensuring truncated trailing outputs are captured and rendered as plain text when a tool fails.

## 5. Feature Request Trends
Based on the PRs addressing UX and tooling, the prominent community direction aligns heavily with **MCP (Model Context Protocol) Ecosystem Integration**. Users are pushing the boundaries of CLI capabilities by connecting complex external tools (code-indexers, Notion) to the `kimi-k2.6` model. The community is actively requesting (and contributing) hardening for these connections to ensure MCP servers handle disconnects and crashes gracefully without killing the main LLM loop.

## 6. Developer Pain Points
*   **Terminal UI/UX Quirks**: Developers frequently work with long streaming outputs in terminal environments. Cursor blinking forcing scroll jumps (addressed in PR #2429) is a prime example of friction in terminal rendering that disrupts code review workflows.
*   **MCP Server Stability**: As developers hook the CLI into external MCP servers, connection instability is causing event-loop exceptions. Users feel this pain when background indexing or external tooling silently fails.
*   **Environment/Session Persistence**: As noted in Issue #2430, maintaining state and authentication during long automated tasks on varying OS architectures (like Windows x64) remains a stubborn pain point, though the upcoming transition to the single-binary Kimi Code is likely designed to mitigate these legacy Python packaging issues.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-06

## 1. Today's Highlights

OpenCode shipped **v1.16.0** and a rapid patch **v1.16.2**, introducing AWS Bedrock support for OpenAI models, managed workspace cloning, and file-based agent loading. A major architectural experiment for **Desktop v2 tabs** was opened, signaling a foundational shift in how the app handles multi-session and state management. Community focus remains on provider compatibility, long-context degradation, and UI reliability.

---

## 2. Releases

### [v1.16.2](https://github.com/anomalyco/opencode/releases/tag/v1.16.2)
- **Reasoning summaries** now only run on providers that support them, avoiding GPT-5 request failures on compatible backends.
- **Edit operations** now refuse loose matches that could overwrite the wrong code or replace an existing file by mistake.
- Fixed Bedrock sessions hanging.

### [v1.16.0](https://github.com/anomalyco/opencode/releases/tag/v1.16.0)
- Added **managed workspace cloning** that preserves dirty and untracked files.
- Added moving sessions between workspaces and directories.
- Added proper **OpenAI model support through AWS Bedrock**.
- Added **skill discovery and file-based agent loading**.
- Updated GitHub Copilot usage.

---

## 3. Hot Issues

1. **[#2242](https://github.com/anomalyco/opencode/issues/2242) — Sandbox the agent** (51 comments, 51 👍)
   A long-standing request to restrict terminal commands to the project directory, similar to `seatbelt` in Gemini CLI or Codex CLI. High community demand indicates security and safety remain top-of-mind for enterprise and serious users.

2. **[#30862](https://github.com/anomalyco/opencode/issues/30862) — STUCK WITH NO RESPOND/ERROR** (11 comments)
   After updating to the latest version, users report sessions hanging with no output, though backend processing appears to continue. Likely related to the v1.16.x Bedrock reasoning changes.

3. **[#30811](https://github.com/anomalyco/opencode/issues/30811) — Code quality degrades in long conversations** (11 comments)
   Detailed analysis of how compaction discards context, edits lack automatic verification, and error recovery is poor. Core architectural concern affecting power users.

4. **[#29992](https://github.com/anomalyco/opencode/issues/29992) — Auto-scroll breaks after manual scrolling** (12 comments, 15 👍)
   A persistent UX regression: once you scroll up during generation, auto-scroll never recovers even when returning to the bottom. Frustrating for real-time monitoring.

5. **[#30948](https://github.com/anomalyco/opencode/issues/30948) — Bedrock-compatible gateway returns empty output in 1.16.0** (7 comments, 4 👍)
   Regression from the new Bedrock support: third-party Bedrock-compatible gateways no longer work. Points to overly strict provider assumptions.

6. **[#31000](https://github.com/anomalyco/opencode/issues/31000) — Copilot provider model-list fetch constructs non-existent domain** (6 comments)
   `d7()` builds `copilot-api.github.com` instead of `api.githubcopilot.com` for github.com users, breaking dynamic model discovery entirely.

7. **[#29059](https://github.com/anomalyco/opencode/issues/29059) — Dynamic workflows for repeatable multi-step automation** (7 comments, 12 👍)
   Request to match Claude Code's new workflow feature — project-local, repeatable automation pipelines. Strong community appetite for agentic orchestration.

8. **[#7801](https://github.com/anomalyco/opencode/issues/7801) — Plan Mode auto-switches to Build mode** (5 comments, 18 👍)
   Plan mode asks to switch but then auto-switches without user confirmation, breaking trust in the plan-build separation.

9. **[#30870](https://github.com/anomalyco/opencode/issues/30870) — `Effect.orDie` loses sub-agent error information** (2 comments)
   Technical deep-dive: `task.ts` converts all sub-agent failures into uninformative defects, preventing the parent AI from recovering. Important for reliability.

10. **[#30996](https://github.com/anomalyco/opencode/issues/30996) — MCP toggles unresponsive in Desktop v1.16.2 on macOS** (2 comments)
    Settings panel MCP toggles do nothing after the update, blocking MCP server configuration entirely.

---

## 4. Key PR Progress

1. **[#31034](https://github.com/anomalyco/opencode/pull/31034) — Desktop v2 tab architecture** (`OPEN`)
   Major refactor: splits legacy and v2 app roots, makes tabs navigation records over a single stable session host, scopes server/directory/draft/permission/terminal ownership explicitly. Foundational for multi-tab stability.

2. **[#27554](https://github.com/anomalyco/opencode/pull/27554) — Local LAN provider discovery + auto-discover models** (`OPEN`)
   Adds mDNS + network scanning for local OpenAI-compatible servers (LM Studio, Ollama, etc.). Directly addresses [#2047](https://github.com/anomalyco/opencode/issues/2047) and local dev ergonomics.

3. **[#30837](https://github.com/anomalyco/opencode/pull/30837) — Optimize snapshots & add loading UI** (`OPEN`)
   Introduces `alternates` to eliminate per-blob duplication in snapshot directories, reducing disk bloat. Adds loading indicators for clarity during heavy operations.

4. **[#31021](https://github.com/anomalyco/opencode/pull/31021) — Support model variants in context limit and compaction** (`CLOSED`)
   Fixes compaction to respect per-variant context limits (e.g., "low"/"high" effort tiers). Directly mitigates [#30811](https://github.com/anomalyco/opencode/issues/30811)'s context loss complaint.

5. **[#31033](https://github.com/anomalyco/opencode/pull/31033) — MCP OAuth: use localhost instead of 127.0.0.1** (`OPEN`)
   Changes redirect URI to `localhost` to avoid AWS WAF `GenericRFI_BODY` rule false positives. Critical for enterprise MCP integrations.

6. **[#31029](https://github.com/anomalyco/opencode/pull/31029) / [#31030](https://github.com/anomalyco/opencode/pull/31030) — Binary file handling and image reads in Core V2** (`OPEN`)
   Bot-generated PRs porting V1 binary rejection and image attachment logic into Core V2, sniffing signatures rather than trusting extensions. Essential for media-rich workflows.

7. **[#8535](https://github.com/anomalyco/opencode/pull/8535) — Bi-directional cursor-based pagination for sessions** (`OPEN`)
   Adds cursor pagination across server, app, TUI, and HTTP API. Performance foundation for large session histories.

8. **[#9545](https://github.com/anomalyco/opencode/pull/9545) — Unified usage tracking with auth refresh** (`OPEN`)
   Built-in usage tracking for OAuth providers (Anthropic, Copilot, OpenAI) with `GET /usage` endpoint. Addresses billing transparency concerns like [#30995](https://github.com/anomalyco/opencode/issues/30995).

9. **[#31018](https://github.com/anomalyco/opencode/pull/31018) — HTTP recorder public beta** (`OPEN`)
   Introduces record/replay for HTTP APIs with automatic redaction, cassette persistence, and binary body support. Valuable for testing and reproducibility.

10. **[#20691](https://github.com/anomalyco/opencode/pull/20691) — Restore TUI session header** (`CLOSED`)
    Brings back the session title and context usage header removed during a prior refactor. Small but meaningful TUI quality improvement.

---

## 5. Feature Request Trends

- **Agent sandboxing and security** ([#2242](https://github.com/anomalyco/opencode/issues/2242)) — Restricting file/command access to project scope is the most upvoted open request. Users want `seatbelt`-equivalent isolation.
- **Repeatable multi-step workflows** ([#29059](https://github.com/anomalyco/opencode/issues/29059)) — Project-local automation pipelines inspired by Claude Code's dynamic workflows. High demand for agentic orchestration.
- **Long-context resilience** ([#30811](https://github.com/anomalyco/opencode/issues/30811)) — Better compaction strategies, automatic post-edit verification, and sub-agent error propagation. The community is hitting context walls in real projects.
- **Provider flexibility** ([#8875](https://github.com/anomalyco/opencode/issues/8875), [#9897](https://github.com/anomalyco/opencode/issues/9897)) — Vision attachments and `modalities` configuration for custom providers remain underserved.
- **Plan/Build mode separation** ([#7801](https://github.com/anomalyco/opencode/issues/7801), [#9604](https://github.com/anomalyco/opencode/issues/9604)) — Users want explicit control over mode transitions with confirmation, not auto-switching.

---

## 6. Developer Pain Points

- **Provider regressions after v1.16.x**: Bedrock-compatible gateways ([#30948](https://github.com/anomalyco/opencode/issues/30948)), Copilot domain resolution ([#31000](https://github.com/anomalyco/opencode/issues/31000)), and LM Studio model refresh ([#2047](https://github.com/anomalyco/opencode/issues/2047)) all broke or worsened. The new Bedrock OpenAI integration introduced narrow assumptions that fail on third-party endpoints.
- **Session hangs and unresponsiveness** ([#30862](https://github.com/anomalyco/opencode/issues/30862)) — After upgrading, some users experience complete output freeze. Likely tied to reasoning summary provider checks in v1.16.2.
- **Desktop UI regressions**: File explorer missing "open in system" button on Windows ([#29875](https://github.com/anomalyco/opencode/issues/29875)), MCP toggles unresponsive on macOS ([#30996](https://github.com/anomalyco/opencode/issues/30996)), and new layout toggle buttons disappearing ([#29808](https://github.com/anomalyco/opencode/issues/29808)). Each release introduces new UI breakage.
- **Context and quality degradation in long sessions** ([#30811](https://github.com/anomalyco/opencode/issues/30811)) — The single most impactful architectural complaint: compaction loses critical context, no automatic verification after edits, and `Effect.orDie` swallows sub-agent errors ([#30870](https://github.com/anomalyco/opencode/issues/30870)).
- **High idle CPU on macOS** ([#26416](https://github.com/anomalyco/opencode/issues/26416)) — Both Desktop and CLI consume significant CPU while idle, a resource concern for laptop users.
- **Git initialization blocking** ([#30985](https://github.com/anomalyco/opencode/issues/30985)) — Enabling Git before project setup causes hangs from massive `node_modules` indexing. Needs smarter ignore handling.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-06

## 1. Today's Highlights
The Pi ecosystem experienced high activity focused on agent orchestration, extension API expansion, and provider compatibility. Major highlights include progress on a multi-agent workflow engine, a new approval system for workspace security, and the introduction of an Anthropic Vertex AI provider. 

## 2. Releases
*No new official releases were published in the last 24 hours.*

## 3. Hot Issues

1. **[OPEN] [#4945 openai-codex can hang on Working... with zero-usage aborted turns](https://github.com/earendil-works/pi/issues/4945)**: 
   A critical issue where the interactive TUI gets stuck on `Working...` without streaming text or errors, forcing an abort. It has garnered significant community attention (28 👍, 53 comments).
2. **[OPEN] [#5420 Auto-compaction crashes with `Cannot continue from message role: assistant`](https://github.com/earendil-works/pi/issues/5420)**:
   A severe crash during auto-compaction in long sessions (203k+ tokens) where the compacted message list ends on an assistant message. Users are heavily upvoting (3 👍) as it breaks long-running context windows.
3. **[OPEN] [#5188 shift+enter submits and does not create new line](https://github.com/earendil-works/pi/issues/5188)**:
   A keybinding regression where `shift+enter` submits input instead of creating a newline despite explicit `tui.input.newLine` configurations.
4. **[OPEN] [#5386 Crash in getSessionStats() when assistant message has no usage field](https://github.com/earendil-works/pi/issues/5386)**:
   Ollama-backed models frequently crash the agent because they omit token usage data in their API responses.
5. **[CLOSED] [#3715 `local-llm` streams terminate at 5 min from undici default `bodyTimeout`](https://github.com/earendil-works/pi/issues/3715)**:
   Local LLM users hitting a 5-minute wall on long tool calls due to hardcoded HTTP timeouts. The issue was resolved to enable longer executions.
6. **[CLOSED] [#5384 DeepSeek via OpenRouter still sends `role: "developer"`](https://github.com/earendil-works/pi/issues/5384)**:
   A compatibility bug where proxy routing bypasses the `detectCompat()` fixes previously applied to direct DeepSeek API calls.
7. **[CLOSED] [#5389 Speech to text on mac in Terminal breaks/freezes pi](https://github.com/earendil-works/pi/issues/5389)**:
   Native Mac STT triggers a GUI freeze during active workloads, rendering the TUI unresponsive while backend processes continue.
8. **[CLOSED] [#5422 Crash: Rendered line exceeds terminal width causes uncaughtException](https://github.com/earendil-works/pi/issues/5422)**:
   Unhandled exceptions crashing the agent when terminal rendering exceeds width limits.
9. **[CLOSED] [#5423 pi -p exits before extension async callbacks fire](https://github.com/earendil-works/pi/issues/5423)**:
   Non-interactive mode exits prematurely, dropping asynchronous results from push-callback extension patterns.
10. **[CLOSED] [#5447 feat: allow excluding built-in tools from agent sandbox](https://github.com/earendil-works/pi/issues/5447)**:
   Developers currently have to hijack internal prototypes to remove default tools (`read`, `edit`, `bash`), indicating a strong need for an official opt-out API.

## 4. Key PR Progress

1. **[#5262 [OPEN] feat(ai): add Anthropic Vertex provider](https://github.com/earendil-works/pi/pull/5262)**: 
   Adds native support for Claude via Google Cloud Vertex AI using a thin adapter over the existing Anthropic streaming path.
2. **[#5332 [OPEN] feat(config): Approval system for workspaces](https://github.com/earendil-works/pi/pull/5332)**: 
   Introduces an important security feature requiring interactive approval for workspace `.pi` folders on first load to prevent malicious extension execution.
3. **[#5385 [OPEN] feat: detect first-run terminal theme](https://github.com/earendil-works/pi/pull/5385)**: 
   Improves first-run UX by automatically querying the terminal via OSC to set Pi's light/dark theme.
4. **[#5426 [CLOSED] feat(coding-agent): add workflow extension for multi-agent orchestration](https://github.com/earendil-works/pi/pull/5426)**: 
   Implements a highly anticipated `workflow` tool and command allowing single, parallel, and chained execution of sub-agents.
5. **[#5437 [CLOSED] fix: neutralize SUMMARIZATION_SYSTEM_PROMPT for non-coding agents](https://github.com/earendil-works/pi/pull/5437)**: 
   Fixes context bias by replacing hardcoded `"AI coding assistant"` with `"AI assistant"` during auto-compaction.
6. **[#5435 [CLOSED] feat(agent): validate LLM messages after extension transforms](https://github.com/earendil-works/pi/pull/5435)**: 
   Adds validation guardrails to catch invalid message sequences generated by extension `context` hooks before they cause opaque provider errors.
7. **[#5434 [CLOSED] fix(edit): tolerate extraneous keys in edits[]](https://github.com/earendil-works/pi/pull/5434)**: 
   Enhances reliability with weaker models by ignoring unexpected JSON keys in edit tool outputs rather than failing.
8. **[#5439 [CLOSED] feat(coding-agent): export package path helpers from root API](https://github.com/earendil-works/pi/pull/5439)**: 
   Exports internal helpers (`getPackageDir`, `getReadmePath`) to the public API map, improving extension developer experience.
9. **[#5443 [CLOSED] Expose waitForIdle/reload on ExtensionContext](https://github.com/earendil-works/pi/issues/5443)**: 
   Unifies extension contexts, allowing tool developers to access session management functions (`waitForIdle`, `fork`) directly within `execute` functions.
10. **[#5281 [OPEN] feat(coding-agent): Support keybindings for all commands](https://github.com/earendil-works/pi/pull/5281)**: 
   Refactors the command system to allow user-defined keybindings for any registered command via a unified `cmd.<name>` convention.

## 5. Feature Request Trends

*   **Multi-Agent Workflows & Sub-process Management**: A strong surge in requests for native multi-agent orchestration, dispatch queues, and background child processes (Issue #5423, Issue #2023, PR #5426).
*   **Extension API Depth & UI Injection**: Developers want more control over the TUI and agent lifecycle, requesting custom loading components (Issue #5411), broader access to session commands (Issue #5443), and the ability to intercept tools like `grep` (Issue #5354).
*   **Transport and Proxy Expansions**: Consistent demand for WebSocket transport support across standard API endpoints (Issue #3442, Issue #5446) and better compatibility with proxy routers like OpenRouter (Issue #5384).

## 6. Developer Pain Points

*   **TUI and Keybinding Quirks**: Frontend regressions are causing frustration, notably broken `shift+enter` inputs (Issue #5188), frozen UI during speech-to-text (Issue #5389), and terminal width crashes (Issue #5422).
*   **State Management in Long Sessions**: Auto-compaction continues to be a fragile point for power users, leading to lost context or fatal crashes when message sequences end unexpectedly (Issue #5420, Issue #5445).
*   **Local/Proxy Model Fragility**: Developers utilizing self-hosted models (Ollama) or alternative routing face persistent issues with hard timeouts (Issue #3715) and unhandled nulls in provider responses (Issue #5386).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-06

## 1. Today's Highlights
Qwen Code shipped **v0.17.1-nightly**, addressing a CLI output bug and pushing the release pipeline forward. The community saw a massive surge in daemon and web-shell ecosystem contributions, with new endpoints for session forking, ACP mode slash commands, and a unified dev launcher. Meanwhile, several high-impact bugs were reported around memory management, prompt caching, and self-hosted LLM compatibility, signaling growing enterprise and power-user adoption.

## 2. Releases
- **[v0.17.1-nightly.20260605.715266537](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.1-nightly.20260605.715266537)**
  - **chore(release):** Automated version bump to v0.17.1 via CI bot ([PR #4742](https://github.com/QwenLM/qwen-code/pull/4742)).
  - **fix(cli):** Skip thought parts in copy output, contributed by @he-yufeng. Cleans up clipboard behavior so internal reasoning tokens aren't copied to the user's clipboard.

## 3. Hot Issues
1. **[#3384 — Unable to add OpenAI-compatible local LLM](https://github.com/QwenLM/qwen-code/issues/3384)** ⭐ 13 comments, 👍 1
   A long-standing pain point: users running local models via vLLM struggle with `settings.json` provider configuration. High engagement shows strong demand for seamless self-hosted model integration.

2. **[#4514 — Tracking `qwen serve` daemon capability gaps](https://github.com/QwenLM/qwen-code/issues/4514)** ⭐ 12 comments
   A critical meta-issue tracking missing HTTP/SSE surfaces and slash-command passthrough gaps in the daemon architecture post-v0.16-alpha. Acts as a roadmap for the `serve` subsystem.

3. **[#4167 — CLI crashed (OOM)](https://github.com/QwenLM/qwen-code/issues/4167)** ⭐ 8 comments
   Node.js Mark-Compact GC failures pushing past 2GB. Highlights that memory optimization remains an ongoing battle for long-running sessions.

4. **[#4801 — Add a dedicated `web_search` tool](https://github.com/QwenLM/qwen-code/issues/4801)** ⭐ 3 comments
   Proposes replacing the current URL-fetching approach with a true search-engine query tool. A highly requested enhancement for expanding the agent's research capabilities.

5. **[#4802 — qwen3.7-plus multimodal support not detected](https://github.com/QwenLM/qwen-code/issues/4802)** ⭐ 2 comments
   The modality regex falls through to text-only for the newest `qwen3.7-plus` model. A quick-win patch is already submitted (PR #4803).

6. **[#4777 — Deferred-tools listing busts prompt cache](https://github.com/QwenLM/qwen-code/issues/4777)** ⭐ 2 comments
   MCP progressive discovery invalidates the system prompt cache on every tool reveal. Directly impacts latency and API costs for heavy tool users.

7. **[#4791 — `write_file`/`edit` fail validation with JSON content](https://github.com/QwenLM/qwen-code/issues/4791)** ⭐ 2 comments
   Schema validation incorrectly parses stringified JSON parameters as nested objects. A blocking issue for editing config files.

8. **[#4813 — Shared `baseUrl` cannot be set once for multiple models](https://github.com/QwenLM/qwen-code/issues/4813)** ⭐ 1 comment
   Configuration redundancy frustrates users pointing multiple models at the same local endpoint. Needs a provider-level base URL inheritance mechanism.

9. **[#4809 — Web-shell: 13 CLI slash commands unsupported](https://github.com/QwenLM/zwen-code/issues/4809)** ⭐ 2 comments
   Gap analysis of missing ACP-compatible commands in the web-shell. Essential for feature parity between CLI and daemon interfaces.

10. **[#4794 — Compact mode tool merge causes full-screen flash](https://github.com/QwenLM/qwen-code/issues/4794)** ⭐ 1 comment
    UI rendering bug where `mergeCompactToolGroups` causes Ink's `<Static>` component to remount, flashing the entire terminal. Affects daily UX for power users.

## 4. Key PR Progress
1. **[#4812 — feat(serve): add POST /session/:id/branch for session forking](https://github.com/QwenLM/qwen-code/pull/4812)** by @doudouOUC
   Introduces a new daemon endpoint to fork a live session's JSONL without history replay. Source session must be idle (409 if active).

2. **[#4811 — feat(cli): enable /remember, /forget, /dream in ACP mode](https://github.com/QwenLM/qwen-code/pull/4811)** by @doudouOUC
   Bridges the gap for web-shell users by exposing memory and dream-session commands to the ACP integration layer.

3. **[#4803 — fix(core): add multimodal support for qwen3.7-plus](https://github.com/QwenLM/qwen-code/pull/4803)** by @pomelo-nwu
   Adds explicit regex pattern matching so `qwen3.7-plus` is correctly identified as image+video capable.

4. **[#4793 — fix(cli): coerce non-string tool params for self-hosted LLMs](https://github.com/QwenLM/qwen-code/pull/4793)** by @launchswitch
   Self-hosted models (vLLM, LMStudio) sometimes return numbers/booleans for string params. This PR adds coercions to prevent `SchemaValidator` rejections.

5. **[#4810 — fix(core): isolate OpenAI SDK abort listener leak](https://github.com/QwenLM/qwen-code/pull/4810)** by @yiliang114
   Wraps `AbortSignal` in a per-request child controller to contain the SDK's listener leak, preventing memory accumulation in long sessions.

6. **[#4647 — fix(clipboard): use platform-native tools for image paste on Linux](https://github.com/QwenLM/qwen-code/pull/4647)** by @CNCSMonster
   Replaces the buggy native clipboard module with `wl-paste`/`xclip` on Linux, specifically fixing WSL2+Wayland environments.

7. **[#4677 — fix(cli): vim mode Esc leak, Enter submit, render lag](https://github.com/QwenLM/qwen-code/pull/4677)** by @zzhenyao
   Comprehensive fix for vim-mode enthusiasts: prevents Esc leaks, fixes Enter submission, and implements missing NORMAL mode commands.

8. **[#4799 — feat(web-shell): add daemon dev launcher](https://github.com/QwenLM/qwen-code/pull/4799)** by @ytahdn
   Adds a single command to launch both the daemon and web-shell dev server, auto-opening the browser with a pre-authenticated bearer token.

9. **[#4795 — fix(tui): skip cross-group tool merge to eliminate screen flash](https://github.com/QwenLM/qwen-code/pull/4795)** by @zzhenyao
   Directly addresses Issue #4794 by bypassing data-level merge in `<Static>` mode, preventing Ink key changes and remounts.

10. **[#2838 — feat: add Bun runtime support](https://github.com/QwenLM/qwen-code/pull/2838)** by @euxaristia
    Long-running effort to add Bun as an alternative runtime for 3-5x faster startup and lower memory usage. Still under active review.

## 5. Feature Request Trends
- **Daemon & Web-Shell Parity**: The strongest trend is closing the gap between CLI and daemon modes—users want full slash-command support, session forking, and stable ACP integrations.
- **Self-Hosted Model Support**: Multiple requests for better custom provider UX, shared base URLs, and robust handling of non-OpenAI-compliant model outputs.
- **Tool Ecosystem Expansion**: Dedicated `web_search` tool, MCP prompt cache optimization, and improved tool parameter validation.
- **UI/UX Refinements**: Compact mode stability, vim mode fixes, and clipboard reliability across platforms.

## 6. Developer Pain Points
- **Memory Management**: OOM crashes continue to appear, particularly in long sessions with large conversation histories. The `structuredClone` deep-copy pattern (Issue #2562) remains a known bottleneck.
- **Configuration Complexity**: Users find `settings.json` cumbersome for multi-model setups, especially when duplicating `baseUrl` entries or configuring local endpoints.
- **CI/CD Reliability**: Stale green checks allowing semantic conflicts to merge into `main` (Issue #4805), plus broken automated triage workflows, indicate infrastructure growing pains.
- **Model Compatibility**: Self-hosted LLMs via vLLM/LMStudio frequently return non-standard types that break Qwen Code's schema validation, requiring defensive coercions.
- **Stale Temporal Context**: Models lose track of the current date during long conversations (PR #4798), indicating a need for per-query context injection.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-06-06

## 1. Today's Highlights

The DeepSeek TUI (CodeWhale) ecosystem is experiencing a massive surge in community engagement around the upcoming **v0.9.0** release. Maintainer `Hmbown` has initiated a structured "stewardship" phase, actively triaging, harvesting, and integrating long-standing community PRs into the main integration branch. Key focus areas include the new **WhaleFlow** orchestration engine, **Hugging Face MCP/Hub integration**, and sweeping architectural refactors aimed at improving provider management and command dispatch.

## 2. Releases
No new official releases were published in the last 24 hours. The repository is currently in an active feature-freeze and stabilization phase targeting the v0.9.0 milestone.

## 3. Hot Issues

1. **[OPEN] UI refactor needed ([#2766](https://github.com/Hmbown/CodeWhale/issues/2766))**
   The current confirmation pop-up hides the main interface and makes output copying difficult. This highlights ongoing friction with the Terminal UI's ergonomics, drawing significant discussion (8 comments) on how to improve the UX workflow.

2. **[OPEN] Request for VSCode Extension / Agent View Adaptation ([#1264](https://github.com/Hmbown/CodeWhale/issues/1264), [#2580](https://github.com/Hmbown/CodeWhale/issues/2580))**
   Users are heavily requesting a shift from a strictly terminal-based interface to a VSCode extension, specifically suggesting integration with VSCode's new "Agent View" API. This reflects a strong demand for GUI-native IDE integrations.

3. **[OPEN] Provider Fallback Chain ([#2574](https://github.com/Hmbown/CodeWhale/issues/2574))**
   A highly requested enhancement to allow automatic switching to fallback providers (e.g., OpenRouter, DeepSeek) if the primary provider throws a 401, 429, or 5xx error. Currently, users must manually interrupt their workflow to switch providers.

4. **[OPEN] Port to HarmonyOS / OpenHarmony Next ([#2625](https://github.com/Hmbown/CodeWhale/issues/2625))**
   A community member is actively working on porting CodeWhale to HarmonyOS, but is currently blocked by a transitive `nix` dependency ioctl type mismatch. 

5. **[CLOSED] MCP Tool Name Parsing Bug ([#2744](https://github.com/Hmbown/CodeWhale/issues/2744))**
   A critical bug where MCP tool names containing underscores (e.g., `mcp_my_db_tool`) were incorrectly parsed due to a faulty `split_once('_')` logic, routing calls to non-existent servers. 

6. **[OPEN] Task Execution Freezes / Infinite Waits ([#2739](https://github.com/Hmbown/CodeWhale/issues/2739))**
   Despite previous patches in v0.8.52, users are still experiencing complete TUI freezes during long bug-fix tasks, requiring forceful exits and resulting in lost session context.

7. **[OPEN] Xiaomi MiMo Token Plan & Pricing Support ([#2621](https://github.com/Hmbown/CodeWhale/issues/2621), [#2731](https://github.com/Hmbown/CodeWhale/issues/2731), [#2735](https://github.com/Hmbown/CodeWhale/issues/2735))**
   Multiple issues were raised regarding Xiaomi's new MiMo models, including requests to support the new Token Plan subscription API and display pricing correctly within the TUI.

8. **[CLOSED] Auth Error Locks IDE ([#2754](https://github.com/Hmbown/CodeWhale/issues/2754))**
   A severe UX bug where a failed authentication switch to Kimi K2.6 completely locks the IDE, preventing the user from switching back to DeepSeek without restarting.

9. **[OPEN] Modular Command Dispatch Refactor ([#2791](https://github.com/Hmbown/CodeWhale/issues/2791))**
   A proposal to move away from the current ~200-line monolithic `match` block for slash commands in `mod.rs` toward a more modular strategy pattern to ease future extensions.

10. **[OPEN] v0.9.0 Stabilization Gate ([#2721](https://github.com/Hmbown/CodeWhale/issues/2721))**
    A release-blocker meta-issue ensuring that v0.9.0 resolves existing Windows, large-repo, and subagent bugs before shipping new WhaleFlow and Model Lab features.

## 4. Key PR Progress

1. **v0.9.0 Stewardship Integration ([PR #2762](https://github.com/Hmbown/CodeWhale/pull/2762))**
   The central integration branch for the v0.9.0 release. It is currently aggregating harvested features and running through CI without triggering automated release actions.

2. **Harvest: Deterministic Response Cache ([PR #2805](https://github.com/Hmbown/CodeWhale/pull/2805))**
   Extracted from @HUQIANTAO's earlier work, this PR introduces an in-process LRU cache to deduplicate identical deterministic LLM requests, significantly saving API costs and latency.

3. **Hugging Face MCP & Hub Integration ([PR #2782](https://github.com/Hmbown/CodeWhale/pull/2782), [PR #2802](https://github.com/Hmbown/CodeWhale/pull/2802))**
   Adds a comprehensive `/hf` command suite. Users can now search the HF Hub, check MCP server status, and auto-configure MCP endpoints directly from the TUI.

4. **Pausable Custom Command MVP ([PR #2803](https://github.com/Hmbown/CodeWhale/pull/2803))**
   Harvested from @aboimpinto's broader PR, this allows users to pause custom slash commands via `ESC`, type other messages, and resume the paused workflow later.

5. **Multi-Tab System with Cross-Tab Collaboration ([PR #2753](https://github.com/Hmbown/CodeWhale/pull/2753))**
   An ambitious community PR introducing a `TabManager` supporting `Ctrl+Tab` switching and the ability to delegate tasks across different isolated tab contexts.

6. **Provider Trait Architecture ([PR #2479](https://github.com/Hmbown/CodeWhale/pull/2479))**
   A major refactor replacing dual enums (`ProviderKind`/`ApiProvider`) with a unified `Provider` trait. This drastically reduces boilerplate match-arm duplication when adding new LLM providers.

7. **Live Shell Output ([PR #2048](https://github.com/Hmbown/CodeWhale/pull/2048))**
   Massively improves the TUI developer experience by displaying real-time shell execution output inline, rather than hiding it until the process completes.

8. **Hard Compaction for System Prompts ([PR #2522](https://github.com/Hmbown/CodeWhale/pull/2522))**
   Implements a new memory management strategy that compacts middle conversation history into a summary while strictly preserving the initial system prompt and recent context.

9. **Ghost-text Follow-up Prompt Suggestion ([PR #2781](https://github.com/Hmbown/CodeWhale/pull/2781))**
   Introduces an experience similar to Claude Code, where a lightweight API call generates a dimmed "follow-up" suggestion in the composer after each turn, accepted via `Tab`.

10. **Sub-agent Branch Status Surfacing ([PR #2804](https://github.com/Hmbown/CodeWhale/pull/2804))**
    Fixes a visibility issue where sub-agents' git branch and workspace statuses were lost upon reload, ensuring the sidebar accurately reflects sub-agent progress.

## 5. Feature Request Trends

*   **IDE & GUI Integration:** A massive push towards leaving the purely terminal-based paradigm. Users want native VSCode integration, specifically requesting adaptation to VSCode's "Agent View".
*   **Resilient Provider Routing:** Strong demand for automatic failover/fallback routing to alternate APIs when primary providers hit rate limits (429) or server errors.
*   **Hardware & OS Expansion:** Growing interest in running the TUI natively on non-traditional dev environments, particularly HarmonyOS.
*   **Advanced Context Management:** High engagement around prompt caching, hard memory compaction, and ensuring system prompts remain byte-stable across long sessions.
*   **Agent Transparency:** Requests for better visibility into what sub-agents and autonomous tasks are doing (e.g., via sidebar detail popovers and live shell output).

## 6. Developer Pain Points

*   **Session Loss & Freezing:** The most prominent frustration remains the TUI freezing during complex, long-running autonomous tasks, often forcing an `ESC` exit that irreversibly wipes the current session context.
*   **Multi-Provider Auth Friction:** Managing multiple API keys and providers is currently brittle. Failed authentication can completely lock the interface, providing poor error context and requiring manual config file manipulation to recover.
*   **Architectural Bottlenecks:** As the codebase scales, developers are finding the monolithic command dispatch and legacy provider enums increasingly difficult to contribute to without running into massive merge conflicts.
*   **MCP Configuration Limitations:** Developers are frustrated that project-level `.codewhale/mcp.json` files do not auto-merge cleanly with global configs, leading to broken tool paths and incorrect status bar indicators.

</details>