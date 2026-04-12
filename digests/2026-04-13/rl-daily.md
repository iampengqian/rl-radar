# RL 开源生态日报 2026-04-13

> 生成时间: 2026-04-12 22:05 UTC | 覆盖项目: 15 个

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
大语言模型时代的强化学习（RL）开源生态正经历深刻的分化与演进。一方面，传统且通用的 RL 基础设施（如 CleanRL、Stable Baselines3、Tianshou）进入平稳沉淀期，暂无高频更新；另一方面，围绕 LLM 对齐的训练框架（verl、TRL、OpenRLHF 等）正处于极度活跃的工程爆发期。生态重心已从单一的 PPO 算法实现，全面转向**多模态扩展、超大规模集群的分布式通信优化、异构算力调度以及 Agent 场景的深度融合**。

## 各项目活跃度对比
*注：以下仅统计过去 24 小时内有明确动态的开源项目，无活动的项目（CleanRL, ROCK, ROLL, Stable Baselines3, Tianshou, torchtune）在此期间 Issues/PRs/Releases 均为 0。*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 7 | 14 | 0 | 向 Diffusion 模型和复杂 Agent 跨界；死磕底层显存与 CP 并行优化。 |
| **TRL** | 2 | 8 | 1 (v1.1.0) | 引入模型蒸馏；发力解决 SFT/RLHF 数据模板对齐的工程痛点。 |
| **AReaL** | 4 | 3 | 0 | 聚焦大规模集群的异构资源调度与 SGLang/Megatron 推理引擎优化。 |
| **OpenRLHF**| 0 | 0 | 1 (v0.10.0)| 重大架构升级，全面拥抱多模态 VLM 的 RLHF 并优化底层过采样。 |
| **Gymnasium**| 1 | 5 | 0 | 完善 Wrapper 验证机制，扩展图空间与动作帧重复等前沿底层支持。 |
| **Open Instruct**| 0 | 2 | 0 | 探索将动态评估融入 GRPO 训练循环，优化奖励模型鲁棒性。 |
| **rl_games** | 0 | 1 | 0 | 尝试引入 OpenAI Triton 重写 GAE 核心计算，探索极致的 GPU 算子加速。 |
| **slime** | 2 | 1 | 0 | 修复底层 CUDA/PyTorch 编译兼容性，维持 RLHF 基础设施稳定。 |
| **PettingZoo**| 0 | 1 | 0 | 推进 AEC 多智能体环境 API 的标准化与代码规范校验。 |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **多模态与扩散模型的 RL 融合**：RL 不再局限于纯文本。OpenRLHF 原生支持 VLM（Qwen3.5），verl 引入了面向 Diffusion 的 FlowGRPO 训练器，标志着 RL 正在成为多模态生成模型对齐的标准配置。
2. **复杂推理与动态奖励**：静态的规则奖励已无法满足需求。Open Instruct 在 GRPO 中引入动态评估机制，verl 修复了 GRPO 优势估计逻辑，旨在解决复杂任务中的奖励稀疏和模型作弊问题。
3. **从对齐走向复杂 Agent**：verl 实现了面向多轮对话的 per-sample 级工具路由，使 RL 算法能够直接优化具备调用复杂外部工具能力的 Agent 模型。

**工程/基础设施侧信号：**
1. **“显存与通信”的极致压榨**：超大参数模型的 RLHF 面临严峻的 OOM 风险。verl 实现了 FP8 量化前移和分桶权重传输，AReaL 支持显存卸载与磁盘更新共存，项目均在突破硬件显存的物理极限。
2. **异构算力与资源解耦**：AReaL 提出基于 Ray Custom Resources 的异构集群调度，将训练和推理部署解耦至不同型号的 GPU，直击商业化大模型训练的成本痛点。
3. **底层算子深度定制**：为了打破 PyTorch 原生瓶颈，rl_games 开始引入 Triton kernel 替代 Python 循环以加速 GAE 计算；同时各大框架均在积极适配 vLLM/SGLang 的最新版本及 Pipeline/Context Parallel 策略。

## 差异化定位分析
* **底层系统级基建（verl、AReaL）**：定位为“跨硬件、超大规模的 RLHF 高性能底座”。它们面向千卡集群，核心解决 MoE 架构的负载均衡、分布式 CP/PP 并行、显存 Offload 及异构硬件调度，适合有极强系统工程能力的团队。
* **算法与工作流枢纽（TRL、OpenRLHF）**：定位为“前沿算法与多模态的开箱即用工具”。TRL 正在从纯 RL 演进为涵盖模型蒸馏的后训练全栈库；OpenRLHF 则牢牢占据多模态（如 VLM）RLHF 的生态先发优势，紧跟 SOTA 算法。
* **传统与经典 RL 基石（Gymnasium、rl_games 等）**：定位为“标准化与单卡/环境级极致优化”。尽管不如 LLM 框架吸睛，但 Gymnasium 致力于推进图空间与 Wrapper 规范，rl_games 探索 Triton 算子加速，依然是具身智能和经典控制算法不可或缺的地基。

## 社区热度与成熟度
从 Issue 和 PR 的内容质量来看，**LLM 对齐框架的社区成熟度正在快速提升**：
1. **告别“粗糙脚本”，走向工业级**：各社区对 Bug 的排查已深入到 vLLM 的 sleep mode 权重同步、Ascend NPU 的序列并行维度对齐等底层级别。
2. **框架间的 API 互锁加深**：TRL 和 verl 都在集中解决与最新版 vLLM 的兼容性问题；Gymnasium 推出 `check_wrapper` 表明 RL 社区正在严格把控胶水代码的质量。
3. **生态复用与标准化**：无论是 TRL 牵头统一主流大模型的 Chat Template，还是 PettingZoo 死磕 AEC 标准，都说明社区正在致力于消除不同模型和环境之间的适配鸿沟。

## 值得关注的趋势信号
1. **On-policy 蒸馏重塑后训练流程**：TRL v1.1.0 推出的 `DistillationTrainer` 发出一个强烈信号：RL 基础设施正在与模型压缩/蒸馏技术融合，这可能是解决大模型推理成本与能力平衡的关键范式。
2. **强化学习“侵入”多模态与 Diffusion 领域**：随着 verl 支持 BAGEL 等复杂多阶段图像生成架构，RL 有望在接下来的一段时间内，彻底颠覆以往单纯依靠 MSE 等损失函数微调图像/视频生成模型的旧范式。
3. **集群级异构调度成为兵家必争之地**：面对昂贵的算力成本，未来的 RL 开源框架不仅比拼单卡吞吐，更要比拼“如何把 B200 用于训练，把旧型号卡用于推理”的异构混合调度能力。

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

# slime (THUDM) RL 生态项目日报 - 2026-04-13

## 1. 今日速览
过去 24 小时，slime 仓库活动平稳，无新版本发布。共处理更新 **2 个 Issues** 和 **1 个 PR**。当前社区动态主要集中在环境构建脚本修复和历史遗留问题清理，底层算法框架代码未发生重大变动。

## 2. 版本发布
- **最新 Releases**：无。
- 过去 24 小时内未发布新版本或补丁。

## 3. 重点 Issues
过去 24 小时内更新的 2 条 Issue 均为历史讨论，现已关闭：

- **[#1314] [CLOSED] 503 service unavailable**
  - **作者**: Elon-Lau
  - **摘要**: 在使用 `RolloutManager` 进行分布式的 HTTP 请求（请求 SGLang generate 接口）时出现 `503 Service Unavailable` 错误。该类问题通常与 RL 训练中 Actor 推理服务过载或环境初始化时的短暂网络不可达有关。
  - **链接**: [THUDM/slime Issue #1314](https://github.com/THUDM/slime/issues/1314)

- **[#363] [CLOSED] 技术交流群**
  - **作者**: BossBaby1024
  - **摘要**: 社区用户提出建立微信技术交流群的建议。侧面反映出该项目在国内 RL/LLM 对齐开发者群体中具有一定的活跃度和讨论需求。
  - **链接**: [THUDM/slime Issue #363](https://github.com/THUDM/slime/issues/363)

## 4. 关键 PR 进展
当前有 1 个处于 `OPEN` 状态的 PR，聚焦于底层构建工具链的修复：

- **[#1827] [OPEN] [Fix] Fix cuda-python pin in build_conda.sh**
  - **作者**: kaysonyu
  - **摘要**: 修复 `build_conda.sh` 脚本中 `cuda-python` 的版本锁定问题。当前脚本中 CUDA (`12.9.1`)、PyTorch (`2.9.1`) 和 `cuda-python` (`13.1.0`) 之间存在版本不兼容的情况，且与项目依赖的 SGLang 底层环境要求不一致。此 PR 解决了编译构建时的环境对齐问题。
  - **关联 Issue**: Closes #1826
  - **链接**: [THUDM/slime PR #1827](https://github.com/THUDM/slime/pull/1827)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
基于日常数据及生态位，slime 在当前大模型强化学习对齐阶段具备以下核心价值：

1. **工程稳定性修复的连续性**：从今日的 PR（#1827）可以看出，项目正在积极跟进底层依赖（如 `cuda-python`、PyTorch 2.9、SGLang）的快速迭代。对于 RLHF 算法工程师而言，这意味着可以大幅减少处理底层 CUDA 环境兼容性和编译报错的时间成本。
2. **聚焦 RL 基础设施**：Issue #1314 中的 `RolloutManager` 错误日志表明，slime 深度集成了高效的推理引擎（如 SGLang）来处理 rollout 生成，这是当前大规模 LLM 训练（如 PPO、DPO 及其变体）中最大的性能瓶颈，该项目在训练与推理的联合调度上提供了开箱即用的支持。
3. **清华系 (THUDM) 出品**：依托顶尖研究团队，slime 在代码架构设计（如用户评价的“简洁优雅”）上具有较高水准，适合作为学习大模型 RL 训练范式或进行二次开发的基础框架。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 开源生态日报 (2026-04-13)

## 1. 今日速览
过去 24 小时，AReaL 仓库共处理 **4 条 Issue** (1 closed, 3 open) 和 **3 条 PR** (1 closed, 2 open)，无新版本发布。社区当前焦点高度集中在**底层基础设施升级**（包括异构集群调度、Megatron/SGLang 引擎优化以及显存 Offload 机制），表明该项目正处于算力效率与大规模分布式训练能力的深度迭代期。

## 2. 版本发布
- **无新版本发布**。

## 3. 重点 Issues
- **[Feature] 支持异构集群调度** | 作者: dsuarezsoutoaws | [#1167](https://github.com/inclusionAI/AReaL/issues/1167)
  - **核心内容**：提出基于 Ray Custom Resources 实现异构集群调度，允许训练和推理部署在不同的 GPU 硬件上（例如 B200 用于训练，其他算力用于推理）。这对于在实际生产环境中优化 RL 算力成本、实现资源的差异化配置具有重要意义。
- **[Feature] 引入工厂模式构建 Engine** | 作者: chenzhiyi021 | [#1168](https://github.com/inclusionAI/AReaL/issues/1168)
  - **核心内容**：建议为 `FSDPEngine` 和 `RemoteSGLangEngine` 引入 factory classmethod，以替代现有的 YAML 配置构建方式。此举将增强 API 的灵活性，改善开发者在代码层面动态构建引擎的体验。
- **[documentation] 代码与文档一致性审查** | 作者: KMing-L | [#1165](https://github.com/inclusionAI/AReaL/issues/1165)
  - **核心内容**：自动化审计发现配置行为、LoRA 支持、检查点和 Metrics 追踪等模块的文档与代码实现存在部分脱节。
- *(已关闭)* **微信群二维码过期** | 作者: scuuy | [#1016](https://github.com/inclusionAI/AReaL/issues/1165)

## 4. 关键 PR 进展
- **[WIP] feat: 为 Megatron 引擎添加 Router Replay** | 作者: TaoZex | [#1166](https://github.com/inclusionAI/AReaL/pull/1166)
  - **核心进展**：开发中的功能，旨在引入 Router Replay 机制。在 RL 的 LLM 训练中，这对于稳定 MoE (Mixture of Experts) 架构的负载均衡和训练稳定性至关重要。
- **[WIP] feat: 为 SGLang 支持 Pipeline Parallelism (PP)** | 作者: TaoZex | [#1162](https://github.com/inclusionAI/AReaL/pull/1162)
  - **核心进展**：开发中的功能，为 SGLang 推理引擎添加流水线并行支持。这将大幅提升长上下文或大模型在 RL 生成阶段的推理吞吐量。
- *(已关闭)* **[safe-to-test] 允许显存卸载与磁盘权重更新的共存** | 作者: garrett4wade | [#1157](https://github.com/inclusionAI/AReaL/pull/1157)
  - **核心进展**：该 PR 实现了 Trainer 和 Engine 的共置执行，支持在异步训练中将权重更新卸载到磁盘，从而在保证训练正确性的前提下显著降低峰值显存占用。已关闭，标志着 AReaL 在有限显存下跑通大模型 RLHF 的能力得到进一步完善。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
AReaL 正在解决大语言模型强化学习（RLHF/RLAIF）走向工业级落地时最核心的**系统瓶颈**。从近期的 Issue 和 PR 可以看出：
1. **异构与资源调度**：通过支持 Ray 自定义资源调度异构集群（#1167），AReaL 正在打破单一集群类型的算力限制，这对于成本敏感的大规模商业化 RL 训练是刚需。
2. **极致的显存与吞吐优化**：无论是引入共存卸载与磁盘权重更新（#1157），还是为 SGLang 引入流水线并行（#1162），项目正在极具针对性地优化 RL 训练中“生成响应”和“模型更新”阶段的时间和空间复杂度。
3. **底层架构的抽象与演进**：推动 Engine 的工厂模式构建（#1168）和文档代码一致性同步（#1165），说明项目在快速迭代的同时，正在注重底层 API 的健壮性与开发者体验。

对于关注**大规模 RL 基础设施、SGLang/Megatron 分布式推理优化以及算力成本控制**的研究人员和工程师而言，AReaL 提供了极具参考价值的开源工程实践。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是为您生成的 TRL 项目 2026-04-13 RL 日报摘要：

# 📊 TRL (huggingface/trl) 强化学习生态日报 - 2026.04.13

## 1. 今日速览
过去 24 小时内，TRL 仓库保持高活跃度。项目正式发布了具有里程碑意义的 **v1.1.0** 版本，引入了重磅的蒸馏训练特性。同时，社区围绕 SFT（监督微调）阶段的模板机制展开了密集的工程贡献，共产生 **1 个新版本发布**、**2 条 Issue 更新**（1 open, 1 closed）以及 **8 条 PR 更新**（4 open, 4 closed）。

---

## 2. 版本发布
- **v1.1.0: 核心特性 `DistillationTrainer` 上线**
  - **概述**：引入了用于高效 on-policy（同策略）蒸馏的 `DistillationTrainer`。相比于传统的 off-policy 蒸馏，该方法在知识转移和模型对齐上有显著优化。
  - **相关资源**：官方博客详情：[TRL Distillation Trainer Blog](https://huggingface.co/spaces/HuggingFaceTB/trl-distillation-trainer)
  - **发布链接**：[huggingface/trl Releases v1.1.0](https://github.com/huggingface/trl/releases/tag/v1.1.0)

---

## 3. 重点 Issues
今日的 Issue 动态涵盖了底层算法的严谨性讨论与核心工具链的功能规划。

- **[CLOSED] #2752: [GRPO] 论文与代码实现之间的潜在差异**
  - **分析**：探讨了 DeepSeekMath 论文中定义的 GRPO 目标函数梯度（加权对数概率和）与 TRL 底层实现（对数概率 vs 概率）之间的差异。该 Issue 已关闭，说明社区已就 GRPO 在 TRL 中的数学实现达成共识或完成修正。
  - **链接**：[huggingface/trl Issue #2752](https://github.com/huggingface/trl/issues/2752)

- **[OPEN] #5471: [Tracking] 为主流模型家族添加 `&#123;&#37; generation &#37;&#125;` 聊天模板**
  - **分析**：在使用 `assistant_only_loss=True` 进行 SFT 训练时，必须通过 `&#123;&#37; generation &#37;&#125;` 标记生成正确的 mask。由于目前原生支持该标记的开源模型极少，维护者发起此 Tracking Issue，计划由 TRL 官方统一提供适配主流模型的训练用聊天模板。这是目前的**高优先级社区任务**。
  - **链接**：[huggingface/trl Issue #5471](https://github.com/huggingface/trl/issues/5471)

---

## 4. 关键 PR 进展
PR 动态主要围绕 v1.1.0 的发布、版本维护，以及对 Issue #5471 的集中攻坚（新增 4 个模型支持）。

### 🎯 核心维护与发布
- **[CLOSED] #5524: Release v1.1.0** - v1.1.0 版本合并与发布。[链接](https://github.com/huggingface/trl/pull/5524)
- **[CLOSED] #5525: ⬆️ Bump dev version** - 发行后迭代开发版本号。[链接](https://github.com/huggingface/trl/pull/5525)

### 🛠️ 算法与基础设施修复
- **[OPEN] #5313: 修复 vLLM 权重同步 Bug** - 修复合入 vLLM 后端时，在开启 `vllm_enable_sleep_mode=True` 情况下的权重同步缺陷。这对大规模 RLHF 分布式训练的稳定性至关重要。[链接](https://github.com/huggingface/trl/pull/5313)

### 🚀 聊天模板生态扩充 (Related to #5471)
- **[OPEN] #5527**: 添加 **DeepSeek-V3** 训练聊天模板。[链接](https://github.com/huggingface/trl/pull/5527)
- **[OPEN] #5526**: 添加 **Microsoft Phi-3** 训练聊天模板。[链接](https://github.com/huggingface/trl/pull/5526)
- **[OPEN] #5519**: 为 **GLM-4-MoE** 添加 `&#123;&#37; generation &#37;&#125;` 标记及 `think` patch。[链接](https://github.com/huggingface/trl/pull/5519)
- **[OPEN] #5523**: 添加 **Gemma/Gemma2** 训练变体模板，将统一输出拆分为角色特定分支。[链接](https://github.com/huggingface/trl/pull/5523)
- **[CLOSED] #5522**: 合并 **Qwen2.5** 训练聊天模板支持。[链接](https://github.com/huggingface/trl/pull/5522)

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **从纯强化学习向全栈后训练演进**：v1.1.0 引入的 `DistillationTrainer` 证明 TRL 正在从一个单纯的 RL 算法库（如 PPO, DPO, GRPO），进化为涵盖**模型蒸馏**等更广泛后训练阶段的基础设施，紧跟 LLM 能力迭代的前沿范式。
2. **深度适配分布式 RL 基础设施**：PR #5313 展示了项目正在积极解决与高性能推理引擎结合时的底层 Bug。TRL 正在确保在 vLLM 等框架的复杂特性（如 sleep mode）下，分布式 RL 训练的权重同步无缝且高效。
3. **注重工程落地细节**：集中解决“掩码生成模板”问题（Issue #5471 及相关 PR），表明 TRL 团队非常重视“SFT 到 RLHF”流程中令人头疼的数据对齐痛点。通过统一管理主流模型（如 DeepSeek-V3, Qwen, GLM）的 Chat Template，大幅降低了开发者复现代码和工程落地的门槛。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

以下是为您生成的 2026 年 4 月 13 日 OpenRLHF 项目 RL 日报摘要：

# OpenRLHF 项目日报 (2026-04-13)

**仓库链接**: [github.com/OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)

### 1. 今日速览
过去 24 小时内，OpenRLHF 项目迎来一次**重大版本更新（v0.10.0）**，标志着该项目在多模态和底层推理引擎集成方面迈出了关键一步。今日无新增或更新的 Issues 与 Pull Requests，项目状态稳定。

### 2. 版本发布
- **[Release v0.10.0](https://github.com/OpenRLHF/OpenRLHF/releases)**: 
  本次更新是项目的里程碑版本，核心变更集中在多模态扩展与采样机制优化：
  - **VLM RLHF 支持**: 正式加入对视觉语言模型（VLM）的 RLHF 训练支持，并首发适配了最新一代的 Qwen3.5 系列模型。
  - **vLLM 过采样**: 在底层 vLLM 推理引擎中引入了过采样支持，这将显著提升在复杂奖励模型下的策略探索效率与生成质量。
  - **代码规范**: 同步了 `[pre-commit.ci]` 的自动化代码样式建议。

### 3. 重点 Issues
- **无**。过去 24 小时内未记录到新的 Issues 更新。这通常表明最新版本的 API 变更未引入引发社区集中反馈的阻断性 Bug。

### 4. 关键 PR 进展
- **无新增 PR**。本期所有关键进展均已随 [Release v0.10.0](https://github.com/OpenRLHF/OpenRLHF/releases) 合并入主分支。值得关注的已合并 PR 包括：
  - **[PR #1217](https://github.com/OpenRLHF/OpenRLHF/pull/1217)** (by @hijkzzz): `feat: add VLM (Vision-Language Model) RLHF support (Qwen3.5)`。
  - **[PR #1215](https://github.com/OpenRLHF/OpenRLHF/pull/1215)** (by @pre-commit-ci[bot]): `[pre-commit suggestions]`。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
在 LLM 迈入多模态时代的背景下，纯文本的 RLHF 开源方案已逐渐无法满足前沿需求。OpenRLHF 在 v0.10.0 版本中**快速跟进并原生支持了 VLM（如 Qwen3.5）的 RL 训练**，确立了其在多模态对齐技术栈中的先发优势。此外，项目持续深度绑定并优化底层推理引擎（vLLM 过采样机制的引入），有效解决了 RLHF 训练中长期存在的“生成瓶颈”问题。对于需要从零搭建或优化多模态大模型对齐流水线的研究者和工程师而言，OpenRLHF 依然是当前最活跃、工程化程度最高且最紧跟 SOTA 趋势的开源 RL 框架之一。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

以下是为您生成的 `verl` 项目 2026-04-13 强化学习（RL）生态日报摘要：

### 1. 今日速览
在过去 24 小时内，`verl` 生态保持高度活跃：新增或更新 **7 条 Issues** 和 **14 条 Pull Requests (PR)**，无新版本发布。当前社区的重心集中在**多硬件生态（Ascend NPU）兼容性修复、底层分布式训练（Context/Sequence Parallelism）的边界问题、vLLM 版本适配、以及 RL 算法与 Agent 应用层的扩展**。

### 2. 版本发布
无新版本发布。

### 3. 重点 Issues
今日的 Issues 暴露了在复杂分布式训练和异构硬件适配中的一些关键瓶颈，主要集中在 CP（上下文并行）策略和内存管理：

*   **Context Parallelism (CP) 导致的显存与计算逻辑缺陷：**
    *   [#5981](https://github.com/verl-project/verl/issues/5981) `[bug]`：在 CP > 1 且 TP 切分时，短序列或重填充序列的 packed 预处理会错误混合 rmpad tokens，导致崩溃。
    *   [#5983](https://github.com/verl-project/verl/issues/5983) `[megatron][engine]`：在 Megatron 引擎中，当 CP > 1 时，`batch_num_tokens` 在纯 DP 组中的聚合会导致有效 token 被少计（undercounts）。
*   **异构硬件与依赖库兼容性：**
    *   [#5957](https://github.com/verl-project/verl/issues/5957) `[NPU]`：Ulysses 序列并行在 Ascend NPU 上导致 `logits_rmpad` 与 `temperature_rmpad` 维度不匹配。
    *   [#5959](https://github.com/verl-project/verl/issues/5959) `[Bug]`：vLLM 升级至 0.13.0 后移除了 `disable_mm_preprocessor_cache` 参数，导致多模态训练启动失败。
*   **性能优化与内存泄漏排查：**
    *   [#5979](https://github.com/verl-project/verl/issues/5979)：Offload actor optimizer 到 CPU 后，仍有约 4GB 的不明 GPU 显存占用，探讨了如何在 Ray workers 中 profiling 非 PyTorch CUDA 分配。
*   **算法与数据集基础：**
    *   [#2150](https://github.com/verl-project/verl/issues/2150)：指出当前 GSM8K 默认的 prompt 和 answer parsing 机制导致多数基座模型准确率偏低的问题。

### 4. 关键 PR 进展
今日的 PR 质量极高，涉及系统底层传输优化、前沿算法实现及 Agent 框架增强：

*   **算法与训练逻辑增强：**
    *   [#5974](https://github.com/verl-project/verl/pull/5974) `fix(grpo)`：修复了 GRPO estimator 中的逻辑，将 returns（保留原始结果奖励）和 advantages（包含组归一化值）分离，修复了之前无法监控原始奖励指标的问题。
    *   [#5951](https://github.com/verl-project/verl/pull/5951) `feat: flowgrpo trainer`：引入了面向 Diffusion 模型的 RL 训练器，拓展了 verl 在扩散模型微调领域的边界。
*   **系统底层数据流与显存优化：**
    *   [#5976](https://github.com/verl-project/verl/pull/5976) `[rollout]`：将 FP8 权重量化从 Rollout GPU 转移至 Trainer GPU 侧，在权重同步前完成量化，有效减少了 Rollout 阶段的冗余计算开销。
    *   [#5980](https://github.com/verl-project/verl/pull/5980) `[rollout]`：引入了分桶权重传输机制，解决超大 Tensor 导致 vLLM Rollout 进程崩溃的 OOM 问题。
    *   [#5977](https://github.com/verl-project/verl/pull/5977) `[fully_async]`：修复了异步流式生成抛出异常时训练卡死的问题，增强了异步 RLHF 的鲁棒性。
*   **Agent 与多模态生态：**
    *   [#5978](https://github.com/verl-project/verl/pull/5978) `[tool, rollout]`：为 `ToolAgentLoop` 引入 per-sample 级别的工具环境路由，允许不同样本在多轮对话中使用不同的工具集，极大增强了 Agent 训练的灵活性。
    *   [#5947](https://github.com/verl-project/verl/pull/5947) `[rollout, vllm]`：增加了对 BAGEL（thinker + DiT 架构）多阶段图像生成模型的 RL 推理支持。
*   **依赖适配：**
    *   [#5961](https://github.com/verl-project/verl/pull/5961) `[vllm]`：针对 Issue #5959，自动检测 vllm>=0.13.0 并将废弃参数转换为 `mm_processor_cache_gb`，实现无缝向下兼容。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1.  **突破 LLM 边界，向复杂 Agent 与 Diffusion 进军：** 从今日的 PR（如 FlowGRPO、BAGEL 支持、per-sample tool routing）可以看出，verl 已经不满足于单纯的文本 PPO/GRPO 训练，而是正在成为支撑多模态生成和复杂多轮工具调用的统一 RL 基础设施。
2.  **死磕极致的系统效率：** 项目对显存和通信开销的控制达到了极其细粒度的水平（如 FP8 量化转移至 Trainer 侧、分桶大 Tensor 传输、CP 序列切分 bug 修复），这对于在千卡/万卡集群上训练超大规模 MoE 模型至关重要。
3.  **成熟的多硬件生态：** 随着路线图的推进和针对 Ascend NPU 的大量 Issue 修复与 CI/CD 融入，verl 正在摆脱对单一 GPU 硬件的绝对依赖，展现出成为“跨硬件高性能 RL 标准库”的强大潜力。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# Open Instruct RL 生态日报 (2026-04-13)

## 1. 今日速览
过去 24 小时，Open Instruct 仓库无明显社区讨论（Issues 更新 0 条），无新版本发布。核心代码库保持着平稳的底层迭代，共有 2 个 Pull Requests 取得进展：重点涉及 GRPO 训练循环中动态评估机制的工程接入，以及奖励模型评估脚本的边界条件修复。

## 2. 版本发布
- **最新 Releases**: 无。

## 3. 重点 Issues
- **最新 Issues**: 过去 24 小时无新增或更新。

## 4. 关键 PR 进展

### PR #1581: 将动态评估配置标记接入 GRPO 训练循环
- **作者**: RulinShao
- **状态**: [OPEN]
- **链接**: [allenai/open-instruct PR #1581](https://github.com/allenai/open-instruct/pull/1581)
- **技术摘要**: 该 PR 实现了单向数据流架构（Dataloader → vLLM），将 `apply_evolving_rubric_reward` 和 `max_active_rubrics` 等动态评估配置标记深度整合至 GRPO（Group Relative Policy Optimization）训练循环中。这使得真实标签覆盖能够伴随数据通过 `PromptReques` 流动，为 RLHF 阶段提供更灵活、动态的奖励信号塑造能力。

### PR #1604: 修复 `find_shared_text` 差一错误及空输入崩溃
- **作者**: Chessing234
- **状态**: [OPEN]
- **链接**: [allenai/open-instruct PR #1604](https://github.com/allenai/open-instruct/pull/1604)
- **技术摘要**: 修复了 `reward_modeling_eval.py` 中评估脚本的两个底层 Bug。此前由于 `for/break` 模式的缺陷，当一个字符串是另一个的前缀时会导致截断丢失最后一个共享字符；同时修复了对空输入处理不当导致的脚本崩溃问题，提升了 Reward Model 评估 pipelines 的鲁棒性。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **对前沿 RL 对齐算法的快速工程落地**：通过 PR #1581 可以看出，项目组正在将 GRPO 等前沿策略优化算法与更加复杂的规则系统结合。引入 `evolving rubric` 标志着传统的静态规则奖励正向动态、可迭代的评估体系演进，这对于解决 LLM 复杂推理（如数学、代码生成）中的奖励稀疏和作弊问题至关重要。
2. **底层基础设施的严谨性**：PR #1604 对评估脚本边界条件的细致修复，反映了该团队对 Reward Model 数据处理流鲁棒性的严格要求。在 RL 训练中，评估脚本的边界溢出往往会导致静默的数据损坏，Open Instruct 在这些关键细节上的持续维护，保障了大规模 RL 实验的数据一致性。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

# RL 日报摘要：rl_games
**日期**: 2026-04-13 | **项目**: [Denys88/rl_games](https://github.com/Denys88/rl_games)

---

### 1. 今日速览
过去 24 小时内，rl_games 仓库整体趋于平稳，无新增 Issues、无新增代码合并、无新版本发布。唯一的动态集中在早期提交的一个高性能计算 PR 的记录更新。

### 2. 版本发布
无新版本发布。

### 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

### 4. 关键 PR 进展
项目唯一动态为关于底层计算优化的 PR 记录。

*   **[#346 Add Triton kernel for GAE advantage calculation](https://github.com/Denys88/rl_games/pull/346)** [CLOSED]
    *   **作者**: Denys88
    *   **摘要**: 引入了自定义的 Triton kernel 用于计算 GAE（广义优势估计）。该修改将 `discount_values()` 函数中原有的 Python `for` 循环替换为单一的 GPU kernel 启动，旨在大幅降低 CPU-GPU 通信开销。此外，该特性通过环境变量 `RL_GAMES_USE_TRITON=1` 进行全局配置，并在不支持 Triton 的环境下自动回退到原生 PyTorch 实现。该 PR 当前已关闭。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日项目动态较少，但 PR #346 透传了一个重要的技术趋势：**主流 RL 框架正在向深度硬件加速演进**。
rl_games 作为以高吞吐量和极致训练速度著称的 RL 基层库，其核心维护者开始尝试整合 OpenAI Triton。通过将 GAE 等严重依赖循环迭代的核心算法组件直接下沉到 GPU 端执行，该项目正在探索打破 PyTorch 原生算子带来的性能瓶颈。对于需要依赖大规模并行环境（如 Isaac Gym / Isaac Lab）进行具身智能和连续控制研究的开发团队而言，rl_games 在底层 Tensor 计算和 Kernel 级别的任何优化，都意味着训练周期和试错成本的直接降低。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

以下是为您生成的 2026-04-13 Gymnasium 项目 RL 日报摘要：

# Gymnasium RL 生态日报 (2026-04-13)

## 1. 今日速览
过去 24 小时内，Gymnasium 仓库整体处于平稳迭代状态。无新版本发布，Issue 活动量为 1 条，PR 活动较为集中，共更新 5 条。核心动向集中在**核心 API 包裹器的增强**以及**第三方环境的常规扩充**。

## 2. 版本发布
- **无最新 Releases**。

## 3. 重点 Issues
- **[#652 [CLOSED] 提议增加 ActionRepeat 包裹器](https://github.com/Farama-Foundation/Gymnasium/issues/652)**：
  **摘要**：该 Issue 提议引入 `ActionRepeat` wrapper，以支持在包裹后的环境中将单个动作重复执行指定的步数。其主要动机是为了更好地支持 PlaNet、Dreamer 等需要控制动作帧率的算法（特别是基于 MuJoCo 的任务）。该讨论为后续的代码实现奠定了需求基础，目前状态已关闭。

## 4. 关键 PR 进展
今日 PR 动态主要聚焦于工具链完善与生态扩展：

- **[#1553 [CLOSED] 新增 `RepeatAction` 包裹器](https://github.com/Farama-Foundation/Gymnasium/pull/1553)**：
  **摘要**：直接响应 Issue #652 的实现。设计上继承了 `gym.Wrapper` 而非 `ActionWrapper`，通过在 `step()` 内部多次调用底层环境并累积奖励来实现确定性动作重复。该 PR 的关闭标志着这一高频需求已进入主分支或敲定最终方案。

- **[#1556 [OPEN] 增加 Wrapper 实现验证工具](https://github.com/Farama-Foundation/Gymnasium/pull/1556)**：
  **摘要**：引入 `check_wrapper()` 实用函数。类似于现有的 `check_env()`，此工具用于校验开发者自定义的 Wrapper 是否严格符合 Gymnasium 的 API 规范，将极大降低因 Wrapper 嵌套导致的隐蔽性 Bug。

- **[#1514 [OPEN] 更新 Graph 空间以支持任意节点和边](https://github.com/Farama-Foundation/Gymnasium/pull/1514)**：
  **摘要**：致力于升级图空间，使其能够处理异构图或命名特征字典。这一改动对于强化学习在复杂网络、分子建模等非欧几里得数据结构上的应用至关重要。

- **第三方环境扩充 (均已关闭)**：
  - [#1557 [CLOSED] 增加第三方环境 BoltCrypt](https://github.com/Farama-Foundation/Gymnasium/pull/1557)：纯文档更新。
  - [#1554 [CLOSED] 增加第三方环境 Hill Climb Racing Env](https://github.com/Farama-Foundation/Gymnasium/pull/1554)：基于 Box2D 和 Pygame 的游戏环境接入。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管 Gymnasium（及其前身 OpenAI Gym）已是强化学习领域的事实标准，但近期的更新表明它并未停止向工程化和深度需求演进：
1. **工具链与鲁棒性提升**：引入 `check_wrapper()` 等机制，说明项目正致力于解决 RL 工程化中“环境与算法胶水代码”规范性差的痛点。
2. **前沿架构的兼容性**：对图空间和帧跳跃/动作重复的底层支持，直接呼应了当前 RL 研究向图神经网络（GNN）及世界模型演进的趋势。
Gymnasium 依然是连接底层物理引擎/模拟器与上层 RL 算法最坚实的基石。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

以下是为您生成的 2026-04-13 PettingZoo 项目 RL 日报摘要：

### 1. 今日速览
截至 2026-04-13，PettingZoo 在过去 24 小时内整体活动趋于平稳。项目无新版本发布，无新增或更新的 Issues，仅有 1 个历史文档类 PR 发生状态更新。

### 2. 版本发布
无。
*当前项目无最新的 Release 版本更新。*

### 3. 重点 Issues
无。
*过去 24 小时内未产生新的技术讨论或 Bug 报告。*

### 4. 关键 PR 进展
过去 24 小时内有 1 条 PR 状态更新，为历史 PR 的状态流转：

*   **[#1248 [CLOSED] Docs: update aec_rps.py](https://github.com/Farama-Foundation/PettingZoo/pull/1248)**
    *   **作者**: liuzhaoze (创建于 2024-12-09，更新于 2026-04-12)
    *   **摘要**: 文档代码修正。该 PR 旨在更新自定义环境创建文档中的 `aec_rps.py` 示例代码。核心修改原因在于统一代码规范：将单数形式的属性名（如 `self.observation_space` 和 `self.action_space`）更正为与当前所有标准环境一致的复数形式（`self.observation_spaces` 和 `self.action_spaces`），以确保 API 一致性。该 PR 现已关闭。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管近期代码提交频率较低，但 PettingZoo 作为多智能体强化学习（MARL）底层标准化的基石，依然具有不可替代的生态价值：

*   **严格的 API 标准化（AEC 标准）**：正如 PR #1248 所体现的细节，项目对 `observation_spaces` 等复数属性的严苛要求，反映了多智能体环境下处理并行或序列观测/动作空间的复杂性。PettingZoo 定义的 Agent Environment Cycle (AEC) 标准，有效解决了多智能体环境中的执行顺序和死锁问题。
*   **无缝对接 Gymnasium 生态**：作为 Farama-Foundation 的核心项目之一，它与底层单智能体 API Gymnasium 深度绑定。只要单智能体 RL 生态（如 Stable-Baselines3, CleanRL）持续繁荣，PettingZoo 就是最标准化、最开箱即用的多智能体环境接口。
*   **算法库底层基准**：目前主流的 MARL 算法库（如 Tianshou 等）均原生支持或深度适配 PettingZoo 的环境 API。关注该项目的演进，有助于开发者在多智能体领域保持代码架构的前向兼容性。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>