# RL 开源生态日报 2026-04-19

> 生成时间: 2026-04-18 22:05 UTC | 覆盖项目: 15 个

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
当前 RL 开源生态呈现出显著的“冰火两重天”景象。一方面，以 LLM 对齐和后训练为核心的基础设施项目（AReaL, verl, TRL, slime, OpenRLHF）正经历高强度的快速迭代，主导了今日的技术话语权；另一方面，专注于传统 RL 算法与环境的经典库（CleanRL, Stable Baselines3, Tianshou, Gymnasium 等）整体处于平稳维护甚至停滞状态。大模型时代的 Post-training 需求已彻底重塑了 RL 开源社区的演进重心。

## 各项目活跃度对比

项目 | Issues | PRs | Releases | 信号
---|---|---|---|---
**AReaL** | 3 | 12 | 0 | 全栈化演进，深度重构分布式推理引擎
**verl** | 4 | 11 | 0 | 突破算力墙，发力异步 Agent 与多教师蒸馏
**TRL** | 3 | 9 | 0 | 极端训练情况的鲁棒性修复与前沿算法(TPO)落地
**slime** | 2 | 1 | 0 | 极速跟进 MoE 新架构，攻坚分布式通信压缩
**OpenRLHF** | 1 | 1 | 0 | 引入前沿 Muon 优化器，深耕长上下文并行
**torchtune** | 0 | 1 | 0 | 深度介入 `torch.compile` 底层编译耗时优化
**Open Instruct** | 0 | 4 | 0 | 代码解耦，严格对齐底层框架的数学级精度
**PettingZoo** | 0 | 1 | 0 | 基础设施维护，拥抱最新 Python 及开源依赖
**Gymnasium** | 0 | 1 (关闭) | 0 | 经典环境底层物理/逻辑除错
CleanRL / rl_games / ROCK / ROLL / SB3 / Tianshou | 0 | 0 | 0 | 暂无动态，处于稳定期或维护期

## 共同关注的研究与工程方向

**研究侧信号：**
1. **对齐与蒸馏算法的多样化**：社区正积极超越传统的 PPO 算法。TRL 引入了 TPO (Target Policy Optimization) 和自蒸馏重构；verl 落地了多教师模型蒸馏 (Multi-Teacher OPD) 架构；AReaL 则扩展了 DPO Trainer 并开始布局多智能体强化学习 (MARL)。
2. **奖励机制与梯度的鲁棒性**：研究重点开始向极端分布下的训练稳定性倾斜。例如 TRL 深入排查了 GRPO 算法在零方差奖励下产生的伪 KL 梯度问题，并通过引入基于 DAPO 的动态采样来缓解无效计算。

**工程/基础设施侧信号：**
1. **突破大规模分布式算力与通信墙**：超大参数模型的 RL 训练倒逼底层框架升级。verl 修复了 Megatron 长序列并行导致的 Token 漏算，并实现了 TRT-LLM 跨节点推理；slime 引入了权重同步增量压缩机制；AReaL 集成了 Sglang PP 和推测解码。
2. **深度优化异步执行与 Agent 交互**：RLHF 正在从单轮同步向多轮异步演进。verl 修复了异步 Actor 的 event loop 阻塞，并精细化处理了 tool call 的错误反馈；OpenRLHF 则聚焦于 Sequence Parallelism 环境下 `ring_flash_attn` 的兼容性。
3. **极致的显存与编译耗时优化**：TRL 引入分块交叉熵 攻克长序列显存峰值；torchtune 大幅缩减了底层 `torch.compile` 的图构建耗时。

## 差异化定位分析

1. **AReaL vs verl：工业级大集群的硬核较量**。两者均瞄准 100B+ 甚至万亿参数级别的超大规模训练。AReaL 的特色在于提供涵盖 SFT、DPO、MARL 的全栈式基础设施，并对底层网络环境（如 IPv6）有极强兼容性；verl 则更加拥抱复杂的 Agent 异步交互范式，同时在代码规范上加速向中立社区治理过渡。
2. **TRL：HuggingFace 生态的算法敏捷响应者**。作为最主流的算法库之一，TRL 的核心护城河在于对 SOTA 算法（如 TPO）的极速接入，以及对 Reward Model 和 RL 底层数据/梯度计算的严谨修正，它是广大研究者进行算法实验的首选基座。
3. **OpenRLHF vs slime：底层系统级优化的攻坚者**。这两个项目在底层工程上发力极深。OpenRLHF 专注于与 DeepSpeed 的深度绑定及最新优化器（如 Muon）的引入；slime 则展现出对最新 MoE 架构（如 Qwen3.5）的极速响应能力，并在权重同步等通信瓶颈上提供前沿解决方案。
4. **torchtune vs Open Instruct：追求极致的确定性与效率**。torchtune 聚焦于 PyTorch 原生的算力协同（如编译耗时优化）；Open Instruct 则在底层进行严格的数学级精度对齐验证。两者都致力于为上层 RL 算法提供最坚实、无错的基础运行环境。

## 社区热度与成熟度

1. **核心项目的工程化成熟度极速攀升**：从 AReaL 的自动化文档修复、verl 的包名重构去厂商化，到 TRL 对静默丢数据的深度排查，头部 LLM RL 项目已经跨过了“能跑通算法”的Demo阶段，进入了追求工业级高可用、高标准工程健壮性的成熟期。
2. **社区驱动的快速收敛**：各项目均展现出良好的社区协作效率。例如 verl 早上报告的 Megatron CP token 漏算 Issue (#5983)，当天的 PR (#6049) 就迅速提交了修复；TRL 也将散落的自蒸馏架构统一收敛至单一 PR。
3. **经典 RL 生态趋于稳定固化**：相比于 LLM RL 框架的百花齐放，Gymnasium、PettingZoo、SB3 等传统 RL 项目已进入低频维护期，其核心价值已沉淀为行业标准的 API 接口和稳定可靠的基础测试环境。

## 值得关注的趋势信号

1. **系统级创新成为 LLM RL 的核心壁垒**：单纯的算法创新正逐渐让位于系统级工程优化。如 slime 的权重增量压缩、AReaL 的推测解码，表明在超大模型 RLHF 中，通信带宽和推理延迟的优化比单纯的 RL 算法微调带来的收益更大。
2. **长上下文 RL 训练迎来基础设施爆发**：分块交叉熵、Context Parallelism 修复、Ring Flash Attention 兼容性等密集的技术动作，预示着针对超长文档、复杂推理序列（如 MTP 设定下的 SEQ_LEN>26万）的 RL 训练即将成为主流实战场景。
3. **Agent 训练闭环基础设施正在加速构建**：从 verl 的多轮 Agent 轨迹追踪与 tool call 错误反馈，到 AReaL 的 MARL 第一阶段基建，基于环境交互反馈的自我进化框架已在底层分布式训练引擎中生根发芽，这将极大推动具备自主纠错和调用外部工具能力的 Agent 发展。

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

以下是为您生成的 slime (THUDM/slime) 项目 2026-04-19 RL 日报摘要：

### 1. 今日速览
过去 24 小时，slime 仓库整体保持活跃的开发与问题排查节奏。无新版本发布，新增/更新 2 条 Issues 和 1 条 PR。当前社区焦点集中在**前沿大模型（Qwen3.5 系列）的兼容性支持**以及**分布式训练底层的通信与显存优化机制（如权重同步增量压缩、DP Rank 间的 micro-batch 切分）**。

### 2. 版本发布
- **最新 Releases**: 无

### 3. 重点 Issues
- **[#1831](https://github.com/THUDM/slime/issues/1831) [Question] Qwen3.5 Support (e.g., Qwen3.5-35B-A3B)**
  - **作者**: Yanbin-Yin
  - **摘要**: 社区用户正在尝试将 slime 用于最新的 **Qwen3.5-35B-A3B** 模型的 RL 训练。考虑到该架构与已有的 Qwen3-30B-A3B 具备一定的相似性，作者希望确认当前 slime 对该 MoE 模型的支持情况及适配进度。这反映了开源社区对 slime 快速跟进最新 SOTA 模型的期待。
  
- **[#1838](https://github.com/THUDM/slime/issues/1838) [Bug] `_get_capped_partitions` produces empty partitions**
  - **作者**: idawnlight
  - **摘要**: 在多卡分布式训练中，当 `num_microbatches` 在不同 DP ranks 之间进行 all-reduce 操作后，内部函数 `_get_capped_partitions` 会产生空的 micro-batch 分区。这会导致 `torch.cat()` 抛出 `ValueError` 并引发训练崩溃。该 Bug 涉及 RL 训练中复杂的数据并行与微批次调度逻辑，对大规模训练稳定性有直接影响。

### 4. 关键 PR 进展
- **[#1806](https://github.com/THUDM/slime/pull/1806) [feat] delta compression for weight sync**
  - **作者**: nanjiangwill
  - **摘要**: 这是一个重要的功能性 PR，旨在为 Trainer 与 Rollout Engine 之间的权重同步引入**可选的增量压缩机制**。该特性的灵感来自 Cursor（Composer 2）和 Fireworks 的前沿技术博客。在 LLM 的 RLHF/GRPO 训练中，Actor/Critic 模型的权重同步是主要的通信瓶颈，此优化有望大幅降低网络带宽占用，提升异构/大规模集群的训练吞吐量。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **前沿基础设施优化**：通过 PR #1806 引入的权重同步增量压缩，直击大模型 RL 训练中“通信墙”的痛点，证明该项目在底层系统级优化上紧跟甚至引领业界最新趋势（如参考 Fireworks 的 Frontier RL 方案）。
2. **对新架构的极速响应**：从 Issue #1831 可以看出，slime 正在快速接管和适配最新的 MoE 及 Dense 模型（如 Qwen3/3.5系列），为开源社区提供了极低门槛的前沿模型 RL 训练平台。
3. **深度解决分布式痛点**：Issue #1838 暴露了复杂 DP/PP 切分下的边界问题，开发团队对这类底层分布式 Bug 的追踪与修复，体现了该项目致力于在大规模集群场景下提供高鲁棒性、高可用训练框架的决心。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 2026-04-19 RL 日报摘要：

# AReaL RL 日报 (2026-04-19)

## 1. 今日速览
过去 24 小时内，AReaL 仓库维持了较高的开发活跃度。无新版本发布，新增 0 个 Issue，原有 3 个 Issue 发生状态更新；PR 端表现活跃，共有 12 个 Pull Requests 更新，涵盖了核心推理引擎架构优化（如 Sglang PP、推测解码）、多智能体强化学习（MARL）基础设施拓展，以及大规模依赖版本升级和重要文档修复。

## 2. 版本发布
- **最新 Releases**：无

## 3. 重点 Issues
- **[[Roadmap] 2026 Q1 Milestones #907](https://github.com/inclusionAI/AReaL/issues/907)**：项目 Q1 里程碑追踪文档（截止日期为 2026-04-30）。近期持续有社区讨论（评论数已达 22），标明了 `call-for-contribution`，是开发者寻找贡献点的核心切入点。
- **[[BUG] Single-controller SFT duplicates training tokens #1202](https://github.com/inclusionAI/AReaL/issues/1202)**：由社区提交的严重 Bug 报告。指出在单控制器 SFT 场景下会出现训练 tokens 重复计算的问题，且该 Bug 可跨随机种子稳定复现，需相关开发者重点关注。

## 4. 关键 PR 进展
### 核心引擎与架构演进
- **[feat: support pp for Sglang #1162](https://github.com/inclusionAI/AReaL/pull/1162)**：为 Sglang 引入 Pipeline Parallelism (PP) 支持，进一步提升分布式推理和训练的并行效率。
- **[feat: support Speculative Decoding by Sglang Eagle algo #1176](https://github.com/inclusionAI/AReaL/pull/1176)**：集成基于 Sglang Eagle 算法的推测解码功能，旨在大幅降低推理延迟。
- **[feat: add router replay for megatron engine #1207](https://github.com/inclusionAI/AReaL/pull/1207)** / **[#1166](https://github.com/inclusionAI/AReaL/pull/1166)**：为 Megatron 引擎添加 Router Replay 功能，旧版 PR (#1166) 已关闭，新版 (#1207) 正在开发中。

### 训练范式与算法拓展
- **[MARL Phase 1: add per-agent reward group and examples #1129](https://github.com/inclusionAI/AReaL/pull/1129)**：实现多智能体强化学习 (MARL) 第一阶段基础设施，包含数学推理任务的数据流水线、特定验证器以及单 Agent 组奖励机制。
- **[Feature/dpo trainer #1190](https://github.com/inclusionAI/AReaL/pull/1190)**：引入直接偏好优化 (DPO) Trainer，扩展了 AReaL 除传统 RL 之外的 Post-training 算法支持。
- **[feat(engine): lora support for MoE models #1159](https://github.com/inclusionAI/AReaL/pull/1159)**（已合并）：为 Megatron MoE (混合专家) 模型添加 LoRA 支持，并打通了跨节点训练与 HF 格式转换的路径。

### 依赖升级、缺陷修复与文档重构
- **[chore(deps): upgrade megatron-core, megatron-bridge, sglang, vllm #1206](https://github.com/inclusionAI/AReaL/pull/1206)**：全面升级底层核心依赖。其中 `megatron-core` 升至 0.17.0，`vllm` 跨越式升级至 0.19.1。
- **[fix data service failures in IPv6-only environments with HTTP proxy #1208](https://github.com/inclusionAI/AReaL/pull/1208)**：修复分布式数据加载服务在纯 IPv6 + HTTP 代理环境下的网络兼容性 Bug (迁移 `httpx` 至 `aiohttp`)。
- **文档集中修复**：合并了 3 个文档修复 PR ([#1203](https://github.com/inclusionAI/AReaL/pull/1203), [#1204](https://github.com/inclusionAI/AReaL/pull/1204), [#1205](https://github.com/inclusionAI/AReaL/pull/1205))，解决了 Tree Packing 算法描述错误、API 代理端点 404 以及 `critic.backend` 隐式继承导致的 `ValueError` 等关键文档与代码不一致问题。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **全栈式 RL 基础设施演进**：AReaL 正在从单一的 RL 训练框架向涵盖 SFT、DPO、MARL 的 Post-Training 全栈基础设施演进，顺应了 LLM 对齐技术路线多样化的发展趋势。
2. **深度优化底层推理与显存瓶颈**：近期对 MoE LoRA、Pipeline Parallelism 以及推测解码 的深度集成，表明项目在高并发、大模型尺寸的分布式计算瓶颈上投入了实质性研发，这对于超大规模 RL 训练至关重要。
3. **强工程健壮性**：纯 IPv6 环境的兼容性修复、底层核心推理框架的全面升级，以及积极的文档质量管控（基于自动化审计修复文档错误），展现了项目在工业级生产可用性上的高标准。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (Hugging Face) RL 日报摘要 - 2026-04-19

## 1. 今日速览
过去 24 小时内，TRL 仓库共处理 **3** 条 Issues 和 **9** 条 Pull Requests，无新版本发布。社区当前的焦点集中在 **Reward Model 训练的数据处理缺陷修复**、**GRPO 算法在极端奖励分布下的梯度异常修正**，以及 **新对齐算法 TPO (Target Policy Optimization) 和自蒸馏架构的重构**。

## 2. 版本发布
无新版本发布（最新 Releases：无）。

## 3. 重点 Issues
今日暴露的核心问题涉及 Reward 模型的数据完整性和 RL 算法的底层梯度计算。

*   **[Bug] Reward 数据预处理导致 Margin 静默丢失** (#5539 [OPEN])
    *   **链接**: [huggingface/trl Issue #5539](https://github.com/huggingface/trl/issues/5539)
    *   **详情**: `DataCollatorForRewardModelingDataset` 在处理 `margin` 时仅检查了 batch 中的 `examples[0]`。如果在数据 shuffle 后第一个样本不包含 `margin` 字段，将导致整个 batch 的 margin 数据被静默丢弃，影响 Reward 模型训练精度。
*   **[Bug] GRPO/RLOO 零标准差奖励组产生伪 KL 梯度** (#5588 [OPEN])
    *   **链接**: [huggingface/trl Issue #5588](https://github.com/huggingface/trl/issues/5588)
    *   **详情**: 当一个组内的所有 completions 获得相同奖励时（奖励方差为 0），advantages 为 0，理论上不应产生学习信号。但现状是策略损失为 0 的同时，KL 惩罚项（`beta > 0` 时）并不为 0。这会导致无意义的模型参数更新（模型只会单纯惩罚自身分布），严重时可能破坏已对齐的策略。
*   **[跟踪] 新增 Target Policy Optimization (TPO) 算法** (#5590 [CLOSED])
    *   **链接**: [huggingface/trl Issue #5590](https://github.com/huggingface/trl/issues/5590)
    *   **详情**: 原 Issue 已关闭，关于 TPO 算法的讨论已转移至具体的 PR (#5591) 中进行。

## 4. 关键 PR 进展
今日 PR 活动高度活跃，主要包含对新算法的扩展和现有底层训练逻辑的深度重构。

*   **[feat] 新增 TPO Trainer 实现** (#5591 [OPEN])
    *   **链接**: [huggingface/trl PR #5591](https://github.com/huggingface/trl/pull/5591)
    *   **详情**: 基于 [TPO 论文](https://huggingface.co/papers/2604.06159)，在 `GRPOTrainer` 中增加了 `loss_type="tpo"` 选项。通过构建目标分布 $q_i \propto p_i\_old \times \exp(u_i / \eta)$ 实现序列级的目标匹配损失。（注：同日还关闭了早期版本的 TPO 实现草稿 PR #5589，统一收敛到本 PR）。
*   **[fix] 修复 Reward DataCollator 的 Margin 检查逻辑** (#5564 [OPEN])
    *   **链接**: [huggingface/trl PR #5564](https://github.com/huggingface/trl/pull/5564)
    *   **详情**: 旨在彻底解决 Issue #5539。该 PR 将 `torch_call()` 中的检查逻辑从单一 `examples[0]` 扩展到检查所有样本，防止 shuffle 后的 margin 字段丢失。（注：同主题的旧 PR #5563 和 #5562 已于今日关闭，目前以此 PR 为主推进）。
*   **[refactor] 自蒸馏训练器 (sdpo/sdft) 架构统一** (#5573 [OPEN])
    *   **链接**: [huggingface/trl PR #5573](https://github.com/huggingface/trl/pull/5573)
    *   **详情**: 对实验性的自蒸馏 Trainer 进行了重大内部重构。提取了公共的生命周期逻辑至 `BaseSelfDistillationTrainer`，而具体的 `SDFTTrainer` 和 `SDPOTrainer` 只需关注算法本身的实现，大幅提升了代码解耦度。
*   **[feat] 基于 DAPO 的 GRPO 动态采样** (#3758 [OPEN])
    *   **链接**: [huggingface/trl PR #3758](https://github.com/huggingface/trl/pull/3758)
    *   **详情**: 这是一个长周期的活跃 PR，旨在为 GRPO 引入动态采样。参考 DAPO 论文，在训练时对奖励方差为零的 prompts 进行过采样，从而提升 GRPO 算法的计算效率和训练稳定性。
*   **[feat] 分块交叉熵 实现** (#5575 [OPEN])
    *   **链接**: [huggingface/trl PR #5575](https://github.com/huggingface/trl/pull/5575)
    *   **详情**: 引入了 Chunked Cross-Entropy 机制。该 PR 将 chunk 大小设定为 256，旨在通过时间换空间（在可接受的耗时增加范围内），显著降低长序列训练时的显存峰值，使得原本 OOM 的工作负载得以运行。
*   **[refactor] KTO 数据预处理逻辑对齐 DPO** (#5587 [CLOSED])
    *   **链接**: [huggingface/trl PR #5587](https://github.com/huggingface/trl/pull/5587)
    *   **详情**: 重构了 `KTOTrainer` 内部的 `_prepare_dataset` 方法，使 prompt 提取和解包过程变为条件触发，提升了预处理效率，并与 DPO Trainer 的逻辑保持对齐。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
TRL 项目目前的演进路线清晰地反映了后 LLM 时代 RLHF 生态的两大核心诉求：**对极端训练情况的鲁棒性** 和 **前沿对齐算法的快速工程化落地**。

1.  **深度排查底层训练 Bug**：如 #5588 对 GRPO 零方差奖励下伪 KL 梯度的质疑，以及 #5539 对 DataCollator 静默丢弃数据的排查，表明项目正在从“能跑通算法”向“在大规模数据下保证数学严格性和数据完整性”的工业级标准迈进。
2.  **紧跟 SOTA 算法与架构演进**：无论是引入 TPO（Target Policy Optimization），还是通过 Chunked Cross-Entropy (#5575) 突破长上下文 RL 训练的显存墙，TRL 始终保持着对学术界和工程界最新成果的极快响应。
3.  **注重底层基座的抽象与重构**：如自蒸馏 Trainer 架构的统一 (#5573)，说明项目正在为未来更多样化的 RL 变体构建坚实的面向对象基础。对于希望在自己的基座模型上定制 RL 流程的开发者和科研团队而言，TRL 依然是 Hugging Face 生态中不可替代的核心基础设施。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# OpenRLHF RL 日报摘要 (2026-04-19)

## 1. 今日速览
过去 24 小时，OpenRLHF 仓库维持低频但高技术质量的更新。无新版本发布，新增 1 条 Issue 和 1 条 PR。核心动态集中在**底层依赖兼容性修复（Flash Attention）**以及**分布式训练框架架构优化（引入 Muon 优化器）**。

## 2. 版本发布
无（最近 24 小时内未发布新版本）。

## 3. 重点 Issues
- **#1222 [OPEN] Transformer version update breaks `ring_flash_attn`**
  - **作者**: allen-dc
  - **链接**: [OpenRLHF/OpenRLHF Issue #1222](https://github.com/OpenRLHF/OpenRLHF/issues/1222)
  - **摘要**: 发现兼容性 Bug。在较新的 `Transformer` 版本环境下，`openrlhf/models/ring_attn_utils.py` 中引入的 `ring_flash_attn` 模块出现破坏性变更（Breaking Change），导致 API 无法正常导入。该问题直接影响依赖 Sequence Parallelism（序列并行）的长上下文 RLHF 训练任务，亟待社区确认影响范围及修复方案。

## 4. 关键 PR 进展
- **#1221 [OPEN] feat: refactor optimizer/scheduler creation into DeepSpeed strategy with Muon support**
  - **作者**: hijkzzz
  - **链接**: [OpenRLHF/OpenRLHF PR #1221](https://github.com/OpenRLHF/OpenRLHF/pull/1221)
  - **摘要**: 一项显著的架构重构。将优化器和调度器的创建逻辑从各个独立的 Trainer 类中抽离，统一下沉到 `DeepspeedStrategy.prepare()` 方法中，改用基于 DeepSpeed 配置的创建机制。
  - **核心技术点**：正式引入了对 **Muon 优化器**的原生支持（运行环境要求 DeepSpeed >= 0.18.2，启动参数为 `--optim muon`）。此举大幅提升了项目对不同前沿优化算法的扩展能力，降低了维护成本。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **紧跟前沿训练范式**：通过 PR #1221 可以看出，OpenRLHF 始终保持与大模型底层训练框架（如 DeepSpeed）和最新优化算法（如 Muon）的极速对齐，为 RLHF 调参提供最新武器。
2. **深耕大模型长上下文痛点**：Issue #1222 暴露的 `ring_flash_attn` 兼容性问题，侧面反映了该项目在处理超长上下文序列并行方面的深度参与。对于需要复杂推理、长文档对齐的后训练阶段，OpenRLHF 的工程稳定性极具研究与实践价值。
3. **持续的架构打磨**：不断重构核心组件（如优化器解耦），说明项目正在为未来支持更多模态、更复杂的并行策略奠定代码基础，保持了作为开源 RL 基础设施的高代码质量标准。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# verl RL 日报摘要 (2026-04-19)

## 1. 今日速览
过去 24 小时内，verl 生态保持高活跃度。社区共更新了 **4 个 Issues** 和 **11 个 Pull Requests**，无新版本发布。今日焦点高度集中在**大模型底层工程优化**上：Megatron 引擎的 Context Parallelism (CP) 缚 token 计数 bug 修复、多教师蒸馏（MOPD）架构的演进、全异步训练的 event loop 阻塞修复，以及 vLLM/TRT-LLM 推理后端的进一步扩展。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
*   **[#5983](https://github.com/verl-project/verl/issues/5983) [bug] Megatron 引擎 Context Parallelism 导致 token 计数漏算**
    *   **摘要**: 当 `CP > 1` 时，每个 CP rank 仅持有序列的 `1/CP` 切片。但在当前 Megatron 路径中，`batch_num_tokens` 在纯 DP 组内聚合，遗漏了其他 CP rank 的部分 token，导致有效 token 数严重欠计算。该问题直接推动了今日 PR #6049 的修复。
*   **[#6054](https://github.com/verl-project/verl/issues/6054) [feat] 多轮全异步训练中的 router_experts 覆盖问题**
    *   **摘要**: 在多轮 rollout 中，由于每一轮生成的 `routed_experts` 会被最新版本覆盖，导致历史轮次（可能由旧版本模型生成）的专家路由信息丢失。需引入部分记录机制以保持轨迹一致性。
*   **[#6050](https://github.com/verl-project/verl/issues/6050) [工程咨询] 启用 MTP (Multi-Token Prediction) 的 SFT 训练中的序列并行与 Padding 问题**
    *   **摘要**: 针对超长序列设定（`SEQ_LEN=262144`, `CP_SIZE=2`, `USE_MULTITURN=True`）下，探讨如何正确配置序列并行和 `no_padding` 模式。
*   **[#4464](https://github.com/verl-project/verl/issues/4464) [bug] On-policy distillation 报错 "no running event loop"**
    *   **摘要**: 老问题持续跟踪，进行策略蒸馏时出现事件循环未运行及 LLM engine 属性为空的报错（累计 19 条评论）。

## 4. 关键 PR 进展
*   **[#6049](https://github.com/verl-project/verl/pull/6049) [megatron] fix: 修正 Context Parallelism 的 batch_num_tokens 聚合逻辑**
    *   **进展**: 直击 Issue #5983。重构 all-reduce 逻辑，将 `batch_num_tokens` 的聚合从纯 DP 组扩展至包含 CP ranks，确保长序列并行时训练指标计算准确。
*   **[#6051](https://github.com/verl-project/verl/pull/6051) & [#5834](https://github.com/verl-project/verl/pull/5834) [algo] feat: Multi-Teacher OPD 架构落地**
    *   **进展**: 提交了多教师模型蒸馏的完整支持。包含多教师模型/服务器的管理类、配置项及蒸馏脚本。其中 #5834（单教师基线）已于今日合并/关闭，#6051 正式开启多教师 OPD 功能。
*   **[#6052](https://github.com/verl-project/verl/pull/6052) [fully_async] fix: 修复异步 Actor 内的阻塞 ray.get 调用**
    *   **进展**: 修复了 `FullyAsyncTrainer` 等异步 Ray actor 中同步调用 `ray.get` 导致底层事件循环被阻塞的严重性能瓶颈。这对于提升全异步 RLHF 训练吞吐量至关重要。
*   **[#5992](https://github.com/verl-project/verl/pull/5992) [rollout] feat: TRT-LLM 跨节点推理支持**
    *   **进展**: 为 trtllm rollout 后端增加了多节点分布式推理支持，突破单节点内存/算力瓶颈，为超大参数模型（如 405B+）的 RL 训练铺平道路。
*   **[#6055](https://github.com/verl-project/verl/pull/6055) [rollout] feat: 优化 Tool call 错误反馈机制**
    *   **进展**: 细化了 `_call_tool()` 中的异常捕获（如未知函数、JSON解析失败等），为 LLM 提供具备可操作性的自我纠正反馈，提升 Agent 训练的成功率。
*   **[#6053](https://github.com/verl-project/verl/pull/6053) [misc] fix: 项目名称重构 (volcengine -> verl)**
    *   **进展**: 代码库包名及路径标准化重构，彻底向中立的社区项目名过渡。
*   **[#6047](https://github.com/verl-project/verl/pull/6047) & [#6048](https://github.com/verl-project/verl/pull/6048) [rollout] feat: Prep for vexact & 单轮 Agent loop 轨迹追踪**
    *   **进展**: 为即将开源的 vexact 组件做准备，统一单轮和多轮 tool agent loop 中的 rollout trace 提取逻辑。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1.  **突破大模型训练的底层算力墙**：verl 正在快速解决 Context Parallelism (CP)、Multi-Teacher 蒸馏和跨节点 TRT-LLM 推理等硬核工程难题，表明该项目正针对 100B+ 甚至万亿参数级别的模型进行深度的分布式优化，而非停留在简单的单卡 Demo。
2.  **深度拥抱 Agent 与异步执行范式**：从修复异步 Actor 的 event loop 阻塞，到精细化的 tool call 错误反馈，再到多轮 Agent 的 routed experts 状态管理，verl 正在将 RL 训练范式从传统的“单轮同步生成”推向更复杂的“多轮异步 Agent 交互”。
3.  **基础设施的中立化与成熟化**：通过底层命名的彻底重构（volcengine -> verl）和 vexact 等新特性的准备，项目正在建立更加规范和独立的 OSS 治理体系，这对于开源社区的长期信任和企业级采用是极大的利好。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

以下是为您生成的 torchtune 项目 2026-04-19 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，torchtune 仓库整体活跃度较低。无新增 Issues、无新版本发布，仅有 1 项关键 Pull Request 更新。项目近期的主要精力似乎集中在底层训练性能优化（特别是编译时间）而非新功能的快速迭代。

### 2. 版本发布
过去 24 小时无新版本发布。

### 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

### 4. 关键 PR 进展
- **[#1445 [OPEN] Reduce compile time for single-device and multi-device recipes](https://github.com/pytorch/torchtune/pull/1445)**
  - **作者**: yf225
  - **核心内容**: 显著降低单卡和多卡配方的 `torch.compile` 编译耗时。根据 PR 描述，在 A100 环境下，Llama3 8B QLoRA 单卡训练的编译时间从 83 秒大幅缩减至 47 秒，降幅达 **43%**。
  - **分析**: 编译耗时的缩减对强化学习（尤其是 PPO 等迭代频繁的 RLHF 流程）意义重大，能够有效减少图构建开销，提升 GPU 利用率和开发调试效率。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
torchtune 作为 PyTorch 生态原生的大模型微调库，其底层技术演进直接关系到 RLHF 及对齐训练的工程效率。
- **与底层算力的深度协同**：如 PR #1445 所示，项目正在深度介入 PyTorch 的编译优化（`torch.compile`）。对于需要高频次、多阶段（SFT -> Reward Model -> PPO/DPO）运行的 RL 流水线来说，克服编译瓶颈是实现高效迭代的前提。
- **原生且易扩展的 RL 接口**：相比高度封装的商业框架，torchtune 提供了模块化的 PyTorch 原生实现，研究人员可以更便捷地将其与 `vLLM` 或其他推理引擎结合，定制和拆解复杂的 RL 训练循环，是目前开源对齐算法实验的优质基座。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL 生态项目日报：Open Instruct (allenai/open-instruct)
**日期**: 2026-04-19

## 1. 今日速览
过去 24 小时内，Open Instruct 仓库整体保持低活跃度，无新增 Issues、无新版本发布。核心开发者 `finbarrtimbers` 集中推进了 4 个 Pull Requests，主要重构方向围绕**代码解耦、类型检查清理以及与底层 `olmo-core` 训练框架的严格 SFT（监督微调）对齐**。

## 2. 版本发布
无最新版本发布。

## 3. 重点 Issues
过去 24 小时内无新增或更新的 Issues。

## 4. 关键 PR 进展
当前阶段的代码提交主要聚焦于提升框架的模块化程度及底层训练过程的精确可复现性。

- **[#1616 Simplifies the model step logic](https://github.com/allenai/open-instruct/pull/1616)** [OPEN]
  - **摘要**: 对模型前向/反向传播等 step 级别的核心逻辑进行了精简和重构，旨在降低代码复杂度。

- **[#1622 Extract numpy SFT conversion](https://github.com/allenai/open-instruct/pull/1622)** [OPEN]
  - **摘要**: 将 HuggingFace 到 OLMo-core 的 numpy mmap 转换逻辑从独立的脚本（`scripts/data/convert_sft_data_for_olmocore.py`）中抽取出来，重构为独立的库模块 `open_instruct/numpy_dataset_conversion.py`。此举显著增强了代码的模块化，使得即将到来的 OLMo-core SFT 主程序可以直接调用该转换逻辑。

- **[#1621 Drop unused ty ignore](https://github.com/allenai/open-instruct/pull/1621)** [CLOSED]
  - **摘要**: 清理技术债务，移除了 `VllmToolParser._make_request` 中不再被类型检查器标记的 `# ty: ignore` 注释。该 PR 已合并，为后续更大的功能更新保持了代码库的整洁。

- **[#1620 Match reference SFT run: olmo_core_finetune parity](https://github.com/allenai/open-instruct/pull/1620)** [OPEN]
  - **摘要**: **核心验证工作**。旨在确保 `open_instruct/olmo_core_finetune.py` 在经过重构后，能够与纯 `olmo-core` SFT 循环达到严格的数学级对齐（Step-by-step parity）。该工作由 Beaker 实验平台中观察到的参考实验损耗差异触发，是保证 RL/微调环境底层精度的关键步骤。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **基础设施的模块化下沉**: 从 PR #1622 可以看出，项目正在进行底层训练数据处理的接口化重构。将硬编码的转换脚本下沉为可直接 `import` 的库模块，意味着项目正在为更复杂的 RL Pipeline（如在线迭代 RLHF）做底层架构准备。
2. **追求底层精度对齐**: 在 RL 和大模型微调中，底层损失计算的微小差异可能导致策略漂移。PR #1620 针对纯底层框架（`olmo-core`）进行严格的 bit-for-bit 精度对齐验证，反映了该团队对训练过程“确定性与可复现性”的极高要求，这为基于该项目进行 RL 算法研究提供了严谨的基座保障。
3. **强化 Instruct/Tool 能力**: 通过清理和重构 VLLM 工具调用解析器（PR #1616, #1621），项目正在持续打磨大模型与外部环境交互的底层能力，这是构建高阶 RL Agent（如基于反馈的强化学习）不可或缺的基石。

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

以下是为您生成的 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，Gymnasium 仓库整体活跃度较低，无新增 Issue、无新版本发布。唯一的动态为历史 PR 的状态更新：修复 Taxi 环境运动逻辑的 PR [#1515](https://github.com/Farama-Foundation/Gymnasium/pull/1515) 被关闭。

### 2. 版本发布
过去 24 小时无新版本发布。

### 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。值得注意的是，PR [#1515](https://github.com/Farama-Foundation/Gymnasium/pull/1515) 涉及了此前社区反馈的 Taxi 环境缺陷（关联 Issue: [#1509](https://github.com/Farama-Foundation/Gymnasium/issues/1509), [#1510](https://github.com/Farama-Foundation/Gymnasium/issues/1510)），主要表现为雨天条件下底层运动逻辑的不一致性。

### 4. 关键 PR 进展
- **PR [#1515](https://github.com/Farama-Foundation/Gymnasium/pull/1515) [CLOSED] Taxi env updates**
  - **作者**: dm-ackerman
  - **进展**: 该 PR 于昨日（2026-04-18）发生状态更新，目前已被关闭。
  - **技术摘要**: 修复了 Taxi 环境中雨天条件下的移动错误。核心改动是重构了底层移动处理逻辑以消除不一致性，并同步更新了 `TaxiEnv` 的 API 文档以修复先前的文档错误。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
- **标准化基准的底座地位**：作为事实上的标准 RL 环境接口，Gymnasium 的 API 规范（如 `reset`, `step`, `RewardWrapper` 等）已被绝大多数主流算法库（如 Stable-Baselines3, CleanRL, Tianshou）深度集成，是算法对齐与复现的基础。
- **持续的环境维护与除错**：像 PR [#1515](https://github.com/Farama-Foundation/Gymnasium/pull/1515) 针对经典环境（如 Taxi）底层物理/逻辑逻辑的细微修复，体现了项目组对基准环境严格的质量把控。防止因环境本身的逻辑 Bug 导致 RL 算法产生错误的梯度或评估结果，这对保证强化学习研究的严谨性至关重要。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

以下是为您生成的 2026-04-19 PettingZoo RL 日报摘要：

### 1. 今日速览
过去 24 小时内，PettingZoo 仓库整体处于低活跃的维护期。无新增 Issues 和 Releases，仅有 1 条关于主干版本发布的 Pull Request 提交。核心动态集中在推进底层依赖更新及最新 Python 版本的适配。

### 2. 版本发布
- **最新 Release**：无。
- **版本前瞻**：根据最新 PR 动态，项目正在积极筹备 `v1.26.0` 维护版本。

### 3. 重点 Issues
过去 24 小时无新增或更新的 Issues。

### 4. 关键 PR 进展
- **[#1327 [OPEN] Changes for release v1.26.0](https://github.com/Farama-Foundation/PettingZoo/pull/1327)**
  - **作者**: mwydmuch
  - **摘要**: 这是由核心开发者提交的 `v1.26.0` 版本发布准备 PR。该 PR 属于基础设施与维护性质更新，主要包含以下关键改动：
    1. **Python 版本支持**：在 `pyproject.toml` 中正式放开了对 Python 3.13 和 3.14 的版本限制。
    2. **核心依赖重构**：将不再维护的 `pygame` 依赖切换至社区积极维护的开源分支 `pygame-ce` (Community Edition)。
    3. **版本号更新**：将项目版本号升级至 1.26.0。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
PettingZoo 作为 Farama-Foundation 旗下对标 Gymnasium 的多智能体强化学习（MARL）标准 API 库，其当前的更新策略反映了 RL 生态的底层演进趋势：
1. **紧跟 Python 编译器生态**：快速适配 Python 3.13/3.14，确保 MARL 研究人员能够利用最新的 CPython 性能优化（如更快的 Free-threaded 特性和 JIT 前置准备），同时避免因底层解释器不兼容导致的环境构建报错。
2. **拥抱开源社区演进**：将渲染/交互依赖从停滞的 `pygame` 迁移至 `pygame-ce`，体现了项目对依赖健康度的严格把控。对于需要构建自定义多智能体环境的研究者而言，稳定的底层 API 和健康的依赖树是确保长期可复现性的关键。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>