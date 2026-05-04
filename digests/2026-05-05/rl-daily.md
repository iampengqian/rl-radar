# RL 开源生态日报 2026-05-05

> 生成时间: 2026-05-04 22:17 UTC | 覆盖项目: 15 个

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
当前强化学习（RL）开源生态呈现出明显的“两极分化”与“垂直深耕”并存的特征。以大语言模型（LLM）及多模态模型（VLM）对齐为目标的训练框架占据了绝对的热度与工程资源，正在快速向全异步、大规模分布式架构演进；而传统经典 RL 生态则步入成熟期，核心转向代码鲁棒性、类型系统完善与底层张量级别的性能榨取。底层依赖的频繁升级（如 PyTorch、DeepSpeed、vLLM）正在对各上层框架的代码稳定性形成常态化的考验。

## 各项目活跃度对比
*注：以下统计为过去 24 小时内的更新数据。无活动项目已省略，统一归入“低活跃/稳定维护期”。*

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **TRL** | 4 | 25 | 0 | 高频迭代，全面拥抱 VLM、MoE 与在线异步 RL 架构。 |
| **verl** | 3 | 5 | 0 | 密集攻坚多模态与全异步架构，深度优化 FSDP 显存管理。 |
| **AReaL** | 0 | 5 | 0 | 面向千亿级超大模型，发力 MoE 路由稳定性与底层引擎依赖升级。 |
| **Open Instruct** | 0 | 3 | 0 | 聚焦 GRPO 底层逻辑对齐与 off-policy 等算法接口的标准化重构。 |
| **slime** | 1 | 2 | 0 | 专注于解决 colocate+offload 场景下的显存/权重状态同步容错。 |
| **CleanRL** | 0 | 2 | 0 | 极简主义下的底层张量显存拷贝优化，拒绝过度复杂的算法封装。 |
| **OpenRLHF** | 1 | 2 | 0 | 快速响应并修复底层基础框架升级带来的严重兼容性崩溃。 |
| **Tianshou** | 0 | 1 | 0 | 修补经典策略梯度算法（NPG）的数值稳定性。 |
| **ROLL** | 0 | 1 | 0 | 代码处于静默期，但其架构被学术界选作经验回放（PER）新范式的底座。 |
| **Gymnasium** | 1 | 2 | 0 | 完善核心 API 的静态类型系统，探索经典环境底层动力学的深度可控。 |

*(无活动项目：PettingZoo, rl_games, ROCK, Stable Baselines3, torchtune)*

## 共同关注的研究与工程方向

**研究侧信号：**
1. **多模态（VLM）与混合专家的 RL 对齐**：前沿模型（如 Qwen3-VL、Gemma-3、DeepSeek 系列）的 RL 微调成为核心发力点，GRPO/GSPO 算法正在针对 VLM 和 MoE 架构进行深度适配。
2. **非完全在线强化学习的探索**：针对大模型训练效率的瓶颈，学术界和工业界开始重新审视经验回放机制。Open Instruct 引入了 IcePop 和统一的离线策略修正接口，而 ROLL 之上诞生了针对 LLM/VLM 的新鲜度感知优先经验回放（PER）研究。
3. **经典 RL 的鲁棒性基准演进**：Gymnasium 提出为 LunarLander 增加完全可调的转移动力学，反映了学术界对 Domain Randomization 和 Sim-to-Real 迁移研究中环境底层可控性的强烈需求。

**工程/基础设施侧信号：**
1. **底层计算与通信的严格对齐**：vLLM 推理与 PyTorch FSDP2 训练之间的不一致性成为重灾区。例如 Open Instruct 发现并修复了因 Attention Mask 逻辑不匹配导致的巨大指标偏差，verl 则在死磕全异步架构下底层 logprobs 的一致性。
2. **极致的显存与底层依赖管理**：超大模型的 RL 训练对显存极度敏感。各框架密集引入了 Checkpoint CPU Offload（verl）、Chunked NLL Loss（TRL）、修复严重显存泄漏（TRL），并积极应对 PyTorch 2.10 与 DeepSpeed 0.18 强校验带来的幽灵 Bug（OpenRLHF）。
3. **异步推理引擎集成**：为打破生成阶段的 I/O 瓶颈，各项目正在高频集成或升级 vLLM、TensorRT-LLM 和 Sglang，甚至引入投机解码（AReaL）以成倍提升 Rollout 吞吐量。

## 差异化定位分析

1. **重型工业级基座**：**verl**、**AReaL** 和 **TRL** 正在构筑极高的工程壁垒。它们直接面向千亿级参数、超大规模集群的分布式训练，深度介入张量并行（TP）、流水线并行（PP）和显存卸载等最底层的算力调度。
2. **轻量级与高可用基座**：**OpenRLHF** 和 **slime** 的核心定位是提供高稳定性的大模型 RLHF 解决方案。它们在 LoRA + DeepSpeed 或 Colocate 这种高性价比、高痛点场景下的排雷和容错能力极强，适合中等规模算力集群快速上手。
3. **科研级算法验证场**：**Open Instruct** 和 **CleanRL** 坚守“透明度”。前者暴露了最底层的分布式同步逻辑供学术界严格复现，后者则通过单文件的极简实现成为验证张量级优化和基础算法消融实验的最佳工具。
4. **经典与现代的接口标准**：**Gymnasium** 和 **Tianshou** 代表了经典 RL 的沉淀。它们不再追求快速的功能扩张，而是通过静态类型重构和数值稳定性兜底，为整个 RL 生态提供最坚实的底层 API 抽象。

## 社区热度与成熟度
当前社区的活跃资金和人才流明显著向 **LLM/VLM 对齐基础设施** 倾斜。TRL、verl、AReaL 每日处理着高度复杂的分布式多卡协同问题，属于高热度、高成长期项目。而像 Stable Baselines3、rl_games、PettingZoo 等曾经的传统 RL 顶流项目，目前处于极度平稳的成熟维护期（24小时内零动态），说明经典 RL 生态的工具链已高度完善。此外，PyTorch、DeepSpeed 等底层框架的快速迭代，正在对上层项目（如 OpenRLHF、AReaL）的维护周期形成倒逼效应，要求开源维护者必须具备极强的底层依赖响应能力。

## 值得关注的趋势信号
1. **“环境交互标准化”重塑大模型 RL 生态**：TRL 提出并落地 OpenReward Standard (ORS) 适配器，意味着 LLM 的 RL 训练正在摆脱“离线静态数据集”的束缚，向能够与真实动态环境（如沙盒、API、Web）交互的 Agent 训练闭环演进。
2. **MoE 模型的异步路由震荡开始被正面攻克**：大模型 RL 训练不仅要防过拟合，还要防“路由不一致”。AReaL 提出的 Rollout Routing Replay (R3) 机制，首次在开源界直击了 MoE 模型在异步推理和训练阶段因专家路由偏差导致的收敛不稳定问题，这是通向万亿级模型对齐的关键技术节点。
3. **工程兜底能力成为核心竞争力**：在 LLM 对齐的深水区，算法层面的微调红利正在递减，而类似“修复 FSDP 跨步重计算引起的 570 倍指标膨胀”（Open Instruct）和“规避 PyTorch 严格参数校验崩溃”（OpenRLHF）的底层排雷能力，正成为衡量一个开源 RL 框架实战价值的首要标准。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

以下是为您生成的 ROLL 项目 RL 日报摘要（2026-05-05）：

### 1. 今日速览
过去 24 小时内，ROLL ([alibaba/ROLL](https://github.com/alibaba/ROLL)) 仓库整体保持平稳。无新增代码发布或 Issue 反馈，核心动态集中在社区基于该框架的二次开发与学术成果申报。新增 1 条 PR，旨在将基于 ROLL 实现的最新 LLM/VLM 强化学习经验回放研究添加至项目文档。

### 2. 版本发布
- **最新 Releases**：近 24 小时无新版本发布。

### 3. 重点 Issues
- **最新动态**：过去 24 小时无新增或更新的 Issues。

### 4. 关键 PR 进展
- **[#433] docs: add Freshness-Aware-PER to Notable work based on ROLL**
  - **状态**：[OPEN]
  - **作者**：histmeisah
  - **链接**：[alibaba/ROLL PR #433](https://github.com/alibaba/ROLL/pull/433)
  - **摘要**：提交者请求在 README 的 "Notable work based on ROLL"（基于 ROLL 的代表性工作）版块中添加其最新论文 [《Freshness-Aware Prioritized Experience Replay for LLM/VLM Reinforcement Learning》](https://arxiv.org/abs/2604.16918)。该工作在 ROLL 框架之上构建了带有新鲜度感知的优先经验回放（PER）机制，以优化大模型 RLHF 阶段的训练效率。配套开源代码库为 [Vision-CAIR/Freshness-Aware-PER](https://github.com/Vision-CAIR/Freshness-Aware-PER)。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管当前 ROLL 仓库处于代码发布的静默期，但 PR #433 暴露出一个关键的生态信号：**ROLL 正在成为大模型 RL 训练前沿算法的标准化底座**。
传统 RL 算法（如 PPO）在 LLM/VLM 对齐中面临数据利用效率的瓶颈，而引入 PER 等非同策略算法是当前学术界和工业界的重要探索方向。研究团队选择直接在 ROLL 架构之上复现并开源其创新模块，证明 ROLL 的工程架构具有良好的解耦性与扩展性。持续关注围绕 ROLL 衍生的上游算法仓库，能够直接洞察 LLM 强化学习训练范式的最新演进路线。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

以下是为您生成的 slime（THUDM/slime）项目 2026-05-05 强化学习（RL）开源生态日报摘要：

### 1. 今日速览
过去 24 小时，slime 项目的开发活跃度集中在工程稳定性修复与性能调试工具的增强。项目收到 1 个关于 Checkpoint 保存机制的 Issue 反馈，并新增 2 个 Pull Request，分别针对已知 Bug 提出修复方案以及引入了更精细的分布式 Profiling 功能。目前无新版发布。

---

### 2. 版本发布
**无新版本发布。** 项目目前的迭代依然在 `main` 分支进行，聚焦于底层训练逻辑的排雷与优化。

---

### 3. 重点 Issues
**#1886 [Question] Checkpoint save fails with `--colocate + --save-interval` after #1856**
- **链接**: [THUDM/slime Issue #1886](https://github.com/THUDM/slime/issues/1886)
- **作者**: feji3769 | 👍: 2
- **摘要**: 社区用户反馈在当前 `main` 分支中执行 GRPO 训练时，若同时开启 `--colocate`（权重/计算共存）与 `--save-interval`，会在首次保存 Checkpoint 阶段触发底层错误：`torch.AcceleratorError: CUDA error: invalid argument`。该问题被证实是由 PR #1856 引入的回归 Bug 导致，与显存状态管理或分布式同步逻辑存在冲突。

---

### 4. 关键 PR 进展
**#1888 Fix(checkpoint): add resume/pause in save_model() for offload_train (fixes #1886)**
- **链接**: [THUDM/slime PR #1888](https://github.com/THUDM/slime/pull/1888)
- **作者**: Procrastinatorrrr
- **摘要**: 针对 Issue #1886 的直接修复方案。该 PR 完善了 `save_model()` 函数在 `offload_train=True` 状态下的生命周期管理，通过增加正确的“暂停/恢复”机制，解决了因 Checkpoint 保存引发的 CUDA 报错和 Crash 问题，显著提升了重负载训练场景下的容错性。

**#1887 Support rank-selective profiling for slime**
- **链接**: [THUDM/slime PR #1887](https://github.com/THUDM/slime/pull/1887)
- **作者**: LeiDing191
- **摘要**: 引入了细粒度的分布式性能分析（Profiling）支持。新增 `--profile-ranks` 启动参数，允许开发者在不改动代码的情况下，仅对指定的特定 Rank 进行 Profiling（默认情况仍对所有 Rank 生效）。这一改进极大降低了大规模 RL 分布式训练时 Profiling 的性能开销，方便开发者精准抓取 Hang 住或效率低下的具体进程。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **核心训练稳定性的快速迭代**: 从 Issue #1886 的提出到 PR #1888 的修复方案提交，项目维护者对 GRPO 训练中常见的“Colocate + Checkpoint”这一典型边缘场景的响应非常迅速，展现了项目在底层分布式容错机制上的高可维护性。
2. **贴近真实大模型 RLHF 调试痛点**: PR #1887 引入的 Rank-selective profiling 是一项极具实战价值的功能。在 LLM 对齐与 RL 训练动辄跨多机多卡的当下，全局 Profiling 极易造成 IO 写入风暴，按需选定 Rank 进行分析反映了开发团队对大规模 RL 底层工程痛点的深刻理解。
3. **稳固的基础设施生态**: 作为由 THUDM（智谱）支持的开源项目，slime 正在快速吸收社区真实的 GRPO 训练反馈，其在 Offload 机制、显存管理与分布式调试上的持续演进，使其正在成为当前 LLM RL 微调生态中不可或缺的高可用性基础设施。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

以下是为您生成的 AReaL 项目 RL 日报摘要（2026-05-05）：

### 1. 今日速览
过去 24 小时内，AReaL 生态保持活跃，暂无新增 Issues 和版本发布。项目核心开发者持续在底层推理引擎和基础设施方向发力，共有 5 个重点 PR 更新，主要聚焦于大模型（特别是 MoE 架构和 VL 多模态模型）显存优化、训练稳定性修复、推理加速以及核心依赖的全面升级。

### 2. 版本发布
- **无新版本发布**。项目目前正在集中整合大型基础架构改动，预计将在上述核心 PR 合并后迎来新的里程碑版本。

### 3. 重点 Issues
- **无新增或更新的 Issues**。社区反馈与排期目前较为平稳。

### 4. 关键 PR 进展
本期 PR 动态反映了 AReaL 在应对“超大模型 RLHF 训练”痛点上的工程迭代：

- **[#1300 [OPEN] Add mbridge weight save as an option in Megatron](https://github.com/inclusionAI/AReaL/pull/1300)**
  - **核心进展**：针对超大模型在张量并行（TP）下的 Checkpoint 显存压力，引入了 `mbridge.bridge.save_weights` 替代原有的 All-Gather 方案。此举有效防止了保存权重时引发的 OOM（内存溢出）问题，对千亿级别以上大模型的 RL 训练至关重要。

- **[#1299 [OPEN] feat(engine): add Qwen3-VL dense support to Megatron path](https://github.com/inclusionAI/AReaL/pull/1299)**
  - **核心进展**：补全了多模态视觉语言模型的支持。通过 mbridge 注册转换函数，打通了 Qwen3-VL dense 模型在 Megatron 引擎上的 GRPO/PPO 训练链路，标志着 AReaL 正式具备前沿多模态大模型的 RL 对齐能力。

- **[#1207 [OPEN] feat: add router replay for megatron engine](https://github.com/inclusionAI/AReaL/pull/1207)**
  - **核心进展**：针对 MoE（混合专家）模型异步 RL 训练中常见的“推理-训练路由不一致”导致的 instability（不稳定性），提出了 Rollout Routing Replay (R3) 机制。通过固定并重放专家路由索引，显著增强了 MoE 模型（如 DeepSeek 系列）训练的收敛稳定性。

- **[#1176 [OPEN] feat: support Speculative Decoding by Sglang Eagle algo](https://github.com/inclusionAI/AReaL/pull/1176)**
  - **核心进展**：集成基于 Sglang 的 Eagle 投机采样解码算法。在 RL 需要海量 Prompt 生成经验的场景下，投机解码能成倍提升推理吞吐量，从而打破生成阶段的 I/O 瓶颈。

- **[#1206 [OPEN] chore(deps): upgrade megatron-core, sglang, vllm, transformers](https://github.com/inclusionAI/AReaL/pull/1206)**
  - **核心进展**：[高优先级] 执行 2026 年 4 月发布周期的核心依赖项大版本升级。同步适配了 `megatron-core`、`sglang`、`vllm`、`transformers` 最新 API 的 Breaking Changes，确保底层引擎在长期迭代中的性能红利与兼容性。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
AReaL 正在从单纯的 RLHF 算法框架，演进为面向下一代大模型（MoE、多模态 VLM）底层算力优化的**重型 RL 基础设施**。
通过近期 PR 可以看出，项目高度关注工程落地中的硬核痛点（如超大 TP 显存开销、MoE 路由震荡、生成解码吞吐量）。在当前开源 RL 生态中，大多数框架仍局限于稠密中小模型的微调，而 AReaL 对齐的是最前沿的万亿级/多模态模型的生产级训练需求，其技术选型（Megatron + Sglang/vLLM + Mbridge）极具工程深度和实战参考价值。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (Hugging Face) 强化学习生态日报
**日期**: 2026-05-05 | **数据来源**: [github.com/huggingface/trl](https://github.com/huggingface/trl)

---

### 1. 今日速览
过去 24 小时内，TRL 仓库保持高度活跃，无新版本发布，但代码迭代迅速。
- **Issues 更新**: 4 条（3 条 Open，1 条 Closed）
- **PR 更新**: 25 条（含多个核心功能改进与 Bug 修复）
- **新版本发布**: 0 个

---

### 2. 版本发布
无最新 Releases。

---

### 3. 重点 Issues
今日的 Issue 集中在模型兼容性、标准化对接以及默认参数导致的静默错误。

- **[#5697](https://github.com/huggingface/trl/issues/5697) [Bug] GRPO 快速上手代码的 `max_completion_length=256` 默认值导致静默训练崩溃**
  - **摘要**: 开发者直接复制 README 中的 GRPO 示例代码会导致训练静默中断，根源在于默认参数设置不合理。这是一个影响新用户入门体验的关键阻断点。

- **[#5695](https://github.com/huggingface/trl/issues/5695) [Experimental] 提出 OpenReward Standard (ORS) 环境适配器**
  - **摘要**: 提议为 TRL 增加 `OpenRewardEnv` 适配器，使得 GRPO、RLOO 等现有 Trainer 能够直接通过 HTTP 协议与任何支持 [ORS 开放标准](https://openrewardstandard.io)的环境进行交互，极大增强了 RL 环境接入的通用性。

- **[#5471](https://github.com/huggingface/trl/issues/5471) [Tracking] 为常见模型族添加 `&#123;&#37; generation &#37;&#125;` 聊天模板**
  - **摘要**: 跟踪 Issue。为了使 `assistant_only_loss=True`（仅计算 Assistant 回复部分的 Loss）在 SFT 中生效，模型必须包含特定的生成标记。该 Issue 旨在统一维护主流模型的训练用聊天模板。

- **[#5032](https://github.com/huggingface/trl/issues/5032) [Bug] Gemma-3 QLoRA 微调报错 `token_type_ids` 缺失**
  - **摘要**: 在对多模态/文本 Gemma-3 模型（4b+）进行 QLoRA SFT 时触发 ValueError。此 Issue 已通过 PR #5644 修复。

---

### 4. 关键 PR 进展
近期 PR 重点围绕 **GRPO 训练器增强**、**VLM（视觉语言模型）支持完善** 以及 **性能优化**。

#### 🚀 核心算法与训练优化
- **[#5700](https://github.com/huggingface/trl/pull/5700) 修复激活卸载中超 5GB 的 CUDA 显存泄露**
  - **摘要**: 通过在 `OffloadActivations` 中同步 CUDA streams 并清理 stash，彻底修复了严重的显存泄露问题，对长上下文训练至关重要。
- **[#5406](https://github.com/huggingface/trl/pull/5406) DPO Trainer 增加长度归一化 Sigmoid Loss**
  - **摘要**: 引入了 Tulu-3 / OLMo 模型中使用的长度归一化 DPO Loss（参考 SimPO 论文），提升了对齐训练的稳定性。
- **[#5640](https://github.com/huggingface/trl/pull/5640) [CLOSED] 修复 GRPO 中零标准差奖励组产生的伪 KL 梯度**
  - **摘要**: 解决了 GRPO 训练中，当 batch 内 rewards 完全相同时（std=0），KL 散度惩罚项依然会产生无效梯度拉扯模型的问题。
- **[#5698](https://github.com/huggingface/trl/pull/5698) 引入 MFU (Model FLOPs Utilization) 辅助计算函数**
  - **摘要**: 添加了计算 Dense 及 MoE 模型（如 Mixtral, DeepSeek-V2）每个 token 训练 FLOPs 的工具函数，便于开发者精准评估训练效率。

#### 🧩 GRPO 及异步架构演进
- **[#5610](https://github.com/huggingface/trl/pull/5610) 为 AsyncGRPO 引入 LoRA 支持**
  - **摘要**: 解锁了 AsyncGRPO 的 LoRA 微调能力。采用 HTTP reload 替代 NCCL 同步权重到 vLLM，验证了在 Gemma 4 上的可用性。
- **[#5691](https://github.com/huggingface/trl/pull/5691) AsyncGRPO 支持 logits softcapping**
  - **摘要**: 使得 AsyncGRPO 能够兼容 Gemma-2 等使用 `final_logits_softcapping` 技术的模型。
- **[#5696](https://github.com/huggingface/trl/pull/5696) 落地 OpenReward Standard 适配器**
  - **摘要**: 配合 Issue #5695，实现了 TRL 与 ORS 标准环境的初步对接。

#### 🤖 VLM 支持与 SFT 增强
- **[#5684](https://github.com/huggingface/trl/pull/5684) 在 SFT 中为 VLM 启用分块 NLL Loss (Chunked NLL)**
  - **摘要**: 极大地优化了多模态模型的显存占用（将长序列切块计算），配合 PEFT 支持释放了在有限算力下微调大型 VLM 的潜力。
- **[#5644](https://github.com/huggingface/trl/pull/5644) [CLOSED] 修复 Gemma-3 的 `token_type_ids` 报错**
  - **摘要**: 彻底解决了文本绕过 Processor 直接 forward 时，因缺少 `token_type_ids` 导致 Gemma-3 崩溃的 Bug。

#### 🛠 基础设施与重构
- **[#5637](https://github.com/huggingface/trl/pull/5637) 重构 tiny-model 生成脚本**
  - **摘要**: 将庞大且耦合的单体测试模型生成脚本拆分为 per-model 架构，大幅提升 TRL 代码库的可维护性。
- **[#5573](https://github.com/huggingface/trl/pull/5573) 实验性重构：自蒸馏训练器**
  - **摘要**: 将 SDPO, SDFT 等实验性自蒸馏训练器统一抽取出 `BaseSelfDistillationTrainer`，规范了生命周期管理。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **向在线强化学习架构进化**：TRL 正在迅速从单纯的离线对齐工具转向复杂的在线 RL 基础设施。从 `AsyncGRPO` 的 LoRA 支持（#5610）到引入 `OpenReward Standard` 环境适配器（#5696），项目正在致力于解决 LLM 与真实动态环境交互训练的工程痛点。
2. **对前沿 MoE 和 VLM 架构的极快响应**：无论是针对 Gemma-3 报错的迅速修复（#5644），还是针对 VLM 的 Chunked NLL 显存优化（#5684），TRL 始终保持与 Hugging Face 生态内最新模型架构（多模态、MoE）的紧密对齐。
3. **专注于工程效率与稳定性**：修复 5GB+ 显存泄露（#5700）和静默错误（#5697），以及提供 MFU 计算工具（#5698），表明 TRL 团队不仅关注算法实现，更在死磕大模型分布式训练底层的资源利用率与鲁棒性。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

# Tianshou RL 日报摘要 (2026-05-05)

## 1. 今日速览
过去 24 小时内，Tianshou 仓库整体平稳，无新版本发布、无新增 Issues。唯一动态为社区提交的一个 Bugfix PR，针对自然策略梯度（NPG）算法中的数值稳定性问题提供了修复方案。

## 2. 版本发布
无（近 24 小时内无新版发布）。

## 3. 重点 Issues
无新增或更新的 Issues。

## 4. 关键 PR 进展
- **[#1298 Fix division-by-zero in NPG advantage normalization](https://github.com/thu-ml/tianshou/pull/1298)**
  - **作者**: Pran-Ker | **状态**: `[OPEN]`
  - **技术细节**: 该 PR 修复了 `NPG._preprocess_batch` 阶段的数值异常（NaN）问题。在原实现中，优势函数归一化直接除以 `batch.adv.std()`。当遇到单个样本的 Batch（`std=nan`）或所有优势值完全相等（`std=0`）时，会导致除零错误并产生 NaN 值。
  - **改进方案**: 提出与现有 PPO 实现对齐的防御性编程策略，即通过在分母加入极小值（如 `std + self._eps`）来保证计算的安全性。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
- **算法实现的严谨性验证与持续迭代**：从 PR #1298 可以看出，Tianshou 的社区在持续推动算法底层代码的数值稳定性优化。PPO 中已有 `_eps` 保护机制，而同源的 NPG/TRPO 等算法也在逐步对齐这种工业级的鲁棒性标准。
- **模块化与标准化的代码基线**：作为学术界和工业界广泛使用的 RL 框架，Tianshou 对策略梯度（PG）、近端策略优化（PPO）、自然策略梯度（NPG）等核心算法提供了高度模块化的实现。这种清晰的代码结构使其成为复现论文、验证新 Idea 以及学习 RL 底层机制的优质基座。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# OpenRLHF RL 日报摘要 (2026-05-05)

## 1. 今日速览
过去 24 小时，OpenRLHF 仓库整体趋于稳定，无新版本发布。项目焦点主要集中在解决底层依赖（PyTorch 2.10 与 DeepSpeed 0.18）升级带来的 LoRA 训练兼容性崩溃问题。今日共有 1 条 Issue 更新，2 条关联 PR 被密集提交并关闭，核心贡献者正积极修补参数组解析逻辑。

## 2. 版本发布
无。

## 3. 重点 Issues
- **#1225 [OPEN] Torch 2.10's `LRScheduler._update_lr` breaks LORA**
  - **链接:** [OpenRLHF/OpenRLHF Issue #1225](https://github.com/OpenRLHF/OpenRLHF/issues/1225)
  - **分析:** 该 Issue 报告了在 PyTorch 2.10 环境下使用 LoRA 结合 DeepSpeed 导致的崩溃。根本原因在于依赖版本的联动反应：DeepSpeed 底层会在优化器初始化时剥离空的参数组，而 LR scheduler 在此之前已经记录了初始的参数组数量。当 PyTorch 2.10 严格校验参数长度匹配（`zip(..., strict=...)`）时，触发了报错。这是一个典型的 RLHF 框架与底层加速库版本演进产生冲突的兼容性痛点。

## 4. 关键 PR 进展
围绕 Issue #1225，贡献者提交了两个修正 PR，均已在昨日合并/关闭：
- **#1234 [CLOSED] fix: drop empty optimizer param groups (LoRA + DS 0.18 + torch 2.10)**
  - **链接:** [OpenRLHF/OpenRLHF PR #1234](https://github.com/OpenRLHF/OpenRLHF/pull/1234)
  - **分析:** 修复方案的核心逻辑是在 `get_optimizer_grouped_parameters` 阶段主动丢弃为空的参数组（如无需进行 weight decay 的空组），确保传入优化器的参数组数量与后续 LR scheduler 严格对齐，从而规避新版 PyTorch 的 `strict` 校验机制。
- **#1233 [CLOSED] fix: drop empty optimizer param groups (LoRA + DS 0.18 + torch 2.10)**
  - **链接:** [OpenRLHF/OpenRLHF/OpenRLHF PR #1233](https://github.com/OpenRLHF/OpenRLHF/pull/1233)
  - **分析:** 该 PR 与 #1234 是针对同一问题的平级修复，提交时间完全一致。作者可能在进行跨分支或跨版本的兼容性测试验证，体现了项目在处理核心训练循环代码时的严谨性。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **紧跟底层基建迭代：** 随着 PyTorch 和 DeepSpeed 的快速迭代，RLHF 训练极易遭遇底层 API 严格化带来的“幽灵 Bug”。OpenRLHF 社区能够做到在 Issue 提出 2 周内（04-21 至 05-04）迅速定位并给出修复方案，展现了极强的问题响应和工程兜底能力。
2. **聚焦高价值技术栈组合：** **LoRA + DeepSpeed** 是目前大模型对齐（PPO/DPO 等）中最核心的分布式高性价比训练范式。OpenRLHF 针对这一栈的参数组和优化器机制进行深度介入和修复，确保了其在工业级大规模 RLHF 场景下的可用性和稳定性，是开源 RL 生态中不可替代的基座项目。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

以下是 `verl` 项目 2026-05-05 的强化学习（RL）生态日报摘要：

### 1. 今日速览
- **Issues 更新**：3 条（1 条历史 Issue 关闭，2 条新开 Bug/讨论）
- **PR 更新**：5 条（均为现有重要 Feature PR 的持续推进）
- **新版本发布**：0 个

---

### 2. 版本发布
过去 24 小时内无新增 Release 版本。主分支目前处于多线 Feature 密集开发与合并前的测试阶段。

---

### 3. 重点 Issues
- **[[Fully Async RL] logprobs_mode 不一致问题 #6240](https://github.com/verl-project/verl/issues/6240)** `[OPEN]`
  **摘要**：开发者指出在完全异步 RL 架构中，vLLM 返回的 `logprobs` 可能是经过温度采样处理后的 `processed_logprobs`，而非原始数据，这可能导致 rollouter（推理端）与 trainer（训练端）之间的数据对齐和一致性出现问题。该 Issue 直指异步 RL 框架底层数据流的准确性。
- **[[bug] RLHFDataset filter doc2len 函数计算错误 #6239](https://github.com/verl-project/verl/issues/6239)** `[OPEN]`
  **摘要**：在基于 Qwen3.5-9B 与 GRPO 的 4*8 A800 环境下，开发者发现数据集预处理模块中过滤超长 Prompt 的 `doc2len` 函数存在逻辑缺陷。这可能导致显存溢出（OOM）或训练数据截断异常。
- **[About context parallel in Qwen-3.5 training #5912](https://github.com/verl-project/verl/issues/5912)** `[CLOSED]`
  **摘要**：关于 Qwen-3.5 训练何时支持上下文并行的讨论，该 Issue 已于昨日更新并关闭。

---

### 4. 关键 PR 进展
过去 24 小时的 PR 活动主要集中在**多模态扩展**、**异步强化学习**及**显存/训练优化**三个维度：

- **[feat: add Qwen3-Omni Thinker GSPO support #6238](https://github.com/verl-project/verl/pull/6238)**
  **进展**：新增 Qwen3-Omni 模型的 GSPO 算法支持。修复了 FSDP 环境下的 LoRA 死锁问题（通过优化嵌套 FSDP allgather 策略），并处理了模型的 FSDP 兼容性及权重绑定问题。
- **[Example for Async Multiturn Training on Geo3K #5966](https://github.com/verl-project/verl/pull/5966)**
  **进展**：提供了基于 Qwen3-VL-30B-megatron-npu 在 Geo3K 数据集上进行异步多轮训练的完整示例与评测结果，为社区在复杂多轮对话场景下的 RL 训练提供了参考范式。
- **[[experimental] Build direct vLLM MultiModalInput from preprocessed Qwen tensors #6203](https://github.com/verl-project/verl/pull/6203)**
  **进展**：引入实验性特性，支持将预处理后的 Qwen 图像/视频张量直接转换为 vLLM 的 `MultiModalInput` 格式，绕过冗余处理，有望显著提升多模态 Rollout 阶段的吞吐量。
- **[[rollout] feat: enable Async RL for trtllm rollout #5631](https://github.com/verl-project/verl/pull/5631)**
  **进展**：为 TensorRT-LLM (trtllm) 推理后端打通了完整的异步 RL 功能，并已通过收敛性测试。这将进一步扩展 verl 在高并发、高吞吐推理引擎上的生态支持。
- **[[fsdp] feat: checkpoint input CPU offload for gradient checkpointing #5363](https://github.com/verl-project/verl/pull/5363)**
  **进展**：针对 FSDP 梯度检查点机制，引入了 `CheckpointInputOffload` 功能。在前向传播时将张量 Offload 到 CPU Pinned Memory，反向传播时移回 GPU，进一步压榨显存极限，为跑通超大规模模型训练提供基础。

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注
从近期的 Issue 和 PR 动向可以看出，`verl` 项目正处于从“单一框架”向“泛化全栈 RL 基础设施”演进的关键时期：
1. **全面拥抱多模态（OMNI）与复杂场景**：项目正在密集适配 Qwen 系列最新的多模态及多轮对话模型，解决多模态数据在底层推理引擎中的流式传输瓶颈。
2. **深度攻坚全异步架构**：开发者正在死磕全异步 RL 中的底层数据一致性（如 logprobs 机制），并通过支持 vLLM 和 TensorRT-LLM 等高性能后端，致力于将异步 RL 的吞吐量推向极致。
3. **极致的显存与工程优化**：针对 FSDP 的 LoRA 死锁修复、Checkpoint CPU Offload 等机制，表明项目在应对千亿参数级模型训练时，提供了颗粒度极细的显存与通信管理方案。

`verl` 正在成为大模型后训练阶段，特别是复杂 RLHF/GRPO 场景下，极具技术深度和工程价值的核心开源枢纽。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是为您生成的 Open Instruct 项目 RL 日报摘要（2026-05-05）：

### 1. 今日速览
过去 24 小时，Open Instruct 仓库整体平稳，无新版本发布与新 Issue 产生。项目核心贡献者集中于底层算法实现的校对与修复。今日共有 3 个活跃 PR 更新，核心焦点在于修正 GRPO 算法实现中的底层对齐问题、引入离线策略修正接口以及修复评估框架中的边界异常。此外，项目无新增 Star 或其他显著社区互动。

### 2. 版本发布
- **最新 Releases**：近期无新版本发布。

### 3. 重点 Issues
- **最新动态**：过去 24 小时内无新增或更新的 Issues。

### 4. 关键 PR 进展

- **[PR #1642] 修正 `grpo.py` 在 `qwen3_4b_dapo_math` 基准上的实现对齐**
  - **作者**: finbarrtimbers | **状态**: OPEN
  - **链接**: [allenai/open-instruct PR #1642](https://github.com/allenai/open-instruct/pull/1642)
  - **技术摘要**: 修复了基于 olmo-core / FSDP2 构建的 GRPO 训练路径中的两个严重缺陷：(1) Step-0 阶段的权重同步（weight sync）存在三个独立的同步逻辑错误；(2) 单步重计算阶段执行了跨文档注意力机制，而 vLLM 推理后端默认执行文档内注意力，导致 `val/tis_clipfrac` 指标相比 HF 参考实现发生约 570 倍的异常膨胀。

- **[PR #1650] 实现 IcePop 算法并统一离线策略修正接口**
  - **作者**: finbarrtimbers | **状态**: OPEN
  - **链接**: [allenai/open-instruct PR #1650](https://github.com/allenai/open-instruct/pull/1650)
  - **技术摘要**: 在现有架构基础上新增实现了 IcePop 算法，并以此为切入点，为项目重构并提供了一个统一的离线策略修正接口，有助于后续不同 RLHF/PPO 变体算法的标准化开发。

- **[PR #1655] 修复 IFEvalVerifier 空指令列表导致的除零异常**
  - **作者**: Chessing234 | **状态**: OPEN
  - **链接**: [allenai/open-instruct PR #1655](https://github.com/allenai/open-instruct/pull/1655)
  - **技术摘要**: 修复了奖励验证阶段的一个边界条件 Bug。当约束字典中的 `instruction_id` 为空列表时，累计的 `rewards` 列表也会为空，进而导致程序在执行 `len(rewards)` 除法时抛出 `ZeroDivisionError`。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
Open Instruct 是目前大模型对齐与强化学习微调（RLHF/GRPO）开源生态中工程实践最硬核的仓库之一。从今日的 PR 动态可以看出：
1. **对底层计算逻辑的极致深挖**（PR #1642 暴露出 FSDP2 同步与 vLLM Attention Mask 不一致导致的巨大指标偏差），这为社区在使用 RL 算力集群进行训练时提供了极具价值的避坑指南。
2. **算法泛化能力的持续演进**（PR #1650 引入 off-policy correction 统一接口），说明该项目正在从单纯的“脚本集”向标准化的“RL 训练框架”演进，对于致力于研究 RL 算法在大语言模型上稳定性与收敛性的研究人员而言，是不可多得的参考基座。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

以下是为您生成的 2026-05-05 CleanRL 项目日报摘要：

### 1. 今日速览
过去 24 小时内，CleanRL 项目整体活动平稳。无新版本发布，无新增 Issues。项目目前有 2 个 Pull Requests 发生状态更新，核心聚焦于底层算法 Tensor 内存管理的性能优化以及前沿探索算法的代码实现。

### 2. 版本发布
过去 24 小时内无新版本发布。

### 3. 重点 Issues
过去 24 小时内无新增或更新的 Issues。

### 4. 关键 PR 进展
*   **[#552] [OPEN] perf: avoid tensor memory copy in ppo_atari_envpool**
    *   **作者**: srygaard
    *   **链接**: [vwxyzjn/cleanrl PR #552](https://github.com/vwxyzjn/cleanrl/pull/552)
    *   **技术摘要**: 这是一个底层的性能优化 PR。作者指出当前 `ppo_atari_envpool.py` 管道中，`envs.step()` 返回的数据因调用 `torch.tensor()` 会触发强制性的内存拷贝（instantiate copy）。该 PR 旨在消除这一冗余的显存拷贝操作，预计将减少内存分配开销并提升 PPO 在 Atari 环境下的吞吐量。
*   **[#551] [CLOSED] add curiosity-critic (arXiv:2604.18701 [cs.LG]) implementation**
    *   **作者**: vinbhaskara
    *   **链接**: [vwxyzjn/cleanrl/pull/551](https://github.com/vwxyzjn/cleanrl/pull/551)
    *   **技术摘要**: 该 PR 尝试引入好奇心机制的新变体算法，但已被关闭。这反映了项目维护者对新增算法的代码复杂度和是否符合 CleanRL 核心设计哲学有着严格的审查标准。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
CleanRL 的核心壁垒在于其**极简主义和极致的可读性**。在当前 RL 生态中，主流算法库（如 Stable-Baselines3, Ray RLlib）正变得越来越重度且高度封装，导致研究者难以剥离工程层去验证算法的本质逻辑。

以今日的 PR #552 为例，社区提交的不仅是功能代码，而是针对 PyTorch 底层数据结构的深度优化。这种在单个文件、无复杂依赖的架构下进行的极致性能调优，证明了 CleanRL 不仅适合作为 RL 初学者的学习范本，正越来越多地成为严肃的研究者在进行**算法消融实验**和**底层张量级优化**时的高效基线工具。它在“代码整洁度”与“硬件利用率”之间找到了独特的平衡点。

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL 日报摘要：Gymnasium (2026-05-05)

## 1. 今日速览
过去 24 小时内，Gymnasium 仓库整体保持平缓迭代。无新版本发布，共处理/更新了 1 条 Issue 和 2 条 Pull Request。当前阶段的开发重心明显集中在**核心 API 的静态类型系统完善**以及**经典环境底层动力学的可控性增强**。

## 2. 版本发布
无新版本发布。

## 3. 重点 Issues
- **#1559 [[enhancement] [Proposal] Add fully tunable transition dynamics (including deterministic mode) to LunarLander](https://github.com/Farama-Foundation/Gymnasium/issues/1559)**
  - **作者**: maxanisimov
  - **概况**: 提议为 `LunarLander` 环境增加显式的状态转移动力学控制接口。目标是允许用户通过暴露可选的 `kwargs` 来直接调整或禁用环境内部随机性及物理参数，从而无需为了修改动力学特性而维护自定义的分支或子类。
  - **分析师评论**: 这是一个高价值的技术提案。在 RL 算法研究中，评估策略对环境动力学的鲁棒性（如 Sim-to-Real 迁移）非常关键。原生支持动力学参数的深度调控将极大提升该经典环境的科研复用价值。

## 4. 关键 PR 进展
当前有两项专注于提升代码静态类型覆盖率的 PR 均在昨日更新，由贡献者 jorenham 推进：
- **#1573 [Fix typing errors and add missing annotations in `vector.**`](https://github.com/Farama-Foundation/Gymnasium/pull/1573)**
  - **概况**: 修复了 `gymnasium.vector.*` 及 `gymnasium.vector.utils.*` 模块中的类型错误并补充了缺失的类型注解，目前代码已通过 `pre-commit` 检查。
- **#1575 [Fix typing errors and add missing annotations in `wrappers.vector.*`](https://github.com/Farama-Foundation/Gymnasium/pull/1575)**
  - **概况**: 针对 `gymnasium.wrappers.vector.*` 子模块的静态类型修复。该 PR 重点修复了不正确的 `TypeVar` 使用模式，包括未绑定使用（作为“自由”类型变量）、不正确的型变以及缺失的上界类型参数约束。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管 24 小时内的数据指标并不惊人，但这些更新反映了 Gymnasium 作为 RL 底层基础设施的演进方向：
1. **强化工程下限**：连续针对 `vector` 和 `wrappers` 的静态类型系统进行重构和修复（#1573, #1575）。这不仅能提升大型 RL 项目的代码可维护性，更为现代 IDE 提供了极佳的自动补全和静态检查支持，极大降低了开发者的排错成本。
2. **深化科研上限**：针对 `LunarLander` 动力学可控性的讨论（#1559）表明社区正在推动标准测试环境从“固定基准”向“可编程、可扰动”的实验平台转变。这种底层灵活性的增强，确保了 Gymnasium 在日益复杂的 RL 研究（如元学习、鲁棒性控制和 Domain Randomization）中依然保持不可替代的生态核心地位。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>