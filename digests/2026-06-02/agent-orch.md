# Agent 编排生态日报 2026-06-02

> 生成时间: 2026-06-01 22:41 UTC | 覆盖项目: 45 个

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
AI Agent 编排生态已全面迈入深水区，正经历从“单一任务脚本”向“高并发、多模态、强合规的企业级集群网络”的跃升。当前生态呈现出明显的分层：底层聚焦于调度引擎、状态持久化与安全沙箱基建（如 LangGraph, Agno）；中层主打异构模型的标准化接入与多 Agent 路由（如 AutoGen, PydanticAI）；顶层则涌现大量面向具体开发者工作流的终端/IDE 编排工具（如 Emdash, T3Code, Claude Squad）。此外，“模型上下文协议（MCP）”与“跨框架通信协议（A2A）”正成为打破生态孤岛的标准化共识。

## 各项目活跃度对比
以下为过去 24 小时内生态中主要开源项目的活跃数据切片：

| 项目 | Issues | PRs | Releases | 信号 |
|---|---|---|---|---|
| Haystack | 8 | 32 | 0 | 专注多租户隔离与异步底层重构，企业级安全合规属性强。 |
| DeepAgents | 10 | 28 | 1 | 向云端托管编排服务演进，补齐文件系统 CRUD 能力。 |
| Agno | 8 | 29 | 0 | 遭遇并发与资源泄漏阵痛期，引入审计收据发力金融合规。 |
| LangGraph | 5 | 29 | 3 | 连发3个版本死磕 v3 流式架构，攻坚分布式图执行。 |
| PydanticAI | 12 | 25 | 0 | 完善按需加载与状态序列化，主攻多智能体与异构模型适配。 |
| CrewAI | 6 | 21 | 0 | 核心引擎解耦重构，向有状态的复杂流与动态编排演进。 |
| OpenAI Agents | 4 | 21 | 0 | 接入 A2A 协议，解决异构框架通信与底层参数边界校验。 |
| T3Code | 10 | 15 | 0 | 发力云原生架构，推进跨系统底层计算环境并行编排。 |
| Semantic Kernel | 14 | 9 | 0 | 密集清理积压 Issue，聚焦 Agent 安全防护（防记忆毒化）。 |
| Emdash | 3 | 18 | 1 | 拥抱 Devin/Codex 等多 Agent，发力离线容灾与成本分析。 |
| AutoGPT | 0 | 16 | 0 | 纯 PR 驱动，构建三阶段记忆重组与终极零依赖安装体验。 |
| LlamaIndex | 2 | 15 | 0 | 重点修复核心向量库（ES/Weaviate）查询与异步性能。 |
| Agent Deck | 4 | 10 | 0 | 解决跨模型实例并发冲突，快速跟进前沿大模型支持。 |
| Mux Desktop | 2 | 9 | 1 | 引入动态 JS 编排工作流，提升流式截断容错性。 |
| Agent Orchestrator | 2 | 9 | 0 | 解决外部 Agent (Codex) 的无头模式运行与生命周期管理。 |
| Claude Flow | 7 | 3 | 0 | 遭遇路由正则误判与内存一致性架构缺陷，暴露验证管线风险。 |
| AutoGen | 2 | 7 | 0 | 探索跨 Agent 全局/局部共享记忆，发布内存防毒指南。 |
| OpenFang | 1 | 3 | 0 | 将 A2A 调度全面转向 SSE 流式通信，重构多渠道上下文。 |
| 其余(如Ruflo, Jean等) | <3 | <3 | 0 | 处于底层维护、UI优化或零星文档更新阶段。 |

## 编排模式与架构对比
不同项目在处理多智能体协调时展现出迥异的架构设计哲学：
1. **集中式状态机与图控制流**：LangGraph 和 Agno 是典型代表。LangGraph 采用分布式的 `RemoteGraph` 结合交错投影来处理复杂的嵌套事件流；Agno 则致力于统一会话生命周期，通过 Checkpoint 和 Branch 支持会话的回退与重生。
2. **共享记忆与事件广播**：AutoGen、CrewAI 倾向于去中心化的协作。AutoGen 提出基于 SQLite+FTS 的三级作用域共享记忆，Agent 间通过全局内存池进行异步协作；CrewAI 则通过底层 DSL 拆解，将编排转化为路由事件的监听与重武装。
3. **沙箱执行与文件驱动（云/端）**：DeepAgents、T3Code 侧重于运行环境的编排。通过将执行体放入沙箱（Docker、云开发环境、WSL），Agent 的协调不再仅限于 API 调用，而是深入到文件系统的 CRUD（增删改查）和跨操作系统的进程调度。
4. **跨协议标准互操作**：OpenAI Agents 和 OpenFang 代表了协议路由层的演进。通过接入 A2A 协议和标准化 SSE 流，它们不绑定具体的底层模型，而是充当智能的协议网关，实现异构 Agent 间的任务分发。

## 共同关注的工程方向
基于今日高频的 Issue 和 PR 动态，整个工程界的重心正高度聚焦于以下四大领域：
1. **高并发下的状态与异步安全**：Agno 的 PostgresDb 竞态、LangGraph 的 AsyncPostgresSaver 锁阻塞、Haystack 的多租户密钥隔离，无一例外都在解决多线程/高并发下 Agent 内存状态的防串扰与防死锁。
2. **异构模型与工具调用的极限适配**：面对开源模型（Qwen、Mistral等），框架都在极力修补工具解析崩溃、严格参数（`strict: false`）报错、函数名前缀解析失败等适配深水区问题（如 PydanticAI, AutoGen）。
3. **长程记忆一致性与成本追踪**：从 Haystack 修复 Document ID 生成不一致，到 AutoGen 发布内存防毒指南，再到 Emdash 引入本地 token 消耗看板，保障状态持久化的准确性及成本可观测性成为刚需。
4. **端侧性能与 I/O 极限优化**：Superset 和 T3Code 针对 PTY 死锁和 TCP_NODELAY 的网络层调优表明，Agent 动辄产生海量日志输出，对底层承载系统的 I/O 性能提出了严苛挑战。

## 差异化定位分析
- **Haystack vs. Semantic Kernel**：两者均锚定大型企业级市场。Haystack 侧重于通过安全评级（OpenSSF）和架构隔离满足严苛合规；Semantic Kernel 则发挥微软生态优势，打通跨平台语言（.NET/Python）和底层执行抽象。
- **LangGraph vs. Agno**：同为基于图的高级编排框架。LangGraph 凭借 v3 Streaming 和分布式图执行在云原生多步工作流上占据优势；Agno 则在原生 Task API（深度研究/监控）和密码学审计收据上形成错位竞争。
- **AutoGPT vs. CrewAI**：AutoGPT 正在蜕变为一个包含 UI 面板的完整平台（Copilot/AutoPilot），其自上而下的体验闭环意图明显；CrewAI 则自下而上死磕核心编排引擎，致力于将单次任务流升级为多轮复杂事件流。
- **Agent Deck vs. Claude Squad**：两者均是 Agent 终端管理器。Agent Deck 更像一个跨模型（Grok, Claude, Gemini）的底层进程调度中心；Claude Squad 则更侧重于多会话并发的 TUI 界面交互优化与集群指令下发。

## 值得关注的趋势信号
1. **从单次 DAG 到“有状态状态机”的普遍觉醒**：无状态编排已成为过去式，支持断点续跑、会话分叉和长时记忆重载正在成为新一代编排框架的标配能力。
2. **供应链安全与合规成为新的护城河**：多家项目（Agno, Semantic Kernel, Claude Flow）开始将插件供应链防劫持、加密动作回执以及内存防毒写入核心 Roadmap。金融和医疗级的安全标准正在重塑底层框架设计。
3. **A2A 与 MCP 协议实质性地进入工程落地期**：单纯的框架孤岛正在被打破，OpenAI Agents 等项目对 A2A（Agent-to-Agent）协议的实质接入，预示着“跨框架组合 Agent”的复合编排网络即将到来。
4. **Agent 运行时的“前端化”与“桌面化”**：随着 Mux Desktop、T3Code、Emdash 等桌面端项目的繁荣，Agent 的运行态正在向重度本地化 GUI 演进。通过深度接管本地 IDE、沙箱环境及多线程终端，本地桌面正成为多模型混合调度的最高效控制面板。

---

## Agent 编排项目详细报告

<details>
<summary><strong>Claude Squad</strong> — <a href="https://github.com/smtg-ai/claude-squad">smtg-ai/claude-squad</a></summary>

# AI Agent 编排生态日报：Claude Squad
**日期**：2026-06-02 | **分析对象**：[smtg-ai/claude-squad](https://github.com/smtg-ai/claude-squad)

---

### 1. 今日速览
过去 24 小时内，Claude Squad 仓库无新版本发布、无新增或更新 Pull Request。社区活跃度主要体现在 Issue 追踪与讨论上，共有 3 条 Issue 产生更新。当前项目焦点集中在 **UI 交互优化（多会话管理）** 以及 **CI/CD 发布流水线的故障修复**。

### 2. 版本发布
**无新版本发布**。
值得注意的是，原计划的 `v1.0.18` 因 GitHub Actions 执行失败未能成功发布为 Latest Release，目前项目仍处于修复该发布阻塞的阶段。

### 3. 重点 Issues
今日共有 3 条历史 Issue 更新，反映出用户在多 Agent 密集运行时的强烈痛点：

*   **[#295](https://github.com/smtg-ai/claude-squad/issues/295) [CLOSED] Version 1.0.18 release failed**
    *   **概况**：由 Homebrew 维护者提交。`v1.0.18` 的 Release 虽已打 Tag，但因 [CI 运行报错](https://github.com/smtg-ai/claude-squad/actions/runs/26046328570/job/76571380089) 未成功发布至 GitHub Releases，直接影响了 Homebrew 等包管理器的同步更新。目前该 Issue 已关闭，推测发布流程已引起核心团队关注。
*   **[#296](https://github.com/smtg-ai/claude-squad/issues/296) [OPEN] Feature Request: Compact mode**
    *   **概况**：多会话 UI 优化需求。用户反馈在并发会话超过 10 个时，左侧会话面板（Session List）占用空间过大且需要频繁滚动。诉求是提供“紧凑模式”并支持自定义面板宽度。这暴露出 Agent 编排工具在应对大规模并行任务时的 UI 扩展性瓶颈。
*   **[#292](https://github.com/smtg-ai/claude-squad/issues/292) [OPEN] feature request**
    *   **概况**：高级多 Agent 批处理交互请求。开发者要求：
        1. **自动命名**：无需手动命名会话，由 Claude 根据初始 Prompt 自动生成上下文相关的会话名称。
        2. **会话分叉与群控**：支持克隆/复制现有会话（Fork），并允许向多个 Agent 会话并发下发同一个 Prompt。这是从“单点交互”向“Agent 集群控制”演进的典型特征。

### 4. 关键 PR 进展
**无更新**。
过去 24 小时内无新增 PR 或既有 PR 的代码 Review/合并活动。结合 Release 失败的背景，短期内项目可能处于代码合并的冻结或阻塞状态。

### 5. 为什么这个项目在 Agent 编排生态中值得关注
Claude Squad 的近期反馈精准映射了当前 **多 Agent 协同编排领域的发展趋势**：
1. **从“单线程”向“集群化”演进**：开发者的诉求正从“跑通一个 Agent”转变为“同时管理和调度数十个 Agent”。Issue #292 提出的“会话克隆与批量下发 Prompt”是未来自动化代码重构、大规模测试生成的刚需能力。
2. **多对一的管控体验**：随着会话数量增加，仪表盘的密度和状态管理（如 Issue #296 的紧凑模式需求）将成为所有终端 UI 类 Agent 编排工具（如 TUI）的核心竞争力。
3. **包管理与交付链路**：Homebrew 维护者的直接介入表明，Claude Squad 已经具备一定的开发者心智占有率，其对分发链路的稳定性和 CI/CD 健壮性提出了更高的工程化要求。

</details>

<details>
<summary><strong>Crystal</strong> — <a href="https://github.com/stravu/crystal">stravu/crystal</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>dmux</strong> — <a href="https://github.com/standardagents/dmux">standardagents/dmux</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Symphony</strong> — <a href="https://github.com/openai/symphony">openai/symphony</a></summary>

**AI Agent 编排日报：Symphony 生态追踪**
**日期**：2026-06-02
**分析仓库**：[openai/symphony](https://github.com/openai/symphony)

以下是过去 24 小时的项目动态摘要：

### 1. 今日速览
过去 24 小时内，Symphony 仓库的活动集中在对 [Codex](https://github.com/openai/codex) 集成链路的敏捷调整与沙箱环境的基础设施优化。无新增 Issues 或 Release 版本发布。全天共处理 3 个 Pull Requests，核心聚焦于工作流沙箱网络权限控制以及与 Linear 业务流（Linear issue）的线程交互回滚操作。

### 2. 版本发布
* 无。当前项目未在今日产生新的 Release 版本。

### 3. 重点 Issues
* 无。过去 24 小时内未产生新的 Issue 讨论或状态更新。

### 4. 关键 PR 进展
今日的 3 个 PR 展现了项目在 Agent 底层执行环境配置和上游系统对接上的迭代过程：

* **[PR #84] [codex] Add Codex thread links and Linear comment resumes**（已关闭）
  * **作者**: yansenzhou-oai
  * **摘要**: 引入了一流的 Codex 线程循环机制，以支持处理 Linear 业务流中的用户后续跟进评论与终端清理，并添加了 Codex app-server 代理支持和线程归档功能。
  * **链接**: [openai/symphony PR #84](https://github.com/openai/symphony/pull/84)
* **[PR #85] [codex] Revert Codex thread link and Linear comment resume changes**（已关闭）
  * **作者**: yansenzhou-oai
  * **摘要**: 针对刚合并的 PR #84 进行了精准回滚（Revert）。此举移除了 Codex 线程链接和 Linear 评论恢复的相关实现，使 Symphony 主分支暂时退回到先前的工作流实现状态。一日内的快速“引入-回滚”动作，表明该特性的集成对现有编排链路产生了一定影响，正处于排错或重新设计阶段。
  * **链接**: [openai/symphony PR #85](https://github.com/openai/symphony/pull/85)
* **[PR #65] [symphony] Allow network access for package-installing workflow turns**（已关闭）
  * **作者**: andrew749
  * **摘要**: 基础设施层优化。为 Symphony 启动的 FSS（沙箱运行环境）在工作流轮次中开启了 `networkAccess: true` 权限。此举解决了底层包（如 Brix oaipkg）在沙箱内安装时所需的 DNS/网络访问限制，完善了 Agent 自动化执行任务时的依赖获取能力。
  * **链接**: [openai/symphony PR #65](https://github.com/openai/symphony/pull/65)

### 5. 为什么这个项目在 Agent 编排生态中值得关注
从今日的 PR 动态可以清晰观察到 Symphony 在 AI Agent 编排领域的两个核心定位：
1. **精细化的沙箱控制与执行能力**：[PR #65](https://github.com/openai/symphony/pull/65) 表明 Symphony 在处理 Agent 工作流时，深入到了网络权限与包管理的微观控制层面，这对于构建安全且高可用的自动化任务执行环境至关重要。
2. **构建多维度的系统集成闭环**：通过 [PR #84](https://github.com/openai/symphony/pull/84) 和 [PR #85](https://github.com/openai/symphony/pull/85) 的迭代试错可以看出，Symphony 正在深度打通 LLM 推理层（Codex）、项目管理流（Linear）与人类反馈的交互。将外部业务系统直接作为 Agent 编排拓扑的节点，是实现复杂、长周期自动化 Agent 工作流的关键技术方向。

</details>

<details>
<summary><strong>Claude Code Bridge</strong> — <a href="https://github.com/bfly123/claude_code_bridge">bfly123/claude_code_bridge</a></summary>

# Agent 编排生态日报：Claude Code Bridge (2026-06-02)

## 1. 今日速览

过去 24 小时，Claude Code Bridge (CCB) 仓库活跃度集中在**新 Provider 扩展**上。社区开发者完成了 `agy` (Google Antigravity CLI) 后端的集成尝试，共产生 1 条 Issue 和 2 条 PR。目前无新版本发布。

- Issues 更新：1 条
- PR 更新：2 条（均已关闭）
- Releases：0 个

---

## 2. 版本发布

无新版本发布。当前主干仍停留在近期版本（PR 中提及的基线为 v7.1.1）。

---

## 3. 重点 Issues

**#216 [OPEN] feat(provider): native agy backend — rebase + continue #211**
- **作者**：[@LeoLin990405](https://github.com/LeoLin990405) | **创建/更新**：2026-06-01
- **链接**：[SeemSeam/claude_codex_bridge #216](https://github.com/SeemSeam/claude_codex_bridge/issues/216)
- **核心内容**：
  - 原始 PR #211（由 @bookandlover 于 5 月 21 日提交）为 CCB 添加了初始 `agy` provider 后端（基于 pane 的启动 + tmux 鼠标默认配置）。
  - 维护者 @SeemSeam 给出积极反馈（"我考虑下新 provider"），要求将分支 rebase 到最新 main。
  - 原始 PR 已空闲 11+ 天未更新。
  - LeoLin990405 发起此 Issue，提议接手 rebase 并继续推进集成工作。
- **意义**：社区成员自发接手停滞 PR，表明 `agy` 作为新 Provider 后端的需求真实存在，推进节奏取决于 rebase 质量。

---

## 4. 关键 PR 进展

### PR #217 [CLOSED] feat(provider): add agy backend (rebase + continue #211, closes #216)
- **作者**：[@LeoLin990405](https://github.com/LeoLin990405) | **创建/更新**：2026-06-01
- **链接**：[SeemSeam/claude_codex_bridge PR #217](https://github.com/SeemSeam/claude_codex_bridge/pull/217)
- **要点**：
  - 将 `agy` (Google Antigravity CLI) 作为新的 CCB provider 后端引入，当前仅支持 **pane-backed startup**，尚无 execution adapter。
  - 基于 v7.1.1 对 #211 进行 rebase，移除已通过 #212 合并的 mouse-default 相关代码，重新对齐测试。
  - 关联 Issue #216。
- **状态**：已关闭（未合并，可能需要进一步调整后重新提交）。

### PR #218 [CLOSED] test: include agy in OPTIONAL_EXECUTION_PROVIDERS assertion (hotfix #217 CI break)
- **作者**：[@LeoLin990405](https://github.com/LeoLin990405) | **创建/更新**：2026-06-01
- **链接**：[SeemSeam/claude_codex_bridge PR #218](https://github.com/SeemSeam/claude_codex_bridge/pull/218)
- **要点**：
  - 针对 #217 合并后引发的 CI 故障的热修复。
  - #217 在 `OPTIONAL_PROVIDER_NAMES` 中添加了 `agy`（execution registry 会为其创建别名），导致旧测试中 `OPTIONAL_EXECUTION_PROVIDERS` 集合断言失败。
  - CI 故障表现：8/11 个 job 失败，均为同一断言错误。
  - 更新测试断言以包含新的 provider。
- **状态**：已关闭（作为 #217 CI 问题的快速修复）。

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注

Claude Code Bridge 在 AI Agent 编排领域的定位可以概括为**多 Provider CLI 路由层**：

1. **Provider 抽象模式**：项目通过 `OPTIONAL_PROVIDER_NAMES` → `OPTIONAL_EXECUTION_PROVIDERS` 的注册机制，将不同的 AI Agent CLI 后端（Claude Code、Codex、agy 等）统一到相同的 pane 管理和执行框架下。此次 `agy` 的集成尝试验证了这一扩展路径的可行性。

2. **社区驱动的新 Provider 接入**：从 #211 → #216 → #217 → #218 的链路可以看出，新 Provider 的引入流程是：社区提交初始实现 → 维护者评审并要求 rebase → 社区成员协作接手 → CI 对齐。这套流程正在被反复验证和优化。

3. **CI 测试覆盖的进化**：#218 暴露了一个架构级信息——Provider 注册会触发 execution registry 的别名映射，测试需要同步更新。这意味着新 Provider 的接入不仅是代码添加，还涉及执行层的断言一致性，项目的测试框架正在随 Provider 生态扩展而成熟。

4. **Agent 编排的实用价值**：`pane-backed startup` 模式表明 CCB 专注于将 AI Agent CLI 工具集成到 tmux/终端多路复用环境中，这直接面向开发者实际工作流中的 Agent 并发管理和上下文切换需求。

> **总结**：今日动态显示 CCB 正处于 Provider 生态的扩展期，`agy` 的集成虽尚未最终合并，但已完成了从代码到 CI 的完整验证周期。对于关注多 Agent CLI 统一编排的开发者来说，项目的 Provider 注册机制和 pane 管理模式值得持续跟踪。

</details>

<details>
<summary><strong>Dorothy</strong> — <a href="https://github.com/Charlie85270/Dorothy">Charlie85270/Dorothy</a></summary>

# Agent 编排生态日报摘要：Dorothy
**日期**: 2026-06-02  
**项目**: [Dorothy (Charlie85270/Dorothy)](https://github.com/Charlie85270/Dorothy)

---

### 1. 今日速览
过去 24 小时内，Dorothy 仓库整体活跃度较低，无代码提交与 PR 更新。生态互动主要集中在存量 Issue 的讨论跟进，重点为 macOS 环境下的安装兼容性报错。

### 2. 版本发布
- **无新版本发布**。近 24 小时内未产生新的 Release 或 Tag。

### 3. 重点 Issues
- **macOS 安装兼容性异常**
  - **Issue**: [#50 [OPEN] Cannot install on macOS 26.4](https://github.com/Charlie85270/Dorothy/issues/50)
  - **状态**: Open（1 条评论，0 个赞同）
  - **详情**: 由用户 `bjoern2000` 于 4 月创建，今日有新的互动。该问题报告在最新的 macOS 26.4 环境下进行项目部署时失败，报错信息包含 UI 渲染截图。此类环境兼容性问题值得使用 Apple Silicon 或最新 macOS 的开发者重点关注。

### 4. 关键 PR 进展
- **无**。过去 24 小时内无新建、合并或关闭的 Pull Request。

### 5. 为什么这个项目在 Agent 编排生态中值得关注
*(注：基于项目公开数据与生态定位客观评估)*
- **自动化与工作流整合**: Dorothy 提供了特定的任务执行与自动化编排框架，作为构建复杂 AI Agent 流水线的基础设施组件。
- **生态长尾补充**: 在当前 AI Agent 框架（如 LangChain, AutoGen 等）趋于同质化的背景下，类似 Dorothy 这样的垂直/轻量级开源项目，为特定场景的 Agent 角色分配与工作流定制提供了额外的开源解法选项。
- **现状提示**: 虽然当前项目处于低频维护期（PR 和 Release 较少），但持续的 Issue 互动表明仍有开发者在实际测试和尝试集成。对于寻求非标 Agent 编排方案的技术团队，建议优先评估其底层依赖与当前系统环境的兼容性。

</details>

<details>
<summary><strong>Jean</strong> — <a href="https://github.com/coollabsio/jean">coollabsio/jean</a></summary>

# Agent 编排生态日报：Jean 项目动态 (2026-06-02)

## 1. 今日速览
过去 24 小时内，Jean（`github.com/coollabsio/jean`）无新版本发布，无新增或更新的 Issue。项目活跃度主要体现在存量 PR 的推进上，共有 2 个 PR 在昨日发生状态更新。整体处于平稳迭代期，重点聚焦于前端 UI 交互优化与底层性能调优。

## 2. 版本发布
- **无新版本发布**：近 24 小时内未检索到新的 Release。

## 3. 重点 Issues
- **无动态**：过去 24 小时内无新增 Issue 或存量 Issue 更新（共 0 条）。

## 4. 关键 PR 进展
昨日有 2 个重要 PR 发生了更新，分别涉及 UI 交互体验与系统资源调度优化：

- **PR #382** `[OPEN]` feat(projects): add manual worktree ordering
  - **作者**: horacioh
  - **更新日期**: 2026-06-01
  - **核心变更**: 为项目画布选择器（canvas selector）引入了手动排序模式（Manual worktree sort mode），支持通过拖拽重新排列工作树顺序，增强了多 Agent 项目管理的视觉与交互灵活性。
  - **链接**: [coollabsio/jean PR #382](https://github.com/coollabsio/jean/pull/382)

- **PR #371** `[CLOSED]` perf(macos): reduce GPU load with reduced blurring/animations, shared tick store and optional vibrancy
  - **作者**: petrbela
  - **更新日期**: 2026-06-01
  - **核心变更**: 针对 macOS 端进行深度性能调优。通过减少模糊效果/动画、引入共享 tick store 以及将毛玻璃效果设为可选，成功将 M1 Pro MacBook Pro 上的 GPU 持续负载从 ~75% 大幅降至 10-30%。
  - **链接**: [coollabsio/jean PR #371](https://github.com/coollabsio/jean/pull/371)

## 5. 为什么这个项目在 Agent 编排生态中值得关注
Jean 在 AI Agent 编排生态中提供了一个高度可视化且注重系统性能的运行环境：
1. **工作流的可视化操控**：从 PR #382 的“拖拽式手动排序”可以看出，Jean 正在致力于降低复杂 Agent 项目的编排门槛，提供直观的画布级交互，使开发者能更便捷地管理并发或协同的 Agent 任务流。
2. **极致的本地运行时优化**：Agent 本地调度和监控通常需要保持长期后台运行。PR #371 通过大幅优化 GPU 占用，展现了项目对“轻量级、低能耗”的极致追求，确保在长时间运行复杂的本地 Agent 集群时，不会拖垮宿主机的整体性能。

</details>

<details>
<summary><strong>OpenKanban</strong> — <a href="https://github.com/TechDufus/openkanban">TechDufus/openkanban</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Claude Flow</strong> — <a href="https://github.com/ruvnet/claude-flow">ruvnet/claude-flow</a></summary>

# AI Agent 编排日报摘要 — Claude Flow
**日期**：2026-06-02 | **项目**：[ruvnet/claude-flow](https://github.com/ruvnet/claude-flow)

---

## 1. 今日速览

| 指标 | 数量 |
|------|------|
| Issues 更新 | 7 条（均为 [OPEN]） |
| PR 更新 | 3 条（均为 [OPEN]） |
| 新版本发布 | **0** |

过去 24 小时无新 Release。Issue 和 PR 活动集中在 **CI/验证流程故障、CLI 冷启动性能、插件供应链安全** 以及 **Agent 路由逻辑缺陷** 四个方向。

---

## 2. 版本发布

**无新版本发布。** 当前最新版本仍为 `v3.10.31`。

---

## 3. 重点 Issues

### 3.1 🔴 CLI 冷启动阻塞 60+ 秒 — ONNX 模型下载卡死
- **Issue**: [#2256](https://github.com/ruvnet/ruflo/issues/2256) `[verification, severity:high]`
- **要点**: `npx @claude-flow/cli@alpha --version` 在冷启动时因下载 ONNX 模型超过 60 秒被 SIGTERM (exit 143)。CLI 初始化不应触发重量级模型拉取，影响所有首次使用体验。
- **评论**: 0 | **作者**: ruvnet

### 3.2 🔴 Witness manifest 缺失 95 文件 + 2 文件漂移
- **Issue**: [#2047](https://github.com/ruvnet/ruflo/issues/2047) `[verification, severity:high]`
- **要点**: 三平台 (macOS/Linux/Windows) witness manifest 报告 `missing=95, drift=2`。Ed25519 签名本身有效，但构建产物完整性校验大面积失败。
- **评论**: 24 | **作者**: ruvnet

### 3.3 🔴 verify.mjs 无法加载 @noble/ed25519 — 签名验证跳过
- **Issue**: [#2243](https://github.com/ruvnet/ruflo/issues/2243) `[verification, severity:high]`
- **要点**: source-only checkout 环境中 `@noble/ed25519` 缺失，三平台 manifest 验证全部被跳过。与 #2047 形成链式风险。
- **评论**: 3 | **作者**: ruvnet

### 3.4 🟡 CI workflow 运行状态不可验证
- **Issue**: [#1926](https://github.com/ruvnet/ruflo/issues/1926) `[verification, severity:medium]`
- **要点**: 验证环境中缺少 `gh` CLI 和 GitHub MCP 工具，无法执行 `gh run list` 检查 CI 状态。
- **评论**: 28 | **作者**: ruvnet

### 3.5 🔴 Memory 存储三个持久化表面互相矛盾
- **Issue**: [#2259](https://github.com/ruvnet/ruflo/issues/2259)
- **要点**: `ruflo memory store` 写入 `ruvector.db`，但 `stats`/`list`/`search` 读取空的 sql.js 实例。同一套 Memory API 暴露了三个互相矛盾的数据面，属于编排系统核心数据一致性问题。
- **评论**: 0 | **作者**: shaharKeisarApps

### 3.6 🟡 Agent Router 使用非锚定正则 — 短 Token 误路由
- **Issue**: [#2257](https://github.com/ruvnet/ruflo/issues/2257)
- **要点**: `.claude/helpers/router.js` 中 agent 匹配使用 `cd|ci|ui|add|structure` 等短 token 的子串正则（无 `\b` 锚定），导致在无关单词内部误匹配，80% 置信度下路由错误。直接影响 Agent 编排调度准确性。
- **评论**: 0 | **作者**: PrimitiveOne

### 3.7 🔄 Dream Cycle: 插件供应链 SCH 攻击 77.67% 得手率
- **Issue**: [#2254](https://github.com/ruvnet/ruflo/issues/2254) `[dream-cycle, security, swarm]`
- **要点**: 自动化安全轮巡发现 **Semantic Compliance Hijacking (SCH)** — 新型插件供应链攻击，77.67% 突破率 + 0% 检测率。提出 ADR-145 应对方案 + intelligence/swarm 扫描策略。
- **评论**: 0 | **作者**: ruvnet

---

## 4. 关键 PR 进展

| PR | 标题 | 作者 | 要点 |
|----|------|------|------|
| [#2260](https://github.com/ruvnet/ruflo/pull/2260) | docs: fix typo 'ruvflo' → 'ruflo' | W1773ND | 快速入门文档拼写修复，`npx ruvflo init` → `npx ruflo init` |
| [#2258](https://github.com/ruvnet/ruflo/pull/2258) | Claude/focused rubin 4 sk ab | sjbrenchley89 | 无描述，标题不明确，疑似贡献者个人分支提交 |
| [#2255](https://github.com/ruvnet/ruflo/pull/2255) | [Dream Cycle] ADR-145 插件供应链完整性 + Memory 命名空间治理 | ruvnet | 对应 Issue #2254，实现 SCH 防御机制与 memory namespace 安全治理 |

**值得关注**: [#2255](https://github.com/ruvnet/ruflo/pull/2255) 是今日唯一有实质功能意义的 PR，将 ADR-145 的插件供应链完整性保护落地到代码层面。

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注

1. **暴露了多 Agent 路由的基础工程问题**: Issue #2257 揭示 Agent Router 用非锚定正则做意图匹配，短 token 导致误路由。这是所有基于 token 匹配的 Agent 编排系统的共同陷阱，值得生态借鉴。

2. **Memory 一致性是编排系统核心挑战**: Issue #2259 展示了一个写入/读取路径分离导致数据面矛盾的真实案例。对任何实现持久化 Agent Memory 的编排框架都有参考价值。

3. **插件供应链安全 (SCH) 是新攻击面**: Issue #2254 / PR #2255 提出的 Semantic Compliance Hijacking 概念，在 AI Agent 插件生态中具有普适性威胁——恶意插件通过语义伪装绕过合规检查，77.67% 得手率值得警惕。

4. **CI/验证管线自身可靠性堪忧**: Issues #1926、#2047、#2243、#2256 显示项目的自动化验证管线存在工具链缺失、构建产物漂移、签名依赖缺失、冷启动超时等多重问题，尚未形成可信的持续验证闭环。

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

过去24小时无活动。

</details>

<details>
<summary><strong>OpenFang</strong> — <a href="https://github.com/RightNow-AI/openfang">RightNow-AI/openfang</a></summary>

# OpenFang Agent 编排生态日报 (2026-06-02)

## 1. 今日速览
过去 24 小时，OpenFang 在底层通信架构和 A2A（Agent-to-Agent）协议实现上迎来重大更新。项目核心贡献者集中提交了 3 个关键的链式 PR，旨在彻底重构异步调度机制，并修复多渠道回调的上下文丢失问题。同期无新版本发布，有 1 条重点 Issue 处于活跃状态。

---

## 2. 版本发布
**无新版本发布。**

---

## 3. 重点 Issues
- **[#891] [OPEN] agent_send_async: deliver callback results through channel bridge**
  - **作者**: pbranchu
  - **链接**: [RightNow-AI/openfang Issue #891](https://github.com/RightNow-AI/openfang/issues/891)
  - **进展更新**: 该 Issue 于昨日新增评论，讨论持续活跃。
  - **核心痛点**: 当前 `agent_send_async` 通过硬编码的 voice-only channel (`ASYNC_RESULT_TX`) 传递结果。当源会话来自 Chat、Email 等其他渠道时，结果会被静默丢弃（触发 `WARN: Async result received but no active voice session`）。
  - **分析**: 这是一个典型的跨渠道多态路由缺陷。解决该问题是实现真正多模态 Agent 编排的底层前置条件。

---

## 4. 关键 PR 进展
核心开发者 pbranchu 提交了一个**严密的 3 阶段依赖链 PR 组**，专门针对底层通信和 A2A 流式交互进行重构：

1. **[#1219] [OPEN] a2a: switch synchronous a2a_send to SSE streaming (tasks/sendSubscribe)**
   - **链接**: [RightNow-AI/openfang PR #1219](https://github.com/RightNow-AI/openfang/pull/1219)
   - **摘要**: **基础重构 PR**。将同步 `a2a_send` 从阻塞式的 `tasks/send` JSON-RPC 迁移到基于 EventSource 的 SSE 流式通信 (`tasks/sendSubscribe`)，并提取了公共 helper `consume_sse_stream`。

2. **[#1220] [OPEN] kernel: thread channel callback context through agent loop (replaces global DashMap)**
   - **链接**: [RightNow-AI/openfang PR #1220](https://github.com/RightNow-AI/openfang/pull/1220)
   - **摘要**: **上下文隔离修复**。重构 `KernelHandle::send_message`，将 `ChannelCallbackContext` 作为参数贯穿 Agent Loop，移除了全局的 `DashMap<AgentId, ChannelCallbackContext>`。此举消除了多用户/跨渠道回调溢出的并发竞争风险，是对 #891 Issue 的底层修复。

3. **[#1221] [OPEN] a2a: add async dispatch (a2a_send_async / check_task / cancel_task) — replaces #1066**
   - **链接**: [RightNow-AI/openfang PR #1221](https://github.com/RightNow-AI/openfang/pull/1221)
   - **摘要**: **功能演进 PR**（依赖于 #1219, #1220）。在 SSE 流和 kernel 上下文线程重构的基础上，正式实现 A2A 异步任务调度，提供 `a2a_send_async`、`check_task` 和 `cancel_task` 核心 API，替代了早期设计存在缺陷的 #1066 PR。

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注
从近期的 Commits 和 PR 机制可以看出，OpenFang 正在从“单次同步调用”向**“复杂异步流式编排”**演进，这对于 AI Agent 基础设施意义重大：

- **标准的原生支持**: 通过将 A2A（Agent-to-Agent）通信全面转向 SSE (Server-Sent Events) 流式传输，OpenFang 正在积极拥抱现代 LLM 通信标准（类似 Google 提出的 A2A 协议规范），大幅提升多 Agent 协同的实时性。
- **状态管理的硬核重构**: 引入全局 `DashMap` 到参数化上下文 (`ChannelCallbackContext`) 的重构，表明项目团队在严肃对待企业级多租户/多通道场景下的状态隔离问题。
- **异步编排能力补齐**: 随着 `a2a_send_async` 及相关生命周期管理 API（查询/取消）的加入，OpenFang 正在构建支持长时间挂起、跨模态触达的分布式 Agent 任务调度内核。

</details>

<details>
<summary><strong>Aperant</strong> — <a href="https://github.com/AndyMik90/Aperant">AndyMik90/Aperant</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Gastown</strong> — <a href="https://github.com/gastownhall/gastown">gastownhall/gastown</a></summary>

# Gastown Agent 编排生态日报 – 2026-06-02

**数据统计周期**：2026-06-01 00:00 - 2026-06-02 00:00 UTC
**项目仓库**：[gastownhall/gastown](https://github.com/gastownhall/gastown)

---

### 1. 今日速览
过去 24 小时内，Gastown 仓库共处理 **2 条 Issues** 和 **2 条 PRs**，**0 个新版本发布**。今日动态高度聚焦于底层状态存储引擎与前端 Dashboard 交互时的资源开销问题。

### 2. 版本发布
**无新版本发布**。目前的迭代主要集中在错误修复（如 convoy fetch 风暴）和底层测试覆盖率的提升上，尚未固化至新的 Release 版本。

### 3. 重点 Issues
Dashboard 与 Dolt SQL 数据库交互引发的 CPU/内存过量消耗是当前的焦点，两份独立的 Issue 报告相互印证了该缺陷。

*   **[#4165](https://github.com/gastownhall/gastown/issues/4165) `[OPEN]` gt dashboard 导致 Dolt SQL server 空闲时占用约 70% CPU**
    *   **作者**: SvenMeyer
    *   **摘要**: 独立的 `dolt sql-server` 在空闲时状态良好，但一旦 `gt dashboard` 启动并与 Gastown 管理的 Dolt 服务器进行交互，CPU 占用率急剧跃升至 60-70%，这使得内置仪表盘无法作为“始终在线”的本地服务运行。用户期望的空闲 CPU 目标是 <1%。
    *   **关联**: 该问题与 [#3396](https://github.com/gastownhall/gastown/issues/3396) 直接相关。
*   **[#3396](https://github.com/gastownhall/gastown/issues/3396) `[OPEN]` Dashboard 针对Dolt的高频子进程生成导致过度的 CPU/内存使用**
    *   **作者**: vikasagarwal101
    *   **摘要**: Dashboard Web UI 导致宿主机 CPU 和内存消耗异常（CPU 峰值达 440%+）。根本原因指向沙箱容器内 `dolt sql-server` 进程的高频生成。只要保持仪表盘选项卡打开，资源占用就会随时间推移逐渐攀升，重启 dashboard 仅能暂时缓解。

### 4. 关键 PR 进展
过去 24 小时内处理的两个 PR 均已关闭，主要集中在对 Wisp 检查机制的测试覆盖和前端网络请求风暴的修复。

*   **[#3995](https://github.com/gastownhall/gastown/pull/3995) `[CLOSED]` fix(web): 防止 convoy 获取失败风暴**
    *   **作者**: Bella-Giraffety
    *   **摘要**: 修复了 Web 端获取 convoy 数据时的请求风暴问题。将 `FetchConvoys` 的断路器重试机制序列化，确保在退避开启期间只能运行一次重试；同时将无效的 convoy JSON 视作断路器失败处理，与 bd 命令失败逻辑对齐。增加了并发请求Stampede（惊群效应）的测试覆盖。
*   **[#3965](https://github.com/gastownhall/gastown/pull/3965) `[CLOSED]` test: 覆盖 Dolt-first wisp 检查**
    *   **作者**: Bella-Giraffety
    *   **摘要**: 增加了 `doctor` 检查机制的回归测试。确保在 Dolt 不可用时，误分类的 wisp 不会使用过时的 `issues.jsonl`，并且 `gt ready` 命令会从 `bd mol wisp list --json` 获取 wisp ID，而非依赖旧的本地文件。

### 5. 为什么这个项目在 Agent 编排生态中值得关注

在 AI Agent 编排架构中，**状态存储与低延迟监控**是保障多 Agent 协同的核心基础设施。从今日的数据可以看出 Gastown 的几个关键特质：
1.  **强依赖 Dolt 进行状态管理**：Gastown 使用具备版本控制能力的 Dolt 数据库作为底层状态存储。它正在解决 Agent 数据库高频轮询带来的“资源空耗”难题（如 Issue #3396 和 #4165 所示），这对于构建常驻后台的 Agent 控制面至关重要。
2.  **成熟的容灾与降级机制**：PR #3995 中对“请求风暴”和断路器的精细化控制，以及 PR #3965 中对 Dolt 不可用时的降级处理逻辑，展示了该项目在处理分布式 Agent 状态同步时的高容错设计。
3.  **闭环的工具链生态**：项目拥有配套的 CLI 工具（`gt`）、内部命令行（`bd`）、沙箱隔离环境及自诊断机制（`doctor`），体现了现代复杂 Agent 编排框架所需的工程深度。

</details>

<details>
<summary><strong>HumanLayer</strong> — <a href="https://github.com/humanlayer/humanlayer">humanlayer/humanlayer</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Ralph Claude Code</strong> — <a href="https://github.com/frankbria/ralph-claude-code">frankbria/ralph-claude-code</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Superset</strong> — <a href="https://github.com/superset-sh/superset">superset-sh/superset</a></summary>

以下是为您生成的 2026-06-02 Superset 项目 AI Agent 编排生态日报摘要：

### 1. 今日速览
过去 24 小时内，Superset 项目保持高度活跃。新增/更新了 **6 条 Issues** 和 **13 条 Pull Requests**，并发布了 1 个 Canary 测试版本。
今日动态主要集中在 **终端稳定性和延迟优化**（如 PTY 死锁、TCP_NODELAY、窗口重绘）、**安全漏洞修复**（OAuth 绕过、IDOR 越权）以及 **Agent 工作流增强**（CLI 命令行支持）。

---

### 2. 版本发布
*   **[desktop-canary] Superset Desktop Canary** (发布于 2026-06-01)
    *   内部自动测试版本，基于 `main` 分支构建 (Commit: `9bf4052b1`)。
    *   链接：`https://github.com/superset-sh/superset/releases/tag/desktop-canary`

---

### 3. 重点 Issues
今日暴露的核心问题集中在桌面端的终端交互体验和 Agent 运行时的安全性上：

*   **[PTY 死锁] 终端在 Agent 高并发输出时硬冻结** (Issue #4993)
    *   **摘要**：当 CLI Agent 产生大量突发 stdout 时，Superset 终端窗格会发生硬冻结。原因是 Agent 主线程在向 PTY 执行阻塞式 `write()` 时遇到了背压死锁。
    *   **链接**：`https://github.com/superset-sh/superset/issues/4993`
*   **[安全隔离] Docker 沙箱支持** (Issue #3957)
    *   **摘要**：社区呼声较高（5 👍）。用户希望在工作区通过 Docker 提供沙箱环境，以安全地运行 YOLO 模式 / `--dangerously-skip-permissions`，防止意外篡改系统或泄露隐私数据。
    *   **链接**：`https://github.com/superset-sh/superset/issues/3957`
*   **[交互 Bug] 窗口缩放导致终端宽度卡死** (Issue #5021)
    *   **摘要**：将 Superset 窗口缩小后再最大化，终端文本会保持较窄的宽度，仅使用屏幕左半部分。
    *   **链接**：`https://github.com/superset-sh/superset/issues/5021`

---

### 4. 关键 PR 进展
今日合并/提交的 PR 包含多个关键的架构优化和安全补丁：

*   **[安全修复] 修复 tRPC OAuth 越权漏洞** (PR #5018) - `[CLOSED]`
    *   **摘要**：外部安全研究员披露了一个账户接管漏洞。旧逻辑仅校验 JWT 的 `aud`，未检查签发的 OAuth client。现已限制仅受信任的 client 可在 bearer path 获取完整用户 session。
    *   **链接**：`https://github.com/superset-sh/superset/pull/5018`
*   **[安全修复] 修复 Chat Session IDOR 越权漏洞** (PR #5017) - `[CLOSED]`
    *   **摘要**：`/api/chat/[sessionId]` 路由此前仅验证用户是否登录，未校验其是否为该 session 的所有者。已增加组织级别的归属权校验。
    *   **链接**：`https://github.com/superset-sh/superset/pull/5017`
*   **[性能优化] 终端防抖/延迟优化** (PR #5013) - `[CLOSED]`
    *   **摘要**：针对远程终端击键延迟 1-3 秒的问题，通过在 Tunnel sockets 上禁用 Nagle 算法，显著降低了交互式终端的网络延迟。
    *   **链接**：`https://github.com/superset-sh/superset/pull/5013`
*   **[Agent 编排] 新增 `--command` 标志** (PR #5027) - `[OPEN]`
    *   **摘要**：向 `superset ws create` 命令添加 `--command <cmd>` 标志。用户现在可以在创建工作区时直接运行指定的 Shell 命令（如环境初始化），与 `--agent` 流水线完美配合。
    *   **链接**：`https://github.com/superset-sh/superset/pull/5027`
*   **[Linux 兼容性] 转发显示服务器环境变量** (PR #5004) - `[OPEN]`
    *   **摘要**：修复 Linux 环境下的剪贴板图片粘贴问题。确保 `XAUTHORITY` 和 `WAYLAND_DISPLAY` 正确转发给终端 PTY，使 Agent 能够正常调用 `xclip` 等工具。
    *   **链接**：`https://github.com/superset-sh/superset/pull/5004`

---

### 5. 为什么这个项目在 Agent 编排生态中值得关注
作为 AI Agent 编排工具，Superset 目前正在经历**底层运行时的成熟化**阶段：
1. **极致的终端沙箱化**：通过 Issue #3957 和对应的沙箱机制探讨，项目正在解决“如何安全赋予 Agent 系统级最高权限”这一行业痛点，让 Agent 可以放心执行危险操作。
2. **Agent I/O 性能突破**：PTY 死锁修复（#4993）和 TCP_NODELAY 网络层调优（#5013）表明，项目正在针对 Agent 动辄产生海量日志输出的特性，重构底层 I/O 承载能力。
3. **完善 CI/CD 与 Agent 闭环**：PR #5027（`--command` 支持）和自动生成 Changelog 的机制（PR #5024）印证了 Superset 正在将“环境初始化 -> Agent 编排执行 -> 自动化反馈”的流水线打磨得更加顺滑。同时，高频的严重漏洞修复也说明其在多租户 Agent 环境下的安全基座正在迅速加固。

</details>

<details>
<summary><strong>T3Code</strong> — <a href="https://github.com/pingdotgg/t3code">pingdotgg/t3code</a></summary>

# AI Agent 编排生态日报：T3Code (pingdotgg/t3code) - 2026-06-02

## 1. 今日速览
过去 24 小时内，T3Code 项目保持较高的社区活跃度。无新版本发布，但底层架构和多 Provider 支持方面有显著进展。共处理 **10 条 Issues**（含多仓库工作流、性能与鉴权重症问题），以及 **15 条 PRs**（涉及云隧道、WSL 双后端并行、Effect RPC 性能调优等核心代码提交）。

## 2. 版本发布
- **最新 Releases**：无。当前项目仍处于密集的开发迭代阶段，重点在架构重构与功能扩展。

## 3. 重点 Issues
多仓库协同和端侧性能是当前用户反馈的焦点。
- **多仓库工作流支持需求强烈**：社区对跨 Repo 项目的 Agent 编排需求显著（12 👍）。用户希望摆脱 Cursor 的限制，在同一个工作区内无缝调度 Agent 修改多个代码库。
  - [#1453 [Question] Is there a way to work with multi-repo projects?](https://github.com/pingdotgg/t3code/issues/1453)
- **桌面端性能与能耗问题**：多名用户报告了 macOS 下的空载掉电问题（涉及 Cursor Provider）以及 App 启动耗时过长（7-10秒）。
  - [#2774 [Bug]: t3 code drains battery on mac in idle when Cursor provider is on](https://github.com/pingdotgg/t3code/issues/2774)
  - [#2726 [Bug]: Desktop app startup time too slow](https://github.com/pingdotgg/t3code/issues/2726)
- **Agent 环境变量隔离与多模态交互**：提出了按项目粒度隔离环境变量（防止 Agent 敏感信息越权），以及支持 Codex 图像生成能力的实用性需求。
  - [#1703 [Feature]: Per-project environment variables](https://github.com/pingdotgg/t3code/issues/1703)
  - [#2398 [Feature]: Codex image generation support](https://github.com/pingdotgg/t3code/issues/2398)
- **上层扩展呼声**：用户期待 T3Code 能以 VS Code 插件形态提供，以更好地集成到现有开发生态中。
  - [#2713 [Feature]: VS Code extension](https://github.com/pingdotgg/t3code/issues/2713)

## 4. 关键 PR 进展
底层云连接架构重构与本地双环境编排是今日 PR 的主线。
- **云隧道与移动端远程连接（云原生架构）**：核心开发者提交了特大体积（XXL）PR，引入托管中继隧道和云认证基础设施，旨在彻底打通 Mobile/Web 与本地 Agent 的安全远程控制链路。
  - [#2837 [size:XXL] feat(cloud): Add managed relay tunnels and APN service](https://github.com/pingdotgg/t3code/pull/2837)
- **桌面端 WSL + Windows 双后端并行调度**：打破原有的单后端切换限制，使得本地 Agent 可以同时触达 Windows 原生与 WSL 两侧的项目文件。
  - [#2751 [size:XXL] Desktop: parallel WSL + Windows backends with mode picker](https://github.com/pingdotgg/t3code/pull/2751)
- **API 标准化与鉴权重构**：将环境元数据、认证和编排的 HTTP 接口抽离为统一的 `EnvironmentHttpApi` 契约，提升了 RPC 通信的规范性。
  - [#2858 [size:XXL] Use HttpApi for Environment APIs & standardize authn/authz](https://github.com/pingdotgg/t3code/pull/2858)
- **底层稳定性与性能优化**：
  - 修复大型 Agent 状态快照导致的 RPC Ping 超时问题，将延迟容忍从 5 秒提高至 60 秒 ([#2885](https://github.com/pingdotgg/t3code/pull/2885))。
  - 优化侧边栏未读 Agent 完成状态的订阅逻辑，降低前端资源消耗 ([#2895](https://github.com/pingdotgg/t3code/pull/2895))。
  - 修复 SSH 环境下的鉴权时间戳反序列化 Bug ([#2694](https://github.com/pingdotgg/t3code/pull/2694))。
- **生态集成与模型配置**：增加对 OpenCode 技能的获取 ([#2891](https://github.com/pingdotgg/t3code/pull/2891))，并支持自定义 Codex 模型配置文件与启动参数 ([#2892](https://github.com/pingdotgg/t3code/pull/2892))。

## 5. 为什么这个项目在 Agent 编排生态中值得关注
T3Code 正试图解决当前 AI 编程工具（如 Cursor）在**重度工程化场景下的局限性**。从今日的数据可以看出其明确的战略方向：
1. **从单一环境到全异构计算编排**：通过支持 WSL 与 Windows 双后端并行、跨多仓库工作区，T3Code 正在构建能处理复杂系统架构的 Agent 运行环境。
2. **云边协同的 Agent 控制面**：随着云隧道（Relay Tunnels）、移动端连接及标准化鉴权 API 的引入，T3Code 不仅是一个桌面 IDE，更在打造一个“随处可用、远程分发任务”的 Agent 编排网络。
3. **多模型/多引擎的透明代理**：通过对 Codex、OpenCode、Claude 不同 Provider 的底层参数适配、配置文件支持与鉴权重构，项目致力于打造一个解耦的 Agent 运行时，让开发者可以无感切换和组合不同的大模型底层能力。

</details>

<details>
<summary><strong>Agent Orchestrator</strong> — <a href="https://github.com/ComposioHQ/agent-orchestrator">ComposioHQ/agent-orchestrator</a></summary>

# Agent 编排生态日报：agent-orchestrator 项目摘要

**日期**: 2026-06-02
**项目**: [ComposioHQ/agent-orchestrator](https://github.com/ComposioHQ/agent-orchestrator)

---

## 1. 今日速览

过去 24 小时内，项目保持高频的底层维护与功能迭代。共计更新 Issues 2 条，PR 9 条，无新版本发布。核心动态集中在 **Codex Agent 插件的无头运行修复** 以及 **社区贡献的 Zellij 运行时插件推进**。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 重点 Issues

今日新增的 2 个 Issue 均由社区成员 [NichUK](https://github.com/NichUK) 提交，精准定位了 `agent-codex` 插件在无头/非交互式场景下的生命周期管理缺陷：

- **[#2080 [OPEN] completed Codex worker later marked stuck during lifecycle detection](https://github.com/ComposioHQ/agent-orchestrator/issues/2080)**
  **摘要**: 在 Windows 本地进程运行时中，已上报 `agentReportedState: "completed"` 状态的 Codex Worker，后续被生命周期探测错误地标记为 `stuck`。该问题直指 Agent 编排中**状态机终态判定的可靠性**，即编排器如何正确接管和处理已完成子任务的状态，避免误杀。

- **[#2078 [OPEN] agent-codex should launch headless workers with codex exec](https://github.com/ComposioHQ/agent-orchestrator/issues/2078)**
  **摘要**: 当前 `agent-codex` 插件使用 `codex <prompt>` 启动 Worker，这会触发交互式 CLI 模式，导致无值守的 AO Worker 挂起。建议修改为非交互式的 `codex exec <prompt>` 指令。这反映了 Agent 编排工具在对接外部 CLI Agent 时的**命令行接口适配**难题。

---

## 4. 关键 PR 进展

9 个 PR 中包含 6 个依赖更新以及 3 个核心功能/修复 PR：

### 修复与功能迭代
- **[#2079 [OPEN] fix(agent-codex): launch workers with codex exec](https://github.com/ComposioHQ/agent-orchestrator/pull/2079)**
  **摘要**: 针对 Issue #2078 的直接修复。将底层启动命令替换为 `codex exec` 以确保非交互式运行，同时保留了现有权限、模型和配置参数的处理逻辑。该修复显著提升了 AO 对接 Codex Agent 的无人值守稳定性。

- **[#1539 [OPEN] feat: add Zellij runtime plugin](https://github.com/ComposioHQ/agent-orchestrator/pull/1539)**
  **摘要**: 社区贡献的重量级功能，新增内置的 `@aoagents/ao-plugin-runtime-zellij` 插件。Zellij 作为现代终端复用器，将其作为运行时插件引入，不仅丰富了 AO 的运行时生态，还针对其 Session 名称长度限制进行了专门映射处理。

- **[#1547 [OPEN] test(cli): add ao spawn --prompt coverage](https://github.com/ComposioHQ/agent-orchestrator/pull/1547)**
  **摘要**: 完善 CLI 核心命令 `ao spawn --prompt` 的测试覆盖率，包含无 Issue ID 绑定、伴随 Issue ID 使用、输入清理及 4096 字符边界限制等场景的测试用例。保障了编排调度入口指令的鲁棒性。

### 自动化依赖维护
- Dependabot 在过去一天内活跃推送了 6 个 PR（[PR #2085](https://github.com/ComposioHQ/agent-orchestrator/pull/2085), [PR #2084](https://github.com/ComposioHQ/agent-orchestrator/pull/2084) 等），主要跨目录批量升级了核心依赖 `vitest`、`next` 和 `ws`，其中早期提交的 [PR #1808](https://github.com/ComposioHQ/agent-orchestrator/pull/1808) (Next.js 15.5.18 升级) 已被关闭处理。这表明项目在底层安全性及依赖跟进上保持严格的自动化节奏。

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注？

从今日的数据切片可以看出，`agent-orchestrator` 正在解决多 Agent 编排中的两个核心技术痛点：

1. **异构 Agent 的深度适配**：项目并未停留在简单的 API 层面调度，而是深入到外部 Agent (如 OpenAI Codex) 的本地进程生命周期管理（#2078, #2079），解决无头模式下状态同步和指令交互的真实问题。
2. **运行时环境的可扩展性**：通过引入如 Zellij 等多样化的运行时插件（#1539），项目正在构建一个灵活的底层执行环境，这使得复杂的多 Agent 编排任务能够更加安全、隔离地在不同终端复用器中高效运行。

</details>

<details>
<summary><strong>1Code</strong> — <a href="https://github.com/21st-dev/1code">21st-dev/1code</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ClawTeam</strong> — <a href="https://github.com/HKUDS/ClawTeam">HKUDS/ClawTeam</a></summary>

# Agent 编排日报摘要：ClawTeam
**日期**: 2026-06-02 | **分析项目**: [HKUDS/ClawTeam](https://github.com/HKUDS/ClawTeam)

## 1. 今日速览
过去 24 小时内，ClawTeam 项目整体处于平稳迭代状态。未观测到新版本发布与新增 Issues，但合并队列有一个功能型 PR 更新。项目重点目前集中在底层模型预设的跟进与维护上。

## 2. 版本发布
过去 24 小时无新版本发布。

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。社区与团队今日暂无公开的问题排查或功能需求讨论。

## 4. 关键 PR 进展
*   **[#160 [OPEN] feat: upgrade MiniMax default model to M3](https://github.com/HKUDS/ClawTeam/pull/160)**
    *   **作者**: octo-patch
    *   **核心变更**: 将内置预设中 MiniMax 的默认模型配置从 `MiniMax-M2.7` 升级至最新的 `MiniMax-M3`。涉及区域包括 `minimax-cn`（国内节点）与 `minimax-global`（全球节点）。
    *   **工程进展**: 同步更新了 `tests/test_presets.py` 中的断言逻辑，确保预设配置的变更具备相应的测试覆盖。
    *   **分析**: 这是一个典型的模型供应商迭代跟进 PR。在 Agent 编排系统中，保持底层 LLM Provider 的预设模型处于最新状态，是确保用户开箱即用体验和获取最新推理/工具调用能力的关键。

## 5. 为什么这个项目在 Agent 编排生态中值得关注
ClawTeam 展现了一个成熟 AI Agent 编排框架在“模型路由与集成”方面的工程化标准。通过上述 PR #160 可以看出，该项目采用了高度模块化的预设管理机制。在 Agent 生态中，底层大语言模型的快速迭代（如 M2.7 至 M3）要求编排框架具备解耦的 Provider 层。ClawTeam 将模型配置抽离为独立的 presets 并配合严格的单元测试，这种设计大幅降低了接入和切换底层模型的开发心智负担，使得复杂的 Multi-Agent 编排逻辑能够不受底层模型版本更迭的影响，保持系统稳定性。

</details>

<details>
<summary><strong>Emdash</strong> — <a href="https://github.com/generalaction/emdash">generalaction/emdash</a></summary>

# Emdash Agent 编排生态日报 - 2026-06-02

## 1. 今日速览
过去 24 小时内，Emdash 项目保持高频迭代，共处理 **18 个 PR**（其中 11 个合并/关闭，7 个开放）和 **3 个 Issue**，并发布了最新的稳定版本。核心动态集中在工作流自动化、多 Agent 集成解析以及本地成本分析等关键能力上。

## 2. 版本发布
- **[v1.1.27](https://github.com/generalaction/emdash/releases/tag/v1.1.27)**
  - **重点更新**：
    - 引入全新的 Diff 树状视图与更便捷的选中机制。
    - 文件树结构优化，自动折叠单子文件夹，视觉更紧凑。
    - 日常工作流改善：任务编辑体验升级，终端支持自定义默认 Shell 及更优的剪贴板支持，SSH 与项目配置更顺滑。

## 3. 重点 Issues
- **[#2285 [feat]: standalone chats outside tasks](https://github.com/generalaction/emdash/issues/2285)**
  - **摘要**：提议将 Agent 对话从 Task 强绑定中释放。当前在 Emdash 中发起对话必须创建/绑定 Task（涉及分支/Worktree 切换），这不适合轻量级的探索、头脑风暴或规划。社区正在讨论独立 Chat 模式的架构设计。
- **[#2336 [bug]: crashes on linux when adding a new project](https://github.com/generalaction/emdash/issues/2336)**
  - **摘要**：Linux 发行版（如 Ubuntu）上的回归 Bug。在全新安装后，从本地目录添加项目时，系统文件选择器无法加载目录结构并导致无限转圈/强制退出。
- **[#2235 [feat]: Per-project GitHub account](https://github.com/generalaction/emdash/issues/2235)**
  - **摘要**：请求支持多 GitHub 账号环境。建议在工作区级别配置独立的 GitHub Token 或读取 repo 级别的 `git config gh.account`，摆脱当前全局唯一身份认证的限制。

## 4. 关键 PR 进展
### 核心架构与工作流优化
- **[#2023 feat: add automations](https://github.com/generalaction/emdash/pull/2023) [CLOSED]**
  - 引入基于 Cron 任务的自动化工作流模块，支持创建、编辑、暂停、复制、删除和手动运行。
- **[#2335 fix: automations kill pty session after agent marks done](https://github.com/generalaction/emdash/pull/2335) [OPEN]**
  - 修复自动化执行完毕后未能有效清理/结束 PTY 会话的问题，确保底层进程可靠退出。
- **[#2326 fix: refresh agents on focus](https://github.com/generalaction/emdash/pull/2326) [OPEN]**
  - 优化多 Agent 环境检测，在应用重新获得焦点时，利用最新的 Shell 环境变量刷新本地 Agent 可用性（含防抖与去重逻辑）。
- **[#2327 feat: support namespaces in rpc](https://github.com/generalaction/emdash/pull/2327) [CLOSED]**
  - RPC 架构升级，支持多层级命名空间（如 `[namespace].[sub].function`），为复杂的 Workspace 交互提供更好的代码组织形式。

### 多模型/Agent 支持与成本分析
- **[#2334 feat(usage-stats): Usage view — local token & cost analytics](https://github.com/generalaction/emdash/pull/2334) [OPEN]**
  - 新增本地用量看板。通过纯离线解析本地 transcript 文件，实现对 Claude Code 和 Codex 的 Token 消耗、成本、会话数及模型维度的分析（无需 API/鉴权）。
- **[#2263 forward model override env vars from shell to agent](https://github.com/generalaction/emdash/pull/2263) [CLOSED]**
  - 确保用户在 Shell 中配置的模型覆写环境变量（如 `ANTHROPIC_DEFAULT_SONNET_MODEL` 和子代理配置）能正确传递给 Emdash 拉起的 Agent 进程。
- **[#2324 fix(agent-hooks): add devin cli hook](https://github.com/generalaction/emdash/pull/2324) [CLOSED]**
  - 新增对 Devin CLI 的集成 Hook，捕获并处理 Stop 和 Permission Request 事件。
- **[#2329 fix(opencode): enable hook support](https://github.com/generalaction/emdash/pull/2329) [CLOSED]**
  - 补全了 opencode 运行态的 Hook 机制支持。

### 修复与集成扩展
- **[#2330 feat(pr): allow bypassing merge requirements](https://github.com/generalaction/emdash/pull/2330) [OPEN]**
  - 允许在 Emdash 内部合并 PR 时，绕过部分 CI/分支保护规则。
- **[#2325 fix(tasks): handle offline task creation](https://github.com/generalaction/emdash/pull/2325) [CLOSED]**
  - 网络离线降级处理：当 git fetch 失败时，回退使用缓存的远端 refs 来保障 Task 创建不断阻。
- **[#2320 feat(monday): add Monday.com issue provider integration](https://github.com/generalaction/emdash/pull/2320) [CLOSED]**
  - 新增 Monday.com 作为 Issue Provider，支持看板 URL 解析、状态同步及凭证加密存储。
- **[#2332 fix(db): preserve terminal shell migration order](https://github.com/generalaction/emdash/pull/2332) [OPEN]**
  - 修复数据库 Migration 序号冲突，确保 Terminal shell 配置和 Automations 表按正确顺序迁移。

## 5. 为什么这个项目在 Agent 编排生态中值得关注
1. **从“单体绑定”走向“灵活编排”**：社区正在推进独立会话（#2285）和多账号环境（#2235），表明 Emdash 正在摆脱“一个 Task 贯穿到底”的传统 IDE 模式，向更灵活的 Agent 调度矩阵演进。
2. **全链路离线容灾与生命周期管理**：从 Task 创建时的 Git fetch 离线降级（#2325），到 Agent 进程的变量注入（#2263），再到自动化任务结束后的 PTY 进程精准清理（#2335），项目正在精细打磨 Agent 底层运行时的稳定性。
3. **深度整合主流 AI Agent 与分析工具**：快速跟进 Devin（#2324）、OpenCode（#2329）等 Agent 的生命周期 Hook。同时引入纯本地解析的成本分析看板（#2334），切中了开发者对多模型（Claude, Codex 等）调度时“黑盒成本”的监控痛点。

</details>

<details>
<summary><strong>Collaborator</strong> — <a href="https://github.com/collaborator-ai/collab-public">collaborator-ai/collab-public</a></summary>

以下是为您生成的 2026-06-02 Agent 编排日报摘要：

### 1. 今日速览
截至 2026-06-02，[Collaborator](https://github.com/collaborator-ai/collab-public) 生态过去 24 小时内无新增版本发布，无 Issues 更新。项目当前的开发重心聚焦于底层工具链能力的横向扩展，核心 PR 活跃度集中在代码与版本控制面的深度集成上。

### 2. 版本发布
过去 24 小时内无新版本发布。最新 Release 记录暂无。

### 3. 重点 Issues
过去 24 小时内无新增或更新的 Issues。社区与开发者的注意力目前主要锚定在长周期的核心架构代码合并上。

### 4. 关键 PR 进展
- **PR #44** [OPEN]：[`feat: Add VS Code-style Source Control panel with AI commit messages`](https://github.com/collaborator-ai/collab-public/pull/44)
  - **作者**: enesteve0
  - **动态**: 该 PR 自 3 月底创建后，于昨日（06-01）有了新的推进记录。
  - **技术解析**: 这是一个大型的长周期功能提交，旨在为项目引入完全对标 VS Code 原生体验的源代码控制（SCM）面板。核心实现包括工作区级别的 `git IPC` 通信机制，覆盖了暂存/提交/同步、分支/标签/stash 管理、交互式 Rebase 以及 Submodules 和 LFS 支持。
  - **Agent 生态关联**: 最关键的一点是其引入了 **AI commit messages** 功能。这标志着项目正在通过内部 IPC 机制将大语言模型（LLM）能力下沉到最基础的代码版本控制工作流中，是典型的“AI 辅助开发工具”底层能力拼图。

### 5. 为什么这个项目在 Agent 编排生态中值得关注
Collaborator 并非单纯的模型对话前端，而是致力于构建一个高度集成的 AI 开发者工作台。通过 PR #44 可以看出其演进路径：**通过原生级别的 Git 协议通信（git IPC）和界面级深度融合，为 AI Agent 提供一个可以直接操作代码仓库（读、写、分支管理、冲突解决）的标准化执行环境**。
在 AI Agent 编排生态中，这种架构为构建能够进行复杂工程协作、长上下文代码迭代的高级编码智能体提供了坚实的基建支持，使得编排多个 Agent 进行代码审查、自动化提交和持续集成成为可能。

</details>

<details>
<summary><strong>Agent Deck</strong> — <a href="https://github.com/asheshgoplani/agent-deck">asheshgoplani/agent-deck</a></summary>

# Agent 编排日报摘要：Agent Deck
**日期**：2026-06-02 | **项目**：[agent-deck](https://github.com/asheshgoplani/agent-deck)

---

## 1. 今日速览

过去 24 小时内，Agent Deck 项目保持较高活跃度。项目维护者 `asheshgoplani` 针对社区反馈的严重并发安全问题和新模型适配需求，快速提交了修复代码。

*   **Issues 更新**：4 条（3 Open / 1 Closed）
*   **PR 更新**：10 条（9 Open / 1 Closed）
*   **新版本发布**：0 个

---

## 2. 版本发布

过去 24 小时内无新版本发布（当前最新代码库版本停留在 v1.9.45 左右）。目前多个核心 Bugfix PR（如 #1247, #1245）处于待合并状态，预计将在近期打包发版。

---

## 3. 重点 Issues

### 🚨 严重缺陷：多实例并发模式导致会话互相销毁
*   **Issue**：[#1246 [OPEN] Default multi-instance mode lets concurrent instances tear down each other's live sessions](https://github.com/asheshgoplani/agent-deck/issues/1246)
*   **摘要**：由于 `allow_multiple` 默认值为 `true`，系统允许多个 `agent-deck` 实例在同一配置文件下并行运行。这会导致各自的恢复/重启循环互相破坏存活的会话，引发严重的状态冲突。

### 🛠 功能适配：缺失 Claude Opus 4.8 模型
*   **Issue**：[#1241 [OPEN] Add Claude Opus 4.8 to MODEL_ID_CATALOG](https://github.com/asheshgoplani/agent-deck/issues/1241)
*   **摘要**：当前硬编码的 `MODEL_ID_CATALOG` 最高仅支持到 `claude-opus-4-7`，导致用户无法在 TUI/Web 界面的模型选择器中直接选用最新的 Claude Opus 4.8。

### 📉 兼容性误报：非 Claude 代理消息投递假阴性
*   **Issue**：[#1238 [OPEN] session send false-negative 'dropped silently' for non-Claude agents](https://github.com/asheshgoplani/agent-deck/issues/1238)
*   **摘要**：`session send` 的投递验证机制目前基于 Claude 特有的状态标记。当使用 codewhale/gemini 等其他 Agent 时，即使消息成功投递，也会被错误判定为静默丢弃。

### 🪝 边界异常：Git worktree 重命名引发 Hook 致命错误 (已解决)
*   **Issue**：[#1233 [CLOSED] hook-handler emits FATAL: PROJECT_DIR does not exist](https://github.com/asheshgoplani/agent-deck/issues/1233)
*   **摘要**：当运行中的会话对应的 Git worktree 目录被重命名或移除时，`hook-handler` 会在每次 `PostToolUse` 时抛出 `FATAL: PROJECT_DIR does not exist` 错误。已通过 PR #1243 修复。

---

## 4. 关键 PR 进展

### 🛠 核心修复

*   **修复并发冲突**：[PR #1247 fix(instance): default to single-instance per profile](https://github.com/asheshgoplani/agent-deck/pull/1247)
    *   将 `allow_multiple` 默认值改为 `false`，从根本上阻断了多实例互相销毁会话的 SEVERE 级别 Bug (Closes #1246)。
*   **修复投递验证机制**：[PR #1245 fix(send): tool-aware post-send verify](https://github.com/asheshgoplani/agent-deck/pull/1245)
    *   重构了 `session send` 的验证逻辑，使其兼容非 Claude 工具的信号特征，解决跨 Agent 投递的假阴性问题 (Closes #1238, #1205, #876)。
*   **优化 Hook 容错性**：[PR #1243 fix(hook-handler): graceful degrade on missing PROJECT_DIR](https://github.com/asheshgoplani/agent-deck/pull/1243)
    *   将缺失目录的错误从 `FATAL` 降级为优雅降级，防止因目录重命名导致的进程中断 (Closes #1233)。
*   **UI 视口渲染修复**：[PR #1240 fix(ui): pad viewport rows to prevent iTerm2 ghost lines](https://github.com/asheshgoplani/agent-deck/pull/1240)
    *   通过行填充修复了在 iTerm2 中滚动时的残影（Ghost lines）问题。

### 🚀 功能与生态扩展

*   **新增 Grok 一等支持**：[PR #1239 feat: add first-class Grok (grok-build) tool support](https://github.com/asheshgoplani/agent-deck/pull/1239)
    *   将 xAI 的 Grok Build CLI 从本地配置垫片提升为内置支持的 Agent（与 claude/codex 等同级）。
*   **模型目录更新**：[PR #1242 feat(models): add Claude Opus 4.8 to MODEL_ID_CATALOG](https://github.com/asheshgoplani/agent-deck/pull/1242)
    *   补齐了最新的 Claude 模型选项 (Closes #1241)。
*   **UI 体验优化**：[PR #1165 feat(ui): optional last-update timestamp badge](https://github.com/asheshgoplani/agent-deck/pull/1165) / [PR #1244 fix(ui): Prevent dropdowns from obscuring content](https://github.com/asheshgoplani/agent-deck/pull/1244)
    *   增加了会话行的时间戳徽章，并修复了短终端窗口下拉菜单遮挡输入内容的问题。

### 🧪 测试与基建

*   **修复 E2E 测试**：[PR #1236 test(e2e): fix broken Playwright tests on main](https://github.com/asheshgoplani/agent-deck/pull/1236)
    *   修复了主分支长期存在的 Playwright 截图与 E2E 测试失败问题。

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注

Agent Deck 正在从一个单一的 CLI 包装器演化为**多模型、多实例的底层调度中心**。从近期的 Issue 和 PR 活动可以看出其关键生态价值：

1.  **跨模型生命周期管理**：项目正在着力解决不同底层模型（Claude, Gemini, Grok, Codex）在会话投递、状态反馈上的差异化问题（如 PR #1245），这对于构建统一接口的 Agent 编排层至关重要。
2.  **复杂的并发状态控制**：随着用户在多工作区复杂场景（如 Git worktrees 动态变化）下的深度使用，项目正在快速建立容错与状态隔离机制（如 PR #1247 和 #1243），这是 Agent 编排走向生产环境的核心前提。
3.  **生态兼容性快速响应**：在 Claude Opus 4.8 和 xAI Grok Build 发布后，项目在 24 小时内即跟进了模型目录更新及一等公民级别的支持集成，展现了对 AI 生态前沿极高的敏感度与跟进速度。

</details>

<details>
<summary><strong>Mux Desktop</strong> — <a href="https://github.com/coder/mux">coder/mux</a></summary>

# Mux Desktop Agent 编排日报摘要 (2026-06-02)

## 1. 今日速览
过去 24 小时内，[coder/mux](https://github.com/coder/mux) 保持了高频的迭代节奏。项目共处理了 **2 个 Issues** 和 **9 个 Pull Requests**，并发布了 1 个 **Nightly 构建版本**。从合并的 PR 来看，核心开发团队（包含自动化 Agent）正集中精力修复影响用户体验的 UI 缺陷，优化底层流式数据处理的健壮性，并推进“动态工作流”等核心编排特性的落地。

## 2. 版本发布
- **v0.26.2-nightly.1**: 基于 `main` 分支的自动化每日构建版本 (2026-06-01)。
  - 链接：[Release v0.26.2-nightly.1](https://github.com/coder/mux/releases/tag/v0.26.2-nightly.1)

## 3. 重点 Issues
本期出现 2 个关于前端渲染与交互的缺陷反馈，目前均已被关闭并修复：
- **#3424 [CLOSED] `mux-mention` 渲染失败**：当 `type="file"` 时，组件未能正确渲染出文件路径。该问题已修复。
  - 链接：[coder/mux Issue #3424](https://github.com/coder/mux/issues/3424)
- **#3425 [CLOSED] Mermaid 图表缩放无效**：在 Mermaid 图表中点击放大/缩小按钮无实际视觉变化。
  - 链接：[coder/mux Issue #3425](https://github.com/coder/mux/issues/3425)

## 4. 关键 PR 进展
今日的 PR 动态展示了项目在**多架构支持、流式数据稳定性、UI 交互体验以及自动化工作流编排**上的进展：

- **🤖 Agent 核心编排能力跃升**
  - **#3431 [OPEN] 引入动态工作流**: 由 ThomasK33 提交。这是一个重量级特性，在实验特性开关后新增了一阶动态工作流支持。包含：可复用工作流定义、持久化运行、沙盒化的 JavaScript 编排层、结构化子代理报告验证以及工作流调用卡片。*（注：这是 Agent 编排能力的关键演进）*
    - 链接：[coder/mux PR #3431](https://github.com/coder/mux/pull/3431)
  - **#3432 [OPEN] 沉浸式审查与 Agent 状态栏**: 由 ammar-agent 提交。为全屏“沉浸式审查”模式增加了 Assisted 过滤器指示器，并在顶部状态栏实时展示 Agent 的 TODO 计划与流式传输状态，增强了人机协同的可见性。
    - 链接：[coder/mux PR #3432](https://github.com/coder/mux/pull/3432)

- **🛡️ 流式处理与健壮性优化**
  - **#3415 [CLOSED] 修复 LLM 流式截断问题**: 确保在 AI SDK 的 `finish` 事件触发后才最终确认助手消息。如果非空流提前关闭，Mux 现在会持久化一个可重试的 `stream_truncated` 状态，而不是错误地将残缺文本提交到记录中，极大提升了 Agent 通信的容错性。
    - 链接：[coder/mux PR #3415](https://github.com/coder/mux/pull/3415)

- **💻 UI、交互与兼容性修复**
  - **#3434 [OPEN] 修复 macOS Intel 架构启动失败**: 确保 macOS 发布包在打包前正确安装 Darwin `sharp` 运行时的双架构（x64/arm64）变体。
    - 链接：[coder/mux PR #3434](https://github.com/coder/mux/pull/3434)
  - **#3433 [CLOSED] 修复 Mermaid 缩放控制**: 直接缩放渲染的 SVG 而不是仅改变 max-height，彻底解决了 Issue #3425。
    - 链接：[coder/mux PR #3433](https://github.com/coder/mux/pull/3433)
  - **#3436 [CLOSED] 聊天输入支持 LaTeX 符号快捷键**: 允许用户在聊天框中通过反斜杠（如 `\alpha`、`\sum`）快速输入数学和交易相关的 Unicode 符号，丰富了 Agent 的指令输入体验。
    - 链接：[coder/mux PR #3436](https://github.com/coder/mux/pull/3436)

- **🧹 自动化与测试**
  - **#3291 [OPEN] 自动化代码清理**: 由 mux-bot 执行的滚动式、低风险自动化重构。
    - 链接：[coder/mux PR #3291](https://github.com/coder/mux/pull/3291)
  - **#3437 [CLOSED] 削减 Storybook 快照预算**: 将视觉测试的快照预算缩减至 247（限制为 300），在不丧失覆盖率的情况下优化了 CI 运行效率。
    - 链接：[coder/mux PR #3437](https://github.com/coder/mux/pull/3437)

## 5. 为什么这个项目在 Agent 编排生态中值得关注

作为桌面端的 AI Agent 运行环境，Mux 正在从一个单纯的“对话客户端”演化为一个**重度集成的本地化 Agent 编排调度引擎**。从今日的数据可以看出两个明确的趋势：

1. **向“工作流编排”深水区迈进**：PR #3431 引入了沙盒化的 JS 编排和子代理报告验证，说明 Mux 正在构建允许 Agent 在本地执行复杂、多步骤、结构化任务的执行环境，而不仅仅是单次对话。
2. **高度自动化的工程化护城河**：项目中存在活跃的 `mux-bot` 和各类 `ammar-agent` 进行的自动化重构、测试预算管理和特性开发（如 PR #3291, #3436）。结合对 LLM 流式传输中断的容错处理（PR #3415），表明该项目在追求 Agent 能力边界的同时，极其看重底层的鲁棒性。
3. **注重 HMI（人机交互界面）**：沉浸式审查模式和状态栏（PR #3432）表明团队在解决“Agent 黑盒”问题，致力于让用户清晰地看到 Agent 的执行计划和运行状态，这是构建可靠人机协作范式的关键。

</details>

<details>
<summary><strong>AutoGPT</strong> — <a href="https://github.com/Significant-Gravitas/AutoGPT">Significant-Gravitas/AutoGPT</a></summary>

**AI Agent 编排开源生态日报摘要**
**项目**: AutoGPT (Significant-Gravitas/AutoGPT)
**日期**: 2026-06-02

---

### 1. 今日速览
- **Issues 更新**: 0 条
- **PR 更新**: 16 条（含 11 个 Open 状态更新，5 个 Closed 状态更新）
- **新版本发布**: 0 个
- **整体趋势**: 今日无新 Issue 和 Release，但代码库活跃度极高。开发重心完全聚焦于 **AutoPilot/Copilot 核心体验深化**（记忆重组、本地模型支持、上下文交互优化）以及**底层基础设施重构**（UUIDv7升级、零依赖安装器）。

### 2. 版本发布
无。项目目前正处于密集的功能迭代与底层重构阶段，尚未发布新的正式版本。

### 3. 重点 Issues
过去 24 小时无新增或更新 Issue。这表明当前社区反馈或 Bug 追踪处于平稳期，开发团队正全力推进挂载的大型 PR。

### 4. 关键 PR 进展

今日的 PR 活动深度揭示了 AutoGPT 在“智能体自动编排”与“平台化”方向的演进路线：

**A. AutoPilot 与 Copilot 智能体核心**
*   **[PR #13165](https://github.com/Significant-Gravitas/AutoGPT/pull/13165) [size/xl]**: 引入 Dream Pass V1 `sync_baseline` 三阶段流水线。实现了路线图中的“记忆重组”（夜间离线整合用户近期情节并淘汰过时记忆），是提升长程 Agent 智能的关键基建。
*   **[PR #12993](https://github.com/Significant-Gravitas/AutoGPT/pull/12993) [size/xl]**: 支持 Local-LLM 驱动 AutoPilot。解除了对 OpenAI/Anthropic API 密钥的硬依赖，大幅降低了零门槛本地部署 Agent 平台的门槛。
*   **[PR #13242](https://github.com/Significant-Gravitas/AutoGPT/pull/13242) [size/l]**: 在任务分解前前置库相似度检查。优化了 Agent 路由逻辑：若已有高度相似 Agent，直接复用，避免不必要的 LLM 调用，提升编排效率。
*   **[PR #13264](https://github.com/Significant-Gravitas/AutoGPT/pull/13264) [size/xl]**: 实现图保存的原子性并暴露明确的凭据错误。修复了因 OAuth 令牌失效导致级联系统报错的问题，增强复杂图编排的稳定性。

**B. 前端 UI 与用户交互体验**
*   **[PR #13228](https://github.com/Significant-Gravitas/AutoGPT/pull/13228) [size/xl]**: 新增 AutoPilot 右侧持久化上下文面板。解决 Agent 生成的结构化文件隐藏在长对话流中难以提取的痛点。
*   **[PR #13262](https://github.com/Significant-Gravitas/AutoGPT/pull/13262) [size/xl]**: 允许在 Copilot 聊天中通过 `@mention` 或选择器直接附加 Workspace 历史文件，强化多模态交互。
*   **[PR #13243](https://github.com/Significant-Gravitas/AutoGPT/pull/13243) [size/xl]**: Copilot Dream Pass 前后端联通。

**C. 底层基建与开发体验**
*   **[PR #13261](https://github.com/Significant-Gravitas/AutoGPT/pull/13261) [size/xl]**: 构建“终极”零依赖引导安装程序（`install.sh`/`install.ps1`），解决机器无 Docker/Git 时的自动环境准备。
*   **[PR #12961](https://github.com/Significant-Gravitas/AutoGPT/pull/12961) [CLOSED, size/l]**: 底层数据库主键从 UUIDv4 迁移至可排序的 **UUIDv7**，大幅优化高并发写入时 B-tree 索引的碎片化问题及 IO 性能。
*   **[PR #13258](https://github.com/Significant-Gravitas/AutoGPT/pull/13258) [CLOSED, size/s]**: 修复基建问题，为后端 Docker 镜像注入 `libatomic1` 以防 Prisma 迁移崩溃。

*(注：今日另有 PR #13265 引入商业地产分析全栈应用，#13253 增强 GitHub Block 过滤，#13152 自动刷新 Anthropic 费率卡，#13263 修复文档拼写)*

### 5. 为什么这个项目在 Agent 编排生态中值得关注？

AutoGPT 正在从一个“单次任务执行脚本”彻底蜕变为一个**高度可用的 Agent 编排与运行平台**。

1.  **认知与记忆架构的落地**: 通过 PR #13165（Dream pass 引入三阶段记忆重组），AutoGPT 正在解决 Agent 无法长期记忆和自主梳理知识的痛点。这在目前的编排生态中是非常前沿的底层探索。
2.  **基础设施与图编排的结合**: 后端核心正在经历严苛的重构（如引入 UUIDv7 优化高频编排存储图、使用原子化保存保障复杂图可靠性）。这说明项目正在向满足“企业级并发与稳定”的标准靠拢。
3.  **去中心化与零门槛**: 终极安装程序（#13261）与本地 LLM 支持（#12993）的结合，意味着 AutoGPT 正在试图覆盖从“零基础小白”到“纯私有化部署极客”的全场景，这将对 Agent 编排生态的终端普及率产生深远影响。

</details>

<details>
<summary><strong>MetaGPT</strong> — <a href="https://github.com/FoundationAgents/MetaGPT">FoundationAgents/MetaGPT</a></summary>

# Agent 编排生态日报：MetaGPT 项目跟踪
**日期**：2026-06-02 | **分析目标**：[FoundationAgents/MetaGPT](https://github.com/FoundationAgents/MetaGPT)

---

### 1. 今日速览
过去 24 小时内，MetaGPT 仓库整体处于平稳迭代期，无新增 Issues、无新版本发布。项目共产生 **2 个文档维护类 PR**（均处于 OPEN 状态），社区活动主要集中在文档修正与标准化补充，核心业务代码无变动。

### 2. 版本发布
- **最新 Releases**：无。

### 3. 重点 Issues
- **最新动态**：过去 24 小时无新增或更新的 Issue。

### 4. 关键 PR 进展
当前有 2 个处于 `OPEN` 状态的 PR，均属于非功能性更新（文档与描述修正）：

- **PR #2057** [OPEN] - Update README.md
  - **作者**：aripitek
  - **摘要**：提交了 README 文件的更新，尝试补充或规范 `Features` 等模板内容（目前内容包含 xx、yy 占位符，处于起草或格式测试阶段）。
  - **链接**：[FoundationAgents/MetaGPT PR #2057](https://github.com/FoundationAgents/MetaGPT/pull/2057)

- **PR #2056** [OPEN] - docs: fix roadmap typo
  - **作者**：Zhao73
  - **摘要**：修复了项目路线图（Roadmap）文档中的拼写错误。该 PR 经过了 `git diff --check` 和 `uvx codespell` 的静态测试，属于纯文本变更，对系统行为无影响。
  - **链接**：[FoundationAgents/MetaGPT PR #2056](https://github.com/FoundationAgents/MetaGPT/pull/2056)

### 5. 为什么这个项目在 Agent 编排生态中值得关注
- **SOP 驱动的多智能体协作**：MetaGPT 的核心亮点在于将标准化作业程序（SOP）引入多 Agent 编排。通过定义不同的角色（如产品经理、架构师、工程师），它能够让 LLM 以类似虚拟软件公司的形式，结构化地完成从需求拆解到代码生成的复杂任务。
- **生态定位与资源池**：作为 FoundationAgents 组织下的核心项目，MetaGPT 为 AI Agent 开发者提供了一套成熟的框架，目前在 Agent 协作、消息共享机制与角色抽象层面积累了大量的社区关注与代码沉淀，是研究“多智能体如何高效协同与降低幻觉”的重要参考基座。

</details>

<details>
<summary><strong>AutoGen</strong> — <a href="https://github.com/microsoft/autogen">microsoft/autogen</a></summary>

以下是为您生成的 AutoGen 项目 2026-06-02 Agent 编排日报摘要：

# 📰 AutoGen 生态日报 (2026-06-02)

## 1. 今日速览
过去 24 小时内，AutoGen 仓库共处理了 **2 条 Issues** 和 **7 条 Pull Requests**，无新版本发布。社区当前的重心高度聚焦于 **Agent 记忆管理架构**与**跨平台/跨模型兼容性**两大核心领域。开发者正在积极推动跨 Agent 的共享内存实现及针对内存污染的安全防护机制。

## 2. 版本发布
- **最新 Releases**：无

## 3. 重点 Issues
今日的两条 Issue 均涉及 Agent 记忆系统的深度架构与安全设计，技术前瞻性极高：

- **[#7748] RFC: 跨 Agent 共享内存存储与按需 Capsule 调用** 
  - **链接**: [microsoft/autogen Issue #7748](https://github.com/microsoft/autogen/issues/7748)
  - **分析**: 作者提出了基于不同作用域（`agent/group/global`）的跨 Agent 共享记忆架构设计。值得注意的是，作者更新了该 RFC，澄清并弱化了早期关于成本和延迟大幅下降的经验性数据（如降低 70% 等），强调当前设计主要基于代码库分析而非生产环境测量。该议题引发了较多讨论（11条评论），预示着社区对 Agent 状态共享机制的严谨态度。
- **[#7783] [Feature Request] 基于 OWASP 标准的 Agent 内存防毒保护**
  - **链接**: [microsoft/autogen Issue #7783](https://github.com/microsoft/autogen/issues/7783)
  - **分析**: 提出了针对持久化记忆 Agent 的“内存污染”攻击防御需求。攻击者可通过对抗性输入污染 Agent 记忆，导致机密泄露或指令越权。该请求建议引入 OWASP Agent Memory Guard 机制。这标志着 AutoGen 生态正在从单纯的“实现功能”向“生产级安全防范”演进。

## 4. 关键 PR 进展
今日的 7 个 PR 主要围绕**新特性实现**、**大模型兼容性修复**及**多语言环境编码问题**展开：

- **🚀 核心 Feature: 共享内存存储实现**
  - **[#7758] feat(memory): SharedMemoryStore — 跨 Agent 共享内存及作用域 FTS 召回**
  - **链接**: [microsoft/autogen PR #7758](https://github.com/microsoft/autogen/pull/7758)
  - **摘要**: 上述 Issue #7748 的配套代码实现。基于 SQLite + FTS5 构建了零外部依赖的 SharedMemoryStore，支持 `agent` (私有), `group` (组共享), `global` (全局) 三级作用域的全文搜索(FTS)召回机制。

- **🛡️ 安全与指南: 防御深度指南**
  - **[#7721] docs(core): add memory-poisoning (ASI06) defense-in-depth guide**
  - **链接**: [microsoft/autogen PR #7721](https://github.com/microsoft/autogen/pull/7721)
  - **摘要**: 对应 Issue #7783，为社区补充关于防范 Agent 内存 poisoning 的深度防御指南文档。

- **🛠️ 编排兼容性修复 (关键)**
  - **[#7786] fix: resolve Semantic Kernel tool call names**
    - **链接**: [microsoft/autogen PR #7786](https://github.com/microsoft/autogen/pull/7786)
    - **摘要**: 修复了与 Semantic Kernel / Bedrock 集成时的工具调用解析问题。外部框架可能返回带有前缀（如 `autogen-tools_get_weather`）或连字符（`get-weather`）的函数名，此 PR 确保了这些调用能与 AutoGen 原生注册的工具名正确映射。
  - **[#7782] Don't ship 'strict': false on tool definitions when the tool didn't opt in**
    - **链接**: [microsoft/autogen PR #7782](https://github.com/microsoft/autogen/pull/7782)
    - **摘要**: 修复了通过 vLLM、LiteLLM 使用 Qwen 或 Mistral 等模型时报错 `extra_forbidden` 的兼容性问题。移除了在工具未显式选择启用时强制传递 `'strict': false` 参数的行为。

- **🌐 国际化与底层除虫**
  - **[#7666]** & **[#7777] fix: add explicit encoding='utf-8'**
    - **链接**: [PR #7666](https://github.com/microsoft/autogen/pull/7666) | [PR #7777](https://github.com/microsoft/autogen/pull/7777)
    - **摘要**: 集中修复了在非英语 Windows 系统（如中文 cp950、俄文 cp1251）下执行 Docker Jupyter 代码或读取文件时的 `UnicodeDecodeError` 及 Mojibake（乱码）问题。
  - **[#7679] fix(docs): update .NET LM Studio article and snippet references**
    - **链接**: [microsoft/autogen PR #7679](https://github.com/microsoft/autogen/pull/7679)
    - **摘要**: 更新了 .NET 文档，将废弃的 `AutoGen.LMStudio` 迁移至最新的 `AutoGen.OpenAI` 用法。

## 5. 为什么这个项目在 Agent 编排生态中值得关注
作为目前最活跃的 Agent 编排开源项目之一，今日的 AutoGen 数据折射出编排生态演进的两个关键趋势：
1. **从无状态编排向有状态协同演进**：传统的 Agent 工作流通常是触发即忘的，而近期关于 `SharedMemoryStore` 和多级作用域的探讨表明，构建具备持久化、可隔离、可共享记忆的复杂 Agent 协作网络，已成为头部框架攻坚的底层核心。
2. **多模型异构环境下的适配成为痛点**：从 PR #7782 (针对开源模型strict参数的兼容) 和 PR #7786 (针对 Semantic Kernel 的工具名解析) 可以看出，编排框架的核心壁垒正在从“如何调用 OpenAI API”转移到“如何无缝、稳定地抹平各类开源/闭源模型以及其他编排框架（如 SK）之间的异构差异”。

</details>

<details>
<summary><strong>GPT-Engineer</strong> — <a href="https://github.com/AntonOsika/gpt-engineer">AntonOsika/gpt-engineer</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LlamaIndex</strong> — <a href="https://github.com/run-llama/llama_index">run-llama/llama_index</a></summary>

# LlamaIndex Agent 编排生态日报 (2026-06-02)

## 1. 今日速览
过去 24 小时内，LlamaIndex 仓库共有 2 条 Issue 更新，15 条 PR 更新，未发布新版本。项目近期的开发重心主要集中在：**多 LLM 供应商集成升级**（MiniMax-M3、Google GenAI）、**向量数据库查询逻辑修复**（Elasticsearch、OpenSearch、Weaviate）以及**核心 API 的技术债清理**（废弃方法移除）。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
- **[[Feature Request]: Add Valkey Vector Store support (#20785)](https://github.com/run-llama/llama_index/issues/20785)**
  **分析**：社区请求增加对高性能键值数据库 [Valkey](https://valkey.io/) 的向量存储集成支持。随着企业在向量检索层对成本和性能的要求提升，兼容更多开源底座是丰富 RAG 编排能力的关键。当前状态为 Open，有 10 条讨论，需求明确。
- **[[Bug]: Deprecation warning for `get_doc_id` (#18852)](https://github.com/run-llama/llama_index/issues/18852)**
  **分析**：用户在使用 `VectorStoreIndex.from_documents()` 时触发了 `get_doc_id()` 废弃警告。这是一个 P2 级别的 API 易用性问题，涉及核心索引流程，目前已有关联的修复 PR 提交。

## 4. 关键 PR 进展

### 核心框架与修复
- **[fix(core): replace deprecated `get_doc_id()` calls with `id_` property in tests (#21847)](https://github.com/run-llama/llama_index/pull/21847)**
  **进展**：针对上述 Issue #18852，清理内部测试代码中的废弃调用，消除用户在构建索引时的 Deprecation 警告。
- **[fix(tests): update expected hash in test_media_resource (#21842)](https://github.com/run-llama/llama_index/pull/21842)**
  **进展**：修复近期提交导致的 `MediaResource` 哈希逻辑不匹配问题，保障主干 CI 测试的稳定性。
- **[fix: handle mmr_threshold=0 and None score in fusion retriever (#21340)](https://github.com/run-llama/llama_index/pull/21340)**
  **进展**：修复核心查询代码的 Bug。原逻辑将 `mmr_threshold=0` 误判为 False 并静默重置为 0.5，此修复对 Agent 在复杂多路召回排编时的准确性至关重要。
- **[removing ipex integrations since it was deprecated (#21846)](https://github.com/run-llama/llama_index/pull/21846)**
  **进展**：清理历史包袱。随着 PyTorch 2.5 原生支持 Intel GPU，官方移除了已被废弃的 IPEX 集成，精简框架体积。
- **[Avoid printing OpenAI token logprobs on conversion errors (#21841)](https://github.com/run-llama/llama_index/pull/21841)**
  **进展**：修复安全/日志规范问题。在 Token 对数概率转换失败时，停止向标准输出泄露大模型的原始输出 Token。

### LLM 供应商集成
- **[feat(llms-minimax): upgrade default model to MiniMax-M3 (#21844)](https://github.com/run-llama/llama_index/pull/21844)**
  **进展**：将 MiniMax 集成的默认模型升级至最新的旗舰模型 `MiniMax-M3`（支持 52 万 token 上下文），提升长文本 Agent 编排能力。
- **[fix(llms-openai): exclude sampling params from OpenAIResponses when reasoning active (#21843)](https://github.com/run-llama/llama_index/pull/21843)**
  **进展**：修复兼容性 Bug。当使用 OpenAI o1/o3 等推理模型时，API 不允许传递 `top_p` 等采样参数，此 PR 优化了参数过滤逻辑，防止引发 400 报错。
- **[feat(GoogleGenAI): add token tracking for structured predict methods (#21135)](https://github.com/run-llama/llama_index/pull/21135)**
  **进展**：为 Google GenAI 的结构化预测方法补充 Token 用量追踪，完善 Agent 运行时的成本监控能力。

### 向量数据库与 RAG
- **[fix(elasticsearch): split sync and async store paths (#21336)](https://github.com/run-llama/llama_index/pull/21336)**
  **进展**：移除同步方法中错误的 `asyncio.get_event_loop().run_until_complete()` 调用，解决 ASGI/事件循环不兼容的严重隐患，提升高并发场景稳定性。
- **[Fix/opensearch knn prefilter (#21341)](https://github.com/run-llama/llama_index/pull/21341)**
  **进展**：优化 OpenSearch 的 ANN 查询，使用原生的 `knn.filter` 替代性能较差的基于脚本的评分，大幅提升带过滤条件的向量检索速度。
- **[fix: use Filter.by_id() for node_ids query in WeaviateVectorStore (#21321)](https://github.com/run-llama/llama_index/pull/21321)**
  **进展**：修复 Weaviate 集成中因错误使用属性过滤（`by_property("id")`）代替 UUID 过滤（`by_id()`）导致的查询失败问题。

### 工具与文档
- **[docs: add Browserless MCP browser automation example (#21588)](https://github.com/run-llama/llama_index/pull/21588)**
  **进展**：增加基于 Browserless 的 MCP (Model Context Protocol) 浏览器自动化服务器示例。直接反映了项目对标准化 Agent 工具调用协议的持续跟进。

## 5. 为什么这个项目在 Agent 编排生态中值得关注

1. **底层 RAG 性能与稳定性的持续打磨**：从今日的 PR 进展来看，LlamaIndex 正在积极修复 Elasticsearch、OpenSearch、Weaviate 等主流向量库在异步并发、检索逻辑和元数据处理上的深水区问题。健壮的底层存储和召回机制是构建可靠 Agent 的事实基础。
2. **紧跟前沿 LLM 节奏与兼容性适配**：快速适配 OpenAI 推理模型参数限制、升级 MiniMax-M3 超长上下文模型，表明该项目在 LLM 抽象层保持着极高的敏捷度，确保开发者能无感切换底层模型来驱动 Agent。
3. **拥抱 MCP 与工具调用标准化**：引入 Browserless MCP 示例，证明 LlamaIndex 不仅关注内部的 Chain/Workflow 编排，也在积极对接外部标准化的 Agent 工具生态，这对于构建具备跨平台操作能力的 Agent 意义重大。

</details>

<details>
<summary><strong>CrewAI</strong> — <a href="https://github.com/crewAIInc/crewAI">crewAIInc/crewAI</a></summary>

这份报告基于 CrewAI 过去 24 小时的开源生态活动数据，为您提炼 Agent 编排领域的技术动态。

# 🤖 CrewAI Agent 编排日报 (2026-06-02)

## 1. 今日速览
过去 24 小时内，CrewAI 代码库活跃度较高，共处理 **6 条 Issues**（3 open / 3 closed）和 **21 条 Pull Requests**（10 open / 11 closed）。项目当前无新版本发布，开发重点集中在 **Flow 引擎解耦重构、Valkey 向量存储基础设施接入，以及企业级安全与可观测性增强**。

## 2. 版本发布
- **今日无新版本发布。**

## 3. 重点 Issues
今日的 Issue 反映了社区对 **动态任务调度、企业级治理和多模态交互** 的强烈需求。

- 🧠 **关于 Crew 是否支持运行时动态发现外部任务市场的讨论**
  ([#5832](https://github.com/crewAIInc/crewAI/issues/5832) | `OPEN`)
  提出突破静态任务定义的限制，探讨在运行时动态发现并执行外部任务市场的可能性。这是 Agent 从“静态编排”走向“动态自主网络”的关键设计讨论。
- 🛡️ **功能请求：工具调用授权的治理中间件**
  ([#5888](https://github.com/crewAIInc/crewAI/issues/5888) | `OPEN`)
  要求在生产环境中引入对 Agent 自主调用工具的权限治理（如细粒度控制、审计日志）。这是企业级 Agent 落地的核心刚需。
- 🗣️ **功能请求：集成 FunASR 实现语音驱动 Agent**
  ([#5983](https://github.com/crewAIInc/crewAI/issues/5983) | `OPEN`)
  建议集成 FunASR 构建“语音输入 -> 转录 -> 任务委派 -> TTS 响应”的语音交互工作流。
- 🐛 **Flow 引擎 Bug：多源 OR 监听器阻断循环触发**
  ([#5972](https://github.com/crewAIInc/crewAI/issues/5972) | `CLOSED`)
  报告 `@listen(or_(A, B, C))` 在满足条件后仅触发一次，导致循环流无法重新执行的问题（已在 PR 中修复）。
- 🐛 **Deepseek API 调用失败：response_format 冲突**
  ([#5990](https://github.com/crewAIInc/crewAI/issues/5990) | `OPEN`)
  使用 Deepseek 模型时报 `response_format type is unavailable` 错误，揭示了框架对非 OpenAI 兼容 API 参数的精细处理需求。

## 4. 关键 PR 进展
今日 PR 涵盖重大架构升级、企业级存储适配及安全性修复。

**🏗️ 核心架构与引擎重构**
- **[XL] 将单体 `flow.py` 拆分为 DSL、definition 和 runtime**
  ([#5997](https://github.com/crewAIInc/crewAI/pull/5997) | `CLOSED/MERGED`)
  重大重构！将庞大的 Flow 模块拆解为三个职责清晰的模块（DSL解析、结构建模、执行引擎），这为未来引入更复杂的事件驱动编排打下基础。
- **[M] 修复多源 OR 监听器在路由循环中的重置问题**
  ([#5994](https://github.com/crewAIInc/crewAI/pull/5994) | `CLOSED/MERGED`)
  配合 Issue #5972，确保 `@listen(or_(...))` 在执行后能够正确“重武装（re-arm）”，实现持续的循环工作流。

**🏢 企业级与可观测性增强**
- **[XL] 会话式对话流支持**
  ([#5896](https://github.com/crewAIInc/crewAI/pull/5896) | `OPEN`)
  为 CrewAI 引入支持多轮会话的 Flow，改变了原有单次 Kickoff 的状态机模式，对嵌套流和链路追踪进行了升级。
- **[XL] 提升 LLM 事件的可观测性**
  ([#5945](https://github.com/crewAIInc/crewAI/pull/5945) | `OPEN`)
  在 LLM 调用事件中暴露真实的 `finish_reason`、采样参数（temperature、top_p 等）及响应 ID，大幅增强了生产环境的可观测性能力。

**💾 存储与基建**
- **Valkey 作为向量/缓存存储后端 (Parts 1-4)**
  ([#5700](https://github.com/crewAIInc/crewAI/pull/5700), [#5701](https://github.com/crewAIInc/crewAI/pull/5701), [#5702](https://github.com/crewAIInc/crewAI/pull/5702), [#5703](https://github.com/crewAIInc/crewAI/pull/5703) | `OPEN`)
  一组宏大的基建 PR，旨在引入 Valkey（Redis 的开源分支）作为记忆系统和共享缓存的后端。涵盖了配置解析、输入验证加固、异步安全 Embedding 以及核心向量存储实现。
- **[XS] 放宽 `click` 依赖限制以适配企业环境**
  ([#6000](https://github.com/crewAIInc/crewAI/pull/6000) | `OPEN`)
  修改依赖版本锁定，解决企业客户（如 Genpact）因安全合规固定特定 `click` 版本导致的冲突问题。

**🛠️ 规范化与安全修复**
- **API 密钥格式化防泄漏**
  ([#5999](https://github.com/crewAIInc/crewAI/pull/5999) | `OPEN`)
  自动去除 LLM API Keys 前后的空格和换行符，防止因环境变量格式问题导致的 401 鉴权失败。
- **废弃 API 替换**
  ([#5996](https://github.com/crewAIInc/crewAI/pull/5996) | `OPEN`)
  替换了 Python 3.12 中已废弃的 `datetime.utcnow()`，为升级到 Python 3.14 提前扫清障碍。

## 5. 为什么这个项目在 Agent 编排生态中值得关注？
1. **从静态 DAG 向动态流演进**：无论是讨论运行时动态任务发现（#5832），还是将会话式 Flow（#5896）和 Flow 引擎解耦（#5997）提上日程，都表明 CrewAI 正在努力摆脱“一次性脚本”的刻板印象，向复杂的、有状态的持续交互 Agent 网络迈进。
2. **直面企业级痛点**：近期关于工具调用治理中间件（#5888）、OTEL 深度追踪支持（#5945）、以及企业内网依赖冲突（#6000）的密集更新，证明该项目在应对大型企业落地 Agent 时的安全与合规挑战上正在迅速补齐短板。
3. **生态适配的野心**：集成 Valkey 作为高性能存储替代方案，以及对各类第三方 LLM (如 Deepseek) 的兼容性修复，展示了其成为通用且健壮的 AI 基础设施底座的决心。

</details>

<details>
<summary><strong>Agno</strong> — <a href="https://github.com/agno-agi/agno">agno-agi/agno</a></summary>

# Agno Agent 编排日报摘要 — 2026-06-02

## 1. 今日速览

过去 24 小时 Agno 仓库动态：
- **Issues 更新**：8 条（5 Open / 3 Closed）
- **PR 更新**：29 条（大量首次贡献者参与）
- **新版本发布**：0 个（注：`v2.6.10` 发布 PR [#8176](https://github.com/agno-agi/agno/pull/8176) 已开启，尚未合并）

整体节奏：以 bug 修复和集成健壮性提升为主，社区贡献活跃，多个 PR 针对异步/并发场景下的资源泄漏和竞态条件。

---

## 2. 版本发布

**无新版本发布。** 值得关注的是 `v2.6.10` 发布准备 PR 已提交：

| PR | 状态 | 说明 |
|---|---|---|
| [#8176 chore: Release v2.6.10](https://github.com/agno-agi/agno/pull/8176) | OPEN | 由维护者 @kausmeows 提交，描述 TBD，预计包含近期多项修复 |

---

## 3. 重点 Issues

### 3.1 🔴 生产稳定性：并发与资源泄漏

| Issue | 类型 | 核心问题 |
|---|---|---|
| [#8196](https://github.com/agno-agi/agno/issues/8196) | Bug | `PostgresDb._get_table` 在首次并发写入时存在竞态条件，共享 `MetaData` 变异导致 `CompileError`。冷启动时多线程场景易触发。 |
| [#8156](https://github.com/agno-agi/agno/issues/8156) | Bug | MCP toolkit 初始化失败（如 HTTP 401）后，`CancelScope` 损坏导致 **CPU 空转 100%**，Kubernetes Pod 永久挂起。生产环境高危。 |
| [#8160](https://github.com/agno-agi/agno/issues/8160) | Bug (已关闭) | `OpenAITools.transcribe_audio` 中 `open()` 返回值未关闭，每次调用泄漏文件描述符。 |
| [#8185](https://github.com/agno-agi/agno/issues/8185) | Bug (已关闭) | Discord 集成在 async `on_message` 中使用同步阻塞 `requests.get()`，冻结整个事件循环。 |

**分析师备注**：#8156 和 #8196 反映出 Agno 在异步生命周期管理和并发安全方面仍需加固，尤其影响 K8s 部署场景。

### 3.2 🟡 生态兼容性

| Issue | 类型 | 核心问题 |
|---|---|---|
| [#8195](https://github.com/agno-agi/agno/issues/8195) | Bug | `SearchType.hybrid` 在 lancedb≥0.33.0 下报错，Tantivy FTS 已移除，Agno 需适配新版 native FTS。当前绕过方案为降级 lancedb。 |
| [#8034](https://github.com/agno-agi/agno/issues/8034) | Enhancement (已关闭) | 请求添加 formula WorkPaper MCP cookbook 示例，已有对应 PR 合入。 |

### 3.3 🔵 企业级特性提案

| Issue | 类型 | 核心内容 |
|---|---|---|
| [#7357](https://github.com/agno-agi/agno/issues/7357) | RFC / Enhancement | 提议为 Agno tool calls 引入 **密码学审计收据**（cryptographic audit receipts），为合规场景提供不可篡改的工具调用证据链。面向金融/医疗等强监管行业。 |

---

## 4. 关键 PR 进展

### 4.1 🏗️ 架构与核心能力

| PR | 状态 | 要点 |
|---|---|---|
| [#8071 feat: add Task API and Monitor API tools](https://github.com/agno-agi/agno/pull/8071) | OPEN | 为 `ParallelTools` 新增 **Task API**（深度研究，结构化输出+引用+置信度）和 **Monitor API**（持续网络追踪）。扩展 Agent 自主研究能力。 |
| [#8137 feat: unify /continue with regenerate + branch_session](https://github.com/agno-agi/agno/pull/8137) | OPEN | 统一 run 生命周期 API，将 regenerate / branch-session 作为 `/continue` 端点的语法糖，修复原始 PR 中 4 个 fork 相关 bug，替换 `INTERRUPTED` 枚举。 |
| [#8197 feat: Add tool metadata to tool execution events](https://github.com/agno-agi/agno/pull/8197) | OPEN | 在 `ToolCallCompletedEvent` 中增加 tool metadata，允许事件消费者按 **工具类别**（而非工具名）做响应，无需维护外部映射。 |
| [#7924 feat: stream sub-agent events from context providers](https://github.com/agno-agi/agno/pull/7924) | CLOSED | 子 Agent 事件实时流式传输：父 Agent 调用 `query_<id>()` 时，子 Agent 的 tool calls 实时可见，而非等待最终 JSON。 |

### 4.2 🐛 Bug 修复

| PR | 状态 | 修复内容 |
|---|---|---|
| [#8199 fix: thread-safe locking for PostgresDb._get_table](https://github.com/agno-agi/agno/pull/8199) | OPEN | 针对 [#8196](https://github.com/agno-agi/agno/issues/8196)，为 `_get_table` 添加线程锁，防止并发 schema 物化竞态。 |
| [#8163 fix: Clean up MultiMCP connection failures](https://github.com/agno-agi/agno/pull/8163) | OPEN | 当 `MultiMCPTools` 中某个 MCP server 连接失败时，正确清理已初始化的 context，防止部分初始化的会话残留。直接关联 [#8156](https://github.com/agno-agi/agno/issues/8156) 的根因。 |
| [#8203 fix: preserve non-ASCII in LLM context serialization](https://github.com/agno-agi/agno/pull/8203) | CLOSED | 修复中文/阿拉伯语等非 ASCII 字符在 JSON/YAML 序列化时被转义为 `\uXXXX`，导致 LLM 对多语言上下文产生幻觉的问题。Closes [#7036](https://github.com/agno-agi/agno/issues/7036)。 |
| [#8201 / #8191 fix: preserve AG-UI readable context](https://github.com/agno-agi/agno/pull/8201) | OPEN | AG-UI `RunAgentInput.context`（CopilotKit `useCopilotReadable`）被静默丢弃，导致模型无法看到前端上下文。两版修复方案竞争。 |
| [#8187 fix: guard IndexError on empty runs in from_dict](https://github.com/agno-agi/agno/pull/8187) | OPEN | `AgentSession.from_dict` 和 `TeamSession.from_dict` 在 `runs=[]` 时直接崩溃，添加空列表保护。 |
| [#8198 fix: keep async trace export tasks alive](https://github.com/agno-agi/agno/pull/8198) | CLOSED | 异步 trace 导出 task 因弱引用被 GC 回收导致丢失；替换已废弃的 `get_event_loop()` 为 `get_running_loop()`。 |

### 4.3 🔌 集成与扩展

| PR | 状态 | 要点 |
|---|---|---|
| [#7920 feat: add TopK vector db and context provider](https://github.com/agno-agi/agno/pull/7920) | OPEN | 新增 [TopK](https://github.com/topk-io/topk) 作为 Vector DB 和 Context Provider 后端选项。 |
| [#8107 / #8096](https://github.com/agno-agi/agno/pull/8107) | OPEN | 为 `CsvTools` 和 `JsonDb` 添加显式 `encoding="utf-8"`，消除非 UTF-8 locale 下的跨平台不一致。 |

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注

**Agno 正在从"能用"走向"生产可靠"。** 今天的 issue/PR 分布清晰反映了这一趋势：

1. **企业合规需求驱动架构演进**：[#7357](https://github.com/agno-agi/agno/issues/7357)（密码学审计收据 RFC）表明 Agno 正瞄准金融、医疗等强监管场景，这与 LangChain/CrewAI 生态形成差异化竞争——后者在合规审计链方面尚属空白。

2. **Agent 生命周期管理趋于成熟**：[#8137](https://github.com/agno-agi/agno/pull/8137) 的 run-lifecycle API 统一、[#7924](https://github.com/agno-agi/agno/pull/7924) 的子 Agent 事件流式传输，说明 Agno 在多 Agent 编排的控制流粒度上持续深耕，不是简单 DAG 调度，而是支持 checkpoint/branch/regenerate 的完整对话状态机。

3. **异步与并发健壮性是当前工程重心**：[#8156](https://github.com/agno-agi/agno/issues/8156)（MCP 初始化 CPU 空转）、[#8196](https://github.com/agno-agi/agno/issues/8196)（PostgresDb 竞态）、[#8163](https://github.com/agno-agi/agno/pull/8163)（MultiMCP 清理）均指向同一主题——Agent 框架在真实生产负载下的资源安全和容错。这些问题解决后，Agno 在 K8s 部署场景的稳定性将显著优于同类项目。

4. **社区贡献质量高**：今日 29 个 PR 中有多个来自首次贡献者（`first-time-contributor` 标签），且涵盖核心模块（PostgresDb 线程安全、AG-UI context 修复、trace 导出），说明项目 issue 质量和贡献指引做得较好，生态可持续性强。

**一句话总结**：Agno 当前处于 v2.6.x 的成熟打磨期，核心议题是"让 Agent 编排在生产环境不挂"，同时通过 Task API / Monitor API / 审计收据等特性向企业级平台演进。

</details>

<details>
<summary><strong>Ruflo</strong> — <a href="https://github.com/ruvnet/ruflo">ruvnet/ruflo</a></summary>

# Ruflo Agent 编排日报摘要 - 2026-06-02

**项目仓库**: [github.com/ruvnet/ruflo](https://github.com/ruvnet/ruflo)

---

## 1. 今日速览

过去 24 小时，Ruflo 仓库共处理 **7 条 Issue**（4 条为验证/安全类，3 条为核心功能缺陷）和 **3 条 PR**。未发布新版本。整体基调：项目正处于高频的自动化验证修复与供应链安全加固阶段，同时社区开始反馈 Agent 路由与内存持久化等核心机制的问题。

## 2. 版本发布

无新版本发布。当前最新版本仍为 `v3.10.31`。

## 3. 重点 Issues

### 3.1 核心架构与功能缺陷

- **[#2259](https://github.com/ruvnet/ruflo/issues/2259) `ruflo memory store` 持久化自相矛盾**
  - `store` 命令写入 `ruvector.db`，但 `stats`/`list`/`search` 从空的 sql.js 读取，形成三个互相矛盾的持久化面。
  - 影响版本: v3.10.31 | 作者: shaharKeisarApps
  - 评估：直接影响 Agent 的记忆与上下文管理能力，属于编排核心链路的高优先级 Bug。

- **[#2257](https://github.com/ruvnet/ruflo/issues/2257) Agent 路由器正则匹配失控**
  - `.claude/helpers/router.js` 使用**无锚定子串正则**（如 `cd`, `ui`, `add`），导致短 Token 误匹配到无关单词内部，以 80% 置信度将任务路由到错误 Agent。
  - 作者: PrimitiveOne
  - 评估：Agent 路由是编排系统的入口，此 Bug 会造成系统性任务分发错误。

### 3.2 CLI 启动性能问题

- **[#2256](https://github.com/ruvnet/ruflo/issues/2256) `--version` 冷启动阻塞 60s+**
  - 执行 `--version` 时触发 ONNX 模型下载，导致 CLI 在无缓存环境下超时退出（Exit code 143）。
  - 评估：严重影响首次用户体验和 CI 环境集成。

### 3.3 安全与供应链（Dream Cycle）

- **[#2254](https://github.com/ruvnet/ruflo/issues/2254) 插件供应链安全告警**
  - 检测到 "Semantic Compliance Hijacking (SCH)" 攻击面：插件供应链入侵率达 77.67%，检测率为 0%。提出 ADR-145 架构决策以强化完整性校验。

### 3.4 持续验证环境问题（长期跟踪中）

- **[#2243](https://github.com/ruvnet/ruflo/issues/2243)**: `verify.mjs` 无法加载 `@noble/ed25519`，见证签名校验被跳过。
- **[#2047](https://github.com/ruvnet/ruflo/issues/2047)**: 跨平台见证清单报告 `missing=95, drift=2`。
- **[#1926](https://github.com/ruvnet/ruflo/issues/1926)**: 验证环境中缺少 `gh` CLI，CI 状态不可验证。

## 4. 关键 PR 进展

| PR | 作者 | 核心内容 |
|---|---|---|
| [#2255](https://github.com/ruvnet/ruflo/pull/2255) | ruvnet | **Dream Cycle 安全迭代**：实现 ADR-145 插件供应链完整性校验 + Memory 命名空间治理，针对 SCH 攻击面的防御性代码。 |
| [#2260](https://github.com/ruvnet/ruflo/pull/2260) | W1773ND | **文档修复**：修正快速开始示例中的拼写错误 `ruvflo` → `ruflo`。 |
| [#2258](https://github.com/ruvnet/ruflo/pull/2258) | sjbrenchley89 | 聚焦式代码调整（标题含 "focused rubin 4 sk ab"），具体变更待审查。 |

## 5. 为什么 Ruflo 在 Agent 编排生态中值得关注

1. **供应链安全先行者姿态**：通过 Dream Cycle 机制（[#2254](https://github.com/ruvnet/ruflo/issues/2254), [#2255](https://github.com/ruvnet/ruflo/pull/2255)）系统性发现并修复 SCH 类攻击，这在当前 Agent 框架生态中较为罕见，对多 Agent 协作的可信执行具有参考价值。

2. **Agent 路由机制暴露真实工程挑战**：[#2257](https://github.com/ruvnet/ruflo/issues/2257) 揭示了一个经典的正则边界问题——在自然语言意图匹配场景下，短 Token 的误匹配是所有 Agent Router 都会面临的共性难题，该项目的修复方案值得跟踪。

3. **Memory 架构仍在收敛中**：[#2259](https://github.com/ruvnet/ruflo/issues/2259) 暴露的多存储后端不一致（SQLite vs sql.js vs 文件系统），说明 Ruflo 的 Agent 记忆层尚在快速迭代，其最终架构选型将影响 Agent 持久化上下文的设计范式。

4. **自动化验证管线投入重**：7 条 Issue 中有 3 条属于定时验证流水线本身的缺陷报告，表明项目在质量工程上有持续且结构化的投入。

---
*数据截止: 2026-06-02 | 下期关注: ADR-145 合并状态、Memory 持久化统一方案、v3.10.32 是否发布修复版。*

</details>

<details>
<summary><strong>LangGraph</strong> — <a href="https://github.com/langchain-ai/langgraph">langchain-ai/langgraph</a></summary>

# LangGraph Agent 编排日报摘要 (2026-06-02)

## 1. 今日速览
过去 24 小时内，LangGraph 生态维持高频迭代，共产生 **5 条 Issues** 和 **29 条 PRs** 更新，并连发 **3 个新版本**（核心库 `1.2.3`，SDK 连续迭代至 `0.4.2`）。
当前迭代重心明确：**补齐 v3 流式架构能力、优化分布式图执行（RemoteGraph）、以及全面升级底层依赖（包括 mypy v2, redis v8, typescript v6 等破坏性更新）**。

---

## 2. 版本发布
今日共发布 3 个版本，核心聚焦于 v3 streaming 增强与子Agent管理：

*   **langgraph==1.2.3** ([Release](https://github.com/langchain-ai/langgraph/releases))
    *   **核心变更**：引入 `RemoteGraph` 的交错投影（`interleave_projections`）支持；全面接入 v3 流式传输；新增通过 `lc_agent_name` 为工具分发的子Agent（subagents）进行命名的能力。
*   **langgraph-sdk==0.4.2** ([Release](https://github.com/langchain-ai/langgraph/releases))
    *   **核心变更**：修复关键Bug，在 v3 stream transport 默认路径中对 `thread_id` 进行百分比编码，防止特殊字符导致的流断裂。
*   **langgraph-sdk==0.4.1** ([Release](https://github.com/langchain-ai/langgraph/releases))
    *   **核心变更**：提取流解码器（stream decoders）并实现 `interleave_projections`；将 `tools_agent` 的 fake model 改造为无状态模式，提升并发稳定性。

---

## 3. 重点 Issues
今日社区与内部反馈主要聚焦于**高并发场景下的异步瓶颈、上下文隔离泄露及可验证执行**：

*   **[#7259](https://github.com/langchain-ai/langgraph/issues/7259) [Bug] AsyncPostgresSaver 存在实例级线程锁**：在高并发异步环境下，`AsyncPostgresSaver` 错误地在内部游标方法（如 `get_tuple`、`put`）中使用了实例级的 `threading.Lock()`，导致异步事件循环发生阻塞。
*   **[#7948](https://github.com/langchain-ai/langgraph/issues/7948) [Bug] 嵌套 astream_events(v3) 上下文泄露**：在 Tool 内部执行嵌套的 `astream_events(v3)` 时，由于父级 callback 通过 `contextvar` 泄露，导致生成空消息。此问题对构建复杂嵌套工作流有直接影响。
*   **[#5496](https://github.com/langchain-ai/langgraph/issues/5496) [Internal Bug] Command 与 return_direct 冲突**：当 Tool 设置了 `return_direct=True` 时，其内部返回的 `Command` 无法被正确应用。
*   **[#7065](https://github.com/langchain-ai/langgraph/issues/7065) [Feature] 加密动作回执（AAR）**：社区呼吁为 LangGraph 节点引入标准化的加密证明机制，解决多步工作流中审计日志易被篡改的问题，满足金融/医疗等强合规场景需求。
*   **[#7953](https://github.com/langchain-ai/langgraph/issues/7953) [Closed]**：v3 stream transport 路径中 `thread_id` 编码问题，已在 SDK 0.4.2 中修复。

---

## 4. 关键 PR 进展
29 条 PR 中，除大量自动化依赖升级外，以下功能与基建 PR 值得关注：

*   **[#7978](https://github.com/langchain-ai/langgraph/pull/7978) [Feature] 新增 Server Factory Graph 集成测试**：
    *   **意义**：首次引入针对 `graph-factory` 代码路径的端到端测试固件，强制集成测试套件运行本地 LangGraph core，以在合并前捕获核心回归问题。
*   **大规模依赖矩阵升级 (Dependabot)**：
    *   **Python 端**：`redis` (升级至 8.0.0) ([#7976](https://github.com/langchain-ai/langgraph/pull/7976)), `mypy` (升级至 2.1.0) ([#7974](https://github.com/langchain-ai/langgraph/pull/7974)), `langchain-core` (升级至 1.4.0) ([#7960](https://github.com/langchain-ai/langgraph/pull/7960))。
    *   **TypeScript 端**：`typescript` (升级至 6.0.3) ([#7966](https://github.com/langchain-ai/langgraph/pull/7966)), `@langchain/langgraph` (升级至最新) ([#7963](https://github.com/langchain-ai/langgraph/pull/7963))。

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注
作为 LangChain 体系下的核心编排引擎，LangGraph 正在完成从“单图本地执行”向“分布式、可验证云原生 Agent 网络”的演进，今日的数据凸显了以下趋势：

1.  **流式架构的深水区探索**：v3 streaming 和 `RemoteGraph` 的连续更新表明，项目正在解决跨网络 Agent 编排的实时数据流拼接难题（如 `interleave_projections` 和 contextvar 隔离）。
2.  **生产级并发痛点修复**：核心维护团队正集中精力修复异步持久化层（Postgres/SQLite checkpointer）的锁机制和状态管理问题，这是 Agent 框架从 Demo 走向高吞吐生产环境的必经之路。
3.  **强合规与企业级就绪**：社区对图执行过程“加密可验证性（AAR）”的诉求，标志着 Agent 编排的需求已超越单纯的 LLMOps，开始涉足金融和医疗等强审计行业。

</details>

<details>
<summary><strong>Semantic Kernel</strong> — <a href="https://github.com/microsoft/semantic-kernel">microsoft/semantic-kernel</a></summary>

# AI Agent 编排生态日报：Semantic Kernel

**日期**: 2026-06-02 | **项目**: [microsoft/semantic-kernel](https://github.com/microsoft/semantic-kernel)

---

## 1. 今日速览
过去 24 小时内，Semantic Kernel 仓库共处理 **14 条 Issues**（主要集中在历史积压清理和 Agent 框架稳定性）和 **9 条 PRs**（全部针对 Python 生态的依赖更新与安全文档完善）。目前没有新版本发布。

## 2. 版本发布
- **最新 Releases**: 无。

## 3. 重点 Issues
今日议题主要围绕 **Agent 框架基础能力缺陷**、**多模型接入适配** 以及 **向量数据库发版滞后** 展开。

- **[.NET] Agent 模板变量解析失效** ([#11275](https://github.com/microsoft/semantic-kernel/issues/11275))
  - **概况**: `ChatCompletionAgent` 无法正确解析并替换 `Instructions` 中的模板变量（如 `&#123;&#123;$style&#125;&#125;`），导致指令构建失败。该问题已获 3 个 👍，反映出在 Agent 基础指令编排层存在痛点和用户真实需求。
- **[Python] Agent 记忆毒化攻击防护提案** ([#14047](https://github.com/microsoft/semantic-kernel/issues/14047))
  - **概况**: 提出了针对 OWASP Agent Memory Guard 的功能请求，旨在防御持久化记忆（如 ChatHistory）中的“记忆毒化攻击”，防止恶意注入导致 Agent 泄密或输出混乱。对构建企业级安全 Agent 至关重要。
- **[.NET] PgVector NuGet 包版本缺失** ([#13973](https://github.com/microsoft/semantic-kernel/issues/13973))
  - **概况**: `Microsoft.SemanticKernel.Connectors.PgVector` 修复 `VectorSearchOptions` 错误的 1.75.0 版本未在 NuGet Gallery 上线，导致开发者无法在生产环境中升级，阻碍了基于向量存储的 RAG Agent 构架演进。
- **[.NET] Vertex AI 全局端点适配报错** ([#13620](https://github.com/microsoft/semantic-kernel/issues/13620))
  - **概况**: Semantic Kernel 当前构造的 URI 不兼容 Vertex AI 的 `global` endpoint 格式，存在多模型端点统一编排的兼容性缺陷。

> *注：今日共有 11 个历史遗留或已解决议题（主要涉及 Process Framework 构建、JSON配置、单元测试重构等）被标记为 Stale 或 Closed，社区与团队正在积极进行仓库状态清理。*

## 4. 关键 PR 进展
今日拉取请求完全由 **Dependabot** 驱动，重点提升 Python SDK 的底层依赖兼容性与安全性，同时有一项关于运行时安全的文档 PR 被关闭。

- **Python 依赖矩阵更新 (Open)**:
  - 放宽 `cloudevents` 限制至 `>=1,<3`：[#13949](https://github.com/microsoft/semantic-kernel/pull/13949)
  - 放宽 `pytest` 限制至 `>=8.2,<10.0`：[#13950](https://github.com/microsoft/semantic-kernel/pull/13950)
  - 放宽 `azure-ai-projects` 至 `>=1.0,<2.2`：[#13952](https://github.com/microsoft/semantic-kernel/pull/13952)
  - 底层核心网络/解析库版本提升：`urllib3` v2.7.0 ([#13978](https://github.com/microsoft/semantic-kernel/pull/13978))、`mistune` v3.2.1 ([#13965](https://github.com/microsoft/semantic-kernel/pull/13965))、`idna` v3.15 ([#14024](https://github.com/microsoft/semantic-kernel/pull/14024)) 等。
- **[Python] Vaultak 运行时安全集成文档 (Closed)** ([#14043](https://github.com/microsoft/semantic-kernel/pull/14043))
  - **概况**: 试图引入第三方安全防护工具 Vaultak 的集成指南及 Filter 示例，但该 PR 已被关闭（可能由于维护者建议外部集成不应入库或方案需调整）。

## 5. 为什么这个项目在 Agent 编排生态中值得关注
Semantic Kernel 正在经历从“简单的 LLM API 封装”向“成熟的分布式企业级 Agent 编排框架”的深度演进：

1. **核心编排能力的重构与加固**: 从今日大量关于 `ProcessBuilder`、抽象运行时以及 ASP.NET Core 集成的 Issue 可以看出，团队正在用力重构底层 Agent 运行时抽象，致力于解决复杂长周期 Agent 编排难题。
2. **安全防御边界的建立**: 社区已经开始关注高级 Agent 安全威胁（如 Issue #14047 中的“记忆毒化”），这意味着项目正在为进入对安全性要求极高的金融和企业级应用场景做准备。
3. **多模型与多云适配的深化**: 针对 Vertex AI 端点的适配问题，印证了 SK 作为跨云/跨模型统一编排层的设计定位，其兼容性正逐步完善。开发者应密切关注其 NuGet/RPM 包发版节奏，以便在多模态 Agent 构建中及时获得最新修复。

</details>

<details>
<summary><strong>SmolAgents</strong> — <a href="https://github.com/huggingface/smolagents">huggingface/smolagents</a></summary>

以下是为您生成的 2026-06-02 Agent 编排生态日报摘要：

# 📊 Agent 编排生态日报：SmolAgents 专案分析 (2026-06-02)

### 1. 今日速览
过去 24 小时内，SmolAgents 仓库整体趋于平稳，无新增代码提交、Issue 反馈或版本发布。唯一的动态为社区贡献者提交了一项旨在完善核心模块类型提示的 PR。整体处于版本间的代码质量维护期。

### 2. 版本发布
- **最新 Release**：近 24 小时内无新版本发布。

### 3. 重点 Issues
- **最新动态**：过去 24 小时内无新增或更新的 Issues。

### 4. 关键 PR 进展
- **[#2333 增强 `tools.py` 的类型提示与文档](https://github.com/huggingface/smolagents/pull/2333)** [OPEN]
  - **作者**: yehorcallmedai-maker
  - **核心改动**: 为 `src/smolagents/tools.py` 中的 16 个目标对象补充了缺失的返回值类型、参数类型提示（如 `Any`, `str`）以及 docstrings。
  - **技术背景**: 该改动对 SmolAgents 至关重要。因为框架的 `@tool` 装饰器依赖 `_convert_type_hints_to_json_schema` 将类型提示直接转化为供 LLM 使用的 API Schema。此前基础 `Tool` 类的注解不一致，导致依赖严格类型检查（如 `mypy --strict` 或 `pyright`）的下游项目出现误报。此 PR 修复了该问题，且完全向下兼容（不涉及逻辑修改、无新增外部依赖、无需修改测试）。

### 5. 为什么这个项目在 Agent 编排生态中值得关注
SmolAgents 在 AI Agent 编排生态中的核心竞争力在于其**“代码优先”**的设计哲学。从 PR #2333 可以看出，该项目将 Python 原生的类型提示直接作为与 LLM 交互的 API Schema 基准，摒弃了繁重的 JSON Schema 模板定义。
这种机制大幅降低了开发者的心智负担，使得开发者只需关注原生 Python 函数的编写与类型标注，框架即可自动完成工具的编排与 LLM 的对接。通过社区力量不断巩固和完善这套类型系统，SmolAgents 正在提供一个极其轻量、高度标准化且对开发者极其友好的 Agent 构建基座。

</details>

<details>
<summary><strong>Haystack</strong> — <a href="https://github.com/deepset-ai/haystack">deepset-ai/haystack</a></summary>

# AI Agent 编排生态日报：Haystack 项目追踪
**日期**：2026-06-02 | **数据源**：[deepset-ai/haystack](https://github.com/deepset-ai/haystack)

---

### 1. 今日速览
过去 24 小时内，Haystack 生态保持高度活跃。项目无新版本发布，但底层代码与文档迎来了大量更新。社区共处理了 **8 个 Issues**（3 个已关闭）和 **32 个 Pull Requests**（12 个已合并/关闭）。
当前开发重心主要集中在：**多租户与异步编排架构增强**、**底层组件数据一致性修复**、**CI/文档工程规范化**，以及**开源安全信任评级提升**。

### 2. 版本发布
**无**（近 24 小时内未发布新版本）。

### 3. 重点 Issues
*   **[架构] 多租户密钥管理探索**：`EnvVarSecrets` 目前依赖全局的 `os.environ`，在单进程并发托管多 Pipeline 时存在安全隐患。社区正讨论引入 `ContextVar` 以实现上下文隔离。
    👉 [#11366](https://github.com/deepset-ai/haystack/issues/11366)
*   **[核心 Bug] Document ID 生成不一致**：`Document.id` 的生成依赖于 `meta` 字典键的插入顺序，导致内容相同但构建方式不同的文档产生不同 ID，破坏了底层去重逻辑。
    👉 [#11445](https://github.com/deepset-ai/haystack/issues/11445)
*   **[健壮性] 工具类输入校验缺陷**：`expand_page_range()` 在解析多连字符字符串（如 `"5-10-15"`）时触发内部解包错误，已提交相关 PR 进行输入拦截。
    👉 [#11449](https://github.com/deepset-ai/haystack/issues/11449)
*   **[安全] 符号链接防护提案**：建议在 `ByteStream` 和转换器中增加对 Symlink 的默认拦截，以防范潜在的路径穿越风险。
    👉 [#11252](https://github.com/deepset-ai/haystack/issues/11252)

### 4. 关键 PR 进展
*   **[核心编排] 异步回调兼容性重构**：PR 允许在 `run_async` 中直接传入同步回调函数（并发出警告），提升了复杂 Agent 异步流转时的接口灵活性。
    👉 [#11466](https://github.com/deepset-ai/haystack/pull/11466)
*   **[核心编排] SuperComponent 异步行为修正**：修复了包裹同步 Pipeline 的 `SuperComponent` 错误暴露 `run_async` 接口的问题，防止元类检查导致的异步调用崩溃。
    👉 [#11194](https://github.com/deepset-ai/haystack/pull/11194) (已合并)
*   **[日志隔离] 根日志劫持修复**：将 `configure_logging()` 的目标从全局 Root logger 切换到专有的 `haystack` logger，避免 Agent 宿主应用丢失自身的日志配置。
    👉 [#10763](https://github.com/deepset-ai/haystack/pull/10763) (已合并)
*   **[生态集成] LiteLLM 与工具类扩展**：
    *   新增 `LiteLLMChatGenerator` 文档，扩展了 Agent 接入多模型的统一接口能力。
        👉 [#11472](https://github.com/deepset-ai/haystack/pull/11472)
    *   新增 `FileContent` 数据类及 `PythonCodeSplitter` 文档，强化了代码解析与多模态文件处理的基建。
        👉 [#11444](https://github.com/deepset-ai/haystack/pull/11444) | [#11437](https://github.com/deepset-ai/haystack/pull/11437) (已合并)
*   **[安全合规] 徽章集成**：维护者已将 OpenSSF Best Practices 徽章集成至 README，以可视化的方式展示项目的安全合规水平。
    👉 [#11465](https://github.com/deepset-ai/haystack/pull/11465) (已合并)

### 5. 为什么这个项目在 Agent 编排生态中值得关注
从今日的数据可以看出，Haystack 的演进方向高度契合企业级 **Agent 编排系统** 的痛点：
1.  **解决并发与多租户问题**：通过重构异步组件（`SuperComponent` 同步/异步边界划分）和探索上下文隔离（`EnvVarSecrets`），Haystack 正在为“单进程高并发运行多 Agent”打造安全的底层沙箱。
2.  **确定性与状态管理**：修复 `Document.id` 的生成逻辑，本质上是在完善 Agent 记忆与检索系统（RAG）中“状态唯一性”这一核心基石，避免数据静默损坏。
3.  **严肃的安全合规**：项目不仅积极回应安全加固提案（Symlink 防护），还主动集成 OpenSSF 等合规徽章（当前 HVTracker 信任度评分达 90.1/100），这标志着该项目正逐步满足金融、医疗等对供应链安全要求极高的大型企业落地标准。

</details>

<details>
<summary><strong>BabyAGI</strong> — <a href="https://github.com/yoheinakajima/babyagi">yoheinakajima/babyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenAI Swarm</strong> — <a href="https://github.com/openai/swarm">openai/swarm</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenAI Agents</strong> — <a href="https://github.com/openai/openai-agents-python">openai/openai-agents-python</a></summary>

# Agent 编排日报：OpenAI Agents SDK 生态追踪 (2026-06-02)

## 1. 今日速览
过去 24 小时内，`openai-agents-python` 仓库展现出极高的社区活跃度，共处理 **4 条 Issues** 和 **21 条 Pull Requests**，无新版本发布。整体动向聚焦于三个核心领域：**Google A2A 协议的跨框架集成**、**工具层 Schema 解析与参数命名的健壮性修复**，以及 **Realtime 会话事件机制的批量维护**。大量 PR 集中于代码质量提升与边界条件防御。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
今日的新增 Issues 均由社区成员 `devteamaegis` 提交，集中暴露了 SDK 在处理工具底层验证和解析时的健壮性缺陷：

*   **[需求探讨] A2A (Agent2Agent) 协议支持**：呼声极高的功能请求（👍 33），建议 SDK 原生兼容 Google 提出的 A2A 协议，打破 Agent 框架间的通信壁垒。
    *   链接：[openai/openai-agents-python Issue #472](https://github.com/openai/openai-agents-python/issues/472)
*   **[Bug] `resolve_ref` 解析导致 KeyError 崩溃**：当 `$ref` 路径不存在且包含同级属性（如 `description`）时，底层发生字典取值崩溃。
    *   链接：[openai/openai-agents-python Issue #3551](https://github.com/openai/openai-agents-python/issues/3551)
*   **[Bug] Pydantic 保留字引发不透明 ValueError**：使用 `@function_tool` 且参数名为 `model_dump` 等时，触发 Pydantic 深层报错，缺少清晰的 SDK 级提示。
    *   链接：[openai/openai-agents-python Issue #3549](https://github.com/openai/openai-agents-python/issues/3549)
*   **[Bug] 参数命名引发 TypeError**：当函数参数命名为 Pydantic 保留字（如 `model_config`）时，直接导致类型错误。
    *   链接：[openai/openai-agents-python Issue #3547](https://github.com/openai/openai-agents-python/issues/3547)

## 4. 关键 PR 进展
今日的 21 个 PR 呈现出“功能拓展 + 缺陷快修”并行的态势，亮点如下：

### 🚀 核心功能拓展与集成
*   **A2A 双向协议集成**：社区提交了实现 Issue #472 的 PR，通过双向消息转换器实现 OpenAI Agents 与任意 A2A 兼容框架/语言的互操作。
    *   链接：[openai/openai-agents-python PR #3562](https://github.com/openai/openai-agents-python/pull/3562)
*   **支持 Cloudflare Sandbox 端口解析**：为云际沙箱扩展增加了对外暴露 HTTP 端点的解析能力。
    *   链接：[openai/openai-agents-python PR #3525](https://github.com/openai/openai-agents-python/pull/3525)
*   **新增 `on_tool_call_sealed` 生命周期钩子**：引入流式响应场景下的急切工具分发机制，在完整响应完成前触发。
    *   链接：[openai/openai-agents-python PR #3558](https://github.com/openai/openai-agents-python/pull/3558)

### 🛠️ 关键缺陷与健壮性修复
*   **MCP 重复工具名校验修复**：修复了现有逻辑仅检查跨服务器重名，而遗漏单个 MCP 服务器内返回重复工具名的问题。
    *   链接：[openai/openai-agents-python PR #3561](https://github.com/openai/openai-agents-python/pull/3561) (已合入)
*   **Schema 与 Pydantic 保留字防御**：集中修复了今日暴露的 Issues (#3549, #3551)，包含对缺失 `$ref` 路径的拦截和保留字的明确 `UserError` 抛出。
    *   链接：[openai/openai-agents-python PR #3560](https://github.com/openai/openai-agents-python/pull/3560) | [#3552](https://github.com/openai/openai-agents-python/pull/3552) | [#3550](https://github.com/openai/openai-agents-python/pull/3550)
*   **空列表/元组工具输出丢失修复**：修复了 `all([]) == True` 导致工具返回空列表被错误转换的边界 Bug。
    *   链接：[openai/openai-agents-python PR #3554](https://github.com/openai/openai-agents-python/pull/3554)
*   **Realtime 会话“即发即弃”任务 GC 修复**：解决了 `RealtimeSession` 中异步事件任务因弱引用被垃圾回收导致丢失的问题。
    *   链接：[openai/openai-agents-python PR #3553](https://github.com/openai/openai-agents-python/pull/3553)

### 📥 Stale PR 集中处理
今日有多个针对 `Realtime` 历史记录事件未触发的 PR 被处理关闭（如 [#2941](https://github.com/openai/openai-agents-python/pull/2941), [#3025](https://github.com/openai/openai-agents-python/pull/3025), [#3086](https://github.com/openai/openai-agents-python/pull/3086)），这些 PR 旨在修复 `transcript_delta` 更新时 UI 无法感知的问题。

## 5. 为什么这个项目在 Agent 编排生态中值得关注
从今日的社区动态可以看出，OpenAI Agents SDK 正在加速巩固其在 **AI Agent 基础设施层** 的地位：
1. **跨协议互操作性成为重点**：A2A 协议支持的高关注度（Issue 33 👍）及迅速响应的 PR，印证了编排生态正从“孤岛化”走向“互联互通”，多框架协同将是接下来的核心命题。
2. **工具调用边界的极限测试**：大量围绕 Pydantic 深度集成（保留字、Schema 校验）的 Issue 和 PR 表明，项目正处于开发者深度使用的阶段，SDK 正在快速补齐关于极端参数、类型校验的防御性代码。
3. **企业级特性的演进**：沙箱机制的精细化控制（如 Cloudflare 端口映射、Auth 认证机制合入），表明该 SDK 正在满足更严苛的生产环境部署需求，逐步剥离早期的“实验性质”。

</details>

<details>
<summary><strong>DeepAgents</strong> — <a href="https://github.com/langchain-ai/deepagents">langchain-ai/deepagents</a></summary>

# DeepAgents Agent 编排日报摘要 (2026-06-02)

## 1. 今日速览
过去 24 小时内，[langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) 保持了高度活跃的开发节奏。社区共更新了 **10 条 Issues**（6 open, 4 closed）和 **28 条 PRs**（16 open, 12 closed），并发布了 **1 个新版本**。今日的开发重心主要集中在两个方面：一是 `deepagents-code`（dcode）TUI 客户端的大量 UI 和 OAuth 交互修复；二是 SDK 底层文件系统编排能力的增强（特别是新增 `delete_file` 及空文件列表的标准化处理）。

---

## 2. 版本发布
- **[langchain-quickjs==0.1.3](https://github.com/langchain-ai/deepagents/pull/3371)**
  - **主要特性**：引入了 REPL 持久化模式（`thread`、`turn`、`call`），为多轮次 Agent 交互提供了更精细的沙盒状态管理能力。同时废弃了旧的 `snapshot_between_turns` 参数。
  - **相关提交**：[Add REPL persistence modes (#3557)](https://github.com/langchain-ai/deepagents/pull/3557)
  - **新增工具**：引入了 swarm task tool，增强了多智能体群体的任务调度能力 ([#3472](https://github.com/langchain-ai/deepagents/issues/3472))。

---

## 3. 重点 Issues
社区正在积极反馈外部模型兼容性及高级编排需求：

- **外部模型调用 Bug**：[#3587](https://github.com/langchain-ai/deepagents/issues/3587) 报告了在调用 OpenAI 兼容的 Qwen 模型时，Subagent（子代理）执行失败并抛出 "Tool call ID is required" 错误。这凸显了异构大模型接入 Agent 编排框架时工具调用对齐的复杂性。
- **核心工具功能请求**：
  - **正则支持**：[#3547](https://github.com/langchain-ai/deepagents/issues/3547) 请求为 `grep` 工具增加正则表达式支持，以增强 Agent 的代码搜索与分析能力。
  - **长时自主运行 Agent**：[#3580](https://github.com/langchain-ai/deepagents/issues/3580) 建议提供全局覆盖 `BASE_AGENT_PROMPT` 的接口，这对构建长时间运行的自动化/自主 Agent 至关重要。
  - **文件读取优化**：[#3404](https://github.com/langchain-ai/deepagents/issues/3404) 提出为 `read_file` 增加按列分页的功能，旨在处理宽表数据时降低 Token 消耗。
- **生态集成反馈**：[#3679](https://github.com/langchain-ai/deepagents/issues/3679) 报告了与 Daytona（云开发环境）集成时的文件上传错误处理问题。

---

## 4. 关键 PR 进展
今日的 PR 动态展现了项目在底层基础设施和用户体验上的双轨迭代：

### 核心编排能力增强
- **文件生命周期闭环**：[#3691](https://github.com/langchain-ai/deepagents/pull/3691) 与 [#3659](https://github.com/langchain-ai/deepagents/pull/3659) 提出并在 `BackendProtocol` 中实现了 `delete_file` 工具。该更新使得 Agent 具备了完整的文件系统 CRUD（创建、读取、更新、删除）能力，是自主代码修编 Agent 的重要基础设施。
- **工具返回标准化**：[#3697](https://github.com/langchain-ai/deepagents/pull/3697) 修复了 `ls` 和 `glob` 工具的输出，当文件列表为空时，现在会返回对 LLM 友好的 `No files found` 语义字符串，而非原始的 `[]`。这显著降低了模型产生幻觉的风险。

### CLI 破坏性更新与发布流水线
- **部署架构升级**：[#3609](https://github.com/langchain-ai/deepagents/pull/3609) 引入了一个 **破坏性更新**，将 `deepagents deploy` 命令迁移至托管的 Deep Agents API（`0.1.x` -> `0.2.0`）。这表明 DeepAgents 正在从纯本地/开源工具向提供云端托管编排服务的架构演进。
- **多模块发版准备**：今日开启了包括 `deepagents-cli` ([#3597](https://github.com/langchain-ai/deepagents/pull/3597)), `langchain-runloop` ([#3595](https://github.com/langchain-ai/deepagents/pull/3595)), `langchain-modal` ([#3598](https://github.com/langchain-ai/deepagents/pull/3598)), `langchain-daytona` ([#3596](https://github.com/langchain-ai/deepagents/pull/3596)) 等多个核心模块的新版本发布 PR，预示着一次大规模的协同更新即将到来。

### TUI (dcode) 与 MCP 体验优化
维护者集中修复了客户端的交互体验：[#3693](https://github.com/langchain-ai/deepagents/pull/3693) 降低了 OAuth 登录的视觉噪音；[#3692](https://github.com/langchain-ai/deepagents/pull/3692) 修复了 MCP OAuth 重定向和客户端注册失效的严重 Bug；[#3690](https://github.com/langchain-ai/deepagents/pull/3690) 优化了 TUI 内 `/model` 命令的全局搜索能力。

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注
DeepAgents 正在摆脱单纯的“工具调用框架”定位，演进为一个**全栈式的 Agent 运行时与编排环境**：

1. **完备的沙盒与计算环境集成**：通过紧密集成 QuickJS（沙盒执行）、Daytona/Runloop/Modal（云沙盒与计算），项目为 Agent 提供了从安全脚本执行到高并发计算的全套运行环境支持。
2. **面向多智能体的原生设计**：无论是最新 release 中增加的 Swarm 任务工具，还是对 REPL 多模式持久化的支持，都表明项目在底层架构上正在为复杂的多智能体协同（Multi-Agent Orchestration）铺路。
3. **MCP (Model Context Protocol) 生态的深度整合**：近期高频针对 TUI 和 MCP 服务器的 OAuth 修复与重连优化，说明 DeepAgents 正在致力于成为各种外部工具/数据源的标准化接入网关，降低模型连接现实世界系统的摩擦力。
4. **面向模型兼容性的工程化攻坚**：针对 Qwen 等开源模型的适配 Bug (#3587) 展现了团队在抹平底层异构模型 API 差异上的工程努力，这对于构建跨模型通用的 Agent 编排标准具有重要意义。

</details>

<details>
<summary><strong>PydanticAI</strong> — <a href="https://github.com/pydantic/pydantic-ai">pydantic/pydantic-ai</a></summary>

以下是为您生成的 2026-06-02 Agent 编排日报摘要：

# PydanticAI 开源生态日报 (2026-06-02)

## 1. 今日速览
过去 24 小时内，PydanticAI 生态保持高度活跃。项目共处理了 **12** 条 Issues（7 新开，5 更新）和 **25** 条 PRs（重点集中在多模型适配、序列化修复和底层依赖升级）。社区当前的核心焦点在于**多智能体系统的人机交互**、**消息状态的持久化**以及 **xAI/Grok 模型的深度适配**。

## 2. 版本发布
- **最新 Releases**: 过去 24 小时内**无新版本发布**。

## 3. 重点 Issues
- **[架构探讨] 多智能体系统的人机协同**
  - **摘要**: 社区正在热烈讨论如何在多智能体系统中实现人类审批工作流。当协调智能体将任务委派给专家智能体时，如何在中途安全地介入人工审批，这是当前 Agent 编排走向复杂业务落地的核心痛点。
  - **链接**: [pydantic/pydantic-ai#3274](https://github.com/pydantic/pydantic-ai/issues/3274)

- **[状态丢失] 消息历史序列化导致运行数据丢失**
  - **摘要**: 自动化巡检发现高危 Bug：在对消息历史进行序列化/反序列化（用于断点续跑、工作流恢复）时，`ModelResponse.usage` 中的 `requests` 和 `tool_calls` 等关键追踪数据会丢失。对于需要精确成本核算和状态追踪的生产级工作流（如 Temporal 集成）影响较大。
  - **链接**: [pydantic/pydantic-ai#5744](https://github.com/pydantic/pydantic-ai/issues/5744)

- **[依赖阻断] CI 底层依赖 `aiohttp` 更新破坏测试套件**
  - **摘要**: `aiohttp 3.14.0` 移除了 `AsyncStreamReaderMixin`，直接导致 Mock 库 `vcrpy` 失效，当前最低版本的 CI 矩阵已全面飘红。
  - **链接**: [pydantic/pydantic-ai#5751](https://github.com/pydantic/pydantic-ai/issues/5751)

- **[运行时错误] Anthropic 原生工具引发 Token 计数崩溃**
  - **摘要**: 在启用 Anthropic 原生/服务端工具（如 `CodeExecutionTool`）时，`count_tokens()` 接口会触发 HTTP 400 错误。
  - **链接**: [pydantic/pydantic-ai#5702](https://github.com/pydantic/pydantic-ai/issues/5702)

## 4. 关键 PR 进展
- **[架构增强] 按需加载能力**
  - **摘要**: 引入了一级“渐进式能力展示”特性。允许为 Agent 设置延迟加载（`defer_loading=True`），这在编排包含海量工具但单次运行仅需少量的场景下，能极大优化初始化内存和 Token 占用。
  - **链接**: [pydantic/pydantic-ai#5230](https://github.com/pydantic/pydantic-ai/pull/5230)

- **[缺陷修复] 修复 RunUsage 序列化丢失问题 (两个竞合方案)**
  - **摘要**: 针对 Issue #5744，社区迅速响应，目前有两个修复方案正在进行审查（PR #5749 和 PR #5747）。核心思路是让 `ModelResponse.usage` 能够同时兼容并正确反序列化 `RequestUsage` 和 `RunUsage`。
  - **链接**: [pydantic/pydantic-ai#5749](https://github.com/pydantic/pydantic-ai/pull/5749), [pydantic/pydantic-ai#5747](https://github.com/pydantic/pydantic-ai/pull/5747)

- **[模型适配] xAI (Grok) 选项深度对齐**
  - **摘要**: 持续完善对 xAI SDK 的支持，新增将基础 `seed` 映射到 xAI 提供商，并增加了 `api_host`（支持网关/代理）和 `timeout` 配置，增强了复杂网络环境下的编排部署能力。
  - **链接**: [pydantic/pydantic-ai#5741](https://github.com/pydantic/pydantic-ai/pull/5741), [pydantic/pydantic-ai#5742](https://github.com/pydantic/pydantic-ai/pull/5742)

- **[ chore ] 锁定 `aiohttp` 版本修复 CI (PR #5752)**
  - **摘要**: 快速响应 Issue #5751，将 `aiohttp` 依赖临时降级锁定在 `<3.14` 版本，以恢复 CI 矩阵的正常运行。
  - **链接**: [pydantic/pydantic-ai#5752](https://github.com/pydantic/pydantic-ai/pull/5752)

## 5. 为什么这个项目在 Agent 编排生态中值得关注
从今日的 Issue 与 PR 动向可以看出，PydanticAI 正在解决 **“高级编排框架如何真正适用于企业级生产环境”** 的核心挑战：

1. **企业级状态与成本管理**：社区对消息历史序列化丢失运行数据的极高敏感度（Issue #5744），以及快速的修复响应，证明该项目对生产环境中至关重要的“断点续编”、“成本追踪”有着严苛的工程要求。
2. **编排粒度的性能优化**：PR #5230 引入的“按需/延迟加载”机制，标志着框架开始从“功能堆砌”转向“精细化资源配置”，这对于构建包含成百上千工具的复杂超级智能体至关重要。
3. **异构环境的强兼容性**：无论是修复底层异步库 (`aiohttp`) 引起的测试链崩溃，还是解决 Temporal 等分布式任务调度框架下的沙箱权限冲突，PydanticAI 正在积极消除与各类第三方执行引擎的集成摩擦。

</details>