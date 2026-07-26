# RL 开源生态日报 2026-07-27

> 生成时间: 2026-07-26 22:16 UTC | 覆盖项目: 15 个

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
当前的强化学习（RL）开源生态已呈现出极为清晰的“双轨制”分化格局：
一方面，**以大模型对齐（RLHF/GRPO）为核心的 LLM 后训练框架**占据了生态的绝对热度与资源。以 TRL、slime 和 verl 为代表的头部项目，正以极高的代码迭代频率，攻坚超长上下文、高并发异构算力与极低比特量化下的工程极限。
另一方面，**传统强化学习（TS/RL）与多智能体（MARL）环境及基础库**（如 Gymnasium, PettingZoo, rl_games）则步入平稳演进期，工作重心转向底层物理引擎重构（如 Box2D 迁移至 PyMunk）、向量化 API 标准化以及隐蔽数据流的防范，维持着其作为算法测试床的纯粹性与权威性。

## 各项目活跃度对比
今日有真实代码变动的项目呈现出高度集中的特性。大模型对齐框架主导了今天的工程迭代：

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **TRL** | 8 | 9 | 1 | 进入密集修补期，核心聚焦 GRPO 显存优化与数值稳定性 |
| **slime** | 1 | 10 | 0 | 极度硬核，全面清算异步生成与上下文并行（CP）的底层 Bug |
| **verl** | 3 | 5 | 0 | 探索下一代硬件架构兼容（B300）与极低比特（MXFP4）权重同步 |
| **Gymnasium** | 2 | 2 | 0 | 筹备底层物理引擎大重构，引入性能基准测试，拒绝盲目扩充生态 |
| **PettingZoo** | 2 | 1 | 0 | 推进底层 API 统一内化，接入高逼真视觉多智能体环境 |
| **rl_games** | 0 | 1 | 0 | 修复向量化环境 autoreset 导致的隐蔽数据污染 Bug |
| **torchtune** | 1 | 0 | 0 | 活跃度低，梳理 Tokenizer 与数据对齐的历史技术债 |
| **AReaL** | 1 | 0 | 0 | 处于停滞态，清理 GRPO 归一化逻辑相关的陈旧 Issue |
| **无活动项目** | - | - | - | (CleanRL, OpenRLHF, SB3, Tianshou 等) 今日维持静默 |

## 共同关注的研究与工程方向
基于今日各项目的核心变更，当前 RL 生态的技术攻坚向以下两大维度深度收敛：

**研究侧信号（算法与评估严谨性）：**
1. **优势函数归一化的绝对精确性**：无论是 slime 修复上下文并行（CP）下的优势归一化 Bug，还是 verl 对齐 RLOO 估计算子的向量化缺陷，均表明学术界和工业界对 GRPO 及衍生 RL 算法的数学一致性要求达到了极其严苛的程度。分布式计算切分不能破坏组内相对优势的统计学逻辑。
2. **多模态与异构奖励对齐**：verl 修复稀疏 `reward_extra_info` 批处理逻辑，以及 TRL 修复 VLM 纯文本数据集的 Packing 限制，反映出当前前沿模型训练不仅要处理纯文本，更要在底层算子级别兼容多模态混合数据与非标格式奖励。

**工程/基础设施侧信号（算力压榨与并发鲁棒性）：**
1. **异步调度与分布式通信排雷**：大规模 RLHF 的瓶颈在于 Rollout 生成。slime 集中修复全异步 Rollout 死锁、生成锁重放保护，以及 TRL 优化 AsyncGRPOTrainer 指标，证明了“全异步生成+多引擎协同”是当前突破算力墙的主流工程范式。
2. **数值溢出防御与底层精度控制**：随着训练序列拉长和模型增大，FP16/BF16 下的数值发散成为致命问题。今日 TRL 紧急修复 GRPO 的 KL 散度 FP32 log-ratio 保护，verl 报告 FP32 模块静默降精度 Bug，均说明**混合精度下的边界数值保护机制**是当前框架开发的最高优先级。

## 差异化定位分析
- **TRL（敏捷与广度基座）**：响应速度极快，致力于抹平底层依赖（bitsandbytes）兼容性缝隙，解决 vLLM colocate 等贴近开源社区痛点的工程问题，是轻量级与中等规模 RLHF 的首选通用框架。
- **verl（极致算力与前沿硬件试验田）**：深度绑定 Megatron 后端，前瞻性地探索 Muon 优化器、MXFP4 极低比特动态权重同步，并直面 B300/GB300 新架构适配。定位于支撑极其庞大且需要精细化调优的工业级后训练流。
- **slime（硬核复杂并发控制）**：专注于解决极长上下文窗口、投机解码与多模态嵌套下的复杂分布式训练难题，其对底层死锁控制和事件循环的严密排查，证明了其作为大参数量模型对齐硬核基座的定位。
- **rl_games（经典控制吞吐王者）**：死磕高并发向量化环境（如 EnvPool, Isaac Gym）下的数据流转纯净度。不同于 LLM 框架，它更关注机械臂、无人机等连续控制任务中极其高频的底层 API 交互准确率。

## 社区热度与成熟度
- **开源协作模式的分化**：对于 LLM RL 框架（TRL, verl），社区热度呈爆发态势，Issues 多集中于对最新大模型架构和新硬件的适配请求，项目通过极高频的 PR 合并来维持系统的稳定运转。对于成熟的基础设施（如 AReaL, torchtune），社区重心转向清理隐藏较深的技术债务（如 Tokenizer EOS 对齐）。
- **核心边界把控与生态纯洁度**：Gymnasium 和 PettingZoo 展现了传统 RL 基金会极高的成熟度与克制力。它们坚决拒绝外部强行塞入的 LLM 评测工具或小众环境（一日内连续关闭多个此类 PR），同时稳步推进底层引擎大重构（淘汰 Box2D/Supersuit），确保了 API 标准作为“通用测试床”的权威性不被动摇。

## 值得关注的趋势信号
1. **下一代低比特量化全面渗透 RLHF**：verl 对 MXFP4 动态 Rollout 权重更新的探索（尽管当前 PR 暂关），释放了明确信号：在 RL 的大规模 Rollout 采样阶段，使用 FP4 甚至更低比特的权重进行推理同步，即将成为大幅削减显存开销的标配方案。
2. **GRPO 算法下的“数据流防泄漏”**：无论是 slime 修复的“全异步 Rollout 丢失完成组”，还是 rl_games 修复的“PPO autoreset 垃圾行污染”，都指向了一个共性趋势——在复杂的异步与向量化环境中，**保证输入策略梯度计算的数据绝对纯粹**，是保障大模型不发生训练崩塌的隐形底线。
3. **优化器算法的底层革新**：Muon 等新兴优化器正在快速跨越研究向工程的鸿沟，以 verl 为代表的框架已将其与 Megatron 的张量并行深度结合。RL 的算力竞争正在从单纯的“扩大 Batch Size”向“底层优化器并行计算架构”转移。

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

# 📰 slime RL 生态日报 (2026-07-27)

## 1. 今日速览
过去 24 小时，slime 仓库活动高度聚焦于底层系统的缺陷修复。项目无新版本发布，仅有 1 条常规 Bug 反馈，但合并了高达 10 个核心 PR。这批 PR 由开发者 `keepkeen` 集中提交，深度清理解了异步生成、上下文并行（CP）、数据切片以及评估配置等核心模块的技术债务。

## 2. 版本发布
**无**。主分支当前正处于 0.3.0 版本后的密集重构与错误修复期。

## 3. 重点 Issues
- **[#2215] [Bug] GLM5.2 模型转换时报错** [链接](https://github.com/THUDM/slime/issues/2215)
  - **详情**：用户反馈在混合使用 `main` 分支（支持 GLM5.2）与 `0.3.0` release 组件时，模型转换流程触发报错。该问题揭示了 slime 在快速迭代新模型支持时，与下游或历史版本组件存在的版本兼容性摩擦，目前已有维护者介入但尚未完全闭环。

## 4. 关键 PR 进展
今日的 10 个 PR 极大地增强了 slime 在复杂分布式训练和异步推理下的鲁棒性：

- **异步与引擎调度修复**
  - **[#2238] 修复全异步 Rollout 丢失已完成组的问题** [链接](https://github.com/THUDM/slime/pull/2238)：修复了全异步生成逻辑中清空输出队列导致的完成组数据丢失缺陷，同时解决了可能冻结 Worker 事件循环的死锁隐患。
  - **[#2239] 清理 `exec_and_wait` 的生成锁** [链接](https://github.com/THUDM/slime/pull/2239)：修复了底层 RPC 重放保护导致同名 tag 无法重试的逻辑漏洞。

- **分布式训练与并行计算修正**
  - **[#2235] 基于包含 CP 的 DP 组白化优势** [链接](https://github.com/THUDM/slime/pull/2235)：修复了上下文并行（CP）场景下优势函数归一化错误使用局部统计数据的 Bug，确保了 CP 下 RL 训练的数学正确性。
  - **[#2234] 匹配 `--log-correct-samples` 与 DP-local samples** [链接](https://github.com/THUDM/slime/pull/2234)：修复了 DP > 1 时正确样本日志记录的 `IndexError` 崩溃及数据错配问题。

- **数据处理与评估管线优化**
  - **[#2242] 修复评估配置解析丢失问题** [链接](https://github.com/THUDM/slime/pull/2242)：使 `eval.defaults` 正确继承所有 YAML 键值，并恢复按数据集粒度的 `stop` / `min_new_tokens` 配置生效。
  - **[#2241] 支持数据集负索引切片 `path@[-100:]`** [链接](https://github.com/THUDM/slime/pull/2241)：修复了底层数据解析器中违背 Pandas 语义的负索引切片崩溃 Bug。
  - **[#2237] 保持混合多模态数据的过滤顺序** [链接](https://github.com/THUDM/slime/pull/2237)：修复了 `filter_long_prompt` 因处理逻辑差异导致纯文本与多模态样本发生隐式重排的问题。

- **推测解码与状态管理**
  - **[#2240] 修复投机采样指标计算方式** [链接](https://github.com/THUDM/slime/pull/2240)：将投机解码接受率/长度的计算从“单样本比例均值”纠正为“批次池化统计”，消除了指标向下的偏差。
  - **[#2243] 恢复 `load_other_checkpoint` 后的 `args.ckpt_step`** [链接](https://github.com/THUDM/slime/pull/2243)：修复了 checkpoint 步骤号在特定加载逻辑下发生永久泄漏覆盖的问题。
  - **[#2236] 停止覆盖显式设置的 `--start-rollout-id`** [链接](https://github.com/THUDM/slime/pull/2236)：修复了在非 Megatron 断点续训场景下，显式指定的启动 ID 被静默丢弃的 Bug。

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
slime 正在证明其不仅仅是一个模型微调工具，而是在向**工业级高并发、强异构的 RLHF 训练框架**演进。
今日的 PR 修复点极具技术含金量：它们精准打击了 LLM 强化学习在落地 advanced 特性（如**全异步 Rollout 生成**、**投机解码 Metrics**、**上下文并行 CP 下的数学对齐**）时必然遭遇的深水区 Bug。这种对底层并发控制和分布式计算逻辑的严密排查，意味着 slime 正在为支撑超大规模上下文窗口和多模态混合训练铺平道路，是当前复杂 LLM 对齐实践中值得追踪的硬核基座。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

**AReaL 强化学习生态日报 (2026-07-27)**

**1. 今日速览**
过去 24 小时内，AReaL 仓库整体活跃度趋于平稳。无新增代码提交（PR）或版本发布。动态主要集中在历史议题的清理与维护：1 项关于底层算法数值逻辑的 Bug 报告被正式关闭并标记为 `[stale]`。

**2. 版本发布**
*   **无新增 Release**。项目当前无近期发布的全新版本。

**3. 重点 Issues**
*   **[#1419] [CLOSED] [stale] [BUG] Partial rollout groups silently corrupt GRPO group normalization** (作者: EazyReal)
    *   **链接:** [areal-project/AReaL Issue #1419](https://github.com/areal-project/AReaL/issues/1419)
    *   **技术摘要:** 该 Issue 报告了一个框架级别的数值逻辑 Bug。在 GRPO（Group Relative Policy Optimization）算法中，部分 rollout groups 会导致组归一化被静默破坏。作者提供了不依赖 Docker 的纯 CPU 环境确定性复现脚本，证明了该问题在不同随机种子下均可稳定复现。该问题已于 2026-07-26 关闭并标记为 `stale`。

**4. 关键 PR 进展**
*   **无活跃 PR**。过去 24 小时内无新增或更新的拉取请求。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
*   **聚焦核心算法边界问题:** 从 #1419 记录的 “Partial rollout groups 损坏 GRPO 归一化” 问题可以看出，AReaL 生态在处理大模型强化学习时，面临着极高深度的工程与算法结合挑战。对于关注 RLHF/GRPO 底层算子计算、Rollout 调度策略以及数值精度的研究者和高级开发者而言，跟进此类底层框架级 Issue 的发现与修复，具有极高的参考价值。
    *   **项目地址:** [github.com/inclusionAI/AReaL](https://github.com/inclusionAI/AReaL)

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 2026-07-27 TRL (Transformers Reinforcement Learning) 开源项目日报摘要：

### 1. 今日速览
过去 24 小时内，TRL 项目保持了高度活跃的开发与维护节奏。共发布了 **1 个新版本 (v1.9.1)**，涉及 **8 条 Issues 更新**（主要集中在 GRPO 生成效率、显存优化及 KL 散度计算）以及 **9 条 PR 更新**（核心聚焦于 bitsandbytes 0.50.0 适配、数值溢出修复及训练指标完善）。

---

### 2. 版本发布
*   **[v1.9.1 发布](https://github.com/huggingface/trl/releases/tag/v1.9.1)**
    *   **核心更新**：修复了 vLLM server-mode 下的通信器初始化问题（PR #6417）；为 `AsyncGRPOTrainer` 增加了队列等待时间指标（PR #6489）；临时固定了 CI 中的依赖版本以修复测试问题。

---

### 3. 重点 Issues
今日的 Issue 反映了社区在**显存优化、数值稳定性**以及**多模态数据边界**方面的核心诉求：

*   **[🚀 GRPO 显存优化] 为 DPO 和 GRPO 添加 Activation Checkpointing** ([Issue #3717](https://github.com/huggingface/trl/issues/3717))
    *   *摘要*：社区呼吁将目前仅 SFT 支持的 Activation Checkpointing（激活检查点）扩展到 DPO 和 GRPO Trainer 中，以缓解大模型强化学习训练中的严重显存瓶颈。
*   **[🐛 数值稳定性] CPO/SimPO 截断导致 NaN Loss** ([Issue #6548](https://github.com/huggingface/trl/issues/6548))
    *   *摘要*：`CPOTrainer` 中对 response 的截断逻辑存在漏洞，在 `loss_type="simpo"` 模式下可能会悄无声息地产生空 completions，进而导致 Loss 变为 NaN。
*   **[🐛 机制优化] vLLM 权重与 sleep_mode 不同步** ([Issue #5312](https://github.com/huggingface/trl/issues/5312))
    *   *摘要*：在 `vllm_mode="colocate"` 且开启 `vllm_enable_sleep_mode=True` 时，vLLM 权重未正确同步，导致 GRPO 训练异常。
*   **[✨ 多模态边界] VLM 在纯文本数据集上拒绝 Packing** ([Issue #6545](https://github.com/huggingface/trl/issues/6545))
    *   *摘要*：`SFTTrainer` 错误地基于“模型是否为 VLM”来拦截 packing，而不是“数据是否包含图像”。这导致 VLM 在处理纯文本会话数据时无法使用 packing 加速。

---

### 4. 关键 PR 进展
开发团队今日合并/提交了多个高质量的底层修复与适配 PR：

*   **[数值溢出修复] 修复原生 GRPO KL Estimator 的数值溢出问题** ([PR #6550](https://github.com/huggingface/trl/pull/6550))
    *   *摘要*：针对 GRPO 训练时参考模型与当前模型对数概率发散导致的 `exp` 数值溢出，该 PR 提出在计算 log-ratio 前强制转换为 FP32，有效消除了非有限损失的产生。
*   **[依赖适配] 适配 bitsandbytes 0.50.0 与量化测试修复** ([PR #6538](https://github.com/huggingface/trl/pull/6538), [PR #6546](https://github.com/huggingface/trl/pull/6546))
    *   *摘要*：随着 `bitsandbytes 0.50.0` 移除弃用的 `_check_is_size` 接口，TRL 移除了之前的临时版本限制，修复了 SFT、DPO 和 KTO 中的量化测试，并解决了一个参数比较前未强制转换至 float32 的潜在 Bug。
*   **[训练修复] 允许 VLM 在纯文本数据上使用 Packing** ([PR #6547](https://github.com/huggingface/trl/pull/6547))
    *   *摘要*：修复了 Issue #6545，解除了对 VLM 纯文本数据的 `packing`、`padding_free` 等特性的不合理限制。
*   **[逻辑修正] DPO `apo_down` Loss 的一致性修复** ([PR #6475](https://github.com/huggingface/trl/pull/6475))
    *   *摘要*：修复了 `apo_down` 损失函数中仅对其中一个项应用 `f_divergence_type` 的逻辑错误，使其完全对齐原始 APO 论文公式。
*   **[指标优化] AsyncGRPOTrainer 增加 step_time_s 指标** ([PR #6490](https://github.com/huggingface/trl/pull/6490))
    *   *摘要*：低风险的监控增强，在 `AsyncGRPOTrainer` 中添加了基于优化器步骤的端到端耗时指标。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
TRL 正在迅速响应 LLM 强化学习领域的**工程痛点与前沿需求**。
1. **解决算力与内存瓶颈**：从完善 `vLLM colocate` 模式（如 sleep mode 同步）、优化异步训练指标，到积极讨论引入 GRPO 的 Activation Checkpointing，TRL 正在系统性地降低开发者的 RLHF 显存与通信门槛。
2. **强化数值稳定性**：随着 GRPO 等复杂 RL 算法在长文本 Reasoning 模型上的大规模应用，KL 散度计算中的数值溢出（FP16 下极常见）成为致命问题。TRL 社区能在一日内快速响应并提交 FP32 log-ratio 保护机制，展现了极高的工程成熟度。
3. **生态跟进敏捷**：第一时间抹平与底层依赖（如 `bitsandbytes` 大版本更新、PEFT 量化）的兼容性缝隙，确保 QLoRA 结合 DPO/SFT 等轻量化训练路线的稳定性。TRL 已经成为大模型对齐阶段不可或缺的工业级基础设施。

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

### verl RL 生态日报 | 2026-07-27

#### 1. 今日速览
过去 24 小时，verl 仓库共更新 3 条 Issues 和 5 条 PRs，无新版本发布。今日焦点高度集中在**底层训练框架的精细化打磨**与**前沿算法的工程化落地**：开发者针对 Megatron 后端提交了 Muon 优化器和 MXFP4 动态权重的支持，同时在算法侧修复了 RLOO 估计算子与奖励循环中的张量对齐缺陷。

#### 2. 版本发布
* 无最新 Release。

#### 3. 重点 Issues
* **[Bug] FP32 模型加载忽略 `_keep_in_fp32_modules` 导致精度静默下降** ([#7092](https://github.com/volcengine/verl/issues/7092))
  *涉及 Inkling、Qwen3-Next 等模型。在混合精度训练流中，特定模块未被强制保留在 FP32，可能引发难以察觉的精度损失，建议相关模型用户重点关注。*
* **[Bug] 官方 Docker 容器在 B300/GB300 (sm_103) 架构上报错** ([#6949](https://github.com/volcengine/verl/issues/6949))
  *`verlai/verl:vllm023.dev1` 镜像在最新的 B300/GB300 硬件上存在兼容性中断问题。*
* **[Feature] 请求补充 Agentic RL 详细文档** ([#7152](https://github.com/volcengine/verl/issues/7152))
  *社区开发者呼吁提供如何训练 Agentic RL 以及如何自定义实现 Agentic 环境的详细教程。*

#### 4. 关键 PR 进展
* **[feat] 为 Megatron 后端添加 Muon 优化器支持** ([#7120](https://github.com/volcengine/verl/pull/7120))
  *打通了 Megatron-Core 自带的 `TensorParallelMuon`，打破了原生后端仅支持 AdamW 类优化器的限制，为引入新兴优化器提供基础设施。*
* **[feat] 支持 MXFP4 动态 Rollout 权重更新** ([#7149](https://github.com/volcengine/verl/pull/7149)) *(已关闭)*
  *将 Megatron 的 QAT 权重同步路径从 NVFP4 扩展至 MXFP4（OCP E2M1 格式），并在 rollout 重同步时打包 BF16 权重供 vLLM 加载。尽管已关闭，但展示了极低比特权重同步的技术探索。*
* **[algo] 修复 `as_torch_index` 的 dense ids 及 RLOO 向量化校验缺陷** ([#7150](https://github.com/volcengine/verl/pull/7150))
  *修复了分组优势路径中的两个核心缺陷，确保向量化估计器与传统的循环计算逻辑完全等价，提升 RLOO 计算的准确性。*
* **[reward] 修复稀疏 `reward_extra_info` 导致的 Reward Loop 批处理崩溃** ([#7151](https://github.com/volcengine/verl/pull/7151))
  *修正了 `RewardLoopManager` 中仅从单个样本推断 schema 的逻辑，解决了异构/稀疏奖励键导致的聚合崩溃或信息丢失问题。*
* **[bugfix] 在 THD Megatron 批次中保留并重放 R2 路由** ([#7106](https://github.com/volcengine/verl/pull/7106))
  *跨 THD-packed 批次保持 Megatron MoE 的路由决策，增强了多模态嵌套配置的鲁棒性。*

#### 5. 为什么这个项目值得在当前 RL 生态继续关注？
verl 正在以极高的工程粒度推进后训练的极限优化。从今日的 PR 走向可以看出两个明确趋势：
1. **深度绑定前沿硬件与底层算子**：面对新一代 B300/GB300 硬件，verl 社区正在快速响应兼容性问题；同时积极探索 MXFP4、NVFP4 等下一代低精度量化格式在 vLLM rollout 中的动态同步，这对降低大规模 RLHF 的显存开销至关重要。
2. **兼容新兴算法架构**：引入 Muon 优化器、修复 RLOO 等基础算法的张量对齐问题、修复异构 Reward 的批处理逻辑，表明 verl 致力于成为一个**算法兼容度极高且计算严格对齐**的 RL 胶水层框架，是当前大模型后训练（尤其是复杂奖励机制和新优化器结合）的绝佳工程试验田。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

**torchtune RL 生态日报 - 2026-07-27**

以下是 [torchtune](https://github.com/pytorch/torchtune) 过去 24 小时的 GitHub 活动数据分析摘要。

### 1. 今日速览
- **Issues 更新**: 1 条（处于 Open 状态）
- **Pull Requests 更新**: 0 条
- **新版本发布**: 0 个
- **整体活跃度**: 今日项目整体处于低活跃状态，无新代码合并或版本迭代，主要工程焦点集中在历史技术债的梳理与社区简单任务的跟进上。

### 2. 版本发布
- **无新版本发布**。项目当前代码库未产生新的 Release tag。

### 3. 重点 Issues
- **#2478 [bug, good first issue, community help wanted] Add `add_end_token` to the Gemma Tokenizer**
  - **作者**: pbontrager（最初创建于 2025-03-11，昨日更新）
  - **链接**: [meta-pytorch/torchtune Issue #2478](https://github.com/pytorch/torchtune/issues/2478)
  - **技术摘要**: 该 Issue 指出 Gemma 分词器（Tokenizer）的 `tokenize_messages` 方法尚未同步此前为 Llama3 引入的 `add_end_token` 特性（见 [PR #1494](https://github.com/pytorch/torchtune/pull/1494)）。在序列末尾正确添加结束符（EOS token）对于自回归生成至关重要，若缺失可能导致模型无法正确停止生成。
  - **生态价值**: 该问题被标记为 `good first issue` 和 `community help wanted`，是一个极佳的切入点，适合新加入 RL/LLM 微调生态的开发者提交补丁。

### 4. 关键 PR 进展
- **无**。过去 24 小时内，没有任何处于 Open、Closed 或 Merged 状态的 PR 更新。针对上述 Issue #2478 的修复，目前社区尚未提交可直接合并的代码。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **RL 数据对齐的基石保障**: 在 RLHF（基于人类反馈的强化学习）或其他 LLM 对齐流程中，分词阶段的一致性（如严格控制 BOS/EOS tokens）直接决定了 Reward Model（奖励模型）和 RL 策略梯度的训练稳定性。torchtune 对 Llama、Gemma 等主流开源架构 Tokenizer 底层逻辑的严格校验（如 Issue #2478 所示），是保障 RL 训练不出错的基础。
2. **高价值的技术入口**: 即使在代码无大变动的低活跃日，torchtune 维护者依然在持续清理如 Tokenizer 行为不一致等“隐藏地雷”。对于希望在 PyTorch 原生生态中深入理解模型底层预处理与微调机制的开发者而言，持续追踪这些“微小但致命”的底层数据流修正是不可多得的实战教材。

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

# RL 日报：rl_games 生态追踪 (2026-07-27)

**项目地址**: [github.com/Denys88/rl_games](https://github.com/Denys88/rl_games)

## 1. 今日速览
过去 24 小时内，rl_games 仓库无新增 Issue、无新版本发布。核心开发活动集中在现有核心算法的准确性修复上，有一个关键 PR 迎来了重要更新。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

## 4. 关键 PR 进展
今日仅有 1 个 PR 更新，涉及 PPO 算法在底层环境交互时的核心数据清洗：

*   **#362 [OPEN] PPO: mask next_step-autoreset garbage rows; scalar sigma parametrization**
    *   **作者**: ViktorM
    *   **更新时间**: 2026-07-26
    *   **链接**: [Denys88/rl_games PR #362](https://github.com/Denys88/rl_games/pull/362)
    *   **技术摘要**: 该 PR 是 autoreset 正确性修复工作的 PPO 部分（SAC 部分已在提交 b1ed755 中合入）。在 `next_step-autoreset` 环境（如 EnvPool、Gymnasium 1.x 原生向量化环境）中，环境重置产生的“过渡步”包含无效数据（动作被忽略、填充的 dummy reward、以及上一 Episode 终止时的 obs）。此前这些无效数据被错误混入 PPO rollouts 中作为真实训练数据，可能导致 1/`n_steps` 的状态污染。该 PR 通过 mask 掉这些 garbage rows 来保证训练数据的纯粹性，并引入了 scalar sigma 参数化。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
rl_games 虽以轻量和极高的 GPU 吞吐量著称，但其在生产环境中的可靠性依赖于对底层 API 细节的严格把控。随着强化学习向量化环境标准（如 Gymnasium 1.x 和 EnvPool）的演进，autoreset 机制带来的“边界数据污染”是当前 RL 工程中极容易被忽视、却会实质影响模型收敛的隐蔽 Bug。该仓库维护者持续跟进并修复此类底层数据流问题（如 PR #362），结合其对高并发向量化环境的高效支持，使其依然是当前 RL 生态中进行大规模 Isaac Gym/Nguyen 环境、机械臂控制等复杂连续控制任务的首选基座之一。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

这里是为您生成的 2026-07-27 Gymnasium 强化学习开源生态日报摘要。

### 1. 今日速览
- **仓库状态**：整体活跃度平稳。过去 24 小时内无新版本发布，共更新 2 条 Issues 和 2 条 Pull Requests。
- **核心动向**：当前社区焦点集中在**底层物理引擎的迁移探讨**（Box2D 至 PyMunk）、**向量环境性能基准测试的引入**，以及对**特定垂直领域环境（如火灾响应、大模型科学评估）的生态边界把控**。

### 2. 版本发布
- **今日无新版本发布**（核心 API 保持稳定）。

### 3. 重点 Issues
- **[#1597] [OPEN] [help wanted] 将所有环境从 box2d 迁移至 pymunk**
  - **链接**: [Farama-Foundation/Gymnasium Issue #1597](https://github.com/Farama-Foundation/Gymnasium/issues/1597)
  - **摘要**: 核心维护者发起的重要长期讨论。指出当前 Box2D 的 Python 绑定已约 6 年未维护，相比之下 PyMunk 绑定不仅维护活跃、文档完善，且作者承诺持续维护。此举预示着 Gymnasium 未来版本中 2D 物理环境底层的重大重构方向。
- **[#1649] [CLOSED] 增加 REFUTE 科学评估与校准基准**
  - **链接**: [Farama-Foundation/Gymnasium Issue #1649](https://github.com/Farama-Foundation/Gymnasium/issues/1649)
  - **摘要**: 提议在文档中引入名为 REFUTE 的外部评估工具（基于论文假设的预测、打分与 Brier/ECE 校准）。该 Issue 已被关闭，表明项目维护者对于将偏向 LLM 科学评估属性的非典型 RL 工具纳入官方文档持保守态度，维持了项目专注传统 RL 环境的定位。

### 4. 关键 PR 进展
- **[#1640] [OPEN] 增加向量环境 step 基准测试**
  - **链接**: [Farama-Foundation/Gymnasium PR #1640](https://github.com/Farama-Foundation/Gymnasium/pull/1640)
  - **摘要**: 开发者 `Kallinteris-Andreas` 提交了 `benchmark_step_vector` 功能，用于测量向量环境单步运行的吞吐量（Steps/sec）。该 PR 旨在满足 MJX 等现代高速物理引擎的测试需求，将有助于开发者评估多环境并行的性能瓶颈。
- **[#1650] [CLOSED] 添加外部环境 Ignis**
  - **链接**: [Farama-Foundation/Gymnasium PR #1650](https://github.com/Farama-Foundation/Gymnasium/pull/1650)
  - **摘要**: 提议将用于 3D 室内/建筑火灾扑灭的元胞自动机 RL 环境 `Ignis` 添加到第三方环境列表。该 PR 在提交当日即被关闭，反映出维护者对第三方环境收录标准的严格筛选。

### 5. 为什么这个项目值得在当前 RL 生态继续关注？
1. **敢于重构底层依赖**：通过 Issue #1597 可见，Gymnasium 团队并不满足于现状，正积极评估将核心 2D 物理引擎从年久失修的 Box2D 迁移至更具生命力的 PyMunk，以确保未来 5-10 年的环境可用性。
2. **注重工程性能与标准化**：PR #1640 引入向量环境基准测试，说明项目在 API 标准化之外，正通过底层工具链（如 `ruff` 校验、性能剖析）提升框架在处理大规模并行 RL 数据吞吐时的工程鲁棒性。
3. **坚守 RL 核心边界**：从一日内快速关闭 LLM 评估工具（#1649）和小众应用环境（#1650）的动作来看，Farama 基金会对 Gymnasium 的演进采取“克制且专注”的策略，确保其作为 RL 算法“通用测试床”的权威性与轻量化。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

以下是为您生成的 PettingZoo 项目 2026-07-27 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，PettingZoo 仓库的活跃度主要集中在多智能体环境生态的扩展与底层架构的持续优化上。社区共更新了 **2 条 Issues**（1 个架构演进讨论，1 个无关请求被关闭）和 **1 条 PR**（新增第三方视觉多智能体环境）。昨日无新版本发布。

### 2. 版本发布
*   **无**（近期无新版本发布）。

### 3. 重点 Issues
*   **核心架构重构：Wrapper 迁移计划持续推进**
    *   **详情：** 官方维护者提议将环境包装器从 `Supersuit` 迁移至原生的 `pettingzoo.wrappers`，对标 Gymnasium 的 API 设计，最终目标是在核心库中彻底淘汰外部依赖 `Supersuit`。此 Issue 目前处于 `help wanted` 状态，呼吁社区以“一环境一 PR”的方式参与代码迁移。
    *   **链接：** [Farama-Foundation/PettingZoo Issue #1365](https://github.com/Farama-Foundation/PettingZoo/issues/1365)
*   **垃圾/无关请求过滤**
    *   **详情：** 有用户试图将名为 `REFUTE` 的科学大模型评测工具添加到生态文档中。维护者及时审查并关闭了该请求（标记为 `[Not Human]`），保持了多智能体 RL 生态文档的纯粹性。
    *   **链接：** [Farama-Foundation/PettingZoo Issue #1405](https://github.com/Farama-Foundation/PettingZoo/issues/1405)

### 4. 关键 PR 进展
*   **生态扩充：引入基于 AirSim 的视觉无人机群环境**
    *   **详情：** 开发者 `Lauqz` 提交了一个新的第三方环境接入 PR。该环境封装了 AirSim 和虚幻引擎 4（Unreal Engine 4），提供了一个标准的 PettingZoo 并行环境，用于实现基于视觉的四旋翼无人机群导航任务，并原生兼容 SB3 等算法库。
    *   **链接：** [Farama-Foundation/PettingZoo PR #1406](https://github.com/Farama-Foundation/PettingZoo/pull/1406)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
*   **API 统一与内化：** PettingZoo 正在稳步推进其底层架构的“Gymnasium 化”。将 Wrappers 内化为原生支持（淘汰 Supersuit），意味着多智能体（MARL）的 API 标准正进一步走向大一统，这将大幅降低开发者在单智能体与多智能体之间切换的认知成本。
*   **覆盖前沿硬件在环（HITL）需求：** 今日接入的无人机群 PR 折射出当前 MARL 领域的落地趋势——社区不再满足于简单的网格世界或 2D 游戏，而是积极将 PettingZoo 标准接口应用于高逼真物理引擎（UE4/AirSim）和高维视觉输入的复杂无人机/机器人控制中。
*   **作为 Farama 基金会生态基石：** 作为 Farama-Foundation 的核心组件之一，PettingZoo 的任何接口演进和生态扩展，都将直接决定下一代 MARL 算法库（如 CleanRL, Tianshou 等）的底层标准走向，具有较高的技术风向标价值。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>