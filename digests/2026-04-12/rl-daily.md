# RL 开源生态日报 2026-04-12

> 生成时间: 2026-04-11 22:04 UTC | 覆盖项目: 15 个

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
当前 RL 开源生态呈现出明显的“冰火两重天”景象。面向大语言模型（LLM）及多模态（VLM）对齐的训练框架（如 verl, TRL, OpenRLHF 等）正处于高强度的功能迭代与底层重构期；而传统的基础 RL 算法库（如 CleanRL, Stable Baselines3, Tianshou）及标准环境则处于稳定期，24小时内无显著动态。整个生态的核心资源正全面向**异构算力适配、极致显存/通信优化、多模态RLHF及异步分布式训练**四个方向倾斜。

## 各项目活跃度对比
*注：以下数据基于 2026-04-12 24小时内的 GitHub Issues 与 Pull Requests 动态统计。*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 6 | 16 | 0 | 密集推进 NPU 适配、vLLM/TRT-LLM 多引擎优化及多轮对话支持，活动度居首。 |
| **TRL** | 2 | 11 | 0 | 高频迭代前沿对齐算法 (TPO/SSD) 及 Chat Template，强力修复 VLM 工具调用。 |
| **Open Instruct** | 0 | 8 | 0 | 重构 GRPO 奖励机制，引入 Docker 沙盒代码环境，向工业级高鲁棒性演进。 |
| **AReaL** | 2 | 6 | 0 | 死磕底层硬核优化，重构 FSDP 显存 Offload 及 SGLang/vLLM 权重同步机制。 |
| **OpenRLHF** | 1 | 2 | 0 | 即将发布 v0.10，重点引入 VLM RLHF 支持及 Partial Rollout 异步 PPO 架构。 |
| **ROLL** | 1 | 2 | 0 | 聚焦异构算力集群，解决 NPU 下 Colocate 模式的通信端口冲突与 LoRA 同步异常。 |
| **slime** | 2 | 0 | 0 | 暴露底层 CUDA 依赖链冲突，社区探索从 Docker 向原生环境部署的易用性转型。 |
| **rl_games** | 0 | 1 | 0 | 引入 Triton 算子重构 GAE 计算流程，突破传统 RL 的 CPU-GPU 通讯瓶颈。 |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **多模态 RLHF 的全面落地**：VLM 的强化学习不再是纸上谈兵。TRL 和 OpenRLHF 均在解决 VLM 在 RL 阶段的图文对齐、图像响应丢失及 Vision Encoder 冻结策略问题。
2. **奖励与对齐算法的精细化**：以 Open Instruct 的动态 Rubric 评测、TRL 对 DAPO Token Level Loss 的纠正为代表，社区正在解决粗粒度 Reward 带来的信噪比问题。同时，TPO、SSD 等新对齐/蒸馏算法正快速工程化。
3. **面向智能体的强化学习**：从单纯的文本生成走向环境交互。Open Instruct 引入 SWERLSandboxEnv，OpenRLHF 推出 Partial Rollout Agent，均在探索代码执行和复杂工具调用场景下的 RL 路径。

**工程/基础设施侧信号：**
1. **拥抱异构算力（NPU 适配）**：摆脱对 Nvidia 算力的绝对依赖是当前国内开源项目的重中之重。verl、AReaL、ROLL 均在集中处理华为昇腾 NPU 环境下的权重同步死锁、序列并行报错及 HCCL 端口冲突问题。
2. **生成与训练的极致异步化**：为掩盖 GPU 通讯空闲，异步 PPO 及 Colocate（训练推理显存复用）模式成为标配。AReaL、OpenRLHF 和 ROLL 正在深度重构异步 Pipeline、多后端权重分发（IPC）及极低显存消耗机制。
3. **跨底层引擎的“胶水层”打磨**：RL 框架不再绑定单一推理后端。verl 同时适配 vLLM、TensorRT-LLM 与 Megatron；AReaL 并行推进 SGLang 和 vLLM 的 Pipeline Parallelism 支持。

## 差异化定位分析
1. **大而全的胶水层基座**：`verl` 和 `OpenRLHF` 定位为工业级分布式 RLHF OS。verl 极度强调多后端兼容性（Megatron/FSDP/TRT-LLM），而 OpenRLHF 则以抢先支持前沿模型（Qwen3.5/VLM）的即插即用见长。
2. **前沿算法与多模态应用探针**：`TRL` 依托 Hugging Face 生态，更像是对齐算法的“急先锋”，以极高的频次实现最新论文算法并解决模型微调的模态痛点；`Open Instruct` 则在 LLM-as-a-Judge 和代码沙盒执行反馈上做得最深。
3. **极致的底层系统优化**：`AReaL` 和 `ROLL` 具有极强的系统工程色彩，主要精力花在解耦引擎构造、合并 GPU Offload 操作、解决大规模分布式集群的调度挂起上，直击算力成本痛点。
4. **经典 RL 的算子级加速**：`rl_games` 依然立足于传统的强化学习（如机器人控制 Isaac Gym），但开始通过引入 Triton 算子等现代 GPU 编程技术来压榨 PPO 算法的极限吞吐量。

## 社区热度与成熟度
1. **LLM 跨界框架进入深水区**：以 Issues 和 PRs 的技术深度来看，verl、TRL 和 OpenRLHF 社区极其活跃且高度成熟。讨论的话题已从早期的“如何跑通 PPO”深入到“特定硬件上的通讯原语死锁”、“特定 Token Mask 的 Loss 偏差”等硬核底层细节。
2. **传统 RL 生态步入平稳期**：CleanRL、Stable Baselines3、Tianshou、Gymnasium 等专注于经典算法和环境的项目在过去 24 小时内无活动。这表明其 API 设计与核心实现已高度成熟，处于维护期，除非强化学习基础理论有重大突破，否则日常迭代需求较少。

## 值得关注的趋势信号
1. **“算力主权”驱动底层重构**：从各家密集修复 NPU Bug 可以看出，非 Nvidia 阵营的算力正在实质性接入大模型 RL 训练。RL 框架正在成为国产异构算力争夺大模型时代话语权的关键试验田。
2. **推理引擎决定 RL 上限**：RLHF 的吞吐上限越来越依赖于推理引擎的并发能力。引入 SGLang、适配 TRT-LLM、支持 Pipeline Parallelism 表明，RL 训练框架的性能竞争已经下沉到了推理后端的体系结构对抗。
3. **多模态与 Agent Loop 成为新常态**：纯文本的单轮对齐已不能满足需求。VLM 的 RL 训练以及具备工具调用能力的 Agent Rollout 工作流正在从概念走向核心代码主干，这将极大改变后训练阶段的数据构造和 Reward 设计范式。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是 ROLL 项目 2026-04-12 的 RL 生态日报摘要：

### 1. 今日速览
过去 24 小时内，ROLL 生态整体处于稳步迭代状态，无新版本发布。社区层面，1 个关于异步 GRPO 训练性能的 Issue 持续引发关注并获得跟进；工程推进方面，开发者集中修复了 NPU 环境下 Colocate 模式的端口冲突问题以及 vLLM 的 LoRA 权重更新异常，共有 2 个相关的 PR 更新。

### 2. 版本发布
- 无新版本发布。

### 3. 重点 Issues
- **[#394] [OPEN] Very slow asynchronous GRPO training on 8×A100**
  - **作者**: 5SSjw
  - **状态**: 持续讨论中（更新于 2026-04-11，已有 3 条评论）
  - **技术概要**: 用户在 8×A100 集群上使用 Qwen3-8B 进行异步 GRPO 训练时遇到了极其严重的性能瓶颈（单步训练耗时过长）。该问题直接触及 ROLL 在大规模异步训练场景下的调度与计算效率核心机制，需要关注后续是否为配置问题或框架底层的通信/调度瓶颈。
  - **链接**: [alibaba/ROLL Issue #394](https://github.com/alibaba/ROLL/issues/394)

### 4. 关键 PR 进展
- **[#421] [CLOSED] fix: resolve HCCL port conflict in colocate mode for NPU**
  - **作者**: Ginray
  - **状态**: 已关闭
  - **技术概要**: 修复 NPU 环境下 `colocate` 模式中的 HCCL 端口冲突问题。通过将 `HCCL_HOST_SOCKET_PORT_RANGE` 和 `HCCL_NPU_SOCKET_PORT_RANGE` 设置为 `auto`，交由操作系统动态分配端口，成功解决了 actor_train、actor_infer、reference 等多个集群共享同一 GPU 资源时的 `Bind_Failed` 错误。
  - **链接**: [alibaba/ROLL PR #421](https://github.com/alibaba/ROLL/pull/421)

- **[#422] [OPEN] fix: resolve HCCL port conflict and LoRA weight update issues**
  - **作者**: Ginray
  - **状态**: 开放审查中
  - **技术概要**: 作为 PR #421 的逻辑延续与扩展，除了引入 NPU 端口的动态分配修复外，该 PR 重点解决了 vLLM 推理引擎中的 LoRA 权重更新异常（修复了 `ValueError: There is no module or parameter named 'base_model'` 报错），进一步保障了多集群复用显存时的训练/推理稳定性。
  - **链接**: [alibaba/ROLL PR #422](https://github.com/alibaba/ROLL/pull/422)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **大模型 RLHF 核心痛点攻坚**：从 Issue #394 可以看出，ROLL 正在被直接用于 Qwen3-8B 等前沿大模型的大规模 GRPO 训练。项目在处理异步训练（Actor/Reference 等模块解耦）方面的探索，是解决当前 LLM 后训练算力瓶颈的关键方向。
2. **异构算力与显存复用优化**：近期的 PR（#421, #422）密集处理了 Colocate 模式（即训练与推理集群共享同一份 GPU 资源）下的底层通信与权重同步问题。这种极致压榨显存的设计模式，大幅降低了 RLHF 的硬件门槛，具备极高的工程实用价值。
3. **底层推理引擎兼容性增强**：针对 vLLM 的 LoRA 权重更新问题进行深度修复（PR #422），表明 ROLL 正在强化与主流高性能推理框架的适配，确保 RL 训练中 Actor 权重能无缝、高效地同步到推理引擎，这对于 On-policy 算法的正确性至关重要。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# slime (THUDM) 强化学习生态日报 - 2026-04-12

## 1. 今日速览
过去 24 小时，slime 仓库整体活动趋于平稳。未产生新的代码提交与 PR 更新，无新版本发布。社区焦点主要集中在环境部署与依赖构建环节，新增 1 个与 Conda 构建脚本及 CUDA 依赖链相关的底层 Bug 反馈，另有 1 个关于非 Docker 部署的支持讨论于昨日正式关闭。

## 2. 版本发布
- **最新 Releases**：近 24 小时内无新版本发布。

## 3. 重点 Issues
今日共监测到 2 条 Issues 更新：

- **[[bug] build_conda.sh 中 cuda-python 版本与注释逻辑冲突](https://github.com/THUDM/slime/issues/1826)**
  - **状态**: `[OPEN]` | **作者**: lyesh0 | **更新**: 2026-04-11
  - **摘要**: 环境构建脚本存在明显的依赖解析冲突。开发者在 `build_conda.sh` 中为了防止安装 CUDA 13.0，强制指定了 `pip install cuda-python==13.1.0`。该操作与代码注释的逻辑相悖，且极易导致整个 CUDA 底层依赖链不一致。作者建议将其降级修正为 `12.x` 版本或明确声明 CUDA 版本要求。

- **[[question] 请问是否可以尽快支持完善的非docker安装](https://github.com/THUDM/slime/issues/1793)**
  - **状态**: `[CLOSED]` | **作者**: williamLyh | **更新**: 2026-04-10 (昨日更新)
  - **摘要**: 社区对非 Docker 环境部署的诉求。目前原生安装体验欠佳，经多名开发者交流探讨后，该 Issue 已于近期关闭（获 4 个 👍）。侧面反映出项目在原生环境依赖隔离和部署流程上仍有优化空间。

## 4. 关键 PR 进展
- **最新 Pull Requests**：过去 24 小时内无新增或更新的 PR。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
作为 THUDM 开源的 RL 基础设施，slime 的动态依然能反映当前强化学习乃至 LLM 训练工程化的核心痛点：
1. **异构算力环境的工程壁垒**：从 Issue #1826 可以看出，高层 RL 与 LLM 训练框架对底层的 CUDA/cuBLAS 依赖极其敏感（连 13.0 与 13.1 的微小差异都可能破坏依赖链）。slime 在这方面的探索和排雷，为整个 RL 开源社区提供了极具参考价值的工程范本。
2. **从封闭走向开放的部署演进**：早期 RL 大规模训练往往强绑定 Docker 等容器化方案以保证环境一致性，但随着框架的成熟（如 #1793 的讨论），社区正在倒逼项目优化原生部署体验。这种从“可用”向“易用”的转变，预示着 slime 正在降低前沿 RL 算法的复现与二次开发门槛，值得研究人员和工程团队持续跟进。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 生态日报 (2026-04-12)

## 1. 今日速览
过去 24 小时，AReaL 仓库共处理/更新 **2 条 Issues** 和 **6 条 Pull Requests**。当前无新版本发布。整体开发重心集中在**底层训练引擎的解耦与性能优化**（如 FSDP 构造解耦、显存 Offload 优化），以及对 **SGLang/vLLM 推理后端的深度适配**（如 Pipeline Parallelism 支持和 Colocated 权重同步重构）。

## 2. 版本发布
今日无新版本发布。

## 3. 重点 Issues
今日有两项社区反馈值得关注，其一涉及训练参数配置逻辑，其二暴露了特定硬件环境下的严重稳定性问题。

*   **[Question] 解耦损失配置告警逻辑异常 ([#1156](https://github.com/inclusionAI/AReaL/issues/1156))**
    *   **简述**: 用户在显式设置 `use_decoupled_loss=True` 后，系统依然持续抛出 `CLIArgs WARNING`，提示该参数为 `False` 并忽略重要性权重修正。
    *   **分析**: 属于 `good first issue`。这说明配置加载或参数优先级判定逻辑中可能存在断言或覆盖 Bug，值得社区开发者介入排查。
*   **[Bug] 昇腾 NPU 环境下磁盘权重更新导致 vLLM 生成永久挂起 ([#1160](https://github.com/inclusionAI/AReaL/issues/1160))**
    *   **简述**: 在 Ascend NPU 上进行训练时，进行磁盘权重更新后，vLLM 的文本生成阶段会无限期暂停，导致整个训练进程死锁。
    *   **分析**: 该 Bug 可在 Docker 环境下稳定复现。涉及到底层跨进程权重同步机制与特定硬件（NPU）的兼容性冲突，对国产化算力适配有重大影响。

## 4. 关键 PR 进展
今日的 PR 动态体现了项目在**系统架构重构**与**显存/通信优化**上的持续推进。

*   **[Engine] FSDPEngine 构造解耦 ([#1140](https://github.com/inclusionAI/AReaL/pull/1140))**
    *   **进展**: Open
    *   **简述**: 新增 `from_pretrained` 方法，使 `FSDPEngine` 可以脱离 `config dataclass` 直接实例化。此举有效降低了引擎与配置系统的耦合度，提升了二次开发的灵活性。
*   **[Perf] 训练循环中的冗余显存操作批处理 ([#1163](https://github.com/inclusionAI/AReaL/pull/1163))**
    *   **进展**: Open
    *   **简述**: 核心性能优化。通过将 `compute_values` 和 `ppo_update` 两个阶段的 GPU↔CPU offload/onload 操作合并，大幅减少了参数在显存和内存之间的无效颠簸，有助于提升端到端训练吞吐。
*   **[Feat] Colocated 权重同步多后端分发 ([#1164](https://github.com/inclusionAI/AReaL/pull/1164))**
    *   **进展**: Open (WIP)
    *   **简述**: 为 Colocated 模式引入后端感知分发机制，使 vLLM 得以使用原生的 `IPCWeightTransferEngine` 进行权重同步，而不仅依赖 SGLang 的 `MultiprocessingSerializer` 路径。
*   **[Feat] SGLang Pipeline Parallelism (PP) 支持 ([#1162](https://github.com/inclusionAI/AReaL/pull/1162))**
    *   **进展**: Open (WIP) （注：原初步尝试 PR #1152 已关闭，本 PR 为新进展）
    *   **简述**: 正式开始为 SGLang 推理后端引入 Pipeline Parallelism 支持，这对于在未来运行超大规模参数模型（如 70B+ 模型的 RLHF）时突破单机显存瓶颈至关重要。
*   **[Feat] Scaffolding Rollout 工作流 ([#1064](https://github.com/inclusionAI/AReaL/pull/1064))**
    *   **进展**: Open (reviewed)
    *   **简述**: 添加了 Scaffolding rollout 工作流的基础脚手架代码，处于等待最终合并阶段。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **极致的 RL 训练系统优化**: 从今日的 PR（如合并 Offload 操作的 `#1163` 和权重同步重构的 `#1164`）可以看出，AReaL 正在深入 RL 训练的底层细节，解决传统实现中 GPU 显存/通信利用率低下的痛点。这种系统级的优化是降低大模型 RLHF 成本的关键。
2.  **多推理后端的原生级适配**: 项目没有绑定单一的推理引擎，而是同时在推进 vLLM 和 SGLang 的深度适配（包括 PP 支持、IPC 通信等）。这种灵活性允许用户根据硬件环境选择最优的推理引擎组合。
3.  **面向异构算力的工程落地**: Issue #1160 暴露了问题，但也反映了项目在 Ascend NPU 等国产异构算力集群上进行 RL 训练的积极尝试。对于关注算力多样化和国产化替代的团队而言，其问题追踪和解决方案具有极高的参考价值。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (Hugging Face) RL 日报摘要 | 2026-04-12

## 1. 今日速览
过去 24 小时内，TRL 仓库共更新 **2 条 Issues** 和 **11 条 Pull Requests**，无新版本发布。整体动态集中在两个方面：**扩展 SFT/RL 训练的 Chat Template 兼容性**，以及 **GRPO/VLM 环境下的工具调用与多模态响应修复**。

---

## 2. 版本发布
今日无新版本发布。

---

## 3. 重点 Issues

### 1. DAPO token level loss 实现可能存在偏差
- **链接**: [Issue #5375](https://github.com/huggingface/trl/issues/5375)
- **详情**: 开发者指出 `gspo_token/grpo_trainer.py` 中的 token level loss 计算将 batch 内所有 token 同等对待，这与 DAPO 原始论文的预期实现不符。该 Issue 自 3 月底开放以来已有 5 条讨论，目前仍在确认中。

### 2. 追踪：为常见模型家族添加 `&#123;&#37; generation &#37;&#125;` Chat Templates
- **链接**: [Issue #5471](https://github.com/huggingface/trl/issues/5471)
- **详情**: 当使用 `assistant_only_loss=True` 进行 SFT 时，需要 chat template 包含 `&#123;&#37; generation &#37;&#125;` 标记以生成正确的 assistant masks。由于目前原生支持该标记的模型极少，维护者发起此追踪 Issue，计划为常见模型系列提供专门的训练模板。

---

## 4. 关键 PR 进展

### 🔥 算法与训练器扩展
- **实验性 TPO Trainer**: 提交了全新的 TPO (Token-level Policy Optimization) trainer 实现。
  - 链接: [PR #5506](https://github.com/huggingface/trl/pull/5506)
- **实验性 SSD Trainer**: 增加了用于知识蒸馏的 SSD 算法实验性训练器。
  - 链接: [PR #5505](https://github.com/huggingface/trl/pull/5505)
- **DistillationTrainer 文档与默认值优化** [CLOSED]: 完善了蒸馏训练器的文档和默认参数配置。
  - 链接: [PR #5500](https://github.com/huggingface/trl/pull/5500)

### 🛠 Chat Template 支持 (关联 Issue #5471)
- **Gemma/Gemma2**: 添加了带有 generation markers 的训练模板，拆分了统一输出行以适应角色分支。
  - 链接: [PR #5523](https://github.com/huggingface/trl/pull/5523)
- **GLM-4-MoE**: 添加了 `&#123;&#37; generation &#37;&#125;` 标签，并引入了类似 Qwen3 的 `think` 补丁模式。
  - 链接: [PR #5519](https://github.com/huggingface/trl/pull/5519)
- **Qwen2.5**: 遵循 LLaMA 3 的模式，新增了兼容训练的 ChatML 模板。
  - 链接: [PR #5522](https://github.com/huggingface/trl/pull/5522)

### 🐛 核心修复：GRPO、VLM 多模态与工具调用
- **GRPO 长文本工具结果处理机制重构**: 修改了 `GRPOTrainer` 处理超长 tool 结果的逻辑，由“截断”改为“丢弃”。避免在处理多模态数据时，不正确的切片导致 `input_ids` 和 `pixel_values` 解析失步。
  - 链接: [PR #5521](https://github.com/huggingface/trl/pull/5521)
- **多模态工具响应支持** [CLOSED]: 使得 `environment_factory` 的工具方法能够返回包含图像+文本的多模态内容块，修复了之前视觉信息被强制转换为 `str` 丢弃的问题。
  - 链接: [PR #5323](https://github.com/huggingface/trl/pull/5323)
- **修复 VLM 处理器的 `add_response_schema`**: 解决了之前为兼容 VLM 而引入的 runtime workaround（如 schema 传播和 decode 门 unwrap），从根本上修复了 `add_response_schema` 的缺陷。
  - 链接: [PR #5520](https://github.com/huggingface/trl/pull/5520)
- **修复 `supports_tool_calling` 误报**: 修复了某些模板（如基础 Llama 3）因静默丢弃 assistant 的 `tool_calls` 而导致工具调用支持情况被错误评估为通过的问题。
  - 链接: [PR #5517](https://github.com/huggingface/trl/pull/5517)

### 🏗 工程与 CI
- **优化 CI 依赖安装**: 将多个串行的 `uv pip install` 调用合并为单一调用，并将基于 git 的 URL 重写为 PEP 508 规范，提高 CI 稳定性和速度。
  - 链接: [PR #5513](https://github.com/huggingface/trl/pull/5513)

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **前沿对齐算法的快速落地**: 仓库正在高频迭代全新的 RLHF/对齐算法（如近期的 TPO、SSD），保持着对学术界和工业界最新训练范式的极快响应速度。
2. **深入多模态 RL 痛点**: 从近期的 PR 进展（如 VLM processor 修复、多模态 tool responses 支持）可以看出，TRL 正在突破纯文本 RL 微调的局限，解决视觉语言模型在 RL 阶段工具调用和图文对齐的底层工程难题。
3. **注重训练底层机制的准确性**: Issue #5375 关于 DAPO loss 实现的探讨，以及系列关于 `assistant_only_loss` 和 Chat Template mask 的精细调整，表明项目在追求支持更多模型的同时，高度关注 loss 计算和 token mask 的严谨性，这对于开发者复现精确的 RL 实验至关重要。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# OpenRLHF 强化学习生态日报 (2026-04-12)

## 1. 今日速览
过去 24 小时，OpenRLHF 仓库动态平稳，无新版本发布。共监测到 1 条 Issue 更新（已关闭）和 2 条 PR 更新（1 条已合并/关闭，1 条开放中）。项目当前正处于向 v0.10 版本演进的关键阶段，核心开发重心明显向**多模态 RLHF（VLM）**以及**底层异步训练架构**倾斜。

## 2. 版本发布
- **最新 Releases**：过去 24 小时无新版本发布。
*(注：从 PR #1217 的标题及进展来看，包含重大架构升级的 v0.10 版本已处于发布前夕。)*

## 3. 重点 Issues
- **[#1194 Support Qwen 3.5](https://github.com/OpenRLHF/OpenRLHF/issues/1194)** [CLOSED]
  - **背景**：用户在调用 `openrlhf-0.9.5` 对 `qwen3.5-4b` 进行 PPO 训练时触发了底层 Traceback 错误。
  - **分析**：该 Issue 创建于 3 月中旬，昨日正式关闭。这表明当前的主干代码或即将发布的 v0.10 版本已彻底解决了对 Qwen 3.5 系列模型（包括潜在的 VLM 架构）的底层兼容性问题。

## 4. 关键 PR 进展
- **[#1217 feat: add VLM (Vision-Language Model) RLHF support (v0.10)](https://github.com/OpenRLHF/OpenRLHF/Pull/1217)** [CLOSED]
  - **核心改动**：引入端到端的多模态大模型 RLHF 训练支持。
  - **技术细节**：基于 `geometry3k` 数据集和 Qwen3.5 完成测试。底层通过 `vision_config` 自动检测 VLM 模型，使用 `AutoModelForImageTextToText` 加载全量模型权重。在训练策略上，**强制冻结视觉编码器**，仅对语言模型权重进行训练与跨节点同步。该 PR 的关闭标志着 OpenRLHF 正式跨入多模态对齐赛道。
- **[#1218 feat: full async PPO training with partial rollout agent support](https://github.com/OpenRLHF/OpenRLHF/Pull/1218)** [OPEN]
  - **核心改动**：重构 PPO 异步训练管线，引入部分采样代理机制。
  - **技术细节**：全面增强了 PPO 异步训练器，实现了完整的异步流水线；引入 `partial rollout agent` 以优化复杂场景下的样本生成效率；同时对底层的 vLLM 引擎进行了异步适配扩展。此更新将显著提升大规模 RLHF 任务中的 GPU 资源利用率和吞吐量。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **前沿架构的快速工程化落地**：项目紧跟业界趋势，在 LLM 文本对齐的基础上，迅速补齐了 VLM（视觉语言模型）的 RLHF 能力（PR #1217），且工程实现合理（冻结 Vision Encoder 以节省显存），直接拓宽了 RL 技术在多模态领域的应用边界。
2. **深度啃咬底层算力效率**：从 PR #1218 可以看出，团队正在死磕生成与训练的“异步化”和“部分采样”。在后规模化时代，如何通过异步 PPO 和 vLLM 的深度结合来掩盖 GPU 通讯与生成延迟，是提升 RL 计算 ROI 的核心壁垒。
3. **对新锐模型版本的极强响应力**：Issue #1194 的顺利解决，证明了社区对 Qwen3.5 等新一代基础模型具有极高的适配优先级，保证了开源 RL 工具链不至于成为底层模型迭代的瓶颈。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

以下是为您生成的 verl 项目 2026-04-12 RL 日报摘要：

# verl 项目日报 (2026-04-12)

## 1. 今日速览
过去 24 小时内，verl 生态保持了高度活跃的开发状态。项目新增/更新了 **6 条 Issues** 和 **16 条 Pull Requests**。从提交的 PR 来看，当前社区的重心正向**异构硬件支持（特别是 Ascend NPU）**、**多模态及多轮对话训练**以及对**底层加速引擎（vLLM, TensorRT-LLM, Megatron）的适配与优化**倾斜。

## 2. 版本发布
- **最新 Releases**：过去 24 小时无新版本发布。

## 3. 重点 Issues
- **[roadmap] verl 26Q2 路线图及低精度训练支持**：核心开发者 `wuxibin89` 和 `sophiayyya` 分别发布了 Q2 路线图和低精度训练路线图（#5972）。Q2 计划重点包括 Megatron 动态 CP、Megatron-FSDP 启用、NVFP4/MXFP8 低精度训练以及 Qwen 3.5 LoRA 支持。
  - 链接: [#5836](https://github.com/verl-project/verl/issues/5836) | [#5972](https://github.com/verl-project/verl/issues/5972)
- **[bug] GB200 (Aarch64) vLLM 0.18 性能回退**：开发者报告在 GB200 节点上，升级到 vLLM 0.18 后，虽然训练 reward 曲线正确，但存在严重的性能回退问题。
  - 链接: [#5964](https://github.com/verl-project/verl/issues/5964)
- **[bug] Qwen3.5 FSDP SFT 及 NPU 序列并行报错**：社区持续反馈 Qwen3.5 在 FSDP 模式下的 SFT 训练 Bug（#5944），以及基于 Ascend NPU 运行 Ulysses SP 时 `logits_rmpad` 的维度不匹配问题（#5957）。
  - 链接: [#5944](https://github.com/verl-project/verl/issues/5944) | [#5957](https://github.com/verl-project/verl/issues/5957)

## 4. 关键 PR 进展
- **Ascend NPU 异构计算全面增强**：今日涌现多个针对 NPU 的关键 PR。包括修复异步训练 Checkpoint 保存报错（#5968）、添加 Mindspeed Patch（#5967）、提供 Qwen3-VL-30B 异步多轮训练示例（#5966）以及全异步 DAPO 30B 脚本（#5970）。
  - 链接: [#5968](https://github.com/verl-project/verl/pull/5968) | [#5967](https://github.com/verl-project/verl/pull/5967) | [#5966](https://github.com/verl-project/verl/pull/5966)
- **多轮对话与多轨迹训练优化**：`ZhentaoFan` 提交了针对多轨迹的 batch padding 修复（#5969）；`HwCARI` 修复了多轮 Rollout 中超长 Prompt 未被过滤的静默错误（#5965）。
  - 链接: [#5969](https://github.com/verl-project/verl/pull/5969) | [#5965](https://github.com/verl-project/verl/pull/5965)
- **Rollout 引擎与 Checkpoint 机制修复**：增加了 Agent Loop 的 reward 计算耗时指标（#5971）；修复了大模型 embedding 超过默认桶大小导致权重更新失败的问题（#5963）；兼容了 vLLM 多模态参数的 API 变更（#5961）。
  - 链接: [#5971](https://github.com/verl-project/verl/pull/5971) | [#5963](https://github.com/verl-project/verl/pull/5963) | [#5961](https://github.com/verl-project/verl/pull/5961)
- **底层架构更新 (Megatron & TRT-LLM)**：推进了 Megatron-FSDP 模式的支持（#5423）、Qwen3.5 LoRA 与 MTP 支持（#5599）；针对 TRT-LLM，修复了 `KvCacheConfig` 被覆盖的 bug 并增加了多节点 Rollout 支持（#5939, #5444）。
  - 链接: [#5423](https://github.com/verl-project/verl/pull/5423) | [#5599](https://github.com/verl-project/verl/pull/5599) | [#5939](https://github.com/verl-project/verl/pull/5939) | [#5444](https://github.com/verl-project/verl/pull/5444)
- **社区与文档维护**：全面将项目迁移至新的组织命名空间 `verl-project/verl`（#5955），并新增了 Qwen3-235B NPU 长序列优化实践文档（#5835）。
  - 链接: [#5955](https://github.com/verl-project/verl/pull/5955) | [#5835](https://github.com/verl-project/verl/pull/5835)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **对最新 SOTA 模型的极速跟进**：从 Qwen3.5 的 FSDP/Megatron 适配、LoRA 支持到 MTP (Multi-Token Prediction) 机制，verl 始终保持在 LLM 训练生态的最前沿，为 RLHF 提供即插即用的底层支持。
2. **异构计算生态的快速扩展**：项目正在超越纯粹的 NVIDIA GPU 生态。今日密集的 PR 和 Issue 表明，Ascend NPU 已经深度合入项目的 CI/CD 和核心训练链路，这对于全球范围内的算力国产化和多元化具有极高的战略价值。
3. **深度的多引擎后端优化**：项目并未绑定单一的推理引擎，而是同时在修复并优化 vLLM、TensorRT-LLM 的分布式 Rollup 与通信瓶颈，展现出极强的工程纵深和作为“RL 训练胶水层”的核心定位。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# Open Instruct RL 生态日报 - 2026-04-12

## 1. 今日速览
过去 24 小时， allenai/open-instruct 仓库活跃度集中在代码质量提升与鲁棒性修复。无新增 Issues、无新版本发布，但合并/更新了 **8 个 Pull Requests**。整体动向显示社区正密集修复训练脚本中的上下文处理、超时崩溃及数据采样的确定性问题，同时为 GRPO 训练引入更复杂的评测与奖励机制。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

## 4. 关键 PR 进展

### 核心算法与训练修复
*   **[Fix truncate_messages_to_fit_context double-counting system tokens]([PR #1601](https://github.com/allenai/open-instruct/pull/1601))**
    *修复了 Judge 上下文窗口截断逻辑的 Bug*。此前在 HF 和 tiktoken 实现中，系统 Token 被重复计算，导致即使预算充足也会错误截断后续消息。此修复直接提升了 RLHF 评测阶段的上下文利用率。
*   **[Fix: deterministic downsampling]([PR #1603](https://github.com/allenai/open-instruct/pull/1603))**
    *修复了数据集混合下采样时的随机性问题*。当指定样本数小于原数据集时，原本采用纯随机采样，导致 Debug 时无法复现结果。此 PR 增强了小数据集调试的确定性。
*   **[GRPO Improve vllm timeout handling]([PR #1532](https://github.com/allenai/open-instruct/pull/1532))**
    *增强 GRPO 训练中 vLLM 推理引擎的超时处理*。修复了慢速网络下 Actor 健康检查无重试机制的问题，以及权重同步线程缺乏异常处理导致训练进程永久挂起的严重 Bug。

### 新特性与生态扩展
*   **[Add SWERLSandboxEnv for per-sample Docker tasks]([PR #1492](https://github.com/allenai/open-instruct/pull/1492))**
    *引入基于 Docker 的隔离沙盒环境*。扩展了 `GenericSandboxEnv`，支持在独立容器中运行带有自定义脚本和 Seed 文件的 SWE 任务，使得基于 RL 的真实代码工程修复成为可能。
*   **[Wire evolving rubric config flags into GRPO training loop]([PR #1581](https://github.com/allenai/open-instruct/pull/1581))**
    *将动态演进 Rubric 评测配置接入 GRPO 训练循环*。接入了之前遗留的配置项（`apply_evolving_rubric_reward` 等），使得模型在训练过程中能够使用更加动态和细粒度的规则奖励。
*   **[feat: add MiniMax provider support for judge]([PR #1602](https://github.com/allenai/open-instruct/pull/1602))**
    *增加 MiniMax 作为评估模型提供商*。集成了 MiniMax-M2.7 系列模型的成本追踪和 Token 编码支持，丰富了开源 RL 的 Judge 生态选择。

### 基础设施与工程优化
*   **[Fix/mason checkpoint freq]([PR #1600](https://github.com/allenai/open-instruct/pull/1600))** `[CLOSED]`
    修正了 `mason.py` 中检查点保存频率的隐性默认行为，提高了配置的透明度。
*   **[Miscellaneous small fixes for training scripts]([PR #1598](https://github.com/allenai/open-instruct/pull/1598))**
    修复了 `finetune.py` 和 `grpo_fast.py` 等脚本中优化器参数组的报错以及其他小型工程问题。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

Open-Instruct 正在从“单纯的微调脚本库”向**“工业级、高鲁棒性的 RL 基础设施”**演进，近期的 PR 动向反映了几个关键趋势：
1. **面向真实代码工程的 RL (SWE-Agent 集成)**：通过引入 Docker 沙盒环境 ([PR #1492](https://github.com/allenai/open-instruct/pull/1492))，项目正在跨越纯文本生成的边界，向具有执行反馈的复杂代码修复场景拓展。
2. **强化分布式训练的稳定性**：针对异构/慢速网络环境下的死锁、超时问题进行了深度修复（如 vLLM 的权重同步挂起问题 [PR #1532](https://github.com/allenai/open-instruct/pull/1532)），这对于大规模分布式 GRPO 训练至关重要。
3. **奖励机制的精细化**：无论是修复上下文截断导致的 Judge 截断 ([PR #1601](https://github.com/allenai/open-instruct/pull/1601))，还是接入动态 Rubric 评测 ([PR #1581](https://github.com/allenai/open-instruct/pull/1581))，都表明该项目在致力于解决 LLM 后训练中“如何准确、动态地给 Reward”这一核心痛点。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

# RL 开源生态日报：rl_games
**日期**: 2026-04-12 | **项目**: [Denys88/rl_games](https://github.com/Denys88/rl_games)

---

### 1. 今日速览
过去 24 小时内，[rl_games](https://github.com/Denys88/rl_games) 仓库无新版本发布、无新增 Issue，但有一项极具技术价值的新 PR 提交。项目核心维护者正在通过引入底层的 GPU 算子来突破现有的计算瓶颈，处于“底层重构与性能优化”的演进阶段。

### 2. 版本发布
**无**。
近期未发布新的 Release 版本。

### 3. 重点 Issues
**无**。
过去 24 小时内无新增或更新的 Issue，社区层面暂无暴露新的 Bug 或功能请求。

### 4. 关键 PR 进展
- **[#346 Add Triton kernel for GAE advantage calculation](https://github.com/Denys88/rl_games/pull/346)** `[OPEN]`
  - **作者**: [Denys88](https://github.com/Denys88)
  - **核心变更**: 引入自定义的 Triton 算子来重构 GAE（广义优势估计）的计算逻辑。该算子将原 `discount_values()` 函数中的 Python `for` 循环替换为**单次 GPU kernel 启动**。
  - **工程落地**: 
    1. 采用环境变量 `RL_GAMES_USE_TRITON=1` 作为全局配置开关。
    2. 具备良好的鲁棒性，未开启该环境变量或遇到不支持的环境时，自动 fallback 回基于 PyTorch 的原有实现。
  - **分析**: 消除 GAE 计算中的 host-device 交互和串行循环，对依赖大规模并发的 PPO 及类似 on-policy 算法而言，能够显著降低 CPU 瓶颈，提升高样本吞吐场景下的端到端训练帧率。

### 5. 为什么这个项目在当前 RL 生态值得继续关注？
1. **持续攻坚 RL 底层算子瓶颈**: PR #346 证明项目正在积极拥抱 OpenAI Triton 等现代 GPU 编程技术。在当前的 RL 生态中，上层算法（如 PPO、SAC）的同质化日趋严重，真正的训练效率提升越来越依赖于底层张量操作的压榨。rl_games 正在向“算子级优化”迈进。
2. **极致的工程实用主义**: 训练框架的稳定性至关重要。该 PR 采用了 `ENV VAR` 级别的开闭包设计，并预设了 PyTorch 原生的 Fallback 机制。这种非侵入式的优化策略，使得研究者和工程师可以在享受最新硬件加速的同时，无需担心破坏原有复杂的训练管线。
3. **高潜力的 Baseline 训练底座**: 凭借其轻量级和高吞吐的设计哲学，rl_games 常被用于 Isaac Gym (Robotics) 等重度 GPU 并行仿真环境中。随着此类 Triton kernel 优化的不断沉淀，它在处理海量环境采样和高维度动作/观测空间时的优势将进一步放大。

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