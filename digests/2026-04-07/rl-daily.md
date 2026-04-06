# RL 开源生态日报 2026-04-07

> 生成时间: 2026-04-06 22:06 UTC | 覆盖项目: 15 个

- [ROLL](https://github.com/alibaba/ROLL)
- [ROCK](https://github.com/alibaba/ROCK)
- [slime](https://github.com/THUDM/slime)
- [AReaL](https://github.com/inclusionAI/AReaL)
- [TRL](https://github.com/huggingface/trl)
- [Tianshou](https://github.com/thu-ml/tianshou)
- [OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)
- [verl](https://github.com/volcengine/verl)
- [torchtune](https://github.com/pytorch/torchtune)
- [Open Instruct](https://github.com/allenai/open-instruct)
- [CleanRL](https://github.com/vwxyzjn/cleanrl)
- [rl_games](https://github.com/Denys88/rl_games)
- [Gymnasium](https://github.com/Farama-Foundation/Gymnasium)
- [PettingZoo](https://github.com/Farama-Foundation/PettingZoo)
- [Stable Baselines3](https://github.com/DLR-RM/stable-baselines3)

---

## 横向对比分析

## 生态全景
今日 RL 开源生态呈现出明显的**分层维护**特征。以 **Tianshou** 和 **Open Instruct** 为代表的项目处于活跃的工程迭代期，分别聚焦于底层架构重构与 Agent 基础设施建设。**OpenRLHF** 等成熟项目进入稳定维护期，主要进行依赖更新。值得注意的是，**Slime** 和 **Open Instruct** 的动态揭示了当前 LLM+RL 范式下的两个关键战场：**硬件算子兼容性**与**沙箱环境交互**。大量知名项目（如 TRL, CleanRL, verl）今日处于静默状态，表明生态整体处于功能收敛后的蓄力或维护阶段。

## 各项目活跃度对比

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **Tianshou** | 0 | 6 (3 Open, 3 Closed) | 0 | **架构重构**：核心数据结构与接口标准化，清理技术债务。 |
| **Open Instruct** | 0 | 3 | 0 | **Agent 基建**：引入沙箱环境与分布式修复，强化 Agent 训练能力。 |
| **OpenRLHF** | 0 | 1 | 0 | **维护模式**：自动化代码风格更新，核心算法库趋于稳定。 |
| **Slime** | 0 | 1 | 0 | **硬件适配**：针对新模型（Qwen3.5）的特定 GPU 架构算子修复。 |
| **ROLL** | 0 | 1 | 0 | **工具集成**：扩展可观测性工具链。 |
| *Others* | 0 | 0 | 0 | *静默期*：TRL, CleanRL, verl, SB3 等无动态。 |

## 共同关注的研究与工程方向

### 1. 研究侧信号
*   **Agent 交互与执行能力**：Open Instruct 新增的 `SWERLSandboxEnv` 表明研究重心正从单纯的文本生成 RLHF 转向**基于执行反馈的强化学习**。通过 Docker 隔离执行代码并获取 Reward，是解决 SWE-bench 类复杂任务的关键路径。
*   **动态奖励机制**：Open Instruct 在 GRPO 训练中引入 "Evolving Rubric"，暗示**课程学习**或**非静态目标**正在被用于提升 LLM 的推理能力，而非单一的固定奖励模型。

### 2. 工程/基础设施侧信号
*   **环境接口标准化**：Tianshou 对 EnvPool 和 Mujoco 的大力重构表明，解决**向量环境接口碎片化**（Wrapper Hell）和提升高吞吐数据流的稳定性是当前 RL 框架工程化的核心痛点。
*   **异构硬件兼容性**：Slime 针对 Qwen3.5 在非 Hopper GPU 上的 Flash Attention 适配说明，随着模型架构的快速演进（如 head_dim 增大），**底层算子的兼容性**仍是大规模训练的工程瓶颈。
*   **分布式状态管理**：Open Instruct 修复 DeepSpeed 多卡检查点路径问题，反映了在大规模 RL 训练中，**断点续训**的可靠性依然是基础设施建设的重点。

## 差异化定位分析
*   **Tianshou (通用性与底层重构)**：作为老牌通用 RL 框架，今日的动态显示其正在通过重构 `Batch` 类和环境接口来消除历史包袱，旨在成为更健壮的**算法基座**，而非仅仅追逐 LLM 热点。
*   **Open Instruct (前沿 Agent 探索)**：定位明显向**AI Agent** 倾斜。不同于传统 RL 框架关注游戏环境，它正在构建针对代码执行、软件工程任务的专用 RL 基础设施，是连接 LLM 与实际工具使用的桥梁。
*   **Slime / OpenRLHF (LLM 对齐特化)**：这两个项目高度聚焦于 LLM Post-training。Slime 更侧重于底层算子与模型架构的**极速适配**，而 OpenRLHF 则致力于提供**工业级标准实现**，今日的低活跃度反而印证了其架构的成熟与稳定。

## 社区热度与成熟度
*   **Tianshou**：展示了**成熟项目**的典型特征——在没有新 Issue 的情况下进行主动的代码清理和重构，说明维护者对代码质量有长期规划，社区处于良性维护状态。
*   **Open Instruct**：PR 涉及 DeepSeek 和 Docker 集成，显示出**高活跃度**的工程迭代，反映了 AI2 团队在该领域激进的探索姿态。
*   **OpenRLHF / ROLL**：依赖自动化 CI 和功能补丁，属于**稳态维护**。特别是 OpenRLHF，作为事实上的 RLHF 标准库，其 API 已基本冻结，变动极少。

## 值得关注的趋势信号
1.  **从 Chat 到 Act 的基建升级**：Open Instruct 的沙箱环境 PR 是一个强烈信号，RL 的下一个主战场将是**真实环境下的工具调用与代码执行**，这要求框架具备极强的安全隔离与异步执行能力。
2.  **核心数据结构的隐忧**：Tianshou 花费精力修复 `Batch` 类的隐式填充和空字典问题，这暗示在复杂多智能体或 RNN 场景下，**数据流的边缘情况**仍是开发者掉坑的高发区，值得框架使用者警觉。
3.  **算子定义的硬件边界**：Slime 的 PR 揭示了一个趋势——新模型架构正在逼近旧硬件的极限。Qwen3.5 的 `head_dim=256` 在 A100 上无法使用 Transformer Engine，迫使框架必须具备**动态回退机制**，这种硬件感知的调度逻辑将成为 RL 训练框架的标配。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# ROLL RL 日报 (2026-04-07)

## 1. 今日速览
ROLL 仓库今日整体活跃度较低，无新版本发布或新 Issue 提出。过去 24 小时内仅有 1 条存量 PR 发生了状态更新。

## 2. 版本发布
*   **无**

## 3. 重点 Issues
*   **无**：过去 24 小时内无新增或更新的 Issue。

## 4. 关键 PR 进展
*   **[OPEN] Add Trackio Integration for ROLL** (`#404`)
    *   **作者**: ParagEkbote
    *   **更新时间**: 2026-04-06
    *   **摘要**: 该 PR 旨在解决 Issue #402，通过集成 `trackio` 工具扩展 ROLL 的功能。目前代码已提交并等待官方维护者审查。
    *   **链接**: [alibaba/ROLL PR #404](https://github.com/alibaba/ROLL/pull/404)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
*   **生态扩展性**: PR #404 显示了社区正在积极推动 ROLL 与第三方工具（如 `trackio`）的集成。这表明 ROLL 正在从纯粹的训练框架向更具可观测性和易用性的工具链演进，这对于构建大规模 RL 训练系统至关重要。
*   **阿里系底层支持**: 作为阿里巴巴开源的项目，ROLL 在处理大规模分布式 RL 任务上具有工程优势，是关注工业级 RL 落地的重要参考标的。

---
*数据来源: GitHub alibaba/ROLL*

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# Slime RL 日报 (2026-04-07)

## 1. 今日速览
过去 24 小时内，Slime 仓库整体活跃度较低。无新增 Issue 或版本发布，仅有 1 个专注于 Qwen3.5 模型兼容性修复的 PR 提交。

## 2. 版本发布
无。

## 3. 重点 Issues
无更新。

## 4. 关键 PR 进展
- **[fix: auto-fallback to flash_attn for Qwen3.5 on pre-Hopper GPUs (head_dim=256) #1808](https://github.com/THUDM/slime/pull/1808)**
    - **状态**: Open
    - **作者**: dadiaomengmeimei
    - **摘要**: 该 PR 解决了 Qwen3.5 在非 Hopper 架构 GPU（如 A100, L20, RTX 4090）上的运行时错误。
    - **技术细节**: Qwen3.5 的全注意力层使用 `head_dim=256`。在算力 < 9.0 的 GPU 上，Transformer Engine 的 `DotProductAttention` 模块仅支持 `head_dim <= 128`。该提交引入了运行时逻辑，自动回退至 `flash_attn` 以解决此限制。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
Slime 项目正在积极跟进大模型（LLM）与强化学习（RL）结合的前沿架构。今日的 PR 表明项目组正在深度适配 Qwen3.5 等新一代基座模型，特别是解决特定硬件环境下的算子兼容性问题。这种对底层算子（如 Flash Attention 与 Transformer Engine）的精细化控制能力，是保障大规模 RLHF（基于人类反馈的强化学习）训练稳定性和效率的关键，对于关注 LLM+RL 工程化落地的开发者具有较高的参考价值。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

以下是 Tianshou 项目 2026-04-07 的 RL 日报摘要。

---

### 📅 Tianshou RL 日报 (2026-04-07)

#### 1. 今日速览
Tianshou 在过去 24 小时内**无新版本发布**，**无新 Issue 产生**。项目活跃度主要集中在代码库的维护与核心组件的重构上。共有 **6 个 PR** 更新，其中 3 个为历史 PR 的归档（Closed），3 个为功能性改进（Open），重点集中在环境集成（EnvPool/Mujoco）和核心数据结构 `Batch` 的健壮性优化上。

#### 2. 版本发布
*   **无**

#### 3. 重点 Issues
*   **无新 Issue**。
    *   *注：虽然无新 Issue，但当前的 PR 活动主要针对历史遗留的技术债务（如 #988, #1096, #1088），表明项目正在进行深度代码清理。*

#### 4. 关键 PR 进展
今日的开发重心在于提升框架的工程化标准与 API 规范性。

*   **[重构] 移动 Atari/Mujoco 辅助代码至核心包 (#1293)**
    *   **状态**: Open
    *   **简评**: 将 `examples/` 下的 Mujoco 和 Atari 辅助代码迁移至 `tianshou` 核心包内，并添加 `__init__.py`。此举旨在提升代码复用性，解决 Issue #988，使环境调用更加标准化。
    *   **链接**: [thu-ml/tianshou PR #1293](https://github.com/thu-ml/tianshou/pull/1293)

*   **[特性] 新增 EnvPoolVectorEnv 包装器 (#1294)**
    *   **状态**: Open
    *   **简评**: 修复 #1096。针对 `envpool` 的接口适配问题，引入了新的 `EnvPoolVectorEnv` Wrapper。解决了原生 envpool 返回 info 格式与 Tianshou `BaseVectorEnv` 接口不一致的问题，增强了向量环境集成的鲁棒性。
    *   **链接**: [thu-ml/tianshou PR #1294](https://github.com/thu-ml/tianshou/pull/1294)

*   **[修复] 优化 Batch 类隐式填充与空字典处理 (#1296)**
    *   **状态**: Open
    *   **简评**: 修复 #1088 和 #1089。针对核心数据结构 `Batch`，修复了 `None` 隐式转换为 0 缺乏警告的问题，并解决了 `stack_` 操作中空字典被丢弃导致索引错位的 Bug。这是提升数据流稳定性的重要修复。
    *   **链接**: [thu-ml/tianshou PR #1296](https://github.com/thu-ml/tianshou/pull/1296)

*   **[归档] 历史低频 PR 关闭**
    *   关闭了 #345 (Atari BCQ fix), #623 (REDQ implementation), #115 (Batch init fix)。这些 PR 多数创建于 2020-2022 年，属于旧代码清理。

#### 5. 为什么值得关注
作为一个在 RL 开源社区沉淀多年的框架，Tianshou 今天的动态展示了成熟项目的典型特征：**从“算法实现”转向“工程基建”**。

1.  **接口标准化**: PR #1293 和 #1294 表明项目正在致力于解决环境接口碎片化问题，这对用户在大规模实验（如 EnvPool 加速）中的体验至关重要。
2.  **核心数据结构稳定性**: PR #1296 对 `Batch` 类的修复非常底层且关键，`Batch` 是 Tianshou 处理 Replay Buffer 的核心，这些修复能有效避免用户在实现复杂算法（如 RNN 或 Multi-agent）时遇到的隐性 Bug。
3.  **生态兼容性**: 持续适配 EnvPool 和 Mujoco 说明 Tianshou 依然紧跟现代 RL 训练对高吞吐量的需求，保持了在生产级环境下的可用性。

---
*分析师注：虽然今日无新功能发布的“热闹”，但底层的重构往往是下一阶段性能飞跃的前奏。*

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# OpenRLHF RL 日报摘要 (2026-04-07)

## 1. 今日速览
过去 24 小时内，OpenRLHF 仓库整体处于**低活跃度维护状态**。无新增功能性 Issue 或版本发布，仅记录了 1 条由自动化工具发起的代码风格更新 PR。这表明项目当前核心代码库较为稳定，主要处于维护阶段。

## 2. 版本发布
过去 24 小时内**无新版本发布**。

## 3. 重点 Issues
过去 24 小时内**无新增或更新的 Issues**。

## 4. 关键 PR 进展
仅有一项由 CI 自动化机器人提交的 PR，主要涉及依赖项的常规升级：

*   **PR #1215 [pre-commit.ci] pre-commit suggestions**
    *   **作者**: pre-commit-ci[bot]
    *   **状态**: Open
    *   **链接**: [OpenRLHF/OpenRLHF PR #1215](https://github.com/OpenRLHF/OpenRLHF/pull/1215)
    *   **技术摘要**: 该 PR 由 `pre-commit.ci` 自动触发，旨在同步更新代码格式化与静态检查工具的版本。
        *   **autoflake**: `v2.3.1` → `v2.3.3` (主要修复未使用变量检测的相关 Bug)
        *   **isort**: `7.0.0` → `8.0.1` (主要版本升级，改进导入排序逻辑)
        *   **black**: `25.12.0` → `26.3.1` (主要版本升级，可能包含新的格式化规范)
    *   **分析**: 虽然是自动化 PR，但 `isort` 和 `black` 均升级到了新的主版本（Major Version），合并时需注意是否会产生大量的代码格式变更或潜在的冲突。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日更新平淡，但 OpenRLHF 在 RL 生态中仍具有核心价值：

1.  **工业级 RLHF 标准实现**: OpenRLHF 是目前开源社区中最完整的 RLHF（Reinforcement Learning from Human Feedback）实现之一，提供了从 SFT、Reward Model 到 PPO/DPO 训练的全流程支持。
2.  **高性能架构**: 项目针对大模型场景进行了深度优化（如 Ray 集群支持、vLLM 集成、Sequence Parallelism），是研究者和工程师复现 InstructGPT/Gemini 等对齐算法的首选基座。
3.  **生态兼容性**: 今日 PR #1215 中对 `black` 和 `isort` 的及时跟进，反映了维护者对代码质量与现代 Python 生态的严格把控，确保了项目作为“上游库”的稳定性。

---
*数据来源: GitHub (2026-04-07)*

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL 日报：Open Instruct 项目动态 (2026-04-07)

## 1. 今日速览
过去 24 小时内，Open Instruct 仓库无新版本发布，Issue 列表静默。主要动态集中在 **Pull Requests**，共有 3 个功能型 PR 更新，涵盖了**基础设施修复**、**RL 环境扩展**以及**训练流程配置增强**。显示出项目正在积极适配 DeepSpeed 生态并探索基于沙箱的代码 RL 能力。

## 2. 版本发布
- **无**

## 3. 重点 Issues
- **无**：过去 24 小时内未记录新的 Issue 或更新。

## 4. 关键 PR 进展

### 🛠️ 基础设施：DeepSpeed 检查点加载修复
- **PR**: [#1589 Fix incorrect hardcoded checkpoint state path for multi-GPU DeepSpeed](https://github.com/allenai/open-instruct/pull/1589)
- **作者**: Chessing234
- **详情**: 修复了 `main()` 函数中硬编码的检查点路径 (`global_0/state.pt`)，该路径与 DeepSpeed 实际的多 GPU 目录结构不匹配。新代码改为解析 DeepSpeed 维护的 `latest` 文件来动态获取路径，修复了多卡训练下的状态重载问题。

### 🧪 RL 环境：新增代码沙箱环境
- **PR**: [#1492 Add SWERLSandboxEnv for per-sample Docker tasks with submit-based evaluation](https://github.com/allenai/open-instruct/pull/1492)
- **作者**: hamishivi
- **详情**: 引入了 `SWERLSandboxEnv`，这是一个扩展自 `GenericSandboxEnv` 的新 RL 环境。它允许每个样本在独立的 Docker 容器中运行任务，并集成了 `submit` 工具以执行特定的测试套件。这对于需要安全隔离执行代码的 RL 任务（如 SWE-bench 类任务）至关重要。

### 📈 训练策略：Evolving Rubric 配置接入
- **PR**: [#1581 Wire evolving rubric config flags into GRPO training loop](https://github.com/allenai/open-instruct/pull/1581)
- **作者**: RulinShao
- **详情**: 将此前 PR #1460 引入的 "evolving rubric"（动态评分标准）配置项（如 `apply_evolving_rubric_reward`）正式接入 GRPO 训练循环。此举打通了配置与训练逻辑，使得动态奖励机制能够在训练脚本中实际生效。

## 5. 为什么值得 RL 生态关注
Open Instruct 正在从一个单纯的对齐工具库向更复杂的 **Agent RL** 基础设施演进。
1.  **工程健壮性**：PR #1589 显示社区正在解决大模型训练中最棘手的分布式状态管理问题。
2.  **Agent 能力**：PR #1492 引入的 Docker 沙箱环境表明项目正在构建能够执行复杂代码任务（如软件工程修复）的 Agent 训练环境，这是当前从 Chatbot 迈向 Agent 的关键技术路径。
3.  **算法前沿**：PR #1581 涉及的 "Evolving Rubric" 暗示项目在探索动态奖励模型或课程学习策略，这是提升 LLM 推理能力的重要研究方向。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>