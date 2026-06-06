# RL 开源生态日报 2026-06-07

> 生成时间: 2026-06-06 22:19 UTC | 覆盖项目: 15 个

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
当前 RL 开源生态正经历从“算法验证”向“超大规模多模态后训练基建”的范式跃迁。大模型强化学习框架呈现出极高的工程迭代频率，重点关注多模态对齐与分布式底层的打磨；而经典及多智能体 RL 则进入高度成熟的稳定维护期，充当着生态底层的事实标准。

## 各项目活跃度对比
*注：数据提取自 2026-06-07 快照，无活动项目未列入此表但汇总分析于后文。*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **TRL** | 9 | 17 | 0 | 转向泛化 RL 底座，密集集成前沿 VLM 与高级算法。 |
| **verl** | 2 | 17 | 0 | 硬核系统优化，死磕长上下文显存壁垒及异构算力适配。 |
| **AReaL** | 1 | 6 | 0 | 深度并行计算（TP/PP/FSDP）与前沿模型架构极速适配。 |
| **slime** | 3 | 7 | 0 | 专注计算通信感知的动态调度，算法引入采取解耦设计。 |
| **Open Instruct** | 0 | 2 | 0 | 探索混合注意力架构，聚焦底层依赖与分布式稳定性。 |
| **PettingZoo** | 1 | 0 | 0 | 维护期，完善多智能体 API 标准与文档规范。 |
| **CleanRL** | 0 | 1 | 0 | 极简算法基线维护，更新基础依赖以保持生态兼容。 |
| **ROLL** | 1 | 0 | 0 | 探索多模态 RLVR 痛点，暴露出前沿模型接口适配问题。 |

*(OpenRLHF, Gymnasium, SB3, Tianshou 等 6 个项目过去 24 小时内无实质性代码或议题活动。)*

## 共同关注的研究与工程方向

### 1. 研究侧信号
- **多模态/VLM 直接强化学习**：各框架正在将 RLHF 的边界从纯文本拓展到视觉语言。TRL、verl、ROLL 均在密集适配最新 VLM（如 Llava-Next、InternVL、Qwen3.5-VL），RLVR（强化学习与视觉推理）成为核心发力点。
- **突破 PPO/DPO 的算法局限**：社区对策略优化的探索异常活跃。TRL 引入了 DPPO 并探讨 SAC，AReaL 集成了新型正交化优化器 Muon，slime 则快速跟进了 CISPO 算法，旨在为不同奖励延迟和稀疏场景提供更优收敛解。

### 2. 工程/基础设施侧信号
- **长上下文显存墙攻坚战**：随着训练文本迈向 64K+ 级别，传统算子常导致 OOM。verl 重写了底层避免实例化完整张量以节省 28GB 显存，slime 引入了基于 FLOPs 的动态微批次划分，精准打击 Attention 的 $O(L^2)$ 显存痛点。
- **严苛的实验可复现性与稳定性**：底层训练的“静默错误”引起高度重视。verl 修复了不完整 rollout 导致的错误训练并引入 vLLM 推理完全确定性；AReaL 修复了分布式并发导致的 GRPO 优势计算静默错误；Open Instruct 和 TRL 均在解决底层 Flash Attention 和 Dropout 引发的训练异常。
- **异构算力与 MoE 架构适配**：对国产异构算力的支持成为标配（如 verl 对 Ascend NPU 拓扑感知的深度调度）。同时，Qwen3.5 MoE 等大稀疏模型正成为各分布式训练框架（AReaL、verl）的重点优化对象。

## 差异化定位分析
- **TRL 与 verl** 构成了大模型对齐的“双顶流”，但侧重点截然不同。TRL 凭借 HF 生态，主打**泛化易用与算法广度**（如多模态模板开箱即用）；verl 则带有极强的“硬核系统基因”，死磕**极限吞吐与长文本底层算子优化**。
- **AReaL 与 slime** 属于**深水区探索者**。AReaL 专注于解决千卡集群中 TP/PP/FSDP2 等极度复杂的分布式通信缺陷；slime 则在显存与通信的微观调度（如动态分批）上做到极致。
- **Open Instruct** 扮演着**前沿架构探路者**的角色，目前的重心偏向支持混合注意力（GDN/FLA）等颠覆性底层模型结构的 RLHF。
- **CleanRL 与 PettingZoo** 则是传统 RL 的**学术级基座**。不追求大模型级别的工程宏大叙事，而是提供零抽象的源码和标准化的多智能体 API，保障了学术研究的极低心智负担。

## 社区热度与成熟度
- **高频迭代期项目（TRL、verl）**：社区热度极高，Issue 反馈密集。主要驱动力来自工业界大规模部署中遇到的极端 Bug（如显存泄漏、NCCL 冲突）和学术界对最新算法的迫切需求。
- **架构重构期项目（AReaL、slime、Open Instruct）**：社区互动偏向硬核底层，Issue 多涉及 Megatron、Ray、DTensor 等底层基建，开发者多为专业的基础设施工程师。
- **高度成熟期项目（CleanRL、PettingZoo、Gymnasium、SB3 等）**：代码活动大幅减少，进入规范维护期。其成熟度极高，生态地位稳固，核心维护者的精力转向文档规范和依赖兼容性升级。

## 值得关注的趋势信号
1. **大模型后训练进入“拼基建”时代**：算法红利逐渐让位于工程红利。谁能更优雅地解决 64K+ 上下文 VLM 训练时的显存占用和跨节点通信空耗，谁就能在下一阶段主导开源 RLHF 生态。
2. **分布式框架的“静默错误”隐患浮出水面**：近期曝光的“不完整批次被正常训练”、“Dropout 导致异常高 KL 散度”及“GRPO 并发计算错误”表明，LLM 的 RL 训练在现有框架下可能存在大量“看似收敛，实则策略崩溃”的暗坑，必须引起算法工程师与系统工程师的联合警惕。
3. **优化器底层的数学革新**：Muon 等基于矩阵正交化的新型优化器被原生集成进分布式 RL 框架，这突破了 AdamW 在后训练阶段的统治地位，有望在大 Batch Size 场景下带来收敛效率的质变。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 ROLL 项目 RL 日报摘要（2026-06-07）：

### 1. 今日速览
过去 24 小时，ROLL 仓库整体活动趋于平缓，无代码合并与版本发布。社区活跃度集中在多模态/视觉语言模型（VLM）的适配问题上，新增 1 例关于 Qwen3.5-VL 训练的底层模型前向传播（`forward`）接口报错反馈。
- **Issues 更新**：1 条 ([查看详情](https://github.com/alibaba/ROLL/issues))
- **PR 更新**：0 条 ([查看详情](https://github.com/alibaba/ROLL/pulls))
- **Releases**：0 个 ([查看详情](https://github.com/alibaba/ROLL/releases))

### 2. 版本发布
过去 24 小时无新版本发布。

### 3. 重点 Issues
- **#457 [OPEN] 运行 Qwen3.5 强化学习训练时出现 `forward` 参数报错** 
  - **链接**: [alibaba/ROLL Issue #457](https://github.com/alibaba/ROLL/issues/457)
  - **详情**: 开发者在跑视觉语言模型（推测为 Qwen2.5-VL 或 Qwen3-VL 系列变体）的 RLVR（强化学习与视觉推理）训练流程时，底层 `GPTModel` 抛出 `TypeError: got an unexpected keyword argument 'mm_token_type_ids'`。
  - **技术分析**: 此报错通常表明 ROLL 的训练主循环（Trainer）向底层模型传递了多模态专属参数（如 `mm_token_type_ids`），但当前的模型架构封装或其基类的 `forward` 方法并未正确解包或预留该参数接口。该 Issue 暴露出 ROLL 在集成最新多模态大模型时的接口适配痛点。

### 4. 关键 PR 进展
过去 24 小时无新增或更新的 Pull Requests。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管近期代码提交频率平缓，但 Issue #457 释放了一个明确的生态信号：**ROLL 正在被社区高频用于多模态大模型（VLM）的后训练（Post-training）与强化对齐（RLHF/RLVR）**。 

在当前 LLM 迈向多模态和复杂推理的 RL 生态中，能提供端到端 RLVR 训练流水线（如 `start_rlvr_vl_pipeline.py`）的开源框架极其稀缺。开发者正主动尝试使用 ROLL 来跑最新架构（如 Qwen3.5）的 VL 训练任务，这证明了该项目在多模态强化学习落地场景中具备切实的刚需价值和技术潜力。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# Reinforcement Learning 开源生态日报 - slime 项目追踪
**日期**: 2026-06-07 | **分析对象**: [THUDM/slime](https://github.com/THUDM/slime)

## 1. 今日速览
过去 24 小时内，slime 仓库共处理了 **3 条 Issues** 和 **7 条 Pull Requests**，无新版本发布。社区当前核心焦点集中在 **底层通信与显存机制的优化（FLOPs-aware 动态分批、日志系统重构）** 以及 **前沿 RL 算法的低成本接入（CISPO 自定义 Loss 示例、GRPO 的 LoRA 支持）**。

## 2. 版本发布
- **最新 Releases**: 过去 24 小时无新版本发布。

## 3. 重点 Issues
- **算法拓展需求：GRPO + LoRA** | [Issue #1202](https://github.com/THUDM/slime/issues/1202)
  - **简述**: 社区用户请求为 GRPO 训练添加 LoRA 支持，并提供相应的训练示例。该需求是当前大模型 RLHF 阶段降低算力门槛的核心痛点。
- **底层依赖报错：torch_memory_saver** | [Issue #2018](https://github.com/THUDM/slime/issues/2018)
  - **简述**: 用户在通过源码构建（`build_conda.sh`）时遇到 `torch_memory_saver` 的 `hook_mode=preload` 兼容性问题，涉及底层 CUDA 环境变量（`TMS_CUDA_MAJOR`）的解析。
- **基础设施请求：更新 Docker 镜像** | [Issue #2025](https://github.com/THUDM/slime/issues/2025) (已关闭)
  - **简述**: 用户指出当前官方镜像 `slimerl/slime:latest` 内置的推理引擎 sglang 版本过旧（v0.5.9），请求升级至 v0.5.12。

## 4. 关键 PR 进展
今日的 PR 动态展现了开发团队在系统底层优化与算法解耦架构上的持续迭代。

- **[Draft] 重型日志系统重构** | [PR #2027](https://github.com/THUDM/slime/pull/2027) (Open)
  - **简述**: 核心开发者正在引入一套更重、更详尽的日志系统，预计将为大规模 RL 训练中的 Debug 和性能分析提供更强支持。
- **架构演进：CISPO 算法以 Custom Loss 形式解耦** | [PR #2026](https://github.com/THUDM/slime/pull/2026) (Open)
  - **简述**: 针对之前试图直接内置 CISPO（Clipped IS-weight Policy Optimization，来自 MiniMax-M1 论文）优势估计器的 [PR #681](https://github.com/THUDM/slime/pull/681)（现已关闭），开发者将其重构为 `examples/cispo` 下的自定义 Loss 实现。这种“示例优先”的设计在不增加主框架臃肿度的前提下，提供了极高的扩展性。
- **系统优化：基于 FLOPs 的动态 Micro-batching** | [PR #2017](https://github.com/THUDM/slime/pull/2017) (Closed) / [PR #2029](https://github.com/THUDM/slime/pull/2029) (Closed)
  - **简述**: 引入了 `balance-by-flops` 机制，打破了传统仅按 token 数量切分 batch 的局限。通过引入 `coeff * L + L²` 计算模型 attention 的二次计算代价，实现计算感知的微批次划分。这表明项目在应对长上下文训练时的工程深度。
- **代码清理** | [PR #2028](https://github.com/THUDM/slime/pull/2028) (Closed) / [PR #1911](https://github.com/THUDM/slime/pull/1911) (Open)
  - **简述**: 移除了冗余函数，并修复了文档中反向 KL 散度（Reverse KL）的公式错误。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **长上下文与系统级工程的深度结合**: 从引入 FLOPs-aware 动态分批解决 Attention 的 O(L²) 痛点，到对底层显存保存机制 (`torch_memory_saver`) 的深度定制，slime 展现了解决 LLM+RL 资源墙问题的硬核工程能力。
2. **紧跟前沿算法的模块化生态**: CISPO 等最新算法的引入方式从“硬核内置”转向“Custom Loss 示例”，说明其架构设计正在成熟，形成了对社区算法友好的解耦生态，方便研究人员快速复现 MiniMax-M1 等最新成果。
3. **全栈工具链的快速迭代**: 社区对 Docker 镜像版本（集成最新 sglang）和 GRPO+LoRA 的强烈需求，印证了该项目在“训练-推理”全栈 RL 闭环中的重要地位。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL 开源生态 RL 日报 (2026-06-07)

## 1. 今日速览
过去 24 小时，AReaL 仓库共处理/更新 **1 个 Issue** 和 **6 个 Pull Requests**，无新版本发布。当前开发重心高度聚焦于**分布式训练引擎的稳定性（TP/PP/FSDP）**、**底层通信机制优化**以及对**最新前沿模型架构（如 Qwen3.5 MoE）**的适配工作。

## 2. 版本发布
**无**。主分支当前处于密集的底层特性迭代与缺陷修复阶段，建议生产环境跟进具体 Commit。

## 3. 重点 Issues
- **[#1298](https://github.com/areal-project/AReaL/issues/1298) [BUG] `clear_batches()` crashes non-DP-head ranks on TP/PP > 1 (regression from #1282)**
  - **摘要**：分布式训练中出现的严重边界缺陷。当张量并行（TP）或流水线并行（PP）大于 1 时，非 DP-head ranks 上的 `clear_batches()` 会触发崩溃，且已确认是导致实验中断的根因。该 Bug 是 #1282 引入的回归问题。
  - **状态**：Open (已复现确认)

## 4. 关键 PR 进展
今日活跃的 PR 集中在分布式通信优化、显存/张量处理修复及前沿算法集成上，技术含量极高：

- **[#1384](https://github.com/areal-project/AReaL/pull/1384) feat(megatron): Qwen3.5 dense + MoE training/inference support**
  - **摘要**：引入对 Qwen3.5 系列模型（Dense 及 MoE 架构）的训练与推理支持。底层适配了其全新的 GDN（Gated Delta Net）混合注意力架构，解决了 megatron-bridge 与 mcore 之间的权重转换与前向传播差异。
- **[#1270](https://github.com/areal-project/AReaL/pull/1270) feat: muon optimizer support**
  - **摘要**：集成 Muon 优化器。在 FSDP2 和 Megatron 后端实现了原生的分布式计算。该优化器在每次更新前使用 Newton-Schulz 迭代对动量缓冲区进行正交化，有望在 RLHF 的大 batch 场景中提供更快的收敛速度。
- **[#1392](https://github.com/areal-project/AReaL/pull/1392) fix: add group_id to StartSessionRequest for online GRPO**
  - **摘要**：修复了 Online RL 模式下 `group_size > 1` 时 GRPO 优势标准化计算静默错误的问题。通过引入 `group_id` 隔离并发生成的会话，防止不相关的 user conversations 被错误合并。
- **[#1365](https://github.com/areal-project/AReaL/pull/1365) fix(fsdp engine): localize DTensor norm output for Qwen models in TP**
  - **摘要**：解决 Qwen 模型在张量并行（TP）下的 DTensor 调度崩溃问题。通过在 final norm 层注册 forward hook，处理了 `aten.alias` 和 `aten.slice` 等中间操作导致的显存/通信异常。
- **[#1305](https://github.com/areal-project/AReaL/pull/1305) feat(experimental): integrate Ray RDT for weight syncing**
  - **摘要**：实验性引入基于 Ray Direct Transport (RDT) 的权重同步后端，用于优化 Actor 与 Critic 之间的模型权重拉取与传输元数据提取，进一步压榨集群通信性能。
- **[#1391](https://github.com/areal-project/AReaL/pull/1391) refactor(experimental): consolidate DTA Archon integration**
  - **摘要**：将 Dynamic Token Alignment (DTA) 整合进实验性的 Archon 路径。重构了 trie 构造、rollout 准备及微批次构建逻辑，并补充了完整的文档与回归测试。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
在当前 RLHF/RLAIF 开源框架日益同质化的背景下，AReaL 正在展露其**深水区工程能力**：
1. **直击超大规模分布式痛点**：PR 高频涉及 TP/PP/FSDP2 及 Megatron 底层（如 DTensor 调度、非 DP head 秩崩溃），说明项目正实打实地在千卡/万卡集群上解决 LLM 训练的硬核系统工程问题。
2. **极速跟进前沿算法与架构**：无论是第一时间支持 Qwen3.5 的 GDN 架构和 MoE，还是原生集成 Muon 这类新型正交化优化器，都体现了其对前沿训练技术极高的吸收与工程落地效率。
3. **深度定制的 RL 算法优化**：从修复 GRPO 分组并发的隐蔽 Bug（#1392）到引入 RDT 高速通信通道，AReaL 并非只是 API 封装，而是在深入计算与通信底层，压榨 RL 训练的有效吞吐量。

对于致力于探索大模型后训练极限性能、且需要深度控制分布式执行细节的研究与工程团队，AReaL 是当前极具解剖和使用价值的基建。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是 TRL (Transformer Reinforcement Learning) 项目 2026-06-07 的开源生态日报摘要。

### 1. 今日速览
过去 24 小时内，TRL 仓库共处理 **9 条 Issues**（全部为历史 Issue 的状态更新与关闭）和 **17 条 PRs**。新提交的 PR 主要围绕多模态（VLM）训练模板适配、核心算法 GRPO 的增强与防错、以及底层依赖的维护。目前没有新的官方版本发布。项目重心正向更好地支持前沿 VLM 模型与复杂 RL 算法（如 DPPO）拓展。

### 2. 版本发布
- **最新 Releases**: 无新版本发布。

### 3. 重点 Issues
当前 Issue 池的动态主要集中在底层分布式训练报错、算法拓展需求及架构优化上，以下几条值得开发者关注：
- **NCCL 多卡冲突**: 使用 vLLM 结合 `GRPOTrainer` 时出现重复 GPU 分配导致 NCCL 初始化错误 ([#3158](huggingface/trl Issue #3158))。
- **Dropout 导致异常高 KL 散度**: 在 GPT2 等包含大量 Dropout 的模型上应用 `GRPOTrainer` 时，初步训练步骤出现极高的 KL 散度，值得 RL 调参时警惕 ([#3500](huggingface/trl Issue #3500))。
- **LLM 后训练算法探索**: 社区持续呼吁引入 Soft Actor-Critic (SAC) 算法以替代/补充传统 PPO 的后训练范式 ([#2465](huggingface/trl Issue #2465), [#2517](huggingface/trl Issue #2517))。
- **V1 架构调整**: 计划将 `KTOTrainer` 迁移至 `trl.experimental` 子模块，标志着 V1 版本架构的持续重构 ([#4463](huggingface/trl Issue #4463))。

### 4. 关键 PR 进展
今日的 PR 活动非常活跃，包含多个重要的功能性增强和错误修复：
- **VLM 训练模板支持**: 新增对 **Llava-Next** ([#5959](huggingface/trl PR #5959))、**SmolVLM** ([#5868](huggingface/trl PR #5868)) 和 **Idefics3** ([#5871](huggingface/trl PR #5871)) 的 `get_training_chat_template` 及 generation markers 支持，大幅改善了多模态模型的训练兼容性。
- **GRPO 核心算法与机制增强**:
  - 集成 **DPPO** (Direct Preference Policy Optimization) 到 `GRPOConfig` 与 `GRPOTrainer` ([#5956](huggingface/trl PR #5956))。
  - 为 `AsyncGRPOTrainer` 添加了完整的 **PEFT/LoRA** 支持，填补了异步训练场景下轻量级微调的空白 ([#5896](huggingface/trl PR #5896))。
- **SFT 与稳定性改进**:
  - `SFTTrainer` 新增 `loss_type="weighted_nll"`，支持基于样本级别的 loss 权重缩放 ([#5952](huggingface/trl PR #5952))。
  - 修复了自定义奖励函数中未定义 `__name__` 属性导致 `GRPOTrainer` 崩溃的 AttributeError ([#5955](huggingface/trl PR #5955))。
  - 增加了 4-bit 量化与 `device_map=auto` 冲突时的用户警告 ([#5953](huggingface/trl PR #5953))。
- **测试与文档维护**: 
  - 增加了对近期热门模型 **Olmo3** 的自动化测试 ([#5962](huggingface/trl PR #5962))。
  - 统一了 SFT, DPO, GRPO, RLOO 的测试维度（模型架构与数据集格式） ([#5963](huggingface/trl PR #5963))。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
TRL 正在从单一的“语言模型对齐工具”向**泛化的深度强化学习底层框架**演进。
1. **前沿多模态 RL 闭环**: 从近期密集合并的 Llava、SmolVLM 等 PR 可以看出，TRL 正在解决多模态模型在 RLHF 阶段 token 难以精准对齐的痛点，VLM 的直接强化学习正在变得开箱即用。
2. **丰富的基础 RL 算法池**: 社区对 SAC、DPPO 等算法的探讨和接入（如 #5956），打破了 LLM 后训练仅依赖 PPO/DPO 的局限，为不同 reward 延迟和稀疏场景提供了更多策略优化的选择。
3. **工业级鲁棒性提升**: 针对底层 Liger 内核与 LoRA 权重同步的修复、异步 GRPO 的支持，以及针对量化部署的防错设计，表明该项目正深度适配大规模分布式训练的严苛工程需求。

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

以下是为您生成的 verl 项目 2026-06-07 RL 生态日报摘要：

### 1. 今日速览
过去 24 小时内，verl 项目保持高频迭代，共有 **17 个 Pull Requests** 产生更新（其中 4 个 Closed，13 个 Open），并处理了 **2 个 Issues**。无新版本发布。
今日的开发重心集中在**长上下文蒸馏的显存优化**、**多模态模型（InternVL、Qwen3-VL）的支持**、**底层训练稳定性的修复**以及 **Ascend NPU 生态的持续适配**。

### 2. 版本发布
无新版本发布。

### 3. 重点 Issues
- **[#6437](https://github.com/verl-project/verl/issues/6437) [bug] main_ppo_sync 在 agent-loop 失败后静默使用部分 rollout 批次进行训练**
  这是一个关键的训练稳定性 Bug。当 Agent 交互循环部分失败时，`ReplayBuffer.sample()` 会忽略失败标记并静默继续训练不完整的数据，这可能导致模型收敛曲线异常。目前已引起社区讨论（4 条评论），并有对应的修复 PR 提交。
- **[#6642](https://github.com/verl-project/verl/issues/6642) GRPO lora 微调 qwen3-vl-4B**
  社区用户在尝试使用 vLLM 0.11.0 + FSDP 对视觉语言模型 Qwen3-VL-4B 进行 GRPO LoRA 微调时发起的求助/讨论，反映了社区对多模态 RLHF 的强烈需求。

### 4. 关键 PR 进展
今日的 PR 进展显著，涵盖了底层核心引擎的优化与分布式基础设施的扩展：

- **训练稳定性与底层 Bug 修复**
  - **[#6641](https://github.com/verl-project/verl/pull/6641) [trainer] 修复不完整 agent-loop rollouts 的静默训练问题**：针对 Issue #6437 的修复，强制 `main_ppo_sync` 在遇到缺失的 rollout 会话时快速失败，保证训练数据的完整性。
  - **[#6639](https://github.com/verl-project/verl/pull/6639) [reward] 跳过空响应的 reward 放置**：修复当模型采样输出为空 token 时，reward manager 在 index `-1` 处错误放置 reward 导致的异常。

- **核心引擎性能优化**
  - **[#6593](https://github.com/verl-project/verl/pull/6593) [fsdp] chunked gather-logsumexp for top-K loss**：针对长上下文（64K+ tokens）蒸馏的重磅优化。重写了 `log_softmax + gather` 模式，避免实例化完整的 `[N, V]` 张量，在 Qwen 词表下可节省约 **28 GB** 的持久化显存，极大降低 OOM 风险。
  - **[#6572](https://github.com/verl-project/verl/pull/6572) [rollout] vLLM rollout 引擎增加确定性支持**：支持 vLLM 推理和 Reward 模型的完全确定性计算，使得两次完全相同的 RL 跑能够产生逐位对齐的奖励曲线，极大提升了 RL 实验的可复现性。
  - **[#6533](https://github.com/verl-project/verl/pull/6533) [rollout] 解决长尾分布下的负载均衡问题**：优化全局请求负载均衡器，在 rollout 步骤的长尾阶段解决“粘性会话”导致的吞吐量饥饿问题，提升多轮对话生成效率。

- **多模态与模型架构支持**
  - **[#6578](https://github.com/verl-project/verl/pull/6578) [model] 增加 InternVL2_5, InternVL3, InternVL3_5 模型支持**：正式引入 InternVL 系列的 GRPO 训练支持，针对其特殊的 `<IMG_CONTEXT>` 标记机制进行了适配。
  - **[#6644](https://github.com/verl-project/verl/pull/6644) [veomni] 修复混合精度配置传递**：修正了 VeOmni 引擎的 API 调用，确保基础模型加载时能正确应用 `MixedPrecisionConfig`。
  - **[#6512](https://github.com/verl-project/verl/pull/6512) [fsdp, model] 泛用型 FSDP + LoRA 升级**：重写了 `layered_summon_lora_params`，解除了大模型多阶段（如 Qwen3-Omni-30B Thinker）进行 RLHF 时的 LoRA 召回阻碍。

- **Ascend NPU 生态与 CI 建设**
  - **[#6610](https://github.com/verl-project/verl/pull/6610) [Ascend] Ray 资源池的机架感知放置搜索**：针对 NPU 集群的高级拓扑感知特性，引入了可选的 TP/CP/PP/DP 启发式节点选择算法，提升跨节点通信效率。
  - 其他 NPU 适配包括：修复 aarch64 架构下 CI 中 `uv` 的不兼容问题（[#6618](https://github.com/verl-project/verl/pull/6618)），增加 Qwen3.5 35B MoE 的 NPU 夜间测试（[#6637](https://github.com/verl-project/verl/pull/6637)），以及修复 Megatron-Bridge 禁用 MTP 时的配置传播错误（[#6626](https://github.com/verl-project/verl/pull/6626)）。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **直击长上下文与多模态 RLHF 的工程痛点**：随着 VLM（如 Qwen3-VL, InternVL）在 RLHF 中的普及，64K+ 长文本和巨大词表带来的 OOM 问题成为算力黑洞。verl 团队不仅在适配模型，更在底层算子层面（如 PR #6593 显存节省优化）进行深度重构，这是开源社区中少有的 Hardcore RL 工程突破。
2. **极高的 RL 实验严谨性**：对 vLLM 推理环节引入完全确定性支持（PR #6572）并修复潜在的静默数据损坏 Bug（PR #6641），表明该项目正在从“能用”向“工业级可复现”迈进，这对算法复现和论文发表至关重要。
3. **异构计算生态的全面布局**：除了主导的 GPU 生态，verl 在 Ascend NPU 上的推进极具侵略性（从拓扑感知调度到密集的 Nightly CI 集成）。在当前全球算力供应链波动的背景下，这种深度的跨硬件兼容性使其极具成为“事实标准”的潜力。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

**Open Instruct (allenai/open-instruct) RL 生态日报 - 2026-06-07**

**1. 今日速览**
过去 24 小时内，Open Instruct 项目无新版本发布，无新增或更新的 Issues。项目活跃度主要体现在代码贡献端，共有 2 个 Pull Requests 获得更新，重点聚焦于底层注意力机制的兼容性修复以及混合模型训练基础架构的扩容。

**2. 版本发布**
今日无新版本发布。

**3. 重点 Issues**
今日无新增或更新的 Issues。

**4. 关键 PR 进展**
*   **[#1716 [OPEN] 修复 `detect_attn_implementation` 对 `flash-attn-2` 的检测逻辑](https://github.com/allenai/open-instruct/pull/1716)**
    *   **作者**: BrownianNotion
    *   **摘要**: 修复了底层依赖检测的一个关键 Bug。当前代码会因 `flash-attn-2` 仍包含特定的子目录，而错误地将环境识别为已安装 `flash-attn-4`。该 PR 对齐了 Hugging Face `transformers` 底层工具的逻辑，提升了不同版本 Flash Attention 环境下的训练稳定性。
*   **[#1715 [OPEN] Olmo-core 脚本实现对混合模型的支持](https://github.com/allenai/open-instruct/pull/1715)**
    *   **作者**: finbarrtimbers
    *   **摘要**: 这是一个重要的架构级特性更新。为支持全新的混合模型训练，该 PR 引入了三项底层改动：1) 支持仅对选定模块进行 Checkpoint（绕过无法保存的 GDN 层）；2) 提升了 FLA (Flash Linear Attention) 的版本依赖；3) 显式增加了 `tilelang` 依赖。这为后续融合不同架构（如 Attention 与 Linear Attention）的 RLHF 实验铺平了道路。

**5. 为什么这个项目值得在当前 RL 生态继续关注**
尽管今日无直接涉及 RL 算法的上层代码更新，但 Open Instruct 作为 Allen AI 的核心训练框架，其底层基建的演进直接反映了 RLHF/Post-training 技术的工程趋势。今日 #1715 号 PR 对混合模型和 FLA 架构的支持表明，项目正在突破标准 Transformer 的显存与计算瓶颈，探索更高效的模型架构；而 #1716 对 Flash Attention 检测的修复则展示了项目对大规模分布式训练稳定性的极高要求。关注 Open Instruct 的底层 PR，能够提前预判大模型在 RL 对齐阶段的算力优化与架构迭代方向。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# CleanRL 项目日报摘要 (2026-06-07)

## 1. 今日速览
过去 24 小时内，CleanRL 仓库整体活跃度趋缓。无新版本发布，无新增 Issues，仅有 1 项依赖更新相关的 Pull Request 处于 Open 状态，核心代码库保持稳定。
- **Issues 更新**: 0 条
- **PR 更新**: 1 条
- **新 Release**: 0 个

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

## 4. 关键 PR 进展
- **[#554 [OPEN] fix: refresh jax extra dependency pins](https://github.com/vwxyzjn/cleanrl/pull/554)**
  - **作者**: Mr-Neutr0n | **创建时间**: 2026-06-04 | **最近更新**: 2026-06-06
  - **技术摘要**: 该 PR 旨在修复 CleanRL 中 `jax` 额外依赖项的版本锁定（pins）问题。当前代码库强依赖的旧版包（如 `jax==0.4.8`, `jaxlib==0.4.7`, `flax==0.6.8` 等）已无法在当前的 PyPI 索引中正常解析，导致 JAX 相关的 CI 流水线在执行核心测试前就直接中断。此 PR 刷新了这些版本限制，以恢复 CI 的可用性。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
CleanRL 在强化学习开源生态中具有不可替代的定位：**单文件、无复杂抽象的算法实现**。
1. **消除工程黑盒**：在 RL 工程实践中，复杂的框架抽象（如 Rllib 等）常导致算法调试困难。CleanRL 坚持将算法逻辑、环境交互和网络结构写在单个文件中，使得底层机制（如 Reward 计算、梯度回传）完全透明。
2. **研究友好度极高**：对于需要快速复现论文算法、或在此基础上魔改损失函数的研究人员，CleanRL 提供了最低的阅读和修改心智负担。
3. **生态基础设施的完善**：从当前的 PR 进展可以看出，项目正积极跟进底层框架（如 JAX）的依赖迭代。这意味着社区正在确保该项目在未来几年依然能与现代 Python 生态和最新加速硬件（如 TPU/GPU）保持良好兼容，继续作为可靠的 RL Baseline 平台。

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

# RL 开源生态日报：PettingZoo 项目追踪
**日期**: 2026-06-07 | **分析师**: RL Ecosystem Analyst

---

### 1. 今日速览
过去 24 小时内，PettingZoo 仓库整体处于低活跃状态，无代码合并与版本迭代。核心维护者 @jkterry1 提交了一项旨在提升项目 README 可读性与维护效率的 UI 层级 Bug 报告。
- **Issues 更新**: 1 条
- **PR 更新**: 0 条
- **新版本发布**: 0 个

### 2. 版本发布
今日无新的 Release 或 Tag 更新。

### 3. 重点 Issues
- **[OPEN] [bug] 在 README 中添加 Python 版本支持展示组件**
  - **作者**: jkterry1
  - **概述**: 维护者提出，为了提高项目文档的易读性和可维护性，建议在 README 文件顶部添加一个动态展示当前支持 Python 版本的徽章/组件。此举旨在与同属 Farama 基金会旗下的核心 RL 库 Gymnasium 保持体验上的一致性。
  - **链接**: [Farama-Foundation/PettingZoo Issue #1341](https://github.com/Farama-Foundation/PettingZoo/issues/1341)

### 4. 关键 PR 进展
过去 24 小时内无活跃的 Pull Request 更新。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管近期底层代码提交频率较低，但 PettingZoo 在当前 RL 生态中仍具有不可替代的基础设施价值：
1. **多智能体环境的统一 API 标准**：PettingZoo 提供了标准化的多智能体环境接口，是研究和应用 Multi-Agent RL (MARL) 的核心基石。它与单智能体标准 Gymnasium 形成了完美的生态互补。
2. **Farama 基金会的底层背书**：Issue 中体现出的对“文档规范”和“与 Gymnasium 一致性”的追求，表明该项目在软件工程规范和长期可维护性上有着严格的标准。Farama 基金会的集中管理确保了其不会轻易被社区废弃。
3. **经典环境的持续复用**：无论是在学术界验证新算法，还是在工业界测试多智能体协同策略，PettingZoo 内置的棋盘游戏、经典博弈环境及与第三方环境的无缝对接能力，使其持续充当 MARL 领域的“试验台”。

---
*注：本报告基于 GitHub 仓库 2026-06-07 的快照数据自动生成。*

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>