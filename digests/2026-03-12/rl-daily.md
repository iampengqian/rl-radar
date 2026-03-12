# RL 开源生态日报 2026-03-12

> 生成时间: 2026-03-12 03:19 UTC | 覆盖项目: 15 个

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

## RL 项目详细报告

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL 日报：ROCK (alibaba/ROCK) 生态动态
**日期**：2026-03-12

这里是基于 GitHub 实时数据生成的 ROCK 项目日报摘要。

## 1. 今日速览
ROCK 项目今日保持活跃，发布了 **v1.3.1** 正式版本，主要增强了沙箱环境的资源调度能力与清理机制。社区方面，TypeScript SDK 的持续更新显示出项目正在扩展多语言生态。

## 2. 版本发布
### [v1.3.1](https://github.com/alibaba/ROCK/releases/tag/v1.3.1)
最新版本重点优化了底层基础设施的稳定性与标准化：
*   **资源调度**：引入了 Sandbox CPU 抢占支持，对于资源受限环境下的多 Agent 并发训练至关重要。
*   **运维增强**：新增文件清理任务，优化存储空间管理。
*   **标准化**：支持创建标准规格沙箱（#538 系列合并），提升了环境的一致性。

## 3. 重点 Issues
### [[Feature] model service add metrics #614](https://github.com/alibaba/ROCK/issues/614)
*   **状态**：OPEN
*   **作者**：@FangwenDave
*   **解读**：提议为模型服务增加监控指标。这表明 ROCK 正在从单纯的运行环境向具备全栈可观测性的 RL 基础设施演进，未来将更便于监控训练过程中的推理服务状态。

## 4. 关键 PR 进展
### [feat(sdk): add ImageBuilder for env_dir Docker build #615](https://github.com/alibaba/ROCK/pull/615)
*   **状态**：OPEN
*   **作者**：@zhangjaycee
*   **内容**：在 SDK 中增加了 `ImageBuilder`，支持在构建沙箱时直接通过 `env_dir` 构建 Docker 镜像。这将极大地简化自定义环境的部署流程。

### [Added TypeScript SDK #492](https://github.com/alibaba/ROCK/pull/492)
*   **状态**：OPEN (更新于昨日)
*   **作者**：@Timandes
*   **内容**：这是一个重量级贡献，提供了完整的 TypeScript SDK。支持沙箱管理、文件系统操作及 Agent 框架，意味着 ROCK 试图打破 Python 的边界，吸引更广泛的前端/全栈开发者构建基于 Web 的 RL 应用。

### [feat: add model service metrics #613](https://github.com/alibaba/ROCK/pull/613)
*   **状态**：CLOSED
*   **关联**：实现了 Issue #614 的功能，响应速度极快。

## 5. 为什么值得在当前 RL 生态继续关注
1.  **生产级基础设施**：从 v1.3.1 对 CPU 抢占和标准沙箱的支持可以看出，ROCK 专注于解决 RL 环境在**大规模分布式运行**时的资源隔离与调度痛点，这比单纯提供算法库更具工程价值。
2.  **多语言生态扩展**：TypeScript SDK 的引入预示着 ROCK 可能正在布局 **Web-based RL** 或 **Browser-Agent** 场景，这对于需要通过 Web 接口交互的 Agent 开发具有重要意义。
3.  **全链路闭环**：新增的 Metrics 和 ImageBuilder 显示了从环境构建、运行到监控的完整工具链正在形成。

---
*数据来源：GitHub alibaba/ROCK (2026-03-12)*

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# Slime RL 日报摘要 (2026-03-12)

这里是 **Slime** (THUDM/slime) 强化学习开源项目日报。今日项目发布了重要的 **v0.2.3** 版本，主要解决了 SGLang 后端的配置痛点，社区讨论集中在 Qwen3.5 等大模型的推理稳定性及环境配置上。

## 1. 今日速览
- **核心动态**：发布 **v0.2.3** 正式版，引入基于 YAML 的 `sglang_config`，旨在简化多 GPU 推理引擎的配置。
- **社区聚焦**：关于 Qwen3.5-27B 在多卡推理（Tensor Parallel > 1）下的输出乱码问题引发讨论，部分问题疑似与 SGLang 当前版本有关。
- **功能拓展**：PR 区新增 **Mooncake** 后端支持，针对分离式训练架构（Rollout 与 Train 节点分离）优化跨节点数据传输性能。

---

## 2. 版本发布
### **v0.2.3**
- **标签**: `Latest`
- **主要更新**:
    - **配置优化**：新增 YAML-based `sglang_config` 支持，简化了 Engine Group 的配置流程，使得 Rollout 设置更加直观。
    - **稳定性**：包含一系列 Bug 修复和稳定性提升。
- **链接**: [Release v0.2.3](https://github.com/THUDM/slime/releases/tag/v0.2.3)

---

## 3. 重点 Issues

### 3.1 推理 Bug 修复与确认
- **Qwen3.5-27B 多卡推理乱码** [#1671](https://github.com/THUDM/slime/issues/1671)
    - **现象**：在使用 `--rollout-num-gpus-per-engine > 1` (即 `gen_tp > 1`) 训练 Qwen3.5-27B 时，SGLang 后端产生的文本出现乱码或重复。
    - **进展**：该 Issue 已关闭，推测 v0.2.3 或相关 PR 已处理此兼容性问题。

### 3.2 环境与配置咨询
- **GLM-4.7 环境依赖** [#1706](https://github.com/THUDM/slime/issues/1706)
    - **问题**：用户在手动构建 GLM-4.7 环境时遇到依赖冲突，指出 `build_conda.sh` 安装的 `transformers 4.57.1` 可能不满足需求。
    - **状态**：Open，正在讨论正确的环境配置步骤。
- **FSDP 支持移除原因** [#1703](https://github.com/THUDM/slime/issues/1703)
    - **问题**：用户询问为何移除 FSDP 支持。已关闭，可能已由官方解答或转向其他并行策略。

### 3.3 新增报错
- **Megatron Bridge 安装缺失** [#1711](https://github.com/THUDM/slime/issues/1711)
    - **问题**：Qwen35 Megatron bridge 缺少 `peft_bridge.py` 模块导致 `ModuleNotFoundError`。
- **Qwen35 PP 运行错误** [#1713](https://github.com/THUDM/slime/issues/1713)
    - **问题**：使用 Pipeline Parallelism (PP) 运行 Qwen35 时在 `actor.py` 抛出异常。

---

## 4. 关键 PR 进展

### 4.1 核心功能与架构
- **新增 Mooncake 数据传输后端** [#1709](https://github.com/THUDM/slime/pull/1709) [OPEN]
    - **内容**：引入 **Mooncake** 作为 Rollout 数据传输的替代后端。
    - **价值**：在 Rollout 节点与训练节点分离的多节点架构中，利用 RDMA 技术显著提升跨节点数据传输效率，优于默认的 Ray Object Store。

### 4.2 模型支持与修复
- **支持 GLM-4.7-Flash MTP 训练** [#1712](https://github.com/THUDM/slime/pull/1712) [CLOSED]
    - **内容**：重写 `GLM4MoELiteBridge` 以支持动态层数的 MTP (Multi-Token Prediction) 转换，并修复了 `rope_theta` 补丁及文档更新（需 `transformers>=5.0`）。
- **修复 Qwen3.5 MTP Bridge** [#1702](https://github.com/THUDM/slime/pull/1702) [CLOSED]
    - **内容**：修复了 Qwen3.5 MTP 转换/训练中的权重映射错误（`KeyError`）及跨 Megatron 版本的兼容性问题。
- **发布版本合并** [#1682](https://github.com/THUDM/slime/pull/1682) [CLOSED]
    - **内容**：Bump version to v0.2.3。

---

## 5. 为什么值得持续关注？

**Slime 正在解决 LLM + RL 训练中最棘手的 "Infrastructure Fragmentation"（基础设施碎片化）问题。**

1.  **极致的吞吐量优化**：今日合并的 **Mooncake** 后端和 **SGLang YAML 配置** 表明，Slime 正在针对大规模分布式场景（特别是推理与训练分离架构）进行深度优化，直接瞄准了 RLHF 训练中的数据传输瓶颈。
2.  **紧跟 SOTA 模型特性**：项目对 **Qwen3.5** 和 **GLM-4.7** 的 MTP (Multi-Token Prediction) 支持非常及时，这通常是目前提升模型推理速度和训练效率的前沿技术，显示其核心团队紧跟甚至领先于开源模型的发布节奏。
3.  **架构灵活性**：从移除 FSDP 到深耕 Megatron-LM + SGLang 的组合，Slime 正在明确其作为高性能、生产级 RL 框架的定位，更适合需要大规模扩展能力的开发者。

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL 日报摘要 (2026-03-12)

## 1. 今日速览
过去 24 小时内，AReaL 仓库活跃度较高，主要集中在 **系统架构重构**、**多模态(VLM)训练支持** 以及 **Ascend NPU 适配** 三个方面。虽然无新版本发布，但关键 PR 显示项目正在为支持超大规模 VLM 模型（如 Qwen3-VL）和新一代 Archon 引擎的 LoRA 基础设施进行密集开发。

- **Issues 更新**: 3 条
- **PR 更新**: 12 条
- **Releases**: 0 个

## 2. 版本发布
无。

## 3. 重点 Issues
今日主要有 3 条 Issue 更新，涵盖了功能咨询、Bug 修复和文档维护。

- **[#945] [Question] 支持其他模型家族的 RL 训练**
    - **摘要**: 社区询问 AReaL 是否计划支持 GPT-OSS、Kimi K2、GLM4.5 等模型。作者提到这是 2025 Q3 路线图的一部分。
    - **链接**: [inclusionAI/AReaL Issue #945](https://github.com/inclusionAI/AReaL/issues/945)

- **[#1020] [Bug] 修复 LoRA 权重更新 XCCL 问题**
    - **摘要**: 报告了 `update_weights_lora_xccl` 在使用 Docker 镜像时存在的 LoRA 版本控制 Bug。
    - **链接**: [inclusionAI/AReaL Issue #1020](https://github.com/inclusionAI/AReaL/issues/1020)

- **[#1016] [Doc] 微信群二维码过期**
    - **摘要**: 文档中的社区沟通渠道（微信群）二维码已失效，需维护更新。
    - **链接**: [inclusionAI/AReaL Issue #1016](https://github.com/inclusionAI/AReaL/issues/1016)

## 4. 关键 PR 进展
今日的 Pull Requests 显示了 AReaL 在底层 infra 和多模态能力上的显著推进。

### 系统架构与优化
- **[#983] [Feat] FSDP2 流水线优化 (Per-Layer Optimizer Step)** [CLOSED]
    - **摘要**: 引入 `PerLayerOptimWrapper`，实现逐层优化器步骤与异步 H2D/D2D 预取流水线，旨在解决 FSDP2 训练中 CPU Adam 速度慢的问题。
    - **链接**: [inclusionAI/AReaL PR #983](https://github.com/inclusionAI/AReaL/pull/983)

- **[#1017] [Refactor] 简化 RTensor 并移除源追踪**
    - **摘要**: 将 RTensor 从多分片源追踪抽象简化为轻量级单分片远程张量引用，并将数据并行逻辑提取到独立模块以解耦。
    - **链接**: [inclusionAI/AReaL PR #1017](https://github.com/inclusionAI/AReaL/pull/1017)

- **[#1015] & [#1000] Archon 引擎 LoRA 基础设施建设**
    - **摘要**: 这两个 PR 共同构建了 Archon 引擎的 LoRA 支持（Phase 1 & 2），实现了与 FSDP2/DTensor 的兼容及 PEFT 检查点支持，解决了 FSDP 钩子导致的死锁问题。
    - **链接**: [inclusionAI/AReaL PR #1015](https://github.com/inclusionAI/AReaL/pull/1015), [inclusionAI/AReaL PR #1000](https://github.com/inclusionAI/AReaL/pull/1000)

### 多模态与异构计算
- **[#965] [Feat] VLM 张量并行与高效加载**
    - **摘要**: 修改 FSDP 引擎以支持 Qwen3-VL-32B 等大模型的高效加载，避免初始化 OOM，并提供了正确的 vLLM 张量并行配置示例。
    - **链接**: [inclusionAI/AReaL PR #965](https://github.com/inclusionAI/AReaL/pull/965)

- **[#972] [Feat] Ascend 平台 VLM 多轮训练支持**
    - **摘要**: 扩展了 Ascend NPU 的能力，支持视觉语言模型 (VLM) 的多轮 Agentic 训练，包含自动错误恢复机制。
    - **链接**: [inclusionAI/AReaL PR #972](https://github.com/inclusionAI/AReaL/pull/972)

- **[#1022] Update NPU doc for v1.0.1 release**
    - **摘要**: 更新了 Ascend NPU 相关文档，匹配 v1.0.1 版本容器镜像。
    - **链接**: [inclusionAI/AReaL PR #1022](https://github.com/inclusionAI/AReaL/pull/1022)

## 5. 为什么这个项目值得在当前 RL 生态继续关注
AReaL 正在从一个纯粹的 RL 训练框架演变为一个**支持异构算力（GPU/NPU）和超大规模多模态模型**的高性能系统：

1.  **攻克 VLM 训练难题**: 最近的 PR（#965, #972）表明项目正在解决 VLM（如 Qwen3-VL）在 RL 阶段的显存瓶颈和多轮对话训练痛点，这是目前 LLM 进化到 LM-Agent 的关键路径。
2.  **深度优化 FSDP2**: 通过 Per-layer Optimizer（#983）和 RTensor 重构（#1017），项目正在探索 FSDP2 极限性能，这对大规模分布式训练至关重要。
3.  **生态兼容性**: 无论是针对 Archon 引擎的 LoRA 支持，还是对 Ascend NPU 的深度适配，都显示其试图打造一个跨硬件、跨模型架构的通用 RL 底座。

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

以下是 TRL (Transformers Reinforcement Learning) 项目的 2026-03-12 日报摘要。

### 1. 今日速览
过去 24 小时内，TRL 项目活跃度主要集中在 **代码质量维护与功能增强**。虽然没有新的版本发布，但合并了 7 个 PR，涉及文档修复、CLI 参数解析以及对 vLLM 默认模式的重大调整。Issues 方面，社区关注点在于**新兴模型（Qwen3.5）与 vLLM 后端的兼容性**以及国产硬件（Ascend）的适配问题。

### 2. 版本发布
*   **无新版本发布**。

### 3. 重点 Issues
*   **Qwen3.5 + vLLM 兼容性问题** [#5269](https://github.com/huggingface/trl/issues/5269)
    *   **详情**：用户在使用 TRL 最新主分支配合 vLLM 0.17.0 对 Qwen3.5-0.8B 进行 GRPO 训练时遇到 `ValueError`。错误提示 `Qwen3_5ForConditionalGeneration` 中找不到 'model' 模块。这反映了 TRL 对最新模型架构的支持可能存在滞后，或 vLLM 最新版的接口发生了破坏性变更。
*   **国产硬件适配缺失 (Ascend)** [#5271](https://github.com/huggingface/trl/issues/5271)
    *   **详情**：用户尝试在华为昇腾架构上运行 ms-swift GRPO 训练时，报错 `No module named 'vllm_ascend'`。尽管该 Issue 随后被关闭，但它揭示了当前 TRL 或其依赖生态在非 NVIDIA 硬件（特别是 vLLM 的 Ascend 后端）上的部署仍存在依赖痛点。

### 4. 关键 PR 进展
今日的 PR 动态显示出项目正在积极优化开发者体验（DX）和多模态支持。

*   **[Feature] vLLM 默认模式切换** [#5255](https://github.com/huggingface/trl/pull/5255) (Open)
    *   **核心变更**：拟将所有配置（GRPO, RLOO, GOLD, OnlineDPO）的默认 `vllm_mode` 从 `"server"` 改为 `"colocate"`。
    *   **分析**：这是一个重要的 UX 改进。`colocate` 模式允许 vLLM 与训练进程共存，无需用户手动搭建并维护一个独立的 vLLM 服务器，极大地降低了入门门槛和运维复杂度。

*   **[Feature] 增强自定义 Reward 日志能力** [#5233](https://github.com/huggingface/trl/pull/5233) (Open)
    *   **核心变更**：为 GRPO 和 RLOO 的 reward function 添加 `log_extra` 和 `log_metric` 钩子。
    *   **分析**：允许用户在自定义奖励函数中记录额外的列和标量指标，而不需要访问 Trainer 的私有状态。这对复杂 RLHF 实验的可视化和 Debug 至关重要。

*   **[Bugfix] 修复多模态 bf16/fp16 训练崩溃** [#5073](https://github.com/huggingface/trl/pull/5073) (Open)
    *   **核心变更**：在 VLM 训练中，强制将 `pixel_values` 转换为计算精度（bf16/fp16）。
    *   **分析**：修复了在 DeepSpeed 等环境下，视觉编码器权重为半精度但输入为 float32 导致的 `torch.layer_norm` 崩溃问题，提高了 VLM 训练的稳定性。

*   **[Algorithm] 新增 SDPO Trainer** [#4935](https://github.com/huggingface/trl/pull/4935) (Open)
    *   **核心变更**：实现 SDPO (Self-Distillation Policy Optimization) 算法。
    *   **分析**：引入自蒸馏机制，利用模型自身的高奖励轨迹转化为密集的学习信号，是对现有 DPO 算法的一种前沿扩展。

*   **[Maintenance] CLI 参数与文档修复**
    *   修复了 CLI 传递 JSON 字符串时的参数类型解析 ([#5258](https://github.com/huggingface/trl/pull/5258), [#5266](https://github.com/huggingface/trl/pull/5266))。
    *   修复了 OnlineDPO 中的错误信息引用 ([#5237](https://github.com/huggingface/trl/pull/5237))。
    *   更新了 README Banner 以适配明暗主题 ([#5270](https://github.com/huggingface/trl/pull/5270))。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
1.  **降低 LLM RLHF 的工程门槛**：PR #5255 将 vLLM 默认模式改为 `colocate`，表明 TRL 正在努力解决 RL 训练中“环境（推理服务）搭建难”的痛点，使算法工程师能更专注于策略优化本身。
2.  **紧跟多模态与前沿算法**：从修复 VLM 训练精度的 PR #5073 到引入 SDPO 算法的 PR #4935，TRL 保持了作为 SOTA (State-of-the-Art) 算法库的敏捷性，不仅是 DPO/PPO 的实现库，更是新算法的试验田。
3.  **快速响应新模型生态**：尽管 Issue #5269 暴露了兼容性问题，但这类 Issue 的出现通常意味着社区正在第一时间尝试将最新的基座模型（如 Qwen3.5）与 TRL 结合，证明了其在工业界落地流水线中的核心地位。

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

# Tianshou RL 日报摘要 (2026-03-12)

## 1. 今日速览
Tianshou 仓库在过去 24 小时内整体平稳，无代码合并或版本发布。社区反馈集中在 v2.0 高层 API 的使用细节上，出现了一例关于 `Experiment` 工作流结果返回的技术性 Issue。

## 2. 版本发布
过去 24 小时无新版本发布。

## 3. 重点 Issues
- **[#1288] `ExperimentResult.trainer_result` 始终为 `None`**
    - **链接**: [thu-ml/tianshou Issue #1288](https://github.com/thu-ml/tianshou/issues/1288)
    - **详情**: 用户在使用 v2.0 高层 API `Experiment.run()` 时发现返回对象中的 `trainer_result` 属性始终为 `None`，怀疑内部逻辑存在缺失赋值的情况。该问题影响实验结果的直接获取，需确认是否为 API 设计变更或逻辑 Bug。

## 4. 关键 PR 进展
过去 24 小时无活跃的 Pull Request 更新。

## 5. 为什么这个项目值得在当前 RL 生态继续关注
Tianshou 作为国内领先的强化学习库，其 **v2.0 版本** 正在通过高层 API（如 `Experiment`）大幅降低 RL 实验的管理复杂度。今日 Issue 虽然指出了潜在 Bug，但也侧面反映了社区正在积极适配和测试其最新的高层抽象接口。对于追求**模块化设计**与**生产级代码质量**的研究者而言，Tianshou 对 PyTorch 生态的深度支持及其在 On-policy/Off-policy 算法上的统一实现，依然使其保持在 RL 开源技术栈的核心位置。

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

以下是 **verl** 项目 2026-03-12 的 RL 日报摘要。

---

### 1. 今日速览
过去 24 小时内，**verl** 生态保持高度活跃。社区重点关注**多模态（视频/图像）RLHF** 的稳定性、**昇腾 NPU** 的适配进展以及**异步生成（Async Rollout）**的性能调优。虽然没有新版本发布，但围绕 `Qwen3.5`、`GDPO` 算法和 `SGLang LoRA` 的 PR 正在密集推进。

- **Issues 更新**: 16 条（含多个关于 NPU 和乱码生成的关键 Bug 报告）
- **PR 更新**: 28 条（含算法新增、推理引擎集成与 CI 优化）

---

### 2. 版本发布
过去 24 小时无新版本 Release。

---

### 3. 重点 Issues

#### 🔥 核心故障与稳定性
1.  **[NPU] 异步 Rollout 生成乱码**
    在昇腾 NPU 上使用 `fully_async_policy` 运行 GRPO 时，虽然程序未 Crash，但 Rollout 阶段生成的文本全是乱码（俄文、特殊符号等），疑似底层算子或权重同步问题。
    [Issue #5563](https://github.com/verl-project/verl/issues/5563)

2.  **[Qwen3-VL] 视频数据 Batch 维度不匹配**
    在混合不同时长（帧数）的视频数据进行 RLHF 训练时，`position_ids` 出现维度错误，阻碍了视频模型的批量训练。
    [Issue #5554](https://github.com/verl-project/verl/issues/5554)

3.  **[FSDP] Qwen3-next 训练 Hang 住**
    使用 FSDP 在 NPU 上训练 Qwen3-next 80B 模型时出现 `NCCL ALLTOALL Timeout`，初步排查为 FSDP 训练过程卡死。
    [Issue #5414](https://github.com/verl-project/verl/issues/5414)

#### 🛠 功能缺失与配置
1.  **[Reward] GSM8K 奖励函数未实现**
    用户直接运行快速启动文档脚本时遭遇 `NotImplementedError`，提示 `openai/gsm8k` 数据源缺少奖励函数实现。
    [Issue #5558](https://github.com/verl-project/verl/issues/5558)

2.  **[Async] 模式 3 效果异常**
    开发者反馈 `fully_async_policy` 的模式 3 资源闲置率最低，但实际耗时却最长，且缺乏官方基准数据。
    [Issue #5458](https://github.com/verl-project/verl/issues/5458)

---

### 4. 关键 PR 进展

#### 🚀 新算法与模型支持
1.  **[Algo] 支持 GDPO 算法**
    引入 GDPO (Group reward-Decoupled Normalization Policy Optimization)，通过解耦组归一化优化策略，尝试复现论文结果。
    [PR #5503](https://github.com/verl-project/verl/pull/5503)

2.  **[Model] Qwen3.5 训练示例**
    基于 mbridge 支持，添加了 Qwen3.5 的 SFT 训练示例和脚本。
    [PR #5381](https://github.com/verl-project/verl/pull/5381)

#### ⚡️ 推理引擎与性能优化
1.  **[SGLang] 支持 LoRA (Merge + Native)**
    为 SGLang Rollout 添加双模式 LoRA 支持（Merge 模式和 Native Adapter 模式），以对齐 vLLM 的能力。
    [PR #5564](https://github.com/verl-project/verl/pull/5564)

2.  **[Rollout] 解耦推测解码**
    提议在 Rollout 阶段集成解耦推测机制，以显著加速 LLM 后训练过程。
    [Issue #5559](https://github.com/verl-project/verl/issues/5559) (相关 Feature Request)

3.  **[Multimodal] 支持 Qwen-Image Flow-GRPO**
    推进基于 vLLM-Omni 的 Flow-GRPO 训练支持，集成 Diffusers 作为训练引擎。
    [PR #5297](https://github.com/verl-project/verl/pull/5297)

#### 🤖 Agent 与环境集成
1.  **[Integration] Atropos 环境集成**
    将 Atropos RL 环境与 verl 的 GRPO 流水线集成，通过 API 钩子实现环境注册与交互。
    [PR #5520](https://github.com/verl-project/verl/pull/5520)

---

### 5. 为什么这个项目值得在当前 RL 生态继续关注

1.  **多模态 RLHF 的前沿探索**
    相比仅关注文本的 RL 框架，verl 正在积极解决 **Video RLHF**（变长帧处理）和 **Image Generation** (Flow-GRPO) 的工程挑战，这在当前 Sora/GenAI 时代极具稀缺性。

2.  **异构计算生态完善**
    项目对 **华为昇腾 NPU** 的支持力度极大（专门的 Roadmap Issue #5526 和 CI 适配），且正在解决 A2 芯片上的通信和算子问题，是构建跨平台 RL 基础设施的重要参考。

3.  **算法与工程架构的快速迭代**
    社区不仅快速跟进最新的论文算法（如 GDPO），还在架构层面探索 **Decoupled Speculation** 和 **Fully Async Policy**，试图打破 LLM Post-training 中的显存与通信瓶颈。

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL 日报：Open Instruct 生态摘要 (2026-03-12)

## 1. 今日速览
Open Instruct 在过去 24 小时内无新版本发布，主要精力集中在**底层架构重构**与**训练鲁棒性提升**。社区活动主要体现在 PR 的密集更新上（共 8 个），核心开发者 @finbarrtimbers 和 @wolfecameron 正在推进 OLMo-core 的分布式 GRPO 集成以及离线蒸馏栈的构建。

## 2. 版本发布
*   **无**

## 3. 重点 Issues
*   **无**：过去 24 小时内无新增或更新的 Issue，项目目前处于功能快速迭代期，反馈主要集中在 PR 讨论中。

## 4. 关键 PR 进展

### 核心算法与架构升级
*   **[WIP] grpo_fast.py 增加 PPO 支持** (#1462 by @hamishive)
    *   **进展**：正在为 GRPO 流程引入 PPO 风格的训练能力。
    *   **技术细节**：支持通过学习 Value Model 进行优势估计（GAE），而非仅依赖 GRPO 的组归一化奖励。新增配置项包括 `use_value_model`, `gae_lambda`, `separate_value_model` 等。这对于需要更精细信用分配的复杂 RL 任务至关重要。
    *   **链接**：[allenai/open-instruct PR #1462](https://github.com/allenai/open-instruct/pull/1462)

*   **集成 OLMo-core Ray Actor (GRPO 系列 PR 4/5)** (#1398 by @finbarrtimbers)
    *   **进展**：添加 `grpo_olmo_core_actor.py`，封装分布式训练基础设施。
    *   **技术细节**：引入 `PolicyTrainerOLMoCoreProcess` 和 `OLMoCoreModelGroup`，旨在跨多节点 GPU 进行分布式 GRPO 训练。
    *   **链接**：[allenai/open-instruct PR #1398](https://github.com/allenai/open-instruct/pull/1398)

*   **OLMo-core Trainer 回调机制** (#1397 by @finbarrtimbers)
    *   **进展**：为 OLMo-core Trainer 添加 GRPO 专用回调。
    *   **技术细节**：包含 `VLLMWeightSyncCallback`（同步权重至 vLLM 引擎）和 `RefPolicyUpdateCallback`（Polyak 平均更新参考策略）。
    *   **链接**：[allenai/open-instruct PR #1397](https://github.com/allenai/open-instruct/pull/1397)

### 新功能：离线蒸馏
*   **[Feature] 离线蒸馏栈** (#1520 by @wolfecameron)
    *   **进展**：提交了完整的离线蒸馏实现方案。
    *   **技术细节**：包含 `sample_logits_vllm.py`（基于 vLLM 捕获 Teacher Logits 并进行 Top-k 压缩）和 `offline_distill.py`（Student 模型训练）。这提供了一条不依赖在线 RL 的模型能力迁移路径。
    *   **链接**：[allenai/open-instruct PR #1520](https://github.com/allenai/open-instruct/pull/1520)

### 工程化与鲁棒性
*   **[FIX] 修复 GRPO 数据预处理 Actor 的检查点恢复** (#1523 by @MohdElgaar)
    *   **内容**：修复了从 Checkpoint 恢复时 `client_state` 加载逻辑，确保续训能从正确的 `last_consumed_step` 继续，避免数据重复或丢失。
    *   **链接**：[allenai/open-instruct PR #1523](https://github.com/allenai/open-instruct/pull/1523)

*   **[FIX] GPU 测试失败修复** (#1514 by @finbarrtimbers)
    *   **状态**：CLOSED
    *   **内容**：修复了 `padding_free_collator` 中因 `attention_mask` 键名不匹配（DPO 使用 `chosen_`/`rejected_` 前缀）导致的 GPU 测试失败。
    *   **链接**：[allenai/open-instruct PR #1514](https://github.com/allenai/open-instruct/pull/1514)

*   **[MAINT] 移除 Augusta 集群引用 & 扩展贡献文档** (#1522, #1521 by @finbarrtimbers)
    *   **状态**：CLOSED
    *   **内容**：清理了已退役集群的代码，并详细补充了 CI/CD 流程及 Beaker 实验运行指南。
    *   **链接**：[allenai/open-instruct PR #1522](https://github.com/allenai/open-instruct/pull/1522) | [PR #1521](https://github.com/allenai/open-instruct/pull/1521)

## 5. 为什么值得持续关注
Open Instruct 正在从一个单纯的指令微调工具库演进为**集成了前沿 RL 算法与底层计算优化**的全栈式训练框架。

1.  **算法融合趋势**：#1462 将 PPO 的 Value-based 优化与 GRPO 的 Group-relative 优化结合，展示了在 Post-training 阶段混合不同 RL 范式的探索，这是当前提升 LLM 推理能力的技术热点。
2.  **基础设施深度优化**：通过 #1398 和 #1397，项目正在将训练循环与 OLMo-core 的底层高性能计算解耦，这种模块化设计通常意味着为大规模（如 100B+ 参数）分布式训练做好了准备。
3.  **数据效率与蒸馏**：#1520 引入的离线蒸馏栈表明项目方正在关注除 RLHF 之外的另一种高效模型提升路径，这对资源受限的开发者极具吸引力。

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

# RL 日报：PettingZoo 生态监测 (2026-03-12)

**数据源**: github.com/Farama-Foundation/PettingZoo
**分析师**: RL Open Source Analyst

---

### 1. 今日速览
PettingZoo 仓库过去 24 小时处于低活跃度状态，无代码提交或版本发布。社区焦点主要集中在长期维护性问题上，特别是对 Python 3.13 的兼容性讨论在今日有新的回复动态。

### 2. 版本发布
*   **无新版本发布**：近期未检测到新的 Release 版本。

### 3. 重点 Issues
*   **[兼容性咨询] Python 3.13 支持计划**
    *   **编号**: [#1303](https://github.com/Farama-Foundation/PtingZoo/issues/1303)
    *   **状态**: OPEN
    *   **动态**: 虽创建于 2025 年 8 月，但该 Issue 于昨日（2026-03-11）更新了评论。
    *   **内容摘要**: 社区成员 @steveyuwono（也是 MLPractices 项目开发者）询问 PettingZoo 是否计划支持 Python 3.13。随着 Python 新版本的普及，下游项目依赖库的兼容性成为关键瓶颈。
    *   **分析师点评**: 这反映了 Farama 基金会旗下项目普遍面临的维护挑战，即如何跟进上游 Python 版本的快速迭代。该 Issue 的高互动（2 评论, 1 点赞）表明用户对新版 Python 支持有切实需求。

### 4. 关键 PR 进展
*   **无活跃 PR**：过去 24 小时内无 PR 更新、合并或开启。

### 5. 为什么这个项目值得在当前 RL 生态继续关注
尽管今日代码更新停滞，PettingZoo 仍是多智能体强化学习（MARL）领域的基石项目：
*   **标准定义**: 它提供了类似于 Gymnasium 的通用 API，是连接不同 MARL 环境的事实标准。
*   **生态集成**: 作为 Farama Foundation 的一部分，它与 Stable-Baselines3、Tianshou 等主流算法库深度集成。
*   **环境多样性**: 维护着大量经典的多智能体环境（如 MPE, SISL），是算法基准测试的首选起点。

---
*以上数据基于 GitHub 公开信息生成，截止时间 2026-03-12 00:00 UTC。*

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

过去24小时无活动。

</details>