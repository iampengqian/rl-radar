# AI CLI 工具社区动态日报 2026-03-26

> 生成时间: 2026-03-25 22:07 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告 (2026-03-26)

## 1. 生态全景

当前 AI CLI 工具已从"单一对话助手"全面进化为**多模态、Agent 化、平台化**的开发环境。各大厂商正在通过**MCP 协议**争夺工具链标准的主导权，同时积极构建**远程工作空间**和**多 Agent 协作**架构以突破本地资源限制。然而，随着功能的复杂化，**跨平台兼容性**（特别是 Windows/Linux）和**订阅计费透明度**正成为阻碍企业大规模采用的关键痛点。

## 2. 各工具活跃度对比

| 工具名称 | 版本动态 | Issues 活跃度 | PR 活跃度 | 核心焦点 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | v2.1.83 (回归问题严重) | 🔥 高 (P0 级故障频发) | 中 (插件生态扩展) | 语音功能崩溃、Agent Teams 上下文继承 |
| **OpenAI Codex** | 6 个 Alpha 版 (高频迭代) | 高 (计费争议) | 🔥 高 (安全/MCP 重构) | Token 消耗过快、底层架构重构 |
| **Gemini CLI** | v0.36.0-preview.3 | 中 (稳定性投诉) | 高 (SDD 架构演进) | 服务超时、DAG 任务流、AST 感知 |
| **GitHub Copilot CLI** | v1.0.12-0 | 中 (企业策略阻断) | 低 (无公开 PR) | MCP 连接异常、组织策略限制 |
| **Kimi Code CLI** | v1.26.0 (插件 Beta) | 🔥 高 (交互体验) | 🔥 高 (17 Issues / 20 PRs) | 快捷键自定义、网络重试、Hooks 系统 |
| **OpenCode** | v1.3.2 (内存调试) | 中 (功能请求) | 高 (多模型适配) | 语音输入、细粒度权限、PWA 支持 |
| **Qwen Code** | v0.14.0-preview.0 | 高 (回归修复) | 高 (本土化集成) | 进程残留、权限持久化、/loop 自动化 |

## 3. 共同关注的功能方向

### A. 细粒度权限与策略管控
*   **涉及工具**: Claude Code, OpenCode, Qwen Code, GitHub Copilot CLI
*   **具体诉求**: 社区不再满足于简单的 "Allow/Deny"，而是强烈要求**基于文件路径**或 **Glob 模式**的访问控制，以及**持久化的权限记忆**。企业用户特别关注组织策略对 MCP 服务器的误杀问题。

### B. 语音交互体验
*   **涉及工具**: Claude Code, OpenCode, Kimi Code CLI
*   **具体诉求**: "解放双手"的编程体验成为共识。OpenCode社区对该功能的呼声极高，但 Claude Code 今日因 v2.1.83 回归导致 Linux/WSL 语音模式全面瘫痪，反映出跨平台音频架构的适配难度。

### C. MCP 生态稳定性
*   **涉及工具**: 几乎所有工具
*   **具体诉求**: 开发者对 MCP 的期待已从"能用"上升到"好用"。核心痛点包括：连接断开、权限无法记住、带连字符的服务器名解析失败、以及工具调用缺乏链路追踪。

### D. 非打断式交互与任务队列
*   **涉及工具**: Kimi Code CLI, OpenCode, Claude Code
*   **具体诉求**: 用户希望 Agent 在执行长任务时，新的输入能进入**队列等待**而非被丢弃或打断当前流程，以实现更流畅的多任务并发。

## 4. 差异化定位分析

| 维度 | Claude Code / OpenAI Codex | Gemini CLI / OpenCode | GitHub Copilot CLI | Kimi / Qwen Code |
| :--- | :--- | :--- | :--- | :--- |
| **核心优势** | **模型能力边界**探索，复杂 Agent 架构 | **工程化架构**创新 (SDD, AST, Remote Worker) | **IDE 生态**原生集成，企业级合规 | **本土化体验**，极致的交互细节优化 |
| **技术路线** | 深度绑定自有模型，推进 Agentic Workflow | 引入 DAG/AST 等传统软件工程理念 | 依托 VS Code/GitHub 生态，强调无缝集成 | 快速迭代用户高频痛点，兼容多生态 |
| **当前痛点** | 稳定性倒退，订阅成本争议 | 服务响应慢，新架构学习曲线 | 策略限制过死，功能更新较慢 | 多平台兼容性，IDE 插件稳定性 |

## 5. 社区热度与成熟度

*   **第一梯队 (活跃度最高)**: **Claude Code** 和 **Kimi Code CLI**。前者因回归问题引发大量讨论，后者凭借高频的功能更新（平均每日 20 个 PR）和对中国用户习惯的精准把控（如快捷键）保持了极高的社区粘性。
*   **快速迭代期**: **OpenAI Codex** (底层 Rust 重构) 和 **Qwen Code** (快速修复回归)。这两个项目正处于架构调整期，版本发布密集，但也引入了较多不稳定性。
*   **稳健演进期**: **Gemini CLI** 和 **OpenCode**。更侧重于底层架构（如 SDD, Memory System）的打磨，试图解决 AI 编程的深层次可靠性问题。
*   **相对沉寂**: **GitHub Copilot CLI**。缺乏公开的 PR 动态，主要依靠 Issue 反馈驱动，更新节奏相对封闭。

## 6. 值得关注的趋势信号

### 趋势一：从 "Chat" 到 "Background Agent" 的演进
**信号**: Qwen Code 的 `/loop` 命令、Gemini CLI 的 Remote Workspaces、Claude Code 的 Agent Teams。
**价值**: AI CLI 正在从"实时问答工具"转变为**后台自动化运维中枢**。开发者应开始习惯将代码审查、日志监控等任务托管给后台 Agent，而非手动执行。

### 趋势二：内存与上下文管理的 "精细化"
**信号**: Claude Code 的 `managed-settings.d/`、Gemini 的全局/项目记忆路由、Qwen 的上下文压缩算法优化。
**价值**: 随着 Token 成本和窗口限制的压力增加，**显式的上下文管理**将成为必备技能。开发者需要学会显式定义哪些文件需要记忆，哪些需要遗忘。

### 趋势三：跨平台兼容性仍是最大 "暗坑"
**信号**: Claude Code 的 Linux 语音瘫痪、Qwen Code 的 Windows 权限持久化失败、Copilot 的德语键盘失效。
**价值**: 在生产环境部署 AI CLI 前，务必在**目标操作系统进行实测**。目前所有工具在非 macOS 平台上都存在不同程度的残缺，Windows/Linux 用户需保持警惕。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

作为 Claude Code 生态技术分析师，基于截止 2026-03-26 的 `anthropics/skills` 仓库数据，为您呈现社区热点分析报告。

---

## Claude Code Skills 社区热点报告 (2026-03)

### 1. 热门 Skills 排行
*基于 Pull Requests 的社区关注度与功能影响力综合排序*

1.  **[文档排版质量控制] document-typography**
    *   **功能**：自动修复 AI 生成文档中的排版问题（如孤行、寡行、编号错位）。
    *   **状态**：`OPEN` | **链接**：[PR #514](https://github.com/anthropics/skills/pull/514)
    *   **分析**：针对 AI 生成内容"语义正确但格式丑陋"的痛点，解决了用户极少主动指令排版优化的盲区，是提升交付质量的实用型 Skill。

2.  **[前端设计优化] frontend-design**
    *   **功能**：重构前端设计指南，增强指令的清晰度与可执行性。
    *   **状态**：`OPEN` | **链接**：[PR #210](https://github.com/anthropics/skills/pull/210)
    *   **分析**：早期提交（2026-01），仍在更新。重点在于解决 Skill 自身过于笼统的问题，确保 Claude 能在单次对话中精准落地设计规范。

3.  **[元技能分析] skill-quality-analyzer & skill-security-analyzer**
    *   **功能**：用于评估其他 Skill 的质量（结构、文档）和安全性（漏洞扫描）的元工具。
    *   **状态**：`OPEN` | **链接**：[PR #83](https://github.com/anthropics/skills/pull/83)
    *   **分析**：随着 Skill 数量激增，社区开始关注生态自身的治理与安全标准，"为 Skill 做体检"的需求日益凸显。

4.  **[持久化记忆] shodh-memory**
    *   **功能**：为 AI Agent 提供跨对话的持久化上下文记忆。
    *   **状态**：`OPEN` | **链接**：[PR #154](https://github.com/anthropics/skills/pull/154)
    *   **分析**：解决 LLM "无状态"导致的一致性缺失问题，是构建长期运行 Agent 的基础设施级 Skill。

5.  **[多模态生成] masonry-generate-image-and-videos**
    *   **功能**：集成 Masonry CLI，通过自然语言生成图片（Imagen 3.0）和视频（Veo 3.1）。
    *   **状态**：`OPEN` | **链接**：[PR #335](https://github.com/anthropics/skills/pull/335)
    *   **分析**：填补了 Claude Code 在原生多模态生成（尤其是视频）方面的空白，扩展了 Agent 的输出边界。

6.  **[企业级预测] SAP-RPT-1-OSS predictor**
    *   **功能**：利用 SAP 开源表格基础模型进行业务数据预测分析。
    *   **状态**：`OPEN` | **链接**：[PR #181](https://github.com/anthropics/skills/pull/181)
    *   **分析**：标志着 Claude Code 向企业级 ERP 数据分析场景的渗透，连接了通用 LLM 与专用垂直模型。

7.  **[任务持久化] plan-task**
    *   **功能**：将多步计划保存为 Markdown 文件，支持跨会话的任务进度追踪。
    *   **状态**：`OPEN` | **链接**：[PR #522](https://github.com/anthropics/skills/pull/522)
    *   **分析**：与 Memory 类 Skill 呼应，旨在解决复杂长程任务中"断点续传"的问题。

---

### 2. 社区需求趋势
*从 Issues 讨论中提炼的核心诉求*

*   **长期记忆与任务连续性**
    社区极度渴望打破会话隔离。无论是 [PR #154] 的 Memory 还是 [PR #522] 的 Plan-task，都反映出用户希望 Claude 能"记得"之前的工作，实现真正的连续协作。
    *   *相关 Issue*: [Issue #62 (Skills 消失问题)](https://github.com/anthropics/skills/issues/62)

*   **安全性与信任边界**
    随着第三方 Skill 增多，用户对安全性的担忧加剧。社区呼吁建立更清晰的命名空间隔离，防止社区 Skill 伪装成官方 Skill 带来的权限滥用风险。
    *   *相关 Issue*: [Issue #492 (Trust boundary abuse)](https://github.com/anthropics/skills/issues/492)

*   **Skill 开发工具链规范化**
    开发者希望有更完善的工具来创建和验证 Skill。现有的 `skill-creator` 被指出过于冗长且不符合最佳实践，社区正在推动其重构及对 MCP (Model Context Protocol) 的支持。
    *   *相关 Issue*: [Issue #202 (Update skill-creator)](https://github.com/anthropics/skills/issues/202), [Issue #16 (Expose Skills as MCPs)](https://github.com/anthropics/skills/issues/16)

*   **企业级集成**
    除了 SAP，社区也在探索 Claude Code 与 AWS Bedrock 的兼容性以及 Google Workspace (Email/Calendar) 的深度集成。
    *   *相关 Issue*: [Issue #29 (Usage with Bedrock)](https://github.com/anthropics/skills/issues/29), [PR #299 (Google Workspace skills)](https://github.com/anthropics/skills/pull/299)

---

### 3. 高潜力待合并 Skills (High-Potential Pending PRs)
*这些 PR 活跃度高，解决了明确痛点，建议密切关注其合并状态*

*   **[PR #509] CONTRIBUTING.md**
    *   **理由**：解决了仓库社区健康度低的问题，是官方完善治理流程的关键一步，合并优先级极高。
    *   **链接**：[PR #509](https://github.com/anthropics/skills/pull/509)
*   **[PR #629] session-memory**
    *   **理由**：零依赖解决上下文压缩导致的技术细节丢失问题，技术方案务实，直接针对开发者痛点。
    *   **链接**：[PR #629](https://github.com/anthropics/skills/pull/629)
*   **[PR #147] codebase-inventory-audit**
    *   **理由**：提供代码库清理和审计功能，输出单一事实来源文档，是大型项目维护的刚需工具。
    *   **链接**：[PR #147](https://github.com/anthropics/skills/pull/147)

---

### 4. Skills 生态洞察
**一句话总结：**
当前社区的核心诉求已从"单一功能实现"转向**构建具备长期记忆、跨会话任务保持能力且安全可信的 Agent 系统**。

---

# Claude Code 社区动态日报
**日期**: 2026-03-26 | **数据来源**: github.com/anthropics/claude-code

---

## 1. 今日速览
Claude Code 发布 **v2.1.83** 版本，新增 `managed-settings.d/` 策略热插拔目录及 `CwdChanged`/`FileChanged` 钩子事件。但该版本引入了严重的**回归问题**，导致 Linux/WSL 平台上的语音模式全面瘫痪，TUI 滚动和键盘输入也出现异常。社区对 Agent Teams 的上下文继承限制及订阅配额计算问题的关注度持续攀升。

---

## 2. 版本发布

### v2.1.83
**链接**: [GitHub Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.83)

**核心更新**:
- **策略管理增强**: 新增 `managed-settings.d/` 目录，支持按字母顺序合并多个独立策略片段，方便多团队独立部署。
- **响应式钩子**: 新增 `CwdChanged` 和 `FileChanged` 事件，支持基于环境变化（如 direnv）的动态响应。

---

## 3. 社区热点 Issues (Top 10)

| 优先级 | Issue | 标签 | 概要 | 关注理由 |
| :--- | :--- | :--- | :--- | :--- |
| 🔥 **P0** | [#38666](https://github.com/anthropics/claude-code/issues/38666) | `regression`, `linux` | **Linux 语音模式完全失效** | v2.1.83 引入的回归导致 Linux 上按空格键无法触发录音，严重影响 Linux 用户体验。 |
| 🔥 **P0** | [#38842](https://github.com/anthropics/claude-code/issues/38842) | `regression`, `linux` | **xterm 下无法输入大写字母** | 极其怪异的 TUI 回归，导致 Linux 终端下大写字母输入失败，阻塞基本交互。 |
| ⚠️ **P1** | [#38648](https://github.com/anthropics/claude-code/issues/38648) | `regression`, `macos` | **macOS 语音转写功能损坏** | 从 2.1.80 升级后转录功能失效，跨平台语音功能稳定性堪忧。 |
| ⚠️ **P1** | [#33367](https://github.com/anthropics/claude-code/issues/33367) | `bug`, `tui` | **向上滚动时位置乱跳** | TUI 体验问题，流式输出时无法查看历史记录，用户体验极差。 |
| ⚠️ **P1** | [#38979](https://github.com/anthropics/claude-code/issues/38979) | `regression`, `wsl` | **WSL2 语音模式失效** | 新增的 `/proc/asound/cards` 检查不兼容 WSLg 的 PulseAudio 架构。 |
| 📢 **P2** | [#16157](https://github.com/anthropics/claude-code/issues/16157) | `bug`, `cost` | **Max 订阅瞬间触发用量限制** | **评论数超 1300**。订阅用户反馈计费异常，涉及核心商业信誉问题。 |
| 📢 **P2** | [#13898](https://github.com/anthropics/claude-code/issues/13898) | `bug`, `mcp` | **自定义 Subagent 无法访问项目级 MCP** | Subagent 调用本地 MCP 时产生幻觉而非真实调用，限制了 Agent 架构的实用性。 |
| 📢 **P2** | [#34421](https://github.com/anthropics/claude-code/issues/34421) | `bug`, `agents` | **Agent Team 成员丢失 `[1m]` 上下文** | 队友 Agent 无法继承 Leader 的 1M 上下文配置，被迫使用 200k 模型，导致多 Agent 协作能力受限。 |
| 💡 **P3** | [#38411](https://github.com/anthropics/claude-code/issues/38411) | `enhancement` | **请求流式输出时的滚动锁定** | 用户希望在 Claude 输出时能锁定滚动查看历史，无需等待输出结束。 |
| 🛠️ **P3** | [#36765](https://github.com/anthropics/claude-code/issues/36765) | `a11y`, `CLOSED` | **原生终端光标支持** | 涉及无障碍访问体验，已关闭，可能已解决或移至其他排期。 |

---

## 4. 重要 PR 进展 (Top 5)

| PR | 标题 | 状态 | 核心内容 |
| :--- | :--- | :--- | :--- |
| [#38105](https://github.com/anthropics/claude-code/pull/38105) | **feat: add WhatsApp channel plugin** | `OPEN` | 新增 WhatsApp 频道插件，基于 Baileys 协议实现双向消息收发，补齐通讯生态。 |
| [#38728](https://github.com/anthropics/claude-code/pull/38728) | **Add memory-alert plugin** | `OPEN` | 进程内存监控插件，当 Claude Code 内存超阈值时在终端告警，防止 OOM。 |
| [#38636](https://github.com/anthropics/claude-code/pull/38636) | **Add multi-setup plugin** | `OPEN` | 支持从当前仓库创建并行开发工作区，优化多任务开发流。 |
| [#23853](https://github.com/anthropics/claude-code/pull/23853) | **fix: Dockerfile native installer** | `OPEN` | 修复 Dockerfile，用原生安装脚本替换已废弃的 `npm install -g` 方式。 |
| [#38182](https://github.com/anthropics/claude-code/pull/38182) | **feat: add session-rename plugin** | `CLOSED` | 提供 `/rename` 命令重命名会话，已合并或关闭。 |

---

## 5. 功能需求趋势

根据近期 Issue 标签与讨论内容，社区关注点呈现以下趋势：

1.  **多 Agent 协作稳定性**: `area:agents` 标签的 Issue 显著增加，主要集中在 Agent Teams 的上下文同步、MCP 工具调用权限及进程通信阻塞问题上。
2.  **跨平台体验一致性**: Linux、WSL 和 Windows 平台的回归问题频发（尤其是语音和 TUI），反映出社区对非 macOS 平台的支持质量有强烈诉求。
3.  **企业级管控能力**: `managed-settings.d/` 的加入引发了对细粒度权限控制（如 `allowed-tools` 不生效 #37683）的进一步讨论，企业用户需要更可靠的策略执行机制。
4.  **插件生态扩展**: 开发者正积极通过 PR 扩展 Claude Code 的边界，如 WhatsApp 集成、内存监控等，显示插件系统正在成熟。

---

## 6. 开发者关注点与痛点

*   **语音功能脆弱性**: v2.1.83 的回归暴露了语音模式在不同音频架构（ALSA vs PulseAudio）下的兼容性测试不足，开发者建议在 CI 中增加针对 WSL/Linux 音频子系统的自动化测试。
*   **模型配置继承机制**: Agent Team 中模型变体（如 `[1m]`）无法自动传递给子 Agent，导致高级订阅用户的付费功能在多 Agent 场景下失效，这是一个急需修复的架构缺陷。
*   **TUI 交互细节**: 滚动抖动和流式输出时的焦点抢占是长期存在的体验痛点，社区呼吁引入更完善的终端 UI 事件循环处理机制。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-03-26)

你好，我是你的 AI 技术分析师。以下是今日 OpenAI Codex 项目的社区动态汇总。

## 1. 今日速览
OpenAI Codex 团队今日发布了 **6 个 Rust 核心库版本**（v0.117.0-alpha.14 至 .19），显示出高频的后端迭代节奏。社区方面，**VS Code 扩展的 Token 消耗过快**以及**资源限制**问题持续发酵，成为用户反馈的焦点。此外，开发团队正在积极合并涉及 **MCP (Model Context Protocol) 增强**和 **API 认证重构**的多个 PR，为未来的功能扩展做准备。

## 2. 版本发布
过去 24 小时内，Codex 底层 Rust 核心进行了高频迭代，连续发布了 6 个 Alpha 版本：
*   **v0.117.0-alpha.19**
*   **v0.117.0-alpha.18**
*   **v0.117.0-alpha.17**
*   **v0.117.0-alpha.16**
*   **v0.117.0-alpha.15**
*   **v0.117.0-alpha.14**
> **分析**：虽然 Release Notes 仅包含版本号，但如此密集的发布通常意味着核心依赖或底层架构正在进行重要调整，可能与正在进行的 Telemetry（遥测）和 Keyring（密钥环）重构有关。

## 3. 社区热点 Issues (Top 10)

以下筛选出最具代表性和热度的 10 个 Issue，主要集中在性能消耗、工具稳定性和跨平台体验上。

1.  **[高热度] Token 消耗异常迅速 (VS Code 扩展)**
    *   **链接**: [#14593](https://github.com/openai/codex/issues/14593)
    *   **详情**: 即使更新到最新版 VS Code 扩展，大量用户（254+ 评论）反馈 Token 燃烧速度依然过快。这是一个影响生产成本的关键 Bug，社区情绪较为焦躁。

2.  **[功能请求] CLI 集成 LSP 支持**
    *   **链接**: [#8745](https://github.com/openai/codex/issues/8745)
    *   **详情**: 社区强烈希望 Codex CLI 能内置 LSP（语言服务器协议）支持，实现自动检测和安装，以提供更智能的代码补全和诊断（212 👍）。

3.  **[核心痛点] 付费用户额度掉电过快**
    *   **链接**: [#14762](https://github.com/openai/codex/issues/14762)
    *   **详情**: 用户反馈付费额度在使用极少任务后瞬间耗尽，涉及计费敏感问题，需重点关注。

4.  **[平台兼容] Windows 沙箱环境配置错误**
    *   **链接**: [#10601](https://github.com/openai/codex/issues/10601)
    *   **详情**: Windows 平台上 CLI 沙箱设置存在持续性问题，阻碍了部分开发者的使用。

5.  **[回归 Bug] VS Code 插件导致 CPU 占用过高 (Linux)**
    *   **链接**: [#15764](https://github.com/openai/codex/issues/15764)
    *   **详情**: 最新版扩展在应用代码补丁时，渲染进程 CPU 占用率超过 100%，严重影响 IDE 流畅度。

6.  **[UI/UX] 深色模式卡死问题**
    *   **链接**: [#15684](https://github.com/openai/codex/issues/15684)
    *   **详情**: VS Code 侧边栏在使用深色主题时会出现显示异常或卡死，影响视觉体验。

7.  **[Agent 机制] Fast 模式导致用量激增**
    *   **链接**: [#14116](https://github.com/openai/codex/issues/14116)
    *   **详情**: 自 v0.111.0 引入 Fast 模式作为默认设置后，多 Agent 并发变得更加激进，导致用量消耗出现峰值。

8.  **[功能请求] 插件生态系统 (类 Claude Plugins)**
    *   **链接**: [#8512](https://github.com/openai/codex/issues/8512)
    *   **详情**: 开发者希望能像 Claude 一样通过插件分享完整的 Agent 配置、规则和技能，以便团队协作。

9.  **[MCP 问题] macOS App 无法记住 Playwright MCP 权限**
    *   **链接**: [#15169](https://github.com/openai/codex/issues/15169)
    *   **详情**: 更新后的 macOS 桌面应用不再保留 MCP 工具的"本次会话允许"设置，每次都需要重新授权。

10. **[Bug] 连字符命名的 MCP Server 无法识别工具**
    *   **链接**: [#15565](https://github.com/openai/codex/issues/15565)
    *   **详情**: 如果 MCP 服务器名称包含连字符 `-`，Codex 会错误地显示 `Tools: (none)`，这是一个影响工具集成的逻辑漏洞。

## 4. 重要 PR 进展 (Top 10)

今日的 PR 活动主要集中在安全性增强、认证流程优化和可观测性建设。

1.  **[安全] 阻止不安全的 Git 全局选项**
    *   **链接**: [#15796](https://github.com/openai/codex/pull/15796)
    *   **内容**: 修复安全漏洞，防止恶意的 Git 全局选项（如重定向配置路径）被自动批准为安全命令。

2.  **[修复] 修复连字符 MCP Server 名称解析 Bug**
    *   **链接**: [#15797](https://github.com/openai/codex/pull/15797)
    *   **内容**: 对应 Issue #15565，修复了带连字符的服务器名称导致工具分组失败的问题。

3.  **[认证] 优化 Token 刷新逻辑**
    *   **链接**: [#15798](https://github.com/openai/codex/pull/15798)
    *   **内容**: 修复了 `getAuthStatus` 可能导致重复刷新 Token 的问题，提升认证稳定性。

4.  **[架构] 统一 Keyring 存储机制**
    *   **链接**: [#15632](https://github.com/openai/codex/pull/15632)
    *   **内容**: 引入通用的 JSON 格式密钥存储后端，统一 MCP OAuth 和 CLI 登录的凭证管理，提升安全性。

5.  **[MCP] 改进自定义 MCP 工具调用流程**
    *   **链接**: [#15800](https://github.com/openai/codex/pull/15800)
    *   **内容**: 为自定义 MCP 工具增加"不再询问"选项，并优化了 YOLO 模式下的运行逻辑。

6.  **[MCP] 增加 MCP 工具调用链路追踪**
    *   **链接**: [#15659](https://github.com/openai/codex/pull/15659)
    *   **内容**: 为 MCP 工具执行添加 `mcp.tools.call` Span，方便开发者进行性能分析和调试。

7.  **[MCP] 支持 Post-Tool-Use Hooks**
    *   **链接**: [#15531](https://github.com/openai/codex/pull/15531)
    *   **内容**: 扩展 Hook 机制，支持在工具使用后执行非流式的 Shell 脚本，增强了对工具执行结果的后处理能力。

8.  **[订阅] 识别 "hc" 计划为企业版**
    *   **链接**: [#15789](https://github.com/openai/codex/pull/15789)
    *   **内容**: 修正订阅类型识别逻辑，将 ChatGPT `hc` 计划正确映射为企业版，以解锁相应的云端功能。

9.  **[文件处理] Codex Apps 文件重映射**
    *   **链接**: [#15197](https://github.com/openai/codex/pull/15197)
    *   **内容**: 改进文件上传流程，使模型能直接处理本地绝对路径，而不是原始的文件负载对象。

10. **[CLI] 新增 /api-provision 斜杠命令**
    *   **链接**: [#15561](https://github.com/openai/codex/pull/15561)
    *   **内容**: 为 CLI 添加 API 配置命令，复用浏览器 OAuth 回调逻辑，简化 API Key 的本机配置流程。

## 5. 功能需求趋势

根据今日的 Issues 和 PRs，社区功能需求呈现以下趋势：
*   **成本控制与透明度**：用户对 Token 消耗速度极度敏感，迫切需要更精细的用量监控和更稳定的计费逻辑。
*   **MCP 生态成熟化**：开发者不再满足于简单的工具调用，而是追求更稳定的连接（名称解析）、更细粒度的权限控制（不再询问）以及链路追踪。
*   **深度 IDE 集成**：无论是 LSP 的原生支持，还是解决 CPU 占用问题，都表明 Codex 正从"聊天助手"向"原生 IDE 组件"过渡，对性能要求极高。
*   **自动化 Hook 能力**：社区开发者正在构建更复杂的自动化工作流，需要 Pre/Post Tool Use 的 Hook 机制来介入 Agent 的执行过程。

## 6. 开发者关注点

*   **性能回归**：近期 VS Code 扩展的更新引发了多起性能回归报告（CPU 飙升、内存泄漏），建议开发团队在发布前加强针对不同操作系统（特别是 Linux 和 Windows）的性能基准测试。
*   **Windows 平台体验**：沙箱配置、换行符混乱等老问题依然困扰着 Windows 用户，跨平台兼容性仍是短板。
*   **Headless 环境支持**：随着 CI/CD 集成需求的增加，无头环境下的登录认证问题（Issue #9253）亟待彻底解决。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-03-26)

你好，我是你的 AI 开发工具技术分析师。以下是基于 GitHub 数据生成的 Gemini CLI 社区动态日报。

## 1. 今日速览
今日 Gemini CLI 发布了 **v0.36.0-preview.3** 补丁版本。社区方面，**服务稳定性**成为关注焦点，多名用户反馈模型响应超时和“思考”时间过长的问题。此外，开发团队正在大力推进 **SDD（Spec-Driven Development）架构**的重构，引入基于 DAG（有向无环图）的任务追踪系统，并探讨了 AST（抽象语法树）感知工具的集成潜力。

## 2. 版本发布
- **v0.36.0-preview.3**
  - **更新内容**：这是一个补丁版本，主要修复了特定提交的合并问题，用于修补 v0.36.0-preview.0 版本。
  - **链接**：[Release v0.36.0-preview.3](https://github.com/google-gemini/gemini-cli/pull/23723)

## 3. 社区热点 Issues (Top 10)
以下筛选了 10 个最具代表性的 Issue，涵盖了稳定性、架构演进和用户体验痛点：

1.  **[P0 级故障] 服务大面积响应超时与卡顿**
    - **为何重要**：严重影响可用性。用户反馈 CLI 在执行任务时频繁卡在 "thinking" 状态超过 10 分钟并超时。
    - **社区反应**：评论数达 9 条，点赞 6 次，用户普遍遇到类似问题。
    - **链接**：[Issue #23795](https://github.com/google-gemini/gemini-cli/issues/23795)
2.  **[架构演进] SDD 阶段 3：基于 DAG 的任务集成**
    - **为何重要**：标志着从线性的 Markdown 计划转向动态的有向无环图任务流，旨在提升复杂任务的规划与执行可靠性。
    - **链接**：[Issue #23320](https://github.com/google-gemini/gemini-cli/issues/23320)
3.  **[功能改进] 退出 Plan 模式后模型未自动切换**
    - **为何重要**：影响工作流连续性。用户期望确认计划后自动切换至 `gemini-3-flash-preview` 以加速执行，但目前需手动干预。
    - **链接**：[Issue #23230](https://github.com/google-gemini/gemini-cli/issues/23230)
4.  **[深度优化] 评估 AST 感知工具对代码库映射的影响**
    - **为何重要**：探索通过 AST（抽象语法树）提升文件读取和搜索精度的可能性，有望显著减少 Token 浪费和误判。
    - **链接**：[Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)
5.  **[用户体验] UI 中已完成任务移动到底部造成混淆**
    - **为何重要**：UI 逻辑问题。任务完成后直接移至列表末尾，导致用户误以为任务被删除或丢失。
    - **链接**：[Issue #23730](https://github.com/google-gemini/gemini-cli/issues/23730)
6.  **[交互体验] `/plan` 命令应支持直接输入提示词**
    - **为何重要**：效率优化。目前 `/plan` 仅进入规划框，用户希望能通过 `/plan [text]` 一步触发规划流程。
    - **链接**：[Issue #22855](https://github.com/google-gemini/gemini-cli/issues/22855)
7.  **[A2A 协议] 服务器默认非交互模式导致无法应用 Ask 策略**
    - **为何重要**：影响 Agent-to-Agent 通信中的权限确认流程，导致工具调用被错误拒绝。
    - **链接**：[Issue #23829](https://github.com/google-gemini/gemini-cli/issues/23829)
8.  **[Agent 行为] 模型频繁在随机位置创建临时脚本**
    - **为何重要**：环境污染问题。模型受限后在目录中乱建脚本，增加了清理负担和 Git 提交风险。
    - **链接**：[Issue #23571](https://github.com/google-gemini/gemini-cli/issues/23571)
9.  **[自动化] 自动更新失败时提示信息不足**
    - **为何重要**：用户建议在更新失败时直接提供 `npm install` 命令或自动检测 `sudo` 权限，降低手动处理门槛。
    - **链接**：[Issue #23786](https://github.com/google-gemini/gemini-cli/issues/23786)
10. **[记忆系统] 实现全局与项目级别的记忆路由**
    - **为何重要**：区分用户偏好和项目上下文，是提升 Agent 长期记忆有效性的关键基础设施。
    - **链接**：[Issue #22819](https://github.com/google-gemini/gemini-cli/issues/22819)

## 4. 重要 PR 进展 (Top 10)
今日 PR 活动主要集中在核心架构重构、UI 改进和稳定性修复：

1.  **feat(workspaces): 引入高性能远程开发工作空间** (Closed/Merged Context)
    - **内容**：引入 Gemini Workspaces 概念，允许将重型任务（如全量构建）卸载到 GCP 远程 Worker，实现环境隔离。
    - **链接**：[PR #22714](https://github.com/google-gemini/gemini-cli/pull/22714)
2.  **feat(gcp): 添加开发 Worker 基础设施**
    - **内容**：配合上述 Workspaces 功能，添加专用的 Worker 镜像支持。
    - **链接**：[PR #23814](https://github.com/google-gemini/gemini-cli/pull/23814)
3.  **fix(core): 缓解 Shell 执行中的无限缓冲区增长**
    - **内容**：修复了 `child_process` 输出存入无限数组导致的内存膨胀和 UI 卡顿问题，防止系统崩溃。
    - **链接**：[PR #23751](https://github.com/google-gemini/gemini-cli/pull/23751)
4.  **fix(cli): 允许询问对话框占满窗口高度**
    - **内容**：移除了询问对话框 15 行的高度限制，优化了在长终端窗口中的信息展示。
    - **链接**：[PR #23693](https://github.com/google-gemini/gemini-cli/pull/23693)
5.  **feat(sandbox): 动态 Linux 沙箱扩展与 Worktree 支持**
    - **内容**：使 Linux 沙箱功能与 macOS Seatbelt 对齐，支持动态路径解析和 Git worktree。
    - **链接**：[PR #23692](https://github.com/google-gemini/gemini-cli/pull/23692)
6.  **feat(cli): 统一底部栏会话模式并重组 Composer**
    - **内容**：UI 整洁性优化，将分散的模式指示器统一，减少界面抖动。
    - **链接**：[PR #23508](https://github.com/google-gemini/gemini-cli/pull/23508)
7.  **fix(a2a-server): 修复 A2A 服务器在交互模式下的 Ask 策略执行**
    - **内容**：修复了服务器因误判为 Headless 模式而无法转发确认请求的问题。
    - **链接**：[PR #23831](https://github.com/google-gemini/gemini-cli/pull/23831)
8.  **refactor(core): 改进 ignore 解析并修复目录匹配 Bug**
    - **内容**：优化 GitIgnore 解析逻辑，修复层级遍历 Bug，提升文件系统操作性能。
    - **链接**：[PR #23816](https://github.com/google-gemini/gemini-cli/pull/23816)
9.  **Implement background process monitoring and inspection tools**
    - **内容**：引入后台进程监控工具，允许安全地检查长时间运行的任务输出。
    - **链接**：[PR #23799](https://github.com/google-gemini/gemini-cli/pull/23799)
10. **feat(acp): 为 ACP 客户端添加独立的权限设置存储**
    - **内容**：修复了在 IDE 隔离配置中工具权限无法持久化保存的问题。
    - **链接**：[PR #23818](https://github.com/google-gemini/gemini-cli/pull/23818)

## 5. 功能需求趋势
根据近期 Issues 的标签和内容分析，社区最关注的功能方向如下：
- **SDD (Spec-Driven Development) 深度集成**：从简单的 Markdown 检查清单向基于文件系统的持久化任务追踪演进，强调状态的可视化和可恢复性。
- **代码理解能力增强**：社区和开发团队都在积极探讨 AST（抽象语法树）感知能力，意图解决当前基于文本搜索的局限性，提高代码修改的精准度。
- **远程开发环境支持**：随着云原生开发趋势，Gemini CLI 正在构建连接远程 Worker 的能力，以解决本地资源受限问题。
- **上下文与记忆管理**：对全局偏好与项目特定上下文的区分需求日益增加，旨在打造更懂“规矩”的 Agent。

## 6. 开发者关注点 (痛点总结)
- **稳定性与响应速度**：近期频繁出现的超时和长时间等待是开发者最大的痛点，直接中断了心流。
- **权限管理的繁琐**：反复询问工具权限且无法有效“记住”选择，是影响自动化体验的主要障碍。
- **UI/UX 细节**：任务列表的跳动、对话框的空间限制等细微之处，在长时间使用中显著影响用户体验。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-03-26)

## 1. 今日速览
GitHub Copilot CLI 发布了 **v1.0.12-0** 版本，带来了配置文件支持增强、全屏模型选择器及 OTEL 性能优化。社区方面，**MCP 服务器连接异常**及**API 速率限制**成为今日讨论焦点，多位用户反馈组织策略误判导致工具不可用。此外，键盘映射问题（如德语布局无法输入 `@`）和快捷键冲突持续困扰跨平台用户。

## 2. 版本发布
### v1.0.12-0
- **配置增强**：新增读取 `.claude/settings.json` 和 `.claude/settings.local.json` 作为额外的仓库配置源。
- **交互优化**：模型选择器现已支持全屏视图，并可使用 `←` / `→` 方向键实时调整推理等级。
- **性能监控**：OTEL hook 执行记录方式由子跨度改为事件，降低了追踪开销。

## 3. 社区热点 Issues
以下筛选了 10 个最具代表性的 Issue，涵盖稳定性、权限控制及用户体验：

1.  **[#2236 MCP 服务器组织策略误判](https://github.com/github/copilot-cli/issues/2236)** 👍 17
    *   **关注点**：多个组织用户反馈 CLI 错误提示 "Third-party MCP servers are disabled"，导致配置的服务器消失。这是目前影响工作流的关键阻塞问题。
2.  **[#970 macOS Gatekeeper 阻止运行](https://github.com/github/copilot-cli/issues/970)** 👍 18
    *   **关注点**：在企业安全策略下，通过 Homebrew 升级后的 CLI 常被 macOS 识别为恶意软件需手动放行，影响企业用户部署体验。
3.  **[#1481 Shift+Enter 快捷键冲突](https://github.com/github/copilot-cli/issues/1481)** 👍 10
    *   **关注点**：用户习惯使用 `Shift+Enter` 换行，但 CLI 会直接执行指令，这与标准聊天应用体验相悖，引发广泛讨论。
4.  **[#1664 支持 Gemini 3.1 Pro](https://github.com/github/copilot-cli/issues/1664)** 👍 16
    *   **关注点**：社区强烈呼吁引入更多前沿模型支持，Gemini 3.1 Pro 是目前呼声最高的功能请求。
5.  **[#2101 瞬时 API 错误与速率限制](https://github.com/github/copilot-cli/issues/2101)**
    *   **关注点**：用户频繁遇到 "Transient API Error" 并触发速率限制，导致工作中断，反映了后端服务的稳定性问题。
6.  **[#1999 德语键盘无法输入 @ 符号](https://github.com/github/copilot-cli/issues/1999)**
    *   **关注点**：特定键盘布局（Alt-Gr + q）失效，导致 CLI 在非英语地区几乎不可用，属于严重的输入法兼容性 Bug。
7.  **[#953 权限请求过于宽泛](https://github.com/github/copilot-cli/issues/953)**
    *   **关注点**：认证时请求账户的读/写权限被认为是“过度索权”，用户希望能细粒度控制 AI 仅访问特定仓库。
8.  **[#1723 /ide 在 VS Code 中失败](https://github.com/github/copilot-cli/issues/1723)**
    *   **关注点**：CLI 无法检测到运行中的 VS Code 工作区，导致 `/ide` 命令无法建立连接，影响了 IDE 集成的核心功能。
9.  **[#2281 --config-dir 忽略 Agent 文件](https://github.com/github/copilot-cli/issues/2281)**
    *   **关注点**：使用自定义配置目录时，Agent 的指令被静默忽略，这对高级用户和自动化工作流构成了隐患。
10. **[#2294 Linux 发行版打包许可澄清](https://github.com/github/copilot-cli/issues/2294)**
    *   **关注点**：Arch Linux 维护者询问是否可以将 Copilot CLI 打包进发行版仓库，涉及开源协议与企业软件分发的边界。

## 4. 重要 PR 进展
过去 24 小时内无公开的 Pull Requests 更新。

## 5. 功能需求趋势
根据近期 Issue 分析，社区需求集中在以下方向：
-   **模型生态扩展**：除了主推的 Claude/GPT，用户强烈希望集成 **Gemini 3.1 Pro** 等新模型。
-   **MCP 稳定性与策略**：Model Context Protocol (MCP) 是当前热点，用户需要更稳定的连接机制和更清晰的**组织策略管理**。
-   **权限与安全**：企业用户对**细粒度权限控制**（仅限特定仓库访问）和**macOS 安全合规**有明确诉求。
-   **输入体验优化**：针对非英语键盘布局的支持以及**快捷键映射**（如 Shift+Enter）的本地化适配需改进。

## 6. 开发者关注点
-   **稳定性痛点**：API 速率限制误伤和瞬态错误是开发者最频繁抱怨的问题，直接影响付费用户的连续工作时间。
-   **交互细节**：`Ctrl+C` 与 `Esc` 的混淆操作、复制代码包含不可见字符等细节 Bug 正在消耗用户的耐心。
-   **企业级功能**：后台 Agent 的 Hook 触发机制、插件自动更新提示等 DevOps 相关功能需求开始增多。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-03-26)

## 1. 今日速览
Kimi Code CLI 今日发布 **v1.26.0** 重要更新，正式将插件系统标记为 Beta 版本，并修复了多项影响用户体验的核心问题，包括网络不稳定时的重试机制和 JSON 解析错误。社区今日非常活跃，共更新了 17 个 Issues 和 20 个 PRs，焦点集中在**自定义快捷键（特别是换行操作）**、**插件系统兼容性**以及**后台任务管理**等功能的深度讨论与实现上。

## 2. 版本发布
- **v1.26.0**
  - **插件系统 Beta**: 文档正式将插件系统标记为 Beta 阶段 ([PR #1558](https://github.com/MoonshotAI/kimi-cli/pull/1558))。
  - **终端修复**: 替换了已移除的 `acp.TerminalHandle`，改用 Client 终端方法 ([PR #1400](https://github.com/MoonshotAI/kimi-cli/pull/1400))。
  - **Bug 修复**: 修复了 YOLO 模式下 `QuestionRequest` 的自动解析问题。

## 3. 社区热点 Issues (Top 10)

1.  **[#1585] Feature Request: Support customizable keybinding for inserting newlines**
    *   **摘要**: 社区强烈希望能自定义插入换行的快捷键（如 `Shift+Enter`），认为当前的 `Ctrl+J` 不符合主流习惯。
    *   **重要性**: 用户体验核心痛点，直接影响输入效率。
    *   **链接**: [MoonshotAI/kimi-cli Issue #1585](https://github.com/MoonshotAI/kimi-cli/issues/1585)

2.  **[#1566] 【Kimi Plugin】对现在的插件提出一些疑问**
    *   **摘要**: 用户询问当前插件系统是否兼容 Claude Code 或 Open Code 的插件，以及安装方式。
    *   **重要性**: 随着插件系统进入 Beta，生态兼容性成为开发者关注焦点。
    *   **链接**: [MoonshotAI/kimi-cli Issue #1566](https://github.com/MoonshotAI/kimi-cli/issues/1566)

3.  **[#1283] Feature Request: Memory System - Persistent context across sessions**
    *   **摘要**: 请求实现跨会话的“记忆系统”，支持 AI 自动记录笔记和用户手动定义指令。
    *   **重要性**: 长期上下文管理是 AI 编程助手进化的关键方向。
    *   **链接**: [MoonshotAI/kimi-cli Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)

4.  **[#1375] [bug] File mentions (@) can't find the files**
    *   **摘要**: 自 v1.18.0 起，使用 `@` 提及文件的功能在特定情况下无法找到文件。
    *   **重要性**: 这是一个影响核心交互流程的回归 Bug，需尽快修复。
    *   **链接**: [MoonshotAI/kimi-cli Issue #1375](https://github.com/MoonshotAI/kimi-cli/issues/1375)

5.  **[#1583] 功能请求：任务执行时再次输入的进入队列**
    *   **摘要**: 用户希望任务执行中的新输入能进入队列而不是打断当前任务，类似 Claude Code 的行为。
    *   **重要性**: 交互逻辑优化，关系到多任务并发的处理体验。
    *   **链接**: [MoonshotAI/kimi-cli Issue #1583](https://github.com/MoonshotAI/kimi-cli/issues/1583)

6.  **[#1574] 功能请求：支持自定义键盘快捷键**
    *   **摘要**: 另一个关于自定义快捷键的请求，强调从 VS Code/JetBrains 迁移用户的习惯一致性。
    *   **重要性**: 验证了 Issue #1585 的需求普遍性。
    *   **链接**: [MoonshotAI/kimi-cli Issue #1574](https://github.com/MoonshotAI/kimi-cli/issues/1574)

7.  **[#1570] [bug] Edit tool getting stuck every time**
    *   **摘要**: v1.25.0 中 Edit 工具频繁卡死。
    *   **重要性**: 严重阻碍开发流程的阻塞性 Bug。
    *   **链接**: [MoonshotAI/kimi-cli Issue #1570](https://github.com/MoonshotAI/kimi-cli/issues/1570)

8.  **[#1334] [bug] Jetbrains IDE kimi不可用**
    *   **摘要**: JetBrains 插件在特定版本下不可用。
    *   **重要性**: IDE 集成是开发者核心场景，影响范围广。
    *   **链接**: [MoonshotAI/kimi-cli Issue #1334](https://github.com/MoonshotAI/kimi-cli/issues/1334)

9.  **[#1540] [bug] Generation terminates on unstable networks**
    *   **摘要**: 网络不稳定时代理直接终止生成而非重试（**已修复**）。
    *   **重要性**: 对应今日 PR 中关于网络重试的修复，验证了问题的存在。
    *   **链接**: [MoonshotAI/kimi-cli Issue #1540](https://github.com/MoonshotAI/kimi-cli/issues/1540)

10. **[#1572] [bug] Invalid tools: SearchWeb, FetchURL**
    *   **摘要**: v1.25.0 启动时报错无效工具。
    *   **重要性**: 影响工具链正常初始化的启动错误。
    *   **链接**: [MoonshotAI/kimi-cli Issue #1572](https://github.com/MoonshotAI/kimi-cli/issues/1572)

## 4. 重要 PR 进展 (Top 10)

1.  **[#1584] chore: bump kimi-cli to 1.26.0**
    *   **内容**: 发布 v1.26.0，同步更新后端 kosong 版本，整理 Changelog。
    *   **意义**: 官方版本发布 PR。
    *   **链接**: [MoonshotAI/kimi-cli PR #1584](https://github.com/MoonshotAI/kimi-cli/pull/1584)

2.  **[#1561] feat(hooks): add lifecycle hooks system (Wire 1.7)**
    *   **内容**: 引入生命周期钩子系统（Hooks），支持在工具使用前后、会话停止等 13 个事件点执行自定义 Shell 命令。
    *   **意义**: 极大增强了工具的可扩展性和自动化能力。
    *   **链接**: [MoonshotAI/kimi-cli PR #1561](https://github.com/MoonshotAI/kimi-cli/pull/1561)

3.  **[#1577] fix(kosong): map httpx ProtocolError to retryable connection error**
    *   **内容**: 将网络协议错误映射为可重试错误，并增加 504 网关超时的重试支持。
    *   **意义**: 修复了 Issue #1540，显著改善弱网环境下的稳定性。
    *   **链接**: [MoonshotAI/kimi-cli PR #1577](https://github.com/MoonshotAI/kimi-cli/pull/1577)

4.  **[#1580] fix: use json.loads(strict=False) for all LLM output parsing**
    *   **内容**: 使用非严格模式解析 JSON，解决 LLM 输出包含控制字符（如换行）导致的解析崩溃问题。
    *   **意义**: 修复 Issue #1378，提升了工具执行的健壮性。
    *   **链接**: [MoonshotAI/kimi-cli PR #1580](https://github.com/MoonshotAI/kimi-cli/pull/1580)

5.  **[#1579] fix(shell): prevent subprocess hang on interactive prompts**
    *   **内容**: 关闭子进程 stdin 并设置 `GIT_TERMINAL_PROMPT=0`，防止 Shell 工具在等待密码输入时永久挂起。
    *   **意义**: 解决了 Issue #1481 等提到的终端卡死问题。
    *   **链接**: [MoonshotAI/kimi-cli PR #1579](https://github.com/MoonshotAI/kimi-cli/pull/1579)

6.  **[#1571] feat(ui): auto-trigger agent when background tasks complete**
    *   **内容**: 后台任务完成时，若 Agent 空闲则自动触发新一轮处理，以便 LLM 响应任务结果。
    *   **意义**: 优化了后台任务与前台交互的连贯性。
    *   **链接**: [MoonshotAI/kimi-cli PR #1571](https://github.com/MoonshotAI/kimi-cli/pull/1571)

7.  **[#1578] feat(skills): --skills-dir supports multi-path append**
    *   **内容**: `--skills-dir` 参数支持多次指定，变为追加模式而非覆盖。
    *   **意义**: 方便用户组合使用不同来源的 Skills。
    *   **链接**: [MoonshotAI/kimi-cli PR #1578](https://github.com/MoonshotAI/kimi-cli/pull/1578)

8.  **[#1581] fix(cli): redirect stderr before MCP loading**
    *   **内容**: 在加载 MCP 前重定向 stderr，防止 OAuth 调试信息污染终端。
    *   **意义**: 解决 Issue #1214，提升终端界面整洁度。
    *   **链接**: [MoonshotAI/kimi-cli PR #1581](https://github.com/MoonshotAI/kimi-cli/pull/1581)

9.  **[#1573] feat(web): 增加工作区文件面板**
    *   **内容**: 在 Web 端右侧增加文件面板，支持查看和下载工作目录产物。
    *   **意义**: 弥补了 Web UI 在文件管理方面的短板。
    *   **链接**: [MoonshotAI/kimi-cli PR #1573](https://github.com/MoonshotAI/kimi-cli/pull/1573)

10. **[#1582] fix(google_genai): strip id from FunctionCall**
    *   **内容**: 移除 Gemini API 请求中的 `id` 字段，修复导致 Gemini 模型崩溃的 HTTP 400 错误。
    *   **意义**: 恢复了对 Google Gemini 模型的兼容性支持。
    *   **链接**: [MoonshotAI/kimi-cli PR #1582](https://github.com/MoonshotAI/kimi-cli/pull/1582)

## 5. 功能需求趋势
根据今日 Issues 分析，社区关注焦点呈现以下趋势：
*   **交互体验微调**: 对键盘快捷键（特别是 `Shift+Enter` 换行）的自定义需求极其强烈，显示出用户对从 IDE 迁移过来的操作习惯一致性非常看重。
*   **生态兼容性**: 随着 Beta 插件系统的推出，开发者开始关注其与现有主流 Agent（如 Claude Code）的插件兼容性及安装便利性。
*   **任务调度与并发**: 社区对“任务队列”机制表现出明显需求，希望从“打断式”交互转向“队列式”处理，以支持更复杂的工作流。
*   **长时记忆**: 持续有声音呼吁跨会话的 Memory System，表明上下文记忆仍是 AI 编程工具的核心竞争领域。

## 6. 开发者关注点
*   **终端稳定性**: 开发者对 CLI 在复杂终端环境（TTY 竞争、交互式提示、网络波动）下的稳定性反馈集中，今日的 PR 修复也主要集中于此。
*   **Web 端功能补全**: Web 端的功能需求逐渐增多（如文件面板、消息队列持久化），表明 Kimi CLI 正在被更多用于非纯终端场景。
*   **工具链健壮性**: 对于工具调用（Tool Call）过程中出现的 JSON 解析错误、网络中断等异常情况，开发者期望有更优雅的重试和降级机制。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-03-26)

你好，我是你的 AI 技术分析师。以下是基于 GitHub 数据生成的 OpenCode 社区日报。

---

## 1. 今日速览

OpenCode 今日发布了 **v1.3.2** 版本，重点引入了 **TUI/Server 端堆内存快照** 功能，极大地提升了内存调试能力。社区方面，**语音输入** 和 **细粒度文件权限控制** 是目前最热门的功能诉求。此外，针对 **Windows 平台兼容性** 和 **多模型工具调用适配** 的修复工作正在积极进行中。

---

## 2. 版本发布

### **v1.3.2 (Latest)**
- **新增功能**：
  - **堆内存快照**：支持通过 "Write heap snapshot" 命令捕获 TUI 和 Server 进程的内存快照，文件分别保存为 `tui.heapsnapshot` 和 `server.heapsnapshot`。这对于排查内存泄漏和性能问题至关重要。

### **v1.3.1**
- **新增功能**：
  - **Poe 认证支持**：新增 Poe 为内置认证提供商，支持 OAuth 和 API Key。
  - **Amazon Bedrock 优化**：为自定义 Bedrock 提供商启用了 Token 缓存功能，可降低成本和延迟。
  - **语法高亮**：新增对 Kotlin, HCL, Lua, 和 TOML 文件的支持。
  - **主题锁定**：支持手动锁定主题模式。

---

## 3. 社区热点 Issues

以下是过去 24 小时内讨论最热烈或最具代表性的 10 个 Issue：

1.  **[FEATURE] 懒人语音输入 (#4695)**
    - **看点**：作为目前点赞数 (117 👍) 最高的 Issue，社区强烈希望增加语音转文字 (STT) 输入功能，以提升交互效率。
    - **链接**：[anomalyco/opencode Issue #4695](https://github.com/anomalyco/opencode/issues/4695)

2.  **[BUG] 使用 Anthropic 模型时路径中的 "opencode" 被错误替换为 "Claude" (#10567)**
    - **看点**：一个诡异但影响严重的 Bug。全局字符串替换导致包含 "opencode" 的目录路径在特定模型下显示错误，可能影响文件操作。
    - **链接**：[anomalyco/opencode Issue #10567](https://github.com/anomalyco/opencode/issues/10567)

3.  **[FEATURE] 请求更细粒度的文件编辑权限 (Glob 模式) (#4287)**
    - **看点**：用户希望限制 Agent 对特定文件的修改权限（如只允许修改文档），这是提升 AI Agent 安全性的关键需求。
    - **链接**：[anomalyco/opencode Issue #4287](https://github.com/anomalyco/opencode/issues/4287)

4.  **[FEATURE] 监听文件指令 (Watch Files) (#1549)**
    - **看点**：类似 Aider 的功能请求，希望 AI 能自动监听代码中的注释指令（如 `# Refactor this`）并执行，实现更流畅的协作。
    - **链接**：[anomalyco/opencode Issue #1549](https://github.com/anomalyco/opencode/issues/1549)

5.  **[BUG] Github Copilot 在会话切换中消耗额外的 Premium 请求 (#11753)**
    - **看点**：涉及成本控制的问题。用户反馈在后台任务切换或压缩上下文时，Copilot 意外消耗了付费额度。
    - **链接**：[anomalyco/opencode Issue #11753](https://github.com/anomalyco/opencode/issues/11753)

6.  **[BUG] 粘贴文本显示为占位符而非内联 (#3532)**
    - **看点**：影响用户体验的 UI 细节问题，多行文本粘贴体验不佳。
    - **链接**：[anomalyco/opencode Issue #3532](https://github.com/anomalyco/opencode/issues/3532)

7.  **[FEATURE] TUI 作为 ACP 客户端 (#5182)**
    - **看点**：高级用户希望能将 OpenCode 的 TUI 界面连接到自定义的 ACP (Agentic Coding Protocol) 兼容后端。
    - **链接**：[anomalyco/opencode Issue #5182](https://github.com/anomalyco/opencode/issues/5182)

8.  **[BUG] GLM-4.6 模型陷入死循环 (#3444)**
    - **看点**：特定开源模型兼容性问题，Agent 不断重复相同动作，显示出对非 Claude 模型的稳定性仍需优化。
    - **链接**：[anomalyco/opencode Issue #3444](https://github.com/anomalyco/opencode/issues/3444)

9.  **[BUG] NFS 并发会话导致 SQLite 数据库损坏 (#14970)**
    - **看点**：严重的基础设施 Bug，影响在共享存储（如 NFS）上运行多个实例的用户，导致数据损坏。
    - **链接**：[anomalyco/opencode Issue #14970](https://github.com/anomalyco/opencode/issues/14970)

10. **[FEATURE] 支持 Ctrl+J/K 菜单导航 (Vim 风格) (#7056)**
    - **看点**：Vim 用户对键盘操作效率的执念，希望支持更友好的键位导航。
    - **链接**：[anomalyco/opencode Issue #7056](https://github.com/anomalyco/opencode/issues/7056)

---

## 4. 重要 PR 进展

1.  **[feat] AI SDK v6 支持 (#18433)**
    - **内容**：将底层 AI SDK 升级至 v6 版本，这是一个大型重构，将显著影响模型调用的底层逻辑。
    - **链接**：[anomalyco/opencode PR #18433](https://github.com/anomalyco/opencode/pull/18433)

2.  **[feat] 队列化忙碌会话的提示词 (#19156) [CLOSED]**
    - **内容**：解决了当 Agent 正在执行任务时，新输入的指令会被拒绝的问题。现在新指令会被排队并在下一轮对话中注入。
    - **链接**：[anomalyco/opencode PR #19156](https://github.com/anomalyco/opencode/pull/19156)

3.  **[feat] Bedrock 自定义 ARN 的提示词缓存 (#16504)**
    - **内容**：优化了 AWS Bedrock 用户的使用成本，为自定义模型支持了 Prompt Caching。
    - **链接**：[anomalyco/opencode PR #16504](https://github.com/anomalyco/opencode/pull/16504)

4.  **[fix] 修复 Windows Git 路径问题 (#19163)**
    - **内容**：使用 `cross-spawn` 替换原生 spawn，修复了 Windows 下 `.cmd` 脚本路径处理的顽疾。
    - **链接**：[anomalyco/opencode PR #19163](https://github.com/anomalyco/opencode/pull/19163)

5.  **[feat] 移动端触控优化 (#18767)**
    - **内容**：优化了 Web 端在手机/平板上的触控体验，试图填补移动端使用的体验短板。
    - **链接**：[anomalyco/opencode PR #18767](https://github.com/anomalyco/opencode/pull/18767)

6.  **[fix] 修复 Gemini "question" 工具的 400 错误 (#19154) [CLOSED]**
    - **内容**：解耦了内部 Zod schema 和 LLM 工具定义，修复了导致 Gemini 模型报错的 Schema 兼容性问题。
    - **链接**：[anomalyco/opencode PR #19154](https://github.com/anomalyco/opencode/pull/19154)

7.  **[feat] 添加 PWA 支持 (#19173)**
    - **内容**：为 Web 端添加渐进式 Web 应用支持，允许将 OpenCode "安装" 到桌面使用。
    - **链接**：[anomalyco/opencode PR #19173](https://github.com/anomalyco/opencode/pull/19173)

8.  **[feat] 多智能体团队协调原语 (#18753)**
    - **内容**：引入多 Agent 协作机制，允许主 Agent 编排并行任务，这是迈向 Agentic Workflow 的重要一步。
    - **链接**：[anomalyco/opencode PR #18753](https://github.com/anomalyco/opencode/pull/18753)

9.  **[fix] 修复子 Agent 的 TodoWrite 权限问题 (#19125) [CLOSED]**
    - **内容**：修复了文档中声明可以开启但实际上被硬编码禁用的子 Agent Todo 工具权限问题。
    - **链接**：[anomalyco/opencode PR #19125](https://github.com/anomalyco/opencode/pull/19125)

10. **[feat] 添加 Black (Python) 和 Taplo (TOML) 格式化工具 (#19010, #19016)**
    - **内容**：丰富了内置的代码格式化工具链，更好地支持 Python 和配置文件开发。
    - **链接**：[PR #19010](https://github.com/anomalyco/opencode/pull/19010) | [PR #19016](https://github.com/anomalyco/opencode/pull/19016)

---

## 5. 功能需求趋势

根据今日的 Issues 统计，社区关注焦点集中在以下几个方向：

-   **多模态交互**：对 **语音输入 (STT)** 的需求非常强烈，用户希望解放双手，通过语音进行 Code Review 或编写代码。
-   **安全与权限控制**：对 **文件系统权限** 的控制要求越来越细致，用户希望不仅仅是简单的读写，而是能像防火墙一样定义规则。
-   **广泛的模型兼容性**：虽然默认推荐 Claude，但大量用户在使用 **Gemini, GLM, Qwen, Mistral** 等模型时遇到工具调用格式不兼容的问题，模型适配仍是重点。
-   **移动端与 Web 体验**：通过 PWA 和触控优化的 PR 可以看出，开发团队正在努力让 OpenCode 摆脱 "仅限桌面终端" 的标签。

---

## 6. 开发者关注点 (痛点)

-   **Windows 平台稳定性**：多个 Issue 和 PR 涉及 Windows 下的路径、安装和进程创建问题，显示出跨平台兼容性仍需打磨。
-   **上下文与并发管理**：并发写入数据库导致损坏、会话切换时的状态丢失，反映出在复杂工程场景下（如多 Monorepo、NFS 环境）的稳定性挑战。
-   **Token 成本与效率**：用户对 Premium 请求的消耗非常敏感，任何不必要的重复请求或缓存未命中都会引起关注。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-03-26)

你好，这是基于最新 GitHub 数据生成的 Qwen Code 社区日报。

## 1. 今日速览
Qwen Code 今日发布了 **v0.14.0-preview.0** 预览版，同时社区针对 v0.13.0 版本中出现的 IDE 进程残留和权限持久化等回归问题进行了高强度的修复。功能方面，新增的 `/loop` 周期性任务命令和 Algolia Cloud API Key 的支持成为了开发者讨论的焦点，标志着工具向更自动化、更易用的方向演进。

## 2. 版本发布
*   **v0.14.0-preview.0**: 主要是底层重构与功能预览，为下一阶段的稳定版做准备。
    *   **链接**: [Release v0.14.0-preview.0](https://github.com/QwenLM/qwen-code/compare/v0.13.0...v0.14.0-preview.0)
*   **v0.13.0-nightly.20260325**: 修复了扩展安装不支持非 GitHub URL 的问题。
    *   **链接**: [Release v0.13.0-nightly](https://github.com/QwenLM/qwen-code/releases/tag/v0.13.0-nightly.20260325.3776825c2)

## 3. 社区热点 Issues (Top 10)

以下筛选了今日最活跃或影响较大的 Issue：

1.  **[Bug] VSCode 关闭标签页后 ACP 子进程残留 (#2665)**
    *   **关注点**: 这是一个严重的资源泄漏问题。关闭 VSCode 聊天窗口后，后台 CLI 进程未终止，导致产生大量孤儿进程占用内存。
    *   **链接**: [Issue #2665](https://github.com/QwenLM/qwen-code/issues/2665)
2.  **[Bug] 会话内答案无法保存，重复询问权限 (#2640)**
    *   **关注点**: 严重影响体验。用户在同一个会话中多次选择 "Always allow"，工具依然反复询问，导致工作流中断。
    *   **链接**: [Issue #2640](https://github.com/QwenLM/qwen-code/issues/2640)
3.  **[Feature] 新增 `/loop` 命令用于周期性任务执行 (#2638)**
    *   **关注点**: 由核心开发者提出的高价值功能。旨在支持 CI 监控、日志轮询等自动化场景，弥补了 Agent 主动性的不足。
    *   **链接**: [Issue #2638](https://github.com/QwenLM/qwen-code/issues/2638)
4.  **[Bug] QWEN CLI 在 Linux 下请求权限时崩溃 (#2626)**
    *   **关注点**: 阻塞性 Bug。在 Ubuntu Server 环境下，触发权限请求会导致 Shell 直接显示 "Terminated" 并退出，严重影响 Linux 用户。
    *   **链接**: [Issue #2626](https://github.com/QwenLM/qwen-code/issues/2626)
5.  **[Feature] 集成阿里云-云效 CI/CD (#2649)**
    *   **关注点**: 本土化需求。社区希望作为阿里云生态的一员，Qwen Code 能优先支持云效的工作流，弥补目前仅支持 GitHub Actions 的空白。
    *   **链接**: [Issue #2649](https://github.com/QwenLM/qwen-code/issues/2649)
6.  **[Bug] `web_fetch` 工具返回 AI 问候语而非网页内容 (#2609)**
    *   **关注点**: 幻觉问题。在使用特定 API（如百炼）时，工具未能抓取网页真实内容，反而返回了模型生成的无关问候语。
    *   **链接**: [Issue #2609](https://github.com/QwenLM/qwen-code/issues/2609)
7.  **[Bug] Ralph Loop 跨会话持久化导致状态混乱 (#2657)**
    *   **关注点**: 状态管理缺陷。开启 Ralph loop 后，即使开启新会话，循环任务依然在后台触发，导致不同会话间互相干扰。
    *   **链接**: [Issue #2657](https://github.com/QwenLM/qwen-code/issues/2657)
8.  **[Bug] Windows 11 下权限设置无法持久化 (#2669)**
    *   **关注点**: 平台兼容性问题。Windows 用户每次运行都需要重新授权，原因疑似路径大小写敏感处理不当。
    *   **链接**: [Issue #2669](https://github.com/QwenLM/qwen-code/issues/2669)
9.  **[Feature] 增加 Alibaba Cloud Standard API Key 选项 (#2664)**
    *   **关注点**: 易用性提升。用户希望在 Auth 流程中直接区分国内站和国际站，无需手动输入复杂的 Endpoint。
    *   **链接**: [Issue #2664](https://github.com/QwenLM/qwen-code/issues/2664)
10. **[Bug] Global Skills 无法读取同目录下的内部文件 (#2543)**
    *   **关注点**: 安全策略过严。全局 Skills 引用自身目录下的文档时被 `read_file` 权限系统拦截，限制了 Skills 的模块化开发。
    *   **链接**: [Issue #2543](https://github.com/QwenLM/qwen-code/issues/2543)

## 4. 重要 PR 进展 (Top 10)

1.  **feat(cli): add /loop command (#2643)**
    *   **内容**: 实现了 `/loop` 斜杠命令，允许用户配置定时间隔执行 Prompt，支持自动化监控任务。
    *   **链接**: [PR #2643](https://github.com/QwenLM/qwen-code/pull/2643)
2.  **fix: prevent orphan ACP processes on tab close... (#2662)**
    *   **内容**: 修复了 Issue #2665。在 VSCode 扩展端增加了 `onDispose` 监听，确保关闭 Tab 时杀掉 ACP 进程及关联的 MCP 子进程。
    *   **链接**: [PR #2662](https://github.com/QwenLM/qwen-code/pull/2662)
3.  **feat(auth): implement Alibaba Cloud Standard API Key support (#2668)**
    *   **内容**: 在 Auth 菜单中增加了阿里云标准 API Key 的支持，自动处理 DashScope Endpoint 的选择。
    *   **链接**: [PR #2668](https://github.com/QwenLM/qwen-code/pull/2668)
4.  **Fix permission persistence failure... (#2670)**
    *   **内容**: 修复了 Windows 下的权限持久化失败问题，统一了路径比较逻辑（忽略大小写）。
    *   **链接**: [PR #2670](https://github.com/QwenLM/qwen-code/pull/2670)
5.  **fix: improve /compress split point selection... (#2659)**
    *   **内容**: 优化了上下文压缩算法。解决了在大量工具调用场景下，压缩分割点选择不当导致压缩失败或 Token 反增的问题。
    *   **链接**: [PR #2659](https://github.com/QwenLM/qwen-code/pull/2659)
6.  **fix: change default context filename... (#2654)**
    *   **内容**: 将默认的上下文文件名从 `QWEN.md` 改为社区通用的 `AGENTS.md`，同时保持向后兼容。
    *   **链接**: [PR #2654](https://github.com/QwenLM/qwen-code/pull/2654)
7.  **feat(vscode): add retry logic and auto-reconnect... (#2666)**
    *   **内容**: 增强了 VSCode 插件的健壮性，为 ACP 连接增加了指数退避重试机制，防止网络抖动导致连接中断。
    *   **链接**: [PR #2666](https://github.com/QwenLM/qwen-code/pull/2666)
8.  **feat(channels): add Channels feature with Telegram... (#2628)**
    *   **内容**: 引入 "Channels" 概念，实验性支持通过 Telegram 和微信与 Qwen Code 交互，拓展了使用边界。
    *   **链接**: [PR #2628](https://github.com/QwenLM/qwen-code/pull/2628)
9.  **refactor: replace shell-utils string parsing... (#2652)**
    *   **内容**: 架构优化。使用 tree-sitter AST 替代了原有的字符串正则解析 Shell 命令，大幅提升了对复杂脚本的解析准确度。
    *   **链接**: [PR #2652](https://github.com/QwenLM/qwen-code/pull/2652)
10. **fix(mcp): restore trust+isTrustedFolder... (#2642)**
    *   **内容**: 修复了 v0.13.0 引入的回归 Bug，恢复了 MCP Server 配置中 `trust: true` 的免确认功能。
    *   **链接**: [PR #2642](https://github.com/QwenLM/qwen-code/pull/2642)

## 5. 功能需求趋势

从今日的 Issues 和 PRs 中，可以观察到以下三个明显的趋势：

1.  **IDE 集成稳定性**: 开发者对 VSCode 插件的稳定性容忍度降低，尤其是进程管理和连接断开等问题。
2.  **自动化与 Agent 能力**: 社区不再满足于 "对话式" 编程，开始通过 `/loop`、Channels 等功能探索 "后台自动化" 和 "多端控制" 场景。
3.  **上下文与权限管理精细化**: 用户对 Token 消耗极其敏感（压缩、Context 清理），同时希望权限管理能更智能，减少对工作流的打断。

## 6. 开发者关注点

*   **痛点：上下文限制**: 多个 Issue 提到长对话后的性能下降、压缩失败以及 "New Session" 不清理上下文的问题，表明长程记忆管理仍是核心挑战。
*   **痛点：跨平台一致性**: Windows 和 Linux 下的路径处理、Shell 兼容性（Git Bash vs CMD）以及权限持久化问题是 Bug 的高发区。
*   **高频需求：CI/CD 深度集成**: 无论是 GitHub Actions 还是阿里云云效，开发者强烈希望 Qwen Code 能深度介入代码审查和构建流程。

</details>