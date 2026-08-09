# RL 开源生态日报 2026-08-10

> 生成时间: 2026-08-09 22:05 UTC | 覆盖项目: 15 个

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
当前 RL 开源生态呈现出明显的**“冰火两重天”**态势。一方面，专注于传统单智能体算法与标准环境接口的基础设施库（如 Gymnasium, Stable Baselines3, CleanRL, Tianshou 等）已进入高度成熟或休眠维护期，全天无代码活动。另一方面，随着大模型（LLM/VLM）对齐与后训练需求井喷，**LLM/VLM 专属 RL 框架**（verl, TRL, AReaL, slime, ROLL）占据了绝大多数的工程演进与算力攻坚重心。整个开源社区的智力资源正加速向“大模型强化学习工程化”这一核心赛道聚拢。

## 各项目活跃度对比
今日生态内的活跃度高度向大模型 RL 框架倾斜，传统 RL 生态趋于静默。以下为有实际代码或问题推进的项目动态一览：

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 0 | 8 | 0 | 极速适配 DeepSeek-V4 架构，死磕多维并行(CP/TP)与异步训练底层的系统级 Bug。 |
| **TRL** | 1 | 6 | 0 | 聚焦于异步 GRPO 的显存优化与鲁棒性，密集适配前沿开源模型生态。 |
| **AReaL** | 1 | 4 | 0 | 精细化修复 GRPO/PPO 算法工程化偏差，并前瞻性探索 Diffusion RL 后训练。 |
| **slime** | 1 | 2 | 0 | 深水区攻坚大模型训练痛点：极致显存压榨与新架构分布式检查点兼容。 |
| **rl_games** | 0 | 2 | 0 | 充当底层机制“吹哨人”，修复多卡环境归一化统计与自动重置引入的脏数据。 |
| **PettingZoo** | 1 | 0 | 0 | 筑牢 MARL 标准 API 底座，社区对测试代码与接口规范的一致性要求极高。 |
| **ROLL** | 0 | 1 | 0 | 修复多模态非张量数据在复杂分布式生成与训练链路中的透传丢失问题。 |
| *其他项目* | *0* | *0* | *0* | Gymnasium, SB3, CleanRL, OpenRLHF 等 7 个项目无活动，进入稳定沉淀期。 |

## 共同关注的研究与工程方向
在大模型 RL 这条主线上，当前开源项目的协同演进呈现出清晰的双轨特征：

**研究侧信号：**
1. **GRPO/PPO 机制的精细化校准**：各框架正全面审视 GRPO/PPO 在 LLM 场景下的算法瑕疵。如 AReaL 重构 Loss 聚合与组级别归一化，slime 修剪无效的 KL 计算图，都反映出社区正从“跑通算法”向“确保梯度与数学绝对正确”迈进。
2. **向多模态与 Diffusion 延展**：RL 后训练的边界正在扩大。AReaL 悄悄上线了基于 SD1.5 的 Diffusion RL PoC，ROLL 与 TRL 则在攻坚 VLM 的强化学习适配，预示着视觉生成模型的偏好对齐将成为新研究热点。

**工程/基础设施侧信号：**
1. **多维分布式并行的状态同步地狱**：跨引擎（vLLM + Megatron）权重同步、Context Parallelism (CP)、以及全异步策略下的初始化，是当前最频发的 Bug 重灾区。verl 与 TRL 正在投入大量精力解决异构硬件、异步流水线中的显存溢出与状态对齐难题。
2. **极致的显存/算力零容忍管理**：随着模型规模扩大，任何微小的不合理分配都会导致 OOM。今日多个核心 PR（如 TRL 冻结未使用的 VLM 参数、slime 跳过系数为 0 的图构建、TRL 解决 float32 硬编码）均直指“榨干每一滴显存”的工程诉求。

## 差异化定位分析
在 LLM/VLM RL 这一红海赛道，头部项目已逐渐形成差异化竞争壁垒：
- **verl**：**“前沿架构与重型工业底座”**。它是跟进下一代大模型架构（如 DeepSeek-V4 的 mHC 与 MTP）最快的框架，重点解决大规模算力集群下多维并行的复杂状态同步，适合追求极致吞吐的工业级千卡训练团队。
- **TRL**：**“生态枢纽与敏捷工程先锋”**。依托 HuggingFace 生态，它对新模型（OLMo 3, Falcon3）的 Chat Template 适配极快，且在异步 GRPO 等高频推理交互场景下的迭代极为敏捷，是研究者与中小型工程团队的首选。
- **AReaL**：**“算法严谨性把控者与多模态拓荒者”**。聚焦于填补算法论文到代码落地的鸿沟（如解决长短文本 Loss 归一化偏差），同时在向生成式多模态 RL 后训练拓展，兼顾了严谨性与前沿探索。
- **slime**：**“极致底层优化与全链路可观测”**。开发焦点直击最棘手的 Autograd 机制与 Checkpoint 兼容性，且社区已开始诉求训练全链路的 Tracing，正快速向成熟的 infra 演进。
- **rl_games**：**“经典 RL 算法的底层清道夫”**。在其他框架大搞 LLM 时，它依然深耕传统向量化环境与多卡训练的底层正确性，执着于揪出 Autoreset 脏数据等极易被忽视的隐蔽 Bug。

## 社区热度与成熟度
当前 RL 生态的开源热度呈现“倒挂”现象：底层环境与单智能体算法库（Gymnasium, PettingZoo, SB3）早已步入高度成熟期，社区关注点转移到极小范围的 API 一致性纠错与维护上（如 PettingZoo Issue #1416），探讨热度下降但系统极其稳定。
相反，围绕 LLM 的 RL 框架（verl, TRL, slime 等）正处于**“爆发式成长伴随剧烈重构”**的青春期。开发者提交的 PR 往往极其底层、针对性强，且高度集中于解决具体工程落地时的 OOM、通信死锁和算子兼容问题。这说明 LLM RL 基础设施尚未固化，远未达到“开箱即用”的成熟度，社区正处于高价值的硬核技术沉淀期。

## 值得关注的趋势信号
1. **DeepSeek-V4 等新架构对 RL 框架的倒逼**：随着原生多 Token 预测 (MTP) 和新型连接机制（mHC）的问世，底层 RL 框架在张量并行、激活重计算等算子级面临海量适配工作，谁能最快稳定支持新架构，谁就能抢占下一代开源生态核心位。
2. **异步执行流成为性能分水岭**：`AsyncGRPOTrainer`（TRL）和 `fully_async_policy`（verl）的高频迭代表明，通过异步机制打破推理与训练的串行阻塞，已成为大模型 RL 提升集群吞吐量的必经之路。
3. **非张量数据的全链路路由挑战**：随着 VLM 训练的普及，传统基于纯文本的 Batch 构建和切片逻辑全线告急（如 ROLL 丢弃 `multi_modal_data`）。强化学习框架的底层数据结构正在被迫升级，以支持异构多模态特征的无损流经。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

**ROLL (alibaba/ROLL) RL 生态日报 - 2026.08.10**

以下是 ROLL 项目过去 24 小时的动态摘要及技术分析：

### 1. 今日速览
*   **数据概览**：过去 24 小时内，ROLL 仓库无新增 Issue，无新版本发布，共有 1 条核心代码更新（PR）。
*   **核心焦点**：社区开发者提交了针对多模态大模型（VLM）训练数据处理的关键热修复，修复了底层 Scheduler 模块中的张量构建缺陷。

### 2. 版本发布
*   无新增 Release。

### 3. 重点 Issues
*   过去 24 小时无新增或更新的 Issue。

### 4. 关键 PR 进展
*   **[#479] [OPEN] fix(scheduler): preserve multi_modal_data when building gen_batch in get_batch_opt_level_0**
    *   **作者**: AmirF194
    *   **链接**: [alibaba/ROLL PR #479](https://github.com/alibaba/ROLL/pull/479)
    *   **技术摘要**: 这是一个关键的 Bugfix。在 `get_batch_opt_level_0()` 方法中，原逻辑通过 `request_data.pop(batch_keys=["input_ids", "attention_mask", "position_ids"])` 构建 `gen_batch`，该方法仅能提取 Tensor 类型的数据。这导致在处理视觉语言模型（VLM）请求时，存储于 `non_tensor_batch` 中的 `multi_modal_data`（如图像/视频特征）被意外丢弃。
    *   **直接影响**: 该缺陷会导致 `actor_cluster.generate()` 接收到的请求退化为纯文本 Prompt，从而破坏 VLM 的强化学习训练链路。该 PR 旨在完善多模态数据在 Batch 构建阶段的透传机制。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
*   **多模态 RL 基建能力**：PR #479 暴露了大规模 RLHF/RLAIF 训练中一个极易被忽视的痛点——**非张量数据（Non-tensor data，如多模态输入）在复杂分布式系统中的路由与一致性**。ROLL 底层架构支持对这些批处理细节进行热修复，表明其在向多模态强化学习（如 RLHF for VLM）演进的过程中，系统级组件（如 Scheduler、Actor Cluster）的设计正在被社区持续打磨与校验。
*   **开源生态价值**：作为高性能 RL 框架，ROLL 能够精细化处理 `gen_batch` 级别的生成请求与张量切片。对于关注底层系统架构设计、多模态对齐训练效率、以及大规集群调度的开发者和架构师而言，跟进其代码迭代（特别是针对生成与训练数据流对齐的修复）具有极高的工程参考价值。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

** slime 项目 RL 生态日报摘要 (2026-08-10) **

### 1. 今日速览
过去 24 小时内，slime 仓库整体活动聚焦于**训练性能优化**与**下游工程适配**。无新版本发布；共监测到 1 条 Issue 更新与 2 条 PR 更新。开发者 `Dodojordi` 连续提交了两个高质量修复，直指大模型训练中的显存浪费与检查点兼容性痛点。

### 2. 版本发布
- **无新版本发布**。

### 3. 重点 Issues
- **#1728 [OPEN] [question] Wrapping/observability hooks for key operations?** | 作者: andrija-s
  - **摘要**: 下游开发者正在探讨如何在训练步、Rollout 生成、权重同步等核心循环中注入包裹式可观测性 hook。目标是对 RL 训练全链路的耗时进行细粒度监控。
  - **分析**: 该 Issue 反映了 slime 正在被应用于更具规模和生产化的场景。随着 RLHF/RLAIF 训练集群的扩大，对计算瓶颈的 Tracing 需求正成为刚需。
  - **链接**: [THUDM/slime Issue #1728](https://github.com/THUDM/slime/issues/1728)

### 4. 关键 PR 进展
- **#2259 [OPEN] fix: load critic from policy checkpoints without value head** | 作者: Dodojordi
  - **摘要**: 修复了从 Policy checkpoint 加载 Critic 时可能崩溃的问题。此前，如果分布式检查点中缺少输出头（例如经过转换且共享输出权重的 Qwen3.5 模型），Critic 的 value head 在初始化前加载会触发 `KeyError: 'output_layer...'`。该 PR 显著提升了对 Qwen 架构模型的兼容性。
  - **链接**: [THUDM/slime PR #2259](https://github.com/THUDM/slime/pull/2259)

- **#2258 [OPEN] Fix: skip KL backward graph when coefficient is zero** | 作者: Dodojordi
  - **摘要**: 性能与显存优化。修复了当开启 `--use-kl-loss` 但 `kl_loss_coef == 0` 时，系统依然会构建冗余的 KL autograd graph 并将其加到 actor loss 中的问题。这种无意义的图构建不仅浪费算力，在极端情况下还会导致 OOM（显存溢出）。
  - **链接**: [THUDM/slime PR #2258](https://github.com/THUDM/slime/pull/2258)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
从今日的代码动态可以看出，slime 正在深度解决**大模型强化学习落地过程中的工程硬骨头**：
1. **主流模型适配深水区**：PR #2259 展示了项目对 Qwen3.5 等最新模型结构（如 tied policy output head）的快速响应与支持。在开源 RL 框架的竞争中，对新硬件和新模型架构的兼容速度是核心竞争力。
2. **极致的训练资源压榨**：RL 训练（尤其是 PPO）以显存消耗巨大著称。PR #2258 通过精准修剪无用的计算图，直接避免了无效显存占用，这表明项目维护者在底层 Autograd 机制和显存优化上有着严谨的把控。
3. **向生产级 infra 演进**：结合 Issue #1728，可以明确看到 slime 的用户群体正在突破“跑通 demo”的阶段，转向要求训练全链路 Observability 的工业级大模型团队。slime 正在从一个训练框架向完整的 RL 基础设施演进。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

**AReaL 强化学习生态日报 (2026-08-10)**

**1. 今日速览**
过去 24 小时，AReaL 仓库活跃度集中于底层代码逻辑的优化与积压任务清理。无新版本发布，共处理 Issue 更新 1 条，PR 更新 4 条。核心动向聚焦于 PPO 训练机制的精细化配置、Rollout 阶段的容错处理，以及针对扩散模型（Diffusion）RL 后训练的实验性探索。

**2. 版本发布**
- **最新 Releases：** 无（近期持续处于主干开发与 PR 迭代阶段）。

**3. 重点 Issues**
- **#1494 [CLOSED] [bug, stale] [BUG] CI (sglang): `test_gsm8k_grpo` fails on A100 with flash-attn CUTE `crd2idx` after TE 2.16 upgrade**
  作者: sitabulaixizawaluduo | 更新: 2026-08-09
  **摘要：** 该问题追踪了在 A100 环境下，由于升级 TransformerEngine (TE) 至 2.16 版本引发的 FlashAttention CUTE `crd2idx` 内核报错，导致 SGLang 推理后端的 GSM8K GRPO 测试失败。该 Bug 在稳定复现后已关闭，通常意味着底层算子兼容性已得到修复或规避。
  🔗 链接：[areal-project/AReaL Issue #1494](https://github.com/areal-project/AReaL/issues/1494)

**4. 关键 PR 进展**
今日更新的 4 个 PR 均处于 `[OPEN]` 状态，集中体现了 AReaL 在算法实现严谨性与架构扩展性上的演进：

- **#1546 [OPEN] feat(ppo): make loss aggregation configurable**
  作者: EazyReal | 更新: 2026-08-09
  **摘要：** 将 PPO Actor 的策略梯度目标函数从硬编码的“全局 Token 均值”修改为**可配置的聚合方式**（如改变等权重单元）。此更新对长文本或带有复杂 mask 的 RLHF 场景尤为重要，允许开发者更精细地控制损失权重分配，且未改变底层训练引擎 API。
  🔗 链接：[areal-project/AReaL PR #1546](https://github.com/areal-project/AReaL/pull/1546)

- **#1563 [OPEN] fix(rollout): train safely on incomplete groups**
  作者: EazyReal | 更新: 2026-08-09
  **摘要：** 解决 Grouped rollout 工作流中的容错痛点。此前当部分槽位返回 `None`（不可用数据）时，下游的批处理与调度仍会强制假设组大小匹配，导致训练崩溃。此 PR 保障了在**不完整采样组**上的安全训练，增强了 RL 训练流的鲁棒性。
  🔗 链接：[areal-project/AReaL PR #1563](https://github.com/areal-project/AReaL/pull/1563)

- **#1413 [OPEN] fix(ppo): derive group norm size from n_samples**
  作者: EazyReal | 更新: 2026-08-09
  **摘要：** 修复了 GRPO/PPO 中组级别奖励或优势归一化的问题。移除了手动设置的 `reward_norm.group_size`，改为直接从 `gconfig.n_samples` 动态推导。防止了因配置漂移导致的错误行归一化。
  🔗 链接：[areal-project/AReaL PR #1413](https://github.com/areal-project/AReaL/pull/1413)

- **#1410 [OPEN] [stale] feat(experimental): Diffusion RL post-training — Phase 1 PoC (SD1.5 + LoRA + REINFORCE)**
  作者: Fyrgo8 | 更新: 2026-08-09
  **摘要：** 提供了一个**单机实验性的扩散模型强化学习后训练概念验证**（结合 Stable Diffusion 1.5 + LoRA + REINFORCE）。这标志着 AReaL 的能力开始从纯 LLM RLHF 向多模态/生成式模型的 RL 对齐拓展。
  🔗 链接：[areal-project/AReaL PR #1410](https://github.com/areal-project/AReaL/pull/1410)

**5. 为什么这个项目值得在当前 RL 生态继续关注？**
1. **直击 GRPO/PPO 算法的工程暗坑**：从 #1546 的 Loss 聚合配置，到 #1413 的归一化维度对齐，AReaL 在解决“LLM 算法论文到工程落地”的偏差（如错误归一化、硬编码 Loss 导致的梯度膨胀）上提供了极具价值的工业级代码实践。
2. **训练容错与系统鲁棒性**：在 #1563 中处理 `Incomplete Groups`，表明该项目高度关注大规模分布式 RL 训练中最棘手的“滚动产出与消费速率不匹配/异常截断”问题，这是很多开源框架未能完善的地方。
3. **向 Diffusion RL 的前瞻性扩展**：#1410 拓展了基于 REINFORCE 的扩散模型 RL 后训练，紧贴当前“使用 RL 对齐文生图模型人类偏好”的前沿趋势，具备成为多模态 RL 基础设施的潜力。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 2026-08-10 TRL（Transformer Reinforcement Learning）开源项目日报摘要：

### 1. 今日速览
过去 24 小时内，TRL 仓库整体活跃度集中在底层 Bug 修复与生态模型 Chat Template 适配。共计更新 **1 条 Issue** 和 **6 条 PR**，无新版本 Release 发布。当前开发重心聚焦于解决大模型训练过程中的显存溢出（OOM）、多模态（VLM）训练优化以及重要性采样（Importance Sampling）的稳定性问题。

### 2. 版本发布
- **无新版本发布**。

### 3. 重点 Issues
- **[Issue #6684] `AsyncGRPOTrainer` 硬编码 `dtype=torch.float32` 导致 4B 模型在 80GB 显存上 OOM** ([链接](https://github.com/huggingface/trl/issues/6684))
  - **详情**：开发者反馈在使用 `AsyncGRPOTrainer` 跨双卡 H100（一张推理，一张训练）微调 `Qwen/Qwen3-4B-Instruct` 时，Trainer 由于强制使用 `float32` 精度，在执行优化器步骤时耗尽 80GB 显存（剩余 3.42GB 时崩溃报错）。这是一个典型的由精度管理不当引发的算力浪费与系统瓶颈问题，亟待通过灵活的 dtype 配置来解决。

### 4. 关键 PR 进展
今日的 PR 修复针对性强，主要分为算力优化、算法稳定性及生态兼容三个方面：

- **显存与精度优化**
  - **[PR #6692] 支持 `AsyncGRPOTrainer` 继承 `model_init_kwargs` 中的 dtype** ([链接](https://github.com/huggingface/trl/pull/6692)) [已关闭]
    - **进展**：直接针对上述 Issue #6684 的修复方案，允许传入自定义 dtype 并保留 `float32` 作为默认值。尽管该 PR 目前被关闭，但_dtype 硬编码引发的 OOM 问题_已被核心开发链路捕获并着手处理。
  - **[PR #6618] 修复纯文本训练时未使用的 VLM 参数问题** ([链接](https://github.com/huggingface/trl/pull/6618))
    - **进展**：大幅优化资源占用。在 SFT, DPO, KTO, GRPO, RLOO 训练中使用纯文本数据集时，冻结语言模型以外的参数（如 Vision 模块）。这不仅减少了 DDP 通信开销，还降低了优化器状态的显存消耗，且完美兼容 PEFT 适配器。

- **算法与训练稳定性修复**
  - **[PR #6693] 处理 GRPO 重要性采样中 vLLM 返回的 None token logprobs** ([链接](https://github.com/huggingface/trl/pull/6693))
    - **进展**：修复了当 vLLM 无法为某个 token 打分时，`GRPOTrainer` 抛出 `Could not infer dtype of NoneType` 的严重崩溃问题，增强了 GRPO 训练在面对异常生成结果时的鲁棒性。

- **模型生态支持（Assistant-only Loss Masking）**
  - 连续合并了三个支持 `&#123;&#37; generation &#37;&#125;` 标记的系列模型训练模板，确保在 SFT 训练中可以启用 `return_assistant_tokens_mask=True`，提升指令微调效率：
    - **[PR #6689] Mistral 训练模板** ([链接](https://github.com/huggingface/trl/pull/6689))
    - **[PR #6690] OLMo 3 训练模板** ([链接](https://github.com/huggingface/trl/pull/6690))
    - **[PR #6691] Falcon3 训练模板** ([链接](https://github.com/huggingface/trl/pull/6691))

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
TRL 始终是紧贴大模型工程落地最前沿的 RL 框架。从今日的数据可以看出：
1. **死磕“大模型 RL 工程化”痛点**：异步 GRPO（`AsyncGRPOTrainer`）+ vLLM 的组合正在成为当前 RL 训练（尤其是高频推理交互场景）的标配，但显存（OOM）、精度溢出与底层通信（DDP）问题频发。TRL 团队正在极速响应这些生产环境下的 Blocker。
2. **深入多模态 RL 底层优化**：通过在纯文本场景剥离 VLM 视觉模块的优化器状态，TRL 正在解决复合模型训练中的“算力无谓损耗”问题，这对降低 RLHF 成本具有直接价值。
3. **完善前沿开源模型生态**：密集适配 OLMo 3、Falcon3、Mistral 等最新开源模型的 Chat Template，表明 TRL 致力于降低开发者在最新基座模型上进行 RL 微调的门槛，保持其在开源 RL 生态中的核心枢纽地位。

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

以下是为您生成的 verl 项目 2026-08-10 RL 生态日报摘要：

### 1. 今日速览
- **数据概览**：过去 24 小时内，verl 仓库无新增 Issue 和 Release，共有 8 个 PR 更新。
- **核心动向**：今日的工程活动高度聚焦于**底层修复与系统稳定性**。开发者在 vLLM、Megatron、异步训练及 CI/Docker 构建链路中合入了多个关键 Bug 修复，同时针对 RL 底层算法的测试基线进行了完善。

### 2. 版本发布
无新增 Release。

### 3. 重点 Issues
过去 24 小时无新增 Issue。

### 4. 关键 PR 进展
今日的 PR 更新主要围绕多模态大模型训练容错、CP/TP 并行策略及环境构建展开：

- **[Megatron] 修复 mHC + MTP 训练崩溃** ([verl-project/verl PR #7328](https://github.com/volcengine/verl/pull/7328))
  解决了在 Megatron-core 上运行 DeepSeek-V4（启用 mHC 与 MTP）时的两个致命错误。修正了 MTP 后处理对 mHC 多流张量的处理逻辑，并跳过了相关的激活重计算。
- **[vLLM] 修复非合并 LoRA 同步报错** ([verl-project/verl PR #7327](https://github.com/volcengine/verl/pull/7327))
  解决了 vLLM 与 Megatron 在 LoRA 层包装上的行为差异。重构了发送端的 `add_base_layer_suffix` 逻辑，确保在非合并 LoRA 同步时能正确解析 `.base_layer`。
- **[fully_async] 修复全异步初始化断言报错** ([verl-project/verl PR #6987](https://github.com/volcengine/verl/pull/6987))
  修复了使用 `fully_async_policy` 结合 Megatron 引擎时，由于初始化顺序导致的 `total_training_steps` 断言失败问题。
- **[Megatron] 修复 Context Parallel 下 Forward KL 对齐报错** ([verl-project/verl PR #7012](https://github.com/volcengine/verl/pull/7012)) *(已关闭)*
  修复了当 `context_parallel_size > 1` 且序列长度可变时，Teacher 和 Student 张量长度不一致导致的 `AssertionError`。
- **[Algo] 锁定优势估计器的期望策略梯度** ([verl-project/verl PR #7325](https://github.com/volcengine/verl/pull/7325)) *(已关闭)*
  完善了 `core_algos.py` 的测试基建。为 14 种优势估计器补齐了缺失的测试，并严格校验了梯度计算的正确性，而非仅验证形状或 KL 惩罚值。
- **[Docker/CI] 基础设施与构建修复**
  - 修复 Dockerfile 中的 pip 指令拼写错误，解决 `fast-hadamard-transform` 构建中断问题 ([PR #7329](https://github.com/volcengine/verl/pull/7329))。
  - 修复 Docker 镜像上传流水线 ([PR #7311](https://github.com/volcengine/verl/pull/7311)，已关闭)。
- **[Trainer] 完善连续模式的 nsys 性能分析** ([verl-project/verl PR #7330](https://github.com/volcengine/verl/pull/7330))
  修复了 `RayWorkerGroup` 在连续性能分析模式下 `.nsys-rep` 文件的正常生成与范围界定。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **紧跟前沿模型架构的工程适配**：从 PR 活动可以看出，verl 正在极速适配下一代大模型架构（如 DeepSeek-V4 的 mHC 连接机制与 MTP 多 Token 预测），确保 RL 训练框架在底层算子级的前沿兼容性。
2. **攻克分布式训练痛点**：持续修复 Context Parallelism (CP)、Fully Async (全异步策略) 以及复杂的 vLLM/Megatron 异构 LoRA 权重同步问题。这些 PR 表明 verl 正在生产级规模下解决多维并行时的状态同步难题，这是普通科研级 RL 代码库难以覆盖的盲区。
3. **强化算法测试基建**：为多达 14 种 Advantage Estimator 严格锁定期望策略梯度，展现了项目在快速迭代 RL 算法的同时，对数学正确性和测试严谨性的高要求，奠定了其作为可靠工业级 RL 底座的地位。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

以下是为您生成的 2026 年 8 月 10 日 RL 日报摘要，聚焦于强化学习核心算法库 `rl_games` 的最新动态。

### 1. 今日速览
过去 24 小时内，`rl_games` 仓库无新增 Issue、无新版本发布，但有 2 个核心代码贡献（PR）发生了活跃更新。这两个 PR 均由贡献者 ViktorM 提出，主要针对 **多 GPU 训练时的统计量同步** 以及 **环境自动重置导致 PPO 算法引入脏数据** 的底层机制问题进行深度修复。

### 2. 版本发布
* **无新版本发布**（过去 24 小时内）。

### 3. 重点 Issues
* **无新增或更新的 Issue**（过去 24 小时内）。

### 4. 关键 PR 进展
这两个 PR 直击现代 RL 训练框架底层的“隐秘 Bug”，技术含金量极高：

* **[PR #363] Multi-GPU: synchronize running normalization statistics across ranks（多 GPU：跨 ranks 同步归一化统计量）**
  * **链接**: [Denys88/rl_games PR #363](https://github.com/Denys88/rl_games/pull/363)
  * **技术摘要**: 此 PR 从 #362 中拆分而出。在多卡训练时，由于各个 rank（GPU）仅在本地数据分片上计算观测值和价值函数的归一化统计量，导致统计量发生偏移。这使得各卡实际上在训练微妙不同的模型，平均梯度时产生冲突。
  * **实测数据**: 在 EnvPool 的 Pong 环境中（2 卡，相同全局几何配置），未同步时 Epoch 2000 的平均奖励为 86.9，而加入跨卡同步后，平均奖励显著提升至 94.8。

* **[PR #362] PPO: mask next_step-autoreset garbage rows; scalar sigma parametrization（PPO: 屏蔽自动重置产生的无效行；标量 sigma 参数化）**
  * **链接**: [Denys88/rl_games PR #362](https://github.com/Denys88/rl_games/pull/362)
  * **技术摘要**: 修复自动重置正确性问题的 PPO 核心部分。在 EnvPool 或原生 Gymnasium 1.x 向量环境中，环境自动重置时产生的 Row（包含被环境忽略的动作、填充奖励、以及上一 Episode 的终止观测）此前被错误地作为“真实训练数据”喂给了 PPO 的 Rollout 过程。此 PR 通过引入 Mask 机制屏蔽这些脏数据，并重构了连续动作空间标准差（sigma）的参数化方式。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **底层机制的“吹哨人”**: `rl_games` 的维护者正在揪出 RL 工程实践中最隐蔽的陷阱。现代向量化环境（如 EnvPool, Gymnasium 1.x）的 Autoreset 机制常无声无息地向 PPO Rollout 中注入无效数据（Garbage Rows），这在许多其他开源库中常被忽视。该项目的修复直接提升了算法的底层正确性。
2. **多卡扩展性的硬核实测**: PR #363 中通过详实的基准测试（Envpool Pong 基准），用确凿的 Reward 数据（94.8 vs 86.9）证明了观测归一化在分布式训练中同步的必要性。对于需要进行大规模多 GPU 强化学习训练的研究人员和工程师来说，`rl_games` 依然是为数不多敢于在底层动刀、且高度关注分布式计算一致性的实战型算法库。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

**RL 开源生态日报：PettingZoo (2026-08-10)**

**1. 今日速览**
过去 24 小时内，PettingZoo 仓库整体活跃度趋于平缓。无新版本发布，无新增或更新的 Pull Requests。社区端收到 1 个新的 Bug 反馈，核心指向并行环境 API 测试脚本的实现偏差。

**2. 版本发布**
*   **无**。近期无新版本 Tags 或 Releases 推出。

**3. 重点 Issues**
*   **#1416 [bug] 并行 API 测试与当前接口规范不同步** 
    *   **链接**: [Farama-Foundation/PettingZoo Issue #1416](https://github.com/Farama-Foundation/PettingZoo/issues/1416)
    *   **摘要**: 开发者 `zbenmo` 报告了 `parallel_api_test` 中存在的两处一致性缺陷。首先，测试用例仍预期 `reset()` 方法仅返回观测值 (`obs`)，未对齐当前标准的 `(obs, info)` 返回元组规范；其次，测试逻辑未能正确校验 `action_mask`（动作掩码）机制。这反映了测试套件更新相对于核心 API 迭代的滞后，可能会误导开发者的自测流程。

**4. 关键 PR 进展**
*   **无**。过去 24 小时内无新增、合并或更新的代码提交。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
PettingZoo 作为 Farama-Foundation 的核心项目之一，是多智能体强化学习（MARL）领域的标准化 API 基准。即便在 API 趋于稳定的维护期，其对接口规范的严格把控（如 Issue #1416 对测试代码与 API 同步性的苛求）保证了底层环境的可靠性。在当前 RL 生态中，PettingZoo 与 Gymnasium（单智能体）和 Stable-Baselines3 等上下游工具链深度绑定，依然是研究人员复现经典多智能体环境（如 MPE, Atari）和验证新算法不可替代的底层基础设施。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>