# RL 开源生态日报 2026-05-25

> 生成时间: 2026-05-24 22:16 UTC | 覆盖项目: 15 个

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
当前强化学习（RL）开源生态呈现出显著的“两极分化”与“场景收敛”趋势。一方面，传统的单智能体与基础 API 框架（如 Gymnasium、PettingZoo）已全面进入成熟期的底层重构与精雕细琢阶段；另一方面，以大语言模型（LLM）及多模态模型对齐为目标的训练框架（如 TRL、verl、slime 等）占据了绝对的社区活跃度，正集中火力攻坚超大规模分布式训练的工程壁垒。LLM 的 Post-training 需求已彻底成为驱动当前 RL 开源生态演进的核心引擎。

## 各项目活跃度对比

*注：下表重点罗列近 24 小时内有实际代码或讨论动态的项目，CleanRL、Stable Baselines3 等无动态项目已略过。*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **PettingZoo** | 36 | 27 | 0 | 正经历“深水区”重构，API 类型系统与物理引擎校准成为重点。 |
| **TRL** | 12 | 5 | 0 | 算法极速迭代，核心聚焦 DAPO 等 RL 新算法的精细化实现与鲁棒性。 |
| **verl** | 2 | 6 | 0 | 深入底层异构算力优化，攻坚大模型 RL 训练中的显存墙与通信瓶颈。 |
| **AReaL** | 2 | 0 | 0 | 暴露并着手解决前沿模型（Qwen3.5）在 FSDP 环境下的显存异常。 |
| **Gymnasium** | 1 | 1 | 0 | 扩展非欧几里得数据支持，打磨底层环境渲染性能。 |
| **slime** | 1 | 1 | 0 | 优化长上下文通信及支持 Megatron 架构的动态批处理。 |
| **OpenRLHF** | 1 | 0 | 0 | 探索多轮交互式 Agent 的强化学习工作流。 |
| **ROCK** | 0 | 1 (状态更新) | 0 | 聚焦大规模分布式训练 CI/CD 流水线的基础设施加固。 |
| **ROLL** | 0 | 1 (状态更新) | 0 | 完善视觉语言模型（VLM）强化学习链路的数据质量控制。 |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **算法范式的快速演进**：从传统的 PPO 向 GRPO、DAPO 等改进型策略优化算法转移，重点探讨 token-level 与 prompt-level loss 的精确对齐计算。
2. **多模态与图结构的泛化**：从纯文本对话向视觉语言模型（VLM）的 RL 对齐延伸（如 ROLL）；同时，环境 API 层面正增强对异构图和复杂非欧几里得空间的原生支持，以适应更复杂的 GNN-RL 结合研究。
3. **交互式 Agent 突破单轮限制**：研究重心开始向 Multi-Turn RL 倾斜（如 OpenRLHF），探索 LLM 在长时间跨度、多轮工具调用场景下的策略优化。

**工程/基础设施侧信号：**
1. **极致的显存（OOM）压榨与通信优化**：这是目前 LLM+RL 项目的绝对重心。包括适配最新架构（如 Qwen3.5、MTP机制）、修复 FSDP Offload 失效、探索 Context Parallelism 中的 local loss 以减少通信开销。
2. **变长序列与动态批处理**：针对 RLHF 中生成 Response 长度不一造成的算力浪费，引入 Variable Global Batch Size 与底层的序列并行、Megatron 架构深度集成（如 slime, verl）。
3. **训练过程的数值鲁棒性**：高频修复由于 token 截断、空掩码或大词表（≥64k）导致的 NaN Loss 问题，通过分块 NLL 计算等底层算子优化提升容错率。

## 差异化定位分析

1. **环境与通信标准基座**：Gymnasium 与 PettingZoo 致力于确立单/多智能体的 API 规范。它们不卷入上层算法，而是通过引入严格模式重构和复杂状态表示，确保环境交互数据的极高规范性。
2. **算法广度与快速原型验证**：TRL 扮演着“算法前沿先锋”的角色。它最快响应学术界的新优化器（如 DAPO），侧重于在单卡或轻量级分布式下跑通理论逻辑，并积极与 vLLM 等推理引擎联动。
3. **重型分布式训练基座**：verl、AReaL、slime 属于“重型工程派”，直面千卡集群的工业级痛点。它们强依赖 FSDP2、Megatron 和 TensorRT-LLM，核心壁垒在于实现跨 DP/CP 的显存调度、量化感知训练（QAT）及异构硬件的高效通信。

## 社区热度与成熟度

1. **高活跃与极速响应（成熟壮大期）**：TRL 和 verl 展现出极高的社区热度。面对底层依赖更新（如 `transformers 5.3.0`）或算法变动，社区能在 24 小时内迅速提交大量修复 PR 并展开讨论，生态活跃且具有极强的自我修复能力。
2. **核心收敛与深度打磨（高度成熟期）**：PettingZoo 和 Gymnasium 活跃度依然很高，但已不再追求环境数量的扩张。社区精力集中在消除历史遗留的隐蔽 Bug 和代码重构上，标志着项目已达到高度成熟和稳定的阶段。
3. **工业级静默迭代（平稳期）**：AReaL、OpenRLHF、ROCK 和 ROLL 等项目近期 PR 动态相对较少，但这并非衰退，而是进入了解决极高难度工程壁垒（如多轮 Agent 异步评估、VLM 链路数据控制）的深水区，属于工业界主导的开源项目特有的平稳演进特征。

## 值得关注的趋势信号

1. **底层量化技术前置到 RL 阶段**：verl 引入的 FP8 量化感知训练（QAT）表明，为了突破显存墙，模型量化已不再局限于推理阶段，而是开始直接与 RLHF 的训练流程融合。
2. **基于模型架构特征的定制化 RL 飞轮**：随着 Qwen3.5 等引入多 Token 预测（MTP）等新特性，RL 框架（如 verl）正针对性地进行 loss 对齐与支持，未来 RL 框架的竞争力将取决于对新版基座模型特性的响应速度。
3. **长序列 CoT 的通信瓶颈将成为下一主战场**：随着长思维链的普及，slime 中关于 Context Parallelism 导致耗时翻倍的讨论揭示了新痛点。跨卡、跨节点的序列通信优化（如计算 local loss 替代 all-gather）将是近期各框架重点抢跑的赛道。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 2026-05-25 ROLL 项目 RL 日报摘要：

### 1. 今日速览
过去 24 小时内，alibaba/ROLL 仓库整体保持平稳，无新增 Issue 和版本发布。仓库动态集中在存量 PR 的更新上，重点涉及多模态大模型（VLM）训练链路的可配置化数据处理功能。

### 2. 版本发布
- **无**。近 24 小时内未发布新版本。

### 3. 重点 Issues
- **无**。近 24 小时内无新增或更新的 Issues。

### 4. 关键 PR 进展
- **[OPEN] feat(vlm): 添加可配置的 prompt 过滤功能** 
  - **作者**: [Damon-GSY](https://github.com/Damon-GSY)
  - **动态**: 该 PR 自 3 月创建以来，于昨日（05-24）发生了状态/代码更新。
  - **技术摘要**: 核心变更集中在 `rlvr_config.py` 文件中，新增了 `VLMFilterConfig` 配置项。此功能旨在为视觉语言模型（VLM）的强化学习训练链路引入可动态配置的 Prompt 过滤机制，有助于在 RLHF/RLVR 阶段更灵活地进行数据质量控制。
  - **链接**: [alibaba/ROLL PR #369](https://github.com/alibaba/ROLL/pull/369)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
- **打通 VLM 与 RL 的工程壁垒**：从 PR #369 可以看出，ROLL 正在将强化学习的工程能力向多模态（视觉）大模型延伸。VLM 的 RL 训练（如 RLHF）在数据处理和 reward 反馈上比纯文本 LLM 更复杂，引入细粒度的 `VLMFilterConfig` 表明该项目在积极解决多模态对齐的底层工程痛点。
- **高度的配置化与灵活性**：通过将数据过滤等关键步骤抽象为配置文件，ROLL 正在降低 RL 算法工程师在数据预处理和消融实验上的代码开发成本，符合当前大模型训练框架“高内聚、低耦合”的工业化演进趋势。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

以下是为您生成的 ROCK (alibaba/ROCK) 项目 2026-05-25 强化学习（RL）日报摘要：

### 1. 今日速览
过去 24 小时内，ROCK 项目整体保持静默，无新版本发布，无新增 Issue。仅监测到 1 项 Pull Request 状态更新（已于昨日关闭）。项目当前处于平稳迭代期。

### 2. 版本发布
*   **最新 Releases**：无。
*   **分析**：项目近期未发布新的官方 Release，主分支可能正处于特性开发或代码维护的积累阶段。

### 3. 重点 Issues
*   **最新 Issues**：过去 24 小时无新增或更新的 Issue。
*   **分析**：项目当前无明显待解决的社区痛点或用户阻塞问题，暴露出该阶段核心代码库相对稳定，或社区反馈处于沉淀期。

### 4. 关键 PR 进展
*   **[#1009 test: add network reachability verification for CI](https://github.com/alibaba/ROCK/pull/1009)**
    *   **状态**：`CLOSED`（已关闭）
    *   **作者**：4ek0
    *   **更新时间**：2026-05-24
    *   **摘要分析**：该 PR 的核心目的是提升 CI/CD 流水线的鲁棒性。通过增加针对自托管 Runner（`self-hosted runner`）的内部服务网络连通性测试，提前拦截并验证基础网络环境。这表明项目在分布式/云端 RL 训练环境的工程化上投入了持续精力，以确保大规模训练任务下发前基础设施的可用性。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管近 24 小时项目公开活动较少，但从 PR #1009 的基础设施测试代码可以看出，**ROCK 项目对底层工程质量和 CI 流水线有着严格的要求**。
在当前的强化学习开源生态中，算法的突破往往受限于底层分布式训练的工程化落地难度。ROCK 关注自托管环境下的网络连通性与服务可达性验证，这意味着它正在为大流量、高并发的复杂 RL 算法训练（如大规模多智能体、分布式离线 RL 等）构建坚实且不易出错的基座。对于致力于解决 RL 工程化落地痛点、构建企业级训练集群的研发团队而言，ROCK 的架构设计和工程实践具有持续的跟踪与参考价值。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 slime (THUDM/slime) 项目 2026-05-25 强化学习（RL）开源生态日报摘要：

---

# 📊 RL 开源生态日报：slime (THUDM/slime) 
**日期**: 2026-05-25

### 1. 今日速览
过去 24 小时内，`slime` 仓库活动保持平稳聚焦。无新版本发布，新增/更新 1 个 Issue 和 1 个 Pull Request。当前社区核心关注点集中在**底层分布式训练通信优化**与**动态批处理支持（Megatron 架构集成）**，持续攻坚大模型强化学习的工程化痛点。

### 2. 版本发布
- **无**：近 24 小时无新版本发布。

### 3. 重点 Issues
- **[#1062 [FSDP] Try to optimize context parallelism](https://github.com/THUDM/slime/issues/1062)** 
  - **标签**: `OPEN` `good first issue`
  - **动态**: 该 Issue 创建于 2025 年底，于昨日（05-24）产生新的讨论（目前共 6 条评论）。
  - **技术摘要**: 针对超长序列训练的痛点，作者指出当前 Context Parallelism (`cp=2`) 的耗时是 `cp=1` 的 2 倍，存在严重的通信开销瓶颈。建议的优化方向是：减少 `all gather` 操作（主要针对 entropy 和 logp），并尝试计算 local loss 以大幅降低卡间通信频率。这对于 RL 中处理超长上下文（如长轨迹或长思维链）的工程实现极具参考价值。

### 4. 关键 PR 进展
- **[#1933 [2/N] Support training with variable global batch size](https://github.com/THUDM/slime/pull/1933)**
  - **标签**: `OPEN` `run-ci-megatron`
  - **动态**: 于 05-21 创建，05-24 持续推进 CI 测试。
  - **技术摘要**: 这是一个系列 PR 的一部分（标记为 `2/N`），旨在为项目引入**可变全局批次大小**的训练支持，且明确与 `Megatron` 框架进行底层集成。在 RLHF/GRPO 等强化学习对齐任务中，由于不同 Prompt 生成的 Response 长度差异巨大，变长 Batch 技术能够显著减少 padding 带来的算力浪费，提高 GPU 利用率。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
`slime` 目前展现出的迭代方向精准切中了 LLM+RL（如 RLHF、在线强化学习）的底层工程痛点：
1. **突破长上下文的通信瓶颈**: Issue #1062 对 FSDP 下 Context Parallelism 通信开销的优化探索，是解决 RL 训练中长序列（Long CoT）显存与速度瓶颈的关键。
2. **极致的显存与算力压榨**: PR #1933 引入 Megatron 框架下的 Variable Global Batch Size，直击 RL 训练中因变长输出导致的“水桶效应”痛点，有望带来显著的吞吐量提升。
3. **面向未来的系统级设计**: 项目不仅在算法层面跟进，更在深入 FSDP 与 Megatron 等底层分布式框架进行打磨，为后续支撑超大规模参数的 RL 训练提供了坚实的基建底座。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 开源生态日报 (2026-05-25)

## 1. 今日速览
过去 24 小时，AReaL 仓库整体代码提交及 PR 活动处于静默期，但社区 Issue 讨论出现更新。核心关注点集中在**复杂基座模型（Qwen3.5）在 FSDP 环境下的显存优化及 Offload 机制的有效性**上。

- **Issues 更新**：2 条
- **PR 更新**：0 条
- **新版本发布**：0 个

---

## 2. 版本发布
无新版本发布。

---

## 3. 重点 Issues
今日更新的 2 条 Issue 均围绕大模型分布式训练的工程落地痛点展开，尤其是显存管理与 Checkpoint 加载机制：

- **[#1240] [CLOSED] [Feature] Support using adapter-only LoRA checkpoints to bootstrap FSDP LoRA training**
  - **作者**: Wangxiaoxiaoa
  - **摘要**: 建议支持仅使用 adapter 格式的 LoRA 权重来引导 (bootstrap) FSDP LoRA 训练，以完善现有的检查点保存与恢复逻辑。该特性要求保持 `areal/api/` 的向后兼容性，现已关闭。
  - **链接**: [areal-project/AReaL Issue #1240](https://github.com/inclusionAI/AReaL/issues/1240)

- **[#1319] [OPEN] [Question] Qwen3.5训练时候显存占用异乎寻常地高**
  - **作者**: leekum2018
  - **摘要**: 暴露出潜在的显存管理或 FSDP Offload 兼容性问题。在完全相同的 `config`（且开启 `fsdp.offload_params`）下，Qwen3-4B 可在 3090 正常运行，但换用 Qwen3.5-4B 后 Actor 与 Reference 模型的峰值显存激增至近 50GB（H100 上发生 OOM）。用户观察发现 Reference 模型的显存未按预期释放，推测 `offload_params` 机制在 Qwen3.5 架构上失效。
  - **链接**: [areal-project/AReaL Issue #1319](https://github.com/inclusionAI/AReaL/issues/1319)

---

## 4. 关键 PR 进展
过去 24 小时无活跃的 Pull Request 更新。

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管短期内处于代码静默期，但从 Issue #1319 可以看出，AReaL 正在触及大语言模型强化学习对齐（RLHF/RLAIF）中最核心的工程瓶颈：**在有限 GPU 资源下高效训练超大参数模型**。

当前 RL 生态中，Actor-Critic 框架的显存占用（特别是 Reference 模型的保活与推理）是制约批量试验和长 Context 训练的普遍难题。AReaL 通过深度整合 FSDP 显存卸载与 LoRA 机制，为高算力消耗的 RL 训练提供了端到端的优化方案。解决类似 Qwen3.5 等前沿模型在此框架下的显存异常泄漏问题，将进一步验证和巩固 AReaL 在支持最新大模型 RL 训练上的鲁棒性与不可替代性。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (Hugging Face) RL 日报摘要 - 2026年5月25日

## 1. 今日速览
过去 24 小时内，TRL 仓库共更新 **12 条 Issues**（多数为历史 Issue 的集中回复与关闭）和 **5 条 PR**（均为今日新创建）。无新版本发布。当前社区的开发焦点高度集中在 **GRPO/DAPO 算法的优化与修复** 以及 **训练过程中的 NaN Loss 鲁棒性处理**。

## 2. 版本发布
今日无新版 Releases。

## 3. 重点 Issues

*   **DAPO Token Level Loss 实现偏差 ([#5375](https://github.com/huggingface/trl/issues/5375))**
    *   **状态**: Open
    *   **摘要**: 开发者指出 TRL 当前在处理 DAPO 提出的 token level loss 时，采用了在 batch 内将所有 token 视为平等的处理方式。这可能偏离了 DAPO 原始的按 prompt 聚合计算逻辑，属于核心 RL 训练算法的理论实现探讨。
*   **GRPO 训练与 vLLM 联动出现超时 ([#3736](https://github.com/huggingface/trl/issues/3736))**
    *   **状态**: Closed
    *   **摘要**: 在尝试使用 vLLM 加速 GrpoTrainer 时遭遇超时问题。该问题经过近一年的讨论后于昨日关闭，通常涉及 RL 训练器与 vLLM 推理服务在多卡/多节点环境下的同步与通信机制。
*   **SFTTrainer 对大词表模型（≥64k）的显存优化需求 ([#5829 相关 Issue 映射](https://github.com/huggingface/trl/pull/5829))**
    *   **摘要**: 针对如 Qwen 等词表大小超过 64k 的模型，社区反馈 SFT 阶段的 NLL (负对数似然) 计算存在硬编码的 chunk size 导致显存使用效率不高的问题。
*   **TPOTrainer 评估阶段出现 NaN Loss ([#5662](https://github.com/huggingface/trl/issues/5662))**
    *   **状态**: Open
    *   **摘要**: 实验性的 `TPOTrainer` 在训练损失正常的情况下，`evaluate()` 方法却返回 `NaN` 的 `eval_loss`。该问题催生了今日的多项 PR 修复尝试。

## 4. 关键 PR 进展

*   **实现 DAPO Prompt 级别聚合计算 ([#5828](https://github.com/huggingface/trl/pull/5828))**
    *   **状态**: Open
    *   **摘要**: 配合 Issue #5375，该 PR 修改了 `grpo_trainer.py`，引入了 `dapo_prompt_mean` 功能，将 token 级别的损失正确聚合到 prompt 级别进行平均，完善了 DAPO 算法在 TRL 中的落地。
*   **修复补全序列被完全截断导致的 NaN Loss ([#5826](https://github.com/huggingface/trl/pull/5826))**
    *   **状态**: Open
    *   **摘要**: 增强模型训练鲁棒性。当 `max_length` 小于 prompt 长度导致补全序列被完全截断、对应的 mask 全为空时，`F.cross_entropy` 会返回 NaN。该 PR 修复了这一边缘情况。
*   **SFT 大词表显存优化：可配置的 Chunked-NLL ([#5829](https://github.com/huggingface/trl/pull/5829))**
    *   **状态**: Open
    *   **摘要**: 将 `sft_trainer.py` 中硬编码的 LM Head 分块大小改为可配置参数 (`SFTConfig.chunked_nll_chunk_size`)，缓解了大词表模型在 SFT 时的显存压力。
*   **TPO 空引用掩码导致的 NaN 防御机制 ([#5825](https://github.com/huggingface/trl/pull/5825))**
    *   **状态**: Closed (已合入或被替代)
    *   **摘要**: 另一项针对 #5662 的修复尝试。在 `tpo_trainer.py` 中对 `ref_mask` 进行守门判定，防止空张量传入交叉熵计算。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **算法演进的前沿阵地**：TRL 正在快速吸收学术界最新成果。从社区的高频讨论可以看出，当前核心焦点已从标准的 GRPO 转向对 **DAPO (Dynamic Advantage Policy Optimization)** 等改进型 RL 算法的精细化实现（如 token-level 与 prompt-level loss 的精确对齐）。
2.  **工程化瓶颈的持续突破**：项目不仅在意“跑通”算法，更在解决大规模工程落地痛点。特别是针对 **vLLM 集成** 和 **SFT/RL 阶段的大词表显存优化**，TRL 正在底层算子级别进行优化，这对工业界训练百亿参数级 LLM 至关重要。
3.  **框架鲁棒性的不断提升**：面对实际训练中常见的“截断越界导致 NaN”等隐蔽的数值稳定性问题，开发团队和社区保持着极高的响应速度，持续加固底层 Trainer 代码，降低了开发者在使用 RLHF/GRPO 时的试错成本。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL 日报：OpenRLHF 生态追踪 (2026-05-25)

## 1. 今日速览
过去 24 小时，OpenRLHF 仓库整体活跃度趋于平缓，无新版本发布及 Pull Requests 更新。社区焦点集中在多轮对话 Agent 工作流的训练评估机制上，新增了 1 条关于架构限制的 Issue 反馈。

## 2. 版本发布
- **最新 Releases**: 无

## 3. 重点 Issues
- **[#1242](https://github.com/OpenRLHF/OpenRLHF/issues/1242) [OPEN] why is evaluation during training not supported when using `MultiTurnAgentExecutor`?**
  - **作者**: thevasudevgupta-dc
  - **摘要**: 作者指出在 `train_ppo_ray.py` 的 [L673](https://github.com/OpenRLHF/OpenRLHF/blob/c3188af37cec984614aaa38906e71fa2fc57b079/openrlhf/cli/train_ppo_ray.py#L673) 处，当前代码逻辑阻断了 `MultiTurnAgentExecutor` 工作流在训练过程中执行评估。经过源码排查，作者认为底层能力上理应支持该特性的异步评估，暗示这可能是一个硬编码限制或尚未完善的功能点。

## 4. 关键 PR 进展
- **最新 Pull Requests**: 过去 24 小时无 PR 更新。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
OpenRLHF 作为当前大模型对齐与强化学习（RLHF/RLAIF）的核心基础设施，其演进方向直接反映了业界 LLM 训练的痛点。今日 Issue #1242 暴露出项目正在深度攻坚**多轮交互式 Agent 的强化学习（Multi-Turn RL）**。随着 LLM 从单轮对话向具备执行复杂任务能力的 Agent 演进，如何在长时间的 PPO/Reward Model 交互循环中稳定地插入异步评估，是当前 RL 工程化的一大难点。OpenRLHF 对 `MultiTurnAgentExecutor` 的持续迭代，使其成为探索复杂 Agent 策略优化不可或缺的开源试验田。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

以下是 `verl` 项目 2026-05-25 的强化学习（RL）生态日报摘要：

### 1. 今日速览
过去 24 小时内，`verl` 仓库新增 2 条 Issue 更新与 6 条 Pull Request 更新，无新版本发布。当前开发重心集中在 **多后端（vLLM/Megatron）的兼容性修复**、**显存（OOM）及底层 CUDA 错误的优化**，以及 **量化感知训练（QAT）与全模态 Critic 架构** 的能力扩展。

### 2. 版本发布
无。当前最新版本仍为历史版本，社区活跃度主要体现在主干分支的 Bug 修复与 Feature 开发上。

### 3. 重点 Issues
- **[Bug] 多后端协同 GRPO 训练报错**：有用户反馈在使用 Verl + Megatron + vLLM 对 Qwen3_5 2B 模型进行 GRPO 训练时出现错误。该问题涉及最新的 `transformers 5.3.0`、`megatron 0.16.0` 及 `mbridge` 的复杂环境配置，目前在 H100 集群上复现并处于开放讨论状态（11条评论）。
  链接: [verl-project/verl Issue #5659](https://github.com/verl-project/verl/issues/5659)
- **[Bug] 未合并的 LoRA 导致 CUDA 非法地址访问**：在 FSDP2 训练后端与 vLLM 异步服务架构下，若设置 `lora.merge=False`，训练在第 1 步之后的每一步都会触发 `cudaErrorIllegalAddress` 崩溃。该问题直接影响 LoRA 在 RLHF 中的高效微调流程。
  链接: [verl-project/verl Issue #6454](https://github.com/verl-project/verl/issues/6454)

### 4. 关键 PR 进展
- **修复 Hybrid Rollout 模式下的 FSDP 显存溢出 (OOM)**：在 `data_parallel_size > 1` 的设定下，原有的 `engine.collective_rpc("sleep")` 无法跨 DP 分片传播。该 PR (#6456) 通过在 HYBRID 模式中引入 `engine.sleep()` 修复了 FSDP 反向传播时的 OOM 问题。
  链接: [verl-project/verl PR #6456](https://github.com/verl-project/verl/pull/6456)
- **引入 W4A4 TensorRT-LLM Rollout IPC 调试**：针对底层 TRT-LLM 推理引擎的 IPC（进程间通信）机制进行底层调试与优化，旨在提升 Rollout 阶段的通信效率。
  链接: [verl-project/verl PR #6455](https://github.com/verl-project/verl/pull/6455)
- **补全 VeOmni 原生 Critic 支持 (已关闭)**：为 VeOmni 引擎实现了原生的 Critic/Value 模型训练支持（基于 FSDP2 + 序列并行）。该 PR (#6453) 填补了配置文件中 `VeOmniCriticConfig` 仅有声明而无实现的空白，现已合并/关闭。
  链接: [verl-project/verl PR #6453](https://github.com/verl-project/verl/pull/6453)
- **增加 FP8 量化感知训练 (QAT) (已关闭)**：支持 RLHF 过程中的 w8a8 与 w8a16 量化感知训练，依托于 Megatron-Bridge 的最新上游 PR，将显著降低长 Context RL 训练的显存开销。
  链接: [verl-project/verl PR #6229](https://github.com/verl-project/verl/pull/6229)
- **Megatron 路径修复：对齐 MTP 损失与指标**：修复了旧版 MTP (Multi-Token Prediction) 损失计算中辅助 logits 未与 LM head 完全隔离的问题，针对无权重绑定的模型进行了正确性对齐。
  链接: [verl-project/verl PR #6432](https://github.com/verl-project/verl/pull/6432)
- **Megatron-Bridge 支持 Qwen3.5 LoRA 与 MTP**：底层对接 vLLM 及 Megatron-Bridge 的多个上游 Commit，全面打通最新 Qwen3.5 系列模型的 LoRA 训练与多 Token 预测 (MTP) 能力。
  链接: [verl-project/verl PR #5599](https://github.com/verl-project/verl/pull/5599)

### 5. 为什么这个项目值得在当前 RL 生态继续关注
`verl` 正在演变为一款**高度工程化、支持异构算力与多框架后端的强化学习底座**。
首先，项目紧跟大模型前沿特性（如 Qwen3.5 的 MTP机制、VeOmni 序列并行、FP8 QAT），确保 RL 算法（如 GRPO）能第一时间应用于最新模型架构；其次，其对 Rollout 推理引擎的深度优化（如 vLLM async server 的 hybrid sleep 机制、TRT-LLM IPC 通信）与对各种显存异常的快速响应，正着力解决 RLHF 过程中“集群计算利用率低、显存墙严重”的核心痛点。对于需要构建千卡规模 Post-training 基础设施的团队而言，`verl` 提供了极具参考价值的开源解决方案。

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

# RL 日报摘要：Gymnasium
**日期**: 2026-05-25 | **项目**: [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

### 1. 今日速览
过去 24 小时内，Gymnasium 仓库整体处于低频但聚焦底层优化的状态。无新版本发布，核心维护者与社区开发者的重心倾向于**底层性能优化**与**复杂图结构支持**。具体数据：
- Issues 更新：1 条
- PR 更新：1 条
- Releases：0 个

### 2. 版本发布
**无**。
当前项目无最新版本发布，主分支仍处于稳定迭代维护期。

### 3. 重点 Issues
- **#1585 [OPEN] [enhancement] Faster PyGame Init**
  - **作者**: jkterry1
  - **链接**: [Farama-Foundation/Gymnasium Issue #1585](https://github.com/Farama-Foundation/Gymnasium/issues/1585)
  - **摘要**: 核心维护者提出针对渲染引擎的性能优化提案。该提案源自 PettingZoo 项目的相关讨论，建议通过调整 PyGame 的初始化逻辑来提升环境启动和渲染性能。此举旨在解决不必要的计算开销。

### 4. 关键 PR 进展
- **#1514 [OPEN] Update Graph to accept arbitrary node and edge spaces**
  - **作者**: 2ToTheNthPower
  - **链接**: [Farama-Foundation/Gymnasium PR #1514](https://github.com/Farama-Foundation/Gymnasium/pull/1514)
  - **摘要**: 此 PR 显著增强了 Gymnasium 中 `Graph` 空间的表达能力，使其支持任意节点和边空间（目前已实现对 `Dict` 和 `Tuple` 空间的兼容）。该更新为构建**异构图**或包含命名特征字典的复杂图结构铺平了道路。
  - **进展**: 该 PR 于 1 月创建，昨日再次更新，尚需补充对 `Text`, `Sequence`, `Graph` 等嵌套空间的支持，标志着 Gymnasium 正在向更复杂的非欧几里得数据结构支持迈进。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **非欧几里得数据的原生支持**: PR #1514 对异构图的深度支持，预示着 Gymnasium 正在拓展传统的网格和连续控制环境范式，为基于图神经网络（GNN）的强化学习研究提供更标准化的 API。
2. **与周边生态的紧密协同**: Issue #1585 展示了 Gymnasium 与同属 Farama 基金会的多智能体框架 PettingZoo 在底层性能上的代码级联动，体现了该开源生态在工程上的统一性和高内聚性。
3. **规范化与工业级演进**: 作为当前 RL 领域的事实标准 API，Gymnasium 目前的迭代没有停留在简单的“加环境”，而是致力于打磨核心抽象层的通用性与性能，这为上层算法库（如 Stable-Baselines3, CleanRL 等）的长期稳定性提供了基石。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

# 强化学习（RL）开源生态日报：PettingZoo 项目摘要
**日期**：2026-05-25 | **分析师**：RL Open-Source Ecosystem Analyst

---

### 1. 今日速览
过去 24 小时内，PettingZoo 仓库保持了较高的社区活跃度，主要围绕历史遗留 Bug 修复、多智能体环境物理引擎校准以及底层 API 类型提示的强化展开。
- **Issues 更新**：36 条
- **PR 更新**：27 条
- **新版本发布**：0 个

---

### 2. 版本发布
**无**。距离上个版本的发布已有一段时间，目前项目处于持续的 Bug 修复与社区代码维护阶段。

---

### 3. 重点 Issues

**物理引擎与环境逻辑修复**
- **[Bug] 合作乒乓球边界反弹逻辑错误**：作者 `dm-ackerman` 指出球在触及屏幕上下边界时的物理反弹计算（伪代码）不符合预期。该问题目前已被社区开发者认领并提交了修复 PR。
  链接：[Farama-Foundation/PettingZoo Issue #1289](https://github.com/Farama-Foundation/PettingZoo/issues/1289)
- **[Bug] Waterworld 环境下 pymunk 版本依赖破坏性变更**：`pymunk>7.0.0` 导致 Waterworld 环境运行异常，当前的 `pyproject.toml` 约束过于宽松。
  链接：[Farama-Foundation/PettingZoo Issue #1320](https://github.com/Farama-Foundation/PettingZoo/issues/1320)

**底层 API 与兼容性探讨**
- **[Proposal] Pyright 引入严格模式**：开发者建议将类型检查工具 Pyright 切换至 `strict` 模式（当前会报出 604 个错误），提议通过多个 PR 分批重构代码库，这将大幅提升 MA 环境库的代码健壮性。
  链接：[Farama-Foundation/PettingZoo Issue #1318](https://github.com/Farama-Foundation/PettingZoo/issues/1318)
- **[Question] `.state()` 函数输出格式限制**：社区对当前 `.state()` API 强制输出为 `ndarray` 提出质疑。在 CTDE（集中式训练分布式执行）范式中，全局状态经常包含图或字典等复杂数据结构，开发者呼吁 State space 应具备与 Observation space 同等的灵活性。
  链接：[Farama-Foundation/PettingZoo Issue #1326](https://github.com/Farama-Foundation/PettingZoo/issues/1326)

---

### 4. 关键 PR 进展

**核心 Bug 修复与 API 校准**
- **修复合作乒乓球反弹物理特性**：针对上述 Issue #1289 的直接修复，重构了球体的碰撞反弹逻辑。
  链接：[Farama-Foundation/PettingZoo PR #1336](https://github.com/Farama-Foundation/PettingZoo/pull/1336)
- **修复 Gin Rummy 种子设定导致的 Reward 覆盖问题**：修复了在使用 `reset(seed=...)` 时，环境静默将 `knock_reward` 和 `gin_reward` 恢复为 RLCard 默认值，从而破坏实验可复现性的严重 Bug。
  链接：[Farama-Foundation/PettingZoo PR #1335](https://github.com/Farama-Foundation/PettingZoo/pull/1335)
- **Base Wrapper 返回值修复**：修复了基础 Wrapper 中 `reset` 和 `step` 方法未返回结果数据的问题，统一了 API 行为。
  链接：[Farama-Foundation/PettingZoo PR #1310](https://github.com/Farama-Foundation/PettingZoo/pull/1310)

**类型与测试优化**
- **AECEnv 类型提示改进**：改善了 `env.agent_iter()` 的类型提示，现在迭代产生的 `agent` 将被正确识别为 `AgentId` 类型，提升了 IDE 的代码补全体验。
  链接：[Farama-Foundation/PettingZoo PR #1319](https://github.com/Farama-Foundation/PettingZoo/pull/1319)
- **parallel_api_test 兼容多维动作空间**：修复了当动作掩码应用于非 `Discrete` 空间（如连续或多维空间）时测试套件报错崩溃的问题。
  链接：[Farama-Foundation/PettingZoo PR #1313](https://github.com/Farama-Foundation/PettingZoo/pull/1313)

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注

PettingZoo（常与 Gymnasium 搭配使用）作为多智能体强化学习（MARL）事实上的标准环境 API 之一，其当前的发展动态呈现以下核心生态价值：

1. **正在经历“深水区”重构**：从最近的 PR 动态（如引入 Pyright strict 模式提案、完善 Wrapper 返回值与类型提示）可以看出，项目正在从“快速增加新环境”的扩张期，过渡到“强化底层 API 健壮性与标准化”的成熟期。这对于研发复杂多智能体算法（如 MAPPO、MADDPG）的开发者至关重要，严格的数据类型和规范的 API 能大幅减少因环境侧引发的隐蔽性 Bug。
2. **解决 MARL 实验可复现性痛点**：针对底层依赖（如 `pymunk`, `RLCard`）的版本解耦与 Seed 机制修复（如 Gin Rummy 奖励重置问题），说明社区正在极力消除多智能体实验中难以复现的随机性陷阱。
3. **紧跟前沿 CTDE 范式的需求演进**：开发者对 State 和 Observation 空间灵活性的讨论，直接切中了当前主流 MARL 算法（尤其是需要混合局部观测与全局拓扑状态的图神经网络算法）的痛点。持续关注 PettingZoo 的演进，能够帮助算法研究者及时调整数据流预处理架构。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>