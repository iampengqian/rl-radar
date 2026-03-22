# RL 开源生态日报 2026-03-23

> 生成时间: 2026-03-22 22:02 UTC | 覆盖项目: 15 个

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

2026-03-23 的 RL 开源生态呈现出明显的**分层演进**态势。
1.  **LLM 训练框架**：以 **verl**、**TRL** 和 **slime** 为首的项目进入了高频厮杀阶段，重点解决分布式训练下的**内存墙**（CPU OOM/显存碎片）和**通信瓶颈**，并快速适配 Qwen3.5、GLM-4.7 等新架构。
2.  **底层基础设施**：**AReaL** 和 **ROLL** 专注于内核级性能压榨与异构算力适配，显示出 RL 训练正在向软硬结合的深水区迈进。
3.  **经典 RL 生态**：**Gymnasium**、**rl_games** 和 **Open Instruct** 处于维护或功能补全阶段，重点在于 API 标准化和算法完整性。

## 各项目活跃度对比

以下为过去 24 小时内有明确动态的项目对比：

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 5 | 13 | 0 | **高**。多后端集成与显存优化为主线，NPU 适配加速。 |
| **TRL** | 2 | 15 | 0 | **高**。DeepSpeed 分布式稳定性大幅修复，算法库扩充（SDPO）。 |
| **slime** | 3 | 10 | 0 | **高**。快速跟进 SOTA 模型（Qwen/GLM），解决 SP/CP 分布式 Bug。 |
| **AReaL** | 0 | 3 | 0 | **中**。聚焦 RPC 通信稳定性与 FSDP 流水线性能。 |
| **rl_games** | 1 | 2 | 0 | **低**。修复 SAC 关键 Bug，拓展 MyoSuite 生态。 |
| **ROLL** | 1 | 1 | 0 | **低**。暴露大规模异步训练瓶颈，推进国产硬件适配。 |
| **Gymnasium** | 3 | 0 | 0 | **低**。聚焦 MuJoCo-v5 文档与渲染问题。 |
| **Open Instruct**| 0 | 1 | 0 | **低**。开发 PPO+Value Model 深度支持。 |

*(注：CleanRL, OpenRLHF, Stable Baselines3 等项目过去 24h 无活动)*

## 共同关注的研究与工程方向

### 1. 研究侧信号：RLHF 算法的融合与细化
*   **PPO 回归与变体**：**Open Instruct** 正在将 Value Model 引入 GRPO（#1462），**TRL** 修复了 PPO 的 Reward 定位问题（#5338）。这表明社区不再满足于 GRPO 的简化版，开始重新审视并融合经典 PPO 的稳定性优势（GAE、Value Loss）。
*   **新对齐算法涌现**：**TRL** 集成 SDPO（自蒸馏 DPO）和 DGPO，**verl** 提出 GIFT 框架。研究重心正从单一的 PPO/DPO 转向利用自蒸馏、隐式微调等更稠密信号的对齐方法。

### 2. 工程/基础设施侧信号：显存与通信的极限施压
*   **Checkpoint 内存风暴**：**verl** 的 Issue #5703 和 PR #5705 直指大模型保存时的 CPU OOM 问题，这已成为当前超大模型 RL 训练的共性痛点。
*   **推理-训练闭环集成**：**verl** 同时维护 vLLM、SGLang 和 TRT-LLM 后端，**slime** 修复 SGLang 代理冲突。高效的 Rollout 生成已成为 RLHF 框架的核心竞争力。
*   **异构算力争夺战**：**verl** 适配 Ascend NPU，**ROLL** 适配 CoreX BI-V150。RL 框架正在迅速脱离 NVIDIA 依赖，向多芯片生态迁移。

## 差异化定位分析

*   **verl vs. slime (架构先进性 vs. 模型时效性)**：
    *   **verl** 更像是一个**全栈实验平台**，不仅支持多种量化（FP8/NVFP4），还尝试引入全新的算法框架（GIFT），适合探索前沿架构。
    *   **slime** 则是**SOTA 复现急先锋**，对新出的 Qwen3.5、GLM-4.7 以及 Transformers 5.x 的适配极其敏锐，适合需要第一时间跑通最新大模型的研究者。
*   **TRL (工业级易用性) vs. OpenRLHF/ROLL (极致性能)**：
    *   **TRL** 正在通过大量修复 DeepSpeed 边缘 Bug 来巩固其作为"LLM 对齐标准库"的地位，强调易用性和算法广度。
    *   **AReaL** 和 **ROLL** 则更关注**大规模集群的吞吐量**，如 AReaL 优化 FSDP 流水线，ROLL 解决异步 GRPO 瓶颈，它们面向的是百亿/千亿参数模型的生产级训练。

## 社区热度与成熟度

*   **第一梯队 (活跃度极高)**：**verl** 和 **TRL**。不仅 PR 数量多，且 Issue 讨论非常有深度（如 FP8 实现缺陷、CPU OOM 根因），表明拥有高质量的活跃开发者社区。
*   **第二梯队 (垂直领域稳固)**：**slime** 和 **AReaL**。虽然 Issues 数量不及第一梯队，但代码提交频率高，且针对特定问题（如分布式通信、梯度膨胀）的修复非常硬核，显示出核心团队强有力的工程能力。
*   **维护期 (稳定低频)**：**Gymnasium**、**rl_games** 和 **Open Instruct**。主要活动为文档完善和 Bug 修复，属于成熟的工具库，适合作为底层依赖，而非前沿实验场。

## 值得关注的趋势信号

1.  **FP8 量化训练的深水区**：verl Issue #4641 指出 SGLang FP8 实现存在缺陷，说明社区正在从单纯使用量化转向**深度排查量化训练的数值稳定性和显存碎片问题**，这是通往 Blackwell 架构训练的必经之路。
2.  **Agent/Tool Use 训练基建化**：TRL 针对 vLLM 工具调用（Tools=[] vs None）的修复，以及 VLM 多图训练的修正，标志着 RL 框架正在从纯文本对齐转向**多模态 Agent 能力**的系统性训练。
3.  **Checkpoint 成为新瓶颈**：随着模型参数突破 30B/70B，Checkpoints 期间的 CPU 内存激增已成为阻断训练的拦路虎。**verl** 和 **AReaL** 均在尝试通过异步、重分片等策略解决此问题，这一领域的优化将是后续发力的重点。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# ROLL 项目日报：2026-03-23

这里是 **ROLL (Open-Source RLHF/RL)** 项目的每日动态摘要。

### 1. 今日速览
*   **活跃度**：低。过去 24 小时内无版本发布，仅更新 1 个 Issue 和 1 个 PR。
*   **核心关注点**：社区反馈 **Qwen3-8B** 在大规模异步 GRPO 训练下存在显著性能瓶颈；代码库正在集成新的硬件后端兼容性。

### 2. 版本发布
*   **无新版本发布**。

### 3. 重点 Issues
*   **#394 [OPEN] 8×A100 异步 GRPO 训练极慢**
    *   **链接**：[alibaba/ROLL Issue #394](https://github.com/alibaba/ROLL/issues/394)
    *   **详情**：用户报告在使用 8 张 A100 运行 Qwen3-8B 的异步 GRPO 训练时，单步耗时极高。作者怀疑可能存在配置错误或性能瓶颈，请求社区协助确认是否为预期行为。
    *   **分析**：作为 ROLL 的核心高阶用法（Async GRPO + 大模型），该性能问题可能涉及 Rollout 生成与模型更新的同步机制效率，值得大模型训练工程师关注。

### 4. 关键 PR 进展
*   **#393 [OPEN] 新增 CoreX BI-V150 兼容性支持**
    *   **链接**：[alibaba/ROLL PR #393](https://github.com/alibaba/ROLL/pull/393)
    *   **作者**：lxzlxzliuxuzhao
    *   **详情**：该 PR 旨在为 ROLL 添加国产芯片 **CoreX BI-V150** 的适配支持。
    *   **分析**：这表明 ROLL 正在扩展其硬件生态，加速在非 Nvidia 平台上的落地能力。

### 5. 为什么这个项目值得继续关注
*   **前沿算法复现**：ROLL 对 GRPO（Group Relative Policy Optimization）等复杂 RL 算法的支持，使其成为复现 DeepSeek 等顶级模型训练范式的关键开源设施。
*   **大模型训练痛点**：Issue #394 暴露出的性能问题反映了当前 RLHF 在超大模型上的工程挑战，该项目的演进将为解决分布式训练效率提供参考。
*   **国产化适配**：通过 PR #393 可以看出，该项目正在积极适配国产算力（CoreX），对于关注多元算力生态的开发者具有极高的参考价值。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# Slime RL 日报摘要 (2026-03-23)

## 1. 今日速览
过去 24 小时内，Slime (THUDM/slime) 项目保持高频迭代，共处理了 **10 个 PR**（全部已合并/关闭）和 **3 个 Issue**。重点集中在**对新架构（Qwen3.5, DeepseekV3, GLM-4.7）的适配**、**分布式训练稳定性修复（梯度膨胀、代理冲突）**以及**脚本易用性优化**。项目目前处于积极维护状态，快速响应了 Megatron-Core 及 Transformers 新版本带来的兼容性问题。

## 2. 版本发布
*   **无新版本发布**。

## 3. 重点 Issues
*   **[训练故障] H800 集群 NCCL 通信异常**
    *   **Issue**: [#1305](https://github.com/THUDM/slime/issues/1305)
    *   **详情**: 用户在 8xH800 运行 Qwen3-30B-A3B 任务时，起步阶段（<10 steps）频繁遭遇 `ncclUnhandledCudaError` (Error 999)。此问题通常指向节点间通信配置或 CUDA 硬件/驱动层面的不稳定性，目前仍在排查中。

## 4. 关键 PR 进展

### 模型支持与架构更新
*   **支持 GLM-4.7 并清理旧版配置**
    *   **PR**: [#1749](https://github.com/THUDM/slime/pull/1749)
    *   **详情**: 将 GLM-4.5-355B-A32B 升级并重命名为 **GLM-4.7**，同步更新了 Qwen3.5-27B 的 4 节点 GRPO 配置，并增加了 EAGLE 3 MTP（Multi-Token Prediction）示例。
*   **新增 Qwen3.5-4B 模型配置**
    *   **PR**: [#1721](https://github.com/THUDM/slime/pull/1721)
    *   **详情**: 补充了 `Qwen3.5-4B` 的启动脚本，完善了该系列模型在 Slime 生态中的支持矩阵。
*   **修复 DeepseekV3 Bridge 兼容性**
    *   **PR**: [#1734](https://github.com/THUDM/slime/pull/1734)
    *   **详情**: 适配 Transformers 5.x 版本变动，修复了 `DeepseekV3Bridge` 无法从 `rope_parameters` 字典中读取 `rope_theta` 的问题。

### 核心训练与稳定性修复
*   **修复 FLA/线性注意力层梯度膨胀问题**
    *   **PR**: [#1748](https://github.com/THUDM/slime/pull/1748)
    *   **详情**: 解决了 Sequence/Context Parallel (SP/CP) 环境下，FLA 层后向传播梯度被错误地 All-Gather 导致梯度范数被人为放大的严重 Bug。
*   **修复 Qwen3.5 多轮 SFT Loss Mask 失效**
    *   **PR**: [#1742](https://github.com/THUDM/slime/pull/1742)
    *   **详情**: 修复了默认 Loss Mask 类型导致 Qwen3.5 多轮对话模板渲染失败的问题，确保 SFT 流程兼容新的 Chat Template。
*   **修复 MoE Token Dispatcher 传参缺失**
    *   **PR**: [#1737](https://github.com/THUDM/slime/pull/1737)
    *   **详情**: 在 Bridge Provider 中显式传递 `moe_token_dispatcher_type`，修复了 Megatron-Core 校验报错。
*   **解决 SGLang 内部通信代理冲突**
    *   **PR**: [#1714](https://github.com/THUDM/slime/pull/1714)
    *   **详情**: 禁用 SGLang HTTP 客户端对系统代理（`trust_env`）的读取，防止在集群内部通信时错误地经过外部代理节点。

### 工程与代码质量
*   **脚本易用性提升**: PR [#1700](https://github.com/THUDM/slime/pull/1700) 实现了 GPU 数量自动检测；PR [#1689](https://github.com/THUDM/slime/pull/1689) 修复了 Shell 脚本中数组参数被错误展开的 Bug。
*   **代码国际化**: PR [#1726](https://github.com/THUDM/slime/pull/1726) 完成了代码注释的英文化，降低了全球开发者的参与门槛。

## 5. 为什么值得 RL 生态关注
Slime 正在迅速演变为一个**生产级的大模型强化学习框架**，其核心价值在于：
1.  **极速的模型适配能力**：项目团队能在极短时间内跟进 Qwen3.5、GLM-4.7 等最新 SOTA 模型的配置需求，解决 Transformers 库升级带来的 Breaking Changes（如 DeepseekV3 的 RoPE 配置）。
2.  **深度分布式优化**：不仅是算法实现，项目深入到底层分布式算子（如 FLA 的 SP/CP 梯度处理、MoE Dispatcher），解决了大规模训练中极易遇到的隐性 Bug 和性能瓶颈。
3.  **全栈工具链整合**：通过修复与 SGLang 的集成（代理问题）和 Ray 的调度（GPU 自动检测），Slime 正在构建一个从训练到推理部署的闭环工作流，非常适合需要复现 SOTA RL 算法（如 GRPO）的研究者和工程师。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 2026-03-23 RL 日报摘要：

# AReaL RL 日报 (2026-03-23)

## 1. 今日速览
过去 24 小时内，AReaL 仓库暂无新版本发布或 Issue 动态，核心活动集中在 **分布式系统稳定性** 与 **性能优化**。社区提交了 3 个 PR，重点解决了大规模分布式训练下的网络传输稳定性问题，并针对 FSDP 权重同步进行了流水线优化，旨在提升训练吞吐量。

## 2. 版本发布
- **无更新**

## 3. 重点 Issues
- **无新增或更新**

## 4. 关键 PR 进展

### 🔧 分布式通信稳定性修复
- **[OPEN] #1075 fix(rpc): resolve connection reset during RTensor fetch with large payloads**
  - **链接：** [inclusionAI/AReaL PR #1075](https://github.com/inclusionAI/AReaL/pull/1075)
  - **分析：** 针对 RPC 通信中因 Payload 过大导致的连接重置问题进行了修复。
    - **配置增强：** 为 `HttpRTensorBackend` 引入了 3600s 超时机制、10MB 读缓冲区及 `TCPConnector` 配置，对齐了 `areal/infra/utils/http.py` 的现有模式。
    - **重试机制：** 增加了针对分片（Shard）级别的重试逻辑（最多 3 次），以应对瞬时的 `TimeoutError` 或 `aiohttp.ClientError`，显著提升了弱网环境下的容错性。

### ⚡️ 训练性能优化
- **[OPEN] #1074 perf(fsdp): pipeline distributed weight sync with a single pending bucket**
  - **链接：** [inclusionAI/AReaL PR #1074](https://github.com/inclusionAI/AReaL/pull/1074)
  - **分析：** 针对 FSDP（Fully Sharded Data Parallel）权重的分布式更新进行了深度优化。
    - **流水线机制：** 将权重更新拆解为异步 Bucket 启动与显式等待，引入 `_PendingWeightUpdateBucket` 实现单 Bucket 悬挂追踪。
    - **计算通信重叠：** 实现了 Bucket $N-1$ 的广播与 Bucket $N$ 的张量物化重叠，在不牺牲训练 ranks 同步对齐的前提下，通过隐藏通信延迟提升整体训练效率。

### 📚 社区与文档
- **[OPEN] #1073 docs: add gitcgr code graph badge**
  - **链接：** [inclusionAI/AReaL PR #1073](https://github.com/inclusionAI/AReaL/pull/1073)
  - **分析：** 提议在 README 中添加 [gitcgr](https://gitcgr.com) 徽章，用于可视化展示仓库的代码图谱统计信息，提升项目可观测性。

## 5. 为什么值得持续关注
AReaL 正在从宏观架构转向微观的 **内核级性能压榨**。

今日的 PR 动向表明，项目正在攻克大规模 RL 训练中最棘手的 **“通信-计算”瓶颈**。通过优化 `aiohttp` 底层参数解决大包传输丢包问题，以及通过精细化的 Bucket 流水线设计来掩盖 All-Gather/Gather 延迟，显示出该团队在构建高性能、高稳定性的 RL 基础设施方面的深厚积累。对于关注 **大规模分布式 RL 训练吞吐量** 的开发者而言，这些底层优化极具参考价值。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL RL 日报摘要 (2026-03-23)

## 1. 今日速览
过去 24 小时内，TRL 项目无新版本发布，但代码库活跃度极高。共有 **15 个 PR** 更新，主要集中在修复 SFT、DPO、PPO 及 GRPO 等 Core Trainer 在多 GPU/DeepSpeed 环境下的边缘 Bug。社区贡献者 `s-zx` 提交了大量修复，显著提升了分布式训练的稳定性。新增 **2 条 Issues**，涉及 CLI 开发体验（DX）对齐及 Qwen3.5 模型兼容性问题。

## 2. 版本发布
无。

## 3. 重点 Issues
- **CLI 交互体验标准化 (#5191)**
    - **内容**：提议将新的 `trl skills` 命令参数风格与 Hugging Face 主 CLI 保持一致（如参数命名规范）。
    - **链接**：[huggingface/trl Issue #5191](https://github.com/huggingface/trl/issues/5191)
- **Qwen3.5 SFT 训练嵌入层报错 (#5334)**
    - **内容**：使用 `SFTTrainer` 训练 Qwen3.5 时出现 `too many values to unpack` 错误，涉及 input embeddings 处理。
    - **链接**：[huggingface/trl Issue #5334](https://github.com/huggingface/trl/issues/5334)

## 4. 关键 PR 进展

### 核心算法与训练稳定性修复
贡献者 `s-zx` 集中修复了多个 Trainer 在 DeepSpeed ZeRO 分片策略下的除零错误和 NaN 传播问题，这对大规模分布式 RLHF 训练至关重要。

- **修复 ORPO NaN 问题 (#5339)**
    - 修复了 `ORPOTrainer` 在 DeepSpeed 多卡运行时 `log_odds` 和 `grad_norm` 变为 NaN 的问题。根因是全掩码序列导致的除零错误。
    - **链接**：[huggingface/trl PR #5339](https://github.com/huggingface/trl/pull/5339)
- **修复 KTO/BCO/CPO Trainer 除零错误 (#5345, #5344, #5343)**
    - 针对实验性的 KTO、BCO、CPO Trainer，修复了 `get_batch_logps` 函数中当 `loss_mask` 全为 0 时触发的除零崩溃。
    - **链接**：[huggingface/trl PR #5345](https://github.com/huggingface/trl/pull/5345), [#5344](https://github.com/huggingface/trl/pull/5344), [#5343](https://github.com/huggingface/trl/pull/5343)
- **修复 PPO Reward 定位与 EOS 惩罚错位 (#5338)**
    - 修正了 Reward 被错误放置在 PAD token 而非 EOS token 的问题，并修复了 `missing_eos_penalty` 的 stop-token 不匹配问题。
    - **链接**：[huggingface/trl PR #5338](https://github.com/huggingface/trl/pull/5338)
- **修复 GRPO 日志 NaN 传播 (#5336)**
    - 解决了稀疏奖励函数返回 `None` 时，`GRPOTrainer.log()` 计算均值导致指标变为 NaN 的问题。
    - **链接**：[huggingface/trl PR #5336](https://github.com/huggingface/trl/pull/5336)

### 多模态与推理后端兼容性
- **修复 GRPO + Liger Kernel 多卡崩溃 (#5340)**
    - 解决了 `GRPOTrainer` 结合 Liger Kernel 在多 GPU (`device_map="auto"`) 环境下的崩溃问题。
    - **链接**：[huggingface/trl PR #5340](https://github.com/huggingface/trl/pull/5340)
- **修复 vLLM 推理工具调用 Bug (#5346, #5342)**
    - 修正了 `GRPOTrainer` 和 `VLLMClient` 在未配置工具时传递 `tools=[]` 导致 Jinja2 模板或 Schema 转换错误的逻辑，现改为 `tools=None`。
    - **链接**：[huggingface/trl PR #5346](https://github.com/huggingface/trl/pull/5346), [#5342](https://github.com/huggingface/trl/pull/5342)
- **修复 VLM 多图训练测试 (#5341)**
    - 修正了 VLM 多图训练测试中的断言逻辑，跳过因微小模型初始化导致梯度未流动的视觉参数检查。
    - **链接**：[huggingface/trl PR #5341](https://github.com/huggingface/trl/pull/5341)

### 新功能与算法扩展
- **新增 SDPO Trainer (#4935)**
    - 实现了 **Self-Distillation Policy Optimization (SDPO)** 算法，利用模型自身的高奖励轨迹进行自蒸馏，提供更稠密的学习信号。
    - **链接**：[huggingface/trl PR #4935](https://github.com/huggingface/trl/pull/4935)
- **DGPO 算法支持 (#5102)**
    - 为 GRPO 添加了 DGPO (ICLR 2026) 算法支持。
    - **链接**：[huggingface/trl PR #5102](https://github.com/huggingface/trl/pull/5102)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
TRL 目前正在经历从“算法原型库”向“工业级生产框架”的关键转型。从今日的 PR 动向来看：
1.  **深度适配分布式训练**：大量修复针对 DeepSpeed ZeRO 环境下的边缘情况（如空分片除零），表明 TRL 正在解决 RLHF 在大规模扩展时的不稳定性痛点。
2.  **紧跟 SOTA 算法**：对 SDPO、DGPO 等最新优化算法的快速集成，保持了其在 Post-training 技术栈的前沿性。
3.  **多模态与工具调用增强**：针对 VLM 训练和 Agent 能力的修复，显示其正在积极支持除纯文本 RLHF 之外的复杂场景。

对于需要稳定进行大模型对齐训练的开发者，TRL 的底层健壮性正在显著提升。

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

这里是 **volcengine/verl** 项目 2026-03-23 的 RL 日报摘要。

---

### 📅 verl RL 日报 (2026-03-23)

#### 1. 今日速览
过去 24 小时内，verl 生态呈现高活跃度，社区聚焦于 **异构硬件兼容性（Ascend NPU）**、**显存/内存优化（FP8/Checkpointing）** 以及 **推理后端集成（vLLM/SGLang/TRT-LLM）**。共更新 13 个 PR（主要涉及架构重构与 Bug 修复）和 5 个 Issues（集中在 OOM 和 Backend 报错）。

#### 2. 版本发布
*   **无新版本发布**。

#### 3. 重点 Issues (Top Issues)
*   **CPU OOM 险情 (Megatron + vLLM)**: 用户报告在使用 Megatron + vLLM 训练 Qwen3.5 35A3B 时，保存 Checkpoint 期间发生严重的 CPU OOM。这推测与权重聚合时的内存 spikes 有关。
    *   🔗 [Issue #5703](https://github.com/verl-project/verl/issues/5703)
*   **SGLang FP8 训练顽疾**: 开发者指出 verl 主分支中 SGLang 的 FP8 量化实现存在缺陷（全量物化与低效 Blockwise 实现），导致即使物理显存充足也会触发 OOM。
    *   🔗 [Issue #4641](https://github.com/verl-project/verl/issues/4641)
*   **Ascend NPU (MindSpeed) 兼容性**: 在 SFT 训练中，`model.use_remove_padding=False` 配置导致 MindSpeed 后端报错，显示 verl 正在加强对非 NVIDIA 硬件的支持与调试。
    *   🔗 [Issue #5704](https://github.com/verl-project/verl/issues/5704)

#### 4. 关键 PR 进展
*   **[Core] 降低 Checkpoint 内存开销**: PR #5705 提议将 `dist_ckpt_optim_fully_reshardable` 默认值设为 False，旨在解决 #5670 中提到的 Checkpoint 保存期间 CPU 内存激增的问题。
    *   🔗 [PR #5705](https://github.com/verl-project/verl/pull/5705)
*   **[Feat] NVFP4 (W4A16) 量化训练**: PR #5254 集成了 NVIDIA ModelOpt，支持在 Megatron 训练流水线中进行 NVFP4 QAT，并能将量化权重无缝传输至 vLLM 推理引擎。这是迈向高能效 RL 训练的关键一步。
    *   🔗 [PR #5254](https://github.com/verl-project/verl/pull/5254)
*   **[Feat] 新算法 GIFT**: PR #4933 提出了 "Group-relative Implicit Fine-Tuning"，这是一种结合了 GRPO、DPO 和 UNA 优点的新型 On-policy RL 框架，旨在解决现有对齐算法的实际局限性。
    *   🔗 [PR #4933](https://github.com/verl-project/verl/pull/4933)
*   **[Fix] TRT-LLM 多节点挂起修复**: 修复了 VLM 代码路径导致的多节点 Rollout 挂起问题（#5701），修正了全局 Rank 0 在 DP 组中的逻辑错误。
    *   🔗 [PR #5701](https://github.com/verl-project/verl/pull/5701)
*   **[Refactor] Megatron 代码库清理**: PR #5707 移除了 `llama` 和 `qwen2` 的旧文件夹，目前这些架构已完全通过 Megatron-Bridge 支持。
    *   🔗 [PR #5707](https://github.com/verl-project/verl/pull/5707)

#### 5. 为什么继续关注 verl？
verl 正在从一个单纯的 RL 训练框架演进为**全栈、多后端、异构算力支持**的 LLM 训练平台：
1.  **极致的显存优化**: 针对 FP8、NVFP4 以及 Gradient Checkpointing CPU Offload 的持续更新，显示其在有限显存下训练超大模型（如 Qwen3.5, DeepSeek）的决心。
2.  **混合推理引擎支持**: 社区正并行修复 vLLM、SGLang 和 TRT-LLM 的集成问题，说明 verl 正致力于打通 "训练-推理- rollout" 闭环，这对 RLHF 效率至关重要。
3.  **算法创新**: GIFT 等新算法的引入表明 verl 依然是 LLM 对齐技术的前沿试验田。

---
*数据分析截止至 2026-03-23 00:00 (UTC)。*

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL 日报：Open Instruct 生态追踪 (2026-03-23)

## 1. 今日速览
过去 24 小时内，**Open Instruct** 仓库活跃度处于低位（Issues 0 / Releases 0），仅有一项重点 PR 在近期发生了状态更新。虽然无新增代码发布，但现有的 PR 动向显示出项目正在强化其对 **PPO (Proximal Policy Optimization)** 算法深层支持的技术迭代，特别是针对 Value Model 的集成。

🔗 [Open Instruct GitHub 主页](https://github.com/allenai/open-instruct)

## 2. 版本发布
过去 24 小时无新版发布。

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

## 4. 关键 PR 进展
本期唯一的动态来自一个重要的功能性 PR，虽然创建于 2 月，但近期（3 月 21 日）有更新，表明该功能仍在积极开发中。

*   **[#1462 [OPEN] WIP: Add PPO with value model support to grpo_fast.py](https://github.com/allenai/open-instruct/pull/1462)**
    *   **作者**: hamishivi
    *   **核心内容**: 该 PR 旨在扩展 `grpo_fast.py` 的能力，使其支持带有独立 **Value Model** 的标准 PPO 训练流程。
    *   **技术细节**:
        *   **算法升级**: 从 GRPO（Group-normalized rewards）转向支持基于 **GAE (Generalized Advantage Estimation)** 的 PPO 风格训练。
        *   **关键参数**: 引入了 `use_value_model`, `value_loss_coef`, `vf_clip_range`, `gamma`, `gae_lambda` 等配置，提供了细粒度的 PPO 调优接口。
        *   **架构**: 支持分离的价值网络（separate value networks）。
    *   **分析**: 这意味着 Open Instruct 正试图在同一套代码库中融合 GRPO 的高效性与经典 PPO 的稳定性，为需要精准 Value Estimation 的复杂 RLHF 任务提供支持。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日数据平淡，但 Open Instruct 依然是 RL 开源生态中的基石项目，原因如下：

1.  **算法融合趋势**: PR #1462 反映了当前的 RLHF 技术趋势——不再单一依赖 PPO 或 GRPO，而是探索两者的结合。Open Instruct 正在快速吸纳这些前沿算法变体。
2.  **All-in-one 训练场**: 作为 AllenAI 的核心项目，它提供了从 SFT 到 RLHF（PPO/DPO/GRPO）的全流程支持，是复现顶级论文结果和进行定制化训练的首选 "Reference Implementation"。
3.  **工业级鲁棒性**: 该项目被广泛用于训练 OLMo 等开源大模型，其代码质量和工程化程度远高于一般的实验性仓库，适合作为生产环境或严谨科研的基础设施。

---
*分析师注：建议持续关注 PR #1462 的合并进度，这将是 PPO 算法在该框架下的一大步增强。*

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

# RL 日报：rl_games 生态跟踪 (2026-03-23)

## 1. 今日速览
过去 24 小时内，`rl_games` 仓库活跃度主要集中在 **Bug 修复** 与 **Sim-to-Real 生态集成**。维护者 Denys88 针对 SAC 算法中 `network_builder` 的属性初始化问题提交了修复 PR，直接响应了昨日提出的 Issue #337。同时，关于 MyoSuite 物理仿真的集成 PR (#336) 也进行了代码更新，显示出该项目正在向更复杂的肌肉骨骼控制任务拓展。

- **Issues 更新**: 1 条 (新增 Bug 报告)
- **PRs 更新**: 2 条 (1 个 Bug 修复, 1 个功能增强)
- **Releases**: 无

---

## 2. 版本发布
无新版本发布。

---

## 3. 重点 Issues
**#337 [BUG] SAC 算法网络构建逻辑缺陷**
- **链接**: [Denys88/rl_games Issue #337](https://github.com/Denys88/rl_games/issues/337)
- **详情**: 用户报告在使用 SAC (Soft Actor-Critic) 算法时，`rl_games/algos_torch/network_builder.py` 第 994 行触发了 `AttributeError`。
- **技术细节**: `SACBuilder.Network.load()` 方法未初始化 `self.has_cnn` 属性，导致后续代码在检查该属性时崩溃。这是一个典型的初始化状态未对齐问题，影响了 SAC 算法的正常跑通。

---

## 4. 关键 PR 进展

**#338 [FIX] 修复 SAC 网络构建器缺失 has_cnn 初始化**
- **链接**: [Denys88/rl_games PR #338](https://github.com/Denys88/rl_games/pull/338)
- **状态**: Open
- **分析**: 维护者迅速响应 Issue #337，提交了修复补丁。
  - **核心变更**: 显式初始化 `has_cnn` 和 `cnn` 变量。
  - **实现逻辑**: 沿用了 `A2CBuilder` 的初始化模式，确保了代码风格的一致性。
  - **工具**: 该 PR 描述提及由 Claude Code 辅助生成，显示了 AI 辅助编程已介入该项目的维护工作流。

**#336 [FEAT] 增加 MyoSuite 训练配置及 max_steps 可配置性**
- **链接**: [Denys88/rl_games PR #336](https://github.com/Denys88/rl_games/pull/336)
- **状态**: Open (更新于 03-22)
- **分析**: 这是一个重要的功能扩展 PR，旨在提升库对复杂物理仿真的支持能力。
  - **兼容性修复**: 修正 `OldGymWrapper` 以支持 Gymnasium API 标准 (返回 5-tuple，区分 `terminated` 和 `truncated`)。
  - **新资源**: 添加了 6 个 MyoSuite PPO 训练配置（覆盖肘部、手部姿态、腿部行走等），这对于研究肌骨控制的研究者具有高参考价值。
  - **灵活性**: 解耦了 `player.max_steps`，使其可通过配置文件修改。

---

## 5. 为什么值得关注
在当前 RL 生态中，`rl_games` 依然是 **Isaac Gym** 和 **Isaac Lab** 高性能训练的首选底层框架之一。

1.  **高性能基座**: 它是 NVIDIA 生态中跑通复杂任务（如 Legged Gym, MyoSuite）的事实标准 PPO 实现之一。
2.  **紧跟标准**: PR #336 对 Gymnasium API 的适配表明，该项目正在积极消除旧版 Gym 遗留代码的技术债务，确保与最新仿真环境的兼容性。
3.  **维护响应快**: 从 Issue #337 的提出到 PR #338 的修复仅隔一天，证明核心维护者目前处于活跃状态，能够及时阻断阻断性 Bug。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL 日报：Gymnasium 生态监测 (2026-03-23)

**数据源**: Farama-Foundation/Gymnasium
**分析师**: RL 开源生态观察员

这里是 2026 年 3 月 23 日的 Gymnasium 项目动态摘要。今日项目无代码合并或版本发布，社区焦点集中在 MuJoCo 相关的文档完善与渲染问题上。

---

### 1. 今日速览
- **Issues 活跃度**：中等。过去 24 小时内有 3 个 Issue 更新，主要集中在 MuJoCo 环境的教程需求及技术问答。
- **PR 活跃度**：静止。无新增或更新的 Pull Requests。
- **Release 状态**：无新版本发布。

### 2. 版本发布
- **无**。
    *注：社区仍在等待包含 MuJoCo-v5 的 Gymnasium 1.0.0 正式版。*

### 3. 重点 Issues

今日更新的 3 个 Issue 均围绕 **MuJoCo** 物理仿真环境展开，显示出社区对该模块的高度依赖及现有文档/实现的不足。

1.  **[Proposal] MuJoCo 环境教程增补计划**
    *   **标签**: `documentation` `enhancement` `good first issue`
    *   **链接**: [Farama-Foundation/Gymnasium Issue #846](https://github.com/Farama-Foundation/Gymnasium/issues/846)
    *   **摘要**: 为迎接即将到来的 Gymnasium 1.0.0 及 `MuJoCo-v5`，维护者 Kallinteris-Andreas 提出急需补充高级教程。重点包括“加载四足机器人自定义模型”（已有 WIP PR #838）及“加载手臂模型”。这是一个极佳的贡献机会。
    *   **状态**: OPEN (更新于 2026-03-22)

2.  **[Bug/Question] Inverse Pendulum v5 初始状态导致不稳定**
    *   **标签**: `question`
    *   **链接**: [Farama-Foundation/Gymnasium Issue #1403](https://github.com/Farama-Foundation/Gymnasium/issues/1403)
    *   **摘要**: 用户报告 `Inverse Pendulum v5` 在初始状态全为 0 且无噪声干扰的情况下，即使不采取任何动作，摆杆也会以固定的步数倒下。这引发了对环境物理参数或初始化逻辑的质疑。
    *   **状态**: OPEN (更新于 2026-03-22)

3.  **[Technical] MuJoCo OpenGL 渲染尺寸固化问题**
    *   **标签**: `MuJoCo`
    *   **链接**: [Farama-Foundation/Gymnasium Issue #1482](https://github.com/Farama-Foundation/Gymnasium/issues/1482)
    *   **摘要**: 开发者指出 `MujocoRenderer` 似乎只采纳初始化时的 OpenGL 渲染尺寸，而忽略了后续传入的 `width` 和 `height` 参数。这可能影响视频录制或特定分辨率下的视觉训练。
    *   **状态**: OPEN (更新于 2026-03-22)

### 4. 关键 PR 进展
- **无**。
    *注：过去 24 小时内无 PR 活动，主要的代码变更目前可能处于停滞或内部审查阶段。*

### 5. 为什么值得持续关注？

尽管今日无代码变更，Gymnasium 依然是 RL 领域的基石：

*   **MuJoCo-v5 迁移的核心阵地**：随着 DeepMind 将 MuJoCo 开源，Gymnasium 正在成为标准化和接入最新物理引擎特性的最前沿（Issue #846 直接关联 v5 教程）。
*   **API 标准定义者**：作为 OpenAI Gym 的维护继任者，它定义了目前主流 RL 算法（如 PPO, SAC, TD3）的 `reset`, `step`, `render` 接口标准。
*   **极佳的切入点**：标记为 `good first issue` 的 Issue（如 #846）通常涉及文档或小型功能补充，对于希望深入理解环境封装或提升开源影响力的开发者来说，是低门槛、高回报的路径。

---
*以上数据截止至 2026-03-23 00:00 UTC。*

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>