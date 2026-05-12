# Agent 编排生态日报 2026-05-13

> 生成时间: 2026-05-12 22:22 UTC | 覆盖项目: 45 个

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
基于 2026-05-13 的数据监控，AI Agent 编排生态已全面跨越“单体验证”阶段，进入以**工程化深水区、多租户安全和企业级容错**为核心的范式转移期。开源项目的迭代重心正在从“如何串联 LLM 调用”向“解决分布式复杂状态下的资源隔离、可审计性与跨平台一致性”迅速演进。

## 各项目活跃度对比
过去 24 小时内，生态呈现显著的头部分化效应，少数核心框架占据了绝大部分的工程迭代精力。

| 项目 | Issues | PRs | Releases | 信号 |
|---|---|---|---|---|
| **AutoGPT** | 3 | 94 | 0 | 重构底层模型注册表，加速商业化计费闭环打磨 |
| **DeepAgents** | 16 | 65 | 8 | 深入攻坚多层子 Agent 并发状态隔离，SDK 拆分为独立模块 |
| **Emdash** | 6 | 70 | 0 | 演进为桌面级 API 化编排中控台，强化多模型并发治理 |
| **OpenFang** | 90 | 42 | 5 | 原生落地企业级多租户架构与外部目录集成 |
| **PydanticAI** | 20 | 30 | 1 | 应对供应链投毒事件，全面推进 v2 底层架构重构 |
| **T3Code** | 20 | 23 | 0 | 解决异构 CLI Agent 的状态生命周期与卡死问题 |
| **Agent Orchestrator** | 33 | 25 | 0 | 重构底层通信协议，尝试从 tmux 迁移至文件驱动 |
| **CrewAI** | 4 | 25 | 1 | 废弃旧执行器，探索基于 x402 协议的 Agent 自主经济 |
| **LangGraph** | 4 | 10 | 6 | 主版本 GA，重构跨宿主崩溃的持久化错误处理机制 |
| **Agno** | 13 | 25 | 0 | 引入动态子代理与工具发现，向高并发生产态演进 |
| **Gastown** | 15 | 26 | 0 | 密集修复 Dolt 数据库争用与僵尸 Agent 进程治理 |
| **Ruflo / Claude Flow** | 16 | 16 | 0 | 落地本地+云端双运行时架构，紧急修复 RAG 向量检索链断裂 |
| **OpenAI Agents** | 9 | 43 | 1 | 重点修复 Realtime 语音流与 SQLite 会话状态一致性 |
| **Haystack** | 2 | 13 | 2 | 引入 MultiRetriever 提升并行 RAG 编排能力 |
| **Mux Desktop** | 1 | 17 | 1 | 引入基于 Dollar 预算的 Goal 原语，支持长周期自动续跑 |
| **Superset** | 16 | 41 | 4 | 深度打磨多工作区终端隔离与原生 Agent 技能发现端点 |
| **其他无活动项目** | 0 | 0 | 0 | OpenAI Swarm, BabyAGI 等超过 15 个项目无动态 |

## 编排模式与架构对比
在处理 Agent 协调、任务分发和状态同步方面，当前主流项目呈现出截然不同的架构哲学：

1. **状态机与图驱动**：以 LangGraph 和 DeepAgents 为代表。它们将复杂工作流定义为显式的状态图。这种模式的重点在于攻克多子图并发时的状态隔离（如 DeepAgents 修复并发键冲突）和容错恢复（如 LangGraph 的持久化错误处理），适合逻辑严密、步骤繁琐的企业级工作流。
2. **树状/层级化路由**：CrewAI 和 OpenFang 倾向于此模式。通过中心化的 Orchestrator（或 Router）统一分配任务给底层专业 Agent。架构演进方向是原生多租户支持（OpenFang 的 API Key 隔离）以及更智能的 Agent 共识与转移机制（CrewAI 的 `consensual` 进程）。
3. **本地运行时沙箱/进程级调度**：Gastown、Ruflo 和 Agent Deck 采用重度进程管理。利用 Docker、tmux 或 WASM 作为沙箱隔离，通过文件系统或消息队列进行跨 Agent 通信。此类架构极度关注僵尸进程清理、端口冲突和底层通信链路的可靠性（如 AO 放弃 `tmux send-keys`）。

## 共同关注的工程方向
从今日的集中提交和问题讨论中，可以提炼出整个生态正在共同面对的四大工程痛点：

1. **状态一致性与生命周期防卡死**：几乎所有项目都在处理 Agent 运行时的“挂死但不退出”问题。从 T3Code 重构状态机解决 UI 持续 `working...`，到 Mux 引入自动续跑 Goal，再到 Gastown 的僵尸进程收割，可靠的生命周期管理是目前的头等大事。
2. **安全合规与零信任验证**：Agent 获得执行系统级命令的权限后，安全风险陡增。今日披露的 AutoGen WebSocket RCE 漏洞（CVSS 9.8）、AutoGPT 的 subprocess 注入，以及 SmolAgents 和 MetaGPT 针对任意代码执行 (`eval`/`exec`) 的修复，标志着安全加固已成为生态刚需。
3. **供应链与依赖风险**：PydanticAI 和 Agno 紧急响应了 `mistralai` PyPI 包的恶意投毒事件。这迫使 Agent 框架开始重新审视自身庞大的依赖树，并在动态执行外部工具时建立更严格的沙箱边界。
4. **长上下文与记忆检索治理**：随着任务周期变长，上下文溢出与记忆丢失成为瓶颈。Claude Flow 集中爆发了 HNSW 索引与向量维度不匹配的链路断裂问题；同时，AutoGPT 引入了基于知识图谱的记忆整合，LlamaIndex 和 AutoGen 则在尝试集成标准化的本地记忆系统。

## 差异化定位分析
面对同质化的编排需求，头部项目正通过差异化定位建立各自的生态护城河：

- **AutoGPT & PydanticAI**：定位于**通用型底层基座与商业化 SaaS 平台**。AutoGPT 精细化打磨计费逻辑与多模型路由；PydanticAI 则在 v2 架构中发力将 Provider、Capabilities 和 Memory 高度解耦，提供最极致的抽象层。
- **DeepAgents & LangGraph**：定位于**复杂逻辑与高并发计算的调度引擎**。专注解决企业级复杂工作流中的“最大力度容错”和“异步并发安全”，适合构建高可靠的后台 Agent 生产线。
- **Gastown & Claude Squad & Agent Deck**：定位于**本地多 Agent 的运维调度与终端协同网关**。它们不纠缠于 LLM 底层，而是解决“如何在一个终端里同时安全、并发地开 10 个 Claude Code / Codex 会话且互不干扰”的工程痛点。
- **Mux Desktop & Emdash**：定位于**开发者桌面增强与全环境集成**。它们将 Agent 深度嵌入本地文件系统、Git 工作流乃至 OS 级别权限（如 macOS Keychain），提供一键开箱即用的 GUI 观测与控制中枢。

## 值得关注的趋势信号
基于今日数据，可以捕捉到几个将影响未来半年生态走向的关键信号：

1. **“Goal 驱动”将取代单一 Prompt 循环**：Mux Desktop 引入了基于 Dollar 预算的 Goal 原语，T3Code 探索 Steer/Queue 模式。Agent 编排正从“一问一答”走向“设定目标与预算、自主分解、长时异步执行”。
2. **“可验证计算”成为企业级标配**：AutoGen 和 SmolAgents 相继引入了基于密码学（Ed25519）的溯源凭证与不可篡改执行回执。这意味着 Agent 的操作不再只需“可观测”，更需要“防抵赖”以通过企业级审计。
3. **Agent 经济学的萌芽**：CrewAI 集成了基于 x402 协议的加密钱包工具，允许 Agent 在调用外部 API 时自主完成微支付。这不仅是对工具调用的扩展，更是向“Agent 自治经济网络”迈出的早期探索。
4. **“本地+云端”双态执行运行时的融合**：Ruflo 落地了 ADR-115 架构，将本地 WASM 沙箱与云端大模型运行时统一调度。未来的编排框架将默认具备异构计算调度能力，实现重任务上云、轻任务本地的动态自适应。

---

## Agent 编排项目详细报告

<details>
<summary><strong>Claude Squad</strong> — <a href="https://github.com/smtg-ai/claude-squad">smtg-ai/claude-squad</a></summary>

# AI Agent 编排日报：Claude Squad
**日期**：2026-05-13  
**项目**：[smtg-ai/claude-squad](https://github.com/smtg-ai/claude-squad)

---

## 1. 今日速览
过去 24 小时内，Claude Squad 仓库活动平稳，无新版本发布。社区焦点集中在**多仓库隔离架构**的底层重构（PR #290）以及 **Windows 平台兼容性**的边缘场景报错（Issue #291）。整体呈现出“核心架构演进中，长尾平台问题待修补”的态势。

- Issues 更新：1 条
- PR 更新：1 条
- Releases：0 个

---

## 2. 版本发布
无新版本发布。

---

## 3. 重点 Issues
- **[#291](https://github.com/smtg-ai/claude-squad/issues/291) [OPEN] Error on Win11 with psmux or Msys2 tmux**
  - **作者**：GitYun
  - **摘要**：用户在 Windows 11 环境下使用 `psmux` 或 `Msys2 tmux` 作为终端多路复用器执行 `claude-squad -q 'jcode'` 时触发异常。目前尚不确定是 `jcode` 工具链未被支持，还是底层复用器兼容性缺陷导致日志报错。
  - **分析**：该 Issue 暴露了项目在非 Unix/Linux 平台（尤其是 Windows 原生及模拟环境）下的终端复用层兼容性短板。随着多 Agent 工作流在跨平台开发团队中的普及，解决 `psmux`/Msys2 的适配问题将有助于扩大项目的开发者基盘。

---

## 4. 关键 PR 进展
- **[#290](https://github.com/smtg-ai/claude-squad/pull/290) [OPEN] feat: introduce workspaces for per-repo isolation, env scoping, and concurrent multi-repo use**
  - **作者**：nsLance
  - **摘要**：引入 **Workspace（工作区）** 概念，将原本全局的 `~/.claude-squad/` 配置拆分为按代码仓库隔离的独立作用域。核心能力包括：单仓库级别的凭证管理、环境变量作用域化、Post-worktree 钩子、Worktree 存放位置自定义，以及支持并发的多仓库工作流。
  - **关联**：Closes #245, #260；Addresses #277, #195, #186。
  - **分析**：这是一个**架构级的特性重构**。在复杂的 AI Agent 编排场景中，不同的代码仓库往往需要不同的系统提示词、环境变量和权限边界。Workspaces 的引入从根本上解决了多仓库并发操作时的状态冲突问题，是 Claude Squad 从“单会话辅助工具”向“企业级多 Agent 任务编排平台”演进的关键一步。

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注
Claude Squad 的核心价值在于解决了 **多 AI Agent 实例在终端环境下的生命周期管理与并发协同** 问题。

1. **突破单 Agent 瓶颈**：通过底层终端多路复用（如 `tmux`），它允许开发者同时编排和监控多个 Claude Code 实例，实现代码生成、测试、重构等任务的并行处理。
2. **向多租户架构演进**：本次 PR #290 提出的 Workspace 机制，表明项目正在积极构建**多仓库隔离与状态管理**能力。这是 Agent 编排工具从个人极客玩具走向团队级、企业级基础设施的必经之路。
3. **生态卡位精准**：在当前 AI Coding 工具链（如 Cursor, Windsurf, Claude Code）快速爆发的背景下，Claude Squad 并不与底层模型或 IDE 竞争，而是切入**“AI 智能体集群的运维与编排”**这一垂直空白地带，具备成为多 Agent 调度层标准组件的潜力。

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

过去24小时无活动。

</details>

<details>
<summary><strong>Claude Code Bridge</strong> — <a href="https://github.com/bfly123/claude_code_bridge">bfly123/claude_code_bridge</a></summary>

# AI Agent 编排生态日报 - 2026-05-13

**关注项目**：Claude Code Bridge (bfly123/claude_code_bridge)

### 1. 今日速览
过去 24 小时内，Claude Code Bridge 生态活动以代码合并与热修复为主。项目无新增或更新的 Issues，提交了 1 个版本发布（v6.1.7），并有 1 个针对 macOS 环境适配的 PR 正在等待审核。整体反映出项目当前正处于解决多平台隔离环境稳定性的深水区。

### 2. 版本发布
- **[v6.1.7 - Codex Memory Freshness Hotfix](https://github.com/bfly123/claude_code_bridge/releases/tag/v6.1.7)**
  - **核心修复**：解决了 Codex 共享内存刷新机制的过期（Stale）绑定问题。现在 Codex 启动时会记录托管 `AGENTS.md` 内存映射的指纹，当 `.ccb/ccb_memory.md` 发生变更时，自动跳过无效的恢复绑定。
  - **行为变更**：收紧了 Claude 和 Droid 的 ask skill 提交纪律，强制要求明确的提交约束，减少了异步编排过程中的不确定性。

### 3. 重点 Issues
- **过去 24 小时无动态**。

### 4. 关键 PR 进展
- **[#202 [OPEN] Fix macOS Claude keychain preference projection](https://github.com/SeemSeam/claude_codex_bridge/pull/202)**
  - **作者**：Jingzhe-Wang
  - **摘要**：针对 macOS 环境下 Agent 隔离运行的安全凭证问题进行修复。在 macOS 上，托管（Managed）的 Claude 主目录需要读取用户的 Security framework keychain 配置，以确保在隔离的 `HOME` 环境中 `security default-keychain` 命令能正确解析登录 keychain。
  - **工程实现**：该 PR 将宿主机上的 `Library/Preferences/com.apple.security.plist` 映射到 Claude 托管主目录中，打通了沙盒环境下的系统级鉴权链路。

### 5. 为什么这个项目在 Agent 编排生态中值得关注
Claude Code Bridge 的近期更新（如本次 v6.1.7 和 PR #202）持续暴露出构建多 Agent 系统时的两个核心工程挑战：**状态一致性与执行环境隔离**。

1. **内存状态防幻读（Memory Fingerprinting）**：Agent 在中断恢复时极易读取到未同步的陈旧上下文。该项目通过引入 `ccb_memory.md` 指纹校验机制，为解决复杂工作流中 Agent 状态一致性问题提供了参考范式。
2. **深度环境隔离适配**：为了保障安全性和幂等性，Agent 编排器通常需要为每个任务构建隔离环境。PR #202 展示了在 macOS 环境下，如何通过投影系统级 plist 文件来平衡「进程沙盒隔离」与「合法系统鉴权（如 Keychain）」的冲突。

该项目正在建立一套底层的跨平台、跨进程 Agent 运行时标准，对于构建企业级、高可靠的多 Agent 编排框架具有极高的源码研究价值。

</details>

<details>
<summary><strong>Dorothy</strong> — <a href="https://github.com/Charlie85270/Dorothy">Charlie85270/Dorothy</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Jean</strong> — <a href="https://github.com/coollabsio/jean">coollabsio/jean</a></summary>

# AI Agent 编排生态日报：Jean 项目监控 (2026-05-13)

**数据源**: [github.com/coollabsio/jean](https://github.com/coollabsio/jean) | **统计周期**: 过去 24 小时

## 1. 今日速览
过去 24 小时内，Jean 项目暂无新版本发布与 PR 合并，活跃度主要体现在 **Issue 反馈**（+2 条）。社区反馈集中在 **跨平台兼容性**（Linux 自动更新失败、Windows 会话管理异常）两个核心痛点。这暴露出项目在处理多操作系统底层进程及资源分发时的边界条件测试仍需加强。

## 2. 版本发布
- **最新 Releases**: 无新增版本发布。

## 3. 重点 Issues
共新增/更新 2 个 Bug 报告，分别涉及 Linux 的 CLI 依赖分发问题与 Windows 的 Agent 异步控制问题。

- **[#366 Codex CLI 在 Linux x86_64 环境下自动更新失败](https://github.com/coollabsio/jean/issues/366)**
  - **现象**: 用户触发 `Update Codex CLI` 时立即报错，提示 `Asset codex-x86_64-unknown-linux-gnu.tar.gz not found in release rust-v0.130.0`。
  - **分析**: 资源分发/打包逻辑出现错位，官方在 release `rust-v0.130.0` 中可能遗漏了特定的 Linux GNU 构件，或者更新拉取逻辑中的 Target Triplet 匹配规则存在硬编码错误。直接影响 Linux 桌面端用户的 CLI 升级体验。

- **[#367 [Bug] Windows 环境下取消 Agent 会话请求失效](https://github.com/coollabsio/jean/issues/367)**
  - **现象**: 在发起 Agent 会话请求时点击 `Cancel` 按钮，UI 按钮消失，但底层 Agent 进程并未被杀死仍在后台运行。且后续发起的新请求会报错 `Request failed. Session already has...`。
  - **分析**: 属于典型的前后端状态不同步问题。前端仅执行了 UI 状态回退，未向底层派发真正的 `Abort/Cancel` 信号（或 Windows 环境下的进程 SIGINT/SIGTERM 信号路由失效），导致端口/Session 被已废弃的后台进程持续占用。

## 4. 关键 PR 进展
过去 24 小时内无新增或更新的 Pull Requests。项目代码库处于相对静默的维护/开发阶段，亟待社区或维护者针对上述跨平台基础架构问题提交修复 PR。

## 5. 为什么这个项目在 Agent 编排生态中值得关注
在 AI Agent 逐渐从“云端 API 调用”向“本地设备执行（如集成 Codex CLI）”演进的当下，**Jean** 正在解决一个关键痛点：**跨平台桌面端的 Agent 容器化与生命周期管理**。

尽管今天的 Issue 暴露了其跨平台处理的瑕疵，但这恰好证明了该项目的核心价值所在——它致力于将复杂的本地大模型推理工具（如 CLI）封装为易用的桌面端交互体验。随着多模态和本地运行 Agent（如 AutoGPT、OpenAI Codex）的爆发，能够提供稳定本地运行环境、统一会话调度与进程管理的编排工具，将成为连接底层模型与终端用户的关键基础设施。持续关注 Jean，可以有效洞察 **“本地优先”** Agent 编排技术的发展瓶颈与演进路线。

</details>

<details>
<summary><strong>OpenKanban</strong> — <a href="https://github.com/TechDufus/openkanban">TechDufus/openkanban</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Claude Flow</strong> — <a href="https://github.com/ruvnet/claude-flow">ruvnet/claude-flow</a></summary>

# Agent 编排日报：Claude Flow (Ruflo) — 2026-05-13

## 1. 今日速览

过去 24 小时，Claude Flow 生态处于**高频修补与架构演进并行**状态：
- Issues 活跃 **16** 条（OPEN 9 / CLOSED 7），PR 活跃 **16** 条（OPEN 3 / CLOSED 13）。
- 无正式版本发布，但通过多个 CLOSED PR 依次交付了 **3.7.0-alpha.26 → .27**，核心修复覆盖 Windows 兼容、插件安装阻塞、Daemon 作用域与 Hook 启动失败。
- 社区报告集中在 **Memory/RAG 向量检索链路断裂**（Bridge 导入缺索引、维度不匹配）和 **Windows 路径编码** 问题。

---

## 2. 版本发布

| 版本 | 状态 | 说明 |
|---|---|---|
| 3.7.0-alpha.26 | 已发布（PR [#1924](https://github.com/ruvnet/claude-flow/pull/1924)） | 修复 `agent_logs` 未注册、hive worker 解析、20 个 CLI↔MCP 工具悬空 |
| 3.7.0-alpha.27 | 已发布（PR [#1934](https://github.com/ruvnet/claude-flow/pull/1934)） | 正式交付 `managed_agent_*` MCP 工具（ADR-115），支持 Anthropic 托管云容器运行时 |

---

## 3. 重点 Issues

### 3.1 高优先级 / 安全

| # | 标题 | 状态 | 要点 |
|---|---|---|---|
| [#1880](https://github.com/ruvnet/claude-flow/issues/1880) | `@noble/ed25519` 缺失 + 87 个 dist 文件丢失 | OPEN | 定时验证发现 **全部 3 个 OS manifest** 的见证签名校验失效；根因：`@noble/ed25519` 未安装且 dist 构建不完整。Severity: HIGH |
| [#1922](https://github.com/ruvnet/claude-flow/pull/1922) | 插件注册签名验证为空操作 (CWE-347) | OPEN PR | 安全研究员 [@aaronjmars](https://github.com/aaronjmars) 公开披露：PVR 不可用、邮件通道受阻后直接提交。签名校验函数未实际验证。 |

### 3.2 核心功能缺陷

| # | 标题 | 状态 | 要点 |
|---|---|---|---|
| [#1921](https://github.com/ruvnet/claude-flow/issues/1921) | hooks 调用 `npx claude-flow@alpha` 失败 | OPEN（用户侧已修复） | 每次 PreToolUse/PostToolUse/Stop 触发 `npx` 重解析 dist-tag → `Invalid Version`。通过 PR [#1923](https://github.com/ruvnet/claude-flow/pull/1923) 替换为弹性 shim。 |
| [#1916](https://github.com/ruvnet/claude-flow/issues/1916) | Hive 任务不执行 workers / `agent_logs` 缺失 | CLOSED | PR [#1924](https://github.com/ruvnet/claude-flow/pull/1924) 注册了缺失的 `agent_logs` handler 并修复 worker 解析。 |
| [#1914](https://github.com/ruvnet/claude-flow/issues/1914) | `killStaleDaemons` 全局匹配，破坏多工作区 | CLOSED | PR [#1917](https://github.com/ruvnet/claude-flow/pull/1917) 将 reap 限制在当前 workspace（符合 ADR-014）。 |

### 3.3 Memory / RAG 链路（集中爆发）

| # | 标题 | 状态 |
|---|---|---|
| [#1942](https://github.com/ruvnet/claude-flow/issues/1942) | Bridge 搜索索引 768-dim vs 导入嵌入 384-dim | OPEN |
| [#1941](https://github.com/ruvnet/claude-flow/issues/1941) | `claude-memories` 导入缺少 HNSW 索引，`memory_search` 恒空 | OPEN |
| [#1940](https://github.com/ruvnet/claude-flow/issues/1940) | `memory_bridge_status` 报 0 但 DB 有 237 行 | OPEN |
| [#1939](https://github.com/ruvnet/claude-flow/issues/1939) | Win32 项目 slug 逻辑未处理反斜杠和盘符 | OPEN |

> **分析**：四条 Issue 均由 [@tobikowa90-hub](https://github.com/tobikowa90-hub) 在同日提交，指向 Bridge 导入 → 索引 → 搜索的完整链路存在配置漂移与平台兼容缺陷。这是当前 **对用户体验影响最大且尚未修复** 的模块。

### 3.4 插件打包 / 安装（集群修复已完成）

| # | 标题 | 状态 |
|---|---|---|
| [#1902](https://github.com/ruvnet/claude-flow/issues/1902) | `plugin-agentic-qe` peer-dep `>=3.0.0` 阻塞安装 | CLOSED |
| [#1903](https://github.com/ruvnet/claude-flow/issues/1903) | `@claude-flow/ruvector-upstream` 未发布（npm 404） | CLOSED |
| [#1904](https://github.com/ruvnet/claude-flow/issues/1904) | `plugin-gastown-bridge` tarball 缺 `.mjs` | CLOSED |

均在 PR [#1925](https://github.com/ruvnet/claude-flow/pull/1925) 中一次性修复并增加 CI guard。

### 3.5 功能演进 / RFC

| # | 标题 | 状态 |
|---|---|---|
| [#1931](https://github.com/ruvnet/claude-flow/issues/1931) | `ruflo-wasm` → `ruflo-agent` + Claude Managed Agents 云运行时 (ADR-115) | OPEN |
| [#1937](https://github.com/ruvnet/claude-flow/issues/1937) | `memory_import_claude` 需支持单文件排除粒度 | OPEN |
| [#1926](https://github.com/ruvnet/claude-flow/issues/1926) | 定时 CI 检查因缺 `gh` CLI 无法执行 | OPEN |

---

## 4. 关键 PR 进展

### 已合并（13 条，择要列出）

| PR | 要点 |
|---|---|
| [#1929](https://github.com/ruvnet/claude-flow/pull/1929) | **架构里程碑**：`ruflo-wasm` → `ruflo-agent`，新增 Managed Agent 云运行时，ADR-115 状态 proposed→accepted 并实现。|
| [#1934](https://github.com/ruvnet/claude-flow/pull/1934) | 发布 alpha.27，将 `managed_agent_*` 推送到 npm。|
| [#1935](https://github.com/ruvnet/claude-flow/pull/1935) | ADR-117：将 `neural-trader` 重计算任务（回测、MC、LSTM 训练）卸载到托管云容器。|
| [#1924](https://github.com/ruvnet/claude-flow/pull/1924) | 注册 `agent_logs`、修复 hive worker 解析、补齐 20 个悬空 CLI↔MCP 工具映射。|
| [#1923](https://github.com/ruvnet/claude-flow/pull/1923) | Hook 系统改用弹性 shim，避免每次 `npx @alpha` 重解析。|
| [#1925](https://github.com/ruvnet/claude-flow/pull/1925) | 插件打包集群修复（#1902/#1903/#1904）+ CI 守卫。|
| [#1917](https://github.com/ruvnet/claude-flow/pull/1917) | Daemon 作用域隔离，符合 ADR-014。|
| [#1928](https://github.com/ruvnet/claude-flow/pull/1928) | `encodeProjectPath` 支持 Windows 反斜杠和驱动器冒号。|
| [#1920](https://github.com/ruvnet/claude-flow/pull/1920) | ADR-114（proposed）：采纳 DSPy.ts 作为 Ruflo 插件。|

### 仍 OPEN（3 条）

| PR | 要点 |
|---|---|
| [#1936](https://github.com/ruvnet/claude-flow/pull/1936) | **Aperture v0.1**：多态市场工作区，pane-as-agent swarm 架构（Rust TUI + WASM Shell + SvelteKit）。|
| [#1938](https://github.com/ruvnet/claude-flow/pull/1938) | 规范化 `SKILL.md` 文件名与目录 slug 对齐。|
| [#1922](https://github.com/ruvnet/claude-flow/pull/1922) | 安全修复：插件注册签名验证实现（CWE-347）。|

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注

1. **从单运行时到多运行时编排**：`ruflo-wasm` → `ruflo-agent` 的重命名不仅是品牌更新，而是将本地 WASM 沙箱与 Anthropic Managed Agent 云容器统一到同一心智模型和工具集下（ADR-115）。这使得 Agent 调度可以在本地低延迟沙箱和云端重计算之间透明切换——这正是当前 Agent 编排领域稀缺的能力。

2. **Hive ↔ Agent 工具链的完整对接**：`agent_logs` 缺失和 20 个 CLI↔MCP 工具悬空说明项目正在经历从"功能原型"到"工具链闭环"的工程化阵痛。PR [#1924](https://github.com/ruvnet/claude-flow/pull/1924) 的修复标志着 Hive 任务分配 → Worker 执行 → 日志回传链路首次贯通。

3. **RAG/Memory 基础设施正在接受真实用户检验**：tobikowa90-hub 在一天内暴露了 Bridge 导入 → HNSW 索引 → 向量维度匹配 → 状态报告四层缺陷，说明 Memory 子系统正从"能跑 demo"走向"生产可用"。这个方向的成熟度将直接决定 Agent 是否具备持久、可检索的跨会话记忆。

4. **安全治理进入社区压力测试阶段**：PR [#1922](https://github.com/ruvnet/claude-flow/pull/1922) 的公开披露路径（PVR 禁用 + 邮件受阻）暴露了项目安全响应流程的缺口，同时也说明社区开始以安全审计视角审视插件注册机制。这对一个正在扩展插件市场的编排框架是关键转折。

5. **插件生态的打包纪律正在建立**：#1902/#1903/#1904 三条"npm install 完全不可用"的 Issue 及其集群修复 + CI guard，表明项目正在为 32+ 插件的发布流程建立自动化质量门禁。

> **一句话总结**：Claude Flow 今日的核心信号是 **"多运行时 Agent 编排架构落地，Memory 安全稳定性的工程补课加速"**。

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

# OpenFang Agent 编排生态日报 (2026-05-13)

## 1. 今日速览
过去 24 小时，OpenFang 社区保持高度活跃，核心关注点集中在**多渠道接入、企业级权限/多租户支持，以及底层安全加固**。
* **Issues 更新**：90 条（其中 30 条为高热度讨论）
* **PR 更新**：42 条（其中 20 条为核心架构与功能修复）
* **新版本发布**：5 个（从 v0.6.5 迭代至 v0.6.9）

---

## 2. 版本发布
近期连续发布了 5 个版本，核心演进方向为**Agent 唤醒机制、工作空间隔离、底层驱动兼容及安全加固**。

* **v0.6.9 — 安全补丁**：修复了 `rustls-webpki` 引起的 CI 中断，解决了 CRL 解析中的可达性 panic (RUSTSEC-2026-0104) 及 URI/通配符名称约束的校验错误。
  * [Release v0.6.9](https://github.com/RightNow-AI/openfang/releases/tag/v0.6.9)
* **v0.6.8 — 状态隔离与工具链重构**：重构了 `workspace state_dir` 将私有状态隔离至 `~/.openfang/`；引入了专用的 `skill_list` / `skill_describe` / `skill_execute` Agent 工具替代文件系统回退机制；对齐了 Dashboard WS 与 HTTP 的中间件鉴权。
  * [Release v0.6.8](https://github.com/RightNow-AI/openfang/releases/tag/v0.6.8)
* **v0.6.7 — 重连与环境支持**：修复了 7 个社区问题。Dashboard 支持页面刷新后的 WS 断线重连（基于 localStorage 持久化 Agent ID）。
  * [Release v0.6.7](https://github.com/RightNow-AI/openfang/releases/tag/v0.6.7)
* **v0.6.6 — 多模态与 vLLM 兼容**：解决 11 个社区问题，Discord 频道支持图片发送，全面兼容 vLLM 0.19+ 的 `reasoning` 字段。
  * [Release v0.6.6](https://github.com/RightNow-AI/openfang/releases/tag/v0.6.6)
* **v0.6.5 — Agent 唤醒与克隆**：引入 `agent_activate` 工具及 API，允许 Orchestrator 唤醒挂起或崩溃的 Peer agents。
  * [Release v0.6.5](https://github.com/RightNow-AI/openfang/releases/tag/v0.6.5)

---

## 3. 重点 Issues
当前社区的高频需求聚焦于**企业级多租户架构、安全审批流和外部系统集成**。

* **多租户与多路由架构**：多位开发者在探讨 SaaS 场景下的多租户支持，要求实现租户级 API Key 隔离与自定义模型路由；同时需要多 Bot 映射机制（如不同的 Telegram/Slack Bots 绑定至特定的 Agent）。
  * [Issue #712: Multi-Tenant Support with Per-Tenant API Keys](https://github.com/RightNow-AI/openfang/issues/712)
  * [Issue #586: Multi-bot routing multi-agent](https://github.com/RightNow-AI/openfang/issues/586)
* **安全与权限设计（审批门控与 OAuth）**：社区呼吁将 Agent 的审批请求整合至聊天窗口以替代独立的审批面板；此外，OAuth Token 的生命周期管理及订阅认证机制也是当前热点。
  * [Issue #1139: Move agent action approvals into chat](https://github.com/RightNow-AI/openfang/issues/1139)
  * [Issue #679: Support OAuth token migration and lifecycle management](https://github.com/RightNow-AI/openfang/issues/679)
  * [Issue #691: 审核请求通知](https://github.com/RightNow-AI/openfang/issues/691)
* **架构演进（API 迁移与上下文压缩）**：开发者提议将 OpenAI 支持底层迁移至原生的 Responses API，并引入基于摘要的上下文压缩机制以应对长对话 Token 溢出。
  * [Issue #1149: Migrate OpenAI support to Responses API](https://github.com/RightNow-AI/openfang/issues/1149)
  * [Issue #896: Continuous compaction with contextual hand summaries](https://github.com/RightNow-AI/openfang/issues/896)

---

## 4. 关键 PR 进展
近期的 PR 合并与提交显著提升了 OpenFang 的企业级适配能力和多渠道稳定性。

* **企业级目录集成与权限控制**：引入了基于 LDAP/AD 的外部认证提供商架构，支持动态用户配置和基于组的 RBAC 映射。
  * [PR #1191: Add Directory Authentication and Role Mapping](https://github.com/RightNow-AI/openfang/pull/1191)
* **可插拔存储后端**：对 `openfang-memory` 进行了重构，支持主存储和向量存储独立配置，允许混合部署（如 PostgreSQL + Qdrant）。
  * [PR #998: feat(memory): pluggable storage backends](https://github.com/RightNow-AI/openfang/pull/998)
* **渠道适配与健壮性增强**：修复了 Telegram 底层掩盖发送失败错误的 Bug；Discord 频道新增智能自动开帖模式（true/false/smart）及出站文件/图片附件支持。
  * [PR #1100: channels/telegram: propagate send failures](https://github.com/RightNow-AI/openfang/pull/1100)
  * [PR #1054: feat(discord): smart auto-thread mode](https://github.com/RightNow-AI/openfang/pull/1054)
  * [PR #1162: feat(channels/discord) Outbound file/image attachments](https://github.com/RightNow-AI/openfang/pull/1162)
* **工作流与计费修复**：修复了删除工作流后重启守护进程导致死灰复燃的 Bug；将本地未编目模型的计费默认设为 $0，解决了计费系统的误判问题。
  * [PR #1193: Fix: delete workflow file when removing a workflow](https://github.com/RightNow-AI/openfang/pull/1193)
  * [PR #1055: fix(metering): default local-provider pricing to $0](https://github.com/RightNow-AI/openfang/pull/1055)

---

## 5. 为什么在 Agent 编排生态中值得关注
1. **Multi-Tenancy（多租户）与 RBAC 的原生落地**：有别于传统的单用户 Agent 包装层，OpenFang 正在底层深度集成 LDAP/AD、OAuth 和细粒度的 API Key 路由，为构建 SaaS 级 AI 自动化平台提供了坚实基础。
2. **从底层加固的 Agent 通信协议**：从 v0.6.5 的 `agent_activate` 到最新 PR 中的 WS 断线重连、消息唯一 ID 分配 (`Issue #869`)，OpenFang 正在解决多 Agent 协同编排中最棘手的“状态丢失”和“孤儿任务”问题。
3. **多渠道网关能力的成熟**：对 Telegram、Discord、企业微信及 vLLM 本地推理大模型的深度适配与 Bug 修复，表明其正在从一个单纯的 Agent 构建框架，迅速演进为支持多模态、多平台即时响应的企业级编排枢纽。

</details>

<details>
<summary><strong>Aperant</strong> — <a href="https://github.com/AndyMik90/Aperant">AndyMik90/Aperant</a></summary>

# Aperant Agent 编排生态日报 - 2026年05月13日

**数据监测窗口**：过去 24 小时 | **项目地址**：[AndyMik90/Aperant](https://github.com/AndyMik90/Aperant)

---

## 1. 今日速览

过去 24 小时内，Aperant 仓库整体活跃度呈现“低频但高纵深”的特征：无新 Issue 提交，无新版本发布，但有 2 个关键 PR 产生更新动作。其中 #1761 在搁置数月后被重新激活并关闭，#2020 则是围绕 Phase 0 调查结论的系统性文档与清理工作。整体趋势表明项目正处于从架构调研向实施阶段的转换期。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 重点 Issues

**过去 24 小时无新增或更新 Issue。**

---

## 4. 关键 PR 进展

### PR #2020 `[OPEN]` — chore: Phase 0 INV resolutions + MS-001/002/004 quick-wins
- **作者**：qvidal01 | **创建/更新**：2026-05-12
- **链接**：[AndyMik90/Aperant #2020](https://github.com/AndyMik90/Aperant/pull/2020)
- **核心内容**：
  - 基于 `cba7a027` 提交触发的一次 `audit → ideate → roadmap` 自动化流水线执行结果。
  - **Phase-0 调查结论落档**：将 INV-004 至 INV-007 四项调查决策（Investigation Resolutions）记录至 `CLAUDE.md`、`RELEASE.md` 等核心文档中。
  - **Phase-1 快速清理批次**：解除了此前被阻塞的 MS-001 / MS-002 / MS-004 三项里程碑快速优化任务，进入可执行状态。
- **分析师注**：这是一次典型的"AI Agent 辅助代码治理"工作流，从审计到路线图生成全程由 Agent 编排管线驱动，属于项目基础设施能力建设。

---

### PR #1761 `[CLOSED]` — feat: update Opus model to Claude Opus 4.6
- **作者**：oldmoneygit | **创建**：2026-02-06 | **更新**：2026-05-12
- **链接**：[AndyMik90/Aperant #1761](https://github.com/AndyMik90/Aperant/pull/1761)
- **核心内容**：
  - 将项目中的 Opus 模型标识符从 `claude-opus-4-5-20251101` 升级至 `claude-opus-4-6`。
  - 变更范围覆盖前后端双端：后端 `apps/backend/phase_config.py` 中的 `MODEL_ID_MAP["opus"]` 映射更新，以及前端对应的引用同步。
- **分析师注**：该 PR 从 2 月创建后长期未合并，直至昨日关闭。可能经历了长期评审后被合入，或因上游重构导致其变更已被其他 PR 覆盖而关闭。无论哪种情况，这说明 Aperant 正在活跃跟进 Anthropic 模型迭代。

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注

1. **Agent 自驱式代码治理**：PR #2020 展示了 Aperant 的核心差异化能力——从代码审计（audit）、方案构思（ideate）到路线图生成（roadmap）的完整管线可由 AI Agent 自动编排执行，而非仅停留在单点代码补全。INV 系列调查结论的自动落档行为，表明 Agent 具备跨会话的上下文持续与决策记录能力。

2. **模型层解耦与快速跟进**：PR #1761 中的 `phase_config.py` 和 `MODEL_ID_MAP` 结构表明项目在前端和后端均对底层 LLM 做了抽象映射。这种架构使得 Aperant 可以在 Opus / Sonnet / Haiku 等不同能力层级之间按任务阶段（Phase）动态路由模型调用，是 Agent 编排效率优化的关键技术前提。

3. **Phase 分期演进架构**：PR #2020 中的 Phase-0 / Phase-1 / MS 系列里程碑编号，说明项目采用严格的阶段化推进策略。Phase-0 完成技术调查与决策冻结后，再解锁 Phase-1 的实施批次——这种纪律性在 Agent 编排项目中是可维护性和可控性的重要保障。

</details>

<details>
<summary><strong>Gastown</strong> — <a href="https://github.com/gastownhall/gastown">gastownhall/gastown</a></summary>

# Gastown Agent 编排生态日报 — 2026-05-13

## 1. 今日速览
过去 24 小时内，Gastown 项目（[gastownhall/gastown](https://github.com/gastownhall/gastown)）未发布新版本，但提交了 26 个 Pull Requests，更新了 15 个 Issues。活动高度集中在运行时稳定性、Dolt 数据库争用、Claude Code 配置漂移以及僵尸进程治理上。多位维护者（esciara、Bella-Giraffety、ckumar1 等）同时推进了数十个 Bugfix，显示项目正处于密集的底层加固期。

---

## 2. 版本发布
今日无新版本发布（Latest releases: 0）。

---

## 3. 重点 Issues（15 条）

### 🔴 P0 关键缺陷
- **[#3000](https://github.com/gastownhall/gastown/issues/3000)** — 全新安装后 Mayor 与 polecats 每次执行命令都会提示权限确认，`--dangerously-skip-permissions` 未默认设置，阻塞多 Agent 工作流。
- **[#2772](https://github.com/gastownhall/gastown/issues/2772)**（已关闭） — `gt dolt start` 会误收 3307 端口上的 rig 级 Dolt 进程作为 town server，未验证数据目录。
- **[#2405](https://github.com/gastownhall/gastown/issues/2405)**（已关闭） — `gt rig add` 中 `bd init --server` 启动了独立 Dolt 实例而非连接中心服务器。
- **[#3198](https://github.com/gastownhall/gastown/issues/3198)**（已关闭） — Refinery 合并 polecat bead 时错误关闭上游 GitHub PR 并删除远程分支。
- **[#3195](https://github.com/gastownhall/gastown/issues/3195)**（已关闭） — 并发 `gt dolt start` 绕过启动锁，引发惊群效应。

### 🟠 P1 / P2 稳定性与状态管理
- **[#3867](https://github.com/gastownhall/gastown/issues/3867)**（已关闭） — `gt done --status DEFERRED` 超时后 workflow step bead 卡在 HOOKED。
- **[#3865](https://github.com/gastownhall/gastown/issues/3865)**（已关闭） — `gt rig config set` 写入临时 wisp 层，rig 重置或 Dolt 重启后配置丢失。
- **[#3868](https://github.com/gastownhall/gastown/issues/3868)**（已关闭） — `gt mq post-merge` 远程分支删除失败但静默退出，残留 polecat 分支。
- **[#3852](https://github.com/gastownhall/gastown/issues/3852)**（已关闭） — 两个不受 `gt hooks sync` 管理的 `settings.json` 导致 `gt doctor` 误报及配置回退风险。

### 🟡 新增回归 / 待分类
- **[#3949](https://github.com/gastownhall/gastown/issues/3949)** — 集成测试因 Dolt 端口复用和 `bd tombstone` 标志不兼容而持续失败。
- **[#3946](https://github.com/gastownhall/gastown/issues/3946)** — `gt sling` 生成 polecat 时出现 `SetAgentState: issue not found`，疑似 #3676 回归。
- **[#3881](https://github.com/gastownhall/gastown/issues/3881)**（已关闭） — Witness 反复发送带未替换模板占位符（`gt-abc`、`abc123`）的邮件。
- **[#3925](https://github.com/gastownhall/gastown/issues/3925)**（已关闭） — rig / pool 初始化未运行 `gt hooks sync`，`settings.json` 随版本默认值漂移。

### 🔵 增强提案
- **[#1066](https://github.com/gastownhall/gastown/issues/1066)** — 针对 Claude Pro / Max 计划的 usage limit reset 处理机制（7 条评论，持续讨论中）。
- **[#1085](https://github.com/gastownhall/gastown/issues/1085)** — 僵尸 polecat 自动清理，支持可配置阈值与 `gt config` 开关。

---

## 4. 关键 PR 进展（26 条）

### 新功能
- **[#3944](https://github.com/gastownhall/gastown/pull/3944)** — Slack Router 子系统：支持 Agent 通过 Slack DM / channel mention 收发消息，不暴露凭证，单 PR 集成。
- **[#3948](https://github.com/gastownhall/gastown/pull/3948) / [#3947](https://github.com/gastownhall/gastown/pull/3947)**（均关闭） — 僵尸 polecat 自动清理配置，引入 `zombie.*` 配置项与超时重启逻辑。
- **[#3826](https://github.com/gastownhall/gastown/pull/3826)** — Boot 进程空闲抑制：deacon 健康时跳过重复 spawn，减少资源浪费。

### 稳定性修复（Dolt / 数据库）
- **[#3951](https://github.com/gastownhall/gastown/pull/3951)** — 修复 `bd init` 数据库前缀导致的脑裂问题，传入规范 rig 数据库名。
- **[#3945](https://github.com/gastownhall/gastown/pull/3945)** — 禁用 Dolt auto-gc + stuck-agent-dog 空数组防护（从 #3831 精简提取）。
- **[#3892](https://github.com/gastownhall/gastown/pull/3892)** — Dolt server 时区强制 UTC + open-wisp 告警阈值从 500 提升至 800。
- **[#3822](https://github.com/gastownhall/gastown/pull/3822)** — Dolt 诊断改为非致命方式（取代 SIGQUIT），避免诊断操作拖垮数据库。

### Claude Code / 配置管理
- **[#3952](https://github.com/gastownhall/gastown/pull/3952)** — 种子 Claude 自主模式设置（`bypassPermissions`、`skipDangerousModePermissionPrompt`），解决 #3000 权限弹窗问题。
- **[#3929](https://github.com/gastownhall/gastown/pull/3929)** — 在 rig / pool 初始化时自动运行 `gt hooks sync`，防止 `settings.json` 漂移。
- **[#3907](https://github.com/gastownhall/gastown/pull/3907)** — 将 boot watchdog 纳入 hooks 管理目标，检测 rig-root 级别过时设置。

### 进程生命周期与消息队列
- **[#3880](https://github.com/gastownhall/gastown/pull/3880)** — 修复 DEFERRED 退出时 workflow step bead 不关闭的问题。
- **[#3846](https://github.com/gastownhall/gastown/pull/3846)** — 检测启动时卡在 auth 401 的 polecat（无心跳文件），新增"无心跳"僵尸检测路径。
- **[#3898](https://github.com/gastownhall/gastown/pull/3898)** — `gt rig config set` 写入 wisp 层时发出警告，引导用户使用 `--global` 持久化。
- **[#3897](https://github.com/gastownhall/gastown/pull/3897)** — `gt mq post-merge` 传播远程分支删除错误，不再静默吞错。
- **[#3943](https://github.com/gastownhall/gastown/pull/3943)** — 防止 `BD_ACTOR=daemon` 环境变量泄漏到 polecat session 中。
- **[#3950](https://github.com/gastownhall/gastown/pull/3950)** — 修复跨 tmux session 的 stale pane ID 导致 `gt nudge` 失效。

### 测试泄漏修复
- **[#3845](https://github.com/gastownhall/gastown/pull/3845)** — 修复测试套件向生产环境泄漏合成流量的问题（sling guard + nudge 隔离）。

---

## 5. 为什么 Gastown 在 Agent 编排生态中值得关注

Gastown 不是一个通用 Agent 框架，而是一个面向 **自治 Agent 团队** 的运行时编排系统。它的核心抽象——**Rig（任务组）、Polecat（执行 Agent）、Bead（工作单元）、Refinery（合并管道）、Witness / Deacon（监控与看护）**——构成了一套完整的 Agent 生命周期管理闭环。

今日的数据集中暴露了这类多 Agent 系统在真实运行中的典型难题，这也正是 Gastown 正在解决的核心问题：

1. **有状态协作的容错**：Dolt（版本化数据库）作为共享状态层，引入了进程争用、端口冲突、GC 锁表等基础设施级问题（#2772、#3195、#3945）。Gastown 正在通过分布式锁、连接池管理和 auto-gc 禁用来加固这一层。
2. **Agent 生命周期的可靠性**：从权限配置漂移（#3000、#3952）、僵尸进程清理（#1085、#3948），到启动失败检测（#3846）和超时退出（#3867），项目在逐一堵塞 Agent "挂死但不退出" 的各种路径。
3. **人机边界的自动化**：Claude Code 权限提示、Slack 集成（#3944）、邮件模板渲染（#3881）等修复，反映了对 Agent 操作边界与人机交互通道的系统性治理。
4. **测试隔离与生产安全**：#3845 表明项目在防止测试环境向生产环境泄漏真实工作负载方面已经建立了意识与防护。

Gastown 当前的活动密度（日均 20+ PR）和问题追踪粒度表明，这是一个在 **生产环境中演化** 的编排系统，而非概念验证。对于关注 AI Agent 团队协作、自治调度和运行时可靠性的开发者，它提供了一个值得追踪的工程实践样本。

</details>

<details>
<summary><strong>HumanLayer</strong> — <a href="https://github.com/humanlayer/humanlayer">humanlayer/humanlayer</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Ralph Claude Code</strong> — <a href="https://github.com/frankbria/ralph-claude-code">frankbria/ralph-claude-code</a></summary>

# Agent 编排生态日报：Ralph Claude Code 项目跟踪
**日期**: 2026-05-13 | **分析目标**: [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code)

---

### 1. 今日速览
过去 24 小时内，项目整体活跃度较低，无新增 Issues 或版本发布。唯一的动态集中在核心控制逻辑的 PR 上，开发者正在针对 Agent 循环中的“权限拒绝”处理策略进行容错性优化。

- **Issues 更新**: 0 条
- **PR 更新**: 1 条
- **新版本发布**: 0 个

### 2. 版本发布
**无**。近 24 小时内未发布新的 Release 版本。

### 3. 重点 Issues
**无新增**。今日无新开或更新的 Issue。

### 4. 关键 PR 进展
- **[#264 fix(loop): trust agent RALPH_STATUS before halting on permission denials](https://github.com/frankbria/ralph-claude-code/pull/264)**
  - **状态**: `[OPEN]`
  - **作者**: DivisionSt
  - **分析**: 这是一个针对 Agent 循环控制的容错性修复。此前 #142 引入的“一旦权限拒绝即中断”规则过于激进（过拟合）。在实际执行中，这会导致 Agent 在从拒绝状态中成功恢复后，依然被强行终止。例如，当发生单一的外围工具调用被拒（如 MCP 文档查找或 `Bash(awk ...)` 文本提取）时，当前逻辑会错误地终止整个循环。
  - **核心改动**: 该 PR 建议信任 Agent 自身的 `RALPH_STATUS` 状态机。在触发 halt（中止）逻辑前，先校验 Agent 当前的真实状态，从而提升编排过程的鲁棒性，避免不必要的任务流产。

### 5. 为什么这个项目在 Agent 编排生态中值得关注
Ralph Claude Code 的核心在于**自动化工作流的循环控制与状态管理**。

通过 PR #264 可以透视出该项目在编排设计上的演进：从早期的“遇到错误即熔断”（简单粗暴但安全），正在向**“精细化的状态信任与恢复机制”**过渡。在复杂的 AI Agent 生态中，调用第三方工具（如 MCP）或系统命令时经常面临权限分级和动态拒绝的问题。如何让 Agent 在遭遇非致命的工具拒绝时继续完成任务，而不是直接崩溃退出，是衡量一个 Agent 编排框架成熟度的关键指标。该项目正在建立一套有效的循环阻断与恢复机制，对构建长时序、高鲁棒性的自动化 Agent 具有参考价值。

</details>

<details>
<summary><strong>Superset</strong> — <a href="https://github.com/superset-sh/superset">superset-sh/superset</a></summary>

# Superset Agent 编排生态日报 (2026-05-13)

## 1. 今日速览
过去 24 小时内，`superset-sh/superset` 保持了高频迭代：新增或更新 **16 条 Issues** 和 **41 条 PRs**，并发布了 **4 个新版本**。开发重心集中在 v2 桌面端的终端与多工作区稳定性修复、Agent 技能系统扩展，以及 CLI 用户体验提升。

---

## 2. 版本发布
- **[desktop-v1.9.1](https://github.com/superset-sh/superset/releases/tag/desktop-v1.9.1)**
  - 修复 v2 更改侧边栏滚动问题，并新增 `agent-skills` 发现端点以增强 Agent 编排时的技能调用能力。
- **[cli-v0.2.15](https://github.com/superset-sh/superset/releases/tag/cli-v0.2.15)**
  - CLI 常规版本迭代，底层改进与发布说明指向 [Full Changelog](https://github.com/superset-sh/superset/compare/desktop-canary...cli-v0.2.15)。
- **[desktop-canary](https://github.com/superset-sh/superset/releases/tag/desktop-canary)** & **[cli-latest](https://github.com/superset-sh/superset/releases/tag/cli-latest)**
  - 持续交付的 Canary 测试版与 CLI 最新指针版本，保障主分支自动化测试流。

---

## 3. 重点 Issues
- **多代码库/多工作区编排体验受损**
  - [#4434](https://github.com/superset-sh/superset/issues/4434) & [#4466](https://github.com/superset-sh/superset/issues/4466)：主分支终端 Tab 在不同 Workspace 之间发生状态串扰（Tab Pollution），导致在 Agent 会话中出现跨工作区的上下文混乱。
  - [#2364](https://github.com/superset-sh/superset/issues/2364) `[👍 18]`：社区强烈需求在单一项目中支持多代码库，以适应真实的 Agent 多仓库协同编排场景（如前后端 + LLM 微服务分离）。
- **终端底层能力缺陷**
  - [#4041](https://github.com/superset-sh/superset/issues/4041) & [#3325](https://github.com/superset-sh/superset/issues/3325)：内建终端在处理复杂 CLI 工具（如 delta pager 或 gh cli）时，存在 OSC 转义序列泄漏，影响自动化 Agent 执行 git 等命令时的输出解析。
- **Agent 通知与状态可见性不足**
  - [#3652](https://github.com/superset-sh/superset/issues/3652)：使用 opencode 作为 Agent 时无系统级权限请求通知，中断了 Agent 编排工作流。
  - [#4452](https://github.com/superset-sh/superset/issues/4452)：多 Agent 实例并行时，缺乏针对单个 Workspace 状态的细粒度显示。
- **性能与内存瓶颈**
  - [#4422](https://github.com/superset-sh/superset/issues/4422)：v2 worktree 创建和同步存在 30-40 秒延迟。
  - [#3409](https://github.com/superset-sh/superset/issues/3409)：空闲状态下基础内存占用达 ~2GB，极易在重度 Agent 任务下触发热节流。

---

## 4. 关键 PR 进展
针对上述问题，团队及社区提交了多项核心修复与功能增强：

- **Agent 编排能力扩展**
  - [PR #4469](https://github.com/superset-sh/superset/pull/4469)：新增 `ticket-format` Agent 技能，定义了标准的 Ticket 结构，并打通了 `.claude/skills` 与 `.agents/skills` 的符号链接，为多 Agent 协作提供统一的上下文规范。
- **终端与多工作区 Bug 修复**
  - [PR #4467](https://github.com/superset-sh/superset/pull/4467)：修复全局 `panes` 状态未按 workspace 隔离导致的 Tab Pollution（对应 Issue #4466）。
  - [PR #4465](https://github.com/superset-sh/superset/pull/4465)：重构 v2 终端的 shell 解析逻辑，优先使用用户配置的 shell 以提升 Agent 进程启动的准确性。
  - [PR #4453](https://github.com/superset-sh/superset/pull/4453)：保留 PTY spawn 失败时的错误信息，避免 Agent 会话无提示创建失败（对应 Issue #4451）。
  - [PR #4459](https://github.com/superset-sh/superset/pull/4459)：引入后台终端会话管理 UI，防止长时间运行的 Agent 进程阻塞 UI 交互。
- **CLI 与系统通知改进**
  - [PR #4455](https://github.com/superset-sh/superset/pull/4455)：为 CLI 增加 `--project` 和 `--search` 过滤器，优化管理大量 Agent 工作区的效率。
  - [PR #4456](https://github.com/superset-sh/superset/pull/4456)：在 v2 原生通知中注入 Workspace 名称，解决多 Agent 并发时任务完成状态难以追踪的问题（对应 Issue #4452）。
- **稳定性与测试**
  - [PR #4460](https://github.com/superset-sh/superset/pull/4460) & [PR #4458](https://github.com/superset-sh/superset/pull/4458)：强化 PTY 守护进程的自动更新与字节级集成测试覆盖，提升 Agent 长时间运行环境的鲁棒性。

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注
Superset 正在构建一个 **以开发者桌面为核心的多 Agent 运行时环境**。与传统 CI/CD 编排不同，它直面的是本地开发场景中极其复杂的工程诉求：

1. **原生 Agent 技能集成**：通过 `agent-skills` 端点和标准化的 Ticket 结构（[PR #4469](https://github.com/superset-sh/superset/pull/4469)），Superset 正试图为 Claude Code、Codex、opencode 等不同底层 Agent 提供统一的技能发现与调用协议。
2. **解决多 Agent 物理隔离难题**：从 Issues 反馈可以看出，多 Agent 并发时的内存泄漏、终端状态串扰是真实痛点。团队正在从 PTY 守护进程、Workspace 沙盒隔离等底层机制入手进行重构。
3. **拥抱多仓库真实工作流**：[Issue #2364](https://github.com/superset-sh/superset/issues/2364) 高达 18 个 👍 表明，社区急需跨 repo 的 Agent 编排支持。Superset 的 worktree/ workspace 架构天然适合演进为“单项目多代码库”的统一控制面板。

总体而言，Superset 不仅是一个 IDE，更像是 AI Agent 时代的本地调度系统。其对终端底层、进程隔离和 CLI 互操作性的深度打磨，使其在当前开源 AI Agent 生态中具备了成为“桌面级编排标准”的潜力。

</details>

<details>
<summary><strong>T3Code</strong> — <a href="https://github.com/pingdotgg/t3code">pingdotgg/t3code</a></summary>

# T3Code Agent 编排生态日报摘要
**日期**: 2026-05-13 | **项目**: [pingdotgg/t3code](https://github.com/pingdotgg/t3code)

---

## 1. 今日速览
T3Code 项目今日活跃度较高，主要围绕 v0.0.23 版本发布后的稳定性修复及多 Provider（Codex、OpenCode、Claude Code）适配问题展开。
- **Issues 更新**: 20 条（主要涉及 Provider 连接、状态同步、系统级兼容性 Bug）
- **PR 更新**: 23 条（聚焦于流式响应性能优化、移动端基础架构及 UI 状态管理重构）
- **新版本发布**: 0 个

---

## 2. 版本发布
过去 24 小时内无新版本发布。社区当前主要在消化和修复近期发布的 `v0.0.23` 版本带来的兼容性问题。

---

## 3. 重点 Issues
当前核心问题集中在**Agent 状态失步**、**底层基础设施集成报错**及**资源消耗异常**。

- **Agent 会话状态同步异常**
  - [Issue #2644](https://github.com/pingdotgg/t3code/issues/2644): OpenCode CLI 已完成响应，但 UI 持续显示 `working...`，存在严重的状态断联。
  - [Issue #2633](https://github.com/pingdotgg/t3code/issues/2633): OpenCode 同步功能失效，Agent 运行中途卡死（Stuck）。
  - [Issue #2573](https://github.com/pingdotgg/t3code/issues/2573): 在运行时注入指令会破坏会话跟踪，导致 Stop 按钮失效。

- **多环境与认证兼容性缺陷**
  - [Issue #2667](https://github.com/pingdotgg/t3code/issues/2667): `npx t3@0.0.23` 因 Effect 依赖版本冲突导致启动崩溃。
  - [Issue #2665](https://github.com/pingdotgg/t3code/issues/2665): SSH 环境配对因时间戳 Schema 解析错误失败。
  - [Issue #2653](https://github.com/pingdotgg/t3code/issues/2653): Claude Max OAuth 用户因缺少 API Key 导致认证状态校验失败。

- **架构演进与高优特性请求**
  - [Issue #231](https://github.com/pingdotgg/t3code/issues/231) (`👍19`): 提出在现有 Chat/Plan 模式外，增加 `Steer`（实时注入）和 `Queue`（排队）两种 Agent 跟进模式，对于复杂 Agent 编排场景至关重要。
  - [Issue #192](https://github.com/pingdotgg/t3code/issues/192) (`👍103`): 呼吁原生支持 WSL，以提升 Codex 等底层 Agent 在 Windows 下的运行效能。

- **性能问题**
  - [Issue #2646](https://github.com/pingdotgg/t3code/issues/2646): macOS 桌面端开启数秒后出现异常的高 CPU 占用。

---

## 4. 关键 PR 进展
核心维护者正在推进会话生命周期管理重构和渲染性能优化，并为移动端打下基础。

- **Agent 编排与状态生命周期修复**
  - [PR #2666](https://github.com/pingdotgg/t3code/pull/2666): **核心修复**。重构 Provider 会话状态机，解决中断、停止失败或服务重启时导致的会话卡死问题。
  - [PR #2631](https://github.com/pingdotgg/t3code/pull/2631): 修复长对话中的流式响应降级问题，将 delta 增量直接追加至现有投影，避免全量刷新。

- **跨端运行时与基础设施**
  - [PR #2013](https://github.com/pingdotgg/t3code/pull/2013): **[WIP]** 引入基于 Expo 的移动端客户端，抽取 `packages/client-runtime` 以共享 WebSocket 和远程连接逻辑。
  - [PR #2657](https://github.com/pingdotgg/t3code/pull/2657): 强化 OpenCode 探针的 teardown 逻辑，防止产生僵尸进程。
  - [PR #2659](https://github.com/pingdotgg/t3code/pull/2659): 将编辑器启动子进程全面迁移至 Effect 的 `ChildProcessSpawner`。

- **UI 交互与工程化健壮性**
  - [PR #2650](https://github.com/pingdotgg/t3code/pull/2650): 在斜杠命令菜单中暴露底层 Provider 的技能。
  - [PR #2648](https://github.com/pingdotgg/t3code/pull/2648): 增加可配置的会话提交快捷键。
  - [PR #2656](https://github.com/pingdotgg/t3code/pull/2656): 在发布前增加 CLI 打包冒烟测试，防止类似 v0.0.23 的启动崩溃事故。

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注
T3Code 正试图解决当前 AI 编排领域的一个核心痛点：**为异构 CLI Agent 提供统一的图形化交互网关与生命周期管理**。

1. **多异构 Agent 的适配层**: 项目在同时兼容 `Codex`、`Claude Code`、`OpenCode` 甚至社区提出的 `Pi` 等不同底层 CLI Agent。通过抽象统一的 UI 状态和 WebSocket 流，T3Code 正在充当一个 "Agent 反向代理" 的角色。
2. **深度编排模式探索**: 不同于简单的 GUI wrapper，社区和核心团队正在实现复杂的 Agent 控制原语（如 [Issue #231](https://github.com/pingdotgg/t3code/issues/231) 中的 Steer/Queue 模式），允许用户在 Agent 运行时动态插队或修改指令，这是迈向多步自动化工作流的关键。
3. **向全平台运行时演进**: 移动端架构的启动 ([PR #2013](https://github.com/pingdotgg/t3code/pull/2013)) 和对 SSH 远程环境/WSL 的支持，表明该项目致力于让开发者能够从任何设备安全地编排和监控无头环境中的 Agent 运行。

</details>

<details>
<summary><strong>Agent Orchestrator</strong> — <a href="https://github.com/ComposioHQ/agent-orchestrator">ComposioHQ/agent-orchestrator</a></summary>

# Agent 编排日报摘要：ComposioHQ/agent-orchestrator
**日期**: 2026-05-13 | **分析数据源**: [ComposioHQ/agent-orchestrator](https://github.com/ComposioHQ/agent-orchestrator)

---

## 1. 今日速览
过去 24 小时内，Agent Orchestrator (AO) 生态呈现高度活跃状态，重点关注**核心运行时稳定性、跨平台兼容性以及持续集成 (CI) 架构的重构**。
- **Issues 更新**: 33 条（主要集中在 Bug 修复、Dashboard UI 及多 Repo 生命周期追踪）
- **PR 更新**: 25 条（主要涉及全新 Agent 插件接入、活动事件流全链路打通、依赖升级）
- **新版本发布**: 0 个

---

## 2. 版本发布
无新版本发布。（注：CI 侧刚刚合并了双仓库发布模型重构 PR #1815，预计近期将触发新版本的自动发布流程。）

---

## 3. 重点 Issues
项目当前正处于修复底层通信协议和完善周边辅助工具的阶段。

- **核心状态同步 Bug**：
  - [#1803](https://github.com/ComposioHQ/agent-orchestrator/issues/1803) `[Critical]` PR 在 GitHub 合并后，AO Dashboard 仍无限期卡在 `PR open / working` 状态，无法正确转移为 `merged`。
- **跨平台与配置加载缺陷**：
  - [#1767](https://github.com/ComposioHQ/agent-orchestrator/issues/1767) `[Critical]` 运行时修改 `agent-orchestrator.yaml` 无法被热加载，生命周期管理器当前仅在启动时缓存配置。
  - [#1766](https://github.com/ComposioHQ/agent-orchestrator/issues/1766) `[High, Closed]` Windows 首次运行 `ao start` 无法生成全局 `config.yaml`（已通过 PR #1819 修复）。
- **底层架构优化与探索**：
  - [#853](https://github.com/ComposioHQ/agent-orchestrator/issues/853) `[P0]` 计划使用基于文件的通信协议替换当前基于 `tmux send-keys` 的消息传递（当前可靠性仅 70%-80%，存在消息覆盖等异常）。
  - [#766](https://github.com/ComposioHQ/agent-orchestrator/issues/766) `[Enhancement]` 提议添加 GitHub Copilot CLI 作为 Agent 提供方插件。
- **多仓库/子模块支持**：
  - [#1477](https://github.com/ComposioHQ/agent-orchestrator/issues/1477) `[Critical]` 生命周期管理器当前无法追踪 Git 子模块或不匹配 `agent-orchestrator.yaml` 配置的其他Repo 的 PR。
- **工作流自动化**：
  - [#1806](https://github.com/ComposioHQ/agent-orchestrator/issues/1806) 计划构建 Hermes 技能，将 Discord 中的 NotesBot 语音通话记录自动同步并解析为 GitHub Issue 的跟进评论。

---

## 4. 关键 PR 进展
涵盖核心功能迭代、UI 增强及工程化发布流的重构。

- **发布与工程化 CI**：
  - [#1815](https://github.com/ComposioHQ/agent-orchestrator/pull/1815) `[Closed/Merged]` **重大架构变更**：拆分为双仓库发布模型。公开仓库仅执行 GitHub Release，将 `npm publish` 剥离至私有仓库，彻底规避 NPM 凭据泄漏风险。
- **Agent 生态扩充**：
  - [#1774](https://github.com/ComposioHQ/agent-orchestrator/pull/1774) 新增 Forge 风格的 **AMP Agent 插件**，支持提示词投递、活动分类及线程恢复。
  - [#286](https://github.com/ComposioHQ/agent-orchestrator/pull/286) & [#172](https://github.com/ComposioHQ/agent-orchestrator/pull/172) `[Closed/Merged]` 正式合并 **Cline CLI Agent 插件**支持，增强自主执行 (`--yolo`) 模式的集成。
- **可观测性与事件流**：
  - [#1698](https://github.com/ComposioHQ/agent-orchestrator/pull/1698) 将约 30 个 CLI 行为（如 `ao start`, `ao stop` 等）接入 Activity Events 体系。
  - [#1697](https://github.com/ComposioHQ/agent-orchestrator/pull/1697) 补全了 `session-manager` 的活动事件埋点，为后续 RCA（根因分析）提供日志支持。
- **Dashboard UI 增强**：
  - [#1644](https://github.com/ComposioHQ/agent-orchestrator/pull/1644) 支持在 `yaml` 中自定义配置 Dashboard 的看板泳道。
  - [#1653](https://github.com/ComposioHQ/agent-orchestrator/pull/1653) 引入类 Cursor 风格的交互式 **Canvas**，用于在终端侧边栏渲染 Agent 输出的 Diff、表格及结构化数据。

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注

1. **突破单一Agent局限，攻坚工程化协同痛点**：Agent Orchestrator 没有停留在简单的“接入各家大模型”，而是聚焦于**真实软件工程中的多Agent协同痛点**——如解决一个会话开启多个 PR 时的生命周期路由丢失问题（[#1193](https://github.com/ComposioHQ/agent-orchestrator/issues/1193)），以及跨多个代码仓库的 PR 追踪（[#1477](https://github.com/ComposioHQ/agent-orchestrator/issues/1477)）。
2. **底层运行时的反思与重构**：项目正在积极处理 Agent 运行时的“顽疾”。底层从强依赖 `tmux` 转向更加可靠的基于文件的通信协议（[#853](https://github.com/ComposioHQ/agent-orchestrator/issues/853)），并致力于原生支持 Windows 生态，展现了作为基础设施应有的跨平台严谨性。
3. **重塑开发者体验（DX）**：通过新引入的交互式 Canvas（[#1653](https://github.com/ComposioHQ/agent-orchestrator/pull/1653)）、高度可配置的看板视图，以及将 Discord 研发讨论自动归集至 GitHub 的设计，AO 正在建立一套以人为中心、且高度透明的**人机协同工作流**。

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

# Emdash Agent 编排日报摘要 | 2026-05-13

## 1. 今日速览
过去 24 小时内，Emdash 仓库呈现高度活跃的开发状态。社区共提交了 **70 个 PR**（主要集中在 UI 优化、CLI Agent 兼容性与工程化重构），并更新了 **6 个 Issues**（核心围绕 SSH 远程工程体验与 API 扩展）。当前无新版本发布，但从 PR #1988 的合并记录来看，底层正在为 `v1.1.16` 版本的发布进行收尾工作。

## 2. 版本发布
- **最新 Releases**: 无新增 Release。
- **注意**: PR [#1988 chore: create release 1.1.16](https://github.com/generalaction/emdash/pull/1988) 已于今日合并，预计 `v1.1.16` 版本即将正式发布。

## 3. 重点 Issues
今日的 Issues 集中暴露了 Agent 在处理远程环境以及与外部系统集成时的痛点。

- **本地 HTTP API 支持编程式任务下发** | [#1995 OPEN](https://github.com/generalaction/emdash/issues/1995)
  **分析**：呼吁暴露 localhost HTTP Server 以便外部脚本创建任务。这反映了 Agent 编排工具从“单一 GUI 辅助”向“可被其他系统自动化调用”的演进需求，是实现 Multi-Agent 复杂工作流的关键基础设施。
- **SSH 远程开发服务器端口转发错误** | [#1979 OPEN](https://github.com/generalaction/emdash/issues/1979)
  **分析**：使用 SSH 远程项目时，Dev Server 的预览 URL 错误地指向了本地 `127.0.0.1`。远程环境的网络处理是当前 AI 编程工具普遍面临的技术挑战。
- **Tmux 鼠标模式导致 PTY 面板崩溃** | [#1994 OPEN](https://github.com/generalaction/emdash/issues/1994)
  **分析**：在 SSH 连接中使用 tmux 鼠标模式时，高频双向 IPC 通信导致内置终端无响应。这凸显了在 Electron 环境中实现高吞吐量终端 I/O 的性能瓶颈。
- **社区插件市场支持** | [#1729 OPEN](https://github.com/generalaction/emdash/issues/1729)
  **分析**：寻求构建类似 Cursor 的插件生态。对于 Agent 编排工具而言，丰富的 Tool/Workflow 市场是构建护城河和扩展性的核心。

## 4. 关键 PR 进展
今日的 70 个 PR 中，活跃贡献者 `janburzinski` 和 `Davidknp` 提交了大量改进，涵盖工程化基建、Git 工作流和终端体验优化。

**核心功能增强：**
- **Fork 工作流拆分** | [#1978 OPEN](https://github.com/generalaction/emdash/pull/1978)
  新增 `baseRemote` 和 `pushRemote` 配置，允许从不同 Remote 拉取代码和推送 PR。完美契合大型开源项目或高度定制化的 Git Agent 工作流。
- **CLI Agent 配额监控** | [#1997 OPEN](https://github.com/generalaction/emdash/pull/1997)
  在设置面板中集成 Claude 和 Codex 的 Usage limits（速率限制窗口、重置时间）。对于需要并发调度多个 Agent 的编排场景，实时感知底层模型的限流状态至关重要。
- **Worktree 默认设置** | [#1998 OPEN](https://github.com/generalaction/emdash/pull/1998)
  在 Task 级别引入基于 Branch 创建 worktree 的默认配置，进一步强化了 Emdash 的并行任务隔离能力。
- **新增 Freebuff Provider** | [#1985 OPEN](https://github.com/generalaction/emdash/pull/1985)
  扩展了新的 LLM 提供商支持，增强编排生态的模型兼容性。

**底层工程与体验优化：**
- **Linting 架构迁移** | [#1984 OPEN](https://github.com/generalaction/emdash/pull/1984)
  将代码检查和格式化工具从 ESLint/Prettier 迁移至基于 Rust 的 `oxlint` 和 `oxfmt`，大幅提升 CI/CD 和本地编译速度。
- **终端与 UI 体验修复**：包含终端字体大小控制 ([#1991](https://github.com/generalaction/emdash/pull/1991))、Sidebar 拖拽溢出修复 ([#1996](https://github.com/generalaction/emdash/pull/1996))、OpenCode 初始 Prompt 提交可靠性修复 ([#1948](https://github.com/generalaction/emdash/pull/1948)) 等。

## 5. 为什么这个项目在 Agent 编排生态中值得关注

1. **从 GUI 走向 API 化编排**：Issue #1995 表明社区正在推动 Emdash 成为可通过 HTTP API 编排的中心节点。这意味着 Emdash 正在从单纯的“AI 代码编辑器”演变为“Agent 调度中控台”，外部系统或上层 Agent 可以直接驱动其执行任务。
2. **极致的并发与上下文隔离**：无论是即将完善的 Worktree 默认设置（PR #1998），还是精细化的 Git Fork 工作流支持（PR #1978），Emdash 正在解决多 Agent 并行工作时最棘手的代码冲突和上下文污染问题。
3. **多模型与限流治理**：通过支持多 Provider（PR #1985）并在 UI 层面监控 Claude/Codex 的 Rate Limits（PR #1997），Emdash 在底层基础设施上为多 Agent 的稳定运行提供了资源调度保障。这是成熟 Agent 编排框架的标志性特征。

</details>

<details>
<summary><strong>Collaborator</strong> — <a href="https://github.com/collaborator-ai/collab-public">collaborator-ai/collab-public</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Agent Deck</strong> — <a href="https://github.com/asheshgoplani/agent-deck">asheshgoplani/agent-deck</a></summary>

# Agent 编排日报摘要：Agent Deck
**日期**: 2026-05-13 | **分析目标**: [asheshgoplani/agent-deck](https://github.com/asheshgoplani/agent-deck)

## 1. 今日速览
过去 24 小时内，Agent Deck 项目共更新 **2 个 Issues** 与 **3 个 PRs**，无新版本发布。项目重心目前聚焦于两个方向：**TUI 渲染与字符宽度的稳定性修复**，以及 **Watcher 事件驱动架构的打通**。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
TUI 界面在处理动态视口和特殊 Unicode 字符时暴露出底层布局计算的边缘缺陷：

- **TUI 输入栏越界与视口漂移**：当宿主终端缩放或切换 Session 时，TUI 输入栏未能可靠重算位置，导致输入字符溢出屏幕右侧边界且不可见。
  - Issue: [#936 Input line drifts off the visible viewport after host-terminal zoom or session switch](https://github.com/asheshgoplani/agent-deck/issues/936) (作者: Kevsosmooth)
- **Emoji 变体选择符导致行偏移**：包含文本默认呈现表情符号 + VS16 (U+FE0F) 的会话标题（如 `🏷️`, `⚙️`），会导致 Bubble Tea TUI 滚动时出现行偏移或行重复。其核心原因是 `go-runewidth` 库与终端模拟器对字符宽度的计算存在分歧。
  - Issue: [#937 Session titles with text-default emoji + VS16 cause per-frame row-offset drift in TUI](https://github.com/asheshgoplani/agent-deck/issues/937) (作者: maxfi)

## 4. 关键 PR 进展
本次更新包含重要的架构补全，特别是 Watcher 事件开始支持向下传导至 Conductor，以及 TUI 交互层级管理的增强：

- **[架构] Watcher 事件路由至 Conductor**：修复了 Watcher 事件仅停留在 TUI 面板的问题。通过将路由事件分发到 conductor 的 tmux pane，使得 Claude 等 AI conductor 能够对 GitHub PRs、Issue 评论及 CI 结果等外部事件做出实时反应。
  - PR: [#939 feat(watcher): dispatch routed events to conductor tmux pane](https://github.com/asheshgoplani/agent-deck/pull/939) (作者: martins-fresh)
- **[修复] Watcher 配置加载失效**：修复了 `internal/ui/home.go` 中 adapter 注册时传递空 `Settings` 的问题。此前该缺陷导致 GitHub adapter 无法使用（因无法获取 webhook secret）。修复后，webhook/ntfy/slack 等适配器可从 `watcher.toml` 正常读取配置。
  - PR: [#938 fix(watcher): load [source] settings from watcher.toml](https://github.com/asheshgoplani/agent-deck/pull/938) (作者: martins-fresh)
- **[交互] 组内层级快捷键支持**：引入组内层级操作手势，支持通过 `K/J` 或 `Shift+方向键` 在父级会话中自动提升子会话，而无需降级使用 CLI 操作。
  - PR: [#848 feat(groups): in-group hierarchy keys (K/J auto-promote + Shift+arrows indent/outdent)](https://github.com/asheshgoplani/agent-deck/pull/848) (作者: AdamiecRadek)

## 5. 为什么这个项目在 Agent 编排生态中值得关注
Agent Deck 正在解决多 Agent 编排中的两个核心工程痛点：
1. **多模态事件驱动的闭环**：通过 PR #938 和 #939 可以看出，该项目正在构建一个双向桥接机制——既能将底层基础设施（如 GitHub Webhooks、CI 状态）的结构化数据实时注入 AI Agent（如 Claude）的上下文中，又能维持 UI 层面的状态监控。这使得 Agent 具备了“感知-响应”的自动化工作流能力。
2. **高密度的终端交互管理**：面对同时运行大量 Agent Session 的场景，项目通过 Bubble Tea 构建复杂的 TUI，并不断打磨（如 PR #848 的层级管理，以及对 Unicode 宽度计算的精修），试图在终端环境下提供接近 IDE 级别的工作流编排体验。

</details>

<details>
<summary><strong>Mux Desktop</strong> — <a href="https://github.com/coder/mux">coder/mux</a></summary>

# 🤖 Mux Desktop Agent 编排日报 (2026-05-13)

**项目仓库**: [coder/mux](https://github.com/coder/mux)

## 1. 今日速览
过去 24 小时内，Mux Desktop 保持了高频的迭代节奏，共产生 **17 条 PR 更新**（其中 11 条已合并关闭）和 **1 条新 Issue**。从提交内容来看，当前开发重心集中在 **Goal（目标）系统的完善**、**工具链的扩展** 以及 **子项目（Sub-project）架构的优化** 上。

## 2. 版本发布
- **[v0.24.1-nightly.25](https://github.com/coder/mux/releases/tag/v0.24.1-nightly.25)**: 基于 `main` 分支的自动化 Nightly 构建 (2026-05-12)。

## 3. 重点 Issues
- **[#3270 [ready-for-agent] 🤖 feat: PRD experimental image generation tool](https://github.com/coder/mux/issues/3270)**
  引入了全新的实验性功能需求：为 Agent 提供原生的图像生成工具。该 Issue 旨在让 Agent 无需依赖外部工作流，通过配置即可直接调用 OpenAI 图像模型生成视觉资产。

## 4. 关键 PR 进展

### 🛠️ Agent 工具链与执行编排
- **[#3273 [OPEN] feat: add experimental image generation tool](https://github.com/coder/mux/pull/3273)**: 落地 #3270 需求，新增默认关闭的图像生成工具，支持配置最大生成数量，并将产物暂存至运行时临时存储。
- **[#3268 [OPEN] feat: add bash monitor wake events](https://github.com/coder/mux/pull/3268)**: 借鉴 Claude-Code 风格，为后台 `bash` 命令引入正则监控。当输出匹配时自动唤醒 Agent，优化了长时间运行任务的异步编排体验。

### 🎯 Goal（目标）与状态管理
- **[#3235 [CLOSED] feat(goals): long-horizon auto-continuation with budgets](https://github.com/coder/mux/pull/3235)**: 重大功能合入。新增工作区级别的持久化 **Goal** 原语，支持通过 Dollar 预算进行长周期自动续跑。
- **[#3271 [CLOSED] fix: handle zero-budget goals and live cost previews](https://github.com/coder/mux/pull/3271)**: 修复预算逻辑，将 $0 预算正确识别为“无限制”，并优化流式计算期间的成本预览显示。
- **[#3277 [OPEN] fix: show finalized completed goal accounting](https://github.com/coder/mux/pull/3277)**: 修复 Goal 完成时的开销统计卡片显示，确保前端 Transcript 与后端最终结算数据一致。
- **[#3274 [CLOSED] [#3275 [CLOSED]]](https://github.com/coder/mux/pull/3275)**: 重构 Goal 续跑和清理时的前端 UI，将冗余信息折叠为紧凑的 Transcript 卡片。

### 📂 架构重构与 Workspace 优化
- **[#3244 [OPEN] fix: present sub-projects to the agent as regular projects](https://github.com/coder/mux/pull/3244)**: 将子项目对 Agent 透明化，继承父级 `AGENTS.md` 指令的同时，在 CWD 级别实现逻辑隔离。
- **[#3266 [CLOSED] refactor: align sub-project creation scope](https://github.com/coder/mux/pull/3266)**: 修剪子项目架构的差异化代码，确保创建、默认设置和后端 API 统一使用父级工作区模型。
- **[#3262 [CLOSED] feat: Instructions tab in right sidebar](https://github.com/coder/mux/pull/3262)**: 在右侧面板新增 **Instructions** 标签页，可视化展示所有加载的 `AGENTS.md` 等指令文件及其 Token 消耗。
- **[#3261 [CLOSED] fix: suppress post-compaction continue notifications](https://github.com/coder/mux/pull/3261)**: 优化上下文压缩（compaction）后的通知机制，不再对 Agent 的内部恢复轮次发送多余提醒。

## 5. 为什么这个项目在 Agent 编排生态中值得关注？

作为一款桌面级 AI Agent 运行环境，Mux 正在构建一套高度闭环的 **“感知-规划-执行”** 编排架构，其在以下几点表现突出：
1. **长周期任务编排**: 通过 `Goal` 原语与预算控制，Mux 解决了 LLM 在处理复杂任务时容易中断或失去上下文的问题，实现了基于成本控制的自动重试与续跑。
2. **异步执行与事件唤醒**: `bash monitor` 功能的引入，标志着 Mux 在异步工具调用上实现了事件驱动，让 Agent 能够真正挂起并等待后台长任务的输出。
3. **深度多模态集成**: 图像生成工具的内置，表明 Mux 正在将 Agent 的能力从代码编写扩展到泛数字资产的生成，且严格遵循本地优先和运行时安全策略。
4. **企业级多仓库支持**: 持续推进的 Sub-project 架构和 `AGENTS.md` 继承机制，为复杂工程下的 Agent 权限划分和指令微调提供了优雅的工程解法。

</details>

<details>
<summary><strong>AutoGPT</strong> — <a href="https://github.com/Significant-Gravitas/AutoGPT">Significant-Gravitas/AutoGPT</a></summary>

以下是为您生成的 2026-05-13 AutoGPT Agent 编排生态日报摘要：

# 📰 AutoGPT 开源生态日报 (2026-05-13)

## 1. 今日速览
过去 24 小时内，AutoGPT 仓库保持高活跃度。虽然**无新版本发布**，但底层基础设施和平台功能的迭代显著加速。社区及核心团队共更新了 **94 个 Pull Requests**（涵盖安全性修复、计费逻辑重构、核心 API 迁移等），同时处理了 **3 个 Issues**（主要集中在前端校验与 LLM 工具调用异常）。

## 2. 版本发布
- **最新 Releases**: 无

## 3. 重点 Issues
- **[#10761](https://link.vision/Significant-Gravitas/AutoGPT/Issue/10761) [Bug] 智能决策块输出格式与 Anthropic API 冲突**: 
  智能决策块在尝试向两个不同的字典格式输出数据时，触发了 Anthropic API 的 400 错误（`Tool names must be unique`）。这暴露了在多路数据分发时，底层 LLM 工具调用的命名冲突问题。
- **[#11237](https://link.vision/Significant-Gravitas/AutoGPT/Issue/11237) [Bug] 前端 API 版本号解析异常**: 
  前端在请求 `/api/library/agents/by-graph/{graph_id}` 时传入了非整型的 `undefined`，导致后端 Pydantic 校验失败。属于前后端类型约束不一致的典型联调问题。

## 4. 关键 PR 进展
今日 PR 活动极为密集，重点集中在**商业化计费修复、安全性加固与底层模型 API 迁移**：

- **计费与商业化逻辑修复**
  - [PR #13093](https://link.vision/Significant-Gravitas/AutoGPT/PR/13093) [Closed] **分离订阅与自动化额度**: 明确了产品原则——$50/月的订阅费仅提供速率限制和副驾驶乘数，不再自动充值自动化积分，并修复了 Stripe 事件去重问题。
  - [PR #13091](https://link.vision/Significant-Gravitas/AutoGPT/PR/13091) [Closed] **修复 OpenRouter 成本显示**: 修复了通过 OpenRouter 路由的模型在节点卡片上统一错误显示为 `$1.50/run` 的问题，将成本展示与后端实际账单逻辑对齐。

- **平台功能与体验增强**
  - [PR #13081](https://link.vision/Significant-Gravitas/AutoGPT/PR/13081) [Open] **支持公开链接分享 Agent 对话**: 允许用户像分享 Agent 执行结果一样，通过公开链接分享 Copilot 的完整对话记录。
  - [PR #13094](https://link.vision/Significant-Gravitas/AutoGPT/PR/13094) [Open] **Graphiti 集成审计与社区发现**: 针对 Graphiti（知识图谱集成）进行了深度研究审计，修复了阻碍记忆 Consolidation 的高严重性问题，并引入社区检测功能。
  - [PR #13022](https://link.vision/Significant-Gravitas/AutoGPT/PR/13022) [Closed] **清理过期的 PlatformLinkTokens**: 增加清理作业，防止 `/setup` 操作产生的 token 表无限增长。

- **安全与基础设施**
  - [PR #12936](https://link.vision/Significant-Gravitas/AutoGPT/PR/12936) [Open] **修复命令注入漏洞**: 修复了 `processor.py` 中 subprocess 调用的严重安全漏洞。
  - [PR #13092](https://link.vision/Significant-Gravitas/AutoGPT/PR/13092) [Closed] **Discord Bot 权限收紧**: 强制要求用户必须拥有 Discord `Manage Server` 权限才能将服务器与 AutoGPT 账号绑定，防止普通成员恶意配置。
  - [PR #11674](https://link.vision/Significant-Gravitas/AutoGPT/PR/11674) [Open] **迁移至 OpenAI Responses API**: 淘汰即将废弃的 `chat.completions.create`，全面迁移至 OpenAI 最新的 `responses.create` 端点。

- **大型架构重构 (Long-running PRs)**
  - [PR #11699](https://link.vision/Significant-Gravitas/AutoGPT/PR/11699) [Open] **动态 LLM 模型注册表**: 移除硬编码的 `LlmModel` 枚举，引入全套数据库驱动的注册表及 Admin UI，实现模型的热更新。

## 5. 为什么这个项目在 Agent 编排生态中值得关注
从今日的数据可以看出，AutoGPT 正在经历**从“极客实验工具”向“成熟商业化 SaaS 平台”的蜕变**：
1. **商业与工程的双轮驱动**：大量关于 Stripe 计费去重、订阅与积分系统解耦的 PR 表明，其背后的商业化闭环正在精细化打磨。
2. **企业级安全与权限管控**：无论是修复 subprocess 的严重漏洞，还是细化 Discord Server 的管理权限，都显示出该项目在为更广泛的企业级集成做安全合规准备。
3. **抽象层与多模型适配**：彻底重构 LLM 模型注册表（PR #11699）并紧跟 OpenAI 最新 API 规范，说明 AutoGPT 正在构建极强的模型路由与抽象能力，这是构建稳定 Agent 编排底座的核心壁垒。

</details>

<details>
<summary><strong>MetaGPT</strong> — <a href="https://github.com/FoundationAgents/MetaGPT">FoundationAgents/MetaGPT</a></summary>

# AI Agent 编排生态日报：MetaGPT 项目动态
**日期**：2026-05-13 | **分析目标**：[FoundationAgents/MetaGPT](https://github.com/FoundationAgents/MetaGPT)

## 1. 今日速览
过去 24 小时内，MetaGPT 仓库整体活跃度平稳，无新版本发布。共产生 **2 条 Issue 更新** 与 **1 条 PR 更新**。当前项目的核心动态高度聚焦于**安全性审查与修复**，同时社区持续探索垂直领域的多智能体角色扩展。

## 2. 版本发布
今日无新版本（Release）发布。

## 3. 重点 Issues

**🔴 高危：任意代码执行漏洞预警**
*   **标题**: [OPEN] 🚨 Security Analysis: 1. An attacker discovers that `xml_fill` uses `exec()` or `e... 
*   **作者**: anxovatomica | **链接**: [FoundationAgents/MetaGPT Issue #2036](https://github.com/FoundationAgents/MetaGPT/issues/2036)
*   **分析**: 安全研究人员指出 `xml_fill` 函数内部存在使用 `exec()` 或 `eval()` 解析不可信输入的风险。该缺陷可导致攻击者注入恶意 Python 代码，从而在应用权限下实现任意代码执行（RCE）。鉴于 Agent 框架经常处理动态 LLM 输出，此类传统的注入漏洞在 AI 编排场景下危害极大，需紧急排查修复。

**💡 生态拓展：科学论文写作专职 Agent 提案**
*   **标题**: [OPEN] 🎓 Integration Proposal: CAJAL — Scientific Paper Writing Specialist for MetaGPT
*   **作者**: Agnuxo1 | **链接**: [FoundationAgents/MetaGPT Issue #2025](https://github.com/FoundationAgents/MetaGPT/issues/2025)
*   **分析**: 社区开发者提议将 P2PCLAW 生态中的 **CAJAL** 作为专职角色（特殊 Agent）集成至 MetaGPT 的多智能体框架中，旨在将其打造为科学论文写作领域的专家 Agent。该提案体现了 MetaGPT 基于角色的多智能体架构在科研自动化等复杂垂直场景下的高度可扩展性。

## 4. 关键 PR 进展

**🛡️ 核心修复：Android 环境命令注入漏洞修复**
*   **标题**: [CLOSED] Security: Fix command injection vulnerability in AndroidExtEnv
*   **作者**: anxovatomica | **链接**: [FoundationAgents/MetaGPT PR #2034](https://github.com/FoundationAgents/MetaGPT/pull/2034)
*   **分析**: 该 PR 修复了 `metagpt/environment/android/android_ext_env.py` 文件中的命令注入漏洞。原代码在执行动态构造的 ADB 命令时，错误地使用了 `subprocess.run()` 并设置 `shell=True`。这种写法在 Agent 控制物理/虚拟设备的环境中极易被利用。目前该 PR 状态已更新为 CLOSED，相关修复代码已合并或处理。

## 5. 为什么这个项目在 Agent 编排生态中值得关注

MetaGPT 在当下的 AI Agent 编排开源生态中，其核心竞争力主要体现在以下两个维度：

1.  **结构化的多智能体协作范式**：区别于简单的单一 Prompt 循环，MetaGPT 引入了“角色扮演”、“SOP（标准作业程序）”和“流水线”的概念。通过让不同的 Agent 承担产品经理、架构师、工程师等具体职责，它成功将复杂任务（如完整的软件开发、或如 Issue #2025 中的学术论文编写）拆解为高度结构化的多智能体协同工作流。
2.  **从软件工程向外围环境的深度拓展**：从 PR #2034 可以看出，MetaGPT 的编排能力已经跨越了纯代码生成，延伸至 `AndroidExtEnv`（安卓环境交互）等底层系统级控制。这标志着 MetaGPT 正从一个“代码生成工具”演变为一个具备跨环境操作能力的通用 Agent 基础设施。同时，近期密集的漏洞修复也反映出，随着 Agent 权限的提升（如执行系统级 shell 指令），该项目的工程重点正在向 **Agent 安全沙箱与执行隔离** 等底层硬核技术转移。

</details>

<details>
<summary><strong>AutoGen</strong> — <a href="https://github.com/microsoft/autogen">microsoft/autogen</a></summary>

# AutoGen 项目日报摘要 (2026-05-13)

## 1. 今日速览
过去 24 小时内，microsoft/autogen 仓库共处理了 **7 个 Issue**（4 个开启，3 个关闭）和 **2 个 PR** 更新，无新版本发布。社区焦点高度集中在**企业级安全合规**与**底层通信/路由缺陷修复**上。

## 2. 版本发布
无。过去 24 小时内未发布新版本或补丁。

## 3. 重点 Issues

- **🔴 严重安全漏洞：WebSocket 未授权 RCE**
  - **概览**：AutoGen Studio 被发现存在通过 `team_config` 触发的未授权远程代码执行漏洞，CVSS 评分高达 9.8。建议立即移交 MSRC 处理。
  - **链接**：[microsoft/autogen Issue #7662](https://github.com/microsoft/autogen/issues/7662)

- **🟡 企业级功能：Agent 操作加密收据 (AAR)**
  - **概览**：大型讨论帖（45条评论），提出引入加密学证明机制，为多 Agent 工作流生成可验证的审计追踪（记录指令、执行动作及数据消耗），直击企业合规痛点。
  - **链接**：[microsoft/autogen Issue #7353](https://github.com/microsoft/autogen/issues/7353)

- **🐛 核心缺陷：GroupChat 路由遗漏 (已关)**
  - **概览**：在 `max_round` 设置为偶数时，`GroupChat` 的轮询调度机制会出现差一错误，导致部分 Agent（如 3 Agent 环境下的 Agent C）被跳过。
  - **链接**：[microsoft/autogen Issue #7677](https://github.com/microsoft/autogen/issues/7677) | [Issue #7678](https://github.com/microsoft/autogen/issues/7678)

- **🐛 兼容性缺陷：序列化配置缺失 http_client**
  - **概览**：在企业自定义模型场景下，反序列化配置未包含 `http_client` 属性，导致端点拒绝访问。
  - **链接**：[microsoft/autogen Issue #7107](https://github.com/microsoft/autogen/issues/7107)

- **🤝 生态合作：MemoryFeed 记忆系统集成提议**
  - **概览**：提出将支持本地优先和 MCP 协议的 MemoryFeed 系统与 AutoGen 进行有明确验收标准（AC）的深度集成合作。
  - **链接**：[microsoft/autogen Issue #7680](https://github.com/microsoft/autogen/issues/7680)

## 4. 关键 PR 进展

- **🔐 引入人类委托溯源证明** `[OPEN]`
  - **概览**：新增 `agentchat_hdp` 示例代码。通过 HDP 协议构建基于 Ed25519 的防篡改责任链，将授权人类与下游 Agent 的每一个操作进行密码学绑定，进一步增强多 Agent 会话的审计与溯源能力。
  - **链接**：[microsoft/autogen PR #7667](https://github.com/microsoft/autogen/pull/7667)

- **📖 文档：补充 MCP 发现索引** `[OPEN]`
  - **概览**：在社区项目页添加 naxytra 公共 MCP 发现端点和 A2A 卡片的参考文档，为用户提供标准化的社区 MCP 集成示例。
  - **链接**：[microsoft/autogen PR #7682](https://github.com/microsoft/autogen/pull/7682)

## 5. 为什么这个项目在 Agent 编排生态中值得关注

1. **向“可验证计算”与零信任架构演进**：从今日的 Issue #7353（加密操作收据）和 PR #7667（Ed25519 委托溯源）可以看出，AutoGen 正在将编排的侧重点从单纯的“工作流连通”升级为“可密码学验证”的零信任企业级合规。
2. **MCP/A2A 协议栈的持续扩张**：通过集成外部 MemoryFeed（Issue #7680）和补充 MCP 发现索引（PR #7682），AutoGen 正积极巩固其在 Model Context Protocol (MCP) 和 Agent-to-Agent (A2A) 开源生态中的核心调度枢纽地位。
3. **安全性被推向前台**：高达 CVSS 9.8 的 WebSocket RCE 漏洞（Issue #7662）的暴露，凸显了编排框架在获得企业广泛采用时必须面对的严峻安全挑战。修复此类核心通信架构漏洞将是接下来的重中之重。

</details>

<details>
<summary><strong>GPT-Engineer</strong> — <a href="https://github.com/AntonOsika/gpt-engineer">AntonOsika/gpt-engineer</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LlamaIndex</strong> — <a href="https://github.com/run-llama/llama_index">run-llama/llama_index</a></summary>

# AI Agent 编排日报：LlamaIndex 生态摘要
**日期**: 2026-05-13 | **分析周期**: 过去 24 小时 | **数据源**: [run-llama/llama_index](https://github.com/run-llama/llama_index)

---

### 1. 今日速览
过去 24 小时内，LlamaIndex 仓库保持中低活跃度。无新版本发布，社区重点关注底层数据序列化机制的安全性与一致性修复，以及评测基准中的资源泄漏问题。
- **Issues 更新**: 4 条 (全部处于 OPEN 状态)
- **PR 更新**: 9 条 (全部处于 OPEN 状态)
- **Releases**: 0 个

---

### 2. 版本发布
**无新版本发布**。

---

### 3. 重点 Issues
本期 Issue 集中在集成生态拓展与底层代码健壮性问题上。

- **[#21610](https://github.com/run-llama/llama_index/issues/21610) [Bug]: HotpotQA 评测基准文件句柄泄漏**
  **作者**: UdattaChowdhuryPE | **👍**: 0
  **摘要**: 在 `HotpotQA` 评测基准的数据下载和读取流程中发现两处文件句柄（File Handles）未正确关闭的资源泄漏问题，可能导致系统文件描述符耗尽。该问题直接催生了两个修复 PR（#21612, #21625）。

- **[#21621](https://github.com/run-llama/llama_index/issues/21621) [Partnership]: 提议集成 MemoryFeed**
  **作者**: hieuchaydi | **👍**: 0
  **摘要**: 第三方开发者提议将带有 MCP（Model Context Protocol）支持的本地优先内存系统 `MemoryFeed` 集成至 LlamaIndex。此提案旨在增强 Agent 的本地状态与记忆编排能力。

- **[#21626](https://github.com/run-llama/llama_index/issues/21626) [Feature Request]: 请求将 llama-index-readers-cvfile 纳入 LlamaHub**
  **作者**: ilanoh | **👍**: 0
  **摘要**: 已发布在 PyPI 的 `.cv` 格式读取器缺乏官方文档和 LlamaHub 曝光，呼吁官方完善数据加载器的生态索引。

- **[#21606](https://github.com/run-llama/llama_index/issues/21606) [Bug]: LlamaParse 无法下载图像**
  **作者**: MarioRS1 | **👍**: 0
  **摘要**: 在使用 LlamaParse 时，尽管 Markdown 和图像预览正常，但图像下载按钮呈现灰色不可用状态，影响多模态数据的解析导出。

---

### 4. 关键 PR 进展
今日 PR 涉及核心安全沙箱修复、对象序列化逻辑重构以及基础代码维护。

- **[#21617](https://github.com/run-llama/llama_index/pull/21617) [Security]: 修复 EvaporateExtractor 沙箱逃逸漏洞 [size:S]**
  **作者**: anxovatomica
  **摘要**: 修复了 `EvaporateExtractor` 中的格式化字符串沙箱绕过漏洞。此前，白名单中的 `str.format()` 可被恶意利用访问 dunder 属性（如 `__class__`）从而逃逸沙箱。对 Agent 执行动态代码提取数据的安全性至关重要。

- **[#21624](https://github.com/run-llama/llama_index/pull/21624) [fix]: 修复 IndexNode 对象序列化不一致 [size:S]**
  **作者**: sharziki
  **摘要**: 为 `IndexNode` 添加了 `@model_serializer(mode="wrap")`。此举确保了在执行 `model_dump()` 时，其嵌套的 `BaseNode` 对象能通过 `doc_to_json()` 正确序列化。修复了底层重构（PR #18447）带来的破坏性变更。

- **[#21625](https://github.com/run-llama/llama_index/pull/21625) [fix]: 修复 HotpotQA 资源泄漏 [size:M]**
  **作者**: Aawegg
  **摘要**: 对应 Issue #21610。修复了 `_download_datasets` 中的文件句柄泄漏及一个 HTTP 连接泄漏，通过上下文管理器（Context Managers）确保异常发生时描述符能被正确回收。

- **[#21372](https://github.com/run-llama/llama_index/pull/21372) [fix]: 修复 vLLM 采样参数兼容性问题 [size:S]**
  **作者**: xingxing21
  **摘要**: 修复了 `llama-index-llms-vllm` 将值为 `None` 的参数（如 `best_of`）直接传递给 `SamplingParams` 导致的崩溃。提升了与 vLLM >= 0.19.0 版本的兼容性。

---

### 5. 为什么这个项目在 Agent 编排生态中值得关注

LlamaIndex 作为构建上下文增强型 LLM 应用的核心框架，其动态演进直接反映了 AI Agent 编排的工程化趋势。从今日的数据切片可以看出：

1. **序列化底座加固**：PR #21624 表明项目正在深度重构其数据节点（Node）的序列化机制（从 `dict()` 向 Pydantic V2 的 `model_dump()` 迁移）。在复杂的多 Agent 工作流中，稳定可靠的对象序列化是跨进程传递状态和记忆的前提。
2. **安全性左移**：PR #21617 对 `EvaporateExtractor` 沙箱逃逸的修复，突显了在 Agent 具备“自主生成并执行代码”能力时，框架层面对底层方法（如 `str.format`）进行细粒度权限控制的必要性。
3. **MCP 协议与外部记忆集成**：Issue #21621 和 PR #21629 密集出现了关于 MCP（Model Context Protocol）的讨论与集成尝试。Agent 编排正在超越单次对话的 Prompt 工程，向“本地记忆系统 + 统一上下文协议”的长期运行态演进。

</details>

<details>
<summary><strong>CrewAI</strong> — <a href="https://github.com/crewAIInc/crewAI">crewAIInc/crewAI</a></summary>

# CrewAI 项目日报摘要：2026-05-13

## 1. 今日速览
过去 24 小时内，CrewAI 生态保持高度活跃。项目发布了最新的 `1.14.5a5` 预发布版本，核心更新集中在**执行器架构演进**和**安全加固**。社区层面，围绕非 OpenAI 模型的兼容性、共识机制以及外部工具/协议集成的讨论与代码贡献显著增加。

- **Issues 更新**: 4 条
- **PR 更新**: 25 条
- **新版本发布**: 1 个 (`1.14.5a5`)

---

## 2. 版本发布
- **[v1.14.5a5](https://github.com/crewAIInc/crewAI/releases/tag/1.14.5a5)**
  - **核心架构**：弃用传统的 `CrewAgentExecutor`，全面默认切换至基于 Flow 的 `AgentExecutor`，为未来移除旧执行器铺平道路。
  - **功能增强**：改进 Daytona 沙箱工具。
  - **问题修复**：修复葡萄牙语文档缺失代码块问题；增加 HITL（人机协同）预审查和蒸馏失败的日志，并引入 `learn_strict` 参数。
  - **安全更新**：修补 `urllib3` 安全漏洞。

---

## 3. 重点 Issues

- **[#5472](https://github.com/crewAIInc/crewAI/issues/5472) [BUG] `output_pydantic` 泄露导致非 OpenAI 模型工具调用失败**
  - **摘要**：自 v1.9.0 起，`Task.output_pydantic` 映射为 `response_model` 并在每次迭代传递给 LLM。这导致 vLLM 等非 OpenAI 兼容模型在处理工具调用时产生冲突，进而跳过工具执行。这是一个影响多模型编排兼容性的关键缺陷。
- **[#5708](https://github.com/crewAIInc/crewAI/issues/5708) [FEATURE] 实现可插拔的共识引擎 (`Process.consensual`)**
  - **摘要**：开发者提议实现长期存在于 `TODO` 中的 `consensual` 进程枚举，引入可插拔的 `ConsensusEngine`。这对于构建去中心化、多 Agent 民主决策的编排架构至关重要。
- **[#5776](https://github.com/crewAIInc/crewAI/issues/5776) & [#5786](https://github.com/crewAIInc/crewAI/issues/5786) 外部系统集成与信任验证**
  - **摘要**：社区正在积极推动生态扩展，提议集成基于 MCP 的本地优先记忆系统，以及基于声誉评分的多 Agent 信任网络，反映出 Agent 间协作与安全验证的强烈需求。

---

## 4. 关键 PR 进展

### 核心架构与安全
- **[#5745](https://github.com/crewAIInc/crewAI/pull/5745) [CLOSED] 弃用 CrewAgentExecutor**
  - **摘要**：正式将 `Crew()` 中的 Agent 默认执行器切换为实验性的 `AgentExecutor`，标志着 CrewAI 编排底层逻辑的重大重构。
- **[#5648](https://github.com/crewAIInc/crewAI/pull/5648) [OPEN] 修复任意代码执行漏洞 (RCE)**
  - **摘要**：用安全的 `json.load` 替换了高危的 `pickle.load`，解决反序列化导致的严重安全漏洞。
- **[#5307](https://github.com/crewAIInc/crewAI/pull/5307) [OPEN] 移除计算器模板中的 `eval()`**
  - **摘要**：用安全的 AST 评估器替换了 `eval()`，防止 LLM 幻觉或恶意 Prompt 导致的系统级 RCE 风险。

### 工具与协议集成
- **[#5785](https://github.com/crewAIInc/crewAI/pull/5785) [OPEN] 支持 x402 支付协议的 Coinbase 钱包工具**
  - **摘要**：引入 `CoinbaseAgenticWalletTool`，使 Agent 能够通过 MCP 协议自主发现并支付 HTTP API 的调用费用。这是** Agent 商业化自主交易**的前沿探索。
- **[#5756](https://github.com/crewAIInc/crewAI/pull/5756) / [#5755](https://github.com/crewAIInc/crewAI/pull/5755) [OPEN] OpenSandbox 沙箱执行工具**
  - **摘要**：增加对 CNCF 托管的 OpenSandbox 支持，为 Agent 提供基于 Docker/K8s 的安全、隔离的代码执行环境。
- **[#5330](https://github.com/crewAIInc/crewAI/pull/5330) [OPEN] 可定制化的 Memory Prompt**
  - **摘要**：引入 `MemoryPromptConfig`，允许开发者对 Agent 记忆的保存、查询、提取和整合过程进行深度 Prompt 覆写，极大增强了复杂上下文编排的灵活性。

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注

CrewAI 正在经历从“Prompt 驱动的链式调用”向“企业级、高安全的分布式编排系统”的关键演进：

1. **底层编排逻辑的蜕变**：默认执行器向 `AgentExecutor` 的迁移（Issue #5745/PR #5745），表明 CrewAI 正在为更复杂的 Flow 编排和状态管理重构底层基座。
2. **零信任与安全加固成为核心**：单日内出现多个高危安全修复（`pickle` 反序列化、`eval` 漏洞修复），同时社区在探索 TOTP 双因素认证（PR #5147）和 Agent 声誉信任网络（Issue #5786）。在多 Agent 互联的生产环境中，沙箱隔离与身份验证是落地的先决条件。
3. **探索 Agent 经济学**：支持 x402 协议的 Coinbase 加密钱包工具（PR #5785）是一个强烈的信号。CrewAI 正在试图定义 Agent 之间进行资源交换和自动化微支付的商业模式标准。
4. **多模型兼容性的修补**：修复 vLLM 环境下 `output_pydantic` 导致的工具调用瘫痪（Issue #5472），显示了项目正在摆脱单一的 OpenAI 生态依赖，致力于成为真正的多模型中立编排器。

</details>

<details>
<summary><strong>Agno</strong> — <a href="https://github.com/agno-agi/agno">agno-agi/agno</a></summary>

以下是为您生成的 Agno (github.com/agno-gi/agno) 项目 2026-05-13 Agent 编排日报摘要：

### 1. 今日速览
过去 24 小时内，Agno 仓库共处理了 **13** 条 Issues 和 **25** 条 PR，无新版本发布。当前项目核心动向集中在 **多租户数据隔离**、**MCP (Model Context Protocol) 生态接入** 以及底层并发和存储机制的代码重构与缺陷修复。

---

### 2. 版本发布
- **最新 Releases**：无

---

### 3. 重点 Issues
今日的 Issues 暴露了多个在复杂生产环境下编排 Agent 时遇到的底层痛点，涵盖存储容错、并发安全及参数处理：

- **存储静默丢数据风险**：[#7879](https://github.com/agno-agi/agno/issues/7879) 指出 `_storage.py` 中的 I/O 包装器捕获所有异常后仅打日志并返回 `None`，导致数据库报错与“会话不存在”无法区分，造成严重的静默数据丢失风险。
- **多线程并发不安全**：[#7427](https://github.com/agno-agi/agno/issues/7427) 报告 `Gemini.get_client()` 缓存的单一 Client 在多线程并发请求时引发间歇性的 SSL/TLS 握手失败。
- **MCP 生态扩展诉求**：[#7884](https://github.com/agno-agi/agno/issues/7884) 建议引入基于 Coinbase 的 `CDPWalletTools`，使 Agent 能够通过 x402 协议自主支付 API 费用；[#7741](https://github.com/agno-agi/agno/issues/7741) 请求 MCP 工具支持自定义 SSL 证书路径，以满足企业内网接入需求。
- **工作流编排缺陷**：[#7878](https://github.com/agno-agi/agno/issues/7878) 发现 Workflow 中的 `user_id` 未向下传递；[#7876](https://github.com/agno-agi/agno/issues/7876) 和 [#7871](https://github.com/agno-agi/agno/issues/7871) 则分别指出了 followup 环节不支持自定义 system prompt，以及底层工具调用强制剥离字符串参数两端空格破坏原始意图的问题。

---

### 4. 关键 PR 进展
社区正在积极推动安全加固、高级编排特性及基础体验修复：

- **安全与多租户加固**：
  - [#7606](https://github.com/agno-agi/agno/pull/7606) 实现了 AgentOS 端点的用户级数据隔离。
  - [#7635](https://github.com/agno-agi/agno/pull/7635) 为 Google OAuth 引入了 PKCE 和 Token 静态加密机制。
  - [#7707](https://github.com/agno-agi/agno/pull/7707) 集中重构了文件系统相关工具的路径安全模块，防御目录穿透和符号链接攻击。
- **高级编排能力扩展**：
  - [#7387](https://github.com/agno-agi/agno/pull/7387) 提交了重大的特性 **Dynamic Subagents**，允许 LLM 在运行时自主生成、调度和销毁具有上下文隔离的临时专属 Agent，以应对复杂任务。
  - [#7528](https://github.com/agno-agi/agno/pull/7528) 引入了 `DiscoverableTools` 概念，实现了运行时的工具渐进式发现机制。
  - [#7749](https://github.com/agno-agi/agno/pull/7749) 为 Workflows 的 HITL（人机协同/Human-in-the-loop）增加了 Socket 长连接支持。
- **重要合并与修复**：
  - [#7882](https://github.com/agno-agi/agno/pull/7882) 与 [#7883](https://github.com/agno-agi/agno/pull/7883) 分别修复了工具参数字符串过度格式化及 ClickHouse 向量库底层 SQL 注入漏洞（已 Closed）。
  - [#7877](https://github.com/agno-agi/agno/pull/7877) 因 PyPI 上的 `mistralai` 包被隔离，紧急禁用了相关依赖（已 Closed）。

---

### 5. 为什么这个项目在 Agent 编排生态中值得关注
Agno 目前正在从一个基础的 Agent 框架向**企业级、高并发的生产态编排平台**演进。从今日的 Issue 和 PR 动态可以看出两个显著趋势：
1. **从“可用”到“安全生产”**：社区重点发力多租户上下文隔离（ContextVar 级别）、身份认证加密（PKCE）、底层 SQL/路径注入防范以及 DB 异常的精细化处理。这表明 Agno 正在应对真实企业级部署中的严苛要求。
2. **突破静态编排上限**：通过引入动态子代理（Dynamic Subagents）和运行时工具发现（DiscoverableTools），Agno 赋予了 LLM 自主编排和按需扩展能力的雏形；同时结合对 x402 支付协议的探索，展现了其在构建具备自主交易和外部系统交互能力的 **Autonomous Agents** 生态上的前瞻性布局。

</details>

<details>
<summary><strong>Ruflo</strong> — <a href="https://github.com/ruvnet/ruflo">ruvnet/ruflo</a></summary>

# Ruflo Agent 编排生态日报 | 2026-05-13

## 1. 今日速览
过去 24 小时内，Ruflo（`ruvnet/ruflo`）项目活动高度密集，共处理 **16 条 Issues** 和 **16 条 PRs**，但未发布新的正式 Release 版本。项目处于 `3.7.0-alpha.27` 迭代周期，核心开发者（`ruvnet` 及社区贡献者）正集中修复跨平台兼容性、插件生态打包破损、以及 RAG 记忆系统的向量检索问题。架构层面，项目正式引入了 **Managed Agent（云端托管运行时）** 架构，Agent 编排能力从本地 WASM 沙箱向云端延伸。

---

## 2. 版本发布
无新版本发布。最新主干版本由 PR [#1934](https://github.com/ruvnet/ruflo/pull/1934) 推送至 `3.7.0-alpha.27`，主要目的是将新增的 Managed Agent 工具集发布到 npm registry。

---

## 3. 重点 Issues

### 🔴 安全与严重破坏性问题
*   **[#1880](https://github.com/ruvnet/ruflo/issues/1880) [HIGH]** 签名验证机制彻底失效：核心依赖 `@noble/ed25519` 缺失，且 `main` 分支缺少 87 个构建产物，导致所有 OS 清单的见证人签名无法验证。
*   **[#1921](https://github.com/ruvnet/ruflo/issues/1921) [BUG]** 钩子执行崩溃：`hooks.json` 硬编码调用 `claude-flow@alpha`，导致持续触发 `npm Invalid Version` 错误，严重阻塞用户使用。

### 🟡 架构演进与跨平台阻断
*   **[#1931](https://github.com/ruvnet/ruflo/issues/1931) [OPEN]** 架构重构：计划将 `ruflo-wasm` 重命名为 `ruflo-agent`，并正式增加基于 Anthropic 云端的 Managed Agents 运行时（ADR-115），实现本地 WASM 与云端大模型推理的统一心智模型。
*   **[#1926](https://github.com/ruvnet/ruflo/issues/1926) [MEDIUM]** CI 验证受阻：计划任务因环境缺少 `gh` CLI 而无法验证主线工作流状态。
*   **[#1914](https://github.com/ruvnet/ruflo/issues/1914) [CLOSED]** 多工作区冲突：`killStaleDaemons` 采用全局正则匹配，错误杀死了其他工作区的守护进程（违反 ADR-014 隔离原则）。
*   **[#1927](https://github.com/ruvnet/ruflo/issues/1927) [BUG]** Win32 路径处理缺陷：成本追踪工具无法处理 Windows 反斜杠和盘符，导致会话日志无法被追踪。

### 🟠 RAG 记忆与向量检索
*   **[#1942](https://github.com/ruvnet/ruflo/issues/1942) / [#1941](https://github.com/ruvnet/ruflo/issues/1941)** 向量检索失效：Bridge 搜索索引配置为 768 维，但导入的 embeddings 实际为 384 维，且导入时未创建 HNSW 索引，导致 `memory_search` 查询结果永远为空。
*   **[#1939](https://github.com/ruvnet/ruflo/issues/1939)** Win32 导入逻辑缺陷：当前项目 Slug 处理未适配反斜杠，导致 Win32 环境下单项目记忆导入失败。

### 🟢 插件生态打包问题 (由 `matheusassali0-wq` 集中上报)
*   **[#1903](https://github.com/ruvnet/ruflo/issues/1903)** 依赖 404：三个官方插件共同依赖的 `@claude-flow/ruvector-upstream` 从未发布至 npm。
*   **[#1904](https://github.com/ruvnet/ruflo/issues/1904)** ESM/CJS 不匹配：`plugin-gastown-bridge` 声明了 `.mjs` 导出，但 Tarball 中仅包含 `.cjs` 文件。

---

## 4. 关键 PR 进展

### 🚀 核心特性与架构发布
*   **[#1934](https://github.com/ruvnet/ruflo/pull/1934) [CLOSED]** 里程碑发版：将 `3.7.0-alpha.27` 推送至 npm，使 MCP 工具链能够正式暴露 Managed Agent 接口。
*   **[#1929](https://github.com/ruvnet/ruflo/pull/1929) [CLOSED]** 架构实现：落地 ADR-115，将 WASM 与云端运行时统一至 `ruflo-agent`。
*   **[#1936](https://github.com/ruvnet/ruflo/pull/1936) [OPEN]** Aperture v0.1：引入基于“面板即 Agent (Pane-as-agent) 群集”架构的多态市场工作区，覆盖 Rust TUI、WASM Shell 和 SvelteKit。

### 🛠️ 破损修复与稳定性提升
*   **[#1923](https://github.com/ruvnet/ruflo/pull/1923) [CLOSED]** 修复 Hook 执行：废弃裸调 `npx @alpha`，改用弹性垫片脚本，彻底解决 [#1921](https://github.com/ruvnet/ruflo/issues/1921) 中的钩子版本解析崩溃问题。
*   **[#1925](https://github.com/ruvnet/ruflo/pull/1925) [CLOSED]** 插件生态批量修复：一次性解决 Issues 1902/1903/1904 的打包发布问题，并增加 CI 防护。
*   **[#1924](https://github.com/ruvnet/ruflo/pull/1924) [CLOSED]** 补全 MCP 映射：注册缺失的 `agent_logs` MCP 工具，并修复 Hive Worker 执行路径（发行为 alpha.26）。
*   **[#1917](https://github.com/ruvnet/ruflo/pull/1917) [CLOSED]** 守护进程隔离：修复 `daemon start` 进程收割逻辑，加入 `projectRoot` 过滤，确保多工作区安全隔离。

### ⚠️ 安全与治理
*   **[#1922](https://github.com/ruvnet/ruflo/pull/1922) [OPEN]** 安全性重构：指出插件注册中心的签名验证形同虚设（CWE-347 漏洞）。因官方私下披露渠道不畅，安全研究员选择公开提交该 PR。
*   **[#1920](https://github.com/ruvnet/ruflo/pull/1920) [CLOSED]** 生态治理：提出 ADR-114，提议将斯坦福 DSPy 的 TypeScript 移植版作为官方可选插件引入，以增强 Agent 的声明式编程能力。

---

## 5. 为什么它在 Agent 编排生态中值得关注

1.  **执行边界的突破（本地沙箱 → 云端托管）**：通过 ADR-115 和 Managed Agent runtime 的落地，Ruflo 正在构建一种“本地轻量 WASM 沙箱处理逻辑，云端大模型 Agent 处理重型计算（如 LSTM 训练、Monte Carlo 模拟）”的双层编排架构。这为多 Agent 系统的资源调度提供了一种基于执行环境的分层模型。
2.  **深度集成与协议锚定**：围绕 LLM 的 Hook 生命周期（`PreToolUse` / `PostToolUse` / `Stop`）进行深度封装，并通过 MCP (Model Context Protocol) 工具标准暴露给上层。它不仅是一个框架，更是试图成为 AI Agent 与底层操作系统/文件系统之间的中间件。
3.  **RAG 记忆与向量治理的真实考验**：从 [#1941](https://github.com/ruvnet/ruflo/issues/1941) 等问题可以看出，项目正深入到 Agent 的长期记忆治理深水区。解决 HNSW 索引缺失和 Embedding 维度漂移，是所有编排框架在构建“有状态 Agent”时必须跨越的工程障碍，Ruflo 正在踩坑并提供参考。
4.  **直面多系统与多租户复杂性**：24小时内密集修复的 Win32 路径处理 ([#1928](https://github.com/ruvnet/ruflo/pull/1928)) 和多工作区 Daemon 隔离 ([#1917](https://github.com/ruvnet/ruflo/pull/1917)) 表明，该项目正在从“概念验证”走向应对真实开发者桌面环境的复杂工程打磨阶段。

</details>

<details>
<summary><strong>LangGraph</strong> — <a href="https://github.com/langchain-ai/langgraph">langchain-ai/langgraph</a></summary>

以下是为您生成的 LangGraph 项目 2026-05-13 Agent 编排日报摘要：

### 1. 今日速览
过去 24 小时内，LangGraph 生态迎来了重大更新，核心主仓库及 5 个周边组件同步发布了正式版。项目重点在提升 Agent 运行时的**容错性**（跨崩溃的持久化错误处理）、**代码重构**（错误处理机制与节点默认配置）以及**工具链增强**。共处理 4 条 Issues，合并 10 条 PRs。

### 2. 版本发布
今日共发布 6 个新版本，核心库全面从 Alpha 版本升级至正式版（GA）：
- **langgraph==1.2.0**: 主版本更新，引入跨宿主崩溃的持久化错误处理及节点默认配置 API。([Release 1.2.0](https://github.com/langchain-ai/langgraph/releases))
- **langgraph-prebuilt==1.1.0**: 预构建组件升级，核心依赖 `langchain-core` 提升至 1.4.0。([Release prebuilt==1.1.0](https://github.com/langchain-ai/langgraph/releases))
- **langgraph-cli==0.4.26**: 修复了对预发布 `api_versions` 的支持。([Release cli==0.4.26](https://github.com/langchain-ai/langgraph/releases))
- **langgraph-checkpoint==4.1.0**: 引入强制增量通道快照功能。([Release checkpoint==4.1.0](https://github.com/langchain-ai/langgraph/releases))
- **langgraph-checkpoint-postgres==3.1.0**: PG 持久化层更新。([Release checkpointpostgres==3.1.0](https://github.com/langchain-ai/langgraph/releases))
- **langgraph-checkpoint-sqlite==3.1.0**: SQLite 持久化层更新。([Release checkpointsqlite==3.1.0](https://github.com/langchain-ai/langgraph/releases))

### 3. 重点 Issues
- **Cloud 环境长时间 Tool Call 重复执行问题**: 社区反馈在 LangGraph Cloud 中，耗时超过 3 分钟的 Tool call 会被静默地从上一个 checkpoint 重新分发，导致原始进程和重复进程同时运行，造成 2-3 倍的冗余成本。([Issue #7417](https://github.com/langchain-ai/langgraph/issues/7417))
- **子图事件丢失 Bug**: 开发者报告 `langgraph-runtime-inmem` 中，当提供 `stream_mode` 时，`Runs.Stream.join` 会出现丢弃子图事件的回退。([Issue #7778](https://github.com/langchain-ai/langgraph/issues/7778))
- **日志级别 Bug 报告**: 发现 `warnings.warn()` 调用中缺失 `stacklevel` 参数，导致日志追踪错位。([Issue #7776](https://github.com/langchain-ai/langgraph/issues/7776))

### 4. 关键 PR 进展
- **feat(langgraph): 跨宿主崩溃的持久化错误恢复** (#7773): 重构了错误写入逻辑。节点失败并触发错误处理程序时，`commit()` 现在通过单次 `put_writes` 调用追加 `ERROR` 和 `ERROR_SOURCE_NODE`，确保在处理程序执行前的持久化。([PR #7773](https://github.com/langchain-ai/langgraph/pull/7773))
- **refactor(langgraph): 错误处理机制重构** (#7770): 将原有的隐藏节点 `__error_handler__<name>` 重构为 `PregelNode`/`PregelExecutableTask` 上的可调用字段，与 `retry_policy` 和 `cache_policy` 保持架构一致。([PR #7770](https://github.com/langchain-ai/langgraph/pull/7770))
- **feat(langgraph): 新增节点默认配置 API** (#7747): 引入了 `StateGraph.set_node_defaults()` 流式构建方法，允许在单一位置设置全局节点策略，在 `compile()` 时应用，但可被单节点配置覆盖。([PR #7747](https://github.com/langchain-ai/langgraph/pull/7747))
- **release: 全面发布正式版** (#7775): 将主库及周边组件的 Alpha 版本全部提升为正式版。([PR #7775](https://github.com/langchain-ai/langgraph/pull/7775))

### 5. 为什么这个项目在 Agent 编排生态中值得关注
LangGraph 正在从“可用的有向图执行器”向“工业级容错 StateMachine”演进：
1. **执行态的极高可靠性**：今天合并的 `error_handler` 持久化和架构重构表明，项目正在认真解决 LLM 应用中长期存在的“中间状态丢失”和“崩溃恢复”痛点，这对于生产环境下的多 Agent 串联至关重要。
2. **开发者体验（DX）的优化**：`set_node_defaults()` 的加入简化了复杂图的构建代码。大型 Agent 工作流通常包含数十个节点，统一配置 Retry/Cache 策略将大幅降低模版代码的维护成本。
3. **周边组件的系统性升级**：核心执行引擎与 Checkpoint（状态持久化）、CLI 等模块同步发版，展现了极高的项目协同性，保证了端到端测试的一致性。

</details>

<details>
<summary><strong>Semantic Kernel</strong> — <a href="https://github.com/microsoft/semantic-kernel">microsoft/semantic-kernel</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>SmolAgents</strong> — <a href="https://github.com/huggingface/smolagents">huggingface/smolagents</a></summary>

# AI Agent 编排生态日报：SmolAgents 动态追踪
**日期**: 2026-05-13 | **项目**: [huggingface/smolagents](https://github.com/huggingface/smolagents)

### 1. 今日速览
过去 24 小时内，SmolAgents 仓库无新版本发布。社区活跃度主要集中在代码提交与维护状态探讨，共产生 **1 条新增/更新 Issue** 和 **3 条新增/更新 Pull Request**。整体焦点集中在**安全加固、数据结构兼容性修复**以及**执行步骤的可验证性**。

### 2. 版本发布
- **无新版本发布**。

### 3. 重点 Issues
- **[#2267] [OPEN] 项目是否仍在维护？**
  - **作者**: davidmezzetti
  - **摘要**: 社区开发者针对项目近期的维护响应速度提出疑问，希望核心维护者（@albertvillanova）确认项目的后续规划，以便评估是否需要寻找替代方案构建 Agent 工作流。
  - **链接**: [huggingface/smolagents/issues/2267](https://github.com/huggingface/smolagents/issues/2267)

### 4. 关键 PR 进展
今日的 PR 聚焦于 Agent 执行链路的安全与可信度提升，以及底层数据类型的兼容性。

- **[#2269] [OPEN] 新增 `ChainAnchorCallback` 以支持代理步骤可验证回执**
  - **作者**: Steleet
  - **摘要**: 引入可选的步骤回调辅助功能。在 Agent 运行期间发出 `chain-anchor/v1` JSON 伴随文件，允许用户将带有第三方可审计的公共链（或时间戳 TSA）凭证附加到 Agent 步骤历史记录中，且无需修改现有核心代码。提升了编排执行过程的可解释性与抗篡改能力。
  - **链接**: [huggingface/smolagents/pull/2269](https://github.com/huggingface/smolagents/pull/2269)

- **[#2268] [OPEN] 修复 `get_dict_from_nested_dataclasses` 对 Pydantic 模型的处理逻辑**
  - **作者**: sharziki
  - **摘要**: 修复了 Issue [#1929](https://github.com/huggingface/smolagents/issues/1929)。原逻辑仅对原生 `dataclass` 进行递归展开，导致嵌套的 Pydantic `BaseModel` 对象未被处理，在后续触发 `json.dumps` 时抛出 `TypeError`。此 PR 统一了数据提取逻辑，增强了多数据模型混排时的兼容性。
  - **链接**: [huggingface/smolagents/pull/2268](https://github.com/huggingface/smolagents/pull/2268)

- **[#2266] [OPEN] 安全加固：为 `Tool.from_code()` 增加 `trust_remote_code` 守卫**
  - **作者**: anxovatomica
  - **摘要**: 修复安全漏洞。此前的修复覆盖了 `Agent.from_folder()`，但 `Tool.from_code()` 仍通过 `exec()` 执行任意 Python 代码且无信任检查。此 PR 注入了相同的 `trust_remote_code` 保护机制，防止恶意工具代码的任意执行。
  - **链接**: [huggingface/smolagents/pull/2266](https://github.com/huggingface/smolagents/pull/2266)

### 5. 为什么这个项目在 Agent 编排生态中值得关注
SmolAgents 是由 Hugging Face 主导的轻量级 Agent 构建框架。从今日的 PR 动态可以看出，该项目正在深化其在 **“安全执行边界”**（如 `trust_remote_code` 机制）和 **“执行可信度”**（如集成链上锚点验证回调）方面的能力。在复杂的 LLM 编排工作流中，动态执行外部工具代码是核心痛点之一，SmolAgents 正试图在执行灵活性与系统级安全防护之间建立标准。不过，今日出现的项目维护状态疑问需要生态开发者保持关注，以评估其长期迭代稳定性。

</details>

<details>
<summary><strong>Haystack</strong> — <a href="https://github.com/deepset-ai/haystack">deepset-ai/haystack</a></summary>

以下是为您生成的 Haystack 项目 2026-05-13 Agent 编排生态日报摘要：

### 1. 今日速览
过去 24 小时内，Haystack 生态保持高活跃度，迎来了 **v2.29.0 正式版**的发布。项目合并了多项核心组件的优化和测试系统的重构，共处理 Issues 2 条，PR 更新 13 条（其中 8 条已合并，5 条待处理）。

### 2. 版本发布
- **v2.29.0**：本日最重要的更新。引入了用于构建混合搜索管道的 `MultiRetriever` 和 `TextEmbeddingRetriever`。其中 `MultiRetriever` 能够并行运行多个文本检索器，并将结果合并为去重列表，大幅提升了 Agent 检索侧的编排灵活性和效率。
  - 链接：[deepset-ai/haystack Release v2.29.0](https://github.com/deepset-ai/haystack/releases/tag/v2.29.0)
- **v2.29.0-rc2**：正式版发布前的候选版本。
  - 链接：[deepset-ai/haystack Release v2.29.0-rc2](https://github.com/deepset-ai/haystack/releases/tag/v2.29.0-rc2)

### 3. 重点 Issues
- **[#9435] [OPEN] `_SuperComponent` 的异步行为缺陷**：由社区核心贡献者发现，当前即便底层 Pipeline 是同步的，`_SuperComponent` 依然会强制定义 `run_async`。这可能导致在编排复杂 Agent 逻辑时产生异步调用的冲突隐患。
  - 链接：[deepset-ai/haystack Issue #9435](https://github.com/deepset-ai/haystack/issues/9435)
- **[#11299] [CLOSED] 社区合作提案**：外部系统 MemoryFeed（带 MCP 支持的本地优先记忆系统）试图寻求付费的深度集成合作。被官方关闭，但反映了外部记忆系统寻求与 Agent 编排框架深度对接的趋势。
  - 链接：[deepset-ai/haystack Issue #11299](https://github.com/deepset-ai/haystack/issues/11299)

### 4. 关键 PR 进展
**核心功能与 Bug 修复：**
- **[#11300] [CLOSED] LLM 组件动态配置优化**：调整了 LLM 组件的 `user_prompt`，使其在初始化阶段被设为可选，降低了组件实例化的复杂度。
  - 链接：[deepset-ai/haystack PR #11300](https://github.com/deepset-ai/haystack/pull/11300)
- **[#11248] [CLOSED] 修复元数据提取器并发控制失效**：修复了 `LLMMetadataExtractor.run_async` 中信号量机制放置不当导致 `max_workers` 参数失效的问题，防止在批量处理时 LLM 调用被不受控地并发触发。
  - 链接：[deepset-ai/haystack PR #11248](https://github.com/deepset-ai/haystack/pull/11248)
- **[#11296] [CLOSED] 修复 ExtractiveReader 原位变异警告**：解决了 `ExtractiveReader` 在处理 `meta=None` 时触发的原位变异问题，增强了 Agent 管道中数据流转的稳定性。
  - 链接：[deepset-ai/haystack PR #11296](https://github.com/deepset-ai/haystack/pull/11296)
- **[#11214] [OPEN] AnswerBuilder 支持引用范围**：支持将类似 `[1-3]` 的引用范围扩展为 `[1], [2], [3]` 的独立文档引用，增强了复杂回答的解析能力。
  - 链接：[deepset-ai/haystack PR #11214](https://github.com/deepset-ai/haystack/pull/11214)

**工程质量与可观测性：**
- **[#10972] [OPEN] 增加跨运行行为漂移监控示例**：基于现有的 `Tracer` 接口，新增了用于监测 Agent 跨运行期间“行为漂移”的文档和示例。这对于评估 Agent 长期运行的稳定性和鲁棒性极具价值。
  - 链接：[deepset-ai/haystack PR #10972](https://github.com/deepset-ai/haystack/pull/10972)
- **[#11284] & [#11285] [OPEN/CLOSED] 测试系统引入严格类型检查**：在测试目录（`test/tools`, `test/human_in_the_loop` 等）中全面扩展类型检查，提升了工程化基线。
  - 链接：[deepset-ai/haystack PR #11284](https://github.com/deepset-ai/haystack/pull/11284) | [PR #11285](https://github.com/deepset-ai/haystack/pull/11285)
- **[#11303] & [#11302] [CLOSED] 文档同步升级**：配合 v2.29.0 的发布，将最新版本的 API 文档晋升为稳定版并同步至 Docusaurus。
  - 链接：[deepset-ai/haystack PR #11303](https://github.com/deepset-ai/haystack/pull/11303) | [PR #11302](https://github.com/deepset-ai/haystack/pull/11302)

### 5. 为什么这个项目在 Agent 编排生态中值得关注
1. **编排灵活度的提升**：v2.29.0 引入的 `MultiRetriever` 为构建复杂的混合 RAG（Retrieval-Augmented Generation）Agent 提供了原生的并行调度能力，这是高级编排框架的核心竞争力。
2. **关注 Agent 长期稳定性（可观测性）**：通过 PR #10972 引入的“行为漂移监控”，表明 Haystack 正在解决 LLM 应用从“能跑”到“可控”的痛点，这对于企业级 Agent 生产环境至关重要。
3. **深度的异步与类型治理**：从修复异步信号量（PR #11248）到处理 `_SuperComponent` 的异步边界问题（Issue #9435），再到测试系统的全面类型强化，Haystack 正在为底层调度引擎做深度打磨，以支撑更复杂的并发 Agent 编排场景。

</details>

<details>
<summary><strong>BabyAGI</strong> — <a href="https://github.com/yoheinakajima/babyagi">yoheinakajima/babyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenAI Swarm</strong> — <a href="https://github.com/openai/swarm">openai/swarm</a></summary>

一份为您生成的 OpenAI Swarm 项目 Agent 编排日报摘要。

---

# AI Agent 编排生态日报：OpenAI Swarm
**日期**: 2026-05-13 | **分析项目**: [openai/swarm](https://github.com/openai/swarm)

### 1. 今日速览
过去 24 小时内，[openai/swarm](https://github.com/openai/swarm) 仓库整体活跃度处于低位。未产生新的代码提交、版本发布或 Pull Request 更新。唯一的动态来源于社区侧：一条关于多智能体路由/分流功能缺失的历史 Issue（#57）在今日被重新激活并产生了新的评论。

### 2. 版本发布
*   **状态**：无新版本发布。
*   **概述**：截至 2026-05-13，项目 Releases 模块无任何更新。尽管项目在代码迭代上保持静默，但其作为轻量级编排范式的参考价值依然稳固。

### 3. 重点 Issues
*   **[#57 [OPEN] no create_triage_agent**](https://github.com/openai/swarm/issues/57)
    *   **作者**: hughedward (创建于 2025-06-11，更新于 2026-05-12) | 👍: 1 | 评论: 1
    *   **摘要**: 开发者指出项目缺少内置的 `create_triage_agent`（分流智能体）抽象功能。作者期望通过预设指令，让 Agent 能够对用户请求进行诊断，并自动调用工具将请求无缝移交给对应领域的专业 Agent。
    *   **分析**: 这是一个典型的 **Agent 编排** 需求。在复杂的 Multi-Agent 系统中，中心化的路由和任务分发是核心痛点。该 Issue 的活跃反映了社区对 Swarm 框架提供“开箱即用”的高级编排抽象（如动态转移、意图识别路由）有着强烈诉求。

### 4. 关键 PR 进展
*   **状态**：过去 24 小时无 PR 更新（新增、合并或关闭均为 0）。

### 5. 为什么这个项目在 Agent 编排生态中值得关注？
尽管 [openai/swarm](https://github.com/openai/swarm) 当前代码迭代频率较低，但它在 AI Agent 开源生态中具有不可替代的**概念验证** 地位：
1.  **极简的编排范式**：它摒弃了沉重的状态机和复杂的依赖，仅通过 `routines`（例程）和 `handoffs`（交接）两个原语来定义多 Agent 之间的协作逻辑。这种设计直接影响了后续大量 Agent 框架的底层架构。
2.  **高度可控性**：与强调 Agent 自治的框架不同，Swarm 倡导由代码明确定义工作流，仅在需要动态路由时利用 LLM 的意图识别能力，这为构建可靠的企业级 Agent 提供了思路。
3.  **原生 OpenAI 生态适配**：作为 OpenAI 官方推出的实验性项目，它为理解和应用最新的大模型能力（如函数调用、上下文连续性管理）提供了最直接的“接口级”参考。

</details>

<details>
<summary><strong>OpenAI Agents</strong> — <a href="https://github.com/openai/openai-agents-python">openai/openai-agents-python</a></summary>

# AI Agent 编排生态日报：OpenAI Agents SDK

**日期**：2026-05-13
**项目**：[openai/openai-agents-python](https://github.com/openai/openai-agents-python)

---

### 1. 今日速览
过去 24 小时内，OpenAI Agents SDK 生态保持了较高的修复与迭代频率。项目合并代码并发布了修正补丁 `v0.17.2`，主要集中在运行时稳定性（Realtime 语音工具、会话持久化）。同时，社区与核心开发者提交了 43 个 PR（大量为边缘条件修复），并报告了 9 个 Issue，揭示出在 Agent 输出模式、会话管理和追踪机制中仍存在需要打磨的细节。

---

### 2. 版本发布
**[v0.17.2](https://github.com/openai/openai-agents-python/releases/tag/v0.17.2)**
本次更新为纯缺陷修复，主要涉及以下三个核心领域：
*   **会话持久化**：修复了 OpenAI Conversations 中推理状态无法持久化的问题。
*   **Realtime 工具调用**：修复了对未知 Realtime 工具自动响应的问题，防止产生无效的自动回复。
*   （其他未完整显示的修复项）

---

### 3. 重点 Issues
当前开放的 Issue 集中在 SDK 的类型系统与多模态/Realtime 处理边界上，部分提案（RFC）开始深入探讨生产级安全与成本控制架构。

*   **[Issue #3365](https://github.com/openai/openai-agents-python/issues/3365) [RFC] 敏感工具执行的可选动作证据信封模式**
    *作者*: SeCuReDmE-main-dev | *状态*: CLOSED
    *摘要*: 提出在设计/工作流层面引入一种针对敏感工具执行的信封模式，增强企业级部署的安全性与可审计性。
*   **[Issue #3353](https://github.com/openai/openai-agents-python/issues/3353) Proposal: 单次运行的 BudgetGuard (Token/请求/成本限制)**
    *作者*: Quratulain-bilal | *状态*: CLOSED
    *摘要*: 针对 Agent 循环失控导致产生高额 API 账单的痛点，提议在 `RunHooks` 级别实现单次运行级别的 Budget Guard 机制。
*   **[Issue #3357](https://github.com/openai/openai-agents-python/issues/3357) [feature:core] `AgentOutputSchema.name()` 对 Literal 类型失效**
    *作者*: Aphroq | *状态*: OPEN
    *摘要*: 当输出类型包含 `typing.Literal` 时，SDK 内部的 `_type_to_str` 解析会因尝试读取字符串实例的 `__name__` 属性而导致崩溃。
*   **[Issue #3363](https://github.com/openai/openai-agents-python/issues/3363) [feature:voice] 语音文本分割器丢弃短块**
    *作者*: Aphroq | *状态*: OPEN
    *摘要*: 在流式音频处理中，自定义的 TTS 文本分割器会意外丢弃较短的文本块，导致最终输出不完整。

---

### 4. 关键 PR 进展
今日的 PR 活动主要围绕 **Realtime 特性完善**、**SQLite 会话状态一致性** 以及 **边界异常处理** 展开。

*   **SQLite 会话状态一致性修复 (by john-rocky)**
    *   **[PR #3380](https://github.com/openai/openai-agents-python/pull/3380)**: 修复 `AdvancedSQLiteSession.delete_branch` 未清理底层数据表导致的孤立行问题。
    *   **[PR #3379](https://github.com/openai/openai-agents-python/pull/3379)**: 修复 `add_items` 在结构写入失败时产生部分提交的问题，确保状态回滚的原子性。
*   **Realtime 事件流修复 (多贡献者)**
    *   **[PR #2941](https://github.com/openai/openai-agents-python/pull/2941) / [PR #3025](https://github.com/openai/openai-agents-python/pull/3025)**: 修复 Realtime 会话在接收到 `transcript_delta` 时未向外发射 `history_updated` 事件的缺陷，保证 UI 层能正常获取实时转写流。
    *   **[PR #3373](https://github.com/openai/openai-agents-python/pull/3373)**: 修复函数工具抛出异常时，会话未能将错误信息作为 Tool Output 正确回传给模型的问题。
*   **核心运行时容错性增强 (by adityasingh2400)**
    *   **[PR #3226](https://github.com/openai/openai-agents-python/pull/3226)**: 修复 `model_retry.py` 中由于指数退避算法中间值溢出（`OverflowError`）导致重试逻辑崩溃的问题，添加了 `max_delay` 兜底。
    *   **[PR #3225](https://github.com/openai/openai-agents-python/pull/3225)**: 修复在发生 `GeneratorExit` 时 `NoOpTrace` 错误重置上下文的问题。
*   **文档与规范**
    *   **[PR #3376](https://github.com/openai/openai-agents-python/pull/3376)** (by seratch): 更新了贡献者指南，增加了关于兼容性行为更改、流式/非流式一致性等核心代码审查规则。

---

### 5. 为什么这个项目在 Agent 编排生态中值得关注
作为 OpenAI 官方维护的 Python Agent 编排框架，该项目当前的演进轨迹揭示了构建生产级 Agent 应用的核心技术壁垒：
1.  **从功能走向可靠性**：大量的 PR（如 SQLite 原子性、重试溢出、部分保存修复）表明，Agent 编排的难点已从“如何串联 LLM 调用”转移到“如何处理状态机在复杂异步网络和本地 I/O 下的容错与一致性”。
2.  **多模态与 Realtime 的工程挑战**：Realtime API 的事件监听（如 Transcript Delta）和异常处理占据了大量修复篇幅，反映了“语音级”Agent 编排在事件流对齐上的工程复杂度。
3.  **企业级管控的前置探索**：Issue 列表中关于“成本核算”和“安全工具信封”的讨论，预示着未来 Agent 框架的标准配置必然包含严格的预算控制与执行审计。该项目的官方背景使其在这类标准的制定上具有风向标意义。

</details>

<details>
<summary><strong>DeepAgents</strong> — <a href="https://github.com/langchain-ai/deepagents">langchain-ai/deepagents</a></summary>

# DeepAgents Agent 编排日报摘要 (2026-05-13)

## 1. 今日速览

过去 24 小时内，[DeepAgents](https://github.com/langchain-ai/deepagents) 仓库保持高活跃度。社区与核心团队共处理了 **16 条 Issues**（含缺陷报告与功能提案）和 **65 条 Pull Requests**，并发布了 **8 个新版本**。当前开发重心集中在多子图/子 Agent 并发编排的状态隔离与容错、代码沙箱执行环境、CLI 交互增强（MCP 与 step-into 调试）以及 SDK 内部依赖拆分与发布流程的规范化。

---

## 2. 版本发布

过去 24 小时内共发布 8 个版本，核心 SDK 升级至 0.6.x，引入实验性代码解释器与多项导入/死锁修复。

| 包名 | 版本 | 核心变更 | 链接 |
|---|---|---|---|
| `deepagents` | **0.6.0** | **[Feature]** 引入实验性 `CodeInterpreterMiddleware`：基于 QuickJS 沙箱支持代码执行和程序化工具调用 (`pip install deepagents[quickjs]`)；新增版本化控制支持 | [Release](https://github.com/langchain-ai/deepagents/releases) |
| `deepagents` | **0.6.1** | **[Fix]** 修复 SDK 从叶子模块导入 `profile` 时的重导出问题 | [PR #3377](https://github.com/langchain-ai/deepagents/issues/3377) |
| `deepagents-cli` | **0.0.57** | **[Feature]** 支持终端 OSC 9;4 进度指示和转义序列辅助工具 | [PR #3347](https://github.com/langchain-ai/deepagents/issues/3347) |
| `deepagents-cli` | **0.0.58** | **[Fix]** 绑定 v0.6 并修复导入竞态条件 | [Commit 4db09ac](https://github.com/langchain-ai/deepagents/commit/4db09acba34b38521192b8f278723524be560779) |
| `deepagents-cli` | **0.0.59** | **[Fix]** 修复 Skill 发现阶段和预热时的导入死锁问题 | [PR #3385](https://github.com/langchain-ai/deepagents/issues/3385) |
| `langchain-daytona` | **0.0.6** | **[Feature]** SDK 升级至 v0.6 | [Commit 4db09ac](https://github.com/langchain-ai/deepagents/commit/4db09acba34b38521192b8f278723524be560779) |
| `langchain-modal` | **0.0.4** | **[Feature]** SDK 升级至 v0.6 | [Commit 4db09ac](https://github.com/langchain-ai/deepagents/commit/4db09acba34b38521192b8f278723524be560779) |
| `langchain-runloop` | **0.0.5** | **[Feature]** SDK 升级至 v0.6 | [Commit 4db09ac](https://github.com/langchain-ai/deepagents/commit/4db09acba34b38521192b8f278723524be560779) |

---

## 3. 重点 Issues

### 3.1 子 Agent / 子图编排状态管理（高频主题）

- **[#2184](https://github.com/langchain-ai/deepagents/issues/2184) [CLOSED]** — `CompiledSubAgent` 在使用自定义 `StateGraph` 时，如果最后一条消息是 `ToolMessage`，会触发无限循环。已被确认和修复。
- **[#2781](https://github.com/langchain-ai/deepagents/issues/2781) [OPEN]** — 子 Agent 被中断运行时会覆盖父级线程状态，导致历史记录恢复失效。这是多层级 Agent 嵌套编排中的关键状态隔离问题。
- **[#2857](https://github.com/langchain-ai/deepagents/issues/2857) [OPEN]** — 子 Agent 在空输出场景下应回退到最后一条非空 `AIMessage`，当前行为不符合预期。
- **[#2629](https://github.com/langchain-ai/deepagents/issues/2629) [CLOSED]** — 调用 `/threads/{thread_id}/history` 时无法找到子图工具。
- **[#2702](https://github.com/langchain-ai/deepagents/issues/2702) [CLOSED]** — 需求：子 Agent 应支持将消息流屏蔽，不上推到前端。这是构建"静默"后台 Agent 的关键特性。
- **[#3249](https://github.com/langchain-ai/deepagents/issues/3249) [OPEN]** — 允许向 `create_deep_agent` 函数传入 `state_schema`，增强自定义状态结构的灵活性。
- **[#2823](https://github.com/langchain-ai/deepagents/issues/2823) [CLOSED]** — 子 Agent 不再兼容 `RunnableFallback`，回退机制失效。

### 3.2 沙箱与工具执行

- **[#2507](https://github.com/langchain-ai/deepagents/issues/2507) [OPEN]** — `RunloopSandbox.download_files`/`upload_files` 单次失败会导致整个批处理崩溃，缺乏容错。
- **[#3105](https://github.com/langchain-ai/deepagents/issues/3105) [CLOSED]** — `BaseSandbox.ls` 静默吞掉 `FileNotFoundError`/`PermissionError`，在无效路径下返回空结果。
- **[#2703](https://github.com/langchain-ai/deepagents/issues/2703) [OPEN]** — `PatchToolCallsMiddleware` 无法处理没有对应 `ToolMessage` 的 `msg.invalid_tool_calls`。

### 3.3 CLI 与 UX

- **[#1703](https://github.com/langchain-ai/deepagents/issues/1703) [OPEN]** [help wanted] — 改进 MCP（Model Context Protocol）终端界面显示，参考 Claude Code / Cline / Cursor 的设计。
- **[#3350](https://github.com/langchain-ai/deepagents/issues/3350) [OPEN]** — 为 headless 运行模式增加 `--timeout <seconds>` 标志。

### 3.4 新功能提案

- **[#3315](https://github.com/langchain-ai/deepagents/issues/3315) [OPEN]** — 提议增加 `ChromaVectorBackend` 以支持语义向量检索。
- **[#3346](https://github.com/langchain-ai/deepagents/issues/3346) [OPEN]** — 请求在 `ToolMessage` 中增加 `Args` 字段。

---

## 4. 关键 PR 进展

### 4.1 SDK 核心修复

- **[#3391](https://github.com/langchain-ai/deepagents/pull/3391)** [OPEN, size: S] — 修复工具返回的 `Command` 中 `goto` 和 `graph` 未正确传播的问题。这是 Agent 动态路由（工具决定下一步跳转哪个节点）的关键修复。
- **[#3386](https://github.com/langchain-ai/deepagents/pull/3386)** [OPEN, size: S] — 修复无效工具调用的补丁逻辑，解决 [Issue #2703](https://github.com/langchain-ai/deepagents/issues/2703)。
- **[#3228](https://github.com/langchain-ai/deepagents/pull/3228)** [CLOSED, size: L] — **重构子 Agent Transformer 的并发键**：将 `_pending` 的 key 从 `parent_task_id + tool_call_id` 改为 `trigger_call_id`（pregel 任务 ID），解决了同一父任务下多个并行 `task` 调用的状态混淆问题。这是多 Agent 并发编排的重要架构改进。

### 4.2 沙箱与基础设施

- **[#3359](https://github.com/langchain-ai/deepagents/pull/3359)** [CLOSED, size: L] — 统一暴露 `BaseSandbox` 中 `ls`/`read`/`edit`/`glob` 的 OS 错误，不再静默吞异常。

### 4.3 CLI 与 MCP

- **[#3349](https://github.com/langchain-ai/deepagents/pull/3349)** [OPEN, size: XL] — **MCP 界面增强**：添加搜索/过滤、三态状态指示器（ok/unauthenticated/error）、工具参数展开显示、Ctrl+E 全局切换、可导航的服务器头行。对应 [Issue #1703](https://github.com/langchain-ai/deepagents/issues/1703)。
- **[#1372](https://github.com/langchain-ai/deepagents/pull/1372)** [OPEN, size: XL] — **子 Agent step-into 模式**：在 CLI 中支持进入子 Agent 的交互式调试会话，同时保持上下文隔离。在 HITL 审批提示中出现新 "Step into" 选项。

### 4.4 代码沙箱与 REPL 架构重组

- **[#3388](https://github.com/langchain-ai/deepagents/pull/3388)** [CLOSED, size: XL] — 将代码执行模块从 `libs/cli` 移植为独立包，准备作为 `deepagents-code` 发布。
- **[#3387](https://github.com/langchain-ai/deepagents/pull/3387)** [CLOSED, size: XL] — 删除 `libs/repl`，完成 REPL 功能的架构迁移。

### 4.5 自动发布 PR（release-please）

以下版本已提交发布 PR，等待合并自动发布到 PyPI：
- [**deepagents v0.6.2**](https://github.com/langchain-ai/deepagents/pull/3389)
- [**deepagents-cli v0.1.0**](https://github.com/langchain-ai/deepagents/pull/3390)（里程碑：从 0.0.x 跳至 0.1.0）
- [**deepagents-code v0.1.0**](https://github.com/langchain-ai/deepagents/pull/3370)（新独立包）
- [**deepagents-acp v0.0.7**](https://github.com/langchain-ai/deepagents/pull/3378)
- [**langchain-quickjs v0.1.3**](https://github.com/langchain-ai/deepagents/pull/3371)

### 4.6 Benchmark 与评估

- **[#2988](https://github.com/langchain-ai/deepagents/pull/2988)** [OPEN] — 针对 QuickJS 和 Daytona 沙箱的基准测试。
- **[#2817](https://github.com/langchain-ai/deepagents/pull/2817)** [CLOSED, size: XL] — 基于 Monty Python REPL 的评估框架。

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注

DeepAgents 正在从单体 SDK 演化为**模块化的 Agent 编排平台**，从近期的开发轨迹可以看出几个明确的技术方向：

1. **多层子 Agent 并发与状态隔离**：`SubagentTransformer` 的并发键重构（[#3228](https://github.com/langchain-ai/deepagents/pull/3228)）和围绕子 Agent 状态污染的多个 Issue 修复表明，项目正在解决生产级多 Agent 系统中最困难的问题——**并发执行中的状态一致性和容错**。

2. **代码执行沙箱的一等支持**：`CodeInterpreterMiddleware`（QuickJS）、独立包拆分（`deepagents-code`、`langchain-quickjs`、`langchain-repl`）和 Daytona/Runloop/Modal 多后端支持，表明 DeepAgents 将**安全代码执行**视为 Agent 编排的核心能力，而非附加功能。

3. **开发者体验的工程化投入**：CLI 的 MCP 可视化增强、子 Agent step-into 调试、OSC 终端进度指示等 PR，说明项目在认真对待**开发调试阶段的交互体验**，这是 Agent 应用从实验走向工程化的关键瓶颈。

4. **包架构的 Monorepo 化成熟演进**：通过 release-please 自动化发布流程和 `deepagents-code`、`deepagents-acp` 等新独立包的出现，项目正在建立**可持续的开源治理模型**，支持不同组件的独立版本迭代。

综合来看，DeepAgents 是当前 Agent 编排领域中**在子图并发调度、代码沙箱集成和开发者工具链三个维度同时推进较深的项目**，适合关注多 Agent 系统工程化落地的开发者和团队持续跟踪。

</details>

<details>
<summary><strong>PydanticAI</strong> — <a href="https://github.com/pydantic/pydantic-ai">pydantic/pydantic-ai</a></summary>

# AI Agent 编排生态日报：PydanticAI 生态跟踪
**日期**：2026-05-13 | **项目**：[pydantic/pydantic-ai](https://github.com/pydantic/pydantic-ai)

---

### 1. 今日速览
过去 24 小时内，PydanticAI 生态保持高度活跃。项目处理了 **20 条 Issue** 和 **30 条 PR**，并发布了 **v1.94.0** 正式版。整体动态呈现两大特征：
*   **供应链突发事件响应**：`mistralai` Python 包在 PyPI 遭遇供应链攻击，项目核心维护者迅速介入处理。
*   **v2 架构重构加速**：核心团队在一天内合并/推进了多个标记为 `v2:prep` 和 `v2:exec` 的 PR，涉及Capabilities（能力）、MCP工具集、Provider拆分等底层重构。

---

### 2. 版本发布
**[v1.94.0](https://github.com/pydantic/pydantic-ai/releases/tag/v1.94.0) (发布于 2026-05-12)**
*   **核心特性**：为 OpenAI 模型配置引入了 `openai_chat_supports_multiple_system_messages` profile flag，以增强对不同模型对话行为的兼容性控制。

---

### 3. 重点 Issues
*   **供应链攻击影响安装 (🔥 高关注)**
    *   **[#5382](https://github.com/pydantic/pydantic-ai/issues/5382)**：`mistralai==2.4.6` 在 PyPI 被隔离（含恶意代码），导致直接安装 `pydantic-ai` 失败。社区迅速反馈，目前已被处理。
*   **核心编排能力 RFC**
    *   **[#4773](https://github.com/pydantic/pydantic-ai/issues/4773)**：提出 `AbstractMemoryStore`（跨运行记忆层）的 RFC。旨在解决当前 Agent 每次运行都是无状态的痛点，计划引入可插拔的长期记忆机制。
*   **模型/Provider 兼容性 Bug**
    *   **[#5386](https://github.com/pydantic/pydantic-ai/issues/5386)**：`BedrockConverseModel.client` 从可写字段变为只读属性，引发破坏性变更。
    *   **[#5379](https://github.com/pydantic/pydantic-ai/issues/5379)**：针对 OpenRouter、xAI 和 Bedrock 等推理模型，`thinking=False` 配置被静默丢弃。
    *   **[#5324](https://github.com/pydantic/pydantic-ai/issues/5324)**：`AnthropicProvider` 在使用 Bedrock/Vertex 等客户端时未标准化模型名称，导致 Tool Search 等特性异常。
*   **编排策略与可观测性**
    *   **[#3791](https://github.com/pydantic/pydantic-ai/issues/3791)**：当 `EndStrategy` 设置为 `exhaustive` 时，输出工具与函数工具未能按并行调用顺序执行。
    *   **[#5373](https://github.com/pydantic/pydantic-ai/issues/5373)**：建议在 `AgentResult` 中暴露已注册的工具列表，以增强 Agent 运行时的可观测性和调试能力。

---

### 4. 关键 PR 进展
*   **v2 架构大重构**
    *   **[#5325](https://github.com/pydantic/pydantic-ai/pull/5325)**：引入新的 `MCPToolset`，废弃旧的 `MCPServer*`，基于 FastMCP 客户端重构 MCP 的接入方式。
    *   **[#5338](https://github.com/pydantic/pydantic-ai/pull/5338)**：概念统一，将 "built-in tools"（内置工具）重命名为 "native tools"（原生工具），并通过 `NativeTool(...)` 统一注册。
    *   **[#5333](https://github.com/pydantic/pydantic-ai/pull/5333)**：重构 Capabilities 的降级语义，将 Web搜索、MCP等能力的默认降级行为进行翻转，明确边界。
    *   **[#5336](https://github.com/pydantic/pydantic-ai/pull/5336)**：拆分 Google 和 GCP 的 Provider，引入 `GCPProvider`。
    *   **[#5334](https://github.com/pydantic/pydantic-ai/pull/5334)**：为 OpenAI 模型增加 `openai-chat:` 前缀，为 v2 版本默认使用 Responses API 做准备。
*   **工具检索增强**
    *   **[#5143](https://github.com/pydantic/pydantic-ai/pull/5143)**：实现 Anthropic 和 OpenAI 的原生工具检索，支持超大工具集的延迟加载（`defer_loading=True`）。
*   **供应链热修复**
    *   **[#5393](https://github.com/pydantic/pydantic-ai/pull/5393)**：恢复 `mistral` 为默认依赖，但排除了被污染的 `2.4.6` 版本。
    *   **[#5392](https://github.com/pydantic/pydantic-ai/pull/5392)**：恢复 Bedrock 客户端在运行时的动态替换能力。

---

### 5. 为什么这个项目在 Agent 编排生态中值得关注？
1.  **抽象层级的演进**：从最新的 PR 动向（引入 Capabilities 机制、原生工具抽象）可以看出，PydanticAI 正在从单纯的“LLM 调用封装”向“高内聚的 Agent 编排基础设施”演进，使得工具调用、模型提供者、记忆存储可以被高度解耦和插拔。
2.  **应对 Multi-Agent 复杂度**：正在解决的跨会话记忆（Memory RFC）、超大工具集动态检索、精确控制工具执行顺序等问题，直击当前复杂 Multi-Agent 系统在工程落地中的痛点。
3.  **健康的生态治理**：面对突发的上游依赖投毒事件能够做到 24 小时内响应并修复；同时正在积极通过自动化文档、冗余测试清理等手段保障项目在快速迭代中的工程质量。

</details>