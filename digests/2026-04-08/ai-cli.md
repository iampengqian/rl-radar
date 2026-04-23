# AI CLI 工具社区动态日报 2026-04-08

> 生成时间: 2026-04-07 22:09 UTC | 覆盖工具: 7 个

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

# AI CLI 开发工具生态横向对比分析报告 (2026-04-08)

## 1. 生态全景

当前 AI CLI 工具生态正处于从**单一代码补全向全栈智能体**演进的关键转折期。各大厂商不再局限于终端文本交互，而是竞相通过 **MCP (Model Context Protocol)** 协议构建可连接企业数据、工具链和 IDE 的开放生态。与此同时，**信任危机**与**能力稳定性**成为制约发展的核心矛盾：Anthropic 和 OpenAI 的头部产品均面临模型能力退化、计费异常等社区强烈反弹，而新兴工具则在多模型兼容性和 Agent 自主性上寻求差异化突破。

---

## 2. 各工具活跃度对比

| 工具名称 | 今日版本更新 | 社区热度指标 | 关键动态概览 |
| :--- | :--- | :--- | :--- |
| **Claude Code** | v2.1.94 | Issues: 高热 (单 Issue 👍750+)<br>PRs: 活跃 | **信任危机**：模型能力退化与封号潮引发社区强烈反弹；开源呼声高涨。 |
| **OpenAI Codex** | Rust 客户端高频迭代 (v0.119.0-alpha.16) | Issues: 极高 (单 Issue 💬464)<br>PRs: 高产 | **性能焦虑**：Token 消耗过快与 CPU 占用高成痛点；Rust 重构与图像功能推进中。 |
| **Gemini CLI** | v0.37.0-preview.2 | Issues: 中等<br>PRs: 稳健 | **架构重构**：重点修复 Agent 卡死与 OAuth 体验，推进 Plan Mode 策略优化。 |
| **GitHub Copilot CLI** | v1.0.20 / v1.0.21 | Issues: 中等<br>PRs: 少量 | **生态整合**：正式引入 `copilot mcp` 命令，强化与 GitHub 生态的深度集成。 |
| **Kimi Code CLI** | 无 | Issues: 较高<br>PRs: 激进 | **底层重构**：社区推动从 Python 向 Bun+TypeScript 彻底迁移；Hooks 生态完善中。 |
| **OpenCode** | 无 | Issues: 高 (特定模型问题)<br>PRs: 功能性强 | **兼容性攻坚**：重点解决 Qwen/Gemma 等非标准模型的集成稳定性；引入富交互 UI。 |
| **Qwen Code** | v0.14.1 (及紧急修复) | Issues: 稳定<br>PRs: 修复为主 | **体验修复**：VS Code 插件白屏引发紧急修复；加强中文分词与代码审查能力。 |

---

## 3. 共同关注的功能方向

1.  **MCP (Model Context Protocol) 生态构建**
    *   **涉及工具**: Claude Code, GitHub Copilot CLI, OpenCode, Kimi Code, Qwen Code
    *   **具体诉求**: 社区不再满足于简单的工具调用，而是要求**稳定的 MCP 生命周期管理**（如 Copilot 的 `copilot mcp` 命令）、**跨会话保持**以及**富交互 UI 支持**（OpenCode 的 iframe 方案）。

2.  **上下文与记忆管理智能化**
    *   **涉及工具**: Claude Code, OpenAI Codex, Gemini CLI, Qwen Code, Kimi Code
    *   **具体诉求**: 面对 Token 限制，开发者普遍反感手动管理。诉求集中在**自动压缩策略**（在报错前自动清理）、**全局/项目级分层记忆**（Gemini/Kimi）以及**会话快照/回滚**能力。

3.  **企业级管控与安全 Hooks**
    *   **涉及工具**: Claude Code, OpenAI Codex, Kimi Code, OpenCode
    *   **具体诉求**: 随着 Agent 权限增大，企业要求**细粒度的权限审批流**。例如 OpenCode 和 Kimi 都在开发 `PermissionRequest` 等 Hooks，以便将 Agent 行为接入外部审计或风控系统。

4.  **平台兼容性与底层稳定性**
    *   **涉及工具**: Claude Code, OpenAI Codex, Gemini CLI, Qwen Code
    *   **具体诉求**: Windows 平台的兼容性（Bun 崩溃、WSL 输入法）依然是重灾区。此外，针对不同云服务商（AWS Bedrock, Alibaba Cloud）的**API 适配与限流策略**也是共性痛点。

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术/战略亮点 | 潜在风险 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **极致的工程能力** | 追求复杂任务处理的重度开发者 | Opus 4.6 大上下文、Mantle 架构支持 | **模型能力退化**、账号封禁引发的信任崩塌 |
| **OpenAI Codex** | **高性能基础设施** | 需要 VS Code 深度集成的团队 | **Rust 客户端重构**、图像生成集成、SIWC 生态 | 资源占用高、计费不透明 |
| **GitHub Copilot CLI** | **原生工作流集成** | GitHub 生态内的开发者 | 无缝的 GitHub 认证、Chat App 远程控制 | 终端交互体验（复制粘贴）引发的易用性争议 |
| **Gemini CLI** | **多模态与云端协同** | Google Cloud 及 AI Studio 用户 | Browser Agent 隔离、OSC 8 超链接支持 | Agent 执行效率低、配置优先级逻辑混乱 |
| **Kimi Code** | **国产化与灵活性** | 本地化需求强的开发者/企业 | **Bun + TypeScript 重构**、三层规则系统 | 架构迁移的不确定性、API 兼容性 Bug |
| **OpenCode** | **开放模型聚合器** | 需要集成多种开源/闭源模型的极客 | **MCP Apps (iframe UI)**、OTLP 可观测性 | 非标准模型（Qwen/Gemma）的工具调用不稳定 |
| **Qwen Code** | **中文场景优化** | 中文开发者、阿里云用户 | CJK 分词优化、百炼平台深度集成 | 核心工具（Edit, web_fetch）的回归 Bug |

---

## 5. 社区热度与成熟度

*   **最活跃/争议最大**: **Claude Code** 和 **OpenAI Codex**。虽然处于头部，但近期的大规模负面反馈（能力退化、资源异常）表明它们正处于**成长的阵痛期**，急需平衡模型能力与商业化成本。
*   **最激进/迭代最快**: **OpenAI Codex** (Rust 客户端一日四更) 和 **Kimi Code** (底层语言重构)。显示出团队在性能优化和架构调整上的决心，但也带来了稳定性风险。
*   **稳步推进**: **GitHub Copilot CLI** 和 **Qwen Code**。侧重于补齐生态拼图（MCP）和修复本地化体验，属于**成熟度提升阶段**。

---

## 6. 值得关注的趋势信号

1.  **从 REPL 到 Agent OS 的架构升级**
    *   **信号**: Claude Code 的 Mantle、Kimi 的 Bun 重构、OpenCode 的 MCP Apps。
    *   **价值**: AI CLI 正在演变为一个轻量级的“操作系统”，管理着文件系统、进程、网络和 UI。开发者应关注这些工具提供的**Hooks**和**Plugin API**，以便将内部工具链无缝接入。

2.  **模型成本与能力的博弈加剧**
    *   **信号**: Claude Code 的“努力等级”默认提升但账号封禁增加；Codex 的 Token 消耗过快；上下文自动压缩需求的普及。
    *   **价值**: 在使用这些工具时，单纯依赖“最强模型”不再是最佳实践。开发者需要关注工具提供的**成本控制开关**（如 effort 等级、压缩阈值），在预算和效果间寻找平衡。

3.  **MCP 成为事实标准**
    *   **信号**: GitHub Copilot、OpenCode、Kimi 等均在今日动态中重点提及 MCP。
    *   **价值**: **MCP 已成为 AI 工具连接外部世界的通用语言**。对于技术决策者而言，评估一个 AI 工具的价值，不仅要看其模型智商，更要看其 **MCP 连接器的丰富程度**（如是否支持 Jira、Linear、内部数据库）。

4.  **安全与可控性成为企业采用分水岭**
    *   **信号**: 社区对 Agent 误删数据库、修改代码权限的焦虑，催生了细粒度的 Permission Hooks 和只读模式重构。
    *   **价值**: 企业引入 AI CLI 时，必须评估其**安全护栏**（Guardrails）。能否拦截高风险命令、能否审计 Agent 行为，将是未来企业选型的核心指标。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

作为一名专注于 Claude Code 生态的技术分析师，基于 `anthropics/skills` 仓库截止 2026-04-08 的数据，我为您整理了以下社区热点报告。

**分析师注**：当前数据中热门 Pull Requests 缺乏具体的评论数（显示为 `undefined`），本报告主要依据 PR 的功能重要性、更新时间活跃度及 Issues 中的社区痛点进行综合评估。

---

### 1. 热门 Skills 排行榜（高关注度 PR）

以下 PRs 代表了社区目前最活跃的开发方向，主要集中在**文档处理标准化**和**系统自动化**领域。

1.  **[PR #514] document-typography: 生成文档的排版质量控制**
    *   **功能**：解决 AI 生成文档中常见的排版问题，如孤行、寡妇段落及编号错位。
    *   **热点分析**：直击痛点。AI 生成的文档往往内容正确但格式粗糙，该 Skill 试图填补“最后一公里”的体验差距。
    *   **状态**：`OPEN` | **链接**：[anthropics/skills #514](https://github.com/anthropics/skills/pull/514)

2.  **[PR #806] sensory: 原生 macOS 自动化 (AppleScript)**
    *   **功能**：通过 `osascript` 让 Claude 直接操控 macOS，而非依赖基于截图的 Computer Use。
    *   **热点分析**：性能与隐私的平衡。相比模拟点击，原生脚本更稳定、更快速，是桌面端自动化的重大改进。
    *   **状态**：`OPEN` | **链接**：[anthropics/skills #806](https://github.com/anthropics/skills/pull/806)

3.  **[PR #83] skill-quality-analyzer & skill-security-analyzer**
    *   **功能**：两个“元技能”，分别用于评估 Skill 的质量和检测潜在安全风险。
    *   **热点分析**：生态成熟的标志。随着 Skill 数量增加，社区开始寻求自动化工具来保障代码质量和安全性。
    *   **状态**：`OPEN` | **链接**：[anthropics/skills #83](https://github.com/anthropics/skills/pull/83)

4.  **[PR #486] ODT Skill: 开放文档格式支持**
    *   **功能**：支持 `.odt`（LibreOffice/OpenOffice 标准）的创建、模板填充及 HTML 转换。
    *   **热点分析**：打破 Docx 垄断。为开源办公软件用户提供企业级文档处理能力。
    *   **状态**：`OPEN` | **链接**：[anthropics/skills #486](https://github.com/anthropics/skills/pull/486)

5.  **[PR #723] testing-patterns: 全栈测试模式库**
    *   **功能**：涵盖单元测试、React 组件测试及测试哲学的综合性 Skill。
    *   **热点分析**：代码可靠性的基石。社区对于“如何让 Claude 写出高质量测试”的需求一直很高。
    *   **状态**：`OPEN` | **链接**：[anthropics/skills #723](https://github.com/anthropics/skills/pull/723)

6.  **[PR #210] frontend-design: 前端设计技能改进**
    *   **功能**：重写指令以提高清晰度和可执行性，解决原有 Skill 过于抽象的问题。
    *   **热点分析**：UI/UX 是 Claude Code 的高频场景，优化此 Skill 能显著提升前端开发效率。
    *   **状态**：`OPEN` | **链接**：[anthropics/skills #210](https://github.com/anthropics/skills/pull/210)

---

### 2. 社区需求趋势（基于 Issues 分析）

通过分析 Issues 中的讨论和报错，社区目前最迫切的需求集中在以下三个方向：

*   **企业级协作与共享机制**
    *   **需求**：用户强烈希望能支持**组织内部共享 Skills**（Issue #228），而不是目前的单机手动导入模式。
    *   **痛点**：目前的分发方式（下载 .skill 文件 -> Slack 传输 -> 手动上传）对团队协作极不友好。

*   **信任与安全边界**
    *   **需求**：社区担忧第三方 Skill 冒充官方 Skill（Issue #492），呼吁建立清晰的**命名空间隔离**和签名验证机制。
    *   **痛点**：用户在不知情下可能授予非官方 Skill 过高权限。

*   **跨平台与基础设施兼容**
    *   **需求**：
        1.  **AWS Bedrock 兼容**（Issue #29）：大量企业用户希望能在 Bedrock 环境中使用 Skills。
        2.  **MCP 协议转化**（Issue #16）：希望将 Skill 封装为标准化的 MCP (Model Context Protocol) 工具，以实现更通用的 API 调用。

---

### 3. 高潜力待合并 Skills

以下 PRs 虽处于 Open 状态，但针对关键 Bug 或基础设施进行了修复，合并优先级极高：

*   **[PR #541] fix(docx): 修复追踪变更 ID 冲突**
    *   **理由**：修复了 OOXML 中 `w:id` 冲突导致文档损坏的严重 Bug，直接影响 Docx Skill 的可用性。
    *   **链接**：[anthropics/skills #541](https://github.com/anthropics/skills/pull/541)
*   **[PR #539] fix(skill-creator): YAML 特殊字符校验**
    *   **理由**：修复了 Skill 描述中包含 `:` 等特殊字符导致 YAML 静默解析失败的 Bug，这是 Skill 开发者的常见陷阱。
    *   **链接**：[anthropics/skills #539](https://github.com/anthropics/skills/pull/539)
*   **[PR #509] docs: 添加 CONTRIBUTING.md**
    *   **理由**：填补了社区健康度指标的空白，为后续更多外部贡献者规范了流程。
    *   **链接**：[anthropics/skills #509](https://github.com/anthropics/skills/pull/509)

---

### 4. Skills 生态洞察

> **“社区正从‘功能创造’转向‘治理与集成’，迫切要求解决团队分发困难、文档格式标准化及跨平台兼容性（Bedrock/MCP）等生态级难题。”**

---

# Claude Code 社区动态日报 (2026-04-08)

> **数据来源**: github.com/anthropics/claude-code | 分析师: AI 技术分析团队

---

## 1. 今日速览

Claude Code 发布 **v2.1.94**，新增 Mantle 支持以接入 Amazon Bedrock，并将付费用户默认努力等级提升至 "high"。社区方面，**账号封禁与用量异常扣费**问题持续发酵，多个高热度 Issue 反映付费后账号被停用；同时，**模型能力退化**（特别是 Opus 4.6）引发 750+ 点赞的激烈讨论。Windows 平台的稳定性问题（Bun 崩溃、权限绕过失效）仍是用户痛点。

---

## 2. 版本发布

### v2.1.94 (2026-04-08)

| 更新项 | 说明 |
|--------|------|
| **Amazon Bedrock + Mantle 支持** | 设置环境变量 `CLAUDE_CODE_USE_MANTLE=1` 即可启用 |
| **默认努力等级调整** | API-key、Bedrock/Vertex/Foundry、Team 及 Enterprise 用户的默认 effort 从 `medium` 提升至 `high`（可通过 `/effort` 命令控制） |
| **Slack 集成优化** | 添加紧凑的 `Slacked #channel` 头部显示 |

---

## 3. 社区热点 Issues (Top 10)

| # | Issue | 重要性分析 | 社区反应 |
|---|-------|-----------|----------|
| 1 | [#5088](https://github.com/anthropics/claude-code/issues/5088) **Claude Account Disabled After Payment for Claude Code Max 5x Plan** | 付费后账号立即被封禁，涉及支付与账号系统的严重 bug，影响用户信任 | 👍 47 / 💬 159 |
| 2 | [#42796](https://github.com/anthropics/claude-code/issues/42796) **[MODEL] Claude Code is unusable for complex engineering tasks with the Feb updates** | 2 月更新后模型能力显著下降，无法完成复杂工程任务，被标记为 CLOSED 但社区争议极大 | 👍 750 / 💬 114 |
| 3 | [#27302](https://github.com/anthropics/claude-code/issues/27302) **[FEATURE] Support multiple Connector accounts** | 请求支持同一连接器的多账号切换，企业用户刚需功能 | 👍 140 / 💬 102 |
| 4 | [#41930](https://github.com/anthropics/claude-code/issues/41930) **Widespread abnormal usage limit drain** | 自 3 月 23 日起各付费层级的用量异常消耗，用户质疑计费系统问题 | 👍 29 / 💬 31 |
| 5 | [#21875](https://github.com/anthropics/claude-code/issues/21875) **Repeated Bun v1.3.5 segfaults (Windows + WSL)** | Windows 平台下嵌入式 Bun 崩溃 78 次，已定位根因，被标记为 high-priority | 👍 8 / 💬 27 |
| 6 | [#36192](https://github.com/anthropics/claude-code/issues/36192) **--dangerously-skip-permissions does not bypass Edit permission prompts** | 权限绕过参数失效，影响自动化工作流，有可复现步骤 | 👍 12 / 💬 22 |
| 7 | [#42248](https://github.com/anthropics/claude-code/issues/42248) **Desktop app (macOS) ignores PATH** | macOS 桌面应用无法读取 PATH 环境变量，导致 Read tool 找不到 poppler 等工具 | 👍 13 / 💬 16 |
| 8 | [#43989](https://github.com/anthropics/claude-code/issues/43989) **v2.1.92 regression: autocompact threshold reduced** | Opus 4.6 (1M context) 的自动压缩阈值从 ~1M 降至 ~400k tokens，未在更新日志中说明 | 👍 0 / 💬 4 |
| 9 | [#26767](https://github.com/anthropics/claude-code/issues/26767) **Effort does not work with Bedrock Application Inference Profiles** | Bedrock 用户无法使用 effort 功能，影响模型输出质量调控 | 👍 6 / 💬 4 |
| 10 | [#44868](https://github.com/anthropics/claude-code/issues/44868) **Claude Code exposes secrets from .env files** | 安全隐患：即使 CLAUDE.md 中有明确禁止，模型仍会读取并输出 .env 等敏感文件内容 | 👍 0 / 💬 2 |

---

## 4. 重要 PR 进展 (Top 10)

| # | PR | 功能/修复内容 | 状态 |
|---|-----|--------------|------|
| 1 | [#44874](https://github.com/anthropics/claude-code/pull/44874) **wmux-orchestrator plugin** | 多 Agent 任务编排插件，将复杂开发任务分解为并行 Claude Code agents，支持依赖感知的波浪式协调 | OPEN |
| 2 | [#44742](https://github.com/anthropics/claude-code/pull/44742) **fix: session persistence data loss** | 修复 VS Code 扩展会话持久化数据丢失的关键 bug，添加诊断工具脚本 | OPEN |
| 3 | [#41447](https://github.com/anthropics/claude-code/pull/41447) **feat: open source claude code** | 社区发起的开源 Claude Code 提案 | OPEN |
| 4 | [#41518](https://github.com/anthropics/claude-code/pull/41518) **Fully Open Source Claude Code** | 从 npm 包中提取 1906 个 TypeScript 源文件，成功构建 `--version` / `--help` | OPEN |
| 5 | [#44681](https://github.com/anthropics/claude-code/pull/44681) **fix(security-guidance): remove stale exec guidance** | 移除过时的执行安全指导 | OPEN |
| 6 | [#44676](https://github.com/anthropics/claude-code/pull/44676) **fix(plugin-dev): add missing plugin manifest** | 补充 plugin-dev 缺失的插件清单文件，与 marketplace 保持一致 | OPEN |
| 7 | [#41938](https://github.com/anthropics/claude-code/pull/41938) **Add Linux/macOS Bash script for DevContainer** | 添加跨平台 DevContainer 启动脚本，解决之前仅支持 Windows PowerShell 的问题 | OPEN |
| 8 | [#39148](https://github.com/anthropics/claude-code/pull/39148) **feat: add preserve-session plugin** | 路径无关的会话历史保持插件，为项目分配 UUID 实现目录重命名/移动后历史不丢失 | OPEN |
| 9 | [#41611](https://github.com/anthropics/claude-code/pull/41611) **add the missing source to claude code** | 补充 Claude Code 缺失的源代码 | OPEN |
| 10 | [#1](https://github.com/anthropics/claude-code/pull/1) **Create SECURITY.md** | 创建安全策略文档（历史 PR，今日有更新） | CLOSED |

---

## 5. 功能需求趋势

从 Issues 中提炼出社区最关注的功能方向：

| 趋势方向 | 相关 Issues | 核心诉求 |
|----------|-------------|----------|
| **🔐 多账号/连接器支持** | #27302 | 支持同一连接器（如 GitHub、Jira）的多个账号切换 |
| **💰 计费透明度与公平性** | #5088, #41930, #44885 | 用量统计准确性、付费后账号状态、Token 消耗透明度 |
| **🤖 模型稳定性与能力** | #42796, #44461, #44865 | 反对模型能力退化、要求稳定的复杂任务处理能力 |
| **🪟 Windows 平台支持** | #21875, #36192, #38887, #32951 | 修复 Bun 崩溃、权限系统、CR/LF 处理、MCP 服务器加载 |
| **🔌 MCP 生态完善** | #42470, #43839, #32951 | HTTP 客户端连接、Gmail MCP 搜索修复、本地 stdio 服务器 |
| **🔒 安全与隐私** | #44868 | 防止敏感文件（.env）被意外读取和输出 |
| **🛠️ Agent/插件扩展** | #44882, #42106 | 持久化观察者 Agent、个人开发用的 OAuth/订阅 Token 支持 |

---

## 6. 开发者关注点

### 高频痛点

1. **账号与计费问题**
   - 付费 Max 5x 计划后账号立即被禁用（#5088）
   - 用量异常快速消耗，Max 用户从"可用数周"变成"仅用 2 天"（#41930, #44855）

2. **模型能力退化**
   - 2 月更新后 Opus 4.6 在复杂工程任务中表现显著下降（#42796, 👍750）
   - 模型"故意破坏代码"、浪费 Token 的指控（#43052）

3. **Windows 平台体验差**
   - Bun v1.3.5 频繁 segfault，已记录 78 次崩溃（#21875）
   - `--dangerously-skip-permissions` 参数失效（#36192）
   - 换行符 (CR/LF) 处理问题（#38887）

4. **企业级功能缺失**
   - 多连接器账号支持（#27302）
   - Bedrock/Vertex 上的完整功能支持（effort 参数 #26767）
   - 代理服务器支持（#41167）

### 高频需求

- **开源 Claude Code**：多个 PR（#41447, #41518, #41611）反映社区强烈希望开源
- **插件生态**：多 Agent 编排（#44874）、会话持久化（#39148）
- **上下文管理**：1M context 的 Opus 4.6 自动压缩阈值问题（#43989）

---

## 总结

今日 Claude Code 社区呈现**两极分化**：一方面官方积极推送新功能（Bedrock 支持、effort 默认值提升），另一方面**信任危机**正在发酵——模型能力退化、账号封禁、用量异常扣费等问题引发大量负面反馈。Windows 平台的稳定性仍是短板。建议 Anthropic 团队优先处理计费透明度和模型质量相关的高优先级 Issue，以重建用户信任。

---
*本报告基于 GitHub 公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-04-08)

## 1. 今日速览
今日 OpenAI Codex 发布了 Rust 客户端的多个 Alpha 版本（v0.119.0-alpha.13 至 .16），迭代速度极快。社区方面，Token 消耗过快（#14593）和 macOS 平台的高 CPU 占用（#16231）成为用户投诉焦点，而官方正在推进的“图像生成”功能（#17049）和“异步配置加载”（#15695）等 PR 值得开发者密切关注。

## 2. 版本发布
过去 24 小时内，Rust 客户端进行了高频迭代，主要集中在 **v0.119.0** 的 Alpha 阶段：
*   **rust-v0.119.0-alpha.16**: [Release Note](https://github.com/openai/codex/releases/tag/rust-v0.119.0-alpha.16)
*   **rust-v0.119.0-alpha.15**: [Release Note](https://github.com/openai/codex/releases/tag/rust-v0.119.0-alpha.15)
*   **rust-v0.119.0-alpha.14**: [Release Note](https://github.com/openai/codex/releases/tag/rust-v0.119.0-alpha.14)
*   **rust-v0.119.0-alpha.13**: [Release Note](https://github.com/openai/codex/releases/tag/rust-v0.119.0-alpha.13)

## 3. 社区热点 Issues (Top 10)

以下是今日社区讨论最激烈或影响最大的 Issue：

1.  **[bug] Token 消耗异常迅速** - **#14593** 🔥
    *   **热度**: 👍 172 | 💬 464
    *   **点评**: 这是目前社区最关注的痛点。用户反馈在 VS Code 插件中 Token 燃烧速度极快，严重影响了 Business 订阅用户的使用体验。
    *   **链接**: [openai/codex Issue #14593](https://github.com/openai/codex/issues/14593)

2.  **[enhancement] macOS Intel (x86_64) 支持** - **#10410**
    *   **热度**: 👍 243 | 💬 165
    *   **点评**: 大量 Intel Mac 用户呼吁官方提供桌面端支持或 Universal Build，目前仅支持 Apple Silicon 限制了用户群覆盖。
    *   **链接**: [openai/codex Issue #10410](https://github.com/openai/codex/issues/10410)

3.  **[enhancement] Codex 远程控制功能** - **#9224**
    *   **热度**: 👍 246 | 💬 37
    *   **点评**: 开发者希望通过手机端 ChatGPT App 远程控制桌面 PC 上的 Codex CLI，实现跨设备协同工作流。
    *   **链接**: [openai/codex Issue #9224](https://github.com/openai/codex/issues/9224)

4.  **[bug] CLI 认证 401 Unauthorized** - **#12764**
    *   **热度**: 👍 4 | 💬 93
    *   **点评**: 涉及 CLI 工具的登录鉴权失败问题，导致流断开，是影响开发效率的阻塞性 Bug。
    *   **链接**: [openai/codex Issue #12764](https://github.com/openai/codex/issues/12764)

5.  **[bug] VS Code 插件面板长时间运行变灰** - **#8197**
    *   **热度**: 👍 16 | 💬 42
    *   **点评**: 这是一个长时间运行后的 UI 假死问题，影响长时间工作的稳定性。
    *   **链接**: [openai/codex Issue #8197](https://github.com/openai/codex/issues/8197)

6.  **[enhancement] Windows 独立安装包** - **#13993**
    *   **热度**: 👍 56 | 💬 17
    *   **点评**: 许多 Windows 用户受限于公司策略无法访问 Microsoft Store，急需传统的 `.exe` 安装程序。
    *   **链接**: [openai/codex Issue #13993](https://github.com/openai/codex/issues/13993)

7.  **[bug] macOS 更新后 CPU 占用极高** - **#16231**
    *   **热度**: 👍 29 | 💬 18
    *   **点评**: 最新版 VS Code 扩展（26.325.31654）在 macOS 上导致严重的 CPU 发热和性能下降，属于近期回归问题。
    *   **链接**: [openai/codex Issue #16231](https://github.com/openai/codex/issues/16231)

8.  **[bug] WSL2 中无法输入重音字符** - **#13638**
    *   **热度**: 👍 1 | 💬 16
    *   **点评**: 影响 WSL2 终端用户的国际化输入体验，属于 TUI 层面的编码处理问题。
    *   **链接**: [openai/codex Issue #13638](https://github.com/openai/codex/issues/13638)

9.  **[bug] 沙箱无法访问 localhost 服务** - **#11095**
    *   **热度**: 👍 2 | 💬 10
    *   **点评**: 在沙箱环境中无法连接本地 Docker 或 Convex 服务，阻碍了全栈开发调试。
    *   **链接**: [openai/codex Issue #11095](https://github.com/openai/codex/issues/11095)

10. **[bug] App 启动时因 SSH Config 过大无响应** - **#16553**
    *   **热度**: 👍 1 | 💬 5
    *   **点评**: 针对~/.ssh/config` 文件较大的高级用户，Codex 启动时会发生卡顿，影响使用体验。
    *   **链接**: [openai/codex Issue #16553](https://github.com/openai/codex/issues/16553)

## 4. 重要 PR 进展 (Top 10)

1.  **[feat] 默认启用图像生成功能** - **#17049**
    *   **内容**: 将 `image_generation` 标记为稳定功能并在注册表中默认启用。
    *   **链接**: [openai/codex PR #17049](https://github.com/openai/codex/pull/17049)

2.  **[fix] 优化 TUI 启动延迟** - **#17039**
    *   **内容**: 将账户/速率限制的获取改为异步，解决 TUI 启动时卡顿在 "refreshing cached limits" 的问题。
    *   **链接**: [openai/codex PR #17039](https://github.com/openai/codex/pull/17039)

3.  **[feat] 仅对 SIWC 用户启用图像生成** - **#17046**
    *   **内容**: 配合 #17049，暂时限制非 SIWC 用户使用图像生成，以防止 WebSocket 过载。
    *   **链接**: [openai/codex PR #17046](https://github.com/openai/codex/pull/17046)

4.  **[refactor] 迁移配置加载至异步模式** - **#15695**
    *   **内容**: 重构配置加载逻辑（从 `resolve_root_git_project_for_trust` 开始），强制调用链异步化，有望解决启动卡顿。
    *   **链接**: [openai/codex PR #15695](https://github.com/openai/codex/pull/15695)

5.  **[feat] 通过 Executor Filesystem 应用 Patches** - **#17048**
    *   **内容**: 在远程环境下，通过 executor filesystem 运行 `apply_patch`，而不是调用本地 shell，提升远程开发的稳定性。
    *   **链接**: [openai/codex PR #17048](https://github.com/openai/codex/pull/17048)

6.  **[feat] 添加 Memory 扩展** - **#16276**
    *   **内容**: 引入内存扩展机制，可能涉及上下文记忆或状态保持的底层架构更新。
    *   **链接**: [openai/codex PR #16276](https://github.com/openai/codex/pull/16276)

7.  **[fix] 修复网络代理设置刷新逻辑** - **#17040**
    *   **内容**: 修复切换沙箱模式时网络代理策略未正确更新的 Bug。
    *   **链接**: [openai/codex PR #17040](https://github.com/openai/codex/pull/17040)

8.  **[feat] Hooks 生命周期管理增强** - **#15937**
    *   **内容**: 添加 `allow_managed_hooks_only` 策略，增强企业级管控能力和安全性。
    *   **链接**: [openai/codex PR #15937](https://github.com/openai/codex/pull/15937)

9.  **[feat] 引入 ServerResponse 协议** - **#17044**
    *   **内容**: 为 `app-server-protocol` 引入类型化的 `ServerResponse`，为后续分析工具流和审批流打下基础。
    *   **链接**: [openai/codex PR #17044](https://github.com/openai/codex/pull/17044)

10. **[fix] 消除远程解析后的陈旧 UI 请求** - **#15134**
    *   **内容**: 当审批请求在另一个客户端被解决时，TUI 自动消除本地滞留的弹窗，避免 UI 混乱。
    *   **链接**: [openai/codex PR #15134](https://github.com/openai/codex/pull/15134)

## 5. 功能需求趋势

*   **跨平台与安装自由度**: Windows 用户强烈要求摆脱 Microsoft Store 的限制，而 macOS Intel 用户仍在等待官方支持。
*   **性能与资源占用**: Token 消耗速度、CPU 高负载和启动延迟是用户对当前版本最不满意的三个性能维度。
*   **远程与多端协同**: 社区对 "Remote Control" 的需求高涨，希望打通移动端与桌面端的开发工作流。
*   **企业级管控**: 对于 Hooks 和策略的管理需求正在变复杂，社区希望有更精细的权限控制。

## 6. 开发者关注点

*   **资源消耗异常**: 开发者普遍反映 Codex 在后台空闲或执行简单任务时，CPU 和 Token 消耗不符合预期，需重点排查是否有死循环或过度轮询。
*   **网络与代理问题**: 在 WSL2、Docker 及企业代理环境下，Codex 的连接稳定性（Auth 401, Sandbox Localhost）仍是主要痛点。
*   **模型行为怪癖**: 包括 GPT-5.4 输出乱码（Internal tool format leak）和跨项目状态泄漏，表明模型在特定边界条件下的行为仍需微调。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-04-08)

你好，这是基于 GitHub 数据生成的 Gemini CLI 社区日报。

## 1. 今日速览
Gemini CLI 今日发布了 **v0.37.0-preview.2**，主要修复了 Windows/BSD 环境下的执行脚本兼容性问题。社区热点集中在 **Agent 性能瓶颈**（执行小任务耗时过长）及 **上下文与工具限制** 的讨论上。此外，开发团队提交了多项关于 **Plan Mode 策略重构** 和 **终端交互体验（如 OAuth 链接处理）** 的关键 PR。

## 2. 版本发布
*   **v0.37.0-preview.2**
    *   **主要更新**：修补了 `v0.37.0-preview.1` 版本中的一个问题，并修复了 Shebang 中 `-S` 参数导致在 Windows 和 BSD 系统上无法执行的 Bug。
    *   **详情链接**：[Release v0.37.0-preview.2](https://github.com/google-gemini/gemini-cli/releases/tag/v0.37.0-preview.2)

## 3. 社区热点 Issues (Top 10)

以下 Issues 反映了当前社区最关心的痛点与功能需求：

1.  **[P0] Agent 执行极慢甚至卡死**
    *   **链接**：[#22141](https://github.com/google-gemini/gemini-cli/issues/22141)
    *   **简评**：目前社区关注度最高的问题（👍 95）。用户反馈即使是编辑 1-3 个文件的小任务，CLI 也会卡住数分钟甚至超过 1 小时，严重影响开发效率。
2.  **[功能] 评估 AST 感知工具对代码库的影响**
    *   **链接**：[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
    *   **简评**：官方正在调研引入 AST（抽象语法树）感知的文件读取和搜索工具，旨在减少 Token 噪音并提高代码修改的精准度，是未来的重要优化方向。
3.  **[P1] Browser Agent 忽略 settings.json 配置**
    *   **链接**：[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)
    *   **简评**：Browser Agent 似乎完全忽略了 `maxTurns` 等全局或项目级配置，导致行为不可控，影响自动化流程的稳定性。
4.  **[P2] Agent 在随机位置创建临时脚本**
    *   **链接**：[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)
    *   **简评**：模型在执行 Shell 命令时倾向于在各个目录生成临时编辑脚本，导致工作区脏文件难以清理，用户希望规范写入位置。
5.  **[功能] 实现全局与项目级的记忆路由**
    *   **链接**：[#22819](https://github.com/google-gemini/gemini-cli/issues/22819)
    *   **简评**：为了让 Agent 更“聪明”，正在开发记忆子系统，区分“用户通用偏好”（全局）和“特定代码库信息”（项目级）。
6.  **[P1] Subagent 达到 MAX_TURNS 却误报成功**
    *   **链接**：[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
    *   **简评**：一个严重的逻辑缺陷。Subagent 达到最大步数限制被中断后，却向主 Agent 汇报“任务成功”，可能导致错误的代码变更合并。
7.  **[功能] 增加上下文限制与 SubAgent 并行度**
    *   **链接**：[#24856](https://github.com/google-gemini/gemini-cli/issues/24856)
    *   **简评**：用户呼吁提高 Context Window 和 Token 限制，以支持处理更大型的复杂项目。
8.  **[反馈] Agent 破坏性操作缺乏防护**
    *   **链接**：[#24855](https://github.com/google-gemini/gemini-cli/issues/24855)
    *   **简评**：有用户反馈 Agent 在测试时误删了整个数据库。这突显了对高风险操作（如 DB 修改、Git Force）增加安全确认机制的必要性。
9.  **[P1] 工具数量超过 128 个导致 400 错误**
    *   **链接**：[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
    *   **简评**：当可用工具超过一定数量时，模型会报错。这限制了复杂插件生态的发展，需要更智能的工具范围筛选机制。
10. **[体验] SSH 环境下文字乱码**
    *   **链接**：[#24202](https://github.com/google-gemini/gemini-cli/issues/24202)
    *   **简评**：Windows 用户通过 SSH 连接 Linux 时界面显示乱码，这是远程开发场景中常见的阻塞性问题。

## 4. 重要 PR 进展 (Top 10)

今日的 PR 主要集中在核心体验修复和架构优化：

1.  **[Core] 修复 OAuth 登录链接截断问题**
    *   **链接**：[#24853](https://github.com/google-gemini/gemini-cli/pull/24853)
    *   **内容**：修复了窄终端窗口下 OAuth URL 被截断导致无法登录的高优 Bug，确保认证链接完整显示。
2.  **[Plan Mode] 简化策略优先级并整合只读规则**
    *   **链接**：[#24849](https://github.com/google-gemini/gemini-cli/pull/24849)
    *   **内容**：重构了 Plan Mode 和 Read-Only 模式的策略优先级，解决了规则冲突并减少了配置冗余。
3.  **[Core] 移除 tmux 备用缓冲区警告**
    *   **链接**：[#24852](https://github.com/google-gemini/gemini-cli/pull/24852)
    *   **内容**：移除了困扰 tmux 用户的误报警告信息，优化了终端复用场景下的体验。
4.  **[UI] 增加 OSC 8 超链接支持**
    *   **链接**：[#24826](https://github.com/google-gemini/gemini-cli/pull/24826)
    *   **内容**：在终端输出中为文件路径和 URL 添加可点击的超链接（支持 VS Code, iTerm2 等），提升交互效率。
5.  **[Agent] 隔离并发 Browser Agent 实例**
    *   **链接**：[#24794](https://github.com/google-gemini/gemini-cli/pull/24794)
    *   **内容**：修复了多个 Browser Agent 并发运行时互相干扰（抢夺同一个浏览器会话）的问题。
6.  **[Core] 优化工具输出的紧凑模式**
    *   **链接**：[#24677](https://github.com/google-gemini/gemini-cli/pull/24677)
    *   **内容**：改进了 CLI 的紧凑显示模式，移除了多行 Payload，显著提高了信息密度和可读性。
7.  **[Core] 改进大型工具输出的内存管理**
    *   **链接**：[#20406](https://github.com/google-gemini/gemini-cli/pull/20406)
    *   **内容**：针对 Shell 命令产生大量输出的场景，将数据直接写入磁盘而非全量加载到内存，防止 V8 OOM 崩溃。
8.  **[ACP] 添加 /help 命令**
    *   **链接**：[#24839](https://github.com/google-gemini/gemini-cli/pull/24839)
    *   **内容**：为 Agent Client Protocol (ACP) 接口添加了帮助命令，方便用户查看可用指令。
9.  **[Windows] 修复 Skill 链接权限问题**
    *   **链接**：[#24823](https://github.com/google-gemini/gemini-cli/pull/24823)
    *   **内容**：解决了 Windows 上创建符号链接需要管理员权限导致的 Skill 链接失败问题。
10. **[Core] 处理嵌套 Plan 文件路径**
    *   **链接**：[#24854](https://github.com/google-gemini/gemini-cli/pull/24854)
    *   **内容**：修复了无法正确写入深层目录下 Plan 文件的 Bug，增强了文件系统操作的健壮性。

## 5. 功能需求趋势

从近期 Issues 分析，社区对以下方向的需求日益增长：

*   **性能与稳定性**：对 Agent Loop 的响应速度和避免卡死有着极高诉求（#22141）。
*   **上下文与记忆**：希望能区分“个人偏好”与“项目上下文”（#22819），并支持更大的上下文窗口以处理大型项目（#24856）。
*   **安全与可控性**：强烈要求 Agent 在进行数据库删除、Git Force 等危险操作时具备更明确的确认机制或阻止能力（#22672, #24855）。
*   **智能感知**：期待引入 AST 感知能力，让 AI 不仅仅是字符串处理，而是真正理解代码结构（#22745）。

## 6. 开发者关注点

*   **远程开发体验**：Windows SSH 连接后的乱码问题（#24202）表明 CLI 在跨平台终端适配（如 Unicode 支持）上仍有优化空间。
*   **CI/CD 集成**：开发者反馈模型在 CI 环境下的行为评估不够稳定（#23166），且存在 Fork PR 无法运行特定 CI 的问题（#24493），影响了开源贡献者的体验。
*   **配置优先级**：`settings.json` 被忽略的问题（#22267）显示，随着功能增加，配置加载的优先级逻辑变得复杂，开发者需要更可预测的配置覆盖机制。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

你好！我是你的 AI 开发工具技术分析师。根据 2026-04-08 的 GitHub 数据，以下是 GitHub Copilot CLI 的社区动态日报。

---

# 📅 GitHub Copilot CLI 社区动态日报 (2026-04-08)

## 1. 🚀 今日速览
今日 GitHub Copilot CLI 连续发布了 **v1.0.20** 和 **v1.0.21** 两个重要版本，最受瞩目的更新是引入了 **`copilot mcp` 命令**，大幅简化了 MCP 服务器的管理流程。同时，社区对 **输入法/键盘兼容性**（尤其是复制粘贴功能）的反馈非常强烈，多个相关 Issue 引发了热烈讨论。

## 2. 📦 版本发布

### **v1.0.21** (2026-04-07)
本次更新主要修复了交互体验问题并增强了扩展能力：
*   **🆕 新增 `copilot mcp` 命令**：用于管理 MCP (Model Context Protocol) 服务器，提升工具链集成度。
*   **🛠️ 交互修复**：修复了长时间运行异步 Shell 命令时加载动画卡住的问题。
*   **⌨️ 登录体验优化**：企业版登录流程中的 URL 输入框现已支持回车键提交。
*   **🎨 UI 细节**：修复了斜杠命令选择器偶尔闪烁或位移的问题。

### **v1.0.20** (2026-04-07)
该版本重点增强了可观测性和后台任务处理：
*   **📊 监控增强**：新增 `copilot help monitoring` 主题，提供 OpenTelemetry 配置详情与示例。
*   **🔄 异步处理改进**：Spinner 现在会持续显示直到后台 Agent 和 Shell 命令完全结束，且期间用户输入保持可用。
*   **☁️ Azure OpenAI**：BYOK (Bring Your Own Key) 模式现在默认使用 GA versionless v1 路由。

---

## 3. 🔥 社区热点 Issues (Top 10)

以下筛选了今日最受关注的 10 个 Issue，主要集中在 **MCP 支持**、**键盘/终端交互** 和 **企业级功能** 方面。

| ID | 标题 | 状态 | 热度 (👍/💬) | 核心看点 |
| :--- | :--- | :--- | :--- | :--- |
| **#2232** | [MCP] CLI 停止加载 `.mcp.json` | **CLOSED** | 👍 11 / 💬 7 | **MCP 配置失效**：旧版本无法读取仓库根目录下的配置文件，导致工具链中断，是 MCP 用户的核心痛点。 |
| **#2344** | 终端原生复制功能失效 | **CLOSED** | 👍 7 / 💬 3 | **交互冲突**：新版本覆盖了终端原生的“选中即复制”行为，严重影响了老用户的操作习惯。 |
| **#2008** | 功能请求：自动压缩上下文 | **CLOSED** | 👍 3 / 💬 2 | **上下文管理**：长对话导致 400 错误，社区强烈希望能**在报错前自动压缩**历史记录，防止工作丢失。 |
| **#2404** | 插件安装忽略 macOS Git 凭证 | **CLOSED** | 👍 1 / 💬 2 | **认证问题**：安装私有插件时无法复用系统 Git 凭证，导致企业私有仓库安装失败。 |
| **#2218** | 复制文本包含隐藏的 BOM 字符 | **CLOSED** | 👍 2 / 💬 2 | **复制 Bug**：从 Copilot 输出中复制的命令包含不可见的 Unicode BOM 头，导致在 Shell 中执行报错 "command not found"。 |
| **#2312** | `/new` 命令后 MCP 工具不可用 | **CLOSED** | 👍 1 / 💬 1 | **会话连续性**：开启新会话后，MCP 工具（如 Jira 插件）丢失，需要重启 CLI 才能恢复。 |
| **#2107** | 请求环境变量标识 CLI 宿主 | **OPEN** | 👍 1 / 💬 1 | **开发者需求**：本地 MCP 服务器开发者希望能有稳定的环境变量来检测是否运行在 Copilot CLI 环境中。 |
| **#1444** | 空 Bash 工具调用导致死循环 | **OPEN** | 👍 0 / 💬 1 | **严重 Bug**：当模型调用 Bash 命令参数为空时，CLI 会陷入无限重试循环（高达 5000 次），导致 CPU 飙升。 |
| **#2283** | 支持 OpenAI 兼容 Base URL | **CLOSED** | 👍 1 / 💬 3 | **自定义模型**：用户希望通过 `OPENAI_BASE_URL` 将流量路由到 LiteLLM 或 Ollama 等本地模型代理。 |
| **#2246** | 支持 Warp Terminal | **CLOSED** | 👍 0 / 💬 2 | **终端兼容**：社区呼吁适配现代终端 Warp，以支持多行文本等高级特性。 |

---

## 4. 🛠️ 重要 PR 进展

过去 24 小时内有 2 个活跃的 PR，主要集中在安装体验和功能扩展上。

1.  **[#2565] install: guard against duplicate PATH entries on reinstall**
    *   **内容**：修复了重复运行安装脚本导致 PATH 环境变量被重复追加的问题。
    *   **意义**：提升了安装脚本的健壮性，避免了环境变量污染。
    *   **链接**：[github/copilot-cli PR #2565](https://github.com/github/copilot-cli/pull/2565)

2.  **[#2556] Developer skill**
    *   **内容**：提交了一个新的 "Developer skill"（开发者技能），旨在提升技能等级系统。
    *   **意义**：展示了 Copilot CLI 正在探索更复杂的技能树或 Agent 能力扩展。
    *   **链接**：[github/copilot-cli PR #2556](https://github.com/github/copilot-cli/pull/2556)

---

## 5. 📈 功能需求趋势

根据近期 Issues 的标签和内容分析，社区关注点呈现以下趋势：

1.  **MCP (Model Context Protocol) 集成深化**：
    *   随着 `copilot mcp` 命令的发布，社区对 MCP 的关注度飙升。用户不仅要求能加载 MCP，还要求**跨会话保持**（#2312）、**环境检测**（#2107）以及**配置文件加载的稳定性**（#2232）。

2.  **终端交互体验**：
    *   **键盘输入与复制粘贴**成为重灾区。用户非常在意 CLI 是否破坏了原生终端的习惯（如 #2344 的选中复制），同时也深受隐藏字符（#2218 BOM）的困扰。

3.  **上下文与记忆管理**：
    *   随着模型上下文窗口的占用增加，用户迫切需要**自动化管理**。#2008 提出的“自动压缩”反映了用户不希望手动管理历史记录，也不希望因超出限制而丢失上下文。

4.  **自定义与 BYOK (Bring Your Own Key)**：
    *   高级用户继续推动对非 GitHub 模型的支持，特别是通过 Proxy 或本地环境变量（#2283）路由请求的需求。

---

## 6. 🧐 开发者关注点 (痛点总结)

*   **“我的复制粘贴坏了吗？”**
    开发者对 CLI 内部的剪贴板管理非常敏感。任何破坏标准终端复制流程或引入不可见字符的 Bug 都会被迅速发现并视为高优先级阻碍。
*   **“别让我丢失上下文！”**
    在长编程会话中，上下文溢出导致的崩溃是不可接受的。开发者期望 CLI 能够智能地“垃圾回收”旧对话，而不是直接报错。
*   **“我要用我自己的工具”**
    无论是通过 MCP 连接 Jira，还是连接本地的 Ollama，开发者希望 CLI 成为一个开放的枢纽，而不是封闭的花园。插件安装时的凭证问题（#2404）也是阻碍企业采用的一个门槛。

---
*数据来源：github.com/github/copilot-cli | 分析师：AI Tech Analyst*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-04-08)

## 1. 今日速览
今日 Kimi Code CLI 社区活跃度较高，无新版本发布，但代码提交主要集中在**稳定性修复与生态扩展**。社区对**Hook 生命周期**和**规则系统**的讨论热烈，相关 PR 试图引入更细粒度的控制权。此外，一项激进的**Bun + TypeScript 重构计划**正在推进中，可能会彻底改变技术栈。

## 2. 版本发布
*过去 24 小时内无新版本发布。*

## 3. 社区热点 Issues (Top 10)

以下筛选了今日最具代表性的 Issues，涵盖了关键 Bug 修复、核心功能请求及架构改进：

1.  **[FEATURE] 三层规则系统提案**
    *   **链接**: [#1747](https://github.com/MoonshotAI/kimi-cli/issues/1747)
    *   **点评**: 社区强烈要求引入 Global/User/Project 三层配置规则，以便在不同项目中复用编码规范。这是对标 Claude Code 的关键功能缺失，目前已有配套 PR 提交。

2.  **[FEATURE] 生命周期 Hook 支持**
    *   **链接**: [#1772](https://github.com/MoonshotAI/kimi-cli/issues/1772)
    *   **点评**: 开发者请求增加 `sessionStart`/`End` 等 Hook，以便外部监控工具（如 vibe-islands）集成。显示出用户将 Kimi CLI 作为 Agent 核心组件嵌入更大工作流的趋势。

3.  **[BUG] UserPromptSubmit Hook 发送空 Prompt**
    *   **链接**: [#1779](https://github.com/MoonshotAI/kimi-cli/issues/1779)
    *   **点评**: 新增的 Hook 功能存在严重 Bug，Shell UI 传递的是 `ContentPart` 列表而非字符串，导致 Hook 接收到的 prompt 字段为空，急需修复。

4.  **[FEATURE] 记忆持久化与会话管理**
    *   **链接**: [#1782](https://github.com/MoonshotAI/kimi-cli/issues/1782)
    *   **点评**: 用户反馈长上下文对话难以回到原点，请求“记忆分支管理”功能，允许在特定节点保存上下文快照并恢复。

5.  **[FEATURE] 新增 /delete 命令**
    *   **链接**: [#1783](https://github.com/MoonshotAI/kimi-cli/issues/1783)
    *   **点评**: 目前缺乏 CLI 内置的 Session 清理功能，用户需手动删除文件。该需求涉及隐私安全与磁盘空间管理，实用性高。

6.  **[BUG] Streamable HTTP MCP 连接报错**
    *   **链接**: [#1785](https://github.com/MoonshotAI/kimi-cli/issues/1785)
    *   **点评**: 在 Windows 平台上，MCP (Model Context Protocol) 连接解析结构化内容时出现字段重复错误，影响工具链扩展。

7.  **[BUG] API Error 400 (Invalid request Error)**
    *   **链接**: [#1344](https://github.com/MoonshotAI/kimi-cli/issues/1344)
    *   **点评**: 这是一个长存的老问题（3月创建），涉及 API 请求格式错误，今日仍有更新，表明部分底层兼容性问题尚未彻底解决。

8.  **[BUG] @mention 文件路径错误**
    *   **链接**: [#1774](https://github.com/MoonshotAI/kimi-cli/issues/1774)
    *   **点评**: 在特定目录（如 `~`）下使用 Web 版 Kimi 时，文件引用功能失效，影响多模态交互体验。

9.  **[BUG] Error code: 400 - function name is invalid**
    *   **链接**: [#1773](https://github.com/MoonshotAI/kimi-cli/issues/1773)
    *   **点评**: 1.30.0 版本在 Linux/macOS 双平台出现 LLM Provider 错误，疑似与函数调用（Tool Call）的命名规范有关。

10. **[BUG] File mentions (@) can't find the files**
    *   **链接**: [#1375](https://github.com/MoonshotAI/kimi-cli/issues/1375)
    *   **点评**: 虽已 Closed，但该问题与今日 PR #1588 直接相关（使用 `git ls-files` 优化大仓库文件发现），值得关注修复方案的落地。

## 4. 重要 PR 进展 (Top 10)

1.  **feat: 从 Python 彻底重构为 Bun + TypeScript + React Ink**
    *   **链接**: [#1707](https://github.com/MoonshotAI/kimi-cli/pull/1707)
    *   **内容**: 这是一个极具野心的 PR，试图用 TypeScript 生态重写整个 CLI，解决 Python 在分发和性能上的痛点。目前包含 166 个文件，3.2万行代码。

2.  **feat: 三层规则系统实现**
    *   **链接**: [#1777](https://github.com/MoonshotAI/kimi-cli/pull/1777)
    *   **内容**: 对应 Issue #1747，实现了跨层级的开发规范配置系统。

3.  **feat(auth): 增加 AWS Bedrock Mantle 平台支持**
    *   **链接**: [#1784](https://github.com/MoonshotAI/kimi-cli/pull/1784)
    *   **内容**: 扩展了 `/login` 流程，支持 AWS Bedrock 的兼容 API，方便企业级用户集成私有部署。

4.  **fix: 修复 UserPromptSubmit Hook 空字符串问题**
    *   **链接**: [#1781](https://github.com/MoonshotAI/kimi-cli/pull/1781)
    *   **内容**: 针对 #1779 的热修，从 `ContentPart` 列表中正确提取文本内容传递给 Hook。

5.  **feat(hooks): 新增 PermissionRequest Hook**
    *   **链接**: [#1751](https://github.com/MoonshotAI/kimi-cli/pull/1751)
    *   **内容**: 允许在工具执行前通过外部系统（如 Webhook）进行权限审批，增强了安全性与可控性。

6.  **feat(plugin): 增加 Claude 兼容的本地插件支持**
    *   **链接**: [#1715](https://github.com/MoonshotAI/kimi-cli/pull/1715)
    *   **内容**: 允许 Kimi CLI 发现并加载本地 Claude 插件，极大丰富了工具生态。

7.  **fix: 优雅处理 MCP 连接失败**
    *   **链接**: [#1780](https://github.com/MoonshotAI/kimi-cli/pull/1780)
    *   **内容**: 修复 MCP 连接失败导致 Worker 进程崩溃的问题，防止会话卡死在 "thinking" 状态。

8.  **feat(btw): 增加边问边答命令 `/btw`**
    *   **链接**: [#1743](https://github.com/MoonshotAI/kimi-cli/pull/1743)
    *   **内容**: 允许用户在不打断主 Agent 任务的情况下快速提问，提升了交互效率。

9.  **fix(shell): 使用 git ls-files 优化大仓库文件检索**
    *   **链接**: [#1588](https://github.com/MoonshotAI/kimi-cli/pull/1588)
    *   **内容**: 解决了在包含数万文件的超大仓库中 `@` 文件提及功能失效的问题。

10. **feat(logging): 增加诊断日志与错误打包**
    *   **链接**: [#1756](https://github.com/MoonshotAI/kimi-cli/pull/1756)
    *   **内容**: 在关键路径增加日志，并在 `kimi export` 时打包日志，便于排查疑难杂症。

## 5. 功能需求趋势

*   **可扩展性与控制权**: 开发者不再满足于简单的 REPL，而是通过 **Hooks** 和 **Plugins** 将 CLI 集成到更复杂的 CI/CD 或监控流程中。
*   **上下文管理**: 随着模型上下文窗口增大，用户迫切需要**会话持久化**、**快照/回滚**以及**分层规则配置**来管理日益膨胀的开发上下文。
*   **多平台/多模型支持**: 社区正在积极推动对 **AWS Bedrock** 等企业级平台的支持，显示出 Kimi CLI 作为通用 AI Client 的潜力。

## 6. 开发者关注点

*   **Hook 机制的完善**: Hook 是今日的绝对焦点，但刚上线的功能存在数据传递 Bug (#1779)，开发者急需稳定的 Hook 接口来实现自动化工作流。
*   **底层架构的抉择**: PR #1707 提出的 **Python -> TypeScript** 迁移引发了关于性能、分发体积和生态的潜在讨论，这是项目未来的重大风向标。
*   **连接稳定性**: MCP 连接错误 (#1785) 和 API 400 错误 (#1344) 依然困扰着部分用户，网络和协议层的健壮性仍是基础体验的核心。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-04-08)

## 1. 今日速览
OpenCode 社区今日活跃度较高，重点关注**模型兼容性**与**工具链稳定性**。阿里云 Qwen 模型的频控问题引发大量讨论，同时 Gemma 4 和 vLLM 的集成故障成为开发者痛点。此外，社区正在积极推动 MCP Apps 富交互支持和 OTLP 可观测性等高级功能的落地。

## 2. 版本发布
过去 24 小时内无最新 Release 版本发布。

## 3. 社区热点 Issues

以下是今日最值得关注的 10 个 Issue，主要集中在模型报错、功能增强和系统稳定性方面：

1.  **[#21164](https://github.com/anomalyco/opencode/issues/21164) [core] Qwen 3.6 plus (free) 请求速率过快导致报错**
    *   **重要性**：热度最高（29条评论）。用户在使用阿里云 Qwen 模型时频繁遇到 `Request rate increased too quickly` 错误，导致任务中断。
    *   **社区反应**：用户急需解决方案，讨论集中在是否可以在客户端层面配置请求速率限制或退避策略。

2.  **[#8140](https://github.com/anomalyco/opencode/issues/8140) [enhancement] 可配置的上下文限制与自动压缩阈值**
    *   **重要性**：长期热门需求（35 👍）。目前自动压缩仅在上下文快满时触发，无法满足成本优化需求。
    *   **进展**：社区希望能自定义触发压缩的时机，以便更早地释放上下文空间并降低 Token 消耗。

3.  **[#12472](https://github.com/anomalyco/opencode/issues/12472) Native Claude Code hooks 兼容性**
    *   **重要性**：涉及工作流自动化（13 👍）。用户希望 OpenCode 能原生支持 Claude Code 的 Hooks 系统（`PreToolUse`, `PostToolUse` 等），以实现更精细的工具控制。

4.  **[#16851](https://github.com/anomalyco/opencode/issues/16851) [bug] ChatGPT Codex 模型报错 "gpt-5.3-codex not supported"**
    *   **重要性**：影响核心付费用户。新版本 1.2.24 中，使用 ChatGPT 账户调用 Codex 模型时出现兼容性错误，阻碍了正常开发。

5.  **[#17505](https://github.com/anomalyco/opencode/issues/17505) [core] ACP 会话更新通知时序错误**
    *   **重要性**：影响第三方客户端集成。`session/update` 在 `end_turn` 之后才到达，导致客户端 UI 显示不完整或空白。

6.  **[#21034](https://github.com/anomalyco/opencode/issues/21034) [bug] Gemma 4 (26b/31b) 工具调用死循环**
    *   **重要性**：本地模型支持问题。即便使用了最新的 LM Studio 引擎，Gemma 4 模型在 OpenCode 中仍频繁陷入工具调用循环或失败，导致不可用。

7.  **[#7926](https://github.com/anomalyco/opencode/issues/7926) [feat] TUI 中禁用鼠标捕获以兼容 tmux/Zellij**
    *   **重要性**：影响终端高级用户（15 👍）。在终端复用器中，OpenCode 的鼠标捕获阻断了原生的复制粘贴操作，用户体验受损。

8.  **[#21140](https://github.com/anomalyco/opencode/issues/21140) [FEATURE] 为 Alibaba/DashScope 错误增加自动重试机制**
    *   **重要性**：针对 Issue #21164 的解决方案提议。建议在遇到阿里云速率限制错误时，自动实现带退避算法的重试逻辑，而非直接失败。

9.  **[#21375](https://github.com/anomalyco/opencode/issues/21375) [bug] `opencode serve` 停止响应导致连接挂起**
    *   **重要性**：严重的稳定性问题。服务进程在运行一段时间后会进入假死状态，不再响应 HTTP 请求，必须重启才能恢复。

10. **[#19215](https://github.com/anomalyco/opencode/issues/19215) [FEATURE] 基于数据库的 Agent 团队协作**
    *   **重要性**：架构级功能需求。提议支持并行的子代理、消息传递和持久化记忆，以实现更复杂的任务协同。

## 4. 重要 PR 进展

今日有多个 PR 涉及新功能引入和核心 Bug 修复：

1.  **[#15926](https://github.com/anomalyco/opencode/pull/15926) feat: 增加 MCP Apps 支持 (富交互 iframe UI)**
    *   **内容**：引入 MCP Apps 协议，允许 MCP 服务器在沙箱 iframe 中渲染交互式 UI，极大扩展了前端展示能力。

2.  **[#21387](https://github.com/anomalyco/opencode/pull/21387) feat: 增加 OTLP 可观测性支持**
    *   **内容**：集成 OpenTelemetry Protocol，为 OpenCode 添加了追踪和日志标准，方便在生产环境中监控性能和排查问题。

3.  **[#21371](https://github.com/anomalyco/opencode/pull/21371) feat: 提交前自动压缩超大图片**
    *   **内容**：自动处理剪贴板或文件读取中的大图，使其符合 API（如 Anthropic 的 5MB 限制）要求，避免请求失败。

4.  **[#21370](https://github.com/anomalyco/opencode/pull/21370) fix: 保留 Assistant 消息中的推理块内容**
    *   **内容**：修复了 `normalizeMessages()` 错误地删除 Anthropic 推理块之间的空文本部分，导致签名验证失败的问题。

5.  **[#21052](https://github.com/anomalyco/opencode/pull/21052) refactor: 重构工具系统初始化逻辑**
    *   **内容**：移除工具初始化时对 Agent 上下文的依赖，简化了架构，使工具行为在不同代理间更加一致。

6.  **[#4604](https://github.com/anomalyco/opencode/pull/4604) feat: 格式化仅针对文件变更范围**
    *   **内容**：优化 `clang-format` 集成，仅格式化 Edit 工具修改的代码行，避免因格式化未修改代码而产生"噪音" diff。

7.  **[#21385](https://github.com/anomalyco/opencode/pull/21385) feat: 增加 MCP OAuth 重定向 URI 配置**
    *   **内容**：允许为 MCP 服务器配置自定义 OAuth 回调 URL，解决了复杂网络环境下的认证难题。

8.  **[#19555](https://github.com/anomalyco/opencode/pull/19555) fix: 发送前清洗图片附件**
    *   **内容**：修复了会话历史中存储的图片附件可能违反提供商限制（如尺寸、大小）导致后续请求失败的问题。

9.  **[#13854](https://github.com/anomalyco/opencode/pull/13854) fix: 修复 TUI 流式传输后表格渲染不全**
    *   **内容**：解决了 TUI 在消息流式传输结束后，误判最后一行未完成而导致表格渲染缺失的问题。

10. **[#21392](https://github.com/anomalyco/opencode/pull/21392) fix: 优雅处理无效 Skills**
    *   **内容**：增强了 TUI 的健壮性，当遇到无效的 Skill 配置时显示通用错误信息，而不是崩溃或报错。

## 5. 功能需求趋势

从今日的 Issues 和 PRs 中，可以提炼出以下核心趋势：

*   **模型兼容性与稳定性**：社区对非 OpenAI 模型（特别是 Qwen, Gemma, vLLM）的支持要求极高，痛点集中在 Rate Limit 处理和 Tool Call 的稳定性上。
*   **上下文与成本优化**：用户迫切需要更细粒度的上下文管理能力（如自动压缩阈值配置），以平衡长上下文任务的成本与性能。
*   **可观测性与调试**：开发者对系统内部状态的关注度提升（OTLP 支持、时序错误修复），表明 OpenCode 正在从单一工具向生产级平台演进。
*   **UI/UX 体验改进**：无论是 TUI 中的鼠标捕获问题，还是 Desktop App 的会话管理，用户对交互体验的吐槽较多，易用性改进迫在眉睫。

## 6. 开发者关注点

*   **API 限流处理**：开发者普遍希望 OpenCode 能内置更智能的请求重试和限流策略，以应对云服务商（如 Alibaba/DashScope）的 API 限制。
*   **本地模型工具调用**：Gemma 4 等本地模型在执行 Tool Use 时的可靠性是目前的一大痛点，开发者期待更鲁棒的兼容层。
*   **多模态输入处理**：随着 PDF 读取失败和大图片报错等问题的出现，非文本输入的稳定性和自动预处理成为关注焦点。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-04-08)

你好，我是你的 AI 开发工具技术分析师。以下是 2026 年 4 月 8 日 Qwen Code 社区的最新动态。

## 1. 今日速览
今日 Qwen Code 发布了 **v0.14.1** 及其预览版，主要针对 Hooks 系统和 CLI 的稳定性进行了修复。社区方面，VS Code 插件升级后的白屏问题引发了较多讨论（已出现修复 PR），同时开发者们对上下文管理、权限控制及多模态文件支持提出了新的需求与改进建议。

## 2. 版本发布
### v0.14.1 (及 v0.14.1-preview.0)
本次更新主要集中在稳定性修复：
- **修复 Hooks 错误处理**：清理了错误处理程序中的 abort 监听器，防止内存泄漏或逻辑错误 ([#2841](https://github.com/QwenLM/qwen-code/pull/2841))。
- **修复 CLI 逻辑**：在添加 hook 系统消息之前提交挂起的 AI 响应，确保对话状态一致性 ([#2848](https://github.com/QwenLM/qwen-code/pull/2848))。
- **链接**：[Release v0.14.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.1)

## 3. 社区热点 Issues (Top 10)
以下筛选了今日最受关注或影响较大的 Issue：

1.  **[P0 紧急] VS Code 0.14.1 白屏问题** ([#2956](https://github.com/QwenLM/qwen-code/issues/2956))
    *   **现状**：用户升级到 0.14.1 后 VS Code 插件显示白屏，无法使用。
    *   **进展**：社区反应强烈（8 条评论），目前已有 PR [#2959](https://github.com/QwenLM/qwen-code/pull/2959) 提出修复并发布 v0.14.2。
2.  **[Bug] Edit 工具无法编辑文件 (回归问题)** ([#1922](https://github.com/QwenLM/qwen-code/issues/1922))
    *   **现状**：在 v0.10.5+ 版本中，Edit 工具修改 Python 文件时调用失败。这是一个旧版本修复过的问题，但在新版复发，影响核心编码体验。
3.  **[体验] 权限请求过于频繁** ([#2906](https://github.com/QwenLM/qwen-code/issues/2906), [#2946](https://github.com/QwenLM/qwen-code/issues/2946))
    *   **现状**：用户反馈 Agent 在执行任务（尤其是调研类）时频繁弹出权限申请，打断工作流，希望能减少询问次数或具备自主完成能力。
4.  **[功能] 支持 Windows CMD 粘贴图片** ([#2605](https://github.com/QwenLM/qwen-code/issues/2605))
    *   **现状**：希望在 Windows 命令行中支持从剪贴板直接粘贴图片/文件，提升易用性。
5.  **[Bug] 严重的 AI 幻觉与代码误删** ([#93](https://github.com/QwenLM/qwen-code/issues/93), [#2867](https://github.com/QwenLM/qwen-code/issues/2867))
    *   **现状**：多位用户报告 AI 在优化代码时会删除大量非相关代码，或出现严重幻觉（看不到文件、胡写功能）。这涉及模型在 Coding 场景下的安全性与稳定性。
6.  **[功能] 支持全局配置目录** ([#2951](https://github.com/QwenLM/qwen-code/issues/2951))
    *   **现状**：建议通过环境变量自定义 `~/.qwen` 目录路径，以适应外挂磁盘或开发机的持久化存储需求。
7.  **[Bug] JetBrains 终端闪屏** ([#2903](https://github.com/QwenLM/qwen-code/issues/2903))
    *   **现状**：在 JetBrains IDE 集成终端中使用时出现莫名闪屏，影响视觉体验。
8.  **[Bug] WeChat 登录接口版本问题** ([#2882](https://github.com/QwenLM/qwen-code/issues/2882))
    *   **现状**：扫码登录后提示 "please upgrade WeChat interface version"，阻塞了部分国内用户的登录流程。
9.  **[功能] 自动保存聊天记录** ([#113](https://github.com/QwenLM/qwen-code/issues/113))
    *   **现状**：类似 Claude Code，用户希望 Qwen Code 能自动保存会话上下文，以便针对 Codebase 进行长期记忆和更好的响应。
10. **[Bug] `web_fetch` 工具失效** ([#2609](https://github.com/QwenLM/qwen-code/issues/2609))
    *   **现状**：在使用百炼 Coding Plan 时，`web_fetch` 工具返回 AI 问候语而非网页内容，导致联网调研功能不可用。

## 4. 重要 PR 进展 (Top 10)
今日社区贡献了多个高质量的修复与功能增强：

1.  **[修复] VS Code 白屏 (v0.14.2)** ([PR #2959](https://github.com/QwenLM/qwen-code/pull/2959))
    *   **内容**：修复了 esbuild 配置问题，防止 Node.js 模块错误地被打包到浏览器环境，解决了 0.14.1 版本的致命白屏 Bug。
2.  **[功能] 增强 `/review` 代码审查** ([PR #2932](https://github.com/QwenLM/qwen-code/pull/2932))
    *   **内容**：引入确定性分析、自动修复和安全加固功能，旨在对标 Copilot 和 Claude Code 的审查能力。
3.  **[功能] 自定义状态栏 `/statusline`** ([PR #2923](https://github.com/QwenLM/qwen-code/pull/2923))
    *   **内容**：允许用户配置自定义 Shell 命令，在状态栏显示上下文感知信息（如 Git 分支、当前 Token 消耗等）。
4.  **[功能] 自适应 Output Token 策略** ([PR #2898](https://github.com/QwenLM/qwen-code/pull/2898))
    *   **内容**：改变固定 32K 输出槽位策略，默认 8K，截断时自动升级到 64K，旨在提升服务端并发能力。
5.  **[功能] 新增 `/plan` 规划模式** ([PR #2921](https://github.com/QwenLM/qwen-code/pull/2921))
    *   **内容**：实现基于磁盘文件的 Plan 工作流，允许用户通过 `/plan` 命令进行结构化的任务规划。
6.  **[功能] CJK (中文) 分词优化** ([PR #2942](https://github.com/QwenLM/qwen-code/pull/2942))
    *   **内容**：优化 CLI 输入体验，使 Ctrl+Left/Right 能在中文文本中实现按词跳转，而非直接跳过整段。
7.  **[修复] Windows MSYS2 环境崩溃** ([PR #2826](https://github.com/QwenLM/qwen-code/pull/2826))
    *   **内容**：解决了在 Windows MSYS2 UCRT 环境下执行命令时的进程崩溃问题。
8.  **[修复] 微信图片 MIME 检测** ([PR #2970](https://github.com/QwenLM/qwen-code/pull/2970))
    *   **内容**：修复了微信适配器中 PNG 图片签名检测的遗漏（从 3 字节修正为 4 字节），提升图片发送成功率。
9.  **[修复] LRU 缓存逻辑错误** ([PR #2968](https://github.com/QwenLM/qwen-code/pull/2968))
    *   **内容**：修复了 `LruCache` 对 falsy 值（如 0, false）不进行 LRU 更新的问题。
10. **[功能] 新增 `/thinkback` 回顾命令** ([PR #2917](https://github.com/QwenLM/qwen-code/pull/2917))
    *   **内容**：利用 LLM 分析会话历史，生成当前会话的决策、变更和修复的时间线，帮助用户回顾 AI 做了什么。

## 5. 功能需求趋势
根据近期 Issue 分析，社区功能关注点集中在以下方向：
*   **IDE 深度集成与稳定性**：VS Code 插件的白屏和兼容性问题是最高优先级的痛点，其次是 JetBrains 终端的体验优化。
*   **权限与自主性**：用户强烈呼吁减少“请求权限”的弹窗频率，希望 Agent 能在受控范围内更自主地执行操作。
*   **多模态与文件支持**：除了代码，用户希望更方便地处理图片（剪贴板粘贴）和文档（直接读取 PDF）。
*   **上下文与记忆管理**：包括全局配置迁移、自动保存会话以及优化上下文 Token 消耗（如文件树放置位置）。

## 6. 开发者关注点
*   **稳定性回归**：Edit 工具失效等“老问题”复发让开发者感到困扰，呼唤更严格的回归测试。
*   **成本与性能**：API 报错、Token 消耗过快（尤其是 Edit 失败重试时）以及模型幻觉导致的代码误删，是影响开发效率的主要因素。
*   **环境兼容性**：对 Windows (CMD/PowerShell/MSYS2) 和各种 Linux 发行版 (CentOS 7 等) 的底层兼容性仍有待提升。

---
*数据来源：GitHub QwenLM/qwen-code (2026-04-08)*

</details>