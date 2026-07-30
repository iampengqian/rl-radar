# RL 开源生态日报 2026-07-31

> 生成时间: 2026-07-30 22:19 UTC | 覆盖项目: 15 个

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
当前开源强化学习（RL）生态呈现出明显的**“两极分化与场景聚拢”**态势：
1. **大模型 RLHF/Agent 框架占据绝对主导**：以 verl、TRL 为首的核心项目正在以极高的迭代频率，死磕大模型对齐与 Agentic RL 的底层工程痛点；AReaL、slime、Open Instruct 等项目紧随其后，在分布式训练与权重同步上发力。
2. **传统/经典 RL 库进入静默维护期**：以 Gymnasium、Stable Baselines3、Tianshou、PettingZoo 为代表的传统环境与算法库在过去 24 小时内无任何代码活动，说明生态已高度成熟或关注度已彻底向 LLM 赛道转移。
3. **游戏与物理仿真 RL 保持微观迭代**：CleanRL、rl_games 等聚焦于底层算法复现与高性能仿真的项目保持着低频但关键的 Bug 修复，维护着极高的代码纯度。

## 各项目活跃度对比
今日有真实代码或问题动态的项目共 8 个，其余 6 个项目（Gymnasium, OpenRLHF, PettingZoo, ROCK, ROLL, Stable Baselines3, Tianshou）在过去 24 小时内无活动。活跃项目对比如下：

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 24 | 24 | 0 | 深度整合 Megatron/SGLang，向多硬件生态（昇腾）与最新架构（DeepSeek V4）极速扩张 |
| **TRL** | 6 | 24 | 0 | 聚焦 FSDP2/vLLM 稳定性与 Agentic RL 基建，深度修复 DPO/GRPO 等算法的底层 Bug |
| **torchtune** | 1 | 3 | 0 | 死磕显存开销削减与配置鲁棒性，向高容错的 RLHF 基础设施演进 |
| **AReaL** | 0 | 3 | 0 | 攻克分布式死锁痛点，推进单机共存与 Ray 调度器整合 |
| **slime** | 2 | 1 | 0 | 真实反映 Colocate 模式与多卡环境下的底层 IPC 显存共享痛点 |
| **Open Instruct** | 0 | 2 | 0 | MoE 模型在线权重同步的工程落地，严格把控集群算力成本 |
| **rl_games** | 0 | 1 | 0 | 修复向量化环境自动重置时的脏数据混入问题，保障高吞吐训练正确性 |
| **CleanRL** | 0 | 1 | 0 | 推进 JAX 实验代码的现代化依赖兼容 |

## 共同关注的研究与工程方向
**研究侧信号：**
1. **新型架构与算法的极速适配**：对线性注意力机制（Qwen3-next）、超大规模 MoE（DeepSeek V4, Qwen3-MoE）的 RL 训练支持成为核心竞赛点；Muon 等新一代优化器开始被正式接入 RL 训练后端。
2. **多模态与 Agent 交互（Agentic RL）**：VLM（视觉语言模型）在多轮 Tool Call 中的张量对齐与奖励模型构建成为重点研究方向；基于蒸馏（DOPD）与自我进化（Self-play）的 RL 范式正在落地。
3. **细粒度损失对齐**：社区对 DPO/APO/SimPO 等变体损失函数在极端边界条件（如截断、空补全、负散度）下的数学正确性提出了极高的要求。

**工程/基础设施侧信号：**
1. **Colocate（训推一体）与显存零开销优化**：Megatron Actor 与 vLLM/SGLang Rollout 在同一物理 GPU 上的分时复用成为主流趋势（见 AReaL, slime），通过极简的 AWEX/CUDA IPC 机制突破显存瓶颈。
2. **异步推理与分布式通信底座加固**：解决变长序列导致的 FSDP/Megatron 微批次不对齐死锁、异步推理沙盒的资源泄漏、以及 vLLM 权重同步的硬件泛化性问题。

## 差异化定位分析
1. **verl & TRL（前沿算法与全栈基建双引擎）**：两者是当前 LLM RL 生态的绝对风向标。verl 侧重于通过 Megatron-Bridge 抹平软硬件生态壁垒（如支持昇腾 NPU），极具“大一统”全栈框架的野心；TRL 则依托 HuggingFace 生态，在 FSDP2 细节优化、各类算法变体实现上展现出极强的严谨度。
2. **AReaL, slime & Open Instruct（工业级高压训练排雷兵）**：这三个项目的动态高度务实，直指多节点分布式训练中的顽固 Bug（如 slime 的 GPU 字典序分配、AReaL 的 Ragged Transport 死锁）。它们是真正在千卡/万卡集群上打磨出来的硬核工程参考。
3. **rl_games & CleanRL（经典与高性能仿真的坚守者）**：不受 LLM 狂热影响，rl_games 专注于解决 Isaac Gym 等超高吞吐量场景下的向量化环境交互 Bug；CleanRL 则保持其“单文件高可读”特性，为研究界提供最透明的算法基线。

## 社区热度与成熟度
当前 RL 开源社区的热度呈现**高度向头部 LLM 框架集中**的特征。
verl（48 项更新）与 TRL（30 项更新）的社区反馈闭环极快，Issue 动辄引发架构级讨论与 PR 迅速响应，处于蓬勃爆发期；相反，传统离散/连续控制 RL 生态（如 Gymnasium, SB3, Tianshou）已进入高度成熟的静默期，过去 24 小时毫无波澜，属于“随用随查”的稳定工具箱层。torchtune 则在 PyTorch 核心团队加持下，稳步进行底层显存优化的渐进式迭代。

## 值得关注的趋势信号
1. **多硬件后端解耦成为下一站焦点**：Nvidia 算力垄断正在被打破。verl 发布的 Ascend NPU Q3 路线图及 80 行代码级轻量级 Adaptor，预示着未来 RL 框架必须具备原生跨硬件（CUDA/CNPU）的调度能力。
2. **MoE 模型实时权重同步的工程化破局**：随着 Qwen3-MoE、DeepSeek V4 成为标配，如何在不中断训练的情况下，将 Megatron/FSDP 训练栈的复杂专家路由张量，无损、极速地同步给 vLLM rollout 引擎，已成为工业界 RL 的核心竞争力（如 Open Instruct 的 live weight sync）。
3. **Agentic RL 的工程深水区显露**：长上下文 Tool Call 引发的张量不匹配、远程沙盒并发的网络资源泄漏（孤立进程）开始大量暴露，这标志着 Agentic RL 已越过理论原型期，正在向高并发、高稳定性的工业执行阶段迈进。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

** slime RL 项目日报 | 2026-07-31**

以下是针对开源强化学习框架 slime（github.com/THUDM/slime）今日（基于 2026-07-30 更新数据）的生态动态分析。

### 1. 今日速览
过去 24 小时内，slime 项目代码库活动主要集中在底层硬件调度与分布式训练 Bug 修复上。共收到 2 条 Issue 更新和 1 条 PR 更新，无新版本发布。社区开发者积极针对多卡环境下的设备映射及显存管理问题提交了修复方案。

### 2. 版本发布
无。项目当前无新增 Release。

### 3. 重点 Issues
今日有两项关键技术 Issue 引发了讨论，均聚焦于底层系统与硬件调度逻辑：

*   **单机多卡环境下的 GPU 排序与 Device Map 错误** [#2245](https://github.com/THUDM/slime/issues/2245)
    *   **作者**: qq1243196045
    *   **摘要**: 开发者反馈在单机 16 卡环境下，系统由于对 `gpu_id` 采用了字符串排序（结果为 0, 1, 10, 11... 2, 3...），导致非预期的 GPU 分配顺序，进而触发后续的 Device Map 映射错误。这是一个典型的多卡拓扑解析逻辑漏洞。
*   **Colocate 模式下显存卸载引发 CUDA IPC 异常** [#2188](https://github.com/THUDM/slime/issues/2188)
    *   **作者**: Winnie-Lian
    *   **摘要**: 在结合 Megatron 后端、SGLang rollout 引擎，并开启 `--colocate`、`--offload-train` 及 `torch_memory_saver` 的复杂分布式训练场景下，首个 Colocate 权重更新阶段因 PyTorch CUDA IPC `_share_cuda_` 抛出 `cudaErrorInvalidValue` 而稳定崩溃。该问题直指 RL 训练中 Train 与 Infer 引擎显存共享与切换的核心痛点。

### 4. 关键 PR 进展
今日的唯一 PR 直接响应了上述的 GPU 排序 Bug，展现了社区的高效反馈闭环：

*   **fix: cast gpu_id to int in sort_key to prevent lexicographic ordering** [#2246](https://github.com/THUDM/slime/pull/2246)
    *   **作者**: qq1243196045
    *   **进展**: 针对 [Issue #2245](https://github.com/THUDM/slime/issues/2245) 的修复提交。作者通过在排序键（`sort_key`）中将 `gpu_id` 强制转换为整型（`int`），从根本上杜绝了按字典序排列导致的硬件分配错误。目前 PR 处于 Open 状态，等待 Maintainer Review 及合并。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
从今日的 Issue 与 PR 趋势可以看出，slime 正在被应用于**极度硬核且前沿的 RL 训练配置中**（如 Megatron + SGLang 的深度结合、Colocate 训推一体架构、CUDA 显存精细化管理）。这些在单机多卡及分布式集群中暴露出的底层数据类型错误与 IPC 显存共享痛点，证明了该项目正在真实的高压大规模 LLM 强化学习场景中被打磨。对于关注 RLHF/GRPO 训推协同调度、显存零开销优化的开发者和架构师而言，slime 的代码迭代和 Issue 讨论是解决工业级 RL 训练瓶颈的极佳参考样本。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 生态日报 | 2026-07-31

## 1. 今日速览
过去 24 小时内，AReaL（[github.com/inclusionAI/AReaL](https://github.com/inclusionAI/AReaL)）仓库无新增 Issue、无新版本发布。共有 **3 条处于 OPEN 状态的 PR** 迎来了更新，技术焦点集中在**多节点/分布式调度器兼容性修复**、**显存感知的分布式集体通信对齐**，以及**基于 AWEX 的单机（Colocate）Actor-Rollout 训练架构推进**。

## 2. 版本发布
- **无**。仓库近期未发布新 Release。

## 3. 重点 Issues
- **无**。过去 24 小时及近期均无活跃 Issue 更新。

## 4. 关键 PR 进展

以下 3 条 PR 均处于开放评审状态（[PR 列表概览](https://github.com/inclusionAI/AReaL/pulls)）：

- **[#1567] docs: 允许在 Agent Workflow 兼容性说明中使用 Ray Scheduler**
  - **作者**: wuallen57730 | **更新**: 2026-07-30
  - **链接**: [areal-project/AReaL PR #1567](https://github.com/areal-project/AReaL/pull/1567)
  - **摘要**: 纯文档修复。针对 7 月 21 日合并的 `RayScheduler` 重构（#1441，启动 HTTP RPC worker 子进程并支持 Ray 代理），更新了过时的兼容性文档。明确澄清 Agent workflows 和在线模式不再仅限 `local`/`slurm`，修复了文档与代码实际能力脱节的问题。

- **[#1566] fix(engine): 使 Ragged Transport 的填充操作（Padding）对目标安全**
  - **作者**: EazyReal | **更新**: 2026-07-30
  - **链接**: [areal-project/AReaL PR #1566](https://github.com/areal-project/AReaL/pull/1566)
  - **摘要**: 解决 RL 训练中长文本语义压缩后导致的 DP 与 PP 数据不均衡问题。当不同 rank 产生的微批次数量不一致时，FSDP 集体通信和 Megatron/Archon 流水线并行会卡死。该 PR 提供了一种 Objective-safe 的 padding 补齐机制，确保较短的 rank 不会提前停止从而导致通信死锁。

- **[#1500] [safe-to-test] feat(colocate): 支持 AWEX 单机共存 Actor-Rollout 训练**
  - **作者**: Le8r0nJames | **更新**: 2026-07-30
  - **链接**: [areal-project/AReaL PR #1500](https://github.com/areal-project/AReaL/pull/1500)
  - **摘要**: **重磅架构特性。** 实现了共享 GPU 的共存 RL 训练：Megatron Actor 与 SGLang Rollout 引擎分时复用相同的物理设备，通过 AWEX 进行权重传输。包含了带有标签化卸载/加载编排的 AWEX 权重同步写入器，以及实现 AWEX 共存逻辑的 SGLang 引擎插件。

## 5. 为什么这个项目值得在当前 RL 生态继续关注？

1. **攻克 LLM RLHF 核心痛点（通信死锁与显存瓶颈）**：
   大模型强化学习最大的工程痛点在于变长序列带来的分布式不稳定性。PR [#1566](https://github.com/areal-project/AReaL/pull/1566) 专门修复 FSDP/Megatron 架构下的 microbatch 数量不对齐问题，表明项目团队在解决工业级 RLHF 训练底层死锁方面正在进行深度的底层加固。
2. **拥抱 Colocate（单机共存）与极简权重传输架构**：
   当前主流 RL 训练正逐渐从 Actor 和 Rollout 物理分离，转向在同一 GPU 集群上的时分复用（Colocate）以极致压榨显存。PR [#1500](https://github.com/areal-project/AReaL/pull/1500) 引入了 AWEX 机制打通 Megatron 与 SGLang，直接切中当下 RL 推理与训练混合调度的前沿趋势，有望大幅降低部署成本。
3. **企业级分布式调度生态整合**：
   AReaL 正在快速完善对 Ray（PR [#1567](https://github.com/areal-project/AReaL/pull/1567)）、Slurm、Local 等多种异构计算集群的兼容性。结合其对 FSDP 与 Megatron/Archon 的支持，说明该项目正致力于成为兼容多种底层算力与并行策略的**统一 RL 框架**。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 2026年7月31日 TRL（Transformer Reinforcement Learning）开源项目日报摘要：

### 1. 今日速览
- **数据概览**：过去 24 小时内，TRL 仓库共有 6 条 Issue 更新，24 条 PR 更新，无新版本发布。
- **核心趋势**：今日的活动高度聚焦于 **核心 RL 算法的数值稳定性修复**（如 DPO/APO/CPO 损失函数与截断逻辑）、**分布式训练底座的完善**（FSDP2 权重同步与预计算）、以及 **Agentic RL（智能体强化学习）** 基础设施（多轮工具调用、沙盒并发关闭、IPv6 支持）的工程化落地。

### 2. 版本发布
- **今日无新版本发布**。

### 3. 重点 Issues
今日的 Issue 暴露了多个算法在特定边界条件或新特性下的数学逻辑与张量运算异常：

- **[CPO/SimPO] 截断导致空补全与 NaN 损失** ([#6548](https://github.com/huggingface/trl/issues/6548))
  - **问题**：在 CPOTrainer 中，成对响应的截断逻辑错误地使用了较长响应的长度作为统一基准，导致较短响应被完全截断，进而在 `loss_type="simpo"` 时产生 NaN loss。
- **[DPO] `apo_down` 损失函数散度应用不一致** ([#6441](https://github.com/huggingface/trl/issues/6441))
  - **问题**：DPOTrainer 的 `apo_down` loss 在处理其两项损失时，对 `f_divergence_type` 的应用逻辑不一致，偏离了 APO 论文公式 (Eqn 8) 的预期行为。
- **[GRPO] KL 偏差修正与序列级重要采样的广播冲突** ([#6586](https://github.com/huggingface/trl/issues/6586))
  - **问题**：当配置 `importance_sampling_level="sequence"` 时，系统将序列级别的比率直接广播到了 per-token KL 散度上，引发了逻辑上的不一致。
- **[RLOO/GRPO] 训练采样器边界 Bug** ([#4271](https://github.com/huggingface/trl/issues/4271))
  - **问题**：历史遗留的 `_get_train_sampler` 采样逻辑问题再次被推进更新。
- **[CI] 依赖库底层警告** (已关闭)
  - 维护者高效修复了由于上游 `transformers` 更新导致的 ROPE `device` 弃用警告 ([#6584](https://github.com/huggingface/trl/issues/6584))，以及 `bitsandbytes` 4-bit 量化块大小对齐警告 ([#6580](https://github.com/huggingface/trl/issues/6580))。

### 4. 关键 PR 进展
今日的 PR 修复了大量深层 Bug，并推进了前沿特性的兼容：

- **算法与损失函数修复**
  - **[#6593](https://github.com/huggingface/trl/pull/6593)** [CLOSED]: 修复 DPO `apo_down` 损失中 `rejected_logratios` 的使用错误。
  - **[#6588](https://github.com/huggingface/trl/pull/6588)** [OPEN]: 修复 CPO/ORPO 响应独立截断问题，防止空补全（对应 Issue #6548）。
  - **[#6572](https://github.com/huggingface/trl/pull/6572)** [CLOSED]: 修复实验性 BCO `_process_tokens` 中负截断边界导致的越界崩溃。
  - **[#5725](https://github.com/huggingface/trl/pull/5725)** [OPEN]: [gold] 补全了 `GOLDTrainer` 遗漏的序列级知识蒸馏 (`seq_kd`) 逻辑实现。

- **Agentic RL 与多模态推理基础设施**
  - **[#6286](https://github.com/huggingface/trl/pull/6286)** [OPEN]: 修复 GRPO 多轮工具调用中，VLM (如 Qwen3.5) 多模态字段引发的张量形状不匹配问题。
  - **[#6564](https://github.com/huggingface/trl/pull/6564)** [OPEN]: 优化 `AsyncGRPO` 关闭逻辑，并发处理在途的 Sandbox 会话，解决远程沙盒网络卸载导致的孤立进程泄漏。
  - **[#5911](https://github.com/huggingface/trl/pull/5911)** [OPEN]: 修复 `AsyncGRPO` 断点续训时，跳过数据批次意外触发无意义 vLLM 推理的资源浪费问题。

- **分布式训练 (FSDP2 / vLLM) 与硬件兼容**
  - **[#6527](https://github.com/huggingface/trl/pull/6527)** [OPEN]: 修复 FSDP2 下，无独立参考模型时 Reference log-prob 预计算引发的 CPU/GPU 张量错位。
  - **[#6592](https://github.com/huggingface/trl/pull/6592)** [OPEN]: 将 FSDP2 vLLM 权重同步中硬编码的 `cuda` 替换为 `accelerator.device`，提升硬件泛化性。
  - **[#6587](https://github.com/huggingface/trl/pull/6587)** [OPEN]: 修复 vLLM 通信器初始化时无法正确处理 IPv6 HTTP URLs 的网络底层问题。

- **PEFT / 量化兼容性**
  - **[#6591](https://github.com/huggingface/trl/pull/6591)** [OPEN]: 允许 GRPO/DPO/KTO 等算法在配置了 `target_parameters` 的 PEFT (>=0.20.0) 模型上创建冻结的 `"ref"` adapter。
  - **[#6295](https://github.com/huggingface/trl/pull/6295)** [CLOSED]: 修复单卡训练器中 `use_cpu=True` 被静默忽略，模型依然被强行加载到 GPU 的 Bug。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
当前的 PR 与 Issue 趋势表明，TRL 正在经历从“纯算法实现库”向“**复杂 Agentic RL 工程化基建**”的深度演进：
1. **死磕大尺度训练的工程稳定性**：随着模型体量和上下文增加，团队正倾注大量精力解决 FSDP2 + vLLM 联动（显存错位、权重同步）、以及 AsyncGRPO 异步推理与沙盒调度的资源死锁/泄漏问题。这是目前业界落地 RLHF/RLAIF 的最大工程痛点。
2. **紧跟前沿算法的细粒度调优**：对 SimPO、APO、BCO 等变体损失函数中散度计算、截断逻辑、负边界的修复，展现了极高的代码严谨度，确保了学术推导到工业落地的无损转化。
3. **拥抱多模态与复杂 Agent 交互**：针对 VLM 在多轮 Tool Call 中的张量对齐修复，以及底层 Dual On-Policy Distillation (DOPD) 的引入，证明了 TRL 正积极适配当前最具挑战性的多模态强化学习与 Agent 自我进化（Self-play/Self-distillation）场景。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

以下是为您生成的 verl 项目 2026 年 7 月 31 日 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，verl 仓库共更新 **24 个 Issues** 和 **24 个 PRs**，无新版本发布。社区活跃度极高，开发焦点集中在 **Megatron-Bridge 深度整合**、**多硬件后端适配（华为昇腾 Ascend NPU）**、**新型优化器（Muon）引入** 以及 **底层训练引擎（FSDP/vLLM）的性能与稳定性修复**。

### 2. 版本发布
**无新版本发布**（当前开发分支代号为 `0.9.0.dev`）。

### 3. 重点 Issues
*   **[底层架构] Ascend 硬件支持 2026 Q3 路线图** ([#6995](https://github.com/verl-project/verl/issues/6995))
    *   **摘要:** 官方发布了针对华为昇腾算力的 Q3 路线图。重点包括支持 GLM5.2 与 DeepSeek V4 模型，推进 FSDP-Turbo、MindSpeed-Bridge 及 megatron-bridge 的全面兼容，并引入 `uv` 进行包管理。
*   **[训练性能] 多模态 GRPO 训练速度探讨 (SGLang + Megatron)** ([#7203](https://github.com/verl-project/verl/issues/7203))
    *   **摘要:** 开发者基于 Geo3K 数据集，使用 8*H800 运行 Qwen3.5-9B 的多模态 GRPO 训练，稳态下耗时约 290s/step。发帖旨在确认这是否为预期性能瓶颈，寻求进一步调优空间。
*   **[模型 Bug] Qwen3-next-80B GSPO 训练 Rollout 乱码** ([#4917](https://github.com/verl-project/verl/issues/4917))
    *   **摘要:** 在 `0.7.0` 版本配合 vLLM 0.12 环境下，对 Qwen3-next-80B 进行 GSPO 训练时出现 Rollout 结果乱码问题，引发了关于线性注意力机制（flash-linear-attention）兼容性的讨论。
*   **[训练机制] 监督蒸馏 Loss 归一化 Bug** ([#7200](https://github.com/verl-project/verl/issues/7200))
    *   **摘要:** 开发者指出当前监督/蒸馏模式的 Loss 归一化计算错误地依赖于 micro-batch 的分区设置，可能导致梯度更新偏差。

### 4. 关键 PR 进展
*   **[新特性] Megatron 后端引入 Muon 优化器支持** ([#7120](https://github.com/verl-project/verl/pull/7120))
    *   **进展:** 已合并。打破了原生 Megatron 后端仅支持 AdamW 的限制，成功暴露并接入 Megatron-Core 的 `TensorParallelMuon`，呼应了社区此前的需求 ([#4966](https://github.com/verl-project/verl/issues/4966))。
*   **[新特性] DeepSeek V4 GRPO 支持** ([#6473](https://github.com/verl-project/verl/pull/6473))
    *   **进展:** 已合并。基于 Megatron-Bridge 实现 DeepSeek V4 的 GRPO 训练，完整适配 vLLM rollout 及 FP8/MXFP4 权重转换，后续大规模 MoE 模型训练得到保障。
*   **[架构优化] FSDP 支持 LoRA 与全秩 VLM 模块混合训练** ([#7187](https://github.com/verl-project/verl/pull/7187))
    *   **进展:** 打开。为 FSDP 路径引入 `modules_to_save` 语义。允许在冻结 LLM 主干进行 LoRA 微调的同时，全参训练多模态投影层等多模态特有模块。
*   **[多硬件] 昇腾 NPU 新增 megatron_adaptor 后端** ([#7142](https://github.com/verl-project/verl/pull/7142))
    *   **进展:** 已合并。提供了除 MindSpeed 之外的另一条 Ascend NPU 适配路径，仅用约 80 行代码的轻量级 shell 复用了通用的 MegatronEngine。
*   **[性能修复] vLLM 兼容性清理与 Rollout 修复** ([#7190](https://github.com/verl-project/verl/pull/7190), [#7207](https://github.com/verl-project/verl/pull/7207))
    *   **进展:** 清理并放弃了 vLLM 0.18.0 以下版本的冗余兼容代码；同时修复了 Partial Rollout 中断恢复时突破 `response_length` 限制导致产生无用冗余 Token 的性能损耗问题。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1.  **大模型前沿算法的极速落地：** verl 对最新架构（如 DeepSeek V4、Qwen3、线性注意力机制）和前沿 RL 算法（GSPO, Muon 优化器）的响应速度极快，是目前追踪 LLM/RLHF 训练前沿的绝佳工程参考。
2.  **打破软硬件生态壁垒：** 项目正在深度拆解并重构底层算力分发。通过 Megatron-Bridge 机制抹平框架差异，同时在非 Nvidia 生态（如华为 Ascend NPU、国产框架 MindSpeed）上投入重兵（Q3 路线图全面铺开），展现了成为**全栈、跨硬件 RL 框架**的野心。
3.  **多模态与 Agentic RL 的工程深水区探索：** 从近期的 Issue 和 PR 可以看出，verl 正在切实解决工业界痛点——包括多模态（VLM） projector 层的混合精度训练、Agentic 交互环境下的 vLLM rollout 效率、以及基于 GRM（生成式奖励模型）的确定性 Reward 路径构建，这些都是当前 RL 工程化最棘手且最具价值的技术难点。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

以下是为您生成的 torchtune 项目 2026-07-31 强化学习（RL）生态日报摘要：

### 1. 今日速览
过去 24 小时内，torchtune 仓库活动集中于底层训练性能优化与开发者体验提升。无新版本发布，新增/更新 Issue 1 条，新增/更新 PR 3 条，均由核心贡献者 `n-dlms` 与 `joecummings` 推动，聚焦于分布式训练显存开销削减、配置鲁棒性增强及文档同步。

### 2. 版本发布
* **无新版本发布**（保持平稳期）。

### 3. 重点 Issues
* **[#2700] [good first issue] 仅在 rank zero 记录配置日志** | 作者: `joecummings`
  * **摘要**: 目前 `config.log_config` 在 recipe 主循环中会在所有设备上执行，导致分布式训练时产生冗余日志。该 Issue 旨在修改逻辑，使其仅在 rank 0 触发。
  * **链接**: [meta-pytorch/torchtune Issue #2700](https://github.com/pytorch/torchtune/issues/2700)

### 4. 关键 PR 进展
* **[#2980] perf(recipes): 当 `gradient_accumulation_steps == 1` 时跳过 `scale_grads`** | 作者: `n-dlms`
  * **进展**: [OPEN] 提出针对大模型训练的显著性能优化。当无需梯度累积时，按 token 数量缩放梯度的操作是无效的（no-op）。跳过该步可省去对模型参数的一次完整读写。**影响评估**: 对于 80 亿参数（8B）的 bf16 模型，可直接节省约 32 GB 的显存开销，对资源受限环境下的 RLHF/PPOActor 模型微调极具价值。
  * **链接**: [meta-pytorch/torchtune PR #2980](https://github.com/pytorch/torchtune/pull/2980)
* **[#2979] feat(config): 对 CLI 覆盖未知顶层键的行为发出警告** | 作者: `n-dlms`
  * **进展**: [OPEN] 增强配置系统的鲁棒性。修复了 OmegaConf 静默合并未知 CLI 参数的问题（通常由用户拼写错误引起）。变更后，系统会对无效参数抛出警告，减少因配置错误导致的 RL 训练崩溃排错时间。
  * **链接**: [meta-pytorch/torchtune PR #2979](https://github.com/pytorch/torchtune/pull/2979)
* **[#2978] docs(readme): 将优化标志表切换为 Linear Cross Entropy** | 作者: `n-dlms`
  * **进展**: [OPEN] 文档同步。将 README 中的优化指令从已废弃的 `CEWithChunkedOutputLoss` 更新为 `LinearCrossEntropyLoss`，并附带了一个基准测试脚本 `scripts/bench_optimization_flags.py` 以验证 9 种组合的性能。
  * **链接**: [meta-pytorch/torchtune PR #2978](https://github.com/pytorch/torchtune/pull/2978)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
在当前的强化学习（尤其是 RLHF / DPO）生态中，**显存占用（VRAM overhead）**和**分布式通信开销**是制约超大策略模型训练的核心瓶颈。今日的 PR #2980 直接瞄准了这一痛点，通过消除冗余的张量读写操作（为 8B 模型节省 32GB 显存），为在同一集群内并行运行更大的 Reward Model 或维持更长的 RL 上下文窗口腾出了宝贵空间。此外，torchtune 持续在 OmegaConf 配置容错（#2979）和底层算子优化（#2978）上打磨，证明其正从一个纯粹的 SFT 库，稳步向高容错、高内存效率的 RLHF 基础设施演进。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

**Open Instruct RL 生态日报 (2026-07-31)**

**1. 今日速览**
过去 24 小时内，Open Instruct 仓库无明显异动。无新增 Issues，无新版本发布，仅 2 个正在进行的技术 PR (#1791, #1792) 发生了状态更新。整体处于常规迭代与底层优化阶段。

**2. 版本发布**
- 今日无新版本发布。

**3. 重点 Issues**
- 过去 24 小时无新增或更新的 Issues。

**4. 关键 PR 进展**
今日的活跃度集中在模型底层训练与集群任务调度优化上：

- **[PR #1791 [OPEN] Add Qwen3-MoE training and live weight synchronization support](https://github.com/allenai/open-instruct/pull/1791)** | 作者: undfined
  - **技术价值**：这是一项重磅的底层架构升级。该 PR 将 CUDA 训练栈直接拔高至 **PyTorch 2.11、Transformers 5.5.3 以及 vLLM 0.25.1**。
  - **RL 核心支持**：针对 **Qwen3-MoE** 架构，实现了权重的在线导出与同步机制。将融合的专家张量拆解为 vLLM 兼容的粒度（per-expert gate/up/down projections），这对于 MoE 模型在 RLHF/PPO 训练中的 Actor-Critic 权重实时同步至关重要。
- **[PR #1792 [OPEN] Run short Beaker debug jobs preemptible](https://github.com/allenai/open-instruct/pull/1792)** | 作者: farhatkevin
  - **技术价值**：工程基建优化。为 Beaker 集群的短时 debug/test 脚本补充了 `--preemptible`（可抢占式）参数。
  - **作用**：避免短时测试任务占用 urgent（高优且不可抢占）的 GPU 资源，大幅降低开源贡献者和内部团队在调试 RL 脚本时的算力开销与排队时间。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
- **MoE + RL 的工程落地标杆**：随着大语言模型向混合专家架构演进，MoE 模型的强化学习（如 PPO 中的显存峰值控制与生成时的权重同步）成为业界痛点。Open Instruct 正在通过 PR #1791 等动作，跑通 PyTorch 2.11 + vLLM + Qwen3-MoE 的全链路，是研究前沿 MoE 对齐的绝佳参考代码库。
- **极致的集群算力成本控制**：从 PR #1792 可以看出，项目对 AI2 (Allen Institute for AI) 内部 Beaker 集群的调度策略打磨极其精细。这种兼顾前沿模型探索与底层算力成本控制的工程文化，保证了该项目在开源 RL 框架中始终保持极高的工程纯度与实用性。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

**CleanRL RL 日报摘要**  
**日期**: 2026-07-31  

---

### 1. 今日速览  
CleanRL 在 2026-07-31 期间活跃度较低：  
- **0 个 Issues 更新**，**1 个 PR 更新**，**无新版本发布**。  
- 重点维护集中在依赖兼容性修复（PR #554）。  

---

### 2. 版本发布  
**无新版本发布**（最近一次发布为历史版本）。  

---

### 3. 重点 Issues  
**过去 24 小时无活跃 Issues**。  

---

### 4. 关键 PR 进展  
**PR #554** [fix: refresh jax extra dependency pins](https://github.com/vwxyzjn/cleanrl/pull/554)  
- **状态**: [OPEN]  
- **作者**: Mr-Neutr0n  
- **时间线**: 创建于 2026-06-04，最近更新于 2026-07-30（接近两个月未合并）。  
- **核心内容**:  
  - **问题**: 当前 `jax` 相关依赖版本过旧（`jax==0.4.8`、`jaxlib==0.4.7` 等），导致 CI 失败（`jaxlib==0.4.7` 无法解析）。  
  - **修复**: 更新 JAX 生态依赖至可解析版本，修复 CI 流水线。  
- **值得注意**:  
  - 这是一个关键的基础设施修复，确保 CleanRL 的 JAX 实验代码在现代环境下的可用性。  
  - PR 已悬而未决近 2 个月，可能需要社区推动合并或维护者介入。  

---

### 5. 为什么继续关注 CleanRL？  
CleanRL 作为 RL 算法的单文件实现库，以下特性使其在生态中保持价值：  
- **单文件可读性**: 每个算法实现独立且透明，适合教学和快速实验。  
- **高质量代码库**: 提供 PPO、DQN、SAC 等主流算法的 PyTorch/JAX 双版本实现。  
- **活跃的 JAX 迁移**: 通过 PR #554 可见，项目正在积极适配 JAX 生态的最新版本。  
- **研究友好**: 与 OpenAI Gym/Farama Gymnasium 兼容，支持复杂环境（如 Procgen、Atari）。  

**链接**: [CleanRL GitHub 仓库](https://github.com/vwxyzjn/cleanrl)

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

一份基于 GitHub 数据生成的 `rl_games` 项目日报摘要。

# RL 生态开源日报 (2026-07-31)
**追踪项目:** [Denys88/rl_games](https://github.com/Denys88/rl_games) 

### 1. 今日速览
过去 24 小时内，`rl_games` 仓库无新增 Issue、无新版本发布。项目活跃度主要集中在核心代码的审查与合并准备上：一个针对 PPO 算法在自动重置环境下的关键数据修复 PR 迎来了重要更新。

### 2. 版本发布
*   **无新版本发布**。当前项目仍处于现有稳定版的迭代维护中。

### 3. 重点 Issues
*   **无新增或更新的 Issue**。当前项目的问题追踪器保持静默。

### 4. 关键 PR 进展
项目今日的核心动态集中在以下底层算法正确性修复的 PR 上：

*   **[PR #362] [OPEN] PPO: mask next_step-autoreset garbage rows; scalar sigma parametrization**
    *   **作者:** ViktorM
    *   **更新时间:** 2026-07-30
    *   **技术摘要:** 这是一个针对 PPO 算法在处理底层环境自动重置时的关键修复。在 `envpool` 或原生 `gymnasium 1.x` 等向量化环境中，Episode 结束时的 reset 阶段会产生“垃圾数据行”（环境忽略动作、填充伪 reward、obs 依然是上一个终止步的 obs）。此前这些脏数据被混入 PPO rollouts 当作真实训练数据。此 PR 旨在屏蔽这些无效行，并引入了标量 sigma 参数化。
    *   **链接:** [Denys88/rl_games PR #362](https://github.com/Denys88/rl_games/pull/362)

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
尽管 `rl_games` 没有高频的 Issue 互动或定期版本排期，但它依然是 RL 生态（尤其是 Isaac Gym/Lab 等大规模 GPU 物理仿真环境）中**吞吐量最高、最核心的 RL 训练框架之一**。
从今日更新的 [PR #362](https://github.com/Denys88/rl_games/pull/362) 可以看出，项目维护者正在死磕底层向量化环境交互的边缘 Bug。在现代 RL 训练中，向量化环境的 Reset 机制常常引入难以察觉的状态错位和脏数据，这类 Bug 不会直接报错，但会严重影响策略的收敛效果。`rl_games` 对此类底层机制（如 `next_step-autoreset` 的数据过滤）的严谨修复，证明了其作为工业级和高性能强化学习基准的可靠性，值得深入研究与持续跟进。

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