# RL 开源生态日报 2026-05-06

> 生成时间: 2026-05-05 22:17 UTC | 覆盖项目: 15 个

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
2026年5月6日的强化学习（RL）开源生态呈现出明显的“分层演化”特征。以 LLM 后训练为目标的现代 RLHF 框架（TRL, verl, AReaL, slime, OpenInstruct）正处于高度活跃的底层重构与工程攻坚期；而专注于传统 RL 算法与环境的基线库（CleanRL, SB3）则进入稳定维护期。整个生态的核心叙事已完全从基础的算法实现，转移到**超大规模 MoE 与多模态架构的适配**、**异构与分布式算力的极致压榨**，以及**底层训练框架可观测性与稳定性的提升**。

## 各项目活跃度对比

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 1 | 23 | 0 | 底层架构大重构，发力多模态与 MoE 适配 |
| **verl** | 2 | 6 | 0 | 攻坚推理训练解耦与异构硬件 (NPU) 支持 |
| **AReaL** | 3 | 4 | 0 | 紧跟上游核心依赖大版本升级，完善分布式容灾 |
| **slime** | 5 | 2 | 0 | 攻坚 400B+ 超大规模 MoE 训练稳定性与显存优化 |
| **OpenInstruct** | 0 | 4 | 0 | 修复底层严重 Attention Bug，深化可观测性 |
| **CleanRL** | 0 | 1 | 0 | 深入 PyTorch 底层张量级内存管理优化 |
| **SB3** | 0 | 1 | 0 | 完善传统连续控制策略的边界约束机制 |
| **其他项目** | 0 | 0 | 0 | 过去 24 小时无实质代码活动 |

## 共同关注的研究与工程方向

**研究侧信号：**
1. **克服 On-policy 瓶颈与奖励稀疏性**：OpenInstruct 引入 IcePop 统一离线策略修正接口应对分布偏移；TRL 实现了 Self-Distillation Zero (SD-Zero) 将二值奖励转化为密集监督，这些都是为了提升大模型 RL 训练的数据利用效率。
2. **知识蒸馏 (KD) 与 RL 的结合**：slime 引入了基于 KL 散度的离线/在线知识蒸馏示例，这标志着 RL 框架正在将模型压缩与后训练对齐进行深度融合。

**工程/基础设施侧信号：**
1. **多模态 (VLM) 与 MoE 架构的全面穿透**：从 TRL 的 Chunked NLL 显存优化，到 verl 的多模态张量直接注入，再到 AReaL 的 Megatron 引擎支持 Qwen3-VL dense 训练，底层框架已全面具备支持前沿 VLM/MoE 的能力。
2. **推理引擎的深度解耦与异构加速**：verl 和 AReaL 均在 Rollout 阶段下足功夫。verl 实现了 vLLM 的 Prefill-Decode 分离并适配昇腾 NPU；AReaL 则引入了 Sglang Eagle 投机采样及专门针对 MoE 的 Rollout Routing Replay (R3) 机制，以解决异步训练的路由不一致问题。
3. **大规模分布式系统的容灾与可观测性**：AReaL 开始构建 Agent 服务的自动扩缩容和路由状态恢复机制；OpenInstruct 则细化了 GRPO 训练的 Wall-time 均值指标和过滤比例监控。长时、大规模训练的鲁棒性成为核心发力点。

## 差异化定位分析

1. **TRL：最广泛的社区覆盖与上层建筑收拢**。作为 Hugging Face 生态的核心，TRL 当前的主要任务是将前期略显混乱的各类算法实现进行架构统一（如 KTO 对齐 DPO），并加速整合前沿论文算法，是进行快速实验和中小规模训练的首选。
2. **verl & AReaL & slime：超大规模集群的硬核攻坚利器**。这三个项目直面千卡级工业级训练痛点。verl 极其注重推理引擎的压榨与异构扩展；AReaL 深入 Megatron 等底层做路由与投机解码改造；slime 则在 Colocate 和 Offload 等极致显存管理模式上死磕。它们定位于是构建 100B+ 模型大规模 RLHF 底层基础设施的基石。
3. **OpenRLHF & OpenInstruct：算法深度与工程 Bug 的排雷器**。OpenInstruct 专注于 GRPO 及变体的深度优化，其发现的 FSDP2 与 vLLM 的文档注意力机制错位，为整个 RLHF 工程社区提供了宝贵的避坑指南。
4. **CleanRL & SB3：经典算法的极致打磨与教学基线**。在 LLM RLHF 喧嚣之下，这两个项目依然坚持对传统 RL 算法（如 PPO, A2C）进行底层性能和策略表达机制的精细优化，保持了极高的代码可读性和学术基线价值。

## 社区热度与成熟度

1. TRL 以单日 23 个 PR 的更新量展现出极其旺盛的开源社区生命力，其核心维护者正在高效推进代码收敛。
2. verl、AReaL 和 slime 展现出典型的“工业级/准工业级”成熟度特征：不再盲目追求功能叠加，而是针对极其具体的生产环境 Bug（如 160 卡 H20 乱码、RM 组装逻辑、服务重启状态恢复）进行深度优化。
3. 大量项目（如 OpenRLHF、Gymnasium、Tianshou 等）在过去 24 小时内无代码活动，这反映了当前 RL 开源生态已度过野蛮生长期，主流框架的 API 和底层逻辑已趋于高度稳定，进入以“天”甚至“周”为维度的沉淀迭代期。

## 值得关注的趋势信号

1. **RLHF 底层基础设施正全面走向“推理/训练解耦”与“异构计算”**：无论是 vLLM Prefill-Decode 的分离式架构，还是昇腾 NPU 对 Liger-Kernel 的支持，都表明大模型 RL 训练已经打破单纯的显存/算力枷锁，向通信级和异构硬件级的极致压榨演进。
2. **从文本走向多模态的原生 RL 训练闭环**：过去通常使用文本近似处理多模态，而今日 verl 直接组装 vLLM MultiModalInput、AReaL 支持 Qwen3-VL GRPO 等迹象表明，支持图像/视频的原生多模态 RLHF 已从概念验证步入底层框架的实质性落地阶段。
3. **MoE 模型特有的 RL 训练“暗坑”开始暴露并被解决**：例如 AReaL 提出的异步训练下专家路由不一致问题（并推出 R3 机制），以及超大参数模型（如 Qwen3.5-397B）的分布式乱码问题。这说明开源社区正在攻克几百亿参数 MoE 后训练的真实工程壁垒。

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

# RL 开源生态日报：slime 项目跟踪 (2026-05-06)

## 1. 今日速览
过去 24 小时，slime（[github.com/THUDM/slime](https://github.com/THUDM/slime)）社区保持活跃。项目新增 **0** 个版本发布，更新了 **5** 条 Issue（3 问询，1 功能请求，1 Bug 修复），以及 **2** 条 Pull Request。当前社区焦点集中在**超大规模 MoE 模型（Qwen3.5-397B）的工程适配**、**Colocate 模式下的 Checkpoint 机制修复**以及**多模态/蒸馏等前沿训练范式的支持**。

## 2. 版本发布
今日无新版本发布。

## 3. 重点 Issues
- **超大规模 MoE 模型 Rollout 乱码问题**：开发者报告在 160 卡 H20 集群（96 Actor，64 Rollout）全异步训练 `Qwen3.5-397B-A17B` 时，训练正常但生成乱码。该问题揭示了在超大参数量下分布式推理与训练解耦可能存在的显存或通信对齐 Bug。
  [查看 Issue #1852](https://github.com/THUDM/slime/issues/1852)
- **Colocate 模式 Checkpoint 保存崩溃**：在使用 `--colocate` 和 `--save-interval` 进行 GRPO 训练时，触发 `CUDA error: invalid argument`。该问题源于 `#1856` 合并后的回归，目前已有开发者认领并提交 PR。
  [查看 Issue #1886](https://github.com/THUDM/slime/issues/1886)
- **社区高频需求 LoRA 支持**：关于集成 LoRA 以降低微调显存需求的讨论（👍 17），目前仍为 Open 状态，是社区高优期待的功能。
  [查看 Issue #416](https://github.com/THUDM/slime/issues/416)
- **VLM 模型转换支持**：用户提出针对 `Qwen3-VL` 等多模态模型缺乏从 HuggingFace 到 Megatron 格式的转换脚本与配置。
  [查看 Issue #1863](https://github.com/THUDM/slime/issues/1863)

## 4. 关键 PR 进展
- **[Bugfix] 修复 Offload 训练下的 Checkpoint 保存失败**：针对上述 Issue #1886，贡献者提交了 `save_model()` 方法的修复，增加了 `offload_train` 状态下的 resume/pause 逻辑，解决了因显存卸载与保存状态冲突导致的 CUDA 异常。
  [查看 PR #1888](https://github.com/THUDM/slime/pull/1888)
- **[Feature] 增加离线/在线知识蒸馏 (KD) 示例**：引入基于外部 Teacher 服务器的在线 KD 和基于 JSONL 的离线 KD 流程。实现了 Top-K Forward KL 及 Sampled KL Loss，并在 Qwen3-4B 到 1.7B 的模型压缩上进行了验证，极大丰富了 slime 的算法生态。
  [查看 PR #1654](https://github.com/THUDM/slime/pull/1654)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
1. **攻坚超大规模 MoE 训练痛点**：从 Issue #1852 可以看出，项目正在被直接用于千卡级别、400B+ 参数量级 MoE（如 Qwen3.5）的后训练。其暴露和解决的 Actor/Rollout 多节点异步通信问题，是业界大模型 RLHF 落地的核心工程挑战。
2. **算法范式的快速迭代**：项目不仅支持基础的 GRPO 训练，社区还在积极贡献**知识蒸馏（KD）**等进阶功能（PR #1654），这对于降低大模型推理成本及 RL 训练奖励模型具有极高实用价值。
3. **深入的底层显存与显存管理优化**：开发者对 `--colocate`（模型权重共用）与 `offload_train`（CPU Offload）等极致压榨显存特性的持续修复，证明该项目在资源利用率上追求极致，非常适合算力受限或追求极高吞吐比的 RL 团队跟进。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL 强化学习开源生态日报 (2026-05-06)

## 1. 今日速览
过去 24 小时，AReaL 仓库共处理了 **3 条 Issues** 和 **4 条 Pull Requests**。当前项目重点聚焦于底层核心依赖的大版本升级以及推理/训练引擎的深度优化，特别是针对 MoE（混合专家）模型和视觉语言模型（VLM）的 RL 训练支持。

## 2. 版本发布
- **最新 Releases**: 无。
- **版本动态**: 尽管过去 24 小时内无新版本发布，但根据 PR 迹象（[#1206](https://github.com/inclusionAI/AReaL/pull/1206)），项目正处于 **April 2026 发布周期**的密集开发和底层重构阶段。

## 3. 重点 Issues
项目近期的 Issue 集中在提升分布式 RL 基础设施的鲁棒性及路线图的社区同步。

- **Q1 路线图追踪及社区贡献呼吁** | [#907](https://github.com/inclusionAI/AReaL/issues/907)
  - **标签**: `help wanted` / `call-for-contribution` / `roadmap`
  - **简述**: 该 Issue 详细规划了 AReaL 截至 2026 年 4 月 30 日的重大增强计划。项目方将其分为进行中和待启动两类，明确指出了需要外部开发者参与贡献的高影响力领域。

- **Agent 服务健康监控的自动恢复机制** | [#1211](https://github.com/inclusionAI/AReaL/issues/1211)
  - **简述**: 提议为 `agent_service` 控制器引入“自动扩缩容”机制（`scale_down` + `scale_up`），以应对持续性故障，保障 RL 任务的长时稳定运行。完全兼容现有 API。

- **Router 服务重启后的状态恢复** | [#1212](https://github.com/inclusionAI/AReaL/issues/1212)
  - **简述**: 当前 Router 的路由状态完全存储在内存中，一旦重启将彻底丢失。该 Issue 旨在引入状态恢复机制，确保重启后分布式训练网络拓扑的快速重建。

## 4. 关键 PR 进展
本次 PR 更新涉及引擎架构升级、解码优化及多模态支持。

- **[high priority] 核心依赖大版本升级** | [#1206](https://github.com/inclusionAI/AReaL/pull/1206)
  - **简述**: 针对 April 2026 发布周期的重点 PR。将 `megatron-core`、`sglang`、`vllm` 及 `transformers` 升级至最新大版本，并修复了相关底层 API breaking changes 带来的内部代码适配问题。

- **[WIP] 面向 MoE 模型的 Rollout Routing Replay (R3)** | [#1207](https://github.com/inclusionAI/AReaL/pull/1207)
  - **简述**: 解决异步 RL 训练中“推理-训练路由不一致”导致的训练不稳定问题。R3 机制通过记录推理引擎的专家路由索引，并在训练阶段进行 replay，确保了 MoE 模型（如 DeepSeek 系列）在 RLHF 中的对齐稳定性。

- **[CLOSED] Megatron 引擎新增 Qwen3-VL dense 支持** | [#1299](https://github.com/inclusionAI/AReaL/pull/1299)
  - **简述**: 在 Megatron 引擎中通过 `mbridge` 接入了 Qwen3-VL dense 模型的支持，正式打通了基于 Megatron 后端的 Qwen3-VL 多模态大模型 GRPO/PPO 训练路径。

- **[WIP] 接入 Sglang Eagle 算法支持投机采样** | [#1176](https://github.com/inclusionAI/AReaL/pull/1176)
  - **简述**: 引入基于 Sglang Eagle 算法的 Speculative Decoding（投机解码），旨在显著提升 RL 训练中 Rollout 阶段的 Token 生成速度，从而加速整个 RL 迭代循环。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **深入大模型底层架构**: AReaL 不是简单的算法封装，而是深入到 `Megatron` 和 `vLLM` 底层进行深度改造（如 R3 路由回放机制和投机解码集成），这对于解决超大规模 LLM（尤其是 MoE 和多模态架构）在复杂 RL 场景下的底层性能瓶颈至关重要。
2. **生产级分布式系统设计**: Issue #1211 和 #1212 揭示了项目正在攻克分布式 RL 训练集群的“自动容错”与“状态恢复”难题。这种对系统鲁棒性的投入，表明 AReaL 正在向工业级、可全天候运行的大规模训练平台演进。
3. **活跃的迭代节奏与高价值开源协作**: 项目紧贴当前最前沿的模型生态（Qwen3-VL）和推理框架进行同步升级（PR #1206），路线图清晰且保持开放，为希望参与底层大模型 RL 基础设施建设的开发者提供了极佳的切入点。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL 开源生态 RL 日报 (2026-05-06)

## 1. 今日速览
过去 24 小时内，TRL 仓库保持高度活跃，共有 **23 个 PR** 更新（主要集中在底层训练器重构、多模态支持和新算法实验），以及 **1 个 Issue** 追踪。虽然今日无新版本发布，但底层代码的重构和性能优化（如 MFU 计算、Chunked NLL loss）为后续大版本更新打下坚实基础。

---

## 2. 版本发布
今日无新版本发布。

---

## 3. 重点 Issues
- **#5471 [OPEN] 追踪：为主流模型家族添加 `&#123;&#37; generation &#37;&#125;` 聊天模板**
  - **链接**: [huggingface/trl Issue #5471](https://github.com/huggingface/trl/issues/5471)
  - **简介**: 为了在 SFT 中正确使用 `assistant_only_loss=True`，模型的 chat template 必须包含 `&#123;&#37; generation &#37;&#125;` / `&#123;&#37; endgeneration &#37;&#125;` 标记以生成正确的掩码。鉴于目前原生支持此标记的模型极少，该 Issue 旨在推动 TRL 直接内置并提供针对主流模型的训练用聊天模板。

---

## 4. 关键 PR 进展
今日的 PR 动态主要分为三个核心方向：**KTO 训练器深度重构**、**多模态与性能优化**、以及**新 RL 算法与生态扩展**。

### 🛠️ 架构重构：KTO 训练器对齐 DPO
维护者 @albertvillanova 提交了一系列 PR，将 KTO 训练器的底层逻辑与 DPO 训练器进行严格对齐，大幅提升了代码一致性和可维护性：
- **#5705 [CLOSED]**: 统一使用 `_metrics` 属性管理训练和评估指标。
  - 链接: [huggingface/trl PR #5705](https://github.com/huggingface/trl/pull/5705)
- **#5704 [CLOSED]**: 重组训练参数（Group training arguments），优化 KL 散度计算的初始化逻辑。
  - 链接: [huggingface/trl PR #5704](https://github.com/huggingface/trl/pull/5704)
- **#5703 [CLOSED]**: 简化 `max_length` 初始化逻辑。
  - 链接: [huggingface/trl PR #5703](https://github.com/huggingface/trl/pull/5703)
- **#5702 [CLOSED]** & **#5701 [CLOSED]**: 清理冗余的 `PreTrainedModel` 导入，并取消了对 Encoder-Decoder 模型的强制限制。
  - 链接: [huggingface/trl PR #5702](https://github.com/huggingface/trl/pull/5702) | [huggingface/trl PR #5701](https://github.com/huggingface/trl/pull/5701)

### ⚡ 性能与多模态 (VLM) 支持
- **#5698 [OPEN] 引入 MFU (Model FLOPs Utilization) 辅助函数**: 针对因果 LM 添加了计算 FLOPs 的工具，支持 Dense 模型及 MoE 架构（Mixtral, Qwen3-MoE, DeepSeek-V2），为 RL 训练提供更精准的算力瓶颈分析。
  - 链接: [huggingface/trl PR #5698](https://github.com/huggingface/trl/pull/5698)
- **#5684 [OPEN] 在 SFT 中启用 Chunked NLL Loss 支持 VLM**: 将分块 NLL 计算路径扩展到多模态/视觉语言模型（VLM）和 MoE 辅助损失处理中，以优化显存占用。
  - 链接: [huggingface/trl PR #5684](https://github.com/huggingface/trl/pull/5684)
- **#5638 [OPEN] / #5707 [OPEN] / #5706 [OPEN] Tiny 模型重构与配置对齐**: 维护者 @qgallouedec 重构了微型测试模型的生成脚本，并分别将 Glm4Moe、Cohere 和 Cohere2 的测试配置与真实大模型对齐，提升 CI 测试的可靠性。
  - 链接: [huggingface/trl PR #5638](https://github.com/huggingface/trl/pull/5638) | [huggingface/trl PR #5707](https://github.com/huggingface/trl/pull/5707) | [huggingface/trl PR #5706](https://github.com/huggingface/trl/pull/5706)

### 🧪 实验性算法与环境交互
- **#5609 [OPEN] Self-Distillation Zero (SD-Zero) 算法实现**: 实现了基于自我修正将二值奖励转化为密集监督的 RL 训练新范式。
  - 链接: [huggingface/trl PR #5609](https://github.com/huggingface/trl/pull/5609)
- **#5696 [CLOSED] 增加 OpenReward Standard (ORS) 环境适配器**: 允许 TRL 的主流 RL 训练器（如 `GRPOTrainer`, `RLOOTrainer`）即插即用任何支持 ORS 协议的环境。
  - 链接: [huggingface/trl PR #5696](https://github.com/huggingface/trl/pull/5696)

---

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **向 MoE 与多模态的深度进化**：从近期的 PR 趋势可以看出，TRL 正在迅速补齐针对 Mixture-of-Experts (MoE) 和 Vision-Language Models (VLM) 的适配与显存优化（如 Chunked NLL），这紧贴了当前 LLM 从单一文本 Dense 模型向多模态与稀疏架构演进的工程刚需。
2. **底层架构的工程化收拢**：KTO 对齐 DPO 的系列重构表明，TRL 正在摆脱早期各种训练算法代码“各自为战”的局面，通过提取公共逻辑和统一接口（如 `_metrics`），降低社区后续贡献新 RL 算法的门槛。
3. **闭环生态与前沿探索并重**：一方面，TRL 通过支持 OpenReward Standard 等外部协议，打破环境交互的壁垒；另一方面，像 Self-Distillation Zero 这类将稀疏/二值奖励转化为密集信号的论文级实现被迅速合并，保证了 TRL 在 LLM 对齐和后训练技术前沿的生命力。

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

以下是为您生成的 verl 项目 2026-05-06 强化学习（RL）生态日报摘要：

# verl 项目日报 - 2026年05月06日

## 1. 今日速览
过去 24 小时，verl 生态呈现高活跃度。项目新增/更新 **6 个 Pull Requests**，无新版本发布，处理了 **2 个 Issues**。今日技术动向高度聚焦于**推理引擎解耦与异构硬件支持**：社区接连提交了基于 vLLM 和 SGLang 的 Prefill-Decode 分离式 Rollout 架构，以及针对昇腾 NPU 的 Liger-Kernel 适配，标志着 verl 在超大规模 RLHF 训练的底层性能优化和多模态硬件扩展上持续迈进。

## 2. 版本发布
* **最新 Releases**: 无

## 3. 重点 Issues
今日有两项关于 Qwen 系列模型的集成问题讨论，反映出社区在多模态及序列并行方面的最新排查进展。

* **[OPEN] 训练 Qwen3.5 开启序列并行 的维度对齐报错** ([#5762](https://github.com/verl-project/verl/Issue/5762))
  *详情*: 当 `sp=2` 时出现张量维度不匹配的 `RuntimeError`，`sp=1` 下工作正常。作者使用了自定义脚本，目前社区正在追踪该兼容性缺陷。
* **[CLOSED] Qwen3-vl 训练失败问题** ([#4483](https://github.com/verl/verl/Issue/4483))
  *详情*: 在使用 SFT 脚本训练 qwen3-vl 时遭遇的报错问题，经 4 轮讨论后已于昨日成功解决并关闭。

## 4. 关键 PR 进展
今日的 PR 质量极高，涵盖了从底层算子、推理加速到奖励机制重构的多个核心模块。

* **[rollout] vLLM Prefill-Decode 解耦式 Rollout (NIXL + Mooncake)** ([#6243](https://github.com/verl-project/verl/PR/6243))
  *亮点*: 基于此前的 SGLang 解耦设计，引入了基于 NIXL 和 Mooncake 的 vLLM Prefill-Decode 分离架构。这能显著降低 RLHF 生成阶段的显存占用并提升吞吐上限。
* **[perf, hardware] 昇腾 NPU 支持 Liger-Kernel** ([#6244](https://github.com/verl-project/verl/PR/6244))
  *亮点*: 将 `Liger-Kernel` 扩展至 Ascend NPU 硬件，并提供了 Qwen3-8B 在 GSM8K 上的 SFT 验证示例，进一步打破了 RL 训练的 GPU 算力瓶颈。
* **[rollout] 启用 TensorRT-LLM (trtllm) 的异步 RL** ([#5631](https://github.com/verl-project/verl/PR/5631))
  *亮点*: 依赖 NVIDIA 上游已合并的 PR，为 trtllm rollout 环节打通了端到端的异步 RL 功能，并已通过收敛性测试。
* **[experimental] 绕过引擎内处理：直接构建 vLLM 多模态输入** ([#6245](https://github.com/verl-project/verl/PR/6245))
  *亮点*: 针对 Qwen 视频/图像张量，新增 opt-in 桥接机制，直接组装 vLLM 的 `MultiModalInput` 协议下发至 rollout server，省去了引擎内部的 MM processor 耗时。
* **[veomni] 剔除 Monkey Patch，使用 VeOmni 原生 return_log_probs** ([#6184](https://github.com/verl-project/verl/PR/6184))
  *亮点*: 修复了使用融合算子时缺少 `log_probs` 属性导致的崩溃，使代码转向更加健壮的原生 API 路径。
* **[reward] 重构奖励循环中的 RM Score 组装逻辑** ([#6242](https://github.com/verl-project/verl/PR/6242))
  *亮点*: 提取了 `assemble_rm_scores` 作为可覆写的 Hook，方便下游多模态任务（图/文/视频）灵活定制 Reward Model 的组装逻辑，大幅提升了框架扩展性。

## 5. 为什么这个项目值得在当前 RL 生态继续关注

1. **极致的 Rollout 推理压榨**：从 TensorRT-LLM 的异步 RL 支持（#5631），到全面铺开的 Prefill-Decode 分离式架构（#6243），verl 正在将大模型 RL 训练中的推理环节推向硬件级异构与通信级解耦，这是突破 RLHF 显存墙的关键路径。
2. **多模态与定制化 RL 的基础设施化**：无论是剥离出可复用的 RM 组装 Hook（#6242），还是打通直接注入 vLLM 的多模态张量流（#6245），verl 正从单纯的文本 RL 框架，演变为能够优雅承载数据流复杂的图像/视频 RLHF 的底层引擎。
3. **打破垄断的硬件生态**：NPU 适配 Liger-Kernel（#6244）等工作的合并，表明 verl 社区对国产算力及其他异构芯片拥有极强的包容和落地意愿，为 RL 从业者应对算力焦虑提供了可行的 Plan B。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

以下是为您生成的 OpenInstruct 项目 RL 日报摘要（2026-05-06）：

### 1. 今日速览
过去 24 小时，[allenai/open-instruct](https://github.com/allenai/open-instruct) 仓库无新增 Issues、无新版本发布，但产生了 **4 项关键 Pull Requests 更新**。整体活动高度集中于核心算法优化、训练监控指标的完善以及底层训练框架（`grpo.py`）的严重缺陷修复。当前阶段，项目正处于对 GRPO（Group Relative Policy Optimization）及离线策略强化学习底层机制与可观测性的深度打磨期。

### 2. 版本发布
过去 24 小时内**无新版本发布**。

### 3. 重点 Issues
过去 24 小时内**无新增或更新的 Issues**。结合高频的 PR 提交记录来看，项目核心贡献者当前主要通过 PR 直接进行功能迭代和缺陷修复，尚未发酵出需要社区广泛讨论的开放式问题。

### 4. 关键 PR 进展
当前活跃的 4 项 PR 均由核心开发者 `finbarrtimbers` 推进，技术含量极高，直击大模型 RLHF 训练中的痛点：

*   **重构 GRPO 核心训练逻辑并修复灾难性 Bug**
    *   **PR**：[#1642 Now, `grpo.py` matches `grpo_fast.py` on `qwen3_4b_dapo_math{,_oc}.sh`](https://github.com/allenai/open-instruct/pull/1642)
    *   **进展**：修复了 FSDP2 GRPO 路径（`grpo.py`）中的两个严重问题：(1) Step-0 阶段的权重同步存在三种不同维度的失效；(2) 每步重计算 logprob 时，vLLM 运行的是内部文档注意力，而训练代码运行的是跨文档注意力，导致 `val/tis_clipfrac` 相比 HF 参考基准异常膨胀约 570 倍。
*   **完善训练耗时与过滤监控指标**
    *   **PR**：[#1656 Add time/per_group_wall_time metric](https://github.com/allenai/open-instruct/pull/1656)
    *   **进展**：引入了 `time/per_group_wall_time` 指标（计算批次中各组生成挂钟时间的**平均值**）。这解决了现有指标 `time/getting_response` 取**最大值**导致在大量并发请求下，指标被尾部延迟严重夸大的问题。
    *   **PR**：[#1657 Log filtered prompts at INFO + add batch/filtered_prompts_pct](https://github.com/allenai/open-instruct/pull/1657)
    *   **进展**：将 `accumulate_inference_batches` 中的过滤日志级别从 DEBUG 提升至 INFO，并新增了 `batch/filtered_prompts_pct` 指标。此举使得开发者无需深入调试，即可直接通过常规日志快速定位 Active Sampling 的失败模式（如零奖励/已解决/非零比例失衡）。
*   **统一离线策略修正接口**
    *   **PR**：[#1650 Implements IcePop and creates a unified interface for off-policy correction](https://github.com/allenai/open-instruct/pull/1650)
    *   **进展**：引入了 IcePop 算法，并致力于为 off-policy correction（离线策略修正）建立统一的底层接口。这对于处理 RL 训练中的分布偏移至关重要。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
基于今日的代码活动，OpenInstruct 在当前 RL 开源生态中具有不可替代的价值：
1. **直面大模型 RL 底层工程痛点**：[#1642](https://github.com/allenai/open-instruct/pull/1642) 暴露并修复了 FSDP2 并行与 vLLM 推理引擎在 Attention 机制上的严重对齐问题。这类深度整合中的“隐性 Bug”是业内复现大模型 RL 训练经常失败但极少被公开讨论的壁垒，该 PR 为社区提供了极佳的排雷参考。
2. **精细化的 RL 可观测性**：在处理长思维链或大规模并发采样时，尾部延迟和无效样本过滤是制约训练效率的核心瓶颈。引入更真实的 Wall-time 均值指标（[#1656](https://github.com/allenai/open-instruct/pull/1656)）和过滤比例监控（[#1657](https://github.com/allenai/open-instruct/pull/1657)），标志着该项目在 RL 训练的可观测性上正走向工业级成熟。
3. **算法层的前瞻性布局**：针对策略梯度方法（如 GRPO/PPO）固有的 on-policy 效率低下问题，项目正在积极推进离线策略修正（Off-policy correction，如 IcePop）的统一接口（[#1650](https://github.com/allenai/open-instruct/pull/1650)），这是迈向下一代高效大模型 RL 训练框架的关键路径。

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

以下是为您生成的 2026年5月6日 CleanRL 项目日报摘要：

### 1. 今日速览
过去 24 小时内，CleanRL 仓库整体保持平稳。无新增 Issues 和 Releases，项目活跃度主要集中在代码性能优化方向。目前有 1 个处于 `OPEN` 状态的性能优化类 PR 正在推进。

### 2. 版本发布
- **最新 Releases**：无。
- **状态**：项目目前未发布新版本，主分支代码库保持稳定。

### 3. 重点 Issues
- **最新 Issues**：无（过去 24 小时未产生新的技术讨论或 Bug 反馈）。

### 4. 关键 PR 进展
- **[#552 perf: avoid tensor memory copy in ppo_atari_envpool](https://github.com/vwxyzjn/cleanrl/pull/552)** `[OPEN]`
  - **作者**：srygaard
  - **更新时间**：2026-05-05
  - **核心内容**：该 PR 旨在优化 `ppo_atari_envpool` 流水线中的内存管理机制。作者指出，当前代码在处理 `envs.step()` 返回的数据时，由于直接使用了 `torch.tensor()` 进行数据实例化，导致了不必要的底层 Tensor 内存拷贝（Memory Copy）。通过重构数据转换逻辑以避免隐式拷贝，该 PR 能够有效降低训练时的显存/内存开销，并潜在提升数据吞吐量。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
CleanRL 依然是强化学习底层实现优化的标杆项目。以 PR #552 为例，当业界其他高层级 RL 库（如 Stable-Baselines3、Ray RLlib）越来越侧重于复杂的抽象封装和分布式调度时，CleanRL 凭借其“单文件、无黑盒”的架构设计，使得开发者能够极其敏锐地定位到诸如 `torch.tensor()` 实例化引发内存拷贝这样细粒度的性能瓶颈。对于追求极致吞吐量的 RL 工程师和希望深入理解 RL 算法与 PyTorch 底层张量机制交互的研究人员而言，CleanRL 始终是不可或缺的核心参考基座。

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

# RL 日报摘要：Stable Baselines3
**数据统计周期**：2026-05-05 至 2026-05-06  
**数据来源**：[DLR-RM/stable-baselines3](https://github.com/DLR-RM/stable-baselines3)

---

### 1. 今日速览
过去 24 小时内，Stable Baselines3 仓库整体活跃度较为平缓，无新增 Issues 和 Releases。项目维护重心集中于底层算法特性的优化与扩展，新增了 1 个与连续动作空间策略输出约束相关的 Pull Request。

### 2. 版本发布
- **最新 Releases**：无。

### 3. 重点 Issues
- **最新动态**：过去 24 小时内无新增或更新的 Issues。社区反馈与排期目前处于静默期。

### 4. 关键 PR 进展
- **[#2249 Add opt-in tanh squashing for DiagGaussianDistribution mean actions](https://github.com/DLR-RM/stable-baselines3/pull/2249)** [OPEN]
  - **作者**：cgliner
  - **创建时间**：2026-05-05
  - **技术摘要**：该 PR 为 A2C 和 PPO 算法中的对角高斯分布（`DiagGaussianDistribution`）引入了可选的均值动作压缩机制。用户可通过配置 `policy_kwargs=dict(squash_mean_actions=True)` 启用该功能。启用后，高斯策略的均值动作网络将被 `nn.Tanh()` 包装，从而将连续动作的输出严格约束在 $[-1, 1]$ 的有界区间内。这一特性对于需要严格边界控制的连续控制任务（如机器人操纵等）极为关键。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
Stable Baselines3 (SB3) 始终是强化学习应用层最核心的基线库之一。尽管其核心 API 已趋于高度稳定，日常 Issue 活跃度较低，但类似 PR #2249 的底层改进依然具有重要价值：
1. **工程与算法的深度结合**：在连续动作空间中，直接输出无界的高斯均值有时会导致训练不稳定或动作越界。引入 Opt-in 的 `Tanh` 压缩机制，不仅保留了传统高斯策略的随机性探索能力，还为需要 bounded action 的工程落地提供了更标准、规范的无缝支持（无需在环境侧做额外的动作裁剪与重缩放）。
2. **可靠的基线参考**：随着 RL 生态向更复杂的架构（如 Decision Transformer、扩散策略等）演进，SB3 提供的这种严谨、模块化且高度可复现的传统 RL 基线，依然是验证新算法有效性和进行 Benchmarking 不可或缺的基石。

</details>