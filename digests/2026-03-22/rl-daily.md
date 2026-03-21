# RL 开源生态日报 2026-03-22

> 生成时间: 2026-03-21 22:01 UTC | 覆盖项目: 15 个

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

2026-03-22 的 RL 开源生态呈现出明显的**分层活跃**特征。
1.  **第一梯队（高活跃）**：**verl**、**TRL**、**slime**、**AReaL** 和 **Open-Instruct** 均有实质性代码推进，核心战场集中在 **LLM Post-training**（特别是多模态 RLHF 与异步架构）。
2.  **第二梯队（维护/低活跃）**：**ROLL** 虽无 Issue 讨论，但提交了关键的架构升级 PR；**Gymnasium** 仅有个位数的文档与 Bug 修复。
3.  **静默期**：**CleanRL**、**OpenRLHF**、**Stable Baselines3** 等知名项目在过去 24 小时内无显性活动，显示出当前开源资源正高度向 LLM+RL 聚拢。

## 各项目活跃度对比

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 9 | 33 | 0 | **极速适配** Qwen3.5/MoE，异构计算(NPU)与 On-Policy Distillation 成为新重点。 |
| **TRL** | 2+ | 6+ | 1 | **里程碑版本** v1.0.0rc1 发布，引入 VESPO 算法，重点解决异步 GRPO 的稳定性。 |
| **slime** | 3 | 3+ | 0 | **深耕 VLM**，解决 GLM4V 训练稳定性与 SGLang 指标监控，强化长上下文能力。 |
| **AReaL** | 2 | 4 | 0 | **基础设施现代化**，修复 VLM RPC 传输瓶颈，支持 IPv6 与 Megatron-Bridge。 |
| **Open-Instruct** | 0 | 4 | 0 | **鲁棒性修复**，修正 SFT 序列并行 Bug，补齐 PPO Value Model 支持。 |
| **ROLL** | 0 | 2 | 0 | **架构前瞻**，探索 Multi-LoRA 并发与 GPU 分时复用，适配国产 CoreX 硬件。 |
| **Gymnasium** | 1 | 1 | 0 | **常规维护**，修复 Ant-v5 终止条件，完善 MuJoCo 自定义环境文档。 |
| *Others* | - | - | - | CleanRL, OpenRLHF, SB3 等无动态。 |

## 共同关注的研究与工程方向

### 1. 研究侧信号：从 PPO/DPO 迈向复杂优化
*   **新优化算法落地**：TRL 发布 **VESPO**（变分软策略优化）并引入 **SDPO**（自蒸馏），Open-Instruct 也在加紧补齐带 Value Model 的 **PPO**。这表明社区不再满足于 GRPO/DPO 的"有无"，开始追求更高方差减少比的优化器。
*   **多模态 RLHF（VLM）**：Slime 和 AReaL 均在解决 VLM（如 GLM4V, Qwen2.5-VL）训练中的权重同步与数据序列化难题，VLM-RL 已进入工程深水区。
*   **策略蒸馏**：Verl 合并 On-Policy Distillation，利用 vLLM 作为 Teacher 模型，表明"强模型指导"正成为 Post-training 的标准动作。

### 2. 工程/基础设施侧信号：异步、异构与并行
*   **异步架构成熟化**：TRL 和 Open-Instruct 均在致力解决 Async Rollout 中的"僵尸任务"和权重同步失败问题，异步 RL 已成为大模型训练提效的默认选项。
*   **异构算力适配**：Verl 推进华为昇腾（NPU）支持，ROLL 适配 CoreX BI-V150。在 2026 年，RL 框架必须具备跨 CUDA/NPU/国产芯片的移植能力。
*   **序列并行与显存优化**：Open-Instruct 修复了序列并行的 Double-shift Bug，Slime 探索 GDN 层的 Context Parallelism。针对长上下文训练的显存优化是当前最硬核的工程挑战。

## 差异化定位分析

*   **verl (生产级全栈)**：不仅是追新模型（Qwen3.5），更是在构建完整的 Post-training 工厂（Distillation + QAT + NPU），适合寻求**一站式解决方案**的企业用户。
*   **TRL (学术与标准)**：通过集成 VESPO 和快速修复 HF 生态兼容性，TRL 定位为**最新算法的标准化落地平台**，适合研究人员快速复现 SOTA。
*   **slime (VLM 深度优化)**：依托 THUDM 的多模态基因，Slime 在处理 **GLM 系与 SGLang 推理引擎的结合**上具有独特优势，适合专注于多模态大模型训练的团队。
*   **AReaL (底层基建)**：关注 RPC 通信、IPv6 和分布式，更像是**RL 基础设施中间件**，适合需要高度定制化分布式训练架构的开发者。
*   **ROLL (资源效率)**：通过 Multi-LoRA 并发和 GPU 分时复用，ROLL 切入的是**高性价比训练**场景，关注如何在有限资源下跑更多实验。

## 社区热度与成熟度

*   **verl** 活跃度断层领先（33 PRs），Issue 讨论涉及技术路线图，显示出**极高的社区凝聚力和开发效率**。
*   **TRL** 发布 RC 版本引发关注，但 Issues 中暴露的 vLLM Sleep Mode 兼容性问题说明其在**多后端集成**上仍需打磨。
*   **Open-Instruct** 虽然无新 Issue，但 PR 质量极高（如 SP Label Bug），体现了 AllenAI **严谨的工程化风格**。
*   **Slime/AReaL** 依然由核心开发者驱动，社区贡献主要集中在特定模型/硬件的适配请求，处于**核心主导期**。

## 值得关注的趋势信号

1.  **vLLM 集成已成为必选项但痛点频现**：TRL (#5312)、Open-Instruct (#1532) 和 Slime (#1673) 均报告了与 vLLM 权重同步、Sleep Mode 或多节点 Rollout 的冲突。**异步模式下的权重一致性**是当前最大的工程雷区。
2.  **MoE 训练进入深水区**：Verl 针对 MoE 通信的 NestedTensor 优化，以及 Slime 对 MoE 格式转换的需求，表明 **MoE 模型的 RLHF 训练**正在从实验走向生产，显存与通信是主要瓶颈。
3.  **长上下文训练的精细化**：Open-Instruct 对 SFT SP 的修复和 Slime 对 CP 的讨论揭示了一个趋势：随着上下文窗口扩大（128k+），**序列并行策略的正确性**正成为新的性能拐点。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# ROLL RL 日报 (2026-03-22)

## 1. 今日速览
过去 24 小时内，ROLL 仓库暂无新版本发布或新 Issue 提出。项目活跃度主要集中在代码合并请求（PR）的推进上，共有 2 个功能性 PR 更新，重点涉及**并发训练架构**与**硬件生态兼容性**。

## 2. 版本发布
*   **无**

## 3. 重点 Issues
*   **无**：过去 24 小时无新增或更新的 Issue，社区反馈渠道目前平稳。

## 4. 关键 PR 进展

### 🔥 [架构升级] 支持 Multi-LoRA 并发训练与 RLix GPU 分时复用
*   **PR 链接**: [alibaba/ROLL #378](https://github.com/alibaba/ROLL/pull/378)
*   **状态**: `OPEN` (WIP)
*   **作者**: taoluo
*   **核心内容**:
    *   **Multi-LoRA Training**: 扩展训练栈以支持多个 LoRA 适配器的并发训练，旨在提升资源利用率。
    *   **RLix Control Plane**: 引入对 [RLix](https://github.com/rlops/rlix) 控制平面的 GPU 时间片支持。这表明 ROLL 正在向更细粒度的 GPU 资源调度和 RL 控制逻辑演进。
*   **技术观察**: 此举显示 ROLL 正试图解决 RL 训练中 GPU 资源闲置的痛点，通过分时复用提高吞吐量。

### 🛠️ [硬件兼容] 增加 CoreX BI-V150 兼容性支持
*   **PR 链接**: [alibaba/ROLL #393](https://github.com/alibaba/ROLL/pull/393)
*   **状态**: `OPEN`
*   **作者**: lxzlxzliuxuzhao
*   **核心内容**: 添加对 CoreX BI-V150 硬件的后端适配。
*   **技术观察**: 这标志着 ROLL 正在脱单纯的 NVIDIA 生态，向更广泛的 AI 加速芯片（特别是国产或其他非主流架构）进行适配，扩大潜在的部署场景。

## 5. 为什么值得持续关注
ROLL 不仅仅是另一个 RL 训练库，从今日的 PR 动向可以看出其两个关键的技术护城河：

1.  **资源效率的极致优化**: 通过 PR #378 可以看出，ROLL 正在集成 RLix 并探索 GPU 分时复用。在 LLM+RL 算力成本高昂的当下，能够在一个 GPU 上并发处理多个 LoRA 适配器或进行时间片轮转，将显著降低训练成本。
2.  **异构计算支持**: PR #393 显示了项目对非 CUDA 硬件（如 CoreX BI-V150）的快速响应能力。在 2026 年多元化的算力基建背景下，这种跨平台的兼容性是项目能否在生产环境大规模落地的关键。

---
*数据来源: GitHub @alibaba/ROLL*

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# Slime RL 日报摘要 (2026-03-22)

这里是 **slime** (THUDM) 项目的每日技术进展汇总。

## 1. 今日速览
过去 24 小时内，项目活跃度主要集中在**多模态（VLM）支持增强**和**长上下文训练稳定性**方面。核心开发者 `zhuzilin` 连续合并了 3 个 PR，显著改进了 GLM4V 的训练流程和 SGLang 推生集成。社区方面，关于 Qwen3-VL 的 Megatron 格式转换需求以及长文本训练的显存优化（CP 支持）成为关注焦点。此外，MLflow 集成的功能 PR 有了新的动态。

## 2. 版本发布
- **无新版本发布**。

## 3. 重点 Issues
今日 Issues 主要集中在**多模态模型训练**和**大规模训练的显存/通信问题**。

- **[[Bug] VLM 非共存模式权重同步失败] THUDM/slime Issue #1673**
  - **详情**：在非 `--colocate` 模式下训练 VLM（如 GLM4V），从训练端同步权重到 SGLang 推生端时发生崩溃。原因是 `UpdateWeightFromDistributed` 处理不当导致权重损坏。该 Issue 已关闭，推测与今日合并的 GLM4V 修复 PR 有关。

- **[[Question] 长文本训练 OOM 与 GDN 层 CP 支持] THUDM/slime Issue #1744**
  - **详情**：用户尝试训练 `Qwen3.5-27B` 长文本模型时在反向传播阶段遭遇 OOM。用户询问是否有计划支持 GDN 层的 Context Parallelism (CP) 以降低显存占用。

- **[Featuring: Qwen3-VL MoE 格式转换工具] THUDM/slime Issue #1510**
  - **详情**：社区请求提供将 Megatron 训练的 `Qwen3-VL-30B-A3B` 等 MoE 模型转换回 HuggingFace 格式的工具。目前该功能尚缺失。

## 4. 关键 PR 进展
核心提交者今日主要致力于提升多模态实验的稳定性和可观测性。

- **[feat: GLM4V multimodal support improvements] THUDM/slime PR #1745 (CLOSED -> MERGED)**
  - **摘要**：显著增强了 GLM4V 的支持。在 Megatron Actor 中增加了对 NumPy 数组输入的处理（用于多模态数据），修复了 SGLang Rollout 中的首轮文本负载处理，并更新了插件。这是解决 VLM 训练不稳定的关键更新。

- **[feat: placeholder worker type, metrics router, and GPQA letter range] THUDM/slime PR #1746 (CLOSED -> MERGED)**
  - **摘要**：架构优化。引入了 Placeholder Worker Type 和 Metrics Router，专门用于将 SGLang 的指标导出至 W&B，增强了大规模训练实验的可观测性。同时扩展了 GPQA 评估的字母范围。

- **[Support qwen3.5 loss mask for multi-turn SFT] THUDM/slime PR #1742 (OPEN)**
  - **摘要**：修复了 Qwen3.5 在多轮 SFT 中的 Loss Mask 问题。默认的 `qwen` mask 类型与 Qwen3.5 的聊天模板不兼容，导致 Jinja2 模板错误。该 PR 旨在适配新的 mask 逻辑。

- **[[Feature] Add modular tracking interface with MLflow backend] THUDM/slime PR #1591 (OPEN)**
  - **摘要**：提出重构 `logging_utils`，引入模块化的 Tracking 接口，并新增 MLflow 后端支持。目前 PR 仍在审核中，这将丰富 Slime 的实验管理生态。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
Slime 正在快速迭代以解决 **Post-training 阶段最棘手的工程挑战**，特别是针对**多模态大模型（VLM）**的强化学习：

1.  **解决 VLM RLHF 痛点**：今日的 PR 更新显示，团队正在攻克 VLM 在分布式训练（Megatron）与推生（SGLang）交互过程中的数据传输与权重同步难题，这是目前开源社区极少涉足的深水区。
2.  **面向超长上下文与大规模模型**：Issues 中关于 GDN 层 CP（Context Parallelism）的讨论表明该项目正服务于 27B+ 参数量及长文本场景的训练需求，这对于下一代基座模型的微调至关重要。
3.  **生产级工具链整合**：通过原生支持 SGLang 指标路由和探索 MLflow 集成，Slime 正从一个单纯的算法库演变为包含完整监控、评估（GPQA）和训练闭环的工业级平台。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 日报摘要 (2026-03-22)

## 1. 今日速览
过去 24 小时，AReaL 仓库活跃度主要集中在**多模态（VLM）训练稳定性**修复及**底层架构适配**。共更新 2 个 Issues 和 4 个 PRs。虽然无新版本发布，但社区提交了针对 VLM RPC 序列化、IPv6 环境支持及 Megatron-Bridge 适配的关键代码，显示出项目正向更复杂的基础设施场景和多模态应用拓展。

## 2. 版本发布
- **最新 Releases**: 无

## 3. 重点 Issues
今日报错主要集中在**多模态大模型（VLM）**的训练链路中，涉及数据传输与序列化底层问题。

- **VLM RPC 序列化失败 (#1069)**
  - **详情**: 用户 `Adiactive` 报告在使用 `Qwen2_5_VLProcessor` 处理 PIL 图像时发生 RPC 序列化错误。该问题经多次复现，确认存在于官方 Docker 镜像中。
  - **状态**: OPEN
  - **链接**: [inclusionAI/AReaL Issue #1069](https://github.com/inclusionAI/AReaL/issues/1069)

- **大批次数据传输连接中断 (#1071)**
  - **详情**: 用户 `Wangxiaoxiaoa` 报告在处理大批量多模态数据（compute_logp 阶段）时，RTensor 获取过程中出现 "Connection reset by peer"。这可能指向网络传输层或内存管理的潜在瓶颈。
  - **状态**: OPEN
  - **链接**: [inclusionAI/AReaL Issue #1071](https://github.com/inclusionAI/AReaL/issues/1071)

## 4. 关键 PR 进展
今日 PR 更新涵盖了紧急 Bug 修复、网络架构支持及核心框架集成。

- **fix: add PIL image and processor serialization for VLM RPC (#1070)**
  - **简评**: 针对上述 Issue #1069 的直接修复方案。添加了对 PIL 图像负载和 HF `ProcessorMixin` 的序列化支持，补齐了 VLM 训练的短板。
  - **链接**: [inclusionAI/AReaL PR #1070](https://github.com/inclusionAI/AReaL/pull/1070)

- **feat: support model training in IPv6-only environment (#1072)**
  - **简评**: 扩展了底层网络通信能力，支持在纯 IPv6 环境下进行模型训练。这对特定云厂商或内部封闭网络环境的部署至关重要。
  - **链接**: [inclusionAI/AReaL PR #1072](https://github.com/inclusionAI/AReaL/pull/1072)

- **feat: megatron bridge adaptation (#1056)**
  - **简评**: 旨在集成 Megatron-Bridge。引入了新参数 `bridge_type` (默认 mbridge)，在不破坏现有代码流的前提下提升了对大规模分布式训练的兼容性。
  - **链接**: [inclusionAI/AReaL PR #1056](https://github.com/inclusionAI/AReaL/pull/1056)

- **[High Priority] fix(infra): simplify RTensor serialization in data proxy (#1067)**
  - **简评**: 基础设施重构。移除了双路径序列化逻辑，统一使用 `serialize_value`/`deserialize_value`，并优化了 `RTensor.remotize()` 的调用时机。此举有望降低数据代理层的复杂度并提升稳定性。
  - **链接**: [inclusionAI/AReaL PR #1067](https://github.com/inclusionAI/AReaL/pull/1067)

## 5. 为什么值得持续关注
AReaL 正处于从纯文本 RL 向 **Multimodal RL (VLM)** 深水区迈进的关键阶段。今日的 Issue 和 PR 清晰地映射了这一路线图：
1.  **解决 VLM 痛点**: 针对 VLM RPC 序列化的修复（PR #1070）直接解决了多模态数据在分布式节点间传输的兼容性问题。
2.  **基础设施现代化**: 对 **IPv6** 的支持和对 **Megatron-Bridge** 的适配，表明该项目正在积极拥抱多样化的云原生环境和更高性能的分布式并行策略。
3.  **架构迭代**: 对 RTensor 序列化逻辑的简化（PR #1067）显示了团队在优化底层通信效率上的持续努力，这对于大规模 RL 训练的扩展性至关重要。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (Transformer Reinforcement Learning) RL 日报摘要
**日期**: 2026-03-22 | **分析师**: RL Ecosystem Analyst

---

### 1. 今日速览
TRL 生态在过去 24 小时内迎来了**重大版本更新** `v1.0.0rc1`，标志着项目正式迈向 1.0 时代。核心亮点是集成了新型算法 **VESPO**。社区目前主要聚焦于 **GRPO（Group Relative Policy Optimization）** 在异步场景下的稳定性修复，以及针对 **Qwen3/3.5** 系列模型的工具调用兼容性补丁。

### 2. 版本发布
- **[v1.0.0rc1](https://github.com/huggingface/trl/releases/tag/v1.0.0rc1)**
  - **核心特性**: 引入 **Variational Sequence-Level Soft Policy Optimization (VESPO)** 算法。
  - **意义**: 基于 [arXiv:2602.10693](https://huggingface.co/papers/2602.10693) 论文，提供了除 PPO/DPO 之外的新优化路径，旨在解决序列级策略优化中的方差问题。

### 3. 重点 Issues
- **[#5312 [OPEN] vLLM 权重同步失效**
  - **摘要**: 当开启 `vllm_enable_sleep_mode=True` 并使用 `colocate` 模式进行 GRPO 训练时，vLLM 权重无法与训练进程同步。
  - **影响**: 这是一个阻塞性问题，直接影响多卡异步 RL 训练的收敛性。
  
- **[#5317 [CLOSED] Qwen3 模板缺失 `\n` 符号**
  - **摘要**: 在 Qwen3/3.5 的 Chat 模板中，Completion EOS (`<|im_end|>`) 与 Tool Start 之间缺失必要的换行符，导致工具调用解析失败。该问题已通过后续 PR 修复。

### 4. 关键 PR 进展
- **功能性增强**
  - **[#4935] 添加 SDPO (Self-Distillation PO) Trainer**: 引入自蒸馏策略优化，利用模型自身的高奖励轨迹作为密集学习信号。
  - **[#5331] SFT 脚本支持 Tensor Parallelism (TP)**: 在 `accelerate` 配置 `tp_size > 1` 时自动加载 TP 方案，提升大模型 SFT 效率。

- **GRPO 异步训练与 Bug 修复**
  - **[#5330] & [#5332] Qwen3/3.5 工具调用修复**: 针对 `GRPOTrainer` 和 `async_rollout_worker` 进行了重构，修正了 EOS slicing 逻辑，确保 Qwen 系列模型的工具调用后缀处理正确。
  - **[#5313] 修复 vLLM 权重同步**: 针对 Issue #5312 提出的 `sleep_mode` 下的同步 Bug 提供了修复补丁。
  - **[#5333] AsyncGRPOTrainer 精度调整**: 将 `AsyncGRPOTrainer` 的模型 dtype 从 `bfloat16` 暂时回退至 `float32`，解决当前 bf16 训练不收敛/不稳定的问题。
  - **[#5320] 异步任务管理优化**: 引入 `_cancel_stale_tasks()` 机制，丢弃滞后的 inflight 任务，防止异步 Rollout 阻塞训练。

- **体验优化**
  - **[#5327] 增强日志输出**: `print_prompt_completions_sample` 现已支持打印 `reasoning_content`，便于调试推理模型（如 DeepSeek-R1 类模型）的训练过程。

### 5. 为什么值得继续关注
TRL 正在快速解决**异步大模型强化学习**中的工程痛点。
1.  **前沿算法落地**: `v1.0.0rc1` 的发布意味着 VESPO 等最新学术成果迅速转化为可用代码。
2.  **复杂场景支持**: 针对 vLLM 集成、异步 Rollout 任务调度（Cancel Stale Tasks）以及 Qwen3 等复杂 Chat 模板的快速响应，证明了该项目具备处理生产级 RLHF 流程的能力。
3.  **多模态与推理支持**: 对 `reasoning_content` 的日志支持和 SDPO 的引入，表明 TRL 正在适配具备长思维链的推理模型训练需求。

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

以下是 **verl** 项目 2026-03-22 的 RL 日报摘要：

---

### 1. 今日速览
过去 24 小时内，verl 生态保持高活跃度，共更新 **33 个 PR** 和 **9 个 Issues**。核心动态集中在**新模型支持（Qwen3.5）**、**异构硬件适配（NPU/Ascend）**以及**训练稳定性与可复现性**修复。虽然无新版本发布，但社区正密集提交针对 Qwen3.5 全系列模型（包括 MoE）的适配代码，以及 On-Policy Distillation 等高级算法的合并准备。

---

### 2. 版本发布
- **无新版本发布**。

---

### 3. 重点 Issues

*   **🔮 26Q1 技术路线图更新**
    Issue #4880 持续更新中，核心目标是切换至新的 Model Engine 并完成 LoRA/PEFT 的功能对齐，明确了废弃 Legacy Engine 的计划。
    [查看详情](https://github.com/verl-project/verl/issue/4880)

*   **🧪 实验可复现性：全局种子设置**
    Issue #1683 讨论了 GRPO 训练中除了 DataLoader 外，如何控制 Generate 和 Optimizer 的种子，引发了对 Ray 全局种子控制机制的关注。
    [查看详情](https://github.com/verl-project/verl/issue/1683)

*   **🐛 Qwen3.5 + Megatron + vLLM 训练错误**
    Issue #5659 报告了在使用 H100 集群运行 Qwen3.5 2B 模型 GRPO 时遇到的兼容性问题，涉及 Transformers 5.3.0 与 Megatron 0.16.0 的组合。
    [查看详情](https://github.com/verl-project/verl/issue/5659)

*   **🚀 华为昇腾 NPU 适配进展**
    Issue #5441 追踪了 Qwen3.5 + FSDP + GRPO 在 Ascend NPU 上的端到端验证工作，目前正在进行 POC 阶段。
    [查看详情](https://github.com/verl-project/verl/issue/5441)

*   **🐛 FP8 与 vLLM 后端兼容性**
    Issue #5683 指出在 vllm 0.17.0 后端下 FP8 训练存在 Bug。
    [查看详情](https://github.com/verl-project/verl/issue/5683)

---

### 4. 关键 PR 进展

*   **✨ [Feature] Qwen3.5 全系列 FSDP GRPO 训练支持**
    PR #5682 添加了 Qwen3.5 Transformer 适配器，并提供了 27B/35B 模型的 GRPO 训练脚本，补全了新版模型的支持空白。
    [查看 PR #5682](https://github.com/verl-project/verl/pull/5682)

*   **🔥 [Feature] On-Policy Distillation (策略蒸馏) 支持**
    PR #5592（基于 #5041 重构）为 FSDP 引擎增加了 On-Policy 蒸馏功能，支持 Top-k 和 KL estimator 损失，允许使用 vLLM 服务作为 Teacher 模型。
    [查看 PR #5592](https://github.com/verl-project/verl/pull/5592)

*   **🤖 [Feature] Agent RL 上下文管理支持**
    PR #5636 正在开发中，旨在支持多轨迹和会话级 GRPO，以适应 Agent 场景下的 RL 训练需求。
    [查看 PR #5636](https://github.com/verl-project/verl/pull/5636)

*   **⚡️ [Optimization] MoE 通信与内存优化**
    PR #5240 通过引入 `NestedTensor` 和 `uint8` 打包优化 Routed Expert 数据传输，显著减少 MoE 训练中的通信开销和显存占用。
    [查看 PR #5240](https://github.com/verl-project/verl/pull/5240)

*   **🐛 [Bugfix] 修复 TRTLLM 多节点 Rollout**
    PR #5693 修复了 TRTLLM 后端在多节点推理场景下的两个关键 Bug。
    [查看 PR #5693](https://github.com/verl-project/verl/pull/5693)

*   **🛠 [Misc] 修复 TRL 库导入错误**
    PR #5692 解决了最新版 verl 无法从 `trl` 导入 `AutoModelForCausalLMWithValueHead` 的问题。
    [查看 PR #5692](https://github.com/verl-project/verl/pull/5692)

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **前沿模型极速适配**：从 Issues 和 PRs 可以看出，verl 团队对 **Qwen3.5**（包括 MoE 版本）的支持响应极快，几乎与模型发布同步，提供了生产级可用的 FSDP 和 Megatron 后端脚本。
2.  **异构算力生态完善**：除了 NVIDIA GPU，项目正大力推进对 **华为 Ascend NPU** 的支持（Issue #5441, PR #5680），这对于寻求多元化算力方案的国内开发者极具吸引力。
3.  **Post-Training 技术栈深化**：除了常规 RLHF，项目正在合并 **On-Policy Distillation**（PR #5592）和 **NVFP4 QAT**（PR #5254）等高级功能，正从单纯的 RL 框架演进为全方位的 Post-Training 基础设施。
4.  **生产级稳定性关注**：针对 FP8、多节点 Rollout 和全局 Seed 控制的持续修复，表明项目正致力于解决大规模分布式训练中的实际工程痛点。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL 日报：Open-Instruct 项目动态 (2026-03-22)

## 1. 今日速览
过去 24 小时，Open-Instruct 仓库无新版本发布及新 Issue 提出。项目重心目前集中在**底层训练逻辑修复**与**高级 RL 功能迭代**上。共有 4 个现有 PR 更新，重点涉及 SFT 阶段的数据 Bug 修复、工具学习文档更新以及 PPO/GRPO 算法的鲁棒性增强。

## 2. 版本发布
无。

## 3. 重点 Issues
过去 24 小时无新增 Issue。

## 4. 关键 PR 进展

### 🛠️ 关键修复：SFT 序列并行标签处理 Bug
*   **PR**: [#1549 Fix SP double-shift bug in SFT label handling](https://github.com/allenai/open-instruct/pull/1549)
*   **状态**: OPEN (创建于 2026-03-21)
*   **分析**: 这是一个影响较大的 Bug 修复。`UlyssesSPDataLoaderAdapter` 在处理 Causal LM 标签时，原本将已经 shift 过的 `shift_labels` 重命名回 `labels`，导致模型内置的 `ForCausalLMLoss` 对其进行了二次移位。
*   **影响**: 修复此问题纠正了 SFT 阶段训练目标的偏移，对使用序列并行进行大模型训练至关重要。

### 🚀 功能增强：PPO 与 GRPO 进展
*   **PR**: [#1462 WIP: Add PPO with value model support to grpo_fast.py](https://github.com/allenai/open-instruct/pull/1462)
*   **状态**: OPEN (更新于 2026-03-20)
*   **详情**: 该 PR 旨在扩展 `grpo_fast.py` 的能力，引入标准的 PPO 训练模式。支持通过 Value Model 进行 GAE（广义优势估计）计算，而非仅依赖 GRPO 的组归一化奖励。
*   **技术点**: 新增 `use_value_model`、`gae_lambda` 等配置，标志着项目正从纯 GRPO 向更通用的 RLHF 基础设施演进。

*   **PR**: [#1532 GRPO Improve vllm timeout handling](https://github.com/allenai/open-instruct/pull/1532)
*   **状态**: OPEN (更新于 2026-03-20)
*   **详情**: 针对慢速网络环境（如 RunPod）下的 vLLM 生成稳定性优化。解决了健康检查超时导致的不重试问题，以及权重同步线程异常导致的训练永久挂起问题。

### 📚 文档与生态
*   **PR**: [#1546 Add docs for tool use and RL envs](https://github.com/allenai/open-instruct/pull/1546)
*   **状态**: OPEN (创建于 2026-03-20)
*   **详情**: 新增 `tool_training.md`，更新了关于工具使用和 RL 环境支持的文档，反映了项目对 Agent 及交互式训练场景的支持现状。

## 5. 为什么值得 RL 生态持续关注
Open-Instruct 正在从传统的指令微调工具库向**全栈 RL 训练平台**转型，今日的动态印证了这一趋势：
1.  **对齐前沿算法的快速集成**：项目不仅支持高效的 GRPO，正通过 PR #1462 快速补齐带 Value Head 的 PPO 支持，为研究者提供 PPO vs GRPO 的公平对比环境。
2.  **对分布式训练细节的极致把控**：PR #1549 暴露并修复了序列并行下的细微标签错位 Bug，显示了该团队在大规模分布式训练工程化上的深度。
3.  **Agent 与工具生态的落地**：文档更新显示项目正积极整合 Tool Use 和 RL Env，这是当前从 Chatbot 迈向 Agent 工程的关键路径。

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

# RL 日报：Gymnasium 生态追踪 (2026-03-22)

## 1. 今日速览
过去 24 小时内，Gymnasium 仓库活动平缓。社区焦点主要集中在 MuJoCo 环境的**功能修复**与**文档生态完善**上。无新版本发布，但核心 Issue 和 PR 均在昨日（21日）获得了更新，显示出维护者正在处理积压的技术债和文档需求。

## 2. 版本发布
*   **无新版本发布**。

## 3. 重点 Issues
*   **[Bug] Ant-v5 环境终止条件异常**
    *   **编号**: [#1464](https://github.com/Farama-Foundation/Gymnasium/issues/1464)
    *   **状态**: Open (最后更新: 2026-03-21)
    *   **详情**: 用户报告 `Ant-v5` 环境中，当 Ant 侧翻（z=0.24）时，Episode 未按预期终止。作者指出默认的 `healthy_z_range` 参数设置可能过低，导致倒置状态仍被判定为健康，建议将范围调整为 `(0.25, 1)` 以修复此逻辑漏洞。
    *   **影响**: 直接影响基于 Ant-v5 的算法评估稳定性，可能导致 Agent 在异常状态下的训练数据污染。

## 4. 关键 PR 进展
*   **[Docs] 新增自定义 MuJoCo 环境教程**
    *   **编号**: [#1547](https://github.com/Farama-Foundation/Gymnasium/pull/1547)
    *   **状态**: Open (最后更新: 2026-03-21)
    *   **详情**: 响应 Issue #846 的需求，新增了 Sphinx-Gallery 教程 `create_custom_mujoco_env.py`。该 PR 详细演示了如何通过继承 `MujocoEnv` 类来构建自定义环境。
    *   **意义**: 降低了 MuJoCo 深度定制化的门槛，填补了 Gymnasium 在复杂物理引擎环境开发文档上的空白。

## 5. 生态关注点
Gymnasium 作为 OpenAI Gym 的维护分支，其当前的核心价值在于**标准化**与**鲁棒性**。
*   **当前信号**: 今日的 Issue #1464 暴露了即便是经典环境（如 Ant-v5）在版本迭代中仍存在参数校准问题；而 PR #1547 则表明社区正在积极降低新环境开发的学习曲线。
*   **关注度理由**: 如果你正在使用 MuJoCo 进行底层控制研究，此类环境逻辑修复直接影响实验的可复现性。Gymnasium 目前仍是 RL 环境接口的事实标准，其对 MuJoCo v6 的支持完善程度是当前物理仿真 RL 领域的风向标。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>