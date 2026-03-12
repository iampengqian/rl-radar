# RL 开源生态日报 2026-03-12

> 生成时间: 2026-03-12 04:14 UTC | 覆盖项目: 15 个

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

以下是基于 2026-03-12 各大 RL 开源项目动态的横向对比分析报告：

# RL 开源生态日报：横向对比分析 (2026-03-12)

## 1. 生态全景
今日 RL 开源生态呈现出**“基础设施深化”与“多模态/异构突破”**的双重趋势。
*   **基础设施化**：以阿里巴巴的 ROCK 和 AllenAI 的 Open Instruct 为代表，项目重心正从单纯的算法实现转向资源调度、异构硬件适配（NPU）及分布式容错机制，标志着 RLHF 正式进入“工业化生产”阶段。
*   **多模态与通信瓶颈**：字节跳动的 verl 和 AReaL 正在引领多模态（VLM/Image）RL 训练的工程化落地，同时社区开始重点关注跨节点数据传输（如 Mooncake、RDMA）在大规模分布式训练中的性能瓶颈。
*   **算法融合**：基于群的策略优化（GRPO）正在快速普及，并开始与传统 PPO、DPO 及蒸馏技术融合，成为后训练阶段的标准配置。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 | PRs 更新 | 新版本发布 | 核心动态关键词 |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 18 | 30 | 无 | Flow-GRPO, Ascend NPU, SGLang/vLLM LoRA |
| **AReaL** | 3 | 12 | 无 | LoRA Archon 引擎, VLM 多轮训练, NPU 适配 |
| **TRL** | 2 | 13 | 无 | SDPO, vLLM Colocate 模式, Qwen3.5 兼容性 |
| **ROCK** | 1 | 3 | **v1.3.1** | Sandbox 资源抢占, Model Service Metrics, TS SDK |
| **Slime** | 6 | 7 | **v0.2.3** | Mooncake 传输后端, GLM-4.7 支持, SGLang 配置 |
| **Open Instruct** | 0 | 8 | 无 | GRPO+PPO 融合, 离线蒸馏, OLMo-core 集成 |
| **Tianshou** | 1 | 0 | 无 | v2.0 API 稳定性 |
| **PettingZoo** | 1 | 0 | 无 | Python 3.13 支持 |
| **ROLL / OpenRLHF / CleanRL / SB3 / Gym** | 0 | 0 | 无 | *过去24小时无活动* |

> **注**：ROCK、Slime 不仅有代码迭代，还发布了正式版本，显示出较高的交付成熟度。verl 的 Issue/PR 数量均居首位，处于高频迭代期。

## 3. 共同关注的研究与工程方向

通过对各项目 Issue 和 PR 的聚类分析，当前 RL 社区主要聚焦于以下四大方向：

1.  **GRPO 的算法深化与变种**：
    *   **现象**：Open Instruct 正在尝试将 PPO 的 Value Model/GAE 机制引入 GRPO (`grpo_fast.py`)，而 verl 则在探索 Flow-GRPO 用于图像生成。
    *   **解读**：GRPO 不再仅仅是 PPO 的简化替代品，正在发展出一套结合 Value-based 和 Group-normalized 优势的独立算法体系。

2.  **推理引擎的深度集成**：
    *   **现象**：几乎所有 LLM-RL 项目都在紧密适配 vLLM 和 SGLang。TRL 正在将默认模式改为 `colocate` 以减少服务开销，verl 和 Slime 分别在处理 SGLang 的 LoRA 支持和乱码 Bug。
    *   **解读**：RLHF 训练的效率瓶颈已从“反向传播”部分转移至“推理/采样”阶段，推理引擎的稳定性直接决定了 RL 训练的成败。

3.  **异构计算与国产硬件适配**：
    *   **现象**：AReaL 和 verl 均有大量 PR 涉及华为昇腾 NPU 的适配（如 MC2 通信、内存优化）。
    *   **解读**：RL 基础设施正在摆脱对单一 GPU 生态的依赖，向多硬件生态演进，这在中国开源社区尤为明显。

4.  **多模态 Agent 训练流**：
    *   **现象**：AReaL 支持 VLM 多轮 Agentic 训练，verl 支持 Qwen-Image 的在线 RL。
    *   **解读**：RL 的边界正在从纯文本对齐扩展到视觉理解和 Agent 交互，这要求框架具备处理更长序列、更复杂状态空间的能力。

## 4. 差异化定位分析

| 维度 | 项目 | 定位描述 |
| :--- | :--- | :--- |
| **全栈基础设施** | **ROCK** | **RL OS 化**。不再局限于算法，而是提供 Sandbox（沙箱）、EnvHub（环境分发）和 TS SDK，试图成为连接 Web 与 RL 的操作系统。 |
| **大规模分布式** | **verl, Slime** | **通信与算力解耦**。重点关注 Ray 之上的高性能通信，如 Slime 引入 Mooncake 后端优化跨节点传输，verl 专注多模态与 NPU 集群。 |
| **前沿算法实验** | **TRL, Open Instruct** | **SOTA 集散地**。TRL 快速跟进 SDPO，Open Instruct 深度绑定 OLMo 并探索 Distillation，适合需要最新算法验证的研究者。 |
| **模型生态适配** | **AReaL** | **硬核工程派**。深耕 FSDP2/TP 混合并行及 LoRA 底层架构，旨在解决 70B+ 大模型训练中的显存与死锁痛点。 |

## 5. 社区热度与成熟度

*   **极速迭代期**：**verl** 以单日 30 个 PR 的高频更新领跑，显示出其对多模态（Image/Video）和复杂硬件环境的激进探索。**AReaL** 紧随其后，侧重底层架构重构（RTensor, LoRA Infra）。
*   **稳健发布期**：**ROCK** 和 **Slime** 发布了正式版本（v1.3.1 和 v0.2.3），修复了关键的资源调度和推理乱码问题，表明这两个项目已经过内部大规模验证，适合作为生产环境底座。
*   **静默维护期**：**OpenRLHF**、**CleanRL** 和 **Stable Baselines3** 过去 24 小时无活动。这可能意味着这些成熟项目处于功能稳定期，或者主要开发精力在闭源分支/内部重构中。
*   **用户反馈期**：**Tianshou** 和 **PettingZoo** 活跃度主要体现在 Issue 追踪上（API Bug 或环境支持），表明项目处于维护现有用户群与修复边缘问题的阶段。

## 6. 值得关注的趋势信号

1.  **通信层正在成为新的性能高地**：
    *   Slime 引入 **Mooncake** (RDMA) 替代 Ray Object Store 进行 Rollout 数据传输，这是一个强烈的工程信号。随着模型尺寸增大，生成的 Tensor 数据量剧增，传统的 Socket 传输已成为瓶颈，**零拷贝 RDMA** 将成为大规模 RL 集群的标配。

2.  **从 "Chat" 到 "Agent" 的训练范式迁移**：
    *   AReaL 提到的 "Agentic Training"（含错误自动恢复）和 verl 的 Atropos 环境集成，暗示 RL 的训练目标正在发生变化：不再是优化单次回复的质量，而是优化**多轮交互中的成功率**。这要求框架具备更复杂的环境管理能力。

3.  **SGLang vs vLLM 的生态博弈**：
    *   在 RL 领域，vLLM 依然占据主流（TRL, Open Instruct），但 SGLang 正在快速渗透（Slime, verl）。针对 SGLang 的乱码（Garbled text）修复和 LoRA 支持（verl PR #5564）表明，社区正在努力抹平两个引擎在 RL 场景下的体验差异，SGLang 凭借其高并发处理能力，可能在 Agent 场景下更具优势。

4.  **开发者体验（DX）的“降维打击”**：
    *   ROCK 推出 **TypeScript SDK** 是一个极具前瞻性的动作。它试图将 RL 的控制权从 Python 脚本扩展到 Web 前端/全栈应用。这可能预示着未来 RL 的监控、控制和交互界面将更多地基于 Web 技术栈构建，极大降低非算法工程师的接入门槛。

---

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL 日报：ROCK 项目动态 (2026-03-12)

## 1. 今日速览
ROCK 项目今日保持高频迭代，发布了 **v1.3.1** 版本，重点增强了沙箱环境的资源调度能力与稳定性。社区方面，新增了关于模型服务监控指标的讨论，同时 TypeScript SDK 的持续更新显示出项目正在扩展多语言生态。

## 2. 版本发布
**Release [v1.3.1](https://github.com/alibaba/ROCK/releases/tag/v1.3.1)**
*   **核心更新**：
    *   **Sandbox 资源管理**：引入 Sandbox CPU 抢占支持，优化高负载下的资源调度策略。
    *   **规范增强**：支持创建标准 spec 的沙箱环境，提升了环境定义的标准化程度。
    *   **运维改进**：增加了文件清理任务，优化存储空间管理。

## 3. 重点 Issues
**[#614 [Feature] model service add metrics](https://github.com/alibaba/ROCK/issues/614)**
*   **状态**：Open
*   **内容**：作者 @FangwenDave 提议在 **Observation（观测）** 模块增加 Model Service 的 Metrics 指标。这表明 ROCK 正在从单纯的运行环境向具备完整可观测性的生产级 RL 基础设施演进，对于监控训练/推理过程中的服务健康度至关重要。

## 4. 关键 PR 进展
*   **[CLOSED] [#613 feat: add model service metrics #614](https://github.com/alibaba/ROCK/pull/613)**
    *   迅速响应 Issue #614，已实现模型服务的指标上报功能并合并（推测随 v1.3.1 发布或已进入主分支），体现了极高的开发响应速度。

*   **[OPEN] [#615 feat(sdk): add ImageBuilder for env_dir Docker build](https://github.com/alibaba/ROCK/pull/615)**
    *   **亮点**：SDK 层面增加 `ImageBuilder`，支持在 Builder Sandbox 中直接通过 `env_dir` 构建 Docker 镜像。这将极大简化环境构建流程，减少对外部镜像仓库的依赖，提升环境打包的自动化程度。

*   **[OPEN] [#492 Added TypeScript SDK](https://github.com/alibaba/ROCK/pull/615)**
    *   **生态拓展**：持续更新中。该 PR 旨在提供完整的 TypeScript SDK，支持沙箱管理、文件系统操作及 Agent 框架集成。这意味着 ROCK 试图打破 Python 的边界，吸引更广泛的前端/全栈开发者构建 Web 端的 RL 应用或控制台。

*   **[OPEN] [#575 feat: support multi operator #574](https://github.com/alibaba/ROCK/pull/575)**
    *   针对多操作员场景的功能支持，目前仍在开发中。

## 5. 为什么值得在当前 RL 生态继续关注
1.  **基础设施化趋势**：ROCK 不再局限于算法层面，而是深耕 **Sandbox（沙箱）** 和 **EnvHub（环境枢纽）**。通过支持 CPU 抢占和标准 Spec，它正在解决 RL 落地中最头疼的环境隔离与资源争抢问题。
2.  **全栈可观测性**：从单纯的“跑通代码”转向“监控服务”（Issue #614），说明项目正在向生产级稳定性要求靠拢，这对于需要长期运行的 RL 训练任务尤为关键。
3.  **多语言 SDK 支持**：TypeScript SDK 的推进预示着 ROCK 可能会成为连接 Web 技术与 RL 训练环境的桥梁，为构建基于浏览器的交互式 RL 应用提供底层能力。

---
*数据来源：GitHub Repo alibaba/ROCK*

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL 日报：Slime 项目动态 (2026-03-12)

## 1. 今日速览
Slime 项目今日发布了 **v0.2.3** 正式版，重点引入了基于 YAML 的 SGLang 配置支持，并修复了多项关键 Bug。社区活跃度较高，今日共有 6 条 Issue 更新和 7 条 PR 更新，涉及对新模型 GLM-4.7 的支持、底层传输架构优化（Mooncake）以及针对 Qwen 系列模型的 Bug 修复。

## 2. 版本发布
*   **[Release] v0.2.3 正式发布**
    *   **核心更新**：除了常规的 Bug 修复和稳定性提升，新版本引入了基于 YAML 的 `sglang_config` 引擎组配置功能，旨在简化 Rollout 设置流程。
    *   **链接**：https://github.com/THUDM/slime/releases/tag/v0.2.3

## 3. 重点 Issues
*   **[Bug] Qwen3.5-27B 推理输出乱码 (SGLang TP>1)**
    *   **详情**：Issue #1671 指出在使用 SGLang 后端运行 Qwen3.5-27B 且 `--rollout-num-gpus-per-engine > 1` 时，推理会出现乱码或重复文本。该问题目前已关闭，推测已在 v0.2.3 中修复或已有解决方案。
    *   **链接**：https://github.com/THUDM/slime/issues/1671
*   **[Bug] Qwen-35 Megatron Bridge 安装错误**
    *   **详情**：Issue #1711 报告在配置 Qwen-35 Megatron 环境时出现 `ModuleNotFoundError`，缺少 `peft_bridge.py` 模块。
    *   **链接**：https://github.com/THUDM/slime/issues/1711
*   **[Bug] Qwen-35 运行 Pipeline Parallel (PP) 报错**
    *   **详情**：Issue #1713 报告 Qwen-35 在 PP 模式下训练时，`megatron_utils/actor.py` 抛出错误。
    *   **链接**：https://github.com/THUDM/slime/issues/1713
*   **[Question] FSDP 支持移除原因询问**
    *   **详情**：Issue #1703 中用户询问为何移除 FSDP 支持，已得到项目方回复。
    *   **链接**：https://github.com/THUDM/slime/issues/1703

## 4. 关键 PR 进展
*   **[Feat] 添加 Mooncake 后端用于 Rollout 数据传输**
    *   **详情**：PR #1709 提出集成 **Mooncake** 作为数据传输后端。在分离式多节点设置（Rollout 节点 ≠ 训练节点）中，结合 RDMA 技术，Mooncake 在跨节点数据传输性能上显著优于 Ray Object Store。
    *   **链接**：https://github.com/THUDM/slime/pull/1709
*   **[Feat] 添加 GLM-4.7-Flash MTP 训练支持**
    *   **详情**：PR #1712 重写了 `GLM4MoELiteBridge` 以支持动态层数的 MTP 转换，并修复了 `rope_theta` 的兼容性问题，更新了文档要求 `transformers>=5.0`。
    *   **链接**：https://github.com/THUDM/slime/pull/1712
*   **[Release] Bump to v0.2.3**
    *   **详情**：PR #1682 合并了 v0.2.3 版本的代码更新。
    *   **链接**：https://github.com/THUDM/slime/pull/1682

## 5. 为什么值得 RL 生态关注
1.  **大规模模型推理优化**：v0.2.3 针对 SGLang 的配置优化（YAML support）以及对 Qwen3.5-27B 等大模型 TP>1 问题的修复，表明该项目正在解决 RLHF 中大规模 Actor 推理的工程瓶颈。
2.  **异构计算与通信优化**：引入 **Mooncake** 后端（PR #1709）是一个重要信号，意味着 Slime 正在探索利用 RDMA 技术解决大规模分布式训练中 Rollout 数据传输的瓶颈，这对跨节点的大规模 RL 训练至关重要。
3.  **紧跟前沿模型生态**：快速跟进 **GLM-4.7** 的支持（包括 MTP 训练），显示该项目保持着对最新 SOTA 模型架构的快速适配能力。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 日报摘要 (2026-03-12)

这里是基于 GitHub 数据生成的 AReaL 项目日报。

## 1. 今日速览
过去 24 小时内，AReaL 仓库活跃度较高，主要集中在**底层架构重构**与**多模态能力扩展**。虽然无新版本发布，但产生了 12 个 PR 更新（主要涉及 LoRA 基础设施、VLM 支持和性能优化）和 3 个 Issue 更新。社区关注点在于对更多模型家族的适配需求。

## 2. 版本发布
*   **无新版本发布**。
*   *注：PR #1022 提及了 `v1.0.1` 版本的 NPU 镜像更新文档，但未标记为官方 Release。*

## 3. 重点 Issues
今日共有 1 个功能性咨询和 2 个运维/修复类 Issue。

*   **[Question] 扩展模型家族支持**
    *   **链接**: [inclusionAI/AReaL #945](https://github.com/inclusionAI/AReaL/issues/945)
    *   **详情**: 用户 @MikaStars39 询问 AReaL 是否计划支持 GPT-OSS, Kimi K2, GLM4.5 等模型家族的 RL 训练，并引用了 Roadmap。这反映了社区对 AReaL 泛化能力的期待。
*   **[Bug] LoRA 权重更新同步问题**
    *   **链接**: [inclusionAI/AReaL #1020](https://github.com/inclusionAI/AReaL/issues/1020)
    *   **详情**: @TinLongYu 报告在使用 Docker 环境时，`update_weights_lora_xccl` 无法正确更新 `OpenAIServingModels` 中的版本化 LoRA 名称。
*   **[Doc] 社区渠道维护**
    *   **链接**: [inclusionAI/AReaL #1016](https://github.com/inclusionAI/AReaL/issues/1016)
    *   **详情**: 微信群二维码过期，需维护更新。

## 4. 关键 PR 进展
今日的 PR 更新显示出项目正在经历一次显著的架构升级，重点在于 LoRA、VLM 和底层张量处理的优化。

### A. 架构与核心优化
*   **[Major Feat] Archon 引擎 LoRA 基础设施 (Phase 1 & 2)**
    *   **链接**: [inclusionAI/AReaL #1015](https://github.com/inclusionAI/AReaL/pull/1015)
    *   **摘要**: 开发者 @MikaStars39 提交了针对 Archon 引擎的 LoRA 实现。该 PR 重点解决了 FSDP2 与 Tensor Parallelism (TP) 结合时的死锁问题，并实现了与 PEFT 兼容的 Checkpointing 机制。这是支持多样化模型微调的基石。
*   **[Refactor] RTensor 简化与解耦**
    *   **链接**: [inclusionAI/AReaL #1017](https://github.com/inclusionAI/AReaL/pull/1017)
    *   **摘要**: 重构 `RTensor`，移除源追踪逻辑，将其转变为轻量级的单分片远程张量引用。此举旨在消除循环依赖，提升代码模块化程度。
*   **[Perf] FSDP 逐层优化器流水线**
    *   **链接**: [inclusionAI/AReaL #983](https://github.com/inclusionAI/AReaL/pull/983) *(已关闭/合入?)*
    *   **摘要**: 引入 `PerLayerOptimWrapper`，通过流式 H2D/D2H 预取管道实现逐层优化器步骤，旨在替代慢速的 CPU Adam，显著提升 FSDP2 训练效率。

### B. 多模态与算力支持
*   **[Feat] VLM 多轮训练与 TP 优化**
    *   **链接**: [inclusionAI/AReaL #972](https://github.com/inclusionAI/AReaL/pull/972) | [inclusionAI/AReaL #965](https://github.com/inclusionAI/AReaL/pull/965)
    *   **摘要**: #972 增加了 VLM (视觉语言模型) 的多轮 Agentic 训练能力，包含错误自动恢复机制；#965 修复了 Qwen3-VL-32B 等大模型的显存加载 OOM 问题，优化了张量并行加载。
*   **[Hardware] 昇腾 NPU 适配 (v1.0.1)**
    *   **链接**: [inclusionAI/AReaL #1022](https://github.com/inclusionAI/AReaL/pull/1022)
    *   **摘要**: 更新了适配 Ascend NPU 的 v1.0.1 版本文档与容器镜像。

### C. 修复与运维
*   **[Fix] LoRA 版本控制 Bug**
    *   **链接**: [inclusionAI/AReaL #1021](https://github.com/inclusionAI/AReaL/pull/1021)
    *   **摘要**: 修复 Issue #1020，解决 `OpenAIServingModels` 中 LoRA 名称映射未同步更新的问题。

## 5. 为什么这个项目值得在当前 RL 生态继续关注？
AReaL 正在从一个单纯的 RL 训练框架向**高性能、异构算力适配的大规模 RL 基础设施**演进：

1.  **解决大规模训练痛点**：针对 FSDP2 与 TP 结合的死锁问题（PR #1015）以及 CPU 优化器瓶颈（PR #983）的修复，表明项目正攻坚大模型 RL 训练中最棘手的底层性能问题。
2.  **多模态 Agent 训练的前瞻性**：通过支持 VLM 的多轮训练和错误恢复（PR #972），AReaL 正在打通从“对话模型”到“Agentic 模型”的 RL 训练路径。
3.  **软硬一体的生态扩展**：同时兼顾 LoRA 生态的灵活性（PR #1015）和国产芯片（Ascend NPU）的适配（PR #1022），显示了其在工程落地上的全面布局。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# TRL (Transformer Reinforcement Learning) RL 日报摘要
**日期：** 2026-03-12
**数据源：** github.com/huggingface/trl

## 1. 今日速览
过去 24 小时内，TRL 项目活跃度集中在代码质量提升与兼容性修复。共处理 **13 个 PR**（其中 8 个已合并，5 个待处理），**2 个 Issues** 更新。社区目前关注焦点在于 **Qwen3.5 与 vLLM 0.17.0 的兼容性问题**，以及 vLLM 默认运行模式的迁移。

## 2. 版本发布
过去 24 小时内 **无新版本** 发布。

## 3. 重点 Issues
目前社区反馈的核心痛点集中在特定模型与新版推理引擎的兼容性上。

*   **Qwen3.5 + vLLM 0.17.0 兼容性报错** [#5269](https://github.com/huggingface/trl/issues/5269)
    *   **详情**：用户在使用 TRL 最新主分支配合 vLLM 0.17.0 对 Qwen3.5-0.8B 进行 GRPO 训练时遇到 `ValueError`，提示无法找到 'model' 模块。
    *   **影响**：这是目前最活跃的 Open Issue，可能影响大量依赖最新 vLLM 版本进行 RLHF 的用户。

## 4. 关键 PR 进展
今日的 PR 活动显示出项目正在经历一次重要的架构清理和功能增强，特别是对 vLLM 集成和多模态训练的优化。

### A. 架构与体验优化
*   **vLLM 默认模式切换** [#5255](https://github.com/huggingface/trl/pull/5255)
    *   **状态**：Open
    *   **内容**：将默认的 `vllm_mode` 从 `"server"` 改为 `"colocate"`。此举旨在降低用户使用门槛，避免必须单独启动 vLLM 服务器的繁琐步骤，这对于快速迭代实验非常关键。
*   **Reward 函数增加日志钩子** [#5233](https://github.com/huggingface/trl/pull/5233)
    *   **状态**：Open
    *   **内容**：允许在 GRPO 和 RLOO 的 Reward 函数中通过 `log_extra` 和 `log_metric` 记录自定义指标。这为精细化监控 RL 训练过程提供了更灵活的接口。

### B. 核心算法与性能
*   **新增 SDPO (Self-Distillation Policy Optimization) Trainer** [#4935](https://github.com/huggingface/trl/pull/4935)
    *   **状态**：Open
    *   **内容**：实现了基于 arXiv:2601.20802 的 SDPO 算法，引入自蒸馏机制将高奖励轨迹转化为密集学习信号。这是对现有 DPO 算法的重要扩展。
*   **数据打包 逻辑优化** [#5189](https://github.com/huggingface/trl/pull/5189)
    *   **状态**：Open
    *   **内容**：用向量化实现替换了原有的 BFD splitting 逻辑，旨在提升处理速度并降低错误率。

### C. 多模态与修复
*   **修复多模态 bf16/fp16 训练 Bug** [#5073](https://github.com/huggingface/trl/pull/5073)
    *   **状态**：Open
    *   **内容**：解决了 VLM (Vision Language Models) 在 bf16/fp16 训练时因 `pixel_values` 未转换数据类型而导致的 `torch.layer_norm` 崩溃问题。

*   **已合并修复**：
    *   修复 `OnlineDPO` 错误信息引用 [#5237](https://github.com/huggingface/trl/pull/5237)
    *   修复 GKD/GOLD 配置中 `model_init_kwargs` 的 CLI JSON 解析问题 [#5266](https://github.com/huggingface/trl/pull/5266)

## 5. 为什么值得继续关注
TRL 项目目前在 RL 生态中保持着极高的响应速度和技术敏锐度：

1.  **快速跟进 SOTA 算法**：社区正在积极提交 SDPO 等最新算法实现，使其不仅是一个微调工具，更是 RL 算法的实验田。
2.  **解决工程痛点**：通过将 vLLM 默认模式改为 `colocate`，TRL 正在解决 RLHF 中“训练”与“推理”环境隔离导致的工程复杂度问题，这表明开发团队非常重视用户体验和实际落地效率。
3.  **多模态支持深化**：针对 VLM 训练中隐蔽的数据类型 Bug 修复，表明该项目正在支持复杂的 VLM 对齐任务，这是当前大模型技术竞争的高地。

---
*分析师注：建议关注 Issue #5269 的进展，如果正在使用 Qwen3.5 和最新版 vLLM，请暂时避开该组合或等待修复。*

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

# RL 日报：Tianshou 生态跟踪 (2026-03-12)

## 1. 今日速览
Tianshou 在过去 24 小时内整体平稳，无代码合入或版本发布。社区重点关注 **v2.0 高层 API** 的稳定性，出现了一例关于 `Experiment` 工作流结果返回的关键 Bug 反馈。

## 2. 版本发布
*   **无新版本发布**。

## 3. 重点 Issues
*   **[Bug] `Experiment.run()` 执行后 `trainer_result` 字段缺失**
    *   **编号**: [#1288](https://github.com/thu-ml/tianshou/issues/1288)
    *   **现状**: Open (创建于 2026-03-11)
    *   **详情**: 用户在适配 Tianshou v2.0 高层 API 时发现，调用 `Experiment.run()` 结束后，返回的 `ExperimentResult` 对象中 `trainer_result` 属性始终为 `None`。这可能是由于内部逻辑缺少返回值赋值导致的。这对依赖该结果进行后续分析或自动化流程的下游任务有直接影响。
    *   **社区反馈**: 暂无官方回复。

## 4. 关键 PR 进展
*   **无活跃 PR**。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
*   **v2.0 抽象层的实战检验**: Issue #1288 虽然是一个 Bug，但侧面反映了 Tianshou 正致力于从单纯的 Algorithm Library 向全流程 **MLOps 框架** 转型。v2.0 引入的 `Experiment` 和高层 API 试图解决 RL 实验难以复现和管理的问题。
*   **学术与工业界的桥梁**: 作为清华大学维护的框架，Tianshou 始终保持对 SOTA 算法（如 Offline RL, Model-based RL）的快速响应，且代码质量高，是连接学术算法复现与工业界落地的核心 Python 库之一。

---
*数据来源: GitHub thu-ml/tianshou*

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

以下是 `verl` 项目 2026-03-12 的 RL 日报摘要。

---

### 📅 verl RL 日报 (2026-03-12)

#### 1. 今日速览
过去 24 小时内，`verl` 项目保持了较高的开发活跃度，共更新 **30 个 PR** 和 **18 个 Issues**。重点集中在**多模态扩展**（Qwen-Image Flow-GRPO）、**推理引擎集成**（SGLang/vLLM 异步 Rollout 与 LoRA 支持）以及**异构硬件适配**（Ascend NPU 生态完善）。社区正在积极解决大规模模型训练中的性能瓶颈问题。

#### 2. 版本发布
*   **无新版本发布**。
*   值得注意的依赖更新：PR #5542 正在将 Docker 镜像中的 vLLM 更新至 0.17.0，SGLang 更新至 0.5.9。

#### 3. 重点 Issues
*   **🔥 性能瓶颈：DeepSeek 16B 训练步长耗时递增**
    用户反馈在使用 GRPO + SGLang + Megatron 训练 DeepSeek 16B 模型时，`update_policy` 阶段耗时随训练步数增加而持续增长，疑似存在内存泄漏或显存碎片化问题。
    [详情链接](https://github.com/volcengine/verl/issues/2504)

*   **🚀 [RFC] 支持基于 vLLM-Omni 的 Qwen-Image Flow-GRPO 训练**
    社区正在讨论并计划实现对扩散模型（如 Qwen-Image, Wan2.2）的在线 DPO 类训练支持，通过 Flow-GRPO 算法拓展 verl 在多模态生成领域的边界。
    [详情链接](https://github.com/volcengine/verl/issues/4639)

*   **🐛 Ascend NPU 环境下 Fully Async Policy 模式异常**
    在昇腾 910B 环境下测试 `fully_async_policy` 模式 3 时，虽然资源利用率低，但总耗时反而超过模式 1，且部分场景下 Rollout 输出为乱码（俄文/生僻字），显示硬件适配仍需打磨。
    [Issue #5458](https://github.com/volcengine/verl/issues/5458) | [Issue #5563](https://github.com/volcengine/verl/issues/5563)

*   **⚠️ 常见报错：Reward Function 未实现**
    多名用户报告在使用自定义数据集或 GSM8K 时遇到 `NotImplementedError: Reward function is not implemented`，提示需要正确配置 `RewardManager`。
    [详情链接](https://github.com/volcengine/verl/issues/5558)

#### 4. 关键 PR 进展
*   **[Feature] Qwen-Image Flow-GRPO 训练支持 (#5297)**
    配合 Issue #4639，该 PR 集成了 `vLLM-Omni` 作为 Rollout 引擎，并使用 `Diffusers` 作为训练引擎，初步实现了 Qwen-Image 的 FlowGRPO 训练脚本。这是 verl 进军图像 RL 领域的关键一步。
    [PR 链接](https://github.com/volcengine/verl/pull/5297)

*   **[Feature] SGLang Rollout 的 LoRA 支持 (#5564)**
    为 SGLang 推理后端增加了双模式 LoRA 支持（Merge 模式与 Native Adapter 模式），使其功能对齐现有的 vLLM 实现，提升了轻量级微调场景的灵活性。
    [PR 链接](https://github.com/volcengine/verl/pull/5564)

*   **[Feature] Atropos RL 环境集成 (#5520)**
    提出了与 [Atropos](https://github.com/NousResearch/atropos) 环境的集成方案，通过注册 vLLM 端点实现 GRPO 流程的打通，增强了 verl 在 Agent 训练场景的潜力。
    [PR 链接](https://github.com/volcengine/verl/pull/5520)

*   **[Feature] 支持 GDPO 算法 (#5503)**
    新增 GDPO (Group reward-Decoupled Normalization Policy Optimization) 算法实现，旨在通过解耦组归一化来优化策略梯度，复现了论文结果。
    [PR 链接](https://github.com/volcengine/verl/pull/5503)

*   **[Roadmap] Ascend NPU 2026 Q2 路线图 (#5526)**
    明确了 Q2 重点：原生支持昇腾 NPU 上的 MoE、VLM 和 Agent 负载，致力于打造高性能多设备库。
    [PR 链接](https://github.com/volcengine/verl/issues/5526)

#### 5. 为什么继续关注 verl？
1.  **多模态 RL 的先行者**：随着 Flow-GRPO 和 vLLM-Omni 的集成，verl 正在将 LLM 的 PPO/GRPO 成功经验迁移至图像/视频生成模型，这在当前 RL 开源生态中极具前瞻性。
2.  **推理-训练引擎深度解耦与融合**：项目不仅同时维护 vLLM 和 SGLang 的最新特性支持（如 Decoupled Speculation, LoRA），还在探索 Megatron 与 vLLM 的高效协同，解决了工业界 RLHF 落地中的核心痛点。
3.  **国产硬件生态的深度适配**：针对华为昇腾（Ascend）NPU 的专门优化和 Bug 修复（如 MC2 通信、乱码问题），使其成为国产大模型 RL 训练的重要选择。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL 日报：Open Instruct 生态动态 (2026-03-12)

**分析师摘要**：Open Instruct 今日无版本发布，但在代码质量与基础设施上进行了重要清理。核心开发重心显著向 **GRPO (Group Relative Policy Optimization)** 及其周边生态（OLMo-core 集成、Offline Distillation）倾斜，显示出该项目正从通用指令微调向高性能、分布式 RLHF 基础设施演进。

---

### 1. 今日速览
*   **PR 活跃度**：高（8 个更新）
*   **Issues 活跃度**：无（0 条）
*   **版本发布**：无
*   **核心动向**：移除旧集群依赖，修复关键 GPU 测试，扩展 PPO 支持及离线蒸馏功能。

---

### 2. 版本发布
*   **无新版本发布**。

---

### 3. 重点 Issues
*   **无新增或更新 Issues**。
    *   *分析*：尽管 PR 活动频繁（尤其是关于 GRPO 和 OLMo-core），但 Issue 追踪器沉寂，表明当前开发主要由核心团队驱动，处于内部迭代阶段，尚未有大量外部用户反馈堆积。

---

### 4. 关键 PR 进展

#### A. 算法与模型增强
*   **[WIP] grpo_fast.py 增加 PPO 支持** ([#1462](https://github.com/allenai/open-instruct/pull/1462))
    *   **作者**: @hamishive
    *   **摘要**: 试图在 GRPO 流程中融合 PPO 算法。引入了学习型价值模型 用于优势估计 (GAE)，而非仅依赖 GRPO 的组归一化奖励。包含 `use_value_model`、`gae_lambda` 等关键配置。
    *   **意义**: 为项目引入更传统的 PPO 训练路径，提供了除 GRPO 外的另一种 RL 优化选择。

*   **新增离线蒸馏支持** ([#1520](https://github.com/allenai/open-instruct/pull/1520))
    *   **作者**: @wolfecameron
    *   **摘要**: 集成 `DistillKit`，新增 `sample_logits_vllm.py` 和 `offline_distill.py`。支持使用 vLLM 捕获 Teacher logits 并进行压缩 Top-k 输出，随后离线训练 Student 模型。
    *   **意义**: 拓展了模型压缩能力，无需在线 RL 交互即可通过知识蒸馏提升小模型性能。

#### B. GRPO 基础设施与 OLMo-core 集成
*   **GRPO OLMo-core Ray Actor (PR 4/5)** ([#1398](https://github.com/allenai/open-instruct/pull/1398))
    *   **作者**: @finbarrtimbers
    *   **摘要**: 添加 `PolicyTrainerOLMoCoreProcess` 和 `OLMoCoreModelGroup`，封装 OLMo-core 的训练基础设施，以支持跨节点、多 GPU 的分布式 GRPO 训练。

*   **GRPO 回调函数** ([#1397](https://github.com/allenai/open-instruct/pull/1397))
    *   **作者**: @finbarrtimbers
    *   **摘要**: 为 OLMo-core Trainer 添加 `VLLMWeightSyncCallback` (权重同步至 vLLM) 和 `RefPolicyUpdateCallback` (Polyak 平均)。

*   **修复 GRPO 数据预处理 Actor 检查点恢复** ([#1523](https://github.com/allenai/open-instruct/pull/1523))
    *   **作者**: @MohdElgaar
    *   **摘要**: 修复了恢复训练时 `client_state` 加载逻辑，确保从正确的 `learner step` 继续运行，避免数据重复消费或遗漏。

#### C. 工程维护与文档
*   **修复 GPU 测试失败** ([#1514](https://github.com/allenai/open-instruct/pull/1514)) - **已关闭**
    *   **摘要**: 修复了 `padding_free_collator.py` 中的 Attention Mask 键名匹配问题（兼容 DPO 的 `chosen/rejected_attention_mask`）。

*   **移除 Augusta 集群引用** ([#1522](https://github.com/allenai/open-instruct/pull/1522)) - **已关闭**
    *   **摘要**: 清理了已于 2025 年退役的旧集群相关代码。

*   **扩展 CONTRIBUTING.md** ([#1521](https://github.com/allenai/open-instruct/pull/1521)) - **已关闭**
    *   **摘要**: 详细补充了 CI/CD 流程、GPU 测试及 Beaker 实验平台的使用文档，降低了外部贡献者的门槛。

---

### 5. 为什么值得持续关注？

1.  **GRPO 与 OLMo 的深度绑定**：
    该项目正在构建一套紧密结合 AllenAI 自家 OLMo 系列模型架构的 RL 基础设施。通过 Ray Actor 和专用 Callbacks 的封装，它正在解决大模型分布式 RL 训练中极其复杂的权重同步和分布式调度问题。对于关注**开源模型全栈训练**（不仅是微调）的研究者，这是极有价值的参考实现。

2.  **混合 RL 策略的探索**：
    PR #1462 显示项目正在打破 GRPO 和 PPO 的界限。通过在同一代码库中支持基于 Value Model 的 GAE 和基于 Group Normalization 的奖励，它为对比研究不同 RL 算法对 LLM 对齐效果提供了统一的实验平台。

3.  **工业级工程实践**：
    无论是离线蒸馏 的引入，还是对 Beaker 平台、GPU 测试、Padding Free Collator 的修复，都显示出该项目在追求算法前沿的同时，极其注重工程的健壮性和可复现性。这是区别于许多“仅限学术演示”代码库的关键点。

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

过去24小时无活动。

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

# RL 日报：PettingZoo 生态追踪 (2026-03-12)

## 1. 今日速览
PettingZoo 仓库在过去 24 小时内维持低活跃度，无代码提交或版本发布。社区焦点集中在向后兼容性讨论，唯一的活跃 Issue 涉及 Python 3.13 的支持需求。

## 2. 版本发布
*   **无新版本发布**：近期未检测到新的 Release 或 Patch。

## 3. 重点 Issues
*   **Python 3.13 兼容性咨询** [#1303](https://github.com/Farama-Foundation/PettingZoo/issues/1303)
    *   **状态**: Open
    *   **内容**: 开发者 @steveyuwono（MLPrinciples 项目成员）询问 PettingZoo 是否有计划支持 Python 3.13。随着 Python 新版本的普及，下游依赖项目对运行环境升级有明确需求。
    *   **进展**: 该 Issue 创建于 2025 年 8 月，于昨日（2026-03-11）有新增评论，显示社区正在重拾对该技术债的关注。

## 4. 关键 PR 进展
*   **无活跃 PR**：过去 24 小时内无新建或更新的 Pull Request。

## 5. 为什么值得持续关注
PettingZoo 作为 Farama-Foundation 下的核心项目，是**多智能体强化学习 (MARL)** 领域的标准 API 接口（类似单智能体领域的 Gymnasium）。
*   **标准地位**: 它是连接底层环境（如 MPE, Sb3-vec-env）与上层多智能体算法的关键中间件。
*   **生态依赖**: Issue #1303 中提及的 MLPrinciples 等项目依赖，证明了其在教学与科研流程中不可替代的地位。即便在代码静默期，其 API 标准的稳定性对 RL 生态依然至关重要。

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>