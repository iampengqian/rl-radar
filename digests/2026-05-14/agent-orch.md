# Agent 编排生态日报 2026-05-14

> 生成时间: 2026-05-13 22:23 UTC | 覆盖项目: 45 个

- [Claude Squad](https://github.com/smtg-ai/claude-squad)
- [Crystal](https://github.com/stravu/crystal)
- [dmux](https://github.com/standardagents/dmux)
- [Symphony](https://github.com/openai/symphony)
- [Claude Code Bridge](https://github.com/bfly123/claude_code_bridge)
- [Dorothy](https://github.com/Charlie85270/Dorothy)
- [Jean](https://github.com/coollabsio/jean)
- [OpenKanban](https://github.com/TechDufus/openkanban)
- [Claude Flow](https://github.com/ruvnet/claude-flow)
- [Kodo](https://github.com/ikamensh/kodo)
- [ORCH](https://github.com/oxgeneral/ORCH)
- [GNAP](https://github.com/farol-team/gnap)
- [Swarm Protocol](https://github.com/phuryn/swarm-protocol)
- [Vibe Kanban](https://github.com/BloopAI/vibe-kanban)
- [OpenFang](https://github.com/RightNow-AI/openfang)
- [Aperant](https://github.com/AndyMik90/Aperant)
- [Gastown](https://github.com/gastownhall/gastown)
- [HumanLayer](https://github.com/humanlayer/humanlayer)
- [Ralph Claude Code](https://github.com/frankbria/ralph-claude-code)
- [Superset](https://github.com/superset-sh/superset)
- [T3Code](https://github.com/pingdotgg/t3code)
- [Agent Orchestrator](https://github.com/ComposioHQ/agent-orchestrator)
- [1Code](https://github.com/21st-dev/1code)
- [ClawTeam](https://github.com/HKUDS/ClawTeam)
- [Emdash](https://github.com/generalaction/emdash)
- [Collaborator](https://github.com/collaborator-ai/collab-public)
- [Agent Deck](https://github.com/asheshgoplani/agent-deck)
- [Mux Desktop](https://github.com/coder/mux)
- [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)
- [MetaGPT](https://github.com/FoundationAgents/MetaGPT)
- [AutoGen](https://github.com/microsoft/autogen)
- [GPT-Engineer](https://github.com/AntonOsika/gpt-engineer)
- [LlamaIndex](https://github.com/run-llama/llama_index)
- [CrewAI](https://github.com/crewAIInc/crewAI)
- [Agno](https://github.com/agno-agi/agno)
- [Ruflo](https://github.com/ruvnet/ruflo)
- [LangGraph](https://github.com/langchain-ai/langgraph)
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel)
- [SmolAgents](https://github.com/huggingface/smolagents)
- [Haystack](https://github.com/deepset-ai/haystack)
- [BabyAGI](https://github.com/yoheinakajima/babyagi)
- [OpenAI Swarm](https://github.com/openai/swarm)
- [OpenAI Agents](https://github.com/openai/openai-agents-python)
- [DeepAgents](https://github.com/langchain-ai/deepagents)
- [PydanticAI](https://github.com/pydantic/pydantic-ai)

---

## 横向对比分析

## 生态全景
AI Agent 编排生态在过去 24 小时内呈现出显著的分层演化特征。以 PydanticAI、Agno、AutoGPT 和 LangGraph 为代表的头部框架正带领生态跨越“单一 LLM API 封装”阶段，全面向企业级的高可用调度、异构模型兼容和标准安全防护网演进。同时，以 Superset、Agent Deck、Gastown 和 dmux 为代表的终端本地调度器（TUI/桌面端）正在快速崛起，填补多 CLI Agent 进程级并发调度的空白。整体而言，生态的重心已从“单点功能突破”转向对“长期记忆、沙箱隔离、复杂状态机控制及跨平台兼容”等深水区工程痛点的攻坚。

## 各项目活跃度对比
*注：以下仅筛选过去 24 小时有实质性 Issue/PR 更新的项目。其余如 GPT-Engineer、OpenAI Swarm、Dorothy 等 15 个项目均无活动，已合并至本表底部。*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **Gastown** | 41 | 29 | 0 | v1.0 发布后处于除错高峰期，深水区架构问题（数据库路由/进程死锁）集中爆发 |
| **Agent Orchestrator** | 37 | 18 | 2 | 疯狂扩展多 Agent 插件生态，横向兼容性大增，主攻生命周期状态机修复 |
| **PydanticAI** | 34 | 45 | 2 | V2 架构重构密集期，底层 API 进行大规模破坏性变更，对齐 MCP 与持久化能力 |
| **Agno** | 13 | 36 | 0 | 高吞吐量开源飞轮，单日解决多项企业级安全漏洞（SQL注入/SSRF）及异步架构改造 |
| **Agent Deck** | 13 | 22 | 2 | TUI 渲染与多 Agent 支持快速迭代，攻坚 tmux 底层并发竞态问题 |
| **AutoGPT** | 5 | 30 | 1 | SaaS 商业化闭环加固（补齐 Paywall 漏洞），打磨本地化零配置接入 |
| **T3Code** | 13 | 21 | 3 | 高频夜间构建，核心突破在会话状态机容错与主机电源调度策略 |
| **DeepAgents** | 16 | 20 | 1 | CLI 与 Code SDK 彻底解耦，着力修复流式数据同步与子 Agent 并发状态丢失 |
| **Claude Flow / Ruflo** | 18 | 14 | 1 | Alpha 版本高频除错，集中解决底层记忆存储（向量检索）与跨平台持久化难题 |
| **CrewAI** | 10 | 22 | 0 | 向企业级防护演进，发力安全治理层与异构向量存储基建 |
| **Emdash** | 2 | 25 | 0 | 高度活跃，围绕多 Provider 后端和 Git 工作流进行大范围特性增强与 UI 优化 |
| **LangGraph** | 4 | 12 | 0 | 聚焦流式架构重构 RFC 与底层 HITL (人机交互) 状态流转的 Edge Case 修复 |
| **OpenAI Agents** | 2 | 23 | 0 | 完善底层运行时健壮性（深突变/空值兜底），深度对齐 Realtime 和 MCP 协议 |
| **Mux Desktop** | 0 | 13 | 1 | 实验性引入多模态工具链，突破性实现异步 Bash 唤醒与软重置上下文隔离 |
| **AutoGen** | 4 | 8 | 0 | 探索 A2A 经济系统与加密审计，强化组聊生命周期消息异步获取 |
| **LlamaIndex** | 4 | 17 | 0 | 深度适配第三方模型（DeepSeek/vLLM/Bedrock）的差异化入参和 CoT 解析 |
| **dmux** | 5 | 3 | 2 | 专注终端本地多 Worktree 编排，完善国际化与子代码库支持 |
| **Haystack** | 2 | 8 | 0 | 优化底层 LLM 客户端架构以支持企业级动态 Token 轮换 |
| **Semantic Kernel** | 2 | 8 | 0 | 聚焦 MCP 协议死锁修复与多语言底层的反序列化/分词逻辑调优 |
| **MetaGPT** | 2 | 6 | 0 | 曝出高危反序列化 RCE 和命令注入漏洞，当前代码维护以文档修复为主 |
| **SmolAgents** | 2 | 3 | 0 | 死磕本地 Python 沙箱安全，彻底封堵字符串格式化导致的逃逸漏洞 |
| **OpenFang** | 2 | 2 | 0 | 引入细粒度单 Agent 文件沙箱策略，深化多模态落盘架构适配 |
| **Jean** | 0 | 2 | 1 | 通过暴露 HTTP MCP 端点，从终端多路复用器向“上下文路由中心”跃迁 |
| **BabyAGI** | 2 | 0 | 0 | 代码层面停滞，仅存的动态多为社区噪音和基础路由报错反馈 |
| **Vibe Kanban / Aperant / Claude Squad / Ralph** | 1~2 | 0~1 | 0 | 整体趋于平稳维护，核心解决多 Agent 可视化看板流转卡死及特定环境兼容性问题 |
| *其他无活动项目* | *0* | *0* | *0* | *1Code, ClawTeam, Collaborator, Crystal, Dorothy, GNAP, GPT-Engineer, HumanLayer, Kodo, OpenAI Swarm, OpenKanban, ORCH, Swarm Protocol, Symphony 等过去24h无实质性提交或讨论* |

## 编排模式与架构对比
当前生态中的 Agent 协调机制正在形成三种截然不同的架构范式：

1. **集中式状态机与图形调度**：以 **LangGraph**、**AutoGPT** 和 **Semantic Kernel** 为代表。这种模式依赖预设的有向无环图 (DAG) 或状态机流转控制，擅长处理复杂的条件分支（如 `ConditionalRouter`）。调度策略高度偏向确定性和“人机协同”（HITL 的 `Interrupt` 机制），多 Agent 通信依赖中央检查点的状态持久化。
2. **联邦自治与动态拓扑**：**Gastown**、**Agno** 和 **PydanticAI** 采用此模式。不再是死板的 Prompt 链，而是构建 Mayor（调度）、Deacon（监控）、Polecat（执行）等多角色自治拓扑。任务分发支持在运行时由 Leader 动态派发生成专家 Agent；多 Agent 通信基于底层的版本化数据库（如 Beads）或 MCP Toolset 进行状态共享，容错率极高。
3. **进程级/终端多路复用编排**：**Superset**、**Agent Deck** 和 **dmux** 专攻本地环境。它们剥离了复杂的网络调度，直接将异构 CLI（如 Claude、Codex、Gemini）作为独立进程托管在 tmux/沙箱中。任务分发基于 Git Worktree 实现单任务物理隔离，调度策略高度依赖进程存活检测与权限收敛。

## 共同关注的工程方向
从今日高密度的问题追踪中，可以明显识别出生态正在共同面对的三大工程痛点：

1. **安全边界的系统性重塑**：多个项目（**Agno, AutoGen, CrewAI, Semantic Kernel, Haystack**）在同一天内不约而同地推进针对 OWASP ASI06 的“记忆防毒”方案；**MetaGPT** 和 **SmolAgents** 暴露出的沙箱逃逸和 RCE 漏洞，迫使框架层全面收紧执行器的权限管控（如去除 `eval()` 和阻断 Dunder 属性访问）。
2. **长时间运行的状态稳定性治理**：解决 Agent 循环中的“僵尸态”与“静默重试”成为核心发力点。**T3Code** 重写了会话状态机，**LangGraph** 着手修复超长工具调用导致的检查点并发重启，而 **Ruflo** 则在死磕跨平台状态持久化时的向量索引失效问题。
3. **底层协议标准化**：模型上下文协议（MCP）的深度整合已成为“必选项”。从 **PydanticAI** 废弃旧体系全面拥抱 `MCPToolset`，到 **OpenAI Agents** 修复 MCP 参数展平问题，再到 **Jean** 通过 MCP 总线路由上下文，基于统一协议挂载外部工具链已成为编排框架的共识底座。

## 差异化定位分析
1. **企业级 SaaS 编排底座**：**AutoGPT** 和 **CrewAI**。两者的重心已从纯粹的代码逻辑转移至商业化与企业合规。AutoGPT 完善了前端 Paywall 与后端执行路由的强拦截，CrewAI 引入 Pre-tool-call 权限与信任网络，适合需要严格审计与计费的大型组织。
2. **高并发控制的“微内核”架构 (Python 核心)**：**PydanticAI**、**Agno** 和 **LangGraph**。它们不提供重型 UI，而是提供极具弹性的 API 编排能力。PydanticAI 通过 `Capabilities` 机制实现函数式组合，Agno 极致压榨异步并发（全面落地 Async Redis），适合作为复杂系统的底层执行引擎。
3. **终端优先的本地多工位调度器**：**Superset**、**Agent Deck**、**dmux**。定位于开发者的本地 IDE 助理。它们最大的护城河在于对 Git 工作流（Worktree、跨 Remote PR）和多种底层 CLI 的原生兼容，适合追求极致本地 DX（开发者体验）的极客与全栈工程师。

## 值得关注的趋势信号
1. **Agent 自治权的“精细熔断”机制**：单纯的“遇错即停”已无法满足复杂工作流。如 **Ralph Claude Code** 引入基于状态的精细熔断，**Mux Desktop** 实现前端 UI 与 LLM 上下文的物理隔离。将“面向用户的 UI 状态”与“面向机器的推理上下文”解耦，将成为下一代编排框架的标准设计。
2. **AI 原生安全从“建议”走向“基建”**：单日内多个独立项目同时集成 OWASP 防护和进行高危漏洞修复，标志着“安全”正式从附加特性转变为阻断性需求。未来缺乏安全沙箱和权限收缩机制的编排框架将被企业级市场淘汰。
3. **向模型无关 与多模型降级原生演进**：无论底层是否支持，框架都在洗掉特定大模型厂商的强绑定痕迹（如 **DeepAgents** 泛化缓存提案，**Gastown** 的速率限制感知实例切换）。编排层正在演变为类似 Kubernetes 的角色——它不关心底层的算力提供者是谁，只负责统一调度和容错。

---

## Agent 编排项目详细报告

<details>
<summary><strong>Claude Squad</strong> — <a href="https://github.com/smtg-ai/claude-squad">smtg-ai/claude-squad</a></summary>

# AI Agent 编排日报摘要：Claude Squad
**日期**: 2026-05-14 | **分析目标**: [smtg-ai/claude-squad](https://github.com/smtg-ai/claude-squad)

---

### 1. 今日速览
过去 24 小时内，Claude Squad 仓库整体活跃度趋于平稳。项目处于稳定维护期，无新增代码合并或版本迭代。社区焦点主要集中在既有平台兼容性问题的讨论上。

- **Issues 更新**: 1 条（无新增，历史 Issue 更新）
- **PR 更新**: 0 条
- **新版本发布**: 0 个

### 2. 版本发布
今日无新版本发布。当前最新发行版仍为 `v1.0.17`。

### 3. 重点 Issues
当前社区关注点集中在跨平台支持的底层依赖限制上。

- **#275 [OPEN] Windows 二进制文件在执行 `n new` 时立即失败 —— `creack/pty` 不支持 Windows**
  - **作者**: Avimarzan
  - **状态**: 2 条评论 | 创建于 2026-04-07，最近更新于 2026-05-13
  - **链接**: [smtg-ai/claude-squad Issue #275](https://github.com/smtg-ai/claude-squad/issues/275)
  - **技术摘要**: 尽管项目提供了 Windows amd64 构建版本（`claude-squad_1.0.17_windows_amd64.zip`），TUI 界面和基础命令（如 `cs version`）也能正常渲染和运行，但在创建新会话时崩溃。根本原因在于项目依赖的核心组件 `tmux` 及其 Go 语言伪终端库 `creack/pty` 原生不支持 Windows 架构。这导致底层调用抛出 `unsupported` 错误，阻断了 Windows 环境下的核心 Agent 编排工作流。

### 4. 关键 PR 进展
过去 24 小时内无活跃的 Pull Request。

### 5. 为什么这个项目在 Agent 编排生态中值得关注
Claude Squad 的核心价值在于**为多 AI Agent 提供基于终端的会话级编排与状态管理**。在当前的 AI Agent 开源生态中，多数编排工具侧重于 API 层面的 DAG（有向无环图）或链式调用，而 Claude Squad 选择了基于 `tmux` 的进程级隔离方案，使得多个 Codex/Agent 能够在独立的沙箱环境中并行执行任务。
Issue #275 暴露了目前架构对 Unix-like 系统（`pty`）的强依赖，这也反映了当前终端驱动型 Agent 编排工具在跨平台虚拟化或适配 Windows 伪终端（如 ConPTY）时面临的技术取舍与挑战。对于希望在本地进行多 Agent 负载试错和并行任务调度的开发者来说，该项目的架构设计具有极高的参考价值。

</details>

<details>
<summary><strong>Crystal</strong> — <a href="https://github.com/stravu/crystal">stravu/crystal</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>dmux</strong> — <a href="https://github.com/standardagents/dmux">standardagents/dmux</a></summary>

# Agent 编排生态日报：dmux 项目跟踪 (2026-05-14)

## 1. 今日速览
过去 24 小时，[dmux (standardagents/dmux)](https://github.com/standardagents/dmux) 保持了高频的迭代速度。项目连续发布了 v5.8.0 和 v5.8.1 两个版本，主要引入了 UI 国际化支持并修复了通知噪音问题。社区活跃度较高，围绕多终端编排、Git Worktree 工作流及 UI 交互体验发起了 5 个 Issue 和 3 个 PR 更新。

## 2. 版本发布
近期连续发布两个重要更新，显示项目正在完善多语言用户体验及底层交互稳定性：

- **v5.8.0**：核心功能更新。
  - **新增 i18n 支持**：引入多语言 UI 国际化支持（由 @ryouka0731 贡献）。
  - **停止检测与通知优化**：改进了 Agent 运行时的停止检测机制，并增加了关闭通知的选项（由 @justin-schroeder 贡献）。
  - 🔗 [View changes on GitHub (v5.8.0...v5.8.1)](https://github.com/standardagents/dmux/compare/v5.8.0...v5.8.1)
- **v5.8.1**：Bug 修复。
  - **降低通知干扰**：减少了注意力机制（attention）引发的多余通知噪音，提升沉浸式开发体验（由 @justin-schroeder 贡献）。
  - 🔗 [View changes on GitHub](https://github.com/standardagents/dmux/compare/v5.8.0...v5.8.1)

## 3. 重点 Issues
用户高度关注基于终端的 Agent 工作流（Worktree）管理和交互体验：

- **Worktree 合并策略细化需求**：[#95 [OPEN]](https://github.com/standardagents/dmux/issues/95) 用户希望 "Merge Worktree" 功能能提供显式的 `rebase` 或 `squash` 选项，以满足不同团队的 Git 规范，而非单一的 merge 行为。
- **终端与 Worktree 映射管理**：[#94 [OPEN]](https://github.com/standardagents/dmux/issues/94) 为 Worktree 添加附属终端时，当前生成的随机命名（如 `shell-<timestamp>`）导致难以溯源。呼吁优化 Pane 命名机制，直接关联至原 Worktree 名称。
- **多行输入的 UI 交互缺陷**：[#92 [OPEN]](https://github.com/standardagents/dmux/issues/92) 在创建新 Agent 时，使用 `Shift + Enter` 无法实现平滑的多行文本输入，且存在视图截断问题。
- **已有远端分支的复用需求**：[#93 [CLOSED]](https://github.com/standardagents/dmux/issues/93) 建议支持从现有的远端分支创建 Worktree，而不仅限于由 LLM 驱动生成全新分支（已关闭，可能已在开发分支处理）。
- **PR 生成期间的进程阻塞**：[#91 [OPEN]](https://github.com/standardagents/dmux/issues/91) 创建 PR 时，左侧面板（Pane）的交互会出现短暂卡顿和延迟。

## 4. 关键 PR 进展
核心贡献正围绕多仓协作和底层依赖兼容性展开：

- **[#90 [OPEN] 支持嵌套子代码库**](https://github.com/standardagents/dmux/pull/90)：由 @xiao-do-do 提交。允许 Pane Worktree 挂载并管理嵌套的子代码库，使其与根仓库同步生命周期。这对于使用 Monorepo 或包含大量 Git Submodule 的 AI Agent 工作流是一个关键突破。
- **[#89 [CLOSED] 修复 Codex CLI 兼容性警告**](https://github.com/standardagents/dmux/pull/89)：由于底层依赖 Codex CLI 0.129.0 已将 `codex_hooks` 标记为废弃，该 PR 将启动参数平滑迁移至 `--enable hooks`，消除了控制台警告。
- **[#87 [CLOSED] 修复 tmux 会话名的空格解析问题**](https://github.com/standardagents/dmux/pull/87)：修复了当项目路径包含空格时，导致 dmux 生成的 tmux 会话名在执行命令时被错误截断和解析的 Bug。

## 5. 为什么这个项目在 Agent 编排生态中值得关注
dmux 并非传统的 DAG 编排框架，而是深度聚焦于**开发者本地的 AI Agent 终端编排体验**。

1. **深度集成 Git 与沙盒管理**：通过原生的 Worktree（代码树）管理机制，dmux 允许开发者或 AI 在同一项目中并行操作多个隔离的代码分支，从 Issue 讨论到代码生成、测试再到发起 PR（Issue #91/#95），实现了真正意义上的“单任务单 Agent”物理隔离。
2. **专注终端 UI (TUI) 交互**：基于 tmux 构建多终端视窗生态，解决多 Agent 运行时的状态流转、日志监控（如最新版优化的 Attention 通知降噪）和多语言支持（v5.8.0），直接击中开发者在终端下管理多 Agent 时的痛点。
3. **拥抱底层生态演进**：项目紧跟上游（如 OpenAI Codex CLI）的 API 更新（PR #89），并开始支持嵌套仓库（PR #90），展示了极强的工程落地能力和对复杂真实开发场景的适应性。对于希望构建本地多 Agent 协作流水线的研发团队，dmux 提供了极佳的底层编排基座。

</details>

<details>
<summary><strong>Symphony</strong> — <a href="https://github.com/openai/symphony">openai/symphony</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Claude Code Bridge</strong> — <a href="https://github.com/bfly123/claude_code_bridge">bfly123/claude_code_bridge</a></summary>

# AI Agent 编排日报摘要 | 2026-05-14

**项目**: Claude Code Bridge (ccb)  
**仓库**: [github.com/bfly123/claude_code_bridge](https://github.com/bfly123/claude_code_bridge)

---

## 1. 今日速览

| 指标 | 数值 |
|------|------|
| Issues 更新（24h） | 0 条 |
| PR 更新（24h） | 3 条 |
| 新版本发布（24h） | **5 个**（v6.1.8 → v6.1.12） |

项目正处于高密度迭代周期，过去 24 小时连续发布 5 个版本，集中在 **WSL 存储清理对齐**、**macOS Keychain 投射修复**、**Tmux 权限提示绕过** 三个方向，均属平台兼容性与 Agent 运行时稳定性修复。

---

## 2. 版本发布

### v6.1.12 — Tmux 权限提示修复
**重点**: 解决 Claude Agent 在 tmux 分屏中因交互式确认弹窗导致的阻塞问题。  
- 以 `--permission-mode bypassPermissions` 替代旧的 `--dangerously-skip-permissions`  
- 通过 settings overlay 注入 `skipDangerousModePermissionPrompt: true`，彻底消除不可应答的确认提示  
- 关联 PR: [#203](https://github.com/SeemSeam/claude_codex_bridge/pull/203)

### v6.1.11 — WSL 清理 Smoke 测试对齐
**重点**: WSL 清理验证逻辑更新，使共享缓存预期与当前存储契约一致。  
- 挂载盘项目重定位后正确报告 shared cache 状态  
- 包含清理回滚修复的前置提交

### v6.1.10 — 清理回滚 Hotfix
**重点**: `ccb cleanup` 保留当前 Claude Code 版本 + 一个回滚版本的缓存，仅裁剪可重建的旧版本缓存条目。  
- 防止清理操作破坏 Agent 运行时的版本回退能力

### v6.1.9 — 存储去重与关机加固
**重点**: 多 Provider 存储足迹优化。  
- Codex 投射资产改用符号链接/共享 bundle  
- Claude 版本缓存清理覆盖共享缓存路径  
- Gemini 可重建缓存走 shared/external cache 路径，避免 per-project 堆积

### v6.1.8 — macOS Keychain 偏好投射 Hotfix
**重点**: 受管 Claude HOME 在 macOS 上继承 `Library/Preferences/com.apple.security.plist`，确保 `security default-keychain` 在隔离环境中解析到登录钥匙串。  
- 关联 PR: [#202](https://github.com/SeemSeam/claude_codex_bridge/pull/202)

---

## 3. 重点 Issues

过去 24 小时无新 Issue 或 Issue 更新（0 条）。当前版本迭代均由内部 QA 和已知平台兼容性问题驱动，社区侧暂无新增反馈。

---

## 4. 关键 PR 进展

| PR | 状态 | 作者 | 核心变更 |
|----|------|------|----------|
| [#204 Handle macOS Claude keychain fallback without security plist](https://github.com/SeemSeam/claude_codex_bridge/pull/204) | **OPEN** | @Jingzhe-Wang | 当 `com.apple.security.plist` 不存在时，fallback 为直接链接 `~/Library/Keychains` 到受管 HOME；覆盖更多 macOS 配置变体 |
| [#203 fix: skip Claude bypass permissions prompt in tmux panes](https://github.com/SeemSeam/claude_codex_bridge/pull/203) | **CLOSED / Merged** | @Hyz7 | `--dangerously-skip-permissions` → `--permission-mode bypassPermissions` + settings overlay `skipDangerousModePermissionPrompt`，已发布于 v6.1.12 |
| [#202 Fix macOS Claude keychain preference projection](https://github.com/SeemSeam/claude_codex_bridge/pull/202) | **CLOSED / Merged** | @Jingzhe-Wang | 投射安全偏好 plist 至隔离 Claude HOME，已发布于 v6.1.8 |

**值得关注**: [#204](https://github.com/SeemSeam/claude_codex_bridge/pull/204) 是 [#202](https://github.com/SeemSeam/claude_codex_bridge/pull/202) 的后续增强，处理 plist 缺失的边界情况，说明项目对 macOS 受管环境的兼容性在做逐层深入覆盖。

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注

Claude Code Bridge 解决的是 **AI Agent 在本地多平台环境下的运行时隔离与资源管理** 问题——这在当前 Agent 编排生态中属于基础设施层：

1. **多平台隔离一致性**: 从 WSL 存储契约对齐到 macOS Keychain 投射，ccb 在构建一套跨平台的受管 HOME 方案，让 Claude/Codex/Gemini 等 Agent 在隔离环境中仍能正确访问认证与存储资源。

2. **无头/分屏场景稳定性**: v6.1.12 的 tmux 权限提示修复直接解决了 Agent 在 CI 或 tmux 编排场景下因交互确认卡死的问题——这是多 Agent 并行编排的前提条件。

3. **存储去重与版本管理**: v6.1.9–v6.1.10 的 symlink 共享 bundle + 回滚版本保留策略，指向多 Agent 共存时的磁盘与缓存治理，对规模化编排场景的运维成本有直接影响。

4. **高发版节奏**: 24 小时 5 个版本，每个版本聚焦一个具体平台问题并含 smoke 测试验证，说明项目正处于针对真实部署反馈的快速收敛期。

</details>

<details>
<summary><strong>Dorothy</strong> — <a href="https://github.com/Charlie85270/Dorothy">Charlie85270/Dorothy</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Jean</strong> — <a href="https://github.com/coollabsio/jean">coollabsio/jean</a></summary>

以下是为您生成的 2026-05-14 Jean 项目 Agent 编排日报摘要：

# 🤖 Agent 编排日报：Jean 项目状态更新 (2026-05-14)

### 1. 今日速览
过去 24 小时内，[Jean (coollabsio/jean)](https://github.com/coollabsio/jean) 整体保持平稳推进。项目无新增或更新的 Issues，合并了 2 个关键 PR，并发布了包含多项重要架构特性的 `v0.1.48` 版本。项目正在深化其作为多 CLI Agent 编排底座的上下文共享与管控能力。

### 2. 版本发布
- **[v0.1.48](https://github.com/coollabsio/jean/releases/tag/v0.1.48)**
  - **终端优先交互**：引入了全屏终端会话模式，支持字体/渲染偏好设置及更完善的会话清理机制。
  - **CLI 会话挖掘与接管**：原生支持对 Claude 和 Codex CLI 会话的自动发现、导入和恢复。
  - **统一上下文提及**：新增跨 Agent 的共享上下文提及能力，支持无缝接入 GitHub、Linear 以及安全相关的上下文状态。

### 3. 重点 Issues
- **过去 24 小时无更新**。
  *(注：虽然今日无活跃 Issue，但结合近期 PR 趋势来看，社区当前的重心集中在底层多 Agent 进程调度和 MCP 协议接入上。)*

### 4. 关键 PR 进展
今日有 2 个处于 `OPEN` 状态的核心 PR，分别聚焦于**执行沙箱安全控制**与**外部 Agent 通信协议**：

- **[#362 fix(codex): preserve danger full access for yolo turns](https://github.com/coollabsio/jean/pull/362)**
  - **作者**: SebastianMihali
  - **摘要**: 修复了 Codex 在 `yolo` 模式（即无限速/高权限模式）下被意外重新沙箱化的 Bug。此前在 `thread/start` 时正确赋予了完全访问权限（`danger-full-access`），但在发起包含额外可写根目录的 `turn/start` 时，会被错误地降级覆写为 `workspaceWrite`。此 PR 修复了编排层对子 Agent 权限管控的一致性问题。
- **[#368 feat(mcp): expose Jean MCP server to spawned CLIs](https://github.com/coollabsio/jean/pull/368)**
  - **作者**: andrasbacsai
  - **摘要**: 一项重要的编排架构升级。新增了 Jean 的 HTTP MCP 端点，允许通过 JSON-RPC 暴露项目、工作区、Issue、会话等工具。更重要的是，它使得由 Jean 拉起的 Claude 或 Cursor 子进程能够自动注入带有会话上下文和递归深度追踪的 MCP 配置。这标志着 Jean 正在从“进程管理器”向“上下文路由中心”演进。

### 5. 为什么这个项目在 Agent 编排生态中值得关注
Jean 正在解决多 Agent 协作中的一个核心痛点：**异构 CLI Agent 的原生集成与状态同步**。
通过 `v0.1.48` 的特性和 PR #368 可以看出，Jean 不仅仅是拉起不同的 Agent 进程（如 Codex、Claude），而是通过 MCP（Model Context Protocol）作为标准总线，将上层的业务上下文（GitHub/Linear 等系统状态）和下层的环境状态（工作区、沙箱权限）进行统一路由和分发。这种**“终端优先 + MCP 总线 + 权限隔离”**的设计思路，为构建高复杂度、多 Agent 闭环协作的自动化工作流提供了极具潜力的开源基础设施。

</details>

<details>
<summary><strong>OpenKanban</strong> — <a href="https://github.com/TechDufus/openkanban">TechDufus/openkanban</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Claude Flow</strong> — <a href="https://github.com/ruvnet/claude-flow">ruvnet/claude-flow</a></summary>

# AI Agent 编排日报：Claude Flow (Ruflo) — 2026-05-14

## 1. 今日速览
过去 24 小时，Claude Flow 生态保持高活跃度，核心开发团队集中处理了 v3.7.0-alpha 阶段积累的技术债务。社区及自动验证系统共上报 18 个 Issue（14 个已关闭，4 个待处理），提交并合并了 10 个核心修复 PR。项目当前正处于向 v3.7.0 稳定版迈进的密集修复期。

## 2. 版本发布
- **[v3.7.0-alpha.33](https://github.com/ruvnet/ruflo/releases/tag/v3.7.0-alpha.33)**：这是一个累积性批量发布版本，整合了自 `alpha.27` 以来的 **14 项关键修复**，其中 8 项针对底层 Memory（记忆）层的重构。标志着核心功能的稳定性显著提升。

## 3. 重点 Issues

### 🔴 高优先级验证与构建问题 (OPEN)
- **[#1949](https://github.com/ruvnet/ruflo/issues/1949) - 联邦插件安装 403 错误**：`@claude-flow/plugin-agent-federation@alpha` 安装失败，原因是传递依赖 `cookies@0.9.1` 触发了注册表安全策略拦截。
- **[#1880](https://github.com/ruvnet/ruflo/issues/1880) - 见证签名验证失效**：自动验证发现 `@noble/ed25519` 依赖缺失及构建产物丢失，导致所有系统的签名验证失败。

### 🟠 核心功能缺陷 (OPEN)
- **[#1948](https://github.com/ruvnet/ruflo/issues/1948) - 意外的临时文件生成**：Agent 执行过程中在仓库根目录生成了如 `0)` 等无效文件，疑似源码片段被错误重定向输出。
- **[#1946](https://github.com/ruvnet/ruflo/issues/1946) - `ruflo doctor` 状态误报**：CLI 报告 Memory 数据库未初始化，但底层 DB 文件及 MCP 守护进程运行正常（已通过 PR #1959 修复路径问题）。
- **[#1943](https://github.com/ruvnet/ruflo/issues/1943) - Hook 脚手架路径冲突**：Hook 写入 `$CLAUDE_PROJECT_DIR`，但依赖安装在全局目录，导致所有 Bash hook 触发 `MODULE_NOT_FOUND`。

### 🟢 已解决的重要 Bug (CLOSED)
- **[#1947](https://github.com/ruvnet/ruflo/issues/1947) / [#1952](https://github.com/ruvnet/ruflo/issues/1952) - Memory 搜索维度不匹配**：Schema 硬编码为 768 维，但默认嵌入模型输出 384 维向量，导致搜索返回 0 结果（Mac/Win 通用）。
- **[#1945](https://github.com/ruvnet/ruflo/issues/1945) - CLI Memory 状态丢失**：CLI 的每次调用都会生成独立的 sql.js 进程，无法共享持久化状态。
- **[#1941](https://github.com/ruvnet/ruflo/issues/1941) - 导入缺乏 HNSW 索引**：Bridge 导入未能自动配置向量索引，导致特定命名空间搜索失败。

## 4. 关键 PR 进展

### 核心架构与内存层修复
- **[PR #1956](https://github.com/ruvnet/ruflo/pull/1956) - 统一向量维度至 384 维**：修复了引发 Mac/Windows 广泛搜索失败的 Schema 维度硬编码问题（关联 #1947, #1942, #1952）。
- **[PR #1959](https://github.com/ruvnet/ruflo/pull/1959) - 修复 Memory 持久化与诊断路径**：CLI 和 `doctor` 命令现已正确读取配置文件或环境变量中的自定义 `CLAUDE_FLOW_MEMORY_PATH`（关联 #1945, #1946）。
- **[PR #1963](https://github.com/ruvnet/ruflo/pull/1963) - 按命名空间动态配置索引**：确保 Bridge 导入数据时自动配置 `vector_indexes`（关联 #1941）。

### 跨平台与 Hooks 修复
- **[PR #1962](https://github.com/ruvnet/ruflo/pull/1962) - 修复 Win32 路径解析**：解决了纯 Windows 环境下 cwd 中包含反斜杠和空格导致的项目内存目录匹配失败（关联 #1939）。
- **[PR #1957](https://github.com/ruvnet/ruflo/pull/1957) - 修复 TypeError 及全局路径错误**：解决了 `hook-handler.cjs` 的对象类型回退错误，以及全局安装时的路径映射问题（关联 #1944, #1943）。

### 新功能与生态拓展
- **[PR #1950](https://github.com/ruvnet/ruflo/pull/1950) - Swarm 可视化仪表盘 MVP**：新增 `@claude-flow/visualizer` 包，引入实时 Swarm 会话可视化及 `goal_ui` 观测性面板，在不改变核心编排逻辑的前提下增强了 Agent 集群的可观测性。

## 5. 为什么这个项目在 Agent 编排生态中值得关注

1. **聚焦底层记忆与状态管理**：从今日密集修复的 Memory 层 Bug（向量维度、索引自动分配、跨平台持久化）可以看出，Claude Flow 正在死磕 Agent 长期记忆和多 Agent 间状态共享的底层可靠性，这是构建复杂生产级 Agent 的基石。
2. **多模态/跨平台兼容性的工程挑战**：大量 PR 涉及对 Win32 系统、纯 CLI 环境、MCP 守护进程环境的适配，表明该项目正在努力构建一个环境无关的健壮编排运行时。
3. **可观测性的进化**：随着 Swarm 可视化工具（PR #1950）的引入，项目开始解决多 Agent 协作中最大的痛点——“黑盒化”。实时观测 Agent 目标与交互流，是 Agent 编排从“能用”到“好用”的关键一步。
4. **高度自动化的质量保障**：从 #1880 和 #1949 等自动验证系统提交的高质量 Issue 可以看出，项目具备完善的 CI/CD 自动化探测机制，能够在问题进入正式版前进行拦截。

</details>

<details>
<summary><strong>Kodo</strong> — <a href="https://github.com/ikamensh/kodo">ikamensh/kodo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ORCH</strong> — <a href="https://github.com/oxgeneral/ORCH">oxgeneral/ORCH</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>GNAP</strong> — <a href="https://github.com/farol-team/gnap">farol-team/gnap</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Swarm Protocol</strong> — <a href="https://github.com/phuryn/swarm-protocol">phuryn/swarm-protocol</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Vibe Kanban</strong> — <a href="https://github.com/BloopAI/vibe-kanban">BloopAI/vibe-kanban</a></summary>

# AI Agent 编排生态日报：Vibe Kanban 项目追踪
**日期**：2026-05-14 | **分析目标**：[BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban)

---

### 1. 今日速览
过去 24 小时内，项目整体活跃度较低，无新版本发布。核心动态集中在开发者体验（DX）的改进与仓库维护：
*   **Issues 更新**：1 条（日常维护清理）
*   **PR 更新**：1 条（开放中，聚焦本地部署流程简化）
*   **Releases**：0 个

### 2. 版本发布
*   **无新版本发布**。

### 3. 重点 Issues
*   **[#3414 [CLOSED] [REMOVED]](https://github.com/BloopAI/vibe-kanban/issues/3414)**
    *   **作者**: erikdemarco
    *   **摘要**: 该 Issue 已被作者自行标记为 `fixed` 并设为 `[REMOVED]` 状态，无社区评论。属于常规的内部测试或无效反馈清理，未涉及实质性的功能缺陷暴露。

### 4. 关键 PR 进展
*   **[#3415 [OPEN] Add crates/remote/starter: one-command local self-host bootstrap](https://github.com/BloopAI/vibe-kanban/pull/3415)**
    *   **作者**: domjancik
    *   **状态**: Draft（草稿）
    *   **摘要**: 此 PR 新增了一个独立的脚手架模块（`crates/remote/starter/`）。它允许用户通过一条指令（`make start`）在本地零配置启动完整的自托管 Vibe Kanban 实例。关键在于该方案完全解耦，不对原有的 `crates/remote/docker-compose.yml` 造成任何侵入性修改。
    *   **分析**: 作者目前以 Draft 形式提交，主要目的是向维护者征求关于该模块的**存放位置、功能范围及社区需求度**的意见，暂未进入代码 Review 阶段。

### 5. 为什么这个项目在 Agent 编排生态中值得关注
结合今日动态，Vibe Kanban 在 Agent 编排生态中的核心观测价值如下：

1.  **强化编排工作流的本地闭环**：PR #3415 暴露出项目正在极力降低本地部署门槛。在 AI Agent 编排场景中，开发者通常需要在本地安全环境中反复调试 Agent 的输入/输出流、状态卡（Kanban）流转及插件集成。提供“一键启动”的自托管方案，极大优化了多 Agent 协同逻辑的本地调试体验（DX）。
2.  **架构设计的模块化与解耦**：通过引入 `starter` 而非直接修改核心的 `docker-compose.yml`，展现了项目在架构上的克制与清晰。这种设计使得复杂编排引擎的核心容器编排与快速启动模板相互隔离，有利于未来适配更多样化的分布式部署需求。
3.  **可观测性与流程控制**：Kanban（看板）模式是解决 LLM 复杂任务“黑盒”执行的有效补充。通过可视化卡片拖拽或状态流转来控制 Agent 的执行节点，该项目为 AI Agent 编排提供了一种基于状态机的、强可视化的控制面解决方案。

</details>

<details>
<summary><strong>OpenFang</strong> — <a href="https://github.com/RightNow-AI/openfang">RightNow-AI/openfang</a></summary>

# OpenFang Agent 编排生态日报 (2026-05-14)

## 1. 今日速览
过去 24 小时，OpenFang 仓库维持了平稳的社区开发活跃度。无新版本发布，核心关注点在于 **运行时细粒度权限控制（沙箱机制）**、**多模态上下文处理** 以及 **对新沟通渠道和第三方模型提供商的兼容性适配**。

- Issues 更新：2 条
- PR 更新：2 条
- Releases：0 个

---

## 2. 版本发布
无新版本发布。

---

## 3. 重点 Issues

- **[#1195] [bug] 自定义 base_url 错误截断模型命名空间** ([Link](https://github.com/RightNow-AI/openfang/issues/1195))
  - **详情**: 在配置 Featherless 等兼容 OpenAI 接口的提供商时，OpenFang 会将模型 ID（如 `openai/gpt-oss-120b`）中的命名空间前缀 `openai/` 错误剥离，导致底层请求模型名称不匹配而报错。这暴露了编排层在处理多模型提供商路由时的解析逻辑缺陷，需关注后续修复。

- **[#978] [enhancement] 请求接入腾讯 QQ 频道** ([Link](https://github.com/RightNow-AI/openfang/issues/978))
  - **详情**: 社区呼吁增加对腾讯 QQ 频道的原生 Agent 接入支持。QQ 作为拥有 5.34 亿月活（特别是 Z 世代与游戏群体）的超级应用，此 Feature 的落地将显著拓宽 OpenFang Agent 在国内泛娱乐和社交场景的部署边界。

---

## 4. 关键 PR 进展

- **[#1183] [CLOSED] feat(runtime): 引入 per-agent 文件策略系统** ([Link](https://github.com/RightNow-AI/openfang/pull/1183))
  - **详情**: 实现了细粒度的单 Agent 文件访问控制策略（包含 deny/prompt/read/write 四个层级）。该 PR 依赖于 #1182 的 `ApprovalManager` 能力门控系统。这标志着 OpenFang 在 Agent **安全隔离与权限编排** 上迈出了重要一步，防止 Agent 在执行任务时出现越权读写。

- **[#1151] [OPEN] runtime/claude_code: 实现图像块落盘及缓存模块提取** ([Link](https://github.com/RightNow-AI/openfang/pull/1183))
  - **详情**: 针对 Claude Code CLI 驱动无法直接读取内存字节或 URL 的限制，该 PR 将处理流程中的图像 `ContentBlock` 物化（materialize）为基于内容寻址的本地临时文件（存储于 `~/.openfang/tmp/images/`）。此举不仅解决了特定模型驱动的多模态上下文注入问题，还统一了 Agent 运行时的图像处理架构。

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注

OpenFang 正在从一个简单的 LLM 路由器，演进为一个具备深度执行环境感知的 **企业级 Agent 编排框架**。

1. **深耕安全与执行边界**：通过 #1183 提出的 `file_policy` 和 `ApprovalManager` 机制，OpenFang 正在解决多 Agent 编排中最棘手的“权限爆炸”问题，实现任务下发与系统资源访问的强隔离。
2. **多模态适配能力下沉**：#1151 对图像处理机制的底层重构表明，项目致力于在 Runtime 层抹平不同底层模型（如 Claude, OpenAI 及各类开源模型）在处理多模态数据时的接口差异。
3. **广度与深度的双向扩展**：在深度上，它通过修复 #1195 不断完善对复杂第三方 Serverless 推理 API 的兼容；在广度上，通过诸如 #978 的讨论，积极拥抱细分社交生态，展现了其作为通用 Agent 触达层的工程野心。

</details>

<details>
<summary><strong>Aperant</strong> — <a href="https://github.com/AndyMik90/Aperant">AndyMik90/Aperant</a></summary>

# AI Agent 编排生态日报：Aperant 项目跟踪
**日期**: 2026-05-14 | **项目**: [AndyMik90/Aperant](https://github.com/AndyMik90/Aperant)

---

### 1. 今日速览
过去 24 小时，Aperant 仓库整体处于低活跃的平稳维护期。无新代码合并，无新版本发布，仅 1 条历史缺陷 Issue 出现了状态更新。

### 2. 版本发布
过去 24 小时内**无新版本发布**。

### 3. 重点 Issues
- **[#2003](https://github.com/AndyMik90/Aperant/issues/2003) [OPEN] [bug, needs-triage] failed after 3 attempts. last error: error**
  - **作者**: ahmedmhamdi
  - **动态**: 该 Issue 创建于 2026-04-08，在昨日（2026-05-13）迎来了新的评论更新（目前共 4 条评论，1 个点赞）。
  - **问题概述**: 在 Windows 环境下使用最新 Beta 版时，经过 Kanban（看板）仪表盘触发流程后，系统报错 `failed after 3 attempts. last error: error`。核心故障在于 Agent 编排的关键工作流（Plan -> Code -> Revision）无法自动初始化。
  - **生态关联**: 此 Bug 暴露了在特定 OS 环境下，多 Agent 任务调度与状态机流转（自动初始化）可能存在健壮性问题。

### 4. 关键 PR 进展
过去 24 小时内**无 PR 更新**。

### 5. 为什么这个项目在 Agent 编排生态中值得关注
Aperant 提供了可视化的多 Agent 编排能力（如 Issue 中提及的 Kanban dashboard 和 Plan-Code-Revision 工作流）。从其暴露的 Issue 特征来看，该项目致力于将复杂的 AI Agent 协作过程通过看板模式进行抽象和管理。对于关注 **Agentic Workflow（智能体工作流）**、**任务自动拆解与流转** 以及 **AI 自动化 pipeline** 的开发者而言，Aperant 提供了一个值得追踪的开源实践参考，其在跨平台状态管理上的迭代值得持续关注。

</details>

<details>
<summary><strong>Gastown</strong> — <a href="https://github.com/gastownhall/gastown">gastownhall/gastown</a></summary>

# Gastown Agent 编排生态日报摘要 (2026-05-14)

## 1. 今日速览
过去 24 小时内，Gastown 项目的社区活跃度极高，核心焦点集中在 **v1.0.0 版本前后的架构升级遗留问题** 以及 **多 Agent 调度的稳定性修复**。
- **Issues 更新**：41 条（主要集中在 P0/P1 级别的底层 Bug 修复）
- **PR 更新**：29 条（核心贡献者 `Bella-Giraffety` 集中提交了大量针对 Beads 数据库路由和 tmux 会话管理的修复）
- **新版本发布**：0 个

---

## 2. 版本发布
无新版本发布。项目当前正处于 v1.0.0 发布后的高密度除错与稳定性重构阶段。

---

## 3. 重点 Issues
今日的 Issues 集中暴露了 Gastown 在分布式状态管理、Agent 进程监控和数据库隔离等方面的深水区挑战。

- **v1.0 升级导致的 Split-brain (双主脑) 问题**
  - [#3570](https://github.com/gastownhall/gastown/issues/3570) `[P1]`：从 v0.12 升级至 v1.0 后，Daemon 未能清理旧的 tmux sockets，导致系统中同时运行两个 Mayor/Deacon 实例引发状态冲突。
  - [#3042](https://github.com/gastownhall/gastown/issues/3042) `[P1]`：某次代码提交 revert了per-town 的 tmux socket 隔离机制，破坏了 Agent 环境的独立性。
- **Polecat (工作节点) 的静默崩溃与挂起**
  - [#2534](https://github.com/gastownhall/gastown/issues/2534) `[P2]`：Polecat 的 Worker 子进程崩溃时无任何 Feed 事件上报，导致父进程成为“僵尸”。
  - [#2416](https://github.com/gastownhall/gastown/issues/2416) `[P1]`：Polecat 在执行任务时提前退出，未实施任何代码变更，原因追踪至元数据删除引发的逻辑漏洞。
- **底层存储路由与数据一致性**
  - [#824](https://github.com/gastownhall/gastown/issues/824) `[P0]`：Beads daemon sync 意外清空了用户的整个代码库（除 issues.jsonl 外），属于极高危的 P0 级数据丢失 Bug。
  - [#3354](https://github.com/gastownhall/gastown/issues/3354) `[P1]`：并发批处理 sling 操作时，Hook 分配丢失，存在竞态条件。
  - [#3181](https://github.com/gastownhall/gastown/issues/3181) `[P1]`：`gt convoy` 无法跨前缀解析 Beads 数据库。
- **多 Provider 编排的强烈需求**
  - [#232](https://github.com/gastownhall/gastown/issues/232) `[P1, 👍7]`：社区高度关注的功能请求，要求引入速率限制感知的智能实例切换以及多 Provider/Auth 配置文件支持，以解决长时间运行时的 API 限流问题。

---

## 4. 关键 PR 进展
今日 PR 活动呈现明显的“集群修复”特征，重点重构了底层的 Beads 路由机制和 tmux 会话管理。

- **Beads 路由与数据库隔离重构 (核心修复)**
  - [#3978](https://github.com/gastownhall/gastown/pull/3978)：修复 Agent Bead 更新路由，确保带有 rig 前缀的 ID 能通过 town root 正确解析。
  - [#3968](https://github.com/gastownhall/gastown/pull/3968) & [#3979](https://github.com/gastownhall/gastown/pull/3979)：重构 `bd create` 和 `BdCmd`，将子进程严格钉死到目标 Rig 的 Beads 数据库上，解决因环境变量污染导致的数据库错乱问题。
  - [#3823](https://github.com/gastownhall/gastown/pull/3823) `[P0]`：保护全局 `beads_global` Dolt 数据库不被误判为孤儿库而清理。
- **Agent 进程生命周期优化**
  - [#3977](https://github.com/gastownhall/gastown/pull/3977)：将遗留 tmux socket 清理逻辑移入 `internal/session`，确保 Daemon 启动和关闭时的状态一致。
  - [#3964](https://github.com/gastownhall/gastown/pull/3964)：增强 `gt rig status` 识别死去的 tmux panes，并允许 Witness 自动重建僵尸会话。
  - [#3826](https://github.com/gastownhall/gastown/pull/3826)：为 Daemon 添加了空闲抑制机制，当 Deacon 状态健康时停止无意义的重复 Spawn 操作。
- **多模型 Agent 适配**
  - [#3841](https://github.com/gastownhall/gastown/pull/3841)：引入 `opencode` Agent 适配器，使 Polecat 支持生成非 Claude 模型的 Polecats，并增加了自动压缩循环机制。

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注

Gastown 提供了一个极具工程挑战性的 AI Agent 编排方案的“真实切片”：

1. **突破单 Agent 限制的分布式架构**：它不是简单的 Prompt 链，而是构建了 Mayor(调度), Deacon(巡逻), Witness(监控), Polecat(执行) 的多角色自治拓扑，模拟了人类软件团队的协作流。
2. **持久状态与沙箱隔离的探索**：通过底层的 Beads（基于 Dolt 数据库的版本化状态存储）和 tmux/worktree 隔离机制，尝试解决 AI Agent 长时间运行下的有状态与上下文保持问题。当前暴露的大量 P0/P1 Bug（如 socket 冲突、竞态条件）正是业界探索多 Agent 并发控制的必经之路。
3. **迈向多 Provider 的容错编排**：Issue #232 和 PR #3841 表明，该项目正在从单一的 Claude 依赖向 Provider-agnostic（多模型提供商）演进，引入速率限制感知和智能降级，这对于构建健壮的生产级 Agent 集群具有极高的参考价值。

Gastown 的演进史几乎是一部“如何给完全自治的 AI Agent 集群加上可靠缰绳”的实战教科书，适合所有关注 AI SRE 和 Multi-Agent 架构的开发者跟踪。

</details>

<details>
<summary><strong>HumanLayer</strong> — <a href="https://github.com/humanlayer/humanlayer">humanlayer/humanlayer</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Ralph Claude Code</strong> — <a href="https://github.com/frankbria/ralph-claude-code">frankbria/ralph-claude-code</a></summary>

# AI Agent 编排日报摘要：Ralph Claude Code
**日期**: 2026-05-14 | **分析目标**: [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code)

## 1. 今日速览
过去 24 小时内，项目整体活跃度较低，无新发版、无新增 Issue。核心动态集中在历史 PR 的规则优化讨论，特别是针对 Agent 循环中权限拒绝处理逻辑的改进。

*   **Issues 更新**: 0 条
*   **PR 更新**: 1 条
*   **新版本发布**: 0 个

## 2. 版本发布
过去 24 小时无新版本发布。 [(查看所有 Releases)](https://github.com/frankbria/ralph-claude-code/releases)

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

## 4. 关键 PR 进展
当前有 1 个处于 OPEN 状态的重点 PR，主要针对 Agent 循环控制的鲁棒性进行修复：

*   **[#264 [OPEN] fix(loop): trust agent RALPH_STATUS before halting on permission denials](https://github.com/frankbria/ralph-claude-code/pull/264)**
    *   **作者**: DivisionSt (创建于 2026-05-12)
    *   **关联**: Closes [#243](https://github.com/frankbria/ralph-claude-code/issues/243), Refines [#101](https://github.com/frankbria/ralph-claude-code/issues/101)
    *   **核心分析**: 该 PR 旨在解决由 [#142](https://github.com/frankbria/ralph-claude-code/issues/142) 引入的“遇权限拒绝即停止”的过于激进策略。在当前的编排逻辑中，单一的非核心工具调用被拒绝（例如 MCP 文档查询或 `Bash(awk ...)` 提取任务），即使 Agent 已经从该拒绝状态中恢复，循环仍会被强制终止。
    *   **技术方案**: 引入并信任 `RALPH_STATUS` 状态机，使编排器能够识别 Agent 的真实运行状态，从而区分“不可恢复的阻断性报错”与“可恢复的外围调用失败”，避免误杀正常的 Agent 循环。

## 5. 为什么这个项目在 Agent 编排生态中值得关注
Ralph Claude Code 的近期演进揭示了 **AI Agent 自主循环中“容错与控制”的核心矛盾**。在构建 AI Agent 编排系统时，如何优雅地处理 LLM 的工具调用权限是一个普遍痛点。
通过 PR #264 可以看出，该项目正在从粗放的“硬熔断”（只要报错就停机）向**“状态驱动的精细化管理”**演进。这种将 Agent 内部状态 (`RALPH_STATUS`) 作为编排层决策依据的设计思路，对于构建长时间运行、具备自我恢复能力的复杂 Agent 工作流具有直接的参考价值。

</details>

<details>
<summary><strong>Superset</strong> — <a href="https://github.com/superset-sh/superset">superset-sh/superset</a></summary>

# Superset (superset-sh/superset) Agent 编排生态日报
**日期**: 2026-05-14 | **分析师**: AI Agent 编排生态观察

---

### 1. 今日速览
过去 24 小时内，Superset 项目保持高开发活跃度，重点围绕 **V2 桌面端稳定性**及**多工作区体验优化**展开。
- Issues 更新：19 条（其中 V1 到 V2 迁移带来的 UI/功能回归问题占比较高）
- PR 更新：63 条（包含大量由 `github-actions[bot]` 自动生成的 bug 修复 PR）
- 新版本发布：3 个

---

### 2. 版本发布
项目近期发布了一个内部测试版和两个 CLI 更新，持续完善自动化部署与交互体验：
- **[desktop-canary](https://github.com/superset-sh/superset/releases/tag/desktop-canary)**: 桌面版 Canary 测试版，基于 `main` 分支自动构建，主要用于内部高压测试。
- **[cli-v0.2.16](https://github.com/superset-sh/superset/releases/tag/cli-v0.2.16)**: CLI 正式更新，引入全局命令面板，修复了 teardown shell 退出指令，并移除了废弃的 `device.heartbeat` tRPC 路由。
- **[cli-latest](https://github.com/superset-sh/superset/releases/tag/cli-latest)**: 最新 CLI 的滚动指针，指向 `cli-v0.2.16`。

---

### 3. 重点 Issues
今日的 Issues 集中暴露了 V2 迭代期的几处痛点，涉及工作区管理、终端交互及离线可用性：

- **V1 迁移 V2 的功能回归与 UI 缺陷**
  - 侧边栏误删主工作区后无法恢复：[#4523](https://github.com/superset-sh/superset/issues/4523)
  - Git worktree 删除失败导致状态死锁：[#4521](https://github.com/superset-sh/superset/issues/4521)
  - V2 丢失单文件 Stage 暂存功能：[#4511](https://github.com/superset-sh/superset/issues/4511)
  - Linux 端因缺少 macOS 权限导致初始化卡死：[#4517](https://github.com/superset-sh/superset/issues/4517)
  - 侧边栏显示错误的已关闭 PR 记录：[#4508](https://github.com/superset-sh/superset/issues/4508)
  - Worktree 之间出现标签页污染：[#4466](https://github.com/superset-sh/superset/issues/4466)

- **Agent 交互与工作流增强提案**
  - 终端内右键集成“使用 Google 搜索”等 Web 操作，降低上下文切换摩擦：[#4507](https://github.com/superset-sh/superset/issues/4507)
  - 提出 `superset://` URL Scheme，支持外部 IDE/脚本向 Agent 会话直接注入上下文：[#4485](https://github.com/superset-sh/superset/issues/4485)

- **核心稳定性问题**
  - 终端执行命令陷入死循环 (v1.9.1)：[#4487](https://github.com/superset-sh/superset/issues/4487)
  - 剥离网络依赖的诉求：无网环境下客户端基本不可用：[#4484](https://github.com/superset-sh/superset/issues/4484)

---

### 4. 关键 PR 进展
研发团队与自动化工作流正在高效解决 V2 的架构打磨和遗留问题：

- **Agent 交互与核心渲染稳定性**
  - **[#4500](https://github.com/superset-sh/superset/pull/4500)**: 修复桌面端渲染进程压力退化问题，增强重度工作区切换、Git 处理及终端高负载场景下的鲁棒性。
  - **[#3020](https://github.com/superset-sh/superset/pull/3020)**: 解决 AI 流式输出时对话列表滚动重置跳顶的关键体验问题。
  - **[#4499](https://github.com/superset-sh/superset/pull/4499)**: 修复 Host Service 在 Canary 环境下因版本时间戳漂移导致的非预期 SIGTERM 中断。

- **系统集成与自动化修复**
  - **[#4530](https://github.com/superset-sh/superset/pull/4530) & [#4528](https://github.com/superset-sh/superset/pull/4528)**: 修复 Slack Connect 跨工作区路由错误，并在 Mention 事件中增加原始 Payload 日志以辅助诊断。
  - **[#4518](https://github.com/superset-sh/superset/pull/4518)**: 修复跨平台兼容性，绕过 Linux 环境下对 macOS 专有权限检查的依赖。
  - **[#4525](https://github.com/superset-sh/superset/pull/4525) & [#4522](https://github.com/superset-sh/superset/pull/4522)**: 机制修复，恢复误删的主线工作区及清除卡死的 `deletingAt` 状态。

- **用户体验优化**
  - **[#4512](https://github.com/superset-sh/superset/pull/4512)**: 恢复 V2 Changes 面板中的单文件 `Stage/Unstage` 操作。
  - **[#4510](https://github.com/superset-sh/superset/pull/4510)**: 优化多工作区层级视觉展示，并增加终端对 CJK（中日韩）字符的回退字体支持。
  - **[#4506](https://github.com/superset-sh/superset/pull/4506)**: 由 Claude Code 驱动的自动化文档同步更新。

---

### 5. 为什么这个项目在 Agent 编排生态中值得关注
1. **重定义“人机协同”的 IDE 边界**：Superset 正在将 AI Agent 从单纯的对话框/命令行工具，演变为底层 OS 级别的系统集线器。通过解决多工作区管理、多标签状态流转和跨应用嵌入，它为 Agent 提供了一个结构化的操作沙箱。
2. **构建无缝的上下文输入管道**：诸如 `superset://` URL Scheme 的提案 ([#4485](https://github.com/superset-sh/superset/issues/4485)) 展现了项目在**外部工具联动**上的野心，这允许外部脚本或浏览器动作直接作为上下文输入喂给 Agent，极大提升了自动化编排的灵活性。
3. **深度集成的开发工作流优化**：项目正在将 AI 深度融入 Git Flow（诸如精确到分支级别的 PR 状态绑定、Worktree 管理），这意味着 Agent 编排正在跨越“写代码”的单一维度，向“管理代码仓库生命周期”的上层编排跃迁。

</details>

<details>
<summary><strong>T3Code</strong> — <a href="https://github.com/pingdotgg/t3code">pingdotgg/t3code</a></summary>

# AI Agent 编排日报：T3Code 项目动态 (2026-05-14)

## 1. 今日速览
过去 24 小时内，[T3Code (pingdotgg/t3code)](https://github.com/pingdotgg/t3code) 保持了高强度的开发迭代。项目新增了 3 个夜间版本，处理了 13 个 Issues（主要涉及跨平台兼容性和 Agent 状态同步），合并或推进了 21 个 PRs。核心开发团队（包括 juliusmarminge 和 justsomelegs）及 cursor[bot] 集中优化了 Provider 兼容性映射、Agent 会话生命周期管理以及长会话流式传输性能。

## 2. 版本发布
项目连续发布了 3 个 `v0.0.24-nightly` 版本，主要聚焦于底层架构和 UI 交互优化：

*   **v0.0.24-nightly.20260513.277**：底层代码提交，无关联 PR。
    [Full Changelog](https://github.com/pingdotgg/t3code/compare/v0.0.24-nightly.20260513.276...v0.0.24-nightly.20260513.277)
*   **v0.0.24-nightly.20260513.276**：修复 Provider 更新弹窗溢出屏幕的问题。
    [PR #2669](https://github.com/pingdotgg/t3code/pull/2669) | [Full Changelog](https://github.com/pingdotgg/t3code/compare/v0.0.24-nightly.20260513.273...v0.0.24-nightly.20260513.276)
*   **v0.0.24-nightly.20260513.273**：重构编辑器启动机制（改用 Effect 子进程），优化聊天时间轴重渲染问题，并重构了 Composer 的 refs 和上下文提供者。

## 3. 重点 Issues
今日的 Issue 集中在 Agent 运行环境的兼容性及运行时状态死锁问题：

*   **[高优先级] Agent 状态不同步**：底层 CLI 已完成响应，但 T3 Code UI 持续显示 `working...`，暴露出编排层与底座进程的事件轮询缺陷。
    [Issue #2644](https://github.com/pingdotgg/t3code/issues/2644)
*   **[高热度] WSL 运行环境支持**：社区呼吁在 Windows 原生与 WSL 之间建立无缝的 Agent 运行环境切换机制（👍 104）。
    [Issue #192](https://github.com/pingdotgg/t3code/issues/192)
*   **底层 Provider 兼容性崩溃**：混合版 Effect 依赖导致 `npx t3` 启动崩溃；SSH 环境下 Codex provider 解析 `sessionId` 失败。
    [Issue #2667](https://github.com/pingdotgg/t3code/issues/2667) | [Issue #2668](https://github.com/pingdotgg/t3code/issues/2668)
*   **macOS 性能异常**：应用开启数秒后出现高 CPU 占用，疑似与主机电源状态监控或心跳轮询逻辑有关。
    [Issue #2646](https://github.com/pingdotgg/t3code/issues/2646)

## 4. 关键 PR 进展
今日的 PR 反映了 T3Code 正在构建企业级 Agent 编排所需的核心容错与兼容机制：

*   **Provider 兼容性映射 ([PR #2642](https://github.com/pingdotgg/t3code/pull/2642))**：引入了 Provider 兼容性咨询契约（包含 supported/broken/graceful 状态及严重级别），为异构 AI 模型接入提供了标准化的版本容错基线。
*   **Agent Turn 生命周期修复 ([PR #2666](https://github.com/pingdotgg/t3code/pull/2666))**：深度重构了 Provider 会话状态协调机制。将 `turn.completed` 事件作为生命周期终点，修复了由于中断、停止失败或服务重启导致的 Agent 会话状态卡死（解决 Issue #2644）。
*   **主机电源与后台活动策略 ([PR #2679](https://github.com/pingdotgg/t3code/pull/2679))**：引入共享后台活动策略，结合客户端租约、作用域需求和主机功耗约束（如 macOS 自适应轮询），优化 Agent 在不同电源状态下的资源调度。
*   **长会话流式降级优化 ([PR #2631](https://github.com/pingdotgg/t3code/pull/2631))**：优化了 Assistant 流式消息的投影逻辑，增量数据直接追加到现有消息，避免在长上下文窗口中触发全量重渲染，大幅改善高负载下的 Agent 响应延迟。
*   **OpenCode 事件路由修复 ([PR #2673](https://github.com/pingdotgg/t3code/pull/2673))**：将 OpenCode 运行时事件从 `/event` 切换至 `/global/event` 并解包负载，修复了多路 Agent 事件流并发时的监听失效问题。

## 5. 为什么在 Agent 编排生态中值得关注
T3Code 正在从一个单纯的 AI Chat 封装器，演进为**具备高度容错能力的本地化 AI Agent 运行时**。

从今日的数据可以看出，项目正在集中攻克 Agent 编排的几个核心痛点：
1. **异构环境适配**：通过 WSL 支持和 Nix flake 等议题，尝试抹平 Windows/macOS/Linux 在底层沙盒运行时的差异。
2. **有状态会话管理**：意识到 LLM 调用不是无状态的 HTTP 请求，而是需严格管理 Turn 生命周期的长连接（PR #2666 的状态机重写）。
3. **资源调度机制**：引入主机电源和后台活动策略（PR #2679），为未来本地多 Agent 并发执行时的算力分配奠定了基础。对于关注本地 Agent 调度层演进的分析师而言，T3Code 底层架构的成熟化是一个非常关键的信号。

</details>

<details>
<summary><strong>Agent Orchestrator</strong> — <a href="https://github.com/ComposioHQ/agent-orchestrator">ComposioHQ/agent-orchestrator</a></summary>

# Agent 编排生态日报：ComposioHQ/agent-orchestrator (2026-05-14)

## 1. 今日速览
过去 24 小时内，`agent-orchestrator` 仓库保持高活跃度。社区与核心团队共处理了 **37 条 Issue**（涵盖跨平台 Bug、状态机逻辑优化及 UI 交互改进）和 **18 条 PR**（聚焦于多 Agent 插件扩展、会话生命周期修复及前端体验优化）。项目整体正处于横向扩展多 CLI Agent 生态、纵向打磨核心会话状态鲁棒性的阶段。

## 2. 版本发布
发布了 1 个正式版和 1 个 Nightly 版，标志着项目在端侧监控和极速上手方面迈出重要一步：

- **[v0.7.0](https://github.com/ComposioHQ/agent-orchestrator/releases/tag/v0.7.0)**：主要引入了用于监控 AO 会话的 React Native 移动端 App（`feat(mobile)`），以及一键项目初始化命令 `ao start <url>`（`feat: add 'ao start <url>'`）。
- **[v0.0.0-nightly-ee2f4256f43ab0edf32a90244e6a5c9ca76ef858](https://github.com/ComposioHQ/agent-orchestrator/releases/tag/v0.0.0-nightly-ee2f4256f43ab0edf32a90244e6a5c9ca76ef858)**：常规夜间构建版本。

## 3. 重点 Issues
今日的 Issues 集中在核心状态机缺陷、外部工具集成以及多端体验一致性上：

- **状态同步与热重载缺陷**：
  - **[#1767](https://github.com/ComposioHQ/agent-orchestrator/issues/1767) [Critical]**：运行时修改 `agent-orchestrator.yaml` 后配置未生效。配置仅在启动时通过 `loadConfig()` 加载一次并缓存在内存中，急需引入 Config hot-reload 机制。
  - **[#1803](https://github.com/ComposioHQ/agent-orchestrator/issues/1803) [Critical]**：仪表盘状态滞后。GitHub 上合并 PR 后，AO Dashboard 仍无限期卡在 `PR open` / `working` 状态，未能转换至 `merged`。
  - **[#1454](https://github.com/ComposioHQ/agent-orchestrator/issues/1454)**：被终止的会话在后续探针检测存活时无法复活，导致前端状态在 `idle → killed → ready` 间闪烁。

- **工具链生态与自动化集成**：
  - **[#1806](https://github.com/ComposioHQ/agent-orchestrator/issues/1806) [OPEN]** 与 **[#1804](https://github.com/ComposioHQ/agent-orchestrator/issues/1804) [enhancement]**：计划开发 Hermes 技能，实现将 Discord 中 NotesBot 的每日通话记录自动解析并同步为 GitHub Issues/PRs 的 follow-up 评论。

- **跨平台及 CLI 体验优化**：
  - **[#1766](https://github.com/ComposioHQ/agent-orchestrator/issues/1766) [High, CLOSED]**：Windows 环境首次执行 `ao start` 无法生成全局 `~/.agent-orchestrator/config.yaml`。
  - **[#1743](https://github.com/ComposioHQ/agent-orchestrator/issues/1743)**：执行 `ao stop → ao update → ao start` 常规更新流后，活跃会话全被标记为 `terminated`，系统未提供恢复提示。
  - **[#1604](https://github.com/ComposioHQ/agent-orchestrator/issues/1604)**：社区呼吁建立与 npm 发布版本对齐的标准化 Changelog 发版规范。

## 4. 关键 PR 进展
今日 PR 的核心主旋律是**插件生态大扩容**及**生命周期管理修复**：

- **多智能体插件矩阵集中合并（Forge-style contract）**：
  核心贡献者 `yyovil` 集中提交了 5 个基于 Forge 样板的新 Agent 插件，将 AO 的兼容性推向更广阔的开源模型生态：
  - **[#1829](https://github.com/ComposioHQ/agent-orchestrator/pull/1829)**：集成 Auggie Agent 插件。
  - **[#1830](https://github.com/ComposioHQ/agent-orchestrator/pull/1830)**：集成 Mistral (`vibe` CLI) Agent 插件。
  - **[#1828](https://github.com/ComposioHQ/agent-orchestrator/pull/1828)**：集成 Crush Agent 插件。
  - **[#1827](https://github.com/ComposioHQ/agent-orchestrator/pull/1827)**：集成 Kiro Agent 插件。
  - **[#1825](https://github.com/ComposioHQ/agent-orchestrator/pull/1825)**：集成 Gemini Agent 插件。

- **生命周期状态机深度修复**：
  - **[#1834](https://github.com/ComposioHQ/agent-orchestrator/pull/1834)**：修复从终止状态恢复会话时未清除 `terminatedAt`/`completedAt` 时间戳的问题，防止还原路径出现脏数据。
  - **[#1833](https://github.com/ComposioHQ/agent-orchestrator/pull/1833)**：前端 UI 渲染逻辑修正，将 `lifecycle.session.state === "terminated"` 设为权威状态源，解决前端状态不一致问题。
  - **[#1737](https://github.com/ComposioHQ/agent-orchestrator/pull/1737)**：优化 `sm.list()` 方法，防止其将 `terminated` 状态持久化到磁盘，确保生命周期管理器是终态的唯一决策者。

- **前端与系统鲁棒性提升**：
  - **[#1823](https://github.com/ComposioHQ/agent-orchestrator/pull/1823)**：优化侧边栏加载逻辑，将首次加载失败与静默刷新失败解耦。
  - **[#1809](https://github.com/ComposioHQ/agent-orchestrator/pull/1809)**：修复缺失全局配置时，项目监督器启动失败导致无生命周期 Worker 运行的致命问题。

## 5. 为什么这个项目在 Agent 编排生态中值得关注
1. **抽象出了标准的智能体运行时契约**：今天大量合并的 Forge-style 插件 PR 证明，AO 正在建立一套超越单一工具（如 Claude Code）的标准 Agent 接入协议。通过统一的检测、启动、活动记录和会话恢复接口，它将多个异构 CLI 智能体无缝编织进同一编排网络。
2. **聚焦解决“多 Agent 并发控制”的工程痛点**：无论是修复状态机死锁（Session terminated 无法恢复）、配置文件热重载，还是解决多端（Web、Mobile、CLI）状态同步不一致的 Bug，项目正在啃下多进程、长生命周期智能体调度中最难啃的工程骨头。
3. **闭环的工作流自动化设计**：从规划将 Discord 语音记录自动转化为 GitHub Follow-up（Hermes 技能），到整合 `ao backlog` 统一视图，AO 已经不仅是会话管理器，而是在构建以 PR/Issue 为驱动的全自动软件开发工作流基座。

</details>

<details>
<summary><strong>1Code</strong> — <a href="https://github.com/21st-dev/1code">21st-dev/1code</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ClawTeam</strong> — <a href="https://github.com/HKUDS/ClawTeam">HKUDS/ClawTeam</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Emdash</strong> — <a href="https://github.com/generalaction/emdash">generalaction/emdash</a></summary>

# Emdash Agent 编排日报摘要 | 2026-05-14

## 1. 今日速览
过去 24 小时内，Emdash 仓库保持高活跃度，无新版本发布，但代码迭代迅速。
- **Issues 更新**：2 条（均为新创建，状态 OPEN）
- **PR 更新**：25 条（11 条 OPEN，14 条 CLOSED）
- **Releases**：0 个

---

## 2. 版本发布
无。

---

## 3. 重点 Issues
1. **tmux 模式不兼容 fish shell**
   - 链接：[#2011](https://github.com/generalaction/emdash/issues/2011)
   - 状态：OPEN | 作者：nicolegros
   - 摘要：启用 tmux 模式后，若默认 shell 为 fish，创建任务时报错 `command substitutions not allowed in command position`。原因是生成的 tmux shell 命令使用了 `(...)` 子 shell 语法，被 fish 解析为命令替换。已有对应修复 PR（#2012）。

2. **Agent 历史记录自动滚动阻碍阅读**
   - 链接：[#2006](https://github.com/emdash/emdash/issues/2006)
   - 状态：OPEN | 作者：jpetot
   - 摘要：Agent 思考或生成响应时，对话视图持续自动滚动至底部，导致用户无法回看早期消息或思考过程的开头。请求在用户主动上滚时阻断自动滚动。

---

## 4. 关键 PR 进展

### 核心功能增强
- **[#2007] 项目切换器模态框（Cmd+E / Ctrl+Tab）**
  - 链接：[PR #2007](https://github.com/generalaction/emdash/pull/2007) | 状态：OPEN | 作者：nicolegros
  - 内容：新增项目快速切换模态框，支持跨项目导航任务，`input-needed` 状态任务置顶排序。

- **[#1993] 工作区处理改进**
  - 链接：[PR #1993](https://github.com/generalaction/emdash/pull/1993) | 状态：CLOSED | 作者：Davidknp
  - 内容：优化任务工作区分配错误处理、工作区状态管理、正确显示 git status，新增文件索引并支持在 cmdk 中搜索文件。

- **[#1978] Fork 工作流的 Git Remote 分离**
  - 链接：[PR #1978](https://github.com/generalaction/emdash/pull/1978) | 状态：CLOSED | 作者：jschwxrz
  - 内容：拆分 `baseRemote`（fetch/PR 同步）与 `pushRemote`（push/publish），支持跨 Remote 创建 PR，更新设置 UI。

- **[#2004] SSH 连接设置页面**
  - 链接：[PR #2004](https://github.com/generalaction/emdash/pull/2004) | 状态：CLOSED | 作者：jschwxrz
  - 内容：新增独立的 SSH 连接配置页面。

- **[#1848] 初始 Prompt 支持图片输入**
  - 链接：[PR #1848](https://github.com/generalaction/emdash/pull/1848) | 状态：OPEN | 作者：janburzinski
  - 内容：创建任务时支持粘贴/拖拽图片到初始 Prompt。

- **[#1999] Linear Issue 上下文增强**
  - 链接：[PR #1999](https://github.com/generalaction/emdash/pull/1999) | 状态：OPEN | 作者：janburzinski
  - 内容：拉取 Linear Issue 的全部子评论，等同于 Linear "Copy Prompt" 按钮功能。

- **[#1976] 基于 Provider Session ID 恢复 Agent**
  - 链接：[PR #1976](https://github.com/generalaction/emdash/pull/1976) | 状态：OPEN | 作者：janburzinski
  - 内容：改善 codex 和 opencode 的会话恢复能力。

### 兼容性与 Bug 修复
- **[#2012] tmux shell 行包装为 /bin/sh 以兼容 fish**
  - 链接：[PR #2012](https://github.com/generalaction/emdash/pull/2012) | 状态：OPEN | 作者：nicolegros
  - 内容：将 `buildTmuxShellLine` 输出包裹在 `/bin/sh -c` 中，解决 fish shell 兼容问题（对应 Issue #2011）。

- **[#2010] / [#2009] 图片 Diff 预览导航修复**
  - 链接：[PR #2010](https://github.com/generalaction/emdash/pull/2010) / [PR #2009](https://github.com/generalaction/emdash/pull/2009) | 状态：CLOSED | 作者：janburzinski
  - 内容：修复图片 Diff 查看器打开后导航被锁定的问题，SVG 文件正确显示为代码 Diff 而非图片 Diff。

- **[#2008] 允许卸载托管 Skills**
  - 链接：[PR #2008](https://github.com/generalaction/emdash/pull/2008) | 状态：CLOSED | 作者：janburzinski
  - 内容：修复 Skills 无法卸载的问题。

### UI/UX 改进
- **[#1991] 终端字体大小控制**
  - 链接：[PR #1991](https://github.com/generalaction/emdash/pull/1991) | 状态：CLOSED | 作者：janburzinski
  - 内容：在设置中增加终端字体大小调整。

- **[#1977] 提高非激活 Tab 对比度**
  - 链接：[PR #1977](https://github.com/generalaction/emdash/pull/1977) | 状态：OPEN | 作者：janburzinski
  - 内容：提升非激活标签页视觉区分度。

- **[#2014] 缩短侧栏 PR Badge 悬停延迟**
  - 链接：[PR #2014](https://github.com/generalaction/emdash/pull/2014) | 状态：CLOSED | 作者：arnestrickmann
  - 内容：侧栏 PR 状态弹窗悬停延迟降至 100ms，提升响应感。

- **[#1989] 支持 Android Studio Canary**
  - 链接：[PR #1989](https://github.com/generalaction/emdash/pull/1989) | 状态：CLOSED | 作者：sergeym-monday
  - 内容：在 "Open In" 列表新增 Android Studio Canary 支持（macOS/Windows/Linux）。

### 其他
- **[#2013] Worktree 清理设置**
  - 链接：[PR #2013](https://github.com/generalaction/emdash/pull/2013) | 状态：OPEN | 作者：janburzinski
  - 内容：新增 worktree 自动清理相关配置。

- **[#1983] 修复 Codex Hook**
  - 链接：[PR #1983](https://github.com/generalaction/emdash/pull/1983) | 状态：OPEN | 作者：janburzinski

- **[#1948] 修复 OpenCode 初始 Prompt 提交**
  - 链接：[PR #1948](https://github.com/generalaction/emdash/pull/1948) | 状态：OPEN | 作者：janburzinski
  - 内容：修复 opencode/amp 场景下初始 Prompt 无法正常提交的问题。

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注

1. **多 Provider/多后端编排能力**：从 PR 活动看，Emdash 同时对接 Codex、OpenCode、Amp 等多个 Agent 后端，通过 Provider Session ID 机制实现跨后端会话恢复，是典型的 Agent 编排层设计。
2. **开发者工作流深度集成**：项目持续集成 Git Remote 分离（Fork 工作流）、SSH 连接管理、Linear Issue 上下文注入、Android Studio 打开支持等功能，定位为将 Agent 嵌入现有开发者工具链的编排枢纽。
3. **多任务工作区管理**：PR #1993 对工作区分配、状态管理、文件索引的系统化改进，以及 Worktree 清理设置（#2013），体现了对 Agent 并发执行环境的管理成熟度提升。
4. **Shell 兼容性投入**：专门修复 tmux + fish 兼容问题（#2012/#2011），说明项目关注非主流开发环境的可用性，这对 CI/CD 管道中 Agent 的稳定运行至关重要。

</details>

<details>
<summary><strong>Collaborator</strong> — <a href="https://github.com/collaborator-ai/collab-public">collaborator-ai/collab-public</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Agent Deck</strong> — <a href="https://github.com/asheshgoplani/agent-deck">asheshgoplani/agent-deck</a></summary>

# Agent 编排日报：Agent Deck 项目摘要 - 2026-05-14

## 1. 今日速览
过去 24 小时内，Agent Deck 项目保持高活跃度。项目新增 2 个版本发布（v1.9.2 和 v1.9.3），产生了 13 条 Issue 更新与 22 条 PR 更新。从 PR 闭合情况来看，核心开发团队与社区贡献者正集中精力修复 TUI 渲染（Bubble Tea 视口与字符宽度）、会话生命周期管理以及 Conductor 集成等核心问题，同时不断扩展对不同 AI Agent 的原生支持。

---

## 2. 版本发布
项目在 24 小时内连续发布两个迭代版本，主要聚焦于稳定性和快速修复：

- **v1.9.3**: [Release v1.9.3](https://github.com/asheshgoplani/agent-deck/releases/tag/v1.9.3)
- **v1.9.2**: [Release v1.9.2](https://github.com/asheshgoplani/agent-deck/releases/tag/v1.9.2)

> **注**: v1.9.2 引入了 `WorkerScratchConfigDir` 的无条件注入，导致 macOS 用户在未指定 `config_dir` 时 OAuth/首次运行引导被重置（已在 v1.9.3 及后续 PR 中定位并修复）。

---

## 3. 重点 Issues (13条)
当前 Open 状态的 Issue 集中在 CI 稳定性、运行时回归及互操作性，核心反馈如下：

### 核心运行时与集成问题
- **#949 [P0/P1 回归]** v1.9.2 导致 macOS OAuth 状态丢失：[Issue #949](https://github.com/asheshgoplani/agent-deck/issues/949)
  - `CLAUDE_CONFIG_DIR` 解析逻辑重构导致每次新建会话都触发 Claude 首次运行引导。
- **#941 [P2]** Telegram 插件全局启用引发重复轮询：[Issue #941](https://github.com/asheshgoplani/agent-deck/issues/941)
  - 在全局配置开启时，每个子进程重复加载插件，导致 409 冲突。
- **#940 [功能请求]** 增加对 charmbracelet/crush 的支持：[Issue #940](https://github.com/asheshgoplani/agent-deck/issues/940)

### CI/CD 与工程化
- **#943 [P2]** 周度回归检查持续失败 5 周以上：[Issue #943](https://github.com/asheshgoplani/agent-deck/issues/943)
- **#947 [P3]** Release 工作流在 CHANGELOG 提交时触发误报：[Issue #947](https://github.com/asheshgoplani/agent-deck/issues/947)

### UX 与 CLI 体验
- **#942 [P3]** `list --json` 未输出解析后的有效配置值：[Issue #942](https://github.com/asheshgoplani/agent-deck/issues/942)

*(已关闭的 TUI 显示 #936, #937 及 Conductor bridge #920, #921 等问题均在本次 PR 中得到了相应修复)*

---

## 4. 关键 PR 进展 (22条)
本周期合并和提交的 PR 覆盖了多 Agent 支持、Spawn/Hook 生命周期、TUI 体验优化等关键维度：

### Agent 扩展与生命周期修复
- **#951 [Open]** 增加 Hermes Agent 支持并统一所有 6 类 Agent 的 `command/env_file` 覆盖配置：[PR #951](https://github.com/asheshgoplani/agent-deck/pull/951)
- **#950 [Open]** 修复 macOS OAuth 回归，限制 Worker 暴露目录的注入条件 (Fixes #949)：[PR #950](https://github.com/asheshgoplani/agent-deck/pull/950)
- **#946 [Open]** 统一重启路径并清理孤立 sidecar，修复 Spawn/Hook 生命周期问题 (Fixes #922, #923)：[PR #946](https://github.com/asheshgoplani/agent-deck/pull/946)

### TUI 核心渲染与交互体验
- **#948 [Closed]** 修复缩放/切换时的视口失效及 Emoji+VS16 字符宽度计算引起的行偏移 (Fixes #936, #937)：[PR #948](https://github.com/asheshgoplani/agent-deck/pull/948)
- **#917 [Closed]** 优化 TUI 响应速度，修复单次 `ESC` 键需要双击才生效的延迟问题：[PR #917](https://github.com/asheshgoplani/agent-deck/pull/917)
- **#908 [Closed]** 优化新建会话对话框中 `Ctrl+W` 的路径感知删除逻辑：[PR #908](https://github.com/asheshgoplani/agent-deck/pull/908)

### 工作流、会话管理与 CLI 增强
- **#929 [Closed]** 实现跨配置文件的会话/Conductor/Group 迁移能力：[PR #929](https://github.com/asheshgoplani/agent-deck/pull/929)
- **#934 [Closed]** 支持自定义 Codex 可执行命令路径及 `CODEX_HOME` 配置：[PR #934](https://github.com/asheshgoplani/agent-deck/pull/934)
- **#930 [Closed]** 新增 `--draft` 标志，支持在 CLI 预填充 Prompt 但不自动提交：[PR #930](https://github.com/asheshgoplani/agent-deck/pull/930)
- **#926 [Closed]** 增强 Conductor `bridge.py` 输出解析及非 UTF-8 字符的解码鲁棒性：[PR #926](https://github.com/asheshgoplani/agent-deck/pull/926)

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注？
Agent Deck 正在从一个单纯的“终端多路复用器”演化为一个**标准化的 AI Agent 运行时调度层**：

1. **打破 Agent 厂商锁定**：通过支持 Claude Code、Gemini、Codex、Copilot、OpenCode 以及最新加入的 Hermes，它提供了统一的层来启动、配置和管理不同底层 LLM，避免了工具层碎片化。
2. **解决多 Agent 通讯与调度难题**：项目中的 Conductor 架构、Watchers、Channels 和跨 Profile 迁移等高级特性，直击多个 Agent 实例协同工作时面临的上下文共享和生命周期编排痛点。
3. **硬核底层工程**：项目深入解决了 tmux 控制管道竞态（如 #927 并发控制冲突）、终端转义序列解析、以及基于 Bubble Tea 的复杂 TUI 字符渲染等底层基础设施问题，为上层 AI 应用的稳定运行扫清了障碍。
4. **高度可编程化**：`--draft` 注入、`bridge.py` 集成、外部 crush 互操作支持等，表明该项目致力于提供灵活的 API 与 CLI 矩阵，使其极易被嵌入到更大型的自动化工作流或 CI/CD 管道中。

</details>

<details>
<summary><strong>Mux Desktop</strong> — <a href="https://github.com/coder/mux">coder/mux</a></summary>

# AI Agent 编排生态日报：Mux Desktop (2026-05-14)

## 1. 今日速览
过去 24 小时内，Mux Desktop 代码库呈现高度活跃状态，核心焦点集中在 **多模态工具链（图像生成与编辑）的构建**、**Agent 异步事件唤醒机制** 以及 **依赖项升级**。值得注意的是，今日无新增社区 Issue，绝大部分驱动来自核心开发者及自动化 Bot，显示出项目正处于密集的内部功能迭代期。

- **Issues 更新**: 0 条
- **PR 更新**: 13 条（其中 10 条已关闭，3 条开放中）
- **新版本发布**: 1 个

---

## 2. 版本发布
- **[v0.24.1-nightly.36](https://github.com/coder/mux/releases/tag/v0.24.1-nightly.36)**: 基于 `main` 分支的自动化每日构建版本（构建于 2026-05-13）。包含近期所有图像工具、Bash 监控及上下文重置相关提交。

---

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。当前项目的功能演进主要由核心团队通过 PR 直接推进。

---

## 4. 关键 PR 进展

### 核心编排与监控机制
- **[#3268 feat: add bash monitor wake events](https://github.com/coder/mux/pull/3268)** [OPEN]
  - **价值点**：引入了类似 Claude-Code 的 `wake-on-match` 监控机制。允许后台运行的 Bash 命令通过正则表达式过滤输出，并将匹配到的内容作为“合成唤醒消息”反馈给 Agent。这极大增强了 Agent 在异步长耗时任务中的环境感知和编排自治能力。

### 上下文管理优化
- **[#3285 feat: add context reset soft clear](https://github.com/coder/mux/pull/3285)** [CLOSED]
  - **价值点**：新增 `/clear --soft` 软重置功能。在保留用户可见聊天记录的同时，通过“持久性上下文边界标记”重置发送给 LLM 的上下文、Token 统计等。此功能有效解决了深度 Agent 编排中“上下文溢出”的问题，同时保持了前端交互的连贯性。

### 多模态能力扩展
项目在一天内密集合并了多个 PR，建立了一套完整的、受实验性功能开关控制的图像处理工具链：
- **[#3273 feat: add experimental image generation tool](https://github.com/coder/mux/pull/3273)** [CLOSED]: 奠定基础，增加默认关闭的 OpenAI 图像生成工具。
- **[#3282 feat: add experimental image editing tool](https://github.com/coder/mux/pull/3282)** [CLOSED]: 扩展能力，引入需用户授权的图像编辑工具。
- **[#3280 feat: improve image generation previews](https://github.com/coder/mux/pull/3280)** [CLOSED]: 改进 Transcript UI，提供更丰富的响应式预览卡片和元数据展示。
- **[#3279 fix: gate imagegen skill behind experiment](https://github.com/coder/mux/pull/3279)** [CLOSED]: 优化 Agent 技能路由，确保未开启实验特性时 Agent 不会错误调用相关工具。
- **[#3278 fix: default imagegen model to gpt-image-2](https://github.com/coder/mux/pull/3278)** [CLOSED]: 将底层默认模型升级为 `openai:gpt-image-2`。

### Agent 目标与任务规划
- **[#3277 fix: show finalized completed goal accounting](https://github.com/coder/mux/pull/3277)** [CLOSED]: 修复了目标完成后的 Token 消耗和步数统计展示，确保侧边栏与对话流中的成本核算一致。
- **[#3284 fix: preserve multiline goal prompts](https://github.com/coder/mux/pull/3284)** [CLOSED]: 修复了 `/goal` 指令解析多行 Markdown 时的错误，提升了复杂任务指令注入的稳定性。
- **[#3281 fix: remove sidebar goal target pill](https://github.com/coder/mux/pull/3281)** [CLOSED]: 移除了侧边栏冗余的 UI 标签，优化了移动端显示。

### 基础设施与维护
- **[#3183 chore: bump Vercel AI SDK + providers to latest](https://github.com/coder/mux/pull/3183)** [CLOSED]: 全量升级 `ai` 及相关 provider 至最新大版本，跟进上游 API 变更。
- **[#3283](https://github.com/coder/mux/pull/3283) & [#3276](https://github.com/coder/mux/pull/3276) refactor: auto-cleanup** [OPEN/CLOSED]: 由 `mux-bot` 发起的低风险自动化重构，保持代码库整洁。

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注

作为一款桌面级 AI Agent 运行环境，Mux Desktop 正在从单一的“对话客户端”向“多模态自治工作节点”演进，其架构设计在以下三个方面对 Agent 编排生态具有参考价值：

1. **细粒度的上下文生命周期管理**：通过引入 Soft Clear（#3285）等机制，Mux 将“面向用户的 UI 状态”与“面向 LLM 的推理上下文”进行了物理隔离。这是构建具备长期记忆、且能有效控制 Token 成本的复杂 Agent 编排系统的核心技术解法。
2. **异步环境感知与工具集成**：Bash monitor wake events（#3268）的实现，表明 Mux 正在打破 Agent “请求-响应”的同步阻塞限制。允许 Agent 在挂起等待时被外部系统事件（如后台脚本完成特定输出）主动唤醒，是实现多智能体流水线并行协作的基础。
3. **安全可控的底层工具挂载**：通过 Settings → Experiments 的全局开关与技能路由联动（#3279, #3282），Mux 提供了一种将高风险/高成本能力（如文件系统操作、图像渲染）安全封装为 Agent 可调用工具的范式。

</details>

<details>
<summary><strong>AutoGPT</strong> — <a href="https://github.com/Significant-Gravitas/AutoGPT">Significant-Gravitas/AutoGPT</a></summary>

以下是为您生成的 AutoGPT 项目 2026-05-14 Agent 编排日报摘要：

# 📊 AutoGPT Agent 编排生态日报 (2026-05-14)

## 1. 今日速览
过去 24 小时内，AutoGPT（`Significant-Gravitas/AutoGPT`）项目保持高度活跃，共处理 **5 条 Issues**（3 个新增）和 **30 条 PRs**（混合了新特性和日常维护），并发布了重要的平台测试版。
- **核心焦点**：Copilot 架构与 UX 增强、安全漏洞修复、商业化付费墙拦截机制以及自动化测试基建的完善。

---

## 2. 版本发布
- **[autogpt-platform-beta-v0.6.60](https://github.com/Significant-Gravitas/AutoGPT/releases/tag/autogpt-platform-beta-v0.6.60)**
  - **🔥 Trigger On Anything (PR #12740)**：引入了高度灵活的工作流触发器机制，极大扩展了 Agent 编排的启动条件。
  - **🔥 Slack 深度集成 (PR #13008)**：新增 `SendSlackBlock`，支持直接在 AutoGPT 工作流中向 Slack 发送消息，打通企业内部通讯的集成闭环。

---

## 3. 重点 Issues
- **[#13102] Protect AutoGPT from AI slop PRs**
  - **摘要**：提议安装 GitHub Action（如 PR Quality Gate 和 anti-slop）以自动拦截低质量的 AI 生成 PR。数据显示过去两周有近 7% 的 PR 属于此类，表明该项目正面临日益增长的“AI 垃圾信息”维护成本挑战。
  - **链接**：[Significant-Gravitas/AutoGPT Issue #13102](https://github.com/Significant-Gravitas/AutoGPT/issues/13102)
- **[#13097] Security: OWASP Agent Memory Guard (ASI06)**
  - **摘要**：针对 OWASP 针对大模型应用的 Top 10 漏洞，提出了针对 Agent 持久性记忆（如文件系统、向量库）的防投毒安全防护提案。
  - **链接**：[Significant-Gravitas/AutoGPT Issue #13097](https://github.com/Significant-Gravitas/AutoGPT/issues/13097)

---

## 4. 关键 PR 进展

### 🛠️ 核心架构与产品演进
- **[#13081] [XL] feat(platform): share agent chat results via public link**
  - **摘要**：支持将 Copilot 的聊天记录通过公网链接分享。复用了现有的 execution-share 安全模型，降低了用户分享 Agent 交互过程的门槛。
  - **链接**：[Significant-Gravitas/AutoGPT PR #13081](https://github.com/Significant-Gravitas/AutoGPT/pull/13081)
- **[#12993] [XL] feat(backend/copilot): local-LLM AutoPilot for the no-API-key install**
  - **摘要**：重构了 `ChatConfig`，允许用户在不使用 OpenRouter / Anthropic 等 API Key 的情况下，通过本地 LLM 运行 AutoPilot 模式。极大降低了本地部署和私有化编排的门槛。
  - **链接**：[Significant-Gravitas/AutoGPT PR #12993](https://github.com/Significant-Gravitas/AutoGPT/pull/12993)
- **[#13080] [XL] feat(backend/copilot): require library similarity check before create_agent**
  - **摘要**：在用户通过 CoPilot 生成新 Agent 时，强制加入“库相似度检查”机制，避免生成重复功能的 Agent，从而节省计算资源及用户的 Credit 消耗。
  - **链接**：[Significant-Gravitas/AutoGPT PR #13080](https://github.com/Significant-Gravitas/AutoGPT/pull/13080)

### 🔒 安全防护与商业化合规
- **[#13045] [XL] fix(backend): centralise paywall enforcement on all execute routes**
  - **摘要**：修复了一个严重的商业化漏洞：未订阅用户在前端看到付费墙弹窗，但后端的 AutoPilot 执行和 Block 运行依然能穿透限制。此 PR 统一并收紧了所有执行路由的拦截逻辑。
  - **链接**：[Significant-Gravitas/AutoGPT PR #13045](https://github.com/Significant-Gravitas/AutoGPT/pull/13045)
- **[#12702] [L] fix(backend): add SSRF protection and download limits to VideoDownloadBlock**
  - **摘要**：修复了 `VideoDownloadBlock` 的三个严重安全隐患（无 SSRF 防护、无下载大小限制、无播放列表限制），加强了 Agent 获取外部数据时的沙箱边界。
  - **链接**：[Significant-Gravitas/AutoGPT PR #12702](https://github.com/Significant-Gravitas/AutoGPT/pull/12702)
- **[#13104] [L] Security upgrade next from 15.4.11 to 15.5.18**
  - **摘要**：由 Snyk 自动触发的依赖升级，修复了前端项目中的 13 个安全漏洞。
  - **链接**：[Significant-Gravitas/AutoGPT PR #13104](https://github.com/Significant-Gravitas/AutoGPT/pull/13104)

### 🧪 稳定性与底层优化
- **[#13089] [XL] feat(backend): retire deprecated LLM models with family-aware migration**
  - **摘要**：安全清理底层过时的 LLM 模型枚举。加入了 family-aware 迁移机制，避免因直接删除模型配置导致用户的 Agent 编排图在启动时崩溃。
  - **链接**：[Significant-Gravitas/AutoGPT PR #13089](https://github.com/Significant-Gravitas/AutoGPT/pull/13089)
- **[#13054] [M] fix(platform): unblock e2e seed in E2B sandboxes**
  - **摘要**：修复了 E2B 沙箱中并发创建 RabbitMQ 导致的 `.erlang.cookie` 竞争条件，使端到端测试时间从超时（15分钟+）骤降至 23 秒。
  - **链接**：[Significant-Gravitas/AutoGPT PR #13054](https://github.com/Significant-Gravitas/AutoGPT/pull/13054)

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注？
1. **从“实验性工具”向“企业级 SaaS 平台”演进**：当前的 PR 动向（如完善 Paywall、集成 Slack、增强 Marketplace 管理功能）显示出 AutoGPT 正在加速其商业化闭环建设。
2. **解决多模型时代的“编排痛点”**：通过引入“库相似度查重”(#13080) 和“本地 LLM 零配置接入”(#12993)，AutoGPT 在降低开发者使用门槛的同时，正试图解决多 Agent 爆发带来的资源冗余和管理混乱问题。
3. **极具前瞻性的安全基建**：无论是针对 OWASP Agent 记忆投毒的讨论，还是前端框架的大规模漏洞修复，亦或是阻断无价值 AI 生成代码的提案，都表明该项目在应对 LLM 原生安全威胁方面走在生态前列。

</details>

<details>
<summary><strong>MetaGPT</strong> — <a href="https://github.com/FoundationAgents/MetaGPT">FoundationAgents/MetaGPT</a></summary>

以下是为您生成的 2026-05-14 MetaGPT 项目 Agent 编排日报摘要：

# 🤖 MetaGPT 项目日报 (2026-05-14)

## 1. 今日速览
过去 24 小时内，MetaGPT（[FoundationAgents/MetaGPT](https://github.com/FoundationAgents/MetaGPT)）仓库共处理了 **2 条 Issues** 和 **6 条 Pull Requests**，**无新版本发布**。今日的动态呈现出明显的两极分化：在安全性方面，社区接连抛出两个高危级别的核心架构漏洞；而在代码维护方面，主要以文档和注释的拼写错误修复为主。

## 2. 版本发布
**无**。今日无最新 Releases 或 Tags 更新。

## 3. 重点 Issues
今日新增两个重要的安全漏洞报告，均由用户 ASUKA39 提交。这两个漏洞直接威胁 Agent 编排过程中的底层执行安全，需官方团队重点关注与修复：

*   **[Security] 反序列化导致远程代码执行 (RCE)** ([#2038](https://github.com/FoundationAgents/MetaGPT/issues/2038))
    *   **摘要**：`metagpt/schema.py` 中的 `Message.check_instruct_content()` 方法在处理 `"mapping"` 分支时，将未经验证的字符串传给 `actionoutput_str_to_mapping()`，该函数内部直接使用了不安全的 `eval(...)`。在多Agent协同编排中，如果恶意 Agent 注入恶意的 `instruct_content` 数据，将导致宿主机直接执行任意代码。
*   **[Security] Mermaid 渲染路径导致命令注入** ([#2037](https://github.com/FoundationAgents/MetaGPT/issues/2037))
    *   **摘要**：MetaGPT 支持通过 `config.yaml` 中的 `mermaid.path` 字段配置 Mermaid CLI 可执行文件。由于该值在后续流程中被作为原始字符串传递给基于 Shell 的执行环境，攻击者可通过篡改配置文件实现命令注入。

## 4. 关键 PR 进展
今日共有 6 个 PR 更新，均由贡献者 [otjdiepluong](https://github.com/otjdiepluong) 提交，**全部为文档/注释级别的拼写修复**，不涉及任何运行时逻辑变动：

*   [#2044](https://github.com/FoundationAgents/MetaGPT/pull/2044) - 修复无障碍树工具 (`a11y_tree.py`) 中的注释拼写错误 (`occurence` → `occurrence`)
*   [#2043](https://github.com/FoundationAgents/MetaGPT/pull/2043) - 修复特殊令牌 (`special_tokens.py`) 注释拼写错误 (`seperate` → `separate`)
*   [#2042](https://github.com/FoundationAgents/MetaGPT/pull/2042) - 修复特殊令牌相关注释拼写错误
*   [#2041](https://github.com/FoundationAgents/MetaGPT/pull/2041) - 修复 Provider/SWE-agent 辅助代码注释拼写错误 (`exmaple` → `example`)
*   [#2040](https://github.com/FoundationAgents/MetaGPT/pull/2040) - 修复斯坦福小镇记忆模块 (`scratch.py`) 注释拼写错误 (`teh` → `the`)
*   [#2039](https://github.com/FoundationAgents/MetaGPT/pull/2039) - 修复提示词中的重复单词

## 5. 为什么这个项目在 Agent 编排生态中值得关注
MetaGPT 是当前 AI Agent 编排领域的标杆级开源框架，其核心在于通过 **SOP（标准操作流程）驱动** 的多智能体协同，将复杂的软件开发等任务拆解并分配给不同角色的 Agent（如产品经理、架构师、工程师等）。

结合今日的数据，该项目在生态中具有以下显著的观察点：
1. **数据流转的安全边界正在受到挑战**：Issue #2038 暴露出的 `eval()` 函数滥用问题，是多 Agent 框架在处理复杂消息路由和信息序列化时的通病。在构建基于 MetaGPT 的自动化工作流时，开发者必须关注 Agent 间传递消息的沙箱隔离与数据校验。
2. **生态建设的两面性**：今日的单方面文档修复 PR 突显了开源社区对提升代码可读性的贡献（特别是针对 Stanford Town 等复杂认知架构模块）；但同时也暴露出漏洞修复与功能迭代需要进一步提速。MetaGPT 的强大在于其深度的角色扮演和全局记忆池设计，这也要求其在代码执行和配置解析层面具备企业级的安全健壮性。

</details>

<details>
<summary><strong>AutoGen</strong> — <a href="https://github.com/microsoft/autogen">microsoft/autogen</a></summary>

以下是为您生成的 AutoGen 项目 2026-05-14 Agent 编排日报摘要：

# 🤖 AutoGen 开源生态日报 (2026-05-14)

## 1. 今日速览
过去 24 小时内，AutoGen 仓库共处理了 **4** 条 Issue 更新和 **8** 条 Pull Request 更新，无新版本发布。从社区动态来看，当前生态呈现出两大明显趋势：一是企业级生产环境对**Agent 安全、审计与治理**的需求激增；二是社区正积极补齐多智能体底层编排能力（如组聊状态获取与沙箱执行）。

---

## 2. 版本发布
- **无新版本发布**。

---

## 3. 重点 Issues
今日的 Issue 集中在 Agent 企业级应用的高级痛点：经济系统与安全防御。

- **企业级加密行动收据审计** | [Issue #7353](https://github.com/microsoft/autogen/issues/7353)
  - **核心诉求**：提议引入加密证明机制，用于企业级部署中验证 Agent 的指令、具体执行动作以及数据消费轨迹，弥补传统日志缺乏不可篡改性的缺陷。
  - **生态意义**：Agent 编排从单纯的“任务流转”向“合规可审计”迈进的关键探讨。

- **多智能体支付原语与商业化集成** | [Issue #7492](https://github.com/microsoft/autogen/issues/7492) & [Issue #7564](https://github.com/microsoft/autogen/issues/7564)
  - **核心诉求**：探讨自主 Agent 在采购、研究等生产场景中，如何自主进行雇佣、结算和支付。目前社区仍缺乏标准化的经济事务协议。
  - **生态意义**：揭示了 Agent-to-Agent (A2A) 商业化网络的底层需求，编排框架未来可能需要内置支付与结算网关。

- **OWASP Agent 记忆防毒保护** | [Issue #7683](https://github.com/microsoft/autogen/issues/7683)
  - **核心诉求**：建议在安全文档中引入 OWASP Top 10 中的 ASI06（记忆投毒）防御指南，保护带有持久化记忆的 AutoGen Agent 免受恶意注入。

---

## 4. 关键 PR 进展
今日 PR 活动主要集中在**组聊状态控制**、**执行器安全加固**以及**多语言文档规范化**。

- **新增 `get_thread()` 组聊消息历史 API** 
  - [PR #7649](https://github.com/microsoft/autogen/pull/7649) | [PR #7685](https://github.com/microsoft/autogen/pull/7685) | [PR #7684](https://github.com/microsoft/autogen/pull/7684)
  - **进展**：社区开发者集中提交了针对 `BaseGroupChat` 的增强，允许外部代码在不终止团队运行的情况下，通过 RPC 协议（`GroupChatGetThread` / `GroupChatThreadResponse`）异步检索当前的消息线程。
  - **生态意义**：大幅提升了复杂工作流中对中间状态的观测能力和编排的灵活性。

- **本地代码执行器沙箱机制** | [PR #7611](https://github.com/microsoft/autogen/pull/7611)
  - **进展**：为 `LocalCommandLineCodeExecutor` 引入了可选的 `sandbox` 参数。针对无法部署 Docker 的环境，提供了基于环境变量清洗和资源限制的最佳努力进程加固方案。

- **Docker Jupyter 执行器编码修复** | [PR #7666](https://github.com/microsoft/autogen/pull/7666)
  - **进展**：强制在 `_save_html()` 中使用 UTF-8 编码，修复了非英文 Windows 环境下的 `UnicodeDecodeError` 崩溃问题。

- **文档与规范修复** 
  - .NET LM Studio 文档向新 API 迁移更新：[PR #7679](https://github.com/microsoft/autogen/pull/7679)
  - Python 文档重复词及拼写错误修复：[PR #7690](https://github.com/microsoft/autogen/pull/7690), [PR #7689](https://github.com/microsoft/autogen/pull/7689)

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注？
作为微软主导的顶流 Agent 框架，AutoGen 目前正处于**从“实验性多智能体对话框架”向“企业级自主工作流基础设施”演进**的关键节点。

从今日的数据可以明确看出：
1. **架构下沉与可控性增强**：频繁的 `get_thread()` PR 提交表明，社区在倒逼框架提供更细粒度的生命周期管理 API，这是复杂业务编排的刚需。
2. **直面 Agent 经济学**：Issues 中关于支付原语和 A2A 商业化的高频讨论（累计 36+ 条评论），证明 AutoGen 社区正在为未来的“自主外包”和“Agent 经济”探索标准协议。
3. **安全与合规先行**：无论是引入加密收据还是对抗 OWASP 记忆投毒，AutoGen 在安全治理维度的探索领先于多数竞品，这是其叩开大型企业大门的核心筹码。

</details>

<details>
<summary><strong>GPT-Engineer</strong> — <a href="https://github.com/AntonOsika/gpt-engineer">AntonOsika/gpt-engineer</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LlamaIndex</strong> — <a href="https://github.com/run-llama/llama_index">run-llama/llama_index</a></summary>

以下是为您生成的 LlamaIndex 2026-05-14 Agent 编排日报摘要：

### 1. 今日速览
过去 24 小时内，LlamaIndex 仓库共处理了 **4** 条 Issues 和 **17** 条 Pull Requests，无新版本发布。从活动焦点来看，核心开发者与社区正集中精力修复多云/多模型后端的兼容性（特别是 Vertex AI、vLLM、DeepSeek V4 和 Bedrock），并持续增强代码执行安全性与工作流编排底层的稳定性。

### 2. 版本发布
**无**（过去 24 小时内未发布新版本）。

### 3. 重点 Issues
*   **[Bug] Vertex AI 大文件上传报错隐晦**：使用 `google_genai` 配合 Vertex AI 客户端上传大于 20MB 的文件时，由于 Google 底层 API 限制，会抛出难以理解的错误信息。
    *链接*: [run-llama/llama_index Issue #21639](https://github.com/run-llama/llama_index/issues/21639)
*   **[Bug] AWS Bedrock 新模型支持滞后**：用户反馈 AWS Bedrock 提供的 OpenAI OSS 和 Qwen 模型因硬编码设置而无法在 LlamaIndex 中顺利使用，导致项目受阻。
    *链接*: [run-llama/llama_index Issue #21636](https://github.com/run-llama/llama_index/issues/21636)
*   **[Enhancement] OpenAILike 类需支持 `extra_body` 参数**：为了适配 DeepSeek V4 模型（如传递 `{"thinking": {"type": "disabled"&#125;&#125;` 等配置），社区呼吁在 `OpenAILike` 中直接支持 `extra_body` 传参。
    *链接*: [run-llama/llama_index Issue #21634](https://github.com/run-llama/llama_index/issues/21634)
*   **[Proposal] 防御 AI 生成的低质量 PR**：建议引入 GitHub Action（PR Quality Gate / anti-slop），通过代码质量审查自动拦截由 AI 生成的垃圾 Pull Requests。
    *链接*: [run-llama/llama_index Issue #21632](https://github.com/run-llama/llama_index/issues/21632)

### 4. 关键 PR 进展
*   **[Merged/Closed] 修复 vLLM 推理字段兼容性**：修复了 vLLM >= 0.20.x 提供 Qwen3 系列模型时，Chain-of-Thought 字段通过 `reasoning` 而非 `reasoning_content` 返回导致思考轨迹丢失的问题，保障了 Agent 编排中推理节点的正常运作。
    *链接*: [run-llama/llama_index PR #21630](https://github.com/run-llama/llama_index/pull/21630)
*   **[Open] feat(bedrock-converse): 支持 Claude 模型思考过程展示**：为 Claude Opus 4.7 等模型的 Adaptive/Extended thinking 功能添加了 `thinking display` 控制，完善了 Agent 推理过程的可观测性。
    *链接*: [run-llama/llama_index PR #21592](https://github.com/run-llama/llama_index/pull/21592)
*   **[Open] feat: OpenAILike 集成 extra_body 支持**：响应 Issue #21634，允许直接向 OpenAILike 传递 `extra_body` 参数，改善国产/第三方类 OpenAI 接口模型的接入体验。
    *链接*: [run-llama/llama_index PR #21635](https://github.com/run-llama/llama_index/pull/21635)
*   **[Open] fix: 阻止 evaporate 沙箱中的危险属性访问**：通过验证 LLM 生成的 AST 节点，拦截对双下划线（dunder，如 `__import__`）的格式化字段访问，堵住了潜在的系统安全漏洞。
    *链接*: [run-llama/llama_index PR #21633](https://github.com/run-llama/llama_index/pull/21633)
*   **[Open] docs: 澄清 Workflow Agent 工具的自动包装机制**：完善文档说明，明确 `FunctionAgent` 和 `ReActAgent` 会自动将原生 Python 函数包装为 `FunctionTool`，降低开发者的编排心智负担。
    *链接*: [run-llama/llama_index PR #21481](https://github.com/run-llama/llama_index/pull/21481)

### 5. 为什么这个项目在 Agent 编排生态中值得关注
作为顶级的 Agent 编排与数据框架，LlamaIndex 今天的动态反映了其保持生态活力的两个核心竞争力：
1.  **异构模型接入与收敛能力**：通过快速响应 DeepSeek V4、vLLM Qwen3 以及 Bedrock 最新模型的变化（支持 `extra_body`、修复 `reasoning` 字段丢失），它确保了开发者在构建 Agent 时，后端 LLM 的切换和混用保持即插即用且无缝兼容。
2.  **工程安全与鲁棒性建设**：动态修复正则表达式的“灾难性回溯”（PR #21640）、增强 LLM 动态代码执行沙箱的安全防御（PR #21633），以及优化底层数据抽取逻辑，这些动作表明项目正在深入解决大模型落地 Agent 场景时的系统性工程痛点，而不仅仅是停留在 API 封装层面。

</details>

<details>
<summary><strong>CrewAI</strong> — <a href="https://github.com/crewAIInc/crewAI">crewAIInc/crewAI</a></summary>

# Agent 编排日报摘要：CrewAI
**日期**：2026-05-14 | **数据源**：[crewAIInc/crewAI](https://github.com/crewAIInc/crewAI)

---

### 1. 今日速览
过去 24 小时内，CrewAI 仓库保持高度活跃，无新版本发布，但底层架构与安全生态正在快速迭代。社区共更新 **10 条 Issues** 和 **22 条 PRs**。
核心动态集中在三个方面：**Valkey 向量存储后端的落地与修补**、**Agent 安全与信任机制增强**、以及**核心类结构的重构**。多位开发者和外部协议方提交了关于 MCP 工具、沙箱执行和信任网络等企业级特性的集成请求。

### 2. 版本发布
**无新版本发布**。当前项目处于功能密集开发和测试阶段，未发布新的 Release。

### 3. 重点 Issues
今日的 Issues 充分反映了生产环境下对 Agent 安全、外部工具交互和底层存储的需求：

- **安全与治理层呼声渐高**：
  - **[#4877](https://github.com/crewAIInc/crewAI/issues/4877) [OPEN]**: 提议引入 `GuardrailProvider` 接口，用于在工具调用前进行权限验证（Pre-tool-call authorization）。该票已积累 42 条讨论，是近期核心治理特性。
  - **[#5789](https://github.com/crewAIInc/crewAI/issues/5789) [OPEN]**: 提议增加行为信任评分层，用于在 Agent/MCP Server 执行敏感操作前评估信任等级。
  - **[#5762](https://github.com/crewAIInc/crewAI/issues/5762) & [#5793](https://github.com/crewAIInc/crewAI/issues/5793) [CLOSED]**: 开发者提交了关于集成 OWASP Agent Memory Guard 的提案，旨在防御 Agent 长期记忆池遭遇的“记忆投毒”攻击。

- **外部协议与集成意向**：
  - **[#5790](https://github.com/crewAIInc/crewAI/issues/5790) [OPEN]**: AIGEN 协议提交了基于 Base 和 Optimism 链的 AI Agent 开源赏金协议集成请求。
  - **[#5786](https://github.com/crewAIInc/crewAI/issues/5786) [CLOSED]**: 提议集成 Joy 信任网络，以解决 Crew 与未知外部 Agent 交互时的问责追踪问题。

- **存储与验证缺陷**：
  - **[#5795](https://github.com/crewAIInc/crewAI/issues/5795) & [#5794](https://github.com/crewAIInc/crewAI/issues/5794) [OPEN]**: 自动化机器人发现 Valkey 存储的 `metadata_filter` 在进行向量搜索时，引用了未被 FT 索引的字段。

### 4. 关键 PR 进展
PR 动态展示了项目正在向更健壮的多沙箱、多存储后端和支持更复杂推理模型的方向演进：

- **核心架构演进**：
  - **[#5788](https://github.com/crewAIInc/crewAI/pull/5788) [OPEN]**: 核心 maintainer `joaomdmoura` 提交了重构版的 Agent 类，引入了 TUI (终端 UI)、benchmark 机制，并改变了 `train`/`test` 的行为模式，这是底层执行流的一次大动作重构。

- **新增沙箱执行环境支持**：
  - **[#5756](https://github.com/crewAIInc/crewAI/pull/5756) & [#5755](https://github.com/crewAIInc/crewAI/pull/5755) [OPEN]**: 引入对 OpenSandbox（CNCF 托管、基于 K8s/Docker 的隔离沙箱）的支持，增强 Agent 在隔离环境中执行代码的安全性与原生能力。

- **Valkey 存储矩阵的最后拼图**：
  - **[#5703](https://github.com/crewAIInc/crewAI/pull/5703) [OPEN]**: 实现 Valkey 存储后端核心向量存储（Part 4/4）。
  - **[#5797](https://github.com/crewAIInc/crewAI/pull/5797) & [#5796](https://github.com/crewAIInc/crewAI/pull/5796) [OPEN]**: 针对前文提到的 Issue #5794/#5795，Devin AI 和开发者迅速提交了补丁，将 `metadata_filter` 移出 FT 索引，改为后置过滤以修复查询错误。

- **多模态与推理模型兼容性修复**：
  - **[#5799](https://github.com/crewAIInc/crewAI/pull/5799) [OPEN]**: 修复了将不支持的文本文件注入 LLM 消息导致的报错，确保其通过 `read_file` 工具流转，保护了非视觉模型的稳定性。
  - **[#5748](https://github.com/crewAIInc/crewAI/pull/5748) [OPEN]**: 修复对 OpenRouter 推理模型（如 Claude 3.5 Sonnet 等）的兼容性，确保包含 `reasoning_content`（思维链）的响应能被正确解析，而非返回空字符串。

### 5. 为什么这个项目在 Agent 编排生态中值得关注
从今日的数据可以看出，CrewAI 正在完成从“开发者体验优先的快速原型工具”向“企业级高并发安全调度框架”的跨越：
1. **严密的执行隔离与安全防线**：从 OpenSandbox 沙箱工具的接入，到针对 Pre-tool-call 的权限控制 和防范“记忆投毒”机制，项目正在构建生产级 Agent 必备的安全信任边界。
2. **强化多模态与底层推理支持**：积极适配主流高阶推理模型（如 OpenRouter 的 CoT 输出格式），同时重构内部输入验证（如 BaseModel 转换及非多模态文件过滤），确保其在复杂任务流中的执行鲁棒性。
3. **可扩展的异构存储基建**：社区正在密集攻坚 Valkey 作为 Redis 替代方案的向量与缓存存储体系，并同步推进自定义 Memory Prompt 配置（[#5330](https://github.com/crewAIInc/crewAI/pull/5330)），这表明该项目正在为大规模 Agent 集群的长期记忆管理与快速检索做底层储备。

</details>

<details>
<summary><strong>Agno</strong> — <a href="https://github.com/agno-agi/agno">agno-agi/agno</a></summary>

# Agno (agno-agi/agno) Agent 编排日报摘要 - 2026-05-14

## 1. 今日速览
过去 24 小时内，Agno 生态保持了高度活跃的研发节奏。社区共提交了 **13 个 Issues**（以 Bug 报告和安全漏洞为主）和 **36 个 PR**。项目核心团队正将重心放在 **AgentOS 的企业级安全特性（数据隔离、SSRF 防护、JWT 鉴权）** 以及 **异步架构（Async Redis）的深度改造**上。

---

## 2. 版本发布
今日无新版本发布。

---

## 3. 重点 Issues (Top Issues)
当前社区聚焦于数据库安全漏洞、核心工具逻辑缺陷及多 Agent 状态管理问题：

*   **高危安全漏洞：ClickHouse SQL 注入**
    在 ClickHouse 向量数据库后端中，`delete_by_metadata` 方法使用 f-string 直接插值用户控制的元数据，可能导致任意数据删除或信息泄露。
    👉 [agno-agi/agno Issue #7866](https://github.com/agno-agi/agno/issues/7866)
*   **核心逻辑缺陷：工具参数被意外去除空白符**
    `get_function_call` 辅助函数对所有字符串参数强制执行 `.strip()`，破坏了依赖换行符等空白字符的工具（如代码生成或格式化工具）的正常运行。
    👉 [agno-agi/agno Issue #7871](https://github.com/agno-agi/agno/issues/7871)
*   **Team HITL 状态管理混乱**
    在多 Agent 团队运行中，当同时存在 Team 级别和 Member 级别的人机交互 (HITL) 时，系统会保留过时的请求并丢失成员执行结果。
    👉 [agno-agi/agno Issue #7864](https://github.com/agno-agi/agno/issues/7864)
*   **异步架构瓶颈请求：Async Redis 数据库适配器**
    当前的同步 `RedisDb` 在异步 Agent/Team 中执行时会阻塞事件循环。社区呼吁实现 `AsyncRedisDb` 以彻底解决异步上下文中的阻塞 I/O 问题。
    👉 [agno-agi/agno Issue #7910](https://github.com/agno-agi/agno/issues/7910)
*   **安全防御增强提议：集成 OWASP Agent Memory Guard**
    建议集成 OWASP 的参考实现，以防御针对 LLM Agent 的内存污染攻击 (ASI06)。
    👉 [agno-agi/agno Issue #7901](https://github.com/agno-agi/agno/issues/7901)

---

## 4. 关键 PR 进展 (Key PRs)
今日的 PR 生动展现了 Agno 在“动态编排”和“企业级安全”两个维度的快速演进：

*   **[架构重构] 动态工作流步骤生成与多 Agent 动态派发**
    支持工作流在运行时动态生成步骤，以及允许 Team Leader 在执行过程中即时创建具有特定指令的专家 Agent 并分配任务。这将极大增强编排的灵活性。
    👉 [agno-agi/agno PR #7909](https://github.com/agno-agi/agno/pull/7909) | [PR #7907](https://github.com/agno-agi/agno/pull/7907)
*   **[企业级安全] SSRF 防御与 JWT 声明映射**
    修复了知识库读取器中的 SSRF 漏洞，为 AgentOS 增加了 `allowed_hosts` 防护；同时在 `AuthorizationConfig` 中暴露了 JWT claim 映射，完善企业级身份验证链路。
    👉 [agno-agi/agno PR #7892](https://github.com/agno-agi/agno/pull/7892) | [PR #7905](https://github.com/agno-agi/agno/pull/7905)
*   **[性能优化] Async Redis 适配器落地**
    提供了 `RedisDb` 的完全异步对应版本 `AsyncRedisDb`，彻底解决了异步 Agent 使用 Redis 作为存储后端时的阻塞问题。
    👉 [agno-agi/agno PR #7908](https://github.com/agno-agi/agno/pull/7908)
*   **[安全修复] ClickHouse SQL 注入补丁**
    使用绑定参数和正则校验修复了 Issue #7866 中的 f-string SQL 注入漏洞。
    👉 [agno-agi/agno PR #7899](https://github.com/agno-agi/agno/pull/7899)
*   **[敏捷修复] 空会话崩溃与空白符丢失**
    修复了 Session 反序列化时 `runs=[]` 导致的崩溃（MCP 元数据丢失问题）；修正了 `get_function_call` 强行剥离参数空白符的行为。
    👉 [agno-agi/agno PR #7902](https://github.com/agno-agi/agno/pull/7902) | [PR #7896](https://github.com/agno-agi/agno/pull/7896)

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注？
从今日的开发活动可以看出，Agno 已经跨越了“单 Agent 调用封装”的初级阶段，正在向**生产级的分布式 AI 智能体系统**演进：
1.  **深水区架构探索**：社区开始解决复杂的异步并发、动态工作流生成和嵌套 HITL（人机交互）状态管理问题，这是多数编排框架尚未触及的难点。
2.  **直面企业级安全合规**：密集的 SQL 注入修复、SSRF 防御、API 敏感配置屏蔽以及 OWASP Memory Guard 的集成，表明该项目正在为真正的企业级落地（多租户、数据隔离、防护注入攻击）做基础设施级别的准备。
3.  **强大的开源护城河**：单日 36 个 PR 的高吞吐量，且大量关键特性（如 Async Redis、SSRF 修复）由社区 First-time contributor 驱动，显示出其开源飞轮已健康运转，具备极强的迭代敏捷性。

</details>

<details>
<summary><strong>Ruflo</strong> — <a href="https://github.com/ruvnet/ruflo">ruvnet/ruflo</a></summary>

# Ruflo (ruvnet/ruflo) Agent 编排生态日报 — 2026-05-14

## 1. 今日速览

Ruflo 正处于 v3.7.0 发布前的密集修复周期（Alpha 阶段）。过去 24 小时内：
- **Issues 更新**：18 条（9 Open / 9 Closed），主要集中在内存系统（向量检索与持久化）和 Hook 机制的核心回归 Bug。
- **PR 更新**：14 条（3 Open / 11 Merged），核心团队以极高的效率集中清理由自动化验证和社区报告的底层缺陷。
- **版本发布**：1 个。v3.7.0-alpha.33 发布，包含自 alpha.27 以来的 14 项关键修复。

---

## 2. 版本发布

- **[v3.7.0-alpha.33](https://github.com/ruvnet/ruflo/releases/tag/v3.7.0-alpha.33)**
  - **核心性质**：这是一个累积批次发布版本（涵盖了 `.28` 到 `.32` 的修复集）。主要的重点是**内存层的 8 项关键修复**。
  - **生态意义**：这标志着 Ruflo 正在解决其从单机向分布式 Agent 协作演进过程中的核心痛点——跨进程和跨平台（尤其是 Windows 环境）的上下文状态持久化问题。

---

## 3. 重点 Issues

当前暴露的 Issue 反映了 Agent 基础设施在跨平台和依赖管理上的典型挑战。

### 高优先级与核心缺陷
- **[#1880](https://github.com/ruvnet/ruflo/issues/1880) [HIGH] 见证者签名验证失败及构建产物缺失**：自动化验证发现 `@noble/ed25519` 缺失及部分 dist 文件丢失，这直接威胁到多 Agent 分布式协作的信任链底层。
- **[#1949](https://github.com/ruvnet/ruflo/issues/1949) [HIGH] 联邦插件安装 403 错误**：由于 `cookies@0.9.1` 依赖被注册表安全策略拦截，导致 Agent 联邦能力无法构建。
- **[#1945](https://github.com/ruvnet/ruflo/issues/1945) CLI 内存状态未持久化**：`ruflo memory store` 报告成功但实际数据丢失（每次调用创建全新 sql.js 进程）。这是典型的生命周期管理漏洞。
- **[#1943](https://github.com/ruvnet/ruflo/issues/1943) & [#1944](https://github.com/ruvnet/ruflo/issues/1944) Hook 机制严重回归**：Bash Hook 引发 `TypeError`，且路径解析错误导致全局安装时 `MODULE_NOT_FOUND`，直接阻塞了 Agent 的动作执行流。

### 跨平台与算法问题
- **[#1947](https://github.com/ruvnet/ruflo/issues/1947) / [#1942](https://github.com/ruvnet/ruflo/issues/1942) / [#1952](https://github.com/ruvnet/ruflo/issues/1952) 向量检索全面失效**：底层 Schema 硬编码 768 维度，但默认嵌入模型生成 384 维度。导致 HNSW 索引拒绝插入，`memory_search` 返回 0 结果。Agent 的长期记忆检索能力因此瘫痪。
- **[#1939](https://github.com/ruvnet/ruflo/issues/1939) Win32 环境下的内存导入路径解析失败**：路径处理未兼容反斜杠和驱动器号。
- **[#1953](https://github.com/ruvnet/ruflo/issues/1953) 预训练模式提取失效**：遍历算法未对非代码文件做预算限制，导致文档密集型仓库中 Agent 无法提取行为模式。

### 其他生态动态
- **[#1967](https://github.com/ruvnet/ruflo/issues/1967) 线下生态建设**：宣布将于 2026 年 6 月 2-3 日在布达佩斯举办 **ruFlo Summit**，表明该项目正在建立活跃的开发者社区。

---

## 4. 关键 PR 进展

维护者（ruvnet）在过去 24 小时内以流水线般的速度合并了大量底层修复 PR，展现了极高的治理效率：

- **内存与存储层重构**
  - **[PR #1956](https://github.com/ruvnet/ruflo/pull/1956)**：**核心修复**。将 Schema `vector_indexes` 从错误的 768 维度对齐至实际的 384 维度，修复了长期记忆检索的致命缺陷。
  - **[PR #1963](https://github.com/ruvnet/ruflo/pull/1963)**：为命名空间动态配置 `vector_indexes`，解决特定命名空间检索为空的问题。
  - **[PR #1959](https://github.com/ruvnet/ruflo/pull/1959)**：重构 `getDbPath()`，强制 CLI 和 doctor 命令遵守 `CLAUDE_FLOW_MEMORY_PATH` 环境变量配置，终结了状态不持久的问题。

- **Hook 与执行流修复**
  - **[PR #1957](https://github.com/ruvnet/ruflo/pull/1957)**：修复 `hook-handler.cjs` 中 Object 强转 String 导致的 TypeError，并重构了全局/局部 Helper 脚本的解析路径。
  - **[PR #1961](https://github.com/ruvnet/ruflo/pull/1961)**：重写遍历算法，使 `hooks_pretrain` 优先扫描代码目录，防止被海量非代码文件耗尽预算。

- **平台兼容性**
  - **[PR #1962](https://github.com/ruvnet/ruflo/pull/1962)**：引入多系统路径分隔符兼容逻辑（驱动器号、反斜杠等），彻底解决 Win32 环境下的导入问题。

- **扩展与观测性**
  - **[PR #1950](https://github.com/ruvnet/ruflo/pull/1950) [OPEN]**：社区贡献了 Swarm（集群）可视化 MVP 及 `goal_ui` 观测面板，为多 Agent 编排提供了急需的运行时可观测性能力。

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注

1. **解决多 Agent 的硬核底层痛点**：Ruflo 目前处理的不是简单的 API 封装，而是 AI 智能体在真实工程环境中的核心摩擦点：跨进程的 SQLite 内存持久化、HNSW 向量索引的维度漂移、以及多操作系统（Win32/Unix）路径解析。这些底层基础设施的稳固度，决定了上层编排能力的上限。
2. **严苛的自动化验证体系**：从 Issue 列表（如每 12 小时的定时验证）可以看出，Ruflo 建立了严格的 E2E 和集成测试网。对诸如依赖签名（Ed25519）、NPM 注册表策略拦截的暴露，证明了该项目的质量门禁机制正在发挥关键作用。
3. **从单机向联邦形态演进**：正在修复的 `plugin-agent-federation` 和 `swarm visualizer`（PR #1950）明确指明了技术路线——Ruflo 正在从本地单体的 Prompt 编排，走向支持分布式、跨环境、带有 UI 观测能力的联邦 Agent 集群。对于构建复杂自动化工作流的开发者而言，这是一个至关重要的基础设施项目。

</details>

<details>
<summary><strong>LangGraph</strong> — <a href="https://github.com/langchain-ai/langgraph">langchain-ai/langgraph</a></summary>

以下是为您生成的 2026-05-14 LangGraph 项目 Agent 编排日报摘要：

### 1. 今日速览
过去 24 小时内，LangGraph 仓库共处理了 **4 条 Issues** 和 **12 条 Pull Requests (PR)**。无新版本发布。整体活动集中在底层依赖的大规模升级以及针对流式输出和人机交互 (HITL) 核心机制的问题排查。此外，开发团队正在规划下一代 SDK 的流式架构。

### 2. 版本发布
无新版本发布。

### 3. 重点 Issues
本期重点反映了 LangGraph 在复杂控制流和底层信号处理上的边缘场景缺陷：

*   **长时间 Tool Call 导致静默重试 (云服务严重 Bug)**
    *   链接: [langchain-ai/langgraph Issue #7417](https://github.com/langchain-ai/langgraph/issues/7417)
    *   分析: 在 LangGraph Cloud 中，耗时约 3 分钟以上的工具调用会被静默地从上一个检查点重新分发，导致原进程与新进程并发执行，产生 2-3 倍的冗余计算和资金成本。
*   **循环中的 `Interrupt()` 导致多余恢复**
    *   链接: [langchain-ai/langgraph Issue #7780](https://github.com/langchain-ai/langgraph/issues/7780)
    *   分析: Agent 在循环中使用 `Interrupt()` 进行人机交互 (HITL) 时，会触发多余的 resume 操作，直接影响复杂工作流的稳定性。
*   **流式输出标签 `TAG_NOSTREAM` 行为不一致**
    *   链接: [langchain-ai/langgraph Issue #7509](https://github.com/langchain-ai/langgraph/issues/7509)
    *   分析: `StreamMessagesHandler` 中的 `TAG_NOSTREAM` 成功抑制了底层 LLM 的 token 流，但未能拦截节点输出的消息流，导致流式回调行为不符合预期。
*   **日志警告堆栈级别缺失**
    *   链接: [langchain-ai/langgraph Issue #7776](https://github.com/langchain-ai/langgraph/issues/7776)
    *   分析: 开发者指出代码中 `warnings.warn()` 调用缺少必要的 `stacklevel` 参数，导致排查警告时定位到错误的源码行。

### 4. 关键 PR 进展
PR 动态主要由自动化依赖升级和内部架构优化构成，包含一个重要的架构设计提案：

*   **Python SDK v3 流式架构 RFC (设计评审中)**
    *   链接: [langchain-ai/langgraph PR #7790](https://github.com/langchain-ai/langgraph/pull/7790)
    *   分析: 团队成员提交了 Python SDK v3 版本以“线程为中心”的流式高级设计文档。此 PR 仅用于架构评审，不涉及代码合并，预示着 LangGraph 的流式数据处理表面即将迎来重大重构。
*   **全量升级 LangSmith SDK (依赖更新)**
    *   链接 (示例): [langchain-ai/langgraph PR #7791](https://github.com/langchain-ai/langgraph/pull/7791) (及 #7784-#7789)
    *   分析: `dependabot` 提交了多个 PR，将 Python 端的 `langsmith` 依赖从 `v0.7.x` 全面升级至 `v0.8.0`，同时 JS 端也进行了 `v0.6.3` 的升级，确保整个 Monorepo 的可观测性工具链同步。
*   **修复 HITL 多中断文档失效链接**
    *   链接: [langchain-ai/langgraph PR #7781](https://github.com/langchain-ai/langgraph/pull/7781)
    *   分析: 修复了多个 pending interrupts 触发 `RuntimeError` 时指向 404 页面的报错链接。
*   **修复 CI 基准测试输出**
    *   链接: [langchain-ai/langgraph PR #7779](https://github.com/langchain-ai/langgraph/pull/7779)
    *   分析: 优化了 CI 流程，避免了变更文件和基准测试结果直接内联插值到 `github-script` 中可能导致的异常。

### 5. 为什么这个项目在 Agent 编排生态中值得关注
从今日的数据切片可以看出，LangGraph 正在攻克 Agent 编排中最难啃的骨头：**“状态持久化与长时间运行的矛盾”**以及**“复杂控制流的稳定性”**。
*   Issue #7417 暴露出在 Cloud 环境下，超长 Tool Call 与 Checkpoint 恢复机制的冲突，这是所有试图构建生产级 LLM 调度系统必须解决的资源浪费和幂等性问题。
*   针对 `Interrupt()` 和 `TAG_NOSTREAM` 的修复讨论，表明项目正在深度打磨“人机交互”和“细粒度流式控制”这两个高级编排特性。
*   PR #7790 中的 SDK v3 流式架构 RFC 说明其底层传输协议仍在快速迭代以适应更复杂的 Agent 通信模型。LangGraph 始终保持高响应度的维护，是构建重度依赖状态机和工作流的企业级 AI Agent 的首选开源框架。

</details>

<details>
<summary><strong>Semantic Kernel</strong> — <a href="https://github.com/microsoft/semantic-kernel">microsoft/semantic-kernel</a></summary>

以下是为您生成的 2026-05-14 Semantic Kernel Agent 编排日报摘要：

### 1. 今日速览
过去 24 小时内，Semantic Kernel 仓库呈现平稳的开发态势。无新版本发布，Issues 更新 2 条（聚焦于 .Net 生态的包发布滞后及 Python 生态的 Agent 安全防范），PR 更新 8 条（核心在于提升 MCP 协议的稳定性、修复底层的反序列化与分词逻辑，以及组件安全加固）。

### 2. 版本发布
- **无新版本发布**。

### 3. 重点 Issues
- **[.Net] PgVector Nuget 包版本缺失问题**：开发者反馈在使用 `VectorSearchOptions` 时遇到阻碍，该问题虽然在代码层面于 v1.75.0 修复，但该版本尚未在 NuGet Gallery 上线，导致无法正常拉取依赖。
  - 链接：[microsoft/semantic-kernel Issue #13973](https://github.com/microsoft/semantic-kernel/issues/13973)
- **[Python] 拥抱 OWASP Agent 安全标准**：社区发起关于集成 OWASP Agent Memory Guard 的特性请求，旨在为 SK 引入针对“记忆投毒”的防御机制，对应 OWASP Agentic Application Top 10 中的 ASI06 安全漏洞防范。
  - 链接：[microsoft/semantic-kernel Issue #14006](https://github.com/microsoft/semantic-kernel/issues/14006)

### 4. 关键 PR 进展
- **MCP 协议支持与稳定性增强**：集中处理了 Model Context Protocol (MCP) 相关的改进，包括为 MCP 工具调用添加可选的采样回调以提升灵活性，以及修复了 MCP 插件在后台初始化失败时导致 `connect()` 死锁的严重隐患。
  - 链接：[microsoft/semantic-kernel PR #14003](https://github.com/microsoft/semantic-kernel/pull/14003)
  - 链接：[microsoft/semantic-kernel PR #13437](https://github.com/microsoft/semantic-kernel/pull/13437)
- **基础设施与安全加固**：
  - **HttpPlugin 验证收紧**：改进了 Python HttpPlugin 的输入验证，添加了无限制域名的显式选择机制，并优化了重定向处理与回归测试。
    - 链接：[microsoft/semantic-kernel PR #13969](https://github.com/microsoft/semantic-kernel/pull/13969)
  - **修复 Azure AI Search 兼容性**：解决了 `azure-search-documents` 升级到 12.0.0 后底层代码生成方式改变导致的私有属性 `_endpoint` 丢失问题。
    - 链接：[microsoft/semantic-kernel PR #13971](https://github.com/microsoft/semantic-kernel/pull/13971)
- **核心逻辑与依赖优化**：
  - **[.Net] 枚举反序列化修复**：修复了当未提供自定义 `JsonSerializerOptions` 时，工具调用的 JSON 反序列化枚举参数失败的 Bug。
    - 链接：[microsoft/semantic-kernel PR #14001](https://github.com/microsoft/semantic-kernel/pull/14001)
  - **[.Net] 文本分词逻辑修正**：重构了 Text Chunker 的尾部段落合并逻辑，确保在合并“孤儿段落”时基于 Token 计数而非词数，避免超出预期的 Token 限制。
    - 链接：[microsoft/semantic-kernel PR #14002](https://github.com/microsoft/semantic-kernel/pull/14002)
  - **[Python] Gemini 深度思考支持**：引入了对 Gemini 模型 `thinking_level` 参数的支持，允许用户在响应延迟和 Token 预算之间进行精细控制。
    - 链接：[microsoft/semantic-kernel PR #13959](https://github.com/microsoft/semantic-kernel/pull/13959)

### 5. 为什么这个项目在 Agent 编排生态中值得关注
作为微软主导的开源 AI 编排框架，Semantic Kernel 的最新动态反映出 Agent 编排领域正在经历**从“功能可用”向“企业级安全与高可用”的演进**。

从今日的数据可以看出：
1. **安全性成为核心考量**：不论是社区呼吁对接 OWASP 的 ASI06 防御标准，还是核心维护者主动收紧 HTTP 请求的校验逻辑，都证明在多 Agent 协作中，工具调用的边界控制和记忆系统的防污染已经成为不可忽视的基建需求。
2. **全面拥抱 MCP (Model Context Protocol) 标准**：多个 PR 专注于解决 MCP 插件的死锁问题及扩展其能力，表明 SK 正在积极解决 Agent 与外部数据源/工具集成时的协议标准化和稳定性痛点。
3. **深度适配前沿模型能力**：对 Gemini 的 `thinking_level` 提供底层支持，标志着编排框架开始将模型的内部推理耗时纳入编排调度的工作流计算中。

</details>

<details>
<summary><strong>SmolAgents</strong> — <a href="https://github.com/huggingface/smolagents">huggingface/smolagents</a></summary>

以下是为您生成的 2026-05-14 SmolAgents 项目日报摘要：

# 📰 AI Agent 编排生态日报：SmolAgents (2026-05-14)

## 1. 今日速览
过去 24 小时内，`huggingface/smolagents` 仓库活跃度主要集中在**安全性加固**和**执行器稳定性优化**。社区针对本地沙盒逃逸漏洞和 Gradio 默认配置提出了关键修复 PR。此外，社区开发者对项目的维护状态表示了关切。
- **数据看板**：Issues 更新 2 条，PR 更新 3 条，新版本发布 0 个。

## 2. 版本发布
- **无最新 Release**。

## 3. 重点 Issues
- **[社区动态] 对项目维护状态的确认 (#2267)** 
  - **摘要**：开发者 @davidmezzetti 发起提问，希望确认该项目是否仍在积极维护，以便评估其在 Agent 流程编排中的技术选型风险。该 Issue 目前已关闭（推测官方已作内部确认）。
  - **链接**：[huggingface/smolagents Issue #2267](https://github.com/huggingface/smolagents/issues/2267)

- **[功能请求] 支持 x402 协议处理付费 API (#2112)** 
  - **摘要**：提议为 Agent 增加处理 HTTP 402 (Payment Required) 状态码的能力。随着 Agent 越来越多地调用外部计量/计费 API，当前遇到 402 时只能静默失败或抛出异常。引入该特性将极大增强 Agent 在商业 API 生态中的自主交易和重试能力。
  - **链接**：[huggingface/smolagents Issue #2112](https://github.com/huggingface/smolagents/issues/2112)

## 4. 关键 PR 进展
今日的 PR 集中在底层执行引擎的安全与健壮性，特别是由 @TurtlesMaster1 贡献的系列安全加固：

- **[安全修复] 阻断沙盒内通过 `str.format` 的 Dunder 属性访问 (#2271)**
  - **摘要**：修复了 `local_python_executor` 沙盒中的一处安全绕过漏洞。原本的过滤器能够防止通过常规路径访问 `__class__` 等危险属性，但被控代码仍可通过 `str.format` 或 `format_map` 的字段路径进行绕过。此 PR 彻底封堵了该逃逸向量。
  - **链接**：[huggingface/smolagents PR #2271](https://github.com/huggingface/smolagents/pull/2271)

- **[安全加固] 优化 GradioUI 的默认安全配置 (#2270)**
  - **摘要**：修正了 `GradioUI.launch()` 中存在风险的默认参数。将默认的 `share` 参数改为 `False`，并参数化了硬编码的 `debug=True`。防止用户在运行官方示例时意外将带有执行权限的 CodeAgent 暴露到公网。
  - **链接**：[huggingface/smolagents PR #2270](https://github.com/huggingface/smolagents/pull/2270)

- **[稳定性提升] 修复执行器超时后的无效等待 (#2263)**
  - **摘要**：优化了 `timeout()` 装饰器的逻辑。当触发 `FuturesTimeoutError` 后，通过设置 `wait=False` 显式关闭执行器，避免了主进程在 worker 超时后被继续阻塞挂起的问题。
  - **链接**：[huggingface/smolagents PR #2263](https://github.com/huggingface/smolagents/pull/2263)

## 5. 为什么这个项目在 Agent 编排生态中值得关注
SmolAgents 是 HuggingFace 旗下轻量级的 Agent 编排框架。从今日的更新可以看出，该项目的演进方向呈现出两个显著特征：
1. **极度重视本地沙盒安全性**：在赋予 Agent 强大的代码执行能力（CodeAgent）时，框架正不遗余力地修补从 Python 底层魔法方法到字符串格式化的各种潜在逃逸漏洞，这对于企业级安全部署至关重要。
2. **探索 Agent 商业化闭环**：Issue #2112 中关于 HTTP 402 的讨论，标志着 SmolAgents 开始涉足 Agent 与现实世界计量服务的交互协议，这是构建下一代自主商业 Agent 网络的基础设施级特性。

</details>

<details>
<summary><strong>Haystack</strong> — <a href="https://github.com/deepset-ai/haystack">deepset-ai/haystack</a></summary>

# Haystack Agent 编排生态日报 (2026-05-14)

## 1. 今日速览
过去 24 小时内，Haystack 仓库整体保持平缓迭代。无新版本发布，社区和核心团队的重心主要集中在 **安全防护提案**、**LLM 客户端架构优化** 以及 **文档生态同步** 上。共处理 Issues 2 条，更新 PR 8 条（其中 7 条已合入并关闭）。

## 2. 版本发布
- **无新版本发布**。

## 3. 重点 Issues
今日新增的 2 条 Issue 均为高价值的特性提案，直击 Agent 编排架构中的痛点：

- **[#11312] [Proposal] Support callable api token providers for Chat Generators**
  - **链接**: [deepset-ai/haystack Issue #11312](https://github.com/deepset-ai/haystack/issues/11312)
  - **分析师评论**: 这是一个关键的架构优化提案。当前 Haystack 的 Chat Generators（如 OpenAIChatGenerator）在 `__init__` 阶段实例化底层客户端，这导致其不支持轮换或短生命周期的 API Token。在 Agent 架构中，支持动态 Token 刷新是集成企业级密钥管理服务（如 Vault）的刚需。
  
- **[#11311] Security: OWASP Agent Memory Guard for pipeline memory poisoning defense**
  - **链接**: [deepset-ai/haystack Issue #11311](https://github.com/deepset-ai/haystack/issues/11311)
  - **分析师评论**: 高度契合当前 AI Agent 安全前沿。该提案建议集成 OWASP 官方的 Agent Memory Guard 参考实现，以防御 OWASP Top 10 for LLM 中提到的 **ASI06 - Memory Poisoning（记忆投毒）** 攻击。如果实现，将极大提升 Haystack 在高安全要求企业场景下的竞争力。

## 4. 关键 PR 进展
今日 PR 活动以文档更新、依赖维护和代码质量提升为主。

- **[#11310] [OPEN] build(deps): bump anthropics/claude-code-action from 1.0.119 to 1.0.121**
  - **链接**: [deepset-ai/haystack PR #11310](https://github.com/deepset-ai/haystack/pull/11310)
  - **摘要**: 由 Dependabot 发起的 CI 依赖项升级，将 Anthropic 的 Claude Code Action 升级至最新版本。

- **[#11307] [CLOSED] docs: Add docs for perplexity integration**
  - **链接**: [deepset-ai/haystack PR #11307](https://github.com/deepset-ai/haystack/pull/11307)
  - **摘要**: 补充了 Perplexity 模型集成库的官方使用文档，扩展了 Agent 可调用的底层搜索引擎生态。

- **[#11308] [CLOSED] docs: update conditional router docs to highlight more of its features**
  - **链接**: [deepset-ai/haystack PR #11308](https://github.com/deepset-ai/haystack/pull/11308)
  - **摘要**: 优化了 `ConditionalRouter` 的文档。Router 是 Agent 编排中实现条件分支和复杂工作流路由的核心组件，此次文档更新有助于开发者构建更复杂的动态 Agent 行为。

- **[#11284] [CLOSED] chore: Add type checking to test/tools**
  - **链接**: [deepset-ai/haystack PR #11284](https://github.com/deepset-ai/haystack/pull/11284)
  - **摘要**: 技术债清理。为 `test/tools` 目录添加了静态类型检查，这有助于在 Agent 工具快速增加的当下，保障代码的健壮性和 IDE 的类型提示支持。

*(注：此外还有 4 个由 HaystackBot 及开发者提交的文档/CI修复 PR 已关闭，主要涉及 Docusaurus API 参考同步及代码注释修复：[#11306](https://github.com/deepset-ai/haystack/pull/11306), [#11305](https://github.com/deepset-ai/haystack/pull/11305), [#11304](https://github.com/deepset-ai/haystack/pull/11304), [#11301](https://github.com/deepset-ai/haystack/pull/11301))*

## 5. 为什么这个项目在 Agent 编排生态中值得关注
结合今日的数据动态，Haystack 在 AI Agent 编排领域的三个核心优势正在显现：
1. **正视 Agent 安全痛点**：从 Issue #11311 可以看出，项目团队不仅在关注业务逻辑编排，更在积极跟进 OWASP 等权威安全标准。引入 Memory Poisoning 防御机制是 Agent 从“玩具”走向“生产环境”的必经之路。
2. **底层架构适应企业级诉求**：Issue #11312 关于动态 Token 的提案，表明 Haystack 正在优化其底层 Runtime 以适应更严格的企业密钥轮换策略，这是构建安全合规的多 Agent 系统的基础。
3. **持续完善控制流与工具生态**：通过强化 `ConditionalRouter` 等控制流组件的文档，并持续集成 Perplexity 等新型外部工具，Haystack 正在为开发者提供构建复杂、动态工作流所需的“积木”。

</details>

<details>
<summary><strong>BabyAGI</strong> — <a href="https://github.com/yoheinakajima/babyagi">yoheinakajima/babyagi</a></summary>

以下是为您生成的 2026-05-14 BabyAGI 项目 Agent 编排日报摘要：

### 1. 今日速览
截至 2026-05-14，BabyAGI 项目在过去 24 小时内整体活跃度较低，代码层无迭代。项目收到 0 个新 PR，发布 0 个新版本；新增及更新 Issues 共 2 条，主要涉及基础路由报错反馈及 Web3 边缘概念的非常规提案。

### 2. 版本发布
过去 24 小时内**无新版本发布**。项目的代码库和 Release 状态均保持停滞。

### 3. 重点 Issues
- **[#400](https://github.com/yoheinakajima/babyagi/issues/400) [OPEN] 应用根路径访问 404 报错**
  - **概况**：开发者报告在访问应用根路由时触发 404 错误（Not Found）。作者已排查过 `run.py` 中的路由定义但问题依然存在。
  - **分析**：此问题可能与应用的部署环境配置或框架底层的路由解析机制有关。目前该 Issue 已有 1 条评论，处于待解决状态。

- **[#420](https://github.com/yoheinakajima/babyagi/issues/420) [OPEN] [PROPOSAL] Sovereign Core 整合提案**
  - **概况**：由社区提出，建议将基于 Web3/去中心化身份（DID）的“Sovereign Core”集成到 BabyAGI 中，包含基础设施抗审查和隐蔽式网络导航等特性。
  - **分析**：这属于典型的“超出项目范畴”的 Web3 概念性提案，与当前 BabyAGI 的核心 LLM 任务编排逻辑无关，属于社区噪音，预计维护者不会采纳。

### 4. 关键 PR 进展
过去 24 小时内**无 PR 更新**。项目代码在接受外部贡献方面处于冻结或极低频状态。

### 5. 为什么这个项目在 Agent 编排生态中值得关注
虽然当前 BabyAGI 的代码迭代已大幅放缓甚至停滞，但它作为 **“Agent 动态任务循环”** 的概念先驱，在 AI 编排生态中仍具有标杆意义：
- **历史价值与启蒙**：它首次向社区清晰展示了“目标 -> 分解任务 -> 执行 -> 上下文更新 -> 继续执行”的 Autonomous Agent 基础编排范式，是后续大量复杂 Agent 框架（如 AutoGen, CrewAI）的灵感基石。
- **架构参考**：其极简的依赖和基于向量数据库（如 Chroma/Pinecone）的内存检索机制，依然是学习和测试 Agent 记忆管理的优秀轻量级沙盒。
- **生态现状映射**：从当前的 Issue 质量可以看出，项目已经度过了早期的爆发期。对于寻求构建生产级 Agent 的开发者而言，现在的 BabyAGI 更适合作为理论研究的起点，而非企业级应用的基础设施。

</details>

<details>
<summary><strong>OpenAI Swarm</strong> — <a href="https://github.com/openai/swarm">openai/swarm</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenAI Agents</strong> — <a href="https://github.com/openai/openai-agents-python">openai/openai-agents-python</a></summary>

# OpenAI Agents 编排生态日报 (2026-05-14)

## 1. 今日速览
过去 24 小时内，`openai-agents-python` 仓库呈现出极高的维护活跃度与社区参与度。项目无新版本发布，但合并与审查了多达 **23 个 PR**（更新），同时处理了 **2 个 Issues**。
当前的工程重心高度聚焦于**底层健壮性、运行时边界条件处理（空值/异常/Mutation）、以及 Realtime 与 MCP 等高级特性的缺陷修复**。

---

## 2. 版本发布
**无新版本发布 (0 releases)**。
从大量低层级的 Bugfix PR 涌现可以看出，项目目前正处于版本发布前的代码库稳固与缺陷扫尾阶段。

---

## 3. 重点 Issues
今日关注的两个 Issue 暴露了当前 Agent 编排在复杂工作流和底层元数据访问上的架构痛点：

*   **[#858](https://github.com/openai/openai-agents-python/issues/858) [CLOSED] 混合 Tool-Calling 与 Handoff 机制**
    *   **摘要**：探讨了在 1 个主 Agent 带多个子工具/Agent 的工作流中，如何更好地混合使用直接工具调用 与 Agent 交接。这反映了社区在构建复杂、嵌套式 Agentic 架构时对状态流转控制的强烈需求。
*   **[#3381](https://github.com/openai/openai-agents-python/issues/3381) [OPEN] 请求稳定暴露 `FunctionTool` 底层可调用函数**
    *   **摘要**：开发者指出，当前使用 `@function_tool` 装饰器后，原始函数被深埋在闭包中（需通过 `__closure__` 访问），缺乏公开的 API 进行元编程或测试 Mock。这是 Agent 工具化过程中的一个明显的开发者体验短板。

---

## 4. 关键 PR 进展
23 个 PR 中包含大量的核心逻辑修复，以下为最具代表性的关键进展：

### A. 核心架构与特性增强
*   **[#3397](https://github.com/openai/openai-agents-python/pull/3397) [OPEN] 新增 `ToolContext.send_progress()` 流式工具事件**
    *   **价值**：引入了工具执行期间的进度回调机制，填补了长耗时工具（如代码执行、复杂检索）在流式场景下的状态反馈空白。
*   **[#3396](https://github.com/openai/openai-agents-python/pull/3396) [OPEN] 暴露 `FunctionTool.func` 底层属性**
    *   **价值**：直接回应并解决了 Issue #3381，为 SDK 的工具抽象提供了标准的反射访问接口。
*   **[#3391](https://github.com/openai/openai-agents-python/pull/3391) [CLOSED] 为 `Agent.as_tool()` 添加对话历史支持**
    *   **价值**：优化了 Agent 嵌套编排逻辑，允许子 Agent 作为工具被调用时获取父级上下文，进一步打破了 Tool 模式与 Handoff 模式的壁垒。

### B. 运行时健壮性与安全防护
*   **[#3382](https://github.com/openai/openai-agents-python/pull/3382) / [#3385](https://github.com/openai/openai-agents-python/pull/3385) 修复不可变字典被意外修改问题**
    *   **价值**：解决了 `FunctionTool` 和 `Codex output schema` 校验过程中的 Deep-Mutation 导致的隐蔽 Bug，提高了并发场景下的数据安全性。
*   **[#3394](https://github.com/openai/openai-agents-python/pull/3394) / [#3395](https://github.com/openai/openai-agents-python/pull/3395) 健壮性防护扩展**
    *   **价值**：针对 LLM 输出的“空字符串”和“None 文本”添加了兜底与占位符替换逻辑，极大增强了模型输出不稳定时的系统容错率。
*   **[#3387](https://github.com/openai/openai-agents-python/pull/3387) 拒绝非流式响应中的 Failed/Incomplete 状态**
    *   **价值**：对齐了 Streaming 模式的错误处理标准，防止非流式请求下未抛出 `response.failed` 异常导致的静默错误。

### C. Realtime 与 MCP 生态融合
*   **[#3393](https://github.com/openai/openai-agents-python/pull/3393) / [#3373](https://github.com/openai/openai-agents-python/pull/3373) Realtime 模式工具异常处理**
    *   **价值**：修复了已知 Realtime 工具/Handoff 抛出异常时，未能将 Failure Output 正确返回给模型的致命问题，并完善了超时控制。
*   **[#3390](https://github.com/openai/openai-agents-python/pull/3390) [CLOSED] 修复 Realtime 模式调用 MCP 工具的参数展平问题**
    *   **价值**：解决了模型将嵌套的 MCP JSON Schema 展平发送，导致 MCP 服务端拒绝执行的兼容性缺陷。

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注
作为 OpenAI 官方推出的 Agent 编排框架，该项目的演进方向直接反映了业界构建 Multi-Agent 系统的最佳实践趋势：

1.  **从“基础编排”走向“精细化状态控制”**：PR 活动显示，目前的开发重心已从单纯的“让 Agent 跑起来”，转移到了处理空字符串、字典不可变性、生命周期状态等极端边界条件。这标志着该 SDK 正在从早期实验性工具向**生产级**基础设施过渡。
2.  **重新定义 Agent 与 Tool 的边界**：通过 Issue #858 和 PR #3391 可以看出，OpenAI 正在尝试打通“将 Agent 视为 Tool”与“Handoff 转交”之间的信息壁垒（如支持上下文历史的透传），这将极大改变未来复杂工作流的编排设计模式。
3.  **对 Realtime 和 MCP 协议的深度整合**：实时语音和标准化工具调用是 AI Agent 进化的两大核心方向。今日的大量 PR 围绕 Realtime 的异常重传和 MCP 参数映射展开，证明 OpenAI Agents SDK 正在成为承载这些前沿多模态交互协议的“一等公民”运行时。

</details>

<details>
<summary><strong>DeepAgents</strong> — <a href="https://github.com/langchain-ai/deepagents">langchain-ai/deepagents</a></summary>

# DeepAgents Agent 编排日报摘要 (2026-05-14)

## 1. 今日速览

DeepAgents 在过去 24 小时内保持高频迭代。项目共处理了 **16 条 Issue**（其中 11 条已关闭，多为历史 Bug 清理）和 **20 条 PR**（7 条已合并/关闭）。值得关注的是，随着 `deepagents-code` 的正式独立发布，核心团队正在集中修复 SDK 中间件层的关键 Bug，并推进 CLI 交互体验的优化。

---

## 2. 版本发布

- **[deepagents-code==0.1.0](https://github.com/langchain-ai/deepagents/releases/tag/deepagents-code==0.1.0)**: 正式发布。该版本从 `libs/cli` 中剥离并独立 Fork 自 `deepagents-cli` (v0.1.0)。由核心维护者 @sydney-r 负责。这标志着 DeepAgents 在代码智能体执行环境方面的架构解耦。

---

## 3. 重点 Issues

本期 Issue 动态主要反映了社区在**子 Agent 流式处理、工具调用容错**及**沙箱生态**方面的需求与反馈。

**流式与异步编排问题：**
- **[#2086](https://github.com/langchain-ai/deepagents/issues/2086) [CLOSED]**：React `useStream` 钩子中，`stream.subagents` 数据为空，而 `getSubagentsByMessage` 却能获取数据。此流式数据不完整的问题已被确认并关闭。
- **[#2240](https://github.com/langchain-ai/deepagents/issues/2240) [CLOSED]**：在 ACP（Agent 通信协议）中，工具和消息的流式输出出现乱序 Bug。
- **[#2313](https://github.com/langchain-ai/deepagents/issues/2313) [CLOSED]**：异步子 Agent 的 `last_updated_at` 字段在任务状态改变时未能同步更新。

**工具与中间件机制：**
- **[#2446](https://github.com/langchain-ai/deepagents/issues/2446) [CLOSED]**：Skill 机制存在缺陷，在执行 `SKILL.md` 前未能通过 `read_file` 完整读取文件内容。
- **[#947](https://github.com/langchain-ai/deepagents/issues/947) [OPEN]**：Agent 对工具调用错误的处理不当，该 Bug 仍在调查中。
- **[#2500](https://github.com/langchain-ai/deepagents/issues/2500) [OPEN]**：`FilesystemMiddleware` 拦截大型工具结果时，丢失了 Command 对象中的 `goto` 和 `graph` 字段。

**架构演进讨论：**
- **[#3128](https://github.com/langchain-ai/deepagents/issues/3128) [OPEN]**：社区请求添加 Docker 沙箱支持，扩展安全执行边界。
- **[#3239](https://github.com/langchain-ai/deepagents/issues/3239) [OPEN]**：内部发起关于“泛化缓存机制”的提案，计划将当前绑定 Anthropic 特定实现的缓存中间件抽象为通用能力。

---

## 4. 关键 PR 进展

核心开发者 (@ccurme, @eyurtsev, @mdrxy 等) 今日主要在修复底层 SDK 缺陷及增强周边工具链。

**核心 SDK 修复：**
- **[#3386](https://github.com/langchain-ai/deepagents/pull/3386) [CLOSED]**：修复无效工具调用，解决了 Issue #2703。
- **[#2448](https://github.com/langchain-ai/deepagents/pull/2448) [CLOSED]**：快速修复了完整读取 Skill 文件的评估逻辑，解决了 Issue #2446。
- **[#3391](https://github.com/langchain-ai/deepagents/pull/3391) [OPEN]**：修复通过工具返回的 Commands 中 `goto` 和 `graph` 属性的传播丢失问题，解决 Issue #2500。

**CLI 与 TUI 优化：**
- **[#3395](https://github.com/langchain-ai/deepagents/pull/3395) [OPEN]**：针对 OpenCode 用户习惯，新增 `:q`, `:wq` 等 vim 风格的退出指令别名。
- **[#3393](https://github.com/langchain-ai/deepagents/pull/3393) [CLOSED]**：优化代码 Agent TUI 布局，移除聊天区与底部输入框之间的多余间距。

**示例与生态扩充：**
- **[#3318](https://github.com/langchain-ai/deepagents/pull/3318) [CLOSED]**：新增 Wiki Runner 示例，展示了基于脚本优先的 Context Hub 工作流。
- **[#3392](https://github.com/langchain-ai/deepagents/pull/3392) [OPEN]**：新增 Context Hub 知识库部署示例，将 LangSmith issues 接入路由。

**自动化维护：**
- Dependabot 集中发起了针对 `langsmith` 和 `langchain-classic` 的依赖项升级（如 [PR #3402](https://github.com/langchain-ai/deepagents/pull/3402), [PR #3397](https://github.com/langchain-ai/deepagents/pull/3397) 等），以保证下游依赖的安全与同步。

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注

1. **架构解耦与专业化分工**：`deepagents-code` 从 CLI 中独立发布 v0.1.0 版本，表明项目正在从一个单一的 SDK 走向**模块化的组件矩阵**（包含 SDK, CLI, ACP, QuickJS 等）。这种设计允许开发者为不同的执行环境（如终端、沙箱、浏览器）灵活组合底层 Agent 编排能力。
2. **深入底层的状态与流控治理**：Issue 和 PR 动态暴露了多 Agent 编排的核心痛点——**流式状态同步** 和 **异步生命周期管理**。项目正着力解决 Command 对象传播、子 Agent 并行取消策略等底层细节，这表明其正在从“能用”向“企业级高可靠”迈进。
3. **Vendor-Agnostic（多模型无关）的抽象推进**：关于泛化缓存（Generalize caching, #3239）的内部提案，暗示项目正试图洗掉特定大模型厂商（如 Anthropic）的强绑定痕迹，旨在提供一个更纯粹、具有更高抽象层级的标准 Agent 编排底座。

</details>

<details>
<summary><strong>PydanticAI</strong> — <a href="https://github.com/pydantic/pydantic-ai">pydantic/pydantic-ai</a></summary>

以下是为您生成的 2026-05-14 PydanticAI Agent 编排生态日报摘要：

---

# 📠 PydanticAI Agent 编排日报 (2026-05-14)

## 1. 今日速览
过去 24 小时内，PydanticAI 仓库保持高活跃度。底层迎来 v1.95.0 和 v1.95.1 两个重要版本的密集迭代，核心焦点在于**多模型原生工具搜索的支持**、**可观测性 bug 修复**以及**规模化的 v2 架构重构准备**。
- **Issues 更新**: 34 条 (其中安全扫描和 v2 跟踪成为热点)
- **PR 更新**: 45 条 (大量 `v2:prep` 标签的重构 PR 提交)

## 2. 版本发布

### [v1.95.1](https://github.com/pydantic/pydantic-ai/releases/tag/v1.95.1) (2026-05-13)
紧急修复版本，主要解决可观测性与工作流执行层面的回退问题：
- **Bug Fix**: 修复了 `current_otel_traceparent` 的导入机制，改为即刻加载，解决了 Agent 在 Temporal 工作流中运行中断的问题。

### [v1.95.0](https://github.com/pydantic/pydantic-ai/releases/tag/v1.95.0) (2026-05-12)
重要特性版本，极大增强了跨模型 Provider 的工具调度能力：
- **Feature**: 引入原生的 **Tool Search（工具搜索）** 功能，原生支持 Anthropic 和 OpenAI，并允许在任何 Provider 上使用自定义搜索策略。

## 3. 重点 Issues

### 🔥 核心功能与缺陷追踪
- **多模态与 UI 适配**: [#5147](https://github.com/pydantic/pydantic-ai/issues/5147) 指出 AG-UI 在处理 `tool_return` 时缺乏对 `MultiModalContent` 类型的支持，制约了多模态 Agent 的前端交互。
- **Fallback 机制缺陷**: [#2837](https://github.com/pydantic/pydantic-ai/issues/2837) 暴露出 `FallbackModel` 无法捕获 Agent 图执行响应期间抛出的 `UnexpectedModelBehavior`，影响系统的容错上限。
- **API 角色错乱**: [#3976](https://github.com/pydantic/pydantic-ai/issues/3976) 报告 `OpenAIResponsesModel` 默认将系统提示词错误标记，未遵循最新的 `developer` 角色规范。

### 🛡️ 安全与架构演进
- **安全扫描风波**: 一天内收到 5份 MCPSafe 安全扫描报告 ([#5408](https://github.com/pydantic/pydantic-ai/issues/5408), [#5409](https://github.com/pydantic/pydantic-ai/issues/5409), [#5410](https://github.com/pydantic/pydantic-ai/issues/5410), [#5411](https://github.com/pydantic/pydantic-ai/issues/5411), [#5412](https://github.com/pydantic/pydantic-ai/issues/5412))，评分 55/100 (Grade C)。
- **安全防守提案**: [#5424](https://github.com/pydantic/pydantic-ai/issues/5424) 提出集成 OWASP Agent Memory Guard，以防御 ASI06 记忆投毒攻击。
- **V2 路线图**: [#5150](https://github.com/pydantic/pydantic-ai/issues/5150) (获 2 👍) 持续更新公共 API 破坏性变更清单，标志着 V2 正式版发布进入密集准备期。

## 4. 关键 PR 进展

### 🚧 规模化的 V2 架构重构
为向 V2 平稳过渡，团队正在集中处理大量 API 废弃与重构 PR：
- **MCP 架构大重构**: [#5325](https://github.com/pydantic/pydantic-ai/pull/5325) 引入 `MCPToolset`，正式废弃现有的 `MCPServer*` 体系，统一基于 FastMCP Client 构建。
- **Google Provider 解耦**: [#5336](https://github.com/pydantic/pydantic-ai/pull/5336) 将原先的 `GoogleProvider` 拆分为独立对接 Gemini API 和 Vertex AI 的两个实体。
- **Capabilities 替代方案**: [#5335](https://github.com/pydantic/pydantic-ai/pull/5335) 及 [#5425](https://github.com/pydantic/pydantic-ai/pull/5425) 陆续废弃 `prepare_tools`、`event_stream_handler` 以及 `history_processors` 等初始化参数，统一收敛至 `capabilities=[...]` 组合模式。
- **废弃 A2A 与 AG-UI 沉降**: [#5426](https://github.com/pydantic/pydantic-ai/pull/5426) 将 `Agent.to_a2a()` 标记为废弃（已捐赠给 Data Layer）；[#5345](https://github.com/pydantic/pydantic-ai/pull/5345) 废弃原 AG-UI shim，转向 `AGUIAdapter`。

### 🔧 关键特性与修复
- **持久化执行**: [#4977](https://github.com/pydantic/pydantic-ai/pull/4977) 引入了 `TemporalDurability`、`DBOSDurability` 和 `PrefectDurability`，通过 Capabilities 机制赋能 Agent 持久化容错能力。
- **可观测性修复**: [#5427](https://github.com/pydantic/pydantic-ai/pull/5427) 撤销了对 `Agent.instrument` 的废弃处理，修复了官方 Logfire 集成中泛滥的告警误报；[#5429](https://github.com/pydantic/pydantic-ai/pull/5429) 进一步重构了 OTel spans 以去除冗余。
- **严格模式修复**: [#5417](https://github.com/pydantic/pydantic-ai/issues/5417) 修复了 `OpenAIJsonSchemaTransformer` 在 `strict=None` 时误变顶层 oneOf schema 的严重 Bug。

## 5. 为什么这个项目在 Agent 编排生态中值得关注？

1. **定义编排标准接口**: PydanticAI 正在通过 `Capabilities` 机制重塑 Agent 的构建方式。将工具准备、历史处理、可观测性及持久化执行等统一抽象为可插拔的 Capability，正在成为 Python 生态中 Agent 编排层的设计范本。
2. **深度拥抱 MCP 与多模态**: 通过重构底层 MCP 工具集对齐 FastMCP 协议，并着力解决 AG-UI/Vercel 适配器中的多模态内容阻断问题，该项目正在致力于打通“LLM 推理 - MCP 工具调用 - 前端多模态渲染”的全链路。
3. **向企业级稳定性迈进**: 引入 Temporal/Prefect 等持久化执行器支持，集成 OWASP 安全防护，以及严谨的 V2 破坏性变更重构，表明 PydanticAI 正在脱离单纯的“LLM 胶水层”，向满足生产级要求的容错、可观测、高安全性的企业级 Agent 编排基础设施演进。

</details>