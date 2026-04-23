# AI CLI 工具社区动态日报 2026-03-19

> 生成时间: 2026-03-18 22:05 UTC | 覆盖工具: 7 个

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

# 2026-03-19 AI CLI 工具生态横向对比分析报告

## 1. 生态全景

AI CLI 巙具已从单一的代码补全工具演变为**具备自主执行能力的智能体平台**。当前生态呈现三大特征：一是**深度系统化**，各大工具均在强化沙箱隔离（OpenAI Codex exec-server）、权限管控和并行任务隔离能力；二是**成本与上下文焦虑**，用户对 Token 消耗的敏感度达到新高，推动工具方竞相优化压缩算法和提供可视化监控；三是**多模型与多模态**，社区不再满足于单一模型绑定，动态路由、语音交互和多智能体竞技成为新战场。

## 2. 各工具活跃度对比

| 工具名称 | Issues 热度 (Top1 👍) | 今日 PR 活跃度 | 版本动态 | 核心关键词 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 🔥 极高 (522) | 高 (10+) | v2.1.78 | 生态扩展、BSOD修复、MCP Sampling |
| **OpenAI Codex** | 🔥 极高 (388) | 极高 (架构重构) | Alpha 迭代 | 安全架构、沙箱、Token消耗 |
| **Gemini CLI** | 📊 中等 (关注功能) | 极高 (10+) | 无新版 | Plan Mode、Memory、Worktree |
| **GitHub Copilot CLI** | 📊 中等 (18) | 低 (维护) | v1.0.8 | 稳定性修复、终端兼容 |
| **Kimi Code CLI** | 📊 中低 (功能性) | 高 (功能密集) | v1.24.0 | Plan Mode增强、输入交互重构 |
| **OpenCode** | 📊 中等 (23) | 高 (性能优化) | 无新版 | 内存优化、企业集成、WSL2 |
| **Qwen Code** | 🚨 高 (故障反馈) | 高 (新特性) | v0.12.6-nightly | 稳定性修复、多智能体、并发 |

> **注**：Claude Code 和 OpenAI Codex 的社区讨论基数最大，且痛点最为集中（如验证、Token）。

## 3. 共同关注的功能方向

### 🎯 核心共鸣：成本、上下文与控制权

1.  **上下文管理与 Token 可见性**
    *   **涉及工具**: Claude Code, OpenAI Codex, Qwen Code, Gemini CLI
    *   **诉求**: 开发者迫切需要知道"上下文还剩多少"。Claude Code 用户要求状态栏显示 Token 计数，Qwen Code 则通过 `/context` 命令和实时计数响应了这一需求。长会话的自动压缩策略也是所有工具优化的重点。

2.  **权限与安全的平衡**
    *   **涉及工具**: Claude Code, OpenAI Codex, Gemini CLI, OpenCode
    *   **诉求**: "自动化"与"安全性"的冲突达到顶点。OpenAI Codex 和 Claude Code 用户均抱怨新版本的审批弹窗过于频繁，打断了自动化流程。社区呼吁更细粒度的权限控制，如 OpenCode 提出的"会话级 Always Allow"。

3.  **平台兼容性**
    *   **涉及工具**: Claude Code, OpenAI Codex, OpenCode, Qwen Code
    *   **诉求**: Windows (WSL2/ARM64) 和 macOS Intel 是重灾区。Claude Code 遭遇 Windows BSOD，OpenCode 和 Copilot CLI 在 WSL2/Tmux 下均有卡顿或死锁问题。

## 4. 差异化定位分析

| 维度 | **Claude Code** | **OpenAI Codex** | **Gemini CLI** | **Others (Qwen/Kimi/OpenCode)** |
| :--- | :--- | :--- | :--- | :--- |
| **核心优势** | **生态扩展性** (Plugins, MCP) | **架构安全性** (Exec-server, Sandbox) | **Agent 智能化** (Memory, Plan Mode) | **垂直场景/性价比** |
| **技术路线** | 钩子 + 插件体系，社区驱动修复 | Rust 核心重构，RPC 隔离，强沙箱 | 原生 Git 集成，分层记忆管理 | 快速迭代，功能对标头部 |
| **当前痛点** | 账户验证流程阻塞新用户 | VS Code 扩展 Token 消耗过快 | Plan Mode 下 Agent "失忆" | 基础稳定性不足 |
| **目标用户** | 深度定制工作流的高级开发者 | 企业级安全合规需求用户 | 依赖复杂 Git 工作流的大型项目 | 追求性价比或特定模型生态的用户 |

## 5. 社区热度与成熟度

*   **成熟稳定派**: **GitHub Copilot CLI** 处于维护期，关注点在终端兼容性，功能创新较少，适合求稳的用户。
*   **活跃领跑派**: **Claude Code** 和 **OpenAI Codex** 处于激烈竞争状态。Claude 胜在插件生态和社区贡献活跃度，Codex 胜在底层架构的深度投入。
*   **激进探索派**: **Gemini CLI** 和 **Qwen Code** 正在尝试前沿功能，如 Gemini 的 Voice Mode RFC 和 Qwen 的多智能体竞技场。这些功能风险高但上限也高。
*   **追赶修复派**: **Kimi Code** 和 **OpenCode** 正在快速填补短板，前者优化交互体验，后者攻克性能瓶颈。

## 6. 值得关注的趋势信号

1.  **Agent 隔离技术成为标配**
    *   Git Worktree 被广泛应用于 Agent 并行任务隔离（Gemini CLI, Qwen Code）。这预示着未来的 CLI 工具将默认支持"多 Agent 并行开发"，彻底解决单一线性工作的阻塞问题。

2.  **从"工具"向"框架"演进**
    *   Claude Code 的 `model-router` 插件和 Qwen Code 的动态模型配置显示出，CLI 正在变成一个**模型无关的调度框架**。开发者不再关心底层模型，而是通过意图路由自动选择 Haiku（快/省）或 Opus（强/慢）。

3.  **内存与长程记忆的军备竞赛**
    *   Gemini CLI 引入 `memoryManager` 子代理，Claude Code 增加插件持久化变量。这表明单纯依赖 200k Context Window 已无法满足复杂项目需求，**RAG 增强的记忆系统**正在下沉到 CLI 层。

4.  **给开发者的建议**
    *   **稳定性优先**: 目前 Qwen Code 和 OpenAI Codex 的新版本均存在影响体验的 Bug（Edit Failed / Token 修正）。生产环境建议锁定旧版本或关注 nightly build 的社区反馈。
    *   **关注 Windows 安全**: Claude Code 的 BSOD 问题虽已有社区修复，但仍需警惕底层系统驱动的兼容性风险。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据周期**：截至 2026-03-19
**数据来源**：github.com/anthropics/skills (PRs & Issues)

---

## 1. 热门 Skills 排行 (Top 5 PRs)

当前社区 PR 多为 **功能新增型**，以下是活跃度较高且具有代表性的 Skills：

| 排名 | Skill 名称 | 状态 | 核心功能 | 社区讨论热点 |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **[PR #514] document-typography** | `OPEN` | **文档排版质量控制**。自动修复 AI 生成文档中的孤行、寡行 及编号错位问题。 | 针对性强，解决 AI 生成内容“一眼假”的排版细节痛点。 |
| 2 | **[PR #83] Meta-Skills (Quality/Security)** | `OPEN` | **Skills 元分析工具**。包含 `skill-quality-analyzer` (质量分析) 和 `skill-security-analyzer` (安全分析) 两个 marketplace 工具。 | 属于“Infrastructure Skill”，用于自检和加固其他 Skills，企业级关注度极高。 |
| 3 | **[PR #210] frontend-design improvement** | `OPEN` | **前端设计指导增强**。优化现有 skill 的指令清晰度，确保 Claude 能在一次对话中准确执行 UI 设计任务。 | 强调“可执行性” 而非理论描述，反映了社区对 Skill 实战效果的追求。 |
| 4 | **[PR #154] shodh-memory** | `OPEN` | **持久化记忆系统**。通过 `proactive_context` 机制，让 AI Agent 在跨对话中保持上下文记忆。 | 解决 Agent 遗忘问题，是实现复杂长程任务的关键底层能力。 |
| 5 | **[PR #335] masonry-generate-image-video** | `OPEN` | **多模态生成 CLI**。集成 Imagen 3.0 和 Veo 3.1，通过 Masonry CLI 实现文生图、文生视频。 | 扩展了 Claude Code 纯文本之外的交互边界，连接外部生成模型。 |

---

## 2. 社区需求趋势

基于 Issues 讨论，社区需求主要集中在 **稳定性、互操作性** 和 **安全性** 三个方面：

*   **A. 稳定性与可用性修复**
    *   **[Issue #62] Skills 消失问题**：用户报告精心编写的 Skills 突然不可见或加载失败（404），显示用户对本地/云端同步机制的可靠性感到焦虑。
    *   **[Issue #556] 评估脚本失效**：`run_eval.py` 无法触发 Skills，显示开发者在积极构建测试流程，但缺乏官方工具支持。
    *   **[Issue #406] 上传/删除 API 故障 (500)**：API 不稳定阻碍了企业级自动化部署。

*   **B. 架构互操作性**
    *   **MCP 协议集成 ([Issue #16], [Issue #369])**：强烈呼吁将 Skills 暴露为 **MCP (Model Context Protocol)** 工具，以实现与更广泛的 AI 生态互操作，而非仅在 Claude Code 内闭环。
    *   **兼容 AWS Bedrock ([Issue #29])**：企业用户希望 Skills 能适配 AWS Bedrock 等云托管环境。

*   **C. 安全与信任边界**
    *   **[Issue #492] 命名空间安全风险**：社区警告第三方 Skills 使用 `anthropic/` 前缀可能导致用户误以为是官方安全内容而授予权限，呼吁建立清晰的信任机制。
    *   **[Issue #412] Agent Governance**：提出针对 AI Agent 系统的策略执行、威胁检测和审计追踪需求。

*   **D. 开发体验 (DX) 优化**
    *   **[Issue #202] skill-creator 重构**：指出当前的 skill-creator 过于像“教科书”而非“执行脚本”，且 Token 消耗大，急需精简和最佳实践化。

---

## 3. 高潜力待合并 Skills (High-Potential Open PRs)

以下 PRs 解决了核心痛点且讨论活跃，可能在近期被合并：

1.  **[PR #361] YAML Parser Fix** (by @Mr-Neutr0n)
    *   **功能**：在 `quick_validate.py` 中增加预检查，防止 YAML 描述中的特殊字符（如 `:`, `#`）导致解析错误。
    *   **价值**：解决了开发中常见的“ silent misparse ”（静默误解析）Bug，属于关键的开发工具链修复。
    *   **状态**：`OPEN`，技术讨论具体，合并阻力小。

2.  **[PR #535] avoid-ai-writing** (by @conorbronsdon)
    *   **功能**：审计并重写内容，移除“AI 味” (AI-isms)，包含 21 种模式检测和 43 个词汇替换表。
    *   **价值**：直接提升生成内容的人性化程度，与 #514 (Typography) 一起构成了“高质量内容生成”的双翼。
    *   **状态**：`OPEN`，近期 (03-13) 有更新。

---

## 4. Skills 生态洞察

> **“社区正从‘功能堆砌’转向‘工程化治理’：不仅要能做事，更要求技能是 可靠的、标准化的、且具备自我审计能力的。”**

*核心诉求解读*：
早期的关注点在于“让 Claude 会做什么（如生成视频、写 SAP）”，现在的焦点转移到了 **Skill 的全生命周期管理**——如何写出一个规范的 Skill (`skill-creator` 改进)、如何确保其安全 (`security-analyzer`)、如何保证其输出质量 (`typography`, `avoid-ai-writing`) 以及如何与其他系统互操作 (`MCP`)。

---

# Claude Code 社区动态日报
**日期**: 2026-03-19 | **数据来源**: github.com/anthropics/claude-code

---

## 1. 今日速览

Claude Code 发布 **v2.1.78**，新增 `StopFailure` 钩子事件和插件持久化数据变量，同时引入了受保护目录的安全提示机制。社区围绕 **MCP Sampling 成本优化** 和 **插件生态扩展** 展开热烈讨论，Windows 平台的 BSOD 严重问题收到社区修复 PR。

---

## 2. 版本发布

### v2.1.78
**主要更新：**
- **新增 `StopFailure` 钩子事件** - 当对话因 API 错误（速率限制、认证失败等）终止时触发
- **新增 `${CLAUDE_PLUGIN_DATA}` 变量** - 支持插件持久化状态存储，更新后数据不丢失；`/plugin uninstall` 现在会在删除前提示确认
- **新增 `effort` 参数支持**（Release note 截断，具体用途待确认）

🔗 [查看 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.78)

---

## 3. 社区热点 Issues

| # | 标题 | 热度 | 重要性解读 |
|---|------|------|------------|
| **#34229** | [BUG] Phone verification | 👍 522 / 💬 456 | **账户验证痛点**：手机验证问题持续发酵，是社区反馈最多的 issue，影响新用户注册流程。 |
| **#1785** | [Feature] Support for MCP Sampling | 👍 92 / 💬 46 | **成本优化核心需求**：用户希望通过 MCP Sampling 复用 Claude Max 订阅以降低 API 成本，长期悬而未决。 |
| **#10238** | [Feature] Add subdirectories in skills | 👍 106 / 💬 20 | **Skills 组织能力**：社区需要支持子目录来管理复杂的 skills 结构，高票功能请求。 |
| **#32479** | [BUG] GitHub Connector not recognized | 👍 37 / 💬 31 | **MCP 集成问题**：GitHub Connector 在 Desktop 中连接成功但未被识别，阻碍工作流。 |
| **#28571** | [BUG] Remote control session resync failure | 👍 30 / 💬 11 | **远程控制稳定性**：iOS 与本地会话断连后无法重新同步，影响移动办公体验。 |
| **#35950** | [BUG] Web UI fails to connect to Desktop | 👍 0 / 💬 2 | **跨端协作问题**：Web UI 创建的会话无法连接本地 Desktop 执行工具，新暴露的问题。 |
| **#35942** | [Feature] Skip protected directory prompts | 👍 0 / 💬 2 | **v2.1.78 回归**：新版本在 `bypassPermissions` 模式下仍对 `.git/` 等目录弹窗提示，用户认为不合理。 |
| **#30806** | [Feature] Expose model/effort to plugins | 👍 2 / 💬 1 | **插件能力扩展**：希望插件能动态设置模型和 effort 级别，支持意图路由工作流。 |
| **#35963** | [Feature] Expose token count in status line | 👍 0 / 💬 1 | **上下文可见性**：长会话中缺乏 token 消耗/上下文占用率的实时显示，影响 compact 决策。 |
| **#35710** | [PR] Fix Windows BSOD (Wof.sys) | - | **严重平台问题**：Windows 上并行文件枚举可触发蓝屏死机，社区已提交修复 PR。 |

---

## 4. 重要 PR 进展

| PR | 标题 | 状态 | 功能/修复内容 |
|----|------|------|---------------|
| **#35960** | feat: Add model-router plugin | 🟢 Open | 智能模型路由插件，使用 Haiku 分类提示词并推荐合适的模型（如 Opus 4.6），响应 [#30806](https://github.com/anthropics/claude-code/issues/30806)。 |
| **#35710** | fix: Add tool-mutex plugin (Windows BSOD) | 🟢 Open | **关键修复**：添加互斥锁限制并行 fs 调用，防止 Windows Wof.sys 驱动导致的蓝屏死机。 |
| **#11713** | feat: Add developer-utilities plugin | 🟢 Open | 开发者工具集：`/clean` 清理缓存、`/validate-commands` 验证斜杠命令等 8 个实用命令。 |
| **#35864** | Add worktree-guardian plugin | 🟢 Open | 检测孤立的 agent worktrees 中未保存的工作，防止数据丢失，提供 `/worktree-audit` 命令。 |
| **#35683** | Add scroll-fix plugin | 🟢 Open | 修复终端滚动到顶部的回归问题（全平台），通过拦截 ANSI 转义序列实现。 |
| **#35761** | Add powershell-default plugin | 🟢 Open | 将 Bash 工具的默认 shell 替换为 PowerShell 7+ Preview，支持跨平台。 |
| **#35684** | Add bridge-fix plugin | 🟢 Open | 修复 Chrome 扩展桥接连接失败问题，面向 Max 订阅用户。 |
| **#35168** | Add Etudes plugin | 🟢 Open | Sprint 教练插件：访谈用户项目模式，生成 3-5 天的冲刺计划和每日 check-in。 |
| **#15806** | fix: UTF-8 safe string slicing | 🔴 Closed | 修复韩语/CJK 多字节文本处理导致的 Rust panic 崩溃。 |
| **#34798** | Root cause: terminal scroll-to-top | 🔴 Closed | Windows Terminal 滚动问题的根因分析，提供 Ctrl+6 冻结/解冻方案。 |

---

## 5. 功能需求趋势

```
📊 社区关注度分布
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
成本优化    ████████████░░░░  MCP Sampling、订阅复用
插件生态    ██████████░░░░░░  模型路由、持久化数据、权限控制
IDE 集成    ████████░░░░░░░░  VSCode 权限重复、链接打开位置
远程控制    ██████░░░░░░░░░░  会话同步、移动端连接稳定性
平台兼容    █████░░░░░░░░░░░  Windows BSOD、WSL 警告、macOS 登录
上下文管理  ████░░░░░░░░░░░░  Token 可见性、自动命名、compact
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**核心趋势：**
1. **成本控制** - MCP Sampling 支持是长期高票需求
2. **插件能力扩展** - 模型/effort 暴露、持久化存储、生命周期钩子
3. **跨端协作** - Web UI ↔ Desktop ↔ Mobile 会话同步问题频发

---

## 6. 开发者关注点

### 🚨 高频痛点
| 类别 | 问题描述 |
|------|----------|
| **账户验证** | 手机验证流程问题持续影响用户（522 👍） |
| **Windows 稳定性** | 并行文件操作触发系统级崩溃（BSOD） |
| **权限交互** | `bypassPermissions` 模式下仍频繁弹窗，影响自动化流程 |
| **远程控制** | 断连后无指示、无法重新同步，移动端体验受损 |

### 💡 高价值需求
| 需求 | 场景 |
|------|------|
| **Token 可见性** | 长会话中判断何时 compact/handoff |
| **意图路由** | 根据任务复杂度自动选择模型（Haiku vs Opus） |
| **Skills 子目录** | 组织大型项目的复杂 skills 结构 |
| **Worktree 保护** | 防止孤立的 agent 工作树被误删 |

---

**📌 提示**: v2.1.78 引入的受保护目录提示可能影响自动化脚本，建议关注 [#35942](https://github.com/anthropics/claude-code/issues/35942) 进展。Windows 用户可关注 [#35710](https://github.com/anthropics/claude-code/pull/35710) 的 tool-mutex 插件以规避 BSOD 风险。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-03-19)

## 1. 今日速览
OpenAI Codex 团队今日在底层架构上进行了重大重构，推出了 **exec-server** 以增强沙箱隔离和文件系统安全性，并着手完善 **Plugin（插件）** 系统的功能门控。社区方面，**VS Code 扩展的 Token 消耗过快** 以及 **macOS Intel 版本支持** 仍然是用户讨论最激烈的热点问题，而新出现的沙箱权限“退化”问题也引发了开发者的广泛关注。

## 2. 版本发布
过去 24 小时内发布了多个 **Rust Core (v0.116.0)** 的 Alpha 迭代版本（alpha.4 至 alpha.8）。虽然官方 Release Note 较简略，但结合 PR 动态来看，这些版本正在密集测试新的执行服务器架构和沙箱机制。

*   **[rust-v0.116.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.116.0-alpha.8)**
*   **[rust-v0.116.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.116.0-alpha.6)**

---

## 3. 社区热点 Issues (Top 10)

以下筛选了最具代表性或高热度的 Issue，涵盖用户体验、平台兼容性和核心功能缺陷：

1.  **[Consumption] VS Code 扩展更新后 Token 消耗依然过快 (#14593)**
    *   **热度:** 👍 55 | 💬 117
    *   **点评:** 这是目前最活跃的 Bug。用户反馈即使在最新版扩展中，Token 燃烧速度依然异常快，严重影响付费用户的使用体验。
    *   **链接:** [openai/codex Issue #14593](https://github.com/openai/codex/issues/14593)

2.  **[Platform] 请求 Codex Desktop App 支持 macOS Intel (x86_64) (#10410)**
    *   **热度:** 👍 186 | 💬 134
    *   **点评:** 拥有最高点赞数的 Feature Request。大量 Intel Mac 用户尚未被新桌面端覆盖，社区对 Universal Build 的呼声极高。
    *   **链接:** [openai/codex Issue #10410](https://github.com/openai/codex/issues/10410)

3.  **[Agent] CLI 出现 401 Unauthorized 认证错误 (#12764)**
    *   **热度:** 👍 4 | 💬 80
    *   **点评:** 影响 Windows 和部分 Agent 调用的严重阻断性问题，涉及 `chatgpt.com` 后端 API 鉴权，导致 CLI 无法正常连接。
    *   **链接:** [openai/codex Issue #12764](https://github.com/openai/codex/issues/12764)

4.  **[Feature] 请求 Codex Desktop 支持远程开发 (#10450)**
    *   **热度:** 👍 388 | 💬 56
    *   **点评:** 随着 Desktop App 的发布，用户迫切需要像 VS Code Remote SSH 那样的远程连接能力，以便在服务器环境下使用本地 UI。
    *   **链接:** [openai/codex Issue #10450](https://github.com/openai/codex/issues/10450)

5.  **[Sandbox/Regression] CLI 0.115.0 强制弹出批准提示，忽略配置 (#14936)**
    *   **热度:** 👍 9 | 💬 14
    *   **点评:** 这是一个严重的**体验倒退**。用户反馈升级后，即便勾选了 "don't ask again"，CLI 仍会对几乎所有命令弹出批准请求，打断了自动化流程。
    *   **链接:** [openai/codex Issue #14936](https://github.com/openai/codex/issues/14936)

6.  **[Feature] CLI 集成 LSP (语言服务器协议) (#8745)**
    *   **热度:** 👍 188 | 💬 36
    *   **点评:** 排名第二的功能请求。社区希望 CLI 能自动检测并安装 LSP，从而获得类似 IDE 的代码补全和诊断能力，而不仅仅是文本生成。
    *   **链接:** [openai/codex Issue #8745](https://github.com/openai/codex/issues/8745)

7.  **[Stability] Desktop App 重连问题加剧（欧洲区尤甚）(#14209)**
    *   **热度:** 👍 16 | 💬 43
    *   **点评:** 网络连接稳定性问题，影响特定地区用户的持续使用，是 Desktop App 当前的痛点。
    *   **链接:** [openai/codex Issue #14209](https://github.com/openai/codex/issues/14209)

8.  **[Sandbox] Windows 沙箱设置错误 (#10601)**
    *   **热度:** 👍 7 | 💬 26
    *   **点评:** Windows 平台特有的环境配置问题，阻碍了部分开发者的初次使用。
    *   **链接:** [openai/codex Issue #10601](https://github.com/openai/codex/issues/10601)

9.  **[Memory Leak] macOS GUI 产生大量僵尸进程导致内存泄漏 (#12491)**
    *   **热度:** 👍 3 | 💬 8
    *   **点评:** 严重的技术债。MCP 子进程在任务完成后未被回收，导致产生 1300+ 僵尸进程和 37GB 内存占用。
    *   **链接:** [openai/codex Issue #12491](https://github.com/openai/codex/issues/12491)

10. **[Context] 动态加载嵌套的 AGENTS.md (#12115)**
    *   **热度:** 👍 20 | 💬 6
    *   **点评:** 进阶功能需求。用户希望 Agent 能像人类一样，进入子目录时自动加载该目录下的上下文配置，而非一次性加载所有。
    *   **链接:** [openai/codex Issue #12115](https://github.com/openai/codex/issues/12115)

---

## 4. 重要 PR 进展 (Top 10)

今日 PR 活动主要集中在**安全性重构**、**插件系统**以及**多语言支持**：

1.  **[Arch] Add exec-server stub server and protocol docs (#15089)**
    *   **内容:** 开启了 "exec-server" 架构重构的第一步，将执行逻辑和文件系统访问通过 RPC 隔离，旨在提升沙箱安全性。
    *   **链接:** [openai/codex PR #15089](https://github.com/openai/codex/pull/15089)

2.  **[Security] core: add a sandbox-backed filesystem helper (#14989)**
    *   **内容:** 修复了 `view_image` 等功能可能绕过沙箱限制的安全隐患，强制所有文件读取通过沙箱机制进行。
    *   **链接:** [openai/codex PR #14989](https://github.com/openai/codex/pull/14989)

3.  **[Plugin] Support featured plugins (#15042)**
    *   **内容:** 为 Codex 引入“精选插件”支持，预示着插件市场即将上线或完善。
    *   **链接:** [openai/codex PR #15042](https://github.com/openai/codex/pull/15042)

4.  **[Fix] Revert "fix: harden plugin feature gating" (#15102) & Re-submit (#15104)**
    *   **内容:** 开发团队正在紧急修复插件功能门控的逻辑错误，经历了回滚和重新提交，显示团队正在密集调整发布策略。
    *   **链接:** [openai/codex PR #15104](https://github.com/openai/codex/pull/15104)

5.  **[Stability] app-server: Reap orphaned idle threads (#14997)**
    *   **内容:** 专门解决 Issue #12491 提到的内存泄漏问题，通过在 WebSocket 断开时清理孤儿线程来防止进程泄漏。
    *   **链接:** [openai/codex PR #14997](https://github.com/openai/codex/pull/14997)

6.  **[i18n] Add i18n scaffolding (#15101)**
    *   **内容:** 建立了国际化脚手架，意味着 Codex 即将支持多语言界面（首先应用于提示消息）。
    *   **链接:** [openai/codex PR #15101](https://github.com/openai/codex/pull/15101)

7.  **[UX] Simple directory mentions (#14970)**
    *   **内容:** 改进 TUI（终端界面），允许直接通过拖拽或提及目录来让 Codex 关注整个文件夹。
    *   **链接:** [openai/codex PR #14970](https://github.com/openai/codex/pull/14970)

8.  **[State] Feat: reuse persisted model on thread resume (#14888)**
    *   **内容:** 改进会话恢复逻辑。当你恢复一个之前的对话时，它会自动保持当时使用的模型设置，而不是重置为默认。
    *   **链接:** [openai/codex PR #14888](https://github.com/openai/codex/pull/14888)

9.  **[Tools] feature: add granular builtin tool enablement (#14525)**
    *   **内容:** 允许用户在配置中更精细地控制内置工具的开启与关闭（如文件操作、网络请求等）。
    *   **链接:** [openai/codex PR #14525](https://github.com/openai/codex/pull/14545)

10. **[Sandbox] chore: add zsh-fork support to macOS sandbox (#15031)**
    *   **内容:** 修复 macOS 上 zsh 环境下的沙箱调试和执行拦截问题，对 macOS 稳定性至关重要。
    *   **链接:** [openai/codex PR #15031](https://github.com/openai/codex/pull/15031)

---

## 5. 功能需求趋势

根据近期 Issue 标签和讨论内容，社区关注焦点集中在以下方向：

*   **平台广度:** 用户强烈要求 **macOS Intel** 支持以及 **Linux/Windows 远程开发** 能力。
*   **智能上下文:** 开发者希望 Agent 更聪明，能够 **动态加载子目录配置 (AGENTS.md)** 和集成 **LSP** 以获得代码感知能力。
*   **成本控制:** **Token 消耗速度** 和 **Rate Limits (速率限制)** 依然是付费用户最敏感的神经。
*   **企业级安全:** 关于 **Sandbox (沙箱)** 的细粒度控制、网络访问权限以及目录信任设置的需求在增加。

## 6. 开发者关注点 (痛点)

*   **Sandbox "Regression" (沙箱倒退):** 许多高级开发者反馈新版本 CLI 变得“过于保守”，频繁中断操作请求批准，破坏了编码心流。如何平衡安全性与易用性是当前最大痛点。
*   **连接稳定性:** 无论是在 Europe 的 Desktop App 用户，还是使用 VS Code 扩展的用户，都报告了断连和流中断问题 (`stream disconnected`)。
*   **资源泄漏:** Desktop App 的重度用户遇到了严重的内存泄漏问题，这限制了长时间运行 Agent 的可能性。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-03-19)

你好，我是你的 AI 技术分析师。以下是基于 GitHub 数据生成的 Gemini CLI 社区动态日报。

## 1. 今日速览
Gemini CLI 今日处于高频开发迭代状态，虽然无新版本 Release，但社区围绕 **Agent 智能化**（Memory 子系统、Worktree 隔离）和 **Plan Mode 稳定性**提交了大量修复与特性 PR。核心团队正在重点解决 Agent 在 Plan 模式下的“失忆”与执行死锁问题，同时致力于通过 Git Worktree 实现 Agent 的并行作业隔离。

## 2. 版本发布
过去 24 小时内**无**新版发布。

## 3. 社区热点 Issues (Top 10)

以下 Issues 反映了当前社区最关心的功能改进与 Bug 修复：

1.  **[RFC] 免提多模态语音模式架构** `#21869`
    *   **热度**: 💬 11
    *   **解读**: 社区提议将 Gemini CLI 升级为实时语音交互的编程助手。这是一个高优先级的架构提案，旨在实现“动手不动口”的编码体验。
    *   **链接**: [google-gemini/gemini-cli Issue #21869](https://github.com/google-gemini/gemini-cli/issues/21869)

2.  **Agent 批准 `/plan` 后“失魂”** `#22266`
    *   **热度**: 💬 6 | 🚨 P1/P2
    *   **解读**: 严重流程 Bug。用户批准计划后，Agent 丢失上下文直接挂起，无法进入执行阶段。这直接影响 Plan Mode 的可用性。
    *   **链接**: [google-gemini/gemini-cli Issue #22266](https://github.com/google-gemini/gemini-cli/issues/22266)

3.  **AST 感知文件读取与映射评估** `#22745`
    *   **热度**: 💬 4
    *   **解读**: 核心架构优化。探讨引入 AST（抽象语法树）感知能力，以减少 Token 消耗并提高代码修改的精确度，是提升 Agent 智能化的关键一步。
    *   **链接**: [google-gemini/gemini-cli Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

4.  **Plan Mode 仍执行代码修改** `#22434`
    *   **热度**: 💬 4
    *   **解读**: 安全性问题。Plan Mode 本应只读，但 Agent 却执行了写入操作。这破坏了用户对“安全预览”的信任。
    *   **链接**: [google-gemini/gemini-cli Issue #22434](https://github.com/google-gemini/gemini-cli/issues/22745)

5.  **Agent 未能充分利用 Skills 和 Sub-agents** `#21968`
    *   **热度**: 💬 4
    *   **解读**: 用户反馈 Agent 倾向于单打独斗，很少主动调用定义好的 Gradle 或 Git Skills。这反映了 Agent 调度策略需要调优。
    *   **链接**: [google-gemini/gemini-cli Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

6.  **Git Worktree 与 Subagents 的集成** `#22967`
    *   **热度**: 💬 3
    *   **解读**: 请求支持利用 Git Worktree 实现并行子代理隔离，避免多个 Agent 同时操作同一分支导致的冲突。
    *   **链接**: [google-gemini/gemini-cli Issue #22967](https://github.com/google-gemini/gemini-cli/issues/22967)

7.  **VS Code 终端自动回滚问题** `#22028`
    *   **热度**: 💬 3 | 👍 1
    *   **解读**: UI/UX 问题。在 VS Code 中点击终端时，CLI 总是自动滚动到顶部，严重影响体验。
    *   **链接**: [google-gemini/gemini-cli Issue #22028](https://github.com/google-gemini/gemini-cli/issues/22028)

8.  **支持向 `/plan` 直接传递 Prompt** `#22855`
    *   **热度**: 👍 2
    *   **解读**: 效率改进。用户希望 `/plan "refactor auth"` 这样一步生成计划，而不是先进入模式再输入。
    *   **链接**: [google-gemini/gemini-cli Issue #22855](https://github.com/google-gemini/gemini-cli/issues/22855)

9.  **Browser Subagent 在 Wayland 下失败** `#21983`
    *   **热度**: 💬 3 | 🚨 P1
    *   **解读**: Linux 桌面环境兼容性问题，导致浏览器自动化子代理无法运行。
    *   **链接**: [google-gemini/gemini-cli Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

10. **Memory 路由机制：Global vs Project** `#22819`
    *   **热度**: 👍 1
    *   **解读**: 涉及 Agent 记忆系统的底层设计。讨论 Agent 应如何区分“用户全局偏好”（如 commit 风格）和“项目特定上下文”（如项目架构）。
    *   **链接**: [google-gemini/gemini-cli Issue #22819](https://github.com/google-gemini/gemini-cli/issues/22819)

## 4. 重要 PR 进展 (Top 10)

1.  **新增实验性 Memory Manager Agent** `#22726`
    *   **内容**: 用 `memoryManager` 子代理替换旧版 `save_memory` 工具，支持去重、分类和全局/项目级记忆管理。
    *   **意义**: Agent 长期记忆能力的重大升级。
    *   **链接**: [google-gemini/gemini-cli PR #22726](https://github.com/google-gemini/gemini-cli/pull/22726)

2.  **Plan Mode 状态转换修复** `#23020`
    *   **内容**: 解决 Agent 从 Plan Mode 切换到执行模式时冻结的问题，添加“状态转换覆盖”指令。
    *   **意义**: 修复 Issue #22266 的关键补丁。
    *   **链接**: [google-gemini/gemini-cli PR #23020](https://github.com/google-gemini/gemini-cli/pull/23020)

3.  **Git Worktree 并行会话支持** `#22973`
    *   **内容**: 引入 `WorktreeService`，允许在不同分支上并行运行隔离的 Gemini 会话。
    *   **意义**: 解决并行开发场景下的文件冲突痛点。
    *   **链接**: [google-gemini/gemini-cli PR #22973](https://github.com/google-gemini/gemini-cli/pull/22973)

4.  **支持 `/plan` 命令后接文本** `#22833`
    *   **内容**: 实现了 `/plan [text]` 功能，一步触发规划。
    *   **意义**: 显著提升操作流畅度。
    *   **链接**: [google-gemini/gemini-cli PR #22833](https://github.com/google-gemini/gemini-cli/pull/22833)

5.  **Plan Mode 路径沙箱化** `#22737`
    *   **内容**: 限制 Plan Mode 只能访问特定的 `plansDir`，防止 LLM 产生路径幻觉。
    *   **意义**: 增强安全性与稳定性。
    *   **链接**: [google-gemini/gemini-cli PR #22737](https://github.com/google-gemini/gemini-cli/pull/22737)

6.  **子代理工具拒绝的弹性处理** `#22951`
    *   **内容**: 允许子代理在工具被用户拒绝后“重新思考”策略，而不是直接崩溃终止。
    *   **意义**: 提升 Agent 的容错性和交互自然度。
    *   **链接**: [google-gemini/gemini-cli PR #22951](https://github.com/google-gemini/gemini-cli/pull/22951)

7.  **动态模型配置支持 (ModelChain)** `#22914`
    *   **内容**: 重构模型配置服务，支持动态切换模型链。
    *   **意义**: 为未来支持更复杂的模型编排打下基础。
    *   **链接**: [google-gemini/gemini-cli PR #22914](https://github.com/google-gemini/gemini-cli/pull/22914)

8.  **原生 Windows 沙箱实现** `#21807`
    *   **内容**: 使用 Restricted Tokens 和 MIC 实现原生 Windows 隔离。
    *   **意义**: 补齐了 Windows 平台的安全短板。
    *   **链接**: [google-gemini/gemini-cli PR #21807](https://github.com/google-gemini/gemini-cli/pull/21807)

9.  **循环检测导致的崩溃修复** `#20108`
    *   **内容**: 修复了循环检测服务触发 `AbortError` 导致整个 Node 进程崩溃的问题。
    *   **意义**: 解决了严重的稳定性问题（Help Wanted）。
    *   **链接**: [google-gemini/gemini-cli PR #20108](https://github.com/google-gemini/gemini-cli/pull/20108)

10. **v0.35.0-preview.1 更新日志** `#23012`
    *   **内容**: 新版本文档准备。
    *   **意义**: 预示着包含上述大量修复的新版本即将发布。
    *   **链接**: [google-gemini/gemini-cli PR #23012](https://github.com/google-gemini/gemini-cli/pull/23012)

## 5. 功能需求趋势

从近期 Issues 和 PRs 来看，社区需求主要集中在以下方向：

*   **Agent 记忆与上下文管理**: 大量关于 Memory Subsystem 的设计（Global vs Project routing, GEMINI.md 结构），表明用户迫切希望 Agent 能“记住”偏好和项目细节。
*   **并行与隔离**: `Worktree` 集成和并行 Session 的需求激增，显示用户正在将 Gemini CLI 用于更复杂的多任务开发流程。
*   **Plan Mode 的健壮性**: Plan Mode 是目前的重构重点，需求集中在“只读安全保证”、“防冻结”和“便捷调用”上。
*   **多模态交互**: 关于 Voice Mode 的 RFC 显示用户希望超越文本交互，寻求更自然的控制方式。

## 6. 开发者关注点

*   **稳定性痛点**: Agent 在执行复杂任务（如 Browser Subagent）或特定环境（Wayland, VS Code）下的崩溃和 UI 故障是主要槽点。
*   **控制权与安全**: 开发者非常在意 Agent 的权限边界（如防止 Plan Mode 乱改代码、阻止破坏性 Git 操作）。
*   **智能化不足**: 反馈 Agent 不够主动（不调用 Skills）或容易陷入死循环，期待更聪明的调度策略。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

你好！我是专注于 AI 开发工具的技术分析师。根据你提供的 `github/copilot-cli` 2026-03-19 的数据，我为你整理了今日的社区动态日报。

---

# GitHub Copilot CLI 社区动态日报 (2026-03-19)

## 1. 今日速览
GitHub Copilot CLI 今日发布了 **v1.0.8** 正式版，重点优化了终端兼容性（修复了 tmux/SSH 下的颜色显示问题）并默认开启备用屏幕缓冲区以提升体验。社区方面，关于**长任务中的滚动失控**以及**v1.0.6 引入的 React Hooks 渲染错误**成为讨论热点，部分用户反馈新版本在特定环境下存在 API 连接及界面截断问题。

## 2. 版本发布
**Release v1.0.8** (发布于 2026-03-18)
*   **终端体验优化**：
    *   修复了在非真彩色终端（如 tmux, SSH, screen）下 Agent 模式标签和边框颜色显示不正确的问题。
    *   默认启用备用屏幕缓冲区，提供更清爽的终端交互体验。
    *   修复了扩展子进程加入会话时退出计划模式工具仍可用的问题。
*   **扩展与配置增强**：
    *   新增 `extension mode` 设置以控制扩展性。
    *   支持通过实验性功能标志 `MCP_ALLOWLIST` 验证 MCP 服务器。
    *   `--resume` 命令现在支持接受任务 ID（Task ID），不仅仅是会话 ID。
    *   支持在 `settings.json` 和 `settings.local.js` 中定义 Hooks。

🔗 [查看 Release v1.0.8 详情](https://github.com/github/copilot-cli/releases/tag/v1.0.8)

---

## 3. 社区热点 Issues (Top 10)

以下筛选了当前最受关注或影响较大的 Issues：

1.  **[高优先级] 长时间运行操作中的疯狂滚动问题 (#1584)**
    *   **影响**：在进行长时间操作时，CLI 会 uncontrollably 滚动终端，严重影响用户体验。
    *   **热度**：👍 16 | 评论：11
    *   **链接**：[Issue #1584](https://github.com/github/copilot-cli/issues/1584)

2.  **[企业版] 授权验证失败 (#1897)**
    *   **影响**：拥有 Copilot Pro 且已启用 CLI 的用户遇到 "You are not authorized" 错误，阻断使用。
    *   **热度**：评论：10
    *   **链接**：[Issue #1897](https://github.com/github/copilot-cli/issues/1897)

3.  **[功能性] 请求全局 Hooks 配置支持 (#1157)**
    *   **痛点**：目前 Hooks 必须在每个仓库单独配置，用户希望支持全局配置以统一工作流（类似 Claude Code/Cursor）。
    *   **热度**：👍 16 | 评论：4
    *   **链接**：[Issue #1157](https://github.com/github/copilot-cli/issues/1157)

4.  **[安全性] macOS Gatekeeper 阻止运行 (#970)**
    *   **影响**：通过 Homebrew 升级后，Copilot CLI 经常被 macOS 安全策略拦截，需手动放行。
    *   **热度**：👍 18 | 评论：3
    *   **链接**：[Issue #970](https://github.com/github/copilot-cli/issues/970)

5.  **[回归缺陷] v1.0.6 中的 React Hooks 渲染错误 (#2117)**
    *   **影响**：最新版本中偶发 "Rendered more hooks than during the previous render" 错误导致 CLI 崩溃。
    *   **热度**：👍 2 | 评论：5
    *   **链接**：[Issue #2117](https://github.com/github/copilot-cli/issues/2117)

6.  **[兼容性] Nix/direnv 环境下死锁挂起 (#1838)**
    *   **影响**：在特定开发环境下启动后挂起，无法执行命令。
    *   **热度**：👍 5 | 评论：5
    *   **链接**：[Issue #1838](https://github.com/github/copilot-cli/issues/1838)

7.  **[UI/UX] 问题文本在 v1.0.6 后被截断 (#2090)**
    *   **影响**：CLI 在规划模式下提出的问题在终端边缘被截断，无法看清完整内容。
    *   **热度**：👍 5 | 评论：1
    *   **链接**：[Issue #2090](https://github.com/github/copilot-cli/issues/2090)

8.  **[模型支持] 自定义 Agent 无法使用指定的 Claude 模型 (#2099)**
    *   **影响**：用户配置的 Claude Sonnet 4.5/4.6 模型被提示不可用，强制回退到当前模型。
    *   **热度**：👍 1 | 评论：5
    *   **链接**：[Issue #2099](https://github.com/github/copilot-cli/issues/2099)

9.  **[功能性] 子代理应能使用 Skills (#839)**
    *   **需求**：主 Agent 生成的子代理目前无法访问 `.github/skill` 下的技能文件。
    *   **热度**：评论：6
    *   **链接**：[Issue #839](https://github.com/github/copilot-cli/issues/839)

10. **[稳定性] API 瞬态错误导致频繁重试与限流 (#2101)**
    *   **影响**：用户遇到大量 API 重试错误，并迅速触发了速率限制。
    *   **热度**：👍 1 | 评论：4
    *   **链接**：[Issue #2101](https://github.com/github/copilot-cli/issues/2101)

---

## 4. 重要 PR 进展

*过去 24 小时内 PR 更新较少，仅有一条非功能性更新。*

*   **#1850 Create blank.yml**
    *   **内容**：由社区成员提交，主要是添加了一个空白的工作流文件，可能用于仓库维护或测试。
    *   **状态**：Open
    *   **链接**：[PR #1850](https://github.com/github/copilot-cli/pull/1850)

---

## 5. 功能需求趋势

根据今日的 Issue 讨论，社区功能需求集中在以下几个方面：

*   **模型灵活性与自定义**：用户强烈希望能够无限制地指定自定义模型（如 Claude Sonnet 4.5/4.6）以及配置自定义 API Base URL (#104, #2099)，不仅限于 GitHub 提供的默认模型。
*   **自动化与 Hooks 增强**：对全局 Hooks 配置的呼声很高 (#1157)，用户希望在不同项目间复用自动化脚本，而不必重复配置。
*   **多 Agent 协作能力**：开发者正在探索复杂的 Agent 架构，需求包括让子 Agent 继承主 Agent 的 Skills (#839) 以及查看子 Agent 所使用的模型信息 (#2104)。
*   **MCP (Model Context Protocol) 生态**：出现了关于 MCP 服务器白名单验证及特定服务（如 Power BI）集成的讨论，显示用户正尝试将 CLI 接入更广泛的数据源 (#1965)。

---

## 6. 开发者关注点与痛点

1.  **稳定性与回归问题**：自 v1.0.6 起，前端渲染层似乎变得不稳定，出现了诸如 Hooks 错误 (#2117) 和 UI 截断 (#2090) 的问题，影响了日常开发的信心。
2.  **终端环境兼容性**：虽然 v1.0.8 修复了颜色问题，但在非标准环境（如 Nix/direnv, WSL, 特定版本的 tmux/SSH）下的死锁、输入输出错误和复制粘贴问题依然是高频痛点 (#1838, #1918, #2143)。
3.  **企业级验证与权限**：授权问题 (#1897) 依然是部分企业用户的主要阻碍，显示出权限验证逻辑可能存在边缘情况或缓存问题。
4.  **性能与资源占用**：有报告指出在并行运行后台 Agent 时会导致 OOM 或崩溃 (#2132)，表明 CLI 在处理高负载并发任务时的资源管理仍需优化。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

这里是 **2026-03-19 Kimi Code CLI 社区动态日报**。

---

### 1. 今日速览
Kimi Code CLI 今日发布了 **v1.24.0** 正式版，带来了重磅的 **Plan Mode（规划模式）增强**，支持 AI 提出多种执行方案供用户选择，并重构了提示词路由架构以支持运行时持久化输入。同时，社区贡献者 @n-WN 成功优化了 Windows 上的启动速度，解决了长期存在的性能痛点。

### 2. 版本发布
- **[v1.24.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.24.0)**
    - **核心更新**：
        - **Plan Mode 增强**：`StrReplaceFile` 工具现可在规划模式下直接编辑计划文件；退出规划模式时支持多选项选择，允许用户在批准前选择不同的执行路径。
        - **交互体验升级**：重构为统一的提示路由器，实现了 Agent 运行期间的持久化输入支持，用户可在运行中随时输入，不再阻塞。
        - **UI 细节**：调整了剪贴板文本粘贴的折叠策略，将阈值提升至 15 行或 1000 字符，减少了过度折叠带来的困扰。
        - **性能优化**：针对 Windows 平台的启动路径进行了精简，延迟加载重型模块。

### 3. 社区热点 Issues (Top 10)
以下是过去 24 小时内最值得关注的社区讨论：

1.  **[OPEN] [性能] Windows 启动慢分析 (#1343)**
    *   **链接**: [MoonshotAI/kimi-cli Issue #1343](https://github.com/MoonshotAI/kimi-cli/issues/1343)
    *   **点评**: 该 Issue 详细分析了 Windows 上 `encodings.aliases` 和 `loguru` 导致的启动延迟（~800ms）。随着今日 PR #1486 的合并，预计此问题将在下个版本得到显著改善。
2.  **[OPEN] [体验] CLI 动画卡顿与状态不清 (#1493)**
    *   **链接**: [MoonshotAI/kimi-cli Issue #1493](https://github.com/MoonshotAI/kimi-cli/issues/1493)
    *   **点评**: 用户反馈运行时动画停止转动，难以区分是程序卡死还是正在运行。这在耗时较长的任务中非常影响体验，需关注 UI 线程与执行线程的协调。
3.  **[CLOSED] [交互] 文本粘贴折叠过于激进 (#1489)**
    *   **链接**: [MoonshotAI/kimi-cli Issue #1489](https://github.com/MoonshotAI/kimi-cli/issues/1489)
    *   **点评**: 用户抱怨粘贴的文本被过快折叠。该 Issue 已通过今日发布的 v1.24.0 解决（提升了折叠阈值）。
4.  **[OPEN] [功能] 计划文件保存路径配置 (#1495)**
    *   **链接**: [MoonshotAI/kimi-cli Issue #1495](https://github.com/MoonshotAI/kimi-cli/issues/1495)
    *   **点评**: 随着规划模式的流行，用户希望能够自定义生成计划的存储路径（如 `.kimi/plans`），而非默认的临时目录，以便于版本管理。
5.  **[OPEN] [功能] 命令长度可配置化 (#1492)**
    *   **链接**: [MoonshotAI/kimi-cli Issue #1492](https://github.com/MoonshotAI/kimi-cli/issues/1492)
    *   **点评**: 开发者希望控制 Shell 命令的显示长度或禁用折叠，以便在日志中完整看到执行的命令细节。
6.  **[OPEN] [Bug] MCP 断连间歇性错误 (#1296)**
    *   **链接**: [MoonshotAI/kimi-cli Issue #1296](https://github.com/MoonshotAI/kimi-cli/issues/1296)
    *   **点评**: 这是一个遗留问题，涉及 MCP 连接的稳定性，仍有用户在不同版本中复现。
7.  **[OPEN] [Bug] HTTPS MCP 缺少 User-Agent (#1487)**
    *   **链接**: [MoonshotAI/kimi-cli Issue #1487](https://github.com/MoonshotAI/kimi-cli/issues/1487)
    *   **点评**: 用户在使用自定义 MCP 服务时遇到协议头限制问题，需要客户端添加标准的 User-Agent。
8.  **[OPEN] [商务] 开票功能咨询 (#1442)**
    *   **链接**: [MoonshotAI/kimi-cli Issue #1442](https://github.com/MoonshotAI/kimi-cli/issues/1442)
    *   **点评**: 尽管是工具库，仍有企业用户询问通过 CLI 使用 Kimi Code 服务的发票开具渠道，反映了企业级采用的增加。
9.  **[OPEN] [依赖] Ruff 版本更新 (#884)**
    *   **链接**: [MoonshotAI/kimi-cli Issue #884](https://github.com/MoonshotAI/kimi-cli/issues/884)
    *   **点评**: Dependabot 提出的依赖升级，虽未合并但保持活跃，关注代码规范工具链的更新。
10. **[OPEN] [测试] Token 统计相关测试失败 (#1485)**
    *   **链接**: [MoonshotAI/kimi-cli PR #1485](https://github.com/MoonshotAI/kimi-cli/pull/1485)
    *   **点评**: 社区尝试修复 Token 统计功能的测试用例，反映了近期对 Token 消耗统计准确性的关注。

### 4. 重要 PR 进展 (Top 10)
今日核心开发主要集中在交互重构与性能优化：

1.  **[MERGED] feat: Plan Mode 多选项支持 (#1494)**
    *   **链接**: [MoonshotAI/kimi-cli PR #1494](https://github.com/MoonshotAI/kimi-cli/pull/1494)
    *   **内容**: 重大功能更新。允许 AI 在退出规划模式时提供多种执行方案，用户不再是简单的 Yes/No，而是可以选择具体的实施路径。
2.  **[MERGED] feat: 统一提示路由与持久化输入 (#1491)**
    *   **链接**: [MoonshotAI/kimi-cli PR #1491](https://github.com/MoonshotAI/kimi-cli/pull/1491)
    *   **内容**: 架构重构。移除了旧的双提示架构，实现了在 Agent 运行循环中保持用户输入状态，极大提升了中途干预的流畅度。
3.  **[MERGED] perf: 优化启动路径与 MCP 加载 (#1486)**
    *   **链接**: [MoonshotAI/kimi-cli PR #1486](https://github.com/MoonshotAI/kimi-cli/pull/1486)
    *   **内容**: 解决了 Windows 启动慢的问题。通过延迟加载 Logger 和 CLI 子命令，显著减少了启动耗时。
4.  **[MERGED] feat: Plan Mode 文件编辑支持 (#1490)**
    *   **链接**: [MoonshotAI/kimi-cli PR #1490](https://github.com/MoonshotAI/kimi-cli/pull/1490)
    *   **内容**: 允许在 Plan Mode 中使用 `StrReplaceFile` 编辑计划文件，使得规划过程更加闭环和自动化。
5.  **[MERGED] refactor: 调整文本折叠阈值 (#1488)**
    *   **链接**: [MoonshotAI/kimi-cli PR #1488](https://github.com/MoonshotAI/kimi-cli/pull/1488)
    *   **内容**: 将折叠阈值从 3 行/300 字符提升至 15 行/1000 字符，直接响应了 Issue #1489 的反馈。
6.  **[MERGED] chore: 发布 v1.24.0 (#1496)**
    *   **链接**: [MoonshotAI/kimi-cli PR #1496](https://github.com/MoonshotAI/kimi-cli/pull/1496)
    *   **内容**: 版本号更新及 CHANGELOG 同步。
7.  **[OPEN] fix: Token 统计测试修复 (#1485)**
    *   **链接**: [MoonshotAI/kimi-cli PR #1485](https://github.com/MoonshotAI/kimi-cli/pull/1485)
    *   **内容**: 社区贡献者修复了与 Token 统计和状态栏显示相关的测试失败及 Lint 错误。
8.  **[OPEN] chore: 升级 Ruff 至 0.15.0 (#884)**
    *   **链接**: [MoonshotAI/kimi-cli PR #884](https://github.com/MoonshotAI/kimi-cli/pull/884)
    *   **内容**: 自动化依赖升级 PR，等待 CI 通过与合并。

*(注：今日活跃 PR 较少，其余多为文档更新或小范围重构)*

### 5. 功能需求趋势
-   **Plan Mode 深度定制**: 社区不再满足于简单的 "规划-执行"，开始要求更高的灵活性，如自定义计划保存路径、多方案选择等。
-   **交互透明度与控制权**: 用户希望对 CLI 的内部状态有更清晰的感知（如解决动画卡顿疑惑），并能更细粒度地控制显示逻辑（如命令折叠长度）。
-   **跨平台性能一致性**: Windows 平台的体验（尤其是启动速度）成为关注焦点，优化需求迫切。

### 6. 开发者关注点
-   **运行时状态反馈**: 开发者对 "CLI 是否卡死" 表示担忧，这表明当前的 TUI (Terminal UI) 反馈机制在重负载下可能存在渲染阻塞问题。
-   **长文本/命令处理**: 在 Coding 场景下，长命令和长文本粘贴非常频繁，默认的折叠策略正在阻碍开发效率，用户倾向于看到完整内容。
-   **MCP 生态兼容性**: 随着对 MCP (Model Context Protocol) 的使用加深，网络配置（如 HTTPS Headers）和连接稳定性成为集成中的常见障碍。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-03-19)

## 1. 今日速览
OpenCode 社区今日活跃度显著，主要集中在**性能优化**与**跨平台兼容性**两大方向。最引人注目的是核心贡献者提交的 PR 旨在大幅降低提示阶段的内存占用（从 4-8GB 降至 ~1.2GB），以及针对长期困扰 WSL2 用户的 TUI 冻结问题进行了深入排查。此外，Desktop 版本的功能完善（如 GitLab 支持、截图导出）也在稳步推进。

## 2. 版本发布
过去 24 小时内**无**新的正式版本发布。

## 3. 社区热点 Issues
以下 10 个 Issue 反映了当前社区最关注的问题：

1.  **[#3936] Github Enterprise 授权失败** `热度: 👍15 | 评论: 57`
    *   **原因**: 企业用户无法登录 Github Enterprise，严重影响企业端采用。
    *   **进展**: 这是一个长期遗留问题，目前已有配套 PR (#18103) 正在尝试修复多步认证流程。
    *   [查看详情](https://github.com/anomalyco/opencode/issues/3936)

2.  **[#8598] Copilot 特定模型（Codex/Raptor）不可用** `热度: 👍8 | 评论: 46`
    *   **原因**: 最新更新导致部分 Copilot 高级模型报错 "feature needs to be enabled"，阻碍了依赖最新模型的开发者。
    *   [查看详情](https://github.com/anomalyco/opencode/issues/8598)

3.  **[#4340] 请求支持 Windows ARM64** `热度: 👍23 | 评论: 35`
    *   **原因**: 随着 ARM 架构 PC 普及，缺乏原生 ARM64 支持导致 WinGet/Chocolatey 安装失败，用户呼声极高。
    *   [查看详情](https://github.com/anomalyco/opencode/issues/4340)

4.  **[#4659] 长上下文会话的滑动窗口管理** `热度: 👍18 | 评论: 22`
    *   **原因**: 提出了一种改进的上下文压缩策略，旨在解决当前“截断”导致的信息丢失问题，属于核心架构层面的深度讨论。
    *   [查看详情](https://github.com/anomalyco/opencode/issues/4659)

5.  **[#5220] Glob 搜索导致 CPU 100% 占用** `热度: 👍12 | 评论: 22`
    *   **原因**: 文件搜索触发的 Glob/RG 进程导致系统严重卡顿，直接影响基础使用体验。
    *   [查看详情](https://github.com/anomalyco/opencode/issues/5220)

6.  **[#8484] WSL2 环境下 TUI 输入卡顿/冻结** `热度: 👍13 | 评论: 10`
    *   **原因**: 在 WSL2 + TMUX 环境下输入提示词时出现明显的延迟和冻结，是 Windows 用户的常见痛点。
    *   [查看详情](https://github.com/anomalyco/opencode/issues/8484)

7.  **[#3743] 特定模型陷入死循环** `热度: 👍9 | 评论: 19`
    *   **原因**: 使用 Kimi、GLM 等部分模型时，Agent 会重复调用工具无法停止，影响工具稳定性。
    *   [查看详情](https://github.com/anomalyco/opencode/issues/3743)

8.  **[#17796] TUI 鼠标选择复制失效** `热度: 👍0 | 评论: 11`
    *   **原因**: 近期版本回归 Bug，鼠标选中文本后无法复制到剪贴板，影响基本交互效率。
    *   [查看详情](https://github.com/anomalyco/opencode/issues/17796)

9.  **[#16218] 模型生成回复后陷入无限重复** `热度: 👍0 | 评论: 6`
    *   **原因**: 模型生成正确答案后不停止，而是持续重复输出，消耗 Token 且体验极差。
    *   [查看详情](https://github.com/anomalyco/opencode/issues/16218)

10. **[#15338] MiniMax M2.5 端点缓存命中率极低** `热度: 👍0 | 评论: 5`
    *   **原因**: 涉及 OpenCode Zen 服务的成本控制问题，缓存机制未正常工作导致费用异常增加。
    *   [查看详情](https://github.com/anomalyco/opencode/issues/15338)

## 4. 重要 PR 进展
今日共有多个高质量 PR 提交，重点关注性能与架构重构：

1.  **[#18137] 大幅降低提示阶段的内存占用** `类型: Bug fix/Refactor`
    *   **内容**: 通过“惰性压缩边界扫描”和“上下文窗口化”优化，将提示期间的 RSS 峰值内存从 4-8GB 降至约 1.2GB，显著改善大规模项目体验。
    *   [查看 PR](https://github.com/anomalyco/opencode/pull/18137)

2.  **[#18014] 集成 GitLab Agent Platform** `类型: New Feature`
    *   **内容**: 新增对 GitLab Agent 平台的支持，并包含动态工作流模型发现功能，扩展了 OpenCode 的企业级 DevOps 生态。
    *   [查看 PR](https://github.com/anomalyco/opencode/pull/18014)

3.  **[#18103] 集成多步认证流程 (Github Enterprise 修复)** `类型: New Feature`
    *   **内容**: 配合 Issue #3936，在 Desktop 应用中集成复杂的多步认证流程，有望解决长期存在的 GHE 登录问题。
    *   [查看 PR](https://github.com/anomalyco/opencode/pull/18103)

4.  **[#18138] 引入 AppFileSystem 服务** `类型: Refactor`
    *   **内容**: 重构文件系统层，封装了 Effect 的 FileSystem，提供更健壮的 `isDir`, `readJson`, `globMatch` 等工具方法，为后续功能打下基础。
    *   [查看 PR](https://github.com/anomalyco/opencode/pull/18138)

5.  **[#12633] 新增权限请求的“自动接受”模式** `类型: New Feature`
    *   **内容**: 在 TUI 中添加可切换的 `autoedit` 模式（Shift+Tab），自动批准编辑权限请求，减少重复操作，提升流畅度。
    *   [查看 PR](https://github.com/anomalyco/opencode/pull/12633)

6.  **[#16227] Git 仓库克隆对话框** `类型: New Feature`
    *   **内容**: 允许用户直接在 Desktop 应用内克隆仓库，无需跳转到命令行或浏览器，提升新手引导体验。
    *   [查看 PR](https://github.com/anomalyco/opencode/pull/16227)

7.  **[#18142] 会话截图导出功能** `类型: New Feature`
    *   **内容**: 支持将当前会话导出为截图，方便分享和存档。
    *   [查看 PR](https://github.com/anomalyco/opencode/pull/18142)

8.  **[#17995] 增加 ReScript LSP 支持** `类型: New Feature`
    *   **内容**: 为 `.res` 和 `.resi` 文件添加语言服务器支持，扩展了 OpenCode 的语言生态。
    *   [查看 PR](https://github.com/anomalyco/opencode/pull/17995)

9.  **[#18126] 显示具体的配置验证错误** `类型: Bug fix`
    *   **内容**: 修复了之前配置文件报错信息模糊的问题，现在会打印详细的验证错误信息，帮助用户快速定位配置问题。
    *   [查看 PR](https://github.com/anomalyco/opencode/pull/18126)

10. **[#13854] 修复消息完成后仍渲染“流式”状态的问题** `类型: Bug fix`
    *   **内容**: 修复了 TUI 中已完成消息因被误判为流式传输而渲染不完整（如表格最后一行缺失）的问题。
    *   [查看 PR](https://github.com/anomalyco/opencode/pull/13854)

## 5. 功能需求趋势
基于近期 Issues 和 PRs 分析，社区关注点集中在以下方向：
*   **跨平台兼容性**: **Windows (WSL2/ARM64)** 相关的 Issue 占据了热点榜半壁江山，包括 TUI 冻结、CPU 占用过高及 ARM 架构支持缺失。
*   **性能优化**: 尤其是内存管理和上下文窗口策略。用户对长时间运行会话的内存泄漏和上下文截断逻辑非常敏感。
*   **企业级集成**: 对 **Github Enterprise** 和 **GitLab** 的支持需求强烈，不仅是登录，还包括工作流模型的发现与集成。
*   **多模态/第三方模型稳定性**: 用户频繁报告使用非默认模型（如 Copilot 特定版本、MiniMax、GLM）时出现的死循环、缓存失效或功能受限问题。

## 6. 开发者关注点
*   **WSL2 环境下的性能瓶颈**: 开发者反馈在 WSL2 中使用 OpenCode 时，不仅面临 TUI 卡顿，还存在 Node.js JIT 与 WSL 内核兼容性导致的崩溃（如 Issue #18132 涉及 SIGILL 错误）。
*   **Context Window 管理**: 开发者对当前的上下文压缩策略不满意，呼吁引入更高级的“滑动窗口”机制，以保留更多早期关键上下文。
*   **权限管理的粒度**: Issue #18023 指出当前的权限 "Always" 设置是全局的，开发者希望改为“会话级别”，以防止在不同项目中误操作。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-03-19)

## 1. 今日速览
Qwen Code 今日发布了 **v0.12.6-nightly** 及 TypeScript SDK v0.1.6，重点修复了 VS Code 插件稳定性及上下文压缩问题。社区对 **v0.12.x 版本的稳定性**反响强烈，大量用户反馈“编辑失败”和“VS Code 扩展无法启动”严重影响了开发体验。同时，针对 **多智能体竞技场** 和 **并发任务执行** 的功能合并成为今日代码库的亮点。

---

## 2. 版本发布
*   **v0.12.6-nightly.20260318**: 最新夜间构建版本，包含最新的 bug 修复。
    *   [查看 Changelog](https://github.com/QwenLM/qwen-code/compare/v0.12.6...v0.12.6-nightly.20260318.ac30c98a2)
*   **SDK TypeScript v0.1.6-preview.0**: 捆绑了 CLI 0.13.0 版本，修复了之前发布工作流的失败问题。
    *   [查看 Release](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.6-preview.0)

---

## 3. 社区热点 Issues (Top 10)

1.  **[严重故障] CLI 与插件频发“Edit Failed”导致代码损坏**
    *   **链接**: [#2460](https://github.com/QwenLM/qwen-code/issues/2460)
    *   **详情**: 用户报告 v0.12.x 版本在进行代码编辑时频繁报错 `Failed to edit, 0 occurrences found`，甚至导致代码被错误地通过 node/ps 修改，造成项目损坏。
    *   **重要性**: 核心功能不可用，严重影响用户信任度。

2.  **[高优] VS Code 扩展无法启动 (Preparing Qwen Code... 卡死)**
    *   **链接**: [#2382](https://github.com/QwenLM/qwen-code/issues/2382)
    *   **详情**: 自 v0.12.2 升级后，大量用户遇到扩展初始化挂起问题，降级 VS Code 版本无效。
    *   **重要性**: 阻断了 IDE 用户的使用入口。

3.  **[功能请求] 多智能体竞技场**
    *   **链接**: [#1814](https://github.com/QwenLM/qwen-code/issues/1814)
    *   **详情**: 提议让多个 AI 模型同时执行相同任务，用户可对比结果并选择最佳方案。
    *   **重要性**: 社区高度期待的高级功能（👍 2），今日相关 PR (#1912) 已有进展。

4.  **[体验问题] 免费额度缩水争议**
    *   **链接**: [#2426](https:///QwenLM/qwen-code/issues/2426)
    *   **详情**: 用户反馈免费请求次数从宣传的 1000 次大幅缩水至约 300 次。
    *   **重要性**: 涉及用户权益和产品信誉。

5.  **[Bug] 执行命令授权时程序崩溃**
    *   **链接**: [#2306](https://github.com/QwenLM/qwen-code/issues/2306)
    *   **详情**: 在 CLI 中选择 "always allow" 执行命令时，程序直接 Crash 退出。回归问题，v0.11.1 未出现。

6.  **[功能请求] 对齐 Claude Code 的 Subagent 系统**
    *   **链接**: [#2409](https://github.com/QwenLM/qwen-code/issues/2409)
    *   **详情**: 希望完善 Subagent 功能，目前完成度约为 40-45%。

7.  **[Bug] 上下文满载执行 /compress 后报 Internal Error**
    *   **链接**: [#2459](https://github.com/QwenLM/qwen-code/issues/2459)
    *   **详情**: 当上下文使用率达 100% 时，压缩指令失效并报错，导致会话不可用。已有 PR (#2464) 修复。

8.  **[Bug] Qwen 3.5 Plus 模型输出中英文混合空格导致工具失效**
    *   **链接**: [#2456](https://github.com/QwenLM/qwen-code/issues/2456)
    *   **详情**: 模型在 Shell 命令的路径中错误地添加空格（如 `git 手册/git.md`），导致无法执行。

9.  **[Bug] LSP 配置文件 .lsp.json 被忽略**
    *   **链接**: [#1873](https://github.com/QwenLM/qwen-code/issues/1873)
    *   **详情**: 实验性 LSP 功能未读取用户配置，导致 C/C++ 符号查找失败。

10. **[Bug] CLI 在 Windows PowerShell 下无法识别 `qwen` 命令**
    *   **链接**: [#2429](https://github.com/QwenLM/qwen-code/issues/2429)
    *   **详情**: Windows 环境下安装后命令行工具无法运行。

---

## 4. 重要 PR 进展 (Top 10)

1.  **[feat] Agent Arena：多模型竞技模式**
    *   **链接**: [#1912](https://github.com/QwenLM/qwen-code/pull/1912)
    *   **内容**: 允许通过 Git worktree 隔离环境，并行运行多个模型执行同一任务，支持结果对比与合并。今日已 Close（预计已合并或完成审查）。

2.  **[feat] 任务工具并发执行**
    *   **链接**: [#2434](https://github.com/QwenLM/qwen-code/pull/2434)
    *   **内容**: 修改核心逻辑，允许 Task 类工具（subagent）并发运行，显著提升独立任务的执行效率。

3.  **[fix] 修复 `/compress` 压缩失败后的死锁问题**
    *   **链接**: [#2464](https://github.com/QwenLM/qwen-code/pull/2464)
    *   **内容**: 修复了 Issue #2459，确保在压缩失败时能正确重置状态，防止后续 API 调用全部报错。

4.  **[feat] 实时 Token 用量显示**
    *   **链接**: [#2445](https://github.com/QwenLM/qwen-code/pull/2445)
    *   **内容**: 在 Loading 指示器中增加实时 Output Token 计数，解决了 Issue #2013 的需求。

5.  **[feat] 新增 `/context` 命令**
    *   **链接**: [#1835](https://github.com/QwenLM/qwen-code/pull/1835)
    *   **内容**: 可视化展示上下文窗口的 Token 占用分布（进度条形式），方便用户管理上下文。

6.  **[refactor] 改进错误处理与配额检测**
    *   **链接**: [#2458](https://github.com/QwenLM/qwen-code/pull/2458)
    *   **内容**: 优化了 Qwen 配额超限（429）的检测逻辑，精确区分免费配额耗尽与其他错误。

7.  **[feat] VS Code 文件补全支持模糊搜索**
    *   **链接**: [#2437](https://github.com/QwenLM/qwen-code/pull/2437)
    *   **内容**: 将 VS Code 插件的文件搜索逻辑重构为后端模糊搜索，提升大型 workspace 的性能。

8.  **[feat] 新增 `qwen auth` 认证命令**
    *   **链接**: [#2440](https://github.com/QwenLM/qwen-code/pull/2440)
    *   **内容**: 简化认证流程，提供专门的 CLI 命令用于配置 OAuth 和阿里云 Coding Plan。

9.  **[fix] 修复 Windows 路径下的 URI 处理错误**
    *   **链接**: [#2457](https://github.com/QwenLM/qwen-code/pull/2457)
    *   **内容**: 修复了 DiffManager 在 Windows 环境下因路径格式错误导致无法显示 Diff 的问题。

10. **[feat] 增加 Skills 可见性控制**
    *   **链接**: [#2255](https://github.com/QwenLM/qwen-code/pull/2255)
    *   **内容**: 允许通过配置限制 Session 中可用的 Skills，提升安全性和合规性。

---

## 5. 功能需求趋势
*   **稳定性回退**: 大量 Issue 表明 v0.12.x 引入了回归问题，社区强烈呼吁修复基础的编辑和连接稳定性。
*   **多智能体协作**: "Agent Arena" 和 "Agent Team" 相关的 Issue 和 PR 活跃度极高，显示出 Qwen Code 正向更复杂的多智能体协作平台演进。
*   **上下文可视化**: 用户对 Token 消耗和上下文占用的透明度有明确需求，`/context` 命令和实时显示功能正合时宜。
*   **IDE 深度集成**: VS Code 插件的模糊搜索、Tab 键行为优化、图片粘贴支持表明 IDE 端体验正在大幅打磨。

## 6. 开发者关注点
*   **Edit 工具的可靠性**: "Failed to edit" 是目前最大的痛点，开发者在使用 Qwen Code 修改现有项目时面临极高的破坏风险。
*   **模型行为一致性**: 无论是 MiniMax 的 ContextSize 错误配置，还是 Qwen 3.5 Plus 输出多余空格，都反映出非官方模型适配的兼容性问题。
*   **MCP 协议现代化**: 开发者反馈目前的 MCP 客户端不支持 Streamable HTTP Transport，限制了部分高级 MCP Server 的连接。

</details>