# RL 开源生态日报 2026-05-31

> 生成时间: 2026-05-30 22:17 UTC | 覆盖项目: 15 个

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
- **马太效应加剧，L4+ 大模型 RLHF 成为绝对核心**：在过去 24 小时内，强化学习开源生态的活动几乎完全由面向大语言模型（LLM）后训练的基础设施项目主导。传统的单智能体/经典 RL 框架（如 CleanRL, SB3, Tianshou）以及部分大厂开源项目（如阿里 ROCK/ROLL）均处于停滞状态。
- **系统级深度整合成为破局关键**：活跃项目（slime, TRL, verl, AReaL）的核心动向不再局限于算法本身的修改，而是全面转向底层推理引擎（SGLang, vLLM）、分布式通信原语（NCCL, XCCL）及异构硬件（Ascend NPU）的深度重构。
- **Agent 与多模态范式加速渗透**：RL 训练框架正在加速从单一的“文本提示-回复”模式，向多智能体、多轨迹推理及复杂的工具调用场景演进，这对奖励模型的精准分配和异步架构提出了更高要求。

## 各项目活跃度对比
*注：仅统计有明确活跃记录的项目，无活动项目已省略。*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **slime** | 1 | 21 | 0 | 密集冲刺 v0.3.0 发版；攻坚超大规模 MoE 模型（Qwen3 235B, MiniMax-M2.5）的训练稳定性与显存调度。 |
| **verl** | 1 | 10 | 0 | 核心算法底层正确性修复；重构 FSDP/Megatron 底层显存管理；率先推进全异步 Agent 多轨迹流水线。 |
| **TRL** | 8 | 12 | 0 | 死磕 GRPO 核心实现（KL 散度对齐、无 Padding 训练）；深度整合 vLLM 原生 RL 权重同步协议。 |
| **AReaL** | 2 | 6 | 0 | 引入前沿 Muon 优化器；首创 FSDP (BF16) 训练 + SGLang (FP8) 推理的混合精度架构；实现 PD 分离部署。 |
| **OpenRLHF** | 0 | 1 | 0 | 修复边界条件（工具调用 Action token 的长惩罚屏蔽），项目整体处于平稳维护期。 |

## 共同关注的研究与工程方向

### 1. 研究侧信号
- **对齐算法的严谨性与一致性**：研究者开始反思并修复早期 RLHF 实现中的粗糙细节。例如，TRL 发现了不同训练器间 KL 散度计算的不一致性；verl 暴露并修复了 PPO 变体中极端比率导致的数值不稳定问题；此外，各类高级对齐变体（RDPO、DAPO）正在被快速集成。
- **探索更高效的优化器架构**：传统 AdamW 在大规模 RL 训练中的局限性显现，AReaL 引入了基于矩阵正交化的 Muon 优化器，试图在 LLM 训练范式上寻找新的计算效率突破口。

### 2. 工程/基础设施侧信号
- **异构引擎混合精度与显存极致压榨**：RL 训练（BF16）与 Rollout 推理（FP8）的混合精度架构开始落地（AReaL），同时 Colocate 模式下通过挂起/释放闲置 NCCL 通信原语来腾退显存（verl），已成为突破“显存墙”的标配操作。
- **训练/推理权重同步的深度重构**：为了解决高频权重同步的 I/O 瓶颈，头部项目正在绕过高层 API，直接接管底层推理引擎的通信层（如 TRL 接入 vLLM 4 阶段协议，slime 对 SGLang 打补丁）。
- **面向 Agent 范式的底层重构**：为解决复杂交互环境下的阻塞问题，全异步流水线架构（verl）以及解耦自回归解码的 Prefill-Decode 分离部署（AReaL）正在重塑 RLHF 的底层基础设施形态。

## 差异化定位分析
- **TRL (Hugging Face)**：**“开源生态的粘合剂与算法桥头堡”**。依托 Hub 生态，定位是最前沿、最全面的算法库。当前重心在于吸纳最新学术进展（RDPO 等），并致力于抹平 DeepSpeed/vLLM 等底层系统间的兼容性鸿沟。
- **verl (Volcengine)**：**“面向云原生与 AGI 的重型履带”**。极具工业暴力美学，不仅死磕 Megatron/FSDP 等超大集群的调度极限，还积极拥抱 Ascend NPU 等国产硬件，是最具潜力支撑超大规模 Agent 自我进化的底层基座。
- **slime (THUDM)**：**“超大规模 MoE 模型的实战尖兵”**。其迭代重心明显偏向千亿级参数（如 Qwen3 235B）和复杂路由机制模型在极端集群（64x H100）下的工程排障，适合需要复现大厂极限后训练场景的重度用户。
- **AReaL (inclusionAI)**：**“计算效率的极限探索者”**。在系统架构上最具颠覆性，大胆引入 FP8 混合精度、PD 分离和全新优化器，定位是为下一代大模型提供打破常规训练开销极限的试验田。

## 社区热度与成熟度
- **基础设施库呈现“高门槛、高集中度”**：从 OpenRLHF 的停滞和 TRL、verl 的高阶 PR 可以看出，LLM RLHF 领域的底层迭代已由早期的算法工程师转移至系统级工程师，社区讨论高度聚焦于分布式通信与显存分配。
- **边界条件成为成熟度试金石**：OpenRLHF 针对“工具调用”中非模型生成 token 的 mask 处理，以及 TRL 针对异步训练中无 Padding 序列的重构，标志着这些框架正在从“能跑通基准测试”向“在复杂垂直业务中实现稳健收敛”的成熟工业级软件演进。

## 值得关注的趋势信号
- **“Agent RL”从概念走向底层架构重构**：不再仅仅是外层的 Prompt 包装，多轨迹支持、异步 Agent 循环（verl）以及 Agent 交互的精准 Reward 切分（OpenRLHF）已经成为 RL 框架内建的核心特性，这将是接下来一年的主战场。
- **分布式训练与推理引擎的边界正在消融**：现代 RL 框架不再仅仅作为“胶水”调用推理引擎，而是深入其内部魔改（如权重增量同步补丁、显存扣押、PD 分离）。一体化把控训练与推理全生命周期的框架将获得绝对优势。
- **对大模型训练后期的数值敏感性急剧上升**：诸如 Critic 不应施加温度缩放、KL 负值导致的方差异常等曾经被忽略的细节，现在会被社区单拎出来作为严重 Bug 修复。这表明大模型的后训练（Post-training）已进入“微操调优”的深水区。

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

# slime RL 日报摘要 (2026-05-31)

## 1. 今日速览
过去 24 小时内，[slime (THUDM/slime)](https://github.com/THUDM/slime) 仓库保持高度活跃，无新版本发布，但共处理了 **21 个 PR**（其中包含大量集中合并与 CI/文档优化）以及 **1 个 Issue 更新**。项目当前正处于 v0.3.0 发布前的密集测试、Bug 修复与代码清理阶段。

## 2. 版本发布
今日无新版本发布。但根据 PR 进展，项目正在积极准备 **v0.3.0** 的发布（详见 [PR #1975](https://github.com/THUDM/slime/pull/1975)）。

## 3. 重点 Issues
- **[#795](https://github.com/THUDM/slime/issues/795) [Bug] `Unexpected result nan` on 64x H100, Qwen3 235B**
  - **状态**: OPEN
  - **摘要**: 用户在使用 slime v0.1.0 对 Qwen3 235B 模型进行大规模训练（64张 H100）时遇到 `Unexpected result nan` 错误。该 Issue 评论数已达 11 条，于昨日有新的讨论更新。这反映了 slime 在处理超大规模参数模型时的长期稳定性问题，值得核心开发者及重度用户持续追踪。

## 4. 关键 PR 进展
今日 PR 动态主要分为：基础设施与推理修复、核心算法与代码重构、v0.3.0 发版准备及 CI 优化。

### 基础设施与 Rollout 修复
- **[#1997](https://github.com/THUDM/slime/pull/1997) fix(rollout): support non extra gpu placement when using rollout-external mode**
  修复了在使用 `rollout-external` 模式（连接预启动的 SGLang 服务器）时，非额外 GPU 放置的 Bug，增强了异构集群推理与训练分离部署的鲁棒性。
- **[#1993](https://github.com/THUDM/slime/pull/1993) Patch sglang 0.5.12.post1 for delta sync**
  针对底层推理框架 SGLang 0.5.12.post1 版本打补丁，修复了增量权重同步的问题。
- **[#1950](https://github.com/THUDM/slime/pull/1950) fix: drop incorrect critic GPU add to rollout_num_gpus in colocate mode**
  修复了 `colocate`（共存）模式下 Critic GPU 资源配置错误的根本原因（涉及 #1896），改善了 GPU 显存资源分配的准确性。

### 核心算法与训练逻辑
- **[#1928](https://github.com/THUDM/slime/pull/1928) fix: avoid applying rollout temperature to critic values**
  修正了在提取 responses 时，错误地将 `rollout_temperature` 应用于 Critic 标量输出的 Bug。Critic 不应像 Policy logits 那样进行温度缩放，该修复对 Value 函数的准确性至关重要。
- **[#1995](https://github.com/THUDM/slime/pull/1995) fix(multi-agent): preserve rollout logprobs**
  在多智能体示例中保留了 token 级别的 rollout logprobs，并启用了 `--use-rollout-logprobs`，完善了 Multi-agent GRPO 训练逻辑。
- **[#1996](https://github.com/THUDM/slime/pull/1996) fix(logging): partition raw rewards for correct samples**
  修复了 `--log-correct-samples` 的日志逻辑，将 raw_reward 正确按 rank 进行分区，同时保留了全局 passrate 指标。
- **[#1929](https://github.com/THUDM/slime/pull/1929) Feat/minimax m2.5 support**
  添加了对 **MiniMax-M2.5** (256 experts, top-8 routing) 模型的完整支持，包括模型插件和权重桥接，扩展了 slime 支持的 MoE 架构版图。
- **[#1994](https://github.com/THUDM/slime/pull/1994) [sft] rebuild the sft loss mask generator and add ci**
  重构了 SFT（监督微调）的 loss mask 生成器并添加了 CI 测试。

### 发版准备、重构与 CI/文档
- **[#1975](https://github.com/THUDM/slime/pull/1975) [run-ci-megatron] [release] bump to v0.3.0**
  将版本号升级至 v0.3.0 的发版 PR。
- **[#1984](https://github.com/THUDM/slime/pull/1984) rename rollout_ids to group_ids**: 统一变量命名规范。
- **[#1991](https://github.com/THUDM/slime/pull/1991) Add e2e test for delta weight update**: 添加了增量权重更新的端到端测试。
- **[#1983](https://github.com/THUDM/slime/pull/1983) fix GLM4.7 Flash in sglang v0.5.12**: 修复了 GLM4.7 在 SGLang 最新版中的兼容性。
- **[#1967](https://github.com/THUDM/slime/pull/1967) Fix PYTHONBUFFERED typo**: 修正了环境变量拼写错误，解决了 Ray/训练输出缓冲导致日志延迟的问题。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **大模型 LLM+RL 的前沿工程探索**：项目正在密集解决百亿/千亿级参数模型（如 Qwen3 235B, MiniMax-M2.5）在超大规模集群（如 64x H100）上的训练稳定性和资源调度问题（如 NaN 报错、Colocate 显存分配）。
2. **对底层推理引擎的深度整合**：slime 高度依赖并深度定制/干预底层推理框架（如频繁针对 SGLang 特定版本进行修补和增量同步优化），目前在 RLHF 基础设施的工程深度上走在前列。
3. **向多模态与多智能体拓展**：通过支持 MiniMax-M2.5 等复杂 MoE 架构及完善 Multi-agent GRPO 脚本，表明其目标不仅限于传统的单智能体文本 RL，而是致力于成为通用大规模 RL 训练底座。目前 v0.3.0 版本的密集重构与测试完善，预示着其核心 API 和架构即将趋于稳定。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 生态日报 (2026-05-31)

## 1. 今日速览
过去 24 小时，AReaL 仓库共处理 **2 条 Issues** 和 **6 条 Pull Requests**，暂无新版本发布。项目整体处于高频迭代期，近期核心开发方向高度聚焦于**底层训练与推理引擎的解耦优化**，涵盖 FSDP BF16 训练结合 SGLang FP8 推理的混合精度架构、Prefill-Decode (PD) 分离部署、Muon 优化器支持，以及针对 Qwen 模型在张量并行 (TP) 下的 DTensor 修复。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
- **[BUG] Qwen 模型在 TP > 1 下因 DTensor 调度错误崩溃** ([#1366](https://github.com/areal-project/AReaL/issue/1366))
  - **要点**: 使用提供的 Docker 镜像可 100% 稳定复现。该 Bug 对排查 Qwen 系列模型在 AReaL 复杂分布式张量并行环境下的报错具有重要参考价值。
- **[Feature] FSDP BF16 Training + SGLang FP8 Rollout** ([#1378](https://github.com/areal-project/AReaL/issue/1378))
  - **要点**: 提出在 SGLang 推理阶段启用 FP8 块级量化，同时保持 FSDP 训练在 BF16 精度。设计上仅影响 XCCL 权重更新模式，且确保现有的无量化训练配置无需修改，向后兼容性良好。

## 4. 关键 PR 进展
- **[训练/推理混合精度] Feat/fsdp sglang fp8 rollout** ([#1379](https://github.com/areal-project/AReaL/pull/1379))
  - **核心变更**: 实现了 Issue #1378 的提案。在训练引擎通过 NCCL 将权重广播给 SGLang 之前，在线将 BF16 权重量化为 FP8（引入 `fp8_kernel.py` 自动检测 GPU 能力），有望显著降低显存占用与通信开销。
- **[推理架构] feat: Support PD Disaggregation: DP=2(1P1D),TP=n** ([#1364](https://github.com/areal-project/AReaL/pull/1364))
  - **核心变更**: 实现 Prefill-Decode 分离架构。将推理角色拆分为专用模块，打破自回归解码的 Memory-bound（内存受限）瓶颈，提升大规模 rollout 期间的 GPU 计算利用率。
- **[训练算法] feat: muon optimizer support** ([#1270](https://github.com/areal-project/AReaL/pull/1270))
  - **核心变更**: 为 AReaL 引入 Muon 优化器，并在 FSDP2 和 Megatron 后端提供原生分布式实现。通过 Newton-Schulz 迭代对动量缓冲区进行正交化处理，探索比传统 AdamW 更高效的 LLM 训练范式。
- **[兼容性修复] fix(fsdp engine): localize DTensor norm output for Qwen models in TP** ([#1365](https://github.com/areal-project/AReaL/pull/1365))
  - **核心变更**: 针对上述 Issue #1366 的修复方案。通过注册 Forward Hook 强制局部化 Qwen 模型 Final Norm 层的 DTensor 输出，解决由于 `aten.alias` 等中间算子导致的分布式张量分发失败问题。
- **[性能优化] fix(trainer): skip controller-side CUDA sync in single-controller mode** ([#1377](https://github.com/areal-project/AReaL/pull/1377))
  - **核心变更**: 修复在单控制器模式下，纯 Orchestrator 进程执行不必要 `CUDA synchronize` 导致的阻塞等待，精简了 Checkpoint 保存流程。
- **[可观测性] Add rollout trace logging with trackio** ([#1360](https://github.com/areal-project/AReaL/pull/1360))
  - **核心变更**: 集成 Hugging Face 的 Trackio 库以扩展 AReaL 的链路追踪能力，补齐了 RL 训练过程中除了 Metric 记录之外的 Trace 日志支持。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **RLHF 算力边界的持续突破**：从引入 Muon 优化器到实现 FSDP 训练 + SGLang FP8 推理的混合精度方案，AReaL 正在从底层系统架构直接切入，解决大模型 RL 训练中“显存墙”和“通信开销”的核心痛点。
2. **紧跟前沿推理系统设计**：实现 Prefill-Decode (PD) 分离部署（#1364）反映了项目对 LLM Inference 前沿工程的高度敏感。这种将 Decode 解耦以提升 GPU 利用率的架构，正在成为大规模 RL 资源调度的新范式。
3. **活跃的工程化落地与排障能力**：对 Qwen 等主流开源模型在分布式 TP 环境下的精准 Bug 定位与快速响应（#1365, #1366），以及不断优化的单控制器/多控制器分布式通信逻辑（#1377），证明了 AReaL 是一个真正经过大规模工程场景淬炼的 RL 基础设施，而非单纯的算法验证框架。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL 开源生态 RL 日报摘要 (2026-05-31)

## 1. 今日速览
过去 24 小时内，TRL 仓库共更新了 **8 条 Issue**（3 个新建，5 个旧活跃更新）和 **12 条 PR**（6 个新建，6 个活跃更新）。目前无新版本发布。整体焦点高度集中于 **GRPO 算法优化（特别是 DeepSpeed ZeRO-3 兼容性、KL 散度计算和 AsyncGRPO 架构改进）**以及 **DPO/SDPO 算法的内存与代码重构**。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
- **[Bug] RLOO 与 GRPO 的 KL 惩罚项计算不一致** ([#5889](https://github.com/huggingface/trl/issues/5889))
  - **核心内容**：`RLOOTrainer` 使用一阶 log 比值计算 KL，而 `GRPOTrainer` 使用方差更低的 Schulman 二阶近似。这导致 RLOO 的 KL 可能出现负值，破坏算法理论一致性。这是近期需要重点关注的算法实现鲁棒性问题。
- **[Feature] 建议在 GRPOTrainer 中支持 RDPO** ([#5886](https://github.com/huggingface/trl/issues/5886))
  - **核心内容**：开发者提出引入 RDPO（arXiv:2605.13641），以解决 GDPO 在倾斜/二值化奖励分布下的 prompt 级别优势主导问题。这反映了社区对 GRPO 变体及高级奖励分布处理机制的强烈需求。
- **[Bug] DeepSpeed ZeRO-3 + Liger Kernel 崩溃 (持续跟进)** ([#3368](https://github.com/huggingface/trl/issues/3368))
  - **核心内容**：GRPO 训练中开启 `use_liger_loss=true` + `zero3` 时出现 tensor size mismatch。此陈旧 Bug 在今日获得了针对性的修复 PR（见 PR #5891）。

## 4. 关键 PR 进展
- **彻底修复 GRPO Liger Kernel + ZeRO-3 兼容性** ([#5891](https://github.com/huggingface/trl/pull/5891))
  - **进展**：通过在 `compute_liger_loss` 中正确处理 `unwrapped_model.lm_head` 参数，解决了长期存在的 ZeRO-3 下 size mismatch 错误。
- **支持 vLLM 原生 RL 权重同步** ([#5892](https://github.com/huggingface/trl/pull/5892))
  - **进展**：接入 vLLM >= 0.22.0 的原生 RL 4 阶段权重传输协议，优化 `AsyncGRPO` 的 Rollout 推理与训练权重同步流程，极大提升了异步架构的吞吐量潜力。
- **DPOTrainer 显存占用优化** ([#5882](https://github.com/huggingface/trl/pull/5882))
  - **进展**：在 `_compute_loss` 中引入主动 `del` 机制，及时释放不再需要的中间 logits 张量，有效降低 DPO 训练的峰值显存。
- **重构自蒸馏训练器** ([#5862](https://github.com/huggingface/trl/pull/5862), [#5883](https://github.com/huggingface/trl/pull/5883))
  - **进展**：移除了臃肿的 Base 类继承，将 SDPO 等实现为独立 Trainer。SDPO 的损失函数计算被重构为凸组合 `(1 - w)·policy + w·distillation`，使代码更符合论文原始设定。
- **AsyncGRPO 实现去 Padding 训练** ([#5854](https://github.com/huggingface/trl/pull/5854))
  - **进展**：将 `AsyncGRPOTrainer` 的前向传播彻底改为 unpack 到连续的 `(1, total_real_tokens)` 序列，移除了低效的 padded 路径。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **工程瓶颈的持续攻坚**：TRL 正在快速修复底层分布式训练（如 DeepSpeed ZeRO-3）与第三方高效算子（如 Liger Kernels）的兼容性死角，这对于工业界大模型的后训练阶段至关重要。
2. **拥抱前沿系统级优化**：从接入 vLLM 最新的原生 RL API 到实现在线强化学习的无 Padding 训练机制，TRL 正在系统层面榨取异构集群的吞吐极限。
3. **严谨的算法对齐与迭代**：开发团队对 KL 散度等核心公式在不同 Trainer（GRPO vs RLOO）间的一致性把控日益严格，并快速跟进学术界的新变体（如动态采样 DAPO、RDPO），保持了在 Post-training RL 技术栈上的前沿统治力。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL 开源生态日报：OpenRLHF 项目追踪
**日期**：2026-05-31 | **分析周期**：过去 24 小时

---

### 1. 今日速览
过去 24 小时内，OpenRLHF 仓库整体处于平稳迭代期。仓库无新版本发布，无新增 Issues，仅有 1 项关于 PPO 训练中长度惩罚机制 Bug 修复的 PR 提交。项目当前的维护重心倾向于底层训练逻辑的稳定性和边界条件优化。

### 2. 版本发布
- **最新 Releases**：近 24 小时内无新版本发布。

### 3. 重点 Issues
- **最新动态**：过去 24 小时无新增或更新的 Issues。项目目前的 issue 池处于清空或停滞状态。

### 4. 关键 PR 进展
本期仅有 1 条 PR 更新，主要涉及强化学习对齐训练中 `length_penalty` 长度惩罚机制的计算修正：

- **[#1246] [OPEN] Fix overlong penalty action token length**
  - **作者**: Jiang020609
  - **链接**: [OpenRLHF/OpenRLHF PR #1246](https://github.com/OpenRLHF/OpenRLHF/pull/1246)
  - **关联 Issue**: Fixes #1243
  - **技术摘要**: 该 PR 修复了序列过长时惩罚计算不准确的 Bug。在 LLM 的 RLHF（特别是涉及工具调用 Agent 的场景）中，模型生成的 Action/Tool response tokens 不应计入“可训练的回复长度”中。作者引入了 `action_mask` 机制来过滤这部分 token，确保超长惩罚仅作用于实际由模型生成的有效文本，从而避免因工具返回过长而对模型施加错误的负反馈。
  - **测试状态**: 已提供完整的单元测试命令（`pytest tests` 及 `pre_commit`），涉及对 `length_penalty.py` 的重构测试。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **RLHF/RLAIF 基础设施的刚需**: OpenRLHF 是目前开源社区构建在 Ray 和 DeepSpeed 之上、最成熟的大规模分布式 LLM 对齐框架之一。其对 PPO、DPO 及各类高级 RL 算法的工程实现极具参考价值。
2. **前沿场景的快速响应**: 如今日的 PR #1246 所示，项目正在深度适配“工具调用”与“Agent”场景下的 RL 微调。在多轮对话与 Agent 交互中，如何精准剥离工具返回信息与模型自主生成信息进行 Reward/Penalty 计算，是当前 RL 落地 LLM 的核心技术痛点，该项目正在提供开箱即用的解决方案。
3. **工业级代码质量**: 该项目对边界条件（如 token length penalty、sequence masking）的修复极为严谨，保持了极高的工程标准，是研究开源大模型“对齐工程化”的最佳实践样本。

---
*数据来源：GitHub OpenRLHF Repository API 爬取与解析*

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

以下是为您生成的 verl 项目 RL 日报摘要（2026-05-31）：

### 1. 今日速览
过去 24 小时内，verl 项目共处理更新了 **1 条 Issue** 和 **10 条 Pull Requests (PR)**，无新版本发布。项目近期的核心动向高度聚焦于**算法稳定性修复、底层分布式训练优化（FSDP/Megatron/Ascend NPU）以及 Agent 异步架构的工程演进**。

### 2. 版本发布
**无**。近期无新版本的 Tag 或 Release。

### 3. 重点 Issues
- **[#6478](https://github.com/volcengine/verl/issues/6478) [Bug] 多种 RL 算法实现不一致性问题**
  - **摘要**：开发者通过静态代码分析指出 `verl/trainer/ppo/core_algos.py` 中存在三类算法正确性缺陷，具体包括：`clip_cov`、`kl_cov` 和 `geo_mean` 中缺失对 `negative_approx_kl` 的 clamp 操作；GPG 算法的 `alpha` 参数被静默覆盖；以及 GRPO 存在单样本标准差计算不匹配问题。
  - **影响面**：属于核心算法层的代码级缺陷，可能会影响部分非标准 PPO 变体的训练收敛和数值稳定性。

### 4. 关键 PR 进展
今日的 PR 活动非常活跃，主要分为**算法与模型修复**、**系统底层优化**与**工程与多硬件适配**三个方向：

#### 🛠 算法与模型修复
- **[#6538](https://github.com/volcengine/verl/pull/6538) 稳定 PPO 策略损失比率计算**
  针对 Issue #6478 的部分修复。通过在所有受影响的 PPO 策略损失变体中对 `negative_approx_kl` 进行 clamp 操作，防止出现极端比率导致的不稳定，确保损失和 KL 散度行为受限。
- **[#6539](https://github.com/volcengine/verl/pull/6539) 兼容 trl>=0.29 的 ValueHead 导入**
  修复了 `monkey_patch` 中的兼容性问题，当 `trl` 版本 `>=0.29.0` 时，从 `trl.experimental.ppo` 正确导入 `AutoModelForCausalLMWithValueHead`。
- **[#6540](https://github.com/volcengine/verl/pull/6540) 修复 transformers v5 下 ValueHead 初始化崩溃**
  解决了在 transformers 5.x 环境下，由于 `_LazyAutoMapping.get(key)` 缺失默认位置参数导致 Critic 模型初始化时的 `TypeError` 崩溃问题。

#### 🚀 架构与底层性能优化
- **[#6408](https://github.com/volcengine/verl/pull/6408) Megatron Colocate 模式下的 NCCL 通信器挂起/恢复**
  实现了在 Rollout 阶段释放闲置 NCCL 通信器占用的 GPU 显存（基于 NCCL 2.29.7+ 的原生 API），有效缓解 Colocate 模式下的显存瓶颈。
- **[#6512](https://github.com/volcengine/verl/pull/6512) 通用 FSDP + LoRA 增强**
  重写了 `layered_summon_lora_params`，支持 per-unit LoRA summon、兼容 FSDP1/2 以及 strip-modules，打通了大型多阶段模型（如 Qwen3-Omni-30B）的 RL 微调链路。
- **[#6271](https://github.com/volcengine/verl/pull/6271) Fully-async Pipeline Agent 循环支持多轨迹**
  在全异步流水线中引入单次 Rollout 支持多轨迹输出的能力，为复杂的 Agent 交互和多路径树搜索提供了基础设施。
- **[#6422](https://github.com/volcengine/verl/pull/6422) 通用远程后端抽象**
  引入了针对 RL 训练的通用 Remote Backend 抽象层，并提供了 ArcticRL 的实现实例，增强了框架的分布式扩展能力。

#### 🛠 多硬件适配与工程设施
- **[#6520](https://github.com/volcengine/verl/pull/6520) & [#6535](https://github.com/volcengine/verl/pull/6535) Ascend NPU 适配与 CI 优化**
  前者将 NPU CI 的 CANN 版本升级至 9.0.0；后者将所有 Ascend CI 工作流中的包管理器从 `pip` 全部迁移至 `uv`，以利用内部集群 PyPI 缓存加速构建。
- **[#5968](https://github.com/volcengine/verl/pull/5968) Ascend NPU 异步训练断点续训**
  修复了在 Ascend NPU 上进行完全异步训练时，保存 Checkpoint 触发 `NotImplementedError` 的问题。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **攻坚“AGI 时代”的基础设施瓶颈**：verl 正在解决超大规模模型（如 30B 级别 MoE/Dense 模型）在 RLHF 阶段的硬核工程问题（如 Megatron 模式下的 NCCL 显存占用、FSDP 复杂 LoRA 管理）。
2. **多模态与 Agent RL 的前沿探索**：随着 LLM 转向 Agent 范式，verl 及时跟进了全异步流水线下的多轨迹 Rollout 支持，这是构建高性能、具备自我进化能力的 Agent 框架的核心支撑。
3. **深度且广泛的软硬件生态融合**：项目不仅保持着对 Nvidia 底层优化的极致压榨，还在持续跟进Ascend NPU 的深度适配，并在第一时间响应 `transformers v5` 和 `trl v0.29` 的破坏性更新。这种敏捷的上下游生态跟进能力，使其成为 Post-training 领域极具生产力的底座。

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