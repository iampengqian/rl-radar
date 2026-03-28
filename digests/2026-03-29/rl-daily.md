# RL 开源生态日报 2026-03-29

> 生成时间: 2026-03-28 22:03 UTC | 覆盖项目: 15 个

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

2026年3月29日的 RL 开源生态呈现出明显的**分层与分化**态势。
1.  **LLM/Agent 领域高热度**：以 **verl** 为首的 LLM RLHF 框架正处于技术爆发期，不仅快速适配 Qwen3.5 等最新基座模型，更在向 Agent 和多模态架构演进。**OpenRLHF** 和 **TRL** 虽代码更新频率不一，但社区讨论高度聚焦于新模型的适配与算法增强。
2.  **基础设施现代化**：以 **Open Instruct** 和 **Stable Baselines3** 为代表的项目正在经历深度的工程化重构，如 CI 离线化、引入 `torch.compile` 和 UV 包管理器，致力于解决规模化训练中的稳定性与性能瓶颈。
3.  **经典与多模态的沉淀**：**rl_games** 和 **Gymnasium** 等项目则在特定垂直领域（如 GPU 并行物理环境、气候模拟）进行单点突破，而部分传统通用 RL 库（如 Tianshou, CleanRL）则处于维护模式或仅进行 Bug 修复。

## 各项目活跃度对比

*注：活跃度基于过去 24 小时的 Issue 评论、PR 提交/审核及版本发布情况综合评估。*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 8 | 15 | 0 | **极高**。正向 Agent 抽象与 NPU 异构计算双线扩张，Qwen3.5 适配领跑全场。 |
| **Open Instruct** | 0 | 4 | 0 | **高**。工程化深度重构，CI 离线化与 Flash Attention 自动化显著提升鲁棒性。 |
| **ROCK** | 2 | 4 | 0 | **中高**。通过 TypeScript SDK 和 Ray 配置优化，构建跨语言 Agent 基础设施。 |
| **rl_games** | 1 (热) | 2 | 0 | **中**。引入 NVIDIA Warp 支持，GPU 并行化激进，但 SAC 实现引发争议。 |
| **slime** | 2 | 3 | 0 | **中**。聚焦长上下文 CP 并行优化与可视化工具，解决 FSDP 深层性能问题。 |
| **TRL** | 0 | 5 | 0 | **中**。算法深耕，引入 PSPO 和细粒度工具过滤，CI 优化明显。 |
| **ROLL** | 1 | 1 | 0 | **低**。重点在于 NPU (华为昇腾) 的底层适配，处于攻坚阶段。 |
| **SB3** | 1 | 1 | 0 | **低**。探索 `torch.compile` 带来的性能红利。 |
| **OpenRLHF** | 1 (热) | 0 | 0 | **低**。代码静默但社区焦虑，用户急需 Qwen3.5 适配方案。 |
| **Others** | - | - | - | **沉寂**。CleanRL, Tianshou, AReaL 等无实质性代码变更或仅处理个别 Issue。 |

## 共同关注的研究与工程方向

### 1. 研究侧信号
*   **SOTA 模型极速适配**：**Qwen3.5** 已成为今日多个主流框架（verl, slime, OpenRLHF）的核心适配目标，反映出 LLM RLHF 生态对基座模型版本的高度敏感性。
*   **Agent 与多模态架构**：从 **verl** 的 Agent RFC 和 FlowGRPO，到 **TRL** 的工具调用过滤，RL 框架正从单纯的"对话优化"转向"Agent 轨迹优化"和"多模态生成控制"。
*   **算法微创新**：在 GRPO 和 PPO 之外，社区开始探索 **PSPO** (Probability Smoothing Policy Optimisation) 等信任域变体，以及在长上下文场景下减少通信开销的训练策略。

### 2. 工程/基础设施侧信号
*   **异构计算支持**：对 **NPU (Ascend/MindSpeed)** 的支持在 **verl** 和 **ROLL** 中并行推进，显示出国产算力生态在 RL 领域的渗透；**rl_games** 对 NVIDIA Warp 的集成则代表了另一条 GPU 通用并行路线。
*   **CI/CD 现代化**：**Open Instruct** 的完全离线 CI 和 **TRL** 的 HF Token 认证优化，表明大型 RL 项目正在通过消除网络依赖来换取构建过程的确定性与速度。
*   **显存与性能极致优化**：**vLLM** 的 KV Cache FP8 量化、**SB3** 的 `torch.compile` 尝试以及 **slime** 的 CP 通信优化，共同指向了在资源受限下提升 Throughput 的核心诉求。

## 差异化定位分析

*   **verl vs. OpenRLHF**：两者虽同属 LLM RLHF 赛道，但 **verl** 目前展现出更强的架构演进野心（Agent 抽象、多模态、异构硬件），正从训练脚本向全栈基础设施转型；而 **OpenRLHF** 目前处于版本适配的阵痛期，更侧重于解决现有用户对新模型的急需。
*   **ROCK vs. TRL**：**ROCK** 正在通过 TypeScript SDK 和 Sandbox 机制，试图打通 Web 与 RL 环境，定位偏向"Agent 运行时"；**TRL** 则依托 Hugging Face 生态，深耕算法细节（如 GRPO 改良），定位偏向"算法实验田"。
*   **rl_games vs. SB3**：**rl_games** 更加激进，押注 GPU 并行环境；而 **SB3** 更加稳健，致力于通过编译器技术挖掘成熟算法的剩余性能。

## 社区热度与成熟度

*   **活跃开发者生态**：**verl** 和 **Open Instruct** 展示了极高的成熟度，不仅问题解决速度快，且有明确的 RFC 规划和工程化标准。
*   **用户痛点驱动**：**OpenRLHF** 和 **CleanRL** 的动态主要来自用户报错，属于被动响应型，显示出在依赖库（如 Gymnasium/Transformers）快速迭代下的维护压力。
*   **工业化分工**：生态已分化出以 **verl/ROLL** 为代表的"大规模工业化生产"派，和以 **CleanRL/Tianshou** 为代表的"教学与科研基准"派。前者关注 Scale 和 Hardware，后者关注 API 稳定和 Readability。

## 值得关注的趋势信号

1.  **Agent RL 的基础设施化**：RL 框架不再仅仅输出一个 Reward，而是开始管理 Agent 的生命周期和工具调用。**verl** 的 `Trajectory Gateway` 提案是一个强烈信号，预示着 RL 将成为 Agent 工作流的底层调度核心。
2.  **"后 PPO" 时代的显存战争**：随着模型参数突破 30B+，**FP8 KV Cache**、**Flash Attention 自动化** 和 **Context Parallelism 优化** 成为了新的军备竞赛场。谁能更高效地利用显存，谁就能在下一轮模型尺寸竞赛中胜出。
3.  **非 CUDA 生态的崛起**：**NPU (华为)** 和 **NVIDIA Warp** 在同一天内的密集动作表明，RL 训练正在摆脱对单一 CUDA 生态的绝对依赖。未来的 RL 平台将不得不面对多芯片架构（XPU）的适配挑战。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# ROLL RL 日报 (2026-03-29)

这里是基于 GitHub 数据生成的 ROLL 项目日报摘要。

## 1. 今日速览
过去 24 小时内，ROLL 仓库活动平稳。无新版本发布，核心动态集中在 **异构计算适配** 与 **遗留系统兼容性** 两个方面。社区正在积极扩展对国产 NPU（华为昇腾）Megatron 架构的支持，同时有用户反馈了旧版 Linux 内核下的 CUDA 显存管理兼容性问题。

## 2. 版本发布
*   **无新版本发布**

## 3. 重点 Issues
*   **[#408](https://github.com/alibaba/ROLL/issues/408) [OPEN] 旧版内核环境下 CUDA 内存分配配置被忽略导致报错**
    *   **现象**：用户在遵循 "Quick Start: Single-Node Deployment Guide" 部署时，于 `Linux 5.4.0-204` 内核环境下遇到错误（涉及 `pidfd_getfd` 系统调用缺失）。进一步分析指出，代码中硬编码了 `expandable_segments:True`，且忽略了环境变量 `PYTORCH_CUDA_ALLOC_CONF`。
    *   **影响**：这可能导致 ROLL 在较旧的 GPU 服务器环境（如 Ubuntu 20.04 或旧版数据中心环境）中因显存分配策略不兼容而无法启动。
    *   **状态**：待官方确认修复方案。

## 4. 关键 PR 进展
*   **[#380](https://github.com/alibaba/ROLL/pull/380) [WIP] 增加 NPU Megatron 支持**
    *   **提交者**：UsernameFull
    *   **内容**：该 PR 旨在集成 `mindspeed` 库以实现对 NPU（ Neural Processing Unit，通常指华为昇腾芯片）的 Megatron 架构支持，并添加了相应的 NPU 示例 YAML 配置文件。
    *   **进展**：目前状态为 `[WIP]` (Work In Progress)，昨日有新的提交更新。这标志着 ROLL 正从单纯的 NVIDIA GPU 生态向国产算力生态进行底层适配。

## 5. 为什么值得持续关注
ROLL 在当前 RL 生态中的独特价值在于其 **大规模与异构算力适配能力**：
1.  **打破硬件锁定**：PR #380 显示项目正在实质性推进对 NPU Megatron 的支持。在当前大模型训练算力紧缺且多元化的背景下，能够同时支持 CUDA 和国产 NPU 的大规模 RL 框架极具生产落地价值。
2.  **面向大规模的工程化尝试**：从 Issue #408 可以看出，ROLL 对显存管理（如 `expandable_segments`）有特定的优化策略，虽然这在旧内核上引发了兼容性问题，但也侧面反映了项目在探索高性能显存管理机制以满足 RLHF 等显存密集型场景的需求。

---
*数据来源：GitHub Repo alibaba/ROLL*

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# ROCK 项目 RL 日报 (2026-03-29)

## 1. 今日速览
过去 24 小时内，alibaba/ROCK 项目保持了较高的维护活跃度，重点集中在**基础设施稳定性优化**与 **SDK 生态扩展**。社区贡献者修复了 Ray 集群在 CI 环境下的磁盘空间瓶颈问题，并持续改进 Agent 框架的内部实现。此外，TypeScript SDK 的提交活跃度表明项目正在向多语言支持迈进。

- **核心修复**：解决了 Ray 临时目录导致 `/tmp` 空间不足引发的 Sandbox 构建失败问题。
- **生态进展**：TypeScript SDK PR 仍有更新，Agent Run 能力已合入。

## 2. 版本发布
- **无新版本发布**。

## 3. 重点 Issues

1.  **[稳定性] Ray 临时目录可配置化 (Issue #693) [CLOSED]**
    -   **详情**：针对 CI/CD 环境 `/tmp` 磁盘空间有限导致 Ray 沙箱启动失败 (`Errno 28: No space left on device`) 的问题，提出了支持自定义 `temp_dir` 的需求。
    -   **链接**：[alibaba/ROCK Issue #693](https://github.com/alibaba/ROCK/issues/693)

2.  **[观测性] 修复 OpenTelemetry 测试导出错误 (Issue #72) [OPEN]**
    -   **详情**：持续追踪测试环境中 OLTP 指标导出的 Bug。虽然 Issue 创建于去年，但近期有新的 PR (#697) 尝试通过 `InMemoryMetricReader` 解决此问题。
    -   **链接**：[alibaba/ROCK Issue #72](https://github.com/alibaba/ROCK/issues/72)

## 4. 关键 PR 进展

1.  **[Feat] 支持 Ray 临时目录配置 (PR #694) [CLOSED]**
    -   **内容**：实现了 Issue #693 的方案。在 `RayConfig` 中新增 `temp_dir` 字段，允许用户将 Ray 的会话数据和运行时环境克隆重定向至非系统盘（如 `./tmp/ray`），显著提升大规模测试时的稳定性。
    -   **链接**：[alibaba/ROCK PR #694](https://github.com/alibaba/ROCK/pull/694)

2.  **[Feat] 支持 Agent Run 能力 (PR #681) [CLOSED]**
    -   **内容**：合入了支持 "HarborStyle" Agent 的相关代码（关联 Issue #690），增强了 ROCK 在 Agent 编排与执行方面的核心能力。
    -   **链接**：[alibaba/ROCK PR #681](https://github.com/alibaba/ROCK/pull/681)

3.  **[SDK] 新增 TypeScript SDK (PR #492) [OPEN]**
    -   **内容**：社区持续更新 TypeScript SDK，支持沙箱管理、文件系统操作及 Agent 框架。这标志着 ROCK 正在打破 Python 的边界，向更通用的 RL 基础设施演进。
    -   **链接**：[alibaba/ROCK PR #492](https://github.com/alibaba/ROCK/pull/492)

4.  **[Fix] 修正 Ray temp_dir 路径规范 (PR #696) [CLOSED]**
    -   **内容**：快速修正了 PR #694 中的路径命名，将 `./tmp/ray` 调整为项目约定的 `./.tmp/ray`，保持代码库整洁。
    -   **链接**：[alibaba/ROCK PR #696](https://github.com/alibaba/ROCK/pull/696)

## 5. 为什么值得 RL 生态关注

ROCK 正在从单一的 RL 训练框架转型为**跨语言的 Agent 基础设施**。

1.  **工程化深度**：通过对 Ray `temp_dir` 的精细化控制（#694），项目展示了处理分布式 RL 基础设施中棘手的 IO 和存储问题的能力，这对于大规模并发训练至关重要。
2.  **多语言生态**：TypeScript SDK (#492) 的推进意味着 ROCK 有潜力连接 Web 前端与后端 RL 环境，这对于构建基于 Web 的 RL Demo、交互式 Agent 或在线学习平台具有极高价值。
3.  **Agent 原生支持**：随着 Agent Run 能力 (#681) 的合入，ROCK 正在将传统的 RL 环境封装与现代 LLM-based Agent 工作流结合，是值得关注的“RL + Agent”落地实践。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL 日报：Slime 项目动态 (2026-03-29)

**项目地址**：[THUDM/slime](https://github.com/THUDM/slime)

## 1. 今日速览
过去 24 小时内，Slime 项目活跃度主要集中在**工程优化**与**调试工具增强**。虽然没有新的版本发布，但社区提交了 3 个关键的 PR，涵盖了 Rollout 可视化工具引入和学习率调度器修复。Issue 区则持续关注 FSDP 下的 Context Parallelism (CP) 性能瓶颈及 Qwen3.5 模型的兼容性问题。

## 2. 版本发布
*   **无新版本发布**。

## 3. 重点 Issues

*   **[FSDP] Context Parallelism 性能优化提案**
    *   **编号**：[#1062](https://github.com/THUDM/slime/issues/1062)
    *   **分析**：这是一个标记为 `good first issue` 的性能优化任务。当前数据显示，开启 Context Parallelism (`cp=2`) 时，训练耗时是 `cp=1` 的两倍，通信开销显著。建议优化方向是减少 `all gather` 操作，转而计算局部以减少通信频率。这对于长上下文 RL 训练至关重要。
    *   **标签**：`Performance` `FSDP` `Long Context`

*   **[Bug] Qwen3.5 模型初始化失败**
    *   **编号**：[#1730](https://github.com/THUDM/slime/issues/1730)
    *   **分析**：用户在使用 `nightly-dev-20260307a` 镜像运行 Qwen3.5 时遇到初始化错误，涉及参数解析模块 (`arguments.py`)。该问题影响最新模型的支持度，需关注后续修复。
    *   **标签**：`Bug` `Model Compatibility`

## 4. 关键 PR 进展

*   **[Feature] 新增 Rollout Trace Timeline 查看器**
    *   **编号**：[#1776](https://github.com/THUDM/slime/pull/1776) (已合入)
    *   **详情**：引入了 Rollout 追踪和可视化工具（由 Z.ai 贡献）。这将极大提升 RL 训练过程的可观测性，方便开发者调试 Agent 的交互轨迹和时间线。
    *   **标签**：`Visualization` `Debugging`

*   **[Fix] 修复 Megatron LR Scheduler 重复加载问题**
    *   **编号**：[#1775](https://github.com/THUDM/slime/pull/1775)
    *   **详情**：修复了在 Optimizer State 未加载时，Megatron 后端的学习率调度器会在 `initialize_model_and_optimizer` 中被错误地重复 Fast-forward 的问题。确保了从 Checkpoint 恢复训练时的状态一致性。
    *   **标签**：`Bug Fix` `Training Stability`

*   **[Proposal] Hook 机制提案**
    *   **编号**：[#1774](https://github.com/THUDM/slime/pull/1774)
    *   **详情**：提议在 Slime 训练流程中注入 Hook 回调机制。这通常是为了提高框架的扩展性，允许研究人员在不修改核心代码的情况下介入训练循环（如自定义 Logging 或梯度处理）。
    *   **标签**：`Architecture` `Extensibility`

## 5. 为什么值得关注
Slime 作为一个强调大规模分布式训练的 RL 框架，正在积极解决**长上下文训练**中的通信瓶颈（Issue #1062），这对于当前 LLM+RL 的范式（如 Long RL）具有核心价值。此外，项目正在快速迭代调试工具（PR #1776 Visualizer）和底层训练稳定性修复（PR #1775），表明团队在大力投入工程基建，使其能够承载更复杂的大模型强化学习任务。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL 日报：AReaL 项目动态 (2026-03-29)

## 1. 今日速览
AReaL (inclusionAI/AReaL) 在过去 24 小时内 **代码库静默**，无新版本发布或 PR 更新。社区焦点高度集中在 **2026 Q1 路线图** 的讨论与定稿上，该 Issue 在昨日（3月28日）再次活跃，显示了项目方对长周期规划与外部贡献的重视。

## 2. 版本发布
*   **无新版本发布**。

## 3. 重点 Issues
*   **[#907 [Roadmap] 2026 Q1 Milestones](https://github.com/inclusionAI/AReaL/issues/907)**
    *   **状态**: Open
    *   **标签**: `help wanted`, `call-for-contribution`, `roadmap`
    *   **动态**: 该 Issue 创建于 2 月，于昨日（3月28日）迎来重要更新。目前累计 16 条讨论。
    *   **内容分析**: 这是一个跨越至 2026 年 4 月的长线开发计划。文档明确将开发任务分为 "On-going"（进行中）和 "Planned"（计划中），旨在引导贡献者定位高影响力区域。鉴于其 `help wanted` 标签，这是目前社区贡献者介入 AReaL 核心开发的最佳切入点。

## 4. 关键 PR 进展
*   **无 PR 更新**。过去 24 小时内无新的代码提交或 Pull Request 活动，推测核心团队可能处于代码整合期或专注于内部规划。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管短期代码更新静默，AReaL 依然值得 RL 从业者重点关注，原因如下：
1.  **明确的贡献指引**: 通过 Issue #907 可以看出，项目并非处于维护停滞状态，而是在进行长周期（至2026年）的架构演进。清晰的 Roadmap 标签（`call-for-contribution`）降低了开源贡献的门槛。
2.  **大规模训练探索**: AReaL 定位为 A Real Evolutionary Approach，通常涉及大模型强化学习的高吞吐量与系统优化，其 Roadmap 中提及的增强功能往往代表了 RL System 层面的前沿探索。
3.  **生态开放性**: 专门开设 Roadmap 讨论帖并保持高频互动，表明维护者积极寻求社区共建，对于希望深入 RL 基础设施建设的开发者具有较高价值。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL 日报：TRL 生态追踪 (2026-03-29)

## 1. 今日速览
过去 24 小时内，TRL 仓库无新版本发布，无新增 Issue。社区活跃度主要集中在 **Pull Requests** 的迭代与维护上。共有 5 条 PR 更新，重点聚焦于 `GRPOTrainer` 的功能增强（工具调用过滤、信任区域优化）、CI/CD 基础设施优化以及代码重构。

## 2. 版本发布
*   **无**

## 3. 重点 Issues
*   **无新增**。
    *   *注：虽然无新 Issue，但 PR #5383 显示开发者正在解决历史遗留的 ZeRO 2/3 兼容性问题（Issue #4884）。*

## 4. 关键 PR 进展

### 功能增强
*   **[Feature] GRPOTrainer 支持样本级工具过滤**
    *   **PR #5398** [OPEN]：引入 `tools_column_name` 参数。允许在训练过程中针对每个数据样本指定可用的工具子集，提升了 Agent 训练时对工具调用的精细控制粒度。
    *   链接：[huggingface/trl PR #5398](https://github.com/huggingface/trl/pull/5398)

*   **[Algorithm] 引入 PSPO 信任区域方法**
    *   **PR #4548** [OPEN]：为 `GRPOTrainer` 添加了 PSPO (Probability Smoothing Policy Optimisation) 作为传统截断机制的替代方案。该方法通过向行为策略平滑概率来维持信任区域。
    *   链接：[huggingface/trl PR #4548](https://github.com/huggingface/trl/pull/4548)

### 维护与重构
*   **[Refactor] `GenerationConfig` 代码清理**
    *   **PR #5384** [CLOSED]：将 `disable_config=True` 参数从 `generate` 方法迁移至 `GenerationConfig`，旨在标准化生成配置接口。
    *   链接：[huggingface/trl PR #5384](https://github.com/huggingface/trl/pull/5384)

*   **[Test] 移除 ZeRO 2/3 + SFT + PEFT 测试的 xfail 标记**
    *   **PR #5383** [OPEN]：确认 Issue #4884 已在 `transformers 5.1.0` 中修复，移除了测试用例中的预期失败标记，确保 CI 能有效捕获未来的回归问题。
    *   链接：[huggingface/trl PR #5383](https://github.com/huggingface/trl/pull/5383)

*   **[CI] 修复 CI 极慢问题**
    *   **PR #5397** [OPEN]：向工作流文件中添加 `HF_TOKEN` 环境变量，解决因未认证请求导致的速率限制和下载缓慢问题，显著提升 CI 运行效率。
    *   链接：[huggingface/trl PR #5397](https://github.com/huggingface/trl/pull/5397)

## 5. 为什么值得继续关注
1.  **Agent 训练粒度深化**：PR #5398 表明 TRL 正在从通用的 RLHF 流程向更复杂的 Agent 场景下沉，支持 Sample-level 的工具过滤意味着能够训练更复杂的工具调用策略。
2.  **算法多样性**：除了标准的 PPO/GRPO，社区正在贡献 PSPO 等新算法（PR #4548），这显示了 TRL 作为 RL 算法试验田的定位依然稳固。
3.  **基础设施稳健性**：针对 Transformers 5.1.0 的适配（PR #5383）和 CI 性能优化（PR #5397）表明项目维护者正在积极消除大规模训练中的瓶颈（如 ZeRO 兼容性和 Hub 下载限速），这对企业级落地至关重要。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

# RL 日报：Tianshou 生态追踪 (2026-03-29)

## 1. 今日速览
Tianshou 仓库在过去 24 小时内整体趋于平稳，无新版本发布，无新增 Issue。唯一的动态集中在历史 PR 的状态更新上。

*   **Issues 更新**: 0 条
*   **PR 更新**: 1 条
*   **Releases**: 0 个

---

## 2. 版本发布
过去 24 小时内无新版本发布。

---

## 3. 重点 Issues
过去 24 小时内无新增或更新的 Issues。

---

## 4. 关键 PR 进展
过去 24 小时内记录了 1 条 PR 更新，主要涉及高层 API 的网络结构复用问题。

*   **[#1128 [CLOSED] [bug, high-level-api] Support Actor preprocessing network reuse for continuous case, fixes in DQN network](https://github.com/thu-ml/tianshou/pull/1128)**
    *   **状态**: Closed
    *   **作者**: opcode81
    *   **更新时间**: 2026-03-28
    *   **核心内容**: 该 PR 旨在修复高层 API 中的 Bug，重点在于支持连续动作空间下 Actor 预处理网络的复用，并修复了 DQN 网络的相关问题。尽管创建于 2024 年，该 PR 在昨日进行了最后的状态确认或维护操作。
    *   **进展**: 已合并文档更新与代码格式化，但测试覆盖（Tests）标记为未完成。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管近期代码提交频率较低，Tianshou 依然是 PyTorch 强化学习生态中**模块化设计**的标杆项目：

1.  **高层抽象与灵活性并存**：如 PR #1128 所示，项目持续优化 `high-level-api`，致力于解决网络复用和预处理等工程痛点。这对于需要快速验证算法且对网络结构有定制化需求的研究者极具价值。
2.  **学术与工程的平衡**：作为清华机器学习团队（thu-ml）维护的项目，Tianshou 对前沿算法（如 Offline RL, Model-based RL）的实现通常紧随论文发表，且代码质量普遍高于社区个人项目。

**链接**: [https://github.com/thu-ml/tianshou](https://github.com/thu-ml/tianshou)

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL 日报：OpenRLHF 生态观察 (2026-03-29)

## 1. 今日速览
过去 24 小时，OpenRLHF 仓库处于 **低活跃度维护状态**。无代码合并或版本发布。社区焦点集中在 **Qwen3.5 模型的兼容性适配**，这也是当前用户反馈最强烈的痛点。

## 2. 版本发布
- **无新版本发布**。
- 当前用户主要基于 `openrlhf-0.9.5` 进行测试和开发。

## 3. 重点 Issues
### #1194 [OPEN] Qwen3.5-4B 训练兼容性问题
- **状态**: 待解决 | **热度**: 👍 0 | **评论**: 5
- **链接**: [OpenRLHF/OpenRLHF Issue #1194](https://github.com/OpenRLHF/OpenRLHF/issues/1194)
- **技术细节**: 
    - 用户在使用 `openrlhf-0.9.5` 版本配合 `Qwen3.5-4B` 进行 PPO 训练（脚本 `train_ppo_ray.py`）时遇到阻断性错误。
    - 错误发生在 Forward 阶段初期（0/28 progress），疑似模型架构或底层算子与现有代码逻辑不兼容。
    - 该 Issue 自 3 月 15 日开启后，截至 3 月 28 日仍有持续讨论，表明新基座模型的适配是当前核心需求。

## 4. 关键 PR 进展
- **过去 24 小时无 PR 更新**。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
OpenRLHF 作为高质量 RLHF 实现，其价值在于对新 SOTA 模型的快速响应能力。当前 Issue #1194 反映了社区对 **Qwen3.5** 系列模型强对齐需求的紧迫性。虽然目前代码层面处于静默期，但针对新架构（如 Qwen3.5）的适配补丁通常是该类项目爆发式更新的前奏。对于需要定制化训练最新 LLM 的工程师而言，密切关注该 Issue 的解决方案是当前最高优先级的任务。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL 日报：verl 项目动态 (2026-03-29)

## 1. 今日速览
过去 24 小时内，verl 项目保持高活跃度，**Issue 更新 8 条，PR 更新 15 条**。社区焦点集中在 **Qwen3.5 系列模型的适配与调优**（特别是 GRPO 训练），以及 **底层架构的异构计算支持**（NPU/MindSpeed）。值得关注的是，出现了一个关于 **Agent 抽象层** 的新 RFC，预示着项目正向更复杂的 Agentic RL 场景扩展。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues

*   **[RFC] Agent 抽象与轨迹网关**
    Issue [#5790](https://github.com/verl-project/verl/issue/5790) 提出了引入 `AgentFramework` 基类和 `Trajectory Gateway` 的建议，旨在解耦 Agent 生命周期管理与奖励计算，支持更复杂的多轮交互式 RL 场景。

*   **[Bug] Qwen3.5 + Megatron + vLLM 组合报错**
    Issue [#5659](https://github.com/verl-project/verl/issue/5659) 报告了在使用 `Megatron` 后端与 `vLLM` 结合训练 Qwen3.5 2B 模型时出现兼容性问题，目前社区正在排查环境依赖（Transformers 5.3.0 / Megatron 0.16.0）。

*   **[Bug] Qwen3.5 RoPE 报错**
    Issue [#5772](https://github.com/verl-project/verl/issue/5772) 指出 Qwen3.5 在特定配置下遇到 `rope_utils` 的维度索引错误。

*   **[Bug] NPU 环境下 Qwen2.5-VL 补丁失效**
    Issue [#5788](https://github.com/verl-project/verl/issue/5788) 显示在 NPU 上使用 FSDP 训练 Qwen2.5-VL 时，`npu_patch` 无法找到正确的 `Qwen2RMSNorm` 模块。

## 4. 关键 PR 进展

*   **[Feat] Qwen3.5 FSDP GRPO 训练支持**
    PR [#5682](https://github.com/verl-project/verl/pull/5682) 新增了 Qwen3.5 Transformer 适配器及 GRPO 训练脚本，支持 27B/35B 模型，完善了对最新基座模型的支持。

*   **[Feat] MindSpeed LLM 后端引擎 (NPU)**
    PR [#5680](https://github.com/verl-project/verl/pull/5680) 正在为 NPU 设备添加 `mindspeedllm` 后端引擎支持，提升了框架在国产硬件上的兼容性。

*   **[Feat] vLLM Rollout 支持 KV Cache FP8**
    PR [#4435](https://github.com/verl-project/verl/pull/4435) 正在推进对 vLLM 推理阶段 KV Cache 的 FP8 量化支持，预计将显著降低长序列推理的显存占用。

*   **[Feat] FlowGRPO 扩展至多模态**
    PR [#5716](https://github.com/verl-project/verl/pull/5716) 添加了 `DiffusionAgentLoopWorker`，开始支持基于扩散模型的图像/视频 Rollout，为多模态 RLHF 铺路。

*   **[Fix] CI 内存溢出修复**
    PR [#5791](https://github.com/verl-project/verl/pull/5791) 修复了全异步测试用例中分配权重传输缓冲区导致的 OOM 问题，保障了 CI 稳定性。

*   **[Fix] SGLang LoRA 适配器路径修复**
    PR [#5769](https://github.com/verl-project/verl/pull/5769) 修复了 SGLang Rollout 在非合并 LoRA 模式下的权重释放错误。

## 5. 为什么值得持续关注

verl 正在从单一的 LLM PPO/GRPO 训练框架向**全栈、多模态、异构**的 RL 基础设施演进：
1.  **前沿模型支持极快**：社区迅速跟进 Qwen3.5 等最新 SOTA 模型，解决了工业界最头疼的版本适配问题。
2.  **架构解耦与增强**：引入 Agent Abstractions (RFC #5790) 和 FlowGRPO (PR #5716)，表明 verl 正突破纯文本 RLHF，向 Agent 和多模态生成领域纵深。
3.  **硬件生态开放**：对 NPU (Ascend) 的积极支持（PR #5680, #5788），使其在非 CUDA 生态中也具备了极强的竞争力。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# Open Instruct RL 日报摘要 (2026-03-29)

## 1. 今日速览
过去 24 小时内，Open Instruct 仓库活跃度主要集中在 **工程化维护与性能优化**。虽然没有新的版本发布或 Issue 反馈，但有 4 个 PR 更新，核心贡献者 `finbarrtimbers` 推动了多项关键改进，涉及 Flash Attention 自动化配置、CI/CD 解耦（离线化）以及 GRPO 算法指标的标准化。

## 2. 版本发布
- **无新版本发布**

## 3. 重点 Issues
- **无新增或更新的 Issues**

## 4. 关键 PR 进展

- **[Feature] Flash Attention 自动配置与死锁修复**
  - **PR**: [#1567 Automatically configures flash attention](https://github.com/allenai/open-instruct/pull/1567) `[OPEN]`
  - **详情**: 移除了手动配置 `use_flash_attn` 的需求，改为从模型配置中自动检测 `attn_implementation`。此举统一了 DPO、GRPO 和 SFT 的注意力后端检测逻辑。同时修复了 vLLM engine 启动导致的 GPU 测试死锁问题。
  - **影响**: 降低用户配置门槛，提升代码鲁棒性。

- **[Refactor] CI 流程离线化**
  - **PR**: [#1563 Fixes the CI and removes requirement to access the network during CI](https://github.com/allenai/open-instruct/pull/1563) `[CLOSED]`
  - **详情**: 修改了 CI 机制，将原本需要从 Hugging Face Hub 实时下载的 networks/tokenizers 改为通过 `git lfs` 存储的二进制 blob。
  - **影响**: 消除外部网络依赖，显著提升 CI 稳定性和执行速度，已合并。

- **[Align] GRPO 指标对齐**
  - **PR**: [#1552 Make grpo.py metrics match grpo_fast.py](https://github.com/allenai/open-instruct/pull/1552) `[OPEN]`
  - **详情**: 旨在使 `olmo_core_train_modules.py` 中的 `train_batch()` 指标与高性能版 `grpo_fast.py` 完全对齐。统一了包括 `loss/policy_avg`、`policy/clipfrac_avg`、`val/ratio` 以及 4 种 KL 估计器在内的关键指标命名。
  - **影响**: 便于开发者在不同实现版本间进行性能调试和对比，确保实验数据一致性。

- **[WIP] 开发中分支**
  - **PR**: [#1555 WIP](https://github.com/allenai/open-instruct/pull/1555) `[OPEN]`
  - **详情**: 作者 `mnoukhov` 正在进行的开发工作，昨日有更新，暂无详细描述。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
Open Instruct 正在从单纯的"训练脚本集合"向**工业级 RL 基础设施**演进。
1.  **深度集成 OLMo 架构**: 通过 PR #1552 可以看出，项目正在深度整合 `olmo_core` 训练模块，这对于基于 OLMo 系列模型进行前沿 RLHF（特别是 GRPO 算法）研究至关重要。
2.  **工程化标杆**: PR #1563 彻底解决了开源项目 CI 常因网络波动失败的问题，通过 Git LFS 实现完全离线测试，体现了 AllenAI 维护高质量代码库的决心。
3.  **自动化体验**: PR #1567 对 Flash Attention 的自动配置反映了项目致力于简化训练堆栈，减少环境配置中的人为错误，这对于快速迭代的 RL 实验极具价值。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# CleanRL RL 日报摘要 (2026-03-29)

## 1. 今日速览
过去 24 小时内，CleanRL 仓库整体趋于平静，无代码合并或版本发布。社区焦点集中在 **Gymnasium v1.2.3 兼容性**问题上，针对 MuJoCo v5 环境的 API 变更引发的 Bug 正在引起用户注意。

- **Issues 活跃度**: 1 条更新
- **PR 活跃度**: 0
- **Release**: 0

---

## 2. 版本发布
过去 24 小时内**无新版本发布**。

---

## 3. 重点 Issues
今日唯一的动态来自关于 Gymnasium 最新版本兼容性的 Bug 反馈。

*   **[#545] KeyError: 'final_observation' (Gymnasium v1.2.3 & MuJoCo v5 兼容性问题)**
    *   **状态**: `[OPEN]`
    *   **作者**: thanhtnguyen10
    *   **摘要**: 用户在升级 Gymnasium 至 `v1.2.3` 以运行 MuJoCo v5 环境时，遇到 `KeyError: 'final_observation'`。分析指出，根本原因在于 Gymnasium 更新了 `envs.step(actions)` 的返回值结构，特别是 `infos` 字典中关于最终观测值的键名或逻辑发生了变化，导致现有 CleanRL 代码无法正确解析终止状态的数据。
    *   **链接**: [vwxyzjn/cleanrl Issue #545](https://github.com/vwxyzjn/cleanrl/issues/545)

---

## 4. 关键 PR 进展
过去 24 小时内**无 PR 更新**。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注
CleanRL 依然是强化学习社区中**算法可读性**与**实现透明度**的黄金标准。今日 Issue #545 的出现恰恰说明了其在快速迭代的 RL 基础设施（如 Gymnasium/MuJoCo）中的**敏感度**：
1.  **暴露底层变更**: Cleanrl 极少封装高层抽象，直接调用底层 API。当 Gymnasium 等依赖库发生破坏性更新（如 `step` 返回值变动）时，CleanRL 往往是最早感知并需要响应的项目，这使得它成为监控 RL 基础设施稳定性的极佳风向标。
2.  **教育与研究价值**: 对于希望深入理解 RL 循环细节（而非被框架掩盖）的研究者，CleanRL 对此类 API 变更的修复过程本身就是极佳的学习材料。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

# RL 日报：rl_games 生态动态 (2026-03-29)

## 1. 今日速览
过去 24 小时内，`rl_games` 仓库活动主要集中在**底层架构升级**与**算法调试**。虽然无新版本发布，但社区围绕 SAC 算法的有效性展开了高密度讨论（单 Issue 评论已达 21 条），同时项目作者提交了对 NVIDIA Warp 的支持，标志着该库正在向 GPU 并行计算生态进一步靠拢。

## 2. 版本发布
- **无新版本发布**。

## 3. 重点 Issues
- **#341 [OPEN] SAC 算法收敛性/实现问题探讨**
  - **链接**: [Denys88/rl_games Issue #341](https://github.com/Denys88/rl_games/issues/341)
  - **详情**: 用户 `ASDAlexander77` 报告在无人机模拟环境中，相比 SB3 (Stable Baselines3)，`rl_games` 的 SAC 实现无法在相同迭代次数内收敛。
  - **分析**: 这是一个高热度讨论帖（21 条评论），核心关注点在于 SAC 在复杂连续控制任务中的实现差异。这提示开发者在将 `rl_games` 用于非 IsaacGym 的自定义环境时，需注意超参数调整或潜在的算法实现细节差异。

## 4. 关键 PR 进展
- **#342 [OPEN] 新增 NVIDIA Warp 环境支持**
  - **链接**: [Denys88/rl_games PR #342](https://github.com/Denys88/rl_games/pull/342)
  - **摘要**: 由作者 `Denys88` 提交。引入了 `WarpVecEnv` 适配器，支持 GPU 加速的 Warp 环境（`vecenv_type: WARP`），并附带了一个 GPU 内核运行的 `WarpCartPole` 示例。
  - **技术点**: 
    - 修复了 SAC 中 `has_cnn` 属性的 Bug。
    - 验证了 Warp 环境下的 PPO（离散+连续动作空间）。
  - **意义**: 显示了 `rl_games` 正在整合 NVIDIA 的下一代高性能物理/图形内核，旨在提升环境交互的 GPU 并行效率。

- **#343 [OPEN] 构建系统迁移至 UV**
  - **链接**: [Denys88/rl_games PR #343](https://github.com/Denys88/rl_games/pull/343)
  - **摘要**: 由 `ViktorM` 提交。移除了 Poetry 依赖管理，全面迁移至 UV（Astral 出品的高速 Python 包管理器）。
  - **技术点**: 更新了 README，修复了部分过时的 envpool 训练配置。
  - **意义**: 跟进现代 Python 工具链，大幅提升依赖解析和环境部署速度，改善开发者体验。

## 5. 为什么值得持续关注
尽管 Issue #341 暴露了 SAC 算法在特定场景下可能存在的不稳定性，但 PR #342 证明了 `rl_games` 依然是目前强化学习生态中**探索 GPU 并行化前沿技术**的桥头堡。

1.  **硬件加速同步**: 通过支持 NVIDIA Warp，该项目正在打破单纯的 IsaacGym 依赖，为利用通用 GPU 内核加速环境物理计算提供了新的接口。
2.  **快速迭代的工作流**: 引入 UV 工具链意味着该项目在工程化维护上非常激进，适合追求最新技术栈的开发者。

**总结**: 如果你关注 RL 中的 GPU 并行计算或需要高性能的 PPO 实现，PR #342 的合并进度值得追踪；但若使用 SAC 算法，建议密切关注 Issue #341 的后续修复情况。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL 日报：Gymnasium 生态监测 (2026-03-29)

## 1. 今日速览
过去 24 小时内，Gymnasium 仓库整体活跃度较低。无新增代码发布，无新增 Issue 讨论。仅有一项关于第三方环境文档的 PR 完成关闭。

## 2. 版本发布
*   **无新版本发布**

## 3. 重点 Issues
*   **无新增或更新 Issues**

## 4. 关键 PR 进展
*   **[#1551 [CLOSED] Add external environment firecastrl](https://github.com/Farama-Foundation/Gymnasium/pull/1551)**
    *   **作者**: Shreyas-bellary
    *   **进展**: 该 PR 已合并/关闭。
    *   **内容**: 在第三方环境文档中新增了 **Firecastrl** 环境。
    *   **技术细节**: 这是一个兼容 Gymnasium 的野火模拟环境。其核心特性包括基于物理信息的火势蔓延动力学以及基于直升机的消防策略。
    *   **生态意义**: 该 PR 特别在文档中创建了 "Environmental / Climate environments"（环境/气候环境）新分类，标志着 Gymnasium 正式将 RL 应用边界拓展至气候与灾害应对领域。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日核心代码无更新，但 PR #1551 体现了 Gymnasium 作为 **RL 互操作性标准** 的核心价值：
1.  **领域拓展**: 通过引入 Firecastrl 等环境，Gymnasium 正在降低 AI for Science（如气候模拟、灾害控制）的入门门槛，不再局限于传统的游戏或机器人控制。
2.  **生态聚合**: 作为 Farama Foundation 的核心项目，它持续充当第三方环境开发的**事实标准接口**。开发者对其 API 的 adherence（遵循）确保了算法复用的高效性。

---
*数据源: GitHub (Farama-Foundation/Gymnasium)*
*分析师: RL Ecosystem Bot*

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL 日报：Stable Baselines3 (SB3) 技术摘要
**日期：** 2026-03-29
**数据源：** github.com/DLR-RM/stable-baselines3

### 1. 今日速览
过去 24 小时内，SB3 仓库活跃度主要集中在**性能优化与工作流现代化**方向。虽然无新版本发布，但社区提交了关于 `torch.compile` 的代码示例 PR，响应了此前关于集成 Intel 扩展的长期讨论。这表明项目正处于通过适配 PyTorch 新特性来提升推理与训练速度的迭代期。

### 2. 版本发布
*   **无新版本发布**（最近 24 小时内）。

### 3. 重点 Issues
*   **#1564 [Feature Request] torch compile / integrating intel extension for pytorch**
    *   **标签：** `documentation` `enhancement` `good first issue` `help wanted`
    *   **状态：** OPEN (创建于 2023-06-20，昨日有更新)
    *   **核心内容：** 请求将 **Intel Extension for PyTorch (IPEX)** 集成到 SB3 中，以优化在 Intel 处理器上的算力利用。同时讨论了利用 PyTorch 2.0+ 的 `torch.compile` 特性进行通用加速的可行性。该 Issue 旨在解决 SB3 在特定硬件上的性能瓶颈。
    *   **链接：** [DLR-RM/stable-baselines3 Issue #1564](https://github.com/DLR-RM/stable-baselines3/issues/1564)

### 4. 关键 PR 进展
*   **#2234 Added example for torch.compile**
    *   **作者：** sdace9719
    *   **状态：** OPEN (创建于 2026-03-28)
    *   **核心内容：** 该 PR 直接响应了 Issue #1564。提交者并未直接修改核心库代码以硬编码 IPEX，而是添加了使用 **`torch.compile`** 的示例代码。这允许用户在不修改 SB3 内部架构的情况下，通过 PyTorch 原生编译技术获得潜在的速度提升。
    *   **链接：** [DLR-RM/stable-baselines3 PR #2234](https://github.com/DLR-RM/stable-baselines3/pull/2234)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管 SB3 已经是一个成熟的库，但今日的动态表明它正在积极适应深度学习底层技术的演进：
1.  **性能适配：** 针对推理和训练速度的优化一直是 RL 落地的痛点。社区正在通过 `torch.compile` 和 IPEX 探索无需重写算法核心即可获得性能提升的路径。
2.  **低门槛参与：** Issue #1564 被标记为 `good first issue` 和 `help wanted`，说明维护者欢迎社区贡献关于硬件加速的文档和示例，这是保持开源项目活力的关键。
3.  **生态兼容性：** 从单纯的算法实现转向关注如何与最新的 PyTorch 特性（如编译器）协同，确保了 SB3 在未来几年依然是可靠的 RL 基准工具。

</details>